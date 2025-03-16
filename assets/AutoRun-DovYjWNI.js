import{aU as B,b0 as D,r as x,bA as N,aW as t,aH as f,bB as R,bC as T,aE as j,a_ as C}from"./index-By6QH6pK.js";import{e as _,t as w,S as E,b as v,j as V,B as H}from"./MyApp-DRoqPp25.js";import{B as M}from"./BadgeWrapper-DBF-Gngt.js";import{R as q}from"./row-BB41V0du.js";import{T as g}from"./index-CZ4BF0Pd.js";import{A as L}from"./index-CM83DlXc.js";import{L as A}from"./index-C1fuNhzh.js";import{C as P}from"./index-DfzeQf_9.js";import{D as k}from"./index-wbXPiLFB.js";import"./TextArea-T9XEKIMP.js";import"./Pagination-CUQMFLRJ.js";import"./useBreakpoint-CY6WpSuv.js";import"./useForceUpdate-DhKOmaG8.js";import"./index-DyiPSS8A.js";import"./List-DCI1BWKP.js";import"./PurePanel-CgxAjXTW.js";import"./move-BtkX6lmQ.js";import"./DownOutlined-CBD21Oi3.js";import"./SearchOutlined-DCUa4zAG.js";import"./col-CJrWNI4G.js";import"./index-DOGksFvd.js";const b={Facebook:{params:["fbclid","mc_eid"]},Instagram:{params:["igshid"]},Tiktok:{params:["ttclid"]},Twitter:{domains:["twitter.com"],params:["s","t"]},Google:{domains:["google.com"],params:["gclid","glsrc","_ga","sxsrf","source","ei","iflsig","gs_lp","gs_lcrp","sclient","ved","uact","stick","sca_esv"]},Spotify:{domains:["spotify.com","youtube.com","reddit.com"],params:["si","context"]},Youtube:{domains:["youtube.com"],params:["feature","ab_channel","pp","bp","redir_token","event","embeds_referring_euri","source_ve_path"]},Amazon:{domains:["amazon.*"],params:["ref","tag","linkCode","hv(adid|netw|qmt|bmt|dev|locint|locphy|targid)","psc","content-id","pd_rd_(w|p|r|i|wg)"]},Bing:{domains:["bing.com"],params:["toWww","redig","form","qs","sp","ghc","lq","pq","sc","sk","cvid","ghsh","ghacc","ghpl","ccid","id","thid","simid","FORM","ck","ajaxhist","ajaxserp","osid"]},LinkedIn:{domains:["linkedin.com"],params:["trackingId","lipi","midSig","trkEmail","otpToken","refId","midToken","trk","eid","mcid","ePP","ccuid","cid"]},Reddit:{params:["share_id"]},Adobe:{params:["ef_id","s_kwcid"]},Microsoft:{params:["msclkid"]},Pinterest:{params:["epik"]}},F=[{id:"header_fb",name:"Facebook",isHeader:!0,icon:t.jsx("i",{className:"fa-brands fa-facebook"})},{id:"fb_blockSeenStory",icon:"👀",name:{vi:'Chặn "đã xem" trên story Facebook',en:'Block the "seen" feature in Facebook Stories'},desc:{vi:"Xem story không bị đối phương phát hiện ngay trên Facebook",en:"View stories anonymously right on Facebook"},contentScript:{id:"fb_blockSeenStory",js:["./scripts/content/fb_blockSeenStory.js"],matches:["https://www.facebook.com/*","https://web.facebook.com/*"],runAt:"document_start",world:"MAIN",allFrames:!0}},{id:"fb_addDownloadVideoBtn",icon:"⬇",name:{vi:"Thêm nút tải cho mọi video trên Facebook",en:"Add download button on every video on Facebook"},desc:{vi:"Hỗ trợ mọi video/reel/comment",en:"Support all video/reel/comment"},contentScript:{id:"fb_addDownloadVideoBtn",js:["./scripts/content/fb_addDownloadVideoBtn.js"],matches:["https://www.facebook.com/*","https://web.facebook.com/*"],runAt:"document_start",world:"MAIN",allFrames:!1}},{id:"fb_addVideoControlBtn",icon:"🕹️",name:{vi:"Thêm giao diện điều khiển video trên Facebook",en:"Add control button on video on Facebook"},desc:{vi:"Có thể tua tới thời điểm bất kỳ của tất cả video/reel",en:"Jump to any point in any video/reel"},contentScript:{id:"fb_addVideoControlBtn",js:["./scripts/content/fb_addVideoControlBtn.js"],matches:["https://www.facebook.com/*","https://web.facebook.com/*"],runAt:"document_start",world:"MAIN",allFrames:!1}},{id:"fb_showTotalPostReactions",icon:"❤️",name:{vi:"Đếm tổng lượt thích bài viết trên Facebook",en:"Count total post reactions on Facebook"},desc:{vi:"Áp dụng cho những bài viết bị ẩn lượt thích",en:"Applies to posts that hide reactions"},contentScript:{id:"fb_showTotalPostReactions",js:["./scripts/content/fb_showTotalPostReactions.js"],matches:["https://www.facebook.com/*","https://web.facebook.com/*"],runAt:"document_start",world:"MAIN",allFrames:!0},link:"https://www.facebook.com/groups/fbaio/posts/1437552863566064"},{id:"fb_stopNewFeed",icon:"🚫",name:{vi:"Tạm dừng tải dòng thời gian trên facebook",en:"Stop load new feed on facebook"},desc:{vi:"Giúp tập trung làm việc. Không cho fb tải các tab: story, home, video, nhóm, mua bán",en:"Focus to work. Stop load these new feeds: stories, home, video, group, marketplace"},contentScript:{id:"fb_stopNewFeed",js:["./scripts/content/fb_stopNewFeed.js"],matches:["https://www.facebook.com/*","https://web.facebook.com/*"],runAt:"document_start",world:"MAIN",allFrames:!0},link:"https://www.facebook.com/groups/fbaio/posts/1515339635787386"},{id:"header_insta",name:"Instagram",isHeader:!0,icon:t.jsx("i",{className:"fa-brands fa-instagram"})},{id:"insta_blockSeenStory",icon:"👀",name:{vi:'Chặn "đã xem" trên story Instagram',en:'Block the "seen" feature in Instagram Stories'},desc:{vi:"Xem story không bị đối phương phát hiện ngay trên Instagram",en:"View stories anonymously right on Instagram"},contentScript:{id:"insta_blockSeenStory",js:["./scripts/content/insta_blockSeenStory.js"],matches:["https://*.instagram.com/*"],runAt:"document_start",world:"MAIN",allFrames:!0}},{id:"header_threads",name:"Threads",isHeader:!0,icon:t.jsx("i",{className:"fa-solid fa-at"})},{id:"threads_addDownloadVideoBtn",icon:"⬇",name:{vi:"Thêm nút tải cho mọi video trên Threads",en:"Add download button on every video on Threads"},desc:{vi:"Hỗ trợ mọi video/reel/comment",en:"Support all video/reel/comment"},contentScript:{id:"threads_addDownloadVideoBtn",js:["./scripts/content/threads_addDownloadVideoBtn.js"],matches:["https://*.threads.net/*"],runAt:"document_start",world:"MAIN",allFrames:!1},link:"https://www.facebook.com/groups/fbaio/posts/1515339635787386"},{id:"header_tiktok",name:"Tiktok",isHeader:!0,icon:t.jsx("i",{className:"fa-brands fa-tiktok"})},{id:"tiktok_addDownloadVideoBtn",icon:"⬇",name:{vi:"Thêm nút tải cho mọi video trên Tiktok",en:"Add download button on every video on Tiktok"},desc:{vi:"Hỗ trợ mọi video từ trang chủ, trang tìm kiếm, trang cá nhân, ... ",en:"Support all video from home, search, user profile, ..."},contentScript:{id:"tiktok_addDownloadVideoBtn",js:["./scripts/content/tiktok_addDownloadVideoBtn.js"],matches:["https://*.tiktok.com/*"],runAt:"document_start",world:"MAIN",allFrames:!1},link:"https://www.facebook.com/groups/fbaio/posts/1571748466813169"},{id:"header_others",name:"Others",isHeader:!0,icon:t.jsx("i",{className:"fa-solid fa-screwdriver-wrench"})},{id:"fb_removeFbclid",icon:"🔗",name:{vi:"Xoá tham số theo dõi trên mọi url (fbclid, ttclid, ...)",en:"Delete tracking param from all urls (fbclid, ttclid, ...)"},desc:{vi:"Tự động xoá các tham số theo dõi trên mọi url ("+Object.keys(b).join(", ")+")",en:"Auto remove all tracking params from all urls ("+Object.keys(b).join(", ")+")"},onEnable:async()=>{function n(o){const d=/\((.*?)\)/,s=o.match(d);if(s){const l=s[1].split("|"),p=o.split("(")[0];return l.map(e=>p+e.trim())}else return[o]}const r=1e3;let i=0,a=[];for(let o in b){let d=r+i;i++;let{domains:s=[],params:l}=b[o];s=(s==null?void 0:s.filter(Boolean))||[],a.push({id:d,priority:1,action:{type:"redirect",redirect:{transform:{queryTransform:{removeParams:l.map(p=>n(p)).flat()}}}},condition:{isUrlFilterCaseSensitive:!0,regexFilter:"[?&](".concat(l.join("|"),")="),resourceTypes:["main_frame","sub_frame"],...s.length>0?{requestDomains:s}:{}}})}console.log(a),await f("chrome.declarativeNetRequest.updateDynamicRules",[{addRules:a,removeRuleIds:a.map(o=>o.id)}]),R("remove_tracking_in_url",a.map(o=>o.id)),console.log("added",a)},onDisable:async()=>{const n=await T("remove_tracking_in_url");console.log("deleted",n),f("chrome.declarativeNetRequest.updateDynamicRules",[{removeRuleIds:n}])},supported:!0,button:t.jsx(v,{title:j({vi:"Danh sách tham số",en:"Tracking params list"}),children:t.jsx(C,{type:"default",icon:t.jsx("i",{className:"fa-solid fa-question"}),onClick:()=>{V.fire({icon:"info",title:j({vi:"Danh sách tham số",en:"Tracking params list"}),html:'<textarea rows="20" style="width: 100%" readonly>'+JSON.stringify(b,null,2)+"</textarea>"})}})})}],I="AutoRun.OtherScriptEnabled";async function y(n=!1){const i=(await f("chrome.scripting.getRegisteredContentScripts")||[]).map(o=>o.id);if(n)return i;const a=await T(I)||[];return[...i,...a]}async function O(n){const r=n.map(o=>o.contentScript).filter(Boolean),i=await y(!0);await f("chrome.scripting.unregisterContentScripts",[{ids:i}]),r.length&&await f("chrome.scripting.registerContentScripts",[r]);const a=n.filter(o=>!o.contentScript).map(o=>o.id);a.length&&await R(I,a)}async function le(n){return(await y(!0)).includes(n)}function me(){const{ti:n}=B(),r=D(),[i,a]=_("AutoRun.supported",new Set),[o,d]=_("AutoRun.enabled",new Set),s=x.useMemo(()=>F.map(e=>{var m;return e.isHeader?e:{...e,enabled:o.has(e==null?void 0:e.id),supported:(m=e.supported)!=null?m:i.has(e==null?void 0:e.id)}}),[i,o]),l=e=>{var u,h;const m=o.has(e.id),c=new Set(o);m?(w("AutoRun.Disable."+e.id),c.delete(e.id),(u=e.onDisable)==null||u.call(e)):(w("AutoRun.Enable."+e.id),c.add(e.id),(h=e.onEnable)==null||h.call(e)),d(c),O(F.filter(S=>c.has(S.id)))};x.useEffect(()=>{w("AutoRun:onLoad"),N().then((e=[])=>{a(new Set(e))}),y().then((e=[])=>{console.log(e),d(new Set(e))})},[]);const p=(e,m)=>{var h;const c=r.search.includes(e.id),u=e.isHeader?t.jsx(t.Fragment,{children:t.jsxs(g.Title,{level:4,style:{textAlign:"center"},children:[e.icon," ",n(e.name)]},e.id)}):t.jsx(A.Item,{className:c?"gradient-border":"",style:{marginBottom:(h=s[m+1])!=null&&h.isHeader?40:0,borderRadius:10,...c?{paddingLeft:10}:{}},children:t.jsxs(P,{disabled:!e.supported,checked:e.enabled,onChange:S=>{l(e)},children:[t.jsxs(v,{title:n(e.desc),children:[t.jsxs(g.Text,{style:{opacity:e.supported?1:.6},children:[t.jsx(k,{type:"vertical"}),e.icon,t.jsx(k,{type:"vertical"}),n(e.name)," "]}),!e.supported&&t.jsx(M,{type:"coming"})]}),e.link?t.jsxs(t.Fragment,{children:[t.jsx(k,{type:"vertical"}),t.jsx(v,{title:n({en:"Learn more",vi:"Xem thêm"}),children:t.jsx(g.Link,{href:e.link,target:"_blank",children:t.jsx("i",{className:"fa-solid fa-external-link"})})})]}):null,e.button?t.jsxs(t.Fragment,{children:[t.jsx(k,{type:"vertical"}),e.button]}):null]})});return c?t.jsx(H.Ribbon,{text:n({en:"Enable this",vi:"Bật tại đây"}),children:u}):u};return t.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",width:"100%",height:"100%"},children:[t.jsx(q,{align:"middle",style:{margin:16},children:t.jsx(g.Title,{level:3,style:{margin:0},children:n({en:"AutoRun Features",vi:"Tự động chạy"})})}),t.jsx(E,{align:"start",children:t.jsx(L,{showIcon:!0,type:"success",message:n({en:"These features will be automatically run, when you open relevant websites.",vi:"Các chức năng dưới đây sẽ được tự động chạy, khi bạn mở trang web tương ứng"})})}),t.jsx(A,{style:{padding:10},dataSource:s,renderItem:p})]})}export{me as default,le as isScriptEnabled};
