# Phase 9 Discord Integration Plan

This file turns issue #1 into concrete execution work for the Discord server integration phase.

## Goal

Ship the first practical layer of the Discord tracker app so it can reflect GitHub Projects state and intentionally write changes back through a loop-safe broker.

## Source of truth

- GitHub issue: `#1 Phase 9: Configure Discord Server integration`
- Contract: `TRACKER_SYNC_SPEC.md`
- Authority model: GitHub Projects remains canonical, Discord is the operational surface, the tracker app is the sync broker.

## Immediate deliverables

- Define the tracker app package boundary inside this repo.
- Lock the canonical field mapping needed for MVP sync.
- Stand up GitHub webhook ingestion with signature verification.
- Stand up Discord interaction surfaces for structured writes.
- Record loop-prevention metadata and outbound audit logs.

## MVP implementation backlog

- Create the tracker service scaffold using the repo's Node 20 ESM baseline.
- Define sync mapping storage for project item ID, Discord surface IDs, snapshot hash, origin, and event IDs.
- Implement GitHub webhook intake and payload normalization.
- Implement outbound GitHub Project mutations for status, priority, and notes.
- Implement Discord slash commands and controls for create, status change, priority change, and note update.
- Add loop-prevention checks for Discord-originated writes that return through GitHub webhooks.
- Add structured audit logs and a retry path for failed sync operations.

## First coding slice

1. Create a dedicated tracker app workspace in this repo.
2. Add environment parsing for GitHub and Discord credentials.
3. Add a minimal HTTP server with health and webhook endpoints.
4. Add a Discord command registry stub for tracked-item actions.
5. Add mapping and audit interfaces even if persistence starts in memory.

## Out of scope for the first slice

- Freeform Discord chat mutating project state.
- Multi-board aggregation.
- AI-generated task state.
- Full admin UI before the sync path works.

## Definition of done for Phase 9 kickoff

- The repo no longer treats Discord integration as future-only planning.
- The current tracker work is visible in `CURRENT.md` and `TODO.md`.
- The next implementation slice is executable without reopening the spec from scratch.