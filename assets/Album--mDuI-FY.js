const __vite__fileDeps=["./ImageLazyPreview-DjLnEk1j.js","./index-jA85Pu2C.js","./index-Gp9RWSdI.css","./MyApp-DNUX7VyT.js","./index-EVKzKnHM.js","./addEventListener-YHHEgOPD.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{r as t,ap as e,av as f}from"./index-jA85Pu2C.js";import{C as h}from"./Collection-C7siHobx.js";import{a1 as x,a2 as b,a4 as v}from"./MyApp-DNUX7VyT.js";import{c as y,M as n}from"./albums-CbbiU9eB.js";import{b as d}from"./index-8Y1dqF_4.js";import{L as w}from"./index-DryfwN71.js";import{I as _}from"./index-EVKzKnHM.js";import"./index-CC-1GH5F.js";import"./file-download-BSO2eFRa.js";import"./index-4RMLCcbT.js";import"./Dropdown-C6K4eR52.js";import"./PurePanel-CM90_33S.js";import"./index-D81tcsiW.js";import"./index-Cpy6ZXXu.js";import"./index-D43ImFbk.js";import"./TextArea-Cjc77Rbp.js";import"./addEventListener-YHHEgOPD.js";import"./index-CWftLrpe.js";import"./index-CH3Vcvle.js";import"./index-BfFgzcTI.js";import"./responsiveObserver-0dfvcTfU.js";import"./useBreakpoint-m6ETranh.js";import"./index-DQglTW3Y.js";import"./index-BgpxXW7v.js";import"./index-ykyObTNa.js";import"./index-CBDH66LM.js";import"./index-P9_EZE0F.js";import"./Pagination-CyVa_oRA.js";import"./row-Ct_aIBSL.js";const g=t.lazy(()=>f(()=>import("./ImageLazyPreview-DjLnEk1j.js"),__vite__mapDeps([0,1,2,3,4,5]),import.meta.url));function $({target:i,albumId:c,album:a}){const s=c||a.id,l=t.useCallback(async(r=[],o)=>{var p;return s?await y({albumId:s,accessToken:await x(b.EAAB),fromId:o||((p=r[r.length-1])==null?void 0:p.id)||""}):void 0},[s]),u=t.useCallback(r=>e.jsx(w.Item,{children:r.type==n.IMAGE?e.jsx(_,{src:r.uri,width:150,height:150,style:{objectFit:"cover",borderRadius:"10px"}}):e.jsx(g,{src:r.uri,width:150,height:150,style:{objectFit:"cover",borderRadius:"10px"},cacheId:"album_video."+r.id,getPreview:()=>d(r.id).then(o=>o.source),renderPreview:(o,m)=>({destroyOnClose:!0,imageRender:()=>e.jsx(v,{spinning:m,children:e.jsx("video",{autoPlay:!0,controls:!0,loop:!0,src:o,style:{maxWidth:"90vw",maxHeight:"90vh"}})}),toolbarRender:()=>null})})}),[]),I=t.useCallback(async r=>r.type==n.IMAGE?{url:r.uri,name:r.id+".jpg"}:{url:(await d(r.id)).source,name:r.id+".mp4"},[]);return e.jsx(h,{collectionName:(i==null?void 0:i.name)+" - Album "+a.name,fetchNext:l,renderItem:u,downloadItem:I,getItemCursor:r=>r.id,rowKey:r=>r.id})}export{$ as default};
