System.register(["./index-legacy-BLWNhdSi.js","./useForceStop-legacy-hwT5hWvS.js","./MyTable-legacy-C-7sezLP.js","./ExportButton-legacy-DIuaecwX.js","./MyApp-legacy-DiY9AX-Q.js","./index-legacy-9AwjkThE.js","./index-legacy-DvirHOdl.js","./index-legacy-n8vhqlIG.js","./index-legacy-gXeC52Eh.js","./index-legacy-Bdb04PvB.js","./DownOutlined-legacy-BAU4mk5n.js","./TextArea-legacy-DGCZEH22.js","./Table-legacy-DjMToklK.js","./addEventListener-legacy-CMJdtc3g.js","./index-legacy-3lFC5AMA.js","./PurePanel-legacy-8YB54aau.js","./move-legacy-5rFa6L24.js","./SearchOutlined-legacy-CZSSKC5B.js","./index-legacy-BjnMCixR.js","./index-legacy-B4kOC7Ki.js","./Dropdown-legacy-BNhs1cvq.js","./useBreakpoint-legacy-BxnpLCFj.js","./responsiveObserver-legacy-DQl5_xPL.js","./Pagination-legacy-DbuttlxE.js","./index-legacy-BVOMYDwd.js","./EyeOutlined-legacy-DELHaa1I.js","./row-legacy-7L_Xcd9K.js","./file-download-legacy-B1lPK7bE.js"],(function(e,a){"use strict";var l,n,t,i,r,s,c,o,d,g,p,u,m,h,y,j,x,f,k,v,b,w;return{setters:[e=>{l=e.aC,n=e.aK,t=e.ax,i=e.ba,r=e.r,s=e.aM,c=e.aQ,o=e.bt,d=e.bd},e=>{g=e.u},e=>{p=e.default},e=>{u=e.E},e=>{m=e.o,h=e.p,y=e.e,j=e.l,x=e.t,f=e.S,k=e.b},e=>{v=e.I},e=>{b=e.T},e=>{w=e.A},null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],execute:function(){async function a({uid:e="",cursor:a=""}){const n=await m({fb_api_req_friendly_name:"ProfileCometAppCollectionListRendererPaginationQuery",variables:{cursor:a,count:8,scale:2,search:null,id:btoa("app_collection:"+e+":302324425790:103")},doc_id:"25969811035995761"}),t=h(n),{edges:i=[],page_info:r={}}=l(t);return i.map((e=>({id:e?.node?.id,pageId:e?.node?.node?.id,pageName:e?.node?.title?.text,place:e?.node?.subtitle_text?.text?.split("\n")?.[0],image:e?.node?.image?.uri,url:e?.node?.url||e?.node?.node?.url,timeString:e?.node?.subtitle_text?.text?.split("\n")?.[1],cursor:e?.cursor||r?.end_cursor})))}e("default",(function({target:e}){const{ti:l}=n(),{message:m}=t.useApp(),h=i(),_=g(),[I,C]=r.useState(!1),[N,S]=y("CheckedIns.data."+e?.id,[]),P=r.useMemo((()=>{const e=new Map,a=new Map;return N.forEach((l=>{e.has(l.place)||e.set(l.place,l),a.has(l.pageId)||a.set(l.pageId,l)})),{allPlaces:Array.from(e.values()),allPages:Array.from(a.values())}}),[N]);r.useEffect((()=>{e?.id&&T(!j("CheckedIns.data."+e?.id)?.length)}),[e?.id]);const T=async(n=!1)=>{if(!e?.id)return;const t=_.start();let i=[...n?[]:j("CheckedIns.data."+e?.id)||[]],r=i[i.length-1]?.cursor||"";x("CheckedIns:onReload"),C(!0);try{for(;!t.value();){const l=await a({uid:e.id,cursor:r});if(!l?.length)break;r=l[l.length-1]?.cursor,i=[...i,...l].map(((e,a)=>({...e,recent:a}))),S(i)}}catch(s){m.error({content:l({en:"Error: ",vi:"Lỗi: "})+s.message})}finally{S(i),C(!1)}},D=[{title:"#",dataIndex:"recent",key:"recent",render:(e,a,l)=>(a.recent||0)+1,sorter:(e,a)=>e.recent-a.recent,width:60},{title:l({en:"Cover",vi:"Ảnh"}),key:"cover",dataIndex:"image",render:(e,a,l)=>s.jsx(v,{src:a.image,style:{width:120,height:120,objectFit:"contain"}}),width:120},{title:P.allPages.length+" "+l({en:"Page",vi:"Trang"}),key:"name",dataIndex:"name",sorter:(e,a)=>e.pageName.localeCompare(a.pageName),render:(e,a,l)=>s.jsxs(f,{direction:"vertical",style:{maxWidth:250},children:[s.jsx(b.Link,{href:a.url,target:"_blank",children:s.jsx("b",{children:a.pageName})}),s.jsx("span",{style:{opacity:.6},children:a.pageId})]}),filters:P.allPages.map((e=>{let a=N.filter((a=>a.pageId===e.pageId)).length;return{count:a,value:e.pageId,text:e.pageName+" ("+a+")"}})).sort(((e,a)=>a.count-e.count)),onFilter:(e,a)=>a.pageId==e,filterSearch:!0},{title:P.allPlaces.length+" "+l({en:"Place",vi:"Địa điểm"}),key:"place",dataIndex:"place",sorter:(e,a)=>e.place.localeCompare(a.place),filters:P.allPlaces.map((e=>{let a=N.filter((a=>a.place===e.place)).length;return{count:a,value:e.place,text:e.place+" ("+a+")"}})).sort(((e,a)=>a.count-e.count)),onFilter:(e,a)=>a.place==e,filterSearch:!0,width:200},{title:l({en:"Time",vi:"Thời gian"}),key:"timeString",dataIndex:"timeString",sorter:(e,a)=>e.timeString.localeCompare(a.timeString),width:250},{title:l({en:"Actions",vi:"Hành động"}),key:"actions",render:(e,a,n)=>s.jsxs(f.Compact,{children:[s.jsx(k,{title:l({en:"Show map",vi:"Xem bản đồ"}),children:s.jsx(c,{type:"default",onClick:()=>{window.open("https://www.google.com/maps/search/"+a.pageName,"_blank")},icon:s.jsx("i",{className:"fa-solid fa-location-dot"})})}),s.jsx(k,{title:l({en:"Bulk Downloader",vi:"Tải hàng loạt"}),children:s.jsx(c,{type:"default",onClick:()=>{return e=a.pageId,void h("/bulk-downloader",{state:{targetId:e,platform:o.Facebook}});var e},icon:s.jsx("i",{className:"fa-solid fa-download"})})})]}),width:100,align:"end"}];return s.jsxs("div",{style:{display:"flex",flexDirection:"column",width:"100%",height:"100%"},children:[s.jsx(w,{type:"success",showIcon:!0,message:l({en:`Checked in ${N.length} times`,vi:`Đã check in ${N.length} lần`}),style:{alignSelf:"center",marginBottom:10}}),s.jsx(p,{columns:D,data:N,keyExtractor:e=>e?.id,searchable:!0,pageSize:3,renderTitle:a=>s.jsxs(f,{children:[s.jsx(c,{disabled:I,type:"primary",icon:I?s.jsx("i",{className:"fa-solid fa-rotate-right fa-spin"}):s.jsx("i",{className:"fa-solid fa-rotate-right"}),onClick:()=>T(!0),children:l({en:"Reload",vi:"Tải lại"})}),s.jsx(u,{data:a.length?a:N,options:[{key:"id",label:".txt (page id)",prepareData:a=>({fileName:e?.name+"_check_in_id.txt",data:a.map((e=>e.pageId)).join("\n")})},{key:"id_name",label:".csv (page id+name)",prepareData:a=>({fileName:e?.name+"_check_in_id_name.csv",data:d(a.map((e=>({page:e.pageId,name:e.pageName,place:e.place}))))})},{key:"json",label:".json",prepareData:a=>({fileName:e?.name+"_check_in.json",data:JSON.stringify(a,null,4)})},{key:"csv",label:".csv",prepareData:a=>({fileName:e?.name+"_check_in.csv",data:d(a)})}]}),s.jsx(c,{onClick:()=>{e?.url?.includes("?id=")?window.open(e?.url+"&sk=map","_blank"):window.open(e?.url+"/map","_blank")},icon:s.jsx("i",{className:"fa fa-external-link-alt"}),children:l({vi:"Xem trên Facebook",en:"View on Facebook"})},"view-fb")]})})]})}))}}}));
