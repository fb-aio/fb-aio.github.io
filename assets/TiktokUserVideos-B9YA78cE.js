import{aK as Z,r as D,bc as T,aM as i,b7 as ee,b5 as te,b6 as ie,cv as x,cu as oe,aQ as W,b4 as ne,aF as ae,cq as E,bb as se,aB as re,cr as le,cw as de}from"./index-Cl5zvECE.js";import{b as ce,e as me}from"./core-WMgWhBOs.js";import ue from"./MyTable-C5eLwmnT.js";import{u as he,e as A,B as pe,S as y,b as fe,t as L,p as ge,k as we}from"./MyApp-MWa74BZS.js";import{W as xe}from"./WordStatisticButton-B7cHBtAx.js";import ve from"./VideoViewer-DR7z8FfT.js";import{w as ke,r as ye}from"./window-CsLa26-k.js";import{E as be}from"./ExportButton-DLRH1WdF.js";import{I as N}from"./index-BX3BEfnN.js";import{C as je}from"./index-cVzD34Or.js";import{L as U}from"./index-qaAouqGd.js";import{T as v}from"./index-DGaF8Pk-.js";import{A as H}from"./index-CfS_P8iD.js";import"./index-UFZSW2T7.js";import"./index-C5ld5P44.js";import"./DownOutlined-DfRI2dhp.js";import"./TextArea-VDCbegm4.js";import"./Table-BrcFPCni.js";import"./addEventListener-DgsqOKpm.js";import"./index-CoQ_gU2f.js";import"./PurePanel-kNhfzRO_.js";import"./move-DMmDJGo1.js";import"./SearchOutlined-BfbpT0ue.js";import"./index-DcqzpBZq.js";import"./index-Ccw2Qbjw.js";import"./Dropdown-B1hBDzzJ.js";import"./useBreakpoint-CPUsOx0y.js";import"./responsiveObserver-C59psHcs.js";import"./Pagination-DpygRt3E.js";import"./index-B8klUnWi.js";import"./EyeOutlined-L-Dk1-Mb.js";import"./row-Ce9R-FFN.js";import"./BadgeWrapper-DC9gZwOf.js";import"./index-DkNCjyJl.js";import"./index-C0UiY_4F.js";import"./videos-DfsZjvNo.js";import"./VideoWithMuted-D3bNAVsq.js";import"./file-download-C-9sVNl1.js";const S="1.8";function dt({target:r}){const{ti:a}=Z(),{message:f,notification:b}=he(),[u,F]=A("TiktokUserVideos."+r.uniqueId,[]),[P,R]=A("TiktokUserVideos.loading",!1),j=D.useRef(null),q=T.version>=S,M=async()=>{const s="TiktokUserVideos.onReload";L(s),R(!0),F([]),f.loading({key:s,content:a({en:"Loading...",vi:"Đang tải..."}),duration:0});try{j.current&&j.current.close();const n=window.open("https://www.tiktok.com/@"+r.uniqueId,"_blank","width=800,height=600");n.blur(),window.focus(),j.current=n,f.loading({key:s,content:a({en:"Waiting tiktok...",vi:"Đang chờ tiktok..."}),duration:0}),await ke(n);let t="",e=0,o=!1;for(;!o&&!n.closed;){f.loading({key:s,content:i.jsxs(i.Fragment,{children:[a({en:"Fetching videos...",vi:"Đang tải videos..."})+e,i.jsx("br",{}),i.jsx("i",{children:a({en:"Click to stop",vi:"Bấm để dừng"})})]}),duration:0,onClick:()=>{o=!0}});const d=ce({secUid:r.secUid,count:35,cursor:t,coverFormat:"2"}),h="https://www.tiktok.com/api/post/item_list/?"+Object.entries(d).map(g=>g.join("=")).join("&"),m=await ye({win:n,origin:"https://www.tiktok.com",fnPath:"fetch",params:[h,{credentials:"include"}],checkAbort:()=>o}),l=ge(m);console.log(l);const p=me(l==null?void 0:l.itemList);if(!p.length||(e+=p.length,F(g=>[...g,...p]),!(l!=null&&l.hasMore)))break;t=l==null?void 0:l.cursor,await ae(500)}n.closed?f.warning({content:a({en:"Tiktok window closed before done",vi:"Tab tiktok bị tắt trước khi chạy xong"})}):n.close(),b.open({type:"success",message:a({en:"Fetch tiktok videos completed",vi:"Tìm videos tiktok xong"}),description:r.uniqueId+" - "+e+" videos",duration:0})}catch(n){console.log(n),b.open({type:"error",message:a({en:"Failed to fetch tiktok videos",vi:"Lỗi tìm videos tiktok"}),description:r.uniqueId+" - "+n.message,duration:0})}finally{f.destroy(s),R(!1)}},O=async s=>{if(!await we())return;const n="TiktokUserVideos:downloadVideos";L(n);const t=s.map((c,k)=>({name:k+"_"+E(c.desc||c.video.id||c.id)+".mp4",urls:(c.video.variants||[]).map(I=>[I.source,I.urls].flat().filter(Boolean)).flat().filter(Boolean)})).filter(c=>c.urls.length);if(!t.length)return!1;const e=await window.showDirectoryPicker({mode:"readwrite"});await e.requestPermission({writable:!0});const o=await e.getDirectoryHandle(E(r==null?void 0:r.uniqueId),{create:!0}),d=n;f.loading({key:d,content:a({en:"Downloading...",vi:"Đang tải..."}),duration:0});let h=!1,m=0;const l=Math.min(5,t.length),p=Array.from({length:l},()=>""),g=t.map((c,k)=>async(I,_)=>{for(let C of c.urls)try{p[_]=se(c.name,30);const w=await re(C,!0);C!==w&&console.log("redirected",C,w);const $=await le({url:w,checkAbortFn:()=>h}),B=$.headers.get("content-type");if(B!=="video/mp4")throw new Error("Invalid content type: "+B);const G=await $.blob(),V=await(await o.getFileHandle(c.name,{create:!0})).createWritable();return await V.write(G),await V.close(),m++,!0}catch(w){console.log(w,c)}return!1}),{start:Q,stop:X}=de(l,g,1e3),Y=setInterval(()=>{f.loading({key:d,content:i.jsxs(i.Fragment,{children:[a({en:"Downloading... ".concat(m,"/").concat(t.length),vi:"Đang tải... ".concat(m,"/").concat(t.length)}),i.jsx("br",{}),i.jsx("i",{children:a({en:"Click to stop",vi:"Bấm để dừng"})}),i.jsx("br",{}),p.map((c,k)=>i.jsxs("div",{style:{textAlign:"left"},children:[c,i.jsx("br",{})]},k))]}),duration:0,onClick:()=>h=!0}),h&&X()},500);await Q(),clearInterval(Y),f.destroy(d),b.open({type:"success",message:a(h?{en:"Stopped download tiktok videos",vi:"Đã dừng tải video tiktok"}:{en:"Downloaded tiktok videos",vi:"Tải xong video tiktok"}),description:"".concat(r==null?void 0:r.uniqueId," (").concat(m,"/").concat(t.length,")"),duration:0})},z=D.useMemo(()=>{const s=u.filter(t=>t.image).length,n=u.filter(t=>t.video&&!t.image).length;return[{title:"#",dataIndex:"index",key:"index",width:50},{title:"".concat(n," Video + ").concat(s," Photo"),key:"video",render(t,e,o){var d;return i.jsx(pe.Ribbon,{text:"Photo",color:"geekblue-inverse",style:{opacity:e.image?1:0},children:i.jsx(N,{src:((d=e.image)==null?void 0:d.cover)||e.video.cover,fallback:e.video.cover,style:{width:180,height:200,objectFit:"cover",borderRadius:10},preview:{destroyOnClose:!0,imageRender:e.image?()=>{var h;return i.jsx(je,{style:{maxWidth:"90vw",maxHeight:"90vh",alignItems:"center",overflowY:"auto",overflowX:"hidden",padding:10,borderRadius:10},children:i.jsx(U,{grid:{gutter:10},style:{width:"100%"},dataSource:(h=e.image)==null?void 0:h.images,renderItem:(m,l)=>i.jsx(U.Item,{children:i.jsx(N,{src:m,style:{objectFit:"cover",width:250,height:250,borderRadius:10}})}),rowKey:m=>m})})}:()=>i.jsx(ve,{info:e.video,defaultVariantTitle:{en:"Best",vi:"Tốt nhất"},style:{maxWidth:"90vw",maxHeight:"90vh"}}),toolbarRender:()=>null}})})},align:"center",width:180},{title:a({en:"Desc",vi:"Nội dung"}),dataIndex:"desc",key:"desc",render(t,e,o){return i.jsx(v.Text,{style:{maxWidth:250},children:e.desc})},width:250},{title:new Set(u.map(t=>{var e;return(e=t.music)==null?void 0:e.title})).size+a({en:" Music",vi:" Nhạc"}),dataIndex:"music",key:"music",render(t,e,o){const{id:d,author:h,cover:m,original:l,playUrl:p,title:g}=e.music||{};return d?i.jsxs(y,{direction:"vertical",size:3,children:[i.jsx(N,{src:m,style:{width:50,height:50,borderRadius:10}}),i.jsxs(v.Text,{children:[h," ",g," ",l," ",!!p&&i.jsx(v.Link,{href:p,target:"_blank",children:i.jsx("i",{className:"fa-solid fa-arrow-up-right-from-square"})})]})]}):"-"},filters:ee(u.map(t=>t.music),"title"),onFilter:(t,e)=>{var o;return((o=e.music)==null?void 0:o.title)===t},filterSearch:!0,width:150},{title:a({en:"Created",vi:"Ngày đăng"}),dataIndex:"createTime",key:"createTime",render(t,e,o){return i.jsxs(y,{direction:"vertical",size:3,children:[i.jsx(v.Text,{children:te(e.createTime)}),i.jsx(v.Text,{type:"secondary",children:ie(e.createTime)})]})},sorter:(t,e)=>t.createTime-e.createTime,width:120},{title:i.jsx("i",{className:"fa-solid fa-play fa-lg"}),dataIndex:"views",key:"views",render(t,e,o){return x(e.stats.playCount)},sorter:(t,e)=>t.stats.playCount-e.stats.playCount,width:70},{title:i.jsx("i",{className:"fa-solid fa-heart fa-lg"}),dataIndex:"heart",key:"heart",render(t,e,o){return x(e.stats.diggCount)},sorter:(t,e)=>t.stats.diggCount-e.stats.diggCount,width:70},{title:i.jsx("i",{className:"fa-solid fa-comment fa-lg"}),dataIndex:"comments",key:"comments",render(t,e,o){return x(e.stats.commentCount)},sorter:(t,e)=>t.stats.commentCount-e.stats.commentCount,width:70},{title:i.jsx("i",{className:"fa-solid fa-bookmark fa-lg"}),dataIndex:"collect",key:"collect",render(t,e,o){return x(e.stats.collectCount)},sorter:(t,e)=>t.stats.collectCount-e.stats.collectCount,width:70},{title:i.jsx("i",{className:"fa-solid fa-share fa-lg"}),dataIndex:"shares",key:"shares",render(t,e,o){return x(e.stats.shareCount)},sorter:(t,e)=>t.stats.shareCount-e.stats.shareCount,width:70},{title:i.jsx("i",{className:"fa-solid fa-clock fa-lg"}),dataIndex:"length",key:"length",render(t,e,o){return oe(e.video.duration)},sorter:(t,e)=>t.video.duration-e.video.duration,width:70},{title:a({en:"Action",vi:"Hành động"}),dataIndex:"action",key:"action",render(t,e,o){return i.jsx(y.Compact,{children:i.jsx(fe,{title:a({en:"Open on tiktok",vi:"Mở trong tiktok"}),children:i.jsx(W,{icon:i.jsx("i",{className:"fa-solid fa-arrow-up-right-from-square"}),onClick:()=>{var d;window.open("https://www.tiktok.com/@".concat((d=e.author)==null?void 0:d.uniqueId,"/video/").concat(e.video.id),"_blank")}})})})},width:90}]},[u]),J=s=>{const n=s!=null&&s.length?s:u,t=n.filter(e=>e.video&&!e.image);return i.jsxs(y,{children:[i.jsx(W,{type:"primary",icon:i.jsx("i",{className:"fa-solid fa-rotate-right"}),onClick:M,loading:P,children:a({en:"Reload",vi:"Tải lại"})}),i.jsx(be,{title:a({en:"Download",vi:"Tải xuống"}),data:n,options:[{key:"videos",label:t.length+" videos",onClick:e=>{O(e)}},{key:"formatted json",label:".json (formatted)",prepareData:e=>({fileName:(r==null?void 0:r.uniqueId)+".json",data:JSON.stringify(e.map(o=>({...o,raw:void 0,video:{...o.video,raw:void 0}})),null,4)})},{key:"raw json",label:".json (raw)",prepareData:e=>({fileName:(r==null?void 0:r.uniqueId)+".raw.json",data:JSON.stringify(e.map(o=>o.raw),null,4)})}]}),i.jsx(xe,{text:u.map(e=>e.desc).join("\n")})]})},K=(s,n)=>{var t,e;return[n.id,n.desc,(t=n.author)==null?void 0:t.nickname,(e=n.author)==null?void 0:e.uniqueId].find(o=>!!o&&ne(s,o))};return i.jsxs("div",{style:{display:"flex",flexDirection:"column",width:"100%",height:"100%"},children:[q?i.jsx(H,{message:a({vi:"🚧 Đang phát triển",en:"🚧 Work in progress"}),type:"error",style:{alignSelf:"center",marginBottom:10}}):i.jsx(H,{message:a({vi:"Sắp có trong phiên bản v".concat(S," (Bạn đang dùng v").concat(T.version,")"),en:"Coming soon in version v".concat(S," (Current v").concat(T.version,")")}),type:"warning",showIcon:!0,style:{alignSelf:"center",marginBottom:10}}),q||u!=null&&u.length?i.jsx(ue,{searchable:!0,selectable:!0,data:u.map((s,n)=>({...s,index:n+1})),columns:z,keyExtractor:s=>s.id,onSearchRow:K,renderTitle:J}):null]})}export{dt as default};
