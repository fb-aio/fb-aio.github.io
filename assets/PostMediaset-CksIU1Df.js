const __vite__fileDeps=["./ImageLazyPreview-DZigH6b-.js","./index-D36d1vsd.js","./index-DfqnkV-X.css","./MyApp-DaxJ5c9U.js","./index-OEwqARQA.js","./EyeOutlined-COFJHj2Z.js","./addEventListener-BwE8st4i.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{r as u,av as o,aw as j,aA as y}from"./index-D36d1vsd.js";import{C as b}from"./Collection-DmQW8DcU.js";import{g as c}from"./videos-CEvdxehw.js";import{u as g,c as P,d as l,aq as V,E as _,g as k,b as L,ar as E,aa as I}from"./MyApp-DaxJ5c9U.js";import{i as C}from"./icons-D9JSPN_V.js";import{V as M}from"./VideoWithMuted-CvK3yuR6.js";import{A as N}from"./index-B_S16KUT.js";import{L as F}from"./index-BVLanxNa.js";import"./index-CcTXz4-U.js";import"./file-download-DGa-r-Rt.js";import"./index-zI0wixEg.js";import"./Dropdown-BzvD5WU6.js";import"./PurePanel-SCN8TZxx.js";import"./index-DP5YVNN4.js";import"./index-D5MlJx2s.js";import"./index-DZucm9Ge.js";import"./index-HpbEE0d5.js";import"./EyeOutlined-COFJHj2Z.js";import"./SearchOutlined-B5tt-mma.js";import"./index-C7lJPAmO.js";import"./Pagination-Cy2wrx2H.js";import"./useBreakpoint-DnXJzZML.js";import"./responsiveObserver-DVeZ0axE.js";import"./index-Cf7xNnuk.js";import"./row-CgH5NSa3.js";const R=u.lazy(()=>y(()=>import("./ImageLazyPreview-DZigH6b-.js"),__vite__mapDeps([0,1,2,3,4,5,6]),import.meta.url));function ai({target:e,postId:n}){const{ti:r}=g(),{message:p}=P(),[t,h]=l("PostMediaset."+n+".mediaset_token",null),[f,d]=l("PostMediaset."+n+".loading",!1);u.useEffect(()=>{e!=null&&e.id&&n&&(d(!0),V(e==null?void 0:e.id,n).then(i=>{console.log(i);const s=_(i,"mediaset_token");if(!s)throw new Error("No mediaset token found");h(s)}).catch(i=>{p.error({content:r({en:"Fail to load post content ",vi:"Lỗi tải dữ liệu bài post "})+i.message})}).finally(()=>{d(!1)}))},[n]);const v=async(i=[],s)=>{var m;if(!(e!=null&&e.id)||!t)return;const a=s||((m=i[i.length-1])==null?void 0:m.cursor);return await E(t,a)},x=i=>o.jsxs(F.Item,{style:{position:"relative"},children:[o.jsx(R,{src:i.image,width:200/i.height*i.width,height:200,style:{objectFit:"cover",borderRadius:10},cacheId:"mediaset."+i.id,getPreview:async()=>i.isVideo?(await c(i.id)).source:i.image,renderPreview:i.isVideo?(s,a)=>({destroyOnClose:!0,imageRender:()=>o.jsx(I,{spinning:a,children:o.jsx(M,{src:s,style:{maxWidth:"90vw",maxHeight:"90vh"}})}),toolbarRender:()=>null}):void 0}),i.isVideo&&o.jsx("div",{style:{position:"absolute",top:10,right:10},children:C.IGVideo})]}),w=async i=>{if(i.isVideo){const s=await c(i.id);return{name:i.id+".mp4",url:s.source}}return{name:i.id+".jpg",url:i.image}};return o.jsx(b,{collectionName:(e==null?void 0:e.name)+" - Post media - "+n,fetchNext:v,renderItem:x,downloadItem:w,getItemCursor:i=>i.cursor,rowKey:i=>i.id,stop:!(e!=null&&e.id)||!t,headerButtons:()=>o.jsx(j,{href:k(n),target:"_blank",icon:o.jsx("i",{className:"fa-solid fa-arrow-up-right-from-square"}),children:r({en:"View post",vi:"Xem bài viết"})}),header:()=>f?o.jsxs(L,{children:[o.jsx("i",{className:"fa-solid fa-spinner fa-spin"})," ",r({en:"Loading post content...",vi:"Đang tải nội dung bài viết..."})]}):t?null:o.jsx(N,{type:"error",showIcon:!0,message:r({en:"This post not contain multiple medias",vi:"Bài viết này không chứa nhiều ảnh/video"})})})}export{ai as default};