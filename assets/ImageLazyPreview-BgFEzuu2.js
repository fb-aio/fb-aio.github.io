import{av as L,aH as h,r as m,aJ as k}from"./index-DpaN6uAl.js";import{f as x,s as C}from"./MyApp-DT7Mp6Ol.js";import{I}from"./index-BN3srwb7.js";import"./EyeOutlined-B8SRD3zh.js";import"./addEventListener-BsD1Ca8X.js";function A(g){const{cacheId:p,getPreview:d,renderPreview:s,...a}=g,{message:n}=L.useApp(),{ti:c}=h(),r=a.src||"",o="ImageLazyPreview."+(p||r),[y,i]=m.useState(!1),[l,u]=m.useState(x(o,"")),v=async()=>{if(!l)try{i(!0),n.loading({duration:0,key:o,content:c({en:"Loading...",vi:"Đang tải..."})});let t=performance.now();const e=await d();let w=performance.now();console.log("getPreview",w-t),e&&e!==r&&(u(e),C(o,e)),n.destroy(o)}catch(t){console.error(t),n.error({key:o,content:c({en:"Load failed: ",vi:"Load lỗi: "})+t.message})}finally{i(!1)}},f=l||r;return k.jsx(I,{...a,preview:typeof s=="function"?s(f,y):{src:f},onClick:t=>{var e;(e=a.onClick)==null||e.call(a,t),v()}})}export{A as default};