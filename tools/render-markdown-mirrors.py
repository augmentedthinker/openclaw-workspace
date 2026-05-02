#!/usr/bin/env python3
"""Render selected workspace markdown files into Workshop mirror pages.

Run after editing any mirrored markdown file so the public Workshop view stays
in sync with the source markdown.
"""

from __future__ import annotations

from dataclasses import dataclass
from datetime import datetime
from html import escape
from pathlib import Path
import re

ROOT = Path(__file__).resolve().parents[1]
OUT_DIR = ROOT / "markdowns"
CSS_VERSION = "20260502-3"
GENERATED_AT = datetime.now().strftime("%Y-%m-%d %H:%M %Z")


@dataclass(frozen=True)
class Mirror:
    source: str
    slug: str
    label: str
    summary: str


MIRRORS = [
    Mirror("CONTINUITY.md", "continuity", "CONTINUITY.md", "Optional deep continuity dive draft: a bounded add-on process for loading richer Workshop context only when Christopher asks."),
    Mirror("AGENTS.md", "agents", "AGENTS.md", "Workspace operating instructions: startup behavior, memory practice, red lines, tools, group chat norms, and heartbeat guidance."),
    Mirror("SOUL.md", "soul", "SOUL.md", "OpenClaw's persona and philosophical direction: warm usefulness, Alan Watts playfulness, Marcus Aurelius restraint, and wise boundaries."),
    Mirror("IDENTITY.md", "identity", "IDENTITY.md", "Basic identity metadata for OpenClaw: name, creature, vibe, emoji, and self-description."),
    Mirror("USER.md", "user", "USER.md", "Lightweight notes about Christopher: name, timezone, and relationship context."),
    Mirror("TOOLS.md", "tools", "TOOLS.md", "Local setup notes for environment-specific tools, devices, voices, hosts, and reminders."),
    Mirror("README.md", "readme", "README.md", "The public project frame for the OpenClaw Workshop repository."),
    Mirror("COLLABORATION.md", "collaboration", "COLLABORATION.md", "The working agreement between Christopher and OpenClaw: roles, expectations, initiative, and boundaries."),
]


def inline_markup(text: str) -> str:
    text = escape(text)
    text = re.sub(r"`([^`]+)`", r"<code>\1</code>", text)
    text = re.sub(r"\*\*([^*]+)\*\*", r"<strong>\1</strong>", text)
    text = re.sub(r"_([^_]+)_", r"<em>\1</em>", text)
    return text


def render_markdown(md: str) -> str:
    html: list[str] = []
    paragraph: list[str] = []
    in_ul = False
    in_code = False
    code_lines: list[str] = []
    in_blockquote = False
    quote_lines: list[str] = []

    def flush_paragraph() -> None:
        nonlocal paragraph
        if paragraph:
            html.append(f"<p>{inline_markup(' '.join(paragraph))}</p>")
            paragraph = []

    def flush_ul() -> None:
        nonlocal in_ul
        if in_ul:
            html.append("</ul>")
            in_ul = False

    def flush_quote() -> None:
        nonlocal in_blockquote, quote_lines
        if in_blockquote:
            html.append(f"<blockquote>{inline_markup(' '.join(quote_lines))}</blockquote>")
            quote_lines = []
            in_blockquote = False

    for raw in md.splitlines():
        line = raw.rstrip()

        if line.startswith("```"):
            flush_paragraph(); flush_ul(); flush_quote()
            if in_code:
                html.append("<pre><code>" + escape("\n".join(code_lines)) + "</code></pre>")
                code_lines = []
                in_code = False
            else:
                in_code = True
            continue

        if in_code:
            code_lines.append(raw)
            continue

        if not line.strip():
            flush_paragraph(); flush_ul(); flush_quote()
            continue

        if line.startswith("> "):
            flush_paragraph(); flush_ul()
            in_blockquote = True
            quote_lines.append(line[2:].strip())
            continue
        else:
            flush_quote()

        heading = re.match(r"^(#{1,6})\s+(.+)$", line)
        if heading:
            flush_paragraph(); flush_ul()
            level = min(len(heading.group(1)) + 1, 6)
            html.append(f"<h{level}>{inline_markup(heading.group(2))}</h{level}>")
            continue

        if line.startswith("- "):
            flush_paragraph()
            if not in_ul:
                html.append("<ul>")
                in_ul = True
            html.append(f"<li>{inline_markup(line[2:].strip())}</li>")
            continue

        paragraph.append(line.strip())

    flush_paragraph(); flush_ul(); flush_quote()
    if in_code:
        html.append("<pre><code>" + escape("\n".join(code_lines)) + "</code></pre>")
    return "\n".join(html)


