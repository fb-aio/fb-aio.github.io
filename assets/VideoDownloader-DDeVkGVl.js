const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./VideoViewer-DR7z8FfT.js","./index-Cl5zvECE.js","./index-Dms513tq.css","./videos-DfsZjvNo.js","./MyApp-MWa74BZS.js","./VideoWithMuted-D3bNAVsq.js"])))=>i.map(i=>d[i]);
import{au as C,aK as U,aT as k,r as m,aM as n,aY as F,aQ as M,bA as N,bv as q,bB as j}from"./index-Cl5zvECE.js";import{p as P,u as A,e as R,t as D,x as B,S as K,b as z}from"./MyApp-MWa74BZS.js";import{g as W}from"./videos-DfsZjvNo.js";import{B as H}from"./BadgeWrapper-DC9gZwOf.js";import{a as O}from"./core-WMgWhBOs.js";import{w as $,r as G}from"./window-CsLa26-k.js";import{T as L}from"./index-DGaF8Pk-.js";import{I as Q}from"./index-B8klUnWi.js";import{C as Y}from"./Collapse-CEMWt8jd.js";import"./TextArea-VDCbegm4.js";import"./EyeOutlined-L-Dk1-Mb.js";import"./SearchOutlined-BfbpT0ue.js";async function J(t){var s,v,c,d,u,h;let a;try{const f=(s=t.match(/\/file\/d\/([^/]+)/))==null?void 0:s[1];if(!f)throw new Error("Video ID not found");a=window.open(t,"_blank","width=800,height=600"),await $(a);const p=new URL(t).origin,g=await G({win:a,origin:p,fnPath:"window.gapi.client.request",params:["https://workspacevideo-pa.clients6.google.com/v1/drive/media/".concat(f,"/playback")]}),e=g==null?void 0:g.result,l=(v=e==null?void 0:e.mediaStreamingData)==null?void 0:v.formatStreamingData,w=[...(l==null?void 0:l.adaptiveTranscodes)||[],...(l==null?void 0:l.progressiveTranscodes)||[]].map(o=>{var r,b,x,_,T,S,I,V,E;return{codecs:((r=o==null?void 0:o.transcodeMetadata)==null?void 0:r.videoCodecString)||((b=o==null?void 0:o.transcodeMetadata)==null?void 0:b.audioCodecString),bandwidth:parseInt((x=o==null?void 0:o.transcodeMetadata)==null?void 0:x.contentLength),length:parseInt((_=o==null?void 0:o.transcodeMetadata)==null?void 0:_.approxDuration),mimeType:(T=o==null?void 0:o.transcodeMetadata)==null?void 0:T.mimeType,width:(S=o==null?void 0:o.transcodeMetadata)==null?void 0:S.width,height:(I=o==null?void 0:o.transcodeMetadata)==null?void 0:I.height,id:o==null?void 0:o.itag,isAudio:(E=(V=o==null?void 0:o.transcodeMetadata)==null?void 0:V.mimeType)==null?void 0:E.includes("audio"),qualityLabel:"",qualityClass:"",source:o==null?void 0:o.url}}).sort((o,r)=>r.bandwidth-o.bandwidth),i={source:(c=w.at(-1))==null?void 0:c.source,thumbnail:(h=(u=(d=e==null?void 0:e.thumbnails)==null?void 0:d.sort((o,r)=>r.width-o.width))==null?void 0:u[0])==null?void 0:h.url,variants:w};return console.log(i),i}catch(f){throw f}finally{typeof(a==null?void 0:a.close)=="function"&&a.close()}}async function X(t){var f,p,g;const a=(f=t.match(/\/(\d+)(?=\?|$)/))==null?void 0:f[1];if(!a)throw new Error("Video ID not found");const s=t.includes("/play/"),v=t.includes("/video/"),c=await C("https://api.bilibili.tv/intl/gateway/web/playurl?"+new URLSearchParams({platform:"web",qn:"64",type:"0",device:"wap",...s&&{ep_id:a},...v&&{aid:a}}).toString()),d=P(c);console.log(c,d);const u=(p=d==null?void 0:d.data)==null?void 0:p.playurl;if(!u)throw new Error("Video info not found");const h=[(u.video||[]).map(e=>{var l,y,w,i,o,r,b,x,_,T;return{id:(l=e==null?void 0:e.video_resource)==null?void 0:l.id,length:(((y=e==null?void 0:e.video_resource)==null?void 0:y.duration)||0)/1e3,codecs:(w=e==null?void 0:e.video_resource)==null?void 0:w.codecs,mimeType:(i=e==null?void 0:e.video_resource)==null?void 0:i.mime_type,width:(o=e==null?void 0:e.video_resource)==null?void 0:o.width,height:(r=e==null?void 0:e.video_resource)==null?void 0:r.height,bandwidth:(b=e==null?void 0:e.video_resource)==null?void 0:b.bandwidth,isAudio:!1,qualityClass:(x=e==null?void 0:e.stream_info)==null?void 0:x.desc_words,source:(_=e==null?void 0:e.video_resource)==null?void 0:_.url,urls:(T=e==null?void 0:e.video_resource)==null?void 0:T.backup_url}}),(u.audio_resource||[]).map(e=>({id:e==null?void 0:e.id,length:((e==null?void 0:e.duration)||0)/1e3,codecs:e==null?void 0:e.codecs,mimeType:e==null?void 0:e.mime_type,width:0,height:0,bandwidth:e==null?void 0:e.bandwidth,isAudio:!0,qualityClass:"",source:e==null?void 0:e.url,urls:e==null?void 0:e.backup_url}))].flat().filter(e=>{var l;return!!e.source||((l=e.urls)==null?void 0:l.length)>0});return console.log(h),{source:(g=h[0])==null?void 0:g.source,length:((u==null?void 0:u.duration)||0)/1e3,variants:h}}const Z=m.lazy(()=>F(()=>import("./VideoViewer-DR7z8FfT.js"),__vite__mapDeps([0,1,2,3,4,5]),import.meta.url));function he(){var y,w;const{ti:t}=U(),{message:a}=A(),s=k(),v=m.useMemo(()=>new URLSearchParams(s.search),[s.search]),[c,d]=R("videoDownloader.url",v.get("url")||((y=s.state)==null?void 0:y.url)||""),[u,h]=R("videoDownloader.info",((w=s.state)==null?void 0:w.info)||null),[f,p]=m.useState(!1);m.useEffect(()=>{D("VideoDownloader:onLoad")},[]),m.useEffect(()=>{var i,o;(i=s.state)!=null&&i.url&&((o=s.state)!=null&&o.info)&&(d(s.state.url),h(s.state.info))},[s.state]),m.useEffect(()=>{if(v.get("url")){const i=setTimeout(g,200);return()=>clearTimeout(i)}},[v]);const g=async()=>{const i="VideoDownloader:onSearch";D(i),p(!0),a.loading({key:i,content:t({en:"Finding video...",vi:"Đang tìm video..."}),duration:0});try{let o;if(c.includes("tiktok.com"))o=await O(c);else if(c.includes("drive.google.com"))o=await J(c);else if(c.includes("bilibili.tv"))o=await X(c);else{const r=await B(c);if(!r)throw p(!1),new Error(t({en:"Video not found",vi:"Không tìm thấy video"}));a.success({content:t({en:"Found video id: ",vi:"Tìm thấy ID video: "})+r}),a.loading({key:i,content:t({en:"Fetching video info...",vi:"Đang tải thông tin video..."}),duration:0}),o=await W(r)}if(console.log(o),!o)throw p(!1),new Error(t({en:"Cannot fetch video info",vi:"Không tải được video"}));a.success({key:i,content:t({en:"Fetched video info",vi:"Tải thông tin video thành công"})}),h(o)}catch(o){a.error({key:i,content:t({en:"Error",vi:"Lỗi"})+": "+o.message})}finally{p(!1)}},e=()=>n.jsxs("div",{style:{position:"relative"},children:[n.jsx(Z,{buttonTop:!0,info:u}),n.jsx(M,{type:"text",icon:n.jsx("i",{className:"fa-solid fa-xmark"}),onClick:()=>{d(""),h(null)},style:{position:"absolute",right:5,top:5,zIndex:2}})]}),l=()=>n.jsx(H,{type:"new",children:n.jsx(Y,{defaultActiveKey:[0],items:[{label:t({en:"Supported URL formats ?",vi:"Các định dạng LINK được hỗ trợ ?"}),children:Object.entries(N).map(([i,o])=>n.jsxs("div",{children:[n.jsx("i",{className:q[i]})," ",n.jsx(L.Text,{strong:!0,children:j[i]?n.jsx(z,{title:t({en:"Tutorial",vi:"Hướng dẫn"}),children:n.jsxs(L.Link,{href:j[i],target:"_blank",children:[i," ",n.jsx("i",{className:"fa-solid fa-arrow-up-right-from-square"})]})}):i}),n.jsx("ul",{children:o.map(r=>n.jsx("li",{children:r},r))})]},i))}]})});return n.jsxs(K,{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",padding:10},direction:"vertical",children:[n.jsx(L.Title,{level:3,children:t({en:"Video/Reel downloader",vi:"Tải video/reel"})}),n.jsx(Q.Search,{placeholder:t({en:"Enter video/reel URL",vi:"Nhập LINK video/reel"}),size:"large",style:{width:350},value:c,onChange:i=>{var o;return d((o=i.target.value)==null?void 0:o.trim())},onSearch:()=>g(),enterButton:f?null:n.jsx("i",{className:"fa-solid fa-magnifying-glass"}),loading:f}),u?e():l()]})}export{he as default};
