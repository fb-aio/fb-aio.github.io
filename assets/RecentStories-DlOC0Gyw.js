import{am as x,r as f,ao as o,ap as n}from"./index-wd7D1sa9.js";import{a as u,t as g,ad as h,E as b,B as w,S as j,T as i,ae as y}from"./MyApp-x8YBo5SJ.js";import{C as v}from"./Collection-Bn7Ewie7.js";import k from"./RecentStoryViewer-JpuUQQ-a.js";import{b as R,a as S}from"./stories-CUs3jWhz.js";import{P as F}from"./index-vuHwb1ab.js";import{A as N}from"./index-BFtIulII.js";import{L as T}from"./index-7oTyZyct.js";import{I as B}from"./index-Cd_jk4VH.js";import{P as C}from"./index-vXgg_An5.js";import{A as I}from"./index-CAaDC2xK.js";import{T as E}from"./index-C8GTRBkK.js";import"./index-yQMKDh_2.js";import"./file-download-BuQZSLuO.js";import"./index-sd3o_1EP.js";import"./Dropdown-Dv8bXDcM.js";import"./PurePanel-DNOHENUf.js";import"./index-CeeX3Wj6.js";import"./TextArea-DmDIFrQv.js";import"./addEventListener-Dpv3AVH6.js";import"./index-BLJY1CRE.js";import"./StoryViewers-D435YI3c.js";import"./Pagination-d9PPne2O.js";import"./useBreakpoint-8DG2unkA.js";import"./responsiveObserver-4Ct8xUg-.js";import"./row-CWI6PJbM.js";import"./styleChecker-BN4SXFLF.js";function ne(){const{ti:r}=u(),l=x();f.useEffect(()=>{g("RecentStories:onLoad")},[]);const m=e=>{l("/bulk-downloader",{state:{targetId:e,platform:F.Facebook}})},c=async(e,t)=>{var a;return await R(t||((a=e==null?void 0:e[e.length-1])==null?void 0:a.cursor)||"")},d=(e,t)=>o.jsx(T.Item,{children:o.jsxs(w.Ribbon,{text:e.stories.length,style:{opacity:e.stories.length>1?1:0},children:[o.jsx(B,{src:e.thumbnail,style:{width:160,height:270,borderRadius:10,objectFit:"cover"},preview:{destroyOnClose:!0,toolbarRender:()=>null,imageRender:()=>o.jsx(k,{story:e})}}),o.jsx("div",{style:{position:"absolute",top:10,left:10},children:o.jsxs(C,{title:e.seen?o.jsxs(o.Fragment,{children:[o.jsx("i",{className:"fa-solid fa-eye"})," ",e.owner.name," ",r({en:" KNOW you saw",vi:" BIẾT bạn đã xem"})]}):e.owner.name,content:o.jsxs(j.Compact,{children:[o.jsx(i,{title:r({en:"Bulk downloader",vi:"Tải hàng loạt"}),placement:"bottom",children:o.jsx(n,{icon:o.jsx("i",{className:"fa-solid fa-download"}),onClick:()=>m(e.owner.id)})}),o.jsx(i,{title:r({en:"Open Facebook",vi:"Mở Facebook"}),placement:"bottom",children:o.jsx(n,{icon:o.jsx("i",{className:"fa-solid fa-external-link"}),onClick:()=>{window.open("https://fb.com/"+e.owner.id)}})})]}),children:[o.jsx(I,{src:e.owner.avatar,size:40,style:{borderWidth:4,borderColor:"#0866FF"}}),e.seen?o.jsx("i",{className:"fa-solid fa-eye fa-lg",style:{position:"absolute",bottom:0,right:0}}):null]})}),o.jsx("div",{style:{background:"linear-gradient(0deg, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0) 100%)",position:"absolute",bottom:0,left:0,padding:"5px 10px",width:"100%",paddingTop:"50px",pointerEvents:"none"},children:o.jsx(E.Text,{style:{color:"#eee"},children:e.owner.name})})]})}),p=async e=>(await S(e.bucket_id)).map((s,a)=>({name:y(e.owner.name)+(s.video?".mp4":".jpg"),url:s.video||s.image||s.thumbnail}));return o.jsx(v,{collectionName:"Recent Stories "+h(),fetchNext:c,renderItem:d,downloadItem:p,getItemCursor:e=>e==null?void 0:e.cursor,rowKey:e=>e.bucket_id,all:!0,onSearch:(e,t)=>b(e,t.owner.name),header:()=>o.jsx(N,{type:"info",message:o.jsxs(o.Fragment,{children:[o.jsx("i",{className:"fa fa-eye-slash",style:{color:"gray"}})," ",r({en:"View stories anonymously - Friends won't know you've viewed their stories",vi:"Xem tin ẩn danh - Bạn bè sẽ không biết bạn đã xem tin của họ"})]})})})}export{ne as default};