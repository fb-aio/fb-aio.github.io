System.register(["./index-legacy-em8lsdjG.js","./icons-legacy-Cz60wuNm.js","./Collection-legacy-BNDpRbTt.js","./MyApp-legacy-eQhw2hld.js","./core-legacy-UDs2tEtp.js","./VideoWithMuted-legacy-CAXSCe_R.js","./index-legacy-3HboAByW.js","./index-legacy-DQBtYbBr.js","./index-legacy-BFejBT1q.js","./index-legacy-Biw8AYTn.js","./file-download-legacy-BC7ShJxz.js","./react-hotkeys-hook.esm-legacy-CJrSHc0K.js","./index-legacy-BsRfKXoc.js","./index-legacy-BLxQvwtk.js","./index-legacy-CPY_9gVV.js","./Dropdown-legacy-CV5NSkUR.js","./PurePanel-legacy-YekLkw9D.js","./move-legacy-B0NLBr0J.js","./index-legacy-CQy5lX3g.js","./TextArea-legacy-CEW8Buwg.js","./EyeOutlined-legacy-DNGDLUHf.js","./SearchOutlined-legacy-DUbN1gtD.js","./index-legacy-DjDDmc9V.js","./Pagination-legacy-BcBm3qH4.js","./useBreakpoint-legacy-yiP9kW6m.js","./responsiveObserver-legacy-BmkofPmJ.js","./index-legacy-BPJKA0z7.js","./index-legacy-UV62jjIq.js","./DownOutlined-legacy-BamLaL4c.js","./row-legacy-B8b_N6Zy.js","./addEventListener-legacy-DmWhHDoC.js","./index-legacy-CYl1V0kt.js"],(function(e,l){"use strict";var a,n,i,s,t,o,r,c,d,u,g,_,y,m,j;return{setters:[e=>{a=e.aD,n=e.r,i=e.aM,s=e.aQ,t=e.ba},e=>{o=e.i},e=>{r=e.default},e=>{c=e.p},e=>{d=e.f,u=e.b,g=e.c},e=>{_=e.V},e=>{y=e.L},e=>{m=e.I},e=>{j=e.C},null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],execute:function(){e("default",(function({target:e}){const l=n.useCallback((async(l=[],n)=>{if(e?.id)return await async function(e="",l=""){let n;if(l){const a=await d({fb_api_req_friendly_name:"PolarisProfilePostsTabContentDirectQuery_connection",variables:{after:l,before:null,data:{count:12,include_relationship_info:!0,latest_besties_reel_media:!0,latest_reel_media:!0},first:12,last:null,username:e,__relay_internal__pv__PolarisFeedShareMenurelayprovider:!0},doc_id:"7935114066569227"});n=c(a),console.log("cursor fetch",n)}else{const l=await d({fb_api_req_friendly_name:"PolarisProfilePostsDirectQuery",variables:{data:{count:12,include_relationship_info:!0,latest_besties_reel_media:!0,latest_reel_media:!0},username:e,__relay_internal__pv__PolarisFeedShareMenurelayprovider:!0},doc_id:"7898261790222653"});n=c(l),console.log("first fetch",n)}const{edges:i=[],page_info:s={}}=a(n);return console.log(n),i.map((e=>{const l=e?.node?.media||e?.node;return{id:l?.id,post_id:l?.code,caption:l?.caption?.text||"",video:u(l?.video_versions),image:u(l?.image_versions2?.candidates),carousel:l?.carousel_media?.map(((e,a)=>({id:e.id,post_id:l?.code,index:a+1,video:u(e.video_versions),image:u(e.image_versions2?.candidates)}))),created_at:1e3*l?.taken_at,like_count:l?.like_count,comment_count:l?.comment_count,cursor:e?.cursor||s?.end_cursor}})).filter((e=>e.image||e.video))}(e.username,n||l[l.length-1]?.cursor)}),[e]),h=n.useCallback((e=>i.jsxs(y.Item,{children:[i.jsxs("div",{className:"show-on-hover-trigger",children:[i.jsx(m,{src:e.image,width:250,height:250,style:{objectFit:"cover",borderRadius:10},preview:e.video||e.carousel?.length?{destroyOnClose:!0,imageRender:()=>e.carousel?.length?i.jsx(j,{style:{maxWidth:"90vw",maxHeight:"90vh",alignItems:"center",overflowY:"auto",overflowX:"hidden",padding:20,borderRadius:10},children:i.jsx(y,{grid:{gutter:10},style:{width:"100%"},dataSource:e.carousel,renderItem:h,rowKey:e=>e.id})}):i.jsx(_,{src:e.video,style:{maxWidth:"90vw",maxHeight:"90vh"}}),toolbarRender:()=>null}:void 0}),i.jsx(s,{type:"default",icon:i.jsx("i",{className:"fa-solid fa-up-right-from-square"}),style:{position:"absolute",bottom:10,right:10},className:"show-on-hover-item",target:"_blank",href:g("p/"+e.post_id+(e.index?"/?img_index="+e.index:""))})]}),i.jsx("p",{style:{wordWrap:"break-word",maxWidth:250,padding:5},title:e.caption,children:t(e.caption,30)}),i.jsx("div",{style:{position:"absolute",top:10,right:10,pointerEvents:"none"},children:e.carousel?.length>0?i.jsxs(i.Fragment,{children:[i.jsx("span",{children:e.carousel?.length}),o.IGCarousel]}):e.video?o.IGVideo:null})]})),[]),p=n.useCallback(((e,l)=>{function a(e,l=""){const a=!!e.video;return{url:a?e.video:e.image,name:l+e.id+(a?".mp4":".jpg")}}return e.carousel?.length>0?e.carousel.map(((e,l)=>a(e,l+"_"))):a(e)}),[]);return i.jsx(r,{collectionName:e?.username+" - IG Posts",fetchNext:l,renderItem:h,downloadItem:p,getItemCursor:e=>e.cursor||"",rowKey:e=>e.id})}))}}}));
