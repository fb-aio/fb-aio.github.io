import{N as h,z as l,C as x}from"./MyApp-BycUN0_u.js";const u={urlToId:{}};async function g(e,n){try{if(u.urlToId[e])return u.urlToId[e];let s=await x(e);if(s){let t=n.exec(s);if(t!=null&&t.length)return u.urlToId[e]=t[0],t[0]}}catch{}return null}async function y(e,n=!0){var c,d,r,I,w;const s=(c=/\/groups\/(\d+)\/user\/(\d+)/.exec(e))==null?void 0:c[2];if(s)return s;const t=(d=/groups\/(\d+)/.exec(e))==null?void 0:d[1];if(t)return t;const i=(r=/profile.php\?id=(\d+)/.exec(e))==null?void 0:r[1];if(i)return i;if(e.includes("permalink.php?")){const p=new URLSearchParams(e.split("?")[1]);if(p.has("story_fbid")&&p.has("id"))return p.get("id")}const a=(I=/facebook.com\/(.*?)\/posts\//.exec(e))==null?void 0:I[1];if(a&&(e=`https://www.facebook.com/${a}`),(w=/\/groups\/([^\/]+)/.exec(e))==null?void 0:w[1])return await g(e,new RegExp('(?<="groupID":")(.\\d+?)(?=")'));const o=await g(e,new RegExp('(?<="userID":")(.\\d+?)(?=")'));return o||(n?await y(await h(e),!1):null)}async function b(e,n=!0){var f,o,c,d;const s=(f=/share_url=(.*?)v=(\d+)/.exec(e))==null?void 0:f[2];if(s)return s;const t=(o=/\/watch\/\?v=(\d+)/.exec(e))==null?void 0:o[1];if(t)return t;const i=(c=/\/videos\/(\d+)/.exec(e))==null?void 0:c[1];if(i)return i;const a=(d=/\/reel\/(\d+)/.exec(e))==null?void 0:d[1];return a||(n?await b(await h(e),!1):null)}async function U(e,n=!0){var f,o,c,d;let s=(f=/\/posts\/(\d+)/.exec(e))==null?void 0:f[1];if(s)return s;let t=(o=/\/posts\/(pfbid\w+)/.exec(e))==null?void 0:o[1];if(t)return await m(t);if(e.includes("permalink.php?")){const r=new URLSearchParams(e.split("?")[1]);if(r.has("story_fbid")&&r.has("id"))return await m(r.get("story_fbid"))}if(e.includes("multi_permalinks=")){const r=new URLSearchParams(e.split("?")[1]);if(r.has("multi_permalinks"))return r.get("multi_permalinks")}if(e.includes("/photo/")){const r=new URLSearchParams(e.split("?")[1]);if(r.has("fbid"))return r.get("fbid")}const i=(c=/\/groups\/(.*?)\/posts\/(\d+)\//.exec(e))==null?void 0:c[2];if(i)return i;const a=(d=/\/posts\/(.*?)\/(\d+)/.exec(e))==null?void 0:d[2];return a||(n?await U(await h(e),!1):null)}async function m(e){var t;const n=await l({q:`node(${e}){id}`}),s=JSON.parse(n);return(t=Object.keys(s))==null?void 0:t[0]}export{b as a,U as b,y as g};