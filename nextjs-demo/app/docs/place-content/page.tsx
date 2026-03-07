import DocPage from '../_components/DocPage'

export default function PlaceContentPage() {
  return (
    <DocPage
      title="Place Content"
      description="Utilities for controlling how content is justified and aligned at the same time."
      source="flexbox.css"
      table={[
        { class: 'vel-place-content-center', properties: 'place-content: center' },
        { class: 'vel-place-content-start', properties: 'place-content: start' },
        { class: 'vel-place-content-end', properties: 'place-content: end' },
        { class: 'vel-place-content-between', properties: 'place-content: space-between' },
      ]}
      examples={[
        {
          label: 'Place content variants',
          html: `<div class="vel-flex vel-gap-4">
  <div style="flex:1">
    <p style="color:#64748b;font-size:11px;margin-bottom:4px">vel-place-content-start</p>
    <div class="vel-grid vel-grid-cols-2 vel-place-content-start vel-gap-2" style="background:#1a2236;padding:8px;border-radius:6px;height:120px">
      <div style="background:#7c5cfc;color:#fff;padding:8px;border-radius:4px;text-align:center;font-size:12px">A</div>
      <div style="background:#7c5cfc;color:#fff;padding:8px;border-radius:4px;text-align:center;font-size:12px">B</div>
    </div>
  </div>
  <div style="flex:1">
    <p style="color:#64748b;font-size:11px;margin-bottom:4px">vel-place-content-center</p>
    <div class="vel-grid vel-grid-cols-2 vel-place-content-center vel-gap-2" style="background:#1a2236;padding:8px;border-radius:6px;height:120px">
      <div style="background:#0ecb81;color:#fff;padding:8px;border-radius:4px;text-align:center;font-size:12px">A</div>
      <div style="background:#0ecb81;color:#fff;padding:8px;border-radius:4px;text-align:center;font-size:12px">B</div>
    </div>
  </div>
  <div style="flex:1">
    <p style="color:#64748b;font-size:11px;margin-bottom:4px">vel-place-content-end</p>
    <div class="vel-grid vel-grid-cols-2 vel-place-content-end vel-gap-2" style="background:#1a2236;padding:8px;border-radius:6px;height:120px">
      <div style="background:#f0416c;color:#fff;padding:8px;border-radius:4px;text-align:center;font-size:12px">A</div>
      <div style="background:#f0416c;color:#fff;padding:8px;border-radius:4px;text-align:center;font-size:12px">B</div>
    </div>
  </div>
</div>`,
        },
      ]}
    />
  )
}
