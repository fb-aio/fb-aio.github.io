System.register(["./index-legacy-BSR7-2Hx.js","./MyApp-legacy-CU4J-kDQ.js","./core-legacy-Bhluv6V3.js","./videos-legacy-XaxZz_Ah.js","./core-legacy-B_A7dvYh.js","./index-legacy-DTZ8LRsY.js","./index-legacy-2tbREo-L.js","./PurePanel-legacy-BaYx6kVo.js","./index-legacy-DO6s_TFv.js","./index-legacy-CF5vHOxB.js","./index-legacy-BSz8tNdx.js","./index-legacy-mCfEz7hO.js","./Collapse-legacy-BqA-FxMK.js"],(function(e,t){"use strict";var a,l,n,r,s,o,i,d,c,u,g,h,m,y,p,v,b,k,f,j,x,w,I,C,S,T,_,G,P,B,z,R,D,A,F,U,O,E,M,L,N,H,V,$,K,q,J;return{setters:[e=>{a=e.r,l=e.t,n=e.M,r=e.R,s=e.a1,o=e.p,i=e.aI,d=e.au,c=e.ba,u=e.aK,g=e.bu,h=e.aT,m=e.ay,y=e.az,p=e.bt,v=e.b4,b=e.aM,k=e.aQ,f=e.av,j=e.aX,x=e.bv,w=e.bw,I=e.aY},e=>{C=e.p,S=e.w,T=e.o,_=e.u,G=e.e,P=e.t,B=e.S,z=e.x,R=e.c,D=e.y,A=e.d,F=e.B},e=>{U=e.g,O=e.a},e=>{E=e.g},e=>{M=e.g},e=>{L=e.A},e=>{N=e.T},e=>{H=e.g},e=>{V=e.S},e=>{$=e.I},e=>{K=e.T},e=>{q=e.A},e=>{J=e.C}],execute:function(){e({f:te,g:ae});const{Option:Q}=V;function W(e){return(null==e?void 0:e.type)&&(e.type.isSelectOption||e.type.isSelectOptGroup)}const X=(e,t)=>{var i;const{prefixCls:d,className:c,popupClassName:u,dropdownClassName:g,children:h,dataSource:m}=e,y=l(h);let p;1===y.length&&a.isValidElement(y[0])&&!W(y[0])&&([p]=y);const v=p?()=>p:void 0;let b;b=y.length&&W(y[0])?h:m?m.map((e=>{if(a.isValidElement(e))return e;switch(typeof e){case"string":return a.createElement(Q,{key:e,value:e},e);case"object":{const{value:t}=e;return a.createElement(Q,{key:t,value:t},e.text)}default:return}})):[];const{getPrefixCls:k}=a.useContext(n),f=k("select",d),[j]=r("SelectLike",null===(i=e.dropdownStyle)||void 0===i?void 0:i.zIndex);return a.createElement(V,Object.assign({ref:t,suffixIcon:null},s(e,["dataSource","dropdownClassName"]),{prefixCls:f,popupClassName:u||g,dropdownStyle:Object.assign(Object.assign({},e.dropdownStyle),{zIndex:j}),className:o(`${f}-auto-complete`,c),mode:V.SECRET_COMBOBOX_MODE_DO_NOT_USE,getInputElement:v}),b)},Y=a.forwardRef(X),Z=H(Y,"dropdownAlign",(e=>s(e,["visible"])));Y.Option=Q,Y._InternalPanelDoNotUseOrYouWillBeFired=Z;const ee={cfrsToken:null,fb_dtsg:null};async function te(e={},t="https://www.threads.net/api/graphql"){const a=await async function(){if(!ee.fb_dtsg)try{const e=await d("https://www.threads.net"),t=(new DOMParser).parseFromString(e,"text/html");ee.fb_dtsg=C(t?.querySelector("#__eqmc")?.textContent||"{}").f}catch(e){console.log(e)}return ee.fb_dtsg}();if(!a)throw new Error(i({en:"Cannot find dtsg token",vi:"Không lấy được dtsg token"}));return T(e,t,!0,{fb_dtsg:a})}function ae(e=""){return`https://www.threads.net/${e}`}const le=""+new URL("fb_get_id-CRQt-p2p.png",t.meta.url).href,ne=a.lazy((()=>I((()=>t.import("./ProfileCard-legacy-BP9nfmxX.js")),void 0,t.meta.url))),re=a.lazy((()=>I((()=>t.import("./index-legacy-DBO3teqP.js")),void 0,t.meta.url))),se=a.lazy((()=>I((()=>t.import("./Tagged-legacy-CdM7wMNW.js")),void 0,t.meta.url))),oe=a.lazy((()=>I((()=>t.import("./About-legacy-BqYda1BO.js")),void 0,t.meta.url))),ie=a.lazy((()=>I((()=>t.import("./Stories-legacy-D6xH7VT-.js")),void 0,t.meta.url))),de=a.lazy((()=>I((()=>t.import("./Albums-legacy-OyRhxgrS.js")),void 0,t.meta.url))),ce=a.lazy((()=>I((()=>t.import("./Videos-legacy-976Igy0a.js")),void 0,t.meta.url))),ue=a.lazy((()=>I((()=>t.import("./Photos-legacy-CFCp5omZ.js")),void 0,t.meta.url))),ge=a.lazy((()=>I((()=>t.import("./Album-legacy-F4blYxnG.js")),void 0,t.meta.url))),he=a.lazy((()=>I((()=>t.import("./Reels-legacy-CgFCWsOD.js")),void 0,t.meta.url))),me=a.lazy((()=>I((()=>t.import("./LikedPages-legacy-Bnfl56BK.js")),void 0,t.meta.url))),ye=a.lazy((()=>I((()=>t.import("./JoinedGroups-legacy-CpxtrKmy.js")),void 0,t.meta.url))),pe=a.lazy((()=>I((()=>t.import("./CheckedIns-legacy-CKrf2oZq.js")),void 0,t.meta.url))),ve=a.lazy((()=>I((()=>t.import("./GroupFiles-legacy-Dz7avY_I.js")),void 0,t.meta.url))),be=a.lazy((()=>I((()=>t.import("./GroupMembers-legacy-CzKcvCDN.js")),void 0,t.meta.url))),ke=a.lazy((()=>I((()=>t.import("./PostMediaset-legacy--OXakqWS.js")),void 0,t.meta.url))),fe=a.lazy((()=>I((()=>t.import("./IGStories-legacy-DMi3_iTw.js")),void 0,t.meta.url))),je=a.lazy((()=>I((()=>t.import("./IGPosts-legacy-QYKKgnwr.js")),void 0,t.meta.url))),xe=a.lazy((()=>I((()=>t.import("./IGReels-legacy-JkBF2adG.js")),void 0,t.meta.url))),we=a.lazy((()=>I((()=>t.import("./IGHighlights-legacy-DAIRLMVJ.js")),void 0,t.meta.url))),Ie=a.lazy((()=>I((()=>t.import("./IGHighlightMedias-legacy-Byv_jbiJ.js")),void 0,t.meta.url))),Ce=a.lazy((()=>I((()=>t.import("./TiktokUserVideos-legacy-Dh53o5df.js")),void 0,t.meta.url))),Se=a.lazy((()=>I((()=>t.import("./ThreadsPosts-legacy-DNUbIzlk.js")),void 0,t.meta.url))),Te=[{key:"Posts",label:{en:"📝 Posts",vi:"📝 Bài viết"},closable:!1},{key:"Tagged",label:{en:"📌 Tagged",vi:"📌 Lượt tag"},closable:!1},{key:"Stories",label:{en:"❤️ Stories",vi:"❤️ Tin"},closable:!1},{key:"Photos",label:{en:"📷 Photos",vi:"📷 Ảnh"},closable:!1},{key:"Videos",label:{en:"🎬 Videos",vi:"🎬 Video"},closable:!1},{key:"Albums",label:"🏞️ Albums",closable:!1},{key:"Reels",label:"🌈 Reels",closable:!1},{key:"Liked Pages",label:{en:"👍 Liked",vi:"👍 Thích"},closable:!1},{key:"Joined Groups",label:{en:"👥 Groups",vi:"👥 Nhóm"},closable:!1},{key:"Check In",label:"🌎 Check in",closable:!1},{key:"Files",label:"📁 Files",closable:!1},{key:"Members",label:{en:"👤 Members",vi:"👤 Thành viên"},closable:!1}],_e=[{key:"Post Media",label:{en:"📝 Post Media",vi:"📝 Ảnh trong Bài viết"},closable:!0},...Te],Ge=[{key:"IG Stories",label:{en:"❤️ Stories",vi:"❤️ Tin"},closable:!1},{key:"IG Highlights",label:"🌟 Highlight",closable:!1},{key:"IG Posts",label:"📝 Posts",closable:!1},{key:"IG Reels",label:"🌈 Reels",closable:!1}],Pe=[{key:"Tiktok User Videos",label:"🎬 Videos",closable:!1}],Be=[{key:"Threads",label:"📝 Threads",closable:!1}],ze=[p.Facebook,p.Instagram,p.Threads,p.Tiktok],Re=Object.freeze(Object.defineProperty({__proto__:null,default:function(){const e=c(),{ti:t}=u(),{message:l}=_(),[n,r]=g(),s=h(),o=s.state?.targetId||n.get("targetId")||"",i=s.state?.platform||n.get("platform")||"",d=m(y.platform),I=m(y.setPlatform),T=m(y.bulkSearchHistory),H=m(y.addBulkSearchHistory),V=m(y.clearBulkSearchHistory),Q=m(y.deleteBulkSearchHistory),[W,X]=a.useState(!1),[Z,ee]=a.useState(i||d||p.Facebook),[Re,De]=G(`BulkDownloader.${Z}.activeTab`,""),[Ae,Fe]=G(`BulkDownloader.${Z}.tabs`,Z===p.Facebook?Te:Ge),[Ue,Oe]=G(`BulkDownloader.${Z}.about`,null),[Ee,Me]=G(`BulkDownloader.${Z}.about.tiktok`,null),[Le,Ne]=G(`BulkDownloader.${Z}.targetId`,Z===i?o:""),[He,Ve]=G(`BulkDownloader.${Z}.${Ue?.id}.postId`,""),[$e,Ke]=a.useState("");a.useEffect((()=>{P("BulkDownloader:onLoad")}),[]);const qe=a.useMemo((()=>{const e=T?.filter((e=>e.platform===Z&&(!$e||v($e,e.targetId+e.name))))?.reverse()?.map((e=>({value:e.targetId,label:b.jsxs(B,{style:{width:"100%",position:"relative"},children:[b.jsx(L,{size:"small",src:e.avatar}),b.jsxs("span",{children:[e.name," ",e.targetId!==e.name?` (${e.targetId})`:""]}),b.jsx(k,{onClick:t=>{t.stopPropagation(),t.preventDefault(),Q(Z,e.targetId)},icon:b.jsx("i",{className:"fa-solid fa-xmark"}),style:{position:"absolute",right:0,top:0,height:"100%"}})]})})))||[];return e.length&&e.push({value:"",disabled:!0,label:b.jsx(B,{align:"center",style:{width:"100%",justifyContent:"flex-end"},children:b.jsx(k,{danger:!0,type:"text",icon:b.jsx("i",{className:"fa-solid fa-trash-can"}),onClick:()=>V(Z),children:t({en:"Clear",vi:"Clear"})})})}),e}),[T,Le,Z,$e]),Je=function(e){const t=a.useRef();return a.useEffect((()=>{t.current=e}),[e]),t.current}(Re),Qe=Ue?.type||S.User;a.useEffect((()=>{I(Z)}),[Z,I]),a.useEffect((()=>{o&&Xe(o)}),[o]);const We=a.useMemo((()=>Z===p.Facebook?{placeholder:t({en:"Enter facebook URL/ID",vi:"Nhập URL/ID facebook"}),canDownload:t({en:"Can download: Post Media / Story / Photos / Videos / Reels / Albums / Group's Files / Joined Groups / Liked Pages / Checkin",vi:"Có thể tải: Bài viết / Story / Ảnh / Videos / Reels / Albums / Group Files / Nhóm tham gia / Trang đã thích / Checkin"}),tip:t({en:b.jsxs(b.Fragment,{children:["Tip: Use"," ",b.jsx("b",{children:b.jsx("a",{href:f.FB_AIO.webstore,target:"_blank",children:j})})," ","extension to get ID"]}),vi:b.jsxs(b.Fragment,{children:["Gợi ý: Sử dụng extension"," ",b.jsx("b",{children:b.jsx("a",{href:f.FB_AIO.webstore,target:"_blank",children:j})})," ","để lấy ID"]})}),tipImg:le,async onSearch(a){let n;if(X(!0),!/^\d+$/.test(a)){const r=`BulkDownloader.onSearch.${a}`;l.loading({key:r,duration:0,content:t({en:"Finding uid...",vi:"Đang tìm uid..."})});const s=await z(a);if(s){l.loading({key:r,content:t({en:"Found video. Getting download link...",vi:"Tìm thấy video. Đang tìm link tải..."}),duration:0});const n=await E(s);return n?(l.success({key:r,content:t({en:"Found video download link",vi:"Tìm thấy link tải video"})}),e("/video-downloader",{state:{url:a,info:n}})):l.error({key:r,content:t({en:"Can not found video download link",vi:"Không tìm thấy link tải video"})}),void X(!1)}const o=await R(a);if(!o)return l.error({key:r,content:t({en:"Can not find uid: ",vi:"Không tìm thấy uid: "})+a}),void X(!1);{let e=a;Ne(a=o),l.success({key:r,content:t({en:"Found uid: ",vi:"Tìm thấy uid: "})+a}),n=await D(e),n&&l.success({content:t({en:"Found post id: ",vi:"Tìm thấy id bài viết: "})+n})}}A(a).then((e=>{console.log(e),Oe(e),Ve(n||""),Fe(n?_e:Te),n&&De("Post Media"),H({platform:Z,targetId:a,name:e.name,avatar:e.avatar})})).catch((e=>{l.error(e.message)})).finally((()=>X(!1)))}}:Z===p.Instagram?{placeholder:t({en:"Enter insta URL",vi:"Nhập URL instagram"}),canDownload:t({en:"Can download: IG Stories / IG Highlights / IG Posts / IG Reels",vi:"Có thể tải: Story / Highlight / IG Posts / IG Reels"}),onSearch(e){if(X(!0),e.includes("instagram.com")){const a=U(e);if(!a)return l.error({content:t({en:"Can not find username: ",vi:"Không tìm thấy tên người dùng: "})+e}),void X(!1);Ne(e=a)}O(e).then((t=>{Oe(t),Fe(Ge),H({platform:Z,targetId:e,name:t?.name||t?.username,avatar:t?.avatar}),console.log(t)})).catch((e=>{l.error(e.message+" - "+t({en:"Please make sure you are logged in to Instagram.",vi:"Vui lòng kiểm tra bạn đã đăng nhập Instagram."}))})).finally((()=>X(!1)))}}:Z===p.Threads?{placeholder:t({en:"Enter threads URL",vi:"Nhập URL threads"}),canDownload:t({en:"Can download: Threads / Replies / Reposts",vi:"Có thể tải: Threads / Replies / Reposts"}),onSearch(e){if(X(!0),e.includes("https://")){const a=function(e=""){return/www.threads.net\/@([^\/]+)/.exec(e)?.[1]||/instagram.com\/([^\/]+)/.exec(e)?.[1]}(e);if(!a)return l.error({content:t({en:"Can not find username: ",vi:"Không tìm thấy tên người dùng: "})+e}),void X(!1);Ne(e=a)}(async function(e=""){const t=await te({fb_api_req_friendly_name:"BarcelonaUsernameHoverCardImplQuery",variables:{username:e,__relay_internal__pv__BarcelonaShouldShowFediverseM075Featuresrelayprovider:!1},doc_id:"7679337195500348"}),a=C(t);return console.log(a),{id:a?.data?.user?.id,name:a?.data?.user?.full_name,username:a?.data?.user?.username,avatar:a?.data?.user?.profile_pic_url,avatarBig:a?.data?.user?.hd_profile_pic_versions?.sort?.(((e,t)=>t.width*t.height-e.width*e.height))?.[0]?.url,type:S.ThreadsUser,url:ae("@"+e),raw:a}})(e).then((a=>{console.log(a),a?.id?(Oe(a),Fe(Be),H({platform:Z,targetId:e,name:a?.name,avatar:a?.avatarBig||a?.avatar})):l.error({content:t({en:"Can not find username: ",vi:"Không tìm thấy người dùng: "})+e})})).catch((e=>{l.error(e.message+" - "+t({en:"Please make sure you are logged in to Threads.",vi:"Vui lòng kiểm tra bạn đã đăng nhập Threads."}))})).finally((()=>X(!1)))}}:{placeholder:t({en:"Enter tiktok user URL",vi:"Nhập URL nguời dùng tiktok"}),canDownload:t({en:"Can download: All profile's videos",vi:"Có thể tải: Tất cả video trang cá nhân"}),async onSearch(e){X(!0);let a=await M(e);if(console.log(a),a){const e={id:a.id,name:a.nickname,avatar:a.avatar,username:a.secUid,url:"https://www.tiktok.com/@"+a.uniqueId,type:S.TikTokUser,raw:a};Fe(Pe),Ne(a.uniqueId),H({platform:Z,targetId:a.uniqueId,name:e.name,avatar:e.avatar}),Oe(e),Me(a)}else l.error({content:t({en:"Can not find user info: ",vi:"Không tìm thấy thông tin người dùng: "})+e});X(!1)}}),[Z,t]),Xe=async(e=Le)=>{const t=e?.trim();0!=t?.length&&(P("BulkDownloader:onSearch_"+Z+":"+t),Ne(t),We?.onSearch?.(t))},Ye=e=>{const t="Album-"+e.id;P("BulkDownloader:onOpenAlbum"),Fe((a=>[...a,{key:t,label:"Album: "+e.name,closable:!0,props:{album:e}}])),De(t)},Ze=e=>{const t="IG Highlight-"+e.id;P("BulkDownloader:onOpenIGHighlight"),Fe((a=>[...a,{key:t,label:"IG Highlight: "+e.title,closable:!0,props:{highlight:e}}])),De(t)},et=Ue?Ae.map((e=>{const a=(e=>{switch(e.key){case"Posts":return b.jsx(re,{target:Ue});case"About":return Qe===S.User&&b.jsx(oe,{target:Ue});case"Tagged":return b.jsx(se,{target:Ue});case"Stories":return b.jsx(ie,{target:Ue});case"Photos":return b.jsx(ue,{target:Ue});case"Videos":return b.jsx(ce,{target:Ue});case"Albums":return b.jsx(de,{target:Ue,onOpenAlbum:Ye});case"Reels":return Qe!==S.Group&&b.jsx(he,{target:Ue});case"Joined Groups":return Qe!==S.Group&&b.jsx(ye,{target:Ue});case"Liked Pages":return Qe===S.User&&b.jsx(me,{target:Ue});case"Check In":return Qe===S.User&&b.jsx(pe,{target:Ue});case"Files":return Qe===S.Group&&b.jsx(ve,{target:Ue});case"Members":return Qe===S.Group&&b.jsx(be,{target:Ue});case"Post Media":return b.jsx(ke,{target:Ue,postId:He});case"IG Stories":return b.jsx(fe,{target:Ue});case"IG Posts":return b.jsx(je,{target:Ue});case"IG Reels":return b.jsx(xe,{target:Ue});case"IG Highlights":return b.jsx(we,{target:Ue,onOpenHighlight:Ze});case"Tiktok User Videos":return b.jsx(Ce,{target:Ee});case"Threads":return b.jsx(Se,{target:Ue});default:return e.key.startsWith("Album-")?b.jsx(ge,{target:Ue,album:e.props?.album}):e.key.startsWith("IG Highlight-")?b.jsx(Ie,{target:Ue,highlight:e.props?.highlight}):null}})(e);return{key:e.key,label:t(e.label),closable:e.closable,children:a}})).filter((e=>e.children)):[];return b.jsxs(B,{style:{width:"100%",height:"100%"},direction:"vertical",children:[b.jsxs(B,{direction:"vertical",style:{width:"100%",height:"100%",display:"flex",justifyContent:"center",alignItems:"center"},children:[b.jsx(N.Title,{level:3,style:{margin:0},children:t({en:"Bulk Downloader",vi:"Tải Hàng Loạt"})}),b.jsx(B.Compact,{children:ze.map((e=>b.jsx(F,{count:e===p.Tiktok?t({en:"New",vi:"Mới"}):"",color:"purple",style:{color:"white",zIndex:2},children:b.jsx(k,{size:"middle",type:Z===e?"primary":"default",onClick:()=>(e=>{P("BulkDownloader:onChangePlatform:"+e),ee(e)})(e),icon:b.jsx("i",{className:x[e]||`fa-brands fa-${e.toLocaleLowerCase()} fa-lg`}),children:e})},e)))}),b.jsx(Y,{value:Le,options:qe,onSelect:Xe,onSearch:Ke,style:{width:350,marginBottom:5},children:b.jsx($.Search,{placeholder:We.placeholder,size:"large",style:{width:350},onChange:e=>Ne(e.target.value?.trim()),onSearch:()=>Xe(),enterButton:W?null:b.jsx("i",{className:"fa-solid fa-magnifying-glass"}),loading:W})}),Ue?b.jsx(ne,{about:Ue,onClose:()=>{Oe(null),De(""),Ne("")}}):null]}),et.length?b.jsx(K,{defaultActiveKey:Re,activeKey:Re,type:"editable-card",centered:!0,hideAdd:!0,items:et,onChange:e=>{P("BulkDownloader:onChangeTab:"+e),De(e)},onEdit:(e,t)=>{if("remove"===t){const t=Ae.filter((t=>t.key!==e));Fe(t),De(Je||"")}}}):b.jsxs(B,{direction:"vertical",align:"center",style:{width:"100%",marginTop:10},children:[We.canDownload&&b.jsx(q,{type:"success",showIcon:!0,message:We.canDownload}),w[Z]?.length?b.jsx(J,{defaultActiveKey:["0"],items:[{label:t({en:`Supported ${Z} URL/ID format ?`,vi:`Các định dạng ${Z} được hỗ trợ ?`}),children:w[Z].map((({icon:e,name:a,url:l},n)=>b.jsxs(N.Text,{children:[b.jsx("i",{className:e})," ",b.jsx("b",{children:t(a)}),Array.isArray(l)?b.jsx("ul",{children:l.map((e=>b.jsx("li",{children:e},e)))}):b.jsx(b.Fragment,{children:"u"})]},n)))}]}):null]})]})}},Symbol.toStringTag,{value:"Module"}));e("i",Re)}}}));
