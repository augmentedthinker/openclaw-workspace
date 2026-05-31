#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';
import { spawnSync } from 'node:child_process';

const ROOT = process.cwd();
const MEDIA_DIR = '/home/augmentedthinker/.openclaw/media/tool-image-generation';
const CLIENT_PATH = path.join(ROOT, '.secrets', 'google-oauth-client.json');
const TOKEN_PATH = path.join(ROOT, '.secrets', 'youtube-oauth-token.json');
const OUT_BASE = path.join(ROOT, 'tmp', 'youtube-daily-shorts');
const LOG_PATH = path.join(ROOT, 'memory', 'youtube-daily-shorts-log.md');
const FONT = '/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf';

function arg(name, fallback = null) {
  const index = process.argv.indexOf(name);
  return index === -1 ? fallback : process.argv[index + 1] || fallback;
}

function todayNewYork() {
  const parts = new Intl.DateTimeFormat('en-CA', {
    timeZone: 'America/New_York',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  }).formatToParts(new Date());
  const get = (type) => parts.find((part) => part.type === type)?.value;
  return `${get('year')}-${get('month')}-${get('day')}`;
}

const date = arg('--date', todayNewYork());
const storyPath = arg('--story');
const dryRun = process.argv.includes('--dry-run');
const prefix = `youtube-daily-short-${date}`;
const outDir = path.join(OUT_BASE, date);
const videoPath = path.join(outDir, `${prefix}.mp4`);

function loadStory() {
  if (storyPath) {
    const story = JSON.parse(fs.readFileSync(storyPath, 'utf8'));
    if (!Array.isArray(story.captions) || story.captions.length !== 4) {
      throw new Error('Story JSON must include exactly four captions.');
    }
    return story;
  }
  return {
    title: `OpenClaw Field Note ${date} #Shorts`,
    description: [
      'A daily OpenClaw / AugmentedThinker visual field note on human-AI collaboration, agent workflows, and signal loops.',
      '',
      '#Shorts #OpenClaw #AugmentedThinker #AIAgents #HumanAICollaboration #AIAutomation',
    ].join('\n'),
    tags: [
      'OpenClaw',
      'AugmentedThinker',
      'AI agents',
      'AI automation',
      'human AI collaboration',
      'agent workflow',
      'creative AI',
      'YouTube Shorts',
      'Shorts',
    ],
    captions: [
      'Every day, the loop gets a little more real.',
      'Christopher brings the aim. OpenClaw brings the weird machinery.',
      'We turn images, notes, and signal into one small public test.',
      'Useful or ridiculous, the only way to learn is to ship.',
    ],
  };
}

function discoverImages() {
  const entries = fs.readdirSync(MEDIA_DIR)
    .filter((name) => name.startsWith(prefix))
    .map((name) => {
      const file = path.join(MEDIA_DIR, name);
      const stat = fs.statSync(file);
      return { file, mtimeMs: stat.mtimeMs };
    })
    .sort((a, b) => a.mtimeMs - b.mtimeMs);
  if (entries.length < 4) {
    throw new Error(`Need at least four images beginning ${prefix}; found ${entries.length}.`);
  }
  return entries.slice(-4).map((entry) => entry.file);
}

function run(command, args) {
  const result = spawnSync(command, args, { stdio: 'inherit' });
  if (result.status !== 0) {
    throw new Error(`${command} failed with exit code ${result.status}`);
  }
}

