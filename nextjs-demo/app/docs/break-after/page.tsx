import DocPage from '../_components/DocPage'

export default function BreakAfterPage() {
  return (
    <DocPage
      title="Break After"
      description="Utilities for controlling how a column or page should break after an element."
      source="layout.css"
      table={[
        { class: 'vel-break-after-auto', properties: 'break-after: auto' },
        { class: 'vel-break-after-avoid', properties: 'break-after: avoid' },
        { class: 'vel-break-after-all', properties: 'break-after: all' },
        { class: 'vel-break-after-column', properties: 'break-after: column' },
        { class: 'vel-break-after-page', properties: 'break-after: page' },
      ]}
      examples={[
        {
          label: 'Break after variants',
          html: `<div class="vel-grid vel-grid-cols-2 vel-gap-4">
  <div style="background:#1a2236;border:1px solid #1e2d45;padding:12px;border-radius:6px">
    <code style="color:#a87fff;font-size:12px">vel-break-after-auto</code>
    <p style="color:#64748b;font-size:12px;margin-top:4px">Normal column/page break behavior</p>
  </div>
  <div style="background:#1a2236;border:1px solid #1e2d45;padding:12px;border-radius:6px">
    <code style="color:#a87fff;font-size:12px">vel-break-after-column</code>
    <p style="color:#64748b;font-size:12px;margin-top:4px">Forces column break after element</p>
  </div>
  <div style="background:#1a2236;border:1px solid #1e2d45;padding:12px;border-radius:6px">
    <code style="color:#a87fff;font-size:12px">vel-break-after-avoid</code>
    <p style="color:#64748b;font-size:12px;margin-top:4px">Avoids break after element</p>
  </div>
  <div style="background:#1a2236;border:1px solid #1e2d45;padding:12px;border-radius:6px">
    <code style="color:#a87fff;font-size:12px">vel-break-after-page</code>
    <p style="color:#64748b;font-size:12px;margin-top:4px">Forces page break after element</p>
  </div>
</div>`,
        },
      ]}
    />
  )
}
