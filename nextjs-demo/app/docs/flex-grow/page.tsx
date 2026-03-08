import DocPage from '../_components/DocPage'

export default function FlexGrowPage() {
  return (
    <DocPage
      title="Flex Grow"
      description="Utilities for controlling how flex items grow."
      source="flexbox.css"
      table={[
        { class: 'vel-grow', properties: 'flex-grow: 1' },
        { class: 'vel-grow-0', properties: 'flex-grow: 0' },
      ]}
      examples={[
        {
          label: 'Grow vs no grow',
          html: `<div class="vel-flex vel-gap-3">
  <div class="vel-grow vel-bg-primary vel-text-white vel-rounded-md vel-text-center" style="padding:12px">vel-grow (takes available space)</div>
  <div class="vel-grow-0 vel-bg-surface-3 vel-text-muted vel-rounded-md" style="padding:12px 20px;border:1px solid #1e2d45;white-space:nowrap">vel-grow-0</div>
</div>`,
        },
      ]}
    />
  )
}
