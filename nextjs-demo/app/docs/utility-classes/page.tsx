import DocPage from '../_components/DocPage'

export default function UtilityClassesPage() {
  return (
    <DocPage
      title="Utility Classes"
      description="VeloraCSS is a utility-first framework. Instead of writing custom CSS, you compose utility classes directly in your HTML."
      table={[]}
      examples={[
        {
          label: 'Utility composition',
          html: `<div class="vel-flex vel-items-center vel-gap-4 vel-p-6 vel-bg-surface-1 vel-rounded-xl">
  <div class="vel-text-lg vel-font-bold vel-text-primary">Hello VeloraCSS</div>
</div>`,
        },
        {
          label: 'Responsive variants',
          html: `<!-- vel-sm:, vel-md:, vel-lg:, vel-xl:, vel-2xl: prefix -->
<div class="vel-hidden vel-md:block">Only visible on md+</div>`,
        },
        {
          label: 'Hover variants',
          html: `<!-- vel-hover: prefix -->
<div class="vel-bg-neutral-800 vel-hover:bg-primary vel-p-4 vel-rounded-lg">Hover me</div>`,
        },
        {
          label: 'Combining utilities for a complete card',
          html: `<div class="vel-flex vel-flex-col vel-gap-3 vel-p-6 vel-rounded-xl vel-bg-surface-2 vel-border vel-border-base">
  <h2 class="vel-text-xl vel-font-bold vel-text-white">Card Title</h2>
  <p class="vel-text-sm vel-text-muted">Composed entirely from utility classes — no custom CSS needed.</p>
  <button class="vel-btn vel-btn-primary">Get started</button>
</div>`,
        },
        {
          label: 'Why utility-first?',
          html: `<!-- Traditional approach: write custom CSS in a stylesheet
.my-card { padding: 1.5rem; background: #111827; border-radius: 0.75rem; }

VeloraCSS approach: apply utilities directly in HTML -->
<div class="vel-p-6 vel-bg-surface-2 vel-rounded-xl">
  Everything in one place — no context switching.
</div>`,
        },
      ]}
    />
  )
}
