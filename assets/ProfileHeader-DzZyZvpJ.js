import{ax as a,ay as i,aK as y,aM as t,au as f,aO as p}from"./index-DNwEsvzZ.js";import{f as T,S as I,b as P,T as b}from"./MyApp-Cu7o1wa3.js";import{T as o}from"./index-NnOW43qm.js";import{A as k}from"./index-Ce2gFztj.js";import"./useBreakpoint-CaaT5OFW.js";import"./index-YmiFF2u5.js";const{Title:M,Text:S}=o;function C({showName:l=!0,showAvatar:c=!0,avatarSize:d=50,titleColor:x="white",textColor:h="#eee",style:m={}}){var r,n;const e=a(i.profile),s=a(i.devMode),u=a(i.setDevMode),{ti:g}=y(),{isVIP:j,timeLeft:v}=T();return t.jsxs("div",{style:{display:"flex",alignItems:"center",...m},children:[l&&t.jsxs(I,{children:[j?t.jsx(P,{title:g({en:"VIP User",vi:"Thành viên VIP"})+` (${v})`,children:t.jsx(b,{onClick:()=>window.location.hash="/vip",icon:t.jsx("i",{className:"fa-solid fa-crown"}),color:"gold",style:{cursor:"pointer"},children:t.jsxs(o.Text,{style:{fontWeight:"bold"},children:[" ","VIP"]})})}):null,(e==null?void 0:e.uid)===f.me.uid&&t.jsxs(p,{type:s?"primary":"default",onClick:()=>u(!s),children:[s?"✅":"❌"," Dev mode"]}),t.jsxs("div",{style:{display:"flex",flexDirection:"column",marginRight:"16px"},children:[t.jsx("a",{href:"https:/fb.com/me",target:"_blank",children:t.jsx(M,{level:4,style:{margin:0,textAlign:"right",color:x},children:(e==null?void 0:e.name)||"..."})}),t.jsx(S,{style:{color:h,fontSize:"0.9em",textAlign:"right"},children:(e==null?void 0:e.uid)||"..."})]})]}),c&&t.jsx("a",{href:(r=e==null?void 0:e.avatar)==null?void 0:r.link,target:"_blank",children:t.jsx(k,{src:(n=e==null?void 0:e.avatar)==null?void 0:n.uri,size:d})})]})}export{C as default};
