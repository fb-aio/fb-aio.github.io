System.register(["./index-legacy-BktKT1Ke.js","./dayjs.min-legacy-K1-AWvi-.js","./MyApp-legacy-BEYUQWl1.js","./messages-legacy-Ceanum2j.js","./file-download-legacy-EQNZ9vzg.js","./VideoWithMuted-legacy-Cy2qCROO.js","./Screen-legacy-DG13uPNL.js","./row-legacy-5UqDEonM.js","./index-legacy-xJPkzNLN.js","./index-legacy-C83AmogK.js","./index-legacy-CCxVwDJU.js","./index-legacy-Bz7hViNY.js","./index-legacy-DTT4c9Qe.js","./col-legacy-C6YknIOl.js","./TextArea-legacy-BEJV1Mhn.js","./Input-legacy-TffRtpFZ.js","./SearchOutlined-legacy-0ti3VAR1.js","./PurePanel-legacy-CYJBvqlN.js","./move-legacy-CuKW7LSN.js","./index-legacy-CmOcxWuR.js","./DownOutlined-legacy-CeLHQU-z.js","./Pagination-legacy-C9HLQMQx.js","./index-legacy-BAM9j3iV.js"],(function(e,t){"use strict";var n,i,s,r,a,l,o,d,c,g,h,u,f,m,x,y,p,j,v,w,b,k,F,M,N,P,R,T,I,C,S,L,D,H,Y,B,O,E,K;return{setters:[e=>{n=e.aU,i=e.b1,s=e.r,r=e.bn,a=e.aX,l=e.b0,o=e.aP,d=e.b8,c=e.aK,g=e.aL},e=>{h=e.d},e=>{u=e.h,f=e.u,m=e.e,x=e.m,y=e.t,p=e.c,j=e.d,v=e.S,w=e.b,b=e.s,k=e.l,F=e.a,M=e.g,N=e.I},e=>{P=e.b,R=e.a,T=e.s,I=e.f,C=e.c},e=>{S=e.f},e=>{L=e.V},e=>{D=e.S},e=>{H=e.R},e=>{Y=e.T},e=>{B=e.I},e=>{O=e.D},e=>{E=e.L},e=>{K=e.A},null,null,null,null,null,null,null,null,null,null],execute:function(){e("default",(function(){const{ti:e}=n(),t=i(),{profile:d}=u(),{message:c,notification:g}=f(),F=t.state?.threadId||"",[M,N]=m("FirstMessages.friendUrlOrUid."+F,F),[L,K]=m("FirstMessages.friendProfile."+M,null),[W,z]=m("FirstMessages.messages."+M,[]),[V,_]=m("FirstMessages.time."+F,null),[X,J]=s.useState(!1),[Z,$]=s.useState({fetchingNext:!1,fetchingPrev:!1,hasNext:!0,hasPrev:!0}),q=L?.name||t.state?.threadName||"";s.useEffect((()=>{M&&se()}),[M]),s.useEffect((()=>{Q.current?.scrollTo?.({top:x("FirstMessages.scrollY",Q.current?.scrollHeight||0)})}),[]);const G=s.useMemo((()=>{if(!W?.length)return[];const e=[];for(let t=0;t<W.length;t++){let n=W[t-1]?.sender,i=W[t]?.sender,s=W[t+1]?.sender,r="single";i==n&&i==s?r="middle":i==n?r="end":i==s&&(r="start"),e.push({...W[t],position:r})}return e}),[W]),Q=s.useRef(null),ee=s.useRef(0),te=e=>{ee.current=Q.current?.scrollHeight||0,console.log(e),z(e),b("FirstMessages.scrollY",ee.current)},ne=s.useRef({prev:!1,next:!1});s.useLayoutEffect((()=>{if(ne.current.prev&&!Z.fetchingPrev){ne.current.prev=!1;let e=Q.current?.scrollHeight||0;e>ee.current&&Q.current?.scrollTo({top:e-ee.current})}ie.current&&(ie.current=!1,Q.current?.scrollTo({top:Q.current?.scrollHeight||0}))}),[W,Z.fetchingPrev]);const ie=s.useRef(!1),se=async()=>{if(!M?.trim?.()?.length)return c.warning({content:e({en:"Please input friend's url/uid first",vi:"Vui lý nhập uid hoặc link bạn bè trước"})});y("FirstMessages:getRecentMessage");const t="getRecentMessage";try{$(r((e=>{e.hasNext=!1,e.hasPrev=!1})));let n=x("FirstMessages.friendProfile."+M);if(!n){let i;if(/\d+$/.test(M)?i=M:(c.loading({key:t,duration:0,content:e({en:"Fetching friend uid...",vi:"Đang tải uid bạn bè..."})}),i=await p(M)),!i)throw new Error("Invalid friend url");if(c.loading({key:t,duration:0,content:e({en:"Fetching friend info...",vi:"Đang tải thông tin bạn bè"})}),n=await j(i),!n)throw new Error(e({en:"Failed to fetch friend info",vi:"Không thể tải thông tin bạn bè"}))}K(n),console.log(n),c.loading({key:t,duration:0,content:e({en:"Fetching recent messages...",vi:"Đang tải tin nhắn gần nhất..."})});const i=h();_(i);const s=await P({threadId:n.uid,time:i.valueOf()});te(s),s?.length>0?c.success({key:t,content:e({en:"Fetch completed",vi:"Tải xong"})}):c.info({key:t,content:e({en:"No data to show",vi:"Không có dữ liệu"})}),ie.current=!0,$(r((e=>{e.hasNext=s.length>1,e.hasPrev=!0,e.fetchingNext=!1,e.fetchingPrev=!1})))}catch(n){c.error({key:t,content:e({en:"Failed to fetch",vi:"Lỗi tải"})+": "+n.message})}},re=async()=>{if(L){y("FirstMessages:fetchNext");try{$(r((e=>{e.fetchingNext=!0})));const e=await C({threadId:L?.uid,msgId:W?.[W.length-1]?.id,direction:"down"});console.log(e),e.length>1&&(e.shift(),te([...W,...e])),ne.current.next=!0,$(r((t=>{t.hasNext=e.length>1})))}catch(t){c.error(e({en:"Failed to fetch",vi:"Lỗi tải"})+": "+t.message)}finally{$(r((e=>{e.fetchingNext=!1})))}}},ae=async()=>{if(L){y("FirstMessages:fetchPrev");try{$(r((e=>{e.fetchingPrev=!0})));const e=await C({threadId:L?.uid,msgId:W?.[0]?.id,direction:"up"});e.length>1&&(e.pop(),te([...e,...W])),ne.current.prev=!0,$(r((t=>{t.hasPrev=e.length>1})))}catch(t){console.error(t),c.error(e({en:"Failed to fetch",vi:"Lỗi tải"})+": "+t.message)}finally{$(r((e=>{e.fetchingPrev=!1})))}}};return a.jsxs(D,{children:[a.jsxs(H,{align:"middle",justify:"start",children:[a.jsx(Y.Title,{level:3,children:q||e({en:"First messages",vi:"Tin nhắn đầu tiên"})}),L?.uid&&a.jsxs(v.Compact,{children:[a.jsx(w,{title:e({en:"Open in Messenger",vi:"Mở trong Messenger"}),children:a.jsx(l,{icon:a.jsx("i",{className:"fa-solid fa-external-link"}),href:"https://www.facebook.com/messages/t/"+L?.uid,target:"_blank"})}),a.jsx(w,{title:e({en:"Download all messages",vi:"Tải xuống tất cả tin nhắn"}),children:a.jsx(l,{icon:a.jsx("i",{className:"fa-solid fa-download"}),onClick:async()=>{if(!(await k()))return;const t="FirstMessages:downloadAllMessages";y(t);const n=t+L?.uid;c.loading({key:n,duration:0,content:e({en:"Downloading messages...",vi:"Đang tải tin nhắn..."})+q});let i=!1;const s=await R({threadId:L?.uid,checkStopFn:()=>i,progressCallback:t=>{c.loading({key:n,duration:0,content:a.jsxs(a.Fragment,{children:[e({en:"Downloading messages... ",vi:"Đang tải tin nhắn... "})+q,a.jsx("br",{}),t.length,e({en:" messages",vi:" tin nhắn"}),a.jsx("br",{}),h(t[0].time).format("YYYY-MM-DD HH:mm:ss"),a.jsx("br",{}),a.jsx("i",{children:e({en:"Click to stop",vi:"Bấm để dừng"})})]}),onClick:()=>{c.loading({key:n,duration:0,content:e({en:"Stopping...",vi:"Đang dừng..."})}),i=!0}})}});c.destroy(n),g.open({type:"success",duration:0,message:e(i?{en:"Download stopped: ",vi:"Đã dừng tải: "}:{en:"Download completed: ",vi:"Tải xong: "})+q,description:s.length+e({en:" messages",vi:" tin nhắn"})});const r=T({threadId:L?.uid||"",threadName:q,myUid:d?.uid||"",msgs:s});S(r,q+".html")},disabled:!L})})]}),a.jsxs(v.Compact,{children:[a.jsx(B,{value:M,placeholder:e({en:"Enter friend url/uid",vi:"Nhập url/uid của bạn bè"}),onChange:e=>N(e.target.value)}),a.jsx(l,{type:"primary",onClick:se,loading:X,children:a.jsx("i",{className:"fas fa-search"})})]}),a.jsxs(v.Compact,{children:[a.jsx(w,{title:e({en:"Choose any date to view messages in that day",vi:"Chọn ngày bất kỳ để xem tin nhắn trong ngày đó"}),children:a.jsx(O,{showTime:!0,value:V,minDate:h(o),onChange:(e,t)=>{console.log("Selected Time: ",e),console.log("Formatted Selected Time: ",t),_(e)},onOk:async e=>{if(!(await k())||!L)return;y("FirstMessages:onSelectDate");let t=h(e).valueOf();const n=await P({threadId:L?.uid,time:t});console.log(n),te(n),$(r((e=>{e.hasNext=!0,e.hasPrev=!0})))},disabled:!L,placeholder:e({en:"Select time",vi:"Chọn thời gian"})})}),a.jsx(w,{title:e({en:"Find first message",vi:"Tìm tin nhắn đầu tiên"}),children:a.jsx(l,{type:"primary",onClick:async()=>{if(await k()&&L){y("FirstMessages:getFirstMessage");try{J(!0);const t=await I({threadId:L?.uid,progress:e=>{_(h(e))}});if(console.log("first message",t),t?.length){let n=await C({threadId:L?.uid,msgId:t[0].id});n?.length||(n=await P({threadId:L?.uid,time:h(Number(t[0].time)).add(1,"day").valueOf()})),console.log(n),n.length?te(n):c.info(e({en:"No data to show",vi:"Không có dữ liệu"})),$(r((e=>{e.hasNext=!0,e.hasPrev=!0})))}else c.info(e({en:"No data to show",vi:"Không có dữ liệu"}))}catch(t){c.error(e({en:"Failed to fetch",vi:"Lỗi tải"})+": "+t.message),console.log(t)}finally{J(!1)}}},loading:X,disabled:!L,children:a.jsx("i",{className:"fa-solid fa-clock-rotate-left"})})})]})]}),a.jsx(v,{ref:Q,direction:"vertical",size:3,style:{width:"100%",maxHeight:"70vh",overflow:"auto",padding:12},children:G?.length?a.jsx(U,{prev:ae,next:re,hasPrev:Z.hasPrev,hasNext:Z.hasNext,loader:a.jsx(v,{style:{display:"flex",justifyContent:"center"},children:a.jsx("i",{className:"fa-solid fa-spinner fa-spin fa-lg"})}),endMessage:a.jsx(v,{style:{display:"flex",justifyContent:"center"},children:e({en:"No more message",vi:"Không còn tin nào"})}),children:a.jsx(E,{split:!1,dataSource:G,renderItem:e=>a.jsx(A,{message:e,myProfile:d})})}):null})]})}));const U=s.lazy((()=>d((()=>t.import("./InfiniteScroll-legacy-BMhu3JLe.js")),void 0,t.meta.url)));function W(e,t){if(t){if("start"===e)return{borderBottomRightRadius:4};if("middle"===e)return{borderBottomRightRadius:4,borderTopRightRadius:4};if("end"===e)return{borderTopRightRadius:4}}else{if("start"===e)return{borderBottomLeftRadius:4};if("middle"===e)return{borderBottomLeftRadius:4,borderTopLeftRadius:4};if("end"===e)return{borderTopLeftRadius:4}}return{}}function A({message:e,myProfile:t}){const n=c(g.darkMode),i=e.position,s=e.sender===t?.uid,r={display:"block",wordBreak:"break-word",padding:"8px 12px",backgroundColor:s?"#0184ff":n?"#303030":"#f0f0f0",color:n||s?"#eee":"#111",whiteSpace:"pre-line",margin:0,maxWidth:400,borderTopLeftRadius:24,borderTopRightRadius:24,borderBottomLeftRadius:24,borderBottomRightRadius:24,...W(i,s)},l="end"===i||"single"===i,o=a.jsx("div",{style:{flex:1}});return a.jsxs("div",{style:{display:"flex",alignItems:"center",width:"100%",marginBottom:l?12:2},children:[s?o:l?a.jsx("a",{href:F(e.sender),target:"_blank",children:a.jsx(K,{shape:"circle",size:40,src:M(e.sender),style:{marginRight:8}})}):a.jsx("div",{style:{width:48}}),a.jsxs(w,{title:h(e.time).format("YYYY-MM-DD HH:mm"),placement:s?"left":"right",children:[e.text&&a.jsx(Y.Paragraph,{style:r,children:e.text}),e.sticker&&a.jsx(N,{width:150,src:e.sticker}),e.attachments?.map(((e,t)=>"video"===e.type?a.jsx(L,{src:e.uri,style:{maxHeight:300,maxWidth:300}},"attachment"+t):"image"===e.type||"gif"===e.type?a.jsx(N,{src:e.uri,style:{maxHeight:300,maxWidth:300}},"attachment"+t):"file"===e.type?a.jsxs("a",{href:e.uri,target:"_blank",rel:"noreferrer",style:r,children:["File: ",e.filename]},"attachment"+t):null))]}),!s&&o]})}}}}));
