System.register(["./index-legacy-DaC3A9N1.js","./MyApp-legacy-C3whbKRl.js"],(function(e,n){"use strict";var a,t,o,r,l,i,c,s,d,p,u,m,g,f,b,v,$,h,x,y,C,I,N,k,P,S,E,w,M;return{setters:[e=>{a=e.$,t=e.k,o=e.p,r=e.Z,l=e.o,i=e.Y,c=e.h,s=e.d,d=e.C,p=e.t,u=e.bk,m=e.a0,g=e.e,f=e.i,b=e.r,v=e.M,$=e.G,h=e.H,x=e.F,y=e.L,C=e.bM,I=e.a7,N=e.bJ,k=e.T,P=e.a9,S=e.a1},e=>{E=e.n,w=e.m,M=e.a0}],execute:function(){var n=a.forwardRef((function(e,n){var l=e.prefixCls,i=e.forceRender,c=e.className,s=e.style,d=e.children,p=e.isActive,u=e.role,m=e.classNames,g=e.styles,f=a.useState(p||i),b=t(f,2),v=b[0],$=b[1];return a.useEffect((function(){(i||p)&&$(!0)}),[i,p]),v?a.createElement("div",{ref:n,className:o("".concat(l,"-content"),r(r({},"".concat(l,"-content-active"),p),"".concat(l,"-content-inactive"),!p),c),style:s,role:u},a.createElement("div",{className:o("".concat(l,"-content-box"),null==m?void 0:m.body),style:null==g?void 0:g.body},d)):null}));n.displayName="PanelContent";var O=["showArrow","headerClass","isActive","onItemClick","forceRender","className","classNames","styles","prefixCls","collapsible","accordion","panelKey","extra","header","expandIcon","openMotion","destroyInactivePanel","children"],j=a.forwardRef((function(e,t){var p=e.showArrow,u=void 0===p||p,m=e.headerClass,g=e.isActive,f=e.onItemClick,b=e.forceRender,v=e.className,$=e.classNames,h=void 0===$?{}:$,x=e.styles,y=void 0===x?{}:x,C=e.prefixCls,I=e.collapsible,N=e.accordion,k=e.panelKey,P=e.extra,S=e.header,E=e.expandIcon,w=e.openMotion,M=e.destroyInactivePanel,j=e.children,R=l(e,O),A="disabled"===I,B=null!=P&&"boolean"!=typeof P,H=r(r(r({onClick:function(){null==f||f(k)},onKeyDown:function(e){"Enter"!==e.key&&e.keyCode!==i.ENTER&&e.which!==i.ENTER||null==f||f(k)},role:N?"tab":"button"},"aria-expanded",g),"aria-disabled",A),"tabIndex",A?-1:0),K="function"==typeof E?E(e):a.createElement("i",{className:"arrow"}),L=K&&a.createElement("div",c({className:"".concat(C,"-expand-icon")},["header","icon"].includes(I)?H:{}),K),T=o("".concat(C,"-item"),r(r({},"".concat(C,"-item-active"),g),"".concat(C,"-item-disabled"),A),v),G=o(m,"".concat(C,"-header"),r({},"".concat(C,"-collapsible-").concat(I),!!I),h.header),z=s({className:G,style:y.header},["header","icon"].includes(I)?{}:H);return a.createElement("div",c({},R,{ref:t,className:T}),a.createElement("div",z,u&&L,a.createElement("span",c({className:"".concat(C,"-header-text")},"header"===I?H:{}),S),B&&a.createElement("div",{className:"".concat(C,"-extra")},P)),a.createElement(d,c({visible:g,leavedClassName:"".concat(C,"-content-hidden")},w,{forceRender:b,removeOnLeave:M}),(function(e,t){var o=e.className,r=e.style;return a.createElement(n,{ref:t,prefixCls:C,className:o,classNames:h,style:r,styles:y,isActive:g,forceRender:b,role:N?"tabpanel":void 0},j)})))})),R=["children","label","key","collapsible","onItemClick","destroyInactivePanel"];function A(e,n,t){return Array.isArray(e)?function(e,n){var t=n.prefixCls,o=n.accordion,r=n.collapsible,i=n.destroyInactivePanel,s=n.onItemClick,d=n.activeKey,p=n.openMotion,u=n.expandIcon;return e.map((function(e,n){var m=e.children,g=e.label,f=e.key,b=e.collapsible,v=e.onItemClick,$=e.destroyInactivePanel,h=l(e,R),x=String(null!=f?f:n),y=null!=b?b:r,C=null!=$?$:i,I=!1;return I=o?d[0]===x:d.indexOf(x)>-1,a.createElement(j,c({},h,{prefixCls:t,key:x,panelKey:x,isActive:I,accordion:o,openMotion:p,expandIcon:u,header:g,collapsible:y,onItemClick:function(e){"disabled"!==y&&(s(e),null==v||v(e))},destroyInactivePanel:C}),m)}))}(e,t):p(n).map((function(e,n){return function(e,n,t){if(!e)return null;var o=t.prefixCls,r=t.accordion,l=t.collapsible,i=t.destroyInactivePanel,c=t.onItemClick,s=t.activeKey,d=t.openMotion,p=t.expandIcon,u=e.key||String(n),m=e.props,g=m.header,f=m.headerClass,b=m.destroyInactivePanel,v=m.collapsible,$=m.onItemClick,h=!1;h=r?s[0]===u:s.indexOf(u)>-1;var x=null!=v?v:l,y={key:u,panelKey:u,header:g,headerClass:f,isActive:h,prefixCls:o,destroyInactivePanel:null!=b?b:i,openMotion:d,accordion:r,children:e.props.children,onItemClick:function(e){"disabled"!==x&&(c(e),null==$||$(e))},expandIcon:p,collapsible:x};return"string"==typeof e.type?e:(Object.keys(y).forEach((function(e){void 0===y[e]&&delete y[e]})),a.cloneElement(e,y))}(e,n,t)}))}function B(e){var n=e;if(!Array.isArray(n)){var a=g(n);n="number"===a||"string"===a?[n]:[]}return n.map((function(e){return String(e)}))}var H=a.forwardRef((function(e,n){var r=e.prefixCls,l=void 0===r?"rc-collapse":r,i=e.destroyInactivePanel,s=void 0!==i&&i,d=e.style,p=e.accordion,g=e.className,b=e.children,v=e.collapsible,$=e.openMotion,h=e.expandIcon,x=e.activeKey,y=e.defaultActiveKey,C=e.onChange,I=e.items,N=o(l,g),k=E([],{value:x,onChange:function(e){return null==C?void 0:C(e)},defaultValue:y,postState:B}),P=t(k,2),S=P[0],w=P[1];m(!b,"[rc-collapse] `children` will be removed in next major version. Please use `items` instead.");var M=A(I,b,{prefixCls:l,accordion:p,openMotion:$,expandIcon:h,collapsible:v,destroyInactivePanel:s,onItemClick:function(e){return w((function(){return p?S[0]===e?[]:[e]:S.indexOf(e)>-1?S.filter((function(n){return n!==e})):[].concat(f(S),[e])}))},activeKey:S});return a.createElement("div",c({ref:n,className:N,style:d,role:p?"tablist":void 0},u(e,{aria:!0,data:!0})),M)}));const K=Object.assign(H,{Panel:j});K.Panel;const L=b.forwardRef(((e,n)=>{const{getPrefixCls:a}=b.useContext(v),{prefixCls:t,className:r,showArrow:l=!0}=e,i=a("collapse",t),c=o({[`${i}-no-arrow`]:!l},r);return b.createElement(K.Panel,Object.assign({ref:n},e,{prefixCls:i,className:c}))})),T=e=>{const{componentCls:n,contentBg:a,padding:t,headerBg:o,headerPadding:r,collapseHeaderPaddingSM:l,collapseHeaderPaddingLG:i,collapsePanelBorderRadius:c,lineWidth:s,lineType:d,colorBorder:p,colorText:u,colorTextHeading:m,colorTextDisabled:g,fontSizeLG:f,lineHeight:b,lineHeightLG:v,marginSM:$,paddingSM:h,paddingLG:N,paddingXS:k,motionDurationSlow:P,fontSizeIcon:S,contentPadding:E,fontHeight:w,fontHeightLG:M}=e,O=`${x(s)} ${d} ${p}`;return{[n]:Object.assign(Object.assign({},y(e)),{backgroundColor:o,border:O,borderRadius:c,"&-rtl":{direction:"rtl"},[`& > ${n}-item`]:{borderBottom:O,"&:first-child":{[`\n            &,\n            & > ${n}-header`]:{borderRadius:`${x(c)} ${x(c)} 0 0`}},"&:last-child":{[`\n            &,\n            & > ${n}-header`]:{borderRadius:`0 0 ${x(c)} ${x(c)}`}},[`> ${n}-header`]:Object.assign(Object.assign({position:"relative",display:"flex",flexWrap:"nowrap",alignItems:"flex-start",padding:r,color:m,lineHeight:b,cursor:"pointer",transition:`all ${P}, visibility 0s`},C(e)),{[`> ${n}-header-text`]:{flex:"auto"},[`${n}-expand-icon`]:{height:w,display:"flex",alignItems:"center",paddingInlineEnd:$},[`${n}-arrow`]:Object.assign(Object.assign({},I()),{fontSize:S,transition:`transform ${P}`,svg:{transition:`transform ${P}`}}),[`${n}-header-text`]:{marginInlineEnd:"auto"}}),[`${n}-collapsible-header`]:{cursor:"default",[`${n}-header-text`]:{flex:"none",cursor:"pointer"}},[`${n}-collapsible-icon`]:{cursor:"unset",[`${n}-expand-icon`]:{cursor:"pointer"}}},[`${n}-content`]:{color:u,backgroundColor:a,borderTop:O,[`& > ${n}-content-box`]:{padding:E},"&-hidden":{display:"none"}},"&-small":{[`> ${n}-item`]:{[`> ${n}-header`]:{padding:l,paddingInlineStart:k,[`> ${n}-expand-icon`]:{marginInlineStart:e.calc(h).sub(k).equal()}},[`> ${n}-content > ${n}-content-box`]:{padding:h}}},"&-large":{[`> ${n}-item`]:{fontSize:f,lineHeight:v,[`> ${n}-header`]:{padding:i,paddingInlineStart:t,[`> ${n}-expand-icon`]:{height:M,marginInlineStart:e.calc(N).sub(t).equal()}},[`> ${n}-content > ${n}-content-box`]:{padding:N}}},[`${n}-item:last-child`]:{borderBottom:0,[`> ${n}-content`]:{borderRadius:`0 0 ${x(c)} ${x(c)}`}},[`& ${n}-item-disabled > ${n}-header`]:{"\n          &,\n          & > .arrow\n        ":{color:g,cursor:"not-allowed"}},[`&${n}-icon-position-end`]:{[`& > ${n}-item`]:{[`> ${n}-header`]:{[`${n}-expand-icon`]:{order:1,paddingInlineEnd:0,paddingInlineStart:$}}}}})}},G=e=>{const{componentCls:n}=e,a=`> ${n}-item > ${n}-header ${n}-arrow`;return{[`${n}-rtl`]:{[a]:{transform:"rotate(180deg)"}}}},z=e=>{const{componentCls:n,headerBg:a,paddingXXS:t,colorBorder:o}=e;return{[`${n}-borderless`]:{backgroundColor:a,border:0,[`> ${n}-item`]:{borderBottom:`1px solid ${o}`},[`\n        > ${n}-item:last-child,\n        > ${n}-item:last-child ${n}-header\n      `]:{borderRadius:0},[`> ${n}-item:last-child`]:{borderBottom:0},[`> ${n}-item > ${n}-content`]:{backgroundColor:"transparent",borderTop:0},[`> ${n}-item > ${n}-content > ${n}-content-box`]:{paddingTop:t}}}},X=e=>{const{componentCls:n,paddingSM:a}=e;return{[`${n}-ghost`]:{backgroundColor:"transparent",border:0,[`> ${n}-item`]:{borderBottom:0,[`> ${n}-content`]:{backgroundColor:"transparent",border:0,[`> ${n}-content-box`]:{paddingBlock:a}}}}}},D=$("Collapse",(e=>{const n=h(e,{collapseHeaderPaddingSM:`${x(e.paddingXS)} ${x(e.paddingSM)}`,collapseHeaderPaddingLG:`${x(e.padding)} ${x(e.paddingLG)}`,collapsePanelBorderRadius:e.borderRadiusLG});return[T(n),z(n),X(n),G(n),w(n)]}),(e=>({headerPadding:`${e.paddingSM}px ${e.padding}px`,headerBg:e.colorFillAlter,contentPadding:`${e.padding}px 16px`,contentBg:e.colorBgContainer}))),q=b.forwardRef(((e,n)=>{const{getPrefixCls:a,direction:t,collapse:r}=b.useContext(v),{prefixCls:l,className:i,rootClassName:c,style:s,bordered:d=!0,ghost:u,size:m,expandIconPosition:g="start",children:f,expandIcon:$}=e,h=N((e=>{var n;return null!==(n=null!=m?m:e)&&void 0!==n?n:"middle"})),x=a("collapse",l),y=a(),[C,I,E]=D(x),w=b.useMemo((()=>"left"===g?"start":"right"===g?"end":g),[g]),O=null!=$?$:null==r?void 0:r.expandIcon,j=b.useCallback((function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const n="function"==typeof O?O(e):b.createElement(M,{rotate:e.isActive?"rtl"===t?-90:90:void 0,"aria-label":e.isActive?"expanded":"collapsed"});return k(n,(()=>{var e;return{className:o(null===(e=null==n?void 0:n.props)||void 0===e?void 0:e.className,`${x}-arrow`)}}))}),[O,x]),R=o(`${x}-icon-position-${w}`,{[`${x}-borderless`]:!d,[`${x}-rtl`]:"rtl"===t,[`${x}-ghost`]:!!u,[`${x}-${h}`]:"middle"!==h},null==r?void 0:r.className,i,c,I,E),A=Object.assign(Object.assign({},P(y)),{motionAppear:!1,leavedClassName:`${x}-content-hidden`}),B=b.useMemo((()=>f?p(f).map(((e,n)=>{var a,t;const o=e.props;if(null==o?void 0:o.disabled){const r=null!==(a=e.key)&&void 0!==a?a:String(n),l=Object.assign(Object.assign({},S(e.props,["disabled"])),{key:r,collapsible:null!==(t=o.collapsible)&&void 0!==t?t:"disabled"});return k(e,l)}return e})):null),[f]);return C(b.createElement(K,Object.assign({ref:n,openMotion:A},S(e,["rootClassName"]),{expandIcon:j,prefixCls:x,className:R,style:Object.assign(Object.assign({},null==r?void 0:r.style),s)}),B))}));e("C",Object.assign(q,{Panel:L}))}}}));
