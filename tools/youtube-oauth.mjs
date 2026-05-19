#!/usr/bin/env node
/**
 * Local OAuth helper for YouTube Data API access.
 *
 * Reads an installed-app OAuth client from .secrets/google-oauth-client.json,
 * opens a localhost callback server, prints the authorization URL, and stores
 * the resulting token in .secrets/youtube-oauth-token.json.
 */
import fs from 'node:fs';
import http from 'node:http';
import path from 'node:path';
import { URL } from 'node:url';

const ROOT = process.cwd();
const CLIENT_PATH = path.join(ROOT, '.secrets', 'google-oauth-client.json');
const TOKEN_PATH = path.join(ROOT, '.secrets', 'youtube-oauth-token.json');
const PORT = Number(process.env.YOUTUBE_OAUTH_PORT || 53682);
const REDIRECT_URI = 'http://localhost:' + PORT + '/oauth2callback';

const SCOPES = [
  'https://www.googleapis.com/auth/youtube',
  'https://www.googleapis.com/auth/youtube.force-ssl',
  'https://www.googleapis.com/auth/youtube.upload',
  'https://www.googleapis.com/auth/youtube.readonly',
];

function readClient() {
  const raw = JSON.parse(fs.readFileSync(CLIENT_PATH, 'utf8'));
  const client = raw.installed || raw.web;
  if (!client?.client_id || !client?.client_secret) {
    throw new Error('Missing client_id/client_secret in ' + CLIENT_PATH);
  }
  return client;
}

function buildAuthUrl(client) {
  const url = new URL('https://accounts.google.com/o/oauth2/v2/auth');
  url.searchParams.set('client_id', client.client_id);
  url.searchParams.set('redirect_uri', REDIRECT_URI);
  url.searchParams.set('response_type', 'code');
  url.searchParams.set('scope', SCOPES.join(' '));
  url.searchParams.set('access_type', 'offline');
  url.searchParams.set('prompt', 'consent');
  return url.toString();
}

async function exchangeCode(client, code) {
  const body = new URLSearchParams({
    client_id: client.client_id,
    client_secret: client.client_secret,
    code,
    grant_type: 'authorization_code',
    redirect_uri: REDIRECT_URI,
  });

  const res = await fetch('https://oauth2.googleapis.com/token', {
    method: 'POST',
    headers: { 'content-type': 'application/x-www-form-urlencoded' },
    body,
  });
  const token = await res.json();
  if (!res.ok) throw new Error('Token exchange failed: ' + JSON.stringify(token));
  token.created_at = new Date().toISOString();
  token.scopes_requested = SCOPES;
  fs.writeFileSync(TOKEN_PATH, JSON.stringify(token, null, 2) + '\n', { mode: 0o600 });
}

async function main() {
  const client = readClient();
  const authUrl = buildAuthUrl(client);

  const server = http.createServer(async (req, res) => {
    try {
      const url = new URL(req.url || '/', REDIRECT_URI);
      if (url.pathname !== '/oauth2callback') {
        res.writeHead(404);
        res.end('Not found');
        return;
      }
      const code = url.searchParams.get('code');
      const error = url.searchParams.get('error');
      if (error) throw new Error('Google returned error: ' + error);
      if (!code) throw new Error('Missing authorization code');
      await exchangeCode(client, code);
      res.writeHead(200, { 'content-type': 'text/plain' });
      res.end('YouTube authorization complete. You can close this tab.');
      console.log('\nToken saved to ' + TOKEN_PATH);
      server.close(() => process.exit(0));
    } catch (err) {
      res.writeHead(500, { 'content-type': 'text/plain' });
      res.end(String(err?.message || err));
      console.error(err);
      server.close(() => process.exit(1));
    }
  });

  server.listen(PORT, '127.0.0.1', () => {
    console.log('Open this URL in your browser and approve YouTube access:');
    console.log(authUrl);
    console.log('\nWaiting for callback on ' + REDIRECT_URI);
  });
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
