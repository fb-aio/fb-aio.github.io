System.register(["./index-legacy-QCyg4Nxx.js","./index-legacy-Cv_m2eds.js","./file-download-legacy-Dy3KSRK-.js","./MyApp-legacy-UJ1kH3kU.js","./react-hotkeys-hook.esm-legacy-CYzO3O24.js","./index-legacy-LJNrTGDE.js","./index-legacy--BUXNdqV.js","./index-legacy-Bd-WdA12.js","./index-legacy-CkzEcVsR.js","./index-legacy-DlBmfONe.js","./index-legacy-BGUNgRQ5.js","./Dropdown-legacy-8vxg35jx.js","./PurePanel-legacy-pgFjPk-6.js","./move-legacy-BPI4XG35.js","./TextArea-legacy-DPrVGTQL.js","./Input-legacy-HyduBkzs.js","./SearchOutlined-legacy-BuINNXK0.js","./Pagination-legacy-Bg2h6Tw-.js","./index-legacy-CQa49DlW.js","./index-legacy-DZOTUaBr.js","./DownOutlined-legacy-sMIeHOKh.js","./row-legacy-DdRJwn49.js","./col-legacy-BFlZP_JA.js"],(function(e,n){"use strict";var t,l,i,o,a,s,r,c,d,h,u,g,f,m,y,w,x,j,p,v,b,k,C,D,$,T,S,I,N,P;return{setters:[e=>{t=e.aU,l=e.r,i=e.cp,o=e.aX,a=e.b0,s=e.cq,r=e.cr,c=e.cs,d=e.ct,h=e.cu},e=>{u=e.a,g=e.b},e=>{f=e.f},e=>{m=e.u,y=e.e,w=e.t,x=e.m,j=e.S,p=e.T,v=e.b,b=e.a6,k=e.j,C=e.l},e=>{D=e.u},e=>{$=e.P},e=>{T=e.C},e=>{S=e.D},e=>{I=e.I},e=>{N=e.L},e=>{P=e.D},null,null,null,null,null,null,null,null,null,null,null,null],execute:function(){e("default",(function({collectionName:e,renderItem:B,fetchNext:L,rowKey:_,downloadItem:E,getItemCursor:F,initialData:A=[],downloadThreads:M=5,downloadOptions:O=[],displayType:R="grid",headerButtons:V=()=>null,header:q=()=>null,once:W=!1,all:X=!1,stop:z=!1,showPagination:K=!1,pageSize:H=20,searchPlaceholder:J=()=>({en:"Search",vi:"Tìm kiếm"}),onSearch:G,centerItems:U=!0}){const{ti:Y}=t(),{message:Z,notification:Q}=m(),{isIntersecting:ee,ref:ne}=u(),[te,le]=l.useState(!1),[ie,oe]=y(`Collection.${e}.hasMore`,!0),[ae,se]=y(`Collection.${e}.data`,A),[re,ce]=y(`Collection.${e}.pageIndex`,1),[de,he]=y(`Collection.${e}.search`,""),[ue,ge]=y(`Collection.${e}.selected`,[]),[fe,me]=y(`Collection.${e}.selectMode`,!1),[ye,we]=y(`Collection.${e}.downloaded`,{});D(["shift"],(()=>{E&&me((e=>!e))}));const xe=l.useMemo((()=>de&&G?ae.filter((e=>G(de,e))):ae),[ae,de,G]);l.useEffect((()=>{let e=ae.length,n=Math.ceil(e/20);re>n&&ce(n)}),[ae,re]),l.useEffect((()=>{ae.length||pe(!1)}),[e]),l.useEffect((()=>{A&&!L&&se(A)}),[A,L]);const je=(!ae.length||ee||X)&&ie&&!de&&!z&&L;g((()=>{je&&be()}),1e3),l.useEffect((()=>{je&&be()}),[je]);const pe=(n=!1)=>{n&&w("Collection:reload");const t=n?[]:x("Collection.data."+e)||[];se(t),ge([]),be(t)},ve=l.useRef(!1),be=async(n=ae)=>{if(ve.current)return;ve.current=!0,le(!0);const t=await(L?.(n));console.log(e,t);let l=!1;if(t?.length){const e=i(n,t,_);if(oe(!W&&e.length>0),e.length){const t=[...n,...e];se(t),l=!0}}else 0===t?.length&&oe(!1);l||n.length||Z.info(Y({en:"No data found",vi:"Không có dữ liệu"})+": "+e),ve.current=!1,le(!1)},ke=async({fromCursor:t,downloadType:l,startIndex:u=0}={})=>{if(!E)return;const g=await s();if(!("showDirectoryPicker"in window)&&"file"===l)return k.fire({icon:"error",title:Y({en:"Browser not supported",vi:"Trình duyệt không hỗ trợ"}),text:Y({en:"File saver API not supported in this browser. Please use newest version of Edge or Chrome. (window.showDirectoryPicker)",vi:"Trình duyệt này không hỗ trợ API lưu file (window.showDirectoryPicker). Vui lòng sử dụng Edge hoặc Chrome bản mới nhất"})});let m,y;if(!t&&!fe&&(m=await k.fire({icon:"question",title:Y({en:"Download",vi:"Tải xuống"})+"?",text:e,showDenyButton:!0,showCancelButton:!1,confirmButtonColor:"#d33",denyButtonColor:"#1668dc",confirmButtonText:Y({en:"Download from cursor",vi:"Tải từ vị trí"}),denyButtonText:Y({en:"Download all",vi:"Tải từ đầu"})}),m.isDismissed))return;if(m?.isConfirmed){const n=await k.fire({icon:"info",title:Y({en:"Download from cursor",vi:"Tải từ vị trí"}),html:`\n                <label for="from-cursor">\n                ${Y({en:"Last cursor",vi:"Con trỏ cuối"})}: (${Y({en:"leave empty to re-download all",vi:"bỏ trống để tải từ đầu"})})\n                </label><br/>\n                <input\n                    id="from-cursor"\n                    class="swal2-input"\n                    style="margin: 5px"\n                    value="${t||localStorage.getItem(e+"_fromCursor")||""}">\n                <br/>\n                <label for="start-index">\n                ${Y({en:"Last index",vi:"Vị trí cuối"})}: (${Y({en:"for auto generate file name",vi:"để tự động tạo tên file"})})\n                </label><br/>\n                <input\n                    id="start-index"\n                    class="swal2-input"\n                    style="margin: 5px"\n                    value="${u||localStorage.getItem(e+"_startIndex")||0}">\n            `,preConfirm:()=>[document.getElementById("from-cursor")?.value,document.getElementById("start-index")?.value],showCancelButton:!0,confirmButtonText:Y({en:"Start download",vi:"Bắt đầu tải"})});if(n.isDismissed||n.isDenied)return;t=n.value[0],u=parseInt(n.value?.[1]||0)}if(!l){const e=await k.fire({icon:"question",title:Y({en:"Data type",vi:"Loại dữ liệu"}),html:`\n                    <label for="download-type">\n                        ${Y({en:"Which data type you want to download?",vi:"Bạn muốn tải xuống loại dữ liệu nào?"})}\n                    </label><br/>\n                    <select\n                        id="download-type"\n                        class="swal2-select"\n                        style="margin: 5px">\n                        ${Object.values(n).map((e=>`<option value="${e}">${e}</option>`)).join("")}\n                    </select>\n                `,preConfirm:()=>document.getElementById("download-type")?.value,showCancelButton:!0,reverseButtons:!0});if(e.isDismissed)return;l=e.value}if(!(await C()))return;if(w("downloadCollection:"+l+":"+(fe?`selected:${ue.length}:`:"all:")+e),"file"===l){const n=await window.showDirectoryPicker({mode:"readwrite"});await n.requestPermission({writable:!0}),y=await n.getDirectoryHandle(r(e),{create:!0})}const x="downloading_collection_"+e,p="stopping_downloading_collection_"+e;Z.loading({key:x,content:Y({en:"Downloading",vi:"Đang tải"})+"...",duration:0});const v=t?[]:fe?[...ue]:[...ae];let b=0,D=0,$=0,T=0,S=0,I=!0,N=!1,B=!1,A=!0,O=[],R=[];for(;!N&&A;){if(!fe&&S>=v.length-M){const n=await(L?.(v,I?t:void 0)),l=i(v,n,_);!l?.length&&I&&t&&Q.open({type:"error",message:Y({en:"No data at from your cursor",vi:"Không có dữ liệu tại vị trí bạn nhập"})+t+" ("+e+")",description:Y({en:"Will download from start",vi:"Sẽ tải từ đầu"}),duration:0}),I=!1,console.log(l),l?.length?v.push(...l):A=!1}const n=v.slice(S,S+M);if(!n.length)break;const a=Math.min(M,n.length),s=Array.from({length:a},(()=>""));await Promise.all(n.map((async(n,t)=>{try{let a=await E(n,b);a||(a=[]),Array.isArray(a)||(a=[a]);let r=!1;for(let n=0;n<a.length&&!N;n++){const{url:h,name:f}=a[n];if(!h)continue;const m=u+S+t+"_"+n+"_"+f;if(a[n].name=m,s[t]="thread "+(t+1)+": item "+(b+t+1)+(a.length>1?` (${n+1}/${a.length})`:""),N||B||Z.loading({key:x,content:o.jsxs("span",{children:[`${Y({en:"Downloading",vi:"Đang tải"})}... ${D}`,$?o.jsxs(o.Fragment,{children:[Y({en:"Failed",vi:"Lỗi"}),": $",$," ",o.jsx("br",{})]}):"",o.jsx("br",{}),e,o.jsx("br",{}),o.jsx("i",{children:Y({en:"Click to stop",vi:"Bấm để dừng"})}),o.jsx("br",{}),o.jsx(P,{}),s.map(((e,n)=>o.jsxs("span",{style:{width:"100%",textAlign:"left",display:"block"},children:[e,o.jsx("br",{})]},n))),o.jsx("br",{})]}),duration:0,onClick:()=>{N=!0,Z.loading({key:p,content:Y({en:"Stopping...",vi:"Đang dừng..."}),duration:0})}}),R.push(h),"file"===l)try{const e=await c({url:h,checkAbortFn:()=>N}),n=await e.blob(),t=await y.getFileHandle(m,{create:!0}),l=await t.createWritable();await l.write(n),await l.close()}catch(i){console.log(i),N||(g?(await d({url:h,conflictAction:"overwrite",filename:e+"/"+m}),r=!0):($++,Q.open({type:"error",message:Y({en:"Download failed",vi:"Lỗi tải"}),description:h})))}D++}r&&T++,b++,O.push({data:a,raw:n}),we((e=>({...e,[_(n)]:!0}))),ge((e=>e.filter((e=>_(e)!==_(n)))))}catch(i){$++,Z.error({content:Y({en:"Download failed",vi:"Lỗi tải"})+": "+i.message})}}))),N||(S+=n.length)}if(B=!0,"json"===l||"link"===l){const n=e+("json"===l?".json":".txt"),t="json"===l?JSON.stringify(O,null,4):R.join("\n");f(t,n)}let V="";try{V=F?.(v[S]||v[S-1])||""}catch(q){console.error(q)}Z.destroy(x),Z.destroy(p),T>0&&Q.open({type:"info",message:Y({en:"In Download/ folder",vi:"Trong folder Download/"})+": "+T,description:Y({en:"Files that cannot be normal downloaded, will be force download into default Download folder of your browser",vi:"Những file không thể tải bình thường, sẽ được tải vào trong folder Download/ mặc định của trình duyệt"}),duration:0,btn:o.jsx(a,{onClick:h,children:Y({en:"Show Download/ folder",vi:"Mở folder Download/"})})}),Q.open({type:"success",message:Y(N?{en:"Download stopped",vi:"Đã dừng tải"}:{en:"Download finished",vi:"Tải xong"}),description:o.jsxs("ul",{children:[o.jsx("li",{children:Y({en:"Folder name",vi:"Tên folder"})+": "+e}),o.jsx("li",{children:Y({en:"Downloaded",vi:"Đã tải"})+": "+D}),T>0&&o.jsx("li",{children:Y({en:"In Download/ folder",vi:"Trong folder Download/"})+": "+T}),o.jsx("li",{children:Y({en:"Last index",vi:"Vị trí cuối"})+": "+(S+u)}),o.jsx("li",{children:Y({en:"Last cursor",vi:"Con trỏ cuối"})+": "+V})]}),duration:0,btn:o.jsx(j,{direction:"horizontal",children:N&&!fe?o.jsx(a,{onClick:()=>ke({downloadType:l,fromCursor:V,startIndex:S+u}),children:Y({en:"Continue download",vi:"Tiếp tục tải"})}):null})}),localStorage.setItem(e+"_fromCursor",V+""),localStorage.setItem(e+"_startIndex",S+u+"")},Ce=fe&&ue?.length>0?ue:ae,De=fe&&ue.length?ue.length:Y({en:"all",vi:"tất cả"}),$e={items:[{key:"selectMode",label:o.jsxs(j,{align:"center",children:[o.jsxs($,{placement:"left",title:Y({en:"Select mode",vi:"Chọn để tải"}),content:Y({en:o.jsxs("ul",{children:[o.jsxs("li",{children:[o.jsxs(p,{color:"success",children:[o.jsx("i",{className:"fa-solid fa-check"})," ON"]}),"Download only selected items"]}),o.jsxs("li",{children:[o.jsxs(p,{color:"warning",children:[o.jsx("i",{className:"fa-solid fa-xmark"})," OFF"]}),"Download all items (auto load more)"]}),o.jsxs("li",{children:["Shortcut:"," ",o.jsx(p,{style:{borderRadius:"9999px"},children:"Shift"})]})]}),vi:o.jsxs("ul",{children:[o.jsxs("li",{children:[o.jsxs(p,{color:"success",children:[o.jsx("i",{className:"fa-solid fa-check"})," BẬT"]}),"Chỉ tải những mục đã chọn"]}),o.jsxs("li",{children:[o.jsxs(p,{color:"warning",children:[o.jsx("i",{className:"fa-solid fa-xmark"})," TẮT"]}),"Tải tất cả (tự động tải thêm)"]}),o.jsxs("li",{children:["Phím tắt:"," ",o.jsx(p,{style:{borderRadius:"9999px"},children:"Shift"})]})]})}),children:[o.jsx(T,{checked:fe})," ",Y({en:"Select mode",vi:"Chọn để tải"})]}),ue?.length>0&&o.jsx(v,{title:Y({en:"Clear selected",vi:"Xoá lựa chọn"}),children:o.jsx(a,{onClick:e=>{e.preventDefault(),e.stopPropagation(),ge([])},icon:o.jsx("i",{className:"fa-solid fa-trash"}),children:ue?.length})})]})},{type:"divider"},{key:"file",label:"📁 "+Y({en:`Download ${De} files (photo/video)`,vi:`Tải ${De} files (ảnh/video)`})},{key:"link",label:"🔗 "+Y({en:`Export ${De} links`,vi:`Xuất ${De} links`})},{key:"json",label:"📄 "+Y({en:`Export ${De} to .json`,vi:`Xuất ${De} ra .json`})},{type:"divider"},...O.map((({key:e,label:n,labelFn:t})=>({key:e,label:t?.(Ce)||n})))],onClick:e=>{if(O.length&&O.some((n=>n.key===e.key))){const n=O.find((n=>n.key===e.key))?.onClick;n&&n(Ce,se)}else"selectMode"===e.key?me(!fe):!fe||ue?.length>0?ke({downloadType:e.key}):Z.info(Y({en:"Please select media to download",vi:"Vui lòng chọn ảnh/video muốn tải"}))}};return o.jsxs(j,{direction:"vertical",align:"center",style:{width:"100%"},className:U?"collection-center":"",children:[q?.(ae),o.jsxs(j.Compact,{style:{justifyContent:"center"},children:[L&&o.jsx(a,{onClick:()=>pe(!0),icon:o.jsx("i",{className:"fa-solid fa-rotate-right"}),disabled:te,loading:te,children:Y(te?{en:"Loading..",vi:"Đang tải.."}:{en:"Refresh",vi:"Làm mới"})}),E&&o.jsx(S,{disabled:!ae.length,menu:$e,placement:"bottomCenter",children:o.jsx(a,{type:"primary",icon:o.jsx("i",{className:"fa-solid fa-download"}),children:fe?ue.length?Y({en:"Download",vi:"Tải xuống"})+` (${ue.length})`:Y({en:"Select to download...",vi:"Chọn để tải..."}):Y({en:"Download all",vi:"Tải xuống"})})}),V?.(ae,te)]}),G&&o.jsx(I.Search,{value:de,onChange:e=>he(e.target.value+""),placeholder:Y(J(ae)),allowClear:!0,style:{minWidth:300}}),o.jsx(N,{grid:{gutter:10,column:"vertical"===R?1:void 0},pagination:!!K&&{showTotal:(e,n)=>Y({en:`Showing ${n[0]}-${n[1]} / Total ${e}`,vi:`Hiển thị ${n[0]}-${n[1]} / Tổng ${e}`}),defaultPageSize:H,showSizeChanger:!0,position:"bottom",align:"center"},dataSource:xe,renderItem:(e,n)=>{const t=ue.indexOf(e),l=t>=0,i=ye[_(e)],s={position:"absolute",top:0,left:0,right:0,bottom:0,width:"100%",height:"100%",background:l||i?"#000a":"#0002"};return o.jsxs("div",{style:{position:"relative",flexGrow:1,height:"100%"},children:[n<ae.length-1?B(e,n,se):o.jsx(j,{ref:ne,children:B(e,n,se)}),fe?o.jsx(a,{type:"primary",style:s,className:"scale-on-hover",onClick:()=>{ge(l?n=>n.filter((n=>n!==e)):n=>[...n,e])},children:l?o.jsx("i",{className:"fa-solid fa-5x",children:t+1}):i?o.jsx("i",{className:"fa-solid fa-check fa-5x"}):o.jsx("i",{className:"fa-solid fa-square  fa-5x",style:{color:"#fff7"}})}):i?o.jsx("div",{style:{...s,display:"flex",justifyContent:"center",alignItems:"center",pointerEvents:"none",background:"#0006"},children:o.jsx("i",{className:"fa-solid fa-check fa-5x",style:{color:"white"}})}):null]},"select_container_"+_(e))},rowKey:_,loadMore:je&&!K?o.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"start",height:500},children:o.jsx(b,{tip:Y({en:"Loading",vi:"Đang tải"}),children:o.jsx("div",{style:{padding:50,background:"rgba(0, 0, 0, 0.05)",borderRadius:4}})})}):null})]})}));var n=e("DownloadType",(e=>(e.File="file",e.Link="link",e.JSON="json",e))(n||{})),B=e("DisplayType",(e=>(e.Grid="grid",e.Vertical="vertical",e))(B||{}))}}}));
