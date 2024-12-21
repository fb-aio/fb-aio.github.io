import{aI as m,aK as n,aM as p}from"./index-DnVdc2zz.js";import{u as l,A as u,B as h,t as a,e as y}from"./MyApp-BxPDuCeg.js";import{D as d}from"./index-C4RRQZEt.js";import"./Dropdown-Dkm8UCD4.js";import"./PurePanel-BMdKMPL-.js";function b(){const{ti:s}=m(),{message:o,notification:r}=l(),k=async e=>{if(e.key==="check-permission"){a("GetAccessTokenBtn:checkPermission");const i=prompt(s({en:`Enter access token that you want to check in here:

+ Check token validity
+ Check token permissions
+ Check token expiration time`,vi:`Nhập access token bạn muốn kiểm tra vào đây:

+ Kiểm tra token hợp lệ hay không
+ Kiểm tra các quyền token có thể làm
+ Kiểm tra thời gian hết hạn`}),"");i&&window.open("https://developers.facebook.com/tools/debug/accesstoken/?access_token="+i);return}const t="Floating:onClickLoadToken:"+e.key;a(t),o.loading({key:t,content:`Getting access token ${e.key}...`,duration:0});const c=await y(e.key,!0,!0);c?(o.destroy(t),r.open({type:"success",message:`Access token ${e.key}`,description:c})):o.error({key:t,content:`Cannot get access token ${e.key}`})};return n.jsx(d,{menu:{items:[{key:"title",label:"Get access token",type:"group"},{type:"divider"},...Object.entries(u).map(([e,t])=>({key:e,label:"🔑 "+t})),{type:"divider"},{key:"check-permission",label:"🔎 "+s({en:"Check token",vi:"Kiểm tra token"})}],onClick:k},arrow:!0,children:n.jsx(h,{dot:!0,children:n.jsx(p,{icon:n.jsx("i",{className:"fa-solid fa-key"})})})})}export{b as default};
