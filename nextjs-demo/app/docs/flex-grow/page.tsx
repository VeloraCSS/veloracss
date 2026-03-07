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
  <div class="vel-grow" style="background:#7c5cfc;color:#fff;padding:12px;border-radius:6px;text-align:center">vel-grow (takes available space)</div>
  <div class="vel-grow-0" style="background:#1a2236;border:1px solid #1e2d45;color:#94a3b8;padding:12px 20px;border-radius:6px;white-space:nowrap">vel-grow-0</div>
</div>`,
        },
      ]}
    />
  )
}
