import{r as e,aq as o}from"./index-BnkMA1vW.js";import{b as c,c as d}from"./index-DKYwA9iB.js";import{Q as u}from"./MyApp-DltFDv_V.js";import{C as f}from"./Collection-PL0qv4MM.js";import{L as h}from"./index-r3NfuVoX.js";import{I as x}from"./index-hIwuqtzz.js";import"./useCacheState-C8m9yt8v.js";import"./index-vuHwb1ab.js";import"./index-CUMb4MfP.js";import"./responsiveObserver-BdYfetC_.js";import"./useBreakpoint-WmbarIyy.js";import"./index-C9BuueIn.js";import"./index-BiHQr6mc.js";import"./PurePanel-3wTaHio6.js";import"./index-BeeTYsU2.js";import"./TextArea-DNgpE2Ze.js";import"./addEventListener-Btyl3Jj6.js";import"./index-BEp1ySXU.js";import"./Dropdown-CzepKDlK.js";import"./index-B_o5T3ja.js";import"./index-B93MRbNd.js";import"./file-download-DqzXDEOW.js";import"./index-dzH3ms-r.js";import"./Pagination-BLedMhPS.js";import"./row-CNmcWAX5.js";function D({target:r,onOpenHighlight:s}){const a=e.useCallback(async(i=[])=>r!=null&&r.id?i.length?[]:await c(r.id):void 0,[r]),p=e.useCallback(i=>o.jsxs(h.Item,{children:[o.jsx(x,{src:i.cover,width:100,height:100,style:{objectFit:"cover",borderRadius:"50%",cursor:"pointer"},preview:!1,onClick:()=>{s==null||s(i)}}),o.jsx("a",{href:"https://www.instagram.com/stories/highlights/"+i.id.split(":")[1],target:"_blank",style:{display:"block",wordWrap:"break-word",maxWidth:100,padding:5,fontWeight:"bold",textAlign:"center",fontSize:"1em"},title:i.title,children:u(i.title,30)})]}),[]),l=e.useCallback(async(i,n)=>(await d(i.id)).map(t=>{const m=!!t.video;return{url:m?t.video:t.image,name:t.id+(m?".mp4":".jpg")}}),[]);return o.jsx(f,{collectionName:(r==null?void 0:r.igName)+" - IG Highlights",fetchNext:a,renderItem:p,downloadItem:l,rowKey:i=>i.id})}export{D as default};