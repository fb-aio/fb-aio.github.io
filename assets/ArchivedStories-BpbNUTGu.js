const __vite__fileDeps=["./ArchivedStoryViewer-D_yDaMVK.js","./index-DcGwMFi1.js","./index-BM_p-30O.css","./MyApp-B0rt5tZI.js","./StoryViewers-BNxsB7Y8.js","./Collection-sjlF4nLD.js","./index-FrNJKFDK.js","./file-download-D4dwkz0M.js","./index-CAPUUDc3.js","./Dropdown-Da8VIZRs.js","./PurePanel-Bd0K6s7P.js","./index-PZjQwZ3y.js","./TextArea-BodOEEOW.js","./addEventListener-D31zUCov.js","./index-BYZfNbcM.js","./Pagination-CRH5p6T8.js","./useBreakpoint-lNwm2n36.js","./responsiveObserver-CnPZ-Kfk.js","./row-DVr1uV3w.js","./stories-BQpsVuzN.js","./index-BGobKYqd.js","./styleChecker-BTKlUCyi.js","./index-C0Gp00ab.js","./index-CP8-NVVi.js","./index-B8Ur4ZN1.js","./index-BaLuh9zt.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{r as c,aq as t,au as h,ar as u}from"./index-DcGwMFi1.js";import{a as g,t as f,S as v,H as x,n as b,r as w,ab as j}from"./MyApp-B0rt5tZI.js";import{C as y}from"./Collection-sjlF4nLD.js";import{c as _,d as S}from"./stories-BQpsVuzN.js";import{L as k}from"./index-BYZfNbcM.js";import{I as A}from"./index-B8Ur4ZN1.js";import{T as C}from"./index-BGobKYqd.js";import"./index-FrNJKFDK.js";import"./file-download-D4dwkz0M.js";import"./index-CAPUUDc3.js";import"./Dropdown-Da8VIZRs.js";import"./PurePanel-Bd0K6s7P.js";import"./index-PZjQwZ3y.js";import"./TextArea-BodOEEOW.js";import"./addEventListener-D31zUCov.js";import"./Pagination-CRH5p6T8.js";import"./useBreakpoint-lNwm2n36.js";import"./responsiveObserver-CnPZ-Kfk.js";import"./row-DVr1uV3w.js";import"./styleChecker-BTKlUCyi.js";const T=c.lazy(()=>h(()=>import("./ArchivedStoryViewer-D_yDaMVK.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25]),import.meta.url));function J(){const{ti:n}=g();c.useEffect(()=>{f("ArchivedStories:onLoad")},[]);const m=async(e,o)=>{var r;return await _(o||((r=e==null?void 0:e[e.length-1])==null?void 0:r.cursor)||"")},d=(e,o)=>t.jsxs(k.Item,{children:[t.jsx(A,{src:e.thumbnail,style:{width:160,height:270,borderRadius:10,objectFit:"cover"},preview:{destroyOnClose:!0,toolbarRender:()=>null,imageRender:()=>t.jsx(T,{story:e})}}),t.jsx(v,{direction:"vertical",style:{background:"linear-gradient(0deg, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0) 100%)",position:"absolute",bottom:0,left:0,width:"100%",padding:"5px 10px",paddingTop:"50px",pointerEvents:"none"},children:t.jsxs(C.Text,{style:{color:"#ccc"},children:[t.jsxs("span",{children:[t.jsx("i",{className:"fa fa-eye"})," ",e.seen_count]}),t.jsx("br",{}),x(new Date(e.creation_time),n({en:"en-US",vi:"vi-VN"}))]})})]}),l=async e=>{const o="ArchivedStoryViewer.stories."+e.creation_time,a=b(o)||await S({creationTime:e.creation_time});w(o,a);const r=a.find(i=>i.id===e.id),s=j(new Date(e.creation_time));return[{url:(r==null?void 0:r.video)||(r==null?void 0:r.image)||"",name:s+(r!=null&&r.video?".mp4":".jpg")},{url:(r==null?void 0:r.image_background)||"",name:s+"_bg.jpg"}].filter(i=>i==null?void 0:i.url)},p=e=>t.jsx(u,{onClick:()=>{window.open("https://www.facebook.com/me/allactivity?log_filter=archivedstories","_blank")},icon:t.jsx("i",{className:"fa fa-external-link-alt"}),children:n({vi:"Xem trên Facebook",en:"View on Facebook"})},"view-fb");return t.jsx(y,{collectionName:"Archived Stories",fetchNext:m,renderItem:d,downloadItem:l,headerButtons:p,getItemCursor:e=>e==null?void 0:e.cursor,rowKey:e=>e.id})}export{J as default};
