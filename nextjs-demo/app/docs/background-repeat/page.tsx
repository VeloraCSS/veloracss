import DocPage from '../_components/DocPage'

export default function BackgroundRepeatPage() {
  return (
    <DocPage
      title="Background Repeat"
      description="Utilities for controlling the repetition of an element's background image."
      source="colors.css"
      table={[
        { class: 'vel-bg-repeat', properties: 'background-repeat: repeat' },
        { class: 'vel-bg-no-repeat', properties: 'background-repeat: no-repeat' },
        { class: 'vel-bg-repeat-x', properties: 'background-repeat: repeat-x' },
        { class: 'vel-bg-repeat-y', properties: 'background-repeat: repeat-y' },
        { class: 'vel-bg-repeat-round', properties: 'background-repeat: round' },
        { class: 'vel-bg-repeat-space', properties: 'background-repeat: space' },
      ]}
      examples={[
        {
          label: 'Repeat vs no-repeat',
          html: `<div style="display:flex;gap:12px;padding:1rem;background:#060b17;flex-wrap:wrap;align-items:flex-start;">
  <div style="text-align:center;">
    <div class="vel-bg-repeat" style="width:140px;height:80px;border-radius:6px;border:1px solid #1e2d45;background-image:url('https://placehold.co/30x30/7c5cfc/fff');background-color:#0d1422;"></div>
    <p style="color:#64748b;font-size:0.75rem;margin-top:4px;">vel-bg-repeat</p>
  </div>
  <div style="text-align:center;">
    <div class="vel-bg-no-repeat vel-bg-center" style="width:140px;height:80px;border-radius:6px;border:1px solid #1e2d45;background-image:url('https://placehold.co/30x30/a87fff/fff');background-color:#0d1422;"></div>
    <p style="color:#64748b;font-size:0.75rem;margin-top:4px;">vel-bg-no-repeat</p>
  </div>
  <div style="text-align:center;">
    <div class="vel-bg-repeat-x" style="width:140px;height:80px;border-radius:6px;border:1px solid #1e2d45;background-image:url('https://placehold.co/30x30/38bdf8/fff');background-color:#0d1422;background-position:center;"></div>
    <p style="color:#64748b;font-size:0.75rem;margin-top:4px;">vel-bg-repeat-x</p>
  </div>
</div>`,
        },
      ]}
    />
  )
}
