import{b6 as x,bs as u,r as f,b8 as e,b5 as b,bt as g,am as a,cG as y,bA as j}from"./index-wbIphP0C.js";import w from"./Collection-B84MYYN0.js";import k from"./RecentStoryViewer-BwDk09_A.js";import{t as l,T as i,B as v,k as F,S as R,d as S}from"./MyApp-njhOwsK5.js";import{c as B,a as N}from"./stories-DZxUUMRf.js";import{B as T}from"./BadgeWrapper-NRWTo8EW.js";import{A as C}from"./index-BEOp8J_e.js";import{L as E}from"./index-s3q_FkaZ.js";import{P as I}from"./index-B3Gx5yAQ.js";import{A}from"./index-CYf3jpJc.js";import"./index-CEfgdh1o.js";import"./file-download-D5jJu5kT.js";import"./react-hotkeys-hook.esm-BTAORnXw.js";import"./index-CKlEhchA.js";import"./index-BhxZmaJn.js";import"./index-BJ_cfilr.js";import"./PurePanel-D-rOXPVf.js";import"./move-pmQE-KxM.js";import"./index-CT0-xXd7.js";import"./Pagination-0Ohn2LYf.js";import"./useBreakpoint-DzRoOrnh.js";import"./useForceUpdate-D5RHpHIP.js";import"./responsiveObserver-BQjJBraY.js";import"./index-BQOyVFxl.js";import"./List-xxph-gd1.js";import"./DownOutlined-Bwe6hCgw.js";import"./row-DdHEAPVK.js";import"./col-DRzNhW_D.js";import"./StoryViewers-BnF5lg56.js";import"./VideoWithMuted-Cmj6LkIN.js";function me(){const{ti:t}=x(),c=u();f.useEffect(()=>{l("RecentStories:onLoad")},[]);const m=o=>{c("/bulk-downloader",{state:{targetId:o,platform:j.Facebook}})},d=async(o,r)=>{var n;return await B(r||((n=o==null?void 0:o[o.length-1])==null?void 0:n.cursor)||"")},p=(o,r)=>e.jsx(E.Item,{children:e.jsxs(v.Ribbon,{text:o.stories.length,style:{opacity:o.stories.length>1?1:0},children:[e.jsx(F,{src:o.thumbnail,style:{width:160,height:270,borderRadius:10,objectFit:"cover"},preview:{destroyOnClose:!0,toolbarRender:()=>null,imageRender:()=>e.jsx(k,{story:o})}}),e.jsx("div",{style:{position:"absolute",top:10,left:10},children:e.jsxs(I,{title:o.seen?e.jsxs(e.Fragment,{children:[e.jsx("i",{className:"fa-solid fa-eye"})," ",o.owner.name," ",t({en:" KNOW you saw",vi:" BIẾT bạn đã xem"})]}):o.owner.name,content:e.jsxs(R.Compact,{children:[e.jsx(i,{title:t({en:"Bulk downloader",vi:"Tải hàng loạt"}),placement:"bottom",children:e.jsx(a,{icon:e.jsx("i",{className:"fa-solid fa-download"}),onClick:()=>m(o.owner.id)})}),e.jsx(i,{title:t({en:"Open Facebook",vi:"Mở Facebook"}),placement:"bottom",children:e.jsx(a,{icon:e.jsx("i",{className:"fa-solid fa-external-link"}),onClick:()=>{window.open("https://fb.com/"+o.owner.id)}})})]}),children:[e.jsx(A,{src:o.owner.avatar,size:40,style:{borderWidth:4,borderColor:"#0866FF"}}),o.seen?e.jsx("i",{className:"fa-solid fa-eye fa-lg",style:{position:"absolute",bottom:0,right:0}}):null]})}),e.jsx("div",{style:{background:"linear-gradient(0deg, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0) 100%)",position:"absolute",bottom:0,left:0,padding:"5px 10px",width:"100%",paddingTop:"50px",pointerEvents:"none"},children:e.jsx(S.Text,{style:{color:"#eee"},children:o.owner.name})})]})}),h=async o=>(await N(o.bucket_id)).map((s,n)=>({name:y(o.owner.name)+(s.video?".mp4":".jpg"),url:s.video||s.image||s.thumbnail}));return e.jsx(w,{collectionName:"Recent Stories "+b(),fetchNext:d,renderItem:p,downloadItem:h,getItemCursor:o=>o==null?void 0:o.cursor,rowKey:o=>o.bucket_id,all:!0,onSearch:(o,r)=>g(o,r.owner.name),header:()=>e.jsx(C,{type:"info",message:e.jsxs(e.Fragment,{children:[e.jsx("i",{className:"fa fa-eye-slash",style:{color:"gray"}})," ",t({en:"View stories anonymously - Friends won't know you've viewed their stories",vi:"Xem tin ẩn danh - Bạn bè sẽ không biết bạn đã xem tin của họ"})]})}),headerButtons:()=>e.jsx(e.Fragment,{children:e.jsx(T,{type:"new",children:e.jsx(i,{title:e.jsxs(e.Fragment,{children:[e.jsx("i",{className:"fa fa-history"})," ",t({en:"Undo your reactions on Facebook story",vi:"Thu hồi cảm xúc đã thả trên Facebook story"})]}),children:e.jsx(a,{icon:e.jsx("i",{className:"fa-solid fa-up-right-from-square"}),onClick:()=>{l("RecentStories:clickHistory"),window.open("https://www.facebook.com/me/allactivity/?category_key=STORIESFEEDBACK","_blank")},children:t({en:"Remove reactions",vi:"Thu hồi cảm xúc"})})})})})})}export{me as default};
