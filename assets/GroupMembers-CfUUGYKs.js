import{r,aq as i,ar as x}from"./index-BnkMA1vW.js";import{u as f}from"./useForceStop-DaDsJMNe.js";import{a as h,f as j}from"./MyApp-DltFDv_V.js";import T from"./MyTable-DGyC-9ab.js";import{c as y}from"./groups-CcxVTFut.js";import{R as v}from"./row-CNmcWAX5.js";import{A as I}from"./index-CUMb4MfP.js";import{I as b}from"./index-hIwuqtzz.js";import"./styleChecker-CFcWfr8b.js";import"./addEventListener-Btyl3Jj6.js";import"./index-BeeTYsU2.js";import"./PurePanel-3wTaHio6.js";import"./TextArea-DNgpE2Ze.js";import"./index-BiHQr6mc.js";import"./index-dzH3ms-r.js";import"./Dropdown-CzepKDlK.js";import"./useBreakpoint-WmbarIyy.js";import"./responsiveObserver-BdYfetC_.js";import"./Pagination-BLedMhPS.js";import"./index-C9BuueIn.js";function K({target:a}){const{ti:o}=h();f();const[n,k]=r.useState(!1),[m,d]=r.useState(0),[s,A]=r.useState([]),l=r.useMemo(()=>s.map((e,t)=>({...e,recent:t})),[s]);r.useEffect(()=>{!(a!=null&&a.id)||!(a!=null&&a.type)||y({groupId:a==null?void 0:a.id}).then(e=>{d(e)})},[a]);const c=e=>i.jsx(i.Fragment,{children:i.jsx(x,{type:"primary",icon:n?i.jsx("i",{className:"fa-solid fa-rotate-right fa-spin"}):i.jsx("i",{className:"fa-solid fa-rotate-right"}),children:o("Fetch all")+" "+j(m)})}),p=[{title:"#",dataIndex:"recent",key:"recent",render:(e,t,u)=>(t.recent||0)+1},{title:o({en:"Name",vi:"Tên"}),key:"name",dataIndex:"name",sorter:(e,t)=>e.name.localeCompare(t.name),render:(e,t,u)=>i.jsxs(v,{align:"middle",children:[i.jsx(I,{shape:"square",src:i.jsx(b,{src:t.avatar}),size:50}),i.jsx("a",{href:t.url,target:"_blank",style:{marginLeft:"10px"},children:i.jsx("b",{children:t.name})})]}),width:"auto"},{title:"Uid",dataIndex:"id",key:"id",sorter:(e,t)=>e.id.localeCompare(t.id),width:150},{title:o({en:"Joined time",vi:"Tham gia lúc"}),dataIndex:"joinedTime",key:"joinedTime",sorter:(e,t)=>e.joinedTime.localeCompare(t.joinedTime)},{title:o({en:"Last Active",vi:"Hoạt động gần nhất"}),dataIndex:"lastActiveTime",key:"lastActiveTime",sorter:(e,t)=>e.lastActiveTime.localeCompare(t.lastActiveTime)}];return i.jsx(T,{columns:p,data:l,keyExtractor:e=>e.id,searchable:!0,renderTitle:c})}export{K as default};