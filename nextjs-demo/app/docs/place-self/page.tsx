import DocPage from '../_components/DocPage'

export default function PlaceSelfPage() {
  return (
    <DocPage
      title="Place Self"
      description="Utilities for controlling how an individual item is justified and aligned at the same time."
      source="flexbox.css"
      table={[
        { class: 'vel-place-self-auto', properties: 'place-self: auto' },
        { class: 'vel-place-self-center', properties: 'place-self: center' },
        { class: 'vel-place-self-start', properties: 'place-self: start' },
        { class: 'vel-place-self-end', properties: 'place-self: end' },
        { class: 'vel-place-self-stretch', properties: 'place-self: stretch' },
      ]}
      examples={[
        {
          label: 'Per-item place-self',
          html: `<div class="vel-grid vel-grid-cols-3 vel-gap-3" style="background:#1a2236;padding:12px;border-radius:6px;height:140px">
  <div class="vel-place-self-start" style="background:#7c5cfc;color:#fff;padding:8px 12px;border-radius:6px;font-size:12px">self-start</div>
  <div class="vel-place-self-center" style="background:#0ecb81;color:#fff;padding:8px 12px;border-radius:6px;font-size:12px">self-center</div>
  <div class="vel-place-self-end" style="background:#f0416c;color:#fff;padding:8px 12px;border-radius:6px;font-size:12px">self-end</div>
</div>`,
        },
      ]}
    />
  )
}
