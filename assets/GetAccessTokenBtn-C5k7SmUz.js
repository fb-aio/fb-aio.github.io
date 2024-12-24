import{aI as m,aK as n,aM as p}from"./index-3KUALxYP.js";import{u,A as h,B as y,t as a,e as l}from"./MyApp-qDaz5xMI.js";import{D as d}from"./index-BNrSH1jC.js";import"./Dropdown-DOiGOsAf.js";import"./PurePanel-D5-U5JjH.js";function b(){const{ti:o}=m(),{message:s,notification:r}=u(),k=async e=>{if(e.key==="check-permission"){const i=prompt(o({en:`Enter access token that you want to check in here:

+ Check token validity
+ Check token permissions
+ Check token expiration time`,vi:`Nhập access token bạn muốn kiểm tra vào đây:

+ Kiểm tra token hợp lệ hay không
+ Kiểm tra các quyền token có thể làm
+ Kiểm tra thời gian hết hạn`}),"");i&&(a("GetAccessTokenBtn:checkPermission"),window.open("https://developers.facebook.com/tools/debug/accesstoken/?access_token="+i));return}const t="GetAccessTokenBtn:"+e.key;a(t),s.loading({key:t,content:`Getting access token ${e.key}...`,duration:0});const c=await l(e.key,!0,!0);c?(s.destroy(t),r.open({type:"success",message:`Access token ${e.key}`,description:c})):s.error({key:t,content:`Cannot get access token ${e.key}`})};return n.jsx(d,{menu:{items:[{key:"title",label:"Get access token",type:"group"},{type:"divider"},...Object.entries(h).map(([e,t])=>({key:e,label:"🔑 "+t})),{type:"divider"},{key:"check-permission",label:"🔎 "+o({en:"Check token",vi:"Kiểm tra token"})}],onClick:k},arrow:!0,children:n.jsx(y,{dot:!0,children:n.jsx(p,{icon:n.jsx("i",{className:"fa-solid fa-key"})})})})}export{b as default};
