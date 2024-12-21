import{aI as S,aw as B,b4 as E,r as y,aD as J,aK as o,b7 as A,aM as j,bb as G,b8 as b}from"./index-BoZ3qCu-.js";import{u as L}from"./useForceStop-DX089J2G.js";import{M}from"./MyTable-BCaimdBe.js";import{E as W}from"./ExportButton-DgFEbkrh.js";import{i as F,k,S as l,b as R}from"./MyApp-D00-hVKM.js";import{c as K}from"./groups-CUw6ppsg.js";import{W as O}from"./WordStatisticButton-RBQ9zWZ_.js";import{I as $}from"./index-B9p0fwME.js";import{T as v}from"./index-BqA1u72M.js";import{A as z}from"./index-dSRIMC1R.js";import"./index-DISxAyNO.js";import"./index-D8gaebSk.js";import"./PurePanel-BOikr8JH.js";import"./SearchOutlined-jKWQFlYP.js";import"./Table-CyCG4zvu.js";import"./addEventListener-CnAWjiAc.js";import"./index-Lhz2nIJB.js";import"./index-eKalL2eG.js";import"./Dropdown-DBLdsESi.js";import"./useBreakpoint-F7WTD34q.js";import"./Pagination-DzBVYRJu.js";import"./index-AT3_9SK-.js";import"./EyeOutlined-BHVey_FU.js";import"./row-CSBfwUbZ.js";import"./file-download-Cuv0I7kF.js";function xe({target:i}){const{ti:a}=S(),{message:c}=B.useApp(),w=E(),C=L(),[m,p]=y.useState(!1),[d,u]=F("JoinedGroups.data."+(i==null?void 0:i.id),[]);y.useEffect(()=>{var n;i!=null&&i.id&&h(!((n=k("JoinedGroups.data."+(i==null?void 0:i.id)))!=null&&n.length))},[i==null?void 0:i.id]);const h=async(n=!1)=>{var f;if(!(i!=null&&i.id))return;const e=C.start();let t=[...n?[]:k("JoinedGroups.data."+(i==null?void 0:i.id))||[]],x=((f=t[t.length-1])==null?void 0:f.cursor)||"";p(!0);try{for(;!e.value();){const r=await K({uid:i.id,cursor:x});if(!(r!=null&&r.length))break;x=r[r.length-1].cursor,t=[...t,...r].map((N,I)=>({...N,recent:I})),u(t),await J(500)}c.success({content:a({en:"Load groups success ",vi:"Tải nhóm xong "})+t.length})}catch(r){c.error({content:a({en:"Error: ",vi:"Lỗi: "})+r.message})}finally{u(t),p(!1)}},_=n=>{w("/bulk-downloader",{state:{targetId:n,platform:G.Facebook}})},T=n=>o.jsxs(l,{children:[o.jsx(j,{disabled:m,type:"primary",icon:m?o.jsx("i",{className:"fa-solid fa-rotate-right fa-spin"}):o.jsx("i",{className:"fa-solid fa-rotate-right"}),onClick:()=>h(!0),children:a({en:"Reload",vi:"Tải lại"})}),o.jsx(W,{data:n.length?n:d,options:[{key:"uid",label:".txt (groups id)",prepareData:e=>({fileName:(i==null?void 0:i.name)+"_joined_groups_id.txt",data:e.map(s=>s.id).join(`
`)})},{key:"id_name",label:".csv (group id+name)",prepareData:e=>({fileName:(i==null?void 0:i.name)+"_joined_groups_id_name.csv",data:b(e.map(s=>({uid:s.id,name:s.name})))})},{key:"json",label:".json",prepareData:e=>({fileName:(i==null?void 0:i.name)+"_joined_groups.json",data:JSON.stringify(e,null,4)})},{key:"csv",label:".csv",prepareData:e=>({fileName:(i==null?void 0:i.name)+"_joined_groups.csv",data:b(e)})}]}),o.jsx(O,{text:d.map(e=>e.name+" "+(e.description||"")).join(`
`)})]}),D=[{title:"#",dataIndex:"recent",key:"recent",render:(n,e,s)=>(e.recent||0)+1,sorter:(n,e)=>n.recent-e.recent,width:60},{title:a({en:"Cover",vi:"Ảnh"}),key:"cover",dataIndex:"image",render:(n,e,s)=>o.jsx($,{src:e.image,style:{width:150,height:100,objectFit:"contain"}}),width:150},{title:a({en:"Name",vi:"Tên"}),key:"name",dataIndex:"name",sorter:(n,e)=>n.name.localeCompare(e.name),render:(n,e,s)=>o.jsxs(l,{direction:"vertical",style:{maxWidth:250},children:[o.jsx(v.Link,{strong:!0,href:e.url,target:"_blank",children:e.name}),o.jsx(v.Text,{type:"secondary",children:e.id})]})},{title:a({en:"Description",vi:"Mô tả"}),key:"description",dataIndex:"description",render:(n,e,s)=>o.jsx("p",{style:{width:250},children:n}),sorter:(n,e)=>(n.description||"").localeCompare(e.description||"")},{title:a({en:"Members",vi:"Thành viên"}),key:"membersCount",dataIndex:"membersCount",sorter:(n,e)=>n.membersCount-e.membersCount,render:(n,e,s)=>A(n),align:"end",width:120},{title:a({en:"Actions",vi:"Hành động"}),key:"actions",render:(n,e,s)=>o.jsx(l.Compact,{children:o.jsx(R,{title:a({en:"Bulk Downloader",vi:"Tải hàng loạt"}),children:o.jsx(j,{type:"default",onClick:()=>_(e.id),icon:o.jsx("i",{className:"fa-solid fa-download"})})})}),width:100,align:"end"}];return o.jsxs("div",{style:{display:"flex",flexDirection:"column",width:"100%",height:"100%"},children:[o.jsx(z,{type:"success",showIcon:!0,message:a({en:`Joined ${d.length} public groups`,vi:`Đã tham gia ${d.length} nhóm công khai`}),style:{alignSelf:"center",marginBottom:10}}),o.jsx(M,{columns:D,data:d,keyExtractor:n=>n==null?void 0:n.id,searchable:!0,selectable:!0,pageSize:5,renderTitle:T})]})}export{xe as default};
