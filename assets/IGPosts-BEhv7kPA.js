import{r as a,aq as r}from"./index-CX461bZ7.js";import{g as x}from"./index-BDd9Ngnt.js";import{S as v,W as f}from"./MyApp-BdU98SHx.js";import{i as d}from"./icons-CzjeALro.js";import{C as g}from"./Collection-BmfOhQfr.js";import{L as m}from"./index-CtbOtFt2.js";import{I as j}from"./index-QtiY48Vm.js";import"./index-vuHwb1ab.js";import"./index-C5AF9TzP.js";import"./responsiveObserver-DUYzmFPe.js";import"./useBreakpoint-DNjyW7sX.js";import"./index-BGu2aXWA.js";import"./index-BesEGoUg.js";import"./PurePanel-Cljw82G2.js";import"./index-x94hlA63.js";import"./TextArea-D6nFyh_l.js";import"./addEventListener-lcr56SeY.js";import"./index-DXm4C6oh.js";import"./Dropdown-Bn0d3AP-.js";import"./index-D2lbu_O1.js";import"./index-DxubafEX.js";import"./file-download-Do8f2PPK.js";import"./index-DBzt-ARy.js";import"./Pagination-DaQVeyeA.js";import"./row-C39O-hvc.js";function B({target:s}){const u=a.useCallback(async(o=[],n)=>{var t;return s!=null&&s.id?await x(s.igName,n||((t=o[o.length-1])==null?void 0:t.cursor)):void 0},[s]),p=a.useCallback(o=>{var n,i,t;return r.jsxs(m.Item,{children:[r.jsx(j,{src:o.image,width:250,height:250,style:{objectFit:"cover"},preview:o.video||(n=o.carousel)!=null&&n.length?{destroyOnClose:!0,imageRender:()=>{var e;return(e=o.carousel)!=null&&e.length?r.jsx(v,{style:{maxWidth:"90vw",maxHeight:"90vh",alignItems:"center",overflowY:"auto",overflowX:"hidden"},children:r.jsx(m,{grid:{gutter:10},style:{width:"100%"},dataSource:o.carousel,renderItem:p,rowKey:l=>l.id})}):r.jsx("video",{autoPlay:!0,controls:!0,loop:!0,src:o.video,style:{maxWidth:"90vw",maxHeight:"90vh"}})},toolbarRender:()=>null}:void 0}),r.jsx("p",{style:{wordWrap:"break-word",maxWidth:250,padding:5},title:o.caption,children:f(o.caption,30)}),r.jsx("div",{style:{position:"absolute",top:10,right:10,pointerEvents:"none"},children:((i=o.carousel)==null?void 0:i.length)>0?r.jsxs(r.Fragment,{children:[r.jsx("span",{children:(t=o.carousel)==null?void 0:t.length}),d.IGCarousel]}):o.video?d.IGVideo:null})]})},[]),h=a.useCallback((o,n)=>{var t;function i(e,l=""){const c=!!e.video;return{url:c?e.video:e.image,name:l+e.id+(c?".mp4":".jpg")}}return((t=o.carousel)==null?void 0:t.length)>0?o.carousel.map((e,l)=>i(e,l+"_")):i(o)},[]);return r.jsx(g,{collectionName:(s==null?void 0:s.igName)+" - IG Posts",fetchNext:u,renderItem:p,downloadItem:h,getItemCursor:o=>o.cursor||"",rowKey:o=>o.id})}export{B as default};