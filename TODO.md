# VeloraCSS — Project Roadmap & Todo

## Phase 1 — Foundation ✅ DONE
- [x] Design tokens (`--vel-*` CSS custom properties)
- [x] Modern CSS reset
- [x] Layout utilities (display, position, overflow, z-index, etc.)
- [x] Flexbox utilities (direction, wrap, align, justify, gap, order)
- [x] Grid utilities (cols, rows, span, flow)
- [x] Spacing utilities (padding, margin, space-between)
- [x] Sizing utilities (width, height, min/max)
- [x] Typography utilities (font, size, weight, leading, tracking, align, transform)
- [x] Color utilities (text, background, border colors)
- [x] Border utilities (width, style, radius, outline, ring)
- [x] Effects utilities (shadow, opacity, filters, backdrop-blur)
- [x] Transitions & animations (duration, easing, keyframes)
- [x] Interactivity utilities (cursor, pointer-events, select, scroll-snap)
- [x] Button component (all variants, sizes, outline, ghost, link, icon, block)
- [x] Card component (default, flat, elevated, filled, primary, hover)
- [x] Playground — Vite + React + Monaco Editor + live preview
- [x] Playground — Welcome screen
- [x] Next.js demo integration (App Router)
- [x] Build script (PostCSS, autoprefixer, cssnano, auto-sync to nextjs-demo)

---

## Phase 2 — Complete the Framework

### New Components
- [ ] Navbar / Header (responsive, with mobile menu)
- [ ] Badge (colors, sizes, dot variant)
- [ ] Alert / Banner (colors, with icon, dismissible)
- [ ] Modal / Dialog
- [ ] Dropdown / Menu
- [ ] Form — Input (text, email, password, number, search)
- [ ] Form — Textarea
- [ ] Form — Select
- [ ] Form — Checkbox
- [ ] Form — Radio button
- [ ] Form — Toggle / Switch
- [ ] Form — Input group (prefix/suffix)
- [ ] Table (striped, bordered, hover rows)
- [ ] Tabs (underline and pill variants)
- [ ] Accordion / Collapsible
- [ ] Breadcrumb
- [ ] Pagination
- [ ] Avatar (image, initials, group)
- [ ] Tooltip
- [ ] Progress bar
- [ ] Spinner / Loader
- [ ] Toast / Notification
- [ ] Sidebar / Drawer

### Missing Utility Categories
- [ ] Responsive variants — `vel-sm:`, `vel-md:`, `vel-lg:`, `vel-xl:`, `vel-2xl:`
- [ ] Hover state — `vel-hover:bg-primary`, `vel-hover:shadow-lg`
- [ ] Focus state — `vel-focus:ring`, `vel-focus:outline-none`
- [ ] Active state — `vel-active:scale-95`
- [ ] Dark mode — `vel-dark:bg-neutral-900` (via `.dark` class or `prefers-color-scheme`)
- [ ] Group hover — `vel-group`, `vel-group-hover:opacity-100`
- [ ] SVG utilities — fill, stroke, stroke-width
- [ ] Table utilities — border-collapse, border-spacing, table-layout
- [ ] Print utilities — `vel-print:hidden`, `vel-print:block`
- [ ] Gradient utilities — `vel-bg-gradient-to-r`, `vel-from-primary`, `vel-to-info`

### Playground Upgrades
- [ ] Replace logo placeholders with actual imgur images (waiting on direct URLs)
- [ ] Layout toggle (side-by-side / top-bottom / preview-only)
- [ ] Responsive preview toggle (mobile / tablet / desktop frame)
- [ ] Share via URL (encode HTML+CSS in URL params)
- [ ] Format HTML button
- [ ] Example snippets dropdown (buttons, cards, form, navbar, etc.)

---

## Phase 3 — npm Package
- [ ] Restructure as proper npm package (`veloracss`)
- [ ] `index.css` entry point for `import 'veloracss'`
- [ ] `package.json` exports map (full / min / components-only / utilities-only)
- [ ] Publish to npm
- [ ] CDN links via jsDelivr / unpkg
- [ ] Package README with install instructions
- [ ] CHANGELOG.md
- [ ] MIT LICENSE file

---

## Phase 4 — Documentation Site
- [ ] Build docs as Next.js app (`/docs`)
- [ ] Getting started (install, CDN, Next.js, Vite, plain HTML)
- [ ] Core concepts (utility-first, tokens, naming convention)
- [ ] Every utility category documented with class list + live example
- [ ] Every component documented with all variants + HTML example
- [ ] Search (Algolia or local)
- [ ] Dark mode toggle
- [ ] Deploy to veloracss.com

---

## Phase 5 — Public Playground
- [ ] Deploy playground to `play.veloracss.com`
- [ ] Shareable links (base64 / gist)
- [ ] Copy link button

---

## Phase 6 — Customization System
- [ ] `velora.config.js` — override colors, spacing, breakpoints
- [ ] CSS custom property override guide
- [ ] Build-time purging (strip unused classes for production)
- [ ] Themes — light / dark / custom brand

---

## Phase 7 — Developer Experience
- [ ] VS Code extension — autocomplete for `vel-` classes
- [ ] CLI — `npx veloracss init`, `velora build`, `velora watch`
- [ ] JetBrains plugin

---

## Phase 8 — Community & Launch
- [ ] GitHub repository (open source, MIT)
- [ ] README with screenshots + feature list
- [ ] Contributing guide
- [ ] Issue + PR templates
- [ ] Discord / community
- [ ] Product Hunt launch
- [ ] Social media presence (@veloracss)
