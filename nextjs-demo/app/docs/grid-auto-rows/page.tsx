import DocPage from '../_components/DocPage'

export default function GridAutoRowsPage() {
  return (
    <DocPage
      title="Grid Auto Rows"
      description="Utilities for controlling the size of implicitly-created grid rows."
      source="grid.css"
      table={[
        { class: 'vel-auto-rows-auto', properties: 'grid-auto-rows: auto' },
        { class: 'vel-auto-rows-min', properties: 'grid-auto-rows: min-content' },
        { class: 'vel-auto-rows-max', properties: 'grid-auto-rows: max-content' },
        { class: 'vel-auto-rows-fr', properties: 'grid-auto-rows: minmax(0, 1fr)' },
      ]}
      examples={[
        {
          label: 'Auto rows (fr)',
          html: `<div>
  <p style="color:#64748b;font-size:11px;margin-bottom:4px">vel-auto-rows-fr — implicit rows share container height equally</p>
  <div class="vel-grid vel-grid-cols-2 vel-auto-rows-fr vel-gap-3" style="height:160px">
    <div class="vel-bg-primary vel-text-white vel-rounded-md vel-flex vel-items-center vel-justify-center vel-text-center" style="padding:12px">Row A</div>
    <div class="vel-bg-primary vel-text-white vel-rounded-md vel-flex vel-items-center vel-justify-center vel-text-center vel-opacity-50" style="padding:12px">Row A</div>
    <div class="vel-bg-success vel-text-white vel-rounded-md vel-flex vel-items-center vel-justify-center vel-text-center" style="padding:12px">Row B</div>
    <div class="vel-bg-success vel-text-white vel-rounded-md vel-flex vel-items-center vel-justify-center vel-text-center vel-opacity-50" style="padding:12px">Row B</div>
  </div>
</div>`,
        },
      ]}
    />
  )
}
