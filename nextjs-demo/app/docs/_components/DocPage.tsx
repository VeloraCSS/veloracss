'use client'

import { useState, useCallback } from 'react'

interface ReferenceRow {
  class: string
  properties: string
}

interface Example {
  label: string
  html: string
}

interface DocPageProps {
  title: string
  description: string
  source?: string
  table: ReferenceRow[]
  examples?: Example[]
}

// ─── Syntax Highlighting ─────────────────────────────────────────────────────

function escH(s: string) {
  return s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;')
}
function tc(cls: string, text: string) {
  return `<span class="${cls}">${text}</span>`
}

function highlightTag(tag: string): string {
  let r = ''
  let i = 0
  r += tc('tc-kw', '&lt;')
  i++ // skip <
  if (tag[i] === '/') { r += tc('tc-kw', '/'); i++ }
  // tag name
  const nm = tag.slice(i).match(/^[\w-]+/)
  if (nm) { r += tc('tc-cls', escH(nm[0])); i += nm[0].length }
  // attributes
  while (i < tag.length) {
    const ch = tag[i]
    if (/\s/.test(ch)) { r += ch; i++; continue }
    if (ch === '/' || ch === '>') break
    const an = tag.slice(i).match(/^[\w-]+/)
    if (!an) { r += escH(ch); i++; continue }
    const attrName = an[0]; i += attrName.length
    if (tag[i] === '=') {
      r += tc('tc-prop', escH(attrName)) + tc('tc-kw', '=')
      i++
      if (tag[i] === '"') {
        const ve = tag.indexOf('"', i + 1)
        const val = tag.slice(i + 1, ve)
        // vel- class names get gold highlight, rest is coral string
        const vhl = escH(val).replace(/(vel-[\w:.-]+)/g, (_, c) => tc('tc-fn', c))
        r += tc('tc-kw', '&quot;') + tc('tc-str', vhl) + tc('tc-kw', '&quot;')
        i = ve + 1
      }
    } else {
      r += tc('tc-prop', escH(attrName))
    }
  }
  if (i < tag.length && tag[i] === '/') { r += tc('tc-kw', '/'); i++ }
  if (i < tag.length && tag[i] === '>') r += tc('tc-kw', '&gt;')
  return r
}

function highlightHTML(code: string): string {
  const out: string[] = []
  let i = 0
  while (i < code.length) {
    if (code.startsWith('<!--', i)) {
      const end = code.indexOf('-->', i)
      if (end === -1) { out.push(escH(code.slice(i))); break }
      out.push(tc('tc-comment', escH(code.slice(i, end + 3))))
      i = end + 3
    } else if (code[i] === '<') {
      const end = code.indexOf('>', i)
      if (end === -1) { out.push(escH(code[i])); i++; continue }
      out.push(highlightTag(code.slice(i, end + 1)))
      i = end + 1
    } else {
      const next = code.indexOf('<', i)
      const text = next === -1 ? code.slice(i) : code.slice(i, next)
      out.push(escH(text))
      i = next === -1 ? code.length : next
    }
  }
  return out.join('')
}

