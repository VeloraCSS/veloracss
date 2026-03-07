import DocPage from '../_components/DocPage'

export default function PlaceItemsPage() {
  return (
    <DocPage
      title="Place Items"
      description="Utilities for controlling how items are justified and aligned at the same time."
      source="flexbox.css"
      table={[
        { class: 'vel-place-items-center', properties: 'place-items: center' },
        { class: 'vel-place-items-start', properties: 'place-items: start' },
        { class: 'vel-place-items-end', properties: 'place-items: end' },
        { class: 'vel-place-items-stretch', properties: 'place-items: stretch' },
      ]}
      examples={[
        {
          label: 'Place items variants',
          html: `<div class="vel-flex vel-gap-4">
  <div style="flex:1">
    <p style="color:#64748b;font-size:11px;margin-bottom:4px">vel-place-items-start</p>
    <div class="vel-grid vel-grid-cols-2 vel-place-items-start vel-gap-2" style="background:#1a2236;padding:8px;border-radius:6px;height:100px">
      <div style="background:#7c5cfc;color:#fff;padding:6px 10px;border-radius:4px;font-size:12px">A</div>
      <div style="background:#7c5cfc;color:#fff;padding:6px 10px;border-radius:4px;font-size:12px">B</div>
    </div>
  </div>
  <div style="flex:1">
    <p style="color:#64748b;font-size:11px;margin-bottom:4px">vel-place-items-center</p>
    <div class="vel-grid vel-grid-cols-2 vel-place-items-center vel-gap-2" style="background:#1a2236;padding:8px;border-radius:6px;height:100px">
      <div style="background:#0ecb81;color:#fff;padding:6px 10px;border-radius:4px;font-size:12px">A</div>
      <div style="background:#0ecb81;color:#fff;padding:6px 10px;border-radius:4px;font-size:12px">B</div>
    </div>
  </div>
  <div style="flex:1">
    <p style="color:#64748b;font-size:11px;margin-bottom:4px">vel-place-items-end</p>
    <div class="vel-grid vel-grid-cols-2 vel-place-items-end vel-gap-2" style="background:#1a2236;padding:8px;border-radius:6px;height:100px">
      <div style="background:#f0416c;color:#fff;padding:6px 10px;border-radius:4px;font-size:12px">A</div>
      <div style="background:#f0416c;color:#fff;padding:6px 10px;border-radius:4px;font-size:12px">B</div>
    </div>
  </div>
</div>`,
        },
      ]}
    />
  )
}
