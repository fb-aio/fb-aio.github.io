import{aH as I,r as _,aJ as s,b8 as T}from"./index-DpaN6uAl.js";import{C as F}from"./Collection-D1oeBoza.js";import{j as S,p as E,S as k,T as v,B as N}from"./MyApp-DT7Mp6Ol.js";import{L as G}from"./index-DT-2K0c2.js";import{I as L}from"./index-BN3srwb7.js";import{T as R}from"./index-DaSB5I0t.js";import"./index-BFLxmSeF.js";import"./file-download-C8N_4s74.js";import"./index-Ddgbd1e2.js";import"./Dropdown-Cjl61cci.js";import"./PurePanel-CEQRX1Up.js";import"./index-Dck10nsq.js";import"./index-BZSDr9-Z.js";import"./EyeOutlined-B8SRD3zh.js";import"./SearchOutlined-DiRblE_s.js";import"./index-B5hXcU25.js";import"./Pagination-gvKXwaTG.js";import"./useBreakpoint-B2SKj2Kc.js";import"./responsiveObserver-ClmlXGh5.js";import"./index-C7pE-BUF.js";import"./row-Cpqffg62.js";import"./addEventListener-BsD1Ca8X.js";async function W({groupId:r="",cursor:a=""}){var o,l;const m=await S({fb_api_req_friendly_name:"GroupsCometFilesTabPaginationQuery",variables:{count:15,cursor:a,groupDocsFileName:null,groupID:r,orderby:"TIME_DESC",scale:1,id:r},doc_id:"24326962373618252"}),p=E(m),{edges:t=[],page_info:c={}}=((l=(o=p==null?void 0:p.data)==null?void 0:o.node)==null?void 0:l.group_docs_and_files)||{};return t.map(i=>{var u,w,f,x,h,y,d,b,j,C,e;return{download_url:(u=i==null?void 0:i.node)==null?void 0:u.download_url,name:(w=i==null?void 0:i.node)==null?void 0:w.name,post_url:(x=(f=i==null?void 0:i.node)==null?void 0:f.original_post)==null?void 0:x.url,creation_time:(y=(h=i==null?void 0:i.node)==null?void 0:h.original_post)==null?void 0:y.creation_time,icon:(b=(d=i==null?void 0:i.node)==null?void 0:d.icon)==null?void 0:b.uri,file_type:(j=i==null?void 0:i.node)==null?void 0:j.file_type,owners:(e=(C=i==null?void 0:i.node)==null?void 0:C.original_post)==null?void 0:e.actors.map(n=>({id:n==null?void 0:n.id,name:n==null?void 0:n.name,url:n==null?void 0:n.url})),cursor:c==null?void 0:c.end_cursor}})}function so({target:r}){const{ti:a}=I(),m=_.useCallback(async(o=[],l)=>{if(!(r!=null&&r.id)||!(r!=null&&r.type))return;const i=o==null?void 0:o[(o==null?void 0:o.length)-1];return await W({groupId:r==null?void 0:r.id,cursor:l||(i==null?void 0:i.cursor)||""})},[r]),p=_.useCallback(o=>s.jsx(G.Item,{children:s.jsxs(k,{direction:"vertical",align:"center",style:{minWidth:150},children:[s.jsx(v,{title:o.download_url?a({en:"Download",vi:"Tải xuống"}):a({en:"No download link",vi:"Không có link tải"}),children:s.jsx(k,{style:{padding:"10px"},children:s.jsx(N.Ribbon,{text:s.jsx("i",{className:"fa fa-times"}),color:"red",style:{display:o.download_url?"none":"block"},children:s.jsx(L,{src:o.icon,alt:o.name,width:70,height:70,style:{objectFit:"cover",borderRadius:"10px",cursor:"pointer"},preview:!1,onClick:()=>o.download_url&&window.open(o.download_url)})})})}),s.jsx(v,{title:a({en:"View post",vi:"Xem bài viết"}),placement:"bottom",children:s.jsx(R.Paragraph,{style:{maxWidth:"150px",wordWrap:"break-word"},onClick:()=>window.open(o.post_url),children:o.name})})]})}),[]),t=_.useCallback(async o=>({url:o.download_url,name:o.name}),[]),c=o=>o.cursor||"";return s.jsx(F,{collectionName:(r==null?void 0:r.name)+" - Files",fetchNext:m,renderItem:p,downloadItem:t,getItemCursor:c,rowKey:o=>o.name+o.creation_time,onSearch:(o,l)=>T(o,l.name)})}export{so as default};