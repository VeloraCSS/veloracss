import DocPage from '../_components/DocPage'

export default function BorderWidthPage() {
  return (
    <DocPage
      title="Border Width"
      description="Utilities for controlling the width of an element's borders."
      source="borders.css"
      table={[
        { class: 'vel-border-0', properties: 'border-width: 0' },
        { class: 'vel-border', properties: 'border-width: 1px' },
        { class: 'vel-border-2', properties: 'border-width: 2px' },
        { class: 'vel-border-4', properties: 'border-width: 4px' },
        { class: 'vel-border-8', properties: 'border-width: 8px' },
        { class: 'vel-border-t', properties: 'border-top-width: 1px' },
        { class: 'vel-border-r', properties: 'border-right-width: 1px' },
        { class: 'vel-border-b', properties: 'border-bottom-width: 1px' },
        { class: 'vel-border-l', properties: 'border-left-width: 1px' },
        { class: 'vel-border-t-2', properties: 'border-top-width: 2px' },
        { class: 'vel-border-b-4', properties: 'border-bottom-width: 4px' },
      ]}
      examples={[
        {
          label: 'Border width scale',
          html: `<div style="display:flex;gap:10px;padding:1rem;background:#060b17;flex-wrap:wrap;align-items:center;">
  <div class="vel-border vel-border-solid vel-border-primary vel-rounded-md" style="width:56px;height:56px;background:#0d1422;"></div>
  <div class="vel-border-2 vel-border-solid vel-border-primary vel-rounded-md" style="width:56px;height:56px;background:#0d1422;"></div>
  <div class="vel-border-4 vel-border-solid vel-border-primary vel-rounded-md" style="width:56px;height:56px;background:#0d1422;"></div>
  <div class="vel-border-8 vel-border-solid vel-border-primary vel-rounded-md" style="width:56px;height:56px;background:#0d1422;"></div>
</div>`,
        },
        {
          label: 'Directional borders',
          html: `<div style="display:flex;gap:10px;padding:1rem;background:#060b17;flex-wrap:wrap;align-items:center;">
  <div class="vel-border-t-2 vel-border-solid vel-border-primary" style="width:56px;height:56px;background:#0d1422;border-radius:4px;"></div>
  <div class="vel-border-r-2 vel-border-solid vel-border-success" style="width:56px;height:56px;background:#0d1422;border-radius:4px;"></div>
  <div class="vel-border-b-2 vel-border-solid vel-border-warning" style="width:56px;height:56px;background:#0d1422;border-radius:4px;"></div>
  <div class="vel-border-l-2 vel-border-solid vel-border-danger" style="width:56px;height:56px;background:#0d1422;border-radius:4px;"></div>
</div>`,
        },
      ]}
    />
  )
}