function highlightCSS(code: string): string {
  let s = escH(code)
  // block comments
  s = s.replace(/(\/\*[\s\S]*?\*\/)/g, m => tc('tc-comment', m))
  // css functions
  s = s.replace(/\b(oklch|var|clamp|calc|min|max|rgb|hsl|linear-gradient)\b(?=\()/g,
    m => tc('tc-fn', m))
  // property names (--vel-* and regular) at start of line
  s = s.replace(/(^|[\n\r])(\s*)(--?[\w-]+)(\s*:)/g,
    (_, nl, ws, prop, col) => nl + ws + tc('tc-prop', prop) + col)
  // numbers with units
  s = s.replace(/(?<![#\w])(\d+\.?\d*)(px|rem|em|%|deg|ms|s|vh|vw)?\b/g,
    (_, n, u) => tc('tc-num', n + (u ?? '')))
  // hex colors
  s = s.replace(/#([0-9a-fA-F]{3,8})\b/g, m => tc('tc-num', m))
  // quoted strings
  s = s.replace(/'([^']*)'/g, (_, v) => tc('tc-str', `'${v}'`))
  return s
}

function highlightCode(code: string): string {
  return code.trimStart().startsWith('<') ? highlightHTML(code) : highlightCSS(code)
}

// ─── macOS Terminal Code Block ────────────────────────────────────────────────
function Win11Block({ filename, code }: { filename: string; code: string }) {
  const [copied, setCopied] = useState(false)

  const handleCopy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(code)
    } catch {
      const el = document.createElement('textarea')
      el.value = code
      el.style.cssText = 'position:fixed;top:-9999px;left:-9999px;opacity:0'
      document.body.appendChild(el)
      el.focus()
      el.select()
      document.execCommand('copy')
      document.body.removeChild(el)
    }
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }, [code])

  // Terminal colors are intentional macOS aesthetic — not themed
  return (
    <div style={{
      background: '#0C0C0C',
      borderRadius: '0 0 0.625rem 0.625rem',
      overflow: 'hidden',
      border: '1px solid #2a2a2a',
      borderTop: 'none',
    }}>
      {/* macOS title bar */}
      <div style={{
        display: 'flex', alignItems: 'center',
        height: '32px', padding: '0 0.875rem',
        background: '#1C1C1C', borderBottom: '1px solid #2a2a2a',
      }}>
        {/* macOS dots — left */}
        <div style={{ display: 'flex', gap: '6px', alignItems: 'center', flexShrink: 0 }}>
          <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#ff5f57' }} />
          <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#ffbd2e' }} />
          <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#28c840' }} />
        </div>
        {/* filename — center */}
        <span style={{
          flex: 1, textAlign: 'center',
          fontSize: '0.72rem', color: '#777',
          fontFamily: "'Cascadia Code', Consolas, monospace",
        }}>
          {filename}
        </span>
        {/* Copy button — right */}
        <button
          onClick={handleCopy}
          style={{
            fontSize: '0.68rem', fontWeight: 600, padding: '0.15rem 0.625rem',
            height: '22px', cursor: 'pointer', border: 'none', borderRadius: '0.25rem',
            fontFamily: "'Cascadia Code', Consolas, monospace",
            transition: 'all 0.15s', flexShrink: 0,
            background: copied ? 'rgba(14,203,129,0.15)' : 'rgba(255,255,255,0.08)',
            color: copied ? '#0ecb81' : '#666',
          }}
        >
          {copied ? '✓ Copied' : 'Copy'}
        </button>
      </div>
      {/* Code */}
      <pre style={{
        margin: 0, padding: '1rem 1.25rem',
        fontSize: '0.775rem', lineHeight: 1.75,
        color: '#CCCCCC',
        whiteSpace: 'pre-wrap', wordBreak: 'break-all',
        fontFamily: "'Cascadia Code', Consolas, 'Courier New', monospace",
        overflowX: 'auto', maxHeight: '320px', overflowY: 'auto',
        background: '#0C0C0C',
      }}>
        <code dangerouslySetInnerHTML={{ __html: highlightCode(code) }} />
      </pre>
    </div>
  )
}

