import{r as m,aL as t,bC as d,aN as h}from"./index-Qt1L9Xiw.js";import{C as u}from"./Collection-W4X7IqFa.js";import{g as f,a as x}from"./highlights-Bfcr0pES.js";import{c as g}from"./core-Bvv-XedI.js";import{L as w}from"./index-CeVycvI9.js";import{I as b}from"./index-BAuHam2U.js";import"./index-BX4ZrkmU.js";import"./file-download-cs7-HvOD.js";import"./MyApp-DDUulQzX.js";import"./index-DxPDOh9c.js";import"./Dropdown-CiaV_8Ew.js";import"./PurePanel-D4j__ZHX.js";import"./index-BHhG_OlO.js";import"./index-DAgc2Yal.js";import"./index-CvQxKMxN.js";import"./EyeOutlined-vPM2QFd6.js";import"./SearchOutlined-BQt8S8Mq.js";import"./index-DL30kYih.js";import"./Pagination-CHVwkn-q.js";import"./useBreakpoint-CFVo6cTb.js";import"./index-DUm_PftZ.js";import"./row-BPLkYSTc.js";import"./addEventListener-Dg4je8GP.js";function D({target:r,onOpenHighlight:e}){const n=m.useCallback(async(i=[])=>r!=null&&r.id?i.length?[]:await f(r.id):void 0,[r]),p=m.useCallback(i=>{var o,a;return t.jsxs(w.Item,{className:"show-on-hover-trigger",children:[t.jsx(b,{src:i.cover,width:100,height:100,style:{objectFit:"cover",borderRadius:"50%",cursor:"pointer"},preview:!1,onClick:()=>{e==null||e(i)}}),t.jsx("a",{href:"https://www.instagram.com/stories/highlights/"+i.id.split(":")[1],target:"_blank",style:{display:"block",wordWrap:"break-word",maxWidth:100,padding:5,fontWeight:"bold",textAlign:"center",fontSize:"1em"},title:i.title,children:d(i.title,30)}),t.jsx(h,{type:"default",icon:t.jsx("i",{className:"fa-solid fa-up-right-from-square"}),style:{position:"absolute",top:0,right:0},className:"show-on-hover-item",target:"_blank",href:g("stories/highlights/"+((a=(o=i.id)==null?void 0:o.split(":"))==null?void 0:a[1]))})]})},[]),c=m.useCallback(async(i,o)=>(await x(i.id)).map(s=>{const l=!!s.video;return{url:l?s.video:s.image,name:s.id+(l?".mp4":".jpg")}}),[]);return t.jsx(u,{collectionName:(r==null?void 0:r.username)+" - IG Highlights",fetchNext:n,renderItem:p,downloadItem:c,rowKey:i=>i.id})}export{D as default};