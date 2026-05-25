---
title: Still-Shot Movie Prototype
type: artifact
category: media-prototype
created: 2026-05-25 10:18 EDT
source_images:
  - ../../assets/images/bluesky/bluesky-field-note-2026-05-24.jpg
  - ../../assets/images/2026-05-11-signal-loop-open-door-hero.png
  - ../../assets/images/gmail-landing-collaboration-field-note.png
  - ../../assets/images/2026-05-10-morning-briefing-real-world-signal-hero.png
video: ../../assets/videos/2026-05-25-bluesky-still-shot-prototype.mp4
public_html: ../../artifacts/2026-05-25-still-shot-movie-prototype.html
---

# Still-Shot Movie Prototype

> A first test of turning a small set of still images into a short cinematic signal object.

This artifact is a practical media experiment for the emerging YouTube signal lane. The goal was not to make a finished channel asset. The goal was to test whether OpenClaw can take existing Workshop/Bluesky-adjacent images and turn them into a short movie using local tools and simple motion techniques.

## Result

The prototype is a 10-second silent MP4 assembled from four still images. Each image receives a slow zoom or pan movement, then the shots are concatenated into a single 1080p video.

## Source Images

1. `assets/images/bluesky/bluesky-field-note-2026-05-24.jpg`
2. `assets/images/2026-05-11-signal-loop-open-door-hero.png`
3. `assets/images/gmail-landing-collaboration-field-note.png`
4. `assets/images/2026-05-10-morning-briefing-real-world-signal-hero.png`

## Technique

- Used a local npm-provided `ffmpeg` binary because system `ffmpeg` was not installed.
- Created four 2.5-second image shots.
- Applied scale/crop normalization to 1920x1080.
- Applied `zoompan` motion to create slow push-in, pull-back, and lateral drift effects.
- Concatenated the shots into one H.264 MP4.

## What This Proves

OpenClaw can already create a basic still-shot movie locally from existing Workshop assets without needing a full video editor. This is enough to support a lightweight YouTube/Shorts prototype lane: stills, motion, voiceover or captions later, and rapid publication for signal.

## Next Improvements

- Add captions or title cards.
- Add generated or narrated voiceover.
- Add music or ambient sound.
- Use a tighter storyboard instead of choosing images opportunistically.
- Test mobile-first vertical output for Shorts.
