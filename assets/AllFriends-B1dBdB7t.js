const __vite__fileDeps=["./UploadModal-B05cGAss.js","./index-BFPfPAaZ.js","./index-BM_p-30O.css","./index-B6z3EJtd.js","./PurePanel-SxyVbxnL.js","./MyApp-BdpL4ZtE.js","./useBreakpoint-CBpI-EAH.js","./responsiveObserver-B_XlD0op.js","./addEventListener-Bjda6oWl.js","./TextArea-CJ5eWy81.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{am as de,ak as M,al as H,r as U,ao as s,ap as F,as as ue,au as O,aJ as he}from"./index-BFPfPAaZ.js";import{x as I,y as ge,e as ee,b as fe,a as me,c as pe,g as P,t as w,S as J,T as _,o as z,z as K}from"./MyApp-BdpL4ZtE.js";import{P as ke}from"./index-vuHwb1ab.js";import ve from"./MyTable-DNehxVlM.js";import{E as xe}from"./ExportButton-D-95AYUd.js";import{c as ye}from"./messages--esugPC0.js";import{R as Q}from"./row-lZScvilV.js";import{A as be}from"./index-BSMMBZXq.js";import{I as Fe}from"./index-B5v-xJix.js";import{T as X}from"./index-BzZUG1r-.js";import{P as D}from"./index-Crtya_Jo.js";import{T as je}from"./index-DimRadIr.js";import{P as V}from"./index-BKRoP6zU.js";import"./styleChecker-CUboSsV6.js";import"./addEventListener-Bjda6oWl.js";import"./index-BkSv2wHt.js";import"./PurePanel-SxyVbxnL.js";import"./TextArea-CJ5eWy81.js";import"./index-B_qEaDdp.js";import"./index-Bi9aqrJh.js";import"./Dropdown-BkgZXLuV.js";import"./useBreakpoint-CBpI-EAH.js";import"./responsiveObserver-B_XlD0op.js";import"./Pagination-CiSJ2nYJ.js";import"./index-B-l378Vl.js";import"./file-download-CstS00Qr.js";async function Ee({myUid:r,targetUid:l}){const y=await I({doc_id:"4936483286421335",variables:{id:l||r,query:"",scale:1}});try{const e=JSON.parse(y||"{}"),{edges:a=[]}=ge(e,!1)||{};return a.map(v=>{var j;return{uid:v.node.id,name:v.node.name,avatar:(j=v.node.photo)==null?void 0:j.uri,avatarLarge:ee(v.node.id)}})}catch{return[]}}async function we({myUid:r,targetUid:l}){var a;const y=await I({doc_id:"8752443744796374",variables:{input:{source:"friending_jewel",unfriended_user_id:l,actor_id:r,client_mutation_id:"8"},scale:1}}),e=JSON.parse(y||"{}");if((a=e.errors)!=null&&a.length)throw new Error(e.errors[0].message);return e}async function Ne({myUid:r,targetUid:l}){var a;const y=await I({doc_id:"6294978773852692",variables:{input:{attribution_id_v2:"FriendingCometRoot.react,comet.friending,tap_tabbar,1667288605315,127814,2356318349,",friend_requestee_ids:[l],people_you_may_know_location:"friends_center",refs:[null],source:"people_you_may_know",warn_ack_for_ids:[],actor_id:r,client_mutation_id:"9"},scale:2}}),e=JSON.parse(y);if((a=e.errors)!=null&&a.length)throw new Error(e.errors[0].message);return e}async function Ce({myUid:r,targetUid:l}){var a,v,j,f,N,E,C;const y=await I({doc_id:"5028133957233114",variables:{input:{client_mutation_id:"1",actor_id:r,user_id:l}}}),e=JSON.parse(y||"{}");if((a=e.errors)!=null&&a.length)throw new Error(e.errors[0].message);if(((f=(j=(v=e==null?void 0:e.data)==null?void 0:v.user_poke)==null?void 0:j.user)==null?void 0:f.poke_status)!="PENDING")throw new Error("Failed to poke friend: "+((C=(E=(N=e==null?void 0:e.data)==null?void 0:N.user_poke)==null?void 0:E.user)==null?void 0:C.poke_status));return e}async function _e({myUid:r,cursor:l=null}){let y=await I({doc_id:"4186250744800382",variables:{count:8,cursor:l,scale:2,id:btoa(`app_collection:${r}:2356318349:2`)}});return JSON.parse(y)}async function Te({myUid:r,onFound:l,onPage:y}){var N,E,C;let e=[],a=null,v=1,j=0,f=0;for(;;){const Y=await _e({myUid:r,cursor:a}),{edges:T,page_info:A}=Y.data.node.pageItems;for(let m of T)if(!((N=m==null?void 0:m.node)!=null&&N.subtitle_text)){const p={uid:m.node.node.id,url:m.node.url,name:m.node.title.text,avatar:(E=m.node.image)==null?void 0:E.uri,avatarLarge:ee(m.node.id)};if(!/^\d+$/.exec(p.uid))try{let B=atob(p.uid);p.uid=((C=/\d+/.exec(B))==null?void 0:C[0])||p.uid}catch(B){console.log(B)}e.push(p),f++,typeof l=="function"&&await l(p,e)}j+=T.length,await y(v,j,f);const{has_next_page:$,end_cursor:R}=A;if(!$)break;a=R,v++}return e}const De=U.lazy(()=>ue(()=>import("./UploadModal-B05cGAss.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9]),import.meta.url)),{Title:Ue}=je,d={FRIEND:"Friend",POKED:"Poked",UNFRIENDED:"Unfriended",REQUESTED:"Requested friend",NEW:"New friend",LOCKED:"Locked",BLOCKED_MESSAGE:"Blocked messages"},$e={[d.POKED]:"green",[d.LOCKED]:"orange",[d.UNFRIENDED]:"red",[d.BLOCKED_MESSAGE]:"red",[d.NEW]:"blue",[d.REQUESTED]:"pink"},Z=r=>{switch(r){case d.FRIEND:return{en:"Friend",vi:"Bạn bè"};case d.POKED:return{en:"Poked",vi:"Đã chọc"};case d.UNFRIENDED:return{en:"Unfriended",vi:"Đã huỷ kết bạn"};case d.REQUESTED:return{en:"Requested friend",vi:"Đã gửi kết bạn"};case d.NEW:return{en:"New friend",vi:"Bạn mới"};case d.LOCKED:return{en:"Locked",vi:"Bị khoá"};case d.BLOCKED_MESSAGE:return{en:"Blocked messages",vi:"Bị chặn tin nhắn"};default:return r}},Ae=r=>{const l=(r==null?void 0:r.statuses)||[];return!l.includes(d.REQUESTED)&&(l.includes(d.NEW)||l.includes(d.UNFRIENDED))},Re=r=>{const l=(r==null?void 0:r.statuses)||[];return!l.includes(d.NEW)&&!l.includes(d.UNFRIENDED)};function an(){const{message:r,notification:l}=fe(),y=de(),{ti:e}=me(),a=M(H.profile),v=M(H.friendsByUid),j=M(H.setFriendsByUid),[f,N]=pe("AllFriends.data",[]),E=U.useMemo(()=>(f==null?void 0:f.map((n,i)=>({...n,recent:i,url:P(n.uid)})))||[],[f]),[C,Y]=U.useState(!1),[T,A]=U.useState(0),[$,R]=U.useState(0),m=U.useRef(null);U.useEffect(()=>{a!=null&&a.uid&&!(f!=null&&f.length)&&q()},[]);const p=(n,i,t=!1,o=!1)=>{N(h=>he(h,c=>{Array.isArray(n)||(n=[n]);let b=[];for(let x of n){let g=c.findIndex(L=>L.uid==((x==null?void 0:x.uid)||x)),k=c[g];k?(k.statuses||(k.statuses=[]),!t&&!k.statuses.includes(i)?k.statuses.push(i):(Array.isArray(i)||(i=[i]),k.statuses=i),o&&b.push({index:g,data:k})):o?c.unshift({...x,statuses:[i]}):c.push({...x,statuses:[i]})}for(let{index:x,data:g}of b)c.splice(x,1),c.unshift(g);return c}))},B=(n=f)=>{let i=!1;const t=(v==null?void 0:v[a.uid])||[],o=n.map(g=>g.uid),h=t.map(g=>g.uid),u=new Set(o),c=new Set(h),b=o.filter(g=>!c.has(g)),x=h.filter(g=>!u.has(g));b.length&&(i=!0,console.log("New friends: ",b),p(b,d.NEW,!0),t!=null&&t.length?l.open({type:"success",duration:0,message:e({en:`Find ${b.length} new friends`,vi:`Tìm thấy ${b.length} bạn mới`}),description:s.jsx("div",{style:{maxHeight:300,overflowY:"auto",overflowX:"hidden"},children:s.jsx("ol",{children:b.map(g=>{const k=n.find(L=>L.uid==g);return s.jsx("li",{children:s.jsx("a",{href:P(g),target:"_blank",children:(k==null?void 0:k.name)||g})},g)})})})}):l.open({type:"success",duration:0,message:e({en:`Saved friends to cache: ${b.length}`,vi:`Đã lưu danh sách bạn bè: ${b.length}`}),description:e({en:"Will notify if you have new friends / someone unfriended to you in future",vi:"Sẽ thông báo nếu có bạn mới / người huỷ kết bạn với bạn trong tương lai"})})),x.length&&(i=!0,console.log("Deleted friends: ",x),l.open({type:"info",duration:0,message:e({en:`Find ${x.length} unfriended`,vi:`Có ${x.length} người huỷ kết bạn`}),description:s.jsx("div",{style:{maxHeight:300,overflowY:"auto",overflowX:"hidden"},children:s.jsx("ol",{children:x.map(g=>{const k=t.find(L=>L.uid==g);return s.jsx("li",{children:s.jsx("a",{href:P(g),target:"_blank",children:(k==null?void 0:k.name)||g})},g)})})})})),i&&j(a==null?void 0:a.uid,n.map(g=>({uid:g.uid,name:g.name})))},q=()=>{if(C)return;w("AllFriends:onClickReload");const n="onClickReload";r.loading({key:n,content:e({en:"Fetching friends...",vi:"Đang tải bạn bè..."})},0),Y(!0),Ee({myUid:a==null?void 0:a.uid}).then(i=>{if(B(i),!(i!=null&&i.length))return r.error(e({en:"No data to show",vi:"Không có dữ liệu"}));N(i),console.log(i),r.success({key:n,content:e({en:"Fetch friends completed",vi:"Tải xong bạn bè"})}),m.current.clearFilter()}).catch(i=>{r.error({key:n,content:e({en:"Failed to fetch friends",vi:"Lỗi tải bạn bè"})+": "+i.message}),console.log(i)}).finally(()=>{Y(!1)})},G=async n=>{w("AllFriends:onClickUnfriendOne");const i="onClickUnfriendOne"+n.uid;try{return r.loading({key:i,content:e({en:"Unfriending...",vi:"Đang huỷ kết bạn..."})+" "+n.name},0),await we({myUid:a==null?void 0:a.uid,targetUid:n.uid}),r.success({key:i,content:e({en:"Unfriend completed",vi:"Đã huỷ kết bạn"})+": "+n.name}),p(n,d.UNFRIENDED),!0}catch(t){return r.error({key:i,content:e({en:"Failed to unfriend",vi:"Lỗi huỷ kết bạn"})+": "+n.name+": "+t.message}),console.log(t),!1}},ne=async n=>{w("AllFriends:onClickUnfriendSelected");const i=new Set;for(let o of n)await G(o)&&i.add(o.uid),await K(500);const t=i.size+"/"+n.length;l.open({type:"success",message:e({en:"Success",vi:"Thành công"}),description:e({en:`Unfriended completed ${t} friends`,vi:`Đã huỷ kết bạn với ${t} người`}),duration:0})},W=async n=>{w("AllFriends:onClickPokeFriend");const i="onClickPokeFriend"+n.uid;try{return r.loading({key:i,content:e({en:"Poking...",vi:"Đang chọc..."})+" "+n.name},0),await Ce({myUid:a==null?void 0:a.uid,targetUid:n.uid}),r.success({key:i,content:e({en:"Poke completed",vi:"Chọc thành công"})+": "+n.name}),p(n,d.POKED),!0}catch(t){return r.error({key:i,content:e({en:"Failed to poke",vi:"Chọc thất bại"})+": "+n.name+": "+t.message}),console.log(t),!1}},ie=async n=>{w("AllFriends:onClickPokeSelected");const i=new Set;for(let o of n)await W(o)&&i.add(o.uid),await K(500);const t=i.size+"/"+n.length;l.open({type:"success",message:e({en:"Success",vi:"Thành công"}),description:e({en:`Poke completed ${t} friends`,vi:`Đã chọc ${t} bạn`}),duration:0})},S=async n=>{w("AllFriends:onClickAddFriend");const i="onClickAddFriend"+n.uid;try{return r.loading({key:i,content:e({en:"Sending friend request...",vi:"Đang gửi kết bạn..."})+" "+n.name},0),await Ne({myUid:a==null?void 0:a.uid,targetUid:n.uid}),r.success({key:i,content:e({en:"Send friend request success",vi:"Gửi kết bạn thành công"})+": "+n.name}),p(n,d.REQUESTED),!0}catch(t){return r.error({key:i,content:e({en:"Failed to send friend request",vi:"Lỗi gửi kết bạn"})+": "+t.message}),!1}},se=async n=>{w("AllFriends:onClickAddFriendSelected");const i=new Set;for(let o of n)await S(o)&&i.add(o.uid),await K(500);const t=i.size+"/"+n.length;l.open({type:"success",message:e({en:"Success",vi:"Thành công"}),description:e({en:`Sent friend request success ${t} users`,vi:`Gửi kết bạn thành công với ${t} người`}),duration:0})},te=async()=>{if(!T){w("AllFriends:onClickFindLockedFriends"),m.current.clearFilter(),A("..."),r.loading(e({en:"Finding locked friends...",vi:"Đang tìm bạn bè bị khoá..."}));try{const n=await Te({myUid:a==null?void 0:a.uid,onFound:(i,t)=>{r.info(e({en:"Found locked friend",vi:"Tìm thấy bạn bè bị khoá"})+`: ${i.name} (${t.length})`),p(i,d.LOCKED)},onPage:(i,t,o)=>{A(`${o}/${t} - ${~~(t/f.length*100)}%`)}});if(n!=null&&n.length){m.current.setDataSelected(n);const i=n.length;l.open({type:"success",message:e({en:"Success",vi:"Thành công"}),description:e({en:`Found ${i} locked friends`,vi:`Tìm thấy ${i} bạn bè bị khoá`}),duration:0})}else l.open({type:"info",message:e({en:"Success",vi:"Thành công"}),description:e({en:"No locked friends found",vi:"Không có ai bị khoá"})})}catch(n){l.open({type:"error",message:e({en:"Error",vi:"Lỗi"}),description:e({en:"Failed to find locked friends",vi:"Lỗi tìm bạn bè bị khoá"})+": "+n.message,duration:0}),console.log(n)}A(!1)}},oe=async()=>{if($)return;w("AllFriends:onClickFindBlockedMessages"),R(!0);const n=m.current.getDataSelected(),i=n!=null&&n.length?n:f,t="onClickFindBlockedMessages";r.loading({key:t,content:e({en:"Finding blocked messages...",vi:"Đang tìm bạn bè chặn tin nhắn"})},0);const o=[];for(let u=0;u<i.length;u++){const c=i[u];R(`${o.length}/${u+1} - ${~~(u/i.length*100)}%`),await ye(c.uid)||(o.push(c),m.current.setDataSelected(o),p(c,d.BLOCKED_MESSAGE),r.success({key:t,content:e({en:"Found",vi:"Tìm thấy"})+" "+c.name+" ("+o.length+")"}))}R(!1);const h=o.length?e({en:`Found ${o.length} friends blocking your messages`,vi:`Tìm thấy ${o.length} bạn bè chặn tin nhắn`}):e({en:"No one block messages you",vi:"Không ai chặn tin nhắn của bạn"});r.success({key:t,content:h}),l.open({type:"success",message:e({en:"Success",vi:"Thành công"}),description:h,duration:0})},re=async n=>{if(!n)return r.error(e({en:"File empty",vi:"File rỗng"}));w("AllFriends:onUploadFriendsFile");try{const i=JSON.parse(n);if(!(i!=null&&i.length))return r.error(e({en:"No data",vi:"Không có dữ liệu"}));const t=new Set(i.map(c=>c.uid)),o=[];for(let c of f)t.has(c.uid)||o.push(c);const h=new Set(f.map(c=>c.uid)),u=[];for(let c of i)h.has(c.uid)||u.push(c);p(o,d.NEW,!1,!0),p(u,d.UNFRIENDED,!1,!0),[{title:e({en:`Found ${o.length} new friends`,vi:`Tìm thấy ${o.length} bạn mới`}),text:s.jsx("div",{style:{maxHeight:300,overflowY:"auto",overflowX:"hidden"},children:s.jsx("ol",{children:o.map(c=>s.jsx("li",{children:s.jsx("a",{href:P(c.uid),target:"_blank",children:c.name})},c.uid))})})},{title:e({en:`Found ${u.length} unfriended`,vi:`Tìm thấy ${u.length} người huỷ kết bạn`}),text:s.jsx("div",{style:{maxHeight:300,overflowY:"auto",overflowX:"hidden"},children:s.jsx("ol",{children:u.map(c=>s.jsx("li",{children:s.jsx("a",{href:P(c.uid),target:"_blank",children:c.name})},c.uid))})})}].forEach(({title:c,text:b})=>l.open({type:"success",message:c,description:b,duration:0})),(u.length||o.length)&&m.current.setDataSelected([...u,...o])}catch(i){r.error(i.message)}},ce=n=>{y("/bulk-downloader",{state:{targetId:n,platform:ke.Facebook}})},ae=[{title:"#",key:"recent",dataIndex:"recent",sorter:(n,i)=>n.recent-i.recent,render:(n,i,t)=>i.recent+1,width:70,align:"center",headerAlign:"center"},{title:e({en:"Name",vi:"Tên"}),dataIndex:"name",key:"name",sorter:(n,i)=>n.name.localeCompare(i.name),render:(n,i,t)=>s.jsxs(Q,{align:"middle",style:{maxWidth:300},children:[s.jsx(be,{shape:"square",src:s.jsx(Fe,{src:i.avatarLarge,fallback:i.avatar}),size:50}),s.jsx("a",{href:i.url,target:"_blank",style:{marginLeft:"10px"},children:s.jsx("b",{children:i.name})})]}),width:"auto"},{title:e({en:"Friend status",vi:"Trạng thái"}),dataIndex:"status",key:"status",width:150,filters:Object.entries(d).map(([n,i])=>({text:e(Z(i))+" ("+f.filter(t=>{var o,h;return((o=t.statuses)==null?void 0:o.includes(i))||i===d.FRIEND&&!((h=t.statuses)!=null&&h.length)}).length+")",value:i})),onFilter:(n,i)=>{var t,o;return((t=i.statuses)==null?void 0:t.includes(n))||n==d.FRIEND&&!((o=i.statuses)!=null&&o.length)},render:(n,i,t)=>{var o;return(o=i==null?void 0:i.statuses)!=null&&o.length?i.statuses.map(h=>({key:h,value:e(Z(h))})).map(({key:h,value:u})=>s.jsx(X,{color:$e[h],children:u},h)):e({en:"Friend",vi:"Bạn bè"})}},{title:"Uid",dataIndex:"uid",key:"uid",sorter:(n,i)=>n.uid>i.uid,width:150},{title:e({en:"Action",vi:"Hành động"}),dataIndex:"action",key:"download",render:(n,i,t)=>{var o,h;return s.jsxs(J.Compact,{children:[s.jsx(_,{title:e({en:"Bulk Downloader",vi:"Tải hàng loạt"}),children:s.jsx(F,{type:"default",onClick:()=>ce(i.uid),icon:s.jsx("i",{className:"fa-solid fa-download"})})}),s.jsx(_,{title:e({en:"Poke",vi:"Chọc"}),children:s.jsx(D,{title:e({en:"Poke friend",vi:"Chọc bạn bè"}),description:e({en:"Are you sure want to poke this friend?",vi:"Bạn có chắc muốn chọc người này?"}),onConfirm:()=>W(i),okText:e({en:"Yes",vi:"Chọc mạnh vào"}),cancelText:e({en:"No",vi:"Tha"}),children:s.jsx(F,{type:"default",icon:s.jsx("i",{className:"fa-regular fa-hand-point-right"})})})}),(o=i.statuses)!=null&&o.includes(d.UNFRIENDED)||(h=i.statuses)!=null&&h.includes(d.NEW)?s.jsx(_,{title:e({en:"Request friend",vi:"Gửi kết bạn"}),children:s.jsx(D,{title:e({en:"Request make friend",vi:"Yêu cầu kết bạn"}),description:e({en:"Are you sure want to request make friend with this user?",vi:"Bạn có chắc muốn gửi yêu cầu kết bạn cho người này?"}),onConfirm:()=>S(i),okText:e({en:"Yes",vi:"Gửi"}),cancelText:e({en:"No",vi:"Huỷ"}),children:s.jsx(F,{type:"default",icon:s.jsx("i",{className:"fa-solid fa-user-plus"})})})}):s.jsx(_,{title:e({en:"Unfriend",vi:"Huỷ kết bạn"}),children:s.jsx(D,{title:e({en:"Unfriend user",vi:"Huỷ kết bạn"}),description:e({en:"Are you sure want to unfriend this user?",vi:"Bạn có chắc muốn huỷ kết bạn với người này?"}),onConfirm:()=>G(i),okText:e({en:"Yes",vi:"Bye bye"}),cancelText:e({en:"No",vi:"Tha"}),children:s.jsx(F,{danger:!0,type:"primary",icon:s.jsx("i",{className:"fa-solid fa-trash-can"})})})})]})},width:150,align:"right"}],le=n=>{var o,h;const i=(o=n==null?void 0:n.filter)==null?void 0:o.call(n,Ae),t=(h=n==null?void 0:n.filter)==null?void 0:h.call(n,Re);return s.jsxs(s.Fragment,{children:[s.jsx(F,{type:"primary",icon:C?s.jsx("i",{className:"fa-solid fa-rotate-right fa-spin"}):s.jsx("i",{className:"fa-solid fa-rotate-right"}),onClick:q,children:e({en:"Reload",vi:"Tải lại"})}),s.jsx(xe,{data:n.length?n:f,options:[{key:"uid",label:".txt (friend uid)",prepareData:u=>({fileName:"friends_"+O().format("YYYY-MM-DD-HHmmss")+".txt",data:u.map(c=>c.uid).join(`
`)})},{key:"uid_name",label:".csv (friend uid+name)",prepareData:u=>({fileName:"friends_uid_name_"+O().format("YYYY-MM-DD-HHmmss")+".csv",data:z(u.map(c=>({uid:c.uid,name:c.name})))})},{key:"json",label:".json",prepareData:u=>({fileName:"friends"+O().format("YYYY-MM-DD-HHmmss")+".json",data:JSON.stringify(u,null,4)})},{key:"csv",label:".csv",prepareData:u=>({fileName:"friends"+O().format("YYYY-MM-DD-HHmmss")+".csv",data:z(u)})}]}),s.jsxs(J.Compact,{children:[s.jsx(_,{title:e({en:"Find locked friends",vi:"Lọc bạn bè bị khoá"}),children:s.jsxs(F,{loading:T,icon:s.jsx("i",{className:"fa-solid fa-lock"}),onClick:te,children:[e({en:"Locked friends",vi:"Bạn bè bị khoá"}),T?` (${T})`:""]})}),s.jsx(V,{title:e({en:"Check who is blocking your messages",vi:"Xem ai đang chặn tin nhắn của bạn"}),content:n!=null&&n.length?e({en:`Check ${n==null?void 0:n.length} friends selected`,vi:`Kiểm tra ${n==null?void 0:n.length} người được chọn`}):e({en:"TIP: You can select friends to check instead of check all",vi:"TIP: Bạn có thể chọn bạn bè để kiểm tra, thay vì kiểm tra tất cả"}),children:s.jsx(D,{title:e(e({en:"Check who is blocking your messages",vi:"Xem ai đang chặn tin nhắn của bạn"})),description:e({en:`Are you sure to check ${(n==null?void 0:n.length)||E.length} friends?`,vi:`Bạn có chắc muốn kiểm tra ${(n==null?void 0:n.length)||E.length} bạn bè?`}),onConfirm:oe,okText:e({en:"Yes",vi:"Kiểm tra"}),cancelText:e({en:"No",vi:"Huỷ"}),children:s.jsxs(F,{loading:$,icon:s.jsx("i",{className:"fa-solid fa-comment-slash"}),children:[e({en:"Blocked messages",vi:"Bị chặn tin nhắn"}),$?` (${$})`:""]})})}),s.jsx(De,{accept:".json",title:e({en:"Upload friends file",vi:"Tải lên file bạn bè đã lưu"}),text:e({en:"Click or drag file to this area to upload",vi:"Click chọn hoặc kéo thả file vào đây"}),hint:e({en:"Support only .json backup file",vi:"Chỉ hỗ trợ file .json được xuất từ trang này"}),onSubmit:re,renderButton:({showModal:u})=>s.jsx(V,{title:e({en:"Check who unfriend you",vi:"Kiểm tra ai huỷ kết bạn với bạn"}),content:e({en:"How it work: Export friends data to file, then compare it later",vi:"Cách hoạt động: Lưu danh sách bạn bè ra file trước, sau đó so sánh"}),children:s.jsx(F,{icon:s.jsx("i",{className:"fa-solid fa-user-minus"}),onClick:u,children:e({en:"Detect unfriend",vi:"Ai huỷ kết bạn"})})})}),n!=null&&n.length?s.jsxs(s.Fragment,{children:[s.jsx(_,{title:e({en:`Poke ${n.length} selected friends`,vi:`Chọc ${n.length} người được chọn`}),children:s.jsx(D,{title:e({en:`Poke ${n.length} selected friends`,vi:`Chọc ${n.length} người được chọn`}),description:e({en:"Are you sure to poke these friends?",vi:"Bạn có chắc muốn chọc những người này?"}),onConfirm:()=>ie(n),okText:e({en:"Yes",vi:"Chọc mạnh vào"}),cancelText:e({en:"No",vi:"Tha"}),children:s.jsx(F,{type:"default",icon:s.jsx("i",{className:"fa-solid fa-hand-point-right"}),children:n.length?" "+n.length:""})})}),(i==null?void 0:i.length)>0?s.jsx(_,{title:e({en:`Request friend with ${i.length} selected users`,vi:`Gửi kết bạn với ${i.length} người được chọn`}),children:s.jsx(D,{title:e({en:`Request friend with ${i.length} selected users`,vi:`Gửi kết bạn với ${i.length} người được chọn`}),description:e({en:"Are you sure to send friend request to these users?",vi:"Bạn có chắc muốn gửi lời mời kết bạn cho những người này?"}),onConfirm:()=>se(i),okText:e({en:"Yes",vi:"Gửi"}),cancelText:e({en:"No",vi:"Huỷ"}),children:s.jsx(F,{icon:s.jsx("i",{className:"fa-solid fa-user-plus"}),children:i.length})})}):null,(t==null?void 0:t.length)>0?s.jsx(_,{title:e({en:`Unfriend ${t.length} selected friends`,vi:`Huỷ kết bạn ${t.length} người được chọn`}),children:s.jsx(D,{title:e({en:`Unfriend ${t.length} selected friends`,vi:`Huỷ kết bạn ${t.length} người được chọn`}),description:e({en:"Are you sure to unfriend these friends?",vi:"Bạn có chắc muốn huỷ kết bạn những người này?"}),onConfirm:()=>ne(t),okText:e({en:"Yes",vi:"Bye bye"}),cancelText:e({en:"No",vi:"Tha"}),children:s.jsx(F,{danger:!0,type:"primary",icon:s.jsx("i",{className:"fa-solid fa-trash-can"}),children:t.length})})}):null]}):null]})]})};return s.jsxs("div",{style:{display:"flex",flexDirection:"column",width:"100%",height:"100%"},children:[s.jsxs(Q,{align:"middle",style:{margin:"16px"},children:[s.jsx(Ue,{level:3,style:{margin:0},children:e({en:"Friends manager",vi:"Quản lý bạn bè"})}),s.jsx(X,{style:{marginLeft:"10px",fontWeight:"bold",color:"#888"},children:E.length})]}),s.jsx(ve,{ref:m,data:E,columns:ae,size:"small",searchable:!0,selectable:!0,keyExtractor:n=>n.uid,style:{flex:1,maxHeight:"100%"},renderTitle:le})]})}export{an as default};