import{au as u,av as f,aA as t}from"./index-COYbw2nA.js";import{P as s}from"./index-Bn6UJ9zm.js";import{u as j,a as y,b as v,T,c as b}from"./MyApp-BqOFGx1Y.js";import{T as n}from"./index-C2DU9lVT.js";import{A as P}from"./index-Dype70px.js";import"./responsiveObserver-BI3UFpZ1.js";import"./useBreakpoint-DVIPjZl0.js";import"./index-BuHq4CJC.js";const{Title:w,Text:A}=n;function I({showName:i=!0,showAvatar:l=!0,avatarSize:c=50,titleColor:m="white",textColor:h="#eee",style:x={}}){var a,o;const{ti:d}=j(),e=u(f.profile),{isVIP:p,timeLeft:g}=y();return t.jsxs("div",{style:{...r.container,...x},children:[i&&t.jsxs(v,{children:[p?t.jsx(T,{title:d({en:"VIP User",vi:"Thành viên VIP"})+` (${g})`,children:t.jsx(b,{onClick:()=>window.location.hash="/vip",icon:t.jsx("i",{className:"fa-solid fa-crown"}),color:"gold",style:{cursor:"pointer"},children:t.jsxs(n.Text,{style:{fontWeight:"bold"},children:[" ","VIP"]})})}):null,t.jsxs("div",{style:r.info,children:[t.jsx("a",{href:"https:/fb.com/me",target:"_blank",children:t.jsx(w,{level:4,style:r.name(m),children:(e==null?void 0:e.name)||"..."})}),t.jsx(A,{style:r.id(h),children:(e==null?void 0:e.uid)||"..."})]})]}),l&&t.jsx("a",{href:(a=e==null?void 0:e.avatar)==null?void 0:a.link,target:"_blank",children:t.jsx(P,{src:(o=e==null?void 0:e.avatar)==null?void 0:o.uri,size:c})})]})}I.propTypes={showName:s.bool,showAvatar:s.bool,avatarSize:s.number,titleColor:s.string,textColor:s.string,style:s.object};const r={container:{display:"flex",alignItems:"center"},info:{display:"flex",flexDirection:"column",marginRight:"16px"},name:i=>({margin:0,textAlign:"right",color:i}),id:i=>({color:i,fontSize:"0.9em",textAlign:"right"})};export{I as default};