const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./VideoViewer-BkxuwJxR.js","./index-BxqI5Gd0.js","./index-CI5G5P8X.css","./videos-D-0RTw-E.js","./MyApp-ByiHX0qM.js","./VideoWithMuted-CmrbJqUt.js","./download-DE77ekA1.js","./PostMediaset-Bzs7n8wd.js","./Collection-Ctx3dxYf.js","./index-CMDmURDF.js","./file-download-BWXnBcdo.js","./react-hotkeys-hook.esm-zPTCjevm.js","./index-CuvpyvNf.js","./index-unSpNECF.js","./index-Czy2gXJr.js","./index-Cab20LlE.js","./PurePanel-DnuVi_Xb.js","./move-12jBH-U3.js","./index-DdkLWVDV.js","./SearchOutlined-FPpClRsQ.js","./index-Dv4lTb3_.js","./Pagination-ClSPRRQ-.js","./useBreakpoint-B-6M2pGc.js","./useForceUpdate-32QtfefY.js","./responsiveObserver-DCjkyyMm.js","./index-QUk30DMk.js","./List-DIfsWYq5.js","./DownOutlined-CHXCxF_j.js","./row-BKHe0tix.js","./col-0SdR7xwF.js","./index-D3yKYGab.js","./icons-B7RXCCZ9.js","./index-BOklckFv.js"])))=>i.map(i=>d[i]);
import{b4 as Dt,br as It,r as X,b6 as n,b0 as E,bs as Z,bu as _t,bt as U,bp as Nt,bq as A,ba as u,bA as Ot,$ as lt,bc as rt,bx as P,a$ as St}from"./index-BxqI5Gd0.js";import{u as Bt,l as C,P as D,w as Et,t as x,S as y,I as z,h as Ut,i as tt,B as et,d as F,c as nt,E as w,T as m,F as At,G as Rt,j as Lt,k as Mt,H as Wt,J as qt,K as Vt,N as Xt,C as zt,n as Ht,O as Kt}from"./MyApp-ByiHX0qM.js";import{d as it}from"./dayjs.min-CPPao3O3.js";import $t from"./MyTable-DT8GHijU.js";import{E as Gt}from"./ExportButton-BM-r1sQR.js";import{u as Qt}from"./useAction-uSm2dd4C.js";import{B as st}from"./BadgeWrapper-D4NUpODJ.js";import{u as Jt}from"./useDevMode-KRwV7uqY.js";import{S as Yt}from"./Screen-CIwSBYXE.js";import{A as ot}from"./index-CPPLlTBl.js";import{C as Zt}from"./index-BZUVt21t.js";import{S as j}from"./index-QUk30DMk.js";import{P as te}from"./index-CuvpyvNf.js";import{I as ee}from"./index-DdkLWVDV.js";import{D as ne}from"./index-BX0cQoW4.js";import{T as ie}from"./index-DRnW_b6i.js";import{R as se}from"./row-BKHe0tix.js";import"./index-CMDmURDF.js";import"./Table-D7mNCoTe.js";import"./List-DIfsWYq5.js";import"./DownOutlined-CHXCxF_j.js";import"./index-BC7wWbGD.js";import"./index-Czy2gXJr.js";import"./index-unSpNECF.js";import"./index-Cab20LlE.js";import"./PurePanel-DnuVi_Xb.js";import"./move-12jBH-U3.js";import"./useBreakpoint-B-6M2pGc.js";import"./useForceUpdate-32QtfefY.js";import"./responsiveObserver-DCjkyyMm.js";import"./Pagination-ClSPRRQ-.js";import"./SearchOutlined-FPpClRsQ.js";import"./file-download-BWXnBcdo.js";import"./Collapse-gOHr5t4x.js";import"./col-0SdR7xwF.js";const oe=lt.lazy(()=>rt(()=>import("./VideoViewer-BkxuwJxR.js"),__vite__mapDeps([0,1,2,3,4,5,6]),import.meta.url)),ae=lt.lazy(()=>rt(()=>import("./PostMediaset-Bzs7n8wd.js"),__vite__mapDeps([7,1,2,8,9,10,4,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,3,31,5,32]),import.meta.url)),at=[D.EVERYONE,D.FRIENDS,D.FRIENDS_OF_FRIENDS,D.SELF];function qe({target:f}){var B,Y;const{ti:i}=Dt(),ct=It(),{message:g,notification:dt}=Bt(),{devMode:R}=Jt(),{onClickAction:L,onClickBulkActions:H}=Qt(),b=(f==null?void 0:f.id)||"",[p,O]=C("Posts.postFilters",{uid:"",privacy:D.ALL,omitPinnedPost:!1,beforeTime:null,taggedInOnly:!1,postedByOthers:null}),[M,ht]=C("Posts.maxPosts."+b,9),[I,W]=C("Posts.uid."+b,b),[v,mt]=C("Posts.profile."+b,f),[T,_]=C("Posts.posts."+b,[]),[q,K]=C("Posts.loading."+b,!1),[gt,$]=C("Posts.loadingFirstPost."+b,!1),k=(v==null?void 0:v.type)===Et.Group,ut=X.useMemo(()=>T.map((e,t)=>({...e,recent:t})),[T]);X.useEffect(()=>{x("Posts:onLoad")},[]),X.useEffect(()=>{f&&f.id!==I&&(W(f.id),setTimeout(()=>{V(f.id)},1e3))},[f,I]);const pt=async(e="",t="")=>{const o=e||I||p.uid;return k?await At({groupId:o,cursor:t}):await Rt({...p,uid:o,cursor:t})},V=async(e,t=!1)=>{var d,c;const o=t?"Posts:onClickLoadMore":"Posts:onClickReload";x(o),K(!0),g.loading({key:o,content:i({en:"Fetching posts...",vi:"Đang tải bài viết..."}),duration:0});const s=t?[...T]:[];let a=((d=s[s.length-1])==null?void 0:d.cursor)||"",l=!1,r=0;for(;r<M&&!l;){const h=await pt(e,a);if(!(h!=null&&h.length))break;r+=h.length,s.push(...h),console.log(s),g.loading({key:o,content:n.jsxs(n.Fragment,{children:[i({en:"Fetching posts...",vi:"Đang tải bài viết..."})+r+"/"+M,n.jsx("br",{}),i({en:"Click to stop",vi:"Bấm để dừng"})]}),onClick:()=>l=!0,duration:0}),_([...s]),a=(c=s[s.length-1])==null?void 0:c.cursor,await E(1e3)}s.length===0?g.info({key:o,content:i({en:"Posts not found",vi:"Không tìm thấy bài viết nào"})}):g.success({key:o,content:t?i({en:"Load more posts success: ",vi:"Tải thêm thành công: "})+r:i({en:"Fetch posts success: ",vi:"Tải bài viết thành công: "})+s.length}),K(!1)},vt=async()=>{if(!await Ht())return;const e="Posts:onClickFindFirstPost";x(e),$(!0),g.loading({key:e,content:i({en:"Finding first post...",vi:"Tìm bài viết đầu tiên..."}),duration:0});let t=St,o=Date.now();_([]);const s=await Kt({uid:I||p.uid||"",startTime:t,endTime:o,progress:(a,l)=>{console.log(a,l),g.loading({key:e,content:i({en:"Finding first post...",vi:"Tìm bài viết đầu tiên..."})+A(a),duration:0}),l!=null&&l.length&&_(r=>{const d=new Set(r.map(h=>h.id));return[...l.filter(h=>!d.has(h.id)),...r].sort((h,N)=>N.creation_time-h.creation_time)})}});s?(g.destroy(e),dt.open({key:e,type:"success",message:i({en:"Find first post done: ",vi:"Tìm bài viết đầu tiên xong: "})+A(s.creation_time),description:s.url})):g.info({key:e,content:i({en:"First post not found",vi:"Không tìm thấy bài viết đầu tiên"})}),$(!1),console.log(s)},xt=(e,t)=>{x("Posts:onChangeTime"),O(o=>P(o,s=>{const a=Array.isArray(t)?t[0]:t;s.beforeTime=new Date(a).getTime(),console.log(t,s.beforeTime)}))},yt=e=>{x("Posts:onChangePostedBy:"+e),O(t=>P(t,o=>{o.postedByOthers=e}))},ft=e=>{x("Posts:onChangePrivacy:"+e),O(t=>P(t,o=>{o.privacy=e}))},Pt=()=>{x("Posts:onToggleTaggedOnly"),O(e=>P(e,t=>{t.taggedInOnly=!t.taggedInOnly}))},jt=()=>{x("Posts:onTogglePinnedPost"),O(e=>P(e,t=>{t.omitPinnedPost=!t.omitPinnedPost}))},bt=async e=>{const t=e.target.value;if(W(t),t.trim()=="")return;x("Posts:onChangeUid:"+t);const o="Posts:onChangeUid";g.loading({key:o,content:i({en:"Finding UID..",vi:"Đang tìm UID.."}),duration:0});const s=/^\d+$/.test(t)?t:await Lt(t);g.loading({key:o,content:i({en:"Finding Profile..",vi:"Đang tìm Profile.."}),duration:0});const a=await Mt(s);W(s),mt(a),s?g.success({key:o,content:i({en:"UID found: ",vi:"Tìm thấy UID: "})+s+" - "+(a==null?void 0:a.name)}):g.error({key:o,content:i({en:"UID not found",vi:"Không tìm thấy UID"})})},S=e=>{var t,o,s,a;return U(e.title||e.summary||e.message||((t=e.content)==null?void 0:t.text)||((a=(s=(o=e.content)==null?void 0:o.attachments)==null?void 0:s.find(l=>l.title))==null?void 0:a.title),30)||A(e.creation_time)},G=async(e,t=!1)=>{const o=S(e);return L({key:"Posts:onDeletePost",id:e.id,record:e,actionFn:()=>R?E(1e3):Wt(e.story_id),loadingText:()=>i({en:"Deleting post..",vi:"Đang xoá bài viết.."})+o,successText:()=>i({en:"Post deleted: ",vi:"Xoá bài viết thành công: "})+o,failedText:()=>i({en:"Post not deleted: ",vi:"Không xoá được bài viết: "})+o,onSuccess:()=>{_(s=>P(s,a=>{const l=a.find(r=>r.story_id===e.story_id);l&&(l.deleted=!0)}))},needConfirm:t,confirmProps:{title:i({en:"Delete post?",vi:"Xoá bài viết?"}),text:o}})},Tt=async(e,t=!1)=>{const o=S(e);return L({key:"Posts:onTrashPost",id:e.id,record:e,actionFn:()=>R?E(1e3):qt(e.story_id),loadingText:()=>i({en:"Moving post to trash..",vi:"Đang chuyển bài viết vào thùng rác.."})+o,successText:()=>i({en:"Post trashed: ",vi:"Chuyển bài viết vào thùng rác thành công: "})+o,failedText:()=>i({en:"Post not trashed: ",vi:"Không chuyển được bài viết vào thùng rác: "})+o,onSuccess:()=>{_(s=>P(s,a=>{const l=a.find(r=>r.story_id===e.story_id);l&&(l.trashed=!0)}))},needConfirm:t,confirmProps:{title:i({en:"Move post to trash? (Delete after 30 days)",vi:"Chuyển vào thùng rác? (Bị xoá sau 30 ngày)"}),text:o}})},Q=async(e,t,o=!1)=>{const s=S(e),a=i(w[t]);return L({key:"Posts:onChangePostPrivacy",id:e.id,record:e,actionFn:()=>R?E(1e3):Vt({writeID:e.privacy.write_id,baseState:t}),loadingText:()=>i({en:"Changing post privacy to "+a+"..",vi:"Đang sửa quyền riêng tư sang "+a+".."})+s,successText:()=>i({en:"Change post privacy success "+a+": ",vi:"Sửa quyền riêng tư thành công "+a+": "})+s,failedText:()=>i({en:"Change post privacy failed "+a+": ",vi:"Sửa quyền riêng tư lỗi "+a+": "})+s,onSuccess:()=>{_(l=>P(l,r=>{const d=r.find(c=>c.story_id===e.story_id);d&&(d.privacy.scope=t)}))},needConfirm:o,confirmProps:{title:i({en:"Change post privacy? ",vi:"Sửa quyền riêng tư? "}),text:a+"; "+s}})},kt=async e=>H({data:e,key:"Posts:onDeleteBulk",actionFn:G,loadingText:t=>i({en:"Deleting post...",vi:"Đang xoá bài viết..."}),successText:t=>i({en:"Deleted posts",vi:"Hoàn tất xoá bài viết"}),successDescItem:t=>S(t),confirmProps:{title:i({en:"Delete "+e.length+" posts?",vi:"Xoá "+e.length+" bài viết?"}),text:i({en:"Warning: Cannot undo",vi:"Lưu ý: Không thể hoàn tác."})}}),Ct=async(e,t)=>{const o=i(w[t]);return H({data:e,key:"Posts:onChangePrivacyBulk",actionFn:s=>t!==s.privacy.scope?Q(s,t):!0,loadingText:s=>i({en:"Changing post privacy...",vi:"Đang sửa quyền riêng tư..."})+o,successText:s=>i({en:"Chaged posts privacy: ",vi:"Hoàn tất sửa quyền riêng tư: "})+o,successDescItem:s=>S(s)+": "+tt(s.id),confirmProps:{title:i({en:"Changed privacy "+e.length+" posts?",vi:"Sửa quyền riêng tư "+e.length+" bài viết?"}),text:o}})},Ft=[{title:"#",key:"recent",dataIndex:"recent",sorter:(e,t)=>e.recent-t.recent,render:(e,t,o)=>t.recent+1,width:70,align:"center"},{title:i({en:"Actor",vi:"Người đăng"}),key:"actor",dataIndex:"actor",onSearch:(e,t,o)=>{var s,a;return Z(e,((s=o==null?void 0:o.actor)==null?void 0:s.name)+((a=o==null?void 0:o.actor)==null?void 0:a.id))},render:(e,t,o)=>{var s,a,l,r,d,c;return n.jsxs(y,{style:{maxWidth:300},children:[n.jsx(ot,{shape:"square",src:n.jsx(z,{src:Ut((s=t.actor)==null?void 0:s.id),fallback:(a=t.actor)==null?void 0:a.avatar}),size:50}),n.jsxs(y,{direction:"vertical",size:0,children:[n.jsx("a",{href:((l=t.actor)==null?void 0:l.url)||tt((r=t.actor)==null?void 0:r.id),target:"_blank",children:n.jsx("b",{children:(d=t.actor)==null?void 0:d.name})}),n.jsx("span",{style:{opacity:.5},children:(c=t.actor)==null?void 0:c.id})]})]})},filters:_t(T.map(e=>e.actor),"name"),onFilter:(e,t)=>{var o;return((o=t.actor)==null?void 0:o.name)==e},width:250},{title:i({en:"Media",vi:"Ảnh/Video"}),key:"media",dataIndex:"media",render:(e,t,o)=>{var a,l;const s=(a=t.content)==null?void 0:a.attachments;if((s==null?void 0:s.length)>0){const r=((l=s==null?void 0:s[0])==null?void 0:l.total_count)||(s==null?void 0:s.length),d=r===1,c=r===1&&s[0].type==="Video";return n.jsx(et.Ribbon,{text:c?n.jsx("i",{className:"fa-solid fa-video"}):r>1?r:null,style:{display:c||r>1?"block":"none"},children:n.jsx(z,{src:s[0].thumbnail,style:{objectFit:"cover",height:150,width:210,borderRadius:10},preview:d&&!c?!0:{destroyOnClose:!0,imageRender:()=>c?n.jsx(oe,{info:{id:s[0].id}}):n.jsx(Zt,{style:{maxWidth:"90vw",maxHeight:"90vh",alignItems:"center",overflowY:"auto",overflowX:"hidden",padding:20,borderRadius:10},children:n.jsx(ae,{target:t.actor,postId:t.url})}),toolbarRender:()=>null}})})}return"-"},filters:[{text:i({en:"Video",vi:"Video"}),value:"video"},{text:i({en:"Has media",vi:"Có ảnh hoặc video"}),value:"has-media"},{text:i({en:"Multi media",vi:"Nhiều ảnh/video"}),value:"multi-media"}],onFilter:(e,t)=>{var o,s,a,l,r,d,c,h,N;if(e==="video")return((s=(o=t.content)==null?void 0:o.attachments)==null?void 0:s.length)===1&&((r=(l=(a=t.content)==null?void 0:a.attachments)==null?void 0:l[0])==null?void 0:r.type)==="Video";if(e==="has-media")return((c=(d=t.content)==null?void 0:d.attachments)==null?void 0:c.length)>0;if(e==="multi-media")return((N=(h=t.content)==null?void 0:h.attachments)==null?void 0:N.length)>1},width:200,align:"right"},{title:i({en:"Content",vi:"Nội dung"}),key:"content",dataIndex:"content",onSearch:(e,t,o)=>{var s;return[(s=o.content)==null?void 0:s.text,o.message,o.title,o.summary].filter(Boolean).some(a=>Z(e,a))},render:(e,t,o)=>{var a,l,r,d,c,h;const s=((a=t.content)==null?void 0:a.text)||((d=(r=(l=t.content)==null?void 0:l.attachments)==null?void 0:r.find(N=>N.title))==null?void 0:d.title);return n.jsxs(y,{direction:"vertical",style:{maxWidth:400},children:[t.is_pinned&&n.jsx(et,{count:i({en:"Pinned post",vi:"Bài viết Đã ghim"}),color:"green"}),((c=t.summary)==null?void 0:c.length)>0&&n.jsx(F.Text,{style:{fontStyle:"italic"},type:"secondary",children:U(t.summary,150)}),((h=t.message)==null?void 0:h.length)>0&&n.jsx(F.Text,{children:U(t.message,150)}),n.jsx(F.Text,{type:"secondary",children:U(s,150)})]})},width:"auto"},{title:i({en:"Posted time",vi:"Đăng lúc"}),key:"date",dataIndex:"date",sorter:(e,t)=>e.creation_time-t.creation_time,render:(e,t,o)=>n.jsxs(y,{direction:"vertical",size:0,children:[n.jsxs(F.Text,{children:[Nt(t.creation_time)," ",i({en:" ago",vi:"trước"})]}),n.jsx(F.Text,{type:"secondary",children:A(t.creation_time)})]})},{title:i({en:"Privacy",vi:"Quyền riêng tư"}),key:"privacy",dataIndex:"privacy",render:(e,t,o)=>{var d;if(t.deleted)return n.jsx(nt,{color:"red",children:i({en:"Deleted",vi:"Đã xoá"})});const{scope:s,description:a,allow:l,deny:r}=t.privacy||{};return n.jsxs(y,{direction:"vertical",size:0,children:[(d=t.privacy)!=null&&d.can_edit?n.jsx(j,{value:s,options:at.map(c=>({value:c,label:i(w[c])})),onSelect:c=>{console.log(c),Q(t,c,!0)}}):n.jsx(F.Text,{children:i(w[s])}),a&&((l==null?void 0:l.length)>0||(r==null?void 0:r.length)>0)&&n.jsx(F.Text,{type:"secondary",children:a})]})},filters:Object.keys(D).map(e=>({text:i(w[e])+" ("+T.filter(t=>t.privacy.scope===e).length+")",value:e})),onFilter:(e,t)=>t.privacy.scope===e,width:150},{title:i({en:"Action",vi:"Hành động"}),key:"action",dataIndex:"action",render:(e,t,o)=>n.jsxs(y.Compact,{children:[t.can_delete&&!t.deleted&&n.jsxs(n.Fragment,{children:[n.jsx(m,{title:i({en:"Delete permanently",vi:"Xoá vĩnh viễn"}),children:n.jsx(u,{danger:!0,icon:n.jsx("i",{className:"fa-solid fa-trash"}),onClick:()=>G(t,!0)})}),!t.trashed&&n.jsx(m,{title:i({en:"Move to trash",vi:"Chuyển vào thùng rác"}),children:n.jsx(u,{icon:n.jsx("i",{className:"fa-solid fa-eye-slash"}),onClick:()=>Tt(t,!0)})})]}),!t.deleted&&n.jsx(m,{title:i({en:"Open in Bulk downloader",vi:"Mở trong Tải hàng loạt"}),children:n.jsx(u,{onClick:()=>{ct("/bulk-downloader",{state:{targetId:t.url,platform:Ot.Facebook}})},icon:n.jsx("i",{className:"fa-solid fa-download"})})}),!t.deleted&&n.jsx(m,{title:i({en:"View on Facebook",vi:"Xem bài viết"}),children:n.jsx(u,{onClick:()=>window.open(t.trashed?"https://www.facebook.com/me/allactivity/?category_key=TRASH":t.url,"_blank"),icon:n.jsx("i",{className:"fa-solid fa-up-right-from-square"})})})]}),width:150}],J=n.jsx(m,{title:i({en:"Load older posts",vi:"Tải thêm bài viết cũ hơn"}),children:n.jsx(u,{loading:q,icon:n.jsx("i",{className:"fa-solid fa-play"}),onClick:()=>V(null,!0),children:i(q?{en:"Loading..",vi:"Đang tải.."}:{en:"Load more",vi:"Tải thêm"})})}),wt=e=>{var a;const t=e!=null&&e.length?e:T,o=t.filter(l=>l.can_delete&&!l.deleted),s=t.filter(l=>{var r;return((r=l.privacy)==null?void 0:r.can_edit)&&!l.deleted});return n.jsxs(n.Fragment,{children:[n.jsx(Gt,{data:e.length?e:T,options:[{key:"json",label:".json",prepareData:l=>({fileName:"posts.json",data:JSON.stringify(l,null,4)})}]}),J,n.jsxs(y.Compact,{children:[n.jsx(st,{type:"hot",children:n.jsx(m,{title:i({en:"Find first posts",vi:"Tìm bài viết đầu tiên"}),children:n.jsx(u,{loading:gt,icon:n.jsx("i",{className:"fa-solid fa-clock-rotate-left"}),onClick:vt,disabled:k,children:i({en:"First posts",vi:"Bài đầu tiên"})})})}),n.jsx(st,{type:"new",children:n.jsx(m,{title:i({en:"Search posts on Facebook",vi:"Tìm tất cả bài viết trên Facebook"}),children:n.jsx(u,{icon:n.jsx("i",{className:"fa-solid fa-arrow-up-right-from-square"}),onClick:async()=>{x("Posts:FindAllPosts"),Xt(I||p.uid||await zt()||"")},children:i({en:"All posts",vi:"Tìm bài viết"})})})})]}),n.jsxs(y.Compact,{children:[o.length>0&&n.jsx(m,{title:i({en:"Delete permanently ".concat(o.length," posts"),vi:"Xoá vĩnh viễn ".concat(o.length," bài viết")}),children:n.jsxs(u,{danger:!0,icon:n.jsx("i",{className:"fa-solid fa-trash"}),onClick:()=>kt(o),children:[i({en:"Delete",vi:"Xoá"})," ",o.length]})}),s.length>0&&n.jsx(m,{title:i({en:"Change privacy "+s.length+" posts",vi:"Sửa quyền riêng tư "+s.length+" bài viết"}),children:n.jsx(j,{value:(a=s[0].privacy)==null?void 0:a.scope,options:at.map(l=>({value:l,label:i(w[l])})),onSelect:l=>{Ct(s,l)}})})]})]})};return n.jsxs(Yt,{title:i({en:"Posts manager",vi:"Quản lý bài viết"}),titleSuffix:n.jsx(nt,{color:"error",style:{marginLeft:10},children:i({en:"🚧 Work in progress",vi:"🚧 Đang phát triển"})}),children:[n.jsxs(y.Compact,{style:{maxWidth:"90vw",marginBottom:10,overflow:"auto"},children:[n.jsx(te,{title:((Y=(B=v==null?void 0:v.type)==null?void 0:B.toUpperCase)==null?void 0:Y.call(B))||"User/Page/Group",content:v?n.jsxs(y,{children:[n.jsx(ot,{shape:"square",src:n.jsx(z,{src:v.avatar}),size:50}),n.jsx("a",{href:v.url,target:"_blank",children:n.jsx("b",{children:v.name})})]}):null,children:n.jsx(ee,{placeholder:i({en:"UID/URL",vi:"UID/URL"}),value:I,onChange:bt,style:{minWidth:100,maxWidth:150},prefix:n.jsx("i",{className:"fa-solid fa-user"})})}),n.jsx(m,{title:i({en:"Posted before time",vi:"Đăng trước ngày"}),children:n.jsx(ne,{value:p.beforeTime?it(p.beforeTime):null,onChange:xt,maxDate:it(new Date),disabled:k,style:{minWidth:100,maxWidth:150}})}),n.jsx(m,{title:i({en:"Posted by",vi:"Đăng bởi"}),children:n.jsxs(j,{style:{minWidth:120},value:p.postedByOthers,onChange:yt,disabled:k,children:[n.jsx(j.Option,{value:null,children:i({en:"All",vi:"Tất cả"})}),n.jsxs(j.Option,{value:!1,children:["📌 ",i({en:"Owner",vi:"Chính chủ"})]}),n.jsxs(j.Option,{value:!0,children:["👤 ",i({en:"Others",vi:"Người khác"})]})]})}),n.jsx(m,{title:i({en:"Privacy",vi:"Quyền riêng tư"}),children:n.jsx(j,{style:{minWidth:120},value:p.privacy,onChange:ft,disabled:k,children:Object.keys(D).map(e=>n.jsx(j.Option,{value:e,children:i(w[e])},e))})}),n.jsx(m,{title:i({en:"Tagged only",vi:"Chỉ bài viết được gắn thẻ"}),children:n.jsx(u,{icon:n.jsx("i",{className:"fa-solid fa-user-tag"}),type:p.taggedInOnly?"primary":"default",onClick:Pt,disabled:k,children:i({en:"Tagged only",vi:"Gắn thẻ"})})}),n.jsx(m,{title:i({en:"Ignore pinned post",vi:"Bỏ qua bài viết đã ghim"}),children:n.jsx(u,{icon:n.jsx("i",{className:"fa-solid fa-thumbtack"}),type:p.omitPinnedPost?"primary":"default",onClick:jt,disabled:k,children:i({en:"Pinned",vi:"Đã ghim"})})}),n.jsx(m,{title:i({en:"Max posts to load",vi:"Số bài viết tối đa muốn tải"}),children:n.jsx(ie,{placeholder:i({en:"Max posts",vi:"Số bài viết tối đa"}),value:M,onChange:e=>ht(Math.max(e||0,1)),style:{minWidth:50,maxWidth:100}})}),n.jsx(u,{type:"primary",onClick:()=>V(),icon:n.jsx("i",{className:"fa-solid fa-filter"}),loading:q,children:i({en:"Apply",vi:"Lọc"})})]}),n.jsx($t,{data:ut,columns:Ft,searchable:!0,selectable:!0,keyExtractor:e=>e.id,renderTitle:wt,footer:n.jsx(se,{align:"middle",justify:"center",style:{width:"100%"},children:J})})]})}export{qe as default};
