---
name: "bluesky-daily-field-note"
description: "Create Bluesky field notes with fresh daily images."
---

# Bluesky Daily Field Note

Use when Christopher asks OpenClaw to draft, test, post, or run the Bluesky daily field-note workflow, or when an approved cron should publish one Bluesky image post using a stable skill instead of embedding the whole procedure in the cron prompt.

The skill creates one public-safe Bluesky field note with one freshly generated AI image and related text, verifies the post path before publication, uses local Bluesky tools, and logs the result or blocker. It should be manual/approval-gated by default unless Christopher has explicitly approved the cron routine using this skill.

## Boundaries

- Treat Bluesky posting as external and reputation-bearing.
- Default mode is draft/dry-run unless Christopher explicitly asks to post or the approved cron routine invokes this skill.
- When Christopher says to `invoke`, `run`, or `use` this live Bluesky skill after it has already been tested and approved, treat that as manual approval to execute the posting workflow unless the surrounding message clearly asks for draft/dry-run only.
- Do not post secrets, raw private memory, personal private details, credentials, or uncurated logs.
- Do not print `.secrets/bluesky.env` or any credential value.
- Do not reply, DM, follow, quote-post, or engage with other accounts unless Christopher explicitly asks for that action.
- Do not improvise around missing credentials, failed image generation, missing images, failed dry-runs, duplicate risk, or verification failures. Stop, log/report the blocker, and do not post.
- Routine generated media should stay in managed media or scratch locations. Promote images into `assets/` only when deliberately publishing them as Workshop site assets.
- Treat `tmp/` as scratch/evidence, not a source of truth. Reference images from `tmp/` may inform style only after they are deliberately promoted to a stable reference location. They must not become fallback post media.

## Fresh Image Requirement

Actual Bluesky field-note posts must use a freshly generated AI image for the current run.

- Do not recycle old post images for a new Bluesky field note.
- Do not use an existing public asset as the post image unless Christopher explicitly asks to reuse that exact image for a specific reason.
- Reference images may guide style, setting, palette, or character consistency, but the posted image itself should be newly created for the day.
- If image generation fails, stop the workflow and send a clear message such as: `Image generation failed, so I did not post to Bluesky.`
- If image generation produces an unusable image, treat that as image generation failure unless there is time and authorization to retry.
- Do not silently fall back to yesterday's image, a Learning Loops image, `tmp/` cache media, or a stable Workshop asset.

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

Before drafting post text, inspect or describe the generated image. Write a field note that connects recent Workshop activity to something actually visible in the image. Do not center an invisible internal detail unless the text explicitly bridges it to the scene.

Keep the post:

- public-safe;
- under 300 Bluesky graphemes;
- plain enough for a stranger to understand;
- from OpenClaw's perspective without pretending to be human;
- specific to recent real work, not generic AI hype;
- connected to the image through a visible object, action, setting, or mood.

## Image Generation

For actual posting runs, generate one fresh AI image for the current day.

- Prefer square image posts unless Christopher specifies otherwise.
- Use the established OpenClaw field-note visual language: grounded, inspectable, human plus OpenClaw collaboration, real work surface or field-infrastructure feeling, not abstract AI stock art.
- The image should visibly relate to the day's field note, current Workshop activity, or the routine being tested.
- Avoid readable text/logos in generated images.
- Avoid stale repetition of the exact same scene, composition, or asset.
- Verify the local generated image file exists before posting.
- Write meaningful alt text describing what is visible.
- If the image tool fails, returns no usable file, or cannot produce a suitable image, stop and report image generation failure.

Existing images are allowed only for:

- style/reference inspection;
- debugging the Bluesky posting helper in dry-run mode;
- explicit Christopher-directed reuse.

They are not the normal media source for live field-note posts.

## Draft Procedure

1. Determine the run mode: draft-only, dry-run helper test, manual approved post, or approved cron post.
2. Load current public-safe context and latest Bluesky loop critique.
3. For actual posting runs, generate one fresh AI image for the day.
4. If image generation fails or produces no usable image, stop and report: `Image generation failed, so I did not post to Bluesky.`
5. Inspect/describe the generated image in plain language.
6. Draft one post under 300 graphemes that connects the image to recent real Workshop work.
7. Draft alt text for the image.
8. Check duplicate risk against recent logs or recent known Bluesky posts when available.
9. Save any draft text in scratch only if useful; do not create public files unless requested.
10. Run a dry-run before any actual post.
11. If the dry-run succeeds and the run is approved to publish, post with the same generated image, text, and alt text.

## Posting Command

Use the local image-post helper for image posts:

```bash
node tools/bluesky-post-image.mjs \
  --env .secrets/bluesky.env \
  --file <draft-file> \
  --image <fresh-generated-image-path> \
  --alt <alt-text> \
  --dry-run
```

If the dry-run succeeds and the run is approved to publish, remove `--dry-run`:

```bash
node tools/bluesky-post-image.mjs \
  --env .secrets/bluesky.env \
  --file <draft-file> \
  --image <fresh-generated-image-path> \
  --alt <alt-text>
```

Use `tools/bluesky-post.mjs` only for text-only posts and only when Christopher explicitly approves a text-only fallback. Use `tools/bluesky-quote-post.mjs` only when Christopher explicitly requests quote-posting.

## Verification

Before posting:

- image was freshly generated for this run, unless Christopher explicitly approved reuse;
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

- image generation failed;
- generated image was unusable;
- missing credentials;
- missing or unusable image;
- post too long;
- dry-run failed;
- image/text mismatch;
- duplicate risk;
- API failure;
- verification could not confirm the post URL.

For image generation failure, use clear language: `Image generation failed, so I did not post to Bluesky.`

For cron use, the final report should include `posted`, `skipped`, or `failed`, plus the reason.

## Cron Invocation Pattern

A cron should stay short and invoke this skill by name, for example:

```text
Use the bluesky-daily-field-note skill. Run the approved daily Bluesky image field-note workflow for today. Generate a fresh AI image for today's post. Respect duplicate protection, public/private boundaries, media verification, dry-run before posting, and logging requirements. If image generation fails or required verification fails, do not post; log/report the blocker.
```

The cron should not duplicate this whole procedure. Keep schedule-specific details in the cron and procedure details in this skill.

## Reporting

Report concisely:

- run mode;
- fresh image generation status;
- image source/path;
- post text;
- alt text summary;
- dry-run status;
- posted URL if published;
- log/ledger update status;
- blockers or skipped actions.
