import{aI as _,r as c,aK as e,b0 as h,aM as v}from"./index-DnVdc2zz.js";import{i as b}from"./icons-a0smF3YH.js";import{C as j}from"./Collection-Bw_okTuH.js";import{p as y}from"./MyApp-BxPDuCeg.js";import{f as g,b as x,c as k}from"./core-sUIURhS2.js";import{V as w}from"./VideoWithMuted-DWpO-OuY.js";import{L as I}from"./index-CAYHiZ-v.js";import{I as N}from"./index-D_dLy7kO.js";import{A as C}from"./index-DUSUH08G.js";import"./index-6GxVlyAi.js";import"./file-download-AHZN7f74.js";import"./index-C4RRQZEt.js";import"./Dropdown-Dkm8UCD4.js";import"./PurePanel-BMdKMPL-.js";import"./index-DHeN8cpO.js";import"./index-rEbSzkP-.js";import"./index-C151K2AP.js";import"./EyeOutlined-Cx8w1uhu.js";import"./SearchOutlined-C_P5lbqS.js";import"./index--bZj0aaQ.js";import"./Pagination-C_hhi2MC.js";import"./useBreakpoint-BtDikWLr.js";import"./index-C8k3d9t2.js";import"./row-BHloR7EZ.js";import"./addEventListener-CEBNEg6J.js";async function S(i){var d,s,m,n;const l=await g({fb_api_req_friendly_name:"PolarisStoriesV3ReelPageStandaloneDirectQuery",variables:{reel_ids_arr:[i]},doc_id:"8118053404899604"}),t=y(l),r=((m=(s=(d=t==null?void 0:t.data)==null?void 0:d.xdt_api__v1__feed__reels_media)==null?void 0:s.reels_media)==null?void 0:m[0])||{};return console.log(t,r),((n=r==null?void 0:r.items)==null?void 0:n.map(o=>{var p,u,f;const a=(u=(p=o.story_music_stickers)==null?void 0:p[0])==null?void 0:u.music_asset_info;return{id:o.id,pk:o.pk,image:x((f=o.image_versions2)==null?void 0:f.candidates),video:x(o.video_versions),video_duration:o.video_duration||0,taken_at:(o.taken_at||0)*1e3,expiring_at:(o.expiring_at||0)*1e3,music:a?(a==null?void 0:a.title)+" - "+(a==null?void 0:a.display_artist):"",latest_reel_media:(r.latest_reel_media||0)*1e3,seen_at:(r.seen||0)*1e3,raw:o}}))||[]}function ee({target:i}){const{ti:l}=_(),t=c.useCallback(async s=>i!=null&&i.id?await S(i.id):void 0,[i]),r=c.useCallback(s=>e.jsxs(I.Item,{className:"show-on-hover-trigger",children:[e.jsx(N,{src:s.image,width:200,height:330,style:{objectFit:"cover",borderRadius:10},preview:s.video?{destroyOnClose:!0,imageRender:()=>e.jsx(w,{src:s.video,style:{maxWidth:"90vw",maxHeight:"90vh"}}),toolbarRender:()=>null}:!0}),s.video&&e.jsx("div",{style:{position:"absolute",top:10,right:10,pointerEvents:"none"},children:b.IGVideo}),e.jsx("div",{style:{position:"absolute",top:0,left:0,width:"100%",height:"100%",background:"linear-gradient(0deg, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0) 50%)",pointerEvents:"none"},children:e.jsxs("div",{style:{position:"absolute",bottom:15,left:15},children:[s.music&&e.jsxs(e.Fragment,{children:[e.jsx("i",{className:"fa-solid fa-music"})," ",s.music,e.jsx("br",{})]}),s.seen_at?e.jsxs(e.Fragment,{children:[e.jsx("i",{className:"fa-solid fa-eye"})," ",h(s.seen_at)]}):e.jsxs(e.Fragment,{children:[e.jsx("i",{className:"fa-solid fa-eye-slash"})," ",l({en:"Not seen",vi:"Chưa xem"})]}),e.jsx("br",{}),e.jsx("i",{className:"fa-solid fa-clock"})," ",h(s.taken_at)]})}),e.jsx(v,{type:"default",icon:e.jsx("i",{className:"fa-solid fa-up-right-from-square"}),style:{position:"absolute",bottom:10,right:10},className:"show-on-hover-item",target:"_blank",href:k("stories/"+(i==null?void 0:i.username)+"/"+s.pk)})]}),[]),d=c.useCallback((s,m)=>{const n=!!s.video;return{url:n?s.video:s.image,name:s.id+(n?".mp4":".jpg")}},[]);return e.jsx(j,{collectionName:(i==null?void 0:i.username)+" - IG Stories",fetchNext:t,renderItem:r,downloadItem:d,rowKey:s=>s.id,once:!0,header:()=>e.jsx(C,{showIcon:!0,type:"info",message:(i==null?void 0:i.name)+l({en:" will not know you see this story",vi:" sẽ không biết bạn đã xem tin"})})})}export{ee as default};