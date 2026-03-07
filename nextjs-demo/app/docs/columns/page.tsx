import DocPage from '../_components/DocPage'

export default function ColumnsPage() {
  return (
    <DocPage
      title="Columns"
      description="Utilities for controlling the number of columns within an element."
      source="layout.css"
      table={[
        { class: 'vel-columns-1', properties: 'columns: 1' },
        { class: 'vel-columns-2', properties: 'columns: 2' },
        { class: 'vel-columns-3', properties: 'columns: 3' },
        { class: 'vel-columns-4', properties: 'columns: 4' },
        { class: 'vel-columns-5', properties: 'columns: 5' },
        { class: 'vel-columns-6', properties: 'columns: 6' },
        { class: 'vel-columns-auto', properties: 'columns: auto' },
      ]}
      examples={[
        {
          label: 'Multi-column layout',
          html: `<div class="vel-columns-3 vel-gap-4" style="color:#94a3b8;font-size:13px;line-height:1.6">
  <p>First column content goes here. VeloraCSS multi-column layout.</p>
  <p>Second column picks up where the first left off automatically.</p>
  <p>Third column completes the layout with balanced columns.</p>
</div>`,
        },
      ]}
    />
  )
}
