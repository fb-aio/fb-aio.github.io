System.register(["./index-legacy-QCyg4Nxx.js","./MyApp-legacy-UJ1kH3kU.js","./core-legacy-C-t4WgZw.js","./videos-legacy-DGFapyHU.js","./core-legacy-C7taCTmV.js","./Screen-legacy-dZFoTp4C.js","./row-legacy-DdRJwn49.js","./PurePanel-legacy-pgFjPk-6.js","./index-legacy-DZOTUaBr.js","./index-legacy-CkzEcVsR.js","./index-legacy-C8kY2-pc.js","./index-legacy-CfnD-vfP.js","./Collapse-legacy-CIePIrS7.js","./index-legacy-CQa49DlW.js"],(function(e,t){"use strict";var a,l,n,r,s,o,i,d,c,u,g,h,m,y,p,v,b,k,f,j,x,w,I,S,C,T,G,_,P,B,z,D,R,A,F,O,U,L,E,M,H,N,V,$,K,q,J,W,X,Q;return{setters:[e=>{a=e.r,l=e.t,n=e.M,r=e.T,s=e.a2,o=e.p,i=e.aF,d=e.aG,c=e.bj,u=e.aU,g=e.bB,h=e.b1,m=e.aK,y=e.aL,p=e.bA,v=e.bd,b=e.aX,k=e.b0,f=e.b3,j=e.aH,x=e.bC,w=e.bD,I=e.b8},e=>{S=e.q,C=e.x,T=e.p,G=e.u,_=e.e,P=e.t,B=e.S,z=e.I,D=e.g,R=e.y,A=e.c,F=e.z,O=e.d,U=e.B},e=>{L=e.g,E=e.a},e=>{M=e.g},e=>{H=e.g},e=>{N=e.S},e=>{V=e.R},e=>{$=e.g},e=>{K=e.S},e=>{q=e.I},e=>{J=e.T},e=>{W=e.A},e=>{X=e.C},e=>{Q=e.T}],execute:function(){e({f:se,g:oe});const{Option:Y}=K;function Z(e){return(null==e?void 0:e.type)&&(e.type.isSelectOption||e.type.isSelectOptGroup)}const ee=(e,t)=>{var i;const{prefixCls:d,className:c,popupClassName:u,dropdownClassName:g,children:h,dataSource:m}=e,y=l(h);let p;1===y.length&&a.isValidElement(y[0])&&!Z(y[0])&&([p]=y);const v=p?()=>p:void 0;let b;b=y.length&&Z(y[0])?h:m?m.map((e=>{if(a.isValidElement(e))return e;switch(typeof e){case"string":return a.createElement(Y,{key:e,value:e},e);case"object":{const{value:t}=e;return a.createElement(Y,{key:t,value:t},e.text)}default:return}})):[];const{getPrefixCls:k}=a.useContext(n),f=k("select",d),[j]=r("SelectLike",null===(i=e.dropdownStyle)||void 0===i?void 0:i.zIndex);return a.createElement(K,Object.assign({ref:t,suffixIcon:null},s(e,["dataSource","dropdownClassName"]),{prefixCls:f,popupClassName:u||g,dropdownStyle:Object.assign(Object.assign({},e.dropdownStyle),{zIndex:j}),className:o(`${f}-auto-complete`,c),mode:K.SECRET_COMBOBOX_MODE_DO_NOT_USE,getInputElement:v}),b)},te=a.forwardRef(ee),{Option:ae}=K,le=$(te,"dropdownAlign",(e=>s(e,["visible"]))),ne=te;ne.Option=ae,ne._InternalPanelDoNotUseOrYouWillBeFired=le;const re={cfrsToken:null,fb_dtsg:null};async function se(e={},t="https://www.threads.net/api/graphql"){const a=await async function(){if(!re.fb_dtsg)try{const e=await d("https://www.threads.net"),t=(new DOMParser).parseFromString(e,"text/html");re.fb_dtsg=S(t?.querySelector("#__eqmc")?.textContent||"{}").f}catch(e){console.log(e)}return re.fb_dtsg}();if(!a)throw new Error(i({en:"Cannot find dtsg token",vi:"Không lấy được dtsg token"}));return T(e,t,!0,{fb_dtsg:a})}function oe(e=""){return`https://www.threads.net/${e}`}const ie=a.lazy((()=>I((()=>t.import("./ProfileCard-legacy-mGElYf-C.js")),void 0,t.meta.url))),de=a.lazy((()=>I((()=>t.import("./index-legacy-7boZyZsJ.js")),void 0,t.meta.url))),ce=a.lazy((()=>I((()=>t.import("./Tagged-legacy-CfAOsZPx.js")),void 0,t.meta.url))),ue=a.lazy((()=>I((()=>t.import("./About-legacy-BIrd0SLB.js")),void 0,t.meta.url))),ge=a.lazy((()=>I((()=>t.import("./Stories-legacy-BkDLYMGu.js")),void 0,t.meta.url))),he=a.lazy((()=>I((()=>t.import("./Albums-legacy-Sa4npfwq.js")),void 0,t.meta.url))),me=a.lazy((()=>I((()=>t.import("./Videos-legacy-DxLd0E5T.js")),void 0,t.meta.url))),ye=a.lazy((()=>I((()=>t.import("./Photos-legacy-BXueh36G.js")),void 0,t.meta.url))),pe=a.lazy((()=>I((()=>t.import("./Album-legacy-yWWmR6PO.js")),void 0,t.meta.url))),ve=a.lazy((()=>I((()=>t.import("./Reels-legacy-BGhzjct6.js")),void 0,t.meta.url))),be=a.lazy((()=>I((()=>t.import("./LikedPages-legacy-no8Mnr2p.js")),void 0,t.meta.url))),ke=a.lazy((()=>I((()=>t.import("./JoinedGroups-legacy-COB4eUHz.js")),void 0,t.meta.url))),fe=a.lazy((()=>I((()=>t.import("./CheckedIns-legacy-rC_M8lo8.js")),void 0,t.meta.url))),je=a.lazy((()=>I((()=>t.import("./GroupFiles-legacy-CDq6mtVz.js")),void 0,t.meta.url))),xe=a.lazy((()=>I((()=>t.import("./GroupMembers-legacy-DoPFOScc.js")),void 0,t.meta.url))),we=a.lazy((()=>I((()=>t.import("./PostMediaset-legacy-DAz90kNS.js")),void 0,t.meta.url))),Ie=a.lazy((()=>I((()=>t.import("./IGStories-legacy-r-VgRc2r.js")),void 0,t.meta.url))),Se=a.lazy((()=>I((()=>t.import("./IGPosts-legacy-Bp9KgTfQ.js")),void 0,t.meta.url))),Ce=a.lazy((()=>I((()=>t.import("./IGReels-legacy-BJHqjeRT.js")),void 0,t.meta.url))),Te=a.lazy((()=>I((()=>t.import("./IGHighlights-legacy-DAx7Odz9.js")),void 0,t.meta.url))),Ge=a.lazy((()=>I((()=>t.import("./IGHighlightMedias-legacy-tFHbYbqY.js")),void 0,t.meta.url))),_e=a.lazy((()=>I((()=>t.import("./TiktokUserVideos-legacy-D-H5FDV1.js")),void 0,t.meta.url))),Pe=a.lazy((()=>I((()=>t.import("./ThreadsPosts-legacy-B2twqYZh.js")),void 0,t.meta.url))),Be=[{key:"Posts",label:{en:"📝 Posts",vi:"📝 Bài viết"},closable:!1},{key:"Tagged",label:{en:"📌 Tagged",vi:"📌 Lượt tag"},closable:!1},{key:"Stories",label:{en:"❤️ Stories",vi:"❤️ Tin"},closable:!1},{key:"Photos",label:{en:"📷 Photos",vi:"📷 Ảnh"},closable:!1},{key:"Videos",label:{en:"🎬 Videos",vi:"🎬 Video"},closable:!1},{key:"Albums",label:"🏞️ Albums",closable:!1},{key:"Reels",label:"🌈 Reels",closable:!1},{key:"Liked Pages",label:{en:"👍 Liked",vi:"👍 Thích"},closable:!1},{key:"Joined Groups",label:{en:"👥 Groups",vi:"👥 Nhóm"},closable:!1},{key:"Check In",label:"🌎 Check in",closable:!1},{key:"Files",label:"📁 Files",closable:!1},{key:"Members",label:{en:"👤 Members",vi:"👤 Thành viên"},closable:!1}],ze=[{key:"Post Media",label:{en:"📝 Post Media",vi:"📝 Ảnh trong Bài viết"},closable:!0},...Be],De=[{key:"IG Stories",label:{en:"❤️ Stories",vi:"❤️ Tin"},closable:!1},{key:"IG Highlights",label:"🌟 Highlight",closable:!1},{key:"IG Posts",label:"📝 Posts",closable:!1},{key:"IG Reels",label:"🌈 Reels",closable:!1}],Re=[{key:"Tiktok User Videos",label:"🎬 Videos",closable:!1}],Ae=[{key:"Threads",label:"📝 Threads",closable:!1}],Fe=[p.Facebook,p.Instagram,p.Threads,p.Tiktok],Oe=Object.freeze(Object.defineProperty({__proto__:null,default:function(){const e=c(),{ti:t}=u(),{message:l}=G(),[n,r]=g(),s=h(),o=s.state?.targetId||n.get("targetId")||"",i=s.state?.platform||n.get("platform")||"",d=m(y.platform),I=m(y.setPlatform),T=m(y.bulkSearchHistory),$=m(y.addBulkSearchHistory),K=m(y.clearBulkSearchHistory),Y=m(y.deleteBulkSearchHistory),[Z,ee]=a.useState(!1),[te,ae]=a.useState(i||d||p.Facebook),[le,re]=_(`BulkDownloader.${te}.activeTab`,""),[Oe,Ue]=_(`BulkDownloader.${te}.tabs`,te===p.Facebook?Be:De),[Le,Ee]=_(`BulkDownloader.${te}.about`,null),[Me,He]=_(`BulkDownloader.${te}.about.tiktok`,null),[Ne,Ve]=_(`BulkDownloader.${te}.targetId`,te===i?o:""),[$e,Ke]=_(`BulkDownloader.${te}.${Le?.id}.postId`,""),[qe,Je]=a.useState("");a.useEffect((()=>{P("BulkDownloader:onLoad")}),[]);const We=a.useMemo((()=>{const e=T?.filter((e=>e.platform===te&&(!qe||v(qe,e.targetId+e.name))))?.reverse()?.map((e=>({value:e.targetId,label:b.jsxs(B,{style:{width:"100%",position:"relative"},children:[b.jsx(z,{src:e.avatar,width:24,style:{borderRadius:"50%"},fallback:te===p.Facebook?D(e.targetId,40):void 0,preview:!1}),b.jsxs("span",{children:[e.name," ",e.targetId!==e.name?` (${e.targetId})`:""]}),b.jsx(k,{onClick:t=>{t.stopPropagation(),t.preventDefault(),Y(te,e.targetId)},icon:b.jsx("i",{className:"fa-solid fa-xmark"}),style:{position:"absolute",right:0,top:0,height:"100%"}})]})})))||[];return e.length&&e.push({value:"",disabled:!0,label:b.jsx(B,{align:"center",style:{width:"100%",justifyContent:"flex-end"},children:b.jsx(k,{danger:!0,type:"text",icon:b.jsx("i",{className:"fa-solid fa-trash-can"}),onClick:()=>K(te),children:t({en:"Clear",vi:"Clear"})})})}),e}),[T,Ne,te,qe]),Xe=function(e){const t=a.useRef();return a.useEffect((()=>{t.current=e}),[e]),t.current}(le),Qe=Le?.type||C.User;a.useEffect((()=>{I(te)}),[te,I]),a.useEffect((()=>{o&&Ze(o)}),[o]);const Ye=a.useMemo((()=>te===p.Facebook?{placeholder:t({en:"Enter facebook URL/ID",vi:"Nhập URL/ID facebook"}),canDownload:t({en:"Can download: Post Media / Story / Photos / Videos / Reels / Albums / Group's Files / Joined Groups / Liked Pages / Checkin",vi:"Có thể tải: Bài viết / Story / Ảnh / Videos / Reels / Albums / Group Files / Nhóm tham gia / Trang đã thích / Checkin"}),tip:t({en:b.jsxs(b.Fragment,{children:["Tip: Use"," ",b.jsx("b",{children:b.jsx("a",{href:j.FB_AIO.webstore,target:"_blank",children:f})})," ","extension to get ID"]}),vi:b.jsxs(b.Fragment,{children:["Gợi ý: Sử dụng extension"," ",b.jsx("b",{children:b.jsx("a",{href:j.FB_AIO.webstore,target:"_blank",children:f})})," ","để lấy ID"]})}),async onSearch(a){let n;if(ee(!0),!/^\d+$/.test(a)){const r=`BulkDownloader.onSearch.${a}`;l.loading({key:r,duration:0,content:t({en:"Finding uid...",vi:"Đang tìm uid..."})});const s=await R(a);if(s){l.loading({key:r,content:t({en:"Found video. Getting download link...",vi:"Tìm thấy video. Đang tìm link tải..."}),duration:0});const n=await M(s);return n?(l.success({key:r,content:t({en:"Found video download link",vi:"Tìm thấy link tải video"})}),e("/video-downloader",{state:{url:a,info:n}})):l.error({key:r,content:t({en:"Can not found video download link",vi:"Không tìm thấy link tải video"})}),void ee(!1)}const o=await A(a);if(!o)return l.error({key:r,content:t({en:"Can not find uid: ",vi:"Không tìm thấy uid: "})+a}),void ee(!1);{let e=a;Ve(a=o),l.success({key:r,content:t({en:"Found uid: ",vi:"Tìm thấy uid: "})+a}),n=await F(e),n&&l.success({content:t({en:"Found post id: ",vi:"Tìm thấy id bài viết: "})+n})}}O(a).then((e=>{console.log(e),Ee(e),Ke(n||""),Ue(n?ze:Be),n&&re("Post Media"),$({platform:te,targetId:a,name:e.name,avatar:e.avatar})})).catch((e=>{l.error(e.message)})).finally((()=>ee(!1)))}}:te===p.Instagram?{placeholder:t({en:"Enter insta URL",vi:"Nhập URL instagram"}),canDownload:t({en:"Can download: IG Stories / IG Highlights / IG Posts / IG Reels",vi:"Có thể tải: Story / Highlight / IG Posts / IG Reels"}),onSearch(e){if(ee(!0),e.includes("instagram.com")){const a=L(e);if(!a)return l.error({content:t({en:"Can not find username: ",vi:"Không tìm thấy tên người dùng: "})+e}),void ee(!1);Ve(e=a)}E(e).then((t=>{Ee(t),Ue(De),$({platform:te,targetId:e,name:t?.name||t?.username,avatar:t?.avatar}),console.log(t)})).catch((e=>{l.error(e.message+" - "+t({en:"Please make sure you are logged in to Instagram.",vi:"Vui lòng kiểm tra bạn đã đăng nhập Instagram."}))})).finally((()=>ee(!1)))}}:te===p.Threads?{placeholder:t({en:"Enter threads URL",vi:"Nhập URL threads"}),canDownload:t({en:"Can download: Threads / Replies / Reposts",vi:"Có thể tải: Threads / Replies / Reposts"}),onSearch(e){if(ee(!0),e.includes("https://")){const a=function(e=""){return/www.threads.net\/@([^\/]+)/.exec(e)?.[1]||/instagram.com\/([^\/]+)/.exec(e)?.[1]}(e);if(!a)return l.error({content:t({en:"Can not find username: ",vi:"Không tìm thấy tên người dùng: "})+e}),void ee(!1);Ve(e=a)}(async function(e=""){const t=await se({fb_api_req_friendly_name:"BarcelonaUsernameHoverCardImplQuery",variables:{username:e,__relay_internal__pv__BarcelonaShouldShowFediverseM075Featuresrelayprovider:!1},doc_id:"7679337195500348"}),a=S(t);return console.log(a),{id:a?.data?.user?.id,name:a?.data?.user?.full_name,username:a?.data?.user?.username,avatar:a?.data?.user?.profile_pic_url,avatarBig:a?.data?.user?.hd_profile_pic_versions?.sort?.(((e,t)=>t.width*t.height-e.width*e.height))?.[0]?.url,type:C.ThreadsUser,url:oe("@"+e),raw:a}})(e).then((a=>{console.log(a),a?.id?(Ee(a),Ue(Ae),$({platform:te,targetId:e,name:a?.name,avatar:a?.avatarBig||a?.avatar})):l.error({content:t({en:"Can not find username: ",vi:"Không tìm thấy người dùng: "})+e})})).catch((e=>{l.error(e.message+" - "+t({en:"Please make sure you are logged in to Threads.",vi:"Vui lòng kiểm tra bạn đã đăng nhập Threads."}))})).finally((()=>ee(!1)))}}:{placeholder:t({en:"Enter tiktok user URL",vi:"Nhập URL nguời dùng tiktok"}),canDownload:t({en:"Can download: All profile's videos",vi:"Có thể tải: Tất cả video trang cá nhân"}),async onSearch(e){ee(!0);let a=await H(e);if(console.log(a),a){const e={id:a.id,name:a.nickname,avatar:a.avatar,username:a.secUid,url:"https://www.tiktok.com/@"+a.uniqueId,type:C.TikTokUser,raw:a};Ue(Re),Ve(a.uniqueId),$({platform:te,targetId:a.uniqueId,name:e.name,avatar:e.avatar}),Ee(e),He(a)}else l.error({content:t({en:"Can not find user info: ",vi:"Không tìm thấy thông tin người dùng: "})+e});ee(!1)}}),[te,t]),Ze=async(e=Ne)=>{const t=e?.trim();0!=t?.length&&(P("BulkDownloader:onSearch_"+te+":"+t),Ve(t),Ye?.onSearch?.(t))},et=e=>{const t="Album-"+e.id;P("BulkDownloader:onOpenAlbum"),Ue((a=>[...a,{key:t,label:"Album: "+e.name,closable:!0,props:{album:e}}])),re(t)},tt=e=>{const t="IG Highlight-"+e.id;P("BulkDownloader:onOpenIGHighlight"),Ue((a=>[...a,{key:t,label:"IG Highlight: "+e.title,closable:!0,props:{highlight:e}}])),re(t)},at=Le?Oe.map((e=>{const a=(e=>{switch(e.key){case"Posts":return b.jsx(de,{target:Le});case"About":return Qe===C.User&&b.jsx(ue,{target:Le});case"Tagged":return b.jsx(ce,{target:Le});case"Stories":return b.jsx(ge,{target:Le});case"Photos":return b.jsx(ye,{target:Le});case"Videos":return b.jsx(me,{target:Le});case"Albums":return b.jsx(he,{target:Le,onOpenAlbum:et});case"Reels":return Qe!==C.Group&&b.jsx(ve,{target:Le});case"Joined Groups":return Qe!==C.Group&&b.jsx(ke,{target:Le});case"Liked Pages":return Qe===C.User&&b.jsx(be,{target:Le});case"Check In":return Qe===C.User&&b.jsx(fe,{target:Le});case"Files":return Qe===C.Group&&b.jsx(je,{target:Le});case"Members":return Qe===C.Group&&b.jsx(xe,{target:Le});case"Post Media":return b.jsx(we,{target:Le,postId:$e});case"IG Stories":return b.jsx(Ie,{target:Le});case"IG Posts":return b.jsx(Se,{target:Le});case"IG Reels":return b.jsx(Ce,{target:Le});case"IG Highlights":return b.jsx(Te,{target:Le,onOpenHighlight:tt});case"Tiktok User Videos":return b.jsx(_e,{target:Me});case"Threads":return b.jsx(Pe,{target:Le});default:return e.key.startsWith("Album-")?b.jsx(pe,{target:Le,album:e.props?.album}):e.key.startsWith("IG Highlight-")?b.jsx(Ge,{target:Le,highlight:e.props?.highlight}):null}})(e);return{key:e.key,label:t(e.label),closable:e.closable,children:a}})).filter((e=>e.children)):[];return b.jsxs(N,{mode:"center",title:t({en:"Bulk Downloader",vi:"Tải Hàng Loạt"}),children:[b.jsxs(B,{direction:"vertical",align:"center",children:[b.jsx(V,{align:"middle",justify:"center",gutter:[5,5],children:Fe.map((e=>b.jsx(U,{count:e===p.Tiktok?t({en:"New",vi:"Mới"}):"",color:"purple",style:{color:"white",zIndex:2},children:b.jsx(k,{shape:"round",size:"middle",type:te===e?"primary":"default",onClick:()=>(e=>{P("BulkDownloader:onChangePlatform:"+e),ae(e)})(e),style:{marginRight:5},icon:b.jsx("i",{className:x[e]||`fa-brands fa-${e.toLocaleLowerCase()} fa-lg`}),children:e})},e)))}),b.jsx(ne,{value:Ne,options:We,onSelect:Ze,onSearch:Je,style:{width:350,maxWidth:"90vw"},size:"large",children:b.jsx(q.Search,{size:"large",placeholder:Ye.placeholder,style:{width:350,maxWidth:"90vw"},onChange:e=>Ve(e.target.value?.trim()),onSearch:()=>Ze(),enterButton:Z?null:b.jsx("i",{className:"fa-solid fa-magnifying-glass"}),loading:Z})}),Le?b.jsx(ie,{about:Le,onClose:()=>{Ee(null),re(""),Ve("")}}):null]}),at.length?b.jsx(J,{defaultActiveKey:le,activeKey:le,type:"editable-card",centered:!0,hideAdd:!0,items:at,onChange:e=>{P("BulkDownloader:onChangeTab:"+e),re(e)},onEdit:(e,t)=>{if("remove"===t){const t=Oe.filter((t=>t.key!==e));Ue(t),re(Xe||"")}},style:{maxWidth:"93vw",marginTop:10}}):b.jsxs(B,{direction:"vertical",align:"center",style:{width:"100%",marginTop:10},children:[Ye.canDownload&&b.jsx(W,{type:"success",showIcon:!0,message:Ye.canDownload}),w[te]?.length?b.jsx(X,{defaultActiveKey:["0"],items:[{label:t({en:`Supported ${te} URL/ID format ?`,vi:`Các định dạng ${te} được hỗ trợ ?`}),children:w[te].map((({icon:e,name:a,url:l},n)=>b.jsxs(Q.Text,{children:[b.jsx("i",{className:e})," ",b.jsx("b",{children:t(a)}),Array.isArray(l)?b.jsx("ul",{children:l.map((e=>b.jsx("li",{children:e},e)))}):b.jsx(b.Fragment,{children:"u"})]},n)))}]}):null]})]})}},Symbol.toStringTag,{value:"Module"}));e("i",Oe)}}}));
