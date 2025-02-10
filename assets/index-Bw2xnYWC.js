import{aC as $,au as nn,aD as en,aK as tn,r as I,aF as L,aM as t,bF as an,b5 as on,b6 as sn,aQ as y,be as N,b4 as cn,bd as F}from"./index-Cl5zvECE.js";import{o as R,p as C,f as rn,A as ln,z as hn,q as mn,e as T,t as P,S as x,g as un,a as gn,T as D,b as Y,B as dn}from"./MyApp-MWa74BZS.js";import bn from"./MyTable-C5eLwmnT.js";import{E as fn}from"./ExportButton-DLRH1WdF.js";import{d as B}from"./dayjs.min-5AodKgEI.js";import{u as kn}from"./useAction-CG3cjA8i.js";import{u as pn}from"./useDevMode-51pD0PGp.js";import{A as vn}from"./index-CeKCe0Tg.js";import{I as yn}from"./index-BX3BEfnN.js";import{R as Tn}from"./row-Ce9R-FFN.js";import{T as xn}from"./index-DGaF8Pk-.js";import{T as En}from"./index-C0UiY_4F.js";import"./index-UFZSW2T7.js";import"./index-C5ld5P44.js";import"./DownOutlined-DfRI2dhp.js";import"./TextArea-VDCbegm4.js";import"./Table-BrcFPCni.js";import"./addEventListener-DgsqOKpm.js";import"./index-CoQ_gU2f.js";import"./PurePanel-kNhfzRO_.js";import"./move-DMmDJGo1.js";import"./SearchOutlined-BfbpT0ue.js";import"./index-DcqzpBZq.js";import"./index-Ccw2Qbjw.js";import"./Dropdown-B1hBDzzJ.js";import"./useBreakpoint-CPUsOx0y.js";import"./responsiveObserver-C59psHcs.js";import"./Pagination-DpygRt3E.js";import"./index-B8klUnWi.js";import"./EyeOutlined-L-Dk1-Mb.js";import"./file-download-C-9sVNl1.js";import"./Collapse-CEMWt8jd.js";import"./index-_yERios8.js";var m=(s=>(s.RESTRICTED_LIST="RESTRICTED_LIST",s.USER="USER",s.PAGE="PAGE",s.MESSAGE="MESSAGE",s.APP_INVITE="APP_INVITE",s.EVENT_INVITE="EVENT_INVITE",s))(m||{});const S={RESTRICTED_LIST:{icon:"fa-solid fa-ban",name:{en:"Restricted",vi:"Hạn chế"},desc:{en:"Restricted list:\nWhen you add someone's profile to your Restricted list, they won't see posts on Facebook that you share only to Friends\nThey may still see things you share to Public or on a mutual friend's profile, and posts their profile is tagged in\nFacebook doesn't notify your friends when you add them to your Restricted list.",vi:"Danh sách hạn chế:\nKhi bạn thêm trang cá nhân của ai đó vào Danh sách hạn chế thì trên Facebook, họ sẽ không nhìn thấy các bài viết mà bạn chỉ chia sẻ với Bạn bè\nHọ có thể vẫn nhìn thấy nội dung bạn chia sẻ Công khai hoặc trên trang cá nhân của một người bạn chung cũng như các bài viết có gắn thẻ trang cá nhân của họ\nFacebook không thông báo cho bạn bè của bạn khi bạn thêm họ vào Danh sách hạn chế."}},USER:{icon:"fa-solid fa-user",name:{en:"User",vi:"Người dùng"},desc:{en:"Block users:\nOnce you block someone, that person can no longer see things you post on your timeline, tag you, invite you to events or groups, start a conversation with you, or add you as a friend\nNote: Does not include apps, games or groups you both participate in.",vi:"Chặn người dùng:\nKhi bạn chặn ai đó, họ sẽ không xem được nội dung bạn đăng trên dòng thời gian của mình, gắn thẻ bạn, mời bạn tham gia sự kiện hoặc nhóm, bắt đầu cuộc trò chuyện với bạn hay thêm bạn làm bạn bè\nLưu ý: Điều này không bao gồm các ứng dụng, trò chơi hay nhóm mà cả bạn và người này đều tham gia."}},PAGE:{icon:"fa-brands fa-facebook",name:{en:"Page",vi:"Trang"},desc:{en:"Block Pages:\nOnce you block a Page, that Page can no longer interact with your posts or like or reply to your comments\nYou'll be unable to post to the Page's timeline or message the Page\nIf you currently like the Page, blocking it will also unlike and unfollow it.",vi:"Chặn Trang:\nSau khi bạn chặn một Trang, Trang đó sẽ không thể tương tác với bài viết của bạn hoặc thích, phản hồi bình luận của bạn nữa\nBạn sẽ không thể đăng lên dòng thời gian của Trang hoặc nhắn tin cho Trang\nNếu bạn đang thích Trang, việc chặn Trang cũng đồng nghĩa với bỏ thích và bỏ theo dõi Trang đó."}},MESSAGE:{icon:"fa-brands fa-facebook-messenger",name:{en:"Message",vi:"Tin nhắn"},desc:{en:"Block messages:\nIf you block someone's profile on Facebook, they won't be able to contact you in Messenger either\nUnless you block someone's Facebook profile and any others they may create, they may be able to post on your timeline, tag you, and comment on your posts or comments.",vi:"Chặn tin nhắn:\nNếu bạn chặn trang cá nhân của ai đó trên Facebook, họ cũng sẽ không thể liên hệ với bạn trong Messenger\nNếu bạn không chặn trang cá nhân Facebook của ai đó và bất kỳ trang cá nhân nào khác họ có khả năng tạo, họ sẽ có thể đăng bài lên dòng thời gian của bạn, gắn thẻ bạn và bình luận về bài viết hoặc bình luận của bạn."},confirm:{vi:"\nChặn tin nhắn và cuộc gọi\nThủy sẽ không bị chặn trên Facebook.\nBạn sẽ không nhận được tin nhắn hay cuộc gọi từ Thủy. Nếu bỏ chặn, bạn sẽ không nhận được bất kỳ nội dung nào mà người đó có thể đã gửi trong thời gian chặn.\nBạn và Thủy có thể nhìn thấy, nhắn tin và gọi cho nhau trong các nhóm chung, trừ khi bạn rời khỏi những nhóm đó."}},APP_INVITE:{icon:"fa-brands fa-google-play",name:{en:"App invite",vi:"Ứng dụng"},desc:{en:"Block app invites:\nOnce you block app invites from someone's profile, you'll automatically ignore future app requests from that person's profile.",vi:"Chặn lời mời cài đặt ứng dụng:\nSau khi chặn lời mời dùng ứng dụng từ trang cá nhân của người khác, bạn sẽ tự động bỏ qua các yêu cầu ứng dụng trong tương lai từ người đó."}},EVENT_INVITE:{icon:"fa-regular fa-calendar",name:{en:"Event invite",vi:"Sự kiện"},desc:{en:"Block event invites:\nOnce you block event invites from someone’s profile, you’ll automatically ignore future event requests from that profile.",vi:"Chặn lời mời tham gia sự kiện:\nKhi bạn chặn lời mời tham gia sự kiện từ trang cá nhân của một người, bạn sẽ tự động bỏ qua những lời mời trong tương lai từ trang cá nhân đó."}}};var O=(s=>(s.MALE="MALE",s.FEMALE="FEMALE",s.NEUTER="NEUTER",s.UNKNOWN="UNKNOWN",s))(O||{});const A={MALE:{color:"blue",en:"Male",vi:"Nam"},FEMALE:{color:"pink",en:"Female",vi:"Nữ"},NEUTER:{color:"orange",en:"Neuter",vi:"Trung tính"},UNKNOWN:{color:"default",en:"Unknown",vi:"Không xác định"}};async function _n({type:s,cursor:a}){const u=a?await R({fb_api_req_friendly_name:"BlockingSettingsBlockingListPaginationQuery",variables:{count:10,cursor:a,profile_picture_size:36,id:btoa("privacy_block_setting:"+s.toString().toLocaleLowerCase())},doc_id:"5186554984768632"}):await R({fb_api_req_friendly_name:"BlockingSettingsDialogQuery",variables:{profile_picture_size:36,settingType:s},doc_id:"5425356630905390"}),h=C(u);console.log(h);const{edges:r=[],page_info:d}=$(h);return r.map(c=>{var v,b,E,f,_;return{type:s,id:(v=c==null?void 0:c.node)==null?void 0:v.id,name:(b=c==null?void 0:c.node)==null?void 0:b.name,avatar:(f=(E=c==null?void 0:c.node)==null?void 0:E.profile_picture)==null?void 0:f.uri,gender:((_=c==null?void 0:c.node)==null?void 0:_.gender)||"UNKNOWN",cursor:(c==null?void 0:c.cursor)||(d==null?void 0:d.end_cursor)}})}async function Nn(){var h;const s=await rn(ln.EAAB);if(!s)return[];const a=await nn("https://graph.facebook.com/v21.0/me/blocked?fields=name,username,fbid,block_type,block_time&limit=100&access_token="+s);hn(a);const u=C(a);return((h=u==null?void 0:u.data)==null?void 0:h.map(r=>({id:r.fbid,name:r.name,time:new Date(r.block_time),isBlockMessage:r.block_type=="messenger"})))||[]}let Bn=0;async function jn({id:s,type:a,value:u}){const h=u?"BLOCK":"UNBLOCK",r=await R({fb_api_req_friendly_name:"BlockingSettingsBlockMutation",variables:{input:{block_action:h,setting:a,target_id:s,actor_id:await mn(),client_mutation_id:++Bn},profile_picture_size:36},doc_id:"6009824239038988"}),d=C(r);return en(d,"block_status")===h}function ce(){const{devMode:s}=pn(),{ti:a}=tn(),{onClickAction:u,onClickBulkActions:h}=kn(),[r,d]=T("Blocked.type",m.RESTRICTED_LIST),[c,v]=T("Blocked.data",{}),[b,E]=T("Blocked.loading",{}),[f,_]=T("Blocking.noData",{}),[K,q]=T("Blocked.blockTime",[]);I.useEffect(()=>{P("Blocked.onLoad"),Nn().then(q)},[]);const H=n=>{P("Blocked:onChangeTab:"+n),d(n)},k=(n,e,i="")=>{E(o=>N(o,l=>{l[n+i]=e}))},G=(n,e)=>{v(i=>N(i,o=>{o[n]=e}))},V=(n,e)=>{v(i=>N(i,o=>{const l=o[n].findIndex(g=>g.id===e);return l>=0&&o[n].splice(l,1),o}))},U=(n,e)=>{_(i=>N(i,o=>{o[n]=e}))};I.useEffect(()=>{M(r)},[r]);const j=I.useRef({}),M=async(n,e=!1)=>{var l,g;if(!e&&(f[n]||j.current[n]||(l=c[n])!=null&&l.length))return;e&&U(n,!1),j.current[n]=!0,k(n,!0);const i=[];let o="";for(;;)try{o=((g=i[i.length-1])==null?void 0:g.cursor)||"";const p=await _n({type:n,cursor:o});if(!(p!=null&&p.length)){i.length||U(n,!0);break}i.push(...p),console.log(i),G(n,[...i].map((Z,X)=>({...Z,isBlocked:!0,index:X+1}))),await L(500)}catch(p){console.log(p)}finally{}j.current[n]=!1,k(n,!1)},w=(n,e=!1)=>(k(r,!0,n.id),u({record:n,id:n.id,key:"Blocked:onClickUnblock",actionFn:()=>s?L(1e3):jn({id:n.id,type:n.type,value:!1}),loadingText:()=>a({en:"Unblocking...",vi:"Đang bỏ chặn..."})+" "+n.name,successText:()=>a({en:"Unblocked",vi:"Đã bỏ chặn"})+" "+n.name,failedText:()=>a({en:"Failed to unblock",vi:"Lỗi bỏ chặn"})+" "+n.name,onSuccess:()=>{V(r,n.id)},needConfirm:e,confirmProps:{title:a({en:"Unblock ",vi:"Bỏ chặn "})+n.name+"?",text:a({en:"Warning: After 48 hours, you can block again this user.",vi:"Lưu ý: Sau 48h mới có thể chặn lại người này."})}}).finally(()=>{k(r,!1,n.id)})),W=n=>(k(r,!0),h({data:n,key:"Blocked:onClickUnblockBulk",actionFn:w,loadingText:()=>a({en:"Unblocking...",vi:"Đang bỏ chặn..."}),successText:()=>a({en:"Unblocked",vi:"Đã bỏ chặn"}),successDescItem:e=>e.name,requireVIP:!1,confirmProps:{title:a({en:"Un-Block "+n.length+" users?",vi:"Bỏ chặn "+n.length+" người?"}),text:a({en:"Warning: After 48 hours, you can block again these users.",vi:"Lưu ý: Sau 48h mới có thể chặn lại những người này."})}}).finally(()=>{k(r,!1)})),z=(n,e)=>cn(n,(e==null?void 0:e.name)+(e==null?void 0:e.id)),Q=n=>e=>t.jsxs(x,{children:[t.jsx(y,{disabled:b[n],type:"primary",icon:b[n]?t.jsx("i",{className:"fa-solid fa-rotate-right fa-spin"}):t.jsx("i",{className:"fa-solid fa-rotate-right"}),onClick:()=>M(n,!0),children:a({en:"Reload",vi:"Tải lại"})}),t.jsx(fn,{data:e!=null&&e.length?e:c[n]||[],options:[{key:"uid",label:".txt (friend uid)",prepareData:i=>({fileName:"friends_"+B().format("YYYY-MM-DD-HHmmss")+".txt",data:i.map(o=>o.id).join("\n")})},{key:"uid_name",label:".csv (uid+name)",prepareData:i=>({fileName:"blocked_uid_name_"+B().format("YYYY-MM-DD-HHmmss")+".csv",data:F(i.map(o=>({uid:o.id,name:o.name})))})},{key:"json",label:".json",prepareData:i=>({fileName:"blocked"+B().format("YYYY-MM-DD-HHmmss")+".json",data:JSON.stringify(i,null,4)})},{key:"csv",label:".csv",prepareData:i=>({fileName:"blocked"+B().format("YYYY-MM-DD-HHmmss")+".csv",data:F(i)})}]}),(e==null?void 0:e.length)>0?t.jsx(y,{danger:!0,type:"default",icon:t.jsx("i",{className:"fa-regular fa-trash-can"}),onClick:()=>W(e),children:a({en:"Unblock ",vi:"Bỏ chặn "})+e.length}):null,t.jsx(Y,{title:a({en:"Coming soon",vi:"Sắp có"}),children:t.jsx(y,{disabled:!0,icon:t.jsx("i",{className:"fa-solid fa-plus"}),children:a({en:"Import",vi:"Chặn thêm"})})})]}),J=[{title:"#",key:"index",dataIndex:"index",width:50},{title:a({en:"Name",vi:"Tên"}),key:"nane",dataIndex:"name",render:(n,e,i)=>t.jsxs(x,{style:{maxWidth:300},children:[t.jsx(vn,{shape:"square",src:t.jsx(yn,{src:e.avatar,fallback:un(e.id)}),size:50}),t.jsxs(x,{direction:"vertical",style:{marginLeft:"10px"},size:0,children:[t.jsx("a",{onClick:o=>{o.preventDefault();const l=gn(e.id);e.isBlocked&&[m.USER,m.PAGE].includes(e.type)?an(l):window.open(l,"_blank")},children:t.jsx("b",{children:e.name})}),t.jsx("span",{style:{opacity:.5},children:e.id})]})]}),width:"auto"},{title:a({en:"Gender",vi:"Giới tính"}),key:"gender",dataIndex:"gender",render:(n,e,i)=>{var o;return t.jsx(D,{color:((o=A[e.gender])==null?void 0:o.color)||"default",children:a(A[e.gender])||e.gender})},filters:Object.values(O).map(n=>{var e,i;return{text:a(A[n])+" ("+((i=(e=c[r])==null?void 0:e.filter(o=>o.gender===n))==null?void 0:i.length)+")",value:n}}),width:120},{title:a({en:"Time",vi:"Thời gian"}),key:"time",dataIndex:"time",render:(n,e,i)=>{var l;const o=(l=K.find(g=>g.id==e.id&&(g.isBlockMessage&&e.type==m.MESSAGE||!g.isBlockMessage&&[m.USER,m.PAGE,m.RESTRICTED_LIST].includes(e.type))))==null?void 0:l.time;return o?t.jsxs(x,{direction:"vertical",size:0,children:[on(o.getTime()),t.jsx("span",{style:{opacity:.5},children:sn(o)})]}):"-"},width:170},{title:a({en:"Status",vi:"Trạng thái"}),key:"isBlocked",dataIndex:"isBlocked",render:(n,e,i)=>e.isBlocked?t.jsx(D,{color:"red",children:a({en:"Blocked",vi:"Đang chặn"})}):t.jsx(D,{color:"green",children:a({en:"Unblocked",vi:"Bỏ chặn"})}),width:120},{title:a({en:"Action",vi:"Hành động"}),render:(n,e,i)=>t.jsx(y,{loading:b[r+e.id],icon:t.jsx("i",{className:"fa-solid fa-ban"}),onClick:()=>w(e,!0),children:a({en:"Unblock",vi:"Bỏ chặn"})}),width:120}];return t.jsxs(x,{direction:"vertical",style:{width:"100%"},children:[t.jsxs(Tn,{align:"middle",style:{margin:"16px",marginBottom:0},children:[t.jsx(xn.Title,{level:3,style:{margin:0,marginRight:10},children:a({en:"Blocked",vi:"Đang chặn"})}),t.jsx(y,{type:"default",icon:t.jsx("i",{className:"fa-solid fa-up-right-from-square"}),href:"https://www.facebook.com/settings/?tab=blocking",target:"_blank"})]}),t.jsx(En,{defaultActiveKey:m.RESTRICTED_LIST,activeKey:r,onChange:H,items:Object.values(m).map(n=>{var e;return{key:n,label:t.jsxs(Y,{title:t.jsx(t.Fragment,{children:a(S[n].desc).split("\n").map((i,o)=>t.jsx("p",{children:i},n+o))}),children:[b[n]?t.jsx("i",{className:"fa fa-spinner fa-spin"}):t.jsx("i",{className:S[n].icon})," ",a(S[n].name)," ",t.jsx(dn,{showZero:!0,count:f[n]?0:((e=c[n])==null?void 0:e.length)||"",color:f[n]?"gray":"purple",style:{color:"white"}})]}),children:t.jsx(bn,{columns:J,data:c[n],keyExtractor:i=>i==null?void 0:i.id,searchable:!0,selectable:!0,size:"small",onSearchRow:z,renderTitle:Q(n)})}})})]})}export{ce as default};