const docPageStyles = `
  .vdoc-page { max-width: 900px; padding: 2.5rem; font-family: system-ui, -apple-system, sans-serif; color: var(--vel-color-text); }
  .vdoc-breadcrumb { font-size: 0.78rem; color: var(--vel-color-muted); margin-bottom: 1rem; letter-spacing: 0.01em; }
  .vdoc-breadcrumb-sep { color: var(--vel-color-muted); opacity: 0.5; margin: 0 0.3em; }
  .vdoc-breadcrumb-title { color: var(--vel-color-primary); }
  .vdoc-title {
    font-size: 2rem; font-weight: 700; color: var(--vel-color-text);
    margin: 0 0 0.5rem; letter-spacing: -0.02em; line-height: 1.2;
    padding-bottom: 0.6rem; border-bottom: 2px solid transparent; display: inline-block;
    border-image: linear-gradient(90deg, var(--vel-color-primary), var(--vel-color-primary-hover)) 1;
  }
  .vdoc-source-badge {
    display: inline-block; font-family: 'Cascadia Code', Consolas, monospace;
    font-size: 0.72rem; color: var(--vel-color-muted);
    background: var(--vel-surface-1); border: 1px solid var(--vel-border-base);
    border-radius: 99px; padding: 2px 10px; letter-spacing: 0.02em; margin-top: 0.75rem;
  }
  .vdoc-description { color: var(--vel-color-muted); font-size: 1.05rem; line-height: 1.7; margin-top: 1.25rem; margin-bottom: 2.5rem; }
  .vdoc-table-wrap { border: 1px solid var(--vel-border-base); border-radius: 0.75rem; overflow: hidden; }
  .vdoc-table { width: 100%; border-collapse: collapse; font-size: 0.82rem; }
  .vdoc-table thead tr { background: var(--vel-surface-1); }
  .vdoc-table th {
    padding: 0.55rem 1rem; text-align: left;
    font-size: 0.65rem; font-weight: 600; color: var(--vel-color-muted);
    text-transform: uppercase; letter-spacing: 0.08em;
    border-bottom: 1px solid var(--vel-border-base);
  }
  .vdoc-table tbody tr { background: var(--vel-surface-2); transition: background 0.1s; }
  .vdoc-table tbody tr:hover { background: oklch(65% 0.21 var(--vel-dna-hue, 258) / 0.06); }
  .vdoc-table td { padding: 0.55rem 1rem; font-family: 'Cascadia Code', Consolas, monospace; }
  .vdoc-table td:first-child { font-size: 0.8rem; color: var(--vel-color-primary); }
  .vdoc-table td:last-child { font-size: 0.78rem; color: var(--vel-color-muted); }
  .vdoc-table tbody tr:not(:last-child) td { border-bottom: 1px solid var(--vel-border-base); }
  .vdoc-examples-title { font-size: 1.1rem; font-weight: 600; color: var(--vel-color-text); margin-bottom: 1rem; }
  .vdoc-example-label { font-size: 0.8rem; font-weight: 500; color: var(--vel-color-muted); margin-bottom: 0.5rem; }
  .vdoc-preview {
    background: var(--vel-surface-1); border: 1px solid var(--vel-border-base);
    border-radius: 0.5rem 0.5rem 0 0; padding: 1.5rem; border-bottom: none;
  }
  .vdoc-footer { margin-top: 3rem; padding-top: 1.5rem; border-top: 1px solid var(--vel-border-base); }
`

export default function DocPage({ title, description, source, table, examples }: DocPageProps) {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: docPageStyles }} />
      <div className="vdoc-page">

        {/* Breadcrumb */}
        <p className="vdoc-breadcrumb">
          Docs <span className="vdoc-breadcrumb-sep">/</span>{' '}
          <span className="vdoc-breadcrumb-title">{title}</span>
        </p>

        {/* Title */}
        <h1 className="vdoc-title">{title}</h1>

        {/* Source badge */}
        {source && <div><span className="vdoc-source-badge">vel-src: {source}</span></div>}

        {/* Description */}
        <p className="vdoc-description">{description}</p>

        {/* Reference table */}
        {table.length > 0 && (
          <div className="vdoc-table-wrap" style={{ marginBottom: examples && examples.length > 0 ? '2.5rem' : 0 }}>
            <table className="vdoc-table">
              <thead>
                <tr>
                  {['Class', 'Properties'].map(h => <th key={h}>{h}</th>)}
                </tr>
              </thead>
              <tbody>
                {table.map((row, i) => (
                  <tr key={i}>
                    <td>{row.class}</td>
                    <td>{row.properties}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* Examples */}
        {examples && examples.length > 0 && (
          <div>
            <h2 className="vdoc-examples-title">Examples</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
              {examples.map((example, i) => (
                <div key={i}>
                  <p className="vdoc-example-label">{example.label}</p>
                  <div className="vdoc-preview" dangerouslySetInnerHTML={{ __html: example.html }} />
                  <Win11Block filename="example.html" code={example.html} />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Footer spacer */}
        <div className="vdoc-footer" />

      </div>
    </>
  )
}
