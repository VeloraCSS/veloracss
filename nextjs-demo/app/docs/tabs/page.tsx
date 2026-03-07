import DocPage from '../_components/DocPage'

export default function TabsPage() {
  return (
    <DocPage
      title="Tabs"
      description="Tab navigation component in underline, pill, boxed, and vertical layout styles with active state highlighting."
      source="tabs.css"
      table={[
        { class: 'vel-tabs', properties: 'Base tab container — flex, gap, border-bottom (underline mode)' },
        { class: 'vel-tab', properties: 'Individual tab item — padding, cursor, transition' },
        { class: 'vel-tab-active', properties: 'Active tab — highlighted color, underline or background' },
        { class: 'vel-tabs-underline', properties: 'Underline style — active tab shows bottom border in primary color' },
        { class: 'vel-tabs-pill', properties: 'Pill style — active tab has rounded background fill' },
        { class: 'vel-tabs-boxed', properties: 'Boxed style — tabs share a bordered container with filled active' },
        { class: 'vel-tabs-vertical', properties: 'Stacks tabs in a column instead of a row' },
      ]}
      examples={[
        {
          label: 'Underline tabs',
          html: `<div style="padding:24px;background:#060b17;border-radius:12px;font-family:system-ui,sans-serif;">
  <div class="vel-tabs vel-tabs-underline">
    <button class="vel-tab vel-tab-active">Overview</button>
    <button class="vel-tab">Settings</button>
    <button class="vel-tab">Members</button>
  </div>
</div>`,
        },
        {
          label: 'Pill tabs',
          html: `<div style="padding:24px;background:#060b17;border-radius:12px;font-family:system-ui,sans-serif;">
  <div class="vel-tabs vel-tabs-pill">
    <button class="vel-tab vel-tab-active">Dashboard</button>
    <button class="vel-tab">Analytics</button>
    <button class="vel-tab">Reports</button>
  </div>
</div>`,
        },
        {
          label: 'Boxed tabs',
          html: `<div style="padding:24px;background:#060b17;border-radius:12px;font-family:system-ui,sans-serif;">
  <div class="vel-tabs vel-tabs-boxed">
    <button class="vel-tab vel-tab-active">Code</button>
    <button class="vel-tab">Preview</button>
    <button class="vel-tab">Docs</button>
  </div>
</div>`,
        },
      ]}
    />
  )
}
