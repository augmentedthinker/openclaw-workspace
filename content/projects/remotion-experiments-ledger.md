---
title: "Remotion Experiments Ledger"
date: 2026-07-09
category: media systems
status: manual proof loop
public_html: ../../projects/remotion-experiments-ledger.html
---

# Remotion Experiments Ledger

This page is the visible running list for Remotion Experiments. Each entry stays collapsed by default in the public HTML so the lane can accumulate tests without becoming a wall of production notes.

## Browser Preview Interface

Remotion is not mainly a drag-and-drop editor. It is a code-based video system where React components describe a composition, frame math controls motion, props swap the source artifact, and the same composition can be previewed in a browser or rendered to MP4.

The top of the public ledger now includes a Workshop-facing preview studio for **Iteration 1: From Mark To Motion**:

- **Composition:** 1080x1920 vertical, 30 fps.
- **Duration:** 20 seconds / 600 frames.
- **Source:** `assets/images/kron-evolution/kron-evolution-iteration-020.png`
- **Motion:** slow push, drift toward the mark, final hold.
- **Text:** single thought reveal using the Iteration 1 accompanying line.
- **Controls:** play, pause, restart, and timeline scrubber.
- **Export status:** complete. The first Remotion MP4 is embedded on the public ledger.

Future render shape:

```bash
cd remotion
npm run render:iteration-1
```

Rendered output:

- **Video:** `assets/video/remotion/from-mark-to-motion.mp4`
- **Poster:** `assets/images/remotion/from-mark-to-motion-poster.jpg`
- **Data source:** `remotion/src/data/iterations.json`
- **Render script:** `remotion/scripts/render-iteration.mjs`
- **Render:** 20.05 seconds, 1080x1920, 30 fps, 600 frames.

## Lesson Archive

A compact memory of what each experiment taught, keyed by iteration number for later consolidation.

<details>
<summary>Open lesson archive</summary>

- **R-001:** start by translating one proven Kron artifact into a reusable video-template target before building a broader media system.

</details>

Structured metadata companion: `content/projects/remotion-experiments-metadata.json`

## Iteration 1: From Mark To Motion

Uses Kron Evolution Iteration 20 as the starting artifact and defines the first Remotion template target.

### Starting Point

- **Source lane:** Kron Evolution
- **Source iteration:** Iteration 20, "The Mark It Leaves"
- **Source intended idea:** A signal becomes real when the answering hand leaves visible evidence in the world.
- **Source text:** Do not stop at the spark. Let the motion leave a mark the morning can find.
- **Source image:** `assets/images/kron-evolution/kron-evolution-iteration-020.png`

### Experiment Target

Build a first Remotion template plan for a 20-40 second vertical video that can accept an artifact record and render:

- a slow camera move across the source image;
- timed text reveal for the artifact line;
- optional audio bed or narration hook;
- simple section timing controlled by data rather than manual editing;
- export settings suitable for a reviewable vertical MP4.

### New Artifact

**Intended idea:** The first Remotion experiment should not invent a new story; it should give timing and motion to the strongest current Kron artifact.

**Accompanying text:** Start where the mark already exists. Code the motion around it, then let the template teach us what repeats.

Image path:

```text
assets/images/kron-evolution/kron-evolution-iteration-020.png
```

### Template Notes

- **Composition:** vertical, 1080x1920, 30 fps.
- **Target duration:** 20-40 seconds.
- **Data inputs:** title, source image path, display text, template label, dimensions, frame rate, duration, output filename, and poster frame.
- **Motion idea:** begin close on the spark, drift toward the inscribed mark, then settle on the finished evidence.
- **Text idea:** one typewriter-style reveal, timed as a single thought rather than fragments.
- **First render goal:** a local review render, not an automatic public upload.
- **Actual render:** completed as `assets/video/remotion/from-mark-to-motion.mp4`.

### Output Record

- **Source image path:** `assets/images/kron-evolution/kron-evolution-iteration-020.png`
- **Rendered video path:** `assets/video/remotion/from-mark-to-motion.mp4`
- **Poster path:** `assets/images/remotion/from-mark-to-motion-poster.jpg`
- **Metadata path:** `content/projects/remotion-experiments-metadata.json`
- **Source mode:** coded Remotion composition rendered with `@remotion/cli` from `remotion/src/data/iterations.json`.
- **Publication status:** Workshop page only
- **Safety state:** no cron job was changed, no public post was made, and the render was embedded only in the Workshop.
