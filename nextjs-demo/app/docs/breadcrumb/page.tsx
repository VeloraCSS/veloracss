import DocPage from '../_components/DocPage'

export default function BreadcrumbPage() {
  return (
    <DocPage
      title="Breadcrumb"
      description="A secondary navigation trail showing the user's current location within a site hierarchy."
      source="breadcrumb.css"
      table={[
        { class: 'vel-breadcrumb', properties: 'Ordered list container for breadcrumb items (default slash separator)' },
        { class: 'vel-breadcrumb-item', properties: 'Individual list item within the breadcrumb trail' },
        { class: 'vel-breadcrumb-link', properties: 'Anchor element for navigable breadcrumb steps' },
        { class: 'vel-breadcrumb-active', properties: 'Marks the current (non-navigable) breadcrumb step' },
        { class: 'vel-breadcrumb-chevron', properties: 'Modifier on vel-breadcrumb to use a › chevron separator' },
        { class: 'vel-breadcrumb-dot', properties: 'Modifier on vel-breadcrumb to use a · dot separator' },
      ]}
      examples={[
        {
          label: 'Default (slash separator)',
          html: `<div style="padding:24px;background:#060b17;border-radius:12px;font-family:system-ui,sans-serif">
  <nav aria-label="Breadcrumb">
    <ol class="vel-breadcrumb">
      <li class="vel-breadcrumb-item">
        <a class="vel-breadcrumb-link" href="#">Home</a>
      </li>
      <li class="vel-breadcrumb-item">
        <a class="vel-breadcrumb-link" href="#">Components</a>
      </li>
      <li class="vel-breadcrumb-item vel-breadcrumb-active" aria-current="page">
        Breadcrumb
      </li>
    </ol>
  </nav>
</div>`,
        },
        {
          label: 'Chevron variant',
          html: `<div style="padding:24px;background:#060b17;border-radius:12px;font-family:system-ui,sans-serif">
  <nav aria-label="Breadcrumb">
    <ol class="vel-breadcrumb vel-breadcrumb-chevron">
      <li class="vel-breadcrumb-item">
        <a class="vel-breadcrumb-link" href="#">Home</a>
      </li>
      <li class="vel-breadcrumb-item">
        <a class="vel-breadcrumb-link" href="#">Docs</a>
      </li>
      <li class="vel-breadcrumb-item vel-breadcrumb-active" aria-current="page">
        Breadcrumb
      </li>
    </ol>
  </nav>
</div>`,
        },
      ]}
    />
  )
}
