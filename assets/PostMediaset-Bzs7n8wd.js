const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./ImageLazyPreview-AagO-SW1.js","./index-BxqI5Gd0.js","./index-CI5G5P8X.css","./MyApp-ByiHX0qM.js"])))=>i.map(i=>d[i]);
import{b4 as j,r as a,a_ as b,b6 as o,ba as g,bc as _}from"./index-BxqI5Gd0.js";import P from"./Collection-Ctx3dxYf.js";import{g as p}from"./videos-D-0RTw-E.js";import{u as V,l as k,aI as I,i as L,ai as h,d as R,aJ as C}from"./MyApp-ByiHX0qM.js";import{i as E}from"./icons-B7RXCCZ9.js";import{V as T}from"./VideoWithMuted-CmrbJqUt.js";import{A}from"./index-BOklckFv.js";import{L as F}from"./index-Dv4lTb3_.js";import"./index-CMDmURDF.js";import"./file-download-BWXnBcdo.js";import"./react-hotkeys-hook.esm-zPTCjevm.js";import"./index-CuvpyvNf.js";import"./index-unSpNECF.js";import"./index-Czy2gXJr.js";import"./index-Cab20LlE.js";import"./PurePanel-DnuVi_Xb.js";import"./move-12jBH-U3.js";import"./index-DdkLWVDV.js";import"./SearchOutlined-FPpClRsQ.js";import"./index-D3yKYGab.js";import"./Pagination-ClSPRRQ-.js";import"./useBreakpoint-B-6M2pGc.js";import"./useForceUpdate-32QtfefY.js";import"./responsiveObserver-DCjkyyMm.js";import"./index-QUk30DMk.js";import"./List-DIfsWYq5.js";import"./DownOutlined-CHXCxF_j.js";import"./row-BKHe0tix.js";import"./col-0SdR7xwF.js";const M=a.lazy(()=>_(()=>import("./ImageLazyPreview-AagO-SW1.js"),__vite__mapDeps([0,1,2,3]),import.meta.url));function ui({target:e,postId:n}){const{ti:r}=j(),{message:f}=V(),[t,x]=k("PostMediaset."+n+".mediaset_token",null),[m,c]=a.useState(!1);a.useEffect(()=>{e!=null&&e.id&&n&&!t&&(c(!0),I(e==null?void 0:e.id,n).then(i=>{console.log(e,n,i);const s=b(i,"mediaset_token");if(!s)throw new Error("No mediaset token found");x(s)}).catch(i=>{f.error({content:r({en:"Fail to load post content ",vi:"Lỗi tải dữ liệu bài post "})+i.message})}).finally(()=>{c(!1)}))},[n,e==null?void 0:e.id,t]);const v=async(i=[],s)=>{var u;if(!(e!=null&&e.id)||!t)return;const d=s||((u=i[i.length-1])==null?void 0:u.cursor);return await C(t,d)},y=i=>o.jsxs(F.Item,{style:{position:"relative"},children:[o.jsx(M,{src:i.image,width:200/i.height*i.width,height:200,style:{objectFit:"cover",borderRadius:10},cacheId:"mediaset."+i.id,getPreview:async()=>i.isVideo?(await p(i.id)).source:i.image,renderPreview:i.isVideo?(s,d)=>({destroyOnClose:!0,imageRender:()=>o.jsx(h,{spinning:d,children:o.jsx(T,{src:s,style:{maxWidth:"90vw",maxHeight:"90vh"}})}),toolbarRender:()=>null}):void 0}),i.isVideo&&o.jsx("div",{style:{position:"absolute",top:10,right:10},children:E.IGVideo})]}),w=async i=>{if(i.isVideo){const s=await p(i.id);return{name:i.id+".mp4",url:s.source}}return{name:i.id+".jpg",url:i.image}},l=o.jsx(g,{href:L(n),target:"_blank",icon:o.jsx("i",{className:"fa-solid fa-arrow-up-right-from-square"}),children:r({en:"View post",vi:"Xem bài viết"})});return m?o.jsxs("div",{style:{textAlign:"center"},children:[o.jsx(h,{style:{marginRight:10}}),o.jsx(R.Text,{children:r({en:"Loading post content...",vi:"Đang tải nội dung bài viết..."})})]}):t?o.jsx(P,{collectionName:(e==null?void 0:e.name)+" - Post media - "+n,fetchNext:v,renderItem:y,downloadItem:w,getItemCursor:i=>i.cursor,rowKey:i=>i.id,stop:!(e!=null&&e.id)||!t||m,headerButtons:()=>l}):o.jsxs("div",{style:{textAlign:"center",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center"},children:[o.jsx(A,{type:"error",showIcon:!0,message:r({en:"This post not contain multiple medias",vi:"Bài viết này không chứa nhiều ảnh/video"}),style:{marginRight:10}}),l]})}export{ui as default};
