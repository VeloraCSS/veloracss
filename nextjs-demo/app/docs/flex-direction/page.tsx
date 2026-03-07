import DocPage from '../_components/DocPage'

export default function FlexDirectionPage() {
  return (
    <DocPage
      title="Flex Direction"
      description="Utilities for controlling the direction of flex items."
      source="flexbox.css"
      table={[
        { class: 'vel-flex-row', properties: 'flex-direction: row' },
        { class: 'vel-flex-row-reverse', properties: 'flex-direction: row-reverse' },
        { class: 'vel-flex-col', properties: 'flex-direction: column' },
        { class: 'vel-flex-col-reverse', properties: 'flex-direction: column-reverse' },
      ]}
      examples={[
        {
          label: 'Row (default)',
          html: `<div class="vel-flex vel-flex-row vel-gap-3">
  <div style="background:#7c5cfc;color:#fff;padding:10px 18px;border-radius:6px">1</div>
  <div style="background:#7c5cfc;color:#fff;padding:10px 18px;border-radius:6px">2</div>
  <div style="background:#7c5cfc;color:#fff;padding:10px 18px;border-radius:6px">3</div>
</div>`,
        },
        {
          label: 'Column',
          html: `<div class="vel-flex vel-flex-col vel-gap-3" style="width:fit-content">
  <div style="background:#0ecb81;color:#fff;padding:10px 32px;border-radius:6px">1</div>
  <div style="background:#0ecb81;color:#fff;padding:10px 32px;border-radius:6px">2</div>
  <div style="background:#0ecb81;color:#fff;padding:10px 32px;border-radius:6px">3</div>
</div>`,
        },
        {
          label: 'Row Reverse',
          html: `<div class="vel-flex vel-flex-row-reverse vel-gap-3">
  <div style="background:#f0416c;color:#fff;padding:10px 18px;border-radius:6px">1</div>
  <div style="background:#f0416c;color:#fff;padding:10px 18px;border-radius:6px">2</div>
  <div style="background:#f0416c;color:#fff;padding:10px 18px;border-radius:6px">3</div>
</div>`,
        },
      ]}
    />
  )
}
