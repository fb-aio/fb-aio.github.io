import{r as l,an as r}from"./index-C6IDuEAZ.js";import{u as x,K as u,W as b,X as a,S as w,B as y,c as C,C as T}from"./MyApp-nuvdhu8g.js";import{C as j}from"./Collection-BU7EqDjn.js";import{g as k,a as E,b as S}from"./albums-qHEkOYkf.js";import{L as t}from"./index-JKgrcFJ4.js";import{I as A}from"./index-BZ0u2WdZ.js";import{T as v}from"./index-BM1Lg5fy.js";import"./index-grKA1H2q.js";import"./file-download-IvOSaqja.js";import"./sweetalert2.all-BmLNahrN.js";import"./VIP-WmW1iHuR.js";import"./feeds-CWLixFh1.js";import"./index-UFxH4aKA.js";import"./Dropdown-D8umh5xP.js";import"./PurePanel-BMdJEOeI.js";import"./index-DtfJHz0w.js";import"./index-CtFRJH9c.js";import"./index-0YeK3THP.js";import"./TextArea--VwofgTr.js";import"./addEventListener-DGLXt8vE.js";import"./index-CxNAxsgI.js";import"./index-D7I8Gysl.js";import"./Pagination-D7beidf8.js";import"./useBreakpoint-B7PfgbsS.js";import"./responsiveObserver-qTidF-LX.js";import"./row-DmEaGPGB.js";function oo({target:i,onOpenAlbum:m}){const{ti:d}=x(),h=l.useCallback(async(o=[])=>{var c;if(!(i!=null&&i.id)||!(i!=null&&i.type))return;const s=o==null?void 0:o[(o==null?void 0:o.length)-1];if(i.type!==u.Group)return(await k({id:i==null?void 0:i.id,accessToken:await b(a.EAAB),fromId:(s==null?void 0:s.id)||""})).albums;const e=i.type===u.Group?await E({groupId:i.id,cursor:s==null?void 0:s.cursor}):await S({uid:i.id,cursor:s==null?void 0:s.cursor});if((c=e.albums)!=null&&c.length){let n=new Set(o.map(p=>p.id));return e.albums.filter(p=>!n.has(p.id))}return[]},[i]),f=l.useCallback(o=>r.jsx(t.Item,{children:r.jsxs(w,{direction:"vertical",children:[r.jsx(y.Ribbon,{text:C(o.count),children:r.jsx(A,{src:o.picture,alt:o.name,width:150,height:150,style:{objectFit:"cover",borderRadius:"10px",cursor:"pointer"},preview:!1,onClick:()=>{m==null||m(o)}})}),r.jsx(v.Paragraph,{style:{maxWidth:"150px",wordWrap:"break-word"},onClick:()=>window.open(o.link),children:o.name})]})}),[]);return r.jsx(j,{collectionName:(i==null?void 0:i.name)+" - Albums",fetchNext:h,renderItem:f,rowKey:o=>o.id,searchPlaceholder:o=>d({en:`Search in ${o==null?void 0:o.length} albums...`,vi:`Tìm trong ${o.length} albums...`}),onSearch:(o,s)=>T(o,s.name)})}export{oo as default};