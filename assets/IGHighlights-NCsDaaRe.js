import{r as m,aW as t,bj as d,a_ as h}from"./index-By6QH6pK.js";import u from"./Collection-CJVmJ4XY.js";import{g as f,a as x}from"./highlights-CgAyNGqF.js";import{c as g}from"./core-Dv5kUt1S.js";import{L as w}from"./index-C1fuNhzh.js";import{I as b}from"./MyApp-DRoqPp25.js";import"./index-Yi6aXHWQ.js";import"./file-download-J5vlZs5n.js";import"./react-hotkeys-hook.esm-CQLFPmKj.js";import"./index-IKXs4A2f.js";import"./index-DfzeQf_9.js";import"./index-DOGksFvd.js";import"./index-nJuG1vlj.js";import"./Dropdown-Dus-bjEJ.js";import"./PurePanel-CgxAjXTW.js";import"./move-BtkX6lmQ.js";import"./index-OL0ksU0U.js";import"./TextArea-T9XEKIMP.js";import"./SearchOutlined-DCUa4zAG.js";import"./index-wbXPiLFB.js";import"./Pagination-CUQMFLRJ.js";import"./useBreakpoint-CY6WpSuv.js";import"./useForceUpdate-DhKOmaG8.js";import"./index-CZ4BF0Pd.js";import"./index-DyiPSS8A.js";import"./List-DCI1BWKP.js";import"./DownOutlined-CBD21Oi3.js";import"./row-BB41V0du.js";import"./col-CJrWNI4G.js";function X({target:r,onOpenHighlight:e}){const l=m.useCallback(async(i=[])=>r!=null&&r.id?i.length?[]:await f(r.id):void 0,[r]),n=m.useCallback(i=>{var o,a;return t.jsxs(w.Item,{className:"show-on-hover-trigger",children:[t.jsx(b,{src:i.cover,width:100,height:100,style:{objectFit:"cover",borderRadius:"50%",cursor:"pointer"},preview:!1,onClick:()=>{e==null||e(i)}}),t.jsx("a",{href:"https://www.instagram.com/stories/highlights/"+i.id.split(":")[1],target:"_blank",style:{display:"block",wordWrap:"break-word",maxWidth:100,padding:5,fontWeight:"bold",textAlign:"center",fontSize:"1em"},title:i.title,children:d(i.title,30)}),t.jsx(h,{type:"default",icon:t.jsx("i",{className:"fa-solid fa-up-right-from-square"}),style:{position:"absolute",top:0,right:0},className:"show-on-hover-item",target:"_blank",href:g("stories/highlights/"+((a=(o=i.id)==null?void 0:o.split(":"))==null?void 0:a[1]))})]})},[]),c=m.useCallback(async(i,o)=>(await x(i.id)).map(s=>{const p=!!s.video;return{url:p?s.video:s.image,name:s.id+(p?".mp4":".jpg")}}),[]);return t.jsx(u,{collectionName:(r==null?void 0:r.username)+" - IG Highlights",fetchNext:l,renderItem:n,downloadItem:c,rowKey:i=>i.id})}export{X as default};
