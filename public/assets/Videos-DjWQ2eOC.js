const __vite__fileDeps=["./VideoViewer-CTB_9C3Y.js","./index-COYbw2nA.js","./index-DfqnkV-X.css","./VideoWithMuted-CKygS0gJ.js","./MyApp-BqOFGx1Y.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{r,aA as e,aB as u,aF as h}from"./index-COYbw2nA.js";import{V as a,B as f,ab as x,ac as b,i as t}from"./MyApp-BqOFGx1Y.js";import{C as v}from"./Collection-DrcKITMh.js";import{a as w,b as y,g as p}from"./videos-1zD_APQT.js";import j from"./ImageLazyPreview-Wf09QCN8.js";import{L as I}from"./index-C-CwXdPO.js";import"./index-CuRhIo_n.js";import"./file-download-DzAs5kbr.js";import"./index-Bc35wtjH.js";import"./Dropdown-C0xfjFGB.js";import"./PurePanel-n6z--zP8.js";import"./index-AGmSUtxm.js";import"./index-DJ37g3_M.js";import"./index-C2DU9lVT.js";import"./EyeOutlined-DDdMQV6J.js";import"./SearchOutlined-_u8rvD7y.js";import"./index-CRqcZYdM.js";import"./index-BaGFYROl.js";import"./addEventListener-D2Oj2EJ2.js";import"./Pagination-C49DcUwG.js";import"./useBreakpoint-DVIPjZl0.js";import"./responsiveObserver-BI3UFpZ1.js";import"./index-ChQ8N6ec.js";import"./row-CTG_2Oza.js";const V=r.lazy(()=>h(()=>import("./VideoViewer-CTB_9C3Y.js"),__vite__mapDeps([0,1,2,3,4]),import.meta.url));function X({target:i}){const l=r.useCallback(async(o=[],s)=>{var d;return!(i!=null&&i.id)||!(i!=null&&i.type)?void 0:(s=s||((d=o==null?void 0:o[(o==null?void 0:o.length)-1])==null?void 0:d.cursor)||"",((i==null?void 0:i.type)===a.Group?await w({id:i==null?void 0:i.id,cursor:s}):await y({id:i==null?void 0:i.id,cursor:s})).videos)},[i]),n=r.useCallback(async o=>{if(!o.source){const s=await p(o.id);o.source=s.source}return{url:o.source,name:o.id+".mp4"}},[]),c=r.useCallback(o=>e.jsx(I.Item,{className:"show-on-hover-trigger",children:e.jsxs(f.Ribbon,{text:o.length?x(o.length):null,children:[e.jsx(j,{src:o.picture,width:200,height:200,style:{objectFit:"cover",borderRadius:10},cacheId:"video."+o.id,getPreview:()=>o.source||p(o.id),renderPreview:(s,m)=>({destroyOnClose:!0,imageRender:()=>e.jsx(b,{spinning:m,children:e.jsx(V,{info:s,style:{maxWidth:"90vw",maxHeight:"90vh"}})}),toolbarRender:()=>null})}),e.jsx(u,{type:"default",icon:e.jsx("i",{className:"fa-solid fa-up-right-from-square"}),style:{position:"absolute",bottom:10,right:10},className:"show-on-hover-item",target:"_blank",href:t(o.id)})]})}),[]);return e.jsx(v,{collectionName:(i==null?void 0:i.name)+" - Videos",fetchNext:l,renderItem:c,downloadItem:n,getItemCursor:o=>o.cursor,rowKey:o=>o.id})}export{X as default};