System.register(["./index-legacy-CCwJMuy2.js","./MyApp-legacy-fyQv5Z4s.js","./StoryViewers-legacy-i7pTplQh.js","./stories-legacy-DTWuaHfV.js","./VideoWithMuted-legacy-DUXkhyPb.js","./index-legacy-BK-Y710Z.js","./index-legacy-gtFpYae3.js","./index-legacy-3ygqBVGQ.js","./Collection-legacy-DAAbGALB.js","./index-legacy-SXhFllNV.js","./file-download-legacy-CZ1Ihu2w.js","./react-hotkeys-hook.esm-legacy-C7KlQXxZ.js","./index-legacy-hqKlrHxc.js","./index-legacy-DwfovYKj.js","./index-legacy-Cw6zrUfE.js","./Dropdown-legacy-BJofQUxY.js","./PurePanel-legacy-_HKeIg-R.js","./move-legacy-DBRV_hf4.js","./index-legacy-DH7rkDL1.js","./TextArea-legacy-BDrkAJ1v.js","./SearchOutlined-legacy-0L_f4026.js","./index-legacy-D1y0qPrI.js","./Pagination-legacy-8loKNAwB.js","./useBreakpoint-legacy-DhjjCRbx.js","./useForceUpdate-legacy-OleuDxTF.js","./index-legacy-CItXdjuV.js","./DownOutlined-legacy-DdSEFHD0.js","./row-legacy-pJ2pnOik.js","./col-legacy-BIl_Rpmk.js","./index-legacy-ByTs5nDo.js"],(function(e,i){"use strict";var t,l,s,n,a,r,c,o,d,u,x,j,g,y,h,f,v,m,p;return{setters:[e=>{t=e.aU,l=e.aI,s=e.aJ,n=e.aK,a=e.r,r=e.aW,c=e.be,o=e.a_},e=>{d=e.e,u=e.S,x=e.I,j=e.a,g=e.g},e=>{y=e.S},e=>{h=e.e},e=>{f=e.V},e=>{v=e.T},e=>{m=e.A},e=>{p=e.T},null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],execute:function(){e("default",(function({story:e}){const{ti:i}=t(),{message:b}=l.useApp(),w=s(n.darkMode),[k,T]=d("ArchivedStoryViewer.stories."+e.creation_time,[]),[_,N]=d("ArchivedStoryViewer.viewingIndex."+e.id,0),[A,R]=a.useState(!1),S=k[_]||k[0],V=S?Object.values(S.viewer_count).reduce(((e,i)=>e+i),0):0,I=S?S.reactions.reduce(((e,i)=>e+i.count),0):0,$=_<k.length-1,F=_>0,L=0===k.length&&!A,P=a.useRef(!1);a.useEffect((()=>{k?.length||!e.creation_time||P.current||(R(!0),P.current=!0,h({creationTime:e.creation_time}).then((i=>{if(i){const t=i.findIndex((i=>i.id===e.id));T(i),N(t)}})).catch((e=>b.error(i({en:"Error: ",vi:"Lỗi: "}))+e.message)).finally((()=>{R(!1),P.current=!1})))}),[]);const C={height:"70vh",width:"calc(70vh * 9 / 16)"},D=a.useRef(null),O=S?[{key:"story",label:r.jsxs(v.Text,{children:[r.jsx("i",{className:"fa fa-play"})," Play"]}),children:r.jsxs(u,{direction:"vertical",style:{position:"relative"},children:[S.video?r.jsx(f,{src:S.video,style:{...C,borderRadius:10,objectFit:"contain"}}):S.image_background?r.jsxs(u,{direction:"vertical",style:{position:"relative"},children:[r.jsx(x,{src:S.image_background,preview:!1,style:{...C,borderRadius:10,objectFit:"contain"}}),r.jsx(x,{src:S.image,style:{...C,borderRadius:10,objectFit:"contain",position:"absolute",bottom:0,left:0,transform:"translate(-50%, 0)",opacity:.5}})]}):r.jsx(x,{src:S.image,style:{...C,borderRadius:10,objectFit:"contain"}}),r.jsx(u,{direction:"vertical",align:"start",style:{background:"linear-gradient(180deg, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0) 100%)",position:"absolute",top:0,left:0,padding:10,width:"100%",paddingBottom:"50px",borderRadius:10},children:[S.comment_count?{icon:r.jsx("i",{className:"fa-solid fa-message"}),text:S.comment_count}:null,S.music?{icon:r.jsx("i",{className:"fa-solid fa-music"}),text:S.music}:null].filter(Boolean).map(((e,i)=>e&&r.jsxs(v.Text,{style:{color:"#eee",textAlign:"left"},children:[e.icon," ",e.text]},"story-statistic-"+i)))})]})},{key:"viewer",label:r.jsxs(v.Text,{children:[r.jsx("i",{className:"fa fa-eye"})," ",V," "]}),children:r.jsxs(u,{direction:"vertical",style:{...C,width:450,overflowY:"auto",overflowX:"hidden",textAlign:"left",position:"relative"},children:[r.jsxs(v.Text,{children:[i({en:"Views",vi:"Lượt xem"}),":"]}),r.jsx("ul",{children:Object.entries(S.viewer_count).map((([e,i])=>r.jsx("li",{children:r.jsxs(v.Text,{style:{color:"#eee"},children:[e,": ",i]})},"story-viewer-"+e)))}),r.jsx(u,{direction:"horizontal",style:{display:"flex",padding:10,alignItems:"center"},children:r.jsxs(v.Text,{style:{textDecoration:"underline"},children:[i({en:"Created date",vi:"Ngày đăng"}),r.jsx(v.Text,{style:{position:"absolute",right:10},children:c(new Date(S.created_at),i({en:"en-US",vi:"vi-VN"}))})]})}),r.jsx(y,{storyId:S.id,initialViewers:S.viewers})]})},{key:"reactions",label:r.jsxs(v.Text,{children:[r.jsx("i",{className:"fa fa-heart"})," ",I," "]}),children:r.jsxs(u,{direction:"vertical",style:{overflowY:"auto",...C},align:"start",children:[r.jsxs(v.Text,{children:[i({en:"Reactions",vi:"Lượt thích"}),":"]}),S.reactions.map(((e,i)=>r.jsxs(v.Link,{href:j(e.uid),style:{padding:"0 5px 5px",display:"block"},target:"_blank",children:[r.jsx(m,{src:g(e.uid,50),size:35}),r.jsx(v.Text,{style:{color:"#eee",textAlign:"left"},children:` ${e.count} ${e.reactions}`},"story-reaction-"+i)]},"story-reaction-"+i)))]})}]:[];return r.jsxs(u,{direction:"vertical",style:{maxHeight:"100vh",overflowY:"auto",overflowX:"hidden",minWidth:C.width,minHeight:C.height,background:w?"#222":"#eee",color:w?"white":"#111",padding:10,borderRadius:10},ref:D,children:[r.jsxs(v.Text,{children:["Archived Story Viewer"," ",A?r.jsx("i",{className:"fa fa-spinner fa-spin"}):`(${_+1}/${k.length})`]}),L&&r.jsx("div",{children:"No data"}),S&&r.jsxs(u,{children:[r.jsx(o,{disabled:!F,onClick:()=>{N(_-1)},children:r.jsx("i",{className:"fa fa-chevron-left"})}),r.jsx(p,{defaultActiveKey:"story",items:O}),r.jsx(o,{disabled:!$,onClick:()=>{N(_+1)},children:r.jsx("i",{className:"fa fa-chevron-right"})})]})]})}))}}}));
