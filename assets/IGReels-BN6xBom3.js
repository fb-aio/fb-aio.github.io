import{r as t,aL as s,co as i,aN as d}from"./index-Qt1L9Xiw.js";import{C as c}from"./Collection-W4X7IqFa.js";import{g as u}from"./reels-BcUHQe2A.js";import{c as f}from"./core-Bvv-XedI.js";import{V as h}from"./VideoWithMuted-CnU2ASqL.js";import{L as x}from"./index-CeVycvI9.js";import{I as b}from"./index-BAuHam2U.js";import"./index-BX4ZrkmU.js";import"./file-download-cs7-HvOD.js";import"./MyApp-DDUulQzX.js";import"./index-DxPDOh9c.js";import"./Dropdown-CiaV_8Ew.js";import"./PurePanel-D4j__ZHX.js";import"./index-BHhG_OlO.js";import"./index-DAgc2Yal.js";import"./index-CvQxKMxN.js";import"./EyeOutlined-vPM2QFd6.js";import"./SearchOutlined-BQt8S8Mq.js";import"./index-DL30kYih.js";import"./videos-DH6UZvvY.js";import"./Pagination-CHVwkn-q.js";import"./useBreakpoint-CFVo6cTb.js";import"./index-DUm_PftZ.js";import"./row-BPLkYSTc.js";import"./addEventListener-Dg4je8GP.js";function U({target:e}){const l=t.useCallback(async(o=[],a)=>{var m;return e!=null&&e.id?await u(e.id,a||((m=o[o.length-1])==null?void 0:m.cursor)):void 0},[e]),n=t.useCallback(o=>s.jsxs(x.Item,{className:"show-on-hover-trigger",children:[s.jsx(b,{src:o.image,width:200,height:330,style:{objectFit:"cover",borderRadius:10},preview:{destroyOnClose:!0,imageRender:()=>s.jsx(h,{src:o.video,style:{maxWidth:"90vw",maxHeight:"90vh"}}),toolbarRender:()=>null}}),s.jsx("div",{style:{position:"absolute",top:0,left:0,width:"100%",height:"100%",background:"linear-gradient(0deg, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0) 50%)",pointerEvents:"none"},children:s.jsxs("div",{style:{position:"absolute",bottom:15,left:15,fontWeight:"bold",fontSize:"1.1em"},children:[s.jsx("i",{className:"fa-solid fa-play"})," ",i(o.play_count),s.jsx("br",{}),s.jsx("i",{className:"fa-solid fa-heart"})," ",i(o.like_count),s.jsx("br",{}),s.jsx("i",{className:"fa-solid fa-message"})," ",i(o.comment_count)]})}),s.jsx(d,{type:"default",icon:s.jsx("i",{className:"fa-solid fa-up-right-from-square"}),style:{position:"absolute",bottom:10,right:10},className:"show-on-hover-item",target:"_blank",href:f("p/"+o.post_id)})]}),[]),p=t.useCallback((o,a)=>{const r=!!o.video;return{url:r?o.video:o.image,name:o.id+(r?".mp4":".jpg")}},[]);return s.jsx(c,{collectionName:(e==null?void 0:e.username)+" - IG Reels",fetchNext:l,renderItem:n,downloadItem:p,getItemCursor:o=>o.cursor||"",rowKey:o=>o.id})}export{U as default};