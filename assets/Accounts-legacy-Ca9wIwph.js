System.register(["./index-legacy-DgDxnhpA.js","./MyApp-legacy--44lDAYA.js","./MyTable-legacy-DTDaLIa7.js","./Screen-legacy-DoE_mUbh.js","./index-legacy-BDlErKet.js","./row-legacy-vWQqcFVi.js","./index-legacy-C6Lgksty.js","./Collapse-legacy-yu6bSIxn.js","./index-legacy-DtTRmuRZ.js","./index-legacy-CCFyNVXu.js","./DownOutlined-legacy-Dv1to0sb.js","./TextArea-legacy-B9cfn5c-.js","./Table-legacy-CGeldQ1M.js","./List-legacy-DQsyQNx_.js","./index-legacy-B0kgt6UR.js","./index-legacy-B7D85tm3.js","./index-legacy-Daaohuto.js","./index-legacy-DnTQUxLr.js","./Dropdown-legacy-DZYgwR4s.js","./PurePanel-legacy-DCSDv3sl.js","./move-legacy-D4CLyVSa.js","./index-legacy-i3bw2b2W.js","./SearchOutlined-legacy-CuuS7WlB.js","./useBreakpoint-legacy-fAAoUt70.js","./useForceUpdate-legacy-CaDY0ldf.js","./Pagination-legacy-BNXwGNoJ.js","./index-legacy-D7Sgl99W.js","./col-legacy-D6No8P8C.js"],(function(e,c){"use strict";var n,i,t,a,r,l,s,o,h,p,g,d,m,u,f,x,v,y,C,w;return{setters:[e=>{n=e.aU,i=e.aJ,t=e.aK,a=e.r,r=e.aW,l=e.aG,s=e.cp,o=e.a_},e=>{h=e.e,p=e.t,g=e.T,d=e.S,m=e.I,u=e.ae},e=>{f=e.default},e=>{x=e.S},e=>{v=e.T},e=>{y=e.R},e=>{C=e.D},e=>{w=e.C},null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],execute:function(){e("default",(function(){const{ti:e}=n(),u=i(t.profile),[b,M]=h("AccountsStore.selected",-1),k=c[b],_=a.useRef(null);a.useEffect((()=>{b>=0&&_.current?.scrollIntoView?.({behavior:"smooth",block:"start"})}),[b]),a.useEffect((()=>{p("AccountsStore.onload")}),[]);const j=[{title:e({en:"Name",vi:"Tài khoản"}),dataIndex:"name",key:"name",render:e=>r.jsx("p",{style:{maxWidth:500},children:e})},{title:e({en:"Price (VND)",vi:"Giá (VND)"}),dataIndex:"price",key:"price",render:e=>r.jsx(v.Text,{strong:!0,children:e.toLocaleString()}),sorter:(e,c)=>e.price-c.price,width:150,align:"right"},...u?.uid===l.me.uid?[{title:e({en:"_Price",vi:"Giá gốc"}),dataIndex:"_price",key:"_price",render:(e,c)=>r.jsxs(v.Text,{type:"secondary",children:[s(e)," ",r.jsxs(g,{color:"success",children:["+",s((c.price-e)/2)]}),r.jsxs(g,{color:"warning",children:["-",s(c.price-e/2)]})]}),sorter:(e,c)=>e.price-e._price-(c.price-c._price),width:200}]:[],{title:e({en:"Buy",vi:"Mua"}),key:"buy",render:()=>r.jsx(o,{icon:r.jsx("i",{className:"fa-solid fa-cart-shopping"}),href:l.FB_AIO.accountStore,target:"_blank",children:e({en:"Buy",vi:"Mua"})}),width:100}];return r.jsxs(x,{mode:"center",children:[r.jsx(v.Title,{level:3,children:e({en:"Account Store",vi:"Cửa hàng Tài khoản"})}),r.jsx(y,{style:{paddingTop:15},justify:"center",gutter:[8,8],children:c.map(((c,n)=>{const i=b==n,t=Math.min(...c.accounts.map((e=>e.price)));return r.jsxs(d,{className:(i?"gradient-border":"")+" zoom-on-hover-trigger",direction:"vertical",align:"center",style:{cursor:"pointer"},onClick:()=>{p("AccountsStore.open"+e(c.name)),M(n)},size:0,children:[r.jsx(m,{src:c.icon,style:{width:100,height:100},preview:!1,className:"zoom-on-hover-item"}),r.jsx(v.Text,{strong:!0,children:c.name}),r.jsx(v.Text,{type:"secondary",children:s(t)})]},c.name)}))}),r.jsx("div",{ref:_,children:k&&r.jsxs(r.Fragment,{children:[r.jsx(C,{}),r.jsx(f,{searchable:!0,renderTitle:()=>r.jsx(v.Title,{level:2,style:{margin:0},children:e(c[b]?.name)}),data:k?.accounts||[],columns:j,pageSize:-1,size:"small",style:{width:1e3,maxWidth:"95vw"},keyExtractor:e=>e.name})]})}),r.jsx(C,{}),r.jsxs(d,{align:"center",direction:"vertical",children:[r.jsx(v.Title,{level:3,style:{margin:0,alignSelf:"center"},children:"FAQ"}),r.jsx(w,{items:[{label:e({en:"❓ What is the Account Store?",vi:"❓ Cửa hàng Tài khoản là gì?"}),children:r.jsxs(r.Fragment,{children:[e({en:"FB AIO provides accounts on various platforms at discounted prices. Contact us - Make a payment - Receive your account on the same day.",vi:"FB AIO cung cấp tài khoản trên nhiều nền tảng khác nhau với giá ưu đãi. Liên hệ - Chuyển khoản - Nhận tài khoản ngay trong ngày."}),r.jsx("br",{}),r.jsxs("a",{href:"https://www.facebook.com/groups/fbaio/posts/1585269628794386",target:"_blank",children:[e({en:"FB Post",vi:"Post giới thiệu"})," ",r.jsx("i",{className:"fa-solid fa-up-right-from-square"})]})]})},{label:e({en:"🤝 Where do the accounts come from?",vi:"🤝 Nguồn gốc các tài khoản?"}),children:e({en:"FB AIO only acts as an intermediary. The accounts are offered by third-party sellers, and FB AIO does not manage these accounts.",vi:"FB AIO chỉ là trung gian giới thiệu, nguồn tài khoản được chào bán từ bên thứ 3, FB AIO không quản lý các tài khoản này."})},{label:e({en:"✅ Warranty?",vi:"✅ Chế độ bảo hành?"}),children:e({en:"You will be connected to the seller to receive warranty benefits or get your questions answered.",vi:"Bạn sẽ được kết nối tới người bán để huởng các quyền lợi bảo hành hoặc trả lời câu hỏi."})},{label:e({en:"📞 Contact?",vi:"📞 Liên hệ?"}),children:r.jsxs("ul",{children:[r.jsx("li",{children:r.jsx("a",{href:l.FB_AIO.accountStore,target:"_blank",children:"FB Chat"})}),r.jsx("li",{children:r.jsx("a",{href:l.FB_AIO.accountStoreTelegram,target:"_blank",children:"Telegram"})})]})}],accordion:!0,expandIconPosition:"end",style:{marginBottom:200,maxWidth:500}})]})]})}));const c=[{name:"Facebook",icon:"data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2048%2048'%20width='48px'%20height='48px'%3e%3clinearGradient%20id='Ld6sqrtcxMyckEl6xeDdMa'%20x1='9.993'%20x2='40.615'%20y1='9.993'%20y2='40.615'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20offset='0'%20stop-color='%232aa4f4'/%3e%3cstop%20offset='1'%20stop-color='%23007ad9'/%3e%3c/linearGradient%3e%3cpath%20fill='url(%23Ld6sqrtcxMyckEl6xeDdMa)'%20d='M24,4C12.954,4,4,12.954,4,24s8.954,20,20,20s20-8.954,20-20S35.046,4,24,4z'/%3e%3cpath%20fill='%23fff'%20d='M26.707,29.301h5.176l0.813-5.258h-5.989v-2.874c0-2.184,0.714-4.121,2.757-4.121h3.283V12.46%20c-0.577-0.078-1.797-0.248-4.102-0.248c-4.814,0-7.636,2.542-7.636,8.334v3.498H16.06v5.258h4.948v14.452%20C21.988,43.9,22.981,44,24,44c0.921,0,1.82-0.084,2.707-0.204V29.301z'/%3e%3c/svg%3e",accounts:[{name:"Via việt clone - 50bb đến 100bb - 1-5 bài viết",price:5e4,_price:3e4},{name:"Via việt bài viết - 300 đến 1k bạn bè - trên 20 bài viết",price:2e5,_price:13e4},{name:"Via việt bài viết - trên 1k bạn bè - trên 50 bài viết",price:3e5,_price:24e4},{name:"Via việt bài viết - trên 1k bạn bè - trên 60 bài viết",price:34e4,_price:28e4},{name:"Via việt bài viết - trên 3k bạn bè - trên 100 bài viết",price:42e4,_price:35e4}]},{name:"Zalo",icon:u,accounts:[{name:"Zalo XÁC MINH DANH TÍNH - XÁC THỰC CCCD. Random tính năng. Nick nào chặn tính năng ngâm nick 24-72h. Đầy đủ thông tin. Bảo hành sai pass, login lần đầu 1 đổi 1. Hỗ trợ gỡ XM vĩnh viễn",price:35e4,_price:28e4},{name:"ZALO cổ 1-5 năm, Đăng nhập trực tiếp PC (máy tính). Chưa cập nhật thông tin. Random bạn bè (có link đi kèm), không báo xấu, full tính năng, ... Bảo hành sai pass, login lỗi 1 đổi 1, Hỗ trợ định danh khi nick bị vô hiệu hoá",price:75e4,_price:65e4},{name:"Zalo THU MUA NGƯỜI DÙNG THẬT - Đã Xác Minh CCCD. Không bị chặn tính năng. Random bạn bè. Đầy đủ thông tin, giữ sim. Bảo hành sai pass, login lần đầu 1 đổi 1. Hỗ trợ gỡ xác thực mãi mãi !",price:45e4,_price:35e4},{name:"Zalo Vip - NICK NGƯỜI DÙNG THẬT. Đã Xác Thực CCCD. acc từ 1-5 năm. Không bị chặn tính năng. Có bạn bè, có bài đăng random. Đầy đủ thông tin. bảo hành sai pass. login lần đầu 1 đổi 1. Hỗ trợ gỡ xác thực mãi mãi",price:75e4,_price:65e4},{name:"Zalo THU MUA NGƯỜI DÙNG THẬT - Đã Xác Minh CCCD. Không bị chặn tính năng.random bạn bè Đầy đủ thông tin, giữ sim. Bảo hành sai pass,login lần đầu 1 đổi 1. Hỗ trợ gỡ xác thực mãi mãi !",price:45e4,_price:35e4},{name:"Zalo Vip - NICK NGƯỜI DÙNG THẬT. Đã Xác Thực CCCD.acc từ 1-5 năm. Không bị chặn tính năng. Có bạn bè, có bài đăng random. Đầy đủ thông tin. bảo hành sai pass. login lần đầu 1 đổi 1. Hỗ trợ gỡ xác thực mãi mãi",price:75e4,_price:65e4},{name:"ZALO 7-15day . random AVATAR, đầy đủ tính năng cover. Bảo hành sai pass login 1 đổi 1",price:25e4,_price:15e4},{name:"ZALO CỔ 6t-5năm. Random 5bb-100bb, Random bài đăng cổ. Full tính năng. Đầy đủ thông tin avatar, cover,... Bảo hành login lỗi 1 đổi 1, Hỗ Trợ xác thực khi bị VHH",price:55e4,_price:43e4},{name:"Acc Zalo random 1-5 ngày. Full tính năng. Bảo hành sai pass, login lần đầu 1 đổi 1. Bảo hành sim, không mất pass ( khách hàng lưu ý : nick không đăng nhập trực tiếp trên pc, khách hàng đăng nhập trên điện thoại quét mã lên pc )",price:15e4,_price:8e4}]},{name:"Telegram",icon:"data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2048%2048'%20width='48px'%20height='48px'%3e%3clinearGradient%20id='BiF7D16UlC0RZ_VqXJHnXa'%20x1='9.858'%20x2='38.142'%20y1='9.858'%20y2='38.142'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20offset='0'%20stop-color='%2333bef0'/%3e%3cstop%20offset='1'%20stop-color='%230a85d9'/%3e%3c/linearGradient%3e%3cpath%20fill='url(%23BiF7D16UlC0RZ_VqXJHnXa)'%20d='M44,24c0,11.045-8.955,20-20,20S4,35.045,4,24S12.955,4,24,4S44,12.955,44,24z'/%3e%3cpath%20d='M10.119,23.466c8.155-3.695,17.733-7.704,19.208-8.284c3.252-1.279,4.67,0.028,4.448,2.113%20c-0.273,2.555-1.567,9.99-2.363,15.317c-0.466,3.117-2.154,4.072-4.059,2.863c-1.445-0.917-6.413-4.17-7.72-5.282%20c-0.891-0.758-1.512-1.608-0.88-2.474c0.185-0.253,0.658-0.763,0.921-1.017c1.319-1.278,1.141-1.553-0.454-0.412%20c-0.19,0.136-1.292,0.935-1.745,1.237c-1.11,0.74-2.131,0.78-3.862,0.192c-1.416-0.481-2.776-0.852-3.634-1.223%20C8.794,25.983,8.34,24.272,10.119,23.466z'%20opacity='.05'/%3e%3cpath%20d='M10.836,23.591c7.572-3.385,16.884-7.264,18.246-7.813c3.264-1.318,4.465-0.536,4.114,2.011%20c-0.326,2.358-1.483,9.654-2.294,14.545c-0.478,2.879-1.874,3.513-3.692,2.337c-1.139-0.734-5.723-3.754-6.835-4.633%20c-0.86-0.679-1.751-1.463-0.71-2.598c0.348-0.379,2.27-2.234,3.707-3.614c0.833-0.801,0.536-1.196-0.469-0.508%20c-1.843,1.263-4.858,3.262-5.396,3.625c-1.025,0.69-1.988,0.856-3.664,0.329c-1.321-0.416-2.597-0.819-3.262-1.078%20C9.095,25.618,9.075,24.378,10.836,23.591z'%20opacity='.07'/%3e%3cpath%20fill='%23fff'%20d='M11.553,23.717c6.99-3.075,16.035-6.824,17.284-7.343c3.275-1.358,4.28-1.098,3.779,1.91%20c-0.36,2.162-1.398,9.319-2.226,13.774c-0.491,2.642-1.593,2.955-3.325,1.812c-0.833-0.55-5.038-3.331-5.951-3.984%20c-0.833-0.595-1.982-1.311-0.541-2.721c0.513-0.502,3.874-3.712,6.493-6.21c0.343-0.328-0.088-0.867-0.484-0.604%20c-3.53,2.341-8.424,5.59-9.047,6.013c-0.941,0.639-1.845,0.932-3.467,0.466c-1.226-0.352-2.423-0.772-2.889-0.932%20C9.384,25.282,9.81,24.484,11.553,23.717z'/%3e%3c/svg%3e",accounts:[{name:"Telegram new chỉ tdata",price:55e3,_price:35e3},{name:"Telegram new chỉ tdata - tài khoản đã ngâm 6 tháng",price:13e4,_price:1e5},{name:"Telegram new chỉ tdata - tài khoản đã ngâm 9 tháng",price:16e4,_price:128e3},{name:"Telegram new tdata - session - script web",price:6e4,_price:43e3},{name:"Telegram 2023 tdata - session",price:4e5,_price:32e4},{name:"Telegram 15-60 ngày tdata - session",price:78e3,_price:53e3}]},{name:"WhatsApp",icon:"data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2048%2048'%20width='48px'%20height='48px'%20fill-rule='evenodd'%20clip-rule='evenodd'%3e%3cpath%20fill='%23fff'%20d='M4.868,43.303l2.694-9.835C5.9,30.59,5.026,27.324,5.027,23.979C5.032,13.514,13.548,5,24.014,5c5.079,0.002,9.845,1.979,13.43,5.566c3.584,3.588,5.558,8.356,5.556,13.428c-0.004,10.465-8.522,18.98-18.986,18.98c-0.001,0,0,0,0,0h-0.008c-3.177-0.001-6.3-0.798-9.073-2.311L4.868,43.303z'/%3e%3cpath%20fill='%23fff'%20d='M4.868,43.803c-0.132,0-0.26-0.052-0.355-0.148c-0.125-0.127-0.174-0.312-0.127-0.483l2.639-9.636c-1.636-2.906-2.499-6.206-2.497-9.556C4.532,13.238,13.273,4.5,24.014,4.5c5.21,0.002,10.105,2.031,13.784,5.713c3.679,3.683,5.704,8.577,5.702,13.781c-0.004,10.741-8.746,19.48-19.486,19.48c-3.189-0.001-6.344-0.788-9.144-2.277l-9.875,2.589C4.953,43.798,4.911,43.803,4.868,43.803z'/%3e%3cpath%20fill='%23cfd8dc'%20d='M24.014,5c5.079,0.002,9.845,1.979,13.43,5.566c3.584,3.588,5.558,8.356,5.556,13.428c-0.004,10.465-8.522,18.98-18.986,18.98h-0.008c-3.177-0.001-6.3-0.798-9.073-2.311L4.868,43.303l2.694-9.835C5.9,30.59,5.026,27.324,5.027,23.979C5.032,13.514,13.548,5,24.014,5%20M24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974%20M24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974%20M24.014,4C24.014,4,24.014,4,24.014,4C12.998,4,4.032,12.962,4.027,23.979c-0.001,3.367,0.849,6.685,2.461,9.622l-2.585,9.439c-0.094,0.345,0.002,0.713,0.254,0.967c0.19,0.192,0.447,0.297,0.711,0.297c0.085,0,0.17-0.011,0.254-0.033l9.687-2.54c2.828,1.468,5.998,2.243,9.197,2.244c11.024,0,19.99-8.963,19.995-19.98c0.002-5.339-2.075-10.359-5.848-14.135C34.378,6.083,29.357,4.002,24.014,4L24.014,4z'/%3e%3cpath%20fill='%2340c351'%20d='M35.176,12.832c-2.98-2.982-6.941-4.625-11.157-4.626c-8.704,0-15.783,7.076-15.787,15.774c-0.001,2.981,0.833,5.883,2.413,8.396l0.376,0.597l-1.595,5.821l5.973-1.566l0.577,0.342c2.422,1.438,5.2,2.198,8.032,2.199h0.006c8.698,0,15.777-7.077,15.78-15.776C39.795,19.778,38.156,15.814,35.176,12.832z'/%3e%3cpath%20fill='%23fff'%20fill-rule='evenodd'%20d='M19.268,16.045c-0.355-0.79-0.729-0.806-1.068-0.82c-0.277-0.012-0.593-0.011-0.909-0.011c-0.316,0-0.83,0.119-1.265,0.594c-0.435,0.475-1.661,1.622-1.661,3.956c0,2.334,1.7,4.59,1.937,4.906c0.237,0.316,3.282,5.259,8.104,7.161c4.007,1.58,4.823,1.266,5.693,1.187c0.87-0.079,2.807-1.147,3.202-2.255c0.395-1.108,0.395-2.057,0.277-2.255c-0.119-0.198-0.435-0.316-0.909-0.554s-2.807-1.385-3.242-1.543c-0.435-0.158-0.751-0.237-1.068,0.238c-0.316,0.474-1.225,1.543-1.502,1.859c-0.277,0.317-0.554,0.357-1.028,0.119c-0.474-0.238-2.002-0.738-3.815-2.354c-1.41-1.257-2.362-2.81-2.639-3.285c-0.277-0.474-0.03-0.731,0.208-0.968c0.213-0.213,0.474-0.554,0.712-0.831c0.237-0.277,0.316-0.475,0.474-0.791c0.158-0.317,0.079-0.594-0.04-0.831C20.612,19.329,19.69,16.983,19.268,16.045z'%20clip-rule='evenodd'/%3e%3c/svg%3e",accounts:[{name:"Whatsapp +84 (Việt)",price:15e4,_price:1e5},{name:"whatsapp +1 (Mỹ)",price:2e5,_price:12e4},{name:"whatsapp +44 (Anh)",price:2e5,_price:12e4}]},{name:"Youtube",icon:"data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2048%2048'%20width='48px'%20height='48px'%3e%3cpath%20fill='%23FF3D00'%20d='M43.2,33.9c-0.4,2.1-2.1,3.7-4.2,4c-3.3,0.5-8.8,1.1-15,1.1c-6.1,0-11.6-0.6-15-1.1c-2.1-0.3-3.8-1.9-4.2-4C4.4,31.6,4,28.2,4,24c0-4.2,0.4-7.6,0.8-9.9c0.4-2.1,2.1-3.7,4.2-4C12.3,9.6,17.8,9,24,9c6.2,0,11.6,0.6,15,1.1c2.1,0.3,3.8,1.9,4.2,4c0.4,2.3,0.9,5.7,0.9,9.9C44,28.2,43.6,31.6,43.2,33.9z'/%3e%3cpath%20fill='%23FFF'%20d='M20%2031L20%2017%2032%2024z'/%3e%3c/svg%3e",accounts:[{name:"Nâng premium bằng mail khách - 1 tháng",price:8e4,_price:5e4},{name:"Nâng premium bằng mail khách - 3 tháng",price:14e4,_price:1e5},{name:"Nâng premium bằng mail khách - 6 tháng",price:16e4,_price:13e4},{name:"Nâng premium bằng mail khách - 12 tháng",price:31e4,_price:24e4}]},{name:"Netflix",icon:"data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2048%2048'%20width='48px'%20height='48px'%3e%3cpath%20fill='%23F44336'%20d='M5%2018c.7%200%201.3%200%202%200%200%204.1%200%208.1%200%2012.2-.8.1-1.6.2-2.3.3-1-2.5-2.7-6.8-2.7-6.8S2%2028%202%2030.8c.4%200-.2%200-2%20.3%200-4.3%200-8.7%200-13%20.8%200%202%200%202%200l3%207.3C5%2025.4%205%2020.8%205%2018zM14.7%2020c0-.6%200-1.4%200-2-1.9%200-3.8%200-5.7%200%200%204%200%208%200%2012%201.9-.2%203.8-.4%205.7-.6%200-.6%200-1.4%200-2-1.2.1-2.4.1-3.7.4%200-1.1%200-1.7%200-2.8.9%200%202.1%200%203%200%200-.6%200-1.4%200-2-.9%200-2.1%200-3%200%200-1.1%200-1.9%200-3C11.6%2020.1%2014.2%2020.1%2014.7%2020zM16%2020c.1%200%201.9%200%202%200%200%203.2%200%206%200%209.2.7%200%201.3%200%202-.1%200-3.2%200-5.9%200-9.1.7%200%201.3%200%202%200%200-.6%200-1.4%200-2-2.1%200-3.9%200-6%200C16%2018.6%2016%2019.4%2016%2020zM28.6%2018c-1.9%200-3.7%200-5.6%200%200%203.8%200%207.2%200%2011%20.2%200%20.4%200%20.6%200%20.4%200%20.9%200%201.4%200%200-1.6%200-2.4%200-4%20.1%200%202.4%200%202.7%200%200-.6%200-1.4%200-2-.3%200-2.6%200-2.7%200%200-1%200-2%200-3%20.2%200%203.1%200%203.6%200C28.6%2019.5%2028.6%2018.6%2028.6%2018zM32%2027.5c0-3.3%200-6.2%200-9.5-.7%200-1.3%200-2%200%200%203.8%200%207.4%200%2011.2%201.8.1%203.6.2%205.4.4%200-.6%200-1.3%200-1.9C34.3%2027.6%2033.1%2027.5%2032%2027.5zM37%2029.7c.7.1%201.3.1%202%20.2%200-4%200-7.9%200-11.9-.7%200-1.3%200-2%200C37%2022%2037%2025.8%2037%2029.7zM45.4%2024.2c.9-2%201.7-4%202.6-6.1-.7%200-1.5%200-2.2%200-.5%201.3-.9%202.2-1.4%203.4-.5-1.3-.8-2.2-1.3-3.4-.7%200-1.5%200-2.2%200%20.8%202%201.5%204%202.4%206.1-.9%202-1.7%204-2.6%206%20.7.1%201.4.2%202.1.3.5-1.3%201-2.2%201.5-3.5.5%201.4%201%202.4%201.5%203.8.7.1%201.6.2%202.3.3C47.1%2028.7%2046.2%2026.3%2045.4%2024.2z'/%3e%3c/svg%3e",accounts:[{name:"Netflix Premium - Chính Chủ - Ultra HD 4K - 1 User - 1 Tháng",price:11e4,_price:65e3},{name:"Netflix Premium - Giá Rẻ - Ultra HD 4K - 1 Tháng",price:8e4,_price:5e4},{name:"Netflix Standard - Giá Rẻ - HD - 1 Tháng",price:5e4,_price:3e4}]},{name:"BM",icon:"data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='utf-8'?%3e%3c!--%20Uploaded%20to:%20SVG%20Repo,%20www.svgrepo.com,%20Generator:%20SVG%20Repo%20Mixer%20Tools%20--%3e%3csvg%20width='800px'%20height='800px'%20viewBox='0%200%2048%2048'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20width='48'%20height='48'%20fill='white'%20fill-opacity='0.01'/%3e%3ccircle%20cx='24'%20cy='24'%20r='20'%20fill='%232F88FF'%20stroke='%23000000'%20stroke-width='4'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M38%2038L35%2035'%20stroke='%23000000'%20stroke-width='4'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M10%2010L13%2013'%20stroke='%23000000'%20stroke-width='4'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M21.1429%2028L18%2017L14.8571%2028H21.1429Z'%20fill='%232F88FF'/%3e%3cpath%20d='M14%2031L14.8571%2028M22%2031L21.1429%2028M21.1429%2028L18%2017L14.8571%2028M21.1429%2028H14.8571'%20stroke='white'%20stroke-width='4'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M35%2024C35%2029%2031.4183%2031%2027%2031V17C31.4183%2017%2035%2019%2035%2024Z'%20fill='%232F88FF'%20stroke='white'%20stroke-width='4'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e",accounts:[{name:"Fb ADS BM chia sẻ link 250$ change all bao back",price:35e4,_price:27e4},{name:"Fb ADS BM chia sẻ link 250$ ( VND , +7 , PH ) Bao Add thẻ",price:46e4,_price:357e3},{name:" BM chia sẻ link 250$  ( VND , +7 , PH ) Bao Camp HD",price:75e4,_price:6e5},{name:"BM 250 kháng XMDT ẨN TÍCH 0 ngâm 810 tháng tụt từ NOLIMIT",price:3e6,_price:23e5},{name:"BM 250 trống 5 ngâm 4 tháng",price:29e5,_price:25e5},{name:"BM 250 trống 4 tụt từ NOLIMIT",price:36e5,_price:29e5},{name:"BM 250 tụt từ NOLIMIT",price:36e5,_price:3e6},{name:"BM XMDN BM 350 CHƯA TẠO TKQC giao full via gốc",price:15e5,_price:12e5},{name:"BM 50 ngâm ( test tut )",price:2e4,_price:1e4},{name:"BM 50 cổ ( 2020 - 2022 ) siêu khỏe",price:13e4,_price:7e4},{name:"BM 350 ngâm siêu cứng 1 đến 7 tháng",price:3e4,_price:21e3},{name:"BM 350 CỔ (2019 - 2022 ) SIÊU NGON",price:15e4,_price:9e4},{name:"BM 350 CỔ 1 TK (2019 - 2022)",price:16e4,_price:9e4}]},{name:"Instagram",icon:"data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2048%2048'%20width='48px'%20height='48px'%3e%3cradialGradient%20id='yOrnnhliCrdS2gy~4tD8ma'%20cx='19.38'%20cy='42.035'%20r='44.899'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20offset='0'%20stop-color='%23fd5'/%3e%3cstop%20offset='.328'%20stop-color='%23ff543f'/%3e%3cstop%20offset='.348'%20stop-color='%23fc5245'/%3e%3cstop%20offset='.504'%20stop-color='%23e64771'/%3e%3cstop%20offset='.643'%20stop-color='%23d53e91'/%3e%3cstop%20offset='.761'%20stop-color='%23cc39a4'/%3e%3cstop%20offset='.841'%20stop-color='%23c837ab'/%3e%3c/radialGradient%3e%3cpath%20fill='url(%23yOrnnhliCrdS2gy~4tD8ma)'%20d='M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20%20c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20%20C42.014,38.383,38.417,41.986,34.017,41.99z'/%3e%3cradialGradient%20id='yOrnnhliCrdS2gy~4tD8mb'%20cx='11.786'%20cy='5.54'%20r='29.813'%20gradientTransform='matrix(1%200%200%20.6663%200%201.849)'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20offset='0'%20stop-color='%234168c9'/%3e%3cstop%20offset='.999'%20stop-color='%234168c9'%20stop-opacity='0'/%3e%3c/radialGradient%3e%3cpath%20fill='url(%23yOrnnhliCrdS2gy~4tD8mb)'%20d='M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20%20c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20%20C42.014,38.383,38.417,41.986,34.017,41.99z'/%3e%3cpath%20fill='%23fff'%20d='M24,31c-3.859,0-7-3.14-7-7s3.141-7,7-7s7,3.14,7,7S27.859,31,24,31z%20M24,19c-2.757,0-5,2.243-5,5%20s2.243,5,5,5s5-2.243,5-5S26.757,19,24,19z'/%3e%3ccircle%20cx='31.5'%20cy='16.5'%20r='1.5'%20fill='%23fff'/%3e%3cpath%20fill='%23fff'%20d='M30,37H18c-3.859,0-7-3.14-7-7V18c0-3.86,3.141-7,7-7h12c3.859,0,7,3.14,7,7v12%20C37,33.86,33.859,37,30,37z%20M18,13c-2.757,0-5,2.243-5,5v12c0,2.757,2.243,5,5,5h12c2.757,0,5-2.243,5-5V18c0-2.757-2.243-5-5-5H18z'/%3e%3c/svg%3e",accounts:[{name:"Instagram clone ngoại - có 2fa - reg phone mail - đã qua 282",price:3e4,_price:2e4},{name:"instagram clone ngoại - có 2fa - 1 đến 3 bài viết - đã qua 282",price:3e4,_price:2e4},{name:"instagram clone ngoại - có 2fa - 9 đến 15 bài viết - đã qua 282",price:4e4,_price:25e3},{name:"instagram clone việt - có 2fa - có avt - veri phone - 10fl - 3 bài viết - đã qua 282",price:35e3,_price:15e3},{name:"instagram acc cổ việt 2022-2023 - 8 đến 20 bài viết (bắt buộc login cookie)",price:3e4,_price:15e3}]},{name:"Discord",icon:"data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2048%2048'%20width='48px'%20height='48px'%3e%3cpath%20fill='%238c9eff'%20d='M40,12c0,0-4.585-3.588-10-4l-0.488,0.976C34.408,10.174,36.654,11.891,39,14c-4.045-2.065-8.039-4-15-4s-10.955,1.935-15,4c2.346-2.109,5.018-4.015,9.488-5.024L18,8c-5.681,0.537-10,4-10,4s-5.121,7.425-6,22c5.162,5.953,13,6,13,6l1.639-2.185C13.857,36.848,10.715,35.121,8,32c3.238,2.45,8.125,5,16,5s12.762-2.55,16-5c-2.715,3.121-5.857,4.848-8.639,5.815L33,40c0,0,7.838-0.047,13-6C45.121,19.425,40,12,40,12z%20M17.5,30c-1.933,0-3.5-1.791-3.5-4c0-2.209,1.567-4,3.5-4s3.5,1.791,3.5,4C21,28.209,19.433,30,17.5,30z%20M30.5,30c-1.933,0-3.5-1.791-3.5-4c0-2.209,1.567-4,3.5-4s3.5,1.791,3.5,4C34,28.209,32.433,30,30.5,30z'/%3e%3c/svg%3e",accounts:[{name:"Tài khoản discord người dùng thật 2015-2023 (random)",price:7e4,_price:5e4},{name:"Tài khoản discord người dùng 2019",price:1e5,_price:6e4},{name:"Tài khoản discord 2017",price:12e4,_price:8e4},{name:"Tài khoản discodrd 2018",price:13e4,_price:85e3}]},{name:"Proxy",icon:"data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='iso-8859-1'?%3e%3c!--%20Uploaded%20to:%20SVG%20Repo,%20www.svgrepo.com,%20Generator:%20SVG%20Repo%20Mixer%20Tools%20--%3e%3csvg%20version='1.1'%20id='Layer_1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20viewBox='0%200%20496%20496'%20xml:space='preserve'%3e%3cpath%20style='fill:%239443B5;'%20d='M248,298.4L248,298.4L248,298.4L248,298.4L248,298.4c-8-0.8-16-2.4-24-4v126.4c0,13.6,10.4,24,24,24%20s24-10.4,24-24V294.4C264,296,256,297.6,248,298.4z'/%3e%3cpath%20style='fill:%238632AD;'%20d='M248,298.4L248,298.4L248,298.4L248,298.4c-8-0.8-16-2.4-24-4V376h48v-81.6%20C264,296,256,297.6,248,298.4L248,298.4z'/%3e%3cpath%20style='fill:%23AEBFC1;'%20d='M398.4,456H97.6c-13.6,0-24-10.4-24-24s10.4-24,24-24h301.6c13.6,0,24,10.4,24,24%20C422.4,445.6,412,456,398.4,456z'/%3e%3cpath%20style='fill:%23BECBCC;'%20d='M73.6,432c0-13.6,10.4-24,24-24h301.6c13.6,0,24,10.4,24,24'/%3e%3cpath%20style='fill:%239443B5;'%20d='M496,317.6c0,13.6-13.6,26.4-26.4,26.4H26.4C13.6,344,0,330.4,0,317.6V64c0-13.6,13.6-24,26.4-24%20h442.4c13.6,0,27.2,10.4,27.2,24V317.6z'/%3e%3cpath%20style='fill:%239D4FC1;'%20d='M469.6,40H26.4C13.6,40,0,50.4,0,64v214.4C0,292,13.6,304,26.4,304h442.4c13.6,0,26.4-12,26.4-25.6%20V64C496,50.4,482.4,40,469.6,40z'/%3e%3cpath%20style='fill:%23A458CC;'%20d='M496,280V64c0-13.6-13.6-24-26.4-24H26.4C13.6,40,0,50.4,0,64'/%3e%3crect%20x='160'%20y='408'%20style='fill:%239443B5;'%20width='176'%20height='48'/%3e%3crect%20x='160'%20y='408'%20style='fill:%239D4FC1;'%20width='176'%20height='24'/%3e%3cg%3e%3cpath%20style='fill:%238632AD;'%20d='M192,144h-15.2c-3.2,0-6.4,0-7.2,3.2L151.2,200c-1.6,4.8-3.2,8.8-4.8,13.6c-1.6-4.8-2.4-9.6-4-14.4%20L125.6,148c-0.8-3.2-4-4-8-4h-15.2c-2.4,0-4.8-0.8-6.4,1.6c-1.6,2.4-1.6,4-0.8,6.4l35.2,107.2c0.8,3.2,4,4.8,8,4.8h15.2%20c3.2,0,6.4-2.4,7.2-5.6l38.4-108c0.8-2.4,0.8-3.2-0.8-5.6C196.8,143.2,194.4,144,192,144z'/%3e%3cpath%20style='fill:%238632AD;'%20d='M246.4,139.2c-9.6,0-20.8,0.8-29.6,2.4c-4,0.8-8,4-8,8V256c0,4.8,7.2,8,11.2,8h13.6%20c4.8,0,6.4-3.2,6.4-8v-34.4c16,0.8,33.6-4.8,42.4-14.4c7.2-7.2,11.2-16.8,11.2-28.8s-4-21.6-12-28.8%20C273.6,143.2,261.6,139.2,246.4,139.2z%20M264,180c0,9.6-7.2,15.2-20,15.2c-1.6,0-4,0-4,0v-28c0,0,4,0,5.6,0%20C263.2,166.4,264,176,264,180z'/%3e%3cpath%20style='fill:%238632AD;'%20d='M393.6,144h-12.8c-4.8,0-4.8,0-4.8,4v44.8c0,4-1.6,7.2-1.6,10.4c-0.8-1.6-3.2-4-4-5.6l-35.2-52.8%20c-1.6-1.6-4.8-0.8-7.2-0.8h-15.2c-4.8,0-8.8,0-8.8,4v108c0,4.8,4,8,8.8,8h12.8c4.8,0,10.4-3.2,10.4-8v-46.4c0-4-1.6-8-1.6-12%20c1.6,2.4,2.4,4.8,4,8L372,260c1.6,2.4,4,4,6.4,4h14.4c4.8,0,6.4-3.2,6.4-8V148C400,144,397.6,144,393.6,144z'/%3e%3c/g%3e%3cg%3e%3cpath%20style='fill:%23FFFFFF;'%20d='M192,120h-15.2c-3.2,0-6.4,3.2-7.2,6.4L151.2,180c-1.6,4.8-3.2,9.6-4.8,14.4%20c-1.6-4.8-2.4-8.8-4-13.6l-16.8-54.4c-0.8-3.2-4-6.4-8-6.4h-15.2c-2.4,0-4.8,2.4-6.4,4.8s-1.6,5.6-0.8,8l35.2,108.8%20c0.8,3.2,4,6.4,8,6.4h15.2c3.2,0,6.4-3.2,7.2-6.4l38.4-108c0.8-2.4,0.8-6.4-0.8-8.8C196.8,122.4,194.4,120,192,120z'/%3e%3cpath%20style='fill:%23FFFFFF;'%20d='M246.4,121.6c-9.6,0-20.8,0.8-29.6,2.4c-4,0.8-8,4-8,8v106.4c0,4.8,7.2,9.6,11.2,9.6h13.6%20c4.8,0,6.4-5.6,6.4-9.6V204c16,0.8,33.6-4.8,42.4-14.4c7.2-7.2,11.2-16.8,11.2-28.8s-4-21.6-12-28.8%20C273.6,125.6,261.6,121.6,246.4,121.6z%20M264,161.6c0,9.6-7.2,15.2-20,15.2c-1.6,0-4,0-4,0v-28c0,0,4,0,5.6,0%20C263.2,148.8,264,158.4,264,161.6z'/%3e%3cpath%20style='fill:%23FFFFFF;'%20d='M392,120h-16.8c-4.8,0-7.2,5.6-7.2,10.4v44.8c0,0.8,0,0.8,0,1.6l-32.8-52c-1.6-2.4-4.8-4.8-7.2-4.8%20h-15.2c-4.8,0-8.8,5.6-8.8,10.4v108c0,4.8,4,9.6,8.8,9.6h12.8c4.8,0,10.4-5.6,10.4-9.6v-56c0.8,1.6,1.6,3.2,3.2,5.6l33.6,56%20c1.6,2.4,4,4.8,6.4,4.8h14.4c4.8,0,6.4-5.6,6.4-9.6V130.4C400,125.6,396.8,120,392,120z'/%3e%3c/g%3e%3c/svg%3e",accounts:[{name:"Proxy Tĩnh",price:5e4,_price:3e4},{name:"Proxy Xoay",price:5e4,_price:3e4}]}]}}}));
