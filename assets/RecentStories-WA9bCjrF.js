import{aq as x,r as f,ap as e,as as n,aL as g}from"./index-CbxyLh1i.js";import{u,t as l,J as b,G as y,T as i,B as j,b as w,am as k}from"./MyApp-Sn1_uDoa.js";import{C as v}from"./Collection-CIBLkf4j.js";import S from"./RecentStoryViewer-C_looWSJ.js";import{b as F,a as R}from"./stories-9MmFTH2c.js";import{A as N}from"./index-ClKVc9EI.js";import{L as T}from"./index-B1ah6CTo.js";import{I as B}from"./index-sgys5hDh.js";import{P as C}from"./index-C60-ymOx.js";import{A as E}from"./index-B0Efb1Es.js";import{T as I}from"./index-Ce2uPXMA.js";import"./index-B1cmiV9U.js";import"./file-download-D8secaY-.js";import"./index-9ekC7r9I.js";import"./Dropdown-CWpi5ZAi.js";import"./PurePanel-DG3EGm-S.js";import"./index-CO9h1vGW.js";import"./index-C5W4bBkQ.js";import"./index-BtmKbfTk.js";import"./addEventListener-B174J_4Q.js";import"./index-BVuv5qFT.js";import"./index-DpYbx4gW.js";import"./StoryViewers-XMebPYXo.js";import"./Pagination-juAnr4uF.js";import"./useBreakpoint-BbqyQBFm.js";import"./responsiveObserver-CGHRY4l1.js";import"./row-dVMcO0Mb.js";function ne(){const{ti:t}=u(),c=x();f.useEffect(()=>{l("RecentStories:onLoad")},[]);const m=o=>{c("/bulk-downloader",{state:{targetId:o,platform:g.Facebook}})},d=async(o,s)=>{var a;return await F(s||((a=o==null?void 0:o[o.length-1])==null?void 0:a.cursor)||"")},p=(o,s)=>e.jsx(T.Item,{children:e.jsxs(j.Ribbon,{text:o.stories.length,style:{opacity:o.stories.length>1?1:0},children:[e.jsx(B,{src:o.thumbnail,style:{width:160,height:270,borderRadius:10,objectFit:"cover"},preview:{destroyOnClose:!0,toolbarRender:()=>null,imageRender:()=>e.jsx(S,{story:o})}}),e.jsx("div",{style:{position:"absolute",top:10,left:10},children:e.jsxs(C,{title:o.seen?e.jsxs(e.Fragment,{children:[e.jsx("i",{className:"fa-solid fa-eye"})," ",o.owner.name," ",t({en:" KNOW you saw",vi:" BIẾT bạn đã xem"})]}):o.owner.name,content:e.jsxs(w.Compact,{children:[e.jsx(i,{title:t({en:"Bulk downloader",vi:"Tải hàng loạt"}),placement:"bottom",children:e.jsx(n,{icon:e.jsx("i",{className:"fa-solid fa-download"}),onClick:()=>m(o.owner.id)})}),e.jsx(i,{title:t({en:"Open Facebook",vi:"Mở Facebook"}),placement:"bottom",children:e.jsx(n,{icon:e.jsx("i",{className:"fa-solid fa-external-link"}),onClick:()=>{window.open("https://fb.com/"+o.owner.id)}})})]}),children:[e.jsx(E,{src:o.owner.avatar,size:40,style:{borderWidth:4,borderColor:"#0866FF"}}),o.seen?e.jsx("i",{className:"fa-solid fa-eye fa-lg",style:{position:"absolute",bottom:0,right:0}}):null]})}),e.jsx("div",{style:{background:"linear-gradient(0deg, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0) 100%)",position:"absolute",bottom:0,left:0,padding:"5px 10px",width:"100%",paddingTop:"50px",pointerEvents:"none"},children:e.jsx(I.Text,{style:{color:"#eee"},children:o.owner.name})})]})}),h=async o=>(await R(o.bucket_id)).map((r,a)=>({name:k(o.owner.name)+(r.video?".mp4":".jpg"),url:r.video||r.image||r.thumbnail}));return e.jsx(v,{collectionName:"Recent Stories "+b(),fetchNext:d,renderItem:p,downloadItem:h,getItemCursor:o=>o==null?void 0:o.cursor,rowKey:o=>o.bucket_id,all:!0,onSearch:(o,s)=>y(o,s.owner.name),header:()=>e.jsx(N,{type:"info",message:e.jsxs(e.Fragment,{children:[e.jsx("i",{className:"fa fa-eye-slash",style:{color:"gray"}})," ",t({en:"View stories anonymously - Friends won't know you've viewed their stories",vi:"Xem tin ẩn danh - Bạn bè sẽ không biết bạn đã xem tin của họ"})]})}),headerButtons:()=>e.jsx(e.Fragment,{children:e.jsx(i,{title:e.jsxs(e.Fragment,{children:[e.jsx("i",{className:"fa fa-history"})," ",t({en:"Story feedback history",vi:"Lịch sử hoạt động trên Tin"})]}),children:e.jsx(n,{icon:e.jsx("i",{className:"fa-solid fa-up-right-from-square"}),onClick:()=>{l("RecentStories:clickHistory"),window.open("https://www.facebook.com/me/allactivity/?category_key=STORIESFEEDBACK","_blank")},children:t({en:"History",vi:"Lịch sử"})})})})})}export{ne as default};
