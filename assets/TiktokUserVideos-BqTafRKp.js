import{aJ as $,r as U,ba as F,aL as i,b6 as W,b4 as A,b5 as B,cs as h,cr as M,aP as R,b3 as P,az as z,aE as _}from"./index-bxFRM2ZT.js";import{g as O,e as D}from"./index-jNEa2x2K.js";import H from"./MyTable-CTO0fsrh.js";import{u as J,e as E,S as j,b as G,T as K,t as Q,p as X}from"./MyApp-BATYfmJk.js";import{W as Y}from"./WordStatisticButton-BXrd6fdu.js";import Z from"./VideoViewer-D2Nu8olZ.js";import{I as q}from"./index-BHqIWVfZ.js";import{T as p}from"./index-GrDOeBXl.js";import{A as ee}from"./index-CDR4rqat.js";import"./core-D1x-pR9p.js";import"./videos-pNcfP1DN.js";import"./index-C41eXtlf.js";import"./responsiveObserver-CYDF-LAr.js";import"./useBreakpoint-C-xY4ZDw.js";import"./index-BFHEm6Oz.js";import"./PurePanel-BYKKUMwt.js";import"./index-DIzmVdWt.js";import"./DownOutlined-voQ6-5au.js";import"./SearchOutlined-DkytNw8z.js";import"./index-CjNv_Jg5.js";import"./EyeOutlined-C6WHeXgD.js";import"./index-DUh32NrA.js";import"./Dropdown-CTltpz8k.js";import"./Collapse-Dv4E7KdF.js";import"./index-R1ehr1UG.js";import"./index-DOkI_9_4.js";import"./Table-BJQxiWpH.js";import"./addEventListener-Bh3q7rLD.js";import"./index-CQL3qEVV.js";import"./index-DBdO1YsC.js";import"./Pagination-qLAliWIJ.js";import"./row-XzXhI7Ug.js";import"./BadgeWrapper-DoT2O4Qd.js";import"./VideoWithMuted-Cc6Ijqno.js";function V({win:a=window,fnPath:o="",params:l=[],origin:f="",timeout:s=1e4,checkAbort:g=()=>!1}){return new Promise((T,x)=>{const u=z(),m=new AbortController;let v=s;const k=setInterval(()=>{v-=1e3,(v<=0||g())&&(m.abort(),clearInterval(k),x(new Error("timeout")))},s);window.addEventListener("message",w=>{var y,t;((y=w.data)==null?void 0:y.uuid)===u&&(clearTimeout(k),T((t=w.data)==null?void 0:t.data))},{signal:m.signal,once:!0}),a.postMessage({from:"fbaio",uuid:u,origin:f,fnPath:o,params:l},"*")})}async function te(a){for(;;){let o;try{o=await V({win:a,fnPath:"window.document.readyState",timeout:1e3})}catch(l){console.log(l)}if(o==="complete"||o==="interactive")return!0;if(!a||a.closed)return!1;await _(1e3)}}const L="1.8";function Ue({target:a}){const{ti:o}=$(),{message:l,notification:f}=J(),[s,g]=E("TiktokUserVideos."+a.uniqueId,[]),[T,x]=E("TiktokUserVideos.loading",!1),u=U.useRef(null),m=F.version>=L,v=async()=>{const t="TiktokUserVideos.onLoad";Q(t),x(!0),g([]),l.loading({key:t,content:o({en:"Loading...",vi:"Đang tải..."}),duration:0});try{u.current&&u.current.close();const e=window.open("https://www.tiktok.com/@"+a.uniqueId,"_blank","width=800,height=600");e.blur(),window.focus(),u.current=e,l.loading({key:t,content:o({en:"Waiting tiktok...",vi:"Đang chờ tiktok..."}),duration:0}),await te(e);let n="",d=0,c=!1;for(;!c&&!e.closed;){l.loading({key:t,content:i.jsxs(i.Fragment,{children:[o({en:"Fetching videos...",vi:"Đang tải videos..."})+d,i.jsx("br",{}),i.jsx("i",{children:o({en:"Click to stop",vi:"Bấm để dừng"})})]}),duration:0,onClick:()=>{c=!0}});const C=O({secUid:a.secUid,count:35,cursor:n,coverFormat:"2"}),I="https://www.tiktok.com/api/post/item_list/?"+Object.entries(C).map(S=>S.join("=")).join("&"),b=await V({win:e,origin:"https://www.tiktok.com",fnPath:"fetch",params:[I,{credentials:"include"}],checkAbort:()=>c}),r=X(b);console.log(r);const N=D(r==null?void 0:r.itemList);if(!N.length||(d+=N.length,g(S=>[...S,...N]),!(r!=null&&r.hasMore)))break;n=r==null?void 0:r.cursor}e.closed?l.warning({content:o({en:"Tiktok window closed before done",vi:"Tab tiktok bị tắt trước khi chạy xong"})}):e.close(),f.open({type:"success",message:o({en:"Fetch tiktok videos completed",vi:"Tải videos tiktok xong"}),description:a.uniqueId+" - "+d+" videos",duration:0})}catch(e){console.log(e),f.open({type:"error",message:o({en:"Failed to fetch tiktok videos",vi:"Lỗi tải videos tiktok"}),description:a.uniqueId+" - "+e.message,duration:0})}finally{l.destroy(),x(!1)}},k=[{title:"Video",key:"video",render(t,e,n){return i.jsx(q,{src:e.video.cover,fallback:e.video.cover,style:{width:180,height:200,objectFit:"cover",borderRadius:10},preview:{destroyOnClose:!0,imageRender:()=>i.jsx(Z,{info:e.video,style:{maxWidth:"90vw",maxHeight:"90vh"}}),toolbarRender:()=>null}})},align:"center",width:180},{title:o({en:"Desc",vi:"Nội dung"}),dataIndex:"desc",key:"desc",render(t,e,n){return i.jsx(p.Text,{style:{maxWidth:250},children:e.desc})},width:250},{title:new Set(s.map(t=>{var e;return(e=t.music)==null?void 0:e.title})).size+o({en:" Music",vi:" Nhạc"}),dataIndex:"music",key:"music",render(t,e,n){const{id:d,author:c,cover:C,original:I,playUrl:b,title:r}=e.music||{};return d?i.jsxs(j,{direction:"vertical",size:3,children:[i.jsx(q,{src:C,style:{width:50,height:50,borderRadius:10}}),i.jsxs(p.Text,{children:[c," ",r," ",I," ",!!b&&i.jsx(p.Link,{href:b,target:"_blank",children:i.jsx("i",{className:"fa-solid fa-arrow-up-right-from-square"})})]})]}):"-"},filters:W(s.map(t=>t.music),"title"),onFilter:(t,e)=>{var n;return((n=e.music)==null?void 0:n.title)===t},filterSearch:!0,width:150},{title:o({en:"Created",vi:"Ngày đăng"}),dataIndex:"createTime",key:"createTime",render(t,e,n){return i.jsxs(j,{direction:"vertical",size:3,children:[i.jsx(p.Text,{children:A(e.createTime)}),i.jsx(p.Text,{type:"secondary",children:B(e.createTime)})]})},sorter:(t,e)=>t.createTime-e.createTime,width:120},{title:i.jsx("i",{className:"fa-solid fa-play fa-lg"}),dataIndex:"views",key:"views",render(t,e,n){return h(e.stats.playCount)},sorter:(t,e)=>t.stats.playCount-e.stats.playCount,width:70},{title:i.jsx("i",{className:"fa-solid fa-heart fa-lg"}),dataIndex:"heart",key:"heart",render(t,e,n){return h(e.stats.diggCount)},sorter:(t,e)=>t.stats.diggCount-e.stats.diggCount,width:70},{title:i.jsx("i",{className:"fa-solid fa-comment fa-lg"}),dataIndex:"comments",key:"comments",render(t,e,n){return h(e.stats.commentCount)},sorter:(t,e)=>t.stats.commentCount-e.stats.commentCount,width:70},{title:i.jsx("i",{className:"fa-solid fa-bookmark fa-lg"}),dataIndex:"collect",key:"collect",render(t,e,n){return h(e.stats.collectCount)},sorter:(t,e)=>t.stats.collectCount-e.stats.collectCount,width:70},{title:i.jsx("i",{className:"fa-solid fa-share fa-lg"}),dataIndex:"shares",key:"shares",render(t,e,n){return h(e.stats.shareCount)},sorter:(t,e)=>t.stats.shareCount-e.stats.shareCount,width:70},{title:i.jsx("i",{className:"fa-solid fa-clock fa-lg"}),dataIndex:"length",key:"length",render(t,e,n){return M(e.video.duration)},sorter:(t,e)=>t.video.duration-e.video.duration,width:70},{title:o({en:"Action",vi:"Hành động"}),dataIndex:"action",key:"action",render(t,e,n){return i.jsx(j.Compact,{children:i.jsx(G,{title:o({en:"Open on tiktok",vi:"Mở trong tiktok"}),children:i.jsx(R,{icon:i.jsx("i",{className:"fa-solid fa-arrow-up-right-from-square"}),onClick:()=>{var d;window.open("https://www.tiktok.com/@".concat((d=e.author)==null?void 0:d.uniqueId,"/video/").concat(e.video.id),"_blank")}})})})},width:90}],w=t=>i.jsxs(j,{children:[i.jsx(R,{type:"primary",icon:i.jsx("i",{className:"fa-solid fa-rotate-right"}),onClick:v,loading:T,children:o({en:"Reload",vi:"Tải lại"})}),i.jsx(Y,{text:s.map(e=>e.desc).join("\n")}),i.jsx(K,{color:"success",children:o({en:"Found ".concat(s.length," videos"),vi:"Tìm thấy ".concat(s.length," video")})})]}),y=(t,e)=>{var n,d;return[e.id,e.desc,(n=e.author)==null?void 0:n.nickname,(d=e.author)==null?void 0:d.uniqueId].find(c=>!!c&&P(t,c))};return i.jsxs("div",{style:{display:"flex",flexDirection:"column",width:"100%",height:"100%"},children:[m?null:i.jsx(ee,{message:o({vi:"Sắp có trong phiên bản v".concat(L," (Bạn đang dùng v").concat(F.version,")"),en:"Coming soon in version v".concat(L," (Current v").concat(F.version,")")}),type:"warning",showIcon:!0,style:{alignSelf:"center",marginBottom:10}}),m||s!=null&&s.length?i.jsx(H,{searchable:!0,selectable:!0,data:s,columns:k,keyExtractor:t=>t.id,onSearchRow:y,renderTitle:w}):null]})}export{Ue as default};
