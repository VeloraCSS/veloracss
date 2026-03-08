# VeloraCSS Architect Report
**Date:** 2026-03-07
**Scope:** Full framework audit — current state, gaps, bugs, and build plan
**Web access was unavailable** — Tailwind and Bulma coverage drawn from training knowledge (docs as of mid-2025).

---

## 1. What VeloraCSS Currently Has

### Utilities (src/utilities/)

| File | Status | Coverage |
|---|---|---|
| layout.css | Solid | display, position, inset, overflow, overscroll, visibility, z-index, float, clear, isolation, object-fit, object-position, box-sizing, aspect-ratio, columns, break, container, sr-only |
| flexbox.css | Solid | direction, wrap, flex shorthand, grow, shrink, basis, align-items, align-self, justify-content, justify-items, justify-self, align-content, place-*, order, gap/gap-x/gap-y |
| grid.css | Solid | template-cols (1-12), col-span (1-12/full), col-start/end, template-rows (1-6), row-span, row-start/end, grid-flow, auto-cols, auto-rows |
| spacing.css | Solid | p/px/py/pt/pr/pb/pl (0-32), m/mx/my/mt/mr/mb/ml (0-16), space-x/space-y |
| sizing.css | Solid | w (full scale + fractions), min-w, max-w (xs through 7xl + screen), h (full scale), min-h, max-h (with svh/dvh) |
| typography.css | Solid | font-family, font-size (xs-9xl), font-weight, font-style, leading, tracking, text-align, text-decoration, text-transform, truncate, white-space, word-break, vertical-align, antialiased, list-style, text-indent, hyphens, content |
| colors.css | Good | text/bg/border for semantic colors + neutral ramp; bg-surface-*; brand ramps (primary full, others partial) |
| borders.css | Good | border-width (all sides, x, y), border-style, border-radius (all + t/b/l/r variants), outline, ring |
| effects.css | Good | box-shadow, opacity (full scale), mix-blend-mode, blur/brightness/grayscale/invert/sepia filters, glow, ring, backdrop-blur |
| gradients.css | Good | named preset gradients, directional gradient helpers (from/to), text gradients |
| animations.css | Good | 14 keyframes, animate-* classes, duration/delay modifiers, shimmer, transform utilities (scale, rotate, translate-y) |
| transitions.css | Good | transition-property variants, duration, timing, delay; scale/rotate/translate full set, transform-origin |
| interactivity.css | Good | cursor, pointer-events, user-select, resize, scroll-behavior, scroll-snap, touch-action, will-change, appearance, color-scheme, caret, focus-ring helper, disabled helper |

**Duplicate keyframes:** `vel-spin`, `vel-ping`, `vel-pulse`, `vel-bounce`, `vel-fade-in` are defined in both `animations.css` and `transitions.css`. These will be emitted twice in the build output.

### Components (src/components/)

| Component | Status | Notable |
|---|---|---|
| button.css | Good | primary/secondary/success/danger/warning/info, outline variants (all 6), ghost, link, glow-primary, sizes (xs/sm/lg/xl), block, icon, loading; **BUG — see Section 3** |
| card.css | Good | base, flat, elevated, filled, glass, gradient-border, brand variants (5), glow variants (3), hover |
| badge.css | Good | semantic (6) + neutral, solid variants, dot indicator, sm/lg sizes, square variant |
| alert.css | Good | semantic (5) + neutral, filled variants (4), dismiss button, icon slot, title |
| input.css | Good | input, textarea, select, checkbox, radio, label, form-group, form-hint, form-error, input-group, input-group-addon, switch |
| navbar.css | Good | base, glass, sticky, fixed, brand, nav, link (with active), end slot, divider |
| progress.css | Good | base, bar, color variants (5), sizes (xs-xl), striped, striped-animated, indeterminate, glow |
| spinner.css | Good | base, color variants (7), sizes (xs-xl), dots variant, glow variant |
| table.css | Good | wrapper, thead, tbody, th/td, striped, hover, bordered, sm, sortable, row accent variants |
| tabs.css | Good | underline (default), pill, boxed, tab-panel with animation, vertical |
| avatar.css | Good | base, sizes (xs-2xl), shape, color variants (9), ring variants (4), status indicators (4), group |
| tooltip.css | Good | data-tooltip CSS-only, placement variants (top/bottom/left/right), color variants, vel-tooltip class variant |

