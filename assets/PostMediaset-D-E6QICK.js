const __vite__fileDeps=["./ImageLazyPreview-CRWfaFni.js","./index-GWvpzxPN.js","./index-DjlRUb8J.css","./MyApp-VKLikG1Z.js","./index-3wzSAL1R.js","./addEventListener-D1cTN7RW.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{r as p,ap as e,aq as w,at as y}from"./index-GWvpzxPN.js";import{C as b}from"./Collection-CzhYELEx.js";import{b as c}from"./index-xc9W79d7.js";import{u as P,c as g,d as l,aj as _,E as k,g as L,b as V,ak as E,a3 as I}from"./MyApp-VKLikG1Z.js";import{i as C}from"./icons-Bb9-vRVD.js";import{A as N}from"./index-DNwESjil.js";import{L as F}from"./index-D3lQMM2E.js";import"./index-I1FMwneF.js";import"./file-download-Ig3dz59i.js";import"./index-CbRN1qS4.js";import"./Dropdown-ZjDWAmjy.js";import"./PurePanel-FRGWo5w7.js";import"./index-DYrAOIbT.js";import"./index-D5C8Qve7.js";import"./index-DCCWVfj4.js";import"./TextArea-DnjAOU31.js";import"./addEventListener-D1cTN7RW.js";import"./index-BUIJhUjy.js";import"./index-Dz8Qa_3V.js";import"./index-gaz4oEyn.js";import"./responsiveObserver-CRkOPXnt.js";import"./useBreakpoint-BWBrqMDn.js";import"./index-B007Vog4.js";import"./index-DWvhXZTN.js";import"./index-DZWRqLxZ.js";import"./index-3wzSAL1R.js";import"./index-CwRmqJgD.js";import"./Pagination-B-JAAUwF.js";import"./row-CiJXnzQT.js";const M=p.lazy(()=>y(()=>import("./ImageLazyPreview-CRWfaFni.js"),__vite__mapDeps([0,1,2,3,4,5]),import.meta.url));function lo({target:i,postId:n}){const{ti:r}=P(),{message:u}=g(),[t,h]=l("PostMediaset."+n+".mediaset_token",null),[f,d]=l("PostMediaset."+n+".loading",!1);p.useEffect(()=>{i!=null&&i.id&&n&&(d(!0),_(i==null?void 0:i.id,n).then(o=>{console.log(o);const s=k(o,"mediaset_token");if(!s)throw new Error("No mediaset token found");h(s)}).catch(o=>{u.error({content:r({en:"Fail to load post content ",vi:"Lỗi tải dữ liệu bài post "})+o.message})}).finally(()=>{d(!1)}))},[n]);const v=async(o=[],s)=>{var m;if(!(i!=null&&i.id)||!t)return;const a=s||((m=o[o.length-1])==null?void 0:m.cursor);return await E(t,a)},x=o=>e.jsxs(F.Item,{style:{position:"relative"},children:[e.jsx(M,{src:o.image,width:200/o.height*o.width,height:200,style:{objectFit:"cover",borderRadius:10},cacheId:"mediaset."+o.id,getPreview:async()=>o.isVideo?(await c(o.id)).source:o.image,renderPreview:o.isVideo?(s,a)=>({destroyOnClose:!0,imageRender:()=>e.jsx(I,{spinning:a,children:e.jsx("video",{autoPlay:!0,controls:!0,loop:!0,src:s,style:{maxWidth:"90vw",maxHeight:"90vh"}})}),toolbarRender:()=>null}):void 0}),o.isVideo&&e.jsx("div",{style:{position:"absolute",top:10,right:10},children:C.IGVideo})]}),j=async o=>{if(o.isVideo){const s=await c(o.id);return{name:o.id+".mp4",url:s.source}}return{name:o.id+".jpg",url:o.image}};return e.jsx(b,{collectionName:(i==null?void 0:i.name)+" - Post media - "+n,fetchNext:v,renderItem:x,downloadItem:j,getItemCursor:o=>o.cursor,rowKey:o=>o.id,stop:!(i!=null&&i.id)||!t,headerButtons:()=>e.jsx(w,{href:L(n),target:"_blank",icon:e.jsx("i",{className:"fa-solid fa-arrow-up-right-from-square"}),children:r({en:"View post",vi:"Xem bài viết"})}),header:()=>f?e.jsxs(V,{children:[e.jsx("i",{className:"fa-solid fa-spinner fa-spin"})," ",r({en:"Loading post content...",vi:"Đang tải nội dung bài viết..."})]}):t?null:e.jsx(N,{type:"error",showIcon:!0,message:r({en:"This post not contain multiple medias",vi:"Bài viết này không chứa nhiều ảnh/video"})})})}export{lo as default};
