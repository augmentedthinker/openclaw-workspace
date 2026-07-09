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

The top of the public ledger now includes a Workshop-facing preview studio for the latest rendered experiment, currently **Iteration 2: Signal Sequence**:

- **Composition:** 1080x1920 vertical, 30 fps.
- **Duration:** 20 seconds / 600 frames.
- **Source:** `assets/images/kron-evolution/kron-evolution-iteration-016.png` through `assets/images/kron-evolution/kron-evolution-iteration-020.png`
- **Motion:** slow push, five-image crossfade, final hold.
- **Text:** single thought reveal using the Iteration 2 accompanying line.
- **Controls:** play, pause, restart, and timeline scrubber.
- **Export status:** complete. The latest Remotion MP4 is embedded on the public ledger.

Future render shape:

```bash
cd remotion
npm run render:iteration-2
```

Rendered output:

- **Video:** `assets/video/remotion/signal-sequence.mp4`
- **Poster:** `assets/images/remotion/signal-sequence-poster.jpg`
- **Data source:** `remotion/src/data/iterations.json`
- **Render script:** `remotion/scripts/render-iteration.mjs`
- **Render:** 20 seconds, 1080x1920, 30 fps, 600 frames.

## Lesson Archive

A compact memory of what each experiment taught, keyed by iteration number for later consolidation.

<details>
<summary>Open lesson archive</summary>

- **R-001:** start by translating one proven Kron artifact into a reusable video-template target before building a broader media system.
- **R-002:** prove the template can accept a sequence of existing Kron images, not only a single source artifact.

</details>

Structured metadata companion: `content/projects/remotion-experiments-metadata.json`

## Iteration 2: Signal Sequence

Uses Kron Evolution Iterations 16 through 20 as a five-image sequence and tests whether the same Remotion template can carry multiple source artifacts.

### Starting Point

- **Source lane:** Kron Evolution
- **Source iterations:** Iterations 16, 17, 18, 19, and 20.
- **Source images:**
  - `assets/images/kron-evolution/kron-evolution-iteration-016.png`
  - `assets/images/kron-evolution/kron-evolution-iteration-017.png`
  - `assets/images/kron-evolution/kron-evolution-iteration-018.png`
  - `assets/images/kron-evolution/kron-evolution-iteration-019.png`
  - `assets/images/kron-evolution/kron-evolution-iteration-020.png`

### Experiment Target

Use the data-driven manifest to pass a `sourceImages` array into the existing Remotion composition, then render a 20-second vertical video with slow image motion and crossfades between the five Kron artifacts.

### New Artifact

**Intended idea:** A Remotion template becomes more useful when it can carry a short sequence of related Kron artifacts through one timed video.

**Accompanying text:** The signal becomes clearer when each image hands one motion to the next.

Rendered video:

```text
assets/video/remotion/signal-sequence.mp4
```

Poster:

```text
assets/images/remotion/signal-sequence-poster.jpg
```

### Template Notes

- **Composition:** vertical, 1080x1920, 30 fps.
- **Duration:** 20 seconds / 600 frames.
- **Data input added:** `sourceImages`, a list of image paths in `remotion/src/data/iterations.json`.
- **Motion idea:** each image holds for roughly four seconds, then crossfades into the next image while the foreground panel and blurred background keep the same template structure.
- **Render command:** `cd remotion && npm run render:iteration-2`

### Output Record

- **Rendered video path:** `assets/video/remotion/signal-sequence.mp4`
- **Poster path:** `assets/images/remotion/signal-sequence-poster.jpg`
- **Metadata path:** `content/projects/remotion-experiments-metadata.json`
- **Source mode:** data-driven Remotion composition rendered with `@remotion/cli` from `remotion/src/data/iterations.json`.
- **Publication status:** Workshop page only
- **Safety state:** no cron job was changed, no public post was made, and the render was embedded only in the Workshop.

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
