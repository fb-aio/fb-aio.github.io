import{r as p,ap as i}from"./index-Cf37-PAr.js";import{i as h}from"./icons-Dg03E_Ae.js";import{C as v}from"./Collection-C-sB6CZa.js";import{u as y,_ as x}from"./MyApp-CUp6bKir.js";import{f as j,c as _}from"./index-DcX4p1GD.js";import{L as b}from"./index-PUlvyjEk.js";import{I as g}from"./index-6Zr23mvO.js";import{A as k}from"./index-DEVJqNhi.js";import"./index-kJ9jXU9D.js";import"./file-download-DhL5WZ-w.js";import"./index-Cy_lPaQv.js";import"./Dropdown-D9nd9TWM.js";import"./PurePanel-vIJdC6lY.js";import"./index-XgUeGRcU.js";import"./index-Ct8qrv3b.js";import"./index-Dm0JghKV.js";import"./TextArea-D9qxwH3P.js";import"./addEventListener-CcBG4TIb.js";import"./index-BYe2jAPE.js";import"./index-asJDHQFV.js";import"./feeds-DQKIcyNS.js";import"./index-BdzZKhzw.js";import"./responsiveObserver-D5wmwyk4.js";import"./useBreakpoint-CZJHe7e-.js";import"./index-DXXTW6g7.js";import"./index-Bjn3hohK.js";import"./index-DL6qwGJR.js";import"./index-5ALbtoZK.js";import"./Pagination-aWJ9xiBQ.js";import"./row-DWvrIkew.js";async function w(s){var m,e,d,l;const a=await j({fb_api_req_friendly_name:"PolarisStoriesV3ReelPageStandaloneDirectQuery",variables:{reel_ids_arr:[s]},doc_id:"8118053404899604"}),n=JSON.parse(a),r=((d=(e=(m=n==null?void 0:n.data)==null?void 0:m.xdt_api__v1__feed__reels_media)==null?void 0:e.reels_media)==null?void 0:d[0])||{};return console.log(n,r),((l=r==null?void 0:r.items)==null?void 0:l.map(o=>{var c,u,f;const t=(u=(c=o.story_music_stickers)==null?void 0:c[0])==null?void 0:u.music_asset_info;return{id:o.id,pk:o.pk,image:_((f=o.image_versions2)==null?void 0:f.candidates),video:_(o.video_versions),video_duration:o.video_duration||0,taken_at:(o.taken_at||0)*1e3,expiring_at:(o.expiring_at||0)*1e3,music:t?(t==null?void 0:t.title)+" - "+(t==null?void 0:t.display_artist):"",latest_reel_media:(r.latest_reel_media||0)*1e3,seen_at:(r.seen||0)*1e3,raw:o}}))||[]}function ie({target:s}){const{ti:a}=y(),n=p.useCallback(async e=>s!=null&&s.id?await w(s.id):void 0,[s]),r=p.useCallback(e=>i.jsxs(b.Item,{children:[i.jsx(g,{src:e.image,width:200,height:330,style:{objectFit:"cover"},preview:e.video?{destroyOnClose:!0,imageRender:()=>i.jsx("video",{autoPlay:!0,controls:!0,loop:!0,src:e.video,style:{maxWidth:"90vw",maxHeight:"90vh"}}),toolbarRender:()=>null}:!0}),e.video&&i.jsx("div",{style:{position:"absolute",top:10,right:10,pointerEvents:"none"},children:h.IGVideo}),i.jsx("div",{style:{position:"absolute",top:0,left:0,width:"100%",height:"100%",background:"linear-gradient(0deg, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0) 50%)",pointerEvents:"none"},children:i.jsxs("div",{style:{position:"absolute",bottom:15,left:15},children:[e.music&&i.jsxs(i.Fragment,{children:[i.jsx("i",{className:"fa-solid fa-music"})," ",e.music,i.jsx("br",{})]}),e.seen_at?i.jsxs(i.Fragment,{children:[i.jsx("i",{className:"fa-solid fa-eye"})," ",x(e.seen_at,a)]}):i.jsxs(i.Fragment,{children:[i.jsx("i",{className:"fa-solid fa-eye-slash"})," ",a({en:"Not seen",vi:"Chưa xem"})]}),i.jsx("br",{}),i.jsx("i",{className:"fa-solid fa-clock"})," ",x(e.taken_at,a)]})})]}),[]),m=p.useCallback((e,d)=>{const l=!!e.video;return{url:l?e.video:e.image,name:e.id+(l?".mp4":".jpg")}},[]);return i.jsx(v,{collectionName:(s==null?void 0:s.igName)+" - IG Stories",fetchNext:n,renderItem:r,downloadItem:m,rowKey:e=>e.id,once:!0,header:()=>i.jsx(k,{showIcon:!0,type:"info",message:(s==null?void 0:s.name)+a({en:" will not know you see this story",vi:" sẽ không biết bạn đã xem tin"})})})}export{ie as default};
