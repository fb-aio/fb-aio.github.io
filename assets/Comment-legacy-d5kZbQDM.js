System.register(["./index-legacy-em8lsdjG.js","./MyApp-legacy-eQhw2hld.js","./MyTable-legacy-C2PnVgc8.js","./index-legacy-CQy5lX3g.js","./index-legacy-Bm24_6bO.js","./index-legacy-DjDDmc9V.js","./index-legacy-Biw8AYTn.js","./index-legacy-UV62jjIq.js","./TextArea-legacy-CEW8Buwg.js","./Table-legacy-CARq807C.js","./addEventListener-legacy-DmWhHDoC.js","./index-legacy-BPJKA0z7.js","./PurePanel-legacy-YekLkw9D.js","./move-legacy-B0NLBr0J.js","./DownOutlined-legacy-BamLaL4c.js","./SearchOutlined-legacy-DUbN1gtD.js","./index-legacy-BLxQvwtk.js","./index-legacy-CPY_9gVV.js","./Dropdown-legacy-CV5NSkUR.js","./useBreakpoint-legacy-yiP9kW6m.js","./responsiveObserver-legacy-BmkofPmJ.js","./Pagination-legacy-BcBm3qH4.js","./row-legacy-B8b_N6Zy.js","./EyeOutlined-legacy-DNGDLUHf.js"],(function(e,t){"use strict";var n,a,l,o,s,i,c,r,m,u,d,g,y,x,j;return{setters:[e=>{n=e.aE,a=e.r,l=e.aM,o=e.aQ,s=e.aG},e=>{i=e.o,c=e.q,r=e.p,m=e.u,u=e.e,d=e.y},e=>{g=e.default},e=>{y=e.I},e=>{x=e.T},e=>{j=e.D},null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],execute:function(){async function t({postID:e,comment:t,feedLocation:a="PERMALINK",groupID:l=null}){const o=await i({fb_api_req_friendly_name:"useCometUFICreateCommentMutation",variables:{feedLocation:a,feedbackSource:2,groupID:l,input:{actor_id:await c(),attachments:null,feedback_id:btoa(`feedback:${e}`),formatting_style:null,message:{ranges:[],text:t},vod_video_timestamp:null,is_tracking_encrypted:!0,feedback_source:"OBJECT"},inviteShortLinkKey:null,renderLocation:null,scale:2,useDefaultActor:!1,focusCommentID:null,__relay_internal__pv__IsWorkUserrelayprovider:!1},doc_id:"9117686168269068"}),s=r(o);return console.log(s),n(s,"comment_create.feedback.url")}e("default",(function(){const{message:e}=m(),[n,i]=u("AutoComment.postID",""),[c,r]=u("AutoComment.comment",""),[p,f]=u("AutoComment.maxComment",100),[h,C]=u("AutoComment.waitTime",1e3),[I,_]=u("AutoComment.commentHistory",[]),[v,D]=u("AutoComment.offset",0),[w,b]=u("AutoComment.running",!1),[A,k]=a.useState(!1);return l.jsxs("div",{style:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",maxWidth:700},children:[l.jsx("h1",{children:"Auto Comment"}),l.jsx("span",{children:"Post ID:"}),l.jsx(y,{placeholder:"Post URL/ID",value:n,disabled:A,onChange:async t=>{i(t.target.value);const n="AutoComment:getPostIdFromUrl";k(!0),e.loading({key:n,content:"Getting post ID from URL...",duration:0});const a=await d(t.target.value);a?(i(a),e.success({key:n,content:"Found post ID: "+a})):(i(""),e.error({key:n,content:"Failed to get post ID"})),k(!1)}}),l.jsx("span",{children:"Comment:"}),l.jsx(y.TextArea,{placeholder:"Comment",value:c,onChange:e=>r(e.target.value)}),l.jsx("span",{children:"Offset i:"}),l.jsx(x,{step:1,placeholder:"Offset",value:v,onChange:e=>D(e)}),l.jsx("span",{children:"Max comment:"}),l.jsx(x,{placeholder:"Max comment",min:0,step:1,value:p,onChange:e=>f(e)}),l.jsx("span",{children:"Wait time:"}),l.jsx(x,{placeholder:"Wait time",min:500,max:1e4,step:100,value:h,onChange:e=>C(e)}),l.jsx(o,{type:"primary",disabled:!n||!c,onClick:async()=>{if(w||!n||!c)return b(!1);b(!0);const a=[...I];for(;a.length<p;){const l=c?.replace("{i}",a.length+1+v+""),o=await t({postID:n,comment:l});if(await s(h),o){const t={index:a.length,time:Date.now(),comment:l,postID:n,url:o};a.unshift(t),_((e=>[t,...e])),e.success({content:"Commented "+l})}else e.error({content:"Failed to comment"})}b(!1)},icon:w?l.jsx("i",{className:"fa-solid fa-stop"}):l.jsx("i",{className:"fa-solid fa-comment"}),children:(w?"Stop":"Start")+" auto comment"}),l.jsx(j,{}),l.jsx("h2",{children:"Comment history"}),l.jsx(g,{columns:[{title:"#",dataIndex:"index",width:50},{title:"Time",dataIndex:"time",render:e=>l.jsx(l.Fragment,{children:new Date(e).toLocaleString()}),width:150},{title:"Comment",dataIndex:"comment",width:200},{title:"URL",dataIndex:"url",render:e=>l.jsx("a",{href:e,children:l.jsx("i",{className:"fa-solid fa-arrow-up-right-from-square"})}),width:50}],data:I,searchable:!0})]})}))}}}));
