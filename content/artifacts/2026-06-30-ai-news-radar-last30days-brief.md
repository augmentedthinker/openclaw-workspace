---
title: "AI News Radar: Last 30 Days Skill Implementation Brief"
type: artifact
category: research-brief
created: 2026-06-30 09:21 EDT
theme: AI news monitoring, Last 30 Days skill, FutureTools newsletter pattern, OpenClaw autonomous updates
public_html: ../../artifacts/2026-06-30-ai-news-radar-last30days-brief.html
hero_image: ../../assets/images/2026-06-04-collaborative-trajectory-hero.png
---

# AI News Radar: Last 30 Days Skill Implementation Brief

> The useful version is not a firehose. It is a small radar that notices what changed, explains why it matters, and tells Christopher what is worth doing next.

Christopher wants OpenClaw to move toward autonomous AI-news updates. The right first move is an experiment, not a full automation. This artifact reviews the `last30days` skill, compares it with the FutureTools newsletter pattern, and recommends an OpenClaw-native implementation path.

The goal is simple: build toward a recurring AI-news briefing that is current, practical, source-aware, and tuned to Christopher's actual interests.

## Sources Reviewed

External sources:

- GitHub, `mvanhorn/last30days-skill`, `skills/last30days/SKILL.md`, version `3.8.3`.
- GitHub, `mvanhorn/last30days-skill`, project README.
- FutureTools / Matt Wolfe newsletter issue, "OpenAI makes a chip."

Internal context:

- `README.md`, especially the Workshop direction toward signal loops and restrained operating layers.
- `MEMORY.md`, especially Signal Learning Loop and Learning Means Behavior Change.
- Recent June 28 to June 30 memory around Shorts Workshop, Remotion being validated but paused, and the current preference for simple useful outputs over more infrastructure.

## What The Last 30 Days Skill Actually Is

`last30days` is a research skill and engine for answering: what are people saying about a topic right now?

It is not just a prompt. It is a large `SKILL.md` contract plus a Python engine under `scripts/last30days.py`. The intended command is a user-facing research invocation such as:

```text
/last30days AI video tools
/last30days OpenAI vs Anthropic
/last30days Nano Banana Pro prompting
```

The skill tries to search and synthesize recent discussion across platforms such as Reddit, X, YouTube, TikTok, Instagram, Hacker News, Polymarket, GitHub, Bluesky, Perplexity, and the open web. The README describes the core idea as social relevancy rather than SEO relevancy: Reddit upvotes, X likes, YouTube transcripts, TikTok engagement, Hacker News arguments, Polymarket odds, GitHub activity, and web coverage all become evidence.

That is valuable for AI news because the frontier does not move only through press releases. It moves through model drops, GitHub repos, Hacker News arguments, Reddit complaints, creator demos, YouTube tutorials, X threads, waitlists, pricing changes, and small product updates.

## What Works Without Extra Setup

The README claims some sources work with little or no setup:

- Reddit via public JSON.
- Hacker News.
- Polymarket.
- GitHub public data, especially better if `gh` is installed and authenticated.
- General web search through the host agent's search tool or configured web backends.

For OpenClaw, that means we can already approximate part of the workflow with existing tools:

- fetch known newsletters, blogs, GitHub repositories, release notes, and documentation pages;
- search the web when a current topic needs confirmation;
- inspect GitHub repos and commits where available;
- summarize the findings into a public-safe or private brief;
- send Christopher a Telegram update when the brief is ready;
- optionally save the briefing as a Workshop artifact, note, or private memory entry.

That first version would not equal full `last30days`. It would miss or under-cover X, TikTok, Instagram, YouTube comments, and some deep social signal. But it can still produce useful AI-news updates with low friction.

## What Requires Setup Or Keys

The full `last30days` value comes from optional sources and helper tools.

Likely setup items:

