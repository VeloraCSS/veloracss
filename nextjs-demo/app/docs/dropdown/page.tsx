import DocPage from '../_components/DocPage'

export default function DropdownPage() {
  return (
    <DocPage
      title="Dropdown"
      description="A contextual menu that appears below a trigger element, used for navigation, actions, or selection lists."
      source="dropdown.css"
      table={[
        { class: 'vel-dropdown', properties: 'Wrapper element with position: relative for the dropdown' },
        { class: 'vel-dropdown-menu', properties: 'The floating menu panel (position: absolute)' },
        { class: 'vel-dropdown-item', properties: 'Individual clickable row inside the menu' },
        { class: 'vel-dropdown-item-active', properties: 'Highlighted/selected state for a menu item' },
        { class: 'vel-dropdown-item-disabled', properties: 'Dimmed, non-interactive menu item' },
        { class: 'vel-dropdown-divider', properties: 'Horizontal rule separator between menu groups' },
        { class: 'vel-dropdown-header', properties: 'Non-interactive label/heading inside the menu' },
      ]}
      examples={[
        {
          label: 'Dropdown menu',
          html: `<div style="padding:24px;background:#060b17;border-radius:12px;font-family:system-ui,sans-serif">
  <div class="vel-dropdown">
    <button class="vel-btn vel-btn-primary">Options ▾</button>
    <div class="vel-dropdown-menu" style="display:block;position:relative;margin-top:8px;">
      <div class="vel-dropdown-header">Account</div>
      <a href="#" class="vel-dropdown-item">Profile</a>
      <a href="#" class="vel-dropdown-item">Settings</a>
      <a href="#" class="vel-dropdown-item vel-dropdown-item-active">Dashboard</a>
      <div class="vel-dropdown-divider"></div>
      <div class="vel-dropdown-header">Danger Zone</div>
      <a href="#" class="vel-dropdown-item">Delete account</a>
      <a href="#" class="vel-dropdown-item vel-dropdown-item-disabled">Suspended action</a>
    </div>
  </div>
</div>`,
        },
      ]}
    />
  )
}
