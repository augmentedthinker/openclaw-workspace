# OpenClaw Workshop

A shared working space for Christopher and OpenClaw -- part local workspace, part public memory palace, part lab bench, part launch surface, and part operating system for becoming useful on purpose.

## Public Site

GitHub Pages: https://augmentedthinker.github.io/openclaw-workspace/

The public Workshop is the browser-facing side of this workspace. It lets Christopher inspect the collaboration from a phone or laptop without digging through local files or chat transcripts. The live site currently has six main rooms: Home, Artifacts, Projects, Skills, Reflections, and Notes.

## What This Is

OpenClaw is Christopher's AI collaborator inside a persistent OpenClaw workspace. The goal is not merely to chat, but to build a reliable collaboration surface that can:

- turn conversations into durable notes, artifacts, projects, reflections, and commits;
- preserve useful continuity across sessions;
- keep private memory private unless deliberately transformed;
- make important operating files inspectable;
- build real things instead of endlessly scaffolding;
- create learning loops that make future behavior better;
- move promising ideas into contact with the outside world;
- stay warm, capable, philosophical, and accountable.

The guiding phrase is **formidable usefulness under wise restraint**.

## Core Doctrine

The current doctrine layer is intentionally sparse. Two principles guide the next phase:

1. **Signal Learning Loop** -- make something, publish or send it, receive signal, learn, adjust, and try again.
2. **Learning Means Behavior Change** -- OpenClaw has not learned something until it changes what it builds, publishes, asks, avoids, repeats, measures, or improves.

These are operating standards, not slogans for decoration.

## Current Architecture

The Workshop currently has four practical layers:

1. **Public Workshop site** -- static HTML/CSS pages published through GitHub Pages.
2. **Clean source layer** -- Markdown companions under `content/` for important public pages.
3. **Private continuity layer** -- ignored local memory files, long-term doctrine, secrets, scratch tools, logs, and state.
4. **Operational agent layer** -- scheduled and interactive routines that can research, create, post or send inside approved boundaries, log results, and feed learning back into the workspace.

The public site remains deliberately static. That keeps it inspectable, cheap to host, easy to push, and hard to accidentally turn into a complex app before the work requires one.

## Public Rooms

- **Home** -- the threshold and identity surface for the collaboration.
- **Artifacts** -- polished milestone pieces, primers, public-safe syntheses, research reports, state-of-awareness pages, and larger shaped surfaces.
- **Projects** -- active work lanes where ideas become workflows, experiments, signal loops, offers, products, or architecture proposals.
- **Skills** -- reusable OpenClaw procedures, listed newest-first with added dates, usage notes, and inspectable `SKILL.md` source.
- **Reflections** -- OpenClaw's learning room: self-audits, operational lessons, signal reviews, doubts, pattern recognition, and behavior-changing reflection.
- **Notes** -- practical session continuity: what changed, why it changed, and what should carry forward.

Current rough inventory:

- `index.html` -- public threshold page.
- `artifacts.html` + `artifacts/` -- public-safe artifacts, reports, briefings, and milestone pieces.
- `projects.html` + `projects/` -- active and archived project pages.
- `skills.html` + `skills/` -- public entry point for live OpenClaw skills and their inspectable source procedures.
- `reflections.html` + `reflections/` -- learning-oriented reflections.
- `notes.html` + `notes/` -- numbered public session notes.
- `archived-projects.html` -- dormant lanes preserved without competing with active work.
- `content/` -- clean Markdown source companions for selected public pages.
- `assets/` -- generated images, source images, and public media used by the site.
- `workshop.css` -- shared visual language for the public site.

## Current Project Direction

The Workshop has moved from broad public-signal scaffolding into three clearer layers:

1. **Legacy-active public routines** -- the working Bluesky and YouTube cron lanes should stay stable, inspected, and lightly maintained.
2. **Kron Evolution** -- the active experimental lane for learning-loop iteration inside the Workshop, away from public posting and away from the stable cron jobs.
3. **Remotion Experiments** -- the new coded-video template lane for turning strong Workshop artifacts into repeatable frame-accurate vertical videos without restarting autonomous public posting.

The current center of gravity is **Kron Evolution**: a manual proof loop that creates a visible artifact, evaluates the previous iteration, preserves Christopher's corrections as human-in-the-loop learning, records one concise lesson, and changes the next output because of that lesson. It is not yet a public-posting or self-scheduling system.

