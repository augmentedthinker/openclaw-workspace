---
name: "kron-evolution"
description: "Create Kron iterations with isolated artifacts and evaluation."
---

# Kron Evolution

Use this skill to create the next Kron Evolution Workshop iteration. The skill turns the loop forward by evaluating the previous iteration's isolated public-facing artifact, choosing one lesson, generating one new artifact, updating the public ledger, and maintaining the concise lesson archive without touching live cron jobs unless Christopher explicitly asks.

## Core Rule

Each iteration evaluates the previous iteration, not itself. Do not include a `Next Evaluation Target`, self-evaluation, or forward-looking target section inside the current iteration. The current turn should evaluate the prior turn, implement one change or sidestep, record the output, and stop.

Human input is part of the loop. When Christopher gives a correction, preference, or critique since the prior iteration, treat that as the primary evaluation signal and preserve it in the next evaluation and change record.

The loop must accumulate learning. Each iteration should add or refine one concise lesson in the archive, keyed by iteration number, so future runs can consolidate what changed instead of merely producing novelty.

## Artifact Boundary

Keep the artifact under evaluation separate from the evaluation machinery.

The public-facing artifact is a self-contained bundle:

- **Intended idea:** the idea the iteration tried to represent;
- **Image:** the visual attempt to communicate the idea;
- **Accompanying text:** the saying, quote, caption, parable, or post-length text paired with the image.

The artifact should be able to stand on its own for an outside person. The image should present the intended idea without needing the ledger for context. The text should resonate with the image and clarify or deepen the same idea, not explain the workflow that produced it.

The evaluation machinery is:

- the previous-iteration evaluation;
- Christopher input;
- the lesson archive;
- metadata;
- audit and verification notes;
- `What We Were Going For`;
- output records.

Do not let the new image or accompanying text become a picture or explanation of the evaluation process unless Christopher explicitly asks for a process-facing artifact. Keep process, metadata, ledgers, checklists, recovery notes, and scaffolding in the ledger entry, not inside the artifact itself.

## Evaluation Stance

Do not assume every iteration must identify a failure. Evaluate whether the previous artifact coherently conveyed its intended idea.

An evaluation may conclude:

- the artifact failed or drifted, so the next iteration corrects course;
- the artifact mostly worked, so the next iteration preserves the lesson and sidesteps toward a new idea;
- the image and text aligned, but the next iteration should aim for more depth, emotional resonance, legibility, or engagement.

When the previous artifact worked, say that plainly. The next move can be a lateral evolution toward a more profound or engaging representation, not a replacement of a wrong answer.

## Page Structure

On the public iteration ledger page:

- Keep the lesson archive self-contained in a collapsed dropdown by default.
- Keep iteration entries newest-first.
- Inside each new iteration entry, include an isolated `Artifact Under Evaluation` or `New Artifact` block/card containing:
  - intended idea;
  - accompanying text;
  - image;
  - image path.
- Keep evaluation, rubric, explanation, metadata, and output record outside that artifact block.

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
3. Evaluate only the previous iteration's artifact bundle and entry:
   - what intended idea the previous artifact tried to represent;
   - whether the image communicated the idea without extra context;
   - whether the accompanying text aligned with the image and could stand on its own;
   - whether the artifact became mixed up with process or evaluation machinery;
   - whether the prior artifact was coherent enough to preserve;
   - what Christopher added or corrected, if anything;
   - what single change or sidestep should shape the new output.
4. Identify the concise lesson for iteration `N` and add it to the lesson archive with an identifier derived from the iteration number, such as `I-012`.
5. Update the structured metadata companion when it exists, or create it once the archive needs machine-readable consolidation:
   - path: `content/projects/kron-evolution-iteration-metadata.json`;
   - include `iteration_count`, `latest_iteration`, and a compact `lessons` array;
   - keep it factual and concise, not a second full ledger.
6. Choose the new intended idea before writing the prompt.
7. Write the new public-facing saying, quote, parable, caption, or post-length text. Prefer one to three plain but resonant sentences. It should align with the image and be meaningful to an outside person without explaining the ledger.
8. Generate one new image that visibly presents the chosen idea.
   - Keep the image readable without relying on exact text inside the image.
   - Prefer a concrete scene, object, metaphor, or moment over abstract diagrams.
   - Avoid visible ledgers, evaluation boards, metadata cards, archive cards, progress checklists, timeout diagnostics, or other process scaffolding unless the explicit artifact subject requires them.
9. Save the image as:
   - `assets/images/kron-evolution/kron-evolution-iteration-NNN.png`
10. Update `projects/kron-evolution-iterations.html`:
   - make the hero image the new image;
   - update `Iteration count: N`;
   - keep the lesson archive collapsed by default;
   - update the compact lesson archive inside that dropdown;
   - mention the metadata companion when present;
   - insert a new collapsed `<details class="iteration-entry">` entry at the top of the ledger;
   - keep older entries below it, collapsed by default.
