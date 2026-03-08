import DocPage from '../_components/DocPage'

export default function FluidScalePage() {
  return (
    <DocPage
      title="Fluid Scale"
      description="VeloraCSS uses clamp() for spacing and typography tokens so sizes scale smoothly between viewport widths — no breakpoints, no JavaScript, no sudden jumps."
      source="tokens.css"
      table={[
        { class: '--vel-space-1',  properties: 'clamp(0.25rem, 0.5vw, 0.5rem)' },
        { class: '--vel-space-2',  properties: 'clamp(0.5rem, 1vw, 1rem)' },
        { class: '--vel-space-4',  properties: 'clamp(1rem, 2vw, 2rem)' },
        { class: '--vel-space-8',  properties: 'clamp(2rem, 4vw, 4rem)' },
        { class: '--vel-space-16', properties: 'clamp(4rem, 8vw, 8rem)' },
        { class: '--vel-size-sm',  properties: 'clamp(0.75rem, 1.5vw, 0.875rem)' },
        { class: '--vel-size-base',properties: 'clamp(0.875rem, 2vw, 1rem)' },
        { class: '--vel-size-lg',  properties: 'clamp(1rem, 2.5vw, 1.25rem)' },
        { class: '--vel-size-xl',  properties: 'clamp(1.125rem, 3vw, 1.5rem)' },
        { class: '--vel-size-2xl', properties: 'clamp(1.25rem, 3.5vw, 1.875rem)' },
        { class: '--vel-size-3xl', properties: 'clamp(1.5rem, 4.5vw, 2.25rem)' },
        { class: '--vel-size-4xl', properties: 'clamp(1.875rem, 5.5vw, 3rem)' },
        { class: '--vel-size-5xl', properties: 'clamp(2.25rem, 7vw, 4rem)' },
      ]}
      examples={[
        {
          label: 'Fluid headings — resize the window to see smooth scaling',
          html: `<div class="vel-card vel-p-6" style="display:grid;gap:1rem">
  <div>
    <div class="vel-text-muted vel-text-xs vel-mb-1" style="font-family:Cascadia Code,Consolas,monospace">--vel-size-5xl · clamp(2.25rem, 7vw, 4rem)</div>
    <div style="font-size:var(--vel-size-5xl,2.5rem);font-weight:900;line-height:1;color:var(--vel-text-base,#e2e8f0)">Hero Title</div>
  </div>
  <div>
    <div class="vel-text-muted vel-text-xs vel-mb-1" style="font-family:Cascadia Code,Consolas,monospace">--vel-size-3xl · clamp(1.5rem, 4.5vw, 2.25rem)</div>
    <div style="font-size:var(--vel-size-3xl,1.75rem);font-weight:700;line-height:1.2;color:var(--vel-text-base,#e2e8f0)">Section Heading</div>
  </div>
  <div>
    <div class="vel-text-muted vel-text-xs vel-mb-1" style="font-family:Cascadia Code,Consolas,monospace">--vel-size-xl · clamp(1.125rem, 3vw, 1.5rem)</div>
    <div style="font-size:var(--vel-size-xl,1.25rem);font-weight:600;line-height:1.4;color:var(--vel-text-base,#e2e8f0)">Card Heading</div>
  </div>
  <div>
    <div class="vel-text-muted vel-text-xs vel-mb-1" style="font-family:Cascadia Code,Consolas,monospace">--vel-size-base · clamp(0.875rem, 2vw, 1rem)</div>
    <div style="font-size:var(--vel-size-base,1rem);line-height:1.6;color:var(--vel-text-muted,#64748b)">Body text that scales fluidly between mobile and desktop without any media queries or JavaScript.</div>
  </div>
</div>`,
        },
        {
          label: 'Fluid spacing — padding and gaps scale with the viewport',
          html: `<div style="display:grid;gap:var(--vel-space-4,1.5rem)">
  <div class="vel-card" style="padding:var(--vel-space-4,1.5rem)">
    <div class="vel-text-xs vel-text-muted vel-mb-2" style="font-family:Cascadia Code,Consolas,monospace">padding: var(--vel-space-4) — clamp(1rem, 2vw, 2rem)</div>
    <div class="vel-font-bold vel-mb-2">Fluid Padding Card</div>
    <div class="vel-text-muted vel-text-sm">This card's padding scales between 1rem (mobile) and 2rem (wide screen) based on viewport width — no breakpoints needed.</div>
  </div>
  <div class="vel-flex vel-items-center" style="gap:var(--vel-space-2,0.75rem)">
    <div class="vel-btn vel-btn-primary">Primary</div>
    <div class="vel-btn vel-btn-secondary">Secondary</div>
    <div class="vel-text-xs vel-text-muted" style="font-family:Cascadia Code,Consolas,monospace">gap: var(--vel-space-2)</div>
  </div>
</div>`,
        },
      ]}
    />
  )
}
