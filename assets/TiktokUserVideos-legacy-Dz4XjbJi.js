System.register(["./index-legacy-t-43bRyY.js","./core-legacy-DUejBueY.js","./MyTable-legacy-BdwAjdRg.js","./MyApp-legacy-BjDdTBV8.js","./WordStatisticButton-legacy-DvwYlVsm.js","./VideoViewer-legacy-D6xvFpmJ.js","./window-legacy-DVzInflc.js","./ExportButton-legacy-Gdp4H4RH.js","./index-legacy-juj94Hrr.js","./index-legacy-BSZp2S85.js","./index-legacy-iPvVZ2cW.js","./index-legacy-Ca6ZhxpX.js","./index-legacy-BPdijXFe.js","./index-legacy-nJ8Prrx6.js","./index-legacy-CLdQtA-z.js","./DownOutlined-legacy-Du9l6WVt.js","./TextArea-legacy-Drtd9rAq.js","./Table-legacy-fvJg4aLz.js","./addEventListener-legacy-DWBiH7O1.js","./index-legacy-Bsf2lfEa.js","./PurePanel-legacy-DNwHsOJO.js","./move-legacy-GrZFMtsA.js","./SearchOutlined-legacy-CHIdbhh_.js","./index-legacy-774kDiYk.js","./index-legacy-B3CAmEl-.js","./Dropdown-legacy-DdqDagl6.js","./useBreakpoint-legacy-DEknZyJg.js","./responsiveObserver-legacy-D6grCtHe.js","./Pagination-legacy-CAKLffmX.js","./index-legacy-BrNEe9aJ.js","./EyeOutlined-legacy-DDqn4Eso.js","./row-legacy-DcgsMXi-.js","./BadgeWrapper-legacy-CjwHt5te.js","./index-legacy-CkHjpfV5.js","./index-legacy-B3b51kNz.js","./videos-legacy-BJaSMfav.js","./VideoWithMuted-legacy-CKeV6bM6.js","./file-download-legacy-Dp0d4tz8.js"],(function(e,t){"use strict";var i,n,a,o,s,l,r,d,c,g,u,h,m,y,w,x,j,k,f,v,p,b,T,C,I,N,F,$,q,S,B,D,R,V,P,M,O,W;return{setters:[e=>{i=e.aK,n=e.r,a=e.bc,o=e.aM,s=e.b7,l=e.b5,r=e.b6,d=e.cv,c=e.cu,g=e.aQ,u=e.b4,h=e.aF,m=e.cq,y=e.bb,w=e.aB,x=e.cr,j=e.cw},e=>{k=e.b,f=e.e},e=>{v=e.default},e=>{p=e.u,b=e.e,T=e.B,C=e.S,I=e.b,N=e.t,F=e.p,$=e.k},e=>{q=e.W},e=>{S=e.default},e=>{B=e.w,D=e.r},e=>{R=e.E},e=>{V=e.I},e=>{P=e.C},e=>{M=e.L},e=>{O=e.T},e=>{W=e.A},null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],execute:function(){e("default",(function({target:e}){const{ti:L}=i(),{message:_,notification:A}=p(),[E,U]=b("TiktokUserVideos."+e.uniqueId,[]),[H,z]=b("TiktokUserVideos.loading",!1),J=n.useRef(null),K=a.version>=t,Q=async()=>{const t="TiktokUserVideos.onReload";N(t),z(!0),U([]),_.loading({key:t,content:L({en:"Loading...",vi:"Đang tải..."}),duration:0});try{J.current&&J.current.close();const i=window.open("https://www.tiktok.com/@"+e.uniqueId,"_blank","width=800,height=600");i.blur(),window.focus(),J.current=i,_.loading({key:t,content:L({en:"Waiting tiktok...",vi:"Đang chờ tiktok..."}),duration:0}),await B(i);let n="",a=0,s=!1;for(;!s&&!i.closed;){_.loading({key:t,content:o.jsxs(o.Fragment,{children:[L({en:"Fetching videos...",vi:"Đang tải videos..."})+a,o.jsx("br",{}),o.jsx("i",{children:L({en:"Click to stop",vi:"Bấm để dừng"})})]}),duration:0,onClick:()=>{s=!0}});const l=k({secUid:e.secUid,count:35,cursor:n,coverFormat:"2"}),r="https://www.tiktok.com/api/post/item_list/?"+Object.entries(l).map((e=>e.join("="))).join("&"),d=await D({win:i,fnPath:"fetch",params:[r,{credentials:"include"}],checkAbort:()=>s}),c=F(d);console.log(c);const g=f(c?.itemList);if(!g.length)break;if(a+=g.length,U((e=>[...e,...g])),!c?.hasMore)break;n=c?.cursor,await h(500)}i.closed?_.warning({content:L({en:"Tiktok window closed before done",vi:"Tab tiktok bị tắt trước khi chạy xong"})}):i.close(),A.open({type:"success",message:L({en:"Fetch tiktok videos completed",vi:"Tìm videos tiktok xong"}),description:e.uniqueId+" - "+a+" videos",duration:0})}catch(i){console.log(i),A.open({type:"error",message:L({en:"Failed to fetch tiktok videos",vi:"Lỗi tìm videos tiktok"}),description:e.uniqueId+" - "+i.message,duration:0})}finally{_.destroy(t),z(!1)}},X=n.useMemo((()=>{const e=E.filter((e=>e.image)).length;return[{title:"#",dataIndex:"index",key:"index",width:50},{title:`${E.filter((e=>e.video&&!e.image)).length} Video + ${e} Photo`,key:"video",render:(e,t,i)=>o.jsx(T.Ribbon,{text:"Photo",color:"geekblue-inverse",style:{opacity:t.image?1:0},children:o.jsx(V,{src:t.image?.cover||t.video.cover,fallback:t.video.cover,style:{width:180,height:200,objectFit:"cover",borderRadius:10},preview:{destroyOnClose:!0,imageRender:t.image?()=>o.jsx(P,{style:{maxWidth:"90vw",maxHeight:"90vh",alignItems:"center",overflowY:"auto",overflowX:"hidden",padding:10,borderRadius:10},children:o.jsx(M,{grid:{gutter:10},style:{width:"100%"},dataSource:t.image?.images,renderItem:(e,t)=>o.jsx(M.Item,{children:o.jsx(V,{src:e,style:{objectFit:"cover",width:250,height:250,borderRadius:10}})}),rowKey:e=>e})}):()=>o.jsx(S,{info:t.video,defaultVariantTitle:{en:"Best",vi:"Tốt nhất"},style:{maxWidth:"90vw",maxHeight:"90vh"}}),toolbarRender:()=>null}})}),align:"center",width:180},{title:L({en:"Desc",vi:"Nội dung"}),dataIndex:"desc",key:"desc",render:(e,t,i)=>o.jsx(O.Text,{style:{maxWidth:250},children:t.desc}),width:250},{title:new Set(E.map((e=>e.music?.title))).size+L({en:" Music",vi:" Nhạc"}),dataIndex:"music",key:"music",render(e,t,i){const{id:n,author:a,cover:s,original:l,playUrl:r,title:d}=t.music||{};return n?o.jsxs(C,{direction:"vertical",size:3,children:[o.jsx(V,{src:s,style:{width:50,height:50,borderRadius:10}}),o.jsxs(O.Text,{children:[a," ",d," ",l," ",!!r&&o.jsx(O.Link,{href:r,target:"_blank",children:o.jsx("i",{className:"fa-solid fa-arrow-up-right-from-square"})})]})]}):"-"},filters:s(E.map((e=>e.music)),"title"),onFilter:(e,t)=>t.music?.title===e,filterSearch:!0,width:150},{title:L({en:"Created",vi:"Ngày đăng"}),dataIndex:"createTime",key:"createTime",render:(e,t,i)=>o.jsxs(C,{direction:"vertical",size:3,children:[o.jsx(O.Text,{children:l(t.createTime)}),o.jsx(O.Text,{type:"secondary",children:r(t.createTime)})]}),sorter:(e,t)=>e.createTime-t.createTime,width:120},{title:o.jsx("i",{className:"fa-solid fa-play fa-lg"}),dataIndex:"views",key:"views",render:(e,t,i)=>d(t.stats.playCount),sorter:(e,t)=>e.stats.playCount-t.stats.playCount,width:70},{title:o.jsx("i",{className:"fa-solid fa-heart fa-lg"}),dataIndex:"heart",key:"heart",render:(e,t,i)=>d(t.stats.diggCount),sorter:(e,t)=>e.stats.diggCount-t.stats.diggCount,width:70},{title:o.jsx("i",{className:"fa-solid fa-comment fa-lg"}),dataIndex:"comments",key:"comments",render:(e,t,i)=>d(t.stats.commentCount),sorter:(e,t)=>e.stats.commentCount-t.stats.commentCount,width:70},{title:o.jsx("i",{className:"fa-solid fa-bookmark fa-lg"}),dataIndex:"collect",key:"collect",render:(e,t,i)=>d(t.stats.collectCount),sorter:(e,t)=>e.stats.collectCount-t.stats.collectCount,width:70},{title:o.jsx("i",{className:"fa-solid fa-share fa-lg"}),dataIndex:"shares",key:"shares",render:(e,t,i)=>d(t.stats.shareCount),sorter:(e,t)=>e.stats.shareCount-t.stats.shareCount,width:70},{title:o.jsx("i",{className:"fa-solid fa-clock fa-lg"}),dataIndex:"length",key:"length",render:(e,t,i)=>c(t.video.duration),sorter:(e,t)=>e.video.duration-t.video.duration,width:70},{title:L({en:"Action",vi:"Hành động"}),dataIndex:"action",key:"action",render:(e,t,i)=>o.jsx(C.Compact,{children:o.jsx(I,{title:L({en:"Open on tiktok",vi:"Mở trong tiktok"}),children:o.jsx(g,{icon:o.jsx("i",{className:"fa-solid fa-arrow-up-right-from-square"}),onClick:()=>{window.open(`https://www.tiktok.com/@${t.author?.uniqueId}/video/${t.video.id}`,"_blank")}})})}),width:90}]}),[E]);return o.jsx("div",{style:{display:"flex",flexDirection:"column",width:"100%",height:"100%"},children:K?location.hostname.includes(".github.io")?o.jsx(W,{message:o.jsxs(o.Fragment,{children:[o.jsx(O.Text,{children:L({en:o.jsxs(o.Fragment,{children:["🚧 Please open"," ",o.jsxs("a",{href:"https://fb-aio.web.app/#/bulk-downloader",target:"_blank",children:[" ","This website"," ",o.jsx("i",{className:"fa-solid fa-arrow-up-right-from-square"})]})," ","to download bulk Tiktok."]}),vi:o.jsxs(o.Fragment,{children:["🚧 Vui lòng mở"," ",o.jsxs("a",{href:"https://fb-aio.web.app/#/bulk-downloader",target:"_blank",children:[" ","Trang web này"," ",o.jsx("i",{className:"fa-solid fa-arrow-up-right-from-square"})]})," ","để tải hàng loạt Tiktok."]})})})," ",o.jsxs("a",{href:"https://www.facebook.com/groups/fbaio/posts/1583865772268105",target:"_blank",children:[L({en:"Reason?",vi:"Lý do?"})," ",o.jsx("i",{className:"fa-solid fa-arrow-up-right-from-square"})]})]}),type:"error",style:{alignSelf:"center",marginBottom:10}}):K||E?.length?o.jsx(v,{searchable:!0,selectable:!0,data:E.map(((e,t)=>({...e,index:t+1}))),columns:X,keyExtractor:e=>e.id,onSearchRow:(e,t)=>[t.id,t.desc,t.author?.nickname,t.author?.uniqueId].find((t=>!!t&&u(e,t))),renderTitle:t=>{const i=t?.length?t:E,n=i.filter((e=>e.video&&!e.image));return o.jsxs(C,{children:[o.jsx(g,{type:"primary",icon:o.jsx("i",{className:"fa-solid fa-rotate-right"}),onClick:Q,loading:H,children:L({en:"Reload",vi:"Tải lại"})}),o.jsx(R,{title:L({en:"Download",vi:"Tải xuống"}),data:i,options:[{key:"videos",label:n.length+" videos",onClick:t=>{(async t=>{if(!(await $()))return;const i="TiktokUserVideos:downloadVideos";N(i);const n=t.map(((e,t)=>({name:t+"_"+m(e.desc||e.video.id||e.id)+".mp4",urls:(e.video.variants||[]).map((e=>[e.source,e.urls].flat().filter(Boolean))).flat().filter(Boolean)}))).filter((e=>e.urls.length));if(!n.length)return!1;const a=await window.showDirectoryPicker({mode:"readwrite"});await a.requestPermission({writable:!0});const s=await a.getDirectoryHandle(m(e?.uniqueId),{create:!0}),l=i;_.loading({key:l,content:L({en:"Downloading...",vi:"Đang tải..."}),duration:0});let r=!1,d=0,c=0;const g=Math.min(5,n.length),u=Array.from({length:g},(()=>"")),h=n.map(((e,t)=>async(t,i)=>{for(let a of e.urls)try{u[i]=y(e.name,30);const t=await w(a,!0);a!==t&&console.log("redirected",a,t);const n=await x({url:t,checkAbortFn:()=>r}),o=n.headers.get("content-type");if("video/mp4"!==o)throw new Error("Invalid content type: "+o);const l=await n.blob(),c=await s.getFileHandle(e.name,{create:!0}),g=await c.createWritable();return await g.write(l),await g.close(),d++,!0}catch(n){console.log(n,e)}return c++,!1})),{start:k,stop:f}=j(g,h,1e3),v=setInterval((()=>{_.loading({key:l,content:o.jsxs(o.Fragment,{children:[L({en:`Downloading... ${d}/${n.length}. Failed: ${c}`,vi:`Đang tải... ${d}/${n.length}. Lỗi: ${c}`}),o.jsx("br",{}),o.jsx("i",{children:L({en:"Click to stop",vi:"Bấm để dừng"})}),o.jsx("br",{}),u.map(((e,t)=>o.jsxs("div",{style:{textAlign:"left"},children:[e,o.jsx("br",{})]},t)))]}),duration:0,onClick:()=>r=!0}),r&&f()}),500);await k(),clearInterval(v),_.destroy(l),A.open({type:"success",message:L(r?{en:"Stopped download tiktok videos",vi:"Đã dừng tải video tiktok"}:{en:"Downloaded tiktok videos",vi:"Tải xong video tiktok"}),description:`${e?.uniqueId} (${d}/${n.length})`,duration:0})})(t)}},{key:"formatted json",label:".json (formatted)",prepareData:t=>({fileName:e?.uniqueId+".json",data:JSON.stringify(t.map((e=>({...e,raw:void 0,video:{...e.video,raw:void 0}}))),null,4)})},{key:"raw json",label:".json (raw)",prepareData:t=>({fileName:e?.uniqueId+".raw.json",data:JSON.stringify(t.map((e=>e.raw)),null,4)})}]}),o.jsx(q,{text:E.map((e=>e.desc)).join("\n")})]})}}):null:o.jsx(W,{message:L({vi:`Sắp có trong phiên bản v${t} (Bạn đang dùng v${a.version})`,en:`Coming soon in version v${t} (Current v${a.version})`}),type:"warning",showIcon:!0,style:{alignSelf:"center",marginBottom:10}})})}));const t="1.8"}}}));
