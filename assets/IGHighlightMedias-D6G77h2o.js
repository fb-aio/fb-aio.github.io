import{r as i,av as t}from"./index-Ce8dCClm.js";import{i as d}from"./icons-wKDmFI-x.js";import{C as c}from"./Collection-ZTCmWih3.js";import{a as l}from"./highlights-qgWjqC9o.js";import{V as u}from"./VideoWithMuted-Co0AkRDR.js";import{L as x}from"./index-DLYzrYug.js";import{I as v}from"./index-bfHmpTLf.js";import"./index-DNUe9j7U.js";import"./file-download-D1J_PtQ4.js";import"./MyApp-B3dBhFw3.js";import"./index-S1rcizUY.js";import"./Dropdown-kjr5K43T.js";import"./PurePanel-BxE60psP.js";import"./index-DlK1wJsv.js";import"./index-DH8HayOr.js";import"./index-DcBAiDx1.js";import"./EyeOutlined-BuJlsZ18.js";import"./SearchOutlined-CuGj3VAc.js";import"./index-ByUYiutJ.js";import"./index-PGXwld7F.js";import"./videos-BRbOI_ut.js";import"./index-CGau2efw.js";import"./responsiveObserver-AfdxC7nf.js";import"./useBreakpoint-DdrZFKUW.js";import"./index-C2Sqr2Jh.js";import"./index-Cbt5uQ30.js";import"./index-BluNafSl.js";import"./index-ihz0CZdn.js";import"./Pagination-tjF8ameC.js";import"./row-BDNAnGD4.js";import"./addEventListener-CQrUvR60.js";function X({target:e,highlight:r}){const s=i.useCallback(async o=>r!=null&&r.id?await l(r.id):void 0,[r]),p=i.useCallback(o=>t.jsxs(x.Item,{children:[t.jsx(v,{src:o.image,width:200,height:330,style:{objectFit:"cover",borderRadius:10},preview:o.video?{destroyOnClose:!0,imageRender:()=>t.jsx(u,{src:o.video,style:{maxWidth:"90vw",maxHeight:"90vh"}}),toolbarRender:()=>null}:!0}),o.video&&t.jsx("div",{style:{position:"absolute",top:10,right:10,pointerEvents:"none"},children:d.IGVideo})]}),[]),a=i.useCallback((o,n)=>{const m=!!o.video;return{url:m?o.video:o.image,name:o.id+(m?".mp4":".jpg")}},[]);return t.jsx(c,{collectionName:(e==null?void 0:e.igName)+" - IG Highlight - "+r.title,fetchNext:s,renderItem:p,downloadItem:a,rowKey:o=>o.id,once:!0})}export{X as default};
