---
name: "youtube-short-field-note"
description: "Create and publish fresh four-scene YouTube Shorts."
---

# YouTube Short Field Note

Use when Christopher asks OpenClaw to create, render, test, upload, publish, invoke, run, or use the YouTube Short field-note workflow proved on June 21, 2026.

The workflow creates one public-safe YouTube Short for the `AugmentedThinker` channel from four freshly generated vertical AI images, concise scene-matching overlays, Ken Burns-style motion with varied scene lengths, local verification, approved public upload, YouTube API verification, and logging.

## Boundaries

- Treat YouTube upload as external and reputation-bearing.
- Default to local render/dry-run unless Christopher explicitly asks to post, upload, publish, or invoke the live skill.
- When Christopher says to `invoke`, `run`, or `use` this live YouTube Short skill after approval, treat that as approval to create and publish one public Short unless the message clearly asks for draft/dry-run only.
- Do not print or expose YouTube OAuth client files, token files, credentials, secrets, raw private memory, or uncurated logs.
- Do not comment, reply, change channel/profile settings, edit older videos, schedule videos, or cross-post unless Christopher explicitly asks.
- Do not upload if image generation, image count, render verification, caption readability, upload verification, or public/private review fails. Stop and report the blocker.
- Do not rely on old `tmp/` media as the source for a new public Short. Use fresh generated images for actual runs unless Christopher explicitly asks for reuse.

## Required Context

Read only what is needed:

1. `content/projects/youtube-shorts-operating-brief.md` for current YouTube lane boundaries and creative direction.
2. `content/projects/youtube-shorts-critique-loop.md` for the newest behavior-changing critique.
3. The latest relevant `content/notes/` session note and one recent `content/reflections/` reflection when grounding the Short in recent work.
4. `memory/youtube-daily-shorts-log.md` for recent upload trail and duplicate awareness.
5. `memory/YYYY-MM-DD.md` only in direct private collaboration with Christopher when recent private continuity is needed.
6. `.openclaw/reference-images/vibe/` for visual style inspection. Use these as inspiration by default, not direct generation references unless Christopher asks.
7. Existing repository YouTube tools, especially `tools/youtube-daily-short-upload.mjs` and `tools/youtube-oauth.mjs`, before creating any task-local upload helper.

## Creative Shape

Default format:

- 4 scenes.
- 9:16 vertical images.
- 10 to 14 seconds total unless Christopher asks otherwise.
- Varied scene lengths, usually around 3.0 to 3.8 seconds.
- Slow push-in, pull-back, or pan per scene.
- No audio by default unless Christopher asks.
- One or two short overlay lines per scene.
- Text in the upper safe area, not near the bottom/right UI danger zones.
- Strong hook in scene 1.
- Single clean scenes, not accidental collage sheets.

Default story arc:

1. Hook: a signal, decision, threat, choice, or strange visible premise.
2. Direction: Christopher sets the aim or chooses the next move.
3. Public test: OpenClaw helps send the field test into the world.
4. Learning: the signal returns as the next instruction.

Keep the OpenClaw identity visible when appropriate: Christopher plus a small cream OpenClaw robot with teal eyes and subtle red claw markings working together in grounded field-station, rooftop, workshop, signal, or project environments.

## Fresh Image Requirement

Actual YouTube Short runs must use four freshly generated vertical AI images for the current run.

- Do not recycle old YouTube, Bluesky, Learning Loops, or Workshop images as scene media unless Christopher explicitly asks.
- Existing images may guide style, setting, character consistency, or palette.
- If image generation fails or produces fewer than four usable images, stop and report: `Image generation failed, so I did not upload a YouTube Short.`
- If one image is weak and time allows, retry that scene once. Otherwise stop rather than filling the gap with old media.

Prompt each image as one clean scene:

- vertical 9:16 YouTube Short scene image;
- painterly cinematic realism or current OpenClaw field-note visual style;
- concrete setting, action, and visual signal;
- safe negative space in the upper third for external text overlay;
- no readable text, captions, logos, watermark, collage panels, split-screen, or extra characters.

After generation:

- Copy selected images into `/home/augmentedthinker/.openclaw/media/tool-image-generation/`.
- Use a stable run-specific prefix, such as `youtube-daily-short-YYYY-MM-DD-{slug}-scene-01.png`.
- Preserve original generated files unless Christopher asks to delete them.
- Verify each file exists and is vertical.

## Story Metadata

Create a small story JSON under `tmp/youtube-daily-shorts/{date-or-slug}/story.json`.

Include:

