const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./ImageLazyPreview-Fm2JFnup.js","./index-BaZqtFI5.js","./index-CI5G5P8X.css","./MyApp-CFEHE7jQ.js"])))=>i.map(i=>d[i]);
import{aU as w,r as d,aO as g,aW as o,a_ as _,b0 as b}from"./index-BaZqtFI5.js";import P from"./Collection-BR2VcgdM.js";import{g as u}from"./videos-Cp5JyWXe.js";import{u as V,k,ai as L,h as I,a6 as h,aj as R}from"./MyApp-CFEHE7jQ.js";import{i as T}from"./icons-CXNgeHoO.js";import{V as C}from"./VideoWithMuted-BsjYUZ6O.js";import{T as E}from"./index-LzkDL7pb.js";import{A}from"./index-BmZSoOa0.js";import{L as F}from"./index-CjM75bXS.js";import"./index-DA6kjBSg.js";import"./file-download-CNd6CKv2.js";import"./react-hotkeys-hook.esm-B3cOGHo6.js";import"./index-DTJ6hYKs.js";import"./index-Bw9cPHU2.js";import"./index-CPSASc_g.js";import"./index-ChJ7lwYU.js";import"./Dropdown-D6tmQur0.js";import"./PurePanel-B0RRPAyY.js";import"./move-DYDp686Y.js";import"./index-CopB4MIN.js";import"./TextArea-DSXnWfgo.js";import"./SearchOutlined-G-1CYJmR.js";import"./index-BP77gBqv.js";import"./Pagination-DxERsOz4.js";import"./useBreakpoint-2yTE31ec.js";import"./useForceUpdate-xHFwf-KQ.js";import"./index-Bi6axaaD.js";import"./List-BJ79Y9jg.js";import"./DownOutlined-CpTvMznZ.js";import"./row-CnXezMQ9.js";import"./col-Cnv9Ni_d.js";const M=d.lazy(()=>b(()=>import("./ImageLazyPreview-Fm2JFnup.js"),__vite__mapDeps([0,1,2,3]),import.meta.url));function hi({target:e,postId:n}){const{ti:r}=w(),{message:f}=V(),[t,x]=k("PostMediaset."+n+".mediaset_token",null),[m,c]=d.useState(!1);d.useEffect(()=>{e!=null&&e.id&&n&&!t&&(c(!0),L(e==null?void 0:e.id,n).then(i=>{console.log(e,n,i);const s=g(i,"mediaset_token");if(!s)throw new Error("No mediaset token found");x(s)}).catch(i=>{f.error({content:r({en:"Fail to load post content ",vi:"Lỗi tải dữ liệu bài post "})+i.message})}).finally(()=>{c(!1)}))},[n,e==null?void 0:e.id,t]);const v=async(i=[],s)=>{var p;if(!(e!=null&&e.id)||!t)return;const a=s||((p=i[i.length-1])==null?void 0:p.cursor);return await R(t,a)},y=i=>o.jsxs(F.Item,{style:{position:"relative"},children:[o.jsx(M,{src:i.image,width:200/i.height*i.width,height:200,style:{objectFit:"cover",borderRadius:10},cacheId:"mediaset."+i.id,getPreview:async()=>i.isVideo?(await u(i.id)).source:i.image,renderPreview:i.isVideo?(s,a)=>({destroyOnClose:!0,imageRender:()=>o.jsx(h,{spinning:a,children:o.jsx(C,{src:s,style:{maxWidth:"90vw",maxHeight:"90vh"}})}),toolbarRender:()=>null}):void 0}),i.isVideo&&o.jsx("div",{style:{position:"absolute",top:10,right:10},children:T.IGVideo})]}),j=async i=>{if(i.isVideo){const s=await u(i.id);return{name:i.id+".mp4",url:s.source}}return{name:i.id+".jpg",url:i.image}},l=o.jsx(_,{href:I(n),target:"_blank",icon:o.jsx("i",{className:"fa-solid fa-arrow-up-right-from-square"}),children:r({en:"View post",vi:"Xem bài viết"})});return m?o.jsxs("div",{style:{textAlign:"center"},children:[o.jsx(h,{style:{marginRight:10}}),o.jsx(E.Text,{children:r({en:"Loading post content...",vi:"Đang tải nội dung bài viết..."})})]}):t?o.jsx(P,{collectionName:(e==null?void 0:e.name)+" - Post media - "+n,fetchNext:v,renderItem:y,downloadItem:j,getItemCursor:i=>i.cursor,rowKey:i=>i.id,stop:!(e!=null&&e.id)||!t||m,headerButtons:()=>l}):o.jsxs("div",{style:{textAlign:"center",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center"},children:[o.jsx(A,{type:"error",showIcon:!0,message:r({en:"This post not contain multiple medias",vi:"Bài viết này không chứa nhiều ảnh/video"}),style:{marginRight:10}}),l]})}export{hi as default};
