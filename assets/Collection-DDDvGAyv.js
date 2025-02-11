import{r as y,aK as qe,co as je,aM as t,aQ as L,cp as We,cq as ze,cr as Ge,cs as Je,ct as Xe}from"./index-QAqi_Ijl.js";import{a as Oe,b as Qe}from"./index-B2PaMlR-.js";import{f as Ye}from"./file-download-bcJN7TjE.js";import{u as Ze,e as I,t as be,l as Ue,S as Q,b as ke,a2 as Ke,j as Y,k as Ne}from"./MyApp-CoInHuzW.js";import{D as et}from"./index-E_ys_ULL.js";import{C as tt}from"./index-tcG9XO_j.js";import{I as nt}from"./index-B2U19Tmy.js";import{L as it}from"./index-U-Pus3Jx.js";import{D as ot}from"./index-D0vuwMvF.js";import"./Dropdown-DUw9YpKz.js";import"./PurePanel-DsxX8CtV.js";import"./move-DcX0kV7d.js";import"./TextArea-DV-aWuid.js";import"./EyeOutlined-CK_bL90s.js";import"./SearchOutlined-DAC6U4LA.js";import"./Pagination-DLNcuOWb.js";import"./useBreakpoint-BseDeWb4.js";import"./responsiveObserver-BvRcBCyA.js";import"./index-BE1nHYJU.js";import"./index-B1n44GIS.js";import"./DownOutlined-Cgoipxi3.js";import"./row-CnHDRxH3.js";function st(o,Z,f){const[p,b]=y.useState(!1);function E({key:D}){D===o&&b(!0)}function k({key:D}){D===o&&(b(!1),f==null||f())}return y.useEffect(()=>(window.addEventListener("keydown",E),window.addEventListener("keyup",k),()=>{window.removeEventListener("keydown",E),window.removeEventListener("keyup",k)}),[]),p}var De=(o=>(o.File="file",o.Link="link",o.JSON="json",o))(De||{}),lt=(o=>(o.Grid="grid",o.Vertical="vertical",o))(lt||{});function Pt({collectionName:o,renderItem:Z,fetchNext:f,rowKey:p,downloadItem:b,getItemCursor:E,initialData:k=[],downloadThreads:D=5,downloadOptions:R=[],displayType:Ce="grid",headerButtons:U=()=>null,header:K=()=>null,once:$e=!1,all:Se=!1,stop:Le=!1,showPagination:le=!1,pageSize:Ie=20,searchPlaceholder:Ee=()=>({en:"Search",vi:"Tìm kiếm"}),onSearch:V}){const{ti:e}=qe(),{message:j,notification:q}=Ze(),{isIntersecting:Pe,ref:Me}=Oe(),[W,re]=y.useState(!1),[Be,ae]=I("Collection.".concat(o,".hasMore"),!0),[a,P]=I("Collection.".concat(o,".data"),k),[de,_e]=I("Collection.".concat(o,".pageIndex"),1),[_,Ae]=I("Collection.".concat(o,".search"),""),[l,A]=I("Collection.".concat(o,".selected"),[]),[u,ce]=I("Collection.".concat(o,".selectMode"),!1),[Te,Fe]=I("Collection.".concat(o,".downloaded"),{});st("Shift",void 0,()=>{b&&ce(n=>!n)});const He=y.useMemo(()=>!_||!V?a:a.filter(n=>V(_,n)),[a,_,V]);y.useEffect(()=>{let n=a.length,i=Math.ceil(n/20);de>i&&_e(i)},[a,de]),y.useEffect(()=>{a.length||fe(!1)},[o]),y.useEffect(()=>{k&&P(k)},[k]);const z=(!a.length||Pe||Se)&&Be&&!_&&!Le&&f;Qe(()=>{z&&ee()},1e3),y.useEffect(()=>{z&&ee()},[z]);const fe=(n=!1)=>{n&&be("Collection:reload");const i=n?[]:Ue("Collection.data."+o)||[];P(i),A([]),ee(i)},N=y.useRef(!1),ee=async(n=a)=>{if(N.current)return;N.current=!0,re(!0);const i=await(f==null?void 0:f(n));console.log(o,i);let s=!1;if(i!=null&&i.length){const g=je(n,i,p);if(ae(!$e&&g.length>0),g.length){const w=[...n,...g];P(w),s=!0}}else(i==null?void 0:i.length)===0&&ae(!1);!s&&!n.length&&j.info(e({en:"No data found",vi:"Không có dữ liệu"})+": "+o),N.current=!1,re(!1)},Re=(n,i)=>{const s=l.indexOf(n),g=s>=0,w=Te[p(n)],T={position:"absolute",top:0,left:0,right:0,bottom:0,width:"100%",height:"100%",background:g||w?"#000a":"#0002"};return t.jsxs("div",{style:{position:"relative",flexGrow:1,height:"100%"},children:[i<a.length-1?Z(n,i,P):t.jsx(Q,{ref:Me,children:Z(n,i,P)}),u?t.jsx(L,{type:"primary",style:T,className:"scale-on-hover",onClick:()=>{A(g?C=>C.filter(G=>G!==n):C=>[...C,n])},children:g?t.jsx("i",{className:"fa-solid fa-5x",children:s+1}):w?t.jsx("i",{className:"fa-solid fa-check fa-5x"}):t.jsx("i",{className:"fa-solid fa-square  fa-5x",style:{color:"#fff7"}})}):w?t.jsx("div",{style:{...T,display:"flex",justifyContent:"center",alignItems:"center",pointerEvents:"none",background:"#0006"},children:t.jsx("i",{className:"fa-solid fa-check fa-5x",style:{color:"white"}})}):null]},"select_container_"+p(n))},ue=async({fromCursor:n,downloadType:i,startIndex:s=0}={})=>{var me;if(!b)return;const g=await We();if(!("showDirectoryPicker"in window)&&i==="file")return Y.fire({icon:"error",title:e({en:"Browser not supported",vi:"Trình duyệt không hỗ trợ"}),text:e({en:"File saver API not supported in this browser. Please use newest version of Edge or Chrome. (window.showDirectoryPicker)",vi:"Trình duyệt này không hỗ trợ API lưu file (window.showDirectoryPicker). Vui lòng sử dụng Edge hoặc Chrome bản mới nhất"})});let w;if(!n&&!u&&(w=await Y.fire({icon:"question",title:e({en:"Download",vi:"Tải xuống"})+"?",text:o,showDenyButton:!0,showCancelButton:!1,confirmButtonColor:"#d33",denyButtonColor:"#1668dc",confirmButtonText:e({en:"Download from cursor",vi:"Tiếp tục tải"}),denyButtonText:e({en:"Download all",vi:"Tải từ đầu"})}),w.isDismissed))return;if(w!=null&&w.isConfirmed){const r=await Y.fire({icon:"info",title:e({en:"Download from cursor",vi:"Tiếp tục tải"}),html:'\n                <label for="from-cursor">\n                '.concat(e({en:"Last cursor",vi:"Con trỏ cuối"}),": (").concat(e({en:"leave empty to re-download all",vi:"bỏ trống để tải từ đầu"}),')\n                </label><br/>\n                <input\n                    id="from-cursor"\n                    class="swal2-input"\n                    style="margin: 5px"\n                    value="').concat(n||localStorage.getItem(o+"_fromCursor")||"",'">\n                <br/>\n                <label for="start-index">\n                ').concat(e({en:"Last index",vi:"Vị trí cuối"}),": (").concat(e({en:"for auto generate file name",vi:"để tự động tạo tên file"}),')\n                </label><br/>\n                <input\n                    id="start-index"\n                    class="swal2-input"\n                    style="margin: 5px"\n                    value="').concat(s||localStorage.getItem(o+"_startIndex")||0,'">\n            '),preConfirm:()=>{var h,H;return[(h=document.getElementById("from-cursor"))==null?void 0:h.value,(H=document.getElementById("start-index"))==null?void 0:H.value]},showCancelButton:!0,confirmButtonText:e({en:"Start download",vi:"Bắt đầu tải"})});if(r.isDismissed||r.isDenied)return;n=r.value[0],s=parseInt(((me=r.value)==null?void 0:me[1])||0)}if(!i){const r=await Y.fire({icon:"question",title:e({en:"Data type",vi:"Loại dữ liệu"}),html:'\n                    <label for="download-type">\n                        '.concat(e({en:"Which data type you want to download?",vi:"Bạn muốn tải xuống loại dữ liệu nào?"}),'\n                    </label><br/>\n                    <select\n                        id="download-type"\n                        class="swal2-select"\n                        style="margin: 5px">\n                        ').concat(Object.values(De).map(h=>'<option value="'.concat(h,'">').concat(h,"</option>")).join(""),"\n                    </select>\n                "),preConfirm:()=>{var h;return(h=document.getElementById("download-type"))==null?void 0:h.value},showCancelButton:!0,reverseButtons:!0});if(r.isDismissed)return;i=r.value}if(!await Ne())return;be("downloadCollection:"+i+":"+(u?"selected:".concat(l.length,":"):"all:")+o);let T;if(i==="file"){const r=await window.showDirectoryPicker({mode:"readwrite"});await r.requestPermission({writable:!0}),T=await r.getDirectoryHandle(ze(o),{create:!0})}const C="downloading_collection_"+o,G="stopping_downloading_collection_"+o;j.loading({key:C,content:e({en:"Downloading",vi:"Đang tải"})+"...",duration:0});const $=n?[]:u?[...l]:[...a];let te=0,ne=0,J=0,F=0,v=0,ie=!0,x=!1,ge=!1,we=!0,pe=[],ve=[];for(;!x&&we;){if(!u&&v>=$.length-D){const B=await(f==null?void 0:f($,ie?n:void 0)),d=je($,B,p);!(d!=null&&d.length)&&ie&&n&&q.open({type:"error",message:e({en:"No data at from your cursor",vi:"Không có dữ liệu tại vị trí bạn nhập"})+n+" ("+o+")",description:e({en:"Will download from start",vi:"Sẽ tải từ đầu"}),duration:0}),ie=!1,console.log(d),d!=null&&d.length?$.push(...d):we=!1}const r=$.slice(v,v+D);if(!r.length)break;const h=Math.min(D,r.length),H=Array.from({length:h},()=>"");await Promise.all(r.map(async(B,d)=>{try{let c=await b(B,te);c||(c=[]),Array.isArray(c)||(c=[c]);let xe=!1;for(let m=0;m<c.length&&!x;m++){const{url:S,name:Ve}=c[m];if(!S)continue;const oe=s+v+d+"_"+m+"_"+Ve;if(c[m].name=oe,H[d]="thread "+(d+1)+": item "+(te+d+1)+(c.length>1?" (".concat(m+1,"/").concat(c.length,")"):""),!x&&!ge&&j.loading({key:C,content:t.jsxs("span",{children:["".concat(e({en:"Downloading",vi:"Đang tải"}),"... ").concat(ne),J?t.jsxs(t.Fragment,{children:[e({en:"Failed",vi:"Lỗi"}),": $",J," ",t.jsx("br",{})]}):"",t.jsx("br",{}),o,t.jsx("br",{}),t.jsx("i",{children:e({en:"Click to stop",vi:"Bấm để dừng"})}),t.jsx("br",{}),t.jsx(ot,{}),H.map((O,se)=>t.jsxs("span",{style:{width:"100%",textAlign:"left",display:"block"},children:[O,t.jsx("br",{})]},se)),t.jsx("br",{})]}),duration:0,onClick:()=>{x=!0,j.loading({key:G,content:e({en:"Stopping...",vi:"Đang dừng..."}),duration:0})}}),ve.push(S),i==="file")try{const se=await(await Ge({url:S,checkAbortFn:()=>x})).blob(),ye=await(await T.getFileHandle(oe,{create:!0})).createWritable();await ye.write(se),await ye.close()}catch(O){console.log(O),x||(g?(await Je({url:S,conflictAction:"overwrite",filename:o+"/"+oe}),xe=!0):(J++,q.open({type:"error",message:e({en:"Download failed",vi:"Lỗi tải"}),description:S})))}ne++}xe&&F++,te++,pe.push({data:c,raw:B}),Fe(m=>({...m,[p(B)]:!0})),A(m=>m.filter(S=>p(S)!==p(B)))}catch(c){J++,j.error({content:e({en:"Download failed",vi:"Lỗi tải"})+": "+c.message})}})),x||(v+=r.length)}if(ge=!0,i==="json"||i==="link"){const r=o+(i==="json"?".json":".txt"),h=i==="json"?JSON.stringify(pe,null,4):ve.join("\n");Ye(h,r)}let X="";try{X=(E==null?void 0:E($[v]||$[v-1]))||""}catch(r){console.error(r)}j.destroy(C),j.destroy(G),F>0&&q.open({type:"info",message:e({en:"In Download/ folder",vi:"Trong folder Download/"})+": "+F,description:e({en:"Files that cannot be normal downloaded, will be force download into default Download folder of your browser",vi:"Những file không thể tải bình thường, sẽ được tải vào trong folder Download/ mặc định của trình duyệt"}),duration:0,btn:t.jsx(L,{onClick:Xe,children:e({en:"Show Download/ folder",vi:"Mở folder Download/"})})}),q.open({type:"success",message:e(x?{en:"Download stopped",vi:"Đã dừng tải"}:{en:"Download finished",vi:"Tải xong"}),description:t.jsxs("ul",{children:[t.jsx("li",{children:e({en:"Folder name",vi:"Tên folder"})+": "+o}),t.jsx("li",{children:e({en:"Downloaded",vi:"Đã tải"})+": "+ne}),F>0&&t.jsx("li",{children:e({en:"In Download/ folder",vi:"Trong folder Download/"})+": "+F}),t.jsx("li",{children:e({en:"Last index",vi:"Vị trí cuối"})+": "+(v+s)}),t.jsx("li",{children:e({en:"Last cursor",vi:"Con trỏ cuối"})+": "+X})]}),duration:0,btn:t.jsx(Q,{direction:"horizontal",children:x&&!u?t.jsx(L,{onClick:()=>ue({downloadType:i,fromCursor:X,startIndex:v+s}),children:e({en:"Continue download",vi:"Tiếp tục tải"})}):null})}),localStorage.setItem(o+"_fromCursor",X+""),localStorage.setItem(o+"_startIndex",v+s+"")},he=u&&(l==null?void 0:l.length)>0?l:a,M=u&&l.length?l.length:e({en:"all",vi:"tất cả"});return t.jsxs(Q,{direction:"vertical",align:"center",style:{width:"100%"},children:[K==null?void 0:K(a),t.jsxs(L.Group,{style:{width:"100%",justifyContent:"center"},children:[f&&t.jsx(L,{onClick:()=>fe(!0),icon:t.jsx("i",{className:"fa-solid fa-rotate-right"}),disabled:W,loading:W,children:e(W?{en:"Loading..",vi:"Đang tải.."}:{en:"Refresh",vi:"Làm mới"})}),b&&t.jsx(et,{disabled:!a.length,menu:{items:[{key:"selectMode",label:t.jsxs(Q,{align:"center",children:[t.jsxs(ke,{title:e({en:"Shortcut: press Shift",vi:"Phím tắt: ấn Shift"}),children:[t.jsx(tt,{checked:u})," ",e({en:"Select mode",vi:"Chọn để tải"})]}),(l==null?void 0:l.length)>0&&t.jsx(ke,{title:e({en:"Clear selected",vi:"Xoá lựa chọn"}),children:t.jsx(L,{onClick:n=>{n.preventDefault(),n.stopPropagation(),A([])},icon:t.jsx("i",{className:"fa-solid fa-trash"}),children:l==null?void 0:l.length})})]})},{type:"divider"},{key:"file",label:"📁 "+e({en:"Download ".concat(M," files"),vi:"Tải ".concat(M," files")})},{key:"link",label:"🔗 "+e({en:"Export ".concat(M," links"),vi:"Xuất ".concat(M," links")})},{key:"json",label:"📄 "+e({en:"Export ".concat(M," to .json"),vi:"Xuất ".concat(M," ra .json")})},{type:"divider"},...R.map(({key:n,label:i,labelFn:s})=>({key:n,label:(s==null?void 0:s(he))||i}))],onClick:n=>{var i;if(R.length&&R.some(s=>s.key===n.key)){const s=(i=R.find(g=>g.key===n.key))==null?void 0:i.onClick;s&&s(he,P)}else n.key==="selectMode"?ce(!u):!u||(l==null?void 0:l.length)>0?ue({downloadType:n.key}):j.info(e({en:"Please select media to download",vi:"Vui lòng chọn ảnh/video muốn tải"}))}},children:t.jsx(L,{type:"primary",icon:t.jsx("i",{className:"fa-solid fa-download"}),children:u?l.length?e({en:"Download",vi:"Tải xuống"})+" (".concat(l.length,")"):e({en:"Select to download...",vi:"Chọn để tải..."}):e({en:"Download all",vi:"Tải xuống tất cả"})})}),U==null?void 0:U(a,W)]}),V&&t.jsx(nt.Search,{value:_,onChange:n=>Ae(n.target.value+""),placeholder:e(Ee(a)),allowClear:!0,style:{minWidth:300}}),t.jsx(it,{grid:{gutter:10,column:Ce==="vertical"?1:void 0},pagination:le?{showTotal:(n,i)=>e({en:"Showing ".concat(i[0],"-").concat(i[1]," / Total ").concat(n),vi:"Hiển thị ".concat(i[0],"-").concat(i[1]," / Tổng ").concat(n)}),defaultPageSize:Ie,showSizeChanger:!0,position:"bottom",align:"center"}:!1,dataSource:He,renderItem:Re,rowKey:p,loadMore:z&&!le?t.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"start",height:500},children:t.jsx(Ke,{tip:e({en:"Loading",vi:"Đang tải"}),children:t.jsx("div",{style:{padding:50,background:"rgba(0, 0, 0, 0.05)",borderRadius:4}})})}):null})]})}export{lt as DisplayType,De as DownloadType,Pt as default};
