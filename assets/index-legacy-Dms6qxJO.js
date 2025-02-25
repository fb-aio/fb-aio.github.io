System.register(["./index-legacy-8-GCpkLg.js","./dayjs.min-legacy-ClNuVTKE.js","./useForceStop-legacy-cAwhaEMf.js","./ExportButton-legacy-BtqUhywS.js","./MyApp-legacy-DxnVTjuu.js","./groups-legacy-RXvBMTK4.js","./WordStatisticButton-legacy-Ocpn4T_1.js","./useAction-legacy-DI1rzrcB.js","./useDevMode-legacy-SDaQFSwv.js","./index-legacy-I6RgXEAa.js","./index-legacy-Dyh6Me7-.js","./row-legacy-BiFp7Cmz.js","./file-download-legacy-CgSzGb7r.js","./index-legacy-DYWOJ_rp.js","./Dropdown-legacy-DuJaTT2m.js","./PurePanel-legacy-CxYmJ__b.js","./move-legacy-Qi-AQm3Z.js","./BadgeWrapper-legacy-CcgOSEOV.js","./MyTable-legacy-DkDce7pi.js","./index-legacy-ByZyruIP.js","./index-legacy-CqZRXk4y.js","./DownOutlined-legacy-CRUzbBMV.js","./TextArea-legacy-yddu9c3w.js","./Table-legacy-f9VvH3NO.js","./addEventListener-legacy-ByYub5JQ.js","./index-legacy-CIVjvpVp.js","./SearchOutlined-legacy-D0NA1mI6.js","./index-legacy-90wiH5ec.js","./useBreakpoint-legacy-BRBG8lH0.js","./responsiveObserver-legacy-B3sML1O0.js","./Pagination-legacy-CdlSUAnm.js","./index-legacy-DREc_bV6.js","./EyeOutlined-legacy-_k9CHjU5.js","./index-legacy-BlGBGEV3.js","./index-legacy-B-QFyx4G.js","./Collapse-legacy-CmzlcaQn.js","./index-legacy-DQqsD2_u.js"],(function(e,n){"use strict";var i,t,a,l,s,r,o,c,d,u,g,m,h,p,y,x,j,v,f,T,k,b,N,L,w,D,_,E,M,O,C,F,G,S,P,R;return{setters:[e=>{i=e.b9,t=e.aK,a=e.r,l=e.aM,s=e.b5,r=e.aQ,o=e.b3,c=e.aX,d=e.aG,u=e.bs,g=e.bc,m=e.bd,h=e.bw},e=>{p=e.d},e=>{y=e.u},e=>{x=e.E},e=>{j=e.u,v=e.e,f=e.t,T=e.S,k=e.b,b=e.T,N=e.a,L=e.k},e=>{w=e.g,D=e.U,_=e.a,E=e.S,M=e.l,O=e.b},e=>{C=e.W},e=>{F=e.u},e=>{G=e.u},e=>{S=e.A},e=>{P=e.T},e=>{R=e.R},null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],execute:function(){e("default",(function(){const{message:e,notification:n}=j(),c=i(),{ti:V}=t(),{onClickAction:Y,onClickBulkActions:$}=F(),{devMode:A}=G(),B=y(),[H,U]=v("Groups.data",[]),[W,J]=v("Groups.finished",!1),[z,Q]=a.useState(!1),X=a.useRef(null);a.useEffect((()=>{W||q(!1)}),[]);const q=async(n=!1)=>{if(z&&!n)return;const i=B.start(),t=n?[]:[...H],a=new Set(t.map((e=>e.id))),l="Groups:onReload";f(l),Q(!0),J(!1);try{for(const[s,r]of[[w,D.ADMIN],[_,D.MEMBER]]){const o=t[t.length-1];let c=n?"":o?.userType===r?o?.cursor:"";for(;!i.value();){e.loading({key:l,content:V({en:"Loading groups...",vi:"Đang tải nhóm..."})+t.length,duration:0});const n=await s({cursor:c}),i=n?.filter((e=>!a.has(e.id)));if(n.forEach((e=>a.add(e.id))),!i?.length)break;t.push(...i),c=t?.[t?.length-1]?.cursor,U([...t])}}e.success({key:l,content:(i.value()?V({en:"Load groups stopped ",vi:"Dừng tải nhóm "}):V({en:"Load groups completed ",vi:"Tải xong nhóm "}))+t.length}),J(!i.value())}catch(s){e.error({content:V({en:"Failed to load groups: ",vi:"Lỗi tải nhóm: "})+s.message})}finally{Q(!1)}},K=(e,n=!1)=>Y({key:"Groups:onClickLeaveGroup",id:e.id,record:e,actionFn:()=>A?d(1e3):M(e.id),loadingText:e=>V({en:"Leaving group...",vi:"Đang rời nhóm..."})+e.name,successText:e=>V({en:"Left group ",vi:"Đã rời nhóm "})+e.name,failedText:e=>V({en:"Failed to leave group: ",vi:"Lỗi rời nhóm: "})+e.name,onSuccess(){((e,n=D.NOT_JOINED)=>{U((i=>m(i,(i=>{const t=i.findIndex((n=>n.id==e));return i[t].userType=n,i}))))})(e.id)},needConfirm:n,confirmProps:{title:V({en:"Leave group?",vi:"Rời nhóm?"}),text:e.name}}),Z=e=>{switch(e){case D.MEMBER:return{color:"default",text:V({en:"Member",vi:"Thành viên"})};case D.ADMIN:return{color:"success",text:"Admin"};case D.NOT_JOINED:return{color:"error",text:V({en:"Left group",vi:"Đã rời nhóm"})};case D.PENDING:return{color:"warning",text:V({en:"Pending",vi:"Đang chờ"})};default:return{color:"default",text:"?"}}},ee=[{title:"#",key:"index",dataIndex:"index"},{title:V({en:"Group",vi:"Nhóm"}),key:"group",dataIndex:"group",sorter:(e,n)=>e.name.localeCompare(n.name),render:(e,n,i)=>l.jsxs(T,{style:{maxWidth:400},align:"start",children:[l.jsx(S,{src:n.avatar,size:45}),l.jsxs(T,{direction:"vertical",size:0,children:[l.jsx(P.Link,{href:n.url,target:"_blank",children:l.jsx("b",{children:n.name})}),l.jsx(P.Text,{type:"secondary",children:n.id})]})]})},{title:V({en:"Last visit",vi:"Lần xem gần nhất"}),key:"lastVisitedTime",dataIndex:"lastVisitedTime",sorter:(e,n)=>e.lastVisitedTime-n.lastVisitedTime,render:(e,n,i)=>s(n.lastVisitedTime,V({en:"en-US",vi:"vi-VN"})),align:"right"},{title:V({en:"Type",vi:"Loại"}),key:"type",dataIndex:"userType",render:(e,n,i)=>{const{color:t,text:a}=Z(n.userType);return l.jsxs(l.Fragment,{children:[n.subspaceType==E.TOP_LEVEL_GROUP&&l.jsxs(l.Fragment,{children:[l.jsx(k,{title:V({en:"Your most interested group",vi:"Nhóm bạn quan tâm nhất"}),children:l.jsx(b,{color:"purple",children:"Top level"})}),l.jsx("br",{})]}),l.jsx(b,{color:t,children:a})]})},filters:[...Object.values(D).map((e=>{const{text:n}=Z(e);return{text:n+" ("+H.filter((n=>n.userType==e)).length+")",value:e}})),{text:"Top level ("+H.filter((e=>e.subspaceType==E.TOP_LEVEL_GROUP)).length+")",value:E.TOP_LEVEL_GROUP}],onFilter:(e,n)=>e==E.TOP_LEVEL_GROUP?n.subspaceType==e:n.userType==e,align:"right"},{title:V({en:"Action",vi:"Hành động"}),key:"action",render:(e,n,i)=>l.jsxs(T.Compact,{style:{minWidth:30},children:[l.jsx(k,{title:V({en:"Bulk Downloader",vi:"Tải hàng loạt"}),children:l.jsx(r,{type:"default",onClick:()=>(e=>{c("/bulk-downloader",{state:{targetId:e.id,platform:u.Facebook}})})(n),icon:l.jsx("i",{className:"fa-solid fa-download"})})}),n.userType!==D.NOT_JOINED?l.jsx(k,{title:V({en:"Leave group",vi:"Rời nhóm"}),children:l.jsx(r,{danger:!0,onClick:()=>K(n,!0),icon:l.jsx("i",{className:"fa-regular fa-trash-can"})})}):null]}),align:"right"}];return l.jsxs("div",{style:{display:"flex",flexDirection:"column",width:"100%",height:"100%"},children:[l.jsxs(R,{align:"middle",style:{margin:16},children:[l.jsx(P.Title,{level:3,style:{margin:0},children:V({en:"Groups manager",vi:"Quản lý nhóm"})}),l.jsx(b,{style:{marginLeft:"10px",fontWeight:"bold",color:"#888"},children:H.length})]}),l.jsx(I,{ref:X,data:[...H].sort(((e,n)=>n.subspaceType.localeCompare(e.subspaceType))).map(((e,n)=>({...e,index:n+1}))),columns:ee,renderTitle:i=>{const t=i?.length?[...i]:[...H],a=t?.map((e=>H.find((n=>n.id===e.id))))?.filter((e=>e&&e.userType!==D.NOT_JOINED))||[],o=t?.map((e=>H.find((n=>n.id===e.id))))?.filter((e=>e&&e.userType!==D.ADMIN&&e.userType!==D.PENDING))||[];return l.jsxs(l.Fragment,{children:[l.jsx(r,{type:"primary",icon:z?l.jsx("i",{className:"fa-solid fa-rotate-right fa-spin"}):l.jsx("i",{className:"fa-solid fa-rotate-right"}),onClick:()=>q(!0),children:V({en:"Reload",vi:"Tải lại"})}),l.jsx(x,{data:t,options:[{key:"id",label:".txt (group id)",prepareData:e=>({fileName:"your_groups_id"+p().format("YYYY-MM-DD-HHmmss")+".txt",data:e?.map((e=>e.id)).join("\n")})},{key:"id_name",label:".csv (id+name)",prepareData:e=>({fileName:"my_joined_groups_id_name.csv",data:g(e.map((e=>({uid:e.id,name:e.name}))))})},{key:"json",label:".json",prepareData:e=>({fileName:"your_groups"+p().format("YYYY-MM-DD-HHmmss")+".json",data:JSON.stringify(e?.map((e=>({...e,last_visited:s(e.lastVisitedTime,V({en:"en-US",vi:"vi-VN"}))}))),null,4)})},{key:"csv",label:".csv",prepareData:e=>({fileName:"your_groups"+p().format("YYYY-MM-DD-HHmmss")+".csv",data:g(e)})}]}),l.jsx(k,{title:V({en:`Leave ${a.length} selected groups`,vi:`Rời ${a.length} nhóm được chọn`}),children:l.jsx(r,{danger:!0,disabled:a.length<=0,icon:l.jsx("i",{className:"fa-regular fa-trash-can"}),onClick:()=>{return $({data:e=a,key:"Groups:onClickLeaveSelectedGroups",actionFn:K,loadingText:(e,n,i)=>V({en:"Leaving groups...",vi:"Đang rời nhóm..."}),successText:(e,n)=>V({en:"Bulk leave groups completed",vi:"Hoàn tất Rời nhóm hàng loạt"}),successDescItem:e=>l.jsx("a",{target:"_blank",href:N(e.id),children:e.name}),confirmProps:{title:V({en:`Leave ${e.length} groups`,vi:`Rời ${e.length} nhóm`}),text:V({en:`Are your sure want to Leave ${e.length} groups?`,vi:`Bản có chãc muốn rời ${e.length} nhóm?`})}});var e},children:a.length})}),l.jsx(k,{title:V({en:`Find groups that have no admin in ${o.length} selected groups`,vi:`Tìm nhóm không có admin quản lý trong ${o.length} nhóm được chọn`}),children:l.jsx(r,{icon:l.jsx("i",{className:"fa-solid fa-user-large-slash"}),onClick:()=>(async i=>{if(!(await L()))return;const t="Groups:onClickFindNoAdminGroups",a=t+":waiting";f(t),e.loading({key:t,duration:0,content:V({en:"Finding groups no admin... ",vi:"Đang tìm nhóm không có admin... "})});let s=[],r=!1;for(let n=0;n<i.length&&!r;n++){const o=i[n],c={key:t,duration:0,content:l.jsxs(l.Fragment,{children:[V({en:"Checking group... ",vi:"Đang kiểm tra... "})+`${n+1}/${i.length}`,l.jsx("br",{}),o.name,l.jsx("br",{}),V({en:"Found ",vi:"Tìm thấy "})+s.length,l.jsx("br",{}),l.jsx("i",{children:V({en:"Click to stop",vi:"Bấm để dừng"})})]}),onClick:()=>{r=!0}};if(e.loading(c),0===(await O(o.id)).adminCount&&(s.push(o),X.current?.setDataSelected?.([...s])),e.success(c),n<i.length-1){const n=h(2e3,5e3);await d(n,(n=>(e.loading({key:a,content:V({en:"Waiting "+Math.round(n/1e3)+"s",vi:"Đang đợi "+Math.round(n/1e3)+"s"}),duration:0}),r)))}}e.destroy(t),e.destroy(a),n.open({type:"success",duration:0,message:V({en:`Found ${s.length}/${i.length} groups no admin`,vi:`Tìm thấy ${s.length}/${i.length} nhóm không có admin`}),description:l.jsx("ol",{style:{maxHeight:300,overflowY:"auto",whiteSpace:"pre-wrap"},children:s.map((e=>l.jsx("li",{children:l.jsx("a",{target:"_blank",href:N(e.id),children:e.name})},e.id)))})})})(o),disabled:o.length<=0,children:o.length})}),l.jsx(C,{name:"Groups",text:H.map((e=>e.name)).join(" ")}),l.jsx(k,{title:V({en:"View on Facebook",vi:"Xem trên Facebook"}),children:l.jsx(r,{icon:l.jsx("i",{className:"fa-solid fa-external-link"}),onClick:()=>window.open("https://www.facebook.com/groups/joins","_blank")})})]})},size:"small",searchable:!0,selectable:!0,onSearchRow:(e,n)=>o(e,n?.name+n?.id+s(n?.lastVisitedTime,V({en:"en-US",vi:"vi-VN"}))),keyExtractor:e=>e?.id})]})}));const I=a.lazy((()=>c((()=>n.import("./MyTable-legacy-DkDce7pi.js")),void 0,n.meta.url)))}}}));
