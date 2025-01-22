System.register(["./index-legacy-o-Mc05JF.js","./MyApp-legacy-BIzdTde3.js","./responsiveObserver-legacy-Ch9VCUxP.js","./useBreakpoint-legacy-D0K2VlTm.js","./index-legacy-eKPkPOrk.js"],(function(e,t){"use strict";var r,n,o,s,a,i,l,c,g,p,u,d,m,f,v,y;return{setters:[e=>{r=e.r,n=e.F,o=e.G,s=e.J,a=e.E,i=e.x,l=e.L,c=e.bF,g=e.a7,p=e.p,u=e.t,d=e.S},e=>{m=e.R},e=>{f=e.r},e=>{v=e.a},e=>{y=e.P}],execute:function(){const t=r.createContext({}),S=e=>{const{antCls:t,componentCls:r,iconCls:n,avatarBg:o,avatarColor:i,containerSize:l,containerSizeLG:c,containerSizeSM:g,textFontSize:p,textFontSizeLG:u,textFontSizeSM:d,borderRadius:m,borderRadiusLG:f,borderRadiusSM:v,lineWidth:y,lineType:S}=e,b=(e,t,o)=>({width:e,height:e,borderRadius:"50%",[`&${r}-square`]:{borderRadius:o},[`&${r}-icon`]:{fontSize:t,[`> ${n}`]:{margin:0}}});return{[r]:Object.assign(Object.assign(Object.assign(Object.assign({},s(e)),{position:"relative",display:"inline-flex",justifyContent:"center",alignItems:"center",overflow:"hidden",color:i,whiteSpace:"nowrap",textAlign:"center",verticalAlign:"middle",background:o,border:`${a(y)} ${S} transparent`,"&-image":{background:"transparent"},[`${t}-image-img`]:{display:"block"}}),b(l,p,m)),{"&-lg":Object.assign({},b(c,u,f)),"&-sm":Object.assign({},b(g,d,v)),"> img":{display:"block",width:"100%",height:"100%",objectFit:"cover"}})}},b=e=>{const{componentCls:t,groupBorderColor:r,groupOverlapping:n,groupSpace:o}=e;return{[`${t}-group`]:{display:"inline-flex",[t]:{borderColor:r},"> *:not(:first-child)":{marginInlineStart:n}},[`${t}-group-popover`]:{[`${t} + ${t}`]:{marginInlineStart:o}}}},h=n("Avatar",(e=>{const{colorTextLightSolid:t,colorTextPlaceholder:r}=e,n=o(e,{avatarBg:r,avatarColor:t});return[S(n),b(n)]}),(e=>{const{controlHeight:t,controlHeightLG:r,controlHeightSM:n,fontSize:o,fontSizeLG:s,fontSizeXL:a,fontSizeHeading3:i,marginXS:l,marginXXS:c,colorBorderBg:g}=e;return{containerSize:t,containerSizeLG:r,containerSizeSM:n,textFontSize:Math.round((s+a)/2),textFontSizeLG:i,textFontSizeSM:o,groupSpace:c,groupOverlapping:-l,groupBorderColor:g}})),x=(e,n)=>{const[o,s]=r.useState(1),[a,u]=r.useState(!1),[d,y]=r.useState(!0),S=r.useRef(null),b=r.useRef(null),x=i(n,S),{getPrefixCls:O,avatar:z}=r.useContext(l),j=r.useContext(t),C=()=>{if(!b.current||!S.current)return;const t=b.current.offsetWidth,r=S.current.offsetWidth;if(0!==t&&0!==r){const{gap:n=4}=e;2*n<r&&s(r-2*n<t?(r-2*n)/t:1)}};r.useEffect((()=>{u(!0)}),[]),r.useEffect((()=>{y(!0),s(1)}),[e.src]),r.useEffect(C,[e.gap]);const $=()=>{const{onError:t}=e;!1!==(null==t?void 0:t())&&y(!1)},{prefixCls:E,shape:N,size:k,src:w,srcSet:P,icon:L,className:M,rootClassName:R,alt:F,draggable:G,children:T,crossOrigin:B}=e,A=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]])}return r}(e,["prefixCls","shape","size","src","srcSet","icon","className","rootClassName","alt","draggable","children","crossOrigin"]),H=c((e=>{var t,r;return null!==(r=null!==(t=null!=k?k:null==j?void 0:j.size)&&void 0!==t?t:e)&&void 0!==r?r:"default"})),X=Object.keys("object"==typeof H&&H||{}).some((e=>["xs","sm","md","lg","xl","xxl"].includes(e))),I=v(X),W=r.useMemo((()=>{if("object"!=typeof H)return{};const e=f.find((e=>I[e])),t=H[e];return t?{width:t,height:t,fontSize:t&&(L||T)?t/2:18}:{}}),[I,H]),q=O("avatar",E),J=g(q),[V,D,K]=h(q,J),Q=p({[`${q}-lg`]:"large"===H,[`${q}-sm`]:"small"===H}),U=r.isValidElement(w),Y=N||(null==j?void 0:j.shape)||"circle",Z=p(q,Q,null==z?void 0:z.className,`${q}-${Y}`,{[`${q}-image`]:U||w&&d,[`${q}-icon`]:!!L},K,J,M,R,D),_="number"==typeof H?{width:H,height:H,fontSize:L?H/2:18}:{};let ee;if("string"==typeof w&&d)ee=r.createElement("img",{src:w,draggable:G,srcSet:P,onError:$,alt:F,crossOrigin:B});else if(U)ee=w;else if(L)ee=L;else if(a||1!==o){const e=`scale(${o})`,t={msTransform:e,WebkitTransform:e,transform:e};ee=r.createElement(m,{onResize:C},r.createElement("span",{className:`${q}-string`,ref:b,style:Object.assign({},t)},T))}else ee=r.createElement("span",{className:`${q}-string`,style:{opacity:0},ref:b},T);return delete A.onError,delete A.gap,V(r.createElement("span",Object.assign({},A,{style:Object.assign(Object.assign(Object.assign(Object.assign({},_),W),null==z?void 0:z.style),A.style),className:Z,ref:x}),ee))},O=r.forwardRef(x),z=e=>{const{size:n,shape:o}=r.useContext(t),s=r.useMemo((()=>({size:e.size||n,shape:e.shape||o})),[e.size,e.shape,n,o]);return r.createElement(t.Provider,{value:s},e.children)};e("A",O).Group=e=>{var t,n,o;const{getPrefixCls:s,direction:a}=r.useContext(l),{prefixCls:i,className:c,rootClassName:m,style:f,maxCount:v,maxStyle:S,size:b,shape:x,maxPopoverPlacement:j,maxPopoverTrigger:C,children:$,max:E}=e,N=s("avatar",i),k=`${N}-group`,w=g(N),[P,L,M]=h(N,w),R=p(k,{[`${k}-rtl`]:"rtl"===a},M,w,c,m,L),F=u($).map(((e,t)=>d(e,{key:`avatar-key-${t}`}))),G=(null==E?void 0:E.count)||v,T=F.length;if(G&&G<T){const e=F.slice(0,G),s=F.slice(G,T),a=(null==E?void 0:E.style)||S,i=(null===(t=null==E?void 0:E.popover)||void 0===t?void 0:t.trigger)||C||"hover",l=(null===(n=null==E?void 0:E.popover)||void 0===n?void 0:n.placement)||j||"top",c=Object.assign(Object.assign({content:s},null==E?void 0:E.popover),{overlayClassName:p(`${k}-popover`,null===(o=null==E?void 0:E.popover)||void 0===o?void 0:o.overlayClassName),placement:l,trigger:i});return e.push(r.createElement(y,Object.assign({key:"avatar-popover-key",destroyTooltipOnHide:!0},c),r.createElement(O,{style:a},"+"+(T-G)))),P(r.createElement(z,{shape:x,size:b},r.createElement("div",{className:R,style:f},e)))}return P(r.createElement(z,{shape:x,size:b},r.createElement("div",{className:R,style:f},F)))}}}}));
