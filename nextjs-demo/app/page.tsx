'use client'

import { useState } from 'react'
import Link from 'next/link'
import DnaSlider from './_components/DnaSlider'
import Terminal from './_components/Terminal'

const IS_PROD        = process.env.NODE_ENV === 'production'
const PLAYGROUND_URL = IS_PROD ? 'https://velorax.github.io/veloracss/playground' : 'http://localhost:5173'

// ─── Section wrapper helpers ──────────────────────────────────────────────────
const sectionStyle = { padding: 'clamp(4rem, 8vw, 7rem) 1.5rem' } as React.CSSProperties
const innerStyle   = { maxWidth: '1280px', margin: '0 auto' } as React.CSSProperties

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p style={{
      fontSize: '0.6875rem',
      fontWeight: 700,
      letterSpacing: '0.1em',
      textTransform: 'uppercase' as const,
      color: 'var(--vel-color-primary)',
      marginBottom: '0.75rem',
    }}>
      ✦ {children}
    </p>
  )
}

function SectionHeadline({ children }: { children: React.ReactNode }) {
  return (
    <h2 style={{
      fontSize: 'clamp(2rem, 4vw, 3rem)',
      fontWeight: 800,
      letterSpacing: '-0.025em',
      color: 'var(--vel-color-text)',
      lineHeight: 1.15,
      margin: '0 0 1rem',
    }}>
      {children}
    </h2>
  )
}

function SectionSub({ children }: { children: React.ReactNode }) {
  return (
    <p style={{
      fontSize: 'clamp(1rem, 1.5vw, 1.125rem)',
      color: 'var(--vel-color-muted)',
      lineHeight: 1.7,
      maxWidth: '600px',
      margin: '0 0 2.5rem',
    }}>
      {children}
    </p>
  )
}

// ─── Section 2: Zero-JS State Machine demos ───────────────────────────────────
function TabsDemo() {
  const [active, setActive] = useState(0)
  const tabs = ['Overview', 'Details', 'Settings']
  const content = [
    'Overview content: This panel is active via React state — but in production, vel-tabs uses :has() + radio inputs for zero-JS behavior.',
    'Details content: Component-level state, no global store, no useEffect. Just CSS :has() listening to checked radios.',
    'Settings content: Each tab is a <label> wrapping a radio input. CSS does the rest.',
  ]
  return (
    <div>
      <div className="vel-tabs-pill" style={{ marginBottom: '0.75rem' }}>
        {tabs.map((t, i) => (
          <button
            key={t}
            className={`vel-tab${active === i ? ' vel-active' : ''}`}
            onClick={() => setActive(i)}
          >
            {t}
          </button>
        ))}
      </div>
      <div style={{
        padding: '1rem',
        background: 'var(--vel-surface-2)',
        border: '1px solid var(--vel-border-base)',
        borderRadius: 'var(--vel-radius-lg)',
        fontSize: '0.8125rem',
        color: 'var(--vel-color-muted)',
        lineHeight: 1.6,
        minHeight: '3.5rem',
      }}>
        {content[active]}
      </div>
    </div>
  )
}

function DropdownDemo() {
  return (
    <div className="vel-dropdown" style={{ width: '100%' }}>
      <button className="vel-btn vel-btn-outline" style={{ width: '100%' }}>
        Options ▾
      </button>
      <div className="vel-dropdown-menu" style={{ width: '100%' }}>
        <div className="vel-dropdown-header">Actions</div>
        <button className="vel-dropdown-item">Edit item</button>
        <button className="vel-dropdown-item">Duplicate</button>
        <div className="vel-dropdown-divider" />
        <button className="vel-dropdown-item vel-dropdown-item-danger">Delete</button>
      </div>
    </div>
  )
}

function AccordionDemo() {
  const [open, setOpen] = useState<number | null>(0)
  const items = [
    { q: 'What is a CSS State Machine?', a: 'A pattern using :has() + radio inputs to manage component state entirely in CSS — zero JavaScript, zero event listeners.' },
    { q: 'Which browsers support :has()?', a: 'All modern browsers: Chrome 105+, Firefox 121+, Safari 15.4+. VeloraCSS targets these baselines.' },
  ]
  return (
    <div className="vel-accordion">
      {items.map((item, i) => (
        <div key={i} className="vel-accordion-item">
          <button
            className="vel-accordion-trigger"
            onClick={() => setOpen(open === i ? null : i)}
          >
            {item.q}
            <span className={`vel-accordion-trigger-icon${open === i ? ' vel-open' : ''}`}>▾</span>
          </button>
          {open === i && (
            <div className="vel-accordion-content">{item.a}</div>
          )}
        </div>
      ))}
    </div>
  )
}

