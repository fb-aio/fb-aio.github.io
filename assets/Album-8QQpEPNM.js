const __vite__fileDeps=["./ImageLazyPreview-DqS4XRlx.js","./index-BFPfPAaZ.js","./index-BM_p-30O.css","./MyApp-BdpL4ZtE.js","./index-B5v-xJix.js","./addEventListener-Bjda6oWl.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{r as t,ao as e,as as f}from"./index-BFPfPAaZ.js";import{C as h}from"./Collection-DRGdzvMz.js";import{Q as x,U as b,W as v}from"./MyApp-BdpL4ZtE.js";import{c as y,M as d}from"./albums-eBCyzkNg.js";import{b as c}from"./videos-BCzfD5uW.js";import{L as w}from"./index-Cnh5QOU1.js";import{I as _}from"./index-B5v-xJix.js";import"./index-1gnSJny3.js";import"./file-download-CstS00Qr.js";import"./index-Bi9aqrJh.js";import"./Dropdown-BkgZXLuV.js";import"./PurePanel-SxyVbxnL.js";import"./index-B-l378Vl.js";import"./TextArea-CJ5eWy81.js";import"./addEventListener-Bjda6oWl.js";import"./index-BkSv2wHt.js";import"./Pagination-CiSJ2nYJ.js";import"./useBreakpoint-CBpI-EAH.js";import"./responsiveObserver-B_XlD0op.js";import"./row-lZScvilV.js";const g=t.lazy(()=>f(()=>import("./ImageLazyPreview-DqS4XRlx.js"),__vite__mapDeps([0,1,2,3,4,5]),import.meta.url));function H({target:i,albumId:l,album:a}){const s=l||a.id,p=t.useCallback(async(r=[],o)=>{var n;return s?await y({albumId:s,accessToken:await x(b.EAAB),fromId:o||((n=r[r.length-1])==null?void 0:n.id)||""}):void 0},[s]),u=t.useCallback(r=>e.jsx(w.Item,{children:r.type==d.IMAGE?e.jsx(_,{src:r.uri,width:150,height:150,style:{objectFit:"cover",borderRadius:"10px"}}):e.jsx(g,{src:r.uri,width:150,height:150,style:{objectFit:"cover",borderRadius:"10px"},cacheId:"album_video."+r.id,getPreview:()=>c(r.id).then(o=>o.source),renderPreview:(o,m)=>({destroyOnClose:!0,imageRender:()=>e.jsx(v,{spinning:m,children:e.jsx("video",{autoPlay:!0,controls:!0,loop:!0,src:o,style:{maxWidth:"90vw",maxHeight:"90vh"}})}),toolbarRender:()=>null})})}),[]),I=t.useCallback(async r=>r.type==d.IMAGE?{url:r.uri,name:r.id+".jpg"}:{url:(await c(r.id)).source,name:r.id+".mp4"},[]);return e.jsx(h,{collectionName:(i==null?void 0:i.name)+" - Album "+a.name,fetchNext:p,renderItem:u,downloadItem:I,getItemCursor:r=>r.id,rowKey:r=>r.id})}export{H as default};