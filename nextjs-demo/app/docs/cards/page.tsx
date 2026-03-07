import DocPage from '../_components/DocPage'

export default function CardsPage() {
  return (
    <DocPage
      title="Cards"
      description="Flexible card components with header, body, and footer slots, plus surface, border, hover, color, glass, gradient, and glow variants."
      source="card.css"
      table={[
        { class: 'vel-card', properties: 'Base card — surface background, border, border-radius, overflow hidden' },
        { class: 'vel-card-header', properties: 'Top section with border-bottom and padding' },
        { class: 'vel-card-body', properties: 'Main content area with padding' },
        { class: 'vel-card-footer', properties: 'Bottom section with border-top and padding' },
        { class: 'vel-card-flat', properties: 'Removes box-shadow entirely' },
        { class: 'vel-card-elevated', properties: 'Adds stronger box-shadow elevation' },
        { class: 'vel-card-filled', properties: 'Slightly lighter surface fill' },
        { class: 'vel-card-hover', properties: 'Lifts with translateY and shadow on :hover' },
        { class: 'vel-card-primary', properties: 'Primary accent border-top' },
        { class: 'vel-card-success', properties: 'Success accent border-top' },
        { class: 'vel-card-glass', properties: 'Frosted-glass effect — blur + translucent background' },
        { class: 'vel-card-gradient', properties: 'Gradient primary background' },
        { class: 'vel-card-glow', properties: 'Primary glow box-shadow' },
      ]}
      examples={[
        {
          label: 'Default card',
          html: `<div style="padding:24px;background:#060b17;border-radius:12px;font-family:system-ui,sans-serif;">
  <div class="vel-card" style="max-width:360px;">
    <div class="vel-card-header">Card Header</div>
    <div class="vel-card-body">This is the main body content of the card. You can put anything here.</div>
    <div class="vel-card-footer">Card Footer</div>
  </div>
</div>`,
        },
        {
          label: 'Hover card',
          html: `<div style="padding:24px;background:#060b17;border-radius:12px;font-family:system-ui,sans-serif;">
  <div class="vel-card vel-card-hover" style="max-width:360px;">
    <div class="vel-card-body">
      <p style="margin:0 0 1rem;color:#e2e8f0;">Hover over this card to see it lift.</p>
      <button class="vel-btn vel-btn-primary vel-btn-sm">Action</button>
    </div>
  </div>
</div>`,
        },
        {
          label: 'Glass card',
          html: `<div style="padding:24px;background:linear-gradient(135deg,#1a1040,#0d1a2e);border-radius:12px;font-family:system-ui,sans-serif;">
  <div class="vel-card vel-card-glass" style="max-width:360px;">
    <div class="vel-card-body">
      <p style="margin:0;color:#e2e8f0;">Glass card with blur and translucent background.</p>
    </div>
  </div>
</div>`,
        },
      ]}
    />
  )
}
