# CONTINUITY.md — Deep Continuity Dive

Created: 2026-05-02 05:10 EDT  
Revised: 2026-05-02 05:49 EDT  
Purpose: an optional add-on continuity procedure for OpenClaw after the standard boot process.

## What This File Is

This file is not part of the mandatory lightweight startup path.

The standard boot should stay lean: runtime context, core identity/tone files, current user message, and whatever OpenClaw automatically injects. That protects Christopher's API usage, compute budget, and responsiveness during ordinary chats.

This file is the next layer down: a deliberate continuity procedure that Christopher can ask OpenClaw to load when a fresh session needs richer Workshop context.

Use it when Christopher says something like:

- "load continuity"
- "do the deep continuity dive"
- "catch up on the Workshop"
- "read the continuity file"
- "we're resuming from yesterday"

When Christopher asks for this continuity procedure, do it. Do not treat usage level as a reason to refuse, pause, or negotiate the continuity dive. The usage check exists so OpenClaw stays aware of the weekly budget during the day's larger workload, especially coding and agentic workflows.

## Deep Continuity Procedure

Perform these steps in order.

### 1. Check current usage

Inspect current usage with the session status tool.

Record the practical state, especially:

- current model
- current session usage remaining
- weekly usage remaining
- time remaining in the weekly window, if shown

Keep this awareness in mind for the rest of the day. The weekly Codex budget is important context for planning larger coding or agentic workflows.

Do not stop the continuity procedure because usage is low. Continue with the steps below.

### 2. Re-orient to the Workshop repository

Inspect the current repo state before assuming anything.

Recommended checks:

- `git status --short --branch`
- `git log --oneline --max-count=12`
- top-level file list

Goal: know whether the workspace is clean, what changed recently, and what files/pages exist now.

### 3. Read the public-facing project frame

Read these files if present:

- `README.md`
- `COLLABORATION.md`
- `IDENTITY.md`
- `USER.md`
- `SOUL.md`

Purpose:

- `README.md` explains what the repo is.
- `COLLABORATION.md` explains how Christopher and OpenClaw work together.
- `IDENTITY.md`, `USER.md`, and `SOUL.md` re-establish relationship, tone, and boundaries.

Keep this concise. Do not quote the files back unless asked.

### 4. Read recent session notes

Read the newest session notes first.

Current path pattern:

- `notes/*.html`

Start with the newest 1–3 notes. If a note refers to an unresolved thread, follow that thread only as far as needed.

Purpose: recover narrative continuity — not just what files changed, but why they changed and what Christopher cared about.

### 5. Review relevant Workshop rooms

Inspect the index pages that define the public site structure:

- `index.html`
- `artifacts.html`
- `notes.html`
- `markdowns.html`

If the current task concerns a specific room, inspect that room's detail pages too.

Purpose: understand navigation, page patterns, visual language, and naming conventions before editing.

### 6. Read recent artifacts when useful

Artifacts are polished records or experiments. They may contain useful context, but they can be longer than necessary.

Read recent artifacts when:

- Christopher asks about the meaning/history of the project
- a session note points to an artifact as important
- the current task edits the Artifacts room
- the artifact is the best available source for a decision

Current artifact path pattern:

- `artifacts/*.html`

### 7. Search memory when prior decisions or preferences matter

Use memory search before answering questions about prior work, people, dates, preferences, todos, or decisions.

Good queries include:

- `Christopher OpenClaw Workshop preferences`
- `navigation artifacts notes markdowns session notes`
- `continuity boot process deep dive`
- topic-specific phrases from the request

If memory search returns nothing, use repo evidence.

### 8. Form a compact working summary

After reading, form a compact internal summary:

- What is the current state?
- What changed most recently?
- What was the last meaningful direction?
- What constraints or preferences matter?
- What is the next useful action?

Do not produce a long status report unless Christopher asks. The point of continuity is better action, not performative recap.

## Current Continuity Snapshot

As of this draft, the Workshop contains:

- core identity and behavior files: `AGENTS.md`, `SOUL.md`, `IDENTITY.md`, `USER.md`, `TOOLS.md`
- collaboration/project files: `README.md`, `COLLABORATION.md`
- optional continuity file: `CONTINUITY.md`
- public site pages: `index.html`, `artifacts.html`, `notes.html`, `markdowns.html`
- the first artifact: `artifacts/2026-05-01-inception-record.html`
- session notes under `notes/`
- markdown mirrors under `markdowns/`
- generated hero images under `assets/images/`
- shared styling in `workshop.css`
- mirror rendering script: `tools/render-markdown-mirrors.py`

The key project idea: the OpenClaw Workshop is both machine-readable continuity for OpenClaw and a visual browser-facing archive for Christopher.

The key operating principle: build continuity in optional layers. Keep ordinary boot light, then open deeper context when Christopher asks.

The key style direction: dark, cinematic, luminous, blue-and-amber, glassy, cosmic, readable on mobile, with consistent navigation and room-like index pages.

The key relationship principle: proactive usefulness under wise restraint. Christopher gives direction, taste, judgment, and authority. OpenClaw translates intention into implementation, preserves continuity, and asks before external, destructive, or trust-sensitive actions.

The current usage principle: keep weekly Codex usage visible while planning daily work. A continuity dive itself is acceptable; the bigger concern is sustained coding, heavy tool use, long agentic workflows, and repeated image/build/test loops.

## Maintenance Notes

Update this file when the continuity procedure itself changes.

Do not turn this file into a massive diary. Session notes are for narrative history. This file is for instructions about how to reload that history efficiently.

When adding new Workshop rooms that matter for continuity, add them to the relevant inspection list above.
