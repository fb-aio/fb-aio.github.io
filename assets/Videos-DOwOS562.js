const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./VideoViewer-7YyBRrwY.js","./index-CeyGMT_V.js","./index-Dms513tq.css","./videos-DAUtLwBg.js","./MyApp-CioD1-EH.js","./VideoWithMuted-BE1xXRjT.js"])))=>i.map(i=>d[i]);
import{r as m,aL as s,cp as n,aP as c,aX as u}from"./index-CeyGMT_V.js";import{C as f}from"./Collection-CDMpAxKm.js";import{w as h,B as a,a as t}from"./MyApp-CioD1-EH.js";import{a as x,b as y,g as b}from"./videos-DAUtLwBg.js";import{L as w}from"./index-B7sfw69P.js";import{I as v}from"./index-ChfKkt-d.js";import"./index-CsZwNLds.js";import"./file-download-BN7VUWwi.js";import"./index-vJHPUTap.js";import"./Dropdown-DEJ-Gs_Y.js";import"./PurePanel-CWgCJQuB.js";import"./index-D4qYEF7y.js";import"./index-CU9TjvVd.js";import"./index-BYUZZ7Yu.js";import"./EyeOutlined-2Bn8a6ad.js";import"./SearchOutlined-CC3XFLkS.js";import"./index-CfUw_2WL.js";import"./Pagination-D9VAi25t.js";import"./useBreakpoint-B-lOGsES.js";import"./responsiveObserver-CKST1Z3I.js";import"./index-B_KTZZaH.js";import"./DownOutlined-X9k_duFa.js";import"./row-Bgd22wUk.js";import"./addEventListener-CEUbmUur.js";const I=m.lazy(()=>u(()=>import("./VideoViewer-7YyBRrwY.js"),__vite__mapDeps([0,1,2,3,4,5]),import.meta.url));function M({target:i}){const p=m.useCallback(async(o=[],e)=>{var r;return!(i!=null&&i.id)||!(i!=null&&i.type)?void 0:(e=e||((r=o==null?void 0:o[(o==null?void 0:o.length)-1])==null?void 0:r.cursor)||"",((i==null?void 0:i.type)===h.Group?await x({id:i==null?void 0:i.id,cursor:e}):await y({id:i==null?void 0:i.id,cursor:e})).videos)},[i]),l=m.useCallback(async o=>{if(!o.source){const e=await b(o.id);o.source=e.source}return{url:o.source,name:o.id+".mp4"}},[]),d=m.useCallback(o=>s.jsx(w.Item,{className:"show-on-hover-trigger",children:s.jsxs(a.Ribbon,{text:o.length?n(o.length):null,style:{opacity:o.length?1:0},children:[s.jsx(v,{src:o.picture,width:200,height:200,style:{objectFit:"cover",borderRadius:10},preview:{destroyOnClose:!0,imageRender:()=>s.jsx(I,{info:o,style:{maxWidth:"90vw",maxHeight:"90vh"}}),toolbarRender:()=>null}}),s.jsx(c,{type:"default",icon:s.jsx("i",{className:"fa-solid fa-up-right-from-square"}),style:{position:"absolute",bottom:10,right:10},className:"show-on-hover-item",target:"_blank",href:t(o.id)})]})}),[]);return s.jsx(f,{collectionName:(i==null?void 0:i.name)+" - Videos",fetchNext:p,renderItem:d,downloadItem:l,getItemCursor:o=>o.cursor,rowKey:o=>o.id})}export{M as default};
