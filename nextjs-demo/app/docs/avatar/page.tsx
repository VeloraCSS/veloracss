import DocPage from '../_components/DocPage'

export default function AvatarPage() {
  return (
    <DocPage
      title="Avatar"
      description="Avatar component for displaying user initials or images, with size variants, color fills, ring borders, online/away/offline status dots, and group stacking."
      source="avatar.css"
      table={[
        { class: 'vel-avatar', properties: 'Base avatar — circle, flex center, default size, surface background' },
        { class: 'vel-avatar-xs', properties: 'Extra-small size (1.5rem)' },
        { class: 'vel-avatar-sm', properties: 'Small size (2rem)' },
        { class: 'vel-avatar-lg', properties: 'Large size (3.5rem)' },
        { class: 'vel-avatar-xl', properties: 'Extra-large size (5rem)' },
        { class: 'vel-avatar-2xl', properties: 'Double-extra-large size (6.5rem)' },
        { class: 'vel-avatar-primary', properties: 'Primary gradient background fill' },
        { class: 'vel-avatar-success', properties: 'Success green background fill' },
        { class: 'vel-avatar-ring', properties: 'Adds a subtle border ring around the avatar' },
        { class: 'vel-avatar-ring-primary', properties: 'Primary color ring border' },
        { class: 'vel-avatar-status', properties: 'Enables status dot positioning (use with status modifier)' },
        { class: 'vel-avatar-status-online', properties: 'Green status dot — online' },
        { class: 'vel-avatar-status-away', properties: 'Amber status dot — away' },
        { class: 'vel-avatar-status-offline', properties: 'Gray status dot — offline' },
        { class: 'vel-avatar-group', properties: 'Overlapping avatar group — negative margin stacking' },
      ]}
      examples={[
        {
          label: 'Gradient fills with initials',
          html: `<div style="padding:24px;background:#060b17;border-radius:12px;font-family:system-ui,sans-serif;display:flex;gap:12px;align-items:center;">
  <div class="vel-avatar vel-avatar-primary" style="color:#fff;font-weight:600;">AB</div>
  <div class="vel-avatar vel-avatar-success" style="color:#fff;font-weight:600;">CD</div>
  <div class="vel-avatar" style="background:linear-gradient(135deg,#f97316,#ec4899);color:#fff;font-weight:600;">EF</div>
  <div class="vel-avatar" style="background:linear-gradient(135deg,#0ea5e9,#6366f1);color:#fff;font-weight:600;">GH</div>
  <div class="vel-avatar vel-avatar-lg vel-avatar-primary" style="color:#fff;font-weight:600;">LG</div>
</div>`,
        },
        {
          label: 'With status dot',
          html: `<div style="padding:24px;background:#060b17;border-radius:12px;font-family:system-ui,sans-serif;display:flex;gap:20px;align-items:center;">
  <div class="vel-avatar vel-avatar-primary vel-avatar-status vel-avatar-status-online" style="color:#fff;font-weight:600;">AB</div>
  <div class="vel-avatar vel-avatar-primary vel-avatar-status vel-avatar-status-away" style="color:#fff;font-weight:600;">CD</div>
  <div class="vel-avatar vel-avatar-primary vel-avatar-status vel-avatar-status-offline" style="color:#fff;font-weight:600;">EF</div>
</div>`,
        },
        {
          label: 'Avatar group',
          html: `<div style="padding:24px;background:#060b17;border-radius:12px;font-family:system-ui,sans-serif;">
  <div class="vel-avatar-group">
    <div class="vel-avatar vel-avatar-ring-primary" style="background:linear-gradient(135deg,#7c5cfc,#a87fff);color:#fff;font-weight:600;">A</div>
    <div class="vel-avatar vel-avatar-ring-primary" style="background:linear-gradient(135deg,#0ecb81,#38bdf8);color:#fff;font-weight:600;">B</div>
    <div class="vel-avatar vel-avatar-ring-primary" style="background:linear-gradient(135deg,#f97316,#ec4899);color:#fff;font-weight:600;">C</div>
    <div class="vel-avatar vel-avatar-ring-primary" style="background:#1a2236;color:#94a3b8;font-weight:600;font-size:0.75rem;">+4</div>
  </div>
</div>`,
        },
      ]}
    />
  )
}
