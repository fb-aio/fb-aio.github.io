import{r as s,aM as r,aO as l,b9 as a}from"./index-StVibqow.js";import{g as c}from"./index-DAzc4Mj-.js";import{C as u}from"./Collection-D0hepEqp.js";import h from"./VideoViewer-D13IouSm.js";import{L as f}from"./index-CV0hir3C.js";import{I as x}from"./index-iVUurAQw.js";import{A as w}from"./index-D6Q0Z-mF.js";import"./MyApp-CbrjJD8r.js";import"./core-uEdstznS.js";import"./videos-CCtEielm.js";import"./index-Du30Turh.js";import"./useBreakpoint-B3LXcUGg.js";import"./index-BUGDNAu9.js";import"./index-Ce6uhCjP.js";import"./PurePanel-DsMkbw0R.js";import"./index-DolJMkAh.js";import"./SearchOutlined-BnZyM7z3.js";import"./index-87Ip3Uz8.js";import"./EyeOutlined-C05Y4B6v.js";import"./index-DjBQtAlZ.js";import"./Dropdown-BDo8kzeD.js";import"./Collapse-7C1LygD_.js";import"./index-DHJuY8dO.js";import"./file-download-C3AX8Z5E.js";import"./index-KGofhwC-.js";import"./index-DUTxxdew.js";import"./index-lPfTDvBq.js";import"./VideoWithMuted-B9atb2Qq.js";import"./Pagination-CcYHpbAp.js";import"./row-BnbuKKRL.js";import"./addEventListener-Dl-hk_tO.js";function Y({target:i}){const p=s.useCallback(async(o=[],e)=>{var t;if(!(i!=null&&i.id))return;const m=await c(i.username||"",e||((t=o[o.length-1])==null?void 0:t.cursor));return console.log(m),m},[i]),n=s.useCallback(o=>r.jsx(f.Item,{children:r.jsxs("div",{className:"show-on-hover-trigger",children:[r.jsx(x,{src:o.video.dynamicCover,width:200,height:270,style:{objectFit:"cover",borderRadius:10},preview:{destroyOnClose:!0,imageRender:()=>r.jsx(h,{info:o.video,style:{maxWidth:"90vw",maxHeight:"90vh"}}),toolbarRender:()=>null}}),r.jsx(l,{type:"default",icon:r.jsx("i",{className:"fa-solid fa-up-right-from-square"}),style:{position:"absolute",bottom:10,right:10},className:"show-on-hover-item",target:"_blank",href:"https://www.tiktok.com/@"+(i==null?void 0:i.id)+"/video/"+o.id})]})}),[]),d=s.useCallback((o,e)=>({name:o.id+".mp4",url:o.video.downloadAddr}),[]);return r.jsx(u,{collectionName:(i==null?void 0:i.name)+" - Tiktok User Videos",fetchNext:p,renderItem:n,downloadItem:d,getItemCursor:o=>o.cursor||"",rowKey:o=>o.id,header:()=>{var o;return r.jsx(w,{showIcon:!0,type:"info",message:"Total "+a((o=i==null?void 0:i.raw)==null?void 0:o.videoCount)+" videos"})}})}export{Y as default};