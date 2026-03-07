import DocPage from '../_components/DocPage'

export default function MixBlendModePage() {
  return (
    <DocPage
      title="Mix Blend Mode"
      description="Utilities for controlling how an element's content blends with its background."
      source="effects.css"
      table={[
        { class: 'vel-mix-normal', properties: 'mix-blend-mode: normal' },
        { class: 'vel-mix-multiply', properties: 'mix-blend-mode: multiply' },
        { class: 'vel-mix-screen', properties: 'mix-blend-mode: screen' },
        { class: 'vel-mix-overlay', properties: 'mix-blend-mode: overlay' },
        { class: 'vel-mix-darken', properties: 'mix-blend-mode: darken' },
        { class: 'vel-mix-lighten', properties: 'mix-blend-mode: lighten' },
        { class: 'vel-mix-color-dodge', properties: 'mix-blend-mode: color-dodge' },
        { class: 'vel-mix-color-burn', properties: 'mix-blend-mode: color-burn' },
        { class: 'vel-mix-hard-light', properties: 'mix-blend-mode: hard-light' },
        { class: 'vel-mix-soft-light', properties: 'mix-blend-mode: soft-light' },
        { class: 'vel-mix-difference', properties: 'mix-blend-mode: difference' },
        { class: 'vel-mix-exclusion', properties: 'mix-blend-mode: exclusion' },
      ]}
      examples={[
        {
          label: 'Blend modes on overlapping elements',
          html: `<div style="display:flex;gap:16px;padding:1rem;background:#060b17;flex-wrap:wrap;">
  <div style="position:relative;width:80px;height:80px;text-align:center;">
    <div style="position:absolute;width:60px;height:60px;border-radius:50%;background:#7c5cfc;top:0;left:0;"></div>
    <div class="vel-mix-screen" style="position:absolute;width:60px;height:60px;border-radius:50%;background:#38bdf8;top:20px;left:20px;"></div>
    <p style="position:absolute;bottom:-20px;left:0;right:0;color:#64748b;font-size:0.65rem;">screen</p>
  </div>
  <div style="position:relative;width:80px;height:80px;text-align:center;">
    <div style="position:absolute;width:60px;height:60px;border-radius:50%;background:#7c5cfc;top:0;left:0;"></div>
    <div class="vel-mix-multiply" style="position:absolute;width:60px;height:60px;border-radius:50%;background:#f97316;top:20px;left:20px;"></div>
    <p style="position:absolute;bottom:-20px;left:0;right:0;color:#64748b;font-size:0.65rem;">multiply</p>
  </div>
  <div style="position:relative;width:80px;height:80px;text-align:center;">
    <div style="position:absolute;width:60px;height:60px;border-radius:50%;background:#7c5cfc;top:0;left:0;"></div>
    <div class="vel-mix-difference" style="position:absolute;width:60px;height:60px;border-radius:50%;background:#34d399;top:20px;left:20px;"></div>
    <p style="position:absolute;bottom:-20px;left:0;right:0;color:#64748b;font-size:0.65rem;">difference</p>
  </div>
  <div style="position:relative;width:80px;height:80px;text-align:center;">
    <div style="position:absolute;width:60px;height:60px;border-radius:50%;background:#7c5cfc;top:0;left:0;"></div>
    <div class="vel-mix-overlay" style="position:absolute;width:60px;height:60px;border-radius:50%;background:#ec4899;top:20px;left:20px;"></div>
    <p style="position:absolute;bottom:-20px;left:0;right:0;color:#64748b;font-size:0.65rem;">overlay</p>
  </div>
</div>`,
        },
      ]}
    />
  )
}
