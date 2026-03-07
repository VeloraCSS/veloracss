import DocPage from '../_components/DocPage'

export default function NavbarPage() {
  return (
    <DocPage
      title="Navbar"
      description="Horizontal navigation bar component with brand, nav links, and end-slot. Supports glass blur, sticky, and fixed-top positioning."
      source="navbar.css"
      table={[
        { class: 'vel-navbar', properties: 'Base navbar — flex, surface background, border-bottom, padding' },
        { class: 'vel-navbar-glass', properties: 'Frosted-glass effect — backdrop-filter blur + translucent background' },
        { class: 'vel-navbar-sticky', properties: 'position: sticky; top: 0; z-index stacking' },
        { class: 'vel-navbar-fixed', properties: 'position: fixed; top: 0; full width' },
        { class: 'vel-navbar-brand', properties: 'Brand/logo slot — bold, larger text, no underline' },
        { class: 'vel-navbar-nav', properties: 'Horizontal flex list of nav links' },
        { class: 'vel-navbar-link', properties: 'Individual nav link — muted color, hover highlight' },
        { class: 'vel-navbar-link-active', properties: 'Active nav link — primary color, bold' },
        { class: 'vel-navbar-end', properties: 'Right-side slot — margin-left: auto' },
      ]}
      examples={[
        {
          label: 'Basic navbar',
          html: `<div style="padding:24px;background:#060b17;border-radius:12px;font-family:system-ui,sans-serif;">
  <nav class="vel-navbar">
    <a class="vel-navbar-brand" href="#">VeloraCSS</a>
    <ul class="vel-navbar-nav">
      <li><a class="vel-navbar-link vel-navbar-link-active" href="#">Home</a></li>
      <li><a class="vel-navbar-link" href="#">Docs</a></li>
      <li><a class="vel-navbar-link" href="#">Components</a></li>
    </ul>
    <div class="vel-navbar-end">
      <button class="vel-btn vel-btn-primary vel-btn-sm">Get Started</button>
    </div>
  </nav>
</div>`,
        },
        {
          label: 'Glass navbar',
          html: `<div style="padding:24px;background:linear-gradient(135deg,#1a1040,#0d1a2e);border-radius:12px;font-family:system-ui,sans-serif;">
  <nav class="vel-navbar vel-navbar-glass">
    <a class="vel-navbar-brand" href="#">VeloraCSS</a>
    <ul class="vel-navbar-nav">
      <li><a class="vel-navbar-link vel-navbar-link-active" href="#">Home</a></li>
      <li><a class="vel-navbar-link" href="#">Docs</a></li>
    </ul>
    <div class="vel-navbar-end">
      <button class="vel-btn vel-btn-outline-primary vel-btn-sm">Sign in</button>
    </div>
  </nav>
</div>`,
        },
      ]}
    />
  )
}
