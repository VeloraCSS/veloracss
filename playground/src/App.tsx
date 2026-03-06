import { useState, useCallback, useEffect, useRef } from 'react'
import CodeEditor from './components/Editor'
import Preview from './components/Preview'
import veloraCss from '../../dist/velora.css?raw'

const LOGO_SMALL_URL = 'https://i.imgur.com/ROa2Khd.png'
const LOGO_TITLE_URL = 'https://i.imgur.com/zvEbOFE.png'

// ─── Example snippets ────────────────────────────────────────────────────────

const EXAMPLES: Record<string, string> = {
  Starter: `<!--
  Welcome to VeloraCSS Playground!
  Edit this HTML to start building — changes appear live in the preview.
  Pick a different example from the Examples dropdown above.
-->
<div style="min-height:100vh;background:#0b1120;background-image:radial-gradient(circle,#1e293b 1px,transparent 1px);background-size:30px 30px;display:flex;align-items:center;justify-content:center;padding:40px 20px;font-family:system-ui,sans-serif">
  <div style="background:#111827;border:1px solid #1e2d45;border-radius:20px;padding:44px 48px;max-width:540px;width:100%;box-shadow:0 32px 64px rgba(0,0,0,.6)">

    <!-- Logo -->
    <div style="display:flex;align-items:center;gap:12px;margin-bottom:32px">
      <img src="https://i.imgur.com/ROa2Khd.png" style="height:48px;width:auto">
      <img src="https://i.imgur.com/zvEbOFE.png" style="height:30px;width:auto">
      <span style="background:#6366f120;color:#818cf8;font-size:11px;font-weight:700;padding:3px 8px;border-radius:99px;border:1px solid #6366f140;margin-left:2px">v0.1.0</span>
    </div>

    <!-- Heading -->
    <h1 style="color:#f1f5f9;font-size:1.375rem;font-weight:700;margin:0 0 10px;letter-spacing:-0.02em">
      Welcome to the VeloraCSS Playground
    </h1>
    <p style="color:#64748b;font-size:0.9rem;line-height:1.7;margin:0 0 30px">
      An online playground for <strong style="color:#818cf8">VeloraCSS</strong> — a fully original
      utility-first CSS framework with rich components and zero dependencies.
      Edit the HTML on the left and see changes instantly.
    </p>

    <!-- Feature list -->
    <ul style="list-style:none;padding:0;margin:0 0 34px;display:flex;flex-direction:column;gap:14px">
      <li style="display:flex;align-items:flex-start;gap:14px">
        <span style="width:22px;height:22px;background:#6366f120;border-radius:6px;display:flex;align-items:center;justify-content:center;font-size:12px;flex-shrink:0;margin-top:1px">✦</span>
        <div>
          <span style="color:#e2e8f0;font-size:0.875rem;font-weight:600">Utility-first classes</span>
          <span style="color:#475569;font-size:0.8rem;display:block;margin-top:2px">vel-flex, vel-p-4, vel-text-lg and hundreds more</span>
        </div>
      </li>
      <li style="display:flex;align-items:flex-start;gap:14px">
        <span style="width:22px;height:22px;background:#22c55e20;border-radius:6px;display:flex;align-items:center;justify-content:center;font-size:12px;flex-shrink:0;margin-top:1px">✦</span>
        <div>
          <span style="color:#e2e8f0;font-size:0.875rem;font-weight:600">Rich components</span>
          <span style="color:#475569;font-size:0.8rem;display:block;margin-top:2px">vel-btn, vel-card with full variant sets</span>
        </div>
      </li>
      <li style="display:flex;align-items:flex-start;gap:14px">
        <span style="width:22px;height:22px;background:#0ea5e920;border-radius:6px;display:flex;align-items:center;justify-content:center;font-size:12px;flex-shrink:0;margin-top:1px">✦</span>
        <div>
          <span style="color:#e2e8f0;font-size:0.875rem;font-weight:600">Responsive breakpoints</span>
          <span style="color:#475569;font-size:0.8rem;display:block;margin-top:2px">vel-sm:flex · vel-md:grid-cols-3 · vel-lg:hidden</span>
        </div>
      </li>
      <li style="display:flex;align-items:flex-start;gap:14px">
        <span style="width:22px;height:22px;background:#f59e0b20;border-radius:6px;display:flex;align-items:center;justify-content:center;font-size:12px;flex-shrink:0;margin-top:1px">✦</span>
        <div>
          <span style="color:#e2e8f0;font-size:0.875rem;font-weight:600">State variants</span>
          <span style="color:#475569;font-size:0.8rem;display:block;margin-top:2px">vel-hover:bg-primary · vel-focus:ring · vel-dark:text-white</span>
        </div>
      </li>
    </ul>

    <!-- Prompt box -->
    <div style="background:#0b1120;border:1px solid #1e2d45;border-radius:12px;padding:14px 18px;display:flex;align-items:flex-start;gap:12px">
      <span style="color:#6366f1;font-size:20px;margin-top:-2px">←</span>
      <p style="color:#475569;font-size:0.8rem;line-height:1.6;margin:0">
        Edit the HTML on the left to get started, or choose a demo from the
        <strong style="color:#94a3b8">Examples</strong> dropdown above.
      </p>
    </div>

  </div>
</div>`,

  Buttons: `<div class="vel-min-h-screen vel-bg-white vel-p-10">
  <div class="vel-max-w-3xl vel-mx-auto">

    <h1 class="vel-text-3xl vel-font-bold vel-text-neutral-900 vel-mb-8 vel-tracking-tight">Buttons</h1>

    <section class="vel-mb-8">
      <h2 class="vel-text-xs vel-font-semibold vel-text-neutral-400 vel-uppercase vel-tracking-widest vel-mb-4">Solid</h2>
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
      <h2 class="vel-text-xs vel-font-semibold vel-text-neutral-400 vel-uppercase vel-tracking-widest vel-mb-4">Outline</h2>
      <div class="vel-flex vel-flex-wrap vel-gap-3">
        <button class="vel-btn vel-btn-outline-primary">Primary</button>
        <button class="vel-btn vel-btn-outline-secondary">Secondary</button>
        <button class="vel-btn vel-btn-outline-success">Success</button>
        <button class="vel-btn vel-btn-outline-danger">Danger</button>
      </div>
    </section>

    <section class="vel-mb-8">
      <h2 class="vel-text-xs vel-font-semibold vel-text-neutral-400 vel-uppercase vel-tracking-widest vel-mb-4">Ghost &amp; Link</h2>
      <div class="vel-flex vel-flex-wrap vel-gap-3">
        <button class="vel-btn vel-btn-ghost">Ghost</button>
        <button class="vel-btn vel-btn-link">Link</button>
      </div>
    </section>

    <section class="vel-mb-8">
      <h2 class="vel-text-xs vel-font-semibold vel-text-neutral-400 vel-uppercase vel-tracking-widest vel-mb-4">Sizes</h2>
      <div class="vel-flex vel-flex-wrap vel-items-center vel-gap-3">
        <button class="vel-btn vel-btn-primary vel-btn-xs">XSmall</button>
        <button class="vel-btn vel-btn-primary vel-btn-sm">Small</button>
        <button class="vel-btn vel-btn-primary">Default</button>
        <button class="vel-btn vel-btn-primary vel-btn-lg">Large</button>
        <button class="vel-btn vel-btn-primary vel-btn-xl">XLarge</button>
      </div>
    </section>

    <section>
      <h2 class="vel-text-xs vel-font-semibold vel-text-neutral-400 vel-uppercase vel-tracking-widest vel-mb-4">Block</h2>
      <button class="vel-btn vel-btn-primary vel-btn-block">Block Button</button>
    </section>

  </div>
</div>`,

  Cards: `<div class="vel-min-h-screen vel-bg-neutral-50 vel-p-10">
  <div class="vel-max-w-4xl vel-mx-auto">

    <h1 class="vel-text-3xl vel-font-bold vel-text-neutral-900 vel-mb-8 vel-tracking-tight">Cards</h1>

    <div class="vel-grid vel-grid-cols-2 vel-gap-6 vel-mb-6">
      <div class="vel-card">
        <div class="vel-card-header">Default Card</div>
        <div class="vel-card-body">
          <p class="vel-text-neutral-600 vel-text-sm">The default card style with a subtle border and rounded corners.</p>
        </div>
        <div class="vel-card-footer">
          <button class="vel-btn vel-btn-primary vel-btn-sm">Action</button>
        </div>
      </div>

      <div class="vel-card vel-card-elevated">
        <div class="vel-card-header">Elevated Card</div>
        <div class="vel-card-body">
          <p class="vel-text-neutral-600 vel-text-sm">Elevated with a large shadow for depth and prominence.</p>
        </div>
        <div class="vel-card-footer">
          <button class="vel-btn vel-btn-outline-primary vel-btn-sm">Action</button>
        </div>
      </div>

      <div class="vel-card vel-card-flat">
        <div class="vel-card-header">Flat Card</div>
        <div class="vel-card-body">
          <p class="vel-text-neutral-600 vel-text-sm">No shadow, no border. Blends into the background cleanly.</p>
        </div>
        <div class="vel-card-footer">
          <button class="vel-btn vel-btn-ghost vel-btn-sm">Action</button>
        </div>
      </div>

      <div class="vel-card vel-card-hover">
        <div class="vel-card-header">Hover Card</div>
        <div class="vel-card-body">
          <p class="vel-text-neutral-600 vel-text-sm">Hover over me — the shadow lifts on interaction.</p>
        </div>
        <div class="vel-card-footer">
          <button class="vel-btn vel-btn-ghost vel-btn-sm">Action</button>
        </div>
      </div>
    </div>

    <div class="vel-grid vel-grid-cols-2 vel-gap-6">
      <div class="vel-card vel-card-filled">
        <div class="vel-card-body">
          <h3 class="vel-text-lg vel-font-semibold vel-text-neutral-900 vel-mb-2">Filled Card</h3>
          <p class="vel-text-neutral-500 vel-text-sm">Neutral background fill for a softer look.</p>
        </div>
      </div>

      <div class="vel-card vel-card-primary">
        <div class="vel-card-body">
          <h3 class="vel-text-lg vel-font-semibold vel-text-white vel-mb-2">Primary Card</h3>
          <p class="vel-text-white vel-text-sm" style="opacity:0.8">Bold brand-colored card for featured content.</p>
        </div>
      </div>
    </div>

  </div>
</div>`,

  Typography: `<div class="vel-min-h-screen vel-bg-white vel-p-10">
  <div class="vel-max-w-2xl vel-mx-auto">

    <h1 class="vel-text-5xl vel-font-black vel-text-neutral-900 vel-tracking-tight vel-mb-2">Typography</h1>
    <p class="vel-text-xl vel-text-neutral-400 vel-mb-10">Font sizes, weights, and text utilities.</p>

    <section class="vel-mb-10">
      <h2 class="vel-text-xs vel-font-semibold vel-text-neutral-400 vel-uppercase vel-tracking-widest vel-mb-4">Sizes</h2>
      <p class="vel-text-xs vel-text-neutral-700 vel-mb-1">vel-text-xs — The quick brown fox</p>
      <p class="vel-text-sm vel-text-neutral-700 vel-mb-1">vel-text-sm — The quick brown fox</p>
      <p class="vel-text-base vel-text-neutral-700 vel-mb-1">vel-text-base — The quick brown fox</p>
      <p class="vel-text-lg vel-text-neutral-700 vel-mb-1">vel-text-lg — The quick brown fox</p>
      <p class="vel-text-xl vel-text-neutral-700 vel-mb-1">vel-text-xl — The quick brown fox</p>
      <p class="vel-text-2xl vel-text-neutral-700 vel-mb-1">vel-text-2xl — The quick brown fox</p>
      <p class="vel-text-3xl vel-text-neutral-700 vel-mb-1">vel-text-3xl — The quick brown fox</p>
      <p class="vel-text-4xl vel-text-neutral-700 vel-mb-1">vel-text-4xl — Fox</p>
    </section>

    <section class="vel-mb-10">
      <h2 class="vel-text-xs vel-font-semibold vel-text-neutral-400 vel-uppercase vel-tracking-widest vel-mb-4">Weights</h2>
      <p class="vel-text-xl vel-font-thin vel-text-neutral-800 vel-mb-1">Thin — 100</p>
      <p class="vel-text-xl vel-font-light vel-text-neutral-800 vel-mb-1">Light — 300</p>
      <p class="vel-text-xl vel-font-normal vel-text-neutral-800 vel-mb-1">Normal — 400</p>
      <p class="vel-text-xl vel-font-medium vel-text-neutral-800 vel-mb-1">Medium — 500</p>
      <p class="vel-text-xl vel-font-semibold vel-text-neutral-800 vel-mb-1">Semibold — 600</p>
      <p class="vel-text-xl vel-font-bold vel-text-neutral-800 vel-mb-1">Bold — 700</p>
      <p class="vel-text-xl vel-font-extrabold vel-text-neutral-800 vel-mb-1">Extrabold — 800</p>
      <p class="vel-text-xl vel-font-black vel-text-neutral-800 vel-mb-1">Black — 900</p>
    </section>

    <section>
      <h2 class="vel-text-xs vel-font-semibold vel-text-neutral-400 vel-uppercase vel-tracking-widest vel-mb-4">Colors</h2>
      <p class="vel-text-primary vel-text-lg vel-font-medium vel-mb-1">vel-text-primary</p>
      <p class="vel-text-success vel-text-lg vel-font-medium vel-mb-1">vel-text-success</p>
      <p class="vel-text-danger vel-text-lg vel-font-medium vel-mb-1">vel-text-danger</p>
      <p class="vel-text-warning vel-text-lg vel-font-medium vel-mb-1">vel-text-warning</p>
      <p class="vel-text-info vel-text-lg vel-font-medium vel-mb-1">vel-text-info</p>
      <p class="vel-text-neutral-400 vel-text-lg vel-font-medium">vel-text-neutral-400</p>
    </section>

  </div>
</div>`,

  'Hero Section': `<div class="vel-min-h-screen vel-bg-white">

  <!-- Nav -->
  <nav class="vel-flex vel-items-center vel-justify-between vel-px-8 vel-py-5 vel-border-b vel-border-neutral-100">
    <div class="vel-flex vel-items-center vel-gap-2">
      <div style="background:#6366f1;color:#fff;font-weight:800;font-size:13px;padding:4px 10px;border-radius:6px">vel</div>
      <span class="vel-font-semibold vel-text-neutral-900">VeloraCSS</span>
    </div>
    <div class="vel-flex vel-items-center vel-gap-6">
      <a class="vel-text-sm vel-text-neutral-500">Docs</a>
      <a class="vel-text-sm vel-text-neutral-500">Components</a>
      <a class="vel-text-sm vel-text-neutral-500">Examples</a>
      <button class="vel-btn vel-btn-primary vel-btn-sm">Get Started</button>
    </div>
  </nav>

  <!-- Hero -->
  <div class="vel-flex vel-flex-col vel-items-center vel-text-center vel-px-8 vel-pt-20 vel-pb-16">
    <div class="vel-bg-primary-light vel-text-primary vel-text-xs vel-font-semibold vel-px-3 vel-py-1 vel-rounded-full vel-mb-6">
      Now in v0.1 — utility-first CSS
    </div>
    <h1 class="vel-text-6xl vel-font-black vel-text-neutral-900 vel-tracking-tight vel-mb-6" style="line-height:1.1">
      Build fast.<br>Look great.
    </h1>
    <p class="vel-text-xl vel-text-neutral-500 vel-max-w-lg vel-leading-relaxed vel-mb-10">
      VeloraCSS is a fully original utility-first CSS framework with rich components,
      zero footprints from other frameworks, and a consistent design system.
    </p>
    <div class="vel-flex vel-gap-4 vel-justify-center vel-mb-16">
      <button class="vel-btn vel-btn-primary vel-btn-lg">Start Building</button>
      <button class="vel-btn vel-btn-outline-primary vel-btn-lg">View Docs</button>
    </div>

    <!-- Feature cards -->
    <div class="vel-grid vel-grid-cols-3 vel-gap-6 vel-max-w-3xl vel-w-full">
      <div class="vel-card vel-card-flat vel-text-left vel-p-6">
        <div class="vel-text-2xl vel-mb-3">⚡</div>
        <h3 class="vel-font-semibold vel-text-neutral-900 vel-mb-1">Utility-first</h3>
        <p class="vel-text-sm vel-text-neutral-500">Compose any design directly in HTML with low-level utility classes.</p>
      </div>
      <div class="vel-card vel-card-flat vel-text-left vel-p-6">
        <div class="vel-text-2xl vel-mb-3">🧩</div>
        <h3 class="vel-font-semibold vel-text-neutral-900 vel-mb-1">Rich Components</h3>
        <p class="vel-text-sm vel-text-neutral-500">Production-ready buttons, cards, forms, modals, and more.</p>
      </div>
      <div class="vel-card vel-card-flat vel-text-left vel-p-6">
        <div class="vel-text-2xl vel-mb-3">🎨</div>
        <h3 class="vel-font-semibold vel-text-neutral-900 vel-mb-1">Design Tokens</h3>
        <p class="vel-text-sm vel-text-neutral-500">Consistent spacing, colors, and typography with CSS custom properties.</p>
      </div>
    </div>
  </div>

</div>`,
}

