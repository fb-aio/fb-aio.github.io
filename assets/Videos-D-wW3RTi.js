const __vite__fileDeps=["./ImageLazyPreview-Br5lG9x6.js","./index-DKFaga3j.js","./index-CmOPrJci.css","./MyApp-CTYGUCks.js","./index-BPwIcZmn.js","./addEventListener-B013kCsQ.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{r as p,aq as e,au as u}from"./index-DKFaga3j.js";import{O as h,B as x,a2 as f,a3 as v}from"./MyApp-CTYGUCks.js";import{C as y}from"./Collection-xCjW_Edn.js";import{g as w,a as I,b as d}from"./index-IJ2YhADO.js";import{L as b}from"./index-B9jyGfxw.js";import"./index-DfGDuPjo.js";import"./file-download-DsIDmcnO.js";import"./index-BbE3E4wf.js";import"./Dropdown-CXstDH3T.js";import"./PurePanel-BGelQpJk.js";import"./index-DUPY_FHc.js";import"./index-D6JW86-u.js";import"./index-DaFVeQy7.js";import"./TextArea-DkFqjJqd.js";import"./addEventListener-B013kCsQ.js";import"./index-BYyexUVN.js";import"./index-M7O5qf3O.js";import"./index-BpAnlN12.js";import"./responsiveObserver-CdLrNHO2.js";import"./useBreakpoint-CgB69gOZ.js";import"./index-gD3BU7TQ.js";import"./index-CKD40KlW.js";import"./index-CajSrSpv.js";import"./index-BPwIcZmn.js";import"./index-C835nr2D.js";import"./index-B6rHac0K.js";import"./Pagination-B1r7CiUr.js";import"./row-D7OhPBwa.js";const j=p.lazy(()=>u(()=>import("./ImageLazyPreview-Br5lG9x6.js"),__vite__mapDeps([0,1,2,3,4,5]),import.meta.url));function Y({target:i}){const n=p.useCallback(async(o=[],s)=>{var m;return!(i!=null&&i.id)||!(i!=null&&i.type)?void 0:(s=s||((m=o==null?void 0:o[(o==null?void 0:o.length)-1])==null?void 0:m.cursor)||"",((i==null?void 0:i.type)===h.Group?await w({id:i==null?void 0:i.id,cursor:s}):await I({id:i==null?void 0:i.id,cursor:s})).videos)},[i]),l=p.useCallback(async o=>{if(!o.source){const s=await d(o.id);o.source=s.source}return{url:o.source,name:o.id+".mp4"}},[]),c=p.useCallback(o=>e.jsx(b.Item,{children:e.jsx(x.Ribbon,{text:o.length?f(o.length):null,children:e.jsx(j,{src:o.picture,width:200,height:200,style:{objectFit:"cover"},cacheId:"video."+o.id,getPreview:()=>o.source||d(o.id).then(s=>s.source),renderPreview:(s,r)=>({destroyOnClose:!0,imageRender:()=>e.jsx(v,{spinning:r,children:e.jsx("video",{autoPlay:!0,controls:!0,loop:!0,src:s,style:{maxWidth:"90vw",maxHeight:"90vh"}})}),toolbarRender:()=>null})})})}),[]);return e.jsx(y,{collectionName:(i==null?void 0:i.name)+" - Videos",fetchNext:n,renderItem:c,downloadItem:l,getItemCursor:o=>o.cursor,rowKey:o=>o.id})}export{Y as default};
