import{r as o,ao as i,ap as x}from"./index-Zrrdisla.js";import{u as f}from"./useForceStop-BKQ1-pfn.js";import{a as h,d as j}from"./MyApp-D9TAjLoC.js";import y from"./MyTable-DMZ1EBgM.js";import{b as T}from"./groups-C7aG-xbC.js";import{R as b}from"./row-xjqZhALu.js";import{A as v}from"./index-aNpG7M6c.js";import{I as A}from"./index-BiIvNcz0.js";import{A as C}from"./index-DJ0Yr173.js";import"./index-BXf3pS2U.js";import"./addEventListener-DISMr04p.js";import"./index-BGDcwphm.js";import"./PurePanel-BmCtnOqR.js";import"./index-D5-jU2qd.js";import"./index-CPrUkSCR.js";import"./index-0BLLAH_o.js";import"./Dropdown-BOllNBFL.js";import"./index-BEdxZxyc.js";import"./useBreakpoint-BEX5V2Ey.js";import"./responsiveObserver-CNtTcc81.js";import"./Pagination-B81k76Ib.js";import"./index-CaDWwLSZ.js";import"./index-B2ssnbc6.js";function Q({target:a}){const{ti:s}=h();f();const[n,I]=o.useState(!1),[r,d]=o.useState(null),[m,k]=o.useState([]),l=o.useMemo(()=>m.map((e,t)=>({...e,recent:t})),[m]);o.useEffect(()=>{!(a!=null&&a.id)||!(a!=null&&a.type)||T(a==null?void 0:a.id).then(e=>{d(e)})},[a]);const p=e=>i.jsxs(i.Fragment,{children:[i.jsx(x,{type:"primary",icon:n?i.jsx("i",{className:"fa-solid fa-rotate-right fa-spin"}):i.jsx("i",{className:"fa-solid fa-rotate-right"}),disabled:!0,children:s("Fetch all")}),i.jsx(C,{showIcon:!0,type:"info",message:`${r==null?void 0:r.adminCount} admins. ${j(r==null?void 0:r.memberCount)} members`})]}),c=[{title:"#",dataIndex:"recent",key:"recent",render:(e,t,u)=>(t.recent||0)+1},{title:s({en:"Name",vi:"Tên"}),key:"name",dataIndex:"name",sorter:(e,t)=>e.name.localeCompare(t.name),render:(e,t,u)=>i.jsxs(b,{align:"middle",children:[i.jsx(v,{shape:"square",src:i.jsx(A,{src:t.avatar}),size:50}),i.jsx("a",{href:t.url,target:"_blank",style:{marginLeft:"10px"},children:i.jsx("b",{children:t.name})})]}),width:"auto"},{title:"Uid",dataIndex:"id",key:"id",sorter:(e,t)=>e.id.localeCompare(t.id),width:150},{title:s({en:"Joined time",vi:"Tham gia lúc"}),dataIndex:"joinedTime",key:"joinedTime",sorter:(e,t)=>e.joinedTime.localeCompare(t.joinedTime)},{title:s({en:"Last Active",vi:"Hoạt động gần nhất"}),dataIndex:"lastActiveTime",key:"lastActiveTime",sorter:(e,t)=>e.lastActiveTime.localeCompare(t.lastActiveTime)}];return i.jsx(y,{columns:c,data:l,keyExtractor:e=>e.id,searchable:!0,renderTitle:p})}export{Q as default};
