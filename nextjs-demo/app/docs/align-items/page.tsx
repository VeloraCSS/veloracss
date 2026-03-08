import DocPage from '../_components/DocPage'

export default function AlignItemsPage() {
  return (
    <DocPage
      title="Align Items"
      description="Utilities for controlling how flex and grid items are positioned along a container's cross axis."
      source="flexbox.css"
      table={[
        { class: 'vel-items-start', properties: 'align-items: flex-start' },
        { class: 'vel-items-end', properties: 'align-items: flex-end' },
        { class: 'vel-items-center', properties: 'align-items: center' },
        { class: 'vel-items-baseline', properties: 'align-items: baseline' },
        { class: 'vel-items-stretch', properties: 'align-items: stretch' },
      ]}
      examples={[
        {
          label: 'Align variants',
          html: `<div class="vel-flex vel-gap-4">
  <div>
    <p style="color:#64748b;font-size:11px;margin-bottom:4px">vel-items-start</p>
    <div class="vel-flex vel-items-start vel-gap-2" style="background:#1a2236;padding:8px;border-radius:6px;height:80px">
      <div class="vel-bg-primary vel-text-white vel-rounded-sm" style="padding:6px 12px;font-size:12px">A</div>
      <div class="vel-bg-primary vel-text-white vel-rounded-sm" style="padding:16px 12px;font-size:12px">B</div>
    </div>
  </div>
  <div>
    <p style="color:#64748b;font-size:11px;margin-bottom:4px">vel-items-center</p>
    <div class="vel-flex vel-items-center vel-gap-2" style="background:#1a2236;padding:8px;border-radius:6px;height:80px">
      <div class="vel-bg-success vel-text-white vel-rounded-sm" style="padding:6px 12px;font-size:12px">A</div>
      <div class="vel-bg-success vel-text-white vel-rounded-sm" style="padding:16px 12px;font-size:12px">B</div>
    </div>
  </div>
  <div>
    <p style="color:#64748b;font-size:11px;margin-bottom:4px">vel-items-end</p>
    <div class="vel-flex vel-items-end vel-gap-2" style="background:#1a2236;padding:8px;border-radius:6px;height:80px">
      <div class="vel-bg-danger vel-text-white vel-rounded-sm" style="padding:6px 12px;font-size:12px">A</div>
      <div class="vel-bg-danger vel-text-white vel-rounded-sm" style="padding:16px 12px;font-size:12px">B</div>
    </div>
  </div>
</div>`,
        },
      ]}
    />
  )
}
