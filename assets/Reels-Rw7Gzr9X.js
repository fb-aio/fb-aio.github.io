const __vite__fileDeps=["./ImageLazyPreview-JOFGSleB.js","./index-Cf37-PAr.js","./index-DjlRUb8J.css","./MyApp-CUp6bKir.js","./index-6Zr23mvO.js","./addEventListener-CcBG4TIb.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{r as m,ap as e,at as V}from"./index-Cf37-PAr.js";import{A as z,u as O,b as o,a0 as W,a1 as U,$,f as A,G as q}from"./MyApp-CUp6bKir.js";import{C as G}from"./Collection-C-sB6CZa.js";import{b as M}from"./index-DcX4p1GD.js";import{L as Q}from"./index-PUlvyjEk.js";import{T as _}from"./index-5ALbtoZK.js";import"./index-kJ9jXU9D.js";import"./file-download-DhL5WZ-w.js";import"./index-Cy_lPaQv.js";import"./Dropdown-D9nd9TWM.js";import"./PurePanel-vIJdC6lY.js";import"./index-XgUeGRcU.js";import"./index-Ct8qrv3b.js";import"./index-Dm0JghKV.js";import"./TextArea-D9qxwH3P.js";import"./addEventListener-CcBG4TIb.js";import"./index-BYe2jAPE.js";import"./index-asJDHQFV.js";import"./feeds-DQKIcyNS.js";import"./index-BdzZKhzw.js";import"./responsiveObserver-D5wmwyk4.js";import"./useBreakpoint-CZJHe7e-.js";import"./index-DXXTW6g7.js";import"./index-Bjn3hohK.js";import"./index-DL6qwGJR.js";import"./index-6Zr23mvO.js";import"./index-DEVJqNhi.js";import"./Pagination-aWJ9xiBQ.js";import"./row-DWvrIkew.js";async function B({id:n="",cursor:a=""}){var s,u,t;const p=await z({fb_api_req_friendly_name:"ProfileCometAppCollectionReelsRendererPaginationQuery",variables:{count:10,cursor:a,feedLocation:"COMET_MEDIA_VIEWER",feedbackSource:65,focusCommentID:null,renderLocation:null,scale:1,useDefaultActor:!0,id:btoa("app_collection:"+n+":168684841768375:260")},doc_id:"7821270511254925"}),c=JSON.parse(((s=p==null?void 0:p.split(`
`))==null?void 0:s[0])||"{}"),{edges:d=[],page_info:i={}}=((t=(u=c==null?void 0:c.data)==null?void 0:u.node)==null?void 0:t.aggregated_fb_shorts)||{};return d.map(r=>{var h,b,f,y,w,j,k,C,v,R,I,S,x,E,P,N,L,T;const l=((b=(h=r==null?void 0:r.profile_reel_node)==null?void 0:h.node)==null?void 0:b.short_form_video_context)||{};return{id:((w=(y=(f=r==null?void 0:r.profile_reel_node)==null?void 0:f.node)==null?void 0:y.video)==null?void 0:w.id)||atob((j=r==null?void 0:r.profile_reel_node)==null?void 0:j.id).split(":").pop(),created_time:(((C=(k=r==null?void 0:r.profile_reel_node)==null?void 0:k.node)==null?void 0:C.creation_time)||0)*1e3,description:(I=(R=(v=r==null?void 0:r.profile_reel_node)==null?void 0:v.node)==null?void 0:R.message)==null?void 0:I.text,viewCount:l==null?void 0:l.play_count_reduced,source:((S=l==null?void 0:l.playback_video)==null?void 0:S.browser_native_hd_url)||((x=l==null?void 0:l.playback_video)==null?void 0:x.browser_native_sd_url),height:(E=l==null?void 0:l.playback_video)==null?void 0:E.height,width:(P=l==null?void 0:l.playback_video)==null?void 0:P.width,thumbnail:(L=(N=l==null?void 0:l.playback_video)==null?void 0:N.image)==null?void 0:L.uri,url:l==null?void 0:l.shareable_url,length:(T=l==null?void 0:l.playback_video)==null?void 0:T.length_in_second,cursor:(r==null?void 0:r.cursor)||i.end_cursor,music:l==null?void 0:l.track_title}})}const F=m.lazy(()=>V(()=>import("./ImageLazyPreview-JOFGSleB.js"),__vite__mapDeps([0,1,2,3,4,5]),import.meta.url));function Ci({target:n}){const{ti:a}=O(),p=m.useCallback(async(i=[],s)=>{var t;return!(n!=null&&n.id)||!(n!=null&&n.type)?void 0:(s=s||((t=i==null?void 0:i[(i==null?void 0:i.length)-1])==null?void 0:t.cursor)||"",await B({id:n.id,cursor:s}))},[n]),c=m.useCallback(async i=>({url:i.source,name:i.id+".mp4"}),[]),d=m.useCallback(i=>e.jsx(Q.Item,{children:e.jsxs(o,{direction:"vertical",children:[e.jsx(F,{src:i.thumbnail,width:200,height:300,style:{objectFit:"cover"},cacheId:"reels."+i.id,getPreview:()=>i.source||M(i.id).then(s=>(console.log(s),s.source)),renderPreview:(s,u)=>({destroyOnClose:!0,imageRender:()=>e.jsx(W,{spinning:u,children:e.jsx("video",{autoPlay:!0,controls:!0,loop:!0,src:s,style:{maxWidth:"90vw",maxHeight:"90vh"}})}),toolbarRender:()=>null})}),e.jsx(_.Paragraph,{style:{maxWidth:"150px",wordWrap:"break-word"},onClick:()=>window.open(i.url),children:U(i.description,100)}),e.jsxs(o,{direction:"vertical",size:1,style:{position:"absolute",top:0,left:0,padding:10,paddingBottom:50,width:"100%",background:"linear-gradient(180deg, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0) 100%)",pointerEvents:"none"},children:[e.jsxs(o,{children:[e.jsx("i",{className:"fa-regular fa-eye"}),i.viewCount]}),e.jsxs(o,{children:[e.jsx("i",{className:"fa-solid fa-film"}),i.length?$(i.length):null]}),e.jsxs(o,{children:[e.jsx("i",{className:"fa-regular fa-clock"}),A(i.created_time,a({en:"en-US",vi:"vi-VN"}))]}),i.music?e.jsxs(o,{align:"start",size:4,children:[e.jsx("i",{className:"fa-solid fa-music"})," ",i.music]}):null]})]})}),[]);return e.jsx(G,{collectionName:(n==null?void 0:n.name)+" - Reels",fetchNext:p,renderItem:d,downloadItem:c,getItemCursor:i=>i.cursor,rowKey:i=>i.id,searchPlaceholder:i=>a({en:`Seach in ${i==null?void 0:i.length} Reels`,vi:`Tìm kiếm trong ${i==null?void 0:i.length} Reels`}),onSearch:(i,s)=>q(i,s.description+s.music+A(s.created_time,a({en:"en-US",vi:"vi-VN"})))})}export{Ci as default};
