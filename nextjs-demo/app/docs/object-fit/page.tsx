import DocPage from '../_components/DocPage'

export default function ObjectFitPage() {
  return (
    <DocPage
      title="Object Fit"
      description="Utilities for controlling how a replaced element's content should be resized."
      source="layout.css"
      table={[
        { class: 'vel-object-contain', properties: 'object-fit: contain' },
        { class: 'vel-object-cover', properties: 'object-fit: cover' },
        { class: 'vel-object-fill', properties: 'object-fit: fill' },
        { class: 'vel-object-none', properties: 'object-fit: none' },
        { class: 'vel-object-scale-down', properties: 'object-fit: scale-down' },
      ]}
      examples={[
        {
          label: 'Object fit variants',
          html: `<div class="vel-flex vel-gap-4">
  <div>
    <p style="color:#64748b;font-size:11px;margin-bottom:4px">vel-object-cover</p>
    <div style="width:100px;height:80px;background:#1a2236;border:1px solid #1e2d45;border-radius:6px;overflow:hidden">
      <div class="vel-object-cover" style="width:100%;height:100%;background:linear-gradient(135deg,#7c5cfc,#f0416c)"></div>
    </div>
  </div>
  <div>
    <p style="color:#64748b;font-size:11px;margin-bottom:4px">vel-object-contain</p>
    <div style="width:100px;height:80px;background:#1a2236;border:1px solid #1e2d45;border-radius:6px;overflow:hidden;display:flex;align-items:center;justify-content:center">
      <div style="width:60px;height:40px;background:linear-gradient(135deg,#0ecb81,#2ebde5);border-radius:4px"></div>
    </div>
  </div>
</div>`,
        },
      ]}
    />
  )
}
