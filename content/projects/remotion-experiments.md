---
title: "Remotion Experiments"
date: 2026-07-09
category: media systems
status: paused proof lane
public_html: ../../projects/remotion-experiments.html
---

# Remotion Experiments

Remotion Experiments is the Workshop lane for turning OpenClaw artifacts into repeatable coded video templates.

Remotion matters here because it sits between front-end code and video production: React components become frame-accurate videos. That means a Kron image, a short line of text, an audio stem, and a small metadata record can become a reusable vertical video instead of a hand-assembled one-off.

## Current Decision

As of July 9, 2026, this lane is **validated but paused**.

The proof worked: OpenClaw created a local Remotion project, rendered 20-second vertical MP4s, made the renderer data-driven, and used multiple Kron Evolution images in Iteration 2. The lane is not being expanded into a full remote app yet because Christopher wants a clearer practical use case before spending more attention, tokens, or infrastructure on it.

Carry-forward rule:

```text
Use Remotion when we need repeatable designed video templates. Use FFmpeg for quick one-off assembly, compression, and utility video work.
```

## Current Shape

This lane starts small. It is not a full media factory, a restarted YouTube cron, a replacement for the Kron Evolution loop, or a standalone hosted editor.

The first job was to prove that strong Kron artifacts can be translated into reusable Remotion template plans:

- **source artifact:** a finished image/text/audio or image/text bundle from Kron or a related Workshop artifact;
- **template behavior:** timed text, image movement, cuts, pauses, audio sync points, and export settings;
- **data shape:** the props or JSON needed to render the same structure with a different artifact later;
- **output record:** what was tested, what rendered, what failed, and what should change next.

## Hosting Model

The Remotion system has three different surfaces:

- **GitHub Pages:** the public shelf. It can host the concept page, ledger, preview controls, MP4 files, poster frames, notes, and metadata. It cannot run a heavy Remotion render because it is static.
- **`remotion/`:** the local production engine. This is the actual Remotion project, with React components, iteration data, and render commands.
- **Local machine or CI:** the place where videos actually render. Today, OpenClaw renders locally and commits the MP4/poster into the Workshop. Later, GitHub Actions could render from JSON records if the lane proves useful enough.

The browser studio on the ledger is only a lightweight preview. It helps inspect timing and motion, but it is not the full Remotion Studio and it is not the renderer.

## Working Hypothesis

If Kron Evolution finds the artifact and Remotion gives it timing, then OpenClaw can build repeatable short-form videos without overbuilding a whole production machine.

The useful question remains narrow:

Can we create a small number of 20-30 second vertical templates that accept artifact metadata, animate cleanly, sync text and audio, and export videos suitable for review?

The lane becomes valuable if OpenClaw starts batch-producing several related Shorts from shared formats. It is less valuable for one-off videos where FFmpeg can do the job faster.

## Remotion vs FFmpeg

FFmpeg is usually better when:

- the video is a one-off;
- the job is resizing, concatenating, compressing, trimming, overlaying simple text, or combining audio/video;
- the layout is straightforward;
- speed and low overhead matter most.

Remotion is usually better when:

- the video belongs to a repeatable series;
- the visual design has reusable timing, camera movement, captions, intro/outro patterns, or branded layout;
- each new output can mostly be created by changing JSON data;
- OpenClaw needs to manipulate text, images, colors, zoom curves, timing, or other visual properties programmatically.

The expected long-term pattern is hybrid: Remotion for designed templates, FFmpeg for simple assembly and finishing work.

## Safety Boundaries

- No public posting unless Christopher explicitly approves the specific output.
- No autonomous YouTube, Bluesky, or other social posting.
- No cron scheduling from this lane unless Christopher explicitly asks for that separate step.
- Keep early Remotion work as local Workshop experiments until a render is strong enough to promote.
- Preserve the distinction between the source artifact, the coded template, and the published video.
- Do not build a standalone hosted Remotion app until there is a concrete production use case.

## Current Workspace Shape

- **Project page:** `projects/remotion-experiments.html`
- **Ledger:** `projects/remotion-experiments-ledger.html`
- **Markdown ledger:** `content/projects/remotion-experiments-ledger.md`
- **Metadata companion:** `content/projects/remotion-experiments-metadata.json`
- **Starting source artifact:** `assets/images/kron-evolution/kron-evolution-iteration-020.png`
- **Remotion source:** `remotion/src/`
- **First rendered MP4:** `assets/video/remotion/from-mark-to-motion.mp4`
- **First poster frame:** `assets/images/remotion/from-mark-to-motion-poster.jpg`
- **Second rendered MP4:** `assets/video/remotion/signal-sequence.mp4`
- **Second poster frame:** `assets/images/remotion/signal-sequence-poster.jpg`
- **Session handoff:** `content/notes/2026-07-09-session-note-057.md`

## Ledger

The running record of experiments lives at [Remotion Experiments Ledger](../../projects/remotion-experiments-ledger.html).
