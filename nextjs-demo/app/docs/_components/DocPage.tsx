'use client'

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

export default function DocPage({ title, description, source, table, examples }: DocPageProps) {
  return (
    <div
      style={{
        maxWidth: '900px',
        padding: '2.5rem',
        fontFamily: 'system-ui, -apple-system, sans-serif',
        color: '#e2e8f0',
      }}
    >
      {/* Breadcrumb */}
      <p
        style={{
          fontSize: '0.78rem',
          color: '#94a3b8',
          marginBottom: '1rem',
          letterSpacing: '0.01em',
        }}
      >
        Docs{' '}
        <span style={{ color: '#64748b' }}>/</span>{' '}
        <span style={{ color: '#c4b5fd' }}>{title}</span>
      </p>

      {/* Title */}
      <h1
        style={{
          fontSize: '2rem',
          fontWeight: 700,
          color: '#ffffff',
          margin: '0 0 0.5rem',
          letterSpacing: '-0.02em',
          lineHeight: 1.2,
          paddingBottom: '0.6rem',
          borderBottom: '2px solid transparent',
          borderImage: 'var(--vel-gradient-primary, linear-gradient(90deg, #7c5cfc, #a87fff)) 1',
          display: 'inline-block',
        }}
      >
        {title}
      </h1>

      {/* Source badge */}
      {source && (
        <div style={{ marginTop: '0.75rem' }}>
          <span
            style={{
              display: 'inline-block',
              fontFamily: "'Fira Code', 'Cascadia Code', Consolas, monospace",
              fontSize: '0.72rem',
              color: '#64748b',
              background: '#0d1422',
              border: '1px solid #1e2d45',
              borderRadius: '99px',
              padding: '2px 10px',
              letterSpacing: '0.02em',
            }}
          >
            vel-src: {source}
          </span>
        </div>
      )}

      {/* Description */}
      <p
        style={{
          color: '#94a3b8',
          fontSize: '1.05rem',
          lineHeight: 1.7,
          marginTop: '1.25rem',
          marginBottom: '2.5rem',
        }}
      >
        {description}
      </p>

      {/* Reference table */}
      {table.length > 0 && (
        <div
          style={{
            border: '1px solid #1e2d45',
            borderRadius: '0.75rem',
            overflow: 'hidden',
            marginBottom: examples && examples.length > 0 ? '2.5rem' : 0,
          }}
        >
          <table
            style={{
              width: '100%',
              borderCollapse: 'collapse',
              fontSize: '0.82rem',
            }}
          >
            <thead>
              <tr style={{ background: '#0d1422' }}>
                <th
                  style={{
                    padding: '0.55rem 1rem',
                    textAlign: 'left',
                    fontSize: '0.65rem',
                    fontWeight: 600,
                    color: '#94a3b8',
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                    borderBottom: '1px solid #1e2d45',
                  }}
                >
                  Class
                </th>
                <th
                  style={{
                    padding: '0.55rem 1rem',
                    textAlign: 'left',
                    fontSize: '0.65rem',
                    fontWeight: 600,
                    color: '#94a3b8',
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                    borderBottom: '1px solid #1e2d45',
                  }}
                >
                  Properties
                </th>
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
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'rgba(124, 92, 252, 0.06)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = '#111827'
                  }}
                >
                  <td
                    style={{
                      padding: '0.55rem 1rem',
                      fontFamily: "'Fira Code', 'Cascadia Code', Consolas, monospace",
                      fontSize: '0.8rem',
                      color: '#a87fff',
                    }}
                  >
                    {row.class}
                  </td>
                  <td
                    style={{
                      padding: '0.55rem 1rem',
                      fontFamily: "'Fira Code', 'Cascadia Code', Consolas, monospace",
                      fontSize: '0.78rem',
                      color: '#94a3b8',
                    }}
                  >
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
          <h2
            style={{
              fontSize: '1.1rem',
              fontWeight: 600,
              color: '#e2e8f0',
              marginBottom: '1rem',
            }}
          >
            Examples
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
            {examples.map((example, i) => (
              <div key={i}>
                <p
                  style={{
                    fontSize: '0.8rem',
                    fontWeight: 500,
                    color: '#94a3b8',
                    marginBottom: '0.5rem',
                  }}
                >
                  {example.label}
                </p>
                {/* Live rendered preview */}
                <div
                  style={{
                    background: '#0d1422',
                    border: '1px solid #1e2d45',
                    borderRadius: '0.5rem 0.5rem 0 0',
                    padding: '1.5rem',
                    borderBottom: 'none',
                  }}
                  dangerouslySetInnerHTML={{ __html: example.html }}
                />
                {/* Code block */}
                <div
                  style={{
                    background: '#060b17',
                    border: '1px solid #1e2d45',
                    borderRadius: '0 0 0.5rem 0.5rem',
                    overflow: 'hidden',
                  }}
                >
                  <div
                    style={{
                      padding: '0.35rem 1rem',
                      background: '#0a0f1a',
                      borderBottom: '1px solid #1e2d45',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                    }}
                  >
                    <span
                      style={{
                        fontSize: '0.6rem',
                        fontWeight: 600,
                        color: '#64748b',
                        letterSpacing: '0.08em',
                        textTransform: 'uppercase' as const,
                      }}
                    >
                      HTML
                    </span>
                  </div>
                  <pre
                    style={{
                      margin: 0,
                      padding: '1rem',
                      fontSize: '0.78rem',
                      lineHeight: 1.7,
                      color: '#94a3b8',
                      whiteSpace: 'pre-wrap',
                      wordBreak: 'break-all',
                      fontFamily: "'Fira Code', 'Cascadia Code', Consolas, monospace",
                      overflowX: 'auto',
                      maxHeight: '320px',
                      overflowY: 'auto',
                    }}
                  >
                    <code>{example.html}</code>
                  </pre>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Edit on GitHub */}
      <div style={{ marginTop: '3rem', paddingTop: '1.5rem', borderTop: '1px solid #1e2d45' }}>
        <a
          href="https://github.com/VeloraX/veloracss"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            fontSize: '0.8rem',
            color: '#64748b',
            textDecoration: 'none',
            transition: 'color 0.12s',
          }}
          onMouseEnter={(e) => { e.currentTarget.style.color = '#94a3b8' }}
          onMouseLeave={(e) => { e.currentTarget.style.color = '#64748b' }}
        >
          Edit on GitHub →
        </a>
      </div>
    </div>
  )
}
