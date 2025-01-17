import{bB as B,ap as z,r as i}from"./index-Vcj4IeAF.js";var P,J;function V(){if(J)return P;J=1;var n="Expected a function",r=NaN,c="[object Symbol]",u=/^\s+|\s+$/g,g=/^[-+]0x[0-9a-f]+$/i,y=/^0b[01]+$/i,a=/^0o[0-7]+$/i,d=parseInt,M=typeof B=="object"&&B&&B.Object===Object&&B,l=typeof self=="object"&&self&&self.Object===Object&&self,C=M||l||Function("return this")(),T=Object.prototype,I=T.toString,F=Math.max,b=Math.min,f=function(){return C.Date.now()};function h(e,s,m){var x,O,A,R,o,p,L=0,q=!1,k=!1,$=!0;if(typeof e!="function")throw new TypeError(n);s=j(s)||0,S(m)&&(q=!!m.leading,k="maxWait"in m,A=k?F(j(m.maxWait)||0,s):A,$="trailing"in m?!!m.trailing:$);function w(t){var v=x,_=O;return x=O=void 0,L=t,R=e.apply(_,v),R}function K(t){return L=t,o=setTimeout(N,s),q?w(t):R}function Q(t){var v=t-p,_=t-L,H=s-v;return k?b(H,A-_):H}function G(t){var v=t-p,_=t-L;return p===void 0||v>=s||v<0||k&&_>=A}function N(){var t=f();if(G(t))return U(t);o=setTimeout(N,Q(t))}function U(t){return o=void 0,$&&x?w(t):(x=O=void 0,R)}function Y(){o!==void 0&&clearTimeout(o),L=0,x=p=O=o=void 0}function Z(){return o===void 0?R:U(f())}function D(){var t=f(),v=G(t);if(x=arguments,O=this,p=t,v){if(o===void 0)return K(p);if(k)return o=setTimeout(N,s),w(p)}return o===void 0&&(o=setTimeout(N,s)),R}return D.cancel=Y,D.flush=Z,D}function S(e){var s=typeof e;return!!e&&(s=="object"||s=="function")}function W(e){return!!e&&typeof e=="object"}function E(e){return typeof e=="symbol"||W(e)&&I.call(e)==c}function j(e){if(typeof e=="number")return e;if(E(e))return r;if(S(e)){var s=typeof e.valueOf=="function"?e.valueOf():e;e=S(s)?s+"":s}if(typeof e!="string")return e===0?e:+e;e=e.replace(u,"");var m=y.test(e);return m||a.test(e)?d(e.slice(2),m?2:8):g.test(e)?r:+e}return P=h,P}var ee=V();const X=z(ee);var te=typeof window<"u"?i.useLayoutEffect:i.useEffect;function se(n,r){const c=i.useRef(n);te(()=>{c.current=n},[n]),i.useEffect(()=>{const u=setInterval(()=>{c.current()},r);return()=>{clearInterval(u)}},[r])}function ne(n){const r=i.useRef(n);r.current=n,i.useEffect(()=>()=>{r.current()},[])}function ie(n,r=500,c){const u=i.useRef();ne(()=>{u.current&&u.current.cancel()});const g=i.useMemo(()=>{const y=X(n,r,c),a=(...d)=>y(...d);return a.cancel=()=>{y.cancel()},a.isPending=()=>!!u.current,a.flush=()=>y.flush(),a},[n,r,c]);return i.useEffect(()=>{u.current=X(n,r,c)},[n,r,c]),g}function ue({threshold:n=0,root:r=null,rootMargin:c="0%",freezeOnceVisible:u=!1,initialIsIntersecting:g=!1,onChange:y}={}){var a;const[d,M]=i.useState(null),[l,C]=i.useState(()=>({isIntersecting:g,entry:void 0})),T=i.useRef();T.current=y;const I=((a=l.entry)==null?void 0:a.isIntersecting)&&u;i.useEffect(()=>{if(!d||!("IntersectionObserver"in window)||I)return;let f;const h=new IntersectionObserver(S=>{const W=Array.isArray(h.thresholds)?h.thresholds:[h.thresholds];S.forEach(E=>{const j=E.isIntersecting&&W.some(e=>E.intersectionRatio>=e);C({isIntersecting:j,entry:E}),T.current&&T.current(j,E),j&&u&&f&&(f(),f=void 0)})},{threshold:n,root:r,rootMargin:c});return h.observe(d),()=>{h.disconnect()}},[d,JSON.stringify(n),r,c,I,u]);const F=i.useRef(null);i.useEffect(()=>{var f;!d&&((f=l.entry)!=null&&f.target)&&!u&&!I&&F.current!==l.entry.target&&(F.current=l.entry.target,C({isIntersecting:g,entry:void 0}))},[d,l.entry,u,I,g]);const b=[M,!!l.isIntersecting,l.entry];return b.ref=b[0],b.isIntersecting=b[1],b.entry=b[2],b}export{se as a,ie as b,ue as u};
