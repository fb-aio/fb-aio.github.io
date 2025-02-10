import{aK as l,r as f,aM as o,b0 as a}from"./index-Cl5zvECE.js";import{t as s,B as d,q as m}from"./MyApp-MWa74BZS.js";import{R as h}from"./row-Ce9R-FFN.js";import{T as r}from"./index-DGaF8Pk-.js";import{L as i}from"./index-qaAouqGd.js";import"./responsiveObserver-C59psHcs.js";import"./TextArea-VDCbegm4.js";import"./Pagination-DpygRt3E.js";import"./useBreakpoint-CPUsOx0y.js";import"./index-CoQ_gU2f.js";import"./PurePanel-kNhfzRO_.js";import"./move-DMmDJGo1.js";import"./DownOutlined-DfRI2dhp.js";import"./SearchOutlined-BfbpT0ue.js";const k=[{devider:!0,name:{en:"Friends",vi:"Bạn bè"}},{icon:o.jsx("i",{className:"fa-solid fa-user-plus fa-xl"}),name:{en:"Add friends history",vi:"Lịch sử kết bạn"},description:{en:"Friends that you have added on facebook",vi:"Bạn bè bạn đã thêm trên facebook"},link:"https://www.facebook.com/me/allactivity?category_key=FRIENDS"},{icon:o.jsx("i",{className:"fa-solid fa-user-minus fa-xl"}),name:{en:"Remove friends history",vi:"Lịch sử huỷ kết bạn"},description:{en:"People you have unfriended from facebook",vi:"Danh sách những người bạn đã huỷ kết bạn"},link:"https://www.facebook.com/me/allactivity?category_key=REMOVEDFRIENDS"},{icon:o.jsx("i",{className:"fa-solid fa-hand-point-up fa-xl"}),name:{en:"Poke friends history",vi:"Lịch sử chọc"},description:{en:"Friends that you poked on facebook",vi:"Bạn đã chọc ai trên facebook"},link:"https://www.facebook.com/me/allactivity?category_key=POKECLUSTER"},{icon:o.jsx("i",{className:"fa-solid fa-user fa-xl"}),name:{en:"Friend requests",vi:"Yêu cầu kết bạn"},description:{en:"Manage your incoming/outgoing friend requests",vi:"Quản lý lời mời kết bạn đã nhận/đã gửi"},link:"https://www.facebook.com/friends/requests"},{icon:o.jsx("i",{className:"fa-solid fa-cake-candles fa-xl"}),name:{en:"Friend's Birthdays",vi:"Sinh nhật bạn bè"},description:{en:"View your friend's birthdays each month on facebook",vi:"Xem từng tháng có những sinh nhật nào của bạn bè trên facebook."},link:"https://www.facebook.com/friends/birthdays"},{icon:o.jsx("i",{className:"fa-solid fa-person-walking-arrow-right fa-xl"}),name:{en:"Following",vi:"Đang theo dõi"},description:{en:"Friends/Page/Group that you are following on facebook",vi:"Bạn bè/Trang/Nhóm bạn đang theo dõi trên facebook"},link:"https://www.facebook.com/me/following"},{icon:o.jsx("i",{className:"fa-solid fa-person-walking-arrow-right fa-xl"}),name:{en:"Followers",vi:"Người theo dõi"},description:{en:"See who are following you on facebook",vi:"Xem ai đang theo dõi bạn trên facebook"},link:"https://www.facebook.com/me/followers"},{icon:o.jsx("i",{className:"fa-solid fa-ban fa-xl"}),name:{en:"Blocking list",vi:"Quản lý chặn"},description:{en:"Block anything on facebook that you don't want to see",vi:"Chặn bất kỳ thứ gì trên facebook mà bạn không thích"},badge:a.HOT,link:"https://www.facebook.com/settings/?tab=blocking"},{devider:!0,name:{en:"Activities",vi:"Hoạt động"}},{icon:o.jsx("i",{className:"fa-solid fa-film fa-xl"}),name:{en:"Recently watched videos",vi:"Video vừa xem"},description:{en:"View all videos you watched on facebook",vi:"Xem lại những video bạn đã xem trên facebook"},badge:a.HOT,link:"https://www.facebook.com/me/allactivity?activity_history=false&category_key=VIDEOWATCH&manage_mode=false&should_load_landing_page=false"},{icon:o.jsx("i",{className:"fa-solid fa-magnifying-glass fa-xl"}),name:{en:"Search history",vi:"Lịch sử tìm kiếm"},description:{en:"What you searched on facebook",vi:"Bạn đã tìm những gì trên facebook"},link:"https://accountscenter.facebook.com/info_and_permissions/search_history/"},{icon:o.jsx("i",{className:"fa-solid fa-bookmark fa-xl"}),name:{en:"Saved contents",vi:"Mục đã lưu"},description:{en:"View saved contents on Facebook",vi:"Xem nội dung bạn đã lưu trên Facebook"},link:"https://www.facebook.com/saved"},{icon:o.jsx("i",{className:"fa-solid fa-video fa-xl"}),name:{en:"Saved videos",vi:"Video đã lưu"},description:{en:"All video that you have saved",vi:"Tất cả video bạn đã lưu"},link:"https://www.facebook.com/watch/saved"},{icon:o.jsx("i",{className:"fa-solid fa-clock-rotate-left fa-xl"}),name:{en:"Your memories",vi:"Kỷ niệm của bạn"},description:{en:"View your memories on facebook",vi:"Xem kỷ niệm (memories) của bạn trên facebook"},link:"https://www.facebook.com/memories/"},{icon:o.jsx("i",{className:"fa-brands fa-adversal fa-xl"}),name:{en:"Ads activities",vi:"Quảng cáo đã xem"},description:{en:"View ads you have seen on facebook",vi:"Xem các quảng cáo bạn đã xem trên facebook"},link:"https://www.facebook.com/ads/activity"},{icon:o.jsx("i",{className:"fa-solid fa-eye fa-xl"}),name:{en:"Your activities",vi:"Nhật ký hoạt động"},description:{en:"Check all your activities on facebook",vi:"Kiểm tra nhật ký hoạt động của bạn trên facebook"},link:"https://www.facebook.com/me/allactivity"},{icon:o.jsx("i",{className:"fa-solid fa-calendar-days fa-xl"}),name:{en:"Joined events",vi:"Sự kiện đã tham gia"},description:{en:"View pass events that you have joined on facebook.",vi:"Xem tất cả sự kiện bạn từng tham gia trên facebook."},link:"https://www.facebook.com/events/past"},{icon:o.jsx("i",{className:"fa-solid fa-people-roof fa-xl"}),name:{en:"Family",vi:"Gia đình"},description:{en:"Manage & Monitor your family on facebook",vi:"Quản lý & Giám sát gia đình bạn trên facebook"},link:"https://familycenter.facebook.com/dashboard/"},{devider:!0,name:{en:"Security",vi:"Bảo mật"}},{icon:o.jsx("i",{className:"fa-solid fa-eye fa-xl"}),name:{en:"How Facebook tracking you",vi:"Cách Facebook theo dõi bạn"},description:{en:"View all information Facebook knows about you from third parties",vi:"Xem mọi thông tin mà Facebook biết về ban từ các bên thứ 3"},badge:a.NEW,link:"https://accountscenter.facebook.com/info_and_permissions/off_facebook_activity/"},{icon:o.jsx("i",{className:"fa-solid fa-ad fa-xl"}),name:{en:"Turn off ad on Facebook",vi:"Tắt quảng cáo của Facebook"},description:{en:"You decide how Facebook shows ads on your feed",vi:"Quản lý cách Faccebook hiện quảng cáo cho bạn"},badge:a.NEW,link:"https://accountscenter.facebook.com/ads"},{icon:o.jsx("i",{className:"fa-solid fa-clock fa-xl"}),name:{en:"First date on Facebook",vi:"Ngày tham gia Facebook"},description:{en:"The date that you created this facebook account",vi:"Ngày mà bạn tạo nick facebook này"},badge:a.HOT,onClick:async()=>window.open("https://accountscenter.facebook.com/profiles/"+await m()+"/manage")},{icon:o.jsx("i",{className:"fa-solid fa-language fa-xl"}),name:{en:"Change language",vi:"Đổi ngôn ngữ"},description:{en:"Change display language on facebook",vi:"Đổi ngôn ngữ hiển thị trên facebook"},link:"https://www.facebook.com/settings/?tab=language"},{icon:o.jsx("i",{className:"fa-solid fa-location-dot fa-xl"}),name:{en:"Your location",vi:"Vị trí của bạn"},description:{en:"See how facebook know your location",vi:"Xem cách facebook biết vị trí của bạn"},link:"https://www.facebook.com/primary_location/info"},{icon:o.jsx("i",{className:"fa-solid fa-lock fa-xl"}),name:{en:"Privacy settings",vi:"Quyền riêng tư"},description:{en:"Check & Manage your privacy settings on facebook",vi:"Kiểm tra & Quản lý quyền riêng tư trên facebook"},link:"https://www.facebook.com/privacy/checkup/?source=privacy_center"},{icon:o.jsx("i",{className:"fa-solid fa-key fa-xl"}),name:{en:"Two factor authentication",vi:"Xác thực 2 yếu tố"},description:{en:"Increase security with two factor authentication on facebook",vi:"Tăng cường bảo mật bằng xác thực 2 yêu cầu tố trên facebook"},link:"https://accountscenter.facebook.com/password_and_security/two_factor"},{icon:o.jsx("i",{className:"fa-solid fa-desktop fa-xl"}),name:{en:"Login devices",vi:"Nơi bạn đăng nhập"},description:{en:"View all devices that you have logged in",vi:"Xem những thiết bị nào đã đăng nhập vào tài khoản của bạn"},link:"https://accountscenter.facebook.com/password_and_security/login_activity/"},{icon:o.jsx("i",{className:"fa-brands fa-google-drive fa-xl"}),name:{en:"Tranfer your data",vi:"Chuyển thông tin của bạn"},description:{en:"Clone your facebook data to other platform (google drive, dropbox, etc.)",vi:"Chuyển bản sao thông tin của bạn sang nền tảng khác (google drive, dropbox, ...)"},link:"https://accountscenter.facebook.com/info_and_permissions/tyi"},{icon:o.jsx("i",{className:"fa-solid fa-cloud-arrow-down fa-xl"}),name:{en:"Download your data",vi:"Tải xuống thông tin của bạn"},description:{en:"Download all your data on facebook (messages, posts, comments, likes, friends, etc.)",vi:"Tải xuống tất cả thông tin của bạn (tin nhắn, bài viết, bình luận, like, bạn bè, ...)"},link:"https://accountscenter.facebook.com/info_and_permissions/dyi"},{icon:o.jsx("i",{className:"fa-solid fa-skull fa-xl"}),name:{en:"Account recovery",vi:"Khôi phục tài khoản"},description:{en:"Your fb account has been hacked? Facebook can help you.",vi:"Tài khoản fb của bạn bị hack? Facebook có thể giúp bạn."},badge:a.HOT,link:"https://fb.com/hacked"}];function C(){const{ti:n}=l();return f.useEffect(()=>{s("Shortcuts:onLoad")},[]),o.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",width:"100%",height:"100%"},children:[o.jsx(h,{align:"middle",style:{margin:"16px"},children:o.jsxs(r.Title,{level:3,style:{margin:0},children:[n({en:"Facebook Shortcuts",vi:"Phím tắt Facebook"})," ⚡"]})}),o.jsx(i,{style:{padding:10},dataSource:k,renderItem:e=>e.devider?o.jsxs("h2",{style:{marginTop:50},children:["📌 ",n(e.name)]}):o.jsx(i.Item,{style:{minWidth:450},children:o.jsx(i.Item.Meta,{avatar:e.icon,title:o.jsxs(o.Fragment,{children:[o.jsx(r.Link,{href:e.link,target:"_blank",onClick:t=>{var c;s("Shortcuts:click:"+n(e.name)),e.link||(t.preventDefault(),t.stopPropagation(),(c=e.onClick)==null||c.call(e))},children:n(e.name)}),e.badge?o.jsx(d,{color:e.badge.bg,style:{marginLeft:10,color:e.badge.color},count:n(e.badge.text)}):null]}),description:n(e.description)})})})]})}export{C as default};
