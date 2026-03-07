import DocPage from '../_components/DocPage'

export default function BreakBeforePage() {
  return (
    <DocPage
      title="Break Before"
      description="Utilities for controlling how a column or page should break before an element."
      source="layout.css"
      table={[
        { class: 'vel-break-before-auto', properties: 'break-before: auto' },
        { class: 'vel-break-before-avoid', properties: 'break-before: avoid' },
        { class: 'vel-break-before-all', properties: 'break-before: all' },
        { class: 'vel-break-before-column', properties: 'break-before: column' },
        { class: 'vel-break-before-page', properties: 'break-before: page' },
      ]}
      examples={[
        {
          label: 'Break before variants',
          html: `<div class="vel-grid vel-grid-cols-2 vel-gap-4">
  <div style="background:#1a2236;border:1px solid #1e2d45;padding:12px;border-radius:6px">
    <code style="color:#a87fff;font-size:12px">vel-break-before-auto</code>
    <p style="color:#64748b;font-size:12px;margin-top:4px">Normal column/page break behavior</p>
  </div>
  <div style="background:#1a2236;border:1px solid #1e2d45;padding:12px;border-radius:6px">
    <code style="color:#a87fff;font-size:12px">vel-break-before-column</code>
    <p style="color:#64748b;font-size:12px;margin-top:4px">Forces column break before element</p>
  </div>
  <div style="background:#1a2236;border:1px solid #1e2d45;padding:12px;border-radius:6px">
    <code style="color:#a87fff;font-size:12px">vel-break-before-avoid</code>
    <p style="color:#64748b;font-size:12px;margin-top:4px">Avoids break before element</p>
  </div>
  <div style="background:#1a2236;border:1px solid #1e2d45;padding:12px;border-radius:6px">
    <code style="color:#a87fff;font-size:12px">vel-break-before-page</code>
    <p style="color:#64748b;font-size:12px;margin-top:4px">Forces page break before element</p>
  </div>
</div>`,
        },
      ]}
    />
  )
}
