import{ct as We,cu as Be,aO as De,cv as He,cw as qe,cx as $e,cy as ze,b6 as Ge,r as b,bd as a,bx as y,b8 as o,cz as Ke,am as R}from"./index-wbIphP0C.js";import{S as Ye}from"./Screen-CeOg0Yph.js";import{u as Ze,i as M,t as L,S as q,a8 as Xe,B as de,C as w,d as C,c as le,k as Je}from"./MyApp-njhOwsK5.js";import{A as Qe,V as er}from"./VideoWithMuted-Cmj6LkIN.js";import rr from"./Collection-B84MYYN0.js";import{S as nr,E as me}from"./index-BQOyVFxl.js";import{D as tr}from"./index-CT0-xXd7.js";import"./col-DRzNhW_D.js";import"./row-DdHEAPVK.js";import"./responsiveObserver-BQjJBraY.js";import"./index-CEfgdh1o.js";import"./file-download-D5jJu5kT.js";import"./react-hotkeys-hook.esm-BTAORnXw.js";import"./index-B3Gx5yAQ.js";import"./index-CKlEhchA.js";import"./index-BhxZmaJn.js";import"./index-BJ_cfilr.js";import"./PurePanel-D-rOXPVf.js";import"./move-pmQE-KxM.js";import"./index-s3q_FkaZ.js";import"./Pagination-0Ohn2LYf.js";import"./useBreakpoint-DzRoOrnh.js";import"./useForceUpdate-D5RHpHIP.js";import"./List-xxph-gd1.js";import"./DownOutlined-Bwe6hCgw.js";const ir=(t,e,r)=>{const i=t[e];return i?typeof i=="function"?i():Promise.resolve(i):new Promise((n,u)=>{(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(u.bind(null,new Error("Unknown variable dynamic import: "+e+(e.split("/").length!==r?". Note that variables only represent file names one level deep.":""))))})};var F,_e;function sr(){if(_e)return F;_e=1;function t(e,r){var i=-1,n=e.length;for(r||(r=Array(n));++i<n;)r[i]=e[i];return r}return F=t,F}var U,ce;function or(){if(ce)return U;ce=1;var t=Math.floor,e=Math.random;function r(i,n){return i+t(e()*(n-i+1))}return U=r,U}var W,fe;function we(){if(fe)return W;fe=1;var t=or();function e(r,i){var n=-1,u=r.length,m=u-1;for(i=i===void 0?u:i;++n<i;){var p=t(n,m),c=r[p];r[p]=r[n],r[n]=c}return r.length=i,r}return W=e,W}var B,he;function ar(){if(he)return B;he=1;var t=sr(),e=we();function r(i){return e(t(i))}return B=r,B}var H,pe;function ur(){if(pe)return H;pe=1;function t(e,r){for(var i=-1,n=e==null?0:e.length,u=Array(n);++i<n;)u[i]=r(e[i],i,e);return u}return H=t,H}var $,ge;function dr(){if(ge)return $;ge=1;var t=ur();function e(r,i){return t(i,function(n){return r[n]})}return $=e,$}var z,je;function lr(){if(je)return z;je=1;var t=dr(),e=We();function r(i){return i==null?[]:t(i,e(i))}return z=r,z}var G,Ee;function mr(){if(Ee)return G;Ee=1;var t=we(),e=lr();function r(i){return t(e(i))}return G=r,G}var K,ve;function _r(){if(ve)return K;ve=1;var t=ar(),e=mr(),r=Be();function i(n){var u=r(n)?t:e;return u(n)}return K=i,K}var cr=_r();const fr=De(cr);var Y,xe;function hr(){if(xe)return Y;xe=1;function t(e,r,i,n){for(var u=e.length,m=i+(n?1:-1);n?m--:++m<u;)if(r(e[m],m,e))return m;return-1}return Y=t,Y}var Z,Ie;function pr(){if(Ie)return Z;Ie=1;function t(e){return e!==e}return Z=t,Z}var X,Re;function gr(){if(Re)return X;Re=1;function t(e,r,i){for(var n=i-1,u=e.length;++n<u;)if(e[n]===r)return n;return-1}return X=t,X}var J,Te;function jr(){if(Te)return J;Te=1;var t=hr(),e=pr(),r=gr();function i(n,u,m){return u===u?r(n,u,m):t(n,e,m)}return J=i,J}var Q,ye;function Er(){if(ye)return Q;ye=1;var t=jr();function e(r,i){var n=r==null?0:r.length;return!!n&&t(r,i,0)>-1}return Q=e,Q}var ee,Ae;function vr(){if(Ae)return ee;Ae=1;function t(e,r,i){for(var n=-1,u=e==null?0:e.length;++n<u;)if(i(r,e[n]))return!0;return!1}return ee=t,ee}var re,be;function xr(){if(be)return re;be=1;function t(){}return re=t,re}var ne,Le;function Ir(){if(Le)return ne;Le=1;var t=He(),e=xr(),r=qe(),i=1/0,n=t&&1/r(new t([,-0]))[1]==i?function(u){return new t(u)}:e;return ne=n,ne}var te,Oe;function Rr(){if(Oe)return te;Oe=1;var t=$e(),e=Er(),r=vr(),i=ze(),n=Ir(),u=qe(),m=200;function p(c,g,A){var O=-1,P=e,V=c.length,T=!0,E=[],j=E;if(A)T=!1,P=r;else if(V>=m){var S=g?null:n(c);if(S)return u(S);T=!1,P=i,j=new t}else j=g?[]:E;e:for(;++O<V;){var v=c[O],I=g?g(v):v;if(v=A||v!==0?v:0,T&&I===I){for(var k=j.length;k--;)if(j[k]===I)continue e;g&&j.push(I),E.push(v)}else P(j,I,A)||(j!==E&&j.push(I),E.push(v))}return E}return te=p,te}var ie,Pe;function Tr(){if(Pe)return ie;Pe=1;var t=Rr();function e(r){return r&&r.length?t(r):[]}return ie=e,ie}var yr=Tr();const Ar=De(yr),Ve=["artstation","girl","anime","meme","cosplay","waifu","lolii","phongcanh","wibu","ausand","ig","gaiIG","naughty","gentle","du","donate","vdchill","xoa","spar","hug","creepy","vddoraemon","puch","kiss","slap","vdtet","domixi","cosplaygenshin","itachi","jimmy","vdgai","linhngocdam","autosend","jack3cu","gura","videochill","APIsKem","saumui","couple","khanhhuyen","lebong","videogaixinh","vdanime","ngoctrinh","man","chitanda","hana_18+","nhacmp3","tw"],br=5;function en(){var ae,ue;const{message:t}=Ze(),{ti:e}=Ge(),[r,i]=M("TinderNew.category",Ve[0],!0),[n,u]=M("TinderNew.mediaStacks",{}),[m,p]=M("Tinder.count",{skip:0,like:0},!0),[c,g]=M("Tinder.lovedUrls",[],!0),[A,O]=b.useState(!1),[P,V]=b.useState(new Set);b.useEffect(()=>{L("Tinder.onLoad")},[]),b.useEffect(()=>{n[r]||(O(!0),ir(Object.assign({"../../assets/json/img/APIsKem.json":()=>a(()=>import("./APIsKem-DFAVi_5O.js"),[],import.meta.url),"../../assets/json/img/anime.json":()=>a(()=>import("./anime-DM8wUqSD.js"),[],import.meta.url),"../../assets/json/img/artstation.json":()=>a(()=>import("./artstation-MjJCVLdZ.js"),[],import.meta.url),"../../assets/json/img/ausand.json":()=>a(()=>import("./ausand-BnVZRE9R.js"),[],import.meta.url),"../../assets/json/img/autosend.json":()=>a(()=>import("./autosend-C98BDuJg.js"),[],import.meta.url),"../../assets/json/img/chitanda.json":()=>a(()=>import("./chitanda-C4VBzwhJ.js"),[],import.meta.url),"../../assets/json/img/cosplay.json":()=>a(()=>import("./cosplay-DujLTsCz.js"),[],import.meta.url),"../../assets/json/img/cosplaygenshin.json":()=>a(()=>import("./cosplaygenshin-Ca4p8Ake.js"),[],import.meta.url),"../../assets/json/img/couple.json":()=>a(()=>import("./couple-BxOM_kSh.js"),[],import.meta.url),"../../assets/json/img/creepy.json":()=>a(()=>import("./creepy-Ds19T0ez.js"),[],import.meta.url),"../../assets/json/img/domixi.json":()=>a(()=>import("./domixi-CDmSaTWS.js"),[],import.meta.url),"../../assets/json/img/donate.json":()=>a(()=>import("./donate-DHyNNudV.js"),[],import.meta.url),"../../assets/json/img/du.json":()=>a(()=>import("./du-DUAy_v35.js"),[],import.meta.url),"../../assets/json/img/gaiIG.json":()=>a(()=>import("./gaiIG-CeCsJgRZ.js"),[],import.meta.url),"../../assets/json/img/gentle.json":()=>a(()=>import("./gentle-R-s-WnGS.js"),[],import.meta.url),"../../assets/json/img/girl.json":()=>a(()=>import("./girl-AEcjtsCD.js"),[],import.meta.url),"../../assets/json/img/gura.json":()=>a(()=>import("./gura-DWWyYfb2.js"),[],import.meta.url),"../../assets/json/img/hana_18+.json":()=>a(()=>import("./hana_18_-CynSZj1U.js"),[],import.meta.url),"../../assets/json/img/help.json":()=>a(()=>import("./help-C1oz5beS.js"),[],import.meta.url),"../../assets/json/img/hug.json":()=>a(()=>import("./hug-CD6hRunE.js"),[],import.meta.url),"../../assets/json/img/ig.json":()=>a(()=>import("./ig-CeCsJgRZ.js"),[],import.meta.url),"../../assets/json/img/itachi.json":()=>a(()=>import("./itachi-SaAfTYc6.js"),[],import.meta.url),"../../assets/json/img/jack3cu.json":()=>a(()=>import("./jack3cu-D8WUrHoa.js"),[],import.meta.url),"../../assets/json/img/jimmy.json":()=>a(()=>import("./jimmy-fBcePqWQ.js"),[],import.meta.url),"../../assets/json/img/khanhhuyen.json":()=>a(()=>import("./khanhhuyen-CloNkM9d.js"),[],import.meta.url),"../../assets/json/img/kiss.json":()=>a(()=>import("./kiss-DRx_mTbM.js"),[],import.meta.url),"../../assets/json/img/lebong.json":()=>a(()=>import("./lebong-Bd_6j0b3.js"),[],import.meta.url),"../../assets/json/img/linhngocdam.json":()=>a(()=>import("./linhngocdam-DCMMjih6.js"),[],import.meta.url),"../../assets/json/img/lolii.json":()=>a(()=>import("./lolii-tiadadMi.js"),[],import.meta.url),"../../assets/json/img/man.json":()=>a(()=>import("./man-DDM6aXCQ.js"),[],import.meta.url),"../../assets/json/img/meme.json":()=>a(()=>import("./meme-BYrSPw85.js"),[],import.meta.url),"../../assets/json/img/naughty.json":()=>a(()=>import("./naughty-D8pkLkiX.js"),[],import.meta.url),"../../assets/json/img/ngoctrinh.json":()=>a(()=>import("./ngoctrinh-BgYDOZu0.js"),[],import.meta.url),"../../assets/json/img/nhacmp3.json":()=>a(()=>import("./nhacmp3-BQvD_Mro.js"),[],import.meta.url),"../../assets/json/img/nude.json":()=>a(()=>import("./nude-CBT8PlrJ.js"),[],import.meta.url),"../../assets/json/img/phongcanh.json":()=>a(()=>import("./phongcanh-BqlBA_Kk.js"),[],import.meta.url),"../../assets/json/img/puch.json":()=>a(()=>import("./puch-CDPKKJC1.js"),[],import.meta.url),"../../assets/json/img/saumui.json":()=>a(()=>import("./saumui-CE5CRqF-.js"),[],import.meta.url),"../../assets/json/img/slap.json":()=>a(()=>import("./slap-DecAk_eL.js"),[],import.meta.url),"../../assets/json/img/spar.json":()=>a(()=>import("./spar-DGQJfWSM.js"),[],import.meta.url),"../../assets/json/img/tw.json":()=>a(()=>import("./tw-D2kdlKla.js"),[],import.meta.url),"../../assets/json/img/vdanime.json":()=>a(()=>import("./vdanime-BR_0z3OY.js"),[],import.meta.url),"../../assets/json/img/vdchill.json":()=>a(()=>import("./vdchill-iZ3k91tm.js"),[],import.meta.url),"../../assets/json/img/vddoraemon.json":()=>a(()=>import("./vddoraemon-DfbLDw3h.js"),[],import.meta.url),"../../assets/json/img/vdgai.json":()=>a(()=>import("./vdgai-DebIhX-o.js"),[],import.meta.url),"../../assets/json/img/vdtet.json":()=>a(()=>import("./vdtet-C0-eAh7Q.js"),[],import.meta.url),"../../assets/json/img/videochill.json":()=>a(()=>import("./videochill-DFAVi_5O.js"),[],import.meta.url),"../../assets/json/img/videogaixinh.json":()=>a(()=>import("./videogaixinh-BqS_oyz-.js"),[],import.meta.url),"../../assets/json/img/waifu.json":()=>a(()=>import("./waifu-CTGaoqkO.js"),[],import.meta.url),"../../assets/json/img/wibu.json":()=>a(()=>import("./wibu-CaLuXU3x.js"),[],import.meta.url),"../../assets/json/img/xoa.json":()=>a(()=>import("./xoa-njJXdVtL.js"),[],import.meta.url)}),"../../assets/json/img/".concat(r,".json"),6).then(s=>{L("Tinder.loadCategory:"+r);const d=Ar(fr(s.default));u(y(l=>{l[r]={urls:d,loadedMedia:[],index:0}}))}).catch(s=>{console.error("Failed to load category:",r,s),t.error("Failed to load category: ".concat(r))}).finally(()=>O(!1)))},[r,n]);const T=b.useRef({});b.useEffect(()=>{const s=n[r];if(!s)return;const d=s.loadedMedia.length,l=Math.min(s.index+br,s.urls.length);for(let f=d;f<l;f++){const _=s.urls[f];!_||T.current[_]||s.loadedMedia.includes(_)||(T.current[_]=!0,V(h=>(h.add(_),h)),Lr(_).then(h=>{h||console.error("Failed to preload media:",_),u(y(N=>(h?N[r].loadedMedia.push(_):N[r].urls=N[r].urls.filter(Ue=>Ue!==_),N)))}).finally(()=>{T.current[_]=!1,V(h=>(h.delete(_),h))}))}},[r,n]);const E=()=>{u(y(s=>{const d=s[r].urls.length,l=s[r].index;s[r].index=(l+1)%d}))},j=()=>{L("Tinder.skip"),E(),p(y(s=>{s.skip=s.skip+1}))},S=()=>{L("Tinder.love"),E(),g(s=>[...s.filter(d=>d!==D),D]),p(y(s=>{s.like=s.like+1}))},v=()=>{L("Tinder.reset"),p({skip:0,like:0})},I=s=>{L("Tinder.toggleLoved"),g(d=>d.includes(s)?d.filter(l=>l!==s):[...d,s])},k=(s,d)=>{u(y(l=>{l[s].urls=l[s].urls.filter(f=>f!==d),l[s].loadedMedia=l[s].loadedMedia.filter(f=>f!==d)}))},Ne=(s,d)=>({url:s,name:"TinderSaved-".concat(d,".").concat(ke(s))}),Me=s=>o.jsxs("div",{style:{position:"relative",padding:5},className:"show-on-hover-trigger",children:[o.jsx(se,{url:s,maxWidth:120,maxHeight:120},s),o.jsx(R,{className:"show-on-hover-item",icon:o.jsx("i",{className:"fa-solid fa-close"}),onClick:()=>{g(d=>d.filter(l=>l!==s))},style:{position:"absolute",bottom:5,right:5}})]}),Ce=(s,d)=>o.jsx(q,{wrap:!0,children:d.loadedMedia.map((l,f)=>{const _=f===d.index,h=c.includes(l);return o.jsxs("div",{style:{border:_?"2px solid red":"none",borderRadius:10,padding:2,position:"relative"},className:"show-on-hover-trigger",children:[o.jsx(se,{url:l,onLoad:()=>{},onError:()=>{t.error("Failed to load media: ".concat(l))},maxWidth:100,maxHeight:100,autoPlay:!1}),o.jsxs(q,{size:3,style:{position:"absolute",bottom:5,right:5},children:[o.jsx(R,{danger:!0,icon:o.jsx("i",{className:"fa-solid fa-trash"}),className:"show-on-hover-item",onClick:()=>k(s,l)}),o.jsx(R,{danger:h,icon:o.jsx("i",{className:"fa-solid fa-heart"}),onClick:()=>I(l),className:h?"":"show-on-hover-item"})]})]},l)})},s),x=n[r],Fe=((ae=x==null?void 0:x.loadedMedia)==null?void 0:ae.length)>0,D=(ue=x==null?void 0:x.loadedMedia)==null?void 0:ue[x==null?void 0:x.index],oe=!D||P.has(D);return o.jsx(Ye,{title:o.jsxs(o.Fragment,{children:["Tinder mini ",o.jsx("i",{className:"fa-solid fa-heart",style:{color:"red"}})]}),mode:"center",children:o.jsxs(q,{direction:"vertical",align:"center",children:[o.jsx(nr,{options:Ve.map(s=>{var d,l;return{label:s+(n[s]?" ("+((l=(d=n[s])==null?void 0:d.urls)==null?void 0:l.length)+")":""),value:s}}),value:r,onChange:i,showSearch:!0,style:{width:200}}),Fe&&!oe?o.jsx(se,{url:D,maxWidth:"95vw",maxHeight:"75vh",resizeMode:"contain",fixedSize:!1}):o.jsxs(o.Fragment,{children:[o.jsx(Ke,{active:!0}),o.jsx(Xe,{size:"default"})]}),o.jsxs(q,{size:"middle",style:{justifyContent:"center"},children:[o.jsx(de,{count:m.skip,color:"gray",children:o.jsx(R,{icon:o.jsx("i",{className:"fa-solid fa-xmark fa-lg"}),size:"large",onClick:j,disabled:A,children:e({en:"Skip",vi:"Bỏ qua"})})}),o.jsx(de,{count:m.like,color:"pink",children:o.jsx(R,{type:"primary",danger:!0,icon:o.jsx("i",{className:"fa-solid fa-heart fa-lg"}),size:"large",onClick:S,disabled:A||oe,children:e({en:"Love",vi:"Thích"})})})]}),(m.skip>0||m.like>0)&&o.jsx(R,{type:"text",onClick:v,icon:o.jsx("i",{className:"fa-solid fa-rotate-left"}),children:e({en:"Reset count",vi:"Đếm lại"})}),o.jsx(tr,{}),o.jsxs(w,{bordered:!1,style:{minWidth:300},destroyInactivePanel:!0,children:[o.jsx(w.Panel,{header:o.jsxs(C.Text,{children:[e({en:"Your Love",vi:"Đã thích"})," ",o.jsx(le,{color:"pink",children:c==null?void 0:c.length})]}),children:(c==null?void 0:c.length)>0?o.jsx(rr,{collectionName:"MiniTinder",renderItem:Me,initialData:c,rowKey:s=>s,stop:!0,downloadItem:Ne,headerButtons:()=>[o.jsx(R,{danger:!0,icon:o.jsx("i",{className:"fa-solid fa-trash"}),onClick:()=>g([]),children:e({en:"Clear",vi:"Xóa"})},"clear")]}):o.jsx(me,{description:"No love yet"})},"loved"),o.jsx(w.Panel,{header:o.jsxs(C.Text,{children:[e({en:"History",vi:"Lịch sử"})," ",o.jsx(le,{color:"blue",children:Object.keys(n).reduce((s,d)=>{var l,f,_;return s+((_=(f=(l=n==null?void 0:n[d])==null?void 0:l.loadedMedia)==null?void 0:f.length)!=null?_:0)},0)})]}),children:o.jsx(w,{bordered:!1,destroyInactivePanel:!0,children:Object.keys(n).length>0?Object.entries(n).map(([s,d])=>o.jsx(w.Panel,{header:o.jsxs(q,{align:"center",style:{justifyContent:"space-between",width:"100%"},children:[o.jsxs(C.Text,{children:[s," - ",d.loadedMedia.length,"/",d.urls.length," "]}),o.jsx(R,{icon:o.jsx("i",{className:"fa-solid fa-close"}),onClick:()=>{u(y(l=>(delete l[s],l)))}})]}),children:Ce(s,d)},s)):o.jsx(me,{description:"No history yet"})})},"a")]})]})})}function Se(t){const e=ke(t);return e==="mp4"||e==="webm"?"video":e==="mp3"||e==="wav"?"audio":"image"}function ke(t){var e,r;return(r=(e=t.split(".").pop())==null?void 0:e.toLowerCase())!=null?r:".jpg"}function Lr(t){return new Promise((e,r)=>{switch(Se(t)){case"image":{const n=new Image;n.onload=()=>{e(!0)},n.onerror=()=>{console.error("Failed to preload image:",t),e(!1)},n.src=t;break}case"video":{const n=document.createElement("video");n.onloadeddata=()=>{e(!0)},n.onerror=()=>{console.error("Failed to preload video:",t),e(!1)},n.src=t;break}case"audio":{const n=new Audio;n.oncanplaythrough=()=>{e(!0)},n.onerror=()=>{console.error("Failed to preload audio:",t),e(!1)},n.src=t;break}default:e(!1)}})}function se({url:t,onLoad:e=()=>{},onError:r=()=>{},maxWidth:i=500,maxHeight:n=500,autoPlay:u=!0,resizeMode:m="cover",fixedSize:p=!0}){switch(Se(t)){case"video":return o.jsx(er,{src:t,controls:!0,style:{maxWidth:i,maxHeight:n,borderRadius:10},onLoadedData:e,onError:r,autoPlay:u});case"audio":return o.jsx("div",{style:{width:i,padding:20,background:"#f0f0f0",borderRadius:10},children:o.jsx(Qe,{src:t,controls:!0,style:{width:"100%"},onLoadedData:e,onError:r,autoPlay:u})});default:return o.jsx(Je,{src:t,style:{...p?{width:i,height:n}:{maxWidth:i,maxHeight:n},objectFit:m,borderRadius:10,cursor:"pointer"},onLoad:e,onError:r,preview:{mask:null}})}}export{en as default};