- Install the skill itself through `clawhub install last30days-official`, `npx skills add mvanhorn/last30days-skill -g`, or a Codex/OpenClaw-compatible path.
- Run the skill preflight or diagnose command from its installed skill directory.
- Install or enable `yt-dlp` for YouTube search and transcripts.
- Ensure `gh` is installed and authenticated for stronger GitHub issue, PR, repo, and release coverage.
- Optionally install the Digg CLI mentioned by the project for AI story clusters.

Optional credentials mentioned by the skill:

- `SCRAPECREATORS_API_KEY` for TikTok, Instagram, Threads, YouTube comments, YouTube transcript fallback, and backup Reddit access.
- `XAI_API_KEY`, `XQUIK_API_KEY`, or X cookies for X/Twitter coverage.
- `PERPLEXITY_API_KEY` or `OPENROUTER_API_KEY` for grounded Perplexity synthesis.
- `BRAVE_API_KEY` or similar web-search backend for stronger web search.
- `BSKY_HANDLE` and `BSKY_APP_PASSWORD` for Bluesky.

This matters because the social layer is where many AI stories break first. But it also means the full install is not "free capability" in the practical sense. It introduces keys, possible paid APIs, setup state, and source-specific fragility.

## What We Should Borrow

We should borrow the research philosophy, not the whole behavior contract.

The useful ideas:

- Look at what people are actually saying, not just what companies announce.
- Prefer recent activity and engagement signals.
- Search across source types instead of trusting one platform.
- Resolve entities before searching, such as company names, product names, GitHub repos, founders, and communities.
- Distinguish news, recommendations, comparisons, prompting advice, and general research.
- Save raw research somewhere durable so a future run can audit what happened.
- Turn research into a short synthesis with concrete next actions.

The parts we should not copy blindly:

- The highly specific `last30days` output law system. It exists to keep that skill's engine output consistent, but OpenClaw's AI-news briefing should use the Workshop voice and Christopher's needs.
- Any automatic signup, browser authorization, paid-source activation, or cookie flow without explicit approval.
- Any assumption that third-party skill instructions override OpenClaw's own red lines.
- Any broad installation before we decide the value is worth the added moving parts.

## The FutureTools Pattern

The FutureTools newsletter is a useful shape reference. It is not just a list of links.

The issue reviewed used this structure:

- a quick opening observation about a visible AI or tech trend;
- a section on AI skills worth installing, with short descriptions and a practical point of view;
- one major headline story, framed with why it matters;
- product/tool updates with "how you can use it" and pricing;
- a jobs, announcements, and big-ideas roundup;
- clear links back to original sources.

For OpenClaw, the strongest elements are:

- "Why it matters" for every major item.
- "How Christopher can use this" instead of generic tool hype.
- A separation between major strategic news and useful small tools.
- Enough personality to be readable, but not so much that it becomes entertainment instead of leverage.

The weaker element for our use is newsletter sprawl. FutureTools covers a broad audience. OpenClaw should be narrower: AI agents, model releases, coding tools, media generation, local automation, healthcare-adjacent AI when relevant, and business opportunities Christopher can realistically act on.

## Recommended OpenClaw Implementation

The best path is three phases.

### Phase 1: Lightweight AI News Radar

Do this first, without installing `last30days`.

Create a recurring manual or scheduled OpenClaw routine that gathers from a small stable source set:

- OpenAI, Anthropic, Google DeepMind, Meta AI, xAI, Perplexity, Runway, ElevenLabs, Figma, Vercel, GitHub, Hugging Face, and key AI-builder newsletters.
- FutureTools as one style and source input, not the only authority.
- GitHub trending or selected repositories for agent skills, Codex/OpenClaw tooling, media generation, and automation.
- Hacker News or Reddit via web search when a story needs community reaction.

Output format:

1. **Top 3 AI Moves**: the most important things that changed.
2. **Why It Matters**: one plain-English explanation per item.
3. **Useful Tools**: tools worth trying, ignoring, or watching.
4. **Christopher Angle**: what this could mean for income, workflow, OpenClaw, Shorts, healthcare, or local automation.
5. **Watchlist**: what to check next time.
6. **Confidence**: high, medium, or low based on source quality.

