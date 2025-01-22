const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./MyTable-B6A9bqIf.js","./index-CeyGMT_V.js","./index-Dms513tq.css","./index-CsZwNLds.js","./index-BYUZZ7Yu.js","./MyApp-CioD1-EH.js","./index-DjUWyM0b.js","./DownOutlined-X9k_duFa.js","./Table-Ckyxh0e7.js","./addEventListener-CEUbmUur.js","./index-D4qYEF7y.js","./index-vJHPUTap.js","./Dropdown-DEJ-Gs_Y.js","./PurePanel-CWgCJQuB.js","./index-B_KTZZaH.js","./SearchOutlined-CC3XFLkS.js","./useBreakpoint-B-lOGsES.js","./responsiveObserver-CKST1Z3I.js","./Pagination-D9VAi25t.js","./index-CU9TjvVd.js","./EyeOutlined-2Bn8a6ad.js","./row-Bgd22wUk.js"])))=>i.map(i=>d[i]);
import{b9 as K,aJ as Z,r as j,aL as n,b5 as k,aP as x,b3 as ee,aX as te,aE as P,br as ne,bb as ie,bc as se,bw as ae}from"./index-CeyGMT_V.js";import{d as b}from"./dayjs.min-DD-8guCq.js";import{u as re}from"./useForceStop-DDed4naU.js";import{E as oe}from"./ExportButton-3d8MfDJj.js";import{u as le,e as _,t as V,S as N,b as f,T as L,a as S,k as ce}from"./MyApp-CioD1-EH.js";import{g as ue,U as u,a as me,S as T,l as pe,b as de}from"./groups-BD3EWV2f.js";import{W as he}from"./WordStatisticButton-Btkv1IKc.js";import{u as ge}from"./useAction-l_XxMkhq.js";import{u as xe}from"./useDevMode-DiDAYnlB.js";import{A as fe}from"./index-B2UzIV9B.js";import{T as E}from"./index-BYUZZ7Yu.js";import{R as ve}from"./row-Bgd22wUk.js";import"./file-download-BN7VUWwi.js";import"./index-vJHPUTap.js";import"./Dropdown-DEJ-Gs_Y.js";import"./PurePanel-CWgCJQuB.js";import"./BadgeWrapper-S4t4hNmU.js";import"./MyTable-B6A9bqIf.js";import"./index-CsZwNLds.js";import"./index-DjUWyM0b.js";import"./DownOutlined-X9k_duFa.js";import"./Table-Ckyxh0e7.js";import"./addEventListener-CEUbmUur.js";import"./index-D4qYEF7y.js";import"./index-B_KTZZaH.js";import"./SearchOutlined-CC3XFLkS.js";import"./useBreakpoint-B-lOGsES.js";import"./responsiveObserver-CKST1Z3I.js";import"./Pagination-D9VAi25t.js";import"./index-CU9TjvVd.js";import"./EyeOutlined-2Bn8a6ad.js";import"./index-DWwob78v.js";import"./Collapse-D4i_-s2y.js";import"./index-Bpe5FRV7.js";const ye=j.lazy(()=>te(()=>import("./MyTable-B6A9bqIf.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21]),import.meta.url));function et(){const{message:p,notification:A}=le(),Y=K(),{ti:s}=Z(),{onClickAction:$,onClickBulkActions:w}=ge(),{devMode:U}=xe(),B=re(),[d,G]=_("Groups.data",[]),[H,D]=_("Groups.finished",!1),[C,F]=j.useState(!1),M=j.useRef(null),J=(t,e=u.NOT_JOINED)=>G(i=>se(i,r=>{const l=r.findIndex(c=>c.id==t);return r[l].userType=e,r}));j.useEffect(()=>{H||R(!1)},[]);const R=async(t=!1)=>{var c;if(C&&!t)return;const e=B.start(),i=t?[]:[...d],r=new Set(i.map(a=>a.id)),l="Groups:onReload";V(l),F(!0),D(!1);try{for(const[a,o]of[[ue,u.ADMIN],[me,u.MEMBER]]){const m=i[i.length-1];let v=t?"":(m==null?void 0:m.userType)===o?m==null?void 0:m.cursor:"";for(;!e.value();){p.loading({key:l,content:s({en:"Loading groups...",vi:"Đang tải nhóm..."})+i.length,duration:0});const y=await a({cursor:v}),h=y==null?void 0:y.filter(g=>!r.has(g.id));if(y.forEach(g=>r.add(g.id)),!(h!=null&&h.length))break;i.push(...h),v=(c=i==null?void 0:i[(i==null?void 0:i.length)-1])==null?void 0:c.cursor,G([...i])}}p.success({key:l,content:(e.value()?s({en:"Load groups stopped ",vi:"Dừng tải nhóm "}):s({en:"Load groups completed ",vi:"Tải xong nhóm "}))+i.length}),D(!e.value())}catch(a){p.error({content:s({en:"Failed to load groups: ",vi:"Lỗi tải nhóm: "})+a.message})}finally{F(!1)}},W=t=>w({data:t,key:"Groups:onClickLeaveSelectedGroups",actionFn:O,loadingText(e,i,r){return s({en:"Leaving groups...",vi:"Đang rời nhóm..."})},successText(e,i){return s({en:"Bulk leave groups completed",vi:"Hoàn tất Rời nhóm hàng loạt"})},successDescItem(e){return n.jsx("a",{target:"_blank",href:S(e.id),children:e.name})},confirmProps:{title:s({en:"Leave ".concat(t.length," groups"),vi:"Rời ".concat(t.length," nhóm")}),text:s({en:"Are your sure want to Leave ".concat(t.length," groups?"),vi:"Bản có chãc muốn rời ".concat(t.length," nhóm?")})}}),O=(t,e=!1)=>$({key:"Groups:onClickLeaveGroup",id:t.id,record:t,actionFn:()=>U?P(1e3):pe(t.id),loadingText(i){return s({en:"Leaving group...",vi:"Đang rời nhóm..."})+i.name},successText(i){return s({en:"Left group ",vi:"Đã rời nhóm "})+i.name},failedText(i){return s({en:"Failed to leave group: ",vi:"Lỗi rời nhóm: "})+i.name},onSuccess(){J(t.id)},needConfirm:e,confirmProps:{title:s({en:"Leave group?",vi:"Rời nhóm?"}),text:t.name}}),z=async t=>{var c,a;if(!await ce())return;const e="Groups:onClickFindNoAdminGroups",i=e+":waiting";V(e),p.loading({key:e,duration:0,content:s({en:"Finding groups no admin... ",vi:"Đang tìm nhóm không có admin... "})});let r=[],l=!1;for(let o=0;o<t.length&&!l;o++){const m=t[o],v={key:e,duration:0,content:n.jsxs(n.Fragment,{children:[s({en:"Checking group... ",vi:"Đang kiểm tra... "})+"".concat(o+1,"/").concat(t.length),n.jsx("br",{}),m.name,n.jsx("br",{}),s({en:"Found ",vi:"Tìm thấy "})+r.length,n.jsx("br",{}),n.jsx("i",{children:s({en:"Click to stop",vi:"Bấm để dừng"})})]}),onClick:()=>{l=!0}};if(p.loading(v),(await de(m.id)).adminCount===0&&(r.push(m),(a=(c=M.current)==null?void 0:c.setDataSelected)==null||a.call(c,[...r])),p.success(v),o<t.length-1){const h=ae(2e3,5e3);await P(h,g=>(p.loading({key:i,content:s({en:"Waiting "+Math.round(g/1e3)+"s",vi:"Đang đợi "+Math.round(g/1e3)+"s"}),duration:0}),l))}}p.destroy(e),p.destroy(i),A.open({type:"success",duration:0,message:s({en:"Found ".concat(r.length,"/").concat(t.length," groups no admin"),vi:"Tìm thấy ".concat(r.length,"/").concat(t.length," nhóm không có admin")}),description:n.jsx("ol",{style:{maxHeight:300,overflowY:"auto",whiteSpace:"pre-wrap"},children:r.map(o=>n.jsx("li",{children:n.jsx("a",{target:"_blank",href:S(o.id),children:o.name})},o.id))})})},q=t=>{Y("/bulk-downloader",{state:{targetId:t.id,platform:ne.Facebook}})},X=t=>{var l,c;const e=t!=null&&t.length?[...t]:[...d],i=((l=e==null?void 0:e.map(a=>d.find(o=>o.id===a.id)))==null?void 0:l.filter(a=>a&&a.userType!==u.NOT_JOINED))||[],r=((c=e==null?void 0:e.map(a=>d.find(o=>o.id===a.id)))==null?void 0:c.filter(a=>a&&a.userType!==u.ADMIN&&a.userType!==u.PENDING))||[];return n.jsxs(n.Fragment,{children:[n.jsx(x,{type:"primary",icon:C?n.jsx("i",{className:"fa-solid fa-rotate-right fa-spin"}):n.jsx("i",{className:"fa-solid fa-rotate-right"}),onClick:()=>R(!0),children:s({en:"Reload",vi:"Tải lại"})}),n.jsx(oe,{data:e,options:[{key:"id",label:".txt (group id)",prepareData:a=>({fileName:"your_groups_id"+b().format("YYYY-MM-DD-HHmmss")+".txt",data:a==null?void 0:a.map(o=>o.id).join("\n")})},{key:"json",label:".json",prepareData:a=>({fileName:"your_groups"+b().format("YYYY-MM-DD-HHmmss")+".json",data:JSON.stringify(a==null?void 0:a.map(o=>({...o,last_visited:k(o.lastVisitedTime,s({en:"en-US",vi:"vi-VN"}))})),null,4)})},{key:"csv",label:".csv",prepareData:a=>({fileName:"your_groups"+b().format("YYYY-MM-DD-HHmmss")+".csv",data:ie(a)})}]}),n.jsx(f,{title:s({en:"Leave ".concat(i.length," selected groups"),vi:"Rời ".concat(i.length," nhóm được chọn")}),children:n.jsx(x,{danger:!0,disabled:i.length<=0,icon:n.jsx("i",{className:"fa-regular fa-trash-can"}),onClick:()=>W(i),children:i.length})}),n.jsx(f,{title:s({en:"Find groups that have no admin in ".concat(r.length," selected groups"),vi:"Tìm nhóm không có admin quản lý trong ".concat(r.length," nhóm được chọn")}),children:n.jsx(x,{icon:n.jsx("i",{className:"fa-solid fa-user-large-slash"}),onClick:()=>z(r),disabled:r.length<=0,children:r.length})}),n.jsx(he,{name:"Groups",text:d.map(a=>a.name).join(" ")}),n.jsx(f,{title:s({en:"View on Facebook",vi:"Xem trên Facebook"}),children:n.jsx(x,{icon:n.jsx("i",{className:"fa-solid fa-external-link"}),onClick:()=>window.open("https://www.facebook.com/groups/joins","_blank")})})]})},I=t=>{switch(t){case u.MEMBER:return{color:"default",text:s({en:"Member",vi:"Thành viên"})};case u.ADMIN:return{color:"success",text:"Admin"};case u.NOT_JOINED:return{color:"error",text:s({en:"Left group",vi:"Đã rời nhóm"})};case u.PENDING:return{color:"warning",text:s({en:"Pending",vi:"Đang chờ"})};default:return{color:"default",text:"?"}}},Q=[{title:"#",key:"index",dataIndex:"index"},{title:s({en:"Group",vi:"Nhóm"}),key:"group",dataIndex:"group",sorter:(t,e)=>t.name.localeCompare(e.name),render:(t,e,i)=>n.jsxs(N,{style:{maxWidth:400},align:"start",children:[n.jsx(fe,{src:e.avatar,size:45}),n.jsxs(N,{direction:"vertical",size:0,children:[n.jsx(E.Link,{href:e.url,target:"_blank",children:n.jsx("b",{children:e.name})}),n.jsx(E.Text,{type:"secondary",children:e.id})]})]})},{title:s({en:"Last visit",vi:"Lần xem gần nhất"}),key:"lastVisitedTime",dataIndex:"lastVisitedTime",sorter:(t,e)=>t.lastVisitedTime-e.lastVisitedTime,render:(t,e,i)=>k(e.lastVisitedTime,s({en:"en-US",vi:"vi-VN"})),align:"right"},{title:s({en:"Type",vi:"Loại"}),key:"type",dataIndex:"userType",render:(t,e,i)=>{const{color:r,text:l}=I(e.userType);return n.jsxs(n.Fragment,{children:[e.subspaceType==T.TOP_LEVEL_GROUP&&n.jsxs(n.Fragment,{children:[n.jsx(f,{title:s({en:"Your most interested group",vi:"Nhóm bạn quan tâm nhất"}),children:n.jsx(L,{color:"purple",children:"Top level"})}),n.jsx("br",{})]}),n.jsx(L,{color:r,children:l})]})},filters:[...Object.values(u).map(t=>{const{text:e}=I(t);return{text:e+" ("+d.filter(i=>i.userType==t).length+")",value:t}}),{text:"Top level ("+d.filter(t=>t.subspaceType==T.TOP_LEVEL_GROUP).length+")",value:T.TOP_LEVEL_GROUP}],onFilter:(t,e)=>t==T.TOP_LEVEL_GROUP?e.subspaceType==t:e.userType==t,align:"right"},{title:s({en:"Action",vi:"Hành động"}),key:"action",render:(t,e,i)=>n.jsxs(N.Compact,{style:{minWidth:30},children:[n.jsx(f,{title:s({en:"Bulk Downloader",vi:"Tải hàng loạt"}),children:n.jsx(x,{type:"default",onClick:()=>q(e),icon:n.jsx("i",{className:"fa-solid fa-download"})})}),e.userType!==u.NOT_JOINED?n.jsx(f,{title:s({en:"Leave group",vi:"Rời nhóm"}),children:n.jsx(x,{danger:!0,onClick:()=>O(e,!0),icon:n.jsx("i",{className:"fa-regular fa-trash-can"})})}):null]}),align:"right"}];return n.jsxs("div",{style:{display:"flex",flexDirection:"column",width:"100%",height:"100%"},children:[n.jsxs(ve,{align:"middle",style:{margin:"16px"},children:[n.jsx(E.Title,{level:3,style:{margin:0},children:s({en:"Groups manager",vi:"Quản lý nhóm"})}),n.jsx(L,{style:{marginLeft:"10px",fontWeight:"bold",color:"#888"},children:d.length})]}),n.jsx(ye,{ref:M,data:[...d].sort((t,e)=>e.subspaceType.localeCompare(t.subspaceType)).map((t,e)=>({...t,index:e+1})),columns:Q,renderTitle:X,size:"small",searchable:!0,selectable:!0,onSearchRow:(t,e)=>ee(t,(e==null?void 0:e.name)+(e==null?void 0:e.id)+k(e==null?void 0:e.lastVisitedTime,s({en:"en-US",vi:"vi-VN"}))),keyExtractor:t=>t==null?void 0:t.id})]})}export{et as default};
