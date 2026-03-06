export default function Home() {
  const colors = ['primary', 'secondary', 'success', 'danger', 'warning', 'info']
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
        <section className="vel-mb-10">
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
        </section>

        {/* Cards */}
        <section className="vel-mb-10">
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
        </section>

        {/* Colors */}
        <section className="vel-mb-10">
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
        </section>

        {/* Typography */}
        <section className="vel-mb-10">
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
        </section>

        {/* Footer */}
        <footer className="vel-text-center vel-text-neutral-400 vel-text-sm vel-py-8 vel-border-t vel-border-neutral-200">
          VeloraCSS v0.1.0 — Next.js Demo
        </footer>

      </div>
    </main>
  )
}
