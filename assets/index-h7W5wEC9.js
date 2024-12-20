import{F as R,G as H,H as V,J as A,r as a,L as N,p as P,R as L,S as F,X as G}from"./index-CvOM7j0W.js";import{Y as K,a1 as X,I as Y,Z,a2 as J,w as U,T as q}from"./MyApp-8NcaG9i1.js";const x=e=>e?typeof e=="function"?e():e:null,Q=e=>{const{componentCls:o,popoverColor:n,titleMinWidth:t,fontWeightStrong:r,innerPadding:l,boxShadowSecondary:c,colorTextHeading:d,borderRadiusLG:p,zIndexPopup:g,titleMarginBottom:i,colorBgElevated:m,popoverBg:v,titleBorderBottom:u,innerContentPadding:y,titlePadding:f}=e;return[{[o]:Object.assign(Object.assign({},A(e)),{position:"absolute",top:0,left:{_skip_check_:!0,value:0},zIndex:g,fontWeight:"normal",whiteSpace:"normal",textAlign:"start",cursor:"auto",userSelect:"text","--valid-offset-x":"var(--arrow-offset-horizontal, var(--arrow-x))",transformOrigin:["var(--valid-offset-x, 50%)","var(--arrow-y, 50%)"].join(" "),"--antd-arrow-background-color":m,width:"max-content",maxWidth:"100vw","&-rtl":{direction:"rtl"},"&-hidden":{display:"none"},[`${o}-content`]:{position:"relative"},[`${o}-inner`]:{backgroundColor:v,backgroundClip:"padding-box",borderRadius:p,boxShadow:c,padding:l},[`${o}-title`]:{minWidth:t,marginBottom:i,color:d,fontWeight:r,borderBottom:u,padding:f},[`${o}-inner-content`]:{color:n,padding:y}})},K(e,"var(--antd-arrow-background-color)"),{[`${o}-pure`]:{position:"relative",maxWidth:"none",margin:e.sizePopupArrow,display:"inline-block",[`${o}-content`]:{display:"inline-block"}}}]},ee=e=>{const{componentCls:o}=e;return{[o]:X.map(n=>{const t=e[`${n}6`];return{[`&${o}-${n}`]:{"--antd-arrow-background-color":t,[`${o}-inner`]:{backgroundColor:t},[`${o}-arrow`]:{background:"transparent"}}}})}},te=e=>{const{lineWidth:o,controlHeight:n,fontHeight:t,padding:r,wireframe:l,zIndexPopupBase:c,borderRadiusLG:d,marginXS:p,lineType:g,colorSplit:i,paddingSM:m}=e,v=n-t,u=v/2,y=v/2-o,f=r;return Object.assign(Object.assign(Object.assign({titleMinWidth:177,zIndexPopup:c+30},Y(e)),Z({contentRadius:d,limitVerticalRadius:!0})),{innerPadding:l?0:12,titleMarginBottom:l?0:p,titlePadding:l?`${u}px ${f}px ${y}px`:0,titleBorderBottom:l?`${o}px ${g} ${i}`:"none",innerContentPadding:l?`${m}px ${f}px`:0})},E=R("Popover",e=>{const{colorBgElevated:o,colorText:n}=e,t=H(e,{popoverBg:o,popoverColor:n});return[Q(t),ee(t),V(t,"zoom-big")]},te,{resetStyle:!1,deprecatedTokens:[["width","titleMinWidth"],["minWidth","titleMinWidth"]]});var oe=function(e,o){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&o.indexOf(t)<0&&(n[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,t=Object.getOwnPropertySymbols(e);r<t.length;r++)o.indexOf(t[r])<0&&Object.prototype.propertyIsEnumerable.call(e,t[r])&&(n[t[r]]=e[t[r]]);return n};const B=e=>{let{title:o,content:n,prefixCls:t}=e;return!o&&!n?null:a.createElement(a.Fragment,null,o&&a.createElement("div",{className:`${t}-title`},o),n&&a.createElement("div",{className:`${t}-inner-content`},n))},ne=e=>{const{hashId:o,prefixCls:n,className:t,style:r,placement:l="top",title:c,content:d,children:p}=e,g=x(c),i=x(d),m=P(o,n,`${n}-pure`,`${n}-placement-${l}`,t);return a.createElement("div",{className:m,style:r},a.createElement("div",{className:`${n}-arrow`}),a.createElement(J,Object.assign({},e,{className:o,prefixCls:n}),p||a.createElement(B,{prefixCls:n,title:g,content:i})))},re=e=>{const{prefixCls:o,className:n}=e,t=oe(e,["prefixCls","className"]),{getPrefixCls:r}=a.useContext(N),l=r("popover",o),[c,d,p]=E(l);return c(a.createElement(ne,Object.assign({},t,{prefixCls:l,hashId:d,className:P(n,p)})))};var ae=function(e,o){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&o.indexOf(t)<0&&(n[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,t=Object.getOwnPropertySymbols(e);r<t.length;r++)o.indexOf(t[r])<0&&Object.prototype.propertyIsEnumerable.call(e,t[r])&&(n[t[r]]=e[t[r]]);return n};const le=a.forwardRef((e,o)=>{var n,t;const{prefixCls:r,title:l,content:c,overlayClassName:d,placement:p="top",trigger:g="hover",children:i,mouseEnterDelay:m=.1,mouseLeaveDelay:v=.1,onOpenChange:u,overlayStyle:y={}}=e,f=ae(e,["prefixCls","title","content","overlayClassName","placement","trigger","children","mouseEnterDelay","mouseLeaveDelay","onOpenChange","overlayStyle"]),{getPrefixCls:O}=a.useContext(N),b=O("popover",r),[j,k,I]=E(b),T=O(),_=P(d,k,I),[W,z]=U(!1,{value:(n=e.open)!==null&&n!==void 0?n:e.visible,defaultValue:(t=e.defaultOpen)!==null&&t!==void 0?t:e.defaultVisible}),w=(s,C)=>{z(s,!0),u==null||u(s,C)},D=s=>{s.keyCode===G.ESC&&w(!1,s)},M=s=>{w(s)},S=x(l),$=x(c);return j(a.createElement(q,Object.assign({placement:p,trigger:g,mouseEnterDelay:m,mouseLeaveDelay:v,overlayStyle:y},f,{prefixCls:b,overlayClassName:_,ref:o,open:W,onOpenChange:M,overlay:S||$?a.createElement(B,{prefixCls:b,title:S,content:$}):null,transitionName:L(T,"zoom-big",f.transitionName),"data-popover-inject":!0}),F(i,{onKeyDown:s=>{var C,h;a.isValidElement(i)&&((h=i==null?void 0:(C=i.props).onKeyDown)===null||h===void 0||h.call(C,s)),D(s)}})))}),ie=le;ie._InternalPanelDoNotUseOrYouWillBeFired=re;export{ie as P,re as a,x as g};