// ─── Section 4: Container Intelligence demo ───────────────────────────────────
function ContainerDemo() {
  const [width, setWidth] = useState(400)
  const isWide = width >= 450

  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
        <label style={{ fontSize: '0.8125rem', color: 'var(--vel-color-muted)', whiteSpace: 'nowrap' }}>
          Container width: <strong style={{ color: 'var(--vel-color-text)' }}>{width}px</strong>
        </label>
        <input
          type="range"
          min={260}
          max={800}
          value={width}
          onChange={e => setWidth(Number(e.target.value))}
          style={{ flex: 1, accentColor: 'var(--vel-color-primary)' }}
        />
      </div>

      <div style={{
        width: width + 'px',
        maxWidth: '100%',
        transition: 'width 200ms ease',
        border: '1px dashed var(--vel-border-base)',
        borderRadius: 'var(--vel-radius-xl)',
        padding: '4px',
        overflow: 'hidden',
      }}>
        <div style={{
          background: 'var(--vel-surface-2)',
          border: '1px solid var(--vel-border-base)',
          borderRadius: 'calc(var(--vel-radius-xl) - 2px)',
          overflow: 'hidden',
          display: 'grid',
          gridTemplateColumns: isWide ? '180px 1fr' : '1fr',
          transition: 'grid-template-columns 200ms ease',
        }}>
          <div style={{
            background: 'oklch(65% 0.21 var(--vel-dna-hue, 258) / 0.12)',
            borderBottom: isWide ? 'none' : '1px solid var(--vel-border-base)',
            borderRight: isWide ? '1px solid var(--vel-border-base)' : 'none',
            minHeight: isWide ? '160px' : '100px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '2.5rem',
          }}>
            🌊
          </div>
          <div style={{ padding: '1.25rem' }}>
            <span style={{
              fontSize: '0.65rem',
              fontWeight: 700,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: 'var(--vel-color-primary)',
              display: 'block',
              marginBottom: '0.375rem',
            }}>
              Container {isWide ? 'Wide' : 'Narrow'}
            </span>
            <div style={{ fontWeight: 700, marginBottom: '0.5rem', color: 'var(--vel-color-text)' }}>
              Adaptive Card
            </div>
            <div style={{ fontSize: '0.8125rem', color: 'var(--vel-color-muted)', lineHeight: 1.6 }}>
              This card switches from stacked to horizontal at 450px — using <code style={{ fontSize: '0.75em', background: 'var(--vel-surface-3)', padding: '0.1em 0.3em', borderRadius: '0.25rem', color: 'var(--vel-color-primary)' }}>@container</code> queries.
            </div>
          </div>
          <div style={{
            gridColumn: isWide ? '1 / -1' : undefined,
            background: 'var(--vel-surface-3)',
            borderTop: '1px solid var(--vel-border-base)',
            padding: '0.5rem 0.875rem',
            fontSize: '0.7rem',
            color: isWide ? 'oklch(70% 0.18 162)' : 'var(--vel-color-muted)',
            textAlign: 'center',
            fontFamily: "'Cascadia Code', Consolas, monospace",
            transition: 'color 200ms ease',
          }}>
            {isWide ? '✓ @container (min-width: 28rem) matched' : 'container width < 28rem — stacked layout'}
          </div>
        </div>
      </div>
    </div>
  )
}

// ─── Section 6: Scope theming panels ─────────────────────────────────────────
const SCOPE_THEMES = [
  { name: 'Default',  hue: 258, label: 'theme: default' },
  { name: 'Ocean',    hue: 205, label: 'data-vel-theme="ocean"' },
  { name: 'Forest',   hue: 145, label: 'data-vel-theme="forest"' },
  { name: 'Ember',    hue: 22,  label: 'data-vel-theme="ember"' },
]

function ScopePanel({ name, hue, label }: { name: string; hue: number; label: string }) {
  return (
    <div style={{
      '--vel-dna-hue': String(hue),
      background: 'var(--vel-surface-1)',
      border: '1px solid var(--vel-border-base)',
      borderRadius: 'var(--vel-radius-xl)',
      overflow: 'hidden',
    } as React.CSSProperties}>
      <div style={{
        background: 'var(--vel-color-primary)',
        height: '4px',
      }} />
      <div style={{ padding: '1rem' }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: '0.875rem',
        }}>
          <span className="vel-badge vel-badge-primary">{name}</span>
          <span style={{
            fontSize: '0.625rem',
            fontFamily: "'Cascadia Code', Consolas, monospace",
            color: 'var(--vel-color-muted)',
          }}>
            hue: {hue}
          </span>
        </div>
        <div style={{
          background: 'var(--vel-surface-0)',
          border: '1px solid var(--vel-border-base)',
          borderRadius: 'var(--vel-radius-md)',
          padding: '0.625rem 0.75rem',
          marginBottom: '0.75rem',
        }}>
          <div style={{
            fontSize: '0.6875rem',
            fontWeight: 600,
            color: 'var(--vel-color-muted)',
            marginBottom: '0.375rem',
          }}>
            Nav bar
          </div>
          <div style={{ display: 'flex', gap: '0.375rem', alignItems: 'center' }}>
            <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--vel-color-primary)' }} />
            <div style={{ width: '40px', height: '4px', borderRadius: '2px', background: 'var(--vel-color-primary)', opacity: 0.8 }} />
            <div style={{ width: '28px', height: '4px', borderRadius: '2px', background: 'var(--vel-border-base)' }} />
            <div style={{ width: '32px', height: '4px', borderRadius: '2px', background: 'var(--vel-border-base)' }} />
          </div>
        </div>
        <button className="vel-btn vel-btn-primary vel-btn-sm" style={{ width: '100%', marginBottom: '0.625rem' }}>
          Button
        </button>
        <div style={{
          fontSize: '0.625rem',
          fontFamily: "'Cascadia Code', Consolas, monospace",
          color: 'var(--vel-color-muted)',
          background: 'var(--vel-surface-0)',
          padding: '0.375rem 0.5rem',
          borderRadius: 'var(--vel-radius-sm)',
          border: '1px solid var(--vel-border-base)',
        }}>
          {label}
        </div>
      </div>
    </div>
  )
}

