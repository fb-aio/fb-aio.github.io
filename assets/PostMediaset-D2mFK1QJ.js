const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./ImageLazyPreview-D_5b7ZYi.js","./index-CYlZutVr.js","./index-BztIVJMw.css","./MyApp-BJ45vRcB.js","./index-C_xH7MVQ.js","./EyeOutlined-Duix5ejY.js","./addEventListener-B1Rhyrmr.js"])))=>i.map(i=>d[i]);
import{aK as w,r as d,aC as g,aM as o,aO as b,aW as P}from"./index-CYlZutVr.js";import{C as V}from"./Collection-9ziWCEgj.js";import{g as p}from"./videos-CQyi6oow.js";import{u as _,i as I,a8 as k,a as C,a0 as h,a9 as L}from"./MyApp-BJ45vRcB.js";import{i as R}from"./icons-o6YcNLKb.js";import{V as T}from"./VideoWithMuted-y2tdEb7v.js";import{T as E}from"./index-BkwamVt9.js";import{A as M}from"./index-C1pQ7vmG.js";import{L as A}from"./index-Xbsh90k7.js";import"./index-GR6jw6iU.js";import"./file-download-C5TDGQlG.js";import"./index-CyYrA5Nz.js";import"./Dropdown-C-Rv_SFW.js";import"./PurePanel-Mq6tkvkA.js";import"./index-CNM_jJft.js";import"./index-A1GLTxUb.js";import"./EyeOutlined-Duix5ejY.js";import"./SearchOutlined-D8uMPfzU.js";import"./index-D0gqD3Ec.js";import"./Pagination-B9c87l1v.js";import"./useBreakpoint-D8WkCA85.js";import"./index-ClNoq3em.js";import"./row-Jtw_e6pS.js";const F=d.lazy(()=>P(()=>import("./ImageLazyPreview-D_5b7ZYi.js"),__vite__mapDeps([0,1,2,3,4,5,6]),import.meta.url));function ri({target:e,postId:n}){const{ti:r}=w(),{message:f}=_(),[t,v]=I("PostMediaset."+n+".mediaset_token",null),[c,l]=d.useState(!1);d.useEffect(()=>{e!=null&&e.id&&n&&!t&&(l(!0),k(e==null?void 0:e.id,n).then(i=>{console.log(i);const s=g(i,"mediaset_token");if(!s)throw new Error("No mediaset token found");v(s)}).catch(i=>{f.error({content:r({en:"Fail to load post content ",vi:"Lỗi tải dữ liệu bài post "})+i.message})}).finally(()=>{l(!1)}))},[n,e==null?void 0:e.id,t]);const x=async(i=[],s)=>{var u;if(!(e!=null&&e.id)||!t)return;const a=s||((u=i[i.length-1])==null?void 0:u.cursor);return await L(t,a)},y=i=>o.jsxs(A.Item,{style:{position:"relative"},children:[o.jsx(F,{src:i.image,width:200/i.height*i.width,height:200,style:{objectFit:"cover",borderRadius:10},cacheId:"mediaset."+i.id,getPreview:async()=>i.isVideo?(await p(i.id)).source:i.image,renderPreview:i.isVideo?(s,a)=>({destroyOnClose:!0,imageRender:()=>o.jsx(h,{spinning:a,children:o.jsx(T,{src:s,style:{maxWidth:"90vw",maxHeight:"90vh"}})}),toolbarRender:()=>null}):void 0}),i.isVideo&&o.jsx("div",{style:{position:"absolute",top:10,right:10},children:R.IGVideo})]}),j=async i=>{if(i.isVideo){const s=await p(i.id);return{name:i.id+".mp4",url:s.source}}return{name:i.id+".jpg",url:i.image}},m=o.jsx(b,{href:C(n),target:"_blank",icon:o.jsx("i",{className:"fa-solid fa-arrow-up-right-from-square"}),children:r({en:"View post",vi:"Xem bài viết"})});return c?o.jsxs("div",{style:{textAlign:"center"},children:[o.jsx(h,{style:{marginRight:10}}),o.jsx(E.Text,{children:r({en:"Loading post content...",vi:"Đang tải nội dung bài viết..."})})]}):t?o.jsx(V,{collectionName:(e==null?void 0:e.name)+" - Post media - "+n,fetchNext:x,renderItem:y,downloadItem:j,getItemCursor:i=>i.cursor,rowKey:i=>i.id,stop:!(e!=null&&e.id)||!t||c,headerButtons:()=>m}):o.jsxs("div",{style:{textAlign:"center",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center"},children:[o.jsx(M,{type:"error",showIcon:!0,message:r({en:"This post not contain multiple medias",vi:"Bài viết này không chứa nhiều ảnh/video"}),style:{marginRight:10}}),m]})}export{ri as default};
