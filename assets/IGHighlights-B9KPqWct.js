import{r as m,aM as t,ba as d,aQ as h}from"./index-Cfldxvxn.js";import u from"./Collection-CTplUhYq.js";import{g as f,a as x}from"./highlights-BCO1HSNs.js";import{c as g}from"./core-DIonqs3o.js";import{L as w}from"./index-IzHO_Iw4.js";import{I as b}from"./index-D6pDVHgB.js";import"./index-TzU1NHuA.js";import"./file-download-DkBxbiL2.js";import"./MyApp-DfLIkit0.js";import"./index-B6mFG7la.js";import"./Dropdown-rxUGbstI.js";import"./PurePanel-CdQl6ToW.js";import"./move-B4I-_4o4.js";import"./index-Dlor9x-6.js";import"./index-CMRZ-Ii7.js";import"./TextArea-DatG5v4l.js";import"./EyeOutlined-BmIOsrY6.js";import"./SearchOutlined-BBc8TCpi.js";import"./index-Bazl6V3v.js";import"./Pagination-ZkXhT7N8.js";import"./useBreakpoint-zd_8jrTA.js";import"./responsiveObserver-B5hu0Rf4.js";import"./index-Vd1Y5iii.js";import"./index-C9ySpSsi.js";import"./DownOutlined-CdwcTXBW.js";import"./row-DWg2GWfi.js";import"./addEventListener-DftYHRAD.js";function P({target:r,onOpenHighlight:e}){const p=m.useCallback(async(i=[])=>r!=null&&r.id?i.length?[]:await f(r.id):void 0,[r]),n=m.useCallback(i=>{var o,a;return t.jsxs(w.Item,{className:"show-on-hover-trigger",children:[t.jsx(b,{src:i.cover,width:100,height:100,style:{objectFit:"cover",borderRadius:"50%",cursor:"pointer"},preview:!1,onClick:()=>{e==null||e(i)}}),t.jsx("a",{href:"https://www.instagram.com/stories/highlights/"+i.id.split(":")[1],target:"_blank",style:{display:"block",wordWrap:"break-word",maxWidth:100,padding:5,fontWeight:"bold",textAlign:"center",fontSize:"1em"},title:i.title,children:d(i.title,30)}),t.jsx(h,{type:"default",icon:t.jsx("i",{className:"fa-solid fa-up-right-from-square"}),style:{position:"absolute",top:0,right:0},className:"show-on-hover-item",target:"_blank",href:g("stories/highlights/"+((a=(o=i.id)==null?void 0:o.split(":"))==null?void 0:a[1]))})]})},[]),c=m.useCallback(async(i,o)=>(await x(i.id)).map(s=>{const l=!!s.video;return{url:l?s.video:s.image,name:s.id+(l?".mp4":".jpg")}}),[]);return t.jsx(u,{collectionName:(r==null?void 0:r.username)+" - IG Highlights",fetchNext:p,renderItem:n,downloadItem:c,rowKey:i=>i.id})}export{P as default};
