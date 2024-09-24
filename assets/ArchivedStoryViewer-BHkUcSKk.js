import{an as I,ak as V,al as C,r as m,aq as e,ar as j}from"./index-BYbUpaCK.js";import{u as F,d as v,b as n,f as L,g as E,h as U}from"./MyApp-B1wI3_ih.js";import{S as $}from"./StoryViewers-DuX7oOI5.js";import{e as z}from"./stories-DKqogI3G.js";import{T as s}from"./index-B8IvjsqR.js";import{I as u}from"./index-BPPwnt7q.js";import{A as B}from"./index-B21tsQ9e.js";import{T as D}from"./index-ByxT0VVU.js";import"./Collection-RrvAuh5A.js";import"./index-DGXklBWs.js";import"./file-download-DkBPBkun.js";import"./index-Dq1Q_KO6.js";import"./Dropdown-DNauGiFD.js";import"./PurePanel-ClV8F7Ol.js";import"./index-DKRTuJ6m.js";import"./index-C3eP1PzG.js";import"./index-wDIPV1Tc.js";import"./TextArea-C4oIzMKj.js";import"./addEventListener-DVPv7en2.js";import"./index-DXP0tqwF.js";import"./index-DRghyONw.js";import"./Pagination-DPi6n6z6.js";import"./useBreakpoint-Cqa0YYYx.js";import"./responsiveObserver-DfJEY4Uv.js";import"./row-DqHag9PQ.js";import"./index-gTPxCFqS.js";import"./index-rLyBvIMk.js";function ue({story:l}){const{ti:d}=F(),{message:y}=I.useApp(),p=V(C.darkMode),[o,b]=v("ArchivedStoryViewer.stories."+l.creation_time,[]),[c,x]=v("ArchivedStoryViewer.viewingIndex."+l.id,0),[f,g]=m.useState(!1),t=o[c]||o[0],w=t?Object.values(t.viewer_count).reduce((i,r)=>i+r,0):0,T=t?t.reactions.reduce((i,r)=>i+r.count,0):0,k=c<o.length-1,A=c>0,S=o.length===0&&!f,h=m.useRef(!1);m.useEffect(()=>{!(o!=null&&o.length)&&l.creation_time&&!h.current&&(g(!0),h.current=!0,z({creationTime:l.creation_time}).then(i=>{if(i){const r=i.findIndex(_=>_.id===l.id);b(i),x(r)}}).catch(i=>y.error(d({en:"Error: ",vi:"Lỗi: "}))+i.message).finally(()=>{g(!1),h.current=!1}))},[]);const a={height:"70vh",width:"calc(70vh * 9 / 16)"},N=m.useRef(null),R=t?[{key:"story",label:e.jsxs(s.Text,{children:[e.jsx("i",{className:"fa fa-play"})," Play"]}),children:e.jsxs(n,{direction:"vertical",style:{position:"relative"},children:[t.video?e.jsx("video",{controls:!0,autoPlay:!0,loop:!0,src:t.video,style:{...a,borderRadius:10,objectFit:"contain"}}):t.image_background?e.jsxs(n,{direction:"vertical",style:{position:"relative"},children:[e.jsx(u,{src:t.image_background,preview:!1,style:{...a,borderRadius:10,objectFit:"contain"}}),e.jsx(u,{src:t.image,style:{...a,borderRadius:10,objectFit:"contain",position:"absolute",bottom:0,left:0,transform:"translate(-50%, 0)",opacity:.5}})]}):e.jsx(u,{src:t.image,style:{...a,borderRadius:10,objectFit:"contain"}}),e.jsx(n,{direction:"vertical",align:"start",style:{background:"linear-gradient(180deg, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0) 100%)",position:"absolute",top:0,left:0,padding:10,width:"100%",paddingBottom:"50px",borderRadius:10},children:[t.comment_count?{icon:e.jsx("i",{className:"fa-solid fa-message"}),text:t.comment_count}:null,t.music?{icon:e.jsx("i",{className:"fa-solid fa-music"}),text:t.music}:null].filter(Boolean).map((i,r)=>i&&e.jsxs(s.Text,{style:{color:"#eee",textAlign:"left"},children:[i.icon," ",i.text]},"story-statistic-"+r))})]})},{key:"viewer",label:e.jsxs(s.Text,{children:[e.jsx("i",{className:"fa fa-eye"})," ",w," "]}),children:e.jsxs(n,{direction:"vertical",style:{...a,width:450,overflowY:"auto",overflowX:"hidden",textAlign:"left",position:"relative"},children:[e.jsxs(s.Text,{children:[d({en:"Views",vi:"Lượt xem"}),":"]}),e.jsx("ul",{children:Object.entries(t.viewer_count).map(([i,r])=>e.jsx("li",{children:e.jsxs(s.Text,{style:{color:"#eee"},children:[i,": ",r]})},"story-viewer-"+i))}),e.jsx(n,{direction:"horizontal",style:{display:"flex",padding:10,alignItems:"center"},children:e.jsxs(s.Text,{style:{textDecoration:"underline"},children:[d({en:"Created date",vi:"Ngày đăng"}),e.jsx(s.Text,{style:{position:"absolute",right:10},children:L(new Date(t.created_at),d({en:"en-US",vi:"vi-VN"}))})]})}),e.jsx($,{storyId:t.id,initialViewers:t.viewers})]})},{key:"reactions",label:e.jsxs(s.Text,{children:[e.jsx("i",{className:"fa fa-heart"})," ",T," "]}),children:e.jsxs(n,{direction:"vertical",style:{overflowY:"auto",...a},align:"start",children:[e.jsxs(s.Text,{children:[d({en:"Reactions",vi:"Lượt thích"}),":"]}),t.reactions.map((i,r)=>e.jsxs(s.Link,{href:E(i.uid),style:{padding:"0 5px 5px",display:"block"},target:"_blank",children:[e.jsx(B,{src:U(i.uid,50),size:35}),e.jsx(s.Text,{style:{color:"#eee",textAlign:"left"},children:` ${i.count} ${i.reactions}`},"story-reaction-"+r)]},"story-reaction-"+r))]})}]:[];return e.jsxs(n,{direction:"vertical",style:{maxHeight:"100vh",overflowY:"auto",overflowX:"hidden",minWidth:a.width,minHeight:a.height,background:p?"#222":"#eee",color:p?"white":"#111",padding:10,borderRadius:10},ref:N,children:[e.jsxs(s.Text,{children:["Archived Story Viewer"," ",f?e.jsx("i",{className:"fa fa-spinner fa-spin"}):`(${c+1}/${o.length})`]}),S&&e.jsx("div",{children:"No data"}),t&&e.jsxs(n,{children:[e.jsx(j,{disabled:!A,onClick:()=>{x(c-1)},children:e.jsx("i",{className:"fa fa-chevron-left"})}),e.jsx(D,{defaultActiveKey:"story",items:R}),e.jsx(j,{disabled:!k,onClick:()=>{x(c+1)},children:e.jsx("i",{className:"fa fa-chevron-right"})})]})]})}export{ue as default};