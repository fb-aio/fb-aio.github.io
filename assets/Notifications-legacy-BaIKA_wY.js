System.register(["./index-legacy-QCyg4Nxx.js","./MyApp-legacy-UJ1kH3kU.js","./index-legacy-LJNrTGDE.js","./index-legacy-CQa49DlW.js","./index-legacy-DlBmfONe.js","./TextArea-legacy-DPrVGTQL.js","./Pagination-legacy-Bg2h6Tw-.js","./index-legacy-DZOTUaBr.js","./PurePanel-legacy-pgFjPk-6.js","./move-legacy-BPI4XG35.js","./DownOutlined-legacy-sMIeHOKh.js","./SearchOutlined-legacy-BuINNXK0.js","./row-legacy-DdRJwn49.js","./col-legacy-BFlZP_JA.js"],(function(e,l){"use strict";var i,s,t,n,a,c,r,o,d,g,h,u,x,j;return{setters:[e=>{i=e.aU,s=e.r,t=e.bi,n=e.aX,a=e.b0,c=e.bf,r=e.be},e=>{o=e.u,d=e.B,g=e.S,h=e.t},e=>{u=e.P},e=>{x=e.T},e=>{j=e.L},null,null,null,null,null,null,null,null,null],execute:function(){function l(e){switch(e){case"success":return n.jsx("i",{className:"fa-solid fa-circle-check fa-lg",style:{color:"lightgreen"}});case"info":return n.jsx("i",{className:"fa-solid fa-circle-info fa-lg",style:{color:"lightblue"}});case"warning":return n.jsx("i",{className:"fa-solid fa-circle-exclamation fa-lg",style:{color:"orange"}});case"error":return n.jsx("i",{className:"fa-solid fa-circle-xmark fa-lg",style:{color:"red"}});default:return null}}e("default",(function(){const{notifications:e,clear:y,remove:m}=o(),{ti:f}=i(),[p,v]=s.useState(!1),w=s.useMemo((()=>t(e)),[e]);return n.jsx(u,{trigger:"click",placement:"bottomRight",title:e?.length?null:f({en:"Notification",vi:"Thông báo"}),onOpenChange:e=>{v(e),e&&h("Notifications:open")},content:n.jsxs(n.Fragment,{children:[e?.length?n.jsxs(g,{align:"end",style:{width:"100%",justifyContent:"space-between",alignItems:"center",marginBottom:10},children:[n.jsx(x.Title,{level:5,style:{margin:0},children:e?.length+f({en:" Notifications",vi:" Thông báo"})}),n.jsx(a,{icon:n.jsx("i",{className:"fa-solid fa-eraser"}),onClick:y,children:f({en:"Clear",vi:"Xóa"})})]}):null,p?n.jsx("div",{style:{maxHeight:"70vh",overflowY:"auto",maxWidth:"85vw"},children:n.jsx(j,{dataSource:w,renderItem:(e,i)=>n.jsxs(g,{align:"start",style:{paddingTop:10,width:"100%"},size:5,className:"show-on-hover-trigger",children:[l(e.type),n.jsxs(g,{direction:"vertical",size:0,style:{minWidth:"11ch"},children:[n.jsx(x.Text,{children:r(e.time)}),c(e.time).split(" ").map((e=>n.jsx(x.Text,{type:"secondary",children:e},e)))]}),n.jsxs(g,{direction:"vertical",size:0,style:{maxWidth:400},children:[n.jsx(x.Text,{style:{fontWeight:"bold"},children:e.message}),e.description?.split("\n").map(((e,l)=>n.jsx(x.Text,{type:"secondary",children:e},i+"_"+l)))]}),n.jsx(a,{className:"show-on-hover-item",icon:n.jsx("i",{className:"fa-solid fa-xmark"}),onClick:()=>m(e.id),style:{position:"absolute",top:0,right:0}})]}),rowKey:e=>e.id,style:{maxWidth:500,minWidth:250}})}):null]}),children:n.jsx(d,{count:e?.length||0,overflowCount:9,style:{color:"white"},children:n.jsx(a,{icon:n.jsx("i",{className:"fa-solid fa-bell"})})})})}))}}}));
