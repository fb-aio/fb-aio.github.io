import{N as l,$ as p}from"./index-BLu4pHkP.js";const $=["xxl","xl","lg","md","sm","xs"],u=r=>({xs:"(max-width: ".concat(r.screenXSMax,"px)"),sm:"(min-width: ".concat(r.screenSM,"px)"),md:"(min-width: ".concat(r.screenMD,"px)"),lg:"(min-width: ".concat(r.screenLG,"px)"),xl:"(min-width: ".concat(r.screenXL,"px)"),xxl:"(min-width: ".concat(r.screenXXL,"px)")}),m=r=>{const e=r,t=[].concat($).reverse();return t.forEach((o,a)=>{const n=o.toUpperCase(),i="screen".concat(n,"Min"),s="screen".concat(n);if(!(e[i]<=e[s]))throw new Error("".concat(i,"<=").concat(s," fails : !(").concat(e[i],"<=").concat(e[s],")"));if(a<t.length-1){const c="screen".concat(n,"Max");if(!(e[s]<=e[c]))throw new Error("".concat(s,"<=").concat(c," fails : !(").concat(e[s],"<=").concat(e[c],")"));const h=t[a+1].toUpperCase(),d="screen".concat(h,"Min");if(!(e[c]<=e[d]))throw new Error("".concat(c,"<=").concat(d," fails : !(").concat(e[c],"<=").concat(e[d],")"))}}),r};function f(){const[,r]=l(),e=u(m(r));return p.useMemo(()=>{const t=new Map;let o=-1,a={};return{matchHandlers:{},dispatch(n){return a=n,t.forEach(i=>i(a)),t.size>=1},subscribe(n){return t.size||this.register(),o+=1,t.set(o,n),n(a),o},unsubscribe(n){t.delete(n),t.size||this.unregister()},unregister(){Object.keys(e).forEach(n=>{const i=e[n],s=this.matchHandlers[i];s==null||s.mql.removeListener(s==null?void 0:s.listener)}),t.clear()},register(){Object.keys(e).forEach(n=>{const i=e[n],s=h=>{let{matches:d}=h;this.dispatch(Object.assign(Object.assign({},a),{[n]:d}))},c=window.matchMedia(i);c.addListener(s),this.matchHandlers[i]={mql:c,listener:s},s(c)})},responsiveMap:e}},[r])}export{$ as r,f as u};
