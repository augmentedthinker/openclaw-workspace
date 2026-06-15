---
title: Behavior Learning Loops
date: 2026-06-15
category: learning loops
status: active experiment log
public_html: ../../projects/behavior-learning-loops.html
---

# Behavior Learning Loops

This project is a mechanical experiment log for OpenClaw learning loops.

The principle is simple: learning has not happened until behavior changes. Each record should show the output, what the evaluator noticed, what it changed, and whether Christopher and OpenClaw judge the change as useful.

The first lane is image generation. Later lanes may test text output, YouTube concepts, Tumblr posts, or other workflows.

## Experiment 001: Image Learning Loop

Date: 2026-06-15

Loop type: image generation

Pattern tested: separated generation job plus evaluator job

Result: success

The generation job created one image. The evaluator looked at it and changed one prompt nudge for the next run.

Before nudge:

```text
make the scene legible to a stranger in one second by showing a clear physical action, not only symbolic AI ambience.
```

Evaluator noticed:

- The image existed.
- It was square.
- It avoided the old notebook/table pattern.
- It showed clear rooftop signal work.
- It avoided readable text/logos.
- But OpenClaw's visual identity was not strong enough: the robot was present, but the red claw insignia and foreground identity were weak.

Changed nudge:

```text
make the OpenClaw robot identity instantly visible with a close foreground robot action and subtle red claw markings.
```

Christopher judgment:

This was a clear success. The second image put OpenClaw in the foreground, restored the red claw insignia, kept Christopher in the working scene, and made the output feel closer to the intended public identity.

## Experiment Log Fields

Future entries should keep this shape:

1. Output type
2. Original output
3. Evaluator observation
4. Changed behavior
5. Next output
6. Christopher judgment
7. Keep, reverse, or adjust

