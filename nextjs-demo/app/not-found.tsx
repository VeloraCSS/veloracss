'use client'

import { useState, useCallback } from 'react'
import Link from 'next/link'

const IS_PROD = process.env.NODE_ENV === 'production'
const DOCS_URL = IS_PROD ? '/veloracss/docs' : '/docs'

const DNA_CSS = `
  #vel-404 {
    --vel-dna-hue: 258;
    --vp:        oklch(65% 0.21 var(--vel-dna-hue));
    --vp-light:  oklch(80% 0.14 var(--vel-dna-hue));
    --vp-glow:   oklch(65% 0.21 var(--vel-dna-hue) / 0.18);
    --vp-subtle: oklch(65% 0.21 var(--vel-dna-hue) / 0.09);
    --vs0: oklch(7%  0.02  var(--vel-dna-hue));
    --vs1: oklch(10% 0.025 var(--vel-dna-hue));
    --vs2: oklch(13% 0.03  var(--vel-dna-hue));
    --vs3: oklch(17% 0.035 var(--vel-dna-hue));
    --vborder: oklch(26% 0.045 var(--vel-dna-hue));
    --vt1: oklch(92% 0.015 var(--vel-dna-hue));
    --vt2: oklch(70% 0.03  var(--vel-dna-hue));
    --vt3: oklch(50% 0.04  var(--vel-dna-hue));
    min-height: 100vh;
    background: var(--vs0);
    color: var(--vt1);
    font-family: system-ui, -apple-system, 'Segoe UI', sans-serif;
    -webkit-font-smoothing: antialiased;
    display: flex; flex-direction: column;
  }
  #vel-404 * { box-sizing: border-box; }
  .v404-nav {
    height: 56px; display: flex; align-items: center; justify-content: space-between;
    padding: 0 clamp(1rem, 4vw, 3rem);
    background: var(--vs0); border-bottom: 1px solid var(--vborder);
  }
  .v404-nav-links { display: flex; gap: 1.25rem; }
  .v404-nav-link {
    font-size: 0.875rem; font-weight: 500; color: var(--vt2); text-decoration: none;
    transition: color 200ms;
  }
  .v404-nav-link:hover { color: var(--vt1); }
  .v404-body {
    flex: 1; display: flex; flex-direction: column;
    align-items: center; justify-content: center;
    text-align: center; padding: clamp(2rem, 8vw, 6rem) clamp(1rem, 4vw, 3rem);
    position: relative; overflow: hidden;
  }
  .v404-body::before {
    content: '';
    position: absolute; inset: 0;
    background: radial-gradient(ellipse 60% 60% at 50% 50%, var(--vp-glow), transparent 70%);
    pointer-events: none;
  }
  .v404-num {
    font-size: clamp(6rem, 18vw, 12rem); font-weight: 900; line-height: 1;
    letter-spacing: -0.05em; color: var(--vp);
    opacity: 0.15; position: absolute;
    user-select: none; pointer-events: none;
  }
  .v404-content { position: relative; z-index: 1; }
  .v404-tag {
    display: inline-flex; align-items: center; gap: 0.5rem;
    font-size: 0.7rem; font-weight: 700; letter-spacing: 0.12em; text-transform: uppercase;
    color: var(--vp); background: var(--vp-subtle);
    border: 1px solid var(--vp-glow); border-radius: 9999px;
    padding: 0.35rem 1rem; margin-bottom: 1.5rem;
  }
  .v404-tag::before {
    content: ''; width: 6px; height: 6px; border-radius: 50%; background: var(--vp);
  }
  .v404-title {
    font-size: clamp(2rem, 5vw, 3.5rem); font-weight: 900;
    letter-spacing: -0.03em; line-height: 1.1; margin-bottom: 1rem;
  }
  .v404-title em { font-style: normal; color: var(--vp); }
  .v404-desc {
    font-size: 1.0625rem; color: var(--vt2); max-width: 460px;
    margin: 0 auto 2.5rem; line-height: 1.7;
  }
  .v404-actions { display: flex; gap: 0.75rem; justify-content: center; flex-wrap: wrap; }
  .v404-btn-primary {
    font-size: 0.9375rem; font-weight: 700; padding: 0.75rem 1.75rem;
    border-radius: 0.625rem; background: var(--vp);
    color: oklch(12% 0.02 var(--vel-dna-hue));
    text-decoration: none; border: none; cursor: pointer;
    transition: all 220ms cubic-bezier(0.16,1,0.3,1);
  }
  .v404-btn-primary:hover { background: var(--vp-light); transform: translateY(-1px); }
  .v404-btn-secondary {
    font-size: 0.9375rem; font-weight: 600; padding: 0.75rem 1.75rem;
    border-radius: 0.625rem; background: var(--vs2); color: var(--vt1);
    text-decoration: none; border: 1px solid var(--vborder); cursor: pointer;
    transition: all 220ms cubic-bezier(0.16,1,0.3,1);
  }
  .v404-btn-secondary:hover { border-color: var(--vp); color: var(--vp); }
  .v404-terminal {
    margin-top: 3rem; text-align: left;
    background: #1a1a1a; border: 1px solid #333; border-radius: 0.625rem;
    overflow: hidden; max-width: 520px; width: 100%;
    box-shadow: 0 20px 60px -12px rgba(0,0,0,0.6);
  }
  .v404-terminal-bar {
    display: flex; align-items: center; height: 36px; gap: 0.5rem;
    padding: 0 0.875rem; background: #252525; border-bottom: 1px solid #333;
  }
  .v404-terminal-dots {
    display: flex; gap: 6px; align-items: center; flex-shrink: 0;
  }
  .v404-terminal-dot {
    width: 12px; height: 12px; border-radius: 50%;
  }
  .v404-terminal-title {
    font-size: 0.72rem; color: #888; flex: 1; text-align: center;
    font-family: 'Cascadia Code', Menlo, Monaco, monospace;
  }
  .v404-terminal-body {
    padding: 1rem 1.25rem;
    font-family: 'Cascadia Code', Menlo, Monaco, Consolas, monospace;
    font-size: 0.8125rem; line-height: 1.8; color: #CCCCCC;
  }
  .v404-prompt { color: #0ecb81; }
  .v404-error { color: #f87171; }
  .v404-cmd { color: #9cdcfe; }
  .v404-footer {
    padding: 1.5rem clamp(1rem, 4vw, 3rem);
    border-top: 1px solid oklch(20% 0.035 var(--vel-dna-hue));
    display: flex; align-items: center; justify-content: space-between;
    flex-wrap: wrap; gap: 0.75rem;
  }
  .v404-footer-copy { font-size: 0.8125rem; color: var(--vt3); }
  .v404-footer-links { display: flex; gap: 1.25rem; }
  .v404-footer-link {
    font-size: 0.8125rem; color: var(--vt3); text-decoration: none;
    transition: color 200ms;
  }
  .v404-footer-link:hover { color: var(--vt1); }
`

