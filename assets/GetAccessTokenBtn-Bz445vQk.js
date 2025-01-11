import{aJ as m,aL as o,aN as p}from"./index-DkgYbfty.js";import{u,A as y,t as a,e as h}from"./MyApp-POGQmq3C.js";import{D as l}from"./index-C70RGLFw.js";import"./Dropdown-CR7sAuZH.js";import"./PurePanel-UKxqbKrP.js";function b(){const{ti:s}=m(),{message:n,notification:r}=u(),k=async e=>{if(e.key==="check-permission"){const i=prompt(s({en:`Enter access token that you want to check in here:

+ Check token validity
+ Check token permissions
+ Check token expiration time`,vi:`Nhập access token bạn muốn kiểm tra vào đây:

+ Kiểm tra token hợp lệ hay không
+ Kiểm tra các quyền token có thể làm
+ Kiểm tra thời gian hết hạn`}),"");i&&(a("GetAccessTokenBtn:checkPermission"),window.open("https://developers.facebook.com/tools/debug/accesstoken/?access_token="+i));return}const t="GetAccessTokenBtn:"+e.key;a(t),n.loading({key:t,content:`Getting access token ${e.key}...`,duration:0});const c=await h(e.key,!0,!0);c?(n.destroy(t),r.open({type:"success",message:`Access token ${e.key}`,description:c})):n.error({key:t,content:`Cannot get access token ${e.key}`})};return o.jsx(l,{menu:{items:[{key:"title",label:"Get access token",type:"group"},{type:"divider"},...Object.entries(y).map(([e,t])=>({key:e,label:"🔑 "+t})),{type:"divider"},{key:"check-permission",label:"🔎 "+s({en:"Check token",vi:"Kiểm tra token"})}],onClick:k},arrow:!0,children:o.jsx(p,{icon:o.jsx("i",{className:"fa-solid fa-key"})})})}export{b as default};
