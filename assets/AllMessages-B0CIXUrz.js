const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./MyTable-DyLWz5GL.js","./index-Dq6UPbsP.js","./index-BQK5nDE1.css","./index-DNfJyj4v.js","./MyApp-BTYdPTVB.js","./index-CW46MApr.js","./DownOutlined-CrOxwYfW.js","./Table-BGTzDIZ_.js","./List-DVOHq3an.js","./index-N8HxwDyV.js","./index-KCfhOeUK.js","./index-DRDww-Ua.js","./index-80AkyT7H.js","./PurePanel-So8q29zC.js","./move-C7RwC402.js","./index-zbl1bWiE.js","./SearchOutlined-BH0p4zVJ.js","./useBreakpoint-P_qQFUcH.js","./useForceUpdate-B9AteBaR.js","./responsiveObserver-NgjVjXeY.js","./Pagination-D4T308c2.js","./index-Cpl6jYUD.js","./row-CJs6QHwV.js"])))=>i.map(i=>d[i]);
import{b4 as O,br as W,r as k,b7 as M,b6 as t,bc as S,b9 as m,bv as A}from"./index-Dq6UPbsP.js";import{E as V}from"./ExportButton-ClZFwMj5.js";import{u as $,a as J,i as Q,t as j,c as F,T as h,d as Z,j as ee,S as y,I as L,k as ne,l as E}from"./MyApp-BTYdPTVB.js";import{g as te,a as ie,s as ae}from"./messages-E-qQKPbn.js";import{f as se}from"./file-download-DyAyiq4I.js";import{d as oe}from"./dayjs.min-V1wJ-Gka.js";import{B as le}from"./BadgeWrapper-DOEj59Rx.js";import{R as G}from"./row-CJs6QHwV.js";import{D as re}from"./index-80AkyT7H.js";import{A as f}from"./index-Cl-4-Bf3.js";import"./responsiveObserver-NgjVjXeY.js";import"./PurePanel-So8q29zC.js";import"./move-C7RwC402.js";import"./useBreakpoint-P_qQFUcH.js";import"./useForceUpdate-B9AteBaR.js";import"./index-Bbf3WYDo.js";const ce=k.lazy(()=>S(()=>import("./MyTable-DyLWz5GL.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22]),import.meta.url)),{Title:R}=Z,P=l=>{const u=new Set;return l.map(i=>i.isGroup?i.participants.map(p=>({uid:p.id,name:p.name})):{uid:i.id,name:i.name}).flat().forEach(({uid:i,name:p})=>{u.has(i)||u.add({uid:i,name:p})}),Array.from(u.values())};function H(l){return l.name=="-no data-"||l.name=="Người dùng Facebook"}function Te(){const{message:l,notification:u}=$(),{ti:i}=O(),p=W(),{profile:g}=J(),[r,U]=Q("AllMessages.data",[]),[w,b]=k.useState(!1);k.useEffect(()=>{r!=null&&r.length||C()},[]);const C=()=>{if(w)return;const e="AllMessages:onClickReload";j(e),l.loading({key:e,duration:0,content:i({en:"Fetching messages...",vi:"Đang tải tin nhắn"})}),b(!0),te().then(n=>{if(console.log(n),!(n!=null&&n.length))return l.error({key:e,content:i({en:"No data to show",vi:"Không có dữ liệu"})});U(n),l.success({key:e,content:i({en:"Fetch messages completed",vi:"Tải xong tin nhắn"})})}).catch(n=>{l.error({key:e,content:i({en:"Failed to fetch messages",vi:"Lỗi tải tin nhắn"})+": "+n.message}),console.log(n)}).finally(()=>{b(!1)})},q=e=>{console.log(e)},B=e=>()=>{var n,a,s,o;j("AllMessages:onClickFirstMessages"),p("/messages/first",{state:{threadId:e.id||((a=(n=e==null?void 0:e.participants)==null?void 0:n[0])==null?void 0:a.id),threadName:e.name||((o=(s=e==null?void 0:e.participants)==null?void 0:s[0])==null?void 0:o.name)}})},z=async e=>{if(!await E())return;j("AllMessages:onClickDownloadMultipleThreads");for(let a of e)if(await D(a))break},D=async e=>{if(!await E())return;const n="AllMessages:onClickDownloadThread";j(n);const a=e.name,s=n+e.id;l.loading({key:s,duration:0,content:i({en:"Downloading messages...",vi:"Đang tải tin nhắn..."})+a});let o=!1;const d=await ie({threadId:e.id,checkStopFn:()=>o,progressCallback:x=>{l.loading({key:s,duration:0,content:t.jsxs(t.Fragment,{children:[i({en:"Downloading messages... ",vi:"Đang tải tin nhắn... "})+a,t.jsx("br",{}),x.length,i({en:" messages",vi:" tin nhắn"}),t.jsx("br",{}),oe(x[0].time).format("YYYY-MM-DD HH:mm:ss"),t.jsx("br",{}),t.jsx("i",{children:i({en:"Click to stop",vi:"Bấm để dừng"})})]}),onClick:()=>{l.loading({key:s,duration:0,content:i({en:"Stopping...",vi:"Đang dừng..."})}),o=!0}})}});l.destroy(s),u.open({type:"success",duration:0,message:i(o?{en:"Download stopped: ",vi:"Đã dừng tải: "}:{en:"Download completed: ",vi:"Tải xong: "})+a,description:d.length+i({en:" messages",vi:" tin nhắn"})});const v=ae({threadId:e.id||"",threadName:a,myUid:(g==null?void 0:g.uid)||"",msgs:d});return se(v,a+".html"),o},X=(e,n,a)=>{var s,o,d,v,x,T,N,I;return t.jsxs(G,{align:"middle",children:[n.isGroup?t.jsx(re,{arrow:!0,overlayStyle:{maxHeight:"350px",overflow:"auto",border:"1px dashed gray",borderRadius:"5px"},menu:{items:[{key:"-1",type:"group",label:t.jsx(R,{level:5,style:{textAlign:"center"},children:i({en:"".concat((s=n.participants)==null?void 0:s.length," members"),vi:"".concat((o=n.participants)==null?void 0:o.length," thành viên")})})},{type:"divider"},...((v=(d=n.participants)==null?void 0:d.map)==null?void 0:v.call(d,c=>({key:c.id,label:t.jsx("b",{children:c.name}),icon:t.jsx(f,{shape:"square",src:c.avatar}),onClick:()=>window.open(ee(c.id))})))||[]]},children:t.jsx(y,{children:n.image?t.jsx(f,{shape:"square",size:40,src:t.jsx(L,{src:n.image})}):t.jsx(f.Group,{max:{count:5},children:n.participants.filter(c=>c.id!=(g==null?void 0:g.id)).map(c=>t.jsx(f,{src:c.avatar},c.id))})})}):t.jsx(f,{shape:"square",size:40,src:t.jsx(L,{src:n.image||ne((T=(x=n.participants)==null?void 0:x[0])==null?void 0:T.id),fallback:(I=(N=n.participants)==null?void 0:N[0])==null?void 0:I.avatar})}),t.jsx("a",{href:n.url,target:"_blank",style:{marginLeft:"10px"},children:t.jsx("b",{children:n.name})})]})},Y=(e,n,a)=>t.jsxs(y.Compact,{children:[t.jsx(h,{title:i({en:"First messages",vi:"Tin nhắn đầu tiên"}),children:t.jsx(m,{type:"primary",icon:t.jsx("i",{className:"fa-solid fa-clock-rotate-left"}),onClick:B(n)})}),t.jsx(h,{title:i({en:"Download messages",vi:"Tải cuộc trò chuyện"}),children:t.jsx(m,{type:"primary",icon:t.jsx("i",{className:"fa-solid fa-download"}),onClick:()=>D(n)})}),t.jsx(h,{title:i({en:"Delete (Coming soon)",vi:"Xoá (Sắp có)"}),children:t.jsx(m,{danger:!0,disabled:!0,icon:t.jsx("i",{className:"fa-solid fa-trash"})})})]}),_=[{title:"#",key:"recent",dataIndex:"recent",sorter:(e,n)=>e.recent-n.recent,render:(e,n,a)=>n.recent+1,width:70,align:"center",headerAlign:"center"},{title:i({en:"Name",vi:"Tên"}),dataIndex:"name",key:"name",sorter:(e,n)=>e.name.localeCompare(n.name),render:X,filters:[{text:i({en:"Inactive (",vi:"Không hoạt động ("})+r.filter(H).length+")",value:"inactive"}],onFilter:(e,n)=>e=="inactive"?H(n):!0,onSearch:(e,n,a)=>{let s=e.toLowerCase();return a.name.toLocaleLowerCase().includes(s)||a.participants.some(o=>o.name.toLocaleLowerCase().includes(s))},width:"auto"},{title:"Id",dataIndex:"id",key:"id",sorter:(e,n)=>e.id>n.id,onSearch:(e,n,a)=>{let s=e.toLowerCase();return a.id.includes(s)||a.participants.some(o=>o.id.includes(s))},width:150},{title:i({en:"Messages",vi:"Tin nhắn"}),dataIndex:"count",key:"count",sorter:(e,n)=>e.count-n.count,render:(e,n,a)=>M(n.count),width:100,align:"right"},{title:i({en:"Members",vi:"Nguời"}),dataIndex:"participants",key:"participants",sorter:(e,n)=>e.participants.length-n.participants.length,render:(e,n,a)=>M(n.participants.length),width:100,align:"right"},{title:i({en:"Type",vi:"Loại"}),dataIndex:"type",key:"type",render:(e,n,a)=>n.isGroup?i({en:"Group",vi:"Nhóm"}):i({en:"Personal",vi:"Cá nhân"}),filters:[{text:i({en:"Group (",vi:"Nhóm ("})+r.filter(e=>e.isGroup).length+")",value:!0},{text:i({en:"Personal (",vi:"Cá nhân ("})+r.filter(e=>!e.isGroup).length+")",value:!1}],onFilter:(e,n)=>n.isGroup==e,width:100,align:"right"},{title:i({en:"Action",vi:"Hành động"}),dataIndex:"action",key:"download",render:Y,width:150,align:"right"}],K=e=>t.jsxs(t.Fragment,{children:[t.jsx(m,{type:"primary",icon:w?t.jsx("i",{className:"fa-solid fa-rotate-right fa-spin"}):t.jsx("i",{className:"fa-solid fa-rotate-right"}),onClick:C,children:i({en:"Reload",vi:"Tải lại"})}),t.jsx(V,{data:e.length?e:r,options:[{key:"uid",label:".txt (uid)",prepareData:n=>({fileName:"messages_uid.txt",data:P(n).map(a=>a.uid).join("\n")})},{key:"uid_name",label:".csv (uid+name)",prepareData:n=>({fileName:"messages_uid_name.csv",data:A(P(n))})},{key:"json",label:".json",prepareData:n=>({fileName:"messages.json",data:JSON.stringify(n,null,2)})},{key:"csv",label:".csv",prepareData:n=>({fileName:"messages.csv",data:A(n.map(a=>({...a,participants:a.participants.map(s=>s.name).join(", "),participantIds:a.participants.map(s=>s.id).join(", ")})))})}]}),t.jsxs(y.Compact,{children:[t.jsx(h,{title:i({en:"Delete selected (Coming soon)",vi:"Xoá lựa chọn (Sắp có)"}),children:t.jsx(m,{danger:!0,disabled:!0,icon:t.jsx("i",{className:"fa-solid fa-trash-can"}),onClick:()=>q(e),children:i({en:"Delete",vi:"Xoá"})+(e.length?" "+e.length:"")})}),t.jsx(h,{title:e.length?i({en:"Download "+e.length+" messages",vi:"Tải "+e.length+" cuộc trò chuyện"}):i({en:"Select messages to download",vi:"Chọn cuộc trò chuyện để tải"}),children:t.jsxs(m,{disabled:!(e!=null&&e.length),icon:t.jsx("i",{className:"fa-solid fa-download"}),onClick:()=>z(e),children:[i({en:"Download ",vi:"Tải "})," ",e.length||""]})})]}),t.jsx(le,{type:"new",children:t.jsx(h,{title:i({en:"How to delete all conversations",vi:"Cách xoá tất cả cuộc trò chuyện"}),children:t.jsx(m,{href:"https://www.facebook.com/groups/fbaio/posts/1617211938933488",target:"_blank",icon:t.jsx("i",{className:"fa-solid fa-arrow-up-right-from-square"}),iconPosition:"end",children:i({en:"Delete all",vi:"Xoá tất cả"})})})})]});return t.jsxs("div",{style:{display:"flex",flexDirection:"column",width:"100%",height:"100%"},children:[t.jsxs(G,{align:"middle",style:{margin:16},children:[t.jsx(R,{level:3,style:{margin:0},children:i({en:"Messages manager",vi:"Quản lý tin nhắn"})}),t.jsx(F,{style:{marginLeft:"10px",fontWeight:"bold",color:"#888"},children:r.length}),t.jsx(h,{title:i({en:'Can only view messages that not have "End to end encryption" (e2ee)',vi:'Chỉ có thể xem tin nhắn không bị "Mã hoá đầu cuối" (e2ee)'}),children:t.jsx(F,{color:"orange",icon:t.jsx("i",{className:"fa-solid fa-lock-open"}),children:" "+i({en:"Only none e2ee",vi:"Không bị mã hoá đầu cuối"})})})]}),t.jsx(ce,{data:r,columns:_,size:"small",searchable:!0,selectable:!0,keyExtractor:e=>e==null?void 0:e.id,style:{flex:1,maxHeight:"100%"},renderTitle:K})]})}export{Te as default};
