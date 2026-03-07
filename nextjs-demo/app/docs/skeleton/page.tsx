import DocPage from '../_components/DocPage'

export default function SkeletonPage() {
  return (
    <DocPage
      title="Skeleton"
      description="Animated placeholder shapes that represent loading content, reducing perceived wait time and layout shift."
      source="skeleton.css"
      table={[
        { class: 'vel-skeleton', properties: 'Base skeleton element with shimmer animation' },
        { class: 'vel-skeleton-text', properties: 'Short rounded bar representing a line of text' },
        { class: 'vel-skeleton-circle', properties: 'Circular skeleton for avatars or icons' },
        { class: 'vel-skeleton-rect', properties: 'Rectangular skeleton for images or cards' },
        { class: 'vel-skeleton-xs', properties: 'Extra-small size variant (height: 0.5rem)' },
        { class: 'vel-skeleton-sm', properties: 'Small size variant (height: 0.75rem)' },
        { class: 'vel-skeleton-md', properties: 'Medium size variant (height: 1rem)' },
        { class: 'vel-skeleton-lg', properties: 'Large size variant (height: 1.5rem)' },
        { class: 'vel-skeleton-xl', properties: 'Extra-large size variant (height: 2rem)' },
        { class: 'vel-skeleton-2xl', properties: '2x extra-large size variant (height: 3rem)' },
        { class: 'vel-skeleton-3xl', properties: '3x extra-large size variant (height: 4rem)' },
        { class: 'vel-skeleton-avatar-sm', properties: 'Small circular avatar skeleton (32px)' },
        { class: 'vel-skeleton-avatar', properties: 'Default circular avatar skeleton (48px)' },
        { class: 'vel-skeleton-avatar-lg', properties: 'Large circular avatar skeleton (64px)' },
        { class: 'vel-skeleton-avatar-xl', properties: 'Extra-large circular avatar skeleton (96px)' },
      ]}
      examples={[
        {
          label: 'Card skeleton',
          html: `<div style="padding:24px;background:#060b17;border-radius:12px;font-family:system-ui,sans-serif">
  <div style="display:flex;align-items:flex-start;gap:16px;max-width:320px;">
    <div class="vel-skeleton vel-skeleton-avatar"></div>
    <div style="flex:1;display:flex;flex-direction:column;gap:8px;">
      <div class="vel-skeleton vel-skeleton-text" style="width:60%"></div>
      <div class="vel-skeleton vel-skeleton-text" style="width:90%"></div>
      <div class="vel-skeleton vel-skeleton-text" style="width:75%"></div>
      <div class="vel-skeleton vel-skeleton-text vel-skeleton-sm" style="width:40%"></div>
    </div>
  </div>
</div>`,
        },
        {
          label: 'Text lines',
          html: `<div style="padding:24px;background:#060b17;border-radius:12px;font-family:system-ui,sans-serif">
  <div style="display:flex;flex-direction:column;gap:10px;max-width:400px;">
    <div class="vel-skeleton vel-skeleton-text vel-skeleton-lg" style="width:55%"></div>
    <div class="vel-skeleton vel-skeleton-text" style="width:100%"></div>
    <div class="vel-skeleton vel-skeleton-text" style="width:92%"></div>
    <div class="vel-skeleton vel-skeleton-text" style="width:85%"></div>
    <div class="vel-skeleton vel-skeleton-text" style="width:70%"></div>
  </div>
</div>`,
        },
      ]}
    />
  )
}
