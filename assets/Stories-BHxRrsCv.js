const __vite__fileDeps=["./RecentStoryViewer-BFX3m5X4.js","./index-DTuD-gIZ.js","./index-DjlRUb8J.css","./stories-DPrUzMha.js","./MyApp-DtkI4uVN.js","./StoryViewers-IBwo4v-J.js","./Collection-C7y85cPw.js","./index-DR1hYV1u.js","./file-download-BxyMbgCF.js","./index-YK4cqQAU.js","./Dropdown-WJci-lrt.js","./PurePanel-DTld5f7k.js","./index-DQHvppe9.js","./index-Dfr6ccrC.js","./index-BSvqTJ67.js","./TextArea-DczNLlkO.js","./addEventListener-BR1Ua7IP.js","./index-CN34XEQ3.js","./index-1ym4-CGc.js","./Pagination-Dz0gbM3B.js","./useBreakpoint-VJPzTbg_.js","./responsiveObserver-B7hb1Qq-.js","./row-DyEezz8y.js","./index-wrcCNw01.js","./index-B4uCDt1_.js","./index-cMZkzR7Z.js","./index-BaCXpj60.js","./index-CEjM6kgT.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{ap as i,r as d,at as u}from"./index-DTuD-gIZ.js";import{u as y,a as h,q as x,T as f,Z as b}from"./MyApp-DtkI4uVN.js";import{C as j}from"./Collection-C7y85cPw.js";import{i as w}from"./icons-BRnCUKbM.js";import{g as v,a as I}from"./stories-DPrUzMha.js";import{A as k}from"./index-CJfXeNnw.js";import{L as T}from"./index-1ym4-CGc.js";import{I as _}from"./index-CEjM6kgT.js";import{T as c}from"./index-B4uCDt1_.js";import"./index-DR1hYV1u.js";import"./file-download-BxyMbgCF.js";import"./index-YK4cqQAU.js";import"./Dropdown-WJci-lrt.js";import"./PurePanel-DTld5f7k.js";import"./index-DQHvppe9.js";import"./index-Dfr6ccrC.js";import"./index-BSvqTJ67.js";import"./TextArea-DczNLlkO.js";import"./addEventListener-BR1Ua7IP.js";import"./index-CN34XEQ3.js";import"./index-wrcCNw01.js";import"./Pagination-Dz0gbM3B.js";import"./useBreakpoint-VJPzTbg_.js";import"./responsiveObserver-B7hb1Qq-.js";import"./row-DyEezz8y.js";const S=d.lazy(()=>u(()=>import("./RecentStoryViewer-BFX3m5X4.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27]),import.meta.url));function g({target:e}){const{ti:s}=y(),t=(e==null?void 0:e.name)+" - Stories",a=async(o=[],n)=>{if(!(e!=null&&e.id))return;const{bucketId:r,firstStoryId:l}=await v(e==null?void 0:e.id);return!r||!l?[]:await I(r)},m=(o,n)=>{const r=o.seen?i.jsx("span",{children:"👀"}):i.jsx("i",{className:"fa fa-eye-slash",style:{color:"gray"}});return i.jsx(T.Item,{children:i.jsxs(h,{direction:"vertical",style:{position:"relative"},children:[i.jsx(_,{src:o.thumbnail,fallback:o.image,style:{width:160,height:270,borderRadius:10,objectFit:"cover"},preview:{destroyOnClose:!0,imageRender:()=>i.jsx(S,{story:{bucket_id:o.bucket_id,owner:e},bucketsData:x("Collection.data."+t)||[],index:n}),toolbarRender:()=>null}}),i.jsx(f,{placement:"bottom",title:i.jsxs(i.Fragment,{children:[r," ",e==null?void 0:e.name,o.seen?s({en:" KNOWS you saw",vi:" BIẾT bạn đã xem"}):s({en:" DOESN'T know you saw",vi:" KHÔNG biết bạn đã xem"})]}),children:i.jsxs(c.Text,{children:[r," ",b(o.creation_time*1e3,s)," ",s({vi:"trước",en:"ago"}),i.jsx("br",{}),o.react_count," reactions ",o.reaction]})}),o.caption&&i.jsx(c.Text,{children:o.caption}),o.video&&i.jsx("div",{style:{position:"absolute",top:10,right:10,pointerEvents:"none"},children:w.IGVideo})]})})},p=async(o,n)=>({name:o.id+(o.video?".mp4":".jpg"),url:o.video||o.image});return i.jsx(j,{collectionName:t,fetchNext:a,renderItem:m,downloadItem:p,rowKey:o=>o.id,once:!0,header:o=>i.jsx(k,{showIcon:!0,type:"info",message:(e==null?void 0:e.name)+(o!=null&&o.length?s({en:" will not know you see this story",vi:" sẽ không biết bạn đã xem tin"}):s({en:" has no story today",vi:" không có tin nào hôm nay"}))})})}export{g as default};
