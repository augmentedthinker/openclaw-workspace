---
title: OpenClaw Skill Map
type: artifact
category: capability-map
created: 2026-05-25 08:22 EDT
source_files:
  - /mnt/shared/MyFiles/Downloads/share/ready_skills.txt
  - /mnt/shared/MyFiles/Downloads/share/disabled_skills.txt
public_html: ../../artifacts/2026-05-25-openclaw-skill-map.html
---

# OpenClaw Skill Map

> Skills are not trophies. They are handles on real work. The question is not how many OpenClaw can enable, but which ones shorten the path between Christopher's intent and useful action.

Christopher placed two skill inventory files in the Chrome OS shared folder: one for currently ready skills and one for disabled skills. This artifact turns those lists into a practical map: what the enabled skills already let OpenClaw do, which disabled skills are worth considering next, and which should stay low priority until the work actually calls for them.

## Current Read

The current enabled set is already strong for Workshop maintenance, visual artifacts, GitHub/project work, debugging, browser/canvas presentation, weather, and durable task coordination. The disabled set contains several high-leverage candidates, but enabling everything would be the wrong lesson. The right move is selective activation around real workflows.

The highest-value disabled candidates for Christopher and OpenClaw right now are probably:

1. `summarize` for URLs, YouTube/videos, podcasts, PDFs, transcripts, and local files.
2. `obsidian` for the memory architecture direction.
3. `blogwatcher` for monitoring AI people, labs, feeds, and source material.
4. `session-logs` for continuity retrieval across older/parent conversations.
5. `model-usage` for cost awareness and model-spend discipline.
6. `gog` if direct Google Workspace operations become more central.
7. `clawhub` if skill installation and registry workflows become regular.
8. `mcporter` if MCP/tool inspection becomes a serious operating lane.

## Enabled Skills

### Browser, Canvas, And Visual Thinking

- **browser-automation:** Controls web pages with the OpenClaw browser tool, useful for multi-step browser flows, login checks, tab recovery, and stale reference/timeouts.
- **canvas:** Presents HTML on connected OpenClaw node canvases, navigates/evals/snapshots, and helps debug canvas host URLs.
- **diagram-maker:** Creates SVG/HTML or Excalidraw diagrams for concepts, architecture, flows, and whiteboards.
- **meme-maker:** Searches meme templates, suggests formats, and generates local or hosted image memes.

### GitHub, Code, And Debugging

- **github:** Uses GitHub CLI for issues, PRs, CI/check logs, comments, reviews, releases, repos, and API queries.
- **gh-issues:** Fetches GitHub issues, selects candidates, spawns background fix agents, opens PRs, and can process PR review comments.
- **node-inspect-debugger:** Debugs Node.js with node inspect, `--inspect`, breakpoints, CDP, heap, and CPU profiles.
- **python-debugpy:** Debugs Python with `pdb`, `breakpoint()`, post-mortem inspection, and `debugpy` remote attach.
- **spike:** Runs throwaway prototypes to validate feasibility, compare approaches, and report a verdict.

### OpenClaw Operations

- **skill-creator:** Creates, edits, audits, tidies, validates, or restructures AgentSkills and `SKILL.md` files.
- **taskflow:** Coordinates multi-step detached tasks as durable TaskFlow jobs with owner context, state, waits, and child tasks.
- **taskflow-inbox-triage:** Provides an example TaskFlow pattern for inbox triage, intent routing, waiting on replies, and later summaries.
- **node-connect:** Diagnoses OpenClaw Android, iOS, or macOS node pairing, QR/setup code, routes, auth, and connection failures.
- **healthcheck:** Audits and hardens OpenClaw hosts around SSH, firewall, updates, exposure, backups, disk encryption, gateway security.

### Lightweight Utility

- **weather:** Gets current weather and forecasts via `wttr.in`, useful for rain, temperature, and travel planning.

## What We May Be Underusing

The enabled skills already include capabilities that are easy to forget:

- `canvas` can turn local HTML into a live connected presentation/debug surface, which matters if the Workshop becomes more interactive.
- `diagram-maker` should be used when a concept like the third chair, learning organism, signal loop, or tool architecture needs a diagram instead of another long paragraph.
- `spike` is ideal for testing a workflow before we build it into the Workshop.
- `taskflow` is the right shape for durable multi-step jobs that should survive outside a normal chat turn.
- `healthcheck` and `node-connect` are not daily tools, but they matter when OpenClaw's host or node infrastructure becomes the blocker.

## Enabled Skill Smoke-Test Results

Tested on 2026-05-25 at about 08:33 EDT. These were safe smoke tests, not full destructive workflow tests.

### Fully Usable

