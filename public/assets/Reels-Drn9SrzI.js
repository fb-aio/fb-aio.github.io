const __vite__fileDeps=["./VideoViewer-BThVn06o.js","./index-D5lrbfGq.js","./index-DfqnkV-X.css","./VideoWithMuted-BrEO7g-w.js","./MyApp-B2cDPPVC.js","./ImageLazyPreview-2-ZzqvvJ.js","./index-ieiKbi_J.js","./EyeOutlined-85kQT3d7.js","./addEventListener-CSC_DLzP.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{r as l,aA as s,aB as h,aF as m}from"./index-D5lrbfGq.js";import{u,S as r,ae as f,h as x,at as g,ad as j,ab as v,K as w,f as b}from"./MyApp-B2cDPPVC.js";import{C as y}from"./Collection-Y8JvGV6r.js";import{g as _}from"./reels-TPaZ8zE1.js";import{g as N}from"./videos-sQvinZMp.js";import{L as R}from"./index-cS5JonDJ.js";import{T as I}from"./index-DLmnfD3x.js";import"./index-MBG2ZgWf.js";import"./file-download-_Qmun7WT.js";import"./index-DUyg8ciO.js";import"./Dropdown-hE1e3b6i.js";import"./PurePanel-BYOCgcxL.js";import"./index-CJnIgwRS.js";import"./index-Qdokcq0R.js";import"./EyeOutlined-85kQT3d7.js";import"./SearchOutlined-rn9UWWMg.js";import"./index-BchjEMvi.js";import"./Pagination-DLnZQEII.js";import"./useBreakpoint-jot_nTav.js";import"./responsiveObserver-VKse1QGe.js";import"./index-DeNSjtoI.js";import"./row-DZePA1Vc.js";const k=l.lazy(()=>m(()=>import("./VideoViewer-BThVn06o.js"),__vite__mapDeps([0,1,2,3,4]),import.meta.url)),C=l.lazy(()=>m(()=>import("./ImageLazyPreview-2-ZzqvvJ.js"),__vite__mapDeps([5,1,2,4,6,7,8]),import.meta.url));function Y({target:o}){const{ti:n}=u(),c=l.useCallback(async(e=[],i)=>{var t;return!(o!=null&&o.id)||!(o!=null&&o.type)?void 0:(i=i||((t=e==null?void 0:e[(e==null?void 0:e.length)-1])==null?void 0:t.cursor)||"",await _({id:o.id,cursor:i}))},[o]),d=l.useCallback(async e=>({url:e.source,name:e.id+".mp4"}),[]),p=l.useCallback(e=>s.jsx(R.Item,{children:s.jsxs(r,{direction:"vertical",children:[s.jsxs("div",{className:"show-on-hover-trigger",children:[s.jsx(C,{src:e.thumbnail,width:200,height:300,style:{objectFit:"cover",borderRadius:10},cacheId:"reels."+e.id,getPreview:()=>e.source||N(e.id).then(i=>(console.log(i),i.source)),renderPreview:(i,a)=>({destroyOnClose:!0,imageRender:()=>s.jsx(f,{spinning:a,children:s.jsx(k,{info:e,style:{maxWidth:"90vw",maxHeight:"90vh"}})}),toolbarRender:()=>null})}),s.jsx(h,{type:"default",icon:s.jsx("i",{className:"fa-solid fa-up-right-from-square"}),style:{position:"absolute",bottom:10,right:10},className:"show-on-hover-item",target:"_blank",href:x(e.id)})]}),s.jsx(I.Paragraph,{style:{maxWidth:"150px",wordWrap:"break-word"},onClick:()=>window.open(e.url),children:g(e.description,100)}),s.jsxs(r,{direction:"vertical",size:1,style:{position:"absolute",top:0,left:0,padding:10,paddingBottom:50,width:"100%",background:"linear-gradient(180deg, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0) 100%)",pointerEvents:"none"},children:[s.jsxs(r,{children:[s.jsx("i",{className:"fa-regular fa-eye"}),e.viewCount]}),s.jsxs(r,{children:[s.jsx("i",{className:"fa-solid fa-film"}),e.length?j(e.length):null]}),s.jsxs(r,{children:[s.jsx("i",{className:"fa-regular fa-clock"}),v(e.created_time)]}),e.music?s.jsxs(r,{align:"start",size:4,children:[s.jsx("i",{className:"fa-solid fa-music"})," ",e.music]}):null]})]})}),[]);return s.jsx(y,{collectionName:(o==null?void 0:o.name)+" - Reels",fetchNext:c,renderItem:p,downloadItem:d,getItemCursor:e=>e.cursor,rowKey:e=>e.id,searchPlaceholder:e=>n({en:`Seach in ${e==null?void 0:e.length} Reels`,vi:`Tìm kiếm trong ${e==null?void 0:e.length} Reels`}),onSearch:(e,i)=>w(e,i.description+i.music+b(i.created_time,n({en:"en-US",vi:"vi-VN"})))})}export{Y as default};
