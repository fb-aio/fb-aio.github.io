import{r as e,av as t}from"./index-QuNiQE0f.js";import{a7 as n}from"./MyApp-BA9o3E6N.js";import{C as c}from"./Collection-BlsR4VOX.js";import{g as u,a as f}from"./highlights-q8jV_6IC.js";import{L as h}from"./index-DzLaTIQc.js";import{I as x}from"./index-DLf82GgP.js";import"./index-CxprGwgn.js";import"./file-download-B-IQAyJY.js";import"./index-BBbLsKg2.js";import"./Dropdown-CABxKZ1V.js";import"./PurePanel-_zPBxY98.js";import"./index-Dq6LJzw9.js";import"./index-ujcGjt6m.js";import"./index-lvpvLro2.js";import"./index-DoV6bKmw.js";import"./addEventListener-CkDLGIfS.js";import"./index-b0N3yoLT.js";import"./index-km8nfGt5.js";import"./index-CxemsWyp.js";import"./index-DSl0uhmk.js";import"./useBreakpoint-BgSJGm6Z.js";import"./index-Dpgbfk7w.js";import"./index-BGH1nn4F.js";import"./index-DXJFXb-6.js";import"./index-CAL_jU20.js";import"./Pagination-BQDg0Fpg.js";import"./row-C6G5aZ14.js";function P({target:r,onOpenHighlight:s}){const a=e.useCallback(async(i=[])=>r!=null&&r.id?i.length?[]:await u(r.id):void 0,[r]),p=e.useCallback(i=>t.jsxs(h.Item,{children:[t.jsx(x,{src:i.cover,width:100,height:100,style:{objectFit:"cover",borderRadius:"50%",cursor:"pointer"},preview:!1,onClick:()=>{s==null||s(i)}}),t.jsx("a",{href:"https://www.instagram.com/stories/highlights/"+i.id.split(":")[1],target:"_blank",style:{display:"block",wordWrap:"break-word",maxWidth:100,padding:5,fontWeight:"bold",textAlign:"center",fontSize:"1em"},title:i.title,children:n(i.title,30)})]}),[]),l=e.useCallback(async(i,d)=>(await f(i.id)).map(o=>{const m=!!o.video;return{url:m?o.video:o.image,name:o.id+(m?".mp4":".jpg")}}),[]);return t.jsx(c,{collectionName:(r==null?void 0:r.igName)+" - IG Highlights",fetchNext:a,renderItem:p,downloadItem:l,rowKey:i=>i.id})}export{P as default};
