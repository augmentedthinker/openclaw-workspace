---
title: Still-Shot Movie Pipeline
type: project
category: youtube
created: 2026-05-25 10:26 EDT
related_artifact: ../../artifacts/2026-05-25-still-shot-movie-prototype.html
prototype_video: ../../assets/videos/2026-05-25-bluesky-still-shot-prototype.mp4
shorts_video: ../../assets/videos/2026-05-25-bluesky-still-shot-prototype-shorts.mp4
source_research: Programmatic Video Synthesis from Static Imagery markdown brief, supplied 2026-05-25
public_html: ../../projects/still-shot-movie-pipeline.html
---

# Still-Shot Movie Pipeline

This project turns static images into short, storyboarded videos for the AugmentedThinker YouTube signal lane.

The idea came from Christopher's Gemini experiment: a small set of still images became movie-like through slow pans, zooms, and shot sequencing. OpenClaw then created a first 10-second prototype from existing Workshop and Bluesky-adjacent assets.

## Strategic Read

The useful lesson from the research brief is not that we should immediately build a full browser-native video editor. The useful lesson is that there are clear levels of complexity:

1. **Local native rendering now:** Use `ffmpeg` or similar local tools to turn stills into MP4s with pan, zoom, timing, captions, and audio.
2. **Scripted composition next:** Represent videos as simple timelines: scenes, image paths, motion type, duration, caption, audio, output format.
3. **Browser preview later:** Use canvas/WebGL/WebCodecs only if repeated production makes live preview worth the added engineering.
4. **Cloud AI escalation only when justified:** Use image-to-video or diffusion APIs for shots that cannot be achieved through still-image motion, and track cost before scaling.

For OpenClaw, the right near-term lane is scripted composition, not a full custom video application.

## What We Already Proved

The first prototype proved that OpenClaw can create a short still-shot movie locally:

- four existing images;
- four 2.5-second shots;
- 1920x1080 H.264 MP4 output;
- 1080x1920 vertical Shorts MP4 output;
- slow push-in, pull-back, and lateral drift motion;
- generated with a local npm-provided `ffmpeg` binary because system `ffmpeg` was not installed;
- published as a Workshop artifact.

Related artifact: [Still-Shot Movie Prototype](../../artifacts/2026-05-25-still-shot-movie-prototype.html)

## Operating Pipeline

1. Pick a theme: agent field note, signal loop, product idea, or visual micro-story.
2. Select 3 to 6 still images from Workshop assets or generate new ones.
3. Write a tiny storyboard: opening image, middle tension, closing idea.
4. Assign motion to each shot: push in, pull back, pan left/right, hold, or reveal.
5. Add optional captions, title card, voiceover, music, or ambient bed.
6. Render MP4 locally.
7. Review before upload.
8. Publish only after Christopher approval.
9. Log the URL and signal.

## Technical Direction

Near term:

- Keep using native `ffmpeg` for real renders.
- Create reusable scripts around a simple JSON timeline.
- Generate both horizontal 16:9 prototypes and vertical 9:16 Shorts versions.
- Add title/caption support before chasing advanced effects.

Medium term:

- Consider MoviePy only if Python timeline editing becomes easier than direct `ffmpeg`.
- Consider Revideo or canvas-based rendering if we need live preview, reusable visual templates, or kinetic typography.
- Avoid `ffmpeg.wasm` as the main path on Chromebook-class hardware because the research brief correctly flags performance, memory, and cross-origin isolation problems.

Later:

- Explore browser-native WebCodecs plus a muxer such as Mediabunny if we build an interactive local web tool.
- Explore AI image-to-video APIs for selected high-value shots, not as the default production engine.
- Explore frame interpolation, face landmarking, or WebGPU/WebNN only after simpler storyboard videos prove they can get signal.

## Boundary

This project should stay signal-driven. The goal is not to build a video editor because video editors are interesting. The goal is to discover whether short visual field notes can reach people who would never read a long Workshop artifact.

Uploads, public metadata, comments, and channel changes remain approval-gated unless Christopher explicitly defines a narrower autonomous YouTube routine.

## Next Best Build

Create a reusable renderer that accepts a small timeline file and outputs:

- one 16:9 MP4 for artifact pages;
- one 9:16 MP4 for YouTube Shorts;
- optional caption/title card layers;
- a draft title and description for Christopher to review.

The current proof-of-concept now includes both render targets:

- Horizontal artifact render: `assets/videos/2026-05-25-bluesky-still-shot-prototype.mp4`
- Vertical Shorts render: `assets/videos/2026-05-25-bluesky-still-shot-prototype-shorts.mp4`
