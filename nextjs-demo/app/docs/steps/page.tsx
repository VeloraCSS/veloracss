import DocPage from '../_components/DocPage'

export default function StepsPage() {
  return (
    <DocPage
      title="Steps"
      description="A progress indicator that guides users through a multi-step process, with horizontal and vertical layout options."
      source="steps.css"
      table={[
        { class: 'vel-steps', properties: 'Container for the step sequence (horizontal by default)' },
        { class: 'vel-step', properties: 'Individual step wrapper element' },
        { class: 'vel-step-indicator', properties: 'Circular badge showing step number or completion icon' },
        { class: 'vel-step-label', properties: 'Step title text displayed below or beside the indicator' },
        { class: 'vel-step-description', properties: 'Secondary descriptive text beneath the step label' },
        { class: 'vel-step-complete', properties: 'Modifier on vel-step indicating a finished step' },
        { class: 'vel-step-active', properties: 'Modifier on vel-step indicating the current in-progress step' },
        { class: 'vel-steps-vertical', properties: 'Modifier on vel-steps to render steps in a vertical column' },
        { class: 'vel-step-content', properties: 'Content area that appears below a step in vertical mode' },
      ]}
      examples={[
        {
          label: 'Horizontal stepper',
          html: `<div style="padding:24px;background:#060b17;border-radius:12px;font-family:system-ui,sans-serif">
  <div class="vel-steps">
    <div class="vel-step vel-step-complete">
      <div class="vel-step-indicator">&#10003;</div>
      <div class="vel-step-label">Account</div>
    </div>
    <div class="vel-step vel-step-complete">
      <div class="vel-step-indicator">&#10003;</div>
      <div class="vel-step-label">Profile</div>
    </div>
    <div class="vel-step vel-step-active">
      <div class="vel-step-indicator">3</div>
      <div class="vel-step-label">Billing</div>
    </div>
    <div class="vel-step">
      <div class="vel-step-indicator">4</div>
      <div class="vel-step-label">Review</div>
    </div>
  </div>
</div>`,
        },
        {
          label: 'Vertical stepper',
          html: `<div style="padding:24px;background:#060b17;border-radius:12px;font-family:system-ui,sans-serif">
  <div class="vel-steps vel-steps-vertical">
    <div class="vel-step vel-step-complete">
      <div class="vel-step-indicator">&#10003;</div>
      <div class="vel-step-label">Create account</div>
      <div class="vel-step-description">Provide your email and password.</div>
      <div class="vel-step-content"></div>
    </div>
    <div class="vel-step vel-step-active">
      <div class="vel-step-indicator">2</div>
      <div class="vel-step-label">Verify email</div>
      <div class="vel-step-description">Check your inbox for a confirmation link.</div>
      <div class="vel-step-content"></div>
    </div>
    <div class="vel-step">
      <div class="vel-step-indicator">3</div>
      <div class="vel-step-label">Set up profile</div>
      <div class="vel-step-description">Add your name, avatar, and preferences.</div>
      <div class="vel-step-content"></div>
    </div>
  </div>
</div>`,
        },
      ]}
    />
  )
}
