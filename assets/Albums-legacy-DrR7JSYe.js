System.register(["./index-legacy-Lkr9bBsN.js","./Collection-legacy-BeiRh3wo.js","./MyApp-legacy-_4SztRAr.js","./albums-legacy-BIN2HtOn.js","./index-legacy-B0Y6Gjsq.js","./index-legacy-lpSV6r-w.js","./index-legacy-dUaceZQv.js","./index-legacy-Bu_mtucN.js","./index-legacy-CCULVf87.js","./file-download-legacy-DGJzHxl5.js","./index-legacy-C5nqZbh5.js","./Dropdown-legacy-BHqZQ4ST.js","./PurePanel-legacy-CJZShqma.js","./index-legacy-COzqP0w0.js","./index-legacy-C_47puaB.js","./EyeOutlined-legacy-UD6Zn1hY.js","./SearchOutlined-legacy-DmbyETCB.js","./index-legacy-DgPb_a_q.js","./Pagination-legacy-ByfjS9LQ.js","./useBreakpoint-legacy-mYTCzhGF.js","./responsiveObserver-legacy-BxgPoWeZ.js","./index-legacy-DhagJSvq.js","./DownOutlined-legacy-Cq4vwu6r.js","./row-legacy-CfpTC8_Z.js","./addEventListener-legacy-MGoeVYEs.js"],(function(e,l){"use strict";var n,a,s,i,t,r,c,o,u,d,g,y,j,h,m,x,b,p,w,f;return{setters:[e=>{n=e.aJ,a=e.r,s=e.aL,i=e.aM,t=e.aP,r=e.b3},e=>{c=e.C},e=>{o=e.w,u=e.f,d=e.A,g=e.S,y=e.B,j=e.a},e=>{h=e.g,m=e.a,x=e.b},e=>{b=e.A},e=>{p=e.L},e=>{w=e.I},e=>{f=e.T},null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],execute:function(){e("default",(function({target:e,onOpenAlbum:l}){const{ti:k}=n(),v=a.useCallback((async(l=[])=>{if(!e?.id||!e?.type)return;const n=l?.[l?.length-1];if(e.type!==o.Group){const l=await h({id:e?.id,accessToken:await u(d.EAAB),fromId:n?.id||""});if(l.albums?.length)return l.albums}const a=e.type===o.Group?await m({groupId:e.id,cursor:n?.cursor}):await x({uid:e.id,cursor:n?.cursor});if(a.albums?.length){let e=new Set(l.map((e=>e.id)));return a.albums.filter((l=>!e.has(l.id)))}return[]}),[e]),C=a.useCallback((()=>s.jsx(g,{children:s.jsx(b,{showIcon:!0,type:"info",message:k({en:"Click any album to view photos",vi:"Click album bất kỳ để xem ảnh"})})})),[k]),A=a.useCallback((e=>s.jsx(p.Item,{children:s.jsxs(g,{direction:"vertical",children:[s.jsx(y.Ribbon,{text:i(e.count),children:s.jsxs("div",{className:"show-on-hover-trigger",children:[s.jsx(w,{src:e.picture,alt:e.name,width:150,height:150,style:{objectFit:"cover",borderRadius:"10px",cursor:"pointer"},preview:!1,onClick:()=>{l?.(e)}}),s.jsx(t,{type:"default",icon:s.jsx("i",{className:"fa-solid fa-up-right-from-square"}),style:{position:"absolute",bottom:10,right:10},className:"show-on-hover-item",target:"_blank",href:j(e.id)})]})}),s.jsx(f.Paragraph,{style:{maxWidth:"150px",wordWrap:"break-word"},onClick:()=>window.open(e.link),children:e.name})]})})),[]);return s.jsx(c,{collectionName:e?.name+" - Albums",fetchNext:v,renderItem:A,rowKey:e=>e.id,header:C,searchPlaceholder:e=>k({en:`Search in ${e?.length} albums...`,vi:`Tìm trong ${e.length} albums...`}),onSearch:(e,l)=>r(e,l.name)})}))}}}));
