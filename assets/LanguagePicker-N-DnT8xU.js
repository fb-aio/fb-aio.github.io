import{r as l,aj as n,an as t,ao as g}from"./index-C6IDuEAZ.js";import{S as c}from"./sweetalert2.all-BmLNahrN.js";import{u as f,t as o}from"./MyApp-nuvdhu8g.js";import{D as m}from"./index-UFxH4aKA.js";import"./Dropdown-D8umh5xP.js";import"./PurePanel-BMdJEOeI.js";const s={[n.vi]:"🇻🇳 Tiếng Việt",[n.en]:"🇬🇧 English"};function j(){const{language:a,setLanguage:i}=f();l.useEffect(()=>{a||c.fire({icon:"info",title:"Select language",input:"select",inputOptions:s,inputPlaceholder:"Chọn ngôn ngữ",inputValue:a||n.vi,allowOutsideClick:!1,allowEscapeKey:!1,inputValidator:e=>{if(!e)return"You need to choose something!"}}).then(e=>{e.isConfirmed&&(i(e.value),o("LanguagePicker:handleInitLanguage:"+e.value))})},[a]);const u=e=>{o("LanguagePicker:handleChangeLanguage:"+e.key),i(e.key)};return t.jsx(m,{menu:{selectable:!0,items:Object.entries(s).map(([e,r])=>({key:e,label:r})),defaultSelectedKeys:[a||n.vi],onClick:u},arrow:!0,children:t.jsx(g,{icon:t.jsx("i",{className:"fa-solid fa-earth-americas"})})})}export{j as default};