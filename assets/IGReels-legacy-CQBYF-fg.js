System.register(["./index-legacy-Bu_32eia.js","./Collection-legacy-C2SSsHAY.js","./reels-legacy-Bfj-DDqh.js","./core-legacy-DBPLDq8q.js","./VideoWithMuted-legacy-BRtwMIPZ.js","./index-legacy-BC1JWlBc.js","./MyApp-legacy-D2ltwLpZ.js","./index-legacy-CzkZTxVU.js","./file-download-legacy-8gXXMUq-.js","./react-hotkeys-hook.esm-legacy-B5SKwpe9.js","./index-legacy-XuSdRyq-.js","./index-legacy-CQ68Quap.js","./index-legacy-DqCBSgxw.js","./Dropdown-legacy-hTuM3epu.js","./PurePanel-legacy-CtnDvAU8.js","./move-legacy-DTsw1O_w.js","./index-legacy-q7xDyRrp.js","./TextArea-legacy-B6njVpV3.js","./SearchOutlined-legacy-sVv08zO6.js","./index-legacy-DibW4SWu.js","./Pagination-legacy-D9d0kO-W.js","./useBreakpoint-legacy-c1fiAQMY.js","./useForceUpdate-legacy-BDNr-uMd.js","./index-legacy-C3HRofC_.js","./index-legacy-CW6iaX-9.js","./DownOutlined-legacy-BptKd5Bo.js","./row-legacy-DmD1LVVg.js","./col-legacy-DyI1wj2q.js","./videos-legacy-DfFmW5sr.js"],(function(e,l){"use strict";var s,a,t,n,o,i,c,r,u,d;return{setters:[e=>{s=e.r,a=e.aW,t=e.cp,n=e.a_},e=>{o=e.default},e=>{i=e.g},e=>{c=e.c},e=>{r=e.V},e=>{u=e.L},e=>{d=e.I},null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],execute:function(){e("default",(function({target:e}){const l=s.useCallback((async(l=[],s)=>{if(e?.id)return await i(e.id,s||l[l.length-1]?.cursor)}),[e]),g=s.useCallback((e=>a.jsxs(u.Item,{className:"show-on-hover-trigger",children:[a.jsx(d,{src:e.image,width:200,height:330,style:{objectFit:"cover",borderRadius:10},preview:{destroyOnClose:!0,imageRender:()=>a.jsx(r,{src:e.video,style:{maxWidth:"90vw",maxHeight:"90vh"}}),toolbarRender:()=>null}}),a.jsx("div",{style:{position:"absolute",top:0,left:0,width:"100%",height:"100%",background:"linear-gradient(0deg, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0) 50%)",pointerEvents:"none"},children:a.jsxs("div",{style:{position:"absolute",bottom:15,left:15,fontWeight:"bold",fontSize:"1.1em"},children:[a.jsx("i",{className:"fa-solid fa-play"})," ",t(e.play_count),a.jsx("br",{}),a.jsx("i",{className:"fa-solid fa-heart"})," ",t(e.like_count),a.jsx("br",{}),a.jsx("i",{className:"fa-solid fa-message"})," ",t(e.comment_count)]})}),a.jsx(n,{type:"default",icon:a.jsx("i",{className:"fa-solid fa-up-right-from-square"}),style:{position:"absolute",bottom:10,right:10},className:"show-on-hover-item",target:"_blank",href:c("p/"+e.post_id)})]})),[]),j=s.useCallback(((e,l)=>{const s=!!e.video;return{url:s?e.video:e.image,name:e.id+(s?".mp4":".jpg")}}),[]);return a.jsx(o,{collectionName:e?.username+" - IG Reels",fetchNext:l,renderItem:g,downloadItem:j,getItemCursor:e=>e.cursor||"",rowKey:e=>e.id})}))}}}));
