const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./ProfileCard-BAEnK5Ea.js","./index-BoZ3qCu-.js","./index-9SBFHPtm.css","./MyApp-D00-hVKM.js","./index-0HrQK3-l.js","./index-Bf8XDlqW.js","./Dropdown-DBLdsESi.js","./index-B9p0fwME.js","./EyeOutlined-BHVey_FU.js","./addEventListener-CnAWjiAc.js","./Tagged-AZJL1x1-.js","./MyTable-BCaimdBe.js","./index-DISxAyNO.js","./index-BqA1u72M.js","./index-D8gaebSk.js","./PurePanel-BOikr8JH.js","./SearchOutlined-jKWQFlYP.js","./Table-CyCG4zvu.js","./index-Lhz2nIJB.js","./index-eKalL2eG.js","./useBreakpoint-F7WTD34q.js","./Pagination-DzBVYRJu.js","./index-AT3_9SK-.js","./row-CSBfwUbZ.js","./ExportButton-DgFEbkrh.js","./file-download-Cuv0I7kF.js","./About-COwpfuSV.js","./Stories-CoMY5wnV.js","./Collection-Ylhl6kq-.js","./index-9ab-2l-X.js","./index-BarWoG-p.js","./icons-ovUZ0Rpb.js","./stories-BE4DhPRz.js","./index-dSRIMC1R.js","./Albums-Bn0oBipS.js","./albums-CbhDSMQN.js","./Videos-BNouyjh5.js","./videos-BSmWgJlG.js","./Photos-Bx_ZhHJ-.js","./Album-DiR4lIky.js","./VideoWithMuted-jC92vOuE.js","./Reels-D_b9401y.js","./reels-B5OHdzmh.js","./LikedPages-BChkxXRd.js","./pages-DDrXPvn5.js","./WordStatisticButton-RBQ9zWZ_.js","./JoinedGroups-LPdIiHQY.js","./useForceStop-DX089J2G.js","./groups-CUw6ppsg.js","./CheckedIns-DY2lk6Cx.js","./GroupFiles-BIRW74CX.js","./GroupMembers-DCPE98h0.js","./index-BeQiFXvH.js","./index-CQ8Ll5oh.js","./PostMediaset-TCkHQy2Q.js","./IGStories-W5jii8oQ.js","./core-CgP0J9ug.js","./IGPosts-NrERTlMc.js","./IGReels-Dk03FSuR.js","./reels-D3OWVE7x.js","./IGHighlights-CnuiPqlI.js","./highlights-1192bgEw.js","./IGHighlightMedias-CDxYu8iS.js","./TiktokUserVideos-0cLRTEcr.js","./Collapse-DpebPui6.js","./ThreadsPosts-Ch7F9thd.js"])))=>i.map(i=>d[i]);
import{r as n,t as be,L as ke,Q as Ie,a0 as we,p as xe,aF as Te,at as Y,b4 as Ce,aI as je,aP as Pe,ax as F,ay as G,bb as R,a$ as Ee,aK as t,aM as ee,au as de,b6 as ue,bc as Ae,bd as he,aT as g}from"./index-BoZ3qCu-.js";import{p as M,r as j,m as Se,u as De,i as z,t as B,S as V,v as Le,c as Re,w as Oe,d as Ue,B as Fe}from"./MyApp-D00-hVKM.js";import{g as Ge,a as Be}from"./core-CgP0J9ug.js";import{g as Ve}from"./videos-BSmWgJlG.js";import{A as Ne}from"./index-BeQiFXvH.js";import{T as ge}from"./index-BqA1u72M.js";import{g as ze}from"./PurePanel-BOikr8JH.js";import{S as oe}from"./index-D8gaebSk.js";import{I as Me}from"./index-AT3_9SK-.js";import{T as He}from"./index-Bf8XDlqW.js";import{C as Ke}from"./Collapse-DpebPui6.js";import{A as te}from"./index-dSRIMC1R.js";import{I as $e}from"./index-B9p0fwME.js";const{Option:re}=oe;function me(s){return(s==null?void 0:s.type)&&(s.type.isSelectOption||s.type.isSelectOptGroup)}const qe=(s,r)=>{var o;const{prefixCls:v,className:I,popupClassName:w,dropdownClassName:u,children:m,dataSource:p}=s,y=be(m);let i;y.length===1&&n.isValidElement(y[0])&&!me(y[0])&&([i]=y);const P=i?()=>i:void 0;let x;y.length&&me(y[0])?x=m:x=p?p.map(f=>{if(n.isValidElement(f))return f;switch(typeof f){case"string":return n.createElement(re,{key:f,value:f},f);case"object":{const{value:b}=f;return n.createElement(re,{key:b,value:b},f.text)}default:return}}):[];const{getPrefixCls:h}=n.useContext(ke),l=h("select",v),[E]=Ie("SelectLike",(o=s.dropdownStyle)===null||o===void 0?void 0:o.zIndex);return n.createElement(oe,Object.assign({ref:r,suffixIcon:null},we(s,["dataSource","dropdownClassName"]),{prefixCls:l,popupClassName:w||u,dropdownStyle:Object.assign(Object.assign({},s.dropdownStyle),{zIndex:E}),className:xe(`${l}-auto-complete`,I),mode:oe.SECRET_COMBOBOX_MODE_DO_NOT_USE,getInputElement:P}),x)},Z=n.forwardRef(qe),We=ze(Z);Z.Option=re;Z._InternalPanelDoNotUseOrYouWillBeFired=We;function Qe(s){const r=n.useRef();return n.useEffect(()=>{r.current=s},[s]),r.current}const ae={cfrsToken:null,fb_dtsg:null};async function Je(){var s;if(!ae.fb_dtsg)try{const r=await Y("https://www.threads.net"),o=new DOMParser().parseFromString(r,"text/html");ae.fb_dtsg=M(((s=o==null?void 0:o.querySelector("#__eqmc"))==null?void 0:s.textContent)||"{}").f}catch(r){console.log(r)}return ae.fb_dtsg}async function Xe(s={},r="https://www.threads.net/api/graphql"){const o=await Je();if(!o)throw new Error(Te({en:"Cannot find dtsg token",vi:"Không lấy được dtsg token"}));return Se(s,r,!0,{fb_dtsg:o})}function Ye(s=""){var r,o;return((r=/www.threads.net\/@([^\/]+)/.exec(s))==null?void 0:r[1])||((o=/instagram.com\/([^\/]+)/.exec(s))==null?void 0:o[1])}async function Ze(s=""){var v,I,w,u,m,p,y,i,P,x,h,l,E,f;const r=await Xe({fb_api_req_friendly_name:"BarcelonaUsernameHoverCardImplQuery",variables:{username:s,__relay_internal__pv__BarcelonaShouldShowFediverseM075Featuresrelayprovider:!1},doc_id:"7679337195500348"}),o=M(r);return console.log(o),{id:(I=(v=o==null?void 0:o.data)==null?void 0:v.user)==null?void 0:I.id,name:(u=(w=o==null?void 0:o.data)==null?void 0:w.user)==null?void 0:u.full_name,username:(p=(m=o==null?void 0:o.data)==null?void 0:m.user)==null?void 0:p.username,avatar:(i=(y=o==null?void 0:o.data)==null?void 0:y.user)==null?void 0:i.profile_pic_url,avatarBig:(f=(E=(l=(h=(x=(P=o==null?void 0:o.data)==null?void 0:P.user)==null?void 0:x.hd_profile_pic_versions)==null?void 0:h.sort)==null?void 0:l.call(h,(b,S)=>S.width*S.height-b.width*b.height))==null?void 0:E[0])==null?void 0:f.url,type:j.ThreadsUser,url:et("@"+s),raw:o}}function et(s=""){return`https://www.threads.net/${s}`}async function tt(s){var r,o;try{const I=(r=(await Y(s)).match(/__UNIVERSAL_DATA_FOR_REHYDRATION__\" type=\"application\/json\">(.*?)<\/script>/))==null?void 0:r[1],w=M(I);console.log(w);const{user:u,stats:m}=w.__DEFAULT_SCOPE__["webapp.user-detail"].userInfo;return{id:u.id,nickname:u.nickname,secUid:u.secUid,uniqueId:u.uniqueId,avatar:u.avatarLarger||u.avatarMedium||u.avatarThumb,createTime:u.createTime,verified:u.verified,language:u.language,region:u.region,signature:u.signature,bioLink:(o=u.bioLink)==null?void 0:o.link,followerCount:m.followerCount,followingCount:m.followingCount,friendCount:m.friendCount,videoCount:m.videoCount,heartCount:m.heartCount}}catch(v){return console.log(v),null}}function at(s){var r;return console.log(s),{id:s.id,cover:s.cover,dynamicCover:s.dynamicCover,zoomCover:s.zoomCover,originCover:s.originCover,width:s.width,height:s.height,duration:s.duration,ratio:s.ratio,definition:s.definition,codecType:s.codecType,format:s.format,videoQuality:s.videoQuality,downloadAddr:s.downloadAddr,playAddr:s.playAddr,variants:((r=s.bitrateInfo)==null?void 0:r.map(o=>({bitrate:o.Bitrate,codecType:o.CodecType,gearName:o.GearName,width:o.PlayAddr.Width,height:o.PlayAddr.Height,dataSize:o.PlayAddr.DataSize,urls:o.PlayAddr.UrlList})))||[],raw:s}}async function ot(s,r){const o=await Y(`https://douyin.wtf/api/tiktok/web/generate_xbogus?url=${s}&user_agent=${r}`),v=M(o||"{}");return console.log(v),v.data}async function Ht(s,r="0",o=30){var y;const v="5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36 Edg/105.0.1343.53",I="https://www.tiktok.com/api/post/item_list/?"+new URLSearchParams({secUid:s,count:o.toString(),cursor:r.toString(),coverFormat:"2",aid:"1988",app_name:"tiktok_web",browser_language:"en-US",browser_name:"Mozilla",browser_online:"true",browser_platform:"MacIntel",browser_version:v,os:"mac",device_id:"7394501257615323277938",device_platform:"web_pc",region:"VN",screen_width:"1920",screen_height:"1080"}).toString(),w=await ot(I,"Mozilla/"+v),u=await Y(w.url);console.log(u);const m=M(u),p=m==null?void 0:m.data;return((y=p==null?void 0:p.itemList)==null?void 0:y.map(i=>{var P,x,h,l,E,f,b,S,T,d,D,O,A,H,K,N,$,q,W,C,Q,k,J;return{id:i.id,desc:i.desc,createTime:i.createTime,video:at(i.video),challenges:(P=i.challenges)==null?void 0:P.map(U=>({id:U.id,title:U.title})),stats:{collectCount:(x=i.stats)==null?void 0:x.collectCount,commentCount:(h=i.stats)==null?void 0:h.commentCount,diggCount:(l=i.stats)==null?void 0:l.diggCount,playCount:(E=i.stats)==null?void 0:E.playCount,shareCount:(f=i.stats)==null?void 0:f.shareCount},author:{id:(b=i.author)==null?void 0:b.id,nickname:(S=i.author)==null?void 0:S.nickname,secUid:(T=i.author)==null?void 0:T.secUid,signature:(d=i.author)==null?void 0:d.signature,uniqueId:(D=i.author)==null?void 0:D.uniqueId,verified:(O=i.author)==null?void 0:O.verified,avatar:((A=i.author)==null?void 0:A.avatarLarger)||((H=i.author)==null?void 0:H.avatarMedium)||((K=i.author)==null?void 0:K.avatarThumb)},music:{id:(N=i.music)==null?void 0:N.id,author:($=i.music)==null?void 0:$.author,title:(q=i.music)==null?void 0:q.title,playUrl:(W=i.music)==null?void 0:W.playUrl,original:(C=i.music)==null?void 0:C.original,cover:((Q=i.music)==null?void 0:Q.coverLarger)||((k=i.music)==null?void 0:k.coverMedium)||((J=i.music)==null?void 0:J.coverThumb)},cursor:p==null?void 0:p.cursor,raw:p}}))||[]}const rt=""+new URL("fb_get_id-CRQt-p2p.png",import.meta.url).href,st=n.lazy(()=>g(()=>import("./ProfileCard-BAEnK5Ea.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9]),import.meta.url)),nt=n.lazy(()=>g(()=>import("./Tagged-AZJL1x1-.js"),__vite__mapDeps([10,1,2,3,11,12,13,14,15,16,17,9,18,19,6,20,21,22,8,23,24,25,7]),import.meta.url)),it=n.lazy(()=>g(()=>import("./About-COwpfuSV.js"),__vite__mapDeps([26,1,2,3]),import.meta.url)),lt=n.lazy(()=>g(()=>import("./Stories-CoMY5wnV.js"),__vite__mapDeps([27,1,2,28,12,25,3,19,6,15,18,22,13,8,16,29,21,20,14,23,30,31,32,33,7,9]),import.meta.url)),ct=n.lazy(()=>g(()=>import("./Albums-Bn0oBipS.js"),__vite__mapDeps([34,1,2,28,12,25,3,19,6,15,18,22,13,8,16,29,21,20,14,23,30,35,33,7,9]),import.meta.url)),dt=n.lazy(()=>g(()=>import("./Videos-BNouyjh5.js"),__vite__mapDeps([36,1,2,28,12,25,3,19,6,15,18,22,13,8,16,29,21,20,14,23,30,37,7,9]),import.meta.url)),ut=n.lazy(()=>g(()=>import("./Photos-Bx_ZhHJ-.js"),__vite__mapDeps([38,1,2,28,12,25,3,19,6,15,18,22,13,8,16,29,21,20,14,23,30]),import.meta.url)),ht=n.lazy(()=>g(()=>import("./Album-DiR4lIky.js"),__vite__mapDeps([39,1,2,28,12,25,3,19,6,15,18,22,13,8,16,29,21,20,14,23,30,35,37,40,7,9]),import.meta.url)),gt=n.lazy(()=>g(()=>import("./Reels-D_b9401y.js"),__vite__mapDeps([41,1,2,28,12,25,3,19,6,15,18,22,13,8,16,29,21,20,14,23,30,42,37,7,9]),import.meta.url)),mt=n.lazy(()=>g(()=>import("./LikedPages-BChkxXRd.js"),__vite__mapDeps([43,1,2,24,25,3,19,6,15,28,12,18,22,13,8,16,29,21,20,14,23,30,44,45,11,17,9,33,7]),import.meta.url)),pt=n.lazy(()=>g(()=>import("./JoinedGroups-LPdIiHQY.js"),__vite__mapDeps([46,1,2,47,11,12,13,3,14,15,16,17,9,18,19,6,20,21,22,8,23,24,25,48,45,7,33]),import.meta.url)),ft=n.lazy(()=>g(()=>import("./CheckedIns-DY2lk6Cx.js"),__vite__mapDeps([49,1,2,47,11,12,13,3,14,15,16,17,9,18,19,6,20,21,22,8,23,24,25,7,33]),import.meta.url)),_t=n.lazy(()=>g(()=>import("./GroupFiles-BIRW74CX.js"),__vite__mapDeps([50,1,2,28,12,25,3,19,6,15,18,22,13,8,16,29,21,20,14,23,30,7,9]),import.meta.url)),yt=n.lazy(()=>g(()=>import("./GroupMembers-DCPE98h0.js"),__vite__mapDeps([51,1,2,47,11,12,13,3,14,15,16,17,9,18,19,6,20,21,22,8,23,48,52,53,7,33]),import.meta.url)),vt=n.lazy(()=>g(()=>import("./PostMediaset-TCkHQy2Q.js"),__vite__mapDeps([54,1,2,28,12,25,3,19,6,15,18,22,13,8,16,29,21,20,14,23,30,37,31,40,33]),import.meta.url)),bt=n.lazy(()=>g(()=>import("./IGStories-W5jii8oQ.js"),__vite__mapDeps([55,1,2,31,28,12,25,3,19,6,15,18,22,13,8,16,29,21,20,14,23,30,56,40,7,9,33]),import.meta.url)),kt=n.lazy(()=>g(()=>import("./IGPosts-NrERTlMc.js"),__vite__mapDeps([57,1,2,31,28,12,25,3,19,6,15,18,22,13,8,16,29,21,20,14,23,30,56,40,7,9,4,5]),import.meta.url)),It=n.lazy(()=>g(()=>import("./IGReels-Dk03FSuR.js"),__vite__mapDeps([58,1,2,28,12,25,3,19,6,15,18,22,13,8,16,29,21,20,14,23,30,59,37,56,40,7,9]),import.meta.url)),wt=n.lazy(()=>g(()=>import("./IGHighlights-CnuiPqlI.js"),__vite__mapDeps([60,1,2,28,12,25,3,19,6,15,18,22,13,8,16,29,21,20,14,23,30,61,56,7,9]),import.meta.url)),xt=n.lazy(()=>g(()=>import("./IGHighlightMedias-CDxYu8iS.js"),__vite__mapDeps([62,1,2,31,28,12,25,3,19,6,15,18,22,13,8,16,29,21,20,14,23,30,61,56,40,7,9]),import.meta.url)),Tt=n.lazy(()=>g(()=>import("./TiktokUserVideos-0cLRTEcr.js"),__vite__mapDeps([63,1,2,28,12,25,3,19,6,15,18,22,13,8,16,29,21,20,14,23,30,7,9,33,56,37,52,53,5,64]),import.meta.url)),Ct=n.lazy(()=>g(()=>import("./ThreadsPosts-Ch7F9thd.js"),__vite__mapDeps([65,1,2,56,3,31,28,12,25,19,6,15,18,22,13,8,16,29,21,20,14,23,30,40,7,9,4,5,37,52,53,64,33]),import.meta.url)),se=[{key:"Tagged",label:{en:"📌 Tagged",vi:"📌 Lượt tag"},closable:!1},{key:"Stories",label:{en:"❤️ Stories",vi:"❤️ Tin"},closable:!1},{key:"Photos",label:{en:"📷 Photos",vi:"📷 Ảnh"},closable:!1},{key:"Videos",label:{en:"🎬 Videos",vi:"🎬 Video"},closable:!1},{key:"Albums",label:"🏞️ Albums",closable:!1},{key:"Reels",label:"🌈 Reels",closable:!1},{key:"Liked Pages",label:{en:"👍 Liked",vi:"👍 Thích"},closable:!1},{key:"Joined Groups",label:{en:"👥 Groups",vi:"👥 Nhóm"},closable:!1},{key:"Check In",label:"🌎 Check in",closable:!1},{key:"Files",label:"📁 Files",closable:!1},{key:"Members",label:{en:"👤 Members",vi:"👤 Thành viên"},closable:!1}],jt=[{key:"Post Media",label:{en:"📝 Post Media",vi:"📝 Bài viết"},closable:!0},...se],pe=[{key:"IG Stories",label:{en:"❤️ Stories",vi:"❤️ Tin"},closable:!1},{key:"IG Highlights",label:"🌟 Highlight",closable:!1},{key:"IG Posts",label:"📝 Posts",closable:!1},{key:"IG Reels",label:"🌈 Reels",closable:!1}],Pt=[{key:"Tiktok User Videos",label:"🎬 Videos",closable:!1}],Et=[{key:"Threads",label:"📝 Threads",closable:!1}];function At(){var ie,le,ce;const s=Ce(),{ti:r}=je(),{message:o}=De(),v=Pe(),I=((ie=v.state)==null?void 0:ie.targetId)||"",w=((le=v.state)==null?void 0:le.platform)||"",u=F(G.platform),m=F(G.setPlatform),p=F(G.bulkSearchHistory),y=F(G.addBulkSearchHistory),i=F(G.clearBulkSearchHistory),P=F(G.deleteBulkSearchHistory),[x,h]=n.useState(!1),[l,E]=n.useState(w||u||R.Facebook),[f,b]=z(`BulkDownloader.${l}.activeTab`,""),[S,T]=z(`BulkDownloader.${l}.tabs`,l===R.Facebook?se:pe),[d,D]=z(`BulkDownloader.${l}.about`,null),[O,A]=z(`BulkDownloader.${l}.targetId`,l===w?I:""),[H,K]=z(`BulkDownloader.${l}.${d==null?void 0:d.id}.postId`,""),[N,$]=n.useState("");n.useEffect(()=>{B("BulkDownloader:onLoad")},[]);const q=n.useMemo(()=>{var e,c;const a=((c=(e=p==null?void 0:p.filter(_=>_.platform===l&&Ee(N,_.targetId+_.name)))==null?void 0:e.reverse())==null?void 0:c.map(_=>({value:_.targetId,label:t.jsxs(V,{style:{width:"100%",position:"relative"},children:[t.jsx(Ne,{size:"small",src:_.avatar}),t.jsxs("span",{children:[_.name," ",_.targetId!==_.name?` (${_.targetId})`:""]}),t.jsx(ee,{onClick:L=>{L.stopPropagation(),L.preventDefault(),P(l,_.targetId)},icon:t.jsx("i",{className:"fa-solid fa-xmark"}),style:{position:"absolute",right:0,top:0,height:"100%"}})]})})))||[];return a.length&&a.push({value:"",disabled:!0,label:t.jsx(V,{align:"center",style:{width:"100%",justifyContent:"flex-end"},children:t.jsx(ee,{danger:!0,type:"text",icon:t.jsx("i",{className:"fa-solid fa-trash-can"}),onClick:()=>i(l),children:r({en:"Clear",vi:"Clear"})})})}),a},[p,O,l,N]),W=Qe(f),C=(d==null?void 0:d.type)||j.User;n.useEffect(()=>{m(l)},[l,m]),n.useEffect(()=>{I&&U(I)},[I]);const Q=a=>{B("BulkDownloader:onChangePlatform:"+a),E(a)},k=n.useMemo(()=>l===R.Facebook?{placeholder:r({en:"Enter facebook URL/ID",vi:"Nhập URL/ID facebook"}),canDownload:r({en:"Can download: Post Media / Story / Photos / Videos / Reels / Albums / Group's Files / Joined Groups / Liked Pages / Checkin",vi:"Có thể tải: Bài viết / Story / Ảnh / Videos / Reels / Albums / Group Files / Nhóm tham gia / Trang đã thích / Checkin"}),tip:r({en:t.jsxs(t.Fragment,{children:["Tip: Use"," ",t.jsx("b",{children:t.jsx("a",{href:de.FB_AIO.webstore,target:"_blank",children:ue})})," ","extension to get ID"]}),vi:t.jsxs(t.Fragment,{children:["Gợi ý: Sử dụng extension"," ",t.jsx("b",{children:t.jsx("a",{href:de.FB_AIO.webstore,target:"_blank",children:ue})})," ","để lấy ID"]})}),tipImg:rt,async onSearch(a){h(!0);let e;if(!/^\d+$/.test(a)){const c=`BulkDownloader.onSearch.${a}`;o.loading({key:c,duration:0,content:r({en:"Finding uid...",vi:"Đang tìm uid..."})});const _=await Le(a);if(_){o.loading({key:c,content:r({en:"Found video. Getting download link...",vi:"Tìm thấy video. Đang tìm link tải..."}),duration:0});const X=await Ve(_);X?(o.success({key:c,content:r({en:"Found video download link",vi:"Tìm thấy link tải video"})}),s("/video-downloader",{state:{url:a,info:X}})):o.error({key:c,content:r({en:"Can not found video download link",vi:"Không tìm thấy link tải video"})}),h(!1);return}const L=await Re(a);if(L){let X=a;a=L,A(a),o.success({key:c,content:r({en:"Found uid: ",vi:"Tìm thấy uid: "})+a}),e=await Oe(X),e&&o.success({content:r({en:"Found post id: ",vi:"Tìm thấy id bài viết: "})+e})}else{o.error({key:c,content:r({en:"Can not find uid: ",vi:"Không tìm thấy uid: "})+a}),h(!1);return}}Ue(a).then(c=>{console.log(c),D(c),K(e||""),T(e?jt:se),e&&b("Post Media"),y({platform:l,targetId:a,name:c.name,avatar:c.avatar})}).catch(c=>{o.error(c.message)}).finally(()=>h(!1))}}:l===R.Instagram?{placeholder:r({en:"Enter insta URL",vi:"Nhập URL instagram"}),canDownload:r({en:"Can download: IG Stories / IG Highlights / IG Posts / IG Reels",vi:"Có thể tải: Story / Highlight / IG Posts / IG Reels"}),onSearch(a){if(h(!0),a.includes("instagram.com")){const e=Ge(a);if(e)a=e,A(a);else{o.error({content:r({en:"Can not find username: ",vi:"Không tìm thấy tên người dùng: "})+a}),h(!1);return}}Be(a).then(e=>{D(e),T(pe),y({platform:l,targetId:a,name:(e==null?void 0:e.name)||(e==null?void 0:e.username),avatar:e==null?void 0:e.avatar}),console.log(e)}).catch(e=>{o.error(e.message+" - "+r({en:"Please make sure you are logged in to Instagram.",vi:"Vui lòng kiểm tra bạn đã đăng nhập Instagram."}))}).finally(()=>h(!1))}}:l===R.Threads?{placeholder:r({en:"Enter threads URL",vi:"Nhập URL threads"}),canDownload:r({en:"Can download: Threads / Replies / Reposts",vi:"Có thể tải: Threads / Replies / Reposts"}),onSearch(a){if(h(!0),a.includes("https://")){const e=Ye(a);if(e)a=e,A(a);else{o.error({content:r({en:"Can not find username: ",vi:"Không tìm thấy tên người dùng: "})+a}),h(!1);return}}Ze(a).then(e=>{console.log(e),e!=null&&e.id?(D(e),T(Et),y({platform:l,targetId:a,name:e==null?void 0:e.name,avatar:(e==null?void 0:e.avatarBig)||(e==null?void 0:e.avatar)})):o.error({content:r({en:"Can not find username: ",vi:"Không tìm thấy người dùng: "})+a})}).catch(e=>{o.error(e.message+" - "+r({en:"Please make sure you are logged in to Threads.",vi:"Vui lòng kiểm tra bạn đã đăng nhập Threads."}))}).finally(()=>h(!1))}}:{placeholder:r({en:"Enter tiktok user URL",vi:"Nhập URL nguời dùng tiktok"}),canDownload:r({en:"Can download: All profile's videos",vi:"Có thể tải: Tất cả video trang cá nhân"}),async onSearch(a){h(!0);const e=await tt(a);if(console.log(e),!e)o.error({content:r({en:"Can not find user info: ",vi:"Không tìm thấy thông tin người dùng: "})+a});else{const c={id:e.id,name:e.nickname,avatar:e.avatar,username:e.secUid,url:"https://www.tiktok.com/@"+e.nickname,type:j.TikTokUser,raw:e};T(Pt),y({platform:l,targetId:a,name:c.name,avatar:c.avatar}),D(c)}h(!1)}},[l,r]),J=a=>{var e,c;switch(a.key){case"About":return C===j.User&&t.jsx(it,{target:d});case"Tagged":return t.jsx(nt,{target:d});case"Stories":return t.jsx(lt,{target:d});case"Photos":return t.jsx(ut,{target:d});case"Videos":return t.jsx(dt,{target:d});case"Albums":return t.jsx(ct,{target:d,onOpenAlbum:ye});case"Reels":return C!==j.Group&&t.jsx(gt,{target:d});case"Joined Groups":return C!==j.Group&&t.jsx(pt,{target:d});case"Liked Pages":return C===j.User&&t.jsx(mt,{target:d});case"Check In":return C===j.User&&t.jsx(ft,{target:d});case"Files":return C===j.Group&&t.jsx(_t,{target:d});case"Members":return C===j.Group&&t.jsx(yt,{target:d});case"Post Media":return t.jsx(vt,{target:d,postId:H});case"IG Stories":return t.jsx(bt,{target:d});case"IG Posts":return t.jsx(kt,{target:d});case"IG Reels":return t.jsx(It,{target:d});case"IG Highlights":return t.jsx(wt,{target:d,onOpenHighlight:ve});case"Tiktok User Videos":return t.jsx(Tt,{target:d});case"Threads":return t.jsx(Ct,{target:d});default:return a.key.startsWith("Album-")?t.jsx(ht,{target:d,album:(e=a.props)==null?void 0:e.album}):a.key.startsWith("IG Highlight-")?t.jsx(xt,{target:d,highlight:(c=a.props)==null?void 0:c.highlight}):null}},U=async(a=O)=>{var c;const e=a==null?void 0:a.trim();(e==null?void 0:e.length)!=0&&(B("BulkDownloader:onSearch_"+l+":"+e),A(e),(c=k==null?void 0:k.onSearch)==null||c.call(k,e))},fe=a=>{B("BulkDownloader:onChangeTab:"+a),b(a)},_e=(a,e)=>{if(e==="remove"){const c=S.filter(_=>_.key!==a);T(c),b(W||"")}},ye=a=>{let e="Album-"+a.id;B("BulkDownloader:onOpenAlbum"),T(c=>[...c,{key:e,label:"Album: "+a.name,closable:!0,props:{album:a}}]),b(e)},ve=a=>{let e="IG Highlight-"+a.id;B("BulkDownloader:onOpenIGHighlight"),T(c=>[...c,{key:e,label:"IG Highlight: "+a.title,closable:!0,props:{highlight:a}}]),b(e)},ne=d?S.map(a=>{const e=J(a);return{key:a.key,label:r(a.label),closable:a.closable,children:e}}).filter(a=>a.children):[];return t.jsxs(V,{style:{width:"100%",height:"100%"},direction:"vertical",children:[t.jsxs(V,{direction:"vertical",style:{width:"100%",height:"100%",display:"flex",justifyContent:"center",alignItems:"center"},children:[t.jsx(ge.Title,{level:3,style:{margin:0},children:r({en:"Bulk Downloader",vi:"Tải Hàng Loạt"})}),t.jsx(V.Compact,{children:Object.entries(R).map(([a,e])=>t.jsx(Fe,{count:a===R.Threads?r({en:"New",vi:"Mới"}):"",color:"purple",style:{color:"white",zIndex:2},children:t.jsx(ee,{size:"middle",type:l===e?"primary":"default",onClick:()=>Q(e),icon:t.jsx("i",{className:Ae[a]||`fa-brands fa-${e.toLocaleLowerCase()} fa-lg`}),children:e})},a))}),t.jsx(Z,{value:O,options:q,onSelect:U,onSearch:$,style:{width:350,marginBottom:5},children:t.jsx(Me.Search,{placeholder:k.placeholder,size:"large",style:{width:350},onChange:a=>{var e;return A((e=a.target.value)==null?void 0:e.trim())},onSearch:()=>U(),enterButton:x?null:t.jsx("i",{className:"fa-solid fa-magnifying-glass"}),loading:x})}),d?t.jsx(st,{about:d,onClose:()=>{D(null),b(""),A("")}}):null]}),ne.length?t.jsx(He,{defaultActiveKey:f,activeKey:f,type:"editable-card",centered:!0,hideAdd:!0,items:ne,onChange:fe,onEdit:_e}):t.jsxs(V,{direction:"vertical",align:"center",style:{width:"100%",marginTop:10},children:[(ce=he[l])!=null&&ce.length?t.jsx(Ke,{defaultActiveKey:["1"],items:[{label:r({en:`Supported ${l} URL/ID format ?`,vi:`Các định dạng ${l} được hỗ trợ ?`}),children:he[l].map(({icon:a,name:e,url:c},_)=>t.jsxs(ge.Text,{children:[t.jsx("i",{className:a})," ",t.jsx("b",{children:r(e)}),Array.isArray(c)?t.jsx("ul",{children:c.map(L=>t.jsx("li",{children:L},L))}):t.jsx(t.Fragment,{children:"u"})]},_))}]}):null,k.canDownload&&t.jsx(te,{type:"success",showIcon:!0,message:k.canDownload}),t.jsx(te,{type:"warning",showIcon:!0,message:r({vi:t.jsxs(t.Fragment,{children:["FB AIO giúp bạn ",t.jsx("span",{className:"highlight",children:"tải nhanh"})," các"," ",t.jsx("span",{className:"highlight",children:"ảnh/video yêu thích"})," từ Facebook, Instagram, Threads.",t.jsx("br",{}),"Chúng tôi ",t.jsx("span",{className:"highlight",children:"không khuyến khích"})," ","tải để sao chép trái phép hoặc"," ",t.jsx("span",{className:"highlight",children:"vi phạm pháp luật."}),t.jsx("br",{}),"FB AIO ",t.jsx("span",{className:"highlight",children:"không chịu trách nhiệm"})," ","cho các vấn đề pháp lý phát sinh từ việc sử dụng sai mục đích."]}),en:t.jsxs(t.Fragment,{children:["FB AIO lets you"," ",t.jsx("span",{className:"highlight",children:"quickly download"})," your"," ",t.jsx("span",{className:"highlight",children:"favorite photos/videos"})," from Facebook, Instagram, Threads.",t.jsx("br",{}),"We ",t.jsx("span",{className:"highlight",children:"do not encourage"})," ","downloading for illegal copying or"," ",t.jsx("span",{className:"highlight",children:"violating the law"}),".",t.jsx("br",{}),"FB AIO is"," ",t.jsx("span",{className:"highlight",children:"not liable for any legal issues"})," ","arising from misuse."]})})}),k.tip?t.jsxs(t.Fragment,{children:[t.jsx(te,{type:"info",showIcon:!0,message:k.tip,style:{marginTop:50}}),t.jsx($e,{src:k.tipImg,height:200})]}):null]})]})}const Kt=Object.freeze(Object.defineProperty({__proto__:null,default:At},Symbol.toStringTag,{value:"Module"}));export{et as a,Xe as f,Ht as g,Kt as i};
