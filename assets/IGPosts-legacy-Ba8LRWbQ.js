System.register(["./index-legacy-D9CHblSf.js","./icons-legacy-Db56gA8m.js","./Collection-legacy-MDL4QuIr.js","./MyApp-legacy-DY-xUJj-.js","./core-legacy-CREfmp7M.js","./VideoWithMuted-legacy-BihzDGsD.js","./index-legacy-jbemEp9c.js","./index-legacy-Cna26dKT.js","./index-legacy-DjAO6vY1.js","./file-download-legacy-Boo9okUZ.js","./react-hotkeys-hook.esm-legacy-BWX2o2fJ.js","./index-legacy-BYELfbCS.js","./index-legacy-BOgwQPlt.js","./index-legacy-D8B05wI-.js","./index-legacy-BO0Cec9P.js","./PurePanel-legacy-yUGBTRpi.js","./move-legacy-Cg157uum.js","./index-legacy-QzJ-xoWz.js","./Pagination-legacy-DBVIc6_9.js","./useBreakpoint-legacy-Dqj0ItEB.js","./useForceUpdate-legacy-BXaC4oRP.js","./responsiveObserver-legacy-dUfw9XRe.js","./index-legacy-dITG2mLt.js","./List-legacy-Co6bbk7c.js","./DownOutlined-legacy-Dyo3kIPo.js","./row-legacy-g15ra8ff.js","./col-legacy-BgwNVbHz.js"],(function(e,l){"use strict";var a,s,i,n,t,o,r,c,d,u,g,_,m,y,h;return{setters:[e=>{a=e.b0,s=e.r,i=e.b8,n=e.am,t=e.bs},e=>{o=e.i},e=>{r=e.default},e=>{c=e.r,d=e.k},e=>{u=e.f,g=e.b,_=e.c},e=>{m=e.V},e=>{y=e.L},e=>{h=e.C},null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],execute:function(){e("default",(function({target:e}){const l=s.useCallback((async(l=[],s)=>{if(e?.id)return await async function(e="",l=""){let s;if(l){const a=await u({fb_api_req_friendly_name:"PolarisProfilePostsTabContentDirectQuery_connection",variables:{after:l,before:null,data:{count:12,include_relationship_info:!0,latest_besties_reel_media:!0,latest_reel_media:!0},first:12,last:null,username:e,__relay_internal__pv__PolarisFeedShareMenurelayprovider:!0},doc_id:"7935114066569227"});s=c(a),console.log("cursor fetch",s)}else{const l=await u({fb_api_req_friendly_name:"PolarisProfilePostsDirectQuery",variables:{data:{count:12,include_relationship_info:!0,latest_besties_reel_media:!0,latest_reel_media:!0},username:e,__relay_internal__pv__PolarisFeedShareMenurelayprovider:!0},doc_id:"7898261790222653"});s=c(l),console.log("first fetch",s)}const{edges:i=[],page_info:n={}}=a(s);return console.log(s),i.map((e=>{const l=e?.node?.media||e?.node;return{id:l?.id,post_id:l?.code,caption:l?.caption?.text||"",video:g(l?.video_versions),image:g(l?.image_versions2?.candidates),carousel:l?.carousel_media?.map(((e,a)=>({id:e.id,post_id:l?.code,index:a+1,video:g(e.video_versions),image:g(e.image_versions2?.candidates)}))),created_at:1e3*l?.taken_at,like_count:l?.like_count,comment_count:l?.comment_count,cursor:e?.cursor||n?.end_cursor}})).filter((e=>e.image||e.video))}(e.username,s||l[l.length-1]?.cursor)}),[e]),j=s.useCallback((e=>i.jsxs(y.Item,{children:[i.jsxs("div",{className:"show-on-hover-trigger",children:[i.jsx(d,{src:e.image,width:250,height:250,style:{objectFit:"cover",borderRadius:10},preview:e.video||e.carousel?.length?{destroyOnClose:!0,imageRender:()=>e.carousel?.length?i.jsx(h,{style:{maxWidth:"90vw",maxHeight:"90vh",alignItems:"center",overflowY:"auto",overflowX:"hidden",padding:20,borderRadius:10},children:i.jsx(y,{grid:{gutter:10},style:{width:"100%"},dataSource:e.carousel,renderItem:j,rowKey:e=>e.id})}):i.jsx(m,{src:e.video,style:{maxWidth:"90vw",maxHeight:"90vh"}}),toolbarRender:()=>null}:void 0}),i.jsx(n,{type:"default",icon:i.jsx("i",{className:"fa-solid fa-up-right-from-square"}),style:{position:"absolute",bottom:10,right:10},className:"show-on-hover-item",target:"_blank",href:_("p/"+e.post_id+(e.index?"/?img_index="+e.index:""))})]}),i.jsx("p",{style:{wordWrap:"break-word",maxWidth:250,padding:5},title:e.caption,children:t(e.caption,30)}),i.jsx("div",{style:{position:"absolute",top:10,right:10,pointerEvents:"none"},children:e.carousel?.length>0?i.jsxs(i.Fragment,{children:[i.jsx("span",{children:e.carousel?.length}),o.IGCarousel]}):e.video?o.IGVideo:null})]})),[]),p=s.useCallback(((e,l)=>{function a(e,l=""){const a=!!e.video;return{url:a?e.video:e.image,name:l+e.id+(a?".mp4":".jpg")}}return e.carousel?.length>0?e.carousel.map(((e,l)=>a(e,l+"_"))):a(e)}),[]);return i.jsx(r,{collectionName:e?.username+" - IG Posts",fetchNext:l,renderItem:j,downloadItem:p,getItemCursor:e=>e.cursor||"",rowKey:e=>e.id})}))}}}));
