const __vite__fileDeps=["./ArchivedStoryViewer-DSlWYwjD.js","./index-B_jZEb__.js","./index-DjlRUb8J.css","./MyApp-BycUN0_u.js","./StoryViewers-C4mZYLMk.js","./Collection-BOJbI2w-.js","./index-bWONBu7J.js","./file-download-tq_CNB5u.js","./index-BCozaaC_.js","./Dropdown-BHHgQi8q.js","./PurePanel-CWYPkMI9.js","./index-CyKnLzgY.js","./index-BiwhyZjk.js","./index-aFeeKJIk.js","./TextArea-eUhruA7f.js","./addEventListener-C69WSFn-.js","./index-CaKAOveq.js","./index-D1_LFGNr.js","./Pagination-CcHVFCLE.js","./useBreakpoint-BT6go2aR.js","./responsiveObserver-cjyuYb8T.js","./row-DrbQIr8S.js","./index-nJTQAUbn.js","./stories-gZm9vCec.js","./index-B7_SlTTn.js","./index-nDV1-cTx.js","./index-DemYrkq4.js","./index-CJ-JscGF.js","./index-BtYRQQdY.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{r as c,ap as r,at as h,aq as u}from"./index-B_jZEb__.js";import{u as f,t as g,b as v,f as x,v as b,y as w,H as j}from"./MyApp-BycUN0_u.js";import{C as y}from"./Collection-BOJbI2w-.js";import{d as _,e as k}from"./stories-gZm9vCec.js";import{L as S}from"./index-D1_LFGNr.js";import{I as A}from"./index-CJ-JscGF.js";import{T as C}from"./index-B7_SlTTn.js";import"./index-bWONBu7J.js";import"./file-download-tq_CNB5u.js";import"./index-BCozaaC_.js";import"./Dropdown-BHHgQi8q.js";import"./PurePanel-CWYPkMI9.js";import"./index-CyKnLzgY.js";import"./index-BiwhyZjk.js";import"./index-aFeeKJIk.js";import"./TextArea-eUhruA7f.js";import"./addEventListener-C69WSFn-.js";import"./index-CaKAOveq.js";import"./index-nJTQAUbn.js";import"./Pagination-CcHVFCLE.js";import"./useBreakpoint-BT6go2aR.js";import"./responsiveObserver-cjyuYb8T.js";import"./row-DrbQIr8S.js";const T=c.lazy(()=>h(()=>import("./ArchivedStoryViewer-DSlWYwjD.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28]),import.meta.url));function Z(){const{ti:n}=f();c.useEffect(()=>{g("ArchivedStories:onLoad")},[]);const m=async(e,o)=>{var t;return await _(o||((t=e==null?void 0:e[e.length-1])==null?void 0:t.cursor)||"")},d=(e,o)=>r.jsxs(S.Item,{children:[r.jsx(A,{src:e.thumbnail,style:{width:160,height:270,borderRadius:10,objectFit:"cover"},preview:{destroyOnClose:!0,toolbarRender:()=>null,imageRender:()=>r.jsx(T,{story:e})}}),r.jsx(v,{direction:"vertical",style:{background:"linear-gradient(0deg, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0) 100%)",position:"absolute",bottom:0,left:0,width:"100%",padding:"5px 10px",paddingTop:"50px",pointerEvents:"none"},children:r.jsxs(C.Text,{style:{color:"#ccc"},children:[r.jsxs("span",{children:[r.jsx("i",{className:"fa fa-eye"})," ",e.seen_count]}),r.jsx("br",{}),x(new Date(e.creation_time),n({en:"en-US",vi:"vi-VN"}))]})})]}),p=async e=>{const o="ArchivedStoryViewer.stories."+e.creation_time,a=b(o)||await k({creationTime:e.creation_time});w(o,a);const t=a.find(i=>i.id===e.id),s=j(new Date(e.creation_time));return[{url:(t==null?void 0:t.video)||(t==null?void 0:t.image)||"",name:s+(t!=null&&t.video?".mp4":".jpg")},{url:(t==null?void 0:t.image_background)||"",name:s+"_bg.jpg"}].filter(i=>i==null?void 0:i.url)},l=e=>r.jsx(u,{onClick:()=>{window.open("https://www.facebook.com/me/allactivity?log_filter=archivedstories","_blank")},icon:r.jsx("i",{className:"fa fa-external-link-alt"}),children:n({vi:"Xem trên Facebook",en:"View on Facebook"})},"view-fb");return r.jsx(y,{collectionName:"Archived Stories",fetchNext:m,renderItem:d,downloadItem:p,headerButtons:l,getItemCursor:e=>e==null?void 0:e.cursor,rowKey:e=>e.id})}export{Z as default};