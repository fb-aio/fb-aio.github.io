import{r as i,aK as e,bm as p,b1 as c}from"./index-CvOM7j0W.js";import{i as l}from"./icons-BX0No4D5.js";import{C as u}from"./Collection-Cen4iurP.js";import{a as f}from"./highlights-DKw0_OsB.js";import{V as x}from"./VideoWithMuted-NkXl8YGU.js";import{L as b}from"./index-z1aAprYd.js";import{I as j}from"./index-D_PgD38w.js";import"./index-BTGokZ7M.js";import"./file-download-BhXCOLqF.js";import"./MyApp-8NcaG9i1.js";import"./index-DxcBPWuB.js";import"./Dropdown-DjRsOusC.js";import"./PurePanel-D5wFQEms.js";import"./index-CLqn-SkY.js";import"./index-CkH1nlna.js";import"./index-JdDrboDm.js";import"./EyeOutlined-BNEV4nsF.js";import"./SearchOutlined-BpjF5JdG.js";import"./index-HWAUjemg.js";import"./core-C5lC6V-k.js";import"./Pagination-B85Ht5Y_.js";import"./useBreakpoint-DolaxH75.js";import"./responsiveObserver-CIcVW9Ed.js";import"./index-MZvm2-To.js";import"./row-mD49OyN7.js";import"./addEventListener-xtCRiYfh.js";function A({target:r,highlight:t}){const a=i.useCallback(async o=>t!=null&&t.id?await f(t.id):void 0,[t]),n=i.useCallback(o=>e.jsxs(b.Item,{children:[e.jsx(j,{src:o.image,width:200,height:330,style:{objectFit:"cover",borderRadius:10},preview:o.video?{destroyOnClose:!0,imageRender:()=>e.jsx(x,{src:o.video,style:{maxWidth:"90vw",maxHeight:"90vh"}}),toolbarRender:()=>null}:!0}),o.video&&e.jsx("div",{style:{position:"absolute",top:10,right:10,pointerEvents:"none"},children:l.IGVideo}),e.jsx("div",{style:{position:"absolute",top:0,left:0,width:"100%",height:"100%",background:"linear-gradient(0deg, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0) 50%)",pointerEvents:"none"},children:e.jsxs("div",{style:{position:"absolute",bottom:15,left:15,fontSize:"1.1em"},children:[o.caption&&e.jsxs(e.Fragment,{children:[e.jsx("i",{className:"fa-solid fa-comment"})," ",p(o.caption,100),e.jsx("br",{})]}),e.jsx("i",{className:"fa-solid fa-clock"})," ",c(o.created_at)]})})]}),[]),m=i.useCallback((o,d)=>{const s=!!o.video;return{url:s?o.video:o.image,name:o.id+(s?".mp4":".jpg")}},[]);return e.jsx(u,{collectionName:(r==null?void 0:r.username)+" - IG Highlight - "+t.title,fetchNext:a,renderItem:n,downloadItem:m,rowKey:o=>o.id,once:!0})}export{A as default};