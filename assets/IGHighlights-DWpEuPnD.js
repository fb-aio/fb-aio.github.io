import{r as e,ap as t}from"./index-DTuD-gIZ.js";import{a2 as n}from"./MyApp-DtkI4uVN.js";import{C as c}from"./Collection-C7y85cPw.js";import{g as u,a as f}from"./highlights-Dz74jWr1.js";import{L as h}from"./index-1ym4-CGc.js";import{I as x}from"./index-CEjM6kgT.js";import"./index-DR1hYV1u.js";import"./file-download-BxyMbgCF.js";import"./index-YK4cqQAU.js";import"./Dropdown-WJci-lrt.js";import"./PurePanel-DTld5f7k.js";import"./index-DQHvppe9.js";import"./index-Dfr6ccrC.js";import"./index-BSvqTJ67.js";import"./TextArea-DczNLlkO.js";import"./addEventListener-BR1Ua7IP.js";import"./index-CN34XEQ3.js";import"./index-wrcCNw01.js";import"./index-CTIViboB.js";import"./index-cMZkzR7Z.js";import"./responsiveObserver-B7hb1Qq-.js";import"./useBreakpoint-VJPzTbg_.js";import"./index-BaCXpj60.js";import"./index-CeJUsa8-.js";import"./index-zp-XfHau.js";import"./index-B4uCDt1_.js";import"./index-CJfXeNnw.js";import"./Pagination-Dz0gbM3B.js";import"./row-DyEezz8y.js";function T({target:r,onOpenHighlight:s}){const p=e.useCallback(async(i=[])=>r!=null&&r.id?i.length?[]:await u(r.id):void 0,[r]),a=e.useCallback(i=>t.jsxs(h.Item,{children:[t.jsx(x,{src:i.cover,width:100,height:100,style:{objectFit:"cover",borderRadius:"50%",cursor:"pointer"},preview:!1,onClick:()=>{s==null||s(i)}}),t.jsx("a",{href:"https://www.instagram.com/stories/highlights/"+i.id.split(":")[1],target:"_blank",style:{display:"block",wordWrap:"break-word",maxWidth:100,padding:5,fontWeight:"bold",textAlign:"center",fontSize:"1em"},title:i.title,children:n(i.title,30)})]}),[]),l=e.useCallback(async(i,d)=>(await f(i.id)).map(o=>{const m=!!o.video;return{url:m?o.video:o.image,name:o.id+(m?".mp4":".jpg")}}),[]);return t.jsx(c,{collectionName:(r==null?void 0:r.igName)+" - IG Highlights",fetchNext:p,renderItem:a,downloadItem:l,rowKey:i=>i.id})}export{T as default};
