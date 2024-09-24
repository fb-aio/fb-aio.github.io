import{an as I,ao as J,r as y,aq as o,ar as j,aJ as E}from"./index-BYbUpaCK.js";import{u as S,d as B,w as v,b as l,e as A,T as G,o as b}from"./MyApp-B1wI3_ih.js";import{u as L}from"./useForceStop-B8lSC49n.js";import F from"./MyTable-BctGmBON.js";import{E as M}from"./ExportButton-BdoY1s3T.js";import{c as R}from"./groups-BG0ALgyg.js";import{I as O}from"./index-BPPwnt7q.js";import{A as W}from"./index-Cm9TuPNB.js";import"./Table-buvcAfSE.js";import"./TextArea-C4oIzMKj.js";import"./addEventListener-DVPv7en2.js";import"./index-DXP0tqwF.js";import"./PurePanel-ClV8F7Ol.js";import"./index-DKRTuJ6m.js";import"./index-C3eP1PzG.js";import"./index-Dq1Q_KO6.js";import"./Dropdown-DNauGiFD.js";import"./index-BXpp0rOT.js";import"./useBreakpoint-Cqa0YYYx.js";import"./responsiveObserver-DfJEY4Uv.js";import"./Pagination-DPi6n6z6.js";import"./index-wDIPV1Tc.js";import"./row-DqHag9PQ.js";import"./file-download-DkBPBkun.js";function me({target:e}){const{ti:a}=S(),{message:c}=I.useApp(),k=J(),C=L(),[m,p]=y.useState(!1),[d,u]=B("JoinedGroups.data."+(e==null?void 0:e.id),[]);y.useEffect(()=>{var i;e!=null&&e.id&&h(!((i=v("JoinedGroups.data."+(e==null?void 0:e.id)))!=null&&i.length))},[e==null?void 0:e.id]);const h=async(i=!1)=>{var f;if(!(e!=null&&e.id))return;const n=C.start();let t=[...i?[]:v("JoinedGroups.data."+(e==null?void 0:e.id))||[]],x=((f=t[t.length-1])==null?void 0:f.cursor)||"";p(!0);try{for(;!n.value();){const r=await R({uid:e.id,cursor:x});if(!(r!=null&&r.length))break;x=r[r.length-1].cursor,t=[...t,...r].map((D,T)=>({...D,recent:T})),u(t)}c.success({content:a({en:"Load groups success ",vi:"Tải nhóm xong "})+t.length})}catch(r){c.error({content:a({en:"Error: ",vi:"Lỗi: "})+r.message})}finally{u(t),p(!1)}},w=i=>{k("/bulk-downloader",{state:{targetId:i,platform:E.Facebook}})},_=i=>o.jsxs(l,{children:[o.jsx(j,{disabled:m,type:"primary",icon:m?o.jsx("i",{className:"fa-solid fa-rotate-right fa-spin"}):o.jsx("i",{className:"fa-solid fa-rotate-right"}),onClick:()=>h(!0),children:a({en:"Reload",vi:"Tải lại"})}),o.jsx(M,{data:i.length?i:d,options:[{key:"uid",label:".txt (groups id)",prepareData:n=>({fileName:(e==null?void 0:e.name)+"_joined_groups_id.txt",data:n.map(s=>s.id).join(`
`)})},{key:"id_name",label:".csv (group id+name)",prepareData:n=>({fileName:(e==null?void 0:e.name)+"_joined_groups_id_name.csv",data:b(n.map(s=>({uid:s.id,name:s.name})))})},{key:"json",label:".json",prepareData:n=>({fileName:(e==null?void 0:e.name)+"_joined_groups.json",data:JSON.stringify(n,null,4)})},{key:"csv",label:".csv",prepareData:n=>({fileName:(e==null?void 0:e.name)+"_joined_groups.csv",data:b(n)})}]})]}),N=[{title:"#",dataIndex:"recent",key:"recent",render:(i,n,s)=>(n.recent||0)+1,sorter:(i,n)=>i.recent-n.recent,width:60},{title:a({en:"Cover",vi:"Ảnh"}),key:"cover",dataIndex:"image",render:(i,n,s)=>o.jsx(O,{src:n.image,style:{width:150,height:100,objectFit:"contain"}}),width:150},{title:a({en:"Name",vi:"Tên"}),key:"name",dataIndex:"name",sorter:(i,n)=>i.name.localeCompare(n.name),render:(i,n,s)=>o.jsxs(l,{direction:"vertical",style:{maxWidth:250},children:[o.jsx("a",{href:n.url,target:"_blank",children:o.jsx("b",{children:n.name})}),o.jsx("span",{style:{opacity:.7},children:n.id})]})},{title:a({en:"Description",vi:"Mô tả"}),key:"description",dataIndex:"description",render:(i,n,s)=>o.jsx("p",{style:{width:250},children:i}),sorter:(i,n)=>(i.description||"").localeCompare(n.description||"")},{title:a({en:"Members",vi:"Thành viên"}),key:"membersCount",dataIndex:"membersCount",sorter:(i,n)=>i.membersCount-n.membersCount,render:(i,n,s)=>A(i),align:"end",width:120},{title:a({en:"Actions",vi:"Hành động"}),key:"actions",render:(i,n,s)=>o.jsx(l.Compact,{children:o.jsx(G,{title:a({en:"Bulk Downloader",vi:"Tải hàng loạt"}),children:o.jsx(j,{type:"default",onClick:()=>w(n.id),icon:o.jsx("i",{className:"fa-solid fa-download"})})})}),width:100,align:"end"}];return o.jsxs("div",{style:{display:"flex",flexDirection:"column",width:"100%",height:"100%"},children:[o.jsx(W,{type:"success",showIcon:!0,message:a({en:`Joined ${d.length} public groups`,vi:`Đã tham gia ${d.length} nhóm công khai`}),style:{alignSelf:"center",marginBottom:10}}),o.jsx(F,{columns:N,data:d,keyExtractor:i=>i==null?void 0:i.id,searchable:!0,selectable:!0,pageSize:5,renderTitle:_})]})}export{me as default};