### Build System (build.mjs)
- PostCSS pipeline: import resolution → autoprefixer → variant generation → cssnano
- Responsive variants: sm/md/lg/xl/2xl breakpoints generated for ~35 utility patterns
- State variants: hover, focus, active, dark mode generated
- Syncs to nextjs-demo/styles/

---

## 2. Critical Gaps

### CRITICAL — Missing Entirely

**Utility categories Tailwind covers that Velora has zero of:**

| Category | Classes needed | Impact |
|---|---|---|
| **Divide utilities** | `vel-divide-x`, `vel-divide-y`, `vel-divide-{color}`, `vel-divide-{width}` | High — common in lists and nav |
| **Ring width utilities** | `vel-ring-0`, `vel-ring-1`, `vel-ring-2`, `vel-ring-4`, `vel-ring-8`, `vel-ring-offset-{n}` | High — focus management |
| **Text color opacity** | `vel-text-primary/50`, composable opacity modifier system | High |
| **Placeholder color** | `vel-placeholder-{color}` | Medium |
| **Caret color (full set)** | `vel-caret-{color}` ramp | Low |
| **Accent color** | `vel-accent-{color}` | Medium |
| **SVG fill/stroke** | `vel-fill-{color}`, `vel-stroke-{color}`, `vel-stroke-{width}` | Medium — icon systems |
| **Print utilities** | `vel-print:hidden`, `vel-print:block` etc. | Medium |
| **Forced colors** | `vel-forced-color-adjust-auto/none` | Low |
| **Contrast utilities** | `vel-contrast-{n}` filter | Low |
| **Saturate/Hue-rotate/Drop-shadow filters** | `vel-saturate-*`, `vel-hue-rotate-*`, `vel-drop-shadow-*` | Medium |
| **Backdrop-brightness/contrast/saturate** | `vel-backdrop-brightness-*` etc. | Low |
| **Text decoration color/style/thickness** | `vel-decoration-{color}`, `vel-decoration-{style}`, `vel-decoration-{thickness}` | Low |
| **Text underline offset** | `vel-underline-offset-{n}` | Low |
| **Font variant numeric** | `vel-oldstyle-nums`, `vel-tabular-nums` etc. | Low |
| **Scroll padding/margin** | `vel-scroll-p-*`, `vel-scroll-m-*` | Low |
| **Inset full set** | `vel-inset-{n}` for spacing scale values, not just 0/auto | High — positioning |
| **Top/right/bottom/left full set** | `vel-top-{n}`, `vel-right-{n}` etc. for spacing scale | High — positioning |
| **Negative margins** | `-vel-m-*`, `-vel-mt-*` etc. | High |
| **Negative translate** | Only `-vel-translate-y-*` exists; `-vel-translate-x-*` values beyond full/half missing | High |
| **Transform composition** | All transforms overwrite each other (no CSS variable composition) | Critical |
| **Size utility** | `vel-size-{n}` (sets both width and height) | Medium |

**Component categories Bulma covers that Velora has zero of:**

| Component | Impact |
|---|---|
| **Modal / Dialog** | Critical — almost every app needs this |
| **Dropdown** | Critical — menus everywhere |
| **Pagination** | High |
| **Breadcrumb** | High |
| **Steps / Stepper** | High |
| **Menu (sidebar nav)** | High |
| **Panel** | Medium |
| **Hero section** | Medium |
| **Section / Footer helpers** | Medium |
| **Notification / Toast** | High |
| **Message (rich alert)** | Medium |
| **Tag group** | Medium |
| **File upload input** | Medium |
| **Skeleton loading** | High (shimmer exists but no skeleton component) |
| **Divider component** | Medium |
| **Kbd (keyboard shortcut display)** | Low |
| **Code / Pre** | Medium |

---

## 3. Button Glow Bug

**The problem:** `.vel-btn-secondary`, `.vel-btn-success`, `.vel-btn-danger`, `.vel-btn-warning`, and `.vel-btn-info` all apply a `box-shadow` in their base rule — not just on hover.

Specific offending lines in `src/components/button.css`:

