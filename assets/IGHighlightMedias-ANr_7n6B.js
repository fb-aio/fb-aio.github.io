import{r as i,av as t}from"./index-BZzsVo5e.js";import{i as d}from"./icons-61-r-JJA.js";import{C as c}from"./Collection-5aMhuQAI.js";import{a as l}from"./highlights-BaWFsRYf.js";import{V as u}from"./VideoWithMuted-C5AR9zlm.js";import{L as x}from"./index-C95i2ZXQ.js";import{I as v}from"./index-Dn2ePVUt.js";import"./index-Ur4nr8nl.js";import"./file-download-Dp--CWrA.js";import"./MyApp-DyLC-RHb.js";import"./index-DK4sUwzQ.js";import"./Dropdown-DCm_2Ujr.js";import"./PurePanel-CP-xAv6_.js";import"./index-CLvvq23o.js";import"./index-CVKBU6wa.js";import"./index-CljnAMR0.js";import"./EyeOutlined-iKkuVyfy.js";import"./SearchOutlined-BIlkrEky.js";import"./index-CvIOFmQi.js";import"./index-YHj7Kfyb.js";import"./videos-wHi_gaIy.js";import"./index-DnRFqO-f.js";import"./responsiveObserver-BtQ_ovyL.js";import"./useBreakpoint-CSe0XBg_.js";import"./index-CdUH9mDB.js";import"./index-BCnZL0D9.js";import"./index-meHAn_I6.js";import"./index-Cp7qG9Yr.js";import"./Pagination-CcHme1eM.js";import"./row-C4Sb7dtG.js";import"./addEventListener-C1thYwwy.js";function X({target:e,highlight:r}){const s=i.useCallback(async o=>r!=null&&r.id?await l(r.id):void 0,[r]),p=i.useCallback(o=>t.jsxs(x.Item,{children:[t.jsx(v,{src:o.image,width:200,height:330,style:{objectFit:"cover",borderRadius:10},preview:o.video?{destroyOnClose:!0,imageRender:()=>t.jsx(u,{src:o.video,style:{maxWidth:"90vw",maxHeight:"90vh"}}),toolbarRender:()=>null}:!0}),o.video&&t.jsx("div",{style:{position:"absolute",top:10,right:10,pointerEvents:"none"},children:d.IGVideo})]}),[]),a=i.useCallback((o,n)=>{const m=!!o.video;return{url:m?o.video:o.image,name:o.id+(m?".mp4":".jpg")}},[]);return t.jsx(c,{collectionName:(e==null?void 0:e.igName)+" - IG Highlight - "+r.title,fetchNext:s,renderItem:p,downloadItem:a,rowKey:o=>o.id,once:!0})}export{X as default};
