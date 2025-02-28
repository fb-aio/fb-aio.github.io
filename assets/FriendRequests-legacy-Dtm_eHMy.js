System.register(["./index-legacy-em8lsdjG.js","./MyTable-legacy-C2PnVgc8.js","./MyApp-legacy-eQhw2hld.js","./useAction-legacy-DuONo0x1.js","./useDevMode-legacy-BYIeeU0T.js","./Screen-legacy-FIKl_G0Y.js","./index-legacy-D-0jJ5JJ.js","./index-legacy-DQBtYbBr.js","./Table-legacy-CARq807C.js","./index-legacy-Biw8AYTn.js","./index-legacy-UV62jjIq.js","./TextArea-legacy-CEW8Buwg.js","./index-legacy-Bm24_6bO.js","./DownOutlined-legacy-BamLaL4c.js","./row-legacy-B8b_N6Zy.js","./responsiveObserver-legacy-BmkofPmJ.js","./index-legacy-CQy5lX3g.js","./EyeOutlined-legacy-DNGDLUHf.js","./SearchOutlined-legacy-DUbN1gtD.js","./Collapse-legacy-L-faHjfm.js","./index-legacy-BLxQvwtk.js","./useBreakpoint-legacy-yiP9kW6m.js","./index-legacy-BsRfKXoc.js","./addEventListener-legacy-DmWhHDoC.js","./index-legacy-BPJKA0z7.js","./PurePanel-legacy-YekLkw9D.js","./move-legacy-B0NLBr0J.js","./index-legacy-CPY_9gVV.js","./Dropdown-legacy-CV5NSkUR.js","./Pagination-legacy-BcBm3qH4.js"],(function(e,n){"use strict";var i,t,c,s,a,r,l,d,o,u,g,h,m,f,y,x,p,_,C,E,j,T,k,v,q,b,I;return{setters:[e=>{i=e.aD,t=e.aK,c=e.r,s=e.aG,a=e.aM,r=e.b4,l=e.b5,d=e.b3,o=e.aQ,u=e.bd},e=>{g=e.default},e=>{h=e.o,m=e.p,f=e.u,y=e.e,x=e.t,p=e.S,_=e.g,C=e.T,E=e.b,j=e.a},e=>{T=e.u},e=>{k=e.u},e=>{v=e.S},e=>{q=e.A},e=>{b=e.I},e=>{I=e.R},null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],execute:function(){e("default",(function(){const{ti:e}=t(),{message:i,notification:F}=f(),{onClickAction:O,onClickBulkActions:S}=T(),{devMode:G}=k(),[A,U]=y("FriendRequestType",n.INCOMING_REQUEST),[w,Q]=y("FriendRequests.incoming",[]),[M,L]=y("FriendRequests.outgoing",[]),[P,$]=y("FriendRequests.finished",!1),[B,W]=y("FriendRequests.loading",!1);c.useEffect((()=>{P||z(!1)}),[A,P]);const z=async(t=!1)=>{const c="FriendRequests:onReload";x(c);const a=[[n.INCOMING_REQUEST,N,Q,w],[n.OUTGOING_REQUEST,R,L,M]].map((async([n,a,r,l])=>{const d=D[n],o=c+n;try{const n=t?[]:l,c=n[n.length-1];let u=n.length,g=t?"":c?.cursor;for(;;){i.loading({key:o,content:e({en:`Loading ${d.en} friend requests...`,vi:`Đang tải yêu cầu kết bạn ${d.vi}...`})+u,duration:0});const t=await a(g),c=new Set(n.map((e=>e.id))),l=t.filter((e=>!c.has(e.id)));if(!l?.length)break;n.push(...l),r([...n]),u=n.length,g=n[n.length-1]?.cursor,await s(500)}i.success({key:o,content:e({en:"Loaded friend requests "+d.en+": ",vi:"Tải xong yêu cầu kết bạn "+d.vi+": "})+u})}catch(u){F.open({type:"error",message:e({en:"Failed to load friend requests "+d.en+": ",vi:"Lỗi tải yêu cầu kết bạn "+d.vi+": "}),description:u.message})}}));W(!0),$(!1),await Promise.all(a),W(!1),$(!0)},V=(i,t=!1)=>O({key:"FriendRequests:onClickDeclineFriendRequest",id:i.id,record:i,loadingText:n=>e({en:"Declining friend request...",vi:"Đang từ chối yêu cầu kết bạn..."})+" "+n.name,successText:n=>e({en:"Declined friend request ",vi:"Từ chối yêu cầu thành công "})+" "+n.name,failedText:n=>e({en:"Failed to decline friend request: ",vi:"Lỗi từ chối yêu cầu kết bạn: "})+" "+n.name,actionFn:()=>G?s(1e3):async function(e=""){const n=await h({variables:{input:{friend_requester_id:e,source:"friends_tab",actor_id:"me"},scale:2,refresh_num:0},doc_id:"4189738374386264"}),i=m(n);return i?.data?.friend_request_delete?.friend_requester?.id==e}(i.id),onSuccess:()=>{Q((e=>u(e,(e=>{const t=e.findIndex((e=>e.id===i.id));return t>=0&&(e[t].type=n.DECLINED),e}))))},needConfirm:t,confirmProps:{title:e({en:"Decline friend request?",vi:"Từ chối yêu cầu kết bạn?"}),text:i.name}}),H=(i,t=!1)=>O({key:"FriendRequests:onClickAcceptFriendRequest",id:i.id,record:i,loadingText:n=>e({en:"Accepting friend request...",vi:"Đang đồng ý yêu cầu kết bạn..."})+" "+n.name,successText:n=>e({en:"Accepted friend request ",vi:"Đã đồng ý yêu cầu kết bạn "})+" "+n.name,failedText:n=>e({en:"Failed to accept friend request: ",vi:"Lỗi đồng ý yêu cầu kết bạn: "})+" "+n.name,actionFn:()=>G?s(1e3):async function(e=""){const n=await h({variables:{input:{friend_requester_id:e,source:"friends_tab",actor_id:"me"},scale:2,refresh_num:0},doc_id:"3750307704981867"}),i=m(n);return i?.data?.friend_request_accept?.friend_requester?.id==e}(i.id),onSuccess:()=>{Q((e=>u(e,(e=>{const t=e.findIndex((e=>e.id===i.id));return t>=0&&(e[t].type=n.ACCEPTED),e}))))},needConfirm:t,confirmProps:{title:e({en:"Accept friend request?",vi:"Đồng ý yêu cầu kết bạn?"}),text:i.name}}),K=(i,t=!1)=>O({key:"FriendRequests:onClickCancelOutgoingRequest",id:i.id,record:i,loadingText:n=>e({en:"Canceling friend request...",vi:"Đang thu hồi yêu cầu kết bạn..."})+" "+n.name,successText:n=>e({en:"canceled friend request ",vi:"Đã thu hồi yêu cầu kết bạn "})+" "+n.name,failedText:n=>e({en:"Failed to cancel friend request: ",vi:"Lỗi thu hồi yêu cầu kết bạn: "})+" "+n.name,actionFn:()=>G?s(1e3):async function(e=""){const n=await h({fb_api_req_friendly_name:"FriendingCometFriendRequestCancelMutation",variables:{input:{attribution_id_v2:"FriendingCometFriendRequestsRoot.react,comet.friending.friendrequests,unexpected,1724509964587,135627,2356318349,,;FriendingCometRoot.react,comet.friending,tap_bookmark,1724509961317,200700,2356318349,,",cancelled_friend_requestee_id:e,friending_channel:"MANAGE_OUTGOING_REQUESTS",actor_id:"me"},scale:2},doc_id:"5247084515315799"}),i=m(n);return i?.data?.friend_request_cancel?.cancelled_friend_requestee?.id==e}(i.id),onSuccess:()=>{L((e=>u(e,(e=>{const t=e.findIndex((e=>e.id===i.id));return t>=0&&(e[t].type=n.CANCELED),e}))))},needConfirm:t,confirmProps:{title:e({en:"Cancel friend request?",vi:"Thu hồi yêu cầu kết bạn?"}),text:i.name}}),X=[{title:"#",key:"recent",dataIndex:"recent",render:(e,n,i)=>n.recent+1,sorter:(e,n)=>e.recent-n.recent,width:50},{title:e({en:"Name",vi:"Tên"}),key:"name",dataIndex:"name",sorter:(e,n)=>(e.name||"").localeCompare(n.name||""),render:(e,n,i)=>a.jsxs(p,{align:"center",style:{maxWidth:300},children:[a.jsx(q,{shape:"square",src:a.jsx(b,{src:_(n.id),fallback:n.avatar}),size:50}),a.jsxs(p,{direction:"vertical",style:{marginLeft:"10px"},size:0,children:[a.jsx("a",{href:n.url,target:"_blank",children:a.jsx("b",{children:n.name})}),a.jsx("span",{style:{opacity:.5},children:n.id})]})]})},{title:e({en:"Description",vi:"Mô tả"}),key:"desc",dataIndex:"desc",sorter:(e,n)=>(e.desc||"").localeCompare(n.desc||""),render:(e,n,i)=>a.jsx("p",{style:{maxWidth:150,minWidth:100},children:n.desc}),width:"auto"},{title:e({en:"Time",vi:"Thời gian"}),key:"time",dataIndex:"time",sorter:(e,n)=>e.time-n.time,render:(e,n,i)=>n.time?a.jsxs(p,{direction:"vertical",children:[r(new Date(n.time).getTime()),a.jsx("span",{style:{opacity:.5},children:l(n.time)})]}):"-",onSearch:(e,n)=>d(e,l(n)),width:180},{title:e({en:"Status",vi:"Trạng thái"}),key:"type",dataIndex:"type",filters:(A===n.INCOMING_REQUEST?[n.INCOMING_REQUEST,n.ACCEPTED,n.DECLINED]:[n.OUTGOING_REQUEST,n.CANCELED]).map((n=>{const i=D[n],t=[...w,...M].filter((e=>e.type===n)).length;return{text:e(i)+` (${t})`,value:n}})),onFilter:(e,n)=>n.type===e,render:(n,i,t)=>{const c=D[i.type];return a.jsx(C,{color:c?.color,children:e(c)})},align:"right"},{title:e({en:"Action",vi:"Hành động"}),key:"action",dataIndex:"action",render:(i,t,c)=>t.type===n.INCOMING_REQUEST?a.jsxs(p.Compact,{children:[a.jsx(E,{title:e({en:"Accept",vi:"Đồng ý"}),children:a.jsx(o,{onClick:()=>H(t,!0),icon:a.jsx("i",{className:"fa-solid fa-check"})})}),a.jsx(E,{title:e({en:"Decline",vi:"Từ chối"}),children:a.jsx(o,{danger:!0,onClick:()=>V(t,!0),icon:a.jsx("i",{className:"fa-solid fa-trash-can"})})})]}):t.type===n.OUTGOING_REQUEST?a.jsx(p.Compact,{children:a.jsx(E,{title:e({en:"Cancel",vi:"Thu hồi"}),children:a.jsx(o,{danger:!0,onClick:()=>K(t,!0),icon:a.jsx("i",{className:"fa-solid fa-trash-can"})})})}):null,align:"right",width:100}];return a.jsxs(v,{title:e({en:"Friend Requests",vi:"Lời mời kết bạn"}),children:[a.jsx(I.Group,{defaultValue:A,buttonStyle:"solid",style:{marginBottom:10},children:[[n.INCOMING_REQUEST,w],[n.OUTGOING_REQUEST,M]].map((([n,i])=>{const t=i.length;return a.jsxs(I.Button,{value:n,onClick:()=>{U(n)},children:[a.jsx("i",{className:D[n].icon})," ",e(D[n])," ",t]},n)}))}),a.jsx(g,{data:(A===n.INCOMING_REQUEST?w:M).map(((e,n)=>({...e,recent:n}))),columns:X,renderTitle:i=>{const t=i?.length?[...i]:[...A===n.INCOMING_REQUEST?w:M],c=t.filter((e=>e.type===n.INCOMING_REQUEST)),s=t.filter((e=>e.type===n.OUTGOING_REQUEST));return a.jsxs(a.Fragment,{children:[a.jsx(o,{type:"primary",icon:a.jsx("i",{className:"fa-solid fa-rotate-right"}),loading:B,onClick:()=>z(!0),children:e({en:"Reload",vi:"Tải lại"})}),A===n.INCOMING_REQUEST?a.jsxs(p.Compact,{children:[a.jsx(E,{title:e({en:`Accept ${c.length} selected incoming requests`,vi:`Đồng ý ${c.length} lời mời đang chọn`}),children:a.jsx(o,{disabled:c.length<=0,icon:a.jsx("i",{className:"fa-solid fa-check"}),onClick:()=>{return S({data:n=c,key:"FriendRequests:onClickAcceptSelectedIncomingFriendRequests",actionFn:H,loadingText:(n,i,t)=>e({en:"Accepting incoming requests...",vi:"Đang đồng ý lời mời..."}),successText:(n,i)=>e({en:"Accepted incoming requests done: ",vi:"Đồng ý lời mời xong: "}),successDescItem:e=>a.jsx("a",{target:"_blank",href:j(e.id),children:e.name}),confirmProps:{title:e({en:`Accept ${n.length} incoming requests`,vi:`Đồng ý ${n.length} lời mời kết bạn`}),text:e({en:"Are your sure want to bulk accept?",vi:"Bạn có chãc muốn đồng ý hàng loạt?"})}});var n},children:c.length})}),a.jsx(E,{title:e({en:`Decline ${c.length} selected incoming requests`,vi:`Từ chối ${c.length} lời mời đang chọn`}),children:a.jsx(o,{danger:!0,disabled:c.length<=0,icon:a.jsx("i",{className:"fa-regular fa-trash-can"}),onClick:()=>{return S({data:n=c,key:"FriendRequests:onClickDeclineSelectedIncomingFriendRequests",actionFn:V,loadingText:(n,i,t)=>e({en:"Declining incoming requests...",vi:"Đang từ chối lời mời..."}),successText:(n,i)=>e({en:"Declined friend requests",vi:"Từ chối lời mời kết bạn xong"}),successDescItem:e=>a.jsx("a",{target:"_blank",href:j(e.id),children:e.name}),confirmProps:{title:e({en:`Decline ${n.length} selected incoming requests`,vi:`Từ chối ${n.length} lời mời đang chọn`}),text:e({en:"Are your sure want to bulk decline?",vi:"Bản có chãc muốn từ chối hàng loạt?"})}});var n},children:c.length})})]}):a.jsx(a.Fragment,{children:a.jsx(E,{title:e({en:`Cancel ${s.length} selected outgoing requests`,vi:`Thu hồi ${s.length} yêu cầu đang chọn`}),children:a.jsx(o,{danger:!0,disabled:s.length<=0,icon:a.jsx("i",{className:"fa-regular fa-trash-can"}),onClick:()=>{return S({data:n=s,key:"FriendRequests:onClickCancelSelectedOutgoingFriendRequests",actionFn:K,loadingText:(n,i,t)=>e({en:"Canceling outgoing requests...",vi:"Đang thu hồi yêu cầu..."}),successText:(n,i)=>e({en:"Canceled outgoing requests",vi:"Thu hồi yêu cầu kết bạn xong"}),successDescItem:e=>a.jsx("a",{target:"_blank",href:j(e.id),children:e.name}),confirmProps:{title:e({en:`Cancel ${n.length} outgoing requests`,vi:`Thu hồi ${n.length} yêu cầu kết bạn`}),text:e({en:"Are your sure want to bulk cancel?",vi:"Bạn có chãc muốn thu hồi hàng loạt?"})}});var n},children:s.length})})}),a.jsx(E,{title:e({en:"View on Facebook",vi:"Xem trên Facebook"}),children:a.jsx(o,{icon:a.jsx("i",{className:"fa-solid fa-external-link"}),onClick:()=>window.open("https://www.facebook.com/friends/requests","_blank")})})]})},size:"small",searchable:!0,selectable:!0,keyExtractor:e=>e.id})]})}));var n=(e=>(e.INCOMING_REQUEST="INCOMING_REQUEST",e.OUTGOING_REQUEST="OUTGOING_REQUEST",e.DECLINED="DECLINED",e.ACCEPTED="ACCEPTED",e.CANCELED="CANCELED",e))(n||{});async function N(e=""){const n=await h({fb_api_req_friendly_name:"FriendingCometFriendRequestsSectionPanelPaginationQuery",variables:{count:20,cursor:e,scale:2},doc_id:"4843321999100134"}),t=m(n);console.log(t);const{edges:c=[],page_info:s={}}=i(t);return c.map(((e,n)=>({id:e?.node?.id,name:e?.node?.name,avatar:e?.node?.profile_picture?.uri,url:e?.node?.url,desc:e?.node?.social_context?.text,seen:e?.is_seen,time:1e3*(e?.time||0),type:e?.node?.friendship_status,cursor:e?.cursor})))}async function R(e=""){const n=await h({fb_api_req_friendly_name:"FriendingCometOutgoingRequestsDialogPaginationQuery",variables:{count:10,cursor:e,scale:2},doc_id:"4420916318007844"}),t=m(n),{edges:c=[],page_info:s={}}=i(t);return c.map(((e,n)=>({id:e?.node?.id,name:e?.node?.name,avatar:e?.node?.profile_picture?.uri,url:e?.node?.url,desc:e?.node?.social_context?.text,seen:e?.is_seen,time:1e3*(e?.time||0),type:e?.node?.friendship_status,cursor:e?.cursor})))}const D={[n.INCOMING_REQUEST]:{vi:"Đã nhận",en:"Incoming",color:"default",icon:"fa-solid fa-arrow-turn-down"},[n.OUTGOING_REQUEST]:{vi:"Đã gửi",en:"Outgoing",color:"default",icon:"fa-solid fa-arrow-turn-up"},[n.DECLINED]:{vi:"Đã từ chối",en:"Declined",color:"error",icon:"fa-solid fa-xmark"},[n.ACCEPTED]:{vi:"Đã chấp nhận",en:"Accepted",color:"success",icon:"fa-solid fa-check"},[n.CANCELED]:{vi:"Đã huỷ",en:"Canceled",color:"error",icon:"fa-solid fa-xmark"}}}}}));
