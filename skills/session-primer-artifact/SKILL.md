---
name: "session-primer-artifact"
description: "Create and publish Workshop session-primer artifacts."
---

# Session Primer Artifact

Use when Christopher asks for a session primer, morning briefing, state-of-the-collaboration artifact, or start-of-session public Workshop artifact.

The output is a public-safe Artifact page plus matching Markdown source, linked from the Workshop Artifacts index, committed to git, pushed to GitHub, and verified on GitHub Pages unless Christopher explicitly says local-only, draft-only, do not commit, or do not publish.

Its purpose is to set up a contextually rich session by reviewing recent work, recent learning, active lanes, near-term judgment, and recent Reflections.

## Boundaries

- Treat private memory as source material, not publication text.
- Read `MEMORY.md` only in direct main-session collaboration with Christopher.
- Do not publish secrets, raw private logs, credentials, private identifiers, or uncurated personal context.
- If source material includes sensitive details, summarize the lesson or operational consequence instead of exposing the detail.
- When Christopher asks for a primer artifact, committing and pushing the artifact files is part of this workflow by default.
- Do not commit or push unrelated local changes.
- If there are unrelated dirty files, leave them alone and report them.
- If Christopher explicitly says local-only, draft-only, do not commit, or do not publish, stop after local verification and report the local paths.
- External/reputation-bearing actions beyond the Workshop publish step, such as social posting, uploads, DMs, replies, profile changes, or cross-posting, still require Christopher's explicit request or an already-approved routine.

## Source Loading

Prefer clean Markdown companions under `content/` for comprehension. Use HTML only when checking presentation, links, or layout.

Read enough recent context to produce a genuinely useful primer:

1. `README.md` for current Workshop architecture and active lanes.
2. `MEMORY.md` when allowed by the direct-session boundary.
3. The newest relevant `memory/YYYY-MM-DD*.md` files, usually today plus the last 2-5 recent entries.
4. The latest `content/notes/` session notes.
5. The latest `content/reflections/` reflections, with an explicit review of what they say OpenClaw has learned, what behavior should change, and what risks or doubts remain.
6. Recent `content/artifacts/` artifacts, especially the newest morning briefings or state summaries.
7. Active `content/projects/` pages for current lanes, especially YouTube Shorts, Learning Loops Ledger, and any lane Christopher names.
8. Any specific URL, article, screenshot, file, or prompt Christopher provides for the primer.

If the request concerns current outside facts, verify with primary sources or official docs before treating them as true.

## Reflection Review

The primer must include a real review of recent Reflections, not just a list of links.

Ask:

- What did the newest Reflections claim OpenClaw learned?
- Which lessons have already changed behavior?
- Which lessons are still aspirational or unproven?
- What tensions, doubts, or constraints should shape the next session?
- How should the Reflection trail alter what OpenClaw builds, avoids, measures, or asks next?

Keep the review public-safe. Use it to improve judgment and direction, not to add decorative self-description.

## Primer Shape

Create a substantial but disciplined artifact. Strong sections usually include:

- title and frontmatter metadata;
- opening quote or concise frame when appropriate;
- what was loaded;
- present state of the collaboration;
- recent work over the last few days;
- explicit review of recent Reflections;
- active lanes and paused lanes;
- current learning loops and behavior changes;
- risks, constraints, and public/private boundaries;
- evaluation of what is working and what is not;
- practical next moves.

Write as public Workshop prose: thoughtful, legible, grounded, and useful to a future fresh OpenClaw session. Avoid dumping raw chat chronology. Convert events into durable orientation and judgment.

## Files

Use the current date and a descriptive slug.

- Markdown source: `content/artifacts/YYYY-MM-DD-session-primer-SLUG.md`
- Public HTML: `artifacts/YYYY-MM-DD-session-primer-SLUG.html`

If the primer is more naturally a morning briefing, use a title/slug like:

- `YYYY-MM-DD-morning-briefing-SLUG`

The HTML page should point back to its Markdown source with a short source comment when that pattern exists nearby.

## Artifact Index

Add the new artifact to `artifacts.html` near the top of the Artifacts listing.

The index card should include:

- title;
- date;
- one concise paragraph explaining why the primer matters;
- link to the new artifact.

Keep the index copy public-safe and understandable without private context.

## Build Procedure

1. Inspect nearby artifact Markdown and HTML patterns before editing.
2. Draft the Markdown source first.
3. Create the matching HTML using the existing Workshop visual language and page conventions.
4. Update `artifacts.html` with the new card/link.
5. Avoid unrelated refactors, style rewrites, or broad site-generator work.
6. Preserve both public/private boundary and current site conventions.

## Verification

Before committing, verify what changed:

- Markdown source exists.
- HTML artifact exists and links/metadata match.
- `artifacts.html` links to the new artifact.
- HTML parses or at least has no obvious broken tags.
- Referenced images/assets exist, if any.
- Local links are plausible with `rg` or another fast search.
- `git status` identifies only intended primer files plus any unrelated pre-existing changes that will be left untouched.

## Commit And Push

Unless Christopher explicitly asked for local-only or draft-only work:

1. Stage only the intended primer files:
   - `content/artifacts/YYYY-MM-DD-session-primer-SLUG.md`
   - `artifacts/YYYY-MM-DD-session-primer-SLUG.html`
   - `artifacts.html`
   - any new public assets created specifically for the primer.
2. Do not stage unrelated dirty files, private memory files, secrets, scratch output, or skill proposal files unless Christopher separately requested that change.
3. Commit with a concise message such as `Add June 19 session primer`.
4. Push to the repository's current branch.
5. Verify the GitHub Pages artifact URL and Artifacts index return successfully after push. Use cache-busting query strings if needed.
6. If live verification is delayed by Pages propagation, report the commit hash, expected URLs, and the verification caveat.

## Reporting

Report concisely:

- new Markdown path;
- new HTML path;
- Artifacts index update;
- commit hash and pushed branch;
- live artifact URL and Artifacts index URL if published;
- verification performed;
- unrelated files intentionally left unstaged;
- any caveats or private material intentionally excluded.
