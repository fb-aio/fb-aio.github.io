System.register(["./index-legacy-Dki3Arq9.js"],(function(t,e){"use strict";var n,r,i;return{setters:[t=>{n=t.bT,r=t.bF,i=t.r}],execute:function(){var e,o;t({a:function({threshold:t=0,root:e=null,rootMargin:n="0%",freezeOnceVisible:r=!1,initialIsIntersecting:o=!1,onChange:u}={}){var c;const[s,f]=i.useState(null),[a,l]=i.useState((()=>({isIntersecting:o,entry:void 0}))),v=i.useRef();v.current=u;const y=(null==(c=a.entry)?void 0:c.isIntersecting)&&r;i.useEffect((()=>{if(!s)return;if(!("IntersectionObserver"in window))return;if(y)return;const r=new IntersectionObserver((t=>{const e=Array.isArray(r.thresholds)?r.thresholds:[r.thresholds];t.forEach((t=>{const n=t.isIntersecting&&e.some((e=>t.intersectionRatio>=e));l({isIntersecting:n,entry:t}),v.current&&v.current(n,t)}))}),{threshold:t,root:e,rootMargin:n});return r.observe(s),()=>{r.disconnect()}}),[s,JSON.stringify(t),e,n,y,r]);const d=i.useRef(null);i.useEffect((()=>{var t;s||!(null==(t=a.entry)?void 0:t.target)||r||y||d.current===a.entry.target||(d.current=a.entry.target,l({isIntersecting:o,entry:void 0}))}),[s,a.entry,r,y,o]);const g=[f,!!a.isIntersecting,a.entry];return g.ref=g[0],g.isIntersecting=g[1],g.entry=g[2],g},b:function(t,e){const n=i.useRef(t);s((()=>{n.current=t}),[t]),i.useEffect((()=>{const t=setInterval((()=>{n.current()}),e);return()=>{clearInterval(t)}}),[e])},u:function(t,e=500,n){const r=i.useRef();!function(t){const e=i.useRef(t);e.current=t,i.useEffect((()=>()=>{e.current()}),[])}((()=>{r.current&&r.current.cancel()}));const o=i.useMemo((()=>{const i=c(t,e,n),o=(...t)=>i(...t);return o.cancel=()=>{i.cancel()},o.isPending=()=>!!r.current,o.flush=()=>i.flush(),o}),[t,e,n]);return i.useEffect((()=>{r.current=c(t,e,n)}),[t,e,n]),o}});var u=function(){if(o)return e;o=1;var t=/^\s+|\s+$/g,r=/^[-+]0x[0-9a-f]+$/i,i=/^0b[01]+$/i,u=/^0o[0-7]+$/i,c=parseInt,s="object"==typeof n&&n&&n.Object===Object&&n,f="object"==typeof self&&self&&self.Object===Object&&self,a=s||f||Function("return this")(),l=Object.prototype.toString,v=Math.max,y=Math.min,d=function(){return a.Date.now()};function g(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function b(e){if("number"==typeof e)return e;if(function(t){return"symbol"==typeof t||function(t){return!!t&&"object"==typeof t}(t)&&"[object Symbol]"==l.call(t)}(e))return NaN;if(g(e)){var n="function"==typeof e.valueOf?e.valueOf():e;e=g(n)?n+"":n}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(t,"");var o=i.test(e);return o||u.test(e)?c(e.slice(2),o?2:8):r.test(e)?NaN:+e}return e=function(t,e,n){var r,i,o,u,c,s,f=0,a=!1,l=!1,h=!0;if("function"!=typeof t)throw new TypeError("Expected a function");function p(e){var n=r,o=i;return r=i=void 0,f=e,u=t.apply(o,n)}function m(t){var n=t-s;return void 0===s||n>=e||n<0||l&&t-f>=o}function I(){var t=d();if(m(t))return j(t);c=setTimeout(I,function(t){var n=e-(t-s);return l?y(n,o-(t-f)):n}(t))}function j(t){return c=void 0,h&&r?p(t):(r=i=void 0,u)}function O(){var t=d(),n=m(t);if(r=arguments,i=this,s=t,n){if(void 0===c)return function(t){return f=t,c=setTimeout(I,e),a?p(t):u}(s);if(l)return c=setTimeout(I,e),p(s)}return void 0===c&&(c=setTimeout(I,e)),u}return e=b(e)||0,g(n)&&(a=!!n.leading,o=(l="maxWait"in n)?v(b(n.maxWait)||0,e):o,h="trailing"in n?!!n.trailing:h),O.cancel=function(){void 0!==c&&clearTimeout(c),f=0,r=s=i=c=void 0},O.flush=function(){return void 0===c?u:j(d())},O},e}();const c=r(u);var s="undefined"!=typeof window?i.useLayoutEffect:i.useEffect}}}));
