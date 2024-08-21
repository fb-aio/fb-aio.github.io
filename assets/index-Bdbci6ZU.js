const __vite__fileDeps=["./MyTable-BYuDQFUQ.js","./index-1mnbKtVE.js","./index-BM_p-30O.css","./MyApp-DvK0rWAv.js","./styleChecker-FbCNsoUW.js","./addEventListener-Clq_SX9W.js","./index-C9vVbkDD.js","./PurePanel-CoqMJ9XJ.js","./TextArea-DbakhY3e.js","./index-BueiIMzi.js","./index-D_iUNpjM.js","./Dropdown-CGwcVuqg.js","./useBreakpoint-Hr-aggkJ.js","./responsiveObserver-h1Shs8cj.js","./Pagination-BCwO-mpp.js","./row-N654jCqZ.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{al as Q,am as Z,r as I,aq as t,ar as u,au as _,aJ as D,aw as T}from"./index-1mnbKtVE.js";import{a as ee,b as H,t as f,S as k,g as y,T as v,C as ne,o as te,x as L,I as $}from"./MyApp-DvK0rWAv.js";import{u as ie}from"./useForceStop-DfcLyta3.js";import{P as se}from"./index-vuHwb1ab.js";import{E as ae}from"./ExportButton-CFJOv5HN.js";import{U as h,g as le,a as re,u as oe,b as ce,d as de}from"./pages-BZsep9X4.js";import{I as U}from"./index-DpV3wnji.js";import{T as E}from"./index-DKMI8q6g.js";import{T as B}from"./index-DEkTQ-Wt.js";import{P as j}from"./index-C19dxzUt.js";import{R as he}from"./row-N654jCqZ.js";import"./file-download-DGh9FhXC.js";import"./index-D_iUNpjM.js";import"./Dropdown-CGwcVuqg.js";import"./PurePanel-CoqMJ9XJ.js";import"./addEventListener-Clq_SX9W.js";import"./styleChecker-FbCNsoUW.js";import"./TextArea-DbakhY3e.js";import"./index-iXZ9k9x8.js";import"./responsiveObserver-h1Shs8cj.js";const ge=I.lazy(()=>_(()=>import("./MyTable-BYuDQFUQ.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]),import.meta.url));function Be(){const{message:o,notification:m}=Q.useApp(),V=Z(),{ti:i}=ee(),W=ie(),[p,b]=H("Pages.data",[]),[O,S]=H("Pages.finished",!1),[F,M]=I.useState(!1);I.useEffect(()=>{O||Y(!1)},[]);const Y=async(e=!1)=>{var l;if(F&&!e)return;const n=W.start(),s=e?[]:[...p],c=new Set(s.map(d=>d.id)),a="Pages:onReload";f(a),M(!0),S(!1);try{if(!s.find(g=>g.userType===h.INVITED)){o.loading({key:a,content:i({en:"Loading invited pages...",vi:"Đang tải trang được mời..."}),duration:0});const x=(await le()).filter(w=>!c.has(w.id));x!=null&&x.length&&(s.push(...x),b([...s]))}const d=s.filter(g=>g.userType!==h.INVITED).pop();let r=e?"":d==null?void 0:d.cursor;for(;!n.value();){o.loading({key:a,content:i({en:"Loading pages...",vi:"Đang tải trang..."})+s.length,duration:0});const g=await re(r),x=g==null?void 0:g.filter(w=>!c.has(w.id));if(g.forEach(w=>c.add(w.id)),!(x!=null&&x.length))break;s.push(...x),r=(l=s==null?void 0:s[(s==null?void 0:s.length)-1])==null?void 0:l.cursor,b([...s])}o.success({key:a,content:(n.value()?i({en:"Load pages stopped ",vi:"Dừng tải trang "}):i({en:"Load pages completed ",vi:"Tải xong trang "}))+s.length}),S(!n.value())}catch(d){o.error({content:i({en:"Failed to load pages: ",vi:"Lỗi tải trang: "})+d.message})}finally{M(!1)}},K=async e=>{if(!(e!=null&&e.length))return;const n="Pages:onClickUnlikeSelectedPages",s=n+":waiting";f(n);let c=!1,a=[];for(let l=0;l<e.length&&(o.destroy(s),o.loading({key:n,content:t.jsxs(t.Fragment,{children:[i({en:"Unliking pages... ",vi:"Đang bỏ thích trang... "})+(l+1)+"/"+e.length,t.jsx("br",{}),t.jsx("i",{children:i({en:"Click to stop",vi:"Bấm để dừng"})})]}),duration:0,onClick:()=>{o.loading({key:n,content:i({en:"Stopping...",vi:"Đang dừng..."}),duration:0}),c=!0}}),await C(e[l])&&a.push(e[l]),!c);l++)if(l<e.length-1){const r=$(2e3,5e3);o.loading({key:s,content:i({en:"Sleeping "+Math.round(r/1e3)+"s",vi:"Đang đợi "+Math.round(r/1e3)+"s"}),duration:0}),await L(r)}o.destroy(n),o.destroy(s),m.success({duration:0,message:i({en:`Unliked ${a.length}/${e.length} pages`,vi:`Đã bỏ thích ${a.length}/${e.length} trang`}),description:t.jsx("div",{style:{maxHeight:200,overflowY:"auto",whiteSpace:"pre-wrap"},children:t.jsx("ol",{children:a.map(l=>t.jsx("li",{children:t.jsx("a",{target:"_blank",href:y(l.id),children:l.name})},l.id))})})})},C=async e=>{const n="Pages:onClickUnlikePage";f(n),o.loading({key:n,content:i({en:"Unliking page... "+e.name,vi:"Đang bỏ thích trang..."+e.name}),duration:0});const s=await oe(e.id);return s?(m.destroy(n),o.success({key:n,content:i({en:"Unliked page "+e.name,vi:"Đã bỏ thích trang "+e.name})}),b(c=>D(c,a=>{const l=a.findIndex(d=>d.id==e.id);return a[l].userType=h.UNLIKED,a}))):(o.destroy(n),m.error({key:n,message:i({en:"Failed to unlike page",vi:"Lỗi bỏ thích trang"}),description:e.name,duration:0,btn:t.jsxs(k,{children:[t.jsx(u,{type:"default",onClick:()=>C(e),children:i({en:"Retry",vi:"Thử lại"})}),t.jsx(u,{type:"primary",onClick:()=>window.open(y(e.id)),children:i({en:"View page",vi:"Xem trang"})})]})})),s},X=async e=>{if(!(e!=null&&e.length))return;const n="Pages:onClickUnfollowSelectedPages",s=n+":waiting";f(n);let c=!1,a=[];for(let l=0;l<e.length&&(o.destroy(s),o.loading({key:n,content:t.jsxs(t.Fragment,{children:[i({en:"Unfollowing pages... ",vi:"Đang bỏ theo dõi trang... "})+(l+1)+"/"+e.length,t.jsx("br",{}),t.jsx("i",{children:i({en:"Click to stop",vi:"Bấm để dừng"})})]}),duration:0,onClick:()=>{o.loading({key:n,content:i({en:"Stopping...",vi:"Đang dừng..."}),duration:0}),c=!0}}),await N(e[l])&&a.push(e[l]),!c);l++)if(l<e.length-1){const r=$(2e3,5e3);o.loading({key:s,content:i({en:"Sleeping "+Math.round(r/1e3)+"s",vi:"Đang đợi "+Math.round(r/1e3)+"s"}),duration:0}),await L(r)}o.destroy(n),o.destroy(s),m.success({duration:0,message:i({en:`Unfollowed ${a.length}/${e.length} pages`,vi:`Đã bỏ theo dõi ${a.length}/${e.length} trang`}),description:t.jsx("div",{style:{maxHeight:200,overflowY:"auto",whiteSpace:"pre-wrap"},children:t.jsx("ol",{children:a.map(l=>t.jsx("li",{children:t.jsx("a",{target:"_blank",href:y(l.id),children:l.name})},l.id))})})})},N=async e=>{const n="Pages:onClickUnfollowPage";f(n),o.loading({key:n,content:i({en:"Unfollowing page... "+e.name,vi:"Đang bỏ theo dõi trang..."+e.name}),duration:0});const s=await ce(e.id);return s?(m.destroy(n),o.success({key:n,content:i({en:"Unfollowed page "+e.name,vi:"Đã bỏ theo dõi trang "+e.name})}),b(c=>D(c,a=>{const l=a.findIndex(d=>d.id==e.id);return a[l].userType=h.UNFOLLOWED,a}))):(o.destroy(n),m.error({key:n,message:i({en:"Failed to unfollow page",vi:"Lỗi bỏ theo dõi trang"}),description:e.name,duration:0,btn:t.jsxs(k,{children:[t.jsx(u,{type:"default",onClick:()=>N(e),children:i({en:"Retry",vi:"Thử lại"})}),t.jsx(u,{type:"primary",onClick:()=>window.open(y(e.id)),children:i({en:"View page",vi:"Xem trang"})})]})})),s},z=async e=>{if(!(e!=null&&e.length))return;const n="Pages:onClickDeclineSelectedInvites",s=n+":waiting";f(n);let c=!1,a=[];for(let l=0;l<e.length&&(o.destroy(s),o.loading({key:n,content:t.jsxs(t.Fragment,{children:[i({en:"Removing invite... ",vi:"Đang từ chối... "})+(l+1)+"/"+e.length,t.jsx("br",{}),t.jsx("i",{children:i({en:"Click to stop",vi:"Bấm để dừng"})})]}),duration:0,onClick:()=>{o.loading({key:n,content:i({en:"Stopping...",vi:"Đang dừng..."}),duration:0}),c=!0}}),await P(e[l])&&a.push(e[l]),!c);l++)if(l<e.length-1){const r=$(2e3,5e3);o.loading({key:s,content:i({en:"Sleeping "+Math.round(r/1e3)+"s",vi:"Đang đợi "+Math.round(r/1e3)+"s"}),duration:0}),await L(r)}o.destroy(n),o.destroy(s),m.success({duration:0,message:i({en:`Declined ${a.length}/${e.length} invites`,vi:`Đã từ chối ${a.length}/${e.length} lời mời`}),description:t.jsx("div",{style:{maxHeight:200,overflowY:"auto",whiteSpace:"pre-wrap"},children:t.jsx("ol",{children:a.map(l=>t.jsx("li",{children:t.jsx("a",{target:"_blank",href:y(l.id),children:l.name})},l.id))})})})},P=async e=>{const n="Pages:onClickDeclineInvite";f(n),o.loading({key:n,content:i({en:"Declining invite... "+e.name,vi:"Đang từ chối lời mời..."+e.name}),duration:0});const s=await de(e.inviteId);return s?(m.destroy(n),o.success({key:n,content:i({en:"Removed invite "+e.name,vi:"Đã từ chối lời mời "+e.name})}),b(c=>D(c,a=>{const l=a.findIndex(d=>d.id==e.id);return a[l].userType=h.DECLINED,a}))):(o.destroy(n),m.error({key:n,message:i({en:"Failed to remove invite",vi:"Lỗi từ chối lời mời"}),description:e.name,duration:0,btn:t.jsxs(k,{children:[t.jsx(u,{type:"default",onClick:()=>P(e),children:i({en:"Retry",vi:"Thử lại"})}),t.jsx(u,{type:"primary",onClick:()=>window.open(y(e.id)),children:i({en:"View page",vi:"Xem trang"})})]})})),s},q=e=>{V("/bulk-downloader",{state:{targetId:e.id,platform:se.Facebook}})},J=e=>{var l,d;const n=e!=null&&e.length?[...e]:[...p],s=((l=n==null?void 0:n.map(r=>p.find(g=>g.id===r.id)))==null?void 0:l.filter(r=>(r==null?void 0:r.userType)===h.LIKED||(r==null?void 0:r.userType)===h.ADMIN))||[],c=(s==null?void 0:s.filter(r=>r==null?void 0:r.canLike))||[],a=((d=n==null?void 0:n.map(r=>p.find(g=>g.id===r.id)))==null?void 0:d.filter(r=>(r==null?void 0:r.userType)===h.INVITED))||[];return t.jsxs(t.Fragment,{children:[t.jsx(v,{color:"red",title:i({en:"WARNING: Reload many times may cause temporarily blocked by facebook",vi:"LƯU Ý: Tải lại nhiều lần có thể bị facebook chặn tạm thời"}),children:t.jsx(u,{type:"primary",icon:F?t.jsx("i",{className:"fa-solid fa-rotate-right fa-spin"}):t.jsx("i",{className:"fa-solid fa-rotate-right"}),onClick:()=>Y(!0),children:i({en:"Reload",vi:"Tải lại"})})}),t.jsx(ae,{data:n,options:[{key:"id",label:".txt (page id)",prepareData:r=>({fileName:"your_pages_id"+T().format("YYYY-MM-DD-HHmmss")+".txt",data:r==null?void 0:r.map(g=>g.id).join(`
`)})},{key:"json",label:".json",prepareData:r=>({fileName:"your_pages"+T().format("YYYY-MM-DD-HHmmss")+".json",data:JSON.stringify(r,null,4)})},{key:"csv",label:".csv",prepareData:r=>({fileName:"your_pages"+T().format("YYYY-MM-DD-HHmmss")+".csv",data:te(r)})}]}),t.jsx(v,{title:i({en:`Unlike ${c.length} selected pages`,vi:`Bỏ thích ${c.length} trang được chọn`}),children:t.jsx(j,{title:i({en:`Unlike ${c.length} pages`,vi:`Bỏ thích ${c.length} trang`}),description:i({en:`Are your sure want to unlike ${c.length} pages?`,vi:`Bản có chãc muốn bỏ thích ${c.length} trang?`}),onConfirm:()=>K(c),okText:i({en:"Unlike pages",vi:"Bỏ thích trang"}),cancelText:i({en:"No",vi:"Huỷ"}),children:t.jsx(u,{danger:!0,type:"primary",disabled:c.length<=0,icon:t.jsx("i",{className:"fa-solid fa-thumbs-down"}),children:c.length})})}),t.jsx(v,{title:i({en:`Unfollow ${s.length} selected pages`,vi:`Bỏ theo dõi ${s.length} trang được chọn`}),children:t.jsx(j,{title:i({en:`Unfollow ${s.length} pages`,vi:`Bỏ theo dõi ${s.length} trang`}),description:i({en:`Are your sure want to unfollow ${s.length} pages?`,vi:`Bản có chãc muốn bỏ theo dõi ${s.length} trang?`}),onConfirm:()=>X(s),okText:i({en:"Yes",vi:"Có"}),cancelText:i({en:"No",vi:"Huỷ"}),children:t.jsx(u,{danger:!0,type:"primary",disabled:s.length<=0,icon:t.jsx("i",{className:"fa-solid fa-eye-slash"}),children:s.length})})}),a.length>0&&t.jsx(v,{title:i({en:`Decline ${a.length} selected invites`,vi:`Từ chối ${a.length} lời mời được chọn`}),children:t.jsx(j,{title:i({en:`Decline ${a.length} invites`,vi:`Từ chối ${a.length} lời mời`}),description:i({en:`Are your sure want to decline ${a.length} invites?`,vi:`Bản có chãc muốn từ chối ${a.length} lời mời?`}),onConfirm:()=>z(a),okText:i({en:"Yes",vi:"Có"}),cancelText:i({en:"No",vi:"Huỷ"}),children:t.jsx(u,{danger:!0,type:"primary",disabled:a.length<=0,icon:t.jsx("i",{className:"fa-solid fa-xmark"}),children:a.length})})}),t.jsx(u,{icon:t.jsx("i",{className:"fa-solid fa-external-link"}),onClick:()=>window.open("https://www.facebook.com/pages/?category=liked","_blank"),children:i({en:"View on Facebook",vi:"Xem trên Facebook"})})]})},A=e=>{switch(e){case h.ADMIN:return{color:"success",text:i({en:"Admin",vi:"Admin"})};case h.LIKED:return{color:"default",text:i({en:"Liked",vi:"Đã thích"})};case h.INVITED:return{color:"warning",text:i({en:"Invited",vi:"Lời mời"})};case h.DECLINED:return{color:"error",text:i({en:"Declined",vi:"Từ chối"})};case h.UNLIKED:return{color:"error",text:i({en:"Unliked",vi:"Bỏ thích"})};case h.UNFOLLOWED:return{color:"error",text:i({en:"Unfollowed",vi:"Bỏ theo dõi"})};default:return{color:"default",text:"?"}}},R=I.useMemo(()=>Array.from(p.map(e=>e.category).reduce((e,n)=>{let s=e.get(n)||0;return e.set(n,++s)},new Map).entries()).sort((e,n)=>n[1]-e[1]).map(([e,n])=>({text:e+" ("+n+")",value:e})),[p]),G=[{title:i({en:"Image",vi:"Ảnh"}),key:"image",dataIndex:"image",render:(e,n,s)=>t.jsx(U,{src:n.image,width:50,height:50,style:{objectFit:"contain",borderRadius:5}})},{title:i({en:"Page",vi:"Trang"}),key:"name",dataIndex:"name",render:(e,n,s)=>t.jsxs(k,{direction:"vertical",size:0,style:{maxWidth:300},children:[t.jsx(E.Link,{href:n.url,target:"_blank",children:t.jsx("b",{children:n.name||"???"})}),t.jsx("span",{style:{opacity:.7},children:n.id})]})},{title:i({en:"Category",vi:"Danh mục"})+" ("+R.length+")",key:"category",dataIndex:"category",filters:R,onFilter:(e,n)=>n.category==e,filterSearch:!0},{title:i({en:"Type",vi:"Loại"}),key:"type",dataIndex:"userType",render:(e,n,s)=>{const{color:c,text:a}=A(n.userType);return n.inviterId?t.jsxs(k,{children:[t.jsx(B,{color:c,children:a}),t.jsx(U,{src:n.inviterAvatar,width:40,height:40,style:{borderRadius:5}}),t.jsx(E.Link,{href:y(n.inviterId),target:"_blank",children:n.inviterName})]}):t.jsx(B,{color:c,children:a})},filters:Object.values(h).map(e=>{const{text:n}=A(e);return{text:n+" ("+p.filter(s=>s.userType==e).length+")",value:e}}),onFilter:(e,n)=>n.userType==e,align:"left"},{title:i({en:"Action",vi:"Hành động"}),key:"action",render:(e,n,s)=>t.jsxs(k.Compact,{style:{minWidth:30},children:[n.userType===h.LIKED||n.userType===h.ADMIN?t.jsxs(t.Fragment,{children:[n.canLike?t.jsx(v,{title:i({en:"Unlike page",vi:"Bỏ thích"}),children:t.jsx(j,{title:i({en:"Unlike page",vi:"Bỏ thích"}),description:i({en:"Are you sure want to unlike this page?",vi:"Bạn có chắc muốn bỏ thích trang này?"}),onConfirm:()=>C(n),okText:i({en:"Unlike",vi:"Bỏ thích"}),cancelText:i({en:"No",vi:"Huỷ"}),children:t.jsx(u,{icon:t.jsx("i",{className:"fa-solid fa-thumbs-down"})})})}):null,t.jsx(v,{title:i({en:"Unfollow page",vi:"Bỏ theo dõi"}),children:t.jsx(j,{title:i({en:"Unfollow page",vi:"Bỏ theo dõi"}),description:i({en:"Are you sure want to unfollow this page?",vi:"Bạn có chắc muốn bỏ theo dõi trang này?"}),onConfirm:()=>N(n),okText:i({en:"Unfollow",vi:"Bỏ theo dõi"}),cancelText:i({en:"No",vi:"Huỷ"}),children:t.jsx(u,{icon:t.jsx("i",{className:"fa-solid fa-eye-slash"})})})})]}):null,n.userType===h.INVITED?t.jsx(v,{title:i({en:"Decline invite",vi:"Từ chối"}),children:t.jsx(j,{title:i({en:"Decline invite",vi:"Từ chối"}),description:i({en:"Decline this invite?",vi:"Từ chối lời mời này?"}),onConfirm:()=>P(n),okText:i({en:"Yes",vi:"Từ chối"}),cancelText:i({en:"No",vi:"Huỷ"}),children:t.jsx(u,{danger:!0,type:"primary",icon:t.jsx("i",{className:"fa-solid fa-xmark"})})})}):null,t.jsx(v,{title:i({en:"Bulk Downloader",vi:"Tải hàng loạt"}),children:t.jsx(u,{type:"default",onClick:()=>q(n),icon:t.jsx("i",{className:"fa-solid fa-download"})})})]}),width:100,align:"right"}];return t.jsxs("div",{style:{display:"flex",flexDirection:"column",width:"100%",height:"100%"},children:[t.jsxs(he,{align:"middle",style:{margin:"16px"},children:[t.jsx(E.Title,{level:3,style:{margin:0},children:i({en:"Pages manager",vi:"Quản lý trang"})}),t.jsx(B,{style:{marginLeft:"10px",fontWeight:"bold",color:"#888"},children:p.length})]}),t.jsx(ge,{data:p,columns:G,renderTitle:J,size:"small",searchable:!0,selectable:!0,onSearchRow:(e,n)=>ne(e,(n==null?void 0:n.name)+(n==null?void 0:n.id)),keyExtractor:e=>e.id+e.userType})]})}export{Be as default};
