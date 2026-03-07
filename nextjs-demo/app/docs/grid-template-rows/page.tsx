import DocPage from '../_components/DocPage'

export default function GridTemplateRowsPage() {
  return (
    <DocPage
      title="Grid Template Rows"
      description="Utilities for specifying the rows in a grid layout."
      source="grid.css"
      table={[
        { class: 'vel-grid-rows-1', properties: 'grid-template-rows: repeat(1, minmax(0, 1fr))' },
        { class: 'vel-grid-rows-2', properties: 'grid-template-rows: repeat(2, minmax(0, 1fr))' },
        { class: 'vel-grid-rows-3', properties: 'grid-template-rows: repeat(3, minmax(0, 1fr))' },
        { class: 'vel-grid-rows-4', properties: 'grid-template-rows: repeat(4, minmax(0, 1fr))' },
        { class: 'vel-grid-rows-6', properties: 'grid-template-rows: repeat(6, minmax(0, 1fr))' },
        { class: 'vel-grid-rows-none', properties: 'grid-template-rows: none' },
      ]}
      examples={[
        {
          label: 'Explicit rows',
          html: `<div class="vel-grid vel-grid-rows-3 vel-grid-flow-col vel-gap-3" style="height:200px;width:fit-content">
  <div style="background:#7c5cfc;color:#fff;padding:12px 24px;border-radius:6px;text-align:center">Row 1</div>
  <div style="background:#7c5cfc80;color:#fff;padding:12px 24px;border-radius:6px;text-align:center">Row 2</div>
  <div style="background:#7c5cfc40;color:#fff;padding:12px 24px;border-radius:6px;text-align:center">Row 3</div>
</div>`,
        },
      ]}
    />
  )
}
