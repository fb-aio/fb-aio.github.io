const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./VideoViewer-BL-9BjMq.js","./index-Vcj4IeAF.js","./index-CawCDZ84.css","./videos-D6l-W4Wc.js","./VideoWithMuted-CTC-OtiH.js","./MyApp-JE0CAMjZ.js"])))=>i.map(i=>d[i]);
import{r as m,bA as n,aQ as i,cA as c,aS as u,aU as f,a$ as h}from"./index-Vcj4IeAF.js";import{C as a}from"./Collection-Czzlptje.js";import{a as x,b,g as t}from"./videos-D6l-W4Wc.js";import{L as y}from"./index-CDjx_E5v.js";import{B as w}from"./MyApp-JE0CAMjZ.js";import{I as v}from"./index-DjscercI.js";import"./index-B5Gm6nvB.js";import"./file-download-DBg-_-Y-.js";import"./index-B4bb0pyT.js";import"./Dropdown-BxHEncP7.js";import"./PurePanel-FGUkYzQM.js";import"./index-bQege_zs.js";import"./index-DP9l3btl.js";import"./index-BVuRI7YT.js";import"./EyeOutlined-B3KAqgpW.js";import"./SearchOutlined-CGczHfU6.js";import"./index-BS0N6rpQ.js";import"./Pagination-D72DLZPl.js";import"./useBreakpoint-Ca80yxkY.js";import"./index-hB9-56Y0.js";import"./row-hzdKAHXj.js";import"./addEventListener-B7xMD05D.js";const I=m.lazy(()=>h(()=>import("./VideoViewer-BL-9BjMq.js"),__vite__mapDeps([0,1,2,3,4,5]),import.meta.url));function W({target:s}){const l=m.useCallback(async(o=[],e)=>{var r;return!(s!=null&&s.id)||!(s!=null&&s.type)?void 0:(e=e||((r=o==null?void 0:o[(o==null?void 0:o.length)-1])==null?void 0:r.cursor)||"",((s==null?void 0:s.type)===n.Group?await x({id:s==null?void 0:s.id,cursor:e}):await b({id:s==null?void 0:s.id,cursor:e})).videos)},[s]),p=m.useCallback(async o=>{if(!o.source){const e=await t(o.id);o.source=e.source}return{url:o.source,name:o.id+".mp4"}},[]),d=m.useCallback(o=>i.jsx(y.Item,{className:"show-on-hover-trigger",children:i.jsxs(w.Ribbon,{text:o.length?c(o.length):null,style:{opacity:o.length?1:0},children:[i.jsx(v,{src:o.picture,width:200,height:200,style:{objectFit:"cover",borderRadius:10},preview:{destroyOnClose:!0,imageRender:()=>i.jsx(I,{info:o,style:{maxWidth:"90vw",maxHeight:"90vh"}}),toolbarRender:()=>null}}),i.jsx(u,{type:"default",icon:i.jsx("i",{className:"fa-solid fa-up-right-from-square"}),style:{position:"absolute",bottom:10,right:10},className:"show-on-hover-item",target:"_blank",href:f(o.id)})]})}),[]);return i.jsx(a,{collectionName:(s==null?void 0:s.name)+" - Videos",fetchNext:l,renderItem:d,downloadItem:p,getItemCursor:o=>o.cursor,rowKey:o=>o.id})}export{W as default};