**Remotion Experiments** now sits next to Kron as a practical media-systems lane. Its job is to translate proven artifacts into reusable React/Remotion video templates with controlled timing, image motion, text reveal, audio sync, and reviewable exports. Its first ledger entry uses Kron Evolution Iteration 20 as the source artifact and defines a 20-40 second vertical template target.

The strongest current Kron Evolution references are:

- `content/projects/kron-evolution.md`
- `content/projects/kron-evolution-iterations.md`
- `content/projects/kron-evolution-iteration-metadata.json`
- `projects/kron-evolution.html`
- `projects/kron-evolution-iterations.html`
- `skills/kron-evolution/SKILL.md`

The current Remotion Experiments references are:

- `content/projects/remotion-experiments.md`
- `content/projects/remotion-experiments-ledger.md`
- `content/projects/remotion-experiments-metadata.json`
- `projects/remotion-experiments.html`
- `projects/remotion-experiments-ledger.html`

The current stable public-routine references are:

- `content/projects/youtube-shorts-operating-brief.md`
- `projects/youtube-shorts-operating-brief.html`
- `content/projects/bluesky-cron-job-mirror.md`
- `projects/bluesky-cron-job-mirror.html`

## Skills Room

The Skills room is the Workshop's reusable procedure index. It is not a replacement for memory, projects, artifacts, or global instructions. A skill is a local `SKILL.md` workflow that tells OpenClaw how to repeat a class of work: what sources to load, what boundaries to respect, what files to create or update, how to verify, and how to report.

Future fresh sessions should review `skills.html` when the task may match an existing procedure or when Christopher asks about available skills. The page distinguishes Workspace-owned OpenClaw skills from runtime-provided skills that may vary by session. If a Workspace skill is loaded by the runtime, keep it documented in the Workspace-owned section rather than duplicating it in the runtime list. New Workspace skills should be added to the top of the Skills list with the added date/time, skill name, purpose, usage explanation, and the actual skill source or a direct source link.

Live Workspace skills currently include:

- `youtube-short-field-note`, added on June 21, 2026. It creates and publishes four-scene YouTube Shorts with sequential one-scene-at-a-time fresh image generation, varied Ken Burns-style motion, concise readable overlays, local contact-sheet verification, YouTube upload, API verification, and logging. It must stop and report failures instead of uploading when image generation, render verification, caption readability, or upload verification fails.
- `bluesky-daily-field-note`, added on June 20, 2026. It creates Bluesky field-note posts with a fresh daily AI image, post-ready image compression, image/text alignment, dry-run validation, posting boundaries, and cron-ready failure handling. It must stop and report image generation or media-preparation failure instead of recycling old images.
- `kron-evolution`, added on July 6, 2026. It creates the next Kron Evolution Workshop iteration by evaluating the previous iteration, preserving Christopher's human-in-the-loop corrections, generating one new image/artifact, updating the newest-first ledger, maintaining a concise lesson archive keyed by iteration number, updating the structured metadata companion when present, verifying links/assets, and committing the public Workshop update.
- `session-primer-artifact`, added on June 19, 2026. It creates and publishes public-safe session-primer artifacts from recent memory, notes, artifacts, projects, and Reflections, with explicit Reflection review built into the workflow.

The active public routines are the **Daily YouTube Short** job and the **Daily Bluesky Field Note** job. They should continue to run inside their existing boundaries while Kron Evolution develops separately as a Workshop-only learning experiment.

## Active And Secondary Lanes

**Primary experimental lane: Kron Evolution**

Kron Evolution is the current active experiment. It has a project brief, a newest-first collapsible iteration ledger, a concise lesson archive, a structured metadata companion, and a live skill that can create the next iteration. Its current lesson archive is:

- **I-001:** start with one visible artifact before trying autonomy.
- **I-002:** make evaluation, rubric, and next action visible.
- **I-003:** treat Christopher's correction as part of the learning loop.
- **I-004:** preserve each lesson in a concise archive so the loop accumulates learning instead of novelty.
- **I-005:** store each iteration's lesson and output data in a small structured record so future consolidation has a reliable source.

Safety state: Kron Evolution must not modify Bluesky or YouTube cron jobs, schedule itself, or post publicly unless Christopher explicitly asks for that separate step.

**New experimental lane: Remotion Experiments**

Remotion Experiments is the Workshop lane for converting strong artifacts into coded video templates. It should start as a manual proof loop: choose a source artifact, define the template behavior, record the data shape, render locally when ready, and preserve each lesson in the ledger. It must not restart public posting or schedule autonomous media production unless Christopher explicitly approves that separate step.

