import{aK as h,aM as o,b2 as u,ba as p}from"./index-tVoMhA9s.js";import{E as x}from"./ExportButton-ChQJdARN.js";import{C as f}from"./Collection-BcXZxwrT.js";import{c as j}from"./pages-DPUHr-ps.js";import{W as k}from"./WordStatisticButton-A3QSN6sy.js";import{i as y,S as _}from"./MyApp-CoDKbg3z.js";import{A as b}from"./index-CHZufhTK.js";import{L as g}from"./index-BVbMD4hb.js";import{I as L}from"./index-t75xhCLI.js";import{T as l}from"./index-Bqz-r1iT.js";import"./file-download-Bqk0jSgp.js";import"./index-Bqwod97o.js";import"./Dropdown-CrNk_q_E.js";import"./PurePanel-EiPMio6l.js";import"./index-BIRSK16X.js";import"./index-BSASTvoM.js";import"./index-w13h2RZf.js";import"./EyeOutlined-uUBrf60p.js";import"./SearchOutlined-CKyvlx52.js";import"./index-D9_Ry4ua.js";import"./BadgeWrapper-B81HzwqF.js";import"./MyTable-DTpR6XdV.js";import"./index-DpMzmtNy.js";import"./Table-CTK-PvVJ.js";import"./addEventListener-dDSnjPWH.js";import"./useBreakpoint-DffsVVV0.js";import"./Pagination-B4Vcq2AE.js";import"./row-cFsHLhnI.js";import"./index-EEi40h25.js";function Z({target:i}){const{ti:a}=h();y("Pages.data",[]);const c=async(e=[],s)=>{var n;return i!=null&&i.id?await j({uid:i.id,cursor:s||((n=e[e.length-1])==null?void 0:n.cursor)}):void 0},d=e=>o.jsx(g.Item,{children:o.jsxs(_,{direction:"vertical",style:{maxWidth:150},children:[o.jsx(L,{src:e.image,style:{width:150,height:150,objectFit:"contain",borderRadius:10}}),o.jsxs("span",{style:{margin:0},children:[o.jsxs(l.Text,{type:"secondary",children:[" ",e.id," "]}),o.jsx("br",{}),o.jsx(l.Link,{strong:!0,href:e.url,target:"_blank",children:e.name})]})]})});return o.jsx(f,{collectionName:(i==null?void 0:i.name)+" - Liked Pages",fetchNext:c,renderItem:d,getItemCursor:e=>e.cursor,rowKey:e=>e.id,showPagination:!0,all:!0,searchPlaceholder:e=>a({en:`Search in ${e.length} liked pages`,vi:`Tìm trong ${e.length} trang được thích`}),onSearch:(e,s)=>u(e,s.name+s.id),header:e=>{var r,n,m,t;const s=((r=e[0])==null?void 0:r.total)&&((n=e[0])==null?void 0:n.total)!==e.length;return o.jsx(b,{type:"success",showIcon:!0,message:a({en:`Liked ${e.length} public pages`+(s?` (in total ${(m=e[0])==null?void 0:m.total} likes)`:""),vi:`Đã thích ${e.length} trang công khai`+(s?` (trong tổng ${(t=e[0])==null?void 0:t.total} lượt thích)`:"")})})},headerButtons:e=>o.jsxs(o.Fragment,{children:[o.jsx(x,{data:e,options:[{key:"uid",label:".txt (pages id)",prepareData:s=>({fileName:(i==null?void 0:i.name)+"_liked_pages_id.txt",data:s.map(r=>r.id).join(`
`)})},{key:"id_name",label:".csv (page id+name)",prepareData:s=>({fileName:(i==null?void 0:i.name)+"_liked_pages_id_name.csv",data:p(s.map(r=>({id:r.id,name:r.name})))})},{key:"json",label:".json",prepareData:s=>({fileName:(i==null?void 0:i.name)+"_liked_pages.json",data:JSON.stringify(s,null,4)})},{key:"csv",label:".csv",prepareData:s=>({fileName:(i==null?void 0:i.name)+"_liked_pages.csv",data:p(s)})}]}),o.jsx(k,{name:"LikedPages",text:e.map(s=>s.name).join(" ")})]})})}export{Z as default};