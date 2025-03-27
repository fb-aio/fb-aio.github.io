import{br as ee,b4 as ne,r as k,b6 as t,ba as m,bs as ie,b0 as I,bx as P,bA as te,bw as $}from"./index-BxqI5Gd0.js";import{d as N}from"./dayjs.min-CPPao3O3.js";import{u as ae}from"./useForceStop-W7rm71EU.js";import{u as se,l as H,t as W,I as O,S as y,d as K,c as U,i as le,T as h}from"./MyApp-ByiHX0qM.js";import{E as oe}from"./ExportButton-BM-r1sQR.js";import{g as re,U as r,a as ce,u as ge,b as de,d as me}from"./pages-Bo05Brd7.js";import{W as he}from"./WordStatisticButton-Cg7P6T4c.js";import ue from"./MyTable-DT8GHijU.js";import{u as pe}from"./useAction-uSm2dd4C.js";import{u as xe}from"./useDevMode-KRwV7uqY.js";import{S as fe}from"./Screen-CIwSBYXE.js";import{P as ve}from"./index-Nqt2BcBL.js";import"./file-download-BWXnBcdo.js";import"./index-Cab20LlE.js";import"./PurePanel-DnuVi_Xb.js";import"./move-12jBH-U3.js";import"./BadgeWrapper-D4NUpODJ.js";import"./index-D5AuyMXS.js";import"./index-DRnW_b6i.js";import"./DownOutlined-CHXCxF_j.js";import"./index-CMDmURDF.js";import"./Table-D7mNCoTe.js";import"./List-DIfsWYq5.js";import"./index-BC7wWbGD.js";import"./index-Czy2gXJr.js";import"./index-unSpNECF.js";import"./index-QUk30DMk.js";import"./SearchOutlined-FPpClRsQ.js";import"./useBreakpoint-B-6M2pGc.js";import"./useForceUpdate-32QtfefY.js";import"./responsiveObserver-DCjkyyMm.js";import"./Pagination-ClSPRRQ-.js";import"./index-DdkLWVDV.js";import"./row-BKHe0tix.js";import"./Collapse-gOHr5t4x.js";import"./col-0SdR7xwF.js";import"./index-CuvpyvNf.js";function tn(){const{devMode:T}=xe(),{message:f}=se(),V=ee(),{ti:i}=ne(),{onClickAction:j,onClickBulkActions:b}=pe(),z=ae(),[C,x]=H("Pages.data",[]),[q,L]=H("Pages.finished",!1),[w,E]=k.useState(!1),d=k.useMemo(()=>C.map((e,n)=>({...e,index:n+1})),[C]);k.useEffect(()=>{q||F(!1)},[]);const F=async(e=!1)=>{var g;if(w&&!e)return;const n=z.start(),a=e?[]:[...d],l=new Set(a.map(p=>p.id)),o="Pages:onReload";W(o),E(!0),L(!1);try{f.loading({key:o,content:i({en:"Loading invited pages...",vi:"Đang tải trang được mời..."}),duration:0});const s=(await re()).filter(u=>!l.has(u.id));s!=null&&s.length&&(a.push(...s),x([...a]));const c=a.filter(u=>u.userType!==r.INVITED).pop();let R=e?"":c==null?void 0:c.cursor;for(;!n.value();){f.loading({key:o,content:i({en:"Loading pages...",vi:"Đang tải trang..."})+a.length,duration:0});const u=await ce(R),v=u==null?void 0:u.filter(D=>!l.has(D.id));if(u.forEach(D=>l.add(D.id)),!(v!=null&&v.length))break;a.push(...v),R=(g=a==null?void 0:a[(a==null?void 0:a.length)-1])==null?void 0:g.cursor,x([...a])}f.success({key:o,content:(n.value()?i({en:"Load pages stopped ",vi:"Dừng tải trang "}):i({en:"Load pages completed ",vi:"Tải xong trang "}))+a.length}),L(!n.value())}catch(p){f.error({content:i({en:"Failed to load pages: ",vi:"Lỗi tải trang: "})+p.message})}finally{E(!1)}},Q=async e=>b({data:e,key:"Pages:onClickUnlikeSelectedPages",actionFn:S,loadingText:()=>i({en:"Unliking pages... ",vi:"Đang bỏ thích trang... "}),successText:()=>i({en:"Unliked pages done: ",vi:"Bỏ thích trang xong: "}),successDescItem:n=>n.name,confirmProps:{title:i({en:"Unlike "+e.length+" pages?",vi:"Bỏ thích "+e.length+" trang?"})}}),S=(e,n=!1)=>j({record:e,id:e.id,key:"Pages:onClickUnlikePage",actionFn:()=>T?I(1e3):ge(e.id),loadingText:()=>i({en:"Unliking page... ",vi:"Đang bỏ thích trang..."})+e.name,successText:()=>i({en:"Unliked page ",vi:"Đã bỏ thích trang "})+e.name,failedText:()=>i({en:"Failed to unlike page ",vi:"Lỗi bỏ thích trang "})+e.name,onSuccess:()=>{x(a=>P(a,l=>{const o=l.findIndex(g=>g.id==e.id);return l[o].userType=r.UNLIKED,l}))},needConfirm:n,confirmProps:{title:i({en:"Unlike ",vi:"Bỏ thích "})+e.name+"?"}}),G=async e=>b({data:e,key:"Pages:onClickUnfollowSelectedPages",actionFn:B,loadingText:()=>i({en:"Unfollowing pages... ",vi:"Đang bỏ theo dõi trang... "}),successText:()=>i({en:"Unfollowed pages done: ",vi:"Bỏ theo dõi trang xong: "}),successDescItem:n=>n.name,confirmProps:{title:i({en:"Unfollow "+e.length+" pages?",vi:"Bỏ theo dõi "+e.length+" trang?"})}}),B=(e,n=!1)=>j({record:e,id:e.id,key:"Pages:onClickUnfollowPage",actionFn:()=>T?I(1e3):de(e.id),loadingText:()=>i({en:"Unfollowing page... ",vi:"Đang bỏ theo dõi trang..."})+e.name,successText:()=>i({en:"Unfollowed page ",vi:"Đã bỏ theo dõi trang "})+e.name,failedText:()=>i({en:"Failed to unfollow page",vi:"Lỗi bỏ theo dõi trang"}),onSuccess:()=>{x(a=>P(a,l=>{const o=l.findIndex(g=>g.id==e.id);return l[o].userType=r.UNFOLLOWED,l}))},needConfirm:n,confirmProps:{title:i({en:"Unfollow ",vi:"Bỏ theo dõi "})+e.name+"?"}}),J=async e=>b({data:e,key:"Pages:onClickDeclineSelectedInvites",actionFn:M,loadingText:()=>i({en:"Removing invite... ",vi:"Đang từ chối lời mời... "}),successText:()=>i({en:"Declined invites done: ",vi:"Từ chối lời mời xong: "}),successDescItem:n=>n.name,confirmProps:{title:i({en:"Remove invite "+e.length+" pages?",vi:"Từ chối lời mời "+e.length+" trang?"})}}),M=async(e,n=!1)=>j({record:e,id:e.id,key:"Pages:onClickDeclineInvite",actionFn:()=>T?I(1e3):me(e.inviteId),loadingText:()=>i({en:"Declining invite... ",vi:"Đang từ chối lời mời..."})+e.name,successText:()=>i({en:"Declined invite ",vi:"Đã từ chối lời mời "})+e.name,failedText:()=>i({en:"Failed to remove invite",vi:"Lỗi từ chối lời mời"}),onSuccess:()=>{x(a=>P(a,l=>{const o=l.findIndex(g=>g.id==e.id);return l[o].userType=r.DECLINED,l}))},needConfirm:n,confirmProps:{title:i({en:"Decline ",vi:"Từ chối lời mời "})+e.name+"?"}}),X=e=>{V("/bulk-downloader",{state:{targetId:e.id,platform:te.Facebook}})},Z=e=>{var g,p;const n=e!=null&&e.length?[...e]:[...d],a=((g=n==null?void 0:n.map(s=>d.find(c=>c.id===s.id)))==null?void 0:g.filter(s=>(s==null?void 0:s.userType)===r.LIKED||(s==null?void 0:s.userType)===r.ADMIN))||[],l=(a==null?void 0:a.filter(s=>s==null?void 0:s.canLike))||[],o=((p=n==null?void 0:n.map(s=>d.find(c=>c.id===s.id)))==null?void 0:p.filter(s=>(s==null?void 0:s.userType)===r.INVITED))||[];return t.jsxs(t.Fragment,{children:[t.jsx(h,{color:"red",title:i({en:"WARNING: Reload many times may cause temporarily blocked by facebook",vi:"LƯU Ý: Tải lại nhiều lần có thể bị facebook chặn tạm thời"}),children:t.jsx(m,{type:"primary",icon:w?t.jsx("i",{className:"fa-solid fa-rotate-right fa-spin"}):t.jsx("i",{className:"fa-solid fa-rotate-right"}),onClick:()=>F(!0),children:i({en:"Reload",vi:"Tải lại"})})}),t.jsx(oe,{data:n,options:[{key:"id",label:".txt (page id)",prepareData:s=>({fileName:"your_pages_id"+N().format("YYYY-MM-DD-HHmmss")+".txt",data:s==null?void 0:s.map(c=>c.id).join("\n")})},{key:"id_name",label:".csv (id+name)",prepareData:s=>({fileName:"my_liked_pages_id_name.csv",data:$(s.map(c=>({uid:c.id,name:c.name})))})},{key:"json",label:".json",prepareData:s=>({fileName:"your_pages"+N().format("YYYY-MM-DD-HHmmss")+".json",data:JSON.stringify(s,null,4)})},{key:"csv",label:".csv",prepareData:s=>({fileName:"your_pages"+N().format("YYYY-MM-DD-HHmmss")+".csv",data:$(s)})}]}),t.jsx(h,{title:i({en:"Unlike ".concat(l.length," selected pages"),vi:"Bỏ thích ".concat(l.length," trang được chọn")}),children:t.jsx(m,{danger:!0,disabled:l.length<=0,icon:t.jsx("i",{className:"fa-solid fa-thumbs-down"}),onClick:()=>Q(l),children:l.length})}),t.jsx(h,{title:i({en:"Unfollow ".concat(a.length," selected pages"),vi:"Bỏ theo dõi ".concat(a.length," trang được chọn")}),children:t.jsx(m,{danger:!0,disabled:a.length<=0,icon:t.jsx("i",{className:"fa-solid fa-eye-slash"}),onClick:()=>G(a),children:a.length})}),o.length>0&&t.jsx(h,{title:i({en:"Decline ".concat(o.length," selected invites"),vi:"Từ chối ".concat(o.length," lời mời được chọn")}),children:t.jsx(ve,{title:i({en:"Decline ".concat(o.length," invites"),vi:"Từ chối ".concat(o.length," lời mời")}),description:i({en:"Are your sure want to decline ".concat(o.length," invites?"),vi:"Bản có chãc muốn từ chối ".concat(o.length," lời mời?")}),onConfirm:()=>J(o),okText:i({en:"Yes",vi:"Có"}),cancelText:i({en:"No",vi:"Huỷ"}),children:t.jsx(m,{danger:!0,disabled:o.length<=0,icon:t.jsx("i",{className:"fa-solid fa-xmark"}),children:o.length})})}),t.jsx(he,{name:"Pages",text:d.map(s=>s.name).join(" ")}),t.jsx(h,{title:i({en:"Manage on Facebook",vi:"Quản lý trên Facebook"}),children:t.jsx(m,{onClick:()=>{W("Pages:openManageOnFacebook"),window.open("https://www.facebook.com/me/allactivity?category_key=LIKEDINTERESTS","_blank")},icon:t.jsx("i",{className:"fa-solid fa-up-right-from-square"})})})]})},A=e=>{switch(e){case r.ADMIN:return{color:"success",text:i({en:"Admin",vi:"Admin"})};case r.LIKED:return{color:"default",text:i({en:"Liked",vi:"Đã thích"})};case r.INVITED:return{color:"warning",text:i({en:"Invited",vi:"Lời mời"})};case r.DECLINED:return{color:"error",text:i({en:"Declined",vi:"Từ chối"})};case r.UNLIKED:return{color:"error",text:i({en:"Unliked",vi:"Bỏ thích"})};case r.UNFOLLOWED:return{color:"error",text:i({en:"Unfollowed",vi:"Bỏ theo dõi"})};default:return{color:"default",text:"?"}}},Y=k.useMemo(()=>Array.from(d.map(e=>e.category).reduce((e,n)=>{let a=e.get(n)||0;return e.set(n,++a)},new Map).entries()).sort((e,n)=>n[1]-e[1]).map(([e,n])=>({text:e+" ("+n+")",value:e})),[d]),_=[{title:"#",key:"index",dataIndex:"index",sorter:(e,n)=>e.index-n.index,width:60},{title:i({en:"Image",vi:"Ảnh"}),key:"image",dataIndex:"image",render:(e,n,a)=>t.jsx(O,{src:n.image,width:50,height:50,style:{objectFit:"contain",borderRadius:5}})},{title:i({en:"Page",vi:"Trang"}),key:"name",dataIndex:"name",render:(e,n,a)=>t.jsxs(y,{direction:"vertical",size:0,style:{maxWidth:300},children:[t.jsx(K.Link,{href:n.url,target:"_blank",children:t.jsx("b",{children:n.name||"???"})}),t.jsx("span",{style:{opacity:.5},children:n.id})]}),sorter:(e,n)=>e.name.localeCompare(n.name)},{title:i({en:"Category",vi:"Danh mục"})+" ("+Y.length+")",key:"category",dataIndex:"category",filters:Y,onFilter:(e,n)=>n.category==e,filterSearch:!0},{title:i({en:"Type",vi:"Loại"}),key:"type",dataIndex:"userType",render:(e,n,a)=>{const{color:l,text:o}=A(n.userType);return n.inviterId?t.jsxs(y,{children:[t.jsx(U,{color:l,children:o}),t.jsx(O,{src:n.inviterAvatar,width:40,height:40,style:{borderRadius:5}}),t.jsxs(y,{direction:"vertical",size:0,children:[t.jsx(K.Link,{href:le(n.inviterId),target:"_blank",children:t.jsx("b",{children:n.inviterName})}),t.jsx("span",{style:{opacity:.5},children:n.inviterId})]})]}):t.jsx(U,{color:l,children:o})},filters:Object.values(r).map(e=>{const{text:n}=A(e);return{text:n+" ("+d.filter(a=>a.userType==e).length+")",value:e}}),onFilter:(e,n)=>n.userType==e,align:"left"},{title:i({en:"Action",vi:"Hành động"}),key:"action",render:(e,n,a)=>t.jsxs(y.Compact,{style:{minWidth:30},children:[n.userType===r.LIKED||n.userType===r.ADMIN?t.jsxs(t.Fragment,{children:[n.canLike?t.jsx(h,{title:i({en:"Unlike page",vi:"Bỏ thích"}),children:t.jsx(m,{onClick:()=>S(n,!0),icon:t.jsx("i",{className:"fa-solid fa-thumbs-down"})})}):null,t.jsx(h,{title:i({en:"Unfollow page",vi:"Bỏ theo dõi"}),children:t.jsx(m,{onClick:()=>B(n,!0),icon:t.jsx("i",{className:"fa-solid fa-eye-slash"})})})]}):null,n.userType===r.INVITED?t.jsx(h,{title:i({en:"Decline invite",vi:"Từ chối"}),children:t.jsx(m,{danger:!0,onClick:()=>M(n,!0),icon:t.jsx("i",{className:"fa-solid fa-xmark"})})}):null,t.jsx(h,{title:i({en:"Bulk Downloader",vi:"Tải hàng loạt"}),children:t.jsx(m,{type:"default",onClick:()=>X(n),icon:t.jsx("i",{className:"fa-solid fa-download"})})})]}),width:100,align:"right"}];return t.jsx(fe,{title:i({en:"Pages manager",vi:"Quản lý trang"}),titleSuffix:t.jsx(U,{style:{marginLeft:"10px",fontWeight:"bold",color:"#888"},children:d.length}),children:t.jsx(ue,{data:d,columns:_.map((e,n)=>({...e,index:n})),renderTitle:Z,size:"small",searchable:!0,selectable:!0,onSearchRow:(e,n)=>ie(e,(n==null?void 0:n.name)+(n==null?void 0:n.id)),keyExtractor:e=>(e==null?void 0:e.id)+(e==null?void 0:e.userType)})})}export{tn as default};
