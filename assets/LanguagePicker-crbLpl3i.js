import{aq as p,aO as m,r as d,aQ as n,aS as g,au as o,bd as s}from"./index-Vcj4IeAF.js";import{S as f}from"./MyApp-JE0CAMjZ.js";import{D as h}from"./index-B4bb0pyT.js";import"./Dropdown-BxHEncP7.js";import"./PurePanel-FGUkYzQM.js";const c={[s.vi]:"🇻🇳 Tiếng Việt",[s.en]:"🇬🇧 English"};function b(){const{notification:i}=p.useApp(),{language:t,setLanguage:r}=m();d.useEffect(()=>{if(!t){const e="fb_aio_select_language";i.warning({key:e,message:"Select language - Chọn ngôn ngữ",description:n.jsx(f.Compact,{children:Object.entries(c).map(([a,l])=>n.jsx(g,{onClick:()=>{i.destroy(e),r(a),o("LanguagePicker:handleInitLanguage:"+a)},children:l},a))}),placement:"topRight",duration:0})}},[t]);const u=e=>{e.key!==t&&(o("LanguagePicker:handleChangeLanguage:"+e.key),r(e.key))};return n.jsx(h,{menu:{selectable:!0,items:Object.entries(c).map(([e,a])=>({key:e,label:a})),defaultSelectedKeys:[t||s.vi],onClick:u},arrow:!0,children:n.jsx(g,{icon:n.jsx("i",{className:"fa-solid fa-earth-americas"})})})}export{b as default};
