import{F as re,G as le,J as se,bv as Q,E as x,H as de,r as a,L as ne,a7 as ce,M as pe,S as ue,p as T,l as me,Q as ge,a0 as ve,T as be,U as $e,bp as fe,aM as k}from"./index-CvOM7j0W.js";import{K as we,J as Ce,M as ye,L as he,Y as Se,O as ee,Z as xe,I as Pe,w as Oe,_ as Ie,$ as Ee,a0 as ze,R as Ne,S as je,W as Re}from"./MyApp-8NcaG9i1.js";import{D as De}from"./Dropdown-DjRsOusC.js";import{i as oe,g as Te}from"./PurePanel-D5wFQEms.js";const Be=e=>typeof e!="object"&&typeof e!="function"||e===null,Me=e=>{const{componentCls:t,menuCls:o,colorError:i,colorTextLightSolid:l}=e,s=`${o}-item`;return{[`${t}, ${t}-menu-submenu`]:{[`${o} ${s}`]:{[`&${s}-danger:not(${s}-disabled)`]:{color:i,"&:hover":{color:l,backgroundColor:i}}}}}},Le=e=>{const{componentCls:t,menuCls:o,zIndexPopup:i,dropdownArrowDistance:l,sizePopupArrow:s,antCls:n,iconCls:d,motionDurationMid:g,paddingBlock:w,fontSize:C,dropdownEdgeChildPadding:P,colorTextDisabled:u,fontSizeIcon:v,controlPaddingHorizontal:c,colorBgElevated:b}=e;return[{[t]:{position:"absolute",top:-9999,left:{_skip_check_:!0,value:-9999},zIndex:i,display:"block","&::before":{position:"absolute",insetBlock:e.calc(s).div(2).sub(l).equal(),zIndex:-9999,opacity:1e-4,content:'""'},"&-menu-vertical":{maxHeight:"100vh",overflowY:"auto"},[`&-trigger${n}-btn`]:{[`& > ${d}-down, & > ${n}-btn-icon > ${d}-down`]:{fontSize:v}},[`${t}-wrap`]:{position:"relative",[`${n}-btn > ${d}-down`]:{fontSize:v},[`${d}-down::before`]:{transition:`transform ${g}`}},[`${t}-wrap-open`]:{[`${d}-down::before`]:{transform:"rotate(180deg)"}},"\n        &-hidden,\n        &-menu-hidden,\n        &-menu-submenu-hidden\n      ":{display:"none"},[`&${n}-slide-down-enter${n}-slide-down-enter-active${t}-placement-bottomLeft,
          &${n}-slide-down-appear${n}-slide-down-appear-active${t}-placement-bottomLeft,
          &${n}-slide-down-enter${n}-slide-down-enter-active${t}-placement-bottom,
          &${n}-slide-down-appear${n}-slide-down-appear-active${t}-placement-bottom,
          &${n}-slide-down-enter${n}-slide-down-enter-active${t}-placement-bottomRight,
          &${n}-slide-down-appear${n}-slide-down-appear-active${t}-placement-bottomRight`]:{animationName:we},[`&${n}-slide-up-enter${n}-slide-up-enter-active${t}-placement-topLeft,
          &${n}-slide-up-appear${n}-slide-up-appear-active${t}-placement-topLeft,
          &${n}-slide-up-enter${n}-slide-up-enter-active${t}-placement-top,
          &${n}-slide-up-appear${n}-slide-up-appear-active${t}-placement-top,
          &${n}-slide-up-enter${n}-slide-up-enter-active${t}-placement-topRight,
          &${n}-slide-up-appear${n}-slide-up-appear-active${t}-placement-topRight`]:{animationName:Ce},[`&${n}-slide-down-leave${n}-slide-down-leave-active${t}-placement-bottomLeft,
          &${n}-slide-down-leave${n}-slide-down-leave-active${t}-placement-bottom,
          &${n}-slide-down-leave${n}-slide-down-leave-active${t}-placement-bottomRight`]:{animationName:ye},[`&${n}-slide-up-leave${n}-slide-up-leave-active${t}-placement-topLeft,
          &${n}-slide-up-leave${n}-slide-up-leave-active${t}-placement-top,
          &${n}-slide-up-leave${n}-slide-up-leave-active${t}-placement-topRight`]:{animationName:he}}},Se(e,b,{arrowPlacement:{top:!0,bottom:!0}}),{[`${t} ${o}`]:{position:"relative",margin:0},[`${o}-submenu-popup`]:{position:"absolute",zIndex:i,background:"transparent",boxShadow:"none",transformOrigin:"0 0","ul, li":{listStyle:"none",margin:0}},[`${t}, ${t}-menu-submenu`]:Object.assign(Object.assign({},se(e)),{[o]:Object.assign(Object.assign({padding:P,listStyleType:"none",backgroundColor:b,backgroundClip:"padding-box",borderRadius:e.borderRadiusLG,outline:"none",boxShadow:e.boxShadowSecondary},Q(e)),{"&:empty":{padding:0,boxShadow:"none"},[`${o}-item-group-title`]:{padding:`${x(w)} ${x(c)}`,color:e.colorTextDescription,transition:`all ${g}`},[`${o}-item`]:{position:"relative",display:"flex",alignItems:"center"},[`${o}-item-icon`]:{minWidth:C,marginInlineEnd:e.marginXS,fontSize:e.fontSizeSM},[`${o}-title-content`]:{flex:"auto","&-with-extra":{display:"inline-flex",alignItems:"center",width:"100%"},"> a":{color:"inherit",transition:`all ${g}`,"&:hover":{color:"inherit"},"&::after":{position:"absolute",inset:0,content:'""'}},[`${o}-item-extra`]:{paddingInlineStart:e.padding,marginInlineStart:"auto",fontSize:e.fontSizeSM,color:e.colorTextDescription}},[`${o}-item, ${o}-submenu-title`]:Object.assign(Object.assign({display:"flex",margin:0,padding:`${x(w)} ${x(c)}`,color:e.colorText,fontWeight:"normal",fontSize:C,lineHeight:e.lineHeight,cursor:"pointer",transition:`all ${g}`,borderRadius:e.borderRadiusSM,"&:hover, &-active":{backgroundColor:e.controlItemBgHover}},Q(e)),{"&-selected":{color:e.colorPrimary,backgroundColor:e.controlItemBgActive,"&:hover, &-active":{backgroundColor:e.controlItemBgActiveHover}},"&-disabled":{color:u,cursor:"not-allowed","&:hover":{color:u,backgroundColor:b,cursor:"not-allowed"},a:{pointerEvents:"none"}},"&-divider":{height:1,margin:`${x(e.marginXXS)} 0`,overflow:"hidden",lineHeight:0,backgroundColor:e.colorSplit},[`${t}-menu-submenu-expand-icon`]:{position:"absolute",insetInlineEnd:e.paddingXS,[`${t}-menu-submenu-arrow-icon`]:{marginInlineEnd:"0 !important",color:e.colorTextDescription,fontSize:v,fontStyle:"normal"}}}),[`${o}-item-group-list`]:{margin:`0 ${x(e.marginXS)}`,padding:0,listStyle:"none"},[`${o}-submenu-title`]:{paddingInlineEnd:e.calc(c).add(e.fontSizeSM).equal()},[`${o}-submenu-vertical`]:{position:"relative"},[`${o}-submenu${o}-submenu-disabled ${t}-menu-submenu-title`]:{[`&, ${t}-menu-submenu-arrow-icon`]:{color:u,backgroundColor:b,cursor:"not-allowed"}},[`${o}-submenu-selected ${t}-menu-submenu-title`]:{color:e.colorPrimary}})})},[ee(e,"slide-up"),ee(e,"slide-down"),oe(e,"move-up"),oe(e,"move-down"),de(e,"zoom-big")]]},Ae=e=>Object.assign(Object.assign({zIndexPopup:e.zIndexPopupBase+50,paddingBlock:(e.controlHeight-e.fontSize*e.lineHeight)/2},xe({contentRadius:e.borderRadiusLG,limitVerticalRadius:!0})),Pe(e)),_e=re("Dropdown",e=>{const{marginXXS:t,sizePopupArrow:o,paddingXXS:i,componentCls:l}=e,s=le(e,{menuCls:`${l}-menu`,dropdownArrowDistance:e.calc(o).div(2).add(t).equal(),dropdownEdgeChildPadding:i});return[Le(s),Me(s)]},Ae,{resetStyle:!1}),B=e=>{var t;const{menu:o,arrow:i,prefixCls:l,children:s,trigger:n,disabled:d,dropdownRender:g,getPopupContainer:w,overlayClassName:C,rootClassName:P,overlayStyle:u,open:v,onOpenChange:c,visible:b,onVisibleChange:O,mouseEnterDelay:M=.15,mouseLeaveDelay:L=.1,autoAdjustOverflow:A=!0,placement:m="",overlay:I,transitionName:E}=e,{getPopupContainer:_,getPrefixCls:z,direction:y,dropdown:$}=a.useContext(ne);$e();const H=a.useMemo(()=>{const r=z();return E!==void 0?E:m.includes("top")?`${r}-slide-down`:`${r}-slide-up`},[z,m,E]),X=a.useMemo(()=>m?m.includes("Center")?m.slice(0,m.indexOf("Center")):m:y==="rtl"?"bottomRight":"bottomLeft",[m,y]),p=z("dropdown",l),N=ce(p),[W,U,R]=_e(p,N),[,h]=pe(),j=a.Children.only(Be(s)?a.createElement("span",null,s):s),f=ue(j,{className:T(`${p}-trigger`,{[`${p}-rtl`]:y==="rtl"},j.props.className),disabled:(t=j.props.disabled)!==null&&t!==void 0?t:d}),S=d?[]:n,V=!!(S!=null&&S.includes("contextMenu")),[F,D]=Oe(!1,{value:v??b}),Y=me(r=>{c==null||c(r,{source:"trigger"}),O==null||O(r),D(r)}),Z=T(C,P,U,R,N,$==null?void 0:$.className,{[`${p}-rtl`]:y==="rtl"}),q=Ie({arrowPointAtCenter:typeof i=="object"&&i.pointAtCenter,autoAdjustOverflow:A,offset:h.marginXXS,arrowWidth:i?h.sizePopupArrow:0,borderRadius:h.borderRadius}),G=a.useCallback(()=>{o!=null&&o.selectable&&(o!=null&&o.multiple)||(c==null||c(!1,{source:"menu"}),D(!1))},[o==null?void 0:o.selectable,o==null?void 0:o.multiple]),ie=()=>{let r;return o!=null&&o.items?r=a.createElement(Ee,Object.assign({},o)):typeof I=="function"?r=I():r=I,g&&(r=g(r)),r=a.Children.only(typeof r=="string"?a.createElement("span",null,r):r),a.createElement(ze,{prefixCls:`${p}-menu`,rootClassName:T(R,N),expandIcon:a.createElement("span",{className:`${p}-menu-submenu-arrow`},a.createElement(Ne,{className:`${p}-menu-submenu-arrow-icon`})),mode:"vertical",selectable:!1,onClick:G,validator:Fe=>{}},r)},[K,ae]=ge("Dropdown",u==null?void 0:u.zIndex);let J=a.createElement(De,Object.assign({alignPoint:V},ve(e,["rootClassName"]),{mouseEnterDelay:M,mouseLeaveDelay:L,visible:F,builtinPlacements:q,arrow:!!i,overlayClassName:Z,prefixCls:p,getPopupContainer:w||_,transitionName:H,trigger:S,overlay:ie,placement:X,onVisibleChange:Y,overlayStyle:Object.assign(Object.assign(Object.assign({},$==null?void 0:$.style),u),{zIndex:K})}),f);return K&&(J=a.createElement(be.Provider,{value:ae},J)),W(J)};function He(e){return Object.assign(Object.assign({},e),{align:{overflow:{adjustX:!1,adjustY:!1}}})}const Xe=Te(B,"dropdown",e=>e,He),We=e=>a.createElement(Xe,Object.assign({},e),a.createElement("span",null));B._InternalPanelDoNotUseOrYouWillBeFired=We;var Ue=function(e,t){var o={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(o[i]=e[i]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,i=Object.getOwnPropertySymbols(e);l<i.length;l++)t.indexOf(i[l])<0&&Object.prototype.propertyIsEnumerable.call(e,i[l])&&(o[i[l]]=e[i[l]]);return o};const te=e=>{const{getPopupContainer:t,getPrefixCls:o,direction:i}=a.useContext(ne),{prefixCls:l,type:s="default",danger:n,disabled:d,loading:g,onClick:w,htmlType:C,children:P,className:u,menu:v,arrow:c,autoFocus:b,overlay:O,trigger:M,align:L,open:A,onOpenChange:m,placement:I,getPopupContainer:E,href:_,icon:z=a.createElement(Re,null),title:y,buttonsRender:$=G=>G,mouseEnterDelay:H,mouseLeaveDelay:X,overlayClassName:p,overlayStyle:N,destroyPopupOnHide:W,dropdownRender:U}=e,R=Ue(e,["prefixCls","type","danger","disabled","loading","onClick","htmlType","children","className","menu","arrow","autoFocus","overlay","trigger","align","open","onOpenChange","placement","getPopupContainer","href","icon","title","buttonsRender","mouseEnterDelay","mouseLeaveDelay","overlayClassName","overlayStyle","destroyPopupOnHide","dropdownRender"]),h=o("dropdown",l),j=`${h}-button`,f={menu:v,arrow:c,autoFocus:b,align:L,disabled:d,trigger:d?[]:M,onOpenChange:m,getPopupContainer:E||t,mouseEnterDelay:H,mouseLeaveDelay:X,overlayClassName:p,overlayStyle:N,destroyPopupOnHide:W,dropdownRender:U},{compactSize:S,compactItemClassnames:V}=fe(h,i),F=T(j,V,u);"overlay"in e&&(f.overlay=O),"open"in e&&(f.open=A),"placement"in e?f.placement=I:f.placement=i==="rtl"?"bottomLeft":"bottomRight";const D=a.createElement(k,{type:s,danger:n,disabled:d,loading:g,onClick:w,htmlType:C,href:_,title:y},P),Y=a.createElement(k,{type:s,danger:n,icon:z}),[Z,q]=$([D,Y]);return a.createElement(je.Compact,Object.assign({className:F,size:S,block:!0},R),Z,a.createElement(B,Object.assign({},f),q))};te.__ANT_BUTTON=!0;const Ve=B;Ve.Button=te;export{Ve as D};
