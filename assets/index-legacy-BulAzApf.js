System.register(["./index-legacy-B3RKK3aZ.js","./dayjs.min-legacy-CafwYQqX.js","./useForceStop-legacy-NUpT0Gds.js","./MyApp-legacy-acuBaUwA.js","./ExportButton-legacy-gAA_w6jo.js","./pages-legacy-DwYnT93b.js","./WordStatisticButton-legacy-C5wzlSLa.js","./MyTable-legacy-7CnvfFeK.js","./useAction-legacy-5SqyaSo0.js","./useDevMode-legacy-BeilK7RQ.js","./Screen-legacy-CEjXNMxi.js","./index-legacy-BAFLIGd1.js","./file-download-legacy-BlZuZHvS.js","./index-legacy-BezdVW9X.js","./PurePanel-legacy-Bu61VAyB.js","./move-legacy-Dl6tC53j.js","./BadgeWrapper-legacy-DBNr72k-.js","./index-legacy-ClhN670O.js","./index-legacy-CWSwoirD.js","./index-legacy-eXHedfAh.js","./DownOutlined-legacy-SEK2xiK7.js","./index-legacy-Diiq_sdW.js","./Table-legacy-BBFpu5d5.js","./List-legacy-DSd61bXf.js","./index-legacy-CBGy1KZ7.js","./index-legacy-CMYVg5W-.js","./index-legacy-CbVFiRq8.js","./index-legacy-DuSPHPj4.js","./useBreakpoint-legacy-Dv1rFSLS.js","./useForceUpdate-legacy-qW0w4eeM.js","./responsiveObserver-legacy-DedImkrC.js","./Pagination-legacy-DzJPBKps.js","./row-legacy-C-856r4Z.js","./col-legacy-CetQGZ1I.js","./index-legacy-BNGe0Stf.js"],(function(e,n){"use strict";var i,t,a,l,s,c,o,r,d,g,h,u,m,x,y,p,f,v,j,k,T,b,D,I,w,N,L,U,P,C,E,F,S,B;return{setters:[e=>{i=e.bs,t=e.b6,a=e.r,l=e.b8,s=e.am,c=e.bt,o=e.b2,r=e.bx,d=e.bA,g=e.bw},e=>{h=e.d},e=>{u=e.u},e=>{m=e.u,x=e.i,y=e.t,p=e.k,f=e.S,v=e.d,j=e.c,k=e.j,T=e.T},e=>{b=e.E},e=>{D=e.g,I=e.U,w=e.a,N=e.u,L=e.b,U=e.d},e=>{P=e.W},e=>{C=e.default},e=>{E=e.u},e=>{F=e.u},e=>{S=e.S},e=>{B=e.P},null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],execute:function(){e("default",(function(){const{devMode:e}=F(),{message:n}=m(),M=i(),{ti:A}=t(),{onClickAction:Y,onClickBulkActions:_}=E(),R=u(),[$,O]=x("Pages.data",[]),[W,H]=x("Pages.finished",!1),[K,V]=a.useState(!1),z=a.useMemo((()=>$.map(((e,n)=>({...e,index:n+1})))),[$]);a.useEffect((()=>{W||q(!1)}),[]);const q=async(e=!1)=>{if(K&&!e)return;const i=R.start(),t=e?[]:[...z],a=new Set(t.map((e=>e.id))),l="Pages:onReload";y(l),V(!0),H(!1);try{n.loading({key:l,content:A({en:"Loading invited pages...",vi:"Đang tải trang được mời..."}),duration:0});const s=await D(),c=s?.filter((e=>!a.has(e.id)));c?.length&&(t.push(...c),O([...t]));const o=t?.filter((e=>e.userType!==I.INVITED)).pop();let r=e?"":o?.cursor;for(;!i.value();){n.loading({key:l,content:A({en:"Loading pages...",vi:"Đang tải trang..."})+t.length,duration:0});const e=await w(r),i=e?.filter((e=>!a.has(e.id)));if(e.forEach((e=>a.add(e.id))),!i?.length)break;t.push(...i),r=t?.[t?.length-1]?.cursor,O([...t])}n.success({key:l,content:(i.value()?A({en:"Load pages stopped ",vi:"Dừng tải trang "}):A({en:"Load pages completed ",vi:"Tải xong trang "}))+t.length}),H(!i.value())}catch(s){n.error({content:A({en:"Failed to load pages: ",vi:"Lỗi tải trang: "})+s.message})}finally{V(!1)}},Q=(n,i=!1)=>Y({record:n,id:n.id,key:"Pages:onClickUnlikePage",actionFn:()=>e?o(1e3):N(n.id),loadingText:()=>A({en:"Unliking page... ",vi:"Đang bỏ thích trang..."})+n.name,successText:()=>A({en:"Unliked page ",vi:"Đã bỏ thích trang "})+n.name,failedText:()=>A({en:"Failed to unlike page ",vi:"Lỗi bỏ thích trang "})+n.name,onSuccess:()=>{O((e=>r(e,(e=>{const i=e.findIndex((e=>e.id==n.id));return e[i].userType=I.UNLIKED,e}))))},needConfirm:i,confirmProps:{title:A({en:"Unlike ",vi:"Bỏ thích "})+n.name+"?"}}),G=(n,i=!1)=>Y({record:n,id:n.id,key:"Pages:onClickUnfollowPage",actionFn:()=>e?o(1e3):L(n.id),loadingText:()=>A({en:"Unfollowing page... ",vi:"Đang bỏ theo dõi trang..."})+n.name,successText:()=>A({en:"Unfollowed page ",vi:"Đã bỏ theo dõi trang "})+n.name,failedText:()=>A({en:"Failed to unfollow page",vi:"Lỗi bỏ theo dõi trang"}),onSuccess:()=>{O((e=>r(e,(e=>{const i=e.findIndex((e=>e.id==n.id));return e[i].userType=I.UNFOLLOWED,e}))))},needConfirm:i,confirmProps:{title:A({en:"Unfollow ",vi:"Bỏ theo dõi "})+n.name+"?"}}),J=async(n,i=!1)=>Y({record:n,id:n.id,key:"Pages:onClickDeclineInvite",actionFn:()=>e?o(1e3):U(n.inviteId),loadingText:()=>A({en:"Declining invite... ",vi:"Đang từ chối lời mời..."})+n.name,successText:()=>A({en:"Declined invite ",vi:"Đã từ chối lời mời "})+n.name,failedText:()=>A({en:"Failed to remove invite",vi:"Lỗi từ chối lời mời"}),onSuccess:()=>{O((e=>r(e,(e=>{const i=e.findIndex((e=>e.id==n.id));return e[i].userType=I.DECLINED,e}))))},needConfirm:i,confirmProps:{title:A({en:"Decline ",vi:"Từ chối lời mời "})+n.name+"?"}}),X=e=>{switch(e){case I.ADMIN:return{color:"success",text:A({en:"Admin",vi:"Admin"})};case I.LIKED:return{color:"default",text:A({en:"Liked",vi:"Đã thích"})};case I.INVITED:return{color:"warning",text:A({en:"Invited",vi:"Lời mời"})};case I.DECLINED:return{color:"error",text:A({en:"Declined",vi:"Từ chối"})};case I.UNLIKED:return{color:"error",text:A({en:"Unliked",vi:"Bỏ thích"})};case I.UNFOLLOWED:return{color:"error",text:A({en:"Unfollowed",vi:"Bỏ theo dõi"})};default:return{color:"default",text:"?"}}},Z=a.useMemo((()=>Array.from(z.map((e=>e.category)).reduce(((e,n)=>{let i=e.get(n)||0;return e.set(n,++i)}),new Map).entries()).sort(((e,n)=>n[1]-e[1])).map((([e,n])=>({text:e+" ("+n+")",value:e})))),[z]),ee=[{title:"#",key:"index",dataIndex:"index",sorter:(e,n)=>e.index-n.index,width:60},{title:A({en:"Image",vi:"Ảnh"}),key:"image",dataIndex:"image",render:(e,n,i)=>l.jsx(p,{src:n.image,width:50,height:50,style:{objectFit:"contain",borderRadius:5}})},{title:A({en:"Page",vi:"Trang"}),key:"name",dataIndex:"name",render:(e,n,i)=>l.jsxs(f,{direction:"vertical",size:0,style:{maxWidth:300},children:[l.jsx(v.Link,{href:n.url,target:"_blank",children:l.jsx("b",{children:n.name||"???"})}),l.jsx("span",{style:{opacity:.5},children:n.id})]}),sorter:(e,n)=>e.name.localeCompare(n.name)},{title:A({en:"Category",vi:"Danh mục"})+" ("+Z.length+")",key:"category",dataIndex:"category",filters:Z,onFilter:(e,n)=>n.category==e,filterSearch:!0},{title:A({en:"Type",vi:"Loại"}),key:"type",dataIndex:"userType",render:(e,n,i)=>{const{color:t,text:a}=X(n.userType);return n.inviterId?l.jsxs(f,{children:[l.jsx(j,{color:t,children:a}),l.jsx(p,{src:n.inviterAvatar,width:40,height:40,style:{borderRadius:5}}),l.jsxs(f,{direction:"vertical",size:0,children:[l.jsx(v.Link,{href:k(n.inviterId),target:"_blank",children:l.jsx("b",{children:n.inviterName})}),l.jsx("span",{style:{opacity:.5},children:n.inviterId})]})]}):l.jsx(j,{color:t,children:a})},filters:Object.values(I).map((e=>{const{text:n}=X(e);return{text:n+" ("+z.filter((n=>n.userType==e)).length+")",value:e}})),onFilter:(e,n)=>n.userType==e,align:"left"},{title:A({en:"Action",vi:"Hành động"}),key:"action",render:(e,n,i)=>l.jsxs(f.Compact,{style:{minWidth:30},children:[n.userType===I.LIKED||n.userType===I.ADMIN?l.jsxs(l.Fragment,{children:[n.canLike?l.jsx(T,{title:A({en:"Unlike page",vi:"Bỏ thích"}),children:l.jsx(s,{onClick:()=>Q(n,!0),icon:l.jsx("i",{className:"fa-solid fa-thumbs-down"})})}):null,l.jsx(T,{title:A({en:"Unfollow page",vi:"Bỏ theo dõi"}),children:l.jsx(s,{onClick:()=>G(n,!0),icon:l.jsx("i",{className:"fa-solid fa-eye-slash"})})})]}):null,n.userType===I.INVITED?l.jsx(T,{title:A({en:"Decline invite",vi:"Từ chối"}),children:l.jsx(s,{danger:!0,onClick:()=>J(n,!0),icon:l.jsx("i",{className:"fa-solid fa-xmark"})})}):null,l.jsx(T,{title:A({en:"Bulk Downloader",vi:"Tải hàng loạt"}),children:l.jsx(s,{type:"default",onClick:()=>(e=>{M("/bulk-downloader",{state:{targetId:e.id,platform:d.Facebook}})})(n),icon:l.jsx("i",{className:"fa-solid fa-download"})})})]}),width:100,align:"right"}];return l.jsx(S,{title:A({en:"Pages manager",vi:"Quản lý trang"}),titleSuffix:l.jsx(j,{style:{marginLeft:"10px",fontWeight:"bold",color:"#888"},children:z.length}),children:l.jsx(C,{data:z,columns:ee.map(((e,n)=>({...e,index:n}))),renderTitle:e=>{const n=e?.length?[...e]:[...z],i=n?.map((e=>z.find((n=>n.id===e.id))))?.filter((e=>e?.userType===I.LIKED||e?.userType===I.ADMIN))||[],t=i?.filter((e=>e?.canLike))||[],a=n?.map((e=>z.find((n=>n.id===e.id))))?.filter((e=>e?.userType===I.INVITED))||[];return l.jsxs(l.Fragment,{children:[l.jsx(T,{color:"red",title:A({en:"WARNING: Reload many times may cause temporarily blocked by facebook",vi:"LƯU Ý: Tải lại nhiều lần có thể bị facebook chặn tạm thời"}),children:l.jsx(s,{type:"primary",icon:K?l.jsx("i",{className:"fa-solid fa-rotate-right fa-spin"}):l.jsx("i",{className:"fa-solid fa-rotate-right"}),onClick:()=>q(!0),children:A({en:"Reload",vi:"Tải lại"})})}),l.jsx(b,{data:n,options:[{key:"id",label:".txt (page id)",prepareData:e=>({fileName:"your_pages_id"+h().format("YYYY-MM-DD-HHmmss")+".txt",data:e?.map((e=>e.id)).join("\n")})},{key:"id_name",label:".csv (id+name)",prepareData:e=>({fileName:"my_liked_pages_id_name.csv",data:g(e.map((e=>({uid:e.id,name:e.name}))))})},{key:"json",label:".json",prepareData:e=>({fileName:"your_pages"+h().format("YYYY-MM-DD-HHmmss")+".json",data:JSON.stringify(e,null,4)})},{key:"csv",label:".csv",prepareData:e=>({fileName:"your_pages"+h().format("YYYY-MM-DD-HHmmss")+".csv",data:g(e)})}]}),l.jsx(T,{title:A({en:`Unlike ${t.length} selected pages`,vi:`Bỏ thích ${t.length} trang được chọn`}),children:l.jsx(s,{danger:!0,disabled:t.length<=0,icon:l.jsx("i",{className:"fa-solid fa-thumbs-down"}),onClick:()=>(async e=>_({data:e,key:"Pages:onClickUnlikeSelectedPages",actionFn:Q,loadingText:()=>A({en:"Unliking pages... ",vi:"Đang bỏ thích trang... "}),successText:()=>A({en:"Unliked pages done: ",vi:"Bỏ thích trang xong: "}),successDescItem:e=>e.name,confirmProps:{title:A({en:"Unlike "+e.length+" pages?",vi:"Bỏ thích "+e.length+" trang?"})}}))(t),children:t.length})}),l.jsx(T,{title:A({en:`Unfollow ${i.length} selected pages`,vi:`Bỏ theo dõi ${i.length} trang được chọn`}),children:l.jsx(s,{danger:!0,disabled:i.length<=0,icon:l.jsx("i",{className:"fa-solid fa-eye-slash"}),onClick:()=>(async e=>_({data:e,key:"Pages:onClickUnfollowSelectedPages",actionFn:G,loadingText:()=>A({en:"Unfollowing pages... ",vi:"Đang bỏ theo dõi trang... "}),successText:()=>A({en:"Unfollowed pages done: ",vi:"Bỏ theo dõi trang xong: "}),successDescItem:e=>e.name,confirmProps:{title:A({en:"Unfollow "+e.length+" pages?",vi:"Bỏ theo dõi "+e.length+" trang?"})}}))(i),children:i.length})}),a.length>0&&l.jsx(T,{title:A({en:`Decline ${a.length} selected invites`,vi:`Từ chối ${a.length} lời mời được chọn`}),children:l.jsx(B,{title:A({en:`Decline ${a.length} invites`,vi:`Từ chối ${a.length} lời mời`}),description:A({en:`Are your sure want to decline ${a.length} invites?`,vi:`Bản có chãc muốn từ chối ${a.length} lời mời?`}),onConfirm:()=>(async e=>_({data:e,key:"Pages:onClickDeclineSelectedInvites",actionFn:J,loadingText:()=>A({en:"Removing invite... ",vi:"Đang từ chối lời mời... "}),successText:()=>A({en:"Declined invites done: ",vi:"Từ chối lời mời xong: "}),successDescItem:e=>e.name,confirmProps:{title:A({en:"Remove invite "+e.length+" pages?",vi:"Từ chối lời mời "+e.length+" trang?"})}}))(a),okText:A({en:"Yes",vi:"Có"}),cancelText:A({en:"No",vi:"Huỷ"}),children:l.jsx(s,{danger:!0,disabled:a.length<=0,icon:l.jsx("i",{className:"fa-solid fa-xmark"}),children:a.length})})}),l.jsx(P,{name:"Pages",text:z.map((e=>e.name)).join(" ")}),l.jsx(T,{title:A({en:"Manage on Facebook",vi:"Quản lý trên Facebook"}),children:l.jsx(s,{onClick:()=>{y("Pages:openManageOnFacebook"),window.open("https://www.facebook.com/me/allactivity?category_key=LIKEDINTERESTS","_blank")},icon:l.jsx("i",{className:"fa-solid fa-up-right-from-square"})})})]})},size:"small",searchable:!0,selectable:!0,onSearchRow:(e,n)=>c(e,n?.name+n?.id),keyExtractor:e=>e?.id+e?.userType})})}))}}}));
