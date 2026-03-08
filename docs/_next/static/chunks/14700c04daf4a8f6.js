(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,49778,(e,a,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"warnOnce",{enumerable:!0,get:function(){return s}});let s=e=>{}},63640,(e,a,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});var s={assign:function(){return i},searchParamsToUrlQuery:function(){return o},urlQueryToSearchParams:function(){return l}};for(var n in s)Object.defineProperty(r,n,{enumerable:!0,get:s[n]});function o(e){let a={};for(let[r,s]of e.entries()){let e=a[r];void 0===e?a[r]=s:Array.isArray(e)?e.push(s):a[r]=[e,s]}return a}function t(e){return"string"==typeof e?e:("number"!=typeof e||isNaN(e))&&"boolean"!=typeof e?"":String(e)}function l(e){let a=new URLSearchParams;for(let[r,s]of Object.entries(e))if(Array.isArray(s))for(let e of s)a.append(r,t(e));else a.set(r,t(s));return a}function i(e,...a){for(let r of a){for(let a of r.keys())e.delete(a);for(let[a,s]of r.entries())e.append(a,s)}return e}},60026,(e,a,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});var s={formatUrl:function(){return l},formatWithValidation:function(){return c},urlObjectKeys:function(){return i}};for(var n in s)Object.defineProperty(r,n,{enumerable:!0,get:s[n]});let o=e.r(19926)._(e.r(63640)),t=/https?|ftp|gopher|file/;function l(e){let{auth:a,hostname:r}=e,s=e.protocol||"",n=e.pathname||"",l=e.hash||"",i=e.query||"",c=!1;a=a?encodeURIComponent(a).replace(/%3A/i,":")+"@":"",e.host?c=a+e.host:r&&(c=a+(~r.indexOf(":")?`[${r}]`:r),e.port&&(c+=":"+e.port)),i&&"object"==typeof i&&(i=String(o.urlQueryToSearchParams(i)));let d=e.search||i&&`?${i}`||"";return s&&!s.endsWith(":")&&(s+=":"),e.slashes||(!s||t.test(s))&&!1!==c?(c="//"+(c||""),n&&"/"!==n[0]&&(n="/"+n)):c||(c=""),l&&"#"!==l[0]&&(l="#"+l),d&&"?"!==d[0]&&(d="?"+d),n=n.replace(/[?#]/g,encodeURIComponent),d=d.replace("#","%23"),`${s}${c}${n}${d}${l}`}let i=["auth","hash","host","hostname","href","path","pathname","port","protocol","query","search","slashes"];function c(e){return l(e)}},94493,(e,a,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"useMergedRef",{enumerable:!0,get:function(){return n}});let s=e.r(34726);function n(e,a){let r=(0,s.useRef)(null),n=(0,s.useRef)(null);return(0,s.useCallback)(s=>{if(null===s){let e=r.current;e&&(r.current=null,e());let a=n.current;a&&(n.current=null,a())}else e&&(r.current=o(e,s)),a&&(n.current=o(a,s))},[e,a])}function o(e,a){if("function"!=typeof e)return e.current=a,()=>{e.current=null};{let r=e(a);return"function"==typeof r?r:()=>e(null)}}("function"==typeof r.default||"object"==typeof r.default&&null!==r.default)&&void 0===r.default.__esModule&&(Object.defineProperty(r.default,"__esModule",{value:!0}),Object.assign(r.default,r),a.exports=r.default)},46574,(e,a,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});var s={DecodeError:function(){return b},MiddlewareNotFoundError:function(){return j},MissingStaticPage:function(){return y},NormalizeError:function(){return g},PageNotFoundError:function(){return x},SP:function(){return u},ST:function(){return f},WEB_VITALS:function(){return o},execOnce:function(){return t},getDisplayName:function(){return m},getLocationOrigin:function(){return c},getURL:function(){return d},isAbsoluteUrl:function(){return i},isResSent:function(){return p},loadGetInitialProps:function(){return h},normalizeRepeatedSlashes:function(){return v},stringifyError:function(){return w}};for(var n in s)Object.defineProperty(r,n,{enumerable:!0,get:s[n]});let o=["CLS","FCP","FID","INP","LCP","TTFB"];function t(e){let a,r=!1;return(...s)=>(r||(r=!0,a=e(...s)),a)}let l=/^[a-zA-Z][a-zA-Z\d+\-.]*?:/,i=e=>l.test(e);function c(){let{protocol:e,hostname:a,port:r}=window.location;return`${e}//${a}${r?":"+r:""}`}function d(){let{href:e}=window.location,a=c();return e.substring(a.length)}function m(e){return"string"==typeof e?e:e.displayName||e.name||"Unknown"}function p(e){return e.finished||e.headersSent}function v(e){let a=e.split("?");return a[0].replace(/\\/g,"/").replace(/\/\/+/g,"/")+(a[1]?`?${a.slice(1).join("?")}`:"")}async function h(e,a){let r=a.res||a.ctx&&a.ctx.res;if(!e.getInitialProps)return a.ctx&&a.Component?{pageProps:await h(a.Component,a.ctx)}:{};let s=await e.getInitialProps(a);if(r&&p(r))return s;if(!s)throw Object.defineProperty(Error(`"${m(e)}.getInitialProps()" should resolve to an object. But found "${s}" instead.`),"__NEXT_ERROR_CODE",{value:"E394",enumerable:!1,configurable:!0});return s}let u="u">typeof performance,f=u&&["mark","measure","getEntriesByName"].every(e=>"function"==typeof performance[e]);class b extends Error{}class g extends Error{}class x extends Error{constructor(e){super(),this.code="ENOENT",this.name="PageNotFoundError",this.message=`Cannot find module for page: ${e}`}}class y extends Error{constructor(e,a){super(),this.message=`Failed to load static file for page: ${e} ${a}`}}class j extends Error{constructor(){super(),this.code="ENOENT",this.message="Cannot find the middleware module"}}function w(e){return JSON.stringify({message:e.message,stack:e.stack})}},99309,(e,a,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"isLocalURL",{enumerable:!0,get:function(){return o}});let s=e.r(46574),n=e.r(81953);function o(e){if(!(0,s.isAbsoluteUrl)(e))return!0;try{let a=(0,s.getLocationOrigin)(),r=new URL(e,a);return r.origin===a&&(0,n.hasBasePath)(r.pathname)}catch(e){return!1}}},14328,(e,a,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"errorOnce",{enumerable:!0,get:function(){return s}});let s=e=>{}},15457,(e,a,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});var s={default:function(){return b},useLinkStatus:function(){return x}};for(var n in s)Object.defineProperty(r,n,{enumerable:!0,get:s[n]});let o=e.r(19926),t=e.r(92944),l=o._(e.r(34726)),i=e.r(60026),c=e.r(27507),d=e.r(94493),m=e.r(46574),p=e.r(22030);e.r(49778);let v=e.r(42161),h=e.r(99309),u=e.r(73271);function f(e){return"string"==typeof e?e:(0,i.formatUrl)(e)}function b(a){var r;let s,n,o,[i,b]=(0,l.useOptimistic)(v.IDLE_LINK_STATUS),x=(0,l.useRef)(null),{href:y,as:j,children:w,prefetch:N=null,passHref:k,replace:S,shallow:C,scroll:z,onClick:O,onMouseEnter:E,onTouchStart:T,legacyBehavior:P=!1,onNavigate:_,ref:A,unstable_dynamicOnHover:I,...R}=a;s=w,P&&("string"==typeof s||"number"==typeof s)&&(s=(0,t.jsx)("a",{children:s}));let M=l.default.useContext(c.AppRouterContext),L=!1!==N,q=!1!==N?null===(r=N)||"auto"===r?u.FetchStrategy.PPR:u.FetchStrategy.Full:u.FetchStrategy.PPR,{href:D,as:U}=l.default.useMemo(()=>{let e=f(y);return{href:e,as:j?f(j):e}},[y,j]);if(P){if(s?.$$typeof===Symbol.for("react.lazy"))throw Object.defineProperty(Error("`<Link legacyBehavior>` received a direct child that is either a Server Component, or JSX that was loaded with React.lazy(). This is not supported. Either remove legacyBehavior, or make the direct child a Client Component that renders the Link's `<a>` tag."),"__NEXT_ERROR_CODE",{value:"E863",enumerable:!1,configurable:!0});n=l.default.Children.only(s)}let B=P?n&&"object"==typeof n&&n.ref:A,F=l.default.useCallback(e=>(null!==M&&(x.current=(0,v.mountLinkInstance)(e,D,M,q,L,b)),()=>{x.current&&((0,v.unmountLinkForCurrentNavigation)(x.current),x.current=null),(0,v.unmountPrefetchableInstance)(e)}),[L,D,M,q,b]),V={ref:(0,d.useMergedRef)(F,B),onClick(a){P||"function"!=typeof O||O(a),P&&n.props&&"function"==typeof n.props.onClick&&n.props.onClick(a),!M||a.defaultPrevented||function(a,r,s,n,o,t,i){if("u">typeof window){let c,{nodeName:d}=a.currentTarget;if("A"===d.toUpperCase()&&((c=a.currentTarget.getAttribute("target"))&&"_self"!==c||a.metaKey||a.ctrlKey||a.shiftKey||a.altKey||a.nativeEvent&&2===a.nativeEvent.which)||a.currentTarget.hasAttribute("download"))return;if(!(0,h.isLocalURL)(r)){o&&(a.preventDefault(),location.replace(r));return}if(a.preventDefault(),i){let e=!1;if(i({preventDefault:()=>{e=!0}}),e)return}let{dispatchNavigateAction:m}=e.r(28020);l.default.startTransition(()=>{m(s||r,o?"replace":"push",t??!0,n.current)})}}(a,D,U,x,S,z,_)},onMouseEnter(e){P||"function"!=typeof E||E(e),P&&n.props&&"function"==typeof n.props.onMouseEnter&&n.props.onMouseEnter(e),M&&L&&(0,v.onNavigationIntent)(e.currentTarget,!0===I)},onTouchStart:function(e){P||"function"!=typeof T||T(e),P&&n.props&&"function"==typeof n.props.onTouchStart&&n.props.onTouchStart(e),M&&L&&(0,v.onNavigationIntent)(e.currentTarget,!0===I)}};return(0,m.isAbsoluteUrl)(U)?V.href=U:P&&!k&&("a"!==n.type||"href"in n.props)||(V.href=(0,p.addBasePath)(U)),o=P?l.default.cloneElement(n,V):(0,t.jsx)("a",{...R,...V,children:s}),(0,t.jsx)(g.Provider,{value:i,children:o})}e.r(14328);let g=(0,l.createContext)(v.IDLE_LINK_STATUS),x=()=>(0,l.useContext)(g);("function"==typeof r.default||"object"==typeof r.default&&null!==r.default)&&void 0===r.default.__esModule&&(Object.defineProperty(r.default,"__esModule",{value:!0}),Object.assign(r.default,r),a.exports=r.default)},49308,e=>{"use strict";var a=e.i(92944),r=e.i(34726),s=e.i(15457);let n="https://velorax.github.io/veloracss/playground",o="/veloracss/docs",t=`
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
  }
  #vel-home * { box-sizing: border-box; }

  /* Scope themes */
  #vel-home [data-vel-theme="ocean"]  { --vel-dna-hue: 205; }
  #vel-home [data-vel-theme="forest"] { --vel-dna-hue: 145; }
  #vel-home [data-vel-theme="ember"]  { --vel-dna-hue: 22;  }
  #vel-home [data-vel-theme="aurora"] { --vel-dna-hue: 300; }
  #vel-home [data-vel-theme="gold"]   { --vel-dna-hue: 55;  }

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
  .vhome-nav-links { display: flex; align-items: center; gap: 1.5rem; }
  .vhome-nav-link {
    font-size: 0.875rem; font-weight: 500; color: var(--vt2);
    text-decoration: none;
    transition: color var(--dur) var(--ease);
  }
  .vhome-nav-link:hover { color: var(--vt1); }
  .vhome-nav-cta {
    font-size: 0.875rem; font-weight: 600; padding: 0.4rem 1rem;
    border-radius: 0.5rem;
    background: var(--vp); color: oklch(12% 0.02 var(--vel-dna-hue));
    text-decoration: none;
    transition: all var(--dur) var(--ease);
  }
  .vhome-nav-cta:hover { background: var(--vp-light); }
  .vhome-nav-badge {
    font-size: 0.7rem; font-weight: 600; letter-spacing: 0.06em;
    padding: 0.2rem 0.5rem; border-radius: 9999px;
    background: var(--vp-subtle); color: var(--vp-light);
    border: 1px solid var(--vp-glow);
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
  .vhome-cta-primary {
    font-size: 0.9375rem; font-weight: 700; padding: 0.75rem 1.75rem;
    border-radius: 0.625rem; background: var(--vp);
    color: oklch(12% 0.02 var(--vel-dna-hue));
    text-decoration: none; border: none; cursor: pointer;
    transition: all var(--dur) var(--ease);
  }
  .vhome-cta-primary:hover { background: var(--vp-light); transform: translateY(-1px); }
  .vhome-cta-secondary {
    font-size: 0.9375rem; font-weight: 600; padding: 0.75rem 1.75rem;
    border-radius: 0.625rem; background: var(--vs2); color: var(--vt1);
    text-decoration: none; border: 1px solid var(--vborder); cursor: pointer;
    transition: all var(--dur) var(--ease);
  }
  .vhome-cta-secondary:hover { border-color: var(--vp); color: var(--vp); }
  .vhome-cta-ghost {
    font-size: 0.9375rem; font-weight: 500; padding: 0.75rem 1.25rem;
    border-radius: 0.625rem; background: transparent; color: var(--vt2);
    text-decoration: none; border: 1px solid var(--vborder); cursor: pointer;
    transition: all var(--dur) var(--ease);
  }
  .vhome-cta-ghost:hover { color: var(--vt1); border-color: var(--vborder); }

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

  /* ─ MAC TERMINAL ─ */
  .vhome-terminal {
    background: #1a1a1a; border-radius: 0.625rem; overflow: hidden;
    border: 1px solid #333;
    box-shadow: 0 20px 60px -12px rgba(0,0,0,0.7);
    text-align: left;
  }
  .vhome-terminal-titlebar {
    display: flex; align-items: center; gap: 0.5rem;
    padding: 0 0.875rem; height: 36px;
    background: #252525; border-bottom: 1px solid #333;
  }
  .vhome-terminal-dots {
    display: flex; gap: 6px; align-items: center; flex-shrink: 0;
  }
  .vhome-terminal-dot {
    width: 12px; height: 12px; border-radius: 50%;
  }
  .vhome-terminal-dot.red    { background: #ff5f57; }
  .vhome-terminal-dot.yellow { background: #ffbd2e; }
  .vhome-terminal-dot.green  { background: #28c840; }
  .vhome-terminal-title {
    font-size: 0.72rem; color: #888;
    font-family: 'Cascadia Code', Menlo, Monaco, monospace;
    flex: 1; text-align: center;
  }
  .vhome-terminal-copy {
    font-size: 0.7rem; font-weight: 600; padding: 0.25rem 0.625rem;
    border-radius: 0.25rem; cursor: pointer; border: none;
    font-family: 'Cascadia Code', Consolas, monospace;
    transition: all 0.15s; flex-shrink: 0;
  }
  .vhome-terminal-copy.idle {
    background: #333; color: #888;
  }
  .vhome-terminal-copy.copied {
    background: rgba(14,203,129,0.15); color: #0ecb81;
  }
  .vhome-terminal-code {
    padding: 1.25rem 1.5rem; overflow-x: auto;
    font-family: 'Cascadia Code', Menlo, Monaco, 'Courier New', monospace;
    font-size: 0.8125rem; line-height: 1.8; color: #CCCCCC;
    max-height: 340px; overflow-y: auto;
  }
  .vhome-terminal-code::-webkit-scrollbar { width: 8px; height: 8px; }
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
  .vhome-section-title {
    font-size: clamp(1.875rem, 3vw, 2.5rem); font-weight: 800;
    letter-spacing: -0.025em; line-height: 1.15; margin-bottom: 1rem;
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
  .vhome-stat {
    background: var(--vs1); padding: 2rem; text-align: center;
  }
  .vhome-stat-num {
    display: block; font-size: clamp(2rem, 4vw, 3rem); font-weight: 900;
    color: var(--vp); line-height: 1; margin-bottom: 0.5rem;
  }
  .vhome-stat-label {
    font-size: 0.8125rem; color: var(--vt3); line-height: 1.4;
  }

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
  .vhome-cq-title { font-size: 1rem; font-weight: 700; margin-bottom: 0.5rem; line-height: 1.3; }
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
  .vhome-swatches { display: grid; grid-template-columns: repeat(6, 1fr); gap: 0.5rem; }
  .vhome-swatch { border-radius: 0.5rem; overflow: hidden; border: 1px solid var(--vborder-dim); }
  .vhome-swatch-color { height: 56px; transition: all var(--dur) var(--ease); }
  .vhome-swatch-label {
    padding: 0.375rem 0.5rem; background: var(--vs2);
    font-size: 0.65rem; color: var(--vt3);
    font-family: 'Cascadia Code', Consolas, monospace;
  }

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

  /* ─ COMPONENTS PREVIEW ─ */
  .vhome-component-grid {
    display: grid; grid-template-columns: repeat(auto-fill, minmax(260px, 1fr)); gap: 1.5rem;
  }
  .vhome-component-preview {
    background: var(--vs1); border: 1px solid var(--vborder);
    border-radius: 0.875rem; overflow: hidden;
  }
  .vhome-component-preview-header {
    background: var(--vs2); border-bottom: 1px solid var(--vborder);
    padding: 0.625rem 1rem;
    font-size: 0.7rem; font-weight: 700; text-transform: uppercase;
    letter-spacing: 0.08em; color: var(--vt3);
  }
  .vhome-component-preview-body { padding: 1.25rem; }

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
    font-size: 1.5rem; margin-bottom: 0.5rem;
    transition: color var(--dur) var(--ease);
  }
  .vhome-scope-card-title { font-size: 0.875rem; font-weight: 600; margin-bottom: 0.25rem; }
  .vhome-scope-card-desc { font-size: 0.75rem; color: var(--vt3); line-height: 1.4; }

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
  .vhome-cta-section h2 {
    font-size: clamp(2rem, 4vw, 3rem); font-weight: 900;
    letter-spacing: -0.025em; margin-bottom: 1rem;
  }
  .vhome-cta-section p {
    font-size: 1.0625rem; color: var(--vt2); max-width: 480px; margin: 0 auto 2.5rem; line-height: 1.7;
  }

  /* ─ FOOTER ─ */
  .vhome-footer {
    padding: 2rem clamp(1rem, 4vw, 3rem);
    border-top: 1px solid var(--vborder-dim);
    display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 1rem;
  }
  .vhome-footer-copy { font-size: 0.8125rem; color: var(--vt3); }
  .vhome-footer-links { display: flex; gap: 1.5rem; }
  .vhome-footer-link { font-size: 0.8125rem; color: var(--vt3); text-decoration: none; transition: color var(--dur) var(--ease); }
  .vhome-footer-link:hover { color: var(--vt1); }
`;function l({filename:e,children:s}){let[n,o]=(0,r.useState)(!1),t=(0,r.useCallback)(async()=>{let e=s.replace(/<[^>]+>/g,"");try{await navigator.clipboard.writeText(e)}catch{let a=document.createElement("textarea");a.value=e,a.style.cssText="position:fixed;top:0;left:0;opacity:0",document.body.appendChild(a),a.select(),document.execCommand("copy"),document.body.removeChild(a)}o(!0),setTimeout(()=>o(!1),2e3)},[s]);return(0,a.jsxs)("div",{className:"vhome-terminal",children:[(0,a.jsxs)("div",{className:"vhome-terminal-titlebar",children:[(0,a.jsxs)("div",{className:"vhome-terminal-dots",children:[(0,a.jsx)("div",{className:"vhome-terminal-dot red"}),(0,a.jsx)("div",{className:"vhome-terminal-dot yellow"}),(0,a.jsx)("div",{className:"vhome-terminal-dot green"})]}),(0,a.jsx)("span",{className:"vhome-terminal-title",children:e}),(0,a.jsx)("button",{className:`vhome-terminal-copy ${n?"copied":"idle"}`,onClick:t,children:n?"✓ Copied":"Copy"})]}),(0,a.jsx)("pre",{className:"vhome-terminal-code",children:(0,a.jsx)("code",{dangerouslySetInnerHTML:{__html:s}})})]})}function i(){let[e,s]=(0,r.useState)("default");return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("div",{className:"vhome-theme-btns",children:["default","ocean","forest","ember","aurora","gold"].map(r=>(0,a.jsx)("button",{className:"vhome-theme-btn","data-active":e===r?"true":"false",onClick:()=>s(r),children:r.charAt(0).toUpperCase()+r.slice(1)},r))}),(0,a.jsxs)("div",{className:"vhome-scope-zone","data-vel-theme":"default"===e?void 0:e,children:[(0,a.jsx)("div",{className:"vhome-scope-label",children:"default"===e?"data-vel-theme — default":`data-vel-theme="${e}"`}),(0,a.jsx)("div",{className:"vhome-scope-cards",children:[{icon:"◈",title:"Token Cascade",desc:"All colors inherit from theme"},{icon:"⬡",title:"Zero JS Logic",desc:"One attribute, full retheme"},{icon:"↬",title:"Nestable",desc:"Themes can nest inside themes"},{icon:"⟁",title:"Instant",desc:"CSS transitions handle everything"}].map(e=>(0,a.jsxs)("div",{className:"vhome-scope-card",children:[(0,a.jsx)("div",{className:"vhome-scope-card-icon",children:e.icon}),(0,a.jsx)("div",{className:"vhome-scope-card-title",children:e.title}),(0,a.jsx)("div",{className:"vhome-scope-card-desc",children:e.desc})]},e.title))}),(0,a.jsxs)("div",{style:{display:"flex",gap:"0.75rem"},children:[(0,a.jsx)("button",{className:"vel-btn vel-btn-primary",children:"Themed Button"}),(0,a.jsx)("button",{className:"vel-btn vel-btn-outline-primary",children:"Secondary"})]})]})]})}function c(){let[e,c]=(0,r.useState)(258),d=(0,r.useCallback)(e=>{let a=Number(e.target.value);c(a),document.getElementById("vel-home")?.style.setProperty("--vel-dna-hue",String(a))},[]);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("style",{dangerouslySetInnerHTML:{__html:t}}),(0,a.jsxs)("main",{id:"vel-home",style:{"--vel-dna-hue":"258"},children:[(0,a.jsxs)("nav",{className:"vhome-nav",children:[(0,a.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:"1rem"},children:[(0,a.jsx)("img",{src:"/veloracss/velora_actual.png",alt:"VeloraCSS",style:{height:"26px",width:"auto"}}),(0,a.jsx)("span",{className:"vhome-nav-badge",children:"v0.3.0"})]}),(0,a.jsxs)("div",{className:"vhome-nav-links",children:[(0,a.jsx)(s.default,{href:o,className:"vhome-nav-link",children:"Docs"}),(0,a.jsx)("a",{href:n,target:"_blank",rel:"noopener noreferrer",className:"vhome-nav-link",children:"Playground"}),(0,a.jsx)("a",{href:"https://github.com/VeloraX/veloracss",target:"_blank",rel:"noopener noreferrer",className:"vhome-nav-link",children:"GitHub"}),(0,a.jsx)("a",{href:n,target:"_blank",rel:"noopener noreferrer",className:"vhome-nav-cta",children:"Try it live →"})]})]}),(0,a.jsxs)("section",{className:"vhome-hero",children:[(0,a.jsx)("div",{className:"vhome-hero-eyebrow",children:"AI-designed · Human-shipped · Built for the future"}),(0,a.jsxs)("h1",{children:["CSS that ",(0,a.jsx)("em",{children:"thinks"}),(0,a.jsx)("br",{}),"in context."]}),(0,a.jsx)("p",{className:"vhome-hero-sub",children:"VeloraCSS delivers six capabilities no other utility framework attempts — from a color system driven by a single number, to components that adapt to their container without a single media query."}),(0,a.jsxs)("div",{className:"vhome-hero-ctas",children:[(0,a.jsx)(s.default,{href:o,className:"vhome-cta-primary",children:"Read the Docs"}),(0,a.jsx)("a",{href:n,target:"_blank",rel:"noopener noreferrer",className:"vhome-cta-secondary",children:"Open Playground →"}),(0,a.jsx)("a",{href:"https://github.com/VeloraX/veloracss",target:"_blank",rel:"noopener noreferrer",className:"vhome-cta-ghost",children:"GitHub"})]}),(0,a.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center"},children:[(0,a.jsxs)("div",{className:"vhome-dna-strip",children:[(0,a.jsx)("span",{className:"vhome-dna-label",children:"Color DNA"}),(0,a.jsx)("div",{className:"vhome-dna-swatch"}),(0,a.jsx)("input",{type:"range",min:"0",max:"360",value:e,className:"vhome-dna-slider",onChange:d}),(0,a.jsxs)("span",{className:"vhome-dna-val",children:[e,"°"]})]}),(0,a.jsxs)("p",{className:"vhome-dna-note",children:["One number. Every color on this page derives from it via ",(0,a.jsx)("code",{style:{fontFamily:"Cascadia Code, Consolas, monospace",color:"inherit"},children:"oklch()"}),"."]})]})]}),(0,a.jsx)("section",{className:"vhome-section",children:(0,a.jsxs)("div",{className:"vhome-wrap",children:[(0,a.jsx)("span",{className:"vhome-section-eyebrow",children:"What makes Velora different"}),(0,a.jsxs)("h2",{className:"vhome-section-title",children:["Six things no other",(0,a.jsx)("br",{}),"framework does."]}),(0,a.jsx)("div",{className:"vhome-innovations",children:[{num:"01",icon:"◈",title:"Color Genetics",desc:"One hue drives 50+ derived colors via oklch(). Perceptually uniform, mathematically coherent. Change a single number — the entire UI recolors.",tag:"--vel-dna-hue: 258"},{num:"02",icon:"⬡",title:"Container Intelligence",desc:"Components respond to their container, not the viewport. A card in a sidebar stacks; the same card in a wide area goes horizontal. Zero media queries.",tag:"@container (min-width: 460px)"},{num:"03",icon:"⟁",title:"CSS State Machine",desc:"Tabs, toggles, and accordions powered by :has() + radio inputs. State is tracked by the browser. No event listeners. No DOM manipulation.",tag:".tabs:has(#t1:checked) #panel-1"},{num:"04",icon:"↬",title:"Scope Theming",desc:"Set data-vel-theme on any element and every child instantly inherits a new color universe. Themes can nest. One attribute, full cascade.",tag:'data-vel-theme="ocean"'},{num:"05",icon:"◉",title:"Smart Forms",desc:"CSS reads browser validity state via :has(:invalid). Labels change color, errors appear, borders react — all without JavaScript.",tag:".field:has(input:invalid)"},{num:"06",icon:"⧖",title:"Fluid Scale",desc:"Every spacing and type token uses clamp(). Values interpolate continuously across all viewport widths. No breakpoints. No jumps.",tag:"clamp(1rem, 0.8rem + 1vw, 1.5rem)"}].map(e=>(0,a.jsxs)("div",{className:"vhome-innovation",children:[(0,a.jsx)("span",{className:"vhome-innovation-num",children:e.num}),(0,a.jsx)("div",{className:"vhome-innovation-icon",children:e.icon}),(0,a.jsx)("h3",{children:e.title}),(0,a.jsx)("p",{children:e.desc}),(0,a.jsx)("span",{className:"vhome-innovation-tag",children:e.tag})]},e.num))})]})}),(0,a.jsx)("section",{className:"vhome-section",children:(0,a.jsx)("div",{className:"vhome-wrap",children:(0,a.jsxs)("div",{className:"vhome-split",children:[(0,a.jsxs)("div",{children:[(0,a.jsx)("span",{className:"vhome-section-eyebrow",children:"Innovation 01"}),(0,a.jsxs)("h2",{className:"vhome-section-title",children:["One number.",(0,a.jsx)("br",{}),"An entire universe."]}),(0,a.jsxs)("p",{className:"vhome-section-desc",children:["Tailwind ships 22 color palettes — 1,540 hardcoded swatches you can't change without config. VeloraCSS generates every color mathematically from",(0,a.jsx)("code",{children:"--vel-dna-hue"})," using ",(0,a.jsx)("code",{children:"oklch()"}),", the only perceptually uniform color space. Watch the swatches below react as you slide."]}),(0,a.jsx)(l,{filename:"velora.css",children:`<span class="tc-comment">/* The entire palette from one variable */</span>
<span class="tc-prop">--vel-dna-hue</span>: <span class="tc-num">258</span>;

<span class="tc-comment">/* All colors are derived — nothing hardcoded */</span>
<span class="tc-prop">--vel-color-primary</span>:  <span class="tc-fn">oklch</span>(<span class="tc-num">65% 0.21</span> <span class="tc-fn">var</span>(<span class="tc-prop">--vel-dna-hue</span>));
<span class="tc-prop">--vel-surface-0</span>:      <span class="tc-fn">oklch</span>(<span class="tc-num">7%  0.02</span> <span class="tc-fn">var</span>(<span class="tc-prop">--vel-dna-hue</span>));
<span class="tc-prop">--vel-text-1</span>:         <span class="tc-fn">oklch</span>(<span class="tc-num">92% 0.015</span> <span class="tc-fn">var</span>(<span class="tc-prop">--vel-dna-hue</span>));
<span class="tc-prop">--vel-border</span>:         <span class="tc-fn">oklch</span>(<span class="tc-num">26% 0.045</span> <span class="tc-fn">var</span>(<span class="tc-prop">--vel-dna-hue</span>));

<span class="tc-comment">/* Change in JS with one line: */</span>
<span class="tc-cls">document</span>.documentElement.style
  .setProperty(<span class="tc-str">'--vel-dna-hue'</span>, <span class="tc-num">145</span>);</span>`})]}),(0,a.jsxs)("div",{children:[(0,a.jsx)("div",{className:"vhome-swatches",style:{marginBottom:"1rem"},children:[{label:"primary",bg:"var(--vp)"},{label:"light",bg:"var(--vp-light)"},{label:"dim",bg:"var(--vp-dim)"},{label:"surface 0",bg:"var(--vs0)"},{label:"surface 3",bg:"var(--vs3)"},{label:"border",bg:"var(--vborder)"}].map(e=>(0,a.jsxs)("div",{className:"vhome-swatch",children:[(0,a.jsx)("div",{className:"vhome-swatch-color",style:{background:e.bg}}),(0,a.jsx)("div",{className:"vhome-swatch-label",children:e.label})]},e.label))}),(0,a.jsxs)("div",{style:{background:"var(--vs2)",border:"1px solid var(--vborder)",borderRadius:"0.75rem",overflow:"hidden"},children:[(0,a.jsxs)("div",{style:{background:"var(--vp-subtle)",borderBottom:"1px solid var(--vp-glow)",padding:"0.875rem 1.25rem",display:"flex",alignItems:"center",justifyContent:"space-between"},children:[(0,a.jsx)("span",{style:{fontSize:"0.8125rem",fontWeight:600,color:"var(--vp-light)"},children:"Auto-themed card"}),(0,a.jsx)("span",{style:{fontSize:"0.65rem",fontWeight:700,textTransform:"uppercase",letterSpacing:"0.08em",color:"var(--vp)",background:"var(--vp-subtle)",border:"1px solid var(--vp-glow)",borderRadius:"9999px",padding:"0.15rem 0.5rem"},children:"live"})]}),(0,a.jsxs)("div",{style:{padding:"1.25rem"},children:[(0,a.jsx)("p",{style:{fontSize:"0.875rem",color:"var(--vt2)",marginBottom:"1rem",lineHeight:1.6},children:"Every color in this card derives from the DNA hue. Drag the slider above to see it react."}),(0,a.jsxs)("div",{style:{display:"flex",gap:"0.75rem"},children:[(0,a.jsx)("button",{className:"vel-btn vel-btn-primary",children:"Action"}),(0,a.jsx)("button",{className:"vel-btn vel-btn-ghost",children:"Cancel"})]})]})]})]})]})})}),(0,a.jsx)("section",{className:"vhome-section",children:(0,a.jsx)("div",{className:"vhome-wrap",children:(0,a.jsxs)("div",{className:"vhome-split",children:[(0,a.jsxs)("div",{children:[(0,a.jsx)("span",{className:"vhome-section-eyebrow",children:"Innovation 02"}),(0,a.jsxs)("h2",{className:"vhome-section-title",children:["Components that",(0,a.jsx)("br",{}),"know their space."]}),(0,a.jsxs)("p",{className:"vhome-section-desc",children:["Tailwind's responsive system watches the viewport. VeloraCSS components watch ",(0,a.jsx)("em",{children:"themselves"}),". Drag the box handle — the card reflows based on its own container width, not the screen size."]}),(0,a.jsx)("div",{style:{marginBottom:"1rem",fontSize:"0.75rem",color:"var(--vt3)"},children:"↙ Drag the bottom-right corner to resize"}),(0,a.jsx)("div",{className:"vhome-cq-outer",children:(0,a.jsxs)("div",{className:"vhome-cq-card",children:[(0,a.jsxs)("div",{className:"vhome-cq-inner",children:[(0,a.jsx)("div",{className:"vhome-cq-img",children:"◈"}),(0,a.jsxs)("div",{className:"vhome-cq-body",children:[(0,a.jsx)("span",{className:"vhome-cq-tag",children:"Container Query"}),(0,a.jsx)("div",{className:"vhome-cq-title",children:"Adapts to its space"}),(0,a.jsx)("div",{className:"vhome-cq-desc",children:"Stacks in tight containers, reflows when there's room. No media queries."})]})]}),(0,a.jsx)("div",{className:"vhome-cq-footer",children:"@container — watching width"})]})})]}),(0,a.jsx)("div",{children:(0,a.jsx)(l,{filename:"velora.css",children:`<span class="tc-comment">/* Mark the parent as a query context */</span>
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
<span class="tc-comment">/* No JavaScript. No class toggling. Just CSS. */</span>`})})]})})}),(0,a.jsx)("section",{className:"vhome-section",children:(0,a.jsxs)("div",{className:"vhome-wrap",children:[(0,a.jsx)("span",{className:"vhome-section-eyebrow",children:"Innovation 04"}),(0,a.jsxs)("h2",{className:"vhome-section-title",children:["One attribute.",(0,a.jsx)("br",{}),"Entire theme cascade."]}),(0,a.jsxs)("p",{className:"vhome-section-desc",children:["Set ",(0,a.jsx)("code",{children:"data-vel-theme"})," on any element and every child automatically inherits a new color world. Click the themes below to see it live."]}),(0,a.jsxs)("div",{className:"vhome-split",style:{alignItems:"flex-start"},children:[(0,a.jsx)(i,{}),(0,a.jsx)(l,{filename:"velora.css",children:`<span class="tc-comment">/* One line per theme — hue shift handles everything */</span>
[<span class="tc-prop">data-vel-theme</span>="<span class="tc-str">ocean</span>"]  { <span class="tc-prop">--vel-dna-hue</span>: <span class="tc-num">205</span>; }
[<span class="tc-prop">data-vel-theme</span>="<span class="tc-str">forest</span>"] { <span class="tc-prop">--vel-dna-hue</span>: <span class="tc-num">145</span>; }
[<span class="tc-prop">data-vel-theme</span>="<span class="tc-str">ember</span>"]  { <span class="tc-prop">--vel-dna-hue</span>: <span class="tc-num">22</span>;  }
[<span class="tc-prop">data-vel-theme</span>="<span class="tc-str">aurora</span>"] { <span class="tc-prop">--vel-dna-hue</span>: <span class="tc-num">300</span>; }

<span class="tc-comment">/* All tokens derive from the hue — nothing to override */</span>
<span class="tc-prop">--vel-color-primary</span>: <span class="tc-fn">oklch</span>(<span class="tc-num">65% 0.21</span> <span class="tc-fn">var</span>(<span class="tc-prop">--vel-dna-hue</span>));
<span class="tc-prop">--vel-surface-1</span>:     <span class="tc-fn">oklch</span>(<span class="tc-num">10% 0.025</span> <span class="tc-fn">var</span>(<span class="tc-prop">--vel-dna-hue</span>));

<span class="tc-comment">/* The entire theming "logic" in JavaScript: */</span>
<span class="tc-cls">el</span>.dataset.<span class="tc-fn">velTheme</span> = <span class="tc-str">'ocean'</span>;</span>`})]})]})}),(0,a.jsx)("section",{className:"vhome-section",children:(0,a.jsx)("div",{className:"vhome-wrap",children:(0,a.jsxs)("div",{className:"vhome-split",children:[(0,a.jsxs)("div",{children:[(0,a.jsx)("span",{className:"vhome-section-eyebrow",children:"Innovation 05"}),(0,a.jsxs)("h2",{className:"vhome-section-title",children:["Form validation.",(0,a.jsx)("br",{}),"Zero JavaScript."]}),(0,a.jsxs)("p",{className:"vhome-section-desc",children:["VeloraCSS uses ",(0,a.jsx)("code",{children:":has()"})," with ",(0,a.jsx)("code",{children:":valid"})," and ",(0,a.jsx)("code",{children:":invalid"}),"to build a complete validation UI in pure CSS. Type in the fields below — labels change color, error messages appear, borders react. No JS needed."]}),(0,a.jsxs)("div",{style:{display:"grid",gap:"1.25rem",maxWidth:"380px"},children:[(0,a.jsxs)("div",{className:"vhome-field",children:[(0,a.jsx)("label",{htmlFor:"h-name",children:"Full name"}),(0,a.jsx)("input",{type:"text",id:"h-name",className:"vhome-input",placeholder:"Jane Smith",minLength:2,required:!0}),(0,a.jsx)("span",{className:"vhome-field-hint",children:"At least 2 characters"}),(0,a.jsx)("span",{className:"vhome-field-error",children:"Name must be at least 2 characters"}),(0,a.jsx)("span",{className:"vhome-field-ok",children:"Looks good!"})]}),(0,a.jsxs)("div",{className:"vhome-field",children:[(0,a.jsx)("label",{htmlFor:"h-email",children:"Email address"}),(0,a.jsx)("input",{type:"email",id:"h-email",className:"vhome-input",placeholder:"jane@example.com",required:!0}),(0,a.jsx)("span",{className:"vhome-field-hint",children:"We'll never share your email"}),(0,a.jsx)("span",{className:"vhome-field-error",children:"Enter a valid email address"}),(0,a.jsx)("span",{className:"vhome-field-ok",children:"Valid email address"})]})]})]}),(0,a.jsx)(l,{filename:"velora.css",children:`<span class="tc-comment">/* :has() reads browser validity — no JS needed */</span>

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
}</span>`})]})})}),(0,a.jsx)("section",{className:"vhome-section",children:(0,a.jsxs)("div",{className:"vhome-wrap",children:[(0,a.jsx)("span",{className:"vhome-section-eyebrow",children:"Rich component library"}),(0,a.jsxs)("h2",{className:"vhome-section-title",children:["29 components,",(0,a.jsx)("br",{}),"all using the DNA system."]}),(0,a.jsx)("p",{className:"vhome-section-desc",style:{marginBottom:"2rem"},children:"Every component is built with the same token cascade. Change the DNA hue above and watch every button, badge, and card adapt instantly."}),(0,a.jsxs)("div",{className:"vhome-component-grid",children:[(0,a.jsxs)("div",{className:"vhome-component-preview",children:[(0,a.jsx)("div",{className:"vhome-component-preview-header",children:"Buttons"}),(0,a.jsxs)("div",{className:"vhome-component-preview-body",children:[(0,a.jsxs)("div",{className:"vel-flex vel-flex-wrap vel-gap-2 vel-mb-3",children:[(0,a.jsx)("button",{className:"vel-btn vel-btn-primary",children:"Primary"}),(0,a.jsx)("button",{className:"vel-btn vel-btn-secondary",children:"Secondary"}),(0,a.jsx)("button",{className:"vel-btn vel-btn-success",children:"Success"}),(0,a.jsx)("button",{className:"vel-btn vel-btn-danger",children:"Danger"})]}),(0,a.jsxs)("div",{className:"vel-flex vel-flex-wrap vel-gap-2",children:[(0,a.jsx)("button",{className:"vel-btn vel-btn-outline-primary",children:"Outline"}),(0,a.jsx)("button",{className:"vel-btn vel-btn-ghost",children:"Ghost"}),(0,a.jsx)("button",{className:"vel-btn vel-btn-primary vel-btn-sm",children:"Small"}),(0,a.jsx)("button",{className:"vel-btn vel-btn-primary",disabled:!0,children:"Disabled"})]})]})]}),(0,a.jsxs)("div",{className:"vhome-component-preview",children:[(0,a.jsx)("div",{className:"vhome-component-preview-header",children:"Badges & Alerts"}),(0,a.jsxs)("div",{className:"vhome-component-preview-body",children:[(0,a.jsxs)("div",{className:"vel-flex vel-flex-wrap vel-gap-2 vel-mb-3",children:[(0,a.jsx)("span",{className:"vel-badge vel-badge-primary",children:"Primary"}),(0,a.jsx)("span",{className:"vel-badge vel-badge-success",children:"Success"}),(0,a.jsx)("span",{className:"vel-badge vel-badge-danger",children:"Danger"}),(0,a.jsx)("span",{className:"vel-badge vel-badge-warning",children:"Warning"}),(0,a.jsx)("span",{className:"vel-badge vel-badge-info",children:"Info"})]}),(0,a.jsx)("div",{className:"vel-alert vel-alert-info",style:{fontSize:"0.8125rem"},children:"Info — Something worth knowing."})]})]}),(0,a.jsxs)("div",{className:"vhome-component-preview",children:[(0,a.jsx)("div",{className:"vhome-component-preview-header",children:"Cards"}),(0,a.jsx)("div",{className:"vhome-component-preview-body",style:{padding:"0.75rem"},children:(0,a.jsx)("div",{className:"vel-card vel-card-hover",style:{marginBottom:"0.5rem"},children:(0,a.jsxs)("div",{className:"vel-card-body",style:{padding:"0.875rem"},children:[(0,a.jsx)("p",{style:{fontSize:"0.8125rem",color:"var(--vt2, #94a3b8)"},children:"Hover to see elevation."}),(0,a.jsx)("button",{className:"vel-btn vel-btn-primary vel-btn-sm",style:{marginTop:"0.5rem"},children:"Action"})]})})})]}),(0,a.jsxs)("div",{className:"vhome-component-preview",children:[(0,a.jsx)("div",{className:"vhome-component-preview-header",children:"Steps"}),(0,a.jsx)("div",{className:"vhome-component-preview-body",children:(0,a.jsxs)("div",{className:"vel-steps",children:[(0,a.jsxs)("div",{className:"vel-step vel-step-complete",children:[(0,a.jsx)("div",{className:"vel-step-indicator",children:"✓"}),(0,a.jsx)("div",{className:"vel-step-label",children:"Account"})]}),(0,a.jsxs)("div",{className:"vel-step vel-step-active",children:[(0,a.jsx)("div",{className:"vel-step-indicator",children:"2"}),(0,a.jsx)("div",{className:"vel-step-label",children:"Profile"})]}),(0,a.jsxs)("div",{className:"vel-step",children:[(0,a.jsx)("div",{className:"vel-step-indicator",children:"3"}),(0,a.jsx)("div",{className:"vel-step-label",children:"Billing"})]})]})})]}),(0,a.jsxs)("div",{className:"vhome-component-preview",children:[(0,a.jsx)("div",{className:"vhome-component-preview-header",children:"Skeleton Loaders"}),(0,a.jsxs)("div",{className:"vhome-component-preview-body",children:[(0,a.jsxs)("div",{className:"vel-flex vel-gap-3 vel-mb-3",children:[(0,a.jsx)("div",{className:"vel-skeleton vel-skeleton-avatar-lg"}),(0,a.jsxs)("div",{style:{flex:1},children:[(0,a.jsx)("div",{className:"vel-skeleton vel-skeleton-text vel-skeleton-lg vel-mb-2"}),(0,a.jsx)("div",{className:"vel-skeleton vel-skeleton-text vel-skeleton-sm"})]})]}),(0,a.jsx)("div",{className:"vel-skeleton vel-skeleton-rect",style:{width:"100%",height:"48px"}})]})]}),(0,a.jsxs)("div",{className:"vhome-component-preview",children:[(0,a.jsx)("div",{className:"vhome-component-preview-header",children:"Keyboard & Dividers"}),(0,a.jsxs)("div",{className:"vhome-component-preview-body",children:[(0,a.jsxs)("div",{className:"vel-flex vel-flex-wrap vel-gap-3 vel-mb-4",children:[(0,a.jsxs)("span",{className:"vel-kbd-combo",children:[(0,a.jsx)("kbd",{className:"vel-kbd",children:"Ctrl"}),(0,a.jsx)("kbd",{className:"vel-kbd",children:"K"})]}),(0,a.jsxs)("span",{className:"vel-kbd-combo",children:[(0,a.jsx)("kbd",{className:"vel-kbd",children:"⌘"}),(0,a.jsx)("kbd",{className:"vel-kbd",children:"Shift"}),(0,a.jsx)("kbd",{className:"vel-kbd",children:"P"})]}),(0,a.jsx)("kbd",{className:"vel-kbd vel-kbd-lg",children:"Enter"})]}),(0,a.jsx)("div",{className:"vel-divider",children:"OR"})]})]})]})]})}),(0,a.jsx)("section",{className:"vhome-section",style:{borderBottom:"none"},children:(0,a.jsx)("div",{className:"vhome-wrap",children:(0,a.jsx)("div",{className:"vhome-stats",children:[{num:"300+",label:"utility classes"},{num:"29",label:"components"},{num:"6",label:"CSS innovations"},{num:"0",label:"dependencies"}].map(e=>(0,a.jsxs)("div",{className:"vhome-stat",children:[(0,a.jsx)("span",{className:"vhome-stat-num",children:e.num}),(0,a.jsx)("span",{className:"vhome-stat-label",children:e.label})]},e.label))})})}),(0,a.jsx)("section",{className:"vhome-cta-section",children:(0,a.jsxs)("div",{className:"vhome-wrap",children:[(0,a.jsxs)("h2",{children:["Ready to build",(0,a.jsx)("br",{}),"something ",(0,a.jsx)("em",{style:{fontStyle:"normal",color:"var(--vp)"},children:"extraordinary?"})]}),(0,a.jsx)("p",{children:"Start with the docs, explore the playground, or dive into the source. VeloraCSS is open source and ready to use today."}),(0,a.jsxs)("div",{className:"vhome-hero-ctas",children:[(0,a.jsx)(s.default,{href:o,className:"vhome-cta-primary",children:"Get Started →"}),(0,a.jsx)("a",{href:n,target:"_blank",rel:"noopener noreferrer",className:"vhome-cta-secondary",children:"Open Playground"}),(0,a.jsx)("a",{href:"https://github.com/VeloraX/veloracss",target:"_blank",rel:"noopener noreferrer",className:"vhome-cta-ghost",children:"View Source"})]})]})}),(0,a.jsx)("footer",{className:"vhome-footer",children:(0,a.jsxs)("div",{className:"vhome-wrap",style:{display:"flex",alignItems:"center",justifyContent:"space-between",flexWrap:"wrap",gap:"1rem",width:"100%"},children:[(0,a.jsx)("span",{className:"vhome-footer-copy",children:"VeloraCSS v0.3.0 — AI-designed. Human-shipped."}),(0,a.jsxs)("div",{className:"vhome-footer-links",children:[(0,a.jsx)(s.default,{href:o,className:"vhome-footer-link",children:"Docs"}),(0,a.jsx)("a",{href:n,target:"_blank",rel:"noopener noreferrer",className:"vhome-footer-link",children:"Playground"}),(0,a.jsx)("a",{href:"https://github.com/VeloraX/veloracss",target:"_blank",rel:"noopener noreferrer",className:"vhome-footer-link",children:"GitHub"})]})]})})]})]})}e.s(["default",()=>c])}]);