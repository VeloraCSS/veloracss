import DocPage from '../_components/DocPage'

export default function JustifyItemsPage() {
  return (
    <DocPage
      title="Justify Items"
      description="Utilities for controlling how grid items are aligned along their inline axis."
      source="flexbox.css"
      table={[
        { class: 'vel-justify-items-start', properties: 'justify-items: start' },
        { class: 'vel-justify-items-end', properties: 'justify-items: end' },
        { class: 'vel-justify-items-center', properties: 'justify-items: center' },
        { class: 'vel-justify-items-stretch', properties: 'justify-items: stretch' },
      ]}
      examples={[
        {
          label: 'Justify items variants',
          html: `<div class="vel-flex vel-gap-4">
  <div style="flex:1">
    <p style="color:#64748b;font-size:11px;margin-bottom:4px">vel-justify-items-start</p>
    <div class="vel-grid vel-grid-cols-2 vel-justify-items-start vel-gap-2" style="background:#1a2236;padding:8px;border-radius:6px">
      <div style="background:#7c5cfc;color:#fff;padding:6px 12px;border-radius:4px;font-size:12px">A</div>
      <div style="background:#7c5cfc;color:#fff;padding:6px 12px;border-radius:4px;font-size:12px">B</div>
    </div>
  </div>
  <div style="flex:1">
    <p style="color:#64748b;font-size:11px;margin-bottom:4px">vel-justify-items-center</p>
    <div class="vel-grid vel-grid-cols-2 vel-justify-items-center vel-gap-2" style="background:#1a2236;padding:8px;border-radius:6px">
      <div style="background:#0ecb81;color:#fff;padding:6px 12px;border-radius:4px;font-size:12px">A</div>
      <div style="background:#0ecb81;color:#fff;padding:6px 12px;border-radius:4px;font-size:12px">B</div>
    </div>
  </div>
  <div style="flex:1">
    <p style="color:#64748b;font-size:11px;margin-bottom:4px">vel-justify-items-end</p>
    <div class="vel-grid vel-grid-cols-2 vel-justify-items-end vel-gap-2" style="background:#1a2236;padding:8px;border-radius:6px">
      <div style="background:#f0416c;color:#fff;padding:6px 12px;border-radius:4px;font-size:12px">A</div>
      <div style="background:#f0416c;color:#fff;padding:6px 12px;border-radius:4px;font-size:12px">B</div>
    </div>
  </div>
</div>`,
        },
      ]}
    />
  )
}
