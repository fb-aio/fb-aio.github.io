import{aO as m,aQ as o,aE as p,aS as u,au as a,aD as y}from"./index-Vcj4IeAF.js";import{u as h}from"./MyApp-JE0CAMjZ.js";import{D as l}from"./index-B4bb0pyT.js";import"./Dropdown-BxHEncP7.js";import"./PurePanel-FGUkYzQM.js";function b(){const{ti:s}=m(),{message:n,notification:r}=h(),k=async e=>{if(e.key==="check-permission"){const i=prompt(s({en:`Enter access token that you want to check in here:

+ Check token validity
+ Check token permissions
+ Check token expiration time`,vi:`Nhập access token bạn muốn kiểm tra vào đây:

+ Kiểm tra token hợp lệ hay không
+ Kiểm tra các quyền token có thể làm
+ Kiểm tra thời gian hết hạn`}),"");i&&(a("GetAccessTokenBtn:checkPermission"),window.open("https://developers.facebook.com/tools/debug/accesstoken/?access_token="+i));return}const t="GetAccessTokenBtn:"+e.key;a(t),n.loading({key:t,content:`Getting access token ${e.key}...`,duration:0});const c=await y(e.key,!0,!0);c?(n.destroy(t),r.open({type:"success",message:`Access token ${e.key}`,description:c})):n.error({key:t,content:`Cannot get access token ${e.key}`})};return o.jsx(l,{menu:{items:[{key:"title",label:"Get access token",type:"group"},{type:"divider"},...Object.entries(p).map(([e,t])=>({key:e,label:"🔑 "+t})),{type:"divider"},{key:"check-permission",label:"🔎 "+s({en:"Check token",vi:"Kiểm tra token"})}],onClick:k},arrow:!0,children:o.jsx(u,{icon:o.jsx("i",{className:"fa-solid fa-key"})})})}export{b as default};
