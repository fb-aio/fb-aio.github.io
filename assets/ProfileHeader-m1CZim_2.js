import{b4 as p,b6 as t,aS as b,ba as o}from"./index-BxqI5Gd0.js";import{a as w,b as I,S as r,T,c as C,d as l,e as a,f as D}from"./MyApp-ByiHX0qM.js";import{u as P}from"./useDevMode-KRwV7uqY.js";import{A as S}from"./index-CPPLlTBl.js";import"./responsiveObserver-DCjkyyMm.js";import"./useBreakpoint-B-6M2pGc.js";import"./useForceUpdate-32QtfefY.js";import"./index-CuvpyvNf.js";const{Title:k,Text:B}=l;function R({showName:c=!0,showAvatar:d=!0,avatarSize:m=50,titleColor:h="white",textColor:u="#eee",style:x={},compact:n=!1}){const{profile:e}=w(),{devMode:s,setDevMode:g}=P(),{ti:i}=p(),{isVIP:v,timeLeft:f}=I(),j=()=>t.jsxs("div",{style:{display:"flex",flexDirection:"column",marginRight:16},children:[t.jsx("a",{href:"https://fb.com/me",target:"_blank",children:t.jsx(k,{level:4,style:{margin:0,textAlign:"right",color:h},children:(e==null?void 0:e.name)||"..."})}),t.jsx(B,{style:{color:u,fontSize:"0.9em",textAlign:"right"},children:(e==null?void 0:e.uid)||"..."})]});return e?t.jsxs("div",{style:{display:"flex",alignItems:"center",...x},children:[c&&t.jsxs(r,{children:[(e==null?void 0:e.uid)===b.me.uid&&t.jsx("div",{className:"show-on-hover-trigger",style:{position:"relative"},children:t.jsxs(r.Compact,{className:"show-on-hover-item",style:{position:"absolute",top:0,right:0,transform:"translate(0, -50%)"},children:[t.jsxs(o,{type:s?"primary":"default",onClick:()=>g(!s),children:[s?"✅":"❌"," Dev mode"]}),t.jsx(o,{href:"#/dev",children:"DevScreen"})]})}),v?t.jsx(T,{title:i({en:"VIP User",vi:"Thành viên VIP"})+" (".concat(f,")"),children:t.jsx(C,{onClick:()=>window.location.hash="/vip",icon:t.jsx("i",{className:"fa-solid fa-crown"}),color:"gold",style:{cursor:"pointer"},children:t.jsxs(l.Text,{style:{fontWeight:"bold"},children:[" ","VIP"]})})}):null,!n&&j()]}),d&&t.jsx(S,{src:e==null?void 0:e.avatar,size:m,onClick:()=>{e!=null&&e.uid?n?a.fire({icon:"info",title:e==null?void 0:e.name,text:"UID: "+(e==null?void 0:e.uid),confirmButtonText:"Copy UID",cancelButtonText:i({en:"Close",vi:"Đóng"}),showCancelButton:!0,reverseButtons:!0}).then(y=>{y.isConfirmed&&D(e==null?void 0:e.uid)}):window.open("https://fb.com/me","_blank"):a.fire("Error","UID not found","error")}})]}):null}export{R as default};
