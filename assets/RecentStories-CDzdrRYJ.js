import{aG as x,r as f,av as e,aw as n,aR as g}from"./index-C0GZV8r4.js";import{u,t as l,L as b,I as y,T as i,B as w,b as j,aq as k}from"./MyApp-5UuG5Alv.js";import{C as v}from"./Collection-DFbTstJo.js";import R from"./RecentStoryViewer-W0p8CSOc.js";import{b as S,a as F}from"./stories-BAoNFOKF.js";import{A as N}from"./index-D_rV-K7J.js";import{L as T}from"./index-ChuHj_qb.js";import{I as B}from"./index-DqYBXEs5.js";import{P as C}from"./index-CEX1fess.js";import{A as I}from"./index-CRcIzT1K.js";import{T as E}from"./index-CbZxyvQY.js";import"./index-Ca7rCt7M.js";import"./file-download-BJF8e5Y0.js";import"./index-BFuDaB_r.js";import"./Dropdown-B7RIYLpN.js";import"./PurePanel-DK31J58S.js";import"./index-DBY2_SRc.js";import"./index-5vdqXesG.js";import"./index-D8nKmtSx.js";import"./addEventListener-D-0G3yIj.js";import"./index-B5sA0xfq.js";import"./index-9AWtuJYp.js";import"./StoryViewers-DG8H_gUD.js";import"./VideoWithMuted-BYhYz8Pu.js";import"./Pagination-Bqljqj6K.js";import"./useBreakpoint-Bu9dHjAK.js";import"./row-DKHVyfQS.js";function ne(){const{ti:t}=u(),c=x();f.useEffect(()=>{l("RecentStories:onLoad")},[]);const m=o=>{c("/bulk-downloader",{state:{targetId:o,platform:g.Facebook}})},d=async(o,s)=>{var a;return await S(s||((a=o==null?void 0:o[o.length-1])==null?void 0:a.cursor)||"")},p=(o,s)=>e.jsx(T.Item,{children:e.jsxs(w.Ribbon,{text:o.stories.length,style:{opacity:o.stories.length>1?1:0},children:[e.jsx(B,{src:o.thumbnail,style:{width:160,height:270,borderRadius:10,objectFit:"cover"},preview:{destroyOnClose:!0,toolbarRender:()=>null,imageRender:()=>e.jsx(R,{story:o})}}),e.jsx("div",{style:{position:"absolute",top:10,left:10},children:e.jsxs(C,{title:o.seen?e.jsxs(e.Fragment,{children:[e.jsx("i",{className:"fa-solid fa-eye"})," ",o.owner.name," ",t({en:" KNOW you saw",vi:" BIẾT bạn đã xem"})]}):o.owner.name,content:e.jsxs(j.Compact,{children:[e.jsx(i,{title:t({en:"Bulk downloader",vi:"Tải hàng loạt"}),placement:"bottom",children:e.jsx(n,{icon:e.jsx("i",{className:"fa-solid fa-download"}),onClick:()=>m(o.owner.id)})}),e.jsx(i,{title:t({en:"Open Facebook",vi:"Mở Facebook"}),placement:"bottom",children:e.jsx(n,{icon:e.jsx("i",{className:"fa-solid fa-external-link"}),onClick:()=>{window.open("https://fb.com/"+o.owner.id)}})})]}),children:[e.jsx(I,{src:o.owner.avatar,size:40,style:{borderWidth:4,borderColor:"#0866FF"}}),o.seen?e.jsx("i",{className:"fa-solid fa-eye fa-lg",style:{position:"absolute",bottom:0,right:0}}):null]})}),e.jsx("div",{style:{background:"linear-gradient(0deg, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0) 100%)",position:"absolute",bottom:0,left:0,padding:"5px 10px",width:"100%",paddingTop:"50px",pointerEvents:"none"},children:e.jsx(E.Text,{style:{color:"#eee"},children:o.owner.name})})]})}),h=async o=>(await F(o.bucket_id)).map((r,a)=>({name:k(o.owner.name)+(r.video?".mp4":".jpg"),url:r.video||r.image||r.thumbnail}));return e.jsx(v,{collectionName:"Recent Stories "+b(),fetchNext:d,renderItem:p,downloadItem:h,getItemCursor:o=>o==null?void 0:o.cursor,rowKey:o=>o.bucket_id,all:!0,onSearch:(o,s)=>y(o,s.owner.name),header:()=>e.jsx(N,{type:"info",message:e.jsxs(e.Fragment,{children:[e.jsx("i",{className:"fa fa-eye-slash",style:{color:"gray"}})," ",t({en:"View stories anonymously - Friends won't know you've viewed their stories",vi:"Xem tin ẩn danh - Bạn bè sẽ không biết bạn đã xem tin của họ"})]})}),headerButtons:()=>e.jsx(e.Fragment,{children:e.jsx(i,{title:e.jsxs(e.Fragment,{children:[e.jsx("i",{className:"fa fa-history"})," ",t({en:"Story feedback history",vi:"Lịch sử hoạt động trên Tin"})]}),children:e.jsx(n,{icon:e.jsx("i",{className:"fa-solid fa-up-right-from-square"}),onClick:()=>{l("RecentStories:clickHistory"),window.open("https://www.facebook.com/me/allactivity/?category_key=STORIESFEEDBACK","_blank")},children:t({en:"History",vi:"Lịch sử"})})})})})}export{ne as default};