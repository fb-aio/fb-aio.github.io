import{bi as T,aU as I,r as o,bc as f,aW as s,a_ as u,aG as N,bj as C}from"./index-BhOjK5sv.js";import{u as P}from"./react-hotkeys-hook.esm-BX-ErqLF.js";import{f as G}from"./features-BXMKyhBt.js";import{t as j,S as b,T as v,b as V}from"./MyApp-CpIZX9SA.js";import{M as q}from"./index-Cw541t0_.js";import{I as E}from"./index-Dt3Gv5HA.js";import"./PurePanel-I3l8jObt.js";import"./TextArea-wjUUL4GA.js";import"./SearchOutlined-DfRH9jes.js";const F=[{title:{vi:"Tất cả chức năng",en:"List all features"},icon:"fa-solid fa-location-arrow",children:G.filter(i=>!i.header).map(i=>({title:i.name,description:i.description,icon:i.icon,link:i.path,newTab:i.newTab,requireVIP:i.requireVIP}))},{title:{vi:"Lịch sử cập nhật",en:"Update logs"},icon:"fa-solid fa-list",link:"/updates"},{title:{vi:"Mở khoá VIP",en:"Unlock VIP"},icon:"fa-solid fa-crown",link:"/VIP"},{title:{vi:"FAQ: Câu hỏi thường gặp",en:"FAQs"},icon:"fa-solid fa-question",link:"/FAQ"},{title:{vi:"Trợ giúp",en:"Help"},icon:"fa-solid fa-life-ring",link:N.GroupFB,newTab:!0}];function K({style:i={},compact:h=!1}){const S=T(),{ti:l}=I(),[n,g]=o.useState(""),[d,c]=o.useState(!1),[p,m]=o.useState([]),x=o.useRef(null),y=o.useMemo(()=>{var t;let e=F;for(let a of p){let r=(t=e==null?void 0:e[a])==null?void 0:t.children;if(r)e=r;else break}return n?e.filter(a=>{var r,k;return f(n,a.title.en)||f(n,a.title.vi)||f(n,(r=a.description)==null?void 0:r.en)||f(n,(k=a.description)==null?void 0:k.vi)}):e},[n,l,p]);P(["ctrl+k","meta+k"],()=>{j("GlobalSearch:Shortcut"),c(e=>!e)}),o.useEffect(()=>{d&&(j("GlobalSearch:Open"),setTimeout(()=>{var e;return(e=x.current)==null?void 0:e.focus()},500))},[d]);const w=()=>y.map((e,t)=>s.jsx(V,{title:e.description?l(e.description):null,placement:"right",children:s.jsxs(u,{type:"text",style:{width:"100%",justifyContent:"space-between"},onClick:()=>{e.children?m(a=>[...a,t]):(e.keepOpen||c(!1),e.link&&(e.newTab?window.open(e.link,"_blank"):S(e.link)))},children:[s.jsxs(b,{children:[s.jsx("i",{className:e.icon}),l(e.title)]}),s.jsxs("div",{children:[e.requireVIP&&s.jsx("i",{className:"fa-solid fa-crown",style:{color:"gold",opacity:.5}}),e.children?s.jsx("i",{className:"fa-solid fa-chevron-right"}):s.jsx(v,{children:C(e.link,30)})]})]},t)},t));return s.jsxs(b,{style:i,children:[s.jsx(u,{type:"default",icon:s.jsx("i",{className:"fa-solid fa-magnifying-glass"}),onClick:()=>c(!0),style:h?{}:{borderRadius:"9999px",padding:18},children:h?null:s.jsxs(s.Fragment,{children:[l({en:"Search",vi:"Tìm"})," ",s.jsx(v,{style:{borderRadius:"9999px"},children:"⌘ K"})]})}),s.jsxs(q,{open:d,onCancel:()=>c(!1),footer:null,closable:!1,children:[s.jsx(E,{ref:x,placeholder:l({en:"Global search",vi:"Tìm kiếm toàn cục"}),prefix:s.jsx("i",{className:"fa-solid fa-magnifying-glass"}),style:{marginBottom:10},value:n,onChange:e=>g(e.target.value)}),p.length>0&&s.jsx(u,{icon:s.jsx("i",{className:"fa-solid fa-arrow-left"}),onClick:()=>{g(""),m(e=>e.slice(0,e.length-1))},children:l({en:"Back",vi:"Quay lại"})}),w()]})]})}export{K as default};
