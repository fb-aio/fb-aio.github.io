const __vite__fileDeps=["./ImageLazyPreview-C9f6JY04.js","./index-Dwpma3vX.js","./index-CKPZ9v0x.css","./MyApp-CaAHD_sl.js","./index-BAmkjU4S.js","./addEventListener-CAhr9VRf.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{r as p,av as e,aA as u}from"./index-Dwpma3vX.js";import{U as h,B as x,a6 as f,a7 as v}from"./MyApp-CaAHD_sl.js";import{C as y}from"./Collection-Duhytgd6.js";import{g as w,a as I,b as d}from"./index-BgrGtRJv.js";import{L as b}from"./index-B1-l0GI_.js";import"./index-qYag26Fr.js";import"./file-download-BEwLUfs_.js";import"./index-CjRY1w1B.js";import"./Dropdown-Cy_5j5G7.js";import"./PurePanel-lbpTE9yy.js";import"./index-QNqn8XPT.js";import"./index-C3vKAcCx.js";import"./index-D-uzMAVF.js";import"./index-CnpxtjSf.js";import"./addEventListener-CAhr9VRf.js";import"./index-yv7_mBYm.js";import"./index-O5-mSQhR.js";import"./index-BnLGuCJ5.js";import"./useBreakpoint-B5KK-xwT.js";import"./index-D6d6ZTml.js";import"./index-3FZft9mY.js";import"./index-CKqW8jTq.js";import"./index-BAmkjU4S.js";import"./index-CHPm_ATI.js";import"./Pagination-CDlhp95V.js";import"./row-BHiT-vw1.js";const j=p.lazy(()=>u(()=>import("./ImageLazyPreview-C9f6JY04.js"),__vite__mapDeps([0,1,2,3,4,5]),import.meta.url));function Q({target:i}){const n=p.useCallback(async(o=[],s)=>{var m;return!(i!=null&&i.id)||!(i!=null&&i.type)?void 0:(s=s||((m=o==null?void 0:o[(o==null?void 0:o.length)-1])==null?void 0:m.cursor)||"",((i==null?void 0:i.type)===h.Group?await w({id:i==null?void 0:i.id,cursor:s}):await I({id:i==null?void 0:i.id,cursor:s})).videos)},[i]),l=p.useCallback(async o=>{if(!o.source){const s=await d(o.id);o.source=s.source}return{url:o.source,name:o.id+".mp4"}},[]),c=p.useCallback(o=>e.jsx(b.Item,{children:e.jsx(x.Ribbon,{text:o.length?f(o.length):null,children:e.jsx(j,{src:o.picture,width:200,height:200,style:{objectFit:"cover"},cacheId:"video."+o.id,getPreview:()=>o.source||d(o.id).then(s=>s.source),renderPreview:(s,r)=>({destroyOnClose:!0,imageRender:()=>e.jsx(v,{spinning:r,children:e.jsx("video",{autoPlay:!0,controls:!0,loop:!0,src:s,style:{maxWidth:"90vw",maxHeight:"90vh"}})}),toolbarRender:()=>null})})})}),[]);return e.jsx(y,{collectionName:(i==null?void 0:i.name)+" - Videos",fetchNext:n,renderItem:c,downloadItem:l,getItemCursor:o=>o.cursor,rowKey:o=>o.id})}export{Q as default};
