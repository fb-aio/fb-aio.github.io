const __vite__fileDeps=["./ImageLazyPreview-BjDgsz2d.js","./index-C9_rgvyn.js","./index-DjlRUb8J.css","./MyApp-B9X4r0Ho.js","./index-D248nu2-.js","./addEventListener-D-HlkRgt.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{r as d,ap as P,at as A}from"./index-C9_rgvyn.js";import{C as N}from"./Collection-Bi6Q4O9-.js";import{z as x,u as k,N as M}from"./MyApp-B9X4r0Ho.js";import{L as F}from"./index-D1Tv8pUE.js";import"./index-Ck3IR4b_.js";import"./file-download-CCDrGQvs.js";import"./index-DI40Hj90.js";import"./Dropdown-8r3ogry8.js";import"./PurePanel-CirxCNrT.js";import"./index-BmArwcYo.js";import"./index-Dy9Krycy.js";import"./index-DHkNXBX0.js";import"./TextArea-BpUS54Nr.js";import"./addEventListener-D-HlkRgt.js";import"./index-CRhRET-T.js";import"./index-Dn6Qk27R.js";import"./Pagination-SkE80AQ-.js";import"./useBreakpoint-f2nhRaWF.js";import"./responsiveObserver-HtTIRlrG.js";import"./row-BhII2r71.js";async function G({id:n,count:l=8,cursor:m=""}){var p,c;const r=await x({doc_id:"4820192058049838",fb_api_caller_class:"RelayModern",fb_api_req_friendly_name:"ProfileCometAppCollectionPhotosRendererPaginationQuery",variables:{count:l,cursor:m,scale:1,id:btoa(`app_collection:${n}:2305272732:5`)}}),o=JSON.parse(r),{edges:t=[],page_info:s}=((c=(p=o==null?void 0:o.data)==null?void 0:p.node)==null?void 0:c.pageItems)||{};return{photos:t.map(i=>{var a,_,e,u,h,y,b,f,C,v,w,I,E,R,S;return{id:atob((a=i==null?void 0:i.node)==null?void 0:a.id).split(":").pop(),url:(_=i==null?void 0:i.node)==null?void 0:_.url,thumbnail:(u=(e=i==null?void 0:i.node)==null?void 0:e.image)==null?void 0:u.uri,image:(b=(y=(h=i==null?void 0:i.node)==null?void 0:h.node)==null?void 0:y.viewer_image)==null?void 0:b.uri,width:(v=(C=(f=i==null?void 0:i.node)==null?void 0:f.node)==null?void 0:C.viewer_image)==null?void 0:v.width,height:(E=(I=(w=i==null?void 0:i.node)==null?void 0:w.node)==null?void 0:I.viewer_image)==null?void 0:E.height,accessibility_caption:(S=(R=i==null?void 0:i.node)==null?void 0:R.node)==null?void 0:S.accessibility_caption,cursor:i==null?void 0:i.cursor}}),page_info:s}}async function O({id:n,count:l=8,cursor:m=""}){var p,c,i;const r=await x({doc_id:"6022153214500431",fb_api_caller_class:"RelayModern",fb_api_req_friendly_name:"GroupsCometMediaPhotosTabGridQuery",variables:{count:l,cursor:m,scale:1,id:n}}),o=JSON.parse(r),{edges:t=[],page_info:s}=((i=(c=(p=o==null?void 0:o.data)==null?void 0:p.node)==null?void 0:c.group_mediaset)==null?void 0:i.media)||{};return{photos:t.map(a=>{var _,e,u,h,y,b,f,C,v,w,I;return{id:(_=a==null?void 0:a.node)==null?void 0:_.id,url:(e=a==null?void 0:a.node)==null?void 0:e.url,thumbnail:(h=(u=a==null?void 0:a.node)==null?void 0:u.image)==null?void 0:h.uri,image:(b=(y=a==null?void 0:a.node)==null?void 0:y.viewer_image)==null?void 0:b.uri,width:(C=(f=a==null?void 0:a.node)==null?void 0:f.viewer_image)==null?void 0:C.width,height:(w=(v=a==null?void 0:a.node)==null?void 0:v.viewer_image)==null?void 0:w.height,accessibility_caption:(I=a==null?void 0:a.node)==null?void 0:I.accessibility_caption,cursor:a==null?void 0:a.cursor}}),page_info:s}}async function L(n){var o,t,s;const l=await x({fb_api_req_friendly_name:"CometPhotoRootContentQuery",variables:{UFI2CommentsProvider_commentsKey:"CometPhotoRootQuery",feedbackSource:65,feedLocation:"COMET_MEDIA_VIEWER",isMediaset:!1,nodeID:n,privacySelectorRenderLocation:"COMET_MEDIA_VIEWER",renderLocation:"permalink",scale:2,useDefaultActor:!1,useHScroll:!1,focusCommentID:null,displayCommentsContextEnableComment:null,displayCommentsContextIsAdPreview:null,displayCommentsContextIsAggregatedShare:null,displayCommentsContextIsStorySet:null,displayCommentsFeedbackContext:null,__relay_internal__pv__CometUFIReactionEnableShortNamerelayprovider:!0,__relay_internal__pv__CometUFIShareActionMigrationrelayprovider:!1,__relay_internal__pv__CometUFIReactionsEnableShortNamerelayprovider:!1,__relay_internal__pv__CometImmersivePhotoCanUserDisable3DMotionrelayprovider:!1},doc_id:"7830475950340566"}),m=JSON.parse(((o=l==null?void 0:l.split(`
`))==null?void 0:o[0])||"{}"),r=((t=m==null?void 0:m.data)==null?void 0:t.currMedia)||{};return{id:n,url:(s=r.creation_story)==null?void 0:s.url,accessibility_caption:r.accessibility_caption,image:r.image.uri,width:r.image.width,height:r.image.height,thumbnail:r.image.uri}}const T=d.lazy(()=>A(()=>import("./ImageLazyPreview-BjDgsz2d.js"),__vite__mapDeps([0,1,2,3,4,5]),import.meta.url));function no({target:n}){k();const l=d.useCallback(async(o=[],t)=>{var c;if(!(n!=null&&n.id)||!(n!=null&&n.type))return;const s=t||((c=o==null?void 0:o[(o==null?void 0:o.length)-1])==null?void 0:c.cursor)||"";return(n.type===M.Group?await O({id:n.id,cursor:s}):await G({id:n.id,cursor:s})).photos},[n]),m=d.useCallback(o=>P.jsx(F.Item,{children:P.jsx(T,{src:o.thumbnail,alt:o.accessibility_caption,width:150,height:150,style:{objectFit:"cover",borderRadius:"10px"},cacheId:"photos."+o.id,getPreview:()=>o.image||L(o.id).then(t=>t.image)})}),[]),r=d.useCallback(async(o,t)=>{if(!o.image&&(n==null?void 0:n.type)===M.Group){const s=await L(o.id);o.image=s.image||s.thumbnail||o.thumbnail}return{url:o.image,name:o.id+".jpg"}},[n==null?void 0:n.id]);return P.jsx(N,{collectionName:(n==null?void 0:n.name)+" - Photos",fetchNext:l,renderItem:m,downloadItem:r,getItemCursor:o=>o.cursor||"",rowKey:o=>o.id})}export{no as default};
