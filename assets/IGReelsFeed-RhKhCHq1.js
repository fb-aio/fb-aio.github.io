import{aU as g,bi as f,r as u,aW as e,cn as a,bd as j,a_ as n,bp as b,bj as v}from"./index-C5YWxV9K.js";import y from"./Collection-C3YR9ms4.js";import{t as w,I,S as s,b as l}from"./MyApp-Ct___eEr.js";import N from"./VideoViewer-gb8jQGmq.js";import{a as k}from"./reels-9HoR-Bdc.js";import{c as d}from"./core-DColfm_D.js";import{A as R}from"./index-B7WC9GSr.js";import{L as F}from"./index-camAais2.js";import{T as c}from"./index-DgzD-WDw.js";import{A as T}from"./index-BmxPq4Lk.js";import"./index-B89EIDgf.js";import"./file-download-BOVugqjO.js";import"./react-hotkeys-hook.esm-CDrCX6Xe.js";import"./index-BS0pS8FV.js";import"./index-Cjh_pMrK.js";import"./index-fg40ZRcV.js";import"./Dropdown-uaA3vV-D.js";import"./PurePanel-CDyma__L.js";import"./move-qwd2O5b7.js";import"./index-CWcF8dW8.js";import"./TextArea-Gh7v8m_G.js";import"./SearchOutlined-BZYjbz-k.js";import"./index-CCWfgY7j.js";import"./Pagination-B6wGdAWy.js";import"./useBreakpoint-PCEp_VLU.js";import"./useForceUpdate-Bs9ixSSa.js";import"./index-B0cdpGh8.js";import"./DownOutlined-qmMzTFXy.js";import"./row-Cxq1EIs_.js";import"./col-XT3xBtee.js";import"./videos-BhJgTb7Y.js";import"./VideoWithMuted-DuHT3481.js";function le(){const{ti:i}=g(),m=f();u.useEffect(()=>{w("IGReelsFeed:onLoad")},[]);const p=async(r,o)=>{var t;return await k(o||((t=r==null?void 0:r[r.length-1])==null?void 0:t.cursor)||"")},x=(r,o)=>e.jsx(F.Item,{children:e.jsxs("div",{className:"show-on-hover-trigger",children:[e.jsxs("div",{style:{position:"relative"},children:[e.jsx(I,{src:r.image,style:{width:200,height:300,borderRadius:10,objectFit:"cover"},preview:{destroyOnClose:!0,toolbarRender:()=>null,imageRender:()=>e.jsx(N,{info:{source:r.video,variants:r.variants}})}}),e.jsxs("div",{style:{color:"#eee",background:"linear-gradient(0deg, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0) 100%)",position:"absolute",bottom:0,left:0,padding:"5px 10px",width:"100%",paddingTop:"50px",pointerEvents:"none",display:"flex",flexDirection:"column"},children:[r.music&&e.jsxs(s,{children:[e.jsx("i",{className:"fa-solid fa-music"}),r.music.title]}),e.jsxs(s,{children:[e.jsx("i",{className:"fa-regular fa-heart"}),a(r.like_count)]}),e.jsxs(s,{children:[e.jsx("i",{className:"fa-regular fa-comment"}),a(r.comment_count)]}),e.jsxs(s,{children:[e.jsx("i",{className:"fa-regular fa-clock"}),j(r.created_at)]})]}),e.jsxs(s,{className:"show-on-hover-item",direction:"horizontal",style:{position:"absolute",bottom:10,right:10},size:3,children:[e.jsx(l,{title:i({en:"Open in Bulk Downloader",vi:"Mở trong Tải hàng loạt"}),children:e.jsx(n,{icon:e.jsx("i",{className:"fa-solid fa-search"}),onClick:()=>{m("/bulk-downloader",{state:{targetId:r.user.username,platform:b.Instagram}})}})}),e.jsx(n,{icon:e.jsx("i",{className:"fa-solid fa-up-right-from-square"}),target:"_blank",href:d("reel/"+r.code)})]})]}),e.jsx("div",{style:{width:200,display:"flex",flexDirection:"column"},children:e.jsx(l,{title:r.caption,children:e.jsx(c.Text,{children:v(r.caption,80)})})}),e.jsxs("div",{style:{position:"absolute",top:5,left:5,right:5,display:"flex"},children:[e.jsx("div",{style:{position:"relative",height:40},children:e.jsx(T,{onClick:()=>window.open(d(r.user.username),"_blank"),src:r.user.avatar,size:40,style:{borderWidth:2,borderColor:"#0866FF",marginRight:3,cursor:"pointer"}})}),e.jsx("div",{style:{display:"inline-block",background:"#1119",padding:"3px 5px",borderRadius:5,pointerEvents:"none",alignSelf:"center",flex:1},children:e.jsx(c.Text,{style:{color:"#eee",fontWeight:"bold"},children:r.user.username})})]})]})}),h=async(r,o)=>({name:r.id+".mp4",url:r.video});return e.jsx(y,{collectionName:"IGReelsFeed",fetchNext:p,renderItem:x,downloadItem:h,getItemCursor:r=>r==null?void 0:r.cursor,rowKey:r=>r.id,header:()=>e.jsx(R,{type:"info",message:e.jsxs(e.Fragment,{children:[e.jsx("i",{className:"fa fa-eye-slash",style:{color:"gray"}})," ",i({en:"Watch all Reels without being tracked by Instagram",vi:"Lướt Reels ẩn danh - Không bị Instagram theo dõi"})]})})})}export{le as default};
