import DocPage from '../_components/DocPage'

export default function OpacityPage() {
  return (
    <DocPage
      title="Opacity"
      description="Utilities for controlling the opacity of an element."
      source="effects.css"
      table={[
        { class: 'vel-opacity-0', properties: 'opacity: 0' },
        { class: 'vel-opacity-5', properties: 'opacity: 0.05' },
        { class: 'vel-opacity-10', properties: 'opacity: 0.1' },
        { class: 'vel-opacity-20', properties: 'opacity: 0.2' },
        { class: 'vel-opacity-25', properties: 'opacity: 0.25' },
        { class: 'vel-opacity-30', properties: 'opacity: 0.3' },
        { class: 'vel-opacity-40', properties: 'opacity: 0.4' },
        { class: 'vel-opacity-50', properties: 'opacity: 0.5' },
        { class: 'vel-opacity-60', properties: 'opacity: 0.6' },
        { class: 'vel-opacity-70', properties: 'opacity: 0.7' },
        { class: 'vel-opacity-75', properties: 'opacity: 0.75' },
        { class: 'vel-opacity-80', properties: 'opacity: 0.8' },
        { class: 'vel-opacity-90', properties: 'opacity: 0.9' },
        { class: 'vel-opacity-95', properties: 'opacity: 0.95' },
        { class: 'vel-opacity-100', properties: 'opacity: 1' },
      ]}
      examples={[
        {
          label: 'Opacity scale',
          html: `<div style="display:flex;gap:8px;padding:1rem;background:#060b17;flex-wrap:wrap;align-items:center;">
  <div class="vel-bg-primary vel-opacity-10 vel-rounded-md" style="width:48px;height:48px;"></div>
  <div class="vel-bg-primary vel-opacity-25 vel-rounded-md" style="width:48px;height:48px;"></div>
  <div class="vel-bg-primary vel-opacity-50 vel-rounded-md" style="width:48px;height:48px;"></div>
  <div class="vel-bg-primary vel-opacity-75 vel-rounded-md" style="width:48px;height:48px;"></div>
  <div class="vel-bg-primary vel-opacity-90 vel-rounded-md" style="width:48px;height:48px;"></div>
  <div class="vel-bg-primary vel-opacity-100 vel-rounded-md" style="width:48px;height:48px;"></div>
</div>`,
        },
      ]}
    />
  )
}
