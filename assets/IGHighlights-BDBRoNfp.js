import{r as m,aM as t,bz as d,aO as h}from"./index-tVoMhA9s.js";import{C as u}from"./Collection-BcXZxwrT.js";import{g as f,a as x}from"./highlights-BfcktjQD.js";import{c as g}from"./core-BIEkZ5Fe.js";import{L as w}from"./index-BVbMD4hb.js";import{I as b}from"./index-t75xhCLI.js";import"./index-BIRSK16X.js";import"./file-download-Bqk0jSgp.js";import"./MyApp-CoDKbg3z.js";import"./index-Bqwod97o.js";import"./Dropdown-CrNk_q_E.js";import"./PurePanel-EiPMio6l.js";import"./index-BSASTvoM.js";import"./index-w13h2RZf.js";import"./index-Bqz-r1iT.js";import"./EyeOutlined-uUBrf60p.js";import"./SearchOutlined-CKyvlx52.js";import"./index-D9_Ry4ua.js";import"./Pagination-B4Vcq2AE.js";import"./useBreakpoint-DffsVVV0.js";import"./index-DpMzmtNy.js";import"./row-cFsHLhnI.js";import"./addEventListener-dDSnjPWH.js";function D({target:r,onOpenHighlight:e}){const n=m.useCallback(async(i=[])=>r!=null&&r.id?i.length?[]:await f(r.id):void 0,[r]),p=m.useCallback(i=>{var o,a;return t.jsxs(w.Item,{className:"show-on-hover-trigger",children:[t.jsx(b,{src:i.cover,width:100,height:100,style:{objectFit:"cover",borderRadius:"50%",cursor:"pointer"},preview:!1,onClick:()=>{e==null||e(i)}}),t.jsx("a",{href:"https://www.instagram.com/stories/highlights/"+i.id.split(":")[1],target:"_blank",style:{display:"block",wordWrap:"break-word",maxWidth:100,padding:5,fontWeight:"bold",textAlign:"center",fontSize:"1em"},title:i.title,children:d(i.title,30)}),t.jsx(h,{type:"default",icon:t.jsx("i",{className:"fa-solid fa-up-right-from-square"}),style:{position:"absolute",top:0,right:0},className:"show-on-hover-item",target:"_blank",href:g("stories/highlights/"+((a=(o=i.id)==null?void 0:o.split(":"))==null?void 0:a[1]))})]})},[]),c=m.useCallback(async(i,o)=>(await x(i.id)).map(s=>{const l=!!s.video;return{url:l?s.video:s.image,name:s.id+(l?".mp4":".jpg")}}),[]);return t.jsx(u,{collectionName:(r==null?void 0:r.username)+" - IG Highlights",fetchNext:n,renderItem:p,downloadItem:c,rowKey:i=>i.id})}export{D as default};