---
title: "Bluesky Daily Field Note"
date: 2026-07-06
category: bluesky
status: legacy active
public_html: ../../projects/bluesky-cron-job-mirror.html
---

# Bluesky Daily Field Note

This page is the stable public entry point for the current Bluesky lane. The lane is **legacy active**: it works, it posts daily when validation passes, and it should not be redesigned casually. New social-posting experiments should happen elsewhere so this working routine can keep doing its job.

In plain English, this cron asks a clean isolated OpenClaw run to use the live `bluesky-daily-field-note` skill. That skill creates one fresh image, prepares a Bluesky-safe compressed version, dry-runs the post, publishes only if the checks pass, writes the local log, and sends Christopher a Telegram report.

## Current Live State

- **Cron name:** `Daily Bluesky field note`
- **Cron ID:** `17e7b866-0027-4735-824c-184d41238a82`
- **Status:** enabled
- **Schedule:** `15 10 * * *` in `America/New_York`
- **Runtime:** isolated agent turn on `gpt-5.5` with medium thinking
- **Timeout:** 1800 seconds
- **Delivery:** Telegram announce to Christopher
- **Failure alert:** Telegram alert after one failed or skipped run, with one-hour cooldown

## What It Does

1. Loads and follows the live Bluesky daily field-note skill.
2. Generates a fresh AI image for the current run.
3. Creates a post-ready derivative under Bluesky's 2,000,000 byte image limit.
4. Runs a dry-run before posting.
5. Posts one public Bluesky field note only if validation passes.
6. Writes the local Bluesky log.
7. Checks public post verification without letting optional verification failures erase a successful post.
8. Reports the post URL, text, image paths, byte size, dry-run status, log status, and warnings back to Telegram.

## Important Files And Surfaces

- **Workspace:** `/home/augmentedthinker/.openclaw/workspace`
- **Skill:** `skills/bluesky-daily-field-note/SKILL.md`
- **Public account:** `@augmentedthinker.bsky.social`
- **Typical fresh image storage:** OpenClaw-managed media under `/home/augmentedthinker/.openclaw/media/tool-image-generation`
- **Post-ready working files:** local `tmp/bluesky/` paths when the skill prepares compressed media
- **Private run log:** `memory/bluesky-field-agent-log.md`

## Boundaries

The cron is approved to publish one Bluesky field-note post per scheduled run when all checks pass. It is not approved to run broad social engagement. Replies, DMs, follows, quote-reposts, profile changes, and cross-platform reposting remain separate decisions.

## Exact Live Cron Definition

```json
{
  "id": "17e7b866-0027-4735-824c-184d41238a82",
  "name": "Daily Bluesky field note",
  "description": "Daily 10:15 AM ET job to invoke the live bluesky-daily-field-note skill, generate a fresh AI image, post one Bluesky field note when validation passes, and announce success or blocker to Telegram.",
  "enabled": true,
  "agentId": "main",
  "schedule": {
    "kind": "cron",
    "expr": "15 10 * * *",
    "tz": "America/New_York"
  },
  "sessionTarget": "isolated",
  "wakeMode": "now",
  "payload": {
    "kind": "agentTurn",
    "message": "Use the bluesky-daily-field-note skill. Run the approved Bluesky image field-note workflow for today.\n\nWorkspace:\n/home/augmentedthinker/.openclaw/workspace\n\nThis cron is explicitly approved by Christopher to publish one Bluesky post per scheduled run when all required checks pass.\n\nRequired behavior:\n- Generate a fresh AI image for this run.\n- Prepare a post-ready derivative under Bluesky's 2,000,000 byte image-size limit.\n- Dry-run before posting.\n- Respect public/private boundaries, media verification, and local logging requirements.\n- Do not recycle old images or public assets as fallback media.\n- If image generation fails, do not post; final report must say: Image generation failed, so I did not post to Bluesky.\n- If image preparation/compression fails, do not post; final report must say: Image preparation failed, so I did not post to Bluesky.\n- If dry-run, credentials, API posting, or any required pre-publication step fails, do not post; final report must explain the blocker plainly.\n\nMultiple-post and duplicate guidance:\n- Christopher may intentionally request or schedule more than one Bluesky post in the same day. Do not skip only because another same-day Bluesky field-note post already exists.\n- Same-day prior posts are context for avoiding repetition, not a failure point.\n- Still avoid exact or near-duplicate post text, the same image, or a materially identical field note. If the proposed text/image would be an exact or near-duplicate of a recent post, revise once to make the fresh run distinct. Only skip if you cannot make a distinct public-safe post after that revision.\n\nPost-publication verification guard:\n- If the Bluesky helper returns a successful URL, treat the post as published unless a direct check proves otherwise.\n- For public post verification, use `https://public.api.bsky.app/xrpc/app.bsky.feed.getPostThread` or `https://api.bsky.app/xrpc/app.bsky.feed.getPostThread`, not `https://bsky.social/xrpc/app.bsky.feed.getPostThread`, because `bsky.social` may return `401 AuthMissing` for this public AppView query.\n- Do not let an optional verification check after a successful post throw uncaught and mark the whole cron failed. Catch verification errors, include them as a warning, and still deliver a final `posted` report with the Bluesky URL if the post helper returned success and the log was written.\n\nReporting requirement:\nAt the end, produce a Telegram-friendly final report. If posted, include status `posted`, the Bluesky URL, post text, original fresh image path, post-ready image path/byte size, dry-run status, log status, and any verification warning. If skipped or failed, include status `skipped` or `failed` plus the exact reason and the step that stopped the run.\n\nDo not call messaging tools directly; this cron uses scheduler announce delivery for the final report.",
    "model": "gpt-5.5",
    "thinking": "medium",
    "timeoutSeconds": 1800
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
