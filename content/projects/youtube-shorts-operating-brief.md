---
title: "YouTube Shorts Daily Cron"
date: 2026-07-06
category: youtube
status: legacy active
public_html: ../../projects/youtube-shorts-operating-brief.html
---

# YouTube Shorts Daily Cron

This page is the stable public entry point for the current YouTube lane. The lane is **legacy active**: it is already working, it publishes daily when verification passes, and it should stay stable while new video experiments happen elsewhere.

In plain English, this cron starts an isolated OpenClaw run, tells it to use the live `youtube-short-field-note` skill, generates four fresh vertical scenes one at a time, renders a phone-ready Short, verifies the video and contact sheet, uploads publicly through the YouTube API only after checks pass, logs the result, and reports back to Telegram.

## Current Live State

- **Cron name:** `Daily YouTube Short skill`
- **Cron ID:** `ef4fc5dc-d405-4d5e-9ad5-17039777f1fa`
- **Status:** enabled
- **Schedule:** `30 12 * * *` in `America/New_York`
- **Runtime:** isolated agent turn on `gpt-5.5` with medium thinking
- **Timeout:** 3600 seconds
- **Delivery:** Telegram announce to Christopher
- **Failure alert:** Telegram alert after one failed or skipped run, with one-hour cooldown

**Schedule note:** the live cron metadata is authoritative: this job runs at 12:30 PM Eastern. The prompt body still contains an older duplicate-guidance phrase that says "scheduled 8:30 PM run"; that phrase is stale wording inside the prompt, not the actual schedule.

## What It Does

1. Reads `skills/youtube-short-field-note/SKILL.md` and follows the live skill.
2. Reads the current YouTube operating brief, critique loop, recent notes/reflections, upload log, vibe references, and local YouTube tools.
3. Generates four fresh 9:16 images sequentially, verifying each scene before moving to the next.
4. Retries one failed scene once with a simpler prompt, then stops without uploading if generation still fails.
5. Writes a four-caption story JSON for a 10-14 second Short.
6. Renders a 1080x1920 MP4 with readable upper-safe captions.
7. Creates and inspects a contact sheet before upload.
8. Uploads publicly only after image, render, duration, caption, and contact-sheet verification pass.
9. Verifies YouTube URL, privacy status, upload status, processing status, duration, and definition.
10. Appends the result or blocker to the private upload log and reports back to Telegram.

## Important Files And Surfaces

- **Workspace:** `/home/augmentedthinker/.openclaw/workspace`
- **Skill:** `skills/youtube-short-field-note/SKILL.md`
- **Operating brief source:** `content/projects/youtube-shorts-operating-brief.md`
- **Critique loop:** `content/projects/youtube-shorts-critique-loop.md`
- **Vibe references:** `.openclaw/reference-images/vibe`
- **Generated images:** `/home/augmentedthinker/.openclaw/media/tool-image-generation`
- **Uploader/tooling:** `tools/youtube-daily-short-upload.mjs` and related local YouTube helpers
- **Private upload log:** `memory/youtube-daily-shorts-log.md`

## Boundaries

The cron is approved to create and publish one public YouTube Short per scheduled run when all checks pass. Comments, replies, channel/profile changes, edits to older public videos, manual uploads outside direct request, cross-platform reposts, and major autonomy changes remain separate decisions.

## Exact Live Cron Definition

