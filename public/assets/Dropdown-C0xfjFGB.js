import{r as b,w as ee,W,v as L,$ as n,s as $,n as te,j as ne,o as S,g as ae,X as re}from"./index-COYbw2nA.js";import{l as oe}from"./MyApp-BqOFGx1Y.js";var ie=W.ESC,le=W.TAB;function se(e){var u=e.visible,o=e.triggerRef,s=e.onVisibleChange,c=e.autoFocus,a=e.overlayRef,r=b.useRef(!1),f=function(){if(u){var t,i;(t=o.current)===null||t===void 0||(i=t.focus)===null||i===void 0||i.call(t),s==null||s(!1)}},p=function(){var t;return(t=a.current)!==null&&t!==void 0&&t.focus?(a.current.focus(),r.current=!0,!0):!1},h=function(t){switch(t.keyCode){case ie:f();break;case le:{var i=!1;r.current||(i=p()),i?t.preventDefault():f();break}}};b.useEffect(function(){return u?(window.addEventListener("keydown",h),c&&ee(p,3),function(){window.removeEventListener("keydown",h),r.current=!1}):function(){r.current=!1}},[u])}var fe=b.forwardRef(function(e,u){var o=e.overlay,s=e.arrow,c=e.prefixCls,a=b.useMemo(function(){var f;return typeof o=="function"?f=o():f=o,f},[o]),r=L(u,a==null?void 0:a.ref);return n.createElement(n.Fragment,null,s&&n.createElement("div",{className:"".concat(c,"-arrow")}),n.cloneElement(a,{ref:$(a)?r:void 0}))}),v={adjustX:1,adjustY:1},d=[0,0],ue={topLeft:{points:["bl","tl"],overflow:v,offset:[0,-4],targetOffset:d},top:{points:["bc","tc"],overflow:v,offset:[0,-4],targetOffset:d},topRight:{points:["br","tr"],overflow:v,offset:[0,-4],targetOffset:d},bottomLeft:{points:["tl","bl"],overflow:v,offset:[0,4],targetOffset:d},bottom:{points:["tc","bc"],overflow:v,offset:[0,4],targetOffset:d},bottomRight:{points:["tr","br"],overflow:v,offset:[0,4],targetOffset:d}},ce=["arrow","prefixCls","transitionName","animation","align","placement","placements","getPopupContainer","showAction","hideAction","overlayClassName","overlayStyle","visible","trigger","autoFocus","overlay","children","onVisibleChange"];function ve(e,u){var o,s=e.arrow,c=s===void 0?!1:s,a=e.prefixCls,r=a===void 0?"rc-dropdown":a,f=e.transitionName,p=e.animation,h=e.align,g=e.placement,t=g===void 0?"bottomLeft":g,i=e.placements,D=i===void 0?ue:i,j=e.getPopupContainer,_=e.showAction,K=e.hideAction,B=e.overlayClassName,H=e.overlayStyle,X=e.visible,A=e.trigger,M=A===void 0?["hover"]:A,I=e.autoFocus,N=e.overlay,y=e.children,w=e.onVisibleChange,Y=te(e,ce),q=n.useState(),E=ne(q,2),z=E[0],x=E[1],O="visible"in e?X:z,P=n.useRef(null),V=n.useRef(null),k=n.useRef(null);n.useImperativeHandle(u,function(){return P.current});var T=function(l){x(l),w==null||w(l)};se({visible:O,triggerRef:k,onVisibleChange:T,autoFocus:I,overlayRef:V});var G=function(l){var C=e.onOverlayClick;x(!1),C&&C(l)},F=function(){return n.createElement(fe,{ref:V,overlay:N,prefixCls:r,arrow:c})},J=function(){return typeof N=="function"?F:F()},Q=function(){var l=e.minOverlayWidthMatchTrigger,C=e.alignPoint;return"minOverlayWidthMatchTrigger"in e?l:!C},U=function(){var l=e.openClassName;return l!==void 0?l:"".concat(r,"-open")},Z=n.cloneElement(y,{className:S((o=y.props)===null||o===void 0?void 0:o.className,O&&U()),ref:$(y)?L(k,y.ref):void 0}),R=K;return!R&&M.indexOf("contextMenu")!==-1&&(R=["click"]),n.createElement(oe,ae({builtinPlacements:D},Y,{prefixCls:r,ref:P,popupClassName:S(B,re({},"".concat(r,"-show-arrow"),c)),popupStyle:H,action:M,showAction:_,hideAction:R,popupPlacement:t,popupAlign:h,popupTransitionName:f,popupAnimation:p,popupVisible:O,stretch:Q()?"minWidth":"",popup:J(),onPopupVisibleChange:T,onPopupClick:G,getPopupContainer:j}),Z)}const me=n.forwardRef(ve);export{me as D};