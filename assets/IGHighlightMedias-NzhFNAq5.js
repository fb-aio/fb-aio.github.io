import{r as i,ap as t}from"./index-DkF6Htpf.js";import{i as d}from"./icons-2tPHBOKp.js";import{C as c}from"./Collection-BBh21dDD.js";import{a as l}from"./highlights-77RrdSTs.js";import{L as u}from"./index-CFJrM9Ei.js";import{I as x}from"./index-8U58wN78.js";import"./index-BjHMQCjw.js";import"./file-download-BNFoHrRt.js";import"./MyApp-DrZA3cbr.js";import"./index-B_mYDAjR.js";import"./Dropdown-C_krqHaG.js";import"./PurePanel-77UtMvqX.js";import"./index-BanaCyBV.js";import"./index-DfQFDt7n.js";import"./index-DfeH0Bwp.js";import"./TextArea-EeSg0sLU.js";import"./addEventListener-6mzEpmpM.js";import"./index-s-mIEtoH.js";import"./index-BFyRi0Z4.js";import"./index-C1whAJtA.js";import"./index-B5yn3mIg.js";import"./responsiveObserver-DaJ1SFYx.js";import"./useBreakpoint-BFavuSiE.js";import"./index-CnGMAjoT.js";import"./index-Ct5S-bch.js";import"./index-Dj4LyGx0.js";import"./index-BNCptgon.js";import"./index-B3UwSGYV.js";import"./Pagination-B9_vGAwr.js";import"./row-rFNXP2x6.js";function T({target:e,highlight:r}){const s=i.useCallback(async o=>r!=null&&r.id?await l(r.id):void 0,[r]),p=i.useCallback(o=>t.jsxs(u.Item,{children:[t.jsx(x,{src:o.image,width:200,height:330,style:{objectFit:"cover"},preview:o.video?{destroyOnClose:!0,imageRender:()=>t.jsx("video",{autoPlay:!0,controls:!0,loop:!0,src:o.video,style:{maxWidth:"90vw",maxHeight:"90vh"}}),toolbarRender:()=>null}:!0}),o.video&&t.jsx("div",{style:{position:"absolute",top:10,right:10,pointerEvents:"none"},children:d.IGVideo})]}),[]),a=i.useCallback((o,n)=>{const m=!!o.video;return{url:m?o.video:o.image,name:o.id+(m?".mp4":".jpg")}},[]);return t.jsx(c,{collectionName:(e==null?void 0:e.igName)+" - IG Highlight - "+r.title,fetchNext:s,renderItem:p,downloadItem:a,rowKey:o=>o.id,once:!0})}export{T as default};
