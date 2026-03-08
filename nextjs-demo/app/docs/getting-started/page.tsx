'use client'

import { useState, useCallback } from 'react'
import Link from 'next/link'

// ─── macOS Terminal ───────────────────────────────────────────────────────────
function MacTerminal({ filename, code }: { filename: string; code: string }) {
  const [copied, setCopied] = useState(false)
  const handleCopy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(code)
    } catch {
      const el = document.createElement('textarea')
      el.value = code
      el.style.cssText = 'position:fixed;top:0;left:0;opacity:0'
      document.body.appendChild(el)
      el.select()
      document.execCommand('copy')
      document.body.removeChild(el)
    }
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }, [code])

  return (
    <div style={{
      background: '#1a1a1a', borderRadius: '0.625rem', overflow: 'hidden',
      border: '1px solid #333',
      boxShadow: '0 8px 32px -4px rgba(0,0,0,0.5)',
    }}>
      <div style={{
        display: 'flex', alignItems: 'center', height: '36px',
        padding: '0 0.875rem', background: '#252525', borderBottom: '1px solid #333',
        gap: '0.5rem',
      }}>
        {/* Traffic light dots */}
        <div style={{ display: 'flex', gap: '6px', alignItems: 'center', flexShrink: 0 }}>
          <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#ff5f57' }} />
          <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#ffbd2e' }} />
          <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#28c840' }} />
        </div>
        <span style={{
          fontSize: '0.72rem', color: '#888', flex: 1, textAlign: 'center',
          fontFamily: "'Cascadia Code', Menlo, Monaco, monospace",
        }}>
          {filename}
        </span>
        <button
          onClick={handleCopy}
          style={{
            fontSize: '0.68rem', fontWeight: 600, padding: '0.2rem 0.625rem',
            borderRadius: '0.25rem', cursor: 'pointer', border: 'none',
            fontFamily: "'Cascadia Code', Consolas, monospace",
            background: copied ? 'rgba(14,203,129,0.15)' : '#333',
            color: copied ? '#0ecb81' : '#888',
            flexShrink: 0, transition: 'all 0.15s',
          }}
        >
          {copied ? '✓ Copied' : 'Copy'}
        </button>
      </div>
      <pre style={{
        margin: 0, padding: '1rem 1.25rem',
        fontSize: '0.8125rem', lineHeight: 1.8, color: '#CCCCCC',
        whiteSpace: 'pre-wrap', wordBreak: 'break-all',
        fontFamily: "'Cascadia Code', Menlo, Monaco, 'Courier New', monospace",
        overflowX: 'auto',
      }}>
        <code>{code}</code>
      </pre>
    </div>
  )
}

const C = {
  surface: '#0d1422', surface2: '#111827', border: '#1e2d45',
  text: '#e2e8f0', muted: '#94a3b8', accent: '#a87fff', dim: '#64748b',
}

function Inline({ children }: { children: React.ReactNode }) {
  return (
    <code style={{
      fontFamily: "'Cascadia Code', Consolas, monospace",
      fontSize: '0.875em', color: '#a87fff',
      background: 'rgba(124,92,252,0.1)', padding: '1px 6px', borderRadius: '4px',
    }}>
      {children}
    </code>
  )
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 style={{ fontSize: '1.2rem', fontWeight: 600, color: C.text, marginBottom: '0.5rem' }}>
      {children}
    </h2>
  )
}

