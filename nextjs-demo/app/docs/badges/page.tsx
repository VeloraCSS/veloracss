import DocPage from '../_components/DocPage'

export default function BadgesPage() {
  return (
    <DocPage
      title="Badges"
      description="Compact inline labels for status, counts, and tags. Supports all semantic colors, size variants, square style, and a dot indicator mode."
      source="badge.css"
      table={[
        { class: 'vel-badge', properties: 'Base badge — inline-flex, small font, border-radius, padding' },
        { class: 'vel-badge-primary', properties: 'Primary color background and text' },
        { class: 'vel-badge-secondary', properties: 'Secondary color background and text' },
        { class: 'vel-badge-success', properties: 'Success green background and text' },
        { class: 'vel-badge-danger', properties: 'Danger red background and text' },
        { class: 'vel-badge-warning', properties: 'Warning amber background and text' },
        { class: 'vel-badge-info', properties: 'Info blue background and text' },
        { class: 'vel-badge-neutral', properties: 'Neutral/muted background and text' },
        { class: 'vel-badge-sm', properties: 'Smaller padding and font size' },
        { class: 'vel-badge-lg', properties: 'Larger padding and font size' },
        { class: 'vel-badge-square', properties: 'Removes border-radius for a rectangular shape' },
        { class: 'vel-badge-dot', properties: 'Renders as a small filled circle indicator (no text)' },
      ]}
      examples={[
        {
          label: 'Color variants',
          html: `<div style="padding:24px;background:#060b17;border-radius:12px;font-family:system-ui,sans-serif;display:flex;gap:8px;flex-wrap:wrap;align-items:center;">
  <span class="vel-badge vel-badge-primary">Primary</span>
  <span class="vel-badge vel-badge-secondary">Secondary</span>
  <span class="vel-badge vel-badge-success">Success</span>
  <span class="vel-badge vel-badge-danger">Danger</span>
  <span class="vel-badge vel-badge-warning">Warning</span>
  <span class="vel-badge vel-badge-info">Info</span>
  <span class="vel-badge vel-badge-neutral">Neutral</span>
</div>`,
        },
        {
          label: 'Sizes',
          html: `<div style="padding:24px;background:#060b17;border-radius:12px;font-family:system-ui,sans-serif;display:flex;gap:10px;align-items:center;">
  <span class="vel-badge vel-badge-primary vel-badge-sm">Small</span>
  <span class="vel-badge vel-badge-primary">Default</span>
  <span class="vel-badge vel-badge-primary vel-badge-lg">Large</span>
</div>`,
        },
        {
          label: 'With dot indicator',
          html: `<div style="padding:24px;background:#060b17;border-radius:12px;font-family:system-ui,sans-serif;display:flex;gap:12px;align-items:center;">
  <span class="vel-badge vel-badge-success vel-badge-dot"></span>
  <span class="vel-badge vel-badge-danger vel-badge-dot"></span>
  <span class="vel-badge vel-badge-warning vel-badge-dot"></span>
</div>`,
        },
      ]}
    />
  )
}
