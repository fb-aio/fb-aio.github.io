System.register(["./index-legacy-em8lsdjG.js","./MyApp-legacy-eQhw2hld.js","./Screen-legacy-FIKl_G0Y.js","./index-legacy-UV62jjIq.js","./index-legacy-BsRfKXoc.js","./index-legacy-BLxQvwtk.js","./index-legacy-CQy5lX3g.js","./index-legacy-DjDDmc9V.js","./Collapse-legacy-L-faHjfm.js","./row-legacy-B8b_N6Zy.js","./responsiveObserver-legacy-BmkofPmJ.js","./TextArea-legacy-CEW8Buwg.js","./EyeOutlined-legacy-DNGDLUHf.js","./SearchOutlined-legacy-DUbN1gtD.js"],(function(e,n){"use strict";var t,i,s,h,a,r,l,o,c,d,g,u,m,v,x,f,b;return{setters:[e=>{t=e.aK,i=e.r,s=e.aM,h=e.aQ},e=>{a=e.u,r=e.e,l=e.t,o=e.S,c=e.T,d=e.Y},e=>{g=e.S},e=>{u=e.T},e=>{m=e.P},e=>{v=e.C},e=>{x=e.I},e=>{f=e.D},e=>{b=e.C},null,null,null,null,null],execute:function(){e("default",(function(){const{ti:e}=t(),{message:n}=a(),[h,d]=r("InvisibleText.message",""),[p,y]=r("InvisibleText.output",""),[j,w]=r("InvisibleText.partial",!1),[k,T]=r("InvisibleText.mode",0),[C,I]=r("InvisibleText.pass",""),[E,N]=r("InvisibleText.err",""),A=i.useRef(null),M=i.useRef(null);i.useEffect((()=>{l("InvisibleText.onLoad")}),[]),i.useEffect((()=>{if(0===k)try{y(S(h,C,j)),N("")}catch(e){N(e.message)}}),[h,k,j,C]),i.useEffect((()=>{if(1===k)try{d(F(p,C,j)),N("")}catch(e){N(e.message),d("")}}),[p,k,j,C]),i.useEffect((()=>{0===k?(A.current?.focus(),N("")):1===k&&M.current?.focus()}),[k]);const P=[{label:e({en:"❓ What is an invisible message?",vi:"❓ Tin nhắn tàng hình là gì?"}),children:e({en:"An invisible message is a piece of text that uses zero-width characters to hide content within messages, texts, or posts that are not visible to the naked eye.",vi:"Tin nhắn tàng hình là một đoạn văn bản sử dụng ký tự vô hình (zero-width characters) để ẩn nội dung trong các tin nhắn, văn bản hoặc bài đăng mà mắt thường không thể thấy được."})},{label:e({en:"🎯 What is this feature used for?",vi:"🎯 Chức năng này dùng để làm gì?"}),children:s.jsxs(s.Fragment,{children:[e({en:"It helps you send secret messages, mark hidden content, or create an invisible signature in text without anyone noticing.",vi:"Nó giúp bạn gửi tin nhắn bí mật, đánh dấu nội dung ẩn, hoặc tạo dấu hiệu nhận biết trong văn bản mà không ai nhận ra."})," ",s.jsxs(u.Link,{href:"https://www.facebook.com/groups/fbaio/posts/1578525616135454",target:"_blank",children:[e({en:"Learn more",vi:"Xem thêm"})," ",s.jsx("i",{className:"fa-solid fa-external-link"})]})]})},{label:e({en:"🔐 How do I CREATE invisible messages?",vi:"🔐 Làm thế nào để TẠO tin nhắn tàng hình?"}),children:e({en:"Switch to Encode mode, paste the message into the first input box, enter password (if needed). The invisible result will be shown at the third input box. Copy and send to the recipient.",vi:"Ở Chế độ Mã hoá, nhập tin nhắn bạn muốn ẩn vào ô thứ 1, thêm mật khẩu (nếu muốn), kết quả tàng hình sẽ hiện ở ô thứ 3. Sao chép và gửi cho người nhận."})},{label:e({en:"🔍 How can I REVEAL an invisible message?",vi:"🔍 Làm thế nào để ĐỌC tin nhắn tàng hình?"}),children:e({en:"Switch to Decode mode, paste the message into the third input box, enter password (if needed). The original message will be shown at the first input box.",vi:"Chuyển sang Chế độ Giải mã, nhập tin nhắn tàng hình vào ô thứ 3, nhập mật khẩu (nếu cần), tin nhắn gốc sẽ hiện ở ô thứ 1."})},{label:e({en:"🧩 What is partially invisible?",vi:"🧩 Tàng hình 1 phần là gì?"}),children:e({en:"When you want to hide a small part of a message, you can enable `Partially invisible`. Messages that are between >< will be hidden, but the remaining characters will be visible.",vi:"Nếu bạn muốn tàng hình 1 đoạn nhỏ trong tin nhắn, hãy bật `Tàng hình 1 phần`, những tin nhắn được bọc bằng dấu >< sẽ được tàng hình, các ký tự còn lại được giữ nguyên."})},{label:e({en:"🛡️ Is an invisible message safe?",vi:"🛡️ Tin nhắn tàng hình có an toàn không?"}),children:e({en:"Basically, it cannot be detected by the naked eye. However, some tools or software can detect hidden characters.",vi:"Về cơ bản, nó không thể bị phát hiện bằng mắt thường. Tuy nhiên, một số công cụ hoặc phần mềm kiểm tra ký tự ẩn có thể nhận diện được."})},{label:e({en:"📱 Does an invisible message work on all platforms?",vi:"📱 Tin nhắn tàng hình có hoạt động trên mọi nền tảng không?"}),children:e({en:"Most text platforms like Facebook, Twitter, Messenger, Zalo, and Telegram support zero-width characters, but some may automatically remove them.",vi:"Hầu hết các nền tảng văn bản như Facebook, Twitter, Messenger, Zalo, Telegram đều hỗ trợ ký tự zero-width, nhưng một số có thể tự động loại bỏ chúng."})},{label:e({en:"📝 What else can I use an invisible message for?",vi:"📝 Tôi có thể dùng tin nhắn tàng hình để làm gì khác?"}),children:e({en:"You can use it to insert a watermark into text, send secret codes, or mark important messages.",vi:"Bạn có thể dùng nó để chèn watermark (dấu bản quyền) vào văn bản, gửi mật mã bí mật, hoặc đánh dấu tin nhắn quan trọng."})}],z=s.jsx("div",{style:{display:"flex",justifyContent:"center"},children:s.jsx("i",{className:"fa-solid fa-arrow-"+(0===k?"down":"up")})});return s.jsx(g,{mode:"center",title:e({en:"Invisible Text",vi:"Tin nhắn tàng hình"}),children:s.jsxs(o,{style:{width:400},direction:"vertical",children:[s.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between"},children:[s.jsx(m,{title:e({en:"Partially invisible",vi:"Tàng hình 1 phần"}),content:s.jsxs(s.Fragment,{children:[s.jsxs("ul",{children:[s.jsx("li",{children:e({vi:"BÂT: Chỉ tàng hình những ký tự nằm trong cặp dấu ><",en:"ON: Make invisible only characters between ><"})}),s.jsx("li",{children:e({vi:"TẮT: Tàng hình tất cả ký tự",en:"OFF: Make every character invisible"})})]}),e({en:s.jsxs(s.Fragment,{children:["eg ON: ",s.jsx(c,{children:"Password is >123< 456"}),s.jsx("i",{className:"fa-solid fa-arrow-right"})," ",s.jsx(c,{children:"Password is 456"})]}),vi:s.jsxs(s.Fragment,{children:["ví dụ khi BẬT: ",s.jsx(c,{children:"Mật khẩu là >123< 456"}),s.jsx("i",{className:"fa-solid fa-arrow-right"})," ",s.jsx(c,{children:"Mật khẩu là 456"})]})})]}),children:s.jsxs(v,{value:j,onChange:e=>w(e.target.checked),children:[s.jsx("i",{className:"fa-solid fa-puzzle-piece"})," ",e({en:"Partial mode",vi:"Tàng hình 1 phần"})]})}),s.jsx(m,{title:s.jsx("i",{children:e({en:"Click to switch mode",vi:"Click để đổi chế độ"})}),content:e(0===k?{en:"Encode mode: Generate invisible text from original text",vi:"Chế độ mã hoá: Tạo tin nhắn tàng hình từ tin nhắn gốc"}:{en:"Decode mode: Reveal original text from invisible text",vi:"Chế độ giải mã: Hiển thị tin nhắn gốc từ tin nhắn tàng hình"}),children:s.jsxs(c,{color:0===k?"success":"warning",style:{cursor:"pointer"},onClick:()=>T(0===k?1:0),children:[0===k?s.jsx("i",{className:"fas fa-lock"}):s.jsx("i",{className:"fas fa-lock-open"})," ",e(0===k?{en:"Encode mode",vi:"Chế độ Mã hoá"}:{en:"Decode mode",vi:"Chế độ Giải mã"})]})})]}),s.jsx(x.TextArea,{ref:A,value:h,onChange:e=>d(e.target.value),rows:10,autoSize:{minRows:3},placeholder:e(0===k?{en:"Enter the message you want to encode",vi:"Nhập tin nhắn bạn muốn tàng hình"}:{en:"> Decode result goes here...",vi:"> Kết quả giải mã sẽ hiện ở đây..."}),onFocus:()=>T(0)}),z,s.jsx(x.Password,{placeholder:e(0===k?{en:"Add password",vi:"Thêm mật khẩu"}:{en:"Password to decode",vi:"Nhập mật khẩu giải mã"}),value:C,onChange:e=>I(e.target.value),status:E.length>0?"error":void 0,prefix:s.jsx("i",{className:"fa-solid fa-lock"})}),E.length>0&&s.jsx(c,{color:"error",children:E}),z,s.jsx(x.TextArea,{ref:M,value:p,onChange:e=>y(e.target.value),rows:10,autoSize:{minRows:3},placeholder:e(1===k?{en:"Enter the message you want to decode",vi:"Nhập tin nhắn bạn muốn giải mã"}:{en:"> Invisible result goes here...",vi:"> Kết quả tàng hình sẽ hiện ở đây..."}),onFocus:()=>T(1)}),p.length>0&&s.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"flex-start"},children:[s.jsx(R,{text:p,message:n,ti:e}),s.jsxs(c,{children:[p.length,e({en:" characters",vi:" ký tự"})]})]}),s.jsx(f,{}),s.jsxs(o,{align:"center",direction:"vertical",children:[s.jsx(u.Title,{level:3,style:{margin:0,alignSelf:"center"},children:"FAQ"}),s.jsx(b,{items:P,accordion:!0,expandIconPosition:"end",style:{marginBottom:200}})]})]})})}));const n=["󠁢","󠁣","󠁤","󠁥","󠁦","󠁧","󠁨","󠁩","󠁪","󠁫","󠁬","󠁭","󠁮","󠁯","󠁰","󠁱","󠁲","󠁳","󠁴","󠁵","󠁶","󠁷","󠁸","󠁹","󠁺","󠁿"],p=/>(.+?)</g,y=new RegExp(`‌([${n.join("")}]+?)󠁡`),j=n.reduce(((e,n,t)=>(e[n]=t,e)),{}),w=n.length,k=((e,n)=>{let t=0,i=1;for(;i<n;)i*=e,t++;return t})(w,1114112),T=(e,n="")=>{let t="";for(let i=0;i<e.length;i++)t+=String.fromCharCode(e.charCodeAt(i)^n.charCodeAt(i%n.length));return t},C="!FBAIO!",I=e=>{let n=e.codePointAt(0),t=[];for(;n>0;)t.push(n%w),n=Math.floor(n/w);for(;t.length<k;)t.push(0);return t.reverse()},E=e=>e.reduce(((e,t)=>e+n[t]),""),N=(e,n="")=>{const t=T(C+e,n);let i=[];for(let s of t)i.push(I(s));return"‌"+i.map(E).join("")+"󠁡"},S=(e,n="",t=!1)=>{if(!e)return"";if(!t)return N(e,n);let i=p.exec(e);return i?e.replace(p,N(i[1],n)):e},A=e=>{e=e.reverse();let n=1,t=0;for(let i of e)t+=i*n,n*=w;return String.fromCodePoint(t)},M=(e,n="")=>{const t=y.exec(e);if(!t)throw new Error("No encoded content found.");e=t[1];let i=[],s="";for(let a of e)i.push(j[a]),i.length>=k&&(s+=A(i),i=[]);const h=T(s,n);if(!h.startsWith(C))throw new Error("Invalid password!");return h.slice(7)},F=(e,n="",t=!1)=>e?t?P(e)?e.replace(y,`>${M(e,n)}<`):e:M(e,n):"",P=e=>y.test(e);function R({text:e,message:n,ti:t}){return 0===e.length?null:s.jsx(h,{onClick:()=>{l("InvisibleText:Copy"),d(e)},icon:s.jsx("i",{className:"fa-solid fa-copy"}),children:t({en:"Copy",vi:"Sao chép"})})}console.log(F(S("hello world","password"),"password"))}}}));
