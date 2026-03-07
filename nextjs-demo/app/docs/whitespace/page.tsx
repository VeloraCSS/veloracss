import DocPage from '../_components/DocPage'

export default function WhitespacePage() {
  return (
    <DocPage
      title="Whitespace"
      description="Utilities for controlling an element's white-space property."
      source="typography.css"
      table={[
        { class: 'vel-whitespace-normal', properties: 'white-space: normal' },
        { class: 'vel-whitespace-nowrap', properties: 'white-space: nowrap' },
        { class: 'vel-whitespace-pre', properties: 'white-space: pre' },
        { class: 'vel-whitespace-pre-line', properties: 'white-space: pre-line' },
        { class: 'vel-whitespace-pre-wrap', properties: 'white-space: pre-wrap' },
        { class: 'vel-whitespace-break-spaces', properties: 'white-space: break-spaces' },
      ]}
      examples={[
        {
          label: 'Whitespace wrapping',
          html: `<div class="vel-grid vel-grid-cols-2 vel-gap-4">
  <div>
    <p style="color:#64748b;font-size:11px;margin-bottom:4px">vel-whitespace-normal</p>
    <div class="vel-whitespace-normal" style="background:#1a2236;border:1px solid #1e2d45;border-radius:6px;padding:10px;font-size:12px;color:#94a3b8;width:150px">Text wraps normally across multiple lines</div>
  </div>
  <div>
    <p style="color:#64748b;font-size:11px;margin-bottom:4px">vel-whitespace-nowrap</p>
    <div class="vel-whitespace-nowrap vel-overflow-hidden" style="background:#1a2236;border:1px solid #1e2d45;border-radius:6px;padding:10px;font-size:12px;color:#94a3b8;width:150px">Text stays on one line and clips</div>
  </div>
</div>`,
        },
      ]}
    />
  )
}
