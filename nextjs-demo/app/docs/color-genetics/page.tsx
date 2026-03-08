import DocPage from '../_components/DocPage'

export default function ColorGeneticsPage() {
  return (
    <DocPage
      title="Color Genetics"
      description="VeloraCSS derives its entire color system from a single CSS variable — --vel-dna-hue. Change one number and every color on the page updates: primary, surfaces, borders, text, and all semantic colors."
      source="tokens.css"
      table={[
        { class: '--vel-dna-hue',            properties: 'Master hue angle (0–360). Default: 258 (violet)' },
        { class: '--vel-color-primary',      properties: 'oklch(65% 0.21 var(--vel-dna-hue))' },
        { class: '--vel-color-primary-light',properties: 'oklch(80% 0.14 var(--vel-dna-hue))' },
        { class: '--vel-color-primary-dim',  properties: 'oklch(50% 0.22 var(--vel-dna-hue))' },
        { class: '--vel-surface-0',          properties: 'oklch(7% 0.02 var(--vel-dna-hue))' },
        { class: '--vel-surface-1',          properties: 'oklch(10% 0.025 var(--vel-dna-hue))' },
        { class: '--vel-surface-2',          properties: 'oklch(13% 0.03 var(--vel-dna-hue))' },
        { class: '--vel-border-base',        properties: 'oklch(26% 0.045 var(--vel-dna-hue))' },
        { class: '--vel-text-base',          properties: 'oklch(92% 0.015 var(--vel-dna-hue))' },
        { class: '--vel-text-muted',         properties: 'oklch(50% 0.04 var(--vel-dna-hue))' },
      ]}
      examples={[
        {
          label: 'Four DNA hues — one token change recolors everything',
          html: `<div class="vel-grid vel-gap-4" style="grid-template-columns:repeat(2,1fr)">
  <div style="--vel-dna-hue:258" class="vel-card vel-p-4">
    <div class="vel-text-xs vel-font-bold vel-text-primary vel-mb-3" style="text-transform:uppercase;letter-spacing:0.1em">Hue 258 — Violet</div>
    <div class="vel-flex vel-gap-2 vel-mb-3">
      <div style="width:32px;height:32px;border-radius:50%;background:var(--vel-color-primary)"></div>
      <div style="width:32px;height:32px;border-radius:50%;background:var(--vel-color-primary-light)"></div>
      <div style="width:32px;height:32px;border-radius:50%;background:var(--vel-surface-2);border:1px solid var(--vel-border-base)"></div>
    </div>
    <button class="vel-btn vel-btn-primary vel-btn-sm">Button</button>
  </div>
  <div style="--vel-dna-hue:162" class="vel-card vel-p-4">
    <div class="vel-text-xs vel-font-bold vel-text-primary vel-mb-3" style="text-transform:uppercase;letter-spacing:0.1em">Hue 162 — Emerald</div>
    <div class="vel-flex vel-gap-2 vel-mb-3">
      <div style="width:32px;height:32px;border-radius:50%;background:var(--vel-color-primary)"></div>
      <div style="width:32px;height:32px;border-radius:50%;background:var(--vel-color-primary-light)"></div>
      <div style="width:32px;height:32px;border-radius:50%;background:var(--vel-surface-2);border:1px solid var(--vel-border-base)"></div>
    </div>
    <button class="vel-btn vel-btn-primary vel-btn-sm">Button</button>
  </div>
  <div style="--vel-dna-hue:25" class="vel-card vel-p-4">
    <div class="vel-text-xs vel-font-bold vel-text-primary vel-mb-3" style="text-transform:uppercase;letter-spacing:0.1em">Hue 25 — Amber</div>
    <div class="vel-flex vel-gap-2 vel-mb-3">
      <div style="width:32px;height:32px;border-radius:50%;background:var(--vel-color-primary)"></div>
      <div style="width:32px;height:32px;border-radius:50%;background:var(--vel-color-primary-light)"></div>
      <div style="width:32px;height:32px;border-radius:50%;background:var(--vel-surface-2);border:1px solid var(--vel-border-base)"></div>
    </div>
    <button class="vel-btn vel-btn-primary vel-btn-sm">Button</button>
  </div>
  <div style="--vel-dna-hue:205" class="vel-card vel-p-4">
    <div class="vel-text-xs vel-font-bold vel-text-primary vel-mb-3" style="text-transform:uppercase;letter-spacing:0.1em">Hue 205 — Ocean</div>
    <div class="vel-flex vel-gap-2 vel-mb-3">
      <div style="width:32px;height:32px;border-radius:50%;background:var(--vel-color-primary)"></div>
      <div style="width:32px;height:32px;border-radius:50%;background:var(--vel-color-primary-light)"></div>
      <div style="width:32px;height:32px;border-radius:50%;background:var(--vel-surface-2);border:1px solid var(--vel-border-base)"></div>
    </div>
    <button class="vel-btn vel-btn-primary vel-btn-sm">Button</button>
  </div>
</div>`,
        },
        {
          label: 'Full component stack — all colors derived from one hue',
          html: `<div style="--vel-dna-hue:300" class="vel-card vel-p-5">
  <div class="vel-flex vel-items-center vel-gap-3 vel-mb-4">
    <div class="vel-avatar vel-avatar-md vel-bg-primary vel-text-white vel-flex vel-items-center vel-justify-center vel-font-bold">VX</div>
    <div>
      <div class="vel-text-base vel-font-bold">VeloraX Team</div>
      <div class="vel-text-muted vel-text-sm">--vel-dna-hue: 300</div>
    </div>
    <div class="vel-ml-auto"><span class="vel-badge vel-badge-primary">Active</span></div>
  </div>
  <div style="height:4px;border-radius:2px;background:var(--vel-surface-3);overflow:hidden;margin-bottom:1rem">
    <div style="width:72%;height:100%;background:var(--vel-color-primary);border-radius:2px"></div>
  </div>
  <div class="vel-flex vel-gap-2">
    <button class="vel-btn vel-btn-primary vel-btn-sm">Accept</button>
    <button class="vel-btn vel-btn-secondary vel-btn-sm">Decline</button>
  </div>
</div>`,
        },
      ]}
    />
  )
}
