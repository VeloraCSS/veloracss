'use client'

import { useState, useCallback } from 'react'

// ─── Build-time constants ─────────────────────────────────────────────────────

const IS_PROD = process.env.NODE_ENV === 'production'
const BASE_PATH      = IS_PROD ? '/veloracss' : ''
const PLAYGROUND_URL = IS_PROD
  ? 'https://velorax.github.io/veloracss/playground'
  : 'http://localhost:5173'
const DOCS_URL = IS_PROD ? '/veloracss/docs' : '/docs'

function toPlaygroundUrl(html: string): string {
  const encoded = btoa(new TextEncoder().encode(html).reduce((s, b) => s + String.fromCharCode(b), ''))
  return `${PLAYGROUND_URL}/#code=${encoded}`
}

// ─── Design tokens ────────────────────────────────────────────────────────────

const C = {
  page:     '#060b17',
  header:   '#060b17',
  surface:  '#0d1422',
  surface2: '#111827',
  border:   '#1e2d45',
  text:     '#e2e8f0',
  muted:    '#64748b',
  accent:   '#7c5cfc',
  label:    '#c4b5fd',
}

// ─── Code block with Copy + Try in Playground ────────────────────────────────

function CodeBlock({ code }: { code: string }) {
  const [copied, setCopied] = useState(false)

  const handleCopy = useCallback(() => {
    navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }, [code])

  return (
    <div style={{ border: `1px solid ${C.border}`, borderRadius: '12px', overflow: 'hidden', marginTop: '12px' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '8px 16px', background: C.surface, borderBottom: `1px solid ${C.border}` }}>
        <span style={{ fontSize: '11px', fontWeight: 500, color: C.muted, letterSpacing: '0.05em', textTransform: 'uppercase' as const }}>
          HTML
        </span>
        <div style={{ display: 'flex', gap: '8px' }}>
          <button
            onClick={handleCopy}
            style={{
              fontSize: '11px', fontWeight: 500, padding: '4px 10px', borderRadius: '6px', cursor: 'pointer',
              background: copied ? '#0ecb8120' : C.surface2,
              color: copied ? '#0ecb81' : '#94a3b8',
              border: `1px solid ${copied ? '#0ecb8140' : C.border}`,
              transition: 'all .15s',
            }}
          >
            {copied ? '✓ Copied' : 'Copy'}
          </button>
          <a
            href={toPlaygroundUrl(code)}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontSize: '11px', fontWeight: 500, padding: '4px 10px', borderRadius: '6px',
              background: '#7c5cfc20', color: C.label,
              border: '1px solid #7c5cfc40', textDecoration: 'none',
              transition: 'all .15s',
            }}
          >
            Try in Playground →
          </a>
        </div>
      </div>
      <pre style={{
        margin: 0, padding: '16px',
        background: C.page,
        color: '#94a3b8',
        fontSize: '12px', lineHeight: '1.7',
        whiteSpace: 'pre-wrap', wordBreak: 'break-all',
        maxHeight: '280px', overflowY: 'auto',
        fontFamily: "'Fira Code', 'Cascadia Code', Consolas, monospace",
      }}>
        <code>{code}</code>
      </pre>
    </div>
  )
}

// ─── Section heading ──────────────────────────────────────────────────────────

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p style={{ fontSize: '11px', fontWeight: 600, color: C.muted, letterSpacing: '0.08em', textTransform: 'uppercase' as const, marginBottom: '16px' }}>
      {children}
    </p>
  )
}

// ─── Preview box ─────────────────────────────────────────────────────────────

function PreviewBox({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ background: C.surface2, borderRadius: '12px', padding: '28px', border: `1px solid ${C.border}` }}>
      {children}
    </div>
  )
}

// ─── Code snippets (dark-themed) ─────────────────────────────────────────────

const BUTTON_CODE = `<div style="min-height:100vh;background:#060b17;padding:40px;font-family:system-ui,sans-serif">
  <div style="max-width:720px;margin:0 auto">

    <h1 class="vel-text-3xl vel-font-bold vel-mb-8 vel-tracking-tight" style="color:#f1f5f9">Buttons</h1>

    <section class="vel-mb-8">
      <h2 class="vel-text-xs vel-font-semibold vel-uppercase vel-tracking-widest vel-mb-4" style="color:#64748b">Solid</h2>
      <div class="vel-flex vel-flex-wrap vel-gap-3">
        <button class="vel-btn vel-btn-primary">Primary</button>
        <button class="vel-btn vel-btn-secondary">Secondary</button>
        <button class="vel-btn vel-btn-success">Success</button>
        <button class="vel-btn vel-btn-danger">Danger</button>
        <button class="vel-btn vel-btn-warning">Warning</button>
        <button class="vel-btn vel-btn-info">Info</button>
      </div>
    </section>

    <section class="vel-mb-8">
      <h2 class="vel-text-xs vel-font-semibold vel-uppercase vel-tracking-widest vel-mb-4" style="color:#64748b">Outline &amp; Ghost</h2>
      <div class="vel-flex vel-flex-wrap vel-gap-3">
        <button class="vel-btn vel-btn-outline-primary">Outline</button>
        <button class="vel-btn vel-btn-ghost">Ghost</button>
        <button class="vel-btn vel-btn-link">Link</button>
        <button class="vel-btn vel-btn-primary" disabled>Disabled</button>
      </div>
    </section>

    <section>
      <h2 class="vel-text-xs vel-font-semibold vel-uppercase vel-tracking-widest vel-mb-4" style="color:#64748b">Sizes</h2>
      <div class="vel-flex vel-flex-wrap vel-items-center vel-gap-3">
        <button class="vel-btn vel-btn-primary vel-btn-xs">XSmall</button>
        <button class="vel-btn vel-btn-primary vel-btn-sm">Small</button>
        <button class="vel-btn vel-btn-primary">Default</button>
        <button class="vel-btn vel-btn-primary vel-btn-lg">Large</button>
        <button class="vel-btn vel-btn-primary vel-btn-xl">XLarge</button>
      </div>
    </section>

  </div>
</div>`

