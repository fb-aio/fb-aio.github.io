const __vite__fileDeps=["./ImageLazyPreview-BHK9RndO.js","./index-DcGwMFi1.js","./index-BM_p-30O.css","./MyApp-B0rt5tZI.js","./index-B8Ur4ZN1.js","./addEventListener-D31zUCov.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{r as t,aq as o,au as f}from"./index-DcGwMFi1.js";import{C as h}from"./Collection-sjlF4nLD.js";import{P as x,Q as b,V as v}from"./MyApp-B0rt5tZI.js";import{c as y,M as d}from"./albums-CL9D7yCy.js";import{b as c}from"./videos-BR8n5IeQ.js";import{L as w}from"./index-BYZfNbcM.js";import{I as _}from"./index-B8Ur4ZN1.js";import"./index-FrNJKFDK.js";import"./file-download-D4dwkz0M.js";import"./index-CAPUUDc3.js";import"./Dropdown-Da8VIZRs.js";import"./PurePanel-Bd0K6s7P.js";import"./index-PZjQwZ3y.js";import"./TextArea-BodOEEOW.js";import"./addEventListener-D31zUCov.js";import"./Pagination-CRH5p6T8.js";import"./useBreakpoint-lNwm2n36.js";import"./responsiveObserver-CnPZ-Kfk.js";import"./row-DVr1uV3w.js";const g=t.lazy(()=>f(()=>import("./ImageLazyPreview-BHK9RndO.js"),__vite__mapDeps([0,1,2,3,4,5]),import.meta.url));function B({target:i,albumId:l,album:a}){const s=l||a.id,u=t.useCallback(async(r=[],e)=>{var m;return s?await y({albumId:s,accessToken:await x(b.EAAB),fromId:e||((m=r[r.length-1])==null?void 0:m.id)||""}):void 0},[s]),p=t.useCallback(r=>o.jsx(w.Item,{children:r.type==d.IMAGE?o.jsx(_,{src:r.uri,width:150,height:150,style:{objectFit:"cover",borderRadius:"10px"}}):o.jsx(g,{src:r.uri,width:150,height:150,style:{objectFit:"cover",borderRadius:"10px"},cacheId:"album_video."+r.id,getPreview:()=>c(r.id).then(e=>e.source),renderPreview:(e,n)=>({destroyOnClose:!0,imageRender:()=>o.jsx(v,{spinning:n,children:o.jsx("video",{autoPlay:!0,controls:!0,loop:!0,src:e,style:{maxWidth:"90vw",maxHeight:"90vh"}})}),toolbarRender:()=>null})})}),[]),I=t.useCallback(async r=>r.type==d.IMAGE?{url:r.uri,name:r.id+".jpg"}:{url:(await c(r.id)).source,name:r.id+".mp4"},[]);return o.jsx(h,{collectionName:(i==null?void 0:i.name)+" - Album "+a.name,fetchNext:u,renderItem:p,downloadItem:I,getItemCursor:r=>r.id,rowKey:r=>r.id})}export{B as default};