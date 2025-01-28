import{bT as M,bF as z,r as i}from"./index-BLu4pHkP.js";var P,J;function V(){if(J)return P;J=1;var t="Expected a function",r=NaN,c="[object Symbol]",u=/^\s+|\s+$/g,v=/^[-+]0x[0-9a-f]+$/i,y=/^0b[01]+$/i,a=/^0o[0-7]+$/i,d=parseInt,W=typeof M=="object"&&M&&M.Object===Object&&M,l=typeof self=="object"&&self&&self.Object===Object&&self,k=W||l||Function("return this")(),T=Object.prototype,I=T.toString,F=Math.max,b=Math.min,o=function(){return k.Date.now()};function $(e,s,m){var E,R,A,j,f,h,S=0,q=!1,O=!1,w=!0;if(typeof e!="function")throw new TypeError(t);s=C(s)||0,x(m)&&(q=!!m.leading,O="maxWait"in m,A=O?F(C(m.maxWait)||0,s):A,w="trailing"in m?!!m.trailing:w);function B(n){var g=E,L=R;return E=R=void 0,S=n,j=e.apply(L,g),j}function K(n){return S=n,f=setTimeout(N,s),q?B(n):j}function Q(n){var g=n-h,L=n-S,H=s-g;return O?b(H,A-L):H}function G(n){var g=n-h,L=n-S;return h===void 0||g>=s||g<0||O&&L>=A}function N(){var n=o();if(G(n))return U(n);f=setTimeout(N,Q(n))}function U(n){return f=void 0,w&&E?B(n):(E=R=void 0,j)}function Y(){f!==void 0&&clearTimeout(f),S=0,E=h=R=f=void 0}function Z(){return f===void 0?j:U(o())}function D(){var n=o(),g=G(n);if(E=arguments,R=this,h=n,g){if(f===void 0)return K(h);if(O)return f=setTimeout(N,s),B(h)}return f===void 0&&(f=setTimeout(N,s)),j}return D.cancel=Y,D.flush=Z,D}function x(e){var s=typeof e;return!!e&&(s=="object"||s=="function")}function p(e){return!!e&&typeof e=="object"}function _(e){return typeof e=="symbol"||p(e)&&I.call(e)==c}function C(e){if(typeof e=="number")return e;if(_(e))return r;if(x(e)){var s=typeof e.valueOf=="function"?e.valueOf():e;e=x(s)?s+"":s}if(typeof e!="string")return e===0?e:+e;e=e.replace(u,"");var m=y.test(e);return m||a.test(e)?d(e.slice(2),m?2:8):v.test(e)?r:+e}return P=$,P}var ee=V();const X=z(ee);var ne=typeof window<"u"?i.useLayoutEffect:i.useEffect;function se(t,r){const c=i.useRef(t);ne(()=>{c.current=t},[t]),i.useEffect(()=>{const u=setInterval(()=>{c.current()},r);return()=>{clearInterval(u)}},[r])}function te(t){const r=i.useRef(t);r.current=t,i.useEffect(()=>()=>{r.current()},[])}function ie(t,r=500,c){const u=i.useRef();te(()=>{u.current&&u.current.cancel()});const v=i.useMemo(()=>{const y=X(t,r,c),a=(...d)=>y(...d);return a.cancel=()=>{y.cancel()},a.isPending=()=>!!u.current,a.flush=()=>y.flush(),a},[t,r,c]);return i.useEffect(()=>{u.current=X(t,r,c)},[t,r,c]),v}function ue({threshold:t=0,root:r=null,rootMargin:c="0%",freezeOnceVisible:u=!1,initialIsIntersecting:v=!1,onChange:y}={}){var a;const[d,W]=i.useState(null),[l,k]=i.useState(()=>({isIntersecting:v,entry:void 0})),T=i.useRef();T.current=y;const I=((a=l.entry)==null?void 0:a.isIntersecting)&&u;i.useEffect(()=>{if(!d||!("IntersectionObserver"in window)||I)return;const o=new IntersectionObserver($=>{const x=Array.isArray(o.thresholds)?o.thresholds:[o.thresholds];$.forEach(p=>{const _=p.isIntersecting&&x.some(C=>p.intersectionRatio>=C);k({isIntersecting:_,entry:p}),T.current&&T.current(_,p)})},{threshold:t,root:r,rootMargin:c});return o.observe(d),()=>{o.disconnect()}},[d,JSON.stringify(t),r,c,I,u]);const F=i.useRef(null);i.useEffect(()=>{var o;!d&&((o=l.entry)!=null&&o.target)&&!u&&!I&&F.current!==l.entry.target&&(F.current=l.entry.target,k({isIntersecting:v,entry:void 0}))},[d,l.entry,u,I,v]);const b=[W,!!l.isIntersecting,l.entry];return b.ref=b[0],b.isIntersecting=b[1],b.entry=b[2],b}export{ue as a,se as b,ie as u};
