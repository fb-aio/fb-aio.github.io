import{r as j,av as s,aw as v}from"./index-B88tsk0R.js";import{$ as R,a0 as B,D as O,u as D,c as L,d as w,t as T,b as k,h as $,g as E,a1 as F,f as J,T as U,B as P,o as K,i as z}from"./MyApp-DI1XeIZp.js";import H from"./MyTable-DMACivQ7.js";import{E as V}from"./ExportButton-DhQed_04.js";import{I as g}from"./index-CtCJFcw8.js";import{T as q}from"./index-xS_F66gl.js";import"./index-wVivApnd.js";import"./Table-DjPAUqLe.js";import"./index-17IR7T4m.js";import"./addEventListener-aHVbHnX0.js";import"./index-T51wEBEN.js";import"./PurePanel-0wuTm8iK.js";import"./SearchOutlined-Cn4NUZKU.js";import"./index-D3s2Fgr7.js";import"./index-BO2oG2q3.js";import"./index-D5ELwBAi.js";import"./Dropdown-Dd6KSfBF.js";import"./index-Su1mXUrw.js";import"./useBreakpoint-B4R-wCcy.js";import"./responsiveObserver-BKcde18k.js";import"./Pagination-zv-_GVKc.js";import"./index-BQTwZgs0.js";import"./EyeOutlined-BvCy7MK_.js";import"./row-9QtEPyew.js";import"./file-download-DPMS8kUO.js";async function S(n,o=""){var p;const u=await R(B.EAAB),a=await O(`https://graph.facebook.com/v12.0/${n}/tagged?fields=from,id,message,created_time`+(o?`&after=${o}`:"")+`&access_token=${u}`),t=JSON.parse(a);return console.log(t),((p=t==null?void 0:t.data)==null?void 0:p.map(c=>{var r,x,y,h;return{id:c.id,message:c.message,created_time:c.created_time,from:{id:(r=c.from)==null?void 0:r.id,name:(x=c.from)==null?void 0:x.name},cursor:(h=(y=t==null?void 0:t.paging)==null?void 0:y.cursors)==null?void 0:h.after}}))||[]}async function W(n){const o=".",u=btoa(JSON.stringify({"rp_author:0":JSON.stringify({name:"author",args:n}),"recent_posts:0":JSON.stringify({name:"recent_posts",args:""})})),a=`https://www.facebook.com/search/posts/?q=${encodeURI(o)}&filters=${encodeURI(u)}`;window.open(a,"_blank")}function ji({target:n}){const{ti:o}=D(),{message:u}=L(),[a,t]=w("Tagged."+(n==null?void 0:n.id),[]),[p,c]=w("Tagged.loading."+(n==null?void 0:n.id),!1),[r,x]=w("Tagged.loadMore."+(n==null?void 0:n.id),!1),[y,h]=j.useState(!0);j.useEffect(()=>{N()},[n==null?void 0:n.id]);const b=j.useRef(n==null?void 0:n.id),N=(e=!1)=>{if(!(n!=null&&n.id)||p)return;const i=b.current!==(n==null?void 0:n.id);!e&&a.length&&!i||(b.current=n==null?void 0:n.id,T("Tagged:onClickReload"),c(!0),S(n.id).then(l=>{console.log(l),t(l),h(!0)}).finally(()=>c(!1)))},_=async()=>{var e;!(n!=null&&n.id)||r||await z()&&(T("Tagged:onClickLoadMore"),x(!0),S(n.id,(e=a[a.length-1])==null?void 0:e.cursor).then(i=>{const l=new Set(a.map(d=>d.id)),m=i.filter(d=>!l.has(d.id));m.length?(t(d=>[...d,...m]),h(!0)):(u.info(o({en:"No more data",vi:"Không còn dữ liệu"})),h(!1))}).finally(()=>x(!1)))},A=()=>s.jsxs(k,{children:[s.jsxs(k.Compact,{children:[s.jsx(v,{type:"primary",icon:s.jsx("i",{className:"fa-solid fa-rotate-right"}),loading:p,disabled:r,onClick:()=>N(!0),children:o({en:"Reload",vi:"Tải lại"})}),s.jsx(v,{icon:s.jsx("i",{className:"fa-solid fa-play"}),loading:r,disabled:!y||p,onClick:_,children:o(y?{en:"Load more",vi:"Tải thêm"}:{en:"No more data",vi:"Không còn dữ liệu"})})]}),s.jsx(V,{data:a,options:[{key:"json",label:".json",prepareData:e=>({fileName:(n==null?void 0:n.name)+"_tagged.json",data:JSON.stringify(e,null,4)})},{key:"csv",label:".csv",prepareData:e=>({fileName:(n==null?void 0:n.name)+"_tagged.csv",data:K(e.map(i=>{var l,m;return{...i,from:(l=i.from)==null?void 0:l.id,fromName:(m=i.from)==null?void 0:m.name}}))})}]}),s.jsx(q,{color:"red",children:(a==null?void 0:a.length)+" "+o({en:"Tagged",vi:"Lượt tag"})})]}),M=[{title:"#",key:"index",dataIndex:"index"},{title:o({en:"Owner",vi:"Người tag"}),key:"from",dataIndex:"from",render:(e,i,l)=>{var m,d,f,C,I;return(m=i==null?void 0:i.from)!=null&&m.id?s.jsxs(k,{children:[s.jsx(g,{src:$((d=i==null?void 0:i.from)==null?void 0:d.id),style:{width:45,height:45,borderRadius:5}}),s.jsxs(k,{direction:"vertical",size:0,children:[s.jsx("a",{href:E((f=i==null?void 0:i.from)==null?void 0:f.id),target:"_blank",rel:"noreferrer",children:s.jsx("b",{children:(C=i==null?void 0:i.from)==null?void 0:C.name})}),s.jsx("span",{style:{opacity:.5},children:(I=i==null?void 0:i.from)==null?void 0:I.id})]})]}):o({en:"Anonymous",vi:"Ẩn danh"})},filters:Array.from(new Set(a==null?void 0:a.map(e=>{var i;return(i=e.from)==null?void 0:i.id}))).map(e=>{var l,m;const i=a.filter(d=>{var f;return((f=d.from)==null?void 0:f.id)===e});return{value:e||"",text:(((m=(l=i==null?void 0:i[0])==null?void 0:l.from)==null?void 0:m.name)||o({en:"Anonymous",vi:"Ẩn danh"}))+` (${i==null?void 0:i.length})`,count:i==null?void 0:i.length}}).sort((e,i)=>i.count-e.count),onFilter:(e,i)=>{var l;return((l=i.from)==null?void 0:l.id)==e},width:300},{title:o({en:"Content",vi:"Nội dung"}),key:"message",dataIndex:"message",render:(e,i,l)=>{var m,d,f;return s.jsx("div",{style:{wordBreak:"break-word",maxWidth:400},children:((f=((m=i==null?void 0:i.message)==null?void 0:m.length)>200?((d=i==null?void 0:i.message)==null?void 0:d.substring(0,200))+"...":i==null?void 0:i.message)==null?void 0:f.replace(n==null?void 0:n.name,""))||(n==null?void 0:n.name)})}},{title:o({en:"Created at",vi:"Thời gian"}),key:"created_time",dataIndex:"created_time",render:(e,i,l)=>s.jsxs("span",{children:[F(new Date(e))," - ",J(new Date(e))]})},{title:o({en:"Action",vi:"Hành động"}),key:"action",dataIndex:"action",render:(e,i,l)=>s.jsx(U,{title:o({en:"View post",vi:"Xem bài viết"}),children:s.jsx(v,{target:"_blank",href:E(i==null?void 0:i.id),icon:s.jsx("i",{className:"fa-solid fa-external-link"})})}),width:100}];return s.jsxs("div",{children:[s.jsx(k,{style:{width:"100%",alignItems:"center",justifyContent:"center",marginBottom:10},direction:"vertical",children:s.jsx(P,{count:o({en:"New",vi:"Mới"}),style:{color:"white"},color:"purple",children:s.jsx(v,{icon:s.jsx("i",{className:"fa-solid fa-search"}),onClick:()=>{T("BulkDownloader:Tagged:FindAllPosts"),W((n==null?void 0:n.id)||"")},children:o({en:"Find all posts of ",vi:"Tìm mọi bài viết của "})+(n==null?void 0:n.name)+"?"})})}),s.jsx(H,{data:a.map((e,i)=>({...e,index:i+1})),columns:M,searchable:!0,keyExtractor:e=>e==null?void 0:e.id,size:"small",renderTitle:A})]})}export{ji as default};
