import DocPage from '../_components/DocPage'

export default function TextTransformPage() {
  return (
    <DocPage
      title="Text Transform"
      description="Utilities for controlling the transformation of text."
      source="typography.css"
      table={[
        { class: 'vel-uppercase', properties: 'text-transform: uppercase' },
        { class: 'vel-lowercase', properties: 'text-transform: lowercase' },
        { class: 'vel-capitalize', properties: 'text-transform: capitalize' },
        { class: 'vel-normal-case', properties: 'text-transform: none' },
      ]}
      examples={[
        {
          label: 'Text transform variants',
          html: `<div class="vel-flex vel-flex-col vel-gap-3">
  <p class="vel-uppercase vel-text-sm vel-tracking-wider" style="color:#a87fff">vel-uppercase — velora css framework</p>
  <p class="vel-lowercase vel-text-sm" style="color:#94a3b8">vel-lowercase — VELORA CSS FRAMEWORK</p>
  <p class="vel-capitalize vel-text-sm" style="color:#e2e8f0">vel-capitalize — velora css framework</p>
  <p class="vel-normal-case vel-text-sm" style="color:#64748b">vel-normal-case — VeloraCSS Framework</p>
</div>`,
        },
      ]}
    />
  )
}
