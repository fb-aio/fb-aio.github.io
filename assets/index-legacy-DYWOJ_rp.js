System.register(["./index-legacy-8-GCpkLg.js","./MyApp-legacy-DxnVTjuu.js","./Dropdown-legacy-DuJaTT2m.js","./PurePanel-legacy-CxYmJ__b.js","./move-legacy-Qi-AQm3Z.js"],(function(e,n){"use strict";var o,t,a,l,i,r,s,d,c,p,u,m,g,b,$,v,y,w,f,C,h,S,x,O,P,E,j,z,N,I,R,D,k,L,H,T,A;return{setters:[e=>{o=e.G,t=e.H,a=e.L,l=e.bL,i=e.F,r=e.J,s=e.r,d=e.M,c=e.a8,p=e.N,u=e.T,m=e.p,g=e.l,b=e.R,$=e.a1,v=e.U,y=e.V,w=e.bH,f=e.aQ},e=>{C=e.Q,h=e.O,S=e.V,x=e.U,O=e.a7,P=e.X,E=e.a8,j=e.N,z=e.n,N=e.aa,I=e.a3,R=e.a4,D=e.a2,k=e.S,L=e.a0},e=>{H=e.D},e=>{T=e.g},e=>{A=e.i}],execute:function(){const n=e=>{const{componentCls:n,menuCls:o,colorError:t,colorTextLightSolid:a}=e,l=`${o}-item`;return{[`${n}, ${n}-menu-submenu`]:{[`${o} ${l}`]:{[`&${l}-danger:not(${l}-disabled)`]:{color:t,"&:hover":{color:a,backgroundColor:t}}}}}},X=e=>{const{componentCls:n,menuCls:o,zIndexPopup:t,dropdownArrowDistance:s,sizePopupArrow:d,antCls:c,iconCls:p,motionDurationMid:u,paddingBlock:m,fontSize:g,dropdownEdgeChildPadding:b,colorTextDisabled:$,fontSizeIcon:v,controlPaddingHorizontal:y,colorBgElevated:w}=e;return[{[n]:{position:"absolute",top:-9999,left:{_skip_check_:!0,value:-9999},zIndex:t,display:"block","&::before":{position:"absolute",insetBlock:e.calc(d).div(2).sub(s).equal(),zIndex:-9999,opacity:1e-4,content:'""'},"&-menu-vertical":{maxHeight:"100vh",overflowY:"auto"},[`&-trigger${c}-btn`]:{[`& > ${p}-down, & > ${c}-btn-icon > ${p}-down`]:{fontSize:v}},[`${n}-wrap`]:{position:"relative",[`${c}-btn > ${p}-down`]:{fontSize:v},[`${p}-down::before`]:{transition:`transform ${u}`}},[`${n}-wrap-open`]:{[`${p}-down::before`]:{transform:"rotate(180deg)"}},"\n        &-hidden,\n        &-menu-hidden,\n        &-menu-submenu-hidden\n      ":{display:"none"},[`&${c}-slide-down-enter${c}-slide-down-enter-active${n}-placement-bottomLeft,\n          &${c}-slide-down-appear${c}-slide-down-appear-active${n}-placement-bottomLeft,\n          &${c}-slide-down-enter${c}-slide-down-enter-active${n}-placement-bottom,\n          &${c}-slide-down-appear${c}-slide-down-appear-active${n}-placement-bottom,\n          &${c}-slide-down-enter${c}-slide-down-enter-active${n}-placement-bottomRight,\n          &${c}-slide-down-appear${c}-slide-down-appear-active${n}-placement-bottomRight`]:{animationName:C},[`&${c}-slide-up-enter${c}-slide-up-enter-active${n}-placement-topLeft,\n          &${c}-slide-up-appear${c}-slide-up-appear-active${n}-placement-topLeft,\n          &${c}-slide-up-enter${c}-slide-up-enter-active${n}-placement-top,\n          &${c}-slide-up-appear${c}-slide-up-appear-active${n}-placement-top,\n          &${c}-slide-up-enter${c}-slide-up-enter-active${n}-placement-topRight,\n          &${c}-slide-up-appear${c}-slide-up-appear-active${n}-placement-topRight`]:{animationName:h},[`&${c}-slide-down-leave${c}-slide-down-leave-active${n}-placement-bottomLeft,\n          &${c}-slide-down-leave${c}-slide-down-leave-active${n}-placement-bottom,\n          &${c}-slide-down-leave${c}-slide-down-leave-active${n}-placement-bottomRight`]:{animationName:S},[`&${c}-slide-up-leave${c}-slide-up-leave-active${n}-placement-topLeft,\n          &${c}-slide-up-leave${c}-slide-up-leave-active${n}-placement-top,\n          &${c}-slide-up-leave${c}-slide-up-leave-active${n}-placement-topRight`]:{animationName:x}}},O(e,w,{arrowPlacement:{top:!0,bottom:!0}}),{[`${n} ${o}`]:{position:"relative",margin:0},[`${o}-submenu-popup`]:{position:"absolute",zIndex:t,background:"transparent",boxShadow:"none",transformOrigin:"0 0","ul, li":{listStyle:"none",margin:0}},[`${n}, ${n}-menu-submenu`]:Object.assign(Object.assign({},a(e)),{[o]:Object.assign(Object.assign({padding:b,listStyleType:"none",backgroundColor:w,backgroundClip:"padding-box",borderRadius:e.borderRadiusLG,outline:"none",boxShadow:e.boxShadowSecondary},l(e)),{"&:empty":{padding:0,boxShadow:"none"},[`${o}-item-group-title`]:{padding:`${i(m)} ${i(y)}`,color:e.colorTextDescription,transition:`all ${u}`},[`${o}-item`]:{position:"relative",display:"flex",alignItems:"center"},[`${o}-item-icon`]:{minWidth:g,marginInlineEnd:e.marginXS,fontSize:e.fontSizeSM},[`${o}-title-content`]:{flex:"auto","&-with-extra":{display:"inline-flex",alignItems:"center",width:"100%"},"> a":{color:"inherit",transition:`all ${u}`,"&:hover":{color:"inherit"},"&::after":{position:"absolute",inset:0,content:'""'}},[`${o}-item-extra`]:{paddingInlineStart:e.padding,marginInlineStart:"auto",fontSize:e.fontSizeSM,color:e.colorTextDescription}},[`${o}-item, ${o}-submenu-title`]:Object.assign(Object.assign({display:"flex",margin:0,padding:`${i(m)} ${i(y)}`,color:e.colorText,fontWeight:"normal",fontSize:g,lineHeight:e.lineHeight,cursor:"pointer",transition:`all ${u}`,borderRadius:e.borderRadiusSM,"&:hover, &-active":{backgroundColor:e.controlItemBgHover}},l(e)),{"&-selected":{color:e.colorPrimary,backgroundColor:e.controlItemBgActive,"&:hover, &-active":{backgroundColor:e.controlItemBgActiveHover}},"&-disabled":{color:$,cursor:"not-allowed","&:hover":{color:$,backgroundColor:w,cursor:"not-allowed"},a:{pointerEvents:"none"}},"&-divider":{height:1,margin:`${i(e.marginXXS)} 0`,overflow:"hidden",lineHeight:0,backgroundColor:e.colorSplit},[`${n}-menu-submenu-expand-icon`]:{position:"absolute",insetInlineEnd:e.paddingXS,[`${n}-menu-submenu-arrow-icon`]:{marginInlineEnd:"0 !important",color:e.colorTextDescription,fontSize:v,fontStyle:"normal"}}}),[`${o}-item-group-list`]:{margin:`0 ${i(e.marginXS)}`,padding:0,listStyle:"none"},[`${o}-submenu-title`]:{paddingInlineEnd:e.calc(y).add(e.fontSizeSM).equal()},[`${o}-submenu-vertical`]:{position:"relative"},[`${o}-submenu${o}-submenu-disabled ${n}-menu-submenu-title`]:{[`&, ${n}-menu-submenu-arrow-icon`]:{color:$,backgroundColor:w,cursor:"not-allowed"}},[`${o}-submenu-selected ${n}-menu-submenu-title`]:{color:e.colorPrimary}})})},[P(e,"slide-up"),P(e,"slide-down"),A(e,"move-up"),A(e,"move-down"),r(e,"zoom-big")]]},B=o("Dropdown",(e=>{const{marginXXS:o,sizePopupArrow:a,paddingXXS:l,componentCls:i}=e,r=t(e,{menuCls:`${i}-menu`,dropdownArrowDistance:e.calc(a).div(2).add(o).equal(),dropdownEdgeChildPadding:l});return[X(r),n(r)]}),(e=>Object.assign(Object.assign({zIndexPopup:e.zIndexPopupBase+50,paddingBlock:(e.controlHeight-e.fontSize*e.lineHeight)/2},E({contentRadius:e.borderRadiusLG,limitVerticalRadius:!0})),j(e))),{resetStyle:!1}),M=e=>{var n;const{menu:o,arrow:t,prefixCls:a,children:l,trigger:i,disabled:r,dropdownRender:w,getPopupContainer:f,overlayClassName:C,rootClassName:h,overlayStyle:S,open:x,onOpenChange:O,visible:P,onVisibleChange:E,mouseEnterDelay:j=.15,mouseLeaveDelay:k=.1,autoAdjustOverflow:L=!0,placement:T="",overlay:A,transitionName:X}=e,{getPopupContainer:M,getPrefixCls:_,direction:V,dropdown:F}=s.useContext(d);y();const U=s.useMemo((()=>{const e=_();return void 0!==X?X:T.includes("top")?`${e}-slide-down`:`${e}-slide-up`}),[_,T,X]),W=s.useMemo((()=>T?T.includes("Center")?T.slice(0,T.indexOf("Center")):T:"rtl"===V?"bottomRight":"bottomLeft"),[T,V]),q=_("dropdown",a),G=c(q),[Q,Y,J]=B(q,G),[,Z]=p(),K=s.Children.only("object"!=typeof(ee=l)&&"function"!=typeof ee||null===ee?s.createElement("span",null,l):l);var ee;const ne=u(K,{className:m(`${q}-trigger`,{[`${q}-rtl`]:"rtl"===V},K.props.className),disabled:null!==(n=K.props.disabled)&&void 0!==n?n:r}),oe=r?[]:i,te=!!(null==oe?void 0:oe.includes("contextMenu")),[ae,le]=z(!1,{value:null!=x?x:P}),ie=g((e=>{null==O||O(e,{source:"trigger"}),null==E||E(e),le(e)})),re=m(C,h,Y,J,G,null==F?void 0:F.className,{[`${q}-rtl`]:"rtl"===V}),se=N({arrowPointAtCenter:"object"==typeof t&&t.pointAtCenter,autoAdjustOverflow:L,offset:Z.marginXXS,arrowWidth:t?Z.sizePopupArrow:0,borderRadius:Z.borderRadius}),de=s.useCallback((()=>{(null==o?void 0:o.selectable)&&(null==o?void 0:o.multiple)||(null==O||O(!1,{source:"menu"}),le(!1))}),[null==o?void 0:o.selectable,null==o?void 0:o.multiple]),[ce,pe]=b("Dropdown",null==S?void 0:S.zIndex);let ue=s.createElement(H,Object.assign({alignPoint:te},$(e,["rootClassName"]),{mouseEnterDelay:j,mouseLeaveDelay:k,visible:ae,builtinPlacements:se,arrow:!!t,overlayClassName:re,prefixCls:q,getPopupContainer:f||M,transitionName:U,trigger:oe,overlay:()=>{let e;return e=(null==o?void 0:o.items)?s.createElement(I,Object.assign({},o)):"function"==typeof A?A():A,w&&(e=w(e)),e=s.Children.only("string"==typeof e?s.createElement("span",null,e):e),s.createElement(R,{prefixCls:`${q}-menu`,rootClassName:m(J,G),expandIcon:s.createElement("span",{className:`${q}-menu-submenu-arrow`},s.createElement(D,{className:`${q}-menu-submenu-arrow-icon`})),mode:"vertical",selectable:!1,onClick:de,validator:e=>{}},e)},placement:W,onVisibleChange:ie,overlayStyle:Object.assign(Object.assign(Object.assign({},null==F?void 0:F.style),S),{zIndex:ce})}),ne);return ce&&(ue=s.createElement(v.Provider,{value:pe},ue)),Q(ue)},_=T(M,"align",void 0,"dropdown",(e=>e));M._InternalPanelDoNotUseOrYouWillBeFired=e=>s.createElement(_,Object.assign({},e),s.createElement("span",null));var V=function(e,n){var o={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(o[t]=e[t]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(t=Object.getOwnPropertySymbols(e);a<t.length;a++)n.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(o[t[a]]=e[t[a]])}return o};const F=e=>{const{getPopupContainer:n,getPrefixCls:o,direction:t}=s.useContext(d),{prefixCls:a,type:l="default",danger:i,disabled:r,loading:c,onClick:p,htmlType:u,children:g,className:b,menu:$,arrow:v,autoFocus:y,overlay:C,trigger:h,align:S,open:x,onOpenChange:O,placement:P,getPopupContainer:E,href:j,icon:z=s.createElement(L,null),title:N,buttonsRender:I=e=>e,mouseEnterDelay:R,mouseLeaveDelay:D,overlayClassName:H,overlayStyle:T,destroyPopupOnHide:A,dropdownRender:X}=e,B=V(e,["prefixCls","type","danger","disabled","loading","onClick","htmlType","children","className","menu","arrow","autoFocus","overlay","trigger","align","open","onOpenChange","placement","getPopupContainer","href","icon","title","buttonsRender","mouseEnterDelay","mouseLeaveDelay","overlayClassName","overlayStyle","destroyPopupOnHide","dropdownRender"]),_=o("dropdown",a),F=`${_}-button`,U={menu:$,arrow:v,autoFocus:y,align:S,disabled:r,trigger:r?[]:h,onOpenChange:O,getPopupContainer:E||n,mouseEnterDelay:R,mouseLeaveDelay:D,overlayClassName:H,overlayStyle:T,destroyPopupOnHide:A,dropdownRender:X},{compactSize:W,compactItemClassnames:q}=w(_,t),G=m(F,q,b);"overlay"in e&&(U.overlay=C),"open"in e&&(U.open=x),U.placement="placement"in e?P:"rtl"===t?"bottomLeft":"bottomRight";const Q=s.createElement(f,{type:l,danger:i,disabled:r,loading:c,onClick:p,htmlType:u,href:j,title:N},g),Y=s.createElement(f,{type:l,danger:i,icon:z}),[J,Z]=I([Q,Y]);return s.createElement(k.Compact,Object.assign({className:G,size:W,block:!0},B),J,s.createElement(M,Object.assign({},U),Z))};F.__ANT_BUTTON=!0,e("D",M).Button=F}}}));
