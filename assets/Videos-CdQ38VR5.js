const __vite__fileDeps=["./ImageLazyPreview-Ch-vfn3W.js","./index-afV6xmFL.js","./index-DjlRUb8J.css","./MyApp-w1dCAZmS.js","./index-DeYFnKm7.js","./addEventListener-DbJu6JRZ.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{r as p,ap as e,at as u}from"./index-afV6xmFL.js";import{O as h,B as x,a2 as f,a3 as v}from"./MyApp-w1dCAZmS.js";import{C as y}from"./Collection-BqtapRiT.js";import{g as w,a as t,b as d}from"./index-D9LF9AJ5.js";import{L as I}from"./index-DEYRQcL4.js";import"./index-BZg3SOA_.js";import"./file-download-CyqwwN8K.js";import"./index-DeYlkKia.js";import"./Dropdown-QYa8_0y7.js";import"./PurePanel-BORmnDAV.js";import"./index-DVKebUpW.js";import"./index-BpN3ndT0.js";import"./index-n7yebAQ7.js";import"./TextArea-8mjLLqE_.js";import"./addEventListener-DbJu6JRZ.js";import"./index-DSTgHjmC.js";import"./index-PyBViMkf.js";import"./index-B1s29Dko.js";import"./responsiveObserver-CumPBdzS.js";import"./useBreakpoint-Da8cbzw2.js";import"./index-Bxlo9bUc.js";import"./index-vmLfNWzR.js";import"./index-8RTYIAKx.js";import"./index-DeYFnKm7.js";import"./index-DlW55O4w.js";import"./index-CeYLkgUv.js";import"./Pagination-Bts227Rk.js";import"./row-XVs_iYTD.js";const b=p.lazy(()=>u(()=>import("./ImageLazyPreview-Ch-vfn3W.js"),__vite__mapDeps([0,1,2,3,4,5]),import.meta.url));function Y({target:i}){const n=p.useCallback(async(o=[],s)=>{var m;return!(i!=null&&i.id)||!(i!=null&&i.type)?void 0:(s=s||((m=o==null?void 0:o[(o==null?void 0:o.length)-1])==null?void 0:m.cursor)||"",((i==null?void 0:i.type)===h.Group?await w({id:i==null?void 0:i.id,cursor:s}):await t({id:i==null?void 0:i.id,cursor:s})).videos)},[i]),l=p.useCallback(async o=>{if(!o.source){const s=await d(o.id);o.source=s.source}return{url:o.source,name:o.id+".mp4"}},[]),c=p.useCallback(o=>e.jsx(I.Item,{children:e.jsx(x.Ribbon,{text:o.length?f(o.length):null,children:e.jsx(b,{src:o.picture,width:200,height:200,style:{objectFit:"cover"},cacheId:"video."+o.id,getPreview:()=>o.source||d(o.id).then(s=>s.source),renderPreview:(s,r)=>({destroyOnClose:!0,imageRender:()=>e.jsx(v,{spinning:r,children:e.jsx("video",{autoPlay:!0,controls:!0,loop:!0,src:s,style:{maxWidth:"90vw",maxHeight:"90vh"}})}),toolbarRender:()=>null})})})}),[]);return e.jsx(y,{collectionName:(i==null?void 0:i.name)+" - Videos",fetchNext:n,renderItem:c,downloadItem:l,getItemCursor:o=>o.cursor,rowKey:o=>o.id})}export{Y as default};