const CARD_CODE = `<div style="min-height:100vh;background:#060b17;padding:40px;font-family:system-ui,sans-serif">
  <div style="max-width:900px;margin:0 auto">

    <h1 class="vel-text-3xl vel-font-bold vel-mb-8 vel-tracking-tight" style="color:#f1f5f9">Cards</h1>

    <div class="vel-grid vel-grid-cols-3 vel-gap-6 vel-mb-6">
      <div class="vel-card vel-card-hover">
        <div class="vel-card-header">Hover Card</div>
        <div class="vel-card-body">
          <p class="vel-text-neutral-500 vel-text-sm vel-mb-4">Shadow lifts on hover.</p>
          <button class="vel-btn vel-btn-primary vel-btn-sm">Action</button>
        </div>
      </div>
      <div class="vel-card vel-card-glass">
        <div class="vel-card-header">Glass</div>
        <div class="vel-card-body">
          <p class="vel-text-neutral-500 vel-text-sm vel-mb-4">Glassmorphism variant.</p>
          <button class="vel-btn vel-btn-outline-primary vel-btn-sm">Action</button>
        </div>
      </div>
      <div class="vel-card vel-card-primary">
        <div class="vel-card-body">
          <h3 class="vel-text-base vel-font-semibold vel-mb-2" style="color:#fff">Primary Card</h3>
          <p class="vel-text-sm" style="color:rgba(255,255,255,.75)">Brand-colored card.</p>
        </div>
      </div>
    </div>

    <div class="vel-grid vel-grid-cols-2 vel-gap-6">
      <div class="vel-card vel-card-elevated">
        <div class="vel-card-header">Elevated</div>
        <div class="vel-card-body">
          <p class="vel-text-neutral-500 vel-text-sm">Large shadow for depth and prominence.</p>
        </div>
      </div>
      <div class="vel-card vel-card-success">
        <div class="vel-card-body">
          <h3 class="vel-text-base vel-font-semibold vel-mb-2" style="color:#fff">Success Card</h3>
          <p class="vel-text-sm" style="color:rgba(255,255,255,.75)">Emerald brand tint.</p>
        </div>
      </div>
    </div>

  </div>
</div>`

const BADGE_CODE = `<div style="min-height:100vh;background:#060b17;padding:40px;font-family:system-ui,sans-serif">
  <div style="max-width:720px;margin:0 auto">

    <h1 class="vel-text-3xl vel-font-bold vel-mb-8 vel-tracking-tight" style="color:#f1f5f9">Badges &amp; Alerts</h1>

    <section class="vel-mb-8">
      <h2 class="vel-text-xs vel-font-semibold vel-uppercase vel-tracking-widest vel-mb-4" style="color:#64748b">Badges</h2>
      <div class="vel-flex vel-flex-wrap vel-gap-3">
        <span class="vel-badge vel-badge-primary">Primary</span>
        <span class="vel-badge vel-badge-success">Success</span>
        <span class="vel-badge vel-badge-danger">Danger</span>
        <span class="vel-badge vel-badge-warning">Warning</span>
        <span class="vel-badge vel-badge-info">Info</span>
        <span class="vel-badge vel-badge-secondary">Secondary</span>
      </div>
    </section>

    <section>
      <h2 class="vel-text-xs vel-font-semibold vel-uppercase vel-tracking-widest vel-mb-4" style="color:#64748b">Alerts</h2>
      <div class="vel-flex vel-flex-col vel-gap-3">
        <div class="vel-alert vel-alert-info">Info — Something worth knowing about.</div>
        <div class="vel-alert vel-alert-success">Success — Your changes have been saved.</div>
        <div class="vel-alert vel-alert-warning">Warning — Review before continuing.</div>
        <div class="vel-alert vel-alert-danger">Danger — This action cannot be undone.</div>
      </div>
    </section>

  </div>
</div>`

