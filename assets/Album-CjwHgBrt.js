const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./ImageLazyPreview-C7_n5P1Z.js","./index-BLu4pHkP.js","./index-Dms513tq.css","./MyApp-JZyJMXzY.js","./index-I1werqZk.js","./EyeOutlined-DJfDqPUI.js","./addEventListener-DVMx3qkI.js"])))=>i.map(i=>d[i]);
import{r as t,aM as r,aQ as h,aY as I}from"./index-BLu4pHkP.js";import{C as b}from"./Collection-x33-D9oC.js";import{f as g,A as x,a2 as y,a as v}from"./MyApp-JZyJMXzY.js";import{c as w,M as d}from"./albums-D1xlgVeN.js";import{g as p}from"./videos-B7aqfan6.js";import{V as j}from"./VideoWithMuted-BCqvMxu-.js";import{L as _}from"./index-DY-zy7nn.js";import{I as A}from"./index-I1werqZk.js";import"./index-CY8A72U_.js";import"./file-download-KkY3U_TY.js";import"./index-D51TyrGD.js";import"./Dropdown-DRh_BX1q.js";import"./PurePanel-DuFyaAwC.js";import"./index-xuosdi23.js";import"./index-B_U_bNVH.js";import"./index-Bg7IDIvr.js";import"./EyeOutlined-DJfDqPUI.js";import"./SearchOutlined-BVX0HAJs.js";import"./index-CPIpj8oH.js";import"./Pagination-C4B4i1KW.js";import"./useBreakpoint-B-wUPSPt.js";import"./responsiveObserver-DwDv451A.js";import"./index-Dl9jCLQd.js";import"./DownOutlined-Bt8e0jtu.js";import"./row-BapQheTk.js";import"./addEventListener-DVMx3qkI.js";const E=t.lazy(()=>I(()=>import("./ImageLazyPreview-C7_n5P1Z.js"),__vite__mapDeps([0,1,2,3,4,5,6]),import.meta.url));function $({target:i,albumId:l,album:a}){const s=l||a.id,c=t.useCallback(async(o=[],e)=>{var n;return s?await w({albumId:s,accessToken:await g(x.EAAB),fromId:e||((n=o[o.length-1])==null?void 0:n.id)||""}):void 0},[s]),u=t.useCallback(o=>r.jsxs(_.Item,{className:"show-on-hover-trigger",children:[o.type==d.IMAGE?r.jsx(A,{src:o.uri,width:150,height:150,style:{objectFit:"cover",borderRadius:"10px"}}):r.jsx(E,{src:o.uri,width:150,height:150,style:{objectFit:"cover",borderRadius:"10px"},cacheId:"album_video."+o.id,getPreview:()=>p(o.id).then(e=>e.source),renderPreview:(e,m)=>({destroyOnClose:!0,imageRender:()=>r.jsx(y,{spinning:m,children:r.jsx(j,{src:e,style:{maxWidth:"90vw",maxHeight:"90vh"}})}),toolbarRender:()=>null})}),r.jsx(h,{type:"default",icon:r.jsx("i",{className:"fa-solid fa-up-right-from-square"}),style:{position:"absolute",bottom:10,right:10},className:"show-on-hover-item",target:"_blank",href:v(o.id)})]}),[]),f=t.useCallback(async o=>o.type==d.IMAGE?{url:o.uri,name:o.id+".jpg"}:{url:(await p(o.id)).source,name:o.id+".mp4"},[]);return r.jsx(b,{collectionName:(i==null?void 0:i.name)+" - Album "+a.name,fetchNext:c,renderItem:u,downloadItem:f,getItemCursor:o=>o.id,rowKey:o=>o.id})}export{$ as default};
