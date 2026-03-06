'use client'

import { useState, useCallback } from 'react'

// ─── Playground link helper ───────────────────────────────────────────────────

function toPlaygroundUrl(html: string): string {
  const encoded = btoa(new TextEncoder().encode(html).reduce((s, b) => s + String.fromCharCode(b), ''))
  return `http://localhost:5173/#code=${encoded}`
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
    <div className="vel-mt-4 vel-rounded-xl vel-overflow-hidden" style={{ border: '1px solid #1e2d45' }}>
      {/* Toolbar */}
      <div
        className="vel-flex vel-items-center vel-justify-between vel-px-4 vel-py-2"
        style={{ background: '#0a0f1e', borderBottom: '1px solid #1e2d45' }}
      >
        <span className="vel-text-xs vel-font-medium" style={{ color: '#64748b', letterSpacing: '0.05em' }}>
          HTML
        </span>
        <div className="vel-flex vel-gap-2">
          <button
            onClick={handleCopy}
            className="vel-text-xs vel-font-medium vel-px-3 vel-py-1 vel-rounded-md"
            style={{
              background: copied ? '#22c55e20' : '#1a2236',
              color: copied ? '#22c55e' : '#94a3b8',
              border: `1px solid ${copied ? '#22c55e40' : '#1e2d45'}`,
              cursor: 'pointer',
              transition: 'all .15s',
            }}
          >
            {copied ? '✓ Copied' : 'Copy'}
          </button>
          <a
            href={toPlaygroundUrl(code)}
            target="_blank"
            rel="noopener noreferrer"
            className="vel-text-xs vel-font-medium vel-px-3 vel-py-1 vel-rounded-md"
            style={{
              background: '#6366f120',
              color: '#818cf8',
              border: '1px solid #6366f140',
              textDecoration: 'none',
              transition: 'all .15s',
            }}
          >
            Try in Playground →
          </a>
        </div>
      </div>
      {/* Code */}
      <pre
        style={{
          margin: 0,
          padding: '16px',
          background: '#060b17',
          color: '#94a3b8',
          fontSize: '12px',
          lineHeight: '1.7',
          overflowX: 'auto',
          maxHeight: '260px',
          overflowY: 'auto',
          fontFamily: "'Fira Code', 'Cascadia Code', 'Consolas', monospace",
        }}
      >
        <code>{code}</code>
      </pre>
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
    <main className="vel-min-h-screen vel-bg-neutral-50 vel-p-8">
      <div className="vel-max-w-5xl vel-mx-auto">

        {/* Header */}
        <div className="vel-mb-12 vel-text-center">
          <div className="vel-inline-flex vel-items-center vel-gap-3 vel-mb-4">
            <span className="vel-bg-primary vel-text-white vel-font-bold vel-text-xl vel-px-3 vel-py-1 vel-rounded-lg">
              vel
            </span>
            <h1 className="vel-text-4xl vel-font-bold vel-text-neutral-900 vel-tracking-tight">
              VeloraCSS
            </h1>
          </div>
          <p className="vel-text-lg vel-text-neutral-500 vel-max-w-xl vel-mx-auto">
            A modern utility-first CSS framework — running in Next.js App Router.
          </p>
          <div className="vel-flex vel-gap-3 vel-justify-center vel-mt-6">
            <span className="vel-bg-primary-light vel-text-primary vel-text-sm vel-font-medium vel-px-3 vel-py-1 vel-rounded-full">
              v0.1.0
            </span>
            <span className="vel-bg-success-light vel-text-success vel-text-sm vel-font-medium vel-px-3 vel-py-1 vel-rounded-full">
              Next.js ✓
            </span>
            <span className="vel-bg-neutral-100 vel-text-neutral-600 vel-text-sm vel-font-medium vel-px-3 vel-py-1 vel-rounded-full">
              App Router
            </span>
          </div>
          <div className="vel-mt-6">
            <a
              href="http://localhost:5173"
              target="_blank"
              rel="noopener noreferrer"
              className="vel-btn vel-btn-outline-primary vel-btn-sm"
            >
              Open Playground →
            </a>
          </div>
        </div>

        {/* Buttons */}
        <section className="vel-mb-12">
          <h2 className="vel-text-xs vel-font-semibold vel-text-neutral-400 vel-uppercase vel-tracking-widest vel-mb-4">Buttons</h2>
          <div className="vel-card vel-card-flat">
            <div className="vel-card-body">
              <div className="vel-flex vel-flex-wrap vel-gap-3 vel-mb-3">
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
            </div>
          </div>
          <CodeBlock code={BUTTON_CODE} />
        </section>

        {/* Cards */}
        <section className="vel-mb-12">
          <h2 className="vel-text-xs vel-font-semibold vel-text-neutral-400 vel-uppercase vel-tracking-widest vel-mb-4">Cards</h2>
          <div className="vel-grid vel-grid-cols-3 vel-gap-6">
            <div className="vel-card vel-card-hover">
              <div className="vel-card-header">Default Card</div>
              <div className="vel-card-body">
                <p className="vel-text-neutral-500 vel-text-sm vel-mb-4">With shadow, border, and hover animation.</p>
                <button className="vel-btn vel-btn-primary vel-btn-sm">Action</button>
              </div>
              <div className="vel-card-footer">
                <span className="vel-text-xs vel-text-neutral-400">vel-card vel-card-hover</span>
              </div>
            </div>
            <div className="vel-card vel-card-elevated">
              <div className="vel-card-header">Elevated</div>
              <div className="vel-card-body">
                <p className="vel-text-neutral-500 vel-text-sm vel-mb-4">No border, large shadow.</p>
                <button className="vel-btn vel-btn-outline-primary vel-btn-sm">Action</button>
              </div>
              <div className="vel-card-footer">
                <span className="vel-text-xs vel-text-neutral-400">vel-card vel-card-elevated</span>
              </div>
            </div>
            <div className="vel-card vel-card-filled">
              <div className="vel-card-header">Filled</div>
              <div className="vel-card-body">
                <p className="vel-text-neutral-500 vel-text-sm vel-mb-4">Neutral background, no shadow.</p>
                <button className="vel-btn vel-btn-ghost vel-btn-sm">Action</button>
              </div>
              <div className="vel-card-footer">
                <span className="vel-text-xs vel-text-neutral-400">vel-card vel-card-filled</span>
              </div>
            </div>
          </div>
          <CodeBlock code={CARD_CODE} />
        </section>

        {/* Colors */}
        <section className="vel-mb-12">
          <h2 className="vel-text-xs vel-font-semibold vel-text-neutral-400 vel-uppercase vel-tracking-widest vel-mb-4">Colors</h2>
          <div className="vel-grid vel-grid-cols-6 vel-gap-3 vel-mb-3">
            {colors.map((c) => (
              <div key={c} className={`vel-bg-${c} vel-text-white vel-p-4 vel-rounded-xl vel-text-center vel-text-sm vel-font-medium`}>
                {c}
              </div>
            ))}
          </div>
          <div className="vel-grid vel-grid-cols-11 vel-gap-2">
            {neutrals.map((n) => (
              <div
                key={n}
                className={`vel-bg-neutral-${n} vel-p-3 vel-rounded-lg vel-text-center`}
                style={{ fontSize: '10px', color: n >= 500 ? '#fff' : '#334155' }}
              >
                {n}
              </div>
            ))}
          </div>
          <CodeBlock code={COLORS_CODE} />
        </section>

        {/* Typography */}
        <section className="vel-mb-12">
          <h2 className="vel-text-xs vel-font-semibold vel-text-neutral-400 vel-uppercase vel-tracking-widest vel-mb-4">Typography</h2>
          <div className="vel-card vel-card-flat">
            <div className="vel-card-body vel-space-y-3">
              <p className="vel-text-5xl vel-font-black vel-text-neutral-900 vel-leading-none">Display</p>
              <p className="vel-text-3xl vel-font-bold vel-text-neutral-900">Heading 1</p>
              <p className="vel-text-2xl vel-font-semibold vel-text-neutral-800">Heading 2</p>
              <p className="vel-text-xl vel-font-medium vel-text-neutral-700">Heading 3</p>
              <p className="vel-text-base vel-text-neutral-600">Body — the quick brown fox jumps over the lazy dog.</p>
              <p className="vel-text-sm vel-text-neutral-500">Small — secondary information and captions.</p>
              <p className="vel-text-xs vel-text-neutral-400 vel-uppercase vel-tracking-wider vel-font-semibold">Label / Eyebrow</p>
            </div>
          </div>
          <CodeBlock code={TYPOGRAPHY_CODE} />
        </section>

        {/* Footer */}
        <footer className="vel-text-center vel-text-neutral-400 vel-text-sm vel-py-8 vel-border-t vel-border-neutral-200">
          VeloraCSS v0.1.0 — Next.js Demo
        </footer>

      </div>
    </main>
  )
}
