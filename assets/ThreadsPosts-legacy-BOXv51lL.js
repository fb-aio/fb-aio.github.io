System.register(["./index-legacy-DgDxnhpA.js","./core-legacy-1xHbVB_U.js","./MyApp-legacy--44lDAYA.js","./index-legacy-Cm8qKYYs.js","./icons-legacy-BWWNbf8o.js","./Collection-legacy-CT4dms2K.js","./VideoWithMuted-legacy-CsA3myhg.js","./BadgeWrapper-legacy-CXrTq5mk.js","./index-legacy-i3bw2b2W.js","./index-legacy-BHyr6atY.js","./index-legacy-CRqvs_2D.js","./videos-legacy-BYhjAVga.js","./core-legacy-BcUIk4bi.js","./Screen-legacy-DoE_mUbh.js","./col-legacy-D6No8P8C.js","./row-legacy-vWQqcFVi.js","./index-legacy-BDlErKet.js","./TextArea-legacy-B9cfn5c-.js","./index-legacy-DRdwWqEm.js","./PurePanel-legacy-DCSDv3sl.js","./index-legacy-D7Sgl99W.js","./SearchOutlined-legacy-CuuS7WlB.js","./index-legacy-B9HH1mBJ.js","./Dropdown-legacy-DZYgwR4s.js","./index-legacy-DmIDLGgS.js","./Collapse-legacy-yu6bSIxn.js","./index-legacy-DtTRmuRZ.js","./file-download-legacy-CITZosSI.js","./react-hotkeys-hook.esm-legacy-CnhR9qXy.js","./index-legacy-CphRATWL.js","./index-legacy-Daaohuto.js","./index-legacy-B7D85tm3.js","./index-legacy-DnTQUxLr.js","./move-legacy-D4CLyVSa.js","./index-legacy-C6Lgksty.js","./Pagination-legacy-BNXwGNoJ.js","./useBreakpoint-legacy-fAAoUt70.js","./useForceUpdate-legacy-CaDY0ldf.js","./List-legacy-DQsyQNx_.js","./DownOutlined-legacy-Dv1to0sb.js"],(function(e,a){"use strict";var l,n,r,s,t,i,o,d,c,_,u,p,y,g,h,m,j,v,f,x,b;return{setters:[e=>{l=e.aN,n=e.aU,r=e.r,s=e.aW,t=e.a_,i=e.cp,o=e.bd,d=e.bj},e=>{c=e.b},e=>{_=e.p,u=e.S,p=e.I},e=>{y=e.f,g=e.g},e=>{h=e.i},e=>{m=e.default},e=>{j=e.V},e=>{v=e.B},e=>{f=e.S},e=>{x=e.L},e=>{b=e.C},null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],execute:function(){e("default",(function({target:e}){const{ti:I}=n(),[R,B]=r.useState(a.Threads),k=r.useCallback((async(a=[],n)=>{if(e?.id)return await async function(e="",a="",n="Threads"){let r;if(a){const l=await y({fb_api_req_friendly_name:w[n].withCursor.name,variables:{after:a,before:null,first:10,last:null,userID:e,__relay_internal__pv__BarcelonaIsLoggedInrelayprovider:!0,__relay_internal__pv__BarcelonaIsInlineReelsEnabledrelayprovider:!1,__relay_internal__pv__BarcelonaOptionalCookiesEnabledrelayprovider:!0,__relay_internal__pv__BarcelonaShowReshareCountrelayprovider:!1,__relay_internal__pv__BarcelonaQuotedPostUFIEnabledrelayprovider:!1,__relay_internal__pv__BarcelonaIsCrawlerrelayprovider:!1,__relay_internal__pv__BarcelonaShouldShowFediverseM075Featuresrelayprovider:!0},doc_id:w[n].withCursor.doc_id});r=_(l)}else{const a=await y({fb_api_req_friendly_name:w[n].first.name,variables:{userID:e,__relay_internal__pv__BarcelonaIsLoggedInrelayprovider:!0,__relay_internal__pv__BarcelonaIsInlineReelsEnabledrelayprovider:!1,__relay_internal__pv__BarcelonaOptionalCookiesEnabledrelayprovider:!0,__relay_internal__pv__BarcelonaShowReshareCountrelayprovider:!1,__relay_internal__pv__BarcelonaQuotedPostUFIEnabledrelayprovider:!1,__relay_internal__pv__BarcelonaIsCrawlerrelayprovider:!1,__relay_internal__pv__BarcelonaShouldShowFediverseM075Featuresrelayprovider:!0},doc_id:w[n].first.doc_id});r=_(a)}console.log(r);const{edges:s=[],page_info:t={}}=l(r);return s.map((e=>function(e,a){const l=e?.node?.thread_items?.[0],n=l?.post?.text_post_app_info?.share_info?.reposted_post||l?.post?.text_post_app_info?.share_info?.quoted_post||l?.post;return{id:e?.node?.id,pk:n?.pk,code:n?.code,caption:n?.caption?.text,image:c(n?.image_versions2?.candidates),video:c(n?.video_versions),carousel:n?.carousel_media?.map((e=>({id:e?.id,pk:e?.pk,code:e?.code,accessibilityCaption:e?.accessibility_caption,image:c(e?.image_versions2?.candidates),video:c(e?.video_versions),isCarouselItem:!0}))),audio:n?.audio,createdTime:1e3*n?.taken_at,mentions:n?.text_post_app_info?.text_fragments?.fragments?.filter((e=>"mentrion"===e?.fragment_type))?.map((e=>({id:e?.mention_fragment?.mentioned_user?.id,username:e?.mention_fragment?.mentioned_user?.username,text:e?.plaintext}))),likeCount:n?.like_count,replyCount:n?.text_post_app_info?.direct_reply_count,repostCount:n?.text_post_app_info?.repost_count,quoteCount:n?.text_post_app_info?.quote_count,isGenAI:"NONE"!=n?.gen_ai_detection_method?.detection_method,cursor:e?.cursor||a?.end_cursor,raw:e}}(e,t)))}(e.id,n||a[a.length-1]?.cursor,R)}),[e,R]),T=r.useCallback(((e,l)=>s.jsx(v,{type:"new",children:s.jsx(f,{disabled:l,value:R,onChange:B,style:{width:"150px"},children:Object.entries(a).map((([e,a])=>s.jsx(f.Option,{value:a,children:I(C[a])},e)))})})),[R,I]),N=r.useCallback((a=>{const l=a.image||a.video||a.carousel?.length,n="isCarouselItem"in a,r=n?null:s.jsx(t,{type:"default",icon:s.jsx("i",{className:"fa-solid fa-up-right-from-square"}),style:{position:"absolute",bottom:10,right:10},className:"show-on-hover-item",target:"_blank",href:g("@"+e?.id+"/post/"+a.code)}),c=n?null:s.jsxs(u,{direction:"vertical",size:0,style:{position:"absolute",top:0,left:0,width:"100%",height:"100%",pointerEvents:"none",paddingTop:5,paddingLeft:10},children:[s.jsxs("span",{children:[s.jsx("i",{className:"fa fa-thumbs-up"})," ",i(a.likeCount)]}),s.jsxs("span",{children:[s.jsx("i",{className:"fa fa-comment"})," ",i(a.replyCount)]}),s.jsxs("span",{children:[s.jsx("i",{className:"fa fa-retweet"})," ",i(a.repostCount)]}),s.jsxs("span",{children:[s.jsx("i",{className:"fa fa-quote-left"})," ",i(a.quoteCount)]}),s.jsxs("span",{children:[s.jsx("i",{className:"fa fa-clock"})," ",o(a.createdTime)]})]});return l?s.jsxs(x.Item,{children:[s.jsxs("div",{className:"show-on-hover-trigger",children:[s.jsx(p,{src:a.image,width:250,height:250,style:{objectFit:"cover",borderRadius:10},preview:a.video||a.carousel?.length?{destroyOnClose:!0,imageRender:()=>a.carousel?.length?s.jsx(b,{style:{maxWidth:"90vw",maxHeight:"90vh",alignItems:"center",overflowY:"auto",overflowX:"hidden",padding:20,borderRadius:10},children:s.jsx(x,{grid:{gutter:10},style:{width:"100%"},dataSource:a.carousel,renderItem:N,rowKey:e=>e.id})}):s.jsx(j,{src:a.video,style:{maxWidth:"90vw",maxHeight:"90vh"}}),toolbarRender:()=>null}:void 0}),r]}),s.jsx("p",{style:{wordWrap:"break-word",maxWidth:250,padding:5},title:a.caption,children:d(a.caption,80)}),s.jsx("div",{style:{position:"absolute",top:10,right:10,pointerEvents:"none"},children:a.carousel?.length>0?s.jsxs(s.Fragment,{children:[s.jsx("span",{children:a.carousel?.length}),h.IGCarousel]}):a.video?h.IGVideo:null}),c]}):s.jsx(x.Item,{children:s.jsxs("div",{className:"show-on-hover-trigger",children:[s.jsx("div",{style:{width:250,height:250,display:"flex",justifyContent:"center",alignItems:"center"},children:s.jsx("p",{style:{wordWrap:"break-word",padding:5},title:a.caption,children:d(a.caption,200)})}),r,c]})})}),[]),S=r.useCallback(((e,a)=>{if(!e.video&&!e.image&&0===e.carousel?.length)return[];function l(e,a=""){const l=!!e.video;return{url:l?e.video:e.image,name:a+e.id+(l?".mp4":".jpg")}}return e.carousel?.length>0?e.carousel.map(((e,a)=>l(e,a+"_"))):l(e)}),[]);return e?.username?s.jsx(m,{collectionName:e?.username+" - Threads "+I(C[R]),fetchNext:k,renderItem:N,downloadItem:S,headerButtons:T,getItemCursor:e=>e.cursor||"",rowKey:e=>e.id}):null}));var a=(e=>(e.Threads="Threads",e.Replies="Replies",e.Reposts="Reposts",e))(a||{});const w={Threads:{first:{name:"BarcelonaProfileThreadsTabQuery",doc_id:"8436285959793247"},withCursor:{name:"BarcelonaProfileThreadsTabRefetchableQuery",doc_id:"8921337961211543"}},Replies:{first:{name:"BarcelonaProfileRepliesTabQuery",doc_id:"8488857591189950"},withCursor:{name:"BarcelonaProfileRepliesTabRefetchableQuery",doc_id:"8562442443831413"}},Reposts:{first:{name:"BarcelonaProfileRepostsTabQuery",doc_id:"8425754140878176"},withCursor:{name:"BarcelonaProfileRepostsTabRefetchableQuery",doc_id:"9365308133484269"}}},C={[a.Threads]:{en:"📝 Posts",vi:"📝 Posts"},[a.Replies]:{en:"💬 Replies",vi:"💬 Replies"},[a.Reposts]:{en:"🔁 Reposts",vi:"🔁 Reposts"}}}}}));
