import{r as i,ar as t}from"./index-q1tSS-rR.js";import{i as d}from"./icons-gN84GfOt.js";import{C as c}from"./Collection-DDP5Buqo.js";import{a as l}from"./highlights-DQEec9SG.js";import{L as u}from"./index-1beg7Det.js";import{I as x}from"./index-BdJix_u9.js";import"./index-B-p2vVjG.js";import"./file-download-CzBzFFWK.js";import"./MyApp-CBaTny7d.js";import"./index-7uNYSxrh.js";import"./Dropdown-BJi5f884.js";import"./PurePanel-BgabuE-Z.js";import"./index-DX74AUsE.js";import"./index-DKJuAVRR.js";import"./index-DslGbxEd.js";import"./index-BIHBvm97.js";import"./addEventListener-iTTSg4p5.js";import"./index-D7Y5XXU7.js";import"./index-5j1t3E_b.js";import"./index-DtssTtf1.js";import"./index-wMK2dD8k.js";import"./useBreakpoint-w6URs4Gd.js";import"./index-CStg054o.js";import"./index-gJNVrSJB.js";import"./index-Ca2IBN-d.js";import"./index-DVoMK83J.js";import"./Pagination-_rxWiO4d.js";import"./row-B8nMCXFW.js";function Q({target:e,highlight:r}){const m=i.useCallback(async o=>r!=null&&r.id?await l(r.id):void 0,[r]),p=i.useCallback(o=>t.jsxs(u.Item,{children:[t.jsx(x,{src:o.image,width:200,height:330,style:{objectFit:"cover"},preview:o.video?{destroyOnClose:!0,imageRender:()=>t.jsx("video",{autoPlay:!0,controls:!0,loop:!0,src:o.video,style:{maxWidth:"90vw",maxHeight:"90vh"}}),toolbarRender:()=>null}:!0}),o.video&&t.jsx("div",{style:{position:"absolute",top:10,right:10,pointerEvents:"none"},children:d.IGVideo})]}),[]),a=i.useCallback((o,n)=>{const s=!!o.video;return{url:s?o.video:o.image,name:o.id+(s?".mp4":".jpg")}},[]);return t.jsx(c,{collectionName:(e==null?void 0:e.igName)+" - IG Highlight - "+r.title,fetchNext:m,renderItem:p,downloadItem:a,rowKey:o=>o.id,once:!0})}export{Q as default};