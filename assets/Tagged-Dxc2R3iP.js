import{r as v,av as s,aw as j}from"./index-DKcwpaNn.js";import{a6 as R,a7 as B,G as D,D as L,u as O,c as F,e as w,t as T,b as k,i as $,h as E,a8 as U,f as J,T as P,B as K,o as z,j as H}from"./MyApp-CDv-rFzA.js";import V from"./MyTable-Cfe24VBl.js";import{E as q}from"./ExportButton-CvvFAB6e.js";import{I as G}from"./index-Dg7Z2Izz.js";import{T as W}from"./index-B_vBY5DC.js";import"./index-b6__-RGH.js";import"./Table-BrmzQDbH.js";import"./index-CWhtpity.js";import"./addEventListener-Bihk99B1.js";import"./index-BeW64aJ1.js";import"./PurePanel-Dm2KaroR.js";import"./SearchOutlined-CyhZwKQE.js";import"./index-R4jL5rp5.js";import"./index-DHgoLQnq.js";import"./Dropdown-C-7JdpRY.js";import"./useBreakpoint-SG1Oq1Ac.js";import"./responsiveObserver-C2jXDk8e.js";import"./Pagination-cNqsTGGh.js";import"./index-DyBnpzdS.js";import"./EyeOutlined-DBKuVwCK.js";import"./row-DQZWBVdA.js";import"./file-download-DdCGTwPA.js";async function S(i,o=""){var p;const u=await R(B.EAAB),a=await D(`https://graph.facebook.com/v12.0/${i}/tagged?fields=from,id,message,created_time`+(o?`&after=${o}`:"")+`&access_token=${u}`),t=L(a);return console.log(t),((p=t==null?void 0:t.data)==null?void 0:p.map(c=>{var r,x,y,h;return{id:c.id,message:c.message,created_time:c.created_time,from:{id:(r=c.from)==null?void 0:r.id,name:(x=c.from)==null?void 0:x.name},cursor:(h=(y=t==null?void 0:t.paging)==null?void 0:y.cursors)==null?void 0:h.after}}))||[]}async function X(i){const o=".",u=btoa(JSON.stringify({"rp_author:0":JSON.stringify({name:"author",args:i}),"recent_posts:0":JSON.stringify({name:"recent_posts",args:""})})),a=`https://www.facebook.com/search/posts/?q=${encodeURI(o)}&filters=${encodeURI(u)}`;window.open(a,"_blank")}function vn({target:i}){const{ti:o}=O(),{message:u}=F(),[a,t]=w("Tagged."+(i==null?void 0:i.id),[]),[p,c]=w("Tagged.loading."+(i==null?void 0:i.id),!1),[r,x]=w("Tagged.loadMore."+(i==null?void 0:i.id),!1),[y,h]=v.useState(!0);v.useEffect(()=>{N()},[i==null?void 0:i.id]);const b=v.useRef(i==null?void 0:i.id),N=(e=!1)=>{if(!(i!=null&&i.id)||p)return;const n=b.current!==(i==null?void 0:i.id);!e&&a.length&&!n||(b.current=i==null?void 0:i.id,T("Tagged:onClickReload"),c(!0),S(i.id).then(l=>{console.log(l),t(l),h(!0)}).finally(()=>c(!1)))},_=async()=>{var e;!(i!=null&&i.id)||r||await H()&&(T("Tagged:onClickLoadMore"),x(!0),S(i.id,(e=a[a.length-1])==null?void 0:e.cursor).then(n=>{const l=new Set(a.map(d=>d.id)),m=n.filter(d=>!l.has(d.id));m.length?(t(d=>[...d,...m]),h(!0)):(u.info(o({en:"No more data",vi:"Không còn dữ liệu"})),h(!1))}).finally(()=>x(!1)))},A=()=>s.jsxs(k,{children:[s.jsxs(k.Compact,{children:[s.jsx(j,{type:"primary",icon:s.jsx("i",{className:"fa-solid fa-rotate-right"}),loading:p,disabled:r,onClick:()=>N(!0),children:o({en:"Reload",vi:"Tải lại"})}),s.jsx(j,{icon:s.jsx("i",{className:"fa-solid fa-play"}),loading:r,disabled:!y||p,onClick:_,children:o(y?{en:"Load more",vi:"Tải thêm"}:{en:"No more data",vi:"Không còn dữ liệu"})})]}),s.jsx(q,{data:a,options:[{key:"json",label:".json",prepareData:e=>({fileName:(i==null?void 0:i.name)+"_tagged.json",data:JSON.stringify(e,null,4)})},{key:"csv",label:".csv",prepareData:e=>({fileName:(i==null?void 0:i.name)+"_tagged.csv",data:z(e.map(n=>{var l,m;return{...n,from:(l=n.from)==null?void 0:l.id,fromName:(m=n.from)==null?void 0:m.name}}))})}]}),s.jsx(W,{color:"red",children:(a==null?void 0:a.length)+" "+o({en:"Tagged",vi:"Lượt tag"})})]}),M=[{title:"#",key:"index",dataIndex:"index"},{title:o({en:"Owner",vi:"Người tag"}),key:"from",dataIndex:"from",render:(e,n,l)=>{var m,d,f,C,I;return(m=n==null?void 0:n.from)!=null&&m.id?s.jsxs(k,{children:[s.jsx(G,{src:$((d=n==null?void 0:n.from)==null?void 0:d.id),style:{width:45,height:45,borderRadius:5}}),s.jsxs(k,{direction:"vertical",size:0,children:[s.jsx("a",{href:E((f=n==null?void 0:n.from)==null?void 0:f.id),target:"_blank",rel:"noreferrer",children:s.jsx("b",{children:(C=n==null?void 0:n.from)==null?void 0:C.name})}),s.jsx("span",{style:{opacity:.5},children:(I=n==null?void 0:n.from)==null?void 0:I.id})]})]}):o({en:"Anonymous",vi:"Ẩn danh"})},filters:Array.from(new Set(a==null?void 0:a.map(e=>{var n;return(n=e.from)==null?void 0:n.id}))).map(e=>{var l,m;const n=a.filter(d=>{var f;return((f=d.from)==null?void 0:f.id)===e});return{value:e||"",text:(((m=(l=n==null?void 0:n[0])==null?void 0:l.from)==null?void 0:m.name)||o({en:"Anonymous",vi:"Ẩn danh"}))+` (${n==null?void 0:n.length})`,count:n==null?void 0:n.length}}).sort((e,n)=>n.count-e.count),onFilter:(e,n)=>{var l;return((l=n.from)==null?void 0:l.id)==e},width:300},{title:o({en:"Content",vi:"Nội dung"}),key:"message",dataIndex:"message",render:(e,n,l)=>{var m,d,f;return s.jsx("div",{style:{wordBreak:"break-word",maxWidth:400},children:((f=((m=n==null?void 0:n.message)==null?void 0:m.length)>200?((d=n==null?void 0:n.message)==null?void 0:d.substring(0,200))+"...":n==null?void 0:n.message)==null?void 0:f.replace(i==null?void 0:i.name,""))||(i==null?void 0:i.name)})}},{title:o({en:"Created at",vi:"Thời gian"}),key:"created_time",dataIndex:"created_time",render:(e,n,l)=>s.jsxs("span",{children:[U(new Date(e))," - ",J(new Date(e))]})},{title:o({en:"Action",vi:"Hành động"}),key:"action",dataIndex:"action",render:(e,n,l)=>s.jsx(P,{title:o({en:"View post",vi:"Xem bài viết"}),children:s.jsx(j,{target:"_blank",href:E(n==null?void 0:n.id),icon:s.jsx("i",{className:"fa-solid fa-external-link"})})}),width:100}];return s.jsxs("div",{children:[s.jsx(k,{style:{width:"100%",alignItems:"center",justifyContent:"center",marginBottom:10},direction:"vertical",children:s.jsx(K,{count:o({en:"New",vi:"Mới"}),style:{color:"white"},color:"purple",children:s.jsx(j,{icon:s.jsx("i",{className:"fa-solid fa-search"}),onClick:()=>{T("BulkDownloader:Tagged:FindAllPosts"),X((i==null?void 0:i.id)||"")},children:o({en:"Find all posts of ",vi:"Tìm mọi bài viết của "})+(i==null?void 0:i.name)+"?"})})}),s.jsx(V,{data:a.map((e,n)=>({...e,index:n+1})),columns:M,searchable:!0,keyExtractor:e=>e==null?void 0:e.id,size:"small",renderTitle:A})]})}export{vn as default};