```css
/* Line 66 */
.vel-btn-secondary {
  box-shadow: 0 2px 8px rgba(79, 110, 156, 0.3);  /* ← applied at rest */
}

/* Line 84 */
.vel-btn-success {
  box-shadow: 0 2px 8px rgba(14, 203, 129, 0.35); /* ← applied at rest */
}

/* Line 102 */
.vel-btn-danger {
  box-shadow: 0 2px 8px rgba(240, 65, 108, 0.35); /* ← applied at rest */
}

/* Line 120 */
.vel-btn-warning {
  box-shadow: 0 2px 8px rgba(255, 157, 0, 0.3);   /* ← applied at rest */
}

/* Line 138 */
.vel-btn-info {
  box-shadow: 0 2px 8px rgba(46, 189, 229, 0.3);  /* ← applied at rest */
}
```

`.vel-btn-primary` does not have this problem — it has no `box-shadow` at rest, only adds it on `:hover`.

The correct fix: move all `box-shadow` declarations on these variants from the base rule into the `:hover` rule, matching the primary button's pattern. Additionally, the `.vel-btn-glow-*` class exists for when a permanent glow is intentional, so the distinction becomes clear.

**Secondary issue:** `.vel-btn-success:active` and `.vel-btn-danger:active` do not reset `box-shadow: none` like `.vel-btn-primary:active` does, which means the hover glow persists while the button is pressed.

---

## 4. Color System Assessment

### What Velora has
- 6 semantic palettes (primary/secondary/success/danger/warning/info), each with 11 stops (50–950)
- 1 neutral palette with 11 stops
- Surface tokens (5 levels) for dark-UI layering
- Semantic aliases (`--vel-color-primary`, `--vel-color-primary-hover`, etc.)
- Gradient tokens per palette
- Glow tokens per palette

### What Tailwind does differently
Tailwind ships approximately 22 named color families (slate, gray, zinc, neutral, stone, red, orange, amber, yellow, lime, green, emerald, teal, cyan, sky, blue, indigo, violet, purple, fuchsia, pink, rose), each with 11 stops (50–950). Every color family is exposed as a utility class directly. There are no "semantic" aliases built-in — theming is done by overriding CSS variables in v4, or in the config in v3.

The key difference: Tailwind gives you full color-system access in utilities. You can write `vel-text-emerald-400` because emerald exists. Velora only has `vel-text-primary-400` (violet), with partial ramps for success/danger/warning/info, and no ramps for secondary in the color utilities at all.

### What Bulma does differently
Bulma uses a minimal semantic system (primary, link, info, success, warning, danger) with CSS variables for light/dark shades derived from each. It does not ship a broad color palette — it relies on you setting 6 base colors. Light-mode first, dark-mode via a separate stylesheet.

### Assessment of Velora's current palette
The Velora Violet primary is distinctive and well-constructed. The semantic palettes are all solid with proper perceptual spread across the 50–950 range. The surface token system (`--vel-surface-0` through `--vel-surface-4`) is appropriate for a dark-first framework and better than what Tailwind provides by default.

**What is missing:**
1. **No neutral color utilities** — `vel-text-neutral-50` through `vel-text-neutral-950` exist, but `vel-bg-neutral-*` stops at 900, not 950. More importantly, there are no `--vel-secondary-*` numbered background utilities at all.
2. **No gray/slate/zinc palette variants** — frameworks need at least 2-3 gray family options so users are not locked to Velora Slate.
3. **The secondary palette ramp has no utility classes** — tokens exist at `--vel-secondary-50` through `--vel-secondary-950` but `colors.css` has no `vel-text-secondary-*` or `vel-bg-secondary-*` numbered classes.
4. **Color opacity modifier system is absent** — Tailwind v4 and modern frameworks support composable opacity via CSS color-mix or a `--vel-bg-opacity` variable that actually gets used. Velora defines `--vel-bg-opacity` but never uses it in background-color rules, so it is dead code.
5. **No extended palette families** — for a framework to be comparable to Tailwind, at least a few extra named palettes (e.g., a rose/pink, a sky/cyan, a lime/green, a warm amber distinct from warning-amber) should exist so developers building brand systems can choose colors without defining everything themselves.

