import DocPage from '../_components/DocPage'

export default function ModalPage() {
  return (
    <DocPage
      title="Modal"
      description="A dialog overlay component for displaying focused content, forms, or confirmations above the page."
      source="modal.css"
      table={[
        { class: 'vel-modal-backdrop', properties: 'Full-screen overlay backdrop behind the modal' },
        { class: 'vel-modal', properties: 'The modal dialog container, centered on screen' },
        { class: 'vel-modal-sm', properties: 'Small modal width (max-width: 400px)' },
        { class: 'vel-modal-lg', properties: 'Large modal width (max-width: 720px)' },
        { class: 'vel-modal-xl', properties: 'Extra-large modal width (max-width: 960px)' },
        { class: 'vel-modal-full', properties: 'Full-screen modal (width: 100vw; height: 100vh)' },
        { class: 'vel-modal-header', properties: 'Top section of the modal with title and close button' },
        { class: 'vel-modal-body', properties: 'Main content area of the modal with padding' },
        { class: 'vel-modal-footer', properties: 'Bottom section of the modal with action buttons' },
        { class: 'vel-modal-title', properties: 'Heading text element inside vel-modal-header' },
        { class: 'vel-modal-close', properties: 'Close button positioned in the modal header' },
      ]}
      examples={[
        {
          label: 'Modal structure',
          html: `<div style="padding:24px;background:#060b17;border-radius:12px;font-family:system-ui,sans-serif">
  <!-- Backdrop -->
  <div class="vel-modal-backdrop">
    <!-- Modal dialog -->
    <div class="vel-modal">
      <div class="vel-modal-header">
        <h2 class="vel-modal-title">Confirm Action</h2>
        <button class="vel-modal-close" aria-label="Close">&times;</button>
      </div>
      <div class="vel-modal-body">
        <p>Are you sure you want to continue? This action cannot be undone.</p>
      </div>
      <div class="vel-modal-footer">
        <button class="vel-btn">Cancel</button>
        <button class="vel-btn vel-btn-primary">Confirm</button>
      </div>
    </div>
  </div>
</div>`,
        },
      ]}
    />
  )
}
