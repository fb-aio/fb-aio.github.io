import{aI as h,aK as s,a$ as u,b8 as p}from"./index-BoZ3qCu-.js";import{E as x}from"./ExportButton-DgFEbkrh.js";import{C as f}from"./Collection-Ylhl6kq-.js";import{c as j}from"./pages-DDrXPvn5.js";import{W as k}from"./WordStatisticButton-RBQ9zWZ_.js";import{A as y}from"./index-dSRIMC1R.js";import{L as _}from"./index-9ab-2l-X.js";import{S as b}from"./MyApp-D00-hVKM.js";import{I as g}from"./index-B9p0fwME.js";import{T as l}from"./index-BqA1u72M.js";import"./file-download-Cuv0I7kF.js";import"./index-eKalL2eG.js";import"./Dropdown-DBLdsESi.js";import"./PurePanel-BOikr8JH.js";import"./index-DISxAyNO.js";import"./index-Lhz2nIJB.js";import"./index-AT3_9SK-.js";import"./EyeOutlined-BHVey_FU.js";import"./SearchOutlined-jKWQFlYP.js";import"./index-BarWoG-p.js";import"./MyTable-BCaimdBe.js";import"./index-D8gaebSk.js";import"./Table-CyCG4zvu.js";import"./addEventListener-CnAWjiAc.js";import"./useBreakpoint-F7WTD34q.js";import"./Pagination-DzBVYRJu.js";import"./row-CSBfwUbZ.js";function V({target:i}){const{ti:a}=h(),c=async(e=[],o)=>{var n;return i!=null&&i.id?await j({uid:i.id,cursor:o||((n=e[e.length-1])==null?void 0:n.cursor)}):void 0},d=e=>s.jsx(_.Item,{children:s.jsxs(b,{direction:"vertical",style:{maxWidth:150},children:[s.jsx(g,{src:e.image,style:{width:150,height:150,objectFit:"contain",borderRadius:10}}),s.jsxs("span",{style:{margin:0},children:[s.jsxs(l.Text,{type:"secondary",children:[" ",e.id," "]}),s.jsx("br",{}),s.jsx(l.Link,{strong:!0,href:e.url,target:"_blank",children:e.name})]})]})});return s.jsx(f,{collectionName:(i==null?void 0:i.name)+" - Liked Pages",fetchNext:c,renderItem:d,getItemCursor:e=>e.cursor,rowKey:e=>e.id,showPagination:!0,all:!0,searchPlaceholder:e=>a({en:`Search in ${e.length} liked pages`,vi:`Tìm trong ${e.length} trang được thích`}),onSearch:(e,o)=>u(e,o.name+o.id),header:e=>{var r,n,m,t;const o=((r=e[0])==null?void 0:r.total)&&((n=e[0])==null?void 0:n.total)!==e.length;return s.jsx(y,{type:"success",showIcon:!0,message:a({en:`Liked ${e.length} public pages`+(o?` (in total ${(m=e[0])==null?void 0:m.total} likes)`:""),vi:`Đã thích ${e.length} trang công khai`+(o?` (trong tổng ${(t=e[0])==null?void 0:t.total} lượt thích)`:"")})})},headerButtons:e=>s.jsxs(s.Fragment,{children:[s.jsx(x,{data:e,options:[{key:"uid",label:".txt (pages id)",prepareData:o=>({fileName:(i==null?void 0:i.name)+"_liked_pages_id.txt",data:o.map(r=>r.id).join(`
`)})},{key:"id_name",label:".csv (page id+name)",prepareData:o=>({fileName:(i==null?void 0:i.name)+"_liked_pages_id_name.csv",data:p(o.map(r=>({id:r.id,name:r.name})))})},{key:"json",label:".json",prepareData:o=>({fileName:(i==null?void 0:i.name)+"_liked_pages.json",data:JSON.stringify(o,null,4)})},{key:"csv",label:".csv",prepareData:o=>({fileName:(i==null?void 0:i.name)+"_liked_pages.csv",data:p(o)})}]}),s.jsx(k,{text:e.map(o=>o.name).join(" ")})]})})}export{V as default};
