const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./ImageLazyPreview-BqndawOS.js","./index-Vcj4IeAF.js","./index-CawCDZ84.css","./MyApp-JE0CAMjZ.js","./index-DjscercI.js","./EyeOutlined-B3KAqgpW.js","./addEventListener-B7xMD05D.js"])))=>i.map(i=>d[i]);
import{aw as R,ax as S,az as L,aO as M,r as b,bA as P,aQ as h,aS as k,aU as F,a$ as T}from"./index-Vcj4IeAF.js";import{C as U}from"./Collection-Czzlptje.js";import{u as W}from"./MyApp-JE0CAMjZ.js";import{B as Q}from"./BadgeWrapper-vzMtcEqR.js";import{S as O}from"./index-hB9-56Y0.js";import{L as B}from"./index-CDjx_E5v.js";import"./index-B5Gm6nvB.js";import"./file-download-DBg-_-Y-.js";import"./index-B4bb0pyT.js";import"./Dropdown-BxHEncP7.js";import"./PurePanel-FGUkYzQM.js";import"./index-bQege_zs.js";import"./index-DP9l3btl.js";import"./index-BVuRI7YT.js";import"./EyeOutlined-B3KAqgpW.js";import"./SearchOutlined-CGczHfU6.js";import"./index-BS0N6rpQ.js";import"./Pagination-D72DLZPl.js";import"./useBreakpoint-Ca80yxkY.js";import"./row-hzdKAHXj.js";var C=(o=>(o.OWNER="5",o.TAGGED="4",o))(C||{});async function q({id:o,count:l=8,cursor:m="",type:a="5"}){const c=await R({doc_id:"4820192058049838",fb_api_caller_class:"RelayModern",fb_api_req_friendly_name:"ProfileCometAppCollectionPhotosRendererPaginationQuery",variables:{count:l,cursor:m,scale:1,id:btoa(`app_collection:${o}:2305272732:${a}`)}});let p=S(c),{edges:y=[],page_info:_}=L(p)||{};return y.map(n=>{var s,i,r,e,t,u,d,f,v,w,x,E,I,j,N;return{id:atob((s=n==null?void 0:n.node)==null?void 0:s.id).split(":").pop(),url:(i=n==null?void 0:n.node)==null?void 0:i.url,thumbnail:(e=(r=n==null?void 0:n.node)==null?void 0:r.image)==null?void 0:e.uri,image:(d=(u=(t=n==null?void 0:n.node)==null?void 0:t.node)==null?void 0:u.viewer_image)==null?void 0:d.uri,width:(w=(v=(f=n==null?void 0:n.node)==null?void 0:f.node)==null?void 0:v.viewer_image)==null?void 0:w.width,height:(I=(E=(x=n==null?void 0:n.node)==null?void 0:x.node)==null?void 0:E.viewer_image)==null?void 0:I.height,accessibility_caption:(N=(j=n==null?void 0:n.node)==null?void 0:j.node)==null?void 0:N.accessibility_caption,cursor:n==null?void 0:n.cursor,photo_type:a}})}async function z({id:o,count:l=8,cursor:m=""}){var _,n,s;const a=await R({doc_id:"6022153214500431",fb_api_caller_class:"RelayModern",fb_api_req_friendly_name:"GroupsCometMediaPhotosTabGridQuery",variables:{count:l,cursor:m,scale:2,id:o}}),c=S(a);console.log(c);const{edges:p=[],page_info:y}=((s=(n=(_=c==null?void 0:c.data)==null?void 0:_.node)==null?void 0:n.group_mediaset)==null?void 0:s.media)||{};return p.map(i=>{var r,e,t,u,d,f,v,w,x,E,I;return{id:(r=i==null?void 0:i.node)==null?void 0:r.id,url:(e=i==null?void 0:i.node)==null?void 0:e.url,thumbnail:(u=(t=i==null?void 0:i.node)==null?void 0:t.image)==null?void 0:u.uri,image:(f=(d=i==null?void 0:i.node)==null?void 0:d.viewer_image)==null?void 0:f.uri,width:(w=(v=i==null?void 0:i.node)==null?void 0:v.viewer_image)==null?void 0:w.width,height:(E=(x=i==null?void 0:i.node)==null?void 0:x.viewer_image)==null?void 0:E.height,accessibility_caption:(I=i==null?void 0:i.node)==null?void 0:I.accessibility_caption,cursor:i==null?void 0:i.cursor}})}async function A(o){var c,p,y,_,n,s,i;const l=await R({fb_api_req_friendly_name:"CometPhotoRootContentQuery",variables:{UFI2CommentsProvider_commentsKey:"CometPhotoRootQuery",feedbackSource:65,feedLocation:"COMET_MEDIA_VIEWER",isMediaset:!1,nodeID:o,privacySelectorRenderLocation:"COMET_MEDIA_VIEWER",renderLocation:"permalink",scale:2,useDefaultActor:!1,useHScroll:!1,focusCommentID:null,displayCommentsContextEnableComment:null,displayCommentsContextIsAdPreview:null,displayCommentsContextIsAggregatedShare:null,displayCommentsContextIsStorySet:null,displayCommentsFeedbackContext:null,__relay_internal__pv__CometUFIReactionEnableShortNamerelayprovider:!0,__relay_internal__pv__CometUFIShareActionMigrationrelayprovider:!1,__relay_internal__pv__CometUFIReactionsEnableShortNamerelayprovider:!1,__relay_internal__pv__CometImmersivePhotoCanUserDisable3DMotionrelayprovider:!1},doc_id:"7830475950340566"}),m=S(((c=l==null?void 0:l.split(`
`))==null?void 0:c[0])||"{}"),a=((p=m==null?void 0:m.data)==null?void 0:p.currMedia)||{};return{id:o,url:(y=a.creation_story)==null?void 0:y.url,accessibility_caption:a.accessibility_caption,image:(_=a.image)==null?void 0:_.uri,width:(n=a.image)==null?void 0:n.width,height:(s=a.image)==null?void 0:s.height,thumbnail:(i=a.image)==null?void 0:i.uri}}const V=b.lazy(()=>T(()=>import("./ImageLazyPreview-BqndawOS.js"),__vite__mapDeps([0,1,2,3,4,5,6]),import.meta.url)),G={[C.OWNER]:{en:"👤 Owner",vi:"👤 Chính chủ"},[C.TAGGED]:{en:"📌 Tagged",vi:"📌 Được tag"}};function po({target:o}){const{ti:l}=M(),{message:m}=W(),[a,c]=b.useState(C.OWNER);b.useEffect(()=>{o!=null&&o.id&&c(C.OWNER)},[o==null?void 0:o.id]);const p=b.useCallback(async(s,i)=>{var r,e;if(!(!(o!=null&&o.id)||!(o!=null&&o.type)))if(o.type===P.Group){const t=i||((r=s==null?void 0:s[(s==null?void 0:s.length)-1])==null?void 0:r.cursor)||"";return await z({id:o.id,cursor:t})}else{const t=s==null?void 0:s.filter(f=>f.photo_type===a),u=i||((e=t==null?void 0:t[(t==null?void 0:t.length)-1])==null?void 0:e.cursor)||"";return await q({id:o.id,cursor:u,type:a})}},[o,a]),y=b.useCallback((s,i)=>(o==null?void 0:o.type)!==P.Group&&h.jsx(Q,{type:"new",children:h.jsx(O,{disabled:i,value:a,onChange:c,style:{width:"150px"},children:Object.entries(C).map(([r,e])=>h.jsx(O.Option,{value:e,children:l(G[e])},r))})}),[a,l]),_=b.useCallback(s=>h.jsxs(B.Item,{className:"show-on-hover-trigger",children:[h.jsx(V,{src:s.thumbnail,alt:s.accessibility_caption,width:150,height:150,style:{objectFit:"cover",borderRadius:"10px"},cacheId:"photos."+s.id,getPreview:()=>s.image||A(s.id).then(i=>i.image)}),h.jsx(k,{type:"default",icon:h.jsx("i",{className:"fa-solid fa-up-right-from-square"}),style:{position:"absolute",bottom:10,right:10},className:"show-on-hover-item",target:"_blank",href:F(s.id)})]}),[]),n=b.useCallback(async(s,i)=>{if(!s.image&&(o==null?void 0:o.type)===P.Group){const r=await A(s.id);r.image||m.error(l({en:"Cannot get largest photo",vi:"Lỗi lấy ảnh chất lượng cao"})),s.image=r.image||r.thumbnail||s.thumbnail}return{url:s.image,name:s.id+".jpg"}},[o==null?void 0:o.id]);return h.jsx(U,{collectionName:(o==null?void 0:o.name)+" - Photos - "+l(G[a]),fetchNext:p,renderItem:_,downloadItem:n,headerButtons:y,getItemCursor:s=>s.cursor||"",rowKey:s=>s.id})}export{po as default};
