System.register(["./index-legacy-Bl2rtZQd.js","./MyApp-legacy-DZNFeqVR.js","./Dropdown-legacy-CvaA3Mw7.js","./PurePanel-legacy-_wpVrNda.js","./move-legacy-BsZzzHFy.js"],(function(e,n){"use strict";var o,t,a,l,i,r,s,d,c,p,u,m,g,b,$,v,y,w,f,C,h,S,x,O,P,E,j,z,N,I,D,R,k,L,T,A,H,X;return{setters:[e=>{o=e.G,t=e.H,a=e.J,l=e.L,i=e.af,r=e.F,s=e.r,d=e.M,c=e.Q,p=e.a9,u=e.N,m=e.V,g=e.p,b=e.l,$=e.T,v=e.a2,y=e.W,w=e.bO,f=e.b0},e=>{C=e.X,h=e.W,S=e.Z,x=e.Y,O=e.a8,P=e.V,E=e.a9,j=e.U,z=e.o,N=e.ab,I=e.a4,D=e.a5,R=e.ac,k=e.ad,L=e.a2,T=e.S},e=>{A=e.D},e=>{H=e.g},e=>{X=e.i}],execute:function(){const n=e=>{const{componentCls:n,menuCls:o,colorError:t,colorTextLightSolid:a}=e,l=`${o}-item`;return{[`${n}, ${n}-menu-submenu`]:{[`${o} ${l}`]:{[`&${l}-danger:not(${l}-disabled)`]:{color:t,"&:hover":{color:a,backgroundColor:t}}}}}},B=e=>{const{componentCls:n,menuCls:o,zIndexPopup:t,dropdownArrowDistance:s,sizePopupArrow:d,antCls:c,iconCls:p,motionDurationMid:u,paddingBlock:m,fontSize:g,dropdownEdgeChildPadding:b,colorTextDisabled:$,fontSizeIcon:v,controlPaddingHorizontal:y,colorBgElevated:w}=e;return[{[n]:{position:"absolute",top:-9999,left:{_skip_check_:!0,value:-9999},zIndex:t,display:"block","&::before":{position:"absolute",insetBlock:e.calc(d).div(2).sub(s).equal(),zIndex:-9999,opacity:1e-4,content:'""'},"&-menu-vertical":{maxHeight:"100vh",overflowY:"auto"},[`&-trigger${c}-btn`]:{[`& > ${p}-down, & > ${c}-btn-icon > ${p}-down`]:{fontSize:v}},[`${n}-wrap`]:{position:"relative",[`${c}-btn > ${p}-down`]:{fontSize:v},[`${p}-down::before`]:{transition:`transform ${u}`}},[`${n}-wrap-open`]:{[`${p}-down::before`]:{transform:"rotate(180deg)"}},"\n        &-hidden,\n        &-menu-hidden,\n        &-menu-submenu-hidden\n      ":{display:"none"},[`&${c}-slide-down-enter${c}-slide-down-enter-active${n}-placement-bottomLeft,\n          &${c}-slide-down-appear${c}-slide-down-appear-active${n}-placement-bottomLeft,\n          &${c}-slide-down-enter${c}-slide-down-enter-active${n}-placement-bottom,\n          &${c}-slide-down-appear${c}-slide-down-appear-active${n}-placement-bottom,\n          &${c}-slide-down-enter${c}-slide-down-enter-active${n}-placement-bottomRight,\n          &${c}-slide-down-appear${c}-slide-down-appear-active${n}-placement-bottomRight`]:{animationName:x},[`&${c}-slide-up-enter${c}-slide-up-enter-active${n}-placement-topLeft,\n          &${c}-slide-up-appear${c}-slide-up-appear-active${n}-placement-topLeft,\n          &${c}-slide-up-enter${c}-slide-up-enter-active${n}-placement-top,\n          &${c}-slide-up-appear${c}-slide-up-appear-active${n}-placement-top,\n          &${c}-slide-up-enter${c}-slide-up-enter-active${n}-placement-topRight,\n          &${c}-slide-up-appear${c}-slide-up-appear-active${n}-placement-topRight`]:{animationName:S},[`&${c}-slide-down-leave${c}-slide-down-leave-active${n}-placement-bottomLeft,\n          &${c}-slide-down-leave${c}-slide-down-leave-active${n}-placement-bottom,\n          &${c}-slide-down-leave${c}-slide-down-leave-active${n}-placement-bottomRight`]:{animationName:h},[`&${c}-slide-up-leave${c}-slide-up-leave-active${n}-placement-topLeft,\n          &${c}-slide-up-leave${c}-slide-up-leave-active${n}-placement-top,\n          &${c}-slide-up-leave${c}-slide-up-leave-active${n}-placement-topRight`]:{animationName:C}}},O(e,w,{arrowPlacement:{top:!0,bottom:!0}}),{[`${n} ${o}`]:{position:"relative",margin:0},[`${o}-submenu-popup`]:{position:"absolute",zIndex:t,background:"transparent",boxShadow:"none",transformOrigin:"0 0","ul, li":{listStyle:"none",margin:0}},[`${n}, ${n}-menu-submenu`]:Object.assign(Object.assign({},l(e)),{[o]:Object.assign(Object.assign({padding:b,listStyleType:"none",backgroundColor:w,backgroundClip:"padding-box",borderRadius:e.borderRadiusLG,outline:"none",boxShadow:e.boxShadowSecondary},i(e)),{"&:empty":{padding:0,boxShadow:"none"},[`${o}-item-group-title`]:{padding:`${r(m)} ${r(y)}`,color:e.colorTextDescription,transition:`all ${u}`},[`${o}-item`]:{position:"relative",display:"flex",alignItems:"center"},[`${o}-item-icon`]:{minWidth:g,marginInlineEnd:e.marginXS,fontSize:e.fontSizeSM},[`${o}-title-content`]:{flex:"auto","&-with-extra":{display:"inline-flex",alignItems:"center",width:"100%"},"> a":{color:"inherit",transition:`all ${u}`,"&:hover":{color:"inherit"},"&::after":{position:"absolute",inset:0,content:'""'}},[`${o}-item-extra`]:{paddingInlineStart:e.padding,marginInlineStart:"auto",fontSize:e.fontSizeSM,color:e.colorTextDescription}},[`${o}-item, ${o}-submenu-title`]:Object.assign(Object.assign({display:"flex",margin:0,padding:`${r(m)} ${r(y)}`,color:e.colorText,fontWeight:"normal",fontSize:g,lineHeight:e.lineHeight,cursor:"pointer",transition:`all ${u}`,borderRadius:e.borderRadiusSM,"&:hover, &-active":{backgroundColor:e.controlItemBgHover}},i(e)),{"&-selected":{color:e.colorPrimary,backgroundColor:e.controlItemBgActive,"&:hover, &-active":{backgroundColor:e.controlItemBgActiveHover}},"&-disabled":{color:$,cursor:"not-allowed","&:hover":{color:$,backgroundColor:w,cursor:"not-allowed"},a:{pointerEvents:"none"}},"&-divider":{height:1,margin:`${r(e.marginXXS)} 0`,overflow:"hidden",lineHeight:0,backgroundColor:e.colorSplit},[`${n}-menu-submenu-expand-icon`]:{position:"absolute",insetInlineEnd:e.paddingXS,[`${n}-menu-submenu-arrow-icon`]:{marginInlineEnd:"0 !important",color:e.colorTextDescription,fontSize:v,fontStyle:"normal"}}}),[`${o}-item-group-list`]:{margin:`0 ${r(e.marginXS)}`,padding:0,listStyle:"none"},[`${o}-submenu-title`]:{paddingInlineEnd:e.calc(y).add(e.fontSizeSM).equal()},[`${o}-submenu-vertical`]:{position:"relative"},[`${o}-submenu${o}-submenu-disabled ${n}-menu-submenu-title`]:{[`&, ${n}-menu-submenu-arrow-icon`]:{color:$,backgroundColor:w,cursor:"not-allowed"}},[`${o}-submenu-selected ${n}-menu-submenu-title`]:{color:e.colorPrimary}})})},[P(e,"slide-up"),P(e,"slide-down"),X(e,"move-up"),X(e,"move-down"),a(e,"zoom-big")]]},M=o("Dropdown",(e=>{const{marginXXS:o,sizePopupArrow:a,paddingXXS:l,componentCls:i}=e,r=t(e,{menuCls:`${i}-menu`,dropdownArrowDistance:e.calc(a).div(2).add(o).equal(),dropdownEdgeChildPadding:l});return[B(r),n(r)]}),(e=>Object.assign(Object.assign({zIndexPopup:e.zIndexPopupBase+50,paddingBlock:(e.controlHeight-e.fontSize*e.lineHeight)/2},E({contentRadius:e.borderRadiusLG,limitVerticalRadius:!0})),j(e))),{resetStyle:!1}),_=e=>{var n;const{menu:o,arrow:t,prefixCls:a,children:l,trigger:i,disabled:r,dropdownRender:w,getPopupContainer:f,overlayClassName:C,rootClassName:h,overlayStyle:S,open:x,onOpenChange:O,visible:P,onVisibleChange:E,mouseEnterDelay:j=.15,mouseLeaveDelay:L=.1,autoAdjustOverflow:T=!0,placement:H="",overlay:X,transitionName:B}=e,{getPopupContainer:_,getPrefixCls:W,direction:V,dropdown:F}=s.useContext(d);c();const q=s.useMemo((()=>{const e=W();return void 0!==B?B:H.includes("top")?`${e}-slide-down`:`${e}-slide-up`}),[W,H,B]),G=s.useMemo((()=>H?H.includes("Center")?H.slice(0,H.indexOf("Center")):H:"rtl"===V?"bottomRight":"bottomLeft"),[H,V]),U=W("dropdown",a),Y=p(U),[J,Q,Z]=M(U,Y),[,K]=u(),ee=s.Children.only("object"!=typeof(ne=l)&&"function"!=typeof ne||null===ne?s.createElement("span",null,l):l);var ne;const oe=m(ee,{className:g(`${U}-trigger`,{[`${U}-rtl`]:"rtl"===V},ee.props.className),disabled:null!==(n=ee.props.disabled)&&void 0!==n?n:r}),te=r?[]:i,ae=!!(null==te?void 0:te.includes("contextMenu")),[le,ie]=z(!1,{value:null!=x?x:P}),re=b((e=>{null==O||O(e,{source:"trigger"}),null==E||E(e),ie(e)})),se=g(C,h,Q,Z,Y,null==F?void 0:F.className,{[`${U}-rtl`]:"rtl"===V}),de=N({arrowPointAtCenter:"object"==typeof t&&t.pointAtCenter,autoAdjustOverflow:T,offset:K.marginXXS,arrowWidth:t?K.sizePopupArrow:0,borderRadius:K.borderRadius}),ce=s.useCallback((()=>{(null==o?void 0:o.selectable)&&(null==o?void 0:o.multiple)||(null==O||O(!1,{source:"menu"}),ie(!1))}),[null==o?void 0:o.selectable,null==o?void 0:o.multiple]),[pe,ue]=$("Dropdown",null==S?void 0:S.zIndex);let me=s.createElement(A,Object.assign({alignPoint:ae},v(e,["rootClassName"]),{mouseEnterDelay:j,mouseLeaveDelay:L,visible:le,builtinPlacements:de,arrow:!!t,overlayClassName:se,prefixCls:U,getPopupContainer:f||_,transitionName:q,trigger:te,overlay:()=>{let e;return e=(null==o?void 0:o.items)?s.createElement(I,Object.assign({},o)):"function"==typeof X?X():X,w&&(e=w(e)),e=s.Children.only("string"==typeof e?s.createElement("span",null,e):e),s.createElement(D,{prefixCls:`${U}-menu`,rootClassName:g(Z,Y),expandIcon:s.createElement("span",{className:`${U}-menu-submenu-arrow`},"rtl"===V?s.createElement(R,{className:`${U}-menu-submenu-arrow-icon`}):s.createElement(k,{className:`${U}-menu-submenu-arrow-icon`})),mode:"vertical",selectable:!1,onClick:ce,validator:e=>{let{mode:n}=e}},e)},placement:G,onVisibleChange:re,overlayStyle:Object.assign(Object.assign(Object.assign({},null==F?void 0:F.style),S),{zIndex:pe})}),oe);return pe&&(me=s.createElement(y.Provider,{value:ue},me)),J(me)},W=H(_,"align",void 0,"dropdown",(e=>e));_._InternalPanelDoNotUseOrYouWillBeFired=e=>s.createElement(W,Object.assign({},e),s.createElement("span",null));var V=function(e,n){var o={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(o[t]=e[t]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(t=Object.getOwnPropertySymbols(e);a<t.length;a++)n.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(o[t[a]]=e[t[a]])}return o};const F=e=>{const{getPopupContainer:n,getPrefixCls:o,direction:t}=s.useContext(d),{prefixCls:a,type:l="default",danger:i,disabled:r,loading:c,onClick:p,htmlType:u,children:m,className:b,menu:$,arrow:v,autoFocus:y,overlay:C,trigger:h,align:S,open:x,onOpenChange:O,placement:P,getPopupContainer:E,href:j,icon:z=s.createElement(L,null),title:N,buttonsRender:I=e=>e,mouseEnterDelay:D,mouseLeaveDelay:R,overlayClassName:k,overlayStyle:A,destroyPopupOnHide:H,dropdownRender:X}=e,B=V(e,["prefixCls","type","danger","disabled","loading","onClick","htmlType","children","className","menu","arrow","autoFocus","overlay","trigger","align","open","onOpenChange","placement","getPopupContainer","href","icon","title","buttonsRender","mouseEnterDelay","mouseLeaveDelay","overlayClassName","overlayStyle","destroyPopupOnHide","dropdownRender"]),M=o("dropdown",a),W=`${M}-button`,F={menu:$,arrow:v,autoFocus:y,align:S,disabled:r,trigger:r?[]:h,onOpenChange:O,getPopupContainer:E||n,mouseEnterDelay:D,mouseLeaveDelay:R,overlayClassName:k,overlayStyle:A,destroyPopupOnHide:H,dropdownRender:X},{compactSize:q,compactItemClassnames:G}=w(M,t),U=g(W,G,b);"overlay"in e&&(F.overlay=C),"open"in e&&(F.open=x),F.placement="placement"in e?P:"rtl"===t?"bottomLeft":"bottomRight";const Y=s.createElement(f,{type:l,danger:i,disabled:r,loading:c,onClick:p,htmlType:u,href:j,title:N},m),J=s.createElement(f,{type:l,danger:i,icon:z}),[Q,Z]=I([Y,J]);return s.createElement(T.Compact,Object.assign({className:U,size:q,block:!0},B),Q,s.createElement(_,Object.assign({},F),Z))};F.__ANT_BUTTON=!0,e("D",_).Button=F}}}));
