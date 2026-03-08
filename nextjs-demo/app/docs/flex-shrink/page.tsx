import DocPage from '../_components/DocPage'

export default function FlexShrinkPage() {
  return (
    <DocPage
      title="Flex Shrink"
      description="Utilities for controlling how flex items shrink."
      source="flexbox.css"
      table={[
        { class: 'vel-shrink', properties: 'flex-shrink: 1' },
        { class: 'vel-shrink-0', properties: 'flex-shrink: 0' },
      ]}
      examples={[
        {
          label: 'Shrink vs no shrink',
          html: `<div class="vel-flex vel-gap-3" style="width:300px">
  <div class="vel-shrink vel-bg-primary vel-text-white vel-rounded-md" style="padding:12px;min-width:0">vel-shrink — shrinks to fit</div>
  <div class="vel-shrink-0 vel-bg-danger vel-text-white vel-rounded-md" style="padding:12px 20px;white-space:nowrap">vel-shrink-0 (stays full size)</div>
</div>`,
        },
      ]}
    />
  )
}
