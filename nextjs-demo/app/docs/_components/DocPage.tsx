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

// ─── macOS Terminal Code Block ────────────────────────────────────────────────
function MacBlock({ filename, code }: { filename: string; code: string }) {
  const [copied, setCopied] = useState(false)

  const handleCopy = useCallback(() => {
    const el = document.createElement('textarea')
    el.value = code
    el.style.cssText = 'position:fixed;top:-9999px;left:-9999px;opacity:0'
    document.body.appendChild(el)
    el.focus()
    el.select()
    document.execCommand('copy')
    document.body.removeChild(el)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }, [code])

  return (
    <div style={{
      background: '#1a1a1a',
      borderRadius: '0 0 0.625rem 0.625rem',
      overflow: 'hidden',
      border: '1px solid #333',
      borderTop: 'none',
    }}>
      {/* macOS title bar */}
      <div style={{
        display: 'flex', alignItems: 'center',
        height: '36px', padding: '0 0.875rem',
        background: '#252525', borderBottom: '1px solid #333',
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
        {/* Copy button */}
        <button
          onClick={handleCopy}
          style={{
            fontSize: '0.68rem', fontWeight: 600, padding: '0.2rem 0.625rem',
            borderRadius: '0.25rem', cursor: 'pointer', border: 'none',
            fontFamily: "'Cascadia Code', Consolas, monospace",
            transition: 'all 0.15s',
            background: copied ? 'rgba(14,203,129,0.15)' : '#333',
            color: copied ? '#0ecb81' : '#888',
            flexShrink: 0,
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
        fontFamily: "'Cascadia Code', Menlo, Monaco, 'Courier New', monospace",
        overflowX: 'auto', maxHeight: '320px', overflowY: 'auto',
      }}>
        <code>{code}</code>
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
                {/* macOS Terminal code block */}
                <MacBlock filename="example.html" code={example.html} />
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
