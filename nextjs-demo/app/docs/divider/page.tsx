import DocPage from '../_components/DocPage'

export default function DividerPage() {
  return (
    <DocPage
      title="Divider"
      description="A horizontal or vertical separator used to visually divide sections of content, with optional centered or aligned label text."
      source="divider.css"
      table={[
        { class: 'vel-divider', properties: 'Centered label divider — renders label text between two horizontal lines' },
        { class: 'vel-divider-plain', properties: 'Plain horizontal rule with no label text' },
        { class: 'vel-divider-left', properties: 'Modifier to left-align the label text on the divider' },
        { class: 'vel-divider-right', properties: 'Modifier to right-align the label text on the divider' },
        { class: 'vel-divider-vertical', properties: 'Renders a vertical inline separator between elements' },
        { class: 'vel-divider-primary', properties: 'Applies the primary brand color to the divider line' },
      ]}
      examples={[
        {
          label: 'Plain divider',
          html: `<div style="padding:24px;background:#060b17;border-radius:12px;font-family:system-ui,sans-serif">
  <p style="color:#94a3b8;margin-bottom:12px;">Content above</p>
  <hr class="vel-divider-plain" />
  <p style="color:#94a3b8;margin-top:12px;">Content below</p>
</div>`,
        },
        {
          label: 'With label',
          html: `<div style="padding:24px;background:#060b17;border-radius:12px;font-family:system-ui,sans-serif">
  <p style="color:#94a3b8;margin-bottom:12px;">Sign in with email</p>
  <div class="vel-divider">OR</div>
  <p style="color:#94a3b8;margin-top:12px;">Continue with provider</p>
</div>`,
        },
        {
          label: 'Left-aligned label',
          html: `<div style="padding:24px;background:#060b17;border-radius:12px;font-family:system-ui,sans-serif">
  <div class="vel-divider vel-divider-left">Section Title</div>
  <p style="color:#94a3b8;margin-top:12px;">Content that follows this section heading.</p>
</div>`,
        },
      ]}
    />
  )
}
