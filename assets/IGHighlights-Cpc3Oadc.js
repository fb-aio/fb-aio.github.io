import{r as e,ar as t}from"./index-q1tSS-rR.js";import{a7 as n}from"./MyApp-CBaTny7d.js";import{C as c}from"./Collection-DDP5Buqo.js";import{g as u,a as f}from"./highlights-DQEec9SG.js";import{L as h}from"./index-1beg7Det.js";import{I as x}from"./index-BdJix_u9.js";import"./index-B-p2vVjG.js";import"./file-download-CzBzFFWK.js";import"./index-7uNYSxrh.js";import"./Dropdown-BJi5f884.js";import"./PurePanel-BgabuE-Z.js";import"./index-DX74AUsE.js";import"./index-DKJuAVRR.js";import"./index-DslGbxEd.js";import"./index-BIHBvm97.js";import"./addEventListener-iTTSg4p5.js";import"./index-D7Y5XXU7.js";import"./index-5j1t3E_b.js";import"./index-DtssTtf1.js";import"./index-wMK2dD8k.js";import"./useBreakpoint-w6URs4Gd.js";import"./index-CStg054o.js";import"./index-gJNVrSJB.js";import"./index-Ca2IBN-d.js";import"./index-DVoMK83J.js";import"./Pagination-_rxWiO4d.js";import"./row-B8nMCXFW.js";function P({target:r,onOpenHighlight:s}){const a=e.useCallback(async(i=[])=>r!=null&&r.id?i.length?[]:await u(r.id):void 0,[r]),p=e.useCallback(i=>t.jsxs(h.Item,{children:[t.jsx(x,{src:i.cover,width:100,height:100,style:{objectFit:"cover",borderRadius:"50%",cursor:"pointer"},preview:!1,onClick:()=>{s==null||s(i)}}),t.jsx("a",{href:"https://www.instagram.com/stories/highlights/"+i.id.split(":")[1],target:"_blank",style:{display:"block",wordWrap:"break-word",maxWidth:100,padding:5,fontWeight:"bold",textAlign:"center",fontSize:"1em"},title:i.title,children:n(i.title,30)})]}),[]),l=e.useCallback(async(i,d)=>(await f(i.id)).map(o=>{const m=!!o.video;return{url:m?o.video:o.image,name:o.id+(m?".mp4":".jpg")}}),[]);return t.jsx(c,{collectionName:(r==null?void 0:r.igName)+" - IG Highlights",fetchNext:a,renderItem:p,downloadItem:l,rowKey:i=>i.id})}export{P as default};