const GRADIENT_CODE = `<div style="min-height:100vh;background:#060b17;padding:40px;font-family:system-ui,sans-serif">
  <div style="max-width:720px;margin:0 auto">

    <h1 class="vel-text-3xl vel-font-bold vel-mb-8 vel-tracking-tight" style="color:#f1f5f9">Gradients &amp; Glows</h1>

    <section class="vel-mb-8">
      <h2 class="vel-text-xs vel-font-semibold vel-uppercase vel-tracking-widest vel-mb-4" style="color:#64748b">Gradient backgrounds</h2>
      <div class="vel-grid vel-grid-cols-3 vel-gap-4">
        <div class="vel-bg-gradient-primary vel-p-6 vel-rounded-xl vel-text-center vel-font-semibold" style="color:#fff">primary</div>
        <div class="vel-bg-gradient-aurora vel-p-6 vel-rounded-xl vel-text-center vel-font-semibold" style="color:#fff">aurora</div>
        <div class="vel-bg-gradient-ocean vel-p-6 vel-rounded-xl vel-text-center vel-font-semibold" style="color:#fff">ocean</div>
        <div class="vel-bg-gradient-success vel-p-6 vel-rounded-xl vel-text-center vel-font-semibold" style="color:#fff">success</div>
        <div class="vel-bg-gradient-danger vel-p-6 vel-rounded-xl vel-text-center vel-font-semibold" style="color:#fff">danger</div>
        <div class="vel-bg-gradient-sunset vel-p-6 vel-rounded-xl vel-text-center vel-font-semibold" style="color:#fff">sunset</div>
      </div>
    </section>

    <section>
      <h2 class="vel-text-xs vel-font-semibold vel-uppercase vel-tracking-widest vel-mb-4" style="color:#64748b">Glow buttons</h2>
      <div class="vel-flex vel-flex-wrap vel-gap-4">
        <button class="vel-btn vel-btn-primary vel-btn-glow-primary">Glow Primary</button>
        <button class="vel-btn vel-btn-success vel-btn-glow-success">Glow Success</button>
        <button class="vel-btn vel-btn-danger vel-btn-glow-danger">Glow Danger</button>
      </div>
    </section>

  </div>
</div>`

const COLORS_CODE = `<div style="min-height:100vh;background:#060b17;padding:40px;font-family:system-ui,sans-serif">
  <div style="max-width:800px;margin:0 auto">

    <h1 class="vel-text-3xl vel-font-bold vel-mb-8 vel-tracking-tight" style="color:#f1f5f9">Colors</h1>

    <section class="vel-mb-8">
      <h2 class="vel-text-xs vel-font-semibold vel-uppercase vel-tracking-widest vel-mb-4" style="color:#64748b">Semantic</h2>
      <div class="vel-grid vel-grid-cols-6 vel-gap-3">
        <div class="vel-bg-primary vel-text-white vel-p-4 vel-rounded-xl vel-text-center vel-text-sm vel-font-medium">primary</div>
        <div class="vel-bg-secondary vel-text-white vel-p-4 vel-rounded-xl vel-text-center vel-text-sm vel-font-medium">secondary</div>
        <div class="vel-bg-success vel-text-white vel-p-4 vel-rounded-xl vel-text-center vel-text-sm vel-font-medium">success</div>
        <div class="vel-bg-danger vel-text-white vel-p-4 vel-rounded-xl vel-text-center vel-text-sm vel-font-medium">danger</div>
        <div class="vel-bg-warning vel-p-4 vel-rounded-xl vel-text-center vel-text-sm vel-font-medium">warning</div>
        <div class="vel-bg-info vel-text-white vel-p-4 vel-rounded-xl vel-text-center vel-text-sm vel-font-medium">info</div>
      </div>
    </section>

    <section class="vel-mb-8">
      <h2 class="vel-text-xs vel-font-semibold vel-uppercase vel-tracking-widest vel-mb-4" style="color:#64748b">Light variants</h2>
      <div class="vel-grid vel-grid-cols-5 vel-gap-3">
        <div class="vel-bg-primary-light vel-text-primary vel-p-4 vel-rounded-xl vel-text-center vel-text-sm vel-font-medium">primary</div>
        <div class="vel-bg-success-light vel-text-success vel-p-4 vel-rounded-xl vel-text-center vel-text-sm vel-font-medium">success</div>
        <div class="vel-bg-danger-light vel-text-danger vel-p-4 vel-rounded-xl vel-text-center vel-text-sm vel-font-medium">danger</div>
        <div class="vel-bg-warning-light vel-text-neutral-700 vel-p-4 vel-rounded-xl vel-text-center vel-text-sm vel-font-medium">warning</div>
        <div class="vel-bg-info-light vel-text-info vel-p-4 vel-rounded-xl vel-text-center vel-text-sm vel-font-medium">info</div>
      </div>
    </section>

    <section>
      <h2 class="vel-text-xs vel-font-semibold vel-uppercase vel-tracking-widest vel-mb-4" style="color:#64748b">Neutral scale</h2>
      <div class="vel-flex vel-gap-2">
        <div class="vel-bg-neutral-50  vel-flex-1 vel-py-4 vel-rounded-lg vel-text-center" style="font-size:10px;color:#334155">50</div>
        <div class="vel-bg-neutral-100 vel-flex-1 vel-py-4 vel-rounded-lg vel-text-center" style="font-size:10px;color:#334155">100</div>
        <div class="vel-bg-neutral-200 vel-flex-1 vel-py-4 vel-rounded-lg vel-text-center" style="font-size:10px;color:#334155">200</div>
        <div class="vel-bg-neutral-300 vel-flex-1 vel-py-4 vel-rounded-lg vel-text-center" style="font-size:10px;color:#334155">300</div>
        <div class="vel-bg-neutral-400 vel-flex-1 vel-py-4 vel-rounded-lg vel-text-center" style="font-size:10px;color:#fff">400</div>
        <div class="vel-bg-neutral-500 vel-flex-1 vel-py-4 vel-rounded-lg vel-text-center" style="font-size:10px;color:#fff">500</div>
        <div class="vel-bg-neutral-600 vel-flex-1 vel-py-4 vel-rounded-lg vel-text-center" style="font-size:10px;color:#fff">600</div>
        <div class="vel-bg-neutral-700 vel-flex-1 vel-py-4 vel-rounded-lg vel-text-center" style="font-size:10px;color:#fff">700</div>
        <div class="vel-bg-neutral-800 vel-flex-1 vel-py-4 vel-rounded-lg vel-text-center" style="font-size:10px;color:#fff">800</div>
        <div class="vel-bg-neutral-900 vel-flex-1 vel-py-4 vel-rounded-lg vel-text-center" style="font-size:10px;color:#fff">900</div>
        <div class="vel-bg-neutral-950 vel-flex-1 vel-py-4 vel-rounded-lg vel-text-center" style="font-size:10px;color:#fff">950</div>
      </div>
    </section>

  </div>
</div>`

