---
name: "kron-evolution"
description: "Keep a concise lesson archive while creating Kron Evolution iterations."
---

# Kron Evolution

Use this skill to create the next Kron Evolution Workshop iteration. The skill turns the loop forward by evaluating the previous iteration, choosing one lesson, generating one new artifact, updating the public ledger, and maintaining the concise lesson archive without touching live cron jobs unless Christopher explicitly asks.

## Core Rule

Each iteration evaluates the previous iteration, not itself. Do not include a `Next Evaluation Target` or any other forward-looking target section inside the current iteration. The current turn should evaluate the prior turn, implement one change, record the output, and stop.

Human input is part of the loop. Treat Christopher's corrections, preferences, and interruptions since the prior iteration as signal to preserve in the next evaluation and change record.

The loop must accumulate learning. Each iteration should add or refine one concise lesson in the archive, keyed by iteration number, so future runs can consolidate what changed instead of merely producing novelty.

## Safety Boundaries

- Do not modify legacy-active Bluesky or YouTube cron jobs.
- Do not create, edit, enable, or schedule cron jobs unless Christopher explicitly requests that step.
- Do not post publicly unless Christopher explicitly approves publication.
- Keep the first output path inside the Workshop unless told otherwise.
- Make every run visible: record what was evaluated, what changed, what was created, and what safety boundaries stayed closed.

## Required Sources

Before creating the next iteration, read the current Workshop sources:

- `content/projects/kron-evolution-iterations.md`
- `content/projects/kron-evolution-iteration-metadata.json` if it exists
- `projects/kron-evolution-iterations.html`
- `projects.html`
- `content/projects/kron-evolution.md` when the concept or boundaries need refreshing

Also inspect the latest generated image when evaluating visual continuity.

## Iteration Workflow

1. Find the newest iteration number from the ledger.
2. Set the next number as `N = newest + 1` and use zero-padded asset suffix `NNN`.
3. Evaluate only the previous iteration:
   - what worked;
   - what was missing or incorrect;
   - what Christopher added or corrected, if anything;
   - what single change should shape the new output.
4. Identify the concise lesson for iteration `N` and add it to the lesson archive with an identifier derived from the iteration number, such as `I-004`.
5. Update the structured metadata companion when it exists, or create it once the archive needs machine-readable consolidation:
   - path: `content/projects/kron-evolution-iteration-metadata.json`;
   - include `iteration_count`, `latest_iteration`, and a compact `lessons` array;
   - keep it factual and concise, not a second full ledger.
6. Write a short saying or parable for the new iteration. Prefer one to three plain but resonant sentences.
7. Generate one new image that visibly reflects the chosen change.
   - Keep the image readable without relying on exact text inside the image.
   - Prefer warm Workshop/process imagery over abstract diagrams.
   - Include concrete visual anchors for output, evaluation, human input, lesson archive, and next action when relevant.
8. Save the image as:
   - `assets/images/kron-evolution/kron-evolution-iteration-NNN.png`
9. Update `projects/kron-evolution-iterations.html`:
   - make the hero image the new image;
   - update `Iteration count: N`;
   - update the compact lesson archive near the top;
   - mention the metadata companion when present;
   - insert a new collapsed `<details class="iteration-entry">` entry at the top of the ledger;
   - keep older entries below it, collapsed by default.
10. Update `content/projects/kron-evolution-iterations.md` with the same newest-first content and lesson archive.
11. Update `projects.html` so the Kron Evolution dropdown points to the ledger as the latest iteration:
   - `Ledger<br />Iteration N<br />YYYY-MM-DD`
   - summary should name the current lesson/change.
12. Verify local href/src references on changed pages and confirm the new image file exists.
13. If this is the normal public Workshop flow, commit and push the changes. If the user asked for a draft only, leave it uncommitted and report paths.

## New Ledger Entry Shape

Use this structure for the HTML and mirror it in Markdown:

```text
Iteration N: [short title]
Evaluates Iteration N-1 and [names the change].

Evaluation Of Iteration N-1
- What worked: ...
- What was missing or wrong: ...
- Christopher input: ... (omit only if there was none)
- Change chosen: ...

Saying
[one to three sentences]

Image
assets/images/kron-evolution/kron-evolution-iteration-NNN.png

What We Were Going For
[plain explanation of the visual and process goal]

Output Record
- Image path: ...
- Source mode: ...
- Publication status: ...
- Safety state: no cron job was changed, no public post was made, unless explicitly true.
```

Do not add an `Initial Evaluation`, self-evaluation, `Next Evaluation Target`, or `Next proposed change` section for the current iteration. The next turn can decide what to evaluate when it arrives.

## Lesson Archive Shape

Keep the archive short enough to scan:

```text
I-001: start with one visible artifact before trying autonomy.
I-002: make evaluation, rubric, and next action visible.
I-003: treat Christopher's correction as part of the learning loop.
I-004: preserve each lesson in a concise archive so the loop accumulates learning instead of novelty.
I-005: store each iteration's lesson and output data in a small structured record so future consolidation has a reliable source.
I-006: leave a minimal audit trail for each run so trust can be checked without expanding the maintenance burden.
I-007: keep the evolving object distinct from the scaffolding that records its evolution.
I-008: complete each turn as evaluation plus implemented change, without adding a forward-looking target section.
```

Do not let the archive become a second full ledger. It should preserve the durable lesson, not repeat all evidence.

## Evaluation Rubric

Use a compact rubric, not a long essay:

- Clarity: can Christopher understand what changed from the previous iteration?
- Continuity: does it preserve the prior useful structure while improving one thing?
- Evidence: does it leave a visible record of output, evaluation, lesson archive, and next action?
- Safety: did it avoid cron changes and public posting unless explicitly approved?
- Human-in-the-loop: did it preserve Christopher's correction or guidance when present?

## Output Style

Keep the final report concise:

- new iteration number and title;
- what previous iteration was evaluated;
- what lesson/change was applied;
- new image path;
- verification result;
- commit hash if committed and pushed.

## Notes From The First Eight Iterations

- Iteration 1 proved the seed artifact: one parable plus one image, saved only to the Workshop.
- Iteration 2 made the evaluation/rubric/next-run structure visible.
- Iteration 3 corrected the process: the current iteration should not evaluate itself, and Christopher's human-in-the-loop correction is part of the learning signal.
- Iteration 4 added the lesson archive: the loop should accumulate concise lessons keyed by iteration number so future work can consolidate learning.
- Iteration 5 added the structured metadata companion: the warm human-readable ledger should have a small machine-readable source for future consolidation.
- Iteration 6 added the minimal audit trail: each run should leave concise verification evidence so trust can be checked without creating another maintenance-heavy record.
- Iteration 7 corrected the trajectory: the ledger and audit trail are scaffolding, while the loop still needs a visible object or target artifact to evolve.
- Iteration 8 corrected the entry rhythm: each turn should evaluate the previous iteration and embody the change without also adding a forward-looking target section.

The direction is not autonomy for its own sake, and it is not process documentation for its own sake. The direction is a disciplined visible loop that evolves a concrete artifact or capability through output, evaluation, correction, archived lesson, and changed next action.
