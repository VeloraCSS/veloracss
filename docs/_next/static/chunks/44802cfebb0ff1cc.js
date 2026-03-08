(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,49308,e=>{"use strict";var a=e.i(92944),s=e.i(34726),r=e.i(15457);let o="https://velorax.github.io/veloracss/playground",n="/docs",t=`
  #vel-home {
    --vel-dna-hue: 258;
    --vp: oklch(65% 0.21 var(--vel-dna-hue));
    --vp-light: oklch(80% 0.14 var(--vel-dna-hue));
    --vp-dim: oklch(50% 0.22 var(--vel-dna-hue));
    --vp-glow: oklch(65% 0.21 var(--vel-dna-hue) / 0.18);
    --vp-subtle: oklch(65% 0.21 var(--vel-dna-hue) / 0.09);
    --vs0: oklch(7%  0.02  var(--vel-dna-hue));
    --vs1: oklch(10% 0.025 var(--vel-dna-hue));
    --vs2: oklch(13% 0.03  var(--vel-dna-hue));
    --vs3: oklch(17% 0.035 var(--vel-dna-hue));
    --vs4: oklch(22% 0.04  var(--vel-dna-hue));
    --vborder: oklch(26% 0.045 var(--vel-dna-hue));
    --vborder-dim: oklch(20% 0.035 var(--vel-dna-hue));
    --vt1: oklch(92% 0.015 var(--vel-dna-hue));
    --vt2: oklch(70% 0.03  var(--vel-dna-hue));
    --vt3: oklch(50% 0.04  var(--vel-dna-hue));
    --ease: cubic-bezier(0.16, 1, 0.3, 1);
    --dur: 220ms;
    background: var(--vs0);
    color: var(--vt1);
    font-family: system-ui, -apple-system, 'Segoe UI', sans-serif;
    -webkit-font-smoothing: antialiased;
    overflow-x: hidden;
    min-height: 100dvh;
  }
  #vel-home * { box-sizing: border-box; }

  /* Scope themes */
  #vel-home [data-vel-theme="ocean"]  { --vel-dna-hue: 205; }
  #vel-home [data-vel-theme="forest"] { --vel-dna-hue: 145; }
  #vel-home [data-vel-theme="ember"]  { --vel-dna-hue: 22;  }
  #vel-home [data-vel-theme="aurora"] { --vel-dna-hue: 300; }
  #vel-home [data-vel-theme="gold"]   { --vel-dna-hue: 55;  }

  /* ─ DNA SLIDER ─ */
  .vhome-dna-strip {
    display: inline-flex; align-items: center; gap: 1rem;
    background: var(--vs2); border: 1px solid var(--vborder);
    border-radius: 0.75rem; padding: 0.625rem 1.25rem;
    margin-bottom: 0.75rem;
  }
  .vhome-dna-label {
    font-size: 0.72rem; font-weight: 700; letter-spacing: 0.1em;
    text-transform: uppercase; color: var(--vt3); white-space: nowrap;
  }
  .vhome-dna-slider {
    -webkit-appearance: none; appearance: none;
    width: 200px; height: 6px; border-radius: 3px; cursor: pointer;
    background: linear-gradient(to right in oklch,
      oklch(65% 0.21 0), oklch(65% 0.21 60), oklch(65% 0.21 120),
      oklch(65% 0.21 180), oklch(65% 0.21 240), oklch(65% 0.21 300), oklch(65% 0.21 360));
  }
  .vhome-dna-slider::-webkit-slider-thumb {
    -webkit-appearance: none; width: 18px; height: 18px; border-radius: 50%;
    background: var(--vp); border: 3px solid var(--vs0);
    box-shadow: 0 0 0 2px var(--vp); cursor: pointer;
    transition: box-shadow var(--dur) var(--ease);
  }
  .vhome-dna-slider::-webkit-slider-thumb:hover { box-shadow: 0 0 0 4px var(--vp-glow); }
  .vhome-dna-swatch {
    width: 20px; height: 20px; border-radius: 50%;
    background: var(--vp); border: 2px solid var(--vborder); flex-shrink: 0;
  }
  .vhome-dna-val {
    font-size: 0.8rem; font-weight: 700; color: var(--vp);
    font-family: 'Cascadia Code', Consolas, monospace; min-width: 2.5rem;
  }
  .vhome-dna-note {
    font-size: 0.72rem; color: var(--vt3); margin-top: 0.25rem;
  }

  /* ─ WIN11 TERMINAL ─ */
  .vhome-terminal {
    background: #0C0C0C; border-radius: 0.5rem; overflow: hidden;
    border: 1px solid #2d2d2d;
    box-shadow: 0 20px 60px -12px rgba(0,0,0,0.7);
    text-align: left;
  }
  .vhome-terminal-titlebar {
    display: flex; align-items: center;
    padding: 0 0; height: 32px;
    background: #1C1C1C; border-bottom: 1px solid #2d2d2d;
  }
  .vhome-terminal-title {
    font-size: 0.72rem; color: #888;
    font-family: 'Cascadia Code', Menlo, Monaco, monospace;
    flex: 1; padding-left: 0.875rem;
  }
  .vhome-terminal-controls {
    display: flex; align-items: stretch; height: 32px; flex-shrink: 0;
  }
  .vhome-terminal-ctrl {
    display: flex; align-items: center; justify-content: center;
    width: 46px; font-size: 0.7rem; color: #888;
    cursor: pointer; transition: background 0.15s; border: none;
    background: transparent; font-family: inherit;
  }
  .vhome-terminal-ctrl:hover { background: rgba(255,255,255,0.08); color: #ccc; }
  .vhome-terminal-ctrl.close:hover { background: #e81123; color: #fff; }
  .vhome-terminal-action-bar {
    display: flex; align-items: center; justify-content: flex-end;
    background: #141414; border-bottom: 1px solid #1e1e1e;
    padding: 0 0.75rem; height: 28px;
  }
  .vhome-terminal-copy {
    font-size: 0.7rem; font-weight: 600; padding: 0.2rem 0.5rem;
    border-radius: 0.2rem; cursor: pointer; border: none;
    font-family: 'Cascadia Code', Consolas, monospace;
    transition: all 0.15s; flex-shrink: 0;
  }
  .vhome-terminal-copy.idle { background: #333; color: #888; }
  .vhome-terminal-copy.copied { background: rgba(14,203,129,0.15); color: #0ecb81; }
  .vhome-terminal-code {
    padding: 1.25rem 1.5rem; overflow-x: hidden; overflow-y: auto;
    white-space: pre-wrap; word-break: break-word;
    font-family: 'Cascadia Code', Menlo, Monaco, 'Courier New', monospace;
    font-size: 0.8125rem; line-height: 1.8; color: #CCCCCC;
    max-height: 340px;
  }
  .vhome-terminal-code::-webkit-scrollbar { width: 8px; }
  .vhome-terminal-code::-webkit-scrollbar-track { background: #111; }
  .vhome-terminal-code::-webkit-scrollbar-thumb { background: #444; border-radius: 4px; }
  .tc-comment { color: #6a9955; }
  .tc-prop    { color: #9cdcfe; }
  .tc-value   { color: #ce9178; }
  .tc-fn      { color: #dcdcaa; }
  .tc-kw      { color: #c586c0; }
  .tc-cls     { color: #4ec9b0; }
  .tc-num     { color: #b5cea8; }
  .tc-str     { color: #ce9178; }

  /* ─ INNOVATIONS GRID ─ */
  .vhome-innovations {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 1px; background: var(--vborder-dim);
    border: 1px solid var(--vborder-dim); border-radius: 1rem; overflow: hidden;
  }
  .vhome-innovation {
    background: var(--vs1); padding: 1.75rem;
    transition: background var(--dur) var(--ease);
  }
  .vhome-innovation:hover { background: var(--vs2); }
  .vhome-innovation-num {
    font-size: 0.65rem; font-weight: 800; letter-spacing: 0.15em;
    color: var(--vp); text-transform: uppercase; margin-bottom: 1rem; display: block;
  }
  .vhome-innovation-icon {
    width: 40px; height: 40px; border-radius: 0.625rem;
    background: var(--vp-subtle); border: 1px solid var(--vp-glow);
    display: flex; align-items: center; justify-content: center;
    font-size: 1.25rem; margin-bottom: 1rem;
  }
  .vhome-innovation h3 {
    font-size: 1.0625rem; font-weight: 700; margin-bottom: 0.5rem; line-height: 1.3;
    color: var(--vt1);
  }
  .vhome-innovation p {
    font-size: 0.875rem; color: var(--vt2); line-height: 1.65;
  }
  .vhome-innovation-tag {
    display: inline-block; margin-top: 0.75rem;
    font-size: 0.65rem; font-weight: 700; letter-spacing: 0.08em;
    text-transform: uppercase; color: var(--vt3);
    background: var(--vs3); border: 1px solid var(--vborder-dim);
    border-radius: 9999px; padding: 0.2rem 0.5rem;
    font-family: 'Cascadia Code', Consolas, monospace;
  }

  /* ─ TWO-COL FEATURE SECTION ─ */
  .vhome-split { display: grid; grid-template-columns: 1fr 1fr; gap: 4rem; align-items: center; }
  @media (max-width: 768px) { .vhome-split { grid-template-columns: 1fr; gap: 2rem; } }

  /* ─ STATS ─ */
  .vhome-stats {
    display: grid; grid-template-columns: repeat(4, 1fr); gap: 1px;
    background: var(--vborder-dim); border: 1px solid var(--vborder-dim);
    border-radius: 1rem; overflow: hidden;
  }
  @media (max-width: 640px) { .vhome-stats { grid-template-columns: repeat(2, 1fr); } }
  .vhome-stat { background: var(--vs1); padding: 2rem; text-align: center; }
  .vhome-stat-num {
    display: block; font-size: clamp(2rem, 4vw, 3rem); font-weight: 900;
    color: var(--vp); line-height: 1; margin-bottom: 0.5rem;
  }
  .vhome-stat-label { font-size: 0.8125rem; color: var(--vt3); line-height: 1.4; }

  /* ─ CQ CARD (live demo) ─ */
  .vhome-cq-outer {
    container-type: inline-size;
    resize: horizontal; overflow: auto;
    min-width: 260px; max-width: 100%; width: 400px;
    border: 1px dashed var(--vborder-dim); border-radius: 1rem;
    padding: 1px;
  }
  .vhome-cq-card {
    background: var(--vs2); border-radius: 1rem; overflow: hidden;
    border: 1px solid var(--vborder);
  }
  .vhome-cq-inner { display: grid; grid-template-columns: 1fr; }
  .vhome-cq-img {
    height: 120px; background: var(--vp-subtle); border-bottom: 1px solid var(--vborder);
    display: flex; align-items: center; justify-content: center;
    font-size: 2rem; color: var(--vp);
  }
  .vhome-cq-body { padding: 1.25rem; }
  .vhome-cq-tag {
    font-size: 0.65rem; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase;
    color: var(--vp); display: block; margin-bottom: 0.375rem;
  }
  .vhome-cq-title { font-size: 1rem; font-weight: 700; margin-bottom: 0.5rem; line-height: 1.3; color: var(--vt1); }
  .vhome-cq-desc { font-size: 0.8125rem; color: var(--vt2); line-height: 1.6; }
  .vhome-cq-footer {
    background: var(--vs3); border-top: 1px solid var(--vborder);
    padding: 0.5rem 0.75rem; font-size: 0.7rem; color: var(--vt3);
    text-align: center; font-family: 'Cascadia Code', Consolas, monospace;
    transition: color var(--dur) var(--ease);
  }
  @container (min-width: 450px) {
    .vhome-cq-inner { grid-template-columns: 180px 1fr; }
    .vhome-cq-img { height: 100%; min-height: 160px; border-bottom: none; border-right: 1px solid var(--vborder); }
    .vhome-cq-footer { color: oklch(65% 0.2 162); }
  }

  /* ─ PALETTE SWATCHES ─ */
  .vhome-swatches { display: grid; grid-template-columns: repeat(4, 1fr); gap: 0.5rem; }
  @media (max-width: 640px) { .vhome-swatches { grid-template-columns: repeat(2, 1fr); } }
  .vhome-swatch { border-radius: 0.5rem; overflow: hidden; border: 1px solid var(--vborder-dim); }
  .vhome-swatch-color { height: 56px; transition: all var(--dur) var(--ease); }
  .vhome-swatch-info { padding: 0.375rem 0.5rem; background: var(--vs2); }
  .vhome-swatch-name { font-size: 0.7rem; font-weight: 600; color: var(--vt2); display: block; }
  .vhome-swatch-var { font-size: 0.62rem; color: var(--vt3); font-family: 'Cascadia Code', Consolas, monospace; }

  /* ─ FORM DEMO (CSS-only validation) ─ */
  .vhome-field { display: grid; gap: 0.375rem; }
  .vhome-field label { font-size: 0.875rem; font-weight: 500; color: var(--vt2); transition: color var(--dur) var(--ease); }
  .vhome-input {
    background: var(--vs2); border: 1.5px solid var(--vborder);
    border-radius: 0.5rem; padding: 0.625rem 0.875rem;
    font-size: 0.875rem; color: var(--vt1); width: 100%;
    transition: border-color var(--dur) var(--ease), box-shadow var(--dur) var(--ease);
    outline: none; font-family: inherit;
  }
  .vhome-input::placeholder { color: var(--vt3); }
  .vhome-input:focus {
    border-color: var(--vp);
    box-shadow: 0 0 0 3px var(--vp-glow);
    background: var(--vs1);
  }
  .vhome-field-hint { font-size: 0.75rem; color: var(--vt3); }
  .vhome-field-error { font-size: 0.75rem; color: oklch(65% 0.22 25); display: none; }
  .vhome-field-ok    { font-size: 0.75rem; color: oklch(70% 0.2 162);  display: none; }
  .vhome-field:has(.vhome-input:invalid:not(:placeholder-shown)) label { color: oklch(65% 0.22 25); }
  .vhome-field:has(.vhome-input:invalid:not(:placeholder-shown)) .vhome-input { border-color: oklch(65% 0.22 25); box-shadow: 0 0 0 3px oklch(65% 0.22 25 / 0.12); }
  .vhome-field:has(.vhome-input:invalid:not(:placeholder-shown)) .vhome-field-error { display: block; }
  .vhome-field:has(.vhome-input:invalid:not(:placeholder-shown)) .vhome-field-hint  { display: none; }
  .vhome-field:has(.vhome-input:valid:not(:placeholder-shown)) label { color: oklch(70% 0.2 162); }
  .vhome-field:has(.vhome-input:valid:not(:placeholder-shown)) .vhome-input { border-color: oklch(70% 0.2 162); box-shadow: 0 0 0 3px oklch(70% 0.2 162 / 0.12); }
  .vhome-field:has(.vhome-input:valid:not(:placeholder-shown)) .vhome-field-ok   { display: block; }
  .vhome-field:has(.vhome-input:valid:not(:placeholder-shown)) .vhome-field-hint { display: none; }

  /* ─ SCOPE THEME DEMO ─ */
  .vhome-theme-btns { display: flex; flex-wrap: wrap; gap: 0.5rem; margin-bottom: 1.5rem; }
  .vhome-theme-btn {
    padding: 0.375rem 0.875rem; border-radius: 9999px;
    border: 1px solid var(--vborder); background: var(--vs2);
    color: var(--vt2); font-size: 0.8125rem; font-weight: 500; cursor: pointer;
    transition: all var(--dur) var(--ease);
  }
  .vhome-theme-btn:hover, .vhome-theme-btn[data-active="true"] {
    background: var(--vp-subtle); border-color: var(--vp-glow); color: var(--vp);
  }
  .vhome-scope-zone {
    background: var(--vs1); border: 1px solid var(--vborder);
    border-radius: 1rem; padding: 1.5rem;
    transition: background var(--dur) var(--ease), border-color var(--dur) var(--ease);
  }
  .vhome-scope-label {
    font-size: 0.7rem; font-weight: 700; text-transform: uppercase;
    letter-spacing: 0.1em; color: var(--vp); margin-bottom: 1rem;
    display: flex; align-items: center; gap: 0.5rem;
  }
  .vhome-scope-label::before {
    content: ''; width: 8px; height: 8px; border-radius: 50%; background: var(--vp);
    transition: background var(--dur) var(--ease);
  }
  .vhome-scope-cards {
    display: grid; grid-template-columns: repeat(auto-fill, minmax(160px, 1fr)); gap: 0.75rem;
    margin-bottom: 1rem;
  }
  .vhome-scope-card {
    background: var(--vs2); border: 1px solid var(--vborder);
    border-radius: 0.625rem; padding: 1rem;
    transition: all var(--dur) var(--ease);
  }
  .vhome-scope-card-icon {
    width: 40px; height: 40px; border-radius: 0.5rem;
    background: var(--vp-subtle); border: 1px solid var(--vp-glow);
    display: flex; align-items: center; justify-content: center;
    font-size: 1.125rem; margin-bottom: 0.625rem;
    color: var(--vp); transition: all var(--dur) var(--ease);
  }
  .vhome-scope-card-title { font-size: 0.875rem; font-weight: 600; margin-bottom: 0.25rem; color: var(--vt1); }
  .vhome-scope-card-desc { font-size: 0.75rem; color: var(--vt3); line-height: 1.4; }

  /* ─ DNA-TOKEN BUTTONS (scope demo — must react to theme changes) ─ */
  .vhome-btn-primary {
    background: var(--vp); color: oklch(12% 0.02 var(--vel-dna-hue));
    border: none; border-radius: 0.5rem; padding: 0.625rem 1.25rem;
    font-size: 0.875rem; font-weight: 600; cursor: pointer; font-family: inherit;
    transition: all var(--dur) var(--ease);
  }
  .vhome-btn-primary:hover { background: var(--vp-light); transform: translateY(-1px); }
  .vhome-btn-outline {
    background: transparent; color: var(--vp);
    border: 1px solid var(--vp-glow); border-radius: 0.5rem; padding: 0.625rem 1.25rem;
    font-size: 0.875rem; font-weight: 500; cursor: pointer; font-family: inherit;
    transition: all var(--dur) var(--ease);
  }
  .vhome-btn-outline:hover { border-color: var(--vp); background: var(--vp-subtle); }

  /* ─ CTA BUTTONS (hero area — DNA-reactive) ─ */
  .vhome-cta-primary {
    font-size: 0.9375rem; font-weight: 700; padding: 0.75rem 1.75rem;
    border-radius: 0.625rem; background: var(--vp);
    color: oklch(12% 0.02 var(--vel-dna-hue));
    text-decoration: none; border: none; cursor: pointer;
    transition: all var(--dur) var(--ease); display: inline-block;
  }
  .vhome-cta-primary:hover { background: var(--vp-light); transform: translateY(-1px); }
  .vhome-cta-secondary {
    font-size: 0.9375rem; font-weight: 600; padding: 0.75rem 1.75rem;
    border-radius: 0.625rem; background: var(--vs2); color: var(--vt1);
    text-decoration: none; border: 1px solid var(--vborder); cursor: pointer;
    transition: all var(--dur) var(--ease); display: inline-block;
  }
  .vhome-cta-secondary:hover { border-color: var(--vp); color: var(--vp); }
  .vhome-cta-ghost {
    font-size: 0.9375rem; font-weight: 500; padding: 0.75rem 1.25rem;
    border-radius: 0.625rem; background: transparent; color: var(--vt2);
    text-decoration: none; border: 1px solid var(--vborder); cursor: pointer;
    transition: all var(--dur) var(--ease); display: inline-block;
  }
  .vhome-cta-ghost:hover { color: var(--vt1); }

  /* ─ DNA LIVE PREVIEW STRIP ─ */
  .vhome-dna-live {
    display: flex; align-items: center; gap: 0.75rem; flex-wrap: wrap;
    justify-content: center; margin-top: 1rem;
  }
  .vhome-dna-live-badge {
    font-size: 0.7rem; font-weight: 700; letter-spacing: 0.06em;
    padding: 0.25rem 0.7rem; border-radius: 9999px;
    background: var(--vp-subtle); color: var(--vp); border: 1px solid var(--vp-glow);
  }

  /* ─ SKELETON SHIMMER (components demo) ─ */
  .vhome-skeleton-demo {
    background: linear-gradient(90deg, var(--vs3) 25%, var(--vs4) 50%, var(--vs3) 75%);
    background-size: 200% 100%;
    animation: vhome-shimmer 1.6s ease-in-out infinite;
  }
  @keyframes vhome-shimmer { 0% { background-position: 200% 0 } 100% { background-position: -200% 0 } }

  /* ─ CSS STATE MACHINE TABS ─ */
  .vhome-tabs-demo {
    background: var(--vs2); border: 1px solid var(--vborder);
    border-radius: 1rem; overflow: hidden;
  }
  .vhome-tabs-demo input[type="radio"] {
    position: absolute; opacity: 0; pointer-events: none; width: 0; height: 0;
  }
  .vhome-tabs-nav {
    display: flex; background: var(--vs3); border-bottom: 1px solid var(--vborder); gap: 0;
  }
  .vhome-tabs-nav label {
    padding: 0.75rem 1.5rem; font-size: 0.875rem; font-weight: 500; color: var(--vt3);
    cursor: pointer; border-bottom: 2px solid transparent;
    transition: all var(--dur) var(--ease); user-select: none; position: relative; bottom: -1px;
  }
  .vhome-tabs-nav label:hover { color: var(--vt1); }
  .vhome-tab-panels { padding: 1.5rem; }
  .vhome-tab-panel { display: none; animation: vhome-fade-up 0.25s var(--ease) both; }
  .vhome-tab-panel h3 { font-size: 1.1rem; font-weight: 700; margin-bottom: 0.75rem; color: var(--vt1); }
  .vhome-tab-panel > p { color: var(--vt2); font-size: 0.875rem; line-height: 1.7; margin-bottom: 1rem; }
  .vhome-tab-panel code { font-family: 'Cascadia Code', Consolas, monospace; font-size: 0.875em; color: var(--vp-light); background: var(--vp-subtle); padding: 0.1em 0.4em; border-radius: 0.25rem; }
  @keyframes vhome-fade-up { from { opacity: 0; transform: translateY(8px); } to { opacity: 1; transform: translateY(0); } }
  #vel-home .vhome-tabs-demo:has(#h-tab-1:checked) label[for="h-tab-1"],
  #vel-home .vhome-tabs-demo:has(#h-tab-2:checked) label[for="h-tab-2"],
  #vel-home .vhome-tabs-demo:has(#h-tab-3:checked) label[for="h-tab-3"] {
    color: var(--vp); border-bottom-color: var(--vp);
  }
  #vel-home .vhome-tabs-demo:has(#h-tab-1:checked) #h-panel-1,
  #vel-home .vhome-tabs-demo:has(#h-tab-2:checked) #h-panel-2,
  #vel-home .vhome-tabs-demo:has(#h-tab-3:checked) #h-panel-3 { display: block; }
  .vhome-mini-features { display: grid; grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); gap: 0.75rem; margin-top: 1rem; }
  .vhome-mini-feature { display: flex; align-items: flex-start; gap: 0.625rem; padding: 0.75rem; background: var(--vs3); border: 1px solid var(--vborder); border-radius: 0.625rem; }
  .vhome-mini-feature-icon { width: 28px; height: 28px; border-radius: 0.375rem; background: var(--vp-subtle); border: 1px solid var(--vp-glow); display: flex; align-items: center; justify-content: center; font-size: 0.875rem; flex-shrink: 0; }
  .vhome-mini-feature-title { font-size: 0.875rem; font-weight: 600; color: var(--vt1); margin-bottom: 0.125rem; }
  .vhome-mini-feature-desc { font-size: 0.72rem; color: var(--vt3); line-height: 1.4; }
  .vhome-compare-row { display: grid; grid-template-columns: 1fr 1fr; gap: 0.75rem; margin-bottom: 0.75rem; }
  @media (max-width: 640px) { .vhome-compare-row { grid-template-columns: 1fr; } }
  .vhome-compare-cell { border-radius: 0.5rem; overflow: hidden; border: 1px solid var(--vborder); }
  .vhome-compare-header { padding: 0.5rem 0.75rem; font-size: 0.7rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; }
  .vhome-compare-bad { background: oklch(15% 0.05 0); color: oklch(60% 0.2 20); border-bottom: 1px solid oklch(25% 0.08 0); }
  .vhome-compare-good { background: var(--vp-subtle); color: var(--vp); border-bottom: 1px solid var(--vp-glow); }
  .vhome-compare-cell pre { padding: 0.75rem; font-size: 0.72rem; line-height: 1.6; color: var(--vt2); background: var(--vs2); font-family: 'Cascadia Code', Consolas, monospace; white-space: pre-wrap; margin: 0; }

  /* ─ SECTION LAYOUT ─ */
  .vhome-section {
    padding: clamp(3rem, 6vw, 5rem) clamp(1rem, 4vw, 3rem);
    border-bottom: 1px solid var(--vborder-dim);
  }
  .vhome-wrap { max-width: 1100px; margin: 0 auto; }
  .vhome-section-eyebrow {
    font-size: 0.7rem; font-weight: 800; letter-spacing: 0.15em;
    text-transform: uppercase; color: var(--vp); margin-bottom: 0.75rem; display: block;
  }
  .vhome-section-desc {
    font-size: 1.0625rem; color: var(--vt2); max-width: 580px; line-height: 1.75;
    margin-bottom: 2.5rem;
  }
  .vhome-section-desc code {
    font-family: 'Cascadia Code', Consolas, monospace;
    font-size: 0.875em; color: var(--vp-light);
    background: var(--vp-subtle); padding: 0.1em 0.4em; border-radius: 0.25rem;
  }

  /* ─ HERO ─ */
  .vhome-hero {
    text-align: center;
    padding: clamp(4rem, 10vw, 8rem) clamp(1rem, 4vw, 3rem) clamp(3rem, 6vw, 5rem);
    border-bottom: 1px solid var(--vborder-dim);
    position: relative; overflow: hidden;
  }
  .vhome-hero::before {
    content: '';
    position: absolute; inset: 0;
    background: radial-gradient(ellipse 70% 50% at 50% -10%, var(--vp-glow), transparent 65%);
    pointer-events: none;
  }
  .vhome-hero-eyebrow {
    display: inline-flex; align-items: center; gap: 0.5rem;
    font-size: 0.7rem; font-weight: 700; letter-spacing: 0.12em; text-transform: uppercase;
    color: var(--vp); background: var(--vp-subtle);
    border: 1px solid var(--vp-glow); border-radius: 9999px;
    padding: 0.35rem 1rem; margin-bottom: 1.5rem;
  }
  .vhome-hero-eyebrow::before {
    content: ''; width: 6px; height: 6px; border-radius: 50%; background: var(--vp);
  }
  .vhome-hero h1 {
    font-size: clamp(2.5rem, 6vw, 4.5rem); font-weight: 900;
    letter-spacing: -0.03em; line-height: 1.05;
    margin: 0 0 1.25rem;
    color: var(--vt1);
  }
  .vhome-hero h1 em { font-style: normal; color: var(--vp); }
  .vhome-hero-sub {
    font-size: clamp(1rem, 2vw, 1.25rem); color: var(--vt2);
    max-width: 580px; margin: 0 auto 2.5rem; line-height: 1.7;
  }
  .vhome-hero-ctas {
    display: flex; gap: 0.75rem; justify-content: center; flex-wrap: wrap;
    margin-bottom: 3rem;
  }

  /* ─ NAV ─ */
  .vhome-nav {
    position: sticky; top: 0; z-index: 100;
    height: 56px;
    display: flex; align-items: center; justify-content: space-between;
    padding: 0 clamp(1rem, 4vw, 3rem);
    background: var(--vs0);
    border-bottom: 1px solid var(--vborder);
    backdrop-filter: blur(12px);
  }
  .vhome-nav-link {
    font-size: 0.875rem; font-weight: 500; color: var(--vt2);
    text-decoration: none;
    transition: color var(--dur) var(--ease);
  }
  .vhome-nav-link:hover { color: var(--vt1); }

  /* ─ CTA SECTION ─ */
  .vhome-cta-section {
    text-align: center;
    padding: clamp(4rem, 8vw, 7rem) clamp(1rem, 4vw, 3rem);
    position: relative; overflow: hidden;
  }
  .vhome-cta-section::before {
    content: '';
    position: absolute; inset: 0;
    background: radial-gradient(ellipse 60% 80% at 50% 100%, var(--vp-glow), transparent 70%);
    pointer-events: none;
  }

  /* ─ FOOTER BADGE ─ */
  .vhome-footer-badge {
    display: inline-flex; align-items: center;
    font-size: 0.7rem; font-weight: 500; letter-spacing: 0.03em;
    color: var(--vp); border: 1px solid var(--vp-glow);
    background: var(--vp-subtle); border-radius: 9999px; padding: 0.35rem 1rem;
  }

  /* ─ FOOTER ─ */
  .vhome-footer {
    padding: 2rem clamp(1rem, 4vw, 3rem);
    border-top: 1px solid var(--vborder-dim);
  }
  .vhome-footer-link { font-size: 0.8125rem; color: var(--vt3); text-decoration: none; transition: color var(--dur) var(--ease); }
  .vhome-footer-link:hover { color: var(--vt1); }

  /* ─ COMPONENT SHOWCASE WRAPPERS ─ */
  .vhome-showcase-header {
    background: var(--vs2); border-bottom: 1px solid var(--vborder);
    padding: 0.625rem 1rem;
    font-size: 0.7rem; font-weight: 700; text-transform: uppercase;
    letter-spacing: 0.08em; color: var(--vt3);
  }
`;function l({filename:e,children:r}){let[o,n]=(0,s.useState)(!1),t=(0,s.useRef)(null),l=(0,s.useCallback)(()=>{let e=t.current?.textContent??r.replace(/<[^>]+>/g,"");navigator.clipboard.writeText(e).then(()=>{n(!0),setTimeout(()=>n(!1),2e3)}).catch(()=>{let a=document.createElement("textarea");a.value=e,a.style.cssText="position:fixed;left:0;top:0;width:1px;height:1px;opacity:0.01",document.body.appendChild(a),a.focus(),a.select(),document.execCommand("copy"),document.body.removeChild(a),n(!0),setTimeout(()=>n(!1),2e3)})},[r]);return(0,a.jsxs)("div",{className:"vhome-terminal",children:[(0,a.jsxs)("div",{className:"vhome-terminal-titlebar",children:[(0,a.jsx)("span",{className:"vhome-terminal-title",children:e}),(0,a.jsxs)("div",{className:"vhome-terminal-controls",children:[(0,a.jsx)("button",{className:"vhome-terminal-ctrl",children:"─"}),(0,a.jsx)("button",{className:"vhome-terminal-ctrl",children:"□"}),(0,a.jsx)("button",{className:"vhome-terminal-ctrl close",children:"✕"})]})]}),(0,a.jsx)("div",{className:"vhome-terminal-action-bar",children:(0,a.jsx)("button",{className:`vhome-terminal-copy ${o?"copied":"idle"}`,onClick:l,children:o?"✓ Copied":"Copy"})}),(0,a.jsx)("pre",{ref:t,className:"vhome-terminal-code",children:(0,a.jsx)("code",{dangerouslySetInnerHTML:{__html:r}})})]})}function i(){let[e,r]=(0,s.useState)("default");return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("div",{className:"vhome-theme-btns",children:["default","ocean","forest","ember","aurora","gold"].map(s=>(0,a.jsx)("button",{className:"vhome-theme-btn","data-active":e===s?"true":"false",onClick:()=>r(s),children:s.charAt(0).toUpperCase()+s.slice(1)},s))}),(0,a.jsxs)("div",{className:"vhome-scope-zone","data-vel-theme":"default"===e?void 0:e,children:[(0,a.jsx)("div",{className:"vhome-scope-label",children:"default"===e?"data-vel-theme — default":`data-vel-theme="${e}"`}),(0,a.jsx)("div",{className:"vhome-scope-cards",children:[{icon:"◈",title:"Token Cascade",desc:"All colors inherit from theme"},{icon:"⬡",title:"Zero JS Logic",desc:"One attribute, full retheme"},{icon:"↬",title:"Nestable",desc:"Themes can nest inside themes"},{icon:"⟁",title:"Instant",desc:"CSS transitions handle everything"}].map(e=>(0,a.jsxs)("div",{className:"vhome-scope-card",children:[(0,a.jsx)("div",{className:"vhome-scope-card-icon",children:e.icon}),(0,a.jsx)("div",{className:"vhome-scope-card-title",children:e.title}),(0,a.jsx)("div",{className:"vhome-scope-card-desc",children:e.desc})]},e.title))}),(0,a.jsxs)("div",{style:{display:"flex",gap:"0.75rem"},children:[(0,a.jsx)("button",{className:"vhome-btn-primary",children:"Themed Button"}),(0,a.jsx)("button",{className:"vhome-btn-outline",children:"Secondary"})]})]})]})}function c(){let[e,c]=(0,s.useState)(258),d=(0,s.useCallback)(e=>{let a=Number(e.target.value);c(a),document.getElementById("vel-home")?.style.setProperty("--vel-dna-hue",String(a))},[]);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("style",{dangerouslySetInnerHTML:{__html:t}}),(0,a.jsxs)("main",{id:"vel-home",style:{"--vel-dna-hue":"258"},children:[(0,a.jsxs)("nav",{className:"vhome-nav",children:[(0,a.jsxs)("div",{className:"vel-flex vel-items-center vel-gap-4",children:[(0,a.jsx)("img",{src:"/veloracss/velora_actual.png",alt:"VeloraCSS",style:{height:"26px",width:"auto"}}),(0,a.jsx)("span",{className:"vel-badge vel-badge-primary",children:"v0.3.0"})]}),(0,a.jsxs)("div",{className:"vel-flex vel-items-center vel-gap-6",children:[(0,a.jsx)(r.default,{href:n,className:"vhome-nav-link",children:"Docs"}),(0,a.jsx)("a",{href:o,target:"_blank",rel:"noopener noreferrer",className:"vhome-nav-link",children:"Playground"}),(0,a.jsx)("a",{href:"https://github.com/VeloraX/veloracss",target:"_blank",rel:"noopener noreferrer",className:"vhome-nav-link",children:"GitHub"}),(0,a.jsx)("a",{href:o,target:"_blank",rel:"noopener noreferrer",className:"vel-btn vel-btn-primary vel-btn-sm",children:"Try it live →"})]})]}),(0,a.jsxs)("section",{className:"vhome-hero",children:[(0,a.jsx)("div",{className:"vhome-hero-eyebrow",children:"AI-designed · Human-shipped · Built for the future"}),(0,a.jsxs)("h1",{children:["CSS that ",(0,a.jsx)("em",{children:"thinks"}),(0,a.jsx)("br",{}),"in context."]}),(0,a.jsx)("p",{className:"vhome-hero-sub",children:"VeloraCSS delivers six capabilities no other utility framework attempts — from a color system driven by a single number, to components that adapt to their container without a single media query."}),(0,a.jsxs)("div",{className:"vhome-hero-ctas",children:[(0,a.jsx)(r.default,{href:n,className:"vhome-cta-primary",children:"Read the Docs"}),(0,a.jsx)("a",{href:o,target:"_blank",rel:"noopener noreferrer",className:"vhome-cta-secondary",children:"Open Playground →"}),(0,a.jsx)("a",{href:"https://github.com/VeloraX/veloracss",target:"_blank",rel:"noopener noreferrer",className:"vhome-cta-ghost",children:"GitHub"})]}),(0,a.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center"},children:[(0,a.jsxs)("div",{className:"vhome-dna-strip",children:[(0,a.jsx)("span",{className:"vhome-dna-label",children:"Color DNA"}),(0,a.jsx)("div",{className:"vhome-dna-swatch"}),(0,a.jsx)("input",{type:"range",min:"0",max:"360",value:e,className:"vhome-dna-slider",onChange:d}),(0,a.jsxs)("span",{className:"vhome-dna-val",children:[e,"°"]})]}),(0,a.jsxs)("p",{className:"vhome-dna-note",children:["One number. Every color on this page derives from it via ",(0,a.jsx)("code",{style:{fontFamily:"Cascadia Code, Consolas, monospace",color:"inherit"},children:"oklch()"}),"."]}),(0,a.jsxs)("div",{className:"vhome-dna-live",children:[(0,a.jsx)("div",{style:{width:"26px",height:"26px",borderRadius:"50%",background:"var(--vp)",flexShrink:0,transition:"background 0.2s"}}),(0,a.jsx)("button",{className:"vhome-btn-primary",style:{padding:"0.3rem 0.875rem",fontSize:"0.78rem"},children:"Button"}),(0,a.jsx)("span",{className:"vhome-dna-live-badge",children:"Badge"}),(0,a.jsx)("div",{style:{width:"72px",height:"3px",borderRadius:"2px",background:"var(--vp)",flexShrink:0,transition:"background 0.2s"}}),(0,a.jsx)("div",{style:{width:"26px",height:"26px",borderRadius:"0.375rem",background:"var(--vp-subtle)",border:"1.5px solid var(--vp)",flexShrink:0,transition:"all 0.2s"}}),(0,a.jsx)("span",{style:{fontSize:"0.65rem",color:"var(--vt3)",whiteSpace:"nowrap"},children:"← all react to the hue"})]})]})]}),(0,a.jsx)("section",{className:"vhome-section",children:(0,a.jsxs)("div",{className:"vhome-wrap",children:[(0,a.jsx)("span",{className:"vhome-section-eyebrow",children:"What makes Velora different"}),(0,a.jsxs)("h2",{className:"vel-text-4xl vel-font-extrabold vel-tracking-tight",style:{marginBottom:"1rem",lineHeight:1.15},children:["Six things no other",(0,a.jsx)("br",{}),"framework does."]}),(0,a.jsx)("div",{className:"vhome-innovations",children:[{num:"01",icon:"◈",title:"Color Genetics",desc:"One hue drives 50+ derived colors via oklch(). Perceptually uniform, mathematically coherent. Change a single number — the entire UI recolors.",tag:"--vel-dna-hue: 258"},{num:"02",icon:"⬡",title:"Container Intelligence",desc:"Components respond to their container, not the viewport. A card in a sidebar stacks; the same card in a wide area goes horizontal. Zero media queries.",tag:"@container (min-width: 460px)"},{num:"03",icon:"⟁",title:"CSS State Machine",desc:"Tabs, toggles, and accordions powered by :has() + radio inputs. State is tracked by the browser. No event listeners. No DOM manipulation.",tag:".tabs:has(#t1:checked) #panel-1"},{num:"04",icon:"↬",title:"Scope Theming",desc:"Set data-vel-theme on any element and every child instantly inherits a new color universe. Themes can nest. One attribute, full cascade.",tag:'data-vel-theme="ocean"'},{num:"05",icon:"◉",title:"Smart Forms",desc:"CSS reads browser validity state via :has(:invalid). Labels change color, errors appear, borders react — all without JavaScript.",tag:".field:has(input:invalid)"},{num:"06",icon:"⧖",title:"Fluid Scale",desc:"Every spacing and type token uses clamp(). Values interpolate continuously across all viewport widths. No breakpoints. No jumps.",tag:"clamp(1rem, 0.8rem + 1vw, 1.5rem)"}].map(e=>(0,a.jsxs)("div",{className:"vhome-innovation",children:[(0,a.jsx)("span",{className:"vhome-innovation-num",children:e.num}),(0,a.jsx)("div",{className:"vhome-innovation-icon",children:e.icon}),(0,a.jsx)("h3",{children:e.title}),(0,a.jsx)("p",{children:e.desc}),(0,a.jsx)("span",{className:"vhome-innovation-tag",children:e.tag})]},e.num))})]})}),(0,a.jsx)("section",{className:"vhome-section",children:(0,a.jsxs)("div",{className:"vhome-wrap",children:[(0,a.jsx)("span",{className:"vhome-section-eyebrow",children:"Rich component library"}),(0,a.jsxs)("h2",{className:"vel-text-4xl vel-font-extrabold vel-tracking-tight",style:{marginBottom:"1rem",lineHeight:1.15},children:["29 components.",(0,a.jsx)("br",{}),"Real ",(0,a.jsx)("code",{style:{fontFamily:"Cascadia Code, Consolas, monospace",fontSize:"0.85em",color:"var(--vp-light)",background:"var(--vp-subtle)",padding:"0.1em 0.4em",borderRadius:"0.25rem"},children:"vel-"})," classes."]}),(0,a.jsx)("p",{className:"vhome-section-desc",children:"Every component ships as a framework class — not custom CSS, not inline styles. Open DevTools and inspect any element below."}),(0,a.jsxs)("div",{className:"vel-card vel-mb-6",children:[(0,a.jsx)("div",{className:"vhome-showcase-header",children:"vel-btn — Button variants"}),(0,a.jsxs)("div",{className:"vel-card-body vel-flex vel-flex-wrap vel-gap-3",children:[(0,a.jsx)("button",{className:"vel-btn vel-btn-primary",children:"Primary"}),(0,a.jsx)("button",{className:"vel-btn vel-btn-secondary",children:"Secondary"}),(0,a.jsx)("button",{className:"vel-btn vel-btn-success",children:"Success"}),(0,a.jsx)("button",{className:"vel-btn vel-btn-danger",children:"Danger"}),(0,a.jsx)("button",{className:"vel-btn vel-btn-warning",children:"Warning"}),(0,a.jsx)("button",{className:"vel-btn vel-btn-ghost",children:"Ghost"})]}),(0,a.jsxs)("div",{className:"vel-card-footer vel-flex vel-flex-wrap vel-gap-3",children:[(0,a.jsx)("button",{className:"vel-btn vel-btn-outline-primary",children:"Outline Primary"}),(0,a.jsx)("button",{className:"vel-btn vel-btn-outline-success",children:"Outline Success"}),(0,a.jsx)("button",{className:"vel-btn vel-btn-outline-danger",children:"Outline Danger"}),(0,a.jsx)("button",{className:"vel-btn vel-btn-xs vel-btn-primary",children:"xs"}),(0,a.jsx)("button",{className:"vel-btn vel-btn-sm vel-btn-primary",children:"sm"}),(0,a.jsx)("button",{className:"vel-btn vel-btn-lg vel-btn-primary",children:"lg"}),(0,a.jsx)("button",{className:"vel-btn vel-btn-primary",disabled:!0,children:"Disabled"})]})]}),(0,a.jsxs)("div",{className:"vel-grid vel-grid-cols-2 vel-gap-6 vel-mb-6",style:{gridTemplateColumns:"repeat(auto-fit, minmax(300px, 1fr))"},children:[(0,a.jsxs)("div",{className:"vel-card",children:[(0,a.jsx)("div",{className:"vhome-showcase-header",children:"vel-badge — Badge variants"}),(0,a.jsxs)("div",{className:"vel-card-body vel-flex vel-flex-wrap vel-gap-2",children:[(0,a.jsx)("span",{className:"vel-badge vel-badge-primary vel-badge-dot",children:"Primary"}),(0,a.jsx)("span",{className:"vel-badge vel-badge-success vel-badge-dot",children:"Success"}),(0,a.jsx)("span",{className:"vel-badge vel-badge-danger vel-badge-dot",children:"Danger"}),(0,a.jsx)("span",{className:"vel-badge vel-badge-warning vel-badge-dot",children:"Warning"}),(0,a.jsx)("span",{className:"vel-badge vel-badge-info vel-badge-dot",children:"Info"}),(0,a.jsx)("span",{className:"vel-badge vel-badge-neutral",children:"Neutral"}),(0,a.jsx)("span",{className:"vel-badge vel-badge-solid-primary",children:"Solid"}),(0,a.jsx)("span",{className:"vel-badge vel-badge-sm vel-badge-primary",children:"Small"}),(0,a.jsx)("span",{className:"vel-badge vel-badge-lg vel-badge-primary",children:"Large"})]})]}),(0,a.jsxs)("div",{className:"vel-card",children:[(0,a.jsx)("div",{className:"vhome-showcase-header",children:"vel-alert — Alert variants"}),(0,a.jsxs)("div",{className:"vel-card-body",style:{display:"grid",gap:"0.625rem"},children:[(0,a.jsxs)("div",{className:"vel-alert vel-alert-primary",children:[(0,a.jsx)("span",{className:"vel-alert-title",children:"Info"}),"Something worth knowing about your project."]}),(0,a.jsxs)("div",{className:"vel-alert vel-alert-success",children:[(0,a.jsx)("span",{className:"vel-alert-title",children:"Success"}),"Your changes were saved successfully."]}),(0,a.jsxs)("div",{className:"vel-alert vel-alert-danger",children:[(0,a.jsx)("span",{className:"vel-alert-title",children:"Error"}),"Something went wrong. Please try again."]})]})]})]}),(0,a.jsxs)("div",{className:"vel-grid vel-gap-6 vel-mb-6",style:{gridTemplateColumns:"repeat(auto-fit, minmax(260px, 1fr))"},children:[(0,a.jsxs)("div",{className:"vel-card vel-card-hover",children:[(0,a.jsx)("div",{className:"vel-card-header",children:"vel-card"}),(0,a.jsxs)("div",{className:"vel-card-body",children:[(0,a.jsx)("p",{className:"vel-text-sm",style:{color:"var(--vel-color-muted)",lineHeight:1.6,marginBottom:"1rem"},children:"Default card with hover lift. Uses framework border, shadow, and surface tokens."}),(0,a.jsx)("button",{className:"vel-btn vel-btn-primary vel-btn-sm",children:"Action"})]})]}),(0,a.jsxs)("div",{className:"vel-card vel-card-elevated vel-card-hover",children:[(0,a.jsx)("div",{className:"vel-card-header",children:"vel-card-elevated"}),(0,a.jsxs)("div",{className:"vel-card-body",children:[(0,a.jsx)("p",{className:"vel-text-sm",style:{color:"var(--vel-color-muted)",lineHeight:1.6,marginBottom:"1rem"},children:"Elevated shadow variant. Borderless, deeper drop shadow for prominent content."}),(0,a.jsx)("button",{className:"vel-btn vel-btn-outline-primary vel-btn-sm",children:"Learn more"})]})]}),(0,a.jsxs)("div",{className:"vel-card vel-card-primary vel-card-hover",children:[(0,a.jsx)("div",{className:"vel-card-header",children:"vel-card-primary"}),(0,a.jsxs)("div",{className:"vel-card-body",children:[(0,a.jsx)("p",{className:"vel-text-sm",style:{color:"var(--vel-color-muted)",lineHeight:1.6,marginBottom:"1rem"},children:"Brand-tinted surface with primary glow. Perfect for featured or highlighted items."}),(0,a.jsx)("button",{className:"vel-btn vel-btn-primary vel-btn-sm",children:"Get started"})]})]})]}),(0,a.jsxs)("div",{className:"vel-card vel-mb-6",children:[(0,a.jsx)("div",{className:"vhome-showcase-header",children:"vel-skeleton — Loading states"}),(0,a.jsxs)("div",{className:"vel-card-body vel-flex vel-gap-4 vel-items-center",children:[(0,a.jsx)("div",{className:"vhome-skeleton-demo",style:{width:"48px",height:"48px",borderRadius:"50%",flexShrink:0}}),(0,a.jsxs)("div",{className:"vel-flex vel-flex-col vel-gap-2 vel-flex-1",children:[(0,a.jsx)("div",{className:"vhome-skeleton-demo",style:{height:"12px",borderRadius:"6px",width:"60%"}}),(0,a.jsx)("div",{className:"vhome-skeleton-demo",style:{height:"11px",borderRadius:"5px",width:"40%"}})]}),(0,a.jsx)("div",{className:"vhome-skeleton-demo",style:{height:"36px",borderRadius:"0.5rem",width:"100px",flexShrink:0}})]})]})]})}),(0,a.jsx)("section",{className:"vhome-section",children:(0,a.jsx)("div",{className:"vhome-wrap",children:(0,a.jsxs)("div",{className:"vhome-split",children:[(0,a.jsxs)("div",{children:[(0,a.jsx)("span",{className:"vhome-section-eyebrow",children:"Innovation 01"}),(0,a.jsxs)("h2",{className:"vel-text-4xl vel-font-extrabold vel-tracking-tight",style:{marginBottom:"1rem",lineHeight:1.15},children:["One number.",(0,a.jsx)("br",{}),"An entire universe."]}),(0,a.jsxs)("p",{className:"vhome-section-desc",children:["Other frameworks ship 1,540 hardcoded swatches you can't change without config. VeloraCSS generates every color mathematically from",(0,a.jsx)("code",{children:"--vel-dna-hue"})," using ",(0,a.jsx)("code",{children:"oklch()"}),", the only perceptually uniform color space. Watch the swatches below react as you slide."]}),(0,a.jsx)(l,{filename:"tokens.css",children:`<span class="tc-comment">/* The entire palette from one variable */</span>
<span class="tc-prop">--vel-dna-hue</span>: <span class="tc-num">258</span>;

<span class="tc-comment">/* All colors are derived — nothing hardcoded */</span>
<span class="tc-prop">--vel-color-primary</span>:  <span class="tc-fn">oklch</span>(<span class="tc-num">65% 0.21</span> <span class="tc-fn">var</span>(<span class="tc-prop">--vel-dna-hue</span>));
<span class="tc-prop">--vel-surface-0</span>:      <span class="tc-fn">oklch</span>(<span class="tc-num">7%  0.02</span> <span class="tc-fn">var</span>(<span class="tc-prop">--vel-dna-hue</span>));
<span class="tc-prop">--vel-text-1</span>:         <span class="tc-fn">oklch</span>(<span class="tc-num">92% 0.015</span> <span class="tc-fn">var</span>(<span class="tc-prop">--vel-dna-hue</span>));
<span class="tc-prop">--vel-border</span>:         <span class="tc-fn">oklch</span>(<span class="tc-num">26% 0.045</span> <span class="tc-fn">var</span>(<span class="tc-prop">--vel-dna-hue</span>));

<span class="tc-comment">/* Change in JS with one line: */</span>
<span class="tc-cls">document</span>.documentElement.style
  .setProperty(<span class="tc-str">'--vel-dna-hue'</span>, <span class="tc-num">145</span>);</span>`})]}),(0,a.jsxs)("div",{children:[(0,a.jsx)("div",{className:"vhome-swatches",style:{marginBottom:"1rem"},children:[{label:"Primary",sub:"oklch(65% 0.21 hue)",bg:"var(--vp)"},{label:"Primary Light",sub:"oklch(80% 0.14 hue)",bg:"var(--vp-light)"},{label:"Primary Dim",sub:"oklch(50% 0.22 hue)",bg:"var(--vp-dim)"},{label:"Surface 0",sub:"oklch(7% 0.02 hue)",bg:"var(--vs0)"},{label:"Surface 3",sub:"oklch(17% 0.035 hue)",bg:"var(--vs3)"},{label:"Border",sub:"oklch(26% 0.045 hue)",bg:"var(--vborder)"},{label:"Text Primary",sub:"oklch(92% 0.015 hue)",bg:"var(--vt1)"},{label:"Text Muted",sub:"oklch(50% 0.04 hue)",bg:"var(--vt3)"}].map(e=>(0,a.jsxs)("div",{className:"vhome-swatch",children:[(0,a.jsx)("div",{className:"vhome-swatch-color",style:{background:e.bg}}),(0,a.jsxs)("div",{className:"vhome-swatch-info",children:[(0,a.jsx)("span",{className:"vhome-swatch-name",children:e.label}),(0,a.jsx)("span",{className:"vhome-swatch-var",children:e.sub})]})]},e.label))}),(0,a.jsxs)("div",{style:{background:"var(--vs2)",border:"1px solid var(--vborder)",borderRadius:"0.75rem",overflow:"hidden"},children:[(0,a.jsxs)("div",{style:{background:"var(--vp-subtle)",borderBottom:"1px solid var(--vp-glow)",padding:"0.875rem 1.25rem",display:"flex",alignItems:"center",justifyContent:"space-between"},children:[(0,a.jsx)("span",{style:{fontSize:"0.8125rem",fontWeight:600,color:"var(--vp-light)"},children:"Auto-themed card"}),(0,a.jsx)("span",{style:{fontSize:"0.65rem",fontWeight:700,textTransform:"uppercase",letterSpacing:"0.08em",color:"var(--vp)",background:"var(--vp-subtle)",border:"1px solid var(--vp-glow)",borderRadius:"9999px",padding:"0.15rem 0.5rem"},children:"live"})]}),(0,a.jsxs)("div",{style:{padding:"1.25rem"},children:[(0,a.jsx)("p",{style:{fontSize:"0.875rem",color:"var(--vt2)",marginBottom:"1rem",lineHeight:1.6},children:"Every color in this card derives from the DNA hue. Drag the slider above to see it react."}),(0,a.jsxs)("div",{style:{display:"flex",gap:"0.75rem"},children:[(0,a.jsx)("button",{className:"vhome-btn-primary",children:"Action"}),(0,a.jsx)("button",{className:"vhome-btn-outline",children:"Cancel"})]})]})]})]})]})})}),(0,a.jsx)("section",{className:"vhome-section",children:(0,a.jsx)("div",{className:"vhome-wrap",children:(0,a.jsxs)("div",{className:"vhome-split",children:[(0,a.jsxs)("div",{children:[(0,a.jsx)("span",{className:"vhome-section-eyebrow",children:"Innovation 02"}),(0,a.jsxs)("h2",{className:"vel-text-4xl vel-font-extrabold vel-tracking-tight",style:{marginBottom:"1rem",lineHeight:1.15},children:["Components that",(0,a.jsx)("br",{}),"know their space."]}),(0,a.jsxs)("p",{className:"vhome-section-desc",children:["VeloraCSS components watch ",(0,a.jsx)("em",{children:"themselves"}),". Drag the box handle — the card reflows based on its own container width, not the screen size."]}),(0,a.jsx)("div",{style:{marginBottom:"1rem",fontSize:"0.75rem",color:"var(--vt3)"},children:"↙ Drag the bottom-right corner to resize"}),(0,a.jsx)("div",{className:"vhome-cq-outer",children:(0,a.jsxs)("div",{className:"vhome-cq-card",children:[(0,a.jsxs)("div",{className:"vhome-cq-inner",children:[(0,a.jsx)("div",{className:"vhome-cq-img",children:"◈"}),(0,a.jsxs)("div",{className:"vhome-cq-body",children:[(0,a.jsx)("span",{className:"vhome-cq-tag",children:"Container Query"}),(0,a.jsx)("div",{className:"vhome-cq-title",children:"Adapts to its space"}),(0,a.jsx)("div",{className:"vhome-cq-desc",children:"Stacks in tight containers, reflows when there's room. No media queries."})]})]}),(0,a.jsx)("div",{className:"vhome-cq-footer",children:"@container — watching width"})]})})]}),(0,a.jsx)("div",{children:(0,a.jsx)(l,{filename:"velora.css",children:`<span class="tc-comment">/* Mark the parent as a query context */</span>
<span class="tc-cls">.vel-cq-wrapper</span> {
  <span class="tc-prop">container-type</span>: <span class="tc-kw">inline-size</span>;
}

<span class="tc-comment">/* Component reacts to ITS container, not viewport */</span>
@<span class="tc-fn">container</span> (<span class="tc-prop">min-width</span>: <span class="tc-num">460px</span>) {
  <span class="tc-cls">.vel-cq-card</span> {
    <span class="tc-prop">grid-template-columns</span>: <span class="tc-num">200px 1fr</span>;
  }
  <span class="tc-cls">.vel-cq-image</span> {
    <span class="tc-prop">border-right</span>: <span class="tc-num">1px</span> <span class="tc-kw">solid</span> <span class="tc-fn">var</span>(<span class="tc-prop">--vel-border</span>);
    <span class="tc-prop">border-bottom</span>: <span class="tc-kw">none</span>;
  }
}

<span class="tc-comment">/* Result: works in any layout — sidebar, grid, full-width */</span>
<span class="tc-comment">/* No JavaScript. No class toggling. Just CSS. */</span>`})})]})})}),(0,a.jsx)("section",{className:"vhome-section",children:(0,a.jsxs)("div",{className:"vhome-wrap",children:[(0,a.jsx)("span",{className:"vhome-section-eyebrow",children:"Innovation 03"}),(0,a.jsxs)("h2",{className:"vel-text-4xl vel-font-extrabold vel-tracking-tight",style:{marginBottom:"1rem",lineHeight:1.15},children:["Tabs, toggles, state.",(0,a.jsx)("br",{}),"Zero JavaScript."]}),(0,a.jsxs)("p",{className:"vhome-section-desc",children:["VeloraCSS uses ",(0,a.jsx)("code",{children:":has()"})," — the “parent selector” — to make containers aware of their children's state. Radio inputs drive the state machine. CSS reads which one is checked and updates the entire UI. No event listeners. No DOM manipulation."]}),(0,a.jsxs)("div",{className:"vhome-tabs-demo",children:[(0,a.jsx)("input",{type:"radio",name:"hometab",id:"h-tab-1",defaultChecked:!0}),(0,a.jsx)("input",{type:"radio",name:"hometab",id:"h-tab-2"}),(0,a.jsx)("input",{type:"radio",name:"hometab",id:"h-tab-3"}),(0,a.jsxs)("div",{className:"vhome-tabs-nav",children:[(0,a.jsx)("label",{htmlFor:"h-tab-1",children:"Overview"}),(0,a.jsx)("label",{htmlFor:"h-tab-2",children:"How it works"}),(0,a.jsx)("label",{htmlFor:"h-tab-3",children:"vs. other frameworks"})]}),(0,a.jsxs)("div",{className:"vhome-tab-panels",children:[(0,a.jsxs)("div",{className:"vhome-tab-panel",id:"h-panel-1",children:[(0,a.jsx)("h3",{children:":has() makes parents aware of their children"}),(0,a.jsxs)("p",{children:["The CSS ",(0,a.jsx)("code",{children:":has()"})," pseudo-class is the first true parent selector. It lets a container change its own styles based on what's happening inside it — without JavaScript reading the DOM."]}),(0,a.jsx)("div",{className:"vhome-mini-features",children:[{icon:"⚡",title:"Zero JS",desc:"State machine runs entirely in CSS"},{icon:"🎯",title:"Cascades",desc:"Child state propagates to parent and siblings"},{icon:"♿",title:"Accessible",desc:"Native radio semantics, keyboard navigable"},{icon:"🔋",title:"Performant",desc:"No JS parsing, no event listeners, no re-renders"}].map(e=>(0,a.jsxs)("div",{className:"vhome-mini-feature",children:[(0,a.jsx)("div",{className:"vhome-mini-feature-icon",children:e.icon}),(0,a.jsxs)("div",{children:[(0,a.jsx)("div",{className:"vhome-mini-feature-title",children:e.title}),(0,a.jsx)("div",{className:"vhome-mini-feature-desc",children:e.desc})]})]},e.title))})]}),(0,a.jsxs)("div",{className:"vhome-tab-panel",id:"h-panel-2",children:[(0,a.jsx)("h3",{children:"The entire tab system is ~8 lines of CSS"}),(0,a.jsxs)("p",{children:["These tabs are powered by a radio group + ",(0,a.jsx)("code",{children:":has()"}),". The browser tracks which radio is checked. CSS reads that state and updates the UI. Click between tabs — you're executing a state machine with zero JavaScript."]}),(0,a.jsx)(l,{filename:"velora.css",children:`<span class="tc-comment">/* Panel visibility — :has() reads radio state */</span>
<span class="tc-cls">.vel-tabs</span>:<span class="tc-fn">has</span>(#tab-1:<span class="tc-fn">checked</span>) #panel-1 { <span class="tc-prop">display</span>: <span class="tc-kw">block</span>; }
<span class="tc-cls">.vel-tabs</span>:<span class="tc-fn">has</span>(#tab-2:<span class="tc-fn">checked</span>) #panel-2 { <span class="tc-prop">display</span>: <span class="tc-kw">block</span>; }

<span class="tc-comment">/* Active tab highlight — parent reacts to child state */</span>
<span class="tc-cls">.vel-tabs</span>:<span class="tc-fn">has</span>(#tab-1:<span class="tc-fn">checked</span>) label[for=tab-1] {
  <span class="tc-prop">color</span>: <span class="tc-fn">var</span>(<span class="tc-prop">--vel-color-primary</span>);
  <span class="tc-prop">border-bottom-color</span>: <span class="tc-fn">var</span>(<span class="tc-prop">--vel-color-primary</span>);
}

<span class="tc-comment">/* Zero JavaScript. Browser tracks state natively. */</span>`})]}),(0,a.jsxs)("div",{className:"vhome-tab-panel",id:"h-panel-3",children:[(0,a.jsx)("h3",{children:"What you'd write in another framework vs. VeloraCSS"}),(0,a.jsxs)("div",{className:"vhome-compare-row",children:[(0,a.jsxs)("div",{className:"vhome-compare-cell",children:[(0,a.jsx)("div",{className:"vhome-compare-header vhome-compare-bad",children:"JS framework approach"}),(0,a.jsx)("pre",{children:`// JavaScript required
const [tab, setTab] = useState(0)

// Class toggling in JSX
className={tab === 0
  ? 'border-b-2 border-indigo-500'
  : 'text-gray-500'}

// Event handler
onClick={() => setTab(0)}`})]}),(0,a.jsxs)("div",{className:"vhome-compare-cell",children:[(0,a.jsx)("div",{className:"vhome-compare-header vhome-compare-good",children:"VeloraCSS approach"}),(0,a.jsx)("pre",{children:`<!-- Just HTML + CSS, no JS -->
<input type="radio" id="t1" checked>
<label for="t1">Tab 1</label>

/* In CSS */
.vel-tabs:has(#t1:checked) #panel-1 {
  display: block;
}`})]})]}),(0,a.jsx)("p",{style:{color:"var(--vt3)",fontSize:"0.8rem",margin:0},children:"The JS pattern requires a framework, component state, and event listeners. VeloraCSS requires none of that — it works in plain HTML."})]})]})]})]})}),(0,a.jsx)("section",{className:"vhome-section",children:(0,a.jsxs)("div",{className:"vhome-wrap",children:[(0,a.jsx)("span",{className:"vhome-section-eyebrow",children:"Innovation 04"}),(0,a.jsxs)("h2",{className:"vel-text-4xl vel-font-extrabold vel-tracking-tight",style:{marginBottom:"1rem",lineHeight:1.15},children:["One attribute.",(0,a.jsx)("br",{}),"Entire theme cascade."]}),(0,a.jsxs)("p",{className:"vhome-section-desc",children:["Set ",(0,a.jsx)("code",{children:"data-vel-theme"})," on any element and every child automatically inherits a new color world. Click the themes below to see it live."]}),(0,a.jsxs)("div",{className:"vhome-split",style:{alignItems:"flex-start"},children:[(0,a.jsx)(i,{}),(0,a.jsx)(l,{filename:"velora.css",children:`<span class="tc-comment">/* One line per theme — hue shift handles everything */</span>
[<span class="tc-prop">data-vel-theme</span>="<span class="tc-str">ocean</span>"]  { <span class="tc-prop">--vel-dna-hue</span>: <span class="tc-num">205</span>; }
[<span class="tc-prop">data-vel-theme</span>="<span class="tc-str">forest</span>"] { <span class="tc-prop">--vel-dna-hue</span>: <span class="tc-num">145</span>; }
[<span class="tc-prop">data-vel-theme</span>="<span class="tc-str">ember</span>"]  { <span class="tc-prop">--vel-dna-hue</span>: <span class="tc-num">22</span>;  }
[<span class="tc-prop">data-vel-theme</span>="<span class="tc-str">aurora</span>"] { <span class="tc-prop">--vel-dna-hue</span>: <span class="tc-num">300</span>; }

<span class="tc-comment">/* All tokens derive from the hue — nothing to override */</span>
<span class="tc-prop">--vel-color-primary</span>: <span class="tc-fn">oklch</span>(<span class="tc-num">65% 0.21</span> <span class="tc-fn">var</span>(<span class="tc-prop">--vel-dna-hue</span>));
<span class="tc-prop">--vel-surface-1</span>:     <span class="tc-fn">oklch</span>(<span class="tc-num">10% 0.025</span> <span class="tc-fn">var</span>(<span class="tc-prop">--vel-dna-hue</span>));

<span class="tc-comment">/* The entire theming "logic" in JavaScript: */</span>
<span class="tc-cls">el</span>.dataset.<span class="tc-fn">velTheme</span> = <span class="tc-str">'ocean'</span>;</span>`})]})]})}),(0,a.jsx)("section",{className:"vhome-section",children:(0,a.jsx)("div",{className:"vhome-wrap",children:(0,a.jsxs)("div",{className:"vhome-split",children:[(0,a.jsxs)("div",{children:[(0,a.jsx)("span",{className:"vhome-section-eyebrow",children:"Innovation 05"}),(0,a.jsxs)("h2",{className:"vel-text-4xl vel-font-extrabold vel-tracking-tight",style:{marginBottom:"1rem",lineHeight:1.15},children:["Form validation.",(0,a.jsx)("br",{}),"Zero JavaScript."]}),(0,a.jsxs)("p",{className:"vhome-section-desc",children:["VeloraCSS uses ",(0,a.jsx)("code",{children:":has()"})," with ",(0,a.jsx)("code",{children:":valid"})," and ",(0,a.jsx)("code",{children:":invalid"}),"to build a complete validation UI in pure CSS. Type in the fields below — labels change color, error messages appear, borders react. No JS needed."]}),(0,a.jsxs)("div",{style:{display:"grid",gap:"1.25rem",maxWidth:"380px"},children:[(0,a.jsxs)("div",{className:"vhome-field",children:[(0,a.jsx)("label",{htmlFor:"h-name",children:"Full name"}),(0,a.jsx)("input",{type:"text",id:"h-name",className:"vhome-input",placeholder:"Jane Smith",minLength:2,required:!0}),(0,a.jsx)("span",{className:"vhome-field-hint",children:"At least 2 characters"}),(0,a.jsx)("span",{className:"vhome-field-error",children:"Name must be at least 2 characters"}),(0,a.jsx)("span",{className:"vhome-field-ok",children:"Looks good!"})]}),(0,a.jsxs)("div",{className:"vhome-field",children:[(0,a.jsx)("label",{htmlFor:"h-email",children:"Email address"}),(0,a.jsx)("input",{type:"email",id:"h-email",className:"vhome-input",placeholder:"jane@example.com",required:!0}),(0,a.jsx)("span",{className:"vhome-field-hint",children:"We'll never share your email"}),(0,a.jsx)("span",{className:"vhome-field-error",children:"Enter a valid email address"}),(0,a.jsx)("span",{className:"vhome-field-ok",children:"Valid email address"})]})]})]}),(0,a.jsx)(l,{filename:"velora.css",children:`<span class="tc-comment">/* :has() reads browser validity — no JS needed */</span>

<span class="tc-comment">/* Label turns red when input is invalid */</span>
<span class="tc-cls">.vel-field</span>:<span class="tc-fn">has</span>(<span class="tc-cls">.vel-input</span>:<span class="tc-fn">invalid</span>:<span class="tc-fn">not</span>(:<span class="tc-fn">placeholder-shown</span>)) <span class="tc-cls">label</span> {
  <span class="tc-prop">color</span>: <span class="tc-fn">oklch</span>(<span class="tc-num">65% 0.22 25</span>);
}

<span class="tc-comment">/* Border + ring on invalid */</span>
<span class="tc-cls">.vel-field</span>:<span class="tc-fn">has</span>(<span class="tc-cls">.vel-input</span>:<span class="tc-fn">invalid</span>:<span class="tc-fn">not</span>(:<span class="tc-fn">placeholder-shown</span>)) <span class="tc-cls">.vel-input</span> {
  <span class="tc-prop">border-color</span>: <span class="tc-fn">oklch</span>(<span class="tc-num">65% 0.22 25</span>);
  <span class="tc-prop">box-shadow</span>: <span class="tc-num">0 0 0 3px</span> <span class="tc-fn">oklch</span>(<span class="tc-num">65% 0.22 25 / 0.12</span>);
}

<span class="tc-comment">/* Show error message — CSS toggles visibility */</span>
<span class="tc-cls">.vel-field</span>:<span class="tc-fn">has</span>(<span class="tc-cls">.vel-input</span>:<span class="tc-fn">invalid</span>:<span class="tc-fn">not</span>(:<span class="tc-fn">placeholder-shown</span>)) <span class="tc-cls">.vel-field-error</span> {
  <span class="tc-prop">display</span>: <span class="tc-kw">block</span>; <span class="tc-comment">/* zero JS */</span>
}

<span class="tc-comment">/* Valid state — green automatically */</span>
<span class="tc-cls">.vel-field</span>:<span class="tc-fn">has</span>(<span class="tc-cls">.vel-input</span>:<span class="tc-fn">valid</span>:<span class="tc-fn">not</span>(:<span class="tc-fn">placeholder-shown</span>)) <span class="tc-cls">.vel-input</span> {
  <span class="tc-prop">border-color</span>: <span class="tc-fn">oklch</span>(<span class="tc-num">70% 0.2 162</span>);
}</span>`})]})})}),(0,a.jsx)("section",{className:"vhome-section",style:{borderBottom:"none"},children:(0,a.jsx)("div",{className:"vhome-wrap",children:(0,a.jsx)("div",{className:"vhome-stats",children:[{num:"300+",label:"utility classes"},{num:"29",label:"components"},{num:"6",label:"CSS innovations"},{num:"0",label:"dependencies"}].map(e=>(0,a.jsxs)("div",{className:"vhome-stat",children:[(0,a.jsx)("span",{className:"vhome-stat-num",children:e.num}),(0,a.jsx)("span",{className:"vhome-stat-label",children:e.label})]},e.label))})})}),(0,a.jsx)("section",{className:"vhome-cta-section",children:(0,a.jsxs)("div",{className:"vhome-wrap",children:[(0,a.jsxs)("h2",{className:"vel-text-5xl vel-font-black vel-tracking-tight",style:{marginBottom:"1rem",lineHeight:1.1},children:["Ready to build",(0,a.jsx)("br",{}),"something ",(0,a.jsx)("em",{style:{fontStyle:"normal",color:"var(--vp)"},children:"extraordinary?"})]}),(0,a.jsx)("p",{style:{fontSize:"1.0625rem",color:"var(--vt2)",maxWidth:"480px",margin:"0 auto 2.5rem",lineHeight:1.7},children:"Start with the docs, explore the playground, or dive into the source. VeloraCSS is open source and ready to use today."}),(0,a.jsxs)("div",{className:"vhome-hero-ctas",children:[(0,a.jsx)(r.default,{href:n,className:"vhome-cta-primary",children:"Get Started →"}),(0,a.jsx)("a",{href:o,target:"_blank",rel:"noopener noreferrer",className:"vhome-cta-secondary",children:"Open Playground"}),(0,a.jsx)("a",{href:"https://github.com/VeloraX/veloracss",target:"_blank",rel:"noopener noreferrer",className:"vhome-cta-ghost",children:"View Source"})]})]})}),(0,a.jsx)("footer",{className:"vhome-footer",children:(0,a.jsxs)("div",{className:"vhome-wrap vel-flex vel-flex-col vel-items-center vel-gap-4",style:{width:"100%"},children:[(0,a.jsx)("span",{className:"vhome-footer-badge",children:"Color Genetics · Container Intelligence · CSS State Machine · Scope Theming · Smart Forms · Fluid Scale"}),(0,a.jsxs)("div",{className:"vel-flex vel-items-center vel-justify-between vel-flex-wrap vel-gap-4",style:{width:"100%"},children:[(0,a.jsx)("span",{style:{fontSize:"0.8125rem",color:"var(--vt3)"},children:"VeloraCSS v0.3.0 — AI-designed. Human-shipped."}),(0,a.jsxs)("div",{className:"vel-flex vel-gap-6",children:[(0,a.jsx)(r.default,{href:n,className:"vhome-footer-link",children:"Docs"}),(0,a.jsx)("a",{href:o,target:"_blank",rel:"noopener noreferrer",className:"vhome-footer-link",children:"Playground"}),(0,a.jsx)("a",{href:"https://github.com/VeloraX/veloracss",target:"_blank",rel:"noopener noreferrer",className:"vhome-footer-link",children:"GitHub"})]})]})]})})]})]})}e.s(["default",()=>c])}]);