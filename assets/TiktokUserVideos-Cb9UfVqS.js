import{r as s,aJ as r,aL as d,b4 as a}from"./index-DpaN6uAl.js";import{g as l}from"./index-rvYtgFZD.js";import{C as c}from"./Collection-D1oeBoza.js";import{L as u}from"./index-DT-2K0c2.js";import{I as f}from"./index-BN3srwb7.js";import{A as h}from"./index-CZgQ3Pzk.js";import"./MyApp-DT7Mp6Ol.js";import"./core-D-7c89Uq.js";import"./videos-BW8p7RVs.js";import"./index-BfITeoTr.js";import"./responsiveObserver-ClmlXGh5.js";import"./useBreakpoint-B2SKj2Kc.js";import"./index-Ds18S18h.js";import"./index-DaSB5I0t.js";import"./PurePanel-CEQRX1Up.js";import"./index-C7pE-BUF.js";import"./SearchOutlined-DiRblE_s.js";import"./index-BZSDr9-Z.js";import"./EyeOutlined-B8SRD3zh.js";import"./index-H3jvmfVn.js";import"./index-bF29bHdo.js";import"./Dropdown-Cjl61cci.js";import"./Collapse-BssQgmtS.js";import"./index-BFLxmSeF.js";import"./file-download-C8N_4s74.js";import"./index-Ddgbd1e2.js";import"./index-Dck10nsq.js";import"./index-B5hXcU25.js";import"./Pagination-gvKXwaTG.js";import"./row-Cpqffg62.js";import"./addEventListener-BsD1Ca8X.js";function X({target:i}){const t=s.useCallback(async(o=[],m)=>{var e;return i!=null&&i.id?await l(i.username||"",m||((e=o[o.length-1])==null?void 0:e.cursor)):void 0},[i]),p=s.useCallback(o=>r.jsx(u.Item,{children:r.jsxs("div",{className:"show-on-hover-trigger",children:[r.jsx(f,{src:o.video.dynamicCover,width:250,height:330,style:{objectFit:"cover",borderRadius:10},preview:!1}),r.jsx(d,{type:"default",icon:r.jsx("i",{className:"fa-solid fa-up-right-from-square"}),style:{position:"absolute",bottom:10,right:10},className:"show-on-hover-item",target:"_blank",href:"https://www.tiktok.com/@"+(i==null?void 0:i.id)+"/video/"+o.id})]})}),[]),n=s.useCallback((o,m)=>({name:o.id+".mp4",url:o.video.downloadAddr}),[]);return r.jsx(c,{collectionName:(i==null?void 0:i.name)+" - Tiktok User Videos",fetchNext:t,renderItem:p,downloadItem:n,getItemCursor:o=>o.cursor||"",rowKey:o=>o.id,header:()=>{var o;return r.jsx(h,{showIcon:!0,type:"info",message:"Total "+a((o=i==null?void 0:i.raw)==null?void 0:o.videoCount)+" videos"})}})}export{X as default};
