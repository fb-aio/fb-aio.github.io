const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./VideoViewer-B-hNzjuG.js","./index-439hr8Tg.js","./index-BztIVJMw.css","./videos-DWZ3J4xQ.js","./MyApp-BIj8KNpD.js","./VideoWithMuted-CuC8Lc2D.js","./PostMediaset-DkXIF9Mo.js","./Collection-B9mfTXHI.js","./index-a_avP0OZ.js","./file-download-C8AtfZz3.js","./index-BKod0XNb.js","./Dropdown-g9g4fAAw.js","./PurePanel-B_nDVzd3.js","./index-DO0NxZCZ.js","./index-BctiJ1Xa.js","./index-BkhBxJZI.js","./EyeOutlined-DI29zNGH.js","./SearchOutlined-B4uwYdxj.js","./index-BKfPenox.js","./Pagination-AxhCRyVR.js","./useBreakpoint-BHJER7NF.js","./index-CtaJcGaF.js","./row-DAAuYpuw.js","./index-DwrXrXM2.js","./icons-BuiP6M-A.js","./index-B7HwMQ7G.js"])))=>i.map(i=>d[i]);
import{aI as ie,b5 as se,r as U,aK as e,aD as oe,b0 as V,bx as L,b1 as ae,b2 as le,aM as x,bn as re,$ as q,aU as z,b9 as k}from"./index-439hr8Tg.js";import{u as ce,i as C,P as D,t as p,C as S,S as v,g as de,a as he,B as M,D as B,b as c,T as me,c as ge,j as ue,E as xe,q as pe}from"./MyApp-BIj8KNpD.js";import{d as ve}from"./dayjs.min-LMmz1pmd.js";import{T as ye,M as fe}from"./MyTable-BS_cN7mx.js";import{E as je}from"./ExportButton-35IepgAA.js";import{u as Pe}from"./useAction-ByYoRtjg.js";import{f as be}from"./tagged-DHfyoMku.js";import{A as Te}from"./index-DE6ueAgH.js";import{I as W}from"./index-C4ksYccq.js";import{C as ke}from"./index-CWcxonk6.js";import{T as y}from"./index-BkhBxJZI.js";import{P as Ce}from"./index-B5XxYCxZ.js";import{R as we}from"./row-DAAuYpuw.js";import{I as Ie}from"./index-BctiJ1Xa.js";import{D as Ne}from"./index-WVMeEKp0.js";import{S as j}from"./index-CtaJcGaF.js";import"./index-a_avP0OZ.js";import"./Table-CUtfVZxi.js";import"./addEventListener-D5t5CeR7.js";import"./index-DO0NxZCZ.js";import"./index-BKod0XNb.js";import"./Dropdown-g9g4fAAw.js";import"./PurePanel-B_nDVzd3.js";import"./useBreakpoint-BHJER7NF.js";import"./Pagination-AxhCRyVR.js";import"./SearchOutlined-B4uwYdxj.js";import"./file-download-C8AtfZz3.js";import"./index-DN-wBBBX.js";import"./index-ByYEMMWI.js";import"./EyeOutlined-DI29zNGH.js";import"./index-CKDJ2WSH.js";const Oe=q.lazy(()=>z(()=>import("./VideoViewer-B-hNzjuG.js"),__vite__mapDeps([0,1,2,3,4,5]),import.meta.url)),De=q.lazy(()=>z(()=>import("./PostMediaset-DkXIF9Mo.js"),__vite__mapDeps([6,1,2,7,8,9,4,10,11,12,13,14,15,16,17,18,19,20,21,22,23,3,24,5,25]),import.meta.url));function rt({target:h}){const{ti:i}=ie(),{message:d}=ce(),K=se();Pe();const w=(h==null?void 0:h.id)||"",[m,P]=C("Posts.postFilters",{uid:"",privacy:D.ALL,omitPinnedPost:!1,beforeTime:null,taggedInOnly:!1,postedByOthers:null}),[A,X]=C("Posts.maxPosts."+w,9),[b,F]=C("Posts.uid."+w,(h==null?void 0:h.id)||""),[f,_]=C("Posts.posts."+w,[]),[I,N]=C("Posts.loading."+w,!1),$=U.useMemo(()=>f.map((n,t)=>({...n,recent:t})),[f]);U.useEffect(()=>{p("Posts:onLoad")},[]),U.useEffect(()=>{h&&h.id!==b&&(F(h.id),setTimeout(()=>{E(h.id)},1e3))},[h,b]);const E=async n=>{var l;const t="Posts:onClickReload";p(t),N(!0),d.loading({key:t,content:i({en:"Fetching posts...",vi:"Đang tải bài viết..."}),duration:0});let o=!1;const s=[];let a="";for(;s.length<A&&!o;){const r=await S({...m,uid:n||b||m.uid,cursor:a});if(!r.length)break;s.push(...r),console.log(s),d.loading({key:t,content:e.jsxs(e.Fragment,{children:[i({en:"Fetching posts...",vi:"Đang tải bài viết..."})+s.length,e.jsx("br",{}),i({en:"Click to stop",vi:"Bấm để dừng"})]}),onClick:()=>o=!0,duration:0}),_([...s]),a=(l=s[s.length-1])==null?void 0:l.cursor,await oe(1e3)}s.length===0?d.info({key:t,content:i({en:"Posts not found",vi:"Không tìm thấy bài viết nào"})}):d.success({key:t,content:i({en:"Fetch posts success: ",vi:"Tải bài viết thành công: "})+s.length}),N(!1)},R=async()=>{var t;p("Posts:onClickLoadMore"),N(!0);const n=await S({...m,uid:b||m.uid,cursor:(t=f[f.length-1])==null?void 0:t.cursor});n!=null&&n.length?(_(o=>[...o,...n]),console.log(n),d.success({content:i({en:"Load more success ",vi:"Tải thêm thành công "})+n.length})):d.info({content:i({en:"No more data",vi:"Không có dữ liệu"})}),N(!1)},H=(n,t)=>{p("Posts:onChangeTime"),P(o=>k(o,s=>{const a=Array.isArray(t)?t[0]:t;s.beforeTime=new Date(a).getTime(),console.log(t,s.beforeTime)}))},Q=n=>{p("Posts:onChangePostedBy:"+n),P(t=>k(t,o=>{o.postedByOthers=n}))},G=n=>{p("Posts:onChangePrivacy:"+n),P(t=>k(t,o=>{o.privacy=n}))},J=()=>{p("Posts:onToggleTaggedOnly"),P(n=>k(n,t=>{t.taggedInOnly=!t.taggedInOnly}))},Y=()=>{p("Posts:onTogglePinnedPost"),P(n=>k(n,t=>{t.omitPinnedPost=!t.omitPinnedPost}))},Z=async n=>{const t=n.target.value;if(F(t),t.trim()!=""&&(p("Posts:onChangeUid:"+t),!/^\d+$/.test(t))){const o="Posts:onChangeUid";d.loading({key:o,content:i({en:"Finding UID..",vi:"Đang tìm UID.."}),duration:0});const s=await ge(t);F(s),s?d.success({key:o,content:i({en:"UID found: ",vi:"Tìm thấy UID: "})+s}):d.error({key:o,content:i({en:"UID not found",vi:"Không tìm thấy UID"})})}},ee=async(n,t=!0)=>{if(t&&!await ue())return!1;const o="Posts:onDeletePost";p(o);const s=o+":"+n.id;return d.loading({key:s,content:i({en:"Deleting post..",vi:"Đang xoá bài viết.."}),duration:0}),await xe(n.story_id)?(d.success({key:s,content:i({en:"Post deleted",vi:"Xoá bài viết thành công"})}),_(l=>l.filter(r=>r.story_id!==n.story_id)),!0):(d.error({key:s,content:i({en:"Post not deleted",vi:"Không xoá được bài viết"})}),!1)},te=[{title:"#",key:"recent",dataIndex:"recent",sorter:(n,t)=>n.recent-t.recent,render:(n,t,o)=>t.recent+1,width:70,align:"center"},{title:i({en:"Actor",vi:"Người đăng"}),key:"actor",dataIndex:"actor",onSearch:(n,t,o)=>{var s,a;return V(n,((s=o==null?void 0:o.actor)==null?void 0:s.name)+((a=o==null?void 0:o.actor)==null?void 0:a.id))},render:(n,t,o)=>{var s,a,l,r,g,u;return e.jsxs(v,{style:{maxWidth:300},children:[e.jsx(Te,{shape:"square",src:e.jsx(W,{src:de((s=t.actor)==null?void 0:s.id),fallback:(a=t.actor)==null?void 0:a.avatar}),size:50}),e.jsxs(v,{direction:"vertical",size:0,children:[e.jsx("a",{href:((l=t.actor)==null?void 0:l.url)||he((r=t.actor)==null?void 0:r.id),target:"_blank",children:e.jsx("b",{children:(g=t.actor)==null?void 0:g.name})}),e.jsx("span",{style:{opacity:.5},children:(u=t.actor)==null?void 0:u.id})]})]})},width:250},{title:i({en:"Media",vi:"Ảnh/Video"}),key:"media",dataIndex:"media",render:(n,t,o)=>{var g,u;const s=(g=t.content)==null?void 0:g.attachments,a=((u=s==null?void 0:s[0])==null?void 0:u.total_count)||(s==null?void 0:s.length),l=s.length===1,r=s.length===1&&s[0].type==="Video";return(s==null?void 0:s.length)>0?e.jsx(M.Ribbon,{text:r?e.jsx("i",{className:"fa-solid fa-video"}):a,style:{display:r||s.length>1?"block":"none"},children:e.jsx(W,{src:s[0].thumbnail,style:{objectFit:"cover",height:150,width:210,borderRadius:10},preview:l&&!r?!0:{destroyOnClose:!0,imageRender:()=>r?e.jsx(Oe,{info:{id:s[0].id}}):e.jsx(ke,{style:{maxWidth:"90vw",maxHeight:"90vh",alignItems:"center",overflowY:"auto",overflowX:"hidden",padding:20,borderRadius:10},children:e.jsx(De,{target:t.actor,postId:t.url})}),toolbarRender:()=>null}})}):"-"},filters:[{text:i({en:"Video",vi:"Video"}),value:"video"},{text:i({en:"Has media",vi:"Có ảnh hoặc video"}),value:"has-media"},{text:i({en:"Multi media",vi:"Nhiều ảnh/video"}),value:"multi-media"}],onFilter:(n,t)=>{var o,s,a,l,r,g,u,T,O;if(n==="video")return((s=(o=t.content)==null?void 0:o.attachments)==null?void 0:s.length)===1&&((r=(l=(a=t.content)==null?void 0:a.attachments)==null?void 0:l[0])==null?void 0:r.type)==="Video";if(n==="has-media")return((u=(g=t.content)==null?void 0:g.attachments)==null?void 0:u.length)>0;if(n==="multi-media")return((O=(T=t.content)==null?void 0:T.attachments)==null?void 0:O.length)>1},width:200,align:"right"},{title:i({en:"Content",vi:"Nội dung"}),key:"content",dataIndex:"content",onSearch:(n,t,o)=>{var s;return[(s=o.content)==null?void 0:s.text,o.message,o.title,o.summary].filter(Boolean).some(a=>V(n,a))},render:(n,t,o)=>{var a,l,r,g,u,T;const s=((a=t.content)==null?void 0:a.text)||((g=(r=(l=t.content)==null?void 0:l.attachments)==null?void 0:r.find(O=>O.title))==null?void 0:g.title);return e.jsxs(v,{direction:"vertical",style:{maxWidth:400},children:[t.is_pinned&&e.jsx(M,{count:i({en:"Pinned post",vi:"Bài viết Đã ghim"}),color:"green"}),((u=t.summary)==null?void 0:u.length)>0&&e.jsx(y.Text,{style:{fontStyle:"italic"},type:"secondary",children:L(t.summary,150)}),((T=t.message)==null?void 0:T.length)>0&&e.jsx(y.Text,{children:L(t.message,150)}),e.jsx(y.Text,{type:"secondary",children:L(s,150)})]})},width:"auto"},{title:i({en:"Posted time",vi:"Đăng lúc"}),key:"date",dataIndex:"date",sorter:(n,t)=>n.creation_time-t.creation_time,render:(n,t,o)=>e.jsxs(v,{direction:"vertical",size:0,children:[e.jsxs(y.Text,{children:[ae(new Date(t.creation_time))," ",i({en:" ago",vi:"trước"})]}),e.jsx(y.Text,{type:"secondary",children:le(t.creation_time)})]})},{title:i({en:"Privacy",vi:"Quyền riêng tư"}),key:"privacy",dataIndex:"privacy",render:(n,t,o)=>{const s=t.privacy.scope,a=t.privacy.description;return e.jsxs(v,{direction:"vertical",size:0,children:[e.jsx(y.Text,{children:i(B[s])}),a&&s===D.CUSTOM&&e.jsx(y.Text,{type:"secondary",children:a})]})},filters:Object.keys(D).map(n=>({text:i(B[n])+" ("+f.filter(t=>t.privacy.scope===n).length+")",value:n})),onFilter:(n,t)=>t.privacy.scope===n,width:150},{title:i({en:"Action",vi:"Hành động"}),key:"action",dataIndex:"action",render:(n,t,o)=>e.jsxs(v.Compact,{children:[t.can_delete&&e.jsx(c,{title:i({en:"Delete",vi:"Xoá"}),children:e.jsx(Ce,{title:i({en:"Are you sure to delete this post?",vi:"Bạn có chắc muốn xoá bài viết này?"}),onConfirm:()=>{ee(t)},children:e.jsx(x,{icon:e.jsx("i",{className:"fa-solid fa-trash"})})})}),e.jsx(c,{title:i({en:"Open in Bulk downloader",vi:"Mở trong Tải hàng loạt"}),children:e.jsx(x,{onClick:()=>{K("/bulk-downloader",{state:{targetId:t.url,platform:re.Facebook}})},icon:e.jsx("i",{className:"fa-solid fa-download"})})}),e.jsx(c,{title:i({en:"View on Facebook",vi:"Xem bài viết"}),children:e.jsx(x,{onClick:()=>window.open(t.url,"_blank"),icon:e.jsx("i",{className:"fa-solid fa-up-right-from-square"})})})]}),width:150}],ne=n=>{const t=n!=null&&n.length?n:f,o=t.filter(a=>a.can_delete),s=t.filter(a=>{var l;return(l=a.privacy)==null?void 0:l.can_edit});return e.jsxs(e.Fragment,{children:[e.jsxs(v.Compact,{children:[e.jsx(x,{loading:I,icon:e.jsx("i",{className:"fa-solid fa-play"}),onClick:R,children:i(I?{en:"Loading..",vi:"Đang tải.."}:{en:"Load more",vi:"Tải thêm"})}),e.jsx(je,{data:n.length?n:f,options:[{key:"json",label:".json",prepareData:a=>({fileName:"posts.json",data:JSON.stringify(a,null,4)})}]})]}),e.jsxs(v.Compact,{children:[o.length>0&&e.jsx(c,{title:i({en:"Coming soon",vi:"Sắp có"}),children:e.jsxs(x,{disabled:!0,danger:!0,icon:e.jsx("i",{className:"fa-solid fa-trash"}),children:[i({en:"Delete",vi:"Xoá"})," ",o.length]})}),s.length>0&&e.jsx(c,{title:i({en:"Coming soon",vi:"Sắp có"}),children:e.jsxs(x,{disabled:!0,icon:e.jsx("i",{className:"fa-solid fa-lock"}),children:[i({en:"Change privacy",vi:"Sửa quyền riêng tư"})," ",s.length]})})]}),e.jsx(c,{title:i({en:"Search posts on Facebook",vi:"Tìm bài viết trên Facebook"}),children:e.jsx(M,{count:i({en:"New",vi:"Mới"}),style:{color:"white"},color:"purple",children:e.jsx(x,{icon:e.jsx("i",{className:"fa-solid fa-arrow-up-right-from-square"}),onClick:async()=>{p("Posts:FindAllPosts"),be(m.uid||await pe()||"")},children:i({en:"Find all posts",vi:"Tìm bài viết"})})})})]})};return e.jsxs("div",{style:{display:"flex",flexDirection:"column",width:"100%",height:"100%"},children:[e.jsxs(we,{align:"middle",style:{margin:"16px"},children:[e.jsx(y.Title,{level:3,style:{margin:0},children:i({en:"Posts manager",vi:"Quản lý bài viết"})}),e.jsx(me,{color:"error",style:{marginLeft:10},children:i({en:"🚧 Work in progress",vi:"🚧 Đang phát triển"})})]}),e.jsxs(v.Compact,{style:{marginBottom:10,marginLeft:5},children:[e.jsx(c,{title:i({en:"FB User",vi:"Người dùng FB"}),children:e.jsx(Ie,{placeholder:i({en:"UID/URL",vi:"UID/URL"}),value:b,onChange:Z,style:{maxWidth:150}})}),e.jsx(c,{title:i({en:"Posted before time",vi:"Đăng trước ngày"}),children:e.jsx(Ne,{value:m.beforeTime?ve(m.beforeTime):null,onChange:H})}),e.jsx(c,{title:i({en:"Posted by",vi:"Đăng bởi"}),children:e.jsxs(j,{style:{minWidth:120},value:m.postedByOthers,onChange:Q,children:[e.jsx(j.Option,{value:null,children:i({en:"All",vi:"Tất cả"})}),e.jsxs(j.Option,{value:!1,children:["📌 ",i({en:"Owner",vi:"Chính chủ"})]}),e.jsxs(j.Option,{value:!0,children:["👤 ",i({en:"Others",vi:"Người khác"})]})]})}),e.jsx(c,{title:i({en:"Privacy",vi:"Quyền riêng tư"}),children:e.jsx(j,{style:{minWidth:120},value:m.privacy,onChange:G,children:Object.keys(D).map(n=>e.jsx(j.Option,{value:n,children:i(B[n])},n))})}),e.jsx(c,{title:i({en:"Tagged only",vi:"Chỉ bài viết được gắn thẻ"}),children:e.jsx(x,{icon:e.jsx("i",{className:"fa-solid fa-user-tag"}),type:m.taggedInOnly?"primary":"default",onClick:J,children:i({en:"Tagged only",vi:"Gắn thẻ"})})}),e.jsx(c,{title:i({en:"Ignore pinned post",vi:"Bỏ qua bài viết đã ghim"}),children:e.jsx(x,{icon:e.jsx("i",{className:"fa-solid fa-thumbtack"}),type:m.omitPinnedPost?"primary":"default",onClick:Y,children:i({en:"Pinned",vi:"Đã ghim"})})}),e.jsx(c,{title:i({en:"Max posts",vi:"Số bài viết tối đa"}),children:e.jsx(ye,{placeholder:i({en:"Max posts",vi:"Số bài viết tối đa"}),value:A,onChange:n=>X(Math.max(n||0,1)),style:{maxWidth:100}})}),e.jsx(x,{type:"primary",onClick:()=>E(),icon:e.jsx("i",{className:"fa-solid fa-filter"}),children:i({en:"Apply",vi:"Lọc"})})]}),e.jsx(fe,{data:$,columns:te,searchable:!0,selectable:!0,keyExtractor:n=>n.id,renderTitle:ne}),e.jsx("div",{style:{display:"flex",width:"100%",justifyContent:"center",margin:10},children:e.jsx(x,{loading:I,icon:e.jsx("i",{className:"fa-solid fa-play"}),onClick:R,children:i(I?{en:"Loading..",vi:"Đang tải.."}:{en:"Load more",vi:"Tải thêm"})})})]})}export{rt as default};
