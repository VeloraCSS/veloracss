# Velora Tracker

This app is the first executable slice of Phase 9.

It provides a small Node 20 ESM service that:

- reads GitHub and Discord credentials from the environment
- exposes a health endpoint for local checks
- accepts GitHub webhook payloads with optional signature verification
- accepts Discord interactions with Ed25519 signature verification
- normalizes incoming project-item state into the canonical tracker shape
- stores mapping and audit state in memory for the first scaffold pass
- exposes Discord command definitions for the tracked-item workflow

## Requirements

- Node 20+
- environment variables provided to the process at runtime

## Configuration

`tracker/.env.example` is the current template for local configuration:

- `PORT`
- `GITHUB_WEBHOOK_SECRET`
- `GITHUB_TOKEN`
- `GITHUB_ORG`
- `GITHUB_PROJECT_NUMBER`
- `DISCORD_PUBLIC_KEY`
- `DISCORD_APPLICATION_ID`
- `DISCORD_BOT_TOKEN`
- `DISCORD_GUILD_ID`

The scaffold reads raw process environment variables only. Copying `.env.example` to `.env` is not enough unless your shell or process manager loads that file first.

## Run locally

```bash
cd tracker
npm start
```

For auto-reload during local work:

```bash
cd tracker
npm run dev
```

To inspect the current Discord command payloads without starting the server:

```bash
cd tracker
npm run commands:preview
```

Current command names:

- `tracked-item-create`
- `tracked-item-status`
- `tracked-item-priority`
- `tracked-item-note`

## HTTP endpoints

- `GET /health`: service status, config presence, command names, and in-memory counts
- `GET /discord/commands`: preview the Discord command registry JSON
- `POST /discord/interactions`: verify Discord signatures and return scaffold command responses
- `GET /mappings`: inspect the current in-memory mapping records
- `GET /audit`: inspect recent in-memory audit entries
- `POST /github/webhook`: accept GitHub webhook payloads and update mapping state

## Current limitations

- mapping and audit state resets on process restart
- outbound GitHub Project mutations are not implemented yet
- Discord command registration against the live Discord API is not implemented yet
- webhook normalization is intentionally broad until live payload samples are wired in
