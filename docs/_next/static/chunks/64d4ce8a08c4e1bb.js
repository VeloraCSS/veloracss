(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,49778,(e,r,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"warnOnce",{enumerable:!0,get:function(){return n}});let n=e=>{}},63640,(e,r,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n={assign:function(){return s},searchParamsToUrlQuery:function(){return a},urlQueryToSearchParams:function(){return i}};for(var o in n)Object.defineProperty(t,o,{enumerable:!0,get:n[o]});function a(e){let r={};for(let[t,n]of e.entries()){let e=r[t];void 0===e?r[t]=n:Array.isArray(e)?e.push(n):r[t]=[e,n]}return r}function l(e){return"string"==typeof e?e:("number"!=typeof e||isNaN(e))&&"boolean"!=typeof e?"":String(e)}function i(e){let r=new URLSearchParams;for(let[t,n]of Object.entries(e))if(Array.isArray(n))for(let e of n)r.append(t,l(e));else r.set(t,l(n));return r}function s(e,...r){for(let t of r){for(let r of t.keys())e.delete(r);for(let[r,n]of t.entries())e.append(r,n)}return e}},60026,(e,r,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n={formatUrl:function(){return i},formatWithValidation:function(){return c},urlObjectKeys:function(){return s}};for(var o in n)Object.defineProperty(t,o,{enumerable:!0,get:n[o]});let a=e.r(19926)._(e.r(63640)),l=/https?|ftp|gopher|file/;function i(e){let{auth:r,hostname:t}=e,n=e.protocol||"",o=e.pathname||"",i=e.hash||"",s=e.query||"",c=!1;r=r?encodeURIComponent(r).replace(/%3A/i,":")+"@":"",e.host?c=r+e.host:t&&(c=r+(~t.indexOf(":")?`[${t}]`:t),e.port&&(c+=":"+e.port)),s&&"object"==typeof s&&(s=String(a.urlQueryToSearchParams(s)));let u=e.search||s&&`?${s}`||"";return n&&!n.endsWith(":")&&(n+=":"),e.slashes||(!n||l.test(n))&&!1!==c?(c="//"+(c||""),o&&"/"!==o[0]&&(o="/"+o)):c||(c=""),i&&"#"!==i[0]&&(i="#"+i),u&&"?"!==u[0]&&(u="?"+u),o=o.replace(/[?#]/g,encodeURIComponent),u=u.replace("#","%23"),`${n}${c}${o}${u}${i}`}let s=["auth","hash","host","hostname","href","path","pathname","port","protocol","query","search","slashes"];function c(e){return i(e)}},94493,(e,r,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"useMergedRef",{enumerable:!0,get:function(){return o}});let n=e.r(34726);function o(e,r){let t=(0,n.useRef)(null),o=(0,n.useRef)(null);return(0,n.useCallback)(n=>{if(null===n){let e=t.current;e&&(t.current=null,e());let r=o.current;r&&(o.current=null,r())}else e&&(t.current=a(e,n)),r&&(o.current=a(r,n))},[e,r])}function a(e,r){if("function"!=typeof e)return e.current=r,()=>{e.current=null};{let t=e(r);return"function"==typeof t?t:()=>e(null)}}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),r.exports=t.default)},46574,(e,r,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n={DecodeError:function(){return g},MiddlewareNotFoundError:function(){return j},MissingStaticPage:function(){return x},NormalizeError:function(){return b},PageNotFoundError:function(){return y},SP:function(){return h},ST:function(){return m},WEB_VITALS:function(){return a},execOnce:function(){return l},getDisplayName:function(){return d},getLocationOrigin:function(){return c},getURL:function(){return u},isAbsoluteUrl:function(){return s},isResSent:function(){return f},loadGetInitialProps:function(){return v},normalizeRepeatedSlashes:function(){return p},stringifyError:function(){return k}};for(var o in n)Object.defineProperty(t,o,{enumerable:!0,get:n[o]});let a=["CLS","FCP","FID","INP","LCP","TTFB"];function l(e){let r,t=!1;return(...n)=>(t||(t=!0,r=e(...n)),r)}let i=/^[a-zA-Z][a-zA-Z\d+\-.]*?:/,s=e=>i.test(e);function c(){let{protocol:e,hostname:r,port:t}=window.location;return`${e}//${r}${t?":"+t:""}`}function u(){let{href:e}=window.location,r=c();return e.substring(r.length)}function d(e){return"string"==typeof e?e:e.displayName||e.name||"Unknown"}function f(e){return e.finished||e.headersSent}function p(e){let r=e.split("?");return r[0].replace(/\\/g,"/").replace(/\/\/+/g,"/")+(r[1]?`?${r.slice(1).join("?")}`:"")}async function v(e,r){let t=r.res||r.ctx&&r.ctx.res;if(!e.getInitialProps)return r.ctx&&r.Component?{pageProps:await v(r.Component,r.ctx)}:{};let n=await e.getInitialProps(r);if(t&&f(t))return n;if(!n)throw Object.defineProperty(Error(`"${d(e)}.getInitialProps()" should resolve to an object. But found "${n}" instead.`),"__NEXT_ERROR_CODE",{value:"E394",enumerable:!1,configurable:!0});return n}let h="u">typeof performance,m=h&&["mark","measure","getEntriesByName"].every(e=>"function"==typeof performance[e]);class g extends Error{}class b extends Error{}class y extends Error{constructor(e){super(),this.code="ENOENT",this.name="PageNotFoundError",this.message=`Cannot find module for page: ${e}`}}class x extends Error{constructor(e,r){super(),this.message=`Failed to load static file for page: ${e} ${r}`}}class j extends Error{constructor(){super(),this.code="ENOENT",this.message="Cannot find the middleware module"}}function k(e){return JSON.stringify({message:e.message,stack:e.stack})}},99309,(e,r,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"isLocalURL",{enumerable:!0,get:function(){return a}});let n=e.r(46574),o=e.r(81953);function a(e){if(!(0,n.isAbsoluteUrl)(e))return!0;try{let r=(0,n.getLocationOrigin)(),t=new URL(e,r);return t.origin===r&&(0,o.hasBasePath)(t.pathname)}catch(e){return!1}}},14328,(e,r,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"errorOnce",{enumerable:!0,get:function(){return n}});let n=e=>{}},15457,(e,r,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n={default:function(){return g},useLinkStatus:function(){return y}};for(var o in n)Object.defineProperty(t,o,{enumerable:!0,get:n[o]});let a=e.r(19926),l=e.r(92944),i=a._(e.r(34726)),s=e.r(60026),c=e.r(27507),u=e.r(94493),d=e.r(46574),f=e.r(22030);e.r(49778);let p=e.r(42161),v=e.r(99309),h=e.r(73271);function m(e){return"string"==typeof e?e:(0,s.formatUrl)(e)}function g(r){var t;let n,o,a,[s,g]=(0,i.useOptimistic)(p.IDLE_LINK_STATUS),y=(0,i.useRef)(null),{href:x,as:j,children:k,prefetch:N=null,passHref:w,replace:P,shallow:_,scroll:C,onClick:O,onMouseEnter:E,onTouchStart:S,legacyBehavior:T=!1,onNavigate:R,ref:M,unstable_dynamicOnHover:z,...I}=r;n=k,T&&("string"==typeof n||"number"==typeof n)&&(n=(0,l.jsx)("a",{children:n}));let L=i.default.useContext(c.AppRouterContext),A=!1!==N,U=!1!==N?null===(t=N)||"auto"===t?h.FetchStrategy.PPR:h.FetchStrategy.Full:h.FetchStrategy.PPR,{href:$,as:F}=i.default.useMemo(()=>{let e=m(x);return{href:e,as:j?m(j):e}},[x,j]);if(T){if(n?.$$typeof===Symbol.for("react.lazy"))throw Object.defineProperty(Error("`<Link legacyBehavior>` received a direct child that is either a Server Component, or JSX that was loaded with React.lazy(). This is not supported. Either remove legacyBehavior, or make the direct child a Client Component that renders the Link's `<a>` tag."),"__NEXT_ERROR_CODE",{value:"E863",enumerable:!1,configurable:!0});o=i.default.Children.only(n)}let B=T?o&&"object"==typeof o&&o.ref:M,D=i.default.useCallback(e=>(null!==L&&(y.current=(0,p.mountLinkInstance)(e,$,L,U,A,g)),()=>{y.current&&((0,p.unmountLinkForCurrentNavigation)(y.current),y.current=null),(0,p.unmountPrefetchableInstance)(e)}),[A,$,L,U,g]),K={ref:(0,u.useMergedRef)(D,B),onClick(r){T||"function"!=typeof O||O(r),T&&o.props&&"function"==typeof o.props.onClick&&o.props.onClick(r),!L||r.defaultPrevented||function(r,t,n,o,a,l,s){if("u">typeof window){let c,{nodeName:u}=r.currentTarget;if("A"===u.toUpperCase()&&((c=r.currentTarget.getAttribute("target"))&&"_self"!==c||r.metaKey||r.ctrlKey||r.shiftKey||r.altKey||r.nativeEvent&&2===r.nativeEvent.which)||r.currentTarget.hasAttribute("download"))return;if(!(0,v.isLocalURL)(t)){a&&(r.preventDefault(),location.replace(t));return}if(r.preventDefault(),s){let e=!1;if(s({preventDefault:()=>{e=!0}}),e)return}let{dispatchNavigateAction:d}=e.r(28020);i.default.startTransition(()=>{d(n||t,a?"replace":"push",l??!0,o.current)})}}(r,$,F,y,P,C,R)},onMouseEnter(e){T||"function"!=typeof E||E(e),T&&o.props&&"function"==typeof o.props.onMouseEnter&&o.props.onMouseEnter(e),L&&A&&(0,p.onNavigationIntent)(e.currentTarget,!0===z)},onTouchStart:function(e){T||"function"!=typeof S||S(e),T&&o.props&&"function"==typeof o.props.onTouchStart&&o.props.onTouchStart(e),L&&A&&(0,p.onNavigationIntent)(e.currentTarget,!0===z)}};return(0,d.isAbsoluteUrl)(F)?K.href=F:T&&!w&&("a"!==o.type||"href"in o.props)||(K.href=(0,f.addBasePath)(F)),a=T?i.default.cloneElement(o,K):(0,l.jsx)("a",{...I,...K,children:n}),(0,l.jsx)(b.Provider,{value:s,children:a})}e.r(14328);let b=(0,i.createContext)(p.IDLE_LINK_STATUS),y=()=>(0,i.useContext)(b);("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),r.exports=t.default)},79360,e=>{"use strict";var r=e.i(92944),t=e.i(34726),n=e.i(15457);let o="/veloracss/docs",a=`
  #vel-404 {
    --vel-dna-hue: 258;
    --vp:        oklch(65% 0.21 var(--vel-dna-hue));
    --vp-light:  oklch(80% 0.14 var(--vel-dna-hue));
    --vp-glow:   oklch(65% 0.21 var(--vel-dna-hue) / 0.18);
    --vp-subtle: oklch(65% 0.21 var(--vel-dna-hue) / 0.09);
    --vs0: oklch(7%  0.02  var(--vel-dna-hue));
    --vs1: oklch(10% 0.025 var(--vel-dna-hue));
    --vs2: oklch(13% 0.03  var(--vel-dna-hue));
    --vs3: oklch(17% 0.035 var(--vel-dna-hue));
    --vborder: oklch(26% 0.045 var(--vel-dna-hue));
    --vt1: oklch(92% 0.015 var(--vel-dna-hue));
    --vt2: oklch(70% 0.03  var(--vel-dna-hue));
    --vt3: oklch(50% 0.04  var(--vel-dna-hue));
    min-height: 100vh;
    background: var(--vs0);
    color: var(--vt1);
    font-family: system-ui, -apple-system, 'Segoe UI', sans-serif;
    -webkit-font-smoothing: antialiased;
    display: flex; flex-direction: column;
  }
  #vel-404 * { box-sizing: border-box; }
  .v404-nav {
    height: 56px; display: flex; align-items: center; justify-content: space-between;
    padding: 0 clamp(1rem, 4vw, 3rem);
    background: var(--vs0); border-bottom: 1px solid var(--vborder);
  }
  .v404-nav-links { display: flex; gap: 1.25rem; }
  .v404-nav-link {
    font-size: 0.875rem; font-weight: 500; color: var(--vt2); text-decoration: none;
    transition: color 200ms;
  }
  .v404-nav-link:hover { color: var(--vt1); }
  .v404-body {
    flex: 1; display: flex; flex-direction: column;
    align-items: center; justify-content: center;
    text-align: center; padding: clamp(2rem, 8vw, 6rem) clamp(1rem, 4vw, 3rem);
    position: relative; overflow: hidden;
  }
  .v404-body::before {
    content: '';
    position: absolute; inset: 0;
    background: radial-gradient(ellipse 60% 60% at 50% 50%, var(--vp-glow), transparent 70%);
    pointer-events: none;
  }
  .v404-num {
    font-size: clamp(6rem, 18vw, 12rem); font-weight: 900; line-height: 1;
    letter-spacing: -0.05em; color: var(--vp);
    opacity: 0.15; position: absolute;
    user-select: none; pointer-events: none;
  }
  .v404-content { position: relative; z-index: 1; }
  .v404-tag {
    display: inline-flex; align-items: center; gap: 0.5rem;
    font-size: 0.7rem; font-weight: 700; letter-spacing: 0.12em; text-transform: uppercase;
    color: var(--vp); background: var(--vp-subtle);
    border: 1px solid var(--vp-glow); border-radius: 9999px;
    padding: 0.35rem 1rem; margin-bottom: 1.5rem;
  }
  .v404-tag::before {
    content: ''; width: 6px; height: 6px; border-radius: 50%; background: var(--vp);
  }
  .v404-title {
    font-size: clamp(2rem, 5vw, 3.5rem); font-weight: 900;
    letter-spacing: -0.03em; line-height: 1.1; margin-bottom: 1rem;
  }
  .v404-title em { font-style: normal; color: var(--vp); }
  .v404-desc {
    font-size: 1.0625rem; color: var(--vt2); max-width: 460px;
    margin: 0 auto 2.5rem; line-height: 1.7;
  }
  .v404-actions { display: flex; gap: 0.75rem; justify-content: center; flex-wrap: wrap; }
  .v404-btn-primary {
    font-size: 0.9375rem; font-weight: 700; padding: 0.75rem 1.75rem;
    border-radius: 0.625rem; background: var(--vp);
    color: oklch(12% 0.02 var(--vel-dna-hue));
    text-decoration: none; border: none; cursor: pointer;
    transition: all 220ms cubic-bezier(0.16,1,0.3,1);
  }
  .v404-btn-primary:hover { background: var(--vp-light); transform: translateY(-1px); }
  .v404-btn-secondary {
    font-size: 0.9375rem; font-weight: 600; padding: 0.75rem 1.75rem;
    border-radius: 0.625rem; background: var(--vs2); color: var(--vt1);
    text-decoration: none; border: 1px solid var(--vborder); cursor: pointer;
    transition: all 220ms cubic-bezier(0.16,1,0.3,1);
  }
  .v404-btn-secondary:hover { border-color: var(--vp); color: var(--vp); }
  .v404-terminal {
    margin-top: 3rem; text-align: left;
    background: #1a1a1a; border: 1px solid #333; border-radius: 0.625rem;
    overflow: hidden; max-width: 520px; width: 100%;
    box-shadow: 0 20px 60px -12px rgba(0,0,0,0.6);
  }
  .v404-terminal-bar {
    display: flex; align-items: center; height: 36px; gap: 0.5rem;
    padding: 0 0.875rem; background: #252525; border-bottom: 1px solid #333;
  }
  .v404-terminal-dots {
    display: flex; gap: 6px; align-items: center; flex-shrink: 0;
  }
  .v404-terminal-dot {
    width: 12px; height: 12px; border-radius: 50%;
  }
  .v404-terminal-title {
    font-size: 0.72rem; color: #888; flex: 1; text-align: center;
    font-family: 'Cascadia Code', Menlo, Monaco, monospace;
  }
  .v404-terminal-body {
    padding: 1rem 1.25rem;
    font-family: 'Cascadia Code', Menlo, Monaco, Consolas, monospace;
    font-size: 0.8125rem; line-height: 1.8; color: #CCCCCC;
  }
  .v404-prompt { color: #0ecb81; }
  .v404-error { color: #f87171; }
  .v404-cmd { color: #9cdcfe; }
  .v404-footer {
    padding: 1.5rem clamp(1rem, 4vw, 3rem);
    border-top: 1px solid oklch(20% 0.035 var(--vel-dna-hue));
    display: flex; align-items: center; justify-content: space-between;
    flex-wrap: wrap; gap: 0.75rem;
  }
  .v404-footer-copy { font-size: 0.8125rem; color: var(--vt3); }
  .v404-footer-links { display: flex; gap: 1.25rem; }
  .v404-footer-link {
    font-size: 0.8125rem; color: var(--vt3); text-decoration: none;
    transition: color 200ms;
  }
  .v404-footer-link:hover { color: var(--vt1); }
`;function l(){let[e,l]=(0,t.useState)(258),i=(0,t.useCallback)(e=>{let r=Number(e.target.value);l(r),document.getElementById("vel-404")?.style.setProperty("--vel-dna-hue",String(r))},[]);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("style",{dangerouslySetInnerHTML:{__html:a}}),(0,r.jsxs)("div",{id:"vel-404",style:{"--vel-dna-hue":"258"},children:[(0,r.jsxs)("nav",{className:"v404-nav",children:[(0,r.jsx)("span",{style:{fontWeight:800,fontSize:"1rem",color:"var(--vp)"},children:"Velora"}),(0,r.jsxs)("div",{className:"v404-nav-links",children:[(0,r.jsx)(n.default,{href:"/",className:"v404-nav-link",children:"Home"}),(0,r.jsx)(n.default,{href:o,className:"v404-nav-link",children:"Docs"}),(0,r.jsx)("a",{href:"https://github.com/VeloraX/veloracss",target:"_blank",rel:"noopener noreferrer",className:"v404-nav-link",children:"GitHub"})]})]}),(0,r.jsxs)("div",{className:"v404-body",children:[(0,r.jsx)("div",{className:"v404-num",children:"404"}),(0,r.jsxs)("div",{className:"v404-content",children:[(0,r.jsx)("div",{className:"v404-tag",children:"404 — Page not found"}),(0,r.jsxs)("h1",{className:"v404-title",children:["This page",(0,r.jsx)("br",{}),(0,r.jsx)("em",{children:"doesn't exist."})]}),(0,r.jsx)("p",{className:"v404-desc",children:"The page you were looking for has either moved, been deleted, or never existed. Head back home or explore the docs."}),(0,r.jsxs)("div",{className:"v404-actions",children:[(0,r.jsx)(n.default,{href:"/",className:"v404-btn-primary",children:"← Back to Home"}),(0,r.jsx)(n.default,{href:o,className:"v404-btn-secondary",children:"Browse Docs"})]}),(0,r.jsxs)("div",{className:"v404-terminal",children:[(0,r.jsxs)("div",{className:"v404-terminal-bar",children:[(0,r.jsxs)("div",{className:"v404-terminal-dots",children:[(0,r.jsx)("div",{className:"v404-terminal-dot",style:{background:"#ff5f57"}}),(0,r.jsx)("div",{className:"v404-terminal-dot",style:{background:"#ffbd2e"}}),(0,r.jsx)("div",{className:"v404-terminal-dot",style:{background:"#28c840"}})]}),(0,r.jsx)("span",{className:"v404-terminal-title",children:"velora — zsh"})]}),(0,r.jsxs)("div",{className:"v404-terminal-body",children:[(0,r.jsx)("span",{className:"v404-prompt",children:"~"}),(0,r.jsx)("span",{style:{color:"#888"},children:" $ "}),(0,r.jsx)("span",{className:"v404-cmd",children:"curl https://velorax.github.io/this-page"}),(0,r.jsx)("br",{}),(0,r.jsx)("span",{className:"v404-error",children:"curl: (404) Not Found — the requested resource does not exist"}),(0,r.jsx)("br",{}),(0,r.jsx)("br",{}),(0,r.jsx)("span",{className:"v404-prompt",children:"~"}),(0,r.jsx)("span",{style:{color:"#888"},children:" $ "}),(0,r.jsx)("span",{className:"v404-cmd",children:"open https://velorax.github.io/veloracss"}),(0,r.jsx)("br",{}),(0,r.jsx)("span",{style:{color:"#0ecb81"},children:"200 OK — redirecting to homepage..."})]})]}),(0,r.jsxs)("div",{style:{marginTop:"2rem",display:"flex",alignItems:"center",gap:"0.75rem",opacity:.6},children:[(0,r.jsxs)("span",{style:{fontSize:"0.7rem",color:"var(--vt3)",fontFamily:"monospace"},children:["--vel-dna-hue: ",e]}),(0,r.jsx)("input",{type:"range",min:"0",max:"360",value:e,onChange:i,style:{width:"120px",height:"4px",borderRadius:"2px",cursor:"pointer",background:"linear-gradient(to right in oklch, oklch(65% 0.21 0), oklch(65% 0.21 120), oklch(65% 0.21 240), oklch(65% 0.21 360))",WebkitAppearance:"none",appearance:"none"}})]})]})]}),(0,r.jsxs)("footer",{className:"v404-footer",children:[(0,r.jsx)("span",{className:"v404-footer-copy",children:"VeloraCSS — AI-designed. Human-shipped."}),(0,r.jsxs)("div",{className:"v404-footer-links",children:[(0,r.jsx)(n.default,{href:"/",className:"v404-footer-link",children:"Home"}),(0,r.jsx)(n.default,{href:o,className:"v404-footer-link",children:"Docs"}),(0,r.jsx)("a",{href:"https://github.com/VeloraX/veloracss",target:"_blank",rel:"noopener noreferrer",className:"v404-footer-link",children:"GitHub"})]})]})]})]})}e.s(["default",()=>l])}]);