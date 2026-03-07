import DocPage from '../_components/DocPage'

export default function AlertsPage() {
  return (
    <DocPage
      title="Alerts"
      description="Contextual feedback messages for info, success, warning, and danger states. Supports accent-border and filled display modes."
      source="alert.css"
      table={[
        { class: 'vel-alert', properties: 'Base alert — padding, border-radius, border-left accent, flex layout' },
        { class: 'vel-alert-info', properties: 'Info blue accent color and background tint' },
        { class: 'vel-alert-success', properties: 'Success green accent color and background tint' },
        { class: 'vel-alert-warning', properties: 'Warning amber accent color and background tint' },
        { class: 'vel-alert-danger', properties: 'Danger red accent color and background tint' },
        { class: 'vel-alert-primary', properties: 'Primary purple accent color and background tint' },
        { class: 'vel-alert-filled-info', properties: 'Solid info background, white text' },
        { class: 'vel-alert-filled-success', properties: 'Solid success background, white text' },
        { class: 'vel-alert-filled-warning', properties: 'Solid warning background, dark text' },
        { class: 'vel-alert-filled-danger', properties: 'Solid danger background, white text' },
        { class: 'vel-alert-dismiss', properties: 'Adds a dismiss button positioned top-right' },
      ]}
      examples={[
        {
          label: 'Accent border variants',
          html: `<div style="padding:24px;background:#060b17;border-radius:12px;font-family:system-ui,sans-serif;display:flex;flex-direction:column;gap:10px;">
  <div class="vel-alert vel-alert-info">Info — Something you should know.</div>
  <div class="vel-alert vel-alert-success">Success — Your changes have been saved.</div>
  <div class="vel-alert vel-alert-warning">Warning — This action may have side effects.</div>
  <div class="vel-alert vel-alert-danger">Danger — An error occurred. Please try again.</div>
</div>`,
        },
        {
          label: 'Filled variant',
          html: `<div style="padding:24px;background:#060b17;border-radius:12px;font-family:system-ui,sans-serif;display:flex;flex-direction:column;gap:10px;">
  <div class="vel-alert vel-alert-filled-success">Success — Your account has been created.</div>
  <div class="vel-alert vel-alert-filled-danger">Danger — Failed to connect to the server.</div>
</div>`,
        },
      ]}
    />
  )
}
