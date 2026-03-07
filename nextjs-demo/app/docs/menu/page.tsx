import DocPage from '../_components/DocPage'

export default function MenuPage() {
  return (
    <DocPage
      title="Menu"
      description="A styled list of navigation links or actions, supporting vertical sidebar layouts and horizontal navigation bars."
      source="menu.css"
      table={[
        { class: 'vel-menu', properties: 'Base menu container (vertical by default)' },
        { class: 'vel-menu-item', properties: 'Individual menu row with padding and hover state' },
        { class: 'vel-menu-item-active', properties: 'Highlighted state for the currently selected menu item' },
        { class: 'vel-menu-item-disabled', properties: 'Dimmed, non-interactive menu item' },
        { class: 'vel-menu-label', properties: 'Non-interactive section heading within the menu' },
        { class: 'vel-menu-divider', properties: 'Horizontal separator between menu groups' },
        { class: 'vel-menu-horizontal', properties: 'Modifier that renders the menu as a horizontal row' },
      ]}
      examples={[
        {
          label: 'Vertical menu',
          html: `<div style="padding:24px;background:#060b17;border-radius:12px;font-family:system-ui,sans-serif">
  <nav class="vel-menu" style="max-width:220px;">
    <div class="vel-menu-label">Navigation</div>
    <a href="#" class="vel-menu-item vel-menu-item-active">Dashboard</a>
    <a href="#" class="vel-menu-item">Projects</a>
    <a href="#" class="vel-menu-item">Team</a>
    <div class="vel-menu-divider"></div>
    <div class="vel-menu-label">Settings</div>
    <a href="#" class="vel-menu-item">Account</a>
    <a href="#" class="vel-menu-item vel-menu-item-disabled">Billing (locked)</a>
  </nav>
</div>`,
        },
        {
          label: 'Horizontal menu',
          html: `<div style="padding:24px;background:#060b17;border-radius:12px;font-family:system-ui,sans-serif">
  <nav class="vel-menu vel-menu-horizontal">
    <a href="#" class="vel-menu-item vel-menu-item-active">Home</a>
    <a href="#" class="vel-menu-item">About</a>
    <a href="#" class="vel-menu-item">Features</a>
    <a href="#" class="vel-menu-item">Pricing</a>
    <a href="#" class="vel-menu-item">Contact</a>
  </nav>
</div>`,
        },
      ]}
    />
  )
}
