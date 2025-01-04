import{aK as O,r as M,aM as e,bt as R,aE as W,au as H}from"./index-StVibqow.js";import{u as S,j as A,t as w,Y,S as b,T}from"./MyApp-CbrjJD8r.js";import{T as v}from"./index-Ce6uhCjP.js";import{C as F}from"./Collapse-7C1LygD_.js";import{C as _}from"./index-DUTxxdew.js";function G(){const{ti:t}=O(),{message:i,notification:y}=S(),[K,I]=M.useState(!1),C=async(n={},a=!0)=>K?!0:(await Y.fire({title:(n==null?void 0:n.title)||t({en:"Confirm",vi:"Xác nhận"}),showCancelButton:!0,cancelButtonText:t({en:"Cancel",vi:"Huỷ"}),confirmButtonText:(n==null?void 0:n.confirmButtonText)||t({en:"OK",vi:"OK"}),html:e.jsxs(b,{direction:"vertical",children:[e.jsx(v.Text,{children:(n==null?void 0:n.text)||t({en:"Are you sure?",vi:"Chắc chứ?"})}),a&&e.jsx(b,{children:e.jsx(F,{size:"small",expandIcon:()=>null,children:e.jsx(F.Panel,{header:e.jsxs(v.Text,{children:[e.jsx("i",{className:"fa-solid fa-eye-slash"})," ",t({en:"Do not show again",vi:"Không hiện lại"})]}),children:e.jsxs(b,{direction:"vertical",size:0,children:[e.jsx(T,{color:"error",children:t({en:"Warning",vi:"Lưu ý"})}),e.jsx("ul",{style:{textAlign:"left"},children:t({en:["⏳ Please wait few seconds each click","🚫 To prevent ban from Facebook","❌ Can not use action when you are banned"],vi:["⏳ Nên chờ vài giây giữa những lần click","🚫 Để tránh bị ban bởi Facebook","❌ Không dùng được chức năng nếu bị ban"]}).map((r,c)=>e.jsx("li",{children:r},c))}),e.jsx(T,{color:"success",children:t({en:"Recommend",vi:"Lời khuyên"})}),e.jsx("ul",{style:{textAlign:"left"},children:t({en:["✅ You can select multiple rows","🤖 Then click Bulk Actions","⚡ FB AIO has built-in wait time"],vi:["✅ Hãy tích chọn nhiều dòng","🤖 Rồi bấm chức năng chạy hàng loạt","⚡ FB AIO có sẵn cơ chế chờ"]}).map((r,c)=>e.jsx("li",{children:r},c))}),e.jsxs(v.Link,{href:H.FB_AIO.banWarning,target:"_blank",onClick:()=>{w("ban_warning")},children:[t({en:"Read more",vi:"Xem thêm"})," ",e.jsx("i",{className:"fa-solid fa-arrow-up-right-from-square"})]}),e.jsx(_,{name:"confirm",onChange:r=>I(r.target.checked),children:t({en:"Understood. Dont show again",vi:"Đã hiểu. Không hỉện lại"})})]})},"1")})})]}),...n})).isConfirmed;async function E({data:n,key:a,actionFn:o,loadingText:r,successText:c,successDesc:h,successDescItem:g,waitTime:l=[2e3,5e3],requireVIP:m=!0,needConfirm:k,confirmProps:j}){if(!await C(j,!1)||m&&!await A()||!(n!=null&&n.length))return;const p=a+":waiting";w(a);let f=!1,u=[];for(let s=0;s<n.length&&(i.destroy(p),!f);s++){const x={key:a,content:e.jsxs(e.Fragment,{children:[r(n[s],s,n)+" ("+(s+1)+"/"+n.length+")",e.jsx("br",{}),e.jsx("i",{children:t({en:"Click to stop",vi:"Bấm để dừng"})})]}),duration:0,onClick:()=>{i.loading({key:a,content:t({en:"Stopping...",vi:"Đang dừng..."}),duration:0}),f=!0}};if(i.loading(x),await o(n[s])&&(u.push(n[s]),i.success(x)),f)break;if(l&&s<n.length-1){const N=R(l[0]||l,l[1]||l);await W(N,B=>(i.loading({key:p,content:t({en:"Wating "+Math.round(B/1e3)+"s",vi:"Đang đợi "+Math.round(B/1e3)+"s"}),duration:0}),f))}}i.destroy(a),i.destroy(p),y.open({type:"success",duration:0,message:c(u,n)+` (${u.length} / ${n.length})`,description:g?e.jsx("ol",{style:{maxHeight:200,overflowY:"auto",whiteSpace:"pre-wrap"},children:u.map((s,x)=>e.jsx("li",{children:g(s)},x))}):h==null?void 0:h(u,n)})}async function L({key:n,id:a,record:o,loadingText:r,successText:c,failedText:h,actionFn:g,onSuccess:l,requireVIP:m=!1,needConfirm:k=!0,confirmProps:j}){if(k&&!await C(j)||m&&!await A())return!1;w(n),n+=":"+a;try{if(i.loading({key:n,content:r(o),duration:0}),await g(o))return l==null||l(),i.success({key:n,content:c(o)}),!0;throw new Error("Facebook response error")}catch(d){return i.destroy(n),y.open({type:"error",message:h(o),description:d.message}),!1}finally{}}return{onClickBulkActions:E,onClickAction:L}}export{G as u};