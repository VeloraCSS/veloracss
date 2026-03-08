import DocPage from '../_components/DocPage'

export default function PositionPage() {
  return (
    <DocPage
      title="Position"
      description="Utilities for controlling how an element is positioned in the document."
      source="layout.css"
      table={[
        { class: 'vel-static',   properties: 'position: static' },
        { class: 'vel-relative', properties: 'position: relative' },
        { class: 'vel-absolute', properties: 'position: absolute' },
        { class: 'vel-fixed',    properties: 'position: fixed' },
        { class: 'vel-sticky',   properties: 'position: sticky' },
      ]}
      examples={[
        {
          label: 'vel-relative + vel-absolute: position children absolutely within a container',
          html: `<div class="vel-relative" style="background:#0d1422;border:1px solid #1e2d45;height:140px;border-radius:8px;overflow:hidden">
  <span style="color:#475569;padding:12px;display:block;font-size:0.8rem">vel-relative container</span>
  <div class="vel-absolute" style="top:8px;right:8px;background:#7c5cfc;color:#fff;padding:4px 12px;border-radius:6px;font-size:0.75rem">top-right</div>
  <div class="vel-absolute" style="bottom:8px;left:8px;background:#0ecb81;color:#fff;padding:4px 12px;border-radius:6px;font-size:0.75rem">bottom-left</div>
  <div class="vel-absolute" style="top:50%;left:50%;transform:translate(-50%,-50%);background:#f0416c;color:#fff;padding:4px 12px;border-radius:6px;font-size:0.75rem">centered</div>
</div>`,
        },
        {
          label: 'vel-sticky: element sticks to top of scroll container',
          html: `<div style="height:160px;overflow-y:auto;border:1px solid #1e2d45;border-radius:8px">
  <div class="vel-sticky" style="top:0;background:#0d1422;border-bottom:1px solid #1e2d45;padding:8px 16px;font-size:0.8rem;color:#a87fff;font-weight:600">
    Sticky header — scroll down
  </div>
  ${Array.from({length:8},(_,i)=>`<div style="padding:10px 16px;border-bottom:1px solid #1a2438;font-size:0.8rem;color:#64748b">Row ${i+1}</div>`).join('')}
</div>`,
        },
        {
          label: 'Notification badge pattern — vel-absolute on vel-relative',
          html: `<div style="display:inline-flex;gap:1.5rem;padding:1rem">
  <div class="vel-relative" style="display:inline-block">
    <button class="vel-btn vel-btn-primary">Messages</button>
    <span class="vel-absolute vel-bg-danger vel-text-white vel-text-xs vel-font-bold vel-rounded-full vel-flex vel-items-center vel-justify-center" style="top:-6px;right:-6px;width:18px;height:18px;border:2px solid #060b17">3</span>
  </div>
  <div class="vel-relative" style="display:inline-block">
    <button class="vel-btn vel-btn-secondary">Alerts</button>
    <span class="vel-absolute vel-bg-warning vel-text-white vel-text-xs vel-font-bold vel-rounded-full vel-flex vel-items-center vel-justify-center" style="top:-6px;right:-6px;width:18px;height:18px;border:2px solid #060b17">!</span>
  </div>
</div>`,
        },
      ]}
    />
  )
}
