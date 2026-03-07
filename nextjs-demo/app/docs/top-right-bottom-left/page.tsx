import DocPage from '../_components/DocPage'

export default function TopRightBottomLeftPage() {
  return (
    <DocPage
      title="Top / Right / Bottom / Left"
      description="Utilities for controlling the placement of positioned elements."
      source="layout.css"
      table={[
        { class: 'vel-inset-0', properties: 'inset: 0px' },
        { class: 'vel-inset-auto', properties: 'inset: auto' },
        { class: 'vel-inset-x-0', properties: 'left: 0px; right: 0px' },
        { class: 'vel-inset-y-0', properties: 'top: 0px; bottom: 0px' },
        { class: 'vel-top-0', properties: 'top: 0px' },
        { class: 'vel-top-auto', properties: 'top: auto' },
        { class: 'vel-right-0', properties: 'right: 0px' },
        { class: 'vel-right-auto', properties: 'right: auto' },
        { class: 'vel-bottom-0', properties: 'bottom: 0px' },
        { class: 'vel-bottom-auto', properties: 'bottom: auto' },
        { class: 'vel-left-0', properties: 'left: 0px' },
        { class: 'vel-left-auto', properties: 'left: auto' },
      ]}
      examples={[
        {
          label: 'Absolute positioning',
          html: `<div class="vel-relative" style="background:#1a2236;border:1px solid #1e2d45;height:140px;border-radius:8px">
  <div class="vel-absolute vel-top-0 vel-left-0" style="background:#7c5cfc;color:#fff;padding:4px 10px;border-radius:0 0 6px 0;font-size:11px">top-0 left-0</div>
  <div class="vel-absolute vel-top-0 vel-right-0" style="background:#0ecb81;color:#fff;padding:4px 10px;border-radius:0 0 0 6px;font-size:11px">top-0 right-0</div>
  <div class="vel-absolute vel-bottom-0 vel-left-0" style="background:#f0416c;color:#fff;padding:4px 10px;border-radius:0 6px 0 0;font-size:11px">bottom-0 left-0</div>
  <div class="vel-absolute vel-bottom-0 vel-right-0" style="background:#ff9d00;color:#1c1200;padding:4px 10px;border-radius:6px 0 0 0;font-size:11px">bottom-0 right-0</div>
  <div class="vel-absolute vel-inset-0 vel-flex vel-items-center vel-justify-center" style="pointer-events:none">
    <span style="color:#64748b;font-size:12px">inset-0 (covers all)</span>
  </div>
</div>`,
        },
      ]}
    />
  )
}
