const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./VideoViewer-CwIPhEUh.js","./index-Be9dFxRb.js","./index-Dms513tq.css","./videos-D6CJjoJi.js","./MyApp-xFZVK5Th.js","./VideoWithMuted-QKOEiIim.js"])))=>i.map(i=>d[i]);
import{aK as U,aT as K,r as w,aM as a,aQ as N,bz as P,aY as W}from"./index-Be9dFxRb.js";import{p as z,u as B,e as R,t as C,x as A,S as q}from"./MyApp-xFZVK5Th.js";import{g as O}from"./videos-D6CJjoJi.js";import{B as $}from"./BadgeWrapper-Ds9fzNOl.js";import{a as G}from"./core-DW1jFwwX.js";import{w as J,r as M}from"./window-BHDZ5Ok2.js";import{T as F}from"./index-DftF7rat.js";import{I as Q}from"./index-Co0e7Xak.js";import{C as Y}from"./Collapse-GZoby-Hr.js";import"./EyeOutlined-Ckv3-vMx.js";import"./SearchOutlined-p_X38IjH.js";async function H(d){var c,f,r,h,y,g,x,l;let i;try{const s=(c=d.match(/\/file\/d\/([^/]+)/))==null?void 0:c[1];if(!s)return null;i=window.open(d,"_blank","width=800,height=600"),await J(i);const S=new URL(d).origin,u=await M({win:i,origin:S,fnPath:"window.viewerData.configJson"});if(!u)throw new Error("config not found");const t=(r=(f=u==null?void 0:u.find(e=>e==null?void 0:e.W))==null?void 0:f.W)==null?void 0:r.find(e=>typeof e=="string"&&(e==null?void 0:e.length)>0);if(!t)throw new Error("key not found");const n=await M({win:i,origin:S,fnPath:"fetch",params:["https://workspacevideo-pa.clients6.google.com/v1/drive/media/".concat(s,"/playback?key=").concat(t)]}),o=z(n);console.log(n,o);const p=(h=o==null?void 0:o.mediaStreamingData)==null?void 0:h.formatStreamingData,T=[...(p==null?void 0:p.adaptiveTranscodes)||[],...(p==null?void 0:p.progressiveTranscodes)||[]].map(e=>{var v,L,m,b,j,k,V,D,E;return{codecs:((v=e==null?void 0:e.transcodeMetadata)==null?void 0:v.videoCodecString)||((L=e==null?void 0:e.transcodeMetadata)==null?void 0:L.audioCodecString),bandwidth:parseInt((m=e==null?void 0:e.transcodeMetadata)==null?void 0:m.contentLength),length:parseInt((b=e==null?void 0:e.transcodeMetadata)==null?void 0:b.approxDuration),mimeType:(j=e==null?void 0:e.transcodeMetadata)==null?void 0:j.mimeType,width:(k=e==null?void 0:e.transcodeMetadata)==null?void 0:k.width,height:(V=e==null?void 0:e.transcodeMetadata)==null?void 0:V.height,id:e==null?void 0:e.itag,isAudio:(E=(D=e==null?void 0:e.transcodeMetadata)==null?void 0:D.mimeType)==null?void 0:E.includes("audio"),qualityLabel:"",qualityClass:"",source:e==null?void 0:e.url}}).sort((e,v)=>v.bandwidth-e.bandwidth),I={source:(y=T.at(-1))==null?void 0:y.source,thumbnail:(l=(x=(g=o==null?void 0:o.thumbnails)==null?void 0:g.sort((e,v)=>v.width-e.width))==null?void 0:x[0])==null?void 0:l.url,variants:T};return console.log(I),I}catch(s){return console.error(s),null}finally{typeof(i==null?void 0:i.close)=="function"&&i.close()}}const X=w.lazy(()=>W(()=>import("./VideoViewer-CwIPhEUh.js"),__vite__mapDeps([0,1,2,3,4,5]),import.meta.url));function se(){var S,u;const{ti:d}=U(),{message:i}=B(),c=K(),f=w.useMemo(()=>new URLSearchParams(c.search),[c.search]),[r,h]=R("videoDownloader.url",f.get("url")||((S=c.state)==null?void 0:S.url)||""),[y,g]=R("videoDownloader.info",((u=c.state)==null?void 0:u.info)||null),[x,l]=w.useState(!1);w.useEffect(()=>{C("VideoDownloader:onLoad")},[]),w.useEffect(()=>{var t,n;(t=c.state)!=null&&t.url&&((n=c.state)!=null&&n.info)&&(h(c.state.url),g(c.state.info))},[c.state]),w.useEffect(()=>{if(f.get("url")){const t=setTimeout(s,200);return()=>clearTimeout(t)}},[f]);const s=async()=>{const t="VideoDownloader:onSearch";C(t),l(!0),i.loading({key:t,content:d({en:"Finding video...",vi:"Đang tìm video..."}),duration:0});let n;if(r.includes("tiktok.com")){const o=await G(r);console.log(o),n=o}else if(r.includes("drive.google.com")){const o=await H(r);console.log(o),n=o}else{const o=await A(r);if(!o){l(!1),i.error({key:t,content:d({en:"Video not found",vi:"Không tìm thấy video"})});return}i.success({content:d({en:"Found video id: ",vi:"Tìm thấy ID video: "})+o}),i.loading({key:t,content:d({en:"Fetching video info...",vi:"Đang tải thông tin video..."}),duration:0}),n=await O(o)}if(console.log(n),!n){l(!1),i.error({key:t,content:d({en:"Cannot fetch video info",vi:"Không tải được video"})});return}i.success({key:t,content:d({en:"Fetched video info",vi:"Tải thông tin video thành công"})}),g(n),l(!1)};return a.jsxs(q,{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",padding:10},direction:"vertical",children:[a.jsx(F.Title,{level:3,children:d({en:"Video/Reel downloader",vi:"Tải video/reel"})}),a.jsx(Q.Search,{placeholder:d({en:"Enter video/reel URL",vi:"Nhập LINK video/reel"}),size:"large",style:{width:350},value:r,onChange:t=>{var n;return h((n=t.target.value)==null?void 0:n.trim())},onSearch:()=>s(),enterButton:x?null:a.jsx("i",{className:"fa-solid fa-magnifying-glass"}),loading:x}),y?a.jsxs("div",{style:{position:"relative"},children:[a.jsx(X,{buttonTop:!0,info:y}),a.jsx(N,{type:"text",icon:a.jsx("i",{className:"fa-solid fa-xmark"}),onClick:()=>{h(""),g(null)},style:{position:"absolute",right:5,top:5,zIndex:2}})]}):a.jsx($,{type:"new",children:a.jsx(Y,{defaultActiveKey:[0],items:[{label:d({en:"Supported URL format ?",vi:"Các định dạng LINK được hỗ trợ ?"}),children:Object.entries(P).map(([t,n])=>a.jsxs("div",{children:[a.jsx(F.Text,{strong:!0,children:t}),a.jsx("ul",{children:n.map(o=>a.jsx("li",{children:o},o))})]},t))}]})})]})}export{se as default};