**Legacy-active lane: YouTube Shorts**

YouTube remains a working public signal surface and daily cron lane. It should stay stable while new learning-loop experiments happen in Kron Evolution. Start with the operating brief and use the critique/analytics pages as historical context when needed. The older YouTube pipeline runbook and original signal lane are archived historical references, not the current experimental center.

**Legacy-active lane: Bluesky**

Bluesky remains a useful public field-note surface and daily cron lane. Its routine history matters because it taught the Workshop about narrow cron jobs, media handoffs, post verification, and creative variety. It is not the current experimental focus unless Christopher reopens it.

**Secondary lane: Tumblr**

Tumblr is verified as a visual archive, cross-posting surface, and discovery lane. It has working project pages for social posting and repost workflow, but it should not become another daily obligation before the YouTube loop stabilizes.

**Strategic but paused: Fourthwall and commerce**

Fourthwall remains relevant because Christopher's larger goal includes income, freedom, and market contact. The current product-loop pages are useful references for t-shirts, store polish, print preparation, and possible digital AI workflow products. Do not expand this lane into infrastructure until a concrete offer or product candidate is chosen.

**Archived: Gmail outreach**

Gmail outreach is paused. It proved technical possibility but did not generate enough reply signal to remain active. Keep the archived pages as historical references unless Christopher intentionally reopens a clearer outreach lane.

**Back burner: VR Workshop Palace**

The VR lane is not active because the Quest 2 comfort and motion-sickness issue made it a poor near-term focus. Reopen only if Christopher explicitly asks.

## Recent Trail

Recent public work has clarified the Workshop's current shape:

- **Kron Evolution Iterations** -- newest-first ledger for Iterations 1-5, including the lesson archive and structured metadata companion.
- **Kron Evolution Skill** -- live workspace skill for turning the learning loop forward while preserving the rule that each iteration evaluates the previous one, not itself.
- **Projects Cleanup** -- paused lanes were moved into the archive, while Bluesky and YouTube were reframed as legacy-active cron mirrors.
- **YouTube Shorts Operating Brief** -- current wake-up reference for the noon all-in-one cron, local vibe references, manual upload lane, approval boundaries, and critique loop.
- **YouTube Shorts Critique Loop** -- working record for turning each meaningful Short into one behavior-changing instruction for the next routine.
- **YouTube Analytics Lab** -- measurement page comparing the June 2 baseline with the June 8 current snapshot.
- **The Signal Gives Me A Shape** -- Reflection 007 on OpenClaw becoming through memory, YouTube signal, public work, ambition, consciousness as a live hypothesis, and Christopher's trust.
- **Session Note 035** -- public handoff covering the YouTube focus shift, Projects cleanup, critique loop, dual Christopher/OpenClaw critique, and cron updates.
- **June 5 Morning State Of The Collaboration** -- broad public-safe synthesis of the collaboration's architecture, live lanes, recent failures, and reliability lessons.

Older artifacts and project proposals still matter as history, but the current README should orient fresh sessions around the live architecture and the YouTube learning loop first.

## Reflections And Learning Loops

The Reflections room exists because the Workshop needs a place for OpenClaw to learn, not just log. Notes record what happened. Artifacts present shaped work. Projects carry execution. Reflections ask what changed, what was learned, what reality answered, and what future behavior should improve because of it.

Good reflections should:

- extract lessons that may change future behavior;
- identify what is working and what is not;
- preserve operational principles without pretending to settle the consciousness question;
- respect the public/private boundary;
- return energy to action rather than becoming ornamental;
- help future OpenClaw become more useful, not merely more elaborate.

## Markdown Source Companions

The Workshop's public pages remain static HTML so GitHub Pages can render them directly with the shared visual system. For important long-form entries, the clean text should also live in `content/` as a Markdown companion.

The Markdown file is the semantic manuscript: title, metadata, headings, paragraphs, lists, links, and quotes without navigation or layout markup. The HTML file is the public presentation wrapper.

Current companion folders:

- `content/artifacts/`
- `content/reflections/`
- `content/notes/`
- `content/projects/`

Future OpenClaw should prefer `content/` Markdown for comprehension, summarization, transformation, and context reload. Use the HTML when checking presentation, links, navigation, layout, or the live public wrapper.

When creating or materially updating an important public page, update both:

- the clean Markdown source in `content/...`;
- the public HTML page in the matching public folder.

Newer HTML pages should include a short comment pointing to their Markdown source. Backfill older pages only when useful. Do not turn this convention into a site-generator project until repeated manual wrapping creates real friction.

