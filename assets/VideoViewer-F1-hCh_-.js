import{aJ as F,r as i,co as p,aL as t,cp as z,aN as C}from"./index-umhg-c6o.js";import{g as M}from"./videos-BQnzZ2mx.js";import{A as W,V as D}from"./VideoWithMuted-t7lpAlaW.js";import{S as E,b as L,t as N,a2 as O}from"./MyApp-DUCIl_8m.js";function P({info:a,style:R,videoStyle:V,buttonTop:m=!1,getVideoInfoFn:d=M}){var S;const{ti:f}=F(),[s,g]=i.useState(null),[o,b]=i.useState({}),[x,k]=i.useState(0),[n,y]=i.useState(!1),[r,w]=i.useState(a),l=(r==null?void 0:r.variants)||a.variants||[],c=(s==null?void 0:s.source)||(r==null?void 0:r.source);i.useEffect(()=>{!a.source&&a.id&&d&&(y(!0),d(a.id).then(e=>{w(e)}).finally(()=>{y(!1)}))},[a.source,a.id,d]);const h=i.useRef(!1);i.useEffect(()=>{l!=null&&l.length&&!Object.keys(o).length&&!h.current&&(h.current=!0,Promise.all(l.map(e=>p(e.source).then(({url:u,size:A})=>{b(q=>({...q,[e.id]:A}))}).catch(()=>{console.log("ERROR get size",e)}))).finally(()=>{h.current=!1}))},[o,l]),i.useEffect(()=>{c&&p(c).then(({url:e,size:u})=>{k(u)})},[c]);const j=t.jsxs(E.Compact,{children:[t.jsx(L,{title:x?z(x,1):"",children:t.jsx(C,{type:s?"default":"primary",onClick:()=>g(null),children:f({en:"Default",vi:"Mặc định"})})}),l==null?void 0:l.map((e,u)=>t.jsx(L,{title:(e.isAudio?"":e.width+"x"+e.height)+(o[e.id]?" - "+z(o[e.id],1):""),children:t.jsxs(C,{type:(s==null?void 0:s.id)===e.id?"primary":"default",onClick:()=>{N("VideoViewer:onChangeVariant:"+(e.qualityLabel||e.mimeType)),g(e)},icon:e.isAudio?t.jsx("i",{className:"fa-solid fa-music"}):null,children:[e.qualityClass," ",e.qualityLabel||e.mimeType]})},e.id))]});return t.jsxs(E,{direction:"vertical",style:{padding:15,borderRadius:10,backgroundColor:"#222",justifyContent:"center",alignItems:"center",...R},children:[!n&&m&&j,n?t.jsx(O,{tip:f({en:"Loading video...",vi:"Đang tải video..."}),children:t.jsx("div",{style:{width:150,height:50}})}):s!=null&&s.isAudio?t.jsx(W,{src:c}):t.jsx(D,{src:c,style:{maxWidth:"80vw",maxHeight:"80vh",...V},children:(S=s==null?void 0:s.urls)==null?void 0:S.map((e,u)=>t.jsx("source",{src:e},u))}),!n&&!m&&j]})}export{P as default};
