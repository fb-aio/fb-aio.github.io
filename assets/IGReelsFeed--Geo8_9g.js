import{aJ as g,b6 as f,r as u,aL as e,co as a,b2 as j,aN as n,bp as b,bC as v}from"./index-Qt1L9Xiw.js";import{C as y}from"./Collection-W4X7IqFa.js";import{t as w,S as r,b as l}from"./MyApp-DDUulQzX.js";import I from"./VideoViewer-B08tA-ju.js";import{a as N}from"./reels-BcUHQe2A.js";import{c as d}from"./core-Bvv-XedI.js";import{A as k}from"./index-Csn6kufx.js";import{L as R}from"./index-CeVycvI9.js";import{I as F}from"./index-BAuHam2U.js";import{T as c}from"./index-CvQxKMxN.js";import{A as C}from"./index-DsVSzw3J.js";import"./index-BX4ZrkmU.js";import"./file-download-cs7-HvOD.js";import"./index-DxPDOh9c.js";import"./Dropdown-CiaV_8Ew.js";import"./PurePanel-D4j__ZHX.js";import"./index-BHhG_OlO.js";import"./index-DAgc2Yal.js";import"./EyeOutlined-vPM2QFd6.js";import"./SearchOutlined-BQt8S8Mq.js";import"./index-DL30kYih.js";import"./videos-DH6UZvvY.js";import"./VideoWithMuted-CnU2ASqL.js";import"./Pagination-CHVwkn-q.js";import"./useBreakpoint-CFVo6cTb.js";import"./index-DUm_PftZ.js";import"./row-BPLkYSTc.js";import"./addEventListener-Dg4je8GP.js";import"./index-D6Ke4d8X.js";function te(){const{ti:i}=g(),m=f();u.useEffect(()=>{w("IGReelsFeed:onLoad")},[]);const p=async(s,o)=>{var t;return await N(o||((t=s==null?void 0:s[s.length-1])==null?void 0:t.cursor)||"")},x=(s,o)=>e.jsx(R.Item,{children:e.jsxs("div",{className:"show-on-hover-trigger",children:[e.jsxs("div",{style:{position:"relative"},children:[e.jsx(F,{src:s.image,style:{width:200,height:300,borderRadius:10,objectFit:"cover"},preview:{destroyOnClose:!0,toolbarRender:()=>null,imageRender:()=>e.jsx(I,{info:{source:s.video,variants:s.variants}})}}),e.jsxs("div",{style:{color:"#eee",background:"linear-gradient(0deg, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0) 100%)",position:"absolute",bottom:0,left:0,padding:"5px 10px",width:"100%",paddingTop:"50px",pointerEvents:"none",display:"flex",flexDirection:"column"},children:[s.music&&e.jsxs(r,{children:[e.jsx("i",{className:"fa-solid fa-music"}),s.music.title]}),e.jsxs(r,{children:[e.jsx("i",{className:"fa-regular fa-heart"}),a(s.like_count)]}),e.jsxs(r,{children:[e.jsx("i",{className:"fa-regular fa-comment"}),a(s.comment_count)]}),e.jsxs(r,{children:[e.jsx("i",{className:"fa-regular fa-clock"}),j(s.created_at)]})]}),e.jsxs(r,{className:"show-on-hover-item",direction:"horizontal",style:{position:"absolute",bottom:10,right:10},size:3,children:[e.jsx(l,{title:i({en:"Open in Bulk Downloader",vi:"Mở trong Tải hàng loạt"}),children:e.jsx(n,{icon:e.jsx("i",{className:"fa-solid fa-search"}),onClick:()=>{m("/bulk-downloader",{state:{targetId:s.user.username,platform:b.Instagram}})}})}),e.jsx(n,{icon:e.jsx("i",{className:"fa-solid fa-up-right-from-square"}),target:"_blank",href:d("reel/"+s.code)})]})]}),e.jsx("div",{style:{width:200,display:"flex",flexDirection:"column"},children:e.jsx(l,{title:s.caption,children:e.jsx(c.Text,{children:v(s.caption,80)})})}),e.jsxs("div",{style:{position:"absolute",top:5,left:5,right:5,display:"flex"},children:[e.jsx("div",{style:{position:"relative",height:40},children:e.jsx(C,{onClick:()=>window.open(d(s.user.username),"_blank"),src:s.user.avatar,size:40,style:{borderWidth:2,borderColor:"#0866FF",marginRight:3,cursor:"pointer"}})}),e.jsx("div",{style:{display:"inline-block",background:"#1119",padding:"3px 5px",borderRadius:5,pointerEvents:"none",alignSelf:"center",flex:1},children:e.jsx(c.Text,{style:{color:"#eee",fontWeight:"bold"},children:s.user.username})})]})]})}),h=async(s,o)=>({name:s.id+".mp4",url:s.video});return e.jsx(y,{collectionName:"IGReelsFeed",fetchNext:p,renderItem:x,downloadItem:h,getItemCursor:s=>s==null?void 0:s.cursor,rowKey:s=>s.id,header:()=>e.jsx(k,{type:"info",message:e.jsxs(e.Fragment,{children:[e.jsx("i",{className:"fa fa-eye-slash",style:{color:"gray"}})," ",i({en:"Watch all Reels without being tracked by Instagram",vi:"Lướt Reels ẩn danh - Không bị Instagram theo dõi"})]})})})}export{te as default};