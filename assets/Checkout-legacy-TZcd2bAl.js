System.register(["./index-legacy-QxdR89ZJ.js","./MyApp-legacy-BBj3eYsu.js","./ProfileCard-legacy-lQ3u9IUF.js","./row-legacy-SQA4h8V-.js","./index-legacy-D67dKH3P.js","./index-legacy-CRE9oxWv.js","./index-legacy-DmiDbmPo.js","./index-legacy-CDyfUkRr.js","./index-legacy-DzdfADL9.js","./index-legacy-DfdBaD_U.js","./Table-legacy-BD5L6_41.js","./index-legacy-CG_lm6ph.js","./Dropdown-legacy-Dysu9-Rw.js","./TextArea-legacy-D_0bSEOs.js","./Input-legacy-QnjkI4BN.js","./SearchOutlined-legacy-CygtCcr4.js","./DownOutlined-legacy-BbGpOLug.js","./index-legacy-DQwGaZX2.js","./PurePanel-legacy-QauIMrxW.js","./move-legacy-CU0b4Gw5.js","./index-legacy-BHar295A.js","./index-legacy-DNi9NMTF.js","./Pagination-legacy-BrEqQN2f.js"],(function(e,n){"use strict";var t,a,l,i,r,s,o,c,d,h,g,u,f,m,p,A,x,y,v,w,j,k,C,P,I,b,L,B,D,G,U,E,V,S,O,T,R,N;return{setters:[e=>{t=e.p,a=e.G,l=e.H,i=e.$,r=e.M,s=e.a2,o=e.aU,c=e.aK,d=e.aL,h=e.r,g=e.aX,u=e.b0,f=e.aY,m=e.aZ,p=e.aH,A=e.aG},e=>{x=e.af,y=e.u,v=e.e,w=e.t,j=e.j,k=e.g,C=e.a,P=e.c,I=e.d,b=e.x,L=e.S,B=e.I,D=e.k},e=>{G=e.default},e=>{U=e.R},e=>{E=e.T},e=>{V=e.I},e=>{S=e.T},e=>{O=e.D},e=>{T=e.A},e=>{R=e.C},e=>{N=e.F},null,null,null,null,null,null,null,null,null,null,null,null],execute:function(){e("default",(function(){const{ti:e}=o(),{message:n}=y(),t=c(d.profile),[a,l]=h.useState(!1),[i,r]=v("Checkout.url",""),[s,x]=v("Checkout.profile",t),[Q,F]=v("Checkout.months",1),[z,K]=h.useState(0),M=m.vi*Q,W=s?.uid?"VIP"+s?.uid:"",H=`https://qr.sepay.vn/img?bank=${de.bank}&acc=${de.acc}&amount=${M}&des=${W}&template=compact`,Y=i&&/\d+/.test(i);h.useEffect((()=>{w("Checkout.onLoad")}),[]);const Z=h.useRef(!1);h.useEffect((()=>{i&&!Z.current&&X(i)}),[i]),h.useEffect((()=>{const n=setInterval((()=>{1!=z&&W&&async function(e=""){const n=p.FB_AIO.statistic+"/check_payment_status?content="+e;for(let a of[A,fetch])try{let e=await a(n);return e?.text&&(e=await e.text()),"true"==e}catch(t){console.log("ERROR",t)}return!1}(W).then((n=>{n?(K(1),w("Checkout:paymentSuccess:"+W),j.fire({icon:"success",title:e({en:"Payment successfully",vi:"Thanh toán thành công"}),text:e({en:"Please reload page to update VIP status",vi:"Vui lòng tải lại trang web để cập nhật trạng thái VIP"}),showCancelButton:!1,allowEscapeKey:!1,allowOutsideClick:!1}).then((()=>{window.location.reload()}))):K(0)}))}),2e3);return()=>clearInterval(n)}),[W,z]);const X=async a=>{Z.current=!0,l(!0);const i="Checkout.loadProfile";n.loading({key:i,content:e({en:"Loading profile...",vi:"Đang tải profile..."}),duration:0});try{if(t){const t=await P(a);if(!t)throw new Error(e({en:"Cannot get UID from URL",vi:"Không tìm thấy UID từ URL"}));const l=await I(t);if(!l)throw new Error(e({en:"Cannot get profile from UID",vi:"Không tìm thấy profile từ UID"}));if(l.type!==b.User)throw new Error(e({en:"Only support Facebook user. Current: ",vi:"Chỉ hỗ trợ Facebook User. Tìm thấy: "})+l.type);x(l),w("Checkout.loadProfile:"+l.uid),n.success({key:i,content:e({en:"Load profile successfully",vi:"Tải profile thành công"})})}else{if(!Y)throw new Error(e({en:"Invalid UID: Must be number",vi:"UID không hợp lệ: Phải là số nguyên"}));x({uid:a,url:C(a),name:e({en:"Click here to verify",vi:"Bấm để kiểm tra nick"}),avatar:k(a,100)}),n.destroy(i)}}catch(s){n.error({key:i,content:s.message})}finally{Z.current=!1,r(""),l(!1)}};return g.jsxs(L,{style:{display:"flex",flexDirection:"column",alignItems:"center",width:"100%",paddingBottom:300},children:[g.jsx(U,{align:"middle",style:{margin:16},children:g.jsxs(E.Title,{level:3,children:[e({en:"Buy VIP",vi:"Mua VIP"})," ",g.jsx("i",{className:"fa-solid fa-crown",style:{fontSize:30,color:"gold"}})]})}),g.jsxs(L,{direction:"vertical",align:"center",children:[g.jsxs(E.Title,{level:5,children:[e(t?{en:"Enter URL/UID of Facebook user want to buy VIP",vi:"Nhập URL/UID nick Facebook muốn mua VIP"}:{en:"Enter Facebook UID of user want to buy VIP",vi:"Nhập UID nick Facebook muốn mua VIP"}),":"]}),g.jsx(V,{style:{maxWidth:400},value:i,disabled:a,onChange:e=>r(e.target.value),placeholder:e(t?{en:"Enter URL or UID",vi:"Nhập URL hoặc UID"}:{en:"Enter Facebook UID",vi:"Nhập UID Facebook"}),prefix:g.jsx("i",{className:"fa-solid fa-link"}),size:"large",suffix:t?g.jsx(u,{disabled:t?.uid===s?.uid,onClick:()=>{r(""),x(t)},icon:g.jsx("i",{className:"fa-solid fa-user"}),children:e({en:"Me",vi:"Tôi"})}):null}),g.jsx(G,{about:s,showUid:!0}),g.jsx(E.Title,{level:5,style:{marginTop:30},children:e({en:"How many months do you want to buy VIP?",vi:"Bạn muốn mua gói VIP bao nhiêu tháng?"})}),g.jsx(L,{children:g.jsxs(E.Title,{level:4,children:[f(e({vi:m.vi+"đ",en:m.en+" USD"}))," ","x ",g.jsx(S,{min:1,value:Q,onChange:e=>F(e||1)})," ="," ",f(e(m)*Q)+e({en:" USD",vi:"đ"}),e({en:` (${f(M)} VND)`,vi:""})]})})]}),g.jsx(O,{}),g.jsx(E.Title,{level:3,children:e({en:"Checkout",vi:"Thanh toán"})}),g.jsx(T,{banner:!0,showIcon:!0,type:"info",message:e({en:"VIP will Auto Unlock after Payment Success",vi:"VIP sẽ Tự động Mở khoá sau khi Thanh toán thành công"})}),s?g.jsx(g.Fragment,{children:g.jsxs(q,{wrap:!0,justify:"center",gap:"small",children:[g.jsx(R,{children:g.jsxs(L,{direction:"vertical",align:"center",children:[g.jsx(E.Title,{level:5,children:e({en:"Option 1: Open bank app to scan QR code",vi:"Cách 1: Mở app ngân hàng và quét mã QR"})}),g.jsx(B,{style:{maxWidth:350},src:H}),g.jsx(u,{href:H+"&download=true",target:"_blank",icon:g.jsx("i",{className:"fa-solid fa-download"}),children:e({en:"Download QR",vi:"Tải ảnh QR"})}),1===z?g.jsxs(E.Title,{type:"success",level:5,children:[e({en:"Status: Payment Success",vi:"Trạng thái: Thanh toán thành công"}),g.jsx("i",{className:"fa-solid fa-circle-check fa-lg"})]}):0===z?g.jsxs(E.Title,{type:"warning",level:5,children:[e({en:"Status: Waiting for payment...",vi:"Trạng thái: Chờ thanh toán..."})," ",g.jsx("i",{className:"fa-solid fa-circle-notch fa-spin fa-lg"})]}):null]})}),g.jsx(R,{children:g.jsxs(L,{direction:"vertical",align:"center",children:[g.jsx(E.Title,{level:5,children:e({en:"Option 2: Transfer to bank account",vi:"Cách 2: Chuyển khoản theo thông tin"})}),g.jsx(B,{style:{maxWidth:130},src:de.logo,preview:!1}),g.jsx(E.Title,{level:4,children:e({en:"Bank name: "+de.bank,vi:"Ngân hàng: "+de.bank})}),g.jsx(N,{pagination:!1,showHeader:!1,size:"middle",rowKey:e=>e.key,dataSource:[{key:1,name:e({en:"Account",vi:"Số TK"}),value:de.acc},{key:2,name:e({en:"Name",vi:"Chủ tài khoản"}),value:de.name},{key:3,name:e({en:"Amount",vi:"Số tiền"}),value:f(M)+" VND"},{key:4,name:e({en:"Description",vi:"Nội dung CK"}),value:W}],columns:[{title:e({en:"Name",vi:"Tên"}),dataIndex:"name",key:"name",render:e=>e+":"},{title:e({en:"Value",vi:"Giá trị"}),dataIndex:"value",key:"value",render:e=>g.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between"},children:[g.jsx("b",{style:{marginRight:8},children:e}),g.jsx(u,{icon:g.jsx("i",{className:"fa-solid fa-copy"}),onClick:()=>D(e)})]})}]}),g.jsx(T,{showIcon:!0,style:{maxWidth:"100%"},banner:!0,message:e({vi:g.jsxs(g.Fragment,{children:["Lưu ý: Vui lòng giữ nguyên nội dung chuyển khoản",g.jsx("br",{}),g.jsx("b",{children:W}),g.jsx("br",{})," để hệ thống tự động xác nhận thanh toán"]}),en:g.jsxs(g.Fragment,{children:["Note: Please keep the transfer description ",g.jsx("br",{}),g.jsx("b",{children:W})," ",g.jsx("br",{}),"system will automatically confirm the payment"]})}),type:"warning"})]})})]})}):g.jsx(T,{showIcon:!0,type:"warning",message:e({en:"Please enter facebook profile first",vi:"Vui lòng chọn nick muốn mua VIP trước"})}),g.jsx(O,{}),g.jsxs(L,{direction:"vertical",align:"center",children:[g.jsx(E.Title,{level:3,children:e({en:"Manual",vi:"Thủ công"})}),g.jsx(T,{banner:!0,showIcon:!0,type:"info",message:e({en:g.jsxs(g.Fragment,{children:["The following methods do not yet support AUTOMATIC VIP activation"," ",g.jsx("br",{}),"After making the transfer, please send bill screenshot to"," ",g.jsx("a",{href:p.me.url,target:"_blank",children:"Admin"})," ","to activate VIP"]}),vi:g.jsxs(g.Fragment,{children:["Các phương thức dưới đây chưa hỗ trợ TỰ ĐỘNG mở VIP",g.jsx("br",{}),"Vui lòng gửi hình chụp hoá đơn tới"," ",g.jsx("a",{href:p.me.url,target:"_blank",children:"Admin"})," ","để được mở VIP"]})})}),g.jsx(N,{pagination:!1,dataSource:[{name:"Paypal",logo:ne,url:"https://paypal.me/hoangtran99",infor:["99.hoangtran@gmail.com","@hoangtran99","0765423185"],qrcode:le},{name:"Vietcombank",logo:$,infor:["9765423185","TRAN VAN HOANG"],qrcode:ie},{name:"MoMo",logo:ae,infor:["0765423185","Trần Văn Hoàng"],qrcode:re},{name:"Kofi",logo:_,url:"https://ko-fi.com/99hoangtran",qrcode:se},{name:"Buy Me a Coffee",logo:te,url:"https://buymeacoffee.com/99hoangtran",qrcode:oe},{name:"Patreon",logo:ee,url:"https://patreon.com/99_hoangtran",qrcode:ce}],rowKey:e=>e.name,columns:[{title:e({en:"Provider",vi:"Tên"}),dataIndex:"name",key:"name",render:(e,n)=>g.jsxs(L,{direction:"vertical",children:[g.jsx(B,{src:n.logo,style:{width:50},preview:!1}),g.jsx("b",{children:e})]})},{title:e({en:"Information",vi:"Thông tin"}),dataIndex:"url",key:"url",render:(e,n)=>g.jsxs(g.Fragment,{children:[n.infor?.map(((e,n)=>g.jsx("div",{children:g.jsx("b",{children:e})},n))),g.jsx("a",{href:e,target:"_blank",children:e?.replace("https://","")})]})},{title:e({en:"QR Code",vi:"QR Code"}),dataIndex:"qrcode",key:"qrcode",render:e=>g.jsx(B,{src:e,style:{maxWidth:200,maxHeight:200}}),align:"center"}],style:{maxWidth:"90vw",overflow:"auto"},scroll:{x:"max-content"}})]})]})}));const Q=["wrap","nowrap","wrap-reverse"],F=["flex-start","flex-end","start","end","center","space-between","space-around","space-evenly","stretch","normal","left","right"],z=["center","start","end","flex-start","flex-end","self-start","self-end","baseline","normal","stretch"];function K(e,n){return t(Object.assign(Object.assign(Object.assign({},((e,n)=>{const t=!0===n.wrap?"wrap":n.wrap;return{[`${e}-wrap-${t}`]:t&&Q.includes(t)}})(e,n)),((e,n)=>{const t={};return z.forEach((a=>{t[`${e}-align-${a}`]=n.align===a})),t[`${e}-align-stretch`]=!n.align&&!!n.vertical,t})(e,n)),((e,n)=>{const t={};return F.forEach((a=>{t[`${e}-justify-${a}`]=n.justify===a})),t})(e,n)))}const M=e=>{const{componentCls:n}=e;return{[n]:{display:"flex",margin:0,padding:0,"&-vertical":{flexDirection:"column"},"&-rtl":{direction:"rtl"},"&:empty":{display:"none"}}}},W=e=>{const{componentCls:n}=e;return{[n]:{"&-gap-small":{gap:e.flexGapSM},"&-gap-middle":{gap:e.flexGap},"&-gap-large":{gap:e.flexGapLG}}}},H=e=>{const{componentCls:n}=e,t={};return Q.forEach((e=>{t[`${n}-wrap-${e}`]={flexWrap:e}})),t},Y=e=>{const{componentCls:n}=e,t={};return z.forEach((e=>{t[`${n}-align-${e}`]={alignItems:e}})),t},Z=e=>{const{componentCls:n}=e,t={};return F.forEach((e=>{t[`${n}-justify-${e}`]={justifyContent:e}})),t},X=a("Flex",(e=>{const{paddingXS:n,padding:t,paddingLG:a}=e,i=l(e,{flexGapSM:n,flexGap:t,flexGapLG:a});return[M(i),W(i),H(i),Y(i),Z(i)]}),(()=>({})),{resetStyle:!1}),q=i.forwardRef(((e,n)=>{const{prefixCls:a,rootClassName:l,className:o,style:c,flex:d,gap:h,children:g,vertical:u=!1,component:f="div"}=e,m=function(e,n){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&n.indexOf(a)<0&&(t[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var l=0;for(a=Object.getOwnPropertySymbols(e);l<a.length;l++)n.indexOf(a[l])<0&&Object.prototype.propertyIsEnumerable.call(e,a[l])&&(t[a[l]]=e[a[l]])}return t}(e,["prefixCls","rootClassName","className","style","flex","gap","children","vertical","component"]),{flex:p,direction:A,getPrefixCls:y}=i.useContext(r),v=y("flex",a),[w,j,k]=X(v),C=null!=u?u:null==p?void 0:p.vertical,P=t(o,l,null==p?void 0:p.className,v,j,k,K(v,e),{[`${v}-rtl`]:"rtl"===A,[`${v}-gap-${h}`]:x(h),[`${v}-vertical`]:C}),I=Object.assign(Object.assign({},null==p?void 0:p.style),c);return d&&(I.flex=d),h&&!x(h)&&(I.gap=h),w(i.createElement(f,Object.assign({ref:n,className:P,style:I},s(m,["justify","wrap","align"])),g))})),J=""+new URL("VPBank-B4jSWz7d.svg",n.meta.url).href,$=""+new URL("vcb-B3zKigWy.png",n.meta.url).href,_="data:image/svg+xml,%3csvg%20fill='none'%20height='391'%20viewBox='0%200%20391%20391'%20width='391'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='m52%20102h296v199h-296z'%20fill='%23fff'/%3e%3cpath%20d='m174%201.09995c-79.2999%208.9-145.5999%2065.29995-166.59995%20141.70005-15.2%2055.6-5.8%20114%2026.10005%20161.7%2061.7%2092.3%20189.4999%20114.2%20278.7999%2047.8%2074.8-55.8%2099.8-156.6%2059.7-241-9.7-20.3001-20.4-35.6001-36.4-52.2001-27.2-27.9-61.3-46.7-99.6-54.99995-18.3-3.900005-43.3-5.1-62-3zm117.8%20102.90005c25.2%207%2043.6%2024.6%2050.2%2048%207.8%2028.1-.1%2055.6-21.5%2073.9-11.5%209.8-32.5%2017.1-49.6%2017.1h-7.6l-.8%207.2c-1.9%2019.4-11.4%2032.5-27%2037-2.9.9-25.2%201.2-80%201.2l-75.9999.1-6-2.8c-9.6-4.5-16.9-12.7-19.7-22.2-.4-1.6-.8-36.6-.8-77.8%200-80.7%200-80.6%205.2-82.7%201.4-.5%2048.5999-.9%20114.2999-.9%20109.5-.1%20112.2-.1%20119.3%201.9z'%20fill='%23579fbf'/%3e%3cpath%20d='m264%20173v34h8.8c15.5%200%2025-5.3%2031.2-17.4%203.3-6.6%203.5-7.4%203.5-17.5%200-9.6-.3-11.1-2.8-16.3-3-6.2-8.6-11.6-15.2-14.8-3.3-1.6-6.2-2-14.8-2h-10.7z'%20fill='%23579fbf'/%3e%3cpath%20d='m177.885%20147.41c-7.3%202.4-9.6%203.7-15.3%208.4l-4.7%203.9-4.3-3.5c-14.2-11.6-35-12.9-46.7-2.9-5.8%205-8.1996%2010.3-8.7996%2019.4-.5%208.1%201.2%2015.8%204.9996%2023.2%201.1%202.2%205.9%208%2010.6%2013%2014.7%2015.3%2042.4%2040.7%2044.4%2040.7%201.2%200%2012.1-10.1%2027.3-25.3%2022.9-22.8%2025.7-25.9%2028.6-32.1%204.1-8.7%205-18.8%202.5-26.4-4.9-14.6-23.4-23.4-38.6-18.4z'%20fill='%23ff5f5f'/%3e%3c/svg%3e",ee="data:image/svg+xml,%3csvg%20viewBox='0%200%20512%20512'%20xmlns='http://www.w3.org/2000/svg'%20fill-rule='evenodd'%20clip-rule='evenodd'%20stroke-linejoin='round'%20stroke-miterlimit='2'%3e%3cg%20transform='matrix(.47407%200%200%20.47407%20.383%20.422)'%3e%3cclipPath%20id='prefix__a'%3e%3cpath%20d='M0%200h1080v1080H0z'/%3e%3c/clipPath%3e%3cg%20clip-path='url(%23prefix__a)'%3e%3cpath%20d='M1033.05%20324.45c-.19-137.9-107.59-250.92-233.6-291.7-156.48-50.64-362.86-43.3-512.28%2027.2-181.1%2085.46-237.99%20272.66-240.11%20459.36-1.74%20153.5%2013.58%20557.79%20241.62%20560.67%20169.44%202.15%20194.67-216.18%20273.07-321.33%2055.78-74.81%20127.6-95.94%20216.01-117.82%20151.95-37.61%20255.51-157.53%20255.29-316.38z'%20fill-rule='nonzero'/%3e%3c/g%3e%3c/g%3e%3c/svg%3e",ne="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'%20standalone='no'?%3e%3c!--%20Uploaded%20to:%20SVG%20Repo,%20www.svgrepo.com,%20Generator:%20SVG%20Repo%20Mixer%20Tools%20--%3e%3csvg%20width='800px'%20height='800px'%20viewBox='-3.5%200%2048%2048'%20version='1.1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%3e%3ctitle%3ePaypal-color%3c/title%3e%3cdesc%3eCreated%20with%20Sketch.%3c/desc%3e%3cdefs%3e%3c/defs%3e%3cg%20id='Icons'%20stroke='none'%20stroke-width='1'%20fill='none'%20fill-rule='evenodd'%3e%3cg%20id='Color-'%20transform='translate(-804.000000,%20-660.000000)'%20fill='%23022B87'%3e%3cpath%20d='M838.91167,663.619443%20C836.67088,661.085983%20832.621734,660%20827.440097,660%20L812.404732,660%20C811.344818,660%20810.443663,660.764988%20810.277343,661.801472%20L804.016136,701.193856%20C803.892151,701.970844%20804.498465,702.674333%20805.292267,702.674333%20L814.574458,702.674333%20L816.905967,688.004562%20L816.833391,688.463555%20C816.999712,687.427071%20817.894818,686.662083%20818.95322,686.662083%20L823.363735,686.662083%20C832.030541,686.662083%20838.814901,683.170138%20840.797138,673.069296%20C840.856106,672.7693%20840.951363,672.194809%20840.951363,672.194809%20C841.513828,668.456868%20840.946827,665.920407%20838.91167,663.619443%20Z%20M843.301017,674.10803%20C841.144899,684.052874%20834.27133,689.316292%20823.363735,689.316292%20L819.408334,689.316292%20L816.458414,708%20L822.873846,708%20C823.800704,708%20824.588458,707.33101%20824.733611,706.423525%20L824.809211,706.027531%20L826.284927,696.754676%20L826.380183,696.243184%20C826.523823,695.335698%20827.313089,694.666708%20828.238435,694.666708%20L829.410238,694.666708%20C836.989913,694.666708%20842.92604,691.611256%20844.660308,682.776394%20C845.35583,679.23045%20845.021677,676.257496%20843.301017,674.10803%20Z'%20id='Paypal'%3e%3c/path%3e%3c/g%3e%3c/g%3e%3c/svg%3e",te=""+new URL("bmc-CfVx7c-8.svg",n.meta.url).href,ae="data:image/png;base64,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",le=""+new URL("paypal-BoSGSElf.png",n.meta.url).href,ie=""+new URL("vcb-BzQnGjF9.png",n.meta.url).href,re=""+new URL("momo--Wj1VkU0.png",n.meta.url).href,se=""+new URL("kofi-BYfC2mwU.png",n.meta.url).href,oe=""+new URL("bmc-B2aTP33j.png",n.meta.url).href,ce=""+new URL("patreon-B42MXuVM.png",n.meta.url).href,de={acc:"0765423185",name:"Trần Văn Hoàng",bank:"VPBank",logo:J}}}}));