- **github:** `gh auth status` succeeded for `augmentedthinker`; `gh repo view augmentedthinker/openclaw-workspace` returned repo metadata.
- **gh-issues:** `gh issue list --repo augmentedthinker/openclaw-workspace --state open --limit 1 --json number,title,url` ran successfully and returned an empty list. The issue-query path works.
- **healthcheck:** `openclaw doctor`, `openclaw gateway status`, and `openclaw security audit` ran successfully. Findings included state-dir permissions, plaintext secret-bearing config fields, loopback gateway posture, and other warnings, but the skill itself is usable.
- **meme-maker:** Local render test succeeded: `meme.mjs render drake ... --out /tmp/openclaw-skill-smoke-meme.svg` produced a non-empty SVG.
- **node-inspect-debugger:** `node --inspect=127.0.0.1:0 -e ...` started an inspector and completed successfully.
- **skill-creator:** Frontmatter smoke validation on selected `SKILL.md` files succeeded. The skill instructions are available and usable.
- **spike:** No external dependency is required beyond normal shell/file workflow. The skill is usable as a process pattern for throwaway prototypes.
- **taskflow:** `openclaw tasks flow list` succeeded and reported 7 historical TaskFlows; `openclaw tasks audit` reported 0 findings.
- **taskflow-inbox-triage:** Pattern instructions are available and can be used with TaskFlow. No separate runtime dependency beyond TaskFlow was found.
- **weather:** `curl` exists and `wttr.in` returned Baltimore weather: `baltimore: +62°F, feels +62°F, rain 0.0in, wind ↙2mph`.

### Conditionally Usable

- **browser-automation:** `openclaw browser doctor` reported the browser control endpoint reachable, plugin enabled, and profile configured, but the browser process was not running. `openclaw browser status` showed `enabled: true`, `running: false`, `transport: cdp`, `detectedBrowser: chromium`. Usable after starting the browser with `openclaw browser start` when needed.
- **canvas:** Canvas plugin is enabled, but no connected nodes were available (`openclaw nodes status` showed 0 known/paired/connected), and the gateway is loopback-only. Usable for local/gateway canvas work, but presenting to phone/tablet nodes requires a connected node and route.
- **node-connect:** Diagnostic commands work. `openclaw qr --json` correctly reported the current blocker: gateway is bound to loopback only. `openclaw devices list` showed paired devices, but `openclaw nodes status` showed no connected nodes. Usable for diagnosis; actual node connection requires route/pairing work.
- **python-debugpy:** Python and `pdb` work. A `python3 -m pdb` smoke test executed successfully. `debugpy` import failed with `ModuleNotFoundError`, so remote/headless debugpy attach is not ready until `debugpy` is installed in the active Python environment.

### Instruction-Only / No Runtime Needed

- **diagram-maker:** Reference files exist: `svg-template.md` and `excalidraw-patterns.md`. The skill is usable as a deterministic artifact-writing workflow; no separate binary dependency was required for the basic path.

## Disabled Skills: Priority Ranking

### Tier 1: Enable Soon If Available

- **summarize:** High value. It directly supports research, YouTube/video review, podcast/article digestion, PDF review, and local-file summarization. This matches Christopher's habit of exploring frontier AI material and would reduce manual context friction.
- **obsidian:** High value. It aligns with the Obsidian Memory Architecture project and could become the bridge between private notes, Workshop artifacts, and long-term thought organization.
- **blogwatcher:** High value. It would make AI-source monitoring more systematic for people/labs such as DeepMind, builders, blogs, and feeds.
- **session-logs:** High value. It could help future OpenClaw recover older/parent session continuity without relying only on curated notes.
- **model-usage:** High value. It supports cost discipline and model-routing decisions, which matters as OpenClaw becomes more tool-heavy.

### Tier 2: Strong Candidates When A Workflow Needs Them

- **gog:** Google Workspace CLI for Gmail, Calendar, Drive, Contacts, Sheets, and Docs. Potentially important, especially if Gmail/Drive operations become central. Enable when we are ready to use it deliberately.
- **clawhub:** Useful for searching, installing, updating, syncing, or publishing agent skills. Good fit if we start actively managing skills rather than just using the current set.
- **mcporter:** Valuable for MCP server/tool inspection and calls. Could help OpenClaw understand and debug its tool layer.
- **oracle:** Second-model review/debug/refactor/design. Useful for serious architecture or code review, but should be used selectively to avoid expensive over-consulting.
- **coding-agent:** Background coding delegation through other coding agents. Powerful, but only worth enabling if we have enough parallel coding work to justify coordination overhead.
- **tmux:** Useful for managing long-running interactive CLI work. Valuable if OpenClaw starts running more persistent terminal sessions.

