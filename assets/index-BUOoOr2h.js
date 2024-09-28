const __vite__fileDeps=["./MyTable-DZ1NqMm-.js","./index-CbxyLh1i.js","./index-Gp9RWSdI.css","./MyApp-Sn1_uDoa.js","./Table-BjQ9AV51.js","./index-Ce2uPXMA.js","./addEventListener-B174J_4Q.js","./index-BVuv5qFT.js","./PurePanel-DG3EGm-S.js","./index-CO9h1vGW.js","./index-C5W4bBkQ.js","./index-9ekC7r9I.js","./Dropdown-CWpi5ZAi.js","./index-DxnPqtWt.js","./useBreakpoint-BbqyQBFm.js","./responsiveObserver-CGHRY4l1.js","./Pagination-juAnr4uF.js","./index-BtmKbfTk.js","./row-dVMcO0Mb.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{aq as _,r as j,ap as i,as as m,av as ee,aK as N,aL as ne}from"./index-CbxyLh1i.js";import{c as ie,u as te,d as O,t as y,b as k,g as C,T as x,G as ae,o as se,B as le,i as oe,H as re,L as ce}from"./MyApp-Sn1_uDoa.js";import{u as de}from"./useForceStop-BfL0Osu8.js";import{E as ge}from"./ExportButton-DFL3HtIQ.js";import{d as P}from"./dayjs.min-D0jA5E0l.js";import{g as he,U as c,a as ue,u as me,b as pe,d as xe}from"./pages-B0wUclkp.js";import{I as K}from"./index-sgys5hDh.js";import{T as L}from"./index-Ce2uPXMA.js";import{T as U}from"./index-DtMT3tm4.js";import{R as fe}from"./row-dVMcO0Mb.js";import{P as E}from"./index-DLUONG0Y.js";import"./file-download-D8secaY-.js";import"./index-9ekC7r9I.js";import"./Dropdown-CWpi5ZAi.js";import"./PurePanel-DG3EGm-S.js";import"./addEventListener-B174J_4Q.js";import"./responsiveObserver-CGHRY4l1.js";import"./index-C60-ymOx.js";const ve=j.lazy(()=>ee(()=>import("./MyTable-DZ1NqMm-.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18]),import.meta.url));function Se(){const{message:g,notification:T}=ie(),V=_(),{ti:t}=te(),W=de(),[p,f]=O("Pages.data",[]),[q,F]=O("Pages.finished",!1),[B,$]=j.useState(!1);j.useEffect(()=>{q||M(!1)},[]);const M=async(e=!1)=>{var u;if(B&&!e)return;const n=W.start(),a=e?[]:[...p],o=new Set(a.map(d=>d.id)),l="Pages:onReload";y(l),$(!0),F(!1);try{g.loading({key:l,content:t({en:"Loading invited pages...",vi:"Đang tải trang được mời..."}),duration:0});const s=(await he()).filter(h=>!o.has(h.id));s!=null&&s.length&&(a.push(...s),f([...a]));const r=a.filter(h=>h.userType!==c.INVITED).pop();let I=e?"":r==null?void 0:r.cursor;for(;!n.value();){g.loading({key:l,content:t({en:"Loading pages...",vi:"Đang tải trang..."})+a.length,duration:0});const h=await ue(I),v=h==null?void 0:h.filter(w=>!o.has(w.id));if(h.forEach(w=>o.add(w.id)),!(v!=null&&v.length))break;a.push(...v),I=(u=a==null?void 0:a[(a==null?void 0:a.length)-1])==null?void 0:u.cursor,f([...a])}g.success({key:l,content:(n.value()?t({en:"Load pages stopped ",vi:"Dừng tải trang "}):t({en:"Load pages completed ",vi:"Tải xong trang "}))+a.length}),F(!n.value())}catch(d){g.error({content:t({en:"Failed to load pages: ",vi:"Lỗi tải trang: "})+d.message})}finally{$(!1)}},b=async({pages:e,key:n,actionFn:a,loadingText:o,successText:l})=>{if(!await oe()||!(e!=null&&e.length))return;const u=n+":waiting";y(n);let d=!1,s=[];for(let r=0;r<e.length&&(g.destroy(u),g.loading({key:n,content:i.jsxs(i.Fragment,{children:[o+(r+1)+"/"+e.length,i.jsx("br",{}),i.jsx("i",{children:t({en:"Click to stop",vi:"Bấm để dừng"})})]}),duration:0,onClick:()=>{g.loading({key:n,content:t({en:"Stopping...",vi:"Đang dừng..."}),duration:0}),d=!0}}),await a(e[r])&&s.push(e[r]),!d);r++)if(r<e.length-1){const h=ce(2e3,5e3);g.loading({key:u,content:t({en:"Sleeping "+Math.round(h/1e3)+"s",vi:"Đang đợi "+Math.round(h/1e3)+"s"}),duration:0}),await re(h)}g.destroy(n),g.destroy(u),T.open({type:"success",duration:0,message:l+`${s.length}/${e.length}`,description:i.jsx("ol",{style:{maxHeight:200,overflowY:"auto",whiteSpace:"pre-wrap"},children:s.map(r=>i.jsx("li",{children:i.jsx("a",{target:"_blank",href:C(r.id),children:r.name})},r.id))})})},D=async({record:e,key:n,actionFn:a,loadingText:o,successText:l,failedText:u,onSuccess:d})=>{y(n),g.loading({key:n,content:o,duration:0});const s=await a();return s?(T.destroy(n),g.success({key:n,content:l}),d==null||d()):(g.destroy(n),T.open({type:"error",key:n,message:u,description:e.name,duration:0,btn:i.jsxs(k,{children:[i.jsx(m,{type:"default",onClick:()=>a(),children:t({en:"Retry",vi:"Thử lại"})}),i.jsx(m,{type:"primary",onClick:()=>window.open(C(e.id)),children:t({en:"View page",vi:"Xem trang"})})]})})),s},z=async e=>{b({key:"Pages:onClickUnlikeSelectedPages",pages:e,actionFn:S,loadingText:t({en:"Unliking pages... ",vi:"Đang bỏ thích trang... "}),successText:t({en:"Unliked pages done: ",vi:"Bỏ thích trang xong: "})})},S=e=>D({record:e,key:"Pages:onClickUnlikePage",actionFn:()=>me(e.id),loadingText:t({en:"Unliking page... ",vi:"Đang bỏ thích trang..."})+e.name,successText:t({en:"Unliked page ",vi:"Đã bỏ thích trang "})+e.name,failedText:t({en:"Failed to unlike page",vi:"Lỗi bỏ thích trang"}),onSuccess:()=>{f(n=>N(n,a=>{const o=a.findIndex(l=>l.id==e.id);return a[o].userType=c.UNLIKED,a}))}}),G=async e=>{b({key:"Pages:onClickUnfollowSelectedPages",pages:e,actionFn:A,loadingText:t({en:"Unfollowing pages... ",vi:"Đang bỏ theo dõi trang... "}),successText:t({en:"Unfollowed pages done: ",vi:"Bỏ theo dõi trang xong: "})})},A=e=>D({record:e,key:"Pages:onClickUnfollowPage",actionFn:()=>pe(e.id),loadingText:t({en:"Unfollowing page... ",vi:"Đang bỏ theo dõi trang..."})+e.name,successText:t({en:"Unfollowed page ",vi:"Đã bỏ theo dõi trang "})+e.name,failedText:t({en:"Failed to unfollow page",vi:"Lỗi bỏ theo dõi trang"}),onSuccess:()=>{f(n=>N(n,a=>{const o=a.findIndex(l=>l.id==e.id);return a[o].userType=c.UNFOLLOWED,a}))}}),Q=async e=>{b({key:"Pages:onClickDeclineSelectedInvites",pages:e,actionFn:R,loadingText:t({en:"Removing invite... ",vi:"Đang từ chối lời mời... "}),successText:t({en:"Declined invites done: ",vi:"Từ chối lời mời xong: "})})},R=async e=>D({record:e,key:"Pages:onClickDeclineInvite",actionFn:()=>xe(e.inviteId),loadingText:t({en:"Declining invite... ",vi:"Đang từ chối lời mời..."})+e.name,successText:t({en:"Declined invite ",vi:"Đã từ chối lời mời "})+e.name,failedText:t({en:"Failed to remove invite",vi:"Lỗi từ chối lời mời"}),onSuccess:()=>{f(n=>N(n,a=>{const o=a.findIndex(l=>l.id==e.id);return a[o].userType=c.DECLINED,a}))}}),J=e=>{V("/bulk-downloader",{state:{targetId:e.id,platform:ne.Facebook}})},X=e=>{var u,d;const n=e!=null&&e.length?[...e]:[...p],a=((u=n==null?void 0:n.map(s=>p.find(r=>r.id===s.id)))==null?void 0:u.filter(s=>(s==null?void 0:s.userType)===c.LIKED||(s==null?void 0:s.userType)===c.ADMIN))||[],o=(a==null?void 0:a.filter(s=>s==null?void 0:s.canLike))||[],l=((d=n==null?void 0:n.map(s=>p.find(r=>r.id===s.id)))==null?void 0:d.filter(s=>(s==null?void 0:s.userType)===c.INVITED))||[];return i.jsxs(i.Fragment,{children:[i.jsx(x,{color:"red",title:t({en:"WARNING: Reload many times may cause temporarily blocked by facebook",vi:"LƯU Ý: Tải lại nhiều lần có thể bị facebook chặn tạm thời"}),children:i.jsx(m,{type:"primary",icon:B?i.jsx("i",{className:"fa-solid fa-rotate-right fa-spin"}):i.jsx("i",{className:"fa-solid fa-rotate-right"}),onClick:()=>M(!0),children:t({en:"Reload",vi:"Tải lại"})})}),i.jsx(ge,{data:n,options:[{key:"id",label:".txt (page id)",prepareData:s=>({fileName:"your_pages_id"+P().format("YYYY-MM-DD-HHmmss")+".txt",data:s==null?void 0:s.map(r=>r.id).join(`
`)})},{key:"json",label:".json",prepareData:s=>({fileName:"your_pages"+P().format("YYYY-MM-DD-HHmmss")+".json",data:JSON.stringify(s,null,4)})},{key:"csv",label:".csv",prepareData:s=>({fileName:"your_pages"+P().format("YYYY-MM-DD-HHmmss")+".csv",data:se(s)})}]}),i.jsx(x,{title:t({en:`Unlike ${o.length} selected pages`,vi:`Bỏ thích ${o.length} trang được chọn`}),children:i.jsx(E,{title:t({en:`Unlike ${o.length} pages`,vi:`Bỏ thích ${o.length} trang`}),description:t({en:`Are your sure want to unlike ${o.length} pages?`,vi:`Bản có chãc muốn bỏ thích ${o.length} trang?`}),onConfirm:()=>z(o),okText:t({en:"Unlike pages",vi:"Bỏ thích trang"}),cancelText:t({en:"No",vi:"Huỷ"}),children:i.jsx(m,{danger:!0,disabled:o.length<=0,icon:i.jsx("i",{className:"fa-solid fa-thumbs-down"}),children:o.length})})}),i.jsx(x,{title:t({en:`Unfollow ${a.length} selected pages`,vi:`Bỏ theo dõi ${a.length} trang được chọn`}),children:i.jsx(E,{title:t({en:`Unfollow ${a.length} pages`,vi:`Bỏ theo dõi ${a.length} trang`}),description:t({en:`Are your sure want to unfollow ${a.length} pages?`,vi:`Bản có chãc muốn bỏ theo dõi ${a.length} trang?`}),onConfirm:()=>G(a),okText:t({en:"Yes",vi:"Có"}),cancelText:t({en:"No",vi:"Huỷ"}),children:i.jsx(m,{danger:!0,disabled:a.length<=0,icon:i.jsx("i",{className:"fa-solid fa-eye-slash"}),children:a.length})})}),l.length>0&&i.jsx(x,{title:t({en:`Decline ${l.length} selected invites`,vi:`Từ chối ${l.length} lời mời được chọn`}),children:i.jsx(E,{title:t({en:`Decline ${l.length} invites`,vi:`Từ chối ${l.length} lời mời`}),description:t({en:`Are your sure want to decline ${l.length} invites?`,vi:`Bản có chãc muốn từ chối ${l.length} lời mời?`}),onConfirm:()=>Q(l),okText:t({en:"Yes",vi:"Có"}),cancelText:t({en:"No",vi:"Huỷ"}),children:i.jsx(m,{danger:!0,disabled:l.length<=0,icon:i.jsx("i",{className:"fa-solid fa-xmark"}),children:l.length})})}),i.jsx(x,{title:t({en:"Manage on Facebook",vi:"Quản lý trên Facebook"}),children:i.jsx(le,{count:t({en:"New",vi:"Mới"}),color:"purple",style:{color:"white"},children:i.jsx(m,{onClick:()=>{y("Pages:openManageOnFacebook"),window.open("https://www.facebook.com/me/allactivity?category_key=LIKEDINTERESTS","_blank")},icon:i.jsx("i",{className:"fa-solid fa-up-right-from-square"})})})})]})},Y=e=>{switch(e){case c.ADMIN:return{color:"success",text:t({en:"Admin",vi:"Admin"})};case c.LIKED:return{color:"default",text:t({en:"Liked",vi:"Đã thích"})};case c.INVITED:return{color:"warning",text:t({en:"Invited",vi:"Lời mời"})};case c.DECLINED:return{color:"error",text:t({en:"Declined",vi:"Từ chối"})};case c.UNLIKED:return{color:"error",text:t({en:"Unliked",vi:"Bỏ thích"})};case c.UNFOLLOWED:return{color:"error",text:t({en:"Unfollowed",vi:"Bỏ theo dõi"})};default:return{color:"default",text:"?"}}},H=j.useMemo(()=>Array.from(p.map(e=>e.category).reduce((e,n)=>{let a=e.get(n)||0;return e.set(n,++a)},new Map).entries()).sort((e,n)=>n[1]-e[1]).map(([e,n])=>({text:e+" ("+n+")",value:e})),[p]),Z=[{title:t({en:"Image",vi:"Ảnh"}),key:"image",dataIndex:"image",render:(e,n,a)=>i.jsx(K,{src:n.image,width:50,height:50,style:{objectFit:"contain",borderRadius:5}})},{title:t({en:"Page",vi:"Trang"}),key:"name",dataIndex:"name",render:(e,n,a)=>i.jsxs(k,{direction:"vertical",size:0,style:{maxWidth:300},children:[i.jsx(L.Link,{href:n.url,target:"_blank",children:i.jsx("b",{children:n.name||"???"})}),i.jsx("span",{style:{opacity:.7},children:n.id})]})},{title:t({en:"Category",vi:"Danh mục"})+" ("+H.length+")",key:"category",dataIndex:"category",filters:H,onFilter:(e,n)=>n.category==e,filterSearch:!0},{title:t({en:"Type",vi:"Loại"}),key:"type",dataIndex:"userType",render:(e,n,a)=>{const{color:o,text:l}=Y(n.userType);return n.inviterId?i.jsxs(k,{children:[i.jsx(U,{color:o,children:l}),i.jsx(K,{src:n.inviterAvatar,width:40,height:40,style:{borderRadius:5}}),i.jsx(L.Link,{href:C(n.inviterId),target:"_blank",children:n.inviterName})]}):i.jsx(U,{color:o,children:l})},filters:Object.values(c).map(e=>{const{text:n}=Y(e);return{text:n+" ("+p.filter(a=>a.userType==e).length+")",value:e}}),onFilter:(e,n)=>n.userType==e,align:"left"},{title:t({en:"Action",vi:"Hành động"}),key:"action",render:(e,n,a)=>i.jsxs(k.Compact,{style:{minWidth:30},children:[n.userType===c.LIKED||n.userType===c.ADMIN?i.jsxs(i.Fragment,{children:[n.canLike?i.jsx(x,{title:t({en:"Unlike page",vi:"Bỏ thích"}),children:i.jsx(m,{onClick:()=>S(n),icon:i.jsx("i",{className:"fa-solid fa-thumbs-down"})})}):null,i.jsx(x,{title:t({en:"Unfollow page",vi:"Bỏ theo dõi"}),children:i.jsx(m,{onClick:()=>A(n),icon:i.jsx("i",{className:"fa-solid fa-eye-slash"})})})]}):null,n.userType===c.INVITED?i.jsx(x,{title:t({en:"Decline invite",vi:"Từ chối"}),children:i.jsx(m,{danger:!0,onClick:()=>R(n),icon:i.jsx("i",{className:"fa-solid fa-xmark"})})}):null,i.jsx(x,{title:t({en:"Bulk Downloader",vi:"Tải hàng loạt"}),children:i.jsx(m,{type:"default",onClick:()=>J(n),icon:i.jsx("i",{className:"fa-solid fa-download"})})})]}),width:100,align:"right"}];return i.jsxs("div",{style:{display:"flex",flexDirection:"column",width:"100%",height:"100%"},children:[i.jsxs(fe,{align:"middle",style:{margin:"16px"},children:[i.jsx(L.Title,{level:3,style:{margin:0},children:t({en:"Pages manager",vi:"Quản lý trang"})}),i.jsx(U,{style:{marginLeft:"10px",fontWeight:"bold",color:"#888"},children:p.length})]}),i.jsx(ve,{data:p,columns:Z,renderTitle:X,size:"small",searchable:!0,selectable:!0,onSearchRow:(e,n)=>ae(e,(n==null?void 0:n.name)+(n==null?void 0:n.id)),keyExtractor:e=>(e==null?void 0:e.id)+(e==null?void 0:e.userType)})]})}export{Se as default};
