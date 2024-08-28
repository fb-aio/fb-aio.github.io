const __vite__fileDeps=["./MyTable-Cx70RIz5.js","./index-Ch3SQZYM.js","./index-DjlRUb8J.css","./MyApp-BxasvTfg.js","./index-CXMf6RbK.js","./addEventListener-CXWrbDGZ.js","./index-CKYerQ9t.js","./PurePanel-DJziKDnP.js","./index-CE1W9nXU.js","./index-CUH9Hbhm.js","./index-DwZMrCFQ.js","./Dropdown-CqkVLm1l.js","./index-C_9rVwkb.js","./useBreakpoint-BXjY32dr.js","./responsiveObserver-BK_a0ip3.js","./Pagination-B6unX1vy.js","./index-CYv9_VMY.js","./row-BlQN8LEk.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{ak as $,al as H,ah as K,ai as O,r as f,an as n,ar as W,ao as d}from"./index-Ch3SQZYM.js";import{u as B,b as X,t as T,c as A,T as u,g as J,S as I,d as Q,o as L}from"./MyApp-BxasvTfg.js";import{E as V}from"./ExportButton-CosAr6Sa.js";import{g as Y}from"./messages-Dj2jVLmM.js";import{R as F}from"./row-BlQN8LEk.js";import{T as x}from"./index-DdLXzTdq.js";import{T as Z}from"./index-CXMf6RbK.js";import{D as S}from"./index-DwZMrCFQ.js";import{A as h}from"./index-BQnDyKr_.js";import{I as M}from"./index-BH1GPZzs.js";import"./file-download-oYh-7Uq5.js";import"./responsiveObserver-BK_a0ip3.js";import"./Dropdown-CqkVLm1l.js";import"./PurePanel-DJziKDnP.js";import"./useBreakpoint-BXjY32dr.js";import"./index-BfMZK5uK.js";import"./addEventListener-CXWrbDGZ.js";const ee=f.lazy(()=>W(()=>import("./MyTable-Cx70RIz5.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17]),import.meta.url)),{Title:D}=Z,E=i=>{const o=new Set;return i.map(r=>r.isGroup?r.participants.map(c=>({uid:c.id,name:c.name})):{uid:r.id,name:r.name}).flat().forEach(({uid:r,name:c})=>{o.has(r)||o.add({uid:r,name:c})}),Array.from(o.values())};function ve(){const{ti:i}=B(),{message:o}=$.useApp(),r=H(),c=K(O.profile)??{},[m,R]=X("AllMessages.data",[]),[v,j]=f.useState(!1);f.useEffect(()=>{m!=null&&m.length||y()},[]);const y=()=>{if(v)return;T("AllMessages:onClickReload");const t="onClickReload";o.loading({key:t,content:i({en:"Fetching messages...",vi:"Đang tải tin nhắn"})}),j(!0),Y().then(e=>{if(console.log(e),!(e!=null&&e.length))return o.error(i({en:"No data to show",vi:"Không có dữ liệu"}));R(e),o.success({key:t,content:i({en:"Fetch messages completed",vi:"Tải xong tin nhắn"})})}).catch(e=>{o.error({key:t,content:i({en:"Failed to fetch messages",vi:"Lỗi tải tin nhắn"})+": "+e.message}),console.log(e)}).finally(()=>{j(!1)})},G=t=>{console.log(t)},U=t=>()=>{var e,a;T("AllMessages:onClickFirstMessages"),r("/messages/first",{state:{friendUid:t.id||((a=(e=t==null?void 0:t.participants)==null?void 0:e[0])==null?void 0:a.id)}})},q=(t,e,a)=>{var s,p,g,k,b,C,w,N;return n.jsxs(F,{align:"middle",children:[e.isGroup?n.jsx(S,{arrow:!0,overlayStyle:{maxHeight:"350px",overflow:"auto",border:"1px dashed gray",borderRadius:"5px"},menu:{items:[{key:"-1",type:"group",label:n.jsx(D,{level:5,style:{textAlign:"center"},children:i({en:`${(s=e.participants)==null?void 0:s.length} members`,vi:`${(p=e.participants)==null?void 0:p.length} thành viên`})})},{type:"divider"},...((k=(g=e.participants)==null?void 0:g.map)==null?void 0:k.call(g,l=>({key:l.id,label:n.jsx("b",{children:l.name}),icon:n.jsx(h,{shape:"square",src:l.avatar}),onClick:()=>window.open(J(l.id))})))||[]]},children:n.jsx(I,{children:e.image?n.jsx(h,{shape:"square",size:40,src:n.jsx(M,{src:e.image})}):n.jsx(h.Group,{max:{count:5},children:e.participants.filter(l=>l.id!=(c==null?void 0:c.id)).map(l=>n.jsx(h,{src:l.avatar},l.id))})})}):n.jsx(h,{shape:"square",size:40,src:n.jsx(M,{src:e.image||Q((C=(b=e.participants)==null?void 0:b[0])==null?void 0:C.id),fallback:(N=(w=e.participants)==null?void 0:w[0])==null?void 0:N.avatar})}),n.jsx("a",{href:e.url,target:"_blank",style:{marginLeft:"10px"},children:n.jsx("b",{children:e.name})})]})},z=(t,e,a)=>n.jsxs(I.Compact,{children:[n.jsx(u,{title:i({en:"First messages",vi:"Tin nhắn đầu tiên"}),children:n.jsx(d,{type:"primary",icon:n.jsx("i",{className:"fa-solid fa-clock-rotate-left"}),onClick:U(e)})}),n.jsx(u,{title:i({en:"Download",vi:"Tải xuống"}),children:n.jsx(d,{disabled:!0,type:"primary",icon:n.jsx("i",{className:"fa-solid fa-download"})})}),n.jsx(u,{title:i({en:"Delete",vi:"Xoá"}),children:n.jsx(d,{danger:!0,disabled:!0,icon:n.jsx("i",{className:"fa-solid fa-trash"})})})]}),P=[{title:"#",key:"recent",dataIndex:"recent",sorter:(t,e)=>t.recent-e.recent,render:(t,e,a)=>e.recent+1,width:70,align:"center",headerAlign:"center"},{title:i({en:"Name",vi:"Tên"}),dataIndex:"name",key:"name",sorter:(t,e)=>t.name.localeCompare(e.name),render:q,filters:[{text:i({en:"Inactive",vi:"Không hoạt động"}),value:"inactive"}],onFilter:(t,e)=>t=="inactive"?e.name=="-no data-"||e.name=="Người dùng Facebook":!0,onSearch:(t,e,a)=>{let s=t.toLowerCase();return a.name.toLocaleLowerCase().includes(s)||a.participants.some(p=>p.name.toLocaleLowerCase().includes(s))},width:"auto"},{title:"Id",dataIndex:"id",key:"id",sorter:(t,e)=>t.id>e.id,onSearch:(t,e,a)=>{let s=t.toLowerCase();return a.id.includes(s)||a.participants.some(p=>p.id.includes(s))},width:150},{title:i({en:"Messages",vi:"Tin nhắn"}),dataIndex:"count",key:"count",sorter:(t,e)=>t.count-e.count,render:(t,e,a)=>A(e.count),width:100,align:"right"},{title:i({en:"Members",vi:"Thành viên"}),dataIndex:"participants",key:"participants",sorter:(t,e)=>t.participants.length-e.participants.length,render:(t,e,a)=>A(e.participants.length),width:100,align:"right"},{title:i({en:"Type",vi:"Loại"}),dataIndex:"type",key:"type",render:(t,e,a)=>e.isGroup?i({en:"Group",vi:"Nhóm"}):i({en:"Personal",vi:"Cá nhân"}),filters:[{text:i({en:"Group",vi:"Nhóm"}),value:!0},{text:i({en:"Personal",vi:"Cá nhân"}),value:!1}],onFilter:(t,e)=>e.isGroup==t,width:100,align:"right"},{title:i({en:"Action",vi:"Hành động"}),dataIndex:"action",key:"download",render:z,width:150,align:"right"}],_=t=>n.jsxs(n.Fragment,{children:[n.jsx(d,{type:"primary",icon:v?n.jsx("i",{className:"fa-solid fa-rotate-right fa-spin"}):n.jsx("i",{className:"fa-solid fa-rotate-right"}),onClick:y,children:i({en:"Reload",vi:"Tải lại"})}),n.jsx(V,{data:t.length?t:m,options:[{key:"uid",label:".txt (uid)",prepareData:e=>({fileName:"messages_uid.txt",data:E(e).map(a=>a.uid).join(`
`)})},{key:"uid_name",label:".csv (uid+name)",prepareData:e=>({fileName:"messages_uid_name.csv",data:L(E(e))})},{key:"json",label:".json",prepareData:e=>({fileName:"messages.json",data:JSON.stringify(e,null,2)})},{key:"csv",label:".csv",prepareData:e=>({fileName:"messages.csv",data:L(e.map(a=>({...a,participants:a.participants.map(s=>s.name).join(", "),participantIds:a.participants.map(s=>s.id).join(", ")})))})}]}),t!=null&&t.length?n.jsx(d,{danger:!0,disabled:!0,icon:n.jsx("i",{className:"fa-solid fa-trash-can"}),onClick:()=>G(t),children:i({en:"Delete",vi:"Xoá"})+(t.length?" "+t.length:"")}):null,t.length?n.jsx(x,{color:"processing",style:{marginLeft:"10px",fontWeight:"bold"},children:i({en:`Selected ${t.length} messages`,vi:`Đã chọn ${t.length} tin nhán`})}):null]});return n.jsxs("div",{style:{display:"flex",flexDirection:"column",width:"100%",height:"100%"},children:[n.jsxs(F,{align:"middle",style:{margin:"16px"},children:[n.jsx(D,{level:3,style:{margin:0},children:i({en:"Messages manager",vi:"Quản lý tin nhắn"})}),n.jsx(x,{style:{marginLeft:"10px",fontWeight:"bold",color:"#888"},children:m.length}),n.jsx(u,{title:i({en:'Can only view messages that not have "End to end encryption" (e2ee)',vi:'Chỉ có thể xem tin nhắn không bị "Mã hoá đầu cuối" (e2ee)'}),children:n.jsx(x,{color:"orange",icon:n.jsx("i",{className:"fa-solid fa-lock-open"}),children:" "+i({en:"Only none e2ee",vi:"Không bị mã hoá đầu cuối"})})})]}),n.jsx(ee,{data:m,columns:P,size:"small",searchable:!0,selectable:!0,keyExtractor:t=>t.id,style:{flex:1,maxHeight:"100%"},renderTitle:_})]})}export{ve as default};