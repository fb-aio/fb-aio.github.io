import{r as m,aK as t,bm as d,aM as h}from"./index-BoZ3qCu-.js";import{C as u}from"./Collection-Ylhl6kq-.js";import{g as f,a as x}from"./highlights-1192bgEw.js";import{c as g}from"./core-CgP0J9ug.js";import{L as w}from"./index-9ab-2l-X.js";import{I as b}from"./index-B9p0fwME.js";import"./index-DISxAyNO.js";import"./file-download-Cuv0I7kF.js";import"./MyApp-D00-hVKM.js";import"./index-eKalL2eG.js";import"./Dropdown-DBLdsESi.js";import"./PurePanel-BOikr8JH.js";import"./index-Lhz2nIJB.js";import"./index-AT3_9SK-.js";import"./index-BqA1u72M.js";import"./EyeOutlined-BHVey_FU.js";import"./SearchOutlined-jKWQFlYP.js";import"./index-BarWoG-p.js";import"./Pagination-DzBVYRJu.js";import"./useBreakpoint-F7WTD34q.js";import"./index-D8gaebSk.js";import"./row-CSBfwUbZ.js";import"./addEventListener-CnAWjiAc.js";function D({target:r,onOpenHighlight:e}){const n=m.useCallback(async(i=[])=>r!=null&&r.id?i.length?[]:await f(r.id):void 0,[r]),p=m.useCallback(i=>{var o,a;return t.jsxs(w.Item,{className:"show-on-hover-trigger",children:[t.jsx(b,{src:i.cover,width:100,height:100,style:{objectFit:"cover",borderRadius:"50%",cursor:"pointer"},preview:!1,onClick:()=>{e==null||e(i)}}),t.jsx("a",{href:"https://www.instagram.com/stories/highlights/"+i.id.split(":")[1],target:"_blank",style:{display:"block",wordWrap:"break-word",maxWidth:100,padding:5,fontWeight:"bold",textAlign:"center",fontSize:"1em"},title:i.title,children:d(i.title,30)}),t.jsx(h,{type:"default",icon:t.jsx("i",{className:"fa-solid fa-up-right-from-square"}),style:{position:"absolute",top:0,right:0},className:"show-on-hover-item",target:"_blank",href:g("stories/highlights/"+((a=(o=i.id)==null?void 0:o.split(":"))==null?void 0:a[1]))})]})},[]),c=m.useCallback(async(i,o)=>(await x(i.id)).map(s=>{const l=!!s.video;return{url:l?s.video:s.image,name:s.id+(l?".mp4":".jpg")}}),[]);return t.jsx(u,{collectionName:(r==null?void 0:r.username)+" - IG Highlights",fetchNext:n,renderItem:p,downloadItem:c,rowKey:i=>i.id})}export{D as default};