const TYPOGRAPHY_CODE = `<div style="min-height:100vh;background:#060b17;padding:40px;font-family:system-ui,sans-serif">
  <div style="max-width:640px;margin:0 auto">

    <h1 class="vel-text-3xl vel-font-bold vel-mb-8 vel-tracking-tight" style="color:#f1f5f9">Typography</h1>

    <section class="vel-mb-10">
      <h2 class="vel-text-xs vel-font-semibold vel-uppercase vel-tracking-widest vel-mb-5" style="color:#64748b">Type scale</h2>
      <div class="vel-space-y-3">
        <p class="vel-text-5xl vel-font-black vel-leading-none" style="color:#f1f5f9">Display — vel-text-5xl</p>
        <p class="vel-text-3xl vel-font-bold" style="color:#f1f5f9">Heading 1 — vel-text-3xl</p>
        <p class="vel-text-2xl vel-font-semibold" style="color:#e2e8f0">Heading 2 — vel-text-2xl</p>
        <p class="vel-text-xl vel-font-medium" style="color:#cbd5e1">Heading 3 — vel-text-xl</p>
        <p class="vel-text-base" style="color:#94a3b8">Body — the quick brown fox jumps over the lazy dog.</p>
        <p class="vel-text-sm" style="color:#64748b">Small — secondary information and captions.</p>
        <p class="vel-text-xs vel-uppercase vel-tracking-wider vel-font-semibold" style="color:#475569">Label / Eyebrow — vel-text-xs</p>
      </div>
    </section>

    <section>
      <h2 class="vel-text-xs vel-font-semibold vel-uppercase vel-tracking-widest vel-mb-5" style="color:#64748b">Text colors</h2>
      <div class="vel-space-y-1">
        <p class="vel-text-xl vel-font-medium vel-text-primary">vel-text-primary</p>
        <p class="vel-text-xl vel-font-medium vel-text-success">vel-text-success</p>
        <p class="vel-text-xl vel-font-medium vel-text-danger">vel-text-danger</p>
        <p class="vel-text-xl vel-font-medium vel-text-warning">vel-text-warning</p>
        <p class="vel-text-xl vel-font-medium vel-text-info">vel-text-info</p>
      </div>
    </section>

  </div>
</div>`

const PAGINATION_CODE = `<div style="min-height:100vh;background:#060b17;padding:40px;font-family:system-ui,sans-serif">
  <div style="max-width:720px;margin:0 auto">

    <h1 class="vel-text-3xl vel-font-bold vel-mb-8 vel-tracking-tight" style="color:#f1f5f9">Pagination &amp; Breadcrumb</h1>

    <section class="vel-mb-10">
      <h2 class="vel-text-xs vel-font-semibold vel-uppercase vel-tracking-widest vel-mb-4" style="color:#64748b">Breadcrumb</h2>
      <ol class="vel-breadcrumb vel-breadcrumb-chevron">
        <li class="vel-breadcrumb-item"><a href="#" class="vel-breadcrumb-link">Home</a></li>
        <li class="vel-breadcrumb-item"><a href="#" class="vel-breadcrumb-link">Components</a></li>
        <li class="vel-breadcrumb-item"><span class="vel-breadcrumb-active">Breadcrumb</span></li>
      </ol>
    </section>

    <section>
      <h2 class="vel-text-xs vel-font-semibold vel-uppercase vel-tracking-widest vel-mb-4" style="color:#64748b">Pagination</h2>
      <nav class="vel-pagination">
        <span class="vel-page-item"><span class="vel-page-link vel-page-link-disabled">← Prev</span></span>
        <span class="vel-page-item"><a href="#" class="vel-page-link">1</a></span>
        <span class="vel-page-item"><a href="#" class="vel-page-link vel-page-link-active">2</a></span>
        <span class="vel-page-item"><a href="#" class="vel-page-link">3</a></span>
        <span class="vel-page-ellipsis">…</span>
        <span class="vel-page-item"><a href="#" class="vel-page-link">8</a></span>
        <span class="vel-page-item"><a href="#" class="vel-page-link">Next →</a></span>
      </nav>
    </section>

  </div>
</div>`

