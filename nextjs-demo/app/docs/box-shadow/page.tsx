import DocPage from '../_components/DocPage'

export default function BoxShadowPage() {
  return (
    <DocPage
      title="Box Shadow"
      description="Utilities for controlling the box shadow and glow effects of an element."
      source="effects.css"
      table={[
        { class: 'vel-shadow-none', properties: 'box-shadow: none' },
        { class: 'vel-shadow-sm', properties: 'box-shadow: 0 1px 2px 0 rgba(0,0,0,0.4)' },
        { class: 'vel-shadow', properties: 'box-shadow: 0 1px 3px 0 rgba(0,0,0,0.4), 0 1px 2px -1px rgba(0,0,0,0.4)' },
        { class: 'vel-shadow-md', properties: 'box-shadow: 0 4px 6px -1px rgba(0,0,0,0.4), 0 2px 4px -2px rgba(0,0,0,0.4)' },
        { class: 'vel-shadow-lg', properties: 'box-shadow: 0 10px 15px -3px rgba(0,0,0,0.4), 0 4px 6px -4px rgba(0,0,0,0.4)' },
        { class: 'vel-shadow-xl', properties: 'box-shadow: 0 20px 25px -5px rgba(0,0,0,0.4), 0 8px 10px -6px rgba(0,0,0,0.4)' },
        { class: 'vel-shadow-2xl', properties: 'box-shadow: 0 25px 50px -12px rgba(0,0,0,0.6)' },
        { class: 'vel-shadow-inner', properties: 'box-shadow: inset 0 2px 4px 0 rgba(0,0,0,0.4)' },
        { class: 'vel-glow-primary', properties: 'box-shadow: 0 0 20px rgba(var(--vel-primary-rgb), 0.5)' },
        { class: 'vel-glow-success', properties: 'box-shadow: 0 0 20px rgba(var(--vel-success-rgb), 0.5)' },
        { class: 'vel-glow-danger', properties: 'box-shadow: 0 0 20px rgba(var(--vel-danger-rgb), 0.5)' },
        { class: 'vel-glow-warning', properties: 'box-shadow: 0 0 20px rgba(var(--vel-warning-rgb), 0.5)' },
        { class: 'vel-glow-info', properties: 'box-shadow: 0 0 20px rgba(var(--vel-info-rgb), 0.5)' },
        { class: 'vel-glow-sm-primary', properties: 'box-shadow: 0 0 10px rgba(var(--vel-primary-rgb), 0.4)' },
        { class: 'vel-glow-sm-success', properties: 'box-shadow: 0 0 10px rgba(var(--vel-success-rgb), 0.4)' },
      ]}
      examples={[
        {
          label: 'Box shadow scale',
          html: `<div style="display:flex;gap:20px;padding:2rem;background:#060b17;flex-wrap:wrap;align-items:center;">
  <div class="vel-shadow-sm vel-rounded-lg" style="width:70px;height:70px;background:#0d1422;"></div>
  <div class="vel-shadow vel-rounded-lg" style="width:70px;height:70px;background:#0d1422;"></div>
  <div class="vel-shadow-md vel-rounded-lg" style="width:70px;height:70px;background:#0d1422;"></div>
  <div class="vel-shadow-lg vel-rounded-lg" style="width:70px;height:70px;background:#0d1422;"></div>
  <div class="vel-shadow-xl vel-rounded-lg" style="width:70px;height:70px;background:#0d1422;"></div>
  <div class="vel-shadow-2xl vel-rounded-lg" style="width:70px;height:70px;background:#0d1422;"></div>
</div>`,
        },
        {
          label: 'Glow effects',
          html: `<div style="display:flex;gap:20px;padding:2rem;background:#060b17;flex-wrap:wrap;align-items:center;">
  <div class="vel-bg-primary vel-glow-primary vel-rounded-lg" style="width:70px;height:70px;"></div>
  <div class="vel-bg-success vel-glow-success vel-rounded-lg" style="width:70px;height:70px;"></div>
  <div class="vel-bg-danger vel-glow-danger vel-rounded-lg" style="width:70px;height:70px;"></div>
  <div class="vel-bg-warning vel-glow-warning vel-rounded-lg" style="width:70px;height:70px;"></div>
  <div class="vel-bg-info vel-glow-info vel-rounded-lg" style="width:70px;height:70px;"></div>
</div>`,
        },
      ]}
    />
  )
}
