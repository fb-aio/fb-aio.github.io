System.register(["./index-legacy-DmD19Aid.js"],(function(e,s){"use strict";var r,t;return{setters:[e=>{r=e.Q,t=e.$}],execute:function(){e("u",(function(){const[,e]=r(),s=n(i(e));return t.useMemo((()=>{const e=new Map;let r=-1,t={};return{matchHandlers:{},dispatch:s=>(t=s,e.forEach((e=>e(t))),e.size>=1),subscribe(s){return e.size||this.register(),r+=1,e.set(r,s),s(t),r},unsubscribe(s){e.delete(s),e.size||this.unregister()},unregister(){Object.keys(s).forEach((e=>{const r=s[e],t=this.matchHandlers[r];null==t||t.mql.removeListener(null==t?void 0:t.listener)})),e.clear()},register(){Object.keys(s).forEach((e=>{const r=s[e],n=s=>{let{matches:r}=s;this.dispatch(Object.assign(Object.assign({},t),{[e]:r}))},i=window.matchMedia(r);i.addListener(n),this.matchHandlers[r]={mql:i,listener:n},n(i)}))},responsiveMap:s}}),[e])}));const s=e("r",["xxl","xl","lg","md","sm","xs"]),n=e=>({xs:`(max-width: ${e.screenXSMax}px)`,sm:`(min-width: ${e.screenSM}px)`,md:`(min-width: ${e.screenMD}px)`,lg:`(min-width: ${e.screenLG}px)`,xl:`(min-width: ${e.screenXL}px)`,xxl:`(min-width: ${e.screenXXL}px)`}),i=e=>{const r=e,t=[].concat(s).reverse();return t.forEach(((e,s)=>{const n=e.toUpperCase(),i=`screen${n}Min`,c=`screen${n}`;if(!(r[i]<=r[c]))throw new Error(`${i}<=${c} fails : !(${r[i]}<=${r[c]})`);if(s<t.length-1){const e=`screen${n}Max`;if(!(r[c]<=r[e]))throw new Error(`${c}<=${e} fails : !(${r[c]}<=${r[e]})`);const i=`screen${t[s+1].toUpperCase()}Min`;if(!(r[e]<=r[i]))throw new Error(`${e}<=${i} fails : !(${r[e]}<=${r[i]})`)}})),e}}}}));
