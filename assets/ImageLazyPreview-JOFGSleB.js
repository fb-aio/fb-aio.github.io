import{am as L,r as f,ap as h}from"./index-Cf37-PAr.js";import{u as k,v as x,z as C}from"./MyApp-CUp6bKir.js";import{I}from"./index-6Zr23mvO.js";import"./addEventListener-CcBG4TIb.js";function j(g){const{cacheId:p,getPreview:d,renderPreview:s,...a}=g,{message:n}=L.useApp(),{ti:c}=k(),r=a.src||"",o="ImageLazyPreview."+(p||r),[y,i]=f.useState(!1),[l,u]=f.useState(x(o,"")),v=async()=>{if(!l)try{i(!0),n.loading({duration:0,key:o,content:c({en:"Loading...",vi:"Đang tải..."})});let t=performance.now();const e=await d();let w=performance.now();console.log("getPreview",w-t),e&&e!==r&&(u(e),C(o,e)),n.destroy(o)}catch(t){console.error(t),n.error({key:o,content:c({en:"Load failed: ",vi:"Load lỗi: "})+t.message})}finally{i(!1)}},m=l||r;return h.jsx(I,{...a,preview:typeof s=="function"?s(m,y):{src:m},onClick:t=>{var e;(e=a.onClick)==null||e.call(a,t),v()}})}export{j as default};