**Recommendation:** Velora's palette is sufficient for a v0.x framework but not for claiming Tailwind parity. The minimum bar for parity is 8–10 full named palettes with complete utility coverage.

---

## 5. Full Build Plan

### Priority order: highest impact first

---

#### Fix 1 — Button glow bug (1 file, 30 minutes)
**File:** `src/components/button.css`
**Change:** Remove `box-shadow` from the base rules of `.vel-btn-secondary`, `.vel-btn-success`, `.vel-btn-danger`, `.vel-btn-warning`, `.vel-btn-info`. Add `box-shadow: none` to their `:active` rules.

---

#### Fix 2 — Deduplicate keyframes (2 files, 15 minutes)
**Files:** `src/utilities/animations.css`, `src/utilities/transitions.css`
**Change:** Remove the duplicated `@keyframes` block from `transitions.css` (vel-spin, vel-ping, vel-pulse, vel-bounce, vel-fade-in, vel-slide-in-up). The canonical definitions belong in `animations.css`. The `.vel-animate-slide-in` class in `transitions.css` needs to be either removed (it duplicates `.vel-animate-slide-up`) or renamed to reference the keyframe from `animations.css`.

---

#### Fix 3 — Inset/position full scale (1 file, 1 hour)
**File:** `src/utilities/layout.css`
**Change:** The current inset/top/right/bottom/left utilities only expose 0 and auto. Add the full spacing scale (matching `--vel-space-*` tokens) for:
- `vel-inset-{n}` (all sides)
- `vel-inset-x-{n}`, `vel-inset-y-{n}`
- `vel-top-{n}`, `vel-right-{n}`, `vel-bottom-{n}`, `vel-left-{n}`
- Fractional values: `vel-inset-1/2`, `vel-inset-full`, `vel-top-full`, etc.
- Negative values: `-vel-top-{n}` etc. (required for overlapping elements)

---

#### Fix 4 — Negative margins (1 file, 1 hour)
**File:** `src/utilities/spacing.css`
**Change:** Add `-vel-m-*`, `-vel-mx-*`, `-vel-my-*`, `-vel-mt-*`, `-vel-mr-*`, `-vel-mb-*`, `-vel-ml-*` for the full spacing scale. These are essential for common layouts (overlapping cards, pull elements, etc.).

---

#### Fix 5 — Transform composition (new token approach, 2 files, 2 hours)
**Problem:** All transform utilities (`vel-scale-*`, `vel-rotate-*`, `vel-translate-*`) each set `transform` as a complete value, which means they cannot be composed. `vel-scale-105 vel-rotate-3` — only the last one wins.
**Fix:** Adopt the CSS custom property composition pattern:
```css
/* Add to tokens.css */
--vel-transform-scale:     scale(1);
--vel-transform-rotate:    rotate(0deg);
--vel-transform-translate-x: translateX(0);
--vel-transform-translate-y: translateY(0);
--vel-transform-skew-x:    skewX(0);
--vel-transform-skew-y:    skewY(0);

/* Applied once */
.vel-transform {
  transform: var(--vel-transform-translate-x) var(--vel-transform-translate-y)
             var(--vel-transform-rotate)
             var(--vel-transform-scale)
             var(--vel-transform-skew-x) var(--vel-transform-skew-y);
}

/* Then each utility overrides only its own variable */
.vel-scale-105  { --vel-transform-scale: scale(1.05); }
.vel-rotate-3   { --vel-transform-rotate: rotate(3deg); }
```
**Files:** `src/tokens.css`, `src/utilities/transitions.css` (refactor scale/rotate/translate blocks)

---

#### Phase A — Missing critical utilities (new file + updates, 2 days)

**A1 — `src/utilities/divide.css` (new)**
Classes needed:
- `vel-divide-x`, `vel-divide-x-{n}`, `vel-divide-y`, `vel-divide-y-{n}` — border between children using `> * + *` selectors
- `vel-divide-solid`, `vel-divide-dashed`, `vel-divide-dotted`
- `vel-divide-transparent`, `vel-divide-primary`, `vel-divide-neutral-{n}` etc.
- Add to `src/velora.css` imports

