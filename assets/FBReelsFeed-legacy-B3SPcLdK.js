System.register(["./index-legacy-DgDxnhpA.js","./reels-legacy-DhJH-BLk.js","./Collection-legacy-CT4dms2K.js","./MyApp-legacy--44lDAYA.js","./VideoViewer-legacy-CxZn1-Ed.js","./index-legacy-DmIDLGgS.js","./index-legacy-BHyr6atY.js","./index-legacy-BDlErKet.js","./index-legacy-DQnh8r-z.js","./videos-legacy-BYhjAVga.js","./index-legacy-DtTRmuRZ.js","./file-download-legacy-CITZosSI.js","./react-hotkeys-hook.esm-legacy-CnhR9qXy.js","./index-legacy-CphRATWL.js","./index-legacy-Daaohuto.js","./index-legacy-B7D85tm3.js","./index-legacy-DnTQUxLr.js","./Dropdown-legacy-DZYgwR4s.js","./PurePanel-legacy-DCSDv3sl.js","./move-legacy-D4CLyVSa.js","./index-legacy-D7Sgl99W.js","./TextArea-legacy-B9cfn5c-.js","./SearchOutlined-legacy-CuuS7WlB.js","./index-legacy-C6Lgksty.js","./Pagination-legacy-BNXwGNoJ.js","./useBreakpoint-legacy-fAAoUt70.js","./useForceUpdate-legacy-CaDY0ldf.js","./index-legacy-i3bw2b2W.js","./List-legacy-DQsyQNx_.js","./DownOutlined-legacy-Dv1to0sb.js","./row-legacy-vWQqcFVi.js","./col-legacy-D6No8P8C.js","./VideoWithMuted-legacy-CsA3myhg.js"],(function(e,l){"use strict";var s,n,i,a,o,t,r,c,d,g,u,j,y,x,h,f,m,p,b,v,w;return{setters:[e=>{s=e.aU,n=e.bi,i=e.r,a=e.aW,o=e.cx,t=e.bd,r=e.a_,c=e.bp,d=e.bj},e=>{g=e.a},e=>{u=e.default},e=>{j=e.t,y=e.I,x=e.S,h=e.b,f=e.a},e=>{m=e.default},e=>{p=e.A},e=>{b=e.L},e=>{v=e.T},e=>{w=e.A},null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],execute:function(){e("default",(function(){const{ti:e}=s(),l=n();return i.useEffect((()=>{j("FBReelsFeed:onLoad")}),[]),a.jsx(u,{collectionName:"FBReelsFeed",fetchNext:async(e,l)=>await g({cursor:l||e?.[e.length-1]?.cursor||""}),renderItem:(s,n)=>a.jsx(b.Item,{children:a.jsxs("div",{className:"show-on-hover-trigger",children:[a.jsxs("div",{style:{position:"relative"},children:[a.jsx(y,{src:s.video.thumbnail,style:{width:200,height:300,borderRadius:10,objectFit:"cover"},preview:{destroyOnClose:!0,toolbarRender:()=>null,imageRender:()=>a.jsx(m,{info:s.video})}}),a.jsxs("div",{style:{color:"#eee",background:"linear-gradient(0deg, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0) 100%)",position:"absolute",bottom:0,left:0,padding:"5px 10px",width:"100%",paddingTop:"50px",pointerEvents:"none",display:"flex",flexDirection:"column"},children:[a.jsxs(x,{children:[a.jsx("i",{className:"fa-solid fa-film"}),o(s.video.length/1e3)]}),a.jsxs(x,{children:[a.jsx("i",{className:"fa-regular fa-clock"}),t(parseInt(s.video.created_time))]})]}),a.jsxs(x,{className:"show-on-hover-item",direction:"horizontal",style:{position:"absolute",bottom:10,right:10},size:3,children:[a.jsx(h,{title:e({en:"Open in Bulk Downloader",vi:"Mở trong Tải hàng loạt"}),children:a.jsx(r,{icon:a.jsx("i",{className:"fa-solid fa-search"}),onClick:()=>{const e=!!s.owner.ig_username;l("/bulk-downloader",{state:{targetId:e?s.owner.ig_username:s.owner.id,platform:e?c.Instagram:c.Facebook}})}})}),a.jsx(r,{icon:a.jsx("i",{className:"fa-solid fa-up-right-from-square"}),target:"_blank",href:f(s.video.id)})]})]}),a.jsx("div",{style:{width:200,display:"flex",flexDirection:"column"},children:a.jsx(h,{title:s.translated_caption||s.caption,children:a.jsx(v.Text,{children:d(s.caption,80)})})}),a.jsxs("div",{style:{position:"absolute",top:5,left:5,right:5,display:"flex"},children:[a.jsxs("div",{style:{position:"relative",height:40},children:[a.jsx(w,{onClick:()=>window.open(s.owner.url,"_blank"),src:s.owner.avatar,size:40,style:{borderWidth:2,borderColor:"#0866FF",marginRight:3,cursor:"pointer"}}),s.owner.ig_username&&a.jsx("i",{className:"fa-brands fa-instagram fa-lg",style:{position:"absolute",bottom:3,right:3}})]}),a.jsx("div",{style:{display:"inline-block",background:"#1119",padding:"3px 5px",borderRadius:5,pointerEvents:"none",alignSelf:"center",flex:1},children:a.jsx(v.Text,{style:{color:"#eee",fontWeight:"bold"},children:s.owner.name||s.owner.ig_username})})]})]})}),downloadItem:async(e,l)=>({name:e.video.id+".mp4",url:e.video.source}),getItemCursor:e=>e?.cursor,rowKey:e=>e.id,header:()=>a.jsx(p,{type:"info",message:a.jsxs(a.Fragment,{children:[a.jsx("i",{className:"fa fa-eye-slash",style:{color:"gray"}})," ",e({en:"Watch all Reels without being tracked by Facebook",vi:"Lướt Reels ẩn danh - Không bị Facebook theo dõi"})]})})})}))}}}));
