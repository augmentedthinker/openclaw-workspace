#!/usr/bin/env node
/** Update Bluesky avatar or banner from a local image. */
import fs from 'node:fs';
import path from 'node:path';

const SERVICE = process.env.BSKY_SERVICE || 'https://bsky.social';

function parseArgs(argv) {
  const args = { dryRun: false, field: 'avatar' };
  for (let i = 0; i < argv.length; i++) {
    const arg = argv[i];
    if (arg === '--env') { args.env = argv[++i]; continue; }
    if (arg === '--image') { args.image = argv[++i]; continue; }
    if (arg === '--field') { args.field = argv[++i]; continue; }
    if (arg === '--dry-run') { args.dryRun = true; continue; }
    console.error(`Unknown argument: ${arg}`); process.exit(1);
  }
  if (!['avatar', 'banner'].includes(args.field)) {
    console.error('--field must be avatar or banner'); process.exit(1);
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

async function xrpc(method, endpoint, body, accessJwt, contentType = 'application/json') {
  const res = await fetch(`${SERVICE}/xrpc/${endpoint}`, {
    method,
    headers: {
      'content-type': contentType,
      ...(accessJwt ? { authorization: `Bearer ${accessJwt}` } : {}),
    },
    body: body && contentType === 'application/json' ? JSON.stringify(body) : body,
  });
  const text = await res.text();
  let json;
  try { json = text ? JSON.parse(text) : {}; } catch { json = { raw: text }; }
  if (!res.ok) throw new Error(`${endpoint} failed (${res.status}): ${json.message || text}`);
  return json;
}

function mimeFromPath(imagePath) {
  const lower = imagePath.toLowerCase();
  if (lower.endsWith('.jpg') || lower.endsWith('.jpeg')) return 'image/jpeg';
  if (lower.endsWith('.webp')) return 'image/webp';
  return 'image/png';
}

const args = parseArgs(process.argv.slice(2));
if (args.env) loadEnvFile(args.env);
if (!args.image) { console.error('Missing --image'); process.exit(1); }
if (!process.env.BSKY_HANDLE || !process.env.BSKY_APP_PASSWORD) { console.error('Missing BSKY_HANDLE or BSKY_APP_PASSWORD'); process.exit(1); }

const session = await xrpc('POST', 'com.atproto.server.createSession', { identifier: process.env.BSKY_HANDLE, password: process.env.BSKY_APP_PASSWORD });
let existing;
try {
  existing = await xrpc('GET', `com.atproto.repo.getRecord?repo=${encodeURIComponent(session.did)}&collection=app.bsky.actor.profile&rkey=self`, undefined, session.accessJwt);
} catch {
  existing = { value: { '$type': 'app.bsky.actor.profile' } };
}
const imagePath = path.resolve(args.image);
const bytes = fs.readFileSync(imagePath);
const mimeType = mimeFromPath(imagePath);

if (args.dryRun) {
  console.log(JSON.stringify({ dryRun: true, handle: session.handle, field: args.field, imagePath, mimeType, bytes: bytes.length }, null, 2));
  process.exit(0);
}

const uploaded = await xrpc('POST', 'com.atproto.repo.uploadBlob', bytes, session.accessJwt, mimeType);
const record = { ...(existing.value || {}), '$type': 'app.bsky.actor.profile', [args.field]: uploaded.blob };
await xrpc('POST', 'com.atproto.repo.putRecord', { repo: session.did, collection: 'app.bsky.actor.profile', rkey: 'self', record }, session.accessJwt);
console.log(`${args.field[0].toUpperCase() + args.field.slice(1)} updated: https://bsky.app/profile/${session.handle}`);
