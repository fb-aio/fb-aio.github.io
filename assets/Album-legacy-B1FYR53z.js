System.register(["./index-legacy-DmD19Aid.js","./Collection-legacy-BAVWQsc9.js","./MyApp-legacy-BJbLsob1.js","./albums-legacy-CMYy7bOs.js","./videos-legacy-Bx65ShKX.js","./VideoWithMuted-legacy-qSIO0c2d.js","./index-legacy-DPBaS3h2.js","./index-legacy-DPg2CUMR.js","./file-download-legacy-DSev46T7.js","./react-hotkeys-hook.esm-legacy-DbePOJgt.js","./index-legacy-CvqRES_3.js","./index-legacy-D1fMnGF4.js","./index-legacy--HLK0E8V.js","./index-legacy-B-w8Oe-x.js","./PurePanel-legacy-RuolIxRp.js","./move-legacy-CuAq0P0j.js","./index-legacy-CFyIWi0t.js","./SearchOutlined-legacy-CsuuitbD.js","./index-legacy-B81GI0Xv.js","./Pagination-legacy-Ce7JZ3_r.js","./useBreakpoint-legacy-CFfMZR2S.js","./useForceUpdate-legacy-BPcPPEhm.js","./responsiveObserver-legacy-BCCgsqjX.js","./index-legacy-Cnn3ku5U.js","./List-legacy-CfttBbwf.js","./DownOutlined-legacy-CjjfugjU.js","./row-legacy-apyBUmro.js","./col-legacy-N3ivxPSw.js"],(function(e,l){"use strict";var a,s,n,i,t,c,r,u,o,d,g,y,j,m,h;return{setters:[e=>{a=e.r,s=e.b6,n=e.ba,i=e.bc},e=>{t=e.default},e=>{c=e.g,r=e.A,u=e.I,o=e.ai,d=e.i},e=>{g=e.c,y=e.M},e=>{j=e.g},e=>{m=e.V},e=>{h=e.L},null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],execute:function(){e("default",(function({target:e,albumId:l,album:i}){const b=l||i.id,p=a.useCallback((async(e=[],l)=>{if(b)return await g({albumId:b,accessToken:await c(r.EAAB),fromId:l||e[e.length-1]?.id||""})}),[b]),v=a.useCallback((e=>s.jsxs(h.Item,{className:"show-on-hover-trigger",children:[e.type==y.IMAGE?s.jsx(u,{src:e.uri,width:150,height:150,style:{objectFit:"cover",borderRadius:"10px"}}):s.jsx(x,{src:e.uri,width:150,height:150,style:{objectFit:"cover",borderRadius:"10px"},cacheId:"album_video."+e.id,getPreview:()=>j(e.id).then((e=>e.source)),renderPreview:(e,l)=>({destroyOnClose:!0,imageRender:()=>s.jsx(o,{spinning:l,children:s.jsx(m,{src:e,style:{maxWidth:"90vw",maxHeight:"90vh"}})}),toolbarRender:()=>null})}),s.jsx(n,{type:"default",icon:s.jsx("i",{className:"fa-solid fa-up-right-from-square"}),style:{position:"absolute",bottom:10,right:10},className:"show-on-hover-item",target:"_blank",href:d(e.id)})]})),[]),w=a.useCallback((async e=>e.type==y.IMAGE?{url:e.uri,name:e.id+".jpg"}:{url:(await j(e.id)).source,name:e.id+".mp4"}),[]);return s.jsx(t,{collectionName:e?.name+" - Album "+i.name,fetchNext:p,renderItem:v,downloadItem:w,getItemCursor:e=>e.id,rowKey:e=>e.id})}));const x=a.lazy((()=>i((()=>l.import("./ImageLazyPreview-legacy-CF9JkvwY.js")),void 0,l.meta.url)))}}}));
