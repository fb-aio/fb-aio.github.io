System.register(["./index-legacy-DmD19Aid.js","./MyApp-legacy-BJbLsob1.js","./responsiveObserver-legacy-BCCgsqjX.js","./useBreakpoint-legacy-CFfMZR2S.js","./index-legacy-CvqRES_3.js"],(function(e,t){"use strict";var r,n,o,s,i,a,l,c,g,u,p,d,m,f,v,y;return{setters:[e=>{r=e.r,n=e.L,o=e.M,s=e.O,i=e.J,a=e.y,l=e.G,c=e.ag,g=e.ab,u=e.q,p=e.t,d=e.W},e=>{m=e.R},e=>{f=e.r},e=>{v=e.u},e=>{y=e.P}],execute:function(){const t=r.createContext({}),b=e=>{const{antCls:t,componentCls:r,iconCls:n,avatarBg:o,avatarColor:a,containerSize:l,containerSizeLG:c,containerSizeSM:g,textFontSize:u,textFontSizeLG:p,textFontSizeSM:d,borderRadius:m,borderRadiusLG:f,borderRadiusSM:v,lineWidth:y,lineType:b}=e,S=(e,t,o)=>({width:e,height:e,borderRadius:"50%",[`&${r}-square`]:{borderRadius:o},[`&${r}-icon`]:{fontSize:t,[`> ${n}`]:{margin:0}}});return{[r]:Object.assign(Object.assign(Object.assign(Object.assign({},s(e)),{position:"relative",display:"inline-flex",justifyContent:"center",alignItems:"center",overflow:"hidden",color:a,whiteSpace:"nowrap",textAlign:"center",verticalAlign:"middle",background:o,border:`${i(y)} ${b} transparent`,"&-image":{background:"transparent"},[`${t}-image-img`]:{display:"block"}}),S(l,u,m)),{"&-lg":Object.assign({},S(c,p,f)),"&-sm":Object.assign({},S(g,d,v)),"> img":{display:"block",width:"100%",height:"100%",objectFit:"cover"}})}},S=e=>{const{componentCls:t,groupBorderColor:r,groupOverlapping:n,groupSpace:o}=e;return{[`${t}-group`]:{display:"inline-flex",[t]:{borderColor:r},"> *:not(:first-child)":{marginInlineStart:n}},[`${t}-group-popover`]:{[`${t} + ${t}`]:{marginInlineStart:o}}}},h=n("Avatar",(e=>{const{colorTextLightSolid:t,colorTextPlaceholder:r}=e,n=o(e,{avatarBg:r,avatarColor:t});return[b(n),S(n)]}),(e=>{const{controlHeight:t,controlHeightLG:r,controlHeightSM:n,fontSize:o,fontSizeLG:s,fontSizeXL:i,fontSizeHeading3:a,marginXS:l,marginXXS:c,colorBorderBg:g}=e;return{containerSize:t,containerSizeLG:r,containerSizeSM:n,textFontSize:Math.round((s+i)/2),textFontSizeLG:a,textFontSizeSM:o,groupSpace:c,groupOverlapping:-l,groupBorderColor:g}})),x=(e,n)=>{const[o,s]=r.useState(1),[i,p]=r.useState(!1),[d,y]=r.useState(!0),b=r.useRef(null),S=r.useRef(null),x=a(n,b),{getPrefixCls:O,avatar:z}=r.useContext(l),j=r.useContext(t),C=()=>{if(!S.current||!b.current)return;const t=S.current.offsetWidth,r=b.current.offsetWidth;if(0!==t&&0!==r){const{gap:n=4}=e;2*n<r&&s(r-2*n<t?(r-2*n)/t:1)}};r.useEffect((()=>{p(!0)}),[]),r.useEffect((()=>{y(!0),s(1)}),[e.src]),r.useEffect(C,[e.gap]);const $=()=>{const{onError:t}=e;!1!==(null==t?void 0:t())&&y(!1)},{prefixCls:E,shape:N,size:k,src:w,srcSet:M,icon:P,className:R,rootClassName:L,alt:G,draggable:B,children:F,crossOrigin:T}=e,A=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]])}return r}(e,["prefixCls","shape","size","src","srcSet","icon","className","rootClassName","alt","draggable","children","crossOrigin"]),H=c((e=>{var t,r;return null!==(r=null!==(t=null!=k?k:null==j?void 0:j.size)&&void 0!==t?t:e)&&void 0!==r?r:"default"})),W=Object.keys("object"==typeof H&&H||{}).some((e=>["xs","sm","md","lg","xl","xxl"].includes(e))),I=v(W),X=r.useMemo((()=>{if("object"!=typeof H)return{};const e=f.find((e=>I[e])),t=H[e];return t?{width:t,height:t,fontSize:t&&(P||F)?t/2:18}:{}}),[I,H]),q=O("avatar",E),J=g(q),[U,V,D]=h(q,J),K=u({[`${q}-lg`]:"large"===H,[`${q}-sm`]:"small"===H}),Q=r.isValidElement(w),Y=N||(null==j?void 0:j.shape)||"circle",Z=u(q,K,null==z?void 0:z.className,`${q}-${Y}`,{[`${q}-image`]:Q||w&&d,[`${q}-icon`]:!!P},D,J,R,L,V),_="number"==typeof H?{width:H,height:H,fontSize:P?H/2:18}:{};let ee;if("string"==typeof w&&d)ee=r.createElement("img",{src:w,draggable:B,srcSet:M,onError:$,alt:G,crossOrigin:T});else if(Q)ee=w;else if(P)ee=P;else if(i||1!==o){const e=`scale(${o})`,t={msTransform:e,WebkitTransform:e,transform:e};ee=r.createElement(m,{onResize:C},r.createElement("span",{className:`${q}-string`,ref:S,style:Object.assign({},t)},F))}else ee=r.createElement("span",{className:`${q}-string`,style:{opacity:0},ref:S},F);return delete A.onError,delete A.gap,U(r.createElement("span",Object.assign({},A,{style:Object.assign(Object.assign(Object.assign(Object.assign({},_),X),null==z?void 0:z.style),A.style),className:Z,ref:x}),ee))},O=r.forwardRef(x),z=e=>{const{size:n,shape:o}=r.useContext(t),s=r.useMemo((()=>({size:e.size||n,shape:e.shape||o})),[e.size,e.shape,n,o]);return r.createElement(t.Provider,{value:s},e.children)};e("A",O).Group=e=>{var t,n,o,s;const{getPrefixCls:i,direction:a}=r.useContext(l),{prefixCls:c,className:m,rootClassName:f,style:v,maxCount:b,maxStyle:S,size:x,shape:j,maxPopoverPlacement:C,maxPopoverTrigger:$,children:E,max:N}=e,k=i("avatar",c),w=`${k}-group`,M=g(k),[P,R,L]=h(k,M),G=u(w,{[`${w}-rtl`]:"rtl"===a},L,M,m,f,R),B=p(E).map(((e,t)=>d(e,{key:`avatar-key-${t}`}))),F=(null==N?void 0:N.count)||b,T=B.length;if(F&&F<T){const e=B.slice(0,F),i=B.slice(F,T),a=(null==N?void 0:N.style)||S,l=(null===(t=null==N?void 0:N.popover)||void 0===t?void 0:t.trigger)||$||"hover",c=(null===(n=null==N?void 0:N.popover)||void 0===n?void 0:n.placement)||C||"top",g=Object.assign(Object.assign({content:i},null==N?void 0:N.popover),{classNames:{root:u(`${w}-popover`,null===(s=null===(o=null==N?void 0:N.popover)||void 0===o?void 0:o.classNames)||void 0===s?void 0:s.root)},placement:c,trigger:l});return e.push(r.createElement(y,Object.assign({key:"avatar-popover-key",destroyTooltipOnHide:!0},g),r.createElement(O,{style:a},"+"+(T-F)))),P(r.createElement(z,{shape:j,size:x},r.createElement("div",{className:G,style:v},e)))}return P(r.createElement(z,{shape:j,size:x},r.createElement("div",{className:G,style:v},B)))}}}}));
