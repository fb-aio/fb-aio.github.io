const __vite__fileDeps=["./ImageLazyPreview-CnGE99g5.js","./index-DKL-YrvT.js","./index-DfqnkV-X.css","./MyApp-Y2b_WnTf.js","./index-DtCSk6PP.js","./EyeOutlined-BCn9PgjA.js","./addEventListener-DuKnSXSL.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{r as t,aA as r,aB as f,aF as I}from"./index-DKL-YrvT.js";import{C as b}from"./Collection-Cs1Bjdei.js";import{a7 as g,a8 as x,ac as v,i as y}from"./MyApp-Y2b_WnTf.js";import{c as w,M as d}from"./albums-Dm5Kl7Cv.js";import{g as p}from"./videos-BRIhr5AH.js";import{V as j}from"./VideoWithMuted-CHVuVQYW.js";import{L as _}from"./index-C-kluz80.js";import{I as A}from"./index-DtCSk6PP.js";import"./index-DpS-ZKmI.js";import"./file-download-DXINW8zh.js";import"./index-uRB_ns_8.js";import"./Dropdown-Cf8e-eO5.js";import"./PurePanel-ehkeIooI.js";import"./index-Cu8JyOuX.js";import"./index-Co8SWs3t.js";import"./index-Brz9i-rh.js";import"./EyeOutlined-BCn9PgjA.js";import"./SearchOutlined-BZ_o7H3N.js";import"./index-C3Xq7DxK.js";import"./Pagination-BFhFQTko.js";import"./useBreakpoint-BWvUSJHR.js";import"./responsiveObserver-C7nvDMAG.js";import"./index-CJfoBTLp.js";import"./row-Divw1mQi.js";import"./addEventListener-DuKnSXSL.js";const E=t.lazy(()=>I(()=>import("./ImageLazyPreview-CnGE99g5.js"),__vite__mapDeps([0,1,2,3,4,5,6]),import.meta.url));function Z({target:i,albumId:l,album:a}){const s=l||a.id,c=t.useCallback(async(o=[],e)=>{var n;return s?await w({albumId:s,accessToken:await g(x.EAAB),fromId:e||((n=o[o.length-1])==null?void 0:n.id)||""}):void 0},[s]),u=t.useCallback(o=>r.jsxs(_.Item,{className:"show-on-hover-trigger",children:[o.type==d.IMAGE?r.jsx(A,{src:o.uri,width:150,height:150,style:{objectFit:"cover",borderRadius:"10px"}}):r.jsx(E,{src:o.uri,width:150,height:150,style:{objectFit:"cover",borderRadius:"10px"},cacheId:"album_video."+o.id,getPreview:()=>p(o.id).then(e=>e.source),renderPreview:(e,m)=>({destroyOnClose:!0,imageRender:()=>r.jsx(v,{spinning:m,children:r.jsx(j,{src:e,style:{maxWidth:"90vw",maxHeight:"90vh"}})}),toolbarRender:()=>null})}),r.jsx(f,{type:"default",icon:r.jsx("i",{className:"fa-solid fa-up-right-from-square"}),style:{position:"absolute",bottom:10,right:10},className:"show-on-hover-item",target:"_blank",href:y(o.id)})]}),[]),h=t.useCallback(async o=>o.type==d.IMAGE?{url:o.uri,name:o.id+".jpg"}:{url:(await p(o.id)).source,name:o.id+".mp4"},[]);return r.jsx(b,{collectionName:(i==null?void 0:i.name)+" - Album "+a.name,fetchNext:c,renderItem:u,downloadItem:h,getItemCursor:o=>o.id,rowKey:o=>o.id})}export{Z as default};