**A2 — `src/utilities/ring.css` (new)**
Currently "ring" means glow box-shadow. Tailwind's ring system is separate: a variable-width box-shadow ring for focus states.
Classes needed:
- `vel-ring-0`, `vel-ring-1`, `vel-ring-2`, `vel-ring-4`, `vel-ring-8` — ring width via `--vel-ring-width`
- `vel-ring-inset` — inset variant
- `vel-ring-offset-0`, `vel-ring-offset-1`, `vel-ring-offset-2`, `vel-ring-offset-4` — gap between element and ring
- `vel-ring-offset-white`, `vel-ring-offset-primary` etc. — ring offset color
- **Note:** The current `.vel-ring-primary` class in `effects.css` and `borders.css` is conflicted/duplicated (defined differently in each). Consolidate into this new file.
- Add to `src/velora.css` imports

**A3 — `src/utilities/svg.css` (new)**
Classes needed:
- `vel-fill-current`, `vel-fill-none`, `vel-fill-primary`, `vel-fill-success`, `vel-fill-neutral-{n}` etc.
- `vel-stroke-current`, `vel-stroke-none`, `vel-stroke-primary` etc.
- `vel-stroke-0`, `vel-stroke-1`, `vel-stroke-2` (stroke-width)
- Add to `src/velora.css` imports

**A4 — Extended filter utilities (extend `effects.css`)**
Add to `src/utilities/effects.css`:
- `vel-contrast-0`, `vel-contrast-50`, `vel-contrast-75`, `vel-contrast-100`, `vel-contrast-125`, `vel-contrast-150`, `vel-contrast-200`
- `vel-saturate-0`, `vel-saturate-50`, `vel-saturate-100`, `vel-saturate-150`, `vel-saturate-200`
- `vel-hue-rotate-0`, `vel-hue-rotate-15`, `vel-hue-rotate-30`, `vel-hue-rotate-60`, `vel-hue-rotate-90`, `vel-hue-rotate-180`
- `vel-drop-shadow-sm`, `vel-drop-shadow`, `vel-drop-shadow-md`, `vel-drop-shadow-lg`, `vel-drop-shadow-xl`, `vel-drop-shadow-none`
- Backdrop equivalents: `vel-backdrop-brightness-*`, `vel-backdrop-contrast-*`, `vel-backdrop-saturate-*`, `vel-backdrop-hue-rotate-*`

**A5 — Text decoration utilities (extend `typography.css`)**
Add to `src/utilities/typography.css`:
- `vel-decoration-solid`, `vel-decoration-double`, `vel-decoration-dotted`, `vel-decoration-dashed`, `vel-decoration-wavy`
- `vel-decoration-auto`, `vel-decoration-0`, `vel-decoration-1`, `vel-decoration-2`, `vel-decoration-4`, `vel-decoration-8` (thickness)
- `vel-underline-offset-auto`, `vel-underline-offset-0`, `vel-underline-offset-1`, `vel-underline-offset-2`, `vel-underline-offset-4`, `vel-underline-offset-8`
- `vel-decoration-primary`, `vel-decoration-success`, `vel-decoration-danger`, `vel-decoration-neutral-{n}` (decoration color)

**A6 — Scroll margin/padding (extend `spacing.css` or new file)**
- `vel-scroll-p-{n}`, `vel-scroll-px-{n}`, `vel-scroll-py-{n}`, `vel-scroll-pt/pr/pb/pl-{n}`
- `vel-scroll-m-{n}`, `vel-scroll-mx-{n}`, `vel-scroll-my-{n}`, `vel-scroll-mt/mr/mb/ml-{n}`

**A7 — Size shorthand (extend `sizing.css`)**
- `vel-size-{n}` sets both `width` and `height` in one class — common for avatar/icon sizing

**A8 — Print variants (extend `build.mjs`)**
- Add `@media print` variant generation for display/visibility/colors

---

#### Phase B — Missing components (10 new files, 1 week)

**B1 — `src/components/modal.css`**
Classes: `vel-modal-backdrop`, `vel-modal`, `vel-modal-sm/lg/xl/full`, `vel-modal-header`, `vel-modal-body`, `vel-modal-footer`, `vel-modal-close`
Note: CSS-only open/close is not practical; the component should style the structure; JS controls `vel-modal-open` class on body and visibility.

