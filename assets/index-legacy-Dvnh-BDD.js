System.register(["./index-legacy-CNCum5uo.js","./MyApp-legacy-CxhvnD7M.js","./core-legacy-qhUMAvH1.js","./videos-legacy-CsGQxB3z.js","./core-legacy-CNiQDe7z.js","./Screen-legacy-rKDJWQ7x.js","./row-legacy-Zp9ZVowt.js","./index-legacy-4lRRAoR_.js","./index-legacy-Bv56PRVU.js","./index-legacy-63949M1T.js","./index-legacy-DGMCzSgQ.js","./Collapse-legacy-CmKJogr_.js","./index-legacy-CewQ8p7C.js"],(function(e,t){"use strict";var a,r,l,n,s,o,i,d,c,g,u,h,m,y,p,v,b,k,j,f,w,x,I,T,S,C,G,P,R,_,z,B,D,F,A,U,H,L,M,N,V,$;return{setters:[e=>{a=e.r,r=e.aE,l=e.aF,n=e.bg,s=e.aU,o=e.bq,i=e.b2,d=e.aI,c=e.aJ,g=e.bp,u=e.bh,h=e.aW,m=e.a_,y=e.br,p=e.bs,v=e.b0},e=>{b=e.p,k=e.r,j=e.q,f=e.u,w=e.k,x=e.t,I=e.S,T=e.I,S=e.f,C=e.v,G=e.i,P=e.w,R=e.j,_=e.B},e=>{z=e.g,B=e.a},e=>{D=e.g},e=>{F=e.g},e=>{A=e.S},e=>{U=e.R},e=>{H=e.R},e=>{L=e.I},e=>{M=e.T},e=>{N=e.A},e=>{V=e.C},e=>{$=e.T}],execute:function(){e({f:K,g:q});const E={cfrsToken:null,fb_dtsg:null};async function K(e={},t="https://www.threads.net/api/graphql"){const a=await async function(){if(!E.fb_dtsg)try{const e=await l("https://www.threads.net"),t=(new DOMParser).parseFromString(e,"text/html");E.fb_dtsg=b(t?.querySelector("#__eqmc")?.textContent||"{}").f}catch(e){console.log(e)}return E.fb_dtsg}();if(!a)throw new Error(r({en:"Cannot find dtsg token",vi:"Không lấy được dtsg token"}));return j(e,t,!0,{fb_dtsg:a})}function q(e=""){return`https://www.threads.net/${e}`}const O=a.lazy((()=>v((()=>t.import("./ProfileCard-legacy-CPn3-TdM.js")),void 0,t.meta.url))),W=a.lazy((()=>v((()=>t.import("./index-legacy-n9LBM7Mm.js")),void 0,t.meta.url))),J=a.lazy((()=>v((()=>t.import("./Tagged-legacy-Cz1Zfg5a.js")),void 0,t.meta.url))),Q=a.lazy((()=>v((()=>t.import("./About-legacy-DO9KsPHv.js")),void 0,t.meta.url))),X=a.lazy((()=>v((()=>t.import("./Stories-legacy-AGs4iBFf.js")),void 0,t.meta.url))),Y=a.lazy((()=>v((()=>t.import("./Albums-legacy-Drmj9a8V.js")),void 0,t.meta.url))),Z=a.lazy((()=>v((()=>t.import("./Videos-legacy-DTmXDIaJ.js")),void 0,t.meta.url))),ee=a.lazy((()=>v((()=>t.import("./Photos-legacy-BKydHG0C.js")),void 0,t.meta.url))),te=a.lazy((()=>v((()=>t.import("./Album-legacy-Bd3lxfRV.js")),void 0,t.meta.url))),ae=a.lazy((()=>v((()=>t.import("./Reels-legacy-BtZemb6J.js")),void 0,t.meta.url))),re=a.lazy((()=>v((()=>t.import("./LikedPages-legacy-fz87z1SY.js")),void 0,t.meta.url))),le=a.lazy((()=>v((()=>t.import("./JoinedGroups-legacy-DJhCGjnu.js")),void 0,t.meta.url))),ne=a.lazy((()=>v((()=>t.import("./CheckedIns-legacy-CnGbYdRI.js")),void 0,t.meta.url))),se=a.lazy((()=>v((()=>t.import("./GroupFiles-legacy-QSR-VUb0.js")),void 0,t.meta.url))),oe=a.lazy((()=>v((()=>t.import("./GroupMembers-legacy-B5DDT1-T.js")),void 0,t.meta.url))),ie=a.lazy((()=>v((()=>t.import("./PostMediaset-legacy-n8QjFRWb.js")),void 0,t.meta.url))),de=a.lazy((()=>v((()=>t.import("./Friends-legacy-BIPdugYu.js")),void 0,t.meta.url))),ce=a.lazy((()=>v((()=>t.import("./Hightlight-legacy-DtVB2bs-.js")),void 0,t.meta.url))),ge=a.lazy((()=>v((()=>t.import("./IGStories-legacy-CwPf7bqJ.js")),void 0,t.meta.url))),ue=a.lazy((()=>v((()=>t.import("./IGPosts-legacy-nwJ1lrPP.js")),void 0,t.meta.url))),he=a.lazy((()=>v((()=>t.import("./IGReels-legacy-SD9p2wl3.js")),void 0,t.meta.url))),me=a.lazy((()=>v((()=>t.import("./IGHighlights-legacy-DOa-kLO0.js")),void 0,t.meta.url))),ye=a.lazy((()=>v((()=>t.import("./IGHighlightMedias-legacy-D0bp1mMc.js")),void 0,t.meta.url))),pe=a.lazy((()=>v((()=>t.import("./TiktokUserVideos-legacy-Bwyc1-tq.js")),void 0,t.meta.url))),ve=a.lazy((()=>v((()=>t.import("./ThreadsPosts-legacy-qzdPyZ8c.js")),void 0,t.meta.url))),be=[{key:"Stories",label:{en:"❤️ Stories",vi:"❤️ Tin"},closable:!1},{key:"Tagged",label:{en:"📌 Tagged",vi:"📌 Lượt tag"},closable:!1},{key:"Posts",label:{en:"📝 Posts",vi:"📝 Bài viết"},closable:!1},{key:"Photos",label:{en:"📷 Photos",vi:"📷 Ảnh"},closable:!1},{key:"Videos",label:{en:"🎬 Videos",vi:"🎬 Video"},closable:!1},{key:"Albums",label:"🏞️ Albums",closable:!1},{key:"Reels",label:"🌈 Reels",closable:!1},{key:"Friends",label:{en:"👤 Friends",vi:"👤 Bạn bè"},closable:!1},{key:"Liked Pages",label:{en:"👍 Liked",vi:"👍 Thích"},closable:!1},{key:"Joined Groups",label:{en:"👥 Groups",vi:"👥 Nhóm"},closable:!1},{key:"Check In",label:"🌎 Check in",closable:!1},{key:"Files",label:"📁 Files",closable:!1},{key:"Members",label:{en:"👤 Members",vi:"👤 Thành viên"},closable:!1}],ke=[{key:"Post Media",label:{en:"📝 Post Media",vi:"📝 Ảnh trong Bài viết"},closable:!0},...be],je=[{key:"IG Stories",label:{en:"❤️ Stories",vi:"❤️ Tin"},closable:!1},{key:"IG Highlights",label:"🌟 Highlight",closable:!1},{key:"IG Posts",label:"📝 Posts",closable:!1},{key:"IG Reels",label:"🌈 Reels",closable:!1}],fe=[{key:"Tiktok User Videos",label:"🎬 Videos",closable:!1}],we=[{key:"Threads",label:"📝 Threads",closable:!1}],xe=[g.Facebook,g.Instagram,g.Threads,g.Tiktok],Ie=Object.freeze(Object.defineProperty({__proto__:null,default:function(){const e=n(),{ti:t}=s(),{message:r}=f(),[l,v]=o(),j=i(),E=j.state?.targetId||l.get("targetId")||"",Ie=j.state?.platform||l.get("platform")||"",Te=d(c.platform),Se=d(c.setPlatform),Ce=d(c.bulkSearchHistory),Ge=d(c.addBulkSearchHistory),Pe=d(c.clearBulkSearchHistory),Re=d(c.deleteBulkSearchHistory),[_e,ze]=a.useState(!1),[Be,De]=a.useState(Ie||Te||g.Facebook),[Fe,Ae]=w(`BulkDownloader.${Be}.activeTab`,""),[Ue,He]=w(`BulkDownloader.${Be}.tabs`,Be===g.Facebook?be:je),[Le,Me]=w(`BulkDownloader.${Be}.about`,null),[Ne,Ve]=w(`BulkDownloader.${Be}.about.tiktok`,null),[$e,Ee]=w(`BulkDownloader.${Be}.targetId`,Be===Ie?E:""),[Ke,qe]=w(`BulkDownloader.${Be}.${Le?.id}.postId`,""),[Oe,We]=a.useState("");a.useEffect((()=>{x("BulkDownloader:onLoad")}),[]);const Je=a.useMemo((()=>{const e=Ce?.filter((e=>e.platform===Be&&(!Oe||u(Oe,e.targetId+e.name))))?.reverse()?.map((e=>({value:e.targetId,label:h.jsxs(I,{style:{width:"100%",position:"relative"},children:[h.jsx(T,{src:e.avatar,width:24,style:{borderRadius:"50%"},fallback:Be===g.Facebook?S(e.targetId,40):void 0,preview:!1}),h.jsxs("span",{children:[e.name," ",e.targetId!==e.name?` (${e.targetId})`:""]}),h.jsx(m,{onClick:t=>{t.stopPropagation(),t.preventDefault(),Re(Be,e.targetId)},icon:h.jsx("i",{className:"fa-solid fa-xmark"}),style:{position:"absolute",right:0,top:0,height:"100%"}})]})})))||[];return e.length&&e.push({value:"",disabled:!0,label:h.jsx(I,{align:"center",style:{width:"100%",justifyContent:"flex-end"},children:h.jsx(m,{danger:!0,type:"text",icon:h.jsx("i",{className:"fa-solid fa-trash-can"}),onClick:()=>Pe(Be),children:t({en:"Clear",vi:"Clear"})})})}),e}),[Ce,$e,Be,Oe]),Qe=function(e){const t=a.useRef();return a.useEffect((()=>{t.current=e}),[e]),t.current}(Fe),Xe=Le?.type||k.User;a.useEffect((()=>{Se(Be)}),[Be,Se]),a.useEffect((()=>{E&&Ze(E)}),[E]);const Ye=a.useMemo((()=>Be===g.Facebook?{placeholder:t({en:"Enter facebook URL/ID",vi:"Nhập URL/ID facebook"}),canDownload:t({en:"Can download: Highlight / Post / Tagged / Story / Photos / Videos / Reels / Albums / Group's Files / Joined Groups / Liked Pages / Checkin",vi:"Có thể tải: Nổi bật / Bài viết / Lượt tag / Story / Ảnh / Videos / Reels / Albums / Group Files / Nhóm tham gia / Trang đã thích / Checkin"}),async onSearch(a){let l;if(ze(!0),!/^\d+$/.test(a)){const n=`BulkDownloader.onSearch.${a}`;r.loading({key:n,duration:0,content:t({en:"Finding uid...",vi:"Đang tìm uid..."})});const s=await C(a);if(s){r.loading({key:n,content:t({en:"Found video. Getting download link...",vi:"Tìm thấy video. Đang tìm link tải..."}),duration:0});const l=await D(s);return l?(r.success({key:n,content:t({en:"Found video download link",vi:"Tìm thấy link tải video"})}),e("/video-downloader",{state:{url:a,info:l}})):r.error({key:n,content:t({en:"Can not found video download link",vi:"Không tìm thấy link tải video"})}),void ze(!1)}const o=await G(a);if(!o)return r.error({key:n,content:t({en:"Can not find uid: ",vi:"Không tìm thấy uid: "})+a}),void ze(!1);{let e=a;Ee(a=o),r.success({key:n,content:t({en:"Found uid: ",vi:"Tìm thấy uid: "})+a}),l=await P(e),l&&r.success({content:t({en:"Found post id: ",vi:"Tìm thấy id bài viết: "})+l})}}R(a).then((e=>{console.log(e),Me(e),qe(l||""),He(l?ke:be),l&&Ae("Post Media"),Ge({platform:Be,targetId:a,name:e.name,avatar:e.avatar})})).catch((e=>{r.error(e.message)})).finally((()=>ze(!1)))}}:Be===g.Instagram?{placeholder:t({en:"Enter insta URL",vi:"Nhập URL instagram"}),canDownload:t({en:"Can download: IG Stories / IG Highlights / IG Posts / IG Reels",vi:"Có thể tải: Story / Highlight / IG Posts / IG Reels"}),onSearch(e){if(ze(!0),e.includes("instagram.com")){const a=z(e);if(!a)return r.error({content:t({en:"Can not find username: ",vi:"Không tìm thấy tên người dùng: "})+e}),void ze(!1);Ee(e=a)}B(e).then((t=>{Me(t),He(je),Ge({platform:Be,targetId:e,name:t?.name||t?.username,avatar:t?.avatar}),console.log(t)})).catch((e=>{r.error(e.message+" - "+t({en:"Please make sure you are logged in to Instagram.",vi:"Vui lòng kiểm tra bạn đã đăng nhập Instagram."}))})).finally((()=>ze(!1)))}}:Be===g.Threads?{placeholder:t({en:"Enter threads URL",vi:"Nhập URL threads"}),canDownload:t({en:"Can download: Threads / Replies / Reposts",vi:"Có thể tải: Threads / Replies / Reposts"}),onSearch(e){if(ze(!0),e.includes("https://")){const a=function(e=""){return/www.threads.net\/@([^\/]+)/.exec(e)?.[1]||/instagram.com\/([^\/]+)/.exec(e)?.[1]}(e);if(!a)return r.error({content:t({en:"Can not find username: ",vi:"Không tìm thấy tên người dùng: "})+e}),void ze(!1);Ee(e=a)}(async function(e=""){const t=await K({fb_api_req_friendly_name:"BarcelonaUsernameHoverCardImplQuery",variables:{username:e,__relay_internal__pv__BarcelonaShouldShowFediverseM075Featuresrelayprovider:!1},doc_id:"7679337195500348"}),a=b(t);return console.log(a),{id:a?.data?.user?.id,name:a?.data?.user?.full_name,username:a?.data?.user?.username,avatar:a?.data?.user?.profile_pic_url,avatarBig:a?.data?.user?.hd_profile_pic_versions?.sort?.(((e,t)=>t.width*t.height-e.width*e.height))?.[0]?.url,type:k.ThreadsUser,url:q("@"+e),raw:a}})(e).then((a=>{console.log(a),a?.id?(Me(a),He(we),Ge({platform:Be,targetId:e,name:a?.name,avatar:a?.avatarBig||a?.avatar})):r.error({content:t({en:"Can not find username: ",vi:"Không tìm thấy người dùng: "})+e})})).catch((e=>{r.error(e.message+" - "+t({en:"Please make sure you are logged in to Threads.",vi:"Vui lòng kiểm tra bạn đã đăng nhập Threads."}))})).finally((()=>ze(!1)))}}:{placeholder:t({en:"Enter tiktok user URL",vi:"Nhập URL nguời dùng tiktok"}),canDownload:t({en:"Can download: All profile's videos",vi:"Có thể tải: Tất cả video trang cá nhân"}),async onSearch(e){ze(!0);let a=await F(e);if(console.log(a),a){const e={id:a.id,name:a.nickname,avatar:a.avatar,username:a.secUid,url:"https://www.tiktok.com/@"+a.uniqueId,type:k.TikTokUser,raw:a};He(fe),Ee(a.uniqueId),Ge({platform:Be,targetId:a.uniqueId,name:e.name,avatar:e.avatar}),Me(e),Ve(a)}else r.error({content:t({en:"Can not find user info: ",vi:"Không tìm thấy thông tin người dùng: "})+e});ze(!1)}}),[Be,t]),Ze=async(e=$e)=>{const t=e?.trim();0!=t?.length&&(x("BulkDownloader:onSearch_"+Be+":"+t),Ee(t),Ye?.onSearch?.(t))},et=e=>{const t="Album-"+e.id;x("BulkDownloader:onOpenAlbum"),He((a=>[...a,{key:t,label:"Album: "+e.name,closable:!0,props:{album:e}}])),Ae(t)},tt=e=>{const t="IG Highlight-"+e.id;x("BulkDownloader:onOpenIGHighlight"),He((a=>[...a,{key:t,label:"IG Highlight: "+e.title,closable:!0,props:{highlight:e}}])),Ae(t)},at=Le?Ue.map((e=>{const a=(e=>{switch(e.key){case"Posts":return h.jsx(W,{target:Le});case"About":return Xe===k.User&&h.jsx(Q,{target:Le});case"Tagged":return h.jsx(J,{target:Le});case"Stories":return h.jsx(X,{target:Le});case"Photos":return h.jsx(ee,{target:Le});case"Videos":return h.jsx(Z,{target:Le});case"Albums":return h.jsx(Y,{target:Le,onOpenAlbum:et});case"Reels":return Xe!==k.Group&&h.jsx(ae,{target:Le});case"Joined Groups":return Xe!==k.Group&&h.jsx(le,{target:Le});case"Liked Pages":return Xe===k.User&&h.jsx(re,{target:Le});case"Check In":return Xe===k.User&&h.jsx(ne,{target:Le});case"Files":return Xe===k.Group&&h.jsx(se,{target:Le});case"Members":return Xe===k.Group&&h.jsx(oe,{target:Le});case"Post Media":return h.jsx(ie,{target:Le,postId:Ke});case"Friends":return Xe===k.User&&h.jsx(de,{target:Le});case"Hightlight":return h.jsx(ce,{target:Le});case"IG Stories":return h.jsx(ge,{target:Le});case"IG Posts":return h.jsx(ue,{target:Le});case"IG Reels":return h.jsx(he,{target:Le});case"IG Highlights":return h.jsx(me,{target:Le,onOpenHighlight:tt});case"Tiktok User Videos":return h.jsx(pe,{target:Ne});case"Threads":return h.jsx(ve,{target:Le});default:return e.key.startsWith("Album-")?h.jsx(te,{target:Le,album:e.props?.album}):e.key.startsWith("IG Highlight-")?h.jsx(ye,{target:Le,highlight:e.props?.highlight}):null}})(e);return{key:e.key,label:t(e.label),closable:e.closable,children:a}})).filter((e=>e.children)):[];return h.jsxs(A,{mode:"center",title:t({en:"Bulk Downloader",vi:"Tải Hàng Loạt"}),children:[h.jsxs(I,{direction:"vertical",align:"center",children:[h.jsx(U,{align:"middle",justify:"center",gutter:[5,5],children:xe.map((e=>h.jsx(_,{count:e===g.Tiktok?t({en:"New",vi:"Mới"}):"",color:"purple",style:{color:"white",zIndex:2},children:h.jsx(m,{shape:"round",size:"middle",type:Be===e?"primary":"default",onClick:()=>(e=>{x("BulkDownloader:onChangePlatform:"+e),De(e)})(e),style:{marginRight:5},icon:h.jsx("i",{className:y[e]||`fa-brands fa-${e.toLocaleLowerCase()} fa-lg`}),children:e})},e)))}),h.jsx(H,{value:$e,options:Je,onSelect:Ze,onSearch:We,style:{width:350,maxWidth:"100%"},size:"large",children:h.jsx(L.Search,{size:"large",placeholder:Ye.placeholder,style:{width:350,maxWidth:"90vw"},onChange:e=>Ee(e.target.value?.trim()),onSearch:()=>Ze(),enterButton:_e?null:h.jsx("i",{className:"fa-solid fa-magnifying-glass"}),loading:_e})}),Le?h.jsx(O,{about:Le,onClose:()=>{Me(null),Ae(""),Ee("")}}):null]}),at.length?h.jsx(M,{defaultActiveKey:Fe,activeKey:Fe,type:"editable-card",centered:!0,hideAdd:!0,items:at,onChange:e=>{x("BulkDownloader:onChangeTab:"+e),Ae(e)},onEdit:(e,t)=>{if("remove"===t){const t=Ue.filter((t=>t.key!==e));He(t),Ae(Qe||"")}},style:{maxWidth:"100%",marginTop:10}}):h.jsxs(I,{direction:"vertical",align:"center",style:{width:"100%",marginTop:10},children:[Ye.canDownload&&h.jsx(N,{type:"success",showIcon:!0,message:Ye.canDownload}),p[Be]?.length?h.jsx(V,{defaultActiveKey:["0"],items:[{label:t({en:`Supported ${Be} URL/ID format ?`,vi:`Các định dạng ${Be} được hỗ trợ ?`}),children:p[Be].map((({icon:e,name:a,url:r},l)=>h.jsxs($.Text,{children:[h.jsx("i",{className:e})," ",h.jsx("b",{children:t(a)}),Array.isArray(r)?h.jsx("ul",{children:r.map((e=>h.jsx("li",{children:e},e)))}):h.jsx(h.Fragment,{children:"u"})]},l)))}]}):null]})]})}},Symbol.toStringTag,{value:"Module"}));e("i",Ie)}}}));
