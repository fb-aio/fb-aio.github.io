System.register(["./index-legacy-Bl2rtZQd.js","./core-legacy-Dn3Rlken.js","./MyApp-legacy-DZNFeqVR.js","./index-legacy-utTBzxz-.js","./icons-legacy-BIUlLejZ.js","./Collection-legacy-mdM-xDA4.js","./VideoWithMuted-legacy-CFDmlBIN.js","./BadgeWrapper-legacy-ywVTxezB.js","./index-legacy-C_bE0Ky5.js","./index-legacy-BICmr_Nj.js","./index-legacy-DUMdtfoi.js","./videos-legacy-jObZ5LfS.js","./core-legacy-CqnSfh9O.js","./Screen-legacy-kafIXXxX.js","./col-legacy-BsVeNAbx.js","./row-legacy-DVUNt-6H.js","./index-legacy-Dr37SwUK.js","./TextArea-legacy-D_1zu1hn.js","./index-legacy-DPcWN03D.js","./index-legacy-DTKwZtJV.js","./PurePanel-legacy-_wpVrNda.js","./index-legacy-BeIwGwQX.js","./Input-legacy-B2kv9gld.js","./SearchOutlined-legacy-nh7DoQUB.js","./index-legacy-BfGIOPZx.js","./Dropdown-legacy-CvaA3Mw7.js","./index-legacy-eicrThD0.js","./Collapse-legacy-CU2atwxQ.js","./index-legacy-COnAGmZ7.js","./file-download-legacy-EHfZ5YJ9.js","./react-hotkeys-hook.esm-legacy-7CLHN0A5.js","./index-legacy-XOdL7MmP.js","./index-legacy-kpWI2ZWF.js","./move-legacy-BsZzzHFy.js","./index-legacy-D2PqJmNg.js","./Pagination-legacy-BAhOfYBI.js","./DownOutlined-legacy-PMbvuSgK.js"],(function(e,a){"use strict";var l,r,n,s,t,i,o,d,c,_,u,p,y,g,h,m,v,f,j,x,b;return{setters:[e=>{l=e.aR,r=e.aU,n=e.r,s=e.aX,t=e.b0,i=e.co,o=e.be,d=e.bk},e=>{c=e.b},e=>{_=e.q,u=e.S,p=e.I},e=>{y=e.f,g=e.g},e=>{h=e.i},e=>{m=e.default},e=>{v=e.V},e=>{f=e.B},e=>{j=e.S},e=>{x=e.L},e=>{b=e.C},null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],execute:function(){e("default",(function({target:e}){const{ti:I}=r(),[R,B]=n.useState(a.Threads),k=n.useCallback((async(a=[],r)=>{if(e?.id)return await async function(e="",a="",r="Threads"){let n;if(a){const l=await y({fb_api_req_friendly_name:w[r].withCursor.name,variables:{after:a,before:null,first:10,last:null,userID:e,__relay_internal__pv__BarcelonaIsLoggedInrelayprovider:!0,__relay_internal__pv__BarcelonaIsInlineReelsEnabledrelayprovider:!1,__relay_internal__pv__BarcelonaOptionalCookiesEnabledrelayprovider:!0,__relay_internal__pv__BarcelonaShowReshareCountrelayprovider:!1,__relay_internal__pv__BarcelonaQuotedPostUFIEnabledrelayprovider:!1,__relay_internal__pv__BarcelonaIsCrawlerrelayprovider:!1,__relay_internal__pv__BarcelonaShouldShowFediverseM075Featuresrelayprovider:!0},doc_id:w[r].withCursor.doc_id});n=_(l)}else{const a=await y({fb_api_req_friendly_name:w[r].first.name,variables:{userID:e,__relay_internal__pv__BarcelonaIsLoggedInrelayprovider:!0,__relay_internal__pv__BarcelonaIsInlineReelsEnabledrelayprovider:!1,__relay_internal__pv__BarcelonaOptionalCookiesEnabledrelayprovider:!0,__relay_internal__pv__BarcelonaShowReshareCountrelayprovider:!1,__relay_internal__pv__BarcelonaQuotedPostUFIEnabledrelayprovider:!1,__relay_internal__pv__BarcelonaIsCrawlerrelayprovider:!1,__relay_internal__pv__BarcelonaShouldShowFediverseM075Featuresrelayprovider:!0},doc_id:w[r].first.doc_id});n=_(a)}console.log(n);const{edges:s=[],page_info:t={}}=l(n);return s.map((e=>function(e,a){const l=e?.node?.thread_items?.[0],r=l?.post?.text_post_app_info?.share_info?.reposted_post||l?.post?.text_post_app_info?.share_info?.quoted_post||l?.post;return{id:e?.node?.id,pk:r?.pk,code:r?.code,caption:r?.caption?.text,image:c(r?.image_versions2?.candidates),video:c(r?.video_versions),carousel:r?.carousel_media?.map((e=>({id:e?.id,pk:e?.pk,code:e?.code,accessibilityCaption:e?.accessibility_caption,image:c(e?.image_versions2?.candidates),video:c(e?.video_versions),isCarouselItem:!0}))),audio:r?.audio,createdTime:1e3*r?.taken_at,mentions:r?.text_post_app_info?.text_fragments?.fragments?.filter((e=>"mentrion"===e?.fragment_type))?.map((e=>({id:e?.mention_fragment?.mentioned_user?.id,username:e?.mention_fragment?.mentioned_user?.username,text:e?.plaintext}))),likeCount:r?.like_count,replyCount:r?.text_post_app_info?.direct_reply_count,repostCount:r?.text_post_app_info?.repost_count,quoteCount:r?.text_post_app_info?.quote_count,isGenAI:"NONE"!=r?.gen_ai_detection_method?.detection_method,cursor:e?.cursor||a?.end_cursor,raw:e}}(e,t)))}(e.id,r||a[a.length-1]?.cursor,R)}),[e,R]),T=n.useCallback(((e,l)=>s.jsx(f,{type:"new",children:s.jsx(j,{disabled:l,value:R,onChange:B,style:{width:"150px"},children:Object.entries(a).map((([e,a])=>s.jsx(j.Option,{value:a,children:I(C[a])},e)))})})),[R,I]),N=n.useCallback((a=>{const l=a.image||a.video||a.carousel?.length,r="isCarouselItem"in a,n=r?null:s.jsx(t,{type:"default",icon:s.jsx("i",{className:"fa-solid fa-up-right-from-square"}),style:{position:"absolute",bottom:10,right:10},className:"show-on-hover-item",target:"_blank",href:g("@"+e?.id+"/post/"+a.code)}),c=r?null:s.jsxs(u,{direction:"vertical",size:0,style:{position:"absolute",top:0,left:0,width:"100%",height:"100%",pointerEvents:"none",paddingTop:5,paddingLeft:10},children:[s.jsxs("span",{children:[s.jsx("i",{className:"fa fa-thumbs-up"})," ",i(a.likeCount)]}),s.jsxs("span",{children:[s.jsx("i",{className:"fa fa-comment"})," ",i(a.replyCount)]}),s.jsxs("span",{children:[s.jsx("i",{className:"fa fa-retweet"})," ",i(a.repostCount)]}),s.jsxs("span",{children:[s.jsx("i",{className:"fa fa-quote-left"})," ",i(a.quoteCount)]}),s.jsxs("span",{children:[s.jsx("i",{className:"fa fa-clock"})," ",o(a.createdTime)]})]});return l?s.jsxs(x.Item,{children:[s.jsxs("div",{className:"show-on-hover-trigger",children:[s.jsx(p,{src:a.image,width:250,height:250,style:{objectFit:"cover",borderRadius:10},preview:a.video||a.carousel?.length?{destroyOnClose:!0,imageRender:()=>a.carousel?.length?s.jsx(b,{style:{maxWidth:"90vw",maxHeight:"90vh",alignItems:"center",overflowY:"auto",overflowX:"hidden",padding:20,borderRadius:10},children:s.jsx(x,{grid:{gutter:10},style:{width:"100%"},dataSource:a.carousel,renderItem:N,rowKey:e=>e.id})}):s.jsx(v,{src:a.video,style:{maxWidth:"90vw",maxHeight:"90vh"}}),toolbarRender:()=>null}:void 0}),n]}),s.jsx("p",{style:{wordWrap:"break-word",maxWidth:250,padding:5},title:a.caption,children:d(a.caption,80)}),s.jsx("div",{style:{position:"absolute",top:10,right:10,pointerEvents:"none"},children:a.carousel?.length>0?s.jsxs(s.Fragment,{children:[s.jsx("span",{children:a.carousel?.length}),h.IGCarousel]}):a.video?h.IGVideo:null}),c]}):s.jsx(x.Item,{children:s.jsxs("div",{className:"show-on-hover-trigger",children:[s.jsx("div",{style:{width:250,height:250,display:"flex",justifyContent:"center",alignItems:"center"},children:s.jsx("p",{style:{wordWrap:"break-word",padding:5},title:a.caption,children:d(a.caption,200)})}),n,c]})})}),[]),P=n.useCallback(((e,a)=>{if(!e.video&&!e.image&&0===e.carousel?.length)return[];function l(e,a=""){const l=!!e.video;return{url:l?e.video:e.image,name:a+e.id+(l?".mp4":".jpg")}}return e.carousel?.length>0?e.carousel.map(((e,a)=>l(e,a+"_"))):l(e)}),[]);return e?.username?s.jsx(m,{collectionName:e?.username+" - Threads "+I(C[R]),fetchNext:k,renderItem:N,downloadItem:P,headerButtons:T,getItemCursor:e=>e.cursor||"",rowKey:e=>e.id}):null}));var a=(e=>(e.Threads="Threads",e.Replies="Replies",e.Reposts="Reposts",e))(a||{});const w={Threads:{first:{name:"BarcelonaProfileThreadsTabQuery",doc_id:"8436285959793247"},withCursor:{name:"BarcelonaProfileThreadsTabRefetchableQuery",doc_id:"8921337961211543"}},Replies:{first:{name:"BarcelonaProfileRepliesTabQuery",doc_id:"8488857591189950"},withCursor:{name:"BarcelonaProfileRepliesTabRefetchableQuery",doc_id:"8562442443831413"}},Reposts:{first:{name:"BarcelonaProfileRepostsTabQuery",doc_id:"8425754140878176"},withCursor:{name:"BarcelonaProfileRepostsTabRefetchableQuery",doc_id:"9365308133484269"}}},C={[a.Threads]:{en:"📝 Posts",vi:"📝 Posts"},[a.Replies]:{en:"💬 Replies",vi:"💬 Replies"},[a.Reposts]:{en:"🔁 Reposts",vi:"🔁 Reposts"}}}}}));
