import DocPage from '../_components/DocPage'

export default function AlignContentPage() {
  return (
    <DocPage
      title="Align Content"
      description="Utilities for controlling how rows are positioned in multi-row flex and grid containers."
      source="flexbox.css"
      table={[
        { class: 'vel-content-start', properties: 'align-content: flex-start' },
        { class: 'vel-content-end', properties: 'align-content: flex-end' },
        { class: 'vel-content-center', properties: 'align-content: center' },
        { class: 'vel-content-between', properties: 'align-content: space-between' },
        { class: 'vel-content-around', properties: 'align-content: space-around' },
        { class: 'vel-content-evenly', properties: 'align-content: space-evenly' },
      ]}
      examples={[
        {
          label: 'Align content variants',
          html: `<div class="vel-flex vel-gap-4">
  <div style="flex:1">
    <p style="color:#64748b;font-size:11px;margin-bottom:4px">vel-content-start</p>
    <div class="vel-flex vel-flex-wrap vel-content-start vel-gap-2" style="background:#1a2236;padding:8px;border-radius:6px;height:120px;width:140px">
      <div style="background:#7c5cfc;color:#fff;padding:6px 10px;border-radius:4px;font-size:12px">A</div>
      <div style="background:#7c5cfc;color:#fff;padding:6px 10px;border-radius:4px;font-size:12px">B</div>
      <div style="background:#7c5cfc80;color:#fff;padding:6px 10px;border-radius:4px;font-size:12px">C</div>
    </div>
  </div>
  <div style="flex:1">
    <p style="color:#64748b;font-size:11px;margin-bottom:4px">vel-content-between</p>
    <div class="vel-flex vel-flex-wrap vel-content-between vel-gap-2" style="background:#1a2236;padding:8px;border-radius:6px;height:120px;width:140px">
      <div style="background:#0ecb81;color:#fff;padding:6px 10px;border-radius:4px;font-size:12px">A</div>
      <div style="background:#0ecb81;color:#fff;padding:6px 10px;border-radius:4px;font-size:12px">B</div>
      <div style="background:#0ecb8180;color:#fff;padding:6px 10px;border-radius:4px;font-size:12px">C</div>
    </div>
  </div>
  <div style="flex:1">
    <p style="color:#64748b;font-size:11px;margin-bottom:4px">vel-content-end</p>
    <div class="vel-flex vel-flex-wrap vel-content-end vel-gap-2" style="background:#1a2236;padding:8px;border-radius:6px;height:120px;width:140px">
      <div style="background:#f0416c;color:#fff;padding:6px 10px;border-radius:4px;font-size:12px">A</div>
      <div style="background:#f0416c;color:#fff;padding:6px 10px;border-radius:4px;font-size:12px">B</div>
      <div style="background:#f0416c80;color:#fff;padding:6px 10px;border-radius:4px;font-size:12px">C</div>
    </div>
  </div>
</div>`,
        },
      ]}
    />
  )
}
