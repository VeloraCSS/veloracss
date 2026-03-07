import DocPage from '../_components/DocPage'

export default function BreakInsidePage() {
  return (
    <DocPage
      title="Break Inside"
      description="Utilities for controlling how a column or page should break within an element."
      source="layout.css"
      table={[
        { class: 'vel-break-inside-auto', properties: 'break-inside: auto' },
        { class: 'vel-break-inside-avoid', properties: 'break-inside: avoid' },
        { class: 'vel-break-inside-avoid-page', properties: 'break-inside: avoid-page' },
        { class: 'vel-break-inside-avoid-column', properties: 'break-inside: avoid-column' },
      ]}
      examples={[
        {
          label: 'Break inside variants',
          html: `<div class="vel-grid vel-grid-cols-2 vel-gap-4">
  <div style="background:#1a2236;border:1px solid #1e2d45;padding:12px;border-radius:6px">
    <code style="color:#a87fff;font-size:12px">vel-break-inside-auto</code>
    <p style="color:#64748b;font-size:12px;margin-top:4px">Normal break behavior inside element</p>
  </div>
  <div style="background:#1a2236;border:1px solid #1e2d45;padding:12px;border-radius:6px">
    <code style="color:#a87fff;font-size:12px">vel-break-inside-avoid</code>
    <p style="color:#64748b;font-size:12px;margin-top:4px">Prevents any break inside element</p>
  </div>
  <div style="background:#1a2236;border:1px solid #1e2d45;padding:12px;border-radius:6px">
    <code style="color:#a87fff;font-size:12px">vel-break-inside-avoid-column</code>
    <p style="color:#64748b;font-size:12px;margin-top:4px">Prevents column break inside element</p>
  </div>
  <div style="background:#1a2236;border:1px solid #1e2d45;padding:12px;border-radius:6px">
    <code style="color:#a87fff;font-size:12px">vel-break-inside-avoid-page</code>
    <p style="color:#64748b;font-size:12px;margin-top:4px">Prevents page break inside element</p>
  </div>
</div>`,
        },
      ]}
    />
  )
}
