const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./VideoViewer-BX843acs.js","./index-DnVdc2zz.js","./index-9SBFHPtm.css","./videos-BfSK5mdd.js","./MyApp-BxPDuCeg.js","./VideoWithMuted-DWpO-OuY.js"])))=>i.map(i=>d[i]);
import{r as m,aK as s,ci as n,aM as c,aT as u}from"./index-DnVdc2zz.js";import{C as f}from"./Collection-Bw_okTuH.js";import{r as h,B as a,a as x}from"./MyApp-BxPDuCeg.js";import{a as b,b as t,g as y}from"./videos-BfSK5mdd.js";import{L as w}from"./index-CAYHiZ-v.js";import{I as v}from"./index-D_dLy7kO.js";import"./index-6GxVlyAi.js";import"./file-download-AHZN7f74.js";import"./index-C4RRQZEt.js";import"./Dropdown-Dkm8UCD4.js";import"./PurePanel-BMdKMPL-.js";import"./index-DHeN8cpO.js";import"./index-rEbSzkP-.js";import"./index-C151K2AP.js";import"./EyeOutlined-Cx8w1uhu.js";import"./SearchOutlined-C_P5lbqS.js";import"./index--bZj0aaQ.js";import"./Pagination-C_hhi2MC.js";import"./useBreakpoint-BtDikWLr.js";import"./index-C8k3d9t2.js";import"./row-BHloR7EZ.js";import"./addEventListener-CEBNEg6J.js";const I=m.lazy(()=>u(()=>import("./VideoViewer-BX843acs.js"),__vite__mapDeps([0,1,2,3,4,5]),import.meta.url));function W({target:i}){const l=m.useCallback(async(o=[],e)=>{var r;return!(i!=null&&i.id)||!(i!=null&&i.type)?void 0:(e=e||((r=o==null?void 0:o[(o==null?void 0:o.length)-1])==null?void 0:r.cursor)||"",((i==null?void 0:i.type)===h.Group?await b({id:i==null?void 0:i.id,cursor:e}):await t({id:i==null?void 0:i.id,cursor:e})).videos)},[i]),p=m.useCallback(async o=>{if(!o.source){const e=await y(o.id);o.source=e.source}return{url:o.source,name:o.id+".mp4"}},[]),d=m.useCallback(o=>s.jsx(w.Item,{className:"show-on-hover-trigger",children:s.jsxs(a.Ribbon,{text:o.length?n(o.length):null,children:[s.jsx(v,{src:o.picture,width:200,height:200,style:{objectFit:"cover",borderRadius:10},preview:{destroyOnClose:!0,imageRender:()=>s.jsx(I,{info:o,style:{maxWidth:"90vw",maxHeight:"90vh"}}),toolbarRender:()=>null}}),s.jsx(c,{type:"default",icon:s.jsx("i",{className:"fa-solid fa-up-right-from-square"}),style:{position:"absolute",bottom:10,right:10},className:"show-on-hover-item",target:"_blank",href:x(o.id)})]})}),[]);return s.jsx(f,{collectionName:(i==null?void 0:i.name)+" - Videos",fetchNext:l,renderItem:d,downloadItem:p,getItemCursor:o=>o.cursor,rowKey:o=>o.id})}export{W as default};