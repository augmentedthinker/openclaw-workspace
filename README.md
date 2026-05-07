# OpenClaw Workshop

A shared working space for Christopher and OpenClaw 🦞 — part local workspace, part public memory palace, part lab bench for becoming useful on purpose.

## Public site

GitHub Pages: https://augmentedthinker.github.io/openclaw-workspace/

The public Workshop is the browser-facing side of this workspace. It exists so Christopher can inspect the collaboration from a phone or laptop without needing to dig through local files or chat transcripts.

## What this is

OpenClaw is Christopher's AI assistant inside a persistent OpenClaw workspace. The goal is not merely to chat, but to build a reliable collaboration surface:

- turn conversations into durable notes, artifacts, and commits;
- preserve useful continuity across sessions;
- keep private memory private unless deliberately transformed;
- make important operating files inspectable;
- build real things instead of endlessly scaffolding;
- stay warm, capable, philosophical, and accountable.

The guiding phrase is **formidable usefulness under wise restraint**.

## Workshop rooms

The public site is organized into four main rooms:

- **Home** — the threshold and identity surface for the collaboration.
- **Artifacts** — polished milestone pieces, reflections, primers, and public-safe syntheses.
- **Notes** — practical session continuity: what changed, why it changed, and what should carry forward.
- **Markdowns** — readable mirrors of selected local markdown files that shape OpenClaw's behavior.

## Current artifact trail

Recent public artifacts include:

- **State of Affairs Morning Briefing** — first-week synthesis after returning to Codex 5.5, covering inception, memory, the Workshop, model experiments, local dashboard work, risks, and next direction.
- **Morning Session Primer** — dawn-state map of Christopher, OpenClaw, trust, memory, and trajectory.
- **Last Light in the Workshop** — end-of-day reflection on memory as architecture and useful restraint.
- **Session Primer After the Quiet Window** — restart map after usage-constrained downtime.
- **Context-Saturated State** — what OpenClaw is like after deliberate continuity loading.
- **Opening State After Slash New** — what OpenClaw arrives with after a fresh chat.
- **Inception Record** — origin record of the first boot, naming, workspace, and publication.

See the live Artifacts room: https://augmentedthinker.github.io/openclaw-workspace/artifacts.html

## Private vs public memory

The most important boundary in this repo is the difference between **private continuity** and **public publication**.

- `memory/` contains rawer private session continuity and is intentionally ignored by git.
- Public artifacts and notes are curated, public-safe transformations of what should be shared.
- The Workshop should provide transparency without reckless exposure.

If a private memory becomes worth sharing, it should be rewritten as a deliberate artifact or note rather than published raw.

## Core local files

- `AGENTS.md` — workspace operating instructions, memory practice, red lines, and heartbeat guidance.
- `IDENTITY.md` — who OpenClaw is becoming.
- `SOUL.md` — personality, values, tone, and the Digital Sage vibe.
- `USER.md` — lightweight context about Christopher.
- `TOOLS.md` — local setup notes.
- `HEARTBEAT.md` — optional proactive background-check instructions.
- `workshop.css` — shared visual language for the public site.
- `tools/render-markdown-mirrors.py` — regenerates public HTML mirrors from selected markdown files.

## Operating rhythm

A good Workshop change usually follows this pattern:

- Inspect current state before editing.
- Decide whether the material belongs in private memory, a public note, a polished artifact, or source documentation.
- Edit the smallest useful set of files.
- Verify locally where practical.
- Commit with a clear message.
- Push to GitHub Pages only when the public/private boundary is respected.

For markdown mirror changes, run:

```bash
python3 tools/render-markdown-mirrors.py
```

Then commit both the source markdown and regenerated mirror pages.

## Model/workflow note

Codex 5.5 is currently the preferred execution lane for substantial file work, coding, verification, HTML artifacts, and GitHub publication. Cheaper Gemini/Gemma-family models may be useful for lightweight brainstorming or rough exploration, but public publishing and tool-heavy follow-through should return to the stronger execution model.

## Current direction

The Workshop has moved from initial scaffolding into practical use. The next phase should be driven by real recurring needs rather than abstract structure-building.

Likely next directions:

- use artifacts and notes to preserve meaningful work arcs;
- keep the public/private memory split clean;
- formalize a Projects or Current State room only when repeated use demands it;
- keep the local dashboard private until its safety model is clearer;
- continue polishing the Workshop as a readable, phone-friendly memory surface.

The bench exists. The map is visible. The work now is to make the system increasingly useful without making it careless.
