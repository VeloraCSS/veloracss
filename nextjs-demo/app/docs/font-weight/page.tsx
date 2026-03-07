import DocPage from '../_components/DocPage'

export default function FontWeightPage() {
  return (
    <DocPage
      title="Font Weight"
      description="Utilities for controlling the font weight of an element."
      source="typography.css"
      table={[
        { class: 'vel-font-thin', properties: 'font-weight: 100' },
        { class: 'vel-font-extralight', properties: 'font-weight: 200' },
        { class: 'vel-font-light', properties: 'font-weight: 300' },
        { class: 'vel-font-normal', properties: 'font-weight: 400' },
        { class: 'vel-font-medium', properties: 'font-weight: 500' },
        { class: 'vel-font-semibold', properties: 'font-weight: 600' },
        { class: 'vel-font-bold', properties: 'font-weight: 700' },
        { class: 'vel-font-extrabold', properties: 'font-weight: 800' },
        { class: 'vel-font-black', properties: 'font-weight: 900' },
      ]}
      examples={[
        {
          label: 'Weight scale',
          html: `<div class="vel-flex vel-flex-col vel-gap-2">
  <p class="vel-font-thin vel-text-lg" style="color:#e2e8f0">vel-font-thin — VeloraCSS (100)</p>
  <p class="vel-font-light vel-text-lg" style="color:#e2e8f0">vel-font-light — VeloraCSS (300)</p>
  <p class="vel-font-normal vel-text-lg" style="color:#e2e8f0">vel-font-normal — VeloraCSS (400)</p>
  <p class="vel-font-medium vel-text-lg" style="color:#e2e8f0">vel-font-medium — VeloraCSS (500)</p>
  <p class="vel-font-semibold vel-text-lg" style="color:#e2e8f0">vel-font-semibold — VeloraCSS (600)</p>
  <p class="vel-font-bold vel-text-lg" style="color:#e2e8f0">vel-font-bold — VeloraCSS (700)</p>
  <p class="vel-font-black vel-text-lg" style="color:#a87fff">vel-font-black — VeloraCSS (900)</p>
</div>`,
        },
      ]}
    />
  )
}
