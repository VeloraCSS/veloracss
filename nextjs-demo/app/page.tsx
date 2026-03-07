'use client'

import { useState, useCallback } from 'react'

// ─── Build-time constants ─────────────────────────────────────────────────────

const IS_PROD = process.env.NODE_ENV === 'production'
const BASE_PATH     = IS_PROD ? '/veloracss' : ''
const PLAYGROUND_URL = IS_PROD
  ? 'https://velorax.github.io/veloracss/playground'
  : 'http://localhost:5173'

function toPlaygroundUrl(html: string): string {
  const encoded = btoa(new TextEncoder().encode(html).reduce((s, b) => s + String.fromCharCode(b), ''))
  return `${PLAYGROUND_URL}/#code=${encoded}`
}

// ─── Design tokens ────────────────────────────────────────────────────────────

const C = {
  page:      '#060b17',
  header:    '#060b17',
  surface:   '#0d1422',
  surface2:  '#111827',
  border:    '#1e2d45',
  text:      '#e2e8f0',
  muted:     '#64748b',
  accent:    '#6366f1',
  label:     '#818cf8',
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
      {/* Toolbar */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '8px 16px', background: C.surface, borderBottom: `1px solid ${C.border}` }}>
        <span style={{ fontSize: '11px', fontWeight: 500, color: C.muted, letterSpacing: '0.05em', textTransform: 'uppercase' as const }}>
          HTML
        </span>
        <div style={{ display: 'flex', gap: '8px' }}>
          <button
            onClick={handleCopy}
            style={{
              fontSize: '11px', fontWeight: 500, padding: '4px 10px', borderRadius: '6px', cursor: 'pointer',
              background: copied ? '#22c55e20' : C.surface2,
              color: copied ? '#22c55e' : '#94a3b8',
              border: `1px solid ${copied ? '#22c55e40' : C.border}`,
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
              background: '#6366f120', color: C.label,
              border: '1px solid #6366f140', textDecoration: 'none',
              transition: 'all .15s',
            }}
          >
            Try in Playground →
          </a>
        </div>
      </div>
      {/* Code */}
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

// ─── Code snippets ────────────────────────────────────────────────────────────

const BUTTON_CODE = `<div class="vel-min-h-screen vel-bg-white vel-p-10">
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
      <h2 class="vel-text-xs vel-font-semibold vel-text-neutral-400 vel-uppercase vel-tracking-widest vel-mb-4">Outline &amp; Ghost</h2>
      <div class="vel-flex vel-flex-wrap vel-gap-3">
        <button class="vel-btn vel-btn-outline-primary">Outline</button>
        <button class="vel-btn vel-btn-ghost">Ghost</button>
        <button class="vel-btn vel-btn-link">Link</button>
        <button class="vel-btn vel-btn-primary" disabled>Disabled</button>
      </div>
    </section>

    <section>
      <h2 class="vel-text-xs vel-font-semibold vel-text-neutral-400 vel-uppercase vel-tracking-widest vel-mb-4">Sizes</h2>
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

const CARD_CODE = `<div class="vel-min-h-screen vel-bg-neutral-50 vel-p-10">
  <div class="vel-max-w-4xl vel-mx-auto">

    <h1 class="vel-text-3xl vel-font-bold vel-text-neutral-900 vel-mb-8 vel-tracking-tight">Cards</h1>

    <div class="vel-grid vel-grid-cols-3 vel-gap-6 vel-mb-6">
      <div class="vel-card vel-card-hover">
        <div class="vel-card-header">Hover Card</div>
        <div class="vel-card-body">
          <p class="vel-text-neutral-500 vel-text-sm vel-mb-4">Shadow lifts on hover.</p>
          <button class="vel-btn vel-btn-primary vel-btn-sm">Action</button>
        </div>
        <div class="vel-card-footer">
          <span class="vel-text-xs vel-text-neutral-400">vel-card-hover</span>
        </div>
      </div>
      <div class="vel-card vel-card-elevated">
        <div class="vel-card-header">Elevated</div>
        <div class="vel-card-body">
          <p class="vel-text-neutral-500 vel-text-sm vel-mb-4">No border, large shadow.</p>
          <button class="vel-btn vel-btn-outline-primary vel-btn-sm">Action</button>
        </div>
        <div class="vel-card-footer">
          <span class="vel-text-xs vel-text-neutral-400">vel-card-elevated</span>
        </div>
      </div>
      <div class="vel-card vel-card-filled">
        <div class="vel-card-header">Filled</div>
        <div class="vel-card-body">
          <p class="vel-text-neutral-500 vel-text-sm vel-mb-4">Neutral background.</p>
          <button class="vel-btn vel-btn-ghost vel-btn-sm">Action</button>
        </div>
        <div class="vel-card-footer">
          <span class="vel-text-xs vel-text-neutral-400">vel-card-filled</span>
        </div>
      </div>
    </div>

    <div class="vel-grid vel-grid-cols-2 vel-gap-6">
      <div class="vel-card vel-card-flat">
        <div class="vel-card-body">
          <h3 class="vel-text-lg vel-font-semibold vel-text-neutral-900 vel-mb-2">Flat Card</h3>
          <p class="vel-text-neutral-500 vel-text-sm">No shadow, no border. Minimal.</p>
        </div>
      </div>
      <div class="vel-card vel-card-primary">
        <div class="vel-card-body">
          <h3 class="vel-text-lg vel-font-semibold vel-text-white vel-mb-2">Primary Card</h3>
          <p class="vel-text-sm" style="color:rgba(255,255,255,.75)">Bold brand-colored card.</p>
        </div>
      </div>
    </div>

  </div>
