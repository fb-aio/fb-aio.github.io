import{aI as k,aK as n,aM as m}from"./index-BoZ3qCu-.js";import{u as p,A as l,B as u,t as d,e as h}from"./MyApp-D00-hVKM.js";import{D as y}from"./index-eKalL2eG.js";import"./Dropdown-DBLdsESi.js";import"./PurePanel-BOikr8JH.js";function b(){const{ti:s}=k(),{message:o,notification:a}=p(),r=async e=>{if(e.key==="check-permission"){const i=prompt(s({en:`Enter access token that you want to check in here:

+ Check token validity
+ Check token permissions
+ Check token expiration time`,vi:`Nhập access token bạn muốn kiểm tra vào đây:

+ Kiểm tra token hợp lệ hay không
+ Kiểm tra các quyền token có thể làm
+ Kiểm tra thời gian hết hạn`}),"");i&&window.open("https://developers.facebook.com/tools/debug/accesstoken/?access_token="+i);return}const t="Floating:onClickLoadToken";d(t),o.loading({key:t,content:`Getting access token ${e.key}...`,duration:0});const c=await h(e.key,!0,!0);c?(o.destroy(t),a.open({type:"success",message:`Access token ${e.key}`,description:c})):o.error({key:t,content:`Cannot get access token ${e.key}`})};return n.jsx(y,{menu:{items:[{key:"title",label:"Get access token",type:"group"},{type:"divider"},...Object.entries(l).map(([e,t])=>({key:e,label:"🔑 "+t})),{type:"divider"},{key:"check-permission",label:"🔎 "+s({en:"Check token",vi:"Kiểm tra token"})}],onClick:r},arrow:!0,children:n.jsx(u,{dot:!0,children:n.jsx(m,{icon:n.jsx("i",{className:"fa-solid fa-key"})})})})}export{b as default};
