# VeloraCSS

VeloraCSS is a utility-first CSS framework being replatformed toward a 1.0 surface that merges Tailwind-style utility coverage with Bootstrap-style component and runtime breadth, while keeping Velora-native naming, tokens, and visual direction.

## Current direction

- Utility-first API with a strict `vel-` public surface.
- Token-led theming through `--vel-*` custom properties with explicit light and dark theme selectors.
- Generated utility families with Tailwind-style chained variants.
- Bootstrap-level component and runtime coverage as the long-term 1.0 target.
- Sharper default geometry: reduced roundness is the Velora standard unless a component explicitly opts into pills.
- Package, docs, and tracker work should stay aligned to the shipped framework surface.

## Requirements

- Node 20+
- npm

## Build the package

```bash
npm install
npm run build
```

The build outputs compiled assets to `dist/`.

It also writes `dist/velora.manifest.json`, which is the machine-readable draft manifest for the current 1.0 replatform surface.

## Run the repo surfaces

Framework package:

```bash
npm run build
npm run release:verify
```

Svelte docs app:

```bash
cd site
npm install
npm run dev
```

For a production check:

```bash
cd site
npm run build
```

Tracker scaffold:

```bash
cd tracker
npm install
npm start
```

For local watch mode and command preview:

```bash
cd tracker
npm run dev
npm run commands:preview
```

The tracker reads raw process environment variables. `tracker/.env.example` is a template, but the scaffold does not load `.env` files by itself.

## Release flow

```bash
npm run release:verify
```

This now runs the build, audits docs references against `dist/velora.manifest.json`, and then performs a dry-run package check.

For the remaining npm publication setup, see `NPM_PUBLISHING.md`.

## Repository layout

- `src/tokens.css`: design tokens
- `src/reset.css`: opinionated reset
- `src/utilities/`: first utility packs
- `src/components/`: first starter components
- `src/velora.js`: delegated plugin runtime for disclosure, dropdown, collapse, modal, tabs, and toast behavior
- `site/`: SvelteKit app for the public home, docs, examples, and proof routes
- `tracker/`: Node 20 ESM tracker service scaffold for GitHub Projects <-> Discord sync work
- `index.html`, `docs/`, `examples/`, `proof.html`: root static surfaces that still live in the repo alongside the Svelte app
- `dist/`: built package output and manifest
- `proof.html`: local proof surface for early validation

## Product integration notes

- `TRACKER_SYNC_SPEC.md`: bidirectional sync contract for GitHub Projects and the Discord tracker app
- `PHASE_9_DISCORD_PLAN.md`: immediate execution backlog for issue #1 Discord integration work
- `tracker/README.md`: local runbook for the tracker service scaffold, HTTP endpoints, and command registry preview
- `API_SURFACE.md`: draft 1.0 public API rules and current surface summary
- `NPM_PUBLISHING.md`: repo-side publish flow and remaining manual npmjs settings checklist

