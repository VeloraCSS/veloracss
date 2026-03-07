import DocPage from '../_components/DocPage'

export default function BoxDecorationBreakPage() {
  return (
    <DocPage
      title="Box Decoration Break"
      description="Utilities for controlling how element fragments should be rendered across multiple lines, columns, or pages."
      source="layout.css"
      table={[
        { class: 'vel-box-decoration-clone', properties: 'box-decoration-break: clone' },
        { class: 'vel-box-decoration-slice', properties: 'box-decoration-break: slice' },
      ]}
      examples={[
        {
          label: 'Box decoration break',
          html: `<div class="vel-grid vel-grid-cols-2 vel-gap-4">
  <div style="background:#1a2236;border:1px solid #1e2d45;padding:16px;border-radius:6px">
    <p style="color:#64748b;font-size:11px;margin-bottom:8px">vel-box-decoration-clone</p>
    <span class="vel-box-decoration-clone" style="background:linear-gradient(135deg,#7c5cfc,#f0416c);color:#fff;padding:4px 10px;border-radius:6px;font-size:13px;line-height:2.2">
      Each fragment gets<br>its own decoration
    </span>
  </div>
  <div style="background:#1a2236;border:1px solid #1e2d45;padding:16px;border-radius:6px">
    <p style="color:#64748b;font-size:11px;margin-bottom:8px">vel-box-decoration-slice</p>
    <span class="vel-box-decoration-slice" style="background:linear-gradient(135deg,#0ecb81,#2ebde5);color:#fff;padding:4px 10px;border-radius:6px;font-size:13px;line-height:2.2">
      Decoration is sliced<br>across fragments
    </span>
  </div>
</div>`,
        },
      ]}
    />
  )
}