const DEFAULT_HTML = EXAMPLES['Starter']
const DEFAULT_CSS = `/* Add your custom CSS here */\n`

// ─── Types ────────────────────────────────────────────────────────────────────

type Tab = 'html' | 'css'
type Device = 'full' | 'desktop' | 'tablet' | 'mobile'

const DEVICES: { id: Device; label: string; width: number | null; icon: string }[] = [
  { id: 'full',    label: 'Full',    width: null, icon: '⬛' },
  { id: 'desktop', label: '1280',    width: 1280, icon: '🖥' },
  { id: 'tablet',  label: '768',     width: 768,  icon: '📱' },
  { id: 'mobile',  label: '375',     width: 375,  icon: '📱' },
]

// ─── Colors ───────────────────────────────────────────────────────────────────

const C = {
  bg:        '#0a0f1e',
  header:    '#060b17',
  surface:   '#131929',
  surface2:  '#1a2236',
  border:    '#1e2d45',
  text:      '#e2e8f0',
  muted:     '#64748b',
  accent:    '#6366f1',
  accentHov: '#4f52d6',
}

// ─── Helpers ──────────────────────────────────────────────────────────────────

function encode(str: string): string {
  return btoa(new TextEncoder().encode(str).reduce((s, b) => s + String.fromCharCode(b), ''))
}

