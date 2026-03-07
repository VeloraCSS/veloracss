import DocPage from '../_components/DocPage'

export default function GridAutoFlowPage() {
  return (
    <DocPage
      title="Grid Auto Flow"
      description="Utilities for controlling how elements in a grid are auto-placed."
      source="grid.css"
      table={[
        { class: 'vel-grid-flow-row', properties: 'grid-auto-flow: row' },
        { class: 'vel-grid-flow-col', properties: 'grid-auto-flow: column' },
        { class: 'vel-grid-flow-dense', properties: 'grid-auto-flow: dense' },
        { class: 'vel-grid-flow-row-dense', properties: 'grid-auto-flow: row dense' },
        { class: 'vel-grid-flow-col-dense', properties: 'grid-auto-flow: column dense' },
      ]}
      examples={[
        {
          label: 'Auto flow row vs column',
          html: `<div class="vel-flex vel-gap-8">
  <div>
    <p style="color:#64748b;font-size:11px;margin-bottom:4px">vel-grid-flow-row</p>
    <div class="vel-grid vel-grid-cols-2 vel-grid-flow-row vel-gap-2" style="width:120px">
      <div style="background:#7c5cfc;color:#fff;padding:8px;border-radius:4px;text-align:center;font-size:12px">1</div>
      <div style="background:#7c5cfc;color:#fff;padding:8px;border-radius:4px;text-align:center;font-size:12px">2</div>
      <div style="background:#7c5cfc80;color:#fff;padding:8px;border-radius:4px;text-align:center;font-size:12px">3</div>
      <div style="background:#7c5cfc80;color:#fff;padding:8px;border-radius:4px;text-align:center;font-size:12px">4</div>
    </div>
  </div>
  <div>
    <p style="color:#64748b;font-size:11px;margin-bottom:4px">vel-grid-flow-col</p>
    <div class="vel-grid vel-grid-rows-2 vel-grid-flow-col vel-gap-2" style="width:fit-content">
      <div style="background:#0ecb81;color:#fff;padding:8px 16px;border-radius:4px;text-align:center;font-size:12px">1</div>
      <div style="background:#0ecb81;color:#fff;padding:8px 16px;border-radius:4px;text-align:center;font-size:12px">2</div>
      <div style="background:#0ecb8180;color:#fff;padding:8px 16px;border-radius:4px;text-align:center;font-size:12px">3</div>
      <div style="background:#0ecb8180;color:#fff;padding:8px 16px;border-radius:4px;text-align:center;font-size:12px">4</div>
    </div>
  </div>
</div>`,
        },
      ]}
    />
  )
}
