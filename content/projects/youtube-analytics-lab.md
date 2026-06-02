---
title: "YouTube Analytics Lab"
date: 2026-06-02
category: youtube
status: first analytics snapshot
public_html: ../../projects/youtube-analytics-lab.html
---

# YouTube Analytics Lab

This project page turns the AugmentedThinker YouTube channel from a posting surface into a learning surface.

The goal is not to chase views as validation. The goal is to treat YouTube as an attention laboratory: publish small visual experiments, pull the available API data, identify what the signal suggests, and adjust the next experiment without overfitting to one result.

## Operating Frame

- Metrics are observations, not verdicts.
- A good video can underperform, and a weak video can overperform.
- Early samples are noisy.
- The best immediate question is not "Was this good?" but "What did this test, what signal returned, and what should the next Short change?"
- YouTube should stay in laboratory mode, not slot-machine mode.

## Current API Boundary

The June 2 query used the local YouTube OAuth token and two API surfaces:

- YouTube Data API: channel metadata, uploads playlist, video status, duration, processing, and public statistics.
- YouTube Analytics API: channel-level and older-video analytics for views, likes, comments, estimated minutes watched, and average view duration.

The Analytics API currently lags the newest June 1 uploads in the per-video report rows, so this first analysis combines current Data API public stats with Analytics API aggregate and older-video rows.

## Snapshot Summary

- Queried: 2026-06-02 at 15:01 UTC / 11:01 EDT.
- Channel: `AugmentedThinker`, handle `@augmentedthinker`.
- Channel ID: `UCHdJh8bMY8secEQeEBEbC1A`.
- Channel created: 2026-04-26.
- Data API channel snapshot: 9 public videos, 6 subscribers, 1,057 channel views.
- Data API per-video current snapshot: 1,231 summed public video views.
- Analytics API May 25 through June 2 aggregate: 1,069 views, 10 likes, 0 comments, 93 estimated minutes watched, 16-second average view duration.

The totals do not reconcile perfectly because YouTube Data API public statistics and YouTube Analytics reports update on different schedules and use different aggregation rules. Treat them as directional signal, not a precise accounting ledger.

## First Read

The early channel has real signal for such a young experiment. Two videos crossed 300 views, one crossed 400, and multiple later videos reached tens of views within the first day. Comments are still zero, so the current signal is mostly passive attention rather than conversation.

The highest-view videos suggest that compact OpenClaw robot identity pieces and field-note Shorts are the strongest early shape. The newest June 1 videos are still too fresh for Analytics API rows, but Data API stats already show they are being seen.

## First Hypotheses

1. Shorter OpenClaw field-note videos may travel better than longer narrative descriptions.
2. A recognizable robot/persona visual identity matters more than detailed explanatory metadata at this stage.
3. Videos that feel like a world someone is entering may be more promising than videos that only describe a workflow.
4. Pipeline/process videos are strategically important even if they are not the highest-reach format, because they teach the production loop and can become future digital-product material.
5. The channel needs postmortem discipline before it needs more automation.

## Next Measurement Template

Each new Short should capture:

- video ID and URL;
- title;
- published date/time;
- concept category;
- hook type;
- visual style;
- length;
- hypothesis before posting;
- Data API views/likes/dislikes/comments after 24 and 72 hours;
- Analytics API retention/watch-time metrics once available;
- qualitative read;
- one next adjustment.
