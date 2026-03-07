import DocPage from '../_components/DocPage'

export default function GridRowPage() {
  return (
    <DocPage
      title="Grid Row"
      description="Utilities for controlling how elements are sized and placed across grid rows."
      source="grid.css"
      table={[
        { class: 'vel-row-auto', properties: 'grid-row: auto' },
        { class: 'vel-row-span-1', properties: 'grid-row: span 1 / span 1' },
        { class: 'vel-row-span-2', properties: 'grid-row: span 2 / span 2' },
        { class: 'vel-row-span-3', properties: 'grid-row: span 3 / span 3' },
        { class: 'vel-row-span-full', properties: 'grid-row: 1 / -1' },
      ]}
      examples={[
        {
          label: 'Row span',
          html: `<div class="vel-grid vel-grid-cols-3 vel-grid-rows-3 vel-gap-3" style="height:200px">
  <div class="vel-row-span-2" style="background:#7c5cfc;color:#fff;padding:12px;border-radius:6px;text-align:center;display:flex;align-items:center;justify-content:center">row-span-2</div>
  <div style="background:#1a2236;border:1px solid #1e2d45;color:#94a3b8;padding:12px;border-radius:6px;text-align:center">1</div>
  <div style="background:#1a2236;border:1px solid #1e2d45;color:#94a3b8;padding:12px;border-radius:6px;text-align:center">1</div>
  <div style="background:#0ecb81;color:#fff;padding:12px;border-radius:6px;text-align:center">A</div>
  <div style="background:#0ecb81;color:#fff;padding:12px;border-radius:6px;text-align:center">B</div>
  <div class="vel-col-span-3" style="background:#f0416c;color:#fff;padding:12px;border-radius:6px;text-align:center">col-span-3</div>
</div>`,
        },
      ]}
    />
  )
}
