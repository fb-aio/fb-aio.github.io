System.register(["./index-legacy-CNCum5uo.js","./dayjs.min-legacy-DX9uDgUu.js","./MyTable-legacy-Cwfqqq3S.js","./ExportButton-legacy-C4rZR-Il.js","./MyApp-legacy-CxhvnD7M.js","./useForceStop-legacy-D5w2WuTf.js","./friends-legacy-CQqe3g6E.js","./messages-legacy-D3rB9Sf9.js","./WordStatisticButton-legacy-BeiVvFE1.js","./useAction-legacy-BjzwEZje.js","./index-legacy-B_4b_d-x.js","./index-legacy-pwXbWKY1.js","./BadgeWrapper-legacy-cmdoYrvd.js","./useDevMode-legacy-COLlfXaP.js","./Screen-legacy-rKDJWQ7x.js","./row-legacy-Zp9ZVowt.js","./index-legacy-BgyXVcft.js","./index-legacy-CewQ8p7C.js","./index-legacy-UkkNV0iE.js","./index-legacy-BM2pwDGl.js","./index-legacy-BGRLPLcy.js","./index-legacy-yZDoKdRS.js","./index-legacy-CMZd7EMC.js","./DownOutlined-legacy-BkXA5ZGR.js","./TextArea-legacy-BUPDeOhF.js","./Table-legacy-Bfy1f8Jk.js","./List-legacy-BqRP7pMJ.js","./index-legacy-Cdlmwft3.js","./index-legacy-DHE3nw2X.js","./index-legacy-CULND6Fl.js","./index-legacy-vo13RxhL.js","./PurePanel-legacy-BCxlC7pO.js","./move-legacy-CiY507h3.js","./SearchOutlined-legacy-muwBifzL.js","./useBreakpoint-legacy-W6KIGp6I.js","./useForceUpdate-legacy-Div45DH-.js","./Pagination-legacy-DgK0JFnr.js","./index-legacy-Bv56PRVU.js","./file-download-legacy-CFQ9AOfH.js","./index-legacy-63949M1T.js","./Dropdown-legacy-BF2TA7U9.js","./Collapse-legacy-CmKJogr_.js","./col-legacy-AZR3uKPr.js"],(function(e,n){"use strict";var t,i,s,l,a,r,c,o,d,u,h,g,m,f,y,k,x,p,b,v,j,F,S,w,C,T,N,D,$,E,q,A,I,U,B,R,H,Q,P,M,L,_,Y,W,O,K,G,X,V,z,J,Z,ee,ne,te,ie,se,le,ae,re,ce,oe,de,ue,he,ge,me;return{setters:[e=>{t=e.r,i=e.aW,s=e.bg,l=e.aU,a=e.aI,r=e.aJ,c=e.bn,o=e.bh,d=e.be,u=e.bf,h=e.aV,g=e.bo,m=e.a_,f=e.aQ,y=e.bp,k=e.bl,x=e.bm,p=e.aG,b=e.aT},e=>{v=e.d},e=>{j=e.default},e=>{F=e.E},e=>{S=e.u,w=e.a,C=e.k,T=e.n,N=e.t,D=e.I,$=e.f,E=e.S,q=e.h,A=e.c,I=e.T,U=e.p,B=e.l,R=e.o},e=>{H=e.u},e=>{Q=e.Q,P=e.g,M=e.a,L=e.G,_=e.b,Y=e.u,W=e.p,O=e.c,K=e.f,G=e.d,X=e.F,V=e.e,z=e.h,J=e.i,Z=e.j},e=>{ee=e.d},e=>{ne=e.P,te=e.W},e=>{ie=e.u},e=>{se=e.M},e=>{le=e.U},e=>{ae=e.B},e=>{re=e.u},e=>{ce=e.S},e=>{oe=e.R},e=>{de=e.A},e=>{ue=e.T},e=>{he=e.D},e=>{ge=e.P},e=>{me=e.P},null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],execute:function(){e("default",(function(){const e=s(),n=H(),{ti:ne}=l(),{message:se,notification:le}=S(),{onClickAction:ve,onClickBulkActions:je}=ie(),{devMode:Fe}=re(),{profile:Se}=w(),we=a(r.friendsByUid),Ce=a(r.setFriendsByUid),[Te,Ne]=C("AllFriends.data",[]),[De,$e]=C("AllFriends.interactions",[]),[Ee,qe]=C("AllFriends.ranking",[]),Ae=t.useMemo((()=>{const e=new Map,n=new Map;for(let t of De)t.reactions_uid?.forEach((n=>e.set(n,(e.get(n)||0)+1))),t.comments_uid?.forEach((e=>n.set(e,(n.get(e)||0)+1)));return{reactions:e,comments:n}}),[De]),Ie=t.useMemo((()=>Te?.map(((e,n)=>({...e,recent:n,comments:Ae?.comments?.get(e.uid)||0,reactions:Ae?.reactions?.get(e.uid)||0,ranking:Ee?.indexOf(e.uid),quickFilters:Array.from(new Set([...e.quickFilters||[],e.uid?.startsWith("1000")?null:Q.StrangeUid,T(e.avatar)?Q.NoAvatar:null,/\d/.test(e.name)?Q.NameContainsNumbers:null,c(e.name)?Q.NameContainsSpecialCharacters:null].filter(Boolean)))})))||[]),[Te,Ae,Ee]),[Ue,Be]=t.useState(!1),[Re,He]=t.useState(0),[Qe,Pe]=t.useState(!1),[Me,Le]=t.useState(!1),[_e,Ye]=t.useState(!1),[We,Oe]=t.useState(!1),[Ke,Ge]=t.useState(!1),[Xe,Ve]=t.useState(!1),[ze,Je]=t.useState(!1),[Ze,en]=t.useState(!1),[nn,tn]=t.useState(!1),[sn,ln]=t.useState(!1),an=t.useRef(null);t.useEffect((()=>{Se?.uid&&!Te?.length&&cn()}),[]);const rn=(e,n,t=!1,i=!1)=>{Ne((s=>x(s,(s=>{Array.isArray(e)||(e=[e]);let l=[];for(let a of e){let e=s.findIndex((e=>e.uid==(a?.uid||a))),r=s[e];r?(r.statuses||(r.statuses=[]),t||r.statuses.includes(n)?(Array.isArray(n)||(n=[n]),r.statuses=n):r.statuses.push(n),i&&l.push({index:e,data:r})):i?s.unshift({...a,statuses:[n]}):s.push({...a,statuses:[n]})}for(let{index:e,data:n}of l)s.splice(e,1),s.unshift(n);return s}))))},cn=()=>{if(Ue)return;N("AllFriends:onClickReload");const e="onClickReload";se.loading({key:e,content:ne({en:"Fetching friends...",vi:"Đang tải bạn bè..."}),duration:0}),Be(!0),P({myUid:Se?.uid}).then((n=>{if(((e=Te)=>{let n=!1;const t=we?.[Se?.uid]||[],s=e.map((e=>e.uid)),l=t.map((e=>e.uid)),a=new Set(s),r=new Set(l),c=s.filter((e=>!r.has(e))),o=l.filter((e=>!a.has(e)));c.length&&(n=!0,console.log("New friends: ",c),rn(c,ye.NEW,!0),t?.length?le.open({type:"success",duration:0,message:ne({en:`Find ${c.length} new friends`,vi:`Tìm thấy ${c.length} bạn mới`}),description:i.jsx("div",{style:{maxHeight:300,overflowY:"auto",overflowX:"hidden"},children:i.jsx("ol",{children:c.map((n=>{const t=e.find((e=>e.uid==n));return i.jsx("li",{children:i.jsx("a",{href:q(n),target:"_blank",children:t?.name||n})},n)}))})})}):le.open({type:"success",duration:0,message:ne({en:`Saved friends to cache: ${c.length}`,vi:`Đã lưu danh sách bạn bè: ${c.length}`}),description:ne({en:"Will notify if you have new friends / someone unfriended to you in future",vi:"Sẽ thông báo nếu có bạn mới / người huỷ kết bạn với bạn trong tương lai"})})),o.length&&(n=!0,console.log("Deleted friends: ",o),le.open({type:"info",duration:0,message:ne({en:`Find ${o.length} unfriended`,vi:`Có ${o.length} người huỷ kết bạn`}),description:i.jsx("div",{style:{maxHeight:300,overflowY:"auto",overflowX:"hidden"},children:i.jsx("ol",{children:o.map((e=>{const n=t.find((n=>n.uid==e));return i.jsx("li",{children:i.jsx("a",{href:q(e),target:"_blank",children:n?.name||e})},e)}))})})})),n&&Ce(Se?.uid,e.map((e=>({uid:e.uid,name:e.name}))))})(n),!n?.length)return se.error({key:e,content:ne({en:"No data to show",vi:"Không có dữ liệu"})});Ne(n),console.log(n),se.success({key:e,content:ne({en:`Found ${n.length} friends`,vi:`Tải xong ${n.length} bạn bè`})}),an.current?.clearFilter()})).catch((n=>{se.error({key:e,content:ne({en:"Failed to fetch friends",vi:"Lỗi tải bạn bè"})+": "+n.message}),console.log(n)})).finally((()=>{Be(!1)}))},on=(e,n=!1)=>ve({key:"AllFriends:onClickUnfriendOne",id:e.uid,record:e,loadingText:e=>ne({en:"Unfriending...",vi:"Đang huỷ kết bạn..."})+" "+e.name,successText:e=>ne({en:"Unfriend completed",vi:"Đã huỷ kết bạn"})+": "+e.name,actionFn:e=>Fe?f(1e3):Y({myUid:Se?.uid,targetUid:e?.uid}),onSuccess:()=>rn(e,ye.UNFRIENDED),failedText:e=>ne({en:"Failed to unfriend",vi:"Lỗi huỷ kết bạn"})+": "+e.name,needConfirm:n,confirmProps:{title:ne({en:"Unfriend 🫂",vi:"Huỷ kết bạn 🫂"}),text:ne({en:"Unfriend with ",vi:"Huỷ kết bạn với "})+e.name+"?"}}),dn=async(e,n=!1)=>ve({key:"AllFriends:onClickPokeFriend",id:e.uid,record:e,loadingText:e=>ne({en:"Poking...",vi:"Đang chọc..."})+" "+e.name,successText:e=>ne({en:"Poke completed",vi:"Chọc thành công"})+": "+e.name,actionFn:e=>Fe?f(1e3):W({myUid:Se?.uid,targetUid:e?.uid}),onSuccess:()=>rn(e,ye.POKED),failedText:e=>ne({en:"Failed to poke",vi:"Chọc thất bại"})+": "+e.name,needConfirm:n,confirmProps:{title:ne({en:"Poke friend 👉",vi:"Chọc bạn bè 👉"}),text:ne({en:"Poke ",vi:"Chọc "})+e.name+"?"}}),un=async(e,n=!1)=>ve({key:"AllFriends:onClickAddFriend",id:e.uid,record:e,loadingText:e=>ne({en:"Sending friend request...",vi:"Đang gửi kết bạn..."})+" "+e.name,successText:e=>ne({en:"Send friend request success",vi:"Gửi kết bạn thành công"})+": "+e.name,actionFn:e=>Fe?f(1e3):O({myUid:Se?.uid,targetUid:e?.uid}),onSuccess:()=>rn(e,ye.REQUESTED),failedText:e=>ne({en:"Failed to send friend request",vi:"Lỗi gửi kết bạn"})+": "+e.name,needConfirm:n,confirmProps:{title:ne({en:"Send friend request 🙏",vi:"Gửi kết bạn 🙏"}),text:ne({en:"Send friend request to ",vi:"Gửi kết bạn tới "})+e.name+"?"}}),hn=async e=>{if(!e)return se.error(ne({en:"File empty",vi:"File rỗng"}));N("AllFriends:onUploadFriendsFile");try{const n=U(e,[]);if(!Array.isArray(n)||!n?.length)return se.error(ne({en:"No data",vi:"Không có dữ liệu"}));const t=n.map((e=>e.uid)).filter(Boolean);if(!t.length)return se.error(ne({en:"No friends data in file",vi:"Không có dữ liệu bạn bè trong file"}));const s=new Set(t),l=[];for(let e of Te)s.has(e.uid)||l.push(e);const a=new Set(Te.map((e=>e.uid))),r=[];for(let e of n)a.has(e.uid)||r.push(e);rn(l,ye.NEW,!1,!0),rn(r,ye.UNFRIENDED,!1,!0),[{title:ne({en:`Found ${l.length} new friends`,vi:`Tìm thấy ${l.length} bạn mới`}),text:i.jsx("div",{style:{maxHeight:300,overflowY:"auto",overflowX:"hidden"},children:i.jsx("ol",{children:l.map((e=>i.jsx("li",{children:i.jsx("a",{href:q(e.uid),target:"_blank",children:e.name})},e.uid)))})})},{title:ne({en:`Found ${r.length} unfriended`,vi:`Tìm thấy ${r.length} người huỷ kết bạn`}),text:i.jsx("div",{style:{maxHeight:300,overflowY:"auto",overflowX:"hidden"},children:i.jsx("ol",{children:r.map((e=>i.jsx("li",{children:i.jsx("a",{href:q(e.uid),target:"_blank",children:e.name})},e.uid)))})})}].forEach((({title:e,text:n})=>le.open({type:"success",message:e,description:n,duration:0}))),(r.length||l.length)&&an.current?.setDataSelected([...r,...l])}catch(n){se.error(n.message)}},gn=async()=>{if(!(await B())||Me)return;Le(!0);const e=n.start(),t="AllFriends:onClickScanInteractions";N(t),se.loading({key:t,duration:0,content:ne({en:"Loading posts...",vi:"Đang tải bài viết..."})});let s=!1;const l=await R(1/0,(e=>{$e([...e]);const n=e.reduce(((e,n)=>e+(n.comments_uid?.length||0)),0),l=e.reduce(((e,n)=>e+(n.reactions_uid?.length||0)),0),a=new Date(e[e.length-1]?.created_time||0),r=b(a);se.loading({key:t,duration:0,content:i.jsxs(i.Fragment,{children:[ne({en:`Loading ${r}: ${e.length} posts, ${l} reactions, ${n} comments...`,vi:`Đang tải ${r}: ${e.length} bài viết, ${l} lượt thích, ${n} bình luận...`}),i.jsx("br",{}),i.jsx("i",{children:ne({en:"Click to stop",vi:"Bấm để dừng"})})]}),onClick:()=>s=!0})}),(()=>s||e.value())),a=l.reduce(((e,n)=>e+(n.comments_uid?.length||0)),0),r=l.reduce(((e,n)=>e+(n.reactions_uid?.length||0)),0);se.destroy(t);const c=l[l.length-1],o=b(new Date(c?.created_time||0));le.open({type:"success",duration:0,message:ne({en:"Scan interactions finished",vi:"Quét tương tác xong"}),description:i.jsxs(i.Fragment,{children:[ne({en:`Scanned ${l.length} posts, ${r} reactions, ${a} comments, last post ${o} `,vi:`Quét được ${l.length} bài viết, ${r} lượt thích, ${a} bình luận, bài viết cuối ${o} `}),i.jsx("a",{href:q(c?.postId),target:"_blank",children:q(c?.postId)})]})}),$e(l),Le(!1)},mn=async()=>{const e="AllFriends:onClickFindBuddy";N(e),se.loading({key:e,duration:0,content:ne({en:"Scanning ranking friends...",vi:"Đang tải xếp hạng bạn bè..."})});const n=await K(Te.length||100);console.log(n),se.destroy(e),le.open({type:"success",duration:0,message:ne({en:`Scan ranking completed: ${n.length} friends`,vi:`Quét xếp hạng bạn bè xong: ${n.length} bạn`}),description:i.jsxs(i.Fragment,{children:["Top 20:",i.jsx("br",{}),i.jsx("ol",{children:n.slice(0,20).map(((e,n)=>i.jsxs("div",{children:[i.jsx("a",{href:q(e.uid),target:"_blank",children:n+1+": "+e.name}),i.jsx("br",{})]},e.uid)))})]})}),qe(n.map((e=>e.uid)));const t=new Set(Te.map((e=>e.uid))),s=n.filter((e=>!t.has(e.uid)));s.length&&rn(s,ye.NEW,!0)},fn=async()=>{if(!(await B()))return;Pe(!0);const e="AllFriends:onClickDeepScan";N(e),se.loading({key:e,content:ne({en:"Deep Scanning...",vi:"Đang quét chuyên sâu..."}),duration:0});const n=[];let t=null,s=!1;for(;!s;){const l=await G({cursor:t,section:X.friends});if(!l.length)break;Ne((e=>x(e,(e=>(l.forEach((n=>{if(!n.uid)return;const t=e.find((e=>e.uid===n.uid));t?(t.mutualFriendCount=n.mutualFriendCount,t.gender=n.gender,t.quickFilters||(t.quickFilters=[]),n.isLocked&&!t.quickFilters.includes(Q.Locked)&&t.quickFilters.push(Q.Locked)):n.isLocked&&e.push({...n,quickFilters:[Q.Locked]})})),e))))),n.push(...l),t=l[l.length-1].cursor,se.loading({key:e,content:i.jsxs(i.Fragment,{children:[ne({en:"Deep Scanning...",vi:"Đang quét chuyên sâu..."})+`${~~(n.length/Te.length*100)}% (${n.length}/${Te.length})`,i.jsx("br",{}),ne({en:"Click to stop",vi:"Bấm để dừng"})]}),onClick:()=>s=!0,duration:0}),await f(200)}const l=n.filter((e=>e.isLocked));se.destroy(e),le.open({type:"success",message:ne({en:"Deep Scanning completed",vi:"Hoàn tất Quét chuyên sâu"})+` (${n.length}/${Te.length})`,description:ne({en:`Found ${l.length} locked friends.\nPlease see in "Quick filters" column`,vi:`Tìm thấy ${l.length} bạn bị khoá.\nVui lòng xem cột "Bộ lọc"`})}),Pe(!1)},yn=async()=>{if(!(await B()))return;Ye(!0);const e="AllFriends:onClickScanRemovedFriends";N(e),se.loading({key:e,content:ne({en:"Scanning removed friends...",vi:"Đang quét bạn cũ..."}),duration:0});const n=[];let t="",s=!1;for(;!s;){const l=await V(t);if(!l?.length)break;n.push(...l),t=l[l.length-1]?.cursor||"",Ne((e=>x(e,(e=>(l.forEach((n=>{if(!n.uid)return;const t=e.find((e=>e.uid===n.uid));t?(t.statuses||(t.statuses=[]),t.statuses.includes(ye.UNFRIENDED)||t.statuses.push(ye.UNFRIENDED),t.time=n.time,t.desc=n.desc,t.cursor=n.cursor):e.push({...n,statuses:[ye.UNFRIENDED]})})),e))))),se.loading({key:e,content:i.jsxs(i.Fragment,{children:[ne({en:`Scanning removed friends... ${n.length}`,vi:`Đang quét bạn cũ... ${n.length}`}),i.jsx("br",{}),ne({en:"Click to stop",vi:"Bấm để dừng"})]}),duration:0,onClick:()=>{s=!0}}),await f(1e3)}se.destroy(e),le.open({type:"success",message:ne({en:"Scan removed friends completed",vi:"Hoàn tất Quét bạn cũ"}),description:ne({en:`Found ${n.length} removed friends.\nPlease filter in "Status" column`,vi:`Tìm thấy ${n.length} bạn cũ.\nVui lòng xem cột "Trạng thái"`})}),Ye(!1)},kn=async()=>{Oe(!0);const e="AllFriends:onClickScanAddedTime";N(e),se.loading({key:e,content:ne({en:"Scanning added time...",vi:"Đang quét thời gian..."}),duration:0});const n=[];let t="",s=!1;for(;!s;){const l=await z(t);if(!l?.length)break;n.push(...l),t=l[l.length-1]?.cursor||"",Ne((e=>x(e,(e=>(l.forEach((n=>{if(!n.uid)return;const t=e.find((e=>e.uid===n.uid));t?(t.time=n.time,t.cursor=n.cursor):e.push(n)})),e))))),se.loading({key:e,content:i.jsxs(i.Fragment,{children:[ne({en:`Scanning added time... ${n.length}`,vi:`Đang quét thời gian... ${n.length}`}),i.jsx("br",{}),ne({en:"Click to stop",vi:"Bấm để dừng"})]}),duration:0,onClick:()=>{s=!0}}),await f(1e3)}se.destroy(e),le.open({type:"success",message:ne({en:"Scan added time completed",vi:"Hoàn tất Quét thời gian"}),description:ne({en:`Scanned ${n.length} friends.`,vi:`Đã quét ${n.length} bạn.`})}),Oe(!1)},xn=async()=>{if(!(await B()))return;Ge(!0);const e="AllFriends:onClickScanBirthday";N(e),se.loading({key:e,content:ne({en:"Scanning birthday...",vi:"Đang quét ngày sinh..."})});let n="1";const t=[];for(;;){const i=await J(n);if(console.log(i),!i?.length)break;t.push(...i),n=i[i.length-1]?.cursor,se.loading({key:e,content:ne({en:`Scanning birthday... ${t.length}`,vi:`Đang quét ngày sinh... ${t.length}`}),duration:0}),Ne((e=>x(e,(e=>(t.forEach((n=>{const t=e.find((e=>e.uid===n.uid));t?t.birthday=n.birthday:console.log("new friend birthday",n)})),e))))),await f(500)}se.destroy(e),le.open({type:"success",message:ne({en:"🎂 Scan birthday completed",vi:"Hoàn tất 🎂 Quét sinh nhật"}),description:ne({en:`Found ${t.length} friend birthdays.`,vi:`Tìm được ${t.length} sinh nhật.`}),duration:0}),Ge(!1)},pn=async({section:e,key:n,quickFilterType:t,setLoading:s,getFriendsFn:l,addIfNotExists:a=!0})=>{N(n),s(!0);const r=ne(M[t]);se.loading({key:n,content:ne({en:`Scanning ${r}...`,vi:`Đang quét bạn ${r}...`})});const c=[];let o=null,d=!1;for(;!d;){const s=l?await l(o):await G({cursor:o,section:e});if(!s.length)break;console.log(s),Ne((e=>x(e,(e=>(s.forEach((n=>{if(!n.uid)return;const i=e.find((e=>e.uid===n.uid));i?(i.quickFilters||(i.quickFilters=[]),i.quickFilters.includes(t)||i.quickFilters.push(t)):a&&e.push({...n,quickFilters:[t],statuses:[ye.NEW]})})),e))))),c.push(...s),o=s[s.length-1].cursor,se.loading({key:n,content:i.jsxs(i.Fragment,{children:[ne({en:`Scanning ${r}...`,vi:`Đang quét ${r}...`})," ",c.length,i.jsx("br",{}),ne({en:"Click to stop",vi:"Bấm để dừng"})]}),onClick:()=>d=!0,duration:0}),await f(200)}se.destroy(n),le.open({type:"success",message:ne({en:`Scan ${r} completed`,vi:`Hoàn tất quét ${r}`}),description:ne({en:`Found ${c.length} friends.\nPlease see in "Quick filters" column`,vi:`Tìm thấy ${c.length} bạn bè.\nVui lòng xem cột "Bộ lọc"`}),duration:0}),s(!1)},bn=()=>{pn({section:X.current_city,key:"AllFriends:onClickScanCurrentCity",quickFilterType:Q.CurrentCity,setLoading:Ve})},vn=()=>{pn({section:X.hometown,key:"AllFriends:onClickScanHomeTown",quickFilterType:Q.Hometown,setLoading:Je})},jn=()=>{pn({section:X.high_school,key:"AllFriends:onClickScanHighSchool",quickFilterType:Q.Highschool,setLoading:en})},Fn=()=>{pn({section:X.works,key:"AllFriends:onClickScanWork",quickFilterType:Q.Work,setLoading:tn})},Sn=()=>{pn({key:"AllFriends:onClickScanFollowers",quickFilterType:Q.Follower,setLoading:ln,getFriendsFn:Z})},wn=new Date,Cn=[{title:"#",key:"recent",dataIndex:"recent",sorter:(e,n)=>e.recent-n.recent,render:(e,n,t)=>n.recent+1,width:70,align:"center"},{title:ne({en:"Name",vi:"Tên"}),dataIndex:"name",key:"name",sorter:(e,n)=>e.name.localeCompare(n.name),onSearch:(e,n,t)=>o(e,t?.name+t?.uid),render:(e,n,t)=>i.jsxs(oe,{align:"middle",justify:"start",style:{flex:1},children:[i.jsx(de,{shape:"square",src:i.jsx(D,{src:$(n.uid),fallback:n.avatar}),size:50}),i.jsxs(E,{direction:"vertical",size:0,style:{marginLeft:10},children:[i.jsx(ue.Link,{href:n.url||q(n.uid),target:"_blank",strong:!0,children:n.name}),i.jsx(ue.Text,{type:"secondary",children:n.uid}),!!n.desc&&i.jsx(ue.Text,{type:"secondary",children:n.desc})]})]})},{title:ne({en:"Quick Filters",vi:"Bộ lọc"}),dataIndex:"quickFilters",key:"quickFilters",render:(e,n,t)=>n.quickFilters?.map((e=>i.jsx(A,{color:M[e].color,children:ne(M[e])},e)))||"",filters:Object.entries(M).map((([e,n])=>({text:ne(n)+" ("+Ie.filter((n=>n.quickFilters?.includes(e))).length+")",value:e}))),onFilter:(e,n)=>n.quickFilters?.includes(e),width:150},...Te.find((e=>e.gender))?[{title:ne({en:"Gender",vi:"Giới tính"}),key:"gender",dataIndex:"gender",render:(e,n,t)=>{const s=ne(L[n.gender])||"-";return n.gender===_.Female?i.jsx(A,{color:"pink",children:s}):s},filters:Object.entries(L).map((([e,n])=>({text:ne(n)+" ("+Te.filter((n=>n.gender===e)).length+")",value:e}))),onFilter:(e,n)=>n.gender==e,width:120}]:[],...Te.find((e=>e.mutualFriendCount))?[{title:ne({en:"Mutual",vi:"Bạn chung"}),key:"mutualFriendCount",dataIndex:"mutualFriendCount",sorter:(e,n)=>(e.mutualFriendCount||0)-(n.mutualFriendCount||0),width:120,align:"right",rangeFilter:{getValue:e=>e.mutualFriendCount}}]:[],...Ee.length?[{title:ne({en:"Ranking",vi:"Xếp hạng"}),key:"ranking",dataIndex:"ranking",render:(e,n,t)=>-1==e?"_":e+1,sorter:(e,n)=>(-1==e.ranking?1/0:e.ranking)-(-1==n.ranking?1/0:n.ranking),width:120,align:"right",rangeFilter:{getValue:e=>e.ranking}}]:[],...De?.length?[{title:ne({en:"Reactions",vi:"Thích"}),key:"reactions",dataIndex:"reactions",sorter:(e,n)=>e.reactions-n.reactions,width:100,align:"right"},{title:ne({en:"Comments",vi:"Bình luận"}),key:"comments",dataIndex:"comments",sorter:(e,n)=>e.comments-n.comments,width:100,align:"right"}]:[],...Te.find((e=>e.time))?[{title:ne({en:"Time",vi:"Thời gian"}),key:"time",dataIndex:"time",render:(e,n,t)=>{if(!n.time)return"";const s=new Date(n.time);return i.jsxs(E,{direction:"vertical",size:0,children:[i.jsx(ue.Text,{children:d(s.getTime())}),i.jsx(ue.Text,{type:"secondary",children:u(s)})]})},sorter:(e,n)=>(e.time||0)-(n.time||0),width:"16ch"}]:[],...Te.find((e=>e.birthday))?[{title:ne({en:"Birthday",vi:"Sinh nhật"}),key:"birthday",dataIndex:"birthday",render:(e,n,t)=>{const{year:s,month:l,day:a}=n.birthday||{};if(!l)return"-";const r=new Date,c=l===r.getMonth()+1&&a===r.getDate();r.setFullYear(r.getFullYear(),l-1,a);const o=r.getTime()-Date.now(),d=o>0,u=h(Math.abs(o)),m=Math.floor(o/864e5);return i.jsxs(E,{direction:"vertical",size:0,children:[s&&i.jsxs(ue.Text,{strong:!0,children:[g(s,l,a)," ",ne({en:"years",vi:"tuổi"})]}),i.jsxs(ue.Text,{type:"secondary",children:[a,"/",l,s?"/"+s:""]}),i.jsx(A,{color:c?"red":d?d&&m<10?"orange":"green":"blue",children:c?ne({en:"Today",vi:"Hôm nay"}):i.jsxs(i.Fragment,{children:[u," ",ne(o<0?{en:"ago",vi:"trước"}:{en:"left",vi:"sau"})]})})]})},sorter:(e,n)=>{const{year:t=0,month:i=0,day:s=0}=e.birthday||{},{year:l=0,month:a=0,day:r=0}=n.birthday||{};return 1e4*t+100*i+s-1e4*l-100*a-r},filters:[{text:ne({en:"Has birthday",vi:"Có ngày sinh"})+` (${Te.filter((e=>e.birthday)).length})`,value:"yes"},{text:ne({en:"No birthday",vi:"Không ngày sinh"})+` (${Te.filter((e=>!e.birthday)).length})`,value:"no"},{text:ne({en:"Know ages",vi:"Biết tuổi"})+` (${Te.filter((e=>e.birthday?.year)).length})`,value:"year"},{text:ne({en:"Today",vi:"Hôm nay"})+` (${Te.filter((e=>{const{month:n,day:t}=e.birthday||{};return t==wn.getDate()&&n==wn.getMonth()+1})).length})`,value:"today"},...Array.from({length:12}).map(((e,n)=>({text:ne({en:"Month ",vi:"Tháng "})+(n+1)+` (${Te.filter((e=>e.birthday?.month===n+1)).length})`,value:n+1})))],onFilter:(e,n)=>{const{year:t,month:i,day:s}=n.birthday||{};return"year"==e?!!t:"yes"==e?!!n.birthday:"no"==e?!n.birthday:"today"==e?s==wn.getDate()&&i==wn.getMonth()+1:i==e},width:120}]:[],{title:ne({en:"Friend status",vi:"Trạng thái"}),dataIndex:"status",key:"status",width:150,filters:Object.entries(ye).map((([e,n])=>({text:ne(xe[n]||n)+" ("+Te.filter((e=>e.statuses?.includes(n)||n===ye.FRIEND&&!e.statuses?.length)).length+")",value:n}))),onFilter:(e,n)=>n.statuses?.includes(e)||e==ye.FRIEND&&!n.statuses?.length,render:(e,n,t)=>n?.statuses?.length?n.statuses.map((e=>({key:e,value:ne(xe[e]||e)}))).map((({key:e,value:n})=>i.jsx(A,{color:ke[e],children:n},e))):ne({en:"Friend",vi:"Bạn bè"}),align:"right"},{title:ne({en:"Action",vi:"Hành động"}),dataIndex:"action",key:"download",render:(n,t,s)=>i.jsxs(E.Compact,{children:[i.jsx(I,{title:ne({en:"Friendship",vi:"Xem tình bạn"}),children:i.jsx(m,{type:"default",onClick:()=>(e=>{N("AllFriends:onClickViewFriendship");const n=Se?.uid,t=`https://www.facebook.com/friendship/${n}/${e.uid}`;window.open(t,"_blank")})(t),icon:i.jsx("i",{className:"fa-solid fa-eye"})})}),i.jsx(I,{title:ne({en:"Bulk Downloader",vi:"Tải hàng loạt"}),children:i.jsx(m,{type:"default",onClick:()=>{return n=t.uid,void e("/bulk-downloader",{state:{targetId:n,platform:y.Facebook}});var n},icon:i.jsx("i",{className:"fa-solid fa-download"})})}),i.jsx(I,{title:ne({en:"Poke",vi:"Chọc"}),children:i.jsx(m,{type:"default",onClick:()=>dn(t,!0),icon:i.jsx("i",{className:"fa-regular fa-hand-point-right"})})}),t.statuses?.includes(ye.UNFRIENDED)||t.statuses?.includes(ye.NEW)?i.jsx(I,{title:ne({en:"Request friend",vi:"Gửi kết bạn"}),children:i.jsx(m,{type:"default",onClick:()=>un(t,!0),icon:i.jsx("i",{className:"fa-solid fa-user-plus"})})}):i.jsx(I,{title:ne({en:"Unfriend",vi:"Huỷ kết bạn"}),children:i.jsx(m,{danger:!0,onClick:()=>on(t,!0),icon:i.jsx("i",{className:"fa-solid fa-trash-can"})})})]}),width:150,align:"right"}],Tn=e=>[{type:"group",label:ne({en:"Interaction",vi:"Tương tác"}),children:[{key:"ranking",label:i.jsx(ge,{placement:"right",title:ne({en:"Ranking",vi:"Xếp hạng"}),content:i.jsx("ul",{children:ne({en:"📊 Rank who has interacted with you the most recently\n                                ❓ Also called Recent interactions",vi:"📊 Xem ai tương tác với bạn nhiều nhất thời gian gần đây\n                                ❓ Còn gọi là Tương tác gần đây"}).split("\n").map(((e,n)=>i.jsx("li",{children:e.trim()},n)))}),children:i.jsx(m,{onClick:mn,icon:i.jsx("i",{className:"fa-solid fa-ranking-star"}),children:ne({en:"Ranking",vi:"Xếp hạng"})})})},{key:"deep-scan",label:i.jsx(ae,{type:"hot",children:i.jsx(ge,{placement:"right",title:ne({en:"Deep Scan",vi:"Quét Chuyên Sâu"}),content:i.jsxs(i.Fragment,{children:[ne({en:"🔎 Scan all friends to filter:",vi:"🔎 Quét tất cả bạn bè để lọc:"}),i.jsx("ul",{children:ne({en:"🎯 gender\n                                                        🔒 locked friends\n                                                        🫂 mutual friends",vi:"🎯 giới tính\n                                                        🔒 bạn bè bị khoá\n                                                        🫂 bạn chung"}).split("\n").map(((e,n)=>i.jsx("li",{children:e.trim()},n)))})]}),children:i.jsx(m,{loading:!!Qe,onClick:fn,icon:i.jsx("i",{className:"fa-solid fa-magnifying-glass"}),children:ne({en:"Deep scan",vi:"Quét chuyên sâu"})})})})},{key:"scan-interactions",label:i.jsx(ge,{placement:"right",title:ne({en:"Interaction Scan",vi:"Quét Tương Tác"}),content:i.jsx("ul",{children:ne({en:"👍💬 Count friend's reactions and comments on all of your profile's posts\n                                ❓ Also called Total interactions",vi:"👍💬 Đếm like và comment của bạn bè trên tất cả bài viết của bạn\n                                ❓ Còn gọi là Tương tác tổng"}).split("\n").map(((e,n)=>i.jsx("li",{children:e.trim()},n)))}),children:i.jsx(m,{loading:Me,icon:i.jsx("i",{className:"fa-solid fa-thumbs-up"}),onClick:gn,children:ne({en:"Scan interactions",vi:"Quét tương tác"})})})},{key:"detect-unfriend",label:i.jsx(fe,{accept:".json",title:ne({en:"Upload friends file",vi:"Tải lên file bạn bè đã lưu"}),text:ne({en:"Click or drag file to this area to upload",vi:"Click chọn hoặc kéo thả file vào đây"}),hint:ne({en:"Support only .json backup file",vi:"Chỉ hỗ trợ file .json được xuất từ trang này"}),onSubmit:hn,renderButton:({showModal:e})=>i.jsx(ge,{placement:"right",title:ne({en:"Check who unfriend you",vi:"Kiểm tra ai huỷ kết bạn với bạn"}),content:i.jsx("ul",{children:ne({en:"❓ How it work: Export friends data to file, then compare it later\n                                    ✅ FB AIO can automatically detect who unfriend you\n                                    🚨 Only use this feature if you want manual check",vi:"❓ Cách hoạt động: Lưu danh sách bạn bè ra file trước, sau đó so sánh\n                                    ✅ FB AIO sẽ tự động thông báo khi có người huỷ kết bạn\n                                    🚨 Chỉ sử dụng chức năng này nếu bạn muốn chủ động kiểm tra bằng tay"}).split("\n").map(((e,n)=>i.jsx("li",{children:e.trim()},n)))}),children:i.jsx(m,{onClick:e,icon:i.jsx("i",{className:"fa-solid fa-user-slash"}),children:ne({en:"Detect unfriend",vi:"Quét huỷ kết bạn"})})})})},{key:"detect-block-msg",label:i.jsx(ge,{placement:"right",title:ne({en:"Check who is blocking your messages",vi:"Xem ai đang chặn tin nhắn của bạn"}),content:i.jsx("ul",{children:ne({en:"✅ You still can message them\n                                ✅ They can still read your messages\n                                ❌ But facebook will never mark as read",vi:"✅ Bạn vẫn nhắn được cho họ\n                                ✅ Họ vẫn đọc được tin nhắn\n                                ❌ Nhưng facebook sẽ không cập nhật trạng thái đã xem"}).split("\n").map(((e,n)=>i.jsx("li",{children:e.trim()},n)))}),children:i.jsx(me,{title:ne(ne({en:"Check who is blocking your messages",vi:"Xem ai đang chặn tin nhắn của bạn"})),description:i.jsxs("ul",{children:[i.jsx("li",{children:ne({en:`Are you sure to check ${e?.length||Ie.length} friends?.\n `,vi:`Bạn có chắc muốn kiểm tra ${e?.length||Ie.length} bạn bè?.`})}),i.jsx("li",{children:ne({en:"You can select friends to check, instead of check all, to reduce load time.",vi:"Bạn có thể chọn bạn bè để kiểm tra, thay vì kiểm tra tất cả, để giảm thời gian xử lý."})})]}),onConfirm:()=>{(async()=>{if(Re)return;const e="AllFriends:onClickFindBlockedMessages";N(e);const n=an.current?.getDataSelected(),t=n?.length?n:Te;let s=0;const l=[];let a=!1;for(let c=0;c<t.length&&!a;c++){He(!0),se.loading({key:e,duration:0,content:i.jsxs(i.Fragment,{children:[ne({en:"Finding blocked messages...",vi:"Đang tìm bạn bè chặn tin nhắn..."})+`${l.length}/${c+1} - ${~~(c/t.length*100)}%`,i.jsx("br",{}),i.jsx("i",{children:ne({en:"Click to stop",vi:"Bấm để dừng"})})]}),onClick:()=>a=!0});const n=t[c];await ee(n.uid)||(l.push(n),an.current?.setDataSelected(l.map((e=>Te.find((n=>n.uid===e.uid))||e))),Ne((e=>x(e,(e=>{const t=e.find((e=>e.uid===n.uid));t&&!t.quickFilters?.includes(Q.BlockedMessages)&&(t.quickFilters||(t.quickFilters=[]),t.quickFilters.push(Q.BlockedMessages))})))),se.success({key:e,content:ne({en:"Found",vi:"Tìm thấy"})+" "+n.name+" ("+l.length+")"})),s++}He(!1);const r=l.length?i.jsxs(i.Fragment,{children:[ne({en:`Found ${l.length} friends blocking your messages`,vi:`Tìm thấy ${l.length} bạn bè chặn tin nhắn`}),i.jsx("br",{}),i.jsx("ul",{children:l.map((e=>i.jsx("li",{children:e.name},e.uid)))})]}):ne({en:"No one block messages you",vi:"Không ai chặn tin nhắn của bạn"});se.success({key:e,content:r}),le.open({type:"success",message:ne({en:"Scan block message success "+s+" users",vi:"Hoàn tất Quét chặn tin nhắn "+s+" người"}),description:r,duration:0})})()},okText:ne({en:"Yes",vi:"Kiểm tra"}),cancelText:ne({en:"No",vi:"Huỷ"}),children:i.jsx(m,{loading:!!Re,icon:i.jsx("i",{className:"fa-solid fa-comment-slash"}),children:ne({en:"Block messages",vi:"Chặn tin nhắn"})})})})}]},{type:"group",label:ne({en:"Similarity",vi:"Điểm chung"}),children:[{key:"birthday",label:i.jsx(ge,{placement:"right",title:ne({en:"Scan Birthday",vi:"Quét Sinh nhật"}),content:ne({en:"🎂 Scan all friend's birthday",vi:"🎂 Quét sinh nhật của tất cả bạn bè"}),children:i.jsx(m,{loading:Ke,onClick:xn,icon:i.jsx("i",{className:"fa-solid fa-birthday-cake"}),children:ne({en:"Scan Birthday",vi:"Quét sinh nhật"})})})},{key:"current-city",label:i.jsx(ge,{placement:"right",title:ne({en:"Current city",vi:"Cùng tỉnh thành"}),content:ne({en:"🏙️ Scan all friends that live in the same city as you",vi:"🏙️ Quét tất cả bạn bè đang sống cùng tỉnh thành với bạn"}),children:i.jsx(m,{loading:Xe,onClick:bn,icon:i.jsx("i",{className:"fa-solid fa-location"}),children:ne({en:"Current city",vi:"Cùng tỉnh thành"})})})},{key:"hometown",label:i.jsx(ge,{placement:"right",title:ne({en:"Hometown",vi:"Cùng quê"}),content:ne({en:"🏡 Scan all friends that has same hometown as you",vi:"🏡 Quét tất cả bạn bè cùng quê quán với bạn"}),children:i.jsx(m,{loading:ze,onClick:vn,icon:i.jsx("i",{className:"fa-solid fa-home"}),children:ne({en:"Hometown",vi:"Cùng quê"})})})},{key:"high-school",label:i.jsx(ge,{placement:"right",title:ne({en:"High school",vi:"Cùng trung học"}),content:ne({en:"📚 Scan all friends that has same high school as you",vi:"📚 Quét tất cả bạn bè cùng trường trung học với bạn"}),children:i.jsx(m,{loading:Ze,onClick:jn,icon:i.jsx("i",{className:"fa-solid fa-graduation-cap"}),children:ne({en:"High school",vi:"Cùng trung học"})})})},{key:"work",label:i.jsx(ge,{placement:"right",title:ne({en:"Scan work",vi:"Cùng công việc"}),content:ne({en:"💼 Scan all friends that work at your company",vi:"💼 Quét tất cả bạn bè cùng công việc (công ty) với bạn"}),children:i.jsx(m,{loading:nn,onClick:Fn,icon:i.jsx("i",{className:"fa-solid fa-building"}),children:ne({en:"Scan work",vi:"Cùng công việc"})})})},{key:"follower",label:i.jsx(ae,{type:"new",children:i.jsx(ge,{placement:"right",title:ne({en:"Scan followers",vi:"Người theo dõi"}),content:ne({en:"👉 Scan all your followers",vi:"👉 Quét tất người theo dõi của bạn"}),children:i.jsx(m,{loading:sn,onClick:Sn,icon:i.jsx("i",{className:"fa-solid fa-person-walking-arrow-right"}),children:ne({en:"Scan followers",vi:"Người theo dõi"})})})})}]},{type:"group",label:ne({en:"History",vi:"Lịch sử"}),children:[{key:"scan-added-time",label:i.jsx(ge,{placement:"right",title:ne({en:"Scan Added Time",vi:"Quét Thời Gian"}),content:ne({en:"🕓 Scan the time you make friend with all your friends",vi:"🕓 Quét thời gian mà bạn kết bạn với tất cả bạn bè"}),children:i.jsx(m,{loading:We,onClick:kn,icon:i.jsx("i",{className:"fa-solid fa-clock"}),children:ne({en:"Scan time",vi:"Quét thời gian"})})})},{key:"scan-removed",label:i.jsx(ge,{placement:"right",title:ne({en:"Scan Removed Friends",vi:"Quét Bạn Cũ"}),content:ne({en:"🗑️ Scan to show all your removed friends",vi:"🗑️ Quét tất cả bạn bè bạn đã huỷ kết bạn trong quá khứ"}),children:i.jsx(m,{loading:_e,onClick:yn,icon:i.jsx("i",{className:"fa-solid fa-user-minus"}),children:ne({en:"Scan removed",vi:"Quét bạn cũ"})})})}]},{key:"topid",label:i.jsx(ge,{placement:"right",title:ne({en:"TopID - Auto make friends using AI",vi:"TopID - Tự động kết bạn bằng AI"}),content:i.jsx("ul",{children:ne({vi:"👫 Kết bạn theo tiêu chí: bạn chung, giới tính\n                    🚫 Bỏ qua nếu không thỏa tiêu chí\n                    👀 Kết bạn với danh sách bạn của người khác\n                    🫶 Kết bạn với danh sách gợi ý bạn bè của Facebook\n                    🎯 Tận dụng bộ lọc có sẵn: cùng tỉnh, cùng quê, mới thêm gần đây, ...\n                    ⏳ Thêm thời gian chờ: tự động bấm thủ công trên giao diện để tránh bị ban",en:"👫 Add friends based on criteria: mutual friends, gender\n                    🚫 Skip if criteria not met\n                    👀 Add friends of others\n                    🫶 Add friends from Facebook's suggested list\n                    🎯 Filter options: same province, hometown, recently added, etc.\n                    ⏳ Include wait time: manually click to avoid getting banned"}).split("\n").map(((e,n)=>i.jsx("li",{children:e.trim()},n)))}),children:i.jsx(m,{target:"_blank",href:p.TopID.webstore,icon:i.jsx("i",{className:"fa-solid fa-robot"}),children:ne({en:"TopID",vi:"TopID"})})})}];return i.jsx(ce,{title:ne({en:"Friends manager",vi:"Quản lý bạn bè"}),titleSuffix:i.jsx(A,{style:{marginLeft:"10px",fontWeight:"bold",color:"#888"},children:Ie.length}),children:i.jsx(j,{ref:an,data:Ie,columns:Cn,size:"small",searchable:!0,selectable:!0,keyExtractor:e=>e.uid,renderTitle:e=>{const n=e?.filter?.(pe),t=e?.filter?.(be);return i.jsxs(i.Fragment,{children:[i.jsx(m,{type:"primary",icon:Ue?i.jsx("i",{className:"fa-solid fa-rotate-right fa-spin"}):i.jsx("i",{className:"fa-solid fa-rotate-right"}),onClick:cn,children:ne({en:"Reload",vi:"Tải lại"})}),i.jsx(F,{data:e.length?e:Te,options:[{key:"uid",label:".txt (friend uid)",prepareData:e=>({fileName:"friends_"+v().format("YYYY-MM-DD-HHmmss")+".txt",data:e.map((e=>e.uid)).join("\n")})},{key:"uid_name",label:".csv (friend uid+name)",prepareData:e=>({fileName:"friends_uid_name_"+v().format("YYYY-MM-DD-HHmmss")+".csv",data:k(e.map((e=>({uid:e.uid,name:e.name}))))})},{key:"json",label:".json",prepareData:e=>({fileName:"friends"+v().format("YYYY-MM-DD-HHmmss")+".json",data:JSON.stringify(e,null,4)})},{key:"csv",label:".csv",prepareData:e=>({fileName:"friends"+v().format("YYYY-MM-DD-HHmmss")+".csv",data:k(e)})}]}),i.jsx(ae,{type:"new",children:i.jsx(he,{menu:{items:Tn(e)},arrow:!0,children:i.jsx(m,{icon:i.jsx("i",{className:"fa-solid fa-toolbox"}),children:ne({en:"Tools",vi:"Công cụ"})})})}),i.jsx(te,{name:"AllFriends",text:Te.map((e=>e.name)).join(" ")}),i.jsx(E.Compact,{children:e?.length?i.jsxs(i.Fragment,{children:[i.jsx(I,{title:ne({en:`Poke ${e.length} selected friends`,vi:`Chọc ${e.length} người được chọn`}),children:i.jsx(m,{type:"default",icon:i.jsx("i",{className:"fa-solid fa-hand-point-right"}),onClick:()=>(async e=>je({key:"AllFriends:onClickPokeSelected",data:e,loadingText:e=>ne({en:"Poking...",vi:"Đang chọc..."}),successText:(e,n)=>ne({en:"Poke friends completed",vi:"Chọc bạn bè xong"}),actionFn:dn,waitTime:[500,1e3],successDescItem:e=>e.name,confirmProps:{title:ne({en:"Poke "+e.length+" users?",vi:"Chọc "+e.length+" người?"})}}))(e),children:e.length?" "+e.length:""})}),n?.length>0?i.jsx(I,{title:ne({en:`Request friend with ${n.length} selected users`,vi:`Gửi kết bạn với ${n.length} người được chọn`}),children:i.jsx(m,{icon:i.jsx("i",{className:"fa-solid fa-user-plus"}),onClick:()=>(async e=>je({key:"AllFriends:onClickAddFriendSelected",data:e,loadingText:e=>ne({en:"Sending friend request...",vi:"Đang gửi kết bạn..."}),successText:(e,n)=>ne({en:"Send friend requests completed",vi:"Gửi kết bạn xong"}),actionFn:un,waitTime:[500,1e3],successDescItem:e=>e.name,confirmProps:{title:ne({en:"Send friend request to "+e.length+" users?",vi:"Gứi kết bạn tới "+e.length+" người?"})}}))(n),children:n.length})}):null,t?.length>0?i.jsx(I,{title:ne({en:`Unfriend ${t.length} selected friends`,vi:`Huỷ kết bạn ${t.length} người được chọn`}),children:i.jsx(m,{danger:!0,icon:i.jsx("i",{className:"fa-solid fa-trash-can"}),onClick:()=>(async e=>je({key:"AllFriends:onClickUnfriendSelected",data:e,loadingText:e=>ne({en:"Unfriending...",vi:"Đang huỷ kết bạn..."}),successText:(e,n)=>ne({en:"Unfriend completed",vi:"Huỷ kết bạn xong"}),actionFn:on,waitTime:[500,1e3],successDescItem:e=>e.name,confirmProps:{title:ne({en:"Unfriend "+e.length+" users?",vi:"Huỷ kết bạn "+e.length+" người?"})}}))(t),children:t.length})}):null]}):null})]})}})})}));const{Dragger:n}=le;function fe({title:e="Upload file",text:s="Click or drag file to this area to upload",hint:l="Support for a single or bulk upload. Strictly prohibited from uploading company data or other banned files.",renderButton:a=({showModal:e})=>{},onSubmit:r=e=>{},accept:c=".json, .csv",keepFileList:o=!1}){const[d,u]=t.useState(!1),[h,g]=t.useState(!1),[m,f]=t.useState(null),[y,k]=t.useState([]);return i.jsxs(i.Fragment,{children:[a?.({showModal:()=>{u(!0)}}),i.jsx(se,{title:e,open:d,onOk:()=>{r(m),u(!1),o||(k([]),f(null))},confirmLoading:h,onCancel:()=>{u(!1)},closeIcon:null,children:i.jsxs(n,{accept:c,beforeUpload:e=>{g(!0),k([e]);const n=new FileReader;return n.onload=e=>{g(!1),f(e.target?.result??null)},n.readAsText(e),!1},maxCount:1,fileList:y,onRemove:()=>k([]),children:[i.jsx("p",{className:"ant-upload-drag-icon",children:i.jsx("i",{className:"fa-solid fa-inbox fa-3x"})}),i.jsx("p",{className:"ant-upload-text",children:s}),i.jsx("p",{className:"ant-upload-hint",children:l})]})})]})}fe.propTypes={title:ne.string,text:ne.string,hint:ne.string,renderButton:ne.func,onSubmit:ne.func,accept:ne.string,keepFileList:ne.bool};const ye={FRIEND:"Friend",POKED:"Poked",UNFRIENDED:"Unfriended",REQUESTED:"Requested friend",NEW:"New friend"},ke={[ye.POKED]:"green",[ye.UNFRIENDED]:"red",[ye.NEW]:"blue",[ye.REQUESTED]:"pink"},xe={[ye.FRIEND]:{en:"Friend",vi:"Bạn bè"},[ye.POKED]:{en:"Poked",vi:"Đã chọc"},[ye.UNFRIENDED]:{en:"Unfriended",vi:"Đã huỷ kết bạn"},[ye.REQUESTED]:{en:"Requested friend",vi:"Đã gửi kết bạn"},[ye.NEW]:{en:"New friend",vi:"Chưa kết bạn"}},pe=e=>{const n=e?.statuses||[];return!n.includes(ye.REQUESTED)&&(n.includes(ye.NEW)||n.includes(ye.UNFRIENDED)||n.includes(ye.FOLLOWER))},be=e=>{const n=e?.statuses||[];return!n.includes(ye.NEW)&&!n.includes(ye.UNFRIENDED)}}}}));
