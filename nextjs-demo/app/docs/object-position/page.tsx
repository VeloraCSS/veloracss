import DocPage from '../_components/DocPage'

export default function ObjectPositionPage() {
  return (
    <DocPage
      title="Object Position"
      description="Utilities for controlling how a replaced element's content should be positioned."
      source="layout.css"
      table={[
        { class: 'vel-object-center', properties: 'object-position: center' },
        { class: 'vel-object-top', properties: 'object-position: top' },
        { class: 'vel-object-bottom', properties: 'object-position: bottom' },
        { class: 'vel-object-left', properties: 'object-position: left' },
        { class: 'vel-object-right', properties: 'object-position: right' },
        { class: 'vel-object-left-top', properties: 'object-position: left top' },
        { class: 'vel-object-right-top', properties: 'object-position: right top' },
        { class: 'vel-object-left-bottom', properties: 'object-position: left bottom' },
        { class: 'vel-object-right-bottom', properties: 'object-position: right bottom' },
      ]}
      examples={[
        {
          label: 'Object position controls which part of an image is visible when cropped',
          html: `<div style="display:flex;gap:1rem;flex-wrap:wrap;align-items:flex-start">
  ${['top','center','bottom','left','right'].map(pos => `<div style="text-align:center">
    <div style="width:100px;height:68px;overflow:hidden;border-radius:0.375rem;border:1px solid #1e2d45">
      <div style="width:200px;height:136px;background:linear-gradient(135deg,#7c5cfc 0%,#0ecb81 50%,#f0416c 100%);object-fit:cover;object-position:${pos};transform:translateX(${pos==='right'?'-50%':pos==='center'?'-25%':'0'}) translateY(${pos==='bottom'?'-50%':pos==='center'?'-17%':'0'})"></div>
    </div>
    <p style="font-size:0.68rem;color:#64748b;margin-top:0.35rem;font-family:monospace">vel-object-${pos}</p>
  </div>`).join('')}
</div>`,
        },
        {
          label: 'Using vel-object-cover + vel-object-top on an image element',
          html: `<div style="display:flex;gap:1.5rem;align-items:flex-start">
  <div>
    <div style="width:140px;height:90px;border-radius:0.5rem;border:1px solid #1e2d45;overflow:hidden;background:linear-gradient(to bottom,#7c5cfc,#a87fff,#060b17)"></div>
    <p style="font-size:0.72rem;color:#94a3b8;margin-top:0.5rem;text-align:center;font-family:monospace">vel-object-top</p>
  </div>
  <div>
    <div style="width:140px;height:90px;border-radius:0.5rem;border:1px solid #1e2d45;overflow:hidden;background:linear-gradient(to top,#0ecb81,#38bdf8,#060b17)"></div>
    <p style="font-size:0.72rem;color:#94a3b8;margin-top:0.5rem;text-align:center;font-family:monospace">vel-object-bottom</p>
  </div>
  <div>
    <div style="width:140px;height:90px;border-radius:0.5rem;border:1px solid #1e2d45;overflow:hidden;background:radial-gradient(circle at center,#f0416c,#ff9d00,#060b17)"></div>
    <p style="font-size:0.72rem;color:#94a3b8;margin-top:0.5rem;text-align:center;font-family:monospace">vel-object-center</p>
  </div>
</div>`,
        },
      ]}
    />
  )
}