function decode(str: string): string {
  try {
    const bytes = Uint8Array.from(atob(str), c => c.charCodeAt(0))
    return new TextDecoder().decode(bytes)
  } catch { return '' }
}

// ─── Sub-components ───────────────────────────────────────────────────────────

function HeaderBtn({
  onClick, children, active, title,
}: { onClick: () => void; children: React.ReactNode; active?: boolean; title?: string }) {
  return (
    <button
      onClick={onClick}
      title={title}
      style={{
        display: 'flex', alignItems: 'center', gap: '6px',
        padding: '5px 12px', borderRadius: '6px', fontSize: '12px',
        fontWeight: 500, cursor: 'pointer',
        background: active ? C.accent : C.surface2,
        color: active ? '#fff' : C.muted,
        border: `1px solid ${active ? C.accent : C.border}`,
        transition: 'all .15s',
      }}
    >
      {children}
    </button>
  )
}

function DeviceBtn({
  device, current, onClick,
}: { device: typeof DEVICES[number]; current: Device; onClick: () => void }) {
  const active = device.id === current
  return (
    <button
      onClick={onClick}
      title={device.label === 'Full' ? 'Full width' : `${device.label}px`}
      style={{
        padding: '4px 10px', borderRadius: '5px', fontSize: '11px',
        fontWeight: 500, cursor: 'pointer',
        background: active ? C.accent : 'transparent',
        color: active ? '#fff' : C.muted,
        border: `1px solid ${active ? C.accent : 'transparent'}`,
        transition: 'all .15s',
      }}
    >
      {device.label === 'Full' ? 'Full' : `${device.label}px`}
    </button>
  )
}

