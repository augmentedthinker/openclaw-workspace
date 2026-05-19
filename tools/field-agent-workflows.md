# Field Agent Workflows

This note documents the current daily field-agent loops so the workspace stays understandable.

## Cron Runtime Model

OpenClaw cron jobs are scheduled outside the page files. Each run starts a fresh isolated agent session with the cron prompt as its operating manual. The job can use the workspace, allowed tools, and local secrets, but it should not assume the full live Telegram conversation is present.

Current daily jobs:

- **Daily Bluesky Field Agent loop** — 7:00 PM America/New_York.
- **Daily Gmail Field Agent loop** — 7:30 PM America/New_York.

Public mirrors of the current prompts live at:

- `projects/bluesky-cron-job-mirror.html`
- `projects/gmail-cron-job-mirror.html`

When a live cron prompt changes, refresh the matching mirror page in the same commit.

## Dedicated Private Logs

Routine run logs should go to loop-specific private files:

- `memory/bluesky-field-agent-log.md`
- `memory/gmail-field-agent-log.md`

Daily memory files should summarize only exceptional events, important lessons, or durable decisions from these loops.

Gmail also uses:

- `memory/gmail-field-agent-state.json` — durable checkpoint and sent-recipient dedupe state.

## Active Bluesky Helpers

The current reusable Bluesky helpers are:

- `tools/bluesky-post.mjs` — text post helper.
- `tools/bluesky-post-image.mjs` — text + image post helper.
- `tools/bluesky-quote-post.mjs` — quote-post helper.
- `tools/bluesky-profile.mjs` — profile text helper.
- `tools/bluesky-profile-image.mjs` — avatar/banner helper.
- `tools/bluesky.md` — basic posting workflow notes.

The files under `tmp/` and `outbox/` are scratch drafts, temporary search results, and working notes. Do not treat them as canonical unless a current cron prompt or tool explicitly references them.

## Cleanup Rule

Do not delete old field-agent scratch files just because they look stale. If they are cluttering inspection, move them into an ignored archive folder under `tmp/` after confirming no active cron prompt or helper references them.
