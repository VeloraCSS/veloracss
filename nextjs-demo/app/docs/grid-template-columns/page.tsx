import DocPage from '../_components/DocPage'

export default function GridTemplateColumnsPage() {
  return (
    <DocPage
      title="Grid Template Columns"
      description="Utilities for specifying the columns in a grid layout."
      source="grid.css"
      table={[
        { class: 'vel-grid-cols-1', properties: 'grid-template-columns: repeat(1, minmax(0, 1fr))' },
        { class: 'vel-grid-cols-2', properties: 'grid-template-columns: repeat(2, minmax(0, 1fr))' },
        { class: 'vel-grid-cols-3', properties: 'grid-template-columns: repeat(3, minmax(0, 1fr))' },
        { class: 'vel-grid-cols-4', properties: 'grid-template-columns: repeat(4, minmax(0, 1fr))' },
        { class: 'vel-grid-cols-5', properties: 'grid-template-columns: repeat(5, minmax(0, 1fr))' },
        { class: 'vel-grid-cols-6', properties: 'grid-template-columns: repeat(6, minmax(0, 1fr))' },
        { class: 'vel-grid-cols-12', properties: 'grid-template-columns: repeat(12, minmax(0, 1fr))' },
        { class: 'vel-grid-cols-none', properties: 'grid-template-columns: none' },
      ]}
      examples={[
        {
          label: '3 equal columns',
          html: `<div class="vel-grid vel-grid-cols-3 vel-gap-4">
  <div class="vel-bg-primary vel-text-white vel-rounded-lg vel-text-center" style="padding:16px">1</div>
  <div class="vel-bg-primary vel-text-white vel-rounded-lg vel-text-center" style="padding:16px">2</div>
  <div class="vel-bg-primary vel-text-white vel-rounded-lg vel-text-center" style="padding:16px">3</div>
  <div class="vel-bg-primary vel-text-white vel-rounded-lg vel-text-center vel-opacity-50" style="padding:16px">4</div>
  <div class="vel-bg-primary vel-text-white vel-rounded-lg vel-text-center vel-opacity-50" style="padding:16px">5</div>
  <div class="vel-bg-primary vel-text-white vel-rounded-lg vel-text-center vel-opacity-50" style="padding:16px">6</div>
</div>`,
        },
        {
          label: '4 columns',
          html: `<div class="vel-grid vel-grid-cols-4 vel-gap-3">
  <div class="vel-bg-success vel-text-white vel-rounded-md vel-text-center" style="padding:12px">1</div>
  <div class="vel-bg-success vel-text-white vel-rounded-md vel-text-center" style="padding:12px">2</div>
  <div class="vel-bg-success vel-text-white vel-rounded-md vel-text-center" style="padding:12px">3</div>
  <div class="vel-bg-success vel-text-white vel-rounded-md vel-text-center" style="padding:12px">4</div>
</div>`,
        },
      ]}
    />
  )
}
