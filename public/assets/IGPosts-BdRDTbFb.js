import{r as _,aA as t,aB as g}from"./index-D5lrbfGq.js";import{D as f,E as j,S as w,at as I}from"./MyApp-B2cDPPVC.js";import{i as v}from"./icons-7jaYhvNm.js";import{C as P}from"./Collection-Y8JvGV6r.js";import{f as x,b as d,c as C}from"./core-DQ2blHsT.js";import{V as k}from"./VideoWithMuted-BrEO7g-w.js";import{L as b}from"./index-cS5JonDJ.js";import{I as S}from"./index-ieiKbi_J.js";import"./index-MBG2ZgWf.js";import"./file-download-_Qmun7WT.js";import"./index-DUyg8ciO.js";import"./Dropdown-hE1e3b6i.js";import"./PurePanel-BYOCgcxL.js";import"./index-CJnIgwRS.js";import"./index-Qdokcq0R.js";import"./index-DLmnfD3x.js";import"./EyeOutlined-85kQT3d7.js";import"./SearchOutlined-rn9UWWMg.js";import"./index-BchjEMvi.js";import"./Pagination-DLnZQEII.js";import"./useBreakpoint-jot_nTav.js";import"./responsiveObserver-VKse1QGe.js";import"./index-DeNSjtoI.js";import"./row-DZePA1Vc.js";import"./addEventListener-CSC_DLzP.js";async function F(s="",u=""){let l;if(u){const o=await x({fb_api_req_friendly_name:"PolarisProfilePostsTabContentDirectQuery_connection",variables:{after:u,before:null,data:{count:12,include_relationship_info:!0,latest_besties_reel_media:!0,latest_reel_media:!0},first:12,last:null,username:s,__relay_internal__pv__PolarisFeedShareMenurelayprovider:!0},doc_id:"7935114066569227"});l=f(o),console.log("cursor fetch",l)}else{const o=await x({fb_api_req_friendly_name:"PolarisProfilePostsDirectQuery",variables:{data:{count:12,include_relationship_info:!0,latest_besties_reel_media:!0,latest_reel_media:!0},username:s,__relay_internal__pv__PolarisFeedShareMenurelayprovider:!0},doc_id:"7898261790222653"});l=f(o),console.log("first fetch",l)}const{edges:m=[],page_info:e={}}=j(l);return console.log(l),m.map(o=>{var a,i,n,c;const r=((a=o==null?void 0:o.node)==null?void 0:a.media)||(o==null?void 0:o.node);return{id:r==null?void 0:r.id,post_id:r==null?void 0:r.code,caption:((i=r==null?void 0:r.caption)==null?void 0:i.text)||"",video:d(r==null?void 0:r.video_versions),image:d((n=r==null?void 0:r.image_versions2)==null?void 0:n.candidates),carousel:(c=r==null?void 0:r.carousel_media)==null?void 0:c.map((p,y)=>{var h;return{id:p.id,post_id:r==null?void 0:r.code,index:y+1,video:d(p.video_versions),image:d((h=p.image_versions2)==null?void 0:h.candidates)}}),created_at:(r==null?void 0:r.taken_at)*1e3,like_count:r==null?void 0:r.like_count,comment_count:r==null?void 0:r.comment_count,cursor:(o==null?void 0:o.cursor)||(e==null?void 0:e.end_cursor)}}).filter(o=>o.image||o.video)}function er({target:s}){const u=_.useCallback(async(e=[],o)=>{var a;return s!=null&&s.id?await F(s.username,o||((a=e[e.length-1])==null?void 0:a.cursor)):void 0},[s]),l=_.useCallback(e=>{var o,r,a;return t.jsxs(b.Item,{children:[t.jsxs("div",{className:"show-on-hover-trigger",children:[t.jsx(S,{src:e.image,width:250,height:250,style:{objectFit:"cover",borderRadius:10},preview:e.video||(o=e.carousel)!=null&&o.length?{destroyOnClose:!0,imageRender:()=>{var i;return(i=e.carousel)!=null&&i.length?t.jsx(w,{style:{maxWidth:"90vw",maxHeight:"90vh",alignItems:"center",overflowY:"auto",overflowX:"hidden",backgroundColor:"#111",padding:20,borderRadius:10},children:t.jsx(b,{grid:{gutter:10},style:{width:"100%"},dataSource:e.carousel,renderItem:l,rowKey:n=>n.id})}):t.jsx(k,{src:e.video,style:{maxWidth:"90vw",maxHeight:"90vh"}})},toolbarRender:()=>null}:void 0}),t.jsx(g,{type:"default",icon:t.jsx("i",{className:"fa-solid fa-up-right-from-square"}),style:{position:"absolute",bottom:10,right:10},className:"show-on-hover-item",target:"_blank",href:C("p/"+e.post_id+(e.index?"/?img_index="+e.index:""))})]}),t.jsx("p",{style:{wordWrap:"break-word",maxWidth:250,padding:5},title:e.caption,children:I(e.caption,30)}),t.jsx("div",{style:{position:"absolute",top:10,right:10,pointerEvents:"none"},children:((r=e.carousel)==null?void 0:r.length)>0?t.jsxs(t.Fragment,{children:[t.jsx("span",{children:(a=e.carousel)==null?void 0:a.length}),v.IGCarousel]}):e.video?v.IGVideo:null})]})},[]),m=_.useCallback((e,o)=>{var a;function r(i,n=""){const c=!!i.video;return{url:c?i.video:i.image,name:n+i.id+(c?".mp4":".jpg")}}return((a=e.carousel)==null?void 0:a.length)>0?e.carousel.map((i,n)=>r(i,n+"_")):r(e)},[]);return t.jsx(P,{collectionName:(s==null?void 0:s.username)+" - IG Posts",fetchNext:u,renderItem:l,downloadItem:m,getItemCursor:e=>e.cursor||"",rowKey:e=>e.id})}export{er as default};