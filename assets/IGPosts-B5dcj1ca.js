import{r as _,av as a}from"./index-Dwpma3vX.js";import{C as y,b,a8 as j}from"./MyApp-CaAHD_sl.js";import{i as f}from"./icons-CAOvPnA2.js";import{C as w}from"./Collection-Duhytgd6.js";import{f as v,c as m}from"./index-BgrGtRJv.js";import{L as x}from"./index-B1-l0GI_.js";import{I}from"./index-BAmkjU4S.js";import"./index-qYag26Fr.js";import"./file-download-BEwLUfs_.js";import"./index-CjRY1w1B.js";import"./Dropdown-Cy_5j5G7.js";import"./PurePanel-lbpTE9yy.js";import"./index-QNqn8XPT.js";import"./index-C3vKAcCx.js";import"./index-D-uzMAVF.js";import"./index-CnpxtjSf.js";import"./addEventListener-CAhr9VRf.js";import"./index-yv7_mBYm.js";import"./index-O5-mSQhR.js";import"./index-BnLGuCJ5.js";import"./useBreakpoint-B5KK-xwT.js";import"./index-D6d6ZTml.js";import"./index-3FZft9mY.js";import"./index-CKqW8jTq.js";import"./index-CHPm_ATI.js";import"./Pagination-CDlhp95V.js";import"./row-BHiT-vw1.js";async function P(i="",u=""){let l;if(u){const t=await v({fb_api_req_friendly_name:"PolarisProfilePostsTabContentDirectQuery_connection",variables:{after:u,before:null,data:{count:12,include_relationship_info:!0,latest_besties_reel_media:!0,latest_reel_media:!0},first:12,last:null,username:i,__relay_internal__pv__PolarisFeedShareMenurelayprovider:!0},doc_id:"7935114066569227"});l=JSON.parse(t),console.log("cursor fetch",l)}else{const t=await v({fb_api_req_friendly_name:"PolarisProfilePostsDirectQuery",variables:{data:{count:12,include_relationship_info:!0,latest_besties_reel_media:!0,latest_reel_media:!0},username:i,__relay_internal__pv__PolarisFeedShareMenurelayprovider:!0},doc_id:"7898261790222653"});l=JSON.parse(t),console.log("first fetch",l)}const{edges:p=[],page_info:e={}}=y(l);return p.map(t=>{var s,o,n,c;const r=((s=t==null?void 0:t.node)==null?void 0:s.media)||(t==null?void 0:t.node);return{id:r==null?void 0:r.id,caption:((o=r==null?void 0:r.caption)==null?void 0:o.text)||"",video:m(r==null?void 0:r.video_versions),image:m((n=r==null?void 0:r.image_versions2)==null?void 0:n.candidates),carousel:(c=r==null?void 0:r.carousel_media)==null?void 0:c.map(d=>{var h;return{id:d.id,video:m(d.video_versions),image:m((h=d.image_versions2)==null?void 0:h.candidates)}}),created_at:(r==null?void 0:r.taken_at)*1e3,like_count:r==null?void 0:r.like_count,comment_count:r==null?void 0:r.comment_count,cursor:(t==null?void 0:t.cursor)||(e==null?void 0:e.end_cursor)}}).filter(t=>t.image||t.video)}function Z({target:i}){const u=_.useCallback(async(e=[],t)=>{var s;return i!=null&&i.id?await P(i.igName,t||((s=e[e.length-1])==null?void 0:s.cursor)):void 0},[i]),l=_.useCallback(e=>{var t,r,s;return a.jsxs(x.Item,{children:[a.jsx(I,{src:e.image,width:250,height:250,style:{objectFit:"cover"},preview:e.video||(t=e.carousel)!=null&&t.length?{destroyOnClose:!0,imageRender:()=>{var o;return(o=e.carousel)!=null&&o.length?a.jsx(b,{style:{maxWidth:"90vw",maxHeight:"90vh",alignItems:"center",overflowY:"auto",overflowX:"hidden"},children:a.jsx(x,{grid:{gutter:10},style:{width:"100%"},dataSource:e.carousel,renderItem:l,rowKey:n=>n.id})}):a.jsx("video",{autoPlay:!0,controls:!0,loop:!0,src:e.video,style:{maxWidth:"90vw",maxHeight:"90vh"}})},toolbarRender:()=>null}:void 0}),a.jsx("p",{style:{wordWrap:"break-word",maxWidth:250,padding:5},title:e.caption,children:j(e.caption,30)}),a.jsx("div",{style:{position:"absolute",top:10,right:10,pointerEvents:"none"},children:((r=e.carousel)==null?void 0:r.length)>0?a.jsxs(a.Fragment,{children:[a.jsx("span",{children:(s=e.carousel)==null?void 0:s.length}),f.IGCarousel]}):e.video?f.IGVideo:null})]})},[]),p=_.useCallback((e,t)=>{var s;function r(o,n=""){const c=!!o.video;return{url:c?o.video:o.image,name:n+o.id+(c?".mp4":".jpg")}}return((s=e.carousel)==null?void 0:s.length)>0?e.carousel.map((o,n)=>r(o,n+"_")):r(e)},[]);return a.jsx(w,{collectionName:(i==null?void 0:i.igName)+" - IG Posts",fetchNext:u,renderItem:l,downloadItem:p,getItemCursor:e=>e.cursor||"",rowKey:e=>e.id})}export{Z as default};
