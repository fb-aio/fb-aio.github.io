const __vite__fileDeps=["./ImageLazyPreview-BNApne9X.js","./index-BZV4UHbq.js","./index-DjlRUb8J.css","./MyApp-CpQSQuW8.js","./index-C1wXvjkP.js","./addEventListener-C1baKXre.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{r as t,ap as e,at as f}from"./index-BZV4UHbq.js";import{C as h}from"./Collection-DparSUBE.js";import{M as x,N as b,_ as v}from"./MyApp-CpQSQuW8.js";import{c as y,M as n}from"./albums-ABCJs43x.js";import{b as d}from"./index-Dy9rZxNP.js";import{L as _}from"./index-CfX5Jbsl.js";import{I as w}from"./index-C1wXvjkP.js";import"./index-xiHX5eb3.js";import"./file-download-CNCAKmwd.js";import"./index-CHHU6JzR.js";import"./Dropdown-wsthajcj.js";import"./PurePanel-TwJPV-d4.js";import"./index-CXkeMB69.js";import"./index-bWqKXhvb.js";import"./index-BuHxvnd_.js";import"./index-B2K1fK30.js";import"./addEventListener-C1baKXre.js";import"./index-BxU63dyi.js";import"./index-BabwV2Xa.js";import"./feeds-BnaIwq36.js";import"./index-wGvFuDBQ.js";import"./responsiveObserver-DvoAOAAi.js";import"./useBreakpoint-Cfk-nNrv.js";import"./index-B9xH_X0J.js";import"./index-BVowvhMu.js";import"./index-CwnOq5eq.js";import"./index-C1PsoWax.js";import"./Pagination-BwLvSQIN.js";import"./row-BfIPyn7-.js";const g=t.lazy(()=>f(()=>import("./ImageLazyPreview-BNApne9X.js"),__vite__mapDeps([0,1,2,3,4,5]),import.meta.url));function $({target:i,albumId:c,album:m}){const s=c||m.id,l=t.useCallback(async(r=[],o)=>{var p;return s?await y({albumId:s,accessToken:await x(b.EAAB),fromId:o||((p=r[r.length-1])==null?void 0:p.id)||""}):void 0},[s]),u=t.useCallback(r=>e.jsx(_.Item,{children:r.type==n.IMAGE?e.jsx(w,{src:r.uri,width:150,height:150,style:{objectFit:"cover",borderRadius:"10px"}}):e.jsx(g,{src:r.uri,width:150,height:150,style:{objectFit:"cover",borderRadius:"10px"},cacheId:"album_video."+r.id,getPreview:()=>d(r.id).then(o=>o.source),renderPreview:(o,a)=>({destroyOnClose:!0,imageRender:()=>e.jsx(v,{spinning:a,children:e.jsx("video",{autoPlay:!0,controls:!0,loop:!0,src:o,style:{maxWidth:"90vw",maxHeight:"90vh"}})}),toolbarRender:()=>null})})}),[]),I=t.useCallback(async r=>r.type==n.IMAGE?{url:r.uri,name:r.id+".jpg"}:{url:(await d(r.id)).source,name:r.id+".mp4"},[]);return e.jsx(h,{collectionName:(i==null?void 0:i.name)+" - Album "+m.name,fetchNext:l,renderItem:u,downloadItem:I,getItemCursor:r=>r.id,rowKey:r=>r.id})}export{$ as default};
