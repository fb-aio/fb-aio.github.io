import{r as m,ao as e}from"./index-BFPfPAaZ.js";import{y as _,$ as c}from"./MyApp-BdpL4ZtE.js";import{C as h}from"./Collection-DRGdzvMz.js";import{f as b,g as f}from"./index-zUYyKdI1.js";import{L as v}from"./index-Cnh5QOU1.js";import{I as x}from"./index-B5v-xJix.js";import"./index-1gnSJny3.js";import"./file-download-CstS00Qr.js";import"./index-Bi9aqrJh.js";import"./Dropdown-BkgZXLuV.js";import"./PurePanel-SxyVbxnL.js";import"./index-B-l378Vl.js";import"./TextArea-CJ5eWy81.js";import"./addEventListener-Bjda6oWl.js";import"./index-BkSv2wHt.js";import"./index-vuHwb1ab.js";import"./index-BSMMBZXq.js";import"./responsiveObserver-B_XlD0op.js";import"./useBreakpoint-CBpI-EAH.js";import"./index-BKRoP6zU.js";import"./index-B_qEaDdp.js";import"./index-BpB4fAOo.js";import"./index-CTfEHlVG.js";import"./Pagination-CiSJ2nYJ.js";import"./row-lZScvilV.js";async function y(r="",a=""){const l=await b({fb_api_req_friendly_name:"PolarisProfileReelsTabContentQuery_connection",variables:{after:a,before:null,data:{include_feed_video:!0,page_size:12,target_user_id:r},first:4,last:null},doc_id:"7845543455542541"}),n=JSON.parse(l);console.log("res ne",n);const{edges:o=[],page_info:s={}}=_(n)||{};return o.map(t=>{var u,p,d;const i=((u=t==null?void 0:t.node)==null?void 0:u.media)||{};return{id:i.id,type:(p=t==null?void 0:t.node)==null?void 0:p.__typename,width:i.original_width,height:i.original_height,image:f((d=i.image_versions2)==null?void 0:d.candidates),video:f(i.video_versions),comment_count:i.comment_count,like_count:i.like_count,play_count:i.play_count,view_count:i.view_count,cursor:(t==null?void 0:t.cursor)||(s==null?void 0:s.end_cursor)}})}function V({target:r}){const a=m.useCallback(async(o=[],s)=>{var i;return r!=null&&r.id?await y(r.id,s||((i=o[o.length-1])==null?void 0:i.cursor)):void 0},[r]),l=m.useCallback(o=>e.jsxs(v.Item,{children:[e.jsx(x,{src:o.image,width:200,height:330,style:{objectFit:"cover"},preview:{destroyOnClose:!0,imageRender:()=>e.jsx("video",{autoPlay:!0,controls:!0,loop:!0,src:o.video,style:{maxWidth:"90vw",maxHeight:"90vh"}}),toolbarRender:()=>null}}),e.jsx("div",{style:{position:"absolute",top:0,left:0,width:"100%",height:"100%",background:"linear-gradient(0deg, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0) 50%)",pointerEvents:"none"},children:e.jsxs("div",{style:{position:"absolute",bottom:15,left:15,fontWeight:"bold",fontSize:"1.1em"},children:[e.jsx("i",{className:"fa-solid fa-play"})," ",c(o.play_count),e.jsx("br",{}),e.jsx("i",{className:"fa-solid fa-heart"})," ",c(o.like_count),e.jsx("br",{}),e.jsx("i",{className:"fa-solid fa-message"})," ",c(o.comment_count)]})})]}),[]),n=m.useCallback((o,s)=>{const t=!!o.video;return{url:t?o.video:o.image,name:o.id+(t?".mp4":".jpg")}},[]);return e.jsx(h,{collectionName:(r==null?void 0:r.igName)+" - IG Reels",fetchNext:a,renderItem:l,downloadItem:n,getItemCursor:o=>o.cursor||"",rowKey:o=>o.id})}export{V as default};