import{r as e,ao as t}from"./index-Zrrdisla.js";import{Y as n}from"./MyApp-D9TAjLoC.js";import{C as c}from"./Collection-CmKmYAR-.js";import{g as u,a as f}from"./highlights-ZHOI7MG3.js";import{L as h}from"./index-D8qn4rwg.js";import{I as x}from"./index-BiIvNcz0.js";import"./index-DEGCqwpH.js";import"./file-download-CSWe6wb8.js";import"./index-0BLLAH_o.js";import"./Dropdown-BOllNBFL.js";import"./PurePanel-BmCtnOqR.js";import"./index-D5-jU2qd.js";import"./index-CPrUkSCR.js";import"./index-CaDWwLSZ.js";import"./index-BXf3pS2U.js";import"./addEventListener-DISMr04p.js";import"./index-BGDcwphm.js";import"./index-DLskl-go.js";import"./index-C-VUkLr1.js";import"./index-vuHwb1ab.js";import"./index-aNpG7M6c.js";import"./responsiveObserver-CNtTcc81.js";import"./useBreakpoint-BEX5V2Ey.js";import"./index-B2ssnbc6.js";import"./index-BEdxZxyc.js";import"./index-CmUgpoRQ.js";import"./index-DJ0Yr173.js";import"./Pagination-B81k76Ib.js";import"./row-xjqZhALu.js";function Q({target:r,onOpenHighlight:s}){const p=e.useCallback(async(i=[])=>r!=null&&r.id?i.length?[]:await u(r.id):void 0,[r]),a=e.useCallback(i=>t.jsxs(h.Item,{children:[t.jsx(x,{src:i.cover,width:100,height:100,style:{objectFit:"cover",borderRadius:"50%",cursor:"pointer"},preview:!1,onClick:()=>{s==null||s(i)}}),t.jsx("a",{href:"https://www.instagram.com/stories/highlights/"+i.id.split(":")[1],target:"_blank",style:{display:"block",wordWrap:"break-word",maxWidth:100,padding:5,fontWeight:"bold",textAlign:"center",fontSize:"1em"},title:i.title,children:n(i.title,30)})]}),[]),l=e.useCallback(async(i,d)=>(await f(i.id)).map(o=>{const m=!!o.video;return{url:m?o.video:o.image,name:o.id+(m?".mp4":".jpg")}}),[]);return t.jsx(c,{collectionName:(r==null?void 0:r.igName)+" - IG Highlights",fetchNext:p,renderItem:a,downloadItem:l,rowKey:i=>i.id})}export{Q as default};
