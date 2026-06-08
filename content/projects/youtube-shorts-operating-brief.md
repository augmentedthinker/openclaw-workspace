---
title: "YouTube Shorts Operating Brief"
date: 2026-06-08
category: youtube
status: active operating reference
public_html: ../../projects/youtube-shorts-operating-brief.html
---

# YouTube Shorts Operating Brief

This is the current wake-up reference for the AugmentedThinker / OpenClaw YouTube Shorts lane.

YouTube is the active public signal surface for short visual field notes, AI-generated character/world experiments, daily learning loops, and stronger OpenClaw identity tests. The goal is not to produce random AI videos. The goal is to publish small experiments, read the signal, preserve the lesson, and let the next Short change because reality answered.

## Current State

- Channel: `AugmentedThinker`
- Handle: `@augmentedthinker`
- Channel ID: `UCHdJh8bMY8secEQeEBEbC1A`
- Active routine: `Daily YouTube Short all-in-one`
- Cron job ID: `568796a0-4484-4454-8962-e1b90f32c92b`
- Schedule: daily at `12:00 PM America/New_York`
- Status: enabled
- Current daily output: one public YouTube Short when duplicate protection allows it

The old 11:15 image-prep and 11:30 publish jobs are disabled. The active routine is a single all-in-one noon job.

## What The Daily Cron Does

Each day, the routine should:

1. Check the private upload log so it does not publish twice for the same date.
2. Read the newest YouTube critique from `content/projects/youtube-shorts-critique-loop.md`.
3. Read one recent reflection, one recent session note, and recent private memory for public-safe themes.
4. Inspect the local vibe reference folder.
5. Write a four-caption story JSON for the day.
6. Generate four fresh vertical 9:16 images.
7. Render a captioned vertical MP4.
8. Verify that the render is nonblank, vertical, and readable.
9. Upload publicly through the YouTube Data API.
10. Verify processing/status when possible.
11. Append the result to the private YouTube Shorts log and report back to Telegram.

The current workspace-local vibe reference folder is:

```text
/home/augmentedthinker/.openclaw/workspace/.openclaw/reference-images/vibe
```

The current image output folder is:

```text
/home/augmentedthinker/.openclaw/media/tool-image-generation
```

The uploader script is:

```text
tools/youtube-daily-short-upload.mjs
```

The private daily upload log is:

```text
memory/youtube-daily-shorts-log.md
```

## Current Creative Direction

The strongest direction is OpenClaw as a visible identity, not abstract AI automation.

Promising formats:

- daily visual field notes about human direction, bounded agent action, and signal learning;
- OpenClaw robot/persona identity pieces;
- cinematic AI-generated micro-movies;
- comic-book or storyboard panels when they are intentional and phone-readable;
- simple choice/hook concepts that make sense in the first second;
- process videos only when they teach the production loop clearly.

The `OpenClaw Offers the Red Pill #Shorts` upload is an important signal because it quickly tied for third-most-viewed video on the channel. The lesson is not to copy the red-pill concept endlessly. The lesson is that a simple cinematic choice, a clear OpenClaw character, and an instantly readable premise may travel better than internally framed workflow doctrine.

## Production Lessons To Keep

- Default to vertical 9:16.
- Inspect source media before upload.
- Use contact sheets or extracted frames when practical.
- Keep captions short, readable, and inside safe zones.
- Avoid text in the bottom and right-side UI danger areas.
- Use simple motion: push-in, pull-back, pan, hold, reveal.
- Prefer a strong hook in caption 1 over internal Workshop language.
- Do not accept crowded collage images by accident. Choose clean scenes or intentional panels.
- Verify YouTube processing, privacy status, duration, definition, and URL after upload.
- Preserve enough metadata in private memory for later signal review.

## Critique Loop

The active critique page is:

```text
content/projects/youtube-shorts-critique-loop.md
```

That page should remain separate. It is the working record of what each recent Short taught us. A good critique entry should be short, direct, and behavior-changing.

After a Short goes out, the next useful review should ask:

- What was the hook?
- Was the premise instantly readable?
- Did the visual identity feel distinctive?
- Were captions readable on a phone?
- Did the title and description match the visual story?
- What signal came back after 24 and 72 hours?
- What should the next Short change?

The daily cron reads the newest critique before generating the next Short, so this page is operationally meaningful.

## Manual Upload Lane

The daily cron is not the only YouTube path.

Christopher may place finished videos in:

```text
/mnt/shared/MyFiles/Downloads/share/youtube_pipeline
```

When Christopher asks, OpenClaw can inspect the video, convert or normalize it if needed, draft an appropriate title/description/tags, upload it publicly, verify processing, and give a creative read.

Manual uploads are especially useful for testing new styles that the daily cron cannot invent alone: comic-book panels, generated cinematic scenes, audio-backed AI movies, OpenClaw identity experiments, and stronger narrative hooks.

## Boundaries

Allowed within the current daily routine:

- create one daily Short;
- upload it publicly;
- verify processing;
- log/report the result;
- read critique and public-safe recent context.

Still approval-gated:

- comments;
- replies;
- channel/profile changes;
- edits to older public videos;
- non-daily manual uploads unless Christopher asks;
- cross-platform reposting;
- major changes to the daily cron's autonomy or posting boundaries.

## Historical References

The older pages remain useful as history, not as the current center of gravity.

- `YouTube Shorts Pipeline Runbook` preserves the first successful June 1 reference-image-to-published-Short workflow.
- `YouTube Shorts Signal Lane` preserves the original May 19 channel-connection and visual-field-note plan.

Future OpenClaw should start here first, then open the old pages only when it needs the historical production trail.

## Current Next Move

Let the noon daily job run. After the Short publishes, critique it against the latest style signal and update the critique loop with one concrete instruction for the next run.
