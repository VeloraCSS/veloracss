import DocPage from '../_components/DocPage'

export default function FlexWrapPage() {
  return (
    <DocPage
      title="Flex Wrap"
      description="Utilities for controlling how flex items wrap."
      source="flexbox.css"
      table={[
        { class: 'vel-flex-nowrap', properties: 'flex-wrap: nowrap' },
        { class: 'vel-flex-wrap', properties: 'flex-wrap: wrap' },
        { class: 'vel-flex-wrap-reverse', properties: 'flex-wrap: wrap-reverse' },
      ]}
      examples={[
        {
          label: 'Wrap',
          html: `<div class="vel-flex vel-flex-wrap vel-gap-3" style="width:280px">
  <div style="background:#7c5cfc;color:#fff;padding:10px 20px;border-radius:6px">Item 1</div>
  <div style="background:#7c5cfc;color:#fff;padding:10px 20px;border-radius:6px">Item 2</div>
  <div style="background:#7c5cfc;color:#fff;padding:10px 20px;border-radius:6px">Item 3</div>
  <div style="background:#7c5cfc;color:#fff;padding:10px 20px;border-radius:6px">Item 4</div>
  <div style="background:#7c5cfc;color:#fff;padding:10px 20px;border-radius:6px">Item 5</div>
</div>`,
        },
        {
          label: 'No Wrap (overflow)',
          html: `<div class="vel-flex vel-flex-nowrap vel-gap-3 vel-overflow-hidden" style="width:280px">
  <div style="background:#f0416c;color:#fff;padding:10px 20px;border-radius:6px;flex-shrink:0">Item 1</div>
  <div style="background:#f0416c;color:#fff;padding:10px 20px;border-radius:6px;flex-shrink:0">Item 2</div>
  <div style="background:#f0416c;color:#fff;padding:10px 20px;border-radius:6px;flex-shrink:0">Item 3</div>
  <div style="background:#f0416c;color:#fff;padding:10px 20px;border-radius:6px;flex-shrink:0">Item 4</div>
</div>`,
        },
      ]}
    />
  )
}
