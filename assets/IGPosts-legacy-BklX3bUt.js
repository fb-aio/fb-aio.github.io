System.register(["./index-legacy-Bl2rtZQd.js","./icons-legacy-BIUlLejZ.js","./Collection-legacy-mdM-xDA4.js","./MyApp-legacy-DZNFeqVR.js","./core-legacy-Dn3Rlken.js","./VideoWithMuted-legacy-CFDmlBIN.js","./index-legacy-BICmr_Nj.js","./index-legacy-DUMdtfoi.js","./index-legacy-COnAGmZ7.js","./file-download-legacy-EHfZ5YJ9.js","./react-hotkeys-hook.esm-legacy-7CLHN0A5.js","./index-legacy-DTKwZtJV.js","./index-legacy-XOdL7MmP.js","./index-legacy-kpWI2ZWF.js","./Dropdown-legacy-CvaA3Mw7.js","./PurePanel-legacy-_wpVrNda.js","./move-legacy-BsZzzHFy.js","./index-legacy-BeIwGwQX.js","./TextArea-legacy-D_1zu1hn.js","./Input-legacy-B2kv9gld.js","./SearchOutlined-legacy-nh7DoQUB.js","./index-legacy-D2PqJmNg.js","./Pagination-legacy-BAhOfYBI.js","./index-legacy-Dr37SwUK.js","./index-legacy-C_bE0Ky5.js","./DownOutlined-legacy-PMbvuSgK.js","./row-legacy-DVUNt-6H.js","./col-legacy-BsVeNAbx.js","./index-legacy-BfGIOPZx.js"],(function(e,l){"use strict";var a,n,i,s,t,o,r,c,d,u,g,_,y,m,h;return{setters:[e=>{a=e.aR,n=e.r,i=e.aX,s=e.b0,t=e.bk},e=>{o=e.i},e=>{r=e.default},e=>{c=e.q,d=e.I},e=>{u=e.f,g=e.b,_=e.c},e=>{y=e.V},e=>{m=e.L},e=>{h=e.C},null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],execute:function(){e("default",(function({target:e}){const l=n.useCallback((async(l=[],n)=>{if(e?.id)return await async function(e="",l=""){let n;if(l){const a=await u({fb_api_req_friendly_name:"PolarisProfilePostsTabContentDirectQuery_connection",variables:{after:l,before:null,data:{count:12,include_relationship_info:!0,latest_besties_reel_media:!0,latest_reel_media:!0},first:12,last:null,username:e,__relay_internal__pv__PolarisFeedShareMenurelayprovider:!0},doc_id:"7935114066569227"});n=c(a),console.log("cursor fetch",n)}else{const l=await u({fb_api_req_friendly_name:"PolarisProfilePostsDirectQuery",variables:{data:{count:12,include_relationship_info:!0,latest_besties_reel_media:!0,latest_reel_media:!0},username:e,__relay_internal__pv__PolarisFeedShareMenurelayprovider:!0},doc_id:"7898261790222653"});n=c(l),console.log("first fetch",n)}const{edges:i=[],page_info:s={}}=a(n);return console.log(n),i.map((e=>{const l=e?.node?.media||e?.node;return{id:l?.id,post_id:l?.code,caption:l?.caption?.text||"",video:g(l?.video_versions),image:g(l?.image_versions2?.candidates),carousel:l?.carousel_media?.map(((e,a)=>({id:e.id,post_id:l?.code,index:a+1,video:g(e.video_versions),image:g(e.image_versions2?.candidates)}))),created_at:1e3*l?.taken_at,like_count:l?.like_count,comment_count:l?.comment_count,cursor:e?.cursor||s?.end_cursor}})).filter((e=>e.image||e.video))}(e.username,n||l[l.length-1]?.cursor)}),[e]),j=n.useCallback((e=>i.jsxs(m.Item,{children:[i.jsxs("div",{className:"show-on-hover-trigger",children:[i.jsx(d,{src:e.image,width:250,height:250,style:{objectFit:"cover",borderRadius:10},preview:e.video||e.carousel?.length?{destroyOnClose:!0,imageRender:()=>e.carousel?.length?i.jsx(h,{style:{maxWidth:"90vw",maxHeight:"90vh",alignItems:"center",overflowY:"auto",overflowX:"hidden",padding:20,borderRadius:10},children:i.jsx(m,{grid:{gutter:10},style:{width:"100%"},dataSource:e.carousel,renderItem:j,rowKey:e=>e.id})}):i.jsx(y,{src:e.video,style:{maxWidth:"90vw",maxHeight:"90vh"}}),toolbarRender:()=>null}:void 0}),i.jsx(s,{type:"default",icon:i.jsx("i",{className:"fa-solid fa-up-right-from-square"}),style:{position:"absolute",bottom:10,right:10},className:"show-on-hover-item",target:"_blank",href:_("p/"+e.post_id+(e.index?"/?img_index="+e.index:""))})]}),i.jsx("p",{style:{wordWrap:"break-word",maxWidth:250,padding:5},title:e.caption,children:t(e.caption,30)}),i.jsx("div",{style:{position:"absolute",top:10,right:10,pointerEvents:"none"},children:e.carousel?.length>0?i.jsxs(i.Fragment,{children:[i.jsx("span",{children:e.carousel?.length}),o.IGCarousel]}):e.video?o.IGVideo:null})]})),[]),p=n.useCallback(((e,l)=>{function a(e,l=""){const a=!!e.video;return{url:a?e.video:e.image,name:l+e.id+(a?".mp4":".jpg")}}return e.carousel?.length>0?e.carousel.map(((e,l)=>a(e,l+"_"))):a(e)}),[]);return i.jsx(r,{collectionName:e?.username+" - IG Posts",fetchNext:l,renderItem:j,downloadItem:p,getItemCursor:e=>e.cursor||"",rowKey:e=>e.id})}))}}}));
