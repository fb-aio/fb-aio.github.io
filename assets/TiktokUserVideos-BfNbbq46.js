import{b6 as ee,r as D,bv as C,b8 as t,bM as te,bq as ie,br as oe,co as k,cp as ne,am as L,bt as ae,b2 as se,cC as E,bu as re,a_ as le,cD as de,cH as ce}from"./index-wbIphP0C.js";import{b as me,e as ue}from"./core-G9WAMCag.js";import he from"./MyTable-DkmT_wSu.js";import{u as pe,i as W,B as fe,k as I,d as x,S as N,T as ge,t as A,r as xe,m as we}from"./MyApp-njhOwsK5.js";import{W as ke}from"./WordStatisticButton-D7qcvrIe.js";import ve from"./VideoViewer-V1Ev_y4Q.js";import{w as be,r as ye}from"./window-WvEbVvru.js";import{E as je}from"./ExportButton-CK6iuPH_.js";import{C as Te}from"./index-lnInszF6.js";import{L as H}from"./index-s3q_FkaZ.js";import{A as P}from"./index-BEOp8J_e.js";import"./index-CEfgdh1o.js";import"./index-DfrvD6Zk.js";import"./DownOutlined-Bwe6hCgw.js";import"./Table-vSlcRHUj.js";import"./List-xxph-gd1.js";import"./index-CpRAsVod.js";import"./index-BhxZmaJn.js";import"./index-CKlEhchA.js";import"./index-BJ_cfilr.js";import"./PurePanel-D-rOXPVf.js";import"./move-pmQE-KxM.js";import"./index-BQOyVFxl.js";import"./useBreakpoint-DzRoOrnh.js";import"./useForceUpdate-D5RHpHIP.js";import"./responsiveObserver-BQjJBraY.js";import"./Pagination-0Ohn2LYf.js";import"./row-DdHEAPVK.js";import"./BadgeWrapper-NRWTo8EW.js";import"./index-BXdrkUf2.js";import"./index-D4xau2bN.js";import"./videos-CpoEZEvj.js";import"./VideoWithMuted-Cmj6LkIN.js";import"./download-DE77ekA1.js";import"./file-download-D5jJu5kT.js";import"./col-DRzNhW_D.js";const F="1.8";function lt({target:r}){const{ti:a}=ee(),{message:f,notification:b}=pe(),[u,S]=W("TiktokUserVideos."+r.uniqueId,[]),[U,q]=W("TiktokUserVideos.loading",!1),y=D.useRef(null),R=C.version>=F,M=async()=>{const s="TiktokUserVideos.onReload";A(s),q(!0),S([]),f.loading({key:s,content:a({en:"Loading...",vi:"Đang tải..."}),duration:0});try{y.current&&y.current.close();const n=window.open("https://www.tiktok.com/@"+r.uniqueId,"_blank","width=800,height=600");n.blur(),window.focus(),y.current=n,f.loading({key:s,content:a({en:"Waiting tiktok...",vi:"Đang chờ tiktok..."}),duration:0}),await be(n);let i="",e=0,o=!1;for(;!o&&!n.closed;){f.loading({key:s,content:t.jsxs(t.Fragment,{children:[a({en:"Fetching videos...",vi:"Đang tải videos..."})+e,t.jsx("br",{}),t.jsx("i",{children:a({en:"Click to stop",vi:"Bấm để dừng"})})]}),duration:0,onClick:()=>{o=!0}});const d=me({secUid:r.secUid,count:35,cursor:i,coverFormat:"2"}),h="https://www.tiktok.com/api/post/item_list/?"+Object.entries(d).map(g=>g.join("=")).join("&"),m=await ye({win:n,fnPath:"fetch",params:[h,{credentials:"include"}],checkAbort:()=>o}),l=xe(m);console.log(l);const p=ue(l==null?void 0:l.itemList);if(!p.length||(e+=p.length,S(g=>[...g,...p]),!(l!=null&&l.hasMore)))break;i=l==null?void 0:l.cursor,await se(500)}n.closed?f.warning({content:a({en:"Tiktok window closed before done",vi:"Tab tiktok bị tắt trước khi chạy xong"})}):n.close(),b.open({type:"success",message:a({en:"Fetch tiktok videos completed",vi:"Tìm videos tiktok xong"}),description:r.uniqueId+" - "+e+" videos",duration:0})}catch(n){console.log(n),b.open({type:"error",message:a({en:"Failed to fetch tiktok videos",vi:"Lỗi tìm videos tiktok"}),description:r.uniqueId+" - "+n.message,duration:0})}finally{f.destroy(s),q(!1)}},O=async s=>{if(!await we())return;const n="TiktokUserVideos:downloadVideos";A(n);const i=s.map((c,v)=>({name:v+"_"+E(c.desc||c.video.id||c.id)+".mp4",urls:(c.video.variants||[]).map(j=>[j.source,j.urls].flat().filter(Boolean)).flat().filter(Boolean)})).filter(c=>c.urls.length);if(!i.length)return!1;const e=await window.showDirectoryPicker({mode:"readwrite"});await e.requestPermission({writable:!0});const o=await e.getDirectoryHandle(E(r==null?void 0:r.uniqueId),{create:!0}),d=n;f.loading({key:d,content:a({en:"Downloading...",vi:"Đang tải..."}),duration:0});let h=!1,m=0,l=0;const p=Math.min(5,i.length),g=Array.from({length:p},()=>""),K=i.map((c,v)=>async(j,Q)=>{for(let T of c.urls)try{g[Q]=re(c.name,30);const w=await le(T,!0);T!==w&&console.log("redirected",T,w);const $=await de({url:w,checkAbortFn:()=>h}),V=$.headers.get("content-type");if(V!=="video/mp4")throw new Error("Invalid content type: "+V);const Z=await $.blob(),B=await(await o.getFileHandle(c.name,{create:!0})).createWritable();return await B.write(Z),await B.close(),m++,!0}catch(w){console.log(w,c)}return l++,!1}),{start:X,stop:Y}=ce(p,K,1e3),G=setInterval(()=>{f.loading({key:d,content:t.jsxs(t.Fragment,{children:[a({en:"Downloading... ".concat(m,"/").concat(i.length,". Failed: ").concat(l),vi:"Đang tải... ".concat(m,"/").concat(i.length,". Lỗi: ").concat(l)}),t.jsx("br",{}),t.jsx("i",{children:a({en:"Click to stop",vi:"Bấm để dừng"})}),t.jsx("br",{}),g.map((c,v)=>t.jsxs("div",{style:{textAlign:"left"},children:[c,t.jsx("br",{})]},v))]}),duration:0,onClick:()=>h=!0}),h&&Y()},500);await X(),clearInterval(G),f.destroy(d),b.open({type:"success",message:a(h?{en:"Stopped download tiktok videos",vi:"Đã dừng tải video tiktok"}:{en:"Downloaded tiktok videos",vi:"Tải xong video tiktok"}),description:"".concat(r==null?void 0:r.uniqueId," (").concat(m,"/").concat(i.length,")"),duration:0})},_=D.useMemo(()=>{const s=u.filter(i=>i.image).length,n=u.filter(i=>i.video&&!i.image).length;return[{title:"#",dataIndex:"index",key:"index",width:50},{title:"".concat(n," Video + ").concat(s," Photo"),key:"video",render(i,e,o){var d;return t.jsx(fe.Ribbon,{text:"Photo",color:"geekblue-inverse",style:{opacity:e.image?1:0},children:t.jsx(I,{src:((d=e.image)==null?void 0:d.cover)||e.video.cover,fallback:e.video.cover,style:{width:180,height:200,objectFit:"cover",borderRadius:10},preview:{destroyOnClose:!0,imageRender:e.image?()=>{var h;return t.jsx(Te,{style:{maxWidth:"90vw",maxHeight:"90vh",alignItems:"center",overflowY:"auto",overflowX:"hidden",padding:10,borderRadius:10},children:t.jsx(H,{grid:{gutter:10},style:{width:"100%"},dataSource:(h=e.image)==null?void 0:h.images,renderItem:(m,l)=>t.jsx(H.Item,{children:t.jsx(I,{src:m,style:{objectFit:"cover",width:250,height:250,borderRadius:10}})}),rowKey:m=>m})})}:()=>t.jsx(ve,{info:e.video,defaultVariantTitle:{en:"Best",vi:"Tốt nhất"},style:{maxWidth:"90vw",maxHeight:"90vh"}}),toolbarRender:()=>null}})})},align:"center",width:180},{title:a({en:"Desc",vi:"Nội dung"}),dataIndex:"desc",key:"desc",render(i,e,o){return t.jsx(x.Text,{style:{maxWidth:250},children:e.desc})},width:250},{title:new Set(u.map(i=>{var e;return(e=i.music)==null?void 0:e.title})).size+a({en:" Music",vi:" Nhạc"}),dataIndex:"music",key:"music",render(i,e,o){const{id:d,author:h,cover:m,original:l,playUrl:p,title:g}=e.music||{};return d?t.jsxs(N,{direction:"vertical",size:3,children:[t.jsx(I,{src:m,style:{width:50,height:50,borderRadius:10}}),t.jsxs(x.Text,{children:[h," ",g," ",l," ",!!p&&t.jsx(x.Link,{href:p,target:"_blank",children:t.jsx("i",{className:"fa-solid fa-arrow-up-right-from-square"})})]})]}):"-"},filters:te(u.map(i=>i.music),"title"),onFilter:(i,e)=>{var o;return((o=e.music)==null?void 0:o.title)===i},filterSearch:!0,width:150},{title:a({en:"Created",vi:"Ngày đăng"}),dataIndex:"createTime",key:"createTime",render(i,e,o){return t.jsxs(N,{direction:"vertical",size:3,children:[t.jsx(x.Text,{children:ie(e.createTime)}),t.jsx(x.Text,{type:"secondary",children:oe(e.createTime)})]})},sorter:(i,e)=>i.createTime-e.createTime,width:120},{title:t.jsx("i",{className:"fa-solid fa-play fa-lg"}),dataIndex:"views",key:"views",render(i,e,o){return k(e.stats.playCount)},sorter:(i,e)=>i.stats.playCount-e.stats.playCount,width:70},{title:t.jsx("i",{className:"fa-solid fa-heart fa-lg"}),dataIndex:"heart",key:"heart",render(i,e,o){return k(e.stats.diggCount)},sorter:(i,e)=>i.stats.diggCount-e.stats.diggCount,width:70},{title:t.jsx("i",{className:"fa-solid fa-comment fa-lg"}),dataIndex:"comments",key:"comments",render(i,e,o){return k(e.stats.commentCount)},sorter:(i,e)=>i.stats.commentCount-e.stats.commentCount,width:70},{title:t.jsx("i",{className:"fa-solid fa-bookmark fa-lg"}),dataIndex:"collect",key:"collect",render(i,e,o){return k(e.stats.collectCount)},sorter:(i,e)=>i.stats.collectCount-e.stats.collectCount,width:70},{title:t.jsx("i",{className:"fa-solid fa-share fa-lg"}),dataIndex:"shares",key:"shares",render(i,e,o){return k(e.stats.shareCount)},sorter:(i,e)=>i.stats.shareCount-e.stats.shareCount,width:70},{title:t.jsx("i",{className:"fa-solid fa-clock fa-lg"}),dataIndex:"length",key:"length",render(i,e,o){return ne(e.video.duration)},sorter:(i,e)=>i.video.duration-e.video.duration,width:70},{title:a({en:"Action",vi:"Hành động"}),dataIndex:"action",key:"action",render(i,e,o){return t.jsx(N.Compact,{children:t.jsx(ge,{title:a({en:"Open on tiktok",vi:"Mở trong tiktok"}),children:t.jsx(L,{icon:t.jsx("i",{className:"fa-solid fa-arrow-up-right-from-square"}),onClick:()=>{var d;window.open("https://www.tiktok.com/@".concat((d=e.author)==null?void 0:d.uniqueId,"/video/").concat(e.video.id),"_blank")}})})})},width:90}]},[u]),z=s=>{const n=s!=null&&s.length?s:u,i=n.filter(e=>e.video&&!e.image);return t.jsxs(t.Fragment,{children:[t.jsx(L,{type:"primary",icon:t.jsx("i",{className:"fa-solid fa-rotate-right"}),onClick:M,loading:U,children:a({en:"Reload",vi:"Tải lại"})}),t.jsx(je,{title:a({en:"Download",vi:"Tải xuống"}),data:n,options:[{key:"videos",label:i.length+" videos",onClick:e=>{O(e)}},{key:"formatted json",label:".json (formatted)",prepareData:e=>({fileName:(r==null?void 0:r.uniqueId)+".json",data:JSON.stringify(e.map(o=>({...o,raw:void 0,video:{...o.video,raw:void 0}})),null,4)})},{key:"raw json",label:".json (raw)",prepareData:e=>({fileName:(r==null?void 0:r.uniqueId)+".raw.json",data:JSON.stringify(e.map(o=>o.raw),null,4)})}]}),t.jsx(ke,{text:u.map(e=>e.desc).join("\n")})]})},J=(s,n)=>{var i,e;return[n.id,n.desc,(i=n.author)==null?void 0:i.nickname,(e=n.author)==null?void 0:e.uniqueId].find(o=>!!o&&ae(s,o))};return t.jsx("div",{style:{display:"flex",flexDirection:"column",width:"100%",height:"100%"},children:R?location.hostname.includes(".github.io")?t.jsx(P,{message:t.jsxs(t.Fragment,{children:[t.jsx(x.Text,{children:a({en:t.jsxs(t.Fragment,{children:["🚧 Please open"," ",t.jsxs("a",{href:"https://fb-aio.web.app/#/bulk-downloader",target:"_blank",children:[" ","This website"," ",t.jsx("i",{className:"fa-solid fa-arrow-up-right-from-square"})]})," ","to download bulk Tiktok."]}),vi:t.jsxs(t.Fragment,{children:["🚧 Vui lòng mở"," ",t.jsxs("a",{href:"https://fb-aio.web.app/#/bulk-downloader",target:"_blank",children:[" ","Trang web này"," ",t.jsx("i",{className:"fa-solid fa-arrow-up-right-from-square"})]})," ","để tải hàng loạt Tiktok."]})})})," ",t.jsxs("a",{href:"https://www.facebook.com/groups/fbaio/posts/1583865772268105",target:"_blank",children:[a({en:"Reason?",vi:"Lý do?"})," ",t.jsx("i",{className:"fa-solid fa-arrow-up-right-from-square"})]})]}),type:"error",style:{alignSelf:"center",marginBottom:10}}):R||u!=null&&u.length?t.jsx(he,{searchable:!0,selectable:!0,data:u.map((s,n)=>({...s,index:n+1})),columns:_,keyExtractor:s=>s.id,onSearchRow:J,renderTitle:z}):null:t.jsx(P,{message:a({vi:"Sắp có trong phiên bản v".concat(F," (Bạn đang dùng v").concat(C.version,")"),en:"Coming soon in version v".concat(F," (Current v").concat(C.version,")")}),type:"warning",showIcon:!0,style:{alignSelf:"center",marginBottom:10}})})}export{lt as default};
