import{r as l,aA as x}from"./index-CPSjGcce.js";import{u as Q,K as V,S as X}from"./MyApp-DNu7Y3Mh.js";import{b as Y}from"./index-DGP5jGL8.js";import{F as Z}from"./Table-CeKx4GcQ.js";import{R as I}from"./row-DB63oLFt.js";import{I as ee}from"./index-CpyW8C6c.js";import"./index-BwaE8uIm.js";import"./addEventListener-NIkFtA3h.js";import"./index-CTR9l44t.js";import"./PurePanel-AyE_C0pF.js";import"./SearchOutlined-CLBNNSEp.js";import"./index-BcvsFg5T.js";import"./index-D76swR3K.js";import"./Dropdown-C6lNidxb.js";import"./useBreakpoint-DADK3BoI.js";import"./responsiveObserver-LuibVeVQ.js";import"./Pagination-Cia5aths.js";import"./EyeOutlined-xFRO8GDR.js";const te=l.forwardRef((z,B)=>{const{data:a=[],columns:p=[],size:H="middle",selectable:C=!1,searchable:M=!1,loading:q=!1,pageSize:T=0,keyExtractor:r=(s,n)=>n+"",onSearchRow:b,renderTitle:_,style:O}=z,{ti:i,language:U}=Q(),[h,F]=l.useState(""),[L,$]=l.useState(""),[e,o]=l.useState([]),[m,S]=l.useState(!1),A=Y(F,500),P=l.useRef(!1),k=s=>{$(s),A(s),P.current=!0};l.useImperativeHandle(B,()=>({getDataSelected:()=>e,setDataSelected:s=>{o(s)},hasDataSelected:()=>!!(e!=null&&e.length),setShowSelectedOnly:S,setSearch:k,clearFilter:({search:s=!0,dataSelected:n=!0,showSelectedOnly:t=!0}={})=>{s&&k(""),n&&o([]),t&&S(!1)}}));const y=l.useMemo(()=>{if(!h)return a;const s=new Map(p.map((t,c)=>[t.key,c])),n=a.filter(t=>b?b(h,t):Object.entries(t).some(([c,f],D)=>{var v,R;let g=s.get(c)||-1;return g<0||(v=p[g])!=null&&v.disableSearch?!1:(R=p[g])!=null&&R.onSearch?p[g].onSearch(h,f,t):typeof f=="string"&&V(h,f)})).map((t,c)=>({...t,key:r(t,c)}));if(m&&(e!=null&&e.length)){const t=new Set(e.map(r));return n.filter((c,f)=>t.has(r(c,f)))}return n},[a,h,m,e,p,r,b]);l.useEffect(()=>{if(!(e!=null&&e.length))return;let s=new Set(a.map(r)),n=e.filter((t,c)=>s.has(r(t,c)));(n==null?void 0:n.length)!==(e==null?void 0:e.length)&&o(n)},[a,e]),l.useEffect(()=>{!(e!=null&&e.length)&&m&&S(!1)},[e.length,m]);const E=l.useRef([]),d=l.useRef([]),K=l.useRef(!1);l.useEffect(()=>{!K.current&&(e!=null&&e.length)&&d.current.push(e),K.current=!1,console.log(d.current),E.current=e},[e]);const w=l.useRef(y);l.useEffect(()=>{w.current=y},[y]);const j=(s,n)=>{const t=new Set(a.map(r)),c=new Set(y.map(r)),f=new Set(E.current.map(r)),D=new Set(s),g=new Set([...t].filter(u=>!c.has(u))),v=new Set([...s].filter(u=>!f.has(u))),R=new Set([...f].filter(u=>!D.has(u)&&!g.has(u))),J=[...f,...v].filter(u=>!R.has(u)).map(u=>a.find(N=>r(N)===u)).filter(Boolean);o(J)},W=l.useMemo(()=>{if(!C)return;const s=[{key:"undo",text:i({en:"Undo selected",vi:"Hoàn tác lựa chọn"}),onSelect:()=>{K.current=!0;const n=d.current.pop();console.log(n),o(d.current[d.current.length-1]||[])}},{key:"select_all",text:i({en:"Select all",vi:"Chọn tất cả"}),onSelect:()=>o([...a])},{key:"invert_selection",text:i({en:"Invert selection",vi:"Đảo ngược lựa chọn"}),onSelect:()=>o(a.filter(n=>!e.find(t=>r(t)===r(n))))},{key:"unselect_all",text:i({en:"Unselect all",vi:"Bỏ chọn tất cả"}),onSelect:()=>{S(!1);const n=new Set(a.map(r));o(e.filter(t=>!n.has(r(t))))}},{key:"show_selected_only",text:(m?"✅ ":"❌ ")+i({en:"Show selected only",vi:"Chỉ hiển thị đã chọn"})+" ("+e.length+")",onSelect:()=>{k(""),S(!m)}}].filter(Boolean);return h&&s.push({key:"select_all_insearch",text:i({en:"Select all - search results",vi:"Chọn tất cả - kết quả tìm kiếm"}),onSelect:()=>o([...w.current])},{key:"invert_selection_insearch",text:i({en:"Invert selection - search results",vi:"Đảo ngược lựa chọn - kết quả tìm kiếm"}),onSelect:()=>o(w.current.filter(n=>!e.find(t=>r(t)===r(n))))},{key:"unselect_all_insearch",text:i({en:"Unselect all - search results",vi:"Bỏ chọn tất cả - kết quả tìm kiếm"}),onSelect:()=>{S(!1);const n=new Set(w.current.map(r));o(e.filter(t=>!n.has(r(t))))}}),{selectedRowKeys:e.map(r),onChange:j,selections:s}},[e,m,C,U,h,j]),G=()=>x.jsxs(I,{justify:"space-between",style:{margin:"5px"},children:[x.jsx(I,{align:"middle",children:x.jsx(X,{wrap:!0,children:typeof _=="function"&&_(e)})}),M&&x.jsx(ee.Search,{placeholder:i({en:"Search",vi:"Tìm kiếm"}),value:L,onChange:s=>k(s.target.value),style:{marginRight:16,marginLeft:16,maxWidth:300}})]});return x.jsx(Z,{sticky:{offsetHeader:0},fixedHeader:!0,size:H,loading:q,scroll:{x:"max-content"},tableLayout:"auto",dataSource:y,columns:p,showSorterTooltip:!1,rowKey:r,onChange:(s,n,t,c)=>{w.current=c.currentDataSource??[]},rowSelection:W,title:G,pagination:T==-1?!1:{position:["bottomCenter"],showSizeChanger:!0,showTotal:(s,n)=>i({en:`Total ${s} items`,vi:`Tổng ${s} dòng`}),size:"default",defaultPageSize:T||10,style:{alignItems:"center"}},style:O})}),xe=te;export{xe as default};
