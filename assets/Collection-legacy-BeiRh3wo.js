System.register(["./index-legacy-Lkr9bBsN.js","./index-legacy-CCULVf87.js","./file-download-legacy-DGJzHxl5.js","./MyApp-legacy-_4SztRAr.js","./index-legacy-C5nqZbh5.js","./index-legacy-COzqP0w0.js","./index-legacy-C_47puaB.js","./index-legacy-lpSV6r-w.js","./index-legacy-DgPb_a_q.js"],(function(e,n){"use strict";var t,i,o,l,a,r,s,d,c,h,u,f,g,w,y,m,v,p,x,j,k,b,C,D,$,S,T;return{setters:[e=>{t=e.r,i=e.aJ,o=e.cj,l=e.aL,a=e.aP,r=e.ck,s=e.cl,d=e.cm,c=e.cn,h=e.co},e=>{u=e.a,f=e.b},e=>{g=e.f},e=>{w=e.u,y=e.e,m=e.t,v=e.l,p=e.S,x=e.b,j=e.a2,k=e.j,b=e.k},e=>{C=e.D},e=>{D=e.C},e=>{$=e.I},e=>{S=e.L},e=>{T=e.D}],execute:function(){e("C",(function({collectionName:e,renderItem:I,fetchNext:B,rowKey:L,downloadItem:E,getItemCursor:N,initialData:P=[],downloadThreads:_=5,downloadOptions:M=[],displayType:A="grid",headerButtons:F=()=>null,header:O=()=>null,once:V=!1,all:q=!1,stop:z=!1,showPagination:H=!1,pageSize:K=20,searchPlaceholder:W=()=>({en:"Search",vi:"Tìm kiếm"}),onSearch:G}){const{ti:J}=i(),{message:R,notification:X}=w(),{isIntersecting:Q,ref:U}=u(),[Y,Z]=t.useState(!1),[ee,ne]=y(`Collection.${e}.hasMore`,!0),[te,ie]=y(`Collection.${e}.data`,P),[oe,le]=y(`Collection.${e}.pageIndex`,1),[ae,re]=y(`Collection.${e}.search`,""),[se,de]=y(`Collection.${e}.selected`,[]),[ce,he]=y(`Collection.${e}.selectMode`,!1),[ue,fe]=y(`Collection.${e}.downloaded`,{});!function(e,n,i){const[o,l]=t.useState(!1);function a({key:n}){n===e&&l(!0)}function r({key:n}){n===e&&(l(!1),i?.())}t.useEffect((()=>(window.addEventListener("keydown",a),window.addEventListener("keyup",r),()=>{window.removeEventListener("keydown",a),window.removeEventListener("keyup",r)})),[])}("Shift",0,(()=>{E&&he((e=>!e))}));const ge=t.useMemo((()=>ae&&G?te.filter((e=>G(ae,e))):te),[te,ae,G]);t.useEffect((()=>{let e=te.length,n=Math.ceil(e/20);oe>n&&le(n)}),[te,oe]),t.useEffect((()=>{te.length||ye(!1)}),[e]);const we=(!te.length||Q||q)&&ee&&!ae&&!z;f((()=>{we&&ve()}),1e3),t.useEffect((()=>{we&&ve()}),[we]);const ye=(n=!1)=>{n&&m("Collection:reload");const t=n?[]:v("Collection.data."+e)||[];ie(t),de([]),ve(t)},me=t.useRef(!1),ve=async(n=te)=>{if(me.current)return;me.current=!0,Z(!0);const t=await B(n);console.log(e,t);let i=!1;if(t?.length){const e=o(n,t,L);if(ne(!V&&e.length>0),e.length){const t=[...n,...e];ie(t),i=!0}}else 0===t?.length&&ne(!1);i||n.length||R.info(J({en:"No data found",vi:"Không có dữ liệu"})+": "+e),me.current=!1,Z(!1)},pe=async({fromCursor:t,downloadType:i,startIndex:u=0}={})=>{if(!E)return;const f=await r();if(!("showDirectoryPicker"in window)&&"file"===i)return k.fire({icon:"error",title:J({en:"Browser not supported",vi:"Trình duyệt không hỗ trợ"}),text:J({en:"File saver API not supported in this browser. Please use newest version of Edge or Chrome. (window.showDirectoryPicker)",vi:"Trình duyệt này không hỗ trợ API lưu file (window.showDirectoryPicker). Vui lòng sử dụng Edge hoặc Chrome bản mới nhất"})});let w,y;if(!t&&!ce&&(w=await k.fire({icon:"question",title:J({en:"Download",vi:"Tải xuống"})+"?",text:e,showDenyButton:!0,showCancelButton:!1,confirmButtonColor:"#d33",denyButtonColor:"#1668dc",confirmButtonText:J({en:"Download from cursor",vi:"Tiếp tục tải"}),denyButtonText:J({en:"Download all",vi:"Tải từ đầu"})}),w.isDismissed))return;if(w?.isConfirmed){const n=await k.fire({icon:"info",title:J({en:"Download from cursor",vi:"Tiếp tục tải"}),html:`\n                <label for="from-cursor">\n                ${J({en:"Last cursor",vi:"Con trỏ cuối"})}: (${J({en:"leave empty to re-download all",vi:"bỏ trống để tải từ đầu"})})\n                </label><br/>\n                <input\n                    id="from-cursor"\n                    class="swal2-input"\n                    style="margin: 5px"\n                    value="${t||localStorage.getItem(e+"_fromCursor")||""}">\n                <br/>\n                <label for="start-index">\n                ${J({en:"Last index",vi:"Vị trí cuối"})}: (${J({en:"for auto generate file name",vi:"để tự động tạo tên file"})})\n                </label><br/>\n                <input\n                    id="start-index"\n                    class="swal2-input"\n                    style="margin: 5px"\n                    value="${u||localStorage.getItem(e+"_startIndex")||0}">\n            `,preConfirm:()=>[document.getElementById("from-cursor")?.value,document.getElementById("start-index")?.value],showCancelButton:!0,confirmButtonText:J({en:"Start download",vi:"Bắt đầu tải"})});if(n.isDismissed||n.isDenied)return;t=n.value[0],u=parseInt(n.value?.[1]||0)}if(!i){const e=await k.fire({icon:"question",title:J({en:"Data type",vi:"Loại dữ liệu"}),html:`\n                    <label for="download-type">\n                        ${J({en:"Which data type you want to download?",vi:"Bạn muốn tải xuống loại dữ liệu nào?"})}\n                    </label><br/>\n                    <select\n                        id="download-type"\n                        class="swal2-select"\n                        style="margin: 5px">\n                        ${Object.values(n).map((e=>`<option value="${e}">${e}</option>`)).join("")}\n                    </select>\n                `,preConfirm:()=>document.getElementById("download-type")?.value,showCancelButton:!0,reverseButtons:!0});if(e.isDismissed)return;i=e.value}if(!(await b()))return;if(m("downloadCollection:"+i+":"+(ce?`selected:${se.length}:`:"all:")+e),"file"===i){const n=await window.showDirectoryPicker({mode:"readwrite"});await n.requestPermission({writable:!0}),y=await n.getDirectoryHandle(s(e),{create:!0})}const v="downloading_collection_"+e,x="stopping_downloading_collection_"+e;R.loading({key:v,content:J({en:"Downloading",vi:"Đang tải"})+"...",duration:0});const j=t?[]:ce?[...se]:[...te];let C=0,D=0,$=0,S=0,I=0,P=!0,M=!1,A=!1,F=!0,O=[],V=[];for(;!M&&F;){if(!ce&&I>=j.length-_){const n=await B(j,P?t:void 0),i=o(j,n,L);!i?.length&&P&&t&&X.open({type:"error",message:J({en:"No data at from your cursor",vi:"Không có dữ liệu tại vị trí bạn nhập"})+t+" ("+e+")",description:J({en:"Will download from start",vi:"Sẽ tải từ đầu"}),duration:0}),P=!1,console.log(i),i?.length?j.push(...i):F=!1}const n=j.slice(I,I+_);if(!n.length)break;const a=Math.min(_,n.length),r=Array.from({length:a},(()=>""));await Promise.all(n.map((async(n,t)=>{try{let a=await E(n,C);a||(a=[]),Array.isArray(a)||(a=[a]);let s=!1;for(let n=0;n<a.length&&!M;n++){const{url:h,name:g}=a[n];if(!h)continue;const w=u+I+t+"_"+n+"_"+g;if(a[n].name=w,r[t]="thread "+(t+1)+": item "+(C+t+1)+(a.length>1?` (${n+1}/${a.length})`:""),M||A||R.loading({key:v,content:l.jsxs("span",{children:[`${J({en:"Downloading",vi:"Đang tải"})}... ${D}`,$?l.jsxs(l.Fragment,{children:[J({en:"Failed",vi:"Lỗi"}),": $",$," ",l.jsx("br",{})]}):"",l.jsx("br",{}),e,l.jsx("br",{}),l.jsx("i",{children:J({en:"Click to stop",vi:"Bấm để dừng"})}),l.jsx("br",{}),l.jsx(T,{}),r.map(((e,n)=>l.jsxs("span",{style:{width:"100%",textAlign:"left",display:"block"},children:[e,l.jsx("br",{})]},n))),l.jsx("br",{})]}),duration:0,onClick:()=>{M=!0,R.loading({key:x,content:J({en:"Stopping...",vi:"Đang dừng..."}),duration:0})}}),V.push(h),"file"===i)try{const e=await d({url:h,checkAbortFn:()=>M}),n=await e.blob(),t=await y.getFileHandle(w,{create:!0}),i=await t.createWritable();await i.write(n),await i.close()}catch(o){console.log(o),M||(f?(await c({url:h,conflictAction:"overwrite",filename:e+"/"+w}),s=!0):($++,X.open({type:"error",message:J({en:"Download failed",vi:"Lỗi tải"}),description:h})))}D++}s&&S++,C++,O.push({data:a,raw:n}),fe((e=>({...e,[L(n)]:!0}))),de((e=>e.filter((e=>L(e)!==L(n)))))}catch(o){$++,R.error({content:J({en:"Download failed",vi:"Lỗi tải"})+": "+o.message})}}))),M||(I+=n.length)}if(A=!0,"json"===i||"link"===i){const n=e+("json"===i?".json":".txt"),t="json"===i?JSON.stringify(O,null,4):V.join("\n");g(t,n)}let q="";try{q=N?.(j[I]||j[I-1])||""}catch(z){console.error(z)}R.destroy(v),R.destroy(x),S>0&&X.open({type:"info",message:J({en:"In Download/ folder",vi:"Trong folder Download/"})+": "+S,description:J({en:"Files that cannot be normal downloaded, will be force download into default Download folder of your browser",vi:"Những file không thể tải bình thường, sẽ được tải vào trong folder Download/ mặc định của trình duyệt"}),duration:0,btn:l.jsx(a,{onClick:h,children:J({en:"Show Download/ folder",vi:"Mở folder Download/"})})}),X.open({type:"success",message:J(M?{en:"Download stopped",vi:"Đã dừng tải"}:{en:"Download finished",vi:"Tải xong"}),description:l.jsxs("ul",{children:[l.jsx("li",{children:J({en:"Folder name",vi:"Tên folder"})+": "+e}),l.jsx("li",{children:J({en:"Downloaded",vi:"Đã tải"})+": "+D}),S>0&&l.jsx("li",{children:J({en:"In Download/ folder",vi:"Trong folder Download/"})+": "+S}),l.jsx("li",{children:J({en:"Last index",vi:"Vị trí cuối"})+": "+(I+u)}),l.jsx("li",{children:J({en:"Last cursor",vi:"Con trỏ cuối"})+": "+q})]}),duration:0,btn:l.jsx(p,{direction:"horizontal",children:M&&!ce?l.jsx(a,{onClick:()=>pe({downloadType:i,fromCursor:q,startIndex:I+u}),children:J({en:"Continue download",vi:"Tiếp tục tải"})}):null})}),localStorage.setItem(e+"_fromCursor",q+""),localStorage.setItem(e+"_startIndex",I+u+"")},xe=ce&&se?.length>0?se:te,je=ce&&se.length?se.length:J({en:"all",vi:"tất cả"});return l.jsxs(p,{direction:"vertical",align:"center",style:{width:"100%"},children:[O?.(te),l.jsxs(a.Group,{style:{width:"100%",justifyContent:"center"},children:[l.jsx(a,{onClick:()=>ye(!0),icon:l.jsx("i",{className:"fa-solid fa-rotate-right"}),disabled:Y,loading:Y,children:J(Y?{en:"Loading..",vi:"Đang tải.."}:{en:"Refresh",vi:"Làm mới"})}),E&&l.jsx(C,{disabled:!te.length,menu:{items:[{key:"selectMode",label:l.jsxs(p,{align:"center",children:[l.jsxs(x,{title:J({en:"Shortcut: press Shift",vi:"Phím tắt: ấn Shift"}),children:[l.jsx(D,{checked:ce})," ",J({en:"Select mode",vi:"Chọn để tải"})]}),se?.length>0&&l.jsx(x,{title:J({en:"Clear selected",vi:"Xoá lựa chọn"}),children:l.jsx(a,{onClick:e=>{e.preventDefault(),e.stopPropagation(),de([])},icon:l.jsx("i",{className:"fa-solid fa-trash"}),children:se?.length})})]})},{type:"divider"},{key:"file",label:"📁 "+J({en:`Download ${je} files`,vi:`Tải ${je} files`})},{key:"link",label:"🔗 "+J({en:`Export ${je} links`,vi:`Xuất ${je} links`})},{key:"json",label:"📄 "+J({en:`Export ${je} to .json`,vi:`Xuất ${je} ra .json`})},{type:"divider"},...M.map((({key:e,label:n,labelFn:t})=>({key:e,label:t?.(xe)||n})))],onClick:e=>{if(M.length&&M.some((n=>n.key===e.key))){const n=M.find((n=>n.key===e.key))?.onClick;n&&n(xe,ie)}else"selectMode"===e.key?he(!ce):!ce||se?.length>0?pe({downloadType:e.key}):R.info(J({en:"Please select media to download",vi:"Vui lòng chọn ảnh/video muốn tải"}))}},children:l.jsx(a,{type:"primary",icon:l.jsx("i",{className:"fa-solid fa-download"}),children:ce?se.length?J({en:"Download",vi:"Tải xuống"})+` (${se.length})`:J({en:"Select to download...",vi:"Chọn để tải..."}):J({en:"Download all",vi:"Tải xuống tất cả"})})}),F?.(te,Y)]}),G&&l.jsx($.Search,{value:ae,onChange:e=>re(e.target.value+""),placeholder:J(W(te)),allowClear:!0,style:{minWidth:300}}),l.jsx(S,{grid:{gutter:10,column:"vertical"===A?1:void 0},pagination:!!H&&{showTotal:(e,n)=>J({en:`Showing ${n[0]}-${n[1]} / Total ${e}`,vi:`Hiển thị ${n[0]}-${n[1]} / Tổng ${e}`}),defaultPageSize:K,showSizeChanger:!0,position:"bottom",align:"center"},dataSource:ge,renderItem:(e,n)=>{const t=se.indexOf(e),i=t>=0,o=ue[L(e)],r={position:"absolute",top:0,left:0,right:0,bottom:0,width:"100%",height:"100%",background:i||o?"#000a":"#0002"};return l.jsxs("div",{style:{position:"relative",flexGrow:1,height:"100%"},children:[n<te.length-1?I(e,n,ie):l.jsx(p,{ref:U,children:I(e,n,ie)}),ce?l.jsx(a,{type:"primary",style:r,className:"scale-on-hover",onClick:()=>{de(i?n=>n.filter((n=>n!==e)):n=>[...n,e])},children:i?l.jsx("i",{className:"fa-solid fa-5x",children:t+1}):o?l.jsx("i",{className:"fa-solid fa-check fa-5x"}):l.jsx("i",{className:"fa-solid fa-square  fa-5x",style:{color:"#fff7"}})}):o?l.jsx("div",{style:{...r,display:"flex",justifyContent:"center",alignItems:"center",pointerEvents:"none",background:"#0006"},children:l.jsx("i",{className:"fa-solid fa-check fa-5x",style:{color:"white"}})}):null]},"select_container_"+L(e))},rowKey:L,loadMore:we&&!H?l.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"start",height:500},children:l.jsx(j,{tip:J({en:"Loading",vi:"Đang tải"}),children:l.jsx("div",{style:{padding:50,background:"rgba(0, 0, 0, 0.05)",borderRadius:4}})})}):null})]})}));var n=(e=>(e.File="file",e.Link="link",e.JSON="json",e))(n||{}),I=e("D",(e=>(e.Grid="grid",e.Vertical="vertical",e))(I||{}))}}}));
