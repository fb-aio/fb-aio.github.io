const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./VideoViewer-IUnSBibV.js","./index-Cfldxvxn.js","./index-BvuCkfkn.css","./videos-BAelQDq3.js","./MyApp-DfLIkit0.js","./VideoWithMuted-brddZjk9.js"])))=>i.map(i=>d[i]);
import{r as m,aM as s,cu as n,aQ as c,aX as u}from"./index-Cfldxvxn.js";import f from"./Collection-CTplUhYq.js";import{w as h,B as t,a}from"./MyApp-DfLIkit0.js";import{a as x,b as y,g as b}from"./videos-BAelQDq3.js";import{L as w}from"./index-IzHO_Iw4.js";import{I}from"./index-D6pDVHgB.js";import"./index-TzU1NHuA.js";import"./file-download-DkBxbiL2.js";import"./index-B6mFG7la.js";import"./Dropdown-rxUGbstI.js";import"./PurePanel-CdQl6ToW.js";import"./move-B4I-_4o4.js";import"./index-Dlor9x-6.js";import"./index-CMRZ-Ii7.js";import"./TextArea-DatG5v4l.js";import"./EyeOutlined-BmIOsrY6.js";import"./SearchOutlined-BBc8TCpi.js";import"./index-Bazl6V3v.js";import"./Pagination-ZkXhT7N8.js";import"./useBreakpoint-zd_8jrTA.js";import"./responsiveObserver-B5hu0Rf4.js";import"./index-Vd1Y5iii.js";import"./index-C9ySpSsi.js";import"./DownOutlined-CdwcTXBW.js";import"./row-DWg2GWfi.js";import"./addEventListener-DftYHRAD.js";const j=m.lazy(()=>u(()=>import("./VideoViewer-IUnSBibV.js"),__vite__mapDeps([0,1,2,3,4,5]),import.meta.url));function Y({target:i}){const p=m.useCallback(async(o=[],e)=>{var r;return!(i!=null&&i.id)||!(i!=null&&i.type)?void 0:(e=e||((r=o==null?void 0:o[(o==null?void 0:o.length)-1])==null?void 0:r.cursor)||"",((i==null?void 0:i.type)===h.Group?await x({id:i==null?void 0:i.id,cursor:e}):await y({id:i==null?void 0:i.id,cursor:e})).videos)},[i]),l=m.useCallback(async o=>{if(!o.source){const e=await b(o.id);o.source=e.source}return{url:o.source,name:o.id+".mp4"}},[]),d=m.useCallback(o=>s.jsx(w.Item,{className:"show-on-hover-trigger",children:s.jsxs(t.Ribbon,{text:o.length?n(o.length):null,style:{opacity:o.length?1:0},children:[s.jsx(I,{src:o.picture,width:200,height:200,style:{objectFit:"cover",borderRadius:10},preview:{destroyOnClose:!0,imageRender:()=>s.jsx(j,{info:o,style:{maxWidth:"90vw",maxHeight:"90vh"}}),toolbarRender:()=>null}}),s.jsx(c,{type:"default",icon:s.jsx("i",{className:"fa-solid fa-up-right-from-square"}),style:{position:"absolute",bottom:10,right:10},className:"show-on-hover-item",target:"_blank",href:a(o.id)})]})}),[]);return s.jsx(f,{collectionName:(i==null?void 0:i.name)+" - Videos",fetchNext:p,renderItem:d,downloadItem:l,getItemCursor:o=>o.cursor,rowKey:o=>o.id})}export{Y as default};
