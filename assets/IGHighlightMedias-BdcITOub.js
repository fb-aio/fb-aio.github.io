import{r as i,an as t}from"./index-Bauu_rQz.js";import{i as d}from"./icons-CDpKlEpW.js";import{C as c}from"./Collection-Beg4ua-i.js";import{a as l}from"./highlights-YugnRICQ.js";import{L as u}from"./index-BV1u9CSm.js";import{I as x}from"./index-Djwy8iJ2.js";import"./index-CvWoZbjn.js";import"./file-download-Bzst5y78.js";import"./sweetalert2.all-CPfqglTu.js";import"./MyApp-Bys9Gcx7.js";import"./VIP-B0YGNZWp.js";import"./feeds-oFJ5YWBc.js";import"./index-CMHbGXsp.js";import"./Dropdown-B8BeH3Ui.js";import"./PurePanel-BYHlpyJU.js";import"./index-Cpsi3S0Y.js";import"./index-DAG6TrVo.js";import"./index-BPUn4fsJ.js";import"./TextArea-CgQp8A8y.js";import"./addEventListener-CNKtHe32.js";import"./index-Dn7OSutu.js";import"./index-B1NO2A4X.js";import"./index-BwD6JDM3.js";import"./index-B12rPJzZ.js";import"./responsiveObserver-DfN5pXDv.js";import"./useBreakpoint-Cxwl39Yp.js";import"./index-CC5YUJ9m.js";import"./index-BXMmmaBG.js";import"./index-B6GAYVd9.js";import"./index-DVA-9Vh9.js";import"./index-CiB-r7FZ.js";import"./Pagination-Camtoyiw.js";import"./row-BG4wt4tl.js";function Y({target:e,highlight:r}){const s=i.useCallback(async o=>r!=null&&r.id?await l(r.id):void 0,[r]),p=i.useCallback(o=>t.jsxs(u.Item,{children:[t.jsx(x,{src:o.image,width:200,height:330,style:{objectFit:"cover"},preview:o.video?{destroyOnClose:!0,imageRender:()=>t.jsx("video",{autoPlay:!0,controls:!0,loop:!0,src:o.video,style:{maxWidth:"90vw",maxHeight:"90vh"}}),toolbarRender:()=>null}:!0}),o.video&&t.jsx("div",{style:{position:"absolute",top:10,right:10,pointerEvents:"none"},children:d.IGVideo})]}),[]),n=i.useCallback((o,a)=>{const m=!!o.video;return{url:m?o.video:o.image,name:o.id+(m?".mp4":".jpg")}},[]);return t.jsx(c,{collectionName:(e==null?void 0:e.igName)+" - IG Highlight - "+r.title,fetchNext:s,renderItem:p,downloadItem:n,rowKey:o=>o.id,once:!0})}export{Y as default};
