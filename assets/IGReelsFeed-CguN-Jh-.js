import{b4 as g,br as f,r as u,b6 as e,co as a,bp as j,ba as n,bA as b,bt as v}from"./index-BxqI5Gd0.js";import y from"./Collection-Ctx3dxYf.js";import{t as w,I,S as s,T as l,d}from"./MyApp-ByiHX0qM.js";import N from"./VideoViewer-BkxuwJxR.js";import{a as k}from"./reels-DRd1D1QV.js";import{c}from"./core-BpvtG4p1.js";import{A as R}from"./index-BOklckFv.js";import{L as F}from"./index-Dv4lTb3_.js";import{A as T}from"./index-CPPLlTBl.js";import"./index-CMDmURDF.js";import"./file-download-BWXnBcdo.js";import"./react-hotkeys-hook.esm-zPTCjevm.js";import"./index-CuvpyvNf.js";import"./index-unSpNECF.js";import"./index-Czy2gXJr.js";import"./index-Cab20LlE.js";import"./PurePanel-DnuVi_Xb.js";import"./move-12jBH-U3.js";import"./index-DdkLWVDV.js";import"./SearchOutlined-FPpClRsQ.js";import"./index-D3yKYGab.js";import"./Pagination-ClSPRRQ-.js";import"./useBreakpoint-B-6M2pGc.js";import"./useForceUpdate-32QtfefY.js";import"./responsiveObserver-DCjkyyMm.js";import"./index-QUk30DMk.js";import"./List-DIfsWYq5.js";import"./DownOutlined-CHXCxF_j.js";import"./row-BKHe0tix.js";import"./col-0SdR7xwF.js";import"./videos-D-0RTw-E.js";import"./VideoWithMuted-CmrbJqUt.js";import"./download-DE77ekA1.js";function de(){const{ti:t}=g(),m=f();u.useEffect(()=>{w("IGReelsFeed:onLoad")},[]);const p=async(r,o)=>{var i;return await k(o||((i=r==null?void 0:r[r.length-1])==null?void 0:i.cursor)||"")},x=(r,o)=>e.jsx(F.Item,{children:e.jsxs("div",{className:"show-on-hover-trigger",children:[e.jsxs("div",{style:{position:"relative"},children:[e.jsx(I,{src:r.image,style:{width:200,height:300,borderRadius:10,objectFit:"cover"},preview:{destroyOnClose:!0,toolbarRender:()=>null,imageRender:()=>e.jsx(N,{info:{source:r.video,variants:r.variants}})}}),e.jsxs("div",{style:{color:"#eee",background:"linear-gradient(0deg, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0) 100%)",position:"absolute",bottom:0,left:0,padding:"5px 10px",width:"100%",paddingTop:"50px",pointerEvents:"none",display:"flex",flexDirection:"column"},children:[r.music&&e.jsxs(s,{children:[e.jsx("i",{className:"fa-solid fa-music"}),r.music.title]}),e.jsxs(s,{children:[e.jsx("i",{className:"fa-regular fa-heart"}),a(r.like_count)]}),e.jsxs(s,{children:[e.jsx("i",{className:"fa-regular fa-comment"}),a(r.comment_count)]}),e.jsxs(s,{children:[e.jsx("i",{className:"fa-regular fa-clock"}),j(r.created_at)]})]}),e.jsxs(s,{className:"show-on-hover-item",direction:"horizontal",style:{position:"absolute",bottom:10,right:10},size:3,children:[e.jsx(l,{title:t({en:"Open in Bulk Downloader",vi:"Mở trong Tải hàng loạt"}),children:e.jsx(n,{icon:e.jsx("i",{className:"fa-solid fa-search"}),onClick:()=>{m("/bulk-downloader",{state:{targetId:r.user.username,platform:b.Instagram}})}})}),e.jsx(n,{icon:e.jsx("i",{className:"fa-solid fa-up-right-from-square"}),target:"_blank",href:c("reel/"+r.code)})]})]}),e.jsx("div",{style:{width:200,display:"flex",flexDirection:"column"},children:e.jsx(l,{title:r.caption,children:e.jsx(d.Text,{children:v(r.caption,80)})})}),e.jsxs("div",{style:{position:"absolute",top:5,left:5,right:5,display:"flex"},children:[e.jsx("div",{style:{position:"relative",height:40},children:e.jsx(T,{onClick:()=>window.open(c(r.user.username),"_blank"),src:r.user.avatar,size:40,style:{borderWidth:2,borderColor:"#0866FF",marginRight:3,cursor:"pointer"}})}),e.jsx("div",{style:{display:"inline-block",background:"#1119",padding:"3px 5px",borderRadius:5,pointerEvents:"none",alignSelf:"center",flex:1},children:e.jsx(d.Text,{style:{color:"#eee",fontWeight:"bold"},children:r.user.username})})]})]})}),h=async(r,o)=>({name:r.id+".mp4",url:r.video});return e.jsx(y,{collectionName:"IGReelsFeed",fetchNext:p,renderItem:x,downloadItem:h,getItemCursor:r=>r==null?void 0:r.cursor,rowKey:r=>r.id,header:()=>e.jsx(R,{type:"info",message:e.jsxs(e.Fragment,{children:[e.jsx("i",{className:"fa fa-eye-slash",style:{color:"gray"}})," ",t({en:"Watch all Reels without being tracked by Instagram",vi:"Lướt Reels ẩn danh - Không bị Instagram theo dõi"})]})})})}export{de as default};
