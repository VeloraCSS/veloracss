import DocPage from '../_components/DocPage'

export default function TooltipPage() {
  return (
    <DocPage
      title="Tooltip"
      description="CSS-only tooltips using the data-tooltip attribute. Position is controlled with data-tooltip-pos. Color variants are available for primary, success, and danger."
      source="tooltip.css"
      table={[
        { class: 'data-tooltip="text"', properties: 'Activates tooltip — text content shown via attr() in ::before pseudo-element' },
        { class: 'data-tooltip-pos="top"', properties: 'Tooltip appears above the element (default)' },
        { class: 'data-tooltip-pos="bottom"', properties: 'Tooltip appears below the element' },
        { class: 'data-tooltip-pos="left"', properties: 'Tooltip appears to the left' },
        { class: 'data-tooltip-pos="right"', properties: 'Tooltip appears to the right' },
        { class: 'vel-tooltip-primary', properties: 'Primary purple tooltip background' },
        { class: 'vel-tooltip-success', properties: 'Success green tooltip background' },
        { class: 'vel-tooltip-danger', properties: 'Danger red tooltip background' },
      ]}
      examples={[
        {
          label: 'Basic tooltip (hover to see)',
          html: `<div style="padding:48px;background:#060b17;border-radius:12px;font-family:system-ui,sans-serif;display:flex;justify-content:center;">
  <button class="vel-btn vel-btn-secondary" data-tooltip="This is a tooltip">Hover me</button>
</div>`,
        },
        {
          label: 'Positions',
          html: `<div style="padding:48px;background:#060b17;border-radius:12px;font-family:system-ui,sans-serif;display:flex;gap:16px;justify-content:center;flex-wrap:wrap;">
  <button class="vel-btn vel-btn-secondary" data-tooltip="Top tooltip" data-tooltip-pos="top">Top</button>
  <button class="vel-btn vel-btn-secondary" data-tooltip="Bottom tooltip" data-tooltip-pos="bottom">Bottom</button>
  <button class="vel-btn vel-btn-secondary" data-tooltip="Left tooltip" data-tooltip-pos="left">Left</button>
  <button class="vel-btn vel-btn-secondary" data-tooltip="Right tooltip" data-tooltip-pos="right">Right</button>
</div>`,
        },
        {
          label: 'Color variants',
          html: `<div style="padding:48px;background:#060b17;border-radius:12px;font-family:system-ui,sans-serif;display:flex;gap:16px;justify-content:center;flex-wrap:wrap;">
  <button class="vel-btn vel-btn-secondary vel-tooltip-primary" data-tooltip="Primary">Primary</button>
  <button class="vel-btn vel-btn-secondary vel-tooltip-success" data-tooltip="Success">Success</button>
  <button class="vel-btn vel-btn-secondary vel-tooltip-danger" data-tooltip="Danger">Danger</button>
</div>`,
        },
      ]}
    />
  )
}
