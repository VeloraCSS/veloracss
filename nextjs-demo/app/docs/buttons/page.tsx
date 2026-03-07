import DocPage from '../_components/DocPage'

export default function ButtonsPage() {
  return (
    <DocPage
      title="Buttons"
      description="Styled button components with solid, outline, ghost, link, and glow variants across all semantic colors, plus size and state modifiers."
      source="button.css"
      table={[
        { class: 'vel-btn', properties: 'Base button — padding, border-radius, font-weight, transitions' },
        { class: 'vel-btn-primary', properties: 'Gradient primary background, white text' },
        { class: 'vel-btn-secondary', properties: 'Secondary color background, white text' },
        { class: 'vel-btn-success', properties: 'Success green background, white text' },
        { class: 'vel-btn-danger', properties: 'Danger red background, white text' },
        { class: 'vel-btn-warning', properties: 'Warning amber background, dark text' },
        { class: 'vel-btn-info', properties: 'Info cyan/blue background, white text' },
        { class: 'vel-btn-outline-primary', properties: 'Transparent background, primary border and text; fills on hover' },
        { class: 'vel-btn-outline-secondary', properties: 'Transparent background, secondary border and text' },
        { class: 'vel-btn-outline-success', properties: 'Transparent background, success border and text' },
        { class: 'vel-btn-outline-danger', properties: 'Transparent background, danger border and text' },
        { class: 'vel-btn-ghost', properties: 'No background or border; subtle hover fill' },
        { class: 'vel-btn-link', properties: 'Appears as an inline link, no background' },
        { class: 'vel-btn-glow-primary', properties: 'Adds primary color box-shadow glow on hover' },
        { class: 'vel-btn-xs', properties: 'Extra-small size — smaller padding and font' },
        { class: 'vel-btn-sm', properties: 'Small size' },
        { class: 'vel-btn-lg', properties: 'Large size' },
        { class: 'vel-btn-xl', properties: 'Extra-large size' },
        { class: 'vel-btn-block', properties: 'width: 100%; display: block' },
        { class: 'vel-btn-icon', properties: 'Square button sized for a single icon' },
        { class: 'vel-btn-loading', properties: 'Shows a spinner, disables pointer events' },
        { class: 'vel-btn-disabled', properties: 'Reduced opacity, cursor: not-allowed' },
      ]}
      examples={[
        {
          label: 'Solid variants',
          html: `<div style="padding:24px;background:#060b17;border-radius:12px;font-family:system-ui,sans-serif;display:flex;gap:10px;flex-wrap:wrap;">
  <button class="vel-btn vel-btn-primary">Primary</button>
  <button class="vel-btn vel-btn-secondary">Secondary</button>
  <button class="vel-btn vel-btn-success">Success</button>
  <button class="vel-btn vel-btn-danger">Danger</button>
  <button class="vel-btn vel-btn-warning">Warning</button>
  <button class="vel-btn vel-btn-info">Info</button>
</div>`,
        },
        {
          label: 'Outline & Ghost',
          html: `<div style="padding:24px;background:#060b17;border-radius:12px;font-family:system-ui,sans-serif;display:flex;gap:10px;flex-wrap:wrap;">
  <button class="vel-btn vel-btn-outline-primary">Outline Primary</button>
  <button class="vel-btn vel-btn-outline-danger">Outline Danger</button>
  <button class="vel-btn vel-btn-ghost">Ghost</button>
  <button class="vel-btn vel-btn-link">Link</button>
</div>`,
        },
        {
          label: 'Sizes',
          html: `<div style="padding:24px;background:#060b17;border-radius:12px;font-family:system-ui,sans-serif;display:flex;gap:10px;align-items:center;flex-wrap:wrap;">
  <button class="vel-btn vel-btn-primary vel-btn-xs">XS</button>
  <button class="vel-btn vel-btn-primary vel-btn-sm">SM</button>
  <button class="vel-btn vel-btn-primary">Default</button>
  <button class="vel-btn vel-btn-primary vel-btn-lg">LG</button>
  <button class="vel-btn vel-btn-primary vel-btn-xl">XL</button>
</div>`,
        },
        {
          label: 'Glow',
          html: `<div style="padding:24px;background:#060b17;border-radius:12px;font-family:system-ui,sans-serif;">
  <button class="vel-btn vel-btn-primary vel-btn-glow-primary">Glow on Hover</button>
</div>`,
        },
      ]}
    />
  )
}
