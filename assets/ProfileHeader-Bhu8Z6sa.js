import{aJ as j,aL as s,au as f,aN as i}from"./index-Qt1L9Xiw.js";import{f as v,h as p,S as r,b as y,T}from"./MyApp-DDUulQzX.js";import{u as I}from"./useDevMode-CEstLp7f.js";import{T as a}from"./index-CvQxKMxN.js";import{A as P}from"./index-DsVSzw3J.js";import"./useBreakpoint-CFVo6cTb.js";import"./index-D6Ke4d8X.js";const{Title:b,Text:D}=a;function M({showName:n=!0,showAvatar:o=!0,avatarSize:l=50,titleColor:c="white",textColor:d="#eee",style:h={}}){const{profile:e}=v(),{devMode:t,setDevMode:m}=I(),{ti:x}=j(),{isVIP:u,timeLeft:g}=p();return s.jsxs("div",{style:{display:"flex",alignItems:"center",...h},children:[n&&s.jsxs(r,{children:[u?s.jsx(y,{title:x({en:"VIP User",vi:"Thành viên VIP"})+` (${g})`,children:s.jsx(T,{onClick:()=>window.location.hash="/vip",icon:s.jsx("i",{className:"fa-solid fa-crown"}),color:"gold",style:{cursor:"pointer"},children:s.jsxs(a.Text,{style:{fontWeight:"bold"},children:[" ","VIP"]})})}):null,(e==null?void 0:e.uid)===f.me.uid&&s.jsxs(r.Compact,{children:[s.jsxs(i,{type:t?"primary":"default",onClick:()=>m(!t),children:[t?"✅":"❌"," Dev mode"]}),s.jsx(i,{href:"#/dev",children:"DevScreen"})]}),s.jsxs("div",{style:{display:"flex",flexDirection:"column",marginRight:"16px"},children:[s.jsx("a",{href:"https:/fb.com/me",target:"_blank",children:s.jsx(b,{level:4,style:{margin:0,textAlign:"right",color:c},children:(e==null?void 0:e.name)||"..."})}),s.jsx(D,{style:{color:d,fontSize:"0.9em",textAlign:"right"},children:(e==null?void 0:e.uid)||"..."})]})]}),o&&s.jsx("a",{href:e==null?void 0:e.url,target:"_blank",children:s.jsx(P,{src:e==null?void 0:e.avatar,size:l})})]})}export{M as default};