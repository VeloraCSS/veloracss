import DocPage from '../_components/DocPage'

export default function ThemeVariablesPage() {
  return (
    <DocPage
      title="Theme Variables"
      description="VeloraCSS exposes all design tokens as CSS custom properties on :root, making every value customizable."
      table={[
        { class: '--vel-primary-500', properties: '#7c5cfc (Velora Violet)' },
        { class: '--vel-success-500', properties: '#0ecb81 (Emerald)' },
        { class: '--vel-danger-500', properties: '#f0416c (Rose)' },
        { class: '--vel-warning-500', properties: '#ff9d00 (Amber)' },
        { class: '--vel-info-500', properties: '#2ebde5 (Sky)' },
        { class: '--vel-surface-bg', properties: '#060b17' },
        { class: '--vel-surface-1', properties: '#0d1422' },
        { class: '--vel-surface-2', properties: '#111827' },
        { class: '--vel-surface-3', properties: '#1a2236' },
        { class: '--vel-border-base', properties: '#1e2d45' },
        { class: '--vel-space-1', properties: '0.25rem' },
        { class: '--vel-space-4', properties: '1rem' },
        { class: '--vel-radius-lg', properties: '0.5rem' },
        { class: '--vel-font-sans', properties: "system-ui, -apple-system, sans-serif" },
      ]}
      examples={[
        {
          label: 'Override primary color for your brand',
          html: `<style>
  :root {
    --vel-primary-500: #e11d48; /* rose brand color */
    --vel-primary-400: #fb7185;
    --vel-primary-600: #be123c;
  }
</style>

<!-- All vel-btn-primary, vel-text-primary, vel-bg-primary classes
     now use your custom brand color automatically -->
<button class="vel-btn vel-btn-primary">Branded Button</button>`,
        },
        {
          label: 'Using tokens in custom CSS',
          html: `<style>
  .my-component {
    background: var(--vel-surface-2);
    border: 1px solid var(--vel-border-base);
    border-radius: var(--vel-radius-lg);
    padding: var(--vel-space-4);
    color: var(--vel-text-base);
  }
</style>

<div class="my-component">Custom component using VeloraCSS tokens</div>`,
        },
        {
          label: 'Scoped theme override',
          html: `<!-- Override tokens for a specific section only -->
<section style="--vel-primary-500: #0ecb81; --vel-primary-400: #34d58e;">
  <button class="vel-btn vel-btn-primary">Green Section Button</button>
</section>`,
        },
      ]}
    />
  )
}
