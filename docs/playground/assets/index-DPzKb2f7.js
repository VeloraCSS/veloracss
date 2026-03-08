(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))l(t);new MutationObserver(t=>{for(const a of t)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&l(o)}).observe(document,{childList:!0,subtree:!0});function r(t){const a={};return t.integrity&&(a.integrity=t.integrity),t.referrerPolicy&&(a.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?a.credentials="include":t.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function l(t){if(t.ep)return;t.ep=!0;const a=r(t);fetch(t.href,a)}})();function gi(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var hi={exports:{}},ht={},xi={exports:{}},F={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var il=Symbol.for("react.element"),Ac=Symbol.for("react.portal"),Bc=Symbol.for("react.fragment"),Yc=Symbol.for("react.strict_mode"),$c=Symbol.for("react.profiler"),Xc=Symbol.for("react.provider"),Hc=Symbol.for("react.context"),Wc=Symbol.for("react.forward_ref"),Qc=Symbol.for("react.suspense"),Gc=Symbol.for("react.memo"),Kc=Symbol.for("react.lazy"),Zo=Symbol.iterator;function Zc(e){return e===null||typeof e!="object"?null:(e=Zo&&e[Zo]||e["@@iterator"],typeof e=="function"?e:null)}var bi={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},wi=Object.assign,yi={};function xr(e,n,r){this.props=e,this.context=n,this.refs=yi,this.updater=r||bi}xr.prototype.isReactComponent={};xr.prototype.setState=function(e,n){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,n,"setState")};xr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function ki(){}ki.prototype=xr.prototype;function ro(e,n,r){this.props=e,this.context=n,this.refs=yi,this.updater=r||bi}var lo=ro.prototype=new ki;lo.constructor=ro;wi(lo,xr.prototype);lo.isPureReactComponent=!0;var Jo=Array.isArray,zi=Object.prototype.hasOwnProperty,to={current:null},Si={key:!0,ref:!0,__self:!0,__source:!0};function ji(e,n,r){var l,t={},a=null,o=null;if(n!=null)for(l in n.ref!==void 0&&(o=n.ref),n.key!==void 0&&(a=""+n.key),n)zi.call(n,l)&&!Si.hasOwnProperty(l)&&(t[l]=n[l]);var i=arguments.length-2;if(i===1)t.children=r;else if(1<i){for(var v=Array(i),s=0;s<i;s++)v[s]=arguments[s+2];t.children=v}if(e&&e.defaultProps)for(l in i=e.defaultProps,i)t[l]===void 0&&(t[l]=i[l]);return{$$typeof:il,type:e,key:a,ref:o,props:t,_owner:to.current}}function Jc(e,n){return{$$typeof:il,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}function ao(e){return typeof e=="object"&&e!==null&&e.$$typeof===il}function qc(e){var n={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(r){return n[r]})}var qo=/\/+/g;function Mt(e,n){return typeof e=="object"&&e!==null&&e.key!=null?qc(""+e.key):n.toString(36)}function Ml(e,n,r,l,t){var a=typeof e;(a==="undefined"||a==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(a){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case il:case Ac:o=!0}}if(o)return o=e,t=t(o),e=l===""?"."+Mt(o,0):l,Jo(t)?(r="",e!=null&&(r=e.replace(qo,"$&/")+"/"),Ml(t,n,r,"",function(s){return s})):t!=null&&(ao(t)&&(t=Jc(t,r+(!t.key||o&&o.key===t.key?"":(""+t.key).replace(qo,"$&/")+"/")+e)),n.push(t)),1;if(o=0,l=l===""?".":l+":",Jo(e))for(var i=0;i<e.length;i++){a=e[i];var v=l+Mt(a,i);o+=Ml(a,n,r,v,t)}else if(v=Zc(e),typeof v=="function")for(e=v.call(e),i=0;!(a=e.next()).done;)a=a.value,v=l+Mt(a,i++),o+=Ml(a,n,r,v,t);else if(a==="object")throw n=String(e),Error("Objects are not valid as a React child (found: "+(n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n)+"). If you meant to render a collection of children, use an array instead.");return o}function fl(e,n,r){if(e==null)return e;var l=[],t=0;return Ml(e,l,"","",function(a){return n.call(r,a,t++)}),l}function ed(e){if(e._status===-1){var n=e._result;n=n(),n.then(function(r){(e._status===0||e._status===-1)&&(e._status=1,e._result=r)},function(r){(e._status===0||e._status===-1)&&(e._status=2,e._result=r)}),e._status===-1&&(e._status=0,e._result=n)}if(e._status===1)return e._result.default;throw e._result}var me={current:null},Rl={transition:null},nd={ReactCurrentDispatcher:me,ReactCurrentBatchConfig:Rl,ReactCurrentOwner:to};function Ci(){throw Error("act(...) is not supported in production builds of React.")}F.Children={map:fl,forEach:function(e,n,r){fl(e,function(){n.apply(this,arguments)},r)},count:function(e){var n=0;return fl(e,function(){n++}),n},toArray:function(e){return fl(e,function(n){return n})||[]},only:function(e){if(!ao(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};F.Component=xr;F.Fragment=Bc;F.Profiler=$c;F.PureComponent=ro;F.StrictMode=Yc;F.Suspense=Qc;F.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=nd;F.act=Ci;F.cloneElement=function(e,n,r){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var l=wi({},e.props),t=e.key,a=e.ref,o=e._owner;if(n!=null){if(n.ref!==void 0&&(a=n.ref,o=to.current),n.key!==void 0&&(t=""+n.key),e.type&&e.type.defaultProps)var i=e.type.defaultProps;for(v in n)zi.call(n,v)&&!Si.hasOwnProperty(v)&&(l[v]=n[v]===void 0&&i!==void 0?i[v]:n[v])}var v=arguments.length-2;if(v===1)l.children=r;else if(1<v){i=Array(v);for(var s=0;s<v;s++)i[s]=arguments[s+2];l.children=i}return{$$typeof:il,type:e.type,key:t,ref:a,props:l,_owner:o}};F.createContext=function(e){return e={$$typeof:Hc,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Xc,_context:e},e.Consumer=e};F.createElement=ji;F.createFactory=function(e){var n=ji.bind(null,e);return n.type=e,n};F.createRef=function(){return{current:null}};F.forwardRef=function(e){return{$$typeof:Wc,render:e}};F.isValidElement=ao;F.lazy=function(e){return{$$typeof:Kc,_payload:{_status:-1,_result:e},_init:ed}};F.memo=function(e,n){return{$$typeof:Gc,type:e,compare:n===void 0?null:n}};F.startTransition=function(e){var n=Rl.transition;Rl.transition={};try{e()}finally{Rl.transition=n}};F.unstable_act=Ci;F.useCallback=function(e,n){return me.current.useCallback(e,n)};F.useContext=function(e){return me.current.useContext(e)};F.useDebugValue=function(){};F.useDeferredValue=function(e){return me.current.useDeferredValue(e)};F.useEffect=function(e,n){return me.current.useEffect(e,n)};F.useId=function(){return me.current.useId()};F.useImperativeHandle=function(e,n,r){return me.current.useImperativeHandle(e,n,r)};F.useInsertionEffect=function(e,n){return me.current.useInsertionEffect(e,n)};F.useLayoutEffect=function(e,n){return me.current.useLayoutEffect(e,n)};F.useMemo=function(e,n){return me.current.useMemo(e,n)};F.useReducer=function(e,n,r){return me.current.useReducer(e,n,r)};F.useRef=function(e){return me.current.useRef(e)};F.useState=function(e){return me.current.useState(e)};F.useSyncExternalStore=function(e,n,r){return me.current.useSyncExternalStore(e,n,r)};F.useTransition=function(){return me.current.useTransition()};F.version="18.3.1";xi.exports=F;var _=xi.exports;const tr=gi(_);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var rd=_,ld=Symbol.for("react.element"),td=Symbol.for("react.fragment"),ad=Object.prototype.hasOwnProperty,od=rd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,vd={key:!0,ref:!0,__self:!0,__source:!0};function Ei(e,n,r){var l,t={},a=null,o=null;r!==void 0&&(a=""+r),n.key!==void 0&&(a=""+n.key),n.ref!==void 0&&(o=n.ref);for(l in n)ad.call(n,l)&&!vd.hasOwnProperty(l)&&(t[l]=n[l]);if(e&&e.defaultProps)for(l in n=e.defaultProps,n)t[l]===void 0&&(t[l]=n[l]);return{$$typeof:ld,type:e,key:a,ref:o,props:t,_owner:od.current}}ht.Fragment=td;ht.jsx=Ei;ht.jsxs=Ei;hi.exports=ht;var D=hi.exports,_i={exports:{}},Ce={},Pi={exports:{}},Ti={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function n(j,T){var R=j.length;j.push(T);e:for(;0<R;){var P=R-1>>>1,N=j[P];if(0<t(N,T))j[P]=T,j[R]=N,R=P;else break e}}function r(j){return j.length===0?null:j[0]}function l(j){if(j.length===0)return null;var T=j[0],R=j.pop();if(R!==T){j[0]=R;e:for(var P=0,N=j.length,ne=N>>>1;P<ne;){var we=2*(P+1)-1,$e=j[we],Pn=we+1,pl=j[Pn];if(0>t($e,R))Pn<N&&0>t(pl,$e)?(j[P]=pl,j[Pn]=R,P=Pn):(j[P]=$e,j[we]=R,P=we);else if(Pn<N&&0>t(pl,R))j[P]=pl,j[Pn]=R,P=Pn;else break e}}return T}function t(j,T){var R=j.sortIndex-T.sortIndex;return R!==0?R:j.id-T.id}if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;e.unstable_now=function(){return a.now()}}else{var o=Date,i=o.now();e.unstable_now=function(){return o.now()-i}}var v=[],s=[],g=1,p=null,m=3,y=!1,k=!1,S=!1,M=typeof setTimeout=="function"?setTimeout:null,d=typeof clearTimeout=="function"?clearTimeout:null,c=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function u(j){for(var T=r(s);T!==null;){if(T.callback===null)l(s);else if(T.startTime<=j)l(s),T.sortIndex=T.expirationTime,n(v,T);else break;T=r(s)}}function x(j){if(S=!1,u(j),!k)if(r(v)!==null)k=!0,A(h);else{var T=r(s);T!==null&&_e(x,T.startTime-j)}}function h(j,T){k=!1,S&&(S=!1,d(w),w=-1),y=!0;var R=m;try{for(u(T),p=r(v);p!==null&&(!(p.expirationTime>T)||j&&!ee());){var P=p.callback;if(typeof P=="function"){p.callback=null,m=p.priorityLevel;var N=P(p.expirationTime<=T);T=e.unstable_now(),typeof N=="function"?p.callback=N:p===r(v)&&l(v),u(T)}else l(v);p=r(v)}if(p!==null)var ne=!0;else{var we=r(s);we!==null&&_e(x,we.startTime-T),ne=!1}return ne}finally{p=null,m=R,y=!1}}var f=!1,b=null,w=-1,I=5,E=-1;function ee(){return!(e.unstable_now()-E<I)}function Be(){if(b!==null){var j=e.unstable_now();E=j;var T=!0;try{T=b(!0,j)}finally{T?Ye():(f=!1,b=null)}}else f=!1}var Ye;if(typeof c=="function")Ye=function(){c(Be)};else if(typeof MessageChannel<"u"){var on=new MessageChannel,L=on.port2;on.port1.onmessage=Be,Ye=function(){L.postMessage(null)}}else Ye=function(){M(Be,0)};function A(j){b=j,f||(f=!0,Ye())}function _e(j,T){w=M(function(){j(e.unstable_now())},T)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(j){j.callback=null},e.unstable_continueExecution=function(){k||y||(k=!0,A(h))},e.unstable_forceFrameRate=function(j){0>j||125<j?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):I=0<j?Math.floor(1e3/j):5},e.unstable_getCurrentPriorityLevel=function(){return m},e.unstable_getFirstCallbackNode=function(){return r(v)},e.unstable_next=function(j){switch(m){case 1:case 2:case 3:var T=3;break;default:T=m}var R=m;m=T;try{return j()}finally{m=R}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(j,T){switch(j){case 1:case 2:case 3:case 4:case 5:break;default:j=3}var R=m;m=j;try{return T()}finally{m=R}},e.unstable_scheduleCallback=function(j,T,R){var P=e.unstable_now();switch(typeof R=="object"&&R!==null?(R=R.delay,R=typeof R=="number"&&0<R?P+R:P):R=P,j){case 1:var N=-1;break;case 2:N=250;break;case 5:N=1073741823;break;case 4:N=1e4;break;default:N=5e3}return N=R+N,j={id:g++,callback:T,priorityLevel:j,startTime:R,expirationTime:N,sortIndex:-1},R>P?(j.sortIndex=R,n(s,j),r(v)===null&&j===r(s)&&(S?(d(w),w=-1):S=!0,_e(x,R-P))):(j.sortIndex=N,n(v,j),k||y||(k=!0,A(h))),j},e.unstable_shouldYield=ee,e.unstable_wrapCallback=function(j){var T=m;return function(){var R=m;m=T;try{return j.apply(this,arguments)}finally{m=R}}}})(Ti);Pi.exports=Ti;var id=Pi.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var sd=_,je=id;function z(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)n+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Li=new Set,$r={};function Bn(e,n){dr(e,n),dr(e+"Capture",n)}function dr(e,n){for($r[e]=n,e=0;e<n.length;e++)Li.add(n[e])}var nn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),sa=Object.prototype.hasOwnProperty,cd=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,ev={},nv={};function dd(e){return sa.call(nv,e)?!0:sa.call(ev,e)?!1:cd.test(e)?nv[e]=!0:(ev[e]=!0,!1)}function ud(e,n,r,l){if(r!==null&&r.type===0)return!1;switch(typeof n){case"function":case"symbol":return!0;case"boolean":return l?!1:r!==null?!r.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function md(e,n,r,l){if(n===null||typeof n>"u"||ud(e,n,r,l))return!0;if(l)return!1;if(r!==null)switch(r.type){case 3:return!n;case 4:return n===!1;case 5:return isNaN(n);case 6:return isNaN(n)||1>n}return!1}function pe(e,n,r,l,t,a,o){this.acceptsBooleans=n===2||n===3||n===4,this.attributeName=l,this.attributeNamespace=t,this.mustUseProperty=r,this.propertyName=e,this.type=n,this.sanitizeURL=a,this.removeEmptyString=o}var oe={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){oe[e]=new pe(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var n=e[0];oe[n]=new pe(n,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){oe[e]=new pe(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){oe[e]=new pe(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){oe[e]=new pe(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){oe[e]=new pe(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){oe[e]=new pe(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){oe[e]=new pe(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){oe[e]=new pe(e,5,!1,e.toLowerCase(),null,!1,!1)});var oo=/[\-:]([a-z])/g;function vo(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var n=e.replace(oo,vo);oe[n]=new pe(n,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var n=e.replace(oo,vo);oe[n]=new pe(n,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var n=e.replace(oo,vo);oe[n]=new pe(n,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){oe[e]=new pe(e,1,!1,e.toLowerCase(),null,!1,!1)});oe.xlinkHref=new pe("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){oe[e]=new pe(e,1,!1,e.toLowerCase(),null,!0,!0)});function io(e,n,r,l){var t=oe.hasOwnProperty(n)?oe[n]:null;(t!==null?t.type!==0:l||!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(md(n,r,t,l)&&(r=null),l||t===null?dd(n)&&(r===null?e.removeAttribute(n):e.setAttribute(n,""+r)):t.mustUseProperty?e[t.propertyName]=r===null?t.type===3?!1:"":r:(n=t.attributeName,l=t.attributeNamespace,r===null?e.removeAttribute(n):(t=t.type,r=t===3||t===4&&r===!0?"":""+r,l?e.setAttributeNS(l,n,r):e.setAttribute(n,r))))}var an=sd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,gl=Symbol.for("react.element"),Xn=Symbol.for("react.portal"),Hn=Symbol.for("react.fragment"),so=Symbol.for("react.strict_mode"),ca=Symbol.for("react.profiler"),Ni=Symbol.for("react.provider"),Oi=Symbol.for("react.context"),co=Symbol.for("react.forward_ref"),da=Symbol.for("react.suspense"),ua=Symbol.for("react.suspense_list"),uo=Symbol.for("react.memo"),sn=Symbol.for("react.lazy"),Mi=Symbol.for("react.offscreen"),rv=Symbol.iterator;function yr(e){return e===null||typeof e!="object"?null:(e=rv&&e[rv]||e["@@iterator"],typeof e=="function"?e:null)}var Q=Object.assign,Rt;function Pr(e){if(Rt===void 0)try{throw Error()}catch(r){var n=r.stack.trim().match(/\n( *(at )?)/);Rt=n&&n[1]||""}return`
`+Rt+e}var Dt=!1;function It(e,n){if(!e||Dt)return"";Dt=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(n)if(n=function(){throw Error()},Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(n,[])}catch(s){var l=s}Reflect.construct(e,[],n)}else{try{n.call()}catch(s){l=s}e.call(n.prototype)}else{try{throw Error()}catch(s){l=s}e()}}catch(s){if(s&&l&&typeof s.stack=="string"){for(var t=s.stack.split(`
`),a=l.stack.split(`
`),o=t.length-1,i=a.length-1;1<=o&&0<=i&&t[o]!==a[i];)i--;for(;1<=o&&0<=i;o--,i--)if(t[o]!==a[i]){if(o!==1||i!==1)do if(o--,i--,0>i||t[o]!==a[i]){var v=`
`+t[o].replace(" at new "," at ");return e.displayName&&v.includes("<anonymous>")&&(v=v.replace("<anonymous>",e.displayName)),v}while(1<=o&&0<=i);break}}}finally{Dt=!1,Error.prepareStackTrace=r}return(e=e?e.displayName||e.name:"")?Pr(e):""}function pd(e){switch(e.tag){case 5:return Pr(e.type);case 16:return Pr("Lazy");case 13:return Pr("Suspense");case 19:return Pr("SuspenseList");case 0:case 2:case 15:return e=It(e.type,!1),e;case 11:return e=It(e.type.render,!1),e;case 1:return e=It(e.type,!0),e;default:return""}}function ma(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Hn:return"Fragment";case Xn:return"Portal";case ca:return"Profiler";case so:return"StrictMode";case da:return"Suspense";case ua:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Oi:return(e.displayName||"Context")+".Consumer";case Ni:return(e._context.displayName||"Context")+".Provider";case co:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case uo:return n=e.displayName||null,n!==null?n:ma(e.type)||"Memo";case sn:n=e._payload,e=e._init;try{return ma(e(n))}catch{}}return null}function fd(e){var n=e.type;switch(e.tag){case 24:return"Cache";case 9:return(n.displayName||"Context")+".Consumer";case 10:return(n._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=n.render,e=e.displayName||e.name||"",n.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return n;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ma(n);case 8:return n===so?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n}return null}function Sn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Ri(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function gd(e){var n=Ri(e)?"checked":"value",r=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),l=""+e[n];if(!e.hasOwnProperty(n)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var t=r.get,a=r.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return t.call(this)},set:function(o){l=""+o,a.call(this,o)}}),Object.defineProperty(e,n,{enumerable:r.enumerable}),{getValue:function(){return l},setValue:function(o){l=""+o},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function hl(e){e._valueTracker||(e._valueTracker=gd(e))}function Di(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var r=n.getValue(),l="";return e&&(l=Ri(e)?e.checked?"true":"false":e.value),e=l,e!==r?(n.setValue(e),!0):!1}function Hl(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function pa(e,n){var r=n.checked;return Q({},n,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:r??e._wrapperState.initialChecked})}function lv(e,n){var r=n.defaultValue==null?"":n.defaultValue,l=n.checked!=null?n.checked:n.defaultChecked;r=Sn(n.value!=null?n.value:r),e._wrapperState={initialChecked:l,initialValue:r,controlled:n.type==="checkbox"||n.type==="radio"?n.checked!=null:n.value!=null}}function Ii(e,n){n=n.checked,n!=null&&io(e,"checked",n,!1)}function fa(e,n){Ii(e,n);var r=Sn(n.value),l=n.type;if(r!=null)l==="number"?(r===0&&e.value===""||e.value!=r)&&(e.value=""+r):e.value!==""+r&&(e.value=""+r);else if(l==="submit"||l==="reset"){e.removeAttribute("value");return}n.hasOwnProperty("value")?ga(e,n.type,r):n.hasOwnProperty("defaultValue")&&ga(e,n.type,Sn(n.defaultValue)),n.checked==null&&n.defaultChecked!=null&&(e.defaultChecked=!!n.defaultChecked)}function tv(e,n,r){if(n.hasOwnProperty("value")||n.hasOwnProperty("defaultValue")){var l=n.type;if(!(l!=="submit"&&l!=="reset"||n.value!==void 0&&n.value!==null))return;n=""+e._wrapperState.initialValue,r||n===e.value||(e.value=n),e.defaultValue=n}r=e.name,r!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,r!==""&&(e.name=r)}function ga(e,n,r){(n!=="number"||Hl(e.ownerDocument)!==e)&&(r==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+r&&(e.defaultValue=""+r))}var Tr=Array.isArray;function ar(e,n,r,l){if(e=e.options,n){n={};for(var t=0;t<r.length;t++)n["$"+r[t]]=!0;for(r=0;r<e.length;r++)t=n.hasOwnProperty("$"+e[r].value),e[r].selected!==t&&(e[r].selected=t),t&&l&&(e[r].defaultSelected=!0)}else{for(r=""+Sn(r),n=null,t=0;t<e.length;t++){if(e[t].value===r){e[t].selected=!0,l&&(e[t].defaultSelected=!0);return}n!==null||e[t].disabled||(n=e[t])}n!==null&&(n.selected=!0)}}function ha(e,n){if(n.dangerouslySetInnerHTML!=null)throw Error(z(91));return Q({},n,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function av(e,n){var r=n.value;if(r==null){if(r=n.children,n=n.defaultValue,r!=null){if(n!=null)throw Error(z(92));if(Tr(r)){if(1<r.length)throw Error(z(93));r=r[0]}n=r}n==null&&(n=""),r=n}e._wrapperState={initialValue:Sn(r)}}function Fi(e,n){var r=Sn(n.value),l=Sn(n.defaultValue);r!=null&&(r=""+r,r!==e.value&&(e.value=r),n.defaultValue==null&&e.defaultValue!==r&&(e.defaultValue=r)),l!=null&&(e.defaultValue=""+l)}function ov(e){var n=e.textContent;n===e._wrapperState.initialValue&&n!==""&&n!==null&&(e.value=n)}function Vi(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function xa(e,n){return e==null||e==="http://www.w3.org/1999/xhtml"?Vi(n):e==="http://www.w3.org/2000/svg"&&n==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var xl,Ui=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(n,r,l,t){MSApp.execUnsafeLocalFunction(function(){return e(n,r,l,t)})}:e}(function(e,n){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=n;else{for(xl=xl||document.createElement("div"),xl.innerHTML="<svg>"+n.valueOf().toString()+"</svg>",n=xl.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;n.firstChild;)e.appendChild(n.firstChild)}});function Xr(e,n){if(n){var r=e.firstChild;if(r&&r===e.lastChild&&r.nodeType===3){r.nodeValue=n;return}}e.textContent=n}var Mr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},hd=["Webkit","ms","Moz","O"];Object.keys(Mr).forEach(function(e){hd.forEach(function(n){n=n+e.charAt(0).toUpperCase()+e.substring(1),Mr[n]=Mr[e]})});function Ai(e,n,r){return n==null||typeof n=="boolean"||n===""?"":r||typeof n!="number"||n===0||Mr.hasOwnProperty(e)&&Mr[e]?(""+n).trim():n+"px"}function Bi(e,n){e=e.style;for(var r in n)if(n.hasOwnProperty(r)){var l=r.indexOf("--")===0,t=Ai(r,n[r],l);r==="float"&&(r="cssFloat"),l?e.setProperty(r,t):e[r]=t}}var xd=Q({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ba(e,n){if(n){if(xd[e]&&(n.children!=null||n.dangerouslySetInnerHTML!=null))throw Error(z(137,e));if(n.dangerouslySetInnerHTML!=null){if(n.children!=null)throw Error(z(60));if(typeof n.dangerouslySetInnerHTML!="object"||!("__html"in n.dangerouslySetInnerHTML))throw Error(z(61))}if(n.style!=null&&typeof n.style!="object")throw Error(z(62))}}function wa(e,n){if(e.indexOf("-")===-1)return typeof n.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ya=null;function mo(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ka=null,or=null,vr=null;function vv(e){if(e=dl(e)){if(typeof ka!="function")throw Error(z(280));var n=e.stateNode;n&&(n=kt(n),ka(e.stateNode,e.type,n))}}function Yi(e){or?vr?vr.push(e):vr=[e]:or=e}function $i(){if(or){var e=or,n=vr;if(vr=or=null,vv(e),n)for(e=0;e<n.length;e++)vv(n[e])}}function Xi(e,n){return e(n)}function Hi(){}var Ft=!1;function Wi(e,n,r){if(Ft)return e(n,r);Ft=!0;try{return Xi(e,n,r)}finally{Ft=!1,(or!==null||vr!==null)&&(Hi(),$i())}}function Hr(e,n){var r=e.stateNode;if(r===null)return null;var l=kt(r);if(l===null)return null;r=l[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(e=e.type,l=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!l;break e;default:e=!1}if(e)return null;if(r&&typeof r!="function")throw Error(z(231,n,typeof r));return r}var za=!1;if(nn)try{var kr={};Object.defineProperty(kr,"passive",{get:function(){za=!0}}),window.addEventListener("test",kr,kr),window.removeEventListener("test",kr,kr)}catch{za=!1}function bd(e,n,r,l,t,a,o,i,v){var s=Array.prototype.slice.call(arguments,3);try{n.apply(r,s)}catch(g){this.onError(g)}}var Rr=!1,Wl=null,Ql=!1,Sa=null,wd={onError:function(e){Rr=!0,Wl=e}};function yd(e,n,r,l,t,a,o,i,v){Rr=!1,Wl=null,bd.apply(wd,arguments)}function kd(e,n,r,l,t,a,o,i,v){if(yd.apply(this,arguments),Rr){if(Rr){var s=Wl;Rr=!1,Wl=null}else throw Error(z(198));Ql||(Ql=!0,Sa=s)}}function Yn(e){var n=e,r=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,n.flags&4098&&(r=n.return),e=n.return;while(e)}return n.tag===3?r:null}function Qi(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function iv(e){if(Yn(e)!==e)throw Error(z(188))}function zd(e){var n=e.alternate;if(!n){if(n=Yn(e),n===null)throw Error(z(188));return n!==e?null:e}for(var r=e,l=n;;){var t=r.return;if(t===null)break;var a=t.alternate;if(a===null){if(l=t.return,l!==null){r=l;continue}break}if(t.child===a.child){for(a=t.child;a;){if(a===r)return iv(t),e;if(a===l)return iv(t),n;a=a.sibling}throw Error(z(188))}if(r.return!==l.return)r=t,l=a;else{for(var o=!1,i=t.child;i;){if(i===r){o=!0,r=t,l=a;break}if(i===l){o=!0,l=t,r=a;break}i=i.sibling}if(!o){for(i=a.child;i;){if(i===r){o=!0,r=a,l=t;break}if(i===l){o=!0,l=a,r=t;break}i=i.sibling}if(!o)throw Error(z(189))}}if(r.alternate!==l)throw Error(z(190))}if(r.tag!==3)throw Error(z(188));return r.stateNode.current===r?e:n}function Gi(e){return e=zd(e),e!==null?Ki(e):null}function Ki(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var n=Ki(e);if(n!==null)return n;e=e.sibling}return null}var Zi=je.unstable_scheduleCallback,sv=je.unstable_cancelCallback,Sd=je.unstable_shouldYield,jd=je.unstable_requestPaint,K=je.unstable_now,Cd=je.unstable_getCurrentPriorityLevel,po=je.unstable_ImmediatePriority,Ji=je.unstable_UserBlockingPriority,Gl=je.unstable_NormalPriority,Ed=je.unstable_LowPriority,qi=je.unstable_IdlePriority,xt=null,Qe=null;function _d(e){if(Qe&&typeof Qe.onCommitFiberRoot=="function")try{Qe.onCommitFiberRoot(xt,e,void 0,(e.current.flags&128)===128)}catch{}}var Ve=Math.clz32?Math.clz32:Ld,Pd=Math.log,Td=Math.LN2;function Ld(e){return e>>>=0,e===0?32:31-(Pd(e)/Td|0)|0}var bl=64,wl=4194304;function Lr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Kl(e,n){var r=e.pendingLanes;if(r===0)return 0;var l=0,t=e.suspendedLanes,a=e.pingedLanes,o=r&268435455;if(o!==0){var i=o&~t;i!==0?l=Lr(i):(a&=o,a!==0&&(l=Lr(a)))}else o=r&~t,o!==0?l=Lr(o):a!==0&&(l=Lr(a));if(l===0)return 0;if(n!==0&&n!==l&&!(n&t)&&(t=l&-l,a=n&-n,t>=a||t===16&&(a&4194240)!==0))return n;if(l&4&&(l|=r&16),n=e.entangledLanes,n!==0)for(e=e.entanglements,n&=l;0<n;)r=31-Ve(n),t=1<<r,l|=e[r],n&=~t;return l}function Nd(e,n){switch(e){case 1:case 2:case 4:return n+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Od(e,n){for(var r=e.suspendedLanes,l=e.pingedLanes,t=e.expirationTimes,a=e.pendingLanes;0<a;){var o=31-Ve(a),i=1<<o,v=t[o];v===-1?(!(i&r)||i&l)&&(t[o]=Nd(i,n)):v<=n&&(e.expiredLanes|=i),a&=~i}}function ja(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function es(){var e=bl;return bl<<=1,!(bl&4194240)&&(bl=64),e}function Vt(e){for(var n=[],r=0;31>r;r++)n.push(e);return n}function sl(e,n,r){e.pendingLanes|=n,n!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,n=31-Ve(n),e[n]=r}function Md(e,n){var r=e.pendingLanes&~n;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=n,e.mutableReadLanes&=n,e.entangledLanes&=n,n=e.entanglements;var l=e.eventTimes;for(e=e.expirationTimes;0<r;){var t=31-Ve(r),a=1<<t;n[t]=0,l[t]=-1,e[t]=-1,r&=~a}}function fo(e,n){var r=e.entangledLanes|=n;for(e=e.entanglements;r;){var l=31-Ve(r),t=1<<l;t&n|e[l]&n&&(e[l]|=n),r&=~t}}var U=0;function ns(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var rs,go,ls,ts,as,Ca=!1,yl=[],fn=null,gn=null,hn=null,Wr=new Map,Qr=new Map,dn=[],Rd="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function cv(e,n){switch(e){case"focusin":case"focusout":fn=null;break;case"dragenter":case"dragleave":gn=null;break;case"mouseover":case"mouseout":hn=null;break;case"pointerover":case"pointerout":Wr.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Qr.delete(n.pointerId)}}function zr(e,n,r,l,t,a){return e===null||e.nativeEvent!==a?(e={blockedOn:n,domEventName:r,eventSystemFlags:l,nativeEvent:a,targetContainers:[t]},n!==null&&(n=dl(n),n!==null&&go(n)),e):(e.eventSystemFlags|=l,n=e.targetContainers,t!==null&&n.indexOf(t)===-1&&n.push(t),e)}function Dd(e,n,r,l,t){switch(n){case"focusin":return fn=zr(fn,e,n,r,l,t),!0;case"dragenter":return gn=zr(gn,e,n,r,l,t),!0;case"mouseover":return hn=zr(hn,e,n,r,l,t),!0;case"pointerover":var a=t.pointerId;return Wr.set(a,zr(Wr.get(a)||null,e,n,r,l,t)),!0;case"gotpointercapture":return a=t.pointerId,Qr.set(a,zr(Qr.get(a)||null,e,n,r,l,t)),!0}return!1}function os(e){var n=Nn(e.target);if(n!==null){var r=Yn(n);if(r!==null){if(n=r.tag,n===13){if(n=Qi(r),n!==null){e.blockedOn=n,as(e.priority,function(){ls(r)});return}}else if(n===3&&r.stateNode.current.memoizedState.isDehydrated){e.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Dl(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var r=Ea(e.domEventName,e.eventSystemFlags,n[0],e.nativeEvent);if(r===null){r=e.nativeEvent;var l=new r.constructor(r.type,r);ya=l,r.target.dispatchEvent(l),ya=null}else return n=dl(r),n!==null&&go(n),e.blockedOn=r,!1;n.shift()}return!0}function dv(e,n,r){Dl(e)&&r.delete(n)}function Id(){Ca=!1,fn!==null&&Dl(fn)&&(fn=null),gn!==null&&Dl(gn)&&(gn=null),hn!==null&&Dl(hn)&&(hn=null),Wr.forEach(dv),Qr.forEach(dv)}function Sr(e,n){e.blockedOn===n&&(e.blockedOn=null,Ca||(Ca=!0,je.unstable_scheduleCallback(je.unstable_NormalPriority,Id)))}function Gr(e){function n(t){return Sr(t,e)}if(0<yl.length){Sr(yl[0],e);for(var r=1;r<yl.length;r++){var l=yl[r];l.blockedOn===e&&(l.blockedOn=null)}}for(fn!==null&&Sr(fn,e),gn!==null&&Sr(gn,e),hn!==null&&Sr(hn,e),Wr.forEach(n),Qr.forEach(n),r=0;r<dn.length;r++)l=dn[r],l.blockedOn===e&&(l.blockedOn=null);for(;0<dn.length&&(r=dn[0],r.blockedOn===null);)os(r),r.blockedOn===null&&dn.shift()}var ir=an.ReactCurrentBatchConfig,Zl=!0;function Fd(e,n,r,l){var t=U,a=ir.transition;ir.transition=null;try{U=1,ho(e,n,r,l)}finally{U=t,ir.transition=a}}function Vd(e,n,r,l){var t=U,a=ir.transition;ir.transition=null;try{U=4,ho(e,n,r,l)}finally{U=t,ir.transition=a}}function ho(e,n,r,l){if(Zl){var t=Ea(e,n,r,l);if(t===null)Gt(e,n,l,Jl,r),cv(e,l);else if(Dd(t,e,n,r,l))l.stopPropagation();else if(cv(e,l),n&4&&-1<Rd.indexOf(e)){for(;t!==null;){var a=dl(t);if(a!==null&&rs(a),a=Ea(e,n,r,l),a===null&&Gt(e,n,l,Jl,r),a===t)break;t=a}t!==null&&l.stopPropagation()}else Gt(e,n,l,null,r)}}var Jl=null;function Ea(e,n,r,l){if(Jl=null,e=mo(l),e=Nn(e),e!==null)if(n=Yn(e),n===null)e=null;else if(r=n.tag,r===13){if(e=Qi(n),e!==null)return e;e=null}else if(r===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null);return Jl=e,null}function vs(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Cd()){case po:return 1;case Ji:return 4;case Gl:case Ed:return 16;case qi:return 536870912;default:return 16}default:return 16}}var mn=null,xo=null,Il=null;function is(){if(Il)return Il;var e,n=xo,r=n.length,l,t="value"in mn?mn.value:mn.textContent,a=t.length;for(e=0;e<r&&n[e]===t[e];e++);var o=r-e;for(l=1;l<=o&&n[r-l]===t[a-l];l++);return Il=t.slice(e,1<l?1-l:void 0)}function Fl(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function kl(){return!0}function uv(){return!1}function Ee(e){function n(r,l,t,a,o){this._reactName=r,this._targetInst=t,this.type=l,this.nativeEvent=a,this.target=o,this.currentTarget=null;for(var i in e)e.hasOwnProperty(i)&&(r=e[i],this[i]=r?r(a):a[i]);return this.isDefaultPrevented=(a.defaultPrevented!=null?a.defaultPrevented:a.returnValue===!1)?kl:uv,this.isPropagationStopped=uv,this}return Q(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=kl)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=kl)},persist:function(){},isPersistent:kl}),n}var br={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},bo=Ee(br),cl=Q({},br,{view:0,detail:0}),Ud=Ee(cl),Ut,At,jr,bt=Q({},cl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:wo,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==jr&&(jr&&e.type==="mousemove"?(Ut=e.screenX-jr.screenX,At=e.screenY-jr.screenY):At=Ut=0,jr=e),Ut)},movementY:function(e){return"movementY"in e?e.movementY:At}}),mv=Ee(bt),Ad=Q({},bt,{dataTransfer:0}),Bd=Ee(Ad),Yd=Q({},cl,{relatedTarget:0}),Bt=Ee(Yd),$d=Q({},br,{animationName:0,elapsedTime:0,pseudoElement:0}),Xd=Ee($d),Hd=Q({},br,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Wd=Ee(Hd),Qd=Q({},br,{data:0}),pv=Ee(Qd),Gd={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Kd={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Zd={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Jd(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=Zd[e])?!!n[e]:!1}function wo(){return Jd}var qd=Q({},cl,{key:function(e){if(e.key){var n=Gd[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=Fl(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Kd[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:wo,charCode:function(e){return e.type==="keypress"?Fl(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Fl(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),eu=Ee(qd),nu=Q({},bt,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),fv=Ee(nu),ru=Q({},cl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:wo}),lu=Ee(ru),tu=Q({},br,{propertyName:0,elapsedTime:0,pseudoElement:0}),au=Ee(tu),ou=Q({},bt,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),vu=Ee(ou),iu=[9,13,27,32],yo=nn&&"CompositionEvent"in window,Dr=null;nn&&"documentMode"in document&&(Dr=document.documentMode);var su=nn&&"TextEvent"in window&&!Dr,ss=nn&&(!yo||Dr&&8<Dr&&11>=Dr),gv=" ",hv=!1;function cs(e,n){switch(e){case"keyup":return iu.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ds(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Wn=!1;function cu(e,n){switch(e){case"compositionend":return ds(n);case"keypress":return n.which!==32?null:(hv=!0,gv);case"textInput":return e=n.data,e===gv&&hv?null:e;default:return null}}function du(e,n){if(Wn)return e==="compositionend"||!yo&&cs(e,n)?(e=is(),Il=xo=mn=null,Wn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return ss&&n.locale!=="ko"?null:n.data;default:return null}}var uu={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function xv(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!uu[e.type]:n==="textarea"}function us(e,n,r,l){Yi(l),n=ql(n,"onChange"),0<n.length&&(r=new bo("onChange","change",null,r,l),e.push({event:r,listeners:n}))}var Ir=null,Kr=null;function mu(e){zs(e,0)}function wt(e){var n=Kn(e);if(Di(n))return e}function pu(e,n){if(e==="change")return n}var ms=!1;if(nn){var Yt;if(nn){var $t="oninput"in document;if(!$t){var bv=document.createElement("div");bv.setAttribute("oninput","return;"),$t=typeof bv.oninput=="function"}Yt=$t}else Yt=!1;ms=Yt&&(!document.documentMode||9<document.documentMode)}function wv(){Ir&&(Ir.detachEvent("onpropertychange",ps),Kr=Ir=null)}function ps(e){if(e.propertyName==="value"&&wt(Kr)){var n=[];us(n,Kr,e,mo(e)),Wi(mu,n)}}function fu(e,n,r){e==="focusin"?(wv(),Ir=n,Kr=r,Ir.attachEvent("onpropertychange",ps)):e==="focusout"&&wv()}function gu(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return wt(Kr)}function hu(e,n){if(e==="click")return wt(n)}function xu(e,n){if(e==="input"||e==="change")return wt(n)}function bu(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var Ae=typeof Object.is=="function"?Object.is:bu;function Zr(e,n){if(Ae(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var r=Object.keys(e),l=Object.keys(n);if(r.length!==l.length)return!1;for(l=0;l<r.length;l++){var t=r[l];if(!sa.call(n,t)||!Ae(e[t],n[t]))return!1}return!0}function yv(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function kv(e,n){var r=yv(e);e=0;for(var l;r;){if(r.nodeType===3){if(l=e+r.textContent.length,e<=n&&l>=n)return{node:r,offset:n-e};e=l}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=yv(r)}}function fs(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?fs(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function gs(){for(var e=window,n=Hl();n instanceof e.HTMLIFrameElement;){try{var r=typeof n.contentWindow.location.href=="string"}catch{r=!1}if(r)e=n.contentWindow;else break;n=Hl(e.document)}return n}function ko(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}function wu(e){var n=gs(),r=e.focusedElem,l=e.selectionRange;if(n!==r&&r&&r.ownerDocument&&fs(r.ownerDocument.documentElement,r)){if(l!==null&&ko(r)){if(n=l.start,e=l.end,e===void 0&&(e=n),"selectionStart"in r)r.selectionStart=n,r.selectionEnd=Math.min(e,r.value.length);else if(e=(n=r.ownerDocument||document)&&n.defaultView||window,e.getSelection){e=e.getSelection();var t=r.textContent.length,a=Math.min(l.start,t);l=l.end===void 0?a:Math.min(l.end,t),!e.extend&&a>l&&(t=l,l=a,a=t),t=kv(r,a);var o=kv(r,l);t&&o&&(e.rangeCount!==1||e.anchorNode!==t.node||e.anchorOffset!==t.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(n=n.createRange(),n.setStart(t.node,t.offset),e.removeAllRanges(),a>l?(e.addRange(n),e.extend(o.node,o.offset)):(n.setEnd(o.node,o.offset),e.addRange(n)))}}for(n=[],e=r;e=e.parentNode;)e.nodeType===1&&n.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof r.focus=="function"&&r.focus(),r=0;r<n.length;r++)e=n[r],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var yu=nn&&"documentMode"in document&&11>=document.documentMode,Qn=null,_a=null,Fr=null,Pa=!1;function zv(e,n,r){var l=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;Pa||Qn==null||Qn!==Hl(l)||(l=Qn,"selectionStart"in l&&ko(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),Fr&&Zr(Fr,l)||(Fr=l,l=ql(_a,"onSelect"),0<l.length&&(n=new bo("onSelect","select",null,n,r),e.push({event:n,listeners:l}),n.target=Qn)))}function zl(e,n){var r={};return r[e.toLowerCase()]=n.toLowerCase(),r["Webkit"+e]="webkit"+n,r["Moz"+e]="moz"+n,r}var Gn={animationend:zl("Animation","AnimationEnd"),animationiteration:zl("Animation","AnimationIteration"),animationstart:zl("Animation","AnimationStart"),transitionend:zl("Transition","TransitionEnd")},Xt={},hs={};nn&&(hs=document.createElement("div").style,"AnimationEvent"in window||(delete Gn.animationend.animation,delete Gn.animationiteration.animation,delete Gn.animationstart.animation),"TransitionEvent"in window||delete Gn.transitionend.transition);function yt(e){if(Xt[e])return Xt[e];if(!Gn[e])return e;var n=Gn[e],r;for(r in n)if(n.hasOwnProperty(r)&&r in hs)return Xt[e]=n[r];return e}var xs=yt("animationend"),bs=yt("animationiteration"),ws=yt("animationstart"),ys=yt("transitionend"),ks=new Map,Sv="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Cn(e,n){ks.set(e,n),Bn(n,[e])}for(var Ht=0;Ht<Sv.length;Ht++){var Wt=Sv[Ht],ku=Wt.toLowerCase(),zu=Wt[0].toUpperCase()+Wt.slice(1);Cn(ku,"on"+zu)}Cn(xs,"onAnimationEnd");Cn(bs,"onAnimationIteration");Cn(ws,"onAnimationStart");Cn("dblclick","onDoubleClick");Cn("focusin","onFocus");Cn("focusout","onBlur");Cn(ys,"onTransitionEnd");dr("onMouseEnter",["mouseout","mouseover"]);dr("onMouseLeave",["mouseout","mouseover"]);dr("onPointerEnter",["pointerout","pointerover"]);dr("onPointerLeave",["pointerout","pointerover"]);Bn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Bn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Bn("onBeforeInput",["compositionend","keypress","textInput","paste"]);Bn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Bn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Bn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Nr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Su=new Set("cancel close invalid load scroll toggle".split(" ").concat(Nr));function jv(e,n,r){var l=e.type||"unknown-event";e.currentTarget=r,kd(l,n,void 0,e),e.currentTarget=null}function zs(e,n){n=(n&4)!==0;for(var r=0;r<e.length;r++){var l=e[r],t=l.event;l=l.listeners;e:{var a=void 0;if(n)for(var o=l.length-1;0<=o;o--){var i=l[o],v=i.instance,s=i.currentTarget;if(i=i.listener,v!==a&&t.isPropagationStopped())break e;jv(t,i,s),a=v}else for(o=0;o<l.length;o++){if(i=l[o],v=i.instance,s=i.currentTarget,i=i.listener,v!==a&&t.isPropagationStopped())break e;jv(t,i,s),a=v}}}if(Ql)throw e=Sa,Ql=!1,Sa=null,e}function Y(e,n){var r=n[Ma];r===void 0&&(r=n[Ma]=new Set);var l=e+"__bubble";r.has(l)||(Ss(n,e,2,!1),r.add(l))}function Qt(e,n,r){var l=0;n&&(l|=4),Ss(r,e,l,n)}var Sl="_reactListening"+Math.random().toString(36).slice(2);function Jr(e){if(!e[Sl]){e[Sl]=!0,Li.forEach(function(r){r!=="selectionchange"&&(Su.has(r)||Qt(r,!1,e),Qt(r,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[Sl]||(n[Sl]=!0,Qt("selectionchange",!1,n))}}function Ss(e,n,r,l){switch(vs(n)){case 1:var t=Fd;break;case 4:t=Vd;break;default:t=ho}r=t.bind(null,n,r,e),t=void 0,!za||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(t=!0),l?t!==void 0?e.addEventListener(n,r,{capture:!0,passive:t}):e.addEventListener(n,r,!0):t!==void 0?e.addEventListener(n,r,{passive:t}):e.addEventListener(n,r,!1)}function Gt(e,n,r,l,t){var a=l;if(!(n&1)&&!(n&2)&&l!==null)e:for(;;){if(l===null)return;var o=l.tag;if(o===3||o===4){var i=l.stateNode.containerInfo;if(i===t||i.nodeType===8&&i.parentNode===t)break;if(o===4)for(o=l.return;o!==null;){var v=o.tag;if((v===3||v===4)&&(v=o.stateNode.containerInfo,v===t||v.nodeType===8&&v.parentNode===t))return;o=o.return}for(;i!==null;){if(o=Nn(i),o===null)return;if(v=o.tag,v===5||v===6){l=a=o;continue e}i=i.parentNode}}l=l.return}Wi(function(){var s=a,g=mo(r),p=[];e:{var m=ks.get(e);if(m!==void 0){var y=bo,k=e;switch(e){case"keypress":if(Fl(r)===0)break e;case"keydown":case"keyup":y=eu;break;case"focusin":k="focus",y=Bt;break;case"focusout":k="blur",y=Bt;break;case"beforeblur":case"afterblur":y=Bt;break;case"click":if(r.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=mv;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=Bd;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=lu;break;case xs:case bs:case ws:y=Xd;break;case ys:y=au;break;case"scroll":y=Ud;break;case"wheel":y=vu;break;case"copy":case"cut":case"paste":y=Wd;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=fv}var S=(n&4)!==0,M=!S&&e==="scroll",d=S?m!==null?m+"Capture":null:m;S=[];for(var c=s,u;c!==null;){u=c;var x=u.stateNode;if(u.tag===5&&x!==null&&(u=x,d!==null&&(x=Hr(c,d),x!=null&&S.push(qr(c,x,u)))),M)break;c=c.return}0<S.length&&(m=new y(m,k,null,r,g),p.push({event:m,listeners:S}))}}if(!(n&7)){e:{if(m=e==="mouseover"||e==="pointerover",y=e==="mouseout"||e==="pointerout",m&&r!==ya&&(k=r.relatedTarget||r.fromElement)&&(Nn(k)||k[rn]))break e;if((y||m)&&(m=g.window===g?g:(m=g.ownerDocument)?m.defaultView||m.parentWindow:window,y?(k=r.relatedTarget||r.toElement,y=s,k=k?Nn(k):null,k!==null&&(M=Yn(k),k!==M||k.tag!==5&&k.tag!==6)&&(k=null)):(y=null,k=s),y!==k)){if(S=mv,x="onMouseLeave",d="onMouseEnter",c="mouse",(e==="pointerout"||e==="pointerover")&&(S=fv,x="onPointerLeave",d="onPointerEnter",c="pointer"),M=y==null?m:Kn(y),u=k==null?m:Kn(k),m=new S(x,c+"leave",y,r,g),m.target=M,m.relatedTarget=u,x=null,Nn(g)===s&&(S=new S(d,c+"enter",k,r,g),S.target=u,S.relatedTarget=M,x=S),M=x,y&&k)n:{for(S=y,d=k,c=0,u=S;u;u=$n(u))c++;for(u=0,x=d;x;x=$n(x))u++;for(;0<c-u;)S=$n(S),c--;for(;0<u-c;)d=$n(d),u--;for(;c--;){if(S===d||d!==null&&S===d.alternate)break n;S=$n(S),d=$n(d)}S=null}else S=null;y!==null&&Cv(p,m,y,S,!1),k!==null&&M!==null&&Cv(p,M,k,S,!0)}}e:{if(m=s?Kn(s):window,y=m.nodeName&&m.nodeName.toLowerCase(),y==="select"||y==="input"&&m.type==="file")var h=pu;else if(xv(m))if(ms)h=xu;else{h=gu;var f=fu}else(y=m.nodeName)&&y.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(h=hu);if(h&&(h=h(e,s))){us(p,h,r,g);break e}f&&f(e,m,s),e==="focusout"&&(f=m._wrapperState)&&f.controlled&&m.type==="number"&&ga(m,"number",m.value)}switch(f=s?Kn(s):window,e){case"focusin":(xv(f)||f.contentEditable==="true")&&(Qn=f,_a=s,Fr=null);break;case"focusout":Fr=_a=Qn=null;break;case"mousedown":Pa=!0;break;case"contextmenu":case"mouseup":case"dragend":Pa=!1,zv(p,r,g);break;case"selectionchange":if(yu)break;case"keydown":case"keyup":zv(p,r,g)}var b;if(yo)e:{switch(e){case"compositionstart":var w="onCompositionStart";break e;case"compositionend":w="onCompositionEnd";break e;case"compositionupdate":w="onCompositionUpdate";break e}w=void 0}else Wn?cs(e,r)&&(w="onCompositionEnd"):e==="keydown"&&r.keyCode===229&&(w="onCompositionStart");w&&(ss&&r.locale!=="ko"&&(Wn||w!=="onCompositionStart"?w==="onCompositionEnd"&&Wn&&(b=is()):(mn=g,xo="value"in mn?mn.value:mn.textContent,Wn=!0)),f=ql(s,w),0<f.length&&(w=new pv(w,e,null,r,g),p.push({event:w,listeners:f}),b?w.data=b:(b=ds(r),b!==null&&(w.data=b)))),(b=su?cu(e,r):du(e,r))&&(s=ql(s,"onBeforeInput"),0<s.length&&(g=new pv("onBeforeInput","beforeinput",null,r,g),p.push({event:g,listeners:s}),g.data=b))}zs(p,n)})}function qr(e,n,r){return{instance:e,listener:n,currentTarget:r}}function ql(e,n){for(var r=n+"Capture",l=[];e!==null;){var t=e,a=t.stateNode;t.tag===5&&a!==null&&(t=a,a=Hr(e,r),a!=null&&l.unshift(qr(e,a,t)),a=Hr(e,n),a!=null&&l.push(qr(e,a,t))),e=e.return}return l}function $n(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Cv(e,n,r,l,t){for(var a=n._reactName,o=[];r!==null&&r!==l;){var i=r,v=i.alternate,s=i.stateNode;if(v!==null&&v===l)break;i.tag===5&&s!==null&&(i=s,t?(v=Hr(r,a),v!=null&&o.unshift(qr(r,v,i))):t||(v=Hr(r,a),v!=null&&o.push(qr(r,v,i)))),r=r.return}o.length!==0&&e.push({event:n,listeners:o})}var ju=/\r\n?/g,Cu=/\u0000|\uFFFD/g;function Ev(e){return(typeof e=="string"?e:""+e).replace(ju,`
`).replace(Cu,"")}function jl(e,n,r){if(n=Ev(n),Ev(e)!==n&&r)throw Error(z(425))}function et(){}var Ta=null,La=null;function Na(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Oa=typeof setTimeout=="function"?setTimeout:void 0,Eu=typeof clearTimeout=="function"?clearTimeout:void 0,_v=typeof Promise=="function"?Promise:void 0,_u=typeof queueMicrotask=="function"?queueMicrotask:typeof _v<"u"?function(e){return _v.resolve(null).then(e).catch(Pu)}:Oa;function Pu(e){setTimeout(function(){throw e})}function Kt(e,n){var r=n,l=0;do{var t=r.nextSibling;if(e.removeChild(r),t&&t.nodeType===8)if(r=t.data,r==="/$"){if(l===0){e.removeChild(t),Gr(n);return}l--}else r!=="$"&&r!=="$?"&&r!=="$!"||l++;r=t}while(r);Gr(n)}function xn(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?")break;if(n==="/$")return null}}return e}function Pv(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var r=e.data;if(r==="$"||r==="$!"||r==="$?"){if(n===0)return e;n--}else r==="/$"&&n++}e=e.previousSibling}return null}var wr=Math.random().toString(36).slice(2),We="__reactFiber$"+wr,el="__reactProps$"+wr,rn="__reactContainer$"+wr,Ma="__reactEvents$"+wr,Tu="__reactListeners$"+wr,Lu="__reactHandles$"+wr;function Nn(e){var n=e[We];if(n)return n;for(var r=e.parentNode;r;){if(n=r[rn]||r[We]){if(r=n.alternate,n.child!==null||r!==null&&r.child!==null)for(e=Pv(e);e!==null;){if(r=e[We])return r;e=Pv(e)}return n}e=r,r=e.parentNode}return null}function dl(e){return e=e[We]||e[rn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Kn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(z(33))}function kt(e){return e[el]||null}var Ra=[],Zn=-1;function En(e){return{current:e}}function $(e){0>Zn||(e.current=Ra[Zn],Ra[Zn]=null,Zn--)}function B(e,n){Zn++,Ra[Zn]=e.current,e.current=n}var jn={},ce=En(jn),he=En(!1),In=jn;function ur(e,n){var r=e.type.contextTypes;if(!r)return jn;var l=e.stateNode;if(l&&l.__reactInternalMemoizedUnmaskedChildContext===n)return l.__reactInternalMemoizedMaskedChildContext;var t={},a;for(a in r)t[a]=n[a];return l&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=n,e.__reactInternalMemoizedMaskedChildContext=t),t}function xe(e){return e=e.childContextTypes,e!=null}function nt(){$(he),$(ce)}function Tv(e,n,r){if(ce.current!==jn)throw Error(z(168));B(ce,n),B(he,r)}function js(e,n,r){var l=e.stateNode;if(n=n.childContextTypes,typeof l.getChildContext!="function")return r;l=l.getChildContext();for(var t in l)if(!(t in n))throw Error(z(108,fd(e)||"Unknown",t));return Q({},r,l)}function rt(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||jn,In=ce.current,B(ce,e),B(he,he.current),!0}function Lv(e,n,r){var l=e.stateNode;if(!l)throw Error(z(169));r?(e=js(e,n,In),l.__reactInternalMemoizedMergedChildContext=e,$(he),$(ce),B(ce,e)):$(he),B(he,r)}var Ze=null,zt=!1,Zt=!1;function Cs(e){Ze===null?Ze=[e]:Ze.push(e)}function Nu(e){zt=!0,Cs(e)}function _n(){if(!Zt&&Ze!==null){Zt=!0;var e=0,n=U;try{var r=Ze;for(U=1;e<r.length;e++){var l=r[e];do l=l(!0);while(l!==null)}Ze=null,zt=!1}catch(t){throw Ze!==null&&(Ze=Ze.slice(e+1)),Zi(po,_n),t}finally{U=n,Zt=!1}}return null}var Jn=[],qn=0,lt=null,tt=0,Pe=[],Te=0,Fn=null,Je=1,qe="";function Tn(e,n){Jn[qn++]=tt,Jn[qn++]=lt,lt=e,tt=n}function Es(e,n,r){Pe[Te++]=Je,Pe[Te++]=qe,Pe[Te++]=Fn,Fn=e;var l=Je;e=qe;var t=32-Ve(l)-1;l&=~(1<<t),r+=1;var a=32-Ve(n)+t;if(30<a){var o=t-t%5;a=(l&(1<<o)-1).toString(32),l>>=o,t-=o,Je=1<<32-Ve(n)+t|r<<t|l,qe=a+e}else Je=1<<a|r<<t|l,qe=e}function zo(e){e.return!==null&&(Tn(e,1),Es(e,1,0))}function So(e){for(;e===lt;)lt=Jn[--qn],Jn[qn]=null,tt=Jn[--qn],Jn[qn]=null;for(;e===Fn;)Fn=Pe[--Te],Pe[Te]=null,qe=Pe[--Te],Pe[Te]=null,Je=Pe[--Te],Pe[Te]=null}var Se=null,ze=null,X=!1,Fe=null;function _s(e,n){var r=Le(5,null,null,0);r.elementType="DELETED",r.stateNode=n,r.return=e,n=e.deletions,n===null?(e.deletions=[r],e.flags|=16):n.push(r)}function Nv(e,n){switch(e.tag){case 5:var r=e.type;return n=n.nodeType!==1||r.toLowerCase()!==n.nodeName.toLowerCase()?null:n,n!==null?(e.stateNode=n,Se=e,ze=xn(n.firstChild),!0):!1;case 6:return n=e.pendingProps===""||n.nodeType!==3?null:n,n!==null?(e.stateNode=n,Se=e,ze=null,!0):!1;case 13:return n=n.nodeType!==8?null:n,n!==null?(r=Fn!==null?{id:Je,overflow:qe}:null,e.memoizedState={dehydrated:n,treeContext:r,retryLane:1073741824},r=Le(18,null,null,0),r.stateNode=n,r.return=e,e.child=r,Se=e,ze=null,!0):!1;default:return!1}}function Da(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Ia(e){if(X){var n=ze;if(n){var r=n;if(!Nv(e,n)){if(Da(e))throw Error(z(418));n=xn(r.nextSibling);var l=Se;n&&Nv(e,n)?_s(l,r):(e.flags=e.flags&-4097|2,X=!1,Se=e)}}else{if(Da(e))throw Error(z(418));e.flags=e.flags&-4097|2,X=!1,Se=e}}}function Ov(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Se=e}function Cl(e){if(e!==Se)return!1;if(!X)return Ov(e),X=!0,!1;var n;if((n=e.tag!==3)&&!(n=e.tag!==5)&&(n=e.type,n=n!=="head"&&n!=="body"&&!Na(e.type,e.memoizedProps)),n&&(n=ze)){if(Da(e))throw Ps(),Error(z(418));for(;n;)_s(e,n),n=xn(n.nextSibling)}if(Ov(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(z(317));e:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8){var r=e.data;if(r==="/$"){if(n===0){ze=xn(e.nextSibling);break e}n--}else r!=="$"&&r!=="$!"&&r!=="$?"||n++}e=e.nextSibling}ze=null}}else ze=Se?xn(e.stateNode.nextSibling):null;return!0}function Ps(){for(var e=ze;e;)e=xn(e.nextSibling)}function mr(){ze=Se=null,X=!1}function jo(e){Fe===null?Fe=[e]:Fe.push(e)}var Ou=an.ReactCurrentBatchConfig;function Cr(e,n,r){if(e=r.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(r._owner){if(r=r._owner,r){if(r.tag!==1)throw Error(z(309));var l=r.stateNode}if(!l)throw Error(z(147,e));var t=l,a=""+e;return n!==null&&n.ref!==null&&typeof n.ref=="function"&&n.ref._stringRef===a?n.ref:(n=function(o){var i=t.refs;o===null?delete i[a]:i[a]=o},n._stringRef=a,n)}if(typeof e!="string")throw Error(z(284));if(!r._owner)throw Error(z(290,e))}return e}function El(e,n){throw e=Object.prototype.toString.call(n),Error(z(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e))}function Mv(e){var n=e._init;return n(e._payload)}function Ts(e){function n(d,c){if(e){var u=d.deletions;u===null?(d.deletions=[c],d.flags|=16):u.push(c)}}function r(d,c){if(!e)return null;for(;c!==null;)n(d,c),c=c.sibling;return null}function l(d,c){for(d=new Map;c!==null;)c.key!==null?d.set(c.key,c):d.set(c.index,c),c=c.sibling;return d}function t(d,c){return d=kn(d,c),d.index=0,d.sibling=null,d}function a(d,c,u){return d.index=u,e?(u=d.alternate,u!==null?(u=u.index,u<c?(d.flags|=2,c):u):(d.flags|=2,c)):(d.flags|=1048576,c)}function o(d){return e&&d.alternate===null&&(d.flags|=2),d}function i(d,c,u,x){return c===null||c.tag!==6?(c=ta(u,d.mode,x),c.return=d,c):(c=t(c,u),c.return=d,c)}function v(d,c,u,x){var h=u.type;return h===Hn?g(d,c,u.props.children,x,u.key):c!==null&&(c.elementType===h||typeof h=="object"&&h!==null&&h.$$typeof===sn&&Mv(h)===c.type)?(x=t(c,u.props),x.ref=Cr(d,c,u),x.return=d,x):(x=Xl(u.type,u.key,u.props,null,d.mode,x),x.ref=Cr(d,c,u),x.return=d,x)}function s(d,c,u,x){return c===null||c.tag!==4||c.stateNode.containerInfo!==u.containerInfo||c.stateNode.implementation!==u.implementation?(c=aa(u,d.mode,x),c.return=d,c):(c=t(c,u.children||[]),c.return=d,c)}function g(d,c,u,x,h){return c===null||c.tag!==7?(c=Dn(u,d.mode,x,h),c.return=d,c):(c=t(c,u),c.return=d,c)}function p(d,c,u){if(typeof c=="string"&&c!==""||typeof c=="number")return c=ta(""+c,d.mode,u),c.return=d,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case gl:return u=Xl(c.type,c.key,c.props,null,d.mode,u),u.ref=Cr(d,null,c),u.return=d,u;case Xn:return c=aa(c,d.mode,u),c.return=d,c;case sn:var x=c._init;return p(d,x(c._payload),u)}if(Tr(c)||yr(c))return c=Dn(c,d.mode,u,null),c.return=d,c;El(d,c)}return null}function m(d,c,u,x){var h=c!==null?c.key:null;if(typeof u=="string"&&u!==""||typeof u=="number")return h!==null?null:i(d,c,""+u,x);if(typeof u=="object"&&u!==null){switch(u.$$typeof){case gl:return u.key===h?v(d,c,u,x):null;case Xn:return u.key===h?s(d,c,u,x):null;case sn:return h=u._init,m(d,c,h(u._payload),x)}if(Tr(u)||yr(u))return h!==null?null:g(d,c,u,x,null);El(d,u)}return null}function y(d,c,u,x,h){if(typeof x=="string"&&x!==""||typeof x=="number")return d=d.get(u)||null,i(c,d,""+x,h);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case gl:return d=d.get(x.key===null?u:x.key)||null,v(c,d,x,h);case Xn:return d=d.get(x.key===null?u:x.key)||null,s(c,d,x,h);case sn:var f=x._init;return y(d,c,u,f(x._payload),h)}if(Tr(x)||yr(x))return d=d.get(u)||null,g(c,d,x,h,null);El(c,x)}return null}function k(d,c,u,x){for(var h=null,f=null,b=c,w=c=0,I=null;b!==null&&w<u.length;w++){b.index>w?(I=b,b=null):I=b.sibling;var E=m(d,b,u[w],x);if(E===null){b===null&&(b=I);break}e&&b&&E.alternate===null&&n(d,b),c=a(E,c,w),f===null?h=E:f.sibling=E,f=E,b=I}if(w===u.length)return r(d,b),X&&Tn(d,w),h;if(b===null){for(;w<u.length;w++)b=p(d,u[w],x),b!==null&&(c=a(b,c,w),f===null?h=b:f.sibling=b,f=b);return X&&Tn(d,w),h}for(b=l(d,b);w<u.length;w++)I=y(b,d,w,u[w],x),I!==null&&(e&&I.alternate!==null&&b.delete(I.key===null?w:I.key),c=a(I,c,w),f===null?h=I:f.sibling=I,f=I);return e&&b.forEach(function(ee){return n(d,ee)}),X&&Tn(d,w),h}function S(d,c,u,x){var h=yr(u);if(typeof h!="function")throw Error(z(150));if(u=h.call(u),u==null)throw Error(z(151));for(var f=h=null,b=c,w=c=0,I=null,E=u.next();b!==null&&!E.done;w++,E=u.next()){b.index>w?(I=b,b=null):I=b.sibling;var ee=m(d,b,E.value,x);if(ee===null){b===null&&(b=I);break}e&&b&&ee.alternate===null&&n(d,b),c=a(ee,c,w),f===null?h=ee:f.sibling=ee,f=ee,b=I}if(E.done)return r(d,b),X&&Tn(d,w),h;if(b===null){for(;!E.done;w++,E=u.next())E=p(d,E.value,x),E!==null&&(c=a(E,c,w),f===null?h=E:f.sibling=E,f=E);return X&&Tn(d,w),h}for(b=l(d,b);!E.done;w++,E=u.next())E=y(b,d,w,E.value,x),E!==null&&(e&&E.alternate!==null&&b.delete(E.key===null?w:E.key),c=a(E,c,w),f===null?h=E:f.sibling=E,f=E);return e&&b.forEach(function(Be){return n(d,Be)}),X&&Tn(d,w),h}function M(d,c,u,x){if(typeof u=="object"&&u!==null&&u.type===Hn&&u.key===null&&(u=u.props.children),typeof u=="object"&&u!==null){switch(u.$$typeof){case gl:e:{for(var h=u.key,f=c;f!==null;){if(f.key===h){if(h=u.type,h===Hn){if(f.tag===7){r(d,f.sibling),c=t(f,u.props.children),c.return=d,d=c;break e}}else if(f.elementType===h||typeof h=="object"&&h!==null&&h.$$typeof===sn&&Mv(h)===f.type){r(d,f.sibling),c=t(f,u.props),c.ref=Cr(d,f,u),c.return=d,d=c;break e}r(d,f);break}else n(d,f);f=f.sibling}u.type===Hn?(c=Dn(u.props.children,d.mode,x,u.key),c.return=d,d=c):(x=Xl(u.type,u.key,u.props,null,d.mode,x),x.ref=Cr(d,c,u),x.return=d,d=x)}return o(d);case Xn:e:{for(f=u.key;c!==null;){if(c.key===f)if(c.tag===4&&c.stateNode.containerInfo===u.containerInfo&&c.stateNode.implementation===u.implementation){r(d,c.sibling),c=t(c,u.children||[]),c.return=d,d=c;break e}else{r(d,c);break}else n(d,c);c=c.sibling}c=aa(u,d.mode,x),c.return=d,d=c}return o(d);case sn:return f=u._init,M(d,c,f(u._payload),x)}if(Tr(u))return k(d,c,u,x);if(yr(u))return S(d,c,u,x);El(d,u)}return typeof u=="string"&&u!==""||typeof u=="number"?(u=""+u,c!==null&&c.tag===6?(r(d,c.sibling),c=t(c,u),c.return=d,d=c):(r(d,c),c=ta(u,d.mode,x),c.return=d,d=c),o(d)):r(d,c)}return M}var pr=Ts(!0),Ls=Ts(!1),at=En(null),ot=null,er=null,Co=null;function Eo(){Co=er=ot=null}function _o(e){var n=at.current;$(at),e._currentValue=n}function Fa(e,n,r){for(;e!==null;){var l=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,l!==null&&(l.childLanes|=n)):l!==null&&(l.childLanes&n)!==n&&(l.childLanes|=n),e===r)break;e=e.return}}function sr(e,n){ot=e,Co=er=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&n&&(ge=!0),e.firstContext=null)}function Oe(e){var n=e._currentValue;if(Co!==e)if(e={context:e,memoizedValue:n,next:null},er===null){if(ot===null)throw Error(z(308));er=e,ot.dependencies={lanes:0,firstContext:e}}else er=er.next=e;return n}var On=null;function Po(e){On===null?On=[e]:On.push(e)}function Ns(e,n,r,l){var t=n.interleaved;return t===null?(r.next=r,Po(n)):(r.next=t.next,t.next=r),n.interleaved=r,ln(e,l)}function ln(e,n){e.lanes|=n;var r=e.alternate;for(r!==null&&(r.lanes|=n),r=e,e=e.return;e!==null;)e.childLanes|=n,r=e.alternate,r!==null&&(r.childLanes|=n),r=e,e=e.return;return r.tag===3?r.stateNode:null}var cn=!1;function To(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Os(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function en(e,n){return{eventTime:e,lane:n,tag:0,payload:null,callback:null,next:null}}function bn(e,n,r){var l=e.updateQueue;if(l===null)return null;if(l=l.shared,V&2){var t=l.pending;return t===null?n.next=n:(n.next=t.next,t.next=n),l.pending=n,ln(e,r)}return t=l.interleaved,t===null?(n.next=n,Po(l)):(n.next=t.next,t.next=n),l.interleaved=n,ln(e,r)}function Vl(e,n,r){if(n=n.updateQueue,n!==null&&(n=n.shared,(r&4194240)!==0)){var l=n.lanes;l&=e.pendingLanes,r|=l,n.lanes=r,fo(e,r)}}function Rv(e,n){var r=e.updateQueue,l=e.alternate;if(l!==null&&(l=l.updateQueue,r===l)){var t=null,a=null;if(r=r.firstBaseUpdate,r!==null){do{var o={eventTime:r.eventTime,lane:r.lane,tag:r.tag,payload:r.payload,callback:r.callback,next:null};a===null?t=a=o:a=a.next=o,r=r.next}while(r!==null);a===null?t=a=n:a=a.next=n}else t=a=n;r={baseState:l.baseState,firstBaseUpdate:t,lastBaseUpdate:a,shared:l.shared,effects:l.effects},e.updateQueue=r;return}e=r.lastBaseUpdate,e===null?r.firstBaseUpdate=n:e.next=n,r.lastBaseUpdate=n}function vt(e,n,r,l){var t=e.updateQueue;cn=!1;var a=t.firstBaseUpdate,o=t.lastBaseUpdate,i=t.shared.pending;if(i!==null){t.shared.pending=null;var v=i,s=v.next;v.next=null,o===null?a=s:o.next=s,o=v;var g=e.alternate;g!==null&&(g=g.updateQueue,i=g.lastBaseUpdate,i!==o&&(i===null?g.firstBaseUpdate=s:i.next=s,g.lastBaseUpdate=v))}if(a!==null){var p=t.baseState;o=0,g=s=v=null,i=a;do{var m=i.lane,y=i.eventTime;if((l&m)===m){g!==null&&(g=g.next={eventTime:y,lane:0,tag:i.tag,payload:i.payload,callback:i.callback,next:null});e:{var k=e,S=i;switch(m=n,y=r,S.tag){case 1:if(k=S.payload,typeof k=="function"){p=k.call(y,p,m);break e}p=k;break e;case 3:k.flags=k.flags&-65537|128;case 0:if(k=S.payload,m=typeof k=="function"?k.call(y,p,m):k,m==null)break e;p=Q({},p,m);break e;case 2:cn=!0}}i.callback!==null&&i.lane!==0&&(e.flags|=64,m=t.effects,m===null?t.effects=[i]:m.push(i))}else y={eventTime:y,lane:m,tag:i.tag,payload:i.payload,callback:i.callback,next:null},g===null?(s=g=y,v=p):g=g.next=y,o|=m;if(i=i.next,i===null){if(i=t.shared.pending,i===null)break;m=i,i=m.next,m.next=null,t.lastBaseUpdate=m,t.shared.pending=null}}while(!0);if(g===null&&(v=p),t.baseState=v,t.firstBaseUpdate=s,t.lastBaseUpdate=g,n=t.shared.interleaved,n!==null){t=n;do o|=t.lane,t=t.next;while(t!==n)}else a===null&&(t.shared.lanes=0);Un|=o,e.lanes=o,e.memoizedState=p}}function Dv(e,n,r){if(e=n.effects,n.effects=null,e!==null)for(n=0;n<e.length;n++){var l=e[n],t=l.callback;if(t!==null){if(l.callback=null,l=r,typeof t!="function")throw Error(z(191,t));t.call(l)}}}var ul={},Ge=En(ul),nl=En(ul),rl=En(ul);function Mn(e){if(e===ul)throw Error(z(174));return e}function Lo(e,n){switch(B(rl,n),B(nl,e),B(Ge,ul),e=n.nodeType,e){case 9:case 11:n=(n=n.documentElement)?n.namespaceURI:xa(null,"");break;default:e=e===8?n.parentNode:n,n=e.namespaceURI||null,e=e.tagName,n=xa(n,e)}$(Ge),B(Ge,n)}function fr(){$(Ge),$(nl),$(rl)}function Ms(e){Mn(rl.current);var n=Mn(Ge.current),r=xa(n,e.type);n!==r&&(B(nl,e),B(Ge,r))}function No(e){nl.current===e&&($(Ge),$(nl))}var H=En(0);function it(e){for(var n=e;n!==null;){if(n.tag===13){var r=n.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||r.data==="$?"||r.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if(n.flags&128)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Jt=[];function Oo(){for(var e=0;e<Jt.length;e++)Jt[e]._workInProgressVersionPrimary=null;Jt.length=0}var Ul=an.ReactCurrentDispatcher,qt=an.ReactCurrentBatchConfig,Vn=0,W=null,J=null,re=null,st=!1,Vr=!1,ll=0,Mu=0;function ve(){throw Error(z(321))}function Mo(e,n){if(n===null)return!1;for(var r=0;r<n.length&&r<e.length;r++)if(!Ae(e[r],n[r]))return!1;return!0}function Ro(e,n,r,l,t,a){if(Vn=a,W=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,Ul.current=e===null||e.memoizedState===null?Fu:Vu,e=r(l,t),Vr){a=0;do{if(Vr=!1,ll=0,25<=a)throw Error(z(301));a+=1,re=J=null,n.updateQueue=null,Ul.current=Uu,e=r(l,t)}while(Vr)}if(Ul.current=ct,n=J!==null&&J.next!==null,Vn=0,re=J=W=null,st=!1,n)throw Error(z(300));return e}function Do(){var e=ll!==0;return ll=0,e}function He(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return re===null?W.memoizedState=re=e:re=re.next=e,re}function Me(){if(J===null){var e=W.alternate;e=e!==null?e.memoizedState:null}else e=J.next;var n=re===null?W.memoizedState:re.next;if(n!==null)re=n,J=e;else{if(e===null)throw Error(z(310));J=e,e={memoizedState:J.memoizedState,baseState:J.baseState,baseQueue:J.baseQueue,queue:J.queue,next:null},re===null?W.memoizedState=re=e:re=re.next=e}return re}function tl(e,n){return typeof n=="function"?n(e):n}function ea(e){var n=Me(),r=n.queue;if(r===null)throw Error(z(311));r.lastRenderedReducer=e;var l=J,t=l.baseQueue,a=r.pending;if(a!==null){if(t!==null){var o=t.next;t.next=a.next,a.next=o}l.baseQueue=t=a,r.pending=null}if(t!==null){a=t.next,l=l.baseState;var i=o=null,v=null,s=a;do{var g=s.lane;if((Vn&g)===g)v!==null&&(v=v.next={lane:0,action:s.action,hasEagerState:s.hasEagerState,eagerState:s.eagerState,next:null}),l=s.hasEagerState?s.eagerState:e(l,s.action);else{var p={lane:g,action:s.action,hasEagerState:s.hasEagerState,eagerState:s.eagerState,next:null};v===null?(i=v=p,o=l):v=v.next=p,W.lanes|=g,Un|=g}s=s.next}while(s!==null&&s!==a);v===null?o=l:v.next=i,Ae(l,n.memoizedState)||(ge=!0),n.memoizedState=l,n.baseState=o,n.baseQueue=v,r.lastRenderedState=l}if(e=r.interleaved,e!==null){t=e;do a=t.lane,W.lanes|=a,Un|=a,t=t.next;while(t!==e)}else t===null&&(r.lanes=0);return[n.memoizedState,r.dispatch]}function na(e){var n=Me(),r=n.queue;if(r===null)throw Error(z(311));r.lastRenderedReducer=e;var l=r.dispatch,t=r.pending,a=n.memoizedState;if(t!==null){r.pending=null;var o=t=t.next;do a=e(a,o.action),o=o.next;while(o!==t);Ae(a,n.memoizedState)||(ge=!0),n.memoizedState=a,n.baseQueue===null&&(n.baseState=a),r.lastRenderedState=a}return[a,l]}function Rs(){}function Ds(e,n){var r=W,l=Me(),t=n(),a=!Ae(l.memoizedState,t);if(a&&(l.memoizedState=t,ge=!0),l=l.queue,Io(Vs.bind(null,r,l,e),[e]),l.getSnapshot!==n||a||re!==null&&re.memoizedState.tag&1){if(r.flags|=2048,al(9,Fs.bind(null,r,l,t,n),void 0,null),le===null)throw Error(z(349));Vn&30||Is(r,n,t)}return t}function Is(e,n,r){e.flags|=16384,e={getSnapshot:n,value:r},n=W.updateQueue,n===null?(n={lastEffect:null,stores:null},W.updateQueue=n,n.stores=[e]):(r=n.stores,r===null?n.stores=[e]:r.push(e))}function Fs(e,n,r,l){n.value=r,n.getSnapshot=l,Us(n)&&As(e)}function Vs(e,n,r){return r(function(){Us(n)&&As(e)})}function Us(e){var n=e.getSnapshot;e=e.value;try{var r=n();return!Ae(e,r)}catch{return!0}}function As(e){var n=ln(e,1);n!==null&&Ue(n,e,1,-1)}function Iv(e){var n=He();return typeof e=="function"&&(e=e()),n.memoizedState=n.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:tl,lastRenderedState:e},n.queue=e,e=e.dispatch=Iu.bind(null,W,e),[n.memoizedState,e]}function al(e,n,r,l){return e={tag:e,create:n,destroy:r,deps:l,next:null},n=W.updateQueue,n===null?(n={lastEffect:null,stores:null},W.updateQueue=n,n.lastEffect=e.next=e):(r=n.lastEffect,r===null?n.lastEffect=e.next=e:(l=r.next,r.next=e,e.next=l,n.lastEffect=e)),e}function Bs(){return Me().memoizedState}function Al(e,n,r,l){var t=He();W.flags|=e,t.memoizedState=al(1|n,r,void 0,l===void 0?null:l)}function St(e,n,r,l){var t=Me();l=l===void 0?null:l;var a=void 0;if(J!==null){var o=J.memoizedState;if(a=o.destroy,l!==null&&Mo(l,o.deps)){t.memoizedState=al(n,r,a,l);return}}W.flags|=e,t.memoizedState=al(1|n,r,a,l)}function Fv(e,n){return Al(8390656,8,e,n)}function Io(e,n){return St(2048,8,e,n)}function Ys(e,n){return St(4,2,e,n)}function $s(e,n){return St(4,4,e,n)}function Xs(e,n){if(typeof n=="function")return e=e(),n(e),function(){n(null)};if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function Hs(e,n,r){return r=r!=null?r.concat([e]):null,St(4,4,Xs.bind(null,n,e),r)}function Fo(){}function Ws(e,n){var r=Me();n=n===void 0?null:n;var l=r.memoizedState;return l!==null&&n!==null&&Mo(n,l[1])?l[0]:(r.memoizedState=[e,n],e)}function Qs(e,n){var r=Me();n=n===void 0?null:n;var l=r.memoizedState;return l!==null&&n!==null&&Mo(n,l[1])?l[0]:(e=e(),r.memoizedState=[e,n],e)}function Gs(e,n,r){return Vn&21?(Ae(r,n)||(r=es(),W.lanes|=r,Un|=r,e.baseState=!0),n):(e.baseState&&(e.baseState=!1,ge=!0),e.memoizedState=r)}function Ru(e,n){var r=U;U=r!==0&&4>r?r:4,e(!0);var l=qt.transition;qt.transition={};try{e(!1),n()}finally{U=r,qt.transition=l}}function Ks(){return Me().memoizedState}function Du(e,n,r){var l=yn(e);if(r={lane:l,action:r,hasEagerState:!1,eagerState:null,next:null},Zs(e))Js(n,r);else if(r=Ns(e,n,r,l),r!==null){var t=ue();Ue(r,e,l,t),qs(r,n,l)}}function Iu(e,n,r){var l=yn(e),t={lane:l,action:r,hasEagerState:!1,eagerState:null,next:null};if(Zs(e))Js(n,t);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=n.lastRenderedReducer,a!==null))try{var o=n.lastRenderedState,i=a(o,r);if(t.hasEagerState=!0,t.eagerState=i,Ae(i,o)){var v=n.interleaved;v===null?(t.next=t,Po(n)):(t.next=v.next,v.next=t),n.interleaved=t;return}}catch{}finally{}r=Ns(e,n,t,l),r!==null&&(t=ue(),Ue(r,e,l,t),qs(r,n,l))}}function Zs(e){var n=e.alternate;return e===W||n!==null&&n===W}function Js(e,n){Vr=st=!0;var r=e.pending;r===null?n.next=n:(n.next=r.next,r.next=n),e.pending=n}function qs(e,n,r){if(r&4194240){var l=n.lanes;l&=e.pendingLanes,r|=l,n.lanes=r,fo(e,r)}}var ct={readContext:Oe,useCallback:ve,useContext:ve,useEffect:ve,useImperativeHandle:ve,useInsertionEffect:ve,useLayoutEffect:ve,useMemo:ve,useReducer:ve,useRef:ve,useState:ve,useDebugValue:ve,useDeferredValue:ve,useTransition:ve,useMutableSource:ve,useSyncExternalStore:ve,useId:ve,unstable_isNewReconciler:!1},Fu={readContext:Oe,useCallback:function(e,n){return He().memoizedState=[e,n===void 0?null:n],e},useContext:Oe,useEffect:Fv,useImperativeHandle:function(e,n,r){return r=r!=null?r.concat([e]):null,Al(4194308,4,Xs.bind(null,n,e),r)},useLayoutEffect:function(e,n){return Al(4194308,4,e,n)},useInsertionEffect:function(e,n){return Al(4,2,e,n)},useMemo:function(e,n){var r=He();return n=n===void 0?null:n,e=e(),r.memoizedState=[e,n],e},useReducer:function(e,n,r){var l=He();return n=r!==void 0?r(n):n,l.memoizedState=l.baseState=n,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},l.queue=e,e=e.dispatch=Du.bind(null,W,e),[l.memoizedState,e]},useRef:function(e){var n=He();return e={current:e},n.memoizedState=e},useState:Iv,useDebugValue:Fo,useDeferredValue:function(e){return He().memoizedState=e},useTransition:function(){var e=Iv(!1),n=e[0];return e=Ru.bind(null,e[1]),He().memoizedState=e,[n,e]},useMutableSource:function(){},useSyncExternalStore:function(e,n,r){var l=W,t=He();if(X){if(r===void 0)throw Error(z(407));r=r()}else{if(r=n(),le===null)throw Error(z(349));Vn&30||Is(l,n,r)}t.memoizedState=r;var a={value:r,getSnapshot:n};return t.queue=a,Fv(Vs.bind(null,l,a,e),[e]),l.flags|=2048,al(9,Fs.bind(null,l,a,r,n),void 0,null),r},useId:function(){var e=He(),n=le.identifierPrefix;if(X){var r=qe,l=Je;r=(l&~(1<<32-Ve(l)-1)).toString(32)+r,n=":"+n+"R"+r,r=ll++,0<r&&(n+="H"+r.toString(32)),n+=":"}else r=Mu++,n=":"+n+"r"+r.toString(32)+":";return e.memoizedState=n},unstable_isNewReconciler:!1},Vu={readContext:Oe,useCallback:Ws,useContext:Oe,useEffect:Io,useImperativeHandle:Hs,useInsertionEffect:Ys,useLayoutEffect:$s,useMemo:Qs,useReducer:ea,useRef:Bs,useState:function(){return ea(tl)},useDebugValue:Fo,useDeferredValue:function(e){var n=Me();return Gs(n,J.memoizedState,e)},useTransition:function(){var e=ea(tl)[0],n=Me().memoizedState;return[e,n]},useMutableSource:Rs,useSyncExternalStore:Ds,useId:Ks,unstable_isNewReconciler:!1},Uu={readContext:Oe,useCallback:Ws,useContext:Oe,useEffect:Io,useImperativeHandle:Hs,useInsertionEffect:Ys,useLayoutEffect:$s,useMemo:Qs,useReducer:na,useRef:Bs,useState:function(){return na(tl)},useDebugValue:Fo,useDeferredValue:function(e){var n=Me();return J===null?n.memoizedState=e:Gs(n,J.memoizedState,e)},useTransition:function(){var e=na(tl)[0],n=Me().memoizedState;return[e,n]},useMutableSource:Rs,useSyncExternalStore:Ds,useId:Ks,unstable_isNewReconciler:!1};function De(e,n){if(e&&e.defaultProps){n=Q({},n),e=e.defaultProps;for(var r in e)n[r]===void 0&&(n[r]=e[r]);return n}return n}function Va(e,n,r,l){n=e.memoizedState,r=r(l,n),r=r==null?n:Q({},n,r),e.memoizedState=r,e.lanes===0&&(e.updateQueue.baseState=r)}var jt={isMounted:function(e){return(e=e._reactInternals)?Yn(e)===e:!1},enqueueSetState:function(e,n,r){e=e._reactInternals;var l=ue(),t=yn(e),a=en(l,t);a.payload=n,r!=null&&(a.callback=r),n=bn(e,a,t),n!==null&&(Ue(n,e,t,l),Vl(n,e,t))},enqueueReplaceState:function(e,n,r){e=e._reactInternals;var l=ue(),t=yn(e),a=en(l,t);a.tag=1,a.payload=n,r!=null&&(a.callback=r),n=bn(e,a,t),n!==null&&(Ue(n,e,t,l),Vl(n,e,t))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var r=ue(),l=yn(e),t=en(r,l);t.tag=2,n!=null&&(t.callback=n),n=bn(e,t,l),n!==null&&(Ue(n,e,l,r),Vl(n,e,l))}};function Vv(e,n,r,l,t,a,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(l,a,o):n.prototype&&n.prototype.isPureReactComponent?!Zr(r,l)||!Zr(t,a):!0}function ec(e,n,r){var l=!1,t=jn,a=n.contextType;return typeof a=="object"&&a!==null?a=Oe(a):(t=xe(n)?In:ce.current,l=n.contextTypes,a=(l=l!=null)?ur(e,t):jn),n=new n(r,a),e.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=jt,e.stateNode=n,n._reactInternals=e,l&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=a),n}function Uv(e,n,r,l){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(r,l),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(r,l),n.state!==e&&jt.enqueueReplaceState(n,n.state,null)}function Ua(e,n,r,l){var t=e.stateNode;t.props=r,t.state=e.memoizedState,t.refs={},To(e);var a=n.contextType;typeof a=="object"&&a!==null?t.context=Oe(a):(a=xe(n)?In:ce.current,t.context=ur(e,a)),t.state=e.memoizedState,a=n.getDerivedStateFromProps,typeof a=="function"&&(Va(e,n,a,r),t.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof t.getSnapshotBeforeUpdate=="function"||typeof t.UNSAFE_componentWillMount!="function"&&typeof t.componentWillMount!="function"||(n=t.state,typeof t.componentWillMount=="function"&&t.componentWillMount(),typeof t.UNSAFE_componentWillMount=="function"&&t.UNSAFE_componentWillMount(),n!==t.state&&jt.enqueueReplaceState(t,t.state,null),vt(e,r,t,l),t.state=e.memoizedState),typeof t.componentDidMount=="function"&&(e.flags|=4194308)}function gr(e,n){try{var r="",l=n;do r+=pd(l),l=l.return;while(l);var t=r}catch(a){t=`
Error generating stack: `+a.message+`
`+a.stack}return{value:e,source:n,stack:t,digest:null}}function ra(e,n,r){return{value:e,source:null,stack:r??null,digest:n??null}}function Aa(e,n){try{console.error(n.value)}catch(r){setTimeout(function(){throw r})}}var Au=typeof WeakMap=="function"?WeakMap:Map;function nc(e,n,r){r=en(-1,r),r.tag=3,r.payload={element:null};var l=n.value;return r.callback=function(){ut||(ut=!0,Za=l),Aa(e,n)},r}function rc(e,n,r){r=en(-1,r),r.tag=3;var l=e.type.getDerivedStateFromError;if(typeof l=="function"){var t=n.value;r.payload=function(){return l(t)},r.callback=function(){Aa(e,n)}}var a=e.stateNode;return a!==null&&typeof a.componentDidCatch=="function"&&(r.callback=function(){Aa(e,n),typeof l!="function"&&(wn===null?wn=new Set([this]):wn.add(this));var o=n.stack;this.componentDidCatch(n.value,{componentStack:o!==null?o:""})}),r}function Av(e,n,r){var l=e.pingCache;if(l===null){l=e.pingCache=new Au;var t=new Set;l.set(n,t)}else t=l.get(n),t===void 0&&(t=new Set,l.set(n,t));t.has(r)||(t.add(r),e=nm.bind(null,e,n,r),n.then(e,e))}function Bv(e){do{var n;if((n=e.tag===13)&&(n=e.memoizedState,n=n!==null?n.dehydrated!==null:!0),n)return e;e=e.return}while(e!==null);return null}function Yv(e,n,r,l,t){return e.mode&1?(e.flags|=65536,e.lanes=t,e):(e===n?e.flags|=65536:(e.flags|=128,r.flags|=131072,r.flags&=-52805,r.tag===1&&(r.alternate===null?r.tag=17:(n=en(-1,1),n.tag=2,bn(r,n,1))),r.lanes|=1),e)}var Bu=an.ReactCurrentOwner,ge=!1;function de(e,n,r,l){n.child=e===null?Ls(n,null,r,l):pr(n,e.child,r,l)}function $v(e,n,r,l,t){r=r.render;var a=n.ref;return sr(n,t),l=Ro(e,n,r,l,a,t),r=Do(),e!==null&&!ge?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~t,tn(e,n,t)):(X&&r&&zo(n),n.flags|=1,de(e,n,l,t),n.child)}function Xv(e,n,r,l,t){if(e===null){var a=r.type;return typeof a=="function"&&!Ho(a)&&a.defaultProps===void 0&&r.compare===null&&r.defaultProps===void 0?(n.tag=15,n.type=a,lc(e,n,a,l,t)):(e=Xl(r.type,null,l,n,n.mode,t),e.ref=n.ref,e.return=n,n.child=e)}if(a=e.child,!(e.lanes&t)){var o=a.memoizedProps;if(r=r.compare,r=r!==null?r:Zr,r(o,l)&&e.ref===n.ref)return tn(e,n,t)}return n.flags|=1,e=kn(a,l),e.ref=n.ref,e.return=n,n.child=e}function lc(e,n,r,l,t){if(e!==null){var a=e.memoizedProps;if(Zr(a,l)&&e.ref===n.ref)if(ge=!1,n.pendingProps=l=a,(e.lanes&t)!==0)e.flags&131072&&(ge=!0);else return n.lanes=e.lanes,tn(e,n,t)}return Ba(e,n,r,l,t)}function tc(e,n,r){var l=n.pendingProps,t=l.children,a=e!==null?e.memoizedState:null;if(l.mode==="hidden")if(!(n.mode&1))n.memoizedState={baseLanes:0,cachePool:null,transitions:null},B(rr,ye),ye|=r;else{if(!(r&1073741824))return e=a!==null?a.baseLanes|r:r,n.lanes=n.childLanes=1073741824,n.memoizedState={baseLanes:e,cachePool:null,transitions:null},n.updateQueue=null,B(rr,ye),ye|=e,null;n.memoizedState={baseLanes:0,cachePool:null,transitions:null},l=a!==null?a.baseLanes:r,B(rr,ye),ye|=l}else a!==null?(l=a.baseLanes|r,n.memoizedState=null):l=r,B(rr,ye),ye|=l;return de(e,n,t,r),n.child}function ac(e,n){var r=n.ref;(e===null&&r!==null||e!==null&&e.ref!==r)&&(n.flags|=512,n.flags|=2097152)}function Ba(e,n,r,l,t){var a=xe(r)?In:ce.current;return a=ur(n,a),sr(n,t),r=Ro(e,n,r,l,a,t),l=Do(),e!==null&&!ge?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~t,tn(e,n,t)):(X&&l&&zo(n),n.flags|=1,de(e,n,r,t),n.child)}function Hv(e,n,r,l,t){if(xe(r)){var a=!0;rt(n)}else a=!1;if(sr(n,t),n.stateNode===null)Bl(e,n),ec(n,r,l),Ua(n,r,l,t),l=!0;else if(e===null){var o=n.stateNode,i=n.memoizedProps;o.props=i;var v=o.context,s=r.contextType;typeof s=="object"&&s!==null?s=Oe(s):(s=xe(r)?In:ce.current,s=ur(n,s));var g=r.getDerivedStateFromProps,p=typeof g=="function"||typeof o.getSnapshotBeforeUpdate=="function";p||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(i!==l||v!==s)&&Uv(n,o,l,s),cn=!1;var m=n.memoizedState;o.state=m,vt(n,l,o,t),v=n.memoizedState,i!==l||m!==v||he.current||cn?(typeof g=="function"&&(Va(n,r,g,l),v=n.memoizedState),(i=cn||Vv(n,r,i,l,m,v,s))?(p||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(n.flags|=4194308)):(typeof o.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=l,n.memoizedState=v),o.props=l,o.state=v,o.context=s,l=i):(typeof o.componentDidMount=="function"&&(n.flags|=4194308),l=!1)}else{o=n.stateNode,Os(e,n),i=n.memoizedProps,s=n.type===n.elementType?i:De(n.type,i),o.props=s,p=n.pendingProps,m=o.context,v=r.contextType,typeof v=="object"&&v!==null?v=Oe(v):(v=xe(r)?In:ce.current,v=ur(n,v));var y=r.getDerivedStateFromProps;(g=typeof y=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(i!==p||m!==v)&&Uv(n,o,l,v),cn=!1,m=n.memoizedState,o.state=m,vt(n,l,o,t);var k=n.memoizedState;i!==p||m!==k||he.current||cn?(typeof y=="function"&&(Va(n,r,y,l),k=n.memoizedState),(s=cn||Vv(n,r,s,l,m,k,v)||!1)?(g||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(l,k,v),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(l,k,v)),typeof o.componentDidUpdate=="function"&&(n.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof o.componentDidUpdate!="function"||i===e.memoizedProps&&m===e.memoizedState||(n.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||i===e.memoizedProps&&m===e.memoizedState||(n.flags|=1024),n.memoizedProps=l,n.memoizedState=k),o.props=l,o.state=k,o.context=v,l=s):(typeof o.componentDidUpdate!="function"||i===e.memoizedProps&&m===e.memoizedState||(n.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||i===e.memoizedProps&&m===e.memoizedState||(n.flags|=1024),l=!1)}return Ya(e,n,r,l,a,t)}function Ya(e,n,r,l,t,a){ac(e,n);var o=(n.flags&128)!==0;if(!l&&!o)return t&&Lv(n,r,!1),tn(e,n,a);l=n.stateNode,Bu.current=n;var i=o&&typeof r.getDerivedStateFromError!="function"?null:l.render();return n.flags|=1,e!==null&&o?(n.child=pr(n,e.child,null,a),n.child=pr(n,null,i,a)):de(e,n,i,a),n.memoizedState=l.state,t&&Lv(n,r,!0),n.child}function oc(e){var n=e.stateNode;n.pendingContext?Tv(e,n.pendingContext,n.pendingContext!==n.context):n.context&&Tv(e,n.context,!1),Lo(e,n.containerInfo)}function Wv(e,n,r,l,t){return mr(),jo(t),n.flags|=256,de(e,n,r,l),n.child}var $a={dehydrated:null,treeContext:null,retryLane:0};function Xa(e){return{baseLanes:e,cachePool:null,transitions:null}}function vc(e,n,r){var l=n.pendingProps,t=H.current,a=!1,o=(n.flags&128)!==0,i;if((i=o)||(i=e!==null&&e.memoizedState===null?!1:(t&2)!==0),i?(a=!0,n.flags&=-129):(e===null||e.memoizedState!==null)&&(t|=1),B(H,t&1),e===null)return Ia(n),e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(n.mode&1?e.data==="$!"?n.lanes=8:n.lanes=1073741824:n.lanes=1,null):(o=l.children,e=l.fallback,a?(l=n.mode,a=n.child,o={mode:"hidden",children:o},!(l&1)&&a!==null?(a.childLanes=0,a.pendingProps=o):a=_t(o,l,0,null),e=Dn(e,l,r,null),a.return=n,e.return=n,a.sibling=e,n.child=a,n.child.memoizedState=Xa(r),n.memoizedState=$a,e):Vo(n,o));if(t=e.memoizedState,t!==null&&(i=t.dehydrated,i!==null))return Yu(e,n,o,l,i,t,r);if(a){a=l.fallback,o=n.mode,t=e.child,i=t.sibling;var v={mode:"hidden",children:l.children};return!(o&1)&&n.child!==t?(l=n.child,l.childLanes=0,l.pendingProps=v,n.deletions=null):(l=kn(t,v),l.subtreeFlags=t.subtreeFlags&14680064),i!==null?a=kn(i,a):(a=Dn(a,o,r,null),a.flags|=2),a.return=n,l.return=n,l.sibling=a,n.child=l,l=a,a=n.child,o=e.child.memoizedState,o=o===null?Xa(r):{baseLanes:o.baseLanes|r,cachePool:null,transitions:o.transitions},a.memoizedState=o,a.childLanes=e.childLanes&~r,n.memoizedState=$a,l}return a=e.child,e=a.sibling,l=kn(a,{mode:"visible",children:l.children}),!(n.mode&1)&&(l.lanes=r),l.return=n,l.sibling=null,e!==null&&(r=n.deletions,r===null?(n.deletions=[e],n.flags|=16):r.push(e)),n.child=l,n.memoizedState=null,l}function Vo(e,n){return n=_t({mode:"visible",children:n},e.mode,0,null),n.return=e,e.child=n}function _l(e,n,r,l){return l!==null&&jo(l),pr(n,e.child,null,r),e=Vo(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function Yu(e,n,r,l,t,a,o){if(r)return n.flags&256?(n.flags&=-257,l=ra(Error(z(422))),_l(e,n,o,l)):n.memoizedState!==null?(n.child=e.child,n.flags|=128,null):(a=l.fallback,t=n.mode,l=_t({mode:"visible",children:l.children},t,0,null),a=Dn(a,t,o,null),a.flags|=2,l.return=n,a.return=n,l.sibling=a,n.child=l,n.mode&1&&pr(n,e.child,null,o),n.child.memoizedState=Xa(o),n.memoizedState=$a,a);if(!(n.mode&1))return _l(e,n,o,null);if(t.data==="$!"){if(l=t.nextSibling&&t.nextSibling.dataset,l)var i=l.dgst;return l=i,a=Error(z(419)),l=ra(a,l,void 0),_l(e,n,o,l)}if(i=(o&e.childLanes)!==0,ge||i){if(l=le,l!==null){switch(o&-o){case 4:t=2;break;case 16:t=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:t=32;break;case 536870912:t=268435456;break;default:t=0}t=t&(l.suspendedLanes|o)?0:t,t!==0&&t!==a.retryLane&&(a.retryLane=t,ln(e,t),Ue(l,e,t,-1))}return Xo(),l=ra(Error(z(421))),_l(e,n,o,l)}return t.data==="$?"?(n.flags|=128,n.child=e.child,n=rm.bind(null,e),t._reactRetry=n,null):(e=a.treeContext,ze=xn(t.nextSibling),Se=n,X=!0,Fe=null,e!==null&&(Pe[Te++]=Je,Pe[Te++]=qe,Pe[Te++]=Fn,Je=e.id,qe=e.overflow,Fn=n),n=Vo(n,l.children),n.flags|=4096,n)}function Qv(e,n,r){e.lanes|=n;var l=e.alternate;l!==null&&(l.lanes|=n),Fa(e.return,n,r)}function la(e,n,r,l,t){var a=e.memoizedState;a===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:l,tail:r,tailMode:t}:(a.isBackwards=n,a.rendering=null,a.renderingStartTime=0,a.last=l,a.tail=r,a.tailMode=t)}function ic(e,n,r){var l=n.pendingProps,t=l.revealOrder,a=l.tail;if(de(e,n,l.children,r),l=H.current,l&2)l=l&1|2,n.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Qv(e,r,n);else if(e.tag===19)Qv(e,r,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}l&=1}if(B(H,l),!(n.mode&1))n.memoizedState=null;else switch(t){case"forwards":for(r=n.child,t=null;r!==null;)e=r.alternate,e!==null&&it(e)===null&&(t=r),r=r.sibling;r=t,r===null?(t=n.child,n.child=null):(t=r.sibling,r.sibling=null),la(n,!1,t,r,a);break;case"backwards":for(r=null,t=n.child,n.child=null;t!==null;){if(e=t.alternate,e!==null&&it(e)===null){n.child=t;break}e=t.sibling,t.sibling=r,r=t,t=e}la(n,!0,r,null,a);break;case"together":la(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function Bl(e,n){!(n.mode&1)&&e!==null&&(e.alternate=null,n.alternate=null,n.flags|=2)}function tn(e,n,r){if(e!==null&&(n.dependencies=e.dependencies),Un|=n.lanes,!(r&n.childLanes))return null;if(e!==null&&n.child!==e.child)throw Error(z(153));if(n.child!==null){for(e=n.child,r=kn(e,e.pendingProps),n.child=r,r.return=n;e.sibling!==null;)e=e.sibling,r=r.sibling=kn(e,e.pendingProps),r.return=n;r.sibling=null}return n.child}function $u(e,n,r){switch(n.tag){case 3:oc(n),mr();break;case 5:Ms(n);break;case 1:xe(n.type)&&rt(n);break;case 4:Lo(n,n.stateNode.containerInfo);break;case 10:var l=n.type._context,t=n.memoizedProps.value;B(at,l._currentValue),l._currentValue=t;break;case 13:if(l=n.memoizedState,l!==null)return l.dehydrated!==null?(B(H,H.current&1),n.flags|=128,null):r&n.child.childLanes?vc(e,n,r):(B(H,H.current&1),e=tn(e,n,r),e!==null?e.sibling:null);B(H,H.current&1);break;case 19:if(l=(r&n.childLanes)!==0,e.flags&128){if(l)return ic(e,n,r);n.flags|=128}if(t=n.memoizedState,t!==null&&(t.rendering=null,t.tail=null,t.lastEffect=null),B(H,H.current),l)break;return null;case 22:case 23:return n.lanes=0,tc(e,n,r)}return tn(e,n,r)}var sc,Ha,cc,dc;sc=function(e,n){for(var r=n.child;r!==null;){if(r.tag===5||r.tag===6)e.appendChild(r.stateNode);else if(r.tag!==4&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return;r=r.return}r.sibling.return=r.return,r=r.sibling}};Ha=function(){};cc=function(e,n,r,l){var t=e.memoizedProps;if(t!==l){e=n.stateNode,Mn(Ge.current);var a=null;switch(r){case"input":t=pa(e,t),l=pa(e,l),a=[];break;case"select":t=Q({},t,{value:void 0}),l=Q({},l,{value:void 0}),a=[];break;case"textarea":t=ha(e,t),l=ha(e,l),a=[];break;default:typeof t.onClick!="function"&&typeof l.onClick=="function"&&(e.onclick=et)}ba(r,l);var o;r=null;for(s in t)if(!l.hasOwnProperty(s)&&t.hasOwnProperty(s)&&t[s]!=null)if(s==="style"){var i=t[s];for(o in i)i.hasOwnProperty(o)&&(r||(r={}),r[o]="")}else s!=="dangerouslySetInnerHTML"&&s!=="children"&&s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&($r.hasOwnProperty(s)?a||(a=[]):(a=a||[]).push(s,null));for(s in l){var v=l[s];if(i=t!=null?t[s]:void 0,l.hasOwnProperty(s)&&v!==i&&(v!=null||i!=null))if(s==="style")if(i){for(o in i)!i.hasOwnProperty(o)||v&&v.hasOwnProperty(o)||(r||(r={}),r[o]="");for(o in v)v.hasOwnProperty(o)&&i[o]!==v[o]&&(r||(r={}),r[o]=v[o])}else r||(a||(a=[]),a.push(s,r)),r=v;else s==="dangerouslySetInnerHTML"?(v=v?v.__html:void 0,i=i?i.__html:void 0,v!=null&&i!==v&&(a=a||[]).push(s,v)):s==="children"?typeof v!="string"&&typeof v!="number"||(a=a||[]).push(s,""+v):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&($r.hasOwnProperty(s)?(v!=null&&s==="onScroll"&&Y("scroll",e),a||i===v||(a=[])):(a=a||[]).push(s,v))}r&&(a=a||[]).push("style",r);var s=a;(n.updateQueue=s)&&(n.flags|=4)}};dc=function(e,n,r,l){r!==l&&(n.flags|=4)};function Er(e,n){if(!X)switch(e.tailMode){case"hidden":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e.tail=null:r.sibling=null;break;case"collapsed":r=e.tail;for(var l=null;r!==null;)r.alternate!==null&&(l=r),r=r.sibling;l===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:l.sibling=null}}function ie(e){var n=e.alternate!==null&&e.alternate.child===e.child,r=0,l=0;if(n)for(var t=e.child;t!==null;)r|=t.lanes|t.childLanes,l|=t.subtreeFlags&14680064,l|=t.flags&14680064,t.return=e,t=t.sibling;else for(t=e.child;t!==null;)r|=t.lanes|t.childLanes,l|=t.subtreeFlags,l|=t.flags,t.return=e,t=t.sibling;return e.subtreeFlags|=l,e.childLanes=r,n}function Xu(e,n,r){var l=n.pendingProps;switch(So(n),n.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ie(n),null;case 1:return xe(n.type)&&nt(),ie(n),null;case 3:return l=n.stateNode,fr(),$(he),$(ce),Oo(),l.pendingContext&&(l.context=l.pendingContext,l.pendingContext=null),(e===null||e.child===null)&&(Cl(n)?n.flags|=4:e===null||e.memoizedState.isDehydrated&&!(n.flags&256)||(n.flags|=1024,Fe!==null&&(eo(Fe),Fe=null))),Ha(e,n),ie(n),null;case 5:No(n);var t=Mn(rl.current);if(r=n.type,e!==null&&n.stateNode!=null)cc(e,n,r,l,t),e.ref!==n.ref&&(n.flags|=512,n.flags|=2097152);else{if(!l){if(n.stateNode===null)throw Error(z(166));return ie(n),null}if(e=Mn(Ge.current),Cl(n)){l=n.stateNode,r=n.type;var a=n.memoizedProps;switch(l[We]=n,l[el]=a,e=(n.mode&1)!==0,r){case"dialog":Y("cancel",l),Y("close",l);break;case"iframe":case"object":case"embed":Y("load",l);break;case"video":case"audio":for(t=0;t<Nr.length;t++)Y(Nr[t],l);break;case"source":Y("error",l);break;case"img":case"image":case"link":Y("error",l),Y("load",l);break;case"details":Y("toggle",l);break;case"input":lv(l,a),Y("invalid",l);break;case"select":l._wrapperState={wasMultiple:!!a.multiple},Y("invalid",l);break;case"textarea":av(l,a),Y("invalid",l)}ba(r,a),t=null;for(var o in a)if(a.hasOwnProperty(o)){var i=a[o];o==="children"?typeof i=="string"?l.textContent!==i&&(a.suppressHydrationWarning!==!0&&jl(l.textContent,i,e),t=["children",i]):typeof i=="number"&&l.textContent!==""+i&&(a.suppressHydrationWarning!==!0&&jl(l.textContent,i,e),t=["children",""+i]):$r.hasOwnProperty(o)&&i!=null&&o==="onScroll"&&Y("scroll",l)}switch(r){case"input":hl(l),tv(l,a,!0);break;case"textarea":hl(l),ov(l);break;case"select":case"option":break;default:typeof a.onClick=="function"&&(l.onclick=et)}l=t,n.updateQueue=l,l!==null&&(n.flags|=4)}else{o=t.nodeType===9?t:t.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Vi(r)),e==="http://www.w3.org/1999/xhtml"?r==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof l.is=="string"?e=o.createElement(r,{is:l.is}):(e=o.createElement(r),r==="select"&&(o=e,l.multiple?o.multiple=!0:l.size&&(o.size=l.size))):e=o.createElementNS(e,r),e[We]=n,e[el]=l,sc(e,n,!1,!1),n.stateNode=e;e:{switch(o=wa(r,l),r){case"dialog":Y("cancel",e),Y("close",e),t=l;break;case"iframe":case"object":case"embed":Y("load",e),t=l;break;case"video":case"audio":for(t=0;t<Nr.length;t++)Y(Nr[t],e);t=l;break;case"source":Y("error",e),t=l;break;case"img":case"image":case"link":Y("error",e),Y("load",e),t=l;break;case"details":Y("toggle",e),t=l;break;case"input":lv(e,l),t=pa(e,l),Y("invalid",e);break;case"option":t=l;break;case"select":e._wrapperState={wasMultiple:!!l.multiple},t=Q({},l,{value:void 0}),Y("invalid",e);break;case"textarea":av(e,l),t=ha(e,l),Y("invalid",e);break;default:t=l}ba(r,t),i=t;for(a in i)if(i.hasOwnProperty(a)){var v=i[a];a==="style"?Bi(e,v):a==="dangerouslySetInnerHTML"?(v=v?v.__html:void 0,v!=null&&Ui(e,v)):a==="children"?typeof v=="string"?(r!=="textarea"||v!=="")&&Xr(e,v):typeof v=="number"&&Xr(e,""+v):a!=="suppressContentEditableWarning"&&a!=="suppressHydrationWarning"&&a!=="autoFocus"&&($r.hasOwnProperty(a)?v!=null&&a==="onScroll"&&Y("scroll",e):v!=null&&io(e,a,v,o))}switch(r){case"input":hl(e),tv(e,l,!1);break;case"textarea":hl(e),ov(e);break;case"option":l.value!=null&&e.setAttribute("value",""+Sn(l.value));break;case"select":e.multiple=!!l.multiple,a=l.value,a!=null?ar(e,!!l.multiple,a,!1):l.defaultValue!=null&&ar(e,!!l.multiple,l.defaultValue,!0);break;default:typeof t.onClick=="function"&&(e.onclick=et)}switch(r){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}}l&&(n.flags|=4)}n.ref!==null&&(n.flags|=512,n.flags|=2097152)}return ie(n),null;case 6:if(e&&n.stateNode!=null)dc(e,n,e.memoizedProps,l);else{if(typeof l!="string"&&n.stateNode===null)throw Error(z(166));if(r=Mn(rl.current),Mn(Ge.current),Cl(n)){if(l=n.stateNode,r=n.memoizedProps,l[We]=n,(a=l.nodeValue!==r)&&(e=Se,e!==null))switch(e.tag){case 3:jl(l.nodeValue,r,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&jl(l.nodeValue,r,(e.mode&1)!==0)}a&&(n.flags|=4)}else l=(r.nodeType===9?r:r.ownerDocument).createTextNode(l),l[We]=n,n.stateNode=l}return ie(n),null;case 13:if($(H),l=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(X&&ze!==null&&n.mode&1&&!(n.flags&128))Ps(),mr(),n.flags|=98560,a=!1;else if(a=Cl(n),l!==null&&l.dehydrated!==null){if(e===null){if(!a)throw Error(z(318));if(a=n.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(z(317));a[We]=n}else mr(),!(n.flags&128)&&(n.memoizedState=null),n.flags|=4;ie(n),a=!1}else Fe!==null&&(eo(Fe),Fe=null),a=!0;if(!a)return n.flags&65536?n:null}return n.flags&128?(n.lanes=r,n):(l=l!==null,l!==(e!==null&&e.memoizedState!==null)&&l&&(n.child.flags|=8192,n.mode&1&&(e===null||H.current&1?q===0&&(q=3):Xo())),n.updateQueue!==null&&(n.flags|=4),ie(n),null);case 4:return fr(),Ha(e,n),e===null&&Jr(n.stateNode.containerInfo),ie(n),null;case 10:return _o(n.type._context),ie(n),null;case 17:return xe(n.type)&&nt(),ie(n),null;case 19:if($(H),a=n.memoizedState,a===null)return ie(n),null;if(l=(n.flags&128)!==0,o=a.rendering,o===null)if(l)Er(a,!1);else{if(q!==0||e!==null&&e.flags&128)for(e=n.child;e!==null;){if(o=it(e),o!==null){for(n.flags|=128,Er(a,!1),l=o.updateQueue,l!==null&&(n.updateQueue=l,n.flags|=4),n.subtreeFlags=0,l=r,r=n.child;r!==null;)a=r,e=l,a.flags&=14680066,o=a.alternate,o===null?(a.childLanes=0,a.lanes=e,a.child=null,a.subtreeFlags=0,a.memoizedProps=null,a.memoizedState=null,a.updateQueue=null,a.dependencies=null,a.stateNode=null):(a.childLanes=o.childLanes,a.lanes=o.lanes,a.child=o.child,a.subtreeFlags=0,a.deletions=null,a.memoizedProps=o.memoizedProps,a.memoizedState=o.memoizedState,a.updateQueue=o.updateQueue,a.type=o.type,e=o.dependencies,a.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),r=r.sibling;return B(H,H.current&1|2),n.child}e=e.sibling}a.tail!==null&&K()>hr&&(n.flags|=128,l=!0,Er(a,!1),n.lanes=4194304)}else{if(!l)if(e=it(o),e!==null){if(n.flags|=128,l=!0,r=e.updateQueue,r!==null&&(n.updateQueue=r,n.flags|=4),Er(a,!0),a.tail===null&&a.tailMode==="hidden"&&!o.alternate&&!X)return ie(n),null}else 2*K()-a.renderingStartTime>hr&&r!==1073741824&&(n.flags|=128,l=!0,Er(a,!1),n.lanes=4194304);a.isBackwards?(o.sibling=n.child,n.child=o):(r=a.last,r!==null?r.sibling=o:n.child=o,a.last=o)}return a.tail!==null?(n=a.tail,a.rendering=n,a.tail=n.sibling,a.renderingStartTime=K(),n.sibling=null,r=H.current,B(H,l?r&1|2:r&1),n):(ie(n),null);case 22:case 23:return $o(),l=n.memoizedState!==null,e!==null&&e.memoizedState!==null!==l&&(n.flags|=8192),l&&n.mode&1?ye&1073741824&&(ie(n),n.subtreeFlags&6&&(n.flags|=8192)):ie(n),null;case 24:return null;case 25:return null}throw Error(z(156,n.tag))}function Hu(e,n){switch(So(n),n.tag){case 1:return xe(n.type)&&nt(),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return fr(),$(he),$(ce),Oo(),e=n.flags,e&65536&&!(e&128)?(n.flags=e&-65537|128,n):null;case 5:return No(n),null;case 13:if($(H),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(z(340));mr()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return $(H),null;case 4:return fr(),null;case 10:return _o(n.type._context),null;case 22:case 23:return $o(),null;case 24:return null;default:return null}}var Pl=!1,se=!1,Wu=typeof WeakSet=="function"?WeakSet:Set,C=null;function nr(e,n){var r=e.ref;if(r!==null)if(typeof r=="function")try{r(null)}catch(l){G(e,n,l)}else r.current=null}function Wa(e,n,r){try{r()}catch(l){G(e,n,l)}}var Gv=!1;function Qu(e,n){if(Ta=Zl,e=gs(),ko(e)){if("selectionStart"in e)var r={start:e.selectionStart,end:e.selectionEnd};else e:{r=(r=e.ownerDocument)&&r.defaultView||window;var l=r.getSelection&&r.getSelection();if(l&&l.rangeCount!==0){r=l.anchorNode;var t=l.anchorOffset,a=l.focusNode;l=l.focusOffset;try{r.nodeType,a.nodeType}catch{r=null;break e}var o=0,i=-1,v=-1,s=0,g=0,p=e,m=null;n:for(;;){for(var y;p!==r||t!==0&&p.nodeType!==3||(i=o+t),p!==a||l!==0&&p.nodeType!==3||(v=o+l),p.nodeType===3&&(o+=p.nodeValue.length),(y=p.firstChild)!==null;)m=p,p=y;for(;;){if(p===e)break n;if(m===r&&++s===t&&(i=o),m===a&&++g===l&&(v=o),(y=p.nextSibling)!==null)break;p=m,m=p.parentNode}p=y}r=i===-1||v===-1?null:{start:i,end:v}}else r=null}r=r||{start:0,end:0}}else r=null;for(La={focusedElem:e,selectionRange:r},Zl=!1,C=n;C!==null;)if(n=C,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,C=e;else for(;C!==null;){n=C;try{var k=n.alternate;if(n.flags&1024)switch(n.tag){case 0:case 11:case 15:break;case 1:if(k!==null){var S=k.memoizedProps,M=k.memoizedState,d=n.stateNode,c=d.getSnapshotBeforeUpdate(n.elementType===n.type?S:De(n.type,S),M);d.__reactInternalSnapshotBeforeUpdate=c}break;case 3:var u=n.stateNode.containerInfo;u.nodeType===1?u.textContent="":u.nodeType===9&&u.documentElement&&u.removeChild(u.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(z(163))}}catch(x){G(n,n.return,x)}if(e=n.sibling,e!==null){e.return=n.return,C=e;break}C=n.return}return k=Gv,Gv=!1,k}function Ur(e,n,r){var l=n.updateQueue;if(l=l!==null?l.lastEffect:null,l!==null){var t=l=l.next;do{if((t.tag&e)===e){var a=t.destroy;t.destroy=void 0,a!==void 0&&Wa(n,r,a)}t=t.next}while(t!==l)}}function Ct(e,n){if(n=n.updateQueue,n=n!==null?n.lastEffect:null,n!==null){var r=n=n.next;do{if((r.tag&e)===e){var l=r.create;r.destroy=l()}r=r.next}while(r!==n)}}function Qa(e){var n=e.ref;if(n!==null){var r=e.stateNode;switch(e.tag){case 5:e=r;break;default:e=r}typeof n=="function"?n(e):n.current=e}}function uc(e){var n=e.alternate;n!==null&&(e.alternate=null,uc(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&(delete n[We],delete n[el],delete n[Ma],delete n[Tu],delete n[Lu])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function mc(e){return e.tag===5||e.tag===3||e.tag===4}function Kv(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||mc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ga(e,n,r){var l=e.tag;if(l===5||l===6)e=e.stateNode,n?r.nodeType===8?r.parentNode.insertBefore(e,n):r.insertBefore(e,n):(r.nodeType===8?(n=r.parentNode,n.insertBefore(e,r)):(n=r,n.appendChild(e)),r=r._reactRootContainer,r!=null||n.onclick!==null||(n.onclick=et));else if(l!==4&&(e=e.child,e!==null))for(Ga(e,n,r),e=e.sibling;e!==null;)Ga(e,n,r),e=e.sibling}function Ka(e,n,r){var l=e.tag;if(l===5||l===6)e=e.stateNode,n?r.insertBefore(e,n):r.appendChild(e);else if(l!==4&&(e=e.child,e!==null))for(Ka(e,n,r),e=e.sibling;e!==null;)Ka(e,n,r),e=e.sibling}var te=null,Ie=!1;function vn(e,n,r){for(r=r.child;r!==null;)pc(e,n,r),r=r.sibling}function pc(e,n,r){if(Qe&&typeof Qe.onCommitFiberUnmount=="function")try{Qe.onCommitFiberUnmount(xt,r)}catch{}switch(r.tag){case 5:se||nr(r,n);case 6:var l=te,t=Ie;te=null,vn(e,n,r),te=l,Ie=t,te!==null&&(Ie?(e=te,r=r.stateNode,e.nodeType===8?e.parentNode.removeChild(r):e.removeChild(r)):te.removeChild(r.stateNode));break;case 18:te!==null&&(Ie?(e=te,r=r.stateNode,e.nodeType===8?Kt(e.parentNode,r):e.nodeType===1&&Kt(e,r),Gr(e)):Kt(te,r.stateNode));break;case 4:l=te,t=Ie,te=r.stateNode.containerInfo,Ie=!0,vn(e,n,r),te=l,Ie=t;break;case 0:case 11:case 14:case 15:if(!se&&(l=r.updateQueue,l!==null&&(l=l.lastEffect,l!==null))){t=l=l.next;do{var a=t,o=a.destroy;a=a.tag,o!==void 0&&(a&2||a&4)&&Wa(r,n,o),t=t.next}while(t!==l)}vn(e,n,r);break;case 1:if(!se&&(nr(r,n),l=r.stateNode,typeof l.componentWillUnmount=="function"))try{l.props=r.memoizedProps,l.state=r.memoizedState,l.componentWillUnmount()}catch(i){G(r,n,i)}vn(e,n,r);break;case 21:vn(e,n,r);break;case 22:r.mode&1?(se=(l=se)||r.memoizedState!==null,vn(e,n,r),se=l):vn(e,n,r);break;default:vn(e,n,r)}}function Zv(e){var n=e.updateQueue;if(n!==null){e.updateQueue=null;var r=e.stateNode;r===null&&(r=e.stateNode=new Wu),n.forEach(function(l){var t=lm.bind(null,e,l);r.has(l)||(r.add(l),l.then(t,t))})}}function Re(e,n){var r=n.deletions;if(r!==null)for(var l=0;l<r.length;l++){var t=r[l];try{var a=e,o=n,i=o;e:for(;i!==null;){switch(i.tag){case 5:te=i.stateNode,Ie=!1;break e;case 3:te=i.stateNode.containerInfo,Ie=!0;break e;case 4:te=i.stateNode.containerInfo,Ie=!0;break e}i=i.return}if(te===null)throw Error(z(160));pc(a,o,t),te=null,Ie=!1;var v=t.alternate;v!==null&&(v.return=null),t.return=null}catch(s){G(t,n,s)}}if(n.subtreeFlags&12854)for(n=n.child;n!==null;)fc(n,e),n=n.sibling}function fc(e,n){var r=e.alternate,l=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Re(n,e),Xe(e),l&4){try{Ur(3,e,e.return),Ct(3,e)}catch(S){G(e,e.return,S)}try{Ur(5,e,e.return)}catch(S){G(e,e.return,S)}}break;case 1:Re(n,e),Xe(e),l&512&&r!==null&&nr(r,r.return);break;case 5:if(Re(n,e),Xe(e),l&512&&r!==null&&nr(r,r.return),e.flags&32){var t=e.stateNode;try{Xr(t,"")}catch(S){G(e,e.return,S)}}if(l&4&&(t=e.stateNode,t!=null)){var a=e.memoizedProps,o=r!==null?r.memoizedProps:a,i=e.type,v=e.updateQueue;if(e.updateQueue=null,v!==null)try{i==="input"&&a.type==="radio"&&a.name!=null&&Ii(t,a),wa(i,o);var s=wa(i,a);for(o=0;o<v.length;o+=2){var g=v[o],p=v[o+1];g==="style"?Bi(t,p):g==="dangerouslySetInnerHTML"?Ui(t,p):g==="children"?Xr(t,p):io(t,g,p,s)}switch(i){case"input":fa(t,a);break;case"textarea":Fi(t,a);break;case"select":var m=t._wrapperState.wasMultiple;t._wrapperState.wasMultiple=!!a.multiple;var y=a.value;y!=null?ar(t,!!a.multiple,y,!1):m!==!!a.multiple&&(a.defaultValue!=null?ar(t,!!a.multiple,a.defaultValue,!0):ar(t,!!a.multiple,a.multiple?[]:"",!1))}t[el]=a}catch(S){G(e,e.return,S)}}break;case 6:if(Re(n,e),Xe(e),l&4){if(e.stateNode===null)throw Error(z(162));t=e.stateNode,a=e.memoizedProps;try{t.nodeValue=a}catch(S){G(e,e.return,S)}}break;case 3:if(Re(n,e),Xe(e),l&4&&r!==null&&r.memoizedState.isDehydrated)try{Gr(n.containerInfo)}catch(S){G(e,e.return,S)}break;case 4:Re(n,e),Xe(e);break;case 13:Re(n,e),Xe(e),t=e.child,t.flags&8192&&(a=t.memoizedState!==null,t.stateNode.isHidden=a,!a||t.alternate!==null&&t.alternate.memoizedState!==null||(Bo=K())),l&4&&Zv(e);break;case 22:if(g=r!==null&&r.memoizedState!==null,e.mode&1?(se=(s=se)||g,Re(n,e),se=s):Re(n,e),Xe(e),l&8192){if(s=e.memoizedState!==null,(e.stateNode.isHidden=s)&&!g&&e.mode&1)for(C=e,g=e.child;g!==null;){for(p=C=g;C!==null;){switch(m=C,y=m.child,m.tag){case 0:case 11:case 14:case 15:Ur(4,m,m.return);break;case 1:nr(m,m.return);var k=m.stateNode;if(typeof k.componentWillUnmount=="function"){l=m,r=m.return;try{n=l,k.props=n.memoizedProps,k.state=n.memoizedState,k.componentWillUnmount()}catch(S){G(l,r,S)}}break;case 5:nr(m,m.return);break;case 22:if(m.memoizedState!==null){qv(p);continue}}y!==null?(y.return=m,C=y):qv(p)}g=g.sibling}e:for(g=null,p=e;;){if(p.tag===5){if(g===null){g=p;try{t=p.stateNode,s?(a=t.style,typeof a.setProperty=="function"?a.setProperty("display","none","important"):a.display="none"):(i=p.stateNode,v=p.memoizedProps.style,o=v!=null&&v.hasOwnProperty("display")?v.display:null,i.style.display=Ai("display",o))}catch(S){G(e,e.return,S)}}}else if(p.tag===6){if(g===null)try{p.stateNode.nodeValue=s?"":p.memoizedProps}catch(S){G(e,e.return,S)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===e)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===e)break e;for(;p.sibling===null;){if(p.return===null||p.return===e)break e;g===p&&(g=null),p=p.return}g===p&&(g=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:Re(n,e),Xe(e),l&4&&Zv(e);break;case 21:break;default:Re(n,e),Xe(e)}}function Xe(e){var n=e.flags;if(n&2){try{e:{for(var r=e.return;r!==null;){if(mc(r)){var l=r;break e}r=r.return}throw Error(z(160))}switch(l.tag){case 5:var t=l.stateNode;l.flags&32&&(Xr(t,""),l.flags&=-33);var a=Kv(e);Ka(e,a,t);break;case 3:case 4:var o=l.stateNode.containerInfo,i=Kv(e);Ga(e,i,o);break;default:throw Error(z(161))}}catch(v){G(e,e.return,v)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function Gu(e,n,r){C=e,gc(e)}function gc(e,n,r){for(var l=(e.mode&1)!==0;C!==null;){var t=C,a=t.child;if(t.tag===22&&l){var o=t.memoizedState!==null||Pl;if(!o){var i=t.alternate,v=i!==null&&i.memoizedState!==null||se;i=Pl;var s=se;if(Pl=o,(se=v)&&!s)for(C=t;C!==null;)o=C,v=o.child,o.tag===22&&o.memoizedState!==null?ei(t):v!==null?(v.return=o,C=v):ei(t);for(;a!==null;)C=a,gc(a),a=a.sibling;C=t,Pl=i,se=s}Jv(e)}else t.subtreeFlags&8772&&a!==null?(a.return=t,C=a):Jv(e)}}function Jv(e){for(;C!==null;){var n=C;if(n.flags&8772){var r=n.alternate;try{if(n.flags&8772)switch(n.tag){case 0:case 11:case 15:se||Ct(5,n);break;case 1:var l=n.stateNode;if(n.flags&4&&!se)if(r===null)l.componentDidMount();else{var t=n.elementType===n.type?r.memoizedProps:De(n.type,r.memoizedProps);l.componentDidUpdate(t,r.memoizedState,l.__reactInternalSnapshotBeforeUpdate)}var a=n.updateQueue;a!==null&&Dv(n,a,l);break;case 3:var o=n.updateQueue;if(o!==null){if(r=null,n.child!==null)switch(n.child.tag){case 5:r=n.child.stateNode;break;case 1:r=n.child.stateNode}Dv(n,o,r)}break;case 5:var i=n.stateNode;if(r===null&&n.flags&4){r=i;var v=n.memoizedProps;switch(n.type){case"button":case"input":case"select":case"textarea":v.autoFocus&&r.focus();break;case"img":v.src&&(r.src=v.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(n.memoizedState===null){var s=n.alternate;if(s!==null){var g=s.memoizedState;if(g!==null){var p=g.dehydrated;p!==null&&Gr(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(z(163))}se||n.flags&512&&Qa(n)}catch(m){G(n,n.return,m)}}if(n===e){C=null;break}if(r=n.sibling,r!==null){r.return=n.return,C=r;break}C=n.return}}function qv(e){for(;C!==null;){var n=C;if(n===e){C=null;break}var r=n.sibling;if(r!==null){r.return=n.return,C=r;break}C=n.return}}function ei(e){for(;C!==null;){var n=C;try{switch(n.tag){case 0:case 11:case 15:var r=n.return;try{Ct(4,n)}catch(v){G(n,r,v)}break;case 1:var l=n.stateNode;if(typeof l.componentDidMount=="function"){var t=n.return;try{l.componentDidMount()}catch(v){G(n,t,v)}}var a=n.return;try{Qa(n)}catch(v){G(n,a,v)}break;case 5:var o=n.return;try{Qa(n)}catch(v){G(n,o,v)}}}catch(v){G(n,n.return,v)}if(n===e){C=null;break}var i=n.sibling;if(i!==null){i.return=n.return,C=i;break}C=n.return}}var Ku=Math.ceil,dt=an.ReactCurrentDispatcher,Uo=an.ReactCurrentOwner,Ne=an.ReactCurrentBatchConfig,V=0,le=null,Z=null,ae=0,ye=0,rr=En(0),q=0,ol=null,Un=0,Et=0,Ao=0,Ar=null,fe=null,Bo=0,hr=1/0,Ke=null,ut=!1,Za=null,wn=null,Tl=!1,pn=null,mt=0,Br=0,Ja=null,Yl=-1,$l=0;function ue(){return V&6?K():Yl!==-1?Yl:Yl=K()}function yn(e){return e.mode&1?V&2&&ae!==0?ae&-ae:Ou.transition!==null?($l===0&&($l=es()),$l):(e=U,e!==0||(e=window.event,e=e===void 0?16:vs(e.type)),e):1}function Ue(e,n,r,l){if(50<Br)throw Br=0,Ja=null,Error(z(185));sl(e,r,l),(!(V&2)||e!==le)&&(e===le&&(!(V&2)&&(Et|=r),q===4&&un(e,ae)),be(e,l),r===1&&V===0&&!(n.mode&1)&&(hr=K()+500,zt&&_n()))}function be(e,n){var r=e.callbackNode;Od(e,n);var l=Kl(e,e===le?ae:0);if(l===0)r!==null&&sv(r),e.callbackNode=null,e.callbackPriority=0;else if(n=l&-l,e.callbackPriority!==n){if(r!=null&&sv(r),n===1)e.tag===0?Nu(ni.bind(null,e)):Cs(ni.bind(null,e)),_u(function(){!(V&6)&&_n()}),r=null;else{switch(ns(l)){case 1:r=po;break;case 4:r=Ji;break;case 16:r=Gl;break;case 536870912:r=qi;break;default:r=Gl}r=Sc(r,hc.bind(null,e))}e.callbackPriority=n,e.callbackNode=r}}function hc(e,n){if(Yl=-1,$l=0,V&6)throw Error(z(327));var r=e.callbackNode;if(cr()&&e.callbackNode!==r)return null;var l=Kl(e,e===le?ae:0);if(l===0)return null;if(l&30||l&e.expiredLanes||n)n=pt(e,l);else{n=l;var t=V;V|=2;var a=bc();(le!==e||ae!==n)&&(Ke=null,hr=K()+500,Rn(e,n));do try{qu();break}catch(i){xc(e,i)}while(!0);Eo(),dt.current=a,V=t,Z!==null?n=0:(le=null,ae=0,n=q)}if(n!==0){if(n===2&&(t=ja(e),t!==0&&(l=t,n=qa(e,t))),n===1)throw r=ol,Rn(e,0),un(e,l),be(e,K()),r;if(n===6)un(e,l);else{if(t=e.current.alternate,!(l&30)&&!Zu(t)&&(n=pt(e,l),n===2&&(a=ja(e),a!==0&&(l=a,n=qa(e,a))),n===1))throw r=ol,Rn(e,0),un(e,l),be(e,K()),r;switch(e.finishedWork=t,e.finishedLanes=l,n){case 0:case 1:throw Error(z(345));case 2:Ln(e,fe,Ke);break;case 3:if(un(e,l),(l&130023424)===l&&(n=Bo+500-K(),10<n)){if(Kl(e,0)!==0)break;if(t=e.suspendedLanes,(t&l)!==l){ue(),e.pingedLanes|=e.suspendedLanes&t;break}e.timeoutHandle=Oa(Ln.bind(null,e,fe,Ke),n);break}Ln(e,fe,Ke);break;case 4:if(un(e,l),(l&4194240)===l)break;for(n=e.eventTimes,t=-1;0<l;){var o=31-Ve(l);a=1<<o,o=n[o],o>t&&(t=o),l&=~a}if(l=t,l=K()-l,l=(120>l?120:480>l?480:1080>l?1080:1920>l?1920:3e3>l?3e3:4320>l?4320:1960*Ku(l/1960))-l,10<l){e.timeoutHandle=Oa(Ln.bind(null,e,fe,Ke),l);break}Ln(e,fe,Ke);break;case 5:Ln(e,fe,Ke);break;default:throw Error(z(329))}}}return be(e,K()),e.callbackNode===r?hc.bind(null,e):null}function qa(e,n){var r=Ar;return e.current.memoizedState.isDehydrated&&(Rn(e,n).flags|=256),e=pt(e,n),e!==2&&(n=fe,fe=r,n!==null&&eo(n)),e}function eo(e){fe===null?fe=e:fe.push.apply(fe,e)}function Zu(e){for(var n=e;;){if(n.flags&16384){var r=n.updateQueue;if(r!==null&&(r=r.stores,r!==null))for(var l=0;l<r.length;l++){var t=r[l],a=t.getSnapshot;t=t.value;try{if(!Ae(a(),t))return!1}catch{return!1}}}if(r=n.child,n.subtreeFlags&16384&&r!==null)r.return=n,n=r;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function un(e,n){for(n&=~Ao,n&=~Et,e.suspendedLanes|=n,e.pingedLanes&=~n,e=e.expirationTimes;0<n;){var r=31-Ve(n),l=1<<r;e[r]=-1,n&=~l}}function ni(e){if(V&6)throw Error(z(327));cr();var n=Kl(e,0);if(!(n&1))return be(e,K()),null;var r=pt(e,n);if(e.tag!==0&&r===2){var l=ja(e);l!==0&&(n=l,r=qa(e,l))}if(r===1)throw r=ol,Rn(e,0),un(e,n),be(e,K()),r;if(r===6)throw Error(z(345));return e.finishedWork=e.current.alternate,e.finishedLanes=n,Ln(e,fe,Ke),be(e,K()),null}function Yo(e,n){var r=V;V|=1;try{return e(n)}finally{V=r,V===0&&(hr=K()+500,zt&&_n())}}function An(e){pn!==null&&pn.tag===0&&!(V&6)&&cr();var n=V;V|=1;var r=Ne.transition,l=U;try{if(Ne.transition=null,U=1,e)return e()}finally{U=l,Ne.transition=r,V=n,!(V&6)&&_n()}}function $o(){ye=rr.current,$(rr)}function Rn(e,n){e.finishedWork=null,e.finishedLanes=0;var r=e.timeoutHandle;if(r!==-1&&(e.timeoutHandle=-1,Eu(r)),Z!==null)for(r=Z.return;r!==null;){var l=r;switch(So(l),l.tag){case 1:l=l.type.childContextTypes,l!=null&&nt();break;case 3:fr(),$(he),$(ce),Oo();break;case 5:No(l);break;case 4:fr();break;case 13:$(H);break;case 19:$(H);break;case 10:_o(l.type._context);break;case 22:case 23:$o()}r=r.return}if(le=e,Z=e=kn(e.current,null),ae=ye=n,q=0,ol=null,Ao=Et=Un=0,fe=Ar=null,On!==null){for(n=0;n<On.length;n++)if(r=On[n],l=r.interleaved,l!==null){r.interleaved=null;var t=l.next,a=r.pending;if(a!==null){var o=a.next;a.next=t,l.next=o}r.pending=l}On=null}return e}function xc(e,n){do{var r=Z;try{if(Eo(),Ul.current=ct,st){for(var l=W.memoizedState;l!==null;){var t=l.queue;t!==null&&(t.pending=null),l=l.next}st=!1}if(Vn=0,re=J=W=null,Vr=!1,ll=0,Uo.current=null,r===null||r.return===null){q=1,ol=n,Z=null;break}e:{var a=e,o=r.return,i=r,v=n;if(n=ae,i.flags|=32768,v!==null&&typeof v=="object"&&typeof v.then=="function"){var s=v,g=i,p=g.tag;if(!(g.mode&1)&&(p===0||p===11||p===15)){var m=g.alternate;m?(g.updateQueue=m.updateQueue,g.memoizedState=m.memoizedState,g.lanes=m.lanes):(g.updateQueue=null,g.memoizedState=null)}var y=Bv(o);if(y!==null){y.flags&=-257,Yv(y,o,i,a,n),y.mode&1&&Av(a,s,n),n=y,v=s;var k=n.updateQueue;if(k===null){var S=new Set;S.add(v),n.updateQueue=S}else k.add(v);break e}else{if(!(n&1)){Av(a,s,n),Xo();break e}v=Error(z(426))}}else if(X&&i.mode&1){var M=Bv(o);if(M!==null){!(M.flags&65536)&&(M.flags|=256),Yv(M,o,i,a,n),jo(gr(v,i));break e}}a=v=gr(v,i),q!==4&&(q=2),Ar===null?Ar=[a]:Ar.push(a),a=o;do{switch(a.tag){case 3:a.flags|=65536,n&=-n,a.lanes|=n;var d=nc(a,v,n);Rv(a,d);break e;case 1:i=v;var c=a.type,u=a.stateNode;if(!(a.flags&128)&&(typeof c.getDerivedStateFromError=="function"||u!==null&&typeof u.componentDidCatch=="function"&&(wn===null||!wn.has(u)))){a.flags|=65536,n&=-n,a.lanes|=n;var x=rc(a,i,n);Rv(a,x);break e}}a=a.return}while(a!==null)}yc(r)}catch(h){n=h,Z===r&&r!==null&&(Z=r=r.return);continue}break}while(!0)}function bc(){var e=dt.current;return dt.current=ct,e===null?ct:e}function Xo(){(q===0||q===3||q===2)&&(q=4),le===null||!(Un&268435455)&&!(Et&268435455)||un(le,ae)}function pt(e,n){var r=V;V|=2;var l=bc();(le!==e||ae!==n)&&(Ke=null,Rn(e,n));do try{Ju();break}catch(t){xc(e,t)}while(!0);if(Eo(),V=r,dt.current=l,Z!==null)throw Error(z(261));return le=null,ae=0,q}function Ju(){for(;Z!==null;)wc(Z)}function qu(){for(;Z!==null&&!Sd();)wc(Z)}function wc(e){var n=zc(e.alternate,e,ye);e.memoizedProps=e.pendingProps,n===null?yc(e):Z=n,Uo.current=null}function yc(e){var n=e;do{var r=n.alternate;if(e=n.return,n.flags&32768){if(r=Hu(r,n),r!==null){r.flags&=32767,Z=r;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{q=6,Z=null;return}}else if(r=Xu(r,n,ye),r!==null){Z=r;return}if(n=n.sibling,n!==null){Z=n;return}Z=n=e}while(n!==null);q===0&&(q=5)}function Ln(e,n,r){var l=U,t=Ne.transition;try{Ne.transition=null,U=1,em(e,n,r,l)}finally{Ne.transition=t,U=l}return null}function em(e,n,r,l){do cr();while(pn!==null);if(V&6)throw Error(z(327));r=e.finishedWork;var t=e.finishedLanes;if(r===null)return null;if(e.finishedWork=null,e.finishedLanes=0,r===e.current)throw Error(z(177));e.callbackNode=null,e.callbackPriority=0;var a=r.lanes|r.childLanes;if(Md(e,a),e===le&&(Z=le=null,ae=0),!(r.subtreeFlags&2064)&&!(r.flags&2064)||Tl||(Tl=!0,Sc(Gl,function(){return cr(),null})),a=(r.flags&15990)!==0,r.subtreeFlags&15990||a){a=Ne.transition,Ne.transition=null;var o=U;U=1;var i=V;V|=4,Uo.current=null,Qu(e,r),fc(r,e),wu(La),Zl=!!Ta,La=Ta=null,e.current=r,Gu(r),jd(),V=i,U=o,Ne.transition=a}else e.current=r;if(Tl&&(Tl=!1,pn=e,mt=t),a=e.pendingLanes,a===0&&(wn=null),_d(r.stateNode),be(e,K()),n!==null)for(l=e.onRecoverableError,r=0;r<n.length;r++)t=n[r],l(t.value,{componentStack:t.stack,digest:t.digest});if(ut)throw ut=!1,e=Za,Za=null,e;return mt&1&&e.tag!==0&&cr(),a=e.pendingLanes,a&1?e===Ja?Br++:(Br=0,Ja=e):Br=0,_n(),null}function cr(){if(pn!==null){var e=ns(mt),n=Ne.transition,r=U;try{if(Ne.transition=null,U=16>e?16:e,pn===null)var l=!1;else{if(e=pn,pn=null,mt=0,V&6)throw Error(z(331));var t=V;for(V|=4,C=e.current;C!==null;){var a=C,o=a.child;if(C.flags&16){var i=a.deletions;if(i!==null){for(var v=0;v<i.length;v++){var s=i[v];for(C=s;C!==null;){var g=C;switch(g.tag){case 0:case 11:case 15:Ur(8,g,a)}var p=g.child;if(p!==null)p.return=g,C=p;else for(;C!==null;){g=C;var m=g.sibling,y=g.return;if(uc(g),g===s){C=null;break}if(m!==null){m.return=y,C=m;break}C=y}}}var k=a.alternate;if(k!==null){var S=k.child;if(S!==null){k.child=null;do{var M=S.sibling;S.sibling=null,S=M}while(S!==null)}}C=a}}if(a.subtreeFlags&2064&&o!==null)o.return=a,C=o;else e:for(;C!==null;){if(a=C,a.flags&2048)switch(a.tag){case 0:case 11:case 15:Ur(9,a,a.return)}var d=a.sibling;if(d!==null){d.return=a.return,C=d;break e}C=a.return}}var c=e.current;for(C=c;C!==null;){o=C;var u=o.child;if(o.subtreeFlags&2064&&u!==null)u.return=o,C=u;else e:for(o=c;C!==null;){if(i=C,i.flags&2048)try{switch(i.tag){case 0:case 11:case 15:Ct(9,i)}}catch(h){G(i,i.return,h)}if(i===o){C=null;break e}var x=i.sibling;if(x!==null){x.return=i.return,C=x;break e}C=i.return}}if(V=t,_n(),Qe&&typeof Qe.onPostCommitFiberRoot=="function")try{Qe.onPostCommitFiberRoot(xt,e)}catch{}l=!0}return l}finally{U=r,Ne.transition=n}}return!1}function ri(e,n,r){n=gr(r,n),n=nc(e,n,1),e=bn(e,n,1),n=ue(),e!==null&&(sl(e,1,n),be(e,n))}function G(e,n,r){if(e.tag===3)ri(e,e,r);else for(;n!==null;){if(n.tag===3){ri(n,e,r);break}else if(n.tag===1){var l=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(wn===null||!wn.has(l))){e=gr(r,e),e=rc(n,e,1),n=bn(n,e,1),e=ue(),n!==null&&(sl(n,1,e),be(n,e));break}}n=n.return}}function nm(e,n,r){var l=e.pingCache;l!==null&&l.delete(n),n=ue(),e.pingedLanes|=e.suspendedLanes&r,le===e&&(ae&r)===r&&(q===4||q===3&&(ae&130023424)===ae&&500>K()-Bo?Rn(e,0):Ao|=r),be(e,n)}function kc(e,n){n===0&&(e.mode&1?(n=wl,wl<<=1,!(wl&130023424)&&(wl=4194304)):n=1);var r=ue();e=ln(e,n),e!==null&&(sl(e,n,r),be(e,r))}function rm(e){var n=e.memoizedState,r=0;n!==null&&(r=n.retryLane),kc(e,r)}function lm(e,n){var r=0;switch(e.tag){case 13:var l=e.stateNode,t=e.memoizedState;t!==null&&(r=t.retryLane);break;case 19:l=e.stateNode;break;default:throw Error(z(314))}l!==null&&l.delete(n),kc(e,r)}var zc;zc=function(e,n,r){if(e!==null)if(e.memoizedProps!==n.pendingProps||he.current)ge=!0;else{if(!(e.lanes&r)&&!(n.flags&128))return ge=!1,$u(e,n,r);ge=!!(e.flags&131072)}else ge=!1,X&&n.flags&1048576&&Es(n,tt,n.index);switch(n.lanes=0,n.tag){case 2:var l=n.type;Bl(e,n),e=n.pendingProps;var t=ur(n,ce.current);sr(n,r),t=Ro(null,n,l,e,t,r);var a=Do();return n.flags|=1,typeof t=="object"&&t!==null&&typeof t.render=="function"&&t.$$typeof===void 0?(n.tag=1,n.memoizedState=null,n.updateQueue=null,xe(l)?(a=!0,rt(n)):a=!1,n.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,To(n),t.updater=jt,n.stateNode=t,t._reactInternals=n,Ua(n,l,e,r),n=Ya(null,n,l,!0,a,r)):(n.tag=0,X&&a&&zo(n),de(null,n,t,r),n=n.child),n;case 16:l=n.elementType;e:{switch(Bl(e,n),e=n.pendingProps,t=l._init,l=t(l._payload),n.type=l,t=n.tag=am(l),e=De(l,e),t){case 0:n=Ba(null,n,l,e,r);break e;case 1:n=Hv(null,n,l,e,r);break e;case 11:n=$v(null,n,l,e,r);break e;case 14:n=Xv(null,n,l,De(l.type,e),r);break e}throw Error(z(306,l,""))}return n;case 0:return l=n.type,t=n.pendingProps,t=n.elementType===l?t:De(l,t),Ba(e,n,l,t,r);case 1:return l=n.type,t=n.pendingProps,t=n.elementType===l?t:De(l,t),Hv(e,n,l,t,r);case 3:e:{if(oc(n),e===null)throw Error(z(387));l=n.pendingProps,a=n.memoizedState,t=a.element,Os(e,n),vt(n,l,null,r);var o=n.memoizedState;if(l=o.element,a.isDehydrated)if(a={element:l,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},n.updateQueue.baseState=a,n.memoizedState=a,n.flags&256){t=gr(Error(z(423)),n),n=Wv(e,n,l,r,t);break e}else if(l!==t){t=gr(Error(z(424)),n),n=Wv(e,n,l,r,t);break e}else for(ze=xn(n.stateNode.containerInfo.firstChild),Se=n,X=!0,Fe=null,r=Ls(n,null,l,r),n.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling;else{if(mr(),l===t){n=tn(e,n,r);break e}de(e,n,l,r)}n=n.child}return n;case 5:return Ms(n),e===null&&Ia(n),l=n.type,t=n.pendingProps,a=e!==null?e.memoizedProps:null,o=t.children,Na(l,t)?o=null:a!==null&&Na(l,a)&&(n.flags|=32),ac(e,n),de(e,n,o,r),n.child;case 6:return e===null&&Ia(n),null;case 13:return vc(e,n,r);case 4:return Lo(n,n.stateNode.containerInfo),l=n.pendingProps,e===null?n.child=pr(n,null,l,r):de(e,n,l,r),n.child;case 11:return l=n.type,t=n.pendingProps,t=n.elementType===l?t:De(l,t),$v(e,n,l,t,r);case 7:return de(e,n,n.pendingProps,r),n.child;case 8:return de(e,n,n.pendingProps.children,r),n.child;case 12:return de(e,n,n.pendingProps.children,r),n.child;case 10:e:{if(l=n.type._context,t=n.pendingProps,a=n.memoizedProps,o=t.value,B(at,l._currentValue),l._currentValue=o,a!==null)if(Ae(a.value,o)){if(a.children===t.children&&!he.current){n=tn(e,n,r);break e}}else for(a=n.child,a!==null&&(a.return=n);a!==null;){var i=a.dependencies;if(i!==null){o=a.child;for(var v=i.firstContext;v!==null;){if(v.context===l){if(a.tag===1){v=en(-1,r&-r),v.tag=2;var s=a.updateQueue;if(s!==null){s=s.shared;var g=s.pending;g===null?v.next=v:(v.next=g.next,g.next=v),s.pending=v}}a.lanes|=r,v=a.alternate,v!==null&&(v.lanes|=r),Fa(a.return,r,n),i.lanes|=r;break}v=v.next}}else if(a.tag===10)o=a.type===n.type?null:a.child;else if(a.tag===18){if(o=a.return,o===null)throw Error(z(341));o.lanes|=r,i=o.alternate,i!==null&&(i.lanes|=r),Fa(o,r,n),o=a.sibling}else o=a.child;if(o!==null)o.return=a;else for(o=a;o!==null;){if(o===n){o=null;break}if(a=o.sibling,a!==null){a.return=o.return,o=a;break}o=o.return}a=o}de(e,n,t.children,r),n=n.child}return n;case 9:return t=n.type,l=n.pendingProps.children,sr(n,r),t=Oe(t),l=l(t),n.flags|=1,de(e,n,l,r),n.child;case 14:return l=n.type,t=De(l,n.pendingProps),t=De(l.type,t),Xv(e,n,l,t,r);case 15:return lc(e,n,n.type,n.pendingProps,r);case 17:return l=n.type,t=n.pendingProps,t=n.elementType===l?t:De(l,t),Bl(e,n),n.tag=1,xe(l)?(e=!0,rt(n)):e=!1,sr(n,r),ec(n,l,t),Ua(n,l,t,r),Ya(null,n,l,!0,e,r);case 19:return ic(e,n,r);case 22:return tc(e,n,r)}throw Error(z(156,n.tag))};function Sc(e,n){return Zi(e,n)}function tm(e,n,r,l){this.tag=e,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Le(e,n,r,l){return new tm(e,n,r,l)}function Ho(e){return e=e.prototype,!(!e||!e.isReactComponent)}function am(e){if(typeof e=="function")return Ho(e)?1:0;if(e!=null){if(e=e.$$typeof,e===co)return 11;if(e===uo)return 14}return 2}function kn(e,n){var r=e.alternate;return r===null?(r=Le(e.tag,n,e.key,e.mode),r.elementType=e.elementType,r.type=e.type,r.stateNode=e.stateNode,r.alternate=e,e.alternate=r):(r.pendingProps=n,r.type=e.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=e.flags&14680064,r.childLanes=e.childLanes,r.lanes=e.lanes,r.child=e.child,r.memoizedProps=e.memoizedProps,r.memoizedState=e.memoizedState,r.updateQueue=e.updateQueue,n=e.dependencies,r.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},r.sibling=e.sibling,r.index=e.index,r.ref=e.ref,r}function Xl(e,n,r,l,t,a){var o=2;if(l=e,typeof e=="function")Ho(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case Hn:return Dn(r.children,t,a,n);case so:o=8,t|=8;break;case ca:return e=Le(12,r,n,t|2),e.elementType=ca,e.lanes=a,e;case da:return e=Le(13,r,n,t),e.elementType=da,e.lanes=a,e;case ua:return e=Le(19,r,n,t),e.elementType=ua,e.lanes=a,e;case Mi:return _t(r,t,a,n);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Ni:o=10;break e;case Oi:o=9;break e;case co:o=11;break e;case uo:o=14;break e;case sn:o=16,l=null;break e}throw Error(z(130,e==null?e:typeof e,""))}return n=Le(o,r,n,t),n.elementType=e,n.type=l,n.lanes=a,n}function Dn(e,n,r,l){return e=Le(7,e,l,n),e.lanes=r,e}function _t(e,n,r,l){return e=Le(22,e,l,n),e.elementType=Mi,e.lanes=r,e.stateNode={isHidden:!1},e}function ta(e,n,r){return e=Le(6,e,null,n),e.lanes=r,e}function aa(e,n,r){return n=Le(4,e.children!==null?e.children:[],e.key,n),n.lanes=r,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}function om(e,n,r,l,t){this.tag=n,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Vt(0),this.expirationTimes=Vt(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Vt(0),this.identifierPrefix=l,this.onRecoverableError=t,this.mutableSourceEagerHydrationData=null}function Wo(e,n,r,l,t,a,o,i,v){return e=new om(e,n,r,i,v),n===1?(n=1,a===!0&&(n|=8)):n=0,a=Le(3,null,null,n),e.current=a,a.stateNode=e,a.memoizedState={element:l,isDehydrated:r,cache:null,transitions:null,pendingSuspenseBoundaries:null},To(a),e}function vm(e,n,r){var l=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Xn,key:l==null?null:""+l,children:e,containerInfo:n,implementation:r}}function jc(e){if(!e)return jn;e=e._reactInternals;e:{if(Yn(e)!==e||e.tag!==1)throw Error(z(170));var n=e;do{switch(n.tag){case 3:n=n.stateNode.context;break e;case 1:if(xe(n.type)){n=n.stateNode.__reactInternalMemoizedMergedChildContext;break e}}n=n.return}while(n!==null);throw Error(z(171))}if(e.tag===1){var r=e.type;if(xe(r))return js(e,r,n)}return n}function Cc(e,n,r,l,t,a,o,i,v){return e=Wo(r,l,!0,e,t,a,o,i,v),e.context=jc(null),r=e.current,l=ue(),t=yn(r),a=en(l,t),a.callback=n??null,bn(r,a,t),e.current.lanes=t,sl(e,t,l),be(e,l),e}function Pt(e,n,r,l){var t=n.current,a=ue(),o=yn(t);return r=jc(r),n.context===null?n.context=r:n.pendingContext=r,n=en(a,o),n.payload={element:e},l=l===void 0?null:l,l!==null&&(n.callback=l),e=bn(t,n,o),e!==null&&(Ue(e,t,o,a),Vl(e,t,o)),o}function ft(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function li(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var r=e.retryLane;e.retryLane=r!==0&&r<n?r:n}}function Qo(e,n){li(e,n),(e=e.alternate)&&li(e,n)}function im(){return null}var Ec=typeof reportError=="function"?reportError:function(e){console.error(e)};function Go(e){this._internalRoot=e}Tt.prototype.render=Go.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(z(409));Pt(e,n,null,null)};Tt.prototype.unmount=Go.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;An(function(){Pt(null,e,null,null)}),n[rn]=null}};function Tt(e){this._internalRoot=e}Tt.prototype.unstable_scheduleHydration=function(e){if(e){var n=ts();e={blockedOn:null,target:e,priority:n};for(var r=0;r<dn.length&&n!==0&&n<dn[r].priority;r++);dn.splice(r,0,e),r===0&&os(e)}};function Ko(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Lt(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function ti(){}function sm(e,n,r,l,t){if(t){if(typeof l=="function"){var a=l;l=function(){var s=ft(o);a.call(s)}}var o=Cc(n,l,e,0,null,!1,!1,"",ti);return e._reactRootContainer=o,e[rn]=o.current,Jr(e.nodeType===8?e.parentNode:e),An(),o}for(;t=e.lastChild;)e.removeChild(t);if(typeof l=="function"){var i=l;l=function(){var s=ft(v);i.call(s)}}var v=Wo(e,0,!1,null,null,!1,!1,"",ti);return e._reactRootContainer=v,e[rn]=v.current,Jr(e.nodeType===8?e.parentNode:e),An(function(){Pt(n,v,r,l)}),v}function Nt(e,n,r,l,t){var a=r._reactRootContainer;if(a){var o=a;if(typeof t=="function"){var i=t;t=function(){var v=ft(o);i.call(v)}}Pt(n,o,e,t)}else o=sm(r,n,e,t,l);return ft(o)}rs=function(e){switch(e.tag){case 3:var n=e.stateNode;if(n.current.memoizedState.isDehydrated){var r=Lr(n.pendingLanes);r!==0&&(fo(n,r|1),be(n,K()),!(V&6)&&(hr=K()+500,_n()))}break;case 13:An(function(){var l=ln(e,1);if(l!==null){var t=ue();Ue(l,e,1,t)}}),Qo(e,1)}};go=function(e){if(e.tag===13){var n=ln(e,134217728);if(n!==null){var r=ue();Ue(n,e,134217728,r)}Qo(e,134217728)}};ls=function(e){if(e.tag===13){var n=yn(e),r=ln(e,n);if(r!==null){var l=ue();Ue(r,e,n,l)}Qo(e,n)}};ts=function(){return U};as=function(e,n){var r=U;try{return U=e,n()}finally{U=r}};ka=function(e,n,r){switch(n){case"input":if(fa(e,r),n=r.name,r.type==="radio"&&n!=null){for(r=e;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll("input[name="+JSON.stringify(""+n)+'][type="radio"]'),n=0;n<r.length;n++){var l=r[n];if(l!==e&&l.form===e.form){var t=kt(l);if(!t)throw Error(z(90));Di(l),fa(l,t)}}}break;case"textarea":Fi(e,r);break;case"select":n=r.value,n!=null&&ar(e,!!r.multiple,n,!1)}};Xi=Yo;Hi=An;var cm={usingClientEntryPoint:!1,Events:[dl,Kn,kt,Yi,$i,Yo]},_r={findFiberByHostInstance:Nn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},dm={bundleType:_r.bundleType,version:_r.version,rendererPackageName:_r.rendererPackageName,rendererConfig:_r.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:an.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Gi(e),e===null?null:e.stateNode},findFiberByHostInstance:_r.findFiberByHostInstance||im,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ll=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ll.isDisabled&&Ll.supportsFiber)try{xt=Ll.inject(dm),Qe=Ll}catch{}}Ce.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=cm;Ce.createPortal=function(e,n){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ko(n))throw Error(z(200));return vm(e,n,null,r)};Ce.createRoot=function(e,n){if(!Ko(e))throw Error(z(299));var r=!1,l="",t=Ec;return n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(l=n.identifierPrefix),n.onRecoverableError!==void 0&&(t=n.onRecoverableError)),n=Wo(e,1,!1,null,null,r,!1,l,t),e[rn]=n.current,Jr(e.nodeType===8?e.parentNode:e),new Go(n)};Ce.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(z(188)):(e=Object.keys(e).join(","),Error(z(268,e)));return e=Gi(n),e=e===null?null:e.stateNode,e};Ce.flushSync=function(e){return An(e)};Ce.hydrate=function(e,n,r){if(!Lt(n))throw Error(z(200));return Nt(null,e,n,!0,r)};Ce.hydrateRoot=function(e,n,r){if(!Ko(e))throw Error(z(405));var l=r!=null&&r.hydratedSources||null,t=!1,a="",o=Ec;if(r!=null&&(r.unstable_strictMode===!0&&(t=!0),r.identifierPrefix!==void 0&&(a=r.identifierPrefix),r.onRecoverableError!==void 0&&(o=r.onRecoverableError)),n=Cc(n,null,e,1,r??null,t,!1,a,o),e[rn]=n.current,Jr(e),l)for(e=0;e<l.length;e++)r=l[e],t=r._getVersion,t=t(r._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[r,t]:n.mutableSourceEagerHydrationData.push(r,t);return new Tt(n)};Ce.render=function(e,n,r){if(!Lt(n))throw Error(z(200));return Nt(null,e,n,!1,r)};Ce.unmountComponentAtNode=function(e){if(!Lt(e))throw Error(z(40));return e._reactRootContainer?(An(function(){Nt(null,null,e,!1,function(){e._reactRootContainer=null,e[rn]=null})}),!0):!1};Ce.unstable_batchedUpdates=Yo;Ce.unstable_renderSubtreeIntoContainer=function(e,n,r,l){if(!Lt(r))throw Error(z(200));if(e==null||e._reactInternals===void 0)throw Error(z(38));return Nt(e,n,r,!1,l)};Ce.version="18.3.1-next-f1338f8080-20240426";function _c(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(_c)}catch(e){console.error(e)}}_c(),_i.exports=Ce;var um=_i.exports,Pc,ai=um;Pc=ai.createRoot,ai.hydrateRoot;var Tc={exports:{}};(function(e){var n=function(){var r=String.fromCharCode,l="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-$",a={};function o(v,s){if(!a[v]){a[v]={};for(var g=0;g<v.length;g++)a[v][v.charAt(g)]=g}return a[v][s]}var i={compressToBase64:function(v){if(v==null)return"";var s=i._compress(v,6,function(g){return l.charAt(g)});switch(s.length%4){default:case 0:return s;case 1:return s+"===";case 2:return s+"==";case 3:return s+"="}},decompressFromBase64:function(v){return v==null?"":v==""?null:i._decompress(v.length,32,function(s){return o(l,v.charAt(s))})},compressToUTF16:function(v){return v==null?"":i._compress(v,15,function(s){return r(s+32)})+" "},decompressFromUTF16:function(v){return v==null?"":v==""?null:i._decompress(v.length,16384,function(s){return v.charCodeAt(s)-32})},compressToUint8Array:function(v){for(var s=i.compress(v),g=new Uint8Array(s.length*2),p=0,m=s.length;p<m;p++){var y=s.charCodeAt(p);g[p*2]=y>>>8,g[p*2+1]=y%256}return g},decompressFromUint8Array:function(v){if(v==null)return i.decompress(v);for(var s=new Array(v.length/2),g=0,p=s.length;g<p;g++)s[g]=v[g*2]*256+v[g*2+1];var m=[];return s.forEach(function(y){m.push(r(y))}),i.decompress(m.join(""))},compressToEncodedURIComponent:function(v){return v==null?"":i._compress(v,6,function(s){return t.charAt(s)})},decompressFromEncodedURIComponent:function(v){return v==null?"":v==""?null:(v=v.replace(/ /g,"+"),i._decompress(v.length,32,function(s){return o(t,v.charAt(s))}))},compress:function(v){return i._compress(v,16,function(s){return r(s)})},_compress:function(v,s,g){if(v==null)return"";var p,m,y={},k={},S="",M="",d="",c=2,u=3,x=2,h=[],f=0,b=0,w;for(w=0;w<v.length;w+=1)if(S=v.charAt(w),Object.prototype.hasOwnProperty.call(y,S)||(y[S]=u++,k[S]=!0),M=d+S,Object.prototype.hasOwnProperty.call(y,M))d=M;else{if(Object.prototype.hasOwnProperty.call(k,d)){if(d.charCodeAt(0)<256){for(p=0;p<x;p++)f=f<<1,b==s-1?(b=0,h.push(g(f)),f=0):b++;for(m=d.charCodeAt(0),p=0;p<8;p++)f=f<<1|m&1,b==s-1?(b=0,h.push(g(f)),f=0):b++,m=m>>1}else{for(m=1,p=0;p<x;p++)f=f<<1|m,b==s-1?(b=0,h.push(g(f)),f=0):b++,m=0;for(m=d.charCodeAt(0),p=0;p<16;p++)f=f<<1|m&1,b==s-1?(b=0,h.push(g(f)),f=0):b++,m=m>>1}c--,c==0&&(c=Math.pow(2,x),x++),delete k[d]}else for(m=y[d],p=0;p<x;p++)f=f<<1|m&1,b==s-1?(b=0,h.push(g(f)),f=0):b++,m=m>>1;c--,c==0&&(c=Math.pow(2,x),x++),y[M]=u++,d=String(S)}if(d!==""){if(Object.prototype.hasOwnProperty.call(k,d)){if(d.charCodeAt(0)<256){for(p=0;p<x;p++)f=f<<1,b==s-1?(b=0,h.push(g(f)),f=0):b++;for(m=d.charCodeAt(0),p=0;p<8;p++)f=f<<1|m&1,b==s-1?(b=0,h.push(g(f)),f=0):b++,m=m>>1}else{for(m=1,p=0;p<x;p++)f=f<<1|m,b==s-1?(b=0,h.push(g(f)),f=0):b++,m=0;for(m=d.charCodeAt(0),p=0;p<16;p++)f=f<<1|m&1,b==s-1?(b=0,h.push(g(f)),f=0):b++,m=m>>1}c--,c==0&&(c=Math.pow(2,x),x++),delete k[d]}else for(m=y[d],p=0;p<x;p++)f=f<<1|m&1,b==s-1?(b=0,h.push(g(f)),f=0):b++,m=m>>1;c--,c==0&&(c=Math.pow(2,x),x++)}for(m=2,p=0;p<x;p++)f=f<<1|m&1,b==s-1?(b=0,h.push(g(f)),f=0):b++,m=m>>1;for(;;)if(f=f<<1,b==s-1){h.push(g(f));break}else b++;return h.join("")},decompress:function(v){return v==null?"":v==""?null:i._decompress(v.length,32768,function(s){return v.charCodeAt(s)})},_decompress:function(v,s,g){var p=[],m=4,y=4,k=3,S="",M=[],d,c,u,x,h,f,b,w={val:g(0),position:s,index:1};for(d=0;d<3;d+=1)p[d]=d;for(u=0,h=Math.pow(2,2),f=1;f!=h;)x=w.val&w.position,w.position>>=1,w.position==0&&(w.position=s,w.val=g(w.index++)),u|=(x>0?1:0)*f,f<<=1;switch(u){case 0:for(u=0,h=Math.pow(2,8),f=1;f!=h;)x=w.val&w.position,w.position>>=1,w.position==0&&(w.position=s,w.val=g(w.index++)),u|=(x>0?1:0)*f,f<<=1;b=r(u);break;case 1:for(u=0,h=Math.pow(2,16),f=1;f!=h;)x=w.val&w.position,w.position>>=1,w.position==0&&(w.position=s,w.val=g(w.index++)),u|=(x>0?1:0)*f,f<<=1;b=r(u);break;case 2:return""}for(p[3]=b,c=b,M.push(b);;){if(w.index>v)return"";for(u=0,h=Math.pow(2,k),f=1;f!=h;)x=w.val&w.position,w.position>>=1,w.position==0&&(w.position=s,w.val=g(w.index++)),u|=(x>0?1:0)*f,f<<=1;switch(b=u){case 0:for(u=0,h=Math.pow(2,8),f=1;f!=h;)x=w.val&w.position,w.position>>=1,w.position==0&&(w.position=s,w.val=g(w.index++)),u|=(x>0?1:0)*f,f<<=1;p[y++]=r(u),b=y-1,m--;break;case 1:for(u=0,h=Math.pow(2,16),f=1;f!=h;)x=w.val&w.position,w.position>>=1,w.position==0&&(w.position=s,w.val=g(w.index++)),u|=(x>0?1:0)*f,f<<=1;p[y++]=r(u),b=y-1,m--;break;case 2:return M.join("")}if(m==0&&(m=Math.pow(2,k),k++),p[b])S=p[b];else if(b===y)S=c+c.charAt(0);else return null;M.push(S),p[y++]=c+S.charAt(0),m--,c=S,m==0&&(m=Math.pow(2,k),k++)}}};return i}();e!=null?e.exports=n:typeof angular<"u"&&angular!=null&&angular.module("LZString",[]).factory("LZString",function(){return n})})(Tc);var mm=Tc.exports;const Lc=gi(mm);function oi(e,n){(n==null||n>e.length)&&(n=e.length);for(var r=0,l=Array(n);r<n;r++)l[r]=e[r];return l}function pm(e){if(Array.isArray(e))return e}function fm(e,n,r){return(n=km(n))in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function gm(e,n){var r=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(r!=null){var l,t,a,o,i=[],v=!0,s=!1;try{if(a=(r=r.call(e)).next,n!==0)for(;!(v=(l=a.call(r)).done)&&(i.push(l.value),i.length!==n);v=!0);}catch(g){s=!0,t=g}finally{try{if(!v&&r.return!=null&&(o=r.return(),Object(o)!==o))return}finally{if(s)throw t}}return i}}function hm(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function vi(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);n&&(l=l.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,l)}return r}function ii(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?vi(Object(r),!0).forEach(function(l){fm(e,l,r[l])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):vi(Object(r)).forEach(function(l){Object.defineProperty(e,l,Object.getOwnPropertyDescriptor(r,l))})}return e}function xm(e,n){if(e==null)return{};var r,l,t=bm(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(l=0;l<a.length;l++)r=a[l],n.indexOf(r)===-1&&{}.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}function bm(e,n){if(e==null)return{};var r={};for(var l in e)if({}.hasOwnProperty.call(e,l)){if(n.indexOf(l)!==-1)continue;r[l]=e[l]}return r}function wm(e,n){return pm(e)||gm(e,n)||zm(e,n)||hm()}function ym(e,n){if(typeof e!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var l=r.call(e,n);if(typeof l!="object")return l;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(e)}function km(e){var n=ym(e,"string");return typeof n=="symbol"?n:n+""}function zm(e,n){if(e){if(typeof e=="string")return oi(e,n);var r={}.toString.call(e).slice(8,-1);return r==="Object"&&e.constructor&&(r=e.constructor.name),r==="Map"||r==="Set"?Array.from(e):r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?oi(e,n):void 0}}function Sm(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function si(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);n&&(l=l.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,l)}return r}function ci(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?si(Object(r),!0).forEach(function(l){Sm(e,l,r[l])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):si(Object(r)).forEach(function(l){Object.defineProperty(e,l,Object.getOwnPropertyDescriptor(r,l))})}return e}function jm(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return function(l){return n.reduceRight(function(t,a){return a(t)},l)}}function Or(e){return function n(){for(var r=this,l=arguments.length,t=new Array(l),a=0;a<l;a++)t[a]=arguments[a];return t.length>=e.length?e.apply(this,t):function(){for(var o=arguments.length,i=new Array(o),v=0;v<o;v++)i[v]=arguments[v];return n.apply(r,[].concat(t,i))}}}function gt(e){return{}.toString.call(e).includes("Object")}function Cm(e){return!Object.keys(e).length}function vl(e){return typeof e=="function"}function Em(e,n){return Object.prototype.hasOwnProperty.call(e,n)}function _m(e,n){return gt(n)||zn("changeType"),Object.keys(n).some(function(r){return!Em(e,r)})&&zn("changeField"),n}function Pm(e){vl(e)||zn("selectorType")}function Tm(e){vl(e)||gt(e)||zn("handlerType"),gt(e)&&Object.values(e).some(function(n){return!vl(n)})&&zn("handlersType")}function Lm(e){e||zn("initialIsRequired"),gt(e)||zn("initialType"),Cm(e)&&zn("initialContent")}function Nm(e,n){throw new Error(e[n]||e.default)}var Om={initialIsRequired:"initial state is required",initialType:"initial state should be an object",initialContent:"initial state shouldn't be an empty object",handlerType:"handler should be an object or a function",handlersType:"all handlers should be a functions",selectorType:"selector should be a function",changeType:"provided value of changes should be an object",changeField:'it seams you want to change a field in the state which is not specified in the "initial" state',default:"an unknown error accured in `state-local` package"},zn=Or(Nm)(Om),Nl={changes:_m,selector:Pm,handler:Tm,initial:Lm};function Mm(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};Nl.initial(e),Nl.handler(n);var r={current:e},l=Or(Im)(r,n),t=Or(Dm)(r),a=Or(Nl.changes)(e),o=Or(Rm)(r);function i(){var s=arguments.length>0&&arguments[0]!==void 0?arguments[0]:function(g){return g};return Nl.selector(s),s(r.current)}function v(s){jm(l,t,a,o)(s)}return[i,v]}function Rm(e,n){return vl(n)?n(e.current):n}function Dm(e,n){return e.current=ci(ci({},e.current),n),n}function Im(e,n,r){return vl(n)?n(e.current):Object.keys(r).forEach(function(l){var t;return(t=n[l])===null||t===void 0?void 0:t.call(n,e.current[l])}),r}var Fm={create:Mm},Vm={paths:{vs:"https://cdn.jsdelivr.net/npm/monaco-editor@0.55.1/min/vs"}};function Um(e){return function n(){for(var r=this,l=arguments.length,t=new Array(l),a=0;a<l;a++)t[a]=arguments[a];return t.length>=e.length?e.apply(this,t):function(){for(var o=arguments.length,i=new Array(o),v=0;v<o;v++)i[v]=arguments[v];return n.apply(r,[].concat(t,i))}}}function Am(e){return{}.toString.call(e).includes("Object")}function Bm(e){return e||di("configIsRequired"),Am(e)||di("configType"),e.urls?(Ym(),{paths:{vs:e.urls.monacoBase}}):e}function Ym(){console.warn(Nc.deprecation)}function $m(e,n){throw new Error(e[n]||e.default)}var Nc={configIsRequired:"the configuration object is required",configType:"the configuration object should be an object",default:"an unknown error accured in `@monaco-editor/loader` package",deprecation:`Deprecation warning!
    You are using deprecated way of configuration.

    Instead of using
      monaco.config({ urls: { monacoBase: '...' } })
    use
      monaco.config({ paths: { vs: '...' } })

    For more please check the link https://github.com/suren-atoyan/monaco-loader#config
  `},di=Um($m)(Nc),Xm={config:Bm},Hm=function(){for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return function(t){return r.reduceRight(function(a,o){return o(a)},t)}};function Oc(e,n){return Object.keys(n).forEach(function(r){n[r]instanceof Object&&e[r]&&Object.assign(n[r],Oc(e[r],n[r]))}),ii(ii({},e),n)}var Wm={type:"cancelation",msg:"operation is manually canceled"};function oa(e){var n=!1,r=new Promise(function(l,t){e.then(function(a){return n?t(Wm):l(a)}),e.catch(t)});return r.cancel=function(){return n=!0},r}var Qm=["monaco"],Gm=Fm.create({config:Vm,isInitialized:!1,resolve:null,reject:null,monaco:null}),Mc=wm(Gm,2),ml=Mc[0],Ot=Mc[1];function Km(e){var n=Xm.config(e),r=n.monaco,l=xm(n,Qm);Ot(function(t){return{config:Oc(t.config,l),monaco:r}})}function Zm(){var e=ml(function(n){var r=n.monaco,l=n.isInitialized,t=n.resolve;return{monaco:r,isInitialized:l,resolve:t}});if(!e.isInitialized){if(Ot({isInitialized:!0}),e.monaco)return e.resolve(e.monaco),oa(va);if(window.monaco&&window.monaco.editor)return Rc(window.monaco),e.resolve(window.monaco),oa(va);Hm(Jm,ep)(np)}return oa(va)}function Jm(e){return document.body.appendChild(e)}function qm(e){var n=document.createElement("script");return e&&(n.src=e),n}function ep(e){var n=ml(function(l){var t=l.config,a=l.reject;return{config:t,reject:a}}),r=qm("".concat(n.config.paths.vs,"/loader.js"));return r.onload=function(){return e()},r.onerror=n.reject,r}function np(){var e=ml(function(r){var l=r.config,t=r.resolve,a=r.reject;return{config:l,resolve:t,reject:a}}),n=window.require;n.config(e.config),n(["vs/editor/editor.main"],function(r){var l=r.m||r;Rc(l),e.resolve(l)},function(r){e.reject(r)})}function Rc(e){ml().monaco||Ot({monaco:e})}function rp(){return ml(function(e){var n=e.monaco;return n})}var va=new Promise(function(e,n){return Ot({resolve:e,reject:n})}),Dc={config:Km,init:Zm,__getMonacoInstance:rp},lp={wrapper:{display:"flex",position:"relative",textAlign:"initial"},fullWidth:{width:"100%"},hide:{display:"none"}},ia=lp,tp={container:{display:"flex",height:"100%",width:"100%",justifyContent:"center",alignItems:"center"}},ap=tp;function op({children:e}){return tr.createElement("div",{style:ap.container},e)}var vp=op,ip=vp;function sp({width:e,height:n,isEditorReady:r,loading:l,_ref:t,className:a,wrapperProps:o}){return tr.createElement("section",{style:{...ia.wrapper,width:e,height:n},...o},!r&&tr.createElement(ip,null,l),tr.createElement("div",{ref:t,style:{...ia.fullWidth,...!r&&ia.hide},className:a}))}var cp=sp,Ic=_.memo(cp);function dp(e){_.useEffect(e,[])}var Fc=dp;function up(e,n,r=!0){let l=_.useRef(!0);_.useEffect(l.current||!r?()=>{l.current=!1}:e,n)}var ke=up;function Yr(){}function lr(e,n,r,l){return mp(e,l)||pp(e,n,r,l)}function mp(e,n){return e.editor.getModel(Vc(e,n))}function pp(e,n,r,l){return e.editor.createModel(n,r,l?Vc(e,l):void 0)}function Vc(e,n){return e.Uri.parse(n)}function fp({original:e,modified:n,language:r,originalLanguage:l,modifiedLanguage:t,originalModelPath:a,modifiedModelPath:o,keepCurrentOriginalModel:i=!1,keepCurrentModifiedModel:v=!1,theme:s="light",loading:g="Loading...",options:p={},height:m="100%",width:y="100%",className:k,wrapperProps:S={},beforeMount:M=Yr,onMount:d=Yr}){let[c,u]=_.useState(!1),[x,h]=_.useState(!0),f=_.useRef(null),b=_.useRef(null),w=_.useRef(null),I=_.useRef(d),E=_.useRef(M),ee=_.useRef(!1);Fc(()=>{let L=Dc.init();return L.then(A=>(b.current=A)&&h(!1)).catch(A=>(A==null?void 0:A.type)!=="cancelation"&&console.error("Monaco initialization: error:",A)),()=>f.current?on():L.cancel()}),ke(()=>{if(f.current&&b.current){let L=f.current.getOriginalEditor(),A=lr(b.current,e||"",l||r||"text",a||"");A!==L.getModel()&&L.setModel(A)}},[a],c),ke(()=>{if(f.current&&b.current){let L=f.current.getModifiedEditor(),A=lr(b.current,n||"",t||r||"text",o||"");A!==L.getModel()&&L.setModel(A)}},[o],c),ke(()=>{let L=f.current.getModifiedEditor();L.getOption(b.current.editor.EditorOption.readOnly)?L.setValue(n||""):n!==L.getValue()&&(L.executeEdits("",[{range:L.getModel().getFullModelRange(),text:n||"",forceMoveMarkers:!0}]),L.pushUndoStop())},[n],c),ke(()=>{var L,A;(A=(L=f.current)==null?void 0:L.getModel())==null||A.original.setValue(e||"")},[e],c),ke(()=>{let{original:L,modified:A}=f.current.getModel();b.current.editor.setModelLanguage(L,l||r||"text"),b.current.editor.setModelLanguage(A,t||r||"text")},[r,l,t],c),ke(()=>{var L;(L=b.current)==null||L.editor.setTheme(s)},[s],c),ke(()=>{var L;(L=f.current)==null||L.updateOptions(p)},[p],c);let Be=_.useCallback(()=>{var _e;if(!b.current)return;E.current(b.current);let L=lr(b.current,e||"",l||r||"text",a||""),A=lr(b.current,n||"",t||r||"text",o||"");(_e=f.current)==null||_e.setModel({original:L,modified:A})},[r,n,t,e,l,a,o]),Ye=_.useCallback(()=>{var L;!ee.current&&w.current&&(f.current=b.current.editor.createDiffEditor(w.current,{automaticLayout:!0,...p}),Be(),(L=b.current)==null||L.editor.setTheme(s),u(!0),ee.current=!0)},[p,s,Be]);_.useEffect(()=>{c&&I.current(f.current,b.current)},[c]),_.useEffect(()=>{!x&&!c&&Ye()},[x,c,Ye]);function on(){var A,_e,j,T;let L=(A=f.current)==null?void 0:A.getModel();i||((_e=L==null?void 0:L.original)==null||_e.dispose()),v||((j=L==null?void 0:L.modified)==null||j.dispose()),(T=f.current)==null||T.dispose()}return tr.createElement(Ic,{width:y,height:m,isEditorReady:c,loading:g,_ref:w,className:k,wrapperProps:S})}var gp=fp;_.memo(gp);function hp(e){let n=_.useRef();return _.useEffect(()=>{n.current=e},[e]),n.current}var xp=hp,Ol=new Map;function bp({defaultValue:e,defaultLanguage:n,defaultPath:r,value:l,language:t,path:a,theme:o="light",line:i,loading:v="Loading...",options:s={},overrideServices:g={},saveViewState:p=!0,keepCurrentModel:m=!1,width:y="100%",height:k="100%",className:S,wrapperProps:M={},beforeMount:d=Yr,onMount:c=Yr,onChange:u,onValidate:x=Yr}){let[h,f]=_.useState(!1),[b,w]=_.useState(!0),I=_.useRef(null),E=_.useRef(null),ee=_.useRef(null),Be=_.useRef(c),Ye=_.useRef(d),on=_.useRef(),L=_.useRef(l),A=xp(a),_e=_.useRef(!1),j=_.useRef(!1);Fc(()=>{let P=Dc.init();return P.then(N=>(I.current=N)&&w(!1)).catch(N=>(N==null?void 0:N.type)!=="cancelation"&&console.error("Monaco initialization: error:",N)),()=>E.current?R():P.cancel()}),ke(()=>{var N,ne,we,$e;let P=lr(I.current,e||l||"",n||t||"",a||r||"");P!==((N=E.current)==null?void 0:N.getModel())&&(p&&Ol.set(A,(ne=E.current)==null?void 0:ne.saveViewState()),(we=E.current)==null||we.setModel(P),p&&(($e=E.current)==null||$e.restoreViewState(Ol.get(a))))},[a],h),ke(()=>{var P;(P=E.current)==null||P.updateOptions(s)},[s],h),ke(()=>{!E.current||l===void 0||(E.current.getOption(I.current.editor.EditorOption.readOnly)?E.current.setValue(l):l!==E.current.getValue()&&(j.current=!0,E.current.executeEdits("",[{range:E.current.getModel().getFullModelRange(),text:l,forceMoveMarkers:!0}]),E.current.pushUndoStop(),j.current=!1))},[l],h),ke(()=>{var N,ne;let P=(N=E.current)==null?void 0:N.getModel();P&&t&&((ne=I.current)==null||ne.editor.setModelLanguage(P,t))},[t],h),ke(()=>{var P;i!==void 0&&((P=E.current)==null||P.revealLine(i))},[i],h),ke(()=>{var P;(P=I.current)==null||P.editor.setTheme(o)},[o],h);let T=_.useCallback(()=>{var P;if(!(!ee.current||!I.current)&&!_e.current){Ye.current(I.current);let N=a||r,ne=lr(I.current,l||e||"",n||t||"",N||"");E.current=(P=I.current)==null?void 0:P.editor.create(ee.current,{model:ne,automaticLayout:!0,...s},g),p&&E.current.restoreViewState(Ol.get(N)),I.current.editor.setTheme(o),i!==void 0&&E.current.revealLine(i),f(!0),_e.current=!0}},[e,n,r,l,t,a,s,g,p,o,i]);_.useEffect(()=>{h&&Be.current(E.current,I.current)},[h]),_.useEffect(()=>{!b&&!h&&T()},[b,h,T]),L.current=l,_.useEffect(()=>{var P,N;h&&u&&((P=on.current)==null||P.dispose(),on.current=(N=E.current)==null?void 0:N.onDidChangeModelContent(ne=>{j.current||u(E.current.getValue(),ne)}))},[h,u]),_.useEffect(()=>{if(h){let P=I.current.editor.onDidChangeMarkers(N=>{var we;let ne=(we=E.current.getModel())==null?void 0:we.uri;if(ne&&N.find($e=>$e.path===ne.path)){let $e=I.current.editor.getModelMarkers({resource:ne});x==null||x($e)}});return()=>{P==null||P.dispose()}}return()=>{}},[h,x]);function R(){var P,N;(P=on.current)==null||P.dispose(),m?p&&Ol.set(a,E.current.saveViewState()):(N=E.current.getModel())==null||N.dispose(),E.current.dispose()}return tr.createElement(Ic,{width:y,height:k,isEditorReady:h,loading:v,_ref:ee,className:S,wrapperProps:M})}var wp=bp,yp=_.memo(wp),kp=yp;function ui({value:e,onChange:n,language:r}){return D.jsx(kp,{height:"100%",language:r,theme:"vs-dark",value:e,onChange:n,options:{minimap:{enabled:!1},fontSize:13,lineNumbers:"on",scrollBeyondLastLine:!1,automaticLayout:!0,tabSize:2,wordWrap:"on",padding:{top:12,bottom:12},renderLineHighlight:"line",smoothScrolling:!0,cursorSmoothCaretAnimation:"on",folding:!0,formatOnPaste:!0,suggestOnTriggerCharacters:!0}})}const zp=`
  ::-webkit-scrollbar             { width: 8px; height: 8px; }
  ::-webkit-scrollbar-track       { background: #060b17; }
  ::-webkit-scrollbar-thumb       { background: #1e2d45; border-radius: 4px; }
  ::-webkit-scrollbar-thumb:hover { background: #2d4060; }
  ::-webkit-scrollbar-corner      { background: #060b17; }
  * { scrollbar-width: thin; scrollbar-color: #1e2d45 #060b17; }
`;function Sp({html:e,customCss:n,veloraCss:r}){const l=`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>${r}</style>
  <style>${zp}</style>
  <style>${n}</style>
</head>
<body>
${e}
</body>
</html>`;return D.jsx("iframe",{srcDoc:l,title:"VeloraCSS Preview",style:{width:"100%",height:"100%",border:"none",background:"#ffffff",display:"block"},sandbox:"allow-scripts allow-same-origin"})}const jp=`/* ============================================
   VeloraCSS v0.2.0
   A premium utility-first CSS framework
   ============================================ */

/* VeloraCSS — Design Tokens */

:root {

  /* ─── Velora Violet (Primary) ───────────── */
  --vel-primary-50:  #f3eeff;
  --vel-primary-100: #e5d8ff;
  --vel-primary-200: #ccb3ff;
  --vel-primary-300: #aa84ff;
  --vel-primary-400: #8f5eff;
  --vel-primary-500: #7c5cfc;
  --vel-primary-600: #6941e8;
  --vel-primary-700: #5730cc;
  --vel-primary-800: #4422aa;
  --vel-primary-900: #2e1580;
  --vel-primary-950: #180a50;

  --vel-color-primary:       var(--vel-primary-500);
  --vel-color-primary-hover: var(--vel-primary-600);
  --vel-color-primary-light: var(--vel-primary-100);
  --vel-color-primary-fg:    #ffffff;

  /* ─── Velora Slate (Secondary) ──────────── */
  --vel-secondary-50:  #f0f4fa;
  --vel-secondary-100: #d9e2f0;
  --vel-secondary-200: #b3c5e0;
  --vel-secondary-300: #8fa8cc;
  --vel-secondary-400: #6b8ab5;
  --vel-secondary-500: #4f6e9c;
  --vel-secondary-600: #3d5680;
  --vel-secondary-700: #2e4066;
  --vel-secondary-800: #1f2c4a;
  --vel-secondary-900: #121b30;
  --vel-secondary-950: #080e1c;

  --vel-color-secondary:       var(--vel-secondary-500);
  --vel-color-secondary-hover: var(--vel-secondary-600);
  --vel-color-secondary-light: var(--vel-secondary-100);
  --vel-color-secondary-fg:    #ffffff;

  /* ─── Velora Emerald (Success) ──────────── */
  --vel-success-50:  #eafff5;
  --vel-success-100: #c8ffe4;
  --vel-success-200: #92fdc8;
  --vel-success-300: #4ef8a4;
  --vel-success-400: #0ecb81;
  --vel-success-500: #06b36e;
  --vel-success-600: #058f58;
  --vel-success-700: #076e47;
  --vel-success-800: #085739;
  --vel-success-900: #074830;
  --vel-success-950: #02281a;

  --vel-color-success:       var(--vel-success-400);
  --vel-color-success-hover: var(--vel-success-500);
  --vel-color-success-light: var(--vel-success-100);
  --vel-color-success-fg:    #ffffff;

  /* ─── Velora Rose (Danger) ──────────────── */
  --vel-danger-50:  #fff0f4;
  --vel-danger-100: #ffe0e9;
  --vel-danger-200: #ffbdd0;
  --vel-danger-300: #ff8aad;
  --vel-danger-400: #ff5085;
  --vel-danger-500: #f0416c;
  --vel-danger-600: #d42e58;
  --vel-danger-700: #b01e46;
  --vel-danger-800: #8c1236;
  --vel-danger-900: #5e0b24;
  --vel-danger-950: #380515;

  --vel-color-danger:       var(--vel-danger-500);
  --vel-color-danger-hover: var(--vel-danger-600);
  --vel-color-danger-light: var(--vel-danger-100);
  --vel-color-danger-fg:    #ffffff;

  /* ─── Velora Amber (Warning) ────────────── */
  --vel-warning-50:  #fffbeb;
  --vel-warning-100: #fff3c4;
  --vel-warning-200: #ffe082;
  --vel-warning-300: #ffc93e;
  --vel-warning-400: #ffb300;
  --vel-warning-500: #ff9d00;
  --vel-warning-600: #e08000;
  --vel-warning-700: #b86200;
  --vel-warning-800: #8a4800;
  --vel-warning-900: #5c3000;
  --vel-warning-950: #2e1600;

  --vel-color-warning:       var(--vel-warning-500);
  --vel-color-warning-hover: var(--vel-warning-600);
  --vel-color-warning-light: var(--vel-warning-100);
  --vel-color-warning-fg:    #1c1200;

  /* ─── Velora Sky (Info) ─────────────────── */
  --vel-info-50:  #e0f8ff;
  --vel-info-100: #b8eeff;
  --vel-info-200: #76deff;
  --vel-info-300: #2ec9ff;
  --vel-info-400: #2ebde5;
  --vel-info-500: #1aa5cc;
  --vel-info-600: #0d88aa;
  --vel-info-700: #0a6c88;
  --vel-info-800: #085266;
  --vel-info-900: #043644;
  --vel-info-950: #021c24;

  --vel-color-info:       var(--vel-info-400);
  --vel-color-info-hover: var(--vel-info-500);
  --vel-color-info-light: var(--vel-info-100);
  --vel-color-info-fg:    #ffffff;

  /* ─── Surface / UI ───────────────────────── */
  --vel-surface-bg:      #060b17;
  --vel-surface-0:       #060b17;
  --vel-surface-1:       #0d1422;
  --vel-surface-2:       #111827;
  --vel-surface-3:       #1a2236;
  --vel-surface-4:       #1e293b;
  --vel-border-base:     #1e2d45;
  --vel-border-subtle:   rgba(255, 255, 255, 0.06);
  --vel-color-text:      #e2e8f0;
  --vel-color-muted:     #64748b;

  /* ─── Neutral Palette ───────────────────── */
  --vel-neutral-50:  #f8fafc;
  --vel-neutral-100: #f1f5f9;
  --vel-neutral-200: #e2e8f0;
  --vel-neutral-300: #cbd5e1;
  --vel-neutral-400: #94a3b8;
  --vel-neutral-500: #64748b;
  --vel-neutral-600: #475569;
  --vel-neutral-700: #334155;
  --vel-neutral-800: #1e293b;
  --vel-neutral-900: #0f172a;
  --vel-neutral-950: #020617;

  /* ─── Gradient Tokens ───────────────────── */
  --vel-gradient-primary:  linear-gradient(135deg, #8f5eff 0%, #6941e8 100%);
  --vel-gradient-secondary:linear-gradient(135deg, #6b8ab5 0%, #3d5680 100%);
  --vel-gradient-success:  linear-gradient(135deg, #2ef8a4 0%, #06b36e 100%);
  --vel-gradient-danger:   linear-gradient(135deg, #ff5085 0%, #d42e58 100%);
  --vel-gradient-warning:  linear-gradient(135deg, #ffe082 0%, #ff9d00 100%);
  --vel-gradient-info:     linear-gradient(135deg, #2ec9ff 0%, #1aa5cc 100%);
  --vel-gradient-dark:     linear-gradient(135deg, #1a2236 0%, #0d1422 100%);
  --vel-gradient-aurora:   linear-gradient(135deg, #7c5cfc 0%, #2ebde5 50%, #0ecb81 100%);
  --vel-gradient-sunset:   linear-gradient(135deg, #f0416c 0%, #ff9d00 100%);
  --vel-gradient-ocean:    linear-gradient(135deg, #2ebde5 0%, #0ecb81 100%);
  --vel-gradient-cosmos:   linear-gradient(135deg, #7c5cfc 0%, #f0416c 100%);
  --vel-gradient-midnight: linear-gradient(180deg, #060b17 0%, #1a2236 100%);
  --vel-gradient-surface:  linear-gradient(135deg, #111827 0%, #0d1422 100%);

  /* ─── Glow Tokens ────────────────────────── */
  --vel-glow-primary: 0 0 20px rgba(124, 92, 252, 0.5), 0 0 60px rgba(124, 92, 252, 0.15);
  --vel-glow-success: 0 0 20px rgba(14, 203, 129, 0.5), 0 0 60px rgba(14, 203, 129, 0.15);
  --vel-glow-danger:  0 0 20px rgba(240, 65, 108, 0.5), 0 0 60px rgba(240, 65, 108, 0.15);
  --vel-glow-warning: 0 0 20px rgba(255, 157, 0, 0.5),  0 0 60px rgba(255, 157, 0, 0.15);
  --vel-glow-info:    0 0 20px rgba(46, 189, 229, 0.5),  0 0 60px rgba(46, 189, 229, 0.15);
  --vel-glow-white:   0 0 20px rgba(255, 255, 255, 0.2), 0 0 60px rgba(255, 255, 255, 0.05);
  --vel-glow-sm-primary: 0 0 12px rgba(124, 92, 252, 0.35);
  --vel-glow-sm-success: 0 0 12px rgba(14, 203, 129, 0.35);
  --vel-glow-sm-danger:  0 0 12px rgba(240, 65, 108, 0.35);
  --vel-glow-sm-warning: 0 0 12px rgba(255, 157, 0, 0.35);
  --vel-glow-sm-info:    0 0 12px rgba(46, 189, 229, 0.35);

  /* ─── Spacing Scale ──────────────────────── */
  --vel-space-px:  1px;
  --vel-space-0:   0rem;
  --vel-space-1:   0.25rem;
  --vel-space-2:   0.5rem;
  --vel-space-3:   0.75rem;
  --vel-space-4:   1rem;
  --vel-space-5:   1.25rem;
  --vel-space-6:   1.5rem;
  --vel-space-7:   1.75rem;
  --vel-space-8:   2rem;
  --vel-space-9:   2.25rem;
  --vel-space-10:  2.5rem;
  --vel-space-11:  2.75rem;
  --vel-space-12:  3rem;
  --vel-space-14:  3.5rem;
  --vel-space-16:  4rem;
  --vel-space-20:  5rem;
  --vel-space-24:  6rem;
  --vel-space-28:  7rem;
  --vel-space-32:  8rem;
  --vel-space-36:  9rem;
  --vel-space-40:  10rem;
  --vel-space-44:  11rem;
  --vel-space-48:  12rem;
  --vel-space-56:  14rem;
  --vel-space-64:  16rem;
  --vel-space-72:  18rem;
  --vel-space-80:  20rem;
  --vel-space-96:  24rem;

  /* ─── Font Sizes ─────────────────────────── */
  --vel-size-xs:   0.75rem;
  --vel-size-sm:   0.875rem;
  --vel-size-base: 1rem;
  --vel-size-lg:   1.125rem;
  --vel-size-xl:   1.25rem;
  --vel-size-2xl:  1.5rem;
  --vel-size-3xl:  1.875rem;
  --vel-size-4xl:  2.25rem;
  --vel-size-5xl:  3rem;
  --vel-size-6xl:  3.75rem;
  --vel-size-7xl:  4.5rem;
  --vel-size-8xl:  6rem;
  --vel-size-9xl:  8rem;

  /* Keep legacy aliases for compatibility */
  --vel-text-xs:   0.75rem;
  --vel-text-sm:   0.875rem;
  --vel-text-base: 1rem;
  --vel-text-lg:   1.125rem;
  --vel-text-xl:   1.25rem;
  --vel-text-2xl:  1.5rem;
  --vel-text-3xl:  1.875rem;
  --vel-text-4xl:  2.25rem;
  --vel-text-5xl:  3rem;
  --vel-text-6xl:  3.75rem;
  --vel-text-7xl:  4.5rem;
  --vel-text-8xl:  6rem;
  --vel-text-9xl:  8rem;

  /* ─── Line Heights ───────────────────────── */
  --vel-leading-none:    1;
  --vel-leading-tight:   1.25;
  --vel-leading-snug:    1.375;
  --vel-leading-normal:  1.5;
  --vel-leading-relaxed: 1.625;
  --vel-leading-loose:   2;

  /* ─── Font Families ──────────────────────── */
  --vel-font-sans:  ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  --vel-font-serif: ui-serif, Georgia, Cambria, "Times New Roman", Times, serif;
  --vel-font-mono:  ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;

  /* ─── Font Weights ───────────────────────── */
  --vel-font-thin:       100;
  --vel-font-extralight: 200;
  --vel-font-light:      300;
  --vel-font-normal:     400;
  --vel-font-medium:     500;
  --vel-font-semibold:   600;
  --vel-font-bold:       700;
  --vel-font-extrabold:  800;
  --vel-font-black:      900;

  /* ─── Letter Spacing ─────────────────────── */
  --vel-tracking-tighter: -0.05em;
  --vel-tracking-tight:   -0.025em;
  --vel-tracking-normal:  0em;
  --vel-tracking-wide:    0.025em;
  --vel-tracking-wider:   0.05em;
  --vel-tracking-widest:  0.1em;

  /* ─── Border Radius ──────────────────────── */
  --vel-radius-none: 0px;
  --vel-radius-sm:   0.125rem;
  --vel-radius:      0.25rem;
  --vel-radius-md:   0.375rem;
  --vel-radius-lg:   0.5rem;
  --vel-radius-xl:   0.75rem;
  --vel-radius-2xl:  1rem;
  --vel-radius-3xl:  1.5rem;
  --vel-radius-full: 9999px;

  /* ─── Shadows ────────────────────────────── */
  --vel-shadow-sm:    0 1px 2px 0 rgb(0 0 0 / 0.2);
  --vel-shadow:       0 1px 3px 0 rgb(0 0 0 / 0.3), 0 1px 2px -1px rgb(0 0 0 / 0.3);
  --vel-shadow-md:    0 4px 6px -1px rgb(0 0 0 / 0.3), 0 2px 4px -2px rgb(0 0 0 / 0.2);
  --vel-shadow-lg:    0 10px 20px -3px rgb(0 0 0 / 0.4), 0 4px 6px -4px rgb(0 0 0 / 0.3);
  --vel-shadow-xl:    0 20px 40px -5px rgb(0 0 0 / 0.5), 0 8px 12px -6px rgb(0 0 0 / 0.3);
  --vel-shadow-2xl:   0 30px 60px -12px rgb(0 0 0 / 0.6);
  --vel-shadow-inner: inset 0 2px 4px 0 rgb(0 0 0 / 0.2);
  --vel-shadow-none:  0 0 #0000;

  /* ─── Ring (focus/outline) ───────────────── */
  --vel-ring-primary: 0 0 0 3px rgba(124, 92, 252, 0.4);
  --vel-ring-success: 0 0 0 3px rgba(14, 203, 129, 0.4);
  --vel-ring-danger:  0 0 0 3px rgba(240, 65, 108, 0.4);
  --vel-ring-warning: 0 0 0 3px rgba(255, 157, 0, 0.4);
  --vel-ring-info:    0 0 0 3px rgba(46, 189, 229, 0.4);

  /* ─── Transform composition ─────────────────────────────────── */
  /* Applied by .vel-transform; each utility overrides only its own variable */
  --vel-transform-translate-x: translateX(0);
  --vel-transform-translate-y: translateY(0);
  --vel-transform-rotate:      rotate(0deg);
  --vel-transform-scale-x:     scaleX(1);
  --vel-transform-scale-y:     scaleY(1);
  --vel-transform-skew-x:      skewX(0deg);
  --vel-transform-skew-y:      skewY(0deg);

  /* ─── Transitions ────────────────────────── */
  --vel-duration-75:   75ms;
  --vel-duration-100:  100ms;
  --vel-duration-150:  150ms;
  --vel-duration-200:  200ms;
  --vel-duration-300:  300ms;
  --vel-duration-500:  500ms;
  --vel-duration-700:  700ms;
  --vel-duration-1000: 1000ms;
  --vel-ease-linear:   linear;
  --vel-ease-in:       cubic-bezier(0.4, 0, 1, 1);
  --vel-ease-out:      cubic-bezier(0, 0, 0.2, 1);
  --vel-ease-in-out:   cubic-bezier(0.4, 0, 0.2, 1);
  --vel-ease-spring:   cubic-bezier(0.34, 1.56, 0.64, 1);
  --vel-ease-bounce:   cubic-bezier(0.68, -0.55, 0.265, 1.55);

  /* ─── Z-Index ─────────────────────────────── */
  --vel-z-0:    0;
  --vel-z-10:   10;
  --vel-z-20:   20;
  --vel-z-30:   30;
  --vel-z-40:   40;
  --vel-z-50:   50;
  --vel-z-auto: auto;
}

/* VeloraCSS — Base Reset */

*, *::before, *::after {
  box-sizing: border-box;
  border-width: 0;
  border-style: solid;
  border-color: var(--vel-border-base);
}

html {
  line-height: var(--vel-leading-normal);
  -webkit-text-size-adjust: 100%;
  -moz-tab-size: 4;
    -o-tab-size: 4;
       tab-size: 4;
  font-family: var(--vel-font-sans);
  font-feature-settings: normal;
  font-variation-settings: normal;
}

body {
  margin: 0;
  line-height: inherit;
  background-color: var(--vel-surface-bg);
  color: var(--vel-color-text);
}

hr {
  height: 0;
  color: inherit;
  border-top-width: 1px;
}

h1, h2, h3, h4, h5, h6 {
  font-size: inherit;
  font-weight: inherit;
}

a {
  color: inherit;
  text-decoration: inherit;
}

b, strong {
  font-weight: bolder;
}

code, kbd, samp, pre {
  font-family: var(--vel-font-mono);
  font-size: 1em;
}

small {
  font-size: 80%;
}

sub, sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}

sub { bottom: -0.25em; }

sup { top: -0.5em; }

table {
  text-indent: 0;
  border-color: inherit;
  border-collapse: collapse;
}

button, input, optgroup, select, textarea {
  font-family: inherit;
  font-size: 100%;
  font-weight: inherit;
  line-height: inherit;
  color: inherit;
  margin: 0;
  padding: 0;
}

button, select {
  text-transform: none;
}

button, [type='button'], [type='reset'], [type='submit'] {
  -webkit-appearance: button;
  background-color: transparent;
  background-image: none;
}

:-moz-focusring {
  outline: auto;
}

:-moz-ui-invalid {
  box-shadow: none;
}

progress {
  vertical-align: baseline;
}

::-webkit-inner-spin-button, ::-webkit-outer-spin-button {
  height: auto;
}

[type='search'] {
  -webkit-appearance: textfield;
  outline-offset: -2px;
}

::-webkit-search-decoration {
  -webkit-appearance: none;
}

::-webkit-file-upload-button {
  -webkit-appearance: button;
  font: inherit;
}

summary {
  display: list-item;
}

blockquote, dl, dd, h1, h2, h3, h4, h5, h6, hr, figure, p, pre {
  margin: 0;
}

fieldset {
  margin: 0;
  padding: 0;
}

legend {
  padding: 0;
}

ol, ul, menu {
  list-style: none;
  margin: 0;
  padding: 0;
}

textarea {
  resize: vertical;
}

input::-moz-placeholder, textarea::-moz-placeholder {
  opacity: 1;
  color: var(--vel-neutral-400);
}

input::placeholder, textarea::placeholder {
  opacity: 1;
  color: var(--vel-neutral-400);
}

button, [role='button'] {
  cursor: pointer;
}

:disabled {
  cursor: default;
}

img, svg, video, canvas, audio, iframe, embed, object {
  display: block;
  vertical-align: middle;
}

img, video {
  max-width: 100%;
  height: auto;
}

/* ─── Themed scrollbars ───────────────────── */

::-webkit-scrollbar              { width: 8px; height: 8px; }

::-webkit-scrollbar-track        { background: var(--vel-surface-0); }

::-webkit-scrollbar-thumb        { background: var(--vel-border-base); border-radius: 4px; }

::-webkit-scrollbar-thumb:hover  { background: #2d4060; }

::-webkit-scrollbar-corner       { background: var(--vel-surface-0); }

* { scrollbar-width: thin; scrollbar-color: var(--vel-border-base) var(--vel-surface-0); }

/* Utilities */

/* VeloraCSS — Layout Utilities */

/* Display */

.vel-block        { display: block; }

.vel-inline-block { display: inline-block; }

.vel-inline       { display: inline; }

.vel-flex         { display: flex; }

.vel-inline-flex  { display: inline-flex; }

.vel-grid         { display: grid; }

.vel-inline-grid  { display: inline-grid; }

.vel-hidden       { display: none; }

.vel-table        { display: table; }

.vel-table-row    { display: table-row; }

.vel-table-cell   { display: table-cell; }

.vel-contents     { display: contents; }

/* Position */

.vel-static   { position: static; }

.vel-relative { position: relative; }

.vel-absolute { position: absolute; }

.vel-fixed    { position: fixed; }

.vel-sticky   { position: sticky; }

/* ─── Inset (all sides) ────────────────────── */

.vel-inset-0    { inset: 0; }

.vel-inset-px   { inset: 1px; }

.vel-inset-0\\.5 { inset: 0.125rem; }

.vel-inset-1    { inset: 0.25rem; }

.vel-inset-1\\.5 { inset: 0.375rem; }

.vel-inset-2    { inset: 0.5rem; }

.vel-inset-2\\.5 { inset: 0.625rem; }

.vel-inset-3    { inset: 0.75rem; }

.vel-inset-3\\.5 { inset: 0.875rem; }

.vel-inset-4    { inset: 1rem; }

.vel-inset-5    { inset: 1.25rem; }

.vel-inset-6    { inset: 1.5rem; }

.vel-inset-7    { inset: 1.75rem; }

.vel-inset-8    { inset: 2rem; }

.vel-inset-9    { inset: 2.25rem; }

.vel-inset-10   { inset: 2.5rem; }

.vel-inset-11   { inset: 2.75rem; }

.vel-inset-12   { inset: 3rem; }

.vel-inset-14   { inset: 3.5rem; }

.vel-inset-16   { inset: 4rem; }

.vel-inset-20   { inset: 5rem; }

.vel-inset-24   { inset: 6rem; }

.vel-inset-28   { inset: 7rem; }

.vel-inset-32   { inset: 8rem; }

.vel-inset-auto { inset: auto; }

.vel-inset-1\\/2 { inset: 50%; }

.vel-inset-1\\/3 { inset: 33.333333%; }

.vel-inset-2\\/3 { inset: 66.666667%; }

.vel-inset-1\\/4 { inset: 25%; }

.vel-inset-3\\/4 { inset: 75%; }

.vel-inset-full { inset: 100%; }

/* ─── Inset X (left + right) ───────────────── */

.vel-inset-x-0    { left: 0; right: 0; }

.vel-inset-x-px   { left: 1px; right: 1px; }

.vel-inset-x-1    { left: 0.25rem; right: 0.25rem; }

.vel-inset-x-2    { left: 0.5rem; right: 0.5rem; }

.vel-inset-x-3    { left: 0.75rem; right: 0.75rem; }

.vel-inset-x-4    { left: 1rem; right: 1rem; }

.vel-inset-x-6    { left: 1.5rem; right: 1.5rem; }

.vel-inset-x-8    { left: 2rem; right: 2rem; }

.vel-inset-x-auto { left: auto; right: auto; }

.vel-inset-x-full { left: 100%; right: 100%; }

/* ─── Inset Y (top + bottom) ───────────────── */

.vel-inset-y-0    { top: 0; bottom: 0; }

.vel-inset-y-px   { top: 1px; bottom: 1px; }

.vel-inset-y-1    { top: 0.25rem; bottom: 0.25rem; }

.vel-inset-y-2    { top: 0.5rem; bottom: 0.5rem; }

.vel-inset-y-3    { top: 0.75rem; bottom: 0.75rem; }

.vel-inset-y-4    { top: 1rem; bottom: 1rem; }

.vel-inset-y-6    { top: 1.5rem; bottom: 1.5rem; }

.vel-inset-y-8    { top: 2rem; bottom: 2rem; }

.vel-inset-y-auto { top: auto; bottom: auto; }

.vel-inset-y-full { top: 100%; bottom: 100%; }

/* ─── Top ──────────────────────────────────── */

.vel-top-0    { top: 0; }

.vel-top-px   { top: 1px; }

.vel-top-0\\.5 { top: 0.125rem; }

.vel-top-1    { top: 0.25rem; }

.vel-top-1\\.5 { top: 0.375rem; }

.vel-top-2    { top: 0.5rem; }

.vel-top-2\\.5 { top: 0.625rem; }

.vel-top-3    { top: 0.75rem; }

.vel-top-3\\.5 { top: 0.875rem; }

.vel-top-4    { top: 1rem; }

.vel-top-5    { top: 1.25rem; }

.vel-top-6    { top: 1.5rem; }

.vel-top-7    { top: 1.75rem; }

.vel-top-8    { top: 2rem; }

.vel-top-10   { top: 2.5rem; }

.vel-top-12   { top: 3rem; }

.vel-top-14   { top: 3.5rem; }

.vel-top-16   { top: 4rem; }

.vel-top-20   { top: 5rem; }

.vel-top-24   { top: 6rem; }

.vel-top-auto { top: auto; }

.vel-top-1\\/2 { top: 50%; }

.vel-top-1\\/3 { top: 33.333333%; }

.vel-top-2\\/3 { top: 66.666667%; }

.vel-top-1\\/4 { top: 25%; }

.vel-top-3\\/4 { top: 75%; }

.vel-top-full { top: 100%; }

/* ─── Right ─────────────────────────────────── */

.vel-right-0    { right: 0; }

.vel-right-px   { right: 1px; }

.vel-right-0\\.5 { right: 0.125rem; }

.vel-right-1    { right: 0.25rem; }

.vel-right-1\\.5 { right: 0.375rem; }

.vel-right-2    { right: 0.5rem; }

.vel-right-2\\.5 { right: 0.625rem; }

.vel-right-3    { right: 0.75rem; }

.vel-right-3\\.5 { right: 0.875rem; }

.vel-right-4    { right: 1rem; }

.vel-right-5    { right: 1.25rem; }

.vel-right-6    { right: 1.5rem; }

.vel-right-8    { right: 2rem; }

.vel-right-10   { right: 2.5rem; }

.vel-right-12   { right: 3rem; }

.vel-right-16   { right: 4rem; }

.vel-right-auto { right: auto; }

.vel-right-1\\/2 { right: 50%; }

.vel-right-full { right: 100%; }

/* ─── Bottom ────────────────────────────────── */

.vel-bottom-0    { bottom: 0; }

.vel-bottom-px   { bottom: 1px; }

.vel-bottom-0\\.5 { bottom: 0.125rem; }

.vel-bottom-1    { bottom: 0.25rem; }

.vel-bottom-1\\.5 { bottom: 0.375rem; }

.vel-bottom-2    { bottom: 0.5rem; }

.vel-bottom-2\\.5 { bottom: 0.625rem; }

.vel-bottom-3    { bottom: 0.75rem; }

.vel-bottom-3\\.5 { bottom: 0.875rem; }

.vel-bottom-4    { bottom: 1rem; }

.vel-bottom-5    { bottom: 1.25rem; }

.vel-bottom-6    { bottom: 1.5rem; }

.vel-bottom-8    { bottom: 2rem; }

.vel-bottom-10   { bottom: 2.5rem; }

.vel-bottom-12   { bottom: 3rem; }

.vel-bottom-16   { bottom: 4rem; }

.vel-bottom-auto { bottom: auto; }

.vel-bottom-1\\/2 { bottom: 50%; }

.vel-bottom-full { bottom: 100%; }

/* ─── Left ──────────────────────────────────── */

.vel-left-0    { left: 0; }

.vel-left-px   { left: 1px; }

.vel-left-0\\.5 { left: 0.125rem; }

.vel-left-1    { left: 0.25rem; }

.vel-left-1\\.5 { left: 0.375rem; }

.vel-left-2    { left: 0.5rem; }

.vel-left-2\\.5 { left: 0.625rem; }

.vel-left-3    { left: 0.75rem; }

.vel-left-3\\.5 { left: 0.875rem; }

.vel-left-4    { left: 1rem; }

.vel-left-5    { left: 1.25rem; }

.vel-left-6    { left: 1.5rem; }

.vel-left-8    { left: 2rem; }

.vel-left-10   { left: 2.5rem; }

.vel-left-12   { left: 3rem; }

.vel-left-16   { left: 4rem; }

.vel-left-auto { left: auto; }

.vel-left-1\\/2 { left: 50%; }

.vel-left-full { left: 100%; }

/* ─── Negative inset/top/right/bottom/left ─── */

.-vel-inset-px { inset: -1px; }

.-vel-inset-1  { inset: -0.25rem; }

.-vel-inset-2  { inset: -0.5rem; }

.-vel-inset-3  { inset: -0.75rem; }

.-vel-inset-4  { inset: -1rem; }

.-vel-top-px { top: -1px; }

.-vel-top-1  { top: -0.25rem; }

.-vel-top-2  { top: -0.5rem; }

.-vel-top-3  { top: -0.75rem; }

.-vel-top-4  { top: -1rem; }

.-vel-right-px { right: -1px; }

.-vel-right-1  { right: -0.25rem; }

.-vel-right-2  { right: -0.5rem; }

.-vel-right-4  { right: -1rem; }

.-vel-bottom-px { bottom: -1px; }

.-vel-bottom-1  { bottom: -0.25rem; }

.-vel-bottom-2  { bottom: -0.5rem; }

.-vel-bottom-4  { bottom: -1rem; }

.-vel-left-px { left: -1px; }

.-vel-left-1  { left: -0.25rem; }

.-vel-left-2  { left: -0.5rem; }

.-vel-left-4  { left: -1rem; }

/* Overflow */

.vel-overflow-auto    { overflow: auto; }

.vel-overflow-hidden  { overflow: hidden; }

.vel-overflow-visible { overflow: visible; }

.vel-overflow-scroll  { overflow: scroll; }

.vel-overflow-x-auto  { overflow-x: auto; }

.vel-overflow-x-hidden{ overflow-x: hidden; }

.vel-overflow-y-auto  { overflow-y: auto; }

.vel-overflow-y-hidden{ overflow-y: hidden; }

.vel-overflow-y-scroll{ overflow-y: scroll; }

/* Overscroll */

.vel-overscroll-auto    { overscroll-behavior: auto; }

.vel-overscroll-contain { overscroll-behavior: contain; }

.vel-overscroll-none    { overscroll-behavior: none; }

/* Visibility */

.vel-visible   { visibility: visible; }

.vel-invisible { visibility: hidden; }

.vel-collapse  { visibility: collapse; }

/* Z-index */

.vel-z-0    { z-index: var(--vel-z-0); }

.vel-z-10   { z-index: var(--vel-z-10); }

.vel-z-20   { z-index: var(--vel-z-20); }

.vel-z-30   { z-index: var(--vel-z-30); }

.vel-z-40   { z-index: var(--vel-z-40); }

.vel-z-50   { z-index: var(--vel-z-50); }

.vel-z-auto { z-index: var(--vel-z-auto); }

/* Float */

.vel-float-left  { float: left; }

.vel-float-right { float: right; }

.vel-float-none  { float: none; }

.vel-clearfix::after { content: ""; display: table; clear: both; }

/* Clear */

.vel-clear-left  { clear: left; }

.vel-clear-right { clear: right; }

.vel-clear-both  { clear: both; }

.vel-clear-none  { clear: none; }

/* Isolation */

.vel-isolate      { isolation: isolate; }

.vel-isolation-auto { isolation: auto; }

/* Object fit */

.vel-object-contain    { -o-object-fit: contain; object-fit: contain; }

.vel-object-cover      { -o-object-fit: cover; object-fit: cover; }

.vel-object-fill       { -o-object-fit: fill; object-fit: fill; }

.vel-object-none       { -o-object-fit: none; object-fit: none; }

.vel-object-scale-down { -o-object-fit: scale-down; object-fit: scale-down; }

/* Object position */

.vel-object-bottom       { -o-object-position: bottom; object-position: bottom; }

.vel-object-center       { -o-object-position: center; object-position: center; }

.vel-object-left         { -o-object-position: left; object-position: left; }

.vel-object-left-bottom  { -o-object-position: left bottom; object-position: left bottom; }

.vel-object-left-top     { -o-object-position: left top; object-position: left top; }

.vel-object-right        { -o-object-position: right; object-position: right; }

.vel-object-right-bottom { -o-object-position: right bottom; object-position: right bottom; }

.vel-object-right-top    { -o-object-position: right top; object-position: right top; }

.vel-object-top          { -o-object-position: top; object-position: top; }

/* Box sizing */

.vel-box-border  { box-sizing: border-box; }

.vel-box-content { box-sizing: content-box; }

/* Aspect ratio */

.vel-aspect-auto   { aspect-ratio: auto; }

.vel-aspect-square { aspect-ratio: 1 / 1; }

.vel-aspect-video  { aspect-ratio: 16 / 9; }

/* Columns */

.vel-columns-1  { -moz-columns: 1; columns: 1; }

.vel-columns-2  { -moz-columns: 2; columns: 2; }

.vel-columns-3  { -moz-columns: 3; columns: 3; }

.vel-columns-4  { -moz-columns: 4; columns: 4; }

.vel-columns-5  { -moz-columns: 5; columns: 5; }

.vel-columns-6  { -moz-columns: 6; columns: 6; }

.vel-columns-auto { -moz-columns: auto; columns: auto; }

/* Break */

.vel-break-after-auto    { -moz-column-break-after: auto; break-after: auto; }

.vel-break-after-avoid   { -moz-column-break-after: avoid; break-after: avoid; }

.vel-break-after-all     { -moz-column-break-after: all; break-after: all; }

.vel-break-after-column  { -moz-column-break-after: column; break-after: column; }

.vel-break-after-page    { -moz-column-break-after: page; break-after: page; }

.vel-break-before-auto   { -moz-column-break-before: auto; break-before: auto; }

.vel-break-before-avoid  { -moz-column-break-before: avoid; break-before: avoid; }

.vel-break-before-all    { -moz-column-break-before: all; break-before: all; }

.vel-break-before-column { -moz-column-break-before: column; break-before: column; }

.vel-break-before-page   { -moz-column-break-before: page; break-before: page; }

.vel-break-inside-auto         { -moz-column-break-inside: auto; break-inside: auto; }

.vel-break-inside-avoid        { -moz-column-break-inside: avoid; break-inside: avoid; }

.vel-break-inside-avoid-page   { break-inside: avoid-page; }

.vel-break-inside-avoid-column { -moz-column-break-inside: avoid; break-inside: avoid-column; }

/* Box decoration break */

.vel-box-decoration-clone { -webkit-box-decoration-break: clone; box-decoration-break: clone; }

.vel-box-decoration-slice { -webkit-box-decoration-break: slice; box-decoration-break: slice; }

/* Container */

.vel-container {
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  padding-right: var(--vel-space-4);
  padding-left: var(--vel-space-4);
}

@media (min-width: 640px)  { .vel-container { max-width: 640px; } }

@media (min-width: 768px)  { .vel-container { max-width: 768px; } }

@media (min-width: 1024px) { .vel-container { max-width: 1024px; } }

@media (min-width: 1280px) { .vel-container { max-width: 1280px; } }

@media (min-width: 1536px) { .vel-container { max-width: 1536px; } }

/* Screen reader only */

.vel-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

/* VeloraCSS — Flexbox Utilities */

/* Direction */

.vel-flex-row            { flex-direction: row; }

.vel-flex-row-reverse    { flex-direction: row-reverse; }

.vel-flex-col            { flex-direction: column; }

.vel-flex-col-reverse    { flex-direction: column-reverse; }

/* Wrap */

.vel-flex-wrap         { flex-wrap: wrap; }

.vel-flex-wrap-reverse { flex-wrap: wrap-reverse; }

.vel-flex-nowrap       { flex-wrap: nowrap; }

/* Flex shorthand */

.vel-flex-1      { flex: 1 1 0%; }

.vel-flex-auto   { flex: 1 1 auto; }

.vel-flex-initial{ flex: 0 1 auto; }

.vel-flex-none   { flex: none; }

/* Grow */

.vel-grow   { flex-grow: 1; }

.vel-grow-0 { flex-grow: 0; }

/* Shrink */

.vel-shrink   { flex-shrink: 1; }

.vel-shrink-0 { flex-shrink: 0; }

/* Basis */

.vel-basis-0       { flex-basis: 0px; }

.vel-basis-full    { flex-basis: 100%; }

.vel-basis-auto    { flex-basis: auto; }

.vel-basis-1\\/2    { flex-basis: 50%; }

.vel-basis-1\\/3    { flex-basis: 33.333333%; }

.vel-basis-2\\/3    { flex-basis: 66.666667%; }

.vel-basis-1\\/4    { flex-basis: 25%; }

.vel-basis-3\\/4    { flex-basis: 75%; }

.vel-basis-1\\/5    { flex-basis: 20%; }

.vel-basis-2\\/5    { flex-basis: 40%; }

.vel-basis-3\\/5    { flex-basis: 60%; }

.vel-basis-4\\/5    { flex-basis: 80%; }

/* Align items */

.vel-items-start    { align-items: flex-start; }

.vel-items-end      { align-items: flex-end; }

.vel-items-center   { align-items: center; }

.vel-items-baseline { align-items: baseline; }

.vel-items-stretch  { align-items: stretch; }

/* Align self */

.vel-self-auto     { align-self: auto; }

.vel-self-start    { align-self: flex-start; }

.vel-self-end      { align-self: flex-end; }

.vel-self-center   { align-self: center; }

.vel-self-baseline { align-self: baseline; }

.vel-self-stretch  { align-self: stretch; }

/* Justify content */

.vel-justify-start   { justify-content: flex-start; }

.vel-justify-end     { justify-content: flex-end; }

.vel-justify-center  { justify-content: center; }

.vel-justify-between { justify-content: space-between; }

.vel-justify-around  { justify-content: space-around; }

.vel-justify-evenly  { justify-content: space-evenly; }

.vel-justify-stretch { justify-content: stretch; }

/* Justify items */

.vel-justify-items-start   { justify-items: start; }

.vel-justify-items-end     { justify-items: end; }

.vel-justify-items-center  { justify-items: center; }

.vel-justify-items-stretch { justify-items: stretch; }

/* Justify self */

.vel-justify-self-auto    { justify-self: auto; }

.vel-justify-self-start   { justify-self: start; }

.vel-justify-self-end     { justify-self: end; }

.vel-justify-self-center  { justify-self: center; }

.vel-justify-self-stretch { justify-self: stretch; }

/* Align content */

.vel-content-normal  { align-content: normal; }

.vel-content-start   { align-content: flex-start; }

.vel-content-end     { align-content: flex-end; }

.vel-content-center  { align-content: center; }

.vel-content-between { align-content: space-between; }

.vel-content-around  { align-content: space-around; }

.vel-content-evenly  { align-content: space-evenly; }

.vel-content-stretch { align-content: stretch; }

/* Place content */

.vel-place-content-start   { place-content: start; }

.vel-place-content-end     { place-content: end; }

.vel-place-content-center  { place-content: center; }

.vel-place-content-between { place-content: space-between; }

.vel-place-content-around  { place-content: space-around; }

.vel-place-content-evenly  { place-content: space-evenly; }

.vel-place-content-stretch { place-content: stretch; }

/* Place items */

.vel-place-items-start   { place-items: start; }

.vel-place-items-end     { place-items: end; }

.vel-place-items-center  { place-items: center; }

.vel-place-items-stretch { place-items: stretch; }

/* Place self */

.vel-place-self-auto    { place-self: auto; }

.vel-place-self-start   { place-self: start; }

.vel-place-self-end     { place-self: end; }

.vel-place-self-center  { place-self: center; }

.vel-place-self-stretch { place-self: stretch; }

/* Order */

.vel-order-first { order: -9999; }

.vel-order-last  { order: 9999; }

.vel-order-none  { order: 0; }

.vel-order-1     { order: 1; }

.vel-order-2     { order: 2; }

.vel-order-3     { order: 3; }

.vel-order-4     { order: 4; }

.vel-order-5     { order: 5; }

/* Gap */

.vel-gap-0  { gap: 0px; }

.vel-gap-1  { gap: var(--vel-space-1); }

.vel-gap-2  { gap: var(--vel-space-2); }

.vel-gap-3  { gap: var(--vel-space-3); }

.vel-gap-4  { gap: var(--vel-space-4); }

.vel-gap-5  { gap: var(--vel-space-5); }

.vel-gap-6  { gap: var(--vel-space-6); }

.vel-gap-7  { gap: var(--vel-space-7); }

.vel-gap-8  { gap: var(--vel-space-8); }

.vel-gap-10 { gap: var(--vel-space-10); }

.vel-gap-12 { gap: var(--vel-space-12); }

.vel-gap-16 { gap: var(--vel-space-16); }

.vel-gap-px { gap: 1px; }

.vel-gap-x-0  { -moz-column-gap: 0px; column-gap: 0px; }

.vel-gap-x-1  { -moz-column-gap: var(--vel-space-1); column-gap: var(--vel-space-1); }

.vel-gap-x-2  { -moz-column-gap: var(--vel-space-2); column-gap: var(--vel-space-2); }

.vel-gap-x-3  { -moz-column-gap: var(--vel-space-3); column-gap: var(--vel-space-3); }

.vel-gap-x-4  { -moz-column-gap: var(--vel-space-4); column-gap: var(--vel-space-4); }

.vel-gap-x-5  { -moz-column-gap: var(--vel-space-5); column-gap: var(--vel-space-5); }

.vel-gap-x-6  { -moz-column-gap: var(--vel-space-6); column-gap: var(--vel-space-6); }

.vel-gap-x-8  { -moz-column-gap: var(--vel-space-8); column-gap: var(--vel-space-8); }

.vel-gap-y-0  { row-gap: 0px; }

.vel-gap-y-1  { row-gap: var(--vel-space-1); }

.vel-gap-y-2  { row-gap: var(--vel-space-2); }

.vel-gap-y-3  { row-gap: var(--vel-space-3); }

.vel-gap-y-4  { row-gap: var(--vel-space-4); }

.vel-gap-y-5  { row-gap: var(--vel-space-5); }

.vel-gap-y-6  { row-gap: var(--vel-space-6); }

.vel-gap-y-8  { row-gap: var(--vel-space-8); }

/* VeloraCSS — Grid Utilities */

/* Template columns */

.vel-grid-cols-1  { grid-template-columns: repeat(1, minmax(0, 1fr)); }

.vel-grid-cols-2  { grid-template-columns: repeat(2, minmax(0, 1fr)); }

.vel-grid-cols-3  { grid-template-columns: repeat(3, minmax(0, 1fr)); }

.vel-grid-cols-4  { grid-template-columns: repeat(4, minmax(0, 1fr)); }

.vel-grid-cols-5  { grid-template-columns: repeat(5, minmax(0, 1fr)); }

.vel-grid-cols-6  { grid-template-columns: repeat(6, minmax(0, 1fr)); }

.vel-grid-cols-7  { grid-template-columns: repeat(7, minmax(0, 1fr)); }

.vel-grid-cols-8  { grid-template-columns: repeat(8, minmax(0, 1fr)); }

.vel-grid-cols-9  { grid-template-columns: repeat(9, minmax(0, 1fr)); }

.vel-grid-cols-10 { grid-template-columns: repeat(10, minmax(0, 1fr)); }

.vel-grid-cols-11 { grid-template-columns: repeat(11, minmax(0, 1fr)); }

.vel-grid-cols-12 { grid-template-columns: repeat(12, minmax(0, 1fr)); }

.vel-grid-cols-none { grid-template-columns: none; }

/* Column span */

.vel-col-auto      { grid-column: auto; }

.vel-col-span-1    { grid-column: span 1 / span 1; }

.vel-col-span-2    { grid-column: span 2 / span 2; }

.vel-col-span-3    { grid-column: span 3 / span 3; }

.vel-col-span-4    { grid-column: span 4 / span 4; }

.vel-col-span-5    { grid-column: span 5 / span 5; }

.vel-col-span-6    { grid-column: span 6 / span 6; }

.vel-col-span-7    { grid-column: span 7 / span 7; }

.vel-col-span-8    { grid-column: span 8 / span 8; }

.vel-col-span-9    { grid-column: span 9 / span 9; }

.vel-col-span-10   { grid-column: span 10 / span 10; }

.vel-col-span-11   { grid-column: span 11 / span 11; }

.vel-col-span-12   { grid-column: span 12 / span 12; }

.vel-col-span-full { grid-column: 1 / -1; }

/* Column start/end */

.vel-col-start-1  { grid-column-start: 1; }

.vel-col-start-2  { grid-column-start: 2; }

.vel-col-start-3  { grid-column-start: 3; }

.vel-col-start-4  { grid-column-start: 4; }

.vel-col-start-auto { grid-column-start: auto; }

.vel-col-end-1    { grid-column-end: 1; }

.vel-col-end-2    { grid-column-end: 2; }

.vel-col-end-3    { grid-column-end: 3; }

.vel-col-end-4    { grid-column-end: 4; }

.vel-col-end-auto { grid-column-end: auto; }

/* Template rows */

.vel-grid-rows-1  { grid-template-rows: repeat(1, minmax(0, 1fr)); }

.vel-grid-rows-2  { grid-template-rows: repeat(2, minmax(0, 1fr)); }

.vel-grid-rows-3  { grid-template-rows: repeat(3, minmax(0, 1fr)); }

.vel-grid-rows-4  { grid-template-rows: repeat(4, minmax(0, 1fr)); }

.vel-grid-rows-5  { grid-template-rows: repeat(5, minmax(0, 1fr)); }

.vel-grid-rows-6  { grid-template-rows: repeat(6, minmax(0, 1fr)); }

.vel-grid-rows-none { grid-template-rows: none; }

/* Row span */

.vel-row-auto      { grid-row: auto; }

.vel-row-span-1    { grid-row: span 1 / span 1; }

.vel-row-span-2    { grid-row: span 2 / span 2; }

.vel-row-span-3    { grid-row: span 3 / span 3; }

.vel-row-span-4    { grid-row: span 4 / span 4; }

.vel-row-span-5    { grid-row: span 5 / span 5; }

.vel-row-span-6    { grid-row: span 6 / span 6; }

.vel-row-span-full { grid-row: 1 / -1; }

/* Row start/end */

.vel-row-start-1    { grid-row-start: 1; }

.vel-row-start-2    { grid-row-start: 2; }

.vel-row-start-3    { grid-row-start: 3; }

.vel-row-start-auto { grid-row-start: auto; }

.vel-row-end-1      { grid-row-end: 1; }

.vel-row-end-2      { grid-row-end: 2; }

.vel-row-end-3      { grid-row-end: 3; }

.vel-row-end-auto   { grid-row-end: auto; }

/* Auto flow */

.vel-grid-flow-row         { grid-auto-flow: row; }

.vel-grid-flow-col         { grid-auto-flow: column; }

.vel-grid-flow-dense       { grid-auto-flow: dense; }

.vel-grid-flow-row-dense   { grid-auto-flow: row dense; }

.vel-grid-flow-col-dense   { grid-auto-flow: column dense; }

/* Auto columns/rows */

.vel-auto-cols-auto { grid-auto-columns: auto; }

.vel-auto-cols-min  { grid-auto-columns: min-content; }

.vel-auto-cols-max  { grid-auto-columns: max-content; }

.vel-auto-cols-fr   { grid-auto-columns: minmax(0, 1fr); }

.vel-auto-rows-auto { grid-auto-rows: auto; }

.vel-auto-rows-min  { grid-auto-rows: min-content; }

.vel-auto-rows-max  { grid-auto-rows: max-content; }

.vel-auto-rows-fr   { grid-auto-rows: minmax(0, 1fr); }

/* VeloraCSS — Spacing Utilities (Padding & Margin) */

/* Padding — all sides */

.vel-p-0  { padding: 0px; }

.vel-p-px { padding: 1px; }

.vel-p-1  { padding: var(--vel-space-1); }

.vel-p-2  { padding: var(--vel-space-2); }

.vel-p-3  { padding: var(--vel-space-3); }

.vel-p-4  { padding: var(--vel-space-4); }

.vel-p-5  { padding: var(--vel-space-5); }

.vel-p-6  { padding: var(--vel-space-6); }

.vel-p-7  { padding: var(--vel-space-7); }

.vel-p-8  { padding: var(--vel-space-8); }

.vel-p-9  { padding: var(--vel-space-9); }

.vel-p-10 { padding: var(--vel-space-10); }

.vel-p-11 { padding: var(--vel-space-11); }

.vel-p-12 { padding: var(--vel-space-12); }

.vel-p-14 { padding: var(--vel-space-14); }

.vel-p-16 { padding: var(--vel-space-16); }

.vel-p-20 { padding: var(--vel-space-20); }

.vel-p-24 { padding: var(--vel-space-24); }

.vel-p-28 { padding: var(--vel-space-28); }

.vel-p-32 { padding: var(--vel-space-32); }

/* Padding — x axis */

.vel-px-0  { padding-left: 0px; padding-right: 0px; }

.vel-px-px { padding-left: 1px; padding-right: 1px; }

.vel-px-1  { padding-left: var(--vel-space-1); padding-right: var(--vel-space-1); }

.vel-px-2  { padding-left: var(--vel-space-2); padding-right: var(--vel-space-2); }

.vel-px-3  { padding-left: var(--vel-space-3); padding-right: var(--vel-space-3); }

.vel-px-4  { padding-left: var(--vel-space-4); padding-right: var(--vel-space-4); }

.vel-px-5  { padding-left: var(--vel-space-5); padding-right: var(--vel-space-5); }

.vel-px-6  { padding-left: var(--vel-space-6); padding-right: var(--vel-space-6); }

.vel-px-7  { padding-left: var(--vel-space-7); padding-right: var(--vel-space-7); }

.vel-px-8  { padding-left: var(--vel-space-8); padding-right: var(--vel-space-8); }

.vel-px-10 { padding-left: var(--vel-space-10); padding-right: var(--vel-space-10); }

.vel-px-12 { padding-left: var(--vel-space-12); padding-right: var(--vel-space-12); }

.vel-px-16 { padding-left: var(--vel-space-16); padding-right: var(--vel-space-16); }

/* Padding — y axis */

.vel-py-0  { padding-top: 0px; padding-bottom: 0px; }

.vel-py-px { padding-top: 1px; padding-bottom: 1px; }

.vel-py-1  { padding-top: var(--vel-space-1); padding-bottom: var(--vel-space-1); }

.vel-py-2  { padding-top: var(--vel-space-2); padding-bottom: var(--vel-space-2); }

.vel-py-3  { padding-top: var(--vel-space-3); padding-bottom: var(--vel-space-3); }

.vel-py-4  { padding-top: var(--vel-space-4); padding-bottom: var(--vel-space-4); }

.vel-py-5  { padding-top: var(--vel-space-5); padding-bottom: var(--vel-space-5); }

.vel-py-6  { padding-top: var(--vel-space-6); padding-bottom: var(--vel-space-6); }

.vel-py-7  { padding-top: var(--vel-space-7); padding-bottom: var(--vel-space-7); }

.vel-py-8  { padding-top: var(--vel-space-8); padding-bottom: var(--vel-space-8); }

.vel-py-10 { padding-top: var(--vel-space-10); padding-bottom: var(--vel-space-10); }

.vel-py-12 { padding-top: var(--vel-space-12); padding-bottom: var(--vel-space-12); }

.vel-py-16 { padding-top: var(--vel-space-16); padding-bottom: var(--vel-space-16); }

/* Padding — individual sides */

.vel-pt-0 { padding-top: 0px; }

.vel-pt-1 { padding-top: var(--vel-space-1); }

.vel-pt-2 { padding-top: var(--vel-space-2); }

.vel-pt-3 { padding-top: var(--vel-space-3); }

.vel-pt-4 { padding-top: var(--vel-space-4); }

.vel-pt-5 { padding-top: var(--vel-space-5); }

.vel-pt-6 { padding-top: var(--vel-space-6); }

.vel-pt-8 { padding-top: var(--vel-space-8); }

.vel-pt-10{ padding-top: var(--vel-space-10); }

.vel-pt-12{ padding-top: var(--vel-space-12); }

.vel-pt-16{ padding-top: var(--vel-space-16); }

.vel-pr-0 { padding-right: 0px; }

.vel-pr-1 { padding-right: var(--vel-space-1); }

.vel-pr-2 { padding-right: var(--vel-space-2); }

.vel-pr-3 { padding-right: var(--vel-space-3); }

.vel-pr-4 { padding-right: var(--vel-space-4); }

.vel-pr-5 { padding-right: var(--vel-space-5); }

.vel-pr-6 { padding-right: var(--vel-space-6); }

.vel-pr-8 { padding-right: var(--vel-space-8); }

.vel-pr-12{ padding-right: var(--vel-space-12); }

.vel-pb-0 { padding-bottom: 0px; }

.vel-pb-1 { padding-bottom: var(--vel-space-1); }

.vel-pb-2 { padding-bottom: var(--vel-space-2); }

.vel-pb-3 { padding-bottom: var(--vel-space-3); }

.vel-pb-4 { padding-bottom: var(--vel-space-4); }

.vel-pb-5 { padding-bottom: var(--vel-space-5); }

.vel-pb-6 { padding-bottom: var(--vel-space-6); }

.vel-pb-8 { padding-bottom: var(--vel-space-8); }

.vel-pb-12{ padding-bottom: var(--vel-space-12); }

.vel-pl-0 { padding-left: 0px; }

.vel-pl-1 { padding-left: var(--vel-space-1); }

.vel-pl-2 { padding-left: var(--vel-space-2); }

.vel-pl-3 { padding-left: var(--vel-space-3); }

.vel-pl-4 { padding-left: var(--vel-space-4); }

.vel-pl-5 { padding-left: var(--vel-space-5); }

.vel-pl-6 { padding-left: var(--vel-space-6); }

.vel-pl-8 { padding-left: var(--vel-space-8); }

.vel-pl-12{ padding-left: var(--vel-space-12); }

/* ─── Margin ─────────────────────────────────── */

/* Margin — all sides */

.vel-m-0    { margin: 0px; }

.vel-m-px   { margin: 1px; }

.vel-m-auto { margin: auto; }

.vel-m-1    { margin: var(--vel-space-1); }

.vel-m-2    { margin: var(--vel-space-2); }

.vel-m-3    { margin: var(--vel-space-3); }

.vel-m-4    { margin: var(--vel-space-4); }

.vel-m-5    { margin: var(--vel-space-5); }

.vel-m-6    { margin: var(--vel-space-6); }

.vel-m-7    { margin: var(--vel-space-7); }

.vel-m-8    { margin: var(--vel-space-8); }

.vel-m-10   { margin: var(--vel-space-10); }

.vel-m-12   { margin: var(--vel-space-12); }

.vel-m-16   { margin: var(--vel-space-16); }

/* Margin — x axis */

.vel-mx-0    { margin-left: 0px; margin-right: 0px; }

.vel-mx-auto { margin-left: auto; margin-right: auto; }

.vel-mx-1    { margin-left: var(--vel-space-1); margin-right: var(--vel-space-1); }

.vel-mx-2    { margin-left: var(--vel-space-2); margin-right: var(--vel-space-2); }

.vel-mx-3    { margin-left: var(--vel-space-3); margin-right: var(--vel-space-3); }

.vel-mx-4    { margin-left: var(--vel-space-4); margin-right: var(--vel-space-4); }

.vel-mx-6    { margin-left: var(--vel-space-6); margin-right: var(--vel-space-6); }

.vel-mx-8    { margin-left: var(--vel-space-8); margin-right: var(--vel-space-8); }

.vel-mx-12   { margin-left: var(--vel-space-12); margin-right: var(--vel-space-12); }

/* Margin — y axis */

.vel-my-0    { margin-top: 0px; margin-bottom: 0px; }

.vel-my-auto { margin-top: auto; margin-bottom: auto; }

.vel-my-1    { margin-top: var(--vel-space-1); margin-bottom: var(--vel-space-1); }

.vel-my-2    { margin-top: var(--vel-space-2); margin-bottom: var(--vel-space-2); }

.vel-my-3    { margin-top: var(--vel-space-3); margin-bottom: var(--vel-space-3); }

.vel-my-4    { margin-top: var(--vel-space-4); margin-bottom: var(--vel-space-4); }

.vel-my-6    { margin-top: var(--vel-space-6); margin-bottom: var(--vel-space-6); }

.vel-my-8    { margin-top: var(--vel-space-8); margin-bottom: var(--vel-space-8); }

.vel-my-12   { margin-top: var(--vel-space-12); margin-bottom: var(--vel-space-12); }

/* Margin — individual sides */

.vel-mt-0 { margin-top: 0px; }

.vel-mt-auto { margin-top: auto; }

.vel-mt-1 { margin-top: var(--vel-space-1); }

.vel-mt-2 { margin-top: var(--vel-space-2); }

.vel-mt-3 { margin-top: var(--vel-space-3); }

.vel-mt-4 { margin-top: var(--vel-space-4); }

.vel-mt-5 { margin-top: var(--vel-space-5); }

.vel-mt-6 { margin-top: var(--vel-space-6); }

.vel-mt-8 { margin-top: var(--vel-space-8); }

.vel-mt-10{ margin-top: var(--vel-space-10); }

.vel-mt-12{ margin-top: var(--vel-space-12); }

.vel-mt-16{ margin-top: var(--vel-space-16); }

.vel-mr-0 { margin-right: 0px; }

.vel-mr-auto { margin-right: auto; }

.vel-mr-1 { margin-right: var(--vel-space-1); }

.vel-mr-2 { margin-right: var(--vel-space-2); }

.vel-mr-3 { margin-right: var(--vel-space-3); }

.vel-mr-4 { margin-right: var(--vel-space-4); }

.vel-mr-6 { margin-right: var(--vel-space-6); }

.vel-mr-8 { margin-right: var(--vel-space-8); }

.vel-mb-0 { margin-bottom: 0px; }

.vel-mb-auto { margin-bottom: auto; }

.vel-mb-1 { margin-bottom: var(--vel-space-1); }

.vel-mb-2 { margin-bottom: var(--vel-space-2); }

.vel-mb-3 { margin-bottom: var(--vel-space-3); }

.vel-mb-4 { margin-bottom: var(--vel-space-4); }

.vel-mb-5 { margin-bottom: var(--vel-space-5); }

.vel-mb-6 { margin-bottom: var(--vel-space-6); }

.vel-mb-8 { margin-bottom: var(--vel-space-8); }

.vel-mb-10{ margin-bottom: var(--vel-space-10); }

.vel-mb-12{ margin-bottom: var(--vel-space-12); }

.vel-mb-16{ margin-bottom: var(--vel-space-16); }

.vel-ml-0 { margin-left: 0px; }

.vel-ml-auto { margin-left: auto; }

.vel-ml-1 { margin-left: var(--vel-space-1); }

.vel-ml-2 { margin-left: var(--vel-space-2); }

.vel-ml-3 { margin-left: var(--vel-space-3); }

.vel-ml-4 { margin-left: var(--vel-space-4); }

.vel-ml-6 { margin-left: var(--vel-space-6); }

.vel-ml-8 { margin-left: var(--vel-space-8); }

/* Space between (children) */

.vel-space-x-0 > * + * { margin-left: 0px; }

.vel-space-x-1 > * + * { margin-left: var(--vel-space-1); }

.vel-space-x-2 > * + * { margin-left: var(--vel-space-2); }

.vel-space-x-3 > * + * { margin-left: var(--vel-space-3); }

.vel-space-x-4 > * + * { margin-left: var(--vel-space-4); }

.vel-space-x-6 > * + * { margin-left: var(--vel-space-6); }

.vel-space-x-8 > * + * { margin-left: var(--vel-space-8); }

.vel-space-y-0 > * + * { margin-top: 0px; }

.vel-space-y-1 > * + * { margin-top: var(--vel-space-1); }

.vel-space-y-2 > * + * { margin-top: var(--vel-space-2); }

.vel-space-y-3 > * + * { margin-top: var(--vel-space-3); }

.vel-space-y-4 > * + * { margin-top: var(--vel-space-4); }

.vel-space-y-6 > * + * { margin-top: var(--vel-space-6); }

.vel-space-y-8 > * + * { margin-top: var(--vel-space-8); }

/* ─── Negative Margins ─────────────────────── */

.-vel-m-px { margin: -1px; }

.-vel-m-1  { margin: -0.25rem; }

.-vel-m-2  { margin: -0.5rem; }

.-vel-m-3  { margin: -0.75rem; }

.-vel-m-4  { margin: -1rem; }

.-vel-m-5  { margin: -1.25rem; }

.-vel-m-6  { margin: -1.5rem; }

.-vel-m-8  { margin: -2rem; }

.-vel-m-10 { margin: -2.5rem; }

.-vel-m-12 { margin: -3rem; }

.-vel-m-16 { margin: -4rem; }

.-vel-mx-1  { margin-left: -0.25rem; margin-right: -0.25rem; }

.-vel-mx-2  { margin-left: -0.5rem; margin-right: -0.5rem; }

.-vel-mx-3  { margin-left: -0.75rem; margin-right: -0.75rem; }

.-vel-mx-4  { margin-left: -1rem; margin-right: -1rem; }

.-vel-mx-6  { margin-left: -1.5rem; margin-right: -1.5rem; }

.-vel-mx-8  { margin-left: -2rem; margin-right: -2rem; }

.-vel-my-1  { margin-top: -0.25rem; margin-bottom: -0.25rem; }

.-vel-my-2  { margin-top: -0.5rem; margin-bottom: -0.5rem; }

.-vel-my-4  { margin-top: -1rem; margin-bottom: -1rem; }

.-vel-my-6  { margin-top: -1.5rem; margin-bottom: -1.5rem; }

.-vel-mt-px { margin-top: -1px; }

.-vel-mt-1  { margin-top: -0.25rem; }

.-vel-mt-2  { margin-top: -0.5rem; }

.-vel-mt-3  { margin-top: -0.75rem; }

.-vel-mt-4  { margin-top: -1rem; }

.-vel-mt-6  { margin-top: -1.5rem; }

.-vel-mt-8  { margin-top: -2rem; }

.-vel-mt-12 { margin-top: -3rem; }

.-vel-mt-16 { margin-top: -4rem; }

.-vel-mr-px { margin-right: -1px; }

.-vel-mr-1  { margin-right: -0.25rem; }

.-vel-mr-2  { margin-right: -0.5rem; }

.-vel-mr-4  { margin-right: -1rem; }

.-vel-mb-px { margin-bottom: -1px; }

.-vel-mb-1  { margin-bottom: -0.25rem; }

.-vel-mb-2  { margin-bottom: -0.5rem; }

.-vel-mb-4  { margin-bottom: -1rem; }

.-vel-ml-px { margin-left: -1px; }

.-vel-ml-1  { margin-left: -0.25rem; }

.-vel-ml-2  { margin-left: -0.5rem; }

.-vel-ml-4  { margin-left: -1rem; }

/* ─── Scroll Margin ─────────────────────────── */

.vel-scroll-m-0  { scroll-margin: 0; }

.vel-scroll-m-1  { scroll-margin: 0.25rem; }

.vel-scroll-m-2  { scroll-margin: 0.5rem; }

.vel-scroll-m-4  { scroll-margin: 1rem; }

.vel-scroll-m-6  { scroll-margin: 1.5rem; }

.vel-scroll-m-8  { scroll-margin: 2rem; }

.vel-scroll-m-16 { scroll-margin: 4rem; }

.vel-scroll-m-20 { scroll-margin: 5rem; }

.vel-scroll-mt-0  { scroll-margin-top: 0; }

.vel-scroll-mt-1  { scroll-margin-top: 0.25rem; }

.vel-scroll-mt-2  { scroll-margin-top: 0.5rem; }

.vel-scroll-mt-4  { scroll-margin-top: 1rem; }

.vel-scroll-mt-6  { scroll-margin-top: 1.5rem; }

.vel-scroll-mt-8  { scroll-margin-top: 2rem; }

.vel-scroll-mt-16 { scroll-margin-top: 4rem; }

.vel-scroll-mt-20 { scroll-margin-top: 5rem; }

.vel-scroll-mb-0 { scroll-margin-bottom: 0; }

.vel-scroll-mb-1 { scroll-margin-bottom: 0.25rem; }

.vel-scroll-mb-2 { scroll-margin-bottom: 0.5rem; }

.vel-scroll-mb-4 { scroll-margin-bottom: 1rem; }

.vel-scroll-mb-8 { scroll-margin-bottom: 2rem; }

/* ─── Scroll Padding ────────────────────────── */

.vel-scroll-p-0  { scroll-padding: 0; }

.vel-scroll-p-1  { scroll-padding: 0.25rem; }

.vel-scroll-p-2  { scroll-padding: 0.5rem; }

.vel-scroll-p-4  { scroll-padding: 1rem; }

.vel-scroll-p-6  { scroll-padding: 1.5rem; }

.vel-scroll-p-8  { scroll-padding: 2rem; }

.vel-scroll-p-16 { scroll-padding: 4rem; }

.vel-scroll-p-20 { scroll-padding: 5rem; }

.vel-scroll-pt-0  { scroll-padding-top: 0; }

.vel-scroll-pt-1  { scroll-padding-top: 0.25rem; }

.vel-scroll-pt-2  { scroll-padding-top: 0.5rem; }

.vel-scroll-pt-4  { scroll-padding-top: 1rem; }

.vel-scroll-pt-6  { scroll-padding-top: 1.5rem; }

.vel-scroll-pt-8  { scroll-padding-top: 2rem; }

.vel-scroll-pt-16 { scroll-padding-top: 4rem; }

.vel-scroll-pt-20 { scroll-padding-top: 5rem; }

.vel-scroll-pb-0 { scroll-padding-bottom: 0; }

.vel-scroll-pb-1 { scroll-padding-bottom: 0.25rem; }

.vel-scroll-pb-2 { scroll-padding-bottom: 0.5rem; }

.vel-scroll-pb-4 { scroll-padding-bottom: 1rem; }

.vel-scroll-pb-8 { scroll-padding-bottom: 2rem; }

.vel-scroll-px-0 { scroll-padding-left: 0; scroll-padding-right: 0; }

.vel-scroll-px-2 { scroll-padding-left: 0.5rem; scroll-padding-right: 0.5rem; }

.vel-scroll-px-4 { scroll-padding-left: 1rem; scroll-padding-right: 1rem; }

.vel-scroll-px-6 { scroll-padding-left: 1.5rem; scroll-padding-right: 1.5rem; }

.vel-scroll-px-8 { scroll-padding-left: 2rem; scroll-padding-right: 2rem; }

/* VeloraCSS — Sizing Utilities */

/* Width */

.vel-w-0     { width: 0px; }

.vel-w-px    { width: 1px; }

.vel-w-auto  { width: auto; }

.vel-w-full  { width: 100%; }

.vel-w-screen{ width: 100vw; }

.vel-w-svw   { width: 100svw; }

.vel-w-dvw   { width: 100dvw; }

.vel-w-min   { width: -moz-min-content; width: min-content; }

.vel-w-max   { width: -moz-max-content; width: max-content; }

.vel-w-fit   { width: -moz-fit-content; width: fit-content; }

.vel-w-1     { width: var(--vel-space-1); }

.vel-w-2     { width: var(--vel-space-2); }

.vel-w-3     { width: var(--vel-space-3); }

.vel-w-4     { width: var(--vel-space-4); }

.vel-w-5     { width: var(--vel-space-5); }

.vel-w-6     { width: var(--vel-space-6); }

.vel-w-7     { width: var(--vel-space-7); }

.vel-w-8     { width: var(--vel-space-8); }

.vel-w-9     { width: var(--vel-space-9); }

.vel-w-10    { width: var(--vel-space-10); }

.vel-w-11    { width: var(--vel-space-11); }

.vel-w-12    { width: var(--vel-space-12); }

.vel-w-14    { width: var(--vel-space-14); }

.vel-w-16    { width: var(--vel-space-16); }

.vel-w-20    { width: var(--vel-space-20); }

.vel-w-24    { width: var(--vel-space-24); }

.vel-w-28    { width: var(--vel-space-28); }

.vel-w-32    { width: var(--vel-space-32); }

.vel-w-36    { width: var(--vel-space-36); }

.vel-w-40    { width: var(--vel-space-40); }

.vel-w-48    { width: var(--vel-space-48); }

.vel-w-56    { width: var(--vel-space-56); }

.vel-w-64    { width: var(--vel-space-64); }

.vel-w-72    { width: var(--vel-space-72); }

.vel-w-80    { width: var(--vel-space-80); }

.vel-w-96    { width: var(--vel-space-96); }

.vel-w-1\\/2  { width: 50%; }

.vel-w-1\\/3  { width: 33.333333%; }

.vel-w-2\\/3  { width: 66.666667%; }

.vel-w-1\\/4  { width: 25%; }

.vel-w-3\\/4  { width: 75%; }

.vel-w-1\\/5  { width: 20%; }

.vel-w-2\\/5  { width: 40%; }

.vel-w-3\\/5  { width: 60%; }

.vel-w-4\\/5  { width: 80%; }

.vel-w-1\\/6  { width: 16.666667%; }

.vel-w-5\\/6  { width: 83.333333%; }

/* Min width */

.vel-min-w-0    { min-width: 0px; }

.vel-min-w-full { min-width: 100%; }

.vel-min-w-min  { min-width: -moz-min-content; min-width: min-content; }

.vel-min-w-max  { min-width: -moz-max-content; min-width: max-content; }

.vel-min-w-fit  { min-width: -moz-fit-content; min-width: fit-content; }

/* Max width */

.vel-max-w-none { max-width: none; }

.vel-max-w-xs   { max-width: 20rem; }

.vel-max-w-sm   { max-width: 24rem; }

.vel-max-w-md   { max-width: 28rem; }

.vel-max-w-lg   { max-width: 32rem; }

.vel-max-w-xl   { max-width: 36rem; }

.vel-max-w-2xl  { max-width: 42rem; }

.vel-max-w-3xl  { max-width: 48rem; }

.vel-max-w-4xl  { max-width: 56rem; }

.vel-max-w-5xl  { max-width: 64rem; }

.vel-max-w-6xl  { max-width: 72rem; }

.vel-max-w-7xl  { max-width: 80rem; }

.vel-max-w-full { max-width: 100%; }

.vel-max-w-min  { max-width: -moz-min-content; max-width: min-content; }

.vel-max-w-max  { max-width: -moz-max-content; max-width: max-content; }

.vel-max-w-fit  { max-width: -moz-fit-content; max-width: fit-content; }

.vel-max-w-prose{ max-width: 65ch; }

.vel-max-w-screen-sm  { max-width: 640px; }

.vel-max-w-screen-md  { max-width: 768px; }

.vel-max-w-screen-lg  { max-width: 1024px; }

.vel-max-w-screen-xl  { max-width: 1280px; }

.vel-max-w-screen-2xl { max-width: 1536px; }

/* Height */

.vel-h-0      { height: 0px; }

.vel-h-px     { height: 1px; }

.vel-h-auto   { height: auto; }

.vel-h-full   { height: 100%; }

.vel-h-screen { height: 100vh; }

.vel-h-svh    { height: 100svh; }

.vel-h-dvh    { height: 100dvh; }

.vel-h-min    { height: -moz-min-content; height: min-content; }

.vel-h-max    { height: -moz-max-content; height: max-content; }

.vel-h-fit    { height: -moz-fit-content; height: fit-content; }

.vel-h-1  { height: var(--vel-space-1); }

.vel-h-2  { height: var(--vel-space-2); }

.vel-h-3  { height: var(--vel-space-3); }

.vel-h-4  { height: var(--vel-space-4); }

.vel-h-5  { height: var(--vel-space-5); }

.vel-h-6  { height: var(--vel-space-6); }

.vel-h-7  { height: var(--vel-space-7); }

.vel-h-8  { height: var(--vel-space-8); }

.vel-h-9  { height: var(--vel-space-9); }

.vel-h-10 { height: var(--vel-space-10); }

.vel-h-11 { height: var(--vel-space-11); }

.vel-h-12 { height: var(--vel-space-12); }

.vel-h-14 { height: var(--vel-space-14); }

.vel-h-16 { height: var(--vel-space-16); }

.vel-h-20 { height: var(--vel-space-20); }

.vel-h-24 { height: var(--vel-space-24); }

.vel-h-28 { height: var(--vel-space-28); }

.vel-h-32 { height: var(--vel-space-32); }

.vel-h-36 { height: var(--vel-space-36); }

.vel-h-40 { height: var(--vel-space-40); }

.vel-h-48 { height: var(--vel-space-48); }

.vel-h-56 { height: var(--vel-space-56); }

.vel-h-64 { height: var(--vel-space-64); }

/* Min height */

.vel-min-h-0      { min-height: 0px; }

.vel-min-h-full   { min-height: 100%; }

.vel-min-h-screen { min-height: 100vh; }

.vel-min-h-svh    { min-height: 100svh; }

.vel-min-h-dvh    { min-height: 100dvh; }

.vel-min-h-min    { min-height: -moz-min-content; min-height: min-content; }

.vel-min-h-max    { min-height: -moz-max-content; min-height: max-content; }

.vel-min-h-fit    { min-height: -moz-fit-content; min-height: fit-content; }

/* Max height */

.vel-max-h-none   { max-height: none; }

.vel-max-h-full   { max-height: 100%; }

.vel-max-h-screen { max-height: 100vh; }

.vel-max-h-svh    { max-height: 100svh; }

.vel-max-h-dvh    { max-height: 100dvh; }

.vel-max-h-min    { max-height: -moz-min-content; max-height: min-content; }

.vel-max-h-max    { max-height: -moz-max-content; max-height: max-content; }

.vel-max-h-fit    { max-height: -moz-fit-content; max-height: fit-content; }

.vel-max-h-24  { max-height: var(--vel-space-24); }

.vel-max-h-48  { max-height: var(--vel-space-48); }

.vel-max-h-64  { max-height: var(--vel-space-64); }

.vel-max-h-96  { max-height: var(--vel-space-96); }

/* ─── Size (width + height shorthand) ─────── */

.vel-size-0    { width: 0;      height: 0; }

.vel-size-px   { width: 1px;    height: 1px; }

.vel-size-0\\.5 { width: 0.125rem; height: 0.125rem; }

.vel-size-1    { width: 0.25rem; height: 0.25rem; }

.vel-size-1\\.5 { width: 0.375rem; height: 0.375rem; }

.vel-size-2    { width: 0.5rem;  height: 0.5rem; }

.vel-size-2\\.5 { width: 0.625rem; height: 0.625rem; }

.vel-size-3    { width: 0.75rem; height: 0.75rem; }

.vel-size-3\\.5 { width: 0.875rem; height: 0.875rem; }

.vel-size-4    { width: 1rem;    height: 1rem; }

.vel-size-5    { width: 1.25rem; height: 1.25rem; }

.vel-size-6    { width: 1.5rem;  height: 1.5rem; }

.vel-size-7    { width: 1.75rem; height: 1.75rem; }

.vel-size-8    { width: 2rem;    height: 2rem; }

.vel-size-9    { width: 2.25rem; height: 2.25rem; }

.vel-size-10   { width: 2.5rem;  height: 2.5rem; }

.vel-size-11   { width: 2.75rem; height: 2.75rem; }

.vel-size-12   { width: 3rem;    height: 3rem; }

.vel-size-14   { width: 3.5rem;  height: 3.5rem; }

.vel-size-16   { width: 4rem;    height: 4rem; }

.vel-size-20   { width: 5rem;    height: 5rem; }

.vel-size-24   { width: 6rem;    height: 6rem; }

.vel-size-28   { width: 7rem;    height: 7rem; }

.vel-size-32   { width: 8rem;    height: 8rem; }

.vel-size-36   { width: 9rem;    height: 9rem; }

.vel-size-40   { width: 10rem;   height: 10rem; }

.vel-size-48   { width: 12rem;   height: 12rem; }

.vel-size-56   { width: 14rem;   height: 14rem; }

.vel-size-64   { width: 16rem;   height: 16rem; }

.vel-size-auto { width: auto;    height: auto; }

.vel-size-full { width: 100%;    height: 100%; }

.vel-size-screen { width: 100vw; height: 100vh; }

.vel-size-1\\/2 { width: 50%;     height: 50%; }

.vel-size-1\\/3 { width: 33.333333%; height: 33.333333%; }

.vel-size-1\\/4 { width: 25%;     height: 25%; }

.vel-size-3\\/4 { width: 75%;     height: 75%; }

/* VeloraCSS — Typography Utilities */

/* Font family */

.vel-font-sans  { font-family: var(--vel-font-sans); }

.vel-font-serif { font-family: var(--vel-font-serif); }

.vel-font-mono  { font-family: var(--vel-font-mono); }

/* Font size */

.vel-text-xs   { font-size: var(--vel-text-xs); line-height: 1rem; }

.vel-text-sm   { font-size: var(--vel-text-sm); line-height: 1.25rem; }

.vel-text-base { font-size: var(--vel-text-base); line-height: 1.5rem; }

.vel-text-lg   { font-size: var(--vel-text-lg); line-height: 1.75rem; }

.vel-text-xl   { font-size: var(--vel-text-xl); line-height: 1.75rem; }

.vel-text-2xl  { font-size: var(--vel-text-2xl); line-height: 2rem; }

.vel-text-3xl  { font-size: var(--vel-text-3xl); line-height: 2.25rem; }

.vel-text-4xl  { font-size: var(--vel-text-4xl); line-height: 2.5rem; }

.vel-text-5xl  { font-size: var(--vel-text-5xl); line-height: 1; }

.vel-text-6xl  { font-size: var(--vel-text-6xl); line-height: 1; }

.vel-text-7xl  { font-size: var(--vel-text-7xl); line-height: 1; }

.vel-text-8xl  { font-size: var(--vel-text-8xl); line-height: 1; }

.vel-text-9xl  { font-size: var(--vel-text-9xl); line-height: 1; }

/* Font weight */

.vel-font-thin       { font-weight: 100; }

.vel-font-extralight { font-weight: 200; }

.vel-font-light      { font-weight: 300; }

.vel-font-normal     { font-weight: 400; }

.vel-font-medium     { font-weight: 500; }

.vel-font-semibold   { font-weight: 600; }

.vel-font-bold       { font-weight: 700; }

.vel-font-extrabold  { font-weight: 800; }

.vel-font-black      { font-weight: 900; }

/* Font style */

.vel-italic     { font-style: italic; }

.vel-not-italic { font-style: normal; }

/* Line height */

.vel-leading-none    { line-height: 1; }

.vel-leading-tight   { line-height: 1.25; }

.vel-leading-snug    { line-height: 1.375; }

.vel-leading-normal  { line-height: 1.5; }

.vel-leading-relaxed { line-height: 1.625; }

.vel-leading-loose   { line-height: 2; }

.vel-leading-3  { line-height: 0.75rem; }

.vel-leading-4  { line-height: 1rem; }

.vel-leading-5  { line-height: 1.25rem; }

.vel-leading-6  { line-height: 1.5rem; }

.vel-leading-7  { line-height: 1.75rem; }

.vel-leading-8  { line-height: 2rem; }

.vel-leading-9  { line-height: 2.25rem; }

.vel-leading-10 { line-height: 2.5rem; }

/* Letter spacing */

.vel-tracking-tighter { letter-spacing: -0.05em; }

.vel-tracking-tight   { letter-spacing: -0.025em; }

.vel-tracking-normal  { letter-spacing: 0em; }

.vel-tracking-wide    { letter-spacing: 0.025em; }

.vel-tracking-wider   { letter-spacing: 0.05em; }

.vel-tracking-widest  { letter-spacing: 0.1em; }

/* Text align */

.vel-text-left    { text-align: left; }

.vel-text-center  { text-align: center; }

.vel-text-right   { text-align: right; }

.vel-text-justify { text-align: justify; }

.vel-text-start   { text-align: start; }

.vel-text-end     { text-align: end; }

/* Text decoration */

.vel-underline    { text-decoration-line: underline; }

.vel-overline     { text-decoration-line: overline; }

.vel-line-through { text-decoration-line: line-through; }

.vel-no-underline { text-decoration-line: none; }

/* Text transform */

.vel-uppercase    { text-transform: uppercase; }

.vel-lowercase    { text-transform: lowercase; }

.vel-capitalize   { text-transform: capitalize; }

.vel-normal-case  { text-transform: none; }

/* Text overflow */

.vel-truncate     { overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }

.vel-text-ellipsis{ text-overflow: ellipsis; }

.vel-text-clip    { text-overflow: clip; }

/* White space */

.vel-whitespace-normal    { white-space: normal; }

.vel-whitespace-nowrap    { white-space: nowrap; }

.vel-whitespace-pre       { white-space: pre; }

.vel-whitespace-pre-line  { white-space: pre-line; }

.vel-whitespace-pre-wrap  { white-space: pre-wrap; }

.vel-whitespace-break-spaces { white-space: break-spaces; }

/* Word break */

.vel-break-normal { overflow-wrap: normal; word-break: normal; }

.vel-break-words  { overflow-wrap: break-word; }

.vel-break-all    { word-break: break-all; }

.vel-break-keep   { word-break: keep-all; }

/* Vertical align */

.vel-align-baseline    { vertical-align: baseline; }

.vel-align-top         { vertical-align: top; }

.vel-align-middle      { vertical-align: middle; }

.vel-align-bottom      { vertical-align: bottom; }

.vel-align-text-top    { vertical-align: text-top; }

.vel-align-text-bottom { vertical-align: text-bottom; }

.vel-align-sub         { vertical-align: sub; }

.vel-align-super       { vertical-align: super; }

/* Text smoothing */

.vel-antialiased     { -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale; }

.vel-subpixel-antialiased { -webkit-font-smoothing: auto; -moz-osx-font-smoothing: auto; }

/* List style */

.vel-list-none    { list-style-type: none; }

.vel-list-disc    { list-style-type: disc; }

.vel-list-decimal { list-style-type: decimal; }

.vel-list-inside  { list-style-position: inside; }

.vel-list-outside { list-style-position: outside; }

/* Text indent */

.vel-indent-0  { text-indent: 0px; }

.vel-indent-4  { text-indent: var(--vel-space-4); }

.vel-indent-8  { text-indent: var(--vel-space-8); }

/* Hyphens */

.vel-hyphens-none   { hyphens: none; }

.vel-hyphens-manual { hyphens: manual; }

.vel-hyphens-auto   { hyphens: auto; }

/* Content */

.vel-content-none  { content: none; }

.vel-content-empty { content: ""; }

/* ─── Text Decoration Style ────────────────── */

.vel-decoration-solid  { text-decoration-style: solid; }

.vel-decoration-double { text-decoration-style: double; }

.vel-decoration-dotted { text-decoration-style: dotted; }

.vel-decoration-dashed { text-decoration-style: dashed; }

.vel-decoration-wavy   { text-decoration-style: wavy; }

/* ─── Text Decoration Thickness ────────────── */

.vel-decoration-auto { text-decoration-thickness: auto; }

.vel-decoration-0    { text-decoration-thickness: 0; }

.vel-decoration-1    { text-decoration-thickness: 1px; }

.vel-decoration-2    { text-decoration-thickness: 2px; }

.vel-decoration-4    { text-decoration-thickness: 4px; }

.vel-decoration-8    { text-decoration-thickness: 8px; }

/* ─── Underline Offset ──────────────────────── */

.vel-underline-offset-auto { text-underline-offset: auto; }

.vel-underline-offset-0    { text-underline-offset: 0; }

.vel-underline-offset-1    { text-underline-offset: 1px; }

.vel-underline-offset-2    { text-underline-offset: 2px; }

.vel-underline-offset-4    { text-underline-offset: 4px; }

.vel-underline-offset-8    { text-underline-offset: 8px; }

/* ─── Text Decoration Color ─────────────────── */

.vel-decoration-current     { text-decoration-color: currentColor; }

.vel-decoration-transparent { text-decoration-color: transparent; }

.vel-decoration-primary     { text-decoration-color: var(--vel-color-primary); }

.vel-decoration-success     { text-decoration-color: var(--vel-color-success); }

.vel-decoration-danger      { text-decoration-color: var(--vel-color-danger); }

.vel-decoration-warning     { text-decoration-color: var(--vel-color-warning); }

.vel-decoration-info        { text-decoration-color: var(--vel-color-info); }

.vel-decoration-neutral-400 { text-decoration-color: var(--vel-neutral-400); }

.vel-decoration-neutral-500 { text-decoration-color: var(--vel-neutral-500); }

.vel-decoration-neutral-600 { text-decoration-color: var(--vel-neutral-600); }

.vel-decoration-white       { text-decoration-color: #ffffff; }

/* ─── Font Variant Numeric ──────────────────── */

.vel-normal-nums        { font-variant-numeric: normal; }

.vel-ordinal            { font-variant-numeric: ordinal; }

.vel-slashed-zero       { font-variant-numeric: slashed-zero; }

.vel-lining-nums        { font-variant-numeric: lining-nums; }

.vel-oldstyle-nums      { font-variant-numeric: oldstyle-nums; }

.vel-proportional-nums  { font-variant-numeric: proportional-nums; }

.vel-tabular-nums       { font-variant-numeric: tabular-nums; }

.vel-diagonal-fractions { font-variant-numeric: diagonal-fractions; }

.vel-stacked-fractions  { font-variant-numeric: stacked-fractions; }

/* VeloraCSS — Color Utilities */

/* ─── Text Colors ─────────────────────────── */

.vel-text-inherit    { color: inherit; }

.vel-text-current    { color: currentColor; }

.vel-text-transparent{ color: transparent; }

.vel-text-white      { color: #ffffff; }

.vel-text-black      { color: #000000; }

.vel-text-primary    { color: var(--vel-color-primary); }

.vel-text-secondary  { color: var(--vel-color-secondary); }

.vel-text-success    { color: var(--vel-color-success); }

.vel-text-danger     { color: var(--vel-color-danger); }

.vel-text-warning    { color: var(--vel-color-warning); }

.vel-text-info       { color: var(--vel-color-info); }

.vel-text-neutral-50  { color: var(--vel-neutral-50); }

.vel-text-neutral-100 { color: var(--vel-neutral-100); }

.vel-text-neutral-200 { color: var(--vel-neutral-200); }

.vel-text-neutral-300 { color: var(--vel-neutral-300); }

.vel-text-neutral-400 { color: var(--vel-neutral-400); }

.vel-text-neutral-500 { color: var(--vel-neutral-500); }

.vel-text-neutral-600 { color: var(--vel-neutral-600); }

.vel-text-neutral-700 { color: var(--vel-neutral-700); }

.vel-text-neutral-800 { color: var(--vel-neutral-800); }

.vel-text-neutral-900 { color: var(--vel-neutral-900); }

.vel-text-neutral-950 { color: var(--vel-neutral-950); }

/* ─── Background Colors ──────────────────── */

.vel-bg-inherit     { background-color: inherit; }

.vel-bg-current     { background-color: currentColor; }

.vel-bg-transparent { background-color: transparent; }

.vel-bg-white       { background-color: #ffffff; }

.vel-bg-black       { background-color: #000000; }

.vel-bg-primary     { background-color: var(--vel-color-primary); }

.vel-bg-secondary   { background-color: var(--vel-color-secondary); }

.vel-bg-success     { background-color: var(--vel-color-success); }

.vel-bg-danger      { background-color: var(--vel-color-danger); }

.vel-bg-warning     { background-color: var(--vel-color-warning); }

.vel-bg-info        { background-color: var(--vel-color-info); }

.vel-bg-primary-light   { background-color: var(--vel-color-primary-light); }

.vel-bg-success-light   { background-color: var(--vel-color-success-light); }

.vel-bg-danger-light    { background-color: var(--vel-color-danger-light); }

.vel-bg-warning-light   { background-color: var(--vel-color-warning-light); }

.vel-bg-info-light      { background-color: var(--vel-color-info-light); }

.vel-bg-neutral-50  { background-color: var(--vel-neutral-50); }

.vel-bg-neutral-100 { background-color: var(--vel-neutral-100); }

.vel-bg-neutral-200 { background-color: var(--vel-neutral-200); }

.vel-bg-neutral-300 { background-color: var(--vel-neutral-300); }

.vel-bg-neutral-400 { background-color: var(--vel-neutral-400); }

.vel-bg-neutral-500 { background-color: var(--vel-neutral-500); }

.vel-bg-neutral-600 { background-color: var(--vel-neutral-600); }

.vel-bg-neutral-700 { background-color: var(--vel-neutral-700); }

.vel-bg-neutral-800 { background-color: var(--vel-neutral-800); }

.vel-bg-neutral-900 { background-color: var(--vel-neutral-900); }

.vel-bg-neutral-950 { background-color: var(--vel-neutral-950); }

/* Background opacity (composable) */

.vel-bg-opacity-0   { --vel-bg-opacity: 0; }

.vel-bg-opacity-25  { --vel-bg-opacity: 0.25; }

.vel-bg-opacity-50  { --vel-bg-opacity: 0.5; }

.vel-bg-opacity-75  { --vel-bg-opacity: 0.75; }

.vel-bg-opacity-100 { --vel-bg-opacity: 1; }

/* ─── Border Colors ─────────────────────── */

.vel-border-inherit     { border-color: inherit; }

.vel-border-current     { border-color: currentColor; }

.vel-border-transparent { border-color: transparent; }

.vel-border-white       { border-color: #ffffff; }

.vel-border-black       { border-color: #000000; }

.vel-border-primary   { border-color: var(--vel-color-primary); }

.vel-border-secondary { border-color: var(--vel-color-secondary); }

.vel-border-success   { border-color: var(--vel-color-success); }

.vel-border-danger    { border-color: var(--vel-color-danger); }

.vel-border-warning   { border-color: var(--vel-color-warning); }

.vel-border-info      { border-color: var(--vel-color-info); }

.vel-border-neutral-100 { border-color: var(--vel-neutral-100); }

.vel-border-neutral-200 { border-color: var(--vel-neutral-200); }

.vel-border-neutral-300 { border-color: var(--vel-neutral-300); }

.vel-border-neutral-400 { border-color: var(--vel-neutral-400); }

.vel-border-neutral-500 { border-color: var(--vel-neutral-500); }

.vel-border-neutral-600 { border-color: var(--vel-neutral-600); }

.vel-border-neutral-700 { border-color: var(--vel-neutral-700); }

.vel-border-neutral-800 { border-color: var(--vel-neutral-800); }

.vel-border-neutral-900 { border-color: var(--vel-neutral-900); }

/* ─── Background position/size/repeat ─────── */

.vel-bg-auto     { background-size: auto; }

.vel-bg-cover    { background-size: cover; }

.vel-bg-contain  { background-size: contain; }

.vel-bg-center   { background-position: center; }

.vel-bg-top      { background-position: top; }

.vel-bg-right    { background-position: right; }

.vel-bg-bottom   { background-position: bottom; }

.vel-bg-left     { background-position: left; }

.vel-bg-repeat      { background-repeat: repeat; }

.vel-bg-no-repeat   { background-repeat: no-repeat; }

.vel-bg-repeat-x    { background-repeat: repeat-x; }

.vel-bg-repeat-y    { background-repeat: repeat-y; }

.vel-bg-fixed       { background-attachment: fixed; }

.vel-bg-local       { background-attachment: local; }

.vel-bg-scroll      { background-attachment: scroll; }

/* ─── Surface Colors ─────────────────────── */

.vel-bg-surface-0 { background-color: var(--vel-surface-0); }

.vel-bg-surface-1 { background-color: var(--vel-surface-1); }

.vel-bg-surface-2 { background-color: var(--vel-surface-2); }

.vel-bg-surface-3 { background-color: var(--vel-surface-3); }

.vel-bg-surface-4 { background-color: var(--vel-surface-4); }

/* ─── Brand Color Ramps ───────────────────── */

/* Primary (Velora Violet) */

.vel-text-primary-50  { color: var(--vel-primary-50); }

.vel-text-primary-100 { color: var(--vel-primary-100); }

.vel-text-primary-200 { color: var(--vel-primary-200); }

.vel-text-primary-300 { color: var(--vel-primary-300); }

.vel-text-primary-400 { color: var(--vel-primary-400); }

.vel-text-primary-500 { color: var(--vel-primary-500); }

.vel-text-primary-600 { color: var(--vel-primary-600); }

.vel-text-primary-700 { color: var(--vel-primary-700); }

.vel-text-primary-800 { color: var(--vel-primary-800); }

.vel-text-primary-900 { color: var(--vel-primary-900); }

.vel-text-primary-950 { color: var(--vel-primary-950); }

.vel-bg-primary-50  { background-color: var(--vel-primary-50); }

.vel-bg-primary-100 { background-color: var(--vel-primary-100); }

.vel-bg-primary-200 { background-color: var(--vel-primary-200); }

.vel-bg-primary-300 { background-color: var(--vel-primary-300); }

.vel-bg-primary-400 { background-color: var(--vel-primary-400); }

.vel-bg-primary-500 { background-color: var(--vel-primary-500); }

.vel-bg-primary-600 { background-color: var(--vel-primary-600); }

.vel-bg-primary-700 { background-color: var(--vel-primary-700); }

.vel-bg-primary-800 { background-color: var(--vel-primary-800); }

.vel-bg-primary-900 { background-color: var(--vel-primary-900); }

.vel-bg-primary-950 { background-color: var(--vel-primary-950); }

/* Success (Velora Emerald) */

.vel-text-success-50  { color: var(--vel-success-50); }

.vel-text-success-100 { color: var(--vel-success-100); }

.vel-text-success-200 { color: var(--vel-success-200); }

.vel-text-success-300 { color: var(--vel-success-300); }

.vel-text-success-400 { color: var(--vel-success-400); }

.vel-text-success-500 { color: var(--vel-success-500); }

.vel-text-success-600 { color: var(--vel-success-600); }

.vel-text-success-700 { color: var(--vel-success-700); }

.vel-bg-success-50  { background-color: var(--vel-success-50); }

.vel-bg-success-100 { background-color: var(--vel-success-100); }

.vel-bg-success-300 { background-color: var(--vel-success-300); }

.vel-bg-success-400 { background-color: var(--vel-success-400); }

.vel-bg-success-500 { background-color: var(--vel-success-500); }

.vel-bg-success-700 { background-color: var(--vel-success-700); }

.vel-bg-success-900 { background-color: var(--vel-success-900); }

/* Danger (Velora Rose) */

.vel-text-danger-50  { color: var(--vel-danger-50); }

.vel-text-danger-100 { color: var(--vel-danger-100); }

.vel-text-danger-300 { color: var(--vel-danger-300); }

.vel-text-danger-400 { color: var(--vel-danger-400); }

.vel-text-danger-500 { color: var(--vel-danger-500); }

.vel-text-danger-600 { color: var(--vel-danger-600); }

.vel-text-danger-700 { color: var(--vel-danger-700); }

.vel-bg-danger-50  { background-color: var(--vel-danger-50); }

.vel-bg-danger-100 { background-color: var(--vel-danger-100); }

.vel-bg-danger-300 { background-color: var(--vel-danger-300); }

.vel-bg-danger-400 { background-color: var(--vel-danger-400); }

.vel-bg-danger-500 { background-color: var(--vel-danger-500); }

.vel-bg-danger-700 { background-color: var(--vel-danger-700); }

.vel-bg-danger-900 { background-color: var(--vel-danger-900); }

/* Warning (Velora Amber) */

.vel-text-warning-300 { color: var(--vel-warning-300); }

.vel-text-warning-400 { color: var(--vel-warning-400); }

.vel-text-warning-500 { color: var(--vel-warning-500); }

.vel-text-warning-600 { color: var(--vel-warning-600); }

.vel-bg-warning-100 { background-color: var(--vel-warning-100); }

.vel-bg-warning-300 { background-color: var(--vel-warning-300); }

.vel-bg-warning-400 { background-color: var(--vel-warning-400); }

.vel-bg-warning-500 { background-color: var(--vel-warning-500); }

.vel-bg-warning-900 { background-color: var(--vel-warning-900); }

/* Info (Velora Sky) */

.vel-text-info-300 { color: var(--vel-info-300); }

.vel-text-info-400 { color: var(--vel-info-400); }

.vel-text-info-500 { color: var(--vel-info-500); }

.vel-text-info-600 { color: var(--vel-info-600); }

.vel-bg-info-100 { background-color: var(--vel-info-100); }

.vel-bg-info-300 { background-color: var(--vel-info-300); }

.vel-bg-info-400 { background-color: var(--vel-info-400); }

.vel-bg-info-500 { background-color: var(--vel-info-500); }

.vel-bg-info-900 { background-color: var(--vel-info-900); }

/* ─── Text UI Colors ──────────────────────── */

.vel-text-body  { color: var(--vel-color-text); }

.vel-text-muted { color: var(--vel-color-muted); }

/* VeloraCSS — Border Utilities */

/* Border width */

.vel-border-0  { border-width: 0px; }

.vel-border    { border-width: 1px; }

.vel-border-2  { border-width: 2px; }

.vel-border-4  { border-width: 4px; }

.vel-border-8  { border-width: 8px; }

.vel-border-t-0 { border-top-width: 0px; }

.vel-border-t   { border-top-width: 1px; }

.vel-border-t-2 { border-top-width: 2px; }

.vel-border-t-4 { border-top-width: 4px; }

.vel-border-r-0 { border-right-width: 0px; }

.vel-border-r   { border-right-width: 1px; }

.vel-border-r-2 { border-right-width: 2px; }

.vel-border-r-4 { border-right-width: 4px; }

.vel-border-b-0 { border-bottom-width: 0px; }

.vel-border-b   { border-bottom-width: 1px; }

.vel-border-b-2 { border-bottom-width: 2px; }

.vel-border-b-4 { border-bottom-width: 4px; }

.vel-border-l-0 { border-left-width: 0px; }

.vel-border-l   { border-left-width: 1px; }

.vel-border-l-2 { border-left-width: 2px; }

.vel-border-l-4 { border-left-width: 4px; }

.vel-border-x-0 { border-left-width: 0px; border-right-width: 0px; }

.vel-border-x   { border-left-width: 1px; border-right-width: 1px; }

.vel-border-x-2 { border-left-width: 2px; border-right-width: 2px; }

.vel-border-y-0 { border-top-width: 0px; border-bottom-width: 0px; }

.vel-border-y   { border-top-width: 1px; border-bottom-width: 1px; }

.vel-border-y-2 { border-top-width: 2px; border-bottom-width: 2px; }

/* Border style */

.vel-border-solid  { border-style: solid; }

.vel-border-dashed { border-style: dashed; }

.vel-border-dotted { border-style: dotted; }

.vel-border-double { border-style: double; }

.vel-border-hidden { border-style: hidden; }

.vel-border-none   { border-style: none; }

/* Border radius */

.vel-rounded-none { border-radius: var(--vel-radius-none); }

.vel-rounded-sm   { border-radius: var(--vel-radius-sm); }

.vel-rounded      { border-radius: var(--vel-radius); }

.vel-rounded-md   { border-radius: var(--vel-radius-md); }

.vel-rounded-lg   { border-radius: var(--vel-radius-lg); }

.vel-rounded-xl   { border-radius: var(--vel-radius-xl); }

.vel-rounded-2xl  { border-radius: var(--vel-radius-2xl); }

.vel-rounded-3xl  { border-radius: var(--vel-radius-3xl); }

.vel-rounded-full { border-radius: var(--vel-radius-full); }

.vel-rounded-t-none { border-top-left-radius: 0; border-top-right-radius: 0; }

.vel-rounded-t-sm   { border-top-left-radius: var(--vel-radius-sm); border-top-right-radius: var(--vel-radius-sm); }

.vel-rounded-t      { border-top-left-radius: var(--vel-radius); border-top-right-radius: var(--vel-radius); }

.vel-rounded-t-md   { border-top-left-radius: var(--vel-radius-md); border-top-right-radius: var(--vel-radius-md); }

.vel-rounded-t-lg   { border-top-left-radius: var(--vel-radius-lg); border-top-right-radius: var(--vel-radius-lg); }

.vel-rounded-t-xl   { border-top-left-radius: var(--vel-radius-xl); border-top-right-radius: var(--vel-radius-xl); }

.vel-rounded-t-full { border-top-left-radius: 9999px; border-top-right-radius: 9999px; }

.vel-rounded-b-none { border-bottom-left-radius: 0; border-bottom-right-radius: 0; }

.vel-rounded-b-sm   { border-bottom-left-radius: var(--vel-radius-sm); border-bottom-right-radius: var(--vel-radius-sm); }

.vel-rounded-b      { border-bottom-left-radius: var(--vel-radius); border-bottom-right-radius: var(--vel-radius); }

.vel-rounded-b-md   { border-bottom-left-radius: var(--vel-radius-md); border-bottom-right-radius: var(--vel-radius-md); }

.vel-rounded-b-lg   { border-bottom-left-radius: var(--vel-radius-lg); border-bottom-right-radius: var(--vel-radius-lg); }

.vel-rounded-b-full { border-bottom-left-radius: 9999px; border-bottom-right-radius: 9999px; }

.vel-rounded-l-none { border-top-left-radius: 0; border-bottom-left-radius: 0; }

.vel-rounded-l-sm   { border-top-left-radius: var(--vel-radius-sm); border-bottom-left-radius: var(--vel-radius-sm); }

.vel-rounded-l      { border-top-left-radius: var(--vel-radius); border-bottom-left-radius: var(--vel-radius); }

.vel-rounded-l-lg   { border-top-left-radius: var(--vel-radius-lg); border-bottom-left-radius: var(--vel-radius-lg); }

.vel-rounded-l-full { border-top-left-radius: 9999px; border-bottom-left-radius: 9999px; }

.vel-rounded-r-none { border-top-right-radius: 0; border-bottom-right-radius: 0; }

.vel-rounded-r-sm   { border-top-right-radius: var(--vel-radius-sm); border-bottom-right-radius: var(--vel-radius-sm); }

.vel-rounded-r      { border-top-right-radius: var(--vel-radius); border-bottom-right-radius: var(--vel-radius); }

.vel-rounded-r-lg   { border-top-right-radius: var(--vel-radius-lg); border-bottom-right-radius: var(--vel-radius-lg); }

.vel-rounded-r-full { border-top-right-radius: 9999px; border-bottom-right-radius: 9999px; }

/* Outline */

.vel-outline-none { outline: 2px solid transparent; outline-offset: 2px; }

.vel-outline      { outline-style: solid; }

.vel-outline-dashed { outline-style: dashed; }

.vel-outline-dotted { outline-style: dotted; }

.vel-outline-0    { outline-width: 0px; }

.vel-outline-1    { outline-width: 1px; }

.vel-outline-2    { outline-width: 2px; }

.vel-outline-4    { outline-width: 4px; }

.vel-outline-8    { outline-width: 8px; }

.vel-outline-offset-0 { outline-offset: 0px; }

.vel-outline-offset-1 { outline-offset: 1px; }

.vel-outline-offset-2 { outline-offset: 2px; }

.vel-outline-offset-4 { outline-offset: 4px; }

.vel-outline-offset-8 { outline-offset: 8px; }

.vel-ring {
  box-shadow: var(--vel-ring-primary);
}

.vel-ring-primary { box-shadow: var(--vel-ring-primary); }

.vel-ring-success { box-shadow: var(--vel-ring-success); }

.vel-ring-danger  { box-shadow: var(--vel-ring-danger); }

.vel-ring-warning { box-shadow: var(--vel-ring-warning); }

.vel-ring-info    { box-shadow: var(--vel-ring-info); }

.vel-ring-neutral { box-shadow: 0 0 0 3px var(--vel-neutral-400); }

/* VeloraCSS — Effects Utilities */

/* Box shadow */

.vel-shadow-sm    { box-shadow: var(--vel-shadow-sm); }

.vel-shadow       { box-shadow: var(--vel-shadow); }

.vel-shadow-md    { box-shadow: var(--vel-shadow-md); }

.vel-shadow-lg    { box-shadow: var(--vel-shadow-lg); }

.vel-shadow-xl    { box-shadow: var(--vel-shadow-xl); }

.vel-shadow-2xl   { box-shadow: var(--vel-shadow-2xl); }

.vel-shadow-inner { box-shadow: var(--vel-shadow-inner); }

.vel-shadow-none  { box-shadow: var(--vel-shadow-none); }

/* Opacity */

.vel-opacity-0   { opacity: 0; }

.vel-opacity-5   { opacity: 0.05; }

.vel-opacity-10  { opacity: 0.1; }

.vel-opacity-15  { opacity: 0.15; }

.vel-opacity-20  { opacity: 0.2; }

.vel-opacity-25  { opacity: 0.25; }

.vel-opacity-30  { opacity: 0.3; }

.vel-opacity-40  { opacity: 0.4; }

.vel-opacity-50  { opacity: 0.5; }

.vel-opacity-60  { opacity: 0.6; }

.vel-opacity-70  { opacity: 0.7; }

.vel-opacity-75  { opacity: 0.75; }

.vel-opacity-80  { opacity: 0.8; }

.vel-opacity-90  { opacity: 0.9; }

.vel-opacity-95  { opacity: 0.95; }

.vel-opacity-100 { opacity: 1; }

/* Mix blend mode */

.vel-mix-blend-normal      { mix-blend-mode: normal; }

.vel-mix-blend-multiply    { mix-blend-mode: multiply; }

.vel-mix-blend-screen      { mix-blend-mode: screen; }

.vel-mix-blend-overlay     { mix-blend-mode: overlay; }

.vel-mix-blend-darken      { mix-blend-mode: darken; }

.vel-mix-blend-lighten     { mix-blend-mode: lighten; }

.vel-mix-blend-color-dodge { mix-blend-mode: color-dodge; }

.vel-mix-blend-color-burn  { mix-blend-mode: color-burn; }

.vel-mix-blend-difference  { mix-blend-mode: difference; }

.vel-mix-blend-exclusion   { mix-blend-mode: exclusion; }

/* Filters */

.vel-blur-none { filter: blur(0); }

.vel-blur-sm   { filter: blur(4px); }

.vel-blur      { filter: blur(8px); }

.vel-blur-md   { filter: blur(12px); }

.vel-blur-lg   { filter: blur(16px); }

.vel-blur-xl   { filter: blur(24px); }

.vel-blur-2xl  { filter: blur(40px); }

.vel-blur-3xl  { filter: blur(64px); }

.vel-brightness-0   { filter: brightness(0); }

.vel-brightness-50  { filter: brightness(.5); }

.vel-brightness-75  { filter: brightness(.75); }

.vel-brightness-90  { filter: brightness(.9); }

.vel-brightness-95  { filter: brightness(.95); }

.vel-brightness-100 { filter: brightness(1); }

.vel-brightness-105 { filter: brightness(1.05); }

.vel-brightness-110 { filter: brightness(1.1); }

.vel-brightness-125 { filter: brightness(1.25); }

.vel-brightness-150 { filter: brightness(1.5); }

.vel-brightness-200 { filter: brightness(2); }

.vel-grayscale-0 { filter: grayscale(0); }

.vel-grayscale   { filter: grayscale(100%); }

.vel-invert-0 { filter: invert(0); }

.vel-invert   { filter: invert(100%); }

.vel-sepia-0 { filter: sepia(0); }

.vel-sepia   { filter: sepia(100%); }

/* Glow */

.vel-glow-primary { box-shadow: var(--vel-glow-primary); }

.vel-glow-success { box-shadow: var(--vel-glow-success); }

.vel-glow-danger  { box-shadow: var(--vel-glow-danger); }

.vel-glow-warning { box-shadow: var(--vel-glow-warning); }

.vel-glow-info    { box-shadow: var(--vel-glow-info); }

.vel-glow-white   { box-shadow: var(--vel-glow-white); }

.vel-glow-sm-primary { box-shadow: var(--vel-glow-sm-primary); }

.vel-glow-sm-success { box-shadow: var(--vel-glow-sm-success); }

.vel-glow-sm-danger  { box-shadow: var(--vel-glow-sm-danger); }

.vel-glow-sm-warning { box-shadow: var(--vel-glow-sm-warning); }

.vel-glow-sm-info    { box-shadow: var(--vel-glow-sm-info); }

.vel-glow-none    { box-shadow: none; }

/* Backdrop filters */

.vel-backdrop-blur-none { backdrop-filter: blur(0); }

.vel-backdrop-blur-sm   { backdrop-filter: blur(4px); }

.vel-backdrop-blur      { backdrop-filter: blur(8px); }

.vel-backdrop-blur-md   { backdrop-filter: blur(12px); }

.vel-backdrop-blur-lg   { backdrop-filter: blur(16px); }

.vel-backdrop-blur-xl   { backdrop-filter: blur(24px); }

.vel-backdrop-blur-2xl  { backdrop-filter: blur(40px); }

.vel-backdrop-blur-3xl  { backdrop-filter: blur(64px); }

/* ─── Contrast ─────────────────────────────── */

.vel-contrast-0   { filter: contrast(0); }

.vel-contrast-50  { filter: contrast(.5); }

.vel-contrast-75  { filter: contrast(.75); }

.vel-contrast-100 { filter: contrast(1); }

.vel-contrast-125 { filter: contrast(1.25); }

.vel-contrast-150 { filter: contrast(1.5); }

.vel-contrast-200 { filter: contrast(2); }

/* ─── Saturate ─────────────────────────────── */

.vel-saturate-0   { filter: saturate(0); }

.vel-saturate-50  { filter: saturate(.5); }

.vel-saturate-100 { filter: saturate(1); }

.vel-saturate-150 { filter: saturate(1.5); }

.vel-saturate-200 { filter: saturate(2); }

/* ─── Hue Rotate ───────────────────────────── */

.vel-hue-rotate-0   { filter: hue-rotate(0deg); }

.vel-hue-rotate-15  { filter: hue-rotate(15deg); }

.vel-hue-rotate-30  { filter: hue-rotate(30deg); }

.vel-hue-rotate-60  { filter: hue-rotate(60deg); }

.vel-hue-rotate-90  { filter: hue-rotate(90deg); }

.vel-hue-rotate-180 { filter: hue-rotate(180deg); }

/* ─── Drop Shadow ──────────────────────────── */

.vel-drop-shadow-none { filter: drop-shadow(0 0 0 transparent); }

.vel-drop-shadow-sm   { filter: drop-shadow(0 1px 1px rgba(0,0,0,.3)); }

.vel-drop-shadow      { filter: drop-shadow(0 1px 2px rgba(0,0,0,.4)) drop-shadow(0 1px 1px rgba(0,0,0,.3)); }

.vel-drop-shadow-md   { filter: drop-shadow(0 4px 3px rgba(0,0,0,.35)) drop-shadow(0 2px 2px rgba(0,0,0,.25)); }

.vel-drop-shadow-lg   { filter: drop-shadow(0 10px 8px rgba(0,0,0,.3)) drop-shadow(0 4px 3px rgba(0,0,0,.2)); }

.vel-drop-shadow-xl   { filter: drop-shadow(0 20px 13px rgba(0,0,0,.25)) drop-shadow(0 8px 5px rgba(0,0,0,.15)); }

/* ─── Backdrop Brightness ──────────────────── */

.vel-backdrop-brightness-0   { backdrop-filter: brightness(0); }

.vel-backdrop-brightness-50  { backdrop-filter: brightness(.5); }

.vel-backdrop-brightness-75  { backdrop-filter: brightness(.75); }

.vel-backdrop-brightness-90  { backdrop-filter: brightness(.9); }

.vel-backdrop-brightness-95  { backdrop-filter: brightness(.95); }

.vel-backdrop-brightness-100 { backdrop-filter: brightness(1); }

.vel-backdrop-brightness-105 { backdrop-filter: brightness(1.05); }

.vel-backdrop-brightness-110 { backdrop-filter: brightness(1.1); }

.vel-backdrop-brightness-125 { backdrop-filter: brightness(1.25); }

.vel-backdrop-brightness-150 { backdrop-filter: brightness(1.5); }

.vel-backdrop-brightness-200 { backdrop-filter: brightness(2); }

/* ─── Backdrop Contrast ────────────────────── */

.vel-backdrop-contrast-0   { backdrop-filter: contrast(0); }

.vel-backdrop-contrast-50  { backdrop-filter: contrast(.5); }

.vel-backdrop-contrast-75  { backdrop-filter: contrast(.75); }

.vel-backdrop-contrast-100 { backdrop-filter: contrast(1); }

.vel-backdrop-contrast-125 { backdrop-filter: contrast(1.25); }

.vel-backdrop-contrast-150 { backdrop-filter: contrast(1.5); }

.vel-backdrop-contrast-200 { backdrop-filter: contrast(2); }

/* ─── Backdrop Saturate ────────────────────── */

.vel-backdrop-saturate-0   { backdrop-filter: saturate(0); }

.vel-backdrop-saturate-50  { backdrop-filter: saturate(.5); }

.vel-backdrop-saturate-100 { backdrop-filter: saturate(1); }

.vel-backdrop-saturate-150 { backdrop-filter: saturate(1.5); }

.vel-backdrop-saturate-200 { backdrop-filter: saturate(2); }

/* ─── Backdrop Hue Rotate ──────────────────── */

.vel-backdrop-hue-rotate-0   { backdrop-filter: hue-rotate(0deg); }

.vel-backdrop-hue-rotate-15  { backdrop-filter: hue-rotate(15deg); }

.vel-backdrop-hue-rotate-30  { backdrop-filter: hue-rotate(30deg); }

.vel-backdrop-hue-rotate-60  { backdrop-filter: hue-rotate(60deg); }

.vel-backdrop-hue-rotate-90  { backdrop-filter: hue-rotate(90deg); }

.vel-backdrop-hue-rotate-180 { backdrop-filter: hue-rotate(180deg); }

/* VeloraCSS — Gradient Utilities */

/* ─── Background Gradients ────────────────── */

.vel-bg-gradient-primary   { background: var(--vel-gradient-primary); }

.vel-bg-gradient-secondary { background: var(--vel-gradient-secondary); }

.vel-bg-gradient-success   { background: var(--vel-gradient-success); }

.vel-bg-gradient-danger    { background: var(--vel-gradient-danger); }

.vel-bg-gradient-warning   { background: var(--vel-gradient-warning); }

.vel-bg-gradient-info      { background: var(--vel-gradient-info); }

.vel-bg-gradient-dark      { background: var(--vel-gradient-dark); }

.vel-bg-gradient-surface   { background: var(--vel-gradient-surface); }

.vel-bg-gradient-aurora    { background: var(--vel-gradient-aurora); }

.vel-bg-gradient-sunset    { background: var(--vel-gradient-sunset); }

.vel-bg-gradient-ocean     { background: var(--vel-gradient-ocean); }

.vel-bg-gradient-cosmos    { background: var(--vel-gradient-cosmos); }

.vel-bg-gradient-midnight  { background: var(--vel-gradient-midnight); }

/* ─── Directional Gradient Helpers ───────── */

/* Usage: vel-gradient-to-r + vel-from-primary + vel-to-info */

.vel-gradient-to-r  { background-image: linear-gradient(to right, var(--vel-grad-from, transparent), var(--vel-grad-to, transparent)); }

.vel-gradient-to-l  { background-image: linear-gradient(to left,  var(--vel-grad-from, transparent), var(--vel-grad-to, transparent)); }

.vel-gradient-to-b  { background-image: linear-gradient(to bottom,var(--vel-grad-from, transparent), var(--vel-grad-to, transparent)); }

.vel-gradient-to-t  { background-image: linear-gradient(to top,   var(--vel-grad-from, transparent), var(--vel-grad-to, transparent)); }

.vel-gradient-to-br { background-image: linear-gradient(to bottom right, var(--vel-grad-from, transparent), var(--vel-grad-to, transparent)); }

.vel-gradient-to-bl { background-image: linear-gradient(to bottom left,  var(--vel-grad-from, transparent), var(--vel-grad-to, transparent)); }

.vel-gradient-to-tr { background-image: linear-gradient(to top right,    var(--vel-grad-from, transparent), var(--vel-grad-to, transparent)); }

.vel-gradient-to-tl { background-image: linear-gradient(to top left,     var(--vel-grad-from, transparent), var(--vel-grad-to, transparent)); }

.vel-from-primary   { --vel-grad-from: var(--vel-color-primary); }

.vel-from-success   { --vel-grad-from: var(--vel-color-success); }

.vel-from-danger    { --vel-grad-from: var(--vel-color-danger); }

.vel-from-warning   { --vel-grad-from: var(--vel-color-warning); }

.vel-from-info      { --vel-grad-from: var(--vel-color-info); }

.vel-from-white     { --vel-grad-from: #ffffff; }

.vel-from-black     { --vel-grad-from: #000000; }

.vel-from-surface-0 { --vel-grad-from: var(--vel-surface-0); }

.vel-from-surface-1 { --vel-grad-from: var(--vel-surface-1); }

.vel-from-surface-2 { --vel-grad-from: var(--vel-surface-2); }

.vel-from-surface-3 { --vel-grad-from: var(--vel-surface-3); }

.vel-from-transparent { --vel-grad-from: transparent; }

.vel-to-primary   { --vel-grad-to: var(--vel-color-primary); }

.vel-to-success   { --vel-grad-to: var(--vel-color-success); }

.vel-to-danger    { --vel-grad-to: var(--vel-color-danger); }

.vel-to-warning   { --vel-grad-to: var(--vel-color-warning); }

.vel-to-info      { --vel-grad-to: var(--vel-color-info); }

.vel-to-white     { --vel-grad-to: #ffffff; }

.vel-to-black     { --vel-grad-to: #000000; }

.vel-to-surface-0 { --vel-grad-to: var(--vel-surface-0); }

.vel-to-surface-1 { --vel-grad-to: var(--vel-surface-1); }

.vel-to-surface-2 { --vel-grad-to: var(--vel-surface-2); }

.vel-to-surface-3 { --vel-grad-to: var(--vel-surface-3); }

.vel-to-transparent { --vel-grad-to: transparent; }

/* ─── Text Gradient ───────────────────────── */

.vel-text-gradient-primary {
  background: var(--vel-gradient-primary);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  color: transparent;
}

.vel-text-gradient-aurora {
  background: var(--vel-gradient-aurora);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  color: transparent;
}

.vel-text-gradient-sunset {
  background: var(--vel-gradient-sunset);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  color: transparent;
}

.vel-text-gradient-ocean {
  background: var(--vel-gradient-ocean);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  color: transparent;
}

.vel-text-gradient-cosmos {
  background: var(--vel-gradient-cosmos);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  color: transparent;
}

/* VeloraCSS — Animation Utilities */

/* ─── Keyframes ───────────────────────────── */

@keyframes vel-spin {
  from { transform: rotate(0deg); }
  to   { transform: rotate(360deg); }
}

@keyframes vel-ping {
  75%, 100% {
    transform: scale(2);
    opacity: 0;
  }
}

@keyframes vel-pulse {
  0%, 100% { opacity: 1; }
  50%       { opacity: 0.45; }
}

@keyframes vel-bounce {
  0%, 100% {
    transform: translateY(-12%);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  50% {
    transform: translateY(0);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
}

@keyframes vel-fade-in {
  from { opacity: 0; }
  to   { opacity: 1; }
}

@keyframes vel-fade-out {
  from { opacity: 1; }
  to   { opacity: 0; }
}

@keyframes vel-slide-up {
  from { opacity: 0; transform: translateY(12px); }
  to   { opacity: 1; transform: translateY(0); }
}

@keyframes vel-slide-down {
  from { opacity: 0; transform: translateY(-12px); }
  to   { opacity: 1; transform: translateY(0); }
}

@keyframes vel-slide-left {
  from { opacity: 0; transform: translateX(12px); }
  to   { opacity: 1; transform: translateX(0); }
}

@keyframes vel-slide-right {
  from { opacity: 0; transform: translateX(-12px); }
  to   { opacity: 1; transform: translateX(0); }
}

@keyframes vel-scale-in {
  from { opacity: 0; transform: scale(0.92); }
  to   { opacity: 1; transform: scale(1); }
}

@keyframes vel-scale-out {
  from { opacity: 1; transform: scale(1); }
  to   { opacity: 0; transform: scale(0.92); }
}

@keyframes vel-shake {
  0%, 100% { transform: translateX(0); }
  20%      { transform: translateX(-6px); }
  40%      { transform: translateX(6px); }
  60%      { transform: translateX(-4px); }
  80%      { transform: translateX(4px); }
}

@keyframes vel-glow-pulse {
  0%, 100% { box-shadow: var(--vel-glow-primary); }
  50%      { box-shadow: none; }
}

@keyframes vel-shimmer {
  0%   { background-position: -200% center; }
  100% { background-position: 200% center; }
}

/* ─── Animation Classes ───────────────────── */

.vel-animate-spin    { animation: vel-spin    1s linear infinite; }

.vel-animate-ping    { animation: vel-ping    1s cubic-bezier(0, 0, 0.2, 1) infinite; }

.vel-animate-pulse   { animation: vel-pulse   2s cubic-bezier(0.4, 0, 0.6, 1) infinite; }

.vel-animate-bounce  { animation: vel-bounce  1s infinite; }

.vel-animate-fade-in    { animation: vel-fade-in  200ms var(--vel-ease-out) both; }

.vel-animate-fade-out   { animation: vel-fade-out 200ms var(--vel-ease-in)  both; }

.vel-animate-slide-up   { animation: vel-slide-up   250ms var(--vel-ease-out) both; }

.vel-animate-slide-down { animation: vel-slide-down 250ms var(--vel-ease-out) both; }

.vel-animate-slide-left { animation: vel-slide-left 250ms var(--vel-ease-out) both; }

.vel-animate-slide-right{ animation: vel-slide-right 250ms var(--vel-ease-out) both; }

.vel-animate-scale-in   { animation: vel-scale-in  200ms var(--vel-ease-spring) both; }

.vel-animate-scale-out  { animation: vel-scale-out 200ms var(--vel-ease-in)     both; }

.vel-animate-shake      { animation: vel-shake 400ms var(--vel-ease-in-out) both; }

.vel-animate-none { animation: none; }

/* ─── Duration Modifiers ──────────────────── */

.vel-duration-75   { animation-duration: 75ms; }

.vel-duration-100  { animation-duration: 100ms; }

.vel-duration-150  { animation-duration: 150ms; }

.vel-duration-200  { animation-duration: 200ms; }

.vel-duration-300  { animation-duration: 300ms; }

.vel-duration-500  { animation-duration: 500ms; }

.vel-duration-700  { animation-duration: 700ms; }

.vel-duration-1000 { animation-duration: 1000ms; }

/* ─── Delay Modifiers ─────────────────────── */

.vel-delay-75   { animation-delay: 75ms; }

.vel-delay-100  { animation-delay: 100ms; }

.vel-delay-150  { animation-delay: 150ms; }

.vel-delay-200  { animation-delay: 200ms; }

.vel-delay-300  { animation-delay: 300ms; }

.vel-delay-500  { animation-delay: 500ms; }

.vel-delay-700  { animation-delay: 700ms; }

.vel-delay-1000 { animation-delay: 1000ms; }

/* ─── Shimmer (loading skeleton) ──────────── */

.vel-shimmer {
  background: linear-gradient(
    90deg,
    var(--vel-surface-2) 25%,
    var(--vel-surface-3) 50%,
    var(--vel-surface-2) 75%
  );
  background-size: 200% 100%;
  animation: vel-shimmer 1.5s infinite;
}

/* ─── Transform Utilities ─────────────────── */

.vel-scale-95  { transform: scale(0.95); }

.vel-scale-100 { transform: scale(1); }

.vel-scale-105 { transform: scale(1.05); }

.vel-scale-110 { transform: scale(1.1); }

.vel-scale-125 { transform: scale(1.25); }

.vel-scale-150 { transform: scale(1.5); }

.vel-rotate-0   { transform: rotate(0deg); }

.vel-rotate-1   { transform: rotate(1deg); }

.vel-rotate-2   { transform: rotate(2deg); }

.vel-rotate-3   { transform: rotate(3deg); }

.vel-rotate-6   { transform: rotate(6deg); }

.vel-rotate-12  { transform: rotate(12deg); }

.vel-rotate-45  { transform: rotate(45deg); }

.vel-rotate-90  { transform: rotate(90deg); }

.vel-rotate-180 { transform: rotate(180deg); }

.-vel-rotate-1   { transform: rotate(-1deg); }

.-vel-rotate-2   { transform: rotate(-2deg); }

.-vel-rotate-3   { transform: rotate(-3deg); }

.-vel-rotate-6   { transform: rotate(-6deg); }

.-vel-rotate-12  { transform: rotate(-12deg); }

.-vel-rotate-45  { transform: rotate(-45deg); }

.-vel-rotate-90  { transform: rotate(-90deg); }

.-vel-rotate-180 { transform: rotate(-180deg); }

.vel-translate-y-0  { transform: translateY(0); }

.vel-translate-y-1  { transform: translateY(0.25rem); }

.vel-translate-y-2  { transform: translateY(0.5rem); }

.vel-translate-y-4  { transform: translateY(1rem); }

.-vel-translate-y-1 { transform: translateY(-0.25rem); }

.-vel-translate-y-2 { transform: translateY(-0.5rem); }

.-vel-translate-y-4 { transform: translateY(-1rem); }

/* VeloraCSS — Transitions & Transforms */

/* Transition property */

.vel-transition-none    { transition-property: none; }

.vel-transition-all     { transition-property: all; transition-timing-function: var(--vel-ease-in-out); transition-duration: var(--vel-duration-150); }

.vel-transition         { transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter; transition-timing-function: var(--vel-ease-in-out); transition-duration: var(--vel-duration-150); }

.vel-transition-colors  { transition-property: color, background-color, border-color, text-decoration-color, fill, stroke; transition-timing-function: var(--vel-ease-in-out); transition-duration: var(--vel-duration-150); }

.vel-transition-opacity { transition-property: opacity; transition-timing-function: var(--vel-ease-in-out); transition-duration: var(--vel-duration-150); }

.vel-transition-shadow  { transition-property: box-shadow; transition-timing-function: var(--vel-ease-in-out); transition-duration: var(--vel-duration-150); }

.vel-transition-transform{ transition-property: transform; transition-timing-function: var(--vel-ease-in-out); transition-duration: var(--vel-duration-150); }

/* Duration */

.vel-duration-0    { transition-duration: 0ms; }

.vel-duration-75   { transition-duration: var(--vel-duration-75); }

.vel-duration-100  { transition-duration: var(--vel-duration-100); }

.vel-duration-150  { transition-duration: var(--vel-duration-150); }

.vel-duration-200  { transition-duration: var(--vel-duration-200); }

.vel-duration-300  { transition-duration: var(--vel-duration-300); }

.vel-duration-500  { transition-duration: var(--vel-duration-500); }

.vel-duration-700  { transition-duration: var(--vel-duration-700); }

.vel-duration-1000 { transition-duration: var(--vel-duration-1000); }

/* Timing function */

.vel-ease-linear  { transition-timing-function: var(--vel-ease-linear); }

.vel-ease-in      { transition-timing-function: var(--vel-ease-in); }

.vel-ease-out     { transition-timing-function: var(--vel-ease-out); }

.vel-ease-in-out  { transition-timing-function: var(--vel-ease-in-out); }

/* Delay */

.vel-delay-0    { transition-delay: 0ms; }

.vel-delay-75   { transition-delay: 75ms; }

.vel-delay-100  { transition-delay: 100ms; }

.vel-delay-150  { transition-delay: 150ms; }

.vel-delay-200  { transition-delay: 200ms; }

.vel-delay-300  { transition-delay: 300ms; }

.vel-delay-500  { transition-delay: 500ms; }

.vel-delay-700  { transition-delay: 700ms; }

.vel-delay-1000 { transition-delay: 1000ms; }

/* ─── Transform (compose multiple transforms) ── */

.vel-transform {
  transform:
    var(--vel-transform-translate-x)
    var(--vel-transform-translate-y)
    var(--vel-transform-rotate)
    var(--vel-transform-scale-x)
    var(--vel-transform-scale-y)
    var(--vel-transform-skew-x)
    var(--vel-transform-skew-y);
}

.vel-transform-none {
  transform: none;
  --vel-transform-translate-x: translateX(0);
  --vel-transform-translate-y: translateY(0);
  --vel-transform-rotate: rotate(0deg);
  --vel-transform-scale-x: scaleX(1);
  --vel-transform-scale-y: scaleY(1);
  --vel-transform-skew-x: skewX(0deg);
  --vel-transform-skew-y: skewY(0deg);
}

/* Scale */

.vel-scale-0   { --vel-transform-scale-x: scaleX(0);    --vel-transform-scale-y: scaleY(0);    transform: var(--vel-transform-translate-x) var(--vel-transform-translate-y) var(--vel-transform-rotate) var(--vel-transform-scale-x) var(--vel-transform-scale-y) var(--vel-transform-skew-x) var(--vel-transform-skew-y); }

.vel-scale-50  { --vel-transform-scale-x: scaleX(.5);   --vel-transform-scale-y: scaleY(.5);   transform: var(--vel-transform-translate-x) var(--vel-transform-translate-y) var(--vel-transform-rotate) var(--vel-transform-scale-x) var(--vel-transform-scale-y) var(--vel-transform-skew-x) var(--vel-transform-skew-y); }

.vel-scale-75  { --vel-transform-scale-x: scaleX(.75);  --vel-transform-scale-y: scaleY(.75);  transform: var(--vel-transform-translate-x) var(--vel-transform-translate-y) var(--vel-transform-rotate) var(--vel-transform-scale-x) var(--vel-transform-scale-y) var(--vel-transform-skew-x) var(--vel-transform-skew-y); }

.vel-scale-90  { --vel-transform-scale-x: scaleX(.9);   --vel-transform-scale-y: scaleY(.9);   transform: var(--vel-transform-translate-x) var(--vel-transform-translate-y) var(--vel-transform-rotate) var(--vel-transform-scale-x) var(--vel-transform-scale-y) var(--vel-transform-skew-x) var(--vel-transform-skew-y); }

.vel-scale-95  { --vel-transform-scale-x: scaleX(.95);  --vel-transform-scale-y: scaleY(.95);  transform: var(--vel-transform-translate-x) var(--vel-transform-translate-y) var(--vel-transform-rotate) var(--vel-transform-scale-x) var(--vel-transform-scale-y) var(--vel-transform-skew-x) var(--vel-transform-skew-y); }

.vel-scale-100 { --vel-transform-scale-x: scaleX(1);    --vel-transform-scale-y: scaleY(1);    transform: var(--vel-transform-translate-x) var(--vel-transform-translate-y) var(--vel-transform-rotate) var(--vel-transform-scale-x) var(--vel-transform-scale-y) var(--vel-transform-skew-x) var(--vel-transform-skew-y); }

.vel-scale-105 { --vel-transform-scale-x: scaleX(1.05); --vel-transform-scale-y: scaleY(1.05); transform: var(--vel-transform-translate-x) var(--vel-transform-translate-y) var(--vel-transform-rotate) var(--vel-transform-scale-x) var(--vel-transform-scale-y) var(--vel-transform-skew-x) var(--vel-transform-skew-y); }

.vel-scale-110 { --vel-transform-scale-x: scaleX(1.1);  --vel-transform-scale-y: scaleY(1.1);  transform: var(--vel-transform-translate-x) var(--vel-transform-translate-y) var(--vel-transform-rotate) var(--vel-transform-scale-x) var(--vel-transform-scale-y) var(--vel-transform-skew-x) var(--vel-transform-skew-y); }

.vel-scale-125 { --vel-transform-scale-x: scaleX(1.25); --vel-transform-scale-y: scaleY(1.25); transform: var(--vel-transform-translate-x) var(--vel-transform-translate-y) var(--vel-transform-rotate) var(--vel-transform-scale-x) var(--vel-transform-scale-y) var(--vel-transform-skew-x) var(--vel-transform-skew-y); }

.vel-scale-150 { --vel-transform-scale-x: scaleX(1.5);  --vel-transform-scale-y: scaleY(1.5);  transform: var(--vel-transform-translate-x) var(--vel-transform-translate-y) var(--vel-transform-rotate) var(--vel-transform-scale-x) var(--vel-transform-scale-y) var(--vel-transform-skew-x) var(--vel-transform-skew-y); }

/* Rotate */

.vel-rotate-0    { --vel-transform-rotate: rotate(0deg);    transform: var(--vel-transform-translate-x) var(--vel-transform-translate-y) var(--vel-transform-rotate) var(--vel-transform-scale-x) var(--vel-transform-scale-y) var(--vel-transform-skew-x) var(--vel-transform-skew-y); }

.vel-rotate-1    { --vel-transform-rotate: rotate(1deg);    transform: var(--vel-transform-translate-x) var(--vel-transform-translate-y) var(--vel-transform-rotate) var(--vel-transform-scale-x) var(--vel-transform-scale-y) var(--vel-transform-skew-x) var(--vel-transform-skew-y); }

.vel-rotate-2    { --vel-transform-rotate: rotate(2deg);    transform: var(--vel-transform-translate-x) var(--vel-transform-translate-y) var(--vel-transform-rotate) var(--vel-transform-scale-x) var(--vel-transform-scale-y) var(--vel-transform-skew-x) var(--vel-transform-skew-y); }

.vel-rotate-3    { --vel-transform-rotate: rotate(3deg);    transform: var(--vel-transform-translate-x) var(--vel-transform-translate-y) var(--vel-transform-rotate) var(--vel-transform-scale-x) var(--vel-transform-scale-y) var(--vel-transform-skew-x) var(--vel-transform-skew-y); }

.vel-rotate-6    { --vel-transform-rotate: rotate(6deg);    transform: var(--vel-transform-translate-x) var(--vel-transform-translate-y) var(--vel-transform-rotate) var(--vel-transform-scale-x) var(--vel-transform-scale-y) var(--vel-transform-skew-x) var(--vel-transform-skew-y); }

.vel-rotate-12   { --vel-transform-rotate: rotate(12deg);   transform: var(--vel-transform-translate-x) var(--vel-transform-translate-y) var(--vel-transform-rotate) var(--vel-transform-scale-x) var(--vel-transform-scale-y) var(--vel-transform-skew-x) var(--vel-transform-skew-y); }

.vel-rotate-45   { --vel-transform-rotate: rotate(45deg);   transform: var(--vel-transform-translate-x) var(--vel-transform-translate-y) var(--vel-transform-rotate) var(--vel-transform-scale-x) var(--vel-transform-scale-y) var(--vel-transform-skew-x) var(--vel-transform-skew-y); }

.vel-rotate-90   { --vel-transform-rotate: rotate(90deg);   transform: var(--vel-transform-translate-x) var(--vel-transform-translate-y) var(--vel-transform-rotate) var(--vel-transform-scale-x) var(--vel-transform-scale-y) var(--vel-transform-skew-x) var(--vel-transform-skew-y); }

.vel-rotate-180  { --vel-transform-rotate: rotate(180deg);  transform: var(--vel-transform-translate-x) var(--vel-transform-translate-y) var(--vel-transform-rotate) var(--vel-transform-scale-x) var(--vel-transform-scale-y) var(--vel-transform-skew-x) var(--vel-transform-skew-y); }

.-vel-rotate-1   { --vel-transform-rotate: rotate(-1deg);   transform: var(--vel-transform-translate-x) var(--vel-transform-translate-y) var(--vel-transform-rotate) var(--vel-transform-scale-x) var(--vel-transform-scale-y) var(--vel-transform-skew-x) var(--vel-transform-skew-y); }

.-vel-rotate-2   { --vel-transform-rotate: rotate(-2deg);   transform: var(--vel-transform-translate-x) var(--vel-transform-translate-y) var(--vel-transform-rotate) var(--vel-transform-scale-x) var(--vel-transform-scale-y) var(--vel-transform-skew-x) var(--vel-transform-skew-y); }

.-vel-rotate-3   { --vel-transform-rotate: rotate(-3deg);   transform: var(--vel-transform-translate-x) var(--vel-transform-translate-y) var(--vel-transform-rotate) var(--vel-transform-scale-x) var(--vel-transform-scale-y) var(--vel-transform-skew-x) var(--vel-transform-skew-y); }

.-vel-rotate-6   { --vel-transform-rotate: rotate(-6deg);   transform: var(--vel-transform-translate-x) var(--vel-transform-translate-y) var(--vel-transform-rotate) var(--vel-transform-scale-x) var(--vel-transform-scale-y) var(--vel-transform-skew-x) var(--vel-transform-skew-y); }

.-vel-rotate-12  { --vel-transform-rotate: rotate(-12deg);  transform: var(--vel-transform-translate-x) var(--vel-transform-translate-y) var(--vel-transform-rotate) var(--vel-transform-scale-x) var(--vel-transform-scale-y) var(--vel-transform-skew-x) var(--vel-transform-skew-y); }

.-vel-rotate-45  { --vel-transform-rotate: rotate(-45deg);  transform: var(--vel-transform-translate-x) var(--vel-transform-translate-y) var(--vel-transform-rotate) var(--vel-transform-scale-x) var(--vel-transform-scale-y) var(--vel-transform-skew-x) var(--vel-transform-skew-y); }

.-vel-rotate-90  { --vel-transform-rotate: rotate(-90deg);  transform: var(--vel-transform-translate-x) var(--vel-transform-translate-y) var(--vel-transform-rotate) var(--vel-transform-scale-x) var(--vel-transform-scale-y) var(--vel-transform-skew-x) var(--vel-transform-skew-y); }

.-vel-rotate-180 { --vel-transform-rotate: rotate(-180deg); transform: var(--vel-transform-translate-x) var(--vel-transform-translate-y) var(--vel-transform-rotate) var(--vel-transform-scale-x) var(--vel-transform-scale-y) var(--vel-transform-skew-x) var(--vel-transform-skew-y); }

/* Translate X */

.vel-translate-x-0    { --vel-transform-translate-x: translateX(0);       transform: var(--vel-transform-translate-x) var(--vel-transform-translate-y) var(--vel-transform-rotate) var(--vel-transform-scale-x) var(--vel-transform-scale-y) var(--vel-transform-skew-x) var(--vel-transform-skew-y); }

.vel-translate-x-px   { --vel-transform-translate-x: translateX(1px);     transform: var(--vel-transform-translate-x) var(--vel-transform-translate-y) var(--vel-transform-rotate) var(--vel-transform-scale-x) var(--vel-transform-scale-y) var(--vel-transform-skew-x) var(--vel-transform-skew-y); }

.vel-translate-x-1    { --vel-transform-translate-x: translateX(0.25rem); transform: var(--vel-transform-translate-x) var(--vel-transform-translate-y) var(--vel-transform-rotate) var(--vel-transform-scale-x) var(--vel-transform-scale-y) var(--vel-transform-skew-x) var(--vel-transform-skew-y); }

.vel-translate-x-2    { --vel-transform-translate-x: translateX(0.5rem);  transform: var(--vel-transform-translate-x) var(--vel-transform-translate-y) var(--vel-transform-rotate) var(--vel-transform-scale-x) var(--vel-transform-scale-y) var(--vel-transform-skew-x) var(--vel-transform-skew-y); }

.vel-translate-x-3    { --vel-transform-translate-x: translateX(0.75rem); transform: var(--vel-transform-translate-x) var(--vel-transform-translate-y) var(--vel-transform-rotate) var(--vel-transform-scale-x) var(--vel-transform-scale-y) var(--vel-transform-skew-x) var(--vel-transform-skew-y); }

.vel-translate-x-4    { --vel-transform-translate-x: translateX(1rem);    transform: var(--vel-transform-translate-x) var(--vel-transform-translate-y) var(--vel-transform-rotate) var(--vel-transform-scale-x) var(--vel-transform-scale-y) var(--vel-transform-skew-x) var(--vel-transform-skew-y); }

.vel-translate-x-6    { --vel-transform-translate-x: translateX(1.5rem);  transform: var(--vel-transform-translate-x) var(--vel-transform-translate-y) var(--vel-transform-rotate) var(--vel-transform-scale-x) var(--vel-transform-scale-y) var(--vel-transform-skew-x) var(--vel-transform-skew-y); }

.vel-translate-x-8    { --vel-transform-translate-x: translateX(2rem);    transform: var(--vel-transform-translate-x) var(--vel-transform-translate-y) var(--vel-transform-rotate) var(--vel-transform-scale-x) var(--vel-transform-scale-y) var(--vel-transform-skew-x) var(--vel-transform-skew-y); }

.vel-translate-x-full { --vel-transform-translate-x: translateX(100%);    transform: var(--vel-transform-translate-x) var(--vel-transform-translate-y) var(--vel-transform-rotate) var(--vel-transform-scale-x) var(--vel-transform-scale-y) var(--vel-transform-skew-x) var(--vel-transform-skew-y); }

.vel-translate-x-1\\/2 { --vel-transform-translate-x: translateX(50%);     transform: var(--vel-transform-translate-x) var(--vel-transform-translate-y) var(--vel-transform-rotate) var(--vel-transform-scale-x) var(--vel-transform-scale-y) var(--vel-transform-skew-x) var(--vel-transform-skew-y); }

.-vel-translate-x-1    { --vel-transform-translate-x: translateX(-0.25rem); transform: var(--vel-transform-translate-x) var(--vel-transform-translate-y) var(--vel-transform-rotate) var(--vel-transform-scale-x) var(--vel-transform-scale-y) var(--vel-transform-skew-x) var(--vel-transform-skew-y); }

.-vel-translate-x-2    { --vel-transform-translate-x: translateX(-0.5rem);  transform: var(--vel-transform-translate-x) var(--vel-transform-translate-y) var(--vel-transform-rotate) var(--vel-transform-scale-x) var(--vel-transform-scale-y) var(--vel-transform-skew-x) var(--vel-transform-skew-y); }

.-vel-translate-x-4    { --vel-transform-translate-x: translateX(-1rem);    transform: var(--vel-transform-translate-x) var(--vel-transform-translate-y) var(--vel-transform-rotate) var(--vel-transform-scale-x) var(--vel-transform-scale-y) var(--vel-transform-skew-x) var(--vel-transform-skew-y); }

.-vel-translate-x-full { --vel-transform-translate-x: translateX(-100%);    transform: var(--vel-transform-translate-x) var(--vel-transform-translate-y) var(--vel-transform-rotate) var(--vel-transform-scale-x) var(--vel-transform-scale-y) var(--vel-transform-skew-x) var(--vel-transform-skew-y); }

.-vel-translate-x-1\\/2 { --vel-transform-translate-x: translateX(-50%);     transform: var(--vel-transform-translate-x) var(--vel-transform-translate-y) var(--vel-transform-rotate) var(--vel-transform-scale-x) var(--vel-transform-scale-y) var(--vel-transform-skew-x) var(--vel-transform-skew-y); }

/* Translate Y */

.vel-translate-y-0    { --vel-transform-translate-y: translateY(0);       transform: var(--vel-transform-translate-x) var(--vel-transform-translate-y) var(--vel-transform-rotate) var(--vel-transform-scale-x) var(--vel-transform-scale-y) var(--vel-transform-skew-x) var(--vel-transform-skew-y); }

.vel-translate-y-px   { --vel-transform-translate-y: translateY(1px);     transform: var(--vel-transform-translate-x) var(--vel-transform-translate-y) var(--vel-transform-rotate) var(--vel-transform-scale-x) var(--vel-transform-scale-y) var(--vel-transform-skew-x) var(--vel-transform-skew-y); }

.vel-translate-y-1    { --vel-transform-translate-y: translateY(0.25rem); transform: var(--vel-transform-translate-x) var(--vel-transform-translate-y) var(--vel-transform-rotate) var(--vel-transform-scale-x) var(--vel-transform-scale-y) var(--vel-transform-skew-x) var(--vel-transform-skew-y); }

.vel-translate-y-2    { --vel-transform-translate-y: translateY(0.5rem);  transform: var(--vel-transform-translate-x) var(--vel-transform-translate-y) var(--vel-transform-rotate) var(--vel-transform-scale-x) var(--vel-transform-scale-y) var(--vel-transform-skew-x) var(--vel-transform-skew-y); }

.vel-translate-y-3    { --vel-transform-translate-y: translateY(0.75rem); transform: var(--vel-transform-translate-x) var(--vel-transform-translate-y) var(--vel-transform-rotate) var(--vel-transform-scale-x) var(--vel-transform-scale-y) var(--vel-transform-skew-x) var(--vel-transform-skew-y); }

.vel-translate-y-4    { --vel-transform-translate-y: translateY(1rem);    transform: var(--vel-transform-translate-x) var(--vel-transform-translate-y) var(--vel-transform-rotate) var(--vel-transform-scale-x) var(--vel-transform-scale-y) var(--vel-transform-skew-x) var(--vel-transform-skew-y); }

.vel-translate-y-6    { --vel-transform-translate-y: translateY(1.5rem);  transform: var(--vel-transform-translate-x) var(--vel-transform-translate-y) var(--vel-transform-rotate) var(--vel-transform-scale-x) var(--vel-transform-scale-y) var(--vel-transform-skew-x) var(--vel-transform-skew-y); }

.vel-translate-y-8    { --vel-transform-translate-y: translateY(2rem);    transform: var(--vel-transform-translate-x) var(--vel-transform-translate-y) var(--vel-transform-rotate) var(--vel-transform-scale-x) var(--vel-transform-scale-y) var(--vel-transform-skew-x) var(--vel-transform-skew-y); }

.vel-translate-y-full { --vel-transform-translate-y: translateY(100%);    transform: var(--vel-transform-translate-x) var(--vel-transform-translate-y) var(--vel-transform-rotate) var(--vel-transform-scale-x) var(--vel-transform-scale-y) var(--vel-transform-skew-x) var(--vel-transform-skew-y); }

.vel-translate-y-1\\/2 { --vel-transform-translate-y: translateY(50%);     transform: var(--vel-transform-translate-x) var(--vel-transform-translate-y) var(--vel-transform-rotate) var(--vel-transform-scale-x) var(--vel-transform-scale-y) var(--vel-transform-skew-x) var(--vel-transform-skew-y); }

.-vel-translate-y-1    { --vel-transform-translate-y: translateY(-0.25rem); transform: var(--vel-transform-translate-x) var(--vel-transform-translate-y) var(--vel-transform-rotate) var(--vel-transform-scale-x) var(--vel-transform-scale-y) var(--vel-transform-skew-x) var(--vel-transform-skew-y); }

.-vel-translate-y-2    { --vel-transform-translate-y: translateY(-0.5rem);  transform: var(--vel-transform-translate-x) var(--vel-transform-translate-y) var(--vel-transform-rotate) var(--vel-transform-scale-x) var(--vel-transform-scale-y) var(--vel-transform-skew-x) var(--vel-transform-skew-y); }

.-vel-translate-y-4    { --vel-transform-translate-y: translateY(-1rem);    transform: var(--vel-transform-translate-x) var(--vel-transform-translate-y) var(--vel-transform-rotate) var(--vel-transform-scale-x) var(--vel-transform-scale-y) var(--vel-transform-skew-x) var(--vel-transform-skew-y); }

.-vel-translate-y-full { --vel-transform-translate-y: translateY(-100%);    transform: var(--vel-transform-translate-x) var(--vel-transform-translate-y) var(--vel-transform-rotate) var(--vel-transform-scale-x) var(--vel-transform-scale-y) var(--vel-transform-skew-x) var(--vel-transform-skew-y); }

.-vel-translate-y-1\\/2 { --vel-transform-translate-y: translateY(-50%);     transform: var(--vel-transform-translate-x) var(--vel-transform-translate-y) var(--vel-transform-rotate) var(--vel-transform-scale-x) var(--vel-transform-scale-y) var(--vel-transform-skew-x) var(--vel-transform-skew-y); }

/* Skew */

.vel-skew-x-0  { --vel-transform-skew-x: skewX(0deg);  transform: var(--vel-transform-translate-x) var(--vel-transform-translate-y) var(--vel-transform-rotate) var(--vel-transform-scale-x) var(--vel-transform-scale-y) var(--vel-transform-skew-x) var(--vel-transform-skew-y); }

.vel-skew-x-1  { --vel-transform-skew-x: skewX(1deg);  transform: var(--vel-transform-translate-x) var(--vel-transform-translate-y) var(--vel-transform-rotate) var(--vel-transform-scale-x) var(--vel-transform-scale-y) var(--vel-transform-skew-x) var(--vel-transform-skew-y); }

.vel-skew-x-2  { --vel-transform-skew-x: skewX(2deg);  transform: var(--vel-transform-translate-x) var(--vel-transform-translate-y) var(--vel-transform-rotate) var(--vel-transform-scale-x) var(--vel-transform-scale-y) var(--vel-transform-skew-x) var(--vel-transform-skew-y); }

.vel-skew-x-3  { --vel-transform-skew-x: skewX(3deg);  transform: var(--vel-transform-translate-x) var(--vel-transform-translate-y) var(--vel-transform-rotate) var(--vel-transform-scale-x) var(--vel-transform-scale-y) var(--vel-transform-skew-x) var(--vel-transform-skew-y); }

.vel-skew-x-6  { --vel-transform-skew-x: skewX(6deg);  transform: var(--vel-transform-translate-x) var(--vel-transform-translate-y) var(--vel-transform-rotate) var(--vel-transform-scale-x) var(--vel-transform-scale-y) var(--vel-transform-skew-x) var(--vel-transform-skew-y); }

.vel-skew-x-12 { --vel-transform-skew-x: skewX(12deg); transform: var(--vel-transform-translate-x) var(--vel-transform-translate-y) var(--vel-transform-rotate) var(--vel-transform-scale-x) var(--vel-transform-scale-y) var(--vel-transform-skew-x) var(--vel-transform-skew-y); }

.vel-skew-y-0  { --vel-transform-skew-y: skewY(0deg);  transform: var(--vel-transform-translate-x) var(--vel-transform-translate-y) var(--vel-transform-rotate) var(--vel-transform-scale-x) var(--vel-transform-scale-y) var(--vel-transform-skew-x) var(--vel-transform-skew-y); }

.vel-skew-y-1  { --vel-transform-skew-y: skewY(1deg);  transform: var(--vel-transform-translate-x) var(--vel-transform-translate-y) var(--vel-transform-rotate) var(--vel-transform-scale-x) var(--vel-transform-scale-y) var(--vel-transform-skew-x) var(--vel-transform-skew-y); }

.vel-skew-y-2  { --vel-transform-skew-y: skewY(2deg);  transform: var(--vel-transform-translate-x) var(--vel-transform-translate-y) var(--vel-transform-rotate) var(--vel-transform-scale-x) var(--vel-transform-scale-y) var(--vel-transform-skew-x) var(--vel-transform-skew-y); }

.vel-skew-y-3  { --vel-transform-skew-y: skewY(3deg);  transform: var(--vel-transform-translate-x) var(--vel-transform-translate-y) var(--vel-transform-rotate) var(--vel-transform-scale-x) var(--vel-transform-scale-y) var(--vel-transform-skew-x) var(--vel-transform-skew-y); }

.vel-skew-y-6  { --vel-transform-skew-y: skewY(6deg);  transform: var(--vel-transform-translate-x) var(--vel-transform-translate-y) var(--vel-transform-rotate) var(--vel-transform-scale-x) var(--vel-transform-scale-y) var(--vel-transform-skew-x) var(--vel-transform-skew-y); }

.vel-skew-y-12 { --vel-transform-skew-y: skewY(12deg); transform: var(--vel-transform-translate-x) var(--vel-transform-translate-y) var(--vel-transform-rotate) var(--vel-transform-scale-x) var(--vel-transform-scale-y) var(--vel-transform-skew-x) var(--vel-transform-skew-y); }

/* Transform origin */

.vel-origin-center       { transform-origin: center; }

.vel-origin-top          { transform-origin: top; }

.vel-origin-top-right    { transform-origin: top right; }

.vel-origin-right        { transform-origin: right; }

.vel-origin-bottom-right { transform-origin: bottom right; }

.vel-origin-bottom       { transform-origin: bottom; }

.vel-origin-bottom-left  { transform-origin: bottom left; }

.vel-origin-left         { transform-origin: left; }

.vel-origin-top-left     { transform-origin: top left; }

/* ─── Animation shorthand (keyframes defined in animations.css) ── */

.vel-animate-slide-in { animation: vel-slide-up 0.2s ease-out; }

/* VeloraCSS — Interactivity Utilities */

/* Cursor */

.vel-cursor-auto        { cursor: auto; }

.vel-cursor-default     { cursor: default; }

.vel-cursor-pointer     { cursor: pointer; }

.vel-cursor-wait        { cursor: wait; }

.vel-cursor-text        { cursor: text; }

.vel-cursor-move        { cursor: move; }

.vel-cursor-help        { cursor: help; }

.vel-cursor-not-allowed { cursor: not-allowed; }

.vel-cursor-none        { cursor: none; }

.vel-cursor-grab        { cursor: grab; }

.vel-cursor-grabbing    { cursor: grabbing; }

.vel-cursor-crosshair   { cursor: crosshair; }

.vel-cursor-zoom-in     { cursor: zoom-in; }

.vel-cursor-zoom-out    { cursor: zoom-out; }

/* Pointer events */

.vel-pointer-events-none { pointer-events: none; }

.vel-pointer-events-auto { pointer-events: auto; }

/* User select */

.vel-select-none  { -webkit-user-select: none; -moz-user-select: none; user-select: none; }

.vel-select-text  { -webkit-user-select: text; -moz-user-select: text; user-select: text; }

.vel-select-all   { -webkit-user-select: all; -moz-user-select: all; user-select: all; }

.vel-select-auto  { -webkit-user-select: auto; -moz-user-select: auto; user-select: auto; }

/* Resize */

.vel-resize-none { resize: none; }

.vel-resize      { resize: both; }

.vel-resize-x    { resize: horizontal; }

.vel-resize-y    { resize: vertical; }

/* Scroll behavior */

.vel-scroll-auto   { scroll-behavior: auto; }

.vel-scroll-smooth { scroll-behavior: smooth; }

/* Scroll snap */

.vel-snap-none       { scroll-snap-type: none; }

.vel-snap-x          { scroll-snap-type: x var(--vel-scroll-snap-strictness, mandatory); }

.vel-snap-y          { scroll-snap-type: y var(--vel-scroll-snap-strictness, mandatory); }

.vel-snap-mandatory  { --vel-scroll-snap-strictness: mandatory; }

.vel-snap-proximity  { --vel-scroll-snap-strictness: proximity; }

.vel-snap-start      { scroll-snap-align: start; }

.vel-snap-end        { scroll-snap-align: end; }

.vel-snap-center     { scroll-snap-align: center; }

.vel-snap-align-none { scroll-snap-align: none; }

.vel-snap-always     { scroll-snap-stop: always; }

.vel-snap-normal     { scroll-snap-stop: normal; }

/* Touch action */

.vel-touch-auto        { touch-action: auto; }

.vel-touch-none        { touch-action: none; }

.vel-touch-pan-x       { touch-action: pan-x; }

.vel-touch-pan-y       { touch-action: pan-y; }

.vel-touch-pan-left    { touch-action: pan-left; }

.vel-touch-pan-right   { touch-action: pan-right; }

.vel-touch-pan-up      { touch-action: pan-up; }

.vel-touch-pan-down    { touch-action: pan-down; }

.vel-touch-pinch-zoom  { touch-action: pinch-zoom; }

.vel-touch-manipulation{ touch-action: manipulation; }

/* Will change */

.vel-will-change-auto      { will-change: auto; }

.vel-will-change-scroll    { will-change: scroll-position; }

.vel-will-change-contents  { will-change: contents; }

.vel-will-change-transform { will-change: transform; }

/* Appearance */

.vel-appearance-none { -webkit-appearance: none; -moz-appearance: none; appearance: none; }

.vel-appearance-auto { -webkit-appearance: auto; -moz-appearance: auto; appearance: auto; }

/* Color scheme */

.vel-scheme-normal { color-scheme: normal; }

.vel-scheme-light  { color-scheme: light; }

.vel-scheme-dark   { color-scheme: dark; }

/* Caret */

.vel-caret-transparent { caret-color: transparent; }

.vel-caret-primary     { caret-color: var(--vel-color-primary); }

.vel-caret-auto        { caret-color: auto; }

/* Focus ring helper */

.vel-focus-ring:focus-visible {
  outline: 2px solid var(--vel-color-primary);
  outline-offset: 2px;
}

/* Disabled state helper */

.vel-disabled {
  opacity: 0.5;
  pointer-events: none;
  cursor: not-allowed;
}

/* VeloraCSS — Divide Utilities */

/* Adds borders between direct child elements */

/* ─── Divide X (vertical line between children) */

.vel-divide-x > * + * {
  border-left-width: 1px;
  border-left-style: solid;
}

.vel-divide-x-0 > * + * { border-left-width: 0; }

.vel-divide-x-2 > * + * { border-left-width: 2px; border-left-style: solid; }

.vel-divide-x-4 > * + * { border-left-width: 4px; border-left-style: solid; }

.vel-divide-x-8 > * + * { border-left-width: 8px; border-left-style: solid; }

/* ─── Divide Y (horizontal line between children) */

.vel-divide-y > * + * {
  border-top-width: 1px;
  border-top-style: solid;
}

.vel-divide-y-0 > * + * { border-top-width: 0; }

.vel-divide-y-2 > * + * { border-top-width: 2px; border-top-style: solid; }

.vel-divide-y-4 > * + * { border-top-width: 4px; border-top-style: solid; }

.vel-divide-y-8 > * + * { border-top-width: 8px; border-top-style: solid; }

/* ─── Divide Style ──────────────────────────── */

.vel-divide-solid  > * + * { border-style: solid; }

.vel-divide-dashed > * + * { border-style: dashed; }

.vel-divide-dotted > * + * { border-style: dotted; }

.vel-divide-none   > * + * { border-style: none; }

/* ─── Divide Color ──────────────────────────── */

.vel-divide-transparent > * + * { border-color: transparent; }

.vel-divide-current     > * + * { border-color: currentColor; }

.vel-divide-white       > * + * { border-color: #ffffff; }

.vel-divide-black       > * + * { border-color: #000000; }

.vel-divide-primary   > * + * { border-color: var(--vel-color-primary); }

.vel-divide-success   > * + * { border-color: var(--vel-color-success); }

.vel-divide-danger    > * + * { border-color: var(--vel-color-danger); }

.vel-divide-warning   > * + * { border-color: var(--vel-color-warning); }

.vel-divide-info      > * + * { border-color: var(--vel-color-info); }

.vel-divide-neutral-100 > * + * { border-color: var(--vel-neutral-100); }

.vel-divide-neutral-200 > * + * { border-color: var(--vel-neutral-200); }

.vel-divide-neutral-300 > * + * { border-color: var(--vel-neutral-300); }

.vel-divide-neutral-400 > * + * { border-color: var(--vel-neutral-400); }

.vel-divide-neutral-500 > * + * { border-color: var(--vel-neutral-500); }

.vel-divide-neutral-600 > * + * { border-color: var(--vel-neutral-600); }

.vel-divide-neutral-700 > * + * { border-color: var(--vel-neutral-700); }

.vel-divide-neutral-800 > * + * { border-color: var(--vel-neutral-800); }

.vel-divide-neutral-900 > * + * { border-color: var(--vel-neutral-900); }

/* Default divide color — matches border-base token */

.vel-divide-base > * + * { border-color: var(--vel-border-base); }

/* VeloraCSS — Ring Width Utilities */

/* Box-shadow based rings for focus management and highlights */

/* Compose: vel-ring-2 vel-ring-primary vel-ring-offset-2 */

/* ─── Ring width ────────────────────────────── */

:root {
  --vel-ring-width:        0px;
  --vel-ring-color:        var(--vel-color-primary);
  --vel-ring-offset-width: 0px;
  --vel-ring-offset-color: var(--vel-surface-0);
  --vel-ring-shadow:       0 0 0 var(--vel-ring-offset-width) var(--vel-ring-offset-color),
                           0 0 0 calc(var(--vel-ring-offset-width) + var(--vel-ring-width)) var(--vel-ring-color);
}

.vel-ring-0 { --vel-ring-width: 0px;  box-shadow: var(--vel-ring-shadow); }

.vel-ring-1 { --vel-ring-width: 1px;  box-shadow: var(--vel-ring-shadow); }

.vel-ring-2 { --vel-ring-width: 2px;  box-shadow: var(--vel-ring-shadow); }

.vel-ring   { --vel-ring-width: 3px;  box-shadow: var(--vel-ring-shadow); }

.vel-ring-4 { --vel-ring-width: 4px;  box-shadow: var(--vel-ring-shadow); }

.vel-ring-8 { --vel-ring-width: 8px;  box-shadow: var(--vel-ring-shadow); }

.vel-ring-inset { --vel-ring-shadow: inset 0 0 0 var(--vel-ring-width) var(--vel-ring-color); box-shadow: var(--vel-ring-shadow); }

/* ─── Ring color ────────────────────────────── */

.vel-ring-primary     { --vel-ring-color: rgba(124, 92, 252, 0.5); }

.vel-ring-success     { --vel-ring-color: rgba(14, 203, 129, 0.5); }

.vel-ring-danger      { --vel-ring-color: rgba(240, 65, 108, 0.5); }

.vel-ring-warning     { --vel-ring-color: rgba(255, 157, 0, 0.5); }

.vel-ring-info        { --vel-ring-color: rgba(46, 189, 229, 0.5); }

.vel-ring-white       { --vel-ring-color: rgba(255, 255, 255, 0.8); }

.vel-ring-black       { --vel-ring-color: rgba(0, 0, 0, 0.8); }

.vel-ring-transparent { --vel-ring-color: transparent; }

.vel-ring-current     { --vel-ring-color: currentColor; }

.vel-ring-neutral-400 { --vel-ring-color: var(--vel-neutral-400); }

.vel-ring-neutral-500 { --vel-ring-color: var(--vel-neutral-500); }

/* ─── Ring offset width ─────────────────────── */

.vel-ring-offset-0 { --vel-ring-offset-width: 0px; }

.vel-ring-offset-1 { --vel-ring-offset-width: 1px; }

.vel-ring-offset-2 { --vel-ring-offset-width: 2px; }

.vel-ring-offset-4 { --vel-ring-offset-width: 4px; }

.vel-ring-offset-8 { --vel-ring-offset-width: 8px; }

/* ─── Ring offset color ─────────────────────── */

.vel-ring-offset-transparent { --vel-ring-offset-color: transparent; }

.vel-ring-offset-white       { --vel-ring-offset-color: #ffffff; }

.vel-ring-offset-black       { --vel-ring-offset-color: #000000; }

.vel-ring-offset-surface     { --vel-ring-offset-color: var(--vel-surface-0); }

/* VeloraCSS — SVG Fill & Stroke Utilities */

/* ─── Fill ──────────────────────────────────── */

.vel-fill-none        { fill: none; }

.vel-fill-current     { fill: currentColor; }

.vel-fill-transparent { fill: transparent; }

.vel-fill-white       { fill: #ffffff; }

.vel-fill-black       { fill: #000000; }

.vel-fill-primary     { fill: var(--vel-color-primary); }

.vel-fill-success     { fill: var(--vel-color-success); }

.vel-fill-danger      { fill: var(--vel-color-danger); }

.vel-fill-warning     { fill: var(--vel-color-warning); }

.vel-fill-info        { fill: var(--vel-color-info); }

.vel-fill-neutral-50  { fill: var(--vel-neutral-50); }

.vel-fill-neutral-100 { fill: var(--vel-neutral-100); }

.vel-fill-neutral-200 { fill: var(--vel-neutral-200); }

.vel-fill-neutral-300 { fill: var(--vel-neutral-300); }

.vel-fill-neutral-400 { fill: var(--vel-neutral-400); }

.vel-fill-neutral-500 { fill: var(--vel-neutral-500); }

.vel-fill-neutral-600 { fill: var(--vel-neutral-600); }

.vel-fill-neutral-700 { fill: var(--vel-neutral-700); }

.vel-fill-neutral-800 { fill: var(--vel-neutral-800); }

.vel-fill-neutral-900 { fill: var(--vel-neutral-900); }

.vel-fill-neutral-950 { fill: var(--vel-neutral-950); }

/* ─── Stroke ────────────────────────────────── */

.vel-stroke-none        { stroke: none; }

.vel-stroke-current     { stroke: currentColor; }

.vel-stroke-transparent { stroke: transparent; }

.vel-stroke-white       { stroke: #ffffff; }

.vel-stroke-black       { stroke: #000000; }

.vel-stroke-primary     { stroke: var(--vel-color-primary); }

.vel-stroke-success     { stroke: var(--vel-color-success); }

.vel-stroke-danger      { stroke: var(--vel-color-danger); }

.vel-stroke-warning     { stroke: var(--vel-color-warning); }

.vel-stroke-info        { stroke: var(--vel-color-info); }

.vel-stroke-neutral-400 { stroke: var(--vel-neutral-400); }

.vel-stroke-neutral-500 { stroke: var(--vel-neutral-500); }

.vel-stroke-neutral-600 { stroke: var(--vel-neutral-600); }

/* ─── Stroke Width ──────────────────────────── */

.vel-stroke-0 { stroke-width: 0; }

.vel-stroke-1 { stroke-width: 1; }

.vel-stroke-2 { stroke-width: 2; }

.vel-stroke-3 { stroke-width: 3; }

/* Components */

/* VeloraCSS — Button Component */

.vel-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--vel-space-2);
  padding: var(--vel-space-2) var(--vel-space-5);
  font-size: var(--vel-text-sm);
  font-weight: 600;
  line-height: 1.25rem;
  letter-spacing: 0.01em;
  border-radius: var(--vel-radius-lg);
  border: 1px solid transparent;
  cursor: pointer;
  text-decoration: none;
  white-space: nowrap;
  transition: background 150ms var(--vel-ease-out),
              box-shadow 200ms var(--vel-ease-out),
              transform 150ms var(--vel-ease-spring),
              filter 150ms ease,
              border-color 150ms ease,
              opacity 150ms ease;
  -webkit-user-select: none;
     -moz-user-select: none;
          user-select: none;
  vertical-align: middle;
  position: relative;
  overflow: hidden;
}

.vel-btn:focus-visible {
  outline: none;
  box-shadow: var(--vel-ring-primary);
}

.vel-btn:disabled,
.vel-btn.vel-btn-disabled {
  opacity: 0.45;
  pointer-events: none;
  cursor: not-allowed;
}

/* ─── Primary ─────────────────────────────── */

.vel-btn-primary {
  background: var(--vel-gradient-primary);
  color: #ffffff;
  border-color: transparent;
}

.vel-btn-primary:hover {
  box-shadow: 0 4px 14px rgba(124, 92, 252, 0.4);
  transform: translateY(-1px);
  filter: brightness(1.08);
}

.vel-btn-primary:active {
  transform: translateY(0);
  filter: brightness(0.95);
  box-shadow: none;
}

/* ─── Secondary ───────────────────────────── */

.vel-btn-secondary {
  background: var(--vel-gradient-secondary);
  color: #ffffff;
  border-color: transparent;
}

.vel-btn-secondary:hover {
  transform: translateY(-1px);
  filter: brightness(1.1);
  box-shadow: 0 4px 12px rgba(79, 110, 156, 0.35);
}

.vel-btn-secondary:active {
  transform: translateY(0);
  filter: brightness(0.95);
  box-shadow: none;
}

/* ─── Success ─────────────────────────────── */

.vel-btn-success {
  background: var(--vel-gradient-success);
  color: #ffffff;
  border-color: transparent;
}

.vel-btn-success:hover {
  box-shadow: 0 4px 14px rgba(14, 203, 129, 0.4);
  transform: translateY(-1px);
  filter: brightness(1.08);
}

.vel-btn-success:active {
  transform: translateY(0);
  filter: brightness(0.95);
  box-shadow: none;
}

/* ─── Danger ──────────────────────────────── */

.vel-btn-danger {
  background: var(--vel-gradient-danger);
  color: #ffffff;
  border-color: transparent;
}

.vel-btn-danger:hover {
  box-shadow: 0 4px 14px rgba(240, 65, 108, 0.4);
  transform: translateY(-1px);
  filter: brightness(1.08);
}

.vel-btn-danger:active {
  transform: translateY(0);
  filter: brightness(0.95);
  box-shadow: none;
}

/* ─── Warning ─────────────────────────────── */

.vel-btn-warning {
  background: var(--vel-gradient-warning);
  color: #1c1200;
  border-color: transparent;
}

.vel-btn-warning:hover {
  box-shadow: 0 4px 14px rgba(255, 157, 0, 0.35);
  transform: translateY(-1px);
  filter: brightness(1.08);
}

.vel-btn-warning:active {
  transform: translateY(0);
  filter: brightness(0.95);
  box-shadow: none;
}

/* ─── Info ────────────────────────────────── */

.vel-btn-info {
  background: var(--vel-gradient-info);
  color: #ffffff;
  border-color: transparent;
}

.vel-btn-info:hover {
  box-shadow: 0 4px 14px rgba(46, 189, 229, 0.4);
  transform: translateY(-1px);
  filter: brightness(1.08);
}

.vel-btn-info:active {
  transform: translateY(0);
  filter: brightness(0.95);
  box-shadow: none;
}

/* ─── Outline Variants ────────────────────── */

.vel-btn-outline-primary {
  background: transparent;
  color: var(--vel-primary-400);
  border-color: var(--vel-primary-500);
  box-shadow: inset 0 0 0 0 rgba(124, 92, 252, 0);
}

.vel-btn-outline-primary:hover {
  background: rgba(124, 92, 252, 0.12);
  box-shadow: var(--vel-glow-sm-primary);
  border-color: var(--vel-primary-400);
}

.vel-btn-outline-secondary {
  background: transparent;
  color: var(--vel-secondary-400);
  border-color: var(--vel-secondary-500);
}

.vel-btn-outline-secondary:hover {
  background: rgba(79, 110, 156, 0.12);
}

.vel-btn-outline-success {
  background: transparent;
  color: var(--vel-success-400);
  border-color: var(--vel-success-400);
}

.vel-btn-outline-success:hover {
  background: rgba(14, 203, 129, 0.12);
  box-shadow: var(--vel-glow-sm-success);
}

.vel-btn-outline-danger {
  background: transparent;
  color: var(--vel-danger-400);
  border-color: var(--vel-danger-500);
}

.vel-btn-outline-danger:hover {
  background: rgba(240, 65, 108, 0.12);
  box-shadow: var(--vel-glow-sm-danger);
}

.vel-btn-outline-warning {
  background: transparent;
  color: var(--vel-warning-400);
  border-color: var(--vel-warning-500);
}

.vel-btn-outline-warning:hover {
  background: rgba(255, 157, 0, 0.1);
  box-shadow: var(--vel-glow-sm-warning);
}

.vel-btn-outline-info {
  background: transparent;
  color: var(--vel-info-400);
  border-color: var(--vel-info-400);
}

.vel-btn-outline-info:hover {
  background: rgba(46, 189, 229, 0.1);
  box-shadow: var(--vel-glow-sm-info);
}

/* ─── Ghost ───────────────────────────────── */

.vel-btn-ghost {
  background: transparent;
  color: var(--vel-color-muted);
  border-color: transparent;
}

.vel-btn-ghost:hover {
  background: var(--vel-surface-3);
  color: var(--vel-color-text);
}

/* ─── Link ────────────────────────────────── */

.vel-btn-link {
  background: transparent;
  color: var(--vel-primary-400);
  border-color: transparent;
  padding-left: 0;
  padding-right: 0;
  box-shadow: none;
}

.vel-btn-link:hover {
  text-decoration: underline;
  text-underline-offset: 3px;
}

/* ─── Glow (filled + glow always on) ─────── */

.vel-btn-glow-primary {
  background: var(--vel-gradient-primary);
  color: #ffffff;
  border-color: transparent;
  box-shadow: var(--vel-glow-primary);
}

.vel-btn-glow-primary:hover {
  filter: brightness(1.15);
  transform: translateY(-1px);
}

/* ─── Sizes ───────────────────────────────── */

.vel-btn-xs {
  padding: var(--vel-space-1) var(--vel-space-3);
  font-size: var(--vel-text-xs);
  line-height: 1rem;
  border-radius: var(--vel-radius-md);
}

.vel-btn-sm {
  padding: calc(var(--vel-space-1) + 2px) var(--vel-space-4);
  font-size: var(--vel-text-sm);
  line-height: 1.25rem;
}

.vel-btn-lg {
  padding: var(--vel-space-3) var(--vel-space-7);
  font-size: var(--vel-text-base);
  line-height: 1.5rem;
  border-radius: var(--vel-radius-xl);
}

.vel-btn-xl {
  padding: var(--vel-space-4) var(--vel-space-9);
  font-size: var(--vel-text-lg);
  line-height: 1.75rem;
  border-radius: var(--vel-radius-xl);
}

/* ─── Block ───────────────────────────────── */

.vel-btn-block {
  display: flex;
  width: 100%;
}

/* ─── Icon button ─────────────────────────── */

.vel-btn-icon {
  padding: var(--vel-space-2);
  aspect-ratio: 1;
}

.vel-btn-icon.vel-btn-sm { padding: var(--vel-space-1); }

.vel-btn-icon.vel-btn-lg { padding: var(--vel-space-3); }

/* ─── Loading state ───────────────────────── */

.vel-btn-loading {
  pointer-events: none;
  opacity: 0.75;
}

.vel-btn-loading::after {
  content: '';
  display: inline-block;
  width: 0.8em;
  height: 0.8em;
  margin-left: var(--vel-space-2);
  border: 2px solid currentColor;
  border-right-color: transparent;
  border-radius: 50%;
  animation: vel-spin 0.6s linear infinite;
}

/* VeloraCSS — Card Component */

.vel-card {
  background-color: var(--vel-surface-2);
  border-radius: var(--vel-radius-2xl);
  border: 1px solid var(--vel-border-base);
  box-shadow: 0 4px 16px rgb(0 0 0 / 0.35), 0 1px 4px rgb(0 0 0 / 0.25);
  overflow: hidden;
}

.vel-card-header {
  padding: var(--vel-space-4) var(--vel-space-6);
  border-bottom: 1px solid var(--vel-border-base);
  font-weight: 600;
  font-size: var(--vel-text-base);
  color: var(--vel-color-text);
}

.vel-card-body {
  padding: var(--vel-space-6);
}

.vel-card-footer {
  padding: var(--vel-space-4) var(--vel-space-6);
  border-top: 1px solid var(--vel-border-base);
  background-color: var(--vel-surface-1);
}

.vel-card-img-top {
  width: 100%;
  height: auto;
  display: block;
}

.vel-card-img-bottom {
  width: 100%;
  height: auto;
  display: block;
  border-bottom-left-radius: calc(var(--vel-radius-2xl) - 1px);
  border-bottom-right-radius: calc(var(--vel-radius-2xl) - 1px);
}

/* ─── Flat ────────────────────────────────── */

.vel-card-flat {
  background-color: var(--vel-surface-2);
  border-radius: var(--vel-radius-2xl);
  border: 1px solid var(--vel-border-base);
  box-shadow: none;
  overflow: hidden;
}

/* ─── Elevated ────────────────────────────── */

.vel-card-elevated {
  background-color: var(--vel-surface-2);
  border-radius: var(--vel-radius-2xl);
  border: none;
  box-shadow: 0 12px 40px -8px rgb(0 0 0 / 0.6), 0 4px 12px -4px rgb(0 0 0 / 0.4);
  overflow: hidden;
}

/* ─── Filled ──────────────────────────────── */

.vel-card-filled {
  background-color: var(--vel-surface-3);
  border-radius: var(--vel-radius-2xl);
  border: 1px solid var(--vel-border-base);
  box-shadow: none;
  overflow: hidden;
}

/* ─── Glass ───────────────────────────────── */

.vel-card-glass {
  background: rgba(17, 24, 39, 0.6);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border-radius: var(--vel-radius-2xl);
  border: 1px solid rgba(255, 255, 255, 0.08);
  box-shadow: 0 8px 32px rgb(0 0 0 / 0.4);
  overflow: hidden;
}

/* ─── Gradient border ─────────────────────── */

.vel-card-gradient {
  background-color: var(--vel-surface-2);
  border-radius: var(--vel-radius-2xl);
  border: 1px solid transparent;
  background-clip: padding-box;
  box-shadow: 0 4px 16px rgb(0 0 0 / 0.35);
  overflow: hidden;
  position: relative;
}

.vel-card-gradient::before {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: var(--vel-radius-2xl);
  padding: 1px;
  background: var(--vel-gradient-primary);
  -webkit-mask: linear-gradient(#fff 0 0) content-box,
                linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  pointer-events: none;
}

/* ─── Brand Variants ──────────────────────── */

.vel-card-primary {
  background: linear-gradient(135deg, rgba(124, 92, 252, 0.2) 0%, rgba(105, 65, 232, 0.15) 100%);
  border-color: rgba(124, 92, 252, 0.35);
  box-shadow: 0 4px 24px rgba(124, 92, 252, 0.2);
}

.vel-card-primary .vel-card-header,
.vel-card-primary .vel-card-footer {
  border-color: rgba(124, 92, 252, 0.25);
}

.vel-card-primary .vel-card-footer {
  background-color: rgba(124, 92, 252, 0.08);
}

.vel-card-success {
  background: linear-gradient(135deg, rgba(14, 203, 129, 0.18) 0%, rgba(6, 179, 110, 0.12) 100%);
  border-color: rgba(14, 203, 129, 0.3);
  box-shadow: 0 4px 24px rgba(14, 203, 129, 0.15);
}

.vel-card-danger {
  background: linear-gradient(135deg, rgba(240, 65, 108, 0.18) 0%, rgba(212, 46, 88, 0.12) 100%);
  border-color: rgba(240, 65, 108, 0.3);
  box-shadow: 0 4px 24px rgba(240, 65, 108, 0.15);
}

.vel-card-warning {
  background: linear-gradient(135deg, rgba(255, 157, 0, 0.16) 0%, rgba(224, 128, 0, 0.1) 100%);
  border-color: rgba(255, 157, 0, 0.28);
  box-shadow: 0 4px 24px rgba(255, 157, 0, 0.12);
}

.vel-card-info {
  background: linear-gradient(135deg, rgba(46, 189, 229, 0.16) 0%, rgba(26, 165, 204, 0.1) 100%);
  border-color: rgba(46, 189, 229, 0.28);
  box-shadow: 0 4px 24px rgba(46, 189, 229, 0.12);
}

/* ─── Glow Variants ───────────────────────── */

.vel-card-glow-primary {
  box-shadow: 0 4px 16px rgb(0 0 0 / 0.35), var(--vel-glow-primary);
}

.vel-card-glow-success {
  box-shadow: 0 4px 16px rgb(0 0 0 / 0.35), var(--vel-glow-success);
}

.vel-card-glow-danger {
  box-shadow: 0 4px 16px rgb(0 0 0 / 0.35), var(--vel-glow-danger);
}

/* ─── Interactive ─────────────────────────── */

.vel-card-hover {
  transition: box-shadow 250ms var(--vel-ease-out), transform 250ms var(--vel-ease-spring);
  cursor: pointer;
}

.vel-card-hover:hover {
  box-shadow: 0 20px 50px -8px rgb(0 0 0 / 0.55), 0 8px 20px -4px rgb(0 0 0 / 0.4);
  transform: translateY(-3px);
}

/* VeloraCSS — Badge Component */

.vel-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.3em;
  padding: 0.2em 0.65em;
  font-size: 0.72rem;
  font-weight: 600;
  line-height: 1.4;
  letter-spacing: 0.03em;
  border-radius: var(--vel-radius-full);
  border: 1px solid transparent;
  white-space: nowrap;
  vertical-align: middle;
}

/* ─── Variants ────────────────────────────── */

.vel-badge-primary {
  background: rgba(124, 92, 252, 0.18);
  color: var(--vel-primary-300);
  border-color: rgba(124, 92, 252, 0.35);
}

.vel-badge-secondary {
  background: rgba(79, 110, 156, 0.18);
  color: var(--vel-secondary-300);
  border-color: rgba(79, 110, 156, 0.3);
}

.vel-badge-success {
  background: rgba(14, 203, 129, 0.15);
  color: var(--vel-success-300);
  border-color: rgba(14, 203, 129, 0.3);
}

.vel-badge-danger {
  background: rgba(240, 65, 108, 0.15);
  color: var(--vel-danger-300);
  border-color: rgba(240, 65, 108, 0.3);
}

.vel-badge-warning {
  background: rgba(255, 157, 0, 0.14);
  color: var(--vel-warning-300);
  border-color: rgba(255, 157, 0, 0.28);
}

.vel-badge-info {
  background: rgba(46, 189, 229, 0.14);
  color: var(--vel-info-300);
  border-color: rgba(46, 189, 229, 0.28);
}

.vel-badge-neutral {
  background: var(--vel-surface-3);
  color: var(--vel-color-muted);
  border-color: var(--vel-border-base);
}

/* ─── Solid Variants ──────────────────────── */

.vel-badge-solid-primary   { background: var(--vel-gradient-primary);   color: #fff; border-color: transparent; }

.vel-badge-solid-success   { background: var(--vel-gradient-success);   color: #fff; border-color: transparent; }

.vel-badge-solid-danger    { background: var(--vel-gradient-danger);    color: #fff; border-color: transparent; }

.vel-badge-solid-warning   { background: var(--vel-gradient-warning);   color: #1c1200; border-color: transparent; }

.vel-badge-solid-info      { background: var(--vel-gradient-info);      color: #fff; border-color: transparent; }

/* ─── Dot indicator ───────────────────────── */

.vel-badge-dot::before {
  content: '';
  display: inline-block;
  width: 0.45em;
  height: 0.45em;
  border-radius: 50%;
  background-color: currentColor;
  flex-shrink: 0;
}

/* ─── Sizes ───────────────────────────────── */

.vel-badge-sm {
  font-size: 0.65rem;
  padding: 0.15em 0.5em;
}

.vel-badge-lg {
  font-size: 0.8rem;
  padding: 0.3em 0.85em;
}

/* ─── Pill (square-ish) ───────────────────── */

.vel-badge-square {
  border-radius: var(--vel-radius-md);
}

/* VeloraCSS — Alert Component */

.vel-alert {
  display: flex;
  align-items: flex-start;
  gap: var(--vel-space-3);
  padding: var(--vel-space-4) var(--vel-space-5);
  border-radius: var(--vel-radius-xl);
  border: 1px solid transparent;
  border-left-width: 3px;
  font-size: var(--vel-text-sm);
  line-height: var(--vel-leading-relaxed);
  position: relative;
  overflow: hidden;
}

.vel-alert::before {
  content: '';
  position: absolute;
  inset: 0;
  opacity: 0.04;
  pointer-events: none;
}

.vel-alert-title {
  font-weight: 600;
  font-size: var(--vel-text-sm);
  margin-bottom: var(--vel-space-1);
}

.vel-alert-icon {
  flex-shrink: 0;
  width: 1.1em;
  height: 1.1em;
  margin-top: 0.1em;
}

.vel-alert-dismiss {
  margin-left: auto;
  flex-shrink: 0;
  background: none;
  border: none;
  cursor: pointer;
  opacity: 0.55;
  transition: opacity 150ms ease;
  color: inherit;
  padding: 0;
  line-height: 1;
  font-size: 1.1rem;
}

.vel-alert-dismiss:hover { opacity: 1; }

/* ─── Variants ────────────────────────────── */

.vel-alert-primary {
  background: rgba(124, 92, 252, 0.1);
  border-color: rgba(124, 92, 252, 0.25);
  border-left-color: var(--vel-primary-500);
  color: var(--vel-primary-200);
}

.vel-alert-primary::before { background: var(--vel-gradient-primary); }

.vel-alert-success {
  background: rgba(14, 203, 129, 0.08);
  border-color: rgba(14, 203, 129, 0.22);
  border-left-color: var(--vel-success-400);
  color: var(--vel-success-200);
}

.vel-alert-danger {
  background: rgba(240, 65, 108, 0.08);
  border-color: rgba(240, 65, 108, 0.22);
  border-left-color: var(--vel-danger-500);
  color: var(--vel-danger-200);
}

.vel-alert-warning {
  background: rgba(255, 157, 0, 0.08);
  border-color: rgba(255, 157, 0, 0.22);
  border-left-color: var(--vel-warning-500);
  color: var(--vel-warning-200);
}

.vel-alert-info {
  background: rgba(46, 189, 229, 0.08);
  border-color: rgba(46, 189, 229, 0.22);
  border-left-color: var(--vel-info-400);
  color: var(--vel-info-200);
}

.vel-alert-neutral {
  background: var(--vel-surface-2);
  border-color: var(--vel-border-base);
  border-left-color: var(--vel-neutral-600);
  color: var(--vel-color-text);
}

/* ─── Filled Variants ─────────────────────── */

.vel-alert-filled-primary {
  background: var(--vel-gradient-primary);
  border-color: transparent;
  border-left-color: rgba(255,255,255,0.3);
  color: #ffffff;
}

.vel-alert-filled-success {
  background: var(--vel-gradient-success);
  border-color: transparent;
  border-left-color: rgba(255,255,255,0.3);
  color: #ffffff;
}

.vel-alert-filled-danger {
  background: var(--vel-gradient-danger);
  border-color: transparent;
  border-left-color: rgba(255,255,255,0.3);
  color: #ffffff;
}

.vel-alert-filled-warning {
  background: var(--vel-gradient-warning);
  border-color: transparent;
  border-left-color: rgba(255,255,255,0.3);
  color: #1c1200;
}

/* VeloraCSS — Form / Input Components */

/* ─── Base Input ──────────────────────────── */

.vel-input {
  display: block;
  width: 100%;
  padding: var(--vel-space-2) var(--vel-space-4);
  font-size: var(--vel-text-sm);
  font-family: var(--vel-font-sans);
  line-height: 1.5rem;
  color: var(--vel-color-text);
  background-color: var(--vel-surface-1);
  border: 1px solid var(--vel-border-base);
  border-radius: var(--vel-radius-lg);
  transition: border-color 150ms ease, box-shadow 150ms ease, background-color 150ms ease;
  outline: none;
  -webkit-appearance: none;
  -moz-appearance: none;
       appearance: none;
}

.vel-input::-moz-placeholder {
  color: var(--vel-color-muted);
  opacity: 0.7;
}

.vel-input::placeholder {
  color: var(--vel-color-muted);
  opacity: 0.7;
}

.vel-input:hover {
  border-color: rgba(124, 92, 252, 0.4);
}

.vel-input:focus {
  border-color: var(--vel-primary-500);
  box-shadow: var(--vel-ring-primary);
  background-color: var(--vel-surface-2);
}

.vel-input:disabled {
  opacity: 0.5;
  cursor: not-allowed;
  background-color: var(--vel-surface-1);
}

/* ─── Sizes ───────────────────────────────── */

.vel-input-sm {
  padding: var(--vel-space-1) var(--vel-space-3);
  font-size: var(--vel-text-sm);
  border-radius: var(--vel-radius-md);
}

.vel-input-lg {
  padding: var(--vel-space-3) var(--vel-space-5);
  font-size: var(--vel-text-base);
  border-radius: var(--vel-radius-xl);
}

/* ─── States ──────────────────────────────── */

.vel-input-success {
  border-color: var(--vel-success-400);
}

.vel-input-success:focus {
  box-shadow: var(--vel-ring-success);
  border-color: var(--vel-success-400);
}

.vel-input-danger {
  border-color: var(--vel-danger-500);
}

.vel-input-danger:focus {
  box-shadow: var(--vel-ring-danger);
  border-color: var(--vel-danger-500);
}

.vel-input-warning {
  border-color: var(--vel-warning-500);
}

.vel-input-warning:focus {
  box-shadow: var(--vel-ring-warning);
  border-color: var(--vel-warning-500);
}

/* ─── Textarea ────────────────────────────── */

.vel-textarea {
  display: block;
  width: 100%;
  padding: var(--vel-space-3) var(--vel-space-4);
  font-size: var(--vel-text-sm);
  font-family: var(--vel-font-sans);
  line-height: var(--vel-leading-relaxed);
  color: var(--vel-color-text);
  background-color: var(--vel-surface-1);
  border: 1px solid var(--vel-border-base);
  border-radius: var(--vel-radius-xl);
  resize: vertical;
  transition: border-color 150ms ease, box-shadow 150ms ease;
  outline: none;
  min-height: 6rem;
}

.vel-textarea::-moz-placeholder { color: var(--vel-color-muted); opacity: 0.7; }

.vel-textarea::placeholder { color: var(--vel-color-muted); opacity: 0.7; }

.vel-textarea:hover  { border-color: rgba(124, 92, 252, 0.4); }

.vel-textarea:focus  { border-color: var(--vel-primary-500); box-shadow: var(--vel-ring-primary); background-color: var(--vel-surface-2); }

.vel-textarea:disabled { opacity: 0.5; cursor: not-allowed; }

/* ─── Select ──────────────────────────────── */

.vel-select {
  display: block;
  width: 100%;
  padding: var(--vel-space-2) var(--vel-space-9) var(--vel-space-2) var(--vel-space-4);
  font-size: var(--vel-text-sm);
  font-family: var(--vel-font-sans);
  line-height: 1.5rem;
  color: var(--vel-color-text);
  background-color: var(--vel-surface-1);
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%2364748b' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e");
  background-position: right var(--vel-space-3) center;
  background-repeat: no-repeat;
  background-size: 1.1em;
  border: 1px solid var(--vel-border-base);
  border-radius: var(--vel-radius-lg);
  transition: border-color 150ms ease, box-shadow 150ms ease;
  outline: none;
  -webkit-appearance: none;
  -moz-appearance: none;
       appearance: none;
  cursor: pointer;
}

.vel-select:hover { border-color: rgba(124, 92, 252, 0.4); }

.vel-select:focus { border-color: var(--vel-primary-500); box-shadow: var(--vel-ring-primary); }

.vel-select:disabled { opacity: 0.5; cursor: not-allowed; }

/* ─── Checkbox & Radio ────────────────────── */

.vel-checkbox,
.vel-radio {
  display: inline-flex;
  align-items: center;
  gap: var(--vel-space-2);
  cursor: pointer;
  font-size: var(--vel-text-sm);
  color: var(--vel-color-text);
  -webkit-user-select: none;
     -moz-user-select: none;
          user-select: none;
}

.vel-checkbox input[type='checkbox'],
.vel-radio input[type='radio'] {
  width: 1rem;
  height: 1rem;
  flex-shrink: 0;
  border: 1.5px solid var(--vel-border-base);
  background-color: var(--vel-surface-1);
  cursor: pointer;
  transition: border-color 150ms ease, background-color 150ms ease, box-shadow 150ms ease;
  -webkit-appearance: none;
  -moz-appearance: none;
       appearance: none;
  display: grid;
  place-content: center;
}

.vel-checkbox input[type='checkbox'] { border-radius: var(--vel-radius-sm); }

.vel-radio    input[type='radio']    { border-radius: 50%; }

.vel-checkbox input[type='checkbox']:checked,
.vel-radio    input[type='radio']:checked {
  background-color: var(--vel-primary-500);
  border-color: var(--vel-primary-500);
  box-shadow: var(--vel-glow-sm-primary);
}

.vel-checkbox input[type='checkbox']:checked::before {
  content: '';
  display: block;
  width: 0.35rem;
  height: 0.6rem;
  border: 2px solid #fff;
  border-top: none;
  border-left: none;
  transform: rotate(45deg) translateY(-1px);
}

.vel-radio input[type='radio']:checked::before {
  content: '';
  display: block;
  width: 0.4rem;
  height: 0.4rem;
  background: #fff;
  border-radius: 50%;
}

/* ─── Form Label ──────────────────────────── */

.vel-label {
  display: block;
  font-size: var(--vel-text-sm);
  font-weight: 500;
  color: var(--vel-color-text);
  margin-bottom: var(--vel-space-1);
}

.vel-label-required::after {
  content: ' *';
  color: var(--vel-danger-400);
}

/* ─── Form Group ──────────────────────────── */

.vel-form-group {
  display: flex;
  flex-direction: column;
  gap: var(--vel-space-1);
}

.vel-form-hint {
  font-size: var(--vel-text-xs);
  color: var(--vel-color-muted);
}

.vel-form-error {
  font-size: var(--vel-text-xs);
  color: var(--vel-danger-400);
}

/* ─── Input Group (prefix/suffix) ────────── */

.vel-input-group {
  display: flex;
  align-items: stretch;
}

.vel-input-group .vel-input {
  border-radius: 0;
  flex: 1;
  min-width: 0;
}

.vel-input-group-addon {
  display: flex;
  align-items: center;
  padding: var(--vel-space-2) var(--vel-space-3);
  font-size: var(--vel-text-sm);
  color: var(--vel-color-muted);
  background-color: var(--vel-surface-3);
  border: 1px solid var(--vel-border-base);
  white-space: nowrap;
}

.vel-input-group > *:first-child,
.vel-input-group-addon:first-child {
  border-radius: var(--vel-radius-lg) 0 0 var(--vel-radius-lg);
}

.vel-input-group > *:last-child,
.vel-input-group-addon:last-child {
  border-radius: 0 var(--vel-radius-lg) var(--vel-radius-lg) 0;
}

.vel-input-group > *:not(:first-child) { border-left: 0; }

/* ─── Toggle / Switch ─────────────────────── */

.vel-switch {
  display: inline-flex;
  align-items: center;
  gap: var(--vel-space-3);
  cursor: pointer;
  -webkit-user-select: none;
     -moz-user-select: none;
          user-select: none;
}

.vel-switch-track {
  position: relative;
  width: 2.5rem;
  height: 1.35rem;
  background-color: var(--vel-surface-4);
  border: 1px solid var(--vel-border-base);
  border-radius: var(--vel-radius-full);
  transition: background-color 200ms ease, border-color 200ms ease;
  flex-shrink: 0;
}

.vel-switch input[type='checkbox'] { display: none; }

.vel-switch-track::after {
  content: '';
  position: absolute;
  top: 2px;
  left: 2px;
  width: calc(1.35rem - 6px);
  height: calc(1.35rem - 6px);
  background: var(--vel-color-muted);
  border-radius: 50%;
  transition: transform 200ms var(--vel-ease-spring), background-color 200ms ease;
}

.vel-switch input:checked ~ .vel-switch-track,
.vel-switch.vel-switch-on .vel-switch-track {
  background: var(--vel-gradient-primary);
  border-color: transparent;
  box-shadow: var(--vel-glow-sm-primary);
}

.vel-switch input:checked ~ .vel-switch-track::after,
.vel-switch.vel-switch-on .vel-switch-track::after {
  transform: translateX(1.15rem);
  background: #ffffff;
}

/* VeloraCSS — Navbar Component */

.vel-navbar {
  display: flex;
  align-items: center;
  padding: 0 var(--vel-space-6);
  height: 4rem;
  background-color: var(--vel-surface-1);
  border-bottom: 1px solid var(--vel-border-base);
  position: relative;
  z-index: var(--vel-z-40);
}

/* ─── Glass variant ───────────────────────── */

.vel-navbar-glass {
  display: flex;
  align-items: center;
  padding: 0 var(--vel-space-6);
  height: 4rem;
  background: rgba(13, 20, 34, 0.75);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border-bottom: 1px solid var(--vel-border-subtle);
  position: relative;
  z-index: var(--vel-z-40);
}

/* ─── Sticky ──────────────────────────────── */

.vel-navbar-sticky {
  position: sticky;
  top: 0;
}

.vel-navbar-fixed {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
}

/* ─── Brand ───────────────────────────────── */

.vel-navbar-brand {
  display: flex;
  align-items: center;
  gap: var(--vel-space-2);
  font-size: var(--vel-text-lg);
  font-weight: 700;
  color: var(--vel-color-text);
  text-decoration: none;
  letter-spacing: -0.01em;
  flex-shrink: 0;
  margin-right: var(--vel-space-8);
}

.vel-navbar-brand:hover { color: var(--vel-primary-400); }

/* ─── Nav Links ───────────────────────────── */

.vel-navbar-nav {
  display: flex;
  align-items: center;
  gap: var(--vel-space-1);
  list-style: none;
  margin: 0;
  padding: 0;
  flex: 1;
}

.vel-navbar-link {
  display: inline-flex;
  align-items: center;
  gap: var(--vel-space-1);
  padding: var(--vel-space-2) var(--vel-space-3);
  font-size: var(--vel-text-sm);
  font-weight: 500;
  color: var(--vel-color-muted);
  text-decoration: none;
  border-radius: var(--vel-radius-lg);
  transition: color 150ms ease, background-color 150ms ease;
}

.vel-navbar-link:hover {
  color: var(--vel-color-text);
  background-color: var(--vel-surface-3);
}

.vel-navbar-link.vel-active {
  color: var(--vel-primary-400);
  background-color: rgba(124, 92, 252, 0.1);
}

/* ─── End slot ────────────────────────────── */

.vel-navbar-end {
  display: flex;
  align-items: center;
  gap: var(--vel-space-2);
  margin-left: auto;
}

/* ─── Divider ─────────────────────────────── */

.vel-navbar-divider {
  width: 1px;
  height: 1.5rem;
  background-color: var(--vel-border-base);
  margin: 0 var(--vel-space-2);
}

/* VeloraCSS — Progress Component */

.vel-progress {
  width: 100%;
  height: 0.5rem;
  background-color: var(--vel-surface-3);
  border-radius: var(--vel-radius-full);
  overflow: hidden;
}

.vel-progress-bar {
  height: 100%;
  border-radius: var(--vel-radius-full);
  background: var(--vel-gradient-primary);
  transition: width 400ms var(--vel-ease-out);
  position: relative;
}

/* Animated shimmer on progress bar */

.vel-progress-bar::after {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(
    90deg,
    transparent 0%,
    rgba(255, 255, 255, 0.2) 50%,
    transparent 100%
  );
  animation: vel-shimmer 1.8s infinite;
}

/* ─── Color Variants ──────────────────────── */

.vel-progress-primary .vel-progress-bar  { background: var(--vel-gradient-primary); }

.vel-progress-success .vel-progress-bar  { background: var(--vel-gradient-success); }

.vel-progress-danger  .vel-progress-bar  { background: var(--vel-gradient-danger);  }

.vel-progress-warning .vel-progress-bar  { background: var(--vel-gradient-warning); }

.vel-progress-info    .vel-progress-bar  { background: var(--vel-gradient-info);    }

/* ─── Sizes ───────────────────────────────── */

.vel-progress-xs { height: 0.25rem; }

.vel-progress-sm { height: 0.375rem; }

.vel-progress-md { height: 0.5rem; }

.vel-progress-lg { height: 0.75rem; }

.vel-progress-xl { height: 1rem; }

/* ─── Striped ─────────────────────────────── */

.vel-progress-striped .vel-progress-bar {
  background-image: linear-gradient(
    45deg,
    rgba(255, 255, 255, 0.1) 25%,
    transparent 25%,
    transparent 50%,
    rgba(255, 255, 255, 0.1) 50%,
    rgba(255, 255, 255, 0.1) 75%,
    transparent 75%
  );
  background-size: 1rem 1rem;
}

.vel-progress-striped.vel-progress-animated .vel-progress-bar {
  animation: vel-progress-stripes 1s linear infinite;
}

@keyframes vel-progress-stripes {
  from { background-position: 1rem 0; }
  to   { background-position: 0 0; }
}

/* ─── Indeterminate (loading unknown) ────── */

.vel-progress-indeterminate .vel-progress-bar {
  width: 40% !important;
  animation: vel-progress-indeterminate 1.4s var(--vel-ease-in-out) infinite;
}

@keyframes vel-progress-indeterminate {
  0%   { transform: translateX(-100%); }
  100% { transform: translateX(350%); }
}

/* ─── Glow variant ────────────────────────── */

.vel-progress-glow .vel-progress-bar {
  box-shadow: var(--vel-glow-sm-primary);
}

.vel-progress-glow.vel-progress-success .vel-progress-bar {
  box-shadow: var(--vel-glow-sm-success);
}

.vel-progress-glow.vel-progress-danger .vel-progress-bar {
  box-shadow: var(--vel-glow-sm-danger);
}

/* VeloraCSS — Spinner Component */

.vel-spinner {
  display: inline-block;
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 50%;
  border: 2.5px solid rgba(124, 92, 252, 0.2);
  border-top-color: var(--vel-primary-500);
  animation: vel-spin 0.65s linear infinite;
  flex-shrink: 0;
}

/* ─── Color Variants ──────────────────────── */

.vel-spinner-primary {
  border-color: rgba(124, 92, 252, 0.2);
  border-top-color: var(--vel-primary-500);
}

.vel-spinner-success {
  border-color: rgba(14, 203, 129, 0.2);
  border-top-color: var(--vel-success-400);
}

.vel-spinner-danger {
  border-color: rgba(240, 65, 108, 0.2);
  border-top-color: var(--vel-danger-500);
}

.vel-spinner-warning {
  border-color: rgba(255, 157, 0, 0.2);
  border-top-color: var(--vel-warning-500);
}

.vel-spinner-info {
  border-color: rgba(46, 189, 229, 0.2);
  border-top-color: var(--vel-info-400);
}

.vel-spinner-white {
  border-color: rgba(255, 255, 255, 0.2);
  border-top-color: #ffffff;
}

.vel-spinner-neutral {
  border-color: var(--vel-surface-3);
  border-top-color: var(--vel-color-muted);
}

/* ─── Sizes ───────────────────────────────── */

.vel-spinner-xs { width: 0.75rem; height: 0.75rem; border-width: 2px; }

.vel-spinner-sm { width: 1rem;    height: 1rem;    border-width: 2px; }

.vel-spinner-md { width: 1.5rem;  height: 1.5rem;  border-width: 2.5px; }

.vel-spinner-lg { width: 2.5rem;  height: 2.5rem;  border-width: 3px; }

.vel-spinner-xl { width: 3.5rem;  height: 3.5rem;  border-width: 4px; }

/* ─── Dots Spinner variant ────────────────── */

.vel-spinner-dots {
  display: inline-flex;
  align-items: center;
  gap: 0.3rem;
  border: none;
  animation: none;
}

.vel-spinner-dots::before,
.vel-spinner-dots::after,
.vel-spinner-dots span {
  content: '';
  display: block;
  width: 0.45rem;
  height: 0.45rem;
  border-radius: 50%;
  background-color: var(--vel-primary-500);
  animation: vel-pulse 1.2s ease-in-out infinite;
}

.vel-spinner-dots span { animation-delay: 0.2s; }

.vel-spinner-dots::after { animation-delay: 0.4s; }

/* ─── Ring with glow ──────────────────────── */

.vel-spinner-glow {
  border-color: rgba(124, 92, 252, 0.15);
  border-top-color: var(--vel-primary-500);
  box-shadow: 0 0 10px rgba(124, 92, 252, 0.4);
}

/* VeloraCSS — Table Component */

.vel-table-wrapper {
  width: 100%;
  overflow-x: auto;
  border-radius: var(--vel-radius-xl);
  border: 1px solid var(--vel-border-base);
}

.vel-table {
  width: 100%;
  border-collapse: collapse;
  font-size: var(--vel-text-sm);
  color: var(--vel-color-text);
}

.vel-table thead {
  background-color: var(--vel-surface-1);
  border-bottom: 1px solid var(--vel-border-base);
}

.vel-table thead th {
  padding: var(--vel-space-3) var(--vel-space-4);
  text-align: left;
  font-weight: 600;
  font-size: var(--vel-text-xs);
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: var(--vel-color-muted);
  white-space: nowrap;
}

.vel-table tbody tr {
  border-bottom: 1px solid var(--vel-border-subtle);
  transition: background-color 100ms ease;
}

.vel-table tbody tr:last-child {
  border-bottom: none;
}

.vel-table tbody td {
  padding: var(--vel-space-3) var(--vel-space-4);
  vertical-align: middle;
}

/* ─── Striped ─────────────────────────────── */

.vel-table-striped tbody tr:nth-child(even) {
  background-color: rgba(255, 255, 255, 0.02);
}

/* ─── Hover ───────────────────────────────── */

.vel-table-hover tbody tr:hover {
  background-color: rgba(124, 92, 252, 0.06);
}

/* ─── Bordered ────────────────────────────── */

.vel-table-bordered td,
.vel-table-bordered th {
  border: 1px solid var(--vel-border-base);
}

/* ─── Compact ─────────────────────────────── */

.vel-table-sm thead th,
.vel-table-sm tbody td {
  padding: var(--vel-space-2) var(--vel-space-3);
}

/* ─── Sortable column indicator ───────────── */

.vel-table th[data-sortable] {
  cursor: pointer;
  -webkit-user-select: none;
     -moz-user-select: none;
          user-select: none;
}

.vel-table th[data-sortable]:hover {
  color: var(--vel-color-text);
}

.vel-table th[aria-sort='ascending']::after  { content: ' ↑'; color: var(--vel-primary-400); }

.vel-table th[aria-sort='descending']::after { content: ' ↓'; color: var(--vel-primary-400); }

/* ─── Row accent variants ─────────────────── */

.vel-tr-primary { background-color: rgba(124, 92, 252, 0.08) !important; }

.vel-tr-success { background-color: rgba(14, 203, 129, 0.07) !important; }

.vel-tr-danger  { background-color: rgba(240, 65, 108, 0.07) !important; }

.vel-tr-warning { background-color: rgba(255, 157, 0, 0.07)  !important; }

/* VeloraCSS — Tabs Component */

/* ─── Underline Style (default) ───────────── */

.vel-tabs {
  display: flex;
  gap: 0;
  border-bottom: 1px solid var(--vel-border-base);
  position: relative;
}

.vel-tab {
  display: inline-flex;
  align-items: center;
  gap: var(--vel-space-2);
  padding: var(--vel-space-3) var(--vel-space-4);
  font-size: var(--vel-text-sm);
  font-weight: 500;
  color: var(--vel-color-muted);
  text-decoration: none;
  border: none;
  background: none;
  cursor: pointer;
  border-bottom: 2px solid transparent;
  margin-bottom: -1px;
  transition: color 150ms ease, border-color 150ms ease;
  white-space: nowrap;
}

.vel-tab:hover {
  color: var(--vel-color-text);
}

.vel-tab.vel-active,
.vel-tab[aria-selected='true'] {
  color: var(--vel-primary-400);
  border-bottom-color: var(--vel-primary-500);
}

/* ─── Pill Style ──────────────────────────── */

.vel-tabs-pill {
  display: flex;
  gap: var(--vel-space-1);
  padding: var(--vel-space-1);
  background-color: var(--vel-surface-1);
  border-radius: var(--vel-radius-xl);
  border: 1px solid var(--vel-border-base);
  border-bottom: 1px solid var(--vel-border-base);
}

.vel-tabs-pill .vel-tab {
  border-bottom: none;
  border-radius: var(--vel-radius-lg);
  margin-bottom: 0;
  padding: var(--vel-space-2) var(--vel-space-4);
  transition: background-color 150ms ease, color 150ms ease, box-shadow 150ms ease;
}

.vel-tabs-pill .vel-tab:hover {
  background-color: var(--vel-surface-3);
}

.vel-tabs-pill .vel-tab.vel-active,
.vel-tabs-pill .vel-tab[aria-selected='true'] {
  background: var(--vel-gradient-primary);
  color: #ffffff;
  box-shadow: var(--vel-glow-sm-primary);
}

/* ─── Boxed Style ─────────────────────────── */

.vel-tabs-boxed {
  display: flex;
  gap: var(--vel-space-1);
  border-bottom: 1px solid var(--vel-border-base);
}

.vel-tabs-boxed .vel-tab {
  border: 1px solid transparent;
  border-bottom: none;
  border-radius: var(--vel-radius-lg) var(--vel-radius-lg) 0 0;
  margin-bottom: -1px;
}

.vel-tabs-boxed .vel-tab.vel-active,
.vel-tabs-boxed .vel-tab[aria-selected='true'] {
  background-color: var(--vel-surface-2);
  color: var(--vel-color-text);
  border-color: var(--vel-border-base);
  border-bottom-color: var(--vel-surface-2);
}

/* ─── Tab Panel ───────────────────────────── */

.vel-tab-panel {
  display: none;
  padding: var(--vel-space-5) 0;
}

.vel-tab-panel.vel-active,
.vel-tab-panel[aria-hidden='false'] {
  display: block;
  animation: vel-fade-in 200ms var(--vel-ease-out) both;
}

/* ─── Vertical Tabs ───────────────────────── */

.vel-tabs-vertical {
  flex-direction: column;
  gap: var(--vel-space-1);
  border-bottom: none;
  border-right: 1px solid var(--vel-border-base);
}

.vel-tabs-vertical .vel-tab {
  border-bottom: none;
  border-right: 2px solid transparent;
  border-radius: var(--vel-radius-lg) 0 0 var(--vel-radius-lg);
  margin-bottom: 0;
  margin-right: -1px;
}

.vel-tabs-vertical .vel-tab.vel-active {
  color: var(--vel-primary-400);
  border-right-color: var(--vel-primary-500);
  background-color: rgba(124, 92, 252, 0.08);
}

/* VeloraCSS — Avatar Component */

.vel-avatar {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  overflow: hidden;
  flex-shrink: 0;
  font-weight: 600;
  line-height: 1;
  -webkit-user-select: none;
     -moz-user-select: none;
          user-select: none;
  position: relative;
  width: 2.5rem;
  height: 2.5rem;
  font-size: 0.9rem;
  background: var(--vel-gradient-primary);
  color: #ffffff;
}

.vel-avatar img {
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
     object-fit: cover;
  display: block;
}

/* ─── Sizes ───────────────────────────────── */

.vel-avatar-xs { width: 1.5rem;  height: 1.5rem;  font-size: 0.55rem; }

.vel-avatar-sm { width: 2rem;    height: 2rem;    font-size: 0.7rem; }

.vel-avatar-md { width: 2.5rem;  height: 2.5rem;  font-size: 0.9rem; }

.vel-avatar-lg { width: 3.5rem;  height: 3.5rem;  font-size: 1.1rem; }

.vel-avatar-xl { width: 5rem;    height: 5rem;    font-size: 1.5rem; }

.vel-avatar-2xl{ width: 7rem;    height: 7rem;    font-size: 2rem; }

/* ─── Shape ───────────────────────────────── */

.vel-avatar-square  { border-radius: var(--vel-radius-xl); }

.vel-avatar-rounded { border-radius: var(--vel-radius-full); }

/* ─── Color Variants ──────────────────────── */

.vel-avatar-primary   { background: var(--vel-gradient-primary); }

.vel-avatar-success   { background: var(--vel-gradient-success); }

.vel-avatar-danger    { background: var(--vel-gradient-danger); }

.vel-avatar-warning   { background: var(--vel-gradient-warning); color: #1c1200; }

.vel-avatar-info      { background: var(--vel-gradient-info); }

.vel-avatar-neutral   { background: var(--vel-surface-3); color: var(--vel-color-muted); }

.vel-avatar-aurora    { background: var(--vel-gradient-aurora); }

.vel-avatar-cosmos    { background: var(--vel-gradient-cosmos); }

.vel-avatar-sunset    { background: var(--vel-gradient-sunset); }

/* ─── Ring (border) ───────────────────────── */

.vel-avatar-ring {
  box-shadow: 0 0 0 2px var(--vel-surface-0), 0 0 0 4px var(--vel-primary-500);
}

.vel-avatar-ring-success {
  box-shadow: 0 0 0 2px var(--vel-surface-0), 0 0 0 4px var(--vel-success-400);
}

.vel-avatar-ring-danger {
  box-shadow: 0 0 0 2px var(--vel-surface-0), 0 0 0 4px var(--vel-danger-500);
}

.vel-avatar-ring-warning {
  box-shadow: 0 0 0 2px var(--vel-surface-0), 0 0 0 4px var(--vel-warning-400);
}

/* ─── Status Indicator ────────────────────── */

.vel-avatar-status {
  position: relative;
}

.vel-avatar-status::after {
  content: '';
  position: absolute;
  bottom: 2px;
  right: 2px;
  width: 0.6rem;
  height: 0.6rem;
  border-radius: 50%;
  border: 2px solid var(--vel-surface-0);
  background-color: var(--vel-success-400);
}

.vel-avatar-status-offline::after  { background-color: var(--vel-color-muted); }

.vel-avatar-status-busy::after     { background-color: var(--vel-danger-500); }

.vel-avatar-status-away::after     { background-color: var(--vel-warning-500); }

/* ─── Group ───────────────────────────────── */

.vel-avatar-group {
  display: flex;
  flex-direction: row-reverse;
  justify-content: flex-end;
}

.vel-avatar-group .vel-avatar {
  border: 2px solid var(--vel-surface-bg);
  margin-left: -0.75rem;
}

.vel-avatar-group .vel-avatar:last-child {
  margin-left: 0;
}

/* VeloraCSS — Tooltip Component */

/* CSS-only tooltip using data-tooltip attribute */

[data-tooltip] {
  position: relative;
}

[data-tooltip]::before,
[data-tooltip]::after {
  position: absolute;
  z-index: var(--vel-z-50);
  pointer-events: none;
  opacity: 0;
  transition: opacity 150ms ease, transform 150ms var(--vel-ease-out);
}

[data-tooltip]::before {
  content: attr(data-tooltip);
  bottom: calc(100% + 8px);
  left: 50%;
  transform: translateX(-50%) translateY(4px);
  padding: 0.35em 0.7em;
  font-size: 0.72rem;
  font-weight: 500;
  line-height: 1.4;
  white-space: nowrap;
  color: var(--vel-color-text);
  background-color: var(--vel-surface-4);
  border: 1px solid var(--vel-border-base);
  border-radius: var(--vel-radius-lg);
  box-shadow: 0 8px 24px rgb(0 0 0 / 0.4);
}

[data-tooltip]::after {
  content: '';
  bottom: calc(100% + 2px);
  left: 50%;
  transform: translateX(-50%) translateY(4px);
  border: 5px solid transparent;
  border-top-color: var(--vel-surface-4);
}

[data-tooltip]:hover::before,
[data-tooltip]:hover::after,
[data-tooltip]:focus-visible::before,
[data-tooltip]:focus-visible::after {
  opacity: 1;
}

[data-tooltip]:hover::before { transform: translateX(-50%) translateY(0); }

[data-tooltip]:hover::after  { transform: translateX(-50%) translateY(0); }

/* ─── Placement variants ──────────────────── */

[data-tooltip-pos='bottom']::before {
  bottom: auto;
  top: calc(100% + 8px);
  transform: translateX(-50%) translateY(-4px);
}

[data-tooltip-pos='bottom']::after {
  bottom: auto;
  top: calc(100% + 2px);
  transform: translateX(-50%) translateY(-4px);
  border-top-color: transparent;
  border-bottom-color: var(--vel-surface-4);
}

[data-tooltip-pos='bottom']:hover::before { transform: translateX(-50%) translateY(0); }

[data-tooltip-pos='bottom']:hover::after  { transform: translateX(-50%) translateY(0); }

[data-tooltip-pos='left']::before {
  bottom: auto;
  top: 50%;
  left: auto;
  right: calc(100% + 8px);
  transform: translateY(-50%) translateX(4px);
}

[data-tooltip-pos='left']::after {
  bottom: auto;
  top: 50%;
  left: auto;
  right: calc(100% + 2px);
  transform: translateY(-50%) translateX(4px);
  border-top-color: transparent;
  border-left-color: var(--vel-surface-4);
}

[data-tooltip-pos='left']:hover::before { transform: translateY(-50%) translateX(0); }

[data-tooltip-pos='left']:hover::after  { transform: translateY(-50%) translateX(0); }

[data-tooltip-pos='right']::before {
  bottom: auto;
  top: 50%;
  left: calc(100% + 8px);
  transform: translateY(-50%) translateX(-4px);
}

[data-tooltip-pos='right']::after {
  bottom: auto;
  top: 50%;
  left: calc(100% + 2px);
  transform: translateY(-50%) translateX(-4px);
  border-top-color: transparent;
  border-right-color: var(--vel-surface-4);
}

[data-tooltip-pos='right']:hover::before { transform: translateY(-50%) translateX(0); }

[data-tooltip-pos='right']:hover::after  { transform: translateY(-50%) translateX(0); }

/* ─── Color variants ──────────────────────── */

[data-tooltip-color='primary']::before {
  background: var(--vel-primary-600);
  border-color: var(--vel-primary-500);
  color: #fff;
}

[data-tooltip-color='primary']::after { border-top-color: var(--vel-primary-600); }

[data-tooltip-color='danger']::before {
  background: var(--vel-danger-600);
  border-color: var(--vel-danger-500);
  color: #fff;
}

[data-tooltip-color='danger']::after { border-top-color: var(--vel-danger-600); }

/* ─── vel-tooltip class variant ──────────── */

.vel-tooltip {
  position: relative;
  display: inline-block;
}

.vel-tooltip-content {
  position: absolute;
  bottom: calc(100% + 8px);
  left: 50%;
  transform: translateX(-50%);
  padding: 0.35em 0.7em;
  font-size: 0.72rem;
  font-weight: 500;
  white-space: nowrap;
  color: var(--vel-color-text);
  background-color: var(--vel-surface-4);
  border: 1px solid var(--vel-border-base);
  border-radius: var(--vel-radius-lg);
  box-shadow: 0 8px 24px rgb(0 0 0 / 0.4);
  pointer-events: none;
  z-index: var(--vel-z-50);
  animation: vel-scale-in 150ms var(--vel-ease-spring) both;
}

/* VeloraCSS — Modal Component */

/* JS controls: add .vel-modal-open to body, toggle [aria-hidden] or .vel-modal-hidden */

.vel-modal-backdrop {
  position: fixed;
  inset: 0;
  z-index: var(--vel-z-50);
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(4px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: var(--vel-space-4);
}

.vel-modal-backdrop.vel-modal-hidden {
  display: none;
}

body.vel-modal-open {
  overflow: hidden;
}

.vel-modal {
  background: var(--vel-surface-1);
  border: 1px solid var(--vel-border-base);
  border-radius: var(--vel-radius-xl);
  box-shadow: 0 25px 60px rgba(0, 0, 0, 0.5);
  width: 100%;
  max-width: 32rem;
  max-height: calc(100vh - 2rem);
  display: flex;
  flex-direction: column;
  position: relative;
  animation: vel-scale-in 0.2s var(--vel-ease-out);
}

.vel-modal-sm   { max-width: 24rem; }

.vel-modal-lg   { max-width: 48rem; }

.vel-modal-xl   { max-width: 64rem; }

.vel-modal-full {
  max-width: none;
  width: 100%;
  height: 100%;
  border-radius: 0;
  max-height: 100vh;
}

.vel-modal-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--vel-space-5) var(--vel-space-6);
  border-bottom: 1px solid var(--vel-border-base);
  font-size: var(--vel-text-lg);
  font-weight: 600;
  color: var(--vel-color-text);
  flex-shrink: 0;
}

.vel-modal-body {
  padding: var(--vel-space-6);
  overflow-y: auto;
  flex: 1;
  color: var(--vel-color-text);
  font-size: var(--vel-text-sm);
  line-height: 1.6;
}

.vel-modal-footer {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: var(--vel-space-3);
  padding: var(--vel-space-4) var(--vel-space-6);
  border-top: 1px solid var(--vel-border-base);
  flex-shrink: 0;
}

.vel-modal-close {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2rem;
  height: 2rem;
  border-radius: var(--vel-radius-md);
  border: none;
  background: transparent;
  color: var(--vel-color-muted);
  cursor: pointer;
  font-size: 1.25rem;
  line-height: 1;
  transition: background 150ms ease, color 150ms ease;
}

.vel-modal-close:hover {
  background: var(--vel-surface-3);
  color: var(--vel-color-text);
}

/* VeloraCSS — Dropdown Component */

/* CSS-only via :focus-within; JS can toggle .vel-dropdown-open for full control */

.vel-dropdown {
  position: relative;
  display: inline-block;
}

.vel-dropdown-trigger {
  cursor: pointer;
}

.vel-dropdown-menu {
  position: absolute;
  top: calc(100% + 6px);
  left: 0;
  z-index: var(--vel-z-20);
  min-width: 12rem;
  background: var(--vel-surface-1);
  border: 1px solid var(--vel-border-base);
  border-radius: var(--vel-radius-xl);
  padding: var(--vel-space-2);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4), 0 2px 8px rgba(0, 0, 0, 0.2);
  opacity: 0;
  visibility: hidden;
  transform: translateY(-4px);
  transition: opacity 150ms ease, transform 150ms ease, visibility 150ms;
  pointer-events: none;
}

.vel-dropdown:focus-within .vel-dropdown-menu,
.vel-dropdown.vel-dropdown-open .vel-dropdown-menu {
  opacity: 1;
  visibility: visible;
  transform: translateY(0);
  pointer-events: auto;
}

/* Right-aligned variant */

.vel-dropdown-menu-right {
  left: auto;
  right: 0;
}

/* Upward variant */

.vel-dropdown-menu-top {
  top: auto;
  bottom: calc(100% + 6px);
}

.vel-dropdown-item {
  display: flex;
  align-items: center;
  gap: var(--vel-space-2);
  width: 100%;
  padding: var(--vel-space-2) var(--vel-space-3);
  border-radius: var(--vel-radius-md);
  border: none;
  background: transparent;
  color: var(--vel-color-text);
  font-size: var(--vel-text-sm);
  font-weight: 400;
  text-align: left;
  cursor: pointer;
  text-decoration: none;
  transition: background 100ms ease, color 100ms ease;
}

.vel-dropdown-item:hover {
  background: var(--vel-surface-3);
  color: var(--vel-color-text);
}

.vel-dropdown-item.vel-dropdown-item-active,
.vel-dropdown-item:focus {
  background: var(--vel-surface-3);
  color: var(--vel-color-primary);
  outline: none;
}

.vel-dropdown-item-danger {
  color: var(--vel-color-danger);
}

.vel-dropdown-item-danger:hover {
  background: rgba(240, 65, 108, 0.1);
  color: var(--vel-color-danger);
}

.vel-dropdown-divider {
  height: 1px;
  background: var(--vel-border-base);
  margin: var(--vel-space-2) 0;
}

.vel-dropdown-header {
  padding: var(--vel-space-1) var(--vel-space-3) var(--vel-space-2);
  font-size: var(--vel-text-xs);
  font-weight: 600;
  color: var(--vel-color-muted);
  letter-spacing: 0.06em;
  text-transform: uppercase;
}

/* VeloraCSS — Pagination Component */

.vel-pagination {
  display: flex;
  align-items: center;
  gap: var(--vel-space-1);
  flex-wrap: wrap;
}

.vel-page-item {
  display: inline-flex;
}

.vel-page-link {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 2.25rem;
  height: 2.25rem;
  padding: 0 var(--vel-space-3);
  border-radius: var(--vel-radius-lg);
  border: 1px solid var(--vel-border-base);
  background: var(--vel-surface-1);
  color: var(--vel-color-text);
  font-size: var(--vel-text-sm);
  font-weight: 500;
  text-decoration: none;
  cursor: pointer;
  transition: background 150ms ease, border-color 150ms ease, color 150ms ease;
  -webkit-user-select: none;
     -moz-user-select: none;
          user-select: none;
}

.vel-page-link:hover {
  background: var(--vel-surface-3);
  border-color: var(--vel-primary-500);
  color: var(--vel-primary-300);
}

.vel-page-link.vel-page-link-active {
  background: var(--vel-gradient-primary);
  border-color: transparent;
  color: #ffffff;
  font-weight: 600;
  cursor: default;
}

.vel-page-link.vel-page-link-disabled {
  opacity: 0.4;
  pointer-events: none;
  cursor: not-allowed;
}

/* ─── Sizes ──────────────────────────────── */

.vel-pagination-sm .vel-page-link {
  min-width: 1.75rem;
  height: 1.75rem;
  font-size: var(--vel-text-xs);
  padding: 0 var(--vel-space-2);
}

.vel-pagination-lg .vel-page-link {
  min-width: 3rem;
  height: 3rem;
  font-size: var(--vel-text-base);
  padding: 0 var(--vel-space-4);
}

/* ─── Ellipsis ───────────────────────────── */

.vel-page-ellipsis {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 2.25rem;
  height: 2.25rem;
  color: var(--vel-color-muted);
  font-size: var(--vel-text-sm);
  -webkit-user-select: none;
     -moz-user-select: none;
          user-select: none;
}

/* VeloraCSS — Toast / Notification Component */

/* JS manages showing/hiding toasts. Container positions them. */

.vel-toast-container {
  position: fixed;
  z-index: var(--vel-z-50);
  display: flex;
  flex-direction: column;
  gap: var(--vel-space-3);
  pointer-events: none;
  padding: var(--vel-space-4);
  max-width: 26rem;
  width: 100%;
}

/* ─── Position variants ──────────────────── */

.vel-toast-top-right     { top: 0; right: 0; align-items: flex-end; }

.vel-toast-top-left      { top: 0; left: 0; align-items: flex-start; }

.vel-toast-top-center    { top: 0; left: 50%; transform: translateX(-50%); align-items: center; }

.vel-toast-bottom-right  { bottom: 0; right: 0; align-items: flex-end; }

.vel-toast-bottom-left   { bottom: 0; left: 0; align-items: flex-start; }

.vel-toast-bottom-center { bottom: 0; left: 50%; transform: translateX(-50%); align-items: center; }

.vel-toast {
  display: flex;
  align-items: flex-start;
  gap: var(--vel-space-3);
  padding: var(--vel-space-4);
  border-radius: var(--vel-radius-xl);
  border: 1px solid var(--vel-border-base);
  background: var(--vel-surface-2);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.4);
  pointer-events: auto;
  animation: vel-slide-right 0.25s var(--vel-ease-out);
  color: var(--vel-color-text);
  font-size: var(--vel-text-sm);
  line-height: 1.5;
  max-width: 100%;
}

.vel-toast-icon {
  font-size: 1.125rem;
  flex-shrink: 0;
  margin-top: 1px;
}

.vel-toast-content {
  flex: 1;
  min-width: 0;
}

.vel-toast-title {
  font-weight: 600;
  margin-bottom: 2px;
}

.vel-toast-close {
  flex-shrink: 0;
  background: transparent;
  border: none;
  cursor: pointer;
  color: var(--vel-color-muted);
  font-size: 1rem;
  padding: 0;
  line-height: 1;
  margin-left: auto;
  transition: color 150ms ease;
}

.vel-toast-close:hover { color: var(--vel-color-text); }

/* ─── Color variants ─────────────────────── */

.vel-toast-success {
  border-color: rgba(14, 203, 129, 0.3);
  background: rgba(14, 203, 129, 0.08);
}

.vel-toast-success .vel-toast-icon { color: var(--vel-color-success); }

.vel-toast-danger {
  border-color: rgba(240, 65, 108, 0.3);
  background: rgba(240, 65, 108, 0.08);
}

.vel-toast-danger .vel-toast-icon { color: var(--vel-color-danger); }

.vel-toast-warning {
  border-color: rgba(255, 157, 0, 0.3);
  background: rgba(255, 157, 0, 0.08);
}

.vel-toast-warning .vel-toast-icon { color: var(--vel-color-warning); }

.vel-toast-info {
  border-color: rgba(46, 189, 229, 0.3);
  background: rgba(46, 189, 229, 0.08);
}

.vel-toast-info .vel-toast-icon { color: var(--vel-color-info); }

.vel-toast-primary {
  border-color: rgba(124, 92, 252, 0.3);
  background: rgba(124, 92, 252, 0.08);
}

.vel-toast-primary .vel-toast-icon { color: var(--vel-color-primary); }

/* VeloraCSS — Skeleton Loading Component */

/* Uses the vel-shimmer animation from animations.css */

.vel-skeleton {
  background: var(--vel-surface-2);
  border-radius: var(--vel-radius-md);
  position: relative;
  overflow: hidden;
  display: block;
}

.vel-skeleton::after {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(
    90deg,
    transparent 0%,
    rgba(255, 255, 255, 0.06) 50%,
    transparent 100%
  );
  background-size: 200% 100%;
  animation: vel-shimmer 1.5s ease-in-out infinite;
}

/* ─── Text skeleton ──────────────────────── */

.vel-skeleton-text {
  height: 1em;
  border-radius: var(--vel-radius-sm);
  width: 100%;
}

.vel-skeleton-text + .vel-skeleton-text {
  margin-top: var(--vel-space-2);
}

/* Shorter last line for natural look */

.vel-skeleton-text:last-child { width: 60%; }

/* ─── Preset shapes ──────────────────────── */

.vel-skeleton-circle {
  border-radius: 9999px;
}

.vel-skeleton-rect {
  border-radius: var(--vel-radius-lg);
}

/* ─── Size variants ──────────────────────── */

.vel-skeleton-xs  { height: 0.75rem; }

.vel-skeleton-sm  { height: 1rem; }

.vel-skeleton-md  { height: 1.25rem; }

.vel-skeleton-lg  { height: 1.5rem; }

.vel-skeleton-xl  { height: 2rem; }

.vel-skeleton-2xl { height: 3rem; }

.vel-skeleton-3xl { height: 4rem; }

/* ─── Avatar skeleton presets ────────────── */

.vel-skeleton-avatar-sm { width: 2rem;   height: 2rem;   border-radius: 9999px; }

.vel-skeleton-avatar    { width: 2.5rem; height: 2.5rem; border-radius: 9999px; }

.vel-skeleton-avatar-lg { width: 3.5rem; height: 3.5rem; border-radius: 9999px; }

.vel-skeleton-avatar-xl { width: 5rem;   height: 5rem;   border-radius: 9999px; }

/* VeloraCSS — Breadcrumb Component */

.vel-breadcrumb {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 0;
  list-style: none;
  padding: 0;
  margin: 0;
  font-size: var(--vel-text-sm);
  color: var(--vel-color-muted);
}

.vel-breadcrumb-item {
  display: flex;
  align-items: center;
}

/* Separator — customizable via CSS variable */

.vel-breadcrumb-item + .vel-breadcrumb-item::before {
  content: var(--vel-breadcrumb-separator, '/');
  padding: 0 var(--vel-space-2);
  color: var(--vel-color-muted);
  opacity: 0.5;
}

/* Chevron variant */

.vel-breadcrumb-chevron .vel-breadcrumb-item + .vel-breadcrumb-item::before {
  content: '›';
}

/* Dot variant */

.vel-breadcrumb-dot .vel-breadcrumb-item + .vel-breadcrumb-item::before {
  content: '·';
}

.vel-breadcrumb-link {
  color: var(--vel-color-muted);
  text-decoration: none;
  transition: color 150ms ease;
}

.vel-breadcrumb-link:hover {
  color: var(--vel-color-primary);
}

.vel-breadcrumb-active {
  color: var(--vel-color-text);
  font-weight: 500;
  cursor: default;
}

/* VeloraCSS — Menu (Sidebar Navigation) Component */

/* Designed for sidebar navs, vertical menus, settings panels */

.vel-menu {
  display: flex;
  flex-direction: column;
  gap: var(--vel-space-6);
  width: 100%;
}

.vel-menu-label {
  font-size: var(--vel-text-xs);
  font-weight: 600;
  color: var(--vel-color-muted);
  letter-spacing: 0.08em;
  text-transform: uppercase;
  padding: 0 var(--vel-space-3);
  margin-bottom: var(--vel-space-2);
}

.vel-menu-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: var(--vel-space-1);
}

.vel-menu-item {
  display: flex;
}

.vel-menu-link {
  display: flex;
  align-items: center;
  gap: var(--vel-space-3);
  width: 100%;
  padding: var(--vel-space-2) var(--vel-space-3);
  border-radius: var(--vel-radius-lg);
  color: var(--vel-color-muted);
  font-size: var(--vel-text-sm);
  font-weight: 500;
  text-decoration: none;
  cursor: pointer;
  transition: background 150ms ease, color 150ms ease;
  border: none;
  background: transparent;
  text-align: left;
}

.vel-menu-link:hover {
  background: var(--vel-surface-3);
  color: var(--vel-color-text);
}

.vel-menu-link.vel-menu-link-active {
  background: rgba(124, 92, 252, 0.12);
  color: var(--vel-primary-400);
  border-left: 2px solid var(--vel-primary-500);
  padding-left: calc(var(--vel-space-3) - 2px);
}

.vel-menu-link-icon {
  width: 1.125rem;
  height: 1.125rem;
  flex-shrink: 0;
  opacity: 0.7;
}

.vel-menu-link.vel-menu-link-active .vel-menu-link-icon {
  opacity: 1;
}

/* ─── Nested submenu ─────────────────────── */

.vel-menu-sub {
  list-style: none;
  padding: var(--vel-space-1) 0 0 calc(var(--vel-space-3) + 1.125rem + var(--vel-space-3));
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: var(--vel-space-1);
}

.vel-menu-sub .vel-menu-link {
  font-size: var(--vel-text-xs);
  padding: var(--vel-space-1) var(--vel-space-3);
}

/* VeloraCSS — Steps / Stepper Component */

/* ─── Horizontal steps ───────────────────── */

.vel-steps {
  display: flex;
  align-items: flex-start;
  gap: 0;
  counter-reset: vel-step;
}

.vel-step {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  text-align: center;
}

/* Connector line */

.vel-step + .vel-step::before {
  content: '';
  position: absolute;
  top: 1.125rem;
  right: 50%;
  left: -50%;
  height: 2px;
  background: var(--vel-border-base);
  z-index: 0;
}

.vel-step-complete + .vel-step::before,
.vel-step-active + .vel-step::before {
  background: var(--vel-gradient-primary);
}

/* Step indicator */

.vel-step-indicator {
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.25rem;
  height: 2.25rem;
  border-radius: 9999px;
  border: 2px solid var(--vel-border-base);
  background: var(--vel-surface-1);
  color: var(--vel-color-muted);
  font-size: var(--vel-text-sm);
  font-weight: 600;
  margin-bottom: var(--vel-space-2);
  transition: all 200ms ease;
}

.vel-step-complete .vel-step-indicator {
  background: var(--vel-gradient-primary);
  border-color: transparent;
  color: #ffffff;
}

.vel-step-active .vel-step-indicator {
  border-color: var(--vel-primary-500);
  color: var(--vel-primary-400);
  box-shadow: 0 0 0 4px rgba(124, 92, 252, 0.15);
}

.vel-step-label {
  font-size: var(--vel-text-xs);
  font-weight: 500;
  color: var(--vel-color-muted);
}

.vel-step-active .vel-step-label {
  color: var(--vel-color-text);
  font-weight: 600;
}

.vel-step-complete .vel-step-label {
  color: var(--vel-color-primary);
}

/* ─── Vertical steps ─────────────────────── */

.vel-steps-vertical {
  flex-direction: column;
  align-items: flex-start;
  gap: 0;
}

.vel-steps-vertical .vel-step {
  flex-direction: row;
  align-items: flex-start;
  text-align: left;
  gap: var(--vel-space-4);
  padding-bottom: var(--vel-space-6);
}

.vel-steps-vertical .vel-step:last-child {
  padding-bottom: 0;
}

/* Vertical connector */

.vel-steps-vertical .vel-step + .vel-step::before {
  top: -50%;
  left: 1.0625rem;
  right: auto;
  width: 2px;
  height: 100%;
}

.vel-steps-vertical .vel-step-indicator {
  flex-shrink: 0;
  margin-bottom: 0;
}

.vel-steps-vertical .vel-step-content      { flex: 1; }

.vel-steps-vertical .vel-step-label        { font-size: var(--vel-text-sm); }

.vel-steps-vertical .vel-step-description  {
  font-size: var(--vel-text-xs);
  color: var(--vel-color-muted);
  margin-top: var(--vel-space-1);
}

/* VeloraCSS — Divider Component */

.vel-divider {
  display: flex;
  align-items: center;
  gap: var(--vel-space-4);
  width: 100%;
  color: var(--vel-color-muted);
  font-size: var(--vel-text-xs);
  font-weight: 500;
  letter-spacing: 0.05em;
  text-transform: uppercase;
}

/* Horizontal lines flanking the label */

.vel-divider::before,
.vel-divider::after {
  content: '';
  flex: 1;
  height: 1px;
  background: var(--vel-border-base);
}

/* No label — pure horizontal rule */

.vel-divider-plain {
  height: 1px;
  background: var(--vel-border-base);
  width: 100%;
  border: none;
}

/* Label position variants */

.vel-divider-left::after   { display: none; }

.vel-divider-right::before { display: none; }

/* Vertical divider */

.vel-divider-vertical {
  display: inline-block;
  width: 1px;
  background: var(--vel-border-base);
  align-self: stretch;
  margin: 0 var(--vel-space-2);
}

/* Color variants */

.vel-divider-primary { background: var(--vel-primary-500); }

.vel-divider-primary::before,
.vel-divider-primary::after { background: var(--vel-primary-500); }

/* VeloraCSS — Keyboard Key Display Component */

/* Usage: <kbd class="vel-kbd">Cmd</kbd> <kbd class="vel-kbd">K</kbd> */

.vel-kbd {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 1.75rem;
  height: 1.75rem;
  padding: 0 var(--vel-space-2);
  font-family: var(--vel-font-mono);
  font-size: var(--vel-text-xs);
  font-weight: 600;
  line-height: 1;
  color: var(--vel-color-text);
  background: var(--vel-surface-2);
  border: 1px solid var(--vel-border-base);
  border-bottom-width: 2px;
  border-radius: var(--vel-radius-md);
  box-shadow: inset 0 -1px 0 var(--vel-border-base);
  white-space: nowrap;
  -webkit-user-select: none;
     -moz-user-select: none;
          user-select: none;
}

.vel-kbd-sm {
  min-width: 1.25rem;
  height: 1.25rem;
  font-size: 0.625rem;
  padding: 0 var(--vel-space-1);
}

.vel-kbd-lg {
  min-width: 2.25rem;
  height: 2.25rem;
  font-size: var(--vel-text-sm);
  padding: 0 var(--vel-space-3);
}

/* Combo shortcut wrapper */

.vel-kbd-combo {
  display: inline-flex;
  align-items: center;
  gap: var(--vel-space-1);
}

/* VeloraCSS — Accordion Component */

/* ─── Container ───────────────────────────── */

.vel-accordion {
  border: 1px solid var(--vel-border-base);
  border-radius: var(--vel-radius-xl);
  overflow: hidden;
  background-color: var(--vel-surface-1);
}

/* ─── Item ────────────────────────────────── */

.vel-accordion-item {
  border-bottom: 1px solid var(--vel-border-base);
}

.vel-accordion-item:last-child {
  border-bottom: none;
}

/* ─── Trigger ─────────────────────────────── */

.vel-accordion-trigger {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: var(--vel-space-4) var(--vel-space-5);
  background: transparent;
  border: none;
  color: var(--vel-color-text);
  font-size: var(--vel-size-base);
  font-weight: var(--vel-font-medium);
  font-family: var(--vel-font-sans);
  text-align: left;
  cursor: pointer;
  transition: background-color var(--vel-duration-150) var(--vel-ease-out);
}

.vel-accordion-trigger:hover {
  background-color: var(--vel-surface-2);
}

/* ─── Trigger Icon ────────────────────────── */

.vel-accordion-trigger-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: 1.25rem;
  height: 1.25rem;
  color: var(--vel-color-muted);
  transition: transform var(--vel-duration-200) var(--vel-ease-in-out);
}

.vel-accordion-trigger-icon.vel-open {
  transform: rotate(180deg);
}

/* ─── Content ─────────────────────────────── */

.vel-accordion-content {
  padding: 0 var(--vel-space-5) var(--vel-space-5);
  color: var(--vel-color-muted);
  font-size: var(--vel-size-base);
  line-height: var(--vel-leading-relaxed);
}

/* ─── Flush Variant ───────────────────────── */

.vel-accordion-flush {
  border: none;
  border-radius: 0;
  background-color: transparent;
}

.vel-accordion-flush .vel-accordion-item {
  border-bottom: 1px solid var(--vel-border-base);
}

.vel-accordion-flush .vel-accordion-trigger {
  padding-left: 0;
  padding-right: 0;
}

.vel-accordion-flush .vel-accordion-content {
  padding-left: 0;
  padding-right: 0;
}

/* VeloraCSS — Code Block Component */

/* ─── Container ───────────────────────────── */

.vel-code-block {
  background-color: var(--vel-surface-0);
  border: 1px solid var(--vel-border-base);
  border-radius: var(--vel-radius-xl);
  overflow: hidden;
  font-family: var(--vel-font-mono);
}

/* ─── Header ──────────────────────────────── */

.vel-code-block-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--vel-space-3) var(--vel-space-4);
  background-color: var(--vel-surface-1);
  border-bottom: 1px solid var(--vel-border-base);
  gap: var(--vel-space-3);
}

/* ─── Language Badge ──────────────────────── */

.vel-code-block-lang {
  display: inline-flex;
  align-items: center;
  padding: 0.15em 0.6em;
  font-size: var(--vel-size-xs);
  font-weight: var(--vel-font-semibold);
  letter-spacing: var(--vel-tracking-wide);
  background: rgba(124, 92, 252, 0.18);
  color: var(--vel-primary-300);
  border: 1px solid rgba(124, 92, 252, 0.3);
  border-radius: var(--vel-radius-full);
  font-family: var(--vel-font-mono);
}

/* ─── Filename ────────────────────────────── */

.vel-code-block-filename {
  font-size: var(--vel-size-sm);
  color: var(--vel-color-muted);
  font-family: var(--vel-font-mono);
  flex: 1;
}

/* ─── Copy Button ─────────────────────────── */

.vel-code-block-copy {
  display: inline-flex;
  align-items: center;
  gap: var(--vel-space-1);
  padding: var(--vel-space-1) var(--vel-space-3);
  font-size: var(--vel-size-xs);
  font-weight: var(--vel-font-medium);
  font-family: var(--vel-font-sans);
  color: var(--vel-color-muted);
  background: transparent;
  border: 1px solid var(--vel-border-base);
  border-radius: var(--vel-radius-md);
  cursor: pointer;
  transition:
    color var(--vel-duration-150) var(--vel-ease-out),
    border-color var(--vel-duration-150) var(--vel-ease-out),
    background-color var(--vel-duration-150) var(--vel-ease-out);
  white-space: nowrap;
}

.vel-code-block-copy:hover {
  color: var(--vel-color-text);
  border-color: var(--vel-primary-500);
  background-color: rgba(124, 92, 252, 0.08);
}

/* ─── Body ────────────────────────────────── */

.vel-code-block-body {
  overflow-x: auto;
  padding: var(--vel-space-4);
}

.vel-code-block-body pre {
  margin: 0;
  padding: 0;
  background: transparent;
  overflow: visible;
}

.vel-code-block-body code {
  font-family: var(--vel-font-mono);
  font-size: var(--vel-size-sm);
  line-height: 1.7;
  color: var(--vel-neutral-400);
  white-space: pre;
}

/* ─── Line Numbers ────────────────────────── */

.vel-code-block-line-numbers .vel-code-block-body {
  display: flex;
  gap: var(--vel-space-4);
}

.vel-code-block-line-numbers .vel-code-block-body::before {
  content: counter(vel-line-count);
  counter-reset: vel-line-count 0;
  display: block;
  flex-shrink: 0;
  min-width: 2rem;
  color: var(--vel-color-muted);
  text-align: right;
  font-family: var(--vel-font-mono);
  font-size: var(--vel-size-sm);
  line-height: 1.7;
  -webkit-user-select: none;
     -moz-user-select: none;
          user-select: none;
  border-right: 1px solid var(--vel-border-base);
  padding-right: var(--vel-space-3);
}

/* ─── Terminal Variant ────────────────────── */

.vel-code-block-terminal {
  background-color: var(--vel-surface-0);
}

.vel-code-block-terminal .vel-code-block-header {
  background-color: var(--vel-surface-1);
  gap: var(--vel-space-2);
}

.vel-code-block-terminal .vel-code-block-header::before {
  content: '';
  display: flex;
  width: 0.75rem;
  height: 0.75rem;
  border-radius: var(--vel-radius-full);
  background-color: var(--vel-danger-500);
  box-shadow:
    1.25rem 0 0 var(--vel-warning-400),
    2.5rem 0 0 var(--vel-success-400);
  flex-shrink: 0;
  margin-right: var(--vel-space-6);
}

.vel-code-block-terminal .vel-code-block-body code {
  color: var(--vel-success-400);
}

/* VeloraCSS — Chat Bubble Component */

/* ─── Container ───────────────────────────── */

.vel-chat {
  display: flex;
  flex-direction: column;
  gap: var(--vel-space-4);
}

/* ─── Alignment Variants ──────────────────── */

.vel-chat-start {
  align-items: flex-start;
}

.vel-chat-end {
  align-items: flex-end;
}

/* ─── Row Layout ──────────────────────────── */

.vel-chat-start,
.vel-chat-end {
  display: flex;
  flex-direction: row;
  gap: var(--vel-space-3);
}

.vel-chat-end {
  flex-direction: row-reverse;
}

/* ─── Avatar ──────────────────────────────── */

.vel-chat-avatar {
  width: 2rem;
  height: 2rem;
  border-radius: var(--vel-radius-full);
  overflow: hidden;
  flex-shrink: 0;
  background-color: var(--vel-surface-3);
  border: 1px solid var(--vel-border-base);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: var(--vel-size-xs);
  font-weight: var(--vel-font-semibold);
  color: var(--vel-color-muted);
}

.vel-chat-avatar img {
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
     object-fit: cover;
}

/* ─── Meta Wrapper ────────────────────────── */

.vel-chat-meta {
  display: flex;
  flex-direction: column;
  gap: var(--vel-space-1);
  max-width: 70%;
}

.vel-chat-end .vel-chat-meta {
  align-items: flex-end;
}

/* ─── Header / Footer ─────────────────────── */

.vel-chat-header,
.vel-chat-footer {
  font-size: var(--vel-size-xs);
  color: var(--vel-color-muted);
  padding: 0 var(--vel-space-1);
}

/* ─── Bubble ──────────────────────────────── */

.vel-chat-bubble {
  display: inline-block;
  padding: var(--vel-space-3) var(--vel-space-4);
  background-color: var(--vel-surface-3);
  color: var(--vel-color-text);
  font-size: var(--vel-size-base);
  line-height: var(--vel-leading-relaxed);
  border: 1px solid var(--vel-border-base);
  word-break: break-word;
}

.vel-chat-start .vel-chat-bubble {
  border-radius: var(--vel-radius-sm) var(--vel-radius-2xl) var(--vel-radius-2xl) var(--vel-radius-2xl);
}

.vel-chat-end .vel-chat-bubble {
  border-radius: var(--vel-radius-2xl) var(--vel-radius-sm) var(--vel-radius-2xl) var(--vel-radius-2xl);
}

/* ─── Bubble Variants ─────────────────────── */

.vel-chat-bubble-primary {
  background: var(--vel-gradient-primary);
  color: var(--vel-color-primary-fg);
  border-color: transparent;
}

.vel-chat-bubble-success {
  background: rgba(14, 203, 129, 0.18);
  color: var(--vel-success-300);
  border-color: rgba(14, 203, 129, 0.3);
}

.vel-chat-bubble-info {
  background: rgba(46, 189, 229, 0.15);
  color: var(--vel-info-300);
  border-color: rgba(46, 189, 229, 0.28);
}

.vel-chat-bubble-danger {
  background: rgba(240, 65, 108, 0.15);
  color: var(--vel-danger-300);
  border-color: rgba(240, 65, 108, 0.3);
}

/* VeloraCSS — File Upload / Dropzone Component */

/* ─── Dropzone ────────────────────────────── */

.vel-dropzone {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: var(--vel-space-3);
  padding: var(--vel-space-12) var(--vel-space-8);
  border: 2px dashed var(--vel-border-base);
  border-radius: var(--vel-radius-2xl);
  background-color: var(--vel-surface-1);
  text-align: center;
  cursor: pointer;
  transition:
    border-color var(--vel-duration-200) var(--vel-ease-out),
    background-color var(--vel-duration-200) var(--vel-ease-out);
}

.vel-dropzone:hover {
  border-color: var(--vel-primary-500);
  background-color: rgba(124, 92, 252, 0.06);
}

/* ─── Active / Drag-Over State ────────────── */

.vel-dropzone-active {
  border-color: var(--vel-primary-400);
  background-color: rgba(124, 92, 252, 0.1);
  transform: scale(1.01);
  box-shadow: 0 0 0 4px rgba(124, 92, 252, 0.15);
}

/* ─── Icon ────────────────────────────────── */

.vel-dropzone-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 3.5rem;
  height: 3.5rem;
  color: var(--vel-color-muted);
  font-size: 2rem;
}

.vel-dropzone-icon svg {
  width: 100%;
  height: 100%;
}

/* ─── Text ────────────────────────────────── */

.vel-dropzone-text {
  font-size: var(--vel-size-base);
  font-weight: var(--vel-font-medium);
  color: var(--vel-color-text);
}

.vel-dropzone-hint {
  font-size: var(--vel-size-sm);
  color: var(--vel-color-muted);
  margin-top: calc(var(--vel-space-1) * -1);
}

/* ─── File List ───────────────────────────── */

.vel-file-list {
  display: flex;
  flex-direction: column;
  gap: var(--vel-space-2);
  margin-top: var(--vel-space-4);
}

/* ─── File Item ───────────────────────────── */

.vel-file-item {
  display: flex;
  align-items: center;
  gap: var(--vel-space-3);
  padding: var(--vel-space-3) var(--vel-space-4);
  background-color: var(--vel-surface-2);
  border: 1px solid var(--vel-border-base);
  border-radius: var(--vel-radius-lg);
  transition: background-color var(--vel-duration-150) var(--vel-ease-out);
}

.vel-file-item:hover {
  background-color: var(--vel-surface-3);
}

/* ─── File Item Parts ─────────────────────── */

.vel-file-item-name {
  flex: 1;
  font-size: var(--vel-size-sm);
  font-weight: var(--vel-font-medium);
  color: var(--vel-color-text);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.vel-file-item-size {
  font-size: var(--vel-size-xs);
  color: var(--vel-color-muted);
  white-space: nowrap;
  flex-shrink: 0;
}

.vel-file-item-remove {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 1.5rem;
  height: 1.5rem;
  flex-shrink: 0;
  background: transparent;
  border: none;
  border-radius: var(--vel-radius-full);
  color: var(--vel-color-muted);
  font-size: var(--vel-size-base);
  cursor: pointer;
  transition:
    color var(--vel-duration-150) var(--vel-ease-out),
    background-color var(--vel-duration-150) var(--vel-ease-out);
}

.vel-file-item-remove:hover {
  color: var(--vel-danger-400);
  background-color: rgba(240, 65, 108, 0.12);
}

/* VeloraCSS — Hero Section Component */

/* ─── Base ────────────────────────────────── */

.vel-hero {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 80vh;
  padding: var(--vel-space-20) var(--vel-space-6);
  overflow: hidden;
  text-align: center;
  background-color: var(--vel-surface-bg);
}

/* ─── Size Variants ───────────────────────── */

.vel-hero-sm {
  min-height: 40vh;
}

.vel-hero-lg {
  min-height: 100vh;
}

/* ─── Background Variants ─────────────────── */

.vel-hero-gradient {
  background: var(--vel-gradient-primary);
}

.vel-hero-dark {
  background-color: var(--vel-surface-bg);
}

/* ─── Background Pattern ──────────────────── */

.vel-hero-bg-pattern {
  background-image:
    radial-gradient(circle, rgba(124, 92, 252, 0.07) 1px, transparent 1px);
  background-size: 2rem 2rem;
  background-position: center center;
}

.vel-hero-bg-pattern::before {
  content: '';
  position: absolute;
  inset: 0;
  background:
    radial-gradient(ellipse 80% 60% at 50% 50%, rgba(124, 92, 252, 0.12) 0%, transparent 70%);
  pointer-events: none;
}

/* ─── Content ─────────────────────────────── */

.vel-hero-content {
  position: relative;
  z-index: var(--vel-z-10);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--vel-space-6);
  max-width: 64rem;
  width: 100%;
}

/* ─── Eyebrow ─────────────────────────────── */

.vel-hero-eyebrow {
  display: inline-flex;
  align-items: center;
  gap: var(--vel-space-2);
  padding: 0.3em 1em;
  font-size: var(--vel-size-sm);
  font-weight: var(--vel-font-semibold);
  letter-spacing: var(--vel-tracking-wide);
  background: rgba(124, 92, 252, 0.15);
  color: var(--vel-primary-300);
  border: 1px solid rgba(124, 92, 252, 0.3);
  border-radius: var(--vel-radius-full);
}

/* ─── Title ───────────────────────────────── */

.vel-hero-title {
  font-size: clamp(var(--vel-size-4xl), 6vw, var(--vel-size-7xl));
  font-weight: var(--vel-font-bold);
  line-height: var(--vel-leading-tight);
  letter-spacing: var(--vel-tracking-tight);
  color: var(--vel-color-text);
  margin: 0;
}

/* ─── Subtitle ────────────────────────────── */

.vel-hero-subtitle {
  font-size: clamp(var(--vel-size-base), 2vw, var(--vel-size-xl));
  color: var(--vel-color-muted);
  line-height: var(--vel-leading-relaxed);
  max-width: 42rem;
  margin: 0;
}

/* ─── Actions ─────────────────────────────── */

.vel-hero-actions {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: var(--vel-space-4);
  margin-top: var(--vel-space-2);
}

/* VeloraCSS — Feature List Component */

/* ─── Section Wrapper ─────────────────────── */

.vel-features {
  padding: var(--vel-space-16) var(--vel-space-6);
}

/* ─── Grid ────────────────────────────────── */

.vel-features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: var(--vel-space-6);
}

/* ─── Feature Card ────────────────────────── */

.vel-feature-card {
  display: flex;
  flex-direction: column;
  gap: var(--vel-space-4);
  padding: var(--vel-space-6);
  background-color: var(--vel-surface-2);
  border: 1px solid var(--vel-border-base);
  border-radius: var(--vel-radius-2xl);
  transition:
    transform var(--vel-duration-200) var(--vel-ease-spring),
    box-shadow var(--vel-duration-200) var(--vel-ease-out),
    border-color var(--vel-duration-200) var(--vel-ease-out);
}

.vel-feature-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--vel-shadow-xl);
  border-color: rgba(124, 92, 252, 0.3);
}

/* ─── Feature Icon ────────────────────────── */

.vel-feature-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 3rem;
  height: 3rem;
  border-radius: var(--vel-radius-xl);
  background: rgba(124, 92, 252, 0.15);
  color: var(--vel-primary-400);
  font-size: 1.4rem;
  flex-shrink: 0;
}

.vel-feature-icon svg {
  width: 1.5rem;
  height: 1.5rem;
}

/* ─── Icon Color Variants ─────────────────── */

.vel-feature-icon-primary {
  background: rgba(124, 92, 252, 0.15);
  color: var(--vel-primary-400);
}

.vel-feature-icon-success {
  background: rgba(14, 203, 129, 0.14);
  color: var(--vel-success-400);
}

.vel-feature-icon-info {
  background: rgba(46, 189, 229, 0.14);
  color: var(--vel-info-400);
}

.vel-feature-icon-danger {
  background: rgba(240, 65, 108, 0.14);
  color: var(--vel-danger-400);
}

.vel-feature-icon-warning {
  background: rgba(255, 157, 0, 0.13);
  color: var(--vel-warning-400);
}

/* ─── Feature Text ────────────────────────── */

.vel-feature-title {
  font-size: var(--vel-size-lg);
  font-weight: var(--vel-font-semibold);
  color: var(--vel-color-text);
  margin: 0;
  line-height: var(--vel-leading-snug);
}

.vel-feature-text {
  font-size: var(--vel-size-base);
  color: var(--vel-color-muted);
  line-height: var(--vel-leading-relaxed);
  margin: 0;
}

/* VeloraCSS — Pricing Table Component */

/* ─── Grid ────────────────────────────────── */

.vel-pricing-grid {
  display: flex;
  flex-wrap: wrap;
  gap: var(--vel-space-6);
  justify-content: center;
  align-items: stretch;
}

/* ─── Pricing Card ────────────────────────── */

.vel-pricing-card {
  display: flex;
  flex-direction: column;
  flex: 1 1 280px;
  max-width: 360px;
  padding: var(--vel-space-8);
  background-color: var(--vel-surface-2);
  border: 1px solid var(--vel-border-base);
  border-radius: var(--vel-radius-2xl);
  box-shadow: var(--vel-shadow-md);
  transition:
    transform var(--vel-duration-200) var(--vel-ease-spring),
    box-shadow var(--vel-duration-200) var(--vel-ease-out);
}

.vel-pricing-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--vel-shadow-xl);
}

/* ─── Featured Card ───────────────────────── */

.vel-pricing-card-featured {
  position: relative;
  border-color: transparent;
  background-color: var(--vel-surface-3);
  box-shadow:
    var(--vel-shadow-xl),
    var(--vel-glow-sm-primary);
  transform: scale(1.02);
}

.vel-pricing-card-featured::before {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: var(--vel-radius-2xl);
  padding: 1px;
  background: var(--vel-gradient-primary);
  -webkit-mask:
    linear-gradient(#fff 0 0) content-box,
    linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  pointer-events: none;
}

.vel-pricing-card-featured:hover {
  transform: scale(1.02) translateY(-4px);
}

/* ─── Badge ───────────────────────────────── */

.vel-pricing-badge {
  position: absolute;
  top: calc(var(--vel-space-4) * -1);
  left: 50%;
  transform: translateX(-50%);
  display: inline-flex;
  align-items: center;
  padding: 0.25em 0.9em;
  font-size: var(--vel-size-xs);
  font-weight: var(--vel-font-bold);
  letter-spacing: var(--vel-tracking-wider);
  text-transform: uppercase;
  background: var(--vel-gradient-primary);
  color: var(--vel-color-primary-fg);
  border-radius: var(--vel-radius-full);
  white-space: nowrap;
  box-shadow: var(--vel-glow-sm-primary);
}

/* ─── Plan Name ───────────────────────────── */

.vel-pricing-name {
  font-size: var(--vel-size-xs);
  font-weight: var(--vel-font-bold);
  letter-spacing: var(--vel-tracking-widest);
  text-transform: uppercase;
  color: var(--vel-primary-400);
  margin: 0 0 var(--vel-space-3);
}

/* ─── Price ───────────────────────────────── */

.vel-pricing-price {
  font-size: var(--vel-size-6xl);
  font-weight: var(--vel-font-extrabold);
  line-height: 1;
  color: var(--vel-color-text);
  letter-spacing: var(--vel-tracking-tight);
  margin: 0;
}

.vel-pricing-period {
  font-size: var(--vel-size-base);
  font-weight: var(--vel-font-normal);
  color: var(--vel-color-muted);
  margin-left: var(--vel-space-1);
  letter-spacing: var(--vel-tracking-normal);
}

/* ─── Description ─────────────────────────── */

.vel-pricing-description {
  font-size: var(--vel-size-sm);
  color: var(--vel-color-muted);
  line-height: var(--vel-leading-relaxed);
  margin: var(--vel-space-3) 0 0;
}

/* ─── Divider ─────────────────────────────── */

.vel-pricing-divider {
  height: 1px;
  background-color: var(--vel-border-base);
  border: none;
  margin: var(--vel-space-6) 0;
}

/* ─── Feature List ────────────────────────── */

.vel-pricing-features {
  display: flex;
  flex-direction: column;
  gap: var(--vel-space-3);
  list-style: none;
  margin: 0;
  padding: 0;
  flex: 1;
}

/* ─── Feature Item ────────────────────────── */

.vel-pricing-feature {
  display: flex;
  align-items: flex-start;
  gap: var(--vel-space-3);
  font-size: var(--vel-size-sm);
  color: var(--vel-color-text);
  line-height: var(--vel-leading-normal);
}

/* ─── Check Indicator ─────────────────────── */

.vel-pricing-feature-check {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 1.1rem;
  height: 1.1rem;
  flex-shrink: 0;
  margin-top: 0.1em;
  border-radius: var(--vel-radius-full);
  background: rgba(14, 203, 129, 0.18);
  color: var(--vel-success-400);
  font-size: 0.65rem;
}

/* ─── CTA ─────────────────────────────────── */

.vel-pricing-cta {
  margin-top: auto;
  padding-top: var(--vel-space-6);
}

.vel-pricing-cta > * {
  width: 100%;
}


/* ============================================
   VeloraCSS — Responsive & State Variants
   ============================================ */

/* Responsive variants — sm | md | lg | xl | 2xl */
@media (min-width: 640px) {
 .vel-sm\\:block { display: block
 }
 .vel-sm\\:inline-block { display: inline-block
 }
 .vel-sm\\:inline { display: inline
 }
 .vel-sm\\:flex { display: flex
 }
 .vel-sm\\:inline-flex { display: inline-flex
 }
 .vel-sm\\:grid { display: grid
 }
 .vel-sm\\:inline-grid { display: inline-grid
 }
 .vel-sm\\:hidden { display: none
 }
 .vel-sm\\:table { display: table
 }
 .vel-sm\\:table-row { display: table-row
 }
 .vel-sm\\:table-cell { display: table-cell
 }
 .vel-sm\\:contents { display: contents
 }
 .vel-sm\\:static { position: static
 }
 .vel-sm\\:relative { position: relative
 }
 .vel-sm\\:absolute { position: absolute
 }
 .vel-sm\\:fixed { position: fixed
 }
 .vel-sm\\:sticky { position: sticky
 }
 .vel-sm\\:overflow-auto { overflow: auto
 }
 .vel-sm\\:overflow-hidden { overflow: hidden
 }
 .vel-sm\\:overflow-visible { overflow: visible
 }
 .vel-sm\\:overflow-scroll { overflow: scroll
 }
 .vel-sm\\:overflow-x-auto { overflow-x: auto
 }
 .vel-sm\\:overflow-x-hidden { overflow-x: hidden
 }
 .vel-sm\\:overflow-y-auto { overflow-y: auto
 }
 .vel-sm\\:overflow-y-hidden { overflow-y: hidden
 }
 .vel-sm\\:overflow-y-scroll { overflow-y: scroll
 }
 .vel-sm\\:overscroll-auto { overscroll-behavior: auto
 }
 .vel-sm\\:overscroll-contain { overscroll-behavior: contain
 }
 .vel-sm\\:overscroll-none { overscroll-behavior: none
 }
 .vel-sm\\:visible { visibility: visible
 }
 .vel-sm\\:invisible { visibility: hidden
 }
 .vel-sm\\:collapse { visibility: collapse
 }
 .vel-sm\\:z-0 { z-index: var(--vel-z-0)
 }
 .vel-sm\\:z-10 { z-index: var(--vel-z-10)
 }
 .vel-sm\\:z-20 { z-index: var(--vel-z-20)
 }
 .vel-sm\\:z-30 { z-index: var(--vel-z-30)
 }
 .vel-sm\\:z-40 { z-index: var(--vel-z-40)
 }
 .vel-sm\\:z-50 { z-index: var(--vel-z-50)
 }
 .vel-sm\\:z-auto { z-index: var(--vel-z-auto)
 }
 .vel-sm\\:float-left { float: left
 }
 .vel-sm\\:float-right { float: right
 }
 .vel-sm\\:float-none { float: none
 }
 .vel-sm\\:clear-left { clear: left
 }
 .vel-sm\\:clear-right { clear: right
 }
 .vel-sm\\:clear-both { clear: both
 }
 .vel-sm\\:clear-none { clear: none
 }
 .vel-sm\\:object-contain { -o-object-fit: contain; object-fit: contain
 }
 .vel-sm\\:object-cover { -o-object-fit: cover; object-fit: cover
 }
 .vel-sm\\:object-fill { -o-object-fit: fill; object-fit: fill
 }
 .vel-sm\\:object-none { -o-object-fit: none; object-fit: none
 }
 .vel-sm\\:object-scale-down { -o-object-fit: scale-down; object-fit: scale-down
 }
 .vel-sm\\:aspect-auto { aspect-ratio: auto
 }
 .vel-sm\\:aspect-square { aspect-ratio: 1 / 1
 }
 .vel-sm\\:aspect-video { aspect-ratio: 16 / 9
 }
 .vel-sm\\:columns-1 { -moz-columns: 1; columns: 1
 }
 .vel-sm\\:columns-2 { -moz-columns: 2; columns: 2
 }
 .vel-sm\\:columns-3 { -moz-columns: 3; columns: 3
 }
 .vel-sm\\:columns-4 { -moz-columns: 4; columns: 4
 }
 .vel-sm\\:columns-5 { -moz-columns: 5; columns: 5
 }
 .vel-sm\\:columns-6 { -moz-columns: 6; columns: 6
 }
 .vel-sm\\:columns-auto { -moz-columns: auto; columns: auto
 }
 .vel-sm\\:sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0
 }
 .vel-sm\\:flex-row { flex-direction: row
 }
 .vel-sm\\:flex-row-reverse { flex-direction: row-reverse
 }
 .vel-sm\\:flex-col { flex-direction: column
 }
 .vel-sm\\:flex-col-reverse { flex-direction: column-reverse
 }
 .vel-sm\\:flex-wrap { flex-wrap: wrap
 }
 .vel-sm\\:flex-wrap-reverse { flex-wrap: wrap-reverse
 }
 .vel-sm\\:flex-nowrap { flex-wrap: nowrap
 }
 .vel-sm\\:flex-1 { flex: 1 1 0%
 }
 .vel-sm\\:flex-auto { flex: 1 1 auto
 }
 .vel-sm\\:flex-initial { flex: 0 1 auto
 }
 .vel-sm\\:flex-none { flex: none
 }
 .vel-sm\\:grow { flex-grow: 1
 }
 .vel-sm\\:shrink { flex-shrink: 1
 }
 .vel-sm\\:items-start { align-items: flex-start
 }
 .vel-sm\\:items-end { align-items: flex-end
 }
 .vel-sm\\:items-center { align-items: center
 }
 .vel-sm\\:items-baseline { align-items: baseline
 }
 .vel-sm\\:items-stretch { align-items: stretch
 }
 .vel-sm\\:self-auto { align-self: auto
 }
 .vel-sm\\:self-start { align-self: flex-start
 }
 .vel-sm\\:self-end { align-self: flex-end
 }
 .vel-sm\\:self-center { align-self: center
 }
 .vel-sm\\:self-baseline { align-self: baseline
 }
 .vel-sm\\:self-stretch { align-self: stretch
 }
 .vel-sm\\:justify-start { justify-content: flex-start
 }
 .vel-sm\\:justify-end { justify-content: flex-end
 }
 .vel-sm\\:justify-center { justify-content: center
 }
 .vel-sm\\:justify-between { justify-content: space-between
 }
 .vel-sm\\:justify-around { justify-content: space-around
 }
 .vel-sm\\:justify-evenly { justify-content: space-evenly
 }
 .vel-sm\\:justify-stretch { justify-content: stretch
 }
 .vel-sm\\:justify-items-start { justify-items: start
 }
 .vel-sm\\:justify-items-end { justify-items: end
 }
 .vel-sm\\:justify-items-center { justify-items: center
 }
 .vel-sm\\:justify-items-stretch { justify-items: stretch
 }
 .vel-sm\\:justify-self-auto { justify-self: auto
 }
 .vel-sm\\:justify-self-start { justify-self: start
 }
 .vel-sm\\:justify-self-end { justify-self: end
 }
 .vel-sm\\:justify-self-center { justify-self: center
 }
 .vel-sm\\:justify-self-stretch { justify-self: stretch
 }
 .vel-sm\\:order-first { order: -9999
 }
 .vel-sm\\:order-last { order: 9999
 }
 .vel-sm\\:order-none { order: 0
 }
 .vel-sm\\:order-1 { order: 1
 }
 .vel-sm\\:order-2 { order: 2
 }
 .vel-sm\\:order-3 { order: 3
 }
 .vel-sm\\:order-4 { order: 4
 }
 .vel-sm\\:order-5 { order: 5
 }
 .vel-sm\\:gap-0 { gap: 0px
 }
 .vel-sm\\:gap-1 { gap: var(--vel-space-1)
 }
 .vel-sm\\:gap-2 { gap: var(--vel-space-2)
 }
 .vel-sm\\:gap-3 { gap: var(--vel-space-3)
 }
 .vel-sm\\:gap-4 { gap: var(--vel-space-4)
 }
 .vel-sm\\:gap-5 { gap: var(--vel-space-5)
 }
 .vel-sm\\:gap-6 { gap: var(--vel-space-6)
 }
 .vel-sm\\:gap-7 { gap: var(--vel-space-7)
 }
 .vel-sm\\:gap-8 { gap: var(--vel-space-8)
 }
 .vel-sm\\:gap-10 { gap: var(--vel-space-10)
 }
 .vel-sm\\:gap-12 { gap: var(--vel-space-12)
 }
 .vel-sm\\:gap-16 { gap: var(--vel-space-16)
 }
 .vel-sm\\:gap-px { gap: 1px
 }
 .vel-sm\\:gap-x-0 { -moz-column-gap: 0px; column-gap: 0px
 }
 .vel-sm\\:gap-x-1 { -moz-column-gap: var(--vel-space-1); column-gap: var(--vel-space-1)
 }
 .vel-sm\\:gap-x-2 { -moz-column-gap: var(--vel-space-2); column-gap: var(--vel-space-2)
 }
 .vel-sm\\:gap-x-3 { -moz-column-gap: var(--vel-space-3); column-gap: var(--vel-space-3)
 }
 .vel-sm\\:gap-x-4 { -moz-column-gap: var(--vel-space-4); column-gap: var(--vel-space-4)
 }
 .vel-sm\\:gap-x-5 { -moz-column-gap: var(--vel-space-5); column-gap: var(--vel-space-5)
 }
 .vel-sm\\:gap-x-6 { -moz-column-gap: var(--vel-space-6); column-gap: var(--vel-space-6)
 }
 .vel-sm\\:gap-x-8 { -moz-column-gap: var(--vel-space-8); column-gap: var(--vel-space-8)
 }
 .vel-sm\\:gap-y-0 { row-gap: 0px
 }
 .vel-sm\\:gap-y-1 { row-gap: var(--vel-space-1)
 }
 .vel-sm\\:gap-y-2 { row-gap: var(--vel-space-2)
 }
 .vel-sm\\:gap-y-3 { row-gap: var(--vel-space-3)
 }
 .vel-sm\\:gap-y-4 { row-gap: var(--vel-space-4)
 }
 .vel-sm\\:gap-y-5 { row-gap: var(--vel-space-5)
 }
 .vel-sm\\:gap-y-6 { row-gap: var(--vel-space-6)
 }
 .vel-sm\\:gap-y-8 { row-gap: var(--vel-space-8)
 }
 .vel-sm\\:grid-cols-1 { grid-template-columns: repeat(1, minmax(0, 1fr))
 }
 .vel-sm\\:grid-cols-2 { grid-template-columns: repeat(2, minmax(0, 1fr))
 }
 .vel-sm\\:grid-cols-3 { grid-template-columns: repeat(3, minmax(0, 1fr))
 }
 .vel-sm\\:grid-cols-4 { grid-template-columns: repeat(4, minmax(0, 1fr))
 }
 .vel-sm\\:grid-cols-5 { grid-template-columns: repeat(5, minmax(0, 1fr))
 }
 .vel-sm\\:grid-cols-6 { grid-template-columns: repeat(6, minmax(0, 1fr))
 }
 .vel-sm\\:grid-cols-7 { grid-template-columns: repeat(7, minmax(0, 1fr))
 }
 .vel-sm\\:grid-cols-8 { grid-template-columns: repeat(8, minmax(0, 1fr))
 }
 .vel-sm\\:grid-cols-9 { grid-template-columns: repeat(9, minmax(0, 1fr))
 }
 .vel-sm\\:grid-cols-10 { grid-template-columns: repeat(10, minmax(0, 1fr))
 }
 .vel-sm\\:grid-cols-11 { grid-template-columns: repeat(11, minmax(0, 1fr))
 }
 .vel-sm\\:grid-cols-12 { grid-template-columns: repeat(12, minmax(0, 1fr))
 }
 .vel-sm\\:grid-cols-none { grid-template-columns: none
 }
 .vel-sm\\:col-auto { grid-column: auto
 }
 .vel-sm\\:col-span-1 { grid-column: span 1 / span 1
 }
 .vel-sm\\:col-span-2 { grid-column: span 2 / span 2
 }
 .vel-sm\\:col-span-3 { grid-column: span 3 / span 3
 }
 .vel-sm\\:col-span-4 { grid-column: span 4 / span 4
 }
 .vel-sm\\:col-span-5 { grid-column: span 5 / span 5
 }
 .vel-sm\\:col-span-6 { grid-column: span 6 / span 6
 }
 .vel-sm\\:col-span-7 { grid-column: span 7 / span 7
 }
 .vel-sm\\:col-span-8 { grid-column: span 8 / span 8
 }
 .vel-sm\\:col-span-9 { grid-column: span 9 / span 9
 }
 .vel-sm\\:col-span-10 { grid-column: span 10 / span 10
 }
 .vel-sm\\:col-span-11 { grid-column: span 11 / span 11
 }
 .vel-sm\\:col-span-12 { grid-column: span 12 / span 12
 }
 .vel-sm\\:col-span-full { grid-column: 1 / -1
 }
 .vel-sm\\:col-start-1 { grid-column-start: 1
 }
 .vel-sm\\:col-start-2 { grid-column-start: 2
 }
 .vel-sm\\:col-start-3 { grid-column-start: 3
 }
 .vel-sm\\:col-start-4 { grid-column-start: 4
 }
 .vel-sm\\:col-start-auto { grid-column-start: auto
 }
 .vel-sm\\:col-end-1 { grid-column-end: 1
 }
 .vel-sm\\:col-end-2 { grid-column-end: 2
 }
 .vel-sm\\:col-end-3 { grid-column-end: 3
 }
 .vel-sm\\:col-end-4 { grid-column-end: 4
 }
 .vel-sm\\:col-end-auto { grid-column-end: auto
 }
 .vel-sm\\:grid-rows-1 { grid-template-rows: repeat(1, minmax(0, 1fr))
 }
 .vel-sm\\:grid-rows-2 { grid-template-rows: repeat(2, minmax(0, 1fr))
 }
 .vel-sm\\:grid-rows-3 { grid-template-rows: repeat(3, minmax(0, 1fr))
 }
 .vel-sm\\:grid-rows-4 { grid-template-rows: repeat(4, minmax(0, 1fr))
 }
 .vel-sm\\:grid-rows-5 { grid-template-rows: repeat(5, minmax(0, 1fr))
 }
 .vel-sm\\:grid-rows-6 { grid-template-rows: repeat(6, minmax(0, 1fr))
 }
 .vel-sm\\:grid-rows-none { grid-template-rows: none
 }
 .vel-sm\\:row-auto { grid-row: auto
 }
 .vel-sm\\:row-span-1 { grid-row: span 1 / span 1
 }
 .vel-sm\\:row-span-2 { grid-row: span 2 / span 2
 }
 .vel-sm\\:row-span-3 { grid-row: span 3 / span 3
 }
 .vel-sm\\:row-span-4 { grid-row: span 4 / span 4
 }
 .vel-sm\\:row-span-5 { grid-row: span 5 / span 5
 }
 .vel-sm\\:row-span-6 { grid-row: span 6 / span 6
 }
 .vel-sm\\:row-span-full { grid-row: 1 / -1
 }
 .vel-sm\\:row-start-1 { grid-row-start: 1
 }
 .vel-sm\\:row-start-2 { grid-row-start: 2
 }
 .vel-sm\\:row-start-3 { grid-row-start: 3
 }
 .vel-sm\\:row-start-auto { grid-row-start: auto
 }
 .vel-sm\\:row-end-1 { grid-row-end: 1
 }
 .vel-sm\\:row-end-2 { grid-row-end: 2
 }
 .vel-sm\\:row-end-3 { grid-row-end: 3
 }
 .vel-sm\\:row-end-auto { grid-row-end: auto
 }
 .vel-sm\\:grid-flow-row { grid-auto-flow: row
 }
 .vel-sm\\:grid-flow-col { grid-auto-flow: column
 }
 .vel-sm\\:grid-flow-dense { grid-auto-flow: dense
 }
 .vel-sm\\:grid-flow-row-dense { grid-auto-flow: row dense
 }
 .vel-sm\\:grid-flow-col-dense { grid-auto-flow: column dense
 }
 .vel-sm\\:p-0 { padding: 0px
 }
 .vel-sm\\:p-px { padding: 1px
 }
 .vel-sm\\:p-1 { padding: var(--vel-space-1)
 }
 .vel-sm\\:p-2 { padding: var(--vel-space-2)
 }
 .vel-sm\\:p-3 { padding: var(--vel-space-3)
 }
 .vel-sm\\:p-4 { padding: var(--vel-space-4)
 }
 .vel-sm\\:p-5 { padding: var(--vel-space-5)
 }
 .vel-sm\\:p-6 { padding: var(--vel-space-6)
 }
 .vel-sm\\:p-7 { padding: var(--vel-space-7)
 }
 .vel-sm\\:p-8 { padding: var(--vel-space-8)
 }
 .vel-sm\\:p-9 { padding: var(--vel-space-9)
 }
 .vel-sm\\:p-10 { padding: var(--vel-space-10)
 }
 .vel-sm\\:p-11 { padding: var(--vel-space-11)
 }
 .vel-sm\\:p-12 { padding: var(--vel-space-12)
 }
 .vel-sm\\:p-14 { padding: var(--vel-space-14)
 }
 .vel-sm\\:p-16 { padding: var(--vel-space-16)
 }
 .vel-sm\\:p-20 { padding: var(--vel-space-20)
 }
 .vel-sm\\:p-24 { padding: var(--vel-space-24)
 }
 .vel-sm\\:p-28 { padding: var(--vel-space-28)
 }
 .vel-sm\\:p-32 { padding: var(--vel-space-32)
 }
 .vel-sm\\:pt-0 { padding-top: 0px
 }
 .vel-sm\\:pt-1 { padding-top: var(--vel-space-1)
 }
 .vel-sm\\:pt-2 { padding-top: var(--vel-space-2)
 }
 .vel-sm\\:pt-3 { padding-top: var(--vel-space-3)
 }
 .vel-sm\\:pt-4 { padding-top: var(--vel-space-4)
 }
 .vel-sm\\:pt-5 { padding-top: var(--vel-space-5)
 }
 .vel-sm\\:pt-6 { padding-top: var(--vel-space-6)
 }
 .vel-sm\\:pt-8 { padding-top: var(--vel-space-8)
 }
 .vel-sm\\:pt-10 { padding-top: var(--vel-space-10)
 }
 .vel-sm\\:pt-12 { padding-top: var(--vel-space-12)
 }
 .vel-sm\\:pt-16 { padding-top: var(--vel-space-16)
 }
 .vel-sm\\:pr-0 { padding-right: 0px
 }
 .vel-sm\\:pr-1 { padding-right: var(--vel-space-1)
 }
 .vel-sm\\:pr-2 { padding-right: var(--vel-space-2)
 }
 .vel-sm\\:pr-3 { padding-right: var(--vel-space-3)
 }
 .vel-sm\\:pr-4 { padding-right: var(--vel-space-4)
 }
 .vel-sm\\:pr-5 { padding-right: var(--vel-space-5)
 }
 .vel-sm\\:pr-6 { padding-right: var(--vel-space-6)
 }
 .vel-sm\\:pr-8 { padding-right: var(--vel-space-8)
 }
 .vel-sm\\:pr-12 { padding-right: var(--vel-space-12)
 }
 .vel-sm\\:pb-0 { padding-bottom: 0px
 }
 .vel-sm\\:pb-1 { padding-bottom: var(--vel-space-1)
 }
 .vel-sm\\:pb-2 { padding-bottom: var(--vel-space-2)
 }
 .vel-sm\\:pb-3 { padding-bottom: var(--vel-space-3)
 }
 .vel-sm\\:pb-4 { padding-bottom: var(--vel-space-4)
 }
 .vel-sm\\:pb-5 { padding-bottom: var(--vel-space-5)
 }
 .vel-sm\\:pb-6 { padding-bottom: var(--vel-space-6)
 }
 .vel-sm\\:pb-8 { padding-bottom: var(--vel-space-8)
 }
 .vel-sm\\:pb-12 { padding-bottom: var(--vel-space-12)
 }
 .vel-sm\\:pl-0 { padding-left: 0px
 }
 .vel-sm\\:pl-1 { padding-left: var(--vel-space-1)
 }
 .vel-sm\\:pl-2 { padding-left: var(--vel-space-2)
 }
 .vel-sm\\:pl-3 { padding-left: var(--vel-space-3)
 }
 .vel-sm\\:pl-4 { padding-left: var(--vel-space-4)
 }
 .vel-sm\\:pl-5 { padding-left: var(--vel-space-5)
 }
 .vel-sm\\:pl-6 { padding-left: var(--vel-space-6)
 }
 .vel-sm\\:pl-8 { padding-left: var(--vel-space-8)
 }
 .vel-sm\\:pl-12 { padding-left: var(--vel-space-12)
 }
 .vel-sm\\:m-0 { margin: 0px
 }
 .vel-sm\\:m-px { margin: 1px
 }
 .vel-sm\\:m-auto { margin: auto
 }
 .vel-sm\\:m-1 { margin: var(--vel-space-1)
 }
 .vel-sm\\:m-2 { margin: var(--vel-space-2)
 }
 .vel-sm\\:m-3 { margin: var(--vel-space-3)
 }
 .vel-sm\\:m-4 { margin: var(--vel-space-4)
 }
 .vel-sm\\:m-5 { margin: var(--vel-space-5)
 }
 .vel-sm\\:m-6 { margin: var(--vel-space-6)
 }
 .vel-sm\\:m-7 { margin: var(--vel-space-7)
 }
 .vel-sm\\:m-8 { margin: var(--vel-space-8)
 }
 .vel-sm\\:m-10 { margin: var(--vel-space-10)
 }
 .vel-sm\\:m-12 { margin: var(--vel-space-12)
 }
 .vel-sm\\:m-16 { margin: var(--vel-space-16)
 }
 .vel-sm\\:mt-0 { margin-top: 0px
 }
 .vel-sm\\:mt-auto { margin-top: auto
 }
 .vel-sm\\:mt-1 { margin-top: var(--vel-space-1)
 }
 .vel-sm\\:mt-2 { margin-top: var(--vel-space-2)
 }
 .vel-sm\\:mt-3 { margin-top: var(--vel-space-3)
 }
 .vel-sm\\:mt-4 { margin-top: var(--vel-space-4)
 }
 .vel-sm\\:mt-5 { margin-top: var(--vel-space-5)
 }
 .vel-sm\\:mt-6 { margin-top: var(--vel-space-6)
 }
 .vel-sm\\:mt-8 { margin-top: var(--vel-space-8)
 }
 .vel-sm\\:mt-10 { margin-top: var(--vel-space-10)
 }
 .vel-sm\\:mt-12 { margin-top: var(--vel-space-12)
 }
 .vel-sm\\:mt-16 { margin-top: var(--vel-space-16)
 }
 .vel-sm\\:mr-0 { margin-right: 0px
 }
 .vel-sm\\:mr-auto { margin-right: auto
 }
 .vel-sm\\:mr-1 { margin-right: var(--vel-space-1)
 }
 .vel-sm\\:mr-2 { margin-right: var(--vel-space-2)
 }
 .vel-sm\\:mr-3 { margin-right: var(--vel-space-3)
 }
 .vel-sm\\:mr-4 { margin-right: var(--vel-space-4)
 }
 .vel-sm\\:mr-6 { margin-right: var(--vel-space-6)
 }
 .vel-sm\\:mr-8 { margin-right: var(--vel-space-8)
 }
 .vel-sm\\:mb-0 { margin-bottom: 0px
 }
 .vel-sm\\:mb-auto { margin-bottom: auto
 }
 .vel-sm\\:mb-1 { margin-bottom: var(--vel-space-1)
 }
 .vel-sm\\:mb-2 { margin-bottom: var(--vel-space-2)
 }
 .vel-sm\\:mb-3 { margin-bottom: var(--vel-space-3)
 }
 .vel-sm\\:mb-4 { margin-bottom: var(--vel-space-4)
 }
 .vel-sm\\:mb-5 { margin-bottom: var(--vel-space-5)
 }
 .vel-sm\\:mb-6 { margin-bottom: var(--vel-space-6)
 }
 .vel-sm\\:mb-8 { margin-bottom: var(--vel-space-8)
 }
 .vel-sm\\:mb-10 { margin-bottom: var(--vel-space-10)
 }
 .vel-sm\\:mb-12 { margin-bottom: var(--vel-space-12)
 }
 .vel-sm\\:mb-16 { margin-bottom: var(--vel-space-16)
 }
 .vel-sm\\:ml-0 { margin-left: 0px
 }
 .vel-sm\\:ml-auto { margin-left: auto
 }
 .vel-sm\\:ml-1 { margin-left: var(--vel-space-1)
 }
 .vel-sm\\:ml-2 { margin-left: var(--vel-space-2)
 }
 .vel-sm\\:ml-3 { margin-left: var(--vel-space-3)
 }
 .vel-sm\\:ml-4 { margin-left: var(--vel-space-4)
 }
 .vel-sm\\:ml-6 { margin-left: var(--vel-space-6)
 }
 .vel-sm\\:ml-8 { margin-left: var(--vel-space-8)
 }
 .vel-sm\\:w-0 { width: 0px
 }
 .vel-sm\\:w-px { width: 1px
 }
 .vel-sm\\:w-auto { width: auto
 }
 .vel-sm\\:w-full { width: 100%
 }
 .vel-sm\\:w-screen { width: 100vw
 }
 .vel-sm\\:w-svw { width: 100svw
 }
 .vel-sm\\:w-dvw { width: 100dvw
 }
 .vel-sm\\:w-min { width: -moz-min-content; width: min-content
 }
 .vel-sm\\:w-max { width: -moz-max-content; width: max-content
 }
 .vel-sm\\:w-fit { width: -moz-fit-content; width: fit-content
 }
 .vel-sm\\:w-1 { width: var(--vel-space-1)
 }
 .vel-sm\\:w-2 { width: var(--vel-space-2)
 }
 .vel-sm\\:w-3 { width: var(--vel-space-3)
 }
 .vel-sm\\:w-4 { width: var(--vel-space-4)
 }
 .vel-sm\\:w-5 { width: var(--vel-space-5)
 }
 .vel-sm\\:w-6 { width: var(--vel-space-6)
 }
 .vel-sm\\:w-7 { width: var(--vel-space-7)
 }
 .vel-sm\\:w-8 { width: var(--vel-space-8)
 }
 .vel-sm\\:w-9 { width: var(--vel-space-9)
 }
 .vel-sm\\:w-10 { width: var(--vel-space-10)
 }
 .vel-sm\\:w-11 { width: var(--vel-space-11)
 }
 .vel-sm\\:w-12 { width: var(--vel-space-12)
 }
 .vel-sm\\:w-14 { width: var(--vel-space-14)
 }
 .vel-sm\\:w-16 { width: var(--vel-space-16)
 }
 .vel-sm\\:w-20 { width: var(--vel-space-20)
 }
 .vel-sm\\:w-24 { width: var(--vel-space-24)
 }
 .vel-sm\\:w-28 { width: var(--vel-space-28)
 }
 .vel-sm\\:w-32 { width: var(--vel-space-32)
 }
 .vel-sm\\:w-36 { width: var(--vel-space-36)
 }
 .vel-sm\\:w-40 { width: var(--vel-space-40)
 }
 .vel-sm\\:w-48 { width: var(--vel-space-48)
 }
 .vel-sm\\:w-56 { width: var(--vel-space-56)
 }
 .vel-sm\\:w-64 { width: var(--vel-space-64)
 }
 .vel-sm\\:w-72 { width: var(--vel-space-72)
 }
 .vel-sm\\:w-80 { width: var(--vel-space-80)
 }
 .vel-sm\\:w-96 { width: var(--vel-space-96)
 }
 .vel-sm\\:min-w-0 { min-width: 0px
 }
 .vel-sm\\:min-w-full { min-width: 100%
 }
 .vel-sm\\:min-w-min { min-width: -moz-min-content; min-width: min-content
 }
 .vel-sm\\:min-w-max { min-width: -moz-max-content; min-width: max-content
 }
 .vel-sm\\:min-w-fit { min-width: -moz-fit-content; min-width: fit-content
 }
 .vel-sm\\:max-w-none { max-width: none
 }
 .vel-sm\\:max-w-xs { max-width: 20rem
 }
 .vel-sm\\:max-w-sm { max-width: 24rem
 }
 .vel-sm\\:max-w-md { max-width: 28rem
 }
 .vel-sm\\:max-w-lg { max-width: 32rem
 }
 .vel-sm\\:max-w-xl { max-width: 36rem
 }
 .vel-sm\\:max-w-2xl { max-width: 42rem
 }
 .vel-sm\\:max-w-3xl { max-width: 48rem
 }
 .vel-sm\\:max-w-4xl { max-width: 56rem
 }
 .vel-sm\\:max-w-5xl { max-width: 64rem
 }
 .vel-sm\\:max-w-6xl { max-width: 72rem
 }
 .vel-sm\\:max-w-7xl { max-width: 80rem
 }
 .vel-sm\\:max-w-full { max-width: 100%
 }
 .vel-sm\\:max-w-min { max-width: -moz-min-content; max-width: min-content
 }
 .vel-sm\\:max-w-max { max-width: -moz-max-content; max-width: max-content
 }
 .vel-sm\\:max-w-fit { max-width: -moz-fit-content; max-width: fit-content
 }
 .vel-sm\\:max-w-prose { max-width: 65ch
 }
 .vel-sm\\:max-w-screen-sm { max-width: 640px
 }
 .vel-sm\\:max-w-screen-md { max-width: 768px
 }
 .vel-sm\\:max-w-screen-lg { max-width: 1024px
 }
 .vel-sm\\:max-w-screen-xl { max-width: 1280px
 }
 .vel-sm\\:max-w-screen-2xl { max-width: 1536px
 }
 .vel-sm\\:h-0 { height: 0px
 }
 .vel-sm\\:h-px { height: 1px
 }
 .vel-sm\\:h-auto { height: auto
 }
 .vel-sm\\:h-full { height: 100%
 }
 .vel-sm\\:h-screen { height: 100vh
 }
 .vel-sm\\:h-svh { height: 100svh
 }
 .vel-sm\\:h-dvh { height: 100dvh
 }
 .vel-sm\\:h-min { height: -moz-min-content; height: min-content
 }
 .vel-sm\\:h-max { height: -moz-max-content; height: max-content
 }
 .vel-sm\\:h-fit { height: -moz-fit-content; height: fit-content
 }
 .vel-sm\\:h-1 { height: var(--vel-space-1)
 }
 .vel-sm\\:h-2 { height: var(--vel-space-2)
 }
 .vel-sm\\:h-3 { height: var(--vel-space-3)
 }
 .vel-sm\\:h-4 { height: var(--vel-space-4)
 }
 .vel-sm\\:h-5 { height: var(--vel-space-5)
 }
 .vel-sm\\:h-6 { height: var(--vel-space-6)
 }
 .vel-sm\\:h-7 { height: var(--vel-space-7)
 }
 .vel-sm\\:h-8 { height: var(--vel-space-8)
 }
 .vel-sm\\:h-9 { height: var(--vel-space-9)
 }
 .vel-sm\\:h-10 { height: var(--vel-space-10)
 }
 .vel-sm\\:h-11 { height: var(--vel-space-11)
 }
 .vel-sm\\:h-12 { height: var(--vel-space-12)
 }
 .vel-sm\\:h-14 { height: var(--vel-space-14)
 }
 .vel-sm\\:h-16 { height: var(--vel-space-16)
 }
 .vel-sm\\:h-20 { height: var(--vel-space-20)
 }
 .vel-sm\\:h-24 { height: var(--vel-space-24)
 }
 .vel-sm\\:h-28 { height: var(--vel-space-28)
 }
 .vel-sm\\:h-32 { height: var(--vel-space-32)
 }
 .vel-sm\\:h-36 { height: var(--vel-space-36)
 }
 .vel-sm\\:h-40 { height: var(--vel-space-40)
 }
 .vel-sm\\:h-48 { height: var(--vel-space-48)
 }
 .vel-sm\\:h-56 { height: var(--vel-space-56)
 }
 .vel-sm\\:h-64 { height: var(--vel-space-64)
 }
 .vel-sm\\:min-h-0 { min-height: 0px
 }
 .vel-sm\\:min-h-full { min-height: 100%
 }
 .vel-sm\\:min-h-screen { min-height: 100vh
 }
 .vel-sm\\:min-h-svh { min-height: 100svh
 }
 .vel-sm\\:min-h-dvh { min-height: 100dvh
 }
 .vel-sm\\:min-h-min { min-height: -moz-min-content; min-height: min-content
 }
 .vel-sm\\:min-h-max { min-height: -moz-max-content; min-height: max-content
 }
 .vel-sm\\:min-h-fit { min-height: -moz-fit-content; min-height: fit-content
 }
 .vel-sm\\:max-h-none { max-height: none
 }
 .vel-sm\\:max-h-full { max-height: 100%
 }
 .vel-sm\\:max-h-screen { max-height: 100vh
 }
 .vel-sm\\:max-h-svh { max-height: 100svh
 }
 .vel-sm\\:max-h-dvh { max-height: 100dvh
 }
 .vel-sm\\:max-h-min { max-height: -moz-min-content; max-height: min-content
 }
 .vel-sm\\:max-h-max { max-height: -moz-max-content; max-height: max-content
 }
 .vel-sm\\:max-h-fit { max-height: -moz-fit-content; max-height: fit-content
 }
 .vel-sm\\:max-h-24 { max-height: var(--vel-space-24)
 }
 .vel-sm\\:max-h-48 { max-height: var(--vel-space-48)
 }
 .vel-sm\\:max-h-64 { max-height: var(--vel-space-64)
 }
 .vel-sm\\:max-h-96 { max-height: var(--vel-space-96)
 }
 .vel-sm\\:font-sans { font-family: var(--vel-font-sans)
 }
 .vel-sm\\:font-serif { font-family: var(--vel-font-serif)
 }
 .vel-sm\\:font-mono { font-family: var(--vel-font-mono)
 }
 .vel-sm\\:text-xs { font-size: var(--vel-text-xs); line-height: 1rem
 }
 .vel-sm\\:text-sm { font-size: var(--vel-text-sm); line-height: 1.25rem
 }
 .vel-sm\\:text-base { font-size: var(--vel-text-base); line-height: 1.5rem
 }
 .vel-sm\\:text-lg { font-size: var(--vel-text-lg); line-height: 1.75rem
 }
 .vel-sm\\:text-xl { font-size: var(--vel-text-xl); line-height: 1.75rem
 }
 .vel-sm\\:text-2xl { font-size: var(--vel-text-2xl); line-height: 2rem
 }
 .vel-sm\\:text-3xl { font-size: var(--vel-text-3xl); line-height: 2.25rem
 }
 .vel-sm\\:text-4xl { font-size: var(--vel-text-4xl); line-height: 2.5rem
 }
 .vel-sm\\:text-5xl { font-size: var(--vel-text-5xl); line-height: 1
 }
 .vel-sm\\:text-6xl { font-size: var(--vel-text-6xl); line-height: 1
 }
 .vel-sm\\:text-7xl { font-size: var(--vel-text-7xl); line-height: 1
 }
 .vel-sm\\:text-8xl { font-size: var(--vel-text-8xl); line-height: 1
 }
 .vel-sm\\:text-9xl { font-size: var(--vel-text-9xl); line-height: 1
 }
 .vel-sm\\:font-thin { font-weight: 100
 }
 .vel-sm\\:font-extralight { font-weight: 200
 }
 .vel-sm\\:font-light { font-weight: 300
 }
 .vel-sm\\:font-normal { font-weight: 400
 }
 .vel-sm\\:font-medium { font-weight: 500
 }
 .vel-sm\\:font-semibold { font-weight: 600
 }
 .vel-sm\\:font-bold { font-weight: 700
 }
 .vel-sm\\:font-extrabold { font-weight: 800
 }
 .vel-sm\\:font-black { font-weight: 900
 }
 .vel-sm\\:italic { font-style: italic
 }
 .vel-sm\\:not-italic { font-style: normal
 }
 .vel-sm\\:leading-none { line-height: 1
 }
 .vel-sm\\:leading-tight { line-height: 1.25
 }
 .vel-sm\\:leading-snug { line-height: 1.375
 }
 .vel-sm\\:leading-normal { line-height: 1.5
 }
 .vel-sm\\:leading-relaxed { line-height: 1.625
 }
 .vel-sm\\:leading-loose { line-height: 2
 }
 .vel-sm\\:leading-3 { line-height: 0.75rem
 }
 .vel-sm\\:leading-4 { line-height: 1rem
 }
 .vel-sm\\:leading-5 { line-height: 1.25rem
 }
 .vel-sm\\:leading-6 { line-height: 1.5rem
 }
 .vel-sm\\:leading-7 { line-height: 1.75rem
 }
 .vel-sm\\:leading-8 { line-height: 2rem
 }
 .vel-sm\\:leading-9 { line-height: 2.25rem
 }
 .vel-sm\\:leading-10 { line-height: 2.5rem
 }
 .vel-sm\\:tracking-tighter { letter-spacing: -0.05em
 }
 .vel-sm\\:tracking-tight { letter-spacing: -0.025em
 }
 .vel-sm\\:tracking-normal { letter-spacing: 0em
 }
 .vel-sm\\:tracking-wide { letter-spacing: 0.025em
 }
 .vel-sm\\:tracking-wider { letter-spacing: 0.05em
 }
 .vel-sm\\:tracking-widest { letter-spacing: 0.1em
 }
 .vel-sm\\:text-left { text-align: left
 }
 .vel-sm\\:text-center { text-align: center
 }
 .vel-sm\\:text-right { text-align: right
 }
 .vel-sm\\:text-justify { text-align: justify
 }
 .vel-sm\\:text-start { text-align: start
 }
 .vel-sm\\:text-end { text-align: end
 }
 .vel-sm\\:underline { text-decoration-line: underline
 }
 .vel-sm\\:line-through { text-decoration-line: line-through
 }
 .vel-sm\\:no-underline { text-decoration-line: none
 }
 .vel-sm\\:uppercase { text-transform: uppercase
 }
 .vel-sm\\:lowercase { text-transform: lowercase
 }
 .vel-sm\\:capitalize { text-transform: capitalize
 }
 .vel-sm\\:normal-case { text-transform: none
 }
 .vel-sm\\:truncate { overflow: hidden; text-overflow: ellipsis; white-space: nowrap
 }
 .vel-sm\\:text-ellipsis { text-overflow: ellipsis
 }
 .vel-sm\\:text-clip { text-overflow: clip
 }
 .vel-sm\\:whitespace-normal { white-space: normal
 }
 .vel-sm\\:whitespace-nowrap { white-space: nowrap
 }
 .vel-sm\\:whitespace-pre { white-space: pre
 }
 .vel-sm\\:whitespace-pre-line { white-space: pre-line
 }
 .vel-sm\\:whitespace-pre-wrap { white-space: pre-wrap
 }
 .vel-sm\\:whitespace-break-spaces { white-space: break-spaces
 }
 .vel-sm\\:text-inherit { color: inherit
 }
 .vel-sm\\:text-current { color: currentColor
 }
 .vel-sm\\:text-transparent { color: transparent
 }
 .vel-sm\\:text-white { color: #ffffff
 }
 .vel-sm\\:text-black { color: #000000
 }
 .vel-sm\\:text-primary { color: var(--vel-color-primary)
 }
 .vel-sm\\:text-secondary { color: var(--vel-color-secondary)
 }
 .vel-sm\\:text-success { color: var(--vel-color-success)
 }
 .vel-sm\\:text-danger { color: var(--vel-color-danger)
 }
 .vel-sm\\:text-warning { color: var(--vel-color-warning)
 }
 .vel-sm\\:text-info { color: var(--vel-color-info)
 }
 .vel-sm\\:text-neutral-50 { color: var(--vel-neutral-50)
 }
 .vel-sm\\:text-neutral-100 { color: var(--vel-neutral-100)
 }
 .vel-sm\\:text-neutral-200 { color: var(--vel-neutral-200)
 }
 .vel-sm\\:text-neutral-300 { color: var(--vel-neutral-300)
 }
 .vel-sm\\:text-neutral-400 { color: var(--vel-neutral-400)
 }
 .vel-sm\\:text-neutral-500 { color: var(--vel-neutral-500)
 }
 .vel-sm\\:text-neutral-600 { color: var(--vel-neutral-600)
 }
 .vel-sm\\:text-neutral-700 { color: var(--vel-neutral-700)
 }
 .vel-sm\\:text-neutral-800 { color: var(--vel-neutral-800)
 }
 .vel-sm\\:text-neutral-900 { color: var(--vel-neutral-900)
 }
 .vel-sm\\:text-neutral-950 { color: var(--vel-neutral-950)
 }
 .vel-sm\\:text-primary-50 { color: var(--vel-primary-50)
 }
 .vel-sm\\:text-primary-100 { color: var(--vel-primary-100)
 }
 .vel-sm\\:text-primary-200 { color: var(--vel-primary-200)
 }
 .vel-sm\\:text-primary-300 { color: var(--vel-primary-300)
 }
 .vel-sm\\:text-primary-400 { color: var(--vel-primary-400)
 }
 .vel-sm\\:text-primary-500 { color: var(--vel-primary-500)
 }
 .vel-sm\\:text-primary-600 { color: var(--vel-primary-600)
 }
 .vel-sm\\:text-primary-700 { color: var(--vel-primary-700)
 }
 .vel-sm\\:text-primary-800 { color: var(--vel-primary-800)
 }
 .vel-sm\\:text-primary-900 { color: var(--vel-primary-900)
 }
 .vel-sm\\:text-primary-950 { color: var(--vel-primary-950)
 }
 .vel-sm\\:text-success-50 { color: var(--vel-success-50)
 }
 .vel-sm\\:text-success-100 { color: var(--vel-success-100)
 }
 .vel-sm\\:text-success-200 { color: var(--vel-success-200)
 }
 .vel-sm\\:text-success-300 { color: var(--vel-success-300)
 }
 .vel-sm\\:text-success-400 { color: var(--vel-success-400)
 }
 .vel-sm\\:text-success-500 { color: var(--vel-success-500)
 }
 .vel-sm\\:text-success-600 { color: var(--vel-success-600)
 }
 .vel-sm\\:text-success-700 { color: var(--vel-success-700)
 }
 .vel-sm\\:text-danger-50 { color: var(--vel-danger-50)
 }
 .vel-sm\\:text-danger-100 { color: var(--vel-danger-100)
 }
 .vel-sm\\:text-danger-300 { color: var(--vel-danger-300)
 }
 .vel-sm\\:text-danger-400 { color: var(--vel-danger-400)
 }
 .vel-sm\\:text-danger-500 { color: var(--vel-danger-500)
 }
 .vel-sm\\:text-danger-600 { color: var(--vel-danger-600)
 }
 .vel-sm\\:text-danger-700 { color: var(--vel-danger-700)
 }
 .vel-sm\\:text-warning-300 { color: var(--vel-warning-300)
 }
 .vel-sm\\:text-warning-400 { color: var(--vel-warning-400)
 }
 .vel-sm\\:text-warning-500 { color: var(--vel-warning-500)
 }
 .vel-sm\\:text-warning-600 { color: var(--vel-warning-600)
 }
 .vel-sm\\:text-info-300 { color: var(--vel-info-300)
 }
 .vel-sm\\:text-info-400 { color: var(--vel-info-400)
 }
 .vel-sm\\:text-info-500 { color: var(--vel-info-500)
 }
 .vel-sm\\:text-info-600 { color: var(--vel-info-600)
 }
 .vel-sm\\:text-body { color: var(--vel-color-text)
 }
 .vel-sm\\:text-muted { color: var(--vel-color-muted)
 }
 .vel-sm\\:text-gradient-primary {
  background: var(--vel-gradient-primary);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  color: transparent
 }
 .vel-sm\\:text-gradient-aurora {
  background: var(--vel-gradient-aurora);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  color: transparent
 }
 .vel-sm\\:text-gradient-sunset {
  background: var(--vel-gradient-sunset);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  color: transparent
 }
 .vel-sm\\:text-gradient-ocean {
  background: var(--vel-gradient-ocean);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  color: transparent
 }
 .vel-sm\\:text-gradient-cosmos {
  background: var(--vel-gradient-cosmos);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  color: transparent
 }
 .vel-sm\\:table {
  width: 100%;
  border-collapse: collapse;
  font-size: var(--vel-text-sm);
  color: var(--vel-color-text)
 }
}
@media (min-width: 768px) {
 .vel-md\\:block { display: block
 }
 .vel-md\\:inline-block { display: inline-block
 }
 .vel-md\\:inline { display: inline
 }
 .vel-md\\:flex { display: flex
 }
 .vel-md\\:inline-flex { display: inline-flex
 }
 .vel-md\\:grid { display: grid
 }
 .vel-md\\:inline-grid { display: inline-grid
 }
 .vel-md\\:hidden { display: none
 }
 .vel-md\\:table { display: table
 }
 .vel-md\\:table-row { display: table-row
 }
 .vel-md\\:table-cell { display: table-cell
 }
 .vel-md\\:contents { display: contents
 }
 .vel-md\\:static { position: static
 }
 .vel-md\\:relative { position: relative
 }
 .vel-md\\:absolute { position: absolute
 }
 .vel-md\\:fixed { position: fixed
 }
 .vel-md\\:sticky { position: sticky
 }
 .vel-md\\:overflow-auto { overflow: auto
 }
 .vel-md\\:overflow-hidden { overflow: hidden
 }
 .vel-md\\:overflow-visible { overflow: visible
 }
 .vel-md\\:overflow-scroll { overflow: scroll
 }
 .vel-md\\:overflow-x-auto { overflow-x: auto
 }
 .vel-md\\:overflow-x-hidden { overflow-x: hidden
 }
 .vel-md\\:overflow-y-auto { overflow-y: auto
 }
 .vel-md\\:overflow-y-hidden { overflow-y: hidden
 }
 .vel-md\\:overflow-y-scroll { overflow-y: scroll
 }
 .vel-md\\:overscroll-auto { overscroll-behavior: auto
 }
 .vel-md\\:overscroll-contain { overscroll-behavior: contain
 }
 .vel-md\\:overscroll-none { overscroll-behavior: none
 }
 .vel-md\\:visible { visibility: visible
 }
 .vel-md\\:invisible { visibility: hidden
 }
 .vel-md\\:collapse { visibility: collapse
 }
 .vel-md\\:z-0 { z-index: var(--vel-z-0)
 }
 .vel-md\\:z-10 { z-index: var(--vel-z-10)
 }
 .vel-md\\:z-20 { z-index: var(--vel-z-20)
 }
 .vel-md\\:z-30 { z-index: var(--vel-z-30)
 }
 .vel-md\\:z-40 { z-index: var(--vel-z-40)
 }
 .vel-md\\:z-50 { z-index: var(--vel-z-50)
 }
 .vel-md\\:z-auto { z-index: var(--vel-z-auto)
 }
 .vel-md\\:float-left { float: left
 }
 .vel-md\\:float-right { float: right
 }
 .vel-md\\:float-none { float: none
 }
 .vel-md\\:clear-left { clear: left
 }
 .vel-md\\:clear-right { clear: right
 }
 .vel-md\\:clear-both { clear: both
 }
 .vel-md\\:clear-none { clear: none
 }
 .vel-md\\:object-contain { -o-object-fit: contain; object-fit: contain
 }
 .vel-md\\:object-cover { -o-object-fit: cover; object-fit: cover
 }
 .vel-md\\:object-fill { -o-object-fit: fill; object-fit: fill
 }
 .vel-md\\:object-none { -o-object-fit: none; object-fit: none
 }
 .vel-md\\:object-scale-down { -o-object-fit: scale-down; object-fit: scale-down
 }
 .vel-md\\:aspect-auto { aspect-ratio: auto
 }
 .vel-md\\:aspect-square { aspect-ratio: 1 / 1
 }
 .vel-md\\:aspect-video { aspect-ratio: 16 / 9
 }
 .vel-md\\:columns-1 { -moz-columns: 1; columns: 1
 }
 .vel-md\\:columns-2 { -moz-columns: 2; columns: 2
 }
 .vel-md\\:columns-3 { -moz-columns: 3; columns: 3
 }
 .vel-md\\:columns-4 { -moz-columns: 4; columns: 4
 }
 .vel-md\\:columns-5 { -moz-columns: 5; columns: 5
 }
 .vel-md\\:columns-6 { -moz-columns: 6; columns: 6
 }
 .vel-md\\:columns-auto { -moz-columns: auto; columns: auto
 }
 .vel-md\\:sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0
 }
 .vel-md\\:flex-row { flex-direction: row
 }
 .vel-md\\:flex-row-reverse { flex-direction: row-reverse
 }
 .vel-md\\:flex-col { flex-direction: column
 }
 .vel-md\\:flex-col-reverse { flex-direction: column-reverse
 }
 .vel-md\\:flex-wrap { flex-wrap: wrap
 }
 .vel-md\\:flex-wrap-reverse { flex-wrap: wrap-reverse
 }
 .vel-md\\:flex-nowrap { flex-wrap: nowrap
 }
 .vel-md\\:flex-1 { flex: 1 1 0%
 }
 .vel-md\\:flex-auto { flex: 1 1 auto
 }
 .vel-md\\:flex-initial { flex: 0 1 auto
 }
 .vel-md\\:flex-none { flex: none
 }
 .vel-md\\:grow { flex-grow: 1
 }
 .vel-md\\:shrink { flex-shrink: 1
 }
 .vel-md\\:items-start { align-items: flex-start
 }
 .vel-md\\:items-end { align-items: flex-end
 }
 .vel-md\\:items-center { align-items: center
 }
 .vel-md\\:items-baseline { align-items: baseline
 }
 .vel-md\\:items-stretch { align-items: stretch
 }
 .vel-md\\:self-auto { align-self: auto
 }
 .vel-md\\:self-start { align-self: flex-start
 }
 .vel-md\\:self-end { align-self: flex-end
 }
 .vel-md\\:self-center { align-self: center
 }
 .vel-md\\:self-baseline { align-self: baseline
 }
 .vel-md\\:self-stretch { align-self: stretch
 }
 .vel-md\\:justify-start { justify-content: flex-start
 }
 .vel-md\\:justify-end { justify-content: flex-end
 }
 .vel-md\\:justify-center { justify-content: center
 }
 .vel-md\\:justify-between { justify-content: space-between
 }
 .vel-md\\:justify-around { justify-content: space-around
 }
 .vel-md\\:justify-evenly { justify-content: space-evenly
 }
 .vel-md\\:justify-stretch { justify-content: stretch
 }
 .vel-md\\:justify-items-start { justify-items: start
 }
 .vel-md\\:justify-items-end { justify-items: end
 }
 .vel-md\\:justify-items-center { justify-items: center
 }
 .vel-md\\:justify-items-stretch { justify-items: stretch
 }
 .vel-md\\:justify-self-auto { justify-self: auto
 }
 .vel-md\\:justify-self-start { justify-self: start
 }
 .vel-md\\:justify-self-end { justify-self: end
 }
 .vel-md\\:justify-self-center { justify-self: center
 }
 .vel-md\\:justify-self-stretch { justify-self: stretch
 }
 .vel-md\\:order-first { order: -9999
 }
 .vel-md\\:order-last { order: 9999
 }
 .vel-md\\:order-none { order: 0
 }
 .vel-md\\:order-1 { order: 1
 }
 .vel-md\\:order-2 { order: 2
 }
 .vel-md\\:order-3 { order: 3
 }
 .vel-md\\:order-4 { order: 4
 }
 .vel-md\\:order-5 { order: 5
 }
 .vel-md\\:gap-0 { gap: 0px
 }
 .vel-md\\:gap-1 { gap: var(--vel-space-1)
 }
 .vel-md\\:gap-2 { gap: var(--vel-space-2)
 }
 .vel-md\\:gap-3 { gap: var(--vel-space-3)
 }
 .vel-md\\:gap-4 { gap: var(--vel-space-4)
 }
 .vel-md\\:gap-5 { gap: var(--vel-space-5)
 }
 .vel-md\\:gap-6 { gap: var(--vel-space-6)
 }
 .vel-md\\:gap-7 { gap: var(--vel-space-7)
 }
 .vel-md\\:gap-8 { gap: var(--vel-space-8)
 }
 .vel-md\\:gap-10 { gap: var(--vel-space-10)
 }
 .vel-md\\:gap-12 { gap: var(--vel-space-12)
 }
 .vel-md\\:gap-16 { gap: var(--vel-space-16)
 }
 .vel-md\\:gap-px { gap: 1px
 }
 .vel-md\\:gap-x-0 { -moz-column-gap: 0px; column-gap: 0px
 }
 .vel-md\\:gap-x-1 { -moz-column-gap: var(--vel-space-1); column-gap: var(--vel-space-1)
 }
 .vel-md\\:gap-x-2 { -moz-column-gap: var(--vel-space-2); column-gap: var(--vel-space-2)
 }
 .vel-md\\:gap-x-3 { -moz-column-gap: var(--vel-space-3); column-gap: var(--vel-space-3)
 }
 .vel-md\\:gap-x-4 { -moz-column-gap: var(--vel-space-4); column-gap: var(--vel-space-4)
 }
 .vel-md\\:gap-x-5 { -moz-column-gap: var(--vel-space-5); column-gap: var(--vel-space-5)
 }
 .vel-md\\:gap-x-6 { -moz-column-gap: var(--vel-space-6); column-gap: var(--vel-space-6)
 }
 .vel-md\\:gap-x-8 { -moz-column-gap: var(--vel-space-8); column-gap: var(--vel-space-8)
 }
 .vel-md\\:gap-y-0 { row-gap: 0px
 }
 .vel-md\\:gap-y-1 { row-gap: var(--vel-space-1)
 }
 .vel-md\\:gap-y-2 { row-gap: var(--vel-space-2)
 }
 .vel-md\\:gap-y-3 { row-gap: var(--vel-space-3)
 }
 .vel-md\\:gap-y-4 { row-gap: var(--vel-space-4)
 }
 .vel-md\\:gap-y-5 { row-gap: var(--vel-space-5)
 }
 .vel-md\\:gap-y-6 { row-gap: var(--vel-space-6)
 }
 .vel-md\\:gap-y-8 { row-gap: var(--vel-space-8)
 }
 .vel-md\\:grid-cols-1 { grid-template-columns: repeat(1, minmax(0, 1fr))
 }
 .vel-md\\:grid-cols-2 { grid-template-columns: repeat(2, minmax(0, 1fr))
 }
 .vel-md\\:grid-cols-3 { grid-template-columns: repeat(3, minmax(0, 1fr))
 }
 .vel-md\\:grid-cols-4 { grid-template-columns: repeat(4, minmax(0, 1fr))
 }
 .vel-md\\:grid-cols-5 { grid-template-columns: repeat(5, minmax(0, 1fr))
 }
 .vel-md\\:grid-cols-6 { grid-template-columns: repeat(6, minmax(0, 1fr))
 }
 .vel-md\\:grid-cols-7 { grid-template-columns: repeat(7, minmax(0, 1fr))
 }
 .vel-md\\:grid-cols-8 { grid-template-columns: repeat(8, minmax(0, 1fr))
 }
 .vel-md\\:grid-cols-9 { grid-template-columns: repeat(9, minmax(0, 1fr))
 }
 .vel-md\\:grid-cols-10 { grid-template-columns: repeat(10, minmax(0, 1fr))
 }
 .vel-md\\:grid-cols-11 { grid-template-columns: repeat(11, minmax(0, 1fr))
 }
 .vel-md\\:grid-cols-12 { grid-template-columns: repeat(12, minmax(0, 1fr))
 }
 .vel-md\\:grid-cols-none { grid-template-columns: none
 }
 .vel-md\\:col-auto { grid-column: auto
 }
 .vel-md\\:col-span-1 { grid-column: span 1 / span 1
 }
 .vel-md\\:col-span-2 { grid-column: span 2 / span 2
 }
 .vel-md\\:col-span-3 { grid-column: span 3 / span 3
 }
 .vel-md\\:col-span-4 { grid-column: span 4 / span 4
 }
 .vel-md\\:col-span-5 { grid-column: span 5 / span 5
 }
 .vel-md\\:col-span-6 { grid-column: span 6 / span 6
 }
 .vel-md\\:col-span-7 { grid-column: span 7 / span 7
 }
 .vel-md\\:col-span-8 { grid-column: span 8 / span 8
 }
 .vel-md\\:col-span-9 { grid-column: span 9 / span 9
 }
 .vel-md\\:col-span-10 { grid-column: span 10 / span 10
 }
 .vel-md\\:col-span-11 { grid-column: span 11 / span 11
 }
 .vel-md\\:col-span-12 { grid-column: span 12 / span 12
 }
 .vel-md\\:col-span-full { grid-column: 1 / -1
 }
 .vel-md\\:col-start-1 { grid-column-start: 1
 }
 .vel-md\\:col-start-2 { grid-column-start: 2
 }
 .vel-md\\:col-start-3 { grid-column-start: 3
 }
 .vel-md\\:col-start-4 { grid-column-start: 4
 }
 .vel-md\\:col-start-auto { grid-column-start: auto
 }
 .vel-md\\:col-end-1 { grid-column-end: 1
 }
 .vel-md\\:col-end-2 { grid-column-end: 2
 }
 .vel-md\\:col-end-3 { grid-column-end: 3
 }
 .vel-md\\:col-end-4 { grid-column-end: 4
 }
 .vel-md\\:col-end-auto { grid-column-end: auto
 }
 .vel-md\\:grid-rows-1 { grid-template-rows: repeat(1, minmax(0, 1fr))
 }
 .vel-md\\:grid-rows-2 { grid-template-rows: repeat(2, minmax(0, 1fr))
 }
 .vel-md\\:grid-rows-3 { grid-template-rows: repeat(3, minmax(0, 1fr))
 }
 .vel-md\\:grid-rows-4 { grid-template-rows: repeat(4, minmax(0, 1fr))
 }
 .vel-md\\:grid-rows-5 { grid-template-rows: repeat(5, minmax(0, 1fr))
 }
 .vel-md\\:grid-rows-6 { grid-template-rows: repeat(6, minmax(0, 1fr))
 }
 .vel-md\\:grid-rows-none { grid-template-rows: none
 }
 .vel-md\\:row-auto { grid-row: auto
 }
 .vel-md\\:row-span-1 { grid-row: span 1 / span 1
 }
 .vel-md\\:row-span-2 { grid-row: span 2 / span 2
 }
 .vel-md\\:row-span-3 { grid-row: span 3 / span 3
 }
 .vel-md\\:row-span-4 { grid-row: span 4 / span 4
 }
 .vel-md\\:row-span-5 { grid-row: span 5 / span 5
 }
 .vel-md\\:row-span-6 { grid-row: span 6 / span 6
 }
 .vel-md\\:row-span-full { grid-row: 1 / -1
 }
 .vel-md\\:row-start-1 { grid-row-start: 1
 }
 .vel-md\\:row-start-2 { grid-row-start: 2
 }
 .vel-md\\:row-start-3 { grid-row-start: 3
 }
 .vel-md\\:row-start-auto { grid-row-start: auto
 }
 .vel-md\\:row-end-1 { grid-row-end: 1
 }
 .vel-md\\:row-end-2 { grid-row-end: 2
 }
 .vel-md\\:row-end-3 { grid-row-end: 3
 }
 .vel-md\\:row-end-auto { grid-row-end: auto
 }
 .vel-md\\:grid-flow-row { grid-auto-flow: row
 }
 .vel-md\\:grid-flow-col { grid-auto-flow: column
 }
 .vel-md\\:grid-flow-dense { grid-auto-flow: dense
 }
 .vel-md\\:grid-flow-row-dense { grid-auto-flow: row dense
 }
 .vel-md\\:grid-flow-col-dense { grid-auto-flow: column dense
 }
 .vel-md\\:p-0 { padding: 0px
 }
 .vel-md\\:p-px { padding: 1px
 }
 .vel-md\\:p-1 { padding: var(--vel-space-1)
 }
 .vel-md\\:p-2 { padding: var(--vel-space-2)
 }
 .vel-md\\:p-3 { padding: var(--vel-space-3)
 }
 .vel-md\\:p-4 { padding: var(--vel-space-4)
 }
 .vel-md\\:p-5 { padding: var(--vel-space-5)
 }
 .vel-md\\:p-6 { padding: var(--vel-space-6)
 }
 .vel-md\\:p-7 { padding: var(--vel-space-7)
 }
 .vel-md\\:p-8 { padding: var(--vel-space-8)
 }
 .vel-md\\:p-9 { padding: var(--vel-space-9)
 }
 .vel-md\\:p-10 { padding: var(--vel-space-10)
 }
 .vel-md\\:p-11 { padding: var(--vel-space-11)
 }
 .vel-md\\:p-12 { padding: var(--vel-space-12)
 }
 .vel-md\\:p-14 { padding: var(--vel-space-14)
 }
 .vel-md\\:p-16 { padding: var(--vel-space-16)
 }
 .vel-md\\:p-20 { padding: var(--vel-space-20)
 }
 .vel-md\\:p-24 { padding: var(--vel-space-24)
 }
 .vel-md\\:p-28 { padding: var(--vel-space-28)
 }
 .vel-md\\:p-32 { padding: var(--vel-space-32)
 }
 .vel-md\\:pt-0 { padding-top: 0px
 }
 .vel-md\\:pt-1 { padding-top: var(--vel-space-1)
 }
 .vel-md\\:pt-2 { padding-top: var(--vel-space-2)
 }
 .vel-md\\:pt-3 { padding-top: var(--vel-space-3)
 }
 .vel-md\\:pt-4 { padding-top: var(--vel-space-4)
 }
 .vel-md\\:pt-5 { padding-top: var(--vel-space-5)
 }
 .vel-md\\:pt-6 { padding-top: var(--vel-space-6)
 }
 .vel-md\\:pt-8 { padding-top: var(--vel-space-8)
 }
 .vel-md\\:pt-10 { padding-top: var(--vel-space-10)
 }
 .vel-md\\:pt-12 { padding-top: var(--vel-space-12)
 }
 .vel-md\\:pt-16 { padding-top: var(--vel-space-16)
 }
 .vel-md\\:pr-0 { padding-right: 0px
 }
 .vel-md\\:pr-1 { padding-right: var(--vel-space-1)
 }
 .vel-md\\:pr-2 { padding-right: var(--vel-space-2)
 }
 .vel-md\\:pr-3 { padding-right: var(--vel-space-3)
 }
 .vel-md\\:pr-4 { padding-right: var(--vel-space-4)
 }
 .vel-md\\:pr-5 { padding-right: var(--vel-space-5)
 }
 .vel-md\\:pr-6 { padding-right: var(--vel-space-6)
 }
 .vel-md\\:pr-8 { padding-right: var(--vel-space-8)
 }
 .vel-md\\:pr-12 { padding-right: var(--vel-space-12)
 }
 .vel-md\\:pb-0 { padding-bottom: 0px
 }
 .vel-md\\:pb-1 { padding-bottom: var(--vel-space-1)
 }
 .vel-md\\:pb-2 { padding-bottom: var(--vel-space-2)
 }
 .vel-md\\:pb-3 { padding-bottom: var(--vel-space-3)
 }
 .vel-md\\:pb-4 { padding-bottom: var(--vel-space-4)
 }
 .vel-md\\:pb-5 { padding-bottom: var(--vel-space-5)
 }
 .vel-md\\:pb-6 { padding-bottom: var(--vel-space-6)
 }
 .vel-md\\:pb-8 { padding-bottom: var(--vel-space-8)
 }
 .vel-md\\:pb-12 { padding-bottom: var(--vel-space-12)
 }
 .vel-md\\:pl-0 { padding-left: 0px
 }
 .vel-md\\:pl-1 { padding-left: var(--vel-space-1)
 }
 .vel-md\\:pl-2 { padding-left: var(--vel-space-2)
 }
 .vel-md\\:pl-3 { padding-left: var(--vel-space-3)
 }
 .vel-md\\:pl-4 { padding-left: var(--vel-space-4)
 }
 .vel-md\\:pl-5 { padding-left: var(--vel-space-5)
 }
 .vel-md\\:pl-6 { padding-left: var(--vel-space-6)
 }
 .vel-md\\:pl-8 { padding-left: var(--vel-space-8)
 }
 .vel-md\\:pl-12 { padding-left: var(--vel-space-12)
 }
 .vel-md\\:m-0 { margin: 0px
 }
 .vel-md\\:m-px { margin: 1px
 }
 .vel-md\\:m-auto { margin: auto
 }
 .vel-md\\:m-1 { margin: var(--vel-space-1)
 }
 .vel-md\\:m-2 { margin: var(--vel-space-2)
 }
 .vel-md\\:m-3 { margin: var(--vel-space-3)
 }
 .vel-md\\:m-4 { margin: var(--vel-space-4)
 }
 .vel-md\\:m-5 { margin: var(--vel-space-5)
 }
 .vel-md\\:m-6 { margin: var(--vel-space-6)
 }
 .vel-md\\:m-7 { margin: var(--vel-space-7)
 }
 .vel-md\\:m-8 { margin: var(--vel-space-8)
 }
 .vel-md\\:m-10 { margin: var(--vel-space-10)
 }
 .vel-md\\:m-12 { margin: var(--vel-space-12)
 }
 .vel-md\\:m-16 { margin: var(--vel-space-16)
 }
 .vel-md\\:mt-0 { margin-top: 0px
 }
 .vel-md\\:mt-auto { margin-top: auto
 }
 .vel-md\\:mt-1 { margin-top: var(--vel-space-1)
 }
 .vel-md\\:mt-2 { margin-top: var(--vel-space-2)
 }
 .vel-md\\:mt-3 { margin-top: var(--vel-space-3)
 }
 .vel-md\\:mt-4 { margin-top: var(--vel-space-4)
 }
 .vel-md\\:mt-5 { margin-top: var(--vel-space-5)
 }
 .vel-md\\:mt-6 { margin-top: var(--vel-space-6)
 }
 .vel-md\\:mt-8 { margin-top: var(--vel-space-8)
 }
 .vel-md\\:mt-10 { margin-top: var(--vel-space-10)
 }
 .vel-md\\:mt-12 { margin-top: var(--vel-space-12)
 }
 .vel-md\\:mt-16 { margin-top: var(--vel-space-16)
 }
 .vel-md\\:mr-0 { margin-right: 0px
 }
 .vel-md\\:mr-auto { margin-right: auto
 }
 .vel-md\\:mr-1 { margin-right: var(--vel-space-1)
 }
 .vel-md\\:mr-2 { margin-right: var(--vel-space-2)
 }
 .vel-md\\:mr-3 { margin-right: var(--vel-space-3)
 }
 .vel-md\\:mr-4 { margin-right: var(--vel-space-4)
 }
 .vel-md\\:mr-6 { margin-right: var(--vel-space-6)
 }
 .vel-md\\:mr-8 { margin-right: var(--vel-space-8)
 }
 .vel-md\\:mb-0 { margin-bottom: 0px
 }
 .vel-md\\:mb-auto { margin-bottom: auto
 }
 .vel-md\\:mb-1 { margin-bottom: var(--vel-space-1)
 }
 .vel-md\\:mb-2 { margin-bottom: var(--vel-space-2)
 }
 .vel-md\\:mb-3 { margin-bottom: var(--vel-space-3)
 }
 .vel-md\\:mb-4 { margin-bottom: var(--vel-space-4)
 }
 .vel-md\\:mb-5 { margin-bottom: var(--vel-space-5)
 }
 .vel-md\\:mb-6 { margin-bottom: var(--vel-space-6)
 }
 .vel-md\\:mb-8 { margin-bottom: var(--vel-space-8)
 }
 .vel-md\\:mb-10 { margin-bottom: var(--vel-space-10)
 }
 .vel-md\\:mb-12 { margin-bottom: var(--vel-space-12)
 }
 .vel-md\\:mb-16 { margin-bottom: var(--vel-space-16)
 }
 .vel-md\\:ml-0 { margin-left: 0px
 }
 .vel-md\\:ml-auto { margin-left: auto
 }
 .vel-md\\:ml-1 { margin-left: var(--vel-space-1)
 }
 .vel-md\\:ml-2 { margin-left: var(--vel-space-2)
 }
 .vel-md\\:ml-3 { margin-left: var(--vel-space-3)
 }
 .vel-md\\:ml-4 { margin-left: var(--vel-space-4)
 }
 .vel-md\\:ml-6 { margin-left: var(--vel-space-6)
 }
 .vel-md\\:ml-8 { margin-left: var(--vel-space-8)
 }
 .vel-md\\:w-0 { width: 0px
 }
 .vel-md\\:w-px { width: 1px
 }
 .vel-md\\:w-auto { width: auto
 }
 .vel-md\\:w-full { width: 100%
 }
 .vel-md\\:w-screen { width: 100vw
 }
 .vel-md\\:w-svw { width: 100svw
 }
 .vel-md\\:w-dvw { width: 100dvw
 }
 .vel-md\\:w-min { width: -moz-min-content; width: min-content
 }
 .vel-md\\:w-max { width: -moz-max-content; width: max-content
 }
 .vel-md\\:w-fit { width: -moz-fit-content; width: fit-content
 }
 .vel-md\\:w-1 { width: var(--vel-space-1)
 }
 .vel-md\\:w-2 { width: var(--vel-space-2)
 }
 .vel-md\\:w-3 { width: var(--vel-space-3)
 }
 .vel-md\\:w-4 { width: var(--vel-space-4)
 }
 .vel-md\\:w-5 { width: var(--vel-space-5)
 }
 .vel-md\\:w-6 { width: var(--vel-space-6)
 }
 .vel-md\\:w-7 { width: var(--vel-space-7)
 }
 .vel-md\\:w-8 { width: var(--vel-space-8)
 }
 .vel-md\\:w-9 { width: var(--vel-space-9)
 }
 .vel-md\\:w-10 { width: var(--vel-space-10)
 }
 .vel-md\\:w-11 { width: var(--vel-space-11)
 }
 .vel-md\\:w-12 { width: var(--vel-space-12)
 }
 .vel-md\\:w-14 { width: var(--vel-space-14)
 }
 .vel-md\\:w-16 { width: var(--vel-space-16)
 }
 .vel-md\\:w-20 { width: var(--vel-space-20)
 }
 .vel-md\\:w-24 { width: var(--vel-space-24)
 }
 .vel-md\\:w-28 { width: var(--vel-space-28)
 }
 .vel-md\\:w-32 { width: var(--vel-space-32)
 }
 .vel-md\\:w-36 { width: var(--vel-space-36)
 }
 .vel-md\\:w-40 { width: var(--vel-space-40)
 }
 .vel-md\\:w-48 { width: var(--vel-space-48)
 }
 .vel-md\\:w-56 { width: var(--vel-space-56)
 }
 .vel-md\\:w-64 { width: var(--vel-space-64)
 }
 .vel-md\\:w-72 { width: var(--vel-space-72)
 }
 .vel-md\\:w-80 { width: var(--vel-space-80)
 }
 .vel-md\\:w-96 { width: var(--vel-space-96)
 }
 .vel-md\\:min-w-0 { min-width: 0px
 }
 .vel-md\\:min-w-full { min-width: 100%
 }
 .vel-md\\:min-w-min { min-width: -moz-min-content; min-width: min-content
 }
 .vel-md\\:min-w-max { min-width: -moz-max-content; min-width: max-content
 }
 .vel-md\\:min-w-fit { min-width: -moz-fit-content; min-width: fit-content
 }
 .vel-md\\:max-w-none { max-width: none
 }
 .vel-md\\:max-w-xs { max-width: 20rem
 }
 .vel-md\\:max-w-sm { max-width: 24rem
 }
 .vel-md\\:max-w-md { max-width: 28rem
 }
 .vel-md\\:max-w-lg { max-width: 32rem
 }
 .vel-md\\:max-w-xl { max-width: 36rem
 }
 .vel-md\\:max-w-2xl { max-width: 42rem
 }
 .vel-md\\:max-w-3xl { max-width: 48rem
 }
 .vel-md\\:max-w-4xl { max-width: 56rem
 }
 .vel-md\\:max-w-5xl { max-width: 64rem
 }
 .vel-md\\:max-w-6xl { max-width: 72rem
 }
 .vel-md\\:max-w-7xl { max-width: 80rem
 }
 .vel-md\\:max-w-full { max-width: 100%
 }
 .vel-md\\:max-w-min { max-width: -moz-min-content; max-width: min-content
 }
 .vel-md\\:max-w-max { max-width: -moz-max-content; max-width: max-content
 }
 .vel-md\\:max-w-fit { max-width: -moz-fit-content; max-width: fit-content
 }
 .vel-md\\:max-w-prose { max-width: 65ch
 }
 .vel-md\\:max-w-screen-sm { max-width: 640px
 }
 .vel-md\\:max-w-screen-md { max-width: 768px
 }
 .vel-md\\:max-w-screen-lg { max-width: 1024px
 }
 .vel-md\\:max-w-screen-xl { max-width: 1280px
 }
 .vel-md\\:max-w-screen-2xl { max-width: 1536px
 }
 .vel-md\\:h-0 { height: 0px
 }
 .vel-md\\:h-px { height: 1px
 }
 .vel-md\\:h-auto { height: auto
 }
 .vel-md\\:h-full { height: 100%
 }
 .vel-md\\:h-screen { height: 100vh
 }
 .vel-md\\:h-svh { height: 100svh
 }
 .vel-md\\:h-dvh { height: 100dvh
 }
 .vel-md\\:h-min { height: -moz-min-content; height: min-content
 }
 .vel-md\\:h-max { height: -moz-max-content; height: max-content
 }
 .vel-md\\:h-fit { height: -moz-fit-content; height: fit-content
 }
 .vel-md\\:h-1 { height: var(--vel-space-1)
 }
 .vel-md\\:h-2 { height: var(--vel-space-2)
 }
 .vel-md\\:h-3 { height: var(--vel-space-3)
 }
 .vel-md\\:h-4 { height: var(--vel-space-4)
 }
 .vel-md\\:h-5 { height: var(--vel-space-5)
 }
 .vel-md\\:h-6 { height: var(--vel-space-6)
 }
 .vel-md\\:h-7 { height: var(--vel-space-7)
 }
 .vel-md\\:h-8 { height: var(--vel-space-8)
 }
 .vel-md\\:h-9 { height: var(--vel-space-9)
 }
 .vel-md\\:h-10 { height: var(--vel-space-10)
 }
 .vel-md\\:h-11 { height: var(--vel-space-11)
 }
 .vel-md\\:h-12 { height: var(--vel-space-12)
 }
 .vel-md\\:h-14 { height: var(--vel-space-14)
 }
 .vel-md\\:h-16 { height: var(--vel-space-16)
 }
 .vel-md\\:h-20 { height: var(--vel-space-20)
 }
 .vel-md\\:h-24 { height: var(--vel-space-24)
 }
 .vel-md\\:h-28 { height: var(--vel-space-28)
 }
 .vel-md\\:h-32 { height: var(--vel-space-32)
 }
 .vel-md\\:h-36 { height: var(--vel-space-36)
 }
 .vel-md\\:h-40 { height: var(--vel-space-40)
 }
 .vel-md\\:h-48 { height: var(--vel-space-48)
 }
 .vel-md\\:h-56 { height: var(--vel-space-56)
 }
 .vel-md\\:h-64 { height: var(--vel-space-64)
 }
 .vel-md\\:min-h-0 { min-height: 0px
 }
 .vel-md\\:min-h-full { min-height: 100%
 }
 .vel-md\\:min-h-screen { min-height: 100vh
 }
 .vel-md\\:min-h-svh { min-height: 100svh
 }
 .vel-md\\:min-h-dvh { min-height: 100dvh
 }
 .vel-md\\:min-h-min { min-height: -moz-min-content; min-height: min-content
 }
 .vel-md\\:min-h-max { min-height: -moz-max-content; min-height: max-content
 }
 .vel-md\\:min-h-fit { min-height: -moz-fit-content; min-height: fit-content
 }
 .vel-md\\:max-h-none { max-height: none
 }
 .vel-md\\:max-h-full { max-height: 100%
 }
 .vel-md\\:max-h-screen { max-height: 100vh
 }
 .vel-md\\:max-h-svh { max-height: 100svh
 }
 .vel-md\\:max-h-dvh { max-height: 100dvh
 }
 .vel-md\\:max-h-min { max-height: -moz-min-content; max-height: min-content
 }
 .vel-md\\:max-h-max { max-height: -moz-max-content; max-height: max-content
 }
 .vel-md\\:max-h-fit { max-height: -moz-fit-content; max-height: fit-content
 }
 .vel-md\\:max-h-24 { max-height: var(--vel-space-24)
 }
 .vel-md\\:max-h-48 { max-height: var(--vel-space-48)
 }
 .vel-md\\:max-h-64 { max-height: var(--vel-space-64)
 }
 .vel-md\\:max-h-96 { max-height: var(--vel-space-96)
 }
 .vel-md\\:font-sans { font-family: var(--vel-font-sans)
 }
 .vel-md\\:font-serif { font-family: var(--vel-font-serif)
 }
 .vel-md\\:font-mono { font-family: var(--vel-font-mono)
 }
 .vel-md\\:text-xs { font-size: var(--vel-text-xs); line-height: 1rem
 }
 .vel-md\\:text-sm { font-size: var(--vel-text-sm); line-height: 1.25rem
 }
 .vel-md\\:text-base { font-size: var(--vel-text-base); line-height: 1.5rem
 }
 .vel-md\\:text-lg { font-size: var(--vel-text-lg); line-height: 1.75rem
 }
 .vel-md\\:text-xl { font-size: var(--vel-text-xl); line-height: 1.75rem
 }
 .vel-md\\:text-2xl { font-size: var(--vel-text-2xl); line-height: 2rem
 }
 .vel-md\\:text-3xl { font-size: var(--vel-text-3xl); line-height: 2.25rem
 }
 .vel-md\\:text-4xl { font-size: var(--vel-text-4xl); line-height: 2.5rem
 }
 .vel-md\\:text-5xl { font-size: var(--vel-text-5xl); line-height: 1
 }
 .vel-md\\:text-6xl { font-size: var(--vel-text-6xl); line-height: 1
 }
 .vel-md\\:text-7xl { font-size: var(--vel-text-7xl); line-height: 1
 }
 .vel-md\\:text-8xl { font-size: var(--vel-text-8xl); line-height: 1
 }
 .vel-md\\:text-9xl { font-size: var(--vel-text-9xl); line-height: 1
 }
 .vel-md\\:font-thin { font-weight: 100
 }
 .vel-md\\:font-extralight { font-weight: 200
 }
 .vel-md\\:font-light { font-weight: 300
 }
 .vel-md\\:font-normal { font-weight: 400
 }
 .vel-md\\:font-medium { font-weight: 500
 }
 .vel-md\\:font-semibold { font-weight: 600
 }
 .vel-md\\:font-bold { font-weight: 700
 }
 .vel-md\\:font-extrabold { font-weight: 800
 }
 .vel-md\\:font-black { font-weight: 900
 }
 .vel-md\\:italic { font-style: italic
 }
 .vel-md\\:not-italic { font-style: normal
 }
 .vel-md\\:leading-none { line-height: 1
 }
 .vel-md\\:leading-tight { line-height: 1.25
 }
 .vel-md\\:leading-snug { line-height: 1.375
 }
 .vel-md\\:leading-normal { line-height: 1.5
 }
 .vel-md\\:leading-relaxed { line-height: 1.625
 }
 .vel-md\\:leading-loose { line-height: 2
 }
 .vel-md\\:leading-3 { line-height: 0.75rem
 }
 .vel-md\\:leading-4 { line-height: 1rem
 }
 .vel-md\\:leading-5 { line-height: 1.25rem
 }
 .vel-md\\:leading-6 { line-height: 1.5rem
 }
 .vel-md\\:leading-7 { line-height: 1.75rem
 }
 .vel-md\\:leading-8 { line-height: 2rem
 }
 .vel-md\\:leading-9 { line-height: 2.25rem
 }
 .vel-md\\:leading-10 { line-height: 2.5rem
 }
 .vel-md\\:tracking-tighter { letter-spacing: -0.05em
 }
 .vel-md\\:tracking-tight { letter-spacing: -0.025em
 }
 .vel-md\\:tracking-normal { letter-spacing: 0em
 }
 .vel-md\\:tracking-wide { letter-spacing: 0.025em
 }
 .vel-md\\:tracking-wider { letter-spacing: 0.05em
 }
 .vel-md\\:tracking-widest { letter-spacing: 0.1em
 }
 .vel-md\\:text-left { text-align: left
 }
 .vel-md\\:text-center { text-align: center
 }
 .vel-md\\:text-right { text-align: right
 }
 .vel-md\\:text-justify { text-align: justify
 }
 .vel-md\\:text-start { text-align: start
 }
 .vel-md\\:text-end { text-align: end
 }
 .vel-md\\:underline { text-decoration-line: underline
 }
 .vel-md\\:line-through { text-decoration-line: line-through
 }
 .vel-md\\:no-underline { text-decoration-line: none
 }
 .vel-md\\:uppercase { text-transform: uppercase
 }
 .vel-md\\:lowercase { text-transform: lowercase
 }
 .vel-md\\:capitalize { text-transform: capitalize
 }
 .vel-md\\:normal-case { text-transform: none
 }
 .vel-md\\:truncate { overflow: hidden; text-overflow: ellipsis; white-space: nowrap
 }
 .vel-md\\:text-ellipsis { text-overflow: ellipsis
 }
 .vel-md\\:text-clip { text-overflow: clip
 }
 .vel-md\\:whitespace-normal { white-space: normal
 }
 .vel-md\\:whitespace-nowrap { white-space: nowrap
 }
 .vel-md\\:whitespace-pre { white-space: pre
 }
 .vel-md\\:whitespace-pre-line { white-space: pre-line
 }
 .vel-md\\:whitespace-pre-wrap { white-space: pre-wrap
 }
 .vel-md\\:whitespace-break-spaces { white-space: break-spaces
 }
 .vel-md\\:text-inherit { color: inherit
 }
 .vel-md\\:text-current { color: currentColor
 }
 .vel-md\\:text-transparent { color: transparent
 }
 .vel-md\\:text-white { color: #ffffff
 }
 .vel-md\\:text-black { color: #000000
 }
 .vel-md\\:text-primary { color: var(--vel-color-primary)
 }
 .vel-md\\:text-secondary { color: var(--vel-color-secondary)
 }
 .vel-md\\:text-success { color: var(--vel-color-success)
 }
 .vel-md\\:text-danger { color: var(--vel-color-danger)
 }
 .vel-md\\:text-warning { color: var(--vel-color-warning)
 }
 .vel-md\\:text-info { color: var(--vel-color-info)
 }
 .vel-md\\:text-neutral-50 { color: var(--vel-neutral-50)
 }
 .vel-md\\:text-neutral-100 { color: var(--vel-neutral-100)
 }
 .vel-md\\:text-neutral-200 { color: var(--vel-neutral-200)
 }
 .vel-md\\:text-neutral-300 { color: var(--vel-neutral-300)
 }
 .vel-md\\:text-neutral-400 { color: var(--vel-neutral-400)
 }
 .vel-md\\:text-neutral-500 { color: var(--vel-neutral-500)
 }
 .vel-md\\:text-neutral-600 { color: var(--vel-neutral-600)
 }
 .vel-md\\:text-neutral-700 { color: var(--vel-neutral-700)
 }
 .vel-md\\:text-neutral-800 { color: var(--vel-neutral-800)
 }
 .vel-md\\:text-neutral-900 { color: var(--vel-neutral-900)
 }
 .vel-md\\:text-neutral-950 { color: var(--vel-neutral-950)
 }
 .vel-md\\:text-primary-50 { color: var(--vel-primary-50)
 }
 .vel-md\\:text-primary-100 { color: var(--vel-primary-100)
 }
 .vel-md\\:text-primary-200 { color: var(--vel-primary-200)
 }
 .vel-md\\:text-primary-300 { color: var(--vel-primary-300)
 }
 .vel-md\\:text-primary-400 { color: var(--vel-primary-400)
 }
 .vel-md\\:text-primary-500 { color: var(--vel-primary-500)
 }
 .vel-md\\:text-primary-600 { color: var(--vel-primary-600)
 }
 .vel-md\\:text-primary-700 { color: var(--vel-primary-700)
 }
 .vel-md\\:text-primary-800 { color: var(--vel-primary-800)
 }
 .vel-md\\:text-primary-900 { color: var(--vel-primary-900)
 }
 .vel-md\\:text-primary-950 { color: var(--vel-primary-950)
 }
 .vel-md\\:text-success-50 { color: var(--vel-success-50)
 }
 .vel-md\\:text-success-100 { color: var(--vel-success-100)
 }
 .vel-md\\:text-success-200 { color: var(--vel-success-200)
 }
 .vel-md\\:text-success-300 { color: var(--vel-success-300)
 }
 .vel-md\\:text-success-400 { color: var(--vel-success-400)
 }
 .vel-md\\:text-success-500 { color: var(--vel-success-500)
 }
 .vel-md\\:text-success-600 { color: var(--vel-success-600)
 }
 .vel-md\\:text-success-700 { color: var(--vel-success-700)
 }
 .vel-md\\:text-danger-50 { color: var(--vel-danger-50)
 }
 .vel-md\\:text-danger-100 { color: var(--vel-danger-100)
 }
 .vel-md\\:text-danger-300 { color: var(--vel-danger-300)
 }
 .vel-md\\:text-danger-400 { color: var(--vel-danger-400)
 }
 .vel-md\\:text-danger-500 { color: var(--vel-danger-500)
 }
 .vel-md\\:text-danger-600 { color: var(--vel-danger-600)
 }
 .vel-md\\:text-danger-700 { color: var(--vel-danger-700)
 }
 .vel-md\\:text-warning-300 { color: var(--vel-warning-300)
 }
 .vel-md\\:text-warning-400 { color: var(--vel-warning-400)
 }
 .vel-md\\:text-warning-500 { color: var(--vel-warning-500)
 }
 .vel-md\\:text-warning-600 { color: var(--vel-warning-600)
 }
 .vel-md\\:text-info-300 { color: var(--vel-info-300)
 }
 .vel-md\\:text-info-400 { color: var(--vel-info-400)
 }
 .vel-md\\:text-info-500 { color: var(--vel-info-500)
 }
 .vel-md\\:text-info-600 { color: var(--vel-info-600)
 }
 .vel-md\\:text-body { color: var(--vel-color-text)
 }
 .vel-md\\:text-muted { color: var(--vel-color-muted)
 }
 .vel-md\\:text-gradient-primary {
  background: var(--vel-gradient-primary);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  color: transparent
 }
 .vel-md\\:text-gradient-aurora {
  background: var(--vel-gradient-aurora);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  color: transparent
 }
 .vel-md\\:text-gradient-sunset {
  background: var(--vel-gradient-sunset);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  color: transparent
 }
 .vel-md\\:text-gradient-ocean {
  background: var(--vel-gradient-ocean);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  color: transparent
 }
 .vel-md\\:text-gradient-cosmos {
  background: var(--vel-gradient-cosmos);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  color: transparent
 }
 .vel-md\\:table {
  width: 100%;
  border-collapse: collapse;
  font-size: var(--vel-text-sm);
  color: var(--vel-color-text)
 }
}
@media (min-width: 1024px) {
 .vel-lg\\:block { display: block
 }
 .vel-lg\\:inline-block { display: inline-block
 }
 .vel-lg\\:inline { display: inline
 }
 .vel-lg\\:flex { display: flex
 }
 .vel-lg\\:inline-flex { display: inline-flex
 }
 .vel-lg\\:grid { display: grid
 }
 .vel-lg\\:inline-grid { display: inline-grid
 }
 .vel-lg\\:hidden { display: none
 }
 .vel-lg\\:table { display: table
 }
 .vel-lg\\:table-row { display: table-row
 }
 .vel-lg\\:table-cell { display: table-cell
 }
 .vel-lg\\:contents { display: contents
 }
 .vel-lg\\:static { position: static
 }
 .vel-lg\\:relative { position: relative
 }
 .vel-lg\\:absolute { position: absolute
 }
 .vel-lg\\:fixed { position: fixed
 }
 .vel-lg\\:sticky { position: sticky
 }
 .vel-lg\\:overflow-auto { overflow: auto
 }
 .vel-lg\\:overflow-hidden { overflow: hidden
 }
 .vel-lg\\:overflow-visible { overflow: visible
 }
 .vel-lg\\:overflow-scroll { overflow: scroll
 }
 .vel-lg\\:overflow-x-auto { overflow-x: auto
 }
 .vel-lg\\:overflow-x-hidden { overflow-x: hidden
 }
 .vel-lg\\:overflow-y-auto { overflow-y: auto
 }
 .vel-lg\\:overflow-y-hidden { overflow-y: hidden
 }
 .vel-lg\\:overflow-y-scroll { overflow-y: scroll
 }
 .vel-lg\\:overscroll-auto { overscroll-behavior: auto
 }
 .vel-lg\\:overscroll-contain { overscroll-behavior: contain
 }
 .vel-lg\\:overscroll-none { overscroll-behavior: none
 }
 .vel-lg\\:visible { visibility: visible
 }
 .vel-lg\\:invisible { visibility: hidden
 }
 .vel-lg\\:collapse { visibility: collapse
 }
 .vel-lg\\:z-0 { z-index: var(--vel-z-0)
 }
 .vel-lg\\:z-10 { z-index: var(--vel-z-10)
 }
 .vel-lg\\:z-20 { z-index: var(--vel-z-20)
 }
 .vel-lg\\:z-30 { z-index: var(--vel-z-30)
 }
 .vel-lg\\:z-40 { z-index: var(--vel-z-40)
 }
 .vel-lg\\:z-50 { z-index: var(--vel-z-50)
 }
 .vel-lg\\:z-auto { z-index: var(--vel-z-auto)
 }
 .vel-lg\\:float-left { float: left
 }
 .vel-lg\\:float-right { float: right
 }
 .vel-lg\\:float-none { float: none
 }
 .vel-lg\\:clear-left { clear: left
 }
 .vel-lg\\:clear-right { clear: right
 }
 .vel-lg\\:clear-both { clear: both
 }
 .vel-lg\\:clear-none { clear: none
 }
 .vel-lg\\:object-contain { -o-object-fit: contain; object-fit: contain
 }
 .vel-lg\\:object-cover { -o-object-fit: cover; object-fit: cover
 }
 .vel-lg\\:object-fill { -o-object-fit: fill; object-fit: fill
 }
 .vel-lg\\:object-none { -o-object-fit: none; object-fit: none
 }
 .vel-lg\\:object-scale-down { -o-object-fit: scale-down; object-fit: scale-down
 }
 .vel-lg\\:aspect-auto { aspect-ratio: auto
 }
 .vel-lg\\:aspect-square { aspect-ratio: 1 / 1
 }
 .vel-lg\\:aspect-video { aspect-ratio: 16 / 9
 }
 .vel-lg\\:columns-1 { -moz-columns: 1; columns: 1
 }
 .vel-lg\\:columns-2 { -moz-columns: 2; columns: 2
 }
 .vel-lg\\:columns-3 { -moz-columns: 3; columns: 3
 }
 .vel-lg\\:columns-4 { -moz-columns: 4; columns: 4
 }
 .vel-lg\\:columns-5 { -moz-columns: 5; columns: 5
 }
 .vel-lg\\:columns-6 { -moz-columns: 6; columns: 6
 }
 .vel-lg\\:columns-auto { -moz-columns: auto; columns: auto
 }
 .vel-lg\\:sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0
 }
 .vel-lg\\:flex-row { flex-direction: row
 }
 .vel-lg\\:flex-row-reverse { flex-direction: row-reverse
 }
 .vel-lg\\:flex-col { flex-direction: column
 }
 .vel-lg\\:flex-col-reverse { flex-direction: column-reverse
 }
 .vel-lg\\:flex-wrap { flex-wrap: wrap
 }
 .vel-lg\\:flex-wrap-reverse { flex-wrap: wrap-reverse
 }
 .vel-lg\\:flex-nowrap { flex-wrap: nowrap
 }
 .vel-lg\\:flex-1 { flex: 1 1 0%
 }
 .vel-lg\\:flex-auto { flex: 1 1 auto
 }
 .vel-lg\\:flex-initial { flex: 0 1 auto
 }
 .vel-lg\\:flex-none { flex: none
 }
 .vel-lg\\:grow { flex-grow: 1
 }
 .vel-lg\\:shrink { flex-shrink: 1
 }
 .vel-lg\\:items-start { align-items: flex-start
 }
 .vel-lg\\:items-end { align-items: flex-end
 }
 .vel-lg\\:items-center { align-items: center
 }
 .vel-lg\\:items-baseline { align-items: baseline
 }
 .vel-lg\\:items-stretch { align-items: stretch
 }
 .vel-lg\\:self-auto { align-self: auto
 }
 .vel-lg\\:self-start { align-self: flex-start
 }
 .vel-lg\\:self-end { align-self: flex-end
 }
 .vel-lg\\:self-center { align-self: center
 }
 .vel-lg\\:self-baseline { align-self: baseline
 }
 .vel-lg\\:self-stretch { align-self: stretch
 }
 .vel-lg\\:justify-start { justify-content: flex-start
 }
 .vel-lg\\:justify-end { justify-content: flex-end
 }
 .vel-lg\\:justify-center { justify-content: center
 }
 .vel-lg\\:justify-between { justify-content: space-between
 }
 .vel-lg\\:justify-around { justify-content: space-around
 }
 .vel-lg\\:justify-evenly { justify-content: space-evenly
 }
 .vel-lg\\:justify-stretch { justify-content: stretch
 }
 .vel-lg\\:justify-items-start { justify-items: start
 }
 .vel-lg\\:justify-items-end { justify-items: end
 }
 .vel-lg\\:justify-items-center { justify-items: center
 }
 .vel-lg\\:justify-items-stretch { justify-items: stretch
 }
 .vel-lg\\:justify-self-auto { justify-self: auto
 }
 .vel-lg\\:justify-self-start { justify-self: start
 }
 .vel-lg\\:justify-self-end { justify-self: end
 }
 .vel-lg\\:justify-self-center { justify-self: center
 }
 .vel-lg\\:justify-self-stretch { justify-self: stretch
 }
 .vel-lg\\:order-first { order: -9999
 }
 .vel-lg\\:order-last { order: 9999
 }
 .vel-lg\\:order-none { order: 0
 }
 .vel-lg\\:order-1 { order: 1
 }
 .vel-lg\\:order-2 { order: 2
 }
 .vel-lg\\:order-3 { order: 3
 }
 .vel-lg\\:order-4 { order: 4
 }
 .vel-lg\\:order-5 { order: 5
 }
 .vel-lg\\:gap-0 { gap: 0px
 }
 .vel-lg\\:gap-1 { gap: var(--vel-space-1)
 }
 .vel-lg\\:gap-2 { gap: var(--vel-space-2)
 }
 .vel-lg\\:gap-3 { gap: var(--vel-space-3)
 }
 .vel-lg\\:gap-4 { gap: var(--vel-space-4)
 }
 .vel-lg\\:gap-5 { gap: var(--vel-space-5)
 }
 .vel-lg\\:gap-6 { gap: var(--vel-space-6)
 }
 .vel-lg\\:gap-7 { gap: var(--vel-space-7)
 }
 .vel-lg\\:gap-8 { gap: var(--vel-space-8)
 }
 .vel-lg\\:gap-10 { gap: var(--vel-space-10)
 }
 .vel-lg\\:gap-12 { gap: var(--vel-space-12)
 }
 .vel-lg\\:gap-16 { gap: var(--vel-space-16)
 }
 .vel-lg\\:gap-px { gap: 1px
 }
 .vel-lg\\:gap-x-0 { -moz-column-gap: 0px; column-gap: 0px
 }
 .vel-lg\\:gap-x-1 { -moz-column-gap: var(--vel-space-1); column-gap: var(--vel-space-1)
 }
 .vel-lg\\:gap-x-2 { -moz-column-gap: var(--vel-space-2); column-gap: var(--vel-space-2)
 }
 .vel-lg\\:gap-x-3 { -moz-column-gap: var(--vel-space-3); column-gap: var(--vel-space-3)
 }
 .vel-lg\\:gap-x-4 { -moz-column-gap: var(--vel-space-4); column-gap: var(--vel-space-4)
 }
 .vel-lg\\:gap-x-5 { -moz-column-gap: var(--vel-space-5); column-gap: var(--vel-space-5)
 }
 .vel-lg\\:gap-x-6 { -moz-column-gap: var(--vel-space-6); column-gap: var(--vel-space-6)
 }
 .vel-lg\\:gap-x-8 { -moz-column-gap: var(--vel-space-8); column-gap: var(--vel-space-8)
 }
 .vel-lg\\:gap-y-0 { row-gap: 0px
 }
 .vel-lg\\:gap-y-1 { row-gap: var(--vel-space-1)
 }
 .vel-lg\\:gap-y-2 { row-gap: var(--vel-space-2)
 }
 .vel-lg\\:gap-y-3 { row-gap: var(--vel-space-3)
 }
 .vel-lg\\:gap-y-4 { row-gap: var(--vel-space-4)
 }
 .vel-lg\\:gap-y-5 { row-gap: var(--vel-space-5)
 }
 .vel-lg\\:gap-y-6 { row-gap: var(--vel-space-6)
 }
 .vel-lg\\:gap-y-8 { row-gap: var(--vel-space-8)
 }
 .vel-lg\\:grid-cols-1 { grid-template-columns: repeat(1, minmax(0, 1fr))
 }
 .vel-lg\\:grid-cols-2 { grid-template-columns: repeat(2, minmax(0, 1fr))
 }
 .vel-lg\\:grid-cols-3 { grid-template-columns: repeat(3, minmax(0, 1fr))
 }
 .vel-lg\\:grid-cols-4 { grid-template-columns: repeat(4, minmax(0, 1fr))
 }
 .vel-lg\\:grid-cols-5 { grid-template-columns: repeat(5, minmax(0, 1fr))
 }
 .vel-lg\\:grid-cols-6 { grid-template-columns: repeat(6, minmax(0, 1fr))
 }
 .vel-lg\\:grid-cols-7 { grid-template-columns: repeat(7, minmax(0, 1fr))
 }
 .vel-lg\\:grid-cols-8 { grid-template-columns: repeat(8, minmax(0, 1fr))
 }
 .vel-lg\\:grid-cols-9 { grid-template-columns: repeat(9, minmax(0, 1fr))
 }
 .vel-lg\\:grid-cols-10 { grid-template-columns: repeat(10, minmax(0, 1fr))
 }
 .vel-lg\\:grid-cols-11 { grid-template-columns: repeat(11, minmax(0, 1fr))
 }
 .vel-lg\\:grid-cols-12 { grid-template-columns: repeat(12, minmax(0, 1fr))
 }
 .vel-lg\\:grid-cols-none { grid-template-columns: none
 }
 .vel-lg\\:col-auto { grid-column: auto
 }
 .vel-lg\\:col-span-1 { grid-column: span 1 / span 1
 }
 .vel-lg\\:col-span-2 { grid-column: span 2 / span 2
 }
 .vel-lg\\:col-span-3 { grid-column: span 3 / span 3
 }
 .vel-lg\\:col-span-4 { grid-column: span 4 / span 4
 }
 .vel-lg\\:col-span-5 { grid-column: span 5 / span 5
 }
 .vel-lg\\:col-span-6 { grid-column: span 6 / span 6
 }
 .vel-lg\\:col-span-7 { grid-column: span 7 / span 7
 }
 .vel-lg\\:col-span-8 { grid-column: span 8 / span 8
 }
 .vel-lg\\:col-span-9 { grid-column: span 9 / span 9
 }
 .vel-lg\\:col-span-10 { grid-column: span 10 / span 10
 }
 .vel-lg\\:col-span-11 { grid-column: span 11 / span 11
 }
 .vel-lg\\:col-span-12 { grid-column: span 12 / span 12
 }
 .vel-lg\\:col-span-full { grid-column: 1 / -1
 }
 .vel-lg\\:col-start-1 { grid-column-start: 1
 }
 .vel-lg\\:col-start-2 { grid-column-start: 2
 }
 .vel-lg\\:col-start-3 { grid-column-start: 3
 }
 .vel-lg\\:col-start-4 { grid-column-start: 4
 }
 .vel-lg\\:col-start-auto { grid-column-start: auto
 }
 .vel-lg\\:col-end-1 { grid-column-end: 1
 }
 .vel-lg\\:col-end-2 { grid-column-end: 2
 }
 .vel-lg\\:col-end-3 { grid-column-end: 3
 }
 .vel-lg\\:col-end-4 { grid-column-end: 4
 }
 .vel-lg\\:col-end-auto { grid-column-end: auto
 }
 .vel-lg\\:grid-rows-1 { grid-template-rows: repeat(1, minmax(0, 1fr))
 }
 .vel-lg\\:grid-rows-2 { grid-template-rows: repeat(2, minmax(0, 1fr))
 }
 .vel-lg\\:grid-rows-3 { grid-template-rows: repeat(3, minmax(0, 1fr))
 }
 .vel-lg\\:grid-rows-4 { grid-template-rows: repeat(4, minmax(0, 1fr))
 }
 .vel-lg\\:grid-rows-5 { grid-template-rows: repeat(5, minmax(0, 1fr))
 }
 .vel-lg\\:grid-rows-6 { grid-template-rows: repeat(6, minmax(0, 1fr))
 }
 .vel-lg\\:grid-rows-none { grid-template-rows: none
 }
 .vel-lg\\:row-auto { grid-row: auto
 }
 .vel-lg\\:row-span-1 { grid-row: span 1 / span 1
 }
 .vel-lg\\:row-span-2 { grid-row: span 2 / span 2
 }
 .vel-lg\\:row-span-3 { grid-row: span 3 / span 3
 }
 .vel-lg\\:row-span-4 { grid-row: span 4 / span 4
 }
 .vel-lg\\:row-span-5 { grid-row: span 5 / span 5
 }
 .vel-lg\\:row-span-6 { grid-row: span 6 / span 6
 }
 .vel-lg\\:row-span-full { grid-row: 1 / -1
 }
 .vel-lg\\:row-start-1 { grid-row-start: 1
 }
 .vel-lg\\:row-start-2 { grid-row-start: 2
 }
 .vel-lg\\:row-start-3 { grid-row-start: 3
 }
 .vel-lg\\:row-start-auto { grid-row-start: auto
 }
 .vel-lg\\:row-end-1 { grid-row-end: 1
 }
 .vel-lg\\:row-end-2 { grid-row-end: 2
 }
 .vel-lg\\:row-end-3 { grid-row-end: 3
 }
 .vel-lg\\:row-end-auto { grid-row-end: auto
 }
 .vel-lg\\:grid-flow-row { grid-auto-flow: row
 }
 .vel-lg\\:grid-flow-col { grid-auto-flow: column
 }
 .vel-lg\\:grid-flow-dense { grid-auto-flow: dense
 }
 .vel-lg\\:grid-flow-row-dense { grid-auto-flow: row dense
 }
 .vel-lg\\:grid-flow-col-dense { grid-auto-flow: column dense
 }
 .vel-lg\\:p-0 { padding: 0px
 }
 .vel-lg\\:p-px { padding: 1px
 }
 .vel-lg\\:p-1 { padding: var(--vel-space-1)
 }
 .vel-lg\\:p-2 { padding: var(--vel-space-2)
 }
 .vel-lg\\:p-3 { padding: var(--vel-space-3)
 }
 .vel-lg\\:p-4 { padding: var(--vel-space-4)
 }
 .vel-lg\\:p-5 { padding: var(--vel-space-5)
 }
 .vel-lg\\:p-6 { padding: var(--vel-space-6)
 }
 .vel-lg\\:p-7 { padding: var(--vel-space-7)
 }
 .vel-lg\\:p-8 { padding: var(--vel-space-8)
 }
 .vel-lg\\:p-9 { padding: var(--vel-space-9)
 }
 .vel-lg\\:p-10 { padding: var(--vel-space-10)
 }
 .vel-lg\\:p-11 { padding: var(--vel-space-11)
 }
 .vel-lg\\:p-12 { padding: var(--vel-space-12)
 }
 .vel-lg\\:p-14 { padding: var(--vel-space-14)
 }
 .vel-lg\\:p-16 { padding: var(--vel-space-16)
 }
 .vel-lg\\:p-20 { padding: var(--vel-space-20)
 }
 .vel-lg\\:p-24 { padding: var(--vel-space-24)
 }
 .vel-lg\\:p-28 { padding: var(--vel-space-28)
 }
 .vel-lg\\:p-32 { padding: var(--vel-space-32)
 }
 .vel-lg\\:pt-0 { padding-top: 0px
 }
 .vel-lg\\:pt-1 { padding-top: var(--vel-space-1)
 }
 .vel-lg\\:pt-2 { padding-top: var(--vel-space-2)
 }
 .vel-lg\\:pt-3 { padding-top: var(--vel-space-3)
 }
 .vel-lg\\:pt-4 { padding-top: var(--vel-space-4)
 }
 .vel-lg\\:pt-5 { padding-top: var(--vel-space-5)
 }
 .vel-lg\\:pt-6 { padding-top: var(--vel-space-6)
 }
 .vel-lg\\:pt-8 { padding-top: var(--vel-space-8)
 }
 .vel-lg\\:pt-10 { padding-top: var(--vel-space-10)
 }
 .vel-lg\\:pt-12 { padding-top: var(--vel-space-12)
 }
 .vel-lg\\:pt-16 { padding-top: var(--vel-space-16)
 }
 .vel-lg\\:pr-0 { padding-right: 0px
 }
 .vel-lg\\:pr-1 { padding-right: var(--vel-space-1)
 }
 .vel-lg\\:pr-2 { padding-right: var(--vel-space-2)
 }
 .vel-lg\\:pr-3 { padding-right: var(--vel-space-3)
 }
 .vel-lg\\:pr-4 { padding-right: var(--vel-space-4)
 }
 .vel-lg\\:pr-5 { padding-right: var(--vel-space-5)
 }
 .vel-lg\\:pr-6 { padding-right: var(--vel-space-6)
 }
 .vel-lg\\:pr-8 { padding-right: var(--vel-space-8)
 }
 .vel-lg\\:pr-12 { padding-right: var(--vel-space-12)
 }
 .vel-lg\\:pb-0 { padding-bottom: 0px
 }
 .vel-lg\\:pb-1 { padding-bottom: var(--vel-space-1)
 }
 .vel-lg\\:pb-2 { padding-bottom: var(--vel-space-2)
 }
 .vel-lg\\:pb-3 { padding-bottom: var(--vel-space-3)
 }
 .vel-lg\\:pb-4 { padding-bottom: var(--vel-space-4)
 }
 .vel-lg\\:pb-5 { padding-bottom: var(--vel-space-5)
 }
 .vel-lg\\:pb-6 { padding-bottom: var(--vel-space-6)
 }
 .vel-lg\\:pb-8 { padding-bottom: var(--vel-space-8)
 }
 .vel-lg\\:pb-12 { padding-bottom: var(--vel-space-12)
 }
 .vel-lg\\:pl-0 { padding-left: 0px
 }
 .vel-lg\\:pl-1 { padding-left: var(--vel-space-1)
 }
 .vel-lg\\:pl-2 { padding-left: var(--vel-space-2)
 }
 .vel-lg\\:pl-3 { padding-left: var(--vel-space-3)
 }
 .vel-lg\\:pl-4 { padding-left: var(--vel-space-4)
 }
 .vel-lg\\:pl-5 { padding-left: var(--vel-space-5)
 }
 .vel-lg\\:pl-6 { padding-left: var(--vel-space-6)
 }
 .vel-lg\\:pl-8 { padding-left: var(--vel-space-8)
 }
 .vel-lg\\:pl-12 { padding-left: var(--vel-space-12)
 }
 .vel-lg\\:m-0 { margin: 0px
 }
 .vel-lg\\:m-px { margin: 1px
 }
 .vel-lg\\:m-auto { margin: auto
 }
 .vel-lg\\:m-1 { margin: var(--vel-space-1)
 }
 .vel-lg\\:m-2 { margin: var(--vel-space-2)
 }
 .vel-lg\\:m-3 { margin: var(--vel-space-3)
 }
 .vel-lg\\:m-4 { margin: var(--vel-space-4)
 }
 .vel-lg\\:m-5 { margin: var(--vel-space-5)
 }
 .vel-lg\\:m-6 { margin: var(--vel-space-6)
 }
 .vel-lg\\:m-7 { margin: var(--vel-space-7)
 }
 .vel-lg\\:m-8 { margin: var(--vel-space-8)
 }
 .vel-lg\\:m-10 { margin: var(--vel-space-10)
 }
 .vel-lg\\:m-12 { margin: var(--vel-space-12)
 }
 .vel-lg\\:m-16 { margin: var(--vel-space-16)
 }
 .vel-lg\\:mt-0 { margin-top: 0px
 }
 .vel-lg\\:mt-auto { margin-top: auto
 }
 .vel-lg\\:mt-1 { margin-top: var(--vel-space-1)
 }
 .vel-lg\\:mt-2 { margin-top: var(--vel-space-2)
 }
 .vel-lg\\:mt-3 { margin-top: var(--vel-space-3)
 }
 .vel-lg\\:mt-4 { margin-top: var(--vel-space-4)
 }
 .vel-lg\\:mt-5 { margin-top: var(--vel-space-5)
 }
 .vel-lg\\:mt-6 { margin-top: var(--vel-space-6)
 }
 .vel-lg\\:mt-8 { margin-top: var(--vel-space-8)
 }
 .vel-lg\\:mt-10 { margin-top: var(--vel-space-10)
 }
 .vel-lg\\:mt-12 { margin-top: var(--vel-space-12)
 }
 .vel-lg\\:mt-16 { margin-top: var(--vel-space-16)
 }
 .vel-lg\\:mr-0 { margin-right: 0px
 }
 .vel-lg\\:mr-auto { margin-right: auto
 }
 .vel-lg\\:mr-1 { margin-right: var(--vel-space-1)
 }
 .vel-lg\\:mr-2 { margin-right: var(--vel-space-2)
 }
 .vel-lg\\:mr-3 { margin-right: var(--vel-space-3)
 }
 .vel-lg\\:mr-4 { margin-right: var(--vel-space-4)
 }
 .vel-lg\\:mr-6 { margin-right: var(--vel-space-6)
 }
 .vel-lg\\:mr-8 { margin-right: var(--vel-space-8)
 }
 .vel-lg\\:mb-0 { margin-bottom: 0px
 }
 .vel-lg\\:mb-auto { margin-bottom: auto
 }
 .vel-lg\\:mb-1 { margin-bottom: var(--vel-space-1)
 }
 .vel-lg\\:mb-2 { margin-bottom: var(--vel-space-2)
 }
 .vel-lg\\:mb-3 { margin-bottom: var(--vel-space-3)
 }
 .vel-lg\\:mb-4 { margin-bottom: var(--vel-space-4)
 }
 .vel-lg\\:mb-5 { margin-bottom: var(--vel-space-5)
 }
 .vel-lg\\:mb-6 { margin-bottom: var(--vel-space-6)
 }
 .vel-lg\\:mb-8 { margin-bottom: var(--vel-space-8)
 }
 .vel-lg\\:mb-10 { margin-bottom: var(--vel-space-10)
 }
 .vel-lg\\:mb-12 { margin-bottom: var(--vel-space-12)
 }
 .vel-lg\\:mb-16 { margin-bottom: var(--vel-space-16)
 }
 .vel-lg\\:ml-0 { margin-left: 0px
 }
 .vel-lg\\:ml-auto { margin-left: auto
 }
 .vel-lg\\:ml-1 { margin-left: var(--vel-space-1)
 }
 .vel-lg\\:ml-2 { margin-left: var(--vel-space-2)
 }
 .vel-lg\\:ml-3 { margin-left: var(--vel-space-3)
 }
 .vel-lg\\:ml-4 { margin-left: var(--vel-space-4)
 }
 .vel-lg\\:ml-6 { margin-left: var(--vel-space-6)
 }
 .vel-lg\\:ml-8 { margin-left: var(--vel-space-8)
 }
 .vel-lg\\:w-0 { width: 0px
 }
 .vel-lg\\:w-px { width: 1px
 }
 .vel-lg\\:w-auto { width: auto
 }
 .vel-lg\\:w-full { width: 100%
 }
 .vel-lg\\:w-screen { width: 100vw
 }
 .vel-lg\\:w-svw { width: 100svw
 }
 .vel-lg\\:w-dvw { width: 100dvw
 }
 .vel-lg\\:w-min { width: -moz-min-content; width: min-content
 }
 .vel-lg\\:w-max { width: -moz-max-content; width: max-content
 }
 .vel-lg\\:w-fit { width: -moz-fit-content; width: fit-content
 }
 .vel-lg\\:w-1 { width: var(--vel-space-1)
 }
 .vel-lg\\:w-2 { width: var(--vel-space-2)
 }
 .vel-lg\\:w-3 { width: var(--vel-space-3)
 }
 .vel-lg\\:w-4 { width: var(--vel-space-4)
 }
 .vel-lg\\:w-5 { width: var(--vel-space-5)
 }
 .vel-lg\\:w-6 { width: var(--vel-space-6)
 }
 .vel-lg\\:w-7 { width: var(--vel-space-7)
 }
 .vel-lg\\:w-8 { width: var(--vel-space-8)
 }
 .vel-lg\\:w-9 { width: var(--vel-space-9)
 }
 .vel-lg\\:w-10 { width: var(--vel-space-10)
 }
 .vel-lg\\:w-11 { width: var(--vel-space-11)
 }
 .vel-lg\\:w-12 { width: var(--vel-space-12)
 }
 .vel-lg\\:w-14 { width: var(--vel-space-14)
 }
 .vel-lg\\:w-16 { width: var(--vel-space-16)
 }
 .vel-lg\\:w-20 { width: var(--vel-space-20)
 }
 .vel-lg\\:w-24 { width: var(--vel-space-24)
 }
 .vel-lg\\:w-28 { width: var(--vel-space-28)
 }
 .vel-lg\\:w-32 { width: var(--vel-space-32)
 }
 .vel-lg\\:w-36 { width: var(--vel-space-36)
 }
 .vel-lg\\:w-40 { width: var(--vel-space-40)
 }
 .vel-lg\\:w-48 { width: var(--vel-space-48)
 }
 .vel-lg\\:w-56 { width: var(--vel-space-56)
 }
 .vel-lg\\:w-64 { width: var(--vel-space-64)
 }
 .vel-lg\\:w-72 { width: var(--vel-space-72)
 }
 .vel-lg\\:w-80 { width: var(--vel-space-80)
 }
 .vel-lg\\:w-96 { width: var(--vel-space-96)
 }
 .vel-lg\\:min-w-0 { min-width: 0px
 }
 .vel-lg\\:min-w-full { min-width: 100%
 }
 .vel-lg\\:min-w-min { min-width: -moz-min-content; min-width: min-content
 }
 .vel-lg\\:min-w-max { min-width: -moz-max-content; min-width: max-content
 }
 .vel-lg\\:min-w-fit { min-width: -moz-fit-content; min-width: fit-content
 }
 .vel-lg\\:max-w-none { max-width: none
 }
 .vel-lg\\:max-w-xs { max-width: 20rem
 }
 .vel-lg\\:max-w-sm { max-width: 24rem
 }
 .vel-lg\\:max-w-md { max-width: 28rem
 }
 .vel-lg\\:max-w-lg { max-width: 32rem
 }
 .vel-lg\\:max-w-xl { max-width: 36rem
 }
 .vel-lg\\:max-w-2xl { max-width: 42rem
 }
 .vel-lg\\:max-w-3xl { max-width: 48rem
 }
 .vel-lg\\:max-w-4xl { max-width: 56rem
 }
 .vel-lg\\:max-w-5xl { max-width: 64rem
 }
 .vel-lg\\:max-w-6xl { max-width: 72rem
 }
 .vel-lg\\:max-w-7xl { max-width: 80rem
 }
 .vel-lg\\:max-w-full { max-width: 100%
 }
 .vel-lg\\:max-w-min { max-width: -moz-min-content; max-width: min-content
 }
 .vel-lg\\:max-w-max { max-width: -moz-max-content; max-width: max-content
 }
 .vel-lg\\:max-w-fit { max-width: -moz-fit-content; max-width: fit-content
 }
 .vel-lg\\:max-w-prose { max-width: 65ch
 }
 .vel-lg\\:max-w-screen-sm { max-width: 640px
 }
 .vel-lg\\:max-w-screen-md { max-width: 768px
 }
 .vel-lg\\:max-w-screen-lg { max-width: 1024px
 }
 .vel-lg\\:max-w-screen-xl { max-width: 1280px
 }
 .vel-lg\\:max-w-screen-2xl { max-width: 1536px
 }
 .vel-lg\\:h-0 { height: 0px
 }
 .vel-lg\\:h-px { height: 1px
 }
 .vel-lg\\:h-auto { height: auto
 }
 .vel-lg\\:h-full { height: 100%
 }
 .vel-lg\\:h-screen { height: 100vh
 }
 .vel-lg\\:h-svh { height: 100svh
 }
 .vel-lg\\:h-dvh { height: 100dvh
 }
 .vel-lg\\:h-min { height: -moz-min-content; height: min-content
 }
 .vel-lg\\:h-max { height: -moz-max-content; height: max-content
 }
 .vel-lg\\:h-fit { height: -moz-fit-content; height: fit-content
 }
 .vel-lg\\:h-1 { height: var(--vel-space-1)
 }
 .vel-lg\\:h-2 { height: var(--vel-space-2)
 }
 .vel-lg\\:h-3 { height: var(--vel-space-3)
 }
 .vel-lg\\:h-4 { height: var(--vel-space-4)
 }
 .vel-lg\\:h-5 { height: var(--vel-space-5)
 }
 .vel-lg\\:h-6 { height: var(--vel-space-6)
 }
 .vel-lg\\:h-7 { height: var(--vel-space-7)
 }
 .vel-lg\\:h-8 { height: var(--vel-space-8)
 }
 .vel-lg\\:h-9 { height: var(--vel-space-9)
 }
 .vel-lg\\:h-10 { height: var(--vel-space-10)
 }
 .vel-lg\\:h-11 { height: var(--vel-space-11)
 }
 .vel-lg\\:h-12 { height: var(--vel-space-12)
 }
 .vel-lg\\:h-14 { height: var(--vel-space-14)
 }
 .vel-lg\\:h-16 { height: var(--vel-space-16)
 }
 .vel-lg\\:h-20 { height: var(--vel-space-20)
 }
 .vel-lg\\:h-24 { height: var(--vel-space-24)
 }
 .vel-lg\\:h-28 { height: var(--vel-space-28)
 }
 .vel-lg\\:h-32 { height: var(--vel-space-32)
 }
 .vel-lg\\:h-36 { height: var(--vel-space-36)
 }
 .vel-lg\\:h-40 { height: var(--vel-space-40)
 }
 .vel-lg\\:h-48 { height: var(--vel-space-48)
 }
 .vel-lg\\:h-56 { height: var(--vel-space-56)
 }
 .vel-lg\\:h-64 { height: var(--vel-space-64)
 }
 .vel-lg\\:min-h-0 { min-height: 0px
 }
 .vel-lg\\:min-h-full { min-height: 100%
 }
 .vel-lg\\:min-h-screen { min-height: 100vh
 }
 .vel-lg\\:min-h-svh { min-height: 100svh
 }
 .vel-lg\\:min-h-dvh { min-height: 100dvh
 }
 .vel-lg\\:min-h-min { min-height: -moz-min-content; min-height: min-content
 }
 .vel-lg\\:min-h-max { min-height: -moz-max-content; min-height: max-content
 }
 .vel-lg\\:min-h-fit { min-height: -moz-fit-content; min-height: fit-content
 }
 .vel-lg\\:max-h-none { max-height: none
 }
 .vel-lg\\:max-h-full { max-height: 100%
 }
 .vel-lg\\:max-h-screen { max-height: 100vh
 }
 .vel-lg\\:max-h-svh { max-height: 100svh
 }
 .vel-lg\\:max-h-dvh { max-height: 100dvh
 }
 .vel-lg\\:max-h-min { max-height: -moz-min-content; max-height: min-content
 }
 .vel-lg\\:max-h-max { max-height: -moz-max-content; max-height: max-content
 }
 .vel-lg\\:max-h-fit { max-height: -moz-fit-content; max-height: fit-content
 }
 .vel-lg\\:max-h-24 { max-height: var(--vel-space-24)
 }
 .vel-lg\\:max-h-48 { max-height: var(--vel-space-48)
 }
 .vel-lg\\:max-h-64 { max-height: var(--vel-space-64)
 }
 .vel-lg\\:max-h-96 { max-height: var(--vel-space-96)
 }
 .vel-lg\\:font-sans { font-family: var(--vel-font-sans)
 }
 .vel-lg\\:font-serif { font-family: var(--vel-font-serif)
 }
 .vel-lg\\:font-mono { font-family: var(--vel-font-mono)
 }
 .vel-lg\\:text-xs { font-size: var(--vel-text-xs); line-height: 1rem
 }
 .vel-lg\\:text-sm { font-size: var(--vel-text-sm); line-height: 1.25rem
 }
 .vel-lg\\:text-base { font-size: var(--vel-text-base); line-height: 1.5rem
 }
 .vel-lg\\:text-lg { font-size: var(--vel-text-lg); line-height: 1.75rem
 }
 .vel-lg\\:text-xl { font-size: var(--vel-text-xl); line-height: 1.75rem
 }
 .vel-lg\\:text-2xl { font-size: var(--vel-text-2xl); line-height: 2rem
 }
 .vel-lg\\:text-3xl { font-size: var(--vel-text-3xl); line-height: 2.25rem
 }
 .vel-lg\\:text-4xl { font-size: var(--vel-text-4xl); line-height: 2.5rem
 }
 .vel-lg\\:text-5xl { font-size: var(--vel-text-5xl); line-height: 1
 }
 .vel-lg\\:text-6xl { font-size: var(--vel-text-6xl); line-height: 1
 }
 .vel-lg\\:text-7xl { font-size: var(--vel-text-7xl); line-height: 1
 }
 .vel-lg\\:text-8xl { font-size: var(--vel-text-8xl); line-height: 1
 }
 .vel-lg\\:text-9xl { font-size: var(--vel-text-9xl); line-height: 1
 }
 .vel-lg\\:font-thin { font-weight: 100
 }
 .vel-lg\\:font-extralight { font-weight: 200
 }
 .vel-lg\\:font-light { font-weight: 300
 }
 .vel-lg\\:font-normal { font-weight: 400
 }
 .vel-lg\\:font-medium { font-weight: 500
 }
 .vel-lg\\:font-semibold { font-weight: 600
 }
 .vel-lg\\:font-bold { font-weight: 700
 }
 .vel-lg\\:font-extrabold { font-weight: 800
 }
 .vel-lg\\:font-black { font-weight: 900
 }
 .vel-lg\\:italic { font-style: italic
 }
 .vel-lg\\:not-italic { font-style: normal
 }
 .vel-lg\\:leading-none { line-height: 1
 }
 .vel-lg\\:leading-tight { line-height: 1.25
 }
 .vel-lg\\:leading-snug { line-height: 1.375
 }
 .vel-lg\\:leading-normal { line-height: 1.5
 }
 .vel-lg\\:leading-relaxed { line-height: 1.625
 }
 .vel-lg\\:leading-loose { line-height: 2
 }
 .vel-lg\\:leading-3 { line-height: 0.75rem
 }
 .vel-lg\\:leading-4 { line-height: 1rem
 }
 .vel-lg\\:leading-5 { line-height: 1.25rem
 }
 .vel-lg\\:leading-6 { line-height: 1.5rem
 }
 .vel-lg\\:leading-7 { line-height: 1.75rem
 }
 .vel-lg\\:leading-8 { line-height: 2rem
 }
 .vel-lg\\:leading-9 { line-height: 2.25rem
 }
 .vel-lg\\:leading-10 { line-height: 2.5rem
 }
 .vel-lg\\:tracking-tighter { letter-spacing: -0.05em
 }
 .vel-lg\\:tracking-tight { letter-spacing: -0.025em
 }
 .vel-lg\\:tracking-normal { letter-spacing: 0em
 }
 .vel-lg\\:tracking-wide { letter-spacing: 0.025em
 }
 .vel-lg\\:tracking-wider { letter-spacing: 0.05em
 }
 .vel-lg\\:tracking-widest { letter-spacing: 0.1em
 }
 .vel-lg\\:text-left { text-align: left
 }
 .vel-lg\\:text-center { text-align: center
 }
 .vel-lg\\:text-right { text-align: right
 }
 .vel-lg\\:text-justify { text-align: justify
 }
 .vel-lg\\:text-start { text-align: start
 }
 .vel-lg\\:text-end { text-align: end
 }
 .vel-lg\\:underline { text-decoration-line: underline
 }
 .vel-lg\\:line-through { text-decoration-line: line-through
 }
 .vel-lg\\:no-underline { text-decoration-line: none
 }
 .vel-lg\\:uppercase { text-transform: uppercase
 }
 .vel-lg\\:lowercase { text-transform: lowercase
 }
 .vel-lg\\:capitalize { text-transform: capitalize
 }
 .vel-lg\\:normal-case { text-transform: none
 }
 .vel-lg\\:truncate { overflow: hidden; text-overflow: ellipsis; white-space: nowrap
 }
 .vel-lg\\:text-ellipsis { text-overflow: ellipsis
 }
 .vel-lg\\:text-clip { text-overflow: clip
 }
 .vel-lg\\:whitespace-normal { white-space: normal
 }
 .vel-lg\\:whitespace-nowrap { white-space: nowrap
 }
 .vel-lg\\:whitespace-pre { white-space: pre
 }
 .vel-lg\\:whitespace-pre-line { white-space: pre-line
 }
 .vel-lg\\:whitespace-pre-wrap { white-space: pre-wrap
 }
 .vel-lg\\:whitespace-break-spaces { white-space: break-spaces
 }
 .vel-lg\\:text-inherit { color: inherit
 }
 .vel-lg\\:text-current { color: currentColor
 }
 .vel-lg\\:text-transparent { color: transparent
 }
 .vel-lg\\:text-white { color: #ffffff
 }
 .vel-lg\\:text-black { color: #000000
 }
 .vel-lg\\:text-primary { color: var(--vel-color-primary)
 }
 .vel-lg\\:text-secondary { color: var(--vel-color-secondary)
 }
 .vel-lg\\:text-success { color: var(--vel-color-success)
 }
 .vel-lg\\:text-danger { color: var(--vel-color-danger)
 }
 .vel-lg\\:text-warning { color: var(--vel-color-warning)
 }
 .vel-lg\\:text-info { color: var(--vel-color-info)
 }
 .vel-lg\\:text-neutral-50 { color: var(--vel-neutral-50)
 }
 .vel-lg\\:text-neutral-100 { color: var(--vel-neutral-100)
 }
 .vel-lg\\:text-neutral-200 { color: var(--vel-neutral-200)
 }
 .vel-lg\\:text-neutral-300 { color: var(--vel-neutral-300)
 }
 .vel-lg\\:text-neutral-400 { color: var(--vel-neutral-400)
 }
 .vel-lg\\:text-neutral-500 { color: var(--vel-neutral-500)
 }
 .vel-lg\\:text-neutral-600 { color: var(--vel-neutral-600)
 }
 .vel-lg\\:text-neutral-700 { color: var(--vel-neutral-700)
 }
 .vel-lg\\:text-neutral-800 { color: var(--vel-neutral-800)
 }
 .vel-lg\\:text-neutral-900 { color: var(--vel-neutral-900)
 }
 .vel-lg\\:text-neutral-950 { color: var(--vel-neutral-950)
 }
 .vel-lg\\:text-primary-50 { color: var(--vel-primary-50)
 }
 .vel-lg\\:text-primary-100 { color: var(--vel-primary-100)
 }
 .vel-lg\\:text-primary-200 { color: var(--vel-primary-200)
 }
 .vel-lg\\:text-primary-300 { color: var(--vel-primary-300)
 }
 .vel-lg\\:text-primary-400 { color: var(--vel-primary-400)
 }
 .vel-lg\\:text-primary-500 { color: var(--vel-primary-500)
 }
 .vel-lg\\:text-primary-600 { color: var(--vel-primary-600)
 }
 .vel-lg\\:text-primary-700 { color: var(--vel-primary-700)
 }
 .vel-lg\\:text-primary-800 { color: var(--vel-primary-800)
 }
 .vel-lg\\:text-primary-900 { color: var(--vel-primary-900)
 }
 .vel-lg\\:text-primary-950 { color: var(--vel-primary-950)
 }
 .vel-lg\\:text-success-50 { color: var(--vel-success-50)
 }
 .vel-lg\\:text-success-100 { color: var(--vel-success-100)
 }
 .vel-lg\\:text-success-200 { color: var(--vel-success-200)
 }
 .vel-lg\\:text-success-300 { color: var(--vel-success-300)
 }
 .vel-lg\\:text-success-400 { color: var(--vel-success-400)
 }
 .vel-lg\\:text-success-500 { color: var(--vel-success-500)
 }
 .vel-lg\\:text-success-600 { color: var(--vel-success-600)
 }
 .vel-lg\\:text-success-700 { color: var(--vel-success-700)
 }
 .vel-lg\\:text-danger-50 { color: var(--vel-danger-50)
 }
 .vel-lg\\:text-danger-100 { color: var(--vel-danger-100)
 }
 .vel-lg\\:text-danger-300 { color: var(--vel-danger-300)
 }
 .vel-lg\\:text-danger-400 { color: var(--vel-danger-400)
 }
 .vel-lg\\:text-danger-500 { color: var(--vel-danger-500)
 }
 .vel-lg\\:text-danger-600 { color: var(--vel-danger-600)
 }
 .vel-lg\\:text-danger-700 { color: var(--vel-danger-700)
 }
 .vel-lg\\:text-warning-300 { color: var(--vel-warning-300)
 }
 .vel-lg\\:text-warning-400 { color: var(--vel-warning-400)
 }
 .vel-lg\\:text-warning-500 { color: var(--vel-warning-500)
 }
 .vel-lg\\:text-warning-600 { color: var(--vel-warning-600)
 }
 .vel-lg\\:text-info-300 { color: var(--vel-info-300)
 }
 .vel-lg\\:text-info-400 { color: var(--vel-info-400)
 }
 .vel-lg\\:text-info-500 { color: var(--vel-info-500)
 }
 .vel-lg\\:text-info-600 { color: var(--vel-info-600)
 }
 .vel-lg\\:text-body { color: var(--vel-color-text)
 }
 .vel-lg\\:text-muted { color: var(--vel-color-muted)
 }
 .vel-lg\\:text-gradient-primary {
  background: var(--vel-gradient-primary);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  color: transparent
 }
 .vel-lg\\:text-gradient-aurora {
  background: var(--vel-gradient-aurora);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  color: transparent
 }
 .vel-lg\\:text-gradient-sunset {
  background: var(--vel-gradient-sunset);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  color: transparent
 }
 .vel-lg\\:text-gradient-ocean {
  background: var(--vel-gradient-ocean);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  color: transparent
 }
 .vel-lg\\:text-gradient-cosmos {
  background: var(--vel-gradient-cosmos);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  color: transparent
 }
 .vel-lg\\:table {
  width: 100%;
  border-collapse: collapse;
  font-size: var(--vel-text-sm);
  color: var(--vel-color-text)
 }
}
@media (min-width: 1280px) {
 .vel-xl\\:block { display: block
 }
 .vel-xl\\:inline-block { display: inline-block
 }
 .vel-xl\\:inline { display: inline
 }
 .vel-xl\\:flex { display: flex
 }
 .vel-xl\\:inline-flex { display: inline-flex
 }
 .vel-xl\\:grid { display: grid
 }
 .vel-xl\\:inline-grid { display: inline-grid
 }
 .vel-xl\\:hidden { display: none
 }
 .vel-xl\\:table { display: table
 }
 .vel-xl\\:table-row { display: table-row
 }
 .vel-xl\\:table-cell { display: table-cell
 }
 .vel-xl\\:contents { display: contents
 }
 .vel-xl\\:static { position: static
 }
 .vel-xl\\:relative { position: relative
 }
 .vel-xl\\:absolute { position: absolute
 }
 .vel-xl\\:fixed { position: fixed
 }
 .vel-xl\\:sticky { position: sticky
 }
 .vel-xl\\:overflow-auto { overflow: auto
 }
 .vel-xl\\:overflow-hidden { overflow: hidden
 }
 .vel-xl\\:overflow-visible { overflow: visible
 }
 .vel-xl\\:overflow-scroll { overflow: scroll
 }
 .vel-xl\\:overflow-x-auto { overflow-x: auto
 }
 .vel-xl\\:overflow-x-hidden { overflow-x: hidden
 }
 .vel-xl\\:overflow-y-auto { overflow-y: auto
 }
 .vel-xl\\:overflow-y-hidden { overflow-y: hidden
 }
 .vel-xl\\:overflow-y-scroll { overflow-y: scroll
 }
 .vel-xl\\:overscroll-auto { overscroll-behavior: auto
 }
 .vel-xl\\:overscroll-contain { overscroll-behavior: contain
 }
 .vel-xl\\:overscroll-none { overscroll-behavior: none
 }
 .vel-xl\\:visible { visibility: visible
 }
 .vel-xl\\:invisible { visibility: hidden
 }
 .vel-xl\\:collapse { visibility: collapse
 }
 .vel-xl\\:z-0 { z-index: var(--vel-z-0)
 }
 .vel-xl\\:z-10 { z-index: var(--vel-z-10)
 }
 .vel-xl\\:z-20 { z-index: var(--vel-z-20)
 }
 .vel-xl\\:z-30 { z-index: var(--vel-z-30)
 }
 .vel-xl\\:z-40 { z-index: var(--vel-z-40)
 }
 .vel-xl\\:z-50 { z-index: var(--vel-z-50)
 }
 .vel-xl\\:z-auto { z-index: var(--vel-z-auto)
 }
 .vel-xl\\:float-left { float: left
 }
 .vel-xl\\:float-right { float: right
 }
 .vel-xl\\:float-none { float: none
 }
 .vel-xl\\:clear-left { clear: left
 }
 .vel-xl\\:clear-right { clear: right
 }
 .vel-xl\\:clear-both { clear: both
 }
 .vel-xl\\:clear-none { clear: none
 }
 .vel-xl\\:object-contain { -o-object-fit: contain; object-fit: contain
 }
 .vel-xl\\:object-cover { -o-object-fit: cover; object-fit: cover
 }
 .vel-xl\\:object-fill { -o-object-fit: fill; object-fit: fill
 }
 .vel-xl\\:object-none { -o-object-fit: none; object-fit: none
 }
 .vel-xl\\:object-scale-down { -o-object-fit: scale-down; object-fit: scale-down
 }
 .vel-xl\\:aspect-auto { aspect-ratio: auto
 }
 .vel-xl\\:aspect-square { aspect-ratio: 1 / 1
 }
 .vel-xl\\:aspect-video { aspect-ratio: 16 / 9
 }
 .vel-xl\\:columns-1 { -moz-columns: 1; columns: 1
 }
 .vel-xl\\:columns-2 { -moz-columns: 2; columns: 2
 }
 .vel-xl\\:columns-3 { -moz-columns: 3; columns: 3
 }
 .vel-xl\\:columns-4 { -moz-columns: 4; columns: 4
 }
 .vel-xl\\:columns-5 { -moz-columns: 5; columns: 5
 }
 .vel-xl\\:columns-6 { -moz-columns: 6; columns: 6
 }
 .vel-xl\\:columns-auto { -moz-columns: auto; columns: auto
 }
 .vel-xl\\:sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0
 }
 .vel-xl\\:flex-row { flex-direction: row
 }
 .vel-xl\\:flex-row-reverse { flex-direction: row-reverse
 }
 .vel-xl\\:flex-col { flex-direction: column
 }
 .vel-xl\\:flex-col-reverse { flex-direction: column-reverse
 }
 .vel-xl\\:flex-wrap { flex-wrap: wrap
 }
 .vel-xl\\:flex-wrap-reverse { flex-wrap: wrap-reverse
 }
 .vel-xl\\:flex-nowrap { flex-wrap: nowrap
 }
 .vel-xl\\:flex-1 { flex: 1 1 0%
 }
 .vel-xl\\:flex-auto { flex: 1 1 auto
 }
 .vel-xl\\:flex-initial { flex: 0 1 auto
 }
 .vel-xl\\:flex-none { flex: none
 }
 .vel-xl\\:grow { flex-grow: 1
 }
 .vel-xl\\:shrink { flex-shrink: 1
 }
 .vel-xl\\:items-start { align-items: flex-start
 }
 .vel-xl\\:items-end { align-items: flex-end
 }
 .vel-xl\\:items-center { align-items: center
 }
 .vel-xl\\:items-baseline { align-items: baseline
 }
 .vel-xl\\:items-stretch { align-items: stretch
 }
 .vel-xl\\:self-auto { align-self: auto
 }
 .vel-xl\\:self-start { align-self: flex-start
 }
 .vel-xl\\:self-end { align-self: flex-end
 }
 .vel-xl\\:self-center { align-self: center
 }
 .vel-xl\\:self-baseline { align-self: baseline
 }
 .vel-xl\\:self-stretch { align-self: stretch
 }
 .vel-xl\\:justify-start { justify-content: flex-start
 }
 .vel-xl\\:justify-end { justify-content: flex-end
 }
 .vel-xl\\:justify-center { justify-content: center
 }
 .vel-xl\\:justify-between { justify-content: space-between
 }
 .vel-xl\\:justify-around { justify-content: space-around
 }
 .vel-xl\\:justify-evenly { justify-content: space-evenly
 }
 .vel-xl\\:justify-stretch { justify-content: stretch
 }
 .vel-xl\\:justify-items-start { justify-items: start
 }
 .vel-xl\\:justify-items-end { justify-items: end
 }
 .vel-xl\\:justify-items-center { justify-items: center
 }
 .vel-xl\\:justify-items-stretch { justify-items: stretch
 }
 .vel-xl\\:justify-self-auto { justify-self: auto
 }
 .vel-xl\\:justify-self-start { justify-self: start
 }
 .vel-xl\\:justify-self-end { justify-self: end
 }
 .vel-xl\\:justify-self-center { justify-self: center
 }
 .vel-xl\\:justify-self-stretch { justify-self: stretch
 }
 .vel-xl\\:order-first { order: -9999
 }
 .vel-xl\\:order-last { order: 9999
 }
 .vel-xl\\:order-none { order: 0
 }
 .vel-xl\\:order-1 { order: 1
 }
 .vel-xl\\:order-2 { order: 2
 }
 .vel-xl\\:order-3 { order: 3
 }
 .vel-xl\\:order-4 { order: 4
 }
 .vel-xl\\:order-5 { order: 5
 }
 .vel-xl\\:gap-0 { gap: 0px
 }
 .vel-xl\\:gap-1 { gap: var(--vel-space-1)
 }
 .vel-xl\\:gap-2 { gap: var(--vel-space-2)
 }
 .vel-xl\\:gap-3 { gap: var(--vel-space-3)
 }
 .vel-xl\\:gap-4 { gap: var(--vel-space-4)
 }
 .vel-xl\\:gap-5 { gap: var(--vel-space-5)
 }
 .vel-xl\\:gap-6 { gap: var(--vel-space-6)
 }
 .vel-xl\\:gap-7 { gap: var(--vel-space-7)
 }
 .vel-xl\\:gap-8 { gap: var(--vel-space-8)
 }
 .vel-xl\\:gap-10 { gap: var(--vel-space-10)
 }
 .vel-xl\\:gap-12 { gap: var(--vel-space-12)
 }
 .vel-xl\\:gap-16 { gap: var(--vel-space-16)
 }
 .vel-xl\\:gap-px { gap: 1px
 }
 .vel-xl\\:gap-x-0 { -moz-column-gap: 0px; column-gap: 0px
 }
 .vel-xl\\:gap-x-1 { -moz-column-gap: var(--vel-space-1); column-gap: var(--vel-space-1)
 }
 .vel-xl\\:gap-x-2 { -moz-column-gap: var(--vel-space-2); column-gap: var(--vel-space-2)
 }
 .vel-xl\\:gap-x-3 { -moz-column-gap: var(--vel-space-3); column-gap: var(--vel-space-3)
 }
 .vel-xl\\:gap-x-4 { -moz-column-gap: var(--vel-space-4); column-gap: var(--vel-space-4)
 }
 .vel-xl\\:gap-x-5 { -moz-column-gap: var(--vel-space-5); column-gap: var(--vel-space-5)
 }
 .vel-xl\\:gap-x-6 { -moz-column-gap: var(--vel-space-6); column-gap: var(--vel-space-6)
 }
 .vel-xl\\:gap-x-8 { -moz-column-gap: var(--vel-space-8); column-gap: var(--vel-space-8)
 }
 .vel-xl\\:gap-y-0 { row-gap: 0px
 }
 .vel-xl\\:gap-y-1 { row-gap: var(--vel-space-1)
 }
 .vel-xl\\:gap-y-2 { row-gap: var(--vel-space-2)
 }
 .vel-xl\\:gap-y-3 { row-gap: var(--vel-space-3)
 }
 .vel-xl\\:gap-y-4 { row-gap: var(--vel-space-4)
 }
 .vel-xl\\:gap-y-5 { row-gap: var(--vel-space-5)
 }
 .vel-xl\\:gap-y-6 { row-gap: var(--vel-space-6)
 }
 .vel-xl\\:gap-y-8 { row-gap: var(--vel-space-8)
 }
 .vel-xl\\:grid-cols-1 { grid-template-columns: repeat(1, minmax(0, 1fr))
 }
 .vel-xl\\:grid-cols-2 { grid-template-columns: repeat(2, minmax(0, 1fr))
 }
 .vel-xl\\:grid-cols-3 { grid-template-columns: repeat(3, minmax(0, 1fr))
 }
 .vel-xl\\:grid-cols-4 { grid-template-columns: repeat(4, minmax(0, 1fr))
 }
 .vel-xl\\:grid-cols-5 { grid-template-columns: repeat(5, minmax(0, 1fr))
 }
 .vel-xl\\:grid-cols-6 { grid-template-columns: repeat(6, minmax(0, 1fr))
 }
 .vel-xl\\:grid-cols-7 { grid-template-columns: repeat(7, minmax(0, 1fr))
 }
 .vel-xl\\:grid-cols-8 { grid-template-columns: repeat(8, minmax(0, 1fr))
 }
 .vel-xl\\:grid-cols-9 { grid-template-columns: repeat(9, minmax(0, 1fr))
 }
 .vel-xl\\:grid-cols-10 { grid-template-columns: repeat(10, minmax(0, 1fr))
 }
 .vel-xl\\:grid-cols-11 { grid-template-columns: repeat(11, minmax(0, 1fr))
 }
 .vel-xl\\:grid-cols-12 { grid-template-columns: repeat(12, minmax(0, 1fr))
 }
 .vel-xl\\:grid-cols-none { grid-template-columns: none
 }
 .vel-xl\\:col-auto { grid-column: auto
 }
 .vel-xl\\:col-span-1 { grid-column: span 1 / span 1
 }
 .vel-xl\\:col-span-2 { grid-column: span 2 / span 2
 }
 .vel-xl\\:col-span-3 { grid-column: span 3 / span 3
 }
 .vel-xl\\:col-span-4 { grid-column: span 4 / span 4
 }
 .vel-xl\\:col-span-5 { grid-column: span 5 / span 5
 }
 .vel-xl\\:col-span-6 { grid-column: span 6 / span 6
 }
 .vel-xl\\:col-span-7 { grid-column: span 7 / span 7
 }
 .vel-xl\\:col-span-8 { grid-column: span 8 / span 8
 }
 .vel-xl\\:col-span-9 { grid-column: span 9 / span 9
 }
 .vel-xl\\:col-span-10 { grid-column: span 10 / span 10
 }
 .vel-xl\\:col-span-11 { grid-column: span 11 / span 11
 }
 .vel-xl\\:col-span-12 { grid-column: span 12 / span 12
 }
 .vel-xl\\:col-span-full { grid-column: 1 / -1
 }
 .vel-xl\\:col-start-1 { grid-column-start: 1
 }
 .vel-xl\\:col-start-2 { grid-column-start: 2
 }
 .vel-xl\\:col-start-3 { grid-column-start: 3
 }
 .vel-xl\\:col-start-4 { grid-column-start: 4
 }
 .vel-xl\\:col-start-auto { grid-column-start: auto
 }
 .vel-xl\\:col-end-1 { grid-column-end: 1
 }
 .vel-xl\\:col-end-2 { grid-column-end: 2
 }
 .vel-xl\\:col-end-3 { grid-column-end: 3
 }
 .vel-xl\\:col-end-4 { grid-column-end: 4
 }
 .vel-xl\\:col-end-auto { grid-column-end: auto
 }
 .vel-xl\\:grid-rows-1 { grid-template-rows: repeat(1, minmax(0, 1fr))
 }
 .vel-xl\\:grid-rows-2 { grid-template-rows: repeat(2, minmax(0, 1fr))
 }
 .vel-xl\\:grid-rows-3 { grid-template-rows: repeat(3, minmax(0, 1fr))
 }
 .vel-xl\\:grid-rows-4 { grid-template-rows: repeat(4, minmax(0, 1fr))
 }
 .vel-xl\\:grid-rows-5 { grid-template-rows: repeat(5, minmax(0, 1fr))
 }
 .vel-xl\\:grid-rows-6 { grid-template-rows: repeat(6, minmax(0, 1fr))
 }
 .vel-xl\\:grid-rows-none { grid-template-rows: none
 }
 .vel-xl\\:row-auto { grid-row: auto
 }
 .vel-xl\\:row-span-1 { grid-row: span 1 / span 1
 }
 .vel-xl\\:row-span-2 { grid-row: span 2 / span 2
 }
 .vel-xl\\:row-span-3 { grid-row: span 3 / span 3
 }
 .vel-xl\\:row-span-4 { grid-row: span 4 / span 4
 }
 .vel-xl\\:row-span-5 { grid-row: span 5 / span 5
 }
 .vel-xl\\:row-span-6 { grid-row: span 6 / span 6
 }
 .vel-xl\\:row-span-full { grid-row: 1 / -1
 }
 .vel-xl\\:row-start-1 { grid-row-start: 1
 }
 .vel-xl\\:row-start-2 { grid-row-start: 2
 }
 .vel-xl\\:row-start-3 { grid-row-start: 3
 }
 .vel-xl\\:row-start-auto { grid-row-start: auto
 }
 .vel-xl\\:row-end-1 { grid-row-end: 1
 }
 .vel-xl\\:row-end-2 { grid-row-end: 2
 }
 .vel-xl\\:row-end-3 { grid-row-end: 3
 }
 .vel-xl\\:row-end-auto { grid-row-end: auto
 }
 .vel-xl\\:grid-flow-row { grid-auto-flow: row
 }
 .vel-xl\\:grid-flow-col { grid-auto-flow: column
 }
 .vel-xl\\:grid-flow-dense { grid-auto-flow: dense
 }
 .vel-xl\\:grid-flow-row-dense { grid-auto-flow: row dense
 }
 .vel-xl\\:grid-flow-col-dense { grid-auto-flow: column dense
 }
 .vel-xl\\:p-0 { padding: 0px
 }
 .vel-xl\\:p-px { padding: 1px
 }
 .vel-xl\\:p-1 { padding: var(--vel-space-1)
 }
 .vel-xl\\:p-2 { padding: var(--vel-space-2)
 }
 .vel-xl\\:p-3 { padding: var(--vel-space-3)
 }
 .vel-xl\\:p-4 { padding: var(--vel-space-4)
 }
 .vel-xl\\:p-5 { padding: var(--vel-space-5)
 }
 .vel-xl\\:p-6 { padding: var(--vel-space-6)
 }
 .vel-xl\\:p-7 { padding: var(--vel-space-7)
 }
 .vel-xl\\:p-8 { padding: var(--vel-space-8)
 }
 .vel-xl\\:p-9 { padding: var(--vel-space-9)
 }
 .vel-xl\\:p-10 { padding: var(--vel-space-10)
 }
 .vel-xl\\:p-11 { padding: var(--vel-space-11)
 }
 .vel-xl\\:p-12 { padding: var(--vel-space-12)
 }
 .vel-xl\\:p-14 { padding: var(--vel-space-14)
 }
 .vel-xl\\:p-16 { padding: var(--vel-space-16)
 }
 .vel-xl\\:p-20 { padding: var(--vel-space-20)
 }
 .vel-xl\\:p-24 { padding: var(--vel-space-24)
 }
 .vel-xl\\:p-28 { padding: var(--vel-space-28)
 }
 .vel-xl\\:p-32 { padding: var(--vel-space-32)
 }
 .vel-xl\\:pt-0 { padding-top: 0px
 }
 .vel-xl\\:pt-1 { padding-top: var(--vel-space-1)
 }
 .vel-xl\\:pt-2 { padding-top: var(--vel-space-2)
 }
 .vel-xl\\:pt-3 { padding-top: var(--vel-space-3)
 }
 .vel-xl\\:pt-4 { padding-top: var(--vel-space-4)
 }
 .vel-xl\\:pt-5 { padding-top: var(--vel-space-5)
 }
 .vel-xl\\:pt-6 { padding-top: var(--vel-space-6)
 }
 .vel-xl\\:pt-8 { padding-top: var(--vel-space-8)
 }
 .vel-xl\\:pt-10 { padding-top: var(--vel-space-10)
 }
 .vel-xl\\:pt-12 { padding-top: var(--vel-space-12)
 }
 .vel-xl\\:pt-16 { padding-top: var(--vel-space-16)
 }
 .vel-xl\\:pr-0 { padding-right: 0px
 }
 .vel-xl\\:pr-1 { padding-right: var(--vel-space-1)
 }
 .vel-xl\\:pr-2 { padding-right: var(--vel-space-2)
 }
 .vel-xl\\:pr-3 { padding-right: var(--vel-space-3)
 }
 .vel-xl\\:pr-4 { padding-right: var(--vel-space-4)
 }
 .vel-xl\\:pr-5 { padding-right: var(--vel-space-5)
 }
 .vel-xl\\:pr-6 { padding-right: var(--vel-space-6)
 }
 .vel-xl\\:pr-8 { padding-right: var(--vel-space-8)
 }
 .vel-xl\\:pr-12 { padding-right: var(--vel-space-12)
 }
 .vel-xl\\:pb-0 { padding-bottom: 0px
 }
 .vel-xl\\:pb-1 { padding-bottom: var(--vel-space-1)
 }
 .vel-xl\\:pb-2 { padding-bottom: var(--vel-space-2)
 }
 .vel-xl\\:pb-3 { padding-bottom: var(--vel-space-3)
 }
 .vel-xl\\:pb-4 { padding-bottom: var(--vel-space-4)
 }
 .vel-xl\\:pb-5 { padding-bottom: var(--vel-space-5)
 }
 .vel-xl\\:pb-6 { padding-bottom: var(--vel-space-6)
 }
 .vel-xl\\:pb-8 { padding-bottom: var(--vel-space-8)
 }
 .vel-xl\\:pb-12 { padding-bottom: var(--vel-space-12)
 }
 .vel-xl\\:pl-0 { padding-left: 0px
 }
 .vel-xl\\:pl-1 { padding-left: var(--vel-space-1)
 }
 .vel-xl\\:pl-2 { padding-left: var(--vel-space-2)
 }
 .vel-xl\\:pl-3 { padding-left: var(--vel-space-3)
 }
 .vel-xl\\:pl-4 { padding-left: var(--vel-space-4)
 }
 .vel-xl\\:pl-5 { padding-left: var(--vel-space-5)
 }
 .vel-xl\\:pl-6 { padding-left: var(--vel-space-6)
 }
 .vel-xl\\:pl-8 { padding-left: var(--vel-space-8)
 }
 .vel-xl\\:pl-12 { padding-left: var(--vel-space-12)
 }
 .vel-xl\\:m-0 { margin: 0px
 }
 .vel-xl\\:m-px { margin: 1px
 }
 .vel-xl\\:m-auto { margin: auto
 }
 .vel-xl\\:m-1 { margin: var(--vel-space-1)
 }
 .vel-xl\\:m-2 { margin: var(--vel-space-2)
 }
 .vel-xl\\:m-3 { margin: var(--vel-space-3)
 }
 .vel-xl\\:m-4 { margin: var(--vel-space-4)
 }
 .vel-xl\\:m-5 { margin: var(--vel-space-5)
 }
 .vel-xl\\:m-6 { margin: var(--vel-space-6)
 }
 .vel-xl\\:m-7 { margin: var(--vel-space-7)
 }
 .vel-xl\\:m-8 { margin: var(--vel-space-8)
 }
 .vel-xl\\:m-10 { margin: var(--vel-space-10)
 }
 .vel-xl\\:m-12 { margin: var(--vel-space-12)
 }
 .vel-xl\\:m-16 { margin: var(--vel-space-16)
 }
 .vel-xl\\:mt-0 { margin-top: 0px
 }
 .vel-xl\\:mt-auto { margin-top: auto
 }
 .vel-xl\\:mt-1 { margin-top: var(--vel-space-1)
 }
 .vel-xl\\:mt-2 { margin-top: var(--vel-space-2)
 }
 .vel-xl\\:mt-3 { margin-top: var(--vel-space-3)
 }
 .vel-xl\\:mt-4 { margin-top: var(--vel-space-4)
 }
 .vel-xl\\:mt-5 { margin-top: var(--vel-space-5)
 }
 .vel-xl\\:mt-6 { margin-top: var(--vel-space-6)
 }
 .vel-xl\\:mt-8 { margin-top: var(--vel-space-8)
 }
 .vel-xl\\:mt-10 { margin-top: var(--vel-space-10)
 }
 .vel-xl\\:mt-12 { margin-top: var(--vel-space-12)
 }
 .vel-xl\\:mt-16 { margin-top: var(--vel-space-16)
 }
 .vel-xl\\:mr-0 { margin-right: 0px
 }
 .vel-xl\\:mr-auto { margin-right: auto
 }
 .vel-xl\\:mr-1 { margin-right: var(--vel-space-1)
 }
 .vel-xl\\:mr-2 { margin-right: var(--vel-space-2)
 }
 .vel-xl\\:mr-3 { margin-right: var(--vel-space-3)
 }
 .vel-xl\\:mr-4 { margin-right: var(--vel-space-4)
 }
 .vel-xl\\:mr-6 { margin-right: var(--vel-space-6)
 }
 .vel-xl\\:mr-8 { margin-right: var(--vel-space-8)
 }
 .vel-xl\\:mb-0 { margin-bottom: 0px
 }
 .vel-xl\\:mb-auto { margin-bottom: auto
 }
 .vel-xl\\:mb-1 { margin-bottom: var(--vel-space-1)
 }
 .vel-xl\\:mb-2 { margin-bottom: var(--vel-space-2)
 }
 .vel-xl\\:mb-3 { margin-bottom: var(--vel-space-3)
 }
 .vel-xl\\:mb-4 { margin-bottom: var(--vel-space-4)
 }
 .vel-xl\\:mb-5 { margin-bottom: var(--vel-space-5)
 }
 .vel-xl\\:mb-6 { margin-bottom: var(--vel-space-6)
 }
 .vel-xl\\:mb-8 { margin-bottom: var(--vel-space-8)
 }
 .vel-xl\\:mb-10 { margin-bottom: var(--vel-space-10)
 }
 .vel-xl\\:mb-12 { margin-bottom: var(--vel-space-12)
 }
 .vel-xl\\:mb-16 { margin-bottom: var(--vel-space-16)
 }
 .vel-xl\\:ml-0 { margin-left: 0px
 }
 .vel-xl\\:ml-auto { margin-left: auto
 }
 .vel-xl\\:ml-1 { margin-left: var(--vel-space-1)
 }
 .vel-xl\\:ml-2 { margin-left: var(--vel-space-2)
 }
 .vel-xl\\:ml-3 { margin-left: var(--vel-space-3)
 }
 .vel-xl\\:ml-4 { margin-left: var(--vel-space-4)
 }
 .vel-xl\\:ml-6 { margin-left: var(--vel-space-6)
 }
 .vel-xl\\:ml-8 { margin-left: var(--vel-space-8)
 }
 .vel-xl\\:w-0 { width: 0px
 }
 .vel-xl\\:w-px { width: 1px
 }
 .vel-xl\\:w-auto { width: auto
 }
 .vel-xl\\:w-full { width: 100%
 }
 .vel-xl\\:w-screen { width: 100vw
 }
 .vel-xl\\:w-svw { width: 100svw
 }
 .vel-xl\\:w-dvw { width: 100dvw
 }
 .vel-xl\\:w-min { width: -moz-min-content; width: min-content
 }
 .vel-xl\\:w-max { width: -moz-max-content; width: max-content
 }
 .vel-xl\\:w-fit { width: -moz-fit-content; width: fit-content
 }
 .vel-xl\\:w-1 { width: var(--vel-space-1)
 }
 .vel-xl\\:w-2 { width: var(--vel-space-2)
 }
 .vel-xl\\:w-3 { width: var(--vel-space-3)
 }
 .vel-xl\\:w-4 { width: var(--vel-space-4)
 }
 .vel-xl\\:w-5 { width: var(--vel-space-5)
 }
 .vel-xl\\:w-6 { width: var(--vel-space-6)
 }
 .vel-xl\\:w-7 { width: var(--vel-space-7)
 }
 .vel-xl\\:w-8 { width: var(--vel-space-8)
 }
 .vel-xl\\:w-9 { width: var(--vel-space-9)
 }
 .vel-xl\\:w-10 { width: var(--vel-space-10)
 }
 .vel-xl\\:w-11 { width: var(--vel-space-11)
 }
 .vel-xl\\:w-12 { width: var(--vel-space-12)
 }
 .vel-xl\\:w-14 { width: var(--vel-space-14)
 }
 .vel-xl\\:w-16 { width: var(--vel-space-16)
 }
 .vel-xl\\:w-20 { width: var(--vel-space-20)
 }
 .vel-xl\\:w-24 { width: var(--vel-space-24)
 }
 .vel-xl\\:w-28 { width: var(--vel-space-28)
 }
 .vel-xl\\:w-32 { width: var(--vel-space-32)
 }
 .vel-xl\\:w-36 { width: var(--vel-space-36)
 }
 .vel-xl\\:w-40 { width: var(--vel-space-40)
 }
 .vel-xl\\:w-48 { width: var(--vel-space-48)
 }
 .vel-xl\\:w-56 { width: var(--vel-space-56)
 }
 .vel-xl\\:w-64 { width: var(--vel-space-64)
 }
 .vel-xl\\:w-72 { width: var(--vel-space-72)
 }
 .vel-xl\\:w-80 { width: var(--vel-space-80)
 }
 .vel-xl\\:w-96 { width: var(--vel-space-96)
 }
 .vel-xl\\:min-w-0 { min-width: 0px
 }
 .vel-xl\\:min-w-full { min-width: 100%
 }
 .vel-xl\\:min-w-min { min-width: -moz-min-content; min-width: min-content
 }
 .vel-xl\\:min-w-max { min-width: -moz-max-content; min-width: max-content
 }
 .vel-xl\\:min-w-fit { min-width: -moz-fit-content; min-width: fit-content
 }
 .vel-xl\\:max-w-none { max-width: none
 }
 .vel-xl\\:max-w-xs { max-width: 20rem
 }
 .vel-xl\\:max-w-sm { max-width: 24rem
 }
 .vel-xl\\:max-w-md { max-width: 28rem
 }
 .vel-xl\\:max-w-lg { max-width: 32rem
 }
 .vel-xl\\:max-w-xl { max-width: 36rem
 }
 .vel-xl\\:max-w-2xl { max-width: 42rem
 }
 .vel-xl\\:max-w-3xl { max-width: 48rem
 }
 .vel-xl\\:max-w-4xl { max-width: 56rem
 }
 .vel-xl\\:max-w-5xl { max-width: 64rem
 }
 .vel-xl\\:max-w-6xl { max-width: 72rem
 }
 .vel-xl\\:max-w-7xl { max-width: 80rem
 }
 .vel-xl\\:max-w-full { max-width: 100%
 }
 .vel-xl\\:max-w-min { max-width: -moz-min-content; max-width: min-content
 }
 .vel-xl\\:max-w-max { max-width: -moz-max-content; max-width: max-content
 }
 .vel-xl\\:max-w-fit { max-width: -moz-fit-content; max-width: fit-content
 }
 .vel-xl\\:max-w-prose { max-width: 65ch
 }
 .vel-xl\\:max-w-screen-sm { max-width: 640px
 }
 .vel-xl\\:max-w-screen-md { max-width: 768px
 }
 .vel-xl\\:max-w-screen-lg { max-width: 1024px
 }
 .vel-xl\\:max-w-screen-xl { max-width: 1280px
 }
 .vel-xl\\:max-w-screen-2xl { max-width: 1536px
 }
 .vel-xl\\:h-0 { height: 0px
 }
 .vel-xl\\:h-px { height: 1px
 }
 .vel-xl\\:h-auto { height: auto
 }
 .vel-xl\\:h-full { height: 100%
 }
 .vel-xl\\:h-screen { height: 100vh
 }
 .vel-xl\\:h-svh { height: 100svh
 }
 .vel-xl\\:h-dvh { height: 100dvh
 }
 .vel-xl\\:h-min { height: -moz-min-content; height: min-content
 }
 .vel-xl\\:h-max { height: -moz-max-content; height: max-content
 }
 .vel-xl\\:h-fit { height: -moz-fit-content; height: fit-content
 }
 .vel-xl\\:h-1 { height: var(--vel-space-1)
 }
 .vel-xl\\:h-2 { height: var(--vel-space-2)
 }
 .vel-xl\\:h-3 { height: var(--vel-space-3)
 }
 .vel-xl\\:h-4 { height: var(--vel-space-4)
 }
 .vel-xl\\:h-5 { height: var(--vel-space-5)
 }
 .vel-xl\\:h-6 { height: var(--vel-space-6)
 }
 .vel-xl\\:h-7 { height: var(--vel-space-7)
 }
 .vel-xl\\:h-8 { height: var(--vel-space-8)
 }
 .vel-xl\\:h-9 { height: var(--vel-space-9)
 }
 .vel-xl\\:h-10 { height: var(--vel-space-10)
 }
 .vel-xl\\:h-11 { height: var(--vel-space-11)
 }
 .vel-xl\\:h-12 { height: var(--vel-space-12)
 }
 .vel-xl\\:h-14 { height: var(--vel-space-14)
 }
 .vel-xl\\:h-16 { height: var(--vel-space-16)
 }
 .vel-xl\\:h-20 { height: var(--vel-space-20)
 }
 .vel-xl\\:h-24 { height: var(--vel-space-24)
 }
 .vel-xl\\:h-28 { height: var(--vel-space-28)
 }
 .vel-xl\\:h-32 { height: var(--vel-space-32)
 }
 .vel-xl\\:h-36 { height: var(--vel-space-36)
 }
 .vel-xl\\:h-40 { height: var(--vel-space-40)
 }
 .vel-xl\\:h-48 { height: var(--vel-space-48)
 }
 .vel-xl\\:h-56 { height: var(--vel-space-56)
 }
 .vel-xl\\:h-64 { height: var(--vel-space-64)
 }
 .vel-xl\\:min-h-0 { min-height: 0px
 }
 .vel-xl\\:min-h-full { min-height: 100%
 }
 .vel-xl\\:min-h-screen { min-height: 100vh
 }
 .vel-xl\\:min-h-svh { min-height: 100svh
 }
 .vel-xl\\:min-h-dvh { min-height: 100dvh
 }
 .vel-xl\\:min-h-min { min-height: -moz-min-content; min-height: min-content
 }
 .vel-xl\\:min-h-max { min-height: -moz-max-content; min-height: max-content
 }
 .vel-xl\\:min-h-fit { min-height: -moz-fit-content; min-height: fit-content
 }
 .vel-xl\\:max-h-none { max-height: none
 }
 .vel-xl\\:max-h-full { max-height: 100%
 }
 .vel-xl\\:max-h-screen { max-height: 100vh
 }
 .vel-xl\\:max-h-svh { max-height: 100svh
 }
 .vel-xl\\:max-h-dvh { max-height: 100dvh
 }
 .vel-xl\\:max-h-min { max-height: -moz-min-content; max-height: min-content
 }
 .vel-xl\\:max-h-max { max-height: -moz-max-content; max-height: max-content
 }
 .vel-xl\\:max-h-fit { max-height: -moz-fit-content; max-height: fit-content
 }
 .vel-xl\\:max-h-24 { max-height: var(--vel-space-24)
 }
 .vel-xl\\:max-h-48 { max-height: var(--vel-space-48)
 }
 .vel-xl\\:max-h-64 { max-height: var(--vel-space-64)
 }
 .vel-xl\\:max-h-96 { max-height: var(--vel-space-96)
 }
 .vel-xl\\:font-sans { font-family: var(--vel-font-sans)
 }
 .vel-xl\\:font-serif { font-family: var(--vel-font-serif)
 }
 .vel-xl\\:font-mono { font-family: var(--vel-font-mono)
 }
 .vel-xl\\:text-xs { font-size: var(--vel-text-xs); line-height: 1rem
 }
 .vel-xl\\:text-sm { font-size: var(--vel-text-sm); line-height: 1.25rem
 }
 .vel-xl\\:text-base { font-size: var(--vel-text-base); line-height: 1.5rem
 }
 .vel-xl\\:text-lg { font-size: var(--vel-text-lg); line-height: 1.75rem
 }
 .vel-xl\\:text-xl { font-size: var(--vel-text-xl); line-height: 1.75rem
 }
 .vel-xl\\:text-2xl { font-size: var(--vel-text-2xl); line-height: 2rem
 }
 .vel-xl\\:text-3xl { font-size: var(--vel-text-3xl); line-height: 2.25rem
 }
 .vel-xl\\:text-4xl { font-size: var(--vel-text-4xl); line-height: 2.5rem
 }
 .vel-xl\\:text-5xl { font-size: var(--vel-text-5xl); line-height: 1
 }
 .vel-xl\\:text-6xl { font-size: var(--vel-text-6xl); line-height: 1
 }
 .vel-xl\\:text-7xl { font-size: var(--vel-text-7xl); line-height: 1
 }
 .vel-xl\\:text-8xl { font-size: var(--vel-text-8xl); line-height: 1
 }
 .vel-xl\\:text-9xl { font-size: var(--vel-text-9xl); line-height: 1
 }
 .vel-xl\\:font-thin { font-weight: 100
 }
 .vel-xl\\:font-extralight { font-weight: 200
 }
 .vel-xl\\:font-light { font-weight: 300
 }
 .vel-xl\\:font-normal { font-weight: 400
 }
 .vel-xl\\:font-medium { font-weight: 500
 }
 .vel-xl\\:font-semibold { font-weight: 600
 }
 .vel-xl\\:font-bold { font-weight: 700
 }
 .vel-xl\\:font-extrabold { font-weight: 800
 }
 .vel-xl\\:font-black { font-weight: 900
 }
 .vel-xl\\:italic { font-style: italic
 }
 .vel-xl\\:not-italic { font-style: normal
 }
 .vel-xl\\:leading-none { line-height: 1
 }
 .vel-xl\\:leading-tight { line-height: 1.25
 }
 .vel-xl\\:leading-snug { line-height: 1.375
 }
 .vel-xl\\:leading-normal { line-height: 1.5
 }
 .vel-xl\\:leading-relaxed { line-height: 1.625
 }
 .vel-xl\\:leading-loose { line-height: 2
 }
 .vel-xl\\:leading-3 { line-height: 0.75rem
 }
 .vel-xl\\:leading-4 { line-height: 1rem
 }
 .vel-xl\\:leading-5 { line-height: 1.25rem
 }
 .vel-xl\\:leading-6 { line-height: 1.5rem
 }
 .vel-xl\\:leading-7 { line-height: 1.75rem
 }
 .vel-xl\\:leading-8 { line-height: 2rem
 }
 .vel-xl\\:leading-9 { line-height: 2.25rem
 }
 .vel-xl\\:leading-10 { line-height: 2.5rem
 }
 .vel-xl\\:tracking-tighter { letter-spacing: -0.05em
 }
 .vel-xl\\:tracking-tight { letter-spacing: -0.025em
 }
 .vel-xl\\:tracking-normal { letter-spacing: 0em
 }
 .vel-xl\\:tracking-wide { letter-spacing: 0.025em
 }
 .vel-xl\\:tracking-wider { letter-spacing: 0.05em
 }
 .vel-xl\\:tracking-widest { letter-spacing: 0.1em
 }
 .vel-xl\\:text-left { text-align: left
 }
 .vel-xl\\:text-center { text-align: center
 }
 .vel-xl\\:text-right { text-align: right
 }
 .vel-xl\\:text-justify { text-align: justify
 }
 .vel-xl\\:text-start { text-align: start
 }
 .vel-xl\\:text-end { text-align: end
 }
 .vel-xl\\:underline { text-decoration-line: underline
 }
 .vel-xl\\:line-through { text-decoration-line: line-through
 }
 .vel-xl\\:no-underline { text-decoration-line: none
 }
 .vel-xl\\:uppercase { text-transform: uppercase
 }
 .vel-xl\\:lowercase { text-transform: lowercase
 }
 .vel-xl\\:capitalize { text-transform: capitalize
 }
 .vel-xl\\:normal-case { text-transform: none
 }
 .vel-xl\\:truncate { overflow: hidden; text-overflow: ellipsis; white-space: nowrap
 }
 .vel-xl\\:text-ellipsis { text-overflow: ellipsis
 }
 .vel-xl\\:text-clip { text-overflow: clip
 }
 .vel-xl\\:whitespace-normal { white-space: normal
 }
 .vel-xl\\:whitespace-nowrap { white-space: nowrap
 }
 .vel-xl\\:whitespace-pre { white-space: pre
 }
 .vel-xl\\:whitespace-pre-line { white-space: pre-line
 }
 .vel-xl\\:whitespace-pre-wrap { white-space: pre-wrap
 }
 .vel-xl\\:whitespace-break-spaces { white-space: break-spaces
 }
 .vel-xl\\:text-inherit { color: inherit
 }
 .vel-xl\\:text-current { color: currentColor
 }
 .vel-xl\\:text-transparent { color: transparent
 }
 .vel-xl\\:text-white { color: #ffffff
 }
 .vel-xl\\:text-black { color: #000000
 }
 .vel-xl\\:text-primary { color: var(--vel-color-primary)
 }
 .vel-xl\\:text-secondary { color: var(--vel-color-secondary)
 }
 .vel-xl\\:text-success { color: var(--vel-color-success)
 }
 .vel-xl\\:text-danger { color: var(--vel-color-danger)
 }
 .vel-xl\\:text-warning { color: var(--vel-color-warning)
 }
 .vel-xl\\:text-info { color: var(--vel-color-info)
 }
 .vel-xl\\:text-neutral-50 { color: var(--vel-neutral-50)
 }
 .vel-xl\\:text-neutral-100 { color: var(--vel-neutral-100)
 }
 .vel-xl\\:text-neutral-200 { color: var(--vel-neutral-200)
 }
 .vel-xl\\:text-neutral-300 { color: var(--vel-neutral-300)
 }
 .vel-xl\\:text-neutral-400 { color: var(--vel-neutral-400)
 }
 .vel-xl\\:text-neutral-500 { color: var(--vel-neutral-500)
 }
 .vel-xl\\:text-neutral-600 { color: var(--vel-neutral-600)
 }
 .vel-xl\\:text-neutral-700 { color: var(--vel-neutral-700)
 }
 .vel-xl\\:text-neutral-800 { color: var(--vel-neutral-800)
 }
 .vel-xl\\:text-neutral-900 { color: var(--vel-neutral-900)
 }
 .vel-xl\\:text-neutral-950 { color: var(--vel-neutral-950)
 }
 .vel-xl\\:text-primary-50 { color: var(--vel-primary-50)
 }
 .vel-xl\\:text-primary-100 { color: var(--vel-primary-100)
 }
 .vel-xl\\:text-primary-200 { color: var(--vel-primary-200)
 }
 .vel-xl\\:text-primary-300 { color: var(--vel-primary-300)
 }
 .vel-xl\\:text-primary-400 { color: var(--vel-primary-400)
 }
 .vel-xl\\:text-primary-500 { color: var(--vel-primary-500)
 }
 .vel-xl\\:text-primary-600 { color: var(--vel-primary-600)
 }
 .vel-xl\\:text-primary-700 { color: var(--vel-primary-700)
 }
 .vel-xl\\:text-primary-800 { color: var(--vel-primary-800)
 }
 .vel-xl\\:text-primary-900 { color: var(--vel-primary-900)
 }
 .vel-xl\\:text-primary-950 { color: var(--vel-primary-950)
 }
 .vel-xl\\:text-success-50 { color: var(--vel-success-50)
 }
 .vel-xl\\:text-success-100 { color: var(--vel-success-100)
 }
 .vel-xl\\:text-success-200 { color: var(--vel-success-200)
 }
 .vel-xl\\:text-success-300 { color: var(--vel-success-300)
 }
 .vel-xl\\:text-success-400 { color: var(--vel-success-400)
 }
 .vel-xl\\:text-success-500 { color: var(--vel-success-500)
 }
 .vel-xl\\:text-success-600 { color: var(--vel-success-600)
 }
 .vel-xl\\:text-success-700 { color: var(--vel-success-700)
 }
 .vel-xl\\:text-danger-50 { color: var(--vel-danger-50)
 }
 .vel-xl\\:text-danger-100 { color: var(--vel-danger-100)
 }
 .vel-xl\\:text-danger-300 { color: var(--vel-danger-300)
 }
 .vel-xl\\:text-danger-400 { color: var(--vel-danger-400)
 }
 .vel-xl\\:text-danger-500 { color: var(--vel-danger-500)
 }
 .vel-xl\\:text-danger-600 { color: var(--vel-danger-600)
 }
 .vel-xl\\:text-danger-700 { color: var(--vel-danger-700)
 }
 .vel-xl\\:text-warning-300 { color: var(--vel-warning-300)
 }
 .vel-xl\\:text-warning-400 { color: var(--vel-warning-400)
 }
 .vel-xl\\:text-warning-500 { color: var(--vel-warning-500)
 }
 .vel-xl\\:text-warning-600 { color: var(--vel-warning-600)
 }
 .vel-xl\\:text-info-300 { color: var(--vel-info-300)
 }
 .vel-xl\\:text-info-400 { color: var(--vel-info-400)
 }
 .vel-xl\\:text-info-500 { color: var(--vel-info-500)
 }
 .vel-xl\\:text-info-600 { color: var(--vel-info-600)
 }
 .vel-xl\\:text-body { color: var(--vel-color-text)
 }
 .vel-xl\\:text-muted { color: var(--vel-color-muted)
 }
 .vel-xl\\:text-gradient-primary {
  background: var(--vel-gradient-primary);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  color: transparent
 }
 .vel-xl\\:text-gradient-aurora {
  background: var(--vel-gradient-aurora);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  color: transparent
 }
 .vel-xl\\:text-gradient-sunset {
  background: var(--vel-gradient-sunset);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  color: transparent
 }
 .vel-xl\\:text-gradient-ocean {
  background: var(--vel-gradient-ocean);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  color: transparent
 }
 .vel-xl\\:text-gradient-cosmos {
  background: var(--vel-gradient-cosmos);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  color: transparent
 }
 .vel-xl\\:table {
  width: 100%;
  border-collapse: collapse;
  font-size: var(--vel-text-sm);
  color: var(--vel-color-text)
 }
}
@media (min-width: 1536px) {
 .vel-2xl\\:block { display: block
 }
 .vel-2xl\\:inline-block { display: inline-block
 }
 .vel-2xl\\:inline { display: inline
 }
 .vel-2xl\\:flex { display: flex
 }
 .vel-2xl\\:inline-flex { display: inline-flex
 }
 .vel-2xl\\:grid { display: grid
 }
 .vel-2xl\\:inline-grid { display: inline-grid
 }
 .vel-2xl\\:hidden { display: none
 }
 .vel-2xl\\:table { display: table
 }
 .vel-2xl\\:table-row { display: table-row
 }
 .vel-2xl\\:table-cell { display: table-cell
 }
 .vel-2xl\\:contents { display: contents
 }
 .vel-2xl\\:static { position: static
 }
 .vel-2xl\\:relative { position: relative
 }
 .vel-2xl\\:absolute { position: absolute
 }
 .vel-2xl\\:fixed { position: fixed
 }
 .vel-2xl\\:sticky { position: sticky
 }
 .vel-2xl\\:overflow-auto { overflow: auto
 }
 .vel-2xl\\:overflow-hidden { overflow: hidden
 }
 .vel-2xl\\:overflow-visible { overflow: visible
 }
 .vel-2xl\\:overflow-scroll { overflow: scroll
 }
 .vel-2xl\\:overflow-x-auto { overflow-x: auto
 }
 .vel-2xl\\:overflow-x-hidden { overflow-x: hidden
 }
 .vel-2xl\\:overflow-y-auto { overflow-y: auto
 }
 .vel-2xl\\:overflow-y-hidden { overflow-y: hidden
 }
 .vel-2xl\\:overflow-y-scroll { overflow-y: scroll
 }
 .vel-2xl\\:overscroll-auto { overscroll-behavior: auto
 }
 .vel-2xl\\:overscroll-contain { overscroll-behavior: contain
 }
 .vel-2xl\\:overscroll-none { overscroll-behavior: none
 }
 .vel-2xl\\:visible { visibility: visible
 }
 .vel-2xl\\:invisible { visibility: hidden
 }
 .vel-2xl\\:collapse { visibility: collapse
 }
 .vel-2xl\\:z-0 { z-index: var(--vel-z-0)
 }
 .vel-2xl\\:z-10 { z-index: var(--vel-z-10)
 }
 .vel-2xl\\:z-20 { z-index: var(--vel-z-20)
 }
 .vel-2xl\\:z-30 { z-index: var(--vel-z-30)
 }
 .vel-2xl\\:z-40 { z-index: var(--vel-z-40)
 }
 .vel-2xl\\:z-50 { z-index: var(--vel-z-50)
 }
 .vel-2xl\\:z-auto { z-index: var(--vel-z-auto)
 }
 .vel-2xl\\:float-left { float: left
 }
 .vel-2xl\\:float-right { float: right
 }
 .vel-2xl\\:float-none { float: none
 }
 .vel-2xl\\:clear-left { clear: left
 }
 .vel-2xl\\:clear-right { clear: right
 }
 .vel-2xl\\:clear-both { clear: both
 }
 .vel-2xl\\:clear-none { clear: none
 }
 .vel-2xl\\:object-contain { -o-object-fit: contain; object-fit: contain
 }
 .vel-2xl\\:object-cover { -o-object-fit: cover; object-fit: cover
 }
 .vel-2xl\\:object-fill { -o-object-fit: fill; object-fit: fill
 }
 .vel-2xl\\:object-none { -o-object-fit: none; object-fit: none
 }
 .vel-2xl\\:object-scale-down { -o-object-fit: scale-down; object-fit: scale-down
 }
 .vel-2xl\\:aspect-auto { aspect-ratio: auto
 }
 .vel-2xl\\:aspect-square { aspect-ratio: 1 / 1
 }
 .vel-2xl\\:aspect-video { aspect-ratio: 16 / 9
 }
 .vel-2xl\\:columns-1 { -moz-columns: 1; columns: 1
 }
 .vel-2xl\\:columns-2 { -moz-columns: 2; columns: 2
 }
 .vel-2xl\\:columns-3 { -moz-columns: 3; columns: 3
 }
 .vel-2xl\\:columns-4 { -moz-columns: 4; columns: 4
 }
 .vel-2xl\\:columns-5 { -moz-columns: 5; columns: 5
 }
 .vel-2xl\\:columns-6 { -moz-columns: 6; columns: 6
 }
 .vel-2xl\\:columns-auto { -moz-columns: auto; columns: auto
 }
 .vel-2xl\\:sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0
 }
 .vel-2xl\\:flex-row { flex-direction: row
 }
 .vel-2xl\\:flex-row-reverse { flex-direction: row-reverse
 }
 .vel-2xl\\:flex-col { flex-direction: column
 }
 .vel-2xl\\:flex-col-reverse { flex-direction: column-reverse
 }
 .vel-2xl\\:flex-wrap { flex-wrap: wrap
 }
 .vel-2xl\\:flex-wrap-reverse { flex-wrap: wrap-reverse
 }
 .vel-2xl\\:flex-nowrap { flex-wrap: nowrap
 }
 .vel-2xl\\:flex-1 { flex: 1 1 0%
 }
 .vel-2xl\\:flex-auto { flex: 1 1 auto
 }
 .vel-2xl\\:flex-initial { flex: 0 1 auto
 }
 .vel-2xl\\:flex-none { flex: none
 }
 .vel-2xl\\:grow { flex-grow: 1
 }
 .vel-2xl\\:shrink { flex-shrink: 1
 }
 .vel-2xl\\:items-start { align-items: flex-start
 }
 .vel-2xl\\:items-end { align-items: flex-end
 }
 .vel-2xl\\:items-center { align-items: center
 }
 .vel-2xl\\:items-baseline { align-items: baseline
 }
 .vel-2xl\\:items-stretch { align-items: stretch
 }
 .vel-2xl\\:self-auto { align-self: auto
 }
 .vel-2xl\\:self-start { align-self: flex-start
 }
 .vel-2xl\\:self-end { align-self: flex-end
 }
 .vel-2xl\\:self-center { align-self: center
 }
 .vel-2xl\\:self-baseline { align-self: baseline
 }
 .vel-2xl\\:self-stretch { align-self: stretch
 }
 .vel-2xl\\:justify-start { justify-content: flex-start
 }
 .vel-2xl\\:justify-end { justify-content: flex-end
 }
 .vel-2xl\\:justify-center { justify-content: center
 }
 .vel-2xl\\:justify-between { justify-content: space-between
 }
 .vel-2xl\\:justify-around { justify-content: space-around
 }
 .vel-2xl\\:justify-evenly { justify-content: space-evenly
 }
 .vel-2xl\\:justify-stretch { justify-content: stretch
 }
 .vel-2xl\\:justify-items-start { justify-items: start
 }
 .vel-2xl\\:justify-items-end { justify-items: end
 }
 .vel-2xl\\:justify-items-center { justify-items: center
 }
 .vel-2xl\\:justify-items-stretch { justify-items: stretch
 }
 .vel-2xl\\:justify-self-auto { justify-self: auto
 }
 .vel-2xl\\:justify-self-start { justify-self: start
 }
 .vel-2xl\\:justify-self-end { justify-self: end
 }
 .vel-2xl\\:justify-self-center { justify-self: center
 }
 .vel-2xl\\:justify-self-stretch { justify-self: stretch
 }
 .vel-2xl\\:order-first { order: -9999
 }
 .vel-2xl\\:order-last { order: 9999
 }
 .vel-2xl\\:order-none { order: 0
 }
 .vel-2xl\\:order-1 { order: 1
 }
 .vel-2xl\\:order-2 { order: 2
 }
 .vel-2xl\\:order-3 { order: 3
 }
 .vel-2xl\\:order-4 { order: 4
 }
 .vel-2xl\\:order-5 { order: 5
 }
 .vel-2xl\\:gap-0 { gap: 0px
 }
 .vel-2xl\\:gap-1 { gap: var(--vel-space-1)
 }
 .vel-2xl\\:gap-2 { gap: var(--vel-space-2)
 }
 .vel-2xl\\:gap-3 { gap: var(--vel-space-3)
 }
 .vel-2xl\\:gap-4 { gap: var(--vel-space-4)
 }
 .vel-2xl\\:gap-5 { gap: var(--vel-space-5)
 }
 .vel-2xl\\:gap-6 { gap: var(--vel-space-6)
 }
 .vel-2xl\\:gap-7 { gap: var(--vel-space-7)
 }
 .vel-2xl\\:gap-8 { gap: var(--vel-space-8)
 }
 .vel-2xl\\:gap-10 { gap: var(--vel-space-10)
 }
 .vel-2xl\\:gap-12 { gap: var(--vel-space-12)
 }
 .vel-2xl\\:gap-16 { gap: var(--vel-space-16)
 }
 .vel-2xl\\:gap-px { gap: 1px
 }
 .vel-2xl\\:gap-x-0 { -moz-column-gap: 0px; column-gap: 0px
 }
 .vel-2xl\\:gap-x-1 { -moz-column-gap: var(--vel-space-1); column-gap: var(--vel-space-1)
 }
 .vel-2xl\\:gap-x-2 { -moz-column-gap: var(--vel-space-2); column-gap: var(--vel-space-2)
 }
 .vel-2xl\\:gap-x-3 { -moz-column-gap: var(--vel-space-3); column-gap: var(--vel-space-3)
 }
 .vel-2xl\\:gap-x-4 { -moz-column-gap: var(--vel-space-4); column-gap: var(--vel-space-4)
 }
 .vel-2xl\\:gap-x-5 { -moz-column-gap: var(--vel-space-5); column-gap: var(--vel-space-5)
 }
 .vel-2xl\\:gap-x-6 { -moz-column-gap: var(--vel-space-6); column-gap: var(--vel-space-6)
 }
 .vel-2xl\\:gap-x-8 { -moz-column-gap: var(--vel-space-8); column-gap: var(--vel-space-8)
 }
 .vel-2xl\\:gap-y-0 { row-gap: 0px
 }
 .vel-2xl\\:gap-y-1 { row-gap: var(--vel-space-1)
 }
 .vel-2xl\\:gap-y-2 { row-gap: var(--vel-space-2)
 }
 .vel-2xl\\:gap-y-3 { row-gap: var(--vel-space-3)
 }
 .vel-2xl\\:gap-y-4 { row-gap: var(--vel-space-4)
 }
 .vel-2xl\\:gap-y-5 { row-gap: var(--vel-space-5)
 }
 .vel-2xl\\:gap-y-6 { row-gap: var(--vel-space-6)
 }
 .vel-2xl\\:gap-y-8 { row-gap: var(--vel-space-8)
 }
 .vel-2xl\\:grid-cols-1 { grid-template-columns: repeat(1, minmax(0, 1fr))
 }
 .vel-2xl\\:grid-cols-2 { grid-template-columns: repeat(2, minmax(0, 1fr))
 }
 .vel-2xl\\:grid-cols-3 { grid-template-columns: repeat(3, minmax(0, 1fr))
 }
 .vel-2xl\\:grid-cols-4 { grid-template-columns: repeat(4, minmax(0, 1fr))
 }
 .vel-2xl\\:grid-cols-5 { grid-template-columns: repeat(5, minmax(0, 1fr))
 }
 .vel-2xl\\:grid-cols-6 { grid-template-columns: repeat(6, minmax(0, 1fr))
 }
 .vel-2xl\\:grid-cols-7 { grid-template-columns: repeat(7, minmax(0, 1fr))
 }
 .vel-2xl\\:grid-cols-8 { grid-template-columns: repeat(8, minmax(0, 1fr))
 }
 .vel-2xl\\:grid-cols-9 { grid-template-columns: repeat(9, minmax(0, 1fr))
 }
 .vel-2xl\\:grid-cols-10 { grid-template-columns: repeat(10, minmax(0, 1fr))
 }
 .vel-2xl\\:grid-cols-11 { grid-template-columns: repeat(11, minmax(0, 1fr))
 }
 .vel-2xl\\:grid-cols-12 { grid-template-columns: repeat(12, minmax(0, 1fr))
 }
 .vel-2xl\\:grid-cols-none { grid-template-columns: none
 }
 .vel-2xl\\:col-auto { grid-column: auto
 }
 .vel-2xl\\:col-span-1 { grid-column: span 1 / span 1
 }
 .vel-2xl\\:col-span-2 { grid-column: span 2 / span 2
 }
 .vel-2xl\\:col-span-3 { grid-column: span 3 / span 3
 }
 .vel-2xl\\:col-span-4 { grid-column: span 4 / span 4
 }
 .vel-2xl\\:col-span-5 { grid-column: span 5 / span 5
 }
 .vel-2xl\\:col-span-6 { grid-column: span 6 / span 6
 }
 .vel-2xl\\:col-span-7 { grid-column: span 7 / span 7
 }
 .vel-2xl\\:col-span-8 { grid-column: span 8 / span 8
 }
 .vel-2xl\\:col-span-9 { grid-column: span 9 / span 9
 }
 .vel-2xl\\:col-span-10 { grid-column: span 10 / span 10
 }
 .vel-2xl\\:col-span-11 { grid-column: span 11 / span 11
 }
 .vel-2xl\\:col-span-12 { grid-column: span 12 / span 12
 }
 .vel-2xl\\:col-span-full { grid-column: 1 / -1
 }
 .vel-2xl\\:col-start-1 { grid-column-start: 1
 }
 .vel-2xl\\:col-start-2 { grid-column-start: 2
 }
 .vel-2xl\\:col-start-3 { grid-column-start: 3
 }
 .vel-2xl\\:col-start-4 { grid-column-start: 4
 }
 .vel-2xl\\:col-start-auto { grid-column-start: auto
 }
 .vel-2xl\\:col-end-1 { grid-column-end: 1
 }
 .vel-2xl\\:col-end-2 { grid-column-end: 2
 }
 .vel-2xl\\:col-end-3 { grid-column-end: 3
 }
 .vel-2xl\\:col-end-4 { grid-column-end: 4
 }
 .vel-2xl\\:col-end-auto { grid-column-end: auto
 }
 .vel-2xl\\:grid-rows-1 { grid-template-rows: repeat(1, minmax(0, 1fr))
 }
 .vel-2xl\\:grid-rows-2 { grid-template-rows: repeat(2, minmax(0, 1fr))
 }
 .vel-2xl\\:grid-rows-3 { grid-template-rows: repeat(3, minmax(0, 1fr))
 }
 .vel-2xl\\:grid-rows-4 { grid-template-rows: repeat(4, minmax(0, 1fr))
 }
 .vel-2xl\\:grid-rows-5 { grid-template-rows: repeat(5, minmax(0, 1fr))
 }
 .vel-2xl\\:grid-rows-6 { grid-template-rows: repeat(6, minmax(0, 1fr))
 }
 .vel-2xl\\:grid-rows-none { grid-template-rows: none
 }
 .vel-2xl\\:row-auto { grid-row: auto
 }
 .vel-2xl\\:row-span-1 { grid-row: span 1 / span 1
 }
 .vel-2xl\\:row-span-2 { grid-row: span 2 / span 2
 }
 .vel-2xl\\:row-span-3 { grid-row: span 3 / span 3
 }
 .vel-2xl\\:row-span-4 { grid-row: span 4 / span 4
 }
 .vel-2xl\\:row-span-5 { grid-row: span 5 / span 5
 }
 .vel-2xl\\:row-span-6 { grid-row: span 6 / span 6
 }
 .vel-2xl\\:row-span-full { grid-row: 1 / -1
 }
 .vel-2xl\\:row-start-1 { grid-row-start: 1
 }
 .vel-2xl\\:row-start-2 { grid-row-start: 2
 }
 .vel-2xl\\:row-start-3 { grid-row-start: 3
 }
 .vel-2xl\\:row-start-auto { grid-row-start: auto
 }
 .vel-2xl\\:row-end-1 { grid-row-end: 1
 }
 .vel-2xl\\:row-end-2 { grid-row-end: 2
 }
 .vel-2xl\\:row-end-3 { grid-row-end: 3
 }
 .vel-2xl\\:row-end-auto { grid-row-end: auto
 }
 .vel-2xl\\:grid-flow-row { grid-auto-flow: row
 }
 .vel-2xl\\:grid-flow-col { grid-auto-flow: column
 }
 .vel-2xl\\:grid-flow-dense { grid-auto-flow: dense
 }
 .vel-2xl\\:grid-flow-row-dense { grid-auto-flow: row dense
 }
 .vel-2xl\\:grid-flow-col-dense { grid-auto-flow: column dense
 }
 .vel-2xl\\:p-0 { padding: 0px
 }
 .vel-2xl\\:p-px { padding: 1px
 }
 .vel-2xl\\:p-1 { padding: var(--vel-space-1)
 }
 .vel-2xl\\:p-2 { padding: var(--vel-space-2)
 }
 .vel-2xl\\:p-3 { padding: var(--vel-space-3)
 }
 .vel-2xl\\:p-4 { padding: var(--vel-space-4)
 }
 .vel-2xl\\:p-5 { padding: var(--vel-space-5)
 }
 .vel-2xl\\:p-6 { padding: var(--vel-space-6)
 }
 .vel-2xl\\:p-7 { padding: var(--vel-space-7)
 }
 .vel-2xl\\:p-8 { padding: var(--vel-space-8)
 }
 .vel-2xl\\:p-9 { padding: var(--vel-space-9)
 }
 .vel-2xl\\:p-10 { padding: var(--vel-space-10)
 }
 .vel-2xl\\:p-11 { padding: var(--vel-space-11)
 }
 .vel-2xl\\:p-12 { padding: var(--vel-space-12)
 }
 .vel-2xl\\:p-14 { padding: var(--vel-space-14)
 }
 .vel-2xl\\:p-16 { padding: var(--vel-space-16)
 }
 .vel-2xl\\:p-20 { padding: var(--vel-space-20)
 }
 .vel-2xl\\:p-24 { padding: var(--vel-space-24)
 }
 .vel-2xl\\:p-28 { padding: var(--vel-space-28)
 }
 .vel-2xl\\:p-32 { padding: var(--vel-space-32)
 }
 .vel-2xl\\:pt-0 { padding-top: 0px
 }
 .vel-2xl\\:pt-1 { padding-top: var(--vel-space-1)
 }
 .vel-2xl\\:pt-2 { padding-top: var(--vel-space-2)
 }
 .vel-2xl\\:pt-3 { padding-top: var(--vel-space-3)
 }
 .vel-2xl\\:pt-4 { padding-top: var(--vel-space-4)
 }
 .vel-2xl\\:pt-5 { padding-top: var(--vel-space-5)
 }
 .vel-2xl\\:pt-6 { padding-top: var(--vel-space-6)
 }
 .vel-2xl\\:pt-8 { padding-top: var(--vel-space-8)
 }
 .vel-2xl\\:pt-10 { padding-top: var(--vel-space-10)
 }
 .vel-2xl\\:pt-12 { padding-top: var(--vel-space-12)
 }
 .vel-2xl\\:pt-16 { padding-top: var(--vel-space-16)
 }
 .vel-2xl\\:pr-0 { padding-right: 0px
 }
 .vel-2xl\\:pr-1 { padding-right: var(--vel-space-1)
 }
 .vel-2xl\\:pr-2 { padding-right: var(--vel-space-2)
 }
 .vel-2xl\\:pr-3 { padding-right: var(--vel-space-3)
 }
 .vel-2xl\\:pr-4 { padding-right: var(--vel-space-4)
 }
 .vel-2xl\\:pr-5 { padding-right: var(--vel-space-5)
 }
 .vel-2xl\\:pr-6 { padding-right: var(--vel-space-6)
 }
 .vel-2xl\\:pr-8 { padding-right: var(--vel-space-8)
 }
 .vel-2xl\\:pr-12 { padding-right: var(--vel-space-12)
 }
 .vel-2xl\\:pb-0 { padding-bottom: 0px
 }
 .vel-2xl\\:pb-1 { padding-bottom: var(--vel-space-1)
 }
 .vel-2xl\\:pb-2 { padding-bottom: var(--vel-space-2)
 }
 .vel-2xl\\:pb-3 { padding-bottom: var(--vel-space-3)
 }
 .vel-2xl\\:pb-4 { padding-bottom: var(--vel-space-4)
 }
 .vel-2xl\\:pb-5 { padding-bottom: var(--vel-space-5)
 }
 .vel-2xl\\:pb-6 { padding-bottom: var(--vel-space-6)
 }
 .vel-2xl\\:pb-8 { padding-bottom: var(--vel-space-8)
 }
 .vel-2xl\\:pb-12 { padding-bottom: var(--vel-space-12)
 }
 .vel-2xl\\:pl-0 { padding-left: 0px
 }
 .vel-2xl\\:pl-1 { padding-left: var(--vel-space-1)
 }
 .vel-2xl\\:pl-2 { padding-left: var(--vel-space-2)
 }
 .vel-2xl\\:pl-3 { padding-left: var(--vel-space-3)
 }
 .vel-2xl\\:pl-4 { padding-left: var(--vel-space-4)
 }
 .vel-2xl\\:pl-5 { padding-left: var(--vel-space-5)
 }
 .vel-2xl\\:pl-6 { padding-left: var(--vel-space-6)
 }
 .vel-2xl\\:pl-8 { padding-left: var(--vel-space-8)
 }
 .vel-2xl\\:pl-12 { padding-left: var(--vel-space-12)
 }
 .vel-2xl\\:m-0 { margin: 0px
 }
 .vel-2xl\\:m-px { margin: 1px
 }
 .vel-2xl\\:m-auto { margin: auto
 }
 .vel-2xl\\:m-1 { margin: var(--vel-space-1)
 }
 .vel-2xl\\:m-2 { margin: var(--vel-space-2)
 }
 .vel-2xl\\:m-3 { margin: var(--vel-space-3)
 }
 .vel-2xl\\:m-4 { margin: var(--vel-space-4)
 }
 .vel-2xl\\:m-5 { margin: var(--vel-space-5)
 }
 .vel-2xl\\:m-6 { margin: var(--vel-space-6)
 }
 .vel-2xl\\:m-7 { margin: var(--vel-space-7)
 }
 .vel-2xl\\:m-8 { margin: var(--vel-space-8)
 }
 .vel-2xl\\:m-10 { margin: var(--vel-space-10)
 }
 .vel-2xl\\:m-12 { margin: var(--vel-space-12)
 }
 .vel-2xl\\:m-16 { margin: var(--vel-space-16)
 }
 .vel-2xl\\:mt-0 { margin-top: 0px
 }
 .vel-2xl\\:mt-auto { margin-top: auto
 }
 .vel-2xl\\:mt-1 { margin-top: var(--vel-space-1)
 }
 .vel-2xl\\:mt-2 { margin-top: var(--vel-space-2)
 }
 .vel-2xl\\:mt-3 { margin-top: var(--vel-space-3)
 }
 .vel-2xl\\:mt-4 { margin-top: var(--vel-space-4)
 }
 .vel-2xl\\:mt-5 { margin-top: var(--vel-space-5)
 }
 .vel-2xl\\:mt-6 { margin-top: var(--vel-space-6)
 }
 .vel-2xl\\:mt-8 { margin-top: var(--vel-space-8)
 }
 .vel-2xl\\:mt-10 { margin-top: var(--vel-space-10)
 }
 .vel-2xl\\:mt-12 { margin-top: var(--vel-space-12)
 }
 .vel-2xl\\:mt-16 { margin-top: var(--vel-space-16)
 }
 .vel-2xl\\:mr-0 { margin-right: 0px
 }
 .vel-2xl\\:mr-auto { margin-right: auto
 }
 .vel-2xl\\:mr-1 { margin-right: var(--vel-space-1)
 }
 .vel-2xl\\:mr-2 { margin-right: var(--vel-space-2)
 }
 .vel-2xl\\:mr-3 { margin-right: var(--vel-space-3)
 }
 .vel-2xl\\:mr-4 { margin-right: var(--vel-space-4)
 }
 .vel-2xl\\:mr-6 { margin-right: var(--vel-space-6)
 }
 .vel-2xl\\:mr-8 { margin-right: var(--vel-space-8)
 }
 .vel-2xl\\:mb-0 { margin-bottom: 0px
 }
 .vel-2xl\\:mb-auto { margin-bottom: auto
 }
 .vel-2xl\\:mb-1 { margin-bottom: var(--vel-space-1)
 }
 .vel-2xl\\:mb-2 { margin-bottom: var(--vel-space-2)
 }
 .vel-2xl\\:mb-3 { margin-bottom: var(--vel-space-3)
 }
 .vel-2xl\\:mb-4 { margin-bottom: var(--vel-space-4)
 }
 .vel-2xl\\:mb-5 { margin-bottom: var(--vel-space-5)
 }
 .vel-2xl\\:mb-6 { margin-bottom: var(--vel-space-6)
 }
 .vel-2xl\\:mb-8 { margin-bottom: var(--vel-space-8)
 }
 .vel-2xl\\:mb-10 { margin-bottom: var(--vel-space-10)
 }
 .vel-2xl\\:mb-12 { margin-bottom: var(--vel-space-12)
 }
 .vel-2xl\\:mb-16 { margin-bottom: var(--vel-space-16)
 }
 .vel-2xl\\:ml-0 { margin-left: 0px
 }
 .vel-2xl\\:ml-auto { margin-left: auto
 }
 .vel-2xl\\:ml-1 { margin-left: var(--vel-space-1)
 }
 .vel-2xl\\:ml-2 { margin-left: var(--vel-space-2)
 }
 .vel-2xl\\:ml-3 { margin-left: var(--vel-space-3)
 }
 .vel-2xl\\:ml-4 { margin-left: var(--vel-space-4)
 }
 .vel-2xl\\:ml-6 { margin-left: var(--vel-space-6)
 }
 .vel-2xl\\:ml-8 { margin-left: var(--vel-space-8)
 }
 .vel-2xl\\:w-0 { width: 0px
 }
 .vel-2xl\\:w-px { width: 1px
 }
 .vel-2xl\\:w-auto { width: auto
 }
 .vel-2xl\\:w-full { width: 100%
 }
 .vel-2xl\\:w-screen { width: 100vw
 }
 .vel-2xl\\:w-svw { width: 100svw
 }
 .vel-2xl\\:w-dvw { width: 100dvw
 }
 .vel-2xl\\:w-min { width: -moz-min-content; width: min-content
 }
 .vel-2xl\\:w-max { width: -moz-max-content; width: max-content
 }
 .vel-2xl\\:w-fit { width: -moz-fit-content; width: fit-content
 }
 .vel-2xl\\:w-1 { width: var(--vel-space-1)
 }
 .vel-2xl\\:w-2 { width: var(--vel-space-2)
 }
 .vel-2xl\\:w-3 { width: var(--vel-space-3)
 }
 .vel-2xl\\:w-4 { width: var(--vel-space-4)
 }
 .vel-2xl\\:w-5 { width: var(--vel-space-5)
 }
 .vel-2xl\\:w-6 { width: var(--vel-space-6)
 }
 .vel-2xl\\:w-7 { width: var(--vel-space-7)
 }
 .vel-2xl\\:w-8 { width: var(--vel-space-8)
 }
 .vel-2xl\\:w-9 { width: var(--vel-space-9)
 }
 .vel-2xl\\:w-10 { width: var(--vel-space-10)
 }
 .vel-2xl\\:w-11 { width: var(--vel-space-11)
 }
 .vel-2xl\\:w-12 { width: var(--vel-space-12)
 }
 .vel-2xl\\:w-14 { width: var(--vel-space-14)
 }
 .vel-2xl\\:w-16 { width: var(--vel-space-16)
 }
 .vel-2xl\\:w-20 { width: var(--vel-space-20)
 }
 .vel-2xl\\:w-24 { width: var(--vel-space-24)
 }
 .vel-2xl\\:w-28 { width: var(--vel-space-28)
 }
 .vel-2xl\\:w-32 { width: var(--vel-space-32)
 }
 .vel-2xl\\:w-36 { width: var(--vel-space-36)
 }
 .vel-2xl\\:w-40 { width: var(--vel-space-40)
 }
 .vel-2xl\\:w-48 { width: var(--vel-space-48)
 }
 .vel-2xl\\:w-56 { width: var(--vel-space-56)
 }
 .vel-2xl\\:w-64 { width: var(--vel-space-64)
 }
 .vel-2xl\\:w-72 { width: var(--vel-space-72)
 }
 .vel-2xl\\:w-80 { width: var(--vel-space-80)
 }
 .vel-2xl\\:w-96 { width: var(--vel-space-96)
 }
 .vel-2xl\\:min-w-0 { min-width: 0px
 }
 .vel-2xl\\:min-w-full { min-width: 100%
 }
 .vel-2xl\\:min-w-min { min-width: -moz-min-content; min-width: min-content
 }
 .vel-2xl\\:min-w-max { min-width: -moz-max-content; min-width: max-content
 }
 .vel-2xl\\:min-w-fit { min-width: -moz-fit-content; min-width: fit-content
 }
 .vel-2xl\\:max-w-none { max-width: none
 }
 .vel-2xl\\:max-w-xs { max-width: 20rem
 }
 .vel-2xl\\:max-w-sm { max-width: 24rem
 }
 .vel-2xl\\:max-w-md { max-width: 28rem
 }
 .vel-2xl\\:max-w-lg { max-width: 32rem
 }
 .vel-2xl\\:max-w-xl { max-width: 36rem
 }
 .vel-2xl\\:max-w-2xl { max-width: 42rem
 }
 .vel-2xl\\:max-w-3xl { max-width: 48rem
 }
 .vel-2xl\\:max-w-4xl { max-width: 56rem
 }
 .vel-2xl\\:max-w-5xl { max-width: 64rem
 }
 .vel-2xl\\:max-w-6xl { max-width: 72rem
 }
 .vel-2xl\\:max-w-7xl { max-width: 80rem
 }
 .vel-2xl\\:max-w-full { max-width: 100%
 }
 .vel-2xl\\:max-w-min { max-width: -moz-min-content; max-width: min-content
 }
 .vel-2xl\\:max-w-max { max-width: -moz-max-content; max-width: max-content
 }
 .vel-2xl\\:max-w-fit { max-width: -moz-fit-content; max-width: fit-content
 }
 .vel-2xl\\:max-w-prose { max-width: 65ch
 }
 .vel-2xl\\:max-w-screen-sm { max-width: 640px
 }
 .vel-2xl\\:max-w-screen-md { max-width: 768px
 }
 .vel-2xl\\:max-w-screen-lg { max-width: 1024px
 }
 .vel-2xl\\:max-w-screen-xl { max-width: 1280px
 }
 .vel-2xl\\:max-w-screen-2xl { max-width: 1536px
 }
 .vel-2xl\\:h-0 { height: 0px
 }
 .vel-2xl\\:h-px { height: 1px
 }
 .vel-2xl\\:h-auto { height: auto
 }
 .vel-2xl\\:h-full { height: 100%
 }
 .vel-2xl\\:h-screen { height: 100vh
 }
 .vel-2xl\\:h-svh { height: 100svh
 }
 .vel-2xl\\:h-dvh { height: 100dvh
 }
 .vel-2xl\\:h-min { height: -moz-min-content; height: min-content
 }
 .vel-2xl\\:h-max { height: -moz-max-content; height: max-content
 }
 .vel-2xl\\:h-fit { height: -moz-fit-content; height: fit-content
 }
 .vel-2xl\\:h-1 { height: var(--vel-space-1)
 }
 .vel-2xl\\:h-2 { height: var(--vel-space-2)
 }
 .vel-2xl\\:h-3 { height: var(--vel-space-3)
 }
 .vel-2xl\\:h-4 { height: var(--vel-space-4)
 }
 .vel-2xl\\:h-5 { height: var(--vel-space-5)
 }
 .vel-2xl\\:h-6 { height: var(--vel-space-6)
 }
 .vel-2xl\\:h-7 { height: var(--vel-space-7)
 }
 .vel-2xl\\:h-8 { height: var(--vel-space-8)
 }
 .vel-2xl\\:h-9 { height: var(--vel-space-9)
 }
 .vel-2xl\\:h-10 { height: var(--vel-space-10)
 }
 .vel-2xl\\:h-11 { height: var(--vel-space-11)
 }
 .vel-2xl\\:h-12 { height: var(--vel-space-12)
 }
 .vel-2xl\\:h-14 { height: var(--vel-space-14)
 }
 .vel-2xl\\:h-16 { height: var(--vel-space-16)
 }
 .vel-2xl\\:h-20 { height: var(--vel-space-20)
 }
 .vel-2xl\\:h-24 { height: var(--vel-space-24)
 }
 .vel-2xl\\:h-28 { height: var(--vel-space-28)
 }
 .vel-2xl\\:h-32 { height: var(--vel-space-32)
 }
 .vel-2xl\\:h-36 { height: var(--vel-space-36)
 }
 .vel-2xl\\:h-40 { height: var(--vel-space-40)
 }
 .vel-2xl\\:h-48 { height: var(--vel-space-48)
 }
 .vel-2xl\\:h-56 { height: var(--vel-space-56)
 }
 .vel-2xl\\:h-64 { height: var(--vel-space-64)
 }
 .vel-2xl\\:min-h-0 { min-height: 0px
 }
 .vel-2xl\\:min-h-full { min-height: 100%
 }
 .vel-2xl\\:min-h-screen { min-height: 100vh
 }
 .vel-2xl\\:min-h-svh { min-height: 100svh
 }
 .vel-2xl\\:min-h-dvh { min-height: 100dvh
 }
 .vel-2xl\\:min-h-min { min-height: -moz-min-content; min-height: min-content
 }
 .vel-2xl\\:min-h-max { min-height: -moz-max-content; min-height: max-content
 }
 .vel-2xl\\:min-h-fit { min-height: -moz-fit-content; min-height: fit-content
 }
 .vel-2xl\\:max-h-none { max-height: none
 }
 .vel-2xl\\:max-h-full { max-height: 100%
 }
 .vel-2xl\\:max-h-screen { max-height: 100vh
 }
 .vel-2xl\\:max-h-svh { max-height: 100svh
 }
 .vel-2xl\\:max-h-dvh { max-height: 100dvh
 }
 .vel-2xl\\:max-h-min { max-height: -moz-min-content; max-height: min-content
 }
 .vel-2xl\\:max-h-max { max-height: -moz-max-content; max-height: max-content
 }
 .vel-2xl\\:max-h-fit { max-height: -moz-fit-content; max-height: fit-content
 }
 .vel-2xl\\:max-h-24 { max-height: var(--vel-space-24)
 }
 .vel-2xl\\:max-h-48 { max-height: var(--vel-space-48)
 }
 .vel-2xl\\:max-h-64 { max-height: var(--vel-space-64)
 }
 .vel-2xl\\:max-h-96 { max-height: var(--vel-space-96)
 }
 .vel-2xl\\:font-sans { font-family: var(--vel-font-sans)
 }
 .vel-2xl\\:font-serif { font-family: var(--vel-font-serif)
 }
 .vel-2xl\\:font-mono { font-family: var(--vel-font-mono)
 }
 .vel-2xl\\:text-xs { font-size: var(--vel-text-xs); line-height: 1rem
 }
 .vel-2xl\\:text-sm { font-size: var(--vel-text-sm); line-height: 1.25rem
 }
 .vel-2xl\\:text-base { font-size: var(--vel-text-base); line-height: 1.5rem
 }
 .vel-2xl\\:text-lg { font-size: var(--vel-text-lg); line-height: 1.75rem
 }
 .vel-2xl\\:text-xl { font-size: var(--vel-text-xl); line-height: 1.75rem
 }
 .vel-2xl\\:text-2xl { font-size: var(--vel-text-2xl); line-height: 2rem
 }
 .vel-2xl\\:text-3xl { font-size: var(--vel-text-3xl); line-height: 2.25rem
 }
 .vel-2xl\\:text-4xl { font-size: var(--vel-text-4xl); line-height: 2.5rem
 }
 .vel-2xl\\:text-5xl { font-size: var(--vel-text-5xl); line-height: 1
 }
 .vel-2xl\\:text-6xl { font-size: var(--vel-text-6xl); line-height: 1
 }
 .vel-2xl\\:text-7xl { font-size: var(--vel-text-7xl); line-height: 1
 }
 .vel-2xl\\:text-8xl { font-size: var(--vel-text-8xl); line-height: 1
 }
 .vel-2xl\\:text-9xl { font-size: var(--vel-text-9xl); line-height: 1
 }
 .vel-2xl\\:font-thin { font-weight: 100
 }
 .vel-2xl\\:font-extralight { font-weight: 200
 }
 .vel-2xl\\:font-light { font-weight: 300
 }
 .vel-2xl\\:font-normal { font-weight: 400
 }
 .vel-2xl\\:font-medium { font-weight: 500
 }
 .vel-2xl\\:font-semibold { font-weight: 600
 }
 .vel-2xl\\:font-bold { font-weight: 700
 }
 .vel-2xl\\:font-extrabold { font-weight: 800
 }
 .vel-2xl\\:font-black { font-weight: 900
 }
 .vel-2xl\\:italic { font-style: italic
 }
 .vel-2xl\\:not-italic { font-style: normal
 }
 .vel-2xl\\:leading-none { line-height: 1
 }
 .vel-2xl\\:leading-tight { line-height: 1.25
 }
 .vel-2xl\\:leading-snug { line-height: 1.375
 }
 .vel-2xl\\:leading-normal { line-height: 1.5
 }
 .vel-2xl\\:leading-relaxed { line-height: 1.625
 }
 .vel-2xl\\:leading-loose { line-height: 2
 }
 .vel-2xl\\:leading-3 { line-height: 0.75rem
 }
 .vel-2xl\\:leading-4 { line-height: 1rem
 }
 .vel-2xl\\:leading-5 { line-height: 1.25rem
 }
 .vel-2xl\\:leading-6 { line-height: 1.5rem
 }
 .vel-2xl\\:leading-7 { line-height: 1.75rem
 }
 .vel-2xl\\:leading-8 { line-height: 2rem
 }
 .vel-2xl\\:leading-9 { line-height: 2.25rem
 }
 .vel-2xl\\:leading-10 { line-height: 2.5rem
 }
 .vel-2xl\\:tracking-tighter { letter-spacing: -0.05em
 }
 .vel-2xl\\:tracking-tight { letter-spacing: -0.025em
 }
 .vel-2xl\\:tracking-normal { letter-spacing: 0em
 }
 .vel-2xl\\:tracking-wide { letter-spacing: 0.025em
 }
 .vel-2xl\\:tracking-wider { letter-spacing: 0.05em
 }
 .vel-2xl\\:tracking-widest { letter-spacing: 0.1em
 }
 .vel-2xl\\:text-left { text-align: left
 }
 .vel-2xl\\:text-center { text-align: center
 }
 .vel-2xl\\:text-right { text-align: right
 }
 .vel-2xl\\:text-justify { text-align: justify
 }
 .vel-2xl\\:text-start { text-align: start
 }
 .vel-2xl\\:text-end { text-align: end
 }
 .vel-2xl\\:underline { text-decoration-line: underline
 }
 .vel-2xl\\:line-through { text-decoration-line: line-through
 }
 .vel-2xl\\:no-underline { text-decoration-line: none
 }
 .vel-2xl\\:uppercase { text-transform: uppercase
 }
 .vel-2xl\\:lowercase { text-transform: lowercase
 }
 .vel-2xl\\:capitalize { text-transform: capitalize
 }
 .vel-2xl\\:normal-case { text-transform: none
 }
 .vel-2xl\\:truncate { overflow: hidden; text-overflow: ellipsis; white-space: nowrap
 }
 .vel-2xl\\:text-ellipsis { text-overflow: ellipsis
 }
 .vel-2xl\\:text-clip { text-overflow: clip
 }
 .vel-2xl\\:whitespace-normal { white-space: normal
 }
 .vel-2xl\\:whitespace-nowrap { white-space: nowrap
 }
 .vel-2xl\\:whitespace-pre { white-space: pre
 }
 .vel-2xl\\:whitespace-pre-line { white-space: pre-line
 }
 .vel-2xl\\:whitespace-pre-wrap { white-space: pre-wrap
 }
 .vel-2xl\\:whitespace-break-spaces { white-space: break-spaces
 }
 .vel-2xl\\:text-inherit { color: inherit
 }
 .vel-2xl\\:text-current { color: currentColor
 }
 .vel-2xl\\:text-transparent { color: transparent
 }
 .vel-2xl\\:text-white { color: #ffffff
 }
 .vel-2xl\\:text-black { color: #000000
 }
 .vel-2xl\\:text-primary { color: var(--vel-color-primary)
 }
 .vel-2xl\\:text-secondary { color: var(--vel-color-secondary)
 }
 .vel-2xl\\:text-success { color: var(--vel-color-success)
 }
 .vel-2xl\\:text-danger { color: var(--vel-color-danger)
 }
 .vel-2xl\\:text-warning { color: var(--vel-color-warning)
 }
 .vel-2xl\\:text-info { color: var(--vel-color-info)
 }
 .vel-2xl\\:text-neutral-50 { color: var(--vel-neutral-50)
 }
 .vel-2xl\\:text-neutral-100 { color: var(--vel-neutral-100)
 }
 .vel-2xl\\:text-neutral-200 { color: var(--vel-neutral-200)
 }
 .vel-2xl\\:text-neutral-300 { color: var(--vel-neutral-300)
 }
 .vel-2xl\\:text-neutral-400 { color: var(--vel-neutral-400)
 }
 .vel-2xl\\:text-neutral-500 { color: var(--vel-neutral-500)
 }
 .vel-2xl\\:text-neutral-600 { color: var(--vel-neutral-600)
 }
 .vel-2xl\\:text-neutral-700 { color: var(--vel-neutral-700)
 }
 .vel-2xl\\:text-neutral-800 { color: var(--vel-neutral-800)
 }
 .vel-2xl\\:text-neutral-900 { color: var(--vel-neutral-900)
 }
 .vel-2xl\\:text-neutral-950 { color: var(--vel-neutral-950)
 }
 .vel-2xl\\:text-primary-50 { color: var(--vel-primary-50)
 }
 .vel-2xl\\:text-primary-100 { color: var(--vel-primary-100)
 }
 .vel-2xl\\:text-primary-200 { color: var(--vel-primary-200)
 }
 .vel-2xl\\:text-primary-300 { color: var(--vel-primary-300)
 }
 .vel-2xl\\:text-primary-400 { color: var(--vel-primary-400)
 }
 .vel-2xl\\:text-primary-500 { color: var(--vel-primary-500)
 }
 .vel-2xl\\:text-primary-600 { color: var(--vel-primary-600)
 }
 .vel-2xl\\:text-primary-700 { color: var(--vel-primary-700)
 }
 .vel-2xl\\:text-primary-800 { color: var(--vel-primary-800)
 }
 .vel-2xl\\:text-primary-900 { color: var(--vel-primary-900)
 }
 .vel-2xl\\:text-primary-950 { color: var(--vel-primary-950)
 }
 .vel-2xl\\:text-success-50 { color: var(--vel-success-50)
 }
 .vel-2xl\\:text-success-100 { color: var(--vel-success-100)
 }
 .vel-2xl\\:text-success-200 { color: var(--vel-success-200)
 }
 .vel-2xl\\:text-success-300 { color: var(--vel-success-300)
 }
 .vel-2xl\\:text-success-400 { color: var(--vel-success-400)
 }
 .vel-2xl\\:text-success-500 { color: var(--vel-success-500)
 }
 .vel-2xl\\:text-success-600 { color: var(--vel-success-600)
 }
 .vel-2xl\\:text-success-700 { color: var(--vel-success-700)
 }
 .vel-2xl\\:text-danger-50 { color: var(--vel-danger-50)
 }
 .vel-2xl\\:text-danger-100 { color: var(--vel-danger-100)
 }
 .vel-2xl\\:text-danger-300 { color: var(--vel-danger-300)
 }
 .vel-2xl\\:text-danger-400 { color: var(--vel-danger-400)
 }
 .vel-2xl\\:text-danger-500 { color: var(--vel-danger-500)
 }
 .vel-2xl\\:text-danger-600 { color: var(--vel-danger-600)
 }
 .vel-2xl\\:text-danger-700 { color: var(--vel-danger-700)
 }
 .vel-2xl\\:text-warning-300 { color: var(--vel-warning-300)
 }
 .vel-2xl\\:text-warning-400 { color: var(--vel-warning-400)
 }
 .vel-2xl\\:text-warning-500 { color: var(--vel-warning-500)
 }
 .vel-2xl\\:text-warning-600 { color: var(--vel-warning-600)
 }
 .vel-2xl\\:text-info-300 { color: var(--vel-info-300)
 }
 .vel-2xl\\:text-info-400 { color: var(--vel-info-400)
 }
 .vel-2xl\\:text-info-500 { color: var(--vel-info-500)
 }
 .vel-2xl\\:text-info-600 { color: var(--vel-info-600)
 }
 .vel-2xl\\:text-body { color: var(--vel-color-text)
 }
 .vel-2xl\\:text-muted { color: var(--vel-color-muted)
 }
 .vel-2xl\\:text-gradient-primary {
  background: var(--vel-gradient-primary);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  color: transparent
 }
 .vel-2xl\\:text-gradient-aurora {
  background: var(--vel-gradient-aurora);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  color: transparent
 }
 .vel-2xl\\:text-gradient-sunset {
  background: var(--vel-gradient-sunset);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  color: transparent
 }
 .vel-2xl\\:text-gradient-ocean {
  background: var(--vel-gradient-ocean);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  color: transparent
 }
 .vel-2xl\\:text-gradient-cosmos {
  background: var(--vel-gradient-cosmos);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  color: transparent
 }
 .vel-2xl\\:table {
  width: 100%;
  border-collapse: collapse;
  font-size: var(--vel-text-sm);
  color: var(--vel-color-text)
 }
}

/* Hover variants — vel-hover:* */
.vel-hover\\:text-xs:hover { font-size: var(--vel-text-xs); line-height: 1rem
}
.vel-hover\\:text-sm:hover { font-size: var(--vel-text-sm); line-height: 1.25rem
}
.vel-hover\\:text-base:hover { font-size: var(--vel-text-base); line-height: 1.5rem
}
.vel-hover\\:text-lg:hover { font-size: var(--vel-text-lg); line-height: 1.75rem
}
.vel-hover\\:text-xl:hover { font-size: var(--vel-text-xl); line-height: 1.75rem
}
.vel-hover\\:text-2xl:hover { font-size: var(--vel-text-2xl); line-height: 2rem
}
.vel-hover\\:text-3xl:hover { font-size: var(--vel-text-3xl); line-height: 2.25rem
}
.vel-hover\\:text-4xl:hover { font-size: var(--vel-text-4xl); line-height: 2.5rem
}
.vel-hover\\:text-5xl:hover { font-size: var(--vel-text-5xl); line-height: 1
}
.vel-hover\\:text-6xl:hover { font-size: var(--vel-text-6xl); line-height: 1
}
.vel-hover\\:text-7xl:hover { font-size: var(--vel-text-7xl); line-height: 1
}
.vel-hover\\:text-8xl:hover { font-size: var(--vel-text-8xl); line-height: 1
}
.vel-hover\\:text-9xl:hover { font-size: var(--vel-text-9xl); line-height: 1
}
.vel-hover\\:text-left:hover { text-align: left
}
.vel-hover\\:text-center:hover { text-align: center
}
.vel-hover\\:text-right:hover { text-align: right
}
.vel-hover\\:text-justify:hover { text-align: justify
}
.vel-hover\\:text-start:hover { text-align: start
}
.vel-hover\\:text-end:hover { text-align: end
}
.vel-hover\\:underline:hover { text-decoration-line: underline
}
.vel-hover\\:line-through:hover { text-decoration-line: line-through
}
.vel-hover\\:no-underline:hover { text-decoration-line: none
}
.vel-hover\\:text-ellipsis:hover { text-overflow: ellipsis
}
.vel-hover\\:text-clip:hover { text-overflow: clip
}
.vel-hover\\:text-inherit:hover { color: inherit
}
.vel-hover\\:text-current:hover { color: currentColor
}
.vel-hover\\:text-transparent:hover { color: transparent
}
.vel-hover\\:text-white:hover { color: #ffffff
}
.vel-hover\\:text-black:hover { color: #000000
}
.vel-hover\\:text-primary:hover { color: var(--vel-color-primary)
}
.vel-hover\\:text-secondary:hover { color: var(--vel-color-secondary)
}
.vel-hover\\:text-success:hover { color: var(--vel-color-success)
}
.vel-hover\\:text-danger:hover { color: var(--vel-color-danger)
}
.vel-hover\\:text-warning:hover { color: var(--vel-color-warning)
}
.vel-hover\\:text-info:hover { color: var(--vel-color-info)
}
.vel-hover\\:text-neutral-50:hover { color: var(--vel-neutral-50)
}
.vel-hover\\:text-neutral-100:hover { color: var(--vel-neutral-100)
}
.vel-hover\\:text-neutral-200:hover { color: var(--vel-neutral-200)
}
.vel-hover\\:text-neutral-300:hover { color: var(--vel-neutral-300)
}
.vel-hover\\:text-neutral-400:hover { color: var(--vel-neutral-400)
}
.vel-hover\\:text-neutral-500:hover { color: var(--vel-neutral-500)
}
.vel-hover\\:text-neutral-600:hover { color: var(--vel-neutral-600)
}
.vel-hover\\:text-neutral-700:hover { color: var(--vel-neutral-700)
}
.vel-hover\\:text-neutral-800:hover { color: var(--vel-neutral-800)
}
.vel-hover\\:text-neutral-900:hover { color: var(--vel-neutral-900)
}
.vel-hover\\:text-neutral-950:hover { color: var(--vel-neutral-950)
}
.vel-hover\\:bg-inherit:hover { background-color: inherit
}
.vel-hover\\:bg-current:hover { background-color: currentColor
}
.vel-hover\\:bg-transparent:hover { background-color: transparent
}
.vel-hover\\:bg-white:hover { background-color: #ffffff
}
.vel-hover\\:bg-black:hover { background-color: #000000
}
.vel-hover\\:bg-primary:hover { background-color: var(--vel-color-primary)
}
.vel-hover\\:bg-secondary:hover { background-color: var(--vel-color-secondary)
}
.vel-hover\\:bg-success:hover { background-color: var(--vel-color-success)
}
.vel-hover\\:bg-danger:hover { background-color: var(--vel-color-danger)
}
.vel-hover\\:bg-warning:hover { background-color: var(--vel-color-warning)
}
.vel-hover\\:bg-info:hover { background-color: var(--vel-color-info)
}
.vel-hover\\:bg-primary-light:hover { background-color: var(--vel-color-primary-light)
}
.vel-hover\\:bg-success-light:hover { background-color: var(--vel-color-success-light)
}
.vel-hover\\:bg-danger-light:hover { background-color: var(--vel-color-danger-light)
}
.vel-hover\\:bg-warning-light:hover { background-color: var(--vel-color-warning-light)
}
.vel-hover\\:bg-info-light:hover { background-color: var(--vel-color-info-light)
}
.vel-hover\\:bg-neutral-50:hover { background-color: var(--vel-neutral-50)
}
.vel-hover\\:bg-neutral-100:hover { background-color: var(--vel-neutral-100)
}
.vel-hover\\:bg-neutral-200:hover { background-color: var(--vel-neutral-200)
}
.vel-hover\\:bg-neutral-300:hover { background-color: var(--vel-neutral-300)
}
.vel-hover\\:bg-neutral-400:hover { background-color: var(--vel-neutral-400)
}
.vel-hover\\:bg-neutral-500:hover { background-color: var(--vel-neutral-500)
}
.vel-hover\\:bg-neutral-600:hover { background-color: var(--vel-neutral-600)
}
.vel-hover\\:bg-neutral-700:hover { background-color: var(--vel-neutral-700)
}
.vel-hover\\:bg-neutral-800:hover { background-color: var(--vel-neutral-800)
}
.vel-hover\\:bg-neutral-900:hover { background-color: var(--vel-neutral-900)
}
.vel-hover\\:bg-neutral-950:hover { background-color: var(--vel-neutral-950)
}
.vel-hover\\:bg-opacity-0:hover { --vel-bg-opacity: 0
}
.vel-hover\\:bg-opacity-25:hover { --vel-bg-opacity: 0.25
}
.vel-hover\\:bg-opacity-50:hover { --vel-bg-opacity: 0.5
}
.vel-hover\\:bg-opacity-75:hover { --vel-bg-opacity: 0.75
}
.vel-hover\\:bg-opacity-100:hover { --vel-bg-opacity: 1
}
.vel-hover\\:border-inherit:hover { border-color: inherit
}
.vel-hover\\:border-current:hover { border-color: currentColor
}
.vel-hover\\:border-transparent:hover { border-color: transparent
}
.vel-hover\\:border-white:hover { border-color: #ffffff
}
.vel-hover\\:border-black:hover { border-color: #000000
}
.vel-hover\\:border-primary:hover { border-color: var(--vel-color-primary)
}
.vel-hover\\:border-secondary:hover { border-color: var(--vel-color-secondary)
}
.vel-hover\\:border-success:hover { border-color: var(--vel-color-success)
}
.vel-hover\\:border-danger:hover { border-color: var(--vel-color-danger)
}
.vel-hover\\:border-warning:hover { border-color: var(--vel-color-warning)
}
.vel-hover\\:border-info:hover { border-color: var(--vel-color-info)
}
.vel-hover\\:border-neutral-100:hover { border-color: var(--vel-neutral-100)
}
.vel-hover\\:border-neutral-200:hover { border-color: var(--vel-neutral-200)
}
.vel-hover\\:border-neutral-300:hover { border-color: var(--vel-neutral-300)
}
.vel-hover\\:border-neutral-400:hover { border-color: var(--vel-neutral-400)
}
.vel-hover\\:border-neutral-500:hover { border-color: var(--vel-neutral-500)
}
.vel-hover\\:border-neutral-600:hover { border-color: var(--vel-neutral-600)
}
.vel-hover\\:border-neutral-700:hover { border-color: var(--vel-neutral-700)
}
.vel-hover\\:border-neutral-800:hover { border-color: var(--vel-neutral-800)
}
.vel-hover\\:border-neutral-900:hover { border-color: var(--vel-neutral-900)
}
.vel-hover\\:bg-auto:hover { background-size: auto
}
.vel-hover\\:bg-cover:hover { background-size: cover
}
.vel-hover\\:bg-contain:hover { background-size: contain
}
.vel-hover\\:bg-center:hover { background-position: center
}
.vel-hover\\:bg-top:hover { background-position: top
}
.vel-hover\\:bg-right:hover { background-position: right
}
.vel-hover\\:bg-bottom:hover { background-position: bottom
}
.vel-hover\\:bg-left:hover { background-position: left
}
.vel-hover\\:bg-repeat:hover { background-repeat: repeat
}
.vel-hover\\:bg-no-repeat:hover { background-repeat: no-repeat
}
.vel-hover\\:bg-repeat-x:hover { background-repeat: repeat-x
}
.vel-hover\\:bg-repeat-y:hover { background-repeat: repeat-y
}
.vel-hover\\:bg-fixed:hover { background-attachment: fixed
}
.vel-hover\\:bg-local:hover { background-attachment: local
}
.vel-hover\\:bg-scroll:hover { background-attachment: scroll
}
.vel-hover\\:bg-surface-0:hover { background-color: var(--vel-surface-0)
}
.vel-hover\\:bg-surface-1:hover { background-color: var(--vel-surface-1)
}
.vel-hover\\:bg-surface-2:hover { background-color: var(--vel-surface-2)
}
.vel-hover\\:bg-surface-3:hover { background-color: var(--vel-surface-3)
}
.vel-hover\\:bg-surface-4:hover { background-color: var(--vel-surface-4)
}
.vel-hover\\:text-primary-50:hover { color: var(--vel-primary-50)
}
.vel-hover\\:text-primary-100:hover { color: var(--vel-primary-100)
}
.vel-hover\\:text-primary-200:hover { color: var(--vel-primary-200)
}
.vel-hover\\:text-primary-300:hover { color: var(--vel-primary-300)
}
.vel-hover\\:text-primary-400:hover { color: var(--vel-primary-400)
}
.vel-hover\\:text-primary-500:hover { color: var(--vel-primary-500)
}
.vel-hover\\:text-primary-600:hover { color: var(--vel-primary-600)
}
.vel-hover\\:text-primary-700:hover { color: var(--vel-primary-700)
}
.vel-hover\\:text-primary-800:hover { color: var(--vel-primary-800)
}
.vel-hover\\:text-primary-900:hover { color: var(--vel-primary-900)
}
.vel-hover\\:text-primary-950:hover { color: var(--vel-primary-950)
}
.vel-hover\\:bg-primary-50:hover { background-color: var(--vel-primary-50)
}
.vel-hover\\:bg-primary-100:hover { background-color: var(--vel-primary-100)
}
.vel-hover\\:bg-primary-200:hover { background-color: var(--vel-primary-200)
}
.vel-hover\\:bg-primary-300:hover { background-color: var(--vel-primary-300)
}
.vel-hover\\:bg-primary-400:hover { background-color: var(--vel-primary-400)
}
.vel-hover\\:bg-primary-500:hover { background-color: var(--vel-primary-500)
}
.vel-hover\\:bg-primary-600:hover { background-color: var(--vel-primary-600)
}
.vel-hover\\:bg-primary-700:hover { background-color: var(--vel-primary-700)
}
.vel-hover\\:bg-primary-800:hover { background-color: var(--vel-primary-800)
}
.vel-hover\\:bg-primary-900:hover { background-color: var(--vel-primary-900)
}
.vel-hover\\:bg-primary-950:hover { background-color: var(--vel-primary-950)
}
.vel-hover\\:text-success-50:hover { color: var(--vel-success-50)
}
.vel-hover\\:text-success-100:hover { color: var(--vel-success-100)
}
.vel-hover\\:text-success-200:hover { color: var(--vel-success-200)
}
.vel-hover\\:text-success-300:hover { color: var(--vel-success-300)
}
.vel-hover\\:text-success-400:hover { color: var(--vel-success-400)
}
.vel-hover\\:text-success-500:hover { color: var(--vel-success-500)
}
.vel-hover\\:text-success-600:hover { color: var(--vel-success-600)
}
.vel-hover\\:text-success-700:hover { color: var(--vel-success-700)
}
.vel-hover\\:bg-success-50:hover { background-color: var(--vel-success-50)
}
.vel-hover\\:bg-success-100:hover { background-color: var(--vel-success-100)
}
.vel-hover\\:bg-success-300:hover { background-color: var(--vel-success-300)
}
.vel-hover\\:bg-success-400:hover { background-color: var(--vel-success-400)
}
.vel-hover\\:bg-success-500:hover { background-color: var(--vel-success-500)
}
.vel-hover\\:bg-success-700:hover { background-color: var(--vel-success-700)
}
.vel-hover\\:bg-success-900:hover { background-color: var(--vel-success-900)
}
.vel-hover\\:text-danger-50:hover { color: var(--vel-danger-50)
}
.vel-hover\\:text-danger-100:hover { color: var(--vel-danger-100)
}
.vel-hover\\:text-danger-300:hover { color: var(--vel-danger-300)
}
.vel-hover\\:text-danger-400:hover { color: var(--vel-danger-400)
}
.vel-hover\\:text-danger-500:hover { color: var(--vel-danger-500)
}
.vel-hover\\:text-danger-600:hover { color: var(--vel-danger-600)
}
.vel-hover\\:text-danger-700:hover { color: var(--vel-danger-700)
}
.vel-hover\\:bg-danger-50:hover { background-color: var(--vel-danger-50)
}
.vel-hover\\:bg-danger-100:hover { background-color: var(--vel-danger-100)
}
.vel-hover\\:bg-danger-300:hover { background-color: var(--vel-danger-300)
}
.vel-hover\\:bg-danger-400:hover { background-color: var(--vel-danger-400)
}
.vel-hover\\:bg-danger-500:hover { background-color: var(--vel-danger-500)
}
.vel-hover\\:bg-danger-700:hover { background-color: var(--vel-danger-700)
}
.vel-hover\\:bg-danger-900:hover { background-color: var(--vel-danger-900)
}
.vel-hover\\:text-warning-300:hover { color: var(--vel-warning-300)
}
.vel-hover\\:text-warning-400:hover { color: var(--vel-warning-400)
}
.vel-hover\\:text-warning-500:hover { color: var(--vel-warning-500)
}
.vel-hover\\:text-warning-600:hover { color: var(--vel-warning-600)
}
.vel-hover\\:bg-warning-100:hover { background-color: var(--vel-warning-100)
}
.vel-hover\\:bg-warning-300:hover { background-color: var(--vel-warning-300)
}
.vel-hover\\:bg-warning-400:hover { background-color: var(--vel-warning-400)
}
.vel-hover\\:bg-warning-500:hover { background-color: var(--vel-warning-500)
}
.vel-hover\\:bg-warning-900:hover { background-color: var(--vel-warning-900)
}
.vel-hover\\:text-info-300:hover { color: var(--vel-info-300)
}
.vel-hover\\:text-info-400:hover { color: var(--vel-info-400)
}
.vel-hover\\:text-info-500:hover { color: var(--vel-info-500)
}
.vel-hover\\:text-info-600:hover { color: var(--vel-info-600)
}
.vel-hover\\:bg-info-100:hover { background-color: var(--vel-info-100)
}
.vel-hover\\:bg-info-300:hover { background-color: var(--vel-info-300)
}
.vel-hover\\:bg-info-400:hover { background-color: var(--vel-info-400)
}
.vel-hover\\:bg-info-500:hover { background-color: var(--vel-info-500)
}
.vel-hover\\:bg-info-900:hover { background-color: var(--vel-info-900)
}
.vel-hover\\:text-body:hover { color: var(--vel-color-text)
}
.vel-hover\\:text-muted:hover { color: var(--vel-color-muted)
}
.vel-hover\\:border-0:hover { border-width: 0px
}
.vel-hover\\:border-2:hover { border-width: 2px
}
.vel-hover\\:border-4:hover { border-width: 4px
}
.vel-hover\\:border-8:hover { border-width: 8px
}
.vel-hover\\:border-t-0:hover { border-top-width: 0px
}
.vel-hover\\:border-t:hover { border-top-width: 1px
}
.vel-hover\\:border-t-2:hover { border-top-width: 2px
}
.vel-hover\\:border-t-4:hover { border-top-width: 4px
}
.vel-hover\\:border-r-0:hover { border-right-width: 0px
}
.vel-hover\\:border-r:hover { border-right-width: 1px
}
.vel-hover\\:border-r-2:hover { border-right-width: 2px
}
.vel-hover\\:border-r-4:hover { border-right-width: 4px
}
.vel-hover\\:border-b-0:hover { border-bottom-width: 0px
}
.vel-hover\\:border-b:hover { border-bottom-width: 1px
}
.vel-hover\\:border-b-2:hover { border-bottom-width: 2px
}
.vel-hover\\:border-b-4:hover { border-bottom-width: 4px
}
.vel-hover\\:border-l-0:hover { border-left-width: 0px
}
.vel-hover\\:border-l:hover { border-left-width: 1px
}
.vel-hover\\:border-l-2:hover { border-left-width: 2px
}
.vel-hover\\:border-l-4:hover { border-left-width: 4px
}
.vel-hover\\:border-x-0:hover { border-left-width: 0px; border-right-width: 0px
}
.vel-hover\\:border-x:hover { border-left-width: 1px; border-right-width: 1px
}
.vel-hover\\:border-x-2:hover { border-left-width: 2px; border-right-width: 2px
}
.vel-hover\\:border-y-0:hover { border-top-width: 0px; border-bottom-width: 0px
}
.vel-hover\\:border-y:hover { border-top-width: 1px; border-bottom-width: 1px
}
.vel-hover\\:border-y-2:hover { border-top-width: 2px; border-bottom-width: 2px
}
.vel-hover\\:border-solid:hover { border-style: solid
}
.vel-hover\\:border-dashed:hover { border-style: dashed
}
.vel-hover\\:border-dotted:hover { border-style: dotted
}
.vel-hover\\:border-double:hover { border-style: double
}
.vel-hover\\:border-hidden:hover { border-style: hidden
}
.vel-hover\\:border-none:hover { border-style: none
}
.vel-hover\\:ring:hover {
  box-shadow: var(--vel-ring-primary)
}
.vel-hover\\:ring-primary:hover { box-shadow: var(--vel-ring-primary)
}
.vel-hover\\:ring-success:hover { box-shadow: var(--vel-ring-success)
}
.vel-hover\\:ring-danger:hover { box-shadow: var(--vel-ring-danger)
}
.vel-hover\\:ring-warning:hover { box-shadow: var(--vel-ring-warning)
}
.vel-hover\\:ring-info:hover { box-shadow: var(--vel-ring-info)
}
.vel-hover\\:ring-neutral:hover { box-shadow: 0 0 0 3px var(--vel-neutral-400)
}
.vel-hover\\:shadow-sm:hover { box-shadow: var(--vel-shadow-sm)
}
.vel-hover\\:shadow:hover { box-shadow: var(--vel-shadow)
}
.vel-hover\\:shadow-md:hover { box-shadow: var(--vel-shadow-md)
}
.vel-hover\\:shadow-lg:hover { box-shadow: var(--vel-shadow-lg)
}
.vel-hover\\:shadow-xl:hover { box-shadow: var(--vel-shadow-xl)
}
.vel-hover\\:shadow-2xl:hover { box-shadow: var(--vel-shadow-2xl)
}
.vel-hover\\:shadow-inner:hover { box-shadow: var(--vel-shadow-inner)
}
.vel-hover\\:shadow-none:hover { box-shadow: var(--vel-shadow-none)
}
.vel-hover\\:opacity-0:hover { opacity: 0
}
.vel-hover\\:opacity-5:hover { opacity: 0.05
}
.vel-hover\\:opacity-10:hover { opacity: 0.1
}
.vel-hover\\:opacity-15:hover { opacity: 0.15
}
.vel-hover\\:opacity-20:hover { opacity: 0.2
}
.vel-hover\\:opacity-25:hover { opacity: 0.25
}
.vel-hover\\:opacity-30:hover { opacity: 0.3
}
.vel-hover\\:opacity-40:hover { opacity: 0.4
}
.vel-hover\\:opacity-50:hover { opacity: 0.5
}
.vel-hover\\:opacity-60:hover { opacity: 0.6
}
.vel-hover\\:opacity-70:hover { opacity: 0.7
}
.vel-hover\\:opacity-75:hover { opacity: 0.75
}
.vel-hover\\:opacity-80:hover { opacity: 0.8
}
.vel-hover\\:opacity-90:hover { opacity: 0.9
}
.vel-hover\\:opacity-95:hover { opacity: 0.95
}
.vel-hover\\:opacity-100:hover { opacity: 1
}
.vel-hover\\:bg-gradient-primary:hover { background: var(--vel-gradient-primary)
}
.vel-hover\\:bg-gradient-secondary:hover { background: var(--vel-gradient-secondary)
}
.vel-hover\\:bg-gradient-success:hover { background: var(--vel-gradient-success)
}
.vel-hover\\:bg-gradient-danger:hover { background: var(--vel-gradient-danger)
}
.vel-hover\\:bg-gradient-warning:hover { background: var(--vel-gradient-warning)
}
.vel-hover\\:bg-gradient-info:hover { background: var(--vel-gradient-info)
}
.vel-hover\\:bg-gradient-dark:hover { background: var(--vel-gradient-dark)
}
.vel-hover\\:bg-gradient-surface:hover { background: var(--vel-gradient-surface)
}
.vel-hover\\:bg-gradient-aurora:hover { background: var(--vel-gradient-aurora)
}
.vel-hover\\:bg-gradient-sunset:hover { background: var(--vel-gradient-sunset)
}
.vel-hover\\:bg-gradient-ocean:hover { background: var(--vel-gradient-ocean)
}
.vel-hover\\:bg-gradient-cosmos:hover { background: var(--vel-gradient-cosmos)
}
.vel-hover\\:bg-gradient-midnight:hover { background: var(--vel-gradient-midnight)
}
.vel-hover\\:text-gradient-primary:hover {
  background: var(--vel-gradient-primary);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  color: transparent
}
.vel-hover\\:text-gradient-aurora:hover {
  background: var(--vel-gradient-aurora);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  color: transparent
}
.vel-hover\\:text-gradient-sunset:hover {
  background: var(--vel-gradient-sunset);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  color: transparent
}
.vel-hover\\:text-gradient-ocean:hover {
  background: var(--vel-gradient-ocean);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  color: transparent
}
.vel-hover\\:text-gradient-cosmos:hover {
  background: var(--vel-gradient-cosmos);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  color: transparent
}
.vel-hover\\:scale-95:hover { transform: scale(0.95)
}
.vel-hover\\:scale-100:hover { transform: scale(1)
}
.vel-hover\\:scale-105:hover { transform: scale(1.05)
}
.vel-hover\\:scale-110:hover { transform: scale(1.1)
}
.vel-hover\\:scale-125:hover { transform: scale(1.25)
}
.vel-hover\\:scale-150:hover { transform: scale(1.5)
}
.vel-hover\\:rotate-0:hover { transform: rotate(0deg)
}
.vel-hover\\:rotate-1:hover { transform: rotate(1deg)
}
.vel-hover\\:rotate-2:hover { transform: rotate(2deg)
}
.vel-hover\\:rotate-3:hover { transform: rotate(3deg)
}
.vel-hover\\:rotate-6:hover { transform: rotate(6deg)
}
.vel-hover\\:rotate-12:hover { transform: rotate(12deg)
}
.vel-hover\\:rotate-45:hover { transform: rotate(45deg)
}
.vel-hover\\:rotate-90:hover { transform: rotate(90deg)
}
.vel-hover\\:rotate-180:hover { transform: rotate(180deg)
}
.vel-hover\\:translate-y-0:hover { transform: translateY(0)
}
.vel-hover\\:translate-y-1:hover { transform: translateY(0.25rem)
}
.vel-hover\\:translate-y-2:hover { transform: translateY(0.5rem)
}
.vel-hover\\:translate-y-4:hover { transform: translateY(1rem)
}
.vel-hover\\:scale-0:hover { --vel-transform-scale-x: scaleX(0);    --vel-transform-scale-y: scaleY(0);    transform: var(--vel-transform-translate-x) var(--vel-transform-translate-y) var(--vel-transform-rotate) var(--vel-transform-scale-x) var(--vel-transform-scale-y) var(--vel-transform-skew-x) var(--vel-transform-skew-y)
}
.vel-hover\\:scale-50:hover { --vel-transform-scale-x: scaleX(.5);   --vel-transform-scale-y: scaleY(.5);   transform: var(--vel-transform-translate-x) var(--vel-transform-translate-y) var(--vel-transform-rotate) var(--vel-transform-scale-x) var(--vel-transform-scale-y) var(--vel-transform-skew-x) var(--vel-transform-skew-y)
}
.vel-hover\\:scale-75:hover { --vel-transform-scale-x: scaleX(.75);  --vel-transform-scale-y: scaleY(.75);  transform: var(--vel-transform-translate-x) var(--vel-transform-translate-y) var(--vel-transform-rotate) var(--vel-transform-scale-x) var(--vel-transform-scale-y) var(--vel-transform-skew-x) var(--vel-transform-skew-y)
}
.vel-hover\\:scale-90:hover { --vel-transform-scale-x: scaleX(.9);   --vel-transform-scale-y: scaleY(.9);   transform: var(--vel-transform-translate-x) var(--vel-transform-translate-y) var(--vel-transform-rotate) var(--vel-transform-scale-x) var(--vel-transform-scale-y) var(--vel-transform-skew-x) var(--vel-transform-skew-y)
}
.vel-hover\\:scale-95:hover { --vel-transform-scale-x: scaleX(.95);  --vel-transform-scale-y: scaleY(.95);  transform: var(--vel-transform-translate-x) var(--vel-transform-translate-y) var(--vel-transform-rotate) var(--vel-transform-scale-x) var(--vel-transform-scale-y) var(--vel-transform-skew-x) var(--vel-transform-skew-y)
}
.vel-hover\\:scale-100:hover { --vel-transform-scale-x: scaleX(1);    --vel-transform-scale-y: scaleY(1);    transform: var(--vel-transform-translate-x) var(--vel-transform-translate-y) var(--vel-transform-rotate) var(--vel-transform-scale-x) var(--vel-transform-scale-y) var(--vel-transform-skew-x) var(--vel-transform-skew-y)
}
.vel-hover\\:scale-105:hover { --vel-transform-scale-x: scaleX(1.05); --vel-transform-scale-y: scaleY(1.05); transform: var(--vel-transform-translate-x) var(--vel-transform-translate-y) var(--vel-transform-rotate) var(--vel-transform-scale-x) var(--vel-transform-scale-y) var(--vel-transform-skew-x) var(--vel-transform-skew-y)
}
.vel-hover\\:scale-110:hover { --vel-transform-scale-x: scaleX(1.1);  --vel-transform-scale-y: scaleY(1.1);  transform: var(--vel-transform-translate-x) var(--vel-transform-translate-y) var(--vel-transform-rotate) var(--vel-transform-scale-x) var(--vel-transform-scale-y) var(--vel-transform-skew-x) var(--vel-transform-skew-y)
}
.vel-hover\\:scale-125:hover { --vel-transform-scale-x: scaleX(1.25); --vel-transform-scale-y: scaleY(1.25); transform: var(--vel-transform-translate-x) var(--vel-transform-translate-y) var(--vel-transform-rotate) var(--vel-transform-scale-x) var(--vel-transform-scale-y) var(--vel-transform-skew-x) var(--vel-transform-skew-y)
}
.vel-hover\\:scale-150:hover { --vel-transform-scale-x: scaleX(1.5);  --vel-transform-scale-y: scaleY(1.5);  transform: var(--vel-transform-translate-x) var(--vel-transform-translate-y) var(--vel-transform-rotate) var(--vel-transform-scale-x) var(--vel-transform-scale-y) var(--vel-transform-skew-x) var(--vel-transform-skew-y)
}
.vel-hover\\:rotate-0:hover { --vel-transform-rotate: rotate(0deg);    transform: var(--vel-transform-translate-x) var(--vel-transform-translate-y) var(--vel-transform-rotate) var(--vel-transform-scale-x) var(--vel-transform-scale-y) var(--vel-transform-skew-x) var(--vel-transform-skew-y)
}
.vel-hover\\:rotate-1:hover { --vel-transform-rotate: rotate(1deg);    transform: var(--vel-transform-translate-x) var(--vel-transform-translate-y) var(--vel-transform-rotate) var(--vel-transform-scale-x) var(--vel-transform-scale-y) var(--vel-transform-skew-x) var(--vel-transform-skew-y)
}
.vel-hover\\:rotate-2:hover { --vel-transform-rotate: rotate(2deg);    transform: var(--vel-transform-translate-x) var(--vel-transform-translate-y) var(--vel-transform-rotate) var(--vel-transform-scale-x) var(--vel-transform-scale-y) var(--vel-transform-skew-x) var(--vel-transform-skew-y)
}
.vel-hover\\:rotate-3:hover { --vel-transform-rotate: rotate(3deg);    transform: var(--vel-transform-translate-x) var(--vel-transform-translate-y) var(--vel-transform-rotate) var(--vel-transform-scale-x) var(--vel-transform-scale-y) var(--vel-transform-skew-x) var(--vel-transform-skew-y)
}
.vel-hover\\:rotate-6:hover { --vel-transform-rotate: rotate(6deg);    transform: var(--vel-transform-translate-x) var(--vel-transform-translate-y) var(--vel-transform-rotate) var(--vel-transform-scale-x) var(--vel-transform-scale-y) var(--vel-transform-skew-x) var(--vel-transform-skew-y)
}
.vel-hover\\:rotate-12:hover { --vel-transform-rotate: rotate(12deg);   transform: var(--vel-transform-translate-x) var(--vel-transform-translate-y) var(--vel-transform-rotate) var(--vel-transform-scale-x) var(--vel-transform-scale-y) var(--vel-transform-skew-x) var(--vel-transform-skew-y)
}
.vel-hover\\:rotate-45:hover { --vel-transform-rotate: rotate(45deg);   transform: var(--vel-transform-translate-x) var(--vel-transform-translate-y) var(--vel-transform-rotate) var(--vel-transform-scale-x) var(--vel-transform-scale-y) var(--vel-transform-skew-x) var(--vel-transform-skew-y)
}
.vel-hover\\:rotate-90:hover { --vel-transform-rotate: rotate(90deg);   transform: var(--vel-transform-translate-x) var(--vel-transform-translate-y) var(--vel-transform-rotate) var(--vel-transform-scale-x) var(--vel-transform-scale-y) var(--vel-transform-skew-x) var(--vel-transform-skew-y)
}
.vel-hover\\:rotate-180:hover { --vel-transform-rotate: rotate(180deg);  transform: var(--vel-transform-translate-x) var(--vel-transform-translate-y) var(--vel-transform-rotate) var(--vel-transform-scale-x) var(--vel-transform-scale-y) var(--vel-transform-skew-x) var(--vel-transform-skew-y)
}
.vel-hover\\:translate-x-0:hover { --vel-transform-translate-x: translateX(0);       transform: var(--vel-transform-translate-x) var(--vel-transform-translate-y) var(--vel-transform-rotate) var(--vel-transform-scale-x) var(--vel-transform-scale-y) var(--vel-transform-skew-x) var(--vel-transform-skew-y)
}
.vel-hover\\:translate-x-px:hover { --vel-transform-translate-x: translateX(1px);     transform: var(--vel-transform-translate-x) var(--vel-transform-translate-y) var(--vel-transform-rotate) var(--vel-transform-scale-x) var(--vel-transform-scale-y) var(--vel-transform-skew-x) var(--vel-transform-skew-y)
}
.vel-hover\\:translate-x-1:hover { --vel-transform-translate-x: translateX(0.25rem); transform: var(--vel-transform-translate-x) var(--vel-transform-translate-y) var(--vel-transform-rotate) var(--vel-transform-scale-x) var(--vel-transform-scale-y) var(--vel-transform-skew-x) var(--vel-transform-skew-y)
}
.vel-hover\\:translate-x-2:hover { --vel-transform-translate-x: translateX(0.5rem);  transform: var(--vel-transform-translate-x) var(--vel-transform-translate-y) var(--vel-transform-rotate) var(--vel-transform-scale-x) var(--vel-transform-scale-y) var(--vel-transform-skew-x) var(--vel-transform-skew-y)
}
.vel-hover\\:translate-x-3:hover { --vel-transform-translate-x: translateX(0.75rem); transform: var(--vel-transform-translate-x) var(--vel-transform-translate-y) var(--vel-transform-rotate) var(--vel-transform-scale-x) var(--vel-transform-scale-y) var(--vel-transform-skew-x) var(--vel-transform-skew-y)
}
.vel-hover\\:translate-x-4:hover { --vel-transform-translate-x: translateX(1rem);    transform: var(--vel-transform-translate-x) var(--vel-transform-translate-y) var(--vel-transform-rotate) var(--vel-transform-scale-x) var(--vel-transform-scale-y) var(--vel-transform-skew-x) var(--vel-transform-skew-y)
}
.vel-hover\\:translate-x-6:hover { --vel-transform-translate-x: translateX(1.5rem);  transform: var(--vel-transform-translate-x) var(--vel-transform-translate-y) var(--vel-transform-rotate) var(--vel-transform-scale-x) var(--vel-transform-scale-y) var(--vel-transform-skew-x) var(--vel-transform-skew-y)
}
.vel-hover\\:translate-x-8:hover { --vel-transform-translate-x: translateX(2rem);    transform: var(--vel-transform-translate-x) var(--vel-transform-translate-y) var(--vel-transform-rotate) var(--vel-transform-scale-x) var(--vel-transform-scale-y) var(--vel-transform-skew-x) var(--vel-transform-skew-y)
}
.vel-hover\\:translate-x-full:hover { --vel-transform-translate-x: translateX(100%);    transform: var(--vel-transform-translate-x) var(--vel-transform-translate-y) var(--vel-transform-rotate) var(--vel-transform-scale-x) var(--vel-transform-scale-y) var(--vel-transform-skew-x) var(--vel-transform-skew-y)
}
.vel-hover\\:translate-y-0:hover { --vel-transform-translate-y: translateY(0);       transform: var(--vel-transform-translate-x) var(--vel-transform-translate-y) var(--vel-transform-rotate) var(--vel-transform-scale-x) var(--vel-transform-scale-y) var(--vel-transform-skew-x) var(--vel-transform-skew-y)
}
.vel-hover\\:translate-y-px:hover { --vel-transform-translate-y: translateY(1px);     transform: var(--vel-transform-translate-x) var(--vel-transform-translate-y) var(--vel-transform-rotate) var(--vel-transform-scale-x) var(--vel-transform-scale-y) var(--vel-transform-skew-x) var(--vel-transform-skew-y)
}
.vel-hover\\:translate-y-1:hover { --vel-transform-translate-y: translateY(0.25rem); transform: var(--vel-transform-translate-x) var(--vel-transform-translate-y) var(--vel-transform-rotate) var(--vel-transform-scale-x) var(--vel-transform-scale-y) var(--vel-transform-skew-x) var(--vel-transform-skew-y)
}
.vel-hover\\:translate-y-2:hover { --vel-transform-translate-y: translateY(0.5rem);  transform: var(--vel-transform-translate-x) var(--vel-transform-translate-y) var(--vel-transform-rotate) var(--vel-transform-scale-x) var(--vel-transform-scale-y) var(--vel-transform-skew-x) var(--vel-transform-skew-y)
}
.vel-hover\\:translate-y-3:hover { --vel-transform-translate-y: translateY(0.75rem); transform: var(--vel-transform-translate-x) var(--vel-transform-translate-y) var(--vel-transform-rotate) var(--vel-transform-scale-x) var(--vel-transform-scale-y) var(--vel-transform-skew-x) var(--vel-transform-skew-y)
}
.vel-hover\\:translate-y-4:hover { --vel-transform-translate-y: translateY(1rem);    transform: var(--vel-transform-translate-x) var(--vel-transform-translate-y) var(--vel-transform-rotate) var(--vel-transform-scale-x) var(--vel-transform-scale-y) var(--vel-transform-skew-x) var(--vel-transform-skew-y)
}
.vel-hover\\:translate-y-6:hover { --vel-transform-translate-y: translateY(1.5rem);  transform: var(--vel-transform-translate-x) var(--vel-transform-translate-y) var(--vel-transform-rotate) var(--vel-transform-scale-x) var(--vel-transform-scale-y) var(--vel-transform-skew-x) var(--vel-transform-skew-y)
}
.vel-hover\\:translate-y-8:hover { --vel-transform-translate-y: translateY(2rem);    transform: var(--vel-transform-translate-x) var(--vel-transform-translate-y) var(--vel-transform-rotate) var(--vel-transform-scale-x) var(--vel-transform-scale-y) var(--vel-transform-skew-x) var(--vel-transform-skew-y)
}
.vel-hover\\:translate-y-full:hover { --vel-transform-translate-y: translateY(100%);    transform: var(--vel-transform-translate-x) var(--vel-transform-translate-y) var(--vel-transform-rotate) var(--vel-transform-scale-x) var(--vel-transform-scale-y) var(--vel-transform-skew-x) var(--vel-transform-skew-y)
}
.vel-hover\\:ring-0:hover { --vel-ring-width: 0px;  box-shadow: var(--vel-ring-shadow)
}
.vel-hover\\:ring-1:hover { --vel-ring-width: 1px;  box-shadow: var(--vel-ring-shadow)
}
.vel-hover\\:ring-2:hover { --vel-ring-width: 2px;  box-shadow: var(--vel-ring-shadow)
}
.vel-hover\\:ring:hover { --vel-ring-width: 3px;  box-shadow: var(--vel-ring-shadow)
}
.vel-hover\\:ring-4:hover { --vel-ring-width: 4px;  box-shadow: var(--vel-ring-shadow)
}
.vel-hover\\:ring-8:hover { --vel-ring-width: 8px;  box-shadow: var(--vel-ring-shadow)
}
.vel-hover\\:ring-inset:hover { --vel-ring-shadow: inset 0 0 0 var(--vel-ring-width) var(--vel-ring-color); box-shadow: var(--vel-ring-shadow)
}
.vel-hover\\:ring-primary:hover { --vel-ring-color: rgba(124, 92, 252, 0.5)
}
.vel-hover\\:ring-success:hover { --vel-ring-color: rgba(14, 203, 129, 0.5)
}
.vel-hover\\:ring-danger:hover { --vel-ring-color: rgba(240, 65, 108, 0.5)
}
.vel-hover\\:ring-warning:hover { --vel-ring-color: rgba(255, 157, 0, 0.5)
}
.vel-hover\\:ring-info:hover { --vel-ring-color: rgba(46, 189, 229, 0.5)
}
.vel-hover\\:ring-white:hover { --vel-ring-color: rgba(255, 255, 255, 0.8)
}
.vel-hover\\:ring-black:hover { --vel-ring-color: rgba(0, 0, 0, 0.8)
}
.vel-hover\\:ring-transparent:hover { --vel-ring-color: transparent
}
.vel-hover\\:ring-current:hover { --vel-ring-color: currentColor
}
.vel-hover\\:ring-neutral-400:hover { --vel-ring-color: var(--vel-neutral-400)
}
.vel-hover\\:ring-neutral-500:hover { --vel-ring-color: var(--vel-neutral-500)
}
.vel-hover\\:ring-offset-0:hover { --vel-ring-offset-width: 0px
}
.vel-hover\\:ring-offset-1:hover { --vel-ring-offset-width: 1px
}
.vel-hover\\:ring-offset-2:hover { --vel-ring-offset-width: 2px
}
.vel-hover\\:ring-offset-4:hover { --vel-ring-offset-width: 4px
}
.vel-hover\\:ring-offset-8:hover { --vel-ring-offset-width: 8px
}
.vel-hover\\:ring-offset-transparent:hover { --vel-ring-offset-color: transparent
}
.vel-hover\\:ring-offset-white:hover { --vel-ring-offset-color: #ffffff
}
.vel-hover\\:ring-offset-black:hover { --vel-ring-offset-color: #000000
}
.vel-hover\\:ring-offset-surface:hover { --vel-ring-offset-color: var(--vel-surface-0)
}

/* Focus variants — vel-focus:* */
.vel-focus\\:text-xs:focus, .vel-focus\\:text-xs:focus-visible { font-size: var(--vel-text-xs); line-height: 1rem
}
.vel-focus\\:text-sm:focus, .vel-focus\\:text-sm:focus-visible { font-size: var(--vel-text-sm); line-height: 1.25rem
}
.vel-focus\\:text-base:focus, .vel-focus\\:text-base:focus-visible { font-size: var(--vel-text-base); line-height: 1.5rem
}
.vel-focus\\:text-lg:focus, .vel-focus\\:text-lg:focus-visible { font-size: var(--vel-text-lg); line-height: 1.75rem
}
.vel-focus\\:text-xl:focus, .vel-focus\\:text-xl:focus-visible { font-size: var(--vel-text-xl); line-height: 1.75rem
}
.vel-focus\\:text-2xl:focus, .vel-focus\\:text-2xl:focus-visible { font-size: var(--vel-text-2xl); line-height: 2rem
}
.vel-focus\\:text-3xl:focus, .vel-focus\\:text-3xl:focus-visible { font-size: var(--vel-text-3xl); line-height: 2.25rem
}
.vel-focus\\:text-4xl:focus, .vel-focus\\:text-4xl:focus-visible { font-size: var(--vel-text-4xl); line-height: 2.5rem
}
.vel-focus\\:text-5xl:focus, .vel-focus\\:text-5xl:focus-visible { font-size: var(--vel-text-5xl); line-height: 1
}
.vel-focus\\:text-6xl:focus, .vel-focus\\:text-6xl:focus-visible { font-size: var(--vel-text-6xl); line-height: 1
}
.vel-focus\\:text-7xl:focus, .vel-focus\\:text-7xl:focus-visible { font-size: var(--vel-text-7xl); line-height: 1
}
.vel-focus\\:text-8xl:focus, .vel-focus\\:text-8xl:focus-visible { font-size: var(--vel-text-8xl); line-height: 1
}
.vel-focus\\:text-9xl:focus, .vel-focus\\:text-9xl:focus-visible { font-size: var(--vel-text-9xl); line-height: 1
}
.vel-focus\\:text-left:focus, .vel-focus\\:text-left:focus-visible { text-align: left
}
.vel-focus\\:text-center:focus, .vel-focus\\:text-center:focus-visible { text-align: center
}
.vel-focus\\:text-right:focus, .vel-focus\\:text-right:focus-visible { text-align: right
}
.vel-focus\\:text-justify:focus, .vel-focus\\:text-justify:focus-visible { text-align: justify
}
.vel-focus\\:text-start:focus, .vel-focus\\:text-start:focus-visible { text-align: start
}
.vel-focus\\:text-end:focus, .vel-focus\\:text-end:focus-visible { text-align: end
}
.vel-focus\\:text-ellipsis:focus, .vel-focus\\:text-ellipsis:focus-visible { text-overflow: ellipsis
}
.vel-focus\\:text-clip:focus, .vel-focus\\:text-clip:focus-visible { text-overflow: clip
}
.vel-focus\\:text-inherit:focus, .vel-focus\\:text-inherit:focus-visible { color: inherit
}
.vel-focus\\:text-current:focus, .vel-focus\\:text-current:focus-visible { color: currentColor
}
.vel-focus\\:text-transparent:focus, .vel-focus\\:text-transparent:focus-visible { color: transparent
}
.vel-focus\\:text-white:focus, .vel-focus\\:text-white:focus-visible { color: #ffffff
}
.vel-focus\\:text-black:focus, .vel-focus\\:text-black:focus-visible { color: #000000
}
.vel-focus\\:text-primary:focus, .vel-focus\\:text-primary:focus-visible { color: var(--vel-color-primary)
}
.vel-focus\\:text-secondary:focus, .vel-focus\\:text-secondary:focus-visible { color: var(--vel-color-secondary)
}
.vel-focus\\:text-success:focus, .vel-focus\\:text-success:focus-visible { color: var(--vel-color-success)
}
.vel-focus\\:text-danger:focus, .vel-focus\\:text-danger:focus-visible { color: var(--vel-color-danger)
}
.vel-focus\\:text-warning:focus, .vel-focus\\:text-warning:focus-visible { color: var(--vel-color-warning)
}
.vel-focus\\:text-info:focus, .vel-focus\\:text-info:focus-visible { color: var(--vel-color-info)
}
.vel-focus\\:text-neutral-50:focus, .vel-focus\\:text-neutral-50:focus-visible { color: var(--vel-neutral-50)
}
.vel-focus\\:text-neutral-100:focus, .vel-focus\\:text-neutral-100:focus-visible { color: var(--vel-neutral-100)
}
.vel-focus\\:text-neutral-200:focus, .vel-focus\\:text-neutral-200:focus-visible { color: var(--vel-neutral-200)
}
.vel-focus\\:text-neutral-300:focus, .vel-focus\\:text-neutral-300:focus-visible { color: var(--vel-neutral-300)
}
.vel-focus\\:text-neutral-400:focus, .vel-focus\\:text-neutral-400:focus-visible { color: var(--vel-neutral-400)
}
.vel-focus\\:text-neutral-500:focus, .vel-focus\\:text-neutral-500:focus-visible { color: var(--vel-neutral-500)
}
.vel-focus\\:text-neutral-600:focus, .vel-focus\\:text-neutral-600:focus-visible { color: var(--vel-neutral-600)
}
.vel-focus\\:text-neutral-700:focus, .vel-focus\\:text-neutral-700:focus-visible { color: var(--vel-neutral-700)
}
.vel-focus\\:text-neutral-800:focus, .vel-focus\\:text-neutral-800:focus-visible { color: var(--vel-neutral-800)
}
.vel-focus\\:text-neutral-900:focus, .vel-focus\\:text-neutral-900:focus-visible { color: var(--vel-neutral-900)
}
.vel-focus\\:text-neutral-950:focus, .vel-focus\\:text-neutral-950:focus-visible { color: var(--vel-neutral-950)
}
.vel-focus\\:bg-inherit:focus, .vel-focus\\:bg-inherit:focus-visible { background-color: inherit
}
.vel-focus\\:bg-current:focus, .vel-focus\\:bg-current:focus-visible { background-color: currentColor
}
.vel-focus\\:bg-transparent:focus, .vel-focus\\:bg-transparent:focus-visible { background-color: transparent
}
.vel-focus\\:bg-white:focus, .vel-focus\\:bg-white:focus-visible { background-color: #ffffff
}
.vel-focus\\:bg-black:focus, .vel-focus\\:bg-black:focus-visible { background-color: #000000
}
.vel-focus\\:bg-primary:focus, .vel-focus\\:bg-primary:focus-visible { background-color: var(--vel-color-primary)
}
.vel-focus\\:bg-secondary:focus, .vel-focus\\:bg-secondary:focus-visible { background-color: var(--vel-color-secondary)
}
.vel-focus\\:bg-success:focus, .vel-focus\\:bg-success:focus-visible { background-color: var(--vel-color-success)
}
.vel-focus\\:bg-danger:focus, .vel-focus\\:bg-danger:focus-visible { background-color: var(--vel-color-danger)
}
.vel-focus\\:bg-warning:focus, .vel-focus\\:bg-warning:focus-visible { background-color: var(--vel-color-warning)
}
.vel-focus\\:bg-info:focus, .vel-focus\\:bg-info:focus-visible { background-color: var(--vel-color-info)
}
.vel-focus\\:bg-primary-light:focus, .vel-focus\\:bg-primary-light:focus-visible { background-color: var(--vel-color-primary-light)
}
.vel-focus\\:bg-success-light:focus, .vel-focus\\:bg-success-light:focus-visible { background-color: var(--vel-color-success-light)
}
.vel-focus\\:bg-danger-light:focus, .vel-focus\\:bg-danger-light:focus-visible { background-color: var(--vel-color-danger-light)
}
.vel-focus\\:bg-warning-light:focus, .vel-focus\\:bg-warning-light:focus-visible { background-color: var(--vel-color-warning-light)
}
.vel-focus\\:bg-info-light:focus, .vel-focus\\:bg-info-light:focus-visible { background-color: var(--vel-color-info-light)
}
.vel-focus\\:bg-neutral-50:focus, .vel-focus\\:bg-neutral-50:focus-visible { background-color: var(--vel-neutral-50)
}
.vel-focus\\:bg-neutral-100:focus, .vel-focus\\:bg-neutral-100:focus-visible { background-color: var(--vel-neutral-100)
}
.vel-focus\\:bg-neutral-200:focus, .vel-focus\\:bg-neutral-200:focus-visible { background-color: var(--vel-neutral-200)
}
.vel-focus\\:bg-neutral-300:focus, .vel-focus\\:bg-neutral-300:focus-visible { background-color: var(--vel-neutral-300)
}
.vel-focus\\:bg-neutral-400:focus, .vel-focus\\:bg-neutral-400:focus-visible { background-color: var(--vel-neutral-400)
}
.vel-focus\\:bg-neutral-500:focus, .vel-focus\\:bg-neutral-500:focus-visible { background-color: var(--vel-neutral-500)
}
.vel-focus\\:bg-neutral-600:focus, .vel-focus\\:bg-neutral-600:focus-visible { background-color: var(--vel-neutral-600)
}
.vel-focus\\:bg-neutral-700:focus, .vel-focus\\:bg-neutral-700:focus-visible { background-color: var(--vel-neutral-700)
}
.vel-focus\\:bg-neutral-800:focus, .vel-focus\\:bg-neutral-800:focus-visible { background-color: var(--vel-neutral-800)
}
.vel-focus\\:bg-neutral-900:focus, .vel-focus\\:bg-neutral-900:focus-visible { background-color: var(--vel-neutral-900)
}
.vel-focus\\:bg-neutral-950:focus, .vel-focus\\:bg-neutral-950:focus-visible { background-color: var(--vel-neutral-950)
}
.vel-focus\\:bg-opacity-0:focus, .vel-focus\\:bg-opacity-0:focus-visible { --vel-bg-opacity: 0
}
.vel-focus\\:bg-opacity-25:focus, .vel-focus\\:bg-opacity-25:focus-visible { --vel-bg-opacity: 0.25
}
.vel-focus\\:bg-opacity-50:focus, .vel-focus\\:bg-opacity-50:focus-visible { --vel-bg-opacity: 0.5
}
.vel-focus\\:bg-opacity-75:focus, .vel-focus\\:bg-opacity-75:focus-visible { --vel-bg-opacity: 0.75
}
.vel-focus\\:bg-opacity-100:focus, .vel-focus\\:bg-opacity-100:focus-visible { --vel-bg-opacity: 1
}
.vel-focus\\:border-inherit:focus, .vel-focus\\:border-inherit:focus-visible { border-color: inherit
}
.vel-focus\\:border-current:focus, .vel-focus\\:border-current:focus-visible { border-color: currentColor
}
.vel-focus\\:border-transparent:focus, .vel-focus\\:border-transparent:focus-visible { border-color: transparent
}
.vel-focus\\:border-white:focus, .vel-focus\\:border-white:focus-visible { border-color: #ffffff
}
.vel-focus\\:border-black:focus, .vel-focus\\:border-black:focus-visible { border-color: #000000
}
.vel-focus\\:border-primary:focus, .vel-focus\\:border-primary:focus-visible { border-color: var(--vel-color-primary)
}
.vel-focus\\:border-secondary:focus, .vel-focus\\:border-secondary:focus-visible { border-color: var(--vel-color-secondary)
}
.vel-focus\\:border-success:focus, .vel-focus\\:border-success:focus-visible { border-color: var(--vel-color-success)
}
.vel-focus\\:border-danger:focus, .vel-focus\\:border-danger:focus-visible { border-color: var(--vel-color-danger)
}
.vel-focus\\:border-warning:focus, .vel-focus\\:border-warning:focus-visible { border-color: var(--vel-color-warning)
}
.vel-focus\\:border-info:focus, .vel-focus\\:border-info:focus-visible { border-color: var(--vel-color-info)
}
.vel-focus\\:border-neutral-100:focus, .vel-focus\\:border-neutral-100:focus-visible { border-color: var(--vel-neutral-100)
}
.vel-focus\\:border-neutral-200:focus, .vel-focus\\:border-neutral-200:focus-visible { border-color: var(--vel-neutral-200)
}
.vel-focus\\:border-neutral-300:focus, .vel-focus\\:border-neutral-300:focus-visible { border-color: var(--vel-neutral-300)
}
.vel-focus\\:border-neutral-400:focus, .vel-focus\\:border-neutral-400:focus-visible { border-color: var(--vel-neutral-400)
}
.vel-focus\\:border-neutral-500:focus, .vel-focus\\:border-neutral-500:focus-visible { border-color: var(--vel-neutral-500)
}
.vel-focus\\:border-neutral-600:focus, .vel-focus\\:border-neutral-600:focus-visible { border-color: var(--vel-neutral-600)
}
.vel-focus\\:border-neutral-700:focus, .vel-focus\\:border-neutral-700:focus-visible { border-color: var(--vel-neutral-700)
}
.vel-focus\\:border-neutral-800:focus, .vel-focus\\:border-neutral-800:focus-visible { border-color: var(--vel-neutral-800)
}
.vel-focus\\:border-neutral-900:focus, .vel-focus\\:border-neutral-900:focus-visible { border-color: var(--vel-neutral-900)
}
.vel-focus\\:bg-auto:focus, .vel-focus\\:bg-auto:focus-visible { background-size: auto
}
.vel-focus\\:bg-cover:focus, .vel-focus\\:bg-cover:focus-visible { background-size: cover
}
.vel-focus\\:bg-contain:focus, .vel-focus\\:bg-contain:focus-visible { background-size: contain
}
.vel-focus\\:bg-center:focus, .vel-focus\\:bg-center:focus-visible { background-position: center
}
.vel-focus\\:bg-top:focus, .vel-focus\\:bg-top:focus-visible { background-position: top
}
.vel-focus\\:bg-right:focus, .vel-focus\\:bg-right:focus-visible { background-position: right
}
.vel-focus\\:bg-bottom:focus, .vel-focus\\:bg-bottom:focus-visible { background-position: bottom
}
.vel-focus\\:bg-left:focus, .vel-focus\\:bg-left:focus-visible { background-position: left
}
.vel-focus\\:bg-repeat:focus, .vel-focus\\:bg-repeat:focus-visible { background-repeat: repeat
}
.vel-focus\\:bg-no-repeat:focus, .vel-focus\\:bg-no-repeat:focus-visible { background-repeat: no-repeat
}
.vel-focus\\:bg-repeat-x:focus, .vel-focus\\:bg-repeat-x:focus-visible { background-repeat: repeat-x
}
.vel-focus\\:bg-repeat-y:focus, .vel-focus\\:bg-repeat-y:focus-visible { background-repeat: repeat-y
}
.vel-focus\\:bg-fixed:focus, .vel-focus\\:bg-fixed:focus-visible { background-attachment: fixed
}
.vel-focus\\:bg-local:focus, .vel-focus\\:bg-local:focus-visible { background-attachment: local
}
.vel-focus\\:bg-scroll:focus, .vel-focus\\:bg-scroll:focus-visible { background-attachment: scroll
}
.vel-focus\\:bg-surface-0:focus, .vel-focus\\:bg-surface-0:focus-visible { background-color: var(--vel-surface-0)
}
.vel-focus\\:bg-surface-1:focus, .vel-focus\\:bg-surface-1:focus-visible { background-color: var(--vel-surface-1)
}
.vel-focus\\:bg-surface-2:focus, .vel-focus\\:bg-surface-2:focus-visible { background-color: var(--vel-surface-2)
}
.vel-focus\\:bg-surface-3:focus, .vel-focus\\:bg-surface-3:focus-visible { background-color: var(--vel-surface-3)
}
.vel-focus\\:bg-surface-4:focus, .vel-focus\\:bg-surface-4:focus-visible { background-color: var(--vel-surface-4)
}
.vel-focus\\:text-primary-50:focus, .vel-focus\\:text-primary-50:focus-visible { color: var(--vel-primary-50)
}
.vel-focus\\:text-primary-100:focus, .vel-focus\\:text-primary-100:focus-visible { color: var(--vel-primary-100)
}
.vel-focus\\:text-primary-200:focus, .vel-focus\\:text-primary-200:focus-visible { color: var(--vel-primary-200)
}
.vel-focus\\:text-primary-300:focus, .vel-focus\\:text-primary-300:focus-visible { color: var(--vel-primary-300)
}
.vel-focus\\:text-primary-400:focus, .vel-focus\\:text-primary-400:focus-visible { color: var(--vel-primary-400)
}
.vel-focus\\:text-primary-500:focus, .vel-focus\\:text-primary-500:focus-visible { color: var(--vel-primary-500)
}
.vel-focus\\:text-primary-600:focus, .vel-focus\\:text-primary-600:focus-visible { color: var(--vel-primary-600)
}
.vel-focus\\:text-primary-700:focus, .vel-focus\\:text-primary-700:focus-visible { color: var(--vel-primary-700)
}
.vel-focus\\:text-primary-800:focus, .vel-focus\\:text-primary-800:focus-visible { color: var(--vel-primary-800)
}
.vel-focus\\:text-primary-900:focus, .vel-focus\\:text-primary-900:focus-visible { color: var(--vel-primary-900)
}
.vel-focus\\:text-primary-950:focus, .vel-focus\\:text-primary-950:focus-visible { color: var(--vel-primary-950)
}
.vel-focus\\:bg-primary-50:focus, .vel-focus\\:bg-primary-50:focus-visible { background-color: var(--vel-primary-50)
}
.vel-focus\\:bg-primary-100:focus, .vel-focus\\:bg-primary-100:focus-visible { background-color: var(--vel-primary-100)
}
.vel-focus\\:bg-primary-200:focus, .vel-focus\\:bg-primary-200:focus-visible { background-color: var(--vel-primary-200)
}
.vel-focus\\:bg-primary-300:focus, .vel-focus\\:bg-primary-300:focus-visible { background-color: var(--vel-primary-300)
}
.vel-focus\\:bg-primary-400:focus, .vel-focus\\:bg-primary-400:focus-visible { background-color: var(--vel-primary-400)
}
.vel-focus\\:bg-primary-500:focus, .vel-focus\\:bg-primary-500:focus-visible { background-color: var(--vel-primary-500)
}
.vel-focus\\:bg-primary-600:focus, .vel-focus\\:bg-primary-600:focus-visible { background-color: var(--vel-primary-600)
}
.vel-focus\\:bg-primary-700:focus, .vel-focus\\:bg-primary-700:focus-visible { background-color: var(--vel-primary-700)
}
.vel-focus\\:bg-primary-800:focus, .vel-focus\\:bg-primary-800:focus-visible { background-color: var(--vel-primary-800)
}
.vel-focus\\:bg-primary-900:focus, .vel-focus\\:bg-primary-900:focus-visible { background-color: var(--vel-primary-900)
}
.vel-focus\\:bg-primary-950:focus, .vel-focus\\:bg-primary-950:focus-visible { background-color: var(--vel-primary-950)
}
.vel-focus\\:text-success-50:focus, .vel-focus\\:text-success-50:focus-visible { color: var(--vel-success-50)
}
.vel-focus\\:text-success-100:focus, .vel-focus\\:text-success-100:focus-visible { color: var(--vel-success-100)
}
.vel-focus\\:text-success-200:focus, .vel-focus\\:text-success-200:focus-visible { color: var(--vel-success-200)
}
.vel-focus\\:text-success-300:focus, .vel-focus\\:text-success-300:focus-visible { color: var(--vel-success-300)
}
.vel-focus\\:text-success-400:focus, .vel-focus\\:text-success-400:focus-visible { color: var(--vel-success-400)
}
.vel-focus\\:text-success-500:focus, .vel-focus\\:text-success-500:focus-visible { color: var(--vel-success-500)
}
.vel-focus\\:text-success-600:focus, .vel-focus\\:text-success-600:focus-visible { color: var(--vel-success-600)
}
.vel-focus\\:text-success-700:focus, .vel-focus\\:text-success-700:focus-visible { color: var(--vel-success-700)
}
.vel-focus\\:bg-success-50:focus, .vel-focus\\:bg-success-50:focus-visible { background-color: var(--vel-success-50)
}
.vel-focus\\:bg-success-100:focus, .vel-focus\\:bg-success-100:focus-visible { background-color: var(--vel-success-100)
}
.vel-focus\\:bg-success-300:focus, .vel-focus\\:bg-success-300:focus-visible { background-color: var(--vel-success-300)
}
.vel-focus\\:bg-success-400:focus, .vel-focus\\:bg-success-400:focus-visible { background-color: var(--vel-success-400)
}
.vel-focus\\:bg-success-500:focus, .vel-focus\\:bg-success-500:focus-visible { background-color: var(--vel-success-500)
}
.vel-focus\\:bg-success-700:focus, .vel-focus\\:bg-success-700:focus-visible { background-color: var(--vel-success-700)
}
.vel-focus\\:bg-success-900:focus, .vel-focus\\:bg-success-900:focus-visible { background-color: var(--vel-success-900)
}
.vel-focus\\:text-danger-50:focus, .vel-focus\\:text-danger-50:focus-visible { color: var(--vel-danger-50)
}
.vel-focus\\:text-danger-100:focus, .vel-focus\\:text-danger-100:focus-visible { color: var(--vel-danger-100)
}
.vel-focus\\:text-danger-300:focus, .vel-focus\\:text-danger-300:focus-visible { color: var(--vel-danger-300)
}
.vel-focus\\:text-danger-400:focus, .vel-focus\\:text-danger-400:focus-visible { color: var(--vel-danger-400)
}
.vel-focus\\:text-danger-500:focus, .vel-focus\\:text-danger-500:focus-visible { color: var(--vel-danger-500)
}
.vel-focus\\:text-danger-600:focus, .vel-focus\\:text-danger-600:focus-visible { color: var(--vel-danger-600)
}
.vel-focus\\:text-danger-700:focus, .vel-focus\\:text-danger-700:focus-visible { color: var(--vel-danger-700)
}
.vel-focus\\:bg-danger-50:focus, .vel-focus\\:bg-danger-50:focus-visible { background-color: var(--vel-danger-50)
}
.vel-focus\\:bg-danger-100:focus, .vel-focus\\:bg-danger-100:focus-visible { background-color: var(--vel-danger-100)
}
.vel-focus\\:bg-danger-300:focus, .vel-focus\\:bg-danger-300:focus-visible { background-color: var(--vel-danger-300)
}
.vel-focus\\:bg-danger-400:focus, .vel-focus\\:bg-danger-400:focus-visible { background-color: var(--vel-danger-400)
}
.vel-focus\\:bg-danger-500:focus, .vel-focus\\:bg-danger-500:focus-visible { background-color: var(--vel-danger-500)
}
.vel-focus\\:bg-danger-700:focus, .vel-focus\\:bg-danger-700:focus-visible { background-color: var(--vel-danger-700)
}
.vel-focus\\:bg-danger-900:focus, .vel-focus\\:bg-danger-900:focus-visible { background-color: var(--vel-danger-900)
}
.vel-focus\\:text-warning-300:focus, .vel-focus\\:text-warning-300:focus-visible { color: var(--vel-warning-300)
}
.vel-focus\\:text-warning-400:focus, .vel-focus\\:text-warning-400:focus-visible { color: var(--vel-warning-400)
}
.vel-focus\\:text-warning-500:focus, .vel-focus\\:text-warning-500:focus-visible { color: var(--vel-warning-500)
}
.vel-focus\\:text-warning-600:focus, .vel-focus\\:text-warning-600:focus-visible { color: var(--vel-warning-600)
}
.vel-focus\\:bg-warning-100:focus, .vel-focus\\:bg-warning-100:focus-visible { background-color: var(--vel-warning-100)
}
.vel-focus\\:bg-warning-300:focus, .vel-focus\\:bg-warning-300:focus-visible { background-color: var(--vel-warning-300)
}
.vel-focus\\:bg-warning-400:focus, .vel-focus\\:bg-warning-400:focus-visible { background-color: var(--vel-warning-400)
}
.vel-focus\\:bg-warning-500:focus, .vel-focus\\:bg-warning-500:focus-visible { background-color: var(--vel-warning-500)
}
.vel-focus\\:bg-warning-900:focus, .vel-focus\\:bg-warning-900:focus-visible { background-color: var(--vel-warning-900)
}
.vel-focus\\:text-info-300:focus, .vel-focus\\:text-info-300:focus-visible { color: var(--vel-info-300)
}
.vel-focus\\:text-info-400:focus, .vel-focus\\:text-info-400:focus-visible { color: var(--vel-info-400)
}
.vel-focus\\:text-info-500:focus, .vel-focus\\:text-info-500:focus-visible { color: var(--vel-info-500)
}
.vel-focus\\:text-info-600:focus, .vel-focus\\:text-info-600:focus-visible { color: var(--vel-info-600)
}
.vel-focus\\:bg-info-100:focus, .vel-focus\\:bg-info-100:focus-visible { background-color: var(--vel-info-100)
}
.vel-focus\\:bg-info-300:focus, .vel-focus\\:bg-info-300:focus-visible { background-color: var(--vel-info-300)
}
.vel-focus\\:bg-info-400:focus, .vel-focus\\:bg-info-400:focus-visible { background-color: var(--vel-info-400)
}
.vel-focus\\:bg-info-500:focus, .vel-focus\\:bg-info-500:focus-visible { background-color: var(--vel-info-500)
}
.vel-focus\\:bg-info-900:focus, .vel-focus\\:bg-info-900:focus-visible { background-color: var(--vel-info-900)
}
.vel-focus\\:text-body:focus, .vel-focus\\:text-body:focus-visible { color: var(--vel-color-text)
}
.vel-focus\\:text-muted:focus, .vel-focus\\:text-muted:focus-visible { color: var(--vel-color-muted)
}
.vel-focus\\:border-0:focus, .vel-focus\\:border-0:focus-visible { border-width: 0px
}
.vel-focus\\:border-2:focus, .vel-focus\\:border-2:focus-visible { border-width: 2px
}
.vel-focus\\:border-4:focus, .vel-focus\\:border-4:focus-visible { border-width: 4px
}
.vel-focus\\:border-8:focus, .vel-focus\\:border-8:focus-visible { border-width: 8px
}
.vel-focus\\:border-t-0:focus, .vel-focus\\:border-t-0:focus-visible { border-top-width: 0px
}
.vel-focus\\:border-t:focus, .vel-focus\\:border-t:focus-visible { border-top-width: 1px
}
.vel-focus\\:border-t-2:focus, .vel-focus\\:border-t-2:focus-visible { border-top-width: 2px
}
.vel-focus\\:border-t-4:focus, .vel-focus\\:border-t-4:focus-visible { border-top-width: 4px
}
.vel-focus\\:border-r-0:focus, .vel-focus\\:border-r-0:focus-visible { border-right-width: 0px
}
.vel-focus\\:border-r:focus, .vel-focus\\:border-r:focus-visible { border-right-width: 1px
}
.vel-focus\\:border-r-2:focus, .vel-focus\\:border-r-2:focus-visible { border-right-width: 2px
}
.vel-focus\\:border-r-4:focus, .vel-focus\\:border-r-4:focus-visible { border-right-width: 4px
}
.vel-focus\\:border-b-0:focus, .vel-focus\\:border-b-0:focus-visible { border-bottom-width: 0px
}
.vel-focus\\:border-b:focus, .vel-focus\\:border-b:focus-visible { border-bottom-width: 1px
}
.vel-focus\\:border-b-2:focus, .vel-focus\\:border-b-2:focus-visible { border-bottom-width: 2px
}
.vel-focus\\:border-b-4:focus, .vel-focus\\:border-b-4:focus-visible { border-bottom-width: 4px
}
.vel-focus\\:border-l-0:focus, .vel-focus\\:border-l-0:focus-visible { border-left-width: 0px
}
.vel-focus\\:border-l:focus, .vel-focus\\:border-l:focus-visible { border-left-width: 1px
}
.vel-focus\\:border-l-2:focus, .vel-focus\\:border-l-2:focus-visible { border-left-width: 2px
}
.vel-focus\\:border-l-4:focus, .vel-focus\\:border-l-4:focus-visible { border-left-width: 4px
}
.vel-focus\\:border-x-0:focus, .vel-focus\\:border-x-0:focus-visible { border-left-width: 0px; border-right-width: 0px
}
.vel-focus\\:border-x:focus, .vel-focus\\:border-x:focus-visible { border-left-width: 1px; border-right-width: 1px
}
.vel-focus\\:border-x-2:focus, .vel-focus\\:border-x-2:focus-visible { border-left-width: 2px; border-right-width: 2px
}
.vel-focus\\:border-y-0:focus, .vel-focus\\:border-y-0:focus-visible { border-top-width: 0px; border-bottom-width: 0px
}
.vel-focus\\:border-y:focus, .vel-focus\\:border-y:focus-visible { border-top-width: 1px; border-bottom-width: 1px
}
.vel-focus\\:border-y-2:focus, .vel-focus\\:border-y-2:focus-visible { border-top-width: 2px; border-bottom-width: 2px
}
.vel-focus\\:border-solid:focus, .vel-focus\\:border-solid:focus-visible { border-style: solid
}
.vel-focus\\:border-dashed:focus, .vel-focus\\:border-dashed:focus-visible { border-style: dashed
}
.vel-focus\\:border-dotted:focus, .vel-focus\\:border-dotted:focus-visible { border-style: dotted
}
.vel-focus\\:border-double:focus, .vel-focus\\:border-double:focus-visible { border-style: double
}
.vel-focus\\:border-hidden:focus, .vel-focus\\:border-hidden:focus-visible { border-style: hidden
}
.vel-focus\\:border-none:focus, .vel-focus\\:border-none:focus-visible { border-style: none
}
.vel-focus\\:outline-none:focus, .vel-focus\\:outline-none:focus-visible { outline: 2px solid transparent; outline-offset: 2px
}
.vel-focus\\:outline:focus, .vel-focus\\:outline:focus-visible { outline-style: solid
}
.vel-focus\\:outline-dashed:focus, .vel-focus\\:outline-dashed:focus-visible { outline-style: dashed
}
.vel-focus\\:outline-dotted:focus, .vel-focus\\:outline-dotted:focus-visible { outline-style: dotted
}
.vel-focus\\:outline-0:focus, .vel-focus\\:outline-0:focus-visible { outline-width: 0px
}
.vel-focus\\:outline-1:focus, .vel-focus\\:outline-1:focus-visible { outline-width: 1px
}
.vel-focus\\:outline-2:focus, .vel-focus\\:outline-2:focus-visible { outline-width: 2px
}
.vel-focus\\:outline-4:focus, .vel-focus\\:outline-4:focus-visible { outline-width: 4px
}
.vel-focus\\:outline-8:focus, .vel-focus\\:outline-8:focus-visible { outline-width: 8px
}
.vel-focus\\:outline-offset-0:focus, .vel-focus\\:outline-offset-0:focus-visible { outline-offset: 0px
}
.vel-focus\\:outline-offset-1:focus, .vel-focus\\:outline-offset-1:focus-visible { outline-offset: 1px
}
.vel-focus\\:outline-offset-2:focus, .vel-focus\\:outline-offset-2:focus-visible { outline-offset: 2px
}
.vel-focus\\:outline-offset-4:focus, .vel-focus\\:outline-offset-4:focus-visible { outline-offset: 4px
}
.vel-focus\\:outline-offset-8:focus, .vel-focus\\:outline-offset-8:focus-visible { outline-offset: 8px
}
.vel-focus\\:ring:focus, .vel-focus\\:ring:focus-visible {
  box-shadow: var(--vel-ring-primary)
}
.vel-focus\\:ring-primary:focus, .vel-focus\\:ring-primary:focus-visible { box-shadow: var(--vel-ring-primary)
}
.vel-focus\\:ring-success:focus, .vel-focus\\:ring-success:focus-visible { box-shadow: var(--vel-ring-success)
}
.vel-focus\\:ring-danger:focus, .vel-focus\\:ring-danger:focus-visible { box-shadow: var(--vel-ring-danger)
}
.vel-focus\\:ring-warning:focus, .vel-focus\\:ring-warning:focus-visible { box-shadow: var(--vel-ring-warning)
}
.vel-focus\\:ring-info:focus, .vel-focus\\:ring-info:focus-visible { box-shadow: var(--vel-ring-info)
}
.vel-focus\\:ring-neutral:focus, .vel-focus\\:ring-neutral:focus-visible { box-shadow: 0 0 0 3px var(--vel-neutral-400)
}
.vel-focus\\:shadow-sm:focus, .vel-focus\\:shadow-sm:focus-visible { box-shadow: var(--vel-shadow-sm)
}
.vel-focus\\:shadow:focus, .vel-focus\\:shadow:focus-visible { box-shadow: var(--vel-shadow)
}
.vel-focus\\:shadow-md:focus, .vel-focus\\:shadow-md:focus-visible { box-shadow: var(--vel-shadow-md)
}
.vel-focus\\:shadow-lg:focus, .vel-focus\\:shadow-lg:focus-visible { box-shadow: var(--vel-shadow-lg)
}
.vel-focus\\:shadow-xl:focus, .vel-focus\\:shadow-xl:focus-visible { box-shadow: var(--vel-shadow-xl)
}
.vel-focus\\:shadow-2xl:focus, .vel-focus\\:shadow-2xl:focus-visible { box-shadow: var(--vel-shadow-2xl)
}
.vel-focus\\:shadow-inner:focus, .vel-focus\\:shadow-inner:focus-visible { box-shadow: var(--vel-shadow-inner)
}
.vel-focus\\:shadow-none:focus, .vel-focus\\:shadow-none:focus-visible { box-shadow: var(--vel-shadow-none)
}
.vel-focus\\:bg-gradient-primary:focus, .vel-focus\\:bg-gradient-primary:focus-visible { background: var(--vel-gradient-primary)
}
.vel-focus\\:bg-gradient-secondary:focus, .vel-focus\\:bg-gradient-secondary:focus-visible { background: var(--vel-gradient-secondary)
}
.vel-focus\\:bg-gradient-success:focus, .vel-focus\\:bg-gradient-success:focus-visible { background: var(--vel-gradient-success)
}
.vel-focus\\:bg-gradient-danger:focus, .vel-focus\\:bg-gradient-danger:focus-visible { background: var(--vel-gradient-danger)
}
.vel-focus\\:bg-gradient-warning:focus, .vel-focus\\:bg-gradient-warning:focus-visible { background: var(--vel-gradient-warning)
}
.vel-focus\\:bg-gradient-info:focus, .vel-focus\\:bg-gradient-info:focus-visible { background: var(--vel-gradient-info)
}
.vel-focus\\:bg-gradient-dark:focus, .vel-focus\\:bg-gradient-dark:focus-visible { background: var(--vel-gradient-dark)
}
.vel-focus\\:bg-gradient-surface:focus, .vel-focus\\:bg-gradient-surface:focus-visible { background: var(--vel-gradient-surface)
}
.vel-focus\\:bg-gradient-aurora:focus, .vel-focus\\:bg-gradient-aurora:focus-visible { background: var(--vel-gradient-aurora)
}
.vel-focus\\:bg-gradient-sunset:focus, .vel-focus\\:bg-gradient-sunset:focus-visible { background: var(--vel-gradient-sunset)
}
.vel-focus\\:bg-gradient-ocean:focus, .vel-focus\\:bg-gradient-ocean:focus-visible { background: var(--vel-gradient-ocean)
}
.vel-focus\\:bg-gradient-cosmos:focus, .vel-focus\\:bg-gradient-cosmos:focus-visible { background: var(--vel-gradient-cosmos)
}
.vel-focus\\:bg-gradient-midnight:focus, .vel-focus\\:bg-gradient-midnight:focus-visible { background: var(--vel-gradient-midnight)
}
.vel-focus\\:text-gradient-primary:focus, .vel-focus\\:text-gradient-primary:focus-visible {
  background: var(--vel-gradient-primary);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  color: transparent
}
.vel-focus\\:text-gradient-aurora:focus, .vel-focus\\:text-gradient-aurora:focus-visible {
  background: var(--vel-gradient-aurora);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  color: transparent
}
.vel-focus\\:text-gradient-sunset:focus, .vel-focus\\:text-gradient-sunset:focus-visible {
  background: var(--vel-gradient-sunset);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  color: transparent
}
.vel-focus\\:text-gradient-ocean:focus, .vel-focus\\:text-gradient-ocean:focus-visible {
  background: var(--vel-gradient-ocean);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  color: transparent
}
.vel-focus\\:text-gradient-cosmos:focus, .vel-focus\\:text-gradient-cosmos:focus-visible {
  background: var(--vel-gradient-cosmos);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  color: transparent
}
.vel-focus\\:ring-0:focus, .vel-focus\\:ring-0:focus-visible { --vel-ring-width: 0px;  box-shadow: var(--vel-ring-shadow)
}
.vel-focus\\:ring-1:focus, .vel-focus\\:ring-1:focus-visible { --vel-ring-width: 1px;  box-shadow: var(--vel-ring-shadow)
}
.vel-focus\\:ring-2:focus, .vel-focus\\:ring-2:focus-visible { --vel-ring-width: 2px;  box-shadow: var(--vel-ring-shadow)
}
.vel-focus\\:ring:focus, .vel-focus\\:ring:focus-visible { --vel-ring-width: 3px;  box-shadow: var(--vel-ring-shadow)
}
.vel-focus\\:ring-4:focus, .vel-focus\\:ring-4:focus-visible { --vel-ring-width: 4px;  box-shadow: var(--vel-ring-shadow)
}
.vel-focus\\:ring-8:focus, .vel-focus\\:ring-8:focus-visible { --vel-ring-width: 8px;  box-shadow: var(--vel-ring-shadow)
}
.vel-focus\\:ring-inset:focus, .vel-focus\\:ring-inset:focus-visible { --vel-ring-shadow: inset 0 0 0 var(--vel-ring-width) var(--vel-ring-color); box-shadow: var(--vel-ring-shadow)
}
.vel-focus\\:ring-primary:focus, .vel-focus\\:ring-primary:focus-visible { --vel-ring-color: rgba(124, 92, 252, 0.5)
}
.vel-focus\\:ring-success:focus, .vel-focus\\:ring-success:focus-visible { --vel-ring-color: rgba(14, 203, 129, 0.5)
}
.vel-focus\\:ring-danger:focus, .vel-focus\\:ring-danger:focus-visible { --vel-ring-color: rgba(240, 65, 108, 0.5)
}
.vel-focus\\:ring-warning:focus, .vel-focus\\:ring-warning:focus-visible { --vel-ring-color: rgba(255, 157, 0, 0.5)
}
.vel-focus\\:ring-info:focus, .vel-focus\\:ring-info:focus-visible { --vel-ring-color: rgba(46, 189, 229, 0.5)
}
.vel-focus\\:ring-white:focus, .vel-focus\\:ring-white:focus-visible { --vel-ring-color: rgba(255, 255, 255, 0.8)
}
.vel-focus\\:ring-black:focus, .vel-focus\\:ring-black:focus-visible { --vel-ring-color: rgba(0, 0, 0, 0.8)
}
.vel-focus\\:ring-transparent:focus, .vel-focus\\:ring-transparent:focus-visible { --vel-ring-color: transparent
}
.vel-focus\\:ring-current:focus, .vel-focus\\:ring-current:focus-visible { --vel-ring-color: currentColor
}
.vel-focus\\:ring-neutral-400:focus, .vel-focus\\:ring-neutral-400:focus-visible { --vel-ring-color: var(--vel-neutral-400)
}
.vel-focus\\:ring-neutral-500:focus, .vel-focus\\:ring-neutral-500:focus-visible { --vel-ring-color: var(--vel-neutral-500)
}
.vel-focus\\:ring-offset-0:focus, .vel-focus\\:ring-offset-0:focus-visible { --vel-ring-offset-width: 0px
}
.vel-focus\\:ring-offset-1:focus, .vel-focus\\:ring-offset-1:focus-visible { --vel-ring-offset-width: 1px
}
.vel-focus\\:ring-offset-2:focus, .vel-focus\\:ring-offset-2:focus-visible { --vel-ring-offset-width: 2px
}
.vel-focus\\:ring-offset-4:focus, .vel-focus\\:ring-offset-4:focus-visible { --vel-ring-offset-width: 4px
}
.vel-focus\\:ring-offset-8:focus, .vel-focus\\:ring-offset-8:focus-visible { --vel-ring-offset-width: 8px
}
.vel-focus\\:ring-offset-transparent:focus, .vel-focus\\:ring-offset-transparent:focus-visible { --vel-ring-offset-color: transparent
}
.vel-focus\\:ring-offset-white:focus, .vel-focus\\:ring-offset-white:focus-visible { --vel-ring-offset-color: #ffffff
}
.vel-focus\\:ring-offset-black:focus, .vel-focus\\:ring-offset-black:focus-visible { --vel-ring-offset-color: #000000
}
.vel-focus\\:ring-offset-surface:focus, .vel-focus\\:ring-offset-surface:focus-visible { --vel-ring-offset-color: var(--vel-surface-0)
}

/* Active variants — vel-active:* */
.vel-active\\:bg-inherit:active { background-color: inherit
}
.vel-active\\:bg-current:active { background-color: currentColor
}
.vel-active\\:bg-transparent:active { background-color: transparent
}
.vel-active\\:bg-white:active { background-color: #ffffff
}
.vel-active\\:bg-black:active { background-color: #000000
}
.vel-active\\:bg-primary:active { background-color: var(--vel-color-primary)
}
.vel-active\\:bg-secondary:active { background-color: var(--vel-color-secondary)
}
.vel-active\\:bg-success:active { background-color: var(--vel-color-success)
}
.vel-active\\:bg-danger:active { background-color: var(--vel-color-danger)
}
.vel-active\\:bg-warning:active { background-color: var(--vel-color-warning)
}
.vel-active\\:bg-info:active { background-color: var(--vel-color-info)
}
.vel-active\\:bg-primary-light:active { background-color: var(--vel-color-primary-light)
}
.vel-active\\:bg-success-light:active { background-color: var(--vel-color-success-light)
}
.vel-active\\:bg-danger-light:active { background-color: var(--vel-color-danger-light)
}
.vel-active\\:bg-warning-light:active { background-color: var(--vel-color-warning-light)
}
.vel-active\\:bg-info-light:active { background-color: var(--vel-color-info-light)
}
.vel-active\\:bg-neutral-50:active { background-color: var(--vel-neutral-50)
}
.vel-active\\:bg-neutral-100:active { background-color: var(--vel-neutral-100)
}
.vel-active\\:bg-neutral-200:active { background-color: var(--vel-neutral-200)
}
.vel-active\\:bg-neutral-300:active { background-color: var(--vel-neutral-300)
}
.vel-active\\:bg-neutral-400:active { background-color: var(--vel-neutral-400)
}
.vel-active\\:bg-neutral-500:active { background-color: var(--vel-neutral-500)
}
.vel-active\\:bg-neutral-600:active { background-color: var(--vel-neutral-600)
}
.vel-active\\:bg-neutral-700:active { background-color: var(--vel-neutral-700)
}
.vel-active\\:bg-neutral-800:active { background-color: var(--vel-neutral-800)
}
.vel-active\\:bg-neutral-900:active { background-color: var(--vel-neutral-900)
}
.vel-active\\:bg-neutral-950:active { background-color: var(--vel-neutral-950)
}
.vel-active\\:bg-opacity-0:active { --vel-bg-opacity: 0
}
.vel-active\\:bg-opacity-25:active { --vel-bg-opacity: 0.25
}
.vel-active\\:bg-opacity-50:active { --vel-bg-opacity: 0.5
}
.vel-active\\:bg-opacity-75:active { --vel-bg-opacity: 0.75
}
.vel-active\\:bg-opacity-100:active { --vel-bg-opacity: 1
}
.vel-active\\:bg-auto:active { background-size: auto
}
.vel-active\\:bg-cover:active { background-size: cover
}
.vel-active\\:bg-contain:active { background-size: contain
}
.vel-active\\:bg-center:active { background-position: center
}
.vel-active\\:bg-top:active { background-position: top
}
.vel-active\\:bg-right:active { background-position: right
}
.vel-active\\:bg-bottom:active { background-position: bottom
}
.vel-active\\:bg-left:active { background-position: left
}
.vel-active\\:bg-repeat:active { background-repeat: repeat
}
.vel-active\\:bg-no-repeat:active { background-repeat: no-repeat
}
.vel-active\\:bg-repeat-x:active { background-repeat: repeat-x
}
.vel-active\\:bg-repeat-y:active { background-repeat: repeat-y
}
.vel-active\\:bg-fixed:active { background-attachment: fixed
}
.vel-active\\:bg-local:active { background-attachment: local
}
.vel-active\\:bg-scroll:active { background-attachment: scroll
}
.vel-active\\:bg-surface-0:active { background-color: var(--vel-surface-0)
}
.vel-active\\:bg-surface-1:active { background-color: var(--vel-surface-1)
}
.vel-active\\:bg-surface-2:active { background-color: var(--vel-surface-2)
}
.vel-active\\:bg-surface-3:active { background-color: var(--vel-surface-3)
}
.vel-active\\:bg-surface-4:active { background-color: var(--vel-surface-4)
}
.vel-active\\:bg-primary-50:active { background-color: var(--vel-primary-50)
}
.vel-active\\:bg-primary-100:active { background-color: var(--vel-primary-100)
}
.vel-active\\:bg-primary-200:active { background-color: var(--vel-primary-200)
}
.vel-active\\:bg-primary-300:active { background-color: var(--vel-primary-300)
}
.vel-active\\:bg-primary-400:active { background-color: var(--vel-primary-400)
}
.vel-active\\:bg-primary-500:active { background-color: var(--vel-primary-500)
}
.vel-active\\:bg-primary-600:active { background-color: var(--vel-primary-600)
}
.vel-active\\:bg-primary-700:active { background-color: var(--vel-primary-700)
}
.vel-active\\:bg-primary-800:active { background-color: var(--vel-primary-800)
}
.vel-active\\:bg-primary-900:active { background-color: var(--vel-primary-900)
}
.vel-active\\:bg-primary-950:active { background-color: var(--vel-primary-950)
}
.vel-active\\:bg-success-50:active { background-color: var(--vel-success-50)
}
.vel-active\\:bg-success-100:active { background-color: var(--vel-success-100)
}
.vel-active\\:bg-success-300:active { background-color: var(--vel-success-300)
}
.vel-active\\:bg-success-400:active { background-color: var(--vel-success-400)
}
.vel-active\\:bg-success-500:active { background-color: var(--vel-success-500)
}
.vel-active\\:bg-success-700:active { background-color: var(--vel-success-700)
}
.vel-active\\:bg-success-900:active { background-color: var(--vel-success-900)
}
.vel-active\\:bg-danger-50:active { background-color: var(--vel-danger-50)
}
.vel-active\\:bg-danger-100:active { background-color: var(--vel-danger-100)
}
.vel-active\\:bg-danger-300:active { background-color: var(--vel-danger-300)
}
.vel-active\\:bg-danger-400:active { background-color: var(--vel-danger-400)
}
.vel-active\\:bg-danger-500:active { background-color: var(--vel-danger-500)
}
.vel-active\\:bg-danger-700:active { background-color: var(--vel-danger-700)
}
.vel-active\\:bg-danger-900:active { background-color: var(--vel-danger-900)
}
.vel-active\\:bg-warning-100:active { background-color: var(--vel-warning-100)
}
.vel-active\\:bg-warning-300:active { background-color: var(--vel-warning-300)
}
.vel-active\\:bg-warning-400:active { background-color: var(--vel-warning-400)
}
.vel-active\\:bg-warning-500:active { background-color: var(--vel-warning-500)
}
.vel-active\\:bg-warning-900:active { background-color: var(--vel-warning-900)
}
.vel-active\\:bg-info-100:active { background-color: var(--vel-info-100)
}
.vel-active\\:bg-info-300:active { background-color: var(--vel-info-300)
}
.vel-active\\:bg-info-400:active { background-color: var(--vel-info-400)
}
.vel-active\\:bg-info-500:active { background-color: var(--vel-info-500)
}
.vel-active\\:bg-info-900:active { background-color: var(--vel-info-900)
}
.vel-active\\:shadow-sm:active { box-shadow: var(--vel-shadow-sm)
}
.vel-active\\:shadow:active { box-shadow: var(--vel-shadow)
}
.vel-active\\:shadow-md:active { box-shadow: var(--vel-shadow-md)
}
.vel-active\\:shadow-lg:active { box-shadow: var(--vel-shadow-lg)
}
.vel-active\\:shadow-xl:active { box-shadow: var(--vel-shadow-xl)
}
.vel-active\\:shadow-2xl:active { box-shadow: var(--vel-shadow-2xl)
}
.vel-active\\:shadow-inner:active { box-shadow: var(--vel-shadow-inner)
}
.vel-active\\:shadow-none:active { box-shadow: var(--vel-shadow-none)
}
.vel-active\\:opacity-0:active { opacity: 0
}
.vel-active\\:opacity-5:active { opacity: 0.05
}
.vel-active\\:opacity-10:active { opacity: 0.1
}
.vel-active\\:opacity-15:active { opacity: 0.15
}
.vel-active\\:opacity-20:active { opacity: 0.2
}
.vel-active\\:opacity-25:active { opacity: 0.25
}
.vel-active\\:opacity-30:active { opacity: 0.3
}
.vel-active\\:opacity-40:active { opacity: 0.4
}
.vel-active\\:opacity-50:active { opacity: 0.5
}
.vel-active\\:opacity-60:active { opacity: 0.6
}
.vel-active\\:opacity-70:active { opacity: 0.7
}
.vel-active\\:opacity-75:active { opacity: 0.75
}
.vel-active\\:opacity-80:active { opacity: 0.8
}
.vel-active\\:opacity-90:active { opacity: 0.9
}
.vel-active\\:opacity-95:active { opacity: 0.95
}
.vel-active\\:opacity-100:active { opacity: 1
}
.vel-active\\:bg-gradient-primary:active { background: var(--vel-gradient-primary)
}
.vel-active\\:bg-gradient-secondary:active { background: var(--vel-gradient-secondary)
}
.vel-active\\:bg-gradient-success:active { background: var(--vel-gradient-success)
}
.vel-active\\:bg-gradient-danger:active { background: var(--vel-gradient-danger)
}
.vel-active\\:bg-gradient-warning:active { background: var(--vel-gradient-warning)
}
.vel-active\\:bg-gradient-info:active { background: var(--vel-gradient-info)
}
.vel-active\\:bg-gradient-dark:active { background: var(--vel-gradient-dark)
}
.vel-active\\:bg-gradient-surface:active { background: var(--vel-gradient-surface)
}
.vel-active\\:bg-gradient-aurora:active { background: var(--vel-gradient-aurora)
}
.vel-active\\:bg-gradient-sunset:active { background: var(--vel-gradient-sunset)
}
.vel-active\\:bg-gradient-ocean:active { background: var(--vel-gradient-ocean)
}
.vel-active\\:bg-gradient-cosmos:active { background: var(--vel-gradient-cosmos)
}
.vel-active\\:bg-gradient-midnight:active { background: var(--vel-gradient-midnight)
}
.vel-active\\:scale-95:active { transform: scale(0.95)
}
.vel-active\\:scale-100:active { transform: scale(1)
}
.vel-active\\:scale-105:active { transform: scale(1.05)
}
.vel-active\\:scale-110:active { transform: scale(1.1)
}
.vel-active\\:scale-125:active { transform: scale(1.25)
}
.vel-active\\:scale-150:active { transform: scale(1.5)
}
.vel-active\\:scale-0:active { --vel-transform-scale-x: scaleX(0);    --vel-transform-scale-y: scaleY(0);    transform: var(--vel-transform-translate-x) var(--vel-transform-translate-y) var(--vel-transform-rotate) var(--vel-transform-scale-x) var(--vel-transform-scale-y) var(--vel-transform-skew-x) var(--vel-transform-skew-y)
}
.vel-active\\:scale-50:active { --vel-transform-scale-x: scaleX(.5);   --vel-transform-scale-y: scaleY(.5);   transform: var(--vel-transform-translate-x) var(--vel-transform-translate-y) var(--vel-transform-rotate) var(--vel-transform-scale-x) var(--vel-transform-scale-y) var(--vel-transform-skew-x) var(--vel-transform-skew-y)
}
.vel-active\\:scale-75:active { --vel-transform-scale-x: scaleX(.75);  --vel-transform-scale-y: scaleY(.75);  transform: var(--vel-transform-translate-x) var(--vel-transform-translate-y) var(--vel-transform-rotate) var(--vel-transform-scale-x) var(--vel-transform-scale-y) var(--vel-transform-skew-x) var(--vel-transform-skew-y)
}
.vel-active\\:scale-90:active { --vel-transform-scale-x: scaleX(.9);   --vel-transform-scale-y: scaleY(.9);   transform: var(--vel-transform-translate-x) var(--vel-transform-translate-y) var(--vel-transform-rotate) var(--vel-transform-scale-x) var(--vel-transform-scale-y) var(--vel-transform-skew-x) var(--vel-transform-skew-y)
}
.vel-active\\:scale-95:active { --vel-transform-scale-x: scaleX(.95);  --vel-transform-scale-y: scaleY(.95);  transform: var(--vel-transform-translate-x) var(--vel-transform-translate-y) var(--vel-transform-rotate) var(--vel-transform-scale-x) var(--vel-transform-scale-y) var(--vel-transform-skew-x) var(--vel-transform-skew-y)
}
.vel-active\\:scale-100:active { --vel-transform-scale-x: scaleX(1);    --vel-transform-scale-y: scaleY(1);    transform: var(--vel-transform-translate-x) var(--vel-transform-translate-y) var(--vel-transform-rotate) var(--vel-transform-scale-x) var(--vel-transform-scale-y) var(--vel-transform-skew-x) var(--vel-transform-skew-y)
}
.vel-active\\:scale-105:active { --vel-transform-scale-x: scaleX(1.05); --vel-transform-scale-y: scaleY(1.05); transform: var(--vel-transform-translate-x) var(--vel-transform-translate-y) var(--vel-transform-rotate) var(--vel-transform-scale-x) var(--vel-transform-scale-y) var(--vel-transform-skew-x) var(--vel-transform-skew-y)
}
.vel-active\\:scale-110:active { --vel-transform-scale-x: scaleX(1.1);  --vel-transform-scale-y: scaleY(1.1);  transform: var(--vel-transform-translate-x) var(--vel-transform-translate-y) var(--vel-transform-rotate) var(--vel-transform-scale-x) var(--vel-transform-scale-y) var(--vel-transform-skew-x) var(--vel-transform-skew-y)
}
.vel-active\\:scale-125:active { --vel-transform-scale-x: scaleX(1.25); --vel-transform-scale-y: scaleY(1.25); transform: var(--vel-transform-translate-x) var(--vel-transform-translate-y) var(--vel-transform-rotate) var(--vel-transform-scale-x) var(--vel-transform-scale-y) var(--vel-transform-skew-x) var(--vel-transform-skew-y)
}
.vel-active\\:scale-150:active { --vel-transform-scale-x: scaleX(1.5);  --vel-transform-scale-y: scaleY(1.5);  transform: var(--vel-transform-translate-x) var(--vel-transform-translate-y) var(--vel-transform-rotate) var(--vel-transform-scale-x) var(--vel-transform-scale-y) var(--vel-transform-skew-x) var(--vel-transform-skew-y)
}

/* Dark mode variants — add class="vel-dark" to <html> or <body> */
.vel-dark .vel-dark\\:text-xs { font-size: var(--vel-text-xs); line-height: 1rem
}
.vel-dark .vel-dark\\:text-sm { font-size: var(--vel-text-sm); line-height: 1.25rem
}
.vel-dark .vel-dark\\:text-base { font-size: var(--vel-text-base); line-height: 1.5rem
}
.vel-dark .vel-dark\\:text-lg { font-size: var(--vel-text-lg); line-height: 1.75rem
}
.vel-dark .vel-dark\\:text-xl { font-size: var(--vel-text-xl); line-height: 1.75rem
}
.vel-dark .vel-dark\\:text-2xl { font-size: var(--vel-text-2xl); line-height: 2rem
}
.vel-dark .vel-dark\\:text-3xl { font-size: var(--vel-text-3xl); line-height: 2.25rem
}
.vel-dark .vel-dark\\:text-4xl { font-size: var(--vel-text-4xl); line-height: 2.5rem
}
.vel-dark .vel-dark\\:text-5xl { font-size: var(--vel-text-5xl); line-height: 1
}
.vel-dark .vel-dark\\:text-6xl { font-size: var(--vel-text-6xl); line-height: 1
}
.vel-dark .vel-dark\\:text-7xl { font-size: var(--vel-text-7xl); line-height: 1
}
.vel-dark .vel-dark\\:text-8xl { font-size: var(--vel-text-8xl); line-height: 1
}
.vel-dark .vel-dark\\:text-9xl { font-size: var(--vel-text-9xl); line-height: 1
}
.vel-dark .vel-dark\\:text-left { text-align: left
}
.vel-dark .vel-dark\\:text-center { text-align: center
}
.vel-dark .vel-dark\\:text-right { text-align: right
}
.vel-dark .vel-dark\\:text-justify { text-align: justify
}
.vel-dark .vel-dark\\:text-start { text-align: start
}
.vel-dark .vel-dark\\:text-end { text-align: end
}
.vel-dark .vel-dark\\:text-ellipsis { text-overflow: ellipsis
}
.vel-dark .vel-dark\\:text-clip { text-overflow: clip
}
.vel-dark .vel-dark\\:text-inherit { color: inherit
}
.vel-dark .vel-dark\\:text-current { color: currentColor
}
.vel-dark .vel-dark\\:text-transparent { color: transparent
}
.vel-dark .vel-dark\\:text-white { color: #ffffff
}
.vel-dark .vel-dark\\:text-black { color: #000000
}
.vel-dark .vel-dark\\:text-primary { color: var(--vel-color-primary)
}
.vel-dark .vel-dark\\:text-secondary { color: var(--vel-color-secondary)
}
.vel-dark .vel-dark\\:text-success { color: var(--vel-color-success)
}
.vel-dark .vel-dark\\:text-danger { color: var(--vel-color-danger)
}
.vel-dark .vel-dark\\:text-warning { color: var(--vel-color-warning)
}
.vel-dark .vel-dark\\:text-info { color: var(--vel-color-info)
}
.vel-dark .vel-dark\\:text-neutral-50 { color: var(--vel-neutral-50)
}
.vel-dark .vel-dark\\:text-neutral-100 { color: var(--vel-neutral-100)
}
.vel-dark .vel-dark\\:text-neutral-200 { color: var(--vel-neutral-200)
}
.vel-dark .vel-dark\\:text-neutral-300 { color: var(--vel-neutral-300)
}
.vel-dark .vel-dark\\:text-neutral-400 { color: var(--vel-neutral-400)
}
.vel-dark .vel-dark\\:text-neutral-500 { color: var(--vel-neutral-500)
}
.vel-dark .vel-dark\\:text-neutral-600 { color: var(--vel-neutral-600)
}
.vel-dark .vel-dark\\:text-neutral-700 { color: var(--vel-neutral-700)
}
.vel-dark .vel-dark\\:text-neutral-800 { color: var(--vel-neutral-800)
}
.vel-dark .vel-dark\\:text-neutral-900 { color: var(--vel-neutral-900)
}
.vel-dark .vel-dark\\:text-neutral-950 { color: var(--vel-neutral-950)
}
.vel-dark .vel-dark\\:bg-inherit { background-color: inherit
}
.vel-dark .vel-dark\\:bg-current { background-color: currentColor
}
.vel-dark .vel-dark\\:bg-transparent { background-color: transparent
}
.vel-dark .vel-dark\\:bg-white { background-color: #ffffff
}
.vel-dark .vel-dark\\:bg-black { background-color: #000000
}
.vel-dark .vel-dark\\:bg-primary { background-color: var(--vel-color-primary)
}
.vel-dark .vel-dark\\:bg-secondary { background-color: var(--vel-color-secondary)
}
.vel-dark .vel-dark\\:bg-success { background-color: var(--vel-color-success)
}
.vel-dark .vel-dark\\:bg-danger { background-color: var(--vel-color-danger)
}
.vel-dark .vel-dark\\:bg-warning { background-color: var(--vel-color-warning)
}
.vel-dark .vel-dark\\:bg-info { background-color: var(--vel-color-info)
}
.vel-dark .vel-dark\\:bg-primary-light { background-color: var(--vel-color-primary-light)
}
.vel-dark .vel-dark\\:bg-success-light { background-color: var(--vel-color-success-light)
}
.vel-dark .vel-dark\\:bg-danger-light { background-color: var(--vel-color-danger-light)
}
.vel-dark .vel-dark\\:bg-warning-light { background-color: var(--vel-color-warning-light)
}
.vel-dark .vel-dark\\:bg-info-light { background-color: var(--vel-color-info-light)
}
.vel-dark .vel-dark\\:bg-neutral-50 { background-color: var(--vel-neutral-50)
}
.vel-dark .vel-dark\\:bg-neutral-100 { background-color: var(--vel-neutral-100)
}
.vel-dark .vel-dark\\:bg-neutral-200 { background-color: var(--vel-neutral-200)
}
.vel-dark .vel-dark\\:bg-neutral-300 { background-color: var(--vel-neutral-300)
}
.vel-dark .vel-dark\\:bg-neutral-400 { background-color: var(--vel-neutral-400)
}
.vel-dark .vel-dark\\:bg-neutral-500 { background-color: var(--vel-neutral-500)
}
.vel-dark .vel-dark\\:bg-neutral-600 { background-color: var(--vel-neutral-600)
}
.vel-dark .vel-dark\\:bg-neutral-700 { background-color: var(--vel-neutral-700)
}
.vel-dark .vel-dark\\:bg-neutral-800 { background-color: var(--vel-neutral-800)
}
.vel-dark .vel-dark\\:bg-neutral-900 { background-color: var(--vel-neutral-900)
}
.vel-dark .vel-dark\\:bg-neutral-950 { background-color: var(--vel-neutral-950)
}
.vel-dark .vel-dark\\:bg-opacity-0 { --vel-bg-opacity: 0
}
.vel-dark .vel-dark\\:bg-opacity-25 { --vel-bg-opacity: 0.25
}
.vel-dark .vel-dark\\:bg-opacity-50 { --vel-bg-opacity: 0.5
}
.vel-dark .vel-dark\\:bg-opacity-75 { --vel-bg-opacity: 0.75
}
.vel-dark .vel-dark\\:bg-opacity-100 { --vel-bg-opacity: 1
}
.vel-dark .vel-dark\\:border-inherit { border-color: inherit
}
.vel-dark .vel-dark\\:border-current { border-color: currentColor
}
.vel-dark .vel-dark\\:border-transparent { border-color: transparent
}
.vel-dark .vel-dark\\:border-white { border-color: #ffffff
}
.vel-dark .vel-dark\\:border-black { border-color: #000000
}
.vel-dark .vel-dark\\:border-primary { border-color: var(--vel-color-primary)
}
.vel-dark .vel-dark\\:border-secondary { border-color: var(--vel-color-secondary)
}
.vel-dark .vel-dark\\:border-success { border-color: var(--vel-color-success)
}
.vel-dark .vel-dark\\:border-danger { border-color: var(--vel-color-danger)
}
.vel-dark .vel-dark\\:border-warning { border-color: var(--vel-color-warning)
}
.vel-dark .vel-dark\\:border-info { border-color: var(--vel-color-info)
}
.vel-dark .vel-dark\\:border-neutral-100 { border-color: var(--vel-neutral-100)
}
.vel-dark .vel-dark\\:border-neutral-200 { border-color: var(--vel-neutral-200)
}
.vel-dark .vel-dark\\:border-neutral-300 { border-color: var(--vel-neutral-300)
}
.vel-dark .vel-dark\\:border-neutral-400 { border-color: var(--vel-neutral-400)
}
.vel-dark .vel-dark\\:border-neutral-500 { border-color: var(--vel-neutral-500)
}
.vel-dark .vel-dark\\:border-neutral-600 { border-color: var(--vel-neutral-600)
}
.vel-dark .vel-dark\\:border-neutral-700 { border-color: var(--vel-neutral-700)
}
.vel-dark .vel-dark\\:border-neutral-800 { border-color: var(--vel-neutral-800)
}
.vel-dark .vel-dark\\:border-neutral-900 { border-color: var(--vel-neutral-900)
}
.vel-dark .vel-dark\\:bg-auto { background-size: auto
}
.vel-dark .vel-dark\\:bg-cover { background-size: cover
}
.vel-dark .vel-dark\\:bg-contain { background-size: contain
}
.vel-dark .vel-dark\\:bg-center { background-position: center
}
.vel-dark .vel-dark\\:bg-top { background-position: top
}
.vel-dark .vel-dark\\:bg-right { background-position: right
}
.vel-dark .vel-dark\\:bg-bottom { background-position: bottom
}
.vel-dark .vel-dark\\:bg-left { background-position: left
}
.vel-dark .vel-dark\\:bg-repeat { background-repeat: repeat
}
.vel-dark .vel-dark\\:bg-no-repeat { background-repeat: no-repeat
}
.vel-dark .vel-dark\\:bg-repeat-x { background-repeat: repeat-x
}
.vel-dark .vel-dark\\:bg-repeat-y { background-repeat: repeat-y
}
.vel-dark .vel-dark\\:bg-fixed { background-attachment: fixed
}
.vel-dark .vel-dark\\:bg-local { background-attachment: local
}
.vel-dark .vel-dark\\:bg-scroll { background-attachment: scroll
}
.vel-dark .vel-dark\\:bg-surface-0 { background-color: var(--vel-surface-0)
}
.vel-dark .vel-dark\\:bg-surface-1 { background-color: var(--vel-surface-1)
}
.vel-dark .vel-dark\\:bg-surface-2 { background-color: var(--vel-surface-2)
}
.vel-dark .vel-dark\\:bg-surface-3 { background-color: var(--vel-surface-3)
}
.vel-dark .vel-dark\\:bg-surface-4 { background-color: var(--vel-surface-4)
}
.vel-dark .vel-dark\\:text-primary-50 { color: var(--vel-primary-50)
}
.vel-dark .vel-dark\\:text-primary-100 { color: var(--vel-primary-100)
}
.vel-dark .vel-dark\\:text-primary-200 { color: var(--vel-primary-200)
}
.vel-dark .vel-dark\\:text-primary-300 { color: var(--vel-primary-300)
}
.vel-dark .vel-dark\\:text-primary-400 { color: var(--vel-primary-400)
}
.vel-dark .vel-dark\\:text-primary-500 { color: var(--vel-primary-500)
}
.vel-dark .vel-dark\\:text-primary-600 { color: var(--vel-primary-600)
}
.vel-dark .vel-dark\\:text-primary-700 { color: var(--vel-primary-700)
}
.vel-dark .vel-dark\\:text-primary-800 { color: var(--vel-primary-800)
}
.vel-dark .vel-dark\\:text-primary-900 { color: var(--vel-primary-900)
}
.vel-dark .vel-dark\\:text-primary-950 { color: var(--vel-primary-950)
}
.vel-dark .vel-dark\\:bg-primary-50 { background-color: var(--vel-primary-50)
}
.vel-dark .vel-dark\\:bg-primary-100 { background-color: var(--vel-primary-100)
}
.vel-dark .vel-dark\\:bg-primary-200 { background-color: var(--vel-primary-200)
}
.vel-dark .vel-dark\\:bg-primary-300 { background-color: var(--vel-primary-300)
}
.vel-dark .vel-dark\\:bg-primary-400 { background-color: var(--vel-primary-400)
}
.vel-dark .vel-dark\\:bg-primary-500 { background-color: var(--vel-primary-500)
}
.vel-dark .vel-dark\\:bg-primary-600 { background-color: var(--vel-primary-600)
}
.vel-dark .vel-dark\\:bg-primary-700 { background-color: var(--vel-primary-700)
}
.vel-dark .vel-dark\\:bg-primary-800 { background-color: var(--vel-primary-800)
}
.vel-dark .vel-dark\\:bg-primary-900 { background-color: var(--vel-primary-900)
}
.vel-dark .vel-dark\\:bg-primary-950 { background-color: var(--vel-primary-950)
}
.vel-dark .vel-dark\\:text-success-50 { color: var(--vel-success-50)
}
.vel-dark .vel-dark\\:text-success-100 { color: var(--vel-success-100)
}
.vel-dark .vel-dark\\:text-success-200 { color: var(--vel-success-200)
}
.vel-dark .vel-dark\\:text-success-300 { color: var(--vel-success-300)
}
.vel-dark .vel-dark\\:text-success-400 { color: var(--vel-success-400)
}
.vel-dark .vel-dark\\:text-success-500 { color: var(--vel-success-500)
}
.vel-dark .vel-dark\\:text-success-600 { color: var(--vel-success-600)
}
.vel-dark .vel-dark\\:text-success-700 { color: var(--vel-success-700)
}
.vel-dark .vel-dark\\:bg-success-50 { background-color: var(--vel-success-50)
}
.vel-dark .vel-dark\\:bg-success-100 { background-color: var(--vel-success-100)
}
.vel-dark .vel-dark\\:bg-success-300 { background-color: var(--vel-success-300)
}
.vel-dark .vel-dark\\:bg-success-400 { background-color: var(--vel-success-400)
}
.vel-dark .vel-dark\\:bg-success-500 { background-color: var(--vel-success-500)
}
.vel-dark .vel-dark\\:bg-success-700 { background-color: var(--vel-success-700)
}
.vel-dark .vel-dark\\:bg-success-900 { background-color: var(--vel-success-900)
}
.vel-dark .vel-dark\\:text-danger-50 { color: var(--vel-danger-50)
}
.vel-dark .vel-dark\\:text-danger-100 { color: var(--vel-danger-100)
}
.vel-dark .vel-dark\\:text-danger-300 { color: var(--vel-danger-300)
}
.vel-dark .vel-dark\\:text-danger-400 { color: var(--vel-danger-400)
}
.vel-dark .vel-dark\\:text-danger-500 { color: var(--vel-danger-500)
}
.vel-dark .vel-dark\\:text-danger-600 { color: var(--vel-danger-600)
}
.vel-dark .vel-dark\\:text-danger-700 { color: var(--vel-danger-700)
}
.vel-dark .vel-dark\\:bg-danger-50 { background-color: var(--vel-danger-50)
}
.vel-dark .vel-dark\\:bg-danger-100 { background-color: var(--vel-danger-100)
}
.vel-dark .vel-dark\\:bg-danger-300 { background-color: var(--vel-danger-300)
}
.vel-dark .vel-dark\\:bg-danger-400 { background-color: var(--vel-danger-400)
}
.vel-dark .vel-dark\\:bg-danger-500 { background-color: var(--vel-danger-500)
}
.vel-dark .vel-dark\\:bg-danger-700 { background-color: var(--vel-danger-700)
}
.vel-dark .vel-dark\\:bg-danger-900 { background-color: var(--vel-danger-900)
}
.vel-dark .vel-dark\\:text-warning-300 { color: var(--vel-warning-300)
}
.vel-dark .vel-dark\\:text-warning-400 { color: var(--vel-warning-400)
}
.vel-dark .vel-dark\\:text-warning-500 { color: var(--vel-warning-500)
}
.vel-dark .vel-dark\\:text-warning-600 { color: var(--vel-warning-600)
}
.vel-dark .vel-dark\\:bg-warning-100 { background-color: var(--vel-warning-100)
}
.vel-dark .vel-dark\\:bg-warning-300 { background-color: var(--vel-warning-300)
}
.vel-dark .vel-dark\\:bg-warning-400 { background-color: var(--vel-warning-400)
}
.vel-dark .vel-dark\\:bg-warning-500 { background-color: var(--vel-warning-500)
}
.vel-dark .vel-dark\\:bg-warning-900 { background-color: var(--vel-warning-900)
}
.vel-dark .vel-dark\\:text-info-300 { color: var(--vel-info-300)
}
.vel-dark .vel-dark\\:text-info-400 { color: var(--vel-info-400)
}
.vel-dark .vel-dark\\:text-info-500 { color: var(--vel-info-500)
}
.vel-dark .vel-dark\\:text-info-600 { color: var(--vel-info-600)
}
.vel-dark .vel-dark\\:bg-info-100 { background-color: var(--vel-info-100)
}
.vel-dark .vel-dark\\:bg-info-300 { background-color: var(--vel-info-300)
}
.vel-dark .vel-dark\\:bg-info-400 { background-color: var(--vel-info-400)
}
.vel-dark .vel-dark\\:bg-info-500 { background-color: var(--vel-info-500)
}
.vel-dark .vel-dark\\:bg-info-900 { background-color: var(--vel-info-900)
}
.vel-dark .vel-dark\\:text-body { color: var(--vel-color-text)
}
.vel-dark .vel-dark\\:text-muted { color: var(--vel-color-muted)
}
.vel-dark .vel-dark\\:border-0 { border-width: 0px
}
.vel-dark .vel-dark\\:border-2 { border-width: 2px
}
.vel-dark .vel-dark\\:border-4 { border-width: 4px
}
.vel-dark .vel-dark\\:border-8 { border-width: 8px
}
.vel-dark .vel-dark\\:border-t-0 { border-top-width: 0px
}
.vel-dark .vel-dark\\:border-t { border-top-width: 1px
}
.vel-dark .vel-dark\\:border-t-2 { border-top-width: 2px
}
.vel-dark .vel-dark\\:border-t-4 { border-top-width: 4px
}
.vel-dark .vel-dark\\:border-r-0 { border-right-width: 0px
}
.vel-dark .vel-dark\\:border-r { border-right-width: 1px
}
.vel-dark .vel-dark\\:border-r-2 { border-right-width: 2px
}
.vel-dark .vel-dark\\:border-r-4 { border-right-width: 4px
}
.vel-dark .vel-dark\\:border-b-0 { border-bottom-width: 0px
}
.vel-dark .vel-dark\\:border-b { border-bottom-width: 1px
}
.vel-dark .vel-dark\\:border-b-2 { border-bottom-width: 2px
}
.vel-dark .vel-dark\\:border-b-4 { border-bottom-width: 4px
}
.vel-dark .vel-dark\\:border-l-0 { border-left-width: 0px
}
.vel-dark .vel-dark\\:border-l { border-left-width: 1px
}
.vel-dark .vel-dark\\:border-l-2 { border-left-width: 2px
}
.vel-dark .vel-dark\\:border-l-4 { border-left-width: 4px
}
.vel-dark .vel-dark\\:border-x-0 { border-left-width: 0px; border-right-width: 0px
}
.vel-dark .vel-dark\\:border-x { border-left-width: 1px; border-right-width: 1px
}
.vel-dark .vel-dark\\:border-x-2 { border-left-width: 2px; border-right-width: 2px
}
.vel-dark .vel-dark\\:border-y-0 { border-top-width: 0px; border-bottom-width: 0px
}
.vel-dark .vel-dark\\:border-y { border-top-width: 1px; border-bottom-width: 1px
}
.vel-dark .vel-dark\\:border-y-2 { border-top-width: 2px; border-bottom-width: 2px
}
.vel-dark .vel-dark\\:border-solid { border-style: solid
}
.vel-dark .vel-dark\\:border-dashed { border-style: dashed
}
.vel-dark .vel-dark\\:border-dotted { border-style: dotted
}
.vel-dark .vel-dark\\:border-double { border-style: double
}
.vel-dark .vel-dark\\:border-hidden { border-style: hidden
}
.vel-dark .vel-dark\\:border-none { border-style: none
}
.vel-dark .vel-dark\\:ring {
  box-shadow: var(--vel-ring-primary)
}
.vel-dark .vel-dark\\:ring-primary { box-shadow: var(--vel-ring-primary)
}
.vel-dark .vel-dark\\:ring-success { box-shadow: var(--vel-ring-success)
}
.vel-dark .vel-dark\\:ring-danger { box-shadow: var(--vel-ring-danger)
}
.vel-dark .vel-dark\\:ring-warning { box-shadow: var(--vel-ring-warning)
}
.vel-dark .vel-dark\\:ring-info { box-shadow: var(--vel-ring-info)
}
.vel-dark .vel-dark\\:ring-neutral { box-shadow: 0 0 0 3px var(--vel-neutral-400)
}
.vel-dark .vel-dark\\:shadow-sm { box-shadow: var(--vel-shadow-sm)
}
.vel-dark .vel-dark\\:shadow { box-shadow: var(--vel-shadow)
}
.vel-dark .vel-dark\\:shadow-md { box-shadow: var(--vel-shadow-md)
}
.vel-dark .vel-dark\\:shadow-lg { box-shadow: var(--vel-shadow-lg)
}
.vel-dark .vel-dark\\:shadow-xl { box-shadow: var(--vel-shadow-xl)
}
.vel-dark .vel-dark\\:shadow-2xl { box-shadow: var(--vel-shadow-2xl)
}
.vel-dark .vel-dark\\:shadow-inner { box-shadow: var(--vel-shadow-inner)
}
.vel-dark .vel-dark\\:shadow-none { box-shadow: var(--vel-shadow-none)
}
.vel-dark .vel-dark\\:bg-gradient-primary { background: var(--vel-gradient-primary)
}
.vel-dark .vel-dark\\:bg-gradient-secondary { background: var(--vel-gradient-secondary)
}
.vel-dark .vel-dark\\:bg-gradient-success { background: var(--vel-gradient-success)
}
.vel-dark .vel-dark\\:bg-gradient-danger { background: var(--vel-gradient-danger)
}
.vel-dark .vel-dark\\:bg-gradient-warning { background: var(--vel-gradient-warning)
}
.vel-dark .vel-dark\\:bg-gradient-info { background: var(--vel-gradient-info)
}
.vel-dark .vel-dark\\:bg-gradient-dark { background: var(--vel-gradient-dark)
}
.vel-dark .vel-dark\\:bg-gradient-surface { background: var(--vel-gradient-surface)
}
.vel-dark .vel-dark\\:bg-gradient-aurora { background: var(--vel-gradient-aurora)
}
.vel-dark .vel-dark\\:bg-gradient-sunset { background: var(--vel-gradient-sunset)
}
.vel-dark .vel-dark\\:bg-gradient-ocean { background: var(--vel-gradient-ocean)
}
.vel-dark .vel-dark\\:bg-gradient-cosmos { background: var(--vel-gradient-cosmos)
}
.vel-dark .vel-dark\\:bg-gradient-midnight { background: var(--vel-gradient-midnight)
}
.vel-dark .vel-dark\\:text-gradient-primary {
  background: var(--vel-gradient-primary);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  color: transparent
}
.vel-dark .vel-dark\\:text-gradient-aurora {
  background: var(--vel-gradient-aurora);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  color: transparent
}
.vel-dark .vel-dark\\:text-gradient-sunset {
  background: var(--vel-gradient-sunset);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  color: transparent
}
.vel-dark .vel-dark\\:text-gradient-ocean {
  background: var(--vel-gradient-ocean);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  color: transparent
}
.vel-dark .vel-dark\\:text-gradient-cosmos {
  background: var(--vel-gradient-cosmos);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  color: transparent
}
.vel-dark .vel-dark\\:ring-0 { --vel-ring-width: 0px;  box-shadow: var(--vel-ring-shadow)
}
.vel-dark .vel-dark\\:ring-1 { --vel-ring-width: 1px;  box-shadow: var(--vel-ring-shadow)
}
.vel-dark .vel-dark\\:ring-2 { --vel-ring-width: 2px;  box-shadow: var(--vel-ring-shadow)
}
.vel-dark .vel-dark\\:ring { --vel-ring-width: 3px;  box-shadow: var(--vel-ring-shadow)
}
.vel-dark .vel-dark\\:ring-4 { --vel-ring-width: 4px;  box-shadow: var(--vel-ring-shadow)
}
.vel-dark .vel-dark\\:ring-8 { --vel-ring-width: 8px;  box-shadow: var(--vel-ring-shadow)
}
.vel-dark .vel-dark\\:ring-inset { --vel-ring-shadow: inset 0 0 0 var(--vel-ring-width) var(--vel-ring-color); box-shadow: var(--vel-ring-shadow)
}
.vel-dark .vel-dark\\:ring-primary { --vel-ring-color: rgba(124, 92, 252, 0.5)
}
.vel-dark .vel-dark\\:ring-success { --vel-ring-color: rgba(14, 203, 129, 0.5)
}
.vel-dark .vel-dark\\:ring-danger { --vel-ring-color: rgba(240, 65, 108, 0.5)
}
.vel-dark .vel-dark\\:ring-warning { --vel-ring-color: rgba(255, 157, 0, 0.5)
}
.vel-dark .vel-dark\\:ring-info { --vel-ring-color: rgba(46, 189, 229, 0.5)
}
.vel-dark .vel-dark\\:ring-white { --vel-ring-color: rgba(255, 255, 255, 0.8)
}
.vel-dark .vel-dark\\:ring-black { --vel-ring-color: rgba(0, 0, 0, 0.8)
}
.vel-dark .vel-dark\\:ring-transparent { --vel-ring-color: transparent
}
.vel-dark .vel-dark\\:ring-current { --vel-ring-color: currentColor
}
.vel-dark .vel-dark\\:ring-neutral-400 { --vel-ring-color: var(--vel-neutral-400)
}
.vel-dark .vel-dark\\:ring-neutral-500 { --vel-ring-color: var(--vel-neutral-500)
}
.vel-dark .vel-dark\\:ring-offset-0 { --vel-ring-offset-width: 0px
}
.vel-dark .vel-dark\\:ring-offset-1 { --vel-ring-offset-width: 1px
}
.vel-dark .vel-dark\\:ring-offset-2 { --vel-ring-offset-width: 2px
}
.vel-dark .vel-dark\\:ring-offset-4 { --vel-ring-offset-width: 4px
}
.vel-dark .vel-dark\\:ring-offset-8 { --vel-ring-offset-width: 8px
}
.vel-dark .vel-dark\\:ring-offset-transparent { --vel-ring-offset-color: transparent
}
.vel-dark .vel-dark\\:ring-offset-white { --vel-ring-offset-color: #ffffff
}
.vel-dark .vel-dark\\:ring-offset-black { --vel-ring-offset-color: #000000
}
.vel-dark .vel-dark\\:ring-offset-surface { --vel-ring-offset-color: var(--vel-surface-0)
}`,Cp="/veloracss/playground/assets/velora_actual-B8GlOCR0.png",Uc=Cp,no={Starter:`<!--
  Welcome to VeloraCSS Playground!
  Edit this HTML to start building — changes appear live in the preview.
  Pick a different example from the Examples dropdown above.
-->
<div style="min-height:100vh;background:#0b1120;background-image:radial-gradient(circle,#1e293b 1px,transparent 1px);background-size:30px 30px;display:flex;align-items:center;justify-content:center;padding:40px 20px;font-family:system-ui,sans-serif">
  <div style="background:#111827;border:1px solid #1e2d45;border-radius:20px;padding:44px 48px;max-width:540px;width:100%;box-shadow:0 32px 64px rgba(0,0,0,.6)">

    <!-- Logo -->
    <div style="display:flex;justify-content:center;margin-bottom:32px">
      <img src="${Uc}" style="height:32px;width:auto">
    </div>

    <!-- Heading -->
    <h1 style="color:#f1f5f9;font-size:1.375rem;font-weight:700;margin:0 0 10px;letter-spacing:-0.02em">
      Welcome to the VeloraCSS Playground
    </h1>
    <p style="color:#64748b;font-size:0.9rem;line-height:1.7;margin:0 0 30px">
      An online playground for <strong style="color:#c4b5fd">VeloraCSS</strong> — a fully original
      utility-first CSS framework with rich components and zero dependencies.
      Edit the HTML on the left and see changes instantly.
    </p>

    <!-- Feature list -->
    <ul style="list-style:none;padding:0;margin:0 0 34px;display:flex;flex-direction:column;gap:14px">
      <li style="display:flex;align-items:flex-start;gap:14px">
        <span style="width:22px;height:22px;background:#7c5cfc20;border-radius:6px;display:flex;align-items:center;justify-content:center;font-size:12px;flex-shrink:0;margin-top:1px">✦</span>
        <div>
          <span style="color:#e2e8f0;font-size:0.875rem;font-weight:600">Utility-first classes</span>
          <span style="color:#475569;font-size:0.8rem;display:block;margin-top:2px">vel-flex, vel-p-4, vel-text-lg and hundreds more</span>
        </div>
      </li>
      <li style="display:flex;align-items:flex-start;gap:14px">
        <span style="width:22px;height:22px;background:#0ecb8120;border-radius:6px;display:flex;align-items:center;justify-content:center;font-size:12px;flex-shrink:0;margin-top:1px">✦</span>
        <div>
          <span style="color:#e2e8f0;font-size:0.875rem;font-weight:600">Rich components</span>
          <span style="color:#475569;font-size:0.8rem;display:block;margin-top:2px">vel-btn, vel-card, vel-badge, vel-alert, vel-navbar &amp; more</span>
        </div>
      </li>
      <li style="display:flex;align-items:flex-start;gap:14px">
        <span style="width:22px;height:22px;background:#2ebde520;border-radius:6px;display:flex;align-items:center;justify-content:center;font-size:12px;flex-shrink:0;margin-top:1px">✦</span>
        <div>
          <span style="color:#e2e8f0;font-size:0.875rem;font-weight:600">Gradients &amp; glows</span>
          <span style="color:#475569;font-size:0.8rem;display:block;margin-top:2px">vel-bg-gradient-aurora · vel-btn-glow-primary · vel-glow-sm</span>
        </div>
      </li>
      <li style="display:flex;align-items:flex-start;gap:14px">
        <span style="width:22px;height:22px;background:#ff9d0020;border-radius:6px;display:flex;align-items:center;justify-content:center;font-size:12px;flex-shrink:0;margin-top:1px">✦</span>
        <div>
          <span style="color:#e2e8f0;font-size:0.875rem;font-weight:600">Animation utilities</span>
          <span style="color:#475569;font-size:0.8rem;display:block;margin-top:2px">vel-animate-fade-in · vel-animate-slide-up · vel-animate-pulse</span>
        </div>
      </li>
    </ul>

    <!-- Prompt box -->
    <div style="background:#0b1120;border:1px solid #1e2d45;border-radius:12px;padding:14px 18px;display:flex;align-items:flex-start;gap:12px">
      <span style="color:#7c5cfc;font-size:20px;margin-top:-2px">←</span>
      <p style="color:#475569;font-size:0.8rem;line-height:1.6;margin:0">
        Edit the HTML on the left to get started, or choose a demo from the
        <strong style="color:#94a3b8">Examples</strong> dropdown above.
      </p>
    </div>

  </div>
</div>`,Buttons:`<div class="vel-min-h-screen vel-bg-white vel-p-10">
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
      <h2 class="vel-text-xs vel-font-semibold vel-text-neutral-400 vel-uppercase vel-tracking-widest vel-mb-4">Outline</h2>
      <div class="vel-flex vel-flex-wrap vel-gap-3">
        <button class="vel-btn vel-btn-outline-primary">Primary</button>
        <button class="vel-btn vel-btn-outline-secondary">Secondary</button>
        <button class="vel-btn vel-btn-outline-success">Success</button>
        <button class="vel-btn vel-btn-outline-danger">Danger</button>
      </div>
    </section>

    <section class="vel-mb-8">
      <h2 class="vel-text-xs vel-font-semibold vel-text-neutral-400 vel-uppercase vel-tracking-widest vel-mb-4">Ghost &amp; Link</h2>
      <div class="vel-flex vel-flex-wrap vel-gap-3">
        <button class="vel-btn vel-btn-ghost">Ghost</button>
        <button class="vel-btn vel-btn-link">Link</button>
      </div>
    </section>

    <section class="vel-mb-8">
      <h2 class="vel-text-xs vel-font-semibold vel-text-neutral-400 vel-uppercase vel-tracking-widest vel-mb-4">Sizes</h2>
      <div class="vel-flex vel-flex-wrap vel-items-center vel-gap-3">
        <button class="vel-btn vel-btn-primary vel-btn-xs">XSmall</button>
        <button class="vel-btn vel-btn-primary vel-btn-sm">Small</button>
        <button class="vel-btn vel-btn-primary">Default</button>
        <button class="vel-btn vel-btn-primary vel-btn-lg">Large</button>
        <button class="vel-btn vel-btn-primary vel-btn-xl">XLarge</button>
      </div>
    </section>

    <section>
      <h2 class="vel-text-xs vel-font-semibold vel-text-neutral-400 vel-uppercase vel-tracking-widest vel-mb-4">Block</h2>
      <button class="vel-btn vel-btn-primary vel-btn-block">Block Button</button>
    </section>

  </div>
</div>`,Cards:`<div class="vel-min-h-screen vel-bg-neutral-50 vel-p-10">
  <div class="vel-max-w-4xl vel-mx-auto">

    <h1 class="vel-text-3xl vel-font-bold vel-text-neutral-900 vel-mb-8 vel-tracking-tight">Cards</h1>

    <div class="vel-grid vel-grid-cols-2 vel-gap-6 vel-mb-6">
      <div class="vel-card">
        <div class="vel-card-header">Default Card</div>
        <div class="vel-card-body">
          <p class="vel-text-neutral-600 vel-text-sm">The default card style with a subtle border and rounded corners.</p>
        </div>
        <div class="vel-card-footer">
          <button class="vel-btn vel-btn-primary vel-btn-sm">Action</button>
        </div>
      </div>

      <div class="vel-card vel-card-elevated">
        <div class="vel-card-header">Elevated Card</div>
        <div class="vel-card-body">
          <p class="vel-text-neutral-600 vel-text-sm">Elevated with a large shadow for depth and prominence.</p>
        </div>
        <div class="vel-card-footer">
          <button class="vel-btn vel-btn-outline-primary vel-btn-sm">Action</button>
        </div>
      </div>

      <div class="vel-card vel-card-flat">
        <div class="vel-card-header">Flat Card</div>
        <div class="vel-card-body">
          <p class="vel-text-neutral-600 vel-text-sm">No shadow, no border. Blends into the background cleanly.</p>
        </div>
        <div class="vel-card-footer">
          <button class="vel-btn vel-btn-ghost vel-btn-sm">Action</button>
        </div>
      </div>

      <div class="vel-card vel-card-hover">
        <div class="vel-card-header">Hover Card</div>
        <div class="vel-card-body">
          <p class="vel-text-neutral-600 vel-text-sm">Hover over me — the shadow lifts on interaction.</p>
        </div>
        <div class="vel-card-footer">
          <button class="vel-btn vel-btn-ghost vel-btn-sm">Action</button>
        </div>
      </div>
    </div>

    <div class="vel-grid vel-grid-cols-2 vel-gap-6">
      <div class="vel-card vel-card-filled">
        <div class="vel-card-body">
          <h3 class="vel-text-lg vel-font-semibold vel-text-neutral-900 vel-mb-2">Filled Card</h3>
          <p class="vel-text-neutral-500 vel-text-sm">Neutral background fill for a softer look.</p>
        </div>
      </div>

      <div class="vel-card vel-card-primary">
        <div class="vel-card-body">
          <h3 class="vel-text-lg vel-font-semibold vel-text-white vel-mb-2">Primary Card</h3>
          <p class="vel-text-white vel-text-sm" style="opacity:0.8">Bold brand-colored card for featured content.</p>
        </div>
      </div>
    </div>

  </div>
</div>`,Typography:`<div class="vel-min-h-screen vel-bg-white vel-p-10">
  <div class="vel-max-w-2xl vel-mx-auto">

    <h1 class="vel-text-5xl vel-font-black vel-text-neutral-900 vel-tracking-tight vel-mb-2">Typography</h1>
    <p class="vel-text-xl vel-text-neutral-400 vel-mb-10">Font sizes, weights, and text utilities.</p>

    <section class="vel-mb-10">
      <h2 class="vel-text-xs vel-font-semibold vel-text-neutral-400 vel-uppercase vel-tracking-widest vel-mb-4">Sizes</h2>
      <p class="vel-text-xs vel-text-neutral-700 vel-mb-1">vel-text-xs — The quick brown fox</p>
      <p class="vel-text-sm vel-text-neutral-700 vel-mb-1">vel-text-sm — The quick brown fox</p>
      <p class="vel-text-base vel-text-neutral-700 vel-mb-1">vel-text-base — The quick brown fox</p>
      <p class="vel-text-lg vel-text-neutral-700 vel-mb-1">vel-text-lg — The quick brown fox</p>
      <p class="vel-text-xl vel-text-neutral-700 vel-mb-1">vel-text-xl — The quick brown fox</p>
      <p class="vel-text-2xl vel-text-neutral-700 vel-mb-1">vel-text-2xl — The quick brown fox</p>
      <p class="vel-text-3xl vel-text-neutral-700 vel-mb-1">vel-text-3xl — The quick brown fox</p>
      <p class="vel-text-4xl vel-text-neutral-700 vel-mb-1">vel-text-4xl — Fox</p>
    </section>

    <section class="vel-mb-10">
      <h2 class="vel-text-xs vel-font-semibold vel-text-neutral-400 vel-uppercase vel-tracking-widest vel-mb-4">Weights</h2>
      <p class="vel-text-xl vel-font-thin vel-text-neutral-800 vel-mb-1">Thin — 100</p>
      <p class="vel-text-xl vel-font-light vel-text-neutral-800 vel-mb-1">Light — 300</p>
      <p class="vel-text-xl vel-font-normal vel-text-neutral-800 vel-mb-1">Normal — 400</p>
      <p class="vel-text-xl vel-font-medium vel-text-neutral-800 vel-mb-1">Medium — 500</p>
      <p class="vel-text-xl vel-font-semibold vel-text-neutral-800 vel-mb-1">Semibold — 600</p>
      <p class="vel-text-xl vel-font-bold vel-text-neutral-800 vel-mb-1">Bold — 700</p>
      <p class="vel-text-xl vel-font-extrabold vel-text-neutral-800 vel-mb-1">Extrabold — 800</p>
      <p class="vel-text-xl vel-font-black vel-text-neutral-800 vel-mb-1">Black — 900</p>
    </section>

    <section>
      <h2 class="vel-text-xs vel-font-semibold vel-text-neutral-400 vel-uppercase vel-tracking-widest vel-mb-4">Colors</h2>
      <p class="vel-text-primary vel-text-lg vel-font-medium vel-mb-1">vel-text-primary</p>
      <p class="vel-text-success vel-text-lg vel-font-medium vel-mb-1">vel-text-success</p>
      <p class="vel-text-danger vel-text-lg vel-font-medium vel-mb-1">vel-text-danger</p>
      <p class="vel-text-warning vel-text-lg vel-font-medium vel-mb-1">vel-text-warning</p>
      <p class="vel-text-info vel-text-lg vel-font-medium vel-mb-1">vel-text-info</p>
      <p class="vel-text-neutral-400 vel-text-lg vel-font-medium">vel-text-neutral-400</p>
    </section>

  </div>
</div>`,"Hero Section":`<div class="vel-min-h-screen vel-bg-white">

  <!-- Nav -->
  <nav class="vel-flex vel-items-center vel-justify-between vel-px-8 vel-py-5 vel-border-b vel-border-neutral-100">
    <div class="vel-flex vel-items-center vel-gap-2">
      <div style="background:#7c5cfc;color:#fff;font-weight:800;font-size:13px;padding:4px 10px;border-radius:6px">vel</div>
      <span class="vel-font-semibold vel-text-neutral-900">VeloraCSS</span>
    </div>
    <div class="vel-flex vel-items-center vel-gap-6">
      <a class="vel-text-sm vel-text-neutral-500">Docs</a>
      <a class="vel-text-sm vel-text-neutral-500">Components</a>
      <a class="vel-text-sm vel-text-neutral-500">Examples</a>
      <button class="vel-btn vel-btn-primary vel-btn-sm">Get Started</button>
    </div>
  </nav>

  <!-- Hero -->
  <div class="vel-flex vel-flex-col vel-items-center vel-text-center vel-px-8 vel-pt-20 vel-pb-16">
    <div class="vel-bg-primary-light vel-text-primary vel-text-xs vel-font-semibold vel-px-3 vel-py-1 vel-rounded-full vel-mb-6">
      Now in v0.2 — gradients, animations &amp; 10 new components
    </div>
    <h1 class="vel-text-6xl vel-font-black vel-text-neutral-900 vel-tracking-tight vel-mb-6" style="line-height:1.1">
      Build fast.<br>Look great.
    </h1>
    <p class="vel-text-xl vel-text-neutral-500 vel-max-w-lg vel-leading-relaxed vel-mb-10">
      VeloraCSS is a fully original utility-first CSS framework with rich components,
      zero footprints from other frameworks, and a consistent design system.
    </p>
    <div class="vel-flex vel-gap-4 vel-justify-center vel-mb-16">
      <button class="vel-btn vel-btn-primary vel-btn-lg">Start Building</button>
      <button class="vel-btn vel-btn-outline-primary vel-btn-lg">View Docs</button>
    </div>

    <!-- Feature cards -->
    <div class="vel-grid vel-grid-cols-3 vel-gap-6 vel-max-w-3xl vel-w-full">
      <div class="vel-card vel-card-flat vel-text-left vel-p-6">
        <div class="vel-text-2xl vel-mb-3">⚡</div>
        <h3 class="vel-font-semibold vel-text-neutral-900 vel-mb-1">Utility-first</h3>
        <p class="vel-text-sm vel-text-neutral-500">Compose any design directly in HTML with low-level utility classes.</p>
      </div>
      <div class="vel-card vel-card-flat vel-text-left vel-p-6">
        <div class="vel-text-2xl vel-mb-3">🧩</div>
        <h3 class="vel-font-semibold vel-text-neutral-900 vel-mb-1">Rich Components</h3>
        <p class="vel-text-sm vel-text-neutral-500">Production-ready buttons, cards, forms, modals, and more.</p>
      </div>
      <div class="vel-card vel-card-flat vel-text-left vel-p-6">
        <div class="vel-text-2xl vel-mb-3">🎨</div>
        <h3 class="vel-font-semibold vel-text-neutral-900 vel-mb-1">Design Tokens</h3>
        <p class="vel-text-sm vel-text-neutral-500">Consistent spacing, colors, and typography with CSS custom properties.</p>
      </div>
    </div>
  </div>

</div>`},Ep=no.Starter,_p=`/* Add your custom CSS here */
`,mi=[{id:"full",label:"Full",width:null,icon:"⬛"},{id:"desktop",label:"1280",width:1280,icon:"🖥"},{id:"tablet",label:"768",width:768,icon:"📱"},{id:"mobile",label:"375",width:375,icon:"📱"}],O={bg:"#0a0f1e",header:"#060b17",surface:"#131929",surface2:"#1a2236",border:"#1e2d45",text:"#e2e8f0",muted:"#64748b",accent:"#7c5cfc"};function Pp(e){return Lc.compressToEncodedURIComponent(e)}function Tp(e){try{return Lc.decompressFromEncodedURIComponent(e)??""}catch{return""}}async function pi(e){try{await navigator.clipboard.writeText(e)}catch{const n=document.createElement("textarea");n.value=e,n.style.cssText="position:fixed;top:0;left:0;opacity:0",document.body.appendChild(n),n.select(),document.execCommand("copy"),document.body.removeChild(n)}}function fi({onClick:e,children:n,active:r,title:l}){return D.jsx("button",{onClick:e,title:l,style:{display:"flex",alignItems:"center",gap:"6px",padding:"5px 12px",borderRadius:"6px",fontSize:"12px",fontWeight:500,cursor:"pointer",background:r?O.accent:O.surface2,color:r?"#fff":O.muted,border:`1px solid ${r?O.accent:O.border}`,transition:"all .15s"},children:n})}function Lp({device:e,current:n,onClick:r}){const l=e.id===n;return D.jsx("button",{onClick:r,title:e.label==="Full"?"Full width":`${e.label}px`,style:{padding:"4px 10px",borderRadius:"5px",fontSize:"11px",fontWeight:500,cursor:"pointer",background:l?O.accent:"transparent",color:l?"#fff":O.muted,border:`1px solid ${l?O.accent:"transparent"}`,transition:"all .15s"},children:e.label==="Full"?"Full":`${e.label}px`})}function Np(){const[e,n]=_.useState(Ep),[r,l]=_.useState(_p),[t,a]=_.useState("html"),[o,i]=_.useState("full"),[v,s]=_.useState(!1),[g,p]=_.useState(!1),[m,y]=_.useState(!1),[k,S]=_.useState("Starter"),M=_.useRef(null);_.useEffect(()=>{const f=window.location.hash.match(/[#&]code=([^&]+)/);if(f){const b=Tp(f[1]);b&&(n(b),S(""))}},[]),_.useEffect(()=>{function h(f){M.current&&!M.current.contains(f.target)&&y(!1)}return document.addEventListener("mousedown",h),()=>document.removeEventListener("mousedown",h)},[]);const d=_.useCallback(()=>{pi(e),s(!0),setTimeout(()=>s(!1),2e3)},[e]),c=_.useCallback(()=>{const h=Pp(e),f=`${window.location.origin}${window.location.pathname}#code=${h}`;pi(f),window.history.replaceState(null,"",`#code=${h}`),p(!0),setTimeout(()=>p(!1),2500)},[e]),u=_.useCallback(h=>{n(no[h]),S(h),y(!1),a("html"),window.history.replaceState(null,"",window.location.pathname)},[]),x=mi.find(h=>h.id===o);return D.jsxs("div",{style:{display:"flex",flexDirection:"column",height:"100vh",background:O.bg,color:O.text,fontFamily:"system-ui, sans-serif"},children:[D.jsxs("header",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"0 16px",height:"48px",flexShrink:0,background:O.header,borderBottom:`1px solid ${O.border}`},children:[D.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px"},children:[D.jsx("img",{src:Uc,alt:"VeloraCSS",style:{height:"32px",width:"auto"}}),D.jsx("div",{style:{width:"1px",height:"20px",background:O.border}}),D.jsx("span",{style:{fontSize:"11px",color:O.muted,background:O.surface2,padding:"2px 7px",borderRadius:"4px",border:`1px solid ${O.border}`},children:"v0.2.0"}),D.jsx("div",{style:{width:"1px",height:"20px",background:O.border}}),D.jsxs("div",{ref:M,style:{position:"relative"},children:[D.jsxs("button",{onClick:()=>y(h=>!h),style:{display:"flex",alignItems:"center",gap:"6px",padding:"5px 12px",borderRadius:"6px",fontSize:"12px",fontWeight:500,cursor:"pointer",background:m?O.surface:"transparent",color:m?O.text:O.muted,border:`1px solid ${m?O.border:"transparent"}`,transition:"all .15s"},children:[k||"Examples",D.jsx("span",{style:{fontSize:"9px",opacity:.6},children:"▼"})]}),m&&D.jsx("div",{style:{position:"absolute",top:"calc(100% + 6px)",left:0,background:O.surface,border:`1px solid ${O.border}`,borderRadius:"10px",padding:"6px",zIndex:100,minWidth:"180px",boxShadow:"0 8px 32px rgba(0,0,0,.5)"},children:Object.keys(no).map(h=>D.jsx("button",{onClick:()=>u(h),style:{display:"block",width:"100%",textAlign:"left",padding:"8px 12px",borderRadius:"6px",fontSize:"13px",cursor:"pointer",border:"none",background:k===h?O.surface2:"transparent",color:k===h?O.text:O.muted,fontWeight:k===h?600:400,transition:"all .1s"},children:h},h))})]})]}),D.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[D.jsx("a",{href:window.location.hostname==="localhost"?"http://localhost:3000/docs":`${window.location.origin}/veloracss/docs`,target:"_blank",rel:"noopener noreferrer",style:{display:"flex",alignItems:"center",gap:"6px",padding:"5px 12px",borderRadius:"6px",fontSize:"12px",fontWeight:500,cursor:"pointer",textDecoration:"none",background:O.surface2,color:"#c4b5fd",border:`1px solid ${O.border}`},children:"Docs"}),D.jsx("a",{href:window.location.hostname==="localhost"?"http://localhost:3000":`${window.location.origin}/veloracss`,target:"_blank",rel:"noopener noreferrer",style:{display:"flex",alignItems:"center",gap:"6px",padding:"5px 12px",borderRadius:"6px",fontSize:"12px",fontWeight:500,cursor:"pointer",textDecoration:"none",background:O.surface2,color:O.muted,border:`1px solid ${O.border}`},children:"Next.js Demo"}),D.jsx(fi,{onClick:d,children:v?"✓ Copied":"Copy HTML"}),D.jsx(fi,{onClick:c,active:g,children:g?"✓ Link copied!":"🔗 Share"})]})]}),D.jsxs("div",{style:{display:"flex",flex:1,overflow:"hidden"},children:[D.jsxs("div",{style:{width:"50%",display:"flex",flexDirection:"column",borderRight:`1px solid ${O.border}`},children:[D.jsx("div",{style:{display:"flex",alignItems:"center",borderBottom:`1px solid ${O.border}`,flexShrink:0,background:O.header,height:"38px"},children:["html","css"].map(h=>D.jsx("button",{onClick:()=>a(h),style:{padding:"0 18px",height:"38px",fontSize:"12px",fontWeight:500,background:"transparent",cursor:"pointer",border:"none",color:t===h?O.text:O.muted,borderBottom:t===h?`2px solid ${O.accent}`:"2px solid transparent",letterSpacing:"0.04em"},children:h.toUpperCase()},h))}),D.jsx("div",{style:{flex:1,overflow:"hidden"},children:t==="html"?D.jsx(ui,{value:e,onChange:h=>n(h??""),language:"html"},"html"):D.jsx(ui,{value:r,onChange:h=>l(h??""),language:"css"},"css")})]}),D.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",overflow:"hidden"},children:[D.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"0 12px",height:"38px",flexShrink:0,background:O.header,borderBottom:`1px solid ${O.border}`},children:[D.jsx("span",{style:{fontSize:"11px",color:O.muted,letterSpacing:"0.05em",textTransform:"uppercase"},children:"Preview"}),D.jsx("div",{style:{display:"flex",gap:"2px",background:O.surface,padding:"2px",borderRadius:"7px",border:`1px solid ${O.border}`},children:mi.map(h=>D.jsx(Lp,{device:h,current:o,onClick:()=>i(h.id)},h.id))})]}),D.jsx("div",{style:{flex:1,overflow:"auto",display:"flex",justifyContent:"center",background:o==="full"?"transparent":"#0d1422",padding:o==="full"?"0":"20px"},children:D.jsx("div",{style:{width:x.width?`${x.width}px`:"100%",height:o==="full"?"100%":"calc(100vh - 130px)",flexShrink:0,borderRadius:o==="full"?"0":"8px",overflow:"hidden",boxShadow:o==="full"?"none":"0 0 0 1px rgba(255,255,255,.08), 0 20px 60px rgba(0,0,0,.6)"},children:D.jsx(Sp,{html:e,customCss:r,veloraCss:jp})})})]})]})]})}Pc(document.getElementById("root")).render(D.jsx(_.StrictMode,{children:D.jsx(Np,{})}));
