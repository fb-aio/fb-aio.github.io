System.register(["./index-legacy-Lkr9bBsN.js","./MyApp-legacy-_4SztRAr.js","./useDevMode-legacy-8YehicSf.js","./index-legacy-Bu_mtucN.js","./index-legacy-DjhGpQRX.js","./responsiveObserver-legacy-BxgPoWeZ.js","./useBreakpoint-legacy-mYTCzhGF.js","./index-legacy-B87C0cwg.js"],(function(e,s){"use strict";var l,i,t,r,n,a,o,c,d,h,x,g;return{setters:[e=>{l=e.aJ,i=e.aL,t=e.au,r=e.aP},e=>{n=e.h,a=e.i,o=e.S,c=e.b,d=e.T},e=>{h=e.u},e=>{x=e.T},e=>{g=e.A},null,null,null],execute:function(){e("default",(function({showName:e=!0,showAvatar:u=!0,avatarSize:y=50,titleColor:v="white",textColor:m="#eee",style:f={}}){const{profile:p}=n(),{devMode:w,setDevMode:T}=h(),{ti:b}=l(),{isVIP:S,timeLeft:k}=a();return i.jsxs("div",{style:{display:"flex",alignItems:"center",...f},children:[e&&i.jsxs(o,{className:"show-on-hover-trigger",children:[S?i.jsx(c,{title:b({en:"VIP User",vi:"Thành viên VIP"})+` (${k})`,children:i.jsx(d,{onClick:()=>window.location.hash="/vip",icon:i.jsx("i",{className:"fa-solid fa-crown"}),color:"gold",style:{cursor:"pointer"},children:i.jsxs(x.Text,{style:{fontWeight:"bold"},children:[" ","VIP"]})})}):null,p?.uid===t.me.uid&&i.jsxs(o.Compact,{className:"show-on-hover-item",children:[i.jsxs(r,{type:w?"primary":"default",onClick:()=>T(!w),children:[w?"✅":"❌"," Dev mode"]}),i.jsx(r,{href:"#/dev",children:"DevScreen"})]}),i.jsxs("div",{style:{display:"flex",flexDirection:"column",marginRight:"16px"},children:[i.jsx("a",{href:"https:/fb.com/me",target:"_blank",children:i.jsx(s,{level:4,style:{margin:0,textAlign:"right",color:v},children:p?.name||"..."})}),i.jsx(j,{style:{color:m,fontSize:"0.9em",textAlign:"right"},children:p?.uid||"..."})]})]}),u&&i.jsx("a",{href:p?.url,target:"_blank",children:i.jsx(g,{src:p?.avatar,size:y})})]})}));const{Title:s,Text:j}=x}}}));
