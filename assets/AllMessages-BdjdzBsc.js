const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./MyTable-SRrchFyc.js","./index-D-gFnDVj.js","./index-BztIVJMw.css","./index-ByOERiqS.js","./index-BGtHzT5k.js","./MyApp-DAVwyCu0.js","./index-YWTfdNWb.js","./PurePanel-C2dKwDMO.js","./SearchOutlined-Buwf07qR.js","./Table-DwFHJS4q.js","./addEventListener-K4xXqfxj.js","./index-UO7WEuSQ.js","./index-Bhy_q57K.js","./Dropdown-COiyk0ts.js","./useBreakpoint-Dt5O4iKS.js","./Pagination-C0iZN13H.js","./index-CVAwGFzo.js","./EyeOutlined-R6UpRx-V.js","./row-DBE6R5NH.js"])))=>i.map(i=>d[i]);
import{aK as S,b7 as X,ax as _,ay as V,r as k,b9 as I,aM as t,aW as $,aO as h,ba as A}from"./index-D-gFnDVj.js";import{E as J}from"./ExportButton-DNgTuA3f.js";import{u as Q,i as Z,t as y,T as F,b as g,a as ee,S as j,g as ne,j as L}from"./MyApp-DAVwyCu0.js";import{g as te,a as ie,s as ae}from"./messages-CY8lkELC.js";import{f as se}from"./file-download-1MwnfvWS.js";import{d as oe}from"./dayjs.min-8mGu5cHu.js";import{B as re}from"./BadgeWrapper-CWfKCySN.js";import{R as E}from"./row-DBE6R5NH.js";import{T as le}from"./index-BGtHzT5k.js";import{D as ce}from"./index-Bhy_q57K.js";import{A as f}from"./index-Xv9I72Je.js";import{I as G}from"./index-EN1CkmdA.js";import"./useBreakpoint-Dt5O4iKS.js";import"./Dropdown-COiyk0ts.js";import"./PurePanel-C2dKwDMO.js";import"./index-Ds5LfTrt.js";import"./EyeOutlined-R6UpRx-V.js";import"./addEventListener-K4xXqfxj.js";const de=k.lazy(()=>$(()=>import("./MyTable-SRrchFyc.js").then(o=>o.a),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18]),import.meta.url)),{Title:R}=le,U=o=>{const u=new Set;return o.map(i=>i.isGroup?i.participants.map(m=>({uid:m.id,name:m.name})):{uid:i.id,name:i.name}).flat().forEach(({uid:i,name:m})=>{u.has(i)||u.add({uid:i,name:m})}),Array.from(u.values())};function B(o){return o.name=="-no data-"||o.name=="Người dùng Facebook"}function Ie(){const{message:o,notification:u}=Q(),{ti:i}=S(),m=X(),p=_(V.profile)??{},[l,H]=Z("AllMessages.data",[]),[w,C]=k.useState(!1);k.useEffect(()=>{l!=null&&l.length||b()},[]);const b=()=>{if(w)return;const e="AllMessages:onClickReload";y(e),o.loading({key:e,duration:0,content:i({en:"Fetching messages...",vi:"Đang tải tin nhắn"})}),C(!0),te().then(n=>{if(console.log(n),!(n!=null&&n.length))return o.error({key:e,content:i({en:"No data to show",vi:"Không có dữ liệu"})});H(n),o.success({key:e,content:i({en:"Fetch messages completed",vi:"Tải xong tin nhắn"})})}).catch(n=>{o.error({key:e,content:i({en:"Failed to fetch messages",vi:"Lỗi tải tin nhắn"})+": "+n.message}),console.log(n)}).finally(()=>{C(!1)})},P=e=>{console.log(e)},q=e=>()=>{var n,a,s,r;y("AllMessages:onClickFirstMessages"),m("/messages/first",{state:{threadId:e.id||((a=(n=e==null?void 0:e.participants)==null?void 0:n[0])==null?void 0:a.id),threadName:e.name||((r=(s=e==null?void 0:e.participants)==null?void 0:s[0])==null?void 0:r.name)}})},z=async e=>{if(!await L())return;y("AllMessages:onClickDownloadMultipleThreads");for(let a of e)if(await T(a))break},T=async e=>{if(!await L())return;const n="AllMessages:onClickDownloadThread";y(n);const a=e.name,s=n+e.id;o.loading({key:s,duration:0,content:i({en:"Downloading messages...",vi:"Đang tải tin nhắn..."})+a});let r=!1;const d=await ie({threadId:e.id,checkStopFn:()=>r,progressCallback:x=>{o.loading({key:s,duration:0,content:t.jsxs(t.Fragment,{children:[i({en:"Downloading messages... ",vi:"Đang tải tin nhắn... "})+a,t.jsx("br",{}),x.length,i({en:" messages",vi:" tin nhắn"}),t.jsx("br",{}),oe(x[0].time).format("YYYY-MM-DD HH:mm:ss"),t.jsx("br",{}),t.jsx("i",{children:i({en:"Click to stop",vi:"Bấm để dừng"})})]}),onClick:()=>{o.loading({key:s,duration:0,content:i({en:"Stopping...",vi:"Đang dừng..."})}),r=!0}})}});o.destroy(s),u.open({type:"success",duration:0,message:i(r?{en:"Download stopped: ",vi:"Đã dừng tải: "}:{en:"Download completed: ",vi:"Tải xong: "})+a,description:d.length+i({en:" messages",vi:" tin nhắn"})});const v=ae({threadId:e.id||"",threadName:a,myUid:(p==null?void 0:p.uid)||"",msgs:d});return se(v,a+".html"),r},K=(e,n,a)=>{var s,r,d,v,x,D,N,M;return t.jsxs(E,{align:"middle",children:[n.isGroup?t.jsx(ce,{arrow:!0,overlayStyle:{maxHeight:"350px",overflow:"auto",border:"1px dashed gray",borderRadius:"5px"},menu:{items:[{key:"-1",type:"group",label:t.jsx(R,{level:5,style:{textAlign:"center"},children:i({en:`${(s=n.participants)==null?void 0:s.length} members`,vi:`${(r=n.participants)==null?void 0:r.length} thành viên`})})},{type:"divider"},...((v=(d=n.participants)==null?void 0:d.map)==null?void 0:v.call(d,c=>({key:c.id,label:t.jsx("b",{children:c.name}),icon:t.jsx(f,{shape:"square",src:c.avatar}),onClick:()=>window.open(ee(c.id))})))||[]]},children:t.jsx(j,{children:n.image?t.jsx(f,{shape:"square",size:40,src:t.jsx(G,{src:n.image})}):t.jsx(f.Group,{max:{count:5},children:n.participants.filter(c=>c.id!=(p==null?void 0:p.id)).map(c=>t.jsx(f,{src:c.avatar},c.id))})})}):t.jsx(f,{shape:"square",size:40,src:t.jsx(G,{src:n.image||ne((D=(x=n.participants)==null?void 0:x[0])==null?void 0:D.id),fallback:(M=(N=n.participants)==null?void 0:N[0])==null?void 0:M.avatar})}),t.jsx("a",{href:n.url,target:"_blank",style:{marginLeft:"10px"},children:t.jsx("b",{children:n.name})})]})},O=(e,n,a)=>t.jsxs(j.Compact,{children:[t.jsx(g,{title:i({en:"First messages",vi:"Tin nhắn đầu tiên"}),children:t.jsx(h,{type:"primary",icon:t.jsx("i",{className:"fa-solid fa-clock-rotate-left"}),onClick:q(n)})}),t.jsx(g,{title:i({en:"Download messages",vi:"Tải cuộc trò chuyện"}),children:t.jsx(h,{type:"primary",icon:t.jsx("i",{className:"fa-solid fa-download"}),onClick:()=>T(n)})}),t.jsx(g,{title:i({en:"Delete (Coming soon)",vi:"Xoá (Sắp có)"}),children:t.jsx(h,{danger:!0,disabled:!0,icon:t.jsx("i",{className:"fa-solid fa-trash"})})})]}),W=[{title:"#",key:"recent",dataIndex:"recent",sorter:(e,n)=>e.recent-n.recent,render:(e,n,a)=>n.recent+1,width:70,align:"center",headerAlign:"center"},{title:i({en:"Name",vi:"Tên"}),dataIndex:"name",key:"name",sorter:(e,n)=>e.name.localeCompare(n.name),render:K,filters:[{text:i({en:"Inactive (",vi:"Không hoạt động ("})+l.filter(B).length+")",value:"inactive"}],onFilter:(e,n)=>e=="inactive"?B(n):!0,onSearch:(e,n,a)=>{let s=e.toLowerCase();return a.name.toLocaleLowerCase().includes(s)||a.participants.some(r=>r.name.toLocaleLowerCase().includes(s))},width:"auto"},{title:"Id",dataIndex:"id",key:"id",sorter:(e,n)=>e.id>n.id,onSearch:(e,n,a)=>{let s=e.toLowerCase();return a.id.includes(s)||a.participants.some(r=>r.id.includes(s))},width:150},{title:i({en:"Messages",vi:"Tin nhắn"}),dataIndex:"count",key:"count",sorter:(e,n)=>e.count-n.count,render:(e,n,a)=>I(n.count),width:100,align:"right"},{title:i({en:"Members",vi:"Nguời"}),dataIndex:"participants",key:"participants",sorter:(e,n)=>e.participants.length-n.participants.length,render:(e,n,a)=>I(n.participants.length),width:100,align:"right"},{title:i({en:"Type",vi:"Loại"}),dataIndex:"type",key:"type",render:(e,n,a)=>n.isGroup?i({en:"Group",vi:"Nhóm"}):i({en:"Personal",vi:"Cá nhân"}),filters:[{text:i({en:"Group (",vi:"Nhóm ("})+l.filter(e=>e.isGroup).length+")",value:!0},{text:i({en:"Personal (",vi:"Cá nhân ("})+l.filter(e=>!e.isGroup).length+")",value:!1}],onFilter:(e,n)=>n.isGroup==e,width:100,align:"right"},{title:i({en:"Action",vi:"Hành động"}),dataIndex:"action",key:"download",render:O,width:150,align:"right"}],Y=e=>t.jsxs(t.Fragment,{children:[t.jsx(h,{type:"primary",icon:w?t.jsx("i",{className:"fa-solid fa-rotate-right fa-spin"}):t.jsx("i",{className:"fa-solid fa-rotate-right"}),onClick:b,children:i({en:"Reload",vi:"Tải lại"})}),t.jsx(J,{data:e.length?e:l,options:[{key:"uid",label:".txt (uid)",prepareData:n=>({fileName:"messages_uid.txt",data:U(n).map(a=>a.uid).join(`
`)})},{key:"uid_name",label:".csv (uid+name)",prepareData:n=>({fileName:"messages_uid_name.csv",data:A(U(n))})},{key:"json",label:".json",prepareData:n=>({fileName:"messages.json",data:JSON.stringify(n,null,2)})},{key:"csv",label:".csv",prepareData:n=>({fileName:"messages.csv",data:A(n.map(a=>({...a,participants:a.participants.map(s=>s.name).join(", "),participantIds:a.participants.map(s=>s.id).join(", ")})))})}]}),t.jsxs(j.Compact,{children:[t.jsx(g,{title:i({en:"Delete selected (Coming soon)",vi:"Xoá lựa chọn (Sắp có)"}),children:t.jsx(h,{danger:!0,disabled:!0,icon:t.jsx("i",{className:"fa-solid fa-trash-can"}),onClick:()=>P(e),children:i({en:"Delete",vi:"Xoá"})+(e.length?" "+e.length:"")})}),t.jsx(re,{type:"new",children:t.jsx(g,{title:e.length?i({en:"Download "+e.length+" messages",vi:"Tải "+e.length+" cuộc trò chuyện"}):i({en:"Select messages to download",vi:"Chọn cuộc trò chuyện để tải"}),children:t.jsxs(h,{disabled:!(e!=null&&e.length),icon:t.jsx("i",{className:"fa-solid fa-download"}),onClick:()=>z(e),children:[i({en:"Download ",vi:"Tải "})," ",e.length||""]})})})]})]});return t.jsxs("div",{style:{display:"flex",flexDirection:"column",width:"100%",height:"100%"},children:[t.jsxs(E,{align:"middle",style:{margin:"16px"},children:[t.jsx(R,{level:3,style:{margin:0},children:i({en:"Messages manager",vi:"Quản lý tin nhắn"})}),t.jsx(F,{style:{marginLeft:"10px",fontWeight:"bold",color:"#888"},children:l.length}),t.jsx(g,{title:i({en:'Can only view messages that not have "End to end encryption" (e2ee)',vi:'Chỉ có thể xem tin nhắn không bị "Mã hoá đầu cuối" (e2ee)'}),children:t.jsx(F,{color:"orange",icon:t.jsx("i",{className:"fa-solid fa-lock-open"}),children:" "+i({en:"Only none e2ee",vi:"Không bị mã hoá đầu cuối"})})})]}),t.jsx(de,{data:l,columns:W,size:"small",searchable:!0,selectable:!0,keyExtractor:e=>e==null?void 0:e.id,style:{flex:1,maxHeight:"100%"},renderTitle:Y})]})}export{Ie as default};
