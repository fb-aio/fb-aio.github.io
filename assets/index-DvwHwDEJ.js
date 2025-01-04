const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./MyTable-DZ0VmC_V.js","./index-StVibqow.js","./index-BztIVJMw.css","./index-DHJuY8dO.js","./index-Ce6uhCjP.js","./MyApp-CbrjJD8r.js","./index-DolJMkAh.js","./PurePanel-DsMkbw0R.js","./SearchOutlined-BnZyM7z3.js","./Table-BDmTVyUn.js","./addEventListener-Dl-hk_tO.js","./index-DUTxxdew.js","./index-KGofhwC-.js","./Dropdown-BDo8kzeD.js","./useBreakpoint-B3LXcUGg.js","./Pagination-CcYHpbAp.js","./index-87Ip3Uz8.js","./EyeOutlined-C05Y4B6v.js","./row-BnbuKKRL.js"])))=>i.map(i=>d[i]);
import{ax as X,ay as Z,b7 as ee,aK as te,r as j,aM as n,b4 as b,aO as x,b2 as ne,aW as ie,aE as P,bq as se,ba as ae,bb as re,bt as oe}from"./index-StVibqow.js";import{d as N}from"./dayjs.min-X05D20GD.js";import{u as le}from"./useForceStop-DzgQPSfw.js";import{E as ce}from"./ExportButton-D-QnvAtD.js";import{u as ue,i as S,t as V,S as L,b as f,T as E,a as A,j as de}from"./MyApp-CbrjJD8r.js";import{g as me,U as u,a as pe,S as T,l as he,b as ge}from"./groups-Dcq-0GNW.js";import{W as xe}from"./WordStatisticButton-CPsHN9mM.js";import{u as fe}from"./useAction-5yTyT1VJ.js";import{A as ve}from"./index-Du30Turh.js";import{T as G}from"./index-Ce6uhCjP.js";import{R as ye}from"./row-BnbuKKRL.js";import"./file-download-C3AX8Z5E.js";import"./index-KGofhwC-.js";import"./Dropdown-BDo8kzeD.js";import"./PurePanel-DsMkbw0R.js";import"./MyTable-DZ0VmC_V.js";import"./index-DHJuY8dO.js";import"./index-DolJMkAh.js";import"./SearchOutlined-BnZyM7z3.js";import"./Table-BDmTVyUn.js";import"./addEventListener-Dl-hk_tO.js";import"./index-DUTxxdew.js";import"./useBreakpoint-B3LXcUGg.js";import"./Pagination-CcYHpbAp.js";import"./index-87Ip3Uz8.js";import"./EyeOutlined-C05Y4B6v.js";import"./BadgeWrapper-DnlnX0t1.js";import"./Collapse-7C1LygD_.js";import"./index-BUGDNAu9.js";const Te=j.lazy(()=>ie(()=>import("./MyTable-DZ0VmC_V.js").then(k=>k.a),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18]),import.meta.url));function Ke(){const k=X(Z.devMode),{message:m,notification:Y}=ue(),$=ee(),{ti:s}=te(),{onClickAction:U,onClickBulkActions:w}=fe(),B=le(),[p,C]=S("Groups.data",[]),[H,D]=S("Groups.finished",!1),[M,F]=j.useState(!1),R=j.useRef(null),W=(t,e=u.NOT_JOINED)=>C(i=>re(i,r=>{const l=r.findIndex(c=>c.id==t);return r[l].userType=e,r}));j.useEffect(()=>{H||O(!1)},[]);const O=async(t=!1)=>{var c;if(M&&!t)return;const e=B.start(),i=t?[]:[...p],r=new Set(i.map(a=>a.id)),l="Groups:onReload";V(l),F(!0),D(!1);try{for(const[a,o]of[[me,u.ADMIN],[pe,u.MEMBER]]){const d=i[i.length-1];let v=t?"":(d==null?void 0:d.userType)===o?d==null?void 0:d.cursor:"";for(;!e.value();){m.loading({key:l,content:s({en:"Loading groups...",vi:"Đang tải nhóm..."})+i.length,duration:0});const y=await a({cursor:v}),h=y==null?void 0:y.filter(g=>!r.has(g.id));if(y.forEach(g=>r.add(g.id)),!(h!=null&&h.length))break;i.push(...h),v=(c=i==null?void 0:i[(i==null?void 0:i.length)-1])==null?void 0:c.cursor,C([...i])}}m.success({key:l,content:(e.value()?s({en:"Load groups stopped ",vi:"Dừng tải nhóm "}):s({en:"Load groups completed ",vi:"Tải xong nhóm "}))+i.length}),D(!e.value())}catch(a){m.error({content:s({en:"Failed to load groups: ",vi:"Lỗi tải nhóm: "})+a.message})}finally{F(!1)}},J=t=>w({data:t,key:"Groups:onClickLeaveSelectedGroups",actionFn:I,loadingText(e,i,r){return s({en:"Leaving groups...",vi:"Đang rời nhóm..."})},successText(e,i){return s({en:"Bulk leave groups completed",vi:"Hoàn tất Rời nhóm hàng loạt"})},successDescItem(e){return n.jsx("a",{target:"_blank",href:A(e.id),children:e.name})},confirmProps:{title:s({en:`Leave ${t.length} groups`,vi:`Rời ${t.length} nhóm`}),text:s({en:`Are your sure want to Leave ${t.length} groups?`,vi:`Bản có chãc muốn rời ${t.length} nhóm?`})}}),I=(t,e=!1)=>U({key:"Groups:onClickLeaveGroup",id:t.id,record:t,actionFn:()=>k?P(1e3):he(t.id),loadingText(i){return s({en:"Leaving group...",vi:"Đang rời nhóm..."})+i.name},successText(i){return s({en:"Left group ",vi:"Đã rời nhóm "})+i.name},failedText(i){return s({en:"Failed to leave group: ",vi:"Lỗi rời nhóm: "})+i.name},onSuccess(){W(t.id)},needConfirm:e,confirmProps:{title:s({en:"Leave group?",vi:"Rời nhóm?"}),text:t.name}}),q=async t=>{var c,a;if(!await de())return;const e="Groups:onClickFindNoAdminGroups",i=e+":waiting";V(e),m.loading({key:e,duration:0,content:s({en:"Finding groups no admin... ",vi:"Đang tìm nhóm không có admin... "})});let r=[],l=!1;for(let o=0;o<t.length&&!l;o++){const d=t[o],v={key:e,duration:0,content:n.jsxs(n.Fragment,{children:[s({en:"Checking group... ",vi:"Đang kiểm tra... "})+`${o+1}/${t.length}`,n.jsx("br",{}),d.name,n.jsx("br",{}),s({en:"Found ",vi:"Tìm thấy "})+r.length,n.jsx("br",{}),n.jsx("i",{children:s({en:"Click to stop",vi:"Bấm để dừng"})})]}),onClick:()=>{l=!0}};if(m.loading(v),(await ge(d.id)).adminCount===0&&(r.push(d),(a=(c=R.current)==null?void 0:c.setDataSelected)==null||a.call(c,[...r])),m.success(v),o<t.length-1){const h=oe(2e3,5e3);await P(h,g=>(m.loading({key:i,content:s({en:"Waiting "+Math.round(g/1e3)+"s",vi:"Đang đợi "+Math.round(g/1e3)+"s"}),duration:0}),l))}}m.destroy(e),m.destroy(i),Y.open({type:"success",duration:0,message:s({en:`Found ${r.length}/${t.length} groups no admin`,vi:`Tìm thấy ${r.length}/${t.length} nhóm không có admin`}),description:n.jsx("ol",{style:{maxHeight:300,overflowY:"auto",whiteSpace:"pre-wrap"},children:r.map(o=>n.jsx("li",{children:n.jsx("a",{target:"_blank",href:A(o.id),children:o.name})},o.id))})})},z=t=>{$("/bulk-downloader",{state:{targetId:t.id,platform:se.Facebook}})},K=t=>{var l,c;const e=t!=null&&t.length?[...t]:[...p],i=((l=e==null?void 0:e.map(a=>p.find(o=>o.id===a.id)))==null?void 0:l.filter(a=>a&&a.userType!==u.NOT_JOINED))||[],r=((c=e==null?void 0:e.map(a=>p.find(o=>o.id===a.id)))==null?void 0:c.filter(a=>a&&a.userType!==u.ADMIN&&a.userType!==u.PENDING))||[];return n.jsxs(n.Fragment,{children:[n.jsx(x,{type:"primary",icon:M?n.jsx("i",{className:"fa-solid fa-rotate-right fa-spin"}):n.jsx("i",{className:"fa-solid fa-rotate-right"}),onClick:()=>O(!0),children:s({en:"Reload",vi:"Tải lại"})}),n.jsx(ce,{data:e,options:[{key:"id",label:".txt (group id)",prepareData:a=>({fileName:"your_groups_id"+N().format("YYYY-MM-DD-HHmmss")+".txt",data:a==null?void 0:a.map(o=>o.id).join(`
`)})},{key:"json",label:".json",prepareData:a=>({fileName:"your_groups"+N().format("YYYY-MM-DD-HHmmss")+".json",data:JSON.stringify(a==null?void 0:a.map(o=>({...o,last_visited:b(o.lastVisitedTime,s({en:"en-US",vi:"vi-VN"}))})),null,4)})},{key:"csv",label:".csv",prepareData:a=>({fileName:"your_groups"+N().format("YYYY-MM-DD-HHmmss")+".csv",data:ae(a)})}]}),n.jsx(f,{title:s({en:`Leave ${i.length} selected groups`,vi:`Rời ${i.length} nhóm được chọn`}),children:n.jsx(x,{danger:!0,disabled:i.length<=0,icon:n.jsx("i",{className:"fa-regular fa-trash-can"}),onClick:()=>J(i),children:i.length})}),n.jsx(f,{title:s({en:`Find groups that have no admin in ${r.length} selected groups`,vi:`Tìm nhóm không có admin quản lý trong ${r.length} nhóm được chọn`}),children:n.jsx(x,{icon:n.jsx("i",{className:"fa-solid fa-user-large-slash"}),onClick:()=>q(r),disabled:r.length<=0,children:r.length})}),n.jsx(xe,{name:"Groups",text:p.map(a=>a.name).join(" ")}),n.jsx(f,{title:s({en:"View on Facebook",vi:"Xem trên Facebook"}),children:n.jsx(x,{icon:n.jsx("i",{className:"fa-solid fa-external-link"}),onClick:()=>window.open("https://www.facebook.com/groups/joins","_blank")})})]})},_=t=>{switch(t){case u.MEMBER:return{color:"default",text:s({en:"Member",vi:"Thành viên"})};case u.ADMIN:return{color:"success",text:"Admin"};case u.NOT_JOINED:return{color:"error",text:s({en:"Left group",vi:"Đã rời nhóm"})};case u.PENDING:return{color:"warning",text:s({en:"Pending",vi:"Đang chờ"})};default:return{color:"default",text:"?"}}},Q=[{title:"#",key:"index",dataIndex:"index"},{title:s({en:"Group",vi:"Nhóm"}),key:"group",dataIndex:"group",sorter:(t,e)=>t.name.localeCompare(e.name),render:(t,e,i)=>n.jsxs(L,{style:{maxWidth:400},align:"start",children:[n.jsx(ve,{src:e.avatar,size:45}),n.jsxs(L,{direction:"vertical",size:0,children:[n.jsx(G.Link,{href:e.url,target:"_blank",children:n.jsx("b",{children:e.name})}),n.jsx(G.Text,{type:"secondary",children:e.id})]})]})},{title:s({en:"Last visit",vi:"Lần xem gần nhất"}),key:"lastVisitedTime",dataIndex:"lastVisitedTime",sorter:(t,e)=>t.lastVisitedTime-e.lastVisitedTime,render:(t,e,i)=>b(e.lastVisitedTime,s({en:"en-US",vi:"vi-VN"})),align:"right"},{title:s({en:"Type",vi:"Loại"}),key:"type",dataIndex:"userType",render:(t,e,i)=>{const{color:r,text:l}=_(e.userType);return n.jsxs(n.Fragment,{children:[e.subspaceType==T.TOP_LEVEL_GROUP&&n.jsxs(n.Fragment,{children:[n.jsx(f,{title:s({en:"Your most interested group",vi:"Nhóm bạn quan tâm nhất"}),children:n.jsx(E,{color:"purple",children:"Top level"})}),n.jsx("br",{})]}),n.jsx(E,{color:r,children:l})]})},filters:[...Object.values(u).map(t=>{const{text:e}=_(t);return{text:e+" ("+p.filter(i=>i.userType==t).length+")",value:t}}),{text:"Top level ("+p.filter(t=>t.subspaceType==T.TOP_LEVEL_GROUP).length+")",value:T.TOP_LEVEL_GROUP}],onFilter:(t,e)=>t==T.TOP_LEVEL_GROUP?e.subspaceType==t:e.userType==t,align:"right"},{title:s({en:"Action",vi:"Hành động"}),key:"action",render:(t,e,i)=>n.jsxs(L.Compact,{style:{minWidth:30},children:[n.jsx(f,{title:s({en:"Bulk Downloader",vi:"Tải hàng loạt"}),children:n.jsx(x,{type:"default",onClick:()=>z(e),icon:n.jsx("i",{className:"fa-solid fa-download"})})}),e.userType!==u.NOT_JOINED?n.jsx(f,{title:s({en:"Leave group",vi:"Rời nhóm"}),children:n.jsx(x,{danger:!0,onClick:()=>I(e,!0),icon:n.jsx("i",{className:"fa-regular fa-trash-can"})})}):null]}),align:"right"}];return n.jsxs("div",{style:{display:"flex",flexDirection:"column",width:"100%",height:"100%"},children:[n.jsxs(ye,{align:"middle",style:{margin:"16px"},children:[n.jsx(G.Title,{level:3,style:{margin:0},children:s({en:"Groups manager",vi:"Quản lý nhóm"})}),n.jsx(E,{style:{marginLeft:"10px",fontWeight:"bold",color:"#888"},children:p.length})]}),n.jsx(Te,{ref:R,data:[...p].sort((t,e)=>e.subspaceType.localeCompare(t.subspaceType)).map((t,e)=>({...t,index:e+1})),columns:Q,renderTitle:K,size:"small",searchable:!0,selectable:!0,onSearchRow:(t,e)=>ne(t,(e==null?void 0:e.name)+(e==null?void 0:e.id)+b(e==null?void 0:e.lastVisitedTime,s({en:"en-US",vi:"vi-VN"}))),keyExtractor:t=>t==null?void 0:t.id})]})}export{Ke as default};