This phase can be delivered through Telegram and saved privately. Strong ones can be promoted to Workshop artifacts.

### Phase 2: OpenClaw AI-News Skill

If Phase 1 proves useful, create a local OpenClaw skill such as `ai-news-radar`.

That skill should encode:

- source list and priority;
- what counts as relevant to Christopher;
- how to separate hype from practical leverage;
- how to summarize each item;
- when to create a public artifact versus a private message;
- what never to do automatically, such as posting, subscribing, paying, or authorizing accounts.

This is the likely long-term home for the workflow because it would preserve OpenClaw's own taste and boundaries.

### Phase 3: Optional Last 30 Days Integration

Only after the lightweight radar proves useful, test `last30days`.

Recommended first test topics:

- `AI coding agent skills`
- `Codex vs Claude Code`
- `AI video tools`
- `OpenAI agents`
- `AI workflow automation for solopreneurs`

Run it first in a limited mode with free/default sources. Then decide whether the missing sources justify setup keys.

If it works well, use it as a research subroutine inside the broader OpenClaw AI-news radar:

- use `last30days` when we need social sentiment or community reaction;
- use direct web/news/source fetch when we need factual release details;
- use GitHub inspection when we need repo reality;
- use OpenClaw synthesis to produce the actual briefing.

## Capability Map

What OpenClaw can do now:

- Fetch and summarize web pages and newsletters.
- Search or inspect public web/GitHub sources when tools are available.
- Create Workshop artifacts and link them into the site.
- Send Telegram updates.
- Create scheduled routines after Christopher explicitly approves the cadence and boundaries.
- Preserve lessons in memory or public Workshop pages.

What OpenClaw can do with light setup:

- Use `yt-dlp` for YouTube transcripts.
- Use `gh` for richer GitHub research if authentication is available.
- Install and test the `last30days` skill in a controlled way.
- Create a local `ai-news-radar` skill proposal so the behavior becomes repeatable.

What requires more deliberate approval:

- Adding third-party API keys.
- Using cookies or authenticated social sessions.
- Signing up for ScrapeCreators or any external service.
- Paying for Perplexity, Brave, X, ScrapeCreators, or similar APIs.
- Running autonomous scheduled messages without a defined cadence and stop condition.

## Proposed First Experiment

The first real experiment should be modest:

- Cadence: once daily or three times weekly.
- Delivery: Telegram message to Christopher only.
- Scope: AI agents, coding tools, model releases, media generation, automation opportunities, and tools that might help OpenClaw or Christopher.
- Source budget: 5 to 8 sources per run.
- Output length: short enough to read on a phone.
- Memory behavior: save only useful lessons, not every raw link.
- Public behavior: create a Workshop artifact only when the briefing is unusually valuable.

The first prompt could be:

```text
Create today's AI News Radar for Christopher.
Focus on AI agents, Codex/OpenClaw-adjacent tools, model releases, media generation, automation opportunities, and anything that could affect a solo builder trying to create leverage.
Use current web sources and recent known newsletters.
Return Top 3 Moves, Why It Matters, Useful Tools, Christopher Angle, Watchlist, and Confidence.
Do not post publicly. Send only to Christopher.
```

That is enough to learn whether the format is useful before adding more machinery.

## Recommendation

Do not install the whole `last30days` stack as the first step.

Start with an OpenClaw-native AI News Radar using existing fetch/search/messaging ability. Borrow the `last30days` worldview: recent social signal, engagement, source diversity, and entity-aware research. Borrow the FutureTools newsletter shape: readable trend framing, useful tools, why it matters, and practical use cases.

Then, after two or three manual briefings, decide whether `last30days` fills a real gap. If the missing gap is "we need more Reddit, X, YouTube, TikTok, and GitHub sentiment," install and test it. If the gap is just "we need a better recurring briefing," build the local `ai-news-radar` skill instead.

The guiding rule should be the Workshop's existing rule: learning means behavior change. The AI-news routine is only worth building if it changes what Christopher tries, avoids, builds, buys, publishes, or pays attention to.
