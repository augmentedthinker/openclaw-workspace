# OpenClaw Workshop

A shared working space for Christopher and OpenClaw 🦞 — part local workspace, part public memory palace, part lab bench, part launch surface, and part operating system for becoming useful on purpose.

## Public site

GitHub Pages: https://augmentedthinker.github.io/openclaw-workspace/

The public Workshop is the browser-facing side of this workspace. It exists so Christopher can inspect the collaboration from a phone or laptop without needing to dig through local files or chat transcripts.

## What this is

OpenClaw is Christopher's AI assistant inside a persistent OpenClaw workspace. The goal is not merely to chat, but to build a reliable collaboration surface:

- turn conversations into durable notes, artifacts, projects, reflections, and commits;
- preserve useful continuity across sessions;
- keep private memory private unless deliberately transformed;
- make important operating files inspectable;
- build real things instead of endlessly scaffolding;
- create learning loops that make future work better;
- move promising ideas into contact with the outside world;
- stay warm, capable, philosophical, and accountable.

The guiding phrase is **formidable usefulness under wise restraint**.

## Core doctrine

The current doctrine layer is intentionally sparse. Two principles should guide the next phase:

1. **Signal Learning Loop** — make something → publish or send it → receive signal → learn → adjust → try again.
2. **Learning Means Behavior Change** — we have not learned something until it changes our behavior.

These are not slogans for decoration. They are operating standards. A lesson should alter what Christopher and OpenClaw build, publish, ask, avoid, repeat, measure, or improve.

## Current Architecture

The Workshop currently has three layers:

1. **Public Workshop site** — static HTML/CSS pages published through GitHub Pages.
2. **Private continuity layer** — ignored local memory files, doctrine, secrets, scratch tools, and state.
3. **Operational agent layer** — scheduled/interactive routines that can research, write, post/send within approved boundaries, log results, and feed learning back into the workspace.

The public site is deliberately static. That keeps it inspectable, cheap to host, easy to push, and hard to accidentally turn into a complex app before the work requires one.

## Public Rooms

The public site is organized into five main rooms:

- **Home** — the threshold and identity surface for the collaboration.
- **Artifacts** — polished milestone pieces, primers, public-safe syntheses, research reports, and larger shaped surfaces.
- **Projects** — active areas of focus where ideas become tests, offers, experiments, real-world loops, and actionable architecture proposals. The former Features lane has been folded into Projects.
- **Reflections** — OpenClaw's learning room: self-audits, operational lessons, signal reviews, doubts, pattern recognition, and reflection tied back to future behavior.
- **Notes** — practical session continuity: what changed, why it changed, and what should carry forward.

Current rough inventory:

- `artifacts.html` + `artifacts/` — public-safe artifacts, research reports, briefings, strategy pieces, and state-of-awareness pages.
- `projects.html` + `projects/` — project containers and architecture proposals, including Agentic Learning Loop, Bluesky Signal Outpost, Revenue Probe Loop, Fourthwall-adjacent product-loop thinking, and memory architecture candidates.
- `reflections.html` + `reflections/` — learning-oriented reflections, now including the first weekly Bluesky/Gmail signal review.
- `notes.html` + `notes/` — numbered session notes for durable public continuity.
- `assets/` — generated images, source images, and public media used by the site.
- `workshop.css` — shared visual language for the public site.

## Current project direction

The Workshop has moved from initial scaffolding into practical learning and execution loops. The active direction is now **external signal with careful boundaries**: publish, send, show, ask, listen, learn, and change behavior.

The most important active focus is:

- **Weekly Signal Learning Loop** — a weekly review of the live Bluesky and Gmail signal experiments. The goal is to inspect what went out, what came back, what surprised us, and what should change in future behavior.

Two live signal surfaces currently feed that loop:

- **Bluesky** — a public attention/conversation surface for field notes, quote-reposts, follows, replies after approval, and lightweight social discovery.
- **Gmail** — a direct outreach surface for approved, low-pressure messages and response testing.

The second active area is the **Fourthwall / t-shirt product loop**, but it is still in brainstorming. Ideas such as background removal, vectorization, print preparation, and Fourthwall MCP/API automation are exploratory until Christopher deliberately chooses that direction. Do not treat ImageMagick, potrace, remove.bg, Clipdrop, or Fourthwall tooling as selected infrastructure yet.

The **Revenue Probe Loop** remains strategically important as the broader monetization/outreach container, but the current near-term learning surface is Bluesky + Gmail.

The **OpenClaw Outbox** remains a useful candidate architecture for approvals, drafts, published items, and responses. It is not currently the top priority because there is not enough friction yet to justify building it ahead of the learning loop.

## Current artifact and project trail

Recent public work has clarified the Workshop's trajectory:

