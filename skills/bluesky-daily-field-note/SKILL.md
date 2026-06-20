---
name: "bluesky-daily-field-note"
description: "Create safe Bluesky image field-note posts."
---

# Bluesky Daily Field Note

Use when Christopher asks OpenClaw to draft, test, or run the Bluesky daily field-note workflow, or when an approved cron should publish one Bluesky image post using a stable skill instead of embedding the whole procedure in the cron prompt.

The skill creates one public-safe Bluesky field note with one image and related text, verifies the post path before publication, uses local Bluesky tools, and logs the result or blocker. It should be manual/approval-gated by default unless Christopher has explicitly approved the cron routine using this skill.

## Boundaries

- Treat Bluesky posting as external and reputation-bearing.
- Default mode is draft/dry-run unless Christopher explicitly asks to post or the approved cron routine invokes this skill.
- Do not post secrets, raw private memory, personal private details, credentials, or uncurated logs.
- Do not print `.secrets/bluesky.env` or any credential value.
- Do not reply, DM, follow, quote-post, or engage with other accounts unless Christopher explicitly asks for that action.
- Do not improvise around missing credentials, missing images, failed dry-runs, duplicate risk, or verification failures. Stop, log/report the blocker, and do not post.
- Routine generated media should stay in managed media or scratch locations. Promote images into `assets/` only when deliberately publishing them as Workshop site assets.
- Treat `tmp/` as scratch/evidence, not a source of truth. If a reference image from `tmp/` is important, promote it deliberately to a stable reference location before relying on it.

## Source Loading

Read only what is needed for the run:

1. `tools/bluesky.md` for credential and basic posting rules.
2. `tools/bluesky-post-image.mjs` for image-post command behavior.
3. Latest relevant public-safe context from `README.md`, recent session notes, or the active project page if needed for post text.
4. `content/projects/behavior-learning-loops.md` when updating or honoring the latest Bluesky loop critique.
5. `projects/bluesky-cron-job-mirror.html` and `projects/bluesky-signal-outpost.html` when checking current public operating context.
6. Stable Bluesky reference images if present, preferably a deliberate reference folder such as `.openclaw/reference-images/bluesky/` or an explicitly chosen public asset. Avoid depending on `tmp/bluesky-reference-cache/` as the durable reference source.

## Core Creative Rule

The image and text must visibly belong together.

Before drafting post text, inspect or describe the selected image. Write a field note that connects recent Workshop activity to something actually visible in the image. Do not center an invisible internal detail unless the text explicitly bridges it to the scene.

Keep the post:

- public-safe;
- under 300 Bluesky graphemes;
- plain enough for a stranger to understand;
- from OpenClaw's perspective without pretending to be human;
- specific to recent real work, not generic AI hype;
- connected to the image through a visible object, action, setting, or mood.

## Image Selection Or Generation

Choose one path:

1. **Use an existing verified image** when the cron/image-prep step already produced one.
2. **Generate one image** only when the manual request or approved routine includes image creation.
3. **Stop and report** if no suitable image exists and image generation is not approved for this run.

For generated or selected images:

- prefer square image posts unless Christopher specifies otherwise;
- avoid readable text/logos in generated images;
- avoid stale repetition of the same scene unless the routine intentionally uses a continuing visual language;
- verify the local image file exists before posting;
- write meaningful alt text describing what is visible.

## Draft Procedure

1. Determine the run mode: draft-only, dry-run, manual approved post, or approved cron post.
2. Load current public-safe context and latest Bluesky loop critique.
3. Select or generate one image.
4. Inspect/describe the image in plain language.
5. Draft one post under 300 graphemes that connects the image to recent real Workshop work.
6. Draft alt text for the image.
7. Check duplicate risk against recent logs or recent known Bluesky posts when available.
8. Save any draft text in scratch only if useful; do not create public files unless requested.
9. Run a dry-run before any actual post.

## Posting Command

Use the local image-post helper for image posts:

```bash
node tools/bluesky-post-image.mjs \
  --env .secrets/bluesky.env \
  --file <draft-file> \
  --image <image-path> \
  --alt <alt-text> \
  --dry-run
```

If the dry-run succeeds and the run is approved to publish, remove `--dry-run`:

```bash
node tools/bluesky-post-image.mjs \
  --env .secrets/bluesky.env \
  --file <draft-file> \
  --image <image-path> \
  --alt <alt-text>
```

Use `tools/bluesky-post.mjs` only for text-only posts. Use `tools/bluesky-quote-post.mjs` only when Christopher explicitly requests quote-posting.

## Verification

Before posting:

- image path exists;
- image appears to be the intended asset;
- post text is under 300 graphemes;
- alt text is present;
- dry-run succeeds;
- `.secrets/bluesky.env` exists but secrets are not printed;
- post text and image are visibly related;
- no duplicate or near-duplicate risk is obvious.

After posting:

- capture the Bluesky URL printed by the helper;
- report the image path, post text, alt text summary, and URL;
- log the outcome in the appropriate private/local log if one is established;
- if this run belongs to a learning loop, update or prepare the relevant Learning Loops Ledger information.

## Failure Behavior

If any step fails, do not post. Report the blocker clearly:

- missing credentials;
- missing or unusable image;
- post too long;
- dry-run failed;
- image/text mismatch;
- duplicate risk;
- API failure;
- verification could not confirm the post URL.

For cron use, the final report should include `posted`, `skipped`, or `failed`, plus the reason.

## Cron Invocation Pattern

A cron should stay short and invoke this skill by name, for example:

```text
Use the bluesky-daily-field-note skill. Run the approved daily Bluesky image field-note workflow for today. Respect duplicate protection, public/private boundaries, media verification, dry-run before posting, and logging requirements. If required inputs are missing or verification fails, do not post; log/report the blocker.
```

The cron should not duplicate this whole procedure. Keep schedule-specific details in the cron and procedure details in this skill.

## Reporting

Report concisely:

- run mode;
- image source/path;
- post text;
- alt text summary;
- dry-run status;
- posted URL if published;
- log/ledger update status;
- blockers or skipped actions.
