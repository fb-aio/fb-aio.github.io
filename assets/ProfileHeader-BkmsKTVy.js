import{ap as u,aq as f,av as e}from"./index-BZzsVo5e.js";import{P as s}from"./index-BrjroSlV.js";import{u as j,a as y,b as v,T}from"./MyApp-DyLC-RHb.js";import{T as b}from"./index-z-AJ050o.js";import{T as n}from"./index-CljnAMR0.js";import{A as P}from"./index-DnRFqO-f.js";import"./responsiveObserver-BtQ_ovyL.js";import"./useBreakpoint-CSe0XBg_.js";import"./index-CdUH9mDB.js";const{Title:w,Text:I}=n;function A({showName:i=!0,showAvatar:l=!0,avatarSize:c=50,titleColor:m="white",textColor:h="#eee",style:x={}}){var a,o;const{ti:d}=j(),t=u(f.profile),{isVIP:p,timeLeft:g}=y();return e.jsxs("div",{style:{...r.container,...x},children:[i&&e.jsxs(v,{children:[p?e.jsx(T,{title:d({en:"VIP User",vi:"Thành viên VIP"})+` (${g})`,children:e.jsx(b,{onClick:()=>window.location.hash="/vip",icon:e.jsx("i",{className:"fa-solid fa-crown"}),color:"gold",style:{cursor:"pointer"},children:e.jsxs(n.Text,{style:{fontWeight:"bold"},children:[" ","VIP"]})})}):null,e.jsxs("div",{style:r.info,children:[e.jsx("a",{href:"https:/fb.com/me",target:"_blank",children:e.jsx(w,{level:4,style:r.name(m),children:(t==null?void 0:t.name)||"..."})}),e.jsx(I,{style:r.id(h),children:(t==null?void 0:t.uid)||"..."})]})]}),l&&e.jsx("a",{href:(a=t==null?void 0:t.avatar)==null?void 0:a.link,target:"_blank",children:e.jsx(P,{src:(o=t==null?void 0:t.avatar)==null?void 0:o.uri,size:c})})]})}A.propTypes={showName:s.bool,showAvatar:s.bool,avatarSize:s.number,titleColor:s.string,textColor:s.string,style:s.object};const r={container:{display:"flex",alignItems:"center"},info:{display:"flex",flexDirection:"column",marginRight:"16px"},name:i=>({margin:0,textAlign:"right",color:i}),id:i=>({color:i,fontSize:"0.9em",textAlign:"right"})};export{A as default};
