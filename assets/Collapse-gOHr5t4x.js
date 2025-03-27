import{$ as y,_ as W,q as _,a0 as O,p as X,Z as G,c as z,l as U,C as Y,t as q,ak as ee,n as ne,a3 as ae,o as te,r as M,G as V,L as le,M as re,J as k,O as oe,ae as ie,aa as se,ag as de,W as L,ac as ce,a4 as D}from"./index-BxqI5Gd0.js";import{z as ue,aE as fe,af as me}from"./MyApp-ByiHX0qM.js";var F=y.forwardRef(function(n,e){var a=n.prefixCls,t=n.forceRender,l=n.className,C=n.style,d=n.children,i=n.isActive,u=n.role,p=n.classNames,x=n.styles,s=y.useState(i||t),c=W(s,2),r=c[0],f=c[1];return y.useEffect(function(){(t||i)&&f(!0)},[t,i]),r?y.createElement("div",{ref:e,className:_("".concat(a,"-content"),O(O({},"".concat(a,"-content-active"),i),"".concat(a,"-content-inactive"),!i),l),style:C,role:u},y.createElement("div",{className:_("".concat(a,"-content-box"),p==null?void 0:p.body),style:x==null?void 0:x.body},d)):null});F.displayName="PanelContent";var ge=["showArrow","headerClass","isActive","onItemClick","forceRender","className","classNames","styles","prefixCls","collapsible","accordion","panelKey","extra","header","expandIcon","openMotion","destroyInactivePanel","children"],J=y.forwardRef(function(n,e){var a=n.showArrow,t=a===void 0?!0:a,l=n.headerClass,C=n.isActive,d=n.onItemClick,i=n.forceRender,u=n.className,p=n.classNames,x=p===void 0?{}:p,s=n.styles,c=s===void 0?{}:s,r=n.prefixCls,f=n.collapsible,h=n.accordion,o=n.panelKey,v=n.extra,$=n.header,I=n.expandIcon,m=n.openMotion,w=n.destroyInactivePanel,b=n.children,A=X(n,ge),P=f==="disabled",N=v!=null&&typeof v!="boolean",E=O(O(O({onClick:function(){d==null||d(o)},onKeyDown:function(K){(K.key==="Enter"||K.keyCode===G.ENTER||K.which===G.ENTER)&&(d==null||d(o))},role:h?"tab":"button"},"aria-expanded",C),"aria-disabled",P),"tabIndex",P?-1:0),g=typeof I=="function"?I(n):y.createElement("i",{className:"arrow"}),S=g&&y.createElement("div",z({className:"".concat(r,"-expand-icon")},["header","icon"].includes(f)?E:{}),g),R=_("".concat(r,"-item"),O(O({},"".concat(r,"-item-active"),C),"".concat(r,"-item-disabled"),P),u),T=_(l,"".concat(r,"-header"),O({},"".concat(r,"-collapsible-").concat(f),!!f),x.header),j=U({className:T,style:c.header},["header","icon"].includes(f)?{}:E);return y.createElement("div",z({},A,{ref:e,className:R}),y.createElement("div",j,t&&S,y.createElement("span",z({className:"".concat(r,"-header-text")},f==="header"?E:{}),$),N&&y.createElement("div",{className:"".concat(r,"-extra")},v)),y.createElement(Y,z({visible:C,leavedClassName:"".concat(r,"-content-hidden")},m,{forceRender:i,removeOnLeave:w}),function(B,K){var Z=B.className,Q=B.style;return y.createElement(F,{ref:K,prefixCls:r,className:Z,classNames:x,style:Q,styles:c,isActive:C,forceRender:i,role:h?"tabpanel":void 0},b)}))}),Ce=["children","label","key","collapsible","onItemClick","destroyInactivePanel"],pe=function(e,a){var t=a.prefixCls,l=a.accordion,C=a.collapsible,d=a.destroyInactivePanel,i=a.onItemClick,u=a.activeKey,p=a.openMotion,x=a.expandIcon;return e.map(function(s,c){var r=s.children,f=s.label,h=s.key,o=s.collapsible,v=s.onItemClick,$=s.destroyInactivePanel,I=X(s,Ce),m=String(h!=null?h:c),w=o!=null?o:C,b=$!=null?$:d,A=function(E){w!=="disabled"&&(i(E),v==null||v(E))},P=!1;return l?P=u[0]===m:P=u.indexOf(m)>-1,y.createElement(J,z({},I,{prefixCls:t,key:m,panelKey:m,isActive:P,accordion:l,openMotion:p,expandIcon:x,header:f,collapsible:w,onItemClick:A,destroyInactivePanel:b}),r)})},ve=function(e,a,t){if(!e)return null;var l=t.prefixCls,C=t.accordion,d=t.collapsible,i=t.destroyInactivePanel,u=t.onItemClick,p=t.activeKey,x=t.openMotion,s=t.expandIcon,c=e.key||String(a),r=e.props,f=r.header,h=r.headerClass,o=r.destroyInactivePanel,v=r.collapsible,$=r.onItemClick,I=!1;C?I=p[0]===c:I=p.indexOf(c)>-1;var m=v!=null?v:d,w=function(P){m!=="disabled"&&(u(P),$==null||$(P))},b={key:c,panelKey:c,header:f,headerClass:h,isActive:I,prefixCls:l,destroyInactivePanel:o!=null?o:i,openMotion:x,accordion:C,children:e.props.children,onItemClick:w,expandIcon:s,collapsible:m};return typeof e.type=="string"?e:(Object.keys(b).forEach(function(A){typeof b[A]>"u"&&delete b[A]}),y.cloneElement(e,b))};function be(n,e,a){return Array.isArray(n)?pe(n,a):q(e).map(function(t,l){return ve(t,l,a)})}function ye(n){var e=n;if(!Array.isArray(e)){var a=ne(e);e=a==="number"||a==="string"?[e]:[]}return e.map(function(t){return String(t)})}var he=y.forwardRef(function(n,e){var a=n.prefixCls,t=a===void 0?"rc-collapse":a,l=n.destroyInactivePanel,C=l===void 0?!1:l,d=n.style,i=n.accordion,u=n.className,p=n.children,x=n.collapsible,s=n.openMotion,c=n.expandIcon,r=n.activeKey,f=n.defaultActiveKey,h=n.onChange,o=n.items,v=_(t,u),$=ue([],{value:r,onChange:function(N){return h==null?void 0:h(N)},defaultValue:f,postState:ye}),I=W($,2),m=I[0],w=I[1],b=function(N){return w(function(){if(i)return m[0]===N?[]:[N];var E=m.indexOf(N),g=E>-1;return g?m.filter(function(S){return S!==N}):[].concat(te(m),[N])})};ae(!p,"[rc-collapse] `children` will be removed in next major version. Please use `items` instead.");var A=be(o,p,{prefixCls:t,accordion:i,openMotion:s,expandIcon:c,collapsible:x,destroyInactivePanel:C,onItemClick:b,activeKey:m});return y.createElement("div",z({ref:e,className:v,style:d,role:i?"tablist":void 0},ee(n,{aria:!0,data:!0})),A)});const H=Object.assign(he,{Panel:J});H.Panel;const xe=M.forwardRef((n,e)=>{const{getPrefixCls:a}=M.useContext(V),{prefixCls:t,className:l,showArrow:C=!0}=n,d=a("collapse",t),i=_({["".concat(d,"-no-arrow")]:!C},l);return M.createElement(H.Panel,Object.assign({ref:e},n,{prefixCls:d,className:i}))}),$e=n=>{const{componentCls:e,contentBg:a,padding:t,headerBg:l,headerPadding:C,collapseHeaderPaddingSM:d,collapseHeaderPaddingLG:i,collapsePanelBorderRadius:u,lineWidth:p,lineType:x,colorBorder:s,colorText:c,colorTextHeading:r,colorTextDisabled:f,fontSizeLG:h,lineHeight:o,lineHeightLG:v,marginSM:$,paddingSM:I,paddingLG:m,paddingXS:w,motionDurationSlow:b,fontSizeIcon:A,contentPadding:P,fontHeight:N,fontHeightLG:E}=n,g="".concat(k(p)," ").concat(x," ").concat(s);return{[e]:Object.assign(Object.assign({},oe(n)),{backgroundColor:l,border:g,borderRadius:u,"&-rtl":{direction:"rtl"},["& > ".concat(e,"-item")]:{borderBottom:g,"&:first-child":{["\n            &,\n            & > ".concat(e,"-header")]:{borderRadius:"".concat(k(u)," ").concat(k(u)," 0 0")}},"&:last-child":{["\n            &,\n            & > ".concat(e,"-header")]:{borderRadius:"0 0 ".concat(k(u)," ").concat(k(u))}},["> ".concat(e,"-header")]:Object.assign(Object.assign({position:"relative",display:"flex",flexWrap:"nowrap",alignItems:"flex-start",padding:C,color:r,lineHeight:o,cursor:"pointer",transition:"all ".concat(b,", visibility 0s")},ie(n)),{["> ".concat(e,"-header-text")]:{flex:"auto"},["".concat(e,"-expand-icon")]:{height:N,display:"flex",alignItems:"center",paddingInlineEnd:$},["".concat(e,"-arrow")]:Object.assign(Object.assign({},se()),{fontSize:A,transition:"transform ".concat(b),svg:{transition:"transform ".concat(b)}}),["".concat(e,"-header-text")]:{marginInlineEnd:"auto"}}),["".concat(e,"-collapsible-header")]:{cursor:"default",["".concat(e,"-header-text")]:{flex:"none",cursor:"pointer"}},["".concat(e,"-collapsible-icon")]:{cursor:"unset",["".concat(e,"-expand-icon")]:{cursor:"pointer"}}},["".concat(e,"-content")]:{color:c,backgroundColor:a,borderTop:g,["& > ".concat(e,"-content-box")]:{padding:P},"&-hidden":{display:"none"}},"&-small":{["> ".concat(e,"-item")]:{["> ".concat(e,"-header")]:{padding:d,paddingInlineStart:w,["> ".concat(e,"-expand-icon")]:{marginInlineStart:n.calc(I).sub(w).equal()}},["> ".concat(e,"-content > ").concat(e,"-content-box")]:{padding:I}}},"&-large":{["> ".concat(e,"-item")]:{fontSize:h,lineHeight:v,["> ".concat(e,"-header")]:{padding:i,paddingInlineStart:t,["> ".concat(e,"-expand-icon")]:{height:E,marginInlineStart:n.calc(m).sub(t).equal()}},["> ".concat(e,"-content > ").concat(e,"-content-box")]:{padding:m}}},["".concat(e,"-item:last-child")]:{borderBottom:0,["> ".concat(e,"-content")]:{borderRadius:"0 0 ".concat(k(u)," ").concat(k(u))}},["& ".concat(e,"-item-disabled > ").concat(e,"-header")]:{"\n          &,\n          & > .arrow\n        ":{color:f,cursor:"not-allowed"}},["&".concat(e,"-icon-position-end")]:{["& > ".concat(e,"-item")]:{["> ".concat(e,"-header")]:{["".concat(e,"-expand-icon")]:{order:1,paddingInlineEnd:0,paddingInlineStart:$}}}}})}},Ie=n=>{const{componentCls:e}=n,a="> ".concat(e,"-item > ").concat(e,"-header ").concat(e,"-arrow");return{["".concat(e,"-rtl")]:{[a]:{transform:"rotate(180deg)"}}}},Pe=n=>{const{componentCls:e,headerBg:a,paddingXXS:t,colorBorder:l}=n;return{["".concat(e,"-borderless")]:{backgroundColor:a,border:0,["> ".concat(e,"-item")]:{borderBottom:"1px solid ".concat(l)},["\n        > ".concat(e,"-item:last-child,\n        > ").concat(e,"-item:last-child ").concat(e,"-header\n      ")]:{borderRadius:0},["> ".concat(e,"-item:last-child")]:{borderBottom:0},["> ".concat(e,"-item > ").concat(e,"-content")]:{backgroundColor:"transparent",borderTop:0},["> ".concat(e,"-item > ").concat(e,"-content > ").concat(e,"-content-box")]:{paddingTop:t}}}},Ne=n=>{const{componentCls:e,paddingSM:a}=n;return{["".concat(e,"-ghost")]:{backgroundColor:"transparent",border:0,["> ".concat(e,"-item")]:{borderBottom:0,["> ".concat(e,"-content")]:{backgroundColor:"transparent",border:0,["> ".concat(e,"-content-box")]:{paddingBlock:a}}}}}},Se=n=>({headerPadding:"".concat(n.paddingSM,"px ").concat(n.padding,"px"),headerBg:n.colorFillAlter,contentPadding:"".concat(n.padding,"px 16px"),contentBg:n.colorBgContainer}),we=le("Collapse",n=>{const e=re(n,{collapseHeaderPaddingSM:"".concat(k(n.paddingXS)," ").concat(k(n.paddingSM)),collapseHeaderPaddingLG:"".concat(k(n.padding)," ").concat(k(n.paddingLG)),collapsePanelBorderRadius:n.borderRadiusLG});return[$e(e),Pe(e),Ne(e),Ie(e),fe(e)]},Se),Ae=M.forwardRef((n,e)=>{const{getPrefixCls:a,direction:t,collapse:l}=M.useContext(V),{prefixCls:C,className:d,rootClassName:i,style:u,bordered:p=!0,ghost:x,size:s,expandIconPosition:c="start",children:r,expandIcon:f}=n,h=de(g=>{var S;return(S=s!=null?s:g)!==null&&S!==void 0?S:"middle"}),o=a("collapse",C),v=a(),[$,I,m]=we(o),w=M.useMemo(()=>c==="left"?"start":c==="right"?"end":c,[c]),b=f!=null?f:l==null?void 0:l.expandIcon,A=M.useCallback(function(){let g=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const S=typeof b=="function"?b(g):M.createElement(me,{rotate:g.isActive?t==="rtl"?-90:90:void 0,"aria-label":g.isActive?"expanded":"collapsed"});return L(S,()=>{var R;return{className:_((R=S==null?void 0:S.props)===null||R===void 0?void 0:R.className,"".concat(o,"-arrow"))}})},[b,o]),P=_("".concat(o,"-icon-position-").concat(w),{["".concat(o,"-borderless")]:!p,["".concat(o,"-rtl")]:t==="rtl",["".concat(o,"-ghost")]:!!x,["".concat(o,"-").concat(h)]:h!=="middle"},l==null?void 0:l.className,d,i,I,m),N=Object.assign(Object.assign({},ce(v)),{motionAppear:!1,leavedClassName:"".concat(o,"-content-hidden")}),E=M.useMemo(()=>r?q(r).map((g,S)=>{var R,T;const j=g.props;if(j!=null&&j.disabled){const B=(R=g.key)!==null&&R!==void 0?R:String(S),K=Object.assign(Object.assign({},D(g.props,["disabled"])),{key:B,collapsible:(T=j.collapsible)!==null&&T!==void 0?T:"disabled"});return L(g,K)}return g}):null,[r]);return $(M.createElement(H,Object.assign({ref:e,openMotion:N},D(n,["rootClassName"]),{expandIcon:A,prefixCls:o,className:P,style:Object.assign(Object.assign({},l==null?void 0:l.style),u)}),E))}),Me=Object.assign(Ae,{Panel:xe});export{Me as C};
