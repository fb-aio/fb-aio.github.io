const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./VideoViewer-BX6NLlaN.js","./index-D-gFnDVj.js","./index-BztIVJMw.css","./videos-B_Rwysbc.js","./MyApp-DAVwyCu0.js","./VideoWithMuted-B2KFJ3_h.js"])))=>i.map(i=>d[i]);
import{aK as j,aR as w,r as s,aM as t,aO as S,bu as I,aW as L}from"./index-D-gFnDVj.js";import{u as V,i as x,t as y,x as T,S as E}from"./MyApp-DAVwyCu0.js";import{g as R}from"./videos-B_Rwysbc.js";import{B as C}from"./BadgeWrapper-CWfKCySN.js";import{T as D}from"./index-BGtHzT5k.js";import{I as _}from"./index-CVAwGFzo.js";import{C as F}from"./Collapse-CIIzAQE5.js";import"./EyeOutlined-R6UpRx-V.js";import"./SearchOutlined-Buwf07qR.js";const K=s.lazy(()=>L(()=>import("./VideoViewer-BX6NLlaN.js"),__vite__mapDeps([0,1,2,3,4,5]),import.meta.url));function O(){var v,g;const{ti:o}=j(),{message:a}=V(),i=w(),l=s.useMemo(()=>new URLSearchParams(i.search),[i.search]),[f,d]=x("videoDownloader.url",l.get("url")||((v=i.state)==null?void 0:v.url)||""),[h,c]=x("videoDownloader.info",((g=i.state)==null?void 0:g.info)||null),[m,r]=s.useState(!1);s.useEffect(()=>{y("VideoDownloader:onLoad")},[]),s.useEffect(()=>{var e,n;(e=i.state)!=null&&e.url&&((n=i.state)!=null&&n.info)&&(d(i.state.url),c(i.state.info))},[i.state]),s.useEffect(()=>{if(l.get("url")){const e=setTimeout(p,200);return()=>clearTimeout(e)}},[l]);const p=async()=>{const e="VideoDownloader:onSearch";y(e),r(!0),a.loading({key:e,content:o({en:"Finding video...",vi:"Đang tìm video..."}),duration:0});const n=await T(f);if(!n){r(!1),a.error({key:e,content:o({en:"Video not found",vi:"Không tìm thấy video"})});return}a.success({content:o({en:"Found video id: ",vi:"Tìm thấy ID video: "})+n}),a.loading({key:e,content:o({en:"Fetching video info...",vi:"Đang tải thông tin video..."}),duration:0});const u=await R(n);if(console.log(u),!u){r(!1),a.error({key:e,content:o({en:"Cannot fetch video info",vi:"Không tải được video"})});return}a.success({key:e,content:o({en:"Fetched video info",vi:"Tải thông tin video thành công"})}),c(u),r(!1)};return t.jsxs(E,{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",padding:10},direction:"vertical",children:[t.jsx(D.Title,{level:3,children:o({en:"Video/Reel downloader",vi:"Tải video/reel"})}),t.jsx(_.Search,{placeholder:o({en:"Enter video/reel URL",vi:"Nhập LINK video/reel"}),size:"large",style:{width:350},value:f,onChange:e=>{var n;return d((n=e.target.value)==null?void 0:n.trim())},onSearch:()=>p(),enterButton:m?null:t.jsx("i",{className:"fa-solid fa-magnifying-glass"}),loading:m}),h?t.jsxs("div",{style:{position:"relative"},children:[t.jsx(K,{buttonTop:!0,info:h}),t.jsx(S,{type:"text",icon:t.jsx("i",{className:"fa-solid fa-xmark"}),onClick:()=>{d(""),c(null)},style:{position:"absolute",right:5,top:5}})]}):t.jsx(C,{type:"new",children:t.jsx(F,{defaultActiveKey:[0],items:[{label:o({en:"Supported URL format ?",vi:"Các định dạng LINK được hỗ trợ ?"}),children:t.jsx("ul",{children:I.map(e=>t.jsx("li",{children:e},e))})}]})})]})}export{O as default};