// ─── App ──────────────────────────────────────────────────────────────────────

export default function App() {
  const [html, setHtml]           = useState(DEFAULT_HTML)
  const [customCss, setCustomCss] = useState(DEFAULT_CSS)
  const [activeTab, setActiveTab] = useState<Tab>('html')
  const [device, setDevice]       = useState<Device>('full')
  const [copied, setCopied]       = useState(false)
  const [shared, setShared]       = useState(false)
  const [showExamples, setShowExamples] = useState(false)
  const [activeExample, setActiveExample] = useState('Starter')
  const dropdownRef = useRef<HTMLDivElement>(null)

  // Load from URL hash on mount
  useEffect(() => {
    const hash = window.location.hash
    const match = hash.match(/[#&]code=([^&]+)/)
    if (match) {
      const decoded = decode(match[1])
      if (decoded) {
        setHtml(decoded)
        setActiveExample('')
      }
    }
  }, [])

  // Close dropdown on outside click
  useEffect(() => {
    function handle(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setShowExamples(false)
      }
    }
    document.addEventListener('mousedown', handle)
    return () => document.removeEventListener('mousedown', handle)
  }, [])

  const handleCopy = useCallback(() => {
    navigator.clipboard.writeText(html)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }, [html])

  const handleShare = useCallback(() => {
    const url = `${window.location.origin}${window.location.pathname}#code=${encode(html)}`
    navigator.clipboard.writeText(url)
    window.history.replaceState(null, '', `#code=${encode(html)}`)
    setShared(true)
    setTimeout(() => setShared(false), 2500)
  }, [html])

  const loadExample = useCallback((name: string) => {
    setHtml(EXAMPLES[name])
    setActiveExample(name)
    setShowExamples(false)
    setActiveTab('html')
    window.history.replaceState(null, '', window.location.pathname)
  }, [])

  const currentDevice = DEVICES.find(d => d.id === device)!

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh', background: C.bg, color: C.text, fontFamily: 'system-ui, sans-serif' }}>

      {/* ── Header ── */}
      <header style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '0 16px', height: '58px', flexShrink: 0,
        background: C.header, borderBottom: `1px solid ${C.border}`,
      }}>

        {/* Left: Logo + Examples */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          {/* Logo */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            {LOGO_SMALL_URL ? (
              <img src={LOGO_SMALL_URL} alt="VeloraCSS" style={{ height: '40px', width: 'auto' }} />
            ) : (
              <div style={{ background: C.accent, color: '#fff', fontWeight: 900, fontSize: '15px', padding: '5px 12px', borderRadius: '8px' }}>vel</div>
            )}
            {LOGO_TITLE_URL ? (
              <img src={LOGO_TITLE_URL} alt="VeloraCSS" style={{ height: '26px', width: 'auto' }} />
            ) : (
              <span style={{ fontWeight: 800, fontSize: '17px', color: C.text, letterSpacing: '-0.02em' }}>VeloraCSS</span>
            )}
          </div>

          {/* Divider */}
          <div style={{ width: '1px', height: '24px', background: C.border }} />

          {/* Version badge */}
          <span style={{
            fontSize: '11px', color: C.muted, background: C.surface2,
            padding: '2px 7px', borderRadius: '4px', border: `1px solid ${C.border}`,
          }}>v0.1.0</span>

          {/* Divider */}
          <div style={{ width: '1px', height: '20px', background: C.border }} />

          {/* Examples dropdown */}
          <div ref={dropdownRef} style={{ position: 'relative' }}>
            <button
              onClick={() => setShowExamples(v => !v)}
              style={{
                display: 'flex', alignItems: 'center', gap: '6px',
                padding: '5px 12px', borderRadius: '6px', fontSize: '12px',
                fontWeight: 500, cursor: 'pointer',
                background: showExamples ? C.surface : 'transparent',
                color: showExamples ? C.text : C.muted,
                border: `1px solid ${showExamples ? C.border : 'transparent'}`,
                transition: 'all .15s',
              }}
            >
              {activeExample ? activeExample : 'Examples'}
              <span style={{ fontSize: '9px', opacity: 0.6 }}>▼</span>
            </button>

            {showExamples && (
              <div style={{
                position: 'absolute', top: 'calc(100% + 6px)', left: 0,
                background: C.surface, border: `1px solid ${C.border}`,
                borderRadius: '10px', padding: '6px', zIndex: 100,
                minWidth: '180px', boxShadow: '0 8px 32px rgba(0,0,0,.5)',
              }}>
                {Object.keys(EXAMPLES).map(name => (
                  <button
                    key={name}
                    onClick={() => loadExample(name)}
                    style={{
                      display: 'block', width: '100%', textAlign: 'left',
                      padding: '8px 12px', borderRadius: '6px', fontSize: '13px',
                      cursor: 'pointer', border: 'none',
                      background: activeExample === name ? C.surface2 : 'transparent',
                      color: activeExample === name ? C.text : C.muted,
                      fontWeight: activeExample === name ? 600 : 400,
                      transition: 'all .1s',
                    }}
                  >
                    {name}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Right: actions */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <a
            href="http://localhost:3000"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'flex', alignItems: 'center', gap: '6px',
              padding: '5px 12px', borderRadius: '6px', fontSize: '12px',
              fontWeight: 500, cursor: 'pointer', textDecoration: 'none',
              background: C.surface2, color: C.muted,
              border: `1px solid ${C.border}`,
            }}
          >
            Next.js Demo
          </a>
          <HeaderBtn onClick={handleCopy}>
            {copied ? '✓ Copied' : 'Copy HTML'}
          </HeaderBtn>
          <HeaderBtn onClick={handleShare} active={shared}>
            {shared ? '✓ Link copied!' : '🔗 Share'}
          </HeaderBtn>
        </div>
      </header>

      {/* ── Main ── */}
      <div style={{ display: 'flex', flex: 1, overflow: 'hidden' }}>

        {/* ── Editor panel ── */}
        <div style={{
          width: '50%', display: 'flex', flexDirection: 'column',
          borderRight: `1px solid ${C.border}`,
        }}>
          {/* Tab bar */}
          <div style={{
            display: 'flex', alignItems: 'center',
            borderBottom: `1px solid ${C.border}`, flexShrink: 0,
            background: C.header, height: '38px',
          }}>
            {(['html', 'css'] as Tab[]).map(tab => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                style={{
                  padding: '0 18px', height: '38px', fontSize: '12px', fontWeight: 500,
                  background: 'transparent', cursor: 'pointer', border: 'none',
                  color: activeTab === tab ? C.text : C.muted,
                  borderBottom: activeTab === tab ? `2px solid ${C.accent}` : '2px solid transparent',
                  letterSpacing: '0.04em',
                }}
              >
                {tab.toUpperCase()}
              </button>
            ))}
          </div>

          {/* Editor */}
          <div style={{ flex: 1, overflow: 'hidden' }}>
            {activeTab === 'html' ? (
              <CodeEditor key="html" value={html} onChange={v => setHtml(v ?? '')} language="html" />
            ) : (
              <CodeEditor key="css" value={customCss} onChange={v => setCustomCss(v ?? '')} language="css" />
            )}
          </div>
        </div>

        {/* ── Preview panel ── */}
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
          {/* Preview toolbar */}
          <div style={{
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            padding: '0 12px', height: '38px', flexShrink: 0,
            background: C.header, borderBottom: `1px solid ${C.border}`,
          }}>
            <span style={{ fontSize: '11px', color: C.muted, letterSpacing: '0.05em', textTransform: 'uppercase' }}>
              Preview
            </span>
            {/* Device toggle */}
            <div style={{ display: 'flex', gap: '2px', background: C.surface, padding: '2px', borderRadius: '7px', border: `1px solid ${C.border}` }}>
              {DEVICES.map(d => (
                <DeviceBtn key={d.id} device={d} current={device} onClick={() => setDevice(d.id)} />
              ))}
            </div>
          </div>

          {/* Preview viewport */}
          <div style={{
            flex: 1, overflow: 'auto',
            display: 'flex', justifyContent: 'center',
            background: device === 'full' ? 'transparent' : '#0d1422',
            padding: device === 'full' ? '0' : '20px',
          }}>
            <div style={{
              width: currentDevice.width ? `${currentDevice.width}px` : '100%',
              height: device === 'full' ? '100%' : 'calc(100vh - 130px)',
              flexShrink: 0,
              borderRadius: device === 'full' ? '0' : '8px',
              overflow: 'hidden',
              boxShadow: device === 'full' ? 'none' : '0 0 0 1px rgba(255,255,255,.08), 0 20px 60px rgba(0,0,0,.6)',
            }}>
              <Preview html={html} customCss={customCss} veloraCss={veloraCss} />
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
