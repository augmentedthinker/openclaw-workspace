#!/usr/bin/env node
/**
 * Minimal Bluesky posting helper for OpenClaw Workshop.
 *
 * Usage:
 *   BSKY_HANDLE="your.handle" BSKY_APP_PASSWORD="xxxx-xxxx-xxxx-xxxx" node tools/bluesky-post.mjs --text "hello"
 *   node tools/bluesky-post.mjs --env .secrets/bluesky.env --text "hello"
 *   node tools/bluesky-post.mjs --env .secrets/bluesky.env --file draft.txt --dry-run
 */

import fs from 'node:fs';
import path from 'node:path';

const SERVICE = process.env.BSKY_SERVICE || 'https://bsky.social';
const MAX_GRAPHEMES = 300;

function usage(exitCode = 0) {
  console.log(`Usage: node tools/bluesky-post.mjs [--env FILE] (--text TEXT | --file FILE) [--dry-run]\n\nOptions:\n  --env FILE     Load BSKY_HANDLE and BSKY_APP_PASSWORD from a local env file\n  --text TEXT    Post text directly\n  --file FILE    Read post text from file\n  --dry-run      Validate and print without posting\n`);
  process.exit(exitCode);
}

function parseArgs(argv) {
  const args = { dryRun: false };
  for (let i = 0; i < argv.length; i++) {
    const arg = argv[i];
    if (arg === '--help' || arg === '-h') usage(0);
    if (arg === '--dry-run') { args.dryRun = true; continue; }
    if (arg === '--env') { args.env = argv[++i]; continue; }
    if (arg === '--text') { args.text = argv[++i]; continue; }
    if (arg === '--file') { args.file = argv[++i]; continue; }
    console.error(`Unknown argument: ${arg}`);
    usage(1);
  }
  return args;
}

function loadEnvFile(file) {
  const full = path.resolve(file);
  const data = fs.readFileSync(full, 'utf8');
  for (const rawLine of data.split(/\r?\n/)) {
    const line = rawLine.trim();
    if (!line || line.startsWith('#')) continue;
    const idx = line.indexOf('=');
    if (idx === -1) continue;
    const key = line.slice(0, idx).trim();
    let value = line.slice(idx + 1).trim();
    if ((value.startsWith('"') && value.endsWith('"')) || (value.startsWith("'") && value.endsWith("'"))) {
      value = value.slice(1, -1);
    }
    if (!process.env[key]) process.env[key] = value;
  }
}

function countGraphemes(text) {
  if (globalThis.Intl?.Segmenter) {
    return [...new Intl.Segmenter('en', { granularity: 'grapheme' }).segment(text)].length;
  }
  return [...text].length;
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

  let text = args.text;
  if (args.file) text = fs.readFileSync(path.resolve(args.file), 'utf8');
  text = (text || '').trim();

  if (!text) {
    console.error('Missing post text. Use --text or --file.');
    usage(1);
  }

  const graphemes = countGraphemes(text);
  if (graphemes > MAX_GRAPHEMES) {
    console.error(`Post is ${graphemes} characters; Bluesky limit is ${MAX_GRAPHEMES}.`);
    process.exit(1);
  }

  if (args.dryRun) {
    console.log(`DRY RUN OK (${graphemes}/${MAX_GRAPHEMES})\n---\n${text}`);
    return;
  }

  const identifier = process.env.BSKY_HANDLE;
  const password = process.env.BSKY_APP_PASSWORD;
  if (!identifier || !password) {
    console.error('Missing BSKY_HANDLE or BSKY_APP_PASSWORD. Use --env .secrets/bluesky.env or environment variables.');
    process.exit(1);
  }

  const session = await xrpc('POST', 'com.atproto.server.createSession', { identifier, password });
  const record = {
    '$type': 'app.bsky.feed.post',
    text,
    createdAt: new Date().toISOString(),
  };

  const created = await xrpc('POST', 'com.atproto.repo.createRecord', {
    repo: session.did,
    collection: 'app.bsky.feed.post',
    record,
  }, session.accessJwt);

  const rkey = created.uri.split('/').pop();
  const handle = session.handle || identifier;
  console.log(`Posted to Bluesky: https://bsky.app/profile/${handle}/post/${rkey}`);
}

main().catch((err) => {
  console.error(err.message || err);
  process.exit(1);
});
