import{aJ as f,r as s,aL as i,aN as h,b9 as j}from"./index-C9a7kOyS.js";import{u as b}from"./useForceStop-B6Uv17oP.js";import{M as y}from"./MyTable-Bsc-IDjl.js";import{b as T}from"./groups-RBwN75tm.js";import{R as v}from"./row-C9GAN_vR.js";import{A as C}from"./index-CKIo4QoG.js";import{I as A}from"./index-B9K95DAg.js";import{b as I}from"./MyApp-eLgOszab.js";import{A as k}from"./index-Cy9p4zqv.js";import"./index-1LBg6_PE.js";import"./index-aY3yYPYF.js";import"./index-DZeVjoNF.js";import"./PurePanel-DJB0B014.js";import"./SearchOutlined-DrFTn-jV.js";import"./Table-BigyY78I.js";import"./addEventListener-8k3J7yP4.js";import"./index-C9gPXY7f.js";import"./index-BYTpD0UZ.js";import"./Dropdown-gfxpn-z7.js";import"./useBreakpoint-C1qEcW11.js";import"./Pagination-DPFRT-88.js";import"./index-DmxoYqZk.js";import"./EyeOutlined-B_Sf26ve.js";import"./index-F7cWREmo.js";function X({target:a}){const{ti:o}=f();b();const[l,m]=s.useState(!1),[r,d]=s.useState(null),[n,S]=s.useState([]),p=s.useMemo(()=>n.map((e,t)=>({...e,recent:t})),[n]);s.useEffect(()=>{!(a!=null&&a.id)||!(a!=null&&a.type)||(m(!0),T(a==null?void 0:a.id).then(e=>{d(e)}).finally(()=>{m(!1)}))},[a]);const c=e=>i.jsxs(i.Fragment,{children:[i.jsx(I,{title:o({en:"Coming Soon",vi:"Sắp có"}),children:i.jsx(h,{type:"primary",icon:l?i.jsx("i",{className:"fa-solid fa-rotate-right fa-spin"}):i.jsx("i",{className:"fa-solid fa-rotate-right"}),disabled:!0,children:o("Fetch all")})}),i.jsx(k,{showIcon:!0,type:"info",message:`${r==null?void 0:r.adminCount} admins. ${j(r==null?void 0:r.memberCount)} members`})]}),u=[{title:"#",dataIndex:"recent",key:"recent",render:(e,t,x)=>(t.recent||0)+1},{title:o({en:"Name",vi:"Tên"}),key:"name",dataIndex:"name",sorter:(e,t)=>e.name.localeCompare(t.name),render:(e,t,x)=>i.jsxs(v,{align:"middle",children:[i.jsx(C,{shape:"square",src:i.jsx(A,{src:t.avatar}),size:50}),i.jsx("a",{href:t.url,target:"_blank",style:{marginLeft:"10px"},children:i.jsx("b",{children:t.name})})]}),width:"auto"},{title:"Uid",dataIndex:"id",key:"id",sorter:(e,t)=>e.id.localeCompare(t.id),width:150},{title:o({en:"Joined time",vi:"Tham gia lúc"}),dataIndex:"joinedTime",key:"joinedTime",sorter:(e,t)=>e.joinedTime.localeCompare(t.joinedTime)},{title:o({en:"Last Active",vi:"Hoạt động gần nhất"}),dataIndex:"lastActiveTime",key:"lastActiveTime",sorter:(e,t)=>e.lastActiveTime.localeCompare(t.lastActiveTime)}];return i.jsx(y,{columns:u,data:p,keyExtractor:e=>e.id,searchable:!0,renderTitle:c})}export{X as default};