export default function GettingStartedPage() {
  return (
    <main style={{ padding: '2.5rem', maxWidth: '860px', fontFamily: 'system-ui, -apple-system, sans-serif', color: C.text }}>

      {/* Breadcrumb */}
      <p style={{ fontSize: '0.78rem', color: C.dim, marginBottom: '1rem' }}>
        Docs <span style={{ color: '#475569' }}>/</span>{' '}
        <span style={{ color: C.muted }}>Getting Started</span>
      </p>

      {/* Title */}
      <h1 style={{
        fontSize: '2rem', fontWeight: 700, color: '#ffffff', margin: '0 0 0.5rem',
        letterSpacing: '-0.02em', lineHeight: 1.2, paddingBottom: '0.6rem',
        borderBottom: '2px solid transparent',
        borderImage: 'linear-gradient(90deg, #7c5cfc, #a87fff) 1',
        display: 'inline-block',
      }}>
        Getting Started
      </h1>

      <p style={{ fontSize: '1.1rem', color: C.muted, lineHeight: 1.7, marginTop: '1rem', marginBottom: '2.5rem' }}>
        Add VeloraCSS to your project and start building with <Inline>vel-</Inline> utility classes
        — the framework that thinks in context.
      </p>

      {/* Via GitHub */}
      <section style={{ marginBottom: '2.5rem' }}>
        <SectionTitle>Via GitHub (direct link)</SectionTitle>
        <p style={{ color: C.muted, fontSize: '0.9rem', lineHeight: 1.7, marginBottom: '1rem' }}>
          Quickest way to start: link <Inline>velora.min.css</Inline> from the GitHub release.
          Drop this in your <Inline>&lt;head&gt;</Inline>:
        </p>
        <MacTerminal filename="index.html" code={`<link rel="stylesheet" href="https://raw.githubusercontent.com/VeloraX/veloracss/main/dist/velora.min.css">`} />
        <p style={{ color: C.dim, fontSize: '0.82rem', marginTop: '0.75rem', lineHeight: 1.6 }}>
          Or download <Inline>velora.css</Inline> / <Inline>velora.min.css</Inline> from the{' '}
          <a href="https://github.com/VeloraX/veloracss/tree/main/dist" target="_blank" rel="noopener noreferrer" style={{ color: C.accent }}>
            dist/ folder on GitHub
          </a>.
        </p>
      </section>

      {/* Build from source */}
      <section style={{ marginBottom: '2.5rem' }}>
        <SectionTitle>Build from source</SectionTitle>
        <p style={{ color: C.muted, fontSize: '0.9rem', lineHeight: 1.7, marginBottom: '1rem' }}>
          Clone and build locally for full customization:
        </p>
        <MacTerminal filename="Windows PowerShell" code={`git clone https://github.com/VeloraX/veloracss.git
cd veloracss
npm install
npm run build
# → dist/velora.css
# → dist/velora.min.css`} />
      </section>

      {/* npm — coming soon */}
      <section style={{ marginBottom: '2.5rem' }}>
        <SectionTitle>
          npm{' '}
          <span style={{
            fontSize: '0.65rem', fontWeight: 600, color: '#ff9d00',
            background: 'rgba(255,157,0,0.12)', border: '1px solid rgba(255,157,0,0.3)',
            padding: '2px 8px', borderRadius: '99px', verticalAlign: 'middle', letterSpacing: '0.04em',
          }}>
            COMING SOON
          </span>
        </SectionTitle>
        <p style={{ color: C.muted, fontSize: '0.9rem', lineHeight: 1.7, marginBottom: '1rem' }}>
          npm packaging is on the roadmap. Once published:
        </p>
        <MacTerminal filename="Windows PowerShell" code={`# Not yet available
npm install veloracss`} />
      </section>

      {/* First component */}
      <section style={{ marginBottom: '2.5rem' }}>
        <SectionTitle>Your first component</SectionTitle>
        <p style={{ color: C.muted, fontSize: '0.9rem', lineHeight: 1.7, marginBottom: '1rem' }}>
          Once VeloraCSS is loaded, compose components using <Inline>vel-</Inline> utility classes:
        </p>
        <MacTerminal filename="index.html" code={`<div class="vel-card vel-p-6 vel-max-w-sm">
  <h2 class="vel-text-xl vel-font-semibold vel-mb-2">Hello, VeloraCSS</h2>
  <p class="vel-text-sm vel-text-neutral-500 vel-mb-4">
    Utility-first styling, ready out of the box.
  </p>
  <button class="vel-btn vel-btn-primary">Get started</button>
</div>`} />
        {/* Live preview */}
        <div style={{
          marginTop: '1rem', background: C.surface, border: `1px solid ${C.border}`,
          borderRadius: '0.5rem', padding: '1.5rem',
        }}>
          <div className="vel-card vel-p-6" style={{ maxWidth: '24rem' }}>
            <h2 className="vel-text-xl vel-font-semibold vel-mb-2" style={{ color: '#f1f5f9' }}>Hello, VeloraCSS</h2>
            <p className="vel-text-sm vel-mb-4" style={{ color: '#64748b' }}>
              Utility-first styling, ready out of the box.
            </p>
            <button className="vel-btn vel-btn-primary">Get started</button>
          </div>
        </div>
      </section>

      {/* Color Genetics */}
      <section style={{ marginBottom: '2.5rem' }}>
        <SectionTitle>The DNA Color System</SectionTitle>
        <p style={{ color: C.muted, fontSize: '0.9rem', lineHeight: 1.7, marginBottom: '1rem' }}>
          VeloraCSS introduces <strong style={{ color: C.text }}>Color Genetics</strong> — one hue number
          drives your entire color system via <Inline>oklch()</Inline>. Override the DNA hue and everything
          recolors automatically:
        </p>
        <MacTerminal filename="your-theme.css" code={`:root {
  /* Change this one number — everything updates */
  --vel-dna-hue: 145;  /* was 258 (violet), now 145 (forest green) */
}

/* All other tokens derive from it automatically:
   --vel-color-primary: oklch(65% 0.21 var(--vel-dna-hue))
   --vel-surface-0:     oklch(7%  0.02 var(--vel-dna-hue))
   --vel-text-1:        oklch(92% 0.015 var(--vel-dna-hue)) */`} />
      </section>

      {/* Design tokens */}
      <section style={{ marginBottom: '2.5rem' }}>
        <SectionTitle>Design tokens</SectionTitle>
        <p style={{ color: C.muted, fontSize: '0.9rem', lineHeight: 1.7, marginBottom: '1rem' }}>
          The full design system is exposed as <Inline>--vel-*</Inline> CSS custom properties.
          Override any token at <Inline>:root</Inline> to customize:
        </p>
        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
          gap: '0.75rem', marginBottom: '1.25rem',
        }}>
          {[
            { token: '--vel-primary-500', desc: 'Brand violet', val: '#7c5cfc' },
            { token: '--vel-success-500', desc: 'Success emerald', val: '#0ecb81' },
            { token: '--vel-danger-500',  desc: 'Danger rose', val: '#f0416c' },
            { token: '--vel-warning-500', desc: 'Warning amber', val: '#ff9d00' },
            { token: '--vel-space-4',     desc: '1rem spacing', val: '1rem' },
            { token: '--vel-radius-lg',   desc: 'Large radius', val: '0.5rem' },
          ].map(({ token, desc, val }) => (
            <div key={token} style={{
              background: C.surface, border: `1px solid ${C.border}`,
              borderRadius: '0.5rem', padding: '0.75rem',
            }}>
              <code style={{ fontFamily: "'Cascadia Code', Consolas, monospace", fontSize: '0.72rem', color: C.accent, display: 'block', marginBottom: '0.25rem', wordBreak: 'break-all' }}>
                {token}
              </code>
              <span style={{ fontSize: '0.75rem', color: C.muted }}>{desc}</span>
              <span style={{ display: 'block', fontSize: '0.7rem', color: C.dim, fontFamily: 'Consolas, monospace', marginTop: '0.2rem' }}>
                {val}
              </span>
            </div>
          ))}
        </div>
        <MacTerminal filename="your-theme.css" code={`:root {
  --vel-primary-500: #7c5cfc;       /* override brand color */
  --vel-radius-lg:   0.75rem;       /* override radius */
  --vel-font-sans:   'Inter', system-ui, sans-serif;
}`} />
      </section>

      {/* Next steps */}
      <section style={{ marginBottom: '1rem' }}>
        <SectionTitle>Next steps</SectionTitle>
        <p style={{ color: C.muted, fontSize: '0.9rem', lineHeight: 1.7, marginBottom: '1rem' }}>
          Explore the full reference in the sidebar. Start with utilities, then dive into the components.
        </p>
        <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' as const }}>
          {[
            { label: 'Utility Classes', slug: 'utility-classes' },
            { label: 'Buttons', slug: 'buttons' },
            { label: 'Display', slug: 'display' },
            { label: 'Colors', slug: 'colors' },
          ].map(({ label, slug }) => (
            <Link key={slug} href={`/docs/${slug}`} style={{
              fontSize: '0.8rem', fontWeight: 500,
              padding: '0.4rem 1rem', borderRadius: '0.375rem',
              background: 'rgba(124,92,252,0.1)', color: C.accent,
              border: '1px solid rgba(124,92,252,0.25)', textDecoration: 'none',
            }}>
              {label} →
            </Link>
          ))}
        </div>
      </section>

      {/* Edit on GitHub */}
      <div style={{ marginTop: '3rem', paddingTop: '1.5rem', borderTop: `1px solid ${C.border}` }}>
        <a
          href="https://github.com/VeloraX/veloracss"
          target="_blank"
          rel="noopener noreferrer"
          style={{ fontSize: '0.8rem', color: C.dim, textDecoration: 'none' }}
        >
          Edit on GitHub →
        </a>
      </div>

    </main>
  )
}