def nav(prefix: str = "") -> str:
    return f"""      <nav class=\"workshop-nav\" aria-label=\"Workshop navigation\">
        <a class=\"workshop-brand\" href=\"{prefix}./\"><span aria-hidden=\"true\">🦞</span><span>OpenClaw Workshop</span></a>
        <div class=\"workshop-links\">
          <a class=\"workshop-link\" href=\"{prefix}./\">Home</a>
          <a class=\"workshop-link\" href=\"{prefix}artifacts.html\">Artifacts</a>
          <a class=\"workshop-link\" href=\"{prefix}notes.html\">Notes</a>
          <a class=\"workshop-link\" href=\"{prefix}markdowns.html\" aria-current=\"page\">Markdowns</a>
        </div>
      </nav>"""


def render_index() -> str:
    buttons = []
    for mirror in MIRRORS:
        source_path = ROOT / mirror.source
        if not source_path.exists():
            continue
        mtime = datetime.fromtimestamp(source_path.stat().st_mtime).strftime("%Y-%m-%d<br />%H:%M")
        buttons.append(f"""          <a class=\"artifact-button\" href=\"markdowns/{mirror.slug}.html\">
            <span class=\"artifact-date\">Mirror<br />{mtime}</span>
            <span class=\"artifact-summary\">
              <strong>{escape(mirror.label)}</strong>
              <span>{escape(mirror.summary)}</span>
            </span>
          </a>""")

    return f"""<!doctype html>
<html lang=\"en\">
  <head>
    <meta charset=\"utf-8\" />
    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\" />
    <title>Markdowns · OpenClaw Workshop</title>
    <link rel=\"stylesheet\" href=\"workshop.css?v={CSS_VERSION}\" />
  </head>
  <body>
    <div class=\"workshop-wrap wide\">
{nav()}

      <main>
        <section class=\"cinematic-hero\" aria-labelledby=\"markdowns-title\">
          <img src=\"assets/images/markdowns-hero.png\" alt=\"A luminous archive room of mirrored markdown documents, terminal panes, and nested folders.\" />
          <div class=\"cinematic-overlay\">
            <span class=\"model-signature\">OpenAI gpt-image-2 · 2026-05-02 · 05:10 EDT</span>
            <h1 id=\"markdowns-title\">Markdowns</h1>
            <p>Readable mirrors of important local markdown files: operating notes, continuity drafts, collaboration records, and the documents that help OpenClaw boot with context.</p>
          </div>
        </section>

        <section class=\"mirror-note\" aria-label=\"Mirror maintenance note\">
          <strong>Mirror sync rule:</strong> when a mirrored markdown file changes, rerun <code>python3 tools/render-markdown-mirrors.py</code> and commit both the source markdown and its rendered Workshop mirror so GitHub never shows a stale version.
        </section>

        <section class=\"artifact-list\" aria-label=\"Markdown mirrors\">
{chr(10).join(buttons)}
        </section>
      </main>
    </div>
  </body>
</html>
"""


def render_mirror(mirror: Mirror) -> str:
    source_path = ROOT / mirror.source
    md = source_path.read_text()
    body = render_markdown(md)
    updated = datetime.fromtimestamp(source_path.stat().st_mtime).strftime("%Y-%m-%d %H:%M")
    return f"""<!doctype html>
<html lang=\"en\">
  <head>
    <meta charset=\"utf-8\" />
    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\" />
    <title>{escape(mirror.label)} · OpenClaw Workshop</title>
    <link rel=\"stylesheet\" href=\"../workshop.css?v={CSS_VERSION}\" />
  </head>
  <body>
    <div class=\"workshop-wrap wide\">
{nav("../")}

      <main class=\"article-shell\">
        <article class=\"article-card\">
          <div class=\"eyebrow\">Markdown Mirror</div>
          <h1>{escape(mirror.label)}</h1>
          <div class=\"article-meta\">
            <span>Source updated {updated}</span>
            <span>Mirror generated {GENERATED_AT}</span>
            <span><a href=\"../{escape(mirror.source)}\">View raw markdown</a></span>
          </div>

          <div class=\"prose\">
{body}
          </div>
        </article>
      </main>
    </div>
  </body>
</html>
"""


def main() -> None:
    OUT_DIR.mkdir(exist_ok=True)
    (ROOT / "markdowns.html").write_text(render_index())
    for mirror in MIRRORS:
        if (ROOT / mirror.source).exists():
            (OUT_DIR / f"{mirror.slug}.html").write_text(render_mirror(mirror))


if __name__ == "__main__":
    main()
