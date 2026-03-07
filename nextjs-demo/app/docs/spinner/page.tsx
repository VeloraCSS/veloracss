import DocPage from '../_components/DocPage'

export default function SpinnerPage() {
  return (
    <DocPage
      title="Spinner"
      description="Loading spinner indicators in multiple sizes, colors, and an alternative dots animation variant."
      source="spinner.css"
      table={[
        { class: 'vel-spinner', properties: 'Base spinner — circular border animation, default size' },
        { class: 'vel-spinner-xs', properties: 'Extra-small size' },
        { class: 'vel-spinner-sm', properties: 'Small size' },
        { class: 'vel-spinner-lg', properties: 'Large size' },
        { class: 'vel-spinner-xl', properties: 'Extra-large size' },
        { class: 'vel-spinner-primary', properties: 'Primary color border' },
        { class: 'vel-spinner-success', properties: 'Success green border' },
        { class: 'vel-spinner-danger', properties: 'Danger red border' },
        { class: 'vel-spinner-white', properties: 'White border — for use on dark/colored backgrounds' },
        { class: 'vel-spinner-dots', properties: 'Three-dot pulsing animation instead of ring' },
        { class: 'vel-spinner-glow', properties: 'Adds a colored glow to the spinning ring' },
      ]}
      examples={[
        {
          label: 'Sizes',
          html: `<div style="padding:24px;background:#060b17;border-radius:12px;font-family:system-ui,sans-serif;display:flex;gap:16px;align-items:center;">
  <div class="vel-spinner vel-spinner-primary vel-spinner-xs"></div>
  <div class="vel-spinner vel-spinner-primary vel-spinner-sm"></div>
  <div class="vel-spinner vel-spinner-primary"></div>
  <div class="vel-spinner vel-spinner-primary vel-spinner-lg"></div>
  <div class="vel-spinner vel-spinner-primary vel-spinner-xl"></div>
</div>`,
        },
        {
          label: 'Colors',
          html: `<div style="padding:24px;background:#060b17;border-radius:12px;font-family:system-ui,sans-serif;display:flex;gap:16px;align-items:center;">
  <div class="vel-spinner vel-spinner-primary"></div>
  <div class="vel-spinner vel-spinner-success"></div>
  <div class="vel-spinner vel-spinner-danger"></div>
  <div style="background:#1a2236;padding:8px;border-radius:8px;">
    <div class="vel-spinner vel-spinner-white"></div>
  </div>
</div>`,
        },
        {
          label: 'Dots variant',
          html: `<div style="padding:24px;background:#060b17;border-radius:12px;font-family:system-ui,sans-serif;">
  <div class="vel-spinner vel-spinner-dots vel-spinner-primary"></div>
</div>`,
        },
      ]}
    />
  )
}
