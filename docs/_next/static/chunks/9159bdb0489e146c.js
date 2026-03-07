(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,49308,e=>{"use strict";var l=e.i(92944),s=e.i(34726);let t="https://velorax.github.io/veloracss/playground",a="/veloracss/docs",i="#060b17",v="#111827",n="#1e2d45",d="#e2e8f0",r="#64748b",c="#7c5cfc",o="#c4b5fd";function x({code:e}){let a,[d,c]=(0,s.useState)(!1),x=(0,s.useCallback)(()=>{navigator.clipboard.writeText(e),c(!0),setTimeout(()=>c(!1),2e3)},[e]);return(0,l.jsxs)("div",{style:{border:`1px solid ${n}`,borderRadius:"12px",overflow:"hidden",marginTop:"12px"},children:[(0,l.jsxs)("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"8px 16px",background:"#0d1422",borderBottom:`1px solid ${n}`},children:[(0,l.jsx)("span",{style:{fontSize:"11px",fontWeight:500,color:r,letterSpacing:"0.05em",textTransform:"uppercase"},children:"HTML"}),(0,l.jsxs)("div",{style:{display:"flex",gap:"8px"},children:[(0,l.jsx)("button",{onClick:x,style:{fontSize:"11px",fontWeight:500,padding:"4px 10px",borderRadius:"6px",cursor:"pointer",background:d?"#0ecb8120":v,color:d?"#0ecb81":"#94a3b8",border:`1px solid ${d?"#0ecb8140":n}`,transition:"all .15s"},children:d?"✓ Copied":"Copy"}),(0,l.jsx)("a",{href:(a=btoa(new TextEncoder().encode(e).reduce((e,l)=>e+String.fromCharCode(l),"")),`${t}/#code=${a}`),target:"_blank",rel:"noopener noreferrer",style:{fontSize:"11px",fontWeight:500,padding:"4px 10px",borderRadius:"6px",background:"#7c5cfc20",color:o,border:"1px solid #7c5cfc40",textDecoration:"none",transition:"all .15s"},children:"Try in Playground →"})]})]}),(0,l.jsx)("pre",{style:{margin:0,padding:"16px",background:i,color:"#94a3b8",fontSize:"12px",lineHeight:"1.7",whiteSpace:"pre-wrap",wordBreak:"break-all",maxHeight:"280px",overflowY:"auto",fontFamily:"'Fira Code', 'Cascadia Code', Consolas, monospace"},children:(0,l.jsx)("code",{children:e})})]})}function b({children:e}){return(0,l.jsx)("p",{style:{fontSize:"11px",fontWeight:600,color:r,letterSpacing:"0.08em",textTransform:"uppercase",marginBottom:"16px"},children:e})}function p({children:e}){return(0,l.jsx)("div",{style:{background:v,borderRadius:"12px",padding:"28px",border:`1px solid ${n}`},children:e})}let m=`<div style="min-height:100vh;background:#060b17;padding:40px;font-family:system-ui,sans-serif">
  <div style="max-width:720px;margin:0 auto">

    <h1 class="vel-text-3xl vel-font-bold vel-mb-8 vel-tracking-tight" style="color:#f1f5f9">Buttons</h1>

    <section class="vel-mb-8">
      <h2 class="vel-text-xs vel-font-semibold vel-uppercase vel-tracking-widest vel-mb-4" style="color:#64748b">Solid</h2>
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
      <h2 class="vel-text-xs vel-font-semibold vel-uppercase vel-tracking-widest vel-mb-4" style="color:#64748b">Outline &amp; Ghost</h2>
      <div class="vel-flex vel-flex-wrap vel-gap-3">
        <button class="vel-btn vel-btn-outline-primary">Outline</button>
        <button class="vel-btn vel-btn-ghost">Ghost</button>
        <button class="vel-btn vel-btn-link">Link</button>
        <button class="vel-btn vel-btn-primary" disabled>Disabled</button>
      </div>
    </section>

    <section>
      <h2 class="vel-text-xs vel-font-semibold vel-uppercase vel-tracking-widest vel-mb-4" style="color:#64748b">Sizes</h2>
      <div class="vel-flex vel-flex-wrap vel-items-center vel-gap-3">
        <button class="vel-btn vel-btn-primary vel-btn-xs">XSmall</button>
        <button class="vel-btn vel-btn-primary vel-btn-sm">Small</button>
        <button class="vel-btn vel-btn-primary">Default</button>
        <button class="vel-btn vel-btn-primary vel-btn-lg">Large</button>
        <button class="vel-btn vel-btn-primary vel-btn-xl">XLarge</button>
      </div>
    </section>

  </div>
</div>`,g=`<div style="min-height:100vh;background:#060b17;padding:40px;font-family:system-ui,sans-serif">
  <div style="max-width:900px;margin:0 auto">

    <h1 class="vel-text-3xl vel-font-bold vel-mb-8 vel-tracking-tight" style="color:#f1f5f9">Cards</h1>

    <div class="vel-grid vel-grid-cols-3 vel-gap-6 vel-mb-6">
      <div class="vel-card vel-card-hover">
        <div class="vel-card-header">Hover Card</div>
        <div class="vel-card-body">
          <p class="vel-text-neutral-500 vel-text-sm vel-mb-4">Shadow lifts on hover.</p>
          <button class="vel-btn vel-btn-primary vel-btn-sm">Action</button>
        </div>
      </div>
      <div class="vel-card vel-card-glass">
        <div class="vel-card-header">Glass</div>
        <div class="vel-card-body">
          <p class="vel-text-neutral-500 vel-text-sm vel-mb-4">Glassmorphism variant.</p>
          <button class="vel-btn vel-btn-outline-primary vel-btn-sm">Action</button>
        </div>
      </div>
      <div class="vel-card vel-card-primary">
        <div class="vel-card-body">
          <h3 class="vel-text-base vel-font-semibold vel-mb-2" style="color:#fff">Primary Card</h3>
          <p class="vel-text-sm" style="color:rgba(255,255,255,.75)">Brand-colored card.</p>
        </div>
      </div>
    </div>

    <div class="vel-grid vel-grid-cols-2 vel-gap-6">
      <div class="vel-card vel-card-elevated">
        <div class="vel-card-header">Elevated</div>
        <div class="vel-card-body">
          <p class="vel-text-neutral-500 vel-text-sm">Large shadow for depth and prominence.</p>
        </div>
      </div>
      <div class="vel-card vel-card-success">
        <div class="vel-card-body">
          <h3 class="vel-text-base vel-font-semibold vel-mb-2" style="color:#fff">Success Card</h3>
          <p class="vel-text-sm" style="color:rgba(255,255,255,.75)">Emerald brand tint.</p>
        </div>
      </div>
    </div>

  </div>
</div>`,h=`<div style="min-height:100vh;background:#060b17;padding:40px;font-family:system-ui,sans-serif">
  <div style="max-width:720px;margin:0 auto">

    <h1 class="vel-text-3xl vel-font-bold vel-mb-8 vel-tracking-tight" style="color:#f1f5f9">Badges &amp; Alerts</h1>

    <section class="vel-mb-8">
      <h2 class="vel-text-xs vel-font-semibold vel-uppercase vel-tracking-widest vel-mb-4" style="color:#64748b">Badges</h2>
      <div class="vel-flex vel-flex-wrap vel-gap-3">
        <span class="vel-badge vel-badge-primary">Primary</span>
        <span class="vel-badge vel-badge-success">Success</span>
        <span class="vel-badge vel-badge-danger">Danger</span>
        <span class="vel-badge vel-badge-warning">Warning</span>
        <span class="vel-badge vel-badge-info">Info</span>
        <span class="vel-badge vel-badge-secondary">Secondary</span>
      </div>
    </section>

    <section>
      <h2 class="vel-text-xs vel-font-semibold vel-uppercase vel-tracking-widest vel-mb-4" style="color:#64748b">Alerts</h2>
      <div class="vel-flex vel-flex-col vel-gap-3">
        <div class="vel-alert vel-alert-info">Info — Something worth knowing about.</div>
        <div class="vel-alert vel-alert-success">Success — Your changes have been saved.</div>
        <div class="vel-alert vel-alert-warning">Warning — Review before continuing.</div>
        <div class="vel-alert vel-alert-danger">Danger — This action cannot be undone.</div>
      </div>
    </section>

  </div>
</div>`,f=`<div style="min-height:100vh;background:#060b17;padding:40px;font-family:system-ui,sans-serif">
  <div style="max-width:720px;margin:0 auto">

    <h1 class="vel-text-3xl vel-font-bold vel-mb-8 vel-tracking-tight" style="color:#f1f5f9">Gradients &amp; Glows</h1>

    <section class="vel-mb-8">
      <h2 class="vel-text-xs vel-font-semibold vel-uppercase vel-tracking-widest vel-mb-4" style="color:#64748b">Gradient backgrounds</h2>
      <div class="vel-grid vel-grid-cols-3 vel-gap-4">
        <div class="vel-bg-gradient-primary vel-p-6 vel-rounded-xl vel-text-center vel-font-semibold" style="color:#fff">primary</div>
        <div class="vel-bg-gradient-aurora vel-p-6 vel-rounded-xl vel-text-center vel-font-semibold" style="color:#fff">aurora</div>
        <div class="vel-bg-gradient-ocean vel-p-6 vel-rounded-xl vel-text-center vel-font-semibold" style="color:#fff">ocean</div>
        <div class="vel-bg-gradient-success vel-p-6 vel-rounded-xl vel-text-center vel-font-semibold" style="color:#fff">success</div>
        <div class="vel-bg-gradient-danger vel-p-6 vel-rounded-xl vel-text-center vel-font-semibold" style="color:#fff">danger</div>
        <div class="vel-bg-gradient-sunset vel-p-6 vel-rounded-xl vel-text-center vel-font-semibold" style="color:#fff">sunset</div>
      </div>
    </section>

    <section>
      <h2 class="vel-text-xs vel-font-semibold vel-uppercase vel-tracking-widest vel-mb-4" style="color:#64748b">Glow buttons</h2>
      <div class="vel-flex vel-flex-wrap vel-gap-4">
        <button class="vel-btn vel-btn-primary vel-btn-glow-primary">Glow Primary</button>
        <button class="vel-btn vel-btn-success vel-btn-glow-success">Glow Success</button>
        <button class="vel-btn vel-btn-danger vel-btn-glow-danger">Glow Danger</button>
      </div>
    </section>

  </div>
</div>`,u=`<div style="min-height:100vh;background:#060b17;padding:40px;font-family:system-ui,sans-serif">
  <div style="max-width:800px;margin:0 auto">

    <h1 class="vel-text-3xl vel-font-bold vel-mb-8 vel-tracking-tight" style="color:#f1f5f9">Colors</h1>

    <section class="vel-mb-8">
      <h2 class="vel-text-xs vel-font-semibold vel-uppercase vel-tracking-widest vel-mb-4" style="color:#64748b">Semantic</h2>
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
      <h2 class="vel-text-xs vel-font-semibold vel-uppercase vel-tracking-widest vel-mb-4" style="color:#64748b">Light variants</h2>
      <div class="vel-grid vel-grid-cols-5 vel-gap-3">
        <div class="vel-bg-primary-light vel-text-primary vel-p-4 vel-rounded-xl vel-text-center vel-text-sm vel-font-medium">primary</div>
        <div class="vel-bg-success-light vel-text-success vel-p-4 vel-rounded-xl vel-text-center vel-text-sm vel-font-medium">success</div>
        <div class="vel-bg-danger-light vel-text-danger vel-p-4 vel-rounded-xl vel-text-center vel-text-sm vel-font-medium">danger</div>
        <div class="vel-bg-warning-light vel-text-neutral-700 vel-p-4 vel-rounded-xl vel-text-center vel-text-sm vel-font-medium">warning</div>
        <div class="vel-bg-info-light vel-text-info vel-p-4 vel-rounded-xl vel-text-center vel-text-sm vel-font-medium">info</div>
      </div>
    </section>

    <section>
      <h2 class="vel-text-xs vel-font-semibold vel-uppercase vel-tracking-widest vel-mb-4" style="color:#64748b">Neutral scale</h2>
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
</div>`,y=`<div style="min-height:100vh;background:#060b17;padding:40px;font-family:system-ui,sans-serif">
  <div style="max-width:640px;margin:0 auto">

    <h1 class="vel-text-3xl vel-font-bold vel-mb-8 vel-tracking-tight" style="color:#f1f5f9">Typography</h1>

    <section class="vel-mb-10">
      <h2 class="vel-text-xs vel-font-semibold vel-uppercase vel-tracking-widest vel-mb-5" style="color:#64748b">Type scale</h2>
      <div class="vel-space-y-3">
        <p class="vel-text-5xl vel-font-black vel-leading-none" style="color:#f1f5f9">Display — vel-text-5xl</p>
        <p class="vel-text-3xl vel-font-bold" style="color:#f1f5f9">Heading 1 — vel-text-3xl</p>
        <p class="vel-text-2xl vel-font-semibold" style="color:#e2e8f0">Heading 2 — vel-text-2xl</p>
        <p class="vel-text-xl vel-font-medium" style="color:#cbd5e1">Heading 3 — vel-text-xl</p>
        <p class="vel-text-base" style="color:#94a3b8">Body — the quick brown fox jumps over the lazy dog.</p>
        <p class="vel-text-sm" style="color:#64748b">Small — secondary information and captions.</p>
        <p class="vel-text-xs vel-uppercase vel-tracking-wider vel-font-semibold" style="color:#475569">Label / Eyebrow — vel-text-xs</p>
      </div>
    </section>

    <section>
      <h2 class="vel-text-xs vel-font-semibold vel-uppercase vel-tracking-widest vel-mb-5" style="color:#64748b">Text colors</h2>
      <div class="vel-space-y-1">
        <p class="vel-text-xl vel-font-medium vel-text-primary">vel-text-primary</p>
        <p class="vel-text-xl vel-font-medium vel-text-success">vel-text-success</p>
        <p class="vel-text-xl vel-font-medium vel-text-danger">vel-text-danger</p>
        <p class="vel-text-xl vel-font-medium vel-text-warning">vel-text-warning</p>
        <p class="vel-text-xl vel-font-medium vel-text-info">vel-text-info</p>
      </div>
    </section>

  </div>
</div>`,j=`<div style="min-height:100vh;background:#060b17;padding:40px;font-family:system-ui,sans-serif">
  <div style="max-width:720px;margin:0 auto">

    <h1 class="vel-text-3xl vel-font-bold vel-mb-8 vel-tracking-tight" style="color:#f1f5f9">Pagination &amp; Breadcrumb</h1>

    <section class="vel-mb-10">
      <h2 class="vel-text-xs vel-font-semibold vel-uppercase vel-tracking-widest vel-mb-4" style="color:#64748b">Breadcrumb</h2>
      <ol class="vel-breadcrumb vel-breadcrumb-chevron">
        <li class="vel-breadcrumb-item"><a href="#" class="vel-breadcrumb-link">Home</a></li>
        <li class="vel-breadcrumb-item"><a href="#" class="vel-breadcrumb-link">Components</a></li>
        <li class="vel-breadcrumb-item"><span class="vel-breadcrumb-active">Breadcrumb</span></li>
      </ol>
    </section>

    <section>
      <h2 class="vel-text-xs vel-font-semibold vel-uppercase vel-tracking-widest vel-mb-4" style="color:#64748b">Pagination</h2>
      <nav class="vel-pagination">
        <span class="vel-page-item"><span class="vel-page-link vel-page-link-disabled">← Prev</span></span>
        <span class="vel-page-item"><a href="#" class="vel-page-link">1</a></span>
        <span class="vel-page-item"><a href="#" class="vel-page-link vel-page-link-active">2</a></span>
        <span class="vel-page-item"><a href="#" class="vel-page-link">3</a></span>
        <span class="vel-page-ellipsis">…</span>
        <span class="vel-page-item"><a href="#" class="vel-page-link">8</a></span>
        <span class="vel-page-item"><a href="#" class="vel-page-link">Next →</a></span>
      </nav>
    </section>

  </div>
</div>`,k=`<div style="min-height:100vh;background:#060b17;padding:40px;font-family:system-ui,sans-serif">
  <div style="max-width:720px;margin:0 auto">

    <h1 class="vel-text-3xl vel-font-bold vel-mb-8 vel-tracking-tight" style="color:#f1f5f9">Steps</h1>

    <section class="vel-mb-10">
      <h2 class="vel-text-xs vel-font-semibold vel-uppercase vel-tracking-widest vel-mb-6" style="color:#64748b">Horizontal</h2>
      <div class="vel-steps">
        <div class="vel-step vel-step-complete">
          <div class="vel-step-indicator">✓</div>
          <div class="vel-step-label">Account</div>
        </div>
        <div class="vel-step vel-step-complete">
          <div class="vel-step-indicator">✓</div>
          <div class="vel-step-label">Profile</div>
        </div>
        <div class="vel-step vel-step-active">
          <div class="vel-step-indicator">3</div>
          <div class="vel-step-label">Billing</div>
        </div>
        <div class="vel-step">
          <div class="vel-step-indicator">4</div>
          <div class="vel-step-label">Review</div>
        </div>
      </div>
    </section>

  </div>
</div>`,N=`<div style="min-height:100vh;background:#060b17;padding:40px;font-family:system-ui,sans-serif">
  <div style="max-width:720px;margin:0 auto">

    <h1 class="vel-text-3xl vel-font-bold vel-mb-8 vel-tracking-tight" style="color:#f1f5f9">Skeleton &amp; Kbd</h1>

    <section class="vel-mb-10">
      <h2 class="vel-text-xs vel-font-semibold vel-uppercase vel-tracking-widest vel-mb-4" style="color:#64748b">Skeleton loaders</h2>
      <div class="vel-flex vel-gap-4 vel-mb-6">
        <div class="vel-skeleton vel-skeleton-avatar-xl"></div>
        <div class="vel-flex-1">
          <div class="vel-skeleton vel-skeleton-text vel-skeleton-lg vel-mb-3"></div>
          <div class="vel-skeleton vel-skeleton-text vel-skeleton-sm"></div>
          <div class="vel-skeleton vel-skeleton-text vel-skeleton-sm"></div>
        </div>
      </div>
      <div class="vel-skeleton vel-skeleton-rect vel-skeleton-3xl" style="width:100%"></div>
    </section>

    <section>
      <h2 class="vel-text-xs vel-font-semibold vel-uppercase vel-tracking-widest vel-mb-4" style="color:#64748b">Keyboard keys</h2>
      <div class="vel-flex vel-flex-wrap vel-gap-4">
        <span class="vel-kbd-combo"><kbd class="vel-kbd">Ctrl</kbd><kbd class="vel-kbd">K</kbd></span>
        <span class="vel-kbd-combo"><kbd class="vel-kbd">⌘</kbd><kbd class="vel-kbd">Shift</kbd><kbd class="vel-kbd">P</kbd></span>
        <kbd class="vel-kbd vel-kbd-lg">Enter</kbd>
        <kbd class="vel-kbd">Tab</kbd>
        <kbd class="vel-kbd">Esc</kbd>
      </div>
    </section>

  </div>
</div>`,w=`<div style="min-height:100vh;background:#060b17;padding:40px;font-family:system-ui,sans-serif">
  <div style="max-width:720px;margin:0 auto">

    <h1 class="vel-text-3xl vel-font-bold vel-mb-8 vel-tracking-tight" style="color:#f1f5f9">Dividers</h1>

    <div class="vel-flex vel-flex-col vel-gap-8">
      <div>
        <p class="vel-text-sm vel-mb-4" style="color:#94a3b8">Plain</p>
        <hr class="vel-divider-plain" />
      </div>
      <div>
        <p class="vel-text-sm vel-mb-4" style="color:#94a3b8">With label</p>
        <div class="vel-divider">OR</div>
      </div>
      <div>
        <p class="vel-text-sm vel-mb-4" style="color:#94a3b8">Left-aligned label</p>
        <div class="vel-divider vel-divider-left">Section</div>
      </div>
      <div>
        <p class="vel-text-sm vel-mb-4" style="color:#94a3b8">Primary color</p>
        <div class="vel-divider vel-divider-primary">Primary</div>
      </div>
    </div>

  </div>
</div>`;function S(){return(0,l.jsxs)("main",{style:{minHeight:"100vh",background:i,color:d,fontFamily:"system-ui, sans-serif"},children:[(0,l.jsxs)("header",{style:{position:"sticky",top:0,zIndex:50,display:"flex",alignItems:"center",justifyContent:"space-between",padding:"0 32px",height:"56px",background:"#060b17",borderBottom:`1px solid ${n}`,backdropFilter:"blur(8px)"},children:[(0,l.jsx)("img",{src:"/veloracss/velora_actual.png",alt:"VeloraCSS",style:{height:"28px",width:"auto"}}),(0,l.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:"12px"},children:[(0,l.jsx)("span",{style:{fontSize:"11px",color:r,background:v,padding:"2px 8px",borderRadius:"4px",border:`1px solid ${n}`},children:"v0.3.0"}),(0,l.jsx)("a",{href:a,style:{fontSize:"12px",fontWeight:500,padding:"5px 14px",borderRadius:"7px",background:v,color:o,textDecoration:"none",border:`1px solid ${n}`},children:"Docs"}),(0,l.jsx)("a",{href:t,target:"_blank",rel:"noopener noreferrer",style:{fontSize:"12px",fontWeight:500,padding:"5px 14px",borderRadius:"7px",background:c,color:"#fff",textDecoration:"none",border:`1px solid ${c}`},children:"Open Playground →"})]})]}),(0,l.jsxs)("div",{style:{textAlign:"center",padding:"80px 32px 64px",borderBottom:`1px solid ${n}`},children:[(0,l.jsx)("div",{style:{display:"inline-flex",alignItems:"center",gap:"8px",marginBottom:"24px"},children:(0,l.jsx)("span",{style:{fontSize:"11px",fontWeight:600,color:o,background:"#7c5cfc15",padding:"4px 12px",borderRadius:"99px",border:"1px solid #7c5cfc30"},children:"Now in v0.3 — 22 components, transform system & 300+ new utilities"})}),(0,l.jsxs)("h1",{style:{fontSize:"3rem",fontWeight:900,color:d,letterSpacing:"-0.03em",margin:"0 0 16px",lineHeight:1.1},children:["Build fast.",(0,l.jsx)("br",{}),"Look great."]}),(0,l.jsx)("p",{style:{fontSize:"1.125rem",color:r,maxWidth:"520px",margin:"0 auto 36px",lineHeight:1.7},children:"VeloraCSS is a fully original utility-first CSS framework with rich components, zero dependencies, and a consistent design system — running live in Next.js."}),(0,l.jsxs)("div",{style:{display:"flex",gap:"12px",justifyContent:"center",flexWrap:"wrap"},children:[(0,l.jsx)("a",{href:t,target:"_blank",rel:"noopener noreferrer",style:{fontSize:"14px",fontWeight:600,padding:"10px 24px",borderRadius:"8px",background:c,color:"#fff",textDecoration:"none"},children:"Open Playground"}),(0,l.jsx)("a",{href:a,style:{fontSize:"14px",fontWeight:600,padding:"10px 24px",borderRadius:"8px",background:v,color:d,textDecoration:"none",border:`1px solid ${n}`},children:"Read the Docs"}),(0,l.jsx)("a",{href:"https://github.com/VeloraX/veloracss",target:"_blank",rel:"noopener noreferrer",style:{fontSize:"14px",fontWeight:600,padding:"10px 24px",borderRadius:"8px",background:v,color:d,textDecoration:"none",border:`1px solid ${n}`},children:"GitHub"})]})]}),(0,l.jsxs)("div",{style:{maxWidth:"900px",margin:"0 auto",padding:"64px 32px"},children:[(0,l.jsxs)("section",{style:{marginBottom:"64px"},children:[(0,l.jsx)(b,{children:"Buttons"}),(0,l.jsxs)(p,{children:[(0,l.jsxs)("div",{className:"vel-flex vel-flex-wrap vel-gap-3 vel-mb-4",children:[(0,l.jsx)("button",{className:"vel-btn vel-btn-primary",children:"Primary"}),(0,l.jsx)("button",{className:"vel-btn vel-btn-secondary",children:"Secondary"}),(0,l.jsx)("button",{className:"vel-btn vel-btn-success",children:"Success"}),(0,l.jsx)("button",{className:"vel-btn vel-btn-danger",children:"Danger"}),(0,l.jsx)("button",{className:"vel-btn vel-btn-warning",children:"Warning"}),(0,l.jsx)("button",{className:"vel-btn vel-btn-info",children:"Info"})]}),(0,l.jsxs)("div",{className:"vel-flex vel-flex-wrap vel-gap-3",children:[(0,l.jsx)("button",{className:"vel-btn vel-btn-outline-primary",children:"Outline"}),(0,l.jsx)("button",{className:"vel-btn vel-btn-ghost",children:"Ghost"}),(0,l.jsx)("button",{className:"vel-btn vel-btn-link",children:"Link"}),(0,l.jsx)("button",{className:"vel-btn vel-btn-primary vel-btn-sm",children:"Small"}),(0,l.jsx)("button",{className:"vel-btn vel-btn-primary vel-btn-lg",children:"Large"}),(0,l.jsx)("button",{className:"vel-btn vel-btn-primary",disabled:!0,children:"Disabled"})]})]}),(0,l.jsx)(x,{code:m})]}),(0,l.jsxs)("section",{style:{marginBottom:"64px"},children:[(0,l.jsx)(b,{children:"Cards"}),(0,l.jsx)(p,{children:(0,l.jsxs)("div",{className:"vel-grid vel-grid-cols-3 vel-gap-4",children:[(0,l.jsxs)("div",{className:"vel-card vel-card-hover",children:[(0,l.jsx)("div",{className:"vel-card-header",children:"Hover Card"}),(0,l.jsxs)("div",{className:"vel-card-body",children:[(0,l.jsx)("p",{className:"vel-text-neutral-500 vel-text-sm vel-mb-3",children:"Shadow lifts on hover."}),(0,l.jsx)("button",{className:"vel-btn vel-btn-primary vel-btn-sm",children:"Action"})]})]}),(0,l.jsxs)("div",{className:"vel-card vel-card-glass",children:[(0,l.jsx)("div",{className:"vel-card-header",children:"Glass"}),(0,l.jsxs)("div",{className:"vel-card-body",children:[(0,l.jsx)("p",{className:"vel-text-neutral-500 vel-text-sm vel-mb-3",children:"Glassmorphism variant."}),(0,l.jsx)("button",{className:"vel-btn vel-btn-outline-primary vel-btn-sm",children:"Action"})]})]}),(0,l.jsx)("div",{className:"vel-card vel-card-primary",children:(0,l.jsxs)("div",{className:"vel-card-body",children:[(0,l.jsx)("h3",{className:"vel-text-base vel-font-semibold vel-text-white vel-mb-2",children:"Primary"}),(0,l.jsx)("p",{className:"vel-text-sm",style:{color:"rgba(255,255,255,.75)"},children:"Brand-colored card."})]})})]})}),(0,l.jsx)(x,{code:g})]}),(0,l.jsxs)("section",{style:{marginBottom:"64px"},children:[(0,l.jsx)(b,{children:"Badges & Alerts"}),(0,l.jsxs)(p,{children:[(0,l.jsxs)("div",{className:"vel-flex vel-flex-wrap vel-gap-3 vel-mb-6",children:[(0,l.jsx)("span",{className:"vel-badge vel-badge-primary",children:"Primary"}),(0,l.jsx)("span",{className:"vel-badge vel-badge-success",children:"Success"}),(0,l.jsx)("span",{className:"vel-badge vel-badge-danger",children:"Danger"}),(0,l.jsx)("span",{className:"vel-badge vel-badge-warning",children:"Warning"}),(0,l.jsx)("span",{className:"vel-badge vel-badge-info",children:"Info"}),(0,l.jsx)("span",{className:"vel-badge vel-badge-secondary",children:"Secondary"})]}),(0,l.jsxs)("div",{className:"vel-flex vel-flex-col vel-gap-3",children:[(0,l.jsx)("div",{className:"vel-alert vel-alert-info",children:"Info — Something worth knowing about."}),(0,l.jsx)("div",{className:"vel-alert vel-alert-success",children:"Success — Your changes have been saved."}),(0,l.jsx)("div",{className:"vel-alert vel-alert-warning",children:"Warning — Review before continuing."}),(0,l.jsx)("div",{className:"vel-alert vel-alert-danger",children:"Danger — This action cannot be undone."})]})]}),(0,l.jsx)(x,{code:h})]}),(0,l.jsxs)("section",{style:{marginBottom:"64px"},children:[(0,l.jsx)(b,{children:"Gradients & Glows"}),(0,l.jsxs)(p,{children:[(0,l.jsxs)("div",{className:"vel-grid vel-grid-cols-3 vel-gap-4 vel-mb-6",children:[(0,l.jsx)("div",{className:"vel-bg-gradient-primary vel-p-5 vel-rounded-xl vel-text-center vel-font-semibold vel-text-white",children:"primary"}),(0,l.jsx)("div",{className:"vel-bg-gradient-aurora vel-p-5 vel-rounded-xl vel-text-center vel-font-semibold vel-text-white",children:"aurora"}),(0,l.jsx)("div",{className:"vel-bg-gradient-ocean vel-p-5 vel-rounded-xl vel-text-center vel-font-semibold vel-text-white",children:"ocean"}),(0,l.jsx)("div",{className:"vel-bg-gradient-success vel-p-5 vel-rounded-xl vel-text-center vel-font-semibold vel-text-white",children:"success"}),(0,l.jsx)("div",{className:"vel-bg-gradient-danger vel-p-5 vel-rounded-xl vel-text-center vel-font-semibold vel-text-white",children:"danger"}),(0,l.jsx)("div",{className:"vel-bg-gradient-sunset vel-p-5 vel-rounded-xl vel-text-center vel-font-semibold vel-text-white",children:"sunset"})]}),(0,l.jsxs)("div",{className:"vel-flex vel-flex-wrap vel-gap-4",children:[(0,l.jsx)("button",{className:"vel-btn vel-btn-primary vel-btn-glow-primary",children:"Glow Primary"}),(0,l.jsx)("button",{className:"vel-btn vel-btn-success vel-btn-glow-success",children:"Glow Success"}),(0,l.jsx)("button",{className:"vel-btn vel-btn-danger vel-btn-glow-danger",children:"Glow Danger"})]})]}),(0,l.jsx)(x,{code:f})]}),(0,l.jsxs)("section",{style:{marginBottom:"64px"},children:[(0,l.jsx)(b,{children:"Colors"}),(0,l.jsxs)(p,{children:[(0,l.jsx)("div",{className:"vel-grid vel-grid-cols-6 vel-gap-3 vel-mb-4",children:["primary","secondary","success","danger","warning","info"].map(e=>(0,l.jsx)("div",{className:`vel-bg-${e} vel-text-white vel-p-4 vel-rounded-xl vel-text-center vel-text-sm vel-font-medium`,children:e},e))}),(0,l.jsx)("div",{className:"vel-grid vel-grid-cols-11 vel-gap-1",children:[50,100,200,300,400,500,600,700,800,900,950].map(e=>(0,l.jsx)("div",{className:`vel-bg-neutral-${e} vel-py-3 vel-rounded-lg vel-text-center`,style:{fontSize:"10px",color:e>=500?"#fff":"#334155"},children:e},e))})]}),(0,l.jsx)(x,{code:u})]}),(0,l.jsxs)("section",{style:{marginBottom:"64px"},children:[(0,l.jsx)(b,{children:"Typography"}),(0,l.jsx)(p,{children:(0,l.jsxs)("div",{className:"vel-space-y-2",children:[(0,l.jsx)("p",{className:"vel-text-5xl vel-font-black vel-leading-none",style:{color:d},children:"Display"}),(0,l.jsx)("p",{className:"vel-text-3xl vel-font-bold",style:{color:d},children:"Heading 1"}),(0,l.jsx)("p",{className:"vel-text-2xl vel-font-semibold",style:{color:"#cbd5e1"},children:"Heading 2"}),(0,l.jsx)("p",{className:"vel-text-xl vel-font-medium",style:{color:"#94a3b8"},children:"Heading 3"}),(0,l.jsx)("p",{className:"vel-text-base",style:{color:r},children:"Body — the quick brown fox jumps over the lazy dog."}),(0,l.jsx)("p",{className:"vel-text-sm",style:{color:"#475569"},children:"Small — secondary information and captions."}),(0,l.jsx)("p",{className:"vel-text-xs vel-uppercase vel-tracking-wider vel-font-semibold",style:{color:"#334155"},children:"Label / Eyebrow"})]})}),(0,l.jsx)(x,{code:y})]}),(0,l.jsxs)("section",{style:{marginBottom:"64px"},children:[(0,l.jsx)(b,{children:"Pagination & Breadcrumb"}),(0,l.jsxs)(p,{children:[(0,l.jsxs)("div",{className:"vel-mb-6",children:[(0,l.jsx)("p",{className:"vel-text-xs vel-font-semibold vel-uppercase vel-tracking-widest vel-mb-3",style:{color:r},children:"Breadcrumb"}),(0,l.jsxs)("ol",{className:"vel-breadcrumb vel-breadcrumb-chevron",children:[(0,l.jsx)("li",{className:"vel-breadcrumb-item",children:(0,l.jsx)("a",{href:"#",className:"vel-breadcrumb-link",children:"Home"})}),(0,l.jsx)("li",{className:"vel-breadcrumb-item",children:(0,l.jsx)("a",{href:"#",className:"vel-breadcrumb-link",children:"Components"})}),(0,l.jsx)("li",{className:"vel-breadcrumb-item",children:(0,l.jsx)("span",{className:"vel-breadcrumb-active",children:"Breadcrumb"})})]})]}),(0,l.jsxs)("div",{children:[(0,l.jsx)("p",{className:"vel-text-xs vel-font-semibold vel-uppercase vel-tracking-widest vel-mb-3",style:{color:r},children:"Pagination"}),(0,l.jsxs)("nav",{className:"vel-pagination",children:[(0,l.jsx)("span",{className:"vel-page-item",children:(0,l.jsx)("span",{className:"vel-page-link vel-page-link-disabled",children:"← Prev"})}),(0,l.jsx)("span",{className:"vel-page-item",children:(0,l.jsx)("a",{href:"#",className:"vel-page-link",children:"1"})}),(0,l.jsx)("span",{className:"vel-page-item",children:(0,l.jsx)("a",{href:"#",className:"vel-page-link vel-page-link-active",children:"2"})}),(0,l.jsx)("span",{className:"vel-page-item",children:(0,l.jsx)("a",{href:"#",className:"vel-page-link",children:"3"})}),(0,l.jsx)("span",{className:"vel-page-ellipsis",children:"…"}),(0,l.jsx)("span",{className:"vel-page-item",children:(0,l.jsx)("a",{href:"#",className:"vel-page-link",children:"8"})}),(0,l.jsx)("span",{className:"vel-page-item",children:(0,l.jsx)("a",{href:"#",className:"vel-page-link",children:"Next →"})})]})]})]}),(0,l.jsx)(x,{code:j})]}),(0,l.jsxs)("section",{style:{marginBottom:"64px"},children:[(0,l.jsx)(b,{children:"Steps"}),(0,l.jsx)(p,{children:(0,l.jsxs)("div",{className:"vel-steps",children:[(0,l.jsxs)("div",{className:"vel-step vel-step-complete",children:[(0,l.jsx)("div",{className:"vel-step-indicator",children:"✓"}),(0,l.jsx)("div",{className:"vel-step-label",children:"Account"})]}),(0,l.jsxs)("div",{className:"vel-step vel-step-complete",children:[(0,l.jsx)("div",{className:"vel-step-indicator",children:"✓"}),(0,l.jsx)("div",{className:"vel-step-label",children:"Profile"})]}),(0,l.jsxs)("div",{className:"vel-step vel-step-active",children:[(0,l.jsx)("div",{className:"vel-step-indicator",children:"3"}),(0,l.jsx)("div",{className:"vel-step-label",children:"Billing"})]}),(0,l.jsxs)("div",{className:"vel-step",children:[(0,l.jsx)("div",{className:"vel-step-indicator",children:"4"}),(0,l.jsx)("div",{className:"vel-step-label",children:"Review"})]})]})}),(0,l.jsx)(x,{code:k})]}),(0,l.jsxs)("section",{style:{marginBottom:"64px"},children:[(0,l.jsx)(b,{children:"Skeleton & Keyboard Keys"}),(0,l.jsxs)(p,{children:[(0,l.jsxs)("div",{className:"vel-flex vel-gap-4 vel-mb-6",children:[(0,l.jsx)("div",{className:"vel-skeleton vel-skeleton-avatar-xl"}),(0,l.jsxs)("div",{style:{flex:1},children:[(0,l.jsx)("div",{className:"vel-skeleton vel-skeleton-text vel-skeleton-lg vel-mb-3"}),(0,l.jsx)("div",{className:"vel-skeleton vel-skeleton-text vel-skeleton-sm vel-mb-2"}),(0,l.jsx)("div",{className:"vel-skeleton vel-skeleton-text vel-skeleton-sm"})]})]}),(0,l.jsxs)("div",{className:"vel-flex vel-flex-wrap vel-gap-4",children:[(0,l.jsxs)("span",{className:"vel-kbd-combo",children:[(0,l.jsx)("kbd",{className:"vel-kbd",children:"Ctrl"}),(0,l.jsx)("kbd",{className:"vel-kbd",children:"K"})]}),(0,l.jsxs)("span",{className:"vel-kbd-combo",children:[(0,l.jsx)("kbd",{className:"vel-kbd",children:"⌘"}),(0,l.jsx)("kbd",{className:"vel-kbd",children:"Shift"}),(0,l.jsx)("kbd",{className:"vel-kbd",children:"P"})]}),(0,l.jsx)("kbd",{className:"vel-kbd vel-kbd-lg",children:"Enter"}),(0,l.jsx)("kbd",{className:"vel-kbd",children:"Tab"}),(0,l.jsx)("kbd",{className:"vel-kbd",children:"Esc"})]})]}),(0,l.jsx)(x,{code:N})]}),(0,l.jsxs)("section",{style:{marginBottom:"64px"},children:[(0,l.jsx)(b,{children:"Dividers"}),(0,l.jsx)(p,{children:(0,l.jsxs)("div",{className:"vel-flex vel-flex-col vel-gap-6",children:[(0,l.jsx)("hr",{className:"vel-divider-plain"}),(0,l.jsx)("div",{className:"vel-divider",children:"OR"}),(0,l.jsx)("div",{className:"vel-divider vel-divider-left",children:"Section"}),(0,l.jsx)("div",{className:"vel-divider vel-divider-primary",children:"Primary"})]})}),(0,l.jsx)(x,{code:w})]})]}),(0,l.jsxs)("footer",{style:{textAlign:"center",padding:"32px",borderTop:`1px solid ${n}`,fontSize:"13px",color:r},children:["VeloraCSS v0.3.0 — Next.js Demo ·"," ",(0,l.jsx)("a",{href:a,style:{color:o,textDecoration:"none"},children:"Docs"})," · ",(0,l.jsx)("a",{href:t,style:{color:o,textDecoration:"none"},children:"Open Playground"})]})]})}e.s(["default",()=>S])}]);