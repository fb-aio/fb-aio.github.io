import{q as K,L as J,M as Z,$ as D,G as X,a4 as Y,b4 as _,aU as $,aV as ee,r as v,b6 as t,ba as G,b7 as b,b8 as I,aS as O,aR as te}from"./index-BxqI5Gd0.js";import{aG as F,u as ne,l as T,t as R,i as ae,h as oe,j as se,k as re,w as ie,S as A,d as c,I as P,f as le,e as ce}from"./MyApp-ByiHX0qM.js";import de from"./ProfileCard-CF8Dr5QY.js";import{R as me}from"./row-BKHe0tix.js";import{I as he}from"./index-DdkLWVDV.js";import{T as ge}from"./index-DRnW_b6i.js";import{D as N}from"./index-D3yKYGab.js";import{A as S}from"./index-BOklckFv.js";import{C as Q}from"./index-BZUVt21t.js";import{F as z}from"./Table-D7mNCoTe.js";import"./responsiveObserver-DCjkyyMm.js";import"./SearchOutlined-FPpClRsQ.js";import"./DownOutlined-CHXCxF_j.js";import"./List-DIfsWYq5.js";import"./index-BC7wWbGD.js";import"./index-Czy2gXJr.js";import"./index-unSpNECF.js";import"./index-Cab20LlE.js";import"./PurePanel-DnuVi_Xb.js";import"./move-12jBH-U3.js";import"./index-QUk30DMk.js";import"./useBreakpoint-B-6M2pGc.js";import"./useForceUpdate-32QtfefY.js";import"./Pagination-ClSPRRQ-.js";const M=["wrap","nowrap","wrap-reverse"],q=["flex-start","flex-end","start","end","center","space-between","space-around","space-evenly","stretch","normal","left","right"],W=["center","start","end","flex-start","flex-end","self-start","self-end","baseline","normal","stretch"],fe=(e,o)=>{const a=o.wrap===!0?"wrap":o.wrap;return{["".concat(e,"-wrap-").concat(a)]:a&&M.includes(a)}},ue=(e,o)=>{const a={};return W.forEach(n=>{a["".concat(e,"-align-").concat(n)]=o.align===n}),a["".concat(e,"-align-stretch")]=!o.align&&!!o.vertical,a},pe=(e,o)=>{const a={};return q.forEach(n=>{a["".concat(e,"-justify-").concat(n)]=o.justify===n}),a};function Ae(e,o){return K(Object.assign(Object.assign(Object.assign({},fe(e,o)),ue(e,o)),pe(e,o)))}const xe=e=>{const{componentCls:o}=e;return{[o]:{display:"flex",margin:0,padding:0,"&-vertical":{flexDirection:"column"},"&-rtl":{direction:"rtl"},"&:empty":{display:"none"}}}},ye=e=>{const{componentCls:o}=e;return{[o]:{"&-gap-small":{gap:e.flexGapSM},"&-gap-middle":{gap:e.flexGap},"&-gap-large":{gap:e.flexGapLG}}}},ve=e=>{const{componentCls:o}=e,a={};return M.forEach(n=>{a["".concat(o,"-wrap-").concat(n)]={flexWrap:n}}),a},we=e=>{const{componentCls:o}=e,a={};return W.forEach(n=>{a["".concat(o,"-align-").concat(n)]={alignItems:n}}),a},Ce=e=>{const{componentCls:o}=e,a={};return q.forEach(n=>{a["".concat(o,"-justify-").concat(n)]={justifyContent:n}}),a},ke=()=>({}),je=J("Flex",e=>{const{paddingXS:o,padding:a,paddingLG:n}=e,r=Z(e,{flexGapSM:o,flexGap:a,flexGapLG:n});return[xe(r),ye(r),ve(r),we(r),Ce(r)]},ke,{resetStyle:!1});var be=function(e,o){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&o.indexOf(n)<0&&(a[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)o.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]]);return a};const Ie=D.forwardRef((e,o)=>{const{prefixCls:a,rootClassName:n,className:r,style:g,flex:y,gap:i,children:w,vertical:f=!1,component:B="div"}=e,C=be(e,["prefixCls","rootClassName","className","style","flex","gap","children","vertical","component"]),{flex:l,direction:k,getPrefixCls:d}=D.useContext(X),h=d("flex",a),[L,j,U]=je(h),E=f!=null?f:l==null?void 0:l.vertical,V=K(r,n,l==null?void 0:l.className,h,j,U,Ae(h,e),{["".concat(h,"-rtl")]:k==="rtl",["".concat(h,"-gap-").concat(i)]:F(i),["".concat(h,"-vertical")]:E}),s=Object.assign(Object.assign({},l==null?void 0:l.style),g);return y&&(s.flex=y),i&&!F(i)&&(s.gap=i),L(D.createElement(B,Object.assign({ref:o,className:V,style:s},Y(C,["justify","wrap","align"])),w))}),Pe=""+new URL("VPBank-B4jSWz7d.svg",import.meta.url).href,Se=""+new URL("vcb-B3zKigWy.png",import.meta.url).href,Be="data:image/svg+xml,%3csvg%20fill='none'%20height='391'%20viewBox='0%200%20391%20391'%20width='391'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='m52%20102h296v199h-296z'%20fill='%23fff'/%3e%3cpath%20d='m174%201.09995c-79.2999%208.9-145.5999%2065.29995-166.59995%20141.70005-15.2%2055.6-5.8%20114%2026.10005%20161.7%2061.7%2092.3%20189.4999%20114.2%20278.7999%2047.8%2074.8-55.8%2099.8-156.6%2059.7-241-9.7-20.3001-20.4-35.6001-36.4-52.2001-27.2-27.9-61.3-46.7-99.6-54.99995-18.3-3.900005-43.3-5.1-62-3zm117.8%20102.90005c25.2%207%2043.6%2024.6%2050.2%2048%207.8%2028.1-.1%2055.6-21.5%2073.9-11.5%209.8-32.5%2017.1-49.6%2017.1h-7.6l-.8%207.2c-1.9%2019.4-11.4%2032.5-27%2037-2.9.9-25.2%201.2-80%201.2l-75.9999.1-6-2.8c-9.6-4.5-16.9-12.7-19.7-22.2-.4-1.6-.8-36.6-.8-77.8%200-80.7%200-80.6%205.2-82.7%201.4-.5%2048.5999-.9%20114.2999-.9%20109.5-.1%20112.2-.1%20119.3%201.9z'%20fill='%23579fbf'/%3e%3cpath%20d='m264%20173v34h8.8c15.5%200%2025-5.3%2031.2-17.4%203.3-6.6%203.5-7.4%203.5-17.5%200-9.6-.3-11.1-2.8-16.3-3-6.2-8.6-11.6-15.2-14.8-3.3-1.6-6.2-2-14.8-2h-10.7z'%20fill='%23579fbf'/%3e%3cpath%20d='m177.885%20147.41c-7.3%202.4-9.6%203.7-15.3%208.4l-4.7%203.9-4.3-3.5c-14.2-11.6-35-12.9-46.7-2.9-5.8%205-8.1996%2010.3-8.7996%2019.4-.5%208.1%201.2%2015.8%204.9996%2023.2%201.1%202.2%205.9%208%2010.6%2013%2014.7%2015.3%2042.4%2040.7%2044.4%2040.7%201.2%200%2012.1-10.1%2027.3-25.3%2022.9-22.8%2025.7-25.9%2028.6-32.1%204.1-8.7%205-18.8%202.5-26.4-4.9-14.6-23.4-23.4-38.6-18.4z'%20fill='%23ff5f5f'/%3e%3c/svg%3e",Le="data:image/svg+xml,%3csvg%20viewBox='0%200%20512%20512'%20xmlns='http://www.w3.org/2000/svg'%20fill-rule='evenodd'%20clip-rule='evenodd'%20stroke-linejoin='round'%20stroke-miterlimit='2'%3e%3cg%20transform='matrix(.47407%200%200%20.47407%20.383%20.422)'%3e%3cclipPath%20id='prefix__a'%3e%3cpath%20d='M0%200h1080v1080H0z'/%3e%3c/clipPath%3e%3cg%20clip-path='url(%23prefix__a)'%3e%3cpath%20d='M1033.05%20324.45c-.19-137.9-107.59-250.92-233.6-291.7-156.48-50.64-362.86-43.3-512.28%2027.2-181.1%2085.46-237.99%20272.66-240.11%20459.36-1.74%20153.5%2013.58%20557.79%20241.62%20560.67%20169.44%202.15%20194.67-216.18%20273.07-321.33%2055.78-74.81%20127.6-95.94%20216.01-117.82%20151.95-37.61%20255.51-157.53%20255.29-316.38z'%20fill-rule='nonzero'/%3e%3c/g%3e%3c/g%3e%3c/svg%3e",Ue="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'%20standalone='no'?%3e%3c!--%20Uploaded%20to:%20SVG%20Repo,%20www.svgrepo.com,%20Generator:%20SVG%20Repo%20Mixer%20Tools%20--%3e%3csvg%20width='800px'%20height='800px'%20viewBox='-3.5%200%2048%2048'%20version='1.1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%3e%3ctitle%3ePaypal-color%3c/title%3e%3cdesc%3eCreated%20with%20Sketch.%3c/desc%3e%3cdefs%3e%3c/defs%3e%3cg%20id='Icons'%20stroke='none'%20stroke-width='1'%20fill='none'%20fill-rule='evenodd'%3e%3cg%20id='Color-'%20transform='translate(-804.000000,%20-660.000000)'%20fill='%23022B87'%3e%3cpath%20d='M838.91167,663.619443%20C836.67088,661.085983%20832.621734,660%20827.440097,660%20L812.404732,660%20C811.344818,660%20810.443663,660.764988%20810.277343,661.801472%20L804.016136,701.193856%20C803.892151,701.970844%20804.498465,702.674333%20805.292267,702.674333%20L814.574458,702.674333%20L816.905967,688.004562%20L816.833391,688.463555%20C816.999712,687.427071%20817.894818,686.662083%20818.95322,686.662083%20L823.363735,686.662083%20C832.030541,686.662083%20838.814901,683.170138%20840.797138,673.069296%20C840.856106,672.7693%20840.951363,672.194809%20840.951363,672.194809%20C841.513828,668.456868%20840.946827,665.920407%20838.91167,663.619443%20Z%20M843.301017,674.10803%20C841.144899,684.052874%20834.27133,689.316292%20823.363735,689.316292%20L819.408334,689.316292%20L816.458414,708%20L822.873846,708%20C823.800704,708%20824.588458,707.33101%20824.733611,706.423525%20L824.809211,706.027531%20L826.284927,696.754676%20L826.380183,696.243184%20C826.523823,695.335698%20827.313089,694.666708%20828.238435,694.666708%20L829.410238,694.666708%20C836.989913,694.666708%20842.92604,691.611256%20844.660308,682.776394%20C845.35583,679.23045%20845.021677,676.257496%20843.301017,674.10803%20Z'%20id='Paypal'%3e%3c/path%3e%3c/g%3e%3c/g%3e%3c/svg%3e",Ee=""+new URL("bmc-CfVx7c-8.svg",import.meta.url).href,Ve="data:image/png;base64,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",De=""+new URL("paypal-BIJoftQy.png",import.meta.url).href,Ge=""+new URL("vcb-HXrFPZht.png",import.meta.url).href,Te=""+new URL("momo-BThAuDPl.png",import.meta.url).href,Re=""+new URL("kofi-BzxZc1MB.png",import.meta.url).href,Oe=""+new URL("bmc-BJbqHj-D.png",import.meta.url).href,Fe=""+new URL("patreon-BbtBzRnE.png",import.meta.url).href,x={acc:"0765423185",name:"Trần Văn Hoàng",bank:"VPBank",logo:Pe};async function Ne(e=""){const o=O.FB_AIO.statistic+"/check_payment_status?content="+e;for(let a of[te,fetch])try{let n=await a(o);return n!=null&&n.text&&(n=await n.text()),n=="true"?1:0}catch(n){console.log("ERROR",n)}return 0}function mt(){const{ti:e}=_(),{message:o}=ne(),a=$(ee.profile),[n,r]=v.useState(!1),[g,y]=T("Checkout.url",""),[i,w]=T("Checkout.profile",a),[f,B]=T("Checkout.months",1),[C,l]=v.useState(0),k=I.vi*f,d=i!=null&&i.uid?"VIP"+(i==null?void 0:i.uid):"",h="https://qr.sepay.vn/img?bank=".concat(x.bank,"&acc=").concat(x.acc,"&amount=").concat(k,"&des=").concat(d,"&template=compact"),L=g&&/\d+/.test(g);v.useEffect(()=>{R("Checkout.onLoad")},[]);const j=v.useRef(!1);v.useEffect(()=>{g&&!j.current&&V(g)},[g]);const U=()=>{l(1),R("Checkout:paymentSuccess:"+d),ce.fire({icon:"success",title:e({en:"Payment successfully",vi:"Thanh toán thành công"}),text:e({en:"Please reload page to update VIP status",vi:"Vui lòng tải lại trang web để cập nhật trạng thái VIP"}),showCancelButton:!1,allowEscapeKey:!1,allowOutsideClick:!1}).then(()=>{window.location.reload()})},E=()=>{l(0)};v.useEffect(()=>{const s=setInterval(()=>{C!=1&&d&&Ne(d).then(m=>{m===1?U():E()})},2e3);return()=>clearInterval(s)},[d,C]);const V=async s=>{j.current=!0,r(!0);const m="Checkout.loadProfile";o.loading({key:m,content:e({en:"Loading profile...",vi:"Đang tải profile..."}),duration:0});try{if(a){const u=await se(s);if(!u)throw new Error(e({en:"Cannot get UID from URL",vi:"Không tìm thấy UID từ URL"}));const p=await re(u);if(!p)throw new Error(e({en:"Cannot get profile from UID",vi:"Không tìm thấy profile từ UID"}));if(p.type!==ie.User)throw new Error(e({en:"Only support Facebook user. Current: ",vi:"Chỉ hỗ trợ Facebook User. Tìm thấy: "})+p.type);w(p),R("Checkout.loadProfile:"+p.uid),o.success({key:m,content:e({en:"Load profile successfully",vi:"Tải profile thành công"})})}else if(L)w({uid:s,url:ae(s),name:e({en:"Click here to verify",vi:"Bấm để kiểm tra nick"}),avatar:oe(s,100)}),o.destroy(m);else throw new Error(e({en:"Invalid UID: Must be number",vi:"UID không hợp lệ: Phải là số nguyên"}))}catch(u){o.error({key:m,content:u.message})}finally{j.current=!1,y(""),r(!1)}};return t.jsxs(A,{style:{display:"flex",flexDirection:"column",alignItems:"center",width:"100%",paddingBottom:300},children:[t.jsx(me,{align:"middle",style:{margin:16},children:t.jsxs(c.Title,{level:3,children:[e({en:"Buy VIP",vi:"Mua VIP"})," ",t.jsx("i",{className:"fa-solid fa-crown",style:{fontSize:30,color:"gold"}})]})}),t.jsxs(A,{direction:"vertical",align:"center",children:[t.jsxs(c.Title,{level:5,children:[e(a?{en:"Enter URL/UID of Facebook user want to buy VIP",vi:"Nhập URL/UID nick Facebook muốn mua VIP"}:{en:"Enter Facebook UID of user want to buy VIP",vi:"Nhập UID nick Facebook muốn mua VIP"}),":"]}),t.jsx(he,{style:{maxWidth:400},value:g,disabled:n,onChange:s=>y(s.target.value),placeholder:e(a?{en:"Enter URL or UID",vi:"Nhập URL hoặc UID"}:{en:"Enter Facebook UID",vi:"Nhập UID Facebook"}),prefix:t.jsx("i",{className:"fa-solid fa-link"}),size:"large",suffix:a?t.jsx(G,{disabled:(a==null?void 0:a.uid)===(i==null?void 0:i.uid),onClick:()=>{y(""),w(a)},icon:t.jsx("i",{className:"fa-solid fa-user"}),children:e({en:"Me",vi:"Tôi"})}):null}),t.jsx(de,{about:i,showUid:!0}),t.jsx(c.Title,{level:5,style:{marginTop:30},children:e({en:"How many months do you want to buy VIP?",vi:"Bạn muốn mua gói VIP bao nhiêu tháng?"})}),t.jsx(A,{children:t.jsxs(c.Title,{level:4,children:[b(e({vi:I.vi+"đ",en:I.en+" USD"}))," ","x ",t.jsx(ge,{min:1,value:f,onChange:s=>B(s||1)})," ="," ",b(e(I)*f)+e({en:" USD",vi:"đ"}),e({en:" (".concat(b(k)," VND)"),vi:""})]})})]}),t.jsx(N,{}),t.jsx(c.Title,{level:3,children:e({en:"Checkout",vi:"Thanh toán"})}),t.jsx(S,{banner:!0,showIcon:!0,type:"info",message:e({en:"VIP will Auto Unlock after Payment Success",vi:"VIP sẽ Tự động Mở khoá sau khi Thanh toán thành công"})}),i?t.jsxs(Ie,{wrap:!0,justify:"center",gap:"small",children:[t.jsx(Q,{children:t.jsxs(A,{direction:"vertical",align:"center",children:[t.jsx(c.Title,{level:5,children:e({en:"Option 1: Open bank app to scan QR code",vi:"Cách 1: Mở app ngân hàng và quét mã QR"})}),t.jsx(P,{style:{maxWidth:350},src:h}),t.jsx(G,{href:h+"&download=true",target:"_blank",icon:t.jsx("i",{className:"fa-solid fa-download"}),children:e({en:"Download QR",vi:"Tải ảnh QR"})}),C===1?t.jsxs(c.Title,{type:"success",level:5,children:[e({en:"Status: Payment Success",vi:"Trạng thái: Thanh toán thành công"}),t.jsx("i",{className:"fa-solid fa-circle-check fa-lg"})]}):t.jsxs(c.Title,{type:"warning",level:5,children:[e({en:"Status: Waiting for payment...",vi:"Trạng thái: Chờ thanh toán..."})," ",t.jsx("i",{className:"fa-solid fa-circle-notch fa-spin fa-lg"})]})]})}),t.jsx(Q,{children:t.jsxs(A,{direction:"vertical",align:"center",children:[t.jsx(c.Title,{level:5,children:e({en:"Option 2: Transfer to bank account",vi:"Cách 2: Chuyển khoản theo thông tin"})}),t.jsx(P,{style:{maxWidth:130},src:x.logo,preview:!1}),t.jsx(c.Title,{level:4,children:e({en:"Bank name: "+x.bank,vi:"Ngân hàng: "+x.bank})}),t.jsx(z,{pagination:!1,showHeader:!1,size:"middle",rowKey:s=>s.key,dataSource:[{key:1,name:e({en:"Account",vi:"Số TK"}),value:x.acc},{key:2,name:e({en:"Name",vi:"Chủ tài khoản"}),value:x.name},{key:3,name:e({en:"Amount",vi:"Số tiền"}),value:b(k)+" VND"},{key:4,name:e({en:"Description",vi:"Nội dung CK"}),value:d}],columns:[{title:e({en:"Name",vi:"Tên"}),dataIndex:"name",key:"name",render:s=>s+":"},{title:e({en:"Value",vi:"Giá trị"}),dataIndex:"value",key:"value",render:s=>t.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between"},children:[t.jsx("b",{style:{marginRight:8},children:s}),t.jsx(G,{icon:t.jsx("i",{className:"fa-solid fa-copy"}),onClick:()=>le(s)})]})}]}),t.jsx(S,{showIcon:!0,style:{maxWidth:"100%"},banner:!0,message:e({vi:t.jsxs(t.Fragment,{children:["Lưu ý: Vui lòng giữ nguyên nội dung chuyển khoản",t.jsx("br",{}),t.jsx("b",{children:d}),t.jsx("br",{})," để hệ thống tự động xác nhận thanh toán"]}),en:t.jsxs(t.Fragment,{children:["Note: Please keep the transfer description ",t.jsx("br",{}),t.jsx("b",{children:d})," ",t.jsx("br",{}),"system will automatically confirm the payment"]})}),type:"warning"})]})})]}):t.jsx(S,{showIcon:!0,type:"warning",message:e({en:"Please enter facebook profile first",vi:"Vui lòng chọn nick muốn mua VIP trước"})}),t.jsx(N,{}),t.jsxs(A,{direction:"vertical",align:"center",children:[t.jsx(c.Title,{level:3,children:e({en:"Manual",vi:"Thủ công"})}),t.jsx(S,{banner:!0,showIcon:!0,type:"info",message:e({en:t.jsxs(t.Fragment,{children:["The following methods do not yet support AUTOMATIC VIP activation"," ",t.jsx("br",{}),"After making the transfer, please send bill screenshot to"," ",t.jsx("a",{href:O.me.url,target:"_blank",children:"Admin"})," ","to activate VIP"]}),vi:t.jsxs(t.Fragment,{children:["Các phương thức dưới đây chưa hỗ trợ TỰ ĐỘNG mở VIP",t.jsx("br",{}),"Vui lòng gửi hình chụp hoá đơn tới"," ",t.jsx("a",{href:O.me.url,target:"_blank",children:"Admin"})," ","để được mở VIP"]})})}),t.jsx(z,{pagination:!1,dataSource:[{name:"Paypal",logo:Ue,url:"https://paypal.me/hoangtran99",infor:["99.hoangtran@gmail.com","@hoangtran99","0765423185"],qrcode:De},{name:"Vietcombank",logo:Se,infor:["9765423185","TRAN VAN HOANG"],qrcode:Ge},{name:"MoMo",logo:Ve,infor:["0765423185","Trần Văn Hoàng"],qrcode:Te},{name:"Kofi",logo:Be,url:"https://ko-fi.com/99hoangtran",qrcode:Re},{name:"Buy Me a Coffee",logo:Ee,url:"https://buymeacoffee.com/99hoangtran",qrcode:Oe},{name:"Patreon",logo:Le,url:"https://patreon.com/99_hoangtran",qrcode:Fe}],rowKey:s=>s.name,columns:[{title:e({en:"Provider",vi:"Tên"}),dataIndex:"name",key:"name",render(s,m){return t.jsxs(A,{direction:"vertical",children:[t.jsx(P,{src:m.logo,style:{width:50},preview:!1}),t.jsx("b",{children:s})]})}},{title:e({en:"Information",vi:"Thông tin"}),dataIndex:"url",key:"url",render(s,m){var u;return t.jsxs(t.Fragment,{children:[(u=m.infor)==null?void 0:u.map((p,H)=>t.jsx("div",{children:t.jsx("b",{children:p})},H+"infor")),t.jsx("a",{href:s,target:"_blank",children:s==null?void 0:s.replace("https://","")})]})}},{title:e({en:"QR Code",vi:"QR Code"}),dataIndex:"qrcode",key:"qrcode",render:s=>t.jsx(P,{src:s,style:{maxWidth:200,maxHeight:200}}),align:"center"}],style:{maxWidth:"90vw",overflow:"auto"},scroll:{x:"max-content"}})]})]})}export{mt as default};
