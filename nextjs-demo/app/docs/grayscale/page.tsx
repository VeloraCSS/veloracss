import DocPage from '../_components/DocPage'

export default function GrayscalePage() {
  return (
    <DocPage
      title="Grayscale & Filters"
      description="Utilities for applying grayscale, invert, sepia, saturate, and contrast CSS filter functions."
      source="effects.css"
      table={[
        { class: 'vel-grayscale', properties: 'filter: grayscale(100%)' },
        { class: 'vel-grayscale-0', properties: 'filter: grayscale(0)' },
        { class: 'vel-invert', properties: 'filter: invert(100%)' },
        { class: 'vel-invert-0', properties: 'filter: invert(0)' },
        { class: 'vel-sepia', properties: 'filter: sepia(100%)' },
        { class: 'vel-sepia-0', properties: 'filter: sepia(0)' },
        { class: 'vel-saturate-0', properties: 'filter: saturate(0)' },
        { class: 'vel-saturate-50', properties: 'filter: saturate(0.5)' },
        { class: 'vel-saturate-100', properties: 'filter: saturate(1)' },
        { class: 'vel-saturate-150', properties: 'filter: saturate(1.5)' },
        { class: 'vel-saturate-200', properties: 'filter: saturate(2)' },
        { class: 'vel-contrast-0', properties: 'filter: contrast(0)' },
        { class: 'vel-contrast-50', properties: 'filter: contrast(0.5)' },
        { class: 'vel-contrast-75', properties: 'filter: contrast(0.75)' },
        { class: 'vel-contrast-100', properties: 'filter: contrast(1)' },
        { class: 'vel-contrast-125', properties: 'filter: contrast(1.25)' },
        { class: 'vel-contrast-150', properties: 'filter: contrast(1.5)' },
        { class: 'vel-contrast-200', properties: 'filter: contrast(2)' },
      ]}
      examples={[
        {
          label: 'Grayscale, sepia, and invert',
          html: `<div style="display:flex;gap:12px;padding:1rem;background:#060b17;flex-wrap:wrap;">
  <div style="text-align:center;">
    <div class="vel-bg-gradient-primary vel-rounded-md" style="width:64px;height:64px;"></div>
    <p style="color:#64748b;font-size:0.7rem;margin-top:4px;">normal</p>
  </div>
  <div style="text-align:center;">
    <div class="vel-bg-gradient-primary vel-grayscale vel-rounded-md" style="width:64px;height:64px;"></div>
    <p style="color:#64748b;font-size:0.7rem;margin-top:4px;">grayscale</p>
  </div>
  <div style="text-align:center;">
    <div class="vel-bg-gradient-primary vel-sepia vel-rounded-md" style="width:64px;height:64px;"></div>
    <p style="color:#64748b;font-size:0.7rem;margin-top:4px;">sepia</p>
  </div>
  <div style="text-align:center;">
    <div class="vel-bg-gradient-primary vel-invert vel-rounded-md" style="width:64px;height:64px;"></div>
    <p style="color:#64748b;font-size:0.7rem;margin-top:4px;">invert</p>
  </div>
</div>`,
        },
        {
          label: 'Saturate and contrast',
          html: `<div style="display:flex;gap:12px;padding:1rem;background:#060b17;flex-wrap:wrap;">
  <div style="text-align:center;">
    <div class="vel-bg-gradient-sunset vel-saturate-0 vel-rounded-md" style="width:64px;height:64px;"></div>
    <p style="color:#64748b;font-size:0.7rem;margin-top:4px;">saturate-0</p>
  </div>
  <div style="text-align:center;">
    <div class="vel-bg-gradient-sunset vel-saturate-100 vel-rounded-md" style="width:64px;height:64px;"></div>
    <p style="color:#64748b;font-size:0.7rem;margin-top:4px;">saturate-100</p>
  </div>
  <div style="text-align:center;">
    <div class="vel-bg-gradient-sunset vel-saturate-200 vel-rounded-md" style="width:64px;height:64px;"></div>
    <p style="color:#64748b;font-size:0.7rem;margin-top:4px;">saturate-200</p>
  </div>
  <div style="text-align:center;">
    <div class="vel-bg-gradient-sunset vel-contrast-50 vel-rounded-md" style="width:64px;height:64px;"></div>
    <p style="color:#64748b;font-size:0.7rem;margin-top:4px;">contrast-50</p>
  </div>
  <div style="text-align:center;">
    <div class="vel-bg-gradient-sunset vel-contrast-150 vel-rounded-md" style="width:64px;height:64px;"></div>
    <p style="color:#64748b;font-size:0.7rem;margin-top:4px;">contrast-150</p>
  </div>
</div>`,
        },
      ]}
    />
  )
}
