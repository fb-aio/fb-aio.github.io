import{aO as k,aU as y,r as D,aW as e,a_ as L,aQ as R}from"./index-C5YWxV9K.js";import{S}from"./Screen-CjvzTHvD.js";import{n as U,o as A,p as F,u as N,e as i,S as M,x as B}from"./MyApp-Ct___eEr.js";import E from"./MyTable-D1xLJpO0.js";import{C as K}from"./col-XT3xBtee.js";import{D as W}from"./index-CCWfgY7j.js";import{C as H}from"./index-h-w1Ub4N.js";import{I as x}from"./index-CWcF8dW8.js";import{T as g}from"./index-BlOtHGr6.js";import{T as q}from"./index-BSpDRV6y.js";import"./row-Cxq1EIs_.js";import"./index-DgzD-WDw.js";import"./TextArea-Gh7v8m_G.js";import"./index-B89EIDgf.js";import"./Table-CvbVNt94.js";import"./index-B0cdpGh8.js";import"./PurePanel-CDyma__L.js";import"./move-qwd2O5b7.js";import"./DownOutlined-qmMzTFXy.js";import"./SearchOutlined-BZYjbz-k.js";import"./index-Cjh_pMrK.js";import"./index-fg40ZRcV.js";import"./Dropdown-uaA3vV-D.js";import"./useBreakpoint-PCEp_VLU.js";import"./useForceUpdate-Bs9ixSSa.js";import"./Pagination-B6wGdAWy.js";async function G({postID:n,comment:o,feedLocation:a="PERMALINK",groupID:r=null}){const s=await U({fb_api_req_friendly_name:"useCometUFICreateCommentMutation",variables:{feedLocation:a,feedbackSource:2,groupID:r,input:{actor_id:await A(),attachments:null,feedback_id:btoa("feedback:".concat(n)),formatting_style:null,message:{ranges:[],text:o},vod_video_timestamp:null,is_tracking_encrypted:!0,feedback_source:"OBJECT"},inviteShortLinkKey:null,renderLocation:null,scale:2,useDefaultActor:!1,focusCommentID:null,__relay_internal__pv__IsWorkUserrelayprovider:!1},doc_id:"9117686168269068"}),c=F(s);return console.log(c),k(c,"comment_create.feedback.url")}function O(){const{ti:n}=y(),{message:o}=N(),[a,r]=i("CommentToPost.postID",""),[s,c]=i("CommentToPost.comment",""),[d,j]=i("CommentToPost.maxComment",100),[p,v]=i("CommentToPost.waitTime",1e3),[f,_]=i("CommentToPost.commentHistory",[]),[T,u]=i("CommentToPost.running",!1),[b,h]=D.useState(!1),I=async()=>{if(T||!a||!s)return u(!1);u(!0);const t=[...f];for(;t.length<d;){const m=s==null?void 0:s.replace("{i}",t.length+1+""),l=await G({postID:a,comment:m});if(await R(p),l){const C={index:t.length,time:Date.now(),comment:m,postID:a,url:l};t.unshift(C),_(P=>[C,...P]),o.success({content:"Commented "+m})}else o.error({content:"Failed to comment"})}u(!1)},w=()=>e.jsx(H,{title:n({en:"Config",vi:"Cấu hình"}),children:e.jsxs(M,{direction:"vertical",children:[e.jsx("span",{children:n({en:"Enter Post URL",vi:"Nhập URL bài viết"})}),e.jsx(x,{placeholder:"Post URL/ID",value:a,disabled:b,onChange:async t=>{r(t.target.value);const m="CommentToPost:getPostIdFromUrl";h(!0),o.loading({key:m,content:"Getting post ID from URL...",duration:0});const l=await B(t.target.value);l?(r(l),o.success({key:m,content:"Found post ID: "+l})):(r(""),o.error({key:m,content:"Failed to get post ID"})),h(!1)}}),e.jsx("span",{children:"Comment:"}),e.jsx(x.TextArea,{placeholder:"Comment",value:s,onChange:t=>c(t.target.value)}),e.jsx("span",{children:"Max comment:"}),e.jsx(g,{placeholder:"Max comment",min:0,step:1,value:d,onChange:t=>j(t)}),e.jsx("span",{children:"Wait time:"}),e.jsx(g,{placeholder:"Wait time",min:500,max:1e4,step:100,value:p,onChange:t=>v(t)}),e.jsx(L,{type:"primary",disabled:!a||!s,onClick:I,icon:e.jsx("i",{className:"fa-solid fa-plus"}),children:n({en:"Add job",vi:"Thêm công việc"})})]})});return e.jsxs(K,{children:[w(),e.jsx(W,{}),e.jsx("h2",{children:"Comment history"}),e.jsx(E,{columns:[{title:"#",dataIndex:"index",width:50},{title:"Time",dataIndex:"time",render:t=>e.jsx(e.Fragment,{children:new Date(t).toLocaleString()}),width:150},{title:"Comment",dataIndex:"comment",width:200},{title:"URL",dataIndex:"url",render:t=>e.jsx("a",{href:t,children:e.jsx("i",{className:"fa-solid fa-arrow-up-right-from-square"})}),width:50}],data:f,searchable:!0})]})}function Q(){return e.jsx("div",{children:"ReplyComment"})}function ye(){const{ti:n}=y();i("AutoComment.tabsStatus",{});const[o,a]=i("AutoComment.activeKey","1");return e.jsx(S,{title:n({en:"Auto Comment",vi:"Tự động Bình luận"}),children:e.jsx(q,{type:"card",activeKey:o,onChange:r=>a(r),items:[{key:"1",label:n({en:"Comment to Post",vi:"Bình luận vào Bài đăng"}),icon:e.jsx("i",{className:"fas fa-comment"}),children:e.jsx(O,{})},{key:"2",label:n({en:"Reply Comment",vi:"Trả lời bình luận"}),icon:e.jsx("i",{className:"fas fa-reply"}),children:e.jsx(Q,{})}]})})}export{ye as default};
