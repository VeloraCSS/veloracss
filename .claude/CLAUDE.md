# VeloraCSS — Project Instructions

## What this project is
VeloraCSS is a fully original utility-first CSS framework (think Tailwind scale, Bootstrap/Bulma component richness). Every class, variable, config key, and CLI command is branded `vel` / `velora`. Zero footprints from Tailwind, Bootstrap, or Bulma in the output — they are research only.

## Project structure
```
src/                  ← framework CSS source
  tokens.css          ← CSS custom properties (--vel-*)
  reset.css           ← modern CSS reset
  utilities/          ← all utility classes (vel- prefix)
  components/         ← component classes (vel-btn, vel-card, etc.)
  velora.css          ← @import entry point
dist/                 ← built output (git-ignored)
  velora.css
  velora.min.css
playground/           ← live demo app (Vite + React + Monaco)
  src/
    App.tsx
    components/
      Editor.tsx
      Preview.tsx
index.html            ← Vite entry
vite.config.ts
build.mjs             ← framework build script (PostCSS)
package.json
```

## Tech stack
- Framework source: Plain CSS + PostCSS
- Build: PostCSS (postcss-import, autoprefixer, cssnano)
- Playground: Vite + React + TypeScript + Monaco Editor
- Package manager: npm

## Naming rules (non-negotiable)
- All utility classes: `vel-{property}-{value}` (e.g. `vel-flex`, `vel-p-4`, `vel-text-lg`)
- All component classes: `vel-{component}` (e.g. `vel-btn`, `vel-card`)
- All CSS custom properties: `--vel-{token}` (e.g. `--vel-color-primary`)
- Config file: `velora.config.js`
- NO class names, variable names, comments, or file names referencing Tailwind, Bootstrap, or Bulma

## Agents available
- **architect** — design decisions, phase planning, structure
- **builder** — implementation, CSS authoring, playground code
- **qa** — testing, edge cases, visual regression

## Rules
- Read files before editing.
- Keep changes scoped to what was asked.
- Never commit unless explicitly asked.
- Run `npm run build` after any CSS source change to regenerate dist/velora.css.