</div>`

const COLORS_CODE = `<div class="vel-min-h-screen vel-bg-white vel-p-10">
  <div class="vel-max-w-4xl vel-mx-auto">

    <h1 class="vel-text-3xl vel-font-bold vel-text-neutral-900 vel-mb-8 vel-tracking-tight">Colors</h1>

    <section class="vel-mb-8">
      <h2 class="vel-text-xs vel-font-semibold vel-text-neutral-400 vel-uppercase vel-tracking-widest vel-mb-4">Semantic</h2>
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
      <h2 class="vel-text-xs vel-font-semibold vel-text-neutral-400 vel-uppercase vel-tracking-widest vel-mb-4">Light variants</h2>
      <div class="vel-grid vel-grid-cols-5 vel-gap-3">
        <div class="vel-bg-primary-light vel-text-primary vel-p-4 vel-rounded-xl vel-text-center vel-text-sm vel-font-medium">primary</div>
        <div class="vel-bg-success-light vel-text-success vel-p-4 vel-rounded-xl vel-text-center vel-text-sm vel-font-medium">success</div>
        <div class="vel-bg-danger-light vel-text-danger vel-p-4 vel-rounded-xl vel-text-center vel-text-sm vel-font-medium">danger</div>
        <div class="vel-bg-warning-light vel-text-neutral-700 vel-p-4 vel-rounded-xl vel-text-center vel-text-sm vel-font-medium">warning</div>
        <div class="vel-bg-info-light vel-text-info vel-p-4 vel-rounded-xl vel-text-center vel-text-sm vel-font-medium">info</div>
      </div>
    </section>

    <section>
      <h2 class="vel-text-xs vel-font-semibold vel-text-neutral-400 vel-uppercase vel-tracking-widest vel-mb-4">Neutral scale</h2>
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

