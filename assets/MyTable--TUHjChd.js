import{r as a,ap as p}from"./index-C9_rgvyn.js";import{u as F,E as H,a as L}from"./MyApp-B9X4r0Ho.js";import{F as $}from"./Table-rYDlBfKl.js";import{R as j}from"./row-BhII2r71.js";import{I as q}from"./index-DHkNXBX0.js";import"./TextArea-BpUS54Nr.js";import"./addEventListener-D-HlkRgt.js";import"./index-CRhRET-T.js";import"./PurePanel-CirxCNrT.js";import"./index-BmArwcYo.js";import"./index-Dy9Krycy.js";import"./index-DI40Hj90.js";import"./Dropdown-8r3ogry8.js";import"./index-BwTp4Gxd.js";import"./useBreakpoint-f2nhRaWF.js";import"./responsiveObserver-HtTIRlrG.js";import"./Pagination-SkE80AQ-.js";const B=a.forwardRef((C,E)=>{const{data:g=[],columns:c=[],size:D="middle",selectable:w=!1,searchable:I=!1,loading:z=!1,pageSize:v=0,keyExtractor:o=(n,t)=>t+"",onSearchRow:b,renderTitle:k,style:M}=C,{ti:l}=F(),[u,S]=a.useState(""),[e,i]=a.useState([]),[h,y]=a.useState(!1);a.useImperativeHandle(E,()=>({getDataSelected:()=>e,setDataSelected:n=>{i(n)},hasDataSelected:()=>!!(e!=null&&e.length),setShowSelectedOnly:y,setSearch:S,clearFilter:({search:n=!0,dataSelected:t=!0,showSelectedOnly:r=!0}={})=>{n&&S(""),t&&i([]),r&&y(!1)}}));const d=a.useMemo(()=>{const n=new Map(c.map((r,s)=>[r.key,s])),t=g.filter(r=>b?b(u,r):Object.entries(r).some(([s,m],P)=>{var T,R;let x=n.get(s)||-1;return x<0||(T=c[x])!=null&&T.disableSearch?!1:(R=c[x])!=null&&R.onSearch?c[x].onSearch(u,m,r):typeof m=="string"&&H(u,m)})).map((r,s)=>({...r,key:o(r,s)}));if(h&&(e!=null&&e.length)){const r=new Set(e.map(o));return t.filter((s,m)=>r.has(o(s,m)))}return t},[g,u,h,e]);a.useEffect(()=>{if(!(e!=null&&e.length))return;let n=new Set(g.map(o)),t=e.filter((r,s)=>n.has(o(r,s)));(t==null?void 0:t.length)!==(e==null?void 0:e.length)&&i(t)},[g,e]);const f=a.useRef(d);a.useEffect(()=>{f.current=d},[d]);const _=(n,t)=>{i(t)},K=a.useMemo(()=>{if(!w)return;const n={selectedRowKeys:e.map(o),onChange:_,selections:[{key:"select_all",text:l({en:"Select all",vi:"Chọn tất cả"}),onSelect:()=>i(f.current)},{key:"invert_selection",text:l({en:"Invert selection",vi:"Đảo ngược lựa chọn"}),onSelect:()=>i(f.current.filter(t=>!e.find(r=>o(r)===o(t))))},{key:"unselect_all",text:l({en:"Unselect all",vi:"Bỏ chọn tất cả"}),onSelect:()=>{y(!1),i(e.filter(t=>!f.current.find(r=>o(r)===o(t))))}}]};return(e==null?void 0:e.length)>0&&n.selections.push({key:"show_selected_only",text:l(h?{en:"Show all",vi:"Hiển thị tất cả"}:{en:"Show selected only",vi:"Chỉ hiển thị đã chọn"}),onSelect:()=>{S(""),y(!h)}}),n},[e,h,w]),O=()=>p.jsxs(j,{justify:"space-between",style:{margin:"5px"},children:[p.jsx(j,{align:"middle",children:p.jsx(L,{wrap:!0,children:typeof k=="function"&&k(e)})}),I&&p.jsx(q.Search,{placeholder:l({en:"Search",vi:"Tìm kiếm"}),value:u,onChange:n=>S(n.target.value),style:{marginRight:16,marginLeft:16,maxWidth:300}})]});return p.jsx($,{sticky:!0,fixedHeader:!0,size:D,loading:z,scroll:{x:"max-content"},tableLayout:"auto",dataSource:d,columns:c,showSorterTooltip:!1,onChange:(n,t,r,s)=>{f.current=s.currentDataSource??[]},rowSelection:K,title:O,pagination:v==-1?!1:{position:["bottomCenter"],showSizeChanger:!0,showTotal:(n,t)=>l({en:`Total ${n} items`,vi:`Tổng ${n} dòng`}),size:"default",defaultPageSize:v||10,style:{alignItems:"center"}},style:M})}),ae=B;export{ae as default};
