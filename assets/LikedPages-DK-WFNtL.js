import{av as o}from"./index-Dwpma3vX.js";import{u as d,I as h,o as p,b as u}from"./MyApp-CaAHD_sl.js";import{E as x}from"./ExportButton-C31tM-Dx.js";import{C as f}from"./Collection-Duhytgd6.js";import{c as j}from"./pages-CHgtCpKi.js";import{A as k}from"./index-CHPm_ATI.js";import{L as y}from"./index-B1-l0GI_.js";import{I as _}from"./index-BAmkjU4S.js";import"./file-download-BEwLUfs_.js";import"./index-CjRY1w1B.js";import"./Dropdown-Cy_5j5G7.js";import"./PurePanel-lbpTE9yy.js";import"./index-qYag26Fr.js";import"./index-QNqn8XPT.js";import"./index-C3vKAcCx.js";import"./index-D-uzMAVF.js";import"./index-CnpxtjSf.js";import"./addEventListener-CAhr9VRf.js";import"./index-yv7_mBYm.js";import"./index-O5-mSQhR.js";import"./Pagination-CDlhp95V.js";import"./useBreakpoint-B5KK-xwT.js";import"./row-BHiT-vw1.js";function W({target:i}){const{ti:a}=d(),t=async(e=[],s)=>{var r;return i!=null&&i.id?await j({uid:i.id,cursor:s||((r=e[e.length-1])==null?void 0:r.cursor)}):void 0},c=e=>o.jsx(y.Item,{children:o.jsxs(u,{direction:"vertical",style:{maxWidth:150},children:[o.jsx(_,{src:e.image,style:{width:150,height:150,objectFit:"contain",borderRadius:10}}),o.jsxs("span",{style:{margin:0},children:[o.jsx("span",{style:{opacity:.7},children:e.id}),o.jsx("br",{}),o.jsx("a",{href:e.url,target:"_blank",children:o.jsx("b",{children:e.name})})]})]})});return o.jsx(f,{collectionName:(i==null?void 0:i.name)+" - Liked Pages",fetchNext:t,renderItem:c,getItemCursor:e=>e.cursor,rowKey:e=>e.id,showPagination:!0,all:!0,searchPlaceholder:e=>a({en:`Search in ${e.length} liked pages`,vi:`Tìm trong ${e.length} trang được thích`}),onSearch:(e,s)=>h(e,s.name+s.id),header:e=>{var n,r,l,m;const s=((n=e[0])==null?void 0:n.total)&&((r=e[0])==null?void 0:r.total)!==e.length;return o.jsx(k,{type:"success",showIcon:!0,message:a({en:`Liked ${e.length} public pages`+(s?` (in total ${(l=e[0])==null?void 0:l.total} likes)`:""),vi:`Đã thích ${e.length} trang công khai`+(s?` (trong tổng ${(m=e[0])==null?void 0:m.total} lượt thích)`:"")})})},headerButtons:e=>o.jsx(x,{data:e,options:[{key:"uid",label:".txt (pages id)",prepareData:s=>({fileName:(i==null?void 0:i.name)+"_liked_pages_id.txt",data:s.map(n=>n.id).join(`
`)})},{key:"id_name",label:".csv (page id+name)",prepareData:s=>({fileName:(i==null?void 0:i.name)+"_liked_pages_id_name.csv",data:p(s.map(n=>({id:n.id,name:n.name})))})},{key:"json",label:".json",prepareData:s=>({fileName:(i==null?void 0:i.name)+"_liked_pages.json",data:JSON.stringify(s,null,4)})},{key:"csv",label:".csv",prepareData:s=>({fileName:(i==null?void 0:i.name)+"_liked_pages.csv",data:p(s)})}]})})}export{W as default};
