import{aK as x,r as n,aM as r,aN as w,aQ as y,b4 as j}from"./index-Cl5zvECE.js";import{C as k}from"./Collection-BprY70W8.js";import{w as u,f as C,A as v,S as d,B as T,a as A}from"./MyApp-MWa74BZS.js";import{g as E,a as N,b as S}from"./albums-C0AOHHYx.js";import{A as g}from"./index-CfS_P8iD.js";import{L as B}from"./index-qaAouqGd.js";import{I}from"./index-BX3BEfnN.js";import{T as F}from"./index-DGaF8Pk-.js";import"./index-UFZSW2T7.js";import"./file-download-C-9sVNl1.js";import"./index-Ccw2Qbjw.js";import"./Dropdown-B1hBDzzJ.js";import"./PurePanel-kNhfzRO_.js";import"./move-DMmDJGo1.js";import"./index-DcqzpBZq.js";import"./index-B8klUnWi.js";import"./TextArea-VDCbegm4.js";import"./EyeOutlined-L-Dk1-Mb.js";import"./SearchOutlined-BfbpT0ue.js";import"./index-CPMbgh8k.js";import"./Pagination-DpygRt3E.js";import"./useBreakpoint-CPUsOx0y.js";import"./responsiveObserver-C59psHcs.js";import"./index-CoQ_gU2f.js";import"./DownOutlined-DfRI2dhp.js";import"./row-Ce9R-FFN.js";import"./addEventListener-DgsqOKpm.js";function lo({target:s,onOpenAlbum:m}){const{ti:l}=x(),t=n.useCallback(async(o=[])=>{var a,h;if(!(s!=null&&s.id)||!(s!=null&&s.type))return;const i=o==null?void 0:o[(o==null?void 0:o.length)-1];if(s.type!==u.Group){const e=await E({id:s==null?void 0:s.id,accessToken:await C(v.EAAB),fromId:(i==null?void 0:i.id)||""});if((a=e.albums)!=null&&a.length)return e.albums}const c=s.type===u.Group?await N({groupId:s.id,cursor:i==null?void 0:i.cursor}):await S({uid:s.id,cursor:i==null?void 0:i.cursor});if((h=c.albums)!=null&&h.length){let e=new Set(o.map(p=>p.id));return c.albums.filter(p=>!e.has(p.id))}return[]},[s]),f=n.useCallback(()=>r.jsx(d,{children:r.jsx(g,{showIcon:!0,type:"info",message:l({en:"Click any album to view photos",vi:"Click album bất kỳ để xem ảnh"})})}),[l]),b=n.useCallback(o=>r.jsx(B.Item,{children:r.jsxs(d,{direction:"vertical",children:[r.jsx(T.Ribbon,{text:w(o.count),children:r.jsxs("div",{className:"show-on-hover-trigger",children:[r.jsx(I,{src:o.picture,alt:o.name,width:150,height:150,style:{objectFit:"cover",borderRadius:"10px",cursor:"pointer"},preview:!1,onClick:()=>{m==null||m(o)}}),r.jsx(y,{type:"default",icon:r.jsx("i",{className:"fa-solid fa-up-right-from-square"}),style:{position:"absolute",bottom:10,right:10},className:"show-on-hover-item",target:"_blank",href:A(o.id)})]})}),r.jsx(F.Paragraph,{style:{maxWidth:"150px",wordWrap:"break-word"},onClick:()=>window.open(o.link),children:o.name})]})}),[]);return r.jsx(k,{collectionName:(s==null?void 0:s.name)+" - Albums",fetchNext:t,renderItem:b,rowKey:o=>o.id,header:f,searchPlaceholder:o=>l({en:"Search in ".concat(o==null?void 0:o.length," albums..."),vi:"Tìm trong ".concat(o.length," albums...")}),onSearch:(o,i)=>j(o,i.name)})}export{lo as default};
