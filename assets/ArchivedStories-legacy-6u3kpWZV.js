System.register(["./index-legacy-em8lsdjG.js","./Collection-legacy-BNDpRbTt.js","./MyApp-legacy-eQhw2hld.js","./stories-legacy-DSG4Zfsw.js","./useAction-legacy-DuONo0x1.js","./useDevMode-legacy-BYIeeU0T.js","./index-legacy-3HboAByW.js","./index-legacy-DQBtYbBr.js","./index-legacy-UV62jjIq.js","./index-legacy-Biw8AYTn.js","./file-download-legacy-BC7ShJxz.js","./react-hotkeys-hook.esm-legacy-CJrSHc0K.js","./index-legacy-BsRfKXoc.js","./index-legacy-BLxQvwtk.js","./index-legacy-CPY_9gVV.js","./Dropdown-legacy-CV5NSkUR.js","./PurePanel-legacy-YekLkw9D.js","./move-legacy-B0NLBr0J.js","./index-legacy-CQy5lX3g.js","./TextArea-legacy-CEW8Buwg.js","./EyeOutlined-legacy-DNGDLUHf.js","./SearchOutlined-legacy-DUbN1gtD.js","./index-legacy-DjDDmc9V.js","./Pagination-legacy-BcBm3qH4.js","./useBreakpoint-legacy-yiP9kW6m.js","./responsiveObserver-legacy-BmkofPmJ.js","./index-legacy-BPJKA0z7.js","./DownOutlined-legacy-BamLaL4c.js","./row-legacy-B8b_N6Zy.js","./Collapse-legacy-L-faHjfm.js","./addEventListener-legacy-DmWhHDoC.js"],(function(e,t){"use strict";var n,i,l,o,s,a,r,c,d,g,y,u,j,x,h,m,f,v,p,w,b,k,S,T,_;return{setters:[e=>{n=e.aK,i=e.r,l=e.aM,o=e.aX,s=e.aL,a=e.b5,r=e.aQ,c=e.aJ,d=e.aG,g=e.bd},e=>{y=e.default},e=>{u=e.u,j=e.t,x=e.S,h=e.a,m=e.l,f=e.s},e=>{v=e.d,p=e.e,w=e.f},e=>{b=e.u},e=>{k=e.u},e=>{S=e.L},e=>{T=e.I},e=>{_=e.T},null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],execute:function(){e("default",(function(){const{ti:e}=n(),{message:t,notification:o}=u(),{onClickAction:C,onClickBulkActions:A}=b(),{devMode:N}=k();i.useEffect((()=>{j("ArchivedStories:onLoad")}),[]);const O=async(t,n,i=!1)=>C({record:t,id:t.id,key:"ArchivedStories.deleteStory",actionFn:()=>N?d(1e3):w(t.id),loadingText:()=>e({en:"Deleting story...",vi:"Đang xóa story..."})+t.creation_time,successText:()=>e({en:"Story deleted. ",vi:"Đã xóa story. "})+t.creation_time,failedText:()=>e({en:"Failed to delete story. ",vi:"Chưa xóa được story. "})+t.creation_time,onSuccess:()=>{n((e=>g(e,(e=>{const n=e.find((e=>e.id===t.id));return n&&(n.deleted=!0),e}))))},needConfirm:i,confirmProps:{title:e({en:"Delete this story?",vi:"Xoá story này?"})}});return l.jsx(y,{collectionName:"Archived Stories",fetchNext:async(e,t)=>await v(t||e?.[e.length-1]?.cursor||""),renderItem:(t,n,i)=>{const o=t.deleted;return l.jsxs(S.Item,{className:"show-on-hover-trigger",children:[l.jsx(T,{src:t.thumbnail,style:{width:160,height:270,borderRadius:10,objectFit:"cover"},preview:!o&&{destroyOnClose:!0,toolbarRender:()=>null,imageRender:()=>l.jsx(D,{story:t})}}),l.jsxs(x,{direction:"vertical",style:{background:"linear-gradient(0deg, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0) 100%)",position:"absolute",bottom:0,left:0,width:"100%",padding:"5px 10px",paddingTop:"50px",pointerEvents:"none"},children:[o&&l.jsx(_.Text,{style:{color:"red",fontWeight:"bold",backgroundColor:"#3339",padding:5,fontSize:"1.2em",width:"100%"},children:e({en:"DELETED",vi:"ĐÃ XOÁ"})}),l.jsxs(_.Text,{style:{color:"#ccc"},children:[l.jsxs("span",{children:[l.jsx("i",{className:"fa fa-eye"})," ",t.seen_count]}),l.jsx("br",{}),l.jsxs("span",{children:[l.jsx("i",{className:"fa fa-clock"})," ",s((new Date).getTime()-new Date(t.creation_time).getTime())]}),l.jsx("br",{}),a(new Date(t.creation_time),e({en:"en-US",vi:"vi-VN"}))]})]}),!o&&l.jsxs(x,{className:"show-on-hover-item",style:{position:"absolute",top:10,right:10},size:3,children:[l.jsx(r,{danger:!0,type:"default",icon:l.jsx("i",{className:"fa-solid fa-trash-can"}),onClick:()=>O(t,i,!0)}),l.jsx(r,{type:"default",icon:l.jsx("i",{className:"fa-solid fa-up-right-from-square"}),target:"_blank",href:h("stories/?card_id="+t.id)})]})]})},downloadItem:async e=>{const t="ArchivedStoryViewer.stories."+e.creation_time,n=m(t)||await p({creationTime:e.creation_time});f(t,n);const i=n.find((t=>t.id===e.id)),l=c(new Date(e.creation_time));return[{url:i?.video||i?.image||"",name:l+(i?.video?".mp4":".jpg")},{url:i?.image_background||"",name:l+"_bg.jpg"}].filter((e=>e?.url))},headerButtons:t=>l.jsx(r,{onClick:()=>{window.open("https://www.facebook.com/me/allactivity?log_filter=archivedstories","_blank")},icon:l.jsx("i",{className:"fa fa-external-link-alt"}),children:e({vi:"Xem trên Facebook",en:"View on Facebook"})},"view-fb"),getItemCursor:e=>e?.cursor,rowKey:e=>e.id,downloadOptions:[{key:"delete-story",labelFn:t=>{const n=t.filter((e=>!e.deleted)).length;return e({en:`🗑️ Delete ${n} story`,vi:`🗑️ Xoá ${n} story`})},onClick:async(n,i)=>{const l=n.filter((e=>!e.deleted));return console.log(l),l.length?A({key:"ArchivedStories.deleteSelectedStories",data:l,actionFn:e=>O(e,i,!1),loadingText:()=>e({en:"Deleting stories...",vi:"Đang xóa story..."}),successText:()=>e({en:"Stories deleted!",vi:"Xóa story xong!"}),confirmProps:{title:e({en:"Delete "+l.length+" stories?",vi:"Xoá "+l.length+" story?"}),text:e({en:"This action can not be undo",vi:"Không thể hoàn tác"})}}):t.error(e({en:"There is no story to delete",vi:"Không còn story nào cần xoá"}))}}]})}));const D=i.lazy((()=>o((()=>t.import("./ArchivedStoryViewer-legacy-KYZHMbfU.js")),void 0,t.meta.url)))}}}));
