import{r as _,av as i,aw as g}from"./index-DfeJS4yj.js";import{C as y,b as j,ad as w}from"./MyApp-DRTJ3-RF.js";import{i as f}from"./icons-ulWexJTC.js";import{C as I}from"./Collection-DwA__Id4.js";import{f as v,g as d,a as C}from"./index-FGJP-0hv.js";import{V as P}from"./VideoWithMuted-BeRXkbug.js";import{L as x}from"./index-CXnGvZa6.js";import{I as k}from"./index-BuIpr2Ji.js";import"./index-Bq-8KAg8.js";import"./file-download-DKE1gEMz.js";import"./index-B2NfnJLp.js";import"./Dropdown-wbEpmdUO.js";import"./PurePanel-CkxJuFSA.js";import"./index-DC_RgKwv.js";import"./index-BUKYslbI.js";import"./index-BSlg756h.js";import"./EyeOutlined-DaQNGUQB.js";import"./SearchOutlined-U8cQy93K.js";import"./index-FRAuyEda.js";import"./videos-DdLNCOur.js";import"./index-DSWjdKaI.js";import"./responsiveObserver-DicDROP5.js";import"./useBreakpoint-DBigmd4k.js";import"./index-gCC92_kJ.js";import"./index-D6LhUNTR.js";import"./index-BKCoboe1.js";import"./index-IA3fIG2B.js";import"./Pagination-DLQowsjQ.js";import"./row-HvzDZvNV.js";import"./addEventListener-DZ3cvFTz.js";async function N(s="",u=""){let l;if(u){const o=await v({fb_api_req_friendly_name:"PolarisProfilePostsTabContentDirectQuery_connection",variables:{after:u,before:null,data:{count:12,include_relationship_info:!0,latest_besties_reel_media:!0,latest_reel_media:!0},first:12,last:null,username:s,__relay_internal__pv__PolarisFeedShareMenurelayprovider:!0},doc_id:"7935114066569227"});l=JSON.parse(o),console.log("cursor fetch",l)}else{const o=await v({fb_api_req_friendly_name:"PolarisProfilePostsDirectQuery",variables:{data:{count:12,include_relationship_info:!0,latest_besties_reel_media:!0,latest_reel_media:!0},username:s,__relay_internal__pv__PolarisFeedShareMenurelayprovider:!0},doc_id:"7898261790222653"});l=JSON.parse(o),console.log("first fetch",l)}const{edges:m=[],page_info:e={}}=y(l);return console.log(l),m.map(o=>{var a,t,n,c;const r=((a=o==null?void 0:o.node)==null?void 0:a.media)||(o==null?void 0:o.node);return{id:r==null?void 0:r.id,post_id:r==null?void 0:r.code,caption:((t=r==null?void 0:r.caption)==null?void 0:t.text)||"",video:d(r==null?void 0:r.video_versions),image:d((n=r==null?void 0:r.image_versions2)==null?void 0:n.candidates),carousel:(c=r==null?void 0:r.carousel_media)==null?void 0:c.map((p,b)=>{var h;return{id:p.id,post_id:r==null?void 0:r.code,index:b+1,video:d(p.video_versions),image:d((h=p.image_versions2)==null?void 0:h.candidates)}}),created_at:(r==null?void 0:r.taken_at)*1e3,like_count:r==null?void 0:r.like_count,comment_count:r==null?void 0:r.comment_count,cursor:(o==null?void 0:o.cursor)||(e==null?void 0:e.end_cursor)}}).filter(o=>o.image||o.video)}function sr({target:s}){const u=_.useCallback(async(e=[],o)=>{var a;return s!=null&&s.id?await N(s.igName,o||((a=e[e.length-1])==null?void 0:a.cursor)):void 0},[s]),l=_.useCallback(e=>{var o,r,a;return i.jsxs(x.Item,{children:[i.jsxs("div",{className:"show-on-hover-trigger",children:[i.jsx(k,{src:e.image,width:250,height:250,style:{objectFit:"cover",borderRadius:10},preview:e.video||(o=e.carousel)!=null&&o.length?{destroyOnClose:!0,imageRender:()=>{var t;return(t=e.carousel)!=null&&t.length?i.jsx(j,{style:{maxWidth:"90vw",maxHeight:"90vh",alignItems:"center",overflowY:"auto",overflowX:"hidden",backgroundColor:"#111",padding:20,borderRadius:10},children:i.jsx(x,{grid:{gutter:10},style:{width:"100%"},dataSource:e.carousel,renderItem:l,rowKey:n=>n.id})}):i.jsx(P,{src:e.video,style:{maxWidth:"90vw",maxHeight:"90vh"}})},toolbarRender:()=>null}:void 0}),i.jsx(g,{type:"default",icon:i.jsx("i",{className:"fa-solid fa-up-right-from-square"}),style:{position:"absolute",bottom:10,right:10},className:"show-on-hover-item",target:"_blank",href:C("p/"+e.post_id+(e.index?"/?img_index="+e.index:""))})]}),i.jsx("p",{style:{wordWrap:"break-word",maxWidth:250,padding:5},title:e.caption,children:w(e.caption,30)}),i.jsx("div",{style:{position:"absolute",top:10,right:10,pointerEvents:"none"},children:((r=e.carousel)==null?void 0:r.length)>0?i.jsxs(i.Fragment,{children:[i.jsx("span",{children:(a=e.carousel)==null?void 0:a.length}),f.IGCarousel]}):e.video?f.IGVideo:null})]})},[]),m=_.useCallback((e,o)=>{var a;function r(t,n=""){const c=!!t.video;return{url:c?t.video:t.image,name:n+t.id+(c?".mp4":".jpg")}}return((a=e.carousel)==null?void 0:a.length)>0?e.carousel.map((t,n)=>r(t,n+"_")):r(e)},[]);return i.jsx(I,{collectionName:(s==null?void 0:s.igName)+" - IG Posts",fetchNext:u,renderItem:l,downloadItem:m,getItemCursor:e=>e.cursor||"",rowKey:e=>e.id})}export{sr as default};
