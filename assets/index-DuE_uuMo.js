import{r as a,I as Ft,h as ce,k as I,$ as qt,w as dt,d as te,m as Yt,e as Xe,Z as F,p as Z,Y as fe,l as Zt,i as ut,u as Qt,o as Le,C as Jt,S as ea,t as ta,G as aa,H as na,F as $,a3 as xt,L as Ct,a4 as ra,bL as Ke,M as ia,a8 as oa,ad as la,bI as ca}from"./index-BLu4pHkP.js";import{W as sa,X as da,R as je,Y as ua,n as ft,V as vt,Z as fa}from"./MyApp-JZyJMXzY.js";import{D as va}from"./Dropdown-DRh_BX1q.js";var ba={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M482 152h60q8 0 8 8v704q0 8-8 8h-60q-8 0-8-8V160q0-8 8-8z"}},{tag:"path",attrs:{d:"M192 474h672q8 0 8 8v60q0 8-8 8H160q-8 0-8-8v-60q0-8 8-8z"}}]},name:"plus",theme:"outlined"},ma=function(t,n){return a.createElement(Ft,ce({},t,{ref:n,icon:ba}))},ga=a.forwardRef(ma);const ze=a.createContext(null);var ha=function(t){var n=t.activeTabOffset,r=t.horizontal,i=t.rtl,l=t.indicator,c=l===void 0?{}:l,o=c.size,d=c.align,s=d===void 0?"center":d,m=a.useState(),b=I(m,2),_=b[0],P=b[1],O=a.useRef(),C=qt.useCallback(function(p){return typeof o=="function"?o(p):typeof o=="number"?o:p},[o]);function D(){dt.cancel(O.current)}return a.useEffect(function(){var p={};if(n)if(r){p.width=C(n.width);var g=i?"right":"left";s==="start"&&(p[g]=n[g]),s==="center"&&(p[g]=n[g]+n.width/2,p.transform=i?"translateX(50%)":"translateX(-50%)"),s==="end"&&(p[g]=n[g]+n.width,p.transform="translateX(-100%)")}else p.height=C(n.height),s==="start"&&(p.top=n.top),s==="center"&&(p.top=n.top+n.height/2,p.transform="translateY(-50%)"),s==="end"&&(p.top=n.top+n.height,p.transform="translateY(-100%)");return D(),O.current=dt(function(){P(p)}),D},[n,r,i,s,C]),{style:_}},bt={width:0,height:0,left:0,top:0};function pa(e,t,n){return a.useMemo(function(){for(var r,i=new Map,l=t.get((r=e[0])===null||r===void 0?void 0:r.key)||bt,c=l.left+l.width,o=0;o<e.length;o+=1){var d=e[o].key,s=t.get(d);if(!s){var m;s=t.get((m=e[o-1])===null||m===void 0?void 0:m.key)||bt}var b=i.get(d)||te({},s);b.right=c-b.left-b.width,i.set(d,b)}return i},[e.map(function(r){return r.key}).join("_"),t,n])}function mt(e,t){var n=a.useRef(e),r=a.useState({}),i=I(r,2),l=i[1];function c(o){var d=typeof o=="function"?o(n.current):o;d!==n.current&&t(d,n.current),n.current=d,l({})}return[n.current,c]}var $a=.1,gt=.01,Me=20,ht=Math.pow(.995,Me);function Sa(e,t){var n=a.useState(),r=I(n,2),i=r[0],l=r[1],c=a.useState(0),o=I(c,2),d=o[0],s=o[1],m=a.useState(0),b=I(m,2),_=b[0],P=b[1],O=a.useState(),C=I(O,2),D=C[0],p=C[1],g=a.useRef();function T(x){var E=x.touches[0],f=E.screenX,y=E.screenY;l({x:f,y}),window.clearInterval(g.current)}function B(x){if(i){var E=x.touches[0],f=E.screenX,y=E.screenY;l({x:f,y});var h=f-i.x,S=y-i.y;t(h,S);var K=Date.now();s(K),P(K-d),p({x:h,y:S})}}function A(){if(i&&(l(null),p(null),D)){var x=D.x/_,E=D.y/_,f=Math.abs(x),y=Math.abs(E);if(Math.max(f,y)<$a)return;var h=x,S=E;g.current=window.setInterval(function(){if(Math.abs(h)<gt&&Math.abs(S)<gt){window.clearInterval(g.current);return}h*=ht,S*=ht,t(h*Me,S*Me)},Me)}}var W=a.useRef();function H(x){var E=x.deltaX,f=x.deltaY,y=0,h=Math.abs(E),S=Math.abs(f);h===S?y=W.current==="x"?E:f:h>S?(y=E,W.current="x"):(y=f,W.current="y"),t(-y,-y)&&x.preventDefault()}var z=a.useRef(null);z.current={onTouchStart:T,onTouchMove:B,onTouchEnd:A,onWheel:H},a.useEffect(function(){function x(h){z.current.onTouchStart(h)}function E(h){z.current.onTouchMove(h)}function f(h){z.current.onTouchEnd(h)}function y(h){z.current.onWheel(h)}return document.addEventListener("touchmove",E,{passive:!1}),document.addEventListener("touchend",f,{passive:!0}),e.current.addEventListener("touchstart",x,{passive:!0}),e.current.addEventListener("wheel",y,{passive:!1}),function(){document.removeEventListener("touchmove",E),document.removeEventListener("touchend",f)}},[])}function wt(e){var t=a.useState(0),n=I(t,2),r=n[0],i=n[1],l=a.useRef(0),c=a.useRef();return c.current=e,Yt(function(){var o;(o=c.current)===null||o===void 0||o.call(c)},[r]),function(){l.current===r&&(l.current+=1,i(l.current))}}function ya(e){var t=a.useRef([]),n=a.useState({}),r=I(n,2),i=r[1],l=a.useRef(typeof e=="function"?e():e),c=wt(function(){var d=l.current;t.current.forEach(function(s){d=s(d)}),t.current=[],l.current=d,i({})});function o(d){t.current.push(d),c()}return[l.current,o]}var pt={width:0,height:0,left:0,top:0,right:0};function _a(e,t,n,r,i,l,c){var o=c.tabs,d=c.tabPosition,s=c.rtl,m,b,_;return["top","bottom"].includes(d)?(m="width",b=s?"right":"left",_=Math.abs(n)):(m="height",b="top",_=-n),a.useMemo(function(){if(!o.length)return[0,0];for(var P=o.length,O=P,C=0;C<P;C+=1){var D=e.get(o[C].key)||pt;if(Math.floor(D[b]+D[m])>Math.floor(_+t)){O=C-1;break}}for(var p=0,g=P-1;g>=0;g-=1){var T=e.get(o[g].key)||pt;if(T[b]<_){p=g+1;break}}return p>=O?[0,0]:[p,O]},[e,t,r,i,l,_,d,o.map(function(P){return P.key}).join("_"),s])}function $t(e){var t;return e instanceof Map?(t={},e.forEach(function(n,r){t[r]=n})):t=e,JSON.stringify(t)}var xa="TABS_DQ";function Et(e){return String(e).replace(/"/g,xa)}function Ve(e,t,n,r){return!(!n||r||e===!1||e===void 0&&(t===!1||t===null))}var Rt=a.forwardRef(function(e,t){var n=e.prefixCls,r=e.editable,i=e.locale,l=e.style;return!r||r.showAdd===!1?null:a.createElement("button",{ref:t,type:"button",className:"".concat(n,"-nav-add"),style:l,"aria-label":(i==null?void 0:i.addAriaLabel)||"Add tab",onClick:function(o){r.onEdit("add",{event:o})}},r.addIcon||"+")}),St=a.forwardRef(function(e,t){var n=e.position,r=e.prefixCls,i=e.extra;if(!i)return null;var l,c={};return Xe(i)==="object"&&!a.isValidElement(i)?c=i:c.right=i,n==="right"&&(l=c.right),n==="left"&&(l=c.left),l?a.createElement("div",{className:"".concat(r,"-extra-content"),ref:t},l):null}),Ca=a.forwardRef(function(e,t){var n=e.prefixCls,r=e.id,i=e.tabs,l=e.locale,c=e.mobile,o=e.more,d=o===void 0?{}:o,s=e.style,m=e.className,b=e.editable,_=e.tabBarGutter,P=e.rtl,O=e.removeAriaLabel,C=e.onTabClick,D=e.getPopupContainer,p=e.popupClassName,g=a.useState(!1),T=I(g,2),B=T[0],A=T[1],W=a.useState(null),H=I(W,2),z=H[0],x=H[1],E=d.icon,f=E===void 0?"More":E,y="".concat(r,"-more-popup"),h="".concat(n,"-dropdown"),S=z!==null?"".concat(y,"-").concat(z):null,K=l==null?void 0:l.dropdownAriaLabel;function X(w,k){w.preventDefault(),w.stopPropagation(),b.onEdit("remove",{key:k,event:w})}var v=a.createElement(sa,{onClick:function(k){var j=k.key,U=k.domEvent;C(j,U),A(!1)},prefixCls:"".concat(h,"-menu"),id:y,tabIndex:-1,role:"listbox","aria-activedescendant":S,selectedKeys:[z],"aria-label":K!==void 0?K:"expanded dropdown"},i.map(function(w){var k=w.closable,j=w.disabled,U=w.closeIcon,Y=w.key,ae=w.label,Q=Ve(k,U,b,j);return a.createElement(da,{key:Y,id:"".concat(y,"-").concat(Y),role:"option","aria-controls":r&&"".concat(r,"-panel-").concat(Y),disabled:j},a.createElement("span",null,ae),Q&&a.createElement("button",{type:"button","aria-label":O||"remove",tabIndex:0,className:"".concat(h,"-menu-item-remove"),onClick:function(de){de.stopPropagation(),X(de,Y)}},U||b.removeIcon||"×"))}));function V(w){for(var k=i.filter(function(Q){return!Q.disabled}),j=k.findIndex(function(Q){return Q.key===z})||0,U=k.length,Y=0;Y<U;Y+=1){j=(j+w+U)%U;var ae=k[j];if(!ae.disabled){x(ae.key);return}}}function ie(w){var k=w.which;if(!B){[fe.DOWN,fe.SPACE,fe.ENTER].includes(k)&&(A(!0),w.preventDefault());return}switch(k){case fe.UP:V(-1),w.preventDefault();break;case fe.DOWN:V(1),w.preventDefault();break;case fe.ESC:A(!1);break;case fe.SPACE:case fe.ENTER:z!==null&&C(z,w);break}}a.useEffect(function(){var w=document.getElementById(S);w&&w.scrollIntoView&&w.scrollIntoView(!1)},[z]),a.useEffect(function(){B||x(null)},[B]);var G=F({},P?"marginRight":"marginLeft",_);i.length||(G.visibility="hidden",G.order=1);var q=Z(F({},"".concat(h,"-rtl"),P)),se=c?null:a.createElement(va,ce({prefixCls:h,overlay:v,visible:i.length?B:!1,onVisibleChange:A,overlayClassName:Z(q,p),mouseEnterDelay:.1,mouseLeaveDelay:.1,getPopupContainer:D},d),a.createElement("button",{type:"button",className:"".concat(n,"-nav-more"),style:G,tabIndex:-1,"aria-hidden":"true","aria-haspopup":"listbox","aria-controls":y,id:"".concat(r,"-more"),"aria-expanded":B,onKeyDown:ie},f));return a.createElement("div",{className:Z("".concat(n,"-nav-operations"),m),style:s,ref:t},se,a.createElement(Rt,{prefixCls:n,locale:l,editable:b}))});const wa=a.memo(Ca,function(e,t){return t.tabMoving});var Ea=function(t){var n=t.prefixCls,r=t.id,i=t.active,l=t.focus,c=t.tab,o=c.key,d=c.label,s=c.disabled,m=c.closeIcon,b=c.icon,_=t.closable,P=t.renderWrapper,O=t.removeAriaLabel,C=t.editable,D=t.onClick,p=t.onFocus,g=t.onBlur,T=t.onKeyDown,B=t.onMouseDown,A=t.onMouseUp,W=t.style,H=t.tabCount,z=t.currentPosition,x="".concat(n,"-tab"),E=Ve(_,m,C,s);function f(X){s||D(X)}function y(X){X.preventDefault(),X.stopPropagation(),C.onEdit("remove",{key:o,event:X})}var h=a.useMemo(function(){return b&&typeof d=="string"?a.createElement("span",null,d):d},[d,b]),S=a.useRef(null);a.useEffect(function(){l&&S.current&&S.current.focus()},[l]);var K=a.createElement("div",{key:o,"data-node-key":Et(o),className:Z(x,F(F(F(F({},"".concat(x,"-with-remove"),E),"".concat(x,"-active"),i),"".concat(x,"-disabled"),s),"".concat(x,"-focus"),l)),style:W,onClick:f},a.createElement("div",{ref:S,role:"tab","aria-selected":i,id:r&&"".concat(r,"-tab-").concat(o),className:"".concat(x,"-btn"),"aria-controls":r&&"".concat(r,"-panel-").concat(o),"aria-disabled":s,tabIndex:s?null:i?0:-1,onClick:function(v){v.stopPropagation(),f(v)},onKeyDown:T,onMouseDown:B,onMouseUp:A,onFocus:p,onBlur:g},l&&a.createElement("div",{"aria-live":"polite",style:{width:0,height:0,position:"absolute",overflow:"hidden",opacity:0}},"Tab ".concat(z," of ").concat(H)),b&&a.createElement("span",{className:"".concat(x,"-icon")},b),d&&h),E&&a.createElement("button",{type:"button","aria-label":O||"remove",tabIndex:i?0:-1,className:"".concat(x,"-remove"),onClick:function(v){v.stopPropagation(),y(v)}},m||C.removeIcon||"×"));return P?P(K):K},Ra=function(t,n){var r=t.offsetWidth,i=t.offsetHeight,l=t.offsetTop,c=t.offsetLeft,o=t.getBoundingClientRect(),d=o.width,s=o.height,m=o.left,b=o.top;return Math.abs(d-r)<1?[d,s,m-n.left,b-n.top]:[r,i,c,l]},ye=function(t){var n=t.current||{},r=n.offsetWidth,i=r===void 0?0:r,l=n.offsetHeight,c=l===void 0?0:l;if(t.current){var o=t.current.getBoundingClientRect(),d=o.width,s=o.height;if(Math.abs(d-i)<1)return[d,s]}return[i,c]},Ie=function(t,n){return t[n?0:1]},yt=a.forwardRef(function(e,t){var n=e.className,r=e.style,i=e.id,l=e.animated,c=e.activeKey,o=e.rtl,d=e.extra,s=e.editable,m=e.locale,b=e.tabPosition,_=e.tabBarGutter,P=e.children,O=e.onTabClick,C=e.onTabScroll,D=e.indicator,p=a.useContext(ze),g=p.prefixCls,T=p.tabs,B=a.useRef(null),A=a.useRef(null),W=a.useRef(null),H=a.useRef(null),z=a.useRef(null),x=a.useRef(null),E=a.useRef(null),f=b==="top"||b==="bottom",y=mt(0,function(R,u){f&&C&&C({direction:R>u?"left":"right"})}),h=I(y,2),S=h[0],K=h[1],X=mt(0,function(R,u){!f&&C&&C({direction:R>u?"top":"bottom"})}),v=I(X,2),V=v[0],ie=v[1],G=a.useState([0,0]),q=I(G,2),se=q[0],w=q[1],k=a.useState([0,0]),j=I(k,2),U=j[0],Y=j[1],ae=a.useState([0,0]),Q=I(ae,2),me=Q[0],de=Q[1],ve=a.useState([0,0]),ge=I(ve,2),M=ge[0],oe=ge[1],_e=ya(new Map),Ue=I(_e,2),Pt=Ue[0],It=Ue[1],Ee=pa(T,Pt,U[0]),De=Ie(se,f),xe=Ie(U,f),Ne=Ie(me,f),Fe=Ie(M,f),qe=Math.floor(De)<Math.floor(xe+Ne),re=qe?De-Fe:De-Ne,Mt="".concat(g,"-nav-operations-hidden"),ue=0,be=0;f&&o?(ue=0,be=Math.max(0,xe-re)):(ue=Math.min(0,re-xe),be=0);function Oe(R){return R<ue?ue:R>be?be:R}var Be=a.useRef(null),Lt=a.useState(),Ye=I(Lt,2),Re=Ye[0],Ze=Ye[1];function ke(){Ze(Date.now())}function Ae(){Be.current&&clearTimeout(Be.current)}Sa(H,function(R,u){function L(N,ne){N(function(J){var $e=Oe(J+ne);return $e})}return qe?(f?L(K,R):L(ie,u),Ae(),ke(),!0):!1}),a.useEffect(function(){return Ae(),Re&&(Be.current=setTimeout(function(){Ze(0)},100)),Ae},[Re]);var zt=_a(Ee,re,f?S:V,xe,Ne,Fe,te(te({},e),{},{tabs:T})),Qe=I(zt,2),Dt=Qe[0],Nt=Qe[1],Je=Zt(function(){var R=arguments.length>0&&arguments[0]!==void 0?arguments[0]:c,u=Ee.get(R)||{width:0,height:0,left:0,right:0,top:0};if(f){var L=S;o?u.right<S?L=u.right:u.right+u.width>S+re&&(L=u.right+u.width-re):u.left<-S?L=-u.left:u.left+u.width>-S+re&&(L=-(u.left+u.width-re)),ie(0),K(Oe(L))}else{var N=V;u.top<-V?N=-u.top:u.top+u.height>-V+re&&(N=-(u.top+u.height-re)),K(0),ie(Oe(N))}}),Ot=a.useState(),et=I(Ot,2),he=et[0],Ce=et[1],Bt=a.useState(!1),tt=I(Bt,2),kt=tt[0],at=tt[1],le=T.filter(function(R){return!R.disabled}).map(function(R){return R.key}),pe=function(u){var L=le.indexOf(he||c),N=le.length,ne=(L+u+N)%N,J=le[ne];Ce(J)},At=function(u){var L=u.code,N=o&&f,ne=le[0],J=le[le.length-1];switch(L){case"ArrowLeft":{f&&pe(N?1:-1);break}case"ArrowRight":{f&&pe(N?-1:1);break}case"ArrowUp":{u.preventDefault(),f||pe(-1);break}case"ArrowDown":{u.preventDefault(),f||pe(1);break}case"Home":{u.preventDefault(),Ce(ne);break}case"End":{u.preventDefault(),Ce(J);break}case"Enter":case"Space":{u.preventDefault(),O(he,u);break}case"Backspace":case"Delete":{var $e=le.indexOf(he),ee=T.find(function(Se){return Se.key===he}),Ge=Ve(ee==null?void 0:ee.closable,ee==null?void 0:ee.closeIcon,s,ee==null?void 0:ee.disabled);Ge&&(u.preventDefault(),u.stopPropagation(),s.onEdit("remove",{key:he,event:u}),$e===le.length-1?pe(-1):pe(1));break}}},Te={};f?Te[o?"marginRight":"marginLeft"]=_:Te.marginTop=_;var nt=T.map(function(R,u){var L=R.key;return a.createElement(Ea,{id:i,prefixCls:g,key:L,tab:R,style:u===0?void 0:Te,closable:R.closable,editable:s,active:L===c,focus:L===he,renderWrapper:P,removeAriaLabel:m==null?void 0:m.removeAriaLabel,tabCount:le.length,currentPosition:u+1,onClick:function(ne){O(L,ne)},onKeyDown:At,onFocus:function(){kt||Ce(L),Je(L),ke(),H.current&&(o||(H.current.scrollLeft=0),H.current.scrollTop=0)},onBlur:function(){Ce(void 0)},onMouseDown:function(){at(!0)},onMouseUp:function(){at(!1)}})}),rt=function(){return It(function(){var u,L=new Map,N=(u=z.current)===null||u===void 0?void 0:u.getBoundingClientRect();return T.forEach(function(ne){var J,$e=ne.key,ee=(J=z.current)===null||J===void 0?void 0:J.querySelector('[data-node-key="'.concat(Et($e),'"]'));if(ee){var Ge=Ra(ee,N),Se=I(Ge,4),Kt=Se[0],Xt=Se[1],Vt=Se[2],Ut=Se[3];L.set($e,{width:Kt,height:Xt,left:Vt,top:Ut})}}),L})};a.useEffect(function(){rt()},[T.map(function(R){return R.key}).join("_")]);var Pe=wt(function(){var R=ye(B),u=ye(A),L=ye(W);w([R[0]-u[0]-L[0],R[1]-u[1]-L[1]]);var N=ye(E);de(N);var ne=ye(x);oe(ne);var J=ye(z);Y([J[0]-N[0],J[1]-N[1]]),rt()}),Wt=T.slice(0,Dt),Ht=T.slice(Nt+1),it=[].concat(ut(Wt),ut(Ht)),ot=Ee.get(c),Gt=ha({activeTabOffset:ot,horizontal:f,indicator:D,rtl:o}),jt=Gt.style;a.useEffect(function(){Je()},[c,ue,be,$t(ot),$t(Ee),f]),a.useEffect(function(){Pe()},[o]);var lt=!!it.length,we="".concat(g,"-nav-wrap"),We,He,ct,st;return f?o?(He=S>0,We=S!==be):(We=S<0,He=S!==ue):(ct=V<0,st=V!==ue),a.createElement(je,{onResize:Pe},a.createElement("div",{ref:Qt(t,B),role:"tablist","aria-orientation":f?"horizontal":"vertical",className:Z("".concat(g,"-nav"),n),style:r,onKeyDown:function(){ke()}},a.createElement(St,{ref:A,position:"left",extra:d,prefixCls:g}),a.createElement(je,{onResize:Pe},a.createElement("div",{className:Z(we,F(F(F(F({},"".concat(we,"-ping-left"),We),"".concat(we,"-ping-right"),He),"".concat(we,"-ping-top"),ct),"".concat(we,"-ping-bottom"),st)),ref:H},a.createElement(je,{onResize:Pe},a.createElement("div",{ref:z,className:"".concat(g,"-nav-list"),style:{transform:"translate(".concat(S,"px, ").concat(V,"px)"),transition:Re?"none":void 0}},nt,a.createElement(Rt,{ref:E,prefixCls:g,locale:m,editable:s,style:te(te({},nt.length===0?void 0:Te),{},{visibility:lt?"hidden":null})}),a.createElement("div",{className:Z("".concat(g,"-ink-bar"),F({},"".concat(g,"-ink-bar-animated"),l.inkBar)),style:jt}))))),a.createElement(wa,ce({},e,{removeAriaLabel:m==null?void 0:m.removeAriaLabel,ref:x,prefixCls:g,tabs:it,className:!lt&&Mt,tabMoving:!!Re})),a.createElement(St,{ref:W,position:"right",extra:d,prefixCls:g})))}),Tt=a.forwardRef(function(e,t){var n=e.prefixCls,r=e.className,i=e.style,l=e.id,c=e.active,o=e.tabKey,d=e.children;return a.createElement("div",{id:l&&"".concat(l,"-panel-").concat(o),role:"tabpanel",tabIndex:c?0:-1,"aria-labelledby":l&&"".concat(l,"-tab-").concat(o),"aria-hidden":!c,style:i,className:Z(n,c&&"".concat(n,"-active"),r),ref:t},d)}),Ta=["renderTabBar"],Pa=["label","key"],Ia=function(t){var n=t.renderTabBar,r=Le(t,Ta),i=a.useContext(ze),l=i.tabs;if(n){var c=te(te({},r),{},{panes:l.map(function(o){var d=o.label,s=o.key,m=Le(o,Pa);return a.createElement(Tt,ce({tab:d,key:s,tabKey:s},m))})});return n(c,yt)}return a.createElement(yt,r)},Ma=["key","forceRender","style","className","destroyInactiveTabPane"],La=function(t){var n=t.id,r=t.activeKey,i=t.animated,l=t.tabPosition,c=t.destroyInactiveTabPane,o=a.useContext(ze),d=o.prefixCls,s=o.tabs,m=i.tabPane,b="".concat(d,"-tabpane");return a.createElement("div",{className:Z("".concat(d,"-content-holder"))},a.createElement("div",{className:Z("".concat(d,"-content"),"".concat(d,"-content-").concat(l),F({},"".concat(d,"-content-animated"),m))},s.map(function(_){var P=_.key,O=_.forceRender,C=_.style,D=_.className,p=_.destroyInactiveTabPane,g=Le(_,Ma),T=P===r;return a.createElement(Jt,ce({key:P,visible:T,forceRender:O,removeOnLeave:!!(c||p),leavedClassName:"".concat(b,"-hidden")},i.tabPaneMotion),function(B,A){var W=B.style,H=B.className;return a.createElement(Tt,ce({},g,{prefixCls:b,id:n,tabKey:P,animated:m,active:T,style:te(te({},C),W),className:Z(D,H),ref:A}))})})))};function za(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{inkBar:!0,tabPane:!1},t;return e===!1?t={inkBar:!1,tabPane:!1}:e===!0?t={inkBar:!0,tabPane:!1}:t=te({inkBar:!0},Xe(e)==="object"?e:{}),t.tabPaneMotion&&t.tabPane===void 0&&(t.tabPane=!0),!t.tabPaneMotion&&t.tabPane&&(t.tabPane=!1),t}var Da=["id","prefixCls","className","items","direction","activeKey","defaultActiveKey","editable","animated","tabPosition","tabBarGutter","tabBarStyle","tabBarExtraContent","locale","more","destroyInactiveTabPane","renderTabBar","onChange","onTabClick","onTabScroll","getPopupContainer","popupClassName","indicator"],_t=0,Na=a.forwardRef(function(e,t){var n=e.id,r=e.prefixCls,i=r===void 0?"rc-tabs":r,l=e.className,c=e.items,o=e.direction,d=e.activeKey,s=e.defaultActiveKey,m=e.editable,b=e.animated,_=e.tabPosition,P=_===void 0?"top":_,O=e.tabBarGutter,C=e.tabBarStyle,D=e.tabBarExtraContent,p=e.locale,g=e.more,T=e.destroyInactiveTabPane,B=e.renderTabBar,A=e.onChange,W=e.onTabClick,H=e.onTabScroll,z=e.getPopupContainer,x=e.popupClassName,E=e.indicator,f=Le(e,Da),y=a.useMemo(function(){return(c||[]).filter(function(M){return M&&Xe(M)==="object"&&"key"in M})},[c]),h=o==="rtl",S=za(b),K=a.useState(!1),X=I(K,2),v=X[0],V=X[1];a.useEffect(function(){V(ua())},[]);var ie=ft(function(){var M;return(M=y[0])===null||M===void 0?void 0:M.key},{value:d,defaultValue:s}),G=I(ie,2),q=G[0],se=G[1],w=a.useState(function(){return y.findIndex(function(M){return M.key===q})}),k=I(w,2),j=k[0],U=k[1];a.useEffect(function(){var M=y.findIndex(function(_e){return _e.key===q});if(M===-1){var oe;M=Math.max(0,Math.min(j,y.length-1)),se((oe=y[M])===null||oe===void 0?void 0:oe.key)}U(M)},[y.map(function(M){return M.key}).join("_"),q,j]);var Y=ft(null,{value:n}),ae=I(Y,2),Q=ae[0],me=ae[1];a.useEffect(function(){n||(me("rc-tabs-".concat(_t)),_t+=1)},[]);function de(M,oe){W==null||W(M,oe);var _e=M!==q;se(M),_e&&(A==null||A(M))}var ve={id:Q,activeKey:q,animated:S,tabPosition:P,rtl:h,mobile:v},ge=te(te({},ve),{},{editable:m,locale:p,more:g,tabBarGutter:O,onTabClick:de,onTabScroll:H,extra:D,style:C,panes:null,getPopupContainer:z,popupClassName:x,indicator:E});return a.createElement(ze.Provider,{value:{tabs:y,prefixCls:i}},a.createElement("div",ce({ref:t,id:n,className:Z(i,"".concat(i,"-").concat(P),F(F(F({},"".concat(i,"-mobile"),v),"".concat(i,"-editable"),m),"".concat(i,"-rtl"),h),l)},f),a.createElement(Ia,ce({},ge,{renderTabBar:B})),a.createElement(La,ce({destroyInactiveTabPane:T},ve,{animated:S}))))});const Oa={motionAppear:!1,motionEnter:!0,motionLeave:!0};function Ba(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{inkBar:!0,tabPane:!1},n;return t===!1?n={inkBar:!1,tabPane:!1}:t===!0?n={inkBar:!0,tabPane:!0}:n=Object.assign({inkBar:!0},typeof t=="object"?t:{}),n.tabPane&&(n.tabPaneMotion=Object.assign(Object.assign({},Oa),{motionName:ea(e,"switch")})),n}var ka=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n};function Aa(e){return e.filter(t=>t)}function Wa(e,t){if(e)return e;const n=ta(t).map(r=>{if(a.isValidElement(r)){const{key:i,props:l}=r,c=l||{},{tab:o}=c,d=ka(c,["tab"]);return Object.assign(Object.assign({key:String(i)},d),{label:o})}return null});return Aa(n)}const Ha=e=>{const{componentCls:t,motionDurationSlow:n}=e;return[{[t]:{["".concat(t,"-switch")]:{"&-appear, &-enter":{transition:"none","&-start":{opacity:0},"&-active":{opacity:1,transition:"opacity ".concat(n)}},"&-leave":{position:"absolute",transition:"none",inset:0,"&-start":{opacity:1},"&-active":{opacity:0,transition:"opacity ".concat(n)}}}}},[vt(e,"slide-up"),vt(e,"slide-down")]]},Ga=e=>{const{componentCls:t,tabsCardPadding:n,cardBg:r,cardGutter:i,colorBorderSecondary:l,itemSelectedColor:c}=e;return{["".concat(t,"-card")]:{["> ".concat(t,"-nav, > div > ").concat(t,"-nav")]:{["".concat(t,"-tab")]:{margin:0,padding:n,background:r,border:"".concat($(e.lineWidth)," ").concat(e.lineType," ").concat(l),transition:"all ".concat(e.motionDurationSlow," ").concat(e.motionEaseInOut)},["".concat(t,"-tab-active")]:{color:c,background:e.colorBgContainer},["".concat(t,"-tab-focus")]:Object.assign({},xt(e,-3)),["".concat(t,"-ink-bar")]:{visibility:"hidden"},["& ".concat(t,"-tab").concat(t,"-tab-focus ").concat(t,"-tab-btn")]:{outline:"none"}},["&".concat(t,"-top, &").concat(t,"-bottom")]:{["> ".concat(t,"-nav, > div > ").concat(t,"-nav")]:{["".concat(t,"-tab + ").concat(t,"-tab")]:{marginLeft:{_skip_check_:!0,value:$(i)}}}},["&".concat(t,"-top")]:{["> ".concat(t,"-nav, > div > ").concat(t,"-nav")]:{["".concat(t,"-tab")]:{borderRadius:"".concat($(e.borderRadiusLG)," ").concat($(e.borderRadiusLG)," 0 0")},["".concat(t,"-tab-active")]:{borderBottomColor:e.colorBgContainer}}},["&".concat(t,"-bottom")]:{["> ".concat(t,"-nav, > div > ").concat(t,"-nav")]:{["".concat(t,"-tab")]:{borderRadius:"0 0 ".concat($(e.borderRadiusLG)," ").concat($(e.borderRadiusLG))},["".concat(t,"-tab-active")]:{borderTopColor:e.colorBgContainer}}},["&".concat(t,"-left, &").concat(t,"-right")]:{["> ".concat(t,"-nav, > div > ").concat(t,"-nav")]:{["".concat(t,"-tab + ").concat(t,"-tab")]:{marginTop:$(i)}}},["&".concat(t,"-left")]:{["> ".concat(t,"-nav, > div > ").concat(t,"-nav")]:{["".concat(t,"-tab")]:{borderRadius:{_skip_check_:!0,value:"".concat($(e.borderRadiusLG)," 0 0 ").concat($(e.borderRadiusLG))}},["".concat(t,"-tab-active")]:{borderRightColor:{_skip_check_:!0,value:e.colorBgContainer}}}},["&".concat(t,"-right")]:{["> ".concat(t,"-nav, > div > ").concat(t,"-nav")]:{["".concat(t,"-tab")]:{borderRadius:{_skip_check_:!0,value:"0 ".concat($(e.borderRadiusLG)," ").concat($(e.borderRadiusLG)," 0")}},["".concat(t,"-tab-active")]:{borderLeftColor:{_skip_check_:!0,value:e.colorBgContainer}}}}}}},ja=e=>{const{componentCls:t,itemHoverColor:n,dropdownEdgeChildVerticalPadding:r}=e;return{["".concat(t,"-dropdown")]:Object.assign(Object.assign({},Ct(e)),{position:"absolute",top:-9999,left:{_skip_check_:!0,value:-9999},zIndex:e.zIndexPopup,display:"block","&-hidden":{display:"none"},["".concat(t,"-dropdown-menu")]:{maxHeight:e.tabsDropdownHeight,margin:0,padding:"".concat($(r)," 0"),overflowX:"hidden",overflowY:"auto",textAlign:{_skip_check_:!0,value:"left"},listStyleType:"none",backgroundColor:e.colorBgContainer,backgroundClip:"padding-box",borderRadius:e.borderRadiusLG,outline:"none",boxShadow:e.boxShadowSecondary,"&-item":Object.assign(Object.assign({},ra),{display:"flex",alignItems:"center",minWidth:e.tabsDropdownWidth,margin:0,padding:"".concat($(e.paddingXXS)," ").concat($(e.paddingSM)),color:e.colorText,fontWeight:"normal",fontSize:e.fontSize,lineHeight:e.lineHeight,cursor:"pointer",transition:"all ".concat(e.motionDurationSlow),"> span":{flex:1,whiteSpace:"nowrap"},"&-remove":{flex:"none",marginLeft:{_skip_check_:!0,value:e.marginSM},color:e.colorTextDescription,fontSize:e.fontSizeSM,background:"transparent",border:0,cursor:"pointer","&:hover":{color:n}},"&:hover":{background:e.controlItemBgHover},"&-disabled":{"&, &:hover":{color:e.colorTextDisabled,background:"transparent",cursor:"not-allowed"}}})}})}},Ka=e=>{const{componentCls:t,margin:n,colorBorderSecondary:r,horizontalMargin:i,verticalItemPadding:l,verticalItemMargin:c,calc:o}=e;return{["".concat(t,"-top, ").concat(t,"-bottom")]:{flexDirection:"column",["> ".concat(t,"-nav, > div > ").concat(t,"-nav")]:{margin:i,"&::before":{position:"absolute",right:{_skip_check_:!0,value:0},left:{_skip_check_:!0,value:0},borderBottom:"".concat($(e.lineWidth)," ").concat(e.lineType," ").concat(r),content:"''"},["".concat(t,"-ink-bar")]:{height:e.lineWidthBold,"&-animated":{transition:"width ".concat(e.motionDurationSlow,", left ").concat(e.motionDurationSlow,",\n            right ").concat(e.motionDurationSlow)}},["".concat(t,"-nav-wrap")]:{"&::before, &::after":{top:0,bottom:0,width:e.controlHeight},"&::before":{left:{_skip_check_:!0,value:0},boxShadow:e.boxShadowTabsOverflowLeft},"&::after":{right:{_skip_check_:!0,value:0},boxShadow:e.boxShadowTabsOverflowRight},["&".concat(t,"-nav-wrap-ping-left::before")]:{opacity:1},["&".concat(t,"-nav-wrap-ping-right::after")]:{opacity:1}}}},["".concat(t,"-top")]:{["> ".concat(t,"-nav,\n        > div > ").concat(t,"-nav")]:{"&::before":{bottom:0},["".concat(t,"-ink-bar")]:{bottom:0}}},["".concat(t,"-bottom")]:{["> ".concat(t,"-nav, > div > ").concat(t,"-nav")]:{order:1,marginTop:n,marginBottom:0,"&::before":{top:0},["".concat(t,"-ink-bar")]:{top:0}},["> ".concat(t,"-content-holder, > div > ").concat(t,"-content-holder")]:{order:0}},["".concat(t,"-left, ").concat(t,"-right")]:{["> ".concat(t,"-nav, > div > ").concat(t,"-nav")]:{flexDirection:"column",minWidth:o(e.controlHeight).mul(1.25).equal(),["".concat(t,"-tab")]:{padding:l,textAlign:"center"},["".concat(t,"-tab + ").concat(t,"-tab")]:{margin:c},["".concat(t,"-nav-wrap")]:{flexDirection:"column","&::before, &::after":{right:{_skip_check_:!0,value:0},left:{_skip_check_:!0,value:0},height:e.controlHeight},"&::before":{top:0,boxShadow:e.boxShadowTabsOverflowTop},"&::after":{bottom:0,boxShadow:e.boxShadowTabsOverflowBottom},["&".concat(t,"-nav-wrap-ping-top::before")]:{opacity:1},["&".concat(t,"-nav-wrap-ping-bottom::after")]:{opacity:1}},["".concat(t,"-ink-bar")]:{width:e.lineWidthBold,"&-animated":{transition:"height ".concat(e.motionDurationSlow,", top ").concat(e.motionDurationSlow)}},["".concat(t,"-nav-list, ").concat(t,"-nav-operations")]:{flex:"1 0 auto",flexDirection:"column"}}},["".concat(t,"-left")]:{["> ".concat(t,"-nav, > div > ").concat(t,"-nav")]:{["".concat(t,"-ink-bar")]:{right:{_skip_check_:!0,value:0}}},["> ".concat(t,"-content-holder, > div > ").concat(t,"-content-holder")]:{marginLeft:{_skip_check_:!0,value:$(o(e.lineWidth).mul(-1).equal())},borderLeft:{_skip_check_:!0,value:"".concat($(e.lineWidth)," ").concat(e.lineType," ").concat(e.colorBorder)},["> ".concat(t,"-content > ").concat(t,"-tabpane")]:{paddingLeft:{_skip_check_:!0,value:e.paddingLG}}}},["".concat(t,"-right")]:{["> ".concat(t,"-nav, > div > ").concat(t,"-nav")]:{order:1,["".concat(t,"-ink-bar")]:{left:{_skip_check_:!0,value:0}}},["> ".concat(t,"-content-holder, > div > ").concat(t,"-content-holder")]:{order:0,marginRight:{_skip_check_:!0,value:o(e.lineWidth).mul(-1).equal()},borderRight:{_skip_check_:!0,value:"".concat($(e.lineWidth)," ").concat(e.lineType," ").concat(e.colorBorder)},["> ".concat(t,"-content > ").concat(t,"-tabpane")]:{paddingRight:{_skip_check_:!0,value:e.paddingLG}}}}}},Xa=e=>{const{componentCls:t,cardPaddingSM:n,cardPaddingLG:r,horizontalItemPaddingSM:i,horizontalItemPaddingLG:l}=e;return{[t]:{"&-small":{["> ".concat(t,"-nav")]:{["".concat(t,"-tab")]:{padding:i,fontSize:e.titleFontSizeSM}}},"&-large":{["> ".concat(t,"-nav")]:{["".concat(t,"-tab")]:{padding:l,fontSize:e.titleFontSizeLG}}}},["".concat(t,"-card")]:{["&".concat(t,"-small")]:{["> ".concat(t,"-nav")]:{["".concat(t,"-tab")]:{padding:n}},["&".concat(t,"-bottom")]:{["> ".concat(t,"-nav ").concat(t,"-tab")]:{borderRadius:"0 0 ".concat($(e.borderRadius)," ").concat($(e.borderRadius))}},["&".concat(t,"-top")]:{["> ".concat(t,"-nav ").concat(t,"-tab")]:{borderRadius:"".concat($(e.borderRadius)," ").concat($(e.borderRadius)," 0 0")}},["&".concat(t,"-right")]:{["> ".concat(t,"-nav ").concat(t,"-tab")]:{borderRadius:{_skip_check_:!0,value:"0 ".concat($(e.borderRadius)," ").concat($(e.borderRadius)," 0")}}},["&".concat(t,"-left")]:{["> ".concat(t,"-nav ").concat(t,"-tab")]:{borderRadius:{_skip_check_:!0,value:"".concat($(e.borderRadius)," 0 0 ").concat($(e.borderRadius))}}}},["&".concat(t,"-large")]:{["> ".concat(t,"-nav")]:{["".concat(t,"-tab")]:{padding:r}}}}}},Va=e=>{const{componentCls:t,itemActiveColor:n,itemHoverColor:r,iconCls:i,tabsHorizontalItemMargin:l,horizontalItemPadding:c,itemSelectedColor:o,itemColor:d}=e,s="".concat(t,"-tab");return{[s]:{position:"relative",WebkitTouchCallout:"none",WebkitTapHighlightColor:"transparent",display:"inline-flex",alignItems:"center",padding:c,fontSize:e.titleFontSize,background:"transparent",border:0,outline:"none",cursor:"pointer",color:d,"&-btn, &-remove":{"&:focus:not(:focus-visible), &:active":{color:n}},"&-btn":{outline:"none",transition:"all ".concat(e.motionDurationSlow),["".concat(s,"-icon:not(:last-child)")]:{marginInlineEnd:e.marginSM}},"&-remove":Object.assign({flex:"none",marginRight:{_skip_check_:!0,value:e.calc(e.marginXXS).mul(-1).equal()},marginLeft:{_skip_check_:!0,value:e.marginXS},color:e.colorTextDescription,fontSize:e.fontSizeSM,background:"transparent",border:"none",outline:"none",cursor:"pointer",transition:"all ".concat(e.motionDurationSlow),"&:hover":{color:e.colorTextHeading}},Ke(e)),"&:hover":{color:r},["&".concat(s,"-active ").concat(s,"-btn")]:{color:o,textShadow:e.tabsActiveTextShadow},["&".concat(s,"-focus ").concat(s,"-btn")]:Object.assign({},xt(e)),["&".concat(s,"-disabled")]:{color:e.colorTextDisabled,cursor:"not-allowed"},["&".concat(s,"-disabled ").concat(s,"-btn, &").concat(s,"-disabled ").concat(t,"-remove")]:{"&:focus, &:active":{color:e.colorTextDisabled}},["& ".concat(s,"-remove ").concat(i)]:{margin:0},["".concat(i,":not(:last-child)")]:{marginRight:{_skip_check_:!0,value:e.marginSM}}},["".concat(s," + ").concat(s)]:{margin:{_skip_check_:!0,value:l}}}},Ua=e=>{const{componentCls:t,tabsHorizontalItemMarginRTL:n,iconCls:r,cardGutter:i,calc:l}=e;return{["".concat(t,"-rtl")]:{direction:"rtl",["".concat(t,"-nav")]:{["".concat(t,"-tab")]:{margin:{_skip_check_:!0,value:n},["".concat(t,"-tab:last-of-type")]:{marginLeft:{_skip_check_:!0,value:0}},[r]:{marginRight:{_skip_check_:!0,value:0},marginLeft:{_skip_check_:!0,value:$(e.marginSM)}},["".concat(t,"-tab-remove")]:{marginRight:{_skip_check_:!0,value:$(e.marginXS)},marginLeft:{_skip_check_:!0,value:$(l(e.marginXXS).mul(-1).equal())},[r]:{margin:0}}}},["&".concat(t,"-left")]:{["> ".concat(t,"-nav")]:{order:1},["> ".concat(t,"-content-holder")]:{order:0}},["&".concat(t,"-right")]:{["> ".concat(t,"-nav")]:{order:0},["> ".concat(t,"-content-holder")]:{order:1}},["&".concat(t,"-card").concat(t,"-top, &").concat(t,"-card").concat(t,"-bottom")]:{["> ".concat(t,"-nav, > div > ").concat(t,"-nav")]:{["".concat(t,"-tab + ").concat(t,"-tab")]:{marginRight:{_skip_check_:!0,value:i},marginLeft:{_skip_check_:!0,value:0}}}}},["".concat(t,"-dropdown-rtl")]:{direction:"rtl"},["".concat(t,"-menu-item")]:{["".concat(t,"-dropdown-rtl")]:{textAlign:{_skip_check_:!0,value:"right"}}}}},Fa=e=>{const{componentCls:t,tabsCardPadding:n,cardHeight:r,cardGutter:i,itemHoverColor:l,itemActiveColor:c,colorBorderSecondary:o}=e;return{[t]:Object.assign(Object.assign(Object.assign(Object.assign({},Ct(e)),{display:"flex",["> ".concat(t,"-nav, > div > ").concat(t,"-nav")]:{position:"relative",display:"flex",flex:"none",alignItems:"center",["".concat(t,"-nav-wrap")]:{position:"relative",display:"flex",flex:"auto",alignSelf:"stretch",overflow:"hidden",whiteSpace:"nowrap",transform:"translate(0)","&::before, &::after":{position:"absolute",zIndex:1,opacity:0,transition:"opacity ".concat(e.motionDurationSlow),content:"''",pointerEvents:"none"}},["".concat(t,"-nav-list")]:{position:"relative",display:"flex",transition:"opacity ".concat(e.motionDurationSlow)},["".concat(t,"-nav-operations")]:{display:"flex",alignSelf:"stretch"},["".concat(t,"-nav-operations-hidden")]:{position:"absolute",visibility:"hidden",pointerEvents:"none"},["".concat(t,"-nav-more")]:{position:"relative",padding:n,background:"transparent",border:0,color:e.colorText,"&::after":{position:"absolute",right:{_skip_check_:!0,value:0},bottom:0,left:{_skip_check_:!0,value:0},height:e.calc(e.controlHeightLG).div(8).equal(),transform:"translateY(100%)",content:"''"}},["".concat(t,"-nav-add")]:Object.assign({minWidth:r,marginLeft:{_skip_check_:!0,value:i},padding:$(e.paddingXS),background:"transparent",border:"".concat($(e.lineWidth)," ").concat(e.lineType," ").concat(o),borderRadius:"".concat($(e.borderRadiusLG)," ").concat($(e.borderRadiusLG)," 0 0"),outline:"none",cursor:"pointer",color:e.colorText,transition:"all ".concat(e.motionDurationSlow," ").concat(e.motionEaseInOut),"&:hover":{color:l},"&:active, &:focus:not(:focus-visible)":{color:c}},Ke(e,-3))},["".concat(t,"-extra-content")]:{flex:"none"},["".concat(t,"-ink-bar")]:{position:"absolute",background:e.inkBarColor,pointerEvents:"none"}}),Va(e)),{["".concat(t,"-content")]:{position:"relative",width:"100%"},["".concat(t,"-content-holder")]:{flex:"auto",minWidth:0,minHeight:0},["".concat(t,"-tabpane")]:Object.assign(Object.assign({},Ke(e)),{"&-hidden":{display:"none"}})}),["".concat(t,"-centered")]:{["> ".concat(t,"-nav, > div > ").concat(t,"-nav")]:{["".concat(t,"-nav-wrap")]:{["&:not([class*='".concat(t,"-nav-wrap-ping']) > ").concat(t,"-nav-list")]:{margin:"auto"}}}}}},qa=e=>{const t=e.controlHeightLG;return{zIndexPopup:e.zIndexPopupBase+50,cardBg:e.colorFillAlter,cardHeight:t,cardPadding:"".concat((t-Math.round(e.fontSize*e.lineHeight))/2-e.lineWidth,"px ").concat(e.padding,"px"),cardPaddingSM:"".concat(e.paddingXXS*1.5,"px ").concat(e.padding,"px"),cardPaddingLG:"".concat(e.paddingXS,"px ").concat(e.padding,"px ").concat(e.paddingXXS*1.5,"px"),titleFontSize:e.fontSize,titleFontSizeLG:e.fontSizeLG,titleFontSizeSM:e.fontSize,inkBarColor:e.colorPrimary,horizontalMargin:"0 0 ".concat(e.margin,"px 0"),horizontalItemGutter:32,horizontalItemMargin:"",horizontalItemMarginRTL:"",horizontalItemPadding:"".concat(e.paddingSM,"px 0"),horizontalItemPaddingSM:"".concat(e.paddingXS,"px 0"),horizontalItemPaddingLG:"".concat(e.padding,"px 0"),verticalItemPadding:"".concat(e.paddingXS,"px ").concat(e.paddingLG,"px"),verticalItemMargin:"".concat(e.margin,"px 0 0 0"),itemColor:e.colorText,itemSelectedColor:e.colorPrimary,itemHoverColor:e.colorPrimaryHover,itemActiveColor:e.colorPrimaryActive,cardGutter:e.marginXXS/2}},Ya=aa("Tabs",e=>{const t=na(e,{tabsCardPadding:e.cardPadding,dropdownEdgeChildVerticalPadding:e.paddingXXS,tabsActiveTextShadow:"0 0 0.25px currentcolor",tabsDropdownHeight:200,tabsDropdownWidth:120,tabsHorizontalItemMargin:"0 0 0 ".concat($(e.horizontalItemGutter)),tabsHorizontalItemMarginRTL:"0 0 0 ".concat($(e.horizontalItemGutter))});return[Xa(t),Ua(t),Ka(t),ja(t),Ga(t),Fa(t),Ha(t)]},qa),Za=()=>null;var Qa=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n};const Ja=e=>{var t,n,r,i,l,c,o,d,s,m,b;const{type:_,className:P,rootClassName:O,size:C,onEdit:D,hideAdd:p,centered:g,addIcon:T,removeIcon:B,moreIcon:A,more:W,popupClassName:H,children:z,items:x,animated:E,style:f,indicatorSize:y,indicator:h}=e,S=Qa(e,["type","className","rootClassName","size","onEdit","hideAdd","centered","addIcon","removeIcon","moreIcon","more","popupClassName","children","items","animated","style","indicatorSize","indicator"]),{prefixCls:K}=S,{direction:X,tabs:v,getPrefixCls:V,getPopupContainer:ie}=a.useContext(ia),G=V("tabs",K),q=oa(G),[se,w,k]=Ya(G,q);let j;_==="editable-card"&&(j={onEdit:(ve,ge)=>{let{key:M,event:oe}=ge;D==null||D(ve==="add"?oe:M,ve)},removeIcon:(t=B!=null?B:v==null?void 0:v.removeIcon)!==null&&t!==void 0?t:a.createElement(la,null),addIcon:(T!=null?T:v==null?void 0:v.addIcon)||a.createElement(ga,null),showAdd:p!==!0});const U=V(),Y=ca(C),ae=Wa(x,z),Q=Ba(G,E),me=Object.assign(Object.assign({},v==null?void 0:v.style),f),de={align:(n=h==null?void 0:h.align)!==null&&n!==void 0?n:(r=v==null?void 0:v.indicator)===null||r===void 0?void 0:r.align,size:(o=(l=(i=h==null?void 0:h.size)!==null&&i!==void 0?i:y)!==null&&l!==void 0?l:(c=v==null?void 0:v.indicator)===null||c===void 0?void 0:c.size)!==null&&o!==void 0?o:v==null?void 0:v.indicatorSize};return se(a.createElement(Na,Object.assign({direction:X,getPopupContainer:ie},S,{items:ae,className:Z({["".concat(G,"-").concat(Y)]:Y,["".concat(G,"-card")]:["card","editable-card"].includes(_),["".concat(G,"-editable-card")]:_==="editable-card",["".concat(G,"-centered")]:g},v==null?void 0:v.className,P,O,w,k,q),popupClassName:Z(H,w,k,q),style:me,editable:j,more:Object.assign({icon:(b=(m=(s=(d=v==null?void 0:v.more)===null||d===void 0?void 0:d.icon)!==null&&s!==void 0?s:v==null?void 0:v.moreIcon)!==null&&m!==void 0?m:A)!==null&&b!==void 0?b:a.createElement(fa,null),transitionName:"".concat(U,"-slide-up")},W),prefixCls:G,animated:Q,indicator:de})))};Ja.TabPane=Za;export{Ja as T};
