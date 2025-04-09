const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./VideoViewer-V1Ev_y4Q.js","./index-wbIphP0C.js","./index-DFWeXkJl.css","./videos-CpoEZEvj.js","./MyApp-njhOwsK5.js","./VideoWithMuted-Cmj6LkIN.js","./download-DE77ekA1.js"])))=>i.map(i=>d[i]);
import{aT as D,a_ as C,b6 as R,bf as U,r as y,b8 as l,bd as F,bA as b,am as P,bH as A,bC as q}from"./index-wbIphP0C.js";import{r as E,u as N,i as j,t as T,y as z,S as B,I as K,C as W,d as I,T as H}from"./MyApp-njhOwsK5.js";import{g as G}from"./videos-CpoEZEvj.js";import{B as O}from"./BadgeWrapper-NRWTo8EW.js";import{a as M}from"./core-G9WAMCag.js";import{g as $}from"./core-BRc4ZfMO.js";import{w as J,r as S}from"./window-WvEbVvru.js";import{S as Q}from"./Screen-CeOg0Yph.js";import"./col-DRzNhW_D.js";import"./row-DdHEAPVK.js";import"./responsiveObserver-BQjJBraY.js";async function X(o){var f,p,g;const t=(f=o.match(/\/(\d+)(?=\?|$)/))==null?void 0:f[1];if(!t)throw new Error("Video ID not found");const s=o.includes("/play/"),a=o.includes("/video/"),r=await D("https://api.bilibili.tv/intl/gateway/web/playurl?"+new URLSearchParams({platform:"web",qn:"64",type:"0",device:"wap",...s&&{ep_id:t},...a&&{aid:t}}).toString()),c=E(r);console.log(r,c);const u=(p=c==null?void 0:c.data)==null?void 0:p.playurl;if(!u)throw new Error("Video info not found");const h=[(u.video||[]).map(e=>{var m,v,w,i,n,d,x,_,V,k;return{id:(m=e==null?void 0:e.video_resource)==null?void 0:m.id,length:(((v=e==null?void 0:e.video_resource)==null?void 0:v.duration)||0)/1e3,codecs:(w=e==null?void 0:e.video_resource)==null?void 0:w.codecs,mimeType:(i=e==null?void 0:e.video_resource)==null?void 0:i.mime_type,width:(n=e==null?void 0:e.video_resource)==null?void 0:n.width,height:(d=e==null?void 0:e.video_resource)==null?void 0:d.height,bandwidth:(x=e==null?void 0:e.video_resource)==null?void 0:x.bandwidth,isAudio:!1,qualityClass:(_=e==null?void 0:e.stream_info)==null?void 0:_.desc_words,source:(V=e==null?void 0:e.video_resource)==null?void 0:V.url,urls:(k=e==null?void 0:e.video_resource)==null?void 0:k.backup_url}}),(u.audio_resource||[]).map(e=>({id:e==null?void 0:e.id,length:((e==null?void 0:e.duration)||0)/1e3,codecs:e==null?void 0:e.codecs,mimeType:e==null?void 0:e.mime_type,width:0,height:0,bandwidth:e==null?void 0:e.bandwidth,isAudio:!0,qualityClass:"",source:e==null?void 0:e.url,urls:e==null?void 0:e.backup_url}))].flat().filter(e=>{var m;return!!e.source||((m=e.urls)==null?void 0:m.length)>0});return console.log(h),{source:(g=h[0])==null?void 0:g.source,length:((u==null?void 0:u.duration)||0)/1e3,variants:h}}async function Y(o){var a,r,c,u,h;const t=((a=/https?:\/\/v.douyin.com\/([^/\s+]+)\//.exec(o))==null?void 0:a[0])||((r=/https?:\/\/www.douyin.com\/video\/(\d+)/.exec(o))==null?void 0:r[0])||((c=/https?:\/\/www.iesdouyin.com\/share\/video\/(\d+)/.exec(o))==null?void 0:c[0])||((u=/https?:\/\/www.douyin.com\/user\/(.*)modal_id=(\d+)/.exec(o))==null?void 0:u[0])||((h=/https?:\/\/www.douyin.com\/user\/(.*)vid=(\d+)/.exec(o))==null?void 0:h[0])||o;return await C(t,!0)}function Z(o){var t,s,a;return((t=/video\/(\d+)/.exec(o))==null?void 0:t[1])||((s=/modal_id=(\d+)/.exec(o))==null?void 0:s[1])||((a=/vid=(\d+)/.exec(o))==null?void 0:a[1])}function ee(o){var c,u,h,f,p,g,e,m,v;if(!o)return null;const t=(c=o==null?void 0:o.video)==null?void 0:c.play_addr,s=[];for(let w of["265","h264"]){const i=(u=o==null?void 0:o.video)==null?void 0:u["play_addr_"+w];i&&s.push({id:w,codecs:w,qualityLabel:w,height:i.height,width:i.width,mimeType:"video/mp4",isAudio:!1,source:(h=i.url_list)==null?void 0:h[0],urls:i.url_list,size:i.data_size})}const a=(f=o==null?void 0:o.video)==null?void 0:f.download_addr;a&&s.push({id:"watermark",codecs:"watermark",qualityLabel:"watermark",height:a.height,width:a.width,mimeType:"video/mp4",isAudio:!1,source:(p=a.url_list)==null?void 0:p[0],urls:a.url_list,size:a.data_size});const r=o==null?void 0:o.music;return r&&s.push({id:"music",codecs:"music",mimeType:"audio",isAudio:!0,source:(e=(g=r.play_url)==null?void 0:g.url_list)==null?void 0:e[0],urls:(m=r.play_url)==null?void 0:m.url_list,length:r.duration}),{id:o==null?void 0:o.aweme_id,source:(v=t==null?void 0:t.url_list)==null?void 0:v[0],width:t==null?void 0:t.width,height:t==null?void 0:t.height,url:o==null?void 0:o.share_url,quality:"default",variants:s}}async function oe(o){const t=Z(o);if(!t)throw new Error("Video ID not found");console.log(o,t);const s=window.open(o,"_blank","width=800,height=600");if(await J(s),await te(s))throw new Error("Douyin Captcha");const r=ie({aweme_id:t}),c=await S({win:s,fnPath:"fetch",params:["https://www.douyin.com/aweme/v1/web/aweme/detail/?"+Object.entries(r).map(f=>f.join("=")).join("&")]});s.close(),console.log(c);const u=typeof c=="string"?E(c):null;return ee(u==null?void 0:u.aweme_detail)}async function te(o){return!!await S({win:o,fnPath:"window.eval",params:['document.querySelector(`iframe[src*="captcha"]`) != null']})}function ie(o={}){return{device_platform:"webapp",aid:6383,channel:"channel_pc_web",support_h265:1,support_dash:1,cookie_enabled:!0,screen_width:screen.width,screen_height:screen.height,platform:"PC",downlink:10,effective_type:"4g",...o}}const se=y.lazy(()=>F(()=>import("./VideoViewer-V1Ev_y4Q.js"),__vite__mapDeps([0,1,2,3,4,5,6]),import.meta.url)),L={[b.Bilibili]:"https://www.facebook.com/groups/fbaio/posts/1576991539622195",[b.GGDrive]:"https://www.facebook.com/groups/fbaio/posts/1576580342996648",[b.Tiktok]:"https://www.facebook.com/groups/fbaio/posts/1571823256805690",[b.Facebook]:"https://www.facebook.com/groups/fbaio/posts/1499830124005004",[b.Douyin]:"https://www.facebook.com/groups/fbaio/posts/1585404348780914"};function we(){var v,w;const{ti:o}=R(),{message:t}=N(),s=U(),a=y.useMemo(()=>new URLSearchParams(s.search),[s.search]),[r,c]=j("videoDownloader.url",a.get("url")||((v=s.state)==null?void 0:v.url)||""),[u,h]=j("videoDownloader.videoInfo",((w=s.state)==null?void 0:w.info)||null),[f,p]=y.useState(!1);y.useEffect(()=>{T("VideoDownloader:onLoad")},[]),y.useEffect(()=>{var i,n;(i=s.state)!=null&&i.url&&((n=s.state)!=null&&n.info)&&(c(s.state.url),h(s.state.info))},[s.state]),y.useEffect(()=>{if(a.get("url")){const i=setTimeout(g,200);return()=>clearTimeout(i)}},[a]);const g=async()=>{const i="VideoDownloader:onSearch";T(i),p(!0),t.loading({key:i,content:o({en:"Finding data...",vi:"Đang tìm dữ liệu..."}),duration:0});try{let n;if(r.includes("douyin.com")){const d=await Y(r);d!=r&&c(d),n=await oe(d)}else if(r.includes("tiktok.com"))n=await M(r);else if(r.includes("drive.google.com"))n=await $(r);else if(r.includes("bilibili.tv"))n=await X(r);else{const d=await z(r);if(!d)throw p(!1),new Error(o({en:"Video not found",vi:"Không tìm thấy video"}));t.success({content:o({en:"Found video id: ",vi:"Tìm thấy ID video: "})+d}),t.loading({key:i,content:o({en:"Fetching video info...",vi:"Đang tải thông tin video..."}),duration:0}),n=await G(d)}if(console.log(n),!n)throw p(!1),new Error(o({en:"Cannot fetch file info",vi:"Không tải được file"}));t.success({key:i,content:o({en:"Fetched file info",vi:"Tải thông tin file thành công"})}),h(n)}catch(n){t.error({key:i,content:o({en:"Error",vi:"Lỗi"})+": "+n.message})}finally{p(!1)}},e=()=>l.jsxs("div",{style:{position:"relative"},children:[l.jsx(se,{buttonTop:!0,info:u}),l.jsx(P,{type:"text",icon:l.jsx("i",{className:"fa-solid fa-xmark"}),onClick:()=>{c(""),h(null)},style:{position:"absolute",right:5,top:5,zIndex:2}})]}),m=()=>l.jsx(O,{type:"new",children:l.jsx(W,{style:{maxWidth:"90vw"},defaultActiveKey:[0],items:[{label:o({en:"Supported URL formats ?",vi:"Các định dạng LINK được hỗ trợ ?"}),children:Object.entries(A).map(([i,n])=>l.jsxs("div",{children:[l.jsx("i",{className:q[i]})," ",l.jsx(I.Text,{strong:!0,children:L[i]?l.jsx(H,{title:o({en:"Tutorial",vi:"Hướng dẫn"}),children:l.jsxs(I.Link,{href:L[i],target:"_blank",children:[i," ",l.jsx("i",{className:"fa-solid fa-arrow-up-right-from-square"})]})}):i}),l.jsx("ul",{children:n.map(d=>l.jsx("li",{children:d},d))})]},i))}]})});return l.jsx(Q,{mode:"center",title:o({en:"Video downloader",vi:"Tải Video"})+" 🎬",children:l.jsxs(B,{align:"center",direction:"vertical",style:{width:"100%"},children:[l.jsx(K.Search,{placeholder:o({en:"Enter video/reel URL",vi:"Nhập LINK video/reel"}),size:"large",style:{width:350,maxWidth:"90vw"},value:r,onChange:i=>{var n;return c((n=i.target.value)==null?void 0:n.trim())},onSearch:()=>g(),enterButton:f?null:l.jsx("i",{className:"fa-solid fa-magnifying-glass"}),loading:f}),u?e():m()]})})}export{L as TutorialPostURLs,we as default};
