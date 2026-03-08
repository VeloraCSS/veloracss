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

// ─── Win11 Terminal Code Block ────────────────────────────────────────────────
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

  return (
    <div style={{
      background: '#0C0C0C',
      borderRadius: '0 0 0.625rem 0.625rem',
      overflow: 'hidden',
      border: '1px solid #2a2a2a',
      borderTop: 'none',
    }}>
      {/* Win11 title bar */}
      <div style={{
        display: 'flex', alignItems: 'center',
        height: '32px', padding: '0 0 0 0.875rem',
        background: '#1C1C1C', borderBottom: '1px solid #2a2a2a',
      }}>
        <span style={{
          fontSize: '0.72rem', color: '#777', flex: 1,
          fontFamily: "'Cascadia Code', Consolas, monospace",
        }}>
          {filename}
        </span>
        {/* Copy button */}
        <button
          onClick={handleCopy}
          style={{
            fontSize: '0.68rem', fontWeight: 600, padding: '0 0.75rem',
            height: '32px', cursor: 'pointer', border: 'none',
            fontFamily: "'Cascadia Code', Consolas, monospace",
            transition: 'all 0.15s',
            background: copied ? 'rgba(14,203,129,0.15)' : 'transparent',
            color: copied ? '#0ecb81' : '#666',
            borderLeft: '1px solid #2a2a2a',
          }}
        >
          {copied ? '✓ Copied' : 'Copy'}
        </button>
        {/* Win11 window controls — right side */}
        <div style={{ display: 'flex', alignItems: 'center', height: '32px' }}>
          <button style={{ width: 46, height: 32, background: 'transparent', border: 'none', color: '#888', fontSize: '0.75rem', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>─</button>
          <button style={{ width: 46, height: 32, background: 'transparent', border: 'none', color: '#888', fontSize: '0.75rem', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>□</button>
          <button style={{ width: 46, height: 32, background: 'transparent', border: 'none', color: '#888', fontSize: '0.75rem', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>✕</button>
        </div>
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

export default function DocPage({ title, description, source, table, examples }: DocPageProps) {
  return (
    <div style={{
      maxWidth: '900px', padding: '2.5rem',
      fontFamily: 'system-ui, -apple-system, sans-serif',
      color: '#e2e8f0',
    }}>

      {/* Breadcrumb */}
      <p style={{ fontSize: '0.78rem', color: '#94a3b8', marginBottom: '1rem', letterSpacing: '0.01em' }}>
        Docs <span style={{ color: '#64748b' }}>/</span>{' '}
        <span style={{ color: '#c4b5fd' }}>{title}</span>
      </p>

      {/* Title */}
      <h1 style={{
        fontSize: '2rem', fontWeight: 700, color: '#ffffff',
        margin: '0 0 0.5rem', letterSpacing: '-0.02em', lineHeight: 1.2,
        paddingBottom: '0.6rem', borderBottom: '2px solid transparent',
        borderImage: 'linear-gradient(90deg, #7c5cfc, #a87fff) 1',
        display: 'inline-block',
      }}>
        {title}
      </h1>

      {/* Source badge */}
      {source && (
        <div style={{ marginTop: '0.75rem' }}>
          <span style={{
            display: 'inline-block',
            fontFamily: "'Cascadia Code', Consolas, monospace",
            fontSize: '0.72rem', color: '#64748b',
            background: '#0d1422', border: '1px solid #1e2d45',
            borderRadius: '99px', padding: '2px 10px', letterSpacing: '0.02em',
          }}>
            vel-src: {source}
          </span>
        </div>
      )}

      {/* Description */}
      <p style={{
        color: '#94a3b8', fontSize: '1.05rem', lineHeight: 1.7,
        marginTop: '1.25rem', marginBottom: '2.5rem',
      }}>
        {description}
      </p>

      {/* Reference table */}
      {table.length > 0 && (
        <div style={{
          border: '1px solid #1e2d45', borderRadius: '0.75rem', overflow: 'hidden',
          marginBottom: examples && examples.length > 0 ? '2.5rem' : 0,
        }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.82rem' }}>
            <thead>
              <tr style={{ background: '#0d1422' }}>
                {['Class', 'Properties'].map(h => (
                  <th key={h} style={{
                    padding: '0.55rem 1rem', textAlign: 'left',
                    fontSize: '0.65rem', fontWeight: 600, color: '#94a3b8',
                    textTransform: 'uppercase', letterSpacing: '0.08em',
                    borderBottom: '1px solid #1e2d45',
                  }}>
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {table.map((row, i) => (
                <tr
                  key={i}
                  style={{
                    background: '#111827',
                    borderBottom: i < table.length - 1 ? '1px solid #1a2438' : 'none',
                    transition: 'background 0.1s',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.background = 'rgba(124,92,252,0.06)' }}
                  onMouseLeave={e => { e.currentTarget.style.background = '#111827' }}
                >
                  <td style={{
                    padding: '0.55rem 1rem',
                    fontFamily: "'Cascadia Code', Consolas, monospace",
                    fontSize: '0.8rem', color: '#a87fff',
                  }}>
                    {row.class}
                  </td>
                  <td style={{
                    padding: '0.55rem 1rem',
                    fontFamily: "'Cascadia Code', Consolas, monospace",
                    fontSize: '0.78rem', color: '#94a3b8',
                  }}>
                    {row.properties}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Examples */}
      {examples && examples.length > 0 && (
        <div>
          <h2 style={{ fontSize: '1.1rem', fontWeight: 600, color: '#e2e8f0', marginBottom: '1rem' }}>
            Examples
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
            {examples.map((example, i) => (
              <div key={i}>
                <p style={{ fontSize: '0.8rem', fontWeight: 500, color: '#94a3b8', marginBottom: '0.5rem' }}>
                  {example.label}
                </p>
                {/* Live preview */}
                <div style={{
                  background: '#0d1422', border: '1px solid #1e2d45',
                  borderRadius: '0.5rem 0.5rem 0 0',
                  padding: '1.5rem', borderBottom: 'none',
                }}
                  dangerouslySetInnerHTML={{ __html: example.html }}
                />
                {/* Win11 Terminal code block */}
                <Win11Block filename="example.html" code={example.html} />
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Footer spacer */}
      <div style={{ marginTop: '3rem', paddingTop: '1.5rem', borderTop: '1px solid #1e2d45' }} />

    </div>
  )
}
