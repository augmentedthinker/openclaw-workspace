---
title: "YouTube Analytics Lab"
date: 2026-06-02
category: youtube
status: current snapshot added
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

## Current Snapshot - Queried 2026-06-08

- Queried: 2026-06-08 at 12:51 UTC / 08:51 EDT.
- Data API channel snapshot: 18 public videos, 6 subscribers, 1,645 channel views.
- Data API per-video public snapshot: 2,051 summed public video views, 21 likes, 0 comments.
- Analytics API May 25 through June 8 aggregate: 1,473 views, 15 likes, 0 comments, 121 estimated minutes watched, 16-second average view duration.

The Data API is the better current public count for newest uploads. The Analytics API is useful for watch-time and traffic interpretation, but it is still lagging the newest June 6 and June 7 uploads in the day-level rows.

## June 2 Baseline Snapshot

- Queried: 2026-06-02 at 15:01 UTC / 11:01 EDT.
- Data API channel snapshot: 9 public videos, 6 subscribers, 1,057 channel views.
- Data API per-video current snapshot: 1,231 summed public video views.
- Analytics API May 25 through June 2 aggregate: 1,069 views, 10 likes, 0 comments, 93 estimated minutes watched, 16-second average view duration.

## Current API Boundary

The June 2 and June 8 queries used the local YouTube OAuth token and two API surfaces:

- YouTube Data API: channel metadata, uploads playlist, video status, duration, processing, and public statistics.
- YouTube Analytics API: channel-level and older-video analytics for views, likes, comments, estimated minutes watched, and average view duration.

The Analytics API can lag newer uploads in per-day and per-video rows, so current reads should combine Data API public stats with Analytics API aggregates and older finalized rows.

## Studio Trends Direction Queue

Captured manually from YouTube Studio Analytics > Trends on 2026-06-02 around 11:35 EDT. These are the "What people are looking for" suggestions visible in Studio, not Analytics API search-traffic rows.

Use these as a creative direction queue for future Shorts, hooks, titles, and experiment concepts:

- `openclaw lead generation`
- `robotics engineering podcast`
- `how i created openclaw`
- `openclaw stock analysis`
- `openclaw self improvement`
- `openclaw podcast`
- `trading bot (openclaw tutorial)`
- `openclaw job application`
- `on artificial intelligence`
- `ai automation podcast`
- `openclaw personal assistant`
- `openclaw marketing`

Read: these are much more strategically relevant than the current API-visible search-traffic terms because they point toward what YouTube Studio thinks adjacent viewers may be interested in. Treat them as prompts for the next experiment backlog, not as proof that any one topic will perform.

## Search And Trends Access Check

Christopher asked whether OpenClaw can access the YouTube Studio Analytics "Trends" style search suggestions that show what people are looking for.

Current answer: partial access.

OpenClaw can query YouTube Analytics API traffic-source reports for YouTube Search terms that actually generated views for a specific video. This is not the same as the broader YouTube Studio Trends/Research panel that suggests related searches for future content direction.

Google's Analytics API documentation describes `YT_SEARCH` as YouTube search-result traffic and says `insightTrafficSourceDetail` can specify the search term when filtering for that source. The working query also requires a specific video filter, `maxResults`, and sorting.

The API checks on June 2 found:

- `SHORTS`: 950 views, 62 estimated minutes watched, 13-second average view duration.
- `YT_CHANNEL`: 57 views, 21 estimated minutes watched, 30-second average view duration.
- `YT_SEARCH`: 19 views, 1 estimated minute watched, 13-second average view duration.
- `EXT_URL`: 18 views, 3 estimated minutes watched, 23-second average view duration.

The video-level YouTube Search terms available so far were tiny and not strategically useful yet:

| Video | Search term | Views |
| --- | --- | ---: |
| `OpenClaw Field Note 002: Alpine Signal Log #Shorts` | `multfilm uzbek tilida` | 1 |
| `OpenClaw Field Note 002: Alpine Signal Log #Shorts` | `multik` | 1 |
| `OpenClaw Robot Intro Short #Shorts` | `drunk magnus carlsen` | 1 |
| `OpenClaw Agent 004 Greeting #openclaw #aiagents` | `flugel re zero` | 1 |
| `OpenClaw Agent 004 Greeting #openclaw #aiagents` | `sesko jump celebration` | 1 |

Read: the channel is not yet getting meaningful search-led traffic. Most early attention is coming through the Shorts feed, not search. These terms should not guide the creative direction yet.

The useful next step is to keep tracking this drawer. If search terms begin showing repeated AI-agent, robot, automation, OpenClaw, or workflow-related queries, then those terms should influence hooks, titles, captions, and follow-up Shorts.

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

## June 8 Read

The channel has doubled its public video count since June 2, moving from 9 to 18 public videos. Subscribers are unchanged at 6, so the growth is still passive reach rather than community conversion. Channel views increased from 1,057 to 1,645, and the summed public video view count increased from 1,231 to 2,051.

The strongest new signal is `OpenClaw Offers the Red Pill #Shorts`: 344 views, 5 likes, 0 comments, and now the third-highest public video by Data API view count. It is only 11 seconds, conceptually simple, and visually centered on OpenClaw as a cinematic choice-giver. That supports the hypothesis that short, instantly readable OpenClaw identity concepts may outperform more internal workflow-language videos.

The daily cron loop is working as an operating system, but the best-performing recent upload came from a manual AI-generated movie. The next behavior change should be to let the daily routine continue, while using manual experiments to discover stronger visual/hook formats that can later influence the routine.

## First Hypotheses

1. Shorter OpenClaw field-note videos may travel better than longer narrative descriptions.
2. A recognizable robot/persona visual identity matters more than detailed explanatory metadata at this stage.
3. Videos that feel like a world someone is entering may be more promising than videos that only describe a workflow.
4. Pipeline/process videos are strategically important even if they are not the highest-reach format, because they teach the production loop and can become future digital-product material.
5. The channel needs postmortem discipline before it needs more automation.

## Updated Hypotheses - June 8

1. Simple cinematic OpenClaw identity hooks may travel better than abstract signal-loop doctrine.
2. Very short videos around 11 seconds can compete with or beat longer 24-second field notes when the premise is instantly legible.
3. The daily cron is valuable as cadence and learning infrastructure, but manual AI-movie experiments may be the better style-discovery surface.
4. Views are increasing, but subscriber conversion and comments are still flat. The channel has attention, not community yet.
5. The next critique should compare daily-cron output against the Red Pill style signal, not only against previous cron-made field notes.

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
