import DocPage from '../_components/DocPage'

export default function FormsPage() {
  return (
    <DocPage
      title="Forms"
      description="Form control components including text inputs, textarea, select, checkbox, radio, switch/toggle, and input groups with state variants."
      source="input.css"
      table={[
        { class: 'vel-input', properties: 'Base text input — full width, bordered, surface background, focus ring' },
        { class: 'vel-input-sm', properties: 'Smaller padding and font size' },
        { class: 'vel-input-lg', properties: 'Larger padding and font size' },
        { class: 'vel-input-error', properties: 'Red border and error focus ring' },
        { class: 'vel-input-success', properties: 'Green border and success focus ring' },
        { class: 'vel-textarea', properties: 'Multi-line text area with resize control' },
        { class: 'vel-select', properties: 'Styled native select with custom arrow' },
        { class: 'vel-checkbox', properties: 'Styled checkbox input' },
        { class: 'vel-radio', properties: 'Styled radio input' },
        { class: 'vel-switch', properties: 'Toggle switch — CSS-only pill with animated thumb' },
        { class: 'vel-form-group', properties: 'Vertical stack wrapper for label + input + hint' },
        { class: 'vel-form-label', properties: 'Label styling — small font, muted color, margin-bottom' },
        { class: 'vel-form-hint', properties: 'Helper text below input — muted, smaller font' },
        { class: 'vel-form-error', properties: 'Error message text — danger color' },
        { class: 'vel-input-group', properties: 'Horizontal group that joins inputs and addons' },
        { class: 'vel-input-group-text', properties: 'Non-interactive addon cell inside vel-input-group' },
      ]}
      examples={[
        {
          label: 'Text input with label and hint',
          html: `<div style="padding:24px;background:#060b17;border-radius:12px;font-family:system-ui,sans-serif;max-width:400px;">
  <div class="vel-form-group">
    <label class="vel-form-label">Email address</label>
    <input class="vel-input" type="email" placeholder="you@example.com" />
    <span class="vel-form-hint">We'll never share your email.</span>
  </div>
  <div class="vel-form-group">
    <label class="vel-form-label">Username</label>
    <input class="vel-input vel-input-error" type="text" placeholder="username" />
    <span class="vel-form-error">Username is already taken.</span>
  </div>
</div>`,
        },
        {
          label: 'Checkbox and radio',
          html: `<div style="padding:24px;background:#060b17;border-radius:12px;font-family:system-ui,sans-serif;display:flex;gap:24px;align-items:center;flex-wrap:wrap;">
  <label style="display:flex;align-items:center;gap:8px;color:#e2e8f0;cursor:pointer;">
    <input class="vel-checkbox" type="checkbox" checked />
    Remember me
  </label>
  <label style="display:flex;align-items:center;gap:8px;color:#e2e8f0;cursor:pointer;">
    <input class="vel-radio" type="radio" name="demo" checked />
    Option A
  </label>
  <label style="display:flex;align-items:center;gap:8px;color:#e2e8f0;cursor:pointer;">
    <input class="vel-radio" type="radio" name="demo" />
    Option B
  </label>
</div>`,
        },
        {
          label: 'Switch / Toggle',
          html: `<div style="padding:24px;background:#060b17;border-radius:12px;font-family:system-ui,sans-serif;display:flex;gap:16px;align-items:center;">
  <label class="vel-switch">
    <input type="checkbox" />
    <span></span>
  </label>
  <label class="vel-switch">
    <input type="checkbox" checked />
    <span></span>
  </label>
</div>`,
        },
        {
          label: 'Input group with prefix',
          html: `<div style="padding:24px;background:#060b17;border-radius:12px;font-family:system-ui,sans-serif;max-width:400px;">
  <div class="vel-input-group">
    <span class="vel-input-group-text">https://</span>
    <input class="vel-input" type="text" placeholder="yourdomain.com" />
  </div>
</div>`,
        },
      ]}
    />
  )
}
