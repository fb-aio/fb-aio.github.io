System.register(["./index-legacy-DgDxnhpA.js","./MyApp-legacy--44lDAYA.js","./StoryViewers-legacy-D3-nbS1b.js","./stories-legacy-DGZC6AxC.js","./VideoWithMuted-legacy-CsA3myhg.js","./index-legacy-BDlErKet.js","./index-legacy-DQnh8r-z.js","./index-legacy-B9HH1mBJ.js","./Collection-legacy-CT4dms2K.js","./index-legacy-DtTRmuRZ.js","./file-download-legacy-CITZosSI.js","./react-hotkeys-hook.esm-legacy-CnhR9qXy.js","./index-legacy-CphRATWL.js","./index-legacy-Daaohuto.js","./index-legacy-B7D85tm3.js","./index-legacy-DnTQUxLr.js","./Dropdown-legacy-DZYgwR4s.js","./PurePanel-legacy-DCSDv3sl.js","./move-legacy-D4CLyVSa.js","./index-legacy-D7Sgl99W.js","./TextArea-legacy-B9cfn5c-.js","./SearchOutlined-legacy-CuuS7WlB.js","./index-legacy-BHyr6atY.js","./Pagination-legacy-BNXwGNoJ.js","./useBreakpoint-legacy-fAAoUt70.js","./useForceUpdate-legacy-CaDY0ldf.js","./index-legacy-i3bw2b2W.js","./List-legacy-DQsyQNx_.js","./DownOutlined-legacy-Dv1to0sb.js","./row-legacy-vWQqcFVi.js","./col-legacy-D6No8P8C.js","./index-legacy-C6Lgksty.js"],(function(e,i){"use strict";var l,t,s,n,a,r,c,o,d,u,x,j,y,g,h,f,v,m,p;return{setters:[e=>{l=e.aU,t=e.aI,s=e.aJ,n=e.aK,a=e.r,r=e.aW,c=e.be,o=e.a_},e=>{d=e.e,u=e.S,x=e.I,j=e.a,y=e.g},e=>{g=e.S},e=>{h=e.e},e=>{f=e.V},e=>{v=e.T},e=>{m=e.A},e=>{p=e.T},null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],execute:function(){e("default",(function({story:e}){const{ti:i}=l(),{message:b}=t.useApp(),w=s(n.darkMode),[k,T]=d("ArchivedStoryViewer.stories."+e.creation_time,[]),[_,A]=d("ArchivedStoryViewer.viewingIndex."+e.id,0),[N,S]=a.useState(!1),R=k[_]||k[0],V=R?Object.values(R.viewer_count).reduce(((e,i)=>e+i),0):0,I=R?R.reactions.reduce(((e,i)=>e+i.count),0):0,F=_<k.length-1,L=_>0,O=0===k.length&&!N,$=a.useRef(!1);a.useEffect((()=>{k?.length||!e.creation_time||$.current||(S(!0),$.current=!0,h({creationTime:e.creation_time}).then((i=>{if(i){const l=i.findIndex((i=>i.id===e.id));T(i),A(l)}})).catch((e=>b.error(i({en:"Error: ",vi:"Lỗi: "}))+e.message)).finally((()=>{S(!1),$.current=!1})))}),[]);const C={height:"70vh",width:"calc(70vh * 9 / 16)"},D=a.useRef(null),M=R?[{key:"story",label:r.jsxs(v.Text,{children:[r.jsx("i",{className:"fa fa-play"})," Play"]}),children:r.jsxs(u,{direction:"vertical",style:{position:"relative"},children:[R.video?r.jsx(f,{src:R.video,style:{...C,borderRadius:10,objectFit:"contain"}}):R.image_background?r.jsxs(u,{direction:"vertical",style:{position:"relative"},children:[r.jsx(x,{src:R.image_background,preview:!1,style:{...C,borderRadius:10,objectFit:"contain"}}),r.jsx(x,{src:R.image,style:{...C,borderRadius:10,objectFit:"contain",position:"absolute",bottom:0,left:0,transform:"translate(-50%, 0)",opacity:.5}})]}):r.jsx(x,{src:R.image,style:{...C,borderRadius:10,objectFit:"contain"}}),r.jsx(u,{direction:"vertical",align:"start",style:{background:"linear-gradient(180deg, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0) 100%)",position:"absolute",top:0,left:0,padding:10,width:"100%",paddingBottom:"50px",borderRadius:10},children:[R.comment_count?{icon:r.jsx("i",{className:"fa-solid fa-message"}),text:R.comment_count}:null,R.music?{icon:r.jsx("i",{className:"fa-solid fa-music"}),text:R.music}:null].filter(Boolean).map(((e,i)=>e&&r.jsxs(v.Text,{style:{color:"#eee",textAlign:"left"},children:[e.icon," ",e.text]},"story-statistic-"+i)))})]})},{key:"viewer",label:r.jsxs(v.Text,{children:[r.jsx("i",{className:"fa fa-eye"})," ",V," "]}),children:r.jsxs(u,{direction:"vertical",style:{...C,width:450,overflowY:"auto",overflowX:"hidden",textAlign:"left",position:"relative"},children:[r.jsxs(v.Text,{children:[i({en:"Views",vi:"Lượt xem"}),":"]}),r.jsx("ul",{children:Object.entries(R.viewer_count).map((([e,i])=>r.jsx("li",{children:r.jsxs(v.Text,{style:{color:"#eee"},children:[e,": ",i]})},"story-viewer-"+e)))}),r.jsx(u,{direction:"horizontal",style:{display:"flex",padding:10,alignItems:"center"},children:r.jsxs(v.Text,{style:{textDecoration:"underline"},children:[i({en:"Created date",vi:"Ngày đăng"}),r.jsx(v.Text,{style:{position:"absolute",right:10},children:c(new Date(R.created_at),i({en:"en-US",vi:"vi-VN"}))})]})}),r.jsx(g,{storyId:R.id,initialViewers:R.viewers})]})},{key:"reactions",label:r.jsxs(v.Text,{children:[r.jsx("i",{className:"fa fa-heart"})," ",I," "]}),children:r.jsxs(u,{direction:"vertical",style:{overflowY:"auto",...C},align:"start",children:[r.jsxs(v.Text,{children:[i({en:"Reactions",vi:"Lượt thích"}),":"]}),R.reactions.map(((e,i)=>r.jsxs(v.Link,{href:j(e.uid),style:{padding:"0 5px 5px",display:"block"},target:"_blank",children:[r.jsx(m,{src:y(e.uid,50),size:35}),r.jsx(v.Text,{style:{color:"#eee",textAlign:"left"},children:` ${e.count} ${e.reactions}`},"story-reaction-"+i)]},"story-reaction-"+i)))]})}]:[];return r.jsxs(u,{direction:"vertical",style:{maxHeight:"100vh",overflowY:"auto",overflowX:"hidden",minWidth:C.width,minHeight:C.height,background:w?"#222":"#eee",color:w?"white":"#111",padding:10,borderRadius:10},ref:D,children:[r.jsxs(v.Text,{children:["Archived Story Viewer"," ",N?r.jsx("i",{className:"fa fa-spinner fa-spin"}):`(${_+1}/${k.length})`]}),O&&r.jsx("div",{children:"No data"}),R&&r.jsxs(u,{children:[r.jsx(o,{disabled:!L,onClick:()=>{A(_-1)},children:r.jsx("i",{className:"fa fa-chevron-left"})}),r.jsx(p,{defaultActiveKey:"story",items:M}),r.jsx(o,{disabled:!F,onClick:()=>{A(_+1)},children:r.jsx("i",{className:"fa fa-chevron-right"})})]})]})}))}}}));
