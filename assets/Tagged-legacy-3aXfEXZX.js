System.register(["./index-legacy-DmD19Aid.js","./MyApp-legacy-BJbLsob1.js","./MyTable-legacy-_988qIe8.js","./ExportButton-legacy-DGpypYfq.js","./index-legacy-DPg2CUMR.js","./index-legacy-CMGY9Iof.js","./DownOutlined-legacy-CjjfugjU.js","./Table-legacy-DsGZmA9F.js","./List-legacy-CfttBbwf.js","./index-legacy-Cxbi09is.js","./index-legacy--HLK0E8V.js","./index-legacy-D1fMnGF4.js","./index-legacy-B-w8Oe-x.js","./PurePanel-legacy-RuolIxRp.js","./move-legacy-CuAq0P0j.js","./index-legacy-Cnn3ku5U.js","./SearchOutlined-legacy-CsuuitbD.js","./useBreakpoint-legacy-CFfMZR2S.js","./useForceUpdate-legacy-BPcPPEhm.js","./responsiveObserver-legacy-BCCgsqjX.js","./Pagination-legacy-Ce7JZ3_r.js","./index-legacy-CFyIWi0t.js","./row-legacy-apyBUmro.js","./file-download-legacy-DSev46T7.js"],(function(e,a){"use strict";var n,i,l,t,s,r,d,o,c,g,m,u,f,y,j,h,x,p,v,b,k,w,T,N;return{setters:[e=>{n=e.aR,i=e.b4,l=e.r,t=e.b6,s=e.ba,r=e.bp,d=e.bq,o=e.bw},e=>{c=e.g,g=e.A,m=e.D,u=e.q,f=e.u,y=e.l,j=e.t,h=e.S,x=e.I,p=e.h,v=e.i,b=e.T,k=e.n,w=e.c},e=>{T=e.default},e=>{N=e.E},null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],execute:function(){async function a(e,a=""){const i=await c(g.EAAB),l=await n(`https://graph.facebook.com/v12.0/${e}/tagged?fields=from,id,message,created_time`+(a?`&after=${a}`:"")+`&access_token=${i}`);m(l);const t=u(l);return console.log(t),t?.data?.map((e=>({id:e.id,message:e.message,created_time:e.created_time,from:{id:e.from?.id,name:e.from?.name},cursor:t?.paging?.cursors?.after})))||[]}e("default",(function({target:e}){const{ti:n}=i(),{message:c}=f(),[g,m]=y("Tagged."+e?.id,[]),[u,_]=y("Tagged.loading."+e?.id,!1),[A,C]=y("Tagged.loadMore."+e?.id,!1),[S,D]=l.useState(!0);l.useEffect((()=>{O()}),[e?.id]);const I=l.useRef(e?.id),O=(i=!1)=>{if(!e?.id||u)return;const l=I.current!==e?.id;(i||!g.length||l)&&(I.current=e?.id,j("Tagged:onClickReload"),_(!0),a(e.id).then((e=>{e?.length||c.info(n({en:"No data: Tagged",vi:"Không có dữ liệu: Lượt tag"})),console.log(e),m(e),D(!0)})).finally((()=>{_(!1)})))},R=t.jsx(s,{icon:t.jsx("i",{className:"fa-solid fa-play"}),loading:A,disabled:!S||u,onClick:async()=>{e?.id&&!A&&await k()&&(j("Tagged:onClickLoadMore"),C(!0),a(e.id,g[g.length-1]?.cursor).then((e=>{const a=new Set(g.map((e=>e.id))),i=e.filter((e=>!a.has(e.id)));i.length?(m((e=>[...e,...i])),D(!0)):(c.info(n({en:"No more data",vi:"Không còn dữ liệu"})),D(!1))})).finally((()=>C(!1))))},children:n(S?{en:"Load more",vi:"Tải thêm"}:{en:"No more data",vi:"Không còn dữ liệu"})}),E=[{title:"#",key:"index",dataIndex:"index"},{title:n({en:"Owner",vi:"Người tag"}),key:"from",dataIndex:"from",render:(e,a,i)=>a?.from?.id?t.jsxs(h,{children:[t.jsx(x,{src:p(a?.from?.id),style:{width:45,height:45,borderRadius:5}}),t.jsxs(h,{direction:"vertical",size:0,children:[t.jsx("a",{href:v(a?.from?.id),target:"_blank",rel:"noreferrer",children:t.jsx("b",{children:a?.from?.name})}),t.jsx("span",{style:{opacity:.5},children:a?.from?.id})]})]}):n({en:"Anonymous",vi:"Ẩn danh"}),filters:Array.from(new Set(g?.map((e=>e.from?.id)))).map((e=>{const a=g.filter((a=>a.from?.id===e));return{value:e||"",text:(a?.[0]?.from?.name||n({en:"Anonymous",vi:"Ẩn danh"}))+` (${a?.length})`,count:a?.length}})).sort(((e,a)=>a.count-e.count)),onFilter:(e,a)=>a.from?.id==e,width:300},{title:n({en:"Content",vi:"Nội dung"}),key:"message",dataIndex:"message",render:(a,n,i)=>t.jsx("div",{style:{wordBreak:"break-word",maxWidth:400},children:(n?.message?.length>200?n?.message?.substring(0,200)+"...":n?.message)?.replace(e?.name,"")||e?.name})},{title:n({en:"Created at",vi:"Thời gian"}),key:"created_time",dataIndex:"created_time",render:(e,a,n)=>t.jsxs("span",{children:[r(new Date(e).getTime())," - ",d(new Date(e))]})},{title:n({en:"Action",vi:"Hành động"}),key:"action",dataIndex:"action",render:(e,a,i)=>t.jsx(b,{title:n({en:"View post",vi:"Xem bài viết"}),children:t.jsx(s,{target:"_blank",href:v(a?.id),icon:t.jsx("i",{className:"fa-solid fa-external-link"})})}),width:100}];return t.jsx(T,{data:g.map(((e,a)=>({...e,index:a+1}))),columns:E,searchable:!0,keyExtractor:e=>e?.id,size:"small",renderTitle:()=>t.jsxs(t.Fragment,{children:[t.jsxs(h.Compact,{children:[t.jsx(s,{type:"primary",icon:t.jsx("i",{className:"fa-solid fa-rotate-right"}),loading:u,disabled:A,onClick:()=>O(!0),children:n({en:"Reload",vi:"Tải lại"})}),R]}),t.jsx(N,{data:g,options:[{key:"json",label:".json",prepareData:a=>({fileName:e?.name+"_tagged.json",data:JSON.stringify(a,null,4)})},{key:"csv",label:".csv",prepareData:a=>({fileName:e?.name+"_tagged.csv",data:o(a.map((e=>({...e,from:e.from?.id,fromName:e.from?.name}))))})}]}),t.jsx(w,{color:"red",children:g?.length+" "+n({en:"Tagged",vi:"Lượt tag"})})]}),footer:t.jsx("div",{style:{width:"100%",display:"flex",justifyContent:"center"},children:R})})}))}}}));
