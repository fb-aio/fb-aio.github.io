System.register(["./index-legacy-MM7QpYDf.js","./Collection-legacy-BhZJEUEX.js","./MyApp-legacy-DjqgWZRM.js","./reels-legacy-OsU5xzeA.js","./index-legacy-BZMtW2Os.js","./index-legacy-DE5YhlgN.js","./index-legacy-CyvhYVx7.js","./index-legacy-BqUGUNrH.js","./file-download-legacy-CWk6jQBb.js","./index-legacy-B3gjnIVl.js","./Dropdown-legacy-BRPE420g.js","./PurePanel-legacy-C7JfcBct.js","./move-legacy-B23r_VC3.js","./index-legacy-CnBhYBgM.js","./index-legacy-Baxx6RcS.js","./TextArea-legacy-CzPfjqQ-.js","./EyeOutlined-legacy-0JOhDrKW.js","./SearchOutlined-legacy-CLDKS3aV.js","./index-legacy-DNVoSrry.js","./Pagination-legacy-D0ODMQoY.js","./useBreakpoint-legacy-SzHKfcY2.js","./responsiveObserver-legacy-BTVQxjT9.js","./index-legacy-BcqbCVdp.js","./DownOutlined-legacy-BTLdjjW_.js","./row-legacy-BdnYG62Z.js","./videos-legacy-BSR1KzOi.js","./addEventListener-legacy-CmbBHIPb.js"],(function(e,l){"use strict";var s,a,n,i,r,t,c,o,d,u,g,j,y,h,m,x,f;return{setters:[e=>{s=e.aK,a=e.r,n=e.aM,i=e.aQ,r=e.bb,t=e.cu,c=e.b5,o=e.b4,d=e.b6,u=e.aY},e=>{g=e.default},e=>{j=e.S,y=e.a},e=>{h=e.g},e=>{m=e.L},e=>{x=e.I},e=>{f=e.T},null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],execute:function(){e("default",(function({target:e}){const{ti:l}=s(),u=a.useCallback((async(l=[],s)=>{if(e?.id&&e?.type)return s=s||l?.[l?.length-1]?.cursor||"",await h({id:e.id,cursor:s})}),[e]),b=a.useCallback((async e=>({url:e.source,name:e.id+".mp4"})),[]),v=a.useCallback((e=>n.jsx(m.Item,{children:n.jsxs(j,{direction:"vertical",children:[n.jsxs("div",{className:"show-on-hover-trigger",children:[n.jsx(x,{src:e.thumbnail,width:200,height:300,style:{objectFit:"cover",borderRadius:10},preview:{destroyOnClose:!0,imageRender:()=>n.jsx(p,{info:e,style:{maxWidth:"90vw",maxHeight:"90vh"}}),toolbarRender:()=>null}}),n.jsx(i,{type:"default",icon:n.jsx("i",{className:"fa-solid fa-up-right-from-square"}),style:{position:"absolute",bottom:10,right:10},className:"show-on-hover-item",target:"_blank",href:y(e.id)})]}),n.jsx(f.Paragraph,{style:{maxWidth:"150px",wordWrap:"break-word"},onClick:()=>window.open(e.url),children:r(e.description,100)}),n.jsxs(j,{direction:"vertical",size:1,style:{position:"absolute",top:0,left:0,padding:10,paddingBottom:50,width:"100%",background:"linear-gradient(180deg, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0) 100%)",pointerEvents:"none"},children:[n.jsxs(j,{children:[n.jsx("i",{className:"fa-regular fa-eye"}),e.viewCount]}),n.jsxs(j,{children:[n.jsx("i",{className:"fa-solid fa-film"}),e.length?t(e.length):null]}),n.jsxs(j,{children:[n.jsx("i",{className:"fa-regular fa-clock"}),c(parseInt(e.created_time))]}),e.music?n.jsxs(j,{align:"start",size:4,children:[n.jsx("i",{className:"fa-solid fa-music"})," ",e.music]}):null]})]})})),[]);return n.jsx(g,{collectionName:e?.name+" - Reels",fetchNext:u,renderItem:v,downloadItem:b,getItemCursor:e=>e.cursor,rowKey:e=>e.id,searchPlaceholder:e=>l({en:`Seach in ${e?.length} Reels`,vi:`Tìm kiếm trong ${e?.length} Reels`}),onSearch:(e,s)=>o(e,s.description+s.music+d(s.created_time,l({en:"en-US",vi:"vi-VN"})))})}));const p=a.lazy((()=>u((()=>l.import("./VideoViewer-legacy-DsMidBQ0.js")),void 0,l.meta.url)))}}}));
