import{aJ as x,b6 as f,r as u,aL as e,aI as g,b1 as b,aN as n,cs as y,bp as j}from"./index-Qt1L9Xiw.js";import{C as w}from"./Collection-W4X7IqFa.js";import k from"./RecentStoryViewer-CGTSAUzE.js";import{t as l,b as i,B as v,S as F}from"./MyApp-DDUulQzX.js";import{b as R,a as S}from"./stories-ThE8zimb.js";import{B}from"./BadgeWrapper-Dd0Tv_34.js";import{A as N}from"./index-Csn6kufx.js";import{L as T}from"./index-CeVycvI9.js";import{I as C}from"./index-BAuHam2U.js";import{P as I}from"./index-D6Ke4d8X.js";import{A as E}from"./index-DsVSzw3J.js";import{T as A}from"./index-CvQxKMxN.js";import"./index-BX4ZrkmU.js";import"./file-download-cs7-HvOD.js";import"./index-DxPDOh9c.js";import"./Dropdown-CiaV_8Ew.js";import"./PurePanel-D4j__ZHX.js";import"./index-BHhG_OlO.js";import"./index-DAgc2Yal.js";import"./EyeOutlined-vPM2QFd6.js";import"./SearchOutlined-BQt8S8Mq.js";import"./index-DL30kYih.js";import"./StoryViewers-Bu6_SwGx.js";import"./VideoWithMuted-CnU2ASqL.js";import"./Pagination-CHVwkn-q.js";import"./useBreakpoint-CFVo6cTb.js";import"./index-DUm_PftZ.js";import"./row-BPLkYSTc.js";import"./addEventListener-Dg4je8GP.js";function ce(){const{ti:t}=x(),c=f();u.useEffect(()=>{l("RecentStories:onLoad")},[]);const m=o=>{c("/bulk-downloader",{state:{targetId:o,platform:j.Facebook}})},d=async(o,r)=>{var a;return await R(r||((a=o==null?void 0:o[o.length-1])==null?void 0:a.cursor)||"")},p=(o,r)=>e.jsx(T.Item,{children:e.jsxs(v.Ribbon,{text:o.stories.length,style:{opacity:o.stories.length>1?1:0},children:[e.jsx(C,{src:o.thumbnail,style:{width:160,height:270,borderRadius:10,objectFit:"cover"},preview:{destroyOnClose:!0,toolbarRender:()=>null,imageRender:()=>e.jsx(k,{story:o})}}),e.jsx("div",{style:{position:"absolute",top:10,left:10},children:e.jsxs(I,{title:o.seen?e.jsxs(e.Fragment,{children:[e.jsx("i",{className:"fa-solid fa-eye"})," ",o.owner.name," ",t({en:" KNOW you saw",vi:" BIẾT bạn đã xem"})]}):o.owner.name,content:e.jsxs(F.Compact,{children:[e.jsx(i,{title:t({en:"Bulk downloader",vi:"Tải hàng loạt"}),placement:"bottom",children:e.jsx(n,{icon:e.jsx("i",{className:"fa-solid fa-download"}),onClick:()=>m(o.owner.id)})}),e.jsx(i,{title:t({en:"Open Facebook",vi:"Mở Facebook"}),placement:"bottom",children:e.jsx(n,{icon:e.jsx("i",{className:"fa-solid fa-external-link"}),onClick:()=>{window.open("https://fb.com/"+o.owner.id)}})})]}),children:[e.jsx(E,{src:o.owner.avatar,size:40,style:{borderWidth:4,borderColor:"#0866FF"}}),o.seen?e.jsx("i",{className:"fa-solid fa-eye fa-lg",style:{position:"absolute",bottom:0,right:0}}):null]})}),e.jsx("div",{style:{background:"linear-gradient(0deg, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0) 100%)",position:"absolute",bottom:0,left:0,padding:"5px 10px",width:"100%",paddingTop:"50px",pointerEvents:"none"},children:e.jsx(A.Text,{style:{color:"#eee"},children:o.owner.name})})]})}),h=async o=>(await S(o.bucket_id)).map((s,a)=>({name:y(o.owner.name)+(s.video?".mp4":".jpg"),url:s.video||s.image||s.thumbnail}));return e.jsx(w,{collectionName:"Recent Stories "+g(),fetchNext:d,renderItem:p,downloadItem:h,getItemCursor:o=>o==null?void 0:o.cursor,rowKey:o=>o.bucket_id,all:!0,onSearch:(o,r)=>b(o,r.owner.name),header:()=>e.jsx(N,{type:"info",message:e.jsxs(e.Fragment,{children:[e.jsx("i",{className:"fa fa-eye-slash",style:{color:"gray"}})," ",t({en:"View stories anonymously - Friends won't know you've viewed their stories",vi:"Xem tin ẩn danh - Bạn bè sẽ không biết bạn đã xem tin của họ"})]})}),headerButtons:()=>e.jsx(e.Fragment,{children:e.jsx(B,{type:"new",children:e.jsx(i,{title:e.jsxs(e.Fragment,{children:[e.jsx("i",{className:"fa fa-history"})," ",t({en:"Undo your reactions on Facebook story",vi:"Thu hồi cảm xúc đã thả trên Facebook story"})]}),children:e.jsx(n,{icon:e.jsx("i",{className:"fa-solid fa-up-right-from-square"}),onClick:()=>{l("RecentStories:clickHistory"),window.open("https://www.facebook.com/me/allactivity/?category_key=STORIESFEEDBACK","_blank")},children:t({en:"Remove reactions",vi:"Thu hồi cảm xúc"})})})})})})}export{ce as default};