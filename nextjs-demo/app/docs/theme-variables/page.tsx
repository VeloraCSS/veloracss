import DocPage from '../_components/DocPage'

export default function ThemeVariablesPage() {
  return (
    <DocPage
      title="Theme Variables"
      description="VeloraCSS exposes all design tokens as CSS custom properties. The DNA Color System lets you retheme everything from a single hue value using oklch()."
      table={[
        { class: '--vel-dna-hue', properties: '258 — the single source of truth for the entire color palette' },
        { class: '--vel-primary-500', properties: '#7c5cfc (Velora Violet, legacy)' },
        { class: '--vel-success-500', properties: '#0ecb81 (Emerald)' },
        { class: '--vel-danger-500',  properties: '#f0416c (Rose)' },
        { class: '--vel-warning-500', properties: '#ff9d00 (Amber)' },
        { class: '--vel-info-500',    properties: '#2ebde5 (Sky)' },
        { class: '--vel-surface-bg',  properties: '#060b17 (deep background)' },
        { class: '--vel-surface-1',   properties: '#0d1422' },
        { class: '--vel-surface-2',   properties: '#111827' },
        { class: '--vel-surface-3',   properties: '#1a2236' },
        { class: '--vel-border-base', properties: '#1e2d45' },
        { class: '--vel-space-1',     properties: '0.25rem' },
        { class: '--vel-space-4',     properties: '1rem' },
        { class: '--vel-radius-lg',   properties: '0.5rem' },
        { class: '--vel-font-sans',   properties: 'system-ui, -apple-system, sans-serif' },
      ]}
      examples={[
        {
          label: 'The DNA Color System — change one hue, retheme everything',
          html: `<style>
  /* Override the DNA hue — every derived color updates automatically */
  :root {
    --vel-dna-hue: 145;  /* 258=violet, 145=forest, 205=ocean, 22=ember */
  }
  /* All tokens are derived:
     --vel-color-primary: oklch(65% 0.21 var(--vel-dna-hue))
     --vel-surface-0:     oklch(7%  0.02 var(--vel-dna-hue))
     --vel-text-1:        oklch(92% 0.015 var(--vel-dna-hue)) */
</style>

<!-- Or do it in JavaScript — the complete theming logic: -->
<div style="font-family:monospace;font-size:0.8rem;color:#94a3b8;padding:8px;background:#0d1422;border-radius:6px">
  document.documentElement.style.setProperty('--vel-dna-hue', '145');
</div>`,
        },
        {
          label: 'Scope themes per section with data-vel-theme',
          html: `<!-- Each section gets its own color universe — inherits from parent -->
<section data-vel-theme="ocean" style="padding:1rem;border-radius:0.5rem;border:1px solid #1e2d45">
  <p style="color:#64748b;font-size:0.8rem;margin-bottom:0.5rem">data-vel-theme="ocean" (hue 205)</p>
  <button class="vel-btn vel-btn-primary">Ocean Button</button>
</section>

<!-- data-vel-theme values: ocean | forest | ember | aurora | gold -->`,
        },
        {
          label: 'Override legacy tokens at :root',
          html: `<style>
  :root {
    --vel-primary-500: #e11d48;  /* your brand color */
    --vel-radius-lg:   0.75rem;  /* rounder corners */
    --vel-font-sans:   'Inter', system-ui, sans-serif;
  }
</style>

<!-- All vel-btn-primary, vel-text-primary, vel-bg-primary update automatically -->
<button class="vel-btn vel-btn-primary">Branded Button</button>`,
        },
        {
          label: 'Use tokens in your own CSS',
          html: `<style>
  .my-card {
    background: var(--vel-surface-2);
    border: 1px solid var(--vel-border-base);
    border-radius: var(--vel-radius-lg);
    padding: var(--vel-space-4);
    color: var(--vel-color-text);
  }
</style>

<div class="my-card">
  Custom component using VeloraCSS tokens
</div>`,
        },
      ]}
    />
  )
}
