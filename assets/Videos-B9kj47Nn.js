const __vite__fileDeps=["./ImageLazyPreview-BHK9RndO.js","./index-DcGwMFi1.js","./index-BM_p-30O.css","./MyApp-B0rt5tZI.js","./index-B8Ur4ZN1.js","./addEventListener-D31zUCov.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{r as d,aq as e,au as u}from"./index-DcGwMFi1.js";import{A as h,B as x,U as f,V as v}from"./MyApp-B0rt5tZI.js";import{C as y}from"./Collection-sjlF4nLD.js";import{g as w,a as I,b as p}from"./videos-BR8n5IeQ.js";import{L as b}from"./index-BYZfNbcM.js";import"./index-FrNJKFDK.js";import"./file-download-D4dwkz0M.js";import"./index-CAPUUDc3.js";import"./Dropdown-Da8VIZRs.js";import"./PurePanel-Bd0K6s7P.js";import"./index-PZjQwZ3y.js";import"./TextArea-BodOEEOW.js";import"./addEventListener-D31zUCov.js";import"./Pagination-CRH5p6T8.js";import"./useBreakpoint-lNwm2n36.js";import"./responsiveObserver-CnPZ-Kfk.js";import"./row-DVr1uV3w.js";const j=d.lazy(()=>u(()=>import("./ImageLazyPreview-BHK9RndO.js"),__vite__mapDeps([0,1,2,3,4,5]),import.meta.url));function U({target:i}){const r=d.useCallback(async(o=[],s)=>{var l;return!(i!=null&&i.id)||!(i!=null&&i.type)?void 0:(s=s||((l=o==null?void 0:o[(o==null?void 0:o.length)-1])==null?void 0:l.cursor)||"",((i==null?void 0:i.type)===h.Group?await w({id:i==null?void 0:i.id,cursor:s}):await I({id:i==null?void 0:i.id,cursor:s})).videos)},[i]),m=d.useCallback(async o=>{if(!o.source){const s=await p(o.id);o.source=s.source}return{url:o.source,name:o.id+".mp4"}},[]),c=d.useCallback(o=>e.jsx(b.Item,{children:e.jsx(x.Ribbon,{text:o.length?f(o.length):null,children:e.jsx(j,{src:o.picture,width:200,height:200,style:{objectFit:"cover"},cacheId:"video."+o.id,getPreview:()=>o.source||p(o.id).then(s=>s.source),renderPreview:(s,n)=>({destroyOnClose:!0,imageRender:()=>e.jsx(v,{spinning:n,children:e.jsx("video",{autoPlay:!0,controls:!0,loop:!0,src:s,style:{maxWidth:"90vw",maxHeight:"90vh"}})}),toolbarRender:()=>null})})})}),[]);return e.jsx(y,{collectionName:(i==null?void 0:i.name)+" - Videos",fetchNext:r,renderItem:c,downloadItem:m,getItemCursor:o=>o.cursor,rowKey:o=>o.id})}export{U as default};