import DocPage from '../_components/DocPage'

export default function GridTemplateColumnsPage() {
  return (
    <DocPage
      title="Grid Template Columns"
      description="Utilities for specifying the columns in a grid layout."
      source="grid.css"
      table={[
        { class: 'vel-grid-cols-1', properties: 'grid-template-columns: repeat(1, minmax(0, 1fr))' },
        { class: 'vel-grid-cols-2', properties: 'grid-template-columns: repeat(2, minmax(0, 1fr))' },
        { class: 'vel-grid-cols-3', properties: 'grid-template-columns: repeat(3, minmax(0, 1fr))' },
        { class: 'vel-grid-cols-4', properties: 'grid-template-columns: repeat(4, minmax(0, 1fr))' },
        { class: 'vel-grid-cols-5', properties: 'grid-template-columns: repeat(5, minmax(0, 1fr))' },
        { class: 'vel-grid-cols-6', properties: 'grid-template-columns: repeat(6, minmax(0, 1fr))' },
        { class: 'vel-grid-cols-12', properties: 'grid-template-columns: repeat(12, minmax(0, 1fr))' },
        { class: 'vel-grid-cols-none', properties: 'grid-template-columns: none' },
      ]}
      examples={[
        {
          label: '3 equal columns',
          html: `<div class="vel-grid vel-grid-cols-3 vel-gap-4">
  <div style="background:#7c5cfc;color:#fff;padding:16px;border-radius:8px;text-align:center">1</div>
  <div style="background:#7c5cfc;color:#fff;padding:16px;border-radius:8px;text-align:center">2</div>
  <div style="background:#7c5cfc;color:#fff;padding:16px;border-radius:8px;text-align:center">3</div>
  <div style="background:#7c5cfc80;color:#fff;padding:16px;border-radius:8px;text-align:center">4</div>
  <div style="background:#7c5cfc80;color:#fff;padding:16px;border-radius:8px;text-align:center">5</div>
  <div style="background:#7c5cfc80;color:#fff;padding:16px;border-radius:8px;text-align:center">6</div>
</div>`,
        },
        {
          label: '4 columns',
          html: `<div class="vel-grid vel-grid-cols-4 vel-gap-3">
  <div style="background:#0ecb81;color:#fff;padding:12px;border-radius:6px;text-align:center">1</div>
  <div style="background:#0ecb81;color:#fff;padding:12px;border-radius:6px;text-align:center">2</div>
  <div style="background:#0ecb81;color:#fff;padding:12px;border-radius:6px;text-align:center">3</div>
  <div style="background:#0ecb81;color:#fff;padding:12px;border-radius:6px;text-align:center">4</div>
</div>`,
        },
      ]}
    />
  )
}
