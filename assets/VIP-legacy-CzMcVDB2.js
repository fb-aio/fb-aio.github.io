System.register(["./index-legacy-CUf9GEiQ.js","./MyApp-legacy-DzZ8DJEP.js","./features-legacy-B9yIzHaC.js","./Screen-legacy-DU_ZVNL7.js","./index-legacy-eHUVFeHV.js","./index-legacy-2Oc9KNKz.js","./Table-legacy-C-dM4lFB.js","./row-legacy-BJHkRmlN.js","./col-legacy-CFFrFecH.js","./List-legacy-BJoksGr3.js","./DownOutlined-legacy-C1DxZs9p.js","./index-legacy-h9PzK66P.js","./index-legacy-b7sfKJ15.js","./index-legacy-CNB-xoa5.js","./index-legacy-DkaHwaip.js","./PurePanel-legacy-BFsuPAfr.js","./move-legacy-BBl-EJ70.js","./index-legacy-DKc7N-1B.js","./useBreakpoint-legacy-C4YaIAry.js","./useForceUpdate-legacy-DZvkDfPa.js","./responsiveObserver-legacy-DrqhU4kT.js","./Pagination-legacy-B2aW7wzz.js"],(function(e,l){"use strict";var n,s,a,i,t,c,r,o,d,j,g,u,x,y,h,m,f,p,b,v,w,I;return{setters:[e=>{n=e.b6,s=e.r,a=e.bp,i=e.b8,t=e.bi,c=e.am},e=>{r=e.b,o=e.t,d=e.d,j=e.C,g=e.S,u=e.B,x=e.c,y=e.T,h=e.m,m=e.I},e=>{f=e.f},e=>{p=e.S},e=>{b=e.u},e=>{v=e.A},e=>{w=e.F},e=>{I=e.R},null,null,null,null,null,null,null,null,null,null,null,null,null,null],execute:function(){e("default",(function(){const{ti:e}=n(),{isVIP:l,expiredTime:P,timeLeft:k}=r(),[T,V]=s.useState(""),S=b(V,500);s.useEffect((()=>{o("VIP:onLoad")}),[]);const N=s.useMemo((()=>T?.trim()?f.filter((e=>a(T,e.name.vi+" "+e.name.en+" "+e.description?.vi+" "+e.description?.en))):f),[T]),F=[{title:"#",dataIndex:"id",key:"id",width:40,render:(e,l,n)=>l.header?"":l.id},{title:e({en:"Features",vi:"Chức năng"}),dataIndex:"name",key:"name",render:(l,n,s)=>n.header?i.jsx(d.Title,{level:4,style:{marginTop:15,marginBottom:0},children:i.jsxs(t,{to:n.path,target:n.newTab?"_blank":"_self",children:[i.jsx("i",{className:n.icon})," ",e(l)]})}):i.jsx(j,{style:{maxWidth:500,flex:1},bordered:!1,expandIcon:()=>"",items:[{key:n.name?.vi,label:i.jsxs(g,{children:[n.icon&&i.jsx("i",{className:n.icon,style:{opacity:.7}}),e(n.name),n.badge&&i.jsx(u,{color:n.badge.bg,count:e(n.badge.text),style:{color:n.badge.color}})]}),children:i.jsxs("div",{children:[e(n.description),i.jsx("br",{}),n?.path&&i.jsxs("b",{children:[" ",i.jsxs(t,{to:n.path,target:n.newTab?"_blank":"_self",children:[e({en:"Try",vi:"Thử ngay"})," ",i.jsx("i",{className:"fa-solid fa-arrow-right"})]})]})]})}]})},{title:"Free",dataIndex:"requireVIP",key:"requireVIP",align:"center",render:(e,l,n)=>l.header?"":l.requireVIP?i.jsx(x,{color:"gold",children:i.jsx("i",{className:"fa-solid fa-crown"})}):i.jsx(x,{color:"success",children:i.jsx("i",{className:"fa-solid fa-check"})})}],L=i.jsxs(g,{wrap:!0,style:{margin:8,justifyContent:"center",width:"100%"},align:"center",size:8,children:[l?i.jsx(v,{showIcon:!0,type:"success",message:i.jsxs(i.Fragment,{children:[e({en:"VIP Unlocked",vi:"Thành viên VIP"})+" ",i.jsxs(y,{title:e({en:"Until ",vi:"Tới "})+new Date(P).toLocaleString(),children:["(",i.jsx("i",{children:k}),")"]})]})}):P?i.jsx(v,{showIcon:!0,type:"info",message:e({en:"Expired at",vi:"Hết hạn lúc"})+" "+new Date(P).toLocaleString()}):null,i.jsx(u,{count:e({en:"New",vi:"Mới"}),style:{color:"white"},color:"purple",children:i.jsx(c,{size:"large",icon:i.jsx("i",{className:"fa-solid fa-crown",style:{color:"gold"}}),onClick:()=>h(!0),children:e(l?{en:"Renew VIP",vi:"Gia hạn VIP"}:{en:"Unlock VIP",vi:"Mở khoá VIP"})})})]});return i.jsxs(p,{title:i.jsxs(i.Fragment,{children:["VIP ",i.jsx("i",{className:"fa-solid fa-crown",style:{color:"gold"}})]}),mode:"center",children:[L,i.jsx(w,{sticky:{offsetHeader:0},fixedHeader:!0,size:"small",tableLayout:"auto",dataSource:N,columns:F,pagination:!1,style:{width:600},rowKey:e=>e.id,footer:()=>L,title:()=>i.jsx(I,{justify:"end",children:i.jsx(m.Search,{placeholder:e({en:"Search feature",vi:"Tìm kiếm chức năng"}),onChange:e=>S(e.target.value)})})})]})}))}}}));
