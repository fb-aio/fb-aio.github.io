const __vite__fileDeps=["./UploadModal-7Bousocr.js","./index-C6IDuEAZ.js","./index-DjlRUb8J.css","./index-DaHCk8wU.js","./PurePanel-BMdJEOeI.js","./MyApp-nuvdhu8g.js","./useBreakpoint-B7PfgbsS.js","./responsiveObserver-qTidF-LX.js","./addEventListener-DGLXt8vE.js","./TextArea--VwofgTr.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{al as Ne,ah as Q,ai as X,r as I,an as i,ao as F,ar as _e,aI as De,aH as Te}from"./index-C6IDuEAZ.js";import{d as K}from"./dayjs.min-Ch1s4dTl.js";import{x as H,y as $e,g as A,d as me,z as Ue,A as Ie,a as Ae,u as Re,b as z,t as w,C as ce,S as P,T as C,o as ae,B as le,D as J,E as de}from"./MyApp-nuvdhu8g.js";import Le from"./MyTable-BMGiKutZ.js";import{E as Be}from"./ExportButton-B1xWRE4l.js";import{c as Oe}from"./messages-DFdeBI-s.js";import{g as Me}from"./feeds-CWLixFh1.js";import{u as Pe}from"./useForceStop-BjsA6feA.js";import{c as V}from"./VIP-WmW1iHuR.js";import{A as Ye}from"./index-BayaDXF_.js";import{I as He}from"./index-BZ0u2WdZ.js";import{T as he}from"./index-CLLDGUjT.js";import{R as Se}from"./row-DmEaGPGB.js";import{T as Ke}from"./index-BM1Lg5fy.js";import{P as ue}from"./index-jlYumDGg.js";import{P as q}from"./index-k6lUFpYS.js";import"./Table-lsaSd56i.js";import"./TextArea--VwofgTr.js";import"./addEventListener-DGLXt8vE.js";import"./index-CxNAxsgI.js";import"./PurePanel-BMdJEOeI.js";import"./index-DtfJHz0w.js";import"./index-CtFRJH9c.js";import"./index-UFxH4aKA.js";import"./Dropdown-D8umh5xP.js";import"./index-CDEcAlH8.js";import"./useBreakpoint-B7PfgbsS.js";import"./responsiveObserver-qTidF-LX.js";import"./Pagination-D7beidf8.js";import"./index-0YeK3THP.js";import"./file-download-IvOSaqja.js";import"./sweetalert2.all-BmLNahrN.js";async function qe({myUid:r,targetUid:g=""}){const x=await H({doc_id:"4936483286421335",variables:{id:g||r,query:"",scale:1}});try{const n=JSON.parse(x||"{}"),{edges:v=[]}=$e(n,!1)||{};return v.map(d=>{var j,y,p,E,b,N;return{uid:(j=d.node)==null?void 0:j.id,url:((y=d.node)==null?void 0:y.url)||A((p=d.node)==null?void 0:p.id),name:(E=d.node)==null?void 0:E.name,avatar:(N=(b=d.node)==null?void 0:b.photo)==null?void 0:N.uri,avatarLarge:me(d.node.id)}})}catch{return[]}}async function Ge({myUid:r,targetUid:g}){var v;const x=await H({doc_id:"8752443744796374",variables:{input:{source:"friending_jewel",unfriended_user_id:g,actor_id:r},scale:1}}),n=JSON.parse(x||"{}");if((v=n.errors)!=null&&v.length)throw new Error(n.errors[0].message);return n}async function We({myUid:r,targetUid:g}){var v;const x=await H({doc_id:"6294978773852692",variables:{input:{attribution_id_v2:"FriendingCometRoot.react,comet.friending,tap_tabbar,1667288605315,127814,2356318349,",friend_requestee_ids:[g],people_you_may_know_location:"friends_center",refs:[null],source:"people_you_may_know",warn_ack_for_ids:[],actor_id:r},scale:2}}),n=JSON.parse(x);if((v=n.errors)!=null&&v.length)throw new Error(n.errors[0].message);return n}async function Qe({myUid:r,targetUid:g}){var v,d,j,y,p,E,b;const x=await H({doc_id:"5028133957233114",variables:{input:{actor_id:r,user_id:g}}}),n=JSON.parse(x||"{}");if((v=n.errors)!=null&&v.length)throw new Error(n.errors[0].message);if(((y=(j=(d=n==null?void 0:n.data)==null?void 0:d.user_poke)==null?void 0:j.user)==null?void 0:y.poke_status)!="PENDING")throw new Error("Failed to poke friend: "+((b=(E=(p=n==null?void 0:n.data)==null?void 0:p.user_poke)==null?void 0:E.user)==null?void 0:b.poke_status));return n}async function Xe({myUid:r,cursor:g=null}){let x=await H({doc_id:"4186250744800382",variables:{count:8,cursor:g,scale:2,id:btoa(`app_collection:${r}:2356318349:2`)}});return JSON.parse(x)}async function ze({myUid:r="",onFound:g,onPage:x,checkStop:n=()=>!1}){var E,b,N;let v=[],d=null,j=1,y=0,p=0;for(;;){const D=await Xe({myUid:r,cursor:d}),{edges:R,page_info:T}=D.data.node.pageItems;for(let _ of R)if(!((E=_==null?void 0:_.node)!=null&&E.subtitle_text)){const $={uid:_.node.node.id,url:_.node.url,name:_.node.title.text,avatar:(b=_.node.image)==null?void 0:b.uri,avatarLarge:me(_.node.id)};if(!/^\d+$/.exec($.uid))try{let L=atob($.uid);$.uid=((N=/\d+/.exec(L))==null?void 0:N[0])||$.uid}catch(L){console.log(L)}v.push($),p++,typeof g=="function"&&await g($,v)}y+=R.length,await x(j,y,p);const{has_next_page:M,end_cursor:S}=T;if(!M||n!=null&&n())break;d=S,j++}return v}async function Je(){try{const r=await Ue("https://www.facebook.com/me",{method:"GET",headers:{Accept:"text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7"}}),g=r.indexOf("chat_sidebar_contact_rankings");let x=g;for(;r[x]!=">"&&x>0;)x--;let n=g;for(;r[n]!="<"&&n<r.length;)n++;const v=r.substring(x+1,n),d=JSON.parse(v),j=Ie(d,"chat_sidebar_contact_rankings");return((j==null?void 0:j.filter(y=>y.status==0))||[]).map(y=>{var p,E,b,N,D,R;return{uid:y.buddy_id||((p=y.user)==null?void 0:p.id),name:(E=y.user)==null?void 0:E.name,avatar:(N=(b=y.user)==null?void 0:b.profile_picture)==null?void 0:N.uri,hasStory:((R=(D=y.story_bucket)==null?void 0:D.nodes)==null?void 0:R.length)>0}})}catch(r){return console.error(r),[]}}const Ve=I.lazy(()=>_e(()=>import("./UploadModal-7Bousocr.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9]),import.meta.url)),{Title:Ze}=Ke,f={FRIEND:"Friend",POKED:"Poked",UNFRIENDED:"Unfriended",REQUESTED:"Requested friend",NEW:"New friend",LOCKED:"Locked",BLOCKED_MESSAGE:"Blocked messages"},en={[f.POKED]:"green",[f.LOCKED]:"orange",[f.UNFRIENDED]:"red",[f.BLOCKED_MESSAGE]:"red",[f.NEW]:"blue",[f.REQUESTED]:"pink"},ge=r=>{switch(r){case f.FRIEND:return{en:"Friend",vi:"Bạn bè"};case f.POKED:return{en:"Poked",vi:"Đã chọc"};case f.UNFRIENDED:return{en:"Unfriended",vi:"Đã huỷ kết bạn"};case f.REQUESTED:return{en:"Requested friend",vi:"Đã gửi kết bạn"};case f.NEW:return{en:"New friend",vi:"Bạn mới"};case f.LOCKED:return{en:"Locked",vi:"Bị khoá"};case f.BLOCKED_MESSAGE:return{en:"Blocked messages",vi:"Bị chặn tin nhắn"};default:return r}},nn=r=>{const g=(r==null?void 0:r.statuses)||[];return!g.includes(f.REQUESTED)&&(g.includes(f.NEW)||g.includes(f.UNFRIENDED))},tn=r=>{const g=(r==null?void 0:r.statuses)||[];return!g.includes(f.NEW)&&!g.includes(f.UNFRIENDED)};function Ln(){const{message:r,notification:g}=Ae(),x=Ne(),{ti:n}=Re(),v=Pe(),d=Q(X.profile),j=Q(X.friendsByUid),y=Q(X.setFriendsByUid),[p,E]=z("AllFriends.data",[]),[b,N]=z("AllFriends.interactions",[]),[D,R]=z("AllFriends.ranking",[]),T=I.useMemo(()=>{var s,o;const e=new Map,t=new Map;for(let c of b)(s=c.reactions_uid)==null||s.forEach(m=>e.set(m,(e.get(m)||0)+1)),(o=c.comments_uid)==null||o.forEach(m=>t.set(m,(t.get(m)||0)+1));return{reactions:e,comments:t}},[b]),M=I.useMemo(()=>(p==null?void 0:p.map((e,t)=>{var s,o;return{...e,recent:t,comments:((s=T==null?void 0:T.comments)==null?void 0:s.get(e.uid))||0,reactions:((o=T==null?void 0:T.reactions)==null?void 0:o.get(e.uid))||0,ranking:D==null?void 0:D.indexOf(e.uid)}}))||[],[p,T,D]),[S,_]=I.useState(!1),[$,L]=I.useState(0),[Z,ee]=I.useState(0),B=I.useRef(null);I.useEffect(()=>{d!=null&&d.uid&&!(p!=null&&p.length)&&ne()},[]);const U=(e,t,s=!1,o=!1)=>{E(c=>Te(c,a=>{Array.isArray(e)||(e=[e]);let l=[];for(let h of e){let u=a.findIndex(O=>O.uid==((h==null?void 0:h.uid)||h)),k=a[u];k?(k.statuses||(k.statuses=[]),!s&&!k.statuses.includes(t)?k.statuses.push(t):(Array.isArray(t)||(t=[t]),k.statuses=t),o&&l.push({index:u,data:k})):o?a.unshift({...h,statuses:[t]}):a.push({...h,statuses:[t]})}for(let{index:h,data:u}of l)a.splice(h,1),a.unshift(u);return a}))},fe=(e=p)=>{let t=!1;const s=(j==null?void 0:j[d.uid])||[],o=e.map(u=>u.uid),c=s.map(u=>u.uid),m=new Set(o),a=new Set(c),l=o.filter(u=>!a.has(u)),h=c.filter(u=>!m.has(u));l.length&&(t=!0,console.log("New friends: ",l),U(l,f.NEW,!0),s!=null&&s.length?g.open({type:"success",duration:0,message:n({en:`Find ${l.length} new friends`,vi:`Tìm thấy ${l.length} bạn mới`}),description:i.jsx("div",{style:{maxHeight:300,overflowY:"auto",overflowX:"hidden"},children:i.jsx("ol",{children:l.map(u=>{const k=e.find(O=>O.uid==u);return i.jsx("li",{children:i.jsx("a",{href:A(u),target:"_blank",children:(k==null?void 0:k.name)||u})},u)})})})}):g.open({type:"success",duration:0,message:n({en:`Saved friends to cache: ${l.length}`,vi:`Đã lưu danh sách bạn bè: ${l.length}`}),description:n({en:"Will notify if you have new friends / someone unfriended to you in future",vi:"Sẽ thông báo nếu có bạn mới / người huỷ kết bạn với bạn trong tương lai"})})),h.length&&(t=!0,console.log("Deleted friends: ",h),g.open({type:"info",duration:0,message:n({en:`Find ${h.length} unfriended`,vi:`Có ${h.length} người huỷ kết bạn`}),description:i.jsx("div",{style:{maxHeight:300,overflowY:"auto",overflowX:"hidden"},children:i.jsx("ol",{children:h.map(u=>{const k=s.find(O=>O.uid==u);return i.jsx("li",{children:i.jsx("a",{href:A(u),target:"_blank",children:(k==null?void 0:k.name)||u})},u)})})})})),t&&y(d==null?void 0:d.uid,e.map(u=>({uid:u.uid,name:u.name})))},ne=()=>{if(S)return;w("AllFriends:onClickReload");const e="onClickReload";r.loading({key:e,content:n({en:"Fetching friends...",vi:"Đang tải bạn bè..."})},0),_(!0),qe({myUid:d==null?void 0:d.uid}).then(t=>{var s;if(fe(t),!(t!=null&&t.length))return r.error(n({en:"No data to show",vi:"Không có dữ liệu"}));E(t),console.log(t),r.success({key:e,content:n({en:"Fetch friends completed",vi:"Tải xong bạn bè"})}),(s=B.current)==null||s.clearFilter()}).catch(t=>{r.error({key:e,content:n({en:"Failed to fetch friends",vi:"Lỗi tải bạn bè"})+": "+t.message}),console.log(t)}).finally(()=>{_(!1)})},ie=async e=>{w("AllFriends:onClickUnfriendOne");const t="onClickUnfriendOne"+e.uid;try{return r.loading({key:t,content:n({en:"Unfriending...",vi:"Đang huỷ kết bạn..."})+" "+e.name},0),await Ge({myUid:d==null?void 0:d.uid,targetUid:e.uid}),r.success({key:t,content:n({en:"Unfriend completed",vi:"Đã huỷ kết bạn"})+": "+e.name}),U(e,f.UNFRIENDED),!0}catch(s){return r.error({key:t,content:n({en:"Failed to unfriend",vi:"Lỗi huỷ kết bạn"})+": "+e.name+": "+s.message}),console.log(s),!1}},pe=async e=>{if(!await V())return;w("AllFriends:onClickUnfriendSelected");const t=new Set;for(let o of e)await ie(o)&&t.add(o.uid),await J(500);const s=t.size+"/"+e.length;g.open({type:"success",message:n({en:"Success",vi:"Thành công"}),description:n({en:`Unfriended completed ${s} friends`,vi:`Đã huỷ kết bạn với ${s} người`}),duration:0})},te=async e=>{w("AllFriends:onClickPokeFriend");const t="onClickPokeFriend"+e.uid;try{return r.loading({key:t,content:n({en:"Poking...",vi:"Đang chọc..."})+" "+e.name},0),await Qe({myUid:d==null?void 0:d.uid,targetUid:e.uid}),r.success({key:t,content:n({en:"Poke completed",vi:"Chọc thành công"})+": "+e.name}),U(e,f.POKED),!0}catch(s){return r.error({key:t,content:n({en:"Failed to poke",vi:"Chọc thất bại"})+": "+e.name+": "+s.message}),console.log(s),!1}},ke=async e=>{w("AllFriends:onClickPokeSelected");const t=new Set;for(let o of e)await te(o)&&t.add(o.uid),await J(500);const s=t.size+"/"+e.length;g.open({type:"success",message:n({en:"Success",vi:"Thành công"}),description:n({en:`Poke completed ${s} friends`,vi:`Đã chọc ${s} bạn`}),duration:0})},se=async e=>{w("AllFriends:onClickAddFriend");const t="onClickAddFriend"+e.uid;try{return r.loading({key:t,content:n({en:"Sending friend request...",vi:"Đang gửi kết bạn..."})+" "+e.name},0),await We({myUid:d==null?void 0:d.uid,targetUid:e.uid}),r.success({key:t,content:n({en:"Send friend request success",vi:"Gửi kết bạn thành công"})+": "+e.name}),U(e,f.REQUESTED),!0}catch(s){return r.error({key:t,content:n({en:"Failed to send friend request",vi:"Lỗi gửi kết bạn"})+": "+s.message}),!1}},xe=async e=>{if(!await V())return;w("AllFriends:onClickAddFriendSelected");const t=new Set;for(let o of e)await se(o)&&t.add(o.uid),await J(500);const s=t.size+"/"+e.length;g.open({type:"success",message:n({en:"Success",vi:"Thành công"}),description:n({en:`Sent friend request success ${s} users`,vi:`Gửi kết bạn thành công với ${s} người`}),duration:0})},ve=async()=>{var s,o;if($)return;const e="AllFriends:onClickFindLockedFriends";w(e),(s=B.current)==null||s.clearFilter(),L(!0);let t=!1;try{const c=await ze({myUid:d==null?void 0:d.uid,onFound:(m,a)=>{r.info(n({en:"Found locked friend",vi:"Tìm thấy bạn bè bị khoá"})+`: ${m.name} (${a.length})`),U(m,f.LOCKED)},onPage:(m,a,l)=>{r.loading({key:e,duration:0,content:i.jsxs(i.Fragment,{children:[n({en:"Finding locked friends...",vi:"Đang tìm bạn bè bị khoá..."})+` ${l}/${a} - ${~~(a/p.length*100)}%`,i.jsx("br",{}),i.jsx("i",{children:n({en:"Click to stop",vi:"Bấm để dừng"})})]}),onClick:()=>t=!0}),L(!0)},checkStop:()=>t});if(r.destroy(e),c!=null&&c.length){(o=B.current)==null||o.setDataSelected(c);const m=c.length;g.open({type:"success",message:n({en:"Success",vi:"Thành công"}),description:i.jsxs(i.Fragment,{children:[n({en:`Found ${m} locked friends`,vi:`Tìm thấy ${m} bạn bè bị khoá`}),i.jsx("br",{}),i.jsx("ul",{children:c.map(a=>i.jsx("li",{children:a.name},a.uid))})]}),duration:0})}else g.open({duration:0,type:"info",message:n({en:"Success",vi:"Thành công"}),description:n({en:"No locked friends found",vi:"Không có bạn bè nào bị khoá"})})}catch(c){g.open({type:"error",message:n({en:"Error",vi:"Lỗi"}),description:n({en:"Failed to find locked friends",vi:"Lỗi tìm bạn bè bị khoá"})+": "+c.message,duration:0}),console.log(c)}finally{L(!1)}},ye=async()=>{var a,l;if(Z)return;const e="AllFriends:onClickFindBlockedMessages";w(e);const t=(a=B.current)==null?void 0:a.getDataSelected(),s=t!=null&&t.length?t:p,o=[];let c=!1;for(let h=0;h<s.length&&!c;h++){ee(!0),r.loading({key:e,duration:0,content:i.jsxs(i.Fragment,{children:[n({en:"Finding blocked messages...",vi:"Đang tìm bạn bè chặn tin nhắn..."})+`${o.length}/${h+1} - ${~~(h/s.length*100)}%`,i.jsx("br",{}),i.jsx("i",{children:n({en:"Click to stop",vi:"Bấm để dừng"})})]}),onClick:()=>c=!0});const u=s[h];await Oe(u.uid)||(o.push(u),(l=B.current)==null||l.setDataSelected(o),U(u,f.BLOCKED_MESSAGE),r.success({key:e,content:n({en:"Found",vi:"Tìm thấy"})+" "+u.name+" ("+o.length+")"}))}ee(!1);const m=o.length?i.jsxs(i.Fragment,{children:[n({en:`Found ${o.length} friends blocking your messages`,vi:`Tìm thấy ${o.length} bạn bè chặn tin nhắn`}),i.jsx("br",{}),i.jsx("ul",{children:o.map(h=>i.jsx("li",{children:h.name},h.uid))})]}):n({en:"No one block messages you",vi:"Không ai chặn tin nhắn của bạn"});r.success({key:e,content:m}),g.open({type:"success",message:n({en:"Success",vi:"Thành công"}),description:m,duration:0})},be=async e=>{var t;if(!e)return r.error(n({en:"File empty",vi:"File rỗng"}));w("AllFriends:onUploadFriendsFile");try{const s=JSON.parse(e);if(!(s!=null&&s.length))return r.error(n({en:"No data",vi:"Không có dữ liệu"}));const o=new Set(s.map(l=>l.uid)),c=[];for(let l of p)o.has(l.uid)||c.push(l);const m=new Set(p.map(l=>l.uid)),a=[];for(let l of s)m.has(l.uid)||a.push(l);U(c,f.NEW,!1,!0),U(a,f.UNFRIENDED,!1,!0),[{title:n({en:`Found ${c.length} new friends`,vi:`Tìm thấy ${c.length} bạn mới`}),text:i.jsx("div",{style:{maxHeight:300,overflowY:"auto",overflowX:"hidden"},children:i.jsx("ol",{children:c.map(l=>i.jsx("li",{children:i.jsx("a",{href:A(l.uid),target:"_blank",children:l.name})},l.uid))})})},{title:n({en:`Found ${a.length} unfriended`,vi:`Tìm thấy ${a.length} người huỷ kết bạn`}),text:i.jsx("div",{style:{maxHeight:300,overflowY:"auto",overflowX:"hidden"},children:i.jsx("ol",{children:a.map(l=>i.jsx("li",{children:i.jsx("a",{href:A(l.uid),target:"_blank",children:l.name})},l.uid))})})}].forEach(({title:l,text:h})=>g.open({type:"success",message:l,description:h,duration:0})),(a.length||c.length)&&((t=B.current)==null||t.setDataSelected([...a,...c]))}catch(s){r.error(s.message)}},je=e=>{x("/bulk-downloader",{state:{targetId:e,platform:De.Facebook}})},Fe=async()=>{if(!await V())return;const e=v.start(),t="AllFriends:onClickScanInteractions";w(t),r.loading({key:t,duration:0,content:n({en:"Loading posts...",vi:"Đang tải bài viết..."})});let s=!1;const o=await Me(1/0,h=>{var re;N([...h]);const u=h.reduce((G,W)=>{var Y;return G+(((Y=W.comments_uid)==null?void 0:Y.length)||0)},0),k=h.reduce((G,W)=>{var Y;return G+(((Y=W.reactions_uid)==null?void 0:Y.length)||0)},0),O=new Date(((re=h[h.length-1])==null?void 0:re.created_time)||0),oe=de(O);r.loading({key:t,duration:0,content:i.jsxs(i.Fragment,{children:[n({en:`Loading ${oe}: ${h.length} posts, ${k} reactions, ${u} comments...`,vi:`Đang tải ${oe}: ${h.length} bài viết, ${k} lượt thích, ${u} bình luận...`}),i.jsx("br",{}),i.jsx("i",{children:n({en:"Click to stop",vi:"Bấm để dừng"})})]}),onClick:()=>s=!0})},()=>s||e.value()),c=o.reduce((h,u)=>{var k;return h+(((k=u.comments_uid)==null?void 0:k.length)||0)},0),m=o.reduce((h,u)=>{var k;return h+(((k=u.reactions_uid)==null?void 0:k.length)||0)},0);r.destroy(t);const a=o[o.length-1],l=de(new Date((a==null?void 0:a.created_time)||0));g.open({type:"success",duration:0,message:n({en:"Scan interactions finished",vi:"Quét tương tác xong"}),description:i.jsxs(i.Fragment,{children:[n({en:`Scanned ${o.length} posts, ${m} reactions, ${c} comments, last post ${l} `,vi:`Quét được ${o.length} bài viết, ${m} lượt thích, ${c} bình luận, bài viết cuối ${l} `}),i.jsx("a",{href:A(a==null?void 0:a.postId),target:"_blank",children:A(a==null?void 0:a.postId)})]})}),N(o)},we=async()=>{const e="AllFriends:onClickFindBuddy";w(e),r.loading({key:e,content:n({en:"Scanning ranking friends...",vi:"Đang tải xếp hạng bạn bè..."})});const t=await Je();console.log(t),r.destroy(e),g.open({type:"success",duration:0,message:n({en:`Scan ranking completed: ${t.length} friends`,vi:`Quét xếp hạng bạn bè xong: ${t.length} bạn`}),description:i.jsxs(i.Fragment,{children:["Top 20:",i.jsx("br",{}),i.jsx("ol",{children:t.slice(0,20).map((s,o)=>i.jsxs(i.Fragment,{children:[i.jsx("a",{href:A(s.uid),target:"_blank",children:o+1+": "+s.name},s.uid),i.jsx("br",{})]}))})]})}),R(t.map(s=>s.uid))},Ee=[{title:"#",key:"recent",dataIndex:"recent",sorter:(e,t)=>e.recent-t.recent,render:(e,t,s)=>t.recent+1,width:70,align:"center"},{title:n({en:"Name",vi:"Tên"}),dataIndex:"name",key:"name",sorter:(e,t)=>e.name.localeCompare(t.name),onSearch:(e,t,s)=>ce(e,t)||ce(e,s==null?void 0:s.uid),render:(e,t,s)=>i.jsxs(P,{style:{maxWidth:300},children:[i.jsx(Ye,{shape:"square",src:i.jsx(He,{src:t.avatarLarge,fallback:t.avatar}),size:50}),i.jsxs(P,{direction:"vertical",style:{marginLeft:"10px"},size:0,children:[i.jsx("a",{href:t.url,target:"_blank",children:i.jsx("b",{children:t.name})}),i.jsx("span",{style:{opacity:.5},children:t.uid})]})]}),width:"auto"},...D.length?[{title:n({en:"Ranking",vi:"Xếp hạng"}),key:"ranking",dataIndex:"ranking",render:(e,t,s)=>e==-1?"_":e+1,sorter:(e,t)=>(e.ranking==-1?1/0:e.ranking)-(t.ranking==-1?1/0:t.ranking),width:100,align:"right"}]:[],...b!=null&&b.length?[{title:n({en:"Reactions",vi:"Thích"}),key:"reactions",dataIndex:"reactions",sorter:(e,t)=>e.reactions-t.reactions,width:100,align:"right"},{title:n({en:"Comments",vi:"Bình luận"}),key:"comments",dataIndex:"comments",sorter:(e,t)=>e.comments-t.comments,width:100,align:"right"}]:[],{title:n({en:"Friend status",vi:"Trạng thái"}),dataIndex:"status",key:"status",width:150,filters:Object.entries(f).map(([e,t])=>({text:n(ge(t))+" ("+p.filter(s=>{var o,c;return((o=s.statuses)==null?void 0:o.includes(t))||t===f.FRIEND&&!((c=s.statuses)!=null&&c.length)}).length+")",value:t})),onFilter:(e,t)=>{var s,o;return((s=t.statuses)==null?void 0:s.includes(e))||e==f.FRIEND&&!((o=t.statuses)!=null&&o.length)},render:(e,t,s)=>{var o;return(o=t==null?void 0:t.statuses)!=null&&o.length?t.statuses.map(c=>({key:c,value:n(ge(c))})).map(({key:c,value:m})=>i.jsx(he,{color:en[c],children:m},c)):n({en:"Friend",vi:"Bạn bè"})},align:"right"},{title:n({en:"Action",vi:"Hành động"}),dataIndex:"action",key:"download",render:(e,t,s)=>{var o,c;return i.jsxs(P.Compact,{children:[i.jsx(C,{title:n({en:"Bulk Downloader",vi:"Tải hàng loạt"}),children:i.jsx(F,{type:"default",onClick:()=>je(t.uid),icon:i.jsx("i",{className:"fa-solid fa-download"})})}),i.jsx(C,{title:n({en:"Poke",vi:"Chọc"}),children:i.jsx(F,{type:"default",onClick:()=>te(t),icon:i.jsx("i",{className:"fa-regular fa-hand-point-right"})})}),(o=t.statuses)!=null&&o.includes(f.UNFRIENDED)||(c=t.statuses)!=null&&c.includes(f.NEW)?i.jsx(C,{title:n({en:"Request friend",vi:"Gửi kết bạn"}),children:i.jsx(F,{type:"default",onClick:()=>se(t),icon:i.jsx("i",{className:"fa-solid fa-user-plus"})})}):i.jsx(C,{title:n({en:"Unfriend",vi:"Huỷ kết bạn"}),children:i.jsx(F,{danger:!0,onClick:()=>ie(t),icon:i.jsx("i",{className:"fa-solid fa-trash-can"})})})]})},width:150,align:"right"}],Ce=e=>{var o,c;const t=(o=e==null?void 0:e.filter)==null?void 0:o.call(e,nn),s=(c=e==null?void 0:e.filter)==null?void 0:c.call(e,tn);return i.jsxs(i.Fragment,{children:[i.jsx(F,{type:"primary",icon:S?i.jsx("i",{className:"fa-solid fa-rotate-right fa-spin"}):i.jsx("i",{className:"fa-solid fa-rotate-right"}),onClick:ne,children:n({en:"Reload",vi:"Tải lại"})}),i.jsx(Be,{data:e.length?e:p,options:[{key:"uid",label:".txt (friend uid)",prepareData:m=>({fileName:"friends_"+K().format("YYYY-MM-DD-HHmmss")+".txt",data:m.map(a=>a.uid).join(`
`)})},{key:"uid_name",label:".csv (friend uid+name)",prepareData:m=>({fileName:"friends_uid_name_"+K().format("YYYY-MM-DD-HHmmss")+".csv",data:ae(m.map(a=>({uid:a.uid,name:a.name})))})},{key:"json",label:".json",prepareData:m=>({fileName:"friends"+K().format("YYYY-MM-DD-HHmmss")+".json",data:JSON.stringify(m,null,4)})},{key:"csv",label:".csv",prepareData:m=>({fileName:"friends"+K().format("YYYY-MM-DD-HHmmss")+".csv",data:ae(m)})}]}),i.jsxs(P.Compact,{children:[i.jsx(C,{title:n({en:"Find locked friends",vi:"Lọc bạn bè bị khoá"}),children:i.jsx(F,{loading:!!$,onClick:ve,children:i.jsx("i",{className:"fa-solid fa-lock"})})}),i.jsx(ue,{title:n({en:"Check who is blocking your messages",vi:"Xem ai đang chặn tin nhắn của bạn"}),content:e!=null&&e.length?n({en:`Check ${e==null?void 0:e.length} friends selected`,vi:`Kiểm tra ${e==null?void 0:e.length} người được chọn`}):n({en:"TIP: You can select friends to check instead of check all",vi:"TIP: Bạn có thể chọn bạn bè để kiểm tra, thay vì kiểm tra tất cả"}),children:i.jsx(q,{title:n(n({en:"Check who is blocking your messages",vi:"Xem ai đang chặn tin nhắn của bạn"})),description:n({en:`Are you sure to check ${(e==null?void 0:e.length)||M.length} friends?`,vi:`Bạn có chắc muốn kiểm tra ${(e==null?void 0:e.length)||M.length} bạn bè?`}),onConfirm:ye,okText:n({en:"Yes",vi:"Kiểm tra"}),cancelText:n({en:"No",vi:"Huỷ"}),children:i.jsx(F,{loading:!!Z,children:i.jsx("i",{className:"fa-solid fa-comment-slash"})})})}),i.jsx(Ve,{accept:".json",title:n({en:"Upload friends file",vi:"Tải lên file bạn bè đã lưu"}),text:n({en:"Click or drag file to this area to upload",vi:"Click chọn hoặc kéo thả file vào đây"}),hint:n({en:"Support only .json backup file",vi:"Chỉ hỗ trợ file .json được xuất từ trang này"}),onSubmit:be,renderButton:({showModal:m})=>i.jsx(ue,{title:n({en:"Check who unfriend you",vi:"Kiểm tra ai huỷ kết bạn với bạn"}),content:n({en:"How it work: Export friends data to file, then compare it later",vi:"Cách hoạt động: Lưu danh sách bạn bè ra file trước, sau đó so sánh"}),children:i.jsx(F,{onClick:m,children:i.jsx("i",{className:"fa-solid fa-user-slash"})})})}),i.jsx(C,{title:n({en:"Rank who has interacted with you the most recently. (Recent interactions)",vi:"Xếp hạng xem ai tương tác với bạn nhiều nhất thời gian gần đây (Tương tác gần đây)"}),children:i.jsx(F,{onClick:we,icon:i.jsx("i",{className:"fa-solid fa-ranking-star"}),children:n({en:"Ranking",vi:"Xếp hạng"})})}),i.jsx(C,{title:n({en:"Count friend's reactions and comments on all of your profile's posts (Total interactions)",vi:"Đếm like và comment của bạn bè trên tất cả bài viết của bạn (Tổng tương tác)"}),children:i.jsx(le,{count:n({en:"New",vi:"Mới"}),color:"purple",style:{color:"white"},children:i.jsx(F,{icon:i.jsx("i",{className:"fa-solid fa-thumbs-up"}),onClick:Fe,children:n({en:"Interactions",vi:"Tương tác"})})})})]}),i.jsxs(P.Compact,{children:[i.jsx(C,{title:n({en:"Poke friends history",vi:"Lịch sử chọc"}),children:i.jsx(F,{onClick:()=>{w("AllFriends:openPokeHistory"),window.open("https://www.facebook.com/100004848287494/allactivity?category_key=POKECLUSTER","_blank")},icon:i.jsx("i",{className:"fa-solid fa-hand-point-up"})})}),i.jsx(C,{title:n({en:"Add friends history",vi:"Lịch sử kết bạn"}),children:i.jsx(F,{onClick:()=>{w("AllFriends:openAddFriendHistory"),window.open("https://www.facebook.com/me/allactivity?category_key=FRIENDS","_blank")},icon:i.jsx("i",{className:"fa-solid fa-user-plus"})})}),i.jsx(C,{title:n({en:"Remove friends history",vi:"Lịch sử huỷ kết bạn"}),children:i.jsx(le,{count:n({en:"New",vi:"Mới"}),color:"purple",style:{color:"white"},children:i.jsx(F,{onClick:()=>{w("AllFriends:openRemoveFriendHistory"),window.open("https://www.facebook.com/100004848287494/allactivity?category_key=REMOVEDFRIENDS","_blank")},icon:i.jsx("i",{className:"fa-solid fa-user-minus"})})})})]}),i.jsx(P.Compact,{children:e!=null&&e.length?i.jsxs(i.Fragment,{children:[i.jsx(C,{title:n({en:`Poke ${e.length} selected friends`,vi:`Chọc ${e.length} người được chọn`}),children:i.jsx(q,{title:n({en:`Poke ${e.length} selected friends`,vi:`Chọc ${e.length} người được chọn`}),description:n({en:"Are you sure to poke these friends?",vi:"Bạn có chắc muốn chọc những người này?"}),onConfirm:()=>ke(e),okText:n({en:"Yes",vi:"Chọc mạnh vào"}),cancelText:n({en:"No",vi:"Tha"}),children:i.jsx(F,{type:"default",icon:i.jsx("i",{className:"fa-solid fa-hand-point-right"}),children:e.length?" "+e.length:""})})}),(t==null?void 0:t.length)>0?i.jsx(C,{title:n({en:`Request friend with ${t.length} selected users`,vi:`Gửi kết bạn với ${t.length} người được chọn`}),children:i.jsx(q,{title:n({en:`Request friend with ${t.length} selected users`,vi:`Gửi kết bạn với ${t.length} người được chọn`}),description:n({en:"Are you sure to send friend request to these users?",vi:"Bạn có chắc muốn gửi lời mời kết bạn cho những người này?"}),onConfirm:()=>xe(t),okText:n({en:"Yes",vi:"Gửi"}),cancelText:n({en:"No",vi:"Huỷ"}),children:i.jsx(F,{icon:i.jsx("i",{className:"fa-solid fa-user-plus"}),children:t.length})})}):null,(s==null?void 0:s.length)>0?i.jsx(C,{title:n({en:`Unfriend ${s.length} selected friends`,vi:`Huỷ kết bạn ${s.length} người được chọn`}),children:i.jsx(q,{title:n({en:`Unfriend ${s.length} selected friends`,vi:`Huỷ kết bạn ${s.length} người được chọn`}),description:n({en:"Are you sure to unfriend these friends?",vi:"Bạn có chắc muốn huỷ kết bạn những người này?"}),onConfirm:()=>pe(s),okText:n({en:"Yes",vi:"Bye bye"}),cancelText:n({en:"No",vi:"Tha"}),children:i.jsx(F,{danger:!0,icon:i.jsx("i",{className:"fa-solid fa-trash-can"}),children:s.length})})}):null]}):null})]})};return i.jsxs("div",{style:{display:"flex",flexDirection:"column",width:"100%",height:"100%"},children:[i.jsxs(Se,{align:"middle",style:{margin:"16px"},children:[i.jsx(Ze,{level:3,style:{margin:0},children:n({en:"Friends manager",vi:"Quản lý bạn bè"})}),i.jsx(he,{style:{marginLeft:"10px",fontWeight:"bold",color:"#888"},children:M.length})]}),i.jsx(Le,{ref:B,data:M,columns:Ee,size:"small",searchable:!0,selectable:!0,keyExtractor:e=>e.uid,style:{flex:1,maxHeight:"100%"},renderTitle:Ce})]})}export{Ln as default};
