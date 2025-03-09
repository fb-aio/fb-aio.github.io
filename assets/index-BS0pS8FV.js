import{G as Y,H as J,J as U,L as X,P as Z,r as i,M as k,p as O,S as q,T as Q,Y as ee}from"./index-C5YWxV9K.js";import{a8 as ne,O as te,a9 as oe,aa as re,y as ae,b as le}from"./MyApp-Ct___eEr.js";const P=e=>e?typeof e=="function"?e():e:null,ie=e=>{const{componentCls:t,popoverColor:o,titleMinWidth:n,fontWeightStrong:r,innerPadding:a,boxShadowSecondary:s,colorTextHeading:d,borderRadiusLG:u,zIndexPopup:f,titleMarginBottom:g,colorBgElevated:m,popoverBg:y,titleBorderBottom:x,innerContentPadding:p,titlePadding:b}=e;return[{[t]:Object.assign(Object.assign({},X(e)),{position:"absolute",top:0,left:{_skip_check_:!0,value:0},zIndex:f,fontWeight:"normal",whiteSpace:"normal",textAlign:"start",cursor:"auto",userSelect:"text","--valid-offset-x":"var(--arrow-offset-horizontal, var(--arrow-x))",transformOrigin:["var(--valid-offset-x, 50%)","var(--arrow-y, 50%)"].join(" "),"--antd-arrow-background-color":m,width:"max-content",maxWidth:"100vw","&-rtl":{direction:"rtl"},"&-hidden":{display:"none"},["".concat(t,"-content")]:{position:"relative"},["".concat(t,"-inner")]:{backgroundColor:y,backgroundClip:"padding-box",borderRadius:u,boxShadow:s,padding:a},["".concat(t,"-title")]:{minWidth:n,marginBottom:g,color:d,fontWeight:r,borderBottom:x,padding:b},["".concat(t,"-inner-content")]:{color:o,padding:p}})},ne(e,"var(--antd-arrow-background-color)"),{["".concat(t,"-pure")]:{position:"relative",maxWidth:"none",margin:e.sizePopupArrow,display:"inline-block",["".concat(t,"-content")]:{display:"inline-block"}}}]},se=e=>{const{componentCls:t}=e;return{[t]:Z.map(o=>{const n=e["".concat(o,"6")];return{["&".concat(t,"-").concat(o)]:{"--antd-arrow-background-color":n,["".concat(t,"-inner")]:{backgroundColor:n},["".concat(t,"-arrow")]:{background:"transparent"}}}})}},de=e=>{const{lineWidth:t,controlHeight:o,fontHeight:n,padding:r,wireframe:a,zIndexPopupBase:s,borderRadiusLG:d,marginXS:u,lineType:f,colorSplit:g,paddingSM:m}=e,y=o-n,x=y/2,p=y/2-t,b=r;return Object.assign(Object.assign(Object.assign({titleMinWidth:177,zIndexPopup:s+30},te(e)),oe({contentRadius:d,limitVerticalRadius:!0})),{innerPadding:a?0:12,titleMarginBottom:a?0:u,titlePadding:a?"".concat(x,"px ").concat(b,"px ").concat(p,"px"):0,titleBorderBottom:a?"".concat(t,"px ").concat(f," ").concat(g):"none",innerContentPadding:a?"".concat(m,"px ").concat(b,"px"):0})},T=Y("Popover",e=>{const{colorBgElevated:t,colorText:o}=e,n=J(e,{popoverBg:t,popoverColor:o});return[ie(n),se(n),U(n,"zoom-big")]},de,{resetStyle:!1,deprecatedTokens:[["width","titleMinWidth"],["minWidth","titleMinWidth"]]});var ce=function(e,t){var o={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(o[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(o[n[r]]=e[n[r]]);return o};const I=e=>{let{title:t,content:o,prefixCls:n}=e;return!t&&!o?null:i.createElement(i.Fragment,null,t&&i.createElement("div",{className:"".concat(n,"-title")},t),o&&i.createElement("div",{className:"".concat(n,"-inner-content")},o))},ue=e=>{const{hashId:t,prefixCls:o,className:n,style:r,placement:a="top",title:s,content:d,children:u}=e,f=P(s),g=P(d),m=O(t,o,"".concat(o,"-pure"),"".concat(o,"-placement-").concat(a),n);return i.createElement("div",{className:m,style:r},i.createElement("div",{className:"".concat(o,"-arrow")}),i.createElement(re,Object.assign({},e,{className:t,prefixCls:o}),u||i.createElement(I,{prefixCls:o,title:f,content:g})))},pe=e=>{const{prefixCls:t,className:o}=e,n=ce(e,["prefixCls","className"]),{getPrefixCls:r}=i.useContext(k),a=r("popover",t),[s,d,u]=T(a);return s(i.createElement(ue,Object.assign({},n,{prefixCls:a,hashId:d,className:O(o,u)})))};var fe=function(e,t){var o={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(o[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(o[n[r]]=e[n[r]]);return o};const ge=i.forwardRef((e,t)=>{var o,n,r,a,s,d;const{prefixCls:u,title:f,content:g,overlayClassName:m,placement:y="top",trigger:x="hover",children:p,mouseEnterDelay:b=.1,mouseLeaveDelay:W=.1,onOpenChange:w,overlayStyle:z={},styles:v,classNames:C}=e,$=fe(e,["prefixCls","title","content","overlayClassName","placement","trigger","children","mouseEnterDelay","mouseLeaveDelay","onOpenChange","overlayStyle","styles","classNames"]),{popover:l,getPrefixCls:j}=i.useContext(k),S=j("popover",u),[M,D,R]=T(S),H=j(),V=O(m,D,R,(o=l==null?void 0:l.classNames)===null||o===void 0?void 0:o.root,C==null?void 0:C.root),A=O((n=l==null?void 0:l.classNames)===null||n===void 0?void 0:n.body,C==null?void 0:C.body),[L,G]=ae(!1,{value:(r=e.open)!==null&&r!==void 0?r:e.visible,defaultValue:(a=e.defaultOpen)!==null&&a!==void 0?a:e.defaultVisible}),E=(c,h)=>{G(c,!0),w==null||w(c,h)},K=c=>{c.keyCode===ee.ESC&&E(!1,c)},F=c=>{E(c)},B=P(f),_=P(g);return M(i.createElement(le,Object.assign({placement:y,trigger:x,mouseEnterDelay:b,mouseLeaveDelay:W},$,{prefixCls:S,classNames:{root:V,body:A},styles:{root:Object.assign(Object.assign(Object.assign(Object.assign({},(s=l==null?void 0:l.styles)===null||s===void 0?void 0:s.root),l==null?void 0:l.style),z),v==null?void 0:v.root),body:Object.assign(Object.assign({},(d=l==null?void 0:l.styles)===null||d===void 0?void 0:d.body),v==null?void 0:v.body)},ref:t,open:L,onOpenChange:F,overlay:B||_?i.createElement(I,{prefixCls:S,title:B,content:_}):null,transitionName:q(H,"zoom-big",$.transitionName),"data-popover-inject":!0}),Q(p,{onKeyDown:c=>{var h,N;i.isValidElement(p)&&((N=p==null?void 0:(h=p.props).onKeyDown)===null||N===void 0||N.call(h,c)),K(c)}})))}),me=ge;me._InternalPanelDoNotUseOrYouWillBeFired=pe;export{me as P,pe as a,P as g};