function render(images, captions) {
  fs.mkdirSync(outDir, { recursive: true });
  const captionFiles = captions.map((caption, index) => {
    const captionPath = path.join(outDir, `caption-${index + 1}.txt`);
    fs.writeFileSync(captionPath, caption);
    return captionPath.replace(/:/g, '\\:').replace(/'/g, "\\'");
  });

  const inputs = images.flatMap((image) => ['-i', image]);
  const filters = captions.map((_, index) => {
    const zoom = index % 2 === 0 ? '1+0.00065*on' : '1.17-0.0005*on';
    const xPan = index % 2 === 0 ? 'iw/2-(iw/zoom/2)+22-44*on/180' : 'iw/2-(iw/zoom/2)-22+44*on/180';
    const yPan = index === 3 ? 'ih/2-(ih/zoom/2)+24-48*on/180' : 'ih/2-(ih/zoom/2)-18+36*on/180';
    return [
      `[${index}:v]scale=1080:1920:force_original_aspect_ratio=increase`,
      'crop=1080:1920',
      `zoompan=z='${zoom}':x='${xPan}':y='${yPan}':d=180:s=1080x1920:fps=30`,
      'format=yuv420p',
      `drawtext=fontfile=${FONT}:textfile='${captionFiles[index]}':x=(w-text_w)/2:y=(h-text_h)/2:fontsize=56:line_spacing=16:fontcolor=white:bordercolor=black:borderw=5:shadowcolor=black@0.65:shadowx=4:shadowy=4:box=1:boxcolor=black@0.26:boxborderw=30`,
      `setsar=1[v${index}]`,
    ].join(',');
  });
  const filterComplex = `${filters.join(';')} ; [v0][v1][v2][v3]concat=n=4:v=1:a=0[v]`;
  run('ffmpeg', [
    '-y',
    ...inputs,
    '-filter_complex',
    filterComplex,
    '-map',
    '[v]',
    '-an',
    '-r',
    '30',
    '-c:v',
    'libx264',
    '-preset',
    'medium',
    '-crf',
    '18',
    '-movflags',
    '+faststart',
    videoPath,
  ]);
}

function readClient() {
  const raw = JSON.parse(fs.readFileSync(CLIENT_PATH, 'utf8'));
  return raw.installed || raw.web;
}

async function accessToken() {
  const client = readClient();
  const token = JSON.parse(fs.readFileSync(TOKEN_PATH, 'utf8'));
  const body = new URLSearchParams({
    client_id: client.client_id,
    client_secret: client.client_secret,
    refresh_token: token.refresh_token,
    grant_type: 'refresh_token',
  });
  const res = await fetch('https://oauth2.googleapis.com/token', {
    method: 'POST',
    headers: { 'content-type': 'application/x-www-form-urlencoded' },
    body,
  });
  const data = await res.json();
  if (!res.ok) throw new Error('Token refresh failed: ' + JSON.stringify(data));
  return data.access_token;
}

async function upload(story) {
  const access = await accessToken();
  const video = fs.readFileSync(videoPath);
  const metadata = {
    snippet: {
      title: story.title || `OpenClaw Daily Field Note ${date} #Shorts`,
      description: story.description || [
        'A daily OpenClaw / AugmentedThinker visual field note.',
        '',
        '#Shorts #OpenClaw #AugmentedThinker #AIAgents',
      ].join('\n'),
      tags: story.tags || ['OpenClaw', 'AugmentedThinker', 'AI agents', 'YouTube Shorts', 'Shorts'],
      categoryId: '28',
    },
    status: {
      privacyStatus: 'public',
      selfDeclaredMadeForKids: false,
    },
  };

  const initUrl = new URL('https://www.googleapis.com/upload/youtube/v3/videos');
  initUrl.searchParams.set('uploadType', 'resumable');
  initUrl.searchParams.set('part', 'snippet,status');
  const init = await fetch(initUrl, {
    method: 'POST',
    headers: {
      authorization: `Bearer ${access}`,
      'content-type': 'application/json; charset=UTF-8',
      'x-upload-content-length': String(video.length),
      'x-upload-content-type': 'video/mp4',
    },
    body: JSON.stringify(metadata),
  });
  if (!init.ok) throw new Error('Upload init failed: ' + init.status + ' ' + await init.text());
  const location = init.headers.get('location');
  if (!location) throw new Error('Upload init did not return a location header.');

  const sent = await fetch(location, {
    method: 'PUT',
    headers: {
      authorization: `Bearer ${access}`,
      'content-length': String(video.length),
      'content-type': 'video/mp4',
    },
    body: video,
  });
  const uploaded = await sent.json();
  if (!sent.ok) throw new Error('Upload failed: ' + sent.status + ' ' + JSON.stringify(uploaded));
  return uploaded.id;
}

async function verify(id) {
  for (let attempt = 0; attempt < 12; attempt += 1) {
    const access = await accessToken();
    const url = new URL('https://www.googleapis.com/youtube/v3/videos');
    url.searchParams.set('part', 'snippet,status,contentDetails,processingDetails');
    url.searchParams.set('id', id);
    const res = await fetch(url, { headers: { authorization: `Bearer ${access}` } });
    const data = await res.json();
    if (!res.ok) throw new Error('Verify failed: ' + JSON.stringify(data));
    const video = data.items?.[0];
    const processingStatus = video?.processingDetails?.processingStatus;
    if (processingStatus === 'succeeded' || processingStatus === 'failed' || processingStatus === 'terminated') {
      return video;
    }
    await new Promise((resolve) => setTimeout(resolve, 15000));
  }
  const access = await accessToken();
  const url = new URL('https://www.googleapis.com/youtube/v3/videos');
  url.searchParams.set('part', 'snippet,status,contentDetails,processingDetails');
  url.searchParams.set('id', id);
  const res = await fetch(url, { headers: { authorization: `Bearer ${access}` } });
  const data = await res.json();
  return data.items?.[0];
}

function appendLog(result) {
  fs.mkdirSync(path.dirname(LOG_PATH), { recursive: true });
  fs.appendFileSync(LOG_PATH, [
    `\n## ${new Date().toISOString()} - ${date}`,
    `- URL: ${result.url}`,
    `- Local video: ${result.localVideo}`,
    `- Images: ${result.images.join(', ')}`,
    `- Title: ${result.title}`,
    `- Privacy: ${result.privacyStatus}`,
    `- Upload status: ${result.uploadStatus}`,
    `- Processing status: ${result.processingStatus}`,
    `- Duration: ${result.duration}`,
    `- Definition: ${result.definition}`,
    '',
  ].join('\n'));
}

async function main() {
  const story = loadStory();
  const images = discoverImages();
  render(images, story.captions);

  if (dryRun) {
    console.log(JSON.stringify({ dryRun: true, localVideo: videoPath, images, story }, null, 2));
    return;
  }

  const id = await upload(story);
  const verified = await verify(id);
  const result = {
    id,
    url: `https://youtu.be/${id}`,
    localVideo: videoPath,
    images,
    title: verified?.snippet?.title || story.title,
    privacyStatus: verified?.status?.privacyStatus,
    uploadStatus: verified?.status?.uploadStatus,
    processingStatus: verified?.processingDetails?.processingStatus,
    duration: verified?.contentDetails?.duration,
    definition: verified?.contentDetails?.definition,
    madeForKids: verified?.status?.madeForKids,
  };
  appendLog(result);
  console.log(JSON.stringify(result, null, 2));
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