**B2 — `src/components/dropdown.css`**
Classes: `vel-dropdown`, `vel-dropdown-trigger`, `vel-dropdown-menu`, `vel-dropdown-item`, `vel-dropdown-item-active`, `vel-dropdown-divider`, `vel-dropdown-header`
Note: CSS-only via `:focus-within` for basic behavior; JS handles complex cases.

**B3 — `src/components/pagination.css`**
Classes: `vel-pagination`, `vel-page-item`, `vel-page-link`, `vel-page-link-active`, `vel-page-link-disabled`, `vel-pagination-sm/lg`

**B4 — `src/components/breadcrumb.css`**
Classes: `vel-breadcrumb`, `vel-breadcrumb-item`, `vel-breadcrumb-link`, `vel-breadcrumb-separator`, `vel-breadcrumb-active`
Separator via CSS `::before` pseudo-element with configurable content via `--vel-breadcrumb-separator`.

**B5 — `src/components/skeleton.css`**
Classes: `vel-skeleton`, `vel-skeleton-text`, `vel-skeleton-circle`, `vel-skeleton-rect`
Uses the existing `vel-shimmer` animation. Add dimensional presets.

**B6 — `src/components/toast.css`**
Classes: `vel-toast`, `vel-toast-container` (positioned fixed), `vel-toast-primary/success/danger/warning/info`, `vel-toast-close`
Position variants: `vel-toast-top-right`, `vel-toast-top-center`, `vel-toast-bottom-right` etc.

**B7 — `src/components/menu.css`**
Sidebar navigation. Classes: `vel-menu`, `vel-menu-label`, `vel-menu-list`, `vel-menu-item`, `vel-menu-link`, `vel-menu-link-active`

**B8 — `src/components/steps.css`**
Classes: `vel-steps`, `vel-step`, `vel-step-complete`, `vel-step-active`, `vel-step-pending`
Both horizontal and vertical orientations.

**B9 — `src/components/divider.css`**
Classes: `vel-divider`, `vel-divider-vertical`, `vel-divider-label` (text in divider)

**B10 — `src/components/kbd.css`**
Classes: `vel-kbd`, `vel-kbd-sm/lg`

---

#### Phase C — Color system expansion (2 files, 1 day)

**C1 — `src/tokens.css` additions:**
Add 4 new named palettes:
- `--vel-rose-*` (50-950) — distinct from danger; a warm pink
- `--vel-sky-*` (50-950) — distinct from info; a lighter cyan-blue
- `--vel-lime-*` (50-950) — distinct from success; a yellow-green
- `--vel-orange-*` (50-950) — distinct from warning; a more saturated burnt orange

**C2 — `src/utilities/colors.css` additions:**
- Complete the secondary color ramp: add `vel-text-secondary-{n}` and `vel-bg-secondary-{n}` for all stops
- Add complete ramps for all success/danger/warning/info stops (currently incomplete — e.g., `vel-bg-success-200` does not exist)
- Add rose, sky, lime, orange palettes with full text/bg/border utility coverage
- Fix `--vel-bg-opacity` to actually compose: change `background-color` declarations in semantic bg classes to use `rgb(r g b / var(--vel-bg-opacity, 1))` pattern so the opacity utilities work

---

#### Phase D — Variant system improvements (1 file, 1 day)

**D1 — `build.mjs` improvements:**

Currently the variant system works, but has meaningful gaps:

1. **Pattern matching is too narrow:** `isResponsive()` uses string prefix matching against a fixed list. Any new utility that doesn't match the regex won't get responsive variants. The `isHover()` and `isFocus()` functions similarly miss new classes.

2. **Selector matching fails for compound classes:** The rule `if (rule.parent.type !== 'root') return` correctly skips nested rules. But it also skips any utility that is already inside a media query at source-level. New utilities in `divide.css` and `ring.css` that use `> * + *` child selectors will match the selector regex but produce broken variants when wrapped in a media query (`.vel-sm\:divide-x > * + *` is valid and should work, but check the output is correct).

3. **Group/peer variants absent:** There is no `vel-group-hover:*` or `vel-peer-*` system. These are not easy to retrofit without a `data-*` attribute or wrapper class approach. Decision required: implement as `[data-vel-group]:hover .vel-group-hover\:*` or skip for now.

