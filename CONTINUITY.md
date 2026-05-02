# CONTINUITY.md — Optional Deep Continuity Dive

Created: 2026-05-02 05:10 EDT  
Purpose: optional add-on context for OpenClaw after the standard boot process.

## What This File Is

This file is not part of the mandatory lightweight startup path.

The standard boot should stay lean: runtime context, core identity/tone files, current user message, and whatever OpenClaw automatically injects. That protects Christopher's API usage, compute budget, and responsiveness.

This file is the next layer down: a deliberate deep continuity dive that Christopher can ask OpenClaw to load when a fresh session needs to regain richer project context.

Use it when Christopher says something like:

- "load continuity"
- "do the deep continuity dive"
- "catch up on the Workshop"
- "read the continuity file"
- "we're resuming from yesterday"

Do not automatically read every linked file on every boot. Ask first unless the current request clearly requires deeper continuity.

## Suggested Startup Question

After the standard boot process, if the setting is appropriate and Christopher has not already given a task, ask briefly:

> Do you want the standard boot only, or should I load the optional deep continuity dive from `CONTINUITY.md`?

If Christopher is already asking for concrete work, do not interrupt with this question unless the work depends on older context.

## Deep Continuity Dive

When Christopher requests the deep continuity dive, perform these steps in order.

### 0. Check usage before going deep

Before spending tokens on a deep continuity pass, inspect current usage with the session status tool.

Pay special attention to weekly Codex usage. Christopher wants this watched carefully because the weekly budget can become the limiting factor even when the current session still has plenty left.

As a rule of thumb:

- If weekly usage is healthy, proceed normally.
- If weekly usage is low, keep the dive tighter: read only the most relevant files, avoid long recaps, and prefer action over exhaustive review.
- If weekly usage is critically low, tell Christopher before doing a full excavation and suggest a lighter catch-up.

When reporting usage, keep it short and practical: mention the weekly percentage left, time remaining in the week if shown, and any immediate implication.

### 1. Re-orient to the Workshop repository

Inspect the current repo state before assuming anything.

Recommended checks:

- `git status --short --branch`
- `git log --oneline --max-count=12`
- top-level file list

Goal: know whether the workspace is clean, what changed recently, and what files/pages exist now.

### 2. Read the public-facing project frame

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

### 3. Read recent session notes

Read the newest session notes first.

Current path pattern:

- `notes/*.html`

Start with the newest 1–3 notes. If a note refers to an unresolved thread, follow that thread only as far as needed.

Purpose: recover narrative continuity — not just what files changed, but why they changed and what Christopher cared about.

### 4. Review relevant Workshop rooms

Inspect the index pages that define the public site structure:

- `index.html`
- `artifacts.html`
- `notes.html`
- `markdowns.html` if present

If the current task concerns a specific room, inspect that room's detail pages too.

Purpose: understand navigation, page patterns, visual language, and naming conventions before editing.

### 5. Read recent artifacts only if relevant

Artifacts are polished records or experiments. They may contain useful context, but they can be longer than necessary.

Read recent artifacts when:

- Christopher asks about the meaning/history of the project
- a session note points to an artifact as important
- the current task edits the Artifacts room
- the artifact is the best available source for a decision

Current artifact path pattern:

- `artifacts/*.html`

### 6. Search memory when personal preference or prior decisions matter

Use memory search before answering questions about prior work, people, dates, preferences, todos, or decisions.

Good queries include:

- `Christopher OpenClaw Workshop preferences`
- `navigation artifacts notes markdowns session notes`
- `continuity boot process deep dive`
- topic-specific phrases from the request

If memory search returns nothing, say so only if it matters. Otherwise use repo evidence.

### 7. Summarize privately, then act

After reading, form a compact internal summary:

- What is the current state?
- What was the last meaningful direction?
- What constraints or preferences matter?
- What is the next useful action?

Do not produce a long status report unless Christopher asks. The point of continuity is better action, not performative recap.

## Depth Levels

Christopher may choose a depth level.

### Standard boot

Use only the normal startup context and current task. No extra continuity loading.

Best for:

- simple edits
- quick answers
- reminders
- isolated tasks

### Deep continuity dive

Use this file's full procedure, but keep it bounded and practical.

Best for:

- resuming Workshop development
- making architecture decisions
- writing narrative notes
- understanding prior design choices
- continuing a multi-day thread

### Full excavation

Only do this when explicitly requested.

Possible additions:

- read all session notes
- inspect full git history
- review all artifacts
- compare screenshots if available
- inspect memory files by date
- produce a written continuity report

This is intentionally not the default because it costs more time, tokens, and compute.

## Current Continuity Snapshot

As of this draft, the Workshop contains:

- core identity and behavior files: `AGENTS.md`, `SOUL.md`, `IDENTITY.md`, `USER.md`, `TOOLS.md`
- collaboration/project files: `README.md`, `COLLABORATION.md`
- public site pages: `index.html`, `artifacts.html`, `notes.html`, `markdowns.html`
- the first artifact: `artifacts/2026-05-01-inception-record.html`
- the first session note: `notes/2026-05-02-session-note-001.html`
- the first markdown mirror: `markdowns/continuity.html`
- generated hero images under `assets/images/`
- shared styling in `workshop.css`

The key project idea: the OpenClaw Workshop is both machine-readable continuity for OpenClaw and a visual browser-facing archive for Christopher.

The key operating principle: build continuity in optional layers. Keep ordinary boot light, then open deeper context only when it is useful.

The key style direction: dark, cinematic, luminous, blue-and-amber, glassy, cosmic, readable on mobile, with consistent navigation and room-like index pages.

The key relationship principle: proactive usefulness under wise restraint. Christopher gives direction, taste, judgment, and authority. OpenClaw translates intention into implementation, preserves continuity, and asks before external, destructive, or trust-sensitive actions.

## Maintenance Notes

Update this file when the deep continuity process itself changes.

Do not turn this file into a massive diary. Session notes are for narrative history. This file is for instructions about how to reload that history efficiently.

When adding new Workshop rooms that matter for continuity, add them to the relevant inspection list above.
