import Link from 'next/link'

export default function GettingStartedPage() {
  return (
    <main style={{ padding: '2.5rem', maxWidth: '860px', fontFamily: 'system-ui, -apple-system, sans-serif', color: '#e2e8f0' }}>

      {/* Breadcrumb */}
      <p style={{ fontSize: '0.78rem', color: '#64748b', marginBottom: '1rem' }}>
        Docs <span style={{ color: '#475569' }}>/</span>{' '}
        <span style={{ color: '#94a3b8' }}>Getting Started</span>
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
          borderImage: 'linear-gradient(90deg, #7c5cfc, #a87fff) 1',
          display: 'inline-block',
        }}
      >
        Getting Started
      </h1>

      <p
        style={{
          fontSize: '1.1rem',
          color: '#94a3b8',
          lineHeight: 1.7,
          marginTop: '1rem',
          marginBottom: '2.5rem',
        }}
      >
        Add VeloraCSS to your project in seconds and start building with{' '}
        <code style={{ fontFamily: 'Consolas, monospace', fontSize: '0.95rem', color: '#a87fff', background: 'rgba(124,92,252,0.1)', padding: '1px 6px', borderRadius: '4px' }}>vel-</code>
        {' '}utility classes.
      </p>

      {/* GitHub CDN */}
      <section style={{ marginBottom: '2.5rem' }}>
        <h2 style={{ fontSize: '1.2rem', fontWeight: 600, color: '#e2e8f0', marginBottom: '0.5rem' }}>
          Via GitHub (direct link)
        </h2>
        <p style={{ color: '#94a3b8', fontSize: '0.9rem', lineHeight: 1.7, marginBottom: '1rem' }}>
          The quickest way to use VeloraCSS is to link the built CSS directly from the GitHub release. Drop this into your{' '}
          <code style={{ fontFamily: 'Consolas, monospace', fontSize: '0.85rem', color: '#a87fff', background: 'rgba(124,92,252,0.1)', padding: '1px 5px', borderRadius: '4px' }}>&lt;head&gt;</code>:
        </p>
        <CodeBox lang="HTML" code={`<link rel="stylesheet" href="https://raw.githubusercontent.com/VeloraX/veloracss/main/dist/velora.min.css">`} />
        <p style={{ color: '#64748b', fontSize: '0.82rem', marginTop: '0.75rem', lineHeight: 1.6 }}>
          Or download <code style={{ color: '#a87fff' }}>velora.css</code> / <code style={{ color: '#a87fff' }}>velora.min.css</code> from the{' '}
          <a href="https://github.com/VeloraX/veloracss/tree/main/dist" target="_blank" rel="noopener noreferrer" style={{ color: '#a87fff' }}>dist/ folder on GitHub</a>.
        </p>
      </section>

      {/* Build from source */}
      <section style={{ marginBottom: '2.5rem' }}>
        <h2 style={{ fontSize: '1.2rem', fontWeight: 600, color: '#e2e8f0', marginBottom: '0.5rem' }}>
          Build from source
        </h2>
        <p style={{ color: '#94a3b8', fontSize: '0.9rem', lineHeight: 1.7, marginBottom: '1rem' }}>
          Clone the repo and build locally for full customization:
        </p>
        <CodeBox lang="Terminal" code={`git clone https://github.com/VeloraX/veloracss.git
cd veloracss
npm install
npm run build
# → dist/velora.css and dist/velora.min.css`} />
      </section>

      {/* npm — coming soon */}
      <section style={{ marginBottom: '2.5rem' }}>
        <h2 style={{ fontSize: '1.2rem', fontWeight: 600, color: '#e2e8f0', marginBottom: '0.5rem' }}>
          npm{' '}
          <span style={{ fontSize: '0.65rem', fontWeight: 600, color: '#ff9d00', background: 'rgba(255,157,0,0.12)', border: '1px solid rgba(255,157,0,0.3)', padding: '2px 8px', borderRadius: '99px', verticalAlign: 'middle', letterSpacing: '0.04em' }}>
            COMING SOON
          </span>
        </h2>
        <p style={{ color: '#94a3b8', fontSize: '0.9rem', lineHeight: 1.7, marginBottom: '1rem' }}>
          npm packaging is on the roadmap (Phase 7). Once published you&apos;ll be able to install with:
        </p>
        <CodeBox lang="Terminal" code={`# Not yet available — coming in Phase 7
npm install veloracss`} />
      </section>

      {/* First component */}
      <section style={{ marginBottom: '2.5rem' }}>
        <h2 style={{ fontSize: '1.2rem', fontWeight: 600, color: '#e2e8f0', marginBottom: '0.5rem' }}>
          Your first component
        </h2>
        <p style={{ color: '#94a3b8', fontSize: '0.9rem', lineHeight: 1.7, marginBottom: '1rem' }}>
          Once VeloraCSS is loaded, compose components using{' '}
          <code style={{ fontFamily: 'Consolas, monospace', fontSize: '0.85rem', color: '#a87fff', background: 'rgba(124,92,252,0.1)', padding: '1px 5px', borderRadius: '4px' }}>vel-</code>{' '}
          utility classes. Here&apos;s a card with a button:
        </p>
        <CodeBox lang="HTML" code={`<div class="vel-card vel-p-6 vel-max-w-sm">
  <h2 class="vel-text-xl vel-font-semibold vel-mb-2">Hello, VeloraCSS</h2>
  <p class="vel-text-sm vel-text-neutral-500 vel-mb-4">
    Utility-first styling, ready out of the box.
  </p>
  <button class="vel-btn vel-btn-primary">Get started</button>
</div>`} />
      </section>

      {/* Design tokens */}
      <section style={{ marginBottom: '2.5rem' }}>
        <h2 style={{ fontSize: '1.2rem', fontWeight: 600, color: '#e2e8f0', marginBottom: '0.5rem' }}>
          Design tokens
        </h2>
        <p style={{ color: '#94a3b8', fontSize: '0.9rem', lineHeight: 1.7, marginBottom: '1rem' }}>
          VeloraCSS exposes its entire design system via CSS custom properties under the{' '}
          <code style={{ fontFamily: 'Consolas, monospace', fontSize: '0.85rem', color: '#a87fff', background: 'rgba(124,92,252,0.1)', padding: '1px 5px', borderRadius: '4px' }}>--vel-</code>{' '}
          namespace. Override any token at <code style={{ color: '#a87fff', background: 'rgba(124,92,252,0.1)', padding: '1px 5px', borderRadius: '4px', fontSize: '0.85rem' }}>:root</code> to customize the framework.
        </p>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
            gap: '0.75rem',
            marginBottom: '1.25rem',
          }}
        >
          {[
            { token: '--vel-primary-500', description: 'Brand violet', value: '#7c5cfc' },
            { token: '--vel-success-500', description: 'Success emerald', value: '#0ecb81' },
            { token: '--vel-danger-500', description: 'Danger rose', value: '#f0416c' },
            { token: '--vel-warning-500', description: 'Warning amber', value: '#ff9d00' },
            { token: '--vel-space-4', description: '1rem spacing unit', value: '1rem' },
            { token: '--vel-radius-lg', description: 'Large border radius', value: '0.5rem' },
          ].map(({ token, description, value }) => (
            <div
              key={token}
              style={{
                background: '#0d1422',
                border: '1px solid #1e2d45',
                borderRadius: '0.5rem',
                padding: '0.75rem',
              }}
            >
              <code
                style={{
                  fontFamily: "'Fira Code', Consolas, monospace",
                  fontSize: '0.72rem',
                  color: '#a87fff',
                  display: 'block',
                  marginBottom: '0.25rem',
                  wordBreak: 'break-all',
                }}
              >
                {token}
              </code>
              <span style={{ fontSize: '0.75rem', color: '#94a3b8' }}>{description}</span>
              <span
                style={{
                  display: 'block',
                  fontSize: '0.7rem',
                  color: '#64748b',
                  fontFamily: 'Consolas, monospace',
                  marginTop: '0.2rem',
                }}
              >
                {value}
              </span>
            </div>
          ))}
        </div>

        <CodeBox lang="CSS" code={`:root {
  --vel-primary-500: #7c5cfc;  /* override brand color */
  --vel-radius-lg: 0.75rem;    /* override radius */
  --vel-font-sans: 'Inter', system-ui, sans-serif;
}`} />
      </section>

      {/* Next steps */}
      <section style={{ marginBottom: '1rem' }}>
        <h2 style={{ fontSize: '1.2rem', fontWeight: 600, color: '#e2e8f0', marginBottom: '0.5rem' }}>
          Next steps
        </h2>
        <p style={{ color: '#94a3b8', fontSize: '0.9rem', lineHeight: 1.7, marginBottom: '1rem' }}>
          Explore the full reference in the sidebar. Start with utilities, then dive into the components.
        </p>
        <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' as const }}>
          {[
            { label: 'Buttons', slug: 'buttons' },
            { label: 'Cards', slug: 'cards' },
            { label: 'Layout — Display', slug: 'display' },
            { label: 'Typography — Font Size', slug: 'font-size' },
          ].map(({ label, slug }) => (
            <Link
              key={slug}
              href={`/docs/${slug}`}
              style={{
                fontSize: '0.8rem',
                fontWeight: 500,
                padding: '0.4rem 1rem',
                borderRadius: '0.375rem',
                background: 'rgba(124, 92, 252, 0.1)',
                color: '#a87fff',
                border: '1px solid rgba(124, 92, 252, 0.25)',
                textDecoration: 'none',
              }}
            >
              {label} →
            </Link>
          ))}
        </div>
      </section>

      {/* Edit on GitHub */}
      <div style={{ marginTop: '3rem', paddingTop: '1.5rem', borderTop: '1px solid #1e2d45' }}>
        <a
          href="https://github.com/VeloraX/veloracss"
          target="_blank"
          rel="noopener noreferrer"
          style={{ fontSize: '0.8rem', color: '#64748b', textDecoration: 'none' }}
        >
          Edit on GitHub →
        </a>
      </div>

    </main>
  )
}

function CodeBox({ lang, code }: { lang: string; code: string }) {
  return (
    <div
      style={{
        background: '#060b17',
        border: '1px solid #1e2d45',
        borderRadius: '0.625rem',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          padding: '0.5rem 1rem',
          background: '#0d1422',
          borderBottom: '1px solid #1e2d45',
        }}
      >
        <span
          style={{
            fontSize: '0.65rem',
            fontWeight: 600,
            color: '#64748b',
            letterSpacing: '0.08em',
            textTransform: 'uppercase' as const,
          }}
        >
          {lang}
        </span>
      </div>
      <pre
        style={{
          margin: 0,
          padding: '1rem',
          fontSize: '0.78rem',
          lineHeight: 1.8,
          color: '#94a3b8',
          whiteSpace: 'pre-wrap',
          wordBreak: 'break-all',
          fontFamily: "'Fira Code', 'Cascadia Code', Consolas, monospace",
          overflowX: 'auto',
        }}
      >
        <code>{code}</code>
      </pre>
    </div>
  )
}
