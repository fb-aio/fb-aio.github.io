import{r as f,ap as e,as as o}from"./index-CbxyLh1i.js";import{c as p,u as x,r as u,t as j,b as a,B as y,f as N}from"./MyApp-Sn1_uDoa.js";import{P as v}from"./index-C60-ymOx.js";import{L as T}from"./index-B1ah6CTo.js";import{T as l}from"./index-Ce2uPXMA.js";import"./Pagination-juAnr4uF.js";import"./useBreakpoint-BbqyQBFm.js";import"./responsiveObserver-CGHRY4l1.js";import"./index-BVuv5qFT.js";import"./PurePanel-DG3EGm-S.js";import"./row-dVMcO0Mb.js";function b(t){switch(t){case"success":return e.jsx("i",{className:"fa-solid fa-circle-check fa-lg",style:{color:"lightgreen"}});case"info":return e.jsx("i",{className:"fa-solid fa-circle-info fa-lg",style:{color:"lightblue"}});case"warning":return e.jsx("i",{className:"fa-solid fa-circle-exclamation fa-lg",style:{color:"orange"}});case"error":return e.jsx("i",{className:"fa-solid fa-circle-xmark fa-lg",style:{color:"red"}});default:return null}}function S(){const{notifications:t,clearNotifications:n}=p(),{ti:r}=x(),c=f.useMemo(()=>u(t),[t]),m=(s,d)=>{var i;return e.jsxs(a,{align:"start",style:{paddingTop:10,paddingRight:10},children:[b(s.type),N(s.time),e.jsxs(a,{direction:"vertical",size:0,style:{maxWidth:400},children:[e.jsx(l.Text,{style:{fontWeight:"bold"},children:s.message}),(i=s.description)==null?void 0:i.split(`
`).map((g,h)=>e.jsx(l.Text,{type:"secondary",children:g},d+"_"+h))]})]})};return e.jsx(v,{trigger:"click",placement:"bottomRight",title:t!=null&&t.length?null:r({en:"Notification History",vi:"Lich sử Thông báo"}),onOpenChange:s=>s&&j("Notifications:open"),content:e.jsxs(e.Fragment,{children:[t!=null&&t.length?e.jsxs(a,{align:"end",style:{width:"100%",justifyContent:"space-between",alignItems:"center",marginBottom:10},children:[e.jsx("h3",{style:{margin:0},children:(t==null?void 0:t.length)+r({en:" Notifications",vi:" Thông báo"})}),e.jsx(o,{icon:e.jsx("i",{className:"fa-solid fa-eraser"}),onClick:n,children:r({en:"Clear",vi:"Xóa"})})]}):null,e.jsx("div",{style:{maxHeight:"70vh",overflowY:"auto"},children:e.jsx(T,{dataSource:c,renderItem:m,rowKey:s=>s.id,style:{maxWidth:500,minWidth:250}})})]}),children:e.jsx(y,{count:(t==null?void 0:t.length)||0,overflowCount:9,style:{color:"white"},children:e.jsx(o,{icon:e.jsx("i",{className:"fa-solid fa-bell"})})})})}export{S as default};
