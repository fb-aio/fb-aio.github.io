System.register(["./index-legacy-DTLe8kAD.js","./MyApp-legacy-CJmYcBAR.js","./StoryViewers-legacy-76UrChPo.js","./stories-legacy-IC_zY59p.js","./VideoWithMuted-legacy-BbwjzeBM.js","./index-legacy-BgGp0TOt.js","./index-legacy-DjeM-1EL.js","./index-legacy-CmGKfLZo.js","./Collection-legacy-C6aZdUSr.js","./index-legacy-Czdpd784.js","./file-download-legacy-CadI2MJ-.js","./react-hotkeys-hook.esm-legacy-Bwkg78PV.js","./index-legacy-BJ5d0egn.js","./index-legacy-DSwRxTjJ.js","./index-legacy-DViN5dLW.js","./index-legacy-D6I2sCN5.js","./Dropdown-legacy-DZVNfkVQ.js","./PurePanel-legacy-C-GnDDuo.js","./move-legacy-Bhelst4Q.js","./index-legacy-MRBPaTr5.js","./TextArea-legacy-DZro9fgy.js","./SearchOutlined-legacy-CpSkcKg3.js","./index-legacy-Dcn_hJ56.js","./Pagination-legacy-BNB895Ft.js","./useBreakpoint-legacy-BG7XjNpS.js","./useForceUpdate-legacy-C_Sup0cT.js","./index-legacy-Be80bh0z.js","./List-legacy-CBX3Fru0.js","./DownOutlined-legacy-FTWfGM7s.js","./row-legacy-q5PRKH6C.js","./col-legacy-Cr-bP19i.js","./index-legacy-BIVGEDE3.js"],(function(e,i){"use strict";var t,l,s,n,a,r,c,o,d,u,x,j,y,g,h,f,m,v,p;return{setters:[e=>{t=e.aU,l=e.aK,s=e.aI,n=e.aJ,a=e.r,r=e.aW,c=e.bf,o=e.a_},e=>{d=e.k,u=e.S,x=e.I,j=e.h,y=e.f},e=>{g=e.S},e=>{h=e.e},e=>{f=e.V},e=>{m=e.T},e=>{v=e.A},e=>{p=e.T},null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],execute:function(){e("default",(function({story:e}){const{ti:i}=t(),{message:b}=l.useApp(),w=s(n.darkMode),[k,T]=d("ArchivedStoryViewer.stories."+e.creation_time,[]),[_,N]=d("ArchivedStoryViewer.viewingIndex."+e.id,0),[A,S]=a.useState(!1),R=k[_]||k[0],V=R?Object.values(R.viewer_count).reduce(((e,i)=>e+i),0):0,I=R?R.reactions.reduce(((e,i)=>e+i.count),0):0,$=_<k.length-1,F=_>0,L=0===k.length&&!A,O=a.useRef(!1);a.useEffect((()=>{k?.length||!e.creation_time||O.current||(S(!0),O.current=!0,h({creationTime:e.creation_time}).then((i=>{if(i){const t=i.findIndex((i=>i.id===e.id));T(i),N(t)}})).catch((e=>b.error(i({en:"Error: ",vi:"Lỗi: "}))+e.message)).finally((()=>{S(!1),O.current=!1})))}),[]);const P={height:"70vh",width:"calc(70vh * 9 / 16)"},C=a.useRef(null),D=R?[{key:"story",label:r.jsxs(m.Text,{children:[r.jsx("i",{className:"fa fa-play"})," Play"]}),children:r.jsxs(u,{direction:"vertical",style:{position:"relative"},children:[R.video?r.jsx(f,{src:R.video,style:{...P,borderRadius:10,objectFit:"contain"}}):R.image_background?r.jsxs(u,{direction:"vertical",style:{position:"relative"},children:[r.jsx(x,{src:R.image_background,preview:!1,style:{...P,borderRadius:10,objectFit:"contain"}}),r.jsx(x,{src:R.image,style:{...P,borderRadius:10,objectFit:"contain",position:"absolute",bottom:0,left:0,transform:"translate(-50%, 0)",opacity:.5}})]}):r.jsx(x,{src:R.image,style:{...P,borderRadius:10,objectFit:"contain"}}),r.jsx(u,{direction:"vertical",align:"start",style:{background:"linear-gradient(180deg, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0) 100%)",position:"absolute",top:0,left:0,padding:10,width:"100%",paddingBottom:"50px",borderRadius:10},children:[R.comment_count?{icon:r.jsx("i",{className:"fa-solid fa-message"}),text:R.comment_count}:null,R.music?{icon:r.jsx("i",{className:"fa-solid fa-music"}),text:R.music}:null].filter(Boolean).map(((e,i)=>e&&r.jsxs(m.Text,{style:{color:"#eee",textAlign:"left"},children:[e.icon," ",e.text]},"story-statistic-"+i)))})]})},{key:"viewer",label:r.jsxs(m.Text,{children:[r.jsx("i",{className:"fa fa-eye"})," ",V," "]}),children:r.jsxs(u,{direction:"vertical",style:{...P,width:450,overflowY:"auto",overflowX:"hidden",textAlign:"left",position:"relative"},children:[r.jsxs(m.Text,{children:[i({en:"Views",vi:"Lượt xem"}),":"]}),r.jsx("ul",{children:Object.entries(R.viewer_count).map((([e,i])=>r.jsx("li",{children:r.jsxs(m.Text,{style:{color:"#eee"},children:[e,": ",i]})},"story-viewer-"+e)))}),r.jsx(u,{direction:"horizontal",style:{display:"flex",padding:10,alignItems:"center"},children:r.jsxs(m.Text,{style:{textDecoration:"underline"},children:[i({en:"Created date",vi:"Ngày đăng"}),r.jsx(m.Text,{style:{position:"absolute",right:10},children:c(new Date(R.created_at),i({en:"en-US",vi:"vi-VN"}))})]})}),r.jsx(g,{storyId:R.id,initialViewers:R.viewers})]})},{key:"reactions",label:r.jsxs(m.Text,{children:[r.jsx("i",{className:"fa fa-heart"})," ",I," "]}),children:r.jsxs(u,{direction:"vertical",style:{overflowY:"auto",...P},align:"start",children:[r.jsxs(m.Text,{children:[i({en:"Reactions",vi:"Lượt thích"}),":"]}),R.reactions.map(((e,i)=>r.jsxs(m.Link,{href:j(e.uid),style:{padding:"0 5px 5px",display:"block"},target:"_blank",children:[r.jsx(v,{src:y(e.uid,50),size:35}),r.jsx(m.Text,{style:{color:"#eee",textAlign:"left"},children:` ${e.count} ${e.reactions}`},"story-reaction-"+i)]},"story-reaction-"+i)))]})}]:[];return r.jsxs(u,{direction:"vertical",style:{maxHeight:"100vh",overflowY:"auto",overflowX:"hidden",minWidth:P.width,minHeight:P.height,background:w?"#222":"#eee",color:w?"white":"#111",padding:10,borderRadius:10},ref:C,children:[r.jsxs(m.Text,{children:["Archived Story Viewer"," ",A?r.jsx("i",{className:"fa fa-spinner fa-spin"}):`(${_+1}/${k.length})`]}),L&&r.jsx("div",{children:"No data"}),R&&r.jsxs(u,{children:[r.jsx(o,{disabled:!F,onClick:()=>{N(_-1)},children:r.jsx("i",{className:"fa fa-chevron-left"})}),r.jsx(p,{defaultActiveKey:"story",items:D}),r.jsx(o,{disabled:!$,onClick:()=>{N(_+1)},children:r.jsx("i",{className:"fa fa-chevron-right"})})]})]})}))}}}));
