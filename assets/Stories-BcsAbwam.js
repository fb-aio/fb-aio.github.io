const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./RecentStoryViewer-BJ0Q2J8T.js","./index-Vcj4IeAF.js","./index-CawCDZ84.css","./stories-BmDuWB23.js","./StoryViewers-yXXlhLXx.js","./Collection-Czzlptje.js","./index-B5Gm6nvB.js","./file-download-DBg-_-Y-.js","./MyApp-JE0CAMjZ.js","./index-B4bb0pyT.js","./Dropdown-BxHEncP7.js","./PurePanel-FGUkYzQM.js","./index-bQege_zs.js","./index-DP9l3btl.js","./index-BVuRI7YT.js","./EyeOutlined-B3KAqgpW.js","./SearchOutlined-CGczHfU6.js","./index-CDjx_E5v.js","./Pagination-D72DLZPl.js","./useBreakpoint-Ca80yxkY.js","./index-hB9-56Y0.js","./row-hzdKAHXj.js","./index-BS0N6rpQ.js","./index-s-hoDGGA.js","./index-CAbIliWW.js","./VideoWithMuted-CTC-OtiH.js","./index-DjscercI.js","./addEventListener-B7xMD05D.js"])))=>i.map(i=>d[i]);
import{aO as d,aQ as s,r as u,a$ as h,bb as y,aS as x,aU as f}from"./index-Vcj4IeAF.js";import{C as b}from"./Collection-Czzlptje.js";import{i as j}from"./icons--eGanIsN.js";import{g as w,a as v}from"./stories-BmDuWB23.js";import{S as I,h as k,a as _}from"./MyApp-JE0CAMjZ.js";import{A as S}from"./index-BavCfdfE.js";import{L as N}from"./index-CDjx_E5v.js";import{I as T}from"./index-DjscercI.js";import{T as a}from"./index-BVuRI7YT.js";import"./index-B5Gm6nvB.js";import"./file-download-DBg-_-Y-.js";import"./index-B4bb0pyT.js";import"./Dropdown-BxHEncP7.js";import"./PurePanel-FGUkYzQM.js";import"./index-bQege_zs.js";import"./index-DP9l3btl.js";import"./EyeOutlined-B3KAqgpW.js";import"./SearchOutlined-CGczHfU6.js";import"./index-BS0N6rpQ.js";import"./Pagination-D72DLZPl.js";import"./useBreakpoint-Ca80yxkY.js";import"./index-hB9-56Y0.js";import"./row-hzdKAHXj.js";import"./addEventListener-B7xMD05D.js";const C=u.lazy(()=>h(()=>import("./RecentStoryViewer-BJ0Q2J8T.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27]),import.meta.url));function oo({target:e}){const{ti:i}=d(),t=(e==null?void 0:e.name)+" - Stories",c=async(o=[],n)=>{if(!(e!=null&&e.id))return;const{bucketId:r,firstStoryId:p}=await w(e==null?void 0:e.id);return!r||!p?[]:await v(r)},m=(o,n)=>{const r=o.seen?s.jsx("span",{children:"👀"}):s.jsx("i",{className:"fa fa-eye-slash",style:{color:"gray"}});return s.jsxs(N.Item,{className:"show-on-hover-trigger",children:[s.jsxs(I,{direction:"vertical",style:{position:"relative"},children:[s.jsx(T,{src:o.thumbnail,fallback:o.image,style:{width:200,height:330,borderRadius:10,objectFit:"cover"},preview:{destroyOnClose:!0,imageRender:()=>s.jsx(C,{story:{bucket_id:o.bucket_id,owner:e},bucketsData:k("Collection.data."+t)||[],index:n}),toolbarRender:()=>null}}),s.jsx(_,{placement:"bottom",title:s.jsxs(s.Fragment,{children:[r," ",e==null?void 0:e.name,o.seen?i({en:" KNOWS you saw",vi:" BIẾT bạn đã xem"}):i({en:" DOESN'T know you saw",vi:" KHÔNG biết bạn đã xem"})]}),children:s.jsxs(a.Text,{children:[r," ",y(o.creation_time*1e3)," ",i({vi:"trước",en:"ago"}),s.jsx("br",{}),o.react_count," reactions ",o.reaction]})}),o.caption&&s.jsx(a.Text,{children:o.caption}),o.video&&s.jsx("div",{style:{position:"absolute",top:10,right:10,pointerEvents:"none"},children:j.IGVideo})]}),s.jsx(x,{type:"default",icon:s.jsx("i",{className:"fa-solid fa-up-right-from-square"}),style:{position:"absolute",bottom:10,right:10},className:"show-on-hover-item",target:"_blank",href:f("/stories/"+o.bucket_id+"/"+o.id)})]})},l=async(o,n)=>({name:o.id+(o.video?".mp4":".jpg"),url:o.video||o.image});return s.jsx(b,{collectionName:t,fetchNext:c,renderItem:m,downloadItem:l,rowKey:o=>o.id,once:!0,header:o=>s.jsx(S,{showIcon:!0,type:"info",message:(e==null?void 0:e.name)+(o!=null&&o.length?i({en:" will not know you see this story",vi:" sẽ không biết bạn đã xem tin"}):i({en:" has no story today",vi:" không có tin nào hôm nay"}))})})}export{oo as default};
