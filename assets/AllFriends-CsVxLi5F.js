const __vite__fileDeps=["./UploadModal-DxqxqT8W.js","./index-BROPPj-n.js","./index-DfqnkV-X.css","./index-CzJcyIaL.js","./PurePanel-DdgNji2S.js","./MyApp-CTHkSgZv.js","./useBreakpoint-DkAedlRG.js","./responsiveObserver-BgbR3n2G.js","./EyeOutlined-Bdb1rckS.js","./index-E1f_2Slm.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{aD as We,ap as J,aq as X,r as _,av as i,aw as C,aA as Ge,aO as ze,aN as V}from"./index-BROPPj-n.js";import{d as H}from"./dayjs.min-NAwTJs7P.js";import Je from"./MyTable-cxCXQJQ_.js";import{E as Xe}from"./ExportButton-CORueF1f.js";import{C as O,D as Te,h as R,i as Ie,E as Ve,G as Ze,c as en,u as nn,e as Z,t as E,H as tn,I as sn,J as Ne,b as M,T as D,o as Ce,B as Ee,j as Q,K,L as rn,M as De,N as on}from"./MyApp-CTHkSgZv.js";import{u as an}from"./useForceStop-DCkxTnCO.js";import{d as cn}from"./messages-Bte2RO_q.js";import{A as ln}from"./index-BvEVGAYU.js";import{I as dn}from"./index-BIz-CuWr.js";import{T as W}from"./index-vl3Eu038.js";import{R as un}from"./row-B7aAd_J-.js";import{T as hn}from"./index-E1f_2Slm.js";import{P as _e}from"./index-CuO1D6K_.js";import{P as G}from"./index-DFD_hV24.js";import"./index-CbpXo0FL.js";import"./Table-CaYAcLQd.js";import"./addEventListener-0UOebloe.js";import"./index-BJWgeOwo.js";import"./PurePanel-DdgNji2S.js";import"./SearchOutlined-DPdWWG8F.js";import"./index-Ow7-uuZA.js";import"./index-CrziucqC.js";import"./Dropdown-A4CzxMP2.js";import"./useBreakpoint-DkAedlRG.js";import"./responsiveObserver-BgbR3n2G.js";import"./Pagination-AS9t-8Je.js";import"./index-DyhpSlY9.js";import"./EyeOutlined-Bdb1rckS.js";import"./file-download-Bi0dK5EU.js";async function gn({myUid:a,targetUid:m=""}){const v=await O({doc_id:"4936483286421335",variables:{id:m||a,query:"",scale:1}});try{const t=JSON.parse(v||"{}"),{edges:b=[]}=Te(t,!1);return b.map(f=>{var F,y,p,w,j,U;return{uid:(F=f.node)==null?void 0:F.id,url:((y=f.node)==null?void 0:y.url)||R((p=f.node)==null?void 0:p.id),name:(w=f.node)==null?void 0:w.name,avatar:(U=(j=f.node)==null?void 0:j.photo)==null?void 0:U.uri,avatarLarge:Ie(f.node.id)}})}catch{return[]}}async function mn({myUid:a,targetUid:m}){var b;const v=await O({doc_id:"8752443744796374",variables:{input:{source:"friending_jewel",unfriended_user_id:m,actor_id:a},scale:1}}),t=JSON.parse(v||"{}");if((b=t.errors)!=null&&b.length)throw new Error(t.errors[0].message);return t}async function fn({myUid:a,targetUid:m}){var b;const v=await O({doc_id:"6294978773852692",variables:{input:{attribution_id_v2:"FriendingCometRoot.react,comet.friending,tap_tabbar,1667288605315,127814,2356318349,",friend_requestee_ids:[m],people_you_may_know_location:"friends_center",refs:[null],source:"people_you_may_know",warn_ack_for_ids:[],actor_id:a},scale:2}}),t=JSON.parse(v);if((b=t.errors)!=null&&b.length)throw new Error(t.errors[0].message);return t}async function pn({myUid:a,targetUid:m}){var b,f,F,y,p,w,j;const v=await O({doc_id:"5028133957233114",variables:{input:{actor_id:a,user_id:m}}}),t=JSON.parse(v||"{}");if((b=t.errors)!=null&&b.length)throw new Error(t.errors[0].message);if(((y=(F=(f=t==null?void 0:t.data)==null?void 0:f.user_poke)==null?void 0:F.user)==null?void 0:y.poke_status)!="PENDING")throw new Error("Failed to poke friend: "+((j=(w=(p=t==null?void 0:t.data)==null?void 0:p.user_poke)==null?void 0:w.user)==null?void 0:j.poke_status));return t}async function kn({myUid:a,cursor:m=null}){let v=await O({doc_id:"4186250744800382",variables:{count:8,cursor:m,scale:2,id:btoa(`app_collection:${a}:2356318349:2`)}});return JSON.parse(v)}async function xn(){try{const a=await Ve("https://www.facebook.com/me",{method:"GET",headers:{Accept:"text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7"}}),m=a.indexOf("chat_sidebar_contact_rankings");let v=m;for(;a[v]!=">"&&v>0;)v--;let t=m;for(;a[t]!="<"&&t<a.length;)t++;const b=a.substring(v+1,t),f=JSON.parse(b),F=Ze(f,"chat_sidebar_contact_rankings");return((F==null?void 0:F.filter(y=>y.status==0))||[]).map(y=>{var p,w,j,U,$,Y;return{uid:y.buddy_id||((p=y.user)==null?void 0:p.id),name:(w=y.user)==null?void 0:w.name,avatar:(U=(j=y.user)==null?void 0:j.profile_picture)==null?void 0:U.uri,hasStory:((Y=($=y.story_bucket)==null?void 0:$.nodes)==null?void 0:Y.length)>0}})}catch(a){return console.error(a),[]}}const vn=_.lazy(()=>Ge(()=>import("./UploadModal-DxqxqT8W.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9]),import.meta.url)),{Title:yn}=hn,k={FRIEND:"Friend",POKED:"Poked",UNFRIENDED:"Unfriended",REQUESTED:"Requested friend",NEW:"New friend"},bn={[k.POKED]:"green",[k.UNFRIENDED]:"red",[k.NEW]:"blue",[k.REQUESTED]:"pink"},Ue=a=>{switch(a){case k.FRIEND:return{en:"Friend",vi:"Bạn bè"};case k.POKED:return{en:"Poked",vi:"Đã chọc"};case k.UNFRIENDED:return{en:"Unfriended",vi:"Đã huỷ kết bạn"};case k.REQUESTED:return{en:"Requested friend",vi:"Đã gửi kết bạn"};case k.NEW:return{en:"New friend",vi:"Bạn mới"};default:return a}},jn=a=>{const m=(a==null?void 0:a.statuses)||[];return!m.includes(k.REQUESTED)&&(m.includes(k.NEW)||m.includes(k.UNFRIENDED))},Fn=a=>{const m=(a==null?void 0:a.statuses)||[];return!m.includes(k.NEW)&&!m.includes(k.UNFRIENDED)},ee={"Name contains special characters":{en:"Special characters",vi:"Ký tự đặc biệt",color:"orange"},"Name contains numbers":{en:"Contains numbers",vi:"Chứa số",color:"purple"},"No avatar":{en:"No avatar",vi:"Không avatar",color:"cyan"},"Strange uid":{en:"Strange UID",vi:"UID lạ",color:"blue"},Locked:{en:"Locked",vi:"Bị khoá",color:"red"},"Blocked messages":{en:"Blocked messages",vi:"Chặn tin nhắn",color:"red"}},$e={MALE:{en:"Male",vi:"Nam"},FEMALE:{en:"Female",vi:"Nữ"},UNKNOW:{en:"Unknown",vi:"Không xác định"}};function Zn(){const{message:a,notification:m}=en(),v=We(),{ti:t}=nn(),b=an(),f=J(X.profile),F=J(X.friendsByUid),y=J(X.setFriendsByUid),[p,w]=Z("AllFriends.data",[]),[j,U]=Z("AllFriends.interactions",[]),[$,Y]=Z("AllFriends.ranking",[]),B=_.useMemo(()=>{var s,r;const e=new Map,n=new Map;for(let c of j)(s=c.reactions_uid)==null||s.forEach(g=>e.set(g,(e.get(g)||0)+1)),(r=c.comments_uid)==null||r.forEach(g=>n.set(g,(n.get(g)||0)+1));return{reactions:e,comments:n}},[j]),P=_.useMemo(()=>(p==null?void 0:p.map((e,n)=>{var s,r;return{...e,recent:n,comments:((s=B==null?void 0:B.comments)==null?void 0:s.get(e.uid))||0,reactions:((r=B==null?void 0:B.reactions)==null?void 0:r.get(e.uid))||0,ranking:$==null?void 0:$.indexOf(e.uid)}}))||[],[p,B,$]),[ne,te]=_.useState(!1),[ie,se]=_.useState(0),[Ae,re]=_.useState(!1),[oe,ae]=_.useState(!1),L=_.useRef(null);_.useEffect(()=>{f!=null&&f.uid&&!(p!=null&&p.length)&&ce()},[]);const S=(e,n,s=!1,r=!1)=>{w(c=>V(c,h=>{Array.isArray(e)||(e=[e]);let d=[];for(let o of e){let l=h.findIndex(x=>x.uid==((o==null?void 0:o.uid)||o)),u=h[l];u?(u.statuses||(u.statuses=[]),!s&&!u.statuses.includes(n)?u.statuses.push(n):(Array.isArray(n)||(n=[n]),u.statuses=n),r&&d.push({index:l,data:u})):r?h.unshift({...o,statuses:[n]}):h.push({...o,statuses:[n]})}for(let{index:o,data:l}of d)h.splice(o,1),h.unshift(l);return h}))},Re=(e=p)=>{let n=!1;const s=(F==null?void 0:F[f.uid])||[],r=e.map(l=>l.uid),c=s.map(l=>l.uid),g=new Set(r),h=new Set(c),d=r.filter(l=>!h.has(l)),o=c.filter(l=>!g.has(l));d.length&&(n=!0,console.log("New friends: ",d),S(d,k.NEW,!0),s!=null&&s.length?m.open({type:"success",duration:0,message:t({en:`Find ${d.length} new friends`,vi:`Tìm thấy ${d.length} bạn mới`}),description:i.jsx("div",{style:{maxHeight:300,overflowY:"auto",overflowX:"hidden"},children:i.jsx("ol",{children:d.map(l=>{const u=e.find(x=>x.uid==l);return i.jsx("li",{children:i.jsx("a",{href:R(l),target:"_blank",children:(u==null?void 0:u.name)||l})},l)})})})}):m.open({type:"success",duration:0,message:t({en:`Saved friends to cache: ${d.length}`,vi:`Đã lưu danh sách bạn bè: ${d.length}`}),description:t({en:"Will notify if you have new friends / someone unfriended to you in future",vi:"Sẽ thông báo nếu có bạn mới / người huỷ kết bạn với bạn trong tương lai"})})),o.length&&(n=!0,console.log("Deleted friends: ",o),m.open({type:"info",duration:0,message:t({en:`Find ${o.length} unfriended`,vi:`Có ${o.length} người huỷ kết bạn`}),description:i.jsx("div",{style:{maxHeight:300,overflowY:"auto",overflowX:"hidden"},children:i.jsx("ol",{children:o.map(l=>{const u=s.find(x=>x.uid==l);return i.jsx("li",{children:i.jsx("a",{href:R(l),target:"_blank",children:(u==null?void 0:u.name)||l})},l)})})})})),n&&y(f==null?void 0:f.uid,e.map(l=>({uid:l.uid,name:l.name})))},ce=()=>{if(ne)return;E("AllFriends:onClickReload");const e="onClickReload";a.loading({key:e,content:t({en:"Fetching friends...",vi:"Đang tải bạn bè..."}),duration:0}),te(!0),gn({myUid:f==null?void 0:f.uid}).then(n=>{var r;if(Re(n),!(n!=null&&n.length))return a.error(t({en:"No data to show",vi:"Không có dữ liệu"}));const s=n.map(c=>{var g;return{...c,quickFilters:[(g=c.uid)!=null&&g.startsWith("1000")?null:"Strange uid",tn(c.avatar)?"No avatar":null,/\d/.test(c.name)?"Name contains numbers":null,sn(c.name)?"Name contains special characters":null].filter(Boolean)}});w(s),console.log(s),a.success({key:e,content:t({en:"Fetch friends completed",vi:"Tải xong bạn bè"})}),(r=L.current)==null||r.clearFilter()}).catch(n=>{a.error({key:e,content:t({en:"Failed to fetch friends",vi:"Lỗi tải bạn bè"})+": "+n.message}),console.log(n)}).finally(()=>{te(!1)})},le=async e=>{E("AllFriends:onClickUnfriendOne");const n="onClickUnfriendOne"+e.uid;try{return a.loading({key:n,content:t({en:"Unfriending...",vi:"Đang huỷ kết bạn..."})+" "+e.name,duration:0}),await mn({myUid:f==null?void 0:f.uid,targetUid:e.uid}),a.success({key:n,content:t({en:"Unfriend completed",vi:"Đã huỷ kết bạn"})+": "+e.name}),S(e,k.UNFRIENDED),!0}catch(s){return a.error({key:n,content:t({en:"Failed to unfriend",vi:"Lỗi huỷ kết bạn"})+": "+e.name+": "+s.message}),console.log(s),!1}},Be=async e=>{if(!await Q())return;E("AllFriends:onClickUnfriendSelected");const n=new Set;for(let r of e)await le(r)&&n.add(r.uid),await K(500);const s=n.size+"/"+e.length;m.open({type:"success",message:t({en:"Success",vi:"Thành công"}),description:t({en:`Unfriended completed ${s} friends`,vi:`Đã huỷ kết bạn với ${s} người`}),duration:0})},de=async e=>{E("AllFriends:onClickPokeFriend");const n="onClickPokeFriend"+e.uid;try{return a.loading({key:n,content:t({en:"Poking...",vi:"Đang chọc..."})+" "+e.name,duration:0}),await pn({myUid:f==null?void 0:f.uid,targetUid:e.uid}),a.success({key:n,content:t({en:"Poke completed",vi:"Chọc thành công"})+": "+e.name}),S(e,k.POKED),!0}catch(s){return a.error({key:n,content:t({en:"Failed to poke",vi:"Chọc thất bại"})+": "+e.name+": "+s.message}),console.log(s),!1}},Se=async e=>{E("AllFriends:onClickPokeSelected");const n=new Set;for(let r of e)await de(r)&&n.add(r.uid),await K(500);const s=n.size+"/"+e.length;m.open({type:"success",message:t({en:"Success",vi:"Thành công"}),description:t({en:`Poke completed ${s} friends`,vi:`Đã chọc ${s} bạn`}),duration:0})},ue=async e=>{E("AllFriends:onClickAddFriend");const n="onClickAddFriend"+e.uid;try{return a.loading({key:n,content:t({en:"Sending friend request...",vi:"Đang gửi kết bạn..."})+" "+e.name,duration:0}),await fn({myUid:f==null?void 0:f.uid,targetUid:e.uid}),a.success({key:n,content:t({en:"Send friend request success",vi:"Gửi kết bạn thành công"})+": "+e.name}),S(e,k.REQUESTED),!0}catch(s){return a.error({key:n,content:t({en:"Failed to send friend request",vi:"Lỗi gửi kết bạn"})+": "+s.message}),!1}},qe=async e=>{if(!await Q())return;E("AllFriends:onClickAddFriendSelected");const n=new Set;for(let r of e)await ue(r)&&n.add(r.uid),await K(500);const s=n.size+"/"+e.length;m.open({type:"success",message:t({en:"Success",vi:"Thành công"}),description:t({en:`Sent friend request success ${s} users`,vi:`Gửi kết bạn thành công với ${s} người`}),duration:0})},Le=async()=>{var h,d;if(ie)return;const e="AllFriends:onClickFindBlockedMessages";E(e);const n=(h=L.current)==null?void 0:h.getDataSelected(),s=n!=null&&n.length?n:p,r=[];let c=!1;for(let o=0;o<s.length&&!c;o++){se(!0),a.loading({key:e,duration:0,content:i.jsxs(i.Fragment,{children:[t({en:"Finding blocked messages...",vi:"Đang tìm bạn bè chặn tin nhắn..."})+`${r.length}/${o+1} - ${~~(o/s.length*100)}%`,i.jsx("br",{}),i.jsx("i",{children:t({en:"Click to stop",vi:"Bấm để dừng"})})]}),onClick:()=>c=!0});const l=s[o];await cn(l.uid)||(r.push(l),(d=L.current)==null||d.setDataSelected(r.map(u=>p.find(x=>x.uid===u.uid)||u)),w(u=>V(u,x=>{var T;const N=x.find(I=>I.uid===l.uid);N&&!((T=N.quickFilters)!=null&&T.includes("Blocked messages"))&&(N.quickFilters||(N.quickFilters=[]),N.quickFilters.push("Blocked messages"))})),a.success({key:e,content:t({en:"Found",vi:"Tìm thấy"})+" "+l.name+" ("+r.length+")"}))}se(!1);const g=r.length?i.jsxs(i.Fragment,{children:[t({en:`Found ${r.length} friends blocking your messages`,vi:`Tìm thấy ${r.length} bạn bè chặn tin nhắn`}),i.jsx("br",{}),i.jsx("ul",{children:r.map(o=>i.jsx("li",{children:o.name},o.uid))})]}):t({en:"No one block messages you",vi:"Không ai chặn tin nhắn của bạn"});a.success({key:e,content:g}),m.open({type:"success",message:t({en:"Success",vi:"Thành công"}),description:g,duration:0})},Me=async e=>{var n;if(!e)return a.error(t({en:"File empty",vi:"File rỗng"}));E("AllFriends:onUploadFriendsFile");try{const s=JSON.parse(e);if(!(s!=null&&s.length))return a.error(t({en:"No data",vi:"Không có dữ liệu"}));const r=new Set(s.map(d=>d.uid)),c=[];for(let d of p)r.has(d.uid)||c.push(d);const g=new Set(p.map(d=>d.uid)),h=[];for(let d of s)g.has(d.uid)||h.push(d);S(c,k.NEW,!1,!0),S(h,k.UNFRIENDED,!1,!0),[{title:t({en:`Found ${c.length} new friends`,vi:`Tìm thấy ${c.length} bạn mới`}),text:i.jsx("div",{style:{maxHeight:300,overflowY:"auto",overflowX:"hidden"},children:i.jsx("ol",{children:c.map(d=>i.jsx("li",{children:i.jsx("a",{href:R(d.uid),target:"_blank",children:d.name})},d.uid))})})},{title:t({en:`Found ${h.length} unfriended`,vi:`Tìm thấy ${h.length} người huỷ kết bạn`}),text:i.jsx("div",{style:{maxHeight:300,overflowY:"auto",overflowX:"hidden"},children:i.jsx("ol",{children:h.map(d=>i.jsx("li",{children:i.jsx("a",{href:R(d.uid),target:"_blank",children:d.name})},d.uid))})})}].forEach(({title:d,text:o})=>m.open({type:"success",message:d,description:o,duration:0})),(h.length||c.length)&&((n=L.current)==null||n.setDataSelected([...h,...c]))}catch(s){a.error(s.message)}},Oe=e=>{v("/bulk-downloader",{state:{targetId:e,platform:ze.Facebook}})},Ye=async()=>{if(!await Q()||oe)return;ae(!0);const e=b.start(),n="AllFriends:onClickScanInteractions";E(n),a.loading({key:n,duration:0,content:t({en:"Loading posts...",vi:"Đang tải bài viết..."})});let s=!1;const r=await rn(1/0,o=>{var T;U([...o]);const l=o.reduce((I,q)=>{var A;return I+(((A=q.comments_uid)==null?void 0:A.length)||0)},0),u=o.reduce((I,q)=>{var A;return I+(((A=q.reactions_uid)==null?void 0:A.length)||0)},0),x=new Date(((T=o[o.length-1])==null?void 0:T.created_time)||0),N=De(x);a.loading({key:n,duration:0,content:i.jsxs(i.Fragment,{children:[t({en:`Loading ${N}: ${o.length} posts, ${u} reactions, ${l} comments...`,vi:`Đang tải ${N}: ${o.length} bài viết, ${u} lượt thích, ${l} bình luận...`}),i.jsx("br",{}),i.jsx("i",{children:t({en:"Click to stop",vi:"Bấm để dừng"})})]}),onClick:()=>s=!0})},()=>s||e.value()),c=r.reduce((o,l)=>{var u;return o+(((u=l.comments_uid)==null?void 0:u.length)||0)},0),g=r.reduce((o,l)=>{var u;return o+(((u=l.reactions_uid)==null?void 0:u.length)||0)},0);a.destroy(n);const h=r[r.length-1],d=De(new Date((h==null?void 0:h.created_time)||0));m.open({type:"success",duration:0,message:t({en:"Scan interactions finished",vi:"Quét tương tác xong"}),description:i.jsxs(i.Fragment,{children:[t({en:`Scanned ${r.length} posts, ${g} reactions, ${c} comments, last post ${d} `,vi:`Quét được ${r.length} bài viết, ${g} lượt thích, ${c} bình luận, bài viết cuối ${d} `}),i.jsx("a",{href:R(h==null?void 0:h.postId),target:"_blank",children:R(h==null?void 0:h.postId)})]})}),U(r),ae(!1)},Pe=async()=>{const e="AllFriends:onClickFindBuddy";E(e),a.loading({key:e,duration:0,content:t({en:"Scanning ranking friends...",vi:"Đang tải xếp hạng bạn bè..."})});const n=await xn();console.log(n),a.destroy(e),m.open({type:"success",duration:0,message:t({en:`Scan ranking completed: ${n.length} friends`,vi:`Quét xếp hạng bạn bè xong: ${n.length} bạn`}),description:i.jsxs(i.Fragment,{children:["Top 20:",i.jsx("br",{}),i.jsx("ol",{children:n.slice(0,20).map((s,r)=>i.jsxs(i.Fragment,{children:[i.jsx("a",{href:R(s.uid),target:"_blank",children:r+1+": "+s.name},s.uid),i.jsx("br",{})]}))})]})}),Y(n.map(s=>s.uid))},He=async()=>{if(!await Q())return;re(!0);const e="AllFriends:onClickDeepScan";E(e),a.loading({key:e,content:t({en:"Deep Scanning...",vi:"Đang quét chuyên sâu..."}),duration:0});const n=await on(),s=[];let r=null;for(;;){const c=await kn({myUid:n,cursor:r}),{edges:g=[],page_info:h={}}=Te(c)||{};if(!g.length)break;const d=g.map(o=>{var u,x,N,T,I,q,A,he,ge,me,fe,pe,ke,xe,ve,ye,be,je,Fe,we;let l=(x=(u=o==null?void 0:o.node)==null?void 0:u.node)==null?void 0:x.id;if(!/^\d+$/.exec(l))try{let z=atob(l);l=((N=/\d+/.exec(z))==null?void 0:N[0])||l}catch(z){console.log(z)}return{uid:l,name:(I=(T=o==null?void 0:o.node)==null?void 0:T.title)==null?void 0:I.text,avatar:(A=(q=o==null?void 0:o.node)==null?void 0:q.image)==null?void 0:A.uri,avatarLarge:Ie(l),url:(he=o==null?void 0:o.node)==null?void 0:he.url,mutualFriendCount:((pe=(fe=(me=(ge=o==null?void 0:o.node)==null?void 0:ge.subtitle_text)==null?void 0:me.aggregated_ranges)==null?void 0:fe[0])==null?void 0:pe.count)||0,gender:((je=(be=(ye=(ve=(xe=(ke=o==null?void 0:o.node)==null?void 0:ke.actions_renderer)==null?void 0:xe.action)==null?void 0:ve.client_handler)==null?void 0:ye.profile_action)==null?void 0:be.restrictable_profile_owner)==null?void 0:je.gender)||"UNKNOW",isLocked:!((Fe=o==null?void 0:o.node)!=null&&Fe.subtitle_text)||!((we=o==null?void 0:o.node)!=null&&we.url),cursor:(o==null?void 0:o.cursor)||(h==null?void 0:h.end_cursor)}});w(o=>V(o,l=>(d.forEach(u=>{if(!u.uid)return;const x=l.find(N=>N.uid===u.uid);x?(x.mutualFriendCount=u.mutualFriendCount,x.gender=u.gender,x.quickFilters||(x.quickFilters=[]),u.isLocked&&!x.quickFilters.includes("Locked")&&x.quickFilters.push("Locked")):u.isLocked&&l.push({...u,quickFilters:["Locked"]})}),l))),s.push(...d),r=d[d.length-1].cursor,a.loading({key:e,content:t({en:"Deep Scanning...",vi:"Đang quét chuyên sâu..."})+`${~~(s.length/p.length*100)}% (${s.length}/${p.length})`,duration:0}),await K(200)}a.destroy(e),m.open({type:"success",message:t({en:"Deep Scanning completed",vi:"Hoàn tất Quét chuyên sâu"})+` (${s.length}/${p.length})`,description:t({en:'Please see in "Quick filters" column',vi:'Vui lòng xem cột "Bộ lọc"'})}),re(!1)},Qe=[{title:"#",key:"recent",dataIndex:"recent",sorter:(e,n)=>e.recent-n.recent,render:(e,n,s)=>n.recent+1,width:70,align:"center"},{title:t({en:"Name",vi:"Tên"}),dataIndex:"name",key:"name",sorter:(e,n)=>e.name.localeCompare(n.name),onSearch:(e,n,s)=>Ne(e,n)||Ne(e,s==null?void 0:s.uid),render:(e,n,s)=>i.jsxs(M,{style:{maxWidth:300},children:[i.jsx(ln,{shape:"square",src:i.jsx(dn,{src:n.avatarLarge,fallback:n.avatar}),size:50}),i.jsxs(M,{direction:"vertical",style:{marginLeft:"10px"},size:0,children:[i.jsx("a",{href:n.url,target:"_blank",children:i.jsx("b",{children:n.name})}),i.jsx("span",{style:{opacity:.5},children:n.uid})]})]}),width:"auto"},{title:t({en:"Quick Filters",vi:"Bộ lọc"}),dataIndex:"quickFilters",key:"quickFilters",render:(e,n,s)=>{var r;return((r=n.quickFilters)==null?void 0:r.map(c=>i.jsx(W,{color:ee[c].color,children:t(ee[c])},c)))||""},filters:Object.entries(ee).map(([e,n])=>({text:t(n)+" ("+p.filter(s=>{var r;return(r=s.quickFilters)==null?void 0:r.includes(e)}).length+")",value:e})),onFilter:(e,n)=>{var s;return(s=n.quickFilters)==null?void 0:s.includes(e)},width:150},...p.find(e=>e.gender)?[{title:t({en:"Gender",vi:"Giới tính"}),key:"gender",dataIndex:"gender",render:(e,n,s)=>{const r=t($e[n.gender])||"-";return n.gender==="FEMALE"?i.jsx(W,{color:"pink",children:r}):r},filters:Object.entries($e).map(([e,n])=>({text:t(n)+" ("+p.filter(s=>s.gender===e).length+")",value:e})),onFilter:(e,n)=>n.gender==e,width:120}]:[],...p.find(e=>e.mutualFriendCount)?[{title:t({en:"Mutual",vi:"Bạn chung"}),key:"mutualFriendCount",dataIndex:"mutualFriendCount",sorter:(e,n)=>e.mutualFriendCount-n.mutualFriendCount,width:120,align:"right"}]:[],...$.length?[{title:t({en:"Ranking",vi:"Xếp hạng"}),key:"ranking",dataIndex:"ranking",render:(e,n,s)=>e==-1?"_":e+1,sorter:(e,n)=>(e.ranking==-1?1/0:e.ranking)-(n.ranking==-1?1/0:n.ranking),width:100,align:"right"}]:[],...j!=null&&j.length?[{title:t({en:"Reactions",vi:"Thích"}),key:"reactions",dataIndex:"reactions",sorter:(e,n)=>e.reactions-n.reactions,width:100,align:"right"},{title:t({en:"Comments",vi:"Bình luận"}),key:"comments",dataIndex:"comments",sorter:(e,n)=>e.comments-n.comments,width:100,align:"right"}]:[],{title:t({en:"Friend status",vi:"Trạng thái"}),dataIndex:"status",key:"status",width:150,filters:Object.entries(k).map(([e,n])=>({text:t(Ue(n))+" ("+p.filter(s=>{var r,c;return((r=s.statuses)==null?void 0:r.includes(n))||n===k.FRIEND&&!((c=s.statuses)!=null&&c.length)}).length+")",value:n})),onFilter:(e,n)=>{var s,r;return((s=n.statuses)==null?void 0:s.includes(e))||e==k.FRIEND&&!((r=n.statuses)!=null&&r.length)},render:(e,n,s)=>{var r;return(r=n==null?void 0:n.statuses)!=null&&r.length?n.statuses.map(c=>({key:c,value:t(Ue(c))})).map(({key:c,value:g})=>i.jsx(W,{color:bn[c],children:g},c)):t({en:"Friend",vi:"Bạn bè"})},align:"right"},{title:t({en:"Action",vi:"Hành động"}),dataIndex:"action",key:"download",render:(e,n,s)=>{var r,c;return i.jsxs(M.Compact,{children:[i.jsx(D,{title:t({en:"Bulk Downloader",vi:"Tải hàng loạt"}),children:i.jsx(C,{type:"default",onClick:()=>Oe(n.uid),icon:i.jsx("i",{className:"fa-solid fa-download"})})}),i.jsx(D,{title:t({en:"Poke",vi:"Chọc"}),children:i.jsx(C,{type:"default",onClick:()=>de(n),icon:i.jsx("i",{className:"fa-regular fa-hand-point-right"})})}),(r=n.statuses)!=null&&r.includes(k.UNFRIENDED)||(c=n.statuses)!=null&&c.includes(k.NEW)?i.jsx(D,{title:t({en:"Request friend",vi:"Gửi kết bạn"}),children:i.jsx(C,{type:"default",onClick:()=>ue(n),icon:i.jsx("i",{className:"fa-solid fa-user-plus"})})}):i.jsx(D,{title:t({en:"Unfriend",vi:"Huỷ kết bạn"}),children:i.jsx(C,{danger:!0,onClick:()=>le(n),icon:i.jsx("i",{className:"fa-solid fa-trash-can"})})})]})},width:150,align:"right"}],Ke=e=>{var r,c;const n=(r=e==null?void 0:e.filter)==null?void 0:r.call(e,jn),s=(c=e==null?void 0:e.filter)==null?void 0:c.call(e,Fn);return i.jsxs(i.Fragment,{children:[i.jsx(C,{type:"primary",icon:ne?i.jsx("i",{className:"fa-solid fa-rotate-right fa-spin"}):i.jsx("i",{className:"fa-solid fa-rotate-right"}),onClick:ce,children:t({en:"Reload",vi:"Tải lại"})}),i.jsx(Xe,{data:e.length?e:p,options:[{key:"uid",label:".txt (friend uid)",prepareData:g=>({fileName:"friends_"+H().format("YYYY-MM-DD-HHmmss")+".txt",data:g.map(h=>h.uid).join(`
`)})},{key:"uid_name",label:".csv (friend uid+name)",prepareData:g=>({fileName:"friends_uid_name_"+H().format("YYYY-MM-DD-HHmmss")+".csv",data:Ce(g.map(h=>({uid:h.uid,name:h.name})))})},{key:"json",label:".json",prepareData:g=>({fileName:"friends"+H().format("YYYY-MM-DD-HHmmss")+".json",data:JSON.stringify(g,null,4)})},{key:"csv",label:".csv",prepareData:g=>({fileName:"friends"+H().format("YYYY-MM-DD-HHmmss")+".csv",data:Ce(g)})}]}),i.jsxs(M.Compact,{children:[i.jsx(_e,{title:t({en:"Check who is blocking your messages",vi:"Xem ai đang chặn tin nhắn của bạn"}),content:i.jsxs("ul",{children:[i.jsx("li",{children:t({en:"You still can message them",vi:"Bạn vẫn nhắn được cho họ"})}),i.jsx("li",{children:t({en:"They can still read your messages",vi:"Họ vẫn đọc được tin nhắn"})}),i.jsx("li",{children:t({en:"But facebook will never mark as read",vi:"Nhưng facebook sẽ không cập nhật trạng thái đã xem"})})]}),children:i.jsx(G,{title:t(t({en:"Check who is blocking your messages",vi:"Xem ai đang chặn tin nhắn của bạn"})),description:i.jsxs("ul",{children:[i.jsx("li",{children:t({en:`Are you sure to check ${(e==null?void 0:e.length)||P.length} friends?.
 `,vi:`Bạn có chắc muốn kiểm tra ${(e==null?void 0:e.length)||P.length} bạn bè?.`})}),i.jsx("li",{children:t({en:"You can select friends to check, instead of check all, to reduce load time.",vi:"Bạn có thể chọn bạn bè để kiểm tra, thay vì kiểm tra tất cả, để giảm thời gian xử lý."})})]}),onConfirm:Le,okText:t({en:"Yes",vi:"Kiểm tra"}),cancelText:t({en:"No",vi:"Huỷ"}),children:i.jsx(C,{loading:!!ie,icon:i.jsx("i",{className:"fa-solid fa-comment-slash"})})})}),i.jsx(vn,{accept:".json",title:t({en:"Upload friends file",vi:"Tải lên file bạn bè đã lưu"}),text:t({en:"Click or drag file to this area to upload",vi:"Click chọn hoặc kéo thả file vào đây"}),hint:t({en:"Support only .json backup file",vi:"Chỉ hỗ trợ file .json được xuất từ trang này"}),onSubmit:Me,renderButton:({showModal:g})=>i.jsx(_e,{title:t({en:"Check who unfriend you",vi:"Kiểm tra ai huỷ kết bạn với bạn"}),content:i.jsxs("ul",{children:[i.jsx("li",{children:t({en:"How it work: Export friends data to file, then compare it later",vi:"Cách hoạt động: Lưu danh sách bạn bè ra file trước, sau đó so sánh"})}),i.jsx("li",{children:t({en:"FB AIO can automatically detect who unfriend you",vi:"FB AIO sẽ tự động thông báo khi có người huỷ kết bạn"})}),i.jsx("li",{children:t({en:"Only use this feature if you want manual check",vi:"Chỉ sử dụng chức năng này nếu bạn muốn chủ động kiểm tra bằng tay"})})]}),children:i.jsx(C,{onClick:g,icon:i.jsx("i",{className:"fa-solid fa-user-slash"})})})}),i.jsx(D,{title:t({en:"Rank who has interacted with you the most recently. (Recent interactions)",vi:"Xếp hạng xem ai tương tác với bạn nhiều nhất thời gian gần đây (Tương tác gần đây)"}),children:i.jsx(C,{onClick:Pe,icon:i.jsx("i",{className:"fa-solid fa-ranking-star"}),children:t({en:"Ranking",vi:"Xếp hạng"})})}),i.jsx(D,{title:t({en:"Count friend's reactions and comments on all of your profile's posts (Total interactions)",vi:"Đếm like và comment của bạn bè trên tất cả bài viết của bạn (Tổng tương tác)"}),children:i.jsx(Ee,{count:"Hot",color:"red",style:{color:"white",zIndex:3},children:i.jsx(C,{loading:oe,icon:i.jsx("i",{className:"fa-solid fa-thumbs-up"}),onClick:Ye,children:t({en:"Interactions",vi:"Tương tác"})})})}),i.jsx(D,{title:t({en:"Deep scan all friends to get: locked friends, gender, mutual friends ...",vi:"Quét tất cả bạn bè để biết: bạn bè bị khoá, giới tính, bạn chung ..."}),children:i.jsx(Ee,{count:t({en:"New",vi:"Mới"}),color:"purple",style:{color:"white",zIndex:3},children:i.jsx(C,{loading:!!Ae,onClick:He,icon:i.jsx("i",{className:"fa-solid fa-magnifying-glass"}),children:t({en:"Deep scan",vi:"Quét chuyên sâu"})})})})]}),i.jsx(M.Compact,{children:e!=null&&e.length?i.jsxs(i.Fragment,{children:[i.jsx(D,{title:t({en:`Poke ${e.length} selected friends`,vi:`Chọc ${e.length} người được chọn`}),children:i.jsx(G,{title:t({en:`Poke ${e.length} selected friends`,vi:`Chọc ${e.length} người được chọn`}),description:t({en:"Are you sure to poke these friends?",vi:"Bạn có chắc muốn chọc những người này?"}),onConfirm:()=>Se(e),okText:t({en:"Yes",vi:"Chọc mạnh vào"}),cancelText:t({en:"No",vi:"Tha"}),children:i.jsx(C,{type:"default",icon:i.jsx("i",{className:"fa-solid fa-hand-point-right"}),children:e.length?" "+e.length:""})})}),(n==null?void 0:n.length)>0?i.jsx(D,{title:t({en:`Request friend with ${n.length} selected users`,vi:`Gửi kết bạn với ${n.length} người được chọn`}),children:i.jsx(G,{title:t({en:`Request friend with ${n.length} selected users`,vi:`Gửi kết bạn với ${n.length} người được chọn`}),description:t({en:"Are you sure to send friend request to these users?",vi:"Bạn có chắc muốn gửi lời mời kết bạn cho những người này?"}),onConfirm:()=>qe(n),okText:t({en:"Yes",vi:"Gửi"}),cancelText:t({en:"No",vi:"Huỷ"}),children:i.jsx(C,{icon:i.jsx("i",{className:"fa-solid fa-user-plus"}),children:n.length})})}):null,(s==null?void 0:s.length)>0?i.jsx(D,{title:t({en:`Unfriend ${s.length} selected friends`,vi:`Huỷ kết bạn ${s.length} người được chọn`}),children:i.jsx(G,{title:t({en:`Unfriend ${s.length} selected friends`,vi:`Huỷ kết bạn ${s.length} người được chọn`}),description:t({en:"Are you sure to unfriend these friends?",vi:"Bạn có chắc muốn huỷ kết bạn những người này?"}),onConfirm:()=>Be(s),okText:t({en:"Yes",vi:"Bye bye"}),cancelText:t({en:"No",vi:"Tha"}),children:i.jsx(C,{danger:!0,icon:i.jsx("i",{className:"fa-solid fa-trash-can"}),children:s.length})})}):null]}):null})]})};return i.jsxs("div",{style:{display:"flex",flexDirection:"column",width:"100%",height:"100%"},children:[i.jsxs(un,{align:"middle",style:{margin:"16px"},children:[i.jsx(yn,{level:3,style:{margin:0},children:t({en:"Friends manager",vi:"Quản lý bạn bè"})}),i.jsx(W,{style:{marginLeft:"10px",fontWeight:"bold",color:"#888"},children:P.length})]}),i.jsx(Je,{ref:L,data:P,columns:Qe,size:"small",searchable:!0,selectable:!0,keyExtractor:e=>e.uid,style:{flex:1,maxHeight:"100%"},renderTitle:Ke})]})}export{Zn as default};
