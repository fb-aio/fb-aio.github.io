import{aU as Oe,r as C,cp as be,aW as e,a_ as P,cq as ze,cr as Je,cs as Ue,ct as Xe,cu as Ge}from"./index-C5YWxV9K.js";import{a as Qe,b as Ye}from"./index-B89EIDgf.js";import{f as Ze}from"./file-download-BOVugqjO.js";import{u as Ke,e as D,t as ke,m as Ne,S as A,T as L,b as et,a6 as tt,j as G,l as nt}from"./MyApp-Ct___eEr.js";import{u as it}from"./react-hotkeys-hook.esm-CDrCX6Xe.js";import{P as ot}from"./index-BS0pS8FV.js";import{C as st}from"./index-Cjh_pMrK.js";import{D as lt}from"./index-fg40ZRcV.js";import{I as rt}from"./index-CWcF8dW8.js";import{L as at}from"./index-camAais2.js";import{D as dt}from"./index-CCWfgY7j.js";import"./Dropdown-uaA3vV-D.js";import"./PurePanel-CDyma__L.js";import"./move-qwd2O5b7.js";import"./TextArea-Gh7v8m_G.js";import"./SearchOutlined-BZYjbz-k.js";import"./Pagination-B6wGdAWy.js";import"./useBreakpoint-PCEp_VLU.js";import"./useForceUpdate-Bs9ixSSa.js";import"./index-DgzD-WDw.js";import"./index-B0cdpGh8.js";import"./DownOutlined-qmMzTFXy.js";import"./row-Cxq1EIs_.js";import"./col-XT3xBtee.js";var Ce=(o=>(o.File="file",o.Link="link",o.JSON="json",o))(Ce||{}),ct=(o=>(o.Grid="grid",o.Vertical="vertical",o))(ct||{});function Ft({collectionName:o,renderItem:le,fetchNext:p,rowKey:w,downloadItem:F,getItemCursor:Q,initialData:R=[],downloadThreads:Y=5,downloadOptions:H=[],displayType:De="grid",headerButtons:Z=()=>null,header:K=()=>null,once:$e=!1,all:Se=!1,stop:Ie=!1,showPagination:re=!1,pageSize:Pe=20,searchPlaceholder:Le=()=>({en:"Search",vi:"Tìm kiếm"}),onSearch:V,centerItems:Te=!0}){const{ti:t}=Oe(),{message:j,notification:W}=Ke(),{isIntersecting:Be,ref:Me}=Qe(),[q,ae]=C.useState(!1),[_e,de]=D("Collection.".concat(o,".hasMore"),!0),[a,$]=D("Collection.".concat(o,".data"),R),[ce,Ee]=D("Collection.".concat(o,".pageIndex"),1),[T,Ae]=D("Collection.".concat(o,".search"),""),[l,B]=D("Collection.".concat(o,".selected"),[]),[f,fe]=D("Collection.".concat(o,".selectMode"),!1),[Fe,Re]=D("Collection.".concat(o,".downloaded"),{});it(["shift"],()=>{F&&fe(n=>!n)});const He=C.useMemo(()=>!T||!V?a:a.filter(n=>V(T,n)),[a,T,V]);C.useEffect(()=>{let n=a.length,i=Math.ceil(n/20);ce>i&&Ee(i)},[a,ce]),C.useEffect(()=>{a.length||ue(!1)},[o]),C.useEffect(()=>{R&&!p&&$(R)},[R,p]);const O=(!a.length||Be||Se)&&_e&&!T&&!Ie&&p;Ye(()=>{O&&ee()},1e3),C.useEffect(()=>{O&&ee()},[O]);const ue=(n=!1)=>{n&&ke("Collection:reload");const i=n?[]:Ne("Collection.data."+o)||[];$(i),B([]),ee(i)},N=C.useRef(!1),ee=async(n=a)=>{if(N.current)return;N.current=!0,ae(!0);const i=await(p==null?void 0:p(n));console.log(o,i);let s=!1;if(i!=null&&i.length){const h=be(n,i,w);if(de(!$e&&h.length>0),h.length){const g=[...n,...h];$(g),s=!0}}else(i==null?void 0:i.length)===0&&de(!1);!s&&!n.length&&j.info(t({en:"No data found",vi:"Không có dữ liệu"})+": "+o),N.current=!1,ae(!1)},Ve=(n,i)=>{const s=l.indexOf(n),h=s>=0,g=Fe[w(n)],M={position:"absolute",top:0,left:0,right:0,bottom:0,width:"100%",height:"100%",background:h||g?"#000a":"#0002"};return e.jsxs("div",{style:{position:"relative",flexGrow:1,height:"100%"},children:[i<a.length-1?le(n,i,$):e.jsx(A,{ref:Me,children:le(n,i,$)}),f?e.jsx(P,{type:"primary",style:M,className:"scale-on-hover",onClick:()=>{B(h?y=>y.filter(z=>z!==n):y=>[...y,n])},children:h?e.jsx("i",{className:"fa-solid fa-5x",children:s+1}):g?e.jsx("i",{className:"fa-solid fa-check fa-5x"}):e.jsx("i",{className:"fa-solid fa-square  fa-5x",style:{color:"#fff7"}})}):g?e.jsx("div",{style:{...M,display:"flex",justifyContent:"center",alignItems:"center",pointerEvents:"none",background:"#0006"},children:e.jsx("i",{className:"fa-solid fa-check fa-5x",style:{color:"white"}})}):null]},"select_container_"+w(n))},he=async({fromCursor:n,downloadType:i,startIndex:s=0}={})=>{var we;if(!F)return;const h=await ze();if(!("showDirectoryPicker"in window)&&i==="file")return G.fire({icon:"error",title:t({en:"Browser not supported",vi:"Trình duyệt không hỗ trợ"}),text:t({en:"File saver API not supported in this browser. Please use newest version of Edge or Chrome. (window.showDirectoryPicker)",vi:"Trình duyệt này không hỗ trợ API lưu file (window.showDirectoryPicker). Vui lòng sử dụng Edge hoặc Chrome bản mới nhất"})});let g;if(!n&&!f&&(g=await G.fire({icon:"question",title:t({en:"Download",vi:"Tải xuống"})+"?",text:o,showDenyButton:!0,showCancelButton:!1,confirmButtonColor:"#d33",denyButtonColor:"#1668dc",confirmButtonText:t({en:"Download from cursor",vi:"Tải từ vị trí"}),denyButtonText:t({en:"Download all",vi:"Tải từ đầu"})}),g.isDismissed))return;if(g!=null&&g.isConfirmed){const r=await G.fire({icon:"info",title:t({en:"Download from cursor",vi:"Tải từ vị trí"}),html:'\n                <label for="from-cursor">\n                '.concat(t({en:"Last cursor",vi:"Con trỏ cuối"}),": (").concat(t({en:"leave empty to re-download all",vi:"bỏ trống để tải từ đầu"}),')\n                </label><br/>\n                <input\n                    id="from-cursor"\n                    class="swal2-input"\n                    style="margin: 5px"\n                    value="').concat(n||localStorage.getItem(o+"_fromCursor")||"",'">\n                <br/>\n                <label for="start-index">\n                ').concat(t({en:"Last index",vi:"Vị trí cuối"}),": (").concat(t({en:"for auto generate file name",vi:"để tự động tạo tên file"}),')\n                </label><br/>\n                <input\n                    id="start-index"\n                    class="swal2-input"\n                    style="margin: 5px"\n                    value="').concat(s||localStorage.getItem(o+"_startIndex")||0,'">\n            '),preConfirm:()=>{var u,E;return[(u=document.getElementById("from-cursor"))==null?void 0:u.value,(E=document.getElementById("start-index"))==null?void 0:E.value]},showCancelButton:!0,confirmButtonText:t({en:"Start download",vi:"Bắt đầu tải"})});if(r.isDismissed||r.isDenied)return;n=r.value[0],s=parseInt(((we=r.value)==null?void 0:we[1])||0)}if(!i){const r=await G.fire({icon:"question",title:t({en:"Data type",vi:"Loại dữ liệu"}),html:'\n                    <label for="download-type">\n                        '.concat(t({en:"Which data type you want to download?",vi:"Bạn muốn tải xuống loại dữ liệu nào?"}),'\n                    </label><br/>\n                    <select\n                        id="download-type"\n                        class="swal2-select"\n                        style="margin: 5px">\n                        ').concat(Object.values(Ce).map(u=>'<option value="'.concat(u,'">').concat(u,"</option>")).join(""),"\n                    </select>\n                "),preConfirm:()=>{var u;return(u=document.getElementById("download-type"))==null?void 0:u.value},showCancelButton:!0,reverseButtons:!0});if(r.isDismissed)return;i=r.value}if(!await nt())return;ke("downloadCollection:"+i+":"+(f?"selected:".concat(l.length,":"):"all:")+o);let M;if(i==="file"){const r=await window.showDirectoryPicker({mode:"readwrite"});await r.requestPermission({writable:!0}),M=await r.getDirectoryHandle(Je(o),{create:!0})}const y="downloading_collection_"+o,z="stopping_downloading_collection_"+o;j.loading({key:y,content:t({en:"Downloading",vi:"Đang tải"})+"...",duration:0});const b=n?[]:f?[...l]:[...a];let te=0,ne=0,J=0,_=0,m=0,ie=!0,v=!1,pe=!1,me=!0,xe=[],ve=[];for(;!v&&me;){if(!f&&m>=b.length-Y){const I=await(p==null?void 0:p(b,ie?n:void 0)),d=be(b,I,w);!(d!=null&&d.length)&&ie&&n&&W.open({type:"error",message:t({en:"No data at from your cursor",vi:"Không có dữ liệu tại vị trí bạn nhập"})+n+" ("+o+")",description:t({en:"Will download from start",vi:"Sẽ tải từ đầu"}),duration:0}),ie=!1,console.log(d),d!=null&&d.length?b.push(...d):me=!1}const r=b.slice(m,m+Y);if(!r.length)break;const u=Math.min(Y,r.length),E=Array.from({length:u},()=>"");await Promise.all(r.map(async(I,d)=>{try{let c=await F(I,te);c||(c=[]),Array.isArray(c)||(c=[c]);let je=!1;for(let x=0;x<c.length&&!v;x++){const{url:k,name:qe}=c[x];if(!k)continue;const oe=s+m+d+"_"+x+"_"+qe;if(c[x].name=oe,E[d]="thread "+(d+1)+": item "+(te+d+1)+(c.length>1?" (".concat(x+1,"/").concat(c.length,")"):""),!v&&!pe&&j.loading({key:y,content:e.jsxs("span",{children:["".concat(t({en:"Downloading",vi:"Đang tải"}),"... ").concat(ne),J?e.jsxs(e.Fragment,{children:[t({en:"Failed",vi:"Lỗi"}),": $",J," ",e.jsx("br",{})]}):"",e.jsx("br",{}),o,e.jsx("br",{}),e.jsx("i",{children:t({en:"Click to stop",vi:"Bấm để dừng"})}),e.jsx("br",{}),e.jsx(dt,{}),E.map((X,se)=>e.jsxs("span",{style:{width:"100%",textAlign:"left",display:"block"},children:[X,e.jsx("br",{})]},se)),e.jsx("br",{})]}),duration:0,onClick:()=>{v=!0,j.loading({key:z,content:t({en:"Stopping...",vi:"Đang dừng..."}),duration:0})}}),ve.push(k),i==="file")try{const se=await(await Ue({url:k,checkAbortFn:()=>v})).blob(),ye=await(await M.getFileHandle(oe,{create:!0})).createWritable();await ye.write(se),await ye.close()}catch(X){console.log(X),v||(h?(await Xe({url:k,conflictAction:"overwrite",filename:o+"/"+oe}),je=!0):(J++,W.open({type:"error",message:t({en:"Download failed",vi:"Lỗi tải"}),description:k})))}ne++}je&&_++,te++,xe.push({data:c,raw:I}),Re(x=>({...x,[w(I)]:!0})),B(x=>x.filter(k=>w(k)!==w(I)))}catch(c){J++,j.error({content:t({en:"Download failed",vi:"Lỗi tải"})+": "+c.message})}})),v||(m+=r.length)}if(pe=!0,i==="json"||i==="link"){const r=o+(i==="json"?".json":".txt"),u=i==="json"?JSON.stringify(xe,null,4):ve.join("\n");Ze(u,r)}let U="";try{U=(Q==null?void 0:Q(b[m]||b[m-1]))||""}catch(r){console.error(r)}j.destroy(y),j.destroy(z),_>0&&W.open({type:"info",message:t({en:"In Download/ folder",vi:"Trong folder Download/"})+": "+_,description:t({en:"Files that cannot be normal downloaded, will be force download into default Download folder of your browser",vi:"Những file không thể tải bình thường, sẽ được tải vào trong folder Download/ mặc định của trình duyệt"}),duration:0,btn:e.jsx(P,{onClick:Ge,children:t({en:"Show Download/ folder",vi:"Mở folder Download/"})})}),W.open({type:"success",message:t(v?{en:"Download stopped",vi:"Đã dừng tải"}:{en:"Download finished",vi:"Tải xong"}),description:e.jsxs("ul",{children:[e.jsx("li",{children:t({en:"Folder name",vi:"Tên folder"})+": "+o}),e.jsx("li",{children:t({en:"Downloaded",vi:"Đã tải"})+": "+ne}),_>0&&e.jsx("li",{children:t({en:"In Download/ folder",vi:"Trong folder Download/"})+": "+_}),e.jsx("li",{children:t({en:"Last index",vi:"Vị trí cuối"})+": "+(m+s)}),e.jsx("li",{children:t({en:"Last cursor",vi:"Con trỏ cuối"})+": "+U})]}),duration:0,btn:e.jsx(A,{direction:"horizontal",children:v&&!f?e.jsx(P,{onClick:()=>he({downloadType:i,fromCursor:U,startIndex:m+s}),children:t({en:"Continue download",vi:"Tiếp tục tải"})}):null})}),localStorage.setItem(o+"_fromCursor",U+""),localStorage.setItem(o+"_startIndex",m+s+"")},ge=f&&(l==null?void 0:l.length)>0?l:a,S=f&&l.length?l.length:t({en:"all",vi:"tất cả"}),We={items:[{key:"selectMode",label:e.jsxs(A,{align:"center",children:[e.jsxs(ot,{placement:"left",title:t({en:"Select mode",vi:"Chọn để tải"}),content:t({en:e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsxs(L,{color:"success",children:[e.jsx("i",{className:"fa-solid fa-check"})," ON"]}),"Download only selected items"]}),e.jsxs("li",{children:[e.jsxs(L,{color:"warning",children:[e.jsx("i",{className:"fa-solid fa-xmark"})," OFF"]}),"Download all items (auto load more)"]}),e.jsxs("li",{children:["Shortcut:"," ",e.jsx(L,{style:{borderRadius:"9999px"},children:"Shift"})]})]}),vi:e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsxs(L,{color:"success",children:[e.jsx("i",{className:"fa-solid fa-check"})," BẬT"]}),"Chỉ tải những mục đã chọn"]}),e.jsxs("li",{children:[e.jsxs(L,{color:"warning",children:[e.jsx("i",{className:"fa-solid fa-xmark"})," TẮT"]}),"Tải tất cả (tự động tải thêm)"]}),e.jsxs("li",{children:["Phím tắt:"," ",e.jsx(L,{style:{borderRadius:"9999px"},children:"Shift"})]})]})}),children:[e.jsx(st,{checked:f})," ",t({en:"Select mode",vi:"Chọn để tải"})]}),(l==null?void 0:l.length)>0&&e.jsx(et,{title:t({en:"Clear selected",vi:"Xoá lựa chọn"}),children:e.jsx(P,{onClick:n=>{n.preventDefault(),n.stopPropagation(),B([])},icon:e.jsx("i",{className:"fa-solid fa-trash"}),children:l==null?void 0:l.length})})]})},{type:"divider"},{key:"file",label:"📁 "+t({en:"Download ".concat(S," files (photo/video)"),vi:"Tải ".concat(S," files (ảnh/video)")})},{key:"link",label:"🔗 "+t({en:"Export ".concat(S," links"),vi:"Xuất ".concat(S," links")})},{key:"json",label:"📄 "+t({en:"Export ".concat(S," to .json"),vi:"Xuất ".concat(S," ra .json")})},{type:"divider"},...H.map(({key:n,label:i,labelFn:s})=>({key:n,label:(s==null?void 0:s(ge))||i}))],onClick:n=>{var i;if(H.length&&H.some(s=>s.key===n.key)){const s=(i=H.find(h=>h.key===n.key))==null?void 0:i.onClick;s&&s(ge,$)}else n.key==="selectMode"?fe(!f):!f||(l==null?void 0:l.length)>0?he({downloadType:n.key}):j.info(t({en:"Please select media to download",vi:"Vui lòng chọn ảnh/video muốn tải"}))}};return e.jsxs(A,{direction:"vertical",align:"center",style:{width:"100%"},className:Te?"collection-center":"",children:[K==null?void 0:K(a),e.jsxs(A.Compact,{style:{justifyContent:"center"},children:[p&&e.jsx(P,{onClick:()=>ue(!0),icon:e.jsx("i",{className:"fa-solid fa-rotate-right"}),disabled:q,loading:q,children:t(q?{en:"Loading..",vi:"Đang tải.."}:{en:"Refresh",vi:"Làm mới"})}),F&&e.jsx(lt,{disabled:!a.length,menu:We,placement:"bottomCenter",children:e.jsx(P,{type:"primary",icon:e.jsx("i",{className:"fa-solid fa-download"}),children:f?l.length?t({en:"Download",vi:"Tải xuống"})+" (".concat(l.length,")"):t({en:"Select to download...",vi:"Chọn để tải..."}):t({en:"Download all",vi:"Tải xuống"})})}),Z==null?void 0:Z(a,q)]}),V&&e.jsx(rt.Search,{value:T,onChange:n=>Ae(n.target.value+""),placeholder:t(Le(a)),allowClear:!0,style:{minWidth:300}}),e.jsx(at,{grid:{gutter:10,column:De==="vertical"?1:void 0},pagination:re?{showTotal:(n,i)=>t({en:"Showing ".concat(i[0],"-").concat(i[1]," / Total ").concat(n),vi:"Hiển thị ".concat(i[0],"-").concat(i[1]," / Tổng ").concat(n)}),defaultPageSize:Pe,showSizeChanger:!0,position:"bottom",align:"center"}:!1,dataSource:He,renderItem:Ve,rowKey:w,loadMore:O&&!re?e.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"start",height:500},children:e.jsx(tt,{tip:t({en:"Loading",vi:"Đang tải"}),children:e.jsx("div",{style:{padding:50,background:"rgba(0, 0, 0, 0.05)",borderRadius:4}})})}):null})]})}export{ct as DisplayType,Ce as DownloadType,Ft as default};
