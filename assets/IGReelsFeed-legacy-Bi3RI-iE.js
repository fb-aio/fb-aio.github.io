System.register(["./index-legacy-B3RKK3aZ.js","./Collection-legacy-4VY2Rclc.js","./MyApp-legacy-acuBaUwA.js","./VideoViewer-legacy-4QeM3j_s.js","./reels-legacy-CDP_7uey.js","./core-legacy-BQi85Ryw.js","./index-legacy-CZcnOrIS.js","./index-legacy-ChGpZFEZ.js","./index-legacy-CslTGctG.js","./index-legacy-Diiq_sdW.js","./file-download-legacy-BlZuZHvS.js","./react-hotkeys-hook.esm-legacy-5SMVC-Bs.js","./index-legacy-BNGe0Stf.js","./index-legacy-CbVFiRq8.js","./index-legacy-CMYVg5W-.js","./index-legacy-BezdVW9X.js","./PurePanel-legacy-Bu61VAyB.js","./move-legacy-Dl6tC53j.js","./index-legacy-Cudyk-Nk.js","./Pagination-legacy-DzJPBKps.js","./useBreakpoint-legacy-Dv1rFSLS.js","./useForceUpdate-legacy-qW0w4eeM.js","./responsiveObserver-legacy-DedImkrC.js","./index-legacy-DuSPHPj4.js","./List-legacy-DSd61bXf.js","./DownOutlined-legacy-SEK2xiK7.js","./row-legacy-C-856r4Z.js","./col-legacy-CetQGZ1I.js","./videos-legacy-dSSGmdGi.js","./VideoWithMuted-legacy-B_RaEGfj.js","./download-legacy-Bz-znKVp.js"],(function(e,l){"use strict";var s,a,n,i,t,r,o,c,d,u,g,j,x,y,h,m,f,p,b,v,w;return{setters:[e=>{s=e.b6,a=e.bs,n=e.r,i=e.b8,t=e.co,r=e.bq,o=e.am,c=e.bA,d=e.bu},e=>{u=e.default},e=>{g=e.t,j=e.k,x=e.S,y=e.T,h=e.d},e=>{m=e.default},e=>{f=e.a},e=>{p=e.c},e=>{b=e.A},e=>{v=e.L},e=>{w=e.A},null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],execute:function(){e("default",(function(){const{ti:e}=s(),l=a();return n.useEffect((()=>{g("IGReelsFeed:onLoad")}),[]),i.jsx(u,{collectionName:"IGReelsFeed",fetchNext:async(e,l)=>await f(l||e?.[e.length-1]?.cursor||""),renderItem:(s,a)=>i.jsx(v.Item,{children:i.jsxs("div",{className:"show-on-hover-trigger",children:[i.jsxs("div",{style:{position:"relative"},children:[i.jsx(j,{src:s.image,style:{width:200,height:300,borderRadius:10,objectFit:"cover"},preview:{destroyOnClose:!0,toolbarRender:()=>null,imageRender:()=>i.jsx(m,{info:{source:s.video,variants:s.variants}})}}),i.jsxs("div",{style:{color:"#eee",background:"linear-gradient(0deg, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0) 100%)",position:"absolute",bottom:0,left:0,padding:"5px 10px",width:"100%",paddingTop:"50px",pointerEvents:"none",display:"flex",flexDirection:"column"},children:[s.music&&i.jsxs(x,{children:[i.jsx("i",{className:"fa-solid fa-music"}),s.music.title]}),i.jsxs(x,{children:[i.jsx("i",{className:"fa-regular fa-heart"}),t(s.like_count)]}),i.jsxs(x,{children:[i.jsx("i",{className:"fa-regular fa-comment"}),t(s.comment_count)]}),i.jsxs(x,{children:[i.jsx("i",{className:"fa-regular fa-clock"}),r(s.created_at)]})]}),i.jsxs(x,{className:"show-on-hover-item",direction:"horizontal",style:{position:"absolute",bottom:10,right:10},size:3,children:[i.jsx(y,{title:e({en:"Open in Bulk Downloader",vi:"Mở trong Tải hàng loạt"}),children:i.jsx(o,{icon:i.jsx("i",{className:"fa-solid fa-search"}),onClick:()=>{l("/bulk-downloader",{state:{targetId:s.user.username,platform:c.Instagram}})}})}),i.jsx(o,{icon:i.jsx("i",{className:"fa-solid fa-up-right-from-square"}),target:"_blank",href:p("reel/"+s.code)})]})]}),i.jsx("div",{style:{width:200,display:"flex",flexDirection:"column"},children:i.jsx(y,{title:s.caption,children:i.jsx(h.Text,{children:d(s.caption,80)})})}),i.jsxs("div",{style:{position:"absolute",top:5,left:5,right:5,display:"flex"},children:[i.jsx("div",{style:{position:"relative",height:40},children:i.jsx(w,{onClick:()=>window.open(p(s.user.username),"_blank"),src:s.user.avatar,size:40,style:{borderWidth:2,borderColor:"#0866FF",marginRight:3,cursor:"pointer"}})}),i.jsx("div",{style:{display:"inline-block",background:"#1119",padding:"3px 5px",borderRadius:5,pointerEvents:"none",alignSelf:"center",flex:1},children:i.jsx(h.Text,{style:{color:"#eee",fontWeight:"bold"},children:s.user.username})})]})]})}),downloadItem:async(e,l)=>({name:e.id+".mp4",url:e.video}),getItemCursor:e=>e?.cursor,rowKey:e=>e.id,header:()=>i.jsx(b,{type:"info",message:i.jsxs(i.Fragment,{children:[i.jsx("i",{className:"fa fa-eye-slash",style:{color:"gray"}})," ",e({en:"Watch all Reels without being tracked by Instagram",vi:"Lướt Reels ẩn danh - Không bị Instagram theo dõi"})]})})})}))}}}));
