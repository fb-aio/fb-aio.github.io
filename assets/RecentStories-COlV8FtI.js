const __vite__fileDeps=["./RecentStoryViewer-IGmZT4SP.js","./index-C18KX0bs.js","./index-BM_p-30O.css","./MyApp-134z9Ewy.js","./StoryViewers-BTgF90x3.js","./Collection-QeN2AZhW.js","./index-B2IKIyJF.js","./file-download-BhOYhnZo.js","./useCacheState-B5EIi5AM.js","./index-Bb3Gxkrc.js","./Dropdown--WaCZpHb.js","./PurePanel-B-Oik-oK.js","./index-DBmoidCd.js","./TextArea-v2wMscgk.js","./addEventListener-Bvk7TFEG.js","./index-nNXs6R-b.js","./Pagination-CDZtfPwT.js","./row-CrycN8YO.js","./index-C09uftll.js","./styleChecker-D5cZZSfU.js","./index-CJjZPvZK.js","./index-BjdokYoc.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{r as i,ap as o,at as d}from"./index-C18KX0bs.js";import{t as m,aF as c,aG as l,D as u,a2 as g,aH as x}from"./MyApp-134z9Ewy.js";import{C as b}from"./Collection-QeN2AZhW.js";import{L as h}from"./index-nNXs6R-b.js";import{I as f}from"./index-BjdokYoc.js";import{A as y}from"./index-CJjZPvZK.js";import{T as w}from"./index-C09uftll.js";import"./index-B2IKIyJF.js";import"./file-download-BhOYhnZo.js";import"./useCacheState-B5EIi5AM.js";import"./index-Bb3Gxkrc.js";import"./Dropdown--WaCZpHb.js";import"./PurePanel-B-Oik-oK.js";import"./index-DBmoidCd.js";import"./TextArea-v2wMscgk.js";import"./addEventListener-Bvk7TFEG.js";import"./Pagination-CDZtfPwT.js";import"./row-CrycN8YO.js";import"./styleChecker-D5cZZSfU.js";const v=i.lazy(()=>d(()=>import("./RecentStoryViewer-IGmZT4SP.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21]),import.meta.url));function V(){i.useEffect(()=>{m("RecentStories:onLoad")},[]);const n=async(e,r)=>{var s;return await l(r||((s=e==null?void 0:e[e.length-1])==null?void 0:s.cursor)||"")},a=(e,r)=>o.jsx(h.Item,{children:o.jsxs(u.Ribbon,{text:e.stories.length,style:{opacity:e.stories.length>1?1:0},children:[o.jsx(f,{src:e.thumbnail,style:{width:160,height:270,borderRadius:10,objectFit:"cover"},preview:{destroyOnClose:!0,toolbarRender:()=>null,imageRender:()=>o.jsx(v,{story:e})}}),o.jsx(y,{src:e.owner.avatar,size:40,style:{position:"absolute",top:10,left:10,borderWidth:4,borderColor:"#0866FF"},onClick:()=>{window.open("https://fb.com/"+e.owner.id)}}),o.jsx("div",{style:{background:"linear-gradient(0deg, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0) 100%)",position:"absolute",bottom:0,left:0,padding:"5px 10px",width:"100%",paddingTop:"50px",pointerEvents:"none"},children:o.jsx(w.Text,{style:{color:"#eee"},children:e.owner.name})})]})}),p=async e=>(await g(e.bucked_id)).map((t,s)=>({name:x(e.owner.name)+(t.video?".mp4":".jpg"),url:t.video||t.image||t.thumbnail}));return o.jsx(b,{collectionName:"Recent Stories "+c(),fetchNext:n,renderItem:a,downloadItem:p,getItemCursor:e=>e==null?void 0:e.cursor,rowKey:e=>e.bucked_id})}export{V as default};
