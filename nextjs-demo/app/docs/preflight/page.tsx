import DocPage from '../_components/DocPage'

export default function PreflightPage() {
  return (
    <DocPage
      title="Preflight"
      description="VeloraCSS includes an opinionated CSS reset (preflight) that normalizes browser defaults and establishes dark-surface-first defaults."
      source="reset.css"
      table={[
        { class: 'box-sizing: border-box', properties: 'Applied to all elements via *, *::before, *::after' },
        { class: 'margin: 0', properties: 'All elements start with no margin' },
        { class: 'body background', properties: 'var(--vel-surface-bg) — dark surface default' },
        { class: 'body color', properties: 'var(--vel-color-text) — light text default' },
        { class: 'img, video', properties: 'display: block; max-width: 100%' },
        { class: 'font-family', properties: 'var(--vel-font-sans)' },
        { class: 'line-height', properties: '1.5 on body' },
        { class: '-webkit-font-smoothing', properties: 'antialiased on body' },
        { class: 'button, input, select, textarea', properties: 'font: inherit; margin: 0' },
        { class: 'h1–h6', properties: 'font-size: inherit; font-weight: inherit' },
        { class: 'a', properties: 'color: inherit; text-decoration: inherit' },
        { class: 'ol, ul', properties: 'list-style: none; padding: 0' },
      ]}
      examples={[
        {
          label: 'Preflight is automatic — no class needed',
          html: `<!-- Just include velora.css and preflight is applied globally -->
<link rel="stylesheet" href="/velora.css" />

<!-- Your HTML starts with normalized, dark-surface defaults -->
<body>
  <h1>Clean baseline</h1>
  <p>No browser quirks to fight.</p>
</body>`,
        },
        {
          label: 'Dark surface defaults from preflight',
          html: `<!-- body background defaults to var(--vel-surface-bg) = #060b17 -->
<!-- body color defaults to var(--vel-color-text) = #e2e8f0 -->
<!-- No extra classes needed for dark theme base -->

<div style="background:#060b17;color:#e2e8f0;padding:1.5rem;border-radius:0.5rem">
  This matches the preflight body defaults
</div>`,
        },
        {
          label: 'Overriding preflight for light mode',
          html: `<!-- Opt out of dark defaults by setting surface explicitly -->
<body style="background:#ffffff;color:#0f172a">
  <!-- Light mode app -->
</body>

<!-- Or use theme variables to switch -->
<style>
  :root {
    --vel-surface-bg: #f8fafc;
    --vel-color-text: #0f172a;
  }
</style>`,
        },
      ]}
    />
  )
}
