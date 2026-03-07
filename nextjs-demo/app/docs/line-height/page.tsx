import DocPage from '../_components/DocPage'

export default function LineHeightPage() {
  return (
    <DocPage
      title="Line Height"
      description="Utilities for controlling the leading (line height) of an element."
      source="typography.css"
      table={[
        { class: 'vel-leading-none', properties: 'line-height: 1' },
        { class: 'vel-leading-tight', properties: 'line-height: 1.25' },
        { class: 'vel-leading-snug', properties: 'line-height: 1.375' },
        { class: 'vel-leading-normal', properties: 'line-height: 1.5' },
        { class: 'vel-leading-relaxed', properties: 'line-height: 1.625' },
        { class: 'vel-leading-loose', properties: 'line-height: 2' },
      ]}
      examples={[
        {
          label: 'Line height',
          html: `<div class="vel-grid vel-grid-cols-2 vel-gap-6">
  <div>
    <p style="color:#64748b;font-size:11px;margin-bottom:6px">vel-leading-tight</p>
    <p class="vel-leading-tight vel-text-sm" style="color:#94a3b8">VeloraCSS is a utility-first CSS framework with tight line spacing. Lines are close together.</p>
  </div>
  <div>
    <p style="color:#64748b;font-size:11px;margin-bottom:6px">vel-leading-relaxed</p>
    <p class="vel-leading-relaxed vel-text-sm" style="color:#94a3b8">VeloraCSS is a utility-first CSS framework with relaxed line spacing. Lines breathe more.</p>
  </div>
</div>`,
        },
      ]}
    />
  )
}
