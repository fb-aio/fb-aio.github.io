import{aF as L,aU as R,r as k,aW as s,a_ as v,bd as F,be as B,bl as D}from"./index-C5YWxV9K.js";import{f as K,A as U,z as $,p as z,u as O,e as T,t as I,S as j,I as H,g as P,a as A,b as V,l as W,T as J}from"./MyApp-Ct___eEr.js";import X from"./MyTable-D1xLJpO0.js";import{E as Y}from"./ExportButton-CVDwxnw2.js";import"./index-B89EIDgf.js";import"./index-DgzD-WDw.js";import"./TextArea-Gh7v8m_G.js";import"./index-BlOtHGr6.js";import"./DownOutlined-qmMzTFXy.js";import"./Table-CvbVNt94.js";import"./index-B0cdpGh8.js";import"./PurePanel-CDyma__L.js";import"./move-qwd2O5b7.js";import"./SearchOutlined-BZYjbz-k.js";import"./index-Cjh_pMrK.js";import"./index-fg40ZRcV.js";import"./Dropdown-uaA3vV-D.js";import"./useBreakpoint-PCEp_VLU.js";import"./useForceUpdate-Bs9ixSSa.js";import"./Pagination-B6wGdAWy.js";import"./index-CWcF8dW8.js";import"./row-Cxq1EIs_.js";import"./file-download-BOVugqjO.js";async function S(n,o=""){var p;const y=await K(U.EAAB),l=await L("https://graph.facebook.com/v12.0/".concat(n,"/tagged?fields=from,id,message,created_time")+(o?"&after=".concat(o):"")+"&access_token=".concat(y));$(l);const t=z(l);return console.log(t),((p=t==null?void 0:t.data)==null?void 0:p.map(f=>{var u,r,x,h;return{id:f.id,message:f.message,created_time:f.created_time,from:{id:(u=f.from)==null?void 0:u.id,name:(r=f.from)==null?void 0:r.name},cursor:(h=(x=t==null?void 0:t.paging)==null?void 0:x.cursors)==null?void 0:h.after}}))||[]}function ve({target:n}){const{ti:o}=R(),{message:y}=O(),[l,t]=T("Tagged."+(n==null?void 0:n.id),[]),[p,f]=T("Tagged.loading."+(n==null?void 0:n.id),!1),[u,r]=T("Tagged.loadMore."+(n==null?void 0:n.id),!1),[x,h]=k.useState(!0);k.useEffect(()=>{w()},[n==null?void 0:n.id]);const b=k.useRef(n==null?void 0:n.id),w=(i=!1)=>{if(!(n!=null&&n.id)||p)return;const e=b.current!==(n==null?void 0:n.id);!i&&l.length&&!e||(b.current=n==null?void 0:n.id,I("Tagged:onClickReload"),f(!0),S(n.id).then(a=>{a!=null&&a.length||y.info(o({en:"No data: Tagged",vi:"Không có dữ liệu: Lượt tag"})),console.log(a),t(a),h(!0)}).finally(()=>{f(!1)}))},M=async()=>{var i;!(n!=null&&n.id)||u||await W()&&(I("Tagged:onClickLoadMore"),r(!0),S(n.id,(i=l[l.length-1])==null?void 0:i.cursor).then(e=>{const a=new Set(l.map(d=>d.id)),m=e.filter(d=>!a.has(d.id));m.length?(t(d=>[...d,...m]),h(!0)):(y.info(o({en:"No more data",vi:"Không còn dữ liệu"})),h(!1))}).finally(()=>r(!1)))},N=s.jsx(v,{icon:s.jsx("i",{className:"fa-solid fa-play"}),loading:u,disabled:!x||p,onClick:M,children:o(x?{en:"Load more",vi:"Tải thêm"}:{en:"No more data",vi:"Không còn dữ liệu"})}),_=()=>s.jsxs(s.Fragment,{children:[s.jsxs(j.Compact,{children:[s.jsx(v,{type:"primary",icon:s.jsx("i",{className:"fa-solid fa-rotate-right"}),loading:p,disabled:u,onClick:()=>w(!0),children:o({en:"Reload",vi:"Tải lại"})}),N]}),s.jsx(Y,{data:l,options:[{key:"json",label:".json",prepareData:i=>({fileName:(n==null?void 0:n.name)+"_tagged.json",data:JSON.stringify(i,null,4)})},{key:"csv",label:".csv",prepareData:i=>({fileName:(n==null?void 0:n.name)+"_tagged.csv",data:D(i.map(e=>{var a,m;return{...e,from:(a=e.from)==null?void 0:a.id,fromName:(m=e.from)==null?void 0:m.name}}))})}]}),s.jsx(J,{color:"red",children:(l==null?void 0:l.length)+" "+o({en:"Tagged",vi:"Lượt tag"})})]}),g=[{title:"#",key:"index",dataIndex:"index"},{title:o({en:"Owner",vi:"Người tag"}),key:"from",dataIndex:"from",render:(i,e,a)=>{var m,d,c,C,E;return(m=e==null?void 0:e.from)!=null&&m.id?s.jsxs(j,{children:[s.jsx(H,{src:P((d=e==null?void 0:e.from)==null?void 0:d.id),style:{width:45,height:45,borderRadius:5}}),s.jsxs(j,{direction:"vertical",size:0,children:[s.jsx("a",{href:A((c=e==null?void 0:e.from)==null?void 0:c.id),target:"_blank",rel:"noreferrer",children:s.jsx("b",{children:(C=e==null?void 0:e.from)==null?void 0:C.name})}),s.jsx("span",{style:{opacity:.5},children:(E=e==null?void 0:e.from)==null?void 0:E.id})]})]}):o({en:"Anonymous",vi:"Ẩn danh"})},filters:Array.from(new Set(l==null?void 0:l.map(i=>{var e;return(e=i.from)==null?void 0:e.id}))).map(i=>{var a,m;const e=l.filter(d=>{var c;return((c=d.from)==null?void 0:c.id)===i});return{value:i||"",text:(((m=(a=e==null?void 0:e[0])==null?void 0:a.from)==null?void 0:m.name)||o({en:"Anonymous",vi:"Ẩn danh"}))+" (".concat(e==null?void 0:e.length,")"),count:e==null?void 0:e.length}}).sort((i,e)=>e.count-i.count),onFilter:(i,e)=>{var a;return((a=e.from)==null?void 0:a.id)==i},width:300},{title:o({en:"Content",vi:"Nội dung"}),key:"message",dataIndex:"message",render:(i,e,a)=>{var m,d,c;return s.jsx("div",{style:{wordBreak:"break-word",maxWidth:400},children:((c=((m=e==null?void 0:e.message)==null?void 0:m.length)>200?((d=e==null?void 0:e.message)==null?void 0:d.substring(0,200))+"...":e==null?void 0:e.message)==null?void 0:c.replace(n==null?void 0:n.name,""))||(n==null?void 0:n.name)})}},{title:o({en:"Created at",vi:"Thời gian"}),key:"created_time",dataIndex:"created_time",render:(i,e,a)=>s.jsxs("span",{children:[F(new Date(i).getTime())," - ",B(new Date(i))]})},{title:o({en:"Action",vi:"Hành động"}),key:"action",dataIndex:"action",render:(i,e,a)=>s.jsx(V,{title:o({en:"View post",vi:"Xem bài viết"}),children:s.jsx(v,{target:"_blank",href:A(e==null?void 0:e.id),icon:s.jsx("i",{className:"fa-solid fa-external-link"})})}),width:100}];return s.jsx(X,{data:l.map((i,e)=>({...i,index:e+1})),columns:g,searchable:!0,keyExtractor:i=>i==null?void 0:i.id,size:"small",renderTitle:_,footer:s.jsx("div",{style:{width:"100%",display:"flex",justifyContent:"center"},children:N})})}export{ve as default};
