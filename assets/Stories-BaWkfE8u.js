const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./RecentStoryViewer-CGf9sIN_.js","./index-C5YWxV9K.js","./index-6GbvhCO5.css","./stories-C2C0KZ1M.js","./MyApp-Ct___eEr.js","./StoryViewers-BJZboQKG.js","./Collection-C3YR9ms4.js","./index-B89EIDgf.js","./file-download-BOVugqjO.js","./react-hotkeys-hook.esm-CDrCX6Xe.js","./index-BS0pS8FV.js","./index-Cjh_pMrK.js","./index-fg40ZRcV.js","./Dropdown-uaA3vV-D.js","./PurePanel-CDyma__L.js","./move-qwd2O5b7.js","./index-CWcF8dW8.js","./TextArea-Gh7v8m_G.js","./SearchOutlined-BZYjbz-k.js","./index-camAais2.js","./Pagination-B6wGdAWy.js","./useBreakpoint-PCEp_VLU.js","./useForceUpdate-Bs9ixSSa.js","./index-DgzD-WDw.js","./index-B0cdpGh8.js","./DownOutlined-qmMzTFXy.js","./row-Cxq1EIs_.js","./col-XT3xBtee.js","./index-CCWfgY7j.js","./index-BmxPq4Lk.js","./VideoWithMuted-DuHT3481.js"])))=>i.map(i=>d[i]);
import{aU as d,aW as e,r as u,b5 as h,bd as y,a_ as x}from"./index-C5YWxV9K.js";import b from"./Collection-C3YR9ms4.js";import{i as f}from"./icons-DOihCsvU.js";import{S as j,I as w,m as v,b as I,a as _}from"./MyApp-Ct___eEr.js";import{g as k,a as S}from"./stories-C2C0KZ1M.js";import{A as N}from"./index-B7WC9GSr.js";import{L as T}from"./index-camAais2.js";import{T as a}from"./index-DgzD-WDw.js";import"./index-B89EIDgf.js";import"./file-download-BOVugqjO.js";import"./react-hotkeys-hook.esm-CDrCX6Xe.js";import"./index-BS0pS8FV.js";import"./index-Cjh_pMrK.js";import"./index-fg40ZRcV.js";import"./Dropdown-uaA3vV-D.js";import"./PurePanel-CDyma__L.js";import"./move-qwd2O5b7.js";import"./index-CWcF8dW8.js";import"./TextArea-Gh7v8m_G.js";import"./SearchOutlined-BZYjbz-k.js";import"./index-CCWfgY7j.js";import"./Pagination-B6wGdAWy.js";import"./useBreakpoint-PCEp_VLU.js";import"./useForceUpdate-Bs9ixSSa.js";import"./index-B0cdpGh8.js";import"./DownOutlined-qmMzTFXy.js";import"./row-Cxq1EIs_.js";import"./col-XT3xBtee.js";const E=u.lazy(()=>h(()=>import("./RecentStoryViewer-CGf9sIN_.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30]),import.meta.url));function ro({target:s}){const{ti:i}=d(),t=(s==null?void 0:s.name)+" - Stories",c=async(o=[],n)=>{if(!(s!=null&&s.id))return;const{bucketId:r,firstStoryId:p}=await k(s==null?void 0:s.id);return!r||!p?[]:await S(r)},m=(o,n)=>{const r=o.seen?e.jsx("span",{children:"👀"}):e.jsx("i",{className:"fa fa-eye-slash",style:{color:"gray"}});return e.jsxs(T.Item,{className:"show-on-hover-trigger",children:[e.jsxs(j,{direction:"vertical",style:{position:"relative"},children:[e.jsx(w,{src:o.thumbnail,fallback:o.image,style:{width:200,height:330,borderRadius:10,objectFit:"cover"},preview:{destroyOnClose:!0,imageRender:()=>e.jsx(E,{story:{bucket_id:o.bucket_id,owner:s},bucketsData:v("Collection.data."+t)||[],index:n}),toolbarRender:()=>null}}),e.jsx(I,{placement:"bottom",title:e.jsxs(e.Fragment,{children:[r," ",s==null?void 0:s.name,o.seen?i({en:" KNOWS you saw",vi:" BIẾT bạn đã xem"}):i({en:" DOESN'T know you saw",vi:" KHÔNG biết bạn đã xem"})]}),children:e.jsxs(a.Text,{children:[r," ",y(o.creation_time*1e3)," ",i({vi:"trước",en:"ago"}),e.jsx("br",{}),o.react_count," reactions ",o.reaction]})}),o.caption&&e.jsx(a.Text,{children:o.caption}),o.video&&e.jsx("div",{style:{position:"absolute",top:10,right:10,pointerEvents:"none"},children:f.IGVideo})]}),e.jsx(x,{type:"default",icon:e.jsx("i",{className:"fa-solid fa-up-right-from-square"}),style:{position:"absolute",bottom:10,right:10},className:"show-on-hover-item",target:"_blank",href:_("/stories/"+o.bucket_id+"/"+o.id)})]})},l=async(o,n)=>({name:o.id+(o.video?".mp4":".jpg"),url:o.video||o.image});return e.jsx(b,{collectionName:t,fetchNext:c,renderItem:m,downloadItem:l,rowKey:o=>o.id,once:!0,header:o=>e.jsx(N,{showIcon:!0,type:"info",message:(s==null?void 0:s.name)+(o!=null&&o.length?i({en:" will not know you see this story",vi:" sẽ không biết bạn đã xem tin"}):i({en:" has no story today",vi:" không có tin nào hôm nay"}))})})}export{ro as default};
