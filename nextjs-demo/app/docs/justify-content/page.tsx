import DocPage from '../_components/DocPage'

export default function JustifyContentPage() {
  return (
    <DocPage
      title="Justify Content"
      description="Utilities for controlling how flex and grid items are positioned along a container's main axis."
      source="flexbox.css"
      table={[
        { class: 'vel-justify-start', properties: 'justify-content: flex-start' },
        { class: 'vel-justify-end', properties: 'justify-content: flex-end' },
        { class: 'vel-justify-center', properties: 'justify-content: center' },
        { class: 'vel-justify-between', properties: 'justify-content: space-between' },
        { class: 'vel-justify-around', properties: 'justify-content: space-around' },
        { class: 'vel-justify-evenly', properties: 'justify-content: space-evenly' },
      ]}
      examples={[
        {
          label: 'Start, Center, Between',
          html: `<p style="color:#64748b;font-size:11px;margin-bottom:4px">vel-justify-start</p>
<div class="vel-flex vel-justify-start vel-gap-3 vel-mb-4" style="background:#1a2236;padding:12px;border-radius:6px">
  <div style="background:#7c5cfc;color:#fff;padding:8px 16px;border-radius:6px">A</div>
  <div style="background:#7c5cfc;color:#fff;padding:8px 16px;border-radius:6px">B</div>
</div>
<p style="color:#64748b;font-size:11px;margin-bottom:4px">vel-justify-center</p>
<div class="vel-flex vel-justify-center vel-gap-3 vel-mb-4" style="background:#1a2236;padding:12px;border-radius:6px">
  <div style="background:#0ecb81;color:#fff;padding:8px 16px;border-radius:6px">A</div>
  <div style="background:#0ecb81;color:#fff;padding:8px 16px;border-radius:6px">B</div>
</div>
<p style="color:#64748b;font-size:11px;margin-bottom:4px">vel-justify-between</p>
<div class="vel-flex vel-justify-between vel-gap-3" style="background:#1a2236;padding:12px;border-radius:6px">
  <div style="background:#f0416c;color:#fff;padding:8px 16px;border-radius:6px">A</div>
  <div style="background:#f0416c;color:#fff;padding:8px 16px;border-radius:6px">B</div>
</div>`,
        },
      ]}
    />
  )
}
