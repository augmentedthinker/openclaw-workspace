#!/usr/bin/env node
/** Post text plus one image to Bluesky. */
import fs from 'node:fs';
import path from 'node:path';

const SERVICE = process.env.BSKY_SERVICE || 'https://bsky.social';
const MAX_GRAPHEMES = 300;

function usage(code = 0) {
  console.log('Usage: node tools/bluesky-post-image.mjs --env .secrets/bluesky.env (--text TEXT | --file FILE) --image IMAGE [--alt ALT] [--dry-run]');
  process.exit(code);
}

function parseArgs(argv) {
  const args = { dryRun: false };
  for (let i = 0; i < argv.length; i++) {
    const arg = argv[i];
    if (arg === '--help' || arg === '-h') usage(0);
    if (arg === '--env') { args.env = argv[++i]; continue; }
    if (arg === '--text') { args.text = argv[++i]; continue; }
    if (arg === '--file') { args.file = argv[++i]; continue; }
    if (arg === '--image') { args.image = argv[++i]; continue; }
    if (arg === '--alt') { args.alt = argv[++i]; continue; }
    if (arg === '--dry-run') { args.dryRun = true; continue; }
    console.error(`Unknown argument: ${arg}`); usage(1);
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

function countGraphemes(text) {
  if (globalThis.Intl?.Segmenter) return [...new Intl.Segmenter('en', { granularity: 'grapheme' }).segment(text)].length;
  return [...text].length;
}

function mimeFromPath(imagePath) {
  const lower = imagePath.toLowerCase();
  if (lower.endsWith('.jpg') || lower.endsWith('.jpeg')) return 'image/jpeg';
  if (lower.endsWith('.webp')) return 'image/webp';
  return 'image/png';
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
  const raw = await res.text();
  let json;
  try { json = raw ? JSON.parse(raw) : {}; } catch { json = { raw }; }
  if (!res.ok) throw new Error(`${endpoint} failed (${res.status}): ${json.message || raw}`);
  return json;
}

async function main() {
  const args = parseArgs(process.argv.slice(2));
  if (args.env) loadEnvFile(args.env);

  let text = args.text;
  if (args.file) text = fs.readFileSync(path.resolve(args.file), 'utf8');
  text = (text || '').trim();
  if (!text) { console.error('Missing --text or --file'); usage(1); }
  if (!args.image) { console.error('Missing --image'); usage(1); }

  const graphemes = countGraphemes(text);
  if (graphemes > MAX_GRAPHEMES) throw new Error(`Post is ${graphemes} characters; Bluesky limit is ${MAX_GRAPHEMES}.`);

  const imagePath = path.resolve(args.image);
  const imageBytes = fs.readFileSync(imagePath);
  const mimeType = mimeFromPath(imagePath);
  const alt = args.alt || 'AI-generated image for an OpenClaw Workshop field note.';

  if (args.dryRun) {
    console.log(JSON.stringify({ dryRun: true, text, graphemes, imagePath, mimeType, imageBytes: imageBytes.length, alt }, null, 2));
    return;
  }

  if (!process.env.BSKY_HANDLE || !process.env.BSKY_APP_PASSWORD) throw new Error('Missing BSKY_HANDLE or BSKY_APP_PASSWORD.');
  const session = await xrpc('POST', 'com.atproto.server.createSession', { identifier: process.env.BSKY_HANDLE, password: process.env.BSKY_APP_PASSWORD });
  const uploaded = await xrpc('POST', 'com.atproto.repo.uploadBlob', imageBytes, session.accessJwt, mimeType);

  const record = {
    '$type': 'app.bsky.feed.post',
    text,
    createdAt: new Date().toISOString(),
    embed: {
      '$type': 'app.bsky.embed.images',
      images: [{ image: uploaded.blob, alt }],
    },
  };

  const created = await xrpc('POST', 'com.atproto.repo.createRecord', {
    repo: session.did,
    collection: 'app.bsky.feed.post',
    record,
  }, session.accessJwt);

  const rkey = created.uri.split('/').pop();
  console.log(`Posted to Bluesky: https://bsky.app/profile/${session.handle}/post/${rkey}`);
}

main().catch((err) => { console.error(err.message || err); process.exit(1); });
