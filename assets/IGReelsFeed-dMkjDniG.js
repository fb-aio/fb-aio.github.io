import{aI as g,b4 as f,r as u,aK as e,cj as a,b0 as j,aM as n,bb as b,bm as v}from"./index-BoZ3qCu-.js";import{C as y}from"./Collection-Ylhl6kq-.js";import{t as I,S as r,b as l}from"./MyApp-D00-hVKM.js";import w from"./VideoViewer-DcmjnC0M.js";import{a as N}from"./reels-D3OWVE7x.js";import{c as d}from"./core-CgP0J9ug.js";import{A as k}from"./index-dSRIMC1R.js";import{L as R}from"./index-9ab-2l-X.js";import{I as F}from"./index-B9p0fwME.js";import{T as c}from"./index-BqA1u72M.js";import{A as T}from"./index-BeQiFXvH.js";import"./index-DISxAyNO.js";import"./file-download-Cuv0I7kF.js";import"./index-eKalL2eG.js";import"./Dropdown-DBLdsESi.js";import"./PurePanel-BOikr8JH.js";import"./index-Lhz2nIJB.js";import"./index-AT3_9SK-.js";import"./EyeOutlined-BHVey_FU.js";import"./SearchOutlined-jKWQFlYP.js";import"./index-BarWoG-p.js";import"./videos-BSmWgJlG.js";import"./VideoWithMuted-jC92vOuE.js";import"./Pagination-DzBVYRJu.js";import"./useBreakpoint-F7WTD34q.js";import"./index-D8gaebSk.js";import"./row-CSBfwUbZ.js";import"./addEventListener-CnAWjiAc.js";import"./index-CQ8Ll5oh.js";function te(){const{ti:i}=g(),m=f();u.useEffect(()=>{I("IGReelsFeed:onLoad")},[]);const p=async(s,o)=>{var t;return await N(o||((t=s==null?void 0:s[s.length-1])==null?void 0:t.cursor)||"")},x=(s,o)=>e.jsx(R.Item,{children:e.jsxs("div",{className:"show-on-hover-trigger",children:[e.jsxs("div",{style:{position:"relative"},children:[e.jsx(F,{src:s.image,style:{width:200,height:300,borderRadius:10,objectFit:"cover"},preview:{destroyOnClose:!0,toolbarRender:()=>null,imageRender:()=>e.jsx(w,{info:{source:s.video,variants:s.variants}})}}),e.jsxs("div",{style:{color:"#eee",background:"linear-gradient(0deg, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0) 100%)",position:"absolute",bottom:0,left:0,padding:"5px 10px",width:"100%",paddingTop:"50px",pointerEvents:"none",display:"flex",flexDirection:"column"},children:[s.music&&e.jsxs(r,{children:[e.jsx("i",{className:"fa-solid fa-music"}),s.music.title]}),e.jsxs(r,{children:[e.jsx("i",{className:"fa-regular fa-heart"}),a(s.like_count)]}),e.jsxs(r,{children:[e.jsx("i",{className:"fa-regular fa-comment"}),a(s.comment_count)]}),e.jsxs(r,{children:[e.jsx("i",{className:"fa-regular fa-clock"}),j(s.created_at)]})]}),e.jsxs(r,{className:"show-on-hover-item",direction:"horizontal",style:{position:"absolute",bottom:10,right:10},size:3,children:[e.jsx(l,{title:i({en:"Open in Bulk Downloader",vi:"Mở trong Tải hàng loạt"}),children:e.jsx(n,{icon:e.jsx("i",{className:"fa-solid fa-search"}),onClick:()=>{m("/bulk-downloader",{state:{targetId:s.user.username,platform:b.Instagram}})}})}),e.jsx(n,{icon:e.jsx("i",{className:"fa-solid fa-up-right-from-square"}),target:"_blank",href:d("reel/"+s.code)})]})]}),e.jsx("div",{style:{width:200,display:"flex",flexDirection:"column"},children:e.jsx(l,{title:s.caption,children:e.jsx(c.Text,{children:v(s.caption,80)})})}),e.jsxs("div",{style:{position:"absolute",top:5,left:5,right:5,display:"flex"},children:[e.jsx("div",{style:{position:"relative",height:40},children:e.jsx(T,{onClick:()=>window.open(d(s.user.username),"_blank"),src:s.user.avatar,size:40,style:{borderWidth:2,borderColor:"#0866FF",marginRight:3,cursor:"pointer"}})}),e.jsx("div",{style:{display:"inline-block",background:"#1119",padding:"3px 5px",borderRadius:5,pointerEvents:"none",alignSelf:"center",flex:1},children:e.jsx(c.Text,{style:{color:"#eee",fontWeight:"bold"},children:s.user.username})})]})]})}),h=async(s,o)=>({name:s.id+".mp4",url:s.video});return e.jsx(y,{collectionName:"IGReelsFeed",fetchNext:p,renderItem:x,downloadItem:h,getItemCursor:s=>s==null?void 0:s.cursor,rowKey:s=>s.id,header:()=>e.jsx(k,{type:"info",message:e.jsxs(e.Fragment,{children:[e.jsx("i",{className:"fa fa-eye-slash",style:{color:"gray"}})," ",i({en:"Watch all Reels without being tracked by Instagram",vi:"Lướt Reels ẩn danh - Không bị Instagram theo dõi"})]})})})}export{te as default};
