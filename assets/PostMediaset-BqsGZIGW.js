const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./ImageLazyPreview-ERVEJ2ba.js","./index-C5GnY8z3.js","./index-BztIVJMw.css","./MyApp-DcoyQWYP.js","./index-1qYh6WD_.js","./EyeOutlined-B_AlcTiW.js","./addEventListener-CTMVV1Xq.js"])))=>i.map(i=>d[i]);
import{aK as w,r as d,aC as g,aM as o,aO as b,aW as P}from"./index-C5GnY8z3.js";import{C as V}from"./Collection-BkV_ClXi.js";import{g as p}from"./videos-DIb-9CKe.js";import{u as _,j as I,a9 as k,a as C,a0 as h,aa as L}from"./MyApp-DcoyQWYP.js";import{i as R}from"./icons-PuWagdd7.js";import{V as T}from"./VideoWithMuted-DjXPNZ7M.js";import{T as E}from"./index-CdNmBQMa.js";import{A as M}from"./index-BZkrLMAA.js";import{L as A}from"./index-B9mfgFd-.js";import"./index-pG4luntM.js";import"./file-download-D6Ee90a6.js";import"./index-BrI33Fzl.js";import"./Dropdown-C7bVIH3f.js";import"./PurePanel-Bo8TTaRS.js";import"./index-e5UT-b86.js";import"./index-BDiZfkRk.js";import"./EyeOutlined-B_AlcTiW.js";import"./SearchOutlined-B5Mz73CR.js";import"./index-UcVbF9Sa.js";import"./Pagination-CLOqyNDL.js";import"./useBreakpoint-BjGsrcr-.js";import"./index-1ZS3TSSK.js";import"./row-B6yqzg6v.js";const F=d.lazy(()=>P(()=>import("./ImageLazyPreview-ERVEJ2ba.js"),__vite__mapDeps([0,1,2,3,4,5,6]),import.meta.url));function re({target:i,postId:n}){const{ti:r}=w(),{message:f}=_(),[t,v]=I("PostMediaset."+n+".mediaset_token",null),[c,l]=d.useState(!1);d.useEffect(()=>{i!=null&&i.id&&n&&!t&&(l(!0),k(i==null?void 0:i.id,n).then(e=>{console.log(e);const s=g(e,"mediaset_token");if(!s)throw new Error("No mediaset token found");v(s)}).catch(e=>{f.error({content:r({en:"Fail to load post content ",vi:"Lỗi tải dữ liệu bài post "})+e.message})}).finally(()=>{l(!1)}))},[n,i==null?void 0:i.id,t]);const x=async(e=[],s)=>{var u;if(!(i!=null&&i.id)||!t)return;const a=s||((u=e[e.length-1])==null?void 0:u.cursor);return await L(t,a)},y=e=>o.jsxs(A.Item,{style:{position:"relative"},children:[o.jsx(F,{src:e.image,width:200/e.height*e.width,height:200,style:{objectFit:"cover",borderRadius:10},cacheId:"mediaset."+e.id,getPreview:async()=>e.isVideo?(await p(e.id)).source:e.image,renderPreview:e.isVideo?(s,a)=>({destroyOnClose:!0,imageRender:()=>o.jsx(h,{spinning:a,children:o.jsx(T,{src:s,style:{maxWidth:"90vw",maxHeight:"90vh"}})}),toolbarRender:()=>null}):void 0}),e.isVideo&&o.jsx("div",{style:{position:"absolute",top:10,right:10},children:R.IGVideo})]}),j=async e=>{if(e.isVideo){const s=await p(e.id);return{name:e.id+".mp4",url:s.source}}return{name:e.id+".jpg",url:e.image}},m=o.jsx(b,{href:C(n),target:"_blank",icon:o.jsx("i",{className:"fa-solid fa-arrow-up-right-from-square"}),children:r({en:"View post",vi:"Xem bài viết"})});return c?o.jsxs("div",{style:{textAlign:"center"},children:[o.jsx(h,{style:{marginRight:10}}),o.jsx(E.Text,{children:r({en:"Loading post content...",vi:"Đang tải nội dung bài viết..."})})]}):t?o.jsx(V,{collectionName:(i==null?void 0:i.name)+" - Post media - "+n,fetchNext:x,renderItem:y,downloadItem:j,getItemCursor:e=>e.cursor,rowKey:e=>e.id,stop:!(i!=null&&i.id)||!t||c,headerButtons:()=>m}):o.jsxs("div",{style:{textAlign:"center",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center"},children:[o.jsx(M,{type:"error",showIcon:!0,message:r({en:"This post not contain multiple medias",vi:"Bài viết này không chứa nhiều ảnh/video"}),style:{marginRight:10}}),m]})}export{re as default};
