System.register(["./index-legacy-BLWNhdSi.js","./ExportButton-legacy-DIuaecwX.js","./MyApp-legacy-DiY9AX-Q.js","./messages-legacy-BXCw7eZl.js","./file-download-legacy-B1lPK7bE.js","./dayjs.min-legacy-DIqhFihk.js","./BadgeWrapper-legacy-Bb4Wy2V4.js","./row-legacy-7L_Xcd9K.js","./index-legacy-DvirHOdl.js","./index-legacy-B4kOC7Ki.js","./index-legacy-DGVlN8u1.js","./index-legacy-9AwjkThE.js","./responsiveObserver-legacy-DQl5_xPL.js","./TextArea-legacy-DGCZEH22.js","./Dropdown-legacy-BNhs1cvq.js","./PurePanel-legacy-8YB54aau.js","./move-legacy-5rFa6L24.js","./useBreakpoint-legacy-BxnpLCFj.js","./index-legacy-C_r1TC2o.js","./EyeOutlined-legacy-DELHaa1I.js","./addEventListener-legacy-CMJdtc3g.js"],(function(e,n){"use strict";var a,i,t,s,l,r,o,c,d,g,h,p,m,u,x,y,j,v,f,k,w,b,C,D,N,T,M,I,A,S;return{setters:[e=>{a=e.aK,i=e.ba,t=e.r,s=e.aN,l=e.aM,r=e.aY,o=e.aQ,c=e.bd},e=>{d=e.E},e=>{g=e.u,h=e.h,p=e.e,m=e.t,u=e.T,x=e.b,y=e.a,j=e.S,v=e.g,f=e.k},e=>{k=e.g,w=e.a,b=e.s},e=>{C=e.f},e=>{D=e.d},e=>{N=e.B},e=>{T=e.R},e=>{M=e.T},e=>{I=e.D},e=>{A=e.A},e=>{S=e.I},null,null,null,null,null,null,null,null,null],execute:function(){e("default",(function(){const{message:e,notification:n}=g(),{ti:r}=a(),M=i(),{profile:B}=h(),[H,_]=p("AllMessages.data",[]),[O,R]=t.useState(!1);t.useEffect((()=>{H?.length||Y()}),[]);const Y=()=>{if(O)return;const n="AllMessages:onClickReload";m(n),e.loading({key:n,duration:0,content:r({en:"Fetching messages...",vi:"Đang tải tin nhắn"})}),R(!0),k().then((a=>{if(console.log(a),!a?.length)return e.error({key:n,content:r({en:"No data to show",vi:"Không có dữ liệu"})});_(a),e.success({key:n,content:r({en:"Fetch messages completed",vi:"Tải xong tin nhắn"})})})).catch((a=>{e.error({key:n,content:r({en:"Failed to fetch messages",vi:"Lỗi tải tin nhắn"})+": "+a.message}),console.log(a)})).finally((()=>{R(!1)}))},z=e=>()=>{m("AllMessages:onClickFirstMessages"),M("/messages/first",{state:{threadId:e.id||e?.participants?.[0]?.id,threadName:e.name||e?.participants?.[0]?.name}})},K=async a=>{if(!(await f()))return;const i="AllMessages:onClickDownloadThread";m(i);const t=a.name,s=i+a.id;e.loading({key:s,duration:0,content:r({en:"Downloading messages...",vi:"Đang tải tin nhắn..."})+t});let o=!1;const c=await w({threadId:a.id,checkStopFn:()=>o,progressCallback:n=>{e.loading({key:s,duration:0,content:l.jsxs(l.Fragment,{children:[r({en:"Downloading messages... ",vi:"Đang tải tin nhắn... "})+t,l.jsx("br",{}),n.length,r({en:" messages",vi:" tin nhắn"}),l.jsx("br",{}),D(n[0].time).format("YYYY-MM-DD HH:mm:ss"),l.jsx("br",{}),l.jsx("i",{children:r({en:"Click to stop",vi:"Bấm để dừng"})})]}),onClick:()=>{e.loading({key:s,duration:0,content:r({en:"Stopping...",vi:"Đang dừng..."})}),o=!0}})}});e.destroy(s),n.open({type:"success",duration:0,message:r(o?{en:"Download stopped: ",vi:"Đã dừng tải: "}:{en:"Download completed: ",vi:"Tải xong: "})+t,description:c.length+r({en:" messages",vi:" tin nhắn"})});const d=b({threadId:a.id||"",threadName:t,myUid:B?.uid||"",msgs:c});return C(d,t+".html"),o},P=[{title:"#",key:"recent",dataIndex:"recent",sorter:(e,n)=>e.recent-n.recent,render:(e,n,a)=>n.recent+1,width:70,align:"center",headerAlign:"center"},{title:r({en:"Name",vi:"Tên"}),dataIndex:"name",key:"name",sorter:(e,n)=>e.name.localeCompare(n.name),render:(e,n,a)=>l.jsxs(T,{align:"middle",children:[n.isGroup?l.jsx(I,{arrow:!0,overlayStyle:{maxHeight:"350px",overflow:"auto",border:"1px dashed gray",borderRadius:"5px"},menu:{items:[{key:"-1",type:"group",label:l.jsx(L,{level:5,style:{textAlign:"center"},children:r({en:`${n.participants?.length} members`,vi:`${n.participants?.length} thành viên`})})},{type:"divider"},...n.participants?.map?.((e=>({key:e.id,label:l.jsx("b",{children:e.name}),icon:l.jsx(A,{shape:"square",src:e.avatar}),onClick:()=>window.open(y(e.id))})))||[]]},children:l.jsx(j,{children:n.image?l.jsx(A,{shape:"square",size:40,src:l.jsx(S,{src:n.image})}):l.jsx(A.Group,{max:{count:5},children:n.participants.filter((e=>e.id!=B?.id)).map((e=>l.jsx(A,{src:e.avatar},e.id)))})})}):l.jsx(A,{shape:"square",size:40,src:l.jsx(S,{src:n.image||v(n.participants?.[0]?.id),fallback:n.participants?.[0]?.avatar})}),l.jsx("a",{href:n.url,target:"_blank",style:{marginLeft:"10px"},children:l.jsx("b",{children:n.name})})]}),filters:[{text:r({en:"Inactive (",vi:"Không hoạt động ("})+H.filter(E).length+")",value:"inactive"}],onFilter:(e,n)=>"inactive"!=e||E(n),onSearch:(e,n,a)=>{let i=e.toLowerCase();return a.name.toLocaleLowerCase().includes(i)||a.participants.some((e=>e.name.toLocaleLowerCase().includes(i)))},width:"auto"},{title:"Id",dataIndex:"id",key:"id",sorter:(e,n)=>e.id>n.id,onSearch:(e,n,a)=>{let i=e.toLowerCase();return a.id.includes(i)||a.participants.some((e=>e.id.includes(i)))},width:150},{title:r({en:"Messages",vi:"Tin nhắn"}),dataIndex:"count",key:"count",sorter:(e,n)=>e.count-n.count,render:(e,n,a)=>s(n.count),width:100,align:"right"},{title:r({en:"Members",vi:"Nguời"}),dataIndex:"participants",key:"participants",sorter:(e,n)=>e.participants.length-n.participants.length,render:(e,n,a)=>s(n.participants.length),width:100,align:"right"},{title:r({en:"Type",vi:"Loại"}),dataIndex:"type",key:"type",render:(e,n,a)=>n.isGroup?r({en:"Group",vi:"Nhóm"}):r({en:"Personal",vi:"Cá nhân"}),filters:[{text:r({en:"Group (",vi:"Nhóm ("})+H.filter((e=>e.isGroup)).length+")",value:!0},{text:r({en:"Personal (",vi:"Cá nhân ("})+H.filter((e=>!e.isGroup)).length+")",value:!1}],onFilter:(e,n)=>n.isGroup==e,width:100,align:"right"},{title:r({en:"Action",vi:"Hành động"}),dataIndex:"action",key:"download",render:(e,n,a)=>l.jsxs(j.Compact,{children:[l.jsx(x,{title:r({en:"First messages",vi:"Tin nhắn đầu tiên"}),children:l.jsx(o,{type:"primary",icon:l.jsx("i",{className:"fa-solid fa-clock-rotate-left"}),onClick:z(n)})}),l.jsx(x,{title:r({en:"Download messages",vi:"Tải cuộc trò chuyện"}),children:l.jsx(o,{type:"primary",icon:l.jsx("i",{className:"fa-solid fa-download"}),onClick:()=>K(n)})}),l.jsx(x,{title:r({en:"Delete (Coming soon)",vi:"Xoá (Sắp có)"}),children:l.jsx(o,{danger:!0,disabled:!0,icon:l.jsx("i",{className:"fa-solid fa-trash"})})})]}),width:150,align:"right"}];return l.jsxs("div",{style:{display:"flex",flexDirection:"column",width:"100%",height:"100%"},children:[l.jsxs(T,{align:"middle",style:{margin:"16px"},children:[l.jsx(L,{level:3,style:{margin:0},children:r({en:"Messages manager",vi:"Quản lý tin nhắn"})}),l.jsx(u,{style:{marginLeft:"10px",fontWeight:"bold",color:"#888"},children:H.length}),l.jsx(x,{title:r({en:'Can only view messages that not have "End to end encryption" (e2ee)',vi:'Chỉ có thể xem tin nhắn không bị "Mã hoá đầu cuối" (e2ee)'}),children:l.jsx(u,{color:"orange",icon:l.jsx("i",{className:"fa-solid fa-lock-open"}),children:" "+r({en:"Only none e2ee",vi:"Không bị mã hoá đầu cuối"})})})]}),l.jsx(F,{data:H,columns:P,size:"small",searchable:!0,selectable:!0,keyExtractor:e=>e?.id,style:{flex:1,maxHeight:"100%"},renderTitle:e=>l.jsxs(l.Fragment,{children:[l.jsx(o,{type:"primary",icon:O?l.jsx("i",{className:"fa-solid fa-rotate-right fa-spin"}):l.jsx("i",{className:"fa-solid fa-rotate-right"}),onClick:Y,children:r({en:"Reload",vi:"Tải lại"})}),l.jsx(d,{data:e.length?e:H,options:[{key:"uid",label:".txt (uid)",prepareData:e=>({fileName:"messages_uid.txt",data:G(e).map((e=>e.uid)).join("\n")})},{key:"uid_name",label:".csv (uid+name)",prepareData:e=>({fileName:"messages_uid_name.csv",data:c(G(e))})},{key:"json",label:".json",prepareData:e=>({fileName:"messages.json",data:JSON.stringify(e,null,2)})},{key:"csv",label:".csv",prepareData:e=>({fileName:"messages.csv",data:c(e.map((e=>({...e,participants:e.participants.map((e=>e.name)).join(", "),participantIds:e.participants.map((e=>e.id)).join(", ")}))))})}]}),l.jsxs(j.Compact,{children:[l.jsx(x,{title:r({en:"Delete selected (Coming soon)",vi:"Xoá lựa chọn (Sắp có)"}),children:l.jsx(o,{danger:!0,disabled:!0,icon:l.jsx("i",{className:"fa-solid fa-trash-can"}),onClick:()=>{return n=e,void console.log(n);var n},children:r({en:"Delete",vi:"Xoá"})+(e.length?" "+e.length:"")})}),l.jsx(N,{type:"new",children:l.jsx(x,{title:e.length?r({en:"Download "+e.length+" messages",vi:"Tải "+e.length+" cuộc trò chuyện"}):r({en:"Select messages to download",vi:"Chọn cuộc trò chuyện để tải"}),children:l.jsxs(o,{disabled:!e?.length,icon:l.jsx("i",{className:"fa-solid fa-download"}),onClick:()=>(async e=>{if(await f()){m("AllMessages:onClickDownloadMultipleThreads");for(let n of e)if(await K(n))break}})(e),children:[r({en:"Download ",vi:"Tải "})," ",e.length||""]})})})]})]})})]})}));const F=t.lazy((()=>r((()=>n.import("./MyTable-legacy-C-7sezLP.js")),void 0,n.meta.url))),{Title:L}=M,G=e=>{const n=new Set;return e.map((e=>e.isGroup?e.participants.map((e=>({uid:e.id,name:e.name}))):{uid:e.id,name:e.name})).flat().forEach((({uid:e,name:a})=>{n.has(e)||n.add({uid:e,name:a})})),Array.from(n.values())};function E(e){return"-no data-"==e.name||"Người dùng Facebook"==e.name}}}}));
