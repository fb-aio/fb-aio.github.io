System.register(["./index-legacy-Lkr9bBsN.js","./MyApp-legacy-_4SztRAr.js","./Dropdown-legacy-BHqZQ4ST.js"],(function(e,t){"use strict";var n,a,o,r,i,l,c,d,s,u,v,p,f,b,m,h,g,$,y,k,x,w,S,_,C,E,R,P,I,T,L,M,z,B,O,N,D;return{setters:[e=>{n=e.r,a=e.T,o=e.g,r=e.j,i=e.$,l=e.w,c=e.d,d=e.l,s=e.e,u=e.X,v=e.o,p=e.W,f=e.k,b=e.h,m=e.u,h=e.n,g=e.C,$=e.O,y=e.t,k=e.E,x=e.F,w=e.D,S=e.H,_=e.a2,C=e.bI,E=e.I,R=e.a6,P=e.ab,I=e.bF},e=>{T=e.W,L=e.X,M=e.R,z=e.Y,B=e.n,O=e.V,N=e.Z},e=>{D=e.D}],execute:function(){var t={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M482 152h60q8 0 8 8v704q0 8-8 8h-60q-8 0-8-8V160q0-8 8-8z"}},{tag:"path",attrs:{d:"M192 474h672q8 0 8 8v60q0 8-8 8H160q-8 0-8-8v-60q0-8 8-8z"}}]},name:"plus",theme:"outlined"},j=function(e,r){return n.createElement(a,o({},e,{ref:r,icon:t}))},G=n.forwardRef(j);const A=n.createContext(null);var H={width:0,height:0,left:0,top:0};function W(e,t){var a=n.useRef(e),o=n.useState({}),i=r(o,2)[1];return[a.current,function(e){var n="function"==typeof e?e(a.current):e;n!==a.current&&t(n,a.current),a.current=n,i({})}]}var X=Math.pow(.995,20);function q(e){var t=n.useState(0),a=r(t,2),o=a[0],i=a[1],l=n.useRef(0),c=n.useRef();return c.current=e,d((function(){var e;null===(e=c.current)||void 0===e||e.call(c)}),[o]),function(){l.current===o&&(l.current+=1,i(l.current))}}var K={width:0,height:0,left:0,top:0,right:0};function F(e){var t;return e instanceof Map?(t={},e.forEach((function(e,n){t[n]=e}))):t=e,JSON.stringify(t)}function V(e){return String(e).replace(/"/g,"TABS_DQ")}function Y(e,t,n,a){return!(!n||a||!1===e||void 0===e&&(!1===t||null===t))}var J=n.forwardRef((function(e,t){var a=e.prefixCls,o=e.editable,r=e.locale,i=e.style;return o&&!1!==o.showAdd?n.createElement("button",{ref:t,type:"button",className:"".concat(a,"-nav-add"),style:i,"aria-label":(null==r?void 0:r.addAriaLabel)||"Add tab",onClick:function(e){o.onEdit("add",{event:e})}},o.addIcon||"+"):null})),Q=n.forwardRef((function(e,t){var a,o=e.position,r=e.prefixCls,i=e.extra;if(!i)return null;var l={};return"object"!==s(i)||n.isValidElement(i)?l.right=i:l=i,"right"===o&&(a=l.right),"left"===o&&(a=l.left),a?n.createElement("div",{className:"".concat(r,"-extra-content"),ref:t},a):null})),U=n.forwardRef((function(e,t){var a=e.prefixCls,i=e.id,l=e.tabs,c=e.locale,d=e.mobile,s=e.more,f=void 0===s?{}:s,b=e.style,m=e.className,h=e.editable,g=e.tabBarGutter,$=e.rtl,y=e.removeAriaLabel,k=e.onTabClick,x=e.getPopupContainer,w=e.popupClassName,S=n.useState(!1),_=r(S,2),C=_[0],E=_[1],R=n.useState(null),P=r(R,2),I=P[0],M=P[1],z=f.icon,B=void 0===z?"More":z,O="".concat(i,"-more-popup"),N="".concat(a,"-dropdown"),j=null!==I?"".concat(O,"-").concat(I):null,G=null==c?void 0:c.dropdownAriaLabel,A=n.createElement(T,{onClick:function(e){var t=e.key,n=e.domEvent;k(t,n),E(!1)},prefixCls:"".concat(N,"-menu"),id:O,tabIndex:-1,role:"listbox","aria-activedescendant":j,selectedKeys:[I],"aria-label":void 0!==G?G:"expanded dropdown"},l.map((function(e){var t=e.closable,a=e.disabled,o=e.closeIcon,r=e.key,l=e.label,c=Y(t,o,h,a);return n.createElement(L,{key:r,id:"".concat(O,"-").concat(r),role:"option","aria-controls":i&&"".concat(i,"-panel-").concat(r),disabled:a},n.createElement("span",null,l),c&&n.createElement("button",{type:"button","aria-label":y||"remove",tabIndex:0,className:"".concat(N,"-menu-item-remove"),onClick:function(e){e.stopPropagation(),function(e,t){e.preventDefault(),e.stopPropagation(),h.onEdit("remove",{key:t,event:e})}(e,r)}},o||h.removeIcon||"×"))})));function H(e){for(var t=l.filter((function(e){return!e.disabled})),n=t.findIndex((function(e){return e.key===I}))||0,a=t.length,o=0;o<a;o+=1){var r=t[n=(n+e+a)%a];if(!r.disabled)return void M(r.key)}}n.useEffect((function(){var e=document.getElementById(j);e&&e.scrollIntoView&&e.scrollIntoView(!1)}),[I]),n.useEffect((function(){C||M(null)}),[C]);var W=u({},$?"marginRight":"marginLeft",g);l.length||(W.visibility="hidden",W.order=1);var X=v(u({},"".concat(N,"-rtl"),$)),q=d?null:n.createElement(D,o({prefixCls:N,overlay:A,visible:!!l.length&&C,onVisibleChange:E,overlayClassName:v(X,w),mouseEnterDelay:.1,mouseLeaveDelay:.1,getPopupContainer:x},f),n.createElement("button",{type:"button",className:"".concat(a,"-nav-more"),style:W,tabIndex:-1,"aria-hidden":"true","aria-haspopup":"listbox","aria-controls":O,id:"".concat(i,"-more"),"aria-expanded":C,onKeyDown:function(e){var t=e.which;if(C)switch(t){case p.UP:H(-1),e.preventDefault();break;case p.DOWN:H(1),e.preventDefault();break;case p.ESC:E(!1);break;case p.SPACE:case p.ENTER:null!==I&&k(I,e)}else[p.DOWN,p.SPACE,p.ENTER].includes(t)&&(E(!0),e.preventDefault())}},B));return n.createElement("div",{className:v("".concat(a,"-nav-operations"),m),style:b,ref:t},q,n.createElement(J,{prefixCls:a,locale:c,editable:h}))}));const Z=n.memo(U,(function(e,t){return t.tabMoving}));var ee=function(e){var t=e.prefixCls,a=e.id,o=e.active,r=e.tab,i=r.key,l=r.label,c=r.disabled,d=r.closeIcon,s=r.icon,f=e.closable,b=e.renderWrapper,m=e.removeAriaLabel,h=e.editable,g=e.onClick,$=e.onFocus,y=e.style,k="".concat(t,"-tab"),x=Y(f,d,h,c);function w(e){c||g(e)}var S=n.useMemo((function(){return s&&"string"==typeof l?n.createElement("span",null,l):l}),[l,s]),_=n.createElement("div",{key:i,"data-node-key":V(i),className:v(k,u(u(u({},"".concat(k,"-with-remove"),x),"".concat(k,"-active"),o),"".concat(k,"-disabled"),c)),style:y,onClick:w},n.createElement("div",{role:"tab","aria-selected":o,id:a&&"".concat(a,"-tab-").concat(i),className:"".concat(k,"-btn"),"aria-controls":a&&"".concat(a,"-panel-").concat(i),"aria-disabled":c,tabIndex:c?null:0,onClick:function(e){e.stopPropagation(),w(e)},onKeyDown:function(e){[p.SPACE,p.ENTER].includes(e.which)&&(e.preventDefault(),w(e))},onFocus:$},s&&n.createElement("span",{className:"".concat(k,"-icon")},s),l&&S),x&&n.createElement("button",{type:"button","aria-label":m||"remove",tabIndex:0,className:"".concat(k,"-remove"),onClick:function(e){var t;e.stopPropagation(),(t=e).preventDefault(),t.stopPropagation(),h.onEdit("remove",{key:i,event:t})}},d||h.removeIcon||"×"));return b?b(_):_},te=function(e){var t=e.current||{},n=t.offsetWidth,a=void 0===n?0:n,o=t.offsetHeight,r=void 0===o?0:o;if(e.current){var i=e.current.getBoundingClientRect(),l=i.width,c=i.height;if(Math.abs(l-a)<1)return[l,c]}return[a,r]},ne=function(e,t){return e[t?0:1]},ae=n.forwardRef((function(e,t){var a=e.className,d=e.style,s=e.id,p=e.animated,h=e.activeKey,g=e.rtl,$=e.extra,y=e.editable,k=e.locale,x=e.tabPosition,w=e.tabBarGutter,S=e.children,_=e.onTabClick,C=e.onTabScroll,E=e.indicator,R=n.useContext(A),P=R.prefixCls,I=R.tabs,T=n.useRef(null),L=n.useRef(null),z=n.useRef(null),B=n.useRef(null),O=n.useRef(null),N=n.useRef(null),D=n.useRef(null),j="top"===x||"bottom"===x,G=W(0,(function(e,t){j&&C&&C({direction:e>t?"left":"right"})})),Y=r(G,2),U=Y[0],ae=Y[1],oe=W(0,(function(e,t){!j&&C&&C({direction:e>t?"top":"bottom"})})),re=r(oe,2),ie=re[0],le=re[1],ce=n.useState([0,0]),de=r(ce,2),se=de[0],ue=de[1],ve=n.useState([0,0]),pe=r(ve,2),fe=pe[0],be=pe[1],me=n.useState([0,0]),he=r(me,2),ge=he[0],$e=he[1],ye=n.useState([0,0]),ke=r(ye,2),xe=ke[0],we=ke[1],Se=function(e){var t=n.useRef([]),a=n.useState({}),o=r(a,2)[1],i=n.useRef("function"==typeof e?e():e),l=q((function(){var e=i.current;t.current.forEach((function(t){e=t(e)})),t.current=[],i.current=e,o({})}));return[i.current,function(e){t.current.push(e),l()}]}(new Map),_e=r(Se,2),Ce=_e[0],Ee=_e[1],Re=function(e,t,a){return n.useMemo((function(){for(var n,a=new Map,o=t.get(null===(n=e[0])||void 0===n?void 0:n.key)||H,r=o.left+o.width,i=0;i<e.length;i+=1){var l,d=e[i].key,s=t.get(d);s||(s=t.get(null===(l=e[i-1])||void 0===l?void 0:l.key)||H);var u=a.get(d)||c({},s);u.right=r-u.left-u.width,a.set(d,u)}return a}),[e.map((function(e){return e.key})).join("_"),t,a])}(I,Ce,fe[0]),Pe=ne(se,j),Ie=ne(fe,j),Te=ne(ge,j),Le=ne(xe,j),Me=Pe<Ie+Te,ze=Me?Pe-Le:Pe-Te,Be="".concat(P,"-nav-operations-hidden"),Oe=0,Ne=0;function De(e){return e<Oe?Oe:e>Ne?Ne:e}j&&g?(Oe=0,Ne=Math.max(0,Ie-ze)):(Oe=Math.min(0,ze-Ie),Ne=0);var je=n.useRef(null),Ge=n.useState(),Ae=r(Ge,2),He=Ae[0],We=Ae[1];function Xe(){We(Date.now())}function qe(){je.current&&clearTimeout(je.current)}!function(e,t){var a=n.useState(),o=r(a,2),i=o[0],l=o[1],c=n.useState(0),d=r(c,2),s=d[0],u=d[1],v=n.useState(0),p=r(v,2),f=p[0],b=p[1],m=n.useState(),h=r(m,2),g=h[0],$=h[1],y=n.useRef(),k=n.useRef(),x=n.useRef(null);x.current={onTouchStart:function(e){var t=e.touches[0],n=t.screenX,a=t.screenY;l({x:n,y:a}),window.clearInterval(y.current)},onTouchMove:function(e){if(i){e.preventDefault();var n=e.touches[0],a=n.screenX,o=n.screenY;l({x:a,y:o});var r=a-i.x,c=o-i.y;t(r,c);var d=Date.now();u(d),b(d-s),$({x:r,y:c})}},onTouchEnd:function(){if(i&&(l(null),$(null),g)){var e=g.x/f,n=g.y/f,a=Math.abs(e),o=Math.abs(n);if(Math.max(a,o)<.1)return;var r=e,c=n;y.current=window.setInterval((function(){Math.abs(r)<.01&&Math.abs(c)<.01?window.clearInterval(y.current):t(20*(r*=X),20*(c*=X))}),20)}},onWheel:function(e){var n=e.deltaX,a=e.deltaY,o=0,r=Math.abs(n),i=Math.abs(a);r===i?o="x"===k.current?n:a:r>i?(o=n,k.current="x"):(o=a,k.current="y"),t(-o,-o)&&e.preventDefault()}},n.useEffect((function(){function t(e){x.current.onTouchMove(e)}function n(e){x.current.onTouchEnd(e)}return document.addEventListener("touchmove",t,{passive:!1}),document.addEventListener("touchend",n,{passive:!0}),e.current.addEventListener("touchstart",(function(e){x.current.onTouchStart(e)}),{passive:!0}),e.current.addEventListener("wheel",(function(e){x.current.onWheel(e)}),{passive:!1}),function(){document.removeEventListener("touchmove",t),document.removeEventListener("touchend",n)}}),[])}(B,(function(e,t){function n(e,t){e((function(e){return De(e+t)}))}return!!Me&&(j?n(ae,e):n(le,t),qe(),Xe(),!0)})),n.useEffect((function(){return qe(),He&&(je.current=setTimeout((function(){We(0)}),100)),qe}),[He]);var Ke=function(e,t,a,o,r,i,l){var c,d,s,u=l.tabs,v=l.tabPosition,p=l.rtl;return["top","bottom"].includes(v)?(c="width",d=p?"right":"left",s=Math.abs(a)):(c="height",d="top",s=-a),n.useMemo((function(){if(!u.length)return[0,0];for(var n=u.length,a=n,o=0;o<n;o+=1){var r=e.get(u[o].key)||K;if(r[d]+r[c]>s+t){a=o-1;break}}for(var i=0,l=n-1;l>=0;l-=1)if((e.get(u[l].key)||K)[d]<s){i=l+1;break}return i>=a?[0,0]:[i,a]}),[e,t,o,r,i,s,v,u.map((function(e){return e.key})).join("_"),p])}(Re,ze,j?U:ie,Ie,Te,Le,c(c({},e),{},{tabs:I})),Fe=r(Ke,2),Ve=Fe[0],Ye=Fe[1],Je=f((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,t=Re.get(e)||{width:0,height:0,left:0,right:0,top:0};if(j){var n=U;g?t.right<U?n=t.right:t.right+t.width>U+ze&&(n=t.right+t.width-ze):t.left<-U?n=-t.left:t.left+t.width>-U+ze&&(n=-(t.left+t.width-ze)),le(0),ae(De(n))}else{var a=ie;t.top<-ie?a=-t.top:t.top+t.height>-ie+ze&&(a=-(t.top+t.height-ze)),ae(0),le(De(a))}})),Qe={};"top"===x||"bottom"===x?Qe[g?"marginRight":"marginLeft"]=w:Qe.marginTop=w;var Ue=I.map((function(e,t){var a=e.key;return n.createElement(ee,{id:s,prefixCls:P,key:a,tab:e,style:0===t?void 0:Qe,closable:e.closable,editable:y,active:a===h,renderWrapper:S,removeAriaLabel:null==k?void 0:k.removeAriaLabel,onClick:function(e){_(a,e)},onFocus:function(){Je(a),Xe(),B.current&&(g||(B.current.scrollLeft=0),B.current.scrollTop=0)}})})),Ze=function(){return Ee((function(){var e,t=new Map,n=null===(e=O.current)||void 0===e?void 0:e.getBoundingClientRect();return I.forEach((function(e){var a,o=e.key,i=null===(a=O.current)||void 0===a?void 0:a.querySelector('[data-node-key="'.concat(V(o),'"]'));if(i){var l=function(e,t){var n=e.offsetWidth,a=e.offsetHeight,o=e.offsetTop,r=e.offsetLeft,i=e.getBoundingClientRect(),l=i.width,c=i.height,d=i.x,s=i.y;return Math.abs(l-n)<1?[l,c,d-t.x,s-t.y]:[n,a,r,o]}(i,n),c=r(l,4),d=c[0],s=c[1],u=c[2],v=c[3];t.set(o,{width:d,height:s,left:u,top:v})}})),t}))};n.useEffect((function(){Ze()}),[I.map((function(e){return e.key})).join("_")]);var et=q((function(){var e=te(T),t=te(L),n=te(z);ue([e[0]-t[0]-n[0],e[1]-t[1]-n[1]]);var a=te(D);$e(a);var o=te(N);we(o);var r=te(O);be([r[0]-a[0],r[1]-a[1]]),Ze()})),tt=I.slice(0,Ve),nt=I.slice(Ye+1),at=[].concat(b(tt),b(nt)),ot=Re.get(h),rt=function(e){var t=e.activeTabOffset,a=e.horizontal,o=e.rtl,c=e.indicator,d=void 0===c?{}:c,s=d.size,u=d.align,v=void 0===u?"center":u,p=n.useState(),f=r(p,2),b=f[0],m=f[1],h=n.useRef(),g=i.useCallback((function(e){return"function"==typeof s?s(e):"number"==typeof s?s:e}),[s]);function $(){l.cancel(h.current)}return n.useEffect((function(){var e={};if(t)if(a){e.width=g(t.width);var n=o?"right":"left";"start"===v&&(e[n]=t[n]),"center"===v&&(e[n]=t[n]+t.width/2,e.transform=o?"translateX(50%)":"translateX(-50%)"),"end"===v&&(e[n]=t[n]+t.width,e.transform="translateX(-100%)")}else e.height=g(t.height),"start"===v&&(e.top=t.top),"center"===v&&(e.top=t.top+t.height/2,e.transform="translateY(-50%)"),"end"===v&&(e.top=t.top+t.height,e.transform="translateY(-100%)");return $(),h.current=l((function(){m(e)})),$}),[t,a,o,v,g]),{style:b}}({activeTabOffset:ot,horizontal:j,indicator:E,rtl:g}),it=rt.style;n.useEffect((function(){Je()}),[h,Oe,Ne,F(ot),F(Re),j]),n.useEffect((function(){et()}),[g]);var lt,ct,dt,st,ut=!!at.length,vt="".concat(P,"-nav-wrap");return j?g?(ct=U>0,lt=U!==Ne):(lt=U<0,ct=U!==Oe):(dt=ie<0,st=ie!==Oe),n.createElement(M,{onResize:et},n.createElement("div",{ref:m(t,T),role:"tablist",className:v("".concat(P,"-nav"),a),style:d,onKeyDown:function(){Xe()}},n.createElement(Q,{ref:L,position:"left",extra:$,prefixCls:P}),n.createElement(M,{onResize:et},n.createElement("div",{className:v(vt,u(u(u(u({},"".concat(vt,"-ping-left"),lt),"".concat(vt,"-ping-right"),ct),"".concat(vt,"-ping-top"),dt),"".concat(vt,"-ping-bottom"),st)),ref:B},n.createElement(M,{onResize:et},n.createElement("div",{ref:O,className:"".concat(P,"-nav-list"),style:{transform:"translate(".concat(U,"px, ").concat(ie,"px)"),transition:He?"none":void 0}},Ue,n.createElement(J,{ref:D,prefixCls:P,locale:k,editable:y,style:c(c({},0===Ue.length?void 0:Qe),{},{visibility:ut?"hidden":null})}),n.createElement("div",{className:v("".concat(P,"-ink-bar"),u({},"".concat(P,"-ink-bar-animated"),p.inkBar)),style:it}))))),n.createElement(Z,o({},e,{removeAriaLabel:null==k?void 0:k.removeAriaLabel,ref:N,prefixCls:P,tabs:at,className:!ut&&Be,tabMoving:!!He})),n.createElement(Q,{ref:z,position:"right",extra:$,prefixCls:P})))})),oe=n.forwardRef((function(e,t){var a=e.prefixCls,o=e.className,r=e.style,i=e.id,l=e.active,c=e.tabKey,d=e.children;return n.createElement("div",{id:i&&"".concat(i,"-panel-").concat(c),role:"tabpanel",tabIndex:l?0:-1,"aria-labelledby":i&&"".concat(i,"-tab-").concat(c),"aria-hidden":!l,style:r,className:v(a,l&&"".concat(a,"-active"),o),ref:t},d)})),re=["renderTabBar"],ie=["label","key"],le=function(e){var t=e.renderTabBar,a=h(e,re),r=n.useContext(A).tabs;return t?t(c(c({},a),{},{panes:r.map((function(e){var t=e.label,a=e.key,r=h(e,ie);return n.createElement(oe,o({tab:t,key:a,tabKey:a},r))}))}),ae):n.createElement(ae,a)},ce=["key","forceRender","style","className","destroyInactiveTabPane"],de=function(e){var t=e.id,a=e.activeKey,r=e.animated,i=e.tabPosition,l=e.destroyInactiveTabPane,d=n.useContext(A),s=d.prefixCls,p=d.tabs,f=r.tabPane,b="".concat(s,"-tabpane");return n.createElement("div",{className:v("".concat(s,"-content-holder"))},n.createElement("div",{className:v("".concat(s,"-content"),"".concat(s,"-content-").concat(i),u({},"".concat(s,"-content-animated"),f))},p.map((function(e){var i=e.key,d=e.forceRender,s=e.style,u=e.className,p=e.destroyInactiveTabPane,m=h(e,ce),$=i===a;return n.createElement(g,o({key:i,visible:$,forceRender:d,removeOnLeave:!(!l&&!p),leavedClassName:"".concat(b,"-hidden")},r.tabPaneMotion),(function(e,a){var r=e.style,l=e.className;return n.createElement(oe,o({},m,{prefixCls:b,id:t,tabKey:i,animated:f,active:$,style:c(c({},s),r),className:v(u,l),ref:a}))}))}))))},se=["id","prefixCls","className","items","direction","activeKey","defaultActiveKey","editable","animated","tabPosition","tabBarGutter","tabBarStyle","tabBarExtraContent","locale","more","destroyInactiveTabPane","renderTabBar","onChange","onTabClick","onTabScroll","getPopupContainer","popupClassName","indicator"],ue=0,ve=n.forwardRef((function(e,t){var a=e.id,i=e.prefixCls,l=void 0===i?"rc-tabs":i,d=e.className,p=e.items,f=e.direction,b=e.activeKey,m=e.defaultActiveKey,g=e.editable,$=e.animated,y=e.tabPosition,k=void 0===y?"top":y,x=e.tabBarGutter,w=e.tabBarStyle,S=e.tabBarExtraContent,_=e.locale,C=e.more,E=e.destroyInactiveTabPane,R=e.renderTabBar,P=e.onChange,I=e.onTabClick,T=e.onTabScroll,L=e.getPopupContainer,M=e.popupClassName,O=e.indicator,N=h(e,se),D=n.useMemo((function(){return(p||[]).filter((function(e){return e&&"object"===s(e)&&"key"in e}))}),[p]),j="rtl"===f,G=function(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{inkBar:!0,tabPane:!1};return(e=!1===t?{inkBar:!1,tabPane:!1}:!0===t?{inkBar:!0,tabPane:!1}:c({inkBar:!0},"object"===s(t)?t:{})).tabPaneMotion&&void 0===e.tabPane&&(e.tabPane=!0),!e.tabPaneMotion&&e.tabPane&&(e.tabPane=!1),e}($),H=n.useState(!1),W=r(H,2),X=W[0],q=W[1];n.useEffect((function(){q(z())}),[]);var K=B((function(){var e;return null===(e=D[0])||void 0===e?void 0:e.key}),{value:b,defaultValue:m}),F=r(K,2),V=F[0],Y=F[1],J=n.useState((function(){return D.findIndex((function(e){return e.key===V}))})),Q=r(J,2),U=Q[0],Z=Q[1];n.useEffect((function(){var e,t=D.findIndex((function(e){return e.key===V}));-1===t&&(t=Math.max(0,Math.min(U,D.length-1)),Y(null===(e=D[t])||void 0===e?void 0:e.key)),Z(t)}),[D.map((function(e){return e.key})).join("_"),V,U]);var ee=B(null,{value:a}),te=r(ee,2),ne=te[0],ae=te[1];n.useEffect((function(){a||(ae("rc-tabs-".concat(ue)),ue+=1)}),[]);var oe={id:ne,activeKey:V,animated:G,tabPosition:k,rtl:j,mobile:X},re=c(c({},oe),{},{editable:g,locale:_,more:C,tabBarGutter:x,onTabClick:function(e,t){null==I||I(e,t);var n=e!==V;Y(e),n&&(null==P||P(e))},onTabScroll:T,extra:S,style:w,panes:null,getPopupContainer:L,popupClassName:M,indicator:O});return n.createElement(A.Provider,{value:{tabs:D,prefixCls:l}},n.createElement("div",o({ref:t,id:a,className:v(l,"".concat(l,"-").concat(k),u(u(u({},"".concat(l,"-mobile"),X),"".concat(l,"-editable"),g),"".concat(l,"-rtl"),j),d)},N),n.createElement(le,o({},re,{renderTabBar:R})),n.createElement(de,o({destroyInactiveTabPane:E},oe,{animated:G}))))}));const pe={motionAppear:!1,motionEnter:!0,motionLeave:!0};function fe(e,t){return e||function(e){return e.filter((e=>e))}(y(t).map((e=>{if(n.isValidElement(e)){const{key:t,props:n}=e,a=n||{},{tab:o}=a,r=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(a=Object.getOwnPropertySymbols(e);o<a.length;o++)t.indexOf(a[o])<0&&Object.prototype.propertyIsEnumerable.call(e,a[o])&&(n[a[o]]=e[a[o]])}return n}(a,["tab"]);return Object.assign(Object.assign({key:String(t)},r),{label:o})}return null})))}const be=e=>{const{componentCls:t,motionDurationSlow:n}=e;return[{[t]:{[`${t}-switch`]:{"&-appear, &-enter":{transition:"none","&-start":{opacity:0},"&-active":{opacity:1,transition:`opacity ${n}`}},"&-leave":{position:"absolute",transition:"none",inset:0,"&-start":{opacity:1},"&-active":{opacity:0,transition:`opacity ${n}`}}}}},[O(e,"slide-up"),O(e,"slide-down")]]},me=e=>{const{componentCls:t,tabsCardPadding:n,cardBg:a,cardGutter:o,colorBorderSecondary:r,itemSelectedColor:i}=e;return{[`${t}-card`]:{[`> ${t}-nav, > div > ${t}-nav`]:{[`${t}-tab`]:{margin:0,padding:n,background:a,border:`${w(e.lineWidth)} ${e.lineType} ${r}`,transition:`all ${e.motionDurationSlow} ${e.motionEaseInOut}`},[`${t}-tab-active`]:{color:i,background:e.colorBgContainer},[`${t}-ink-bar`]:{visibility:"hidden"}},[`&${t}-top, &${t}-bottom`]:{[`> ${t}-nav, > div > ${t}-nav`]:{[`${t}-tab + ${t}-tab`]:{marginLeft:{_skip_check_:!0,value:w(o)}}}},[`&${t}-top`]:{[`> ${t}-nav, > div > ${t}-nav`]:{[`${t}-tab`]:{borderRadius:`${w(e.borderRadiusLG)} ${w(e.borderRadiusLG)} 0 0`},[`${t}-tab-active`]:{borderBottomColor:e.colorBgContainer}}},[`&${t}-bottom`]:{[`> ${t}-nav, > div > ${t}-nav`]:{[`${t}-tab`]:{borderRadius:`0 0 ${w(e.borderRadiusLG)} ${w(e.borderRadiusLG)}`},[`${t}-tab-active`]:{borderTopColor:e.colorBgContainer}}},[`&${t}-left, &${t}-right`]:{[`> ${t}-nav, > div > ${t}-nav`]:{[`${t}-tab + ${t}-tab`]:{marginTop:w(o)}}},[`&${t}-left`]:{[`> ${t}-nav, > div > ${t}-nav`]:{[`${t}-tab`]:{borderRadius:{_skip_check_:!0,value:`${w(e.borderRadiusLG)} 0 0 ${w(e.borderRadiusLG)}`}},[`${t}-tab-active`]:{borderRightColor:{_skip_check_:!0,value:e.colorBgContainer}}}},[`&${t}-right`]:{[`> ${t}-nav, > div > ${t}-nav`]:{[`${t}-tab`]:{borderRadius:{_skip_check_:!0,value:`0 ${w(e.borderRadiusLG)} ${w(e.borderRadiusLG)} 0`}},[`${t}-tab-active`]:{borderLeftColor:{_skip_check_:!0,value:e.colorBgContainer}}}}}}},he=e=>{const{componentCls:t,itemHoverColor:n,dropdownEdgeChildVerticalPadding:a}=e;return{[`${t}-dropdown`]:Object.assign(Object.assign({},S(e)),{position:"absolute",top:-9999,left:{_skip_check_:!0,value:-9999},zIndex:e.zIndexPopup,display:"block","&-hidden":{display:"none"},[`${t}-dropdown-menu`]:{maxHeight:e.tabsDropdownHeight,margin:0,padding:`${w(a)} 0`,overflowX:"hidden",overflowY:"auto",textAlign:{_skip_check_:!0,value:"left"},listStyleType:"none",backgroundColor:e.colorBgContainer,backgroundClip:"padding-box",borderRadius:e.borderRadiusLG,outline:"none",boxShadow:e.boxShadowSecondary,"&-item":Object.assign(Object.assign({},_),{display:"flex",alignItems:"center",minWidth:e.tabsDropdownWidth,margin:0,padding:`${w(e.paddingXXS)} ${w(e.paddingSM)}`,color:e.colorText,fontWeight:"normal",fontSize:e.fontSize,lineHeight:e.lineHeight,cursor:"pointer",transition:`all ${e.motionDurationSlow}`,"> span":{flex:1,whiteSpace:"nowrap"},"&-remove":{flex:"none",marginLeft:{_skip_check_:!0,value:e.marginSM},color:e.colorTextDescription,fontSize:e.fontSizeSM,background:"transparent",border:0,cursor:"pointer","&:hover":{color:n}},"&:hover":{background:e.controlItemBgHover},"&-disabled":{"&, &:hover":{color:e.colorTextDisabled,background:"transparent",cursor:"not-allowed"}}})}})}},ge=e=>{const{componentCls:t,margin:n,colorBorderSecondary:a,horizontalMargin:o,verticalItemPadding:r,verticalItemMargin:i,calc:l}=e;return{[`${t}-top, ${t}-bottom`]:{flexDirection:"column",[`> ${t}-nav, > div > ${t}-nav`]:{margin:o,"&::before":{position:"absolute",right:{_skip_check_:!0,value:0},left:{_skip_check_:!0,value:0},borderBottom:`${w(e.lineWidth)} ${e.lineType} ${a}`,content:"''"},[`${t}-ink-bar`]:{height:e.lineWidthBold,"&-animated":{transition:`width ${e.motionDurationSlow}, left ${e.motionDurationSlow},\n            right ${e.motionDurationSlow}`}},[`${t}-nav-wrap`]:{"&::before, &::after":{top:0,bottom:0,width:e.controlHeight},"&::before":{left:{_skip_check_:!0,value:0},boxShadow:e.boxShadowTabsOverflowLeft},"&::after":{right:{_skip_check_:!0,value:0},boxShadow:e.boxShadowTabsOverflowRight},[`&${t}-nav-wrap-ping-left::before`]:{opacity:1},[`&${t}-nav-wrap-ping-right::after`]:{opacity:1}}}},[`${t}-top`]:{[`> ${t}-nav,\n        > div > ${t}-nav`]:{"&::before":{bottom:0},[`${t}-ink-bar`]:{bottom:0}}},[`${t}-bottom`]:{[`> ${t}-nav, > div > ${t}-nav`]:{order:1,marginTop:n,marginBottom:0,"&::before":{top:0},[`${t}-ink-bar`]:{top:0}},[`> ${t}-content-holder, > div > ${t}-content-holder`]:{order:0}},[`${t}-left, ${t}-right`]:{[`> ${t}-nav, > div > ${t}-nav`]:{flexDirection:"column",minWidth:l(e.controlHeight).mul(1.25).equal(),[`${t}-tab`]:{padding:r,textAlign:"center"},[`${t}-tab + ${t}-tab`]:{margin:i},[`${t}-nav-wrap`]:{flexDirection:"column","&::before, &::after":{right:{_skip_check_:!0,value:0},left:{_skip_check_:!0,value:0},height:e.controlHeight},"&::before":{top:0,boxShadow:e.boxShadowTabsOverflowTop},"&::after":{bottom:0,boxShadow:e.boxShadowTabsOverflowBottom},[`&${t}-nav-wrap-ping-top::before`]:{opacity:1},[`&${t}-nav-wrap-ping-bottom::after`]:{opacity:1}},[`${t}-ink-bar`]:{width:e.lineWidthBold,"&-animated":{transition:`height ${e.motionDurationSlow}, top ${e.motionDurationSlow}`}},[`${t}-nav-list, ${t}-nav-operations`]:{flex:"1 0 auto",flexDirection:"column"}}},[`${t}-left`]:{[`> ${t}-nav, > div > ${t}-nav`]:{[`${t}-ink-bar`]:{right:{_skip_check_:!0,value:0}}},[`> ${t}-content-holder, > div > ${t}-content-holder`]:{marginLeft:{_skip_check_:!0,value:w(l(e.lineWidth).mul(-1).equal())},borderLeft:{_skip_check_:!0,value:`${w(e.lineWidth)} ${e.lineType} ${e.colorBorder}`},[`> ${t}-content > ${t}-tabpane`]:{paddingLeft:{_skip_check_:!0,value:e.paddingLG}}}},[`${t}-right`]:{[`> ${t}-nav, > div > ${t}-nav`]:{order:1,[`${t}-ink-bar`]:{left:{_skip_check_:!0,value:0}}},[`> ${t}-content-holder, > div > ${t}-content-holder`]:{order:0,marginRight:{_skip_check_:!0,value:l(e.lineWidth).mul(-1).equal()},borderRight:{_skip_check_:!0,value:`${w(e.lineWidth)} ${e.lineType} ${e.colorBorder}`},[`> ${t}-content > ${t}-tabpane`]:{paddingRight:{_skip_check_:!0,value:e.paddingLG}}}}}},$e=e=>{const{componentCls:t,cardPaddingSM:n,cardPaddingLG:a,horizontalItemPaddingSM:o,horizontalItemPaddingLG:r}=e;return{[t]:{"&-small":{[`> ${t}-nav`]:{[`${t}-tab`]:{padding:o,fontSize:e.titleFontSizeSM}}},"&-large":{[`> ${t}-nav`]:{[`${t}-tab`]:{padding:r,fontSize:e.titleFontSizeLG}}}},[`${t}-card`]:{[`&${t}-small`]:{[`> ${t}-nav`]:{[`${t}-tab`]:{padding:n}},[`&${t}-bottom`]:{[`> ${t}-nav ${t}-tab`]:{borderRadius:`0 0 ${w(e.borderRadius)} ${w(e.borderRadius)}`}},[`&${t}-top`]:{[`> ${t}-nav ${t}-tab`]:{borderRadius:`${w(e.borderRadius)} ${w(e.borderRadius)} 0 0`}},[`&${t}-right`]:{[`> ${t}-nav ${t}-tab`]:{borderRadius:{_skip_check_:!0,value:`0 ${w(e.borderRadius)} ${w(e.borderRadius)} 0`}}},[`&${t}-left`]:{[`> ${t}-nav ${t}-tab`]:{borderRadius:{_skip_check_:!0,value:`${w(e.borderRadius)} 0 0 ${w(e.borderRadius)}`}}}},[`&${t}-large`]:{[`> ${t}-nav`]:{[`${t}-tab`]:{padding:a}}}}}},ye=e=>{const{componentCls:t,itemActiveColor:n,itemHoverColor:a,iconCls:o,tabsHorizontalItemMargin:r,horizontalItemPadding:i,itemSelectedColor:l,itemColor:c}=e,d=`${t}-tab`;return{[d]:{position:"relative",WebkitTouchCallout:"none",WebkitTapHighlightColor:"transparent",display:"inline-flex",alignItems:"center",padding:i,fontSize:e.titleFontSize,background:"transparent",border:0,outline:"none",cursor:"pointer",color:c,"&-btn, &-remove":Object.assign({"&:focus:not(:focus-visible), &:active":{color:n}},C(e)),"&-btn":{outline:"none",transition:`all ${e.motionDurationSlow}`,[`${d}-icon:not(:last-child)`]:{marginInlineEnd:e.marginSM}},"&-remove":{flex:"none",marginRight:{_skip_check_:!0,value:e.calc(e.marginXXS).mul(-1).equal()},marginLeft:{_skip_check_:!0,value:e.marginXS},color:e.colorTextDescription,fontSize:e.fontSizeSM,background:"transparent",border:"none",outline:"none",cursor:"pointer",transition:`all ${e.motionDurationSlow}`,"&:hover":{color:e.colorTextHeading}},"&:hover":{color:a},[`&${d}-active ${d}-btn`]:{color:l,textShadow:e.tabsActiveTextShadow},[`&${d}-disabled`]:{color:e.colorTextDisabled,cursor:"not-allowed"},[`&${d}-disabled ${d}-btn, &${d}-disabled ${t}-remove`]:{"&:focus, &:active":{color:e.colorTextDisabled}},[`& ${d}-remove ${o}`]:{margin:0},[`${o}:not(:last-child)`]:{marginRight:{_skip_check_:!0,value:e.marginSM}}},[`${d} + ${d}`]:{margin:{_skip_check_:!0,value:r}}}},ke=e=>{const{componentCls:t,tabsHorizontalItemMarginRTL:n,iconCls:a,cardGutter:o,calc:r}=e,i=`${t}-rtl`;return{[i]:{direction:"rtl",[`${t}-nav`]:{[`${t}-tab`]:{margin:{_skip_check_:!0,value:n},[`${t}-tab:last-of-type`]:{marginLeft:{_skip_check_:!0,value:0}},[a]:{marginRight:{_skip_check_:!0,value:0},marginLeft:{_skip_check_:!0,value:w(e.marginSM)}},[`${t}-tab-remove`]:{marginRight:{_skip_check_:!0,value:w(e.marginXS)},marginLeft:{_skip_check_:!0,value:w(r(e.marginXXS).mul(-1).equal())},[a]:{margin:0}}}},[`&${t}-left`]:{[`> ${t}-nav`]:{order:1},[`> ${t}-content-holder`]:{order:0}},[`&${t}-right`]:{[`> ${t}-nav`]:{order:0},[`> ${t}-content-holder`]:{order:1}},[`&${t}-card${t}-top, &${t}-card${t}-bottom`]:{[`> ${t}-nav, > div > ${t}-nav`]:{[`${t}-tab + ${t}-tab`]:{marginRight:{_skip_check_:!0,value:o},marginLeft:{_skip_check_:!0,value:0}}}}},[`${t}-dropdown-rtl`]:{direction:"rtl"},[`${t}-menu-item`]:{[`${t}-dropdown-rtl`]:{textAlign:{_skip_check_:!0,value:"right"}}}}},xe=e=>{const{componentCls:t,tabsCardPadding:n,cardHeight:a,cardGutter:o,itemHoverColor:r,itemActiveColor:i,colorBorderSecondary:l}=e;return{[t]:Object.assign(Object.assign(Object.assign(Object.assign({},S(e)),{display:"flex",[`> ${t}-nav, > div > ${t}-nav`]:{position:"relative",display:"flex",flex:"none",alignItems:"center",[`${t}-nav-wrap`]:{position:"relative",display:"flex",flex:"auto",alignSelf:"stretch",overflow:"hidden",whiteSpace:"nowrap",transform:"translate(0)","&::before, &::after":{position:"absolute",zIndex:1,opacity:0,transition:`opacity ${e.motionDurationSlow}`,content:"''",pointerEvents:"none"}},[`${t}-nav-list`]:{position:"relative",display:"flex",transition:`opacity ${e.motionDurationSlow}`},[`${t}-nav-operations`]:{display:"flex",alignSelf:"stretch"},[`${t}-nav-operations-hidden`]:{position:"absolute",visibility:"hidden",pointerEvents:"none"},[`${t}-nav-more`]:{position:"relative",padding:n,background:"transparent",border:0,color:e.colorText,"&::after":{position:"absolute",right:{_skip_check_:!0,value:0},bottom:0,left:{_skip_check_:!0,value:0},height:e.calc(e.controlHeightLG).div(8).equal(),transform:"translateY(100%)",content:"''"}},[`${t}-nav-add`]:Object.assign({minWidth:a,minHeight:a,marginLeft:{_skip_check_:!0,value:o},padding:`0 ${w(e.paddingXS)}`,background:"transparent",border:`${w(e.lineWidth)} ${e.lineType} ${l}`,borderRadius:`${w(e.borderRadiusLG)} ${w(e.borderRadiusLG)} 0 0`,outline:"none",cursor:"pointer",color:e.colorText,transition:`all ${e.motionDurationSlow} ${e.motionEaseInOut}`,"&:hover":{color:r},"&:active, &:focus:not(:focus-visible)":{color:i}},C(e))},[`${t}-extra-content`]:{flex:"none"},[`${t}-ink-bar`]:{position:"absolute",background:e.inkBarColor,pointerEvents:"none"}}),ye(e)),{[`${t}-content`]:{position:"relative",width:"100%"},[`${t}-content-holder`]:{flex:"auto",minWidth:0,minHeight:0},[`${t}-tabpane`]:{outline:"none","&-hidden":{display:"none"}}}),[`${t}-centered`]:{[`> ${t}-nav, > div > ${t}-nav`]:{[`${t}-nav-wrap`]:{[`&:not([class*='${t}-nav-wrap-ping'])`]:{justifyContent:"center"}}}}}},we=k("Tabs",(e=>{const t=x(e,{tabsCardPadding:e.cardPadding,dropdownEdgeChildVerticalPadding:e.paddingXXS,tabsActiveTextShadow:"0 0 0.25px currentcolor",tabsDropdownHeight:200,tabsDropdownWidth:120,tabsHorizontalItemMargin:`0 0 0 ${w(e.horizontalItemGutter)}`,tabsHorizontalItemMarginRTL:`0 0 0 ${w(e.horizontalItemGutter)}`});return[$e(t),ke(t),ge(t),he(t),me(t),xe(t),be(t)]}),(e=>{const t=e.controlHeightLG;return{zIndexPopup:e.zIndexPopupBase+50,cardBg:e.colorFillAlter,cardHeight:t,cardPadding:`${(t-Math.round(e.fontSize*e.lineHeight))/2-e.lineWidth}px ${e.padding}px`,cardPaddingSM:`${1.5*e.paddingXXS}px ${e.padding}px`,cardPaddingLG:`${e.paddingXS}px ${e.padding}px ${1.5*e.paddingXXS}px`,titleFontSize:e.fontSize,titleFontSizeLG:e.fontSizeLG,titleFontSizeSM:e.fontSize,inkBarColor:e.colorPrimary,horizontalMargin:`0 0 ${e.margin}px 0`,horizontalItemGutter:32,horizontalItemMargin:"",horizontalItemMarginRTL:"",horizontalItemPadding:`${e.paddingSM}px 0`,horizontalItemPaddingSM:`${e.paddingXS}px 0`,horizontalItemPaddingLG:`${e.padding}px 0`,verticalItemPadding:`${e.paddingXS}px ${e.paddingLG}px`,verticalItemMargin:`${e.margin}px 0 0 0`,itemColor:e.colorText,itemSelectedColor:e.colorPrimary,itemHoverColor:e.colorPrimaryHover,itemActiveColor:e.colorPrimaryActive,cardGutter:e.marginXXS/2}})),Se=e("T",(e=>{var t,a,o,r,i,l,c,d,s,u,p;const{type:f,className:b,rootClassName:m,size:h,onEdit:g,hideAdd:y,centered:k,addIcon:x,removeIcon:w,moreIcon:S,more:_,popupClassName:C,children:T,items:L,animated:M,style:z,indicatorSize:B,indicator:O}=e,D=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(a=Object.getOwnPropertySymbols(e);o<a.length;o++)t.indexOf(a[o])<0&&Object.prototype.propertyIsEnumerable.call(e,a[o])&&(n[a[o]]=e[a[o]])}return n}(e,["type","className","rootClassName","size","onEdit","hideAdd","centered","addIcon","removeIcon","moreIcon","more","popupClassName","children","items","animated","style","indicatorSize","indicator"]),{prefixCls:j}=D,{direction:A,tabs:H,getPrefixCls:W,getPopupContainer:X}=n.useContext(E),q=W("tabs",j),K=R(q),[F,V,Y]=we(q,K);let J;"editable-card"===f&&(J={onEdit:(e,t)=>{let{key:n,event:a}=t;null==g||g("add"===e?a:n,e)},removeIcon:null!==(t=null!=w?w:null==H?void 0:H.removeIcon)&&void 0!==t?t:n.createElement(P,null),addIcon:(null!=x?x:null==H?void 0:H.addIcon)||n.createElement(G,null),showAdd:!0!==y});const Q=W(),U=I(h),Z=fe(L,T),ee=function(e){let t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{inkBar:!0,tabPane:!1};return t=!1===n?{inkBar:!1,tabPane:!1}:!0===n?{inkBar:!0,tabPane:!0}:Object.assign({inkBar:!0},"object"==typeof n?n:{}),t.tabPane&&(t.tabPaneMotion=Object.assign(Object.assign({},pe),{motionName:$(e,"switch")})),t}(q,M),te=Object.assign(Object.assign({},null==H?void 0:H.style),z),ne={align:null!==(a=null==O?void 0:O.align)&&void 0!==a?a:null===(o=null==H?void 0:H.indicator)||void 0===o?void 0:o.align,size:null!==(c=null!==(i=null!==(r=null==O?void 0:O.size)&&void 0!==r?r:B)&&void 0!==i?i:null===(l=null==H?void 0:H.indicator)||void 0===l?void 0:l.size)&&void 0!==c?c:null==H?void 0:H.indicatorSize};return F(n.createElement(ve,Object.assign({direction:A,getPopupContainer:X},D,{items:Z,className:v({[`${q}-${U}`]:U,[`${q}-card`]:["card","editable-card"].includes(f),[`${q}-editable-card`]:"editable-card"===f,[`${q}-centered`]:k},null==H?void 0:H.className,b,m,V,Y,K),popupClassName:v(C,V,Y,K),style:te,editable:J,more:Object.assign({icon:null!==(p=null!==(u=null!==(s=null===(d=null==H?void 0:H.more)||void 0===d?void 0:d.icon)&&void 0!==s?s:null==H?void 0:H.moreIcon)&&void 0!==u?u:S)&&void 0!==p?p:n.createElement(N,null),transitionName:`${Q}-slide-up`},_),prefixCls:q,animated:ee,indicator:ne})))}));Se.TabPane=()=>null}}}));