const STEPS_CODE = `<div style="min-height:100vh;background:#060b17;padding:40px;font-family:system-ui,sans-serif">
  <div style="max-width:720px;margin:0 auto">

    <h1 class="vel-text-3xl vel-font-bold vel-mb-8 vel-tracking-tight" style="color:#f1f5f9">Steps</h1>

    <section class="vel-mb-10">
      <h2 class="vel-text-xs vel-font-semibold vel-uppercase vel-tracking-widest vel-mb-6" style="color:#64748b">Horizontal</h2>
      <div class="vel-steps">
        <div class="vel-step vel-step-complete">
          <div class="vel-step-indicator">✓</div>
          <div class="vel-step-label">Account</div>
        </div>
        <div class="vel-step vel-step-complete">
          <div class="vel-step-indicator">✓</div>
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
    </section>

  </div>
</div>`

const SKELETON_CODE = `<div style="min-height:100vh;background:#060b17;padding:40px;font-family:system-ui,sans-serif">
  <div style="max-width:720px;margin:0 auto">

    <h1 class="vel-text-3xl vel-font-bold vel-mb-8 vel-tracking-tight" style="color:#f1f5f9">Skeleton &amp; Kbd</h1>

    <section class="vel-mb-10">
      <h2 class="vel-text-xs vel-font-semibold vel-uppercase vel-tracking-widest vel-mb-4" style="color:#64748b">Skeleton loaders</h2>
      <div class="vel-flex vel-gap-4 vel-mb-6">
        <div class="vel-skeleton vel-skeleton-avatar-xl"></div>
        <div class="vel-flex-1">
          <div class="vel-skeleton vel-skeleton-text vel-skeleton-lg vel-mb-3"></div>
          <div class="vel-skeleton vel-skeleton-text vel-skeleton-sm"></div>
          <div class="vel-skeleton vel-skeleton-text vel-skeleton-sm"></div>
        </div>
      </div>
      <div class="vel-skeleton vel-skeleton-rect vel-skeleton-3xl" style="width:100%"></div>
    </section>

    <section>
      <h2 class="vel-text-xs vel-font-semibold vel-uppercase vel-tracking-widest vel-mb-4" style="color:#64748b">Keyboard keys</h2>
      <div class="vel-flex vel-flex-wrap vel-gap-4">
        <span class="vel-kbd-combo"><kbd class="vel-kbd">Ctrl</kbd><kbd class="vel-kbd">K</kbd></span>
        <span class="vel-kbd-combo"><kbd class="vel-kbd">⌘</kbd><kbd class="vel-kbd">Shift</kbd><kbd class="vel-kbd">P</kbd></span>
        <kbd class="vel-kbd vel-kbd-lg">Enter</kbd>
        <kbd class="vel-kbd">Tab</kbd>
        <kbd class="vel-kbd">Esc</kbd>
      </div>
    </section>

  </div>
</div>`

