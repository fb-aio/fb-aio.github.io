import{r as o,ap as i,as as x}from"./index-CbxyLh1i.js";import{u as f}from"./useForceStop-BfL0Osu8.js";import{u as h,e as j}from"./MyApp-Sn1_uDoa.js";import y from"./MyTable-DZ1NqMm-.js";import{b as T}from"./groups-Cu7MvoAr.js";import{R as b}from"./row-dVMcO0Mb.js";import{A as v}from"./index-B0Efb1Es.js";import{I as A}from"./index-sgys5hDh.js";import{A as C}from"./index-ClKVc9EI.js";import"./Table-BjQ9AV51.js";import"./index-Ce2uPXMA.js";import"./addEventListener-B174J_4Q.js";import"./index-BVuv5qFT.js";import"./PurePanel-DG3EGm-S.js";import"./index-CO9h1vGW.js";import"./index-C5W4bBkQ.js";import"./index-9ekC7r9I.js";import"./Dropdown-CWpi5ZAi.js";import"./index-DxnPqtWt.js";import"./useBreakpoint-BbqyQBFm.js";import"./responsiveObserver-CGHRY4l1.js";import"./Pagination-juAnr4uF.js";import"./index-BtmKbfTk.js";import"./index-C60-ymOx.js";function V({target:a}){const{ti:s}=h();f();const[n,I]=o.useState(!1),[r,d]=o.useState(null),[m,k]=o.useState([]),l=o.useMemo(()=>m.map((e,t)=>({...e,recent:t})),[m]);o.useEffect(()=>{!(a!=null&&a.id)||!(a!=null&&a.type)||T(a==null?void 0:a.id).then(e=>{d(e)})},[a]);const p=e=>i.jsxs(i.Fragment,{children:[i.jsx(x,{type:"primary",icon:n?i.jsx("i",{className:"fa-solid fa-rotate-right fa-spin"}):i.jsx("i",{className:"fa-solid fa-rotate-right"}),disabled:!0,children:s("Fetch all")}),i.jsx(C,{showIcon:!0,type:"info",message:`${r==null?void 0:r.adminCount} admins. ${j(r==null?void 0:r.memberCount)} members`})]}),c=[{title:"#",dataIndex:"recent",key:"recent",render:(e,t,u)=>(t.recent||0)+1},{title:s({en:"Name",vi:"Tên"}),key:"name",dataIndex:"name",sorter:(e,t)=>e.name.localeCompare(t.name),render:(e,t,u)=>i.jsxs(b,{align:"middle",children:[i.jsx(v,{shape:"square",src:i.jsx(A,{src:t.avatar}),size:50}),i.jsx("a",{href:t.url,target:"_blank",style:{marginLeft:"10px"},children:i.jsx("b",{children:t.name})})]}),width:"auto"},{title:"Uid",dataIndex:"id",key:"id",sorter:(e,t)=>e.id.localeCompare(t.id),width:150},{title:s({en:"Joined time",vi:"Tham gia lúc"}),dataIndex:"joinedTime",key:"joinedTime",sorter:(e,t)=>e.joinedTime.localeCompare(t.joinedTime)},{title:s({en:"Last Active",vi:"Hoạt động gần nhất"}),dataIndex:"lastActiveTime",key:"lastActiveTime",sorter:(e,t)=>e.lastActiveTime.localeCompare(t.lastActiveTime)}];return i.jsx(y,{columns:c,data:l,keyExtractor:e=>e.id,searchable:!0,renderTitle:p})}export{V as default};
