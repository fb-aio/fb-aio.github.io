import{r as s,aK as r,aM as d,b7 as a}from"./index-BoZ3qCu-.js";import{g as l}from"./index-CF2iMVK4.js";import{C as c}from"./Collection-Ylhl6kq-.js";import{L as u}from"./index-9ab-2l-X.js";import{I as f}from"./index-B9p0fwME.js";import{A as h}from"./index-dSRIMC1R.js";import"./MyApp-D00-hVKM.js";import"./core-CgP0J9ug.js";import"./videos-BSmWgJlG.js";import"./index-BeQiFXvH.js";import"./useBreakpoint-F7WTD34q.js";import"./index-CQ8Ll5oh.js";import"./index-BqA1u72M.js";import"./PurePanel-BOikr8JH.js";import"./index-D8gaebSk.js";import"./SearchOutlined-jKWQFlYP.js";import"./index-AT3_9SK-.js";import"./EyeOutlined-BHVey_FU.js";import"./index-Bf8XDlqW.js";import"./Dropdown-DBLdsESi.js";import"./Collapse-DpebPui6.js";import"./index-DISxAyNO.js";import"./file-download-Cuv0I7kF.js";import"./index-eKalL2eG.js";import"./index-Lhz2nIJB.js";import"./index-BarWoG-p.js";import"./Pagination-DzBVYRJu.js";import"./row-CSBfwUbZ.js";import"./addEventListener-CnAWjiAc.js";function Q({target:i}){const t=s.useCallback(async(o=[],m)=>{var e;return i!=null&&i.id?await l(i.username||"",m||((e=o[o.length-1])==null?void 0:e.cursor)):void 0},[i]),p=s.useCallback(o=>r.jsx(u.Item,{children:r.jsxs("div",{className:"show-on-hover-trigger",children:[r.jsx(f,{src:o.video.dynamicCover,width:250,height:330,style:{objectFit:"cover",borderRadius:10},preview:!1}),r.jsx(d,{type:"default",icon:r.jsx("i",{className:"fa-solid fa-up-right-from-square"}),style:{position:"absolute",bottom:10,right:10},className:"show-on-hover-item",target:"_blank",href:"https://www.tiktok.com/@"+(i==null?void 0:i.id)+"/video/"+o.id})]})}),[]),n=s.useCallback((o,m)=>({name:o.id+".mp4",url:o.video.downloadAddr}),[]);return r.jsx(c,{collectionName:(i==null?void 0:i.name)+" - Tiktok User Videos",fetchNext:t,renderItem:p,downloadItem:n,getItemCursor:o=>o.cursor||"",rowKey:o=>o.id,header:()=>{var o;return r.jsx(h,{showIcon:!0,type:"info",message:"Total "+a((o=i==null?void 0:i.raw)==null?void 0:o.videoCount)+" videos"})}})}export{Q as default};
