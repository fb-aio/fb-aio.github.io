import{E as ie,F as re,H as le,bI as K,D as S,G as se,r as i,I as ne,a6 as de,J as ce,Q as ue,o as D,k as pe,M as me,Z as ge,R as be,S as ve,bC as $e,aO as k}from"./index-tVoMhA9s.js";import{L as fe,K as Ce,N as we,M as ye,a2 as he,Q as ee,a3 as Se,J as xe,n as Pe,a4 as Oe,_ as Ie,$ as Ee,Z as Ne,S as ze,X as Re}from"./MyApp-CoDKbg3z.js";import{D as je}from"./Dropdown-CrNk_q_E.js";import{i as oe,g as De}from"./PurePanel-EiPMio6l.js";const Te=e=>{const{componentCls:o,menuCls:t,colorError:a,colorTextLightSolid:l}=e,s=`${t}-item`;return{[`${o}, ${o}-menu-submenu`]:{[`${t} ${s}`]:{[`&${s}-danger:not(${s}-disabled)`]:{color:a,"&:hover":{color:l,backgroundColor:a}}}}}},Be=e=>{const{componentCls:o,menuCls:t,zIndexPopup:a,dropdownArrowDistance:l,sizePopupArrow:s,antCls:n,iconCls:d,motionDurationMid:v,paddingBlock:w,fontSize:y,dropdownEdgeChildPadding:$,colorTextDisabled:g,fontSizeIcon:c,controlPaddingHorizontal:C,colorBgElevated:p}=e;return[{[o]:Object.assign(Object.assign({},le(e)),{position:"absolute",top:-9999,left:{_skip_check_:!0,value:-9999},zIndex:a,display:"block","&::before":{position:"absolute",insetBlock:e.calc(s).div(2).sub(l).equal(),zIndex:-9999,opacity:1e-4,content:'""'},[`&-trigger${n}-btn`]:{[`& > ${d}-down, & > ${n}-btn-icon > ${d}-down`]:{fontSize:c}},[`${o}-wrap`]:{position:"relative",[`${n}-btn > ${d}-down`]:{fontSize:c},[`${d}-down::before`]:{transition:`transform ${v}`}},[`${o}-wrap-open`]:{[`${d}-down::before`]:{transform:"rotate(180deg)"}},"\n        &-hidden,\n        &-menu-hidden,\n        &-menu-submenu-hidden\n      ":{display:"none"},[`&${n}-slide-down-enter${n}-slide-down-enter-active${o}-placement-bottomLeft,
          &${n}-slide-down-appear${n}-slide-down-appear-active${o}-placement-bottomLeft,
          &${n}-slide-down-enter${n}-slide-down-enter-active${o}-placement-bottom,
          &${n}-slide-down-appear${n}-slide-down-appear-active${o}-placement-bottom,
          &${n}-slide-down-enter${n}-slide-down-enter-active${o}-placement-bottomRight,
          &${n}-slide-down-appear${n}-slide-down-appear-active${o}-placement-bottomRight`]:{animationName:fe},[`&${n}-slide-up-enter${n}-slide-up-enter-active${o}-placement-topLeft,
          &${n}-slide-up-appear${n}-slide-up-appear-active${o}-placement-topLeft,
          &${n}-slide-up-enter${n}-slide-up-enter-active${o}-placement-top,
          &${n}-slide-up-appear${n}-slide-up-appear-active${o}-placement-top,
          &${n}-slide-up-enter${n}-slide-up-enter-active${o}-placement-topRight,
          &${n}-slide-up-appear${n}-slide-up-appear-active${o}-placement-topRight`]:{animationName:Ce},[`&${n}-slide-down-leave${n}-slide-down-leave-active${o}-placement-bottomLeft,
          &${n}-slide-down-leave${n}-slide-down-leave-active${o}-placement-bottom,
          &${n}-slide-down-leave${n}-slide-down-leave-active${o}-placement-bottomRight`]:{animationName:we},[`&${n}-slide-up-leave${n}-slide-up-leave-active${o}-placement-topLeft,
          &${n}-slide-up-leave${n}-slide-up-leave-active${o}-placement-top,
          &${n}-slide-up-leave${n}-slide-up-leave-active${o}-placement-topRight`]:{animationName:ye}})},he(e,p,{arrowPlacement:{top:!0,bottom:!0}}),{[`${o} ${t}`]:{position:"relative",margin:0},[`${t}-submenu-popup`]:{position:"absolute",zIndex:a,background:"transparent",boxShadow:"none",transformOrigin:"0 0","ul, li":{listStyle:"none",margin:0}},[`${o}, ${o}-menu-submenu`]:{[t]:Object.assign(Object.assign({padding:$,listStyleType:"none",backgroundColor:p,backgroundClip:"padding-box",borderRadius:e.borderRadiusLG,outline:"none",boxShadow:e.boxShadowSecondary},K(e)),{"&:empty":{padding:0,boxShadow:"none"},[`${t}-item-group-title`]:{padding:`${S(w)} ${S(C)}`,color:e.colorTextDescription,transition:`all ${v}`},[`${t}-item`]:{position:"relative",display:"flex",alignItems:"center"},[`${t}-item-icon`]:{minWidth:y,marginInlineEnd:e.marginXS,fontSize:e.fontSizeSM},[`${t}-title-content`]:{flex:"auto","> a":{color:"inherit",transition:`all ${v}`,"&:hover":{color:"inherit"},"&::after":{position:"absolute",inset:0,content:'""'}}},[`${t}-item, ${t}-submenu-title`]:Object.assign(Object.assign({clear:"both",margin:0,padding:`${S(w)} ${S(C)}`,color:e.colorText,fontWeight:"normal",fontSize:y,lineHeight:e.lineHeight,cursor:"pointer",transition:`all ${v}`,borderRadius:e.borderRadiusSM,"&:hover, &-active":{backgroundColor:e.controlItemBgHover}},K(e)),{"&-selected":{color:e.colorPrimary,backgroundColor:e.controlItemBgActive,"&:hover, &-active":{backgroundColor:e.controlItemBgActiveHover}},"&-disabled":{color:g,cursor:"not-allowed","&:hover":{color:g,backgroundColor:p,cursor:"not-allowed"},a:{pointerEvents:"none"}},"&-divider":{height:1,margin:`${S(e.marginXXS)} 0`,overflow:"hidden",lineHeight:0,backgroundColor:e.colorSplit},[`${o}-menu-submenu-expand-icon`]:{position:"absolute",insetInlineEnd:e.paddingXS,[`${o}-menu-submenu-arrow-icon`]:{marginInlineEnd:"0 !important",color:e.colorTextDescription,fontSize:c,fontStyle:"normal"}}}),[`${t}-item-group-list`]:{margin:`0 ${S(e.marginXS)}`,padding:0,listStyle:"none"},[`${t}-submenu-title`]:{paddingInlineEnd:e.calc(C).add(e.fontSizeSM).equal()},[`${t}-submenu-vertical`]:{position:"relative"},[`${t}-submenu${t}-submenu-disabled ${o}-menu-submenu-title`]:{[`&, ${o}-menu-submenu-arrow-icon`]:{color:g,backgroundColor:p,cursor:"not-allowed"}},[`${t}-submenu-selected ${o}-menu-submenu-title`]:{color:e.colorPrimary}})}},[ee(e,"slide-up"),ee(e,"slide-down"),oe(e,"move-up"),oe(e,"move-down"),se(e,"zoom-big")]]},Me=e=>Object.assign(Object.assign({zIndexPopup:e.zIndexPopupBase+50,paddingBlock:(e.controlHeight-e.fontSize*e.lineHeight)/2},Se({contentRadius:e.borderRadiusLG,limitVerticalRadius:!0})),xe(e)),Ae=ie("Dropdown",e=>{const{marginXXS:o,sizePopupArrow:t,paddingXXS:a,componentCls:l}=e,s=re(e,{menuCls:`${l}-menu`,dropdownArrowDistance:e.calc(t).div(2).add(o).equal(),dropdownEdgeChildPadding:a});return[Be(s),Te(s)]},Me,{resetStyle:!1}),T=e=>{const{menu:o,arrow:t,prefixCls:a,children:l,trigger:s,disabled:n,dropdownRender:d,getPopupContainer:v,overlayClassName:w,rootClassName:y,overlayStyle:$,open:g,onOpenChange:c,visible:C,onVisibleChange:p,mouseEnterDelay:B=.15,mouseLeaveDelay:M=.1,autoAdjustOverflow:A=!0,placement:m="",overlay:x,transitionName:P}=e,{getPopupContainer:L,getPrefixCls:O,direction:h,dropdown:f}=i.useContext(ne);ve();const X=i.useMemo(()=>{const r=O();return P!==void 0?P:m.includes("top")?`${r}-slide-down`:`${r}-slide-up`},[O,m,P]),_=i.useMemo(()=>m?m.includes("Center")?m.slice(0,m.indexOf("Center")):m:h==="rtl"?"bottomRight":"bottomLeft",[m,h]),u=O("dropdown",a),I=de(u),[H,V,z]=Ae(u,I),[,E]=ce(),N=i.Children.only(l),W=ue(N,{className:D(`${u}-trigger`,{[`${u}-rtl`]:h==="rtl"},N.props.className),disabled:n}),b=n?[]:s;let R;b&&b.includes("contextMenu")&&(R=!0);const[F,j]=Pe(!1,{value:g??C}),U=pe(r=>{c==null||c(r,{source:"trigger"}),p==null||p(r),j(r)}),Z=D(w,y,V,z,I,f==null?void 0:f.className,{[`${u}-rtl`]:h==="rtl"}),q=Oe({arrowPointAtCenter:typeof t=="object"&&t.pointAtCenter,autoAdjustOverflow:A,offset:E.marginXXS,arrowWidth:t?E.sizePopupArrow:0,borderRadius:E.borderRadius}),G=i.useCallback(()=>{o!=null&&o.selectable&&(o!=null&&o.multiple)||(c==null||c(!1,{source:"menu"}),j(!1))},[o==null?void 0:o.selectable,o==null?void 0:o.multiple]),J=()=>{let r;return o!=null&&o.items?r=i.createElement(Ie,Object.assign({},o)):typeof x=="function"?r=x():r=x,d&&(r=d(r)),r=i.Children.only(typeof r=="string"?i.createElement("span",null,r):r),i.createElement(Ee,{prefixCls:`${u}-menu`,rootClassName:D(z,I),expandIcon:i.createElement("span",{className:`${u}-menu-submenu-arrow`},i.createElement(Ne,{className:`${u}-menu-submenu-arrow-icon`})),mode:"vertical",selectable:!1,onClick:G,validator:We=>{}},r)},[Y,ae]=me("Dropdown",$==null?void 0:$.zIndex);let Q=i.createElement(je,Object.assign({alignPoint:R},ge(e,["rootClassName"]),{mouseEnterDelay:B,mouseLeaveDelay:M,visible:F,builtinPlacements:q,arrow:!!t,overlayClassName:Z,prefixCls:u,getPopupContainer:v||L,transitionName:X,trigger:b,overlay:J,placement:_,onVisibleChange:U,overlayStyle:Object.assign(Object.assign(Object.assign({},f==null?void 0:f.style),$),{zIndex:Y})}),W);return Y&&(Q=i.createElement(be.Provider,{value:ae},Q)),H(Q)};function Le(e){return Object.assign(Object.assign({},e),{align:{overflow:{adjustX:!1,adjustY:!1}}})}const Xe=De(T,"dropdown",e=>e,Le),_e=e=>i.createElement(Xe,Object.assign({},e),i.createElement("span",null));T._InternalPanelDoNotUseOrYouWillBeFired=_e;var He=function(e,o){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&o.indexOf(a)<0&&(t[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,a=Object.getOwnPropertySymbols(e);l<a.length;l++)o.indexOf(a[l])<0&&Object.prototype.propertyIsEnumerable.call(e,a[l])&&(t[a[l]]=e[a[l]]);return t};const te=e=>{const{getPopupContainer:o,getPrefixCls:t,direction:a}=i.useContext(ne),{prefixCls:l,type:s="default",danger:n,disabled:d,loading:v,onClick:w,htmlType:y,children:$,className:g,menu:c,arrow:C,autoFocus:p,overlay:B,trigger:M,align:A,open:m,onOpenChange:x,placement:P,getPopupContainer:L,href:O,icon:h=i.createElement(Re,null),title:f,buttonsRender:X=J=>J,mouseEnterDelay:_,mouseLeaveDelay:u,overlayClassName:I,overlayStyle:H,destroyPopupOnHide:V,dropdownRender:z}=e,E=He(e,["prefixCls","type","danger","disabled","loading","onClick","htmlType","children","className","menu","arrow","autoFocus","overlay","trigger","align","open","onOpenChange","placement","getPopupContainer","href","icon","title","buttonsRender","mouseEnterDelay","mouseLeaveDelay","overlayClassName","overlayStyle","destroyPopupOnHide","dropdownRender"]),N=t("dropdown",l),W=`${N}-button`,b={menu:c,arrow:C,autoFocus:p,align:A,disabled:d,trigger:d?[]:M,onOpenChange:x,getPopupContainer:L||o,mouseEnterDelay:_,mouseLeaveDelay:u,overlayClassName:I,overlayStyle:H,destroyPopupOnHide:V,dropdownRender:z},{compactSize:R,compactItemClassnames:F}=$e(N,a),j=D(W,F,g);"overlay"in e&&(b.overlay=B),"open"in e&&(b.open=m),"placement"in e?b.placement=P:b.placement=a==="rtl"?"bottomLeft":"bottomRight";const U=i.createElement(k,{type:s,danger:n,disabled:d,loading:v,onClick:w,htmlType:y,href:O,title:f},$),Z=i.createElement(k,{type:s,danger:n,icon:h}),[q,G]=X([U,Z]);return i.createElement(ze.Compact,Object.assign({className:j,size:R,block:!0},E),q,i.createElement(T,Object.assign({},b),G))};te.__ANT_BUTTON=!0;const Ve=T;Ve.Button=te;export{Ve as D};