import{aC as j,r as _,aM as t,aQ as g,bb as w}from"./index-Cl5zvECE.js";import{i as f}from"./icons-0croMxrT.js";import{C as I}from"./Collection-BprY70W8.js";import{p as v}from"./MyApp-MWa74BZS.js";import{f as x,b as d,c as C}from"./core-CwIQfcT7.js";import{V as P}from"./VideoWithMuted-D3bNAVsq.js";import{L as b}from"./index-qaAouqGd.js";import{I as k}from"./index-BX3BEfnN.js";import{C as F}from"./index-cVzD34Or.js";import"./index-UFZSW2T7.js";import"./file-download-C-9sVNl1.js";import"./index-Ccw2Qbjw.js";import"./Dropdown-B1hBDzzJ.js";import"./PurePanel-kNhfzRO_.js";import"./move-DMmDJGo1.js";import"./index-DcqzpBZq.js";import"./index-B8klUnWi.js";import"./TextArea-VDCbegm4.js";import"./EyeOutlined-L-Dk1-Mb.js";import"./SearchOutlined-BfbpT0ue.js";import"./index-CPMbgh8k.js";import"./Pagination-DpygRt3E.js";import"./useBreakpoint-CPUsOx0y.js";import"./responsiveObserver-C59psHcs.js";import"./index-CoQ_gU2f.js";import"./index-DGaF8Pk-.js";import"./DownOutlined-DfRI2dhp.js";import"./row-Ce9R-FFN.js";import"./addEventListener-DgsqOKpm.js";import"./index-C0UiY_4F.js";async function G(s="",u=""){let n;if(u){const o=await x({fb_api_req_friendly_name:"PolarisProfilePostsTabContentDirectQuery_connection",variables:{after:u,before:null,data:{count:12,include_relationship_info:!0,latest_besties_reel_media:!0,latest_reel_media:!0},first:12,last:null,username:s,__relay_internal__pv__PolarisFeedShareMenurelayprovider:!0},doc_id:"7935114066569227"});n=v(o),console.log("cursor fetch",n)}else{const o=await x({fb_api_req_friendly_name:"PolarisProfilePostsDirectQuery",variables:{data:{count:12,include_relationship_info:!0,latest_besties_reel_media:!0,latest_reel_media:!0},username:s,__relay_internal__pv__PolarisFeedShareMenurelayprovider:!0},doc_id:"7898261790222653"});n=v(o),console.log("first fetch",n)}const{edges:m=[],page_info:e={}}=j(n);return console.log(n),m.map(o=>{var a,i,l,c;const r=((a=o==null?void 0:o.node)==null?void 0:a.media)||(o==null?void 0:o.node);return{id:r==null?void 0:r.id,post_id:r==null?void 0:r.code,caption:((i=r==null?void 0:r.caption)==null?void 0:i.text)||"",video:d(r==null?void 0:r.video_versions),image:d((l=r==null?void 0:r.image_versions2)==null?void 0:l.candidates),carousel:(c=r==null?void 0:r.carousel_media)==null?void 0:c.map((p,y)=>{var h;return{id:p.id,post_id:r==null?void 0:r.code,index:y+1,video:d(p.video_versions),image:d((h=p.image_versions2)==null?void 0:h.candidates)}}),created_at:(r==null?void 0:r.taken_at)*1e3,like_count:r==null?void 0:r.like_count,comment_count:r==null?void 0:r.comment_count,cursor:(o==null?void 0:o.cursor)||(e==null?void 0:e.end_cursor)}}).filter(o=>o.image||o.video)}function ar({target:s}){const u=_.useCallback(async(e=[],o)=>{var a;return s!=null&&s.id?await G(s.username,o||((a=e[e.length-1])==null?void 0:a.cursor)):void 0},[s]),n=_.useCallback(e=>{var o,r,a;return t.jsxs(b.Item,{children:[t.jsxs("div",{className:"show-on-hover-trigger",children:[t.jsx(k,{src:e.image,width:250,height:250,style:{objectFit:"cover",borderRadius:10},preview:e.video||(o=e.carousel)!=null&&o.length?{destroyOnClose:!0,imageRender:()=>{var i;return(i=e.carousel)!=null&&i.length?t.jsx(F,{style:{maxWidth:"90vw",maxHeight:"90vh",alignItems:"center",overflowY:"auto",overflowX:"hidden",padding:20,borderRadius:10},children:t.jsx(b,{grid:{gutter:10},style:{width:"100%"},dataSource:e.carousel,renderItem:n,rowKey:l=>l.id})}):t.jsx(P,{src:e.video,style:{maxWidth:"90vw",maxHeight:"90vh"}})},toolbarRender:()=>null}:void 0}),t.jsx(g,{type:"default",icon:t.jsx("i",{className:"fa-solid fa-up-right-from-square"}),style:{position:"absolute",bottom:10,right:10},className:"show-on-hover-item",target:"_blank",href:C("p/"+e.post_id+(e.index?"/?img_index="+e.index:""))})]}),t.jsx("p",{style:{wordWrap:"break-word",maxWidth:250,padding:5},title:e.caption,children:w(e.caption,30)}),t.jsx("div",{style:{position:"absolute",top:10,right:10,pointerEvents:"none"},children:((r=e.carousel)==null?void 0:r.length)>0?t.jsxs(t.Fragment,{children:[t.jsx("span",{children:(a=e.carousel)==null?void 0:a.length}),f.IGCarousel]}):e.video?f.IGVideo:null})]})},[]),m=_.useCallback((e,o)=>{var a;function r(i,l=""){const c=!!i.video;return{url:c?i.video:i.image,name:l+i.id+(c?".mp4":".jpg")}}return((a=e.carousel)==null?void 0:a.length)>0?e.carousel.map((i,l)=>r(i,l+"_")):r(e)},[]);return t.jsx(I,{collectionName:(s==null?void 0:s.username)+" - IG Posts",fetchNext:u,renderItem:n,downloadItem:m,getItemCursor:e=>e.cursor||"",rowKey:e=>e.id})}export{ar as default};
