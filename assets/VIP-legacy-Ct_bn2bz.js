System.register(["./index-legacy-BSR7-2Hx.js","./MyApp-legacy-CU4J-kDQ.js","./features-legacy-BRamIi4c.js","./index-legacy-2tbREo-L.js","./row-legacy-ZlUGC4XE.js","./index-legacy-mCfEz7hO.js","./Table-legacy-BVQxof99.js","./TextArea-legacy-CFxllzVY.js","./responsiveObserver-legacy-B8kFyTxV.js","./addEventListener-legacy-DkAlhZpz.js","./index-legacy-DO6s_TFv.js","./PurePanel-legacy-BaYx6kVo.js","./move-legacy-DjCDs3eh.js","./DownOutlined-legacy-B1jKyGQl.js","./SearchOutlined-legacy-o9_bOddy.js","./index-legacy-BJCOZjxH.js","./index-legacy-CVXH0Zk-.js","./Dropdown-legacy-npS3rwUq.js","./useBreakpoint-legacy-DzUyAhhe.js","./Pagination-legacy-DnVPYSfi.js","./index-legacy-CF5vHOxB.js","./EyeOutlined-legacy-Bf-2DdOS.js"],(function(e,l){"use strict";var s,n,i,a,t,c,r,o,d,j,g,y,x,u,h,f,m;return{setters:[e=>{s=e.aK,n=e.r,i=e.aM,a=e.aZ,t=e.aQ},e=>{c=e.i,r=e.t,o=e.S,d=e.B,j=e.T,g=e.b,y=e.k},e=>{x=e.f},e=>{u=e.T},e=>{h=e.R},e=>{f=e.A},e=>{m=e.F},null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],execute:function(){e("default",(function(){const{ti:e}=s(),{isVIP:l,expiredTime:w,timeLeft:p}=c();n.useEffect((()=>{r("VIP:onLoad")}),[]);const v=[{title:"#",dataIndex:"id",key:"id",width:50,render:(e,l,s)=>l.header?"":l.id},{title:e({en:"Features",vi:"Chức năng"}),dataIndex:"name",key:"name",render:(l,s,n)=>s.header?i.jsx(u.Title,{level:4,style:{marginTop:15,marginBottom:0},children:i.jsxs(a,{to:s.path,target:s.newTab?"_blank":"_self",children:[i.jsx("i",{className:s.icon})," ",e(l)]})}):i.jsxs(o,{direction:"vertical",size:0,style:{maxWidth:500},children:[i.jsxs(o,{children:[s.icon&&i.jsx("i",{className:s.icon,style:{opacity:.7}}),e(s.name),s.badge&&i.jsx(d,{color:s.badge.bg,count:e(s.badge.text),style:{color:s.badge.color}})]}),i.jsxs("div",{className:"vip-desc",children:[e(s.description),s?.path&&i.jsxs("b",{children:[i.jsx("br",{}),i.jsxs(a,{to:s.path,target:s.newTab?"_blank":"_self",children:[e({en:"Try",vi:"Thử ngay"})," ",i.jsx("i",{className:"fa-solid fa-arrow-right"})]})]})]})]})},{title:"Free",dataIndex:"requireVIP",key:"requireVIP",width:70,align:"center",render:(e,l,s)=>l.header?"":l.requireVIP?i.jsx(j,{color:"gold",children:i.jsx("i",{className:"fa-solid fa-crown"})}):i.jsx(j,{color:"success",children:i.jsx("i",{className:"fa-solid fa-check"})})}],I=i.jsxs(h,{justify:"end",style:{margin:"5px"},children:[l?i.jsx(f,{showIcon:!0,type:"success",message:i.jsxs(i.Fragment,{children:[e({en:"VIP Unlocked",vi:"Thành viên VIP"})+" ",i.jsxs(g,{title:e({en:"Until ",vi:"Tới "})+new Date(w).toLocaleString(),children:["(",p,")"]})]})}):w?i.jsx(f,{showIcon:!0,type:"info",message:e({en:"Expired at",vi:"Hết hạn lúc"})+" "+new Date(w).toLocaleString()}):null,i.jsx(d,{count:e({en:"New",vi:"Mới"}),style:{color:"white"},color:"purple",children:i.jsx(t,{size:"large",icon:i.jsx("i",{className:"fa-solid fa-crown",style:{color:"gold"}}),onClick:()=>y(!0),style:{marginLeft:10},children:e(l?{en:"Renew VIP",vi:"Gia hạn VIP"}:{en:"Unlock VIP",vi:"Mở khoá VIP"})})})]});return i.jsxs(o,{direction:"vertical",style:{width:"100%"},align:"center",children:[i.jsxs("h1",{children:["VIP ",i.jsx("i",{className:"fa-solid fa-crown",style:{color:"gold"}})]}),I,i.jsx(m,{sticky:{offsetHeader:0},fixedHeader:!0,size:"middle",tableLayout:"auto",dataSource:x,columns:v,pagination:!1,style:{minWidth:500,width:"min(100vw, 700px)"},rowKey:e=>e.id,footer:()=>I})]})}))}}}));
