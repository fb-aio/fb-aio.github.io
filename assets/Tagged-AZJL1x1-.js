import{at as B,aI as L,r as j,aK as s,b0 as O,b1 as D,aM as v,b8 as F}from"./index-BoZ3qCu-.js";import{e as $,A as U,z as J,p as K,u as P,i as b,t as T,S as k,g as z,a as S,b as g,B as H,T as V,j as q}from"./MyApp-D00-hVKM.js";import{M as W}from"./MyTable-BCaimdBe.js";import{E as X}from"./ExportButton-DgFEbkrh.js";import{I as Y}from"./index-B9p0fwME.js";import"./index-DISxAyNO.js";import"./index-BqA1u72M.js";import"./index-D8gaebSk.js";import"./PurePanel-BOikr8JH.js";import"./SearchOutlined-jKWQFlYP.js";import"./Table-CyCG4zvu.js";import"./addEventListener-CnAWjiAc.js";import"./index-Lhz2nIJB.js";import"./index-eKalL2eG.js";import"./Dropdown-DBLdsESi.js";import"./useBreakpoint-F7WTD34q.js";import"./Pagination-DzBVYRJu.js";import"./index-AT3_9SK-.js";import"./EyeOutlined-BHVey_FU.js";import"./row-CSBfwUbZ.js";import"./file-download-Cuv0I7kF.js";async function A(e,a=""){var r;const h=await $(U.EAAB),o=await B(`https://graph.facebook.com/v12.0/${e}/tagged?fields=from,id,message,created_time`+(a?`&after=${a}`:"")+`&access_token=${h}`);J(o);const t=K(o);return console.log(t),((r=t==null?void 0:t.data)==null?void 0:r.map(c=>{var u,x,y,p;return{id:c.id,message:c.message,created_time:c.created_time,from:{id:(u=c.from)==null?void 0:u.id,name:(x=c.from)==null?void 0:x.name},cursor:(p=(y=t==null?void 0:t.paging)==null?void 0:y.cursors)==null?void 0:p.after}}))||[]}async function G(e){const a=".",h=btoa(JSON.stringify({"rp_author:0":JSON.stringify({name:"author",args:e}),"recent_posts:0":JSON.stringify({name:"recent_posts",args:""})})),o=`https://www.facebook.com/search/posts/?q=${encodeURI(a)}&filters=${encodeURI(h)}`;window.open(o,"_blank")}function vn({target:e}){const{ti:a}=L(),{message:h}=P(),[o,t]=b("Tagged."+(e==null?void 0:e.id),[]),[r,c]=b("Tagged.loading."+(e==null?void 0:e.id),!1),[u,x]=b("Tagged.loadMore."+(e==null?void 0:e.id),!1),[y,p]=j.useState(!0);j.useEffect(()=>{C()},[e==null?void 0:e.id]);const N=j.useRef(e==null?void 0:e.id),w=j.useRef(!1),C=(i=!1)=>{if(!(e!=null&&e.id)||r||w.current)return;const n=N.current!==(e==null?void 0:e.id);!i&&o.length&&!n||(N.current=e==null?void 0:e.id,T("Tagged:onClickReload"),c(!0),w.current=!0,A(e.id).then(l=>{console.log(l),t(l),p(!0)}).finally(()=>{w.current=!1,c(!1)}))},R=async()=>{var i;!(e!=null&&e.id)||u||await q()&&(T("Tagged:onClickLoadMore"),x(!0),A(e.id,(i=o[o.length-1])==null?void 0:i.cursor).then(n=>{const l=new Set(o.map(d=>d.id)),m=n.filter(d=>!l.has(d.id));m.length?(t(d=>[...d,...m]),p(!0)):(h.info(a({en:"No more data",vi:"Không còn dữ liệu"})),p(!1))}).finally(()=>x(!1)))},_=()=>s.jsxs(k,{children:[s.jsxs(k.Compact,{children:[s.jsx(v,{type:"primary",icon:s.jsx("i",{className:"fa-solid fa-rotate-right"}),loading:r,disabled:u,onClick:()=>C(!0),children:a({en:"Reload",vi:"Tải lại"})}),s.jsx(v,{icon:s.jsx("i",{className:"fa-solid fa-play"}),loading:u,disabled:!y||r,onClick:R,children:a(y?{en:"Load more",vi:"Tải thêm"}:{en:"No more data",vi:"Không còn dữ liệu"})})]}),s.jsx(X,{data:o,options:[{key:"json",label:".json",prepareData:i=>({fileName:(e==null?void 0:e.name)+"_tagged.json",data:JSON.stringify(i,null,4)})},{key:"csv",label:".csv",prepareData:i=>({fileName:(e==null?void 0:e.name)+"_tagged.csv",data:F(i.map(n=>{var l,m;return{...n,from:(l=n.from)==null?void 0:l.id,fromName:(m=n.from)==null?void 0:m.name}}))})}]}),s.jsx(V,{color:"red",children:(o==null?void 0:o.length)+" "+a({en:"Tagged",vi:"Lượt tag"})})]}),M=[{title:"#",key:"index",dataIndex:"index"},{title:a({en:"Owner",vi:"Người tag"}),key:"from",dataIndex:"from",render:(i,n,l)=>{var m,d,f,I,E;return(m=n==null?void 0:n.from)!=null&&m.id?s.jsxs(k,{children:[s.jsx(Y,{src:z((d=n==null?void 0:n.from)==null?void 0:d.id),style:{width:45,height:45,borderRadius:5}}),s.jsxs(k,{direction:"vertical",size:0,children:[s.jsx("a",{href:S((f=n==null?void 0:n.from)==null?void 0:f.id),target:"_blank",rel:"noreferrer",children:s.jsx("b",{children:(I=n==null?void 0:n.from)==null?void 0:I.name})}),s.jsx("span",{style:{opacity:.5},children:(E=n==null?void 0:n.from)==null?void 0:E.id})]})]}):a({en:"Anonymous",vi:"Ẩn danh"})},filters:Array.from(new Set(o==null?void 0:o.map(i=>{var n;return(n=i.from)==null?void 0:n.id}))).map(i=>{var l,m;const n=o.filter(d=>{var f;return((f=d.from)==null?void 0:f.id)===i});return{value:i||"",text:(((m=(l=n==null?void 0:n[0])==null?void 0:l.from)==null?void 0:m.name)||a({en:"Anonymous",vi:"Ẩn danh"}))+` (${n==null?void 0:n.length})`,count:n==null?void 0:n.length}}).sort((i,n)=>n.count-i.count),onFilter:(i,n)=>{var l;return((l=n.from)==null?void 0:l.id)==i},width:300},{title:a({en:"Content",vi:"Nội dung"}),key:"message",dataIndex:"message",render:(i,n,l)=>{var m,d,f;return s.jsx("div",{style:{wordBreak:"break-word",maxWidth:400},children:((f=((m=n==null?void 0:n.message)==null?void 0:m.length)>200?((d=n==null?void 0:n.message)==null?void 0:d.substring(0,200))+"...":n==null?void 0:n.message)==null?void 0:f.replace(e==null?void 0:e.name,""))||(e==null?void 0:e.name)})}},{title:a({en:"Created at",vi:"Thời gian"}),key:"created_time",dataIndex:"created_time",render:(i,n,l)=>s.jsxs("span",{children:[O(new Date(i))," - ",D(new Date(i))]})},{title:a({en:"Action",vi:"Hành động"}),key:"action",dataIndex:"action",render:(i,n,l)=>s.jsx(g,{title:a({en:"View post",vi:"Xem bài viết"}),children:s.jsx(v,{target:"_blank",href:S(n==null?void 0:n.id),icon:s.jsx("i",{className:"fa-solid fa-external-link"})})}),width:100}];return s.jsxs("div",{children:[s.jsx(k,{style:{width:"100%",alignItems:"center",justifyContent:"center",marginBottom:10},direction:"vertical",children:s.jsx(H,{count:a({en:"New",vi:"Mới"}),style:{color:"white"},color:"purple",children:s.jsx(v,{icon:s.jsx("i",{className:"fa-solid fa-search"}),onClick:()=>{T("BulkDownloader:Tagged:FindAllPosts"),G((e==null?void 0:e.id)||"")},children:a({en:"Find all posts of ",vi:"Tìm mọi bài viết của "})+(e==null?void 0:e.name)+"?"})})}),s.jsx(W,{data:o.map((i,n)=>({...i,index:n+1})),columns:M,searchable:!0,keyExtractor:i=>i==null?void 0:i.id,size:"small",renderTitle:_})]})}export{vn as default};
