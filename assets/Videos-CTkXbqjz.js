const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./VideoViewer-BloPVarW.js","./index-DkgYbfty.js","./index-CawCDZ84.css","./videos-DCiLEmGA.js","./MyApp-POGQmq3C.js","./VideoWithMuted-Bo0rIvoH.js"])))=>i.map(i=>d[i]);
import{r as m,aL as i,cl as n,aN as c,aV as u}from"./index-DkgYbfty.js";import{C as f}from"./Collection-Bm2ipuKX.js";import{w as h,B as a,a as x}from"./MyApp-POGQmq3C.js";import{a as t,b as y,g as b}from"./videos-DCiLEmGA.js";import{L as w}from"./index-CBiuIo3u.js";import{I as v}from"./index-COw9uymc.js";import"./index-CvqADRGd.js";import"./file-download-BXXwA3wK.js";import"./index-C70RGLFw.js";import"./Dropdown-CR7sAuZH.js";import"./PurePanel-UKxqbKrP.js";import"./index-zhL4mgH6.js";import"./index-CMQuKimx.js";import"./index-CsFazpkf.js";import"./EyeOutlined-B8Y7E4u9.js";import"./SearchOutlined-DNNuhkgO.js";import"./index-CGDGM-8K.js";import"./Pagination-D-nRudZt.js";import"./useBreakpoint-D8CgXv7B.js";import"./index-BpahFMki.js";import"./row-BpVBAV3P.js";import"./addEventListener-D_0srmuB.js";const I=m.lazy(()=>u(()=>import("./VideoViewer-BloPVarW.js"),__vite__mapDeps([0,1,2,3,4,5]),import.meta.url));function J({target:s}){const r=m.useCallback(async(o=[],e)=>{var l;return!(s!=null&&s.id)||!(s!=null&&s.type)?void 0:(e=e||((l=o==null?void 0:o[(o==null?void 0:o.length)-1])==null?void 0:l.cursor)||"",((s==null?void 0:s.type)===h.Group?await t({id:s==null?void 0:s.id,cursor:e}):await y({id:s==null?void 0:s.id,cursor:e})).videos)},[s]),p=m.useCallback(async o=>{if(!o.source){const e=await b(o.id);o.source=e.source}return{url:o.source,name:o.id+".mp4"}},[]),d=m.useCallback(o=>i.jsx(w.Item,{className:"show-on-hover-trigger",children:i.jsxs(a.Ribbon,{text:o.length?n(o.length):null,style:{opacity:o.length?1:0},children:[i.jsx(v,{src:o.picture,width:200,height:200,style:{objectFit:"cover",borderRadius:10},preview:{destroyOnClose:!0,imageRender:()=>i.jsx(I,{info:o,style:{maxWidth:"90vw",maxHeight:"90vh"}}),toolbarRender:()=>null}}),i.jsx(c,{type:"default",icon:i.jsx("i",{className:"fa-solid fa-up-right-from-square"}),style:{position:"absolute",bottom:10,right:10},className:"show-on-hover-item",target:"_blank",href:x(o.id)})]})}),[]);return i.jsx(f,{collectionName:(s==null?void 0:s.name)+" - Videos",fetchNext:r,renderItem:d,downloadItem:p,getItemCursor:o=>o.cursor,rowKey:o=>o.id})}export{J as default};
