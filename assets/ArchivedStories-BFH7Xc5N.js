const __vite__fileDeps=["./ArchivedStoryViewer-DQWejhZU.js","./index-CX461bZ7.js","./index-BM_p-30O.css","./MyApp-BdU98SHx.js","./StoryViewers-C6cNzhWj.js","./Collection-BmfOhQfr.js","./index-DxubafEX.js","./file-download-Do8f2PPK.js","./index-DBzt-ARy.js","./Dropdown-Bn0d3AP-.js","./PurePanel-Cljw82G2.js","./index-x94hlA63.js","./TextArea-D6nFyh_l.js","./addEventListener-lcr56SeY.js","./index-CtbOtFt2.js","./Pagination-DaQVeyeA.js","./useBreakpoint-DNjyW7sX.js","./responsiveObserver-DUYzmFPe.js","./row-C39O-hvc.js","./stories-D_JNHE5b.js","./index-CapnTH4c.js","./styleChecker-z_j4FDWQ.js","./index-C5AF9TzP.js","./index-BGu2aXWA.js","./index-QtiY48Vm.js","./index-DXm4C6oh.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{r as c,aq as t,au as h,ar as u}from"./index-CX461bZ7.js";import{a as g,t as f,S as v,H as x,n as b,r as w,ab as j}from"./MyApp-BdU98SHx.js";import{C as y}from"./Collection-BmfOhQfr.js";import{c as _,d as S}from"./stories-D_JNHE5b.js";import{L as k}from"./index-CtbOtFt2.js";import{I as A}from"./index-QtiY48Vm.js";import{T as C}from"./index-CapnTH4c.js";import"./index-DxubafEX.js";import"./file-download-Do8f2PPK.js";import"./index-DBzt-ARy.js";import"./Dropdown-Bn0d3AP-.js";import"./PurePanel-Cljw82G2.js";import"./index-x94hlA63.js";import"./TextArea-D6nFyh_l.js";import"./addEventListener-lcr56SeY.js";import"./Pagination-DaQVeyeA.js";import"./useBreakpoint-DNjyW7sX.js";import"./responsiveObserver-DUYzmFPe.js";import"./row-C39O-hvc.js";import"./styleChecker-z_j4FDWQ.js";const T=c.lazy(()=>h(()=>import("./ArchivedStoryViewer-DQWejhZU.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25]),import.meta.url));function J(){const{ti:n}=g();c.useEffect(()=>{f("ArchivedStories:onLoad")},[]);const m=async(e,o)=>{var r;return await _(o||((r=e==null?void 0:e[e.length-1])==null?void 0:r.cursor)||"")},d=(e,o)=>t.jsxs(k.Item,{children:[t.jsx(A,{src:e.thumbnail,style:{width:160,height:270,borderRadius:10,objectFit:"cover"},preview:{destroyOnClose:!0,toolbarRender:()=>null,imageRender:()=>t.jsx(T,{story:e})}}),t.jsx(v,{direction:"vertical",style:{background:"linear-gradient(0deg, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0) 100%)",position:"absolute",bottom:0,left:0,width:"100%",padding:"5px 10px",paddingTop:"50px",pointerEvents:"none"},children:t.jsxs(C.Text,{style:{color:"#ccc"},children:[t.jsxs("span",{children:[t.jsx("i",{className:"fa fa-eye"})," ",e.seen_count]}),t.jsx("br",{}),x(new Date(e.creation_time),n({en:"en-US",vi:"vi-VN"}))]})})]}),l=async e=>{const o="ArchivedStoryViewer.stories."+e.creation_time,a=b(o)||await S({creationTime:e.creation_time});w(o,a);const r=a.find(i=>i.id===e.id),s=j(new Date(e.creation_time));return[{url:(r==null?void 0:r.video)||(r==null?void 0:r.image)||"",name:s+(r!=null&&r.video?".mp4":".jpg")},{url:(r==null?void 0:r.image_background)||"",name:s+"_bg.jpg"}].filter(i=>i==null?void 0:i.url)},p=e=>t.jsx(u,{onClick:()=>{window.open("https://www.facebook.com/me/allactivity?log_filter=archivedstories","_blank")},icon:t.jsx("i",{className:"fa fa-external-link-alt"}),children:n({vi:"Xem trên Facebook",en:"View on Facebook"})},"view-fb");return t.jsx(y,{collectionName:"Archived Stories",fetchNext:m,renderItem:d,downloadItem:l,headerButtons:p,getItemCursor:e=>e==null?void 0:e.cursor,rowKey:e=>e.id})}export{J as default};