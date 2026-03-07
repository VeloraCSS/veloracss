import DocPage from '../_components/DocPage'

export default function BoxSizingPage() {
  return (
    <DocPage
      title="Box Sizing"
      description="Utilities for controlling how the browser should calculate the total size of an element."
      source="layout.css"
      table={[
        { class: 'vel-box-border', properties: 'box-sizing: border-box' },
        { class: 'vel-box-content', properties: 'box-sizing: content-box' },
      ]}
      examples={[
        {
          label: 'Border-box sizing',
          html: `<div class="vel-flex vel-gap-4">
  <div>
    <p style="color:#64748b;font-size:11px;margin-bottom:4px">vel-box-border (border-box)</p>
    <div class="vel-box-border" style="width:160px;padding:16px;border:4px solid #7c5cfc;background:#1a2236;border-radius:6px;color:#a87fff;font-size:12px">width:160px includes padding+border</div>
  </div>
</div>`,
        },
      ]}
    />
  )
}
