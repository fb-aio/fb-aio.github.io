import{r as p,av as e,aw as _}from"./index-D36d1vsd.js";import{i as v}from"./icons-D9JSPN_V.js";import{C as b}from"./Collection-DmQW8DcU.js";import{u as j,a4 as h}from"./MyApp-DaxJ5c9U.js";import{f as y,g as x,a as g}from"./index-D_38nYNY.js";import{V as w}from"./VideoWithMuted-CvK3yuR6.js";import{L as k}from"./index-BVLanxNa.js";import{I as N}from"./index-OEwqARQA.js";import{A as I}from"./index-B_S16KUT.js";import"./index-CcTXz4-U.js";import"./file-download-DGa-r-Rt.js";import"./index-zI0wixEg.js";import"./Dropdown-BzvD5WU6.js";import"./PurePanel-SCN8TZxx.js";import"./index-DP5YVNN4.js";import"./index-D5MlJx2s.js";import"./index-DZucm9Ge.js";import"./index-HpbEE0d5.js";import"./EyeOutlined-COFJHj2Z.js";import"./SearchOutlined-B5tt-mma.js";import"./index-C7lJPAmO.js";import"./videos-CEvdxehw.js";import"./index-MOxfKBJR.js";import"./responsiveObserver-DVeZ0axE.js";import"./useBreakpoint-DnXJzZML.js";import"./index-DB3duiy8.js";import"./index-CIN7Wiaj.js";import"./index-Cf7xNnuk.js";import"./index-BjhRI-Yp.js";import"./Pagination-Cy2wrx2H.js";import"./row-CgH5NSa3.js";import"./addEventListener-BwE8st4i.js";async function C(i){var l,s,d,n;const m=await y({fb_api_req_friendly_name:"PolarisStoriesV3ReelPageStandaloneDirectQuery",variables:{reel_ids_arr:[i]},doc_id:"8118053404899604"}),a=JSON.parse(m),r=((d=(s=(l=a==null?void 0:a.data)==null?void 0:l.xdt_api__v1__feed__reels_media)==null?void 0:s.reels_media)==null?void 0:d[0])||{};return console.log(a,r),((n=r==null?void 0:r.items)==null?void 0:n.map(o=>{var c,u,f;const t=(u=(c=o.story_music_stickers)==null?void 0:c[0])==null?void 0:u.music_asset_info;return{id:o.id,pk:o.pk,image:x((f=o.image_versions2)==null?void 0:f.candidates),video:x(o.video_versions),video_duration:o.video_duration||0,taken_at:(o.taken_at||0)*1e3,expiring_at:(o.expiring_at||0)*1e3,music:t?(t==null?void 0:t.title)+" - "+(t==null?void 0:t.display_artist):"",latest_reel_media:(r.latest_reel_media||0)*1e3,seen_at:(r.seen||0)*1e3,raw:o}}))||[]}function ae({target:i}){const{ti:m}=j(),a=p.useCallback(async s=>i!=null&&i.id?await C(i.id):void 0,[i]),r=p.useCallback(s=>e.jsxs(k.Item,{className:"show-on-hover-trigger",children:[e.jsx(N,{src:s.image,width:200,height:330,style:{objectFit:"cover",borderRadius:10},preview:s.video?{destroyOnClose:!0,imageRender:()=>e.jsx(w,{src:s.video,style:{maxWidth:"90vw",maxHeight:"90vh"}}),toolbarRender:()=>null}:!0}),s.video&&e.jsx("div",{style:{position:"absolute",top:10,right:10,pointerEvents:"none"},children:v.IGVideo}),e.jsx("div",{style:{position:"absolute",top:0,left:0,width:"100%",height:"100%",background:"linear-gradient(0deg, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0) 50%)",pointerEvents:"none"},children:e.jsxs("div",{style:{position:"absolute",bottom:15,left:15},children:[s.music&&e.jsxs(e.Fragment,{children:[e.jsx("i",{className:"fa-solid fa-music"})," ",s.music,e.jsx("br",{})]}),s.seen_at?e.jsxs(e.Fragment,{children:[e.jsx("i",{className:"fa-solid fa-eye"})," ",h(s.seen_at)]}):e.jsxs(e.Fragment,{children:[e.jsx("i",{className:"fa-solid fa-eye-slash"})," ",m({en:"Not seen",vi:"Chưa xem"})]}),e.jsx("br",{}),e.jsx("i",{className:"fa-solid fa-clock"})," ",h(s.taken_at)]})}),e.jsx(_,{type:"default",icon:e.jsx("i",{className:"fa-solid fa-up-right-from-square"}),style:{position:"absolute",bottom:10,right:10},className:"show-on-hover-item",target:"_blank",href:g("stories/"+(i==null?void 0:i.igName)+"/"+s.pk)})]}),[]),l=p.useCallback((s,d)=>{const n=!!s.video;return{url:n?s.video:s.image,name:s.id+(n?".mp4":".jpg")}},[]);return e.jsx(b,{collectionName:(i==null?void 0:i.igName)+" - IG Stories",fetchNext:a,renderItem:r,downloadItem:l,rowKey:s=>s.id,once:!0,header:()=>e.jsx(I,{showIcon:!0,type:"info",message:(i==null?void 0:i.name)+m({en:" will not know you see this story",vi:" sẽ không biết bạn đã xem tin"})})})}export{ae as default};