import{r as n,aA as r,aB as b}from"./index-COYbw2nA.js";import{u as x,V as h,a7 as w,a8 as y,b as u,B as j,h as k,i as C,L as v}from"./MyApp-BqOFGx1Y.js";import{C as T}from"./Collection-DrcKITMh.js";import{g as A,a as E,b as N}from"./albums-DXnbv63Z.js";import{A as S}from"./index-fd59G_xD.js";import{L as B}from"./index-C-CwXdPO.js";import{I}from"./index-BaGFYROl.js";import{T as L}from"./index-C2DU9lVT.js";import"./index-CuRhIo_n.js";import"./file-download-DzAs5kbr.js";import"./index-Bc35wtjH.js";import"./Dropdown-C0xfjFGB.js";import"./PurePanel-n6z--zP8.js";import"./index-AGmSUtxm.js";import"./index-DJ37g3_M.js";import"./EyeOutlined-DDdMQV6J.js";import"./SearchOutlined-_u8rvD7y.js";import"./index-CRqcZYdM.js";import"./Pagination-C49DcUwG.js";import"./useBreakpoint-DVIPjZl0.js";import"./responsiveObserver-BI3UFpZ1.js";import"./index-ChQ8N6ec.js";import"./row-CTG_2Oza.js";import"./addEventListener-D2Oj2EJ2.js";function io({target:s,onOpenAlbum:e}){const{ti:m}=x(),d=n.useCallback(async(o=[])=>{var c;if(!(s!=null&&s.id)||!(s!=null&&s.type))return;const i=o==null?void 0:o[(o==null?void 0:o.length)-1];if(s.type!==h.Group)return(await A({id:s==null?void 0:s.id,accessToken:await w(y.EAAB),fromId:(i==null?void 0:i.id)||""})).albums;const p=s.type===h.Group?await E({groupId:s.id,cursor:i==null?void 0:i.cursor}):await N({uid:s.id,cursor:i==null?void 0:i.cursor});if((c=p.albums)!=null&&c.length){let a=new Set(o.map(l=>l.id));return p.albums.filter(l=>!a.has(l.id))}return[]},[s]),t=n.useCallback(()=>r.jsx(u,{children:r.jsx(S,{showIcon:!0,type:"info",message:m({en:"Click any album to view photos",vi:"Click album bất kỳ để xem ảnh"})})}),[m]),f=n.useCallback(o=>r.jsx(B.Item,{children:r.jsxs(u,{direction:"vertical",children:[r.jsx(j.Ribbon,{text:k(o.count),children:r.jsxs("div",{className:"show-on-hover-trigger",children:[r.jsx(I,{src:o.picture,alt:o.name,width:150,height:150,style:{objectFit:"cover",borderRadius:"10px",cursor:"pointer"},preview:!1,onClick:()=>{e==null||e(o)}}),r.jsx(b,{type:"default",icon:r.jsx("i",{className:"fa-solid fa-up-right-from-square"}),style:{position:"absolute",bottom:10,right:10},className:"show-on-hover-item",target:"_blank",href:C(o.id)})]})}),r.jsx(L.Paragraph,{style:{maxWidth:"150px",wordWrap:"break-word"},onClick:()=>window.open(o.link),children:o.name})]})}),[]);return r.jsx(T,{collectionName:(s==null?void 0:s.name)+" - Albums",fetchNext:d,renderItem:f,rowKey:o=>o.id,header:t,searchPlaceholder:o=>m({en:`Search in ${o==null?void 0:o.length} albums...`,vi:`Tìm trong ${o.length} albums...`}),onSearch:(o,i)=>v(o,i.name)})}export{io as default};