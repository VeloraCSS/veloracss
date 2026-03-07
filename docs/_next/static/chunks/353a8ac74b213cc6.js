(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,49308,e=>{"use strict";var l=e.i(92944),t=e.i(34726);let s="https://velorax.github.io/veloracss/playground",n="#060b17",v="#111827",a="#1e2d45",r="#e2e8f0",i="#64748b",d="#6366f1",o="#818cf8";function c({code:e}){let r,[d,c]=(0,t.useState)(!1),x=(0,t.useCallback)(()=>{navigator.clipboard.writeText(e),c(!0),setTimeout(()=>c(!1),2e3)},[e]);return(0,l.jsxs)("div",{style:{border:`1px solid ${a}`,borderRadius:"12px",overflow:"hidden",marginTop:"12px"},children:[(0,l.jsxs)("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"8px 16px",background:"#0d1422",borderBottom:`1px solid ${a}`},children:[(0,l.jsx)("span",{style:{fontSize:"11px",fontWeight:500,color:i,letterSpacing:"0.05em",textTransform:"uppercase"},children:"HTML"}),(0,l.jsxs)("div",{style:{display:"flex",gap:"8px"},children:[(0,l.jsx)("button",{onClick:x,style:{fontSize:"11px",fontWeight:500,padding:"4px 10px",borderRadius:"6px",cursor:"pointer",background:d?"#22c55e20":v,color:d?"#22c55e":"#94a3b8",border:`1px solid ${d?"#22c55e40":a}`,transition:"all .15s"},children:d?"✓ Copied":"Copy"}),(0,l.jsx)("a",{href:(r=btoa(new TextEncoder().encode(e).reduce((e,l)=>e+String.fromCharCode(l),"")),`${s}/#code=${r}`),target:"_blank",rel:"noopener noreferrer",style:{fontSize:"11px",fontWeight:500,padding:"4px 10px",borderRadius:"6px",background:"#6366f120",color:o,border:"1px solid #6366f140",textDecoration:"none",transition:"all .15s"},children:"Try in Playground →"})]})]}),(0,l.jsx)("pre",{style:{margin:0,padding:"16px",background:n,color:"#94a3b8",fontSize:"12px",lineHeight:"1.7",whiteSpace:"pre-wrap",wordBreak:"break-all",maxHeight:"280px",overflowY:"auto",fontFamily:"'Fira Code', 'Cascadia Code', Consolas, monospace"},children:(0,l.jsx)("code",{children:e})})]})}function x({children:e}){return(0,l.jsx)("p",{style:{fontSize:"11px",fontWeight:600,color:i,letterSpacing:"0.08em",textTransform:"uppercase",marginBottom:"16px"},children:e})}function p({children:e}){return(0,l.jsx)("div",{style:{background:v,borderRadius:"12px",padding:"28px",border:`1px solid ${a}`},children:e})}let b=`<div class="vel-min-h-screen vel-bg-white vel-p-10">
  <div class="vel-max-w-3xl vel-mx-auto">

    <h1 class="vel-text-3xl vel-font-bold vel-text-neutral-900 vel-mb-8 vel-tracking-tight">Buttons</h1>

    <section class="vel-mb-8">
      <h2 class="vel-text-xs vel-font-semibold vel-text-neutral-400 vel-uppercase vel-tracking-widest vel-mb-4">Solid</h2>
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
      <h2 class="vel-text-xs vel-font-semibold vel-text-neutral-400 vel-uppercase vel-tracking-widest vel-mb-4">Outline &amp; Ghost</h2>
      <div class="vel-flex vel-flex-wrap vel-gap-3">
        <button class="vel-btn vel-btn-outline-primary">Outline</button>
        <button class="vel-btn vel-btn-ghost">Ghost</button>
        <button class="vel-btn vel-btn-link">Link</button>
        <button class="vel-btn vel-btn-primary" disabled>Disabled</button>
      </div>
    </section>

    <section>
      <h2 class="vel-text-xs vel-font-semibold vel-text-neutral-400 vel-uppercase vel-tracking-widest vel-mb-4">Sizes</h2>
      <div class="vel-flex vel-flex-wrap vel-items-center vel-gap-3">
        <button class="vel-btn vel-btn-primary vel-btn-xs">XSmall</button>
        <button class="vel-btn vel-btn-primary vel-btn-sm">Small</button>
        <button class="vel-btn vel-btn-primary">Default</button>
        <button class="vel-btn vel-btn-primary vel-btn-lg">Large</button>
        <button class="vel-btn vel-btn-primary vel-btn-xl">XLarge</button>
      </div>
    </section>

  </div>
</div>`,m=`<div class="vel-min-h-screen vel-bg-neutral-50 vel-p-10">
  <div class="vel-max-w-4xl vel-mx-auto">

    <h1 class="vel-text-3xl vel-font-bold vel-text-neutral-900 vel-mb-8 vel-tracking-tight">Cards</h1>

    <div class="vel-grid vel-grid-cols-3 vel-gap-6 vel-mb-6">
      <div class="vel-card vel-card-hover">
        <div class="vel-card-header">Hover Card</div>
        <div class="vel-card-body">
          <p class="vel-text-neutral-500 vel-text-sm vel-mb-4">Shadow lifts on hover.</p>
          <button class="vel-btn vel-btn-primary vel-btn-sm">Action</button>
        </div>
        <div class="vel-card-footer">
          <span class="vel-text-xs vel-text-neutral-400">vel-card-hover</span>
        </div>
      </div>
      <div class="vel-card vel-card-elevated">
        <div class="vel-card-header">Elevated</div>
        <div class="vel-card-body">
          <p class="vel-text-neutral-500 vel-text-sm vel-mb-4">No border, large shadow.</p>
          <button class="vel-btn vel-btn-outline-primary vel-btn-sm">Action</button>
        </div>
        <div class="vel-card-footer">
          <span class="vel-text-xs vel-text-neutral-400">vel-card-elevated</span>
        </div>
      </div>
      <div class="vel-card vel-card-filled">
        <div class="vel-card-header">Filled</div>
        <div class="vel-card-body">
          <p class="vel-text-neutral-500 vel-text-sm vel-mb-4">Neutral background.</p>
          <button class="vel-btn vel-btn-ghost vel-btn-sm">Action</button>
        </div>
        <div class="vel-card-footer">
          <span class="vel-text-xs vel-text-neutral-400">vel-card-filled</span>
        </div>
      </div>
    </div>

    <div class="vel-grid vel-grid-cols-2 vel-gap-6">
      <div class="vel-card vel-card-flat">
        <div class="vel-card-body">
          <h3 class="vel-text-lg vel-font-semibold vel-text-neutral-900 vel-mb-2">Flat Card</h3>
          <p class="vel-text-neutral-500 vel-text-sm">No shadow, no border. Minimal.</p>
        </div>
      </div>
      <div class="vel-card vel-card-primary">
        <div class="vel-card-body">
          <h3 class="vel-text-lg vel-font-semibold vel-text-white vel-mb-2">Primary Card</h3>
          <p class="vel-text-sm" style="color:rgba(255,255,255,.75)">Bold brand-colored card.</p>
        </div>
      </div>
    </div>

  </div>
</div>`,u=`<div class="vel-min-h-screen vel-bg-white vel-p-10">
  <div class="vel-max-w-4xl vel-mx-auto">

    <h1 class="vel-text-3xl vel-font-bold vel-text-neutral-900 vel-mb-8 vel-tracking-tight">Colors</h1>

    <section class="vel-mb-8">
      <h2 class="vel-text-xs vel-font-semibold vel-text-neutral-400 vel-uppercase vel-tracking-widest vel-mb-4">Semantic</h2>
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
      <h2 class="vel-text-xs vel-font-semibold vel-text-neutral-400 vel-uppercase vel-tracking-widest vel-mb-4">Light variants</h2>
      <div class="vel-grid vel-grid-cols-5 vel-gap-3">
        <div class="vel-bg-primary-light vel-text-primary vel-p-4 vel-rounded-xl vel-text-center vel-text-sm vel-font-medium">primary</div>
        <div class="vel-bg-success-light vel-text-success vel-p-4 vel-rounded-xl vel-text-center vel-text-sm vel-font-medium">success</div>
        <div class="vel-bg-danger-light vel-text-danger vel-p-4 vel-rounded-xl vel-text-center vel-text-sm vel-font-medium">danger</div>
        <div class="vel-bg-warning-light vel-text-neutral-700 vel-p-4 vel-rounded-xl vel-text-center vel-text-sm vel-font-medium">warning</div>
        <div class="vel-bg-info-light vel-text-info vel-p-4 vel-rounded-xl vel-text-center vel-text-sm vel-font-medium">info</div>
      </div>
    </section>

    <section>
      <h2 class="vel-text-xs vel-font-semibold vel-text-neutral-400 vel-uppercase vel-tracking-widest vel-mb-4">Neutral scale</h2>
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
</div>`,g=`<div class="vel-min-h-screen vel-bg-white vel-p-10">
  <div class="vel-max-w-2xl vel-mx-auto">

    <h1 class="vel-text-3xl vel-font-bold vel-text-neutral-900 vel-mb-8 vel-tracking-tight">Typography</h1>

    <section class="vel-mb-10">
      <h2 class="vel-text-xs vel-font-semibold vel-text-neutral-400 vel-uppercase vel-tracking-widest vel-mb-5">Type scale</h2>
      <div class="vel-space-y-3">
        <p class="vel-text-5xl vel-font-black vel-text-neutral-900 vel-leading-none">Display — vel-text-5xl</p>
        <p class="vel-text-3xl vel-font-bold vel-text-neutral-900">Heading 1 — vel-text-3xl</p>
        <p class="vel-text-2xl vel-font-semibold vel-text-neutral-800">Heading 2 — vel-text-2xl</p>
        <p class="vel-text-xl vel-font-medium vel-text-neutral-700">Heading 3 — vel-text-xl</p>
        <p class="vel-text-base vel-text-neutral-600">Body — the quick brown fox jumps over the lazy dog.</p>
        <p class="vel-text-sm vel-text-neutral-500">Small — secondary information and captions.</p>
        <p class="vel-text-xs vel-text-neutral-400 vel-uppercase vel-tracking-wider vel-font-semibold">Label / Eyebrow — vel-text-xs</p>
      </div>
    </section>

    <section class="vel-mb-10">
      <h2 class="vel-text-xs vel-font-semibold vel-text-neutral-400 vel-uppercase vel-tracking-widest vel-mb-5">Font weights</h2>
      <div class="vel-space-y-2">
        <p class="vel-text-xl vel-font-thin vel-text-neutral-800">Thin — vel-font-thin</p>
        <p class="vel-text-xl vel-font-light vel-text-neutral-800">Light — vel-font-light</p>
        <p class="vel-text-xl vel-font-normal vel-text-neutral-800">Normal — vel-font-normal</p>
        <p class="vel-text-xl vel-font-medium vel-text-neutral-800">Medium — vel-font-medium</p>
        <p class="vel-text-xl vel-font-semibold vel-text-neutral-800">Semibold — vel-font-semibold</p>
        <p class="vel-text-xl vel-font-bold vel-text-neutral-800">Bold — vel-font-bold</p>
        <p class="vel-text-xl vel-font-extrabold vel-text-neutral-800">Extrabold — vel-font-extrabold</p>
        <p class="vel-text-xl vel-font-black vel-text-neutral-800">Black — vel-font-black</p>
      </div>
    </section>

    <section>
      <h2 class="vel-text-xs vel-font-semibold vel-text-neutral-400 vel-uppercase vel-tracking-widest vel-mb-5">Text colors</h2>
      <div class="vel-space-y-1">
        <p class="vel-text-xl vel-font-medium vel-text-primary">vel-text-primary</p>
        <p class="vel-text-xl vel-font-medium vel-text-success">vel-text-success</p>
        <p class="vel-text-xl vel-font-medium vel-text-danger">vel-text-danger</p>
        <p class="vel-text-xl vel-font-medium vel-text-warning">vel-text-warning</p>
        <p class="vel-text-xl vel-font-medium vel-text-info">vel-text-info</p>
      </div>
    </section>

  </div>
</div>`;function f(){return(0,l.jsxs)("main",{style:{minHeight:"100vh",background:n,color:r,fontFamily:"system-ui, sans-serif"},children:[(0,l.jsxs)("header",{style:{position:"sticky",top:0,zIndex:50,display:"flex",alignItems:"center",justifyContent:"space-between",padding:"0 32px",height:"56px",background:"#060b17",borderBottom:`1px solid ${a}`,backdropFilter:"blur(8px)"},children:[(0,l.jsx)("img",{src:"/veloracss/velora_actual.png",alt:"VeloraCSS",style:{height:"28px",width:"auto"}}),(0,l.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:"12px"},children:[(0,l.jsx)("span",{style:{fontSize:"11px",color:i,background:v,padding:"2px 8px",borderRadius:"4px",border:`1px solid ${a}`},children:"v0.1.0"}),(0,l.jsx)("a",{href:s,target:"_blank",rel:"noopener noreferrer",style:{fontSize:"12px",fontWeight:500,padding:"5px 14px",borderRadius:"7px",background:d,color:"#fff",textDecoration:"none",border:`1px solid ${d}`},children:"Open Playground →"})]})]}),(0,l.jsxs)("div",{style:{textAlign:"center",padding:"80px 32px 64px",borderBottom:`1px solid ${a}`},children:[(0,l.jsx)("div",{style:{display:"inline-flex",alignItems:"center",gap:"8px",marginBottom:"24px"},children:(0,l.jsx)("span",{style:{fontSize:"11px",fontWeight:600,color:o,background:"#6366f115",padding:"4px 12px",borderRadius:"99px",border:"1px solid #6366f130"},children:"Now in v0.1 — utility-first CSS"})}),(0,l.jsxs)("h1",{style:{fontSize:"3rem",fontWeight:900,color:r,letterSpacing:"-0.03em",margin:"0 0 16px",lineHeight:1.1},children:["Build fast.",(0,l.jsx)("br",{}),"Look great."]}),(0,l.jsx)("p",{style:{fontSize:"1.125rem",color:i,maxWidth:"520px",margin:"0 auto 36px",lineHeight:1.7},children:"VeloraCSS is a fully original utility-first CSS framework with rich components, zero dependencies, and a consistent design system — running live in Next.js."}),(0,l.jsxs)("div",{style:{display:"flex",gap:"12px",justifyContent:"center",flexWrap:"wrap"},children:[(0,l.jsx)("a",{href:s,target:"_blank",rel:"noopener noreferrer",style:{fontSize:"14px",fontWeight:600,padding:"10px 24px",borderRadius:"8px",background:d,color:"#fff",textDecoration:"none"},children:"Open Playground"}),(0,l.jsx)("a",{href:"https://github.com/VeloraX/veloracss",target:"_blank",rel:"noopener noreferrer",style:{fontSize:"14px",fontWeight:600,padding:"10px 24px",borderRadius:"8px",background:v,color:r,textDecoration:"none",border:`1px solid ${a}`},children:"GitHub"})]})]}),(0,l.jsxs)("div",{style:{maxWidth:"900px",margin:"0 auto",padding:"64px 32px"},children:[(0,l.jsxs)("section",{style:{marginBottom:"64px"},children:[(0,l.jsx)(x,{children:"Buttons"}),(0,l.jsxs)(p,{children:[(0,l.jsxs)("div",{className:"vel-flex vel-flex-wrap vel-gap-3 vel-mb-4",children:[(0,l.jsx)("button",{className:"vel-btn vel-btn-primary",children:"Primary"}),(0,l.jsx)("button",{className:"vel-btn vel-btn-secondary",children:"Secondary"}),(0,l.jsx)("button",{className:"vel-btn vel-btn-success",children:"Success"}),(0,l.jsx)("button",{className:"vel-btn vel-btn-danger",children:"Danger"}),(0,l.jsx)("button",{className:"vel-btn vel-btn-warning",children:"Warning"}),(0,l.jsx)("button",{className:"vel-btn vel-btn-info",children:"Info"})]}),(0,l.jsxs)("div",{className:"vel-flex vel-flex-wrap vel-gap-3",children:[(0,l.jsx)("button",{className:"vel-btn vel-btn-outline-primary",children:"Outline"}),(0,l.jsx)("button",{className:"vel-btn vel-btn-ghost",children:"Ghost"}),(0,l.jsx)("button",{className:"vel-btn vel-btn-link",children:"Link"}),(0,l.jsx)("button",{className:"vel-btn vel-btn-primary vel-btn-sm",children:"Small"}),(0,l.jsx)("button",{className:"vel-btn vel-btn-primary vel-btn-lg",children:"Large"}),(0,l.jsx)("button",{className:"vel-btn vel-btn-primary",disabled:!0,children:"Disabled"})]})]}),(0,l.jsx)(c,{code:b})]}),(0,l.jsxs)("section",{style:{marginBottom:"64px"},children:[(0,l.jsx)(x,{children:"Cards"}),(0,l.jsx)(p,{children:(0,l.jsxs)("div",{className:"vel-grid vel-grid-cols-3 vel-gap-4",children:[(0,l.jsxs)("div",{className:"vel-card vel-card-hover",children:[(0,l.jsx)("div",{className:"vel-card-header",children:"Hover Card"}),(0,l.jsxs)("div",{className:"vel-card-body",children:[(0,l.jsx)("p",{className:"vel-text-neutral-500 vel-text-sm vel-mb-3",children:"Shadow lifts on hover."}),(0,l.jsx)("button",{className:"vel-btn vel-btn-primary vel-btn-sm",children:"Action"})]})]}),(0,l.jsxs)("div",{className:"vel-card vel-card-elevated",children:[(0,l.jsx)("div",{className:"vel-card-header",children:"Elevated"}),(0,l.jsxs)("div",{className:"vel-card-body",children:[(0,l.jsx)("p",{className:"vel-text-neutral-500 vel-text-sm vel-mb-3",children:"No border, large shadow."}),(0,l.jsx)("button",{className:"vel-btn vel-btn-outline-primary vel-btn-sm",children:"Action"})]})]}),(0,l.jsx)("div",{className:"vel-card vel-card-primary",children:(0,l.jsxs)("div",{className:"vel-card-body",children:[(0,l.jsx)("h3",{className:"vel-text-base vel-font-semibold vel-text-white vel-mb-2",children:"Primary"}),(0,l.jsx)("p",{className:"vel-text-sm",style:{color:"rgba(255,255,255,.75)"},children:"Brand-colored card."})]})})]})}),(0,l.jsx)(c,{code:m})]}),(0,l.jsxs)("section",{style:{marginBottom:"64px"},children:[(0,l.jsx)(x,{children:"Colors"}),(0,l.jsxs)(p,{children:[(0,l.jsx)("div",{className:"vel-grid vel-grid-cols-6 vel-gap-3 vel-mb-4",children:["primary","secondary","success","danger","warning","info"].map(e=>(0,l.jsx)("div",{className:`vel-bg-${e} vel-text-white vel-p-4 vel-rounded-xl vel-text-center vel-text-sm vel-font-medium`,children:e},e))}),(0,l.jsx)("div",{className:"vel-grid vel-grid-cols-11 vel-gap-1",children:[50,100,200,300,400,500,600,700,800,900,950].map(e=>(0,l.jsx)("div",{className:`vel-bg-neutral-${e} vel-py-3 vel-rounded-lg vel-text-center`,style:{fontSize:"10px",color:e>=500?"#fff":"#334155"},children:e},e))})]}),(0,l.jsx)(c,{code:u})]}),(0,l.jsxs)("section",{style:{marginBottom:"64px"},children:[(0,l.jsx)(x,{children:"Typography"}),(0,l.jsx)(p,{children:(0,l.jsxs)("div",{className:"vel-space-y-2",children:[(0,l.jsx)("p",{className:"vel-text-5xl vel-font-black vel-text-neutral-900 vel-leading-none",children:"Display"}),(0,l.jsx)("p",{className:"vel-text-3xl vel-font-bold vel-text-neutral-900",children:"Heading 1"}),(0,l.jsx)("p",{className:"vel-text-2xl vel-font-semibold vel-text-neutral-800",children:"Heading 2"}),(0,l.jsx)("p",{className:"vel-text-xl vel-font-medium vel-text-neutral-700",children:"Heading 3"}),(0,l.jsx)("p",{className:"vel-text-base vel-text-neutral-600",children:"Body — the quick brown fox jumps over the lazy dog."}),(0,l.jsx)("p",{className:"vel-text-sm vel-text-neutral-500",children:"Small — secondary information and captions."}),(0,l.jsx)("p",{className:"vel-text-xs vel-text-neutral-400 vel-uppercase vel-tracking-wider vel-font-semibold",children:"Label / Eyebrow"})]})}),(0,l.jsx)(c,{code:g})]})]}),(0,l.jsxs)("footer",{style:{textAlign:"center",padding:"32px",borderTop:`1px solid ${a}`,fontSize:"13px",color:i},children:["VeloraCSS v0.1.0 — Next.js Demo ·"," ",(0,l.jsx)("a",{href:s,style:{color:o,textDecoration:"none"},children:"Open Playground"})]})]})}e.s(["default",()=>f])}]);