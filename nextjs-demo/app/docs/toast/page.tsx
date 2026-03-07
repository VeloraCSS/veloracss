import DocPage from '../_components/DocPage'

export default function ToastPage() {
  return (
    <DocPage
      title="Toast"
      description="Non-blocking notification messages that appear briefly to inform users of actions, warnings, errors, or successes."
      source="toast.css"
      table={[
        { class: 'vel-toast', properties: 'Base toast notification element' },
        { class: 'vel-toast-container', properties: 'Wrapper that stacks multiple toasts and sets position' },
        { class: 'vel-toast-top-right', properties: 'Positions the container at the top-right of the viewport' },
        { class: 'vel-toast-top-left', properties: 'Positions the container at the top-left of the viewport' },
        { class: 'vel-toast-bottom-right', properties: 'Positions the container at the bottom-right of the viewport' },
        { class: 'vel-toast-bottom-left', properties: 'Positions the container at the bottom-left of the viewport' },
        { class: 'vel-toast-top-center', properties: 'Positions the container at the top-center of the viewport' },
        { class: 'vel-toast-bottom-center', properties: 'Positions the container at the bottom-center of the viewport' },
        { class: 'vel-toast-info', properties: 'Blue-accented informational toast variant' },
        { class: 'vel-toast-success', properties: 'Green-accented success toast variant' },
        { class: 'vel-toast-warning', properties: 'Amber-accented warning toast variant' },
        { class: 'vel-toast-danger', properties: 'Red-accented error/danger toast variant' },
        { class: 'vel-toast-dismiss', properties: 'Close button element inside the toast' },
      ]}
      examples={[
        {
          label: 'Toast variants',
          html: `<div style="padding:24px;background:#060b17;border-radius:12px;font-family:system-ui,sans-serif">
  <div style="display:flex;flex-direction:column;gap:10px;max-width:360px;">
    <div class="vel-toast vel-toast-info">
      <strong>Info:</strong> Your session will expire in 10 minutes.
      <button class="vel-toast-dismiss" aria-label="Dismiss">&times;</button>
    </div>
    <div class="vel-toast vel-toast-success">
      <strong>Success:</strong> Profile updated successfully.
      <button class="vel-toast-dismiss" aria-label="Dismiss">&times;</button>
    </div>
    <div class="vel-toast vel-toast-warning">
      <strong>Warning:</strong> Storage is nearing capacity.
      <button class="vel-toast-dismiss" aria-label="Dismiss">&times;</button>
    </div>
    <div class="vel-toast vel-toast-danger">
      <strong>Error:</strong> Failed to save changes. Please retry.
      <button class="vel-toast-dismiss" aria-label="Dismiss">&times;</button>
    </div>
  </div>
</div>`,
        },
      ]}
    />
  )
}
