import{r as _,ao as s}from"./index-BFPfPAaZ.js";import{C as T}from"./Collection-DRGdzvMz.js";import{x as F,a as N,S as v,B as e,T as I}from"./MyApp-BdpL4ZtE.js";import{L as E}from"./index-Cnh5QOU1.js";import{I as G}from"./index-B5v-xJix.js";import{T as S}from"./index-DimRadIr.js";import"./index-1gnSJny3.js";import"./file-download-CstS00Qr.js";import"./index-Bi9aqrJh.js";import"./Dropdown-BkgZXLuV.js";import"./PurePanel-SxyVbxnL.js";import"./index-B-l378Vl.js";import"./TextArea-CJ5eWy81.js";import"./addEventListener-Bjda6oWl.js";import"./index-BkSv2wHt.js";import"./Pagination-CiSJ2nYJ.js";import"./useBreakpoint-CBpI-EAH.js";import"./responsiveObserver-B_XlD0op.js";import"./row-lZScvilV.js";import"./styleChecker-CUboSsV6.js";async function L({groupId:r="",cursor:n=""}){var o,c;const m=await F({fb_api_req_friendly_name:"GroupsCometFilesTabPaginationQuery",variables:{count:15,cursor:n,groupDocsFileName:null,groupID:r,orderby:"TIME_DESC",scale:1,id:r},doc_id:"24326962373618252"}),p=JSON.parse(m),{edges:t=[],page_info:a={}}=((c=(o=p==null?void 0:p.data)==null?void 0:o.node)==null?void 0:c.group_docs_and_files)||{};return t.map(i=>{var u,w,x,f,h,d,y,b,j,C,k;return{download_url:(u=i==null?void 0:i.node)==null?void 0:u.download_url,name:(w=i==null?void 0:i.node)==null?void 0:w.name,post_url:(f=(x=i==null?void 0:i.node)==null?void 0:x.original_post)==null?void 0:f.url,creation_time:(d=(h=i==null?void 0:i.node)==null?void 0:h.original_post)==null?void 0:d.creation_time,icon:(b=(y=i==null?void 0:i.node)==null?void 0:y.icon)==null?void 0:b.uri,file_type:(j=i==null?void 0:i.node)==null?void 0:j.file_type,owners:(k=(C=i==null?void 0:i.node)==null?void 0:C.original_post)==null?void 0:k.actors.map(l=>({id:l==null?void 0:l.id,name:l==null?void 0:l.name,url:l==null?void 0:l.url})),cursor:a==null?void 0:a.end_cursor}})}function g({target:r}){const{ti:n}=N(),m=_.useCallback(async(o=[],c)=>{if(!(r!=null&&r.id)||!(r!=null&&r.type))return;const i=o==null?void 0:o[(o==null?void 0:o.length)-1];return await L({groupId:r==null?void 0:r.id,cursor:c||(i==null?void 0:i.cursor)||""})},[r]),p=_.useCallback(o=>s.jsx(E.Item,{children:s.jsxs(v,{direction:"vertical",align:"center",style:{minWidth:150},children:[s.jsx(v,{style:{padding:"10px"},children:s.jsx(e.Ribbon,{text:s.jsx("i",{className:"fa fa-times"}),color:"red",style:{display:o.download_url?"none":"block"},children:s.jsx(I,{title:o.download_url?n({en:"Download",vi:"Tải xuống"}):n({en:"No download link",vi:"Không có link tải"}),children:s.jsx(G,{src:o.icon,alt:o.name,width:70,height:70,style:{objectFit:"cover",borderRadius:"10px",cursor:"pointer"},preview:!1,onClick:()=>o.download_url&&window.open(o.download_url)})})})}),s.jsx(I,{title:n({en:"View post",vi:"Xem bài viết"}),placement:"bottom",children:s.jsx(S.Paragraph,{style:{maxWidth:"150px",wordWrap:"break-word"},onClick:()=>window.open(o.post_url),children:o.name})})]})}),[]),t=_.useCallback(o=>({url:o.download_url,name:o.name}),[]),a=o=>o.cursor||"";return s.jsx(T,{collectionName:(r==null?void 0:r.name)+" - Files",fetchNext:m,renderItem:p,downloadItem:t,getItemCursor:a,rowKey:o=>o.name})}export{g as default};