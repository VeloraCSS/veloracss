# VeloraCSS — Current Session State

> Read this file at the start of every session to get up to speed instantly.
> Then check TODO.md for the full roadmap.

---

## What VeloraCSS is
A fully original utility-first CSS framework — like Tailwind in scale, like Bootstrap/Bulma in component richness. Zero footprints from any other framework. Every class, variable, and config key uses the `vel` / `velora` brand.

- All utility classes: `vel-{property}-{value}` (e.g. `vel-flex`, `vel-p-4`, `vel-text-lg`)
- All component classes: `vel-{component}` (e.g. `vel-btn`, `vel-btn-primary`, `vel-card`)
- All CSS custom properties: `--vel-{token}` (e.g. `--vel-color-primary`, `--vel-space-4`)

---

## What was built (Phase 1 — COMPLETE)

### Framework (`src/` → `dist/velora.css` at ~75KB)
- `src/tokens.css` — full `--vel-*` design token system (colors, spacing, type, radius, shadows, transitions)
- `src/reset.css` — modern CSS reset
- `src/utilities/layout.css` — display, position, overflow, z-index, container, aspect-ratio
- `src/utilities/flexbox.css` — direction, wrap, flex, grow, shrink, align, justify, gap, order
- `src/utilities/grid.css` — template cols/rows, span, flow, auto-cols/rows
- `src/utilities/spacing.css` — padding, margin, space-between (full scale)
- `src/utilities/sizing.css` — width, height, min/max (full scale + fractions)
- `src/utilities/typography.css` — font family/size/weight/style, line-height, tracking, align, transform, overflow, whitespace
- `src/utilities/colors.css` — text/bg/border colors (all semantic + neutral palette + bg position/size/repeat)
- `src/utilities/borders.css` — border width/style/radius, outline, ring
- `src/utilities/effects.css` — shadow, opacity, filters, backdrop-blur
- `src/utilities/transitions.css` — transitions, transforms (scale/rotate/translate), keyframe animations
- `src/utilities/interactivity.css` — cursor, pointer-events, select, resize, scroll-snap, touch-action, focus-ring
- `src/components/button.css` — vel-btn (all color variants, outline variants, ghost, link, xs/sm/lg/xl sizes, block, icon)
- `src/components/card.css` — vel-card (default, flat, elevated, filled, primary, hover)

### Playground (`npm run playground` → http://localhost:5173)
- Vite + React + TypeScript
- Monaco Editor (VS Code editor in browser)
- **Welcome screen** — shows on launch with logo (placeholder), tagline, feature pills, quick example, Start Building button
- **Editor screen** — HTML tab + CSS tab, live iframe preview, Copy HTML button
- Logo placeholders ready — waiting on direct imgur URLs from user

### Next.js Demo (`npm run demo` → http://localhost:3000)
- Next.js 16 App Router
- VeloraCSS imported in `layout.tsx` via `styles/velora.css`
- Demo page shows: buttons, cards (all variants), color palette, typography, grid
- `build.mjs` auto-syncs `dist/velora.css` → `nextjs-demo/styles/velora.css` on every build

### Agents (`.claude/agents/`)
- `architect.md` — knows VeloraCSS naming rules, structure, research sources
- `builder.md` — knows vel- prefix rules, file structure, playground sync requirements
- `qa.md` — knows naming audit checklist, CSS correctness checks, playground validation

---

## npm Scripts
```bash
npm run build        # build velora.css → dist/ + sync to nextjs-demo/styles/
npm run playground   # build + start Vite playground (http://localhost:5173)
npm run demo         # build + start Next.js demo (http://localhost:3000)
```

---

## What's next (Phase 2)

### Priority 1 — Responsive & state variants (blocking real-world use)
Without these, users can't do `hover:` effects or responsive layouts.
- Responsive prefixes: `vel-sm:flex`, `vel-md:grid-cols-3`, `vel-lg:hidden`
- Hover: `vel-hover:bg-primary`, `vel-hover:shadow-lg`
- Focus: `vel-focus:ring`, `vel-focus:outline-none`
- Active: `vel-active:scale-95`
- Dark mode: `vel-dark:bg-neutral-900`

### Priority 2 — More components
Navbar, Badge, Alert, Modal, Form inputs (text/textarea/select/checkbox/radio/toggle), Table, Tabs, Accordion, Breadcrumb, Pagination, Avatar, Tooltip, Progress, Spinner, Toast

### Priority 3 — Playground improvements
- Replace logo placeholders with actual imgur URLs (user needs to share direct links)
- Layout toggle (side-by-side / stacked / preview-only)
- Responsive preview frames (mobile/tablet/desktop)
- Share via URL

---

## Pending from user
- Nothing currently pending.

---

## Key files
```
src/velora.css          ← @import entry point
src/tokens.css          ← all design tokens
dist/velora.css         ← built output (run npm run build to regenerate)
playground/src/App.tsx  ← playground UI (logo placeholders here)
nextjs-demo/app/page.tsx ← Next.js demo page
TODO.md                 ← full 8-phase product roadmap
CURRENT.md              ← this file
.claude/CLAUDE.md       ← project rules for Claude
.claude/agents/         ← architect, builder, qa agent definitions
```
