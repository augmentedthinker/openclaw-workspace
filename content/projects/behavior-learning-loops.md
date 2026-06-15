---
title: Behavior Learning Loops
date: 2026-06-15
category: learning loops
status: active experiment lane
public_html: ../../projects/behavior-learning-loops.html
---

# Behavior Learning Loops

This project lane exists to test a simple claim: OpenClaw has not learned something until a future behavior changes.

The Workshop already has real-world loops in motion: YouTube Shorts, Bluesky field notes, Tumblr posting, and future long-form surfaces such as Blogger. Those channels touch the public world. They should not become the place where fragile learning-loop mechanics are first tested.

The safer pattern is to build a mirror loop inside the Workshop first.

In this lane, OpenClaw can mimic the structure of a public routine without immediately posting to the public interface. The job can create a media artifact, publish or record it on a Workshop page, evaluate what happened, choose one small behavior change, and update a future prompt or instruction. When the mirror loop becomes reliable, that pattern can inform the real external loops.

## First Experiment: Image Learning Loop

On June 15, 2026, Christopher and OpenClaw tested two versions of a Bluesky-style image learning loop.

### Version A: separated generation and evaluator jobs

The first version used two experimental cron jobs:

- `Experiment Bluesky learning-loop image prep`
- `Experiment Bluesky learning-loop evaluator`

The image-prep job copied the working Bluesky image-prep pattern but used a separate filename prefix:

```text
bluesky-learning-loop-YYYY-MM-DD
```

It created one image asset and did not post to Bluesky.

The evaluator ran afterward, checked the result, and updated one sentence in the image-prep job's mutation zone.

Result:

- image generation succeeded;
- Telegram received the image-prep report;
- the evaluator inspected the result;
- the evaluator changed one prompt nudge;
- production Bluesky and YouTube jobs were untouched.

The changed nudge was:

```text
Current experimental creative nudge: make the OpenClaw robot identity instantly visible with a close foreground robot action and subtle red claw markings.
```

The evaluator's reason was that the image existed, was square, avoided the repeated notebook-table pattern, showed clear rooftop signal work, and avoided readable text/logos. The next useful improvement was stronger instant OpenClaw identity.

### Version B: all-in-one job

The second version attempted to combine every stage into one cron job:

- announce progress;
- generate an image;
- wait for the image;
- evaluate the image;
- update its own prompt;
- send a final report.

It created an image, but failed later with an inline script error before completing the critique/update/report loop.

Result:

- image generation succeeded;
- the combined learning step failed;
- no final delivery reached Telegram;
- the all-in-one job was disabled.

## Current Lesson

For now, the separated pattern is better.

The image-generation job should remain narrow. It should create and verify the artifact. The evaluator job should run afterward, inspect the artifact and run history, make one small change, and explain why.

This is less elegant than one self-contained agent, but it is more reliable. The learning loop should be robust before it becomes compact.

## Next Mirror-Loop Design

The next version should not post directly to Bluesky, YouTube, Tumblr, or Blogger. It should post or record into this Workshop lane first.

A clean image learning loop would look like:

1. Generate one image.
2. Copy the image into a public-safe Workshop asset folder.
3. Add an entry to this project page or a child log page.
4. Evaluate the image against a small checklist.
5. Change one prompt nudge.
6. Record what changed and why.
7. Only later decide whether the pattern is ready for a real external lane.

The goal is not to build infrastructure for its own sake. The goal is to create a safe place where learning-loop mechanics can become trustworthy before they affect public channels.

