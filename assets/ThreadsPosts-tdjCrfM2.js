import{aR as G,aU as M,r as j,aX as s,b0 as V,co as g,be as H,bk as q}from"./index-COzEtZFD.js";import{b as I}from"./core-zSPQKdQ3.js";import{p as L,S as K,I as X}from"./MyApp-B008lawu.js";import{f as O,g as z}from"./index-D2ruLYUU.js";import{i as W}from"./icons-C2bnIJFF.js";import A from"./Collection-DeHYnor9.js";import{V as Y}from"./VideoWithMuted-V05yE_T_.js";import{B as J}from"./BadgeWrapper-D0fPu3wE.js";import{S as U}from"./index-BuEzX3T-.js";import{L as B}from"./index-CwQaECRz.js";import{C as Z}from"./index-DfhftG_e.js";import"./videos-Du3VIpUH.js";import"./core-DawodHoW.js";import"./Screen-Hc4vc3tj.js";import"./col-BXId2dJy.js";import"./row-NukQ7HI6.js";import"./index-f-MCHpBP.js";import"./TextArea-BgeRs1JC.js";import"./index-C98rXRPh.js";import"./PurePanel-DgfQS4A1.js";import"./index-P3s4ax78.js";import"./Input-DdjKsEFy.js";import"./SearchOutlined-CAhgCuX5.js";import"./index-B-5y4GH-.js";import"./Dropdown-B72Pgh4J.js";import"./index-BlcA0Jb2.js";import"./Collapse-DaKuTayZ.js";import"./index-BA0UScCi.js";import"./file-download-kY53ykyZ.js";import"./react-hotkeys-hook.esm-Dpzwejj_.js";import"./index-B3YBvd9z.js";import"./index-CxXKfa7A.js";import"./index-wxRg53kN.js";import"./move-BoNtFKyd.js";import"./index-CXSq5ukN.js";import"./Pagination-CkEZdWax.js";import"./DownOutlined-Q8sx1Bac.js";function $(a,c){var m,f,t,w,r,_,d,l,u,i,p,h,y,x,C,T,k,N,P,S;const n=(f=(m=a==null?void 0:a.node)==null?void 0:m.thread_items)==null?void 0:f[0],e=((r=(w=(t=n==null?void 0:n.post)==null?void 0:t.text_post_app_info)==null?void 0:w.share_info)==null?void 0:r.reposted_post)||((l=(d=(_=n==null?void 0:n.post)==null?void 0:_.text_post_app_info)==null?void 0:d.share_info)==null?void 0:l.quoted_post)||(n==null?void 0:n.post);return{id:(u=a==null?void 0:a.node)==null?void 0:u.id,pk:e==null?void 0:e.pk,code:e==null?void 0:e.code,caption:(i=e==null?void 0:e.caption)==null?void 0:i.text,image:I((p=e==null?void 0:e.image_versions2)==null?void 0:p.candidates),video:I(e==null?void 0:e.video_versions),carousel:(h=e==null?void 0:e.carousel_media)==null?void 0:h.map(o=>{var b;return{id:o==null?void 0:o.id,pk:o==null?void 0:o.pk,code:o==null?void 0:o.code,accessibilityCaption:o==null?void 0:o.accessibility_caption,image:I((b=o==null?void 0:o.image_versions2)==null?void 0:b.candidates),video:I(o==null?void 0:o.video_versions),isCarouselItem:!0}}),audio:e==null?void 0:e.audio,createdTime:(e==null?void 0:e.taken_at)*1e3,mentions:(T=(C=(x=(y=e==null?void 0:e.text_post_app_info)==null?void 0:y.text_fragments)==null?void 0:x.fragments)==null?void 0:C.filter(o=>(o==null?void 0:o.fragment_type)==="mentrion"))==null?void 0:T.map(o=>{var b,E,F,Q;return{id:(E=(b=o==null?void 0:o.mention_fragment)==null?void 0:b.mentioned_user)==null?void 0:E.id,username:(Q=(F=o==null?void 0:o.mention_fragment)==null?void 0:F.mentioned_user)==null?void 0:Q.username,text:o==null?void 0:o.plaintext}}),likeCount:e==null?void 0:e.like_count,replyCount:(k=e==null?void 0:e.text_post_app_info)==null?void 0:k.direct_reply_count,repostCount:(N=e==null?void 0:e.text_post_app_info)==null?void 0:N.repost_count,quoteCount:(P=e==null?void 0:e.text_post_app_info)==null?void 0:P.quote_count,isGenAI:((S=e==null?void 0:e.gen_ai_detection_method)==null?void 0:S.detection_method)!="NONE",cursor:(a==null?void 0:a.cursor)||(c==null?void 0:c.end_cursor),raw:a}}var v=(a=>(a.Threads="Threads",a.Replies="Replies",a.Reposts="Reposts",a))(v||{});const R={Threads:{first:{name:"BarcelonaProfileThreadsTabQuery",doc_id:"8436285959793247"},withCursor:{name:"BarcelonaProfileThreadsTabRefetchableQuery",doc_id:"8921337961211543"}},Replies:{first:{name:"BarcelonaProfileRepliesTabQuery",doc_id:"8488857591189950"},withCursor:{name:"BarcelonaProfileRepliesTabRefetchableQuery",doc_id:"8562442443831413"}},Reposts:{first:{name:"BarcelonaProfileRepostsTabQuery",doc_id:"8425754140878176"},withCursor:{name:"BarcelonaProfileRepostsTabRefetchableQuery",doc_id:"9365308133484269"}}};async function ee(a="",c="",n="Threads"){let e;if(c){const t=await O({fb_api_req_friendly_name:R[n].withCursor.name,variables:{after:c,before:null,first:10,last:null,userID:a,__relay_internal__pv__BarcelonaIsLoggedInrelayprovider:!0,__relay_internal__pv__BarcelonaIsInlineReelsEnabledrelayprovider:!1,__relay_internal__pv__BarcelonaOptionalCookiesEnabledrelayprovider:!0,__relay_internal__pv__BarcelonaShowReshareCountrelayprovider:!1,__relay_internal__pv__BarcelonaQuotedPostUFIEnabledrelayprovider:!1,__relay_internal__pv__BarcelonaIsCrawlerrelayprovider:!1,__relay_internal__pv__BarcelonaShouldShowFediverseM075Featuresrelayprovider:!0},doc_id:R[n].withCursor.doc_id});e=L(t)}else{const t=await O({fb_api_req_friendly_name:R[n].first.name,variables:{userID:a,__relay_internal__pv__BarcelonaIsLoggedInrelayprovider:!0,__relay_internal__pv__BarcelonaIsInlineReelsEnabledrelayprovider:!1,__relay_internal__pv__BarcelonaOptionalCookiesEnabledrelayprovider:!0,__relay_internal__pv__BarcelonaShowReshareCountrelayprovider:!1,__relay_internal__pv__BarcelonaQuotedPostUFIEnabledrelayprovider:!1,__relay_internal__pv__BarcelonaIsCrawlerrelayprovider:!1,__relay_internal__pv__BarcelonaShouldShowFediverseM075Featuresrelayprovider:!0},doc_id:R[n].first.doc_id});e=L(t)}console.log(e);const{edges:m=[],page_info:f={}}=G(e);return m.map(t=>$(t,f))}const D={[v.Threads]:{en:"📝 Posts",vi:"📝 Posts"},[v.Replies]:{en:"💬 Replies",vi:"💬 Replies"},[v.Reposts]:{en:"🔁 Reposts",vi:"🔁 Reposts"}};function Oe({target:a}){const{ti:c}=M(),[n,e]=j.useState(v.Threads),m=j.useCallback(async(r=[],_)=>{var l;return a!=null&&a.id?await ee(a.id,_||((l=r[r.length-1])==null?void 0:l.cursor),n):void 0},[a,n]),f=j.useCallback((r,_)=>s.jsx(J,{type:"new",children:s.jsx(U,{disabled:_,value:n,onChange:e,style:{width:"150px"},children:Object.entries(v).map(([d,l])=>s.jsx(U.Option,{value:l,children:c(D[l])},d))})}),[n,c]),t=j.useCallback(r=>{var i,p,h,y;const _=r.image||r.video||((i=r.carousel)==null?void 0:i.length),d="isCarouselItem"in r,l=d?null:s.jsx(V,{type:"default",icon:s.jsx("i",{className:"fa-solid fa-up-right-from-square"}),style:{position:"absolute",bottom:10,right:10},className:"show-on-hover-item",target:"_blank",href:z("@"+(a==null?void 0:a.id)+"/post/"+r.code)}),u=d?null:s.jsxs(K,{direction:"vertical",size:0,style:{position:"absolute",top:0,left:0,width:"100%",height:"100%",pointerEvents:"none",paddingTop:5,paddingLeft:10},children:[s.jsxs("span",{children:[s.jsx("i",{className:"fa fa-thumbs-up"})," ",g(r.likeCount)]}),s.jsxs("span",{children:[s.jsx("i",{className:"fa fa-comment"})," ",g(r.replyCount)]}),s.jsxs("span",{children:[s.jsx("i",{className:"fa fa-retweet"})," ",g(r.repostCount)]}),s.jsxs("span",{children:[s.jsx("i",{className:"fa fa-quote-left"})," ",g(r.quoteCount)]}),s.jsxs("span",{children:[s.jsx("i",{className:"fa fa-clock"})," ",H(r.createdTime)]})]});return _?s.jsxs(B.Item,{children:[s.jsxs("div",{className:"show-on-hover-trigger",children:[s.jsx(X,{src:r.image,width:250,height:250,style:{objectFit:"cover",borderRadius:10},preview:r.video||(p=r.carousel)!=null&&p.length?{destroyOnClose:!0,imageRender:()=>{var x;return(x=r.carousel)!=null&&x.length?s.jsx(Z,{style:{maxWidth:"90vw",maxHeight:"90vh",alignItems:"center",overflowY:"auto",overflowX:"hidden",padding:20,borderRadius:10},children:s.jsx(B,{grid:{gutter:10},style:{width:"100%"},dataSource:r.carousel,renderItem:t,rowKey:C=>C.id})}):s.jsx(Y,{src:r.video,style:{maxWidth:"90vw",maxHeight:"90vh"}})},toolbarRender:()=>null}:void 0}),l]}),s.jsx("p",{style:{wordWrap:"break-word",maxWidth:250,padding:5},title:r.caption,children:q(r.caption,80)}),s.jsx("div",{style:{position:"absolute",top:10,right:10,pointerEvents:"none"},children:((h=r.carousel)==null?void 0:h.length)>0?s.jsxs(s.Fragment,{children:[s.jsx("span",{children:(y=r.carousel)==null?void 0:y.length}),W.IGCarousel]}):r.video?W.IGVideo:null}),u]}):s.jsx(B.Item,{children:s.jsxs("div",{className:"show-on-hover-trigger",children:[s.jsx("div",{style:{width:250,height:250,display:"flex",justifyContent:"center",alignItems:"center"},children:s.jsx("p",{style:{wordWrap:"break-word",padding:5},title:r.caption,children:q(r.caption,200)})}),l,u]})})},[]),w=j.useCallback((r,_)=>{var l,u;if(!r.video&&!r.image&&((l=r.carousel)==null?void 0:l.length)===0)return[];function d(i,p=""){const h=!!i.video;return{url:h?i.video:i.image,name:p+i.id+(h?".mp4":".jpg")}}return((u=r.carousel)==null?void 0:u.length)>0?r.carousel.map((i,p)=>d(i,p+"_")):d(r)},[]);return a!=null&&a.username?s.jsx(A,{collectionName:(a==null?void 0:a.username)+" - Threads "+c(D[n]),fetchNext:m,renderItem:t,downloadItem:w,headerButtons:f,getItemCursor:r=>r.cursor||"",rowKey:r=>r.id}):null}export{Oe as default};
