System.register(["./index-legacy-BLWNhdSi.js","./MyApp-legacy-DiY9AX-Q.js","./ProfileCard-legacy-D6pfOyfo.js","./dayjs.min-legacy-DIqhFihk.js","./MyTable-legacy-C-7sezLP.js","./index-legacy-9AwjkThE.js","./index-legacy-DvirHOdl.js","./index-legacy-BOGoQ4bd.js","./index-legacy-BVOMYDwd.js","./index-legacy-D9OQW21J.js","./index-legacy-DGVlN8u1.js","./index-legacy-DQN4Dy-v.js","./index-legacy-gXeC52Eh.js","./index-legacy-Bdb04PvB.js","./DownOutlined-legacy-BAU4mk5n.js","./TextArea-legacy-DGCZEH22.js","./Table-legacy-DjMToklK.js","./addEventListener-legacy-CMJdtc3g.js","./index-legacy-3lFC5AMA.js","./PurePanel-legacy-8YB54aau.js","./move-legacy-5rFa6L24.js","./SearchOutlined-legacy-CZSSKC5B.js","./index-legacy-BjnMCixR.js","./index-legacy-B4kOC7Ki.js","./Dropdown-legacy-BNhs1cvq.js","./useBreakpoint-legacy-BxnpLCFj.js","./responsiveObserver-legacy-DQl5_xPL.js","./Pagination-legacy-DbuttlxE.js","./row-legacy-7L_Xcd9K.js","./EyeOutlined-legacy-DELHaa1I.js","./index-legacy-C_r1TC2o.js"],(function(e,t){"use strict";var n,a,l,i,s,r,o,c,d,u,f,g,x,h,m,j,y,p,v,C,w,S,k,I,b,N,P,L;return{setters:[e=>{n=e.r,a=e.aM,l=e.b4,i=e.b5,s=e.aQ,r=e.b6,o=e.aL,c=e.b7},e=>{d=e.u,u=e.S,f=e.g,g=e.a,x=e.T,h=e.b,m=e.c,j=e.d,y=e.e,p=e.t},e=>{v=e.default},e=>{C=e.d},e=>{w=e.default},e=>{S=e.I},e=>{k=e.T},e=>{I=e.C},e=>{b=e.I},e=>{N=e.D},e=>{P=e.A},e=>{L=e.T},null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],execute:function(){e("default",(function(){return a.jsx(L,{items:[{label:"Please select",key:"select",children:a.jsx("div",{className:"text-center",children:"Please select"})},{label:"Add VIP",key:"add-vip",children:a.jsx(E,{})},{label:"Logs",key:"logs",children:a.jsx(T,{})}]})}));const t="fbaio-dev-pass";function E(){const{message:e}=d(),[c,y]=n.useState(""),[p,P]=n.useState(!1),[L,E]=n.useState(null),[T,D]=n.useState(""),[R,M]=n.useState(""),[V,Y]=n.useState(C().add(3,"day")),[A,O]=n.useState(""),[U,$]=n.useState(localStorage.getItem(t)||""),[F,H]=n.useState({}),[z,B]=n.useState(!1),[K,W]=n.useState([]),_=n.useRef(null);n.useEffect((()=>{localStorage.setItem(t,U)}),[U]),n.useEffect((()=>{localStorage.getItem(t)&&Q()}),[]);const G=n.useMemo((()=>{const e=K.filter((e=>e.name?.startsWith("referral from ")));return K.map((t=>({...t,profile:F[t.uid],referralCount:e.filter((e=>e.name=="referral from "+t.uid)).length})))}),[K,F]),q=async t=>{if(t){P(!0);try{const e=await m(t);if(!e)throw new Error("Cannot get UID from URL");const n=await j(e);if(!n)throw new Error("Cannot get profile from UID: "+e);E(n),D(e),M(n.name)}catch(n){e.error(n.message)}finally{P(!1)}}},Q=async()=>{const t="onPressLoad";e.loading({key:t,content:"Loading...",duration:0}),B(!0);try{const n=await fetch("https://useful-script-statistic.glitch.me/allVIP?password="+U),a=await n.json(),l=(new Date).getTime(),i=a.map(((e,t)=>{const n=parseInt(e?.[1]);return{index:t+1,uid:e?.[0],time:n,inVIP:n>l,name:e?.[2],referralCount:0}})).filter((e=>e.uid)).reverse();console.log(i),W(i),e.success({key:t,content:"Load success"})}catch(n){e.error({key:t,content:n.message})}finally{B(!1)}},J=[{title:"#",dataIndex:"index",key:"index",sorter:(e,t)=>e.index-t.index,width:80},{title:"User",dataIndex:"uid",key:"uid",render:(e,t,n)=>a.jsxs(u,{children:[a.jsx(S,{src:f(t.uid,50),width:50,height:50,preview:{src:f(t.uid)}}),a.jsxs(u,{size:0,direction:"vertical",children:[a.jsx(k.Link,{href:g(t.uid),target:"_blank",strong:!0,children:a.jsx("b",{children:t.name})}),t.profile&&a.jsxs(k.Text,{children:["(",t.profile.name,")"]}),a.jsx(k.Text,{type:"secondary",children:t.uid})]})]}),filters:[{text:`Người chia sẻ (${K.filter((e=>e.name?.includes("referral of"))).length})`,value:"referral of"},{text:`Người được chia sẻ (${K.filter((e=>e.name?.includes("referral from"))).length})`,value:"referral from"},{text:`review (${K.filter((e=>e.name?.includes("review"))).length})`,value:"review"}],onFilter:(e,t)=>l(e,t.name)},{title:"Expire time",dataIndex:"inVIP",key:"inVIP",render:(e,t,n)=>{const l=new Date(parseInt(t.time)),s=i(l);return a.jsxs(u,{direction:"vertical",children:[a.jsx(x,{color:t.inVIP?"success":"error",children:a.jsxs(k.Text,{children:[t.inVIP?"":"-",s]})}),a.jsx(k.Text,{type:"secondary",children:l.toLocaleString()})]})},filters:[{text:`✅ ${K.filter((e=>e.inVIP)).length}`,value:!0},{text:`❌ ${K.filter((e=>!e.inVIP)).length}`,value:!1}],onFilter:(e,t)=>t.inVIP===e,sorter:(e,t)=>e.time-t.time},{title:"Ref count",dataIndex:"referralCount",key:"referralCount",sorter:(e,t)=>e.referralCount-t.referralCount,width:100},{title:"Action",dataIndex:"action",key:"action",render:(t,n,l)=>a.jsxs(u.Compact,{children:[a.jsx(h,{title:"Update",children:a.jsx(s,{icon:a.jsx("i",{className:"fa-solid fa-pen"}),onClick:()=>(e=>{y(e.uid),q(e.uid),Y(C(Number(e.time)))})(n)})}),n.referralCount>0&&a.jsx(h,{title:"Show ref",children:a.jsx(s,{icon:a.jsx("i",{className:"fa-solid fa-users"}),onClick:()=>(e=>{_.current?.setSearch(e.uid)})(n)})}),!n.profile&&a.jsx(h,{title:"Reveal",children:a.jsx(s,{icon:a.jsx("i",{className:"fa-solid fa-eye"}),onClick:()=>(async t=>{const n="onPressReveal:"+t.uid;e.loading({key:n,content:"Revealing... "+t.name,duration:0});try{const a=await j(t.uid);if(!a)throw new Error("Cannot reveal: "+t.name);H((e=>({...e,[t.uid]:a}))),e.success({key:n,content:"Revealed: "+a.name})}catch(a){e.error({key:n,content:"Cannot reveal: "+t.name})}})(n)})})]})}],X=K.find((e=>e.uid==T));return a.jsxs("div",{children:[a.jsx("h1",{children:"Dev"}),a.jsxs("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"},children:[a.jsx(I,{style:{maxWidth:400},children:a.jsxs(u,{direction:"vertical",children:[a.jsx(b.Search,{value:c,onChange:e=>{const t=e.target.value;y(t),q(t)},onSearch:q,placeholder:"Enter FB URL",prefix:a.jsx("i",{className:"fa-brands fa-facebook"}),loading:p}),L&&a.jsx(v,{about:L,onClose:()=>{E(null)}}),a.jsx(b,{value:T,onChange:e=>D(e.target.value),placeholder:"UID",prefix:a.jsx("i",{className:"fa-solid fa-hashtag"}),allowClear:!0}),X&&a.jsx(k.Text,{type:"secondary",children:X.name}),a.jsx(b,{value:R,onChange:e=>M(e.target.value),placeholder:"NAME",prefix:a.jsx("i",{className:"fa-solid fa-user"}),allowClear:!0}),X&&a.jsxs(k.Text,{type:"secondary",children:[r(X.time)," (",X.time<V.toDate().getTime()?"ít hơn ":"nhiều hơn ",o(Math.abs(X.time-V.toDate().getTime())),")"]}),a.jsxs(u.Compact,{children:[a.jsx(N,{defaultValue:C(),format:"YYYY-MM-DD",value:V,onChange:Y,prefix:a.jsx("i",{className:"fa-regular fa-calendar"}),allowClear:!1}),[{value:3,label:"3d"},{value:7,label:"7d"},{value:30,label:"1m"},{value:365,label:"1y"}].map((({value:e,label:t})=>a.jsx(s,{onClick:()=>{Y(C().add(e,"day"))},children:t},e)))]}),a.jsxs(u.Compact,{children:[a.jsx(b,{value:A,onChange:e=>O(e.target.value),placeholder:"Reason",prefix:a.jsx("i",{className:"fa-solid fa-question"}),allowClear:!0}),["review","65k","3$"].map((e=>a.jsx(s,{onClick:()=>{O(e)},children:e},e)))]}),a.jsx(b.Password,{placeholder:"Password",onChange:e=>$(e.target.value),value:U,prefix:a.jsx("i",{className:"fa-solid fa-lock"}),allowClear:!0}),a.jsx(u,{style:{width:"100%",justifyContent:"flex-end"},children:a.jsx(s,{type:"primary",onClick:async()=>{const t="submit";e.loading({key:t,content:"Submitting...",duration:0});try{const n={uid:T,name:R+(A?` (${A})`:""),expireTime:V.toDate().getTime()+"",password:U},a=await fetch("https://useful-script-statistic.glitch.me/addVIP?"+new URLSearchParams(n)),l=await a.text();console.log(l),e.info({key:t,content:l})}catch(n){e.error({key:t,content:n.message})}},disabled:!R||!T||!U,children:"Submit"})})]})}),a.jsx("hr",{}),a.jsx(w,{ref:_,columns:J,data:G,searchable:!0,virtual:!0,pageSize:5,keyExtractor:(e,t)=>t,onSearchRow:(e,t)=>l(e,t?.name+t?.uid+t?.profile?.name),renderTitle:()=>a.jsx(s,{onClick:Q,disabled:!U,loading:z,icon:a.jsx("i",{className:"fa-solid fa-sync"}),children:"Reload"})})]})]})}function T(){const{message:e}=d(),[t,l]=y("Logs.time",C().format("YYYY-MM-DD")),[i,r]=y("Logs.allLogs."+t,[]),[o,h]=y("Logs.loading."+t,!1);n.useEffect((()=>{}),[]);const m=n.useMemo((()=>({version:c(i,"version"),eventName:c(i,"eventName"),uid:c(i,"uid")})),[i]),j=e=>{l(e.format("YYYY-MM-DD"))},v=[{title:"#",dataIndex:"i",key:"i",width:50},{title:"time",dataIndex:"timeString",key:"timeString",width:100},{title:m.version.length+" version",dataIndex:"version",key:"version",width:80,filters:m.version,onFilter:(e,t)=>t.version===e},{title:m.uid.length+" users",dataIndex:"uid",key:"uid",render:(e,t,n)=>a.jsxs(u,{children:[a.jsx(P,{shape:"square",src:f(t.uid,40),size:40}),a.jsx(k.Link,{href:g(t.uid),target:"_blank",children:t.uid})]}),width:200,filters:m.uid,onFilter:(e,t)=>t.uid===e},{title:m.eventName.length+" events",dataIndex:"eventName",key:"eventName",width:200,filters:m.eventName,onFilter:(e,t)=>t.eventName===e,filterSearch:!0,render:(e,t,n)=>e?.split(":").map(((e,t)=>a.jsxs(x,{color:["blue","green","red","orange"][t],children:[0==t?"":":",e]},t)))},{title:"isScript",dataIndex:"isScript",key:"isScript",render:(e,t,n)=>e?"✅":"❌",filters:[{text:"✅ "+i.filter((e=>e.isScript)).length,value:!0},{text:"❌ "+i.filter((e=>!e.isScript)).length,value:!1}],onFilter:(e,t)=>t.isScript===e,width:50},{title:"total",dataIndex:"totalCount",key:"totalCount",width:70}];return a.jsxs("div",{children:[a.jsx("h3",{children:"Logs"}),a.jsxs("p",{children:[i.length," logs"]}),a.jsx(w,{columns:v,data:i,virtual:!0,searchable:!0,renderTitle:()=>a.jsxs(u,{children:[a.jsx(s,{loading:o,onClick:()=>(async(n=!1)=>{if(!n&&i.length)return;const a="Logs:onReload:"+t;p(a),h(!0),e.loading({key:a,content:"Loading logs..."+t,duration:0});const l=await fetch("https://useful-script-statistic.glitch.me/log/"+t),s=(await l.text()).split("<br/>").filter((e=>e)).map((e=>e.trim()));if(console.log(s),!s.length)return console.log("no logs");"Log not found"!=s[0]&&s[0];const o=s.map(((e,t)=>{const n=R(e).replace(/\d+\/\d+\/\d+, /,""),a=n?.split(" ")[1];let l=parseInt(n?.split(":")[0])+("PM"==a?12:0);12==l&&"AM"==a&&(l=0);const i={i:t,log:e,uid:D(e),time:new Date(R(e)),timeString:n,hour:l,eventName:M(e),version:Y(e),totalCount:parseInt(V(e))||0,isScript:A(e),fbName:"",fbAvatar:"",logPretty:""},s=i.eventName.replace("("+i.version+")","").trim(),r=function(e,t,n=" "){return e+(t-e.length>0?n.repeat(t-e.length):"")}(i.version,4," ");return i.logPretty=r&&s?`${i.timeString} | ${r} | ${s} - ${i.totalCount}`:i.log,i}));r(o),h(!1),e.success({key:a,content:"Loaded "+o.length+" logs: "+t})})(!0),icon:a.jsx("i",{className:"fa-solid fa-rotate-right"}),children:"Reload"}),a.jsx(N,{defaultValue:C(),format:"YYYY-MM-DD",value:C(t),onChange:j,prefix:a.jsx("i",{className:"fa-regular fa-calendar"}),allowClear:!1})]})})]})}function D(e){return/-(\d+)\)/.exec(e)?.[1]||"?"}function R(e){return/\d{1,2}\/\d{1,2}\/\d{4}, \d{1,2}:\d{1,2}:\d{1,2} \w{2}/.exec(e)?.[0]||""}function M(e){return/: (.*?) \(/.exec(e)?.[1]||""}function V(e){return/ -> (\d+)/.exec(e)?.[1]||""}function Y(e){return/ \((.*?)-\d*\)/.exec(e)?.[1]||""}function A(e){return!(e.includes("INSTALLED")||e.includes("OPEN-")||e.includes("CLICK_")||e.includes("-INFO")||e.includes("-FAVORITE")||e.includes("-VIEW-SOURCE")||e.includes("CHECK-FOR-UPDATE")||e.includes("RESTORE")||e.includes("BACKUP")||e.includes("CHANGE-THEME")||e.includes("CHANGE-SMOOTH-SCROLL")||e.includes("getVIP"))}}}}));
