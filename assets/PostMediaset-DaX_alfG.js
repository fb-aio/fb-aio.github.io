const __vite__fileDeps=["./ImageLazyPreview-DCCkbig0.js","./index-Ch3SQZYM.js","./index-DjlRUb8J.css","./MyApp-BxasvTfg.js","./index-BH1GPZzs.js","./addEventListener-CXWrbDGZ.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{r as p,an as e,ao as y,ar as j}from"./index-Ch3SQZYM.js";import{C as b}from"./Collection-CU7cWgfb.js";import{b as c}from"./index-D0ppyJZi.js";import{u as P,a as g,b as l,A as _,g as k,S as L,Z as V}from"./MyApp-BxasvTfg.js";import{b as I,c as C}from"./feeds-DTi1dSMb.js";import{i as E}from"./icons-_l9XQLpG.js";import{A as N}from"./index-DZk8ZEaa.js";import{L as F}from"./index-CM6-1-7e.js";import"./index-B6CxwFCm.js";import"./file-download-oYh-7Uq5.js";import"./sweetalert2.all-BrOwh365.js";import"./index-DwZMrCFQ.js";import"./Dropdown-CqkVLm1l.js";import"./PurePanel-DJziKDnP.js";import"./index-CE1W9nXU.js";import"./index-CUH9Hbhm.js";import"./index-CYv9_VMY.js";import"./index-CXMf6RbK.js";import"./addEventListener-CXWrbDGZ.js";import"./index-CKYerQ9t.js";import"./index-BeLVDyfe.js";import"./index-BQnDyKr_.js";import"./responsiveObserver-BK_a0ip3.js";import"./useBreakpoint-BXjY32dr.js";import"./index-BfMZK5uK.js";import"./index-C_9rVwkb.js";import"./index-BupQCRXI.js";import"./index-BH1GPZzs.js";import"./Pagination-B6unX1vy.js";import"./row-BlQN8LEk.js";const M=p.lazy(()=>j(()=>import("./ImageLazyPreview-DCCkbig0.js"),__vite__mapDeps([0,1,2,3,4,5]),import.meta.url));function po({target:i,postId:r}){const{ti:n}=P(),{message:u}=g(),[t,f]=l("PostMediaset."+r+".mediaset_token",null),[h,d]=l("PostMediaset."+r+".loading",!1);p.useEffect(()=>{i!=null&&i.id&&r&&(d(!0),I(i==null?void 0:i.id,r).then(o=>{console.log(o);const s=_(o,"mediaset_token");if(!s)throw new Error("No mediaset token found");f(s)}).catch(o=>{u.error({content:n({en:"Fail to load post content ",vi:"Lỗi tải dữ liệu bài post "})+o.message})}).finally(()=>{d(!1)}))},[r]);const v=async(o=[],s)=>{var m;if(!(i!=null&&i.id)||!t)return;const a=s||((m=o[o.length-1])==null?void 0:m.cursor);return await C(t,a)},x=o=>e.jsxs(F.Item,{style:{position:"relative"},children:[e.jsx(M,{src:o.image,width:200/o.height*o.width,height:200,style:{objectFit:"cover",borderRadius:10},cacheId:"mediaset."+o.id,getPreview:async()=>o.isVideo?(await c(o.id)).source:o.image,renderPreview:o.isVideo?(s,a)=>({destroyOnClose:!0,imageRender:()=>e.jsx(V,{spinning:a,children:e.jsx("video",{autoPlay:!0,controls:!0,loop:!0,src:s,style:{maxWidth:"90vw",maxHeight:"90vh"}})}),toolbarRender:()=>null}):void 0}),o.isVideo&&e.jsx("div",{style:{position:"absolute",top:10,right:10},children:E.IGVideo})]}),w=async o=>{if(o.isVideo){const s=await c(o.id);return{name:o.id+".mp4",url:s.source}}return{name:o.id+".jpg",url:o.image}};return e.jsx(b,{collectionName:(i==null?void 0:i.name)+" - Post media - "+r,fetchNext:v,renderItem:x,downloadItem:w,getItemCursor:o=>o.cursor,rowKey:o=>o.id,stop:!(i!=null&&i.id)||!t,headerButtons:()=>e.jsx(y,{href:k(r),target:"_blank",icon:e.jsx("i",{className:"fa-solid fa-arrow-up-right-from-square"}),children:n({en:"View post",vi:"Xem bài viết"})}),header:()=>h?e.jsxs(L,{children:[e.jsx("i",{className:"fa-solid fa-spinner fa-spin"})," ",n({en:"Loading post content...",vi:"Đang tải nội dung bài viết..."})]}):t?null:e.jsx(N,{type:"error",showIcon:!0,message:n({en:"This post not contain multiple medias",vi:"Bài viết này không chứa nhiều ảnh/video"})})})}export{po as default};