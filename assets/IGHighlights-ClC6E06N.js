import{r as e,av as t}from"./index-Dy2QdHdp.js";import{a8 as n}from"./MyApp-kFpknyRu.js";import{C as c}from"./Collection-BEKvw1jz.js";import{g as u,a as f}from"./highlights-BLN5nBMR.js";import{L as h}from"./index-BQvE-Blk.js";import{I as x}from"./index-CEijOnfi.js";import"./index--O8fopsE.js";import"./file-download-_WT8etQ9.js";import"./index-BGbLwXDR.js";import"./Dropdown-CZZ9fG9J.js";import"./PurePanel-CAsGwIQa.js";import"./index-QHeaUFRS.js";import"./index-Dp_vWq-g.js";import"./index-CZbI6psk.js";import"./index-DQyKtcDB.js";import"./addEventListener-B266Jn3H.js";import"./index-DAGwKmes.js";import"./index-D54hWG_Y.js";import"./index-BsG3jB_1.js";import"./index-GEwspDBh.js";import"./useBreakpoint-DeXWGOEO.js";import"./index-4Ld3l6KM.js";import"./index-BBEym-w-.js";import"./index-Czk9cXmL.js";import"./index-BlwXf5LT.js";import"./Pagination-BonvLU61.js";import"./row-CHuFBJw5.js";function P({target:r,onOpenHighlight:s}){const a=e.useCallback(async(i=[])=>r!=null&&r.id?i.length?[]:await u(r.id):void 0,[r]),p=e.useCallback(i=>t.jsxs(h.Item,{children:[t.jsx(x,{src:i.cover,width:100,height:100,style:{objectFit:"cover",borderRadius:"50%",cursor:"pointer"},preview:!1,onClick:()=>{s==null||s(i)}}),t.jsx("a",{href:"https://www.instagram.com/stories/highlights/"+i.id.split(":")[1],target:"_blank",style:{display:"block",wordWrap:"break-word",maxWidth:100,padding:5,fontWeight:"bold",textAlign:"center",fontSize:"1em"},title:i.title,children:n(i.title,30)})]}),[]),l=e.useCallback(async(i,d)=>(await f(i.id)).map(o=>{const m=!!o.video;return{url:m?o.video:o.image,name:o.id+(m?".mp4":".jpg")}}),[]);return t.jsx(c,{collectionName:(r==null?void 0:r.igName)+" - IG Highlights",fetchNext:a,renderItem:p,downloadItem:l,rowKey:i=>i.id})}export{P as default};
