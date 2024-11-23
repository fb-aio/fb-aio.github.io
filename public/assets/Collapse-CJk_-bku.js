import{$ as b,j as X,o as B,X as K,n as W,g as H,C as Y,W as L,t as V,aL as J,Y as U,e as ee,h as ne,r as M,I as q,E as ae,F as te,D as R,H as oe,a5 as le,aO as re,Q as D,a6 as ie,Z as G}from"./index-D5lrbfGq.js";import{l as ce,Z as se,_ as de}from"./MyApp-B2cDPPVC.js";var F=b.forwardRef(function(n,e){var a=n.prefixCls,t=n.forceRender,o=n.className,u=n.style,g=n.children,i=n.isActive,C=n.role,l=b.useState(i||t),p=X(l,2),c=p[0],m=p[1];return b.useEffect(function(){(t||i)&&m(!0)},[t,i]),c?b.createElement("div",{ref:e,className:B("".concat(a,"-content"),K(K({},"".concat(a,"-content-active"),i),"".concat(a,"-content-inactive"),!i),o),style:u,role:C},b.createElement("div",{className:"".concat(a,"-content-box")},g)):null});F.displayName="PanelContent";var ue=["showArrow","headerClass","isActive","onItemClick","forceRender","className","prefixCls","collapsible","accordion","panelKey","extra","header","expandIcon","openMotion","destroyInactivePanel","children"],Z=b.forwardRef(function(n,e){var a=n.showArrow,t=a===void 0?!0:a,o=n.headerClass,u=n.isActive,g=n.onItemClick,i=n.forceRender,C=n.className,l=n.prefixCls,p=n.collapsible,c=n.accordion,m=n.panelKey,d=n.extra,w=n.header,h=n.expandIcon,r=n.openMotion,$=n.destroyInactivePanel,y=n.children,I=W(n,ue),s=p==="disabled",P=p==="header",v=p==="icon",A=d!=null&&typeof d!="boolean",x=function(){g==null||g(m)},S=function(_){(_.key==="Enter"||_.keyCode===L.ENTER||_.which===L.ENTER)&&x()},k=typeof h=="function"?h(n):b.createElement("i",{className:"arrow"});k&&(k=b.createElement("div",{className:"".concat(l,"-expand-icon"),onClick:["header","icon"].includes(p)?x:void 0},k));var f=B(K(K(K({},"".concat(l,"-item"),!0),"".concat(l,"-item-active"),u),"".concat(l,"-item-disabled"),s),C),N=B(o,K(K(K({},"".concat(l,"-header"),!0),"".concat(l,"-header-collapsible-only"),P),"".concat(l,"-icon-collapsible-only"),v)),E={className:N,"aria-expanded":u,"aria-disabled":s,onKeyDown:S};return!P&&!v&&(E.onClick=x,E.role=c?"tab":"button",E.tabIndex=s?-1:0),b.createElement("div",H({},I,{ref:e,className:f}),b.createElement("div",E,t&&k,b.createElement("span",{className:"".concat(l,"-header-text"),onClick:p==="header"?x:void 0},w),A&&b.createElement("div",{className:"".concat(l,"-extra")},d)),b.createElement(Y,H({visible:u,leavedClassName:"".concat(l,"-content-hidden")},r,{forceRender:i,removeOnLeave:$}),function(O,_){var T=O.className,j=O.style;return b.createElement(F,{ref:_,prefixCls:l,className:T,style:j,isActive:u,forceRender:i,role:c?"tabpanel":void 0},y)}))}),me=["children","label","key","collapsible","onItemClick","destroyInactivePanel"],ve=function(e,a){var t=a.prefixCls,o=a.accordion,u=a.collapsible,g=a.destroyInactivePanel,i=a.onItemClick,C=a.activeKey,l=a.openMotion,p=a.expandIcon;return e.map(function(c,m){var d=c.children,w=c.label,h=c.key,r=c.collapsible,$=c.onItemClick,y=c.destroyInactivePanel,I=W(c,me),s=String(h??m),P=r??u,v=y??g,A=function(k){P!=="disabled"&&(i(k),$==null||$(k))},x=!1;return o?x=C[0]===s:x=C.indexOf(s)>-1,b.createElement(Z,H({},I,{prefixCls:t,key:s,panelKey:s,isActive:x,accordion:o,openMotion:l,expandIcon:p,header:w,collapsible:P,onItemClick:A,destroyInactivePanel:v}),d)})},fe=function(e,a,t){if(!e)return null;var o=t.prefixCls,u=t.accordion,g=t.collapsible,i=t.destroyInactivePanel,C=t.onItemClick,l=t.activeKey,p=t.openMotion,c=t.expandIcon,m=e.key||String(a),d=e.props,w=d.header,h=d.headerClass,r=d.destroyInactivePanel,$=d.collapsible,y=d.onItemClick,I=!1;u?I=l[0]===m:I=l.indexOf(m)>-1;var s=$??g,P=function(x){s!=="disabled"&&(C(x),y==null||y(x))},v={key:m,panelKey:m,header:w,headerClass:h,isActive:I,prefixCls:o,destroyInactivePanel:r??i,openMotion:p,accordion:u,children:e.props.children,onItemClick:P,expandIcon:c,collapsible:s};return typeof e.type=="string"?e:(Object.keys(v).forEach(function(A){typeof v[A]>"u"&&delete v[A]}),b.cloneElement(e,v))};function ge(n,e,a){return Array.isArray(n)?ve(n,a):V(e).map(function(t,o){return fe(t,o,a)})}function Ce(n){var e=n;if(!Array.isArray(e)){var a=ee(e);e=a==="number"||a==="string"?[e]:[]}return e.map(function(t){return String(t)})}var pe=b.forwardRef(function(n,e){var a=n.prefixCls,t=a===void 0?"rc-collapse":a,o=n.destroyInactivePanel,u=o===void 0?!1:o,g=n.style,i=n.accordion,C=n.className,l=n.children,p=n.collapsible,c=n.openMotion,m=n.expandIcon,d=n.activeKey,w=n.defaultActiveKey,h=n.onChange,r=n.items,$=B(t,C),y=ce([],{value:d,onChange:function(S){return h==null?void 0:h(S)},defaultValue:w,postState:Ce}),I=X(y,2),s=I[0],P=I[1],v=function(S){return P(function(){if(i)return s[0]===S?[]:[S];var k=s.indexOf(S),f=k>-1;return f?s.filter(function(N){return N!==S}):[].concat(ne(s),[S])})};U(!l,"[rc-collapse] `children` will be removed in next major version. Please use `items` instead.");var A=ge(r,l,{prefixCls:t,accordion:i,openMotion:c,expandIcon:m,collapsible:p,destroyInactivePanel:u,onItemClick:v,activeKey:s});return b.createElement("div",H({ref:e,className:$,style:g,role:i?"tablist":void 0},J(n,{aria:!0,data:!0})),A)});const z=Object.assign(pe,{Panel:Z});z.Panel;const be=M.forwardRef((n,e)=>{const{getPrefixCls:a}=M.useContext(q),{prefixCls:t,className:o,showArrow:u=!0}=n,g=a("collapse",t),i=B({[`${g}-no-arrow`]:!u},o);return M.createElement(z.Panel,Object.assign({ref:e},n,{prefixCls:g,className:i}))}),he=n=>{const{componentCls:e,contentBg:a,padding:t,headerBg:o,headerPadding:u,collapseHeaderPaddingSM:g,collapseHeaderPaddingLG:i,collapsePanelBorderRadius:C,lineWidth:l,lineType:p,colorBorder:c,colorText:m,colorTextHeading:d,colorTextDisabled:w,fontSizeLG:h,lineHeight:r,lineHeightLG:$,marginSM:y,paddingSM:I,paddingLG:s,paddingXS:P,motionDurationSlow:v,fontSizeIcon:A,contentPadding:x,fontHeight:S,fontHeightLG:k}=n,f=`${R(l)} ${p} ${c}`;return{[e]:Object.assign(Object.assign({},oe(n)),{backgroundColor:o,border:f,borderRadius:C,"&-rtl":{direction:"rtl"},[`& > ${e}-item`]:{borderBottom:f,"&:last-child":{[`
            &,
            & > ${e}-header`]:{borderRadius:`0 0 ${R(C)} ${R(C)}`}},[`> ${e}-header`]:{position:"relative",display:"flex",flexWrap:"nowrap",alignItems:"flex-start",padding:u,color:d,lineHeight:r,cursor:"pointer",transition:`all ${v}, visibility 0s`,[`> ${e}-header-text`]:{flex:"auto"},"&:focus":{outline:"none"},[`${e}-expand-icon`]:{height:S,display:"flex",alignItems:"center",paddingInlineEnd:y},[`${e}-arrow`]:Object.assign(Object.assign({},le()),{fontSize:A,transition:`transform ${v}`,svg:{transition:`transform ${v}`}}),[`${e}-header-text`]:{marginInlineEnd:"auto"}},[`${e}-icon-collapsible-only`]:{cursor:"unset",[`${e}-expand-icon`]:{cursor:"pointer"}}},[`${e}-content`]:{color:m,backgroundColor:a,borderTop:f,[`& > ${e}-content-box`]:{padding:x},"&-hidden":{display:"none"}},"&-small":{[`> ${e}-item`]:{[`> ${e}-header`]:{padding:g,paddingInlineStart:P,[`> ${e}-expand-icon`]:{marginInlineStart:n.calc(I).sub(P).equal()}},[`> ${e}-content > ${e}-content-box`]:{padding:I}}},"&-large":{[`> ${e}-item`]:{fontSize:h,lineHeight:$,[`> ${e}-header`]:{padding:i,paddingInlineStart:t,[`> ${e}-expand-icon`]:{height:k,marginInlineStart:n.calc(s).sub(t).equal()}},[`> ${e}-content > ${e}-content-box`]:{padding:s}}},[`${e}-item:last-child`]:{borderBottom:0,[`> ${e}-content`]:{borderRadius:`0 0 ${R(C)} ${R(C)}`}},[`& ${e}-item-disabled > ${e}-header`]:{"\n          &,\n          & > .arrow\n        ":{color:w,cursor:"not-allowed"}},[`&${e}-icon-position-end`]:{[`& > ${e}-item`]:{[`> ${e}-header`]:{[`${e}-expand-icon`]:{order:1,paddingInlineEnd:0,paddingInlineStart:y}}}}})}},xe=n=>{const{componentCls:e}=n,a=`> ${e}-item > ${e}-header ${e}-arrow`;return{[`${e}-rtl`]:{[a]:{transform:"rotate(180deg)"}}}},ye=n=>{const{componentCls:e,headerBg:a,paddingXXS:t,colorBorder:o}=n;return{[`${e}-borderless`]:{backgroundColor:a,border:0,[`> ${e}-item`]:{borderBottom:`1px solid ${o}`},[`
        > ${e}-item:last-child,
        > ${e}-item:last-child ${e}-header
      `]:{borderRadius:0},[`> ${e}-item:last-child`]:{borderBottom:0},[`> ${e}-item > ${e}-content`]:{backgroundColor:"transparent",borderTop:0},[`> ${e}-item > ${e}-content > ${e}-content-box`]:{paddingTop:t}}}},$e=n=>{const{componentCls:e,paddingSM:a}=n;return{[`${e}-ghost`]:{backgroundColor:"transparent",border:0,[`> ${e}-item`]:{borderBottom:0,[`> ${e}-content`]:{backgroundColor:"transparent",border:0,[`> ${e}-content-box`]:{paddingBlock:a}}}}}},Ie=n=>({headerPadding:`${n.paddingSM}px ${n.padding}px`,headerBg:n.colorFillAlter,contentPadding:`${n.padding}px 16px`,contentBg:n.colorBgContainer}),Pe=ae("Collapse",n=>{const e=te(n,{collapseHeaderPaddingSM:`${R(n.paddingXS)} ${R(n.paddingSM)}`,collapseHeaderPaddingLG:`${R(n.padding)} ${R(n.paddingLG)}`,collapsePanelBorderRadius:n.borderRadiusLG});return[he(e),ye(e),$e(e),xe(e),se(e)]},Ie),Se=M.forwardRef((n,e)=>{const{getPrefixCls:a,direction:t,collapse:o}=M.useContext(q),{prefixCls:u,className:g,rootClassName:i,style:C,bordered:l=!0,ghost:p,size:c,expandIconPosition:m="start",children:d,expandIcon:w}=n,h=re(f=>{var N;return(N=c??f)!==null&&N!==void 0?N:"middle"}),r=a("collapse",u),$=a(),[y,I,s]=Pe(r),P=M.useMemo(()=>m==="left"?"start":m==="right"?"end":m,[m]),v=w??(o==null?void 0:o.expandIcon),A=M.useCallback(function(){let f=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const N=typeof v=="function"?v(f):M.createElement(de,{rotate:f.isActive?90:void 0});return D(N,()=>{var E;return{className:B((E=N==null?void 0:N.props)===null||E===void 0?void 0:E.className,`${r}-arrow`)}})},[v,r]),x=B(`${r}-icon-position-${P}`,{[`${r}-borderless`]:!l,[`${r}-rtl`]:t==="rtl",[`${r}-ghost`]:!!p,[`${r}-${h}`]:h!=="middle"},o==null?void 0:o.className,g,i,I,s),S=Object.assign(Object.assign({},ie($)),{motionAppear:!1,leavedClassName:`${r}-content-hidden`}),k=M.useMemo(()=>d?V(d).map((f,N)=>{var E,O;if(!((E=f.props)===null||E===void 0)&&E.disabled){const _=(O=f.key)!==null&&O!==void 0?O:String(N),{disabled:T,collapsible:j}=f.props,Q=Object.assign(Object.assign({},G(f.props,["disabled"])),{key:_,collapsible:j??(T?"disabled":void 0)});return D(f,Q)}return f}):null,[d]);return y(M.createElement(z,Object.assign({ref:e,openMotion:S},G(n,["rootClassName"]),{expandIcon:A,prefixCls:r,className:x,style:Object.assign(Object.assign({},o==null?void 0:o.style),C)}),k))}),Ae=Object.assign(Se,{Panel:be});export{Ae as C};
