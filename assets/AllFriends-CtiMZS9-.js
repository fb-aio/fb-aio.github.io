const __vite__fileDeps=["./UploadModal-JSCYYQje.js","./index-iYEoUais.js","./index-BM_p-30O.css","./index-BvBUtOj5.js","./PurePanel-C_6aPJ2n.js","./MyApp-BeNpzLox.js","./useBreakpoint-BJS8X5fG.js","./responsiveObserver-CtJ0AXkr.js","./addEventListener-vhFvsNOc.js","./TextArea-CdxmgMaO.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{al as de,am as ue,ao as M,ap as H,r as $,aq as s,ar as F,au as he,aw as O,aJ as ge}from"./index-iYEoUais.js";import{p as I,q as fe,b as ee,a as me,g as B,t as w,S as Q,T as _,o as S,r as K}from"./MyApp-BeNpzLox.js";import{P as ke}from"./index-vuHwb1ab.js";import pe from"./MyTable-GqSuKvSf.js";import{E as ve}from"./ExportButton-Cnq1pBpA.js";import{u as xe}from"./useCacheState-DNofdqZ0.js";import{c as be}from"./messages-C4JnH8Ql.js";import{R as z}from"./row-D4460SdQ.js";import{A as ye}from"./index-DdQCCbeI.js";import{I as Fe}from"./index-DYyTgVfs.js";import{T as X}from"./index-CLpQG5nT.js";import{P as U}from"./index-ZQJBXtg-.js";import{T as je}from"./index-BDdtIE4G.js";import{A as Ee}from"./index-C1dO3nll.js";import{P as V}from"./index-CU7to8XA.js";import"./styleChecker-BW8nSwfH.js";import"./addEventListener-vhFvsNOc.js";import"./index-Dlm3U__6.js";import"./PurePanel-C_6aPJ2n.js";import"./TextArea-CdxmgMaO.js";import"./index-BOXZdypA.js";import"./index-ClPVugYd.js";import"./Dropdown-gPku7YVx.js";import"./useBreakpoint-BJS8X5fG.js";import"./responsiveObserver-CtJ0AXkr.js";import"./Pagination-B3Pb7XGe.js";import"./file-download-DhHRyVA4.js";async function we({myUid:r,targetUid:l}){const b=await I({doc_id:"4936483286421335",variables:{id:l||r,query:"",scale:1}});try{const e=JSON.parse(b||"{}"),{edges:a=[]}=fe(e,!1)||{};return a.map(v=>{var j;return{uid:v.node.id,name:v.node.name,avatar:(j=v.node.photo)==null?void 0:j.uri,avatarLarge:ee(v.node.id)}})}catch{return[]}}async function Ce({myUid:r,targetUid:l}){var a;const b=await I({doc_id:"8752443744796374",variables:{input:{source:"friending_jewel",unfriended_user_id:l,actor_id:r,client_mutation_id:"8"},scale:1}}),e=JSON.parse(b||"{}");if((a=e.errors)!=null&&a.length)throw new Error(e.errors[0].message);return e}async function Ne({myUid:r,targetUid:l}){var a;const b=await I({doc_id:"6294978773852692",variables:{input:{attribution_id_v2:"FriendingCometRoot.react,comet.friending,tap_tabbar,1667288605315,127814,2356318349,",friend_requestee_ids:[l],people_you_may_know_location:"friends_center",refs:[null],source:"people_you_may_know",warn_ack_for_ids:[],actor_id:r,client_mutation_id:"9"},scale:2}}),e=JSON.parse(b);if((a=e.errors)!=null&&a.length)throw new Error(e.errors[0].message);return e}async function _e({myUid:r,targetUid:l}){var a,v,j,f,C,E,N;const b=await I({doc_id:"5028133957233114",variables:{input:{client_mutation_id:"1",actor_id:r,user_id:l}}}),e=JSON.parse(b||"{}");if((a=e.errors)!=null&&a.length)throw new Error(e.errors[0].message);if(((f=(j=(v=e==null?void 0:e.data)==null?void 0:v.user_poke)==null?void 0:j.user)==null?void 0:f.poke_status)!="PENDING")throw new Error("Failed to poke friend: "+((N=(E=(C=e==null?void 0:e.data)==null?void 0:C.user_poke)==null?void 0:E.user)==null?void 0:N.poke_status));return e}async function Te({myUid:r,cursor:l=null}){let b=await I({doc_id:"4186250744800382",variables:{count:8,cursor:l,scale:2,id:btoa(`app_collection:${r}:2356318349:2`)}});return JSON.parse(b)}async function De({myUid:r,onFound:l,onPage:b}){var C,E,N;let e=[],a=null,v=1,j=0,f=0;for(;;){const Y=await Te({myUid:r,cursor:a}),{edges:T,page_info:L}=Y.data.node.pageItems;for(let k of T)if(!((C=k==null?void 0:k.node)!=null&&C.subtitle_text)){const p={uid:k.node.node.id,url:k.node.url,name:k.node.title.text,avatar:(E=k.node.image)==null?void 0:E.uri,avatarLarge:ee(k.node.id)};if(!/^\d+$/.exec(p.uid))try{let P=atob(p.uid);p.uid=((N=/\d+/.exec(P))==null?void 0:N[0])||p.uid}catch(P){console.log(P)}e.push(p),f++,typeof l=="function"&&await l(p,e)}j+=T.length,await b(v,j,f);const{has_next_page:A,end_cursor:R}=L;if(!A)break;a=R,v++}return e}const Ue=$.lazy(()=>he(()=>import("./UploadModal-JSCYYQje.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9]),import.meta.url)),{Title:$e}=je,u={POKED:"Poked",UNFRIENDED:"Unfriended",REQUESTED:"Requested friend",NEW:"New friend",LOCKED:"Locked",BLOCKED_MESSAGE:"Blocked messages"},Ae={[u.POKED]:"green",[u.LOCKED]:"orange",[u.UNFRIENDED]:"red",[u.BLOCKED_MESSAGE]:"red",[u.NEW]:"blue",[u.REQUESTED]:"pink"},Z=r=>{switch(r){case u.POKED:return{en:"Poked",vi:"Đã chọc"};case u.UNFRIENDED:return{en:"Unfriended",vi:"Đã huỷ kết bạn"};case u.REQUESTED:return{en:"Requested friend",vi:"Đã gửi kết bạn"};case u.NEW:return{en:"New friend",vi:"Bạn mới"};case u.LOCKED:return{en:"Locked",vi:"Bị khoá"};case u.BLOCKED_MESSAGE:return{en:"Blocked messages",vi:"Bị chặn tin nhắn"};default:return r}},Be=r=>{const l=(r==null?void 0:r.statuses)||[];return!l.includes(u.REQUESTED)&&(l.includes(u.NEW)||l.includes(u.UNFRIENDED))},Le=r=>{const l=(r==null?void 0:r.statuses)||[];return!l.includes(u.NEW)&&!l.includes(u.UNFRIENDED)};function dn(){const{message:r,notification:l}=de.useApp(),b=ue(),{ti:e}=me(),a=M(H.profile),v=M(H.friendsByUid),j=M(H.setFriendsByUid),[f,C]=xe("AllFriends.data",[]),E=$.useMemo(()=>(f==null?void 0:f.map((n,i)=>({...n,recent:i,url:B(n.uid)})))||[],[f]),[N,Y]=$.useState(!1),[T,L]=$.useState(0),[A,R]=$.useState(0),k=$.useRef(null);$.useEffect(()=>{a!=null&&a.uid&&!(f!=null&&f.length)&&q()},[]);const p=(n,i,t=!1,o=!1)=>{C(c=>ge(c,g=>{Array.isArray(n)||(n=[n]);let y=[];for(let x of n){let d=g.findIndex(D=>D.uid==((x==null?void 0:x.uid)||x)),m=g[d];m?(m.statuses||(m.statuses=[]),!t&&!m.statuses.includes(i)?m.statuses.push(i):(Array.isArray(i)||(i=[i]),m.statuses=i),o&&y.push({index:d,data:m})):o?g.unshift({...x,statuses:[i]}):g.push({...x,statuses:[i]})}for(let{index:x,data:d}of y)g.splice(x,1),g.unshift(d);return g}))},P=(n=f)=>{let i=!1;const t=(v==null?void 0:v[a.uid])||[],o=n.map(d=>d.uid),c=t.map(d=>d.uid),h=new Set(o),g=new Set(c),y=o.filter(d=>!g.has(d)),x=c.filter(d=>!h.has(d));y.length&&(i=!0,console.log("New friends: ",y),p(y,u.NEW,!0),t!=null&&t.length?l.success({duration:0,message:e({en:`Find ${y.length} new friends`,vi:`Tìm thấy ${y.length} bạn mới`}),description:s.jsx("div",{style:{maxHeight:300,overflowY:"auto",overflowX:"hidden"},children:s.jsx("ol",{children:y.map(d=>{const m=n.find(D=>D.uid==d);return s.jsx("li",{children:s.jsx("a",{href:B(d),target:"_blank",children:(m==null?void 0:m.name)||d})},d)})})})}):l.info({duration:0,message:e({en:`Saved friends to cache: ${y.length}`,vi:`Đã lưu danh sách bạn bè: ${y.length}`}),description:s.jsxs("div",{style:{maxHeight:300,overflowY:"auto",overflowX:"hidden"},children:[s.jsx(Ee,{banner:!0,type:"info",message:e({en:"Will notify if you have new friends / someone unfriended to you in future",vi:"Sẽ thông báo nếu có bạn mới / người huỷ kết bạn với bạn trong tương lai"})}),s.jsx("ol",{children:y.map(d=>{const m=n.find(D=>D.uid==d);return s.jsx("li",{children:s.jsx("a",{href:B(d),target:"_blank",children:(m==null?void 0:m.name)||d})},d)})})]})})),x.length&&(i=!0,console.log("Deleted friends: ",x),l.info({duration:0,message:e({en:`Find ${x.length} unfriended`,vi:`Có ${x.length} người huỷ kết bạn`}),description:s.jsx("div",{style:{maxHeight:300,overflowY:"auto",overflowX:"hidden"},children:s.jsx("ol",{children:x.map(d=>{const m=t.find(D=>D.uid==d);return s.jsx("li",{children:s.jsx("a",{href:B(d),target:"_blank",children:(m==null?void 0:m.name)||d})},d)})})})})),i&&j(a==null?void 0:a.uid,n.map(d=>({uid:d.uid,name:d.name})))},q=()=>{if(N)return;w("AllFriends:onClickReload");const n="onClickReload";r.loading({key:n,content:e({en:"Fetching friends...",vi:"Đang tải bạn bè..."})},0),Y(!0),we({myUid:a==null?void 0:a.uid}).then(i=>{if(P(i),!(i!=null&&i.length))return r.error(e({en:"No data to show",vi:"Không có dữ liệu"}));C(i),console.log(i),r.success({key:n,content:e({en:"Fetch friends completed",vi:"Tải xong bạn bè"})}),k.current.clearFilter()}).catch(i=>{r.error({key:n,content:e({en:"Failed to fetch friends",vi:"Lỗi tải bạn bè"})+": "+i.message}),console.log(i)}).finally(()=>{Y(!1)})},G=async n=>{w("AllFriends:onClickUnfriendOne");const i="onClickUnfriendOne"+n.uid;try{return r.loading({key:i,content:e({en:"Unfriending...",vi:"Đang huỷ kết bạn..."})+" "+n.name},0),await Ce({myUid:a==null?void 0:a.uid,targetUid:n.uid}),r.success({key:i,content:e({en:"Unfriend completed",vi:"Đã huỷ kết bạn"})+": "+n.name}),p(n,u.UNFRIENDED),!0}catch(t){return r.error({key:i,content:e({en:"Failed to unfriend",vi:"Lỗi huỷ kết bạn"})+": "+n.name+": "+t.message}),console.log(t),!1}},ne=async n=>{w("AllFriends:onClickUnfriendSelected");const i=new Set;for(let o of n)await G(o)&&i.add(o.uid),await K(500);const t=i.size+"/"+n.length;l.success({message:e({en:"Success",vi:"Thành công"}),description:e({en:`Unfriended completed ${t} friends`,vi:`Đã huỷ kết bạn với ${t} người`}),duration:0})},W=async n=>{w("AllFriends:onClickPokeFriend");const i="onClickPokeFriend"+n.uid;try{return r.loading({key:i,content:e({en:"Poking...",vi:"Đang chọc..."})+" "+n.name},0),await _e({myUid:a==null?void 0:a.uid,targetUid:n.uid}),r.success({key:i,content:e({en:"Poke completed",vi:"Chọc thành công"})+": "+n.name}),p(n,u.POKED),!0}catch(t){return r.error({key:i,content:e({en:"Failed to poke",vi:"Chọc thất bại"})+": "+n.name+": "+t.message}),console.log(t),!1}},ie=async n=>{w("AllFriends:onClickPokeSelected");const i=new Set;for(let o of n)await W(o)&&i.add(o.uid),await K(500);const t=i.size+"/"+n.length;l.success({message:e({en:"Success",vi:"Thành công"}),description:e({en:`Poke completed ${t} friends`,vi:`Đã chọc ${t} bạn`}),duration:0})},J=async n=>{w("AllFriends:onClickAddFriend");const i="onClickAddFriend"+n.uid;try{return r.loading({key:i,content:e({en:"Sending friend request...",vi:"Đang gửi kết bạn..."})+" "+n.name},0),await Ne({myUid:a==null?void 0:a.uid,targetUid:n.uid}),r.success({key:i,content:e({en:"Send friend request success",vi:"Gửi kết bạn thành công"})+": "+n.name}),p(n,u.REQUESTED),!0}catch(t){return r.error({key:i,content:e({en:"Failed to send friend request",vi:"Lỗi gửi kết bạn"})+": "+t.message}),!1}},se=async n=>{w("AllFriends:onClickAddFriendSelected");const i=new Set;for(let o of n)await J(o)&&i.add(o.uid),await K(500);const t=i.size+"/"+n.length;l.success({message:e({en:"Success",vi:"Thành công"}),description:e({en:`Sent friend request success ${t} users`,vi:`Gửi kết bạn thành công với ${t} người`}),duration:0})},te=async()=>{if(!T){w("AllFriends:onClickFindLockedFriends"),k.current.clearFilter(),L("..."),r.loading(e({en:"Finding locked friends...",vi:"Đang tìm bạn bè bị khoá..."}));try{const n=await De({myUid:a==null?void 0:a.uid,onFound:(i,t)=>{r.info(e({en:"Found locked friend",vi:"Tìm thấy bạn bè bị khoá"})+`: ${i.name} (${t.length})`),p(i,u.LOCKED)},onPage:(i,t,o)=>{L(`${o}/${t} - ${~~(t/f.length*100)}%`)}});if(n!=null&&n.length){k.current.setDataSelected(n);const i=n.length;l.success({message:e({en:"Success",vi:"Thành công"}),description:e({en:`Found ${i} locked friends`,vi:`Tìm thấy ${i} bạn bè bị khoá`}),duration:0})}else l.info({message:e({en:"Success",vi:"Thành công"}),description:e({en:"No locked friends found",vi:"Không có ai bị khoá"})})}catch(n){l.error({message:e({en:"Error",vi:"Lỗi"}),description:e({en:"Failed to find locked friends",vi:"Lỗi tìm bạn bè bị khoá"})+": "+n.message,duration:0}),console.log(n)}L(!1)}},re=async()=>{if(A)return;w("AllFriends:onClickFindBlockedMessages"),R(!0);const n=k.current.getDataSelected(),i=n!=null&&n.length?n:f,t="onClickFindBlockedMessages";r.loading({key:t,content:e({en:"Finding blocked messages...",vi:"Đang tìm bạn bè chặn tin nhắn"})},0);const o=[];for(let h=0;h<i.length;h++){const g=i[h];R(`${o.length}/${h+1} - ${~~(h/i.length*100)}%`),await be(g.uid)||(o.push(g),k.current.setDataSelected(o),p(g,u.BLOCKED_MESSAGE),r.success({key:t,content:e({en:"Found",vi:"Tìm thấy"})+" "+g.name+" ("+o.length+")"}))}R(!1);const c=o.length?e({en:`Found ${o.length} friends blocking your messages`,vi:`Tìm thấy ${o.length} bạn bè chặn tin nhắn`}):e({en:"No one block messages you",vi:"Không ai chặn tin nhắn của bạn"});r.success({key:t,content:c}),l.success({message:e({en:"Success",vi:"Thành công"}),description:c,duration:0})},oe=async n=>{if(!n)return r.error(e({en:"File empty",vi:"File rỗng"}));w("AllFriends:onUploadFriendsFile");try{const i=JSON.parse(n);if(!(i!=null&&i.length))return r.error(e({en:"No data",vi:"Không có dữ liệu"}));const t=[];for(let c of f)i.find(g=>g.uid==c.uid)||t.push(c);const o=[];for(let c of i)f.find(g=>g.uid==c.uid)||o.push(c);p(t,u.NEW,!1,!0),p(o,u.UNFRIENDED,!1,!0),[{title:e({en:`Found ${t.length} new friends`,vi:`Tìm thấy ${t.length} bạn mới`}),text:s.jsx("ol",{children:t.map(c=>s.jsx("li",{children:s.jsx("a",{href:B(c.uid),target:"_blank",children:c.name})},c.uid))})},{title:e({en:`Found ${o.length} unfriended`,vi:`Tìm thấy ${o.length} người huỷ kết bạn`}),text:s.jsx("ol",{children:o.map(c=>s.jsx("li",{children:s.jsx("a",{href:B(c.uid),target:"_blank",children:c.name})},c.uid))})}].forEach(({title:c,text:h})=>l.success({message:c,description:h,duration:0})),(o.length||t.length)&&k.current.setDataSelected([...o,...t])}catch(i){r.error(i.message)}},ce=n=>{b("/bulk-downloader",{state:{targetId:n,platform:ke.Facebook}})},ae=[{title:"#",key:"recent",dataIndex:"recent",sorter:(n,i)=>n.recent-i.recent,render:(n,i,t)=>i.recent+1,width:70,align:"center",headerAlign:"center"},{title:e({en:"Name",vi:"Tên"}),dataIndex:"name",key:"name",sorter:(n,i)=>n.name.localeCompare(i.name),render:(n,i,t)=>s.jsxs(z,{align:"middle",children:[s.jsx(ye,{shape:"square",src:s.jsx(Fe,{src:i.avatarLarge,fallback:i.avatar}),size:50}),s.jsx("a",{href:i.url,target:"_blank",style:{marginLeft:"10px"},children:s.jsx("b",{children:i.name})})]}),width:"auto"},{title:e({en:"Friend status",vi:"Trạng thái"}),dataIndex:"status",key:"status",width:150,filters:Object.entries(u).map(([n,i])=>({text:e(Z(i))+" ("+f.filter(t=>{var o;return(o=t.statuses)==null?void 0:o.includes(i)}).length+")",value:i})),onFilter:(n,i)=>{var t;return(t=i.statuses)==null?void 0:t.includes(n)},render:(n,i,t)=>{var o;return(o=i==null?void 0:i.statuses)!=null&&o.length?i.statuses.map(c=>({key:c,value:e(Z(c))})).map(({key:c,value:h})=>s.jsx(X,{color:Ae[c],children:h},c)):e({en:"Friend",vi:"Bạn bè"})}},{title:"Uid",dataIndex:"uid",key:"uid",sorter:(n,i)=>n.uid>i.uid,width:150},{title:e({en:"Action",vi:"Hành động"}),dataIndex:"action",key:"download",render:(n,i,t)=>{var o,c;return s.jsxs(Q.Compact,{children:[s.jsx(_,{title:e({en:"Bulk Downloader",vi:"Tải hàng loạt"}),children:s.jsx(F,{type:"default",onClick:()=>ce(i.uid),icon:s.jsx("i",{className:"fa-solid fa-download"})})}),s.jsx(_,{title:e({en:"Poke",vi:"Chọc"}),children:s.jsx(U,{title:e({en:"Poke friend",vi:"Chọc bạn bè"}),description:e({en:"Are you sure want to poke this friend?",vi:"Bạn có chắc muốn chọc người này?"}),onConfirm:()=>W(i),okText:e({en:"Yes",vi:"Chọc mạnh vào"}),cancelText:e({en:"No",vi:"Tha"}),children:s.jsx(F,{type:"default",icon:s.jsx("i",{className:"fa-regular fa-hand-point-right"})})})}),(o=i.statuses)!=null&&o.includes(u.UNFRIENDED)||(c=i.statuses)!=null&&c.includes(u.NEW)?s.jsx(_,{title:e({en:"Request friend",vi:"Gửi kết bạn"}),children:s.jsx(U,{title:e({en:"Request make friend",vi:"Yêu cầu kết bạn"}),description:e({en:"Are you sure want to request make friend with this user?",vi:"Bạn có chắc muốn gửi yêu cầu kết bạn cho người này?"}),onConfirm:()=>J(i),okText:e({en:"Yes",vi:"Gửi"}),cancelText:e({en:"No",vi:"Huỷ"}),children:s.jsx(F,{type:"default",icon:s.jsx("i",{className:"fa-solid fa-user-plus"})})})}):s.jsx(_,{title:e({en:"Unfriend",vi:"Huỷ kết bạn"}),children:s.jsx(U,{title:e({en:"Unfriend user",vi:"Huỷ kết bạn"}),description:e({en:"Are you sure want to unfriend this user?",vi:"Bạn có chắc muốn huỷ kết bạn với người này?"}),onConfirm:()=>G(i),okText:e({en:"Yes",vi:"Bye bye"}),cancelText:e({en:"No",vi:"Tha"}),children:s.jsx(F,{danger:!0,type:"primary",icon:s.jsx("i",{className:"fa-solid fa-trash-can"})})})})]})},width:150,align:"right"}],le=n=>{var o,c;const i=(o=n==null?void 0:n.filter)==null?void 0:o.call(n,Be),t=(c=n==null?void 0:n.filter)==null?void 0:c.call(n,Le);return s.jsxs(s.Fragment,{children:[s.jsx(F,{type:"primary",icon:N?s.jsx("i",{className:"fa-solid fa-rotate-right fa-spin"}):s.jsx("i",{className:"fa-solid fa-rotate-right"}),onClick:q,children:e({en:"Reload",vi:"Tải lại"})}),s.jsx(ve,{data:n.length?n:f,options:[{key:"uid",label:".txt (friend uid)",prepareData:h=>({fileName:"friends_"+O().format("YYYY-MM-DD-HHmmss")+".txt",data:h.map(g=>g.uid).join(`
`)})},{key:"uid_name",label:".csv (friend uid+name)",prepareData:h=>({fileName:"friends_uid_name_"+O().format("YYYY-MM-DD-HHmmss")+".csv",data:S(h.map(g=>({uid:g.uid,name:g.name})))})},{key:"json",label:".json",prepareData:h=>({fileName:"friends"+O().format("YYYY-MM-DD-HHmmss")+".json",data:JSON.stringify(h,null,4)})},{key:"csv",label:".csv",prepareData:h=>({fileName:"friends"+O().format("YYYY-MM-DD-HHmmss")+".csv",data:S(h)})}]}),s.jsxs(Q.Compact,{children:[s.jsx(_,{title:e({en:"Find locked friends",vi:"Lọc bạn bè bị khoá"}),children:s.jsxs(F,{loading:T,icon:s.jsx("i",{className:"fa-solid fa-lock"}),onClick:te,children:[e({en:"Locked friends",vi:"Bạn bè bị khoá"}),T?` (${T})`:""]})}),s.jsx(V,{title:e({en:"Check who is blocking your messages",vi:"Xem ai đang chặn tin nhắn của bạn"}),content:n!=null&&n.length?e({en:`Check ${n==null?void 0:n.length} friends selected`,vi:`Kiểm tra ${n==null?void 0:n.length} người được chọn`}):e({en:"TIP: You can select friends to check instead of check all",vi:"TIP: Bạn có thể chọn bạn bè để kiểm tra, thay vì kiểm tra tất cả"}),children:s.jsx(U,{title:e(e({en:"Check who is blocking your messages",vi:"Xem ai đang chặn tin nhắn của bạn"})),description:e({en:`Are you sure to check ${(n==null?void 0:n.length)||E.length} friends?`,vi:`Bạn có chắc muốn kiểm tra ${(n==null?void 0:n.length)||E.length} bạn bè?`}),onConfirm:re,okText:e({en:"Yes",vi:"Kiểm tra"}),cancelText:e({en:"No",vi:"Huỷ"}),children:s.jsxs(F,{loading:A,icon:s.jsx("i",{className:"fa-solid fa-comment-slash"}),children:[e({en:"Blocked messages",vi:"Bị chặn tin nhắn"}),A?` (${A})`:""]})})}),s.jsx(Ue,{accept:".json",title:e({en:"Upload friends file",vi:"Tải lên file bạn bè đã lưu"}),text:e({en:"Click or drag file to this area to upload",vi:"Click chọn hoặc kéo thả file vào đây"}),hint:e({en:"Support only .json backup file",vi:"Chỉ hỗ trợ file .json được xuất từ trang này"}),onSubmit:oe,renderButton:({showModal:h})=>s.jsx(V,{title:e({en:"Check who unfriend you",vi:"Kiểm tra ai huỷ kết bạn với bạn"}),content:e({en:"How it work: Export friends data to file, then compare it later",vi:"Cách hoạt động: Lưu danh sách bạn bè ra file trước, sau đó so sánh"}),children:s.jsx(F,{icon:s.jsx("i",{className:"fa-solid fa-user-large-slash"}),onClick:h,children:e({en:"Detect unfriend",vi:"Ai huỷ kết bạn"})})})}),n!=null&&n.length?s.jsxs(s.Fragment,{children:[s.jsx(_,{title:e({en:`Poke ${n.length} selected friends`,vi:`Chọc ${n.length} người được chọn`}),children:s.jsx(U,{title:e({en:`Poke ${n.length} selected friends`,vi:`Chọc ${n.length} người được chọn`}),description:e({en:"Are you sure to poke these friends?",vi:"Bạn có chắc muốn chọc những người này?"}),onConfirm:()=>ie(n),okText:e({en:"Yes",vi:"Chọc mạnh vào"}),cancelText:e({en:"No",vi:"Tha"}),children:s.jsx(F,{type:"default",icon:s.jsx("i",{className:"fa-solid fa-hand-point-right"}),children:n.length?" "+n.length:""})})}),(i==null?void 0:i.length)>0?s.jsx(_,{title:e({en:`Request friend with ${i.length} selected users`,vi:`Gửi kết bạn với ${i.length} người được chọn`}),children:s.jsx(U,{title:e({en:`Request friend with ${i.length} selected users`,vi:`Gửi kết bạn với ${i.length} người được chọn`}),description:e({en:"Are you sure to send friend request to these users?",vi:"Bạn có chắc muốn gửi lời mời kết bạn cho những người này?"}),onConfirm:()=>se(i),okText:e({en:"Yes",vi:"Gửi"}),cancelText:e({en:"No",vi:"Huỷ"}),children:s.jsx(F,{icon:s.jsx("i",{className:"fa-solid fa-user-plus"}),children:i.length})})}):null,(t==null?void 0:t.length)>0?s.jsx(_,{title:e({en:`Unfriend ${t.length} selected friends`,vi:`Huỷ kết bạn ${t.length} người được chọn`}),children:s.jsx(U,{title:e({en:`Unfriend ${t.length} selected friends`,vi:`Huỷ kết bạn ${t.length} người được chọn`}),description:e({en:"Are you sure to unfriend these friends?",vi:"Bạn có chắc muốn huỷ kết bạn những người này?"}),onConfirm:()=>ne(t),okText:e({en:"Yes",vi:"Bye bye"}),cancelText:e({en:"No",vi:"Tha"}),children:s.jsx(F,{danger:!0,type:"primary",icon:s.jsx("i",{className:"fa-solid fa-trash-can"}),children:t.length})})}):null]}):null]})]})};return s.jsxs("div",{style:{display:"flex",flexDirection:"column",width:"100%",height:"100%"},children:[s.jsxs(z,{align:"middle",style:{margin:"16px"},children:[s.jsx($e,{level:3,style:{margin:0},children:e({en:"Friends manager",vi:"Quản lý bạn bè"})}),s.jsx(X,{style:{marginLeft:"10px",fontWeight:"bold",color:"#888"},children:E.length})]}),s.jsx(pe,{ref:k,data:E,columns:ae,size:"small",searchable:!0,selectable:!0,keyExtractor:n=>n.uid,style:{flex:1,maxHeight:"100%"},renderTitle:le})]})}export{dn as default};
