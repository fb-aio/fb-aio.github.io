import{r as R,av as t,aw as I}from"./index-CXgZBvTe.js";import{u as T,e as f,t as h,a2 as D,b as C,T as S,B,a3 as p,a4 as x,a5 as j,V as w,S as N}from"./MyApp-D47A_uhM.js";import{R as E}from"./row-Bt-CerIK.js";import{T as k}from"./index-BzJCBCUc.js";import{A as V}from"./index-_zsNpQ32.js";import{L as v}from"./index-Ctnyh2Ow.js";import{C as q}from"./index-BHc_vrRe.js";import{D as b}from"./index-D6hXDqww.js";import"./responsiveObserver-B0ld0t--.js";import"./Pagination-Dp599R6j.js";import"./useBreakpoint-C4Miuw2K.js";import"./index-B7UgV9Yn.js";import"./PurePanel-CznNEqSQ.js";import"./SearchOutlined-3xWvG4Kj.js";const m={Facebook:{params:["fbclid","mc_eid"]},Instagram:{params:["igshid"]},Tiktok:{params:["ttclid"]},Twitter:{domains:["twitter.com"],params:["s","t"]},Google:{domains:["google.com"],params:["gclid","glsrc","_ga","sxsrf","source","ei","iflsig","gs_lp","gs_lcrp","sclient","ved","uact","stick","sca_esv"]},Spotify:{domains:["spotify.com","youtube.com","reddit.com"],params:["si","context"]},Youtube:{domains:["youtube.com"],params:["feature","ab_channel","pp","bp","redir_token","event","embeds_referring_euri","source_ve_path"]},Amazon:{domains:["amazon.*"],params:["ref","tag","linkCode","hv(adid|netw|qmt|bmt|dev|locint|locphy|targid)","psc","content-id","pd_rd_(w|p|r|i|wg)"]},Bing:{domains:["bing.com"],params:["toWww","redig","form","qs","sp","ghc","lq","pq","sc","sk","cvid","ghsh","ghacc","ghpl","ccid","id","thid","simid","FORM","ck","ajaxhist","ajaxserp","osid"]},LinkedIn:{domains:["linkedin.com"],params:["trackingId","lipi","midSig","trkEmail","otpToken","refId","midToken","trk","eid","mcid","ePP","ccuid","cid"]},Reddit:{params:["share_id"]},Adobe:{params:["ef_id","s_kwcid"]},Microsoft:{params:["msclkid"]},Pinterest:{params:["epik"]}},y=[{id:"header_fb",name:"Facebook",isHeader:!0,icon:t.jsx("i",{className:"fa-brands fa-facebook"})},{id:"fb_blockSeenStory",icon:"👀",name:{vi:'Chặn "đã xem" trên story Facebook',en:'Block the "seen" feature in Facebook Stories'},desc:{vi:"Xem story không bị đối phương phát hiện ngay trên Facebook",en:"View stories anonymously right on Facebook"},contentScript:{id:"fb_blockSeenStory",js:["./scripts/content/fb_blockSeenStory.js"],matches:["https://www.facebook.com/*","https://web.facebook.com/*"],runAt:"document_start",world:"MAIN",allFrames:!0}},{id:"fb_addDownloadVideoBtn",icon:"⬇",name:{vi:"Thêm nút tải cho mọi video trên Facebook",en:"Add download button on every video on Facebook"},desc:{vi:"Hỗ trợ mọi video/reel/comment",en:"Support all video/reel/comment"},contentScript:{id:"fb_addDownloadVideoBtn",js:["./scripts/content/fb_addDownloadVideoBtn.js"],matches:["https://www.facebook.com/*","https://web.facebook.com/*"],runAt:"document_start",world:"MAIN",allFrames:!1}},{id:"fb_addVideoControlBtn",icon:"🕹️",name:{vi:"Thêm giao diện điều khiển video trên Facebook",en:"Add control button on video on Facebook"},desc:{vi:"Có thể tua tới thời điểm bất kỳ của tất cả video/reel",en:"Jump to any point in any video/reel"},contentScript:{id:"fb_addVideoControlBtn",js:["./scripts/content/fb_addVideoControlBtn.js"],matches:["https://www.facebook.com/*","https://web.facebook.com/*"],runAt:"document_start",world:"MAIN",allFrames:!1}},{id:"fb_showTotalPostReactions",icon:"❤️",name:{vi:"Đếm tổng lượt thích bài viết trên Facebook",en:"Count total post reactions on Facebook"},desc:{vi:"Áp dụng cho những bài viết bị ẩn lượt thích",en:"Applies to posts that hide reactions"},contentScript:{id:"fb_showTotalPostReactions",js:["./scripts/content/fb_showTotalPostReactions.js"],matches:["https://www.facebook.com/*","https://web.facebook.com/*"],runAt:"document_start",world:"MAIN",allFrames:!0}},{id:"fb_stopNewFeed",icon:"🚫",name:{vi:"Tạm dừng tải dòng thời gian trên facebook",en:"Stop load new feed on facebook"},desc:{vi:"Giúp tập trung làm việc. Không cho fb tải các tab: story, home, video, nhóm, mua bán",en:"Focus to work. Stop load these new feeds: stories, home, video, group, marketplace"},contentScript:{id:"fb_stopNewFeed",js:["./scripts/content/fb_stopNewFeed.js"],matches:["https://www.facebook.com/*","https://web.facebook.com/*"],runAt:"document_start",world:"MAIN",allFrames:!0}},{id:"header_insta",name:"Instagram",isHeader:!0,icon:t.jsx("i",{className:"fa-brands fa-instagram"})},{id:"insta_blockSeenStory",icon:"👀",name:{vi:'Chặn "đã xem" trên story Instagram',en:'Block the "seen" feature in Instagram Stories'},desc:{vi:"Xem story không bị đối phương phát hiện ngay trên Instagram",en:"View stories anonymously right on Instagram"},contentScript:{id:"insta_blockSeenStory",js:["./scripts/content/insta_blockSeenStory.js"],matches:["https://*.instagram.com/*"],runAt:"document_start",world:"MAIN",allFrames:!0}},{id:"header_threads",name:"Threads",isHeader:!0,icon:t.jsx("i",{className:"fa-solid fa-at"})},{id:"threads_addDownloadVideoBtn",icon:"⬇",name:{vi:"Thêm nút tải cho mọi video trên Threads",en:"Add download button on every video on Threads"},desc:{vi:"Hỗ trợ mọi video/reel/comment",en:"Support all video/reel/comment"},contentScript:{id:"threads_addDownloadVideoBtn",js:["./scripts/content/threads_addDownloadVideoBtn.js"],matches:["https://*.threads.net/*"],runAt:"document_start",world:"MAIN",allFrames:!1}},{id:"header_others",name:"Others",isHeader:!0,icon:t.jsx("i",{className:"fa-solid fa-screwdriver-wrench"})},{id:"fb_removeFbclid",icon:"🔗",name:{vi:"Xoá tham số theo dõi trên mọi url (fbclid, ttclid, ...)",en:"Delete tracking param from all urls (fbclid, ttclid, ...)"},desc:{vi:"Tự động xoá các tham số theo dõi trên mọi url ("+Object.keys(m).join(", ")+")",en:"Auto remove all tracking params from all urls ("+Object.keys(m).join(", ")+")"},onEnable:async()=>{function n(o){const l=/\((.*?)\)/,s=o.match(l);if(s){const e=s[1].split("|"),d=o.split("(")[0];return e.map(r=>d+r.trim())}else return[o]}const c=1e3;let i=0,a=[];for(let o in m){let l=c+i;i++;let{domains:s=[],params:e}=m[o];s=(s==null?void 0:s.filter(Boolean))||[],a.push({id:l,priority:1,action:{type:"redirect",redirect:{transform:{queryTransform:{removeParams:e.map(d=>n(d)).flat()}}}},condition:{isUrlFilterCaseSensitive:!0,regexFilter:`[?&](${e.join("|")})=`,resourceTypes:["main_frame","sub_frame"],...s.length>0?{requestDomains:s}:{}}})}console.log(a),await p("chrome.declarativeNetRequest.updateDynamicRules",[{addRules:a,removeRuleIds:a.map(o=>o.id)}]),x("remove_tracking_in_url",a.map(o=>o.id)),console.log("added",a)},onDisable:async()=>{const n=await j("remove_tracking_in_url");console.log("deleted",n),p("chrome.declarativeNetRequest.updateDynamicRules",[{removeRuleIds:n}])},supported:!0,button:t.jsx(S,{title:w({vi:"Danh sách tham số",en:"Tracking params list"}),children:t.jsx(I,{type:"default",icon:t.jsx("i",{className:"fa-solid fa-question"}),onClick:()=>{N.fire({icon:"info",title:w({vi:"Danh sách tham số",en:"Tracking params list"}),html:'<textarea rows="20" style="width: 100%" readonly>'+JSON.stringify(m,null,2)+"</textarea>"})}})})}],_="AutoRun.OtherScriptEnabled";async function A(n=!1){const i=(await p("chrome.scripting.getRegisteredContentScripts")||[]).map(o=>o.id);if(n)return i;const a=await j(_)||[];return[...i,...a]}async function H(n){const c=n.map(o=>o.contentScript).filter(Boolean),i=await A(!0);await p("chrome.scripting.unregisterContentScripts",[{ids:i}]),c.length&&await p("chrome.scripting.registerContentScripts",[c]);const a=n.filter(o=>!o.contentScript).map(o=>o.id);a.length&&await x(_,a)}function Z(){const{ti:n}=T(),[c,i]=f("AutoRun.supported",new Set),[a,o]=f("AutoRun.enabled",new Set),l=y.map(e=>e.isHeader?e:{...e,enabled:a.has(e==null?void 0:e.id),supported:e.supported??c.has(e==null?void 0:e.id)}),s=e=>{var u,g;const d=a.has(e.id),r=new Set(a);d?(h("AutoRun.Disable."+e.id),r.delete(e.id),(u=e.onDisable)==null||u.call(e)):(h("AutoRun.Enable."+e.id),r.add(e.id),(g=e.onEnable)==null||g.call(e)),o(r),H(y.filter(F=>r.has(F.id)))};return R.useEffect(()=>{h("AutoRun:onLoad"),D().then((e=[])=>{i(new Set(e))}),A().then((e=[])=>{console.log(e),o(new Set(e))})},[]),t.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",width:"100%",height:"100%"},children:[t.jsx(E,{align:"middle",style:{margin:"16px"},children:t.jsx(k.Title,{level:3,style:{margin:0},children:n({en:"AutoRun Features",vi:"Tự động chạy"})})}),t.jsx(C,{align:"start",children:t.jsx(V,{showIcon:!0,type:"success",message:n({en:"These features will be automatically run when you open facebook/instagram.",vi:"Các chức năng dưới đây sẽ được tự động chạy khi bạn mở facebook/instagram"})})}),t.jsx(v,{style:{padding:10},dataSource:l,renderItem:(e,d)=>{var r;return e.isHeader?t.jsx(t.Fragment,{children:t.jsxs("h2",{children:[e.icon," ",n(e.name)]},e.id)}):t.jsx(v.Item,{style:{marginBottom:(r=l[d+1])!=null&&r.isHeader?40:0},children:t.jsxs(q,{disabled:!e.supported,checked:e.enabled,onChange:u=>{s(e)},children:[t.jsxs(S,{title:n(e.desc),children:[t.jsxs(k.Text,{style:{opacity:e.supported?1:.6},children:[t.jsx(b,{type:"vertical"}),e.icon,t.jsx(b,{type:"vertical"}),n(e.name)]}),!e.supported&&t.jsx(B,{count:n({en:"Coming soon",vi:"Sắp có"}),style:{color:"white",marginLeft:10},color:"geekblue"})]}),e.button?t.jsxs(t.Fragment,{children:[t.jsx(b,{type:"vertical"}),e.button]}):null]})})}})]})}export{Z as default};
