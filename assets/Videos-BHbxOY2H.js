const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./VideoViewer-BCWo9I5D.js","./index-D8lj48wL.js","./index-CI5G5P8X.css","./videos-DgR9lMv-.js","./MyApp-_mEfa4UP.js","./VideoWithMuted-21rf1CFR.js","./download-DE77ekA1.js"])))=>i.map(i=>d[i]);
import{r as m,aW as s,cz as n,a_ as c,b5 as u}from"./index-D8lj48wL.js";import f from"./Collection-Dc4uRfJ6.js";import{r as h,B as t,I as a,a as x}from"./MyApp-_mEfa4UP.js";import{a as b,b as y,g as w}from"./videos-DgR9lMv-.js";import{L as I}from"./index-DKX6QkeT.js";import"./index-DHylZWo9.js";import"./file-download-CBPOdiL1.js";import"./react-hotkeys-hook.esm-L2Ij9gBf.js";import"./index-CbSUrL_P.js";import"./index-Br_7PTOt.js";import"./index-eSksmJ98.js";import"./index-sY3YJ_q7.js";import"./Dropdown-BBQw4na4.js";import"./PurePanel-D2FZFCup.js";import"./move-vYydv1po.js";import"./index-DOPk-FpB.js";import"./TextArea-D5kHp6_9.js";import"./SearchOutlined-BVYQ1OH0.js";import"./index-BfEHgXxC.js";import"./Pagination-CNy-xyn-.js";import"./useBreakpoint-8sLzhOyZ.js";import"./useForceUpdate-CiJiJEKd.js";import"./index-14oaa5Hy.js";import"./index-CwEIKd7m.js";import"./List-BoWMCX5Y.js";import"./DownOutlined-gOQbjFLc.js";import"./row-D5HFhQxs.js";import"./col-opQJZWQz.js";const j=m.lazy(()=>u(()=>import("./VideoViewer-BCWo9I5D.js"),__vite__mapDeps([0,1,2,3,4,5,6]),import.meta.url));function $({target:i}){const p=m.useCallback(async(o=[],e)=>{var r;return!(i!=null&&i.id)||!(i!=null&&i.type)?void 0:(e=e||((r=o==null?void 0:o[(o==null?void 0:o.length)-1])==null?void 0:r.cursor)||"",((i==null?void 0:i.type)===h.Group?await b({id:i==null?void 0:i.id,cursor:e}):await y({id:i==null?void 0:i.id,cursor:e})).videos)},[i]),l=m.useCallback(async o=>{if(!o.source){const e=await w(o.id);o.source=e.source}return{url:o.source,name:o.id+".mp4"}},[]),d=m.useCallback(o=>s.jsx(I.Item,{className:"show-on-hover-trigger",children:s.jsxs(t.Ribbon,{text:o.length?n(o.length):null,style:{opacity:o.length?1:0},children:[s.jsx(a,{src:o.picture,width:200,height:200,style:{objectFit:"cover",borderRadius:10},preview:{destroyOnClose:!0,imageRender:()=>s.jsx(j,{info:o,style:{maxWidth:"90vw",maxHeight:"90vh"}}),toolbarRender:()=>null}}),s.jsx(c,{type:"default",icon:s.jsx("i",{className:"fa-solid fa-up-right-from-square"}),style:{position:"absolute",bottom:10,right:10},className:"show-on-hover-item",target:"_blank",href:x(o.id)})]})}),[]);return s.jsx(f,{collectionName:(i==null?void 0:i.name)+" - Videos",fetchNext:p,renderItem:d,downloadItem:l,getItemCursor:o=>o.cursor,rowKey:o=>o.id})}export{$ as default};
