import{r as j,aA as s,aB as v}from"./index-D5lrbfGq.js";import{a8 as M,a9 as D,G as L,aa as O,D as F,u as $,c as U,e as T,t as b,S as k,i as J,h as S,ab as P,f as K,T as z,B as H,o as V,b as g,j as q}from"./MyApp-B2cDPPVC.js";import G from"./MyTable-BPSItes4.js";import{E as W}from"./ExportButton-DzWrdmul.js";import{I as X}from"./index-ieiKbi_J.js";import"./index-MBG2ZgWf.js";import"./Table-oZQN3_ak.js";import"./index-DLmnfD3x.js";import"./addEventListener-CSC_DLzP.js";import"./index-DeNSjtoI.js";import"./PurePanel-BYOCgcxL.js";import"./SearchOutlined-rn9UWWMg.js";import"./index-CJnIgwRS.js";import"./index-DUyg8ciO.js";import"./Dropdown-hE1e3b6i.js";import"./useBreakpoint-jot_nTav.js";import"./responsiveObserver-VKse1QGe.js";import"./Pagination-DLnZQEII.js";import"./index-Qdokcq0R.js";import"./EyeOutlined-85kQT3d7.js";import"./row-DZePA1Vc.js";import"./file-download-_Qmun7WT.js";async function A(e,a=""){var r;const h=await M(D.EAAB),o=await L(`https://graph.facebook.com/v12.0/${e}/tagged?fields=from,id,message,created_time`+(a?`&after=${a}`:"")+`&access_token=${h}`);O(o);const t=F(o);return console.log(t),((r=t==null?void 0:t.data)==null?void 0:r.map(c=>{var u,x,y,p;return{id:c.id,message:c.message,created_time:c.created_time,from:{id:(u=c.from)==null?void 0:u.id,name:(x=c.from)==null?void 0:x.name},cursor:(p=(y=t==null?void 0:t.paging)==null?void 0:y.cursors)==null?void 0:p.after}}))||[]}async function Y(e){const a=".",h=btoa(JSON.stringify({"rp_author:0":JSON.stringify({name:"author",args:e}),"recent_posts:0":JSON.stringify({name:"recent_posts",args:""})})),o=`https://www.facebook.com/search/posts/?q=${encodeURI(a)}&filters=${encodeURI(h)}`;window.open(o,"_blank")}function wn({target:e}){const{ti:a}=$(),{message:h}=U(),[o,t]=T("Tagged."+(e==null?void 0:e.id),[]),[r,c]=T("Tagged.loading."+(e==null?void 0:e.id),!1),[u,x]=T("Tagged.loadMore."+(e==null?void 0:e.id),!1),[y,p]=j.useState(!0);j.useEffect(()=>{C()},[e==null?void 0:e.id]);const N=j.useRef(e==null?void 0:e.id),w=j.useRef(!1),C=(i=!1)=>{if(!(e!=null&&e.id)||r||w.current)return;const n=N.current!==(e==null?void 0:e.id);!i&&o.length&&!n||(N.current=e==null?void 0:e.id,b("Tagged:onClickReload"),c(!0),w.current=!0,A(e.id).then(l=>{console.log(l),t(l),p(!0)}).finally(()=>{w.current=!1,c(!1)}))},R=async()=>{var i;!(e!=null&&e.id)||u||await q()&&(b("Tagged:onClickLoadMore"),x(!0),A(e.id,(i=o[o.length-1])==null?void 0:i.cursor).then(n=>{const l=new Set(o.map(d=>d.id)),m=n.filter(d=>!l.has(d.id));m.length?(t(d=>[...d,...m]),p(!0)):(h.info(a({en:"No more data",vi:"Không còn dữ liệu"})),p(!1))}).finally(()=>x(!1)))},_=()=>s.jsxs(k,{children:[s.jsxs(k.Compact,{children:[s.jsx(v,{type:"primary",icon:s.jsx("i",{className:"fa-solid fa-rotate-right"}),loading:r,disabled:u,onClick:()=>C(!0),children:a({en:"Reload",vi:"Tải lại"})}),s.jsx(v,{icon:s.jsx("i",{className:"fa-solid fa-play"}),loading:u,disabled:!y||r,onClick:R,children:a(y?{en:"Load more",vi:"Tải thêm"}:{en:"No more data",vi:"Không còn dữ liệu"})})]}),s.jsx(W,{data:o,options:[{key:"json",label:".json",prepareData:i=>({fileName:(e==null?void 0:e.name)+"_tagged.json",data:JSON.stringify(i,null,4)})},{key:"csv",label:".csv",prepareData:i=>({fileName:(e==null?void 0:e.name)+"_tagged.csv",data:V(i.map(n=>{var l,m;return{...n,from:(l=n.from)==null?void 0:l.id,fromName:(m=n.from)==null?void 0:m.name}}))})}]}),s.jsx(g,{color:"red",children:(o==null?void 0:o.length)+" "+a({en:"Tagged",vi:"Lượt tag"})})]}),B=[{title:"#",key:"index",dataIndex:"index"},{title:a({en:"Owner",vi:"Người tag"}),key:"from",dataIndex:"from",render:(i,n,l)=>{var m,d,f,I,E;return(m=n==null?void 0:n.from)!=null&&m.id?s.jsxs(k,{children:[s.jsx(X,{src:J((d=n==null?void 0:n.from)==null?void 0:d.id),style:{width:45,height:45,borderRadius:5}}),s.jsxs(k,{direction:"vertical",size:0,children:[s.jsx("a",{href:S((f=n==null?void 0:n.from)==null?void 0:f.id),target:"_blank",rel:"noreferrer",children:s.jsx("b",{children:(I=n==null?void 0:n.from)==null?void 0:I.name})}),s.jsx("span",{style:{opacity:.5},children:(E=n==null?void 0:n.from)==null?void 0:E.id})]})]}):a({en:"Anonymous",vi:"Ẩn danh"})},filters:Array.from(new Set(o==null?void 0:o.map(i=>{var n;return(n=i.from)==null?void 0:n.id}))).map(i=>{var l,m;const n=o.filter(d=>{var f;return((f=d.from)==null?void 0:f.id)===i});return{value:i||"",text:(((m=(l=n==null?void 0:n[0])==null?void 0:l.from)==null?void 0:m.name)||a({en:"Anonymous",vi:"Ẩn danh"}))+` (${n==null?void 0:n.length})`,count:n==null?void 0:n.length}}).sort((i,n)=>n.count-i.count),onFilter:(i,n)=>{var l;return((l=n.from)==null?void 0:l.id)==i},width:300},{title:a({en:"Content",vi:"Nội dung"}),key:"message",dataIndex:"message",render:(i,n,l)=>{var m,d,f;return s.jsx("div",{style:{wordBreak:"break-word",maxWidth:400},children:((f=((m=n==null?void 0:n.message)==null?void 0:m.length)>200?((d=n==null?void 0:n.message)==null?void 0:d.substring(0,200))+"...":n==null?void 0:n.message)==null?void 0:f.replace(e==null?void 0:e.name,""))||(e==null?void 0:e.name)})}},{title:a({en:"Created at",vi:"Thời gian"}),key:"created_time",dataIndex:"created_time",render:(i,n,l)=>s.jsxs("span",{children:[P(new Date(i))," - ",K(new Date(i))]})},{title:a({en:"Action",vi:"Hành động"}),key:"action",dataIndex:"action",render:(i,n,l)=>s.jsx(z,{title:a({en:"View post",vi:"Xem bài viết"}),children:s.jsx(v,{target:"_blank",href:S(n==null?void 0:n.id),icon:s.jsx("i",{className:"fa-solid fa-external-link"})})}),width:100}];return s.jsxs("div",{children:[s.jsx(k,{style:{width:"100%",alignItems:"center",justifyContent:"center",marginBottom:10},direction:"vertical",children:s.jsx(H,{count:a({en:"New",vi:"Mới"}),style:{color:"white"},color:"purple",children:s.jsx(v,{icon:s.jsx("i",{className:"fa-solid fa-search"}),onClick:()=>{b("BulkDownloader:Tagged:FindAllPosts"),Y((e==null?void 0:e.id)||"")},children:a({en:"Find all posts of ",vi:"Tìm mọi bài viết của "})+(e==null?void 0:e.name)+"?"})})}),s.jsx(G,{data:o.map((i,n)=>({...i,index:n+1})),columns:B,searchable:!0,keyExtractor:i=>i==null?void 0:i.id,size:"small",renderTitle:_})]})}export{wn as default};
