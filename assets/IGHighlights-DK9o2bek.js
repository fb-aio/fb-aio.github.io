import{r as e,aq as o}from"./index-CiUWOVnT.js";import{b as c,c as d}from"./index-Z5j_B86I.js";import{Q as u}from"./MyApp-CSAMsYNo.js";import{C as f}from"./Collection-fxTUuqUk.js";import{L as h}from"./index-qNPDJF4G.js";import{I as x}from"./index-DYhqHgnY.js";import"./useCacheState-CshvC5SH.js";import"./index-vuHwb1ab.js";import"./index-BWqB_tOj.js";import"./responsiveObserver-eRqqnUkT.js";import"./useBreakpoint-Biy8e67G.js";import"./index-DG5rzQVh.js";import"./index-FgHtABFg.js";import"./PurePanel-CL192Gbs.js";import"./index-DPtMTd6b.js";import"./TextArea-C8RwuKiT.js";import"./addEventListener-CO-NmIOH.js";import"./index-Brb7sCmS.js";import"./Dropdown-CqPGcrkc.js";import"./index-CqtZplwK.js";import"./index-DFs1S1fI.js";import"./file-download-BQLzY1By.js";import"./index-DI0YYMRi.js";import"./Pagination-CsZDPWiE.js";import"./row-CD2JDyM7.js";function D({target:r,onOpenHighlight:s}){const a=e.useCallback(async(i=[])=>r!=null&&r.id?i.length?[]:await c(r.id):void 0,[r]),p=e.useCallback(i=>o.jsxs(h.Item,{children:[o.jsx(x,{src:i.cover,width:100,height:100,style:{objectFit:"cover",borderRadius:"50%",cursor:"pointer"},preview:!1,onClick:()=>{s==null||s(i)}}),o.jsx("a",{href:"https://www.instagram.com/stories/highlights/"+i.id.split(":")[1],target:"_blank",style:{display:"block",wordWrap:"break-word",maxWidth:100,padding:5,fontWeight:"bold",textAlign:"center",fontSize:"1em"},title:i.title,children:u(i.title,30)})]}),[]),l=e.useCallback(async(i,n)=>(await d(i.id)).map(t=>{const m=!!t.video;return{url:m?t.video:t.image,name:t.id+(m?".mp4":".jpg")}}),[]);return o.jsx(f,{collectionName:(r==null?void 0:r.igName)+" - IG Highlights",fetchNext:a,renderItem:p,downloadItem:l,rowKey:i=>i.id})}export{D as default};