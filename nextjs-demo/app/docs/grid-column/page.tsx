import DocPage from '../_components/DocPage'

export default function GridColumnPage() {
  return (
    <DocPage
      title="Grid Column"
      description="Utilities for controlling how elements are sized and placed across grid columns."
      source="grid.css"
      table={[
        { class: 'vel-col-auto', properties: 'grid-column: auto' },
        { class: 'vel-col-span-1', properties: 'grid-column: span 1 / span 1' },
        { class: 'vel-col-span-2', properties: 'grid-column: span 2 / span 2' },
        { class: 'vel-col-span-3', properties: 'grid-column: span 3 / span 3' },
        { class: 'vel-col-span-4', properties: 'grid-column: span 4 / span 4' },
        { class: 'vel-col-span-6', properties: 'grid-column: span 6 / span 6' },
        { class: 'vel-col-span-full', properties: 'grid-column: 1 / -1' },
        { class: 'vel-col-start-1', properties: 'grid-column-start: 1' },
        { class: 'vel-col-end-1', properties: 'grid-column-end: 1' },
      ]}
      examples={[
        {
          label: 'Column span',
          html: `<div class="vel-grid vel-grid-cols-4 vel-gap-3">
  <div class="vel-col-span-2 vel-bg-primary vel-text-white vel-rounded-md vel-text-center" style="padding:12px">col-span-2</div>
  <div class="vel-bg-surface-3 vel-text-muted vel-rounded-md vel-text-center" style="padding:12px;border:1px solid #1e2d45">1</div>
  <div class="vel-bg-surface-3 vel-text-muted vel-rounded-md vel-text-center" style="padding:12px;border:1px solid #1e2d45">1</div>
  <div class="vel-col-span-4 vel-bg-success vel-text-white vel-rounded-md vel-text-center" style="padding:12px">col-span-4 (full width)</div>
</div>`,
        },
      ]}
    />
  )
}
