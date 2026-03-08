import DocPage from '../_components/DocPage'

export default function DisplayPage() {
  return (
    <DocPage
      title="Display"
      description="Utilities for controlling the display type of an element."
      source="layout.css"
      table={[
        { class: 'vel-block', properties: 'display: block' },
        { class: 'vel-inline-block', properties: 'display: inline-block' },
        { class: 'vel-inline', properties: 'display: inline' },
        { class: 'vel-flex', properties: 'display: flex' },
        { class: 'vel-inline-flex', properties: 'display: inline-flex' },
        { class: 'vel-grid', properties: 'display: grid' },
        { class: 'vel-inline-grid', properties: 'display: inline-grid' },
        { class: 'vel-hidden', properties: 'display: none' },
        { class: 'vel-contents', properties: 'display: contents' },
        { class: 'vel-table', properties: 'display: table' },
        { class: 'vel-table-row', properties: 'display: table-row' },
        { class: 'vel-table-cell', properties: 'display: table-cell' },
      ]}
      examples={[
        {
          label: 'Block vs inline',
          html: `<div class="vel-flex vel-gap-4 vel-items-center vel-flex-wrap">
  <span class="vel-block vel-bg-primary vel-text-white vel-rounded-md vel-text-center" style="padding:8px 16px;width:120px">vel-block</span>
  <span class="vel-inline-block vel-bg-success vel-text-white vel-rounded-md" style="padding:8px 16px">vel-inline-block</span>
  <span class="vel-inline vel-bg-info vel-text-white vel-rounded-md" style="padding:4px 12px">vel-inline</span>
</div>`,
        },
        {
          label: 'Flex and Grid',
          html: `<div class="vel-flex vel-gap-3 vel-mb-4">
  <div class="vel-text-center vel-rounded-md" style="background:#7c5cfc20;border:1px solid #7c5cfc40;color:#a87fff;padding:12px 20px">Flex item</div>
  <div class="vel-text-center vel-rounded-md" style="background:#7c5cfc20;border:1px solid #7c5cfc40;color:#a87fff;padding:12px 20px">Flex item</div>
  <div class="vel-text-center vel-rounded-md" style="background:#7c5cfc20;border:1px solid #7c5cfc40;color:#a87fff;padding:12px 20px">Flex item</div>
</div>
<div class="vel-grid vel-grid-cols-3 vel-gap-3">
  <div class="vel-text-center vel-rounded-md" style="background:#0ecb8120;border:1px solid #0ecb8140;color:#0ecb81;padding:12px">Grid 1</div>
  <div class="vel-text-center vel-rounded-md" style="background:#0ecb8120;border:1px solid #0ecb8140;color:#0ecb81;padding:12px">Grid 2</div>
  <div class="vel-text-center vel-rounded-md" style="background:#0ecb8120;border:1px solid #0ecb8140;color:#0ecb81;padding:12px">Grid 3</div>
</div>`,
        },
      ]}
    />
  )
}
