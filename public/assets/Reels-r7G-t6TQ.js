const __vite__fileDeps=["./VideoViewer-BBLAQ37u.js","./index-DKcwpaNn.js","./index-DfqnkV-X.css","./VideoWithMuted-CHYHsZkU.js","./MyApp-CDv-rFzA.js","./ImageLazyPreview-De6P862A.js","./index-Dg7Z2Izz.js","./EyeOutlined-DBKuVwCK.js","./addEventListener-Bihk99B1.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{r as u,av as o,aw as N,aA as E}from"./index-DKcwpaNn.js";import{C as S,D as P,u as V,b as a,ae as L,h as T,af as A,ad as z,f as k,K as g}from"./MyApp-CDv-rFzA.js";import{C as O}from"./Collection-DwdE2bZI.js";import{e as U,g as W}from"./videos-CEQyyPr8.js";import{L as q}from"./index-DLYsuYdS.js";import{T as F}from"./index-CWhtpity.js";import"./index-b6__-RGH.js";import"./file-download-DdCGTwPA.js";import"./index-DHgoLQnq.js";import"./Dropdown-C-7JdpRY.js";import"./PurePanel-Dm2KaroR.js";import"./index-R4jL5rp5.js";import"./index-DyBnpzdS.js";import"./EyeOutlined-DBKuVwCK.js";import"./SearchOutlined-CyhZwKQE.js";import"./index-jXORKE-J.js";import"./Pagination-cNqsTGGh.js";import"./useBreakpoint-SG1Oq1Ac.js";import"./responsiveObserver-C2jXDk8e.js";import"./index-BeW64aJ1.js";import"./row-DQZWBVdA.js";async function B({id:l="",cursor:c=""}){var r,p,m;const t=await S({fb_api_req_friendly_name:"ProfileCometAppCollectionReelsRendererPaginationQuery",variables:{count:10,cursor:c,feedLocation:"COMET_MEDIA_VIEWER",feedbackSource:65,focusCommentID:null,renderLocation:null,scale:1,useDefaultActor:!0,id:btoa("app_collection:"+l+":168684841768375:260")},doc_id:"7821270511254925"}),n=P(((r=t==null?void 0:t.split(`
`))==null?void 0:r[0])||"{}");console.log(n);const{edges:d=[],page_info:i={}}=((m=(p=n==null?void 0:n.data)==null?void 0:p.node)==null?void 0:m.aggregated_fb_shorts)||{};return d.map(s=>{var f,h,b,y,x,_,j,w,v,C,I,R;const e=((h=(f=s==null?void 0:s.profile_reel_node)==null?void 0:f.node)==null?void 0:h.short_form_video_context)||{};return{...U(e==null?void 0:e.playback_video),id:((x=(y=(b=s==null?void 0:s.profile_reel_node)==null?void 0:b.node)==null?void 0:y.video)==null?void 0:x.id)||atob((_=s==null?void 0:s.profile_reel_node)==null?void 0:_.id).split(":").pop(),description:(v=(w=(j=s==null?void 0:s.profile_reel_node)==null?void 0:j.node)==null?void 0:w.message)==null?void 0:v.text,viewCount:e==null?void 0:e.play_count_reduced,created_time:(((I=(C=s==null?void 0:s.profile_reel_node)==null?void 0:C.node)==null?void 0:I.creation_time)||0)*1e3+"",url:e==null?void 0:e.shareable_url,cursor:(s==null?void 0:s.cursor)||i.end_cursor,music:e==null?void 0:e.track_title,length:(R=e==null?void 0:e.playback_video)==null?void 0:R.length_in_second}})}const K=u.lazy(()=>E(()=>import("./VideoViewer-BBLAQ37u.js"),__vite__mapDeps([0,1,2,3,4]),import.meta.url)),M=u.lazy(()=>E(()=>import("./ImageLazyPreview-De6P862A.js"),__vite__mapDeps([5,1,2,4,6,7,8]),import.meta.url));function ui({target:l}){const{ti:c}=V(),t=u.useCallback(async(i=[],r)=>{var m;return!(l!=null&&l.id)||!(l!=null&&l.type)?void 0:(r=r||((m=i==null?void 0:i[(i==null?void 0:i.length)-1])==null?void 0:m.cursor)||"",await B({id:l.id,cursor:r}))},[l]),n=u.useCallback(async i=>({url:i.source,name:i.id+".mp4"}),[]),d=u.useCallback(i=>o.jsx(q.Item,{children:o.jsxs(a,{direction:"vertical",children:[o.jsxs("div",{className:"show-on-hover-trigger",children:[o.jsx(M,{src:i.thumbnail,width:200,height:300,style:{objectFit:"cover",borderRadius:10},cacheId:"reels."+i.id,getPreview:()=>i.source||W(i.id).then(r=>(console.log(r),r.source)),renderPreview:(r,p)=>({destroyOnClose:!0,imageRender:()=>o.jsx(L,{spinning:p,children:o.jsx(K,{info:i,style:{maxWidth:"90vw",maxHeight:"90vh"}})}),toolbarRender:()=>null})}),o.jsx(N,{type:"default",icon:o.jsx("i",{className:"fa-solid fa-up-right-from-square"}),style:{position:"absolute",bottom:10,right:10},className:"show-on-hover-item",target:"_blank",href:T(i.id)})]}),o.jsx(F.Paragraph,{style:{maxWidth:"150px",wordWrap:"break-word"},onClick:()=>window.open(i.url),children:A(i.description,100)}),o.jsxs(a,{direction:"vertical",size:1,style:{position:"absolute",top:0,left:0,padding:10,paddingBottom:50,width:"100%",background:"linear-gradient(180deg, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0) 100%)",pointerEvents:"none"},children:[o.jsxs(a,{children:[o.jsx("i",{className:"fa-regular fa-eye"}),i.viewCount]}),o.jsxs(a,{children:[o.jsx("i",{className:"fa-solid fa-film"}),i.length?z(i.length):null]}),o.jsxs(a,{children:[o.jsx("i",{className:"fa-regular fa-clock"}),k(i.created_time,c({en:"en-US",vi:"vi-VN"}))]}),i.music?o.jsxs(a,{align:"start",size:4,children:[o.jsx("i",{className:"fa-solid fa-music"})," ",i.music]}):null]})]})}),[]);return o.jsx(O,{collectionName:(l==null?void 0:l.name)+" - Reels",fetchNext:t,renderItem:d,downloadItem:n,getItemCursor:i=>i.cursor,rowKey:i=>i.id,searchPlaceholder:i=>c({en:`Seach in ${i==null?void 0:i.length} Reels`,vi:`Tìm kiếm trong ${i==null?void 0:i.length} Reels`}),onSearch:(i,r)=>g(i,r.description+r.music+k(r.created_time,c({en:"en-US",vi:"vi-VN"})))})}export{ui as default};