import{r as d,aL as a,b1 as K,b2 as ne,aN as y,b3 as ie,aK as re}from"./index-Qt1L9Xiw.js";import{u as z,S as v,g as W,a as G,T as J,b as $,c as le,d as B,t as oe}from"./MyApp-DDUulQzX.js";import ce from"./ProfileCard-BkbHKKYM.js";import{d as A}from"./dayjs.min-175OGVnZ.js";import{M as Q}from"./MyTable-alF7GqRm.js";import{I as de}from"./index-BAuHam2U.js";import{T as C}from"./index-CvQxKMxN.js";import{C as ue}from"./index-CR8ECuFM.js";import{I as E}from"./index-DAgc2Yal.js";import{D as fe}from"./index-DBSiF8US.js";import{A as me}from"./index-DsVSzw3J.js";import{T as xe}from"./index-Bq3zKlKM.js";import"./index-BX4ZrkmU.js";import"./index-DUm_PftZ.js";import"./PurePanel-D4j__ZHX.js";import"./SearchOutlined-BQt8S8Mq.js";import"./Table-BiGUy7AL.js";import"./addEventListener-Dg4je8GP.js";import"./index-BHhG_OlO.js";import"./index-DxPDOh9c.js";import"./Dropdown-CiaV_8Ew.js";import"./useBreakpoint-CFVo6cTb.js";import"./Pagination-CHVwkn-q.js";import"./row-BPLkYSTc.js";import"./EyeOutlined-vPM2QFd6.js";import"./index-D6Ke4d8X.js";const O="fbaio-dev-pass";function he(){const{message:s}=z(),[n,S]=d.useState(""),[F,k]=d.useState(!1),[N,I]=d.useState(null),[m,L]=d.useState(""),[w,i]=d.useState(""),[r,j]=d.useState(A().add(3,"day")),[c,u]=d.useState(""),[h,f]=d.useState(localStorage.getItem(O)||""),[R,p]=d.useState({}),[D,P]=d.useState(!1),[o,U]=d.useState([]),T=d.useRef(null);d.useEffect(()=>{localStorage.setItem(O,h)},[h]),d.useEffect(()=>{localStorage.getItem(O)&&q()},[]);const X=d.useMemo(()=>{const t=o.filter(e=>{var l;return(l=e.name)==null?void 0:l.startsWith("referral from ")});return o.map(e=>({...e,profile:R[e.uid],referralCount:t.filter(l=>l.name=="referral from "+e.uid).length}))},[o,R]),M=async t=>{if(t){k(!0);try{const e=await le(t);if(!e)throw new Error("Cannot get UID from URL");const l=await B(e);if(!l)throw new Error("Cannot get profile from UID: "+e);I(l),L(e),i(l.name)}catch(e){s.error(e.message)}finally{k(!1)}}},Z=async()=>{const t="submit";s.loading({key:t,content:"Submitting...",duration:0});try{const e={uid:m,name:w+(c?` (${c})`:""),expireTime:r.toDate().getTime()+"",password:h},g=await(await fetch("https://useful-script-statistic.glitch.me/addVIP?"+new URLSearchParams(e))).text();console.log(g),s.info({key:t,content:g})}catch(e){s.error({key:t,content:e.message})}},q=async()=>{const t="onPressLoad";s.loading({key:t,content:"Loading...",duration:0}),P(!0);try{const l=await(await fetch("https://useful-script-statistic.glitch.me/allVIP?password="+h)).json(),g=new Date().getTime(),V=l.map((x,se)=>{const H=parseInt(x==null?void 0:x[1]);return{index:se+1,uid:x==null?void 0:x[0],time:H,inVIP:H>g,name:x==null?void 0:x[2],referralCount:0}}).filter(x=>x.uid).reverse();console.log(V),U(V),s.success({key:t,content:"Load success"})}catch(e){s.error({key:t,content:e.message})}finally{P(!1)}},_=t=>{S(t.uid),M(t.uid),j(A(Number(t.time)))},ee=async t=>{const e="onPressReveal:"+t.uid;s.loading({key:e,content:"Revealing... "+t.name,duration:0});try{const l=await B(t.uid);if(!l)throw new Error("Cannot reveal: "+t.name);p(g=>({...g,[t.uid]:l})),s.success({key:e,content:"Revealed: "+l.name})}catch{s.error({key:e,content:"Cannot reveal: "+t.name})}},te=t=>{var e;(e=T.current)==null||e.setSearch(t.uid)},ae=[{title:"#",dataIndex:"index",key:"index",sorter:(t,e)=>t.index-e.index},{title:"User",dataIndex:"uid",key:"uid",render:(t,e,l)=>a.jsxs(v,{children:[a.jsx(de,{src:W(e.uid,50),width:50,height:50,preview:{src:W(e.uid)}}),a.jsxs(v,{size:0,direction:"vertical",children:[a.jsx(C.Link,{href:G(e.uid),target:"_blank",strong:!0,children:a.jsx("b",{children:e.name})}),e.profile&&a.jsxs(C.Text,{children:["(",e.profile.name,")"]}),a.jsx(C.Text,{type:"secondary",children:e.uid})]})]}),filters:[{text:`Người chia sẻ (${o.filter(t=>{var e;return(e=t.name)==null?void 0:e.includes("referral of")}).length})`,value:"referral of"},{text:`Người được chia sẻ (${o.filter(t=>{var e;return(e=t.name)==null?void 0:e.includes("referral from")}).length})`,value:"referral from"},{text:`review (${o.filter(t=>{var e;return(e=t.name)==null?void 0:e.includes("review")}).length})`,value:"review"}],onFilter:(t,e)=>K(t,e.name)},{title:"Expire time",dataIndex:"inVIP",key:"inVIP",render:(t,e,l)=>{const g=new Date(parseInt(e.time)),V=ne(g);return a.jsxs(v,{direction:"vertical",children:[a.jsx(J,{color:e.inVIP?"success":"error",children:a.jsxs(C.Text,{children:[e.inVIP?"":"-",V]})}),a.jsx(C.Text,{type:"secondary",children:g.toLocaleString()})]})},filters:[{text:`✅ ${o.filter(t=>t.inVIP).length}`,value:!0},{text:`❌ ${o.filter(t=>!t.inVIP).length}`,value:!1}],onFilter:(t,e)=>e.inVIP===t,sorter:(t,e)=>t.time-e.time},{title:"Ref count",dataIndex:"referralCount",key:"referralCount",sorter:(t,e)=>t.referralCount-e.referralCount,width:100},{title:"Action",dataIndex:"action",key:"action",render:(t,e,l)=>a.jsxs(v.Compact,{children:[a.jsx($,{title:"Update",children:a.jsx(y,{icon:a.jsx("i",{className:"fa-solid fa-pen"}),onClick:()=>_(e)})}),e.referralCount>0&&a.jsx($,{title:"Show ref",children:a.jsx(y,{icon:a.jsx("i",{className:"fa-solid fa-users"}),onClick:()=>te(e)})}),!e.profile&&a.jsx($,{title:"Reveal",children:a.jsx(y,{icon:a.jsx("i",{className:"fa-solid fa-eye"}),onClick:()=>ee(e)})})]})}],b=o.find(t=>t.uid==m);return a.jsxs("div",{children:[a.jsx("h1",{children:"Dev"}),a.jsxs("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"},children:[a.jsx(ue,{style:{maxWidth:400},children:a.jsxs(v,{direction:"vertical",children:[a.jsx(E.Search,{value:n,onChange:t=>{const e=t.target.value;S(e),M(e)},onSearch:M,placeholder:"Enter FB URL",prefix:a.jsx("i",{className:"fa-brands fa-facebook"}),loading:F}),N&&a.jsx(ce,{about:N,onClose:()=>{I(null)}}),a.jsx(E,{value:m,onChange:t=>L(t.target.value),placeholder:"UID",prefix:a.jsx("i",{className:"fa-solid fa-hashtag"}),allowClear:!0}),b&&a.jsx(C.Text,{type:"secondary",children:b.name}),a.jsx(E,{value:w,onChange:t=>i(t.target.value),placeholder:"NAME",prefix:a.jsx("i",{className:"fa-solid fa-user"}),allowClear:!0}),b&&a.jsxs(C.Text,{type:"secondary",children:[ie(b.time)," (",b.time<r.toDate().getTime()?"ít hơn ":"nhiều hơn ",re(Math.abs(b.time-r.toDate().getTime())),")"]}),a.jsxs(v.Compact,{children:[a.jsx(fe,{defaultValue:A(),format:"YYYY-MM-DD",value:r,onChange:j,prefix:a.jsx("i",{className:"fa-regular fa-calendar"}),allowClear:!1}),[{value:3,label:"3d"},{value:7,label:"7d"},{value:30,label:"1m"},{value:365,label:"1y"}].map(({value:t,label:e})=>a.jsx(y,{onClick:()=>{j(A().add(t,"day"))},children:e},t))]}),a.jsxs(v.Compact,{children:[a.jsx(E,{value:c,onChange:t=>u(t.target.value),placeholder:"Reason",prefix:a.jsx("i",{className:"fa-solid fa-question"}),allowClear:!0}),["review","65k","3$"].map(t=>a.jsx(y,{onClick:()=>{u(t)},children:t},t))]}),a.jsx(E.Password,{placeholder:"Password",onChange:t=>f(t.target.value),value:h,prefix:a.jsx("i",{className:"fa-solid fa-lock"}),allowClear:!0}),a.jsx(v,{style:{width:"100%",justifyContent:"flex-end"},children:a.jsx(y,{type:"primary",onClick:Z,disabled:!w||!m||!h,children:"Submit"})})]})}),a.jsx("hr",{}),a.jsx(Q,{ref:T,columns:ae,data:X,searchable:!0,pageSize:5,keyExtractor:(t,e)=>e,onSearchRow:(t,e)=>{var l;return K(t,(e==null?void 0:e.name)+(e==null?void 0:e.uid)+((l=e==null?void 0:e.profile)==null?void 0:l.name))},renderTitle:()=>a.jsx(y,{onClick:q,disabled:!h,loading:D,icon:a.jsx("i",{className:"fa-solid fa-sync"}),children:"Reload"})})]})]})}function pe(){const{message:s}=z(),[n,S]=d.useState([]),[F,k]=d.useState(!1);d.useEffect(()=>{N()},[]);const N=async(i=!1)=>{if(!i&&n.length)return;const r="Logs:onReload";oe(r),k(!0),s.loading({key:r,content:"Loading logs...",duration:0});const u=(await(await fetch("https://useful-script-statistic.glitch.me/log")).text()).split("<br/>").filter(f=>f).map(f=>f.trim());if(console.log(u),!u.length)return console.log("no logs");u[0]!="Log not found"&&u[0]!="Waking up";const h=u.map((f,R)=>{const p=Y(f).replace(/\d+\/\d+\/\d+, /,""),D=p==null?void 0:p.split(" ")[1];let P=parseInt(p==null?void 0:p.split(":")[0])+(D=="PM"?12:0);P==12&&D=="AM"&&(P=0);const o={i:R,log:f,uid:ge(f),time:new Date(Y(f)),timeString:p,hour:P,eventName:ve(f),version:ye(f),totalCount:je(f),isScript:Ce(f),fbName:"",fbAvatar:"",logPretty:""},U=o.eventName.replace("("+o.version+")","").trim(),T=Ie(o.version,4," ");return T&&U?o.logPretty=`${o.timeString} | ${T} | ${U} - ${o.totalCount}`:o.logPretty=o.log,o});S(h),k(!1),s.success({key:r,content:"Loaded "+h.length+" logs"})},I=(i,r)=>Array.from(new Set(i.map(c=>c[r]))).map(c=>({count:i.filter(u=>u[r]==c).length,text:c,value:c})).sort((c,u)=>u.count-c.count).map(c=>({text:Se(c.text,100)+" ("+c.count+")",value:c.value})),m={version:I(n,"version"),eventName:I(n,"eventName"),uid:I(n,"uid")},L=[{title:"#",dataIndex:"i",key:"i",width:50},{title:"time",dataIndex:"timeString",key:"timeString",width:100},{title:m.version.length+" version",dataIndex:"version",key:"version",width:80,filters:m.version,onFilter:(i,r)=>r.version===i},{title:m.uid.length+" users",dataIndex:"uid",key:"uid",render:(i,r,j)=>a.jsxs(v,{children:[a.jsx(me,{shape:"square",src:W(r.uid,40),size:40}),a.jsx(C.Link,{href:G(r.uid),target:"_blank",children:r.uid})]}),width:200,filters:m.uid,onFilter:(i,r)=>r.uid===i},{title:m.eventName.length+" events",dataIndex:"eventName",key:"eventName",width:200,filters:m.eventName,onFilter:(i,r)=>r.eventName===i,filterSearch:!0,render(i,r,j){return i==null?void 0:i.split(":").map((c,u)=>a.jsxs(J,{color:["blue","green","red","orange"][u],children:[u==0?"":":",c]},u))}},{title:"isScript",dataIndex:"isScript",key:"isScript",render(i,r,j){return i?"✅":"❌"},filters:[{text:"✅ "+n.filter(i=>i.isScript).length,value:!0},{text:"❌ "+n.filter(i=>!i.isScript).length,value:!1}],onFilter:(i,r)=>r.isScript===i,width:50},{title:"total",dataIndex:"totalCount",key:"totalCount",width:70}],w=()=>a.jsx(y,{loading:F,onClick:()=>N(!0),icon:a.jsx("i",{className:"fa-solid fa-rotate-right"}),children:"Reload"});return a.jsxs("div",{children:[a.jsx("h3",{children:"Logs"}),a.jsxs("p",{children:[n.length," logs"]}),a.jsx(Q,{columns:L,data:n,virtual:!1,searchable:!0,renderTitle:w})]})}function ge(s){var n;return((n=/-(\d+)\)/.exec(s))==null?void 0:n[1])||"?"}function Y(s){var n;return((n=/\d{1,2}\/\d{1,2}\/\d{4}, \d{1,2}:\d{1,2}:\d{1,2} \w{2}/.exec(s))==null?void 0:n[0])||""}function ve(s){var n;return((n=/: (.*?) \(/.exec(s))==null?void 0:n[1])||""}function je(s){var n;return((n=/ -> (\d+)/.exec(s))==null?void 0:n[1])||""}function ye(s){var n;return((n=/ \((.*?)-\d*\)/.exec(s))==null?void 0:n[1])||""}function Ce(s){return!(s.includes("INSTALLED")||s.includes("OPEN-")||s.includes("CLICK_")||s.includes("-INFO")||s.includes("-FAVORITE")||s.includes("-VIEW-SOURCE")||s.includes("CHECK-FOR-UPDATE")||s.includes("RESTORE")||s.includes("BACKUP")||s.includes("CHANGE-THEME")||s.includes("CHANGE-SMOOTH-SCROLL")||s.includes("getVIP"))}function Se(s,n){return s.length<=n?s:s.substring(0,n-3)+"..."}function Ie(s,n,S=" "){return s+(n-s.length>0?S.repeat(n-s.length):"")}function Qe(){return a.jsx(xe,{items:[{label:"Please select",key:"select",children:a.jsx("div",{className:"text-center",children:"Please select"})},{label:"Add VIP",key:"add-vip",children:a.jsx(he,{})},{label:"Logs",key:"logs",children:a.jsx(pe,{})}]})}export{Qe as default};