System.register(["./index-legacy-CwbZsEbK.js","./dayjs.min-legacy-BC8xBiLB.js","./MyTable-legacy-ER7PBloW.js","./ExportButton-legacy-CaH1UkxJ.js","./MyApp-legacy-BGJVNyZC.js","./useForceStop-legacy-kBcb-bwn.js","./friends-legacy-B9Hu4YnI.js","./messages-legacy-D5O5rl5e.js","./WordStatisticButton-legacy-CZVN8H3J.js","./useAction-legacy-C32qC9I2.js","./index-legacy-DQL_6p9s.js","./index-legacy-Bj-ce72r.js","./BadgeWrapper-legacy-Bax4vJBj.js","./useDevMode-legacy-ofrN9bmF.js","./Screen-legacy-C5XisJRe.js","./row-legacy-u81wGqEa.js","./index-legacy-D3VT6O1x.js","./index-legacy-8-WEdl7s.js","./index-legacy-CkyWWxxz.js","./index-legacy-BYzZUPiy.js","./index-legacy-_xc8k2Pl.js","./index-legacy-rkgx6qBT.js","./DownOutlined-legacy-CeiBqSPu.js","./Table-legacy-DuKpfrcL.js","./List-legacy-BV1B4Qmb.js","./index-legacy-DRVDzQgK.js","./index-legacy-Dh4mI-Mc.js","./index-legacy-DN7AVz6O.js","./index-legacy-ZxIyrDXs.js","./PurePanel-legacy-wiY9Yfn9.js","./move-legacy-ClUZUgAg.js","./SearchOutlined-legacy-Bf83U6Ru.js","./useBreakpoint-legacy-BkEksLm0.js","./useForceUpdate-legacy-BPjVnRyS.js","./responsiveObserver-legacy-CDDIgm1B.js","./Pagination-legacy-BB3pkN2k.js","./index-legacy-B6QMC1R-.js","./file-download-legacy-dj4knrg2.js","./index-legacy-B8-Sg6wz.js","./Collapse-legacy-DB3UeVQ9.js","./col-legacy-Cd-Hus2n.js"],(function(e,n){"use strict";var t,i,s,l,a,r,c,o,d,u,h,g,m,f,y,k,x,b,p,v,j,F,S,w,C,N,T,D,$,E,q,A,I,U,B,R,H,Q,P,M,L,Y,_,O,W,K,X,G,V,z,J,Z,ee,ne,te,ie,se,le,ae,re,ce,oe,de,ue,he,ge,me;return{setters:[e=>{t=e.r,i=e.b6,s=e.br,l=e.b4,a=e.aU,r=e.aV,c=e.by,o=e.bs,d=e.bp,u=e.bq,h=e.b5,g=e.bz,m=e.b9,f=e.b0,y=e.bA,k=e.bw,x=e.bx,b=e.aS,p=e.b3},e=>{v=e.d},e=>{j=e.default},e=>{F=e.E},e=>{S=e.u,w=e.a,C=e.l,N=e.p,T=e.t,D=e.I,$=e.h,E=e.S,q=e.d,A=e.i,I=e.c,U=e.T,B=e.q,R=e.n,H=e.r},e=>{Q=e.u},e=>{P=e.Q,M=e.g,L=e.a,Y=e.G,_=e.b,O=e.u,W=e.p,K=e.c,X=e.f,G=e.d,V=e.F,z=e.e,J=e.h,Z=e.i,ee=e.j},e=>{ne=e.d},e=>{te=e.P,ie=e.W},e=>{se=e.u},e=>{le=e.M},e=>{ae=e.U},e=>{re=e.B},e=>{ce=e.u},e=>{oe=e.S},e=>{de=e.R},e=>{ue=e.A},e=>{he=e.D},e=>{ge=e.P},e=>{me=e.P},null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],execute:function(){e("default",(function(){const e=s(),n=Q(),{ti:te}=l(),{message:le,notification:ae}=S(),{onClickAction:ve,onClickBulkActions:je}=se(),{devMode:Fe}=ce(),{profile:Se}=w(),we=a(r.friendsByUid),Ce=a(r.setFriendsByUid),[Ne,Te]=C("AllFriends.data",[]),[De,$e]=C("AllFriends.interactions",[]),[Ee,qe]=C("AllFriends.ranking",[]),Ae=t.useMemo((()=>{const e=new Map,n=new Map;for(let t of De)t.reactions_uid?.forEach((n=>e.set(n,(e.get(n)||0)+1))),t.comments_uid?.forEach((e=>n.set(e,(n.get(e)||0)+1)));return{reactions:e,comments:n}}),[De]),Ie=t.useMemo((()=>Ne?.map(((e,n)=>({...e,recent:n,comments:Ae?.comments?.get(e.uid)||0,reactions:Ae?.reactions?.get(e.uid)||0,ranking:Ee?.indexOf(e.uid),quickFilters:Array.from(new Set([...e.quickFilters||[],e.uid?.startsWith("1000")?null:P.StrangeUid,N(e.avatar)?P.NoAvatar:null,/\d/.test(e.name)?P.NameContainsNumbers:null,c(e.name)?P.NameContainsSpecialCharacters:null].filter(Boolean)))})))||[]),[Ne,Ae,Ee]),[Ue,Be]=t.useState(!1),[Re,He]=t.useState(0),[Qe,Pe]=t.useState(!1),[Me,Le]=t.useState(!1),[Ye,_e]=t.useState(!1),[Oe,We]=t.useState(!1),[Ke,Xe]=t.useState(!1),[Ge,Ve]=t.useState(!1),[ze,Je]=t.useState(!1),[Ze,en]=t.useState(!1),[nn,tn]=t.useState(!1),[sn,ln]=t.useState(!1),an=t.useRef(null);t.useEffect((()=>{Se?.uid&&!Ne?.length&&cn()}),[]);const rn=(e,n,t=!1,i=!1)=>{Te((s=>x(s,(s=>{Array.isArray(e)||(e=[e]);let l=[];for(let a of e){let e=s.findIndex((e=>e.uid==(a?.uid||a))),r=s[e];r?(r.statuses||(r.statuses=[]),t||r.statuses.includes(n)?(Array.isArray(n)||(n=[n]),r.statuses=n):r.statuses.push(n),i&&l.push({index:e,data:r})):i?s.unshift({...a,statuses:[n]}):s.push({...a,statuses:[n]})}for(let{index:e,data:n}of l)s.splice(e,1),s.unshift(n);return s}))))},cn=()=>{if(Ue)return;T("AllFriends:onClickReload");const e="onClickReload";le.loading({key:e,content:te({en:"Fetching friends...",vi:"Đang tải bạn bè..."}),duration:0}),Be(!0),M({myUid:Se?.uid}).then((n=>{if(((e=Ne)=>{let n=!1;const t=we?.[Se?.uid]||[],s=e.map((e=>e.uid)),l=t.map((e=>e.uid)),a=new Set(s),r=new Set(l),c=s.filter((e=>!r.has(e))),o=l.filter((e=>!a.has(e)));c.length&&(n=!0,console.log("New friends: ",c),rn(c,ye.NEW,!0),t?.length?ae.open({type:"success",duration:0,message:te({en:`Find ${c.length} new friends`,vi:`Tìm thấy ${c.length} bạn mới`}),description:i.jsx("div",{style:{maxHeight:300,overflowY:"auto",overflowX:"hidden"},children:i.jsx("ol",{children:c.map((n=>{const t=e.find((e=>e.uid==n));return i.jsx("li",{children:i.jsx("a",{href:A(n),target:"_blank",children:t?.name||n})},n)}))})})}):ae.open({type:"success",duration:0,message:te({en:`Saved friends to cache: ${c.length}`,vi:`Đã lưu danh sách bạn bè: ${c.length}`}),description:te({en:"Will notify if you have new friends / someone unfriended to you in future",vi:"Sẽ thông báo nếu có bạn mới / người huỷ kết bạn với bạn trong tương lai"})})),o.length&&(n=!0,console.log("Deleted friends: ",o),ae.open({type:"info",duration:0,message:te({en:`Find ${o.length} unfriended`,vi:`Có ${o.length} người huỷ kết bạn`}),description:i.jsx("div",{style:{maxHeight:300,overflowY:"auto",overflowX:"hidden"},children:i.jsx("ol",{children:o.map((e=>{const n=t.find((n=>n.uid==e));return i.jsx("li",{children:i.jsx("a",{href:A(e),target:"_blank",children:n?.name||e})},e)}))})})})),n&&Ce(Se?.uid,e.map((e=>({uid:e.uid,name:e.name}))))})(n),!n?.length)return le.error({key:e,content:te({en:"No data to show",vi:"Không có dữ liệu"})});Te(n),console.log(n),le.success({key:e,content:te({en:`Found ${n.length} friends`,vi:`Tải xong ${n.length} bạn bè`})}),an.current?.clearFilter()})).catch((n=>{le.error({key:e,content:te({en:"Failed to fetch friends",vi:"Lỗi tải bạn bè"})+": "+n.message}),console.log(n)})).finally((()=>{Be(!1)}))},on=(e,n=!1)=>ve({key:"AllFriends:onClickUnfriendOne",id:e.uid,record:e,loadingText:e=>te({en:"Unfriending...",vi:"Đang huỷ kết bạn..."})+" "+e.name,successText:e=>te({en:"Unfriend completed",vi:"Đã huỷ kết bạn"})+": "+e.name,actionFn:e=>Fe?f(1e3):O({myUid:Se?.uid,targetUid:e?.uid}),onSuccess:()=>rn(e,ye.UNFRIENDED),failedText:e=>te({en:"Failed to unfriend",vi:"Lỗi huỷ kết bạn"})+": "+e.name,needConfirm:n,confirmProps:{title:te({en:"Unfriend 🫂",vi:"Huỷ kết bạn 🫂"}),text:te({en:"Unfriend with ",vi:"Huỷ kết bạn với "})+e.name+"?"}}),dn=async(e,n=!1)=>ve({key:"AllFriends:onClickPokeFriend",id:e.uid,record:e,loadingText:e=>te({en:"Poking...",vi:"Đang chọc..."})+" "+e.name,successText:e=>te({en:"Poke completed",vi:"Chọc thành công"})+": "+e.name,actionFn:e=>Fe?f(1e3):W({myUid:Se?.uid,targetUid:e?.uid}),onSuccess:()=>rn(e,ye.POKED),failedText:e=>te({en:"Failed to poke",vi:"Chọc thất bại"})+": "+e.name,needConfirm:n,confirmProps:{title:te({en:"Poke friend 👉",vi:"Chọc bạn bè 👉"}),text:te({en:"Poke ",vi:"Chọc "})+e.name+"?"}}),un=async(e,n=!1)=>ve({key:"AllFriends:onClickAddFriend",id:e.uid,record:e,loadingText:e=>te({en:"Sending friend request...",vi:"Đang gửi kết bạn..."})+" "+e.name,successText:e=>te({en:"Send friend request success",vi:"Gửi kết bạn thành công"})+": "+e.name,actionFn:e=>Fe?f(1e3):K({myUid:Se?.uid,targetUid:e?.uid}),onSuccess:()=>rn(e,ye.REQUESTED),failedText:e=>te({en:"Failed to send friend request",vi:"Lỗi gửi kết bạn"})+": "+e.name,needConfirm:n,confirmProps:{title:te({en:"Send friend request 🙏",vi:"Gửi kết bạn 🙏"}),text:te({en:"Send friend request to ",vi:"Gửi kết bạn tới "})+e.name+"?"}}),hn=async e=>{if(!e)return le.error(te({en:"File empty",vi:"File rỗng"}));T("AllFriends:onUploadFriendsFile");try{const n=B(e,[]);if(!Array.isArray(n)||!n?.length)return le.error(te({en:"No data",vi:"Không có dữ liệu"}));const t=n.map((e=>e.uid)).filter(Boolean);if(!t.length)return le.error(te({en:"No friends data in file",vi:"Không có dữ liệu bạn bè trong file"}));const s=new Set(t),l=[];for(let e of Ne)s.has(e.uid)||l.push(e);const a=new Set(Ne.map((e=>e.uid))),r=[];for(let e of n)a.has(e.uid)||r.push(e);rn(l,ye.NEW,!1,!0),rn(r,ye.UNFRIENDED,!1,!0),[{title:te({en:`Found ${l.length} new friends`,vi:`Tìm thấy ${l.length} bạn mới`}),text:i.jsx("div",{style:{maxHeight:300,overflowY:"auto",overflowX:"hidden"},children:i.jsx("ol",{children:l.map((e=>i.jsx("li",{children:i.jsx("a",{href:A(e.uid),target:"_blank",children:e.name})},e.uid)))})})},{title:te({en:`Found ${r.length} unfriended`,vi:`Tìm thấy ${r.length} người huỷ kết bạn`}),text:i.jsx("div",{style:{maxHeight:300,overflowY:"auto",overflowX:"hidden"},children:i.jsx("ol",{children:r.map((e=>i.jsx("li",{children:i.jsx("a",{href:A(e.uid),target:"_blank",children:e.name})},e.uid)))})})}].forEach((({title:e,text:n})=>ae.open({type:"success",message:e,description:n,duration:0}))),(r.length||l.length)&&an.current?.setDataSelected([...r,...l])}catch(n){le.error(n.message)}},gn=async()=>{if(!(await R())||Me)return;Le(!0);const e=n.start(),t="AllFriends:onClickScanInteractions";T(t),le.loading({key:t,duration:0,content:te({en:"Loading posts...",vi:"Đang tải bài viết..."})});let s=!1;const l=await H(1/0,(e=>{$e([...e]);const n=e.reduce(((e,n)=>e+(n.comments_uid?.length||0)),0),l=e.reduce(((e,n)=>e+(n.reactions_uid?.length||0)),0),a=new Date(e[e.length-1]?.created_time||0),r=p(a);le.loading({key:t,duration:0,content:i.jsxs(i.Fragment,{children:[te({en:`Loading ${r}: ${e.length} posts, ${l} reactions, ${n} comments...`,vi:`Đang tải ${r}: ${e.length} bài viết, ${l} lượt thích, ${n} bình luận...`}),i.jsx("br",{}),i.jsx("i",{children:te({en:"Click to stop",vi:"Bấm để dừng"})})]}),onClick:()=>s=!0})}),(()=>s||e.value())),a=l.reduce(((e,n)=>e+(n.comments_uid?.length||0)),0),r=l.reduce(((e,n)=>e+(n.reactions_uid?.length||0)),0);le.destroy(t);const c=l[l.length-1],o=p(new Date(c?.created_time||0));ae.open({type:"success",duration:0,message:te({en:"Scan interactions finished",vi:"Quét tương tác xong"}),description:i.jsxs(i.Fragment,{children:[te({en:`Scanned ${l.length} posts, ${r} reactions, ${a} comments, last post ${o} `,vi:`Quét được ${l.length} bài viết, ${r} lượt thích, ${a} bình luận, bài viết cuối ${o} `}),i.jsx("a",{href:A(c?.postId),target:"_blank",children:A(c?.postId)})]})}),$e(l),Le(!1)},mn=async()=>{const e="AllFriends:onClickFindBuddy";T(e),le.loading({key:e,duration:0,content:te({en:"Scanning ranking friends...",vi:"Đang tải xếp hạng bạn bè..."})});const n=await X(Ne.length||100);console.log(n),le.destroy(e),ae.open({type:"success",duration:0,message:te({en:`Scan ranking completed: ${n.length} friends`,vi:`Quét xếp hạng bạn bè xong: ${n.length} bạn`}),description:i.jsxs(i.Fragment,{children:["Top 20:",i.jsx("br",{}),i.jsx("ol",{children:n.slice(0,20).map(((e,n)=>i.jsxs("div",{children:[i.jsx("a",{href:A(e.uid),target:"_blank",children:n+1+": "+e.name}),i.jsx("br",{})]},e.uid)))})]})}),qe(n.map((e=>e.uid)));const t=new Set(Ne.map((e=>e.uid))),s=n.filter((e=>!t.has(e.uid)));s.length&&rn(s,ye.NEW,!0)},fn=async()=>{if(!(await R()))return;Pe(!0);const e="AllFriends:onClickDeepScan";T(e),le.loading({key:e,content:te({en:"Deep Scanning...",vi:"Đang quét chuyên sâu..."}),duration:0});const n=[];let t=null,s=!1;for(;!s;){const l=await G({cursor:t,section:V.friends});if(!l.length)break;Te((e=>x(e,(e=>(l.forEach((n=>{if(!n.uid)return;const t=e.find((e=>e.uid===n.uid));t?(t.mutualFriendCount=n.mutualFriendCount,t.gender=n.gender,t.quickFilters||(t.quickFilters=[]),n.isLocked&&!t.quickFilters.includes(P.Locked)&&t.quickFilters.push(P.Locked)):n.isLocked&&e.push({...n,quickFilters:[P.Locked]})})),e))))),n.push(...l),t=l[l.length-1].cursor,le.loading({key:e,content:i.jsxs(i.Fragment,{children:[te({en:"Deep Scanning...",vi:"Đang quét chuyên sâu..."})+`${~~(n.length/Ne.length*100)}% (${n.length}/${Ne.length})`,i.jsx("br",{}),te({en:"Click to stop",vi:"Bấm để dừng"})]}),onClick:()=>s=!0,duration:0}),await f(200)}const l=n.filter((e=>e.isLocked));le.destroy(e),ae.open({type:"success",message:te({en:"Deep Scanning completed",vi:"Hoàn tất Quét chuyên sâu"})+` (${n.length}/${Ne.length})`,description:te({en:`Found ${l.length} locked friends.\nPlease see in "Quick filters" column`,vi:`Tìm thấy ${l.length} bạn bị khoá.\nVui lòng xem cột "Bộ lọc"`})}),Pe(!1)},yn=async()=>{if(!(await R()))return;_e(!0);const e="AllFriends:onClickScanRemovedFriends";T(e),le.loading({key:e,content:te({en:"Scanning removed friends...",vi:"Đang quét bạn cũ..."}),duration:0});const n=[];let t="",s=!1;for(;!s;){const l=await z(t);if(!l?.length)break;n.push(...l),t=l[l.length-1]?.cursor||"",Te((e=>x(e,(e=>(l.forEach((n=>{if(!n.uid)return;const t=e.find((e=>e.uid===n.uid));t?(t.statuses||(t.statuses=[]),t.statuses.includes(ye.UNFRIENDED)||t.statuses.push(ye.UNFRIENDED),t.time=n.time,t.desc=n.desc,t.cursor=n.cursor):e.push({...n,statuses:[ye.UNFRIENDED]})})),e))))),le.loading({key:e,content:i.jsxs(i.Fragment,{children:[te({en:`Scanning removed friends... ${n.length}`,vi:`Đang quét bạn cũ... ${n.length}`}),i.jsx("br",{}),te({en:"Click to stop",vi:"Bấm để dừng"})]}),duration:0,onClick:()=>{s=!0}}),await f(1e3)}le.destroy(e),ae.open({type:"success",message:te({en:"Scan removed friends completed",vi:"Hoàn tất Quét bạn cũ"}),description:te({en:`Found ${n.length} removed friends.\nPlease filter in "Status" column`,vi:`Tìm thấy ${n.length} bạn cũ.\nVui lòng xem cột "Trạng thái"`})}),_e(!1)},kn=async()=>{We(!0);const e="AllFriends:onClickScanAddedTime";T(e),le.loading({key:e,content:te({en:"Scanning added time...",vi:"Đang quét thời gian..."}),duration:0});const n=[];let t="",s=!1;for(;!s;){const l=await J(t);if(!l?.length)break;n.push(...l),t=l[l.length-1]?.cursor||"",Te((e=>x(e,(e=>(l.forEach((n=>{if(!n.uid)return;const t=e.find((e=>e.uid===n.uid));t?(t.time=n.time,t.cursor=n.cursor):e.push(n)})),e))))),le.loading({key:e,content:i.jsxs(i.Fragment,{children:[te({en:`Scanning added time... ${n.length}`,vi:`Đang quét thời gian... ${n.length}`}),i.jsx("br",{}),te({en:"Click to stop",vi:"Bấm để dừng"})]}),duration:0,onClick:()=>{s=!0}}),await f(1e3)}le.destroy(e),ae.open({type:"success",message:te({en:"Scan added time completed",vi:"Hoàn tất Quét thời gian"}),description:te({en:`Scanned ${n.length} friends.`,vi:`Đã quét ${n.length} bạn.`})}),We(!1)},xn=async()=>{if(!(await R()))return;Xe(!0);const e="AllFriends:onClickScanBirthday";T(e),le.loading({key:e,content:te({en:"Scanning birthday...",vi:"Đang quét ngày sinh..."})});let n="1";const t=[];for(;;){const i=await Z(n);if(console.log(i),!i?.length)break;t.push(...i),n=i[i.length-1]?.cursor,le.loading({key:e,content:te({en:`Scanning birthday... ${t.length}`,vi:`Đang quét ngày sinh... ${t.length}`}),duration:0}),Te((e=>x(e,(e=>(t.forEach((n=>{const t=e.find((e=>e.uid===n.uid));t?t.birthday=n.birthday:console.log("new friend birthday",n)})),e))))),await f(500)}le.destroy(e),ae.open({type:"success",message:te({en:"🎂 Scan birthday completed",vi:"Hoàn tất 🎂 Quét sinh nhật"}),description:te({en:`Found ${t.length} friend birthdays.`,vi:`Tìm được ${t.length} sinh nhật.`}),duration:0}),Xe(!1)},bn=async({section:e,key:n,quickFilterType:t,setLoading:s,getFriendsFn:l,addIfNotExists:a=!0})=>{T(n),s(!0);const r=te(L[t]);le.loading({key:n,content:te({en:`Scanning ${r}...`,vi:`Đang quét bạn ${r}...`})});const c=[];let o=null,d=!1;for(;!d;){const s=l?await l(o):await G({cursor:o,section:e});if(!s.length)break;console.log(s),Te((e=>x(e,(e=>(s.forEach((n=>{if(!n.uid)return;const i=e.find((e=>e.uid===n.uid));i?(i.quickFilters||(i.quickFilters=[]),i.quickFilters.includes(t)||i.quickFilters.push(t)):a&&e.push({...n,quickFilters:[t],statuses:[ye.NEW]})})),e))))),c.push(...s),o=s[s.length-1].cursor,le.loading({key:n,content:i.jsxs(i.Fragment,{children:[te({en:`Scanning ${r}...`,vi:`Đang quét ${r}...`})," ",c.length,i.jsx("br",{}),te({en:"Click to stop",vi:"Bấm để dừng"})]}),onClick:()=>d=!0,duration:0}),await f(200)}le.destroy(n),ae.open({type:"success",message:te({en:`Scan ${r} completed`,vi:`Hoàn tất quét ${r}`}),description:te({en:`Found ${c.length} friends.\nPlease see in "Quick filters" column`,vi:`Tìm thấy ${c.length} bạn bè.\nVui lòng xem cột "Bộ lọc"`}),duration:0}),s(!1)},pn=()=>{bn({section:V.current_city,key:"AllFriends:onClickScanCurrentCity",quickFilterType:P.CurrentCity,setLoading:Ve})},vn=()=>{bn({section:V.hometown,key:"AllFriends:onClickScanHomeTown",quickFilterType:P.Hometown,setLoading:Je})},jn=()=>{bn({section:V.high_school,key:"AllFriends:onClickScanHighSchool",quickFilterType:P.Highschool,setLoading:en})},Fn=()=>{bn({section:V.works,key:"AllFriends:onClickScanWork",quickFilterType:P.Work,setLoading:tn})},Sn=()=>{bn({key:"AllFriends:onClickScanFollowers",quickFilterType:P.Follower,setLoading:ln,getFriendsFn:ee})},wn=new Date,Cn=[{title:"#",key:"recent",dataIndex:"recent",sorter:(e,n)=>e.recent-n.recent,render:(e,n,t)=>n.recent+1,width:70,align:"center"},{title:te({en:"Name",vi:"Tên"}),dataIndex:"name",key:"name",sorter:(e,n)=>e.name.localeCompare(n.name),onSearch:(e,n,t)=>o(e,t?.name+t?.uid),render:(e,n,t)=>i.jsxs(de,{align:"middle",justify:"start",style:{flex:1},children:[i.jsx(ue,{shape:"square",src:i.jsx(D,{src:$(n.uid),fallback:n.avatar}),size:50}),i.jsxs(E,{direction:"vertical",size:0,style:{marginLeft:10},children:[i.jsx(q.Link,{href:n.url||A(n.uid),target:"_blank",strong:!0,children:n.name}),i.jsx(q.Text,{type:"secondary",children:n.uid}),!!n.desc&&i.jsx(q.Text,{type:"secondary",children:n.desc})]})]})},{title:te({en:"Quick Filters",vi:"Bộ lọc"}),dataIndex:"quickFilters",key:"quickFilters",render:(e,n,t)=>n.quickFilters?.map((e=>i.jsx(I,{color:L[e].color,children:te(L[e])},e)))||"",filters:Object.entries(L).map((([e,n])=>({text:te(n)+" ("+Ie.filter((n=>n.quickFilters?.includes(e))).length+")",value:e}))),onFilter:(e,n)=>n.quickFilters?.includes(e),width:150},...Ne.find((e=>e.gender))?[{title:te({en:"Gender",vi:"Giới tính"}),key:"gender",dataIndex:"gender",render:(e,n,t)=>{const s=te(Y[n.gender])||"-";return n.gender===_.Female?i.jsx(I,{color:"pink",children:s}):s},filters:Object.entries(Y).map((([e,n])=>({text:te(n)+" ("+Ne.filter((n=>n.gender===e)).length+")",value:e}))),onFilter:(e,n)=>n.gender==e,width:120}]:[],...Ne.find((e=>e.mutualFriendCount))?[{title:te({en:"Mutual",vi:"Bạn chung"}),key:"mutualFriendCount",dataIndex:"mutualFriendCount",sorter:(e,n)=>(e.mutualFriendCount||0)-(n.mutualFriendCount||0),width:120,align:"right",rangeFilter:{getValue:e=>e.mutualFriendCount}}]:[],...Ee.length?[{title:te({en:"Ranking",vi:"Xếp hạng"}),key:"ranking",dataIndex:"ranking",render:(e,n,t)=>-1==e?"_":e+1,sorter:(e,n)=>(-1==e.ranking?1/0:e.ranking)-(-1==n.ranking?1/0:n.ranking),width:120,align:"right",rangeFilter:{getValue:e=>e.ranking}}]:[],...De?.length?[{title:te({en:"Reactions",vi:"Thích"}),key:"reactions",dataIndex:"reactions",sorter:(e,n)=>e.reactions-n.reactions,width:100,align:"right"},{title:te({en:"Comments",vi:"Bình luận"}),key:"comments",dataIndex:"comments",sorter:(e,n)=>e.comments-n.comments,width:100,align:"right"}]:[],...Ne.find((e=>e.time))?[{title:te({en:"Time",vi:"Thời gian"}),key:"time",dataIndex:"time",render:(e,n,t)=>{if(!n.time)return"";const s=new Date(n.time);return i.jsxs(E,{direction:"vertical",size:0,children:[i.jsx(q.Text,{children:d(s.getTime())}),i.jsx(q.Text,{type:"secondary",children:u(s)})]})},sorter:(e,n)=>(e.time||0)-(n.time||0),width:"16ch"}]:[],...Ne.find((e=>e.birthday))?[{title:te({en:"Birthday",vi:"Sinh nhật"}),key:"birthday",dataIndex:"birthday",render:(e,n,t)=>{const{year:s,month:l,day:a}=n.birthday||{};if(!l)return"-";const r=new Date,c=l===r.getMonth()+1&&a===r.getDate();r.setFullYear(r.getFullYear(),l-1,a);const o=r.getTime()-Date.now(),d=o>0,u=h(Math.abs(o)),m=Math.floor(o/864e5);return i.jsxs(E,{direction:"vertical",size:0,children:[s&&i.jsxs(q.Text,{strong:!0,children:[g(s,l,a)," ",te({en:"years",vi:"tuổi"})]}),i.jsxs(q.Text,{type:"secondary",children:[a,"/",l,s?"/"+s:""]}),i.jsx(I,{color:c?"red":d?d&&m<10?"orange":"green":"blue",children:c?te({en:"Today",vi:"Hôm nay"}):i.jsxs(i.Fragment,{children:[u," ",te(o<0?{en:"ago",vi:"trước"}:{en:"left",vi:"sau"})]})})]})},sorter:(e,n)=>{const{year:t=0,month:i=0,day:s=0}=e.birthday||{},{year:l=0,month:a=0,day:r=0}=n.birthday||{};return 1e4*t+100*i+s-1e4*l-100*a-r},filters:[{text:te({en:"Has birthday",vi:"Có ngày sinh"})+` (${Ne.filter((e=>e.birthday)).length})`,value:"yes"},{text:te({en:"No birthday",vi:"Không ngày sinh"})+` (${Ne.filter((e=>!e.birthday)).length})`,value:"no"},{text:te({en:"Know ages",vi:"Biết tuổi"})+` (${Ne.filter((e=>e.birthday?.year)).length})`,value:"year"},{text:te({en:"Today",vi:"Hôm nay"})+` (${Ne.filter((e=>{const{month:n,day:t}=e.birthday||{};return t==wn.getDate()&&n==wn.getMonth()+1})).length})`,value:"today"},...Array.from({length:12}).map(((e,n)=>({text:te({en:"Month ",vi:"Tháng "})+(n+1)+` (${Ne.filter((e=>e.birthday?.month===n+1)).length})`,value:n+1})))],onFilter:(e,n)=>{const{year:t,month:i,day:s}=n.birthday||{};return"year"==e?!!t:"yes"==e?!!n.birthday:"no"==e?!n.birthday:"today"==e?s==wn.getDate()&&i==wn.getMonth()+1:i==e},width:120}]:[],{title:te({en:"Friend status",vi:"Trạng thái"}),dataIndex:"status",key:"status",width:150,filters:Object.entries(ye).map((([e,n])=>({text:te(xe[n]||n)+" ("+Ne.filter((e=>e.statuses?.includes(n)||n===ye.FRIEND&&!e.statuses?.length)).length+")",value:n}))),onFilter:(e,n)=>n.statuses?.includes(e)||e==ye.FRIEND&&!n.statuses?.length,render:(e,n,t)=>n?.statuses?.length?n.statuses.map((e=>({key:e,value:te(xe[e]||e)}))).map((({key:e,value:n})=>i.jsx(I,{color:ke[e],children:n},e))):te({en:"Friend",vi:"Bạn bè"}),align:"right"},{title:te({en:"Action",vi:"Hành động"}),dataIndex:"action",key:"download",render:(n,t,s)=>i.jsxs(E.Compact,{children:[i.jsx(U,{title:te({en:"Friendship",vi:"Xem tình bạn"}),children:i.jsx(m,{type:"default",onClick:()=>(e=>{T("AllFriends:onClickViewFriendship");const n=Se?.uid,t=`https://www.facebook.com/friendship/${n}/${e.uid}`;window.open(t,"_blank")})(t),icon:i.jsx("i",{className:"fa-solid fa-eye"})})}),i.jsx(U,{title:te({en:"Bulk Downloader",vi:"Tải hàng loạt"}),children:i.jsx(m,{type:"default",onClick:()=>{return n=t.uid,void e("/bulk-downloader",{state:{targetId:n,platform:y.Facebook}});var n},icon:i.jsx("i",{className:"fa-solid fa-download"})})}),i.jsx(U,{title:te({en:"Poke",vi:"Chọc"}),children:i.jsx(m,{type:"default",onClick:()=>dn(t,!0),icon:i.jsx("i",{className:"fa-regular fa-hand-point-right"})})}),t.statuses?.includes(ye.UNFRIENDED)||t.statuses?.includes(ye.NEW)?i.jsx(U,{title:te({en:"Request friend",vi:"Gửi kết bạn"}),children:i.jsx(m,{type:"default",onClick:()=>un(t,!0),icon:i.jsx("i",{className:"fa-solid fa-user-plus"})})}):i.jsx(U,{title:te({en:"Unfriend",vi:"Huỷ kết bạn"}),children:i.jsx(m,{danger:!0,onClick:()=>on(t,!0),icon:i.jsx("i",{className:"fa-solid fa-trash-can"})})})]}),width:150,align:"right"}],Nn=e=>[{type:"group",label:te({en:"Interaction",vi:"Tương tác"}),children:[{key:"ranking",label:i.jsx(ge,{placement:"right",title:te({en:"Ranking",vi:"Xếp hạng"}),content:i.jsx("ul",{children:te({en:"📊 Rank who has interacted with you the most recently\n                                ❓ Also called Recent interactions",vi:"📊 Xem ai tương tác với bạn nhiều nhất thời gian gần đây\n                                ❓ Còn gọi là Tương tác gần đây"}).split("\n").map(((e,n)=>i.jsx("li",{children:e.trim()},n)))}),children:i.jsx(m,{onClick:mn,icon:i.jsx("i",{className:"fa-solid fa-ranking-star"}),children:te({en:"Ranking",vi:"Xếp hạng"})})})},{key:"deep-scan",label:i.jsx(re,{type:"hot",children:i.jsx(ge,{placement:"right",title:te({en:"Deep Scan",vi:"Quét Chuyên Sâu"}),content:i.jsxs(i.Fragment,{children:[te({en:"🔎 Scan all friends to filter:",vi:"🔎 Quét tất cả bạn bè để lọc:"}),i.jsx("ul",{children:te({en:"🎯 gender\n                                                        🔒 locked friends\n                                                        🫂 mutual friends",vi:"🎯 giới tính\n                                                        🔒 bạn bè bị khoá\n                                                        🫂 bạn chung"}).split("\n").map(((e,n)=>i.jsx("li",{children:e.trim()},n)))})]}),children:i.jsx(m,{loading:!!Qe,onClick:fn,icon:i.jsx("i",{className:"fa-solid fa-magnifying-glass"}),children:te({en:"Deep scan",vi:"Quét chuyên sâu"})})})})},{key:"scan-interactions",label:i.jsx(ge,{placement:"right",title:te({en:"Interaction Scan",vi:"Quét Tương Tác"}),content:i.jsx("ul",{children:te({en:"👍💬 Count friend's reactions and comments on all of your profile's posts\n                                ❓ Also called Total interactions",vi:"👍💬 Đếm like và comment của bạn bè trên tất cả bài viết của bạn\n                                ❓ Còn gọi là Tương tác tổng"}).split("\n").map(((e,n)=>i.jsx("li",{children:e.trim()},n)))}),children:i.jsx(m,{loading:Me,icon:i.jsx("i",{className:"fa-solid fa-thumbs-up"}),onClick:gn,children:te({en:"Scan interactions",vi:"Quét tương tác"})})})},{key:"detect-unfriend",label:i.jsx(fe,{accept:".json",title:te({en:"Upload friends file",vi:"Tải lên file bạn bè đã lưu"}),text:te({en:"Click or drag file to this area to upload",vi:"Click chọn hoặc kéo thả file vào đây"}),hint:te({en:"Support only .json backup file",vi:"Chỉ hỗ trợ file .json được xuất từ trang này"}),onSubmit:hn,renderButton:({showModal:e})=>i.jsx(ge,{placement:"right",title:te({en:"Check who unfriend you",vi:"Kiểm tra ai huỷ kết bạn với bạn"}),content:i.jsx("ul",{children:te({en:"❓ How it work: Export friends data to file, then compare it later\n                                    ✅ FB AIO can automatically detect who unfriend you\n                                    🚨 Only use this feature if you want manual check",vi:"❓ Cách hoạt động: Lưu danh sách bạn bè ra file trước, sau đó so sánh\n                                    ✅ FB AIO sẽ tự động thông báo khi có người huỷ kết bạn\n                                    🚨 Chỉ sử dụng chức năng này nếu bạn muốn chủ động kiểm tra bằng tay"}).split("\n").map(((e,n)=>i.jsx("li",{children:e.trim()},n)))}),children:i.jsx(m,{onClick:e,icon:i.jsx("i",{className:"fa-solid fa-user-slash"}),children:te({en:"Detect unfriend",vi:"Quét huỷ kết bạn"})})})})},{key:"detect-block-msg",label:i.jsx(ge,{placement:"right",title:te({en:"Check who is blocking your messages",vi:"Xem ai đang chặn tin nhắn của bạn"}),content:i.jsx("ul",{children:te({en:"✅ You still can message them\n                                ✅ They can still read your messages\n                                ❌ But facebook will never mark as read",vi:"✅ Bạn vẫn nhắn được cho họ\n                                ✅ Họ vẫn đọc được tin nhắn\n                                ❌ Nhưng facebook sẽ không cập nhật trạng thái đã xem"}).split("\n").map(((e,n)=>i.jsx("li",{children:e.trim()},n)))}),children:i.jsx(me,{title:te(te({en:"Check who is blocking your messages",vi:"Xem ai đang chặn tin nhắn của bạn"})),description:i.jsxs("ul",{children:[i.jsx("li",{children:te({en:`Are you sure to check ${e?.length||Ie.length} friends?.\n `,vi:`Bạn có chắc muốn kiểm tra ${e?.length||Ie.length} bạn bè?.`})}),i.jsx("li",{children:te({en:"You can select friends to check, instead of check all, to reduce load time.",vi:"Bạn có thể chọn bạn bè để kiểm tra, thay vì kiểm tra tất cả, để giảm thời gian xử lý."})})]}),onConfirm:()=>{(async()=>{if(Re)return;const e="AllFriends:onClickFindBlockedMessages";T(e);const n=an.current?.getDataSelected(),t=n?.length?n:Ne;let s=0;const l=[];let a=!1;for(let c=0;c<t.length&&!a;c++){He(!0),le.loading({key:e,duration:0,content:i.jsxs(i.Fragment,{children:[te({en:"Finding blocked messages...",vi:"Đang tìm bạn bè chặn tin nhắn..."})+`${l.length}/${c+1} - ${~~(c/t.length*100)}%`,i.jsx("br",{}),i.jsx("i",{children:te({en:"Click to stop",vi:"Bấm để dừng"})})]}),onClick:()=>a=!0});const n=t[c];await ne(n.uid)||(l.push(n),an.current?.setDataSelected(l.map((e=>Ne.find((n=>n.uid===e.uid))||e))),Te((e=>x(e,(e=>{const t=e.find((e=>e.uid===n.uid));t&&!t.quickFilters?.includes(P.BlockedMessages)&&(t.quickFilters||(t.quickFilters=[]),t.quickFilters.push(P.BlockedMessages))})))),le.success({key:e,content:te({en:"Found",vi:"Tìm thấy"})+" "+n.name+" ("+l.length+")"})),s++}He(!1);const r=l.length?i.jsxs(i.Fragment,{children:[te({en:`Found ${l.length} friends blocking your messages`,vi:`Tìm thấy ${l.length} bạn bè chặn tin nhắn`}),i.jsx("br",{}),i.jsx("ul",{children:l.map((e=>i.jsx("li",{children:e.name},e.uid)))})]}):te({en:"No one block messages you",vi:"Không ai chặn tin nhắn của bạn"});le.success({key:e,content:r}),ae.open({type:"success",message:te({en:"Scan block message success "+s+" users",vi:"Hoàn tất Quét chặn tin nhắn "+s+" người"}),description:r,duration:0})})()},okText:te({en:"Yes",vi:"Kiểm tra"}),cancelText:te({en:"No",vi:"Huỷ"}),children:i.jsx(m,{loading:!!Re,icon:i.jsx("i",{className:"fa-solid fa-comment-slash"}),children:te({en:"Block messages",vi:"Chặn tin nhắn"})})})})}]},{type:"group",label:te({en:"Similarity",vi:"Điểm chung"}),children:[{key:"birthday",label:i.jsx(ge,{placement:"right",title:te({en:"Scan Birthday",vi:"Quét Sinh nhật"}),content:te({en:"🎂 Scan all friend's birthday",vi:"🎂 Quét sinh nhật của tất cả bạn bè"}),children:i.jsx(m,{loading:Ke,onClick:xn,icon:i.jsx("i",{className:"fa-solid fa-birthday-cake"}),children:te({en:"Scan Birthday",vi:"Quét sinh nhật"})})})},{key:"current-city",label:i.jsx(ge,{placement:"right",title:te({en:"Current city",vi:"Cùng tỉnh thành"}),content:te({en:"🏙️ Scan all friends that live in the same city as you",vi:"🏙️ Quét tất cả bạn bè đang sống cùng tỉnh thành với bạn"}),children:i.jsx(m,{loading:Ge,onClick:pn,icon:i.jsx("i",{className:"fa-solid fa-location"}),children:te({en:"Current city",vi:"Cùng tỉnh thành"})})})},{key:"hometown",label:i.jsx(ge,{placement:"right",title:te({en:"Hometown",vi:"Cùng quê"}),content:te({en:"🏡 Scan all friends that has same hometown as you",vi:"🏡 Quét tất cả bạn bè cùng quê quán với bạn"}),children:i.jsx(m,{loading:ze,onClick:vn,icon:i.jsx("i",{className:"fa-solid fa-home"}),children:te({en:"Hometown",vi:"Cùng quê"})})})},{key:"high-school",label:i.jsx(ge,{placement:"right",title:te({en:"High school",vi:"Cùng trung học"}),content:te({en:"📚 Scan all friends that has same high school as you",vi:"📚 Quét tất cả bạn bè cùng trường trung học với bạn"}),children:i.jsx(m,{loading:Ze,onClick:jn,icon:i.jsx("i",{className:"fa-solid fa-graduation-cap"}),children:te({en:"High school",vi:"Cùng trung học"})})})},{key:"work",label:i.jsx(ge,{placement:"right",title:te({en:"Scan work",vi:"Cùng công việc"}),content:te({en:"💼 Scan all friends that work at your company",vi:"💼 Quét tất cả bạn bè cùng công việc (công ty) với bạn"}),children:i.jsx(m,{loading:nn,onClick:Fn,icon:i.jsx("i",{className:"fa-solid fa-building"}),children:te({en:"Scan work",vi:"Cùng công việc"})})})},{key:"follower",label:i.jsx(re,{type:"new",children:i.jsx(ge,{placement:"right",title:te({en:"Scan followers",vi:"Người theo dõi"}),content:te({en:"👉 Scan all your followers",vi:"👉 Quét tất người theo dõi của bạn"}),children:i.jsx(m,{loading:sn,onClick:Sn,icon:i.jsx("i",{className:"fa-solid fa-person-walking-arrow-right"}),children:te({en:"Scan followers",vi:"Người theo dõi"})})})})}]},{type:"group",label:te({en:"History",vi:"Lịch sử"}),children:[{key:"scan-added-time",label:i.jsx(ge,{placement:"right",title:te({en:"Scan Added Time",vi:"Quét Thời Gian"}),content:te({en:"🕓 Scan the time you make friend with all your friends",vi:"🕓 Quét thời gian mà bạn kết bạn với tất cả bạn bè"}),children:i.jsx(m,{loading:Oe,onClick:kn,icon:i.jsx("i",{className:"fa-solid fa-clock"}),children:te({en:"Scan time",vi:"Quét thời gian"})})})},{key:"scan-removed",label:i.jsx(ge,{placement:"right",title:te({en:"Scan Removed Friends",vi:"Quét Bạn Cũ"}),content:te({en:"🗑️ Scan to show all your removed friends",vi:"🗑️ Quét tất cả bạn bè bạn đã huỷ kết bạn trong quá khứ"}),children:i.jsx(m,{loading:Ye,onClick:yn,icon:i.jsx("i",{className:"fa-solid fa-user-minus"}),children:te({en:"Scan removed",vi:"Quét bạn cũ"})})})}]},{key:"topid",label:i.jsx(ge,{placement:"right",title:te({en:"TopID - Auto make friends using AI",vi:"TopID - Tự động kết bạn bằng AI"}),content:i.jsx("ul",{children:te({vi:"👫 Kết bạn theo tiêu chí: bạn chung, giới tính\n                    🚫 Bỏ qua nếu không thỏa tiêu chí\n                    👀 Kết bạn với danh sách bạn của người khác\n                    🫶 Kết bạn với danh sách gợi ý bạn bè của Facebook\n                    🎯 Tận dụng bộ lọc có sẵn: cùng tỉnh, cùng quê, mới thêm gần đây, ...\n                    ⏳ Thêm thời gian chờ: tự động bấm thủ công trên giao diện để tránh bị ban",en:"👫 Add friends based on criteria: mutual friends, gender\n                    🚫 Skip if criteria not met\n                    👀 Add friends of others\n                    🫶 Add friends from Facebook's suggested list\n                    🎯 Filter options: same province, hometown, recently added, etc.\n                    ⏳ Include wait time: manually click to avoid getting banned"}).split("\n").map(((e,n)=>i.jsx("li",{children:e.trim()},n)))}),children:i.jsx(m,{target:"_blank",href:b.TopID.webstore,icon:i.jsx("i",{className:"fa-solid fa-robot"}),children:te({en:"TopID",vi:"TopID"})})})}];return i.jsx(oe,{title:te({en:"Friends manager",vi:"Quản lý bạn bè"}),titleSuffix:i.jsx(I,{style:{marginLeft:"10px",fontWeight:"bold",color:"#888"},children:Ie.length}),children:i.jsx(j,{ref:an,data:Ie,columns:Cn,size:"small",searchable:!0,selectable:!0,keyExtractor:e=>e.uid,renderTitle:e=>{const n=e?.filter?.(be),t=e?.filter?.(pe);return i.jsxs(i.Fragment,{children:[i.jsx(m,{type:"primary",icon:Ue?i.jsx("i",{className:"fa-solid fa-rotate-right fa-spin"}):i.jsx("i",{className:"fa-solid fa-rotate-right"}),onClick:cn,children:te({en:"Reload",vi:"Tải lại"})}),i.jsx(F,{data:e.length?e:Ne,options:[{key:"uid",label:".txt (friend uid)",prepareData:e=>({fileName:"friends_"+v().format("YYYY-MM-DD-HHmmss")+".txt",data:e.map((e=>e.uid)).join("\n")})},{key:"uid_name",label:".csv (friend uid+name)",prepareData:e=>({fileName:"friends_uid_name_"+v().format("YYYY-MM-DD-HHmmss")+".csv",data:k(e.map((e=>({uid:e.uid,name:e.name}))))})},{key:"json",label:".json",prepareData:e=>({fileName:"friends"+v().format("YYYY-MM-DD-HHmmss")+".json",data:JSON.stringify(e,null,4)})},{key:"csv",label:".csv",prepareData:e=>({fileName:"friends"+v().format("YYYY-MM-DD-HHmmss")+".csv",data:k(e)})}]}),i.jsx(re,{type:"new",children:i.jsx(he,{menu:{items:Nn(e)},arrow:!0,children:i.jsx(m,{icon:i.jsx("i",{className:"fa-solid fa-toolbox"}),children:te({en:"Tools",vi:"Công cụ"})})})}),i.jsx(ie,{name:"AllFriends",text:Ne.map((e=>e.name)).join(" ")}),i.jsx(E.Compact,{children:e?.length?i.jsxs(i.Fragment,{children:[i.jsx(U,{title:te({en:`Poke ${e.length} selected friends`,vi:`Chọc ${e.length} người được chọn`}),children:i.jsx(m,{type:"default",icon:i.jsx("i",{className:"fa-solid fa-hand-point-right"}),onClick:()=>(async e=>je({key:"AllFriends:onClickPokeSelected",data:e,loadingText:e=>te({en:"Poking...",vi:"Đang chọc..."}),successText:(e,n)=>te({en:"Poke friends completed",vi:"Chọc bạn bè xong"}),actionFn:dn,waitTime:[500,1e3],successDescItem:e=>e.name,confirmProps:{title:te({en:"Poke "+e.length+" users?",vi:"Chọc "+e.length+" người?"})}}))(e),children:e.length?" "+e.length:""})}),n?.length>0?i.jsx(U,{title:te({en:`Request friend with ${n.length} selected users`,vi:`Gửi kết bạn với ${n.length} người được chọn`}),children:i.jsx(m,{icon:i.jsx("i",{className:"fa-solid fa-user-plus"}),onClick:()=>(async e=>je({key:"AllFriends:onClickAddFriendSelected",data:e,loadingText:e=>te({en:"Sending friend request...",vi:"Đang gửi kết bạn..."}),successText:(e,n)=>te({en:"Send friend requests completed",vi:"Gửi kết bạn xong"}),actionFn:un,waitTime:[500,1e3],successDescItem:e=>e.name,confirmProps:{title:te({en:"Send friend request to "+e.length+" users?",vi:"Gứi kết bạn tới "+e.length+" người?"})}}))(n),children:n.length})}):null,t?.length>0?i.jsx(U,{title:te({en:`Unfriend ${t.length} selected friends`,vi:`Huỷ kết bạn ${t.length} người được chọn`}),children:i.jsx(m,{danger:!0,icon:i.jsx("i",{className:"fa-solid fa-trash-can"}),onClick:()=>(async e=>je({key:"AllFriends:onClickUnfriendSelected",data:e,loadingText:e=>te({en:"Unfriending...",vi:"Đang huỷ kết bạn..."}),successText:(e,n)=>te({en:"Unfriend completed",vi:"Huỷ kết bạn xong"}),actionFn:on,waitTime:[500,1e3],successDescItem:e=>e.name,confirmProps:{title:te({en:"Unfriend "+e.length+" users?",vi:"Huỷ kết bạn "+e.length+" người?"})}}))(t),children:t.length})}):null]}):null})]})}})})}));const{Dragger:n}=ae;function fe({title:e="Upload file",text:s="Click or drag file to this area to upload",hint:l="Support for a single or bulk upload. Strictly prohibited from uploading company data or other banned files.",renderButton:a=({showModal:e})=>{},onSubmit:r=e=>{},accept:c=".json, .csv",keepFileList:o=!1}){const[d,u]=t.useState(!1),[h,g]=t.useState(!1),[m,f]=t.useState(null),[y,k]=t.useState([]);return i.jsxs(i.Fragment,{children:[a?.({showModal:()=>{u(!0)}}),i.jsx(le,{title:e,open:d,onOk:()=>{r(m),u(!1),o||(k([]),f(null))},confirmLoading:h,onCancel:()=>{u(!1)},closeIcon:null,children:i.jsxs(n,{accept:c,beforeUpload:e=>{g(!0),k([e]);const n=new FileReader;return n.onload=e=>{g(!1),f(e.target?.result??null)},n.readAsText(e),!1},maxCount:1,fileList:y,onRemove:()=>k([]),children:[i.jsx("p",{className:"ant-upload-drag-icon",children:i.jsx("i",{className:"fa-solid fa-inbox fa-3x"})}),i.jsx("p",{className:"ant-upload-text",children:s}),i.jsx("p",{className:"ant-upload-hint",children:l})]})})]})}fe.propTypes={title:te.string,text:te.string,hint:te.string,renderButton:te.func,onSubmit:te.func,accept:te.string,keepFileList:te.bool};const ye={FRIEND:"Friend",POKED:"Poked",UNFRIENDED:"Unfriended",REQUESTED:"Requested friend",NEW:"New friend"},ke={[ye.POKED]:"green",[ye.UNFRIENDED]:"red",[ye.NEW]:"blue",[ye.REQUESTED]:"pink"},xe={[ye.FRIEND]:{en:"Friend",vi:"Bạn bè"},[ye.POKED]:{en:"Poked",vi:"Đã chọc"},[ye.UNFRIENDED]:{en:"Unfriended",vi:"Đã huỷ kết bạn"},[ye.REQUESTED]:{en:"Requested friend",vi:"Đã gửi kết bạn"},[ye.NEW]:{en:"New friend",vi:"Chưa kết bạn"}},be=e=>{const n=e?.statuses||[];return!n.includes(ye.REQUESTED)&&(n.includes(ye.NEW)||n.includes(ye.UNFRIENDED)||n.includes(ye.FOLLOWER))},pe=e=>{const n=e?.statuses||[];return!n.includes(ye.NEW)&&!n.includes(ye.UNFRIENDED)}}}}));
