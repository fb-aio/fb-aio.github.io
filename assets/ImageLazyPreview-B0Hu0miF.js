import{aw as L,aI as h,r as f,aK as k}from"./index-DnVdc2zz.js";import{k as I,s as x}from"./MyApp-BxPDuCeg.js";import{I as C}from"./index-D_dLy7kO.js";import"./EyeOutlined-Cx8w1uhu.js";import"./addEventListener-CEBNEg6J.js";function A(g){const{cacheId:p,getPreview:d,renderPreview:s,...a}=g,{message:n}=L.useApp(),{ti:c}=h(),r=a.src||"",o="ImageLazyPreview."+(p||r),[y,i]=f.useState(!1),[l,u]=f.useState(I(o,"")),w=async()=>{if(!l)try{i(!0),n.loading({duration:0,key:o,content:c({en:"Loading...",vi:"Đang tải..."})});let t=performance.now();const e=await d();let v=performance.now();console.log("getPreview",v-t),e&&e!==r&&(u(e),x(o,e)),n.destroy(o)}catch(t){console.error(t),n.error({key:o,content:c({en:"Load failed: ",vi:"Load lỗi: "})+t.message})}finally{i(!1)}},m=l||r;return k.jsx(C,{...a,preview:typeof s=="function"?s(m,y):{src:m},onClick:t=>{var e;(e=a.onClick)==null||e.call(a,t),w()}})}export{A as default};