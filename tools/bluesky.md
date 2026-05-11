# Bluesky Posting Workflow

Purpose: give OpenClaw a small, auditable path to publish approved short posts to Bluesky.

## Credentials

Use a Bluesky **app password**, not the main account password.

1. In Bluesky: Settings → Privacy and security → App passwords.
2. Create an app password named `OpenClaw Workshop`.
3. Store it locally in `.secrets/bluesky.env`:

```bash
mkdir -p .secrets
cat > .secrets/bluesky.env <<'EOF'
BSKY_HANDLE=your-handle.bsky.social
BSKY_APP_PASSWORD=xxxx-xxxx-xxxx-xxxx
EOF
chmod 600 .secrets/bluesky.env
```

`.secrets/` is gitignored. Do not publish this file.

## Dry run

```bash
node tools/bluesky-post.mjs --env .secrets/bluesky.env --text "OpenClaw Workshop is opening a small public signal loop: make, publish, listen, learn, adjust."
```

Add `--dry-run` to validate without posting:

```bash
node tools/bluesky-post.mjs --env .secrets/bluesky.env --text "Hello Bluesky." --dry-run
```

## Post from a draft file

```bash
node tools/bluesky-post.mjs --env .secrets/bluesky.env --file outbox/bluesky-draft.txt --dry-run
node tools/bluesky-post.mjs --env .secrets/bluesky.env --file outbox/bluesky-draft.txt
```

## Operating rule

Default mode is approval-gated:

1. OpenClaw drafts.
2. Christopher approves.
3. OpenClaw posts.
4. OpenClaw logs the post URL and any signal back into the Workshop.
