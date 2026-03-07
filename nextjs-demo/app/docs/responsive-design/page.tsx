import DocPage from '../_components/DocPage'

export default function ResponsiveDesignPage() {
  return (
    <DocPage
      title="Responsive Design"
      description="VeloraCSS uses a mobile-first responsive system. Prefix any utility with a breakpoint to apply it at that screen size and above."
      table={[
        { class: 'vel-sm:{class}', properties: '@media (min-width: 640px)' },
        { class: 'vel-md:{class}', properties: '@media (min-width: 768px)' },
        { class: 'vel-lg:{class}', properties: '@media (min-width: 1024px)' },
        { class: 'vel-xl:{class}', properties: '@media (min-width: 1280px)' },
        { class: 'vel-2xl:{class}', properties: '@media (min-width: 1536px)' },
      ]}
      examples={[
        {
          label: 'Mobile-first column layout',
          html: `<!-- Stack on mobile, side-by-side on md+ -->
<div class="vel-flex vel-flex-col vel-md:flex-row vel-gap-4">
  <div class="vel-p-4 vel-bg-surface-2 vel-rounded-lg">Column 1</div>
  <div class="vel-p-4 vel-bg-surface-2 vel-rounded-lg">Column 2</div>
</div>`,
        },
        {
          label: 'Responsive text size',
          html: `<h1 class="vel-text-xl vel-md:text-3xl vel-lg:text-5xl vel-font-bold vel-text-white">
  Scales with screen size
</h1>`,
        },
        {
          label: 'Hide and show at breakpoints',
          html: `<!-- Hidden on mobile, visible on md and above -->
<div class="vel-hidden vel-md:block" style="padding:1rem;background:#0d1422;border:1px solid #1e2d45;border-radius:0.5rem;color:#94a3b8">
  Only visible on md+
</div>

<!-- Visible on mobile, hidden on md and above -->
<div class="vel-block vel-md:hidden" style="padding:1rem;background:#0d1422;border:1px solid #1e2d45;border-radius:0.5rem;color:#94a3b8">
  Only visible on mobile
</div>`,
        },
        {
          label: 'Responsive grid columns',
          html: `<div class="vel-grid vel-grid-cols-1 vel-sm:grid-cols-2 vel-lg:grid-cols-4 vel-gap-4">
  <div class="vel-p-4 vel-bg-surface-2 vel-rounded-lg vel-text-center">1</div>
  <div class="vel-p-4 vel-bg-surface-2 vel-rounded-lg vel-text-center">2</div>
  <div class="vel-p-4 vel-bg-surface-2 vel-rounded-lg vel-text-center">3</div>
  <div class="vel-p-4 vel-bg-surface-2 vel-rounded-lg vel-text-center">4</div>
</div>`,
        },
      ]}
    />
  )
}
