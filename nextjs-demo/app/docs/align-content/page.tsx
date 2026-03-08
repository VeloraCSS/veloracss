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
      <div class="vel-bg-primary vel-text-white vel-rounded-sm" style="padding:6px 10px;font-size:12px">A</div>
      <div class="vel-bg-primary vel-text-white vel-rounded-sm" style="padding:6px 10px;font-size:12px">B</div>
      <div class="vel-bg-primary vel-text-white vel-rounded-sm vel-opacity-50" style="padding:6px 10px;font-size:12px">C</div>
    </div>
  </div>
  <div style="flex:1">
    <p style="color:#64748b;font-size:11px;margin-bottom:4px">vel-content-between</p>
    <div class="vel-flex vel-flex-wrap vel-content-between vel-gap-2" style="background:#1a2236;padding:8px;border-radius:6px;height:120px;width:140px">
      <div class="vel-bg-success vel-text-white vel-rounded-sm" style="padding:6px 10px;font-size:12px">A</div>
      <div class="vel-bg-success vel-text-white vel-rounded-sm" style="padding:6px 10px;font-size:12px">B</div>
      <div class="vel-bg-success vel-text-white vel-rounded-sm vel-opacity-50" style="padding:6px 10px;font-size:12px">C</div>
    </div>
  </div>
  <div style="flex:1">
    <p style="color:#64748b;font-size:11px;margin-bottom:4px">vel-content-end</p>
    <div class="vel-flex vel-flex-wrap vel-content-end vel-gap-2" style="background:#1a2236;padding:8px;border-radius:6px;height:120px;width:140px">
      <div class="vel-bg-danger vel-text-white vel-rounded-sm" style="padding:6px 10px;font-size:12px">A</div>
      <div class="vel-bg-danger vel-text-white vel-rounded-sm" style="padding:6px 10px;font-size:12px">B</div>
      <div class="vel-bg-danger vel-text-white vel-rounded-sm vel-opacity-50" style="padding:6px 10px;font-size:12px">C</div>
    </div>
  </div>
</div>`,
        },
      ]}
    />
  )
}
