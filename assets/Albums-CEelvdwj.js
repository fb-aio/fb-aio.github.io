import{r as l,aq as r}from"./index-CiUWOVnT.js";import{x as n,L as x,N as h,S as b,B as w,f as a}from"./MyApp-CSAMsYNo.js";import{C as y}from"./Collection-fxTUuqUk.js";import{g as C,a as j,b as k}from"./albums-B5LuUzm-.js";import{L as T}from"./index-qNPDJF4G.js";import{I as E}from"./index-DYhqHgnY.js";import{T as A}from"./index-Drn6P3uZ.js";import"./index-DFs1S1fI.js";import"./file-download-BQLzY1By.js";import"./useCacheState-CshvC5SH.js";import"./index-DI0YYMRi.js";import"./Dropdown-CqPGcrkc.js";import"./PurePanel-CL192Gbs.js";import"./index-DPtMTd6b.js";import"./TextArea-C8RwuKiT.js";import"./addEventListener-CO-NmIOH.js";import"./Pagination-CsZDPWiE.js";import"./useBreakpoint-Biy8e67G.js";import"./responsiveObserver-eRqqnUkT.js";import"./row-CD2JDyM7.js";import"./styleChecker-DrkA_zFw.js";function Q({target:o,onOpenAlbum:p}){const u=l.useCallback(async(i=[])=>{var c;if(!(o!=null&&o.id)||!(o!=null&&o.type))return;const s=i==null?void 0:i[(i==null?void 0:i.length)-1];if(o.type!==n.Group)return(await C({id:o==null?void 0:o.id,accessToken:await x(h.EAAB),fromId:(s==null?void 0:s.id)||""})).albums;const d=o.type===n.Group?await j({groupId:o.id,cursor:s==null?void 0:s.cursor}):await k({uid:o.id,cursor:s==null?void 0:s.cursor});if((c=d.albums)!=null&&c.length){let e=new Set(i.map(m=>m.id));return d.albums.filter(m=>!e.has(m.id))}return[]},[o]),f=l.useCallback(i=>r.jsx(T.Item,{children:r.jsxs(b,{direction:"vertical",children:[r.jsx(w.Ribbon,{text:a(i.count),children:r.jsx(E,{src:i.picture,alt:i.name,width:150,height:150,style:{objectFit:"cover",borderRadius:"10px",cursor:"pointer"},preview:!1,onClick:()=>{p==null||p(i)}})}),r.jsx(A.Paragraph,{style:{maxWidth:"150px",wordWrap:"break-word"},onClick:()=>window.open(i.link),children:i.name})]})}),[]);return r.jsx(y,{collectionName:(o==null?void 0:o.name)+" - Albums",fetchNext:u,renderItem:f,rowKey:i=>i.id})}export{Q as default};