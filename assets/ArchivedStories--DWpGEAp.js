const __vite__fileDeps=["./ArchivedStoryViewer-DdEogan8.js","./index-BZV4UHbq.js","./index-DjlRUb8J.css","./MyApp-CpQSQuW8.js","./StoryViewers-DI74rJAm.js","./Collection-DparSUBE.js","./index-xiHX5eb3.js","./file-download-CNCAKmwd.js","./index-CHHU6JzR.js","./Dropdown-wsthajcj.js","./PurePanel-TwJPV-d4.js","./index-CXkeMB69.js","./index-bWqKXhvb.js","./index-BuHxvnd_.js","./index-B2K1fK30.js","./addEventListener-C1baKXre.js","./index-BxU63dyi.js","./index-CfX5Jbsl.js","./Pagination-BwLvSQIN.js","./useBreakpoint-Cfk-nNrv.js","./responsiveObserver-DvoAOAAi.js","./row-BfIPyn7-.js","./index-BabwV2Xa.js","./stories-qLajxvnQ.js","./index-wGvFuDBQ.js","./index-B9xH_X0J.js","./index-C1wXvjkP.js","./index-CwnOq5eq.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{r as c,ap as r,at as h,aq as u}from"./index-BZV4UHbq.js";import{u as f,t as g,a as x,f as v,q as w,x as b,G as j}from"./MyApp-CpQSQuW8.js";import{C as y}from"./Collection-DparSUBE.js";import{d as _,e as k}from"./stories-qLajxvnQ.js";import{L as S}from"./index-CfX5Jbsl.js";import{I as A}from"./index-C1wXvjkP.js";import{T as C}from"./index-B2K1fK30.js";import"./index-xiHX5eb3.js";import"./file-download-CNCAKmwd.js";import"./index-CHHU6JzR.js";import"./Dropdown-wsthajcj.js";import"./PurePanel-TwJPV-d4.js";import"./index-CXkeMB69.js";import"./index-bWqKXhvb.js";import"./index-BuHxvnd_.js";import"./addEventListener-C1baKXre.js";import"./index-BxU63dyi.js";import"./index-BabwV2Xa.js";import"./Pagination-BwLvSQIN.js";import"./useBreakpoint-Cfk-nNrv.js";import"./responsiveObserver-DvoAOAAi.js";import"./row-BfIPyn7-.js";const T=c.lazy(()=>h(()=>import("./ArchivedStoryViewer-DdEogan8.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27]),import.meta.url));function W(){const{ti:n}=f();c.useEffect(()=>{g("ArchivedStories:onLoad")},[]);const m=async(e,o)=>{var t;return await _(o||((t=e==null?void 0:e[e.length-1])==null?void 0:t.cursor)||"")},d=(e,o)=>r.jsxs(S.Item,{children:[r.jsx(A,{src:e.thumbnail,style:{width:160,height:270,borderRadius:10,objectFit:"cover"},preview:{destroyOnClose:!0,toolbarRender:()=>null,imageRender:()=>r.jsx(T,{story:e})}}),r.jsx(x,{direction:"vertical",style:{background:"linear-gradient(0deg, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0) 100%)",position:"absolute",bottom:0,left:0,width:"100%",padding:"5px 10px",paddingTop:"50px",pointerEvents:"none"},children:r.jsxs(C.Text,{style:{color:"#ccc"},children:[r.jsxs("span",{children:[r.jsx("i",{className:"fa fa-eye"})," ",e.seen_count]}),r.jsx("br",{}),v(new Date(e.creation_time),n({en:"en-US",vi:"vi-VN"}))]})})]}),p=async e=>{const o="ArchivedStoryViewer.stories."+e.creation_time,a=w(o)||await k({creationTime:e.creation_time});b(o,a);const t=a.find(i=>i.id===e.id),s=j(new Date(e.creation_time));return[{url:(t==null?void 0:t.video)||(t==null?void 0:t.image)||"",name:s+(t!=null&&t.video?".mp4":".jpg")},{url:(t==null?void 0:t.image_background)||"",name:s+"_bg.jpg"}].filter(i=>i==null?void 0:i.url)},l=e=>r.jsx(u,{onClick:()=>{window.open("https://www.facebook.com/me/allactivity?log_filter=archivedstories","_blank")},icon:r.jsx("i",{className:"fa fa-external-link-alt"}),children:n({vi:"Xem trên Facebook",en:"View on Facebook"})},"view-fb");return r.jsx(y,{collectionName:"Archived Stories",fetchNext:m,renderItem:d,downloadItem:p,headerButtons:l,getItemCursor:e=>e==null?void 0:e.cursor,rowKey:e=>e.id})}export{W as default};
