const __vite__fileDeps=["./UploadModal-tQ_qd3xn.js","./index-Dwpma3vX.js","./index-CKPZ9v0x.css","./index-By34tJn7.js","./PurePanel-lbpTE9yy.js","./MyApp-CaAHD_sl.js","./useBreakpoint-B5KK-xwT.js","./index-CnpxtjSf.js","./addEventListener-CAhr9VRf.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{aG as Gn,ap as J,aq as X,r as _,av as i,aw as C,aA as zn,aR as Jn,aQ as V}from"./index-Dwpma3vX.js";import{d as S}from"./dayjs.min-zzIdT-DN.js";import Xn from"./MyTable-BwfSbUPO.js";import{E as Vn}from"./ExportButton-C31tM-Dx.js";import{A as O,C as In,g as R,h as An,D as Zn,E as ne,c as ee,u as te,d as Z,t as E,G as ie,H as se,I as Cn,b as Y,T as D,o as En,B as Dn,i as Q,J as K,K as re,L as _n,M as oe}from"./MyApp-CaAHD_sl.js";import{u as ae}from"./useForceStop-B5RyY1bV.js";import{d as ce}from"./messages-3c73xXxx.js";import{A as le}from"./index-BnLGuCJ5.js";import{I as de}from"./index-BAmkjU4S.js";import{T as W}from"./index-5v6WO3VV.js";import{R as ue}from"./row-BHiT-vw1.js";import{T as he}from"./index-CnpxtjSf.js";import{P as $n}from"./index-D6d6ZTml.js";import{P as G}from"./index-BpqmxeLP.js";import"./index-qYag26Fr.js";import"./Table-DhYND0kw.js";import"./addEventListener-CAhr9VRf.js";import"./index-yv7_mBYm.js";import"./PurePanel-lbpTE9yy.js";import"./index-QNqn8XPT.js";import"./index-C3vKAcCx.js";import"./index-CjRY1w1B.js";import"./Dropdown-Cy_5j5G7.js";import"./index-3FZft9mY.js";import"./useBreakpoint-B5KK-xwT.js";import"./Pagination-CDlhp95V.js";import"./index-D-uzMAVF.js";import"./file-download-BEwLUfs_.js";async function ge({myUid:a,targetUid:m=""}){const v=await O({doc_id:"4936483286421335",variables:{id:m||a,query:"",scale:1}});try{const t=JSON.parse(v||"{}"),{edges:b=[]}=In(t,!1);return b.map(f=>{var j,y,p,w,F,$;return{uid:(j=f.node)==null?void 0:j.id,url:((y=f.node)==null?void 0:y.url)||R((p=f.node)==null?void 0:p.id),name:(w=f.node)==null?void 0:w.name,avatar:($=(F=f.node)==null?void 0:F.photo)==null?void 0:$.uri,avatarLarge:An(f.node.id)}})}catch{return[]}}async function me({myUid:a,targetUid:m}){var b;const v=await O({doc_id:"8752443744796374",variables:{input:{source:"friending_jewel",unfriended_user_id:m,actor_id:a},scale:1}}),t=JSON.parse(v||"{}");if((b=t.errors)!=null&&b.length)throw new Error(t.errors[0].message);return t}async function fe({myUid:a,targetUid:m}){var b;const v=await O({doc_id:"6294978773852692",variables:{input:{attribution_id_v2:"FriendingCometRoot.react,comet.friending,tap_tabbar,1667288605315,127814,2356318349,",friend_requestee_ids:[m],people_you_may_know_location:"friends_center",refs:[null],source:"people_you_may_know",warn_ack_for_ids:[],actor_id:a},scale:2}}),t=JSON.parse(v);if((b=t.errors)!=null&&b.length)throw new Error(t.errors[0].message);return t}async function pe({myUid:a,targetUid:m}){var b,f,j,y,p,w,F;const v=await O({doc_id:"5028133957233114",variables:{input:{actor_id:a,user_id:m}}}),t=JSON.parse(v||"{}");if((b=t.errors)!=null&&b.length)throw new Error(t.errors[0].message);if(((y=(j=(f=t==null?void 0:t.data)==null?void 0:f.user_poke)==null?void 0:j.user)==null?void 0:y.poke_status)!="PENDING")throw new Error("Failed to poke friend: "+((F=(w=(p=t==null?void 0:t.data)==null?void 0:p.user_poke)==null?void 0:w.user)==null?void 0:F.poke_status));return t}async function ke({myUid:a,cursor:m=null}){let v=await O({doc_id:"4186250744800382",variables:{count:8,cursor:m,scale:2,id:btoa(`app_collection:${a}:2356318349:2`)}});return JSON.parse(v)}async function xe(){try{const a=await Zn("https://www.facebook.com/me",{method:"GET",headers:{Accept:"text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7"}}),m=a.indexOf("chat_sidebar_contact_rankings");let v=m;for(;a[v]!=">"&&v>0;)v--;let t=m;for(;a[t]!="<"&&t<a.length;)t++;const b=a.substring(v+1,t),f=JSON.parse(b),j=ne(f,"chat_sidebar_contact_rankings");return((j==null?void 0:j.filter(y=>y.status==0))||[]).map(y=>{var p,w,F,$,U,P;return{uid:y.buddy_id||((p=y.user)==null?void 0:p.id),name:(w=y.user)==null?void 0:w.name,avatar:($=(F=y.user)==null?void 0:F.profile_picture)==null?void 0:$.uri,hasStory:((P=(U=y.story_bucket)==null?void 0:U.nodes)==null?void 0:P.length)>0}})}catch(a){return console.error(a),[]}}const ve=_.lazy(()=>zn(()=>import("./UploadModal-tQ_qd3xn.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8]),import.meta.url)),{Title:ye}=he,k={FRIEND:"Friend",POKED:"Poked",UNFRIENDED:"Unfriended",REQUESTED:"Requested friend",NEW:"New friend"},be={[k.POKED]:"green",[k.UNFRIENDED]:"red",[k.NEW]:"blue",[k.REQUESTED]:"pink"},Un=a=>{switch(a){case k.FRIEND:return{en:"Friend",vi:"Bạn bè"};case k.POKED:return{en:"Poked",vi:"Đã chọc"};case k.UNFRIENDED:return{en:"Unfriended",vi:"Đã huỷ kết bạn"};case k.REQUESTED:return{en:"Requested friend",vi:"Đã gửi kết bạn"};case k.NEW:return{en:"New friend",vi:"Bạn mới"};default:return a}},Fe=a=>{const m=(a==null?void 0:a.statuses)||[];return!m.includes(k.REQUESTED)&&(m.includes(k.NEW)||m.includes(k.UNFRIENDED))},je=a=>{const m=(a==null?void 0:a.statuses)||[];return!m.includes(k.NEW)&&!m.includes(k.UNFRIENDED)},nn={"Name contains special characters":{en:"Special characters",vi:"Ký tự đặc biệt",color:"orange"},"Name contains numbers":{en:"Contains numbers",vi:"Chứa số",color:"purple"},"No avatar":{en:"No avatar",vi:"Không avatar",color:"cyan"},"Strange uid":{en:"Strange UID",vi:"UID lạ",color:"blue"},Locked:{en:"Locked",vi:"Bị khoá",color:"red"},"Blocked messages":{en:"Blocked messages",vi:"Chặn tin nhắn",color:"red"}},Tn={MALE:{en:"Male",vi:"Nam"},FEMALE:{en:"Female",vi:"Nữ"},UNKNOW:{en:"Unknown",vi:"Không xác định"}};function Ve(){const{message:a,notification:m}=ee(),v=Gn(),{ti:t}=te(),b=ae(),f=J(X.profile),j=J(X.friendsByUid),y=J(X.setFriendsByUid),[p,w]=Z("AllFriends.data",[]),[F,$]=Z("AllFriends.interactions",[]),[U,P]=Z("AllFriends.ranking",[]),q=_.useMemo(()=>{var s,r;const n=new Map,e=new Map;for(let c of F)(s=c.reactions_uid)==null||s.forEach(g=>n.set(g,(n.get(g)||0)+1)),(r=c.comments_uid)==null||r.forEach(g=>e.set(g,(e.get(g)||0)+1));return{reactions:n,comments:e}},[F]),H=_.useMemo(()=>(p==null?void 0:p.map((n,e)=>{var s,r;return{...n,recent:e,comments:((s=q==null?void 0:q.comments)==null?void 0:s.get(n.uid))||0,reactions:((r=q==null?void 0:q.reactions)==null?void 0:r.get(n.uid))||0,ranking:U==null?void 0:U.indexOf(n.uid)}}))||[],[p,q,U]),[en,tn]=_.useState(!1),[sn,rn]=_.useState(0),[Rn,on]=_.useState(!1),[an,cn]=_.useState(!1),M=_.useRef(null);_.useEffect(()=>{f!=null&&f.uid&&!(p!=null&&p.length)&&ln()},[]);const B=(n,e,s=!1,r=!1)=>{w(c=>V(c,h=>{Array.isArray(n)||(n=[n]);let d=[];for(let o of n){let l=h.findIndex(x=>x.uid==((o==null?void 0:o.uid)||o)),u=h[l];u?(u.statuses||(u.statuses=[]),!s&&!u.statuses.includes(e)?u.statuses.push(e):(Array.isArray(e)||(e=[e]),u.statuses=e),r&&d.push({index:l,data:u})):r?h.unshift({...o,statuses:[e]}):h.push({...o,statuses:[e]})}for(let{index:o,data:l}of d)h.splice(o,1),h.unshift(l);return h}))},qn=(n=p)=>{let e=!1;const s=(j==null?void 0:j[f.uid])||[],r=n.map(l=>l.uid),c=s.map(l=>l.uid),g=new Set(r),h=new Set(c),d=r.filter(l=>!h.has(l)),o=c.filter(l=>!g.has(l));d.length&&(e=!0,console.log("New friends: ",d),B(d,k.NEW,!0),s!=null&&s.length?m.open({type:"success",duration:0,message:t({en:`Find ${d.length} new friends`,vi:`Tìm thấy ${d.length} bạn mới`}),description:i.jsx("div",{style:{maxHeight:300,overflowY:"auto",overflowX:"hidden"},children:i.jsx("ol",{children:d.map(l=>{const u=n.find(x=>x.uid==l);return i.jsx("li",{children:i.jsx("a",{href:R(l),target:"_blank",children:(u==null?void 0:u.name)||l})},l)})})})}):m.open({type:"success",duration:0,message:t({en:`Saved friends to cache: ${d.length}`,vi:`Đã lưu danh sách bạn bè: ${d.length}`}),description:t({en:"Will notify if you have new friends / someone unfriended to you in future",vi:"Sẽ thông báo nếu có bạn mới / người huỷ kết bạn với bạn trong tương lai"})})),o.length&&(e=!0,console.log("Deleted friends: ",o),m.open({type:"info",duration:0,message:t({en:`Find ${o.length} unfriended`,vi:`Có ${o.length} người huỷ kết bạn`}),description:i.jsx("div",{style:{maxHeight:300,overflowY:"auto",overflowX:"hidden"},children:i.jsx("ol",{children:o.map(l=>{const u=s.find(x=>x.uid==l);return i.jsx("li",{children:i.jsx("a",{href:R(l),target:"_blank",children:(u==null?void 0:u.name)||l})},l)})})})})),e&&y(f==null?void 0:f.uid,n.map(l=>({uid:l.uid,name:l.name})))},ln=()=>{if(en)return;E("AllFriends:onClickReload");const n="onClickReload";a.loading({key:n,content:t({en:"Fetching friends...",vi:"Đang tải bạn bè..."}),duration:0}),tn(!0),ge({myUid:f==null?void 0:f.uid}).then(e=>{var r;if(qn(e),!(e!=null&&e.length))return a.error(t({en:"No data to show",vi:"Không có dữ liệu"}));const s=e.map(c=>{var g;return{...c,quickFilters:[(g=c.uid)!=null&&g.startsWith("1000")?null:"Strange uid",ie(c.avatar)?"No avatar":null,/\d/.test(c.name)?"Name contains numbers":null,se(c.name)?"Name contains special characters":null].filter(Boolean)}});w(s),console.log(s),a.success({key:n,content:t({en:"Fetch friends completed",vi:"Tải xong bạn bè"})}),(r=M.current)==null||r.clearFilter()}).catch(e=>{a.error({key:n,content:t({en:"Failed to fetch friends",vi:"Lỗi tải bạn bè"})+": "+e.message}),console.log(e)}).finally(()=>{tn(!1)})},dn=async n=>{E("AllFriends:onClickUnfriendOne");const e="onClickUnfriendOne"+n.uid;try{return a.loading({key:e,content:t({en:"Unfriending...",vi:"Đang huỷ kết bạn..."})+" "+n.name,duration:0}),await me({myUid:f==null?void 0:f.uid,targetUid:n.uid}),a.success({key:e,content:t({en:"Unfriend completed",vi:"Đã huỷ kết bạn"})+": "+n.name}),B(n,k.UNFRIENDED),!0}catch(s){return a.error({key:e,content:t({en:"Failed to unfriend",vi:"Lỗi huỷ kết bạn"})+": "+n.name+": "+s.message}),console.log(s),!1}},Bn=async n=>{if(!await Q())return;E("AllFriends:onClickUnfriendSelected");const e=new Set;for(let r of n)await dn(r)&&e.add(r.uid),await K(500);const s=e.size+"/"+n.length;m.open({type:"success",message:t({en:"Success",vi:"Thành công"}),description:t({en:`Unfriended completed ${s} friends`,vi:`Đã huỷ kết bạn với ${s} người`}),duration:0})},un=async n=>{E("AllFriends:onClickPokeFriend");const e="onClickPokeFriend"+n.uid;try{return a.loading({key:e,content:t({en:"Poking...",vi:"Đang chọc..."})+" "+n.name,duration:0}),await pe({myUid:f==null?void 0:f.uid,targetUid:n.uid}),a.success({key:e,content:t({en:"Poke completed",vi:"Chọc thành công"})+": "+n.name}),B(n,k.POKED),!0}catch(s){return a.error({key:e,content:t({en:"Failed to poke",vi:"Chọc thất bại"})+": "+n.name+": "+s.message}),console.log(s),!1}},Ln=async n=>{E("AllFriends:onClickPokeSelected");const e=new Set;for(let r of n)await un(r)&&e.add(r.uid),await K(500);const s=e.size+"/"+n.length;m.open({type:"success",message:t({en:"Success",vi:"Thành công"}),description:t({en:`Poke completed ${s} friends`,vi:`Đã chọc ${s} bạn`}),duration:0})},hn=async n=>{E("AllFriends:onClickAddFriend");const e="onClickAddFriend"+n.uid;try{return a.loading({key:e,content:t({en:"Sending friend request...",vi:"Đang gửi kết bạn..."})+" "+n.name,duration:0}),await fe({myUid:f==null?void 0:f.uid,targetUid:n.uid}),a.success({key:e,content:t({en:"Send friend request success",vi:"Gửi kết bạn thành công"})+": "+n.name}),B(n,k.REQUESTED),!0}catch(s){return a.error({key:e,content:t({en:"Failed to send friend request",vi:"Lỗi gửi kết bạn"})+": "+s.message}),!1}},Mn=async n=>{if(!await Q())return;E("AllFriends:onClickAddFriendSelected");const e=new Set;for(let r of n)await hn(r)&&e.add(r.uid),await K(500);const s=e.size+"/"+n.length;m.open({type:"success",message:t({en:"Success",vi:"Thành công"}),description:t({en:`Sent friend request success ${s} users`,vi:`Gửi kết bạn thành công với ${s} người`}),duration:0})},Yn=async()=>{var h,d;if(sn)return;const n="AllFriends:onClickFindBlockedMessages";E(n);const e=(h=M.current)==null?void 0:h.getDataSelected(),s=e!=null&&e.length?e:p,r=[];let c=!1;for(let o=0;o<s.length&&!c;o++){rn(!0),a.loading({key:n,duration:0,content:i.jsxs(i.Fragment,{children:[t({en:"Finding blocked messages...",vi:"Đang tìm bạn bè chặn tin nhắn..."})+`${r.length}/${o+1} - ${~~(o/s.length*100)}%`,i.jsx("br",{}),i.jsx("i",{children:t({en:"Click to stop",vi:"Bấm để dừng"})})]}),onClick:()=>c=!0});const l=s[o];await ce(l.uid)||(r.push(l),(d=M.current)==null||d.setDataSelected(r.map(u=>p.find(x=>x.uid===u.uid)||u)),w(u=>V(u,x=>{var T;const N=x.find(I=>I.uid===l.uid);N&&!((T=N.quickFilters)!=null&&T.includes("Blocked messages"))&&(N.quickFilters||(N.quickFilters=[]),N.quickFilters.push("Blocked messages"))})),a.success({key:n,content:t({en:"Found",vi:"Tìm thấy"})+" "+l.name+" ("+r.length+")"}))}rn(!1);const g=r.length?i.jsxs(i.Fragment,{children:[t({en:`Found ${r.length} friends blocking your messages`,vi:`Tìm thấy ${r.length} bạn bè chặn tin nhắn`}),i.jsx("br",{}),i.jsx("ul",{children:r.map(o=>i.jsx("li",{children:o.name},o.uid))})]}):t({en:"No one block messages you",vi:"Không ai chặn tin nhắn của bạn"});a.success({key:n,content:g}),m.open({type:"success",message:t({en:"Success",vi:"Thành công"}),description:g,duration:0})},On=async n=>{var e;if(!n)return a.error(t({en:"File empty",vi:"File rỗng"}));E("AllFriends:onUploadFriendsFile");try{const s=JSON.parse(n);if(!(s!=null&&s.length))return a.error(t({en:"No data",vi:"Không có dữ liệu"}));const r=new Set(s.map(d=>d.uid)),c=[];for(let d of p)r.has(d.uid)||c.push(d);const g=new Set(p.map(d=>d.uid)),h=[];for(let d of s)g.has(d.uid)||h.push(d);B(c,k.NEW,!1,!0),B(h,k.UNFRIENDED,!1,!0),[{title:t({en:`Found ${c.length} new friends`,vi:`Tìm thấy ${c.length} bạn mới`}),text:i.jsx("div",{style:{maxHeight:300,overflowY:"auto",overflowX:"hidden"},children:i.jsx("ol",{children:c.map(d=>i.jsx("li",{children:i.jsx("a",{href:R(d.uid),target:"_blank",children:d.name})},d.uid))})})},{title:t({en:`Found ${h.length} unfriended`,vi:`Tìm thấy ${h.length} người huỷ kết bạn`}),text:i.jsx("div",{style:{maxHeight:300,overflowY:"auto",overflowX:"hidden"},children:i.jsx("ol",{children:h.map(d=>i.jsx("li",{children:i.jsx("a",{href:R(d.uid),target:"_blank",children:d.name})},d.uid))})})}].forEach(({title:d,text:o})=>m.open({type:"success",message:d,description:o,duration:0})),(h.length||c.length)&&((e=M.current)==null||e.setDataSelected([...h,...c]))}catch(s){a.error(s.message)}},Pn=n=>{v("/bulk-downloader",{state:{targetId:n,platform:Jn.Facebook}})},Hn=async()=>{if(!await Q()||an)return;cn(!0);const n=b.start(),e="AllFriends:onClickScanInteractions";E(e),a.loading({key:e,duration:0,content:t({en:"Loading posts...",vi:"Đang tải bài viết..."})});let s=!1;const r=await re(1/0,o=>{var T;$([...o]);const l=o.reduce((I,L)=>{var A;return I+(((A=L.comments_uid)==null?void 0:A.length)||0)},0),u=o.reduce((I,L)=>{var A;return I+(((A=L.reactions_uid)==null?void 0:A.length)||0)},0),x=new Date(((T=o[o.length-1])==null?void 0:T.created_time)||0),N=_n(x);a.loading({key:e,duration:0,content:i.jsxs(i.Fragment,{children:[t({en:`Loading ${N}: ${o.length} posts, ${u} reactions, ${l} comments...`,vi:`Đang tải ${N}: ${o.length} bài viết, ${u} lượt thích, ${l} bình luận...`}),i.jsx("br",{}),i.jsx("i",{children:t({en:"Click to stop",vi:"Bấm để dừng"})})]}),onClick:()=>s=!0})},()=>s||n.value()),c=r.reduce((o,l)=>{var u;return o+(((u=l.comments_uid)==null?void 0:u.length)||0)},0),g=r.reduce((o,l)=>{var u;return o+(((u=l.reactions_uid)==null?void 0:u.length)||0)},0);a.destroy(e);const h=r[r.length-1],d=_n(new Date((h==null?void 0:h.created_time)||0));m.open({type:"success",duration:0,message:t({en:"Scan interactions finished",vi:"Quét tương tác xong"}),description:i.jsxs(i.Fragment,{children:[t({en:`Scanned ${r.length} posts, ${g} reactions, ${c} comments, last post ${d} `,vi:`Quét được ${r.length} bài viết, ${g} lượt thích, ${c} bình luận, bài viết cuối ${d} `}),i.jsx("a",{href:R(h==null?void 0:h.postId),target:"_blank",children:R(h==null?void 0:h.postId)})]})}),$(r),cn(!1)},Sn=async()=>{const n="AllFriends:onClickFindBuddy";E(n),a.loading({key:n,duration:0,content:t({en:"Scanning ranking friends...",vi:"Đang tải xếp hạng bạn bè..."})});const e=await xe();console.log(e),a.destroy(n),m.open({type:"success",duration:0,message:t({en:`Scan ranking completed: ${e.length} friends`,vi:`Quét xếp hạng bạn bè xong: ${e.length} bạn`}),description:i.jsxs(i.Fragment,{children:["Top 20:",i.jsx("br",{}),i.jsx("ol",{children:e.slice(0,20).map((s,r)=>i.jsxs(i.Fragment,{children:[i.jsx("a",{href:R(s.uid),target:"_blank",children:r+1+": "+s.name},s.uid),i.jsx("br",{})]}))})]})}),P(e.map(s=>s.uid))},Qn=async()=>{if(!await Q())return;on(!0);const n="AllFriends:onClickDeepScan";E(n),a.loading({key:n,content:t({en:"Deep Scanning...",vi:"Đang quét chuyên sâu..."}),duration:0});const e=await oe(),s=[];let r=null;for(;;){const c=await ke({myUid:e,cursor:r}),{edges:g=[],page_info:h={}}=In(c)||{};if(!g.length)break;const d=g.map(o=>{var u,x,N,T,I,L,A,gn,mn,fn,pn,kn,xn,vn,yn,bn,Fn,jn,wn,Nn;let l=(x=(u=o==null?void 0:o.node)==null?void 0:u.node)==null?void 0:x.id;if(!/^\d+$/.exec(l))try{let z=atob(l);l=((N=/\d+/.exec(z))==null?void 0:N[0])||l}catch(z){console.log(z)}return{uid:l,name:(I=(T=o==null?void 0:o.node)==null?void 0:T.title)==null?void 0:I.text,avatar:(A=(L=o==null?void 0:o.node)==null?void 0:L.image)==null?void 0:A.uri,avatarLarge:An(l),url:(gn=o==null?void 0:o.node)==null?void 0:gn.url,mutualFriendCount:((kn=(pn=(fn=(mn=o==null?void 0:o.node)==null?void 0:mn.subtitle_text)==null?void 0:fn.aggregated_ranges)==null?void 0:pn[0])==null?void 0:kn.count)||0,gender:((jn=(Fn=(bn=(yn=(vn=(xn=o==null?void 0:o.node)==null?void 0:xn.actions_renderer)==null?void 0:vn.action)==null?void 0:yn.client_handler)==null?void 0:bn.profile_action)==null?void 0:Fn.restrictable_profile_owner)==null?void 0:jn.gender)||"UNKNOW",isLocked:!((wn=o==null?void 0:o.node)!=null&&wn.subtitle_text)||!((Nn=o==null?void 0:o.node)!=null&&Nn.url),cursor:(o==null?void 0:o.cursor)||(h==null?void 0:h.end_cursor)}});w(o=>V(o,l=>(d.forEach(u=>{if(!u.uid)return;const x=l.find(N=>N.uid===u.uid);x?(x.mutualFriendCount=u.mutualFriendCount,x.gender=u.gender,x.quickFilters||(x.quickFilters=[]),u.isLocked&&!x.quickFilters.includes("Locked")&&x.quickFilters.push("Locked")):u.isLocked&&l.push({...u,quickFilters:["Locked"]})}),l))),s.push(...d),r=d[d.length-1].cursor,a.loading({key:n,content:t({en:"Deep Scanning...",vi:"Đang quét chuyên sâu..."})+`${~~(s.length/p.length*100)}% (${s.length}/${p.length})`,duration:0}),await K(200)}a.destroy(n),m.open({type:"success",message:t({en:"Deep Scanning completed",vi:"Hoàn tất Quét chuyên sâu"})+` (${s.length}/${p.length})`,description:t({en:'Please see in "Quick filters" column',vi:'Vui lòng xem cột "Bộ lọc"'})}),on(!1)},Kn=[{title:"#",key:"recent",dataIndex:"recent",sorter:(n,e)=>n.recent-e.recent,render:(n,e,s)=>e.recent+1,width:70,align:"center"},{title:t({en:"Name",vi:"Tên"}),dataIndex:"name",key:"name",sorter:(n,e)=>n.name.localeCompare(e.name),onSearch:(n,e,s)=>Cn(n,e)||Cn(n,s==null?void 0:s.uid),render:(n,e,s)=>i.jsxs(Y,{style:{maxWidth:300},children:[i.jsx(le,{shape:"square",src:i.jsx(de,{src:e.avatarLarge,fallback:e.avatar}),size:50}),i.jsxs(Y,{direction:"vertical",style:{marginLeft:"10px"},size:0,children:[i.jsx("a",{href:e.url,target:"_blank",children:i.jsx("b",{children:e.name})}),i.jsx("span",{style:{opacity:.5},children:e.uid})]})]}),width:"auto"},{title:t({en:"Quick Filters",vi:"Bộ lọc"}),dataIndex:"quickFilters",key:"quickFilters",render:(n,e,s)=>{var r;return((r=e.quickFilters)==null?void 0:r.map(c=>i.jsx(W,{color:nn[c].color,children:t(nn[c])},c)))||""},filters:Object.entries(nn).map(([n,e])=>({text:t(e)+" ("+p.filter(s=>{var r;return(r=s.quickFilters)==null?void 0:r.includes(n)}).length+")",value:n})),onFilter:(n,e)=>{var s;return(s=e.quickFilters)==null?void 0:s.includes(n)},width:150},...p.find(n=>n.gender)?[{title:t({en:"Gender",vi:"Giới tính"}),key:"gender",dataIndex:"gender",render:(n,e,s)=>{const r=t(Tn[e.gender])||"-";return e.gender==="FEMALE"?i.jsx(W,{color:"pink",children:r}):r},filters:Object.entries(Tn).map(([n,e])=>({text:t(e)+" ("+p.filter(s=>s.gender===n).length+")",value:n})),onFilter:(n,e)=>e.gender==n,width:120}]:[],...p.find(n=>n.mutualFriendCount)?[{title:t({en:"Mutual",vi:"Bạn chung"}),key:"mutualFriendCount",dataIndex:"mutualFriendCount",sorter:(n,e)=>n.mutualFriendCount-e.mutualFriendCount,width:120,align:"right"}]:[],...U.length?[{title:t({en:"Ranking",vi:"Xếp hạng"}),key:"ranking",dataIndex:"ranking",render:(n,e,s)=>n==-1?"_":n+1,sorter:(n,e)=>(n.ranking==-1?1/0:n.ranking)-(e.ranking==-1?1/0:e.ranking),width:100,align:"right"}]:[],...F!=null&&F.length?[{title:t({en:"Reactions",vi:"Thích"}),key:"reactions",dataIndex:"reactions",sorter:(n,e)=>n.reactions-e.reactions,width:100,align:"right"},{title:t({en:"Comments",vi:"Bình luận"}),key:"comments",dataIndex:"comments",sorter:(n,e)=>n.comments-e.comments,width:100,align:"right"}]:[],{title:t({en:"Friend status",vi:"Trạng thái"}),dataIndex:"status",key:"status",width:150,filters:Object.entries(k).map(([n,e])=>({text:t(Un(e))+" ("+p.filter(s=>{var r,c;return((r=s.statuses)==null?void 0:r.includes(e))||e===k.FRIEND&&!((c=s.statuses)!=null&&c.length)}).length+")",value:e})),onFilter:(n,e)=>{var s,r;return((s=e.statuses)==null?void 0:s.includes(n))||n==k.FRIEND&&!((r=e.statuses)!=null&&r.length)},render:(n,e,s)=>{var r;return(r=e==null?void 0:e.statuses)!=null&&r.length?e.statuses.map(c=>({key:c,value:t(Un(c))})).map(({key:c,value:g})=>i.jsx(W,{color:be[c],children:g},c)):t({en:"Friend",vi:"Bạn bè"})},align:"right"},{title:t({en:"Action",vi:"Hành động"}),dataIndex:"action",key:"download",render:(n,e,s)=>{var r,c;return i.jsxs(Y.Compact,{children:[i.jsx(D,{title:t({en:"Bulk Downloader",vi:"Tải hàng loạt"}),children:i.jsx(C,{type:"default",onClick:()=>Pn(e.uid),icon:i.jsx("i",{className:"fa-solid fa-download"})})}),i.jsx(D,{title:t({en:"Poke",vi:"Chọc"}),children:i.jsx(C,{type:"default",onClick:()=>un(e),icon:i.jsx("i",{className:"fa-regular fa-hand-point-right"})})}),(r=e.statuses)!=null&&r.includes(k.UNFRIENDED)||(c=e.statuses)!=null&&c.includes(k.NEW)?i.jsx(D,{title:t({en:"Request friend",vi:"Gửi kết bạn"}),children:i.jsx(C,{type:"default",onClick:()=>hn(e),icon:i.jsx("i",{className:"fa-solid fa-user-plus"})})}):i.jsx(D,{title:t({en:"Unfriend",vi:"Huỷ kết bạn"}),children:i.jsx(C,{danger:!0,onClick:()=>dn(e),icon:i.jsx("i",{className:"fa-solid fa-trash-can"})})})]})},width:150,align:"right"}],Wn=n=>{var r,c;const e=(r=n==null?void 0:n.filter)==null?void 0:r.call(n,Fe),s=(c=n==null?void 0:n.filter)==null?void 0:c.call(n,je);return i.jsxs(i.Fragment,{children:[i.jsx(C,{type:"primary",icon:en?i.jsx("i",{className:"fa-solid fa-rotate-right fa-spin"}):i.jsx("i",{className:"fa-solid fa-rotate-right"}),onClick:ln,children:t({en:"Reload",vi:"Tải lại"})}),i.jsx(Vn,{data:n.length?n:p,options:[{key:"uid",label:".txt (friend uid)",prepareData:g=>({fileName:"friends_"+S().format("YYYY-MM-DD-HHmmss")+".txt",data:g.map(h=>h.uid).join(`
`)})},{key:"uid_name",label:".csv (friend uid+name)",prepareData:g=>({fileName:"friends_uid_name_"+S().format("YYYY-MM-DD-HHmmss")+".csv",data:En(g.map(h=>({uid:h.uid,name:h.name})))})},{key:"json",label:".json",prepareData:g=>({fileName:"friends"+S().format("YYYY-MM-DD-HHmmss")+".json",data:JSON.stringify(g,null,4)})},{key:"csv",label:".csv",prepareData:g=>({fileName:"friends"+S().format("YYYY-MM-DD-HHmmss")+".csv",data:En(g)})}]}),i.jsxs(Y.Compact,{children:[i.jsx($n,{title:t({en:"Check who is blocking your messages",vi:"Xem ai đang chặn tin nhắn của bạn"}),content:n!=null&&n.length?t({en:`Check ${n==null?void 0:n.length} friends selected`,vi:`Kiểm tra ${n==null?void 0:n.length} người được chọn`}):t({en:"TIP: You can select friends to check instead of check all",vi:"TIP: Bạn có thể chọn bạn bè để kiểm tra, thay vì kiểm tra tất cả"}),children:i.jsx(G,{title:t(t({en:"Check who is blocking your messages",vi:"Xem ai đang chặn tin nhắn của bạn"})),description:t({en:`Are you sure to check ${(n==null?void 0:n.length)||H.length} friends?`,vi:`Bạn có chắc muốn kiểm tra ${(n==null?void 0:n.length)||H.length} bạn bè?`}),onConfirm:Yn,okText:t({en:"Yes",vi:"Kiểm tra"}),cancelText:t({en:"No",vi:"Huỷ"}),children:i.jsx(C,{loading:!!sn,icon:i.jsx("i",{className:"fa-solid fa-comment-slash"})})})}),i.jsx(ve,{accept:".json",title:t({en:"Upload friends file",vi:"Tải lên file bạn bè đã lưu"}),text:t({en:"Click or drag file to this area to upload",vi:"Click chọn hoặc kéo thả file vào đây"}),hint:t({en:"Support only .json backup file",vi:"Chỉ hỗ trợ file .json được xuất từ trang này"}),onSubmit:On,renderButton:({showModal:g})=>i.jsx($n,{title:t({en:"Check who unfriend you",vi:"Kiểm tra ai huỷ kết bạn với bạn"}),content:t({en:"How it work: Export friends data to file, then compare it later",vi:"Cách hoạt động: Lưu danh sách bạn bè ra file trước, sau đó so sánh"}),children:i.jsx(C,{onClick:g,icon:i.jsx("i",{className:"fa-solid fa-user-slash"})})})}),i.jsx(D,{title:t({en:"Rank who has interacted with you the most recently. (Recent interactions)",vi:"Xếp hạng xem ai tương tác với bạn nhiều nhất thời gian gần đây (Tương tác gần đây)"}),children:i.jsx(C,{onClick:Sn,icon:i.jsx("i",{className:"fa-solid fa-ranking-star"}),children:t({en:"Ranking",vi:"Xếp hạng"})})}),i.jsx(D,{title:t({en:"Count friend's reactions and comments on all of your profile's posts (Total interactions)",vi:"Đếm like và comment của bạn bè trên tất cả bài viết của bạn (Tổng tương tác)"}),children:i.jsx(Dn,{count:"Hot",color:"red",style:{color:"white",zIndex:3},children:i.jsx(C,{loading:an,icon:i.jsx("i",{className:"fa-solid fa-thumbs-up"}),onClick:Hn,children:t({en:"Interactions",vi:"Tương tác"})})})}),i.jsx(D,{title:t({en:"Deep scan all friends to get: locked friends, gender, mutual friends ...",vi:"Quét tất cả bạn bè để biết: bạn bè bị khoá, giới tính, bạn chung ..."}),children:i.jsx(Dn,{count:t({en:"New",vi:"Mới"}),color:"purple",style:{color:"white",zIndex:3},children:i.jsx(C,{loading:!!Rn,onClick:Qn,icon:i.jsx("i",{className:"fa-solid fa-magnifying-glass"}),children:t({en:"Deep scan",vi:"Quét chuyên sâu"})})})})]}),i.jsx(Y.Compact,{children:n!=null&&n.length?i.jsxs(i.Fragment,{children:[i.jsx(D,{title:t({en:`Poke ${n.length} selected friends`,vi:`Chọc ${n.length} người được chọn`}),children:i.jsx(G,{title:t({en:`Poke ${n.length} selected friends`,vi:`Chọc ${n.length} người được chọn`}),description:t({en:"Are you sure to poke these friends?",vi:"Bạn có chắc muốn chọc những người này?"}),onConfirm:()=>Ln(n),okText:t({en:"Yes",vi:"Chọc mạnh vào"}),cancelText:t({en:"No",vi:"Tha"}),children:i.jsx(C,{type:"default",icon:i.jsx("i",{className:"fa-solid fa-hand-point-right"}),children:n.length?" "+n.length:""})})}),(e==null?void 0:e.length)>0?i.jsx(D,{title:t({en:`Request friend with ${e.length} selected users`,vi:`Gửi kết bạn với ${e.length} người được chọn`}),children:i.jsx(G,{title:t({en:`Request friend with ${e.length} selected users`,vi:`Gửi kết bạn với ${e.length} người được chọn`}),description:t({en:"Are you sure to send friend request to these users?",vi:"Bạn có chắc muốn gửi lời mời kết bạn cho những người này?"}),onConfirm:()=>Mn(e),okText:t({en:"Yes",vi:"Gửi"}),cancelText:t({en:"No",vi:"Huỷ"}),children:i.jsx(C,{icon:i.jsx("i",{className:"fa-solid fa-user-plus"}),children:e.length})})}):null,(s==null?void 0:s.length)>0?i.jsx(D,{title:t({en:`Unfriend ${s.length} selected friends`,vi:`Huỷ kết bạn ${s.length} người được chọn`}),children:i.jsx(G,{title:t({en:`Unfriend ${s.length} selected friends`,vi:`Huỷ kết bạn ${s.length} người được chọn`}),description:t({en:"Are you sure to unfriend these friends?",vi:"Bạn có chắc muốn huỷ kết bạn những người này?"}),onConfirm:()=>Bn(s),okText:t({en:"Yes",vi:"Bye bye"}),cancelText:t({en:"No",vi:"Tha"}),children:i.jsx(C,{danger:!0,icon:i.jsx("i",{className:"fa-solid fa-trash-can"}),children:s.length})})}):null]}):null})]})};return i.jsxs("div",{style:{display:"flex",flexDirection:"column",width:"100%",height:"100%"},children:[i.jsxs(ue,{align:"middle",style:{margin:"16px"},children:[i.jsx(ye,{level:3,style:{margin:0},children:t({en:"Friends manager",vi:"Quản lý bạn bè"})}),i.jsx(W,{style:{marginLeft:"10px",fontWeight:"bold",color:"#888"},children:H.length})]}),i.jsx(Xn,{ref:M,data:H,columns:Kn,size:"small",searchable:!0,selectable:!0,keyExtractor:n=>n.uid,style:{flex:1,maxHeight:"100%"},renderTitle:Wn})]})}export{Ve as default};
