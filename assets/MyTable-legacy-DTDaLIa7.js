System.register(["./index-legacy-DgDxnhpA.js","./index-legacy-DtTRmuRZ.js","./index-legacy-BDlErKet.js","./index-legacy-CCFyNVXu.js","./Table-legacy-CGeldQ1M.js","./row-legacy-vWQqcFVi.js","./MyApp-legacy--44lDAYA.js","./index-legacy-D7Sgl99W.js","./TextArea-legacy-B9cfn5c-.js","./DownOutlined-legacy-Dv1to0sb.js","./List-legacy-DQsyQNx_.js","./index-legacy-B0kgt6UR.js","./index-legacy-B7D85tm3.js","./index-legacy-Daaohuto.js","./index-legacy-DnTQUxLr.js","./Dropdown-legacy-DZYgwR4s.js","./PurePanel-legacy-DCSDv3sl.js","./move-legacy-D4CLyVSa.js","./index-legacy-i3bw2b2W.js","./SearchOutlined-legacy-CuuS7WlB.js","./useBreakpoint-legacy-fAAoUt70.js","./useForceUpdate-legacy-CaDY0ldf.js","./Pagination-legacy-BNXwGNoJ.js"],(function(e,t){"use strict";var n,l,a,r,s,c,i,o,u,h,d,g;return{setters:[e=>{n=e.r,l=e.aU,a=e.bc,r=e.aW,s=e.a_},e=>{c=e.u},e=>{i=e.T},e=>{o=e.T},e=>{u=e.F},e=>{h=e.R},e=>{d=e.S},e=>{g=e.I},null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],execute:function(){e("default",n.forwardRef(((e,t)=>{const{virtual:y=!1,data:f=[],columns:m=[],size:S="middle",selectable:p=!1,searchable:x=!1,loading:j=!1,pageSize:w=0,keyExtractor:v=(e,t)=>t+"",onSearchRow:k,renderTitle:R,style:_,footer:b}=e,{ti:C,language:T}=l(),[B,z]=n.useState(""),[D,F]=n.useState(""),[M,I]=n.useState([]),[O,U]=n.useState(!1),[E,H]=n.useState(!1),K=c(z,500),L=n.useRef(!1),P=e=>{F(e),K(e),L.current=!0};n.useImperativeHandle(t,(()=>({getDataSelected:()=>M,setDataSelected:e=>{I(e)},hasDataSelected:()=>!!M?.length,setShowSelectedOnly:U,setSearch:P,clearFilter:({search:e=!0,dataSelected:t=!0,showSelectedOnly:n=!0}={})=>{e&&P(""),t&&I([]),n&&U(!1)}})));const q=n.useMemo((()=>{const e=new Map(m.map(((e,t)=>[e.key,t]))),t=(B?f.filter((t=>k?k(B,t):Object.entries(t).some((([n,l],r)=>{let s=e.get(n)||-1;return!(s<0)&&!m[s]?.disableSearch&&(m[s]?.onSearch?m[s].onSearch(B,l,t,E):"string"==typeof l&&(E?l?.includes(B):a(B,l)))})))):f).map(((e,t)=>({...e,key:v(e,t)})));if(O&&M?.length){const e=new Set(M.map(v));return t.filter(((t,n)=>e.has(v(t,n))))}return t}),[f,B,E,O,M,m,v,k]),A=n.useMemo((()=>m.find((e=>e.rangeFilter))?m.map((e=>e.rangeFilter?{...e,filterDropdown:({setSelectedKeys:e,selectedKeys:t,confirm:n,clearFilters:l})=>r.jsxs("div",{style:{padding:8},children:[r.jsx(i.Text,{strong:!0,style:{marginBottom:8,display:"block"},children:C({en:"Range filter",vi:"Lọc giá trị"})}),r.jsx(o,{placeholder:C({vi:"Bé nhất",en:"Min"}),value:t[0]?.min??null,onChange:n=>e([{...t[0],min:n}]),style:{marginBottom:8,display:"block",width:"100%"}}),r.jsx(o,{placeholder:C({vi:"Lớn nhất",en:"Max"}),value:t[0]?.max??null,onChange:n=>e([{...t[0],max:n}]),style:{marginBottom:8,display:"block",width:"100%"}}),r.jsx(s,{type:"primary",size:"small",onClick:n,style:{width:90,marginRight:8},children:C({en:"Apply",vi:"Áp dụng"})}),r.jsx(s,{type:"link",size:"small",onClick:l,style:{width:90},children:C({en:"Reset",vi:"Đặt lại"})})]}),onFilter:(t,n)=>{const{min:l,max:a}=t||{},r=e.rangeFilter.getValue(n);return r>=(l??-1/0)&&r<=(a??1/0)},filterIcon:e=>r.jsx("i",{className:"fa fa-filter",style:{color:e?"#1890ff":void 0}})}:e)):m),[m]);n.useEffect((()=>{if(!M?.length)return;let e=new Set(f.map(v)),t=M.filter(((t,n)=>e.has(v(t,n))));t?.length!==M?.length&&I(t)}),[f,M]),n.useEffect((()=>{!M?.length&&O&&U(!1)}),[M.length,O]);const W=n.useRef([]),$=n.useRef([]),V=n.useRef(!1);n.useEffect((()=>{!V.current&&M?.length&&$.current.push(M),V.current=!1,W.current=M}),[M]);const N=n.useRef(q),X=n.useRef(q);n.useEffect((()=>{if(B){const e=new Set(q.map(v)),t=new Set(N.current.map(v)),n=new Set([...e].filter((e=>t.has(e))));X.current=N.current.filter((e=>n.has(v(e))))}else X.current=q,N.current=q}),[q,B]);const Y=(e,t)=>{const n=new Set(f.map(v)),l=new Set(q.map(v)),a=new Set(W.current.map(v)),r=new Set(e),s=new Set([...n].filter((e=>!l.has(e)))),c=new Set([...e].filter((e=>!a.has(e)))),i=new Set([...a].filter((e=>!r.has(e)&&!s.has(e)))),o=[...a,...c].filter((e=>!i.has(e))).map((e=>f.find((t=>v(t)===e)))).filter(Boolean);I(o)},Z=n.useMemo((()=>{if(!p)return;const e=[{key:"undo",text:C({en:"Undo selected",vi:"Hoàn tác lựa chọn"}),onSelect:()=>{V.current=!0;const e=$.current.pop();console.log(e),I($.current[$.current.length-1]||[])}},{key:"select_all",text:C({en:"Select all",vi:"Chọn tất cả"}),onSelect:()=>I([...X.current])},{key:"invert_selection",text:C({en:"Invert selection",vi:"Đảo ngược lựa chọn"}),onSelect:()=>I(X.current.filter((e=>!M.find((t=>v(t)===v(e))))))},{key:"unselect_all",text:C({en:"Unselect all",vi:"Bỏ chọn tất cả"}),onSelect:()=>{U(!1);const e=new Set(X.current.map(v));I(M.filter((t=>!e.has(v(t)))))}},{key:"show_selected_only",text:(O?"✅ ":"❌ ")+C({en:"Show selected only",vi:"Chỉ hiển thị đã chọn"})+" ("+M.length+")",onSelect:()=>{P(""),U(!O)}}].filter(Boolean);return B&&e.push({key:"select_all_insearch",text:C({en:"Select all - search results",vi:"Chọn tất cả - kết quả tìm kiếm"}),onSelect:()=>I([...X.current])},{key:"invert_selection_insearch",text:C({en:"Invert selection - search results",vi:"Đảo ngược lựa chọn - kết quả tìm kiếm"}),onSelect:()=>I(X.current.filter((e=>!M.find((t=>v(t)===v(e))))))},{key:"unselect_all_insearch",text:C({en:"Unselect all - search results",vi:"Bỏ chọn tất cả - kết quả tìm kiếm"}),onSelect:()=>{U(!1);const e=new Set(X.current.map(v));I(M.filter((t=>!e.has(v(t)))))}}),{selectedRowKeys:M.map(v),onChange:Y,selections:e}}),[M,O,p,T,B,Y]);return r.jsx(u,{sticky:{offsetHeader:0},fixedHeader:!0,size:S,loading:j,tableLayout:"auto",dataSource:q,columns:A,showSorterTooltip:!1,rowKey:v,onChange:(e,t,n,l)=>{X.current=l.currentDataSource??[],N.current=l.currentDataSource??[]},virtual:y,scroll:y?{x:"max-content",y:500}:{x:"max-content"},rowSelection:Z,title:()=>r.jsxs(h,{justify:"space-between",style:{margin:"5px"},gutter:[8,8],align:"middle",children:["function"==typeof R&&r.jsx(h,{align:"middle",children:r.jsx(d,{wrap:!0,children:R(M)})}),x&&r.jsx(d,{children:r.jsx(g.Search,{placeholder:C({en:"Search",vi:"Tìm kiếm"}),value:D,onChange:e=>P(e.target.value),style:{maxWidth:300}})})]}),pagination:!y&&-1!=w&&{position:["bottomCenter"],showSizeChanger:!0,showTotal:(e,t)=>C({en:`Total ${e} items`,vi:`Tổng ${e} dòng`}),size:"default",defaultPageSize:w||10,style:{alignItems:"center"}},style:_,footer:b?()=>b:void 0})})))}}}));
