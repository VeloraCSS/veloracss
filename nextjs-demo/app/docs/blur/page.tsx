import DocPage from '../_components/DocPage'

export default function BlurPage() {
  return (
    <DocPage
      title="Blur"
      description="Utilities for applying blur filters to an element."
      source="effects.css"
      table={[
        { class: 'vel-blur-none', properties: 'filter: blur(0)' },
        { class: 'vel-blur-sm', properties: 'filter: blur(4px)' },
        { class: 'vel-blur', properties: 'filter: blur(8px)' },
        { class: 'vel-blur-md', properties: 'filter: blur(12px)' },
        { class: 'vel-blur-lg', properties: 'filter: blur(16px)' },
        { class: 'vel-blur-xl', properties: 'filter: blur(24px)' },
        { class: 'vel-blur-2xl', properties: 'filter: blur(40px)' },
        { class: 'vel-blur-3xl', properties: 'filter: blur(64px)' },
      ]}
      examples={[
        {
          label: 'Blur scale',
          html: `<div style="display:flex;gap:12px;padding:1rem;background:#060b17;flex-wrap:wrap;align-items:center;">
  <div style="text-align:center;">
    <div class="vel-blur-none vel-bg-gradient-primary vel-rounded-md" style="width:64px;height:64px;"></div>
    <p style="color:#64748b;font-size:0.7rem;margin-top:4px;">none</p>
  </div>
  <div style="text-align:center;">
    <div class="vel-blur-sm vel-bg-gradient-primary vel-rounded-md" style="width:64px;height:64px;"></div>
    <p style="color:#64748b;font-size:0.7rem;margin-top:4px;">sm</p>
  </div>
  <div style="text-align:center;">
    <div class="vel-blur vel-bg-gradient-primary vel-rounded-md" style="width:64px;height:64px;"></div>
    <p style="color:#64748b;font-size:0.7rem;margin-top:4px;">8px</p>
  </div>
  <div style="text-align:center;">
    <div class="vel-blur-md vel-bg-gradient-primary vel-rounded-md" style="width:64px;height:64px;"></div>
    <p style="color:#64748b;font-size:0.7rem;margin-top:4px;">md</p>
  </div>
  <div style="text-align:center;">
    <div class="vel-blur-lg vel-bg-gradient-primary vel-rounded-md" style="width:64px;height:64px;"></div>
    <p style="color:#64748b;font-size:0.7rem;margin-top:4px;">lg</p>
  </div>
  <div style="text-align:center;">
    <div class="vel-blur-xl vel-bg-gradient-primary vel-rounded-md" style="width:64px;height:64px;"></div>
    <p style="color:#64748b;font-size:0.7rem;margin-top:4px;">xl</p>
  </div>
</div>`,
        },
      ]}
    />
  )
}
