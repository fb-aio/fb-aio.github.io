const __vite__fileDeps=["./MyTable-C_UnkaEw.js","./index-C7oZ0De7.js","./index-DjlRUb8J.css","./MyApp-Aa6kWLsF.js","./index-BVI1_y8Q.js","./addEventListener-CJkFn_36.js","./index-DNofGeVi.js","./PurePanel-ArKtrdMx.js","./index-OwkcnbRN.js","./index-qvuPktQI.js","./index-BCMlwunw.js","./Dropdown-DcXeyYZ4.js","./index-nZb62mrZ.js","./useBreakpoint-oAyVRKIn.js","./responsiveObserver-B2lf4GPU.js","./Pagination-BAHAxdKo.js","./index-Bkxf5JBu.js","./row-BF_3i8xH.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{al as z,r as k,an as t,ao as p,ar as q,aH as X,aI as Q}from"./index-C7oZ0De7.js";import{d as C}from"./dayjs.min-CDYKijGC.js";import{a as K,u as Z,b as R,t as v,S as j,f as G,T as f,C as ee,g as D,o as ne,D as I,H as Y}from"./MyApp-Aa6kWLsF.js";import{u as te}from"./useForceStop-CbSUbqKb.js";import{E as ie}from"./ExportButton-B2yPE5F5.js";import{g as se,U as u,a as ae,l as oe,b as re}from"./groups-CiHv3xL6.js";import{A as le}from"./index-BsXYGY4A.js";import{T as V}from"./index-BVI1_y8Q.js";import{T as A}from"./index-8s2xd5lq.js";import{R as ce}from"./row-BF_3i8xH.js";import{P as de}from"./index-CMBWYkq2.js";import"./file-download-pfyZjjAp.js";import"./index-BCMlwunw.js";import"./Dropdown-DcXeyYZ4.js";import"./PurePanel-ArKtrdMx.js";import"./responsiveObserver-B2lf4GPU.js";import"./useBreakpoint-oAyVRKIn.js";import"./index-D4wwaFc8.js";const ue=k.lazy(()=>q(()=>import("./MyTable-C_UnkaEw.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17]),import.meta.url));function Ee({}){const{message:d,notification:x}=K(),H=z(),{ti:i}=Z(),O=te(),[g,M]=R("Groups.data",[]),[_,w]=R("Groups.finished",!1),[E,F]=k.useState(!1),L=k.useRef(null);k.useEffect(()=>{_||S(!1)},[]);const S=async(e=!1)=>{var r;if(E&&!e)return;const n=O.start(),s=e?[]:[...g],l=new Set(s.map(a=>a.id)),c="Groups:onReload";v(c),F(!0),w(!1);try{for(const[a,o]of[[se,u.ADMIN],[ae,u.MEMBER]]){const m=s[s.length-1];let b=e?"":(m==null?void 0:m.userType)===o?m==null?void 0:m.cursor:"";for(;!n.value();){d.loading({key:c,content:i({en:"Loading groups...",vi:"Đang tải nhóm..."})+s.length,duration:0});const h=await a({cursor:b}),y=h==null?void 0:h.filter(N=>!l.has(N.id));if(h.forEach(N=>l.add(N.id)),!(y!=null&&y.length))break;s.push(...y),b=(r=s==null?void 0:s[(s==null?void 0:s.length)-1])==null?void 0:r.cursor,M([...s])}}d.success({key:c,content:(n.value()?i({en:"Load groups stopped ",vi:"Dừng tải nhóm "}):i({en:"Load groups completed ",vi:"Tải xong nhóm "}))+s.length}),w(!n.value())}catch(a){d.error({content:i({en:"Failed to load groups: ",vi:"Lỗi tải nhóm: "})+a.message})}finally{F(!1)}},B=async e=>{if(!(e!=null&&e.length))return;const n="Groups:onClickLeaveSelectedGroups",s="Groups:onClickLeaveSelectedGroups:waiting";v(n);let l=!1,c=[];for(let r=0;r<e.length&&(d.destroy(s),d.loading({key:n,content:t.jsxs(t.Fragment,{children:[i({en:"Leaving groups... ",vi:"Đang rời nhóm... "})+(r+1)+"/"+e.length,t.jsx("br",{}),t.jsx("i",{children:i({en:"Click to stop",vi:"Bấm để dừng"})})]}),duration:0,onClick:()=>{d.loading({key:n,content:i({en:"Stopping...",vi:"Đang dừng..."}),duration:0}),l=!0}}),await T(e[r])&&c.push(e[r]),!l);r++)if(r<e.length-1){const o=Y(2e3,5e3);d.loading({key:s,content:i({en:"Sleeping "+Math.round(o/1e3)+"s",vi:"Đang đợi "+Math.round(o/1e3)+"s"}),duration:0}),await I(o)}d.destroy(n),d.destroy(s),x.open({type:"success",duration:0,message:i({en:`Left ${c.length}/${e.length} groups`,vi:`Đã rời ${c.length}/${e.length} nhóm`}),description:t.jsx("ol",{style:{maxHeight:200,overflowY:"auto",whiteSpace:"pre-wrap"},children:c.map(r=>t.jsx("li",{children:t.jsx("a",{target:"_blank",href:D(r.id),children:r.name})},r.id))})})},T=async e=>{const n="Groups:onClickLeaveGroup";v(n),d.loading({key:n,content:i({en:"Leaving group... "+e.name,vi:"Đang rời nhóm..."+e.name}),duration:0});const s=await oe(e.id);return s?(x.destroy(n),d.success({key:n,content:i({en:"Left group "+e.name,vi:"Đã rời nhóm "+e.name})}),M(l=>X(l,c=>{const r=c.findIndex(a=>a.id==e.id);return c[r].userType=u.NOT_JOINED,c}))):(d.destroy(n),x.open({type:"error",key:n,message:i({en:"Failed to leave group",vi:"Lỗi rời nhóm"}),description:e.name,duration:0,btn:t.jsxs(j,{children:[t.jsx(p,{type:"default",onClick:()=>T(e),children:i({en:"Retry",vi:"Thử lại"})}),t.jsx(p,{type:"primary",onClick:()=>window.open(D(e.id)),children:i({en:"View group",vi:"Xem nhóm"})})]})})),s},P=async e=>{var r,a;const n="Groups:onClickFindNoAdminGroups",s=n+":waiting";v(n),d.loading({key:n,duration:0,content:i({en:"Finding groups no admin... ",vi:"Đang tìm nhóm không có admin... "})});let l=[],c=!1;for(let o=0;o<e.length&&!c;o++){const m=e[o];if(d.loading({key:n,duration:0,content:t.jsxs(t.Fragment,{children:[i({en:"Checking group... ",vi:"Đang kiểm tra... "})+`${o+1}/${e.length}`,t.jsx("br",{}),m.name,t.jsx("br",{}),i({en:"Found ",vi:"Tìm thấy "})+l.length,t.jsx("br",{}),t.jsx("i",{children:i({en:"Click to stop",vi:"Bấm để dừng"})})]}),onClick:()=>{c=!0}}),(await re(m.id)).adminCount===0&&(l.push(m),(a=(r=L.current)==null?void 0:r.setDataSelected)==null||a.call(r,[...l])),o<e.length-1){const h=Y(2e3,5e3);d.loading({key:s,content:i({en:"Sleeping "+Math.round(h/1e3)+"s",vi:"Đang đợi "+Math.round(h/1e3)+"s"}),duration:0}),await I(h)}}d.destroy(n),d.destroy(s),x.open({type:"success",duration:0,message:i({en:`Found ${l.length}/${e.length} groups no admin`,vi:`Tìm thấy ${l.length}/${e.length} nhóm không có admin`}),description:t.jsx("ol",{style:{maxHeight:300,overflowY:"auto",whiteSpace:"pre-wrap"},children:l.map(o=>t.jsx("li",{children:t.jsx("a",{target:"_blank",href:D(o.id),children:o.name})},o.id))})})},U=e=>{H("/bulk-downloader",{state:{targetId:e.id,platform:Q.Facebook}})},J=e=>{var c,r;const n=e!=null&&e.length?[...e]:[...g],s=((c=n==null?void 0:n.map(a=>g.find(o=>o.id===a.id)))==null?void 0:c.filter(a=>a&&a.userType!==u.NOT_JOINED))||[],l=((r=n==null?void 0:n.map(a=>g.find(o=>o.id===a.id)))==null?void 0:r.filter(a=>a&&a.userType!==u.ADMIN))||[];return t.jsxs(t.Fragment,{children:[t.jsx(p,{type:"primary",icon:E?t.jsx("i",{className:"fa-solid fa-rotate-right fa-spin"}):t.jsx("i",{className:"fa-solid fa-rotate-right"}),onClick:()=>S(!0),children:i({en:"Reload",vi:"Tải lại"})}),t.jsx(ie,{data:n,options:[{key:"id",label:".txt (group id)",prepareData:a=>({fileName:"your_groups_id"+C().format("YYYY-MM-DD-HHmmss")+".txt",data:a==null?void 0:a.map(o=>o.id).join(`
`)})},{key:"json",label:".json",prepareData:a=>({fileName:"your_groups"+C().format("YYYY-MM-DD-HHmmss")+".json",data:JSON.stringify(a==null?void 0:a.map(o=>({...o,last_visited:G(o.lastVisitedTime,i({en:"en-US",vi:"vi-VN"}))})),null,4)})},{key:"csv",label:".csv",prepareData:a=>({fileName:"your_groups"+C().format("YYYY-MM-DD-HHmmss")+".csv",data:ne(a)})}]}),t.jsx(f,{title:i({en:`Leave ${s.length} selected groups`,vi:`Rời ${s.length} nhóm được chọn`}),children:t.jsx(de,{title:i({en:`Leave ${s.length} groups`,vi:`Rời ${s.length} nhóm`}),description:i({en:`Are your sure want to Leave ${s.length} groups?`,vi:`Bản có chãc muốn rời ${s.length} nhóm?`}),onConfirm:()=>B(s),okText:i({en:"Leave groups",vi:"Rời nhóm"}),cancelText:i({en:"No",vi:"Huỷ"}),children:t.jsx(p,{danger:!0,disabled:s.length<=0,icon:t.jsx("i",{className:"fa-regular fa-trash-can"}),children:s.length})})}),t.jsx(f,{title:i({en:`Find groups that have no admin in ${l.length} selected groups`,vi:`Tìm nhóm không có admin quản lý trong ${l.length} nhóm được chọn`}),children:t.jsx(p,{icon:t.jsx("i",{className:"fa-solid fa-user-large-slash"}),onClick:()=>P(l),disabled:l.length<=0,children:l.length})}),t.jsx(f,{title:i({en:"View on Facebook",vi:"Xem trên Facebook"}),children:t.jsx(p,{icon:t.jsx("i",{className:"fa-solid fa-external-link"}),onClick:()=>window.open("https://www.facebook.com/groups/joins","_blank")})})]})},$=e=>{switch(e){case u.MEMBER:return{color:"default",text:i({en:"Member",vi:"Thành viên"})};case u.ADMIN:return{color:"success",text:"Admin"};case u.NOT_JOINED:return{color:"error",text:i({en:"Left group",vi:"Đã rời nhóm"})};case u.PENDING:return{color:"warning",text:i({en:"Pending",vi:"Đang chờ"})};default:return{color:"default",text:"?"}}},W=[{title:i({en:"Group",vi:"Nhóm"}),key:"group",dataIndex:"group",sorter:(e,n)=>e.name.localeCompare(n.name),render:(e,n,s)=>t.jsxs(j,{style:{maxWidth:400},align:"start",children:[t.jsx(le,{src:n.avatar,size:45}),t.jsxs(j,{direction:"vertical",size:0,children:[t.jsx(V.Link,{href:n.url,target:"_blank",children:t.jsx("b",{children:n.name})}),t.jsx("span",{style:{opacity:.7},children:n.id})]})]})},{title:i({en:"Last visit",vi:"Lần xem gần nhất"}),key:"lastVisitedTime",dataIndex:"lastVisitedTime",sorter:(e,n)=>e.lastVisitedTime-n.lastVisitedTime,render:(e,n,s)=>G(n.lastVisitedTime,i({en:"en-US",vi:"vi-VN"})),align:"right"},{title:i({en:"Type",vi:"Loại"}),key:"type",dataIndex:"userType",render:(e,n,s)=>{const{color:l,text:c}=$(n.userType);return t.jsx(A,{color:l,children:c})},filters:Object.values(u).map(e=>{const{text:n}=$(e);return{text:n+" ("+g.filter(s=>s.userType==e).length+")",value:e}}),onFilter:(e,n)=>n.userType==e,align:"right"},{title:i({en:"Action",vi:"Hành động"}),key:"action",render:(e,n,s)=>t.jsxs(j.Compact,{style:{minWidth:30},children:[t.jsx(f,{title:i({en:"Bulk Downloader",vi:"Tải hàng loạt"}),children:t.jsx(p,{type:"default",onClick:()=>U(n),icon:t.jsx("i",{className:"fa-solid fa-download"})})}),n.userType!==u.NOT_JOINED?t.jsx(f,{title:i({en:"Leave group",vi:"Rời nhóm"}),children:t.jsx(p,{danger:!0,onClick:()=>T(n),icon:t.jsx("i",{className:"fa-regular fa-trash-can"})})}):null]}),align:"right"}];return t.jsxs("div",{style:{display:"flex",flexDirection:"column",width:"100%",height:"100%"},children:[t.jsxs(ce,{align:"middle",style:{margin:"16px"},children:[t.jsx(V.Title,{level:3,style:{margin:0},children:i({en:"Groups manager",vi:"Quản lý nhóm"})}),t.jsx(A,{style:{marginLeft:"10px",fontWeight:"bold",color:"#888"},children:g.length})]}),t.jsx(ue,{ref:L,data:g,columns:W,renderTitle:J,size:"small",searchable:!0,selectable:!0,onSearchRow:(e,n)=>ee(e,(n==null?void 0:n.name)+(n==null?void 0:n.id)+G(n==null?void 0:n.lastVisitedTime,i({en:"en-US",vi:"vi-VN"}))),keyExtractor:e=>e==null?void 0:e.id})]})}export{Ee as default};
