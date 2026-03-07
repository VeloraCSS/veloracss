import DocPage from '../_components/DocPage'

export default function PositionPage() {
  return (
    <DocPage
      title="Position"
      description="Utilities for controlling how an element is positioned in the document."
      source="layout.css"
      table={[
        { class: 'vel-static', properties: 'position: static' },
        { class: 'vel-relative', properties: 'position: relative' },
        { class: 'vel-absolute', properties: 'position: absolute' },
        { class: 'vel-fixed', properties: 'position: fixed' },
        { class: 'vel-sticky', properties: 'position: sticky' },
      ]}
      examples={[
        {
          label: 'Relative vs absolute',
          html: `<div class="vel-relative" style="background:#1a2236;border:1px solid #1e2d45;height:120px;border-radius:8px">
  <span style="color:#64748b;padding:12px;display:block">vel-relative container</span>
  <div class="vel-absolute" style="top:8px;right:8px;background:#7c5cfc;color:#fff;padding:4px 12px;border-radius:6px;font-size:12px">vel-absolute (top-right)</div>
</div>`,
        },
      ]}
    />
  )
}
