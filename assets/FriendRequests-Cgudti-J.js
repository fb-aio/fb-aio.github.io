import{aB as J,aJ as ce,r as ae,aE as S,aL as c,b4 as re,b5 as V,b3 as oe,aP as y,bc as U}from"./index-CeyGMT_V.js";import le from"./MyTable-B6A9bqIf.js";import{o as j,p as F,u as de,e as N,t as ue,S as I,g as me,T as ge,b as v,a as w}from"./MyApp-CioD1-EH.js";import{u as he}from"./useAction-l_XxMkhq.js";import{u as fe}from"./useDevMode-DiDAYnlB.js";import{A as pe}from"./index-B2UzIV9B.js";import{I as xe}from"./index-ChfKkt-d.js";import{R as Ce}from"./row-Bgd22wUk.js";import{T as _e}from"./index-BYUZZ7Yu.js";import{R as H}from"./Table-Ckyxh0e7.js";import"./index-CsZwNLds.js";import"./index-DjUWyM0b.js";import"./DownOutlined-X9k_duFa.js";import"./index-CU9TjvVd.js";import"./EyeOutlined-2Bn8a6ad.js";import"./SearchOutlined-CC3XFLkS.js";import"./Collapse-D4i_-s2y.js";import"./index-D4qYEF7y.js";import"./responsiveObserver-CKST1Z3I.js";import"./useBreakpoint-B-lOGsES.js";import"./index-Bpe5FRV7.js";import"./addEventListener-CEUbmUur.js";import"./index-vJHPUTap.js";import"./Dropdown-DEJ-Gs_Y.js";import"./PurePanel-CWgCJQuB.js";import"./index-B_KTZZaH.js";import"./Pagination-D9VAi25t.js";var r=(i=>(i.INCOMING_REQUEST="INCOMING_REQUEST",i.OUTGOING_REQUEST="OUTGOING_REQUEST",i.DECLINED="DECLINED",i.ACCEPTED="ACCEPTED",i.CANCELED="CANCELED",i))(r||{});async function Ee(i=""){const m=await j({fb_api_req_friendly_name:"FriendingCometFriendRequestsSectionPanelPaginationQuery",variables:{count:20,cursor:i,scale:2},doc_id:"4843321999100134"}),o=F(m);console.log(o);const{edges:l=[],page_info:u={}}=J(o);return l.map((n,x)=>{var k,g,p,h,C,_,E,T;return{id:(k=n==null?void 0:n.node)==null?void 0:k.id,name:(g=n==null?void 0:n.node)==null?void 0:g.name,avatar:(h=(p=n==null?void 0:n.node)==null?void 0:p.profile_picture)==null?void 0:h.uri,url:(C=n==null?void 0:n.node)==null?void 0:C.url,desc:(E=(_=n==null?void 0:n.node)==null?void 0:_.social_context)==null?void 0:E.text,seen:n==null?void 0:n.is_seen,time:((n==null?void 0:n.time)||0)*1e3,type:(T=n==null?void 0:n.node)==null?void 0:T.friendship_status,cursor:n==null?void 0:n.cursor}})}async function ye(i=""){const m=await j({fb_api_req_friendly_name:"FriendingCometOutgoingRequestsDialogPaginationQuery",variables:{count:10,cursor:i,scale:2},doc_id:"4420916318007844"}),o=F(m),{edges:l=[],page_info:u={}}=J(o);return l.map((n,x)=>{var k,g,p,h,C,_,E,T;return{id:(k=n==null?void 0:n.node)==null?void 0:k.id,name:(g=n==null?void 0:n.node)==null?void 0:g.name,avatar:(h=(p=n==null?void 0:n.node)==null?void 0:p.profile_picture)==null?void 0:h.uri,url:(C=n==null?void 0:n.node)==null?void 0:C.url,desc:(E=(_=n==null?void 0:n.node)==null?void 0:_.social_context)==null?void 0:E.text,seen:n==null?void 0:n.is_seen,time:((n==null?void 0:n.time)||0)*1e3,type:(T=n==null?void 0:n.node)==null?void 0:T.friendship_status,cursor:n==null?void 0:n.cursor}})}async function ke(i=""){var l,u,n;const m=await j({variables:{input:{friend_requester_id:i,source:"friends_tab",actor_id:"me"},scale:2,refresh_num:0},doc_id:"4189738374386264"}),o=F(m);return((n=(u=(l=o==null?void 0:o.data)==null?void 0:l.friend_request_delete)==null?void 0:u.friend_requester)==null?void 0:n.id)==i}async function Te(i=""){var l,u,n;const m=await j({variables:{input:{friend_requester_id:i,source:"friends_tab",actor_id:"me"},scale:2,refresh_num:0},doc_id:"3750307704981867"}),o=F(m);return((n=(u=(l=o==null?void 0:o.data)==null?void 0:l.friend_request_accept)==null?void 0:u.friend_requester)==null?void 0:n.id)==i}async function qe(i=""){var l,u,n;const m=await j({fb_api_req_friendly_name:"FriendingCometFriendRequestCancelMutation",variables:{input:{attribution_id_v2:"FriendingCometFriendRequestsRoot.react,comet.friending.friendrequests,unexpected,1724509964587,135627,2356318349,,;FriendingCometRoot.react,comet.friending,tap_bookmark,1724509961317,200700,2356318349,,",cancelled_friend_requestee_id:i,friending_channel:"MANAGE_OUTGOING_REQUESTS",actor_id:"me"},scale:2},doc_id:"5247084515315799"}),o=F(m);return((n=(u=(l=o==null?void 0:o.data)==null?void 0:l.friend_request_cancel)==null?void 0:u.cancelled_friend_requestee)==null?void 0:n.id)==i}const b={[r.INCOMING_REQUEST]:{vi:"Đã nhận",en:"Incoming",color:"default",icon:"fa-solid fa-arrow-turn-down"},[r.OUTGOING_REQUEST]:{vi:"Đã gửi",en:"Outgoing",color:"default",icon:"fa-solid fa-arrow-turn-up"},[r.DECLINED]:{vi:"Đã từ chối",en:"Declined",color:"error",icon:"fa-solid fa-xmark"},[r.ACCEPTED]:{vi:"Đã chấp nhận",en:"Accepted",color:"success",icon:"fa-solid fa-check"},[r.CANCELED]:{vi:"Đã huỷ",en:"Canceled",color:"error",icon:"fa-solid fa-xmark"}};function Ye(){const{ti:i}=ce(),{message:m,notification:o}=de(),{onClickAction:l,onClickBulkActions:u}=he(),{devMode:n}=fe(),[x,k]=N("FriendRequestType",r.INCOMING_REQUEST),[g,p]=N("FriendRequests.incoming",[]),[h,C]=N("FriendRequests.outgoing",[]),[_,E]=N("FriendRequests.finished",!1),[T,Q]=N("FriendRequests.loading",!1);ae.useEffect(()=>{_||L(!1)},[x,_]);const L=async(e=!1)=>{const t="FriendRequests:onReload";ue(t);const a=[[r.INCOMING_REQUEST,Ee,p,g],[r.OUTGOING_REQUEST,ye,C,h]].map(async([d,q,ne,te])=>{var z;const R=b[d],B=t+d;try{const f=e?[]:te,O=f[f.length-1];let A=f.length,W=e?"":O==null?void 0:O.cursor;for(;;){m.loading({key:B,content:i({en:"Loading ".concat(R.en," friend requests..."),vi:"Đang tải yêu cầu kết bạn ".concat(R.vi,"...")})+A,duration:0});const ie=await q(W),se=new Set(f.map(G=>G.id)),D=ie.filter(G=>!se.has(G.id));if(!(D!=null&&D.length))break;f.push(...D),ne([...f]),A=f.length,W=(z=f[f.length-1])==null?void 0:z.cursor,await S(500)}m.success({key:B,content:i({en:"Loaded friend requests "+R.en+": ",vi:"Tải xong yêu cầu kết bạn "+R.vi+": "})+A})}catch(f){o.open({type:"error",message:i({en:"Failed to load friend requests "+R.en+": ",vi:"Lỗi tải yêu cầu kết bạn "+R.vi+": "}),description:f.message})}});Q(!0),E(!1),await Promise.all(a),Q(!1),E(!0)},M=(e,t=!1)=>l({key:"FriendRequests:onClickDeclineFriendRequest",id:e.id,record:e,loadingText:s=>i({en:"Declining friend request...",vi:"Đang từ chối yêu cầu kết bạn..."})+" "+s.name,successText:s=>i({en:"Declined friend request ",vi:"Từ chối yêu cầu thành công "})+" "+s.name,failedText:s=>i({en:"Failed to decline friend request: ",vi:"Lỗi từ chối yêu cầu kết bạn: "})+" "+s.name,actionFn:()=>n?S(1e3):ke(e.id),onSuccess:()=>{p(s=>U(s,a=>{const d=a.findIndex(q=>q.id===e.id);return d>=0&&(a[d].type=r.DECLINED),a}))},needConfirm:t,confirmProps:{title:i({en:"Decline friend request?",vi:"Từ chối yêu cầu kết bạn?"}),text:e.name}}),P=(e,t=!1)=>l({key:"FriendRequests:onClickAcceptFriendRequest",id:e.id,record:e,loadingText:s=>i({en:"Accepting friend request...",vi:"Đang đồng ý yêu cầu kết bạn..."})+" "+s.name,successText:s=>i({en:"Accepted friend request ",vi:"Đã đồng ý yêu cầu kết bạn "})+" "+s.name,failedText:s=>i({en:"Failed to accept friend request: ",vi:"Lỗi đồng ý yêu cầu kết bạn: "})+" "+s.name,actionFn:()=>n?S(1e3):Te(e.id),onSuccess:()=>{p(s=>U(s,a=>{const d=a.findIndex(q=>q.id===e.id);return d>=0&&(a[d].type=r.ACCEPTED),a}))},needConfirm:t,confirmProps:{title:i({en:"Accept friend request?",vi:"Đồng ý yêu cầu kết bạn?"}),text:e.name}}),$=(e,t=!1)=>l({key:"FriendRequests:onClickCancelOutgoingRequest",id:e.id,record:e,loadingText:s=>i({en:"Canceling friend request...",vi:"Đang thu hồi yêu cầu kết bạn..."})+" "+s.name,successText:s=>i({en:"canceled friend request ",vi:"Đã thu hồi yêu cầu kết bạn "})+" "+s.name,failedText:s=>i({en:"Failed to cancel friend request: ",vi:"Lỗi thu hồi yêu cầu kết bạn: "})+" "+s.name,actionFn:()=>n?S(1e3):qe(e.id),onSuccess:()=>{C(s=>U(s,a=>{const d=a.findIndex(q=>q.id===e.id);return d>=0&&(a[d].type=r.CANCELED),a}))},needConfirm:t,confirmProps:{title:i({en:"Cancel friend request?",vi:"Thu hồi yêu cầu kết bạn?"}),text:e.name}}),X=e=>u({data:e,key:"FriendRequests:onClickDeclineSelectedIncomingFriendRequests",actionFn:M,loadingText:(t,s,a)=>i({en:"Declining incoming requests...",vi:"Đang từ chối lời mời..."}),successText:(t,s)=>i({en:"Declined friend requests",vi:"Từ chối lời mời kết bạn xong"}),successDescItem:t=>c.jsx("a",{target:"_blank",href:w(t.id),children:t.name}),confirmProps:{title:i({en:"Decline ".concat(e.length," selected incoming requests"),vi:"Từ chối ".concat(e.length," lời mời đang chọn")}),text:i({en:"Are your sure want to bulk decline?",vi:"Bản có chãc muốn từ chối hàng loạt?"})}}),K=e=>u({data:e,key:"FriendRequests:onClickAcceptSelectedIncomingFriendRequests",actionFn:P,loadingText:(t,s,a)=>i({en:"Accepting incoming requests...",vi:"Đang đồng ý lời mời..."}),successText:(t,s)=>i({en:"Accepted incoming requests done: ",vi:"Đồng ý lời mời xong: "}),successDescItem:t=>c.jsx("a",{target:"_blank",href:w(t.id),children:t.name}),confirmProps:{title:i({en:"Accept ".concat(e.length," incoming requests"),vi:"Đồng ý ".concat(e.length," lời mời kết bạn")}),text:i({en:"Are your sure want to bulk accept?",vi:"Bạn có chãc muốn đồng ý hàng loạt?"})}}),Y=e=>u({data:e,key:"FriendRequests:onClickCancelSelectedOutgoingFriendRequests",actionFn:$,loadingText:(t,s,a)=>i({en:"Canceling outgoing requests...",vi:"Đang thu hồi yêu cầu..."}),successText:(t,s)=>i({en:"Canceled outgoing requests",vi:"Thu hồi yêu cầu kết bạn xong"}),successDescItem:t=>c.jsx("a",{target:"_blank",href:w(t.id),children:t.name}),confirmProps:{title:i({en:"Cancel ".concat(e.length," outgoing requests"),vi:"Thu hồi ".concat(e.length," yêu cầu kết bạn")}),text:i({en:"Are your sure want to bulk cancel?",vi:"Bạn có chãc muốn thu hồi hàng loạt?"})}}),Z=e=>{const t=e!=null&&e.length?[...e]:[...x===r.INCOMING_REQUEST?g:h],s=t.filter(d=>d.type===r.INCOMING_REQUEST),a=t.filter(d=>d.type===r.OUTGOING_REQUEST);return c.jsxs(c.Fragment,{children:[c.jsx(y,{type:"primary",icon:c.jsx("i",{className:"fa-solid fa-rotate-right"}),loading:T,onClick:()=>L(!0),children:i({en:"Reload",vi:"Tải lại"})}),x===r.INCOMING_REQUEST?c.jsxs(I.Compact,{children:[c.jsx(v,{title:i({en:"Accept ".concat(s.length," selected incoming requests"),vi:"Đồng ý ".concat(s.length," lời mời đang chọn")}),children:c.jsx(y,{disabled:s.length<=0,icon:c.jsx("i",{className:"fa-solid fa-check"}),onClick:()=>K(s),children:s.length})}),c.jsx(v,{title:i({en:"Decline ".concat(s.length," selected incoming requests"),vi:"Từ chối ".concat(s.length," lời mời đang chọn")}),children:c.jsx(y,{danger:!0,disabled:s.length<=0,icon:c.jsx("i",{className:"fa-regular fa-trash-can"}),onClick:()=>X(s),children:s.length})})]}):c.jsx(c.Fragment,{children:c.jsx(v,{title:i({en:"Cancel ".concat(a.length," selected outgoing requests"),vi:"Thu hồi ".concat(a.length," yêu cầu đang chọn")}),children:c.jsx(y,{danger:!0,disabled:a.length<=0,icon:c.jsx("i",{className:"fa-regular fa-trash-can"}),onClick:()=>Y(a),children:a.length})})}),c.jsx(v,{title:i({en:"View on Facebook",vi:"Xem trên Facebook"}),children:c.jsx(y,{icon:c.jsx("i",{className:"fa-solid fa-external-link"}),onClick:()=>window.open("https://www.facebook.com/friends/requests","_blank")})})]})},ee=[{title:"#",key:"recent",dataIndex:"recent",render:(e,t,s)=>t.recent+1,sorter:(e,t)=>e.recent-t.recent,width:50},{title:i({en:"Name",vi:"Tên"}),key:"name",dataIndex:"name",sorter:(e,t)=>(e.name||"").localeCompare(t.name||""),render:(e,t,s)=>c.jsxs(I,{align:"center",style:{maxWidth:300},children:[c.jsx(pe,{shape:"square",src:c.jsx(xe,{src:me(t.id),fallback:t.avatar}),size:50}),c.jsxs(I,{direction:"vertical",style:{marginLeft:"10px"},size:0,children:[c.jsx("a",{href:t.url,target:"_blank",children:c.jsx("b",{children:t.name})}),c.jsx("span",{style:{opacity:.5},children:t.id})]})]})},{title:i({en:"Description",vi:"Mô tả"}),key:"desc",dataIndex:"desc",sorter:(e,t)=>(e.desc||"").localeCompare(t.desc||""),render:(e,t,s)=>c.jsx("p",{style:{maxWidth:150,minWidth:100},children:t.desc}),width:"auto"},{title:i({en:"Time",vi:"Thời gian"}),key:"time",dataIndex:"time",sorter:(e,t)=>e.time-t.time,render:(e,t,s)=>t.time?c.jsxs(I,{direction:"vertical",children:[re(new Date(t.time).getTime()),c.jsx("span",{style:{opacity:.5},children:V(t.time)})]}):"-",onSearch:(e,t)=>oe(e,V(t)),width:180},{title:i({en:"Status",vi:"Trạng thái"}),key:"type",dataIndex:"type",filters:(x===r.INCOMING_REQUEST?[r.INCOMING_REQUEST,r.ACCEPTED,r.DECLINED]:[r.OUTGOING_REQUEST,r.CANCELED]).map(e=>{const t=b[e],s=[...g,...h].filter(a=>a.type===e).length;return{text:i(t)+" (".concat(s,")"),value:e}}),onFilter:(e,t)=>t.type===e,render:(e,t,s)=>{const a=b[t.type];return c.jsx(ge,{color:a==null?void 0:a.color,children:i(a)})},align:"right"},{title:i({en:"Action",vi:"Hành động"}),key:"action",dataIndex:"action",render:(e,t,s)=>t.type===r.INCOMING_REQUEST?c.jsxs(I.Compact,{children:[c.jsx(v,{title:i({en:"Accept",vi:"Đồng ý"}),children:c.jsx(y,{onClick:()=>P(t,!0),icon:c.jsx("i",{className:"fa-solid fa-check"})})}),c.jsx(v,{title:i({en:"Decline",vi:"Từ chối"}),children:c.jsx(y,{danger:!0,onClick:()=>M(t,!0),icon:c.jsx("i",{className:"fa-solid fa-trash-can"})})})]}):t.type===r.OUTGOING_REQUEST?c.jsx(I.Compact,{children:c.jsx(v,{title:i({en:"Cancel",vi:"Thu hồi"}),children:c.jsx(y,{danger:!0,onClick:()=>$(t,!0),icon:c.jsx("i",{className:"fa-solid fa-trash-can"})})})}):null,align:"right",width:100}];return c.jsxs("div",{style:{display:"flex",flexDirection:"column",width:"100%",height:"100%"},children:[c.jsx(Ce,{align:"middle",style:{margin:"16px"},children:c.jsx(_e.Title,{level:3,style:{margin:0},children:i({en:"Friend Requests",vi:"Lời mời kết bạn"})})}),c.jsx(H.Group,{defaultValue:x,buttonStyle:"solid",style:{marginBottom:10},children:[[r.INCOMING_REQUEST,g],[r.OUTGOING_REQUEST,h]].map(([e,t])=>{const s=t.length;return c.jsxs(H.Button,{value:e,onClick:()=>{k(e)},children:[c.jsx("i",{className:b[e].icon})," ",i(b[e])," ",s]},e)})}),c.jsx(le,{data:(x===r.INCOMING_REQUEST?g:h).map((e,t)=>({...e,recent:t})),columns:ee,renderTitle:Z,size:"small",searchable:!0,selectable:!0,keyExtractor:e=>e.id})]})}export{Ye as default};
