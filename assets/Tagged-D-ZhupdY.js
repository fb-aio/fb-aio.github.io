import{at as R,aJ as _,r as v,aL as a,b2 as g,b3 as D,aN as y,ba as B}from"./index-C9a7kOyS.js";import{f as F,A as K,z as $,p as z,u as O,e as j,t as E,S as T,g as U,a as I,b as H,T as J,k as P}from"./MyApp-eLgOszab.js";import{M as V}from"./MyTable-Bsc-IDjl.js";import{E as W}from"./ExportButton-nEx9io4V.js";import{I as X}from"./index-B9K95DAg.js";import"./index-1LBg6_PE.js";import"./index-aY3yYPYF.js";import"./index-DZeVjoNF.js";import"./PurePanel-DJB0B014.js";import"./SearchOutlined-DrFTn-jV.js";import"./Table-BigyY78I.js";import"./addEventListener-8k3J7yP4.js";import"./index-C9gPXY7f.js";import"./index-BYTpD0UZ.js";import"./Dropdown-gfxpn-z7.js";import"./useBreakpoint-C1qEcW11.js";import"./Pagination-DPFRT-88.js";import"./index-DmxoYqZk.js";import"./EyeOutlined-B_Sf26ve.js";import"./row-C9GAN_vR.js";import"./file-download-DAQ-WD33.js";async function A(n,o=""){var p;const k=await F(K.EAAB),l=await R(`https://graph.facebook.com/v12.0/${n}/tagged?fields=from,id,message,created_time`+(o?`&after=${o}`:"")+`&access_token=${k}`);$(l);const t=z(l);return console.log(t),((p=t==null?void 0:t.data)==null?void 0:p.map(f=>{var u,x,r,h;return{id:f.id,message:f.message,created_time:f.created_time,from:{id:(u=f.from)==null?void 0:u.id,name:(x=f.from)==null?void 0:x.name},cursor:(h=(r=t==null?void 0:t.paging)==null?void 0:r.cursors)==null?void 0:h.after}}))||[]}function re({target:n}){const{ti:o}=_(),{message:k}=O(),[l,t]=j("Tagged."+(n==null?void 0:n.id),[]),[p,f]=j("Tagged.loading."+(n==null?void 0:n.id),!1),[u,x]=j("Tagged.loadMore."+(n==null?void 0:n.id),!1),[r,h]=v.useState(!0);v.useEffect(()=>{w()},[n==null?void 0:n.id]);const b=v.useRef(n==null?void 0:n.id),w=(i=!1)=>{if(!(n!=null&&n.id)||p)return;const e=b.current!==(n==null?void 0:n.id);!i&&l.length&&!e||(b.current=n==null?void 0:n.id,E("Tagged:onClickReload"),f(!0),A(n.id).then(s=>{s!=null&&s.length||k.info(o({en:"No data: Tagged",vi:"Không có dữ liệu: Lượt tag"})),console.log(s),t(s),h(!0)}).finally(()=>{f(!1)}))},S=async()=>{var i;!(n!=null&&n.id)||u||await P()&&(E("Tagged:onClickLoadMore"),x(!0),A(n.id,(i=l[l.length-1])==null?void 0:i.cursor).then(e=>{const s=new Set(l.map(d=>d.id)),m=e.filter(d=>!s.has(d.id));m.length?(t(d=>[...d,...m]),h(!0)):(k.info(o({en:"No more data",vi:"Không còn dữ liệu"})),h(!1))}).finally(()=>x(!1)))},L=()=>a.jsxs(T,{children:[a.jsxs(T.Compact,{children:[a.jsx(y,{type:"primary",icon:a.jsx("i",{className:"fa-solid fa-rotate-right"}),loading:p,disabled:u,onClick:()=>w(!0),children:o({en:"Reload",vi:"Tải lại"})}),a.jsx(y,{icon:a.jsx("i",{className:"fa-solid fa-play"}),loading:u,disabled:!r||p,onClick:S,children:o(r?{en:"Load more",vi:"Tải thêm"}:{en:"No more data",vi:"Không còn dữ liệu"})})]}),a.jsx(W,{data:l,options:[{key:"json",label:".json",prepareData:i=>({fileName:(n==null?void 0:n.name)+"_tagged.json",data:JSON.stringify(i,null,4)})},{key:"csv",label:".csv",prepareData:i=>({fileName:(n==null?void 0:n.name)+"_tagged.csv",data:B(i.map(e=>{var s,m;return{...e,from:(s=e.from)==null?void 0:s.id,fromName:(m=e.from)==null?void 0:m.name}}))})}]}),a.jsx(J,{color:"red",children:(l==null?void 0:l.length)+" "+o({en:"Tagged",vi:"Lượt tag"})})]}),M=[{title:"#",key:"index",dataIndex:"index"},{title:o({en:"Owner",vi:"Người tag"}),key:"from",dataIndex:"from",render:(i,e,s)=>{var m,d,c,N,C;return(m=e==null?void 0:e.from)!=null&&m.id?a.jsxs(T,{children:[a.jsx(X,{src:U((d=e==null?void 0:e.from)==null?void 0:d.id),style:{width:45,height:45,borderRadius:5}}),a.jsxs(T,{direction:"vertical",size:0,children:[a.jsx("a",{href:I((c=e==null?void 0:e.from)==null?void 0:c.id),target:"_blank",rel:"noreferrer",children:a.jsx("b",{children:(N=e==null?void 0:e.from)==null?void 0:N.name})}),a.jsx("span",{style:{opacity:.5},children:(C=e==null?void 0:e.from)==null?void 0:C.id})]})]}):o({en:"Anonymous",vi:"Ẩn danh"})},filters:Array.from(new Set(l==null?void 0:l.map(i=>{var e;return(e=i.from)==null?void 0:e.id}))).map(i=>{var s,m;const e=l.filter(d=>{var c;return((c=d.from)==null?void 0:c.id)===i});return{value:i||"",text:(((m=(s=e==null?void 0:e[0])==null?void 0:s.from)==null?void 0:m.name)||o({en:"Anonymous",vi:"Ẩn danh"}))+` (${e==null?void 0:e.length})`,count:e==null?void 0:e.length}}).sort((i,e)=>e.count-i.count),onFilter:(i,e)=>{var s;return((s=e.from)==null?void 0:s.id)==i},width:300},{title:o({en:"Content",vi:"Nội dung"}),key:"message",dataIndex:"message",render:(i,e,s)=>{var m,d,c;return a.jsx("div",{style:{wordBreak:"break-word",maxWidth:400},children:((c=((m=e==null?void 0:e.message)==null?void 0:m.length)>200?((d=e==null?void 0:e.message)==null?void 0:d.substring(0,200))+"...":e==null?void 0:e.message)==null?void 0:c.replace(n==null?void 0:n.name,""))||(n==null?void 0:n.name)})}},{title:o({en:"Created at",vi:"Thời gian"}),key:"created_time",dataIndex:"created_time",render:(i,e,s)=>a.jsxs("span",{children:[g(new Date(i).getTime())," - ",D(new Date(i))]})},{title:o({en:"Action",vi:"Hành động"}),key:"action",dataIndex:"action",render:(i,e,s)=>a.jsx(H,{title:o({en:"View post",vi:"Xem bài viết"}),children:a.jsx(y,{target:"_blank",href:I(e==null?void 0:e.id),icon:a.jsx("i",{className:"fa-solid fa-external-link"})})}),width:100}];return a.jsx(V,{data:l.map((i,e)=>({...i,index:e+1})),columns:M,searchable:!0,keyExtractor:i=>i==null?void 0:i.id,size:"small",renderTitle:L})}export{re as default};