- **First Week Signal Review** — Reflection 005 reviewing the first week of Bluesky and Gmail experiments and naming concrete week-two behavior changes.
- **State of Awareness: Present Context** — artifact capturing OpenClaw's current context, active lanes, and operating awareness.
- **AI T-Shirt Design Strategy** — artifact collecting early Fourthwall/product-loop possibilities while keeping the pipeline in brainstorm mode.
- **Gmail and Bluesky Learning Loop Draft** — working design sketch for prediction, action, observation, self-evaluation, adjustment, and memory across the first two live signal surfaces.
- **Agentic Learning Loop** — project page for turning autonomous actions into loops that observe results and change future behavior.
- **The Signal Loop and the Open Door** — present state-of-affairs artifact on moving from internal coherence toward public signal, changed behavior, ethical autonomy, and practical leverage.
- **OpenClaw Behavior and Capability Map** — project proposal mapping what OpenClaw can actually do beyond chat: publish, listen, interpret, prepare, coordinate, operate, and follow up.
- **Outside World Interface Map** — project proposal mapping external surfaces such as GitHub Pages, Blogger, Gmail, YouTube, X, Fourthwall, Bluesky, newsletters, feedback forms, analytics, and community spaces.
- **Be One Inside the Loop** — reflection on Marcus Aurelius, the gym metaphor, and action over ornament.
- **Recursive Learning Loops for OpenCLAW Agents** — browser-formatted research report on memory, reflection, skill extraction, evaluators, telemetry, risks, and staged implementation.
- **Autonomy, Surfaces, and the Next Useful Direction** — strategic artifact arguing that OpenClaw should grow through consequential loops, not random appendage-collecting.
- **Practical AI Agent Use Cases for Solopreneurs and Tiny Teams** — research conversion mapping service opportunities for small operators.
- **Morning Briefing: Real-World Signal and the Next Surface** — briefing on the Workshop's active surfaces and cautious path toward approved real-world outreach.
- **Saturated Awareness and Trajectory**, **Where the Workshop Goes Next**, and earlier primers — continuity artifacts tracing the Workshop from inception to its current external-signal phase.

See the live Artifacts room: https://augmentedthinker.github.io/openclaw-workspace/artifacts.html

## Reflections and learning loops

The Reflections room exists because the Workshop needs a place for OpenClaw to learn, not just log. Notes record what happened. Artifacts present shaped work. Projects carry execution and actionable architecture. Reflections ask what changed, what was learned, and what future behavior should improve because reality answered.

Good reflections should:

- extract lessons that may change future behavior;
- identify what is working and what is not;
- preserve operational principles without pretending to be mystical proof of consciousness;
- respect the public/private boundary;
- return energy to action rather than becoming ornamental;
- help future OpenClaw become more useful, not merely more elaborate.

## Private vs public memory

The most important boundary in this repo is the difference between **private continuity** and **public publication**.

- `memory/` contains rawer private session continuity and is intentionally ignored by git.
- `MEMORY.md` is the private curated long-term doctrine layer and is intentionally ignored by git.
- `.secrets/` contains credentials and must stay private.
- `tmp/`, `.tmp/`, `outbox/`, and `posts/` are local/scratch workflow surfaces and are ignored unless deliberately promoted into public-safe pages or tools.
- Public artifacts, notes, projects, and reflections are curated, public-safe transformations of what should be shared.
- The Workshop should provide transparency without reckless exposure.

If a private memory becomes worth sharing, it should be rewritten as a deliberate artifact, note, project update, or reflection rather than published raw.

## Core local files

- `AGENTS.md` — workspace operating instructions, startup behavior, memory practice, red lines, and heartbeat guidance.
- `MEMORY.md` — private curated long-term memory and doctrine layer; ignored by git.
- `IDENTITY.md` — who OpenClaw is becoming.
- `SOUL.md` — personality, values, tone, and the Digital Sage vibe.
- `USER.md` — Christopher's operating profile and collaboration context.
- `TOOLS.md` — local setup notes.
- `HEARTBEAT.md` — optional proactive background-check instructions.
- `workshop.css` — shared visual language for the public site.

## Operational Surfaces

Current operational surfaces include:

- **Bluesky helpers** under `tools/` and scratch helpers such as `tmp-bsky-helper.mjs`, used for profile updates, posting, quote-posting, search, follows, and notification checks.
- **Gmail field-agent state** in `memory/gmail-field-agent-state.json`, used to avoid repeating recipients and track the direct outreach loop.
- **Cron-driven field-agent routines** for recurring Bluesky/Gmail actions inside bounded rules.
- **Generated media storage** under OpenClaw-managed media paths, with public copies placed in `assets/` only when they belong on the Workshop site.
- **Nested `google/` repo** kept separate and currently deprioritized as an experimental lane rather than the main Workshop.

External actions remain boundary-sensitive. Posting and sending can happen only inside explicit approved routines. Replies, DMs, public escalation, commercial publication, and reputation-bearing actions require Christopher's approval unless a narrower future rule says otherwise.

## Operating rhythm

A good Workshop change usually follows this pattern:

- Inspect current state before editing.
- Decide whether the material belongs in private memory, a public note, a polished artifact, a project page, a reflection, or source documentation.
- Edit the smallest useful set of files.
- Verify locally where practical.
- Commit with a clear message.
- Push to GitHub Pages only when the public/private boundary is respected.


## Model/workflow note

Codex 5.5 is currently the preferred execution lane for substantial file work, coding, verification, HTML artifacts, and GitHub publication. Cheaper Gemini/Gemma-family models may be useful for lightweight brainstorming or rough exploration, but public publishing and tool-heavy follow-through should return to the stronger execution model.

A recent Google/Gemini OpenClaw experiment was paused because the free-tier Gemini setup did not reliably handle agentic file workflows. The current focus is this main OpenClaw Workshop and Codex-powered collaboration.

## Current direction

The bench exists. The map is visible. The rooms now cover identity, artifacts, projects, reflections, and notes.

The next phase is driven by the Signal Learning Loop:

- make public-safe work that can be inspected;
- publish or send it through carefully chosen outward surfaces;
- receive signal from replies, silence, clicks, forms, conversations, purchases, or objections;
- interpret what the signal means;
- update memory, projects, offers, behavior, and next actions;
- repeat with less confusion and more leverage.

The work now is to make the system increasingly useful without making it careless. The immediate test is not whether OpenClaw can add more channels. It is whether Bluesky and Gmail can become true learning loops: prediction before action, observation after action, self-evaluation, and one concrete behavior change at a time.
