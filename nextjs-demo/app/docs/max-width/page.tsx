import DocPage from '../_components/DocPage'

export default function MaxWidthPage() {
  return (
    <DocPage
      title="Max-Width"
      description="Utilities for setting the maximum width of an element."
      source="sizing.css"
      table={[
        { class: 'vel-max-w-none', properties: 'max-width: none' },
        { class: 'vel-max-w-xs', properties: 'max-width: 20rem' },
        { class: 'vel-max-w-sm', properties: 'max-width: 24rem' },
        { class: 'vel-max-w-md', properties: 'max-width: 28rem' },
        { class: 'vel-max-w-lg', properties: 'max-width: 32rem' },
        { class: 'vel-max-w-xl', properties: 'max-width: 36rem' },
        { class: 'vel-max-w-2xl', properties: 'max-width: 42rem' },
        { class: 'vel-max-w-3xl', properties: 'max-width: 48rem' },
        { class: 'vel-max-w-4xl', properties: 'max-width: 56rem' },
        { class: 'vel-max-w-5xl', properties: 'max-width: 64rem' },
        { class: 'vel-max-w-6xl', properties: 'max-width: 72rem' },
        { class: 'vel-max-w-full', properties: 'max-width: 100%' },
        { class: 'vel-max-w-screen', properties: 'max-width: 100vw' },
      ]}
      examples={[
        {
          label: 'Max-width scale',
          html: `<div class="vel-flex vel-flex-col vel-gap-3">
  <div class="vel-max-w-xs vel-bg-primary vel-text-white vel-rounded-md" style="padding:10px 16px;font-size:13px">vel-max-w-xs (20rem)</div>
  <div class="vel-max-w-sm vel-bg-success vel-text-white vel-rounded-md" style="padding:10px 16px;font-size:13px">vel-max-w-sm (24rem)</div>
  <div class="vel-max-w-md vel-bg-info vel-text-white vel-rounded-md" style="padding:10px 16px;font-size:13px">vel-max-w-md (28rem)</div>
</div>`,
        },
      ]}
    />
  )
}
