System.register(["./index-legacy-DgDxnhpA.js","./dayjs.min-legacy-dAm_FOuX.js","./useForceStop-legacy-mCS4ejoc.js","./MyApp-legacy--44lDAYA.js","./ExportButton-legacy-BPDNAmgW.js","./pages-legacy-CxGiaId7.js","./WordStatisticButton-legacy-BkXxaghQ.js","./MyTable-legacy-DTDaLIa7.js","./useAction-legacy-BWcDzEra.js","./useDevMode-legacy-usMtnQCZ.js","./Screen-legacy-DoE_mUbh.js","./index-legacy-BDlErKet.js","./index-legacy-Bi2tP6U5.js","./file-download-legacy-CITZosSI.js","./index-legacy-DnTQUxLr.js","./Dropdown-legacy-DZYgwR4s.js","./PurePanel-legacy-DCSDv3sl.js","./move-legacy-D4CLyVSa.js","./BadgeWrapper-legacy-CXrTq5mk.js","./index-legacy-z98iYxp4.js","./index-legacy-B9HH1mBJ.js","./index-legacy-CCFyNVXu.js","./DownOutlined-legacy-Dv1to0sb.js","./TextArea-legacy-B9cfn5c-.js","./index-legacy-DtTRmuRZ.js","./Table-legacy-CGeldQ1M.js","./List-legacy-DQsyQNx_.js","./index-legacy-B0kgt6UR.js","./index-legacy-B7D85tm3.js","./index-legacy-Daaohuto.js","./index-legacy-i3bw2b2W.js","./SearchOutlined-legacy-CuuS7WlB.js","./useBreakpoint-legacy-fAAoUt70.js","./useForceUpdate-legacy-CaDY0ldf.js","./Pagination-legacy-BNXwGNoJ.js","./index-legacy-D7Sgl99W.js","./row-legacy-vWQqcFVi.js","./Collapse-legacy-yu6bSIxn.js","./col-legacy-D6No8P8C.js","./index-legacy-CphRATWL.js"],(function(e,n){"use strict";var i,a,t,l,s,c,o,r,d,g,h,u,m,x,y,p,f,j,v,k,T,b,D,I,w,N,L,U,C,P,E,F,S,B;return{setters:[e=>{i=e.bi,a=e.aU,t=e.r,l=e.aW,s=e.a_,c=e.bc,o=e.aQ,r=e.bm,d=e.bp,g=e.bl},e=>{h=e.d},e=>{u=e.u},e=>{m=e.u,x=e.e,y=e.t,p=e.I,f=e.S,j=e.T,v=e.a,k=e.b},e=>{T=e.E},e=>{b=e.g,D=e.U,I=e.a,w=e.u,N=e.b,L=e.d},e=>{U=e.W},e=>{C=e.default},e=>{P=e.u},e=>{E=e.u},e=>{F=e.S},e=>{S=e.T},e=>{B=e.P},null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],execute:function(){e("default",(function(){const{devMode:e}=E(),{message:n}=m(),M=i(),{ti:A}=a(),{onClickAction:_,onClickBulkActions:Y}=P(),R=u(),[W,$]=x("Pages.data",[]),[O,H]=x("Pages.finished",!1),[K,V]=t.useState(!1),z=t.useMemo((()=>W.map(((e,n)=>({...e,index:n+1})))),[W]);t.useEffect((()=>{O||Q(!1)}),[]);const Q=async(e=!1)=>{if(K&&!e)return;const i=R.start(),a=e?[]:[...z],t=new Set(a.map((e=>e.id))),l="Pages:onReload";y(l),V(!0),H(!1);try{n.loading({key:l,content:A({en:"Loading invited pages...",vi:"Đang tải trang được mời..."}),duration:0});const s=(await b()).filter((e=>!t.has(e.id)));s?.length&&(a.push(...s),$([...a]));const c=a.filter((e=>e.userType!==D.INVITED)).pop();let o=e?"":c?.cursor;for(;!i.value();){n.loading({key:l,content:A({en:"Loading pages...",vi:"Đang tải trang..."})+a.length,duration:0});const e=await I(o),i=e?.filter((e=>!t.has(e.id)));if(e.forEach((e=>t.add(e.id))),!i?.length)break;a.push(...i),o=a?.[a?.length-1]?.cursor,$([...a])}n.success({key:l,content:(i.value()?A({en:"Load pages stopped ",vi:"Dừng tải trang "}):A({en:"Load pages completed ",vi:"Tải xong trang "}))+a.length}),H(!i.value())}catch(s){n.error({content:A({en:"Failed to load pages: ",vi:"Lỗi tải trang: "})+s.message})}finally{V(!1)}},q=(n,i=!1)=>_({record:n,id:n.id,key:"Pages:onClickUnlikePage",actionFn:()=>e?o(1e3):w(n.id),loadingText:()=>A({en:"Unliking page... ",vi:"Đang bỏ thích trang..."})+n.name,successText:()=>A({en:"Unliked page ",vi:"Đã bỏ thích trang "})+n.name,failedText:()=>A({en:"Failed to unlike page ",vi:"Lỗi bỏ thích trang "})+n.name,onSuccess:()=>{$((e=>r(e,(e=>{const i=e.findIndex((e=>e.id==n.id));return e[i].userType=D.UNLIKED,e}))))},needConfirm:i,confirmProps:{title:A({en:"Unlike ",vi:"Bỏ thích "})+n.name+"?"}}),G=(n,i=!1)=>_({record:n,id:n.id,key:"Pages:onClickUnfollowPage",actionFn:()=>e?o(1e3):N(n.id),loadingText:()=>A({en:"Unfollowing page... ",vi:"Đang bỏ theo dõi trang..."})+n.name,successText:()=>A({en:"Unfollowed page ",vi:"Đã bỏ theo dõi trang "})+n.name,failedText:()=>A({en:"Failed to unfollow page",vi:"Lỗi bỏ theo dõi trang"}),onSuccess:()=>{$((e=>r(e,(e=>{const i=e.findIndex((e=>e.id==n.id));return e[i].userType=D.UNFOLLOWED,e}))))},needConfirm:i,confirmProps:{title:A({en:"Unfollow ",vi:"Bỏ theo dõi "})+n.name+"?"}}),J=async(n,i=!1)=>_({record:n,id:n.id,key:"Pages:onClickDeclineInvite",actionFn:()=>e?o(1e3):L(n.inviteId),loadingText:()=>A({en:"Declining invite... ",vi:"Đang từ chối lời mời..."})+n.name,successText:()=>A({en:"Declined invite ",vi:"Đã từ chối lời mời "})+n.name,failedText:()=>A({en:"Failed to remove invite",vi:"Lỗi từ chối lời mời"}),onSuccess:()=>{$((e=>r(e,(e=>{const i=e.findIndex((e=>e.id==n.id));return e[i].userType=D.DECLINED,e}))))},needConfirm:i,confirmProps:{title:A({en:"Decline ",vi:"Từ chối lời mời "})+n.name+"?"}}),X=e=>{switch(e){case D.ADMIN:return{color:"success",text:A({en:"Admin",vi:"Admin"})};case D.LIKED:return{color:"default",text:A({en:"Liked",vi:"Đã thích"})};case D.INVITED:return{color:"warning",text:A({en:"Invited",vi:"Lời mời"})};case D.DECLINED:return{color:"error",text:A({en:"Declined",vi:"Từ chối"})};case D.UNLIKED:return{color:"error",text:A({en:"Unliked",vi:"Bỏ thích"})};case D.UNFOLLOWED:return{color:"error",text:A({en:"Unfollowed",vi:"Bỏ theo dõi"})};default:return{color:"default",text:"?"}}},Z=t.useMemo((()=>Array.from(z.map((e=>e.category)).reduce(((e,n)=>{let i=e.get(n)||0;return e.set(n,++i)}),new Map).entries()).sort(((e,n)=>n[1]-e[1])).map((([e,n])=>({text:e+" ("+n+")",value:e})))),[z]),ee=[{title:"#",key:"index",dataIndex:"index",sorter:(e,n)=>e.index-n.index,width:60},{title:A({en:"Image",vi:"Ảnh"}),key:"image",dataIndex:"image",render:(e,n,i)=>l.jsx(p,{src:n.image,width:50,height:50,style:{objectFit:"contain",borderRadius:5}})},{title:A({en:"Page",vi:"Trang"}),key:"name",dataIndex:"name",render:(e,n,i)=>l.jsxs(f,{direction:"vertical",size:0,style:{maxWidth:300},children:[l.jsx(S.Link,{href:n.url,target:"_blank",children:l.jsx("b",{children:n.name||"???"})}),l.jsx("span",{style:{opacity:.5},children:n.id})]}),sorter:(e,n)=>e.name.localeCompare(n.name)},{title:A({en:"Category",vi:"Danh mục"})+" ("+Z.length+")",key:"category",dataIndex:"category",filters:Z,onFilter:(e,n)=>n.category==e,filterSearch:!0},{title:A({en:"Type",vi:"Loại"}),key:"type",dataIndex:"userType",render:(e,n,i)=>{const{color:a,text:t}=X(n.userType);return n.inviterId?l.jsxs(f,{children:[l.jsx(j,{color:a,children:t}),l.jsx(p,{src:n.inviterAvatar,width:40,height:40,style:{borderRadius:5}}),l.jsxs(f,{direction:"vertical",size:0,children:[l.jsx(S.Link,{href:v(n.inviterId),target:"_blank",children:l.jsx("b",{children:n.inviterName})}),l.jsx("span",{style:{opacity:.5},children:n.inviterId})]})]}):l.jsx(j,{color:a,children:t})},filters:Object.values(D).map((e=>{const{text:n}=X(e);return{text:n+" ("+z.filter((n=>n.userType==e)).length+")",value:e}})),onFilter:(e,n)=>n.userType==e,align:"left"},{title:A({en:"Action",vi:"Hành động"}),key:"action",render:(e,n,i)=>l.jsxs(f.Compact,{style:{minWidth:30},children:[n.userType===D.LIKED||n.userType===D.ADMIN?l.jsxs(l.Fragment,{children:[n.canLike?l.jsx(k,{title:A({en:"Unlike page",vi:"Bỏ thích"}),children:l.jsx(s,{onClick:()=>q(n,!0),icon:l.jsx("i",{className:"fa-solid fa-thumbs-down"})})}):null,l.jsx(k,{title:A({en:"Unfollow page",vi:"Bỏ theo dõi"}),children:l.jsx(s,{onClick:()=>G(n,!0),icon:l.jsx("i",{className:"fa-solid fa-eye-slash"})})})]}):null,n.userType===D.INVITED?l.jsx(k,{title:A({en:"Decline invite",vi:"Từ chối"}),children:l.jsx(s,{danger:!0,onClick:()=>J(n,!0),icon:l.jsx("i",{className:"fa-solid fa-xmark"})})}):null,l.jsx(k,{title:A({en:"Bulk Downloader",vi:"Tải hàng loạt"}),children:l.jsx(s,{type:"default",onClick:()=>(e=>{M("/bulk-downloader",{state:{targetId:e.id,platform:d.Facebook}})})(n),icon:l.jsx("i",{className:"fa-solid fa-download"})})})]}),width:100,align:"right"}];return l.jsx(F,{title:A({en:"Pages manager",vi:"Quản lý trang"}),titleSuffix:l.jsx(j,{style:{marginLeft:"10px",fontWeight:"bold",color:"#888"},children:z.length}),children:l.jsx(C,{data:z,columns:ee.map(((e,n)=>({...e,index:n}))),renderTitle:e=>{const n=e?.length?[...e]:[...z],i=n?.map((e=>z.find((n=>n.id===e.id))))?.filter((e=>e?.userType===D.LIKED||e?.userType===D.ADMIN))||[],a=i?.filter((e=>e?.canLike))||[],t=n?.map((e=>z.find((n=>n.id===e.id))))?.filter((e=>e?.userType===D.INVITED))||[];return l.jsxs(l.Fragment,{children:[l.jsx(k,{color:"red",title:A({en:"WARNING: Reload many times may cause temporarily blocked by facebook",vi:"LƯU Ý: Tải lại nhiều lần có thể bị facebook chặn tạm thời"}),children:l.jsx(s,{type:"primary",icon:K?l.jsx("i",{className:"fa-solid fa-rotate-right fa-spin"}):l.jsx("i",{className:"fa-solid fa-rotate-right"}),onClick:()=>Q(!0),children:A({en:"Reload",vi:"Tải lại"})})}),l.jsx(T,{data:n,options:[{key:"id",label:".txt (page id)",prepareData:e=>({fileName:"your_pages_id"+h().format("YYYY-MM-DD-HHmmss")+".txt",data:e?.map((e=>e.id)).join("\n")})},{key:"id_name",label:".csv (id+name)",prepareData:e=>({fileName:"my_liked_pages_id_name.csv",data:g(e.map((e=>({uid:e.id,name:e.name}))))})},{key:"json",label:".json",prepareData:e=>({fileName:"your_pages"+h().format("YYYY-MM-DD-HHmmss")+".json",data:JSON.stringify(e,null,4)})},{key:"csv",label:".csv",prepareData:e=>({fileName:"your_pages"+h().format("YYYY-MM-DD-HHmmss")+".csv",data:g(e)})}]}),l.jsx(k,{title:A({en:`Unlike ${a.length} selected pages`,vi:`Bỏ thích ${a.length} trang được chọn`}),children:l.jsx(s,{danger:!0,disabled:a.length<=0,icon:l.jsx("i",{className:"fa-solid fa-thumbs-down"}),onClick:()=>(async e=>Y({data:e,key:"Pages:onClickUnlikeSelectedPages",actionFn:q,loadingText:()=>A({en:"Unliking pages... ",vi:"Đang bỏ thích trang... "}),successText:()=>A({en:"Unliked pages done: ",vi:"Bỏ thích trang xong: "}),successDescItem:e=>e.name,confirmProps:{title:A({en:"Unlike "+e.length+" pages?",vi:"Bỏ thích "+e.length+" trang?"})}}))(a),children:a.length})}),l.jsx(k,{title:A({en:`Unfollow ${i.length} selected pages`,vi:`Bỏ theo dõi ${i.length} trang được chọn`}),children:l.jsx(s,{danger:!0,disabled:i.length<=0,icon:l.jsx("i",{className:"fa-solid fa-eye-slash"}),onClick:()=>(async e=>Y({data:e,key:"Pages:onClickUnfollowSelectedPages",actionFn:G,loadingText:()=>A({en:"Unfollowing pages... ",vi:"Đang bỏ theo dõi trang... "}),successText:()=>A({en:"Unfollowed pages done: ",vi:"Bỏ theo dõi trang xong: "}),successDescItem:e=>e.name,confirmProps:{title:A({en:"Unfollow "+e.length+" pages?",vi:"Bỏ theo dõi "+e.length+" trang?"})}}))(i),children:i.length})}),t.length>0&&l.jsx(k,{title:A({en:`Decline ${t.length} selected invites`,vi:`Từ chối ${t.length} lời mời được chọn`}),children:l.jsx(B,{title:A({en:`Decline ${t.length} invites`,vi:`Từ chối ${t.length} lời mời`}),description:A({en:`Are your sure want to decline ${t.length} invites?`,vi:`Bản có chãc muốn từ chối ${t.length} lời mời?`}),onConfirm:()=>(async e=>Y({data:e,key:"Pages:onClickDeclineSelectedInvites",actionFn:J,loadingText:()=>A({en:"Removing invite... ",vi:"Đang từ chối lời mời... "}),successText:()=>A({en:"Declined invites done: ",vi:"Từ chối lời mời xong: "}),successDescItem:e=>e.name,confirmProps:{title:A({en:"Remove invite "+e.length+" pages?",vi:"Từ chối lời mời "+e.length+" trang?"})}}))(t),okText:A({en:"Yes",vi:"Có"}),cancelText:A({en:"No",vi:"Huỷ"}),children:l.jsx(s,{danger:!0,disabled:t.length<=0,icon:l.jsx("i",{className:"fa-solid fa-xmark"}),children:t.length})})}),l.jsx(U,{name:"Pages",text:z.map((e=>e.name)).join(" ")}),l.jsx(k,{title:A({en:"Manage on Facebook",vi:"Quản lý trên Facebook"}),children:l.jsx(s,{onClick:()=>{y("Pages:openManageOnFacebook"),window.open("https://www.facebook.com/me/allactivity?category_key=LIKEDINTERESTS","_blank")},icon:l.jsx("i",{className:"fa-solid fa-up-right-from-square"})})})]})},size:"small",searchable:!0,selectable:!0,onSearchRow:(e,n)=>c(e,n?.name+n?.id),keyExtractor:e=>e?.id+e?.userType})})}))}}}));