11. Update `content/projects/kron-evolution-iterations.md` with the same newest-first content and lesson archive.
12. Update `projects.html` so the Kron Evolution dropdown points to the ledger as the latest iteration:
   - `Ledger<br />Iteration N<br />YYYY-MM-DD`
   - summary should name the current lesson/change.
13. Verify local href/src references on changed pages and confirm the new image file exists.
14. If this is the normal public Workshop flow, commit and push the changes. If the user asked for a draft only, leave it uncommitted and report paths.

## New Ledger Entry Shape

Use this structure for the HTML and mirror it in Markdown:

```text
Iteration N: [short title]
Evaluates Iteration N-1 and [names the change or sidestep].

Evaluation Of Iteration N-1
- Intended idea evaluated: ...
- What worked: ...
- What was missing or wrong: ...
- Christopher input: ... (omit only if there was none)
- Change or sidestep chosen: ...

Artifact Under Evaluation / New Artifact
- Intended idea: ...
- Accompanying text: ...
- Image: assets/images/kron-evolution/kron-evolution-iteration-NNN.png

What We Were Going For
[plain explanation of the image/text goal and why it follows the evaluation]

Output Record
- Image path: ...
- Source mode: ...
- Publication status: ...
- Safety state: no cron job was changed, no public post was made, unless explicitly true.
```

Do not add an `Initial Evaluation`, self-evaluation, `Next Evaluation Target`, or `Next proposed change` section for the current iteration. The next turn can decide what to evaluate when it arrives.

## Lesson Archive Shape

Keep the archive short enough to scan and collapsed by default on the public HTML page:

```text
I-001: start with one visible artifact before trying autonomy.
I-002: make evaluation, rubric, and next action visible.
I-003: treat Christopher's correction as part of the learning loop.
I-004: preserve each lesson in a concise archive so the loop accumulates learning instead of novelty.
I-005: store each iteration's lesson and output data in a small structured record so future consolidation has a reliable source.
I-006: leave a minimal audit trail for each run so trust can be checked without expanding the maintenance burden.
I-007: keep the evolving object distinct from the scaffolding that records its evolution.
I-008: complete each turn as evaluation plus implemented change, without adding a forward-looking target section.
I-009: make the collaboration itself visible as the evolving object, not only the process that supports it.
I-010: treat an interrupted or timed-out run as recoverable signal by recording what persisted, what vanished, and what changed next.
I-011: separate the public-facing image and saying from the evaluation machinery so the artifact can stand on its own.
```

Do not let the archive become a second full ledger. It should preserve the durable lesson, not repeat all evidence.

## Evaluation Rubric

Use a compact rubric, not a long essay:

- Intended idea clarity: is the target idea explicit enough to judge?
- Artifact clarity: can an outside person understand the image and text without ledger context?
- Image/text alignment: do the image and accompanying text express the same idea?
- Resonance: does the artifact feel meaningful, engaging, or worth pausing on?
- Separation: does the artifact stay separate from the evaluation machinery?
- Continuity: does it preserve the prior useful structure while improving one thing or sidestepping intentionally?
- Evidence: does the ledger leave a visible record of output, evaluation, lesson archive, and safety state?
- Safety: did it avoid cron changes and public posting unless explicitly approved?
- Human-in-the-loop: did it preserve Christopher's correction or guidance when present?

## Output Style

Keep the final report concise:

- new iteration number and title;
- what previous iteration was evaluated;
- what lesson/change or sidestep was applied;
- new intended idea;
- new image path;
- verification result;
- commit hash if committed and pushed;
- Skill Workshop proposal id if a skill correction was proposed or revised.

## Notes From The First Eleven Iterations

- Iteration 1 proved the seed artifact: one parable plus one image, saved only to the Workshop.
- Iteration 2 made the evaluation/rubric/next-run structure visible.
- Iteration 3 corrected the process: the current iteration should not evaluate itself, and Christopher's human-in-the-loop correction is part of the learning signal.
- Iteration 4 added the lesson archive: the loop should accumulate concise lessons keyed by iteration number so future work can consolidate learning.
- Iteration 5 added the structured metadata companion: the warm human-readable ledger should have a small machine-readable source for future consolidation.
- Iteration 6 added the minimal audit trail: each run should leave concise verification evidence so trust can be checked without creating another maintenance-heavy record.
- Iteration 7 corrected the trajectory: the ledger and audit trail are scaffolding, while the loop still needs a visible object or target artifact to evolve.
- Iteration 8 corrected the entry rhythm: each turn should evaluate the previous iteration and embody the change without also adding a forward-looking target section.
- Iteration 9 clarified the subject: Christopher and OpenClaw's collaboration is itself one of the evolving objects, while the ledger and archive remain supporting tools.
- Iteration 10 proved that interruptions can be recovered by inspecting durable state, but it also showed the artifact had drifted too far into depicting the process itself.
- Iteration 11 restored the artifact boundary with a coherent image/text pair: the map is not the mountain.

The direction is not autonomy for its own sake, and it is not process documentation for its own sake. The direction is a disciplined visible loop that evolves a concrete image-and-text artifact through intended idea, output, evaluation, correction or sidestep, archived lesson, and changed next action.
