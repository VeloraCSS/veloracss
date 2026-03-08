import DocPage from '../_components/DocPage'

export default function GridAutoColumnsPage() {
  return (
    <DocPage
      title="Grid Auto Columns"
      description="Utilities for controlling the size of implicitly-created grid columns."
      source="grid.css"
      table={[
        { class: 'vel-auto-cols-auto', properties: 'grid-auto-columns: auto' },
        { class: 'vel-auto-cols-min', properties: 'grid-auto-columns: min-content' },
        { class: 'vel-auto-cols-max', properties: 'grid-auto-columns: max-content' },
        { class: 'vel-auto-cols-fr', properties: 'grid-auto-columns: minmax(0, 1fr)' },
      ]}
      examples={[
        {
          label: 'Auto columns (fr)',
          html: `<div>
  <p style="color:#64748b;font-size:11px;margin-bottom:4px">vel-grid-flow-col + vel-auto-cols-fr — implicit columns share available space equally</p>
  <div class="vel-grid vel-grid-flow-col vel-auto-cols-fr vel-gap-3">
    <div class="vel-bg-primary vel-text-white vel-rounded-md vel-text-center" style="padding:12px">Auto A</div>
    <div class="vel-bg-primary vel-text-white vel-rounded-md vel-text-center vel-opacity-60" style="padding:12px">Auto B</div>
    <div class="vel-bg-primary vel-text-white vel-rounded-md vel-text-center vel-opacity-30" style="padding:12px">Auto C</div>
  </div>
</div>`,
        },
      ]}
    />
  )
}
