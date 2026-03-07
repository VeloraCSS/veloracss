import DocPage from '../_components/DocPage'

export default function BorderStylePage() {
  return (
    <DocPage
      title="Border Style"
      description="Utilities for controlling the style of an element's borders."
      source="borders.css"
      table={[
        { class: 'vel-border-solid', properties: 'border-style: solid' },
        { class: 'vel-border-dashed', properties: 'border-style: dashed' },
        { class: 'vel-border-dotted', properties: 'border-style: dotted' },
        { class: 'vel-border-double', properties: 'border-style: double' },
        { class: 'vel-border-none', properties: 'border-style: none' },
      ]}
      examples={[
        {
          label: 'Border style variants',
          html: `<div style="display:flex;gap:10px;padding:1rem;background:#060b17;flex-wrap:wrap;align-items:center;">
  <div class="vel-border-2 vel-border-solid vel-border-primary vel-rounded-md" style="width:70px;height:56px;background:#0d1422;display:flex;align-items:center;justify-content:center;color:#94a3b8;font-size:0.7rem;">solid</div>
  <div class="vel-border-2 vel-border-dashed vel-border-primary vel-rounded-md" style="width:70px;height:56px;background:#0d1422;display:flex;align-items:center;justify-content:center;color:#94a3b8;font-size:0.7rem;">dashed</div>
  <div class="vel-border-2 vel-border-dotted vel-border-primary vel-rounded-md" style="width:70px;height:56px;background:#0d1422;display:flex;align-items:center;justify-content:center;color:#94a3b8;font-size:0.7rem;">dotted</div>
  <div class="vel-border-4 vel-border-double vel-border-primary vel-rounded-md" style="width:70px;height:56px;background:#0d1422;display:flex;align-items:center;justify-content:center;color:#94a3b8;font-size:0.7rem;">double</div>
</div>`,
        },
      ]}
    />
  )
}