const TYPOGRAPHY_CODE = `<div class="vel-min-h-screen vel-bg-white vel-p-10">
  <div class="vel-max-w-2xl vel-mx-auto">

    <h1 class="vel-text-3xl vel-font-bold vel-text-neutral-900 vel-mb-8 vel-tracking-tight">Typography</h1>

    <section class="vel-mb-10">
      <h2 class="vel-text-xs vel-font-semibold vel-text-neutral-400 vel-uppercase vel-tracking-widest vel-mb-5">Type scale</h2>
      <div class="vel-space-y-3">
        <p class="vel-text-5xl vel-font-black vel-text-neutral-900 vel-leading-none">Display — vel-text-5xl</p>
        <p class="vel-text-3xl vel-font-bold vel-text-neutral-900">Heading 1 — vel-text-3xl</p>
        <p class="vel-text-2xl vel-font-semibold vel-text-neutral-800">Heading 2 — vel-text-2xl</p>
        <p class="vel-text-xl vel-font-medium vel-text-neutral-700">Heading 3 — vel-text-xl</p>
        <p class="vel-text-base vel-text-neutral-600">Body — the quick brown fox jumps over the lazy dog.</p>
        <p class="vel-text-sm vel-text-neutral-500">Small — secondary information and captions.</p>
        <p class="vel-text-xs vel-text-neutral-400 vel-uppercase vel-tracking-wider vel-font-semibold">Label / Eyebrow — vel-text-xs</p>
      </div>
    </section>

    <section class="vel-mb-10">
      <h2 class="vel-text-xs vel-font-semibold vel-text-neutral-400 vel-uppercase vel-tracking-widest vel-mb-5">Font weights</h2>
      <div class="vel-space-y-2">
        <p class="vel-text-xl vel-font-thin vel-text-neutral-800">Thin — vel-font-thin</p>
        <p class="vel-text-xl vel-font-light vel-text-neutral-800">Light — vel-font-light</p>
        <p class="vel-text-xl vel-font-normal vel-text-neutral-800">Normal — vel-font-normal</p>
        <p class="vel-text-xl vel-font-medium vel-text-neutral-800">Medium — vel-font-medium</p>
        <p class="vel-text-xl vel-font-semibold vel-text-neutral-800">Semibold — vel-font-semibold</p>
        <p class="vel-text-xl vel-font-bold vel-text-neutral-800">Bold — vel-font-bold</p>
        <p class="vel-text-xl vel-font-extrabold vel-text-neutral-800">Extrabold — vel-font-extrabold</p>
        <p class="vel-text-xl vel-font-black vel-text-neutral-800">Black — vel-font-black</p>
      </div>
    </section>

    <section>
      <h2 class="vel-text-xs vel-font-semibold vel-text-neutral-400 vel-uppercase vel-tracking-widest vel-mb-5">Text colors</h2>
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
          }}>v0.1.0</span>
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
            background: '#6366f115', padding: '4px 12px', borderRadius: '99px',
            border: '1px solid #6366f130',
          }}>
            Now in v0.1 — utility-first CSS
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
              <div className="vel-card vel-card-elevated">
                <div className="vel-card-header">Elevated</div>
                <div className="vel-card-body">
                  <p className="vel-text-neutral-500 vel-text-sm vel-mb-3">No border, large shadow.</p>
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
              <p className="vel-text-5xl vel-font-black vel-text-neutral-900 vel-leading-none">Display</p>
              <p className="vel-text-3xl vel-font-bold vel-text-neutral-900">Heading 1</p>
              <p className="vel-text-2xl vel-font-semibold vel-text-neutral-800">Heading 2</p>
              <p className="vel-text-xl vel-font-medium vel-text-neutral-700">Heading 3</p>
              <p className="vel-text-base vel-text-neutral-600">Body — the quick brown fox jumps over the lazy dog.</p>
              <p className="vel-text-sm vel-text-neutral-500">Small — secondary information and captions.</p>
              <p className="vel-text-xs vel-text-neutral-400 vel-uppercase vel-tracking-wider vel-font-semibold">Label / Eyebrow</p>
            </div>
          </PreviewBox>
          <CodeBlock code={TYPOGRAPHY_CODE} />
        </section>

      </div>

      {/* ── Footer ── */}
      <footer style={{
        textAlign: 'center', padding: '32px', borderTop: `1px solid ${C.border}`,
        fontSize: '13px', color: C.muted,
      }}>
        VeloraCSS v0.1.0 — Next.js Demo ·{' '}
        <a href={PLAYGROUND_URL} style={{ color: C.label, textDecoration: 'none' }}>Open Playground</a>
      </footer>

    </main>
  )
}