4. **Dark mode strategy is class-based** (`.vel-dark` on `<html>`). This is correct but means the variant generator only handles this one trigger. Add a `@media (prefers-color-scheme: dark)` variant set as an alternative: `vel-os-dark:*` prefix.

5. **`2xl` breakpoint escaping:** The generated selector `.vel-2xl\:flex` is correct CSS but requires that the `\:` escape is handled by the build. Verify this actually works in the current output — the regex `m = rule.selector.match(/^\.vel-([\w-]+)$/)` would produce `cls = '2xl'` for `.vel-2xl` but the breakpoint is appended from the `bp` variable, so this should be fine.

**Recommended approach:** Keep the current PostCSS-based generation. Do not move to a separate CSS file for variants — that would prevent build-time optimization via cssnano. The variant generator logic in `build.mjs` should be refactored to use a category-based allow-list object rather than string-based predicate functions, making it easier to add new utility categories without forgetting to enable their variants:

```js
const VARIANT_CONFIG = {
  responsive: ['display', 'position', 'overflow', 'flex', 'grid', 'spacing', 'sizing', 'typography', 'z-index', 'divide'],
  hover: ['bg', 'text', 'border', 'shadow', 'opacity', 'transform', 'ring', 'divide'],
  focus: ['ring', 'outline', 'bg', 'text', 'border', 'shadow'],
  active: ['scale', 'opacity', 'bg', 'shadow'],
  dark: ['bg', 'text', 'border', 'shadow', 'ring'],
}
```

---

## 6. Responsive/State Variants Strategy

### Current approach — honest assessment
The current `build.mjs` PostCSS plugin works and is correct in principle. It produces valid CSS. The actual generated variants are sufficient for the current utility set. The problems are:

- **It is fragile:** new utilities will silently not get variants unless someone manually updates the predicate functions.
- **Output size is not optimized:** every class that matches the predicate gets a variant, even for utilities that would never realistically need one (e.g., `vel-mix-blend-multiply` probably does not need a `vel-hover:mix-blend-multiply` variant).
- **No `group-hover` or `peer` support** — these are load-bearing for modern UI patterns.

### Recommended final strategy

**Keep the PostCSS generator, but restructure the allow-list.** Do not switch to a different tool (CSS layers + `@scope`, or a JIT engine) in this phase — the build is working and the PostCSS approach compiles to static CSS which is deployable on any CDN.

The specific changes needed in `build.mjs`:
1. Replace the predicate functions with a single `VARIANTS` config map (category-name → which variant types to generate).
2. Each utility file should annotate its category with a `/* @velora-category: spacing */` comment, or alternatively maintain a mapping from filename to category in the build script.
3. Add a `print` variant pass using `@media print`.
4. Add a `motion-reduce` variant pass using `@media (prefers-reduced-motion: reduce)` — critical for animations.
5. Add an `os-dark` variant pass using `@media (prefers-color-scheme: dark)` as complement to the existing class-based `.vel-dark` approach.

---

## 7. Token System Review

### Strengths
- Spacing scale is complete and correctly named
- Font tokens (size, weight, family, leading, tracking) are thorough
- Border radius tokens cover all common cases
- Shadow tokens use realistic dark-mode values (higher opacity than light-mode defaults)
- Duration and easing tokens are production-quality — the spring and bounce easings are original
- Z-index is tokenized (most frameworks do not do this)
- Glow tokens are original and a real differentiator

### Problems

**1. Duplicate token aliases are confusing and inconsistent:**
`--vel-size-xs` through `--vel-size-9xl` and `--vel-text-xs` through `--vel-text-9xl` both exist and both refer to font sizes. The comment says "Keep legacy aliases for compatibility" but this is v0.2.0 — there is no public API to be backward-compatible with yet. Remove one set. The `--vel-size-*` naming is wrong for font sizes (size implies a dimension, not typography). Keep `--vel-text-*`, drop `--vel-size-*`.

**2. Surface tokens assume dark-only:**
`--vel-surface-0` through `--vel-surface-4` are hardcoded dark values with no light-mode counterpart or override. Frameworks need a light-mode story. The current approach makes VeloraCSS exclusively dark-themed by default, which limits adoption. Recommendation: keep the dark defaults but wrap them in a `@media (prefers-color-scheme: dark)` block with a `.vel-light` override available, or expose a `.vel-theme-dark` / `.vel-theme-light` toggle.