export default function NotFound() {
  const [hue, setHue] = useState(258)

  const onHue = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const v = Number(e.target.value)
    setHue(v)
    document.getElementById('vel-404')?.style.setProperty('--vel-dna-hue', String(v))
  }, [])

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: DNA_CSS }} />
      <div id="vel-404" style={{ '--vel-dna-hue': '258' } as React.CSSProperties}>

        {/* Nav */}
        <nav className="v404-nav">
          <span style={{ fontWeight: 800, fontSize: '1rem', color: 'var(--vp)' }}>Velora</span>
          <div className="v404-nav-links">
            <Link href="/" className="v404-nav-link">Home</Link>
            <Link href={DOCS_URL} className="v404-nav-link">Docs</Link>
            <a href="https://github.com/VeloraX/veloracss" target="_blank" rel="noopener noreferrer" className="v404-nav-link">GitHub</a>
          </div>
        </nav>

        {/* Body */}
        <div className="v404-body">
          <div className="v404-num">404</div>
          <div className="v404-content">
            <div className="v404-tag">404 — Page not found</div>
            <h1 className="v404-title">
              This page<br /><em>doesn&apos;t exist.</em>
            </h1>
            <p className="v404-desc">
              The page you were looking for has either moved, been deleted, or never existed.
              Head back home or explore the docs.
            </p>
            <div className="v404-actions">
              <Link href="/" className="v404-btn-primary">← Back to Home</Link>
              <Link href={DOCS_URL} className="v404-btn-secondary">Browse Docs</Link>
            </div>

            {/* Win11 terminal */}
            <div className="v404-terminal">
              <div className="v404-terminal-bar">
                <div className="v404-terminal-dots">
                  <div className="v404-terminal-dot" style={{ background: '#ff5f57' }} />
                  <div className="v404-terminal-dot" style={{ background: '#ffbd2e' }} />
                  <div className="v404-terminal-dot" style={{ background: '#28c840' }} />
                </div>
                <span className="v404-terminal-title">velora — zsh</span>
              </div>
              <div className="v404-terminal-body">
                <span className="v404-prompt">~</span>
                <span style={{ color: '#888' }}> $ </span>
                <span className="v404-cmd">curl https://velorax.github.io/this-page</span>
                <br />
                <span className="v404-error">curl: (404) Not Found — the requested resource does not exist</span>
                <br /><br />
                <span className="v404-prompt">~</span>
                <span style={{ color: '#888' }}> $ </span>
                <span className="v404-cmd">open https://velorax.github.io/veloracss</span>
                <br />
                <span style={{ color: '#0ecb81' }}>200 OK — redirecting to homepage...</span>
              </div>
            </div>

            {/* Subtle hue slider */}
            <div style={{
              marginTop: '2rem', display: 'flex', alignItems: 'center',
              gap: '0.75rem', opacity: 0.6,
            }}>
              <span style={{ fontSize: '0.7rem', color: 'var(--vt3)', fontFamily: 'monospace' }}>
                --vel-dna-hue: {hue}
              </span>
              <input
                type="range" min="0" max="360" value={hue}
                onChange={onHue}
                style={{
                  width: '120px', height: '4px', borderRadius: '2px', cursor: 'pointer',
                  background: 'linear-gradient(to right in oklch, oklch(65% 0.21 0), oklch(65% 0.21 120), oklch(65% 0.21 240), oklch(65% 0.21 360))',
                  WebkitAppearance: 'none', appearance: 'none',
                }}
              />
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="v404-footer">
          <span className="v404-footer-copy">VeloraCSS — AI-designed. Human-shipped.</span>
          <div className="v404-footer-links">
            <Link href="/" className="v404-footer-link">Home</Link>
            <Link href={DOCS_URL} className="v404-footer-link">Docs</Link>
            <a href="https://github.com/VeloraX/veloracss" target="_blank" rel="noopener noreferrer" className="v404-footer-link">GitHub</a>
          </div>
        </footer>

      </div>
    </>
  )
}
