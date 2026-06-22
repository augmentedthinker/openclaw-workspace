---
name: "youtube-short-field-note"
description: "Create reliable fresh four-scene YouTube Shorts."
---

# YouTube Short Field Note

Use when Christopher asks OpenClaw to create, render, test, upload, publish, invoke, run, or use the YouTube Short field-note workflow.

Create one public-safe vertical YouTube Short for the `AugmentedThinker` channel from four fresh AI images, concise overlays, Ken Burns-style motion, local verification, approved upload, YouTube API verification, and logging.

## Boundaries

- Treat YouTube upload as external and reputation-bearing.
- Default to local render/dry-run unless Christopher explicitly asks to post, upload, publish, invoke, run, or use the live skill.
- When Christopher says to invoke, run, or use this live skill after approval, treat that as approval to create and publish one public Short unless the request clearly asks for draft/dry-run only.
- Do not expose YouTube OAuth files, tokens, credentials, secrets, raw private memory, or uncurated logs.
- Do not comment, reply, change channel/profile settings, edit older videos, schedule videos, or cross-post unless Christopher explicitly asks.
- Do not use old media for a normal run. Use fresh generated images unless Christopher explicitly asks for reuse.
- Stop without uploading if image generation, render verification, caption readability, upload, or YouTube verification fails.

## Required Context

Read only what is needed:

1. `content/projects/youtube-shorts-operating-brief.md` for current boundaries and direction.
2. `content/projects/youtube-shorts-critique-loop.md` for the latest behavior-changing critique.
3. The latest relevant `content/notes/` session note or `content/reflections/` reflection when needed for story grounding.
4. `memory/youtube-daily-shorts-log.md` for duplicate awareness and recent upload trail.
5. `memory/YYYY-MM-DD.md` only in direct private collaboration when recent private continuity is needed.
6. `.openclaw/reference-images/vibe/` for style inspiration only. Do not attach reference images by default.
7. Existing YouTube tooling, especially `tools/youtube-daily-short-upload.mjs` and `tools/youtube-oauth.mjs`, before creating task-local helpers.

## Creative Shape

Default format:

- 4 scenes.
- 9:16 vertical images.
- 10 to 14 seconds total.
- Varied scene lengths, usually 3.0 to 3.8 seconds.
- Slow push-in, pull-back, or pan per scene.
- No audio unless Christopher asks.
- One or two short overlay lines per scene.
- Text in the upper safe area.
- Strong hook in scene 1.
- Single clean scenes, not collage sheets, grids, storyboard pages, or split screens.

Default story arc:

1. Hook: a signal, decision, threat, choice, or strange visible premise.
2. Direction: Christopher sets the aim or chooses the next move.
3. Public test: OpenClaw helps send the field test into the world.
4. Learning: the signal returns as the next instruction.

Keep Christopher and OpenClaw visible when appropriate: Christopher plus a small cream OpenClaw robot with teal eyes and subtle red claw markings working in grounded field-station, rooftop, workshop, signal, or project environments.

## Sequential Image Generation

Generate images one scene at a time. Do not request all four images in one image-generation call for cron or normal live-skill runs.

For each scene:

1. Write a concise scene prompt for exactly one vertical 9:16 YouTube Short image.
2. Request `count=1`, `aspectRatio="9:16"`, and a run-specific filename such as `youtube-daily-short-YYYY-MM-DD-{slug}-scene-01`.
3. Use a provider timeout of about 300000 ms when the image tool supports `timeoutMs`.
4. Wait for that image to finish before starting the next scene.
5. Verify the file exists, is fresh for the current run, and is vertical.
6. If the scene fails or produces an unusable image, retry that same scene once with a simpler prompt.
7. If the retry fails, stop and report: `Image generation failed, so I did not upload a YouTube Short.`

Prompt rules for each scene:

- Ask for one clean scene only.
- Include a concrete setting, action, and visual signal.
- Leave safe negative space in the upper third for external text overlay.
- Forbid readable text, captions, logos, watermarks, collage panels, comic grids, split-screen layouts, and extra unrelated characters.
- Do not attach vibe/reference images by default; use them as inspected inspiration unless Christopher explicitly requests reference-image generation.

After all four scenes exist:

- Copy or keep selected images under `/home/augmentedthinker/.openclaw/media/tool-image-generation/` with stable run-specific names.
- Preserve original generated files unless Christopher asks to delete them.
- Continue only when exactly four usable fresh vertical scene images are available.

## Story Metadata

Create `tmp/youtube-daily-shorts/{date-or-slug}/story.json` with:

- `title`, ending with `#Shorts`;
- public-safe `description`;
- `tags` array;
- `captions` array with exactly four concise captions;
- `durations` array with exactly four numeric second values.

Captions must match what is visibly happening in each image, fit on a phone, and avoid internal-only doctrine unless the image makes it legible.

## Render

Render with FFmpeg or an inspected local helper. Prefer the June 21 proof-run pattern:

- Feed each PNG as a single still input.
- Use `zoompan d={frame_count}` for per-scene duration.
- Concatenate four processed streams.
- Output `1080x1920`, `30 fps`, `libx264`, `yuv420p`, and `+faststart`.
- Draw each caption line separately; do not depend on embedded newlines in `drawtext=textfile`.

The older `tools/youtube-daily-short-upload.mjs` renderer defaults to four 6-second scenes and a 24-second video. Use it only if that duration is intended, or adapt the render step.

## Verify Before Upload

Before upload, verify:

- final video exists and is playable;
- `ffprobe` reports vertical 9:16 output, preferably `1080x1920`;
- duration is within the intended 10 to 14 second range;
- contact sheet exists;
- captions are readable, unclipped, and free of newline artifacts;
- images are coherent single scenes;
- title, description, and tags match the video;
- no secrets or private memory are exposed.

Create and inspect a contact sheet before upload. If it shows clipped text, unreadable captions, artifacts, or confusing images, fix the render or stop.

## Upload

Upload publicly only when approved by Christopher or an approved routine.

Prefer existing repository upload patterns. Use established OAuth token/client files without printing them. If a task-local helper is needed, keep it in `tmp/`, scope it to the current run, and avoid committing it unless Christopher asks.

Upload metadata:

- privacy: `public` unless Christopher explicitly requests private/scheduled;
- category: `28`;
- made for kids: false;
- title compact and concrete;
- tags include `OpenClaw`, `AugmentedThinker`, `AI agents`, `human AI collaboration`, `YouTube Shorts`, and `Shorts`.

After upload, verify through the YouTube API: URL, privacy status, upload status, processing status, duration, and definition.

## Logging And Failure Behavior

Append successful uploads to `memory/youtube-daily-shorts-log.md` with timestamp, run slug/date, URL, local video path, scene image paths, title, privacy, upload status, processing status, duration, definition, and a short note.

For meaningful failures, append the blocker and whether anything public happened. If a durable lesson appears, append it to `memory/YYYY-MM-DD.md` in direct private collaboration.

Stop without uploading and report clearly when:

- any scene image cannot be generated after one retry;
- fewer than four usable fresh images exist;
- images are not vertical or are visibly wrong;
- render or verification fails;
- captions are clipped, unreadable, or show artifacts;
- upload credentials are missing or fail;
- YouTube upload or verification fails;
- private or unsafe content is detected.

Use plain language:

- `Image generation failed, so I did not upload a YouTube Short.`
- `Render verification failed, so I did not upload a YouTube Short.`
- `Upload failed, so no new YouTube Short was published.`

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

## Skills Page Update

When this skill is applied live, update `skills.html` and `README.md` if their embedded skill source or summary becomes stale. Do not list pending proposals as live skills.
