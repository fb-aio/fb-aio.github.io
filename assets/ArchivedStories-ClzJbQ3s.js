const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./ArchivedStoryViewer-BDhGHfon.js","./index-25lgxwTR.js","./index-Bp33I4Y9.css","./MyApp-BCKP8LFO.js","./StoryViewers-b5t9YPDV.js","./Collection-ihu1FPD2.js","./index-DPZYrWsx.js","./file-download-sBK_g5b2.js","./react-hotkeys-hook.esm-CjLOc5it.js","./index-DGDklKcF.js","./index-QHHrTb2x.js","./index-DMTNeTna.js","./Dropdown-BhiPm_AR.js","./PurePanel-TArR1aIo.js","./move-COjRVz6r.js","./index-DlUcIAF1.js","./TextArea-B5svcMVp.js","./Input-sds29n1a.js","./SearchOutlined-_TWJ6BuU.js","./index-DoFohRRP.js","./Pagination-BIMcV1_a.js","./index-CcoCtLua.js","./index-BSBZEbmP.js","./DownOutlined-BNBUPour.js","./row-CvEPtL8s.js","./col-Dokdf0Ix.js","./index-B6QjRA0B.js","./stories-Cr1rV3C0.js","./index-C034AHcW.js","./VideoWithMuted-BYBL2F3m.js","./index-CxOa4bTs.js"])))=>i.map(i=>d[i]);
import{aU as S,r as p,aX as o,bf as k,aV as T,b0 as c,aW as _,aS as A,bn as C,b8 as D}from"./index-25lgxwTR.js";import N from"./Collection-ihu1FPD2.js";import{u as E,t as F,I,S as d,a as X,m as B,s as K}from"./MyApp-BCKP8LFO.js";import{d as L,e as V,f as R}from"./stories-Cr1rV3C0.js";import{u as M}from"./useAction-DaAnhpou.js";import{u as O}from"./useDevMode-xd5fFIBv.js";import{L as P}from"./index-DoFohRRP.js";import{T as m}from"./index-CcoCtLua.js";import"./index-DPZYrWsx.js";import"./file-download-sBK_g5b2.js";import"./react-hotkeys-hook.esm-CjLOc5it.js";import"./index-DGDklKcF.js";import"./index-QHHrTb2x.js";import"./index-DMTNeTna.js";import"./Dropdown-BhiPm_AR.js";import"./PurePanel-TArR1aIo.js";import"./move-COjRVz6r.js";import"./index-DlUcIAF1.js";import"./TextArea-B5svcMVp.js";import"./Input-sds29n1a.js";import"./SearchOutlined-_TWJ6BuU.js";import"./index-B6QjRA0B.js";import"./Pagination-BIMcV1_a.js";import"./index-BSBZEbmP.js";import"./DownOutlined-BNBUPour.js";import"./row-CvEPtL8s.js";import"./col-Dokdf0Ix.js";import"./Collapse-D8pIGWh1.js";const Y=p.lazy(()=>D(()=>import("./ArchivedStoryViewer-BDhGHfon.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30]),import.meta.url));function ye(){const{ti:r}=S(),{message:h}=E(),{onClickAction:f,onClickBulkActions:g}=M(),{devMode:u}=O();p.useEffect(()=>{F("ArchivedStories:onLoad")},[]);const x=async(e,s)=>{var t;return await L(s||((t=e==null?void 0:e[e.length-1])==null?void 0:t.cursor)||"")},l=async(e,s,i=!1)=>f({record:e,id:e.id,key:"ArchivedStories.deleteStory",actionFn:()=>u?A(1e3):R(e.id),loadingText:()=>r({en:"Deleting story...",vi:"Đang xóa story..."})+e.creation_time,successText:()=>r({en:"Story deleted. ",vi:"Đã xóa story. "})+e.creation_time,failedText:()=>r({en:"Failed to delete story. ",vi:"Chưa xóa được story. "})+e.creation_time,onSuccess:()=>{s(t=>C(t,a=>{const n=a.find(w=>w.id===e.id);return n&&(n.deleted=!0),a}))},needConfirm:i,confirmProps:{title:r({en:"Delete this story?",vi:"Xoá story này?"})}}),y=async(e,s)=>{const i=e.filter(t=>!t.deleted);return console.log(i),i.length?g({key:"ArchivedStories.deleteSelectedStories",data:i,actionFn:t=>l(t,s,!1),loadingText:()=>r({en:"Deleting stories...",vi:"Đang xóa story..."}),successText:()=>r({en:"Stories deleted!",vi:"Xóa story xong!"}),confirmProps:{title:r({en:"Delete "+i.length+" stories?",vi:"Xoá "+i.length+" story?"}),text:r({en:"This action can not be undo",vi:"Không thể hoàn tác"})}}):h.error(r({en:"There is no story to delete",vi:"Không còn story nào cần xoá"}))},v=(e,s,i)=>{const t=e.deleted;return o.jsxs(P.Item,{className:"show-on-hover-trigger",children:[o.jsx(I,{src:e.thumbnail,style:{width:160,height:270,borderRadius:10,objectFit:"cover"},preview:t?!1:{destroyOnClose:!0,toolbarRender:()=>null,imageRender:()=>o.jsx(Y,{story:e})}}),o.jsxs(d,{direction:"vertical",style:{background:"linear-gradient(0deg, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0) 100%)",position:"absolute",bottom:0,left:0,width:"100%",padding:"5px 10px",paddingTop:"50px",pointerEvents:"none"},children:[t&&o.jsx(m.Text,{style:{color:"red",fontWeight:"bold",backgroundColor:"#3339",padding:5,fontSize:"1.2em",width:"100%"},children:r({en:"DELETED",vi:"ĐÃ XOÁ"})}),o.jsxs(m.Text,{style:{color:"#ccc"},children:[o.jsxs("span",{children:[o.jsx("i",{className:"fa fa-eye"})," ",e.seen_count]}),o.jsx("br",{}),o.jsxs("span",{children:[o.jsx("i",{className:"fa fa-clock"})," ",T(new Date().getTime()-new Date(e.creation_time).getTime())]}),o.jsx("br",{}),k(new Date(e.creation_time),r({en:"en-US",vi:"vi-VN"}))]})]}),!t&&o.jsxs(d,{className:"show-on-hover-item",style:{position:"absolute",top:10,right:10},size:3,children:[o.jsx(c,{danger:!0,type:"default",icon:o.jsx("i",{className:"fa-solid fa-trash-can"}),onClick:()=>l(e,i,!0)}),o.jsx(c,{type:"default",icon:o.jsx("i",{className:"fa-solid fa-up-right-from-square"}),target:"_blank",href:X("stories/?card_id="+e.id)})]})]})},b=async e=>{const s="ArchivedStoryViewer.stories."+e.creation_time,i=B(s)||await V({creationTime:e.creation_time});K(s,i);const t=i.find(n=>n.id===e.id),a=_(new Date(e.creation_time));return[{url:(t==null?void 0:t.video)||(t==null?void 0:t.image)||"",name:a+(t!=null&&t.video?".mp4":".jpg")},{url:(t==null?void 0:t.image_background)||"",name:a+"_bg.jpg"}].filter(n=>n==null?void 0:n.url)},j=e=>o.jsx(c,{onClick:()=>{window.open("https://www.facebook.com/me/allactivity?log_filter=archivedstories","_blank")},icon:o.jsx("i",{className:"fa fa-external-link-alt"}),children:r({vi:"Xem trên Facebook",en:"View on Facebook"})},"view-fb");return o.jsx(N,{collectionName:"Archived Stories",fetchNext:x,renderItem:v,downloadItem:b,headerButtons:j,getItemCursor:e=>e==null?void 0:e.cursor,rowKey:e=>e.id,downloadOptions:[{key:"delete-story",labelFn:e=>{const s=e.filter(i=>!i.deleted).length;return r({en:"🗑️ Delete ".concat(s," story"),vi:"🗑️ Xoá ".concat(s," story")})},onClick:y}]})}export{ye as default};
