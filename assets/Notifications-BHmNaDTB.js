import{aU as j,r as c,bh as y,aW as e,a_ as l,bd as v,be as N}from"./index-By6QH6pK.js";import{u as w,t as T,S as a,B as b}from"./MyApp-DRoqPp25.js";import{P as k}from"./index-IKXs4A2f.js";import{T as r}from"./index-CZ4BF0Pd.js";import{L as W}from"./index-C1fuNhzh.js";import"./TextArea-T9XEKIMP.js";import"./Pagination-CUQMFLRJ.js";import"./useBreakpoint-CY6WpSuv.js";import"./useForceUpdate-DhKOmaG8.js";import"./index-DyiPSS8A.js";import"./List-DCI1BWKP.js";import"./PurePanel-CgxAjXTW.js";import"./move-BtkX6lmQ.js";import"./DownOutlined-CBD21Oi3.js";import"./SearchOutlined-DCUa4zAG.js";import"./row-BB41V0du.js";import"./col-CJrWNI4G.js";function C(s){switch(s){case"success":return e.jsx("i",{className:"fa-solid fa-circle-check fa-lg",style:{color:"lightgreen"}});case"info":return e.jsx("i",{className:"fa-solid fa-circle-info fa-lg",style:{color:"lightblue"}});case"warning":return e.jsx("i",{className:"fa-solid fa-circle-exclamation fa-lg",style:{color:"orange"}});case"error":return e.jsx("i",{className:"fa-solid fa-circle-xmark fa-lg",style:{color:"red"}});default:return null}}function _(){const{notifications:s,clear:m,remove:d}=w(),{ti:o}=j(),[h,p]=c.useState(!1),x=c.useMemo(()=>y(s),[s]),g=(t,f)=>{var n;return e.jsxs(a,{align:"start",style:{paddingTop:10,width:"100%"},size:5,className:"show-on-hover-trigger",children:[C(t.type),e.jsxs(a,{direction:"vertical",size:0,style:{minWidth:"11ch"},children:[e.jsx(r.Text,{children:v(t.time)}),N(t.time).split(" ").map(i=>e.jsx(r.Text,{type:"secondary",children:i},i))]}),e.jsxs(a,{direction:"vertical",size:0,style:{maxWidth:400},children:[e.jsx(r.Text,{style:{fontWeight:"bold"},children:t.message}),(n=t.description)==null?void 0:n.split("\n").map((i,u)=>e.jsx(r.Text,{type:"secondary",children:i},f+"_"+u))]}),e.jsx(l,{className:"show-on-hover-item",icon:e.jsx("i",{className:"fa-solid fa-xmark"}),onClick:()=>d(t.id),style:{position:"absolute",top:0,right:0}})]})};return e.jsx(k,{trigger:"click",placement:"bottomRight",title:s!=null&&s.length?null:o({en:"Notification",vi:"Thông báo"}),onOpenChange:t=>{p(t),t&&T("Notifications:open")},content:e.jsxs(e.Fragment,{children:[s!=null&&s.length?e.jsxs(a,{align:"end",style:{width:"100%",justifyContent:"space-between",alignItems:"center",marginBottom:10},children:[e.jsx(r.Title,{level:5,style:{margin:0},children:(s==null?void 0:s.length)+o({en:" Notifications",vi:" Thông báo"})}),e.jsx(l,{icon:e.jsx("i",{className:"fa-solid fa-eraser"}),onClick:m,children:o({en:"Clear",vi:"Xóa"})})]}):null,h?e.jsx("div",{style:{maxHeight:"70vh",overflowY:"auto",maxWidth:"85vw"},children:e.jsx(W,{dataSource:x,renderItem:g,rowKey:t=>t.id,style:{maxWidth:500,minWidth:250}})}):null]}),children:e.jsx(b,{count:(s==null?void 0:s.length)||0,overflowCount:9,style:{color:"white"},children:e.jsx(l,{icon:e.jsx("i",{className:"fa-solid fa-bell"})})})})}export{_ as default};
