import DocPage from '../_components/DocPage'

export default function LetterSpacingPage() {
  return (
    <DocPage
      title="Letter Spacing"
      description="Utilities for controlling the tracking (letter spacing) of an element."
      source="typography.css"
      table={[
        { class: 'vel-tracking-tighter', properties: 'letter-spacing: -0.05em' },
        { class: 'vel-tracking-tight', properties: 'letter-spacing: -0.025em' },
        { class: 'vel-tracking-normal', properties: 'letter-spacing: 0em' },
        { class: 'vel-tracking-wide', properties: 'letter-spacing: 0.025em' },
        { class: 'vel-tracking-wider', properties: 'letter-spacing: 0.05em' },
        { class: 'vel-tracking-widest', properties: 'letter-spacing: 0.1em' },
      ]}
      examples={[
        {
          label: 'Tracking variants',
          html: `<div class="vel-flex vel-flex-col vel-gap-3">
  <p class="vel-tracking-tighter vel-text-base" style="color:#e2e8f0">vel-tracking-tighter — VELOCITY</p>
  <p class="vel-tracking-normal vel-text-base" style="color:#e2e8f0">vel-tracking-normal — VELOCITY</p>
  <p class="vel-tracking-wide vel-text-base" style="color:#e2e8f0">vel-tracking-wide — VELOCITY</p>
  <p class="vel-tracking-wider vel-text-base vel-uppercase" style="color:#a87fff">vel-tracking-wider vel-uppercase</p>
  <p class="vel-tracking-widest vel-text-xs vel-uppercase vel-font-semibold" style="color:#64748b">vel-tracking-widest — EYEBROW LABEL</p>
</div>`,
        },
      ]}
    />
  )
}