// ─── COLOR GENETICS theme panels ─────────────────────────────────────────────
const GENETICS_THEMES = [
  { name: 'Ocean',  hue: 205 },
  { name: 'Forest', hue: 145 },
  { name: 'Ember',  hue: 22  },
  { name: 'Aurora', hue: 300 },
  { name: 'Gold',   hue: 55  },
]

function GeneticsPanel({ name, hue }: { name: string; hue: number }) {
  return (
    <div style={{
      '--vel-dna-hue': String(hue),
      background: 'var(--vel-surface-1)',
      border: '1px solid var(--vel-border-base)',
      borderRadius: 'var(--vel-radius-xl)',
      overflow: 'hidden',
      minWidth: '160px',
      flex: '1',
    } as React.CSSProperties}>
      <div style={{ background: 'var(--vel-color-primary)', height: '4px' }} />
      <div style={{ padding: '1rem' }}>
        <span className="vel-badge vel-badge-primary" style={{ marginBottom: '0.75rem', display: 'inline-block' }}>
          {name}
        </span>
        <div style={{ marginBottom: '0.625rem' }}>
          <div style={{
            height: '6px',
            borderRadius: '3px',
            background: 'var(--vel-surface-3)',
            overflow: 'hidden',
            marginBottom: '0.375rem',
          }}>
            <div style={{ width: '65%', height: '100%', background: 'var(--vel-color-primary)', borderRadius: '3px' }} />
          </div>
          <div style={{
            height: '6px',
            borderRadius: '3px',
            background: 'var(--vel-surface-3)',
            overflow: 'hidden',
          }}>
            <div style={{ width: '40%', height: '100%', background: 'oklch(65% 0.21 var(--vel-dna-hue, 258) / 0.5)', borderRadius: '3px' }} />
          </div>
        </div>
        <button className="vel-btn vel-btn-primary vel-btn-sm" style={{ width: '100%' }}>
          Button
        </button>
        <div style={{
          marginTop: '0.5rem',
          fontSize: '0.625rem',
          fontFamily: "'Cascadia Code', Consolas, monospace",
          color: 'var(--vel-color-muted)',
          textAlign: 'center',
        }}>
          hue: {hue}
        </div>
      </div>
    </div>
  )
}