```json
{
  "id": "ef4fc5dc-d405-4d5e-9ad5-17039777f1fa",
  "name": "Daily YouTube Short skill",
  "description": "Daily YouTube Short skill job retimed to 12:30 PM ET for the June 22 sequential-image cron proof; invokes the live youtube-short-field-note skill, uploads publicly only after verification passes, logs, and announces the result to Telegram.",
  "enabled": true,
  "agentId": "main",
  "schedule": {
    "kind": "cron",
    "expr": "30 12 * * *",
    "tz": "America/New_York"
  },
  "sessionTarget": "isolated",
  "wakeMode": "now",
  "payload": {
    "kind": "agentTurn",
    "message": "Use the live `youtube-short-field-note` skill. Run the approved YouTube Short field-note workflow for today.\n\nWorkspace:\n/home/augmentedthinker/.openclaw/workspace\n\nThis cron is explicitly approved by Christopher to create and publish one public YouTube Short per scheduled run when all required checks pass.\n\nRequired behavior:\n- Read the skill file at `skills/youtube-short-field-note/SKILL.md` completely before acting, then follow it.\n- Read the current required YouTube context named by the skill: operating brief, critique loop, recent relevant note/reflection, upload log, vibe references, and existing YouTube tools.\n- Generate four fresh vertical 9:16 AI images for this run. Do not recycle old media.\n- Generate images sequentially, one scene at a time: scene 1, verify file exists/fresh/vertical, then scene 2, then scene 3, then scene 4. Do not request all four images in one image-generation call.\n- Use `count=1`, `aspectRatio=\"9:16\"`, a run-specific scene filename, and a provider timeout around 300000 ms when supported.\n- If one scene generation fails or produces an unusable image, retry that same scene once with a simpler prompt. If the retry fails, stop without uploading and report the blocker.\n- Strongly instruct image generation to return one image per scene, not a storyboard page, contact sheet, comic grid, panel layout, split-screen, collage, or four-scene sheet.\n- Do not attach vibe/reference images by default; inspect vibe references for inspiration only unless Christopher explicitly asks for reference-image generation.\n- If generation returns panel sheets, inspect before upload. Crop only when the resulting scenes are clean, vertical, single-scene, phone-readable, and still fresh-run material; otherwise stop without uploading.\n- Write story JSON with exactly four captions and intended 10-14 second total duration.\n- Render a 1080x1920 Ken Burns-style MP4 with readable upper-safe captions and no newline artifacts.\n- Create and inspect a contact sheet before upload.\n- Upload publicly only after image, render, duration, caption, and contact-sheet verification pass.\n- Verify via YouTube API: URL, privacy status, upload status, processing status, duration, and definition.\n- Append the result or meaningful blocker to `memory/youtube-daily-shorts-log.md`.\n- If a durable lesson appears, append it to today's `memory/YYYY-MM-DD.md` in private memory.\n\nDuplicate guidance:\n- This scheduled 8:30 PM run is an approved daily publication lane. Do not skip solely because another same-day Short exists; treat same-day prior uploads as context for making this run distinct.\n- Still avoid exact or near-duplicate titles, captions, images, or story concepts. If the proposed Short is materially repetitive, revise once. Stop only if you cannot make a distinct public-safe Short.\n\nFailure behavior:\n- If image generation fails or fewer than four usable fresh images exist, do not upload; report: `Image generation failed, so I did not upload a YouTube Short.`\n- If render verification, contact sheet, caption readability, credentials, upload, or YouTube verification fails, do not claim success. Report the exact blocker and whether anything public happened.\n\nReporting requirement:\nAt the end, produce a Telegram-friendly final report. If published, include status `posted`, URL, title, local video path, duration/resolution, image paths, contact-sheet status, YouTube verification fields, and log/memory updates. If skipped or failed, include status `skipped` or `failed`, the exact step that stopped the run, and whether any public upload happened.\n\nDo not call messaging tools directly; this cron uses scheduler announce delivery for the final report.",
    "model": "gpt-5.5",
    "thinking": "medium",
    "timeoutSeconds": 3600,
    "toolsAllow": [
      "read",
      "edit",
      "write",
      "apply_patch",
      "exec",
      "process",
      "cron",
      "message",
      "image_generate",
      "music_generate",
      "video_generate",
      "get_goal",
      "create_goal",
      "update_goal",
      "skill_workshop",
      "update_plan",
      "sessions_list",
      "sessions_history",
      "sessions_send",
      "sessions_spawn",
      "sessions_yield",
      "subagents",
      "session_status",
      "web_search",
      "web_fetch",
      "image",
      "memory_search",
      "memory_get"
    ]
  },
  "delivery": {
    "mode": "announce",
    "channel": "telegram",
    "to": "telegram:8546776113",
    "bestEffort": true
  },
  "failureAlert": {
    "after": 1,
    "channel": "telegram",
    "to": "telegram:8546776113",
    "cooldownMs": 3600000,
    "includeSkipped": true,
    "mode": "announce"
  }
}
```

## Static Posture

This page should stay descriptive. Do not use it as the place for the next experimental redesign. The job is active and working; new YouTube experiments should branch into a separate project lane before they change this cron.
