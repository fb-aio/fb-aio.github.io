import{aR as o}from"./index-BxqI5Gd0.js";import{q as w,w as e,v as p}from"./MyApp-ByiHX0qM.js";function i(r={},a="https://www.instagram.com/graphql/query"){return p(r,a)}function m(r){return"https://www.instagram.com/".concat(r)}async function g(r){var s,h;let a=await o("https://www.instagram.com/web/search/topsearch/?query="+r),n=w(a);if(n.status!="ok")throw Error("Server response error");const t=(h=(s=n==null?void 0:n.users)==null?void 0:s.find(c=>{var f;return((f=c==null?void 0:c.user)==null?void 0:f.username)==r}))==null?void 0:h.user;if(!t)throw Error("Instagram user not found");return{avatar:t==null?void 0:t.profile_pic_url,avatarBig:t==null?void 0:t.profile_pic_url,id:t==null?void 0:t.id,uid:t==null?void 0:t.id,name:(t==null?void 0:t.full_name)||(t==null?void 0:t.username),username:r,type:e.IGUser,url:"https://www.instagram.com/".concat(t==null?void 0:t.username),raw:n}}function I(r){var a,n,t;return r!=null&&r.length?!r[0].width||!r[0].height?(a=r.find(s=>s.type=="101")||r[0])==null?void 0:a.url:(t=(n=r==null?void 0:r.sort((s,h)=>h.width*h.height-s.width*s.height))==null?void 0:n[0])==null?void 0:t.url:null}function y(r=""){var a,n;return((a=/instagram.com\/stories\/([^\/]+)/.exec(r))==null?void 0:a[1])||((n=/instagram.com\/([^\/]+)/.exec(r))==null?void 0:n[1])}export{g as a,I as b,m as c,i as f,y as g};
