const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./ArchivedStoryViewer-D5-I9bSt.js","./index-wbIphP0C.js","./index-DFWeXkJl.css","./MyApp-njhOwsK5.js","./StoryViewers-BnF5lg56.js","./Collection-B84MYYN0.js","./index-CEfgdh1o.js","./file-download-D5jJu5kT.js","./react-hotkeys-hook.esm-BTAORnXw.js","./index-B3Gx5yAQ.js","./index-CKlEhchA.js","./index-BhxZmaJn.js","./index-BJ_cfilr.js","./PurePanel-D-rOXPVf.js","./move-pmQE-KxM.js","./index-s3q_FkaZ.js","./Pagination-0Ohn2LYf.js","./useBreakpoint-DzRoOrnh.js","./useForceUpdate-D5RHpHIP.js","./responsiveObserver-BQjJBraY.js","./index-BQOyVFxl.js","./List-xxph-gd1.js","./DownOutlined-Bwe6hCgw.js","./row-DdHEAPVK.js","./col-DRzNhW_D.js","./index-CT0-xXd7.js","./stories-DZxUUMRf.js","./index-CYf3jpJc.js","./VideoWithMuted-Cmj6LkIN.js"])))=>i.map(i=>d[i]);
import{b6 as S,r as p,b8 as o,bd as k,b7 as T,br as _,am as c,b5 as A,b2 as C,bx as D}from"./index-wbIphP0C.js";import N from"./Collection-B84MYYN0.js";import{u as E,t as F,k as I,S as d,d as m,j as B,n as K,s as L}from"./MyApp-njhOwsK5.js";import{d as X,e as R,f as V}from"./stories-DZxUUMRf.js";import{u as M}from"./useAction-6wnLzvhj.js";import{u as O}from"./useDevMode-BWmW5JYk.js";import{L as P}from"./index-s3q_FkaZ.js";import"./index-CEfgdh1o.js";import"./file-download-D5jJu5kT.js";import"./react-hotkeys-hook.esm-BTAORnXw.js";import"./index-B3Gx5yAQ.js";import"./index-CKlEhchA.js";import"./index-BhxZmaJn.js";import"./index-BJ_cfilr.js";import"./PurePanel-D-rOXPVf.js";import"./move-pmQE-KxM.js";import"./index-CT0-xXd7.js";import"./Pagination-0Ohn2LYf.js";import"./useBreakpoint-DzRoOrnh.js";import"./useForceUpdate-D5RHpHIP.js";import"./responsiveObserver-BQjJBraY.js";import"./index-BQOyVFxl.js";import"./List-xxph-gd1.js";import"./DownOutlined-Bwe6hCgw.js";import"./row-DdHEAPVK.js";import"./col-DRzNhW_D.js";const Y=p.lazy(()=>k(()=>import("./ArchivedStoryViewer-D5-I9bSt.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28]),import.meta.url));function xe(){const{ti:r}=S(),{message:h,notification:z}=E(),{onClickAction:f,onClickBulkActions:g}=M(),{devMode:u}=O();p.useEffect(()=>{F("ArchivedStories:onLoad")},[]);const x=async(e,s)=>{var t;return await X(s||((t=e==null?void 0:e[e.length-1])==null?void 0:t.cursor)||"")},l=async(e,s,i=!1)=>f({record:e,id:e.id,key:"ArchivedStories.deleteStory",actionFn:()=>u?C(1e3):V(e.id),loadingText:()=>r({en:"Deleting story...",vi:"Đang xóa story..."})+e.creation_time,successText:()=>r({en:"Story deleted. ",vi:"Đã xóa story. "})+e.creation_time,failedText:()=>r({en:"Failed to delete story. ",vi:"Chưa xóa được story. "})+e.creation_time,onSuccess:()=>{s(t=>D(t,a=>{const n=a.find(w=>w.id===e.id);return n&&(n.deleted=!0),a}))},needConfirm:i,confirmProps:{title:r({en:"Delete this story?",vi:"Xoá story này?"})}}),y=async(e,s)=>{const i=e.filter(t=>!t.deleted);return console.log(i),i.length?g({key:"ArchivedStories.deleteSelectedStories",data:i,actionFn:t=>l(t,s,!1),loadingText:()=>r({en:"Deleting stories...",vi:"Đang xóa story..."}),successText:()=>r({en:"Stories deleted!",vi:"Xóa story xong!"}),confirmProps:{title:r({en:"Delete "+i.length+" stories?",vi:"Xoá "+i.length+" story?"}),text:r({en:"This action can not be undo",vi:"Không thể hoàn tác"})}}):h.error(r({en:"There is no story to delete",vi:"Không còn story nào cần xoá"}))},v=(e,s,i)=>{const t=e.deleted;return o.jsxs(P.Item,{className:"show-on-hover-trigger",children:[o.jsx(I,{src:e.thumbnail,style:{width:160,height:270,borderRadius:10,objectFit:"cover"},preview:t?!1:{destroyOnClose:!0,toolbarRender:()=>null,imageRender:()=>o.jsx(Y,{story:e})}}),o.jsxs(d,{direction:"vertical",style:{background:"linear-gradient(0deg, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0) 100%)",position:"absolute",bottom:0,left:0,width:"100%",padding:"5px 10px",paddingTop:"50px",pointerEvents:"none"},children:[t&&o.jsx(m.Text,{style:{color:"red",fontWeight:"bold",backgroundColor:"#3339",padding:5,fontSize:"1.2em",width:"100%"},children:r({en:"DELETED",vi:"ĐÃ XOÁ"})}),o.jsxs(m.Text,{style:{color:"#ccc"},children:[o.jsxs("span",{children:[o.jsx("i",{className:"fa fa-eye"})," ",e.seen_count]}),o.jsx("br",{}),o.jsxs("span",{children:[o.jsx("i",{className:"fa fa-clock"})," ",T(new Date().getTime()-new Date(e.creation_time).getTime())]}),o.jsx("br",{}),_(new Date(e.creation_time),r({en:"en-US",vi:"vi-VN"}))]})]}),!t&&o.jsxs(d,{className:"show-on-hover-item",style:{position:"absolute",top:10,right:10},size:3,children:[o.jsx(c,{danger:!0,type:"default",icon:o.jsx("i",{className:"fa-solid fa-trash-can"}),onClick:()=>l(e,i,!0)}),o.jsx(c,{type:"default",icon:o.jsx("i",{className:"fa-solid fa-up-right-from-square"}),target:"_blank",href:B("stories/?card_id="+e.id)})]})]})},b=async e=>{const s="ArchivedStoryViewer.stories."+e.creation_time,i=K(s)||await R({creationTime:e.creation_time});L(s,i);const t=i.find(n=>n.id===e.id),a=A(new Date(e.creation_time));return[{url:(t==null?void 0:t.video)||(t==null?void 0:t.image)||"",name:a+(t!=null&&t.video?".mp4":".jpg")},{url:(t==null?void 0:t.image_background)||"",name:a+"_bg.jpg"}].filter(n=>n==null?void 0:n.url)},j=e=>o.jsx(c,{onClick:()=>{window.open("https://www.facebook.com/me/allactivity?log_filter=archivedstories","_blank")},icon:o.jsx("i",{className:"fa fa-external-link-alt"}),children:r({vi:"Xem trên Facebook",en:"View on Facebook"})},"view-fb");return o.jsx(N,{collectionName:"Archived Stories",fetchNext:x,renderItem:v,downloadItem:b,headerButtons:j,getItemCursor:e=>e==null?void 0:e.cursor,rowKey:e=>e.id,downloadOptions:[{key:"delete-story",labelFn:e=>{const s=e.filter(i=>!i.deleted).length;return r({en:"🗑️ Delete ".concat(s," story"),vi:"🗑️ Xoá ".concat(s," story")})},onClick:y}]})}export{xe as default};
