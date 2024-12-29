const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./MyTable-BEIJsV3m.js","./index-CmsGn86r.js","./index-BztIVJMw.css","./index-B7cEQYMX.js","./index-BXtBiJQD.js","./MyApp-p90doMj6.js","./index-BqAk4JPU.js","./PurePanel-BQ4uedwl.js","./SearchOutlined-BrdzK7Ba.js","./Table-BLweJkin.js","./addEventListener-ocyMbkjc.js","./index-XADWd7Om.js","./index-B1HYsyi_.js","./Dropdown-CodlDuOt.js","./useBreakpoint-D0UNXitX.js","./Pagination-DlrcA9We.js","./index-BynrIpOz.js","./EyeOutlined-BfmcXYbQ.js","./row-C3YPDlXe.js"])))=>i.map(i=>d[i]);
import{b7 as X,aK as K,r as b,aM as t,b4 as C,aO as g,b2 as Q,aW as Z,bb as ee,bp as ne,ba as te,aD as $,bs as I}from"./index-CmsGn86r.js";import{d as E}from"./dayjs.min--_G29JP5.js";import{u as ie}from"./useForceStop-L5We5tKo.js";import{E as se}from"./ExportButton-Co-9acvu.js";import{u as ae,i as P,t as v,S as j,b as x,T as L,a as D,j as Y}from"./MyApp-p90doMj6.js";import{g as re,U as p,a as oe,S as k,l as le,b as ce}from"./groups-CjdcMcFZ.js";import{W as de}from"./WordStatisticButton-B2Y2SYom.js";import{A as pe}from"./index-CBe1NAVr.js";import{T as M}from"./index-BXtBiJQD.js";import{R as me}from"./row-C3YPDlXe.js";import{P as ue}from"./index-fbblHB6P.js";import"./file-download-C7JdeXV2.js";import"./index-B1HYsyi_.js";import"./Dropdown-CodlDuOt.js";import"./PurePanel-BQ4uedwl.js";import"./MyTable-BEIJsV3m.js";import"./index-B7cEQYMX.js";import"./index-BqAk4JPU.js";import"./SearchOutlined-BrdzK7Ba.js";import"./Table-BLweJkin.js";import"./addEventListener-ocyMbkjc.js";import"./index-XADWd7Om.js";import"./useBreakpoint-D0UNXitX.js";import"./Pagination-DlrcA9We.js";import"./index-BynrIpOz.js";import"./EyeOutlined-BfmcXYbQ.js";import"./index-D-2MioFP.js";const he=b.lazy(()=>Z(()=>import("./MyTable-BEIJsV3m.js").then(d=>d.a),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18]),import.meta.url));function Ae(){const{message:d,notification:f}=ae(),A=X(),{ti:i}=K(),U=ie(),[u,w]=P("Groups.data",[]),[B,F]=P("Groups.finished",!1),[R,S]=b.useState(!1),O=b.useRef(null);b.useEffect(()=>{B||_(!1)},[]);const _=async(e=!1)=>{var o;if(R&&!e)return;const n=U.start(),s=e?[]:[...u],l=new Set(s.map(a=>a.id)),c="Groups:onReload";v(c),S(!0),F(!1);try{for(const[a,r]of[[re,p.ADMIN],[oe,p.MEMBER]]){const m=s[s.length-1];let N=e?"":(m==null?void 0:m.userType)===r?m==null?void 0:m.cursor:"";for(;!n.value();){d.loading({key:c,content:i({en:"Loading groups...",vi:"Đang tải nhóm..."})+s.length,duration:0});const h=await a({cursor:N}),y=h==null?void 0:h.filter(G=>!l.has(G.id));if(h.forEach(G=>l.add(G.id)),!(y!=null&&y.length))break;s.push(...y),N=(o=s==null?void 0:s[(s==null?void 0:s.length)-1])==null?void 0:o.cursor,w([...s])}}d.success({key:c,content:(n.value()?i({en:"Load groups stopped ",vi:"Dừng tải nhóm "}):i({en:"Load groups completed ",vi:"Tải xong nhóm "}))+s.length}),F(!n.value())}catch(a){d.error({content:i({en:"Failed to load groups: ",vi:"Lỗi tải nhóm: "})+a.message})}finally{S(!1)}},H=async e=>{if(!await Y()||!(e!=null&&e.length))return;const n="Groups:onClickLeaveSelectedGroups",s="Groups:onClickLeaveSelectedGroups:waiting";v(n);let l=!1,c=[];for(let o=0;o<e.length&&(d.destroy(s),d.loading({key:n,content:t.jsxs(t.Fragment,{children:[i({en:"Leaving groups... ",vi:"Đang rời nhóm... "})+(o+1)+"/"+e.length,t.jsx("br",{}),t.jsx("i",{children:i({en:"Click to stop",vi:"Bấm để dừng"})})]}),duration:0,onClick:()=>{d.loading({key:n,content:i({en:"Stopping...",vi:"Đang dừng..."}),duration:0}),l=!0}}),await T(e[o])&&c.push(e[o]),!l);o++)if(o<e.length-1){const r=I(2e3,5e3);d.loading({key:s,content:i({en:"Sleeping "+Math.round(r/1e3)+"s",vi:"Đang đợi "+Math.round(r/1e3)+"s"}),duration:0}),await $(r)}d.destroy(n),d.destroy(s),f.open({type:"success",duration:0,message:i({en:`Left ${c.length}/${e.length} groups`,vi:`Đã rời ${c.length}/${e.length} nhóm`}),description:t.jsx("ol",{style:{maxHeight:200,overflowY:"auto",whiteSpace:"pre-wrap"},children:c.map(o=>t.jsx("li",{children:t.jsx("a",{target:"_blank",href:D(o.id),children:o.name})},o.id))})})},T=async e=>{const n="Groups:onClickLeaveGroup";v(n),d.loading({key:n,content:i({en:"Leaving group... "+e.name,vi:"Đang rời nhóm..."+e.name}),duration:0});const s=await le(e.id);return s?(f.destroy(n),d.success({key:n,content:i({en:"Left group "+e.name,vi:"Đã rời nhóm "+e.name})}),w(l=>ee(l,c=>{const o=c.findIndex(a=>a.id==e.id);return c[o].userType=p.NOT_JOINED,c}))):(d.destroy(n),f.open({type:"error",key:n,message:i({en:"Failed to leave group",vi:"Lỗi rời nhóm"}),description:e.name,duration:0,btn:t.jsxs(j,{children:[t.jsx(g,{type:"default",onClick:()=>T(e),children:i({en:"Retry",vi:"Thử lại"})}),t.jsx(g,{type:"primary",onClick:()=>window.open(D(e.id)),children:i({en:"View group",vi:"Xem nhóm"})})]})})),s},W=async e=>{var o,a;if(!await Y())return;const n="Groups:onClickFindNoAdminGroups",s=n+":waiting";v(n),d.loading({key:n,duration:0,content:i({en:"Finding groups no admin... ",vi:"Đang tìm nhóm không có admin... "})});let l=[],c=!1;for(let r=0;r<e.length&&!c;r++){const m=e[r];if(d.loading({key:n,duration:0,content:t.jsxs(t.Fragment,{children:[i({en:"Checking group... ",vi:"Đang kiểm tra... "})+`${r+1}/${e.length}`,t.jsx("br",{}),m.name,t.jsx("br",{}),i({en:"Found ",vi:"Tìm thấy "})+l.length,t.jsx("br",{}),t.jsx("i",{children:i({en:"Click to stop",vi:"Bấm để dừng"})})]}),onClick:()=>{c=!0}}),(await ce(m.id)).adminCount===0&&(l.push(m),(a=(o=O.current)==null?void 0:o.setDataSelected)==null||a.call(o,[...l])),r<e.length-1){const h=I(2e3,5e3);d.loading({key:s,content:i({en:"Sleeping "+Math.round(h/1e3)+"s",vi:"Đang đợi "+Math.round(h/1e3)+"s"}),duration:0}),await $(h)}}d.destroy(n),d.destroy(s),f.open({type:"success",duration:0,message:i({en:`Found ${l.length}/${e.length} groups no admin`,vi:`Tìm thấy ${l.length}/${e.length} nhóm không có admin`}),description:t.jsx("ol",{style:{maxHeight:300,overflowY:"auto",whiteSpace:"pre-wrap"},children:l.map(r=>t.jsx("li",{children:t.jsx("a",{target:"_blank",href:D(r.id),children:r.name})},r.id))})})},J=e=>{A("/bulk-downloader",{state:{targetId:e.id,platform:ne.Facebook}})},z=e=>{var c,o;const n=e!=null&&e.length?[...e]:[...u],s=((c=n==null?void 0:n.map(a=>u.find(r=>r.id===a.id)))==null?void 0:c.filter(a=>a&&a.userType!==p.NOT_JOINED))||[],l=((o=n==null?void 0:n.map(a=>u.find(r=>r.id===a.id)))==null?void 0:o.filter(a=>a&&a.userType!==p.ADMIN))||[];return t.jsxs(t.Fragment,{children:[t.jsx(g,{type:"primary",icon:R?t.jsx("i",{className:"fa-solid fa-rotate-right fa-spin"}):t.jsx("i",{className:"fa-solid fa-rotate-right"}),onClick:()=>_(!0),children:i({en:"Reload",vi:"Tải lại"})}),t.jsx(se,{data:n,options:[{key:"id",label:".txt (group id)",prepareData:a=>({fileName:"your_groups_id"+E().format("YYYY-MM-DD-HHmmss")+".txt",data:a==null?void 0:a.map(r=>r.id).join(`
`)})},{key:"json",label:".json",prepareData:a=>({fileName:"your_groups"+E().format("YYYY-MM-DD-HHmmss")+".json",data:JSON.stringify(a==null?void 0:a.map(r=>({...r,last_visited:C(r.lastVisitedTime,i({en:"en-US",vi:"vi-VN"}))})),null,4)})},{key:"csv",label:".csv",prepareData:a=>({fileName:"your_groups"+E().format("YYYY-MM-DD-HHmmss")+".csv",data:te(a)})}]}),t.jsx(x,{title:i({en:`Leave ${s.length} selected groups`,vi:`Rời ${s.length} nhóm được chọn`}),children:t.jsx(ue,{title:i({en:`Leave ${s.length} groups`,vi:`Rời ${s.length} nhóm`}),description:i({en:`Are your sure want to Leave ${s.length} groups?`,vi:`Bản có chãc muốn rời ${s.length} nhóm?`}),onConfirm:()=>H(s),okText:i({en:"Leave groups",vi:"Rời nhóm"}),cancelText:i({en:"No",vi:"Huỷ"}),children:t.jsx(g,{danger:!0,disabled:s.length<=0,icon:t.jsx("i",{className:"fa-regular fa-trash-can"}),children:s.length})})}),t.jsx(x,{title:i({en:`Find groups that have no admin in ${l.length} selected groups`,vi:`Tìm nhóm không có admin quản lý trong ${l.length} nhóm được chọn`}),children:t.jsx(g,{icon:t.jsx("i",{className:"fa-solid fa-user-large-slash"}),onClick:()=>W(l),disabled:l.length<=0,children:l.length})}),t.jsx(de,{name:"Groups",text:u.map(a=>a.name).join(" ")}),t.jsx(x,{title:i({en:"View on Facebook",vi:"Xem trên Facebook"}),children:t.jsx(g,{icon:t.jsx("i",{className:"fa-solid fa-external-link"}),onClick:()=>window.open("https://www.facebook.com/groups/joins","_blank")})})]})},V=e=>{switch(e){case p.MEMBER:return{color:"default",text:i({en:"Member",vi:"Thành viên"})};case p.ADMIN:return{color:"success",text:"Admin"};case p.NOT_JOINED:return{color:"error",text:i({en:"Left group",vi:"Đã rời nhóm"})};case p.PENDING:return{color:"warning",text:i({en:"Pending",vi:"Đang chờ"})};default:return{color:"default",text:"?"}}},q=[{title:"#",key:"index",dataIndex:"index"},{title:i({en:"Group",vi:"Nhóm"}),key:"group",dataIndex:"group",sorter:(e,n)=>e.name.localeCompare(n.name),render:(e,n,s)=>t.jsxs(j,{style:{maxWidth:400},align:"start",children:[t.jsx(pe,{src:n.avatar,size:45}),t.jsxs(j,{direction:"vertical",size:0,children:[t.jsx(M.Link,{href:n.url,target:"_blank",children:t.jsx("b",{children:n.name})}),t.jsx(M.Text,{type:"secondary",children:n.id})]})]})},{title:i({en:"Last visit",vi:"Lần xem gần nhất"}),key:"lastVisitedTime",dataIndex:"lastVisitedTime",sorter:(e,n)=>e.lastVisitedTime-n.lastVisitedTime,render:(e,n,s)=>C(n.lastVisitedTime,i({en:"en-US",vi:"vi-VN"})),align:"right"},{title:i({en:"Type",vi:"Loại"}),key:"type",dataIndex:"userType",render:(e,n,s)=>{const{color:l,text:c}=V(n.userType);return t.jsxs(t.Fragment,{children:[n.subspaceType==k.TOP_LEVEL_GROUP&&t.jsxs(t.Fragment,{children:[t.jsx(x,{title:i({en:"Your most interested group",vi:"Nhóm bạn quan tâm nhất"}),children:t.jsx(L,{color:"purple",children:"Top level"})}),t.jsx("br",{})]}),t.jsx(L,{color:l,children:c})]})},filters:[...Object.values(p).map(e=>{const{text:n}=V(e);return{text:n+" ("+u.filter(s=>s.userType==e).length+")",value:e}}),{text:"Top level ("+u.filter(e=>e.subspaceType==k.TOP_LEVEL_GROUP).length+")",value:k.TOP_LEVEL_GROUP}],onFilter:(e,n)=>e==k.TOP_LEVEL_GROUP?n.subspaceType==e:n.userType==e,align:"right"},{title:i({en:"Action",vi:"Hành động"}),key:"action",render:(e,n,s)=>t.jsxs(j.Compact,{style:{minWidth:30},children:[t.jsx(x,{title:i({en:"Bulk Downloader",vi:"Tải hàng loạt"}),children:t.jsx(g,{type:"default",onClick:()=>J(n),icon:t.jsx("i",{className:"fa-solid fa-download"})})}),n.userType!==p.NOT_JOINED?t.jsx(x,{title:i({en:"Leave group",vi:"Rời nhóm"}),children:t.jsx(g,{danger:!0,onClick:()=>T(n),icon:t.jsx("i",{className:"fa-regular fa-trash-can"})})}):null]}),align:"right"}];return t.jsxs("div",{style:{display:"flex",flexDirection:"column",width:"100%",height:"100%"},children:[t.jsxs(me,{align:"middle",style:{margin:"16px"},children:[t.jsx(M.Title,{level:3,style:{margin:0},children:i({en:"Groups manager",vi:"Quản lý nhóm"})}),t.jsx(L,{style:{marginLeft:"10px",fontWeight:"bold",color:"#888"},children:u.length})]}),t.jsx(he,{ref:O,data:[...u].sort((e,n)=>n.subspaceType.localeCompare(e.subspaceType)).map((e,n)=>({...e,index:n+1})),columns:q,renderTitle:z,size:"small",searchable:!0,selectable:!0,onSearchRow:(e,n)=>Q(e,(n==null?void 0:n.name)+(n==null?void 0:n.id)+C(n==null?void 0:n.lastVisitedTime,i({en:"en-US",vi:"vi-VN"}))),keyExtractor:e=>e==null?void 0:e.id})]})}export{Ae as default};
