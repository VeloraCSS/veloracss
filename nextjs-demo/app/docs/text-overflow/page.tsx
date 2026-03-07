import DocPage from '../_components/DocPage'

export default function TextOverflowPage() {
  return (
    <DocPage
      title="Text Overflow"
      description="Utilities for controlling text overflow in an element."
      source="typography.css"
      table={[
        { class: 'vel-truncate', properties: 'overflow: hidden; text-overflow: ellipsis; white-space: nowrap' },
        { class: 'vel-text-ellipsis', properties: 'text-overflow: ellipsis' },
        { class: 'vel-text-clip', properties: 'text-overflow: clip' },
      ]}
      examples={[
        {
          label: 'Text overflow handling',
          html: `<div class="vel-flex vel-flex-col vel-gap-3">
  <div class="vel-truncate" style="background:#1a2236;border:1px solid #1e2d45;border-radius:6px;padding:10px 14px;max-width:300px;color:#e2e8f0">
    vel-truncate — This is a very long text that gets truncated with an ellipsis when it overflows
  </div>
  <div class="vel-overflow-ellipsis vel-overflow-hidden" style="background:#1a2236;border:1px solid #1e2d45;border-radius:6px;padding:10px 14px;max-width:300px;color:#94a3b8;white-space:nowrap">
    vel-overflow-ellipsis — Another long overflow example with overflow hidden
  </div>
</div>`,
        },
      ]}
    />
  )
}