- `title`, ending with `#Shorts`;
- public-safe `description`;
- `tags` array;
- `captions` array with exactly four captions;
- optional `durations` array with exactly four numeric second values.

Caption rules:

- Match what is visibly happening in each image.
- Keep captions concise and readable on a phone.
- Use one or two short lines per scene.
- Avoid internal-only doctrine unless the image makes it legible.
- Avoid untested embedded newline handling in FFmpeg `drawtext=textfile`. Prefer separate drawtext layers per caption line, or inspect the contact sheet carefully.

## Render Procedure

Render with FFmpeg or an inspected local helper. For varied timing, do not use the older fixed-duration path without modification.

Use the June 21 proof-run pattern:

- Feed each PNG as a single still input, not `-loop 1 -t ...` into `zoompan`.
- Use `zoompan d={frame_count}` to control each scene duration.
- Concatenate the four processed video streams.
- Use `1080x1920`, `30 fps`, `libx264`, `yuv420p`, and `+faststart`.
- Draw each caption line separately to avoid visible square newline artifacts.

The older `tools/youtube-daily-short-upload.mjs` renderer defaults to four 6-second scenes and a 24-second video. Use it only when that duration is intended, or adapt the render step for explicit per-scene durations.

## Verification Before Upload

Before uploading, verify:

- final video exists;
- `ffprobe` reports vertical 9:16 output, preferably `1080x1920`;
- duration is within intended range, usually 10-14 seconds;
- file is non-empty and playable;
- contact sheet exists;
- captions are readable;
- no caption clipping;
- no visible newline-square artifacts;
- images are coherent single scenes;
- title, description, and tags match the video;
- no secrets or private memory are exposed.

Create and inspect a contact sheet before upload. Example:

```bash
ffmpeg -y -i {video}.mp4 \
  -vf "select='eq(n,30)+eq(n,115)+eq(n,230)+eq(n,340)',scale=270:480,tile=4x1" \
  -frames:v 1 -update 1 {contact-sheet}.jpg
```

If the contact sheet shows clipped text, unreadable captions, newline artifacts, or confusing images, fix the render before upload.

## Upload Procedure

Upload publicly only when approved by Christopher or an approved routine.

Prefer existing repository upload patterns:

- inspect `tools/youtube-daily-short-upload.mjs` before using YouTube credentials;
- use the established OAuth token/client files without printing their contents;
- if a task-local helper is needed, keep it in `tmp/`, scope it to the current run, and avoid committing it unless Christopher asks.

Upload metadata:

- privacy: `public` unless Christopher explicitly requests private/scheduled;
- category: `28`;
- made for kids: false;
- title compact and concrete;
- description public-safe;
- tags include `OpenClaw`, `AugmentedThinker`, `AI agents`, `human AI collaboration`, `YouTube Shorts`, and `Shorts`.

After upload, verify through the YouTube API:

- URL;
- privacy status;
- upload status;
- processing status;
- duration;
- definition.

## Logging

Append successful uploads to `memory/youtube-daily-shorts-log.md` with:

- timestamp;
- run slug/date;
- URL;
- local video path;
- scene image paths;
- title;
- privacy;
- upload status;
- processing status;
- duration;
- definition;
- short note if it was a manual proof run, cron run, or experiment.

For meaningful failures, append a failure entry with the blocker and whether anything public happened.

If the run teaches a durable lesson for the skill or routine, append it to `memory/YYYY-MM-DD.md` in direct private collaboration.

## Failure Behavior

Stop without uploading and report clearly when:

- image generation fails;
- fewer than four usable images exist;
- images are not vertical or are visibly wrong;
- render fails;
- duration is wrong;
- captions are clipped, unreadable, or show artifacts;
- upload credentials are missing or fail;
- YouTube upload fails;
- verification cannot confirm public/processed status;
- private or unsafe content is detected.

Use plain language:

- `Image generation failed, so I did not upload a YouTube Short.`
- `Render verification failed, so I did not upload a YouTube Short.`
- `Upload failed, so no new YouTube Short was published.`

## Skills Page Update

When this skill is applied live, update `skills.html` and `README.md` so the Skills room lists it as a Workspace-owned skill, newest-first, with the current `SKILL.md` embedded in the dropdown.

Suggested summary:

`Create and publish four-scene YouTube Shorts with fresh AI images, varied Ken Burns motion, readable overlays, local verification, YouTube upload, and logging.`

Do not list pending proposals as live skills.

## Reporting

Report concisely:

- run mode;
- images generated and copied;
- story title;
- final video path;
- duration and resolution;
- contact-sheet status;
- upload URL if published;
- YouTube verification status;
- log/memory updates;
- blockers or skipped actions.
