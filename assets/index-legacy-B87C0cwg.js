System.register(["./index-legacy-Lkr9bBsN.js","./MyApp-legacy-_4SztRAr.js"],(function(e,t){"use strict";var n,o,r,a,l,i,s,c,d,p,m,u,g,y,v,f,b;return{setters:[e=>{n=e.E,o=e.F,r=e.G,a=e.H,l=e.r,i=e.I,s=e.o,c=e.O,d=e.Q,p=e.W},e=>{m=e.a4,u=e.a5,g=e.L,y=e.a6,v=e.a7,f=e.n,b=e.b}],execute:function(){const t=e("g",(e=>e?"function"==typeof e?e():e:null)),x=e=>{const{componentCls:t,popoverColor:n,titleMinWidth:o,fontWeightStrong:r,innerPadding:l,boxShadowSecondary:i,colorTextHeading:s,borderRadiusLG:c,zIndexPopup:d,titleMarginBottom:p,colorBgElevated:u,popoverBg:g,titleBorderBottom:y,innerContentPadding:v,titlePadding:f}=e;return[{[t]:Object.assign(Object.assign({},a(e)),{position:"absolute",top:0,left:{_skip_check_:!0,value:0},zIndex:d,fontWeight:"normal",whiteSpace:"normal",textAlign:"start",cursor:"auto",userSelect:"text",transformOrigin:"var(--arrow-x, 50%) var(--arrow-y, 50%)","--antd-arrow-background-color":u,width:"max-content",maxWidth:"100vw","&-rtl":{direction:"rtl"},"&-hidden":{display:"none"},[`${t}-content`]:{position:"relative"},[`${t}-inner`]:{backgroundColor:g,backgroundClip:"padding-box",borderRadius:c,boxShadow:i,padding:l},[`${t}-title`]:{minWidth:o,marginBottom:p,color:s,fontWeight:r,borderBottom:y,padding:f},[`${t}-inner-content`]:{color:n,padding:v}})},m(e,"var(--antd-arrow-background-color)"),{[`${t}-pure`]:{position:"relative",maxWidth:"none",margin:e.sizePopupArrow,display:"inline-block",[`${t}-content`]:{display:"inline-block"}}}]},h=e=>{const{componentCls:t}=e;return{[t]:u.map((n=>{const o=e[`${n}6`];return{[`&${t}-${n}`]:{"--antd-arrow-background-color":o,[`${t}-inner`]:{backgroundColor:o},[`${t}-arrow`]:{background:"transparent"}}}}))}},O=n("Popover",(e=>{const{colorBgElevated:t,colorText:n}=e,a=o(e,{popoverBg:t,popoverColor:n});return[x(a),h(a),r(a,"zoom-big")]}),(e=>{const{lineWidth:t,controlHeight:n,fontHeight:o,padding:r,wireframe:a,zIndexPopupBase:l,borderRadiusLG:i,marginXS:s,lineType:c,colorSplit:d,paddingSM:p}=e,m=n-o,u=m/2,v=m/2-t,f=r;return Object.assign(Object.assign(Object.assign({titleMinWidth:177,zIndexPopup:l+30},g(e)),y({contentRadius:i,limitVerticalRadius:!0})),{innerPadding:a?0:12,titleMarginBottom:a?0:s,titlePadding:a?`${u}px ${f}px ${v}px`:0,titleBorderBottom:a?`${t}px ${c} ${d}`:"none",innerContentPadding:a?`${p}px ${f}px`:0})}),{resetStyle:!1,deprecatedTokens:[["width","titleMinWidth"],["minWidth","titleMinWidth"]]});var C=function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(o=Object.getOwnPropertySymbols(e);r<o.length;r++)t.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(e,o[r])&&(n[o[r]]=e[o[r]])}return n};const $=e=>{const{hashId:n,prefixCls:o,className:r,style:a,placement:i="top",title:c,content:d,children:p}=e;return l.createElement("div",{className:s(n,o,`${o}-pure`,`${o}-placement-${i}`,r),style:a},l.createElement("div",{className:`${o}-arrow`}),l.createElement(v,Object.assign({},e,{className:n,prefixCls:o}),p||((e,n,o)=>n||o?l.createElement(l.Fragment,null,n&&l.createElement("div",{className:`${e}-title`},t(n)),l.createElement("div",{className:`${e}-inner-content`},t(o))):null)(o,c,d)))},w=e("a",(e=>{const{prefixCls:t,className:n}=e,o=C(e,["prefixCls","className"]),{getPrefixCls:r}=l.useContext(i),a=r("popover",t),[c,d,p]=O(a);return c(l.createElement($,Object.assign({},o,{prefixCls:a,hashId:d,className:s(n,p)})))})),E=e=>{let{title:n,content:o,prefixCls:r}=e;return l.createElement(l.Fragment,null,n&&l.createElement("div",{className:`${r}-title`},t(n)),l.createElement("div",{className:`${r}-inner-content`},t(o)))};e("P",l.forwardRef(((e,t)=>{var n,o;const{prefixCls:r,title:a,content:m,overlayClassName:u,placement:g="top",trigger:y="hover",children:v,mouseEnterDelay:x=.1,mouseLeaveDelay:h=.1,onOpenChange:C,overlayStyle:$={}}=e,w=function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(o=Object.getOwnPropertySymbols(e);r<o.length;r++)t.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(e,o[r])&&(n[o[r]]=e[o[r]])}return n}(e,["prefixCls","title","content","overlayClassName","placement","trigger","children","mouseEnterDelay","mouseLeaveDelay","onOpenChange","overlayStyle"]),{getPrefixCls:P}=l.useContext(i),j=P("popover",r),[S,N,B]=O(j),W=P(),k=s(u,N,B),[I,D]=f(!1,{value:null!==(n=e.open)&&void 0!==n?n:e.visible,defaultValue:null!==(o=e.defaultOpen)&&void 0!==o?o:e.defaultVisible}),M=(e,t)=>{D(e,!0),null==C||C(e,t)};return S(l.createElement(b,Object.assign({placement:g,trigger:y,mouseEnterDelay:x,mouseLeaveDelay:h,overlayStyle:$},w,{prefixCls:j,overlayClassName:k,ref:t,open:I,onOpenChange:e=>{M(e)},overlay:a||m?l.createElement(E,{prefixCls:j,title:a,content:m}):null,transitionName:c(W,"zoom-big",w.transitionName),"data-popover-inject":!0}),d(v,{onKeyDown:e=>{var t,n;l.isValidElement(v)&&(null===(n=null==v?void 0:(t=v.props).onKeyDown)||void 0===n||n.call(t,e)),(e=>{e.keyCode===p.ESC&&M(!1,e)})(e)}})))})))._InternalPanelDoNotUseOrYouWillBeFired=w}}}));