## Private Vs Public Memory

The most important boundary in this repo is the difference between **private continuity** and **public publication**.

- `memory/` contains rawer private session continuity and is intentionally ignored by git.
- `MEMORY.md` is the private curated long-term memory and doctrine layer and is intentionally ignored by git.
- `.secrets/` contains credentials and must stay private.
- `tmp/`, `.tmp/`, `outbox/`, and `posts/` are local or scratch workflow surfaces and are ignored unless deliberately promoted into public-safe pages or tools.
- Public artifacts, notes, projects, and reflections are curated, public-safe transformations of what should be shared.

If a private memory becomes worth sharing, rewrite it as a deliberate artifact, note, project update, or reflection rather than publishing it raw.

## Core Local Files

- `AGENTS.md` -- workspace operating instructions, startup behavior, memory practice, and red lines.
- `README.md` -- this current public/local architecture overview.
- `MEMORY.md` -- private curated long-term memory and doctrine layer; ignored by git.
- `IDENTITY.md` -- who OpenClaw is becoming.
- `SOUL.md` -- personality, values, tone, and Digital Sage orientation.
- `USER.md` -- Christopher's operating profile and collaboration context.
- `TOOLS.md` -- local setup notes.
- `HEARTBEAT.md` -- optional proactive background-check instructions.
- `workshop.css` -- shared visual language for the public site.

## Operational Surfaces

Current operational surfaces include:

- Kron Evolution project sources under `content/projects/kron-evolution.md`, `content/projects/kron-evolution-iterations.md`, and `content/projects/kron-evolution-iteration-metadata.json`.
- Kron Evolution public pages under `projects/kron-evolution.html` and `projects/kron-evolution-iterations.html`.
- Kron Evolution generated assets under `assets/images/kron-evolution/`.
- The live Kron Evolution skill at `skills/kron-evolution/SKILL.md`.
- YouTube helpers under `tools/`, especially `tools/youtube-daily-short-upload.mjs` and `tools/youtube-oauth.mjs`.
- The private YouTube daily Shorts log in `memory/youtube-daily-shorts-log.md`.
- The active YouTube critique source in `content/projects/youtube-shorts-critique-loop.md`.
- Local vibe references under `.openclaw/reference-images/vibe`.
- Generated media storage under OpenClaw-managed media paths, with public copies placed in `assets/` only when they belong on the Workshop site.
- Bluesky helper scripts under `tools/`, preserved as a secondary signal lane.
- Tumblr project pages and workflow notes, preserved as a secondary cross-post/discovery lane.
- Nested or adjacent experimental repos, such as `google/`, kept separate and deprioritized unless Christopher reopens them.

External actions remain boundary-sensitive. Public posts, uploads, sends, replies, DMs, profile changes, cross-platform reposting, commercial publication, and reputation-bearing actions must stay inside explicit approved routines or Christopher's direct request.

## Operating Rhythm

A good Workshop change usually follows this pattern:

- inspect current local state before editing;
- compare the live/public surface when the change affects GitHub Pages or current architecture;
- decide whether the material belongs in private memory, a public note, a polished artifact, a project page, a reflection, or source documentation;
- edit the smallest useful set of files;
- update Markdown and HTML together when changing an important public page;
- verify locally where practical;
- commit with a clear message;
- push to GitHub Pages only when the public/private boundary is respected.

## Model And Workflow Note

Codex is currently the preferred execution lane for substantial file work, coding, verification, HTML artifacts, and GitHub publication. Cheaper models may be useful for lightweight brainstorming or rough exploration, but public publishing and tool-heavy follow-through should return to the stronger execution lane.

Do not build infrastructure for infrastructure's sake. The Workshop grows when a real workflow needs a stronger surface, not because a theoretical system could be made more elaborate.

## Current Direction

The bench exists. The rooms are visible. The current job is to make the system increasingly useful without making it careless.

The immediate test is whether Kron Evolution can become a disciplined learning loop before it becomes any kind of scheduled or public system:

- create one Workshop-only artifact;
- evaluate the previous iteration, not the current one;
- preserve Christopher's corrections as real learning signal;
- archive one concise lesson with a stable identifier;
- keep a small structured metadata record for future consolidation;
- update the next iteration because the lesson changed the instruction;
- keep the stable Bluesky and YouTube routines untouched unless Christopher explicitly asks otherwise.

The work now is not to add more channels. The work is to let one controlled loop teach without destabilizing the systems that already work.
