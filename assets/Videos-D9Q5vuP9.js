const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./VideoViewer-BBpLdWiq.js","./index-25lgxwTR.js","./index-Bp33I4Y9.css","./videos-DF_MvVLR.js","./MyApp-BCKP8LFO.js","./VideoWithMuted-BYBL2F3m.js"])))=>i.map(i=>d[i]);
import{r as m,aX as s,cv as n,b0 as c,b8 as u}from"./index-25lgxwTR.js";import h from"./Collection-ihu1FPD2.js";import{x as f,B as t,I as x,a}from"./MyApp-BCKP8LFO.js";import{a as b,b as y,g as v}from"./videos-DF_MvVLR.js";import{L as w}from"./index-DoFohRRP.js";import"./index-DPZYrWsx.js";import"./file-download-sBK_g5b2.js";import"./react-hotkeys-hook.esm-CjLOc5it.js";import"./index-DGDklKcF.js";import"./index-QHHrTb2x.js";import"./index-DMTNeTna.js";import"./Dropdown-BhiPm_AR.js";import"./PurePanel-TArR1aIo.js";import"./move-COjRVz6r.js";import"./index-DlUcIAF1.js";import"./TextArea-B5svcMVp.js";import"./Input-sds29n1a.js";import"./SearchOutlined-_TWJ6BuU.js";import"./index-B6QjRA0B.js";import"./Pagination-BIMcV1_a.js";import"./index-CcoCtLua.js";import"./index-BSBZEbmP.js";import"./DownOutlined-BNBUPour.js";import"./row-CvEPtL8s.js";import"./col-Dokdf0Ix.js";const I=m.lazy(()=>u(()=>import("./VideoViewer-BBpLdWiq.js"),__vite__mapDeps([0,1,2,3,4,5]),import.meta.url));function Q({target:i}){const p=m.useCallback(async(o=[],e)=>{var r;return!(i!=null&&i.id)||!(i!=null&&i.type)?void 0:(e=e||((r=o==null?void 0:o[(o==null?void 0:o.length)-1])==null?void 0:r.cursor)||"",((i==null?void 0:i.type)===f.Group?await b({id:i==null?void 0:i.id,cursor:e}):await y({id:i==null?void 0:i.id,cursor:e})).videos)},[i]),l=m.useCallback(async o=>{if(!o.source){const e=await v(o.id);o.source=e.source}return{url:o.source,name:o.id+".mp4"}},[]),d=m.useCallback(o=>s.jsx(w.Item,{className:"show-on-hover-trigger",children:s.jsxs(t.Ribbon,{text:o.length?n(o.length):null,style:{opacity:o.length?1:0},children:[s.jsx(x,{src:o.picture,width:200,height:200,style:{objectFit:"cover",borderRadius:10},preview:{destroyOnClose:!0,imageRender:()=>s.jsx(I,{info:o,style:{maxWidth:"90vw",maxHeight:"90vh"}}),toolbarRender:()=>null}}),s.jsx(c,{type:"default",icon:s.jsx("i",{className:"fa-solid fa-up-right-from-square"}),style:{position:"absolute",bottom:10,right:10},className:"show-on-hover-item",target:"_blank",href:a(o.id)})]})}),[]);return s.jsx(h,{collectionName:(i==null?void 0:i.name)+" - Videos",fetchNext:p,renderItem:d,downloadItem:l,getItemCursor:o=>o.cursor,rowKey:o=>o.id})}export{Q as default};