const DIVIDER_CODE = `<div style="min-height:100vh;background:#060b17;padding:40px;font-family:system-ui,sans-serif">
  <div style="max-width:720px;margin:0 auto">

    <h1 class="vel-text-3xl vel-font-bold vel-mb-8 vel-tracking-tight" style="color:#f1f5f9">Dividers</h1>

    <div class="vel-flex vel-flex-col vel-gap-8">
      <div>
        <p class="vel-text-sm vel-mb-4" style="color:#94a3b8">Plain</p>
        <hr class="vel-divider-plain" />
      </div>
      <div>
        <p class="vel-text-sm vel-mb-4" style="color:#94a3b8">With label</p>
        <div class="vel-divider">OR</div>
      </div>
      <div>
        <p class="vel-text-sm vel-mb-4" style="color:#94a3b8">Left-aligned label</p>
        <div class="vel-divider vel-divider-left">Section</div>
      </div>
      <div>
        <p class="vel-text-sm vel-mb-4" style="color:#94a3b8">Primary color</p>
        <div class="vel-divider vel-divider-primary">Primary</div>
      </div>
    </div>

  </div>
</div>`

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function Home() {
  const colors   = ['primary', 'secondary', 'success', 'danger', 'warning', 'info']
  const neutrals = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950]

  return (
    <main style={{ minHeight: '100vh', background: C.page, color: C.text, fontFamily: 'system-ui, sans-serif' }}>

      {/* ── Header ── */}
      <header style={{
        position: 'sticky', top: 0, zIndex: 50,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '0 32px', height: '56px',
        background: C.header, borderBottom: `1px solid ${C.border}`,
        backdropFilter: 'blur(8px)',
      }}>
        <img src={`${BASE_PATH}/velora_actual.png`} alt="VeloraCSS" style={{ height: '28px', width: 'auto' }} />
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <span style={{
            fontSize: '11px', color: C.muted, background: C.surface2,
            padding: '2px 8px', borderRadius: '4px', border: `1px solid ${C.border}`,
          }}>v0.3.0</span>
          <a
            href={DOCS_URL}
            style={{
              fontSize: '12px', fontWeight: 500, padding: '5px 14px', borderRadius: '7px',
              background: C.surface2, color: C.label, textDecoration: 'none',
              border: `1px solid ${C.border}`,
            }}
          >
            Docs
          </a>
          <a
            href={PLAYGROUND_URL}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontSize: '12px', fontWeight: 500, padding: '5px 14px', borderRadius: '7px',
              background: C.accent, color: '#fff', textDecoration: 'none',
              border: `1px solid ${C.accent}`,
            }}
          >
            Open Playground →
          </a>
        </div>
      </header>

      {/* ── Hero ── */}
      <div style={{ textAlign: 'center', padding: '80px 32px 64px', borderBottom: `1px solid ${C.border}` }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '24px' }}>
          <span style={{
            fontSize: '11px', fontWeight: 600, color: C.label,
            background: '#7c5cfc15', padding: '4px 12px', borderRadius: '99px',
            border: '1px solid #7c5cfc30',
          }}>
            Now in v0.3 — 22 components, transform system &amp; 300+ new utilities
          </span>
        </div>
        <h1 style={{ fontSize: '3rem', fontWeight: 900, color: C.text, letterSpacing: '-0.03em', margin: '0 0 16px', lineHeight: 1.1 }}>
          Build fast.<br />Look great.
        </h1>
        <p style={{ fontSize: '1.125rem', color: C.muted, maxWidth: '520px', margin: '0 auto 36px', lineHeight: 1.7 }}>
          VeloraCSS is a fully original utility-first CSS framework with rich components,
          zero dependencies, and a consistent design system — running live in Next.js.
        </p>
        <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' as const }}>
          <a href={PLAYGROUND_URL} target="_blank" rel="noopener noreferrer"
            style={{ fontSize: '14px', fontWeight: 600, padding: '10px 24px', borderRadius: '8px', background: C.accent, color: '#fff', textDecoration: 'none' }}>
            Open Playground
          </a>
          <a href={DOCS_URL}
            style={{ fontSize: '14px', fontWeight: 600, padding: '10px 24px', borderRadius: '8px', background: C.surface2, color: C.text, textDecoration: 'none', border: `1px solid ${C.border}` }}>
            Read the Docs
          </a>
          <a href="https://github.com/VeloraX/veloracss" target="_blank" rel="noopener noreferrer"
            style={{ fontSize: '14px', fontWeight: 600, padding: '10px 24px', borderRadius: '8px', background: C.surface2, color: C.text, textDecoration: 'none', border: `1px solid ${C.border}` }}>
            GitHub
          </a>
        </div>
      </div>

      {/* ── Content ── */}
      <div style={{ maxWidth: '900px', margin: '0 auto', padding: '64px 32px' }}>

        {/* Buttons */}
        <section style={{ marginBottom: '64px' }}>
          <SectionLabel>Buttons</SectionLabel>
          <PreviewBox>
            <div className="vel-flex vel-flex-wrap vel-gap-3 vel-mb-4">
              <button className="vel-btn vel-btn-primary">Primary</button>
              <button className="vel-btn vel-btn-secondary">Secondary</button>
              <button className="vel-btn vel-btn-success">Success</button>
              <button className="vel-btn vel-btn-danger">Danger</button>
              <button className="vel-btn vel-btn-warning">Warning</button>
              <button className="vel-btn vel-btn-info">Info</button>
            </div>
            <div className="vel-flex vel-flex-wrap vel-gap-3">
              <button className="vel-btn vel-btn-outline-primary">Outline</button>
              <button className="vel-btn vel-btn-ghost">Ghost</button>
              <button className="vel-btn vel-btn-link">Link</button>
              <button className="vel-btn vel-btn-primary vel-btn-sm">Small</button>
              <button className="vel-btn vel-btn-primary vel-btn-lg">Large</button>
              <button className="vel-btn vel-btn-primary" disabled>Disabled</button>
            </div>
          </PreviewBox>
          <CodeBlock code={BUTTON_CODE} />
        </section>

        {/* Cards */}
        <section style={{ marginBottom: '64px' }}>
          <SectionLabel>Cards</SectionLabel>
          <PreviewBox>
            <div className="vel-grid vel-grid-cols-3 vel-gap-4">
              <div className="vel-card vel-card-hover">
                <div className="vel-card-header">Hover Card</div>
                <div className="vel-card-body">
                  <p className="vel-text-neutral-500 vel-text-sm vel-mb-3">Shadow lifts on hover.</p>
                  <button className="vel-btn vel-btn-primary vel-btn-sm">Action</button>
                </div>
              </div>
              <div className="vel-card vel-card-glass">
                <div className="vel-card-header">Glass</div>
                <div className="vel-card-body">
                  <p className="vel-text-neutral-500 vel-text-sm vel-mb-3">Glassmorphism variant.</p>
                  <button className="vel-btn vel-btn-outline-primary vel-btn-sm">Action</button>
                </div>
              </div>
              <div className="vel-card vel-card-primary">
                <div className="vel-card-body">
                  <h3 className="vel-text-base vel-font-semibold vel-text-white vel-mb-2">Primary</h3>
                  <p className="vel-text-sm" style={{ color: 'rgba(255,255,255,.75)' }}>Brand-colored card.</p>
                </div>
              </div>
            </div>
          </PreviewBox>
          <CodeBlock code={CARD_CODE} />
        </section>

        {/* Badges & Alerts */}
        <section style={{ marginBottom: '64px' }}>
          <SectionLabel>Badges &amp; Alerts</SectionLabel>
          <PreviewBox>
            <div className="vel-flex vel-flex-wrap vel-gap-3 vel-mb-6">
              <span className="vel-badge vel-badge-primary">Primary</span>
              <span className="vel-badge vel-badge-success">Success</span>
              <span className="vel-badge vel-badge-danger">Danger</span>
              <span className="vel-badge vel-badge-warning">Warning</span>
              <span className="vel-badge vel-badge-info">Info</span>
              <span className="vel-badge vel-badge-secondary">Secondary</span>
            </div>
            <div className="vel-flex vel-flex-col vel-gap-3">
              <div className="vel-alert vel-alert-info">Info — Something worth knowing about.</div>
              <div className="vel-alert vel-alert-success">Success — Your changes have been saved.</div>
              <div className="vel-alert vel-alert-warning">Warning — Review before continuing.</div>
              <div className="vel-alert vel-alert-danger">Danger — This action cannot be undone.</div>
            </div>
          </PreviewBox>
          <CodeBlock code={BADGE_CODE} />
        </section>

        {/* Gradients & Glows */}
        <section style={{ marginBottom: '64px' }}>
          <SectionLabel>Gradients &amp; Glows</SectionLabel>
          <PreviewBox>
            <div className="vel-grid vel-grid-cols-3 vel-gap-4 vel-mb-6">
              <div className="vel-bg-gradient-primary vel-p-5 vel-rounded-xl vel-text-center vel-font-semibold vel-text-white">primary</div>
              <div className="vel-bg-gradient-aurora vel-p-5 vel-rounded-xl vel-text-center vel-font-semibold vel-text-white">aurora</div>
              <div className="vel-bg-gradient-ocean vel-p-5 vel-rounded-xl vel-text-center vel-font-semibold vel-text-white">ocean</div>
              <div className="vel-bg-gradient-success vel-p-5 vel-rounded-xl vel-text-center vel-font-semibold vel-text-white">success</div>
              <div className="vel-bg-gradient-danger vel-p-5 vel-rounded-xl vel-text-center vel-font-semibold vel-text-white">danger</div>
              <div className="vel-bg-gradient-sunset vel-p-5 vel-rounded-xl vel-text-center vel-font-semibold vel-text-white">sunset</div>
            </div>
            <div className="vel-flex vel-flex-wrap vel-gap-4">
              <button className="vel-btn vel-btn-primary vel-btn-glow-primary">Glow Primary</button>
              <button className="vel-btn vel-btn-success vel-btn-glow-success">Glow Success</button>
              <button className="vel-btn vel-btn-danger vel-btn-glow-danger">Glow Danger</button>
            </div>
          </PreviewBox>
          <CodeBlock code={GRADIENT_CODE} />
        </section>

        {/* Colors */}
        <section style={{ marginBottom: '64px' }}>
          <SectionLabel>Colors</SectionLabel>
          <PreviewBox>
            <div className="vel-grid vel-grid-cols-6 vel-gap-3 vel-mb-4">
              {colors.map((c) => (
                <div key={c} className={`vel-bg-${c} vel-text-white vel-p-4 vel-rounded-xl vel-text-center vel-text-sm vel-font-medium`}>
                  {c}
                </div>
              ))}
            </div>
            <div className="vel-grid vel-grid-cols-11 vel-gap-1">
              {neutrals.map((n) => (
                <div key={n} className={`vel-bg-neutral-${n} vel-py-3 vel-rounded-lg vel-text-center`}
                  style={{ fontSize: '10px', color: n >= 500 ? '#fff' : '#334155' }}>
                  {n}
                </div>
              ))}
            </div>
          </PreviewBox>
          <CodeBlock code={COLORS_CODE} />
        </section>

        {/* Typography */}
        <section style={{ marginBottom: '64px' }}>
          <SectionLabel>Typography</SectionLabel>
          <PreviewBox>
            <div className="vel-space-y-2">
              <p className="vel-text-5xl vel-font-black vel-leading-none" style={{ color: C.text }}>Display</p>
              <p className="vel-text-3xl vel-font-bold" style={{ color: C.text }}>Heading 1</p>
              <p className="vel-text-2xl vel-font-semibold" style={{ color: '#cbd5e1' }}>Heading 2</p>
              <p className="vel-text-xl vel-font-medium" style={{ color: '#94a3b8' }}>Heading 3</p>
              <p className="vel-text-base" style={{ color: C.muted }}>Body — the quick brown fox jumps over the lazy dog.</p>
              <p className="vel-text-sm" style={{ color: '#475569' }}>Small — secondary information and captions.</p>
              <p className="vel-text-xs vel-uppercase vel-tracking-wider vel-font-semibold" style={{ color: '#334155' }}>Label / Eyebrow</p>
            </div>
          </PreviewBox>
          <CodeBlock code={TYPOGRAPHY_CODE} />
        </section>

        {/* Pagination & Breadcrumb */}
        <section style={{ marginBottom: '64px' }}>
          <SectionLabel>Pagination &amp; Breadcrumb</SectionLabel>
          <PreviewBox>
            <div className="vel-mb-6">
              <p className="vel-text-xs vel-font-semibold vel-uppercase vel-tracking-widest vel-mb-3" style={{ color: C.muted }}>Breadcrumb</p>
              <ol className="vel-breadcrumb vel-breadcrumb-chevron">
                <li className="vel-breadcrumb-item"><a href="#" className="vel-breadcrumb-link">Home</a></li>
                <li className="vel-breadcrumb-item"><a href="#" className="vel-breadcrumb-link">Components</a></li>
                <li className="vel-breadcrumb-item"><span className="vel-breadcrumb-active">Breadcrumb</span></li>
              </ol>
            </div>
            <div>
              <p className="vel-text-xs vel-font-semibold vel-uppercase vel-tracking-widest vel-mb-3" style={{ color: C.muted }}>Pagination</p>
              <nav className="vel-pagination">
                <span className="vel-page-item"><span className="vel-page-link vel-page-link-disabled">← Prev</span></span>
                <span className="vel-page-item"><a href="#" className="vel-page-link">1</a></span>
                <span className="vel-page-item"><a href="#" className="vel-page-link vel-page-link-active">2</a></span>
                <span className="vel-page-item"><a href="#" className="vel-page-link">3</a></span>
                <span className="vel-page-ellipsis">…</span>
                <span className="vel-page-item"><a href="#" className="vel-page-link">8</a></span>
                <span className="vel-page-item"><a href="#" className="vel-page-link">Next →</a></span>
              </nav>
            </div>
          </PreviewBox>
          <CodeBlock code={PAGINATION_CODE} />
        </section>

        {/* Steps */}
        <section style={{ marginBottom: '64px' }}>
          <SectionLabel>Steps</SectionLabel>
          <PreviewBox>
            <div className="vel-steps">
              <div className="vel-step vel-step-complete">
                <div className="vel-step-indicator">✓</div>
                <div className="vel-step-label">Account</div>
              </div>
              <div className="vel-step vel-step-complete">
                <div className="vel-step-indicator">✓</div>
                <div className="vel-step-label">Profile</div>
              </div>
              <div className="vel-step vel-step-active">
                <div className="vel-step-indicator">3</div>
                <div className="vel-step-label">Billing</div>
              </div>
              <div className="vel-step">
                <div className="vel-step-indicator">4</div>
                <div className="vel-step-label">Review</div>
              </div>
            </div>
          </PreviewBox>
          <CodeBlock code={STEPS_CODE} />
        </section>

        {/* Skeleton & Kbd */}
        <section style={{ marginBottom: '64px' }}>
          <SectionLabel>Skeleton &amp; Keyboard Keys</SectionLabel>
          <PreviewBox>
            <div className="vel-flex vel-gap-4 vel-mb-6">
              <div className="vel-skeleton vel-skeleton-avatar-xl"></div>
              <div style={{ flex: 1 }}>
                <div className="vel-skeleton vel-skeleton-text vel-skeleton-lg vel-mb-3"></div>
                <div className="vel-skeleton vel-skeleton-text vel-skeleton-sm vel-mb-2"></div>
                <div className="vel-skeleton vel-skeleton-text vel-skeleton-sm"></div>
              </div>
            </div>
            <div className="vel-flex vel-flex-wrap vel-gap-4">
              <span className="vel-kbd-combo"><kbd className="vel-kbd">Ctrl</kbd><kbd className="vel-kbd">K</kbd></span>
              <span className="vel-kbd-combo"><kbd className="vel-kbd">⌘</kbd><kbd className="vel-kbd">Shift</kbd><kbd className="vel-kbd">P</kbd></span>
              <kbd className="vel-kbd vel-kbd-lg">Enter</kbd>
              <kbd className="vel-kbd">Tab</kbd>
              <kbd className="vel-kbd">Esc</kbd>
            </div>
          </PreviewBox>
          <CodeBlock code={SKELETON_CODE} />
        </section>

        {/* Dividers */}
        <section style={{ marginBottom: '64px' }}>
          <SectionLabel>Dividers</SectionLabel>
          <PreviewBox>
            <div className="vel-flex vel-flex-col vel-gap-6">
              <hr className="vel-divider-plain" />
              <div className="vel-divider">OR</div>
              <div className="vel-divider vel-divider-left">Section</div>
              <div className="vel-divider vel-divider-primary">Primary</div>
            </div>
          </PreviewBox>
          <CodeBlock code={DIVIDER_CODE} />
        </section>

      </div>

      {/* ── Footer ── */}
      <footer style={{
        textAlign: 'center', padding: '32px', borderTop: `1px solid ${C.border}`,
        fontSize: '13px', color: C.muted,
      }}>
        VeloraCSS v0.3.0 — Next.js Demo ·{' '}
        <a href={DOCS_URL} style={{ color: C.label, textDecoration: 'none' }}>Docs</a>
        {' · '}
        <a href={PLAYGROUND_URL} style={{ color: C.label, textDecoration: 'none' }}>Open Playground</a>
      </footer>

    </main>
  )
}
