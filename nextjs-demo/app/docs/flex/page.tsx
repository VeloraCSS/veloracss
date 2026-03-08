import DocPage from '../_components/DocPage'

export default function FlexPage() {
  return (
    <DocPage
      title="Flex"
      description="Utilities for controlling how flex items both grow and shrink."
      source="flexbox.css"
      table={[
        { class: 'vel-flex-1', properties: 'flex: 1 1 0%' },
        { class: 'vel-flex-auto', properties: 'flex: 1 1 auto' },
        { class: 'vel-flex-initial', properties: 'flex: 0 1 auto' },
        { class: 'vel-flex-none', properties: 'flex: none' },
      ]}
      examples={[
        {
          label: 'Flex 1 (equal share)',
          html: `<div class="vel-flex vel-gap-3">
  <div class="vel-flex-1 vel-bg-primary vel-text-white vel-rounded-md vel-text-center" style="padding:12px">flex-1</div>
  <div class="vel-flex-1 vel-bg-primary vel-text-white vel-rounded-md vel-text-center" style="padding:12px">flex-1</div>
  <div class="vel-flex-1 vel-bg-primary vel-text-white vel-rounded-md vel-text-center" style="padding:12px">flex-1</div>
</div>`,
        },
        {
          label: 'Flex none (don\'t grow/shrink)',
          html: `<div class="vel-flex vel-gap-3">
  <div class="vel-flex-1 vel-bg-surface-3 vel-text-muted vel-rounded-md vel-text-center" style="padding:12px;border:1px dashed #1e2d45">flex-1 (grows)</div>
  <div class="vel-flex-none vel-bg-success vel-text-white vel-rounded-md" style="padding:12px 24px;white-space:nowrap">flex-none (fixed)</div>
</div>`,
        },
      ]}
    />
  )
}
