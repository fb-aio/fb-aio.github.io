System.register(["./index-legacy-B8f70dyz.js","./index-legacy-QzPn2VYm.js","./MyApp-legacy-CL0p-Wh9.js","./row-legacy-CKUtveTy.js","./Collapse-legacy-lUdM2cck.js","./index-legacy-nS6wQ41h.js","./responsiveObserver-legacy-DrPvlkYA.js","./DownOutlined-legacy-BeQTj8Kh.js"],(function(e,n){"use strict";var i,t,r,c,o,s,h,a,l,d,u,g;return{setters:[e=>{i=e.aJ,t=e.aL,r=e.au,c=e.aN,o=e.aM,s=e.r},e=>{h=e.T},e=>{a=e.S,l=e.T},e=>{d=e.R},e=>{u=e.C},e=>{g=e.T},null,null],execute:function(){function n({text:e}){return"string"==typeof e?e.split("*").map(((e,n)=>n%2==0?e:t.jsx("b",{children:e}))):e}function x({price:e=65e3,postfix:n="VND/tháng",fixed:r=0}){const{ti:c}=i(),[d,u]=s.useState(1),x=s.useMemo((()=>{let n=0;for(let i=0;i<d;i++)n+=e*Math.max(1-.1*i,.5);return n}),[d,e]),m=e*d;return t.jsxs(a,{size:5,children:[t.jsx(h.Text,{children:c({vi:"Tính thử",en:"Estimate"})}),t.jsx(g,{min:1,max:1e3,placeholder:"Count",value:d,onChange:e=>u(e)}),c({en:"accounts",vi:"nick"}),"=",o(x.toFixed(r)),n,x!==m&&t.jsxs(t.Fragment,{children:[t.jsxs("s",{children:["(",o(m.toFixed(r)),")"]}),t.jsx(l,{color:"success",children:"-"+(100-x/m*100).toFixed(0)+"%"})]})]})}e("default",(function(){const{ti:e}=i(),s=[{label:e({en:"❓ What is FB AIO?",vi:"❓ FB AIO là gì?"}),children:e({vi:"Viết tắt của Facebook All-in-one. Bộ công cụ tất cả trong một dành cho Meta platform (Facebook, Instagram, Threads), Tiktok. Bao gồm quản lý, tự động hoá, tải hàng loạt, tiện ích, ...",en:"A short description of Facebook All-in-one. Toolbox for Meta platform (Facebook, Instagram, Threads), TikTok. Includes management, automation, bulk download, utilities, ..."})},{label:e({en:"🌟 Is FB AIO Free?",vi:"🌟 FB AIO có miễn phí không?"}),children:e({vi:t.jsxs(h.Text,{children:["Có, bạn có thể tải miễn phí từ"," ",t.jsx("a",{href:r.FB_AIO.webstore,target:"_blank",children:"Chrome Store"})," ","với nhiều tính năng hữu ích. Một số"," ",t.jsx("a",{href:"#/vip",children:"Tính năng nâng cao (VIP)"})," cần trả phí."]}),en:t.jsxs(h.Text,{children:["Yes, you can download it for free from the"," ",t.jsx("a",{href:r.FB_AIO.webstore,target:"_blank",children:"Chrome Store"})," ","with many useful features. Some ",t.jsx("a",{href:"#/vip",children:"Advanced features (VIP)"})," ","require payment."]})})},{label:e({en:"📖 Are there any tutorials for FB AIO?",vi:"📖 FB AIO có hướng dẫn sử dụng không?"}),children:e({vi:t.jsxs(a,{direction:"vertical",children:["✨ Sắp có.",t.jsxs("ul",{children:[t.jsxs("li",{children:["🎥 Video hướng dẫn sử dụng và giới thiệu chức năng sẽ được đăng tải trên"," ",t.jsx("a",{href:r.FB_AIO.titok,target:"_blank",children:"kênh Tiktok"})," ","và"," ",t.jsx("a",{href:r.GroupFB,target:"_blank",children:"Group Facebook"})," ","trong thời gian tới."]}),t.jsxs("li",{children:["💡 Giao diện của FB AIO đã được tối ưu để đơn giản và dễ sử dụng nhất. Nếu gặp khó khăn, vui lòng đặt câu hỏi tại"," ",t.jsx("a",{href:r.GroupFB,target:"_blank",children:"Group Facebook"})]})]})]}),en:t.jsxs(a,{direction:"vertical",children:["✨ Coming soon.",t.jsxs("ul",{children:[t.jsxs("li",{children:["🎥 Instructional and feature introduction videos will be posted on our"," ",t.jsx("a",{href:r.FB_AIO.titok,target:"_blank",children:"Tiktok channel"})," ","and"," ",t.jsx("a",{href:r.GroupFB,target:"_blank",children:"Group Facebook"})," ","soon."]}),t.jsxs("li",{children:["💡 The FB AIO interface is designed to be as user-friendly as possible. If you have any questions, feel free to ask in the"," ",t.jsx("a",{href:r.GroupFB,target:"_blank",children:"Group Facebook"})]})]})]})})},{label:e({en:"🔥 What benefits does VIP offer?",vi:"🔥 VIP có đặc quyền gì?"}),children:e({vi:t.jsx("ol",{children:[t.jsxs(t.Fragment,{children:["🚀 ",t.jsx("b",{children:"Công cụ nâng cao"}),": Truy cập các"," ",t.jsx("a",{href:"#/vip",children:"tính năng VIP"})," không có trong bản miễn phí."]}),"🎯 *Hỗ trợ ưu tiên*: Được hỗ trợ nhanh chóng hơn cho mọi vấn đề hoặc thắc mắc.","⭐ *Yêu cầu chức năng*: Được ưu tiên hơn khi bạn yêu cầu làm thêm chức năng."].map((e=>t.jsx("li",{children:t.jsx(n,{text:e})})))}),en:t.jsx("ol",{children:[t.jsxs(t.Fragment,{children:["🚀 ",t.jsx("b",{children:"Advanced Tools"}),": Access ",t.jsx("a",{href:"#/vip",children:"VIP features"})," ","that are not available in the free version."]}),"🎯 *Priority Support*: Receive faster assistance for any issues or questions.","⭐ *Feature Requests*: Enjoy higher priority when requesting additional features."].map((e=>t.jsx("li",{children:t.jsx(n,{text:e})})))})})},{label:e({en:"💎 How to unlock VIP?",vi:"💎 Cách mở khoá VIP?"}),children:e({vi:t.jsx("ul",{children:[t.jsxs(t.Fragment,{children:["🛒 ",t.jsx("b",{children:"Mua hoặc Dùng thử Miễn phí"}),": Bạn có thể mua VIP hoặc dùng thử miễn phí. ",t.jsx("a",{href:"#/vip",children:"👉 Tại đây"})]}),"🆔 *Kích hoạt qua Facebook UID*: VIP được liên kết với UID (mã định danh) Facebook của bạn.","🔑 *Truy cập VIP*: Chỉ cần đăng nhập bằng tài khoản Facebook đúng, VIP sẽ tự động kích hoạt."].map((e=>t.jsx("li",{children:t.jsx(n,{text:e})})))}),en:t.jsx("ul",{children:[t.jsxs(t.Fragment,{children:["🛒 ",t.jsx("b",{children:"Buy or Try for Free"}),": You can purchase VIP or try it for free. ",t.jsx("a",{href:"#/vip",children:"👉 Click here"})]}),"🆔 *Activation via Facebook UID*: VIP is linked to your Facebook UID.","🔑 *Access VIP*: Simply log in with the correct Facebook account, and VIP will activate automatically."].map((e=>t.jsx("li",{children:t.jsx(n,{text:e})})))})})},{label:e({en:"👥 VIP for multiple accounts?",vi:"👥 Mua VIP cho nhiều nick?"}),children:e({vi:t.jsxs(a,{direction:"vertical",size:0,children:[t.jsx(h.Text,{children:"💵 Sẽ được giảm giá nếu bạn mua VIP cho nhiều nick facebook 1 lúc"}),t.jsxs(h.Text,{children:["Cứ thêm 1 nick sẽ được ",t.jsx(l,{color:"success",children:" giảm thêm 10%"})," cho nick đó, tối đa -50% /tháng"]}),t.jsx(x,{price:c.vi,postfix:"VND/tháng"})]}),en:t.jsxs(a,{direction:"vertical",size:0,children:[t.jsx(h.Text,{children:"💵 Will have discount when you buy VIP for multiple fb accounts."}),t.jsxs(h.Text,{children:["For each additional account, you'll receive an"," ",t.jsx(l,{color:"success",children:" extra 10% discount"})," for that account, up to a maximum of 50% off (per month)"]}),t.jsx(x,{price:c.en,postfix:"USD/month",fixed:1})]})})},{label:e({en:"✅ Buy VIP lifetime?",vi:"✅ Mua VIP vĩnh viễn?"}),children:e({vi:t.jsx("ul",{children:["💰 *Giá không cố định*: Giá VIP vĩnh viễn tăng hằng ngày do các tính năng mới liên tục được phát triển và bổ sung.","📈 *Nên mua sớm*: Mua sớm sẽ tiết kiệm hơn so với giá trong tương lai.","🚀 *Hỗ trợ đổi nick*: Khi nick cũ của bạn bị khoá, bị mất, bị hack,.. liên hệ admin để chuyển VIP sang nick mới",t.jsxs(t.Fragment,{children:["🔖 ",t.jsx("b",{children:"Giá vĩnh viễn hiện tại"}),": Chỉ"," ",t.jsxs(l,{color:"success",children:[o(20*c.vi,".")," VNĐ"]}),"bảo hành trọn đời (có thể thay đổi)."]}),t.jsxs(t.Fragment,{children:["Liên hệ"," ",t.jsx("a",{href:r.me.url,target:"_blank",children:"admin"})," ","để mua"]})].map((e=>t.jsx("li",{children:t.jsx(n,{text:e})})))}),en:t.jsx("ul",{children:["💰 *Price is not fixed*: The lifetime VIP price increases daily as new features are continuously developed and added.","📈 *Buy early*: Purchasing early will save you money compared to future prices.","🚀 *Account transfer support*: If your old account is locked, lost, or hacked, contact the admin to transfer VIP to a new account.",t.jsxs(t.Fragment,{children:["🔖 ",t.jsx("b",{children:"Current Lifetime price"}),": Only"," ",t.jsxs(l,{color:"success",children:[o(20*c.en,".")," USD"]}),"lifetime warranty (subject to change)."]}),t.jsxs(t.Fragment,{children:["Contact"," ",t.jsx("a",{href:r.me.url,target:"_blank",children:"admin"})," ","to buy"]})].map((e=>t.jsx("li",{children:t.jsx(n,{text:e})})))})})},{label:e({en:"👀 Is my privacy protected?",vi:"👀 Quyền riêng tư của tôi có được bảo đảm?"}),children:e({vi:t.jsxs(a,{direction:"vertical",children:["Có, quyền riêng tư của bạn là ưu tiên hàng đầu.",t.jsx("ol",{children:["🔒 Tất cả dữ liệu được lưu trữ hoàn toàn trên *máy tính của bạn*.","🚫 Chúng tôi không gửi bất kỳ *dữ liệu nhạy cảm* (token, cookie, ...) nào của bạn lên internet.","🆔 Chỉ sử dụng *UID Facebook của bạn* (không phải dữ liệu nhạy cảm) để lưu trạng thái VIP trên máy chủ của chúng tôi.","📡 Tất cả chức năng hoạt động bằng cách gửi API *trực tiếp tới Facebook*, không qua bất kỳ máy chủ trung gian nào."].map((e=>t.jsx("li",{children:t.jsx(n,{text:e})})))}),t.jsx("a",{href:"#/disclaimer",children:"Xem thêm"})]}),en:t.jsxs(h.Text,{children:["Yes, your privacy is our top priority.",t.jsx("ol",{children:["🔒 All data is stored entirely on *your personal computer*","🚫 We do not send any of your *sensitive data* (token, cookie, ...) to internet.","🆔 Only *your Facebook UID* (not sensitive data) is used to save VIP status on our server.","📡 All features work by sending API requests *directly to Facebook*, without involving any intermediary servers."].map((e=>t.jsx("li",{children:t.jsx(n,{text:e})})))}),t.jsx("a",{href:"#/disclaimer",children:"Read more"})]})})},{label:e({en:"🚫 You are temporarily blocked from using this feature?",vi:"🚫 Bạn tạm thời bị chặn sử dụng chức năng?"}),children:e({vi:t.jsx(a,{children:t.jsx("ul",{children:["❓ *Lý do*: Bạn có thể đã sử dụng một tính năng quá nhanh hoặc quá nhiều trong thời gian ngắn. Khiến Facebook nhận diện hoạt động bất thường và áp dụng chặn tạm thời.","🚧 *Ảnh hưởng*: Bạn sẽ không thể sử dụng tính năng bị chặn, cả trên FB AIO lẫn trực tiếp trên Facebook.","🛠️ *Cách xử lý*: Hãy dừng sử dụng tính năng đó trong khoảng 2-3 ngày, Facebook sẽ tự động gỡ chặn.","💡 *Lưu ý*: Hạn chế thao tác quá nhanh hoặc lặp lại nhiều lần để tránh bị chặn lần sau.","✅ *Tin tốt*: Trong thời gian đó bạn vẫn có thể sử dụng các chức năng khác."].map((e=>t.jsx("li",{children:t.jsx(n,{text:e})})))})}),en:t.jsx(a,{children:t.jsx("ul",{children:["❓ *Reason*: You may have used a feature too quickly or too frequently within a short period, causing Facebook to detect unusual activity and temporarily block it.","🚧 *Impact*: You will not be able to use the blocked feature, either on FB AIO or directly on Facebook.","🛠️ *Solution*: Avoid using the feature for about 2-3 days, and Facebook will automatically lift the block.","💡 *Note*: Try to avoid excessive or repetitive actions to prevent being blocked in the future.","✅ *Good News*: During this time, you can still use other features without any restrictions."].map((e=>t.jsx("li",{children:t.jsx(n,{text:e})})))})})})},{label:e({en:"🐞 What should I do when an error occur?",vi:"🐞 Tôi phải làm gì khi gặp Lỗi?"}),children:e({vi:t.jsxs(h.Text,{children:["Gửi thông báo lỗi tới một trong các kênh sau để được hỗ trợ:",t.jsxs("ul",{children:[t.jsxs("li",{children:["💬 Bình luận / gửi tin nhắn tới"," ",t.jsx("a",{href:r.GroupFB,target:"_blank",children:"Group Facebook"})," "]}),t.jsxs("li",{children:["📨 Gửi tin nhắn tới"," ",t.jsx("a",{href:r.FB_AIO.featureRequest,target:"_blank",children:"Telegram"})," ","hoặc"," ",t.jsx("a",{href:r.me.url,target:"_blank",children:"admin"})]})]})]}),en:t.jsxs(h.Text,{children:["Please report the error to one of the following channels to get support:",t.jsxs("ul",{children:[t.jsxs("li",{children:["💬 Comment / send message to"," ",t.jsx("a",{href:r.GroupFB,target:"_blank",children:"Group Facebook"})," "]}),t.jsxs("li",{children:["📨 Send message to"," ",t.jsx("a",{href:r.FB_AIO.featureRequest,target:"_blank",children:"Telegram"})," ","or"," ",t.jsx("a",{href:r.me.url,target:"_blank",children:"admin"})]})]})]})})}];return t.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",width:"100%",height:"100%"},children:[t.jsx(d,{align:"middle",style:{margin:"16px"},children:t.jsxs(h.Title,{level:3,style:{margin:0},children:[e({en:"FAQs: Frequently asked questions",vi:"FAQs: Câu hỏi thường gặp"})," 🤔"]})}),t.jsx(u,{items:s,accordion:!0,style:{width:600},expandIconPosition:"end"})]})}))}}}));
