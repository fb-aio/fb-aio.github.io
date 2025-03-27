import{L as re,M as le,O as se,ae as K,J as x,N as de,r as i,G as te,ab as ce,Q as ue,W as pe,q as T,a as me,T as ge,a4 as fe,X as be,Y as $e,bM as ve,ba as k}from"./index-BxqI5Gd0.js";import{a1 as Ce,a0 as we,a3 as ye,a2 as he,a9 as Se,a5 as ee,aa as xe,W as Pe,z as Oe,ab as Ie,ac as ze,ad as Ee,ae as Ne,af as Re,S as je,ag as De}from"./MyApp-ByiHX0qM.js";import{g as Te}from"./PurePanel-DnuVi_Xb.js";import{i as ne}from"./move-12jBH-U3.js";const Be=e=>typeof e!="object"&&typeof e!="function"||e===null,Me=e=>{const{componentCls:o,menuCls:n,colorError:a,colorTextLightSolid:l}=e,s="".concat(n,"-item");return{["".concat(o,", ").concat(o,"-menu-submenu")]:{["".concat(n," ").concat(s)]:{["&".concat(s,"-danger:not(").concat(s,"-disabled)")]:{color:a,"&:hover":{color:l,backgroundColor:a}}}}}},Ae=e=>{const{componentCls:o,menuCls:n,zIndexPopup:a,dropdownArrowDistance:l,sizePopupArrow:s,antCls:t,iconCls:d,motionDurationMid:g,paddingBlock:C,fontSize:w,dropdownEdgeChildPadding:P,colorTextDisabled:p,fontSizeIcon:f,controlPaddingHorizontal:c,colorBgElevated:b}=e;return[{[o]:{position:"absolute",top:-9999,left:{_skip_check_:!0,value:-9999},zIndex:a,display:"block","&::before":{position:"absolute",insetBlock:e.calc(s).div(2).sub(l).equal(),zIndex:-9999,opacity:1e-4,content:'""'},"&-menu-vertical":{maxHeight:"100vh",overflowY:"auto"},["&-trigger".concat(t,"-btn")]:{["& > ".concat(d,"-down, & > ").concat(t,"-btn-icon > ").concat(d,"-down")]:{fontSize:f}},["".concat(o,"-wrap")]:{position:"relative",["".concat(t,"-btn > ").concat(d,"-down")]:{fontSize:f},["".concat(d,"-down::before")]:{transition:"transform ".concat(g)}},["".concat(o,"-wrap-open")]:{["".concat(d,"-down::before")]:{transform:"rotate(180deg)"}},"\n        &-hidden,\n        &-menu-hidden,\n        &-menu-submenu-hidden\n      ":{display:"none"},["&".concat(t,"-slide-down-enter").concat(t,"-slide-down-enter-active").concat(o,"-placement-bottomLeft,\n          &").concat(t,"-slide-down-appear").concat(t,"-slide-down-appear-active").concat(o,"-placement-bottomLeft,\n          &").concat(t,"-slide-down-enter").concat(t,"-slide-down-enter-active").concat(o,"-placement-bottom,\n          &").concat(t,"-slide-down-appear").concat(t,"-slide-down-appear-active").concat(o,"-placement-bottom,\n          &").concat(t,"-slide-down-enter").concat(t,"-slide-down-enter-active").concat(o,"-placement-bottomRight,\n          &").concat(t,"-slide-down-appear").concat(t,"-slide-down-appear-active").concat(o,"-placement-bottomRight")]:{animationName:Ce},["&".concat(t,"-slide-up-enter").concat(t,"-slide-up-enter-active").concat(o,"-placement-topLeft,\n          &").concat(t,"-slide-up-appear").concat(t,"-slide-up-appear-active").concat(o,"-placement-topLeft,\n          &").concat(t,"-slide-up-enter").concat(t,"-slide-up-enter-active").concat(o,"-placement-top,\n          &").concat(t,"-slide-up-appear").concat(t,"-slide-up-appear-active").concat(o,"-placement-top,\n          &").concat(t,"-slide-up-enter").concat(t,"-slide-up-enter-active").concat(o,"-placement-topRight,\n          &").concat(t,"-slide-up-appear").concat(t,"-slide-up-appear-active").concat(o,"-placement-topRight")]:{animationName:we},["&".concat(t,"-slide-down-leave").concat(t,"-slide-down-leave-active").concat(o,"-placement-bottomLeft,\n          &").concat(t,"-slide-down-leave").concat(t,"-slide-down-leave-active").concat(o,"-placement-bottom,\n          &").concat(t,"-slide-down-leave").concat(t,"-slide-down-leave-active").concat(o,"-placement-bottomRight")]:{animationName:ye},["&".concat(t,"-slide-up-leave").concat(t,"-slide-up-leave-active").concat(o,"-placement-topLeft,\n          &").concat(t,"-slide-up-leave").concat(t,"-slide-up-leave-active").concat(o,"-placement-top,\n          &").concat(t,"-slide-up-leave").concat(t,"-slide-up-leave-active").concat(o,"-placement-topRight")]:{animationName:he}}},Se(e,b,{arrowPlacement:{top:!0,bottom:!0}}),{["".concat(o," ").concat(n)]:{position:"relative",margin:0},["".concat(n,"-submenu-popup")]:{position:"absolute",zIndex:a,background:"transparent",boxShadow:"none",transformOrigin:"0 0","ul, li":{listStyle:"none",margin:0}},["".concat(o,", ").concat(o,"-menu-submenu")]:Object.assign(Object.assign({},se(e)),{[n]:Object.assign(Object.assign({padding:P,listStyleType:"none",backgroundColor:b,backgroundClip:"padding-box",borderRadius:e.borderRadiusLG,outline:"none",boxShadow:e.boxShadowSecondary},K(e)),{"&:empty":{padding:0,boxShadow:"none"},["".concat(n,"-item-group-title")]:{padding:"".concat(x(C)," ").concat(x(c)),color:e.colorTextDescription,transition:"all ".concat(g)},["".concat(n,"-item")]:{position:"relative",display:"flex",alignItems:"center"},["".concat(n,"-item-icon")]:{minWidth:w,marginInlineEnd:e.marginXS,fontSize:e.fontSizeSM},["".concat(n,"-title-content")]:{flex:"auto","&-with-extra":{display:"inline-flex",alignItems:"center",width:"100%"},"> a":{color:"inherit",transition:"all ".concat(g),"&:hover":{color:"inherit"},"&::after":{position:"absolute",inset:0,content:'""'}},["".concat(n,"-item-extra")]:{paddingInlineStart:e.padding,marginInlineStart:"auto",fontSize:e.fontSizeSM,color:e.colorTextDescription}},["".concat(n,"-item, ").concat(n,"-submenu-title")]:Object.assign(Object.assign({display:"flex",margin:0,padding:"".concat(x(C)," ").concat(x(c)),color:e.colorText,fontWeight:"normal",fontSize:w,lineHeight:e.lineHeight,cursor:"pointer",transition:"all ".concat(g),borderRadius:e.borderRadiusSM,"&:hover, &-active":{backgroundColor:e.controlItemBgHover}},K(e)),{"&-selected":{color:e.colorPrimary,backgroundColor:e.controlItemBgActive,"&:hover, &-active":{backgroundColor:e.controlItemBgActiveHover}},"&-disabled":{color:p,cursor:"not-allowed","&:hover":{color:p,backgroundColor:b,cursor:"not-allowed"},a:{pointerEvents:"none"}},"&-divider":{height:1,margin:"".concat(x(e.marginXXS)," 0"),overflow:"hidden",lineHeight:0,backgroundColor:e.colorSplit},["".concat(o,"-menu-submenu-expand-icon")]:{position:"absolute",insetInlineEnd:e.paddingXS,["".concat(o,"-menu-submenu-arrow-icon")]:{marginInlineEnd:"0 !important",color:e.colorTextDescription,fontSize:f,fontStyle:"normal"}}}),["".concat(n,"-item-group-list")]:{margin:"0 ".concat(x(e.marginXS)),padding:0,listStyle:"none"},["".concat(n,"-submenu-title")]:{paddingInlineEnd:e.calc(c).add(e.fontSizeSM).equal()},["".concat(n,"-submenu-vertical")]:{position:"relative"},["".concat(n,"-submenu").concat(n,"-submenu-disabled ").concat(o,"-menu-submenu-title")]:{["&, ".concat(o,"-menu-submenu-arrow-icon")]:{color:p,backgroundColor:b,cursor:"not-allowed"}},["".concat(n,"-submenu-selected ").concat(o,"-menu-submenu-title")]:{color:e.colorPrimary}})})},[ee(e,"slide-up"),ee(e,"slide-down"),ne(e,"move-up"),ne(e,"move-down"),de(e,"zoom-big")]]},Le=e=>Object.assign(Object.assign({zIndexPopup:e.zIndexPopupBase+50,paddingBlock:(e.controlHeight-e.fontSize*e.lineHeight)/2},xe({contentRadius:e.borderRadiusLG,limitVerticalRadius:!0})),Pe(e)),_e=re("Dropdown",e=>{const{marginXXS:o,sizePopupArrow:n,paddingXXS:a,componentCls:l}=e,s=le(e,{menuCls:"".concat(l,"-menu"),dropdownArrowDistance:e.calc(n).div(2).add(o).equal(),dropdownEdgeChildPadding:a});return[Ae(s),Me(s)]},Le,{resetStyle:!1}),B=e=>{var o;const{menu:n,arrow:a,prefixCls:l,children:s,trigger:t,disabled:d,dropdownRender:g,getPopupContainer:C,overlayClassName:w,rootClassName:P,overlayStyle:p,open:f,onOpenChange:c,visible:b,onVisibleChange:O,mouseEnterDelay:M=.15,mouseLeaveDelay:A=.1,autoAdjustOverflow:L=!0,placement:m="",overlay:I,transitionName:z}=e,{getPopupContainer:_,getPrefixCls:E,direction:y,dropdown:$}=i.useContext(te);$e();const H=i.useMemo(()=>{const r=E();return z!==void 0?z:m.includes("top")?"".concat(r,"-slide-down"):"".concat(r,"-slide-up")},[E,m,z]),X=i.useMemo(()=>m?m.includes("Center")?m.slice(0,m.indexOf("Center")):m:y==="rtl"?"bottomRight":"bottomLeft",[m,y]),u=E("dropdown",l),N=ce(u),[W,V,j]=_e(u,N),[,h]=ue(),R=i.Children.only(Be(s)?i.createElement("span",null,s):s),v=pe(R,{className:T("".concat(u,"-trigger"),{["".concat(u,"-rtl")]:y==="rtl"},R.props.className),disabled:(o=R.props.disabled)!==null&&o!==void 0?o:d}),S=d?[]:t,U=!!(S!=null&&S.includes("contextMenu")),[q,D]=Oe(!1,{value:f!=null?f:b}),F=me(r=>{c==null||c(r,{source:"trigger"}),O==null||O(r),D(r)}),G=T(w,P,V,j,N,$==null?void 0:$.className,{["".concat(u,"-rtl")]:y==="rtl"}),Y=Ie({arrowPointAtCenter:typeof a=="object"&&a.pointAtCenter,autoAdjustOverflow:L,offset:h.marginXXS,arrowWidth:a?h.sizePopupArrow:0,borderRadius:h.borderRadius}),Z=i.useCallback(()=>{n!=null&&n.selectable&&(n!=null&&n.multiple)||(c==null||c(!1,{source:"menu"}),D(!1))},[n==null?void 0:n.selectable,n==null?void 0:n.multiple]),ae=()=>{let r;return n!=null&&n.items?r=i.createElement(Ee,Object.assign({},n)):typeof I=="function"?r=I():r=I,g&&(r=g(r)),r=i.Children.only(typeof r=="string"?i.createElement("span",null,r):r),i.createElement(Ne,{prefixCls:"".concat(u,"-menu"),rootClassName:T(j,N),expandIcon:i.createElement("span",{className:"".concat(u,"-menu-submenu-arrow")},i.createElement(Re,{className:"".concat(u,"-menu-submenu-arrow-icon")})),mode:"vertical",selectable:!1,onClick:Z,validator:Ue=>{}},r)},[Q,ie]=ge("Dropdown",p==null?void 0:p.zIndex);let J=i.createElement(ze,Object.assign({alignPoint:U},fe(e,["rootClassName"]),{mouseEnterDelay:M,mouseLeaveDelay:A,visible:q,builtinPlacements:Y,arrow:!!a,overlayClassName:G,prefixCls:u,getPopupContainer:C||_,transitionName:H,trigger:S,overlay:ae,placement:X,onVisibleChange:F,overlayStyle:Object.assign(Object.assign(Object.assign({},$==null?void 0:$.style),p),{zIndex:Q})}),v);return Q&&(J=i.createElement(be.Provider,{value:ie},J)),W(J)},He=Te(B,"align",void 0,"dropdown",e=>e),Xe=e=>i.createElement(He,Object.assign({},e),i.createElement("span",null));B._InternalPanelDoNotUseOrYouWillBeFired=Xe;var We=function(e,o){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&o.indexOf(a)<0&&(n[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,a=Object.getOwnPropertySymbols(e);l<a.length;l++)o.indexOf(a[l])<0&&Object.prototype.propertyIsEnumerable.call(e,a[l])&&(n[a[l]]=e[a[l]]);return n};const oe=e=>{const{getPopupContainer:o,getPrefixCls:n,direction:a}=i.useContext(te),{prefixCls:l,type:s="default",danger:t,disabled:d,loading:g,onClick:C,htmlType:w,children:P,className:p,menu:f,arrow:c,autoFocus:b,overlay:O,trigger:M,align:A,open:L,onOpenChange:m,placement:I,getPopupContainer:z,href:_,icon:E=i.createElement(De,null),title:y,buttonsRender:$=Z=>Z,mouseEnterDelay:H,mouseLeaveDelay:X,overlayClassName:u,overlayStyle:N,destroyPopupOnHide:W,dropdownRender:V}=e,j=We(e,["prefixCls","type","danger","disabled","loading","onClick","htmlType","children","className","menu","arrow","autoFocus","overlay","trigger","align","open","onOpenChange","placement","getPopupContainer","href","icon","title","buttonsRender","mouseEnterDelay","mouseLeaveDelay","overlayClassName","overlayStyle","destroyPopupOnHide","dropdownRender"]),h=n("dropdown",l),R="".concat(h,"-button"),v={menu:f,arrow:c,autoFocus:b,align:A,disabled:d,trigger:d?[]:M,onOpenChange:m,getPopupContainer:z||o,mouseEnterDelay:H,mouseLeaveDelay:X,overlayClassName:u,overlayStyle:N,destroyPopupOnHide:W,dropdownRender:V},{compactSize:S,compactItemClassnames:U}=ve(h,a),q=T(R,U,p);"overlay"in e&&(v.overlay=O),"open"in e&&(v.open=L),"placement"in e?v.placement=I:v.placement=a==="rtl"?"bottomLeft":"bottomRight";const D=i.createElement(k,{type:s,danger:t,disabled:d,loading:g,onClick:C,htmlType:w,href:_,title:y},P),F=i.createElement(k,{type:s,danger:t,icon:E}),[G,Y]=$([D,F]);return i.createElement(je.Compact,Object.assign({className:q,size:S,block:!0},j),G,i.createElement(B,Object.assign({},v),Y))};oe.__ANT_BUTTON=!0;const Ve=B;Ve.Button=oe;export{Ve as D};
