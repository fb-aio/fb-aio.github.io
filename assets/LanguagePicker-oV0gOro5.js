import{r as s,au as l,ao as n,ap as o}from"./index-CCfKz_oT.js";import{u as r,t as g}from"./MyApp-B1qRT6WQ.js";import{D as u}from"./index-Bud0akQU.js";import"./Dropdown-Bo-JhRkI.js";import"./PurePanel-BI7rUu8x.js";const i=[{key:"vi",label:"🇻🇳 Tiếng việt"},{key:"en",label:"🇬🇧 English"}];function k(){const{i18n:a}=r();s.useEffect(()=>{l().locale(a.language)},[a.language]);const t=e=>{g("LanguagePicker:handleChangeLanguage:"+e.key),localStorage.lang=e.key,a.changeLanguage(e.key)};return n.jsx(u,{menu:{selectable:!0,items:i,defaultSelectedKeys:[a.language||localStorage.lang||"en"],onClick:t},arrow:!0,children:n.jsx(o,{icon:n.jsx("i",{className:"fa-solid fa-earth-americas"})})})}export{k as default};