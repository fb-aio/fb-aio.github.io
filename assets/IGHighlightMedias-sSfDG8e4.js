import{r as i,b8 as r,bu as p,br as c}from"./index-wbIphP0C.js";import{i as l}from"./icons-C1EVEqm9.js";import u from"./Collection-B84MYYN0.js";import{a as f}from"./highlights-Dfv4CYwj.js";import{V as x}from"./VideoWithMuted-Cmj6LkIN.js";import{L as b}from"./index-s3q_FkaZ.js";import{k as j}from"./MyApp-njhOwsK5.js";import"./index-CEfgdh1o.js";import"./file-download-D5jJu5kT.js";import"./react-hotkeys-hook.esm-BTAORnXw.js";import"./index-B3Gx5yAQ.js";import"./index-CKlEhchA.js";import"./index-BhxZmaJn.js";import"./index-BJ_cfilr.js";import"./PurePanel-D-rOXPVf.js";import"./move-pmQE-KxM.js";import"./index-CT0-xXd7.js";import"./Pagination-0Ohn2LYf.js";import"./useBreakpoint-DzRoOrnh.js";import"./useForceUpdate-D5RHpHIP.js";import"./responsiveObserver-BQjJBraY.js";import"./index-BQOyVFxl.js";import"./List-xxph-gd1.js";import"./DownOutlined-Bwe6hCgw.js";import"./row-DdHEAPVK.js";import"./col-DRzNhW_D.js";import"./core-BcECDlz5.js";function A({target:t,highlight:e}){const a=i.useCallback(async o=>e!=null&&e.id?await f(e.id):void 0,[e]),n=i.useCallback(o=>r.jsxs(b.Item,{children:[r.jsx(j,{src:o.image,width:200,height:330,style:{objectFit:"cover",borderRadius:10},preview:o.video?{destroyOnClose:!0,imageRender:()=>r.jsx(x,{src:o.video,style:{maxWidth:"90vw",maxHeight:"90vh"}}),toolbarRender:()=>null}:!0}),o.video&&r.jsx("div",{style:{position:"absolute",top:10,right:10,pointerEvents:"none"},children:l.IGVideo}),r.jsx("div",{style:{position:"absolute",top:0,left:0,width:"100%",height:"100%",background:"linear-gradient(0deg, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0) 50%)",pointerEvents:"none"},children:r.jsxs("div",{style:{position:"absolute",bottom:15,left:15,fontSize:"1.1em"},children:[o.caption&&r.jsxs(r.Fragment,{children:[r.jsx("i",{className:"fa-solid fa-comment"})," ",p(o.caption,100),r.jsx("br",{})]}),r.jsx("i",{className:"fa-solid fa-clock"})," ",c(o.created_at)]})})]}),[]),m=i.useCallback((o,d)=>{const s=!!o.video;return{url:s?o.video:o.image,name:o.id+(s?".mp4":".jpg")}},[]);return r.jsx(u,{collectionName:"".concat(t==null?void 0:t.username," - IG Highlight - ").concat(e.title," (").concat(e.id,")"),fetchNext:a,renderItem:n,downloadItem:m,rowKey:o=>o.id,once:!0})}export{A as default};
