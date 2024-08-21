const __vite__fileDeps=["./MyTable-BYuDQFUQ.js","./index-1mnbKtVE.js","./index-BM_p-30O.css","./MyApp-DvK0rWAv.js","./styleChecker-FbCNsoUW.js","./addEventListener-Clq_SX9W.js","./index-C9vVbkDD.js","./PurePanel-CoqMJ9XJ.js","./TextArea-DbakhY3e.js","./index-BueiIMzi.js","./index-D_iUNpjM.js","./Dropdown-CGwcVuqg.js","./useBreakpoint-Hr-aggkJ.js","./responsiveObserver-h1Shs8cj.js","./Pagination-BCwO-mpp.js","./row-N654jCqZ.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{al as U,am as J,r as M,aq as t,ar as p,au as z,aJ as W,aw as k}from"./index-1mnbKtVE.js";import{a as q,b as S,t as T,S as x,H as N,T as b,C as X,g as I,o as Q,x as K,I as Z}from"./MyApp-DvK0rWAv.js";import{u as ee}from"./useForceStop-DfcLyta3.js";import{P as ne}from"./index-vuHwb1ab.js";import{E as te}from"./ExportButton-CFJOv5HN.js";import{g as ie,U as c,a as se,l as ae}from"./groups-CkI7R9Zp.js";import{A as re}from"./index-Cffx5-yr.js";import{T as Y}from"./index-DKMI8q6g.js";import{T as V}from"./index-DEkTQ-Wt.js";import{P as _}from"./index-C19dxzUt.js";import{R as oe}from"./row-N654jCqZ.js";import"./file-download-DGh9FhXC.js";import"./index-D_iUNpjM.js";import"./Dropdown-CGwcVuqg.js";import"./PurePanel-CoqMJ9XJ.js";import"./responsiveObserver-h1Shs8cj.js";import"./useBreakpoint-Hr-aggkJ.js";import"./index-iXZ9k9x8.js";import"./styleChecker-FbCNsoUW.js";import"./TextArea-DbakhY3e.js";const le=M.lazy(()=>z(()=>import("./MyTable-BYuDQFUQ.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]),import.meta.url));function Ge({}){const{message:o,notification:v}=U.useApp(),A=J(),{ti:i}=q(),F=ee(),[d,C]=S("Groups.data",[]),[H,D]=S("Groups.finished",!1),[E,G]=M.useState(!1);M.useEffect(()=>{H||L(!1)},[]);const L=async(e=!1)=>{var r;if(E&&!e)return;const n=F.start(),s=e?[]:[...d],l=new Set(s.map(u=>u.id)),a="Groups:onReload";T(a),G(!0),D(!1);try{for(const[u,h]of[[ie,c.ADMIN],[se,c.MEMBER]]){const m=s[s.length-1];let w=e?"":(m==null?void 0:m.userType)===h?m==null?void 0:m.cursor:"";for(;!n.value();){o.loading({key:a,content:i({en:"Loading groups...",vi:"Đang tải nhóm..."})+s.length,duration:0});const g=await u({cursor:w}),f=g==null?void 0:g.filter(j=>!l.has(j.id));if(g.forEach(j=>l.add(j.id)),!(f!=null&&f.length))break;s.push(...f),w=(r=s==null?void 0:s[(s==null?void 0:s.length)-1])==null?void 0:r.cursor,C([...s])}}o.success({key:a,content:(n.value()?i({en:"Load groups stopped ",vi:"Dừng tải nhóm "}):i({en:"Load groups completed ",vi:"Tải xong nhóm "}))+s.length}),D(!n.value())}catch(u){o.error({content:i({en:"Failed to load groups: ",vi:"Lỗi tải nhóm: "})+u.message})}finally{G(!1)}},B=async e=>{if(!(e!=null&&e.length))return;const n="Groups:onClickLeaveSelectedGroups",s="Groups:onClickLeaveSelectedGroups:waiting";T(n);let l=!1,a=[];for(let r=0;r<e.length&&(o.destroy(s),o.loading({key:n,content:t.jsxs(t.Fragment,{children:[i({en:"Leaving groups... ",vi:"Đang rời nhóm... "})+(r+1)+"/"+e.length,t.jsx("br",{}),t.jsx("i",{children:i({en:"Click to stop",vi:"Bấm để dừng"})})]}),duration:0,onClick:()=>{o.loading({key:n,content:i({en:"Stopping...",vi:"Đang dừng..."}),duration:0}),l=!0}}),await y(e[r])&&a.push(e[r]),!l);r++)if(r<e.length-1){const h=Z(2e3,5e3);o.loading({key:s,content:i({en:"Sleeping "+Math.round(h/1e3)+"s",vi:"Đang đợi "+Math.round(h/1e3)+"s"}),duration:0}),await K(h)}o.destroy(n),o.destroy(s),v.success({duration:0,message:i({en:`Left ${a.length}/${e.length} groups`,vi:`Đã rời ${a.length}/${e.length} nhóm`}),description:t.jsx("div",{style:{maxHeight:200,overflowY:"auto",whiteSpace:"pre-wrap"},children:t.jsx("ol",{children:a.map(r=>t.jsx("li",{children:t.jsx("a",{target:"_blank",href:I(r.id),children:r.name})},r.id))})})})},y=async e=>{const n="Groups:onClickLeaveGroup";T(n),o.loading({key:n,content:i({en:"Leaving group... "+e.name,vi:"Đang rời nhóm..."+e.name}),duration:0});const s=await ae(e.id);return s?(v.destroy(n),o.success({key:n,content:i({en:"Left group "+e.name,vi:"Đã rời nhóm "+e.name})}),C(l=>W(l,a=>{const r=a.findIndex(u=>u.id==e.id);return a[r].userType=c.NOT_JOINED,a}))):(o.destroy(n),v.error({key:n,message:i({en:"Failed to leave group",vi:"Lỗi rời nhóm"}),description:e.name,duration:0,btn:t.jsxs(x,{children:[t.jsx(p,{type:"default",onClick:()=>y(e),children:i({en:"Retry",vi:"Thử lại"})}),t.jsx(p,{type:"primary",onClick:()=>window.open(I(e.id)),children:i({en:"View group",vi:"Xem nhóm"})})]})})),s},$=e=>{A("/bulk-downloader",{state:{targetId:e.id,platform:ne.Facebook}})},O=e=>{var l;const n=e!=null&&e.length?[...e]:[...d],s=((l=n==null?void 0:n.map(a=>d.find(r=>r.id===a.id)))==null?void 0:l.filter(a=>a&&(a.userType===c.MEMBER||a.userType===c.ADMIN)))||[];return t.jsxs(t.Fragment,{children:[t.jsx(p,{type:"primary",icon:E?t.jsx("i",{className:"fa-solid fa-rotate-right fa-spin"}):t.jsx("i",{className:"fa-solid fa-rotate-right"}),onClick:()=>L(!0),children:i({en:"Reload",vi:"Tải lại"})}),t.jsx(te,{data:n,options:[{key:"id",label:".txt (group id)",prepareData:a=>({fileName:"your_groups_id"+k().format("YYYY-MM-DD-HHmmss")+".txt",data:a==null?void 0:a.map(r=>r.id).join(`
`)})},{key:"json",label:".json",prepareData:a=>({fileName:"your_groups"+k().format("YYYY-MM-DD-HHmmss")+".json",data:JSON.stringify(a==null?void 0:a.map(r=>({...r,last_visited:N(r.lastVisitedTime,i({en:"en-US",vi:"vi-VN"}))})),null,4)})},{key:"csv",label:".csv",prepareData:a=>({fileName:"your_groups"+k().format("YYYY-MM-DD-HHmmss")+".csv",data:Q(a)})}]}),t.jsx(b,{title:i({en:`Leave ${s.length} selected groups`,vi:`Rời ${s.length} nhóm được chọn`}),children:t.jsx(_,{title:i({en:`Leave ${s.length} groups`,vi:`Rời ${s.length} nhóm`}),description:i({en:`Are your sure want to Leave ${s.length} groups?`,vi:`Bản có chãc muốn rời ${s.length} nhóm?`}),onConfirm:()=>B(s),okText:i({en:"Leave groups",vi:"Rời nhóm"}),cancelText:i({en:"No",vi:"Huỷ"}),children:t.jsx(p,{danger:!0,type:"primary",disabled:s.length<=0,icon:t.jsx("i",{className:"fa-regular fa-trash-can"}),children:s.length})})}),t.jsx(p,{icon:t.jsx("i",{className:"fa-solid fa-external-link"}),onClick:()=>window.open("https://www.facebook.com/groups/joins","_blank"),children:i({en:"View on Facebook",vi:"Xem trên Facebook"})})]})},R=e=>{switch(e){case c.MEMBER:return{color:"default",text:i({en:"Member",vi:"Thành viên"})};case c.ADMIN:return{color:"success",text:"Admin"};case c.NOT_JOINED:return{color:"error",text:i({en:"Left group",vi:"Đã rời nhóm"})};case c.PENDING:return{color:"warning",text:i({en:"Pending",vi:"Đang chờ"})};default:return{color:"default",text:"?"}}},P=[{title:i({en:"Group",vi:"Nhóm"}),key:"group",dataIndex:"group",sorter:(e,n)=>e.name.localeCompare(n.name),render:(e,n,s)=>t.jsxs(x,{style:{maxWidth:400},align:"start",children:[t.jsx(re,{src:n.avatar,size:45}),t.jsxs(x,{direction:"vertical",size:0,children:[t.jsx(Y.Link,{href:n.url,target:"_blank",children:t.jsx("b",{children:n.name})}),t.jsx("span",{style:{opacity:.7},children:n.id})]})]})},{title:i({en:"Last visit",vi:"Lần xem gần nhất"}),key:"lastVisitedTime",dataIndex:"lastVisitedTime",sorter:(e,n)=>e.lastVisitedTime-n.lastVisitedTime,render:(e,n,s)=>N(n.lastVisitedTime,i({en:"en-US",vi:"vi-VN"})),align:"right"},{title:i({en:"Type",vi:"Loại"}),key:"type",dataIndex:"userType",render:(e,n,s)=>{const{color:l,text:a}=R(n.userType);return t.jsx(V,{color:l,children:a})},filters:Object.values(c).map(e=>{const{text:n}=R(e);return{text:n+" ("+d.filter(s=>s.userType==e).length+")",value:e}}),onFilter:(e,n)=>n.userType==e,align:"right"},{title:i({en:"Action",vi:"Hành động"}),key:"action",render:(e,n,s)=>t.jsxs(x.Compact,{style:{minWidth:30},children:[t.jsx(b,{title:i({en:"Bulk Downloader",vi:"Tải hàng loạt"}),children:t.jsx(p,{type:"default",onClick:()=>$(n),icon:t.jsx("i",{className:"fa-solid fa-download"})})}),n.userType!==c.NOT_JOINED?t.jsx(b,{title:i({en:"Leave group",vi:"Rời nhóm"}),children:t.jsx(_,{title:i({en:"Leave group",vi:"Rời nhóm"}),description:i({en:"Are you sure want to leave this group?",vi:"Bạn có chắc muốn rời nhóm này?"}),onConfirm:()=>y(n),okText:i({en:"Yes",vi:"Có"}),cancelText:i({en:"No",vi:"Huỷ"}),children:t.jsx(p,{danger:!0,type:"primary",icon:t.jsx("i",{className:"fa-regular fa-trash-can"})})})}):null]}),align:"right"}];return t.jsxs("div",{style:{display:"flex",flexDirection:"column",width:"100%",height:"100%"},children:[t.jsxs(oe,{align:"middle",style:{margin:"16px"},children:[t.jsx(Y.Title,{level:3,style:{margin:0},children:i({en:"Groups manager",vi:"Quản lý nhóm"})}),t.jsx(V,{style:{marginLeft:"10px",fontWeight:"bold",color:"#888"},children:d.length})]}),t.jsx(le,{data:d,columns:P,renderTitle:O,size:"small",searchable:!0,selectable:!0,onSearchRow:(e,n)=>X(e,(n==null?void 0:n.name)+(n==null?void 0:n.id)+N(n==null?void 0:n.lastVisitedTime,i({en:"en-US",vi:"vi-VN"}))),keyExtractor:e=>e.id})]})}export{Ge as default};
