const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./VideoViewer-DcmjnC0M.js","./index-BoZ3qCu-.js","./index-9SBFHPtm.css","./videos-BSmWgJlG.js","./MyApp-D00-hVKM.js","./VideoWithMuted-jC92vOuE.js","./PostMediaset-TCkHQy2Q.js","./Collection-Ylhl6kq-.js","./index-DISxAyNO.js","./file-download-Cuv0I7kF.js","./index-eKalL2eG.js","./Dropdown-DBLdsESi.js","./PurePanel-BOikr8JH.js","./index-Lhz2nIJB.js","./index-AT3_9SK-.js","./index-BqA1u72M.js","./EyeOutlined-BHVey_FU.js","./SearchOutlined-jKWQFlYP.js","./index-9ab-2l-X.js","./Pagination-DzBVYRJu.js","./useBreakpoint-F7WTD34q.js","./index-D8gaebSk.js","./row-CSBfwUbZ.js","./index-BarWoG-p.js","./icons-ovUZ0Rpb.js","./index-dSRIMC1R.js"])))=>i.map(i=>d[i]);
import{aI as G,b4 as J,r as D,a$ as L,aK as t,bm as I,b0 as Y,b1 as Z,aM as x,bb as ee,$ as R,aT as A,b9 as j}from"./index-BoZ3qCu-.js";import{u as te,i as O,P as k,t as m,S as g,g as ne,a as ie,B,C as _,b as h,T as se,D as M,c as ae,j as oe,E as re}from"./MyApp-D00-hVKM.js";import{d as le}from"./dayjs.min-CpvZ0MYY.js";import{M as ce}from"./MyTable-BCaimdBe.js";import{E as de}from"./ExportButton-DgFEbkrh.js";import{u as he}from"./useAction-DZYA_UvU.js";import{A as me}from"./index-BeQiFXvH.js";import{I as F}from"./index-B9p0fwME.js";import{C as ge}from"./index-0HrQK3-l.js";import{T as p}from"./index-BqA1u72M.js";import{P as ue}from"./index-D59juA9z.js";import{R as xe}from"./row-CSBfwUbZ.js";import{I as pe}from"./index-AT3_9SK-.js";import{D as ye}from"./index-O3NslF3h.js";import{S as P}from"./index-D8gaebSk.js";import"./index-DISxAyNO.js";import"./Table-CyCG4zvu.js";import"./addEventListener-CnAWjiAc.js";import"./index-Lhz2nIJB.js";import"./index-eKalL2eG.js";import"./Dropdown-DBLdsESi.js";import"./PurePanel-BOikr8JH.js";import"./useBreakpoint-F7WTD34q.js";import"./Pagination-DzBVYRJu.js";import"./SearchOutlined-jKWQFlYP.js";import"./file-download-Cuv0I7kF.js";import"./index-CQ8Ll5oh.js";import"./EyeOutlined-BHVey_FU.js";import"./index-Bf8XDlqW.js";const ve=R.lazy(()=>A(()=>import("./VideoViewer-DcmjnC0M.js"),__vite__mapDeps([0,1,2,3,4,5]),import.meta.url)),fe=R.lazy(()=>A(()=>import("./PostMediaset-TCkHQy2Q.js"),__vite__mapDeps([6,1,2,7,8,9,4,10,11,12,13,14,15,16,17,18,19,20,21,22,23,3,24,5,25]),import.meta.url));function Qe(){const{ti:s}=G(),{message:v}=te(),E=J();he();const[u,f]=O("MyPosts.postFilters",{uid:"",privacy:k.ALL,omitPinnedPost:!1,beforeTime:null,taggedInOnly:!1,postedByOthers:null}),[y,w]=O("MyPosts.posts",[]),[N,T]=O("MyPosts.loading",!1),U=D.useMemo(()=>y.map((n,e)=>({...n,recent:e})),[y]);D.useEffect(()=>{m("Posts:onLoad")},[]);const V=async()=>{m("Posts:onClickReload"),T(!0);const n=await M(u);n.length?(w(n),console.log(n)):v.info(s({en:"No data found",vi:"Không có dữ liệu"})),T(!1)},W=async()=>{var e;m("Posts:onClickLoadMore"),T(!0);const n=await M({...u,cursor:(e=y[y.length-1])==null?void 0:e.cursor});n!=null&&n.length?(w(a=>[...a,...n]),console.log(n),v.success({content:s({en:"Load more success ",vi:"Tải thêm thành công "})+n.length})):v.info({content:s({en:"No more data",vi:"Không có dữ liệu"})}),T(!1)},S=(n,e)=>{m("Posts:onChangeTime"),f(a=>j(a,i=>{const o=Array.isArray(e)?e[0]:e;i.beforeTime=new Date(o).getTime(),console.log(e,i.beforeTime)}))},z=n=>{m("Posts:onChangePostedBy:"+n),f(e=>j(e,a=>{a.postedByOthers=n}))},X=n=>{m("Posts:onChangePrivacy:"+n),f(e=>j(e,a=>{a.privacy=n}))},$=()=>{m("Posts:onToggleTaggedOnly"),f(n=>j(n,e=>{e.taggedInOnly=!e.taggedInOnly}))},q=async n=>{const e=n.target.value;if(m("Posts:onChangeUid:"+e),f(a=>j(a,i=>{i.uid=e})),!/^\d+$/.test(e)){const a=await ae(e);f(i=>j(i,o=>{o.uid=a}))}},K=async(n,e=!0)=>{if(e&&!await oe())return!1;const a="Posts:onDeletePost";m(a);const i=a+":"+n.id;return v.loading({key:i,content:s({en:"Deleting post..",vi:"Đang xoá bài viết.."}),duration:0}),await re(n.story_id)?(v.success({key:i,content:s({en:"Post deleted",vi:"Xoá bài viết thành công"})}),w(r=>r.filter(l=>l.story_id!==n.story_id)),!0):(v.error({key:i,content:s({en:"Post not deleted",vi:"Không xoá được bài viết"})}),!1)},H=[{title:"#",key:"recent",dataIndex:"recent",sorter:(n,e)=>n.recent-e.recent,render:(n,e,a)=>e.recent+1,width:70,align:"center"},{title:s({en:"Actor",vi:"Người đăng"}),key:"actor",dataIndex:"actor",onSearch:(n,e,a)=>{var i,o;return L(n,((i=a==null?void 0:a.actor)==null?void 0:i.name)+((o=a==null?void 0:a.actor)==null?void 0:o.id))},render:(n,e,a)=>{var i,o,r,l,c,d;return t.jsxs(g,{style:{maxWidth:300},children:[t.jsx(me,{shape:"square",src:t.jsx(F,{src:ne((i=e.actor)==null?void 0:i.id),fallback:(o=e.actor)==null?void 0:o.avatar}),size:50}),t.jsxs(g,{direction:"vertical",size:0,children:[t.jsx("a",{href:((r=e.actor)==null?void 0:r.url)||ie((l=e.actor)==null?void 0:l.id),target:"_blank",children:t.jsx("b",{children:(c=e.actor)==null?void 0:c.name})}),t.jsx("span",{style:{opacity:.5},children:(d=e.actor)==null?void 0:d.id})]})]})},width:250},{title:s({en:"Media",vi:"Ảnh/Video"}),key:"media",dataIndex:"media",render:(n,e,a)=>{var c,d;const i=(c=e.content)==null?void 0:c.attachments,o=((d=i==null?void 0:i[0])==null?void 0:d.total_count)||(i==null?void 0:i.length),r=i.length===1,l=i.length===1&&i[0].type==="Video";return(i==null?void 0:i.length)>0?t.jsx(B.Ribbon,{text:l?t.jsx("i",{className:"fa-solid fa-video"}):o,style:{display:l||i.length>1?"block":"none"},children:t.jsx(F,{src:i[0].thumbnail,style:{objectFit:"cover",height:150,width:210,borderRadius:10},preview:r&&!l?!0:{destroyOnClose:!0,imageRender:()=>l?t.jsx(ve,{info:{id:i[0].id}}):t.jsx(ge,{style:{maxWidth:"90vw",maxHeight:"90vh",alignItems:"center",overflowY:"auto",overflowX:"hidden",padding:20,borderRadius:10},children:t.jsx(fe,{target:e.actor,postId:e.url})}),toolbarRender:()=>null}})}):"-"},filters:[{text:s({en:"Video",vi:"Video"}),value:"video"},{text:s({en:"Has media",vi:"Có ảnh hoặc video"}),value:"has-media"},{text:s({en:"Multi media",vi:"Nhiều ảnh/video"}),value:"multi-media"}],onFilter:(n,e)=>{var a,i,o,r,l,c,d,b,C;if(n==="video")return((i=(a=e.content)==null?void 0:a.attachments)==null?void 0:i.length)===1&&((l=(r=(o=e.content)==null?void 0:o.attachments)==null?void 0:r[0])==null?void 0:l.type)==="Video";if(n==="has-media")return((d=(c=e.content)==null?void 0:c.attachments)==null?void 0:d.length)>0;if(n==="multi-media")return((C=(b=e.content)==null?void 0:b.attachments)==null?void 0:C.length)>1},width:200,align:"right"},{title:s({en:"Content",vi:"Nội dung"}),key:"content",dataIndex:"content",onSearch:(n,e,a)=>{var i;return[(i=a.content)==null?void 0:i.text,a.message,a.title,a.summary].filter(Boolean).some(o=>L(n,o))},render:(n,e,a)=>{var o,r,l,c,d,b;const i=((o=e.content)==null?void 0:o.text)||((c=(l=(r=e.content)==null?void 0:r.attachments)==null?void 0:l.find(C=>C.title))==null?void 0:c.title);return t.jsxs(g,{direction:"vertical",style:{maxWidth:400},children:[e.is_pinned&&t.jsx(B,{count:s({en:"Pinned post",vi:"Bài viết Đã ghim"}),color:"green"}),((d=e.summary)==null?void 0:d.length)>0&&t.jsx(p.Text,{style:{fontStyle:"italic"},type:"secondary",children:I(e.summary,150)}),((b=e.message)==null?void 0:b.length)>0&&t.jsx(p.Text,{children:I(e.message,150)}),t.jsx(p.Text,{type:"secondary",children:I(i,150)})]})},width:"auto"},{title:s({en:"Posted time",vi:"Đăng lúc"}),key:"date",dataIndex:"date",sorter:(n,e)=>n.creation_time-e.creation_time,render:(n,e,a)=>t.jsxs(g,{direction:"vertical",size:0,children:[t.jsxs(p.Text,{children:[Y(new Date(e.creation_time))," ",s({en:" ago",vi:"trước"})]}),t.jsx(p.Text,{type:"secondary",children:Z(e.creation_time)})]})},{title:s({en:"Privacy",vi:"Quyền riêng tư"}),key:"privacy",dataIndex:"privacy",render:(n,e,a)=>{const i=e.privacy.scope,o=e.privacy.description;return t.jsxs(g,{direction:"vertical",size:0,children:[t.jsx(p.Text,{children:s(_[i])}),o&&i===k.CUSTOM&&t.jsx(p.Text,{type:"secondary",children:o})]})},filters:Object.keys(k).map(n=>({text:s(_[n])+" ("+y.filter(e=>e.privacy.scope===n).length+")",value:n})),onFilter:(n,e)=>e.privacy.scope===n,width:150},{title:s({en:"Action",vi:"Hành động"}),key:"action",dataIndex:"action",render:(n,e,a)=>t.jsxs(g.Compact,{children:[e.can_delete&&t.jsx(h,{title:s({en:"Delete",vi:"Xoá"}),children:t.jsx(ue,{title:s({en:"Are you sure to delete this post?",vi:"Bạn có chắc muốn xoá bài viết này?"}),onConfirm:()=>{K(e)},children:t.jsx(x,{icon:t.jsx("i",{className:"fa-solid fa-trash"})})})}),t.jsx(h,{title:s({en:"Open in Bulk downloader",vi:"Mở trong Tải hàng loạt"}),children:t.jsx(x,{onClick:()=>{E("/bulk-downloader",{state:{targetId:e.url,platform:ee.Facebook}})},icon:t.jsx("i",{className:"fa-solid fa-download"})})}),t.jsx(h,{title:s({en:"View on Facebook",vi:"Xem bài viết"}),children:t.jsx(x,{onClick:()=>window.open(e.url,"_blank"),icon:t.jsx("i",{className:"fa-solid fa-up-right-from-square"})})})]}),width:150}],Q=n=>{const e=n!=null&&n.length?n:y,a=e.filter(o=>o.can_delete),i=e.filter(o=>{var r;return(r=o.privacy)==null?void 0:r.can_edit});return t.jsxs(t.Fragment,{children:[t.jsxs(g.Compact,{children:[t.jsx(x,{loading:N,icon:t.jsx("i",{className:"fa-solid fa-play"}),onClick:W,children:s(N?{en:"Loading..",vi:"Đang tải.."}:{en:"Load more",vi:"Tải thêm"})}),t.jsx(de,{data:n.length?n:y,options:[{key:"json",label:".json",prepareData:o=>({fileName:"posts.json",data:JSON.stringify(o,null,4)})}]})]}),t.jsxs(g.Compact,{children:[a.length>0&&t.jsx(h,{title:s({en:"Coming soon",vi:"Sắp có"}),children:t.jsxs(x,{disabled:!0,danger:!0,icon:t.jsx("i",{className:"fa-solid fa-trash"}),children:[s({en:"Delete",vi:"Xoá"})," ",a.length]})}),i.length>0&&t.jsx(h,{title:s({en:"Coming soon",vi:"Sắp có"}),children:t.jsxs(x,{disabled:!0,icon:t.jsx("i",{className:"fa-solid fa-lock"}),children:[s({en:"Change privacy",vi:"Sửa quyền riêng tư"})," ",i.length]})})]})]})};return t.jsxs("div",{style:{display:"flex",flexDirection:"column",width:"100%",height:"100%"},children:[t.jsxs(xe,{align:"middle",style:{margin:"16px"},children:[t.jsx(p.Title,{level:3,style:{margin:0},children:s({en:"Posts manager",vi:"Quản lý bài viết"})}),t.jsx(se,{color:"error",style:{marginLeft:10},children:s({en:"🚧 Work in progress",vi:"🚧 Đang phát triển"})})]}),t.jsxs(g.Compact,{style:{marginBottom:10,marginLeft:5},children:[t.jsx(h,{title:s({en:"FB User",vi:"Người dùng FB"}),children:t.jsx(pe,{placeholder:s({en:"UID/URL",vi:"UID/URL"}),value:u.uid,onChange:q,style:{maxWidth:150}})}),t.jsx(h,{title:s({en:"Posted before time",vi:"Đăng trước ngày"}),children:t.jsx(ye,{value:u.beforeTime?le(u.beforeTime):null,onChange:S})}),t.jsx(h,{title:s({en:"Posted by",vi:"Đăng bởi"}),children:t.jsxs(P,{style:{minWidth:120},value:u.postedByOthers,onChange:z,children:[t.jsx(P.Option,{value:null,children:s({en:"All",vi:"Tất cả"})}),t.jsxs(P.Option,{value:!1,children:["📌 ",s({en:"Owner",vi:"Chính chủ"})]}),t.jsxs(P.Option,{value:!0,children:["👤 ",s({en:"Others",vi:"Người khác"})]})]})}),t.jsx(h,{title:s({en:"Privacy",vi:"Quyền riêng tư"}),children:t.jsx(P,{style:{minWidth:120},value:u.privacy,onChange:X,children:Object.keys(k).map(n=>t.jsx(P.Option,{value:n,children:s(_[n])},n))})}),t.jsx(h,{title:s({en:"Tagged only",vi:"Chỉ bài viết được gắn thẻ"}),children:t.jsx(x,{icon:t.jsx("i",{className:"fa-solid fa-user-tag"}),type:u.taggedInOnly?"primary":"default",onClick:$,children:s({en:"Tagged only",vi:"Gắn thẻ"})})}),t.jsx(x,{type:"primary",onClick:V,icon:t.jsx("i",{className:"fa-solid fa-filter"}),children:s({en:"Apply",vi:"Lọc"})})]}),t.jsx(ce,{data:U,columns:H,searchable:!0,selectable:!0,keyExtractor:n=>n.id,renderTitle:Q})]})}export{Qe as default};
