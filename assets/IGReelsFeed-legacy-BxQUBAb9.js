System.register(["./index-legacy-Bxshx5gw.js","./Collection-legacy-fXTUIwZh.js","./MyApp-legacy-XSwhfMgT.js","./VideoViewer-legacy-CpUPHe8V.js","./reels-legacy-xmUfj7To.js","./core-legacy-BOj0YAS0.js","./index-legacy-D4LFeWyX.js","./index-legacy-CiSx2abC.js","./index-legacy-DXzG-4k0.js","./index-legacy-BsY7ZcKf.js","./index-legacy-CJ6Jd2kJ.js","./file-download-legacy-DaeC-cYj.js","./react-hotkeys-hook.esm-legacy-GqFCBvZi.js","./index-legacy-g0htNig-.js","./index-legacy-CD2-2tCn.js","./index-legacy-BN7RN5cG.js","./index-legacy-DdFdwNNs.js","./Dropdown-legacy-UiEbaiq3.js","./PurePanel-legacy-DDcwDjTV.js","./move-legacy-DDCstlBQ.js","./index-legacy-BSTJQsix.js","./TextArea-legacy-BV37b3am.js","./SearchOutlined-legacy-B1fGSlxX.js","./index-legacy-BpVfFMKS.js","./Pagination-legacy-VylMKWQX.js","./useBreakpoint-legacy-DcLvrsIY.js","./useForceUpdate-legacy-BHRWlhzB.js","./index-legacy-D3Z04zu0.js","./List-legacy-QCHabYof.js","./DownOutlined-legacy-Dh-Vu4EN.js","./row-legacy-Dr5fwuV4.js","./col-legacy-B60iwuoo.js","./videos-legacy-ycegBu_8.js","./VideoWithMuted-legacy-C0wjrYdP.js","./download-legacy-Bz-znKVp.js"],(function(e,l){"use strict";var s,a,n,i,t,r,o,c,d,u,g,j,x,y,h,m,f,p,b,v,w;return{setters:[e=>{s=e.aU,a=e.bi,n=e.r,i=e.aW,t=e.co,r=e.bd,o=e.a_,c=e.bp,d=e.bj},e=>{u=e.default},e=>{g=e.t,j=e.I,x=e.S,y=e.b},e=>{h=e.default},e=>{m=e.a},e=>{f=e.c},e=>{p=e.A},e=>{b=e.L},e=>{v=e.T},e=>{w=e.A},null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],execute:function(){e("default",(function(){const{ti:e}=s(),l=a();return n.useEffect((()=>{g("IGReelsFeed:onLoad")}),[]),i.jsx(u,{collectionName:"IGReelsFeed",fetchNext:async(e,l)=>await m(l||e?.[e.length-1]?.cursor||""),renderItem:(s,a)=>i.jsx(b.Item,{children:i.jsxs("div",{className:"show-on-hover-trigger",children:[i.jsxs("div",{style:{position:"relative"},children:[i.jsx(j,{src:s.image,style:{width:200,height:300,borderRadius:10,objectFit:"cover"},preview:{destroyOnClose:!0,toolbarRender:()=>null,imageRender:()=>i.jsx(h,{info:{source:s.video,variants:s.variants}})}}),i.jsxs("div",{style:{color:"#eee",background:"linear-gradient(0deg, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0) 100%)",position:"absolute",bottom:0,left:0,padding:"5px 10px",width:"100%",paddingTop:"50px",pointerEvents:"none",display:"flex",flexDirection:"column"},children:[s.music&&i.jsxs(x,{children:[i.jsx("i",{className:"fa-solid fa-music"}),s.music.title]}),i.jsxs(x,{children:[i.jsx("i",{className:"fa-regular fa-heart"}),t(s.like_count)]}),i.jsxs(x,{children:[i.jsx("i",{className:"fa-regular fa-comment"}),t(s.comment_count)]}),i.jsxs(x,{children:[i.jsx("i",{className:"fa-regular fa-clock"}),r(s.created_at)]})]}),i.jsxs(x,{className:"show-on-hover-item",direction:"horizontal",style:{position:"absolute",bottom:10,right:10},size:3,children:[i.jsx(y,{title:e({en:"Open in Bulk Downloader",vi:"Mở trong Tải hàng loạt"}),children:i.jsx(o,{icon:i.jsx("i",{className:"fa-solid fa-search"}),onClick:()=>{l("/bulk-downloader",{state:{targetId:s.user.username,platform:c.Instagram}})}})}),i.jsx(o,{icon:i.jsx("i",{className:"fa-solid fa-up-right-from-square"}),target:"_blank",href:f("reel/"+s.code)})]})]}),i.jsx("div",{style:{width:200,display:"flex",flexDirection:"column"},children:i.jsx(y,{title:s.caption,children:i.jsx(v.Text,{children:d(s.caption,80)})})}),i.jsxs("div",{style:{position:"absolute",top:5,left:5,right:5,display:"flex"},children:[i.jsx("div",{style:{position:"relative",height:40},children:i.jsx(w,{onClick:()=>window.open(f(s.user.username),"_blank"),src:s.user.avatar,size:40,style:{borderWidth:2,borderColor:"#0866FF",marginRight:3,cursor:"pointer"}})}),i.jsx("div",{style:{display:"inline-block",background:"#1119",padding:"3px 5px",borderRadius:5,pointerEvents:"none",alignSelf:"center",flex:1},children:i.jsx(v.Text,{style:{color:"#eee",fontWeight:"bold"},children:s.user.username})})]})]})}),downloadItem:async(e,l)=>({name:e.id+".mp4",url:e.video}),getItemCursor:e=>e?.cursor,rowKey:e=>e.id,header:()=>i.jsx(p,{type:"info",message:i.jsxs(i.Fragment,{children:[i.jsx("i",{className:"fa fa-eye-slash",style:{color:"gray"}})," ",e({en:"Watch all Reels without being tracked by Instagram",vi:"Lướt Reels ẩn danh - Không bị Instagram theo dõi"})]})})})}))}}}));
