import{r as _,an as a}from"./index-C7oZ0De7.js";import{y,S as b,_ as j}from"./MyApp-Aa6kWLsF.js";import{i as f}from"./icons-DVxFxxiI.js";import{C as w}from"./Collection-DhYYxJHF.js";import{f as v,c as m}from"./index-C4S-SGlk.js";import{L as x}from"./index-AYrPsM2T.js";import{I}from"./index-BziczgU1.js";import"./index-DIf7Muo3.js";import"./file-download-pfyZjjAp.js";import"./sweetalert2.all-bP9ilkuE.js";import"./index-BCMlwunw.js";import"./Dropdown-DcXeyYZ4.js";import"./PurePanel-ArKtrdMx.js";import"./index-OwkcnbRN.js";import"./index-qvuPktQI.js";import"./index-Bkxf5JBu.js";import"./index-BVI1_y8Q.js";import"./addEventListener-CJkFn_36.js";import"./index-DNofGeVi.js";import"./index-BeBPDAZL.js";import"./feeds-0n8wVSIa.js";import"./index-BsXYGY4A.js";import"./responsiveObserver-B2lf4GPU.js";import"./useBreakpoint-oAyVRKIn.js";import"./index-D4wwaFc8.js";import"./index-nZb62mrZ.js";import"./index-CemcKtqT.js";import"./index-D4oU12Go.js";import"./Pagination-BAHAxdKo.js";import"./row-BF_3i8xH.js";async function P(i="",u=""){let l;if(u){const t=await v({fb_api_req_friendly_name:"PolarisProfilePostsTabContentDirectQuery_connection",variables:{after:u,before:null,data:{count:12,include_relationship_info:!0,latest_besties_reel_media:!0,latest_reel_media:!0},first:12,last:null,username:i,__relay_internal__pv__PolarisFeedShareMenurelayprovider:!0},doc_id:"7935114066569227"});l=JSON.parse(t),console.log("cursor fetch",l)}else{const t=await v({fb_api_req_friendly_name:"PolarisProfilePostsDirectQuery",variables:{data:{count:12,include_relationship_info:!0,latest_besties_reel_media:!0,latest_reel_media:!0},username:i,__relay_internal__pv__PolarisFeedShareMenurelayprovider:!0},doc_id:"7898261790222653"});l=JSON.parse(t),console.log("first fetch",l)}const{edges:p=[],page_info:e={}}=y(l)||{};return p.map(t=>{var s,o,n,c;const r=((s=t==null?void 0:t.node)==null?void 0:s.media)||(t==null?void 0:t.node);return{id:r==null?void 0:r.id,caption:((o=r==null?void 0:r.caption)==null?void 0:o.text)||"",video:m(r==null?void 0:r.video_versions),image:m((n=r==null?void 0:r.image_versions2)==null?void 0:n.candidates),carousel:(c=r==null?void 0:r.carousel_media)==null?void 0:c.map(d=>{var h;return{id:d.id,video:m(d.video_versions),image:m((h=d.image_versions2)==null?void 0:h.candidates)}}),created_at:(r==null?void 0:r.taken_at)*1e3,like_count:r==null?void 0:r.like_count,comment_count:r==null?void 0:r.comment_count,cursor:(t==null?void 0:t.cursor)||(e==null?void 0:e.end_cursor)}}).filter(t=>t.image||t.video)}function er({target:i}){const u=_.useCallback(async(e=[],t)=>{var s;return i!=null&&i.id?await P(i.igName,t||((s=e[e.length-1])==null?void 0:s.cursor)):void 0},[i]),l=_.useCallback(e=>{var t,r,s;return a.jsxs(x.Item,{children:[a.jsx(I,{src:e.image,width:250,height:250,style:{objectFit:"cover"},preview:e.video||(t=e.carousel)!=null&&t.length?{destroyOnClose:!0,imageRender:()=>{var o;return(o=e.carousel)!=null&&o.length?a.jsx(b,{style:{maxWidth:"90vw",maxHeight:"90vh",alignItems:"center",overflowY:"auto",overflowX:"hidden"},children:a.jsx(x,{grid:{gutter:10},style:{width:"100%"},dataSource:e.carousel,renderItem:l,rowKey:n=>n.id})}):a.jsx("video",{autoPlay:!0,controls:!0,loop:!0,src:e.video,style:{maxWidth:"90vw",maxHeight:"90vh"}})},toolbarRender:()=>null}:void 0}),a.jsx("p",{style:{wordWrap:"break-word",maxWidth:250,padding:5},title:e.caption,children:j(e.caption,30)}),a.jsx("div",{style:{position:"absolute",top:10,right:10,pointerEvents:"none"},children:((r=e.carousel)==null?void 0:r.length)>0?a.jsxs(a.Fragment,{children:[a.jsx("span",{children:(s=e.carousel)==null?void 0:s.length}),f.IGCarousel]}):e.video?f.IGVideo:null})]})},[]),p=_.useCallback((e,t)=>{var s;function r(o,n=""){const c=!!o.video;return{url:c?o.video:o.image,name:n+o.id+(c?".mp4":".jpg")}}return((s=e.carousel)==null?void 0:s.length)>0?e.carousel.map((o,n)=>r(o,n+"_")):r(e)},[]);return a.jsx(w,{collectionName:(i==null?void 0:i.igName)+" - IG Posts",fetchNext:u,renderItem:l,downloadItem:p,getItemCursor:e=>e.cursor||"",rowKey:e=>e.id})}export{er as default};
