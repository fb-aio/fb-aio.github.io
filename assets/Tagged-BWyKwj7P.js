import{r as w,av as s,aw as j}from"./index-D0Ydlzc-.js";import{$ as _,a0 as g,D as S,u as $,c as R,d as b,t as C,b as k,h as D,g as N,a1 as L,f as B,T as F,o as M}from"./MyApp-CW3QYDk1.js";import O from"./MyTable-CUPfRAw8.js";import{E as U}from"./ExportButton-BpTy4CxZ.js";import{I as K}from"./index-JSAe8YDT.js";import{T as z}from"./index-CIqn8AC0.js";import"./index-8rm3OhvB.js";import"./Table-COjlNj0c.js";import"./index-B1zhf3ah.js";import"./addEventListener-OOF1rh25.js";import"./index-DjvlCJci.js";import"./PurePanel-4w6LpFhw.js";import"./index-revlIACX.js";import"./index-Dbvb12ax.js";import"./index-DD59vwlW.js";import"./Dropdown-COU9vci1.js";import"./index-ctU_CwK1.js";import"./useBreakpoint-D4skqOcg.js";import"./Pagination-eOURkbK_.js";import"./index-B8Q9l0QZ.js";import"./row-CQBjnVxl.js";import"./file-download-D5IMKFK-.js";async function E(e,a=""){var p;const r=await _(g.EAAB),o=await S(`https://graph.facebook.com/v12.0/${e}/tagged?fields=from,id,message,created_time&access_token=${r}`+(a?`&after=${a}`:"")),l=JSON.parse(o);return console.log(l),((p=l==null?void 0:l.data)==null?void 0:p.map(c=>{var u,h,x,v;return{id:c.id,message:c.message,created_time:c.created_time,from:{id:(u=c.from)==null?void 0:u.id,name:(h=c.from)==null?void 0:h.name},cursor:(v=(x=l==null?void 0:l.paging)==null?void 0:x.cursors)==null?void 0:v.after}}))||[]}async function H(e){const a="a",r=`{"rp_author:0":"{\\"name\\":\\"author\\",\\"args\\":\\"${e}\\"}"}`,o=btoa(r),l=`https://www.facebook.com/search/posts/?q=${encodeURI(a)}&filters=${encodeURI(o)}`;window.open(l,"_blank")}function hn({target:e}){const{ti:a}=$(),{message:r}=R(),[o,l]=b("Tagged."+(e==null?void 0:e.id),[]),[p,c]=b("Tagged.loading."+(e==null?void 0:e.id),!1),[u,h]=w.useState(!0);w.useEffect(()=>{x()},[e==null?void 0:e.id]);const x=()=>{!(e!=null&&e.id)||p||(C("Tagged:onClickReload"),c(!0),E(e.id).then(i=>{console.log(i),l(i),h(!0)}).finally(()=>c(!1)))},v=()=>{var i;!(e!=null&&e.id)||p||(C("Tagged:onClickLoadMore"),c(!0),E(e.id,(i=o[o.length-1])==null?void 0:i.cursor).then(n=>{const m=new Set(o.map(t=>t.id)),d=n.filter(t=>!m.has(t.id));d.length?(l(t=>[...t,...d]),h(!0)):(r.info(a({en:"No more data",vi:"Không có dữ liệu"})),h(!1))}).finally(()=>c(!1)))},I=()=>s.jsxs(k,{children:[s.jsxs(k.Compact,{children:[s.jsx(j,{type:"primary",icon:s.jsx("i",{className:"fa-solid fa-rotate-right"}),loading:p,onClick:x,children:a({en:"Reload",vi:"Tải lại"})}),s.jsx(j,{icon:s.jsx("i",{className:"fa-solid fa-play"}),loading:p,onClick:v,disabled:!u,children:a(u?{en:"Load more",vi:"Tải thêm"}:{en:"No more data",vi:"Không còn dữ liệu"})})]}),s.jsx(U,{data:o,options:[{key:"json",label:".json",prepareData:i=>({fileName:(e==null?void 0:e.name)+"_tagged.json",data:JSON.stringify(i,null,4)})},{key:"csv",label:".csv",prepareData:i=>({fileName:(e==null?void 0:e.name)+"_tagged.csv",data:M(i)})}]}),s.jsx(z,{color:"red",children:(o==null?void 0:o.length)+" "+a({en:"Tagged",vi:"Lượt tag"})})]}),A=[{title:"#",key:"index",dataIndex:"index"},{title:a({en:"Owner",vi:"Người tag"}),key:"from",dataIndex:"from",render:(i,n,m)=>{var d,t,f,y,T;return(d=n==null?void 0:n.from)!=null&&d.id?s.jsxs(k,{children:[s.jsx(K,{src:D((t=n==null?void 0:n.from)==null?void 0:t.id),style:{width:45,height:45,borderRadius:5}}),s.jsxs(k,{direction:"vertical",size:0,children:[s.jsx("a",{href:N((f=n==null?void 0:n.from)==null?void 0:f.id),target:"_blank",rel:"noreferrer",children:s.jsx("b",{children:(y=n==null?void 0:n.from)==null?void 0:y.name})}),s.jsx("span",{style:{opacity:.5},children:(T=n==null?void 0:n.from)==null?void 0:T.id})]})]}):a({en:"Anonymous",vi:"Ẩn danh"})},filters:Array.from(new Set(o==null?void 0:o.map(i=>{var n;return(n=i.from)==null?void 0:n.id}))).map(i=>{var m,d;const n=o.filter(t=>{var f;return((f=t.from)==null?void 0:f.id)===i});return{value:i||"",text:(((d=(m=n==null?void 0:n[0])==null?void 0:m.from)==null?void 0:d.name)||a({en:"Anonymous",vi:"Ẩn danh"}))+` (${n==null?void 0:n.length})`,count:n==null?void 0:n.length}}).sort((i,n)=>n.count-i.count),onFilter:(i,n)=>{var m;return((m=n.from)==null?void 0:m.id)==i},width:300},{title:a({en:"Content",vi:"Nội dung"}),key:"message",dataIndex:"message",render:(i,n,m)=>{var d,t,f;return s.jsx("div",{style:{wordBreak:"break-word",maxWidth:400},children:((f=((d=n==null?void 0:n.message)==null?void 0:d.length)>200?((t=n==null?void 0:n.message)==null?void 0:t.substring(0,200))+"...":n==null?void 0:n.message)==null?void 0:f.replace(e==null?void 0:e.name,""))||(e==null?void 0:e.name)})}},{title:a({en:"Created at",vi:"Thời gian"}),key:"created_time",dataIndex:"created_time",render:(i,n,m)=>s.jsxs("span",{children:[L(new Date(i))," - ",B(new Date(i))]})},{title:a({en:"Action",vi:"Hành động"}),key:"action",dataIndex:"action",render:(i,n,m)=>s.jsx(F,{title:a({en:"View post",vi:"Xem bài viết"}),children:s.jsx(j,{target:"_blank",href:N(n==null?void 0:n.id),icon:s.jsx("i",{className:"fa-solid fa-external-link"})})}),width:100}];return s.jsxs("div",{children:[s.jsx(k,{style:{width:"100%",alignItems:"center",justifyContent:"center",marginBottom:10},direction:"vertical",children:s.jsx(j,{icon:s.jsx("i",{className:"fa-solid fa-search"}),onClick:()=>{H((e==null?void 0:e.id)||"")},children:a({en:"Find all posts of ",vi:"Tìm mọi bài viết của "})+(e==null?void 0:e.name)+"?"})}),s.jsx(O,{data:o.map((i,n)=>({...i,index:n+1})),columns:A,searchable:!0,keyExtractor:i=>i==null?void 0:i.id,size:"small",renderTitle:I})]})}export{hn as default};
