#!/usr/bin/env node
/**
 * Minimal Bluesky profile helper for OpenClaw Workshop.
 *
 * Usage:
 *   node tools/bluesky-profile.mjs --env .secrets/bluesky.env --get
 *   node tools/bluesky-profile.mjs --env .secrets/bluesky.env --display-name "OpenClaw Workshop" --description-file outbox/bluesky-profile.txt --dry-run
 *   node tools/bluesky-profile.mjs --env .secrets/bluesky.env --display-name "OpenClaw Workshop" --description-file outbox/bluesky-profile.txt
 */

import fs from 'node:fs';
import path from 'node:path';

const SERVICE = process.env.BSKY_SERVICE || 'https://bsky.social';

function usage(exitCode = 0) {
  console.log(`Usage: node tools/bluesky-profile.mjs --env FILE [--get | --display-name NAME --description TEXT | --description-file FILE] [--dry-run]\n`);
  process.exit(exitCode);
}

function parseArgs(argv) {
  const args = { dryRun: false, get: false };
  for (let i = 0; i < argv.length; i++) {
    const arg = argv[i];
    if (arg === '--help' || arg === '-h') usage(0);
    if (arg === '--dry-run') { args.dryRun = true; continue; }
    if (arg === '--get') { args.get = true; continue; }
    if (arg === '--env') { args.env = argv[++i]; continue; }
    if (arg === '--display-name') { args.displayName = argv[++i]; continue; }
    if (arg === '--description') { args.description = argv[++i]; continue; }
    if (arg === '--description-file') { args.descriptionFile = argv[++i]; continue; }
    console.error(`Unknown argument: ${arg}`);
    usage(1);
  }
  return args;
}

function loadEnvFile(file) {
  const data = fs.readFileSync(path.resolve(file), 'utf8');
  for (const rawLine of data.split(/\r?\n/)) {
    const line = rawLine.trim();
    if (!line || line.startsWith('#')) continue;
    const idx = line.indexOf('=');
    if (idx === -1) continue;
    const key = line.slice(0, idx).trim();
    let value = line.slice(idx + 1).trim();
    if ((value.startsWith('"') && value.endsWith('"')) || (value.startsWith("'") && value.endsWith("'"))) value = value.slice(1, -1);
    if (!process.env[key]) process.env[key] = value;
  }
}

async function xrpc(method, endpoint, body, accessJwt) {
  const res = await fetch(`${SERVICE}/xrpc/${endpoint}`, {
    method,
    headers: {
      'content-type': 'application/json',
      ...(accessJwt ? { authorization: `Bearer ${accessJwt}` } : {}),
    },
    body: body ? JSON.stringify(body) : undefined,
  });
  const text = await res.text();
  let json;
  try { json = text ? JSON.parse(text) : {}; } catch { json = { raw: text }; }
  if (!res.ok) {
    const err = new Error(`${endpoint} failed (${res.status}): ${json.message || text}`);
    err.response = json;
    throw err;
  }
  return json;
}

async function main() {
  const args = parseArgs(process.argv.slice(2));
  if (args.env) loadEnvFile(args.env);

  const identifier = process.env.BSKY_HANDLE;
  const password = process.env.BSKY_APP_PASSWORD;
  if (!identifier || !password) {
    console.error('Missing BSKY_HANDLE or BSKY_APP_PASSWORD.');
    process.exit(1);
  }

  const session = await xrpc('POST', 'com.atproto.server.createSession', { identifier, password });

  let existing;
  try {
    existing = await xrpc('GET', `com.atproto.repo.getRecord?repo=${encodeURIComponent(session.did)}&collection=app.bsky.actor.profile&rkey=self`, undefined, session.accessJwt);
  } catch (err) {
    if (!String(err.message).includes('(400)') && !String(err.message).includes('(404)')) throw err;
    existing = { value: { '$type': 'app.bsky.actor.profile' } };
  }

  if (args.get) {
    const v = existing.value || {};
    console.log(JSON.stringify({ handle: session.handle, did: session.did, displayName: v.displayName || '', description: v.description || '' }, null, 2));
    return;
  }

  let description = args.description;
  if (args.descriptionFile) description = fs.readFileSync(path.resolve(args.descriptionFile), 'utf8').trim();

  const record = {
    ...(existing.value || {}),
    '$type': 'app.bsky.actor.profile',
    ...(args.displayName !== undefined ? { displayName: args.displayName } : {}),
    ...(description !== undefined ? { description } : {}),
  };

  if (args.dryRun) {
    console.log(JSON.stringify({ dryRun: true, handle: session.handle, record }, null, 2));
    return;
  }

  await xrpc('POST', 'com.atproto.repo.putRecord', {
    repo: session.did,
    collection: 'app.bsky.actor.profile',
    rkey: 'self',
    record,
  }, session.accessJwt);

  console.log(`Profile updated: https://bsky.app/profile/${session.handle}`);
}

main().catch((err) => {
  console.error(err.message || err);
  process.exit(1);
});
