import{ah as n,ai as l,an as e}from"./index-C6IDuEAZ.js";import{P as s}from"./index-DaHCk8wU.js";import{u,S as j,T as y}from"./MyApp-nuvdhu8g.js";import{T}from"./index-CLLDGUjT.js";import{T as c}from"./index-BM1Lg5fy.js";import{A as v}from"./index-BayaDXF_.js";import"./TextArea--VwofgTr.js";import"./responsiveObserver-qTidF-LX.js";import"./useBreakpoint-B7PfgbsS.js";import"./index-jlYumDGg.js";const{Title:b,Text:P}=c;function A({showName:r=!0,showAvatar:m=!0,avatarSize:d=50,titleColor:h="white",textColor:x="#eee",style:p={}}){var i,o;const{ti:g}=u(),t=n(l.profile),f=n(l.sharedPostURL);return e.jsxs("div",{style:{...a.container,...p},children:[r&&e.jsxs(j,{children:[f?e.jsx(y,{title:g({en:"VIP User",vi:"VIP User"}),children:e.jsx(T,{icon:e.jsx("i",{className:"fa-solid fa-crown"}),color:"gold",children:e.jsxs(c.Text,{style:{fontWeight:"bold"},children:[" ","VIP"]})})}):null,e.jsxs("div",{style:a.info,children:[e.jsx("a",{href:"https:/fb.com/me",target:"_blank",children:e.jsx(b,{level:4,style:a.name(h),children:t==null?void 0:t.name})}),e.jsx(P,{style:a.id(x),children:t==null?void 0:t.uid})]})]}),m&&e.jsx("a",{href:(i=t==null?void 0:t.avatar)==null?void 0:i.link,target:"_blank",children:e.jsx(v,{src:(o=t==null?void 0:t.avatar)==null?void 0:o.uri,size:d})})]})}A.propTypes={showName:s.bool,showAvatar:s.bool,avatarSize:s.number,titleColor:s.string,textColor:s.string,style:s.object};const a={container:{display:"flex",alignItems:"center"},info:{display:"flex",flexDirection:"column",marginRight:"16px"},name:r=>({margin:0,textAlign:"right",color:r}),id:r=>({color:r,fontSize:"0.9em",textAlign:"right"})};export{A as default};