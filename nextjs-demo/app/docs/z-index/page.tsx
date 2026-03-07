import DocPage from '../_components/DocPage'

export default function ZIndexPage() {
  return (
    <DocPage
      title="Z-Index"
      description="Utilities for controlling the stack order of an element."
      source="layout.css"
      table={[
        { class: 'vel-z-0', properties: 'z-index: 0' },
        { class: 'vel-z-10', properties: 'z-index: 10' },
        { class: 'vel-z-20', properties: 'z-index: 20' },
        { class: 'vel-z-30', properties: 'z-index: 30' },
        { class: 'vel-z-40', properties: 'z-index: 40' },
        { class: 'vel-z-50', properties: 'z-index: 50' },
        { class: 'vel-z-auto', properties: 'z-index: auto' },
      ]}
      examples={[
        {
          label: 'Z-index stacking',
          html: `<div class="vel-relative" style="height:100px">
  <div class="vel-absolute vel-z-10" style="left:0;top:0;width:80px;height:80px;background:#7c5cfc;border-radius:8px;display:flex;align-items:center;justify-content:center;color:#fff;font-size:12px">z-10</div>
  <div class="vel-absolute vel-z-20" style="left:40px;top:10px;width:80px;height:80px;background:#0ecb81;border-radius:8px;display:flex;align-items:center;justify-content:center;color:#fff;font-size:12px">z-20</div>
  <div class="vel-absolute vel-z-30" style="left:80px;top:20px;width:80px;height:80px;background:#f0416c;border-radius:8px;display:flex;align-items:center;justify-content:center;color:#fff;font-size:12px">z-30</div>
</div>`,
        },
      ]}
    />
  )
}
