import{aw as L,aJ as h,r as f,aL as k}from"./index-Qt1L9Xiw.js";import{l as x,s as C}from"./MyApp-DDUulQzX.js";import{I}from"./index-BAuHam2U.js";import"./EyeOutlined-vPM2QFd6.js";import"./addEventListener-Dg4je8GP.js";function A(g){const{cacheId:p,getPreview:d,renderPreview:s,...a}=g,{message:n}=L.useApp(),{ti:c}=h(),r=a.src||"",o="ImageLazyPreview."+(p||r),[y,i]=f.useState(!1),[l,u]=f.useState(x(o,"")),w=async()=>{if(!l)try{i(!0),n.loading({duration:0,key:o,content:c({en:"Loading...",vi:"Đang tải..."})});let t=performance.now();const e=await d();let v=performance.now();console.log("getPreview",v-t),e&&e!==r&&(u(e),C(o,e)),n.destroy(o)}catch(t){console.error(t),n.error({key:o,content:c({en:"Load failed: ",vi:"Load lỗi: "})+t.message})}finally{i(!1)}},m=l||r;return k.jsx(I,{...a,preview:typeof s=="function"?s(m,y):{src:m},onClick:t=>{var e;(e=a.onClick)==null||e.call(a,t),w()}})}export{A as default};