import{aK as I,r as _,aM as s,b4 as F}from"./index-QAqi_Ijl.js";import S from"./Collection-DDDvGAyv.js";import{o as T,p as E,S as C,b as v,B as N}from"./MyApp-CoInHuzW.js";import{L as G}from"./index-U-Pus3Jx.js";import{I as K}from"./index-Tz7l3y04.js";import{T as L}from"./index-B1n44GIS.js";import"./index-B2PaMlR-.js";import"./file-download-bcJN7TjE.js";import"./index-E_ys_ULL.js";import"./Dropdown-DUw9YpKz.js";import"./PurePanel-DsxX8CtV.js";import"./move-DcX0kV7d.js";import"./index-tcG9XO_j.js";import"./index-B2U19Tmy.js";import"./TextArea-DV-aWuid.js";import"./EyeOutlined-CK_bL90s.js";import"./SearchOutlined-DAC6U4LA.js";import"./index-D0vuwMvF.js";import"./Pagination-DLNcuOWb.js";import"./useBreakpoint-BseDeWb4.js";import"./responsiveObserver-BvRcBCyA.js";import"./index-BE1nHYJU.js";import"./DownOutlined-Cgoipxi3.js";import"./row-CnHDRxH3.js";import"./addEventListener-Bz2UnPJn.js";async function R({groupId:r="",cursor:p=""}){var o,l;const m=await T({fb_api_req_friendly_name:"GroupsCometFilesTabPaginationQuery",variables:{count:15,cursor:p,groupDocsFileName:null,groupID:r,orderby:"TIME_DESC",scale:1,id:r},doc_id:"24326962373618252"}),a=E(m),{edges:t=[],page_info:c={}}=((l=(o=a==null?void 0:a.data)==null?void 0:o.node)==null?void 0:l.group_docs_and_files)||{};return t.map(i=>{var u,w,f,x,h,y,b,d,j,e,k;return{download_url:(u=i==null?void 0:i.node)==null?void 0:u.download_url,name:(w=i==null?void 0:i.node)==null?void 0:w.name,post_url:(x=(f=i==null?void 0:i.node)==null?void 0:f.original_post)==null?void 0:x.url,creation_time:(y=(h=i==null?void 0:i.node)==null?void 0:h.original_post)==null?void 0:y.creation_time,icon:(d=(b=i==null?void 0:i.node)==null?void 0:b.icon)==null?void 0:d.uri,file_type:(j=i==null?void 0:i.node)==null?void 0:j.file_type,owners:(k=(e=i==null?void 0:i.node)==null?void 0:e.original_post)==null?void 0:k.actors.map(n=>({id:n==null?void 0:n.id,name:n==null?void 0:n.name,url:n==null?void 0:n.url})),cursor:c==null?void 0:c.end_cursor}})}function po({target:r}){const{ti:p}=I(),m=_.useCallback(async(o=[],l)=>{if(!(r!=null&&r.id)||!(r!=null&&r.type))return;const i=o==null?void 0:o[(o==null?void 0:o.length)-1];return await R({groupId:r==null?void 0:r.id,cursor:l||(i==null?void 0:i.cursor)||""})},[r]),a=_.useCallback(o=>s.jsx(G.Item,{children:s.jsxs(C,{direction:"vertical",align:"center",style:{minWidth:150},children:[s.jsx(v,{title:o.download_url?p({en:"Download",vi:"Tải xuống"}):p({en:"No download link",vi:"Không có link tải"}),children:s.jsx(C,{style:{padding:"10px"},children:s.jsx(N.Ribbon,{text:s.jsx("i",{className:"fa fa-times"}),color:"red",style:{display:o.download_url?"none":"block"},children:s.jsx(K,{src:o.icon,alt:o.name,width:70,height:70,style:{objectFit:"cover",borderRadius:"10px",cursor:"pointer"},preview:!1,onClick:()=>o.download_url&&window.open(o.download_url)})})})}),s.jsx(v,{title:p({en:"View post",vi:"Xem bài viết"}),placement:"bottom",children:s.jsx(L.Paragraph,{style:{maxWidth:"150px",wordWrap:"break-word"},onClick:()=>window.open(o.post_url),children:o.name})})]})}),[]),t=_.useCallback(async o=>({url:o.download_url,name:o.name}),[]),c=o=>o.cursor||"";return s.jsx(S,{collectionName:(r==null?void 0:r.name)+" - Files",fetchNext:m,renderItem:a,downloadItem:t,getItemCursor:c,rowKey:o=>o.name+o.creation_time,onSearch:(o,l)=>F(o,l.name)})}export{po as default};
