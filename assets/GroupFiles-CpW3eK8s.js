import{r as _,ap as s}from"./index-BZV4UHbq.js";import{C as I}from"./Collection-DparSUBE.js";import{y as T,u as F,a as e,T as v,B as N,D as E}from"./MyApp-CpQSQuW8.js";import{L as S}from"./index-CfX5Jbsl.js";import{I as G}from"./index-C1wXvjkP.js";import{T as L}from"./index-B2K1fK30.js";import"./index-xiHX5eb3.js";import"./file-download-CNCAKmwd.js";import"./index-CHHU6JzR.js";import"./Dropdown-wsthajcj.js";import"./PurePanel-TwJPV-d4.js";import"./index-CXkeMB69.js";import"./index-bWqKXhvb.js";import"./index-BuHxvnd_.js";import"./addEventListener-C1baKXre.js";import"./index-BxU63dyi.js";import"./index-BabwV2Xa.js";import"./Pagination-BwLvSQIN.js";import"./useBreakpoint-Cfk-nNrv.js";import"./responsiveObserver-DvoAOAAi.js";import"./row-BfIPyn7-.js";async function R({groupId:r="",cursor:a=""}){var o,l;const m=await T({fb_api_req_friendly_name:"GroupsCometFilesTabPaginationQuery",variables:{count:15,cursor:a,groupDocsFileName:null,groupID:r,orderby:"TIME_DESC",scale:1,id:r},doc_id:"24326962373618252"}),p=JSON.parse(m),{edges:t=[],page_info:c={}}=((l=(o=p==null?void 0:p.data)==null?void 0:o.node)==null?void 0:l.group_docs_and_files)||{};return t.map(i=>{var u,w,x,f,h,y,d,b,j,C,k;return{download_url:(u=i==null?void 0:i.node)==null?void 0:u.download_url,name:(w=i==null?void 0:i.node)==null?void 0:w.name,post_url:(f=(x=i==null?void 0:i.node)==null?void 0:x.original_post)==null?void 0:f.url,creation_time:(y=(h=i==null?void 0:i.node)==null?void 0:h.original_post)==null?void 0:y.creation_time,icon:(b=(d=i==null?void 0:i.node)==null?void 0:d.icon)==null?void 0:b.uri,file_type:(j=i==null?void 0:i.node)==null?void 0:j.file_type,owners:(k=(C=i==null?void 0:i.node)==null?void 0:C.original_post)==null?void 0:k.actors.map(n=>({id:n==null?void 0:n.id,name:n==null?void 0:n.name,url:n==null?void 0:n.url})),cursor:c==null?void 0:c.end_cursor}})}function io({target:r}){const{ti:a}=F(),m=_.useCallback(async(o=[],l)=>{if(!(r!=null&&r.id)||!(r!=null&&r.type))return;const i=o==null?void 0:o[(o==null?void 0:o.length)-1];return await R({groupId:r==null?void 0:r.id,cursor:l||(i==null?void 0:i.cursor)||""})},[r]),p=_.useCallback(o=>s.jsx(S.Item,{children:s.jsxs(e,{direction:"vertical",align:"center",style:{minWidth:150},children:[s.jsx(v,{title:o.download_url?a({en:"Download",vi:"Tải xuống"}):a({en:"No download link",vi:"Không có link tải"}),children:s.jsx(e,{style:{padding:"10px"},children:s.jsx(N.Ribbon,{text:s.jsx("i",{className:"fa fa-times"}),color:"red",style:{display:o.download_url?"none":"block"},children:s.jsx(G,{src:o.icon,alt:o.name,width:70,height:70,style:{objectFit:"cover",borderRadius:"10px",cursor:"pointer"},preview:!1,onClick:()=>o.download_url&&window.open(o.download_url)})})})}),s.jsx(v,{title:a({en:"View post",vi:"Xem bài viết"}),placement:"bottom",children:s.jsx(L.Paragraph,{style:{maxWidth:"150px",wordWrap:"break-word"},onClick:()=>window.open(o.post_url),children:o.name})})]})}),[]),t=_.useCallback(async o=>({url:o.download_url,name:o.name}),[]),c=o=>o.cursor||"";return s.jsx(I,{collectionName:(r==null?void 0:r.name)+" - Files",fetchNext:m,renderItem:p,downloadItem:t,getItemCursor:c,rowKey:o=>o.name+o.creation_time,onSearch:(o,l)=>E(o,l.name)})}export{io as default};