// ─── Main page ────────────────────────────────────────────────────────────────
export default function HomePage() {
  return (
    <div
      id="vel-home"
      style={{ '--vel-dna-hue': '258' } as React.CSSProperties}
    >

      {/* ── SECTION 1: HERO ─────────────────────────────────────────────── */}
      <section style={{
        ...sectionStyle,
        padding: 'clamp(5rem, 10vw, 9rem) 1.5rem clamp(4rem, 8vw, 7rem)',
        position: 'relative',
        overflow: 'hidden',
      }}>
        {/* Dot grid background */}
        <div style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'radial-gradient(circle, oklch(26% 0.045 258 / 0.5) 1px, transparent 1px)',
          backgroundSize: '24px 24px',
          pointerEvents: 'none',
          zIndex: 0,
        }} />

        <div style={{ ...innerStyle, position: 'relative', zIndex: 1 }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1fr)',
            gap: 'clamp(2rem, 5vw, 5rem)',
            alignItems: 'center',
          }}>
            {/* Left: headline + CTAs */}
            <div>
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                background: 'oklch(65% 0.21 var(--vel-dna-hue, 258) / 0.08)',
                border: '1px solid oklch(65% 0.21 var(--vel-dna-hue, 258) / 0.25)',
                borderRadius: '9999px',
                padding: '0.3rem 0.875rem',
                fontSize: '0.75rem',
                fontWeight: 600,
                color: 'var(--vel-color-primary)',
                letterSpacing: '0.04em',
                marginBottom: '1.5rem',
              }}>
                <span>✦</span>
                <span>v1.0.0 — AI-designed. Human-shipped.</span>
              </div>

              <h1 style={{
                fontSize: 'clamp(3rem, 6vw, 5rem)',
                fontWeight: 800,
                letterSpacing: '-0.03em',
                color: 'var(--vel-color-text)',
                lineHeight: 1.1,
                margin: '0 0 1.25rem',
              }}>
                Build with genetics,<br />not guesswork.
              </h1>

              <p style={{
                fontSize: 'clamp(1rem, 1.5vw, 1.1875rem)',
                color: 'var(--vel-color-muted)',
                lineHeight: 1.7,
                maxWidth: '500px',
                margin: '0 0 2rem',
              }}>
                VeloraCSS — utility-first, component-rich, and genuinely zero JavaScript.
                One hue value drives your entire color universe.
              </p>

              <div style={{ display: 'flex', gap: '0.875rem', flexWrap: 'wrap', marginBottom: '2.5rem' }}>
                <Link href="/docs/getting-started" className="vel-btn vel-btn-primary vel-btn-lg">
                  Get Started →
                </Link>
                <a href={PLAYGROUND_URL} className="vel-btn vel-btn-ghost vel-btn-lg" target="_blank" rel="noopener">
                  Try Playground
                </a>
              </div>

              {/* Mini stats */}
              <div style={{
                display: 'flex',
                gap: '0',
                border: '1px solid var(--vel-border-base)',
                borderRadius: 'var(--vel-radius-xl)',
                overflow: 'hidden',
                maxWidth: '420px',
              }}>
                {[
                  { num: '300+', label: 'Utilities' },
                  { num: '30',   label: 'Components' },
                  { num: '6',    label: 'Innovations' },
                  { num: '0',    label: 'JS Required' },
                ].map((s, i) => (
                  <div key={i} style={{
                    flex: 1,
                    padding: '0.875rem 0.625rem',
                    textAlign: 'center',
                    background: 'var(--vel-surface-1)',
                    borderRight: i < 3 ? '1px solid var(--vel-border-base)' : 'none',
                  }}>
                    <div style={{
                      fontSize: '1.25rem',
                      fontWeight: 900,
                      color: 'var(--vel-color-primary)',
                      lineHeight: 1,
                      marginBottom: '0.2rem',
                    }}>
                      {s.num}
                    </div>
                    <div style={{ fontSize: '0.65rem', color: 'var(--vel-color-muted)', letterSpacing: '0.03em' }}>
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: DNA demo widget */}
            <div style={{
              background: 'var(--vel-surface-1)',
              border: '1px solid var(--vel-border-base)',
              borderRadius: 'var(--vel-radius-2xl, 1.25rem)',
              padding: '1.5rem',
            }}>
              <DnaSlider />
              <p style={{
                fontSize: '0.6875rem',
                color: 'var(--vel-color-muted)',
                marginTop: '0.5rem',
                marginBottom: '1.25rem',
              }}>
                Drag the slider — every vel- class on this page updates.
              </p>

              {/* Swatches row */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '0.5rem', marginBottom: '1rem' }}>
                {[
                  { label: 'primary',   style: { background: 'var(--vel-color-primary)', height: '48px', borderRadius: 'var(--vel-radius-md)' } },
                  { label: 'success',   style: { background: 'oklch(65% 0.2 162)', height: '48px', borderRadius: 'var(--vel-radius-md)' } },
                  { label: 'surface-2', style: { background: 'var(--vel-surface-2)', height: '48px', borderRadius: 'var(--vel-radius-md)', border: '1px solid var(--vel-border-base)' } },
                  { label: 'border',    style: { background: 'var(--vel-border-base)', height: '48px', borderRadius: 'var(--vel-radius-md)' } },
                ].map(s => (
                  <div key={s.label}>
                    <div style={s.style as React.CSSProperties} />
                    <div style={{ fontSize: '0.6rem', color: 'var(--vel-color-muted)', marginTop: '0.25rem', fontFamily: "'Cascadia Code', Consolas, monospace" }}>
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* Live components */}
              <div style={{ display: 'flex', gap: '0.625rem', alignItems: 'center', flexWrap: 'wrap', marginBottom: '1rem' }}>
                <button className="vel-btn vel-btn-primary vel-btn-sm">vel-btn-primary</button>
                <span className="vel-badge vel-badge-primary">vel-badge</span>
              </div>

              {/* Mini card with spinner */}
              <div className="vel-card" style={{ padding: '1rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <span className="vel-spinner vel-spinner-primary" style={{ width: '1.25rem', height: '1.25rem' }} />
                <span style={{ fontSize: '0.8125rem', color: 'var(--vel-color-muted)' }}>
                  Loading component...
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 2: ZERO-JS STATE MACHINES ───────────────────────────── */}
      <section style={{
        ...sectionStyle,
        background: 'var(--vel-surface-1)',
        borderTop: '1px solid var(--vel-border-base)',
        borderBottom: '1px solid var(--vel-border-base)',
      }}>
        <div style={innerStyle}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <Eyebrow>CSS State Machines</Eyebrow>
            <SectionHeadline>Interactive components.{'\n'}Zero JavaScript.</SectionHeadline>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <SectionSub>
                Tabs, modals, dropdowns, accordions, carousels — all powered by CSS :has() and radio inputs.
                Not a single line of JS.
              </SectionSub>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem' }}>
            {/* Tabs demo */}
            <div style={{
              background: 'var(--vel-surface-2)',
              border: '1px solid var(--vel-border-base)',
              borderRadius: 'var(--vel-radius-xl)',
              padding: '1.25rem',
            }}>
              <div style={{
                fontSize: '0.6875rem',
                fontWeight: 700,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: 'var(--vel-color-primary)',
                marginBottom: '1rem',
              }}>
                Tabs
              </div>
              <TabsDemo />
              <div style={{
                marginTop: '1rem',
                padding: '0.625rem 0.875rem',
                background: 'var(--vel-surface-3)',
                borderRadius: 'var(--vel-radius-md)',
                fontSize: '0.7rem',
                fontFamily: "'Cascadia Code', Consolas, monospace",
                color: 'var(--vel-color-muted)',
              }}>
                <span style={{ color: 'var(--vel-color-primary)' }}>:has</span>(<span style={{ color: 'oklch(72% 0.13 145)' }}>input:checked</span>) ~ .vel-tab-panel
              </div>
              <div style={{ marginTop: '0.5rem', fontSize: '0.6875rem', color: 'var(--vel-color-muted)', textAlign: 'center' }}>
                0 lines of JavaScript
              </div>
            </div>

            {/* Dropdown demo */}
            <div style={{
              background: 'var(--vel-surface-2)',
              border: '1px solid var(--vel-border-base)',
              borderRadius: 'var(--vel-radius-xl)',
              padding: '1.25rem',
            }}>
              <div style={{
                fontSize: '0.6875rem',
                fontWeight: 700,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: 'var(--vel-color-primary)',
                marginBottom: '1rem',
              }}>
                Dropdown
              </div>
              <DropdownDemo />
              <div style={{
                marginTop: '1rem',
                padding: '0.625rem 0.875rem',
                background: 'var(--vel-surface-3)',
                borderRadius: 'var(--vel-radius-md)',
                fontSize: '0.7rem',
                fontFamily: "'Cascadia Code', Consolas, monospace",
                color: 'var(--vel-color-muted)',
              }}>
                .vel-dropdown:<span style={{ color: 'oklch(80% 0.16 220)' }}>focus-within</span> .vel-dropdown-menu
              </div>
              <div style={{ marginTop: '0.5rem', fontSize: '0.6875rem', color: 'var(--vel-color-muted)', textAlign: 'center' }}>
                0 lines of JavaScript
              </div>
            </div>

            {/* Accordion demo */}
            <div style={{
              background: 'var(--vel-surface-2)',
              border: '1px solid var(--vel-border-base)',
              borderRadius: 'var(--vel-radius-xl)',
              padding: '1.25rem',
            }}>
              <div style={{
                fontSize: '0.6875rem',
                fontWeight: 700,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: 'var(--vel-color-primary)',
                marginBottom: '1rem',
              }}>
                Accordion
              </div>
              <AccordionDemo />
              <div style={{
                marginTop: '1rem',
                padding: '0.625rem 0.875rem',
                background: 'var(--vel-surface-3)',
                borderRadius: 'var(--vel-radius-md)',
                fontSize: '0.7rem',
                fontFamily: "'Cascadia Code', Consolas, monospace",
                color: 'var(--vel-color-muted)',
              }}>
                <span style={{ color: 'var(--vel-color-primary)' }}>:has</span>(<span style={{ color: 'oklch(72% 0.13 145)' }}>&gt; input:checked</span>) .vel-accordion-content
              </div>
              <div style={{ marginTop: '0.5rem', fontSize: '0.6875rem', color: 'var(--vel-color-muted)', textAlign: 'center' }}>
                0 lines of JavaScript
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 3: COLOR GENETICS ────────────────────────────────────── */}
      <section style={sectionStyle}>
        <div style={innerStyle}>
          <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <Eyebrow>Color Genetics</Eyebrow>
            <SectionHeadline>One variable. Every color. Everywhere.</SectionHeadline>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <SectionSub>
                Set <code style={{ fontSize: '0.875em', background: 'var(--vel-surface-3)', padding: '0.1em 0.4em', borderRadius: '0.25rem', color: 'var(--vel-color-primary)', fontFamily: "'Cascadia Code', Consolas, monospace" }}>--vel-dna-hue</code> once.
                Your primary, surfaces, borders, and text all cascade from it automatically via oklch().
              </SectionSub>
            </div>

            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '2.5rem' }}>
              <DnaSlider />
            </div>
          </div>

          {/* 5 fixed-theme panels */}
          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
            {GENETICS_THEMES.map(t => (
              <GeneticsPanel key={t.name} {...t} />
            ))}
          </div>

          {/* Terminal showing the CSS */}
          <div style={{ marginTop: '2.5rem' }}>
            <Terminal
              filename="tokens.css"
              rawText={`/* One hue — fifty tokens */\n--vel-dna-hue: 258;\n--vel-color-primary: oklch(65% 0.21 var(--vel-dna-hue));\n--vel-surface-0:     oklch(7%  0.02  var(--vel-dna-hue));\n--vel-surface-1:     oklch(10% 0.025 var(--vel-dna-hue));\n--vel-surface-2:     oklch(13% 0.03  var(--vel-dna-hue));\n--vel-border-base:   oklch(26% 0.045 var(--vel-dna-hue));\n--vel-color-text:    oklch(92% 0.015 var(--vel-dna-hue));\n--vel-color-muted:   oklch(50% 0.04  var(--vel-dna-hue));`}
            >
              <span className="tc-comment">{'/* One hue — fifty tokens */'}</span>{'\n'}
              <span className="tc-prop">--vel-dna-hue</span>: <span className="tc-num">258</span>;{'\n'}
              <span className="tc-prop">--vel-color-primary</span>: <span className="tc-fn">oklch</span>(<span className="tc-num">65%</span> <span className="tc-num">0.21</span> <span className="tc-fn">var</span>(<span className="tc-prop">--vel-dna-hue</span>));{'\n'}
              <span className="tc-prop">--vel-surface-0</span>:     <span className="tc-fn">oklch</span>(<span className="tc-num">7%</span>  <span className="tc-num">0.02</span>  <span className="tc-fn">var</span>(<span className="tc-prop">--vel-dna-hue</span>));{'\n'}
              <span className="tc-prop">--vel-surface-1</span>:     <span className="tc-fn">oklch</span>(<span className="tc-num">10%</span> <span className="tc-num">0.025</span> <span className="tc-fn">var</span>(<span className="tc-prop">--vel-dna-hue</span>));{'\n'}
              <span className="tc-prop">--vel-surface-2</span>:     <span className="tc-fn">oklch</span>(<span className="tc-num">13%</span> <span className="tc-num">0.03</span>  <span className="tc-fn">var</span>(<span className="tc-prop">--vel-dna-hue</span>));{'\n'}
              <span className="tc-prop">--vel-border-base</span>:   <span className="tc-fn">oklch</span>(<span className="tc-num">26%</span> <span className="tc-num">0.045</span> <span className="tc-fn">var</span>(<span className="tc-prop">--vel-dna-hue</span>));{'\n'}
              <span className="tc-prop">--vel-color-text</span>:    <span className="tc-fn">oklch</span>(<span className="tc-num">92%</span> <span className="tc-num">0.015</span> <span className="tc-fn">var</span>(<span className="tc-prop">--vel-dna-hue</span>));{'\n'}
              <span className="tc-prop">--vel-color-muted</span>:   <span className="tc-fn">oklch</span>(<span className="tc-num">50%</span> <span className="tc-num">0.04</span>  <span className="tc-fn">var</span>(<span className="tc-prop">--vel-dna-hue</span>));
            </Terminal>
          </div>
        </div>
      </section>

      {/* ── SECTION 4: CONTAINER INTELLIGENCE ───────────────────────────── */}
      <section style={{
        ...sectionStyle,
        background: 'var(--vel-surface-1)',
        borderTop: '1px solid var(--vel-border-base)',
        borderBottom: '1px solid var(--vel-border-base)',
      }}>
        <div style={innerStyle}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1fr)',
            gap: 'clamp(2rem, 5vw, 5rem)',
            alignItems: 'start',
          }}>
            <div>
              <Eyebrow>Container Intelligence</Eyebrow>
              <SectionHeadline>Components that know their space.</SectionHeadline>
              <SectionSub>
                @container queries let every component adapt to its own container — not the viewport.
                No breakpoint media queries needed.
              </SectionSub>

              <Terminal
                filename="card.css"
                rawText={`.vel-card {\n  container-type: inline-size;\n}\n\n@container (min-width: 28rem) {\n  .vel-card-inner {\n    grid-template-columns: 180px 1fr;\n  }\n  .vel-card-media {\n    border-right: 1px solid var(--vel-border-base);\n  }\n}`}
              >
                <span className="tc-cls">.vel-card</span> {'{'}{'\n'}
                {'  '}<span className="tc-prop">container-type</span>: <span className="tc-value">inline-size</span>;{'\n'}
                {'}'}{'\n\n'}
                <span className="tc-kw">@container</span> (<span className="tc-prop">min-width</span>: <span className="tc-num">28rem</span>) {'{'}{'\n'}
                {'  '}<span className="tc-cls">.vel-card-inner</span> {'{'}{'\n'}
                {'    '}<span className="tc-prop">grid-template-columns</span>: <span className="tc-value">180px 1fr</span>;{'\n'}
                {'  }'}{'\n'}
                {'  '}<span className="tc-cls">.vel-card-media</span> {'{'}{'\n'}
                {'    '}<span className="tc-prop">border-right</span>: <span className="tc-num">1px</span> <span className="tc-value">solid</span> <span className="tc-fn">var</span>(<span className="tc-prop">--vel-border-base</span>);{'\n'}
                {'  }'}{'\n'}
                {'}'}
              </Terminal>
            </div>

            <div>
              <ContainerDemo />
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 5: FLUID SCALE ───────────────────────────────────────── */}
      <section style={sectionStyle}>
        <div style={innerStyle}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <Eyebrow>Fluid Scale</Eyebrow>
            <SectionHeadline>Every size. No breakpoints.</SectionHeadline>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <SectionSub>
                All spacing and type tokens use clamp() — they scale fluidly from mobile to 4K.
                Never write a media query for spacing again.
              </SectionSub>
            </div>
          </div>

          <div style={{ maxWidth: '720px', margin: '0 auto' }}>
            {/* Type ramp */}
            <div style={{
              background: 'var(--vel-surface-1)',
              border: '1px solid var(--vel-border-base)',
              borderRadius: 'var(--vel-radius-xl)',
              overflow: 'hidden',
              marginBottom: '1.5rem',
            }}>
              {[
                { name: 'vel-text-xs',   size: 'clamp(0.6875rem, 1vw, 0.75rem)',  label: 'xs' },
                { name: 'vel-text-sm',   size: 'clamp(0.8125rem, 1.2vw, 0.875rem)', label: 'sm' },
                { name: 'vel-text-base', size: 'clamp(0.9375rem, 1.5vw, 1rem)',   label: 'base' },
                { name: 'vel-text-lg',   size: 'clamp(1.0625rem, 2vw, 1.25rem)',  label: 'lg' },
                { name: 'vel-text-xl',   size: 'clamp(1.25rem, 2.5vw, 1.5rem)',   label: 'xl' },
              ].map((row, i) => (
                <div key={row.name} style={{
                  display: 'grid',
                  gridTemplateColumns: '6rem 1fr auto',
                  alignItems: 'center',
                  gap: '1rem',
                  padding: '0.875rem 1.25rem',
                  borderBottom: i < 4 ? '1px solid var(--vel-border-base)' : 'none',
                }}>
                  <code style={{
                    fontSize: '0.7rem',
                    fontFamily: "'Cascadia Code', Consolas, monospace",
                    color: 'var(--vel-color-primary)',
                    background: 'var(--vel-surface-3)',
                    padding: '0.2em 0.4em',
                    borderRadius: '0.25rem',
                  }}>
                    .{row.name}
                  </code>
                  <span style={{ fontSize: row.size, color: 'var(--vel-color-text)', fontWeight: row.label === 'xl' ? 700 : 400, lineHeight: 1.2 }}>
                    The quick brown fox
                  </span>
                  <code style={{
                    fontSize: '0.6rem',
                    fontFamily: "'Cascadia Code', Consolas, monospace",
                    color: 'var(--vel-color-muted)',
                    whiteSpace: 'nowrap',
                  }}>
                    {row.size}
                  </code>
                </div>
              ))}
            </div>

            <Terminal
              filename="tokens.css"
              rawText={`--vel-text-xs:   clamp(0.6875rem, 1vw,   0.75rem);\n--vel-text-sm:   clamp(0.8125rem, 1.2vw, 0.875rem);\n--vel-text-base: clamp(0.9375rem, 1.5vw, 1rem);\n--vel-text-lg:   clamp(1.0625rem, 2vw,   1.25rem);\n--vel-text-xl:   clamp(1.25rem,   2.5vw, 1.5rem);\n\n--vel-space-4:   clamp(0.875rem, 2vw,  1rem);\n--vel-space-8:   clamp(1.75rem,  4vw,  2rem);`}
            >
              <span className="tc-prop">--vel-text-xs</span>:   <span className="tc-fn">clamp</span>(<span className="tc-num">0.6875rem</span>, <span className="tc-num">1vw</span>,   <span className="tc-num">0.75rem</span>);{'\n'}
              <span className="tc-prop">--vel-text-sm</span>:   <span className="tc-fn">clamp</span>(<span className="tc-num">0.8125rem</span>, <span className="tc-num">1.2vw</span>, <span className="tc-num">0.875rem</span>);{'\n'}
              <span className="tc-prop">--vel-text-base</span>: <span className="tc-fn">clamp</span>(<span className="tc-num">0.9375rem</span>, <span className="tc-num">1.5vw</span>, <span className="tc-num">1rem</span>);{'\n'}
              <span className="tc-prop">--vel-text-lg</span>:   <span className="tc-fn">clamp</span>(<span className="tc-num">1.0625rem</span>, <span className="tc-num">2vw</span>,   <span className="tc-num">1.25rem</span>);{'\n'}
              <span className="tc-prop">--vel-text-xl</span>:   <span className="tc-fn">clamp</span>(<span className="tc-num">1.25rem</span>,   <span className="tc-num">2.5vw</span>, <span className="tc-num">1.5rem</span>);{'\n'}
              {'\n'}
              <span className="tc-prop">--vel-space-4</span>:   <span className="tc-fn">clamp</span>(<span className="tc-num">0.875rem</span>, <span className="tc-num">2vw</span>,  <span className="tc-num">1rem</span>);{'\n'}
              <span className="tc-prop">--vel-space-8</span>:   <span className="tc-fn">clamp</span>(<span className="tc-num">1.75rem</span>,  <span className="tc-num">4vw</span>,  <span className="tc-num">2rem</span>);
            </Terminal>
          </div>
        </div>
      </section>

      {/* ── SECTION 6: SCOPE THEMING ─────────────────────────────────────── */}
      <section style={{
        ...sectionStyle,
        background: 'var(--vel-surface-1)',
        borderTop: '1px solid var(--vel-border-base)',
        borderBottom: '1px solid var(--vel-border-base)',
      }}>
        <div style={innerStyle}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <Eyebrow>Scope Theming</Eyebrow>
            <SectionHeadline>Theme any subtree. Instantly.</SectionHeadline>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <SectionSub>
                Apply <code style={{ fontSize: '0.875em', background: 'var(--vel-surface-3)', padding: '0.1em 0.4em', borderRadius: '0.25rem', color: 'var(--vel-color-primary)', fontFamily: "'Cascadia Code', Consolas, monospace" }}>data-vel-theme</code> to
                any element. Its entire color universe — surfaces, borders, text, components — shifts independently.
              </SectionSub>
            </div>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '1rem',
            marginBottom: '2rem',
          }}>
            {SCOPE_THEMES.map(t => (
              <ScopePanel key={t.name} {...t} />
            ))}
          </div>

          <Terminal
            filename="scope-theme.html"
            rawText={`<!-- Each subtree has its own independent color universe -->\n<div data-vel-theme="ocean"   style="--vel-dna-hue: 205">\n  <button class="vel-btn vel-btn-primary">Ocean Button</button>\n</div>\n\n<div data-vel-theme="ember"   style="--vel-dna-hue: 22">\n  <button class="vel-btn vel-btn-primary">Ember Button</button>\n</div>`}
          >
            <span className="tc-comment">{'<!-- Each subtree has its own independent color universe -->'}</span>{'\n'}
            {'<'}<span className="tc-cls">div</span> <span className="tc-prop">data-vel-theme</span>=<span className="tc-str">"ocean"</span>   <span className="tc-prop">style</span>=<span className="tc-str">"--vel-dna-hue: 205"</span>{'>'}{'\n'}
            {'  <'}<span className="tc-cls">button</span> <span className="tc-prop">class</span>=<span className="tc-str">"vel-btn vel-btn-primary"</span>{'>'}Ocean Button{'</'}<span className="tc-cls">button</span>{'>'}{'\n'}
            {'</'}<span className="tc-cls">div</span>{'>'}{'\n\n'}
            {'<'}<span className="tc-cls">div</span> <span className="tc-prop">data-vel-theme</span>=<span className="tc-str">"ember"</span>   <span className="tc-prop">style</span>=<span className="tc-str">"--vel-dna-hue: 22"</span>{'>'}{'\n'}
            {'  <'}<span className="tc-cls">button</span> <span className="tc-prop">class</span>=<span className="tc-str">"vel-btn vel-btn-primary"</span>{'>'}Ember Button{'</'}<span className="tc-cls">button</span>{'>'}{'\n'}
            {'</'}<span className="tc-cls">div</span>{'>'}
          </Terminal>
        </div>
      </section>

      {/* ── SECTION 7: STATS STRIP ───────────────────────────────────────── */}
      <section style={{
        padding: '3rem 1.5rem',
        background: 'var(--vel-surface-1)',
        borderTop: '1px solid var(--vel-border-base)',
        borderBottom: '1px solid var(--vel-border-base)',
      }}>
        <div style={{
          ...innerStyle,
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '1px',
          background: 'var(--vel-border-base)',
          border: '1px solid var(--vel-border-base)',
          borderRadius: 'var(--vel-radius-xl)',
          overflow: 'hidden',
        }}>
          {[
            { num: '300+', label: 'Utility Classes' },
            { num: '30',   label: 'Components' },
            { num: '6',    label: 'AI Innovations' },
            { num: '0',    label: 'JavaScript Required' },
          ].map(s => (
            <div key={s.label} style={{
              background: 'var(--vel-surface-2)',
              padding: '2rem',
              textAlign: 'center',
            }}>
              <div style={{
                fontSize: 'clamp(2rem, 4vw, 3rem)',
                fontWeight: 900,
                color: 'var(--vel-color-primary)',
                lineHeight: 1,
                marginBottom: '0.5rem',
              }}>
                {s.num}
              </div>
              <div style={{ fontSize: '0.8125rem', color: 'var(--vel-color-muted)', lineHeight: 1.4 }}>
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── SECTION 8: GET STARTED CTA ───────────────────────────────────── */}
      <section style={{ padding: 'clamp(4rem, 8vw, 7rem) 1.5rem', background: 'var(--vel-surface-0)' }}>
        <div style={{ ...innerStyle, textAlign: 'center' }}>
          <Eyebrow>Ready to ship?</Eyebrow>
          <h2 style={{
            fontSize: 'clamp(2.5rem, 5vw, 4rem)',
            fontWeight: 800,
            letterSpacing: '-0.03em',
            color: 'var(--vel-color-text)',
            lineHeight: 1.1,
            margin: '0 0 1.25rem',
          }}>
            Start building today.
          </h2>
          <p style={{
            fontSize: '1.0625rem',
            color: 'var(--vel-color-muted)',
            lineHeight: 1.7,
            maxWidth: '480px',
            margin: '0 auto 2.5rem',
          }}>
            npm install veloracss — then drop in the CSS. No config required.
            Swap one token to redesign everything.
          </p>
          <div style={{ display: 'flex', gap: '0.875rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '2rem' }}>
            <Link href="/docs/getting-started" className="vel-btn vel-btn-primary vel-btn-lg">
              Read the Docs
            </Link>
            <a href={PLAYGROUND_URL} className="vel-btn vel-btn-ghost vel-btn-lg" target="_blank" rel="noopener">
              Open Playground ↗
            </a>
          </div>

          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.75rem',
            background: 'var(--vel-surface-2)',
            border: '1px solid var(--vel-border-base)',
            borderRadius: 'var(--vel-radius-xl)',
            padding: '0.75rem 1.25rem',
          }}>
            <code style={{
              fontFamily: "'Cascadia Code', Consolas, monospace",
              fontSize: '0.9375rem',
              color: 'var(--vel-color-text)',
            }}>
              npm install veloracss
            </code>
            <span style={{
              fontSize: '0.6875rem',
              background: 'oklch(65% 0.21 var(--vel-dna-hue, 258) / 0.12)',
              color: 'var(--vel-color-primary)',
              padding: '0.2rem 0.5rem',
              borderRadius: '9999px',
              fontWeight: 600,
            }}>
              v1.0.0
            </span>
          </div>
        </div>
      </section>

    </div>
  )
}
