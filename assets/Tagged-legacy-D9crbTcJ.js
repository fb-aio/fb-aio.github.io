System.register(["./index-legacy-BLWNhdSi.js","./MyApp-legacy-DiY9AX-Q.js","./MyTable-legacy-C-7sezLP.js","./ExportButton-legacy-DIuaecwX.js","./index-legacy-9AwjkThE.js","./index-legacy-gXeC52Eh.js","./index-legacy-DvirHOdl.js","./TextArea-legacy-DGCZEH22.js","./index-legacy-Bdb04PvB.js","./DownOutlined-legacy-BAU4mk5n.js","./Table-legacy-DjMToklK.js","./addEventListener-legacy-CMJdtc3g.js","./index-legacy-3lFC5AMA.js","./PurePanel-legacy-8YB54aau.js","./move-legacy-5rFa6L24.js","./SearchOutlined-legacy-CZSSKC5B.js","./index-legacy-BjnMCixR.js","./index-legacy-B4kOC7Ki.js","./Dropdown-legacy-BNhs1cvq.js","./useBreakpoint-legacy-BxnpLCFj.js","./responsiveObserver-legacy-DQl5_xPL.js","./Pagination-legacy-DbuttlxE.js","./index-legacy-BVOMYDwd.js","./EyeOutlined-legacy-DELHaa1I.js","./row-legacy-7L_Xcd9K.js","./file-download-legacy-B1lPK7bE.js"],(function(e,a){"use strict";var n,l,i,t,s,r,d,o,c,g,m,u,f,y,j,h,x,p,v,k,b,w,T,N;return{setters:[e=>{n=e.au,l=e.aK,i=e.r,t=e.aM,s=e.b5,r=e.b6,d=e.aQ,o=e.bd},e=>{c=e.f,g=e.A,m=e.z,u=e.p,f=e.u,y=e.e,j=e.t,h=e.S,x=e.g,p=e.a,v=e.b,k=e.T,b=e.k},e=>{w=e.default},e=>{T=e.E},e=>{N=e.I},null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],execute:function(){async function a(e,a=""){const l=await c(g.EAAB),i=await n(`https://graph.facebook.com/v12.0/${e}/tagged?fields=from,id,message,created_time`+(a?`&after=${a}`:"")+`&access_token=${l}`);m(i);const t=u(i);return console.log(t),t?.data?.map((e=>({id:e.id,message:e.message,created_time:e.created_time,from:{id:e.from?.id,name:e.from?.name},cursor:t?.paging?.cursors?.after})))||[]}e("default",(function({target:e}){const{ti:n}=l(),{message:c}=f(),[g,m]=y("Tagged."+e?.id,[]),[u,_]=y("Tagged.loading."+e?.id,!1),[A,C]=y("Tagged.loadMore."+e?.id,!1),[S,D]=i.useState(!0);i.useEffect((()=>{O()}),[e?.id]);const E=i.useRef(e?.id),O=(l=!1)=>{if(!e?.id||u)return;const i=E.current!==e?.id;(l||!g.length||i)&&(E.current=e?.id,j("Tagged:onClickReload"),_(!0),a(e.id).then((e=>{e?.length||c.info(n({en:"No data: Tagged",vi:"Không có dữ liệu: Lượt tag"})),console.log(e),m(e),D(!0)})).finally((()=>{_(!1)})))},I=async()=>{e?.id&&!A&&await b()&&(j("Tagged:onClickLoadMore"),C(!0),a(e.id,g[g.length-1]?.cursor).then((e=>{const a=new Set(g.map((e=>e.id))),l=e.filter((e=>!a.has(e.id)));l.length?(m((e=>[...e,...l])),D(!0)):(c.info(n({en:"No more data",vi:"Không còn dữ liệu"})),D(!1))})).finally((()=>C(!1))))},L=[{title:"#",key:"index",dataIndex:"index"},{title:n({en:"Owner",vi:"Người tag"}),key:"from",dataIndex:"from",render:(e,a,l)=>a?.from?.id?t.jsxs(h,{children:[t.jsx(N,{src:x(a?.from?.id),style:{width:45,height:45,borderRadius:5}}),t.jsxs(h,{direction:"vertical",size:0,children:[t.jsx("a",{href:p(a?.from?.id),target:"_blank",rel:"noreferrer",children:t.jsx("b",{children:a?.from?.name})}),t.jsx("span",{style:{opacity:.5},children:a?.from?.id})]})]}):n({en:"Anonymous",vi:"Ẩn danh"}),filters:Array.from(new Set(g?.map((e=>e.from?.id)))).map((e=>{const a=g.filter((a=>a.from?.id===e));return{value:e||"",text:(a?.[0]?.from?.name||n({en:"Anonymous",vi:"Ẩn danh"}))+` (${a?.length})`,count:a?.length}})).sort(((e,a)=>a.count-e.count)),onFilter:(e,a)=>a.from?.id==e,width:300},{title:n({en:"Content",vi:"Nội dung"}),key:"message",dataIndex:"message",render:(a,n,l)=>t.jsx("div",{style:{wordBreak:"break-word",maxWidth:400},children:(n?.message?.length>200?n?.message?.substring(0,200)+"...":n?.message)?.replace(e?.name,"")||e?.name})},{title:n({en:"Created at",vi:"Thời gian"}),key:"created_time",dataIndex:"created_time",render:(e,a,n)=>t.jsxs("span",{children:[s(new Date(e).getTime())," - ",r(new Date(e))]})},{title:n({en:"Action",vi:"Hành động"}),key:"action",dataIndex:"action",render:(e,a,l)=>t.jsx(v,{title:n({en:"View post",vi:"Xem bài viết"}),children:t.jsx(d,{target:"_blank",href:p(a?.id),icon:t.jsx("i",{className:"fa-solid fa-external-link"})})}),width:100}];return t.jsx(w,{data:g.map(((e,a)=>({...e,index:a+1}))),columns:L,searchable:!0,keyExtractor:e=>e?.id,size:"small",renderTitle:()=>t.jsxs(h,{children:[t.jsxs(h.Compact,{children:[t.jsx(d,{type:"primary",icon:t.jsx("i",{className:"fa-solid fa-rotate-right"}),loading:u,disabled:A,onClick:()=>O(!0),children:n({en:"Reload",vi:"Tải lại"})}),t.jsx(d,{icon:t.jsx("i",{className:"fa-solid fa-play"}),loading:A,disabled:!S||u,onClick:I,children:n(S?{en:"Load more",vi:"Tải thêm"}:{en:"No more data",vi:"Không còn dữ liệu"})})]}),t.jsx(T,{data:g,options:[{key:"json",label:".json",prepareData:a=>({fileName:e?.name+"_tagged.json",data:JSON.stringify(a,null,4)})},{key:"csv",label:".csv",prepareData:a=>({fileName:e?.name+"_tagged.csv",data:o(a.map((e=>({...e,from:e.from?.id,fromName:e.from?.name}))))})}]}),t.jsx(k,{color:"red",children:g?.length+" "+n({en:"Tagged",vi:"Lượt tag"})})]})})}))}}}));
