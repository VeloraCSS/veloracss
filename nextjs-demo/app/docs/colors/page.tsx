import DocPage from '../_components/DocPage'

export default function ColorsPage() {
  return (
    <DocPage
      title="Colors"
      description="VeloraCSS includes a full brand color palette with semantic colors and neutral scale. Each color has shades from 50 to 950."
      table={[
        { class: 'Primary (Velora Violet)', properties: '#7c5cfc' },
        { class: '--vel-primary-50 to --vel-primary-950', properties: 'Full violet ramp' },
        { class: 'Success (Emerald)', properties: '#0ecb81' },
        { class: '--vel-success-50 to --vel-success-950', properties: 'Full emerald ramp' },
        { class: 'Danger (Rose)', properties: '#f0416c' },
        { class: '--vel-danger-50 to --vel-danger-950', properties: 'Full rose ramp' },
        { class: 'Warning (Amber)', properties: '#ff9d00' },
        { class: '--vel-warning-50 to --vel-warning-950', properties: 'Full amber ramp' },
        { class: 'Info (Sky)', properties: '#2ebde5' },
        { class: '--vel-info-50 to --vel-info-950', properties: 'Full sky ramp' },
        { class: 'Secondary (Slate)', properties: '#4f6e9c' },
        { class: '--vel-secondary-50 to --vel-secondary-950', properties: 'Full slate ramp' },
        { class: 'Neutral', properties: '50–950 scale (slate-based)' },
        { class: '--vel-neutral-50 to --vel-neutral-950', properties: 'Full neutral ramp' },
      ]}
      examples={[
        {
          label: 'Semantic color swatches',
          html: `<div style="display:flex;gap:0.5rem;flex-wrap:wrap">
  <div style="width:4rem;height:4rem;background:#7c5cfc;border-radius:0.5rem" title="Primary"></div>
  <div style="width:4rem;height:4rem;background:#0ecb81;border-radius:0.5rem" title="Success"></div>
  <div style="width:4rem;height:4rem;background:#f0416c;border-radius:0.5rem" title="Danger"></div>
  <div style="width:4rem;height:4rem;background:#ff9d00;border-radius:0.5rem" title="Warning"></div>
  <div style="width:4rem;height:4rem;background:#2ebde5;border-radius:0.5rem" title="Info"></div>
  <div style="width:4rem;height:4rem;background:#4f6e9c;border-radius:0.5rem" title="Secondary"></div>
</div>`,
        },
        {
          label: 'Applying colors with utility classes',
          html: `<div style="display:flex;flex-direction:column;gap:0.5rem">
  <div class="vel-bg-primary vel-text-white vel-p-3 vel-rounded-lg">vel-bg-primary</div>
  <div class="vel-bg-success vel-text-white vel-p-3 vel-rounded-lg">vel-bg-success</div>
  <div class="vel-bg-danger vel-text-white vel-p-3 vel-rounded-lg">vel-bg-danger</div>
  <div class="vel-bg-warning vel-text-white vel-p-3 vel-rounded-lg">vel-bg-warning</div>
  <div class="vel-bg-info vel-text-white vel-p-3 vel-rounded-lg">vel-bg-info</div>
</div>`,
        },
        {
          label: 'Primary ramp (50 to 950)',
          html: `<div style="display:flex;gap:0.25rem;flex-wrap:wrap">
  <div style="width:2.5rem;height:2.5rem;background:var(--vel-primary-50,#f5f2ff);border-radius:0.25rem" title="50"></div>
  <div style="width:2.5rem;height:2.5rem;background:var(--vel-primary-100,#ece8fe);border-radius:0.25rem" title="100"></div>
  <div style="width:2.5rem;height:2.5rem;background:var(--vel-primary-200,#d4ccfd);border-radius:0.25rem" title="200"></div>
  <div style="width:2.5rem;height:2.5rem;background:var(--vel-primary-300,#b5a7fb);border-radius:0.25rem" title="300"></div>
  <div style="width:2.5rem;height:2.5rem;background:var(--vel-primary-400,#9880fd);border-radius:0.25rem" title="400"></div>
  <div style="width:2.5rem;height:2.5rem;background:#7c5cfc;border-radius:0.25rem" title="500"></div>
  <div style="width:2.5rem;height:2.5rem;background:var(--vel-primary-600,#6340e0);border-radius:0.25rem" title="600"></div>
  <div style="width:2.5rem;height:2.5rem;background:var(--vel-primary-700,#4e2fc4);border-radius:0.25rem" title="700"></div>
  <div style="width:2.5rem;height:2.5rem;background:var(--vel-primary-800,#3c22a0);border-radius:0.25rem" title="800"></div>
  <div style="width:2.5rem;height:2.5rem;background:var(--vel-primary-900,#2a1780);border-radius:0.25rem" title="900"></div>
  <div style="width:2.5rem;height:2.5rem;background:var(--vel-primary-950,#180c60);border-radius:0.25rem" title="950"></div>
</div>`,
        },
      ]}
    />
  )
}
