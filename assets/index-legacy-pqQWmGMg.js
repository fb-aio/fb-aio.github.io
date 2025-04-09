System.register(["./index-legacy-B3RKK3aZ.js","./dayjs.min-legacy-CafwYQqX.js","./useForceStop-legacy-NUpT0Gds.js","./ExportButton-legacy-gAA_w6jo.js","./MyApp-legacy-acuBaUwA.js","./groups-legacy-B2ytj1Cn.js","./WordStatisticButton-legacy-C5wzlSLa.js","./useAction-legacy-5SqyaSo0.js","./useDevMode-legacy-BeilK7RQ.js","./Screen-legacy-CEjXNMxi.js","./index-legacy-CslTGctG.js","./file-download-legacy-BlZuZHvS.js","./index-legacy-BezdVW9X.js","./PurePanel-legacy-Bu61VAyB.js","./move-legacy-Dl6tC53j.js","./BadgeWrapper-legacy-DBNr72k-.js","./MyTable-legacy-7CnvfFeK.js","./index-legacy-Diiq_sdW.js","./index-legacy-eXHedfAh.js","./DownOutlined-legacy-SEK2xiK7.js","./Table-legacy-BBFpu5d5.js","./List-legacy-DSd61bXf.js","./index-legacy-CBGy1KZ7.js","./index-legacy-CMYVg5W-.js","./index-legacy-CbVFiRq8.js","./index-legacy-DuSPHPj4.js","./useBreakpoint-legacy-Dv1rFSLS.js","./useForceUpdate-legacy-qW0w4eeM.js","./responsiveObserver-legacy-DedImkrC.js","./Pagination-legacy-DzJPBKps.js","./row-legacy-C-856r4Z.js","./index-legacy-ClhN670O.js","./index-legacy-CWSwoirD.js","./col-legacy-CetQGZ1I.js","./index-legacy-BNGe0Stf.js"],(function(e,n){"use strict";var t,i,a,l,s,r,o,c,d,u,g,m,h,p,y,x,j,v,f,k,T,b,N,L,_,w,D,E,M,O,S,C,F,G,P,I;return{setters:[e=>{t=e.bs,i=e.b6,a=e.r,l=e.b8,s=e.br,r=e.am,o=e.bt,c=e.bd,d=e.b2,u=e.bA,g=e.bw,m=e.bx,h=e.bE},e=>{p=e.d},e=>{y=e.u},e=>{x=e.E},e=>{j=e.u,v=e.i,f=e.t,k=e.S,T=e.d,b=e.T,N=e.c,L=e.j,_=e.m},e=>{w=e.g,D=e.U,E=e.a,M=e.S,O=e.l,S=e.b},e=>{C=e.W},e=>{F=e.u},e=>{G=e.u},e=>{P=e.S},e=>{I=e.A},null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],execute:function(){e("default",(function(){const{message:e,notification:n}=j(),c=t(),{ti:V}=i(),{onClickAction:Y,onClickBulkActions:$}=F(),{devMode:A}=G(),B=y(),[U,H]=v("Groups.data",[]),[W,J]=v("Groups.finished",!1),[z,q]=a.useState(!1),Q=a.useRef(null);a.useEffect((()=>{W||X(!1)}),[]);const X=async(n=!1)=>{if(z&&!n)return;const t=B.start(),i=n?[]:[...U],a=new Set(i.map((e=>e.id))),l="Groups:onReload";f(l),q(!0),J(!1);try{for(const[s,r]of[[w,D.ADMIN],[E,D.MEMBER]]){const o=i[i.length-1];let c=n?"":o?.userType===r?o?.cursor:"";for(;!t.value();){e.loading({key:l,content:V({en:"Loading groups...",vi:"Đang tải nhóm..."})+i.length,duration:0});const n=await s({cursor:c}),t=n?.filter((e=>!a.has(e.id)));if(n.forEach((e=>a.add(e.id))),!t?.length)break;i.push(...t),c=i?.[i?.length-1]?.cursor,H([...i])}}e.success({key:l,content:(t.value()?V({en:"Load groups stopped ",vi:"Dừng tải nhóm "}):V({en:"Load groups completed ",vi:"Tải xong nhóm "}))+i.length}),J(!t.value())}catch(s){e.error({content:V({en:"Failed to load groups: ",vi:"Lỗi tải nhóm: "})+s.message})}finally{q(!1)}},Z=(e,n=!1)=>Y({key:"Groups:onClickLeaveGroup",id:e.id,record:e,actionFn:()=>A?d(1e3):O(e.id),loadingText:e=>V({en:"Leaving group...",vi:"Đang rời nhóm..."})+e.name,successText:e=>V({en:"Left group ",vi:"Đã rời nhóm "})+e.name,failedText:e=>V({en:"Failed to leave group: ",vi:"Lỗi rời nhóm: "})+e.name,onSuccess(){((e,n=D.NOT_JOINED)=>{H((t=>m(t,(t=>{const i=t.findIndex((n=>n.id==e));return t[i].userType=n,t}))))})(e.id)},needConfirm:n,confirmProps:{title:V({en:"Leave group?",vi:"Rời nhóm?"}),text:e.name}}),K=e=>{switch(e){case D.MEMBER:return{color:"default",text:V({en:"Member",vi:"Thành viên"})};case D.ADMIN:return{color:"success",text:"Admin"};case D.NOT_JOINED:return{color:"error",text:V({en:"Left group",vi:"Đã rời nhóm"})};case D.PENDING:return{color:"warning",text:V({en:"Pending",vi:"Đang chờ"})};default:return{color:"default",text:"?"}}},ee=[{title:"#",key:"index",dataIndex:"index"},{title:V({en:"Group",vi:"Nhóm"}),key:"group",dataIndex:"group",sorter:(e,n)=>e.name.localeCompare(n.name),render:(e,n,t)=>l.jsxs(k,{style:{maxWidth:400},align:"start",children:[l.jsx(I,{src:n.avatar,size:45}),l.jsxs(k,{direction:"vertical",size:0,children:[l.jsx(T.Link,{href:n.url,target:"_blank",children:l.jsx("b",{children:n.name})}),l.jsx(T.Text,{type:"secondary",children:n.id})]})]})},{title:V({en:"Last visit",vi:"Lần xem gần nhất"}),key:"lastVisitedTime",dataIndex:"lastVisitedTime",sorter:(e,n)=>e.lastVisitedTime-n.lastVisitedTime,render:(e,n,t)=>s(n.lastVisitedTime,V({en:"en-US",vi:"vi-VN"})),align:"right"},{title:V({en:"Type",vi:"Loại"}),key:"type",dataIndex:"userType",render:(e,n,t)=>{const{color:i,text:a}=K(n.userType);return l.jsxs(l.Fragment,{children:[n.subspaceType==M.TOP_LEVEL_GROUP&&l.jsxs(l.Fragment,{children:[l.jsx(b,{title:V({en:"Your most interested group",vi:"Nhóm bạn quan tâm nhất"}),children:l.jsx(N,{color:"purple",children:"Top level"})}),l.jsx("br",{})]}),l.jsx(N,{color:i,children:a})]})},filters:[...Object.values(D).map((e=>{const{text:n}=K(e);return{text:n+" ("+U.filter((n=>n.userType==e)).length+")",value:e}})),{text:"Top level ("+U.filter((e=>e.subspaceType==M.TOP_LEVEL_GROUP)).length+")",value:M.TOP_LEVEL_GROUP}],onFilter:(e,n)=>e==M.TOP_LEVEL_GROUP?n.subspaceType==e:n.userType==e,align:"right"},{title:V({en:"Action",vi:"Hành động"}),key:"action",render:(e,n,t)=>l.jsxs(k.Compact,{style:{minWidth:30},children:[l.jsx(b,{title:V({en:"Bulk Downloader",vi:"Tải hàng loạt"}),children:l.jsx(r,{type:"default",onClick:()=>(e=>{c("/bulk-downloader",{state:{targetId:e.id,platform:u.Facebook}})})(n),icon:l.jsx("i",{className:"fa-solid fa-download"})})}),n.userType!==D.NOT_JOINED?l.jsx(b,{title:V({en:"Leave group",vi:"Rời nhóm"}),children:l.jsx(r,{danger:!0,onClick:()=>Z(n,!0),icon:l.jsx("i",{className:"fa-regular fa-trash-can"})})}):null]}),align:"right"}];return l.jsx(P,{title:V({en:"Groups manager",vi:"Quản lý nhóm"}),titleSuffix:l.jsx(N,{style:{marginLeft:"10px",fontWeight:"bold",color:"#888"},children:U.length}),children:l.jsx(R,{ref:Q,data:[...U].sort(((e,n)=>n.subspaceType.localeCompare(e.subspaceType))).map(((e,n)=>({...e,index:n+1}))),columns:ee,renderTitle:t=>{const i=t?.length?[...t]:[...U],a=i?.map((e=>U.find((n=>n.id===e.id))))?.filter((e=>e&&e.userType!==D.NOT_JOINED))||[],o=i?.map((e=>U.find((n=>n.id===e.id))))?.filter((e=>e&&e.userType!==D.ADMIN&&e.userType!==D.PENDING))||[];return l.jsxs(l.Fragment,{children:[l.jsx(r,{type:"primary",icon:z?l.jsx("i",{className:"fa-solid fa-rotate-right fa-spin"}):l.jsx("i",{className:"fa-solid fa-rotate-right"}),onClick:()=>X(!0),children:V({en:"Reload",vi:"Tải lại"})}),l.jsx(x,{data:i,options:[{key:"id",label:".txt (group id)",prepareData:e=>({fileName:"your_groups_id"+p().format("YYYY-MM-DD-HHmmss")+".txt",data:e?.map((e=>e.id)).join("\n")})},{key:"id_name",label:".csv (id+name)",prepareData:e=>({fileName:"my_joined_groups_id_name.csv",data:g(e.map((e=>({uid:e.id,name:e.name}))))})},{key:"json",label:".json",prepareData:e=>({fileName:"your_groups"+p().format("YYYY-MM-DD-HHmmss")+".json",data:JSON.stringify(e?.map((e=>({...e,last_visited:s(e.lastVisitedTime,V({en:"en-US",vi:"vi-VN"}))}))),null,4)})},{key:"csv",label:".csv",prepareData:e=>({fileName:"your_groups"+p().format("YYYY-MM-DD-HHmmss")+".csv",data:g(e)})}]}),l.jsx(b,{title:V({en:`Leave ${a.length} selected groups`,vi:`Rời ${a.length} nhóm được chọn`}),children:l.jsx(r,{danger:!0,disabled:a.length<=0,icon:l.jsx("i",{className:"fa-regular fa-trash-can"}),onClick:()=>{return $({data:e=a,key:"Groups:onClickLeaveSelectedGroups",actionFn:Z,loadingText:(e,n,t)=>V({en:"Leaving groups...",vi:"Đang rời nhóm..."}),successText:(e,n)=>V({en:"Bulk leave groups completed",vi:"Hoàn tất Rời nhóm hàng loạt"}),successDescItem:e=>l.jsx("a",{target:"_blank",href:L(e.id),children:e.name}),confirmProps:{title:V({en:`Leave ${e.length} groups`,vi:`Rời ${e.length} nhóm`}),text:V({en:`Are your sure want to Leave ${e.length} groups?`,vi:`Bản có chãc muốn rời ${e.length} nhóm?`})}});var e},children:a.length})}),l.jsx(b,{title:V({en:`Find groups that have no admin in ${o.length} selected groups`,vi:`Tìm nhóm không có admin quản lý trong ${o.length} nhóm được chọn`}),children:l.jsx(r,{icon:l.jsx("i",{className:"fa-solid fa-user-large-slash"}),onClick:()=>(async t=>{if(!(await _()))return;const i="Groups:onClickFindNoAdminGroups",a=i+":waiting";f(i),e.loading({key:i,duration:0,content:V({en:"Finding groups no admin... ",vi:"Đang tìm nhóm không có admin... "})});let s=[],r=!1;for(let n=0;n<t.length&&!r;n++){const o=t[n],c={key:i,duration:0,content:l.jsxs(l.Fragment,{children:[V({en:"Checking group... ",vi:"Đang kiểm tra... "})+`${n+1}/${t.length}`,l.jsx("br",{}),o.name,l.jsx("br",{}),V({en:"Found ",vi:"Tìm thấy "})+s.length,l.jsx("br",{}),l.jsx("i",{children:V({en:"Click to stop",vi:"Bấm để dừng"})})]}),onClick:()=>{r=!0}};if(e.loading(c),0===(await S(o.id)).adminCount&&(s.push(o),Q.current?.setDataSelected?.([...s])),e.success(c),n<t.length-1){const n=h(2e3,5e3);await d(n,(n=>(e.loading({key:a,content:V({en:"Waiting "+Math.round(n/1e3)+"s",vi:"Đang đợi "+Math.round(n/1e3)+"s"}),duration:0}),r)))}}e.destroy(i),e.destroy(a),n.open({type:"success",duration:0,message:V({en:`Found ${s.length}/${t.length} groups no admin`,vi:`Tìm thấy ${s.length}/${t.length} nhóm không có admin`}),description:l.jsx("ol",{style:{maxHeight:300,overflowY:"auto",whiteSpace:"pre-wrap"},children:s.map((e=>l.jsx("li",{children:l.jsx("a",{target:"_blank",href:L(e.id),children:e.name})},e.id)))})})})(o),disabled:o.length<=0,children:o.length})}),l.jsx(C,{name:"Groups",text:U.map((e=>e.name)).join(" ")}),l.jsx(b,{title:V({en:"View on Facebook",vi:"Xem trên Facebook"}),children:l.jsx(r,{icon:l.jsx("i",{className:"fa-solid fa-external-link"}),onClick:()=>window.open("https://www.facebook.com/groups/joins","_blank")})})]})},size:"small",searchable:!0,selectable:!0,onSearchRow:(e,n)=>o(e,n?.name+n?.id+s(n?.lastVisitedTime,V({en:"en-US",vi:"vi-VN"}))),keyExtractor:e=>e?.id})})}));const R=a.lazy((()=>c((()=>n.import("./MyTable-legacy-7CnvfFeK.js")),void 0,n.meta.url)))}}}));