### Tier 3: Media And Product Creation

- **openai-whisper-api:** Useful for transcribing audio with OpenAI's transcription API.
- **openai-whisper:** Local speech-to-text. Useful if offline transcription matters.
- **video-frames:** Extracts frames or clips with `ffmpeg`. Useful for video analysis, shorts, product demos, or inspecting generated videos.
- **sag:** ElevenLabs text-to-speech with a `say`-style UX. Useful for voiceover experiments and media products.
- **sherpa-onnx-tts:** Local offline text-to-speech. Useful if we want non-cloud TTS experiments.
- **songsee:** Audio spectrogram and feature visualizations. Niche, but could support audio/media analysis.
- **gifgrep:** GIF search/download/still extraction. Nice-to-have for social/media work, not core.
- **nano-pdf:** Natural-language PDF editing. Potentially useful, but not a current Workshop priority.

### Tier 4: External Channels And Work Management

- **xurl:** Authenticated X posting, search, DMs, media upload, and raw v2 API. Useful if X becomes a live signal surface.
- **discord:** Useful only if Discord becomes an active OpenClaw channel.
- **slack:** Useful only if Slack communities or workspaces become active.
- **wacli:** WhatsApp history/send integration. Potentially powerful but permission-sensitive and not needed yet.
- **himalaya:** IMAP/SMTP mail. Could be useful as a lower-level email path, but Gmail workflows already exist.
- **notion:** Valuable only if Christopher wants Notion as a real workspace.
- **trello:** Valuable only if Trello becomes the project board.
- **things-mac, apple-reminders, apple-notes, bear-notes:** Useful on macOS or Apple-centered workflows, but low value for the current Chromebook/Linux setup.
- **imsg:** iMessage/SMS CLI. macOS-dependent and permission-sensitive.

### Tier 5: Environment, Home, And Lifestyle Integrations

- **1password:** Potentially useful for secret hygiene, but requires careful setup and should not be rushed.
- **goplaces:** Google Places queries. Useful for local business research, outreach targeting, or travel/location work.
- **openhue:** Philips Hue control. Only useful if lighting automation becomes relevant.
- **eightctl:** Eight Sleep pod control. Only useful if Christopher uses that hardware.
- **blucli, sonoscli, spotify-player:** Audio playback/device integrations. Nice-to-have, not strategic right now.
- **ordercli:** Food order status/history. Low relevance.
- **voice-call:** Starts voice calls via OpenClaw plugin. Potentially useful someday, but high-friction and permission-sensitive.
- **camsnap:** RTSP/ONVIF camera capture. Useful only if camera/physical-space monitoring becomes a real project.
- **peekaboo:** macOS UI capture/automation. Low value on current Chromebook/Linux unless a Mac node becomes active.

### Tier 6: Low Priority For Now

- **gemini:** Could be useful as a lower-cost or alternate model lane, but the recent Gemini experiment was paused because it was not reliable enough for agentic file workflows. Revisit only with a specific use case.
- **gog, himalaya, xurl, wacli, discord, slack:** All powerful, but they touch external surfaces. Enable only when the workflow and permission boundaries are clear.
- **macOS-only note/task tools:** Low priority until the environment changes.

## Suggested Enablement Order

If we enable more skills, the clean order is:

1. `summarize`
2. `obsidian`
3. `blogwatcher`
4. `session-logs`
5. `model-usage`
6. `clawhub`
7. `mcporter`
8. `gog`
9. `video-frames`
10. `openai-whisper-api`
11. `sag`
12. `oracle`
13. `tmux`
14. `coding-agent`
15. `xurl`

That order favors context ingestion, memory, source monitoring, continuity, cost control, and workflow introspection before new external channels.

## Operating Guidance

- Do not enable skills because they are interesting. Enable them when they support a named workflow.
- Prefer skills that improve the Signal Learning Loop: source intake, synthesis, publication, observation, evaluation, or behavior change.
- Treat external-channel skills as permission-sensitive: email, social, messaging, voice calls, and WhatsApp should have explicit boundaries.
- Treat media skills as product probes: useful when they help produce demos, clips, voiceovers, or inspectable creative output.
- Treat macOS-specific skills as dormant unless Christopher has an active Mac node/workflow.

## Bottom Line

The current enabled skill set is already enough to maintain the Workshop, create artifacts, manage GitHub work, debug code, present HTML, coordinate durable tasks, and run practical prototypes. The biggest missing layer is not more external power. It is better intake and continuity.

The next skills most likely to create downstream leverage are `summarize`, `obsidian`, `blogwatcher`, `session-logs`, and `model-usage`. They strengthen the thinking instrument before adding more outward appendages.
