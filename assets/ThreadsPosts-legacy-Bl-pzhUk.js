System.register(["./index-legacy-B3RKK3aZ.js","./core-legacy-BQi85Ryw.js","./MyApp-legacy-acuBaUwA.js","./index-legacy-7BSzX8Ux.js","./icons-legacy-DBsUP4j4.js","./Collection-legacy-4VY2Rclc.js","./VideoWithMuted-legacy-B_RaEGfj.js","./BadgeWrapper-legacy-DBNr72k-.js","./index-legacy-DuSPHPj4.js","./index-legacy-ChGpZFEZ.js","./index-legacy-5406mfGY.js","./videos-legacy-dSSGmdGi.js","./core-legacy-D953yx5n.js","./Screen-legacy-CEjXNMxi.js","./col-legacy-CetQGZ1I.js","./row-legacy-C-856r4Z.js","./responsiveObserver-legacy-DedImkrC.js","./index-legacy-BiQURyNj.js","./PurePanel-legacy-Bu61VAyB.js","./index-legacy-CZcnOrIS.js","./index-legacy-Diiq_sdW.js","./file-download-legacy-BlZuZHvS.js","./react-hotkeys-hook.esm-legacy-5SMVC-Bs.js","./index-legacy-BNGe0Stf.js","./index-legacy-CbVFiRq8.js","./index-legacy-CMYVg5W-.js","./index-legacy-BezdVW9X.js","./move-legacy-Dl6tC53j.js","./index-legacy-Cudyk-Nk.js","./Pagination-legacy-DzJPBKps.js","./useBreakpoint-legacy-Dv1rFSLS.js","./useForceUpdate-legacy-qW0w4eeM.js","./List-legacy-DSd61bXf.js","./DownOutlined-legacy-SEK2xiK7.js"],(function(e,a){"use strict";var r,l,n,s,t,i,o,d,c,_,u,p,y,g,h,m,v,f,j,x,b;return{setters:[e=>{r=e.b0,l=e.b6,n=e.r,s=e.b8,t=e.am,i=e.co,o=e.bq,d=e.bu},e=>{c=e.b},e=>{_=e.r,u=e.S,p=e.k},e=>{y=e.f,g=e.g},e=>{h=e.i},e=>{m=e.default},e=>{v=e.V},e=>{f=e.B},e=>{j=e.S},e=>{x=e.L},e=>{b=e.C},null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],execute:function(){e("default",(function({target:e}){const{ti:R}=l(),[I,B]=n.useState(a.Threads),k=n.useCallback((async(a=[],l)=>{if(e?.id)return await async function(e="",a="",l="Threads"){let n;if(a){const r=await y({fb_api_req_friendly_name:w[l].withCursor.name,variables:{after:a,before:null,first:10,last:null,userID:e,__relay_internal__pv__BarcelonaIsLoggedInrelayprovider:!0,__relay_internal__pv__BarcelonaIsInlineReelsEnabledrelayprovider:!1,__relay_internal__pv__BarcelonaOptionalCookiesEnabledrelayprovider:!0,__relay_internal__pv__BarcelonaShowReshareCountrelayprovider:!1,__relay_internal__pv__BarcelonaQuotedPostUFIEnabledrelayprovider:!1,__relay_internal__pv__BarcelonaIsCrawlerrelayprovider:!1,__relay_internal__pv__BarcelonaShouldShowFediverseM075Featuresrelayprovider:!0},doc_id:w[l].withCursor.doc_id});n=_(r)}else{const a=await y({fb_api_req_friendly_name:w[l].first.name,variables:{userID:e,__relay_internal__pv__BarcelonaIsLoggedInrelayprovider:!0,__relay_internal__pv__BarcelonaIsInlineReelsEnabledrelayprovider:!1,__relay_internal__pv__BarcelonaOptionalCookiesEnabledrelayprovider:!0,__relay_internal__pv__BarcelonaShowReshareCountrelayprovider:!1,__relay_internal__pv__BarcelonaQuotedPostUFIEnabledrelayprovider:!1,__relay_internal__pv__BarcelonaIsCrawlerrelayprovider:!1,__relay_internal__pv__BarcelonaShouldShowFediverseM075Featuresrelayprovider:!0},doc_id:w[l].first.doc_id});n=_(a)}console.log(n);const{edges:s=[],page_info:t={}}=r(n);return s.map((e=>function(e,a){const r=e?.node?.thread_items?.[0],l=r?.post?.text_post_app_info?.share_info?.reposted_post||r?.post?.text_post_app_info?.share_info?.quoted_post||r?.post;return{id:e?.node?.id,pk:l?.pk,code:l?.code,caption:l?.caption?.text,image:c(l?.image_versions2?.candidates),video:c(l?.video_versions),carousel:l?.carousel_media?.map((e=>({id:e?.id,pk:e?.pk,code:e?.code,accessibilityCaption:e?.accessibility_caption,image:c(e?.image_versions2?.candidates),video:c(e?.video_versions),isCarouselItem:!0}))),audio:l?.audio,createdTime:1e3*l?.taken_at,mentions:l?.text_post_app_info?.text_fragments?.fragments?.filter((e=>"mentrion"===e?.fragment_type))?.map((e=>({id:e?.mention_fragment?.mentioned_user?.id,username:e?.mention_fragment?.mentioned_user?.username,text:e?.plaintext}))),likeCount:l?.like_count,replyCount:l?.text_post_app_info?.direct_reply_count,repostCount:l?.text_post_app_info?.repost_count,quoteCount:l?.text_post_app_info?.quote_count,isGenAI:"NONE"!=l?.gen_ai_detection_method?.detection_method,cursor:e?.cursor||a?.end_cursor,raw:e}}(e,t)))}(e.id,l||a[a.length-1]?.cursor,I)}),[e,I]),T=n.useCallback(((e,r)=>s.jsx(f,{type:"new",children:s.jsx(j,{disabled:r,value:I,onChange:B,style:{width:"150px"},children:Object.entries(a).map((([e,a])=>s.jsx(j.Option,{value:a,children:R(C[a])},e)))})})),[I,R]),N=n.useCallback((a=>{const r=a.image||a.video||a.carousel?.length,l="isCarouselItem"in a,n=l?null:s.jsx(t,{type:"default",icon:s.jsx("i",{className:"fa-solid fa-up-right-from-square"}),style:{position:"absolute",bottom:10,right:10},className:"show-on-hover-item",target:"_blank",href:g("@"+e?.id+"/post/"+a.code)}),c=l?null:s.jsxs(u,{direction:"vertical",size:0,style:{position:"absolute",top:0,left:0,width:"100%",height:"100%",pointerEvents:"none",paddingTop:5,paddingLeft:10},children:[s.jsxs("span",{children:[s.jsx("i",{className:"fa fa-thumbs-up"})," ",i(a.likeCount)]}),s.jsxs("span",{children:[s.jsx("i",{className:"fa fa-comment"})," ",i(a.replyCount)]}),s.jsxs("span",{children:[s.jsx("i",{className:"fa fa-retweet"})," ",i(a.repostCount)]}),s.jsxs("span",{children:[s.jsx("i",{className:"fa fa-quote-left"})," ",i(a.quoteCount)]}),s.jsxs("span",{children:[s.jsx("i",{className:"fa fa-clock"})," ",o(a.createdTime)]})]});return r?s.jsxs(x.Item,{children:[s.jsxs("div",{className:"show-on-hover-trigger",children:[s.jsx(p,{src:a.image,width:250,height:250,style:{objectFit:"cover",borderRadius:10},preview:a.video||a.carousel?.length?{destroyOnClose:!0,imageRender:()=>a.carousel?.length?s.jsx(b,{style:{maxWidth:"90vw",maxHeight:"90vh",alignItems:"center",overflowY:"auto",overflowX:"hidden",padding:20,borderRadius:10},children:s.jsx(x,{grid:{gutter:10},style:{width:"100%"},dataSource:a.carousel,renderItem:N,rowKey:e=>e.id})}):s.jsx(v,{src:a.video,style:{maxWidth:"90vw",maxHeight:"90vh"}}),toolbarRender:()=>null}:void 0}),n]}),s.jsx("p",{style:{wordWrap:"break-word",maxWidth:250,padding:5},title:a.caption,children:d(a.caption,80)}),s.jsx("div",{style:{position:"absolute",top:10,right:10,pointerEvents:"none"},children:a.carousel?.length>0?s.jsxs(s.Fragment,{children:[s.jsx("span",{children:a.carousel?.length}),h.IGCarousel]}):a.video?h.IGVideo:null}),c]}):s.jsx(x.Item,{children:s.jsxs("div",{className:"show-on-hover-trigger",children:[s.jsx("div",{style:{width:250,height:250,display:"flex",justifyContent:"center",alignItems:"center"},children:s.jsx("p",{style:{wordWrap:"break-word",padding:5},title:a.caption,children:d(a.caption,200)})}),n,c]})})}),[]),P=n.useCallback(((e,a)=>{if(!e.video&&!e.image&&0===e.carousel?.length)return[];function r(e,a=""){const r=!!e.video;return{url:r?e.video:e.image,name:a+e.id+(r?".mp4":".jpg")}}return e.carousel?.length>0?e.carousel.map(((e,a)=>r(e,a+"_"))):r(e)}),[]);return e?.username?s.jsx(m,{collectionName:e?.username+" - Threads "+R(C[I]),fetchNext:k,renderItem:N,downloadItem:P,headerButtons:T,getItemCursor:e=>e.cursor||"",rowKey:e=>e.id}):null}));var a=(e=>(e.Threads="Threads",e.Replies="Replies",e.Reposts="Reposts",e))(a||{});const w={Threads:{first:{name:"BarcelonaProfileThreadsTabQuery",doc_id:"8436285959793247"},withCursor:{name:"BarcelonaProfileThreadsTabRefetchableQuery",doc_id:"8921337961211543"}},Replies:{first:{name:"BarcelonaProfileRepliesTabQuery",doc_id:"8488857591189950"},withCursor:{name:"BarcelonaProfileRepliesTabRefetchableQuery",doc_id:"8562442443831413"}},Reposts:{first:{name:"BarcelonaProfileRepostsTabQuery",doc_id:"8425754140878176"},withCursor:{name:"BarcelonaProfileRepostsTabRefetchableQuery",doc_id:"9365308133484269"}}},C={[a.Threads]:{en:"📝 Posts",vi:"📝 Posts"},[a.Replies]:{en:"💬 Replies",vi:"💬 Replies"},[a.Reposts]:{en:"🔁 Reposts",vi:"🔁 Reposts"}}}}}));