**3. No semantic text scale tokens beyond body/muted:**
There are `--vel-color-text` and `--vel-color-muted`. A real framework needs:
- `--vel-color-text-heading` (stronger contrast)
- `--vel-color-text-disabled` (weaker)
- `--vel-color-text-link`
- `--vel-color-text-placeholder`

**4. No semantic border tokens beyond base/subtle:**
Only `--vel-border-base` and `--vel-border-subtle`. Add:
- `--vel-border-strong` (higher contrast dividers)
- `--vel-border-focus` (current: primary-500, should be a named token)
- `--vel-border-error`

**5. Ring tokens conflict with glow tokens:**
`--vel-ring-primary` in `tokens.css` is `0 0 0 3px rgba(124, 92, 252, 0.4)` — a box-shadow-based focus ring. But `effects.css` also defines `.vel-ring-primary` as that box-shadow, while `borders.css` defines `.vel-ring-primary` as `0 0 0 3px var(--vel-color-primary)` (no opacity). Two different definitions for the same class name in different files. The build will emit both — whichever loads last wins. The borders.css definition (no opacity) overwrites the effects.css definition (with opacity). This is a silent bug.

**Fix:** Remove ring classes from `effects.css` entirely (they are duplicated there). Keep the authoritative definitions in `borders.css`. Keep the token `--vel-ring-primary` in `tokens.css` and make `borders.css` reference it instead of hardcoding.

**6. Missing component tokens:**
No tokens for navbar height, modal backdrop opacity, sidebar width, etc. These should be `--vel-navbar-height: 4rem`, `--vel-sidebar-width: 16rem` etc., so users can override with one variable instead of hunting through component CSS.

**7. `--vel-bg-opacity` is dead code:**
It is defined as a class utility but the background-color declarations in `colors.css` are static hex/var values that do not reference it. Either wire it up properly or remove it.

---

## Summary Table — What to Build

| Priority | Action | Files | Effort |
|---|---|---|---|
| P0 | Fix button glow bug | button.css | 30min |
| P0 | Fix duplicate keyframes | animations.css, transitions.css | 15min |
| P0 | Fix vel-ring-primary duplication | effects.css, borders.css | 15min |
| P1 | Inset/position full scale | layout.css | 1hr |
| P1 | Negative margins | spacing.css | 1hr |
| P1 | Transform composition | tokens.css, transitions.css | 2hr |
| P1 | Divide utilities | divide.css (new) | 1hr |
| P1 | Ring width system | ring.css (new), consolidate | 1hr |
| P1 | SVG fill/stroke | svg.css (new) | 45min |
| P2 | Extended filters | effects.css | 1hr |
| P2 | Text decoration full | typography.css | 45min |
| P2 | Size shorthand utility | sizing.css | 20min |
| P2 | Scroll padding/margin | spacing.css or new | 30min |
| P2 | Modal component | modal.css (new) | 2hr |
| P2 | Dropdown component | dropdown.css (new) | 2hr |
| P2 | Pagination component | pagination.css (new) | 1hr |
| P2 | Toast component | toast.css (new) | 1hr |
| P2 | Skeleton component | skeleton.css (new) | 45min |
| P3 | Breadcrumb, Menu, Steps | 3 new files | 3hr |
| P3 | Divider, Kbd | 2 new files | 1hr |
| P3 | Complete color ramps | colors.css | 2hr |
| P3 | Rose/Sky/Lime/Orange palettes | tokens.css, colors.css | 3hr |
| P3 | Surface token light/dark | tokens.css | 1hr |
| P3 | Semantic text/border tokens | tokens.css | 45min |
| P3 | Remove --vel-size-* duplicates | tokens.css | 15min |
| P3 | build.mjs variant config refactor | build.mjs | 2hr |
| P3 | Motion-reduce variant | build.mjs | 45min |
| P3 | Print variant | build.mjs | 45min |
| P3 | Fix --vel-bg-opacity dead code | colors.css, tokens.css | 30min |

**Total estimated effort:** ~35 hours of builder work to reach legitimate "complete framework" status.
