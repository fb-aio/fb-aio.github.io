import{r as o,M as N,p as u,G as ue,H as me,L as pe,F as i,a5 as P,a4 as I,bG as fe,a1 as ye,ad as he}from"./index-C5YWxV9K.js";import{T as $e}from"./index-BSpDRV6y.js";var Se=function(e,a){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&a.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,t=Object.getOwnPropertySymbols(e);n<t.length;n++)a.indexOf(t[n])<0&&Object.prototype.propertyIsEnumerable.call(e,t[n])&&(r[t[n]]=e[t[n]]);return r};const W=e=>{var{prefixCls:a,className:r,hoverable:t=!0}=e,n=Se(e,["prefixCls","className","hoverable"]);const{getPrefixCls:s}=o.useContext(N),g=s("card",a),m=u("".concat(g,"-grid"),r,{["".concat(g,"-grid-hoverable")]:t});return o.createElement("div",Object.assign({},n,{className:m}))},ve=e=>{const{antCls:a,componentCls:r,headerHeight:t,headerPadding:n,tabsMarginBottom:s}=e;return Object.assign(Object.assign({display:"flex",justifyContent:"center",flexDirection:"column",minHeight:t,marginBottom:-1,padding:"0 ".concat(i(n)),color:e.colorTextHeading,fontWeight:e.fontWeightStrong,fontSize:e.headerFontSize,background:e.headerBg,borderBottom:"".concat(i(e.lineWidth)," ").concat(e.lineType," ").concat(e.colorBorderSecondary),borderRadius:"".concat(i(e.borderRadiusLG)," ").concat(i(e.borderRadiusLG)," 0 0")},P()),{"&-wrapper":{width:"100%",display:"flex",alignItems:"center"},"&-title":Object.assign(Object.assign({display:"inline-block",flex:1},I),{["\n          > ".concat(r,"-typography,\n          > ").concat(r,"-typography-edit-content\n        ")]:{insetInlineStart:0,marginTop:0,marginBottom:0}}),["".concat(a,"-tabs-top")]:{clear:"both",marginBottom:s,color:e.colorText,fontWeight:"normal",fontSize:e.fontSize,"&-bar":{borderBottom:"".concat(i(e.lineWidth)," ").concat(e.lineType," ").concat(e.colorBorderSecondary)}}})},xe=e=>{const{cardPaddingBase:a,colorBorderSecondary:r,cardShadow:t,lineWidth:n}=e;return{width:"33.33%",padding:a,border:0,borderRadius:0,boxShadow:"\n      ".concat(i(n)," 0 0 0 ").concat(r,",\n      0 ").concat(i(n)," 0 0 ").concat(r,",\n      ").concat(i(n)," ").concat(i(n)," 0 0 ").concat(r,",\n      ").concat(i(n)," 0 0 0 ").concat(r," inset,\n      0 ").concat(i(n)," 0 0 ").concat(r," inset;\n    "),transition:"all ".concat(e.motionDurationMid),"&-hoverable:hover":{position:"relative",zIndex:1,boxShadow:t}}},Ce=e=>{const{componentCls:a,iconCls:r,actionsLiMargin:t,cardActionsIconSize:n,colorBorderSecondary:s,actionsBg:g}=e;return Object.assign(Object.assign({margin:0,padding:0,listStyle:"none",background:g,borderTop:"".concat(i(e.lineWidth)," ").concat(e.lineType," ").concat(s),display:"flex",borderRadius:"0 0 ".concat(i(e.borderRadiusLG)," ").concat(i(e.borderRadiusLG))},P()),{"& > li":{margin:t,color:e.colorTextDescription,textAlign:"center","> span":{position:"relative",display:"block",minWidth:e.calc(e.cardActionsIconSize).mul(2).equal(),fontSize:e.fontSize,lineHeight:e.lineHeight,cursor:"pointer","&:hover":{color:e.colorPrimary,transition:"color ".concat(e.motionDurationMid)},["a:not(".concat(a,"-btn), > ").concat(r)]:{display:"inline-block",width:"100%",color:e.colorTextDescription,lineHeight:i(e.fontHeight),transition:"color ".concat(e.motionDurationMid),"&:hover":{color:e.colorPrimary}},["> ".concat(r)]:{fontSize:n,lineHeight:i(e.calc(n).mul(e.lineHeight).equal())}},"&:not(:last-child)":{borderInlineEnd:"".concat(i(e.lineWidth)," ").concat(e.lineType," ").concat(s)}}})},Oe=e=>Object.assign(Object.assign({margin:"".concat(i(e.calc(e.marginXXS).mul(-1).equal())," 0"),display:"flex"},P()),{"&-avatar":{paddingInlineEnd:e.padding},"&-detail":{overflow:"hidden",flex:1,"> div:not(:last-child)":{marginBottom:e.marginXS}},"&-title":Object.assign({color:e.colorTextHeading,fontWeight:e.fontWeightStrong,fontSize:e.fontSizeLG},I),"&-description":{color:e.colorTextDescription}}),je=e=>{const{componentCls:a,colorFillAlter:r,headerPadding:t,bodyPadding:n}=e;return{["".concat(a,"-head")]:{padding:"0 ".concat(i(t)),background:r,"&-title":{fontSize:e.fontSize}},["".concat(a,"-body")]:{padding:"".concat(i(e.padding)," ").concat(i(n))}}},ze=e=>{const{componentCls:a}=e;return{overflow:"hidden",["".concat(a,"-body")]:{userSelect:"none"}}},Pe=e=>{const{componentCls:a,cardShadow:r,cardHeadPadding:t,colorBorderSecondary:n,boxShadowTertiary:s,bodyPadding:g,extraColor:m}=e;return{[a]:Object.assign(Object.assign({},pe(e)),{position:"relative",background:e.colorBgContainer,borderRadius:e.borderRadiusLG,["&:not(".concat(a,"-bordered)")]:{boxShadow:s},["".concat(a,"-head")]:ve(e),["".concat(a,"-extra")]:{marginInlineStart:"auto",color:m,fontWeight:"normal",fontSize:e.fontSize},["".concat(a,"-body")]:Object.assign({padding:g,borderRadius:"0 0 ".concat(i(e.borderRadiusLG)," ").concat(i(e.borderRadiusLG))},P()),["".concat(a,"-grid")]:xe(e),["".concat(a,"-cover")]:{"> *":{display:"block",width:"100%",borderRadius:"".concat(i(e.borderRadiusLG)," ").concat(i(e.borderRadiusLG)," 0 0")}},["".concat(a,"-actions")]:Ce(e),["".concat(a,"-meta")]:Oe(e)}),["".concat(a,"-bordered")]:{border:"".concat(i(e.lineWidth)," ").concat(e.lineType," ").concat(n),["".concat(a,"-cover")]:{marginTop:-1,marginInlineStart:-1,marginInlineEnd:-1}},["".concat(a,"-hoverable")]:{cursor:"pointer",transition:"box-shadow ".concat(e.motionDurationMid,", border-color ").concat(e.motionDurationMid),"&:hover":{borderColor:"transparent",boxShadow:r}},["".concat(a,"-contain-grid")]:{borderRadius:"".concat(i(e.borderRadiusLG)," ").concat(i(e.borderRadiusLG)," 0 0 "),["".concat(a,"-body")]:{display:"flex",flexWrap:"wrap"},["&:not(".concat(a,"-loading) ").concat(a,"-body")]:{marginBlockStart:e.calc(e.lineWidth).mul(-1).equal(),marginInlineStart:e.calc(e.lineWidth).mul(-1).equal(),padding:0}},["".concat(a,"-contain-tabs")]:{["> div".concat(a,"-head")]:{minHeight:0,["".concat(a,"-head-title, ").concat(a,"-extra")]:{paddingTop:t}}},["".concat(a,"-type-inner")]:je(e),["".concat(a,"-loading")]:ze(e),["".concat(a,"-rtl")]:{direction:"rtl"}}},we=e=>{const{componentCls:a,bodyPaddingSM:r,headerPaddingSM:t,headerHeightSM:n,headerFontSizeSM:s}=e;return{["".concat(a,"-small")]:{["> ".concat(a,"-head")]:{minHeight:n,padding:"0 ".concat(i(t)),fontSize:s,["> ".concat(a,"-head-wrapper")]:{["> ".concat(a,"-extra")]:{fontSize:e.fontSize}}},["> ".concat(a,"-body")]:{padding:r}},["".concat(a,"-small").concat(a,"-contain-tabs")]:{["> ".concat(a,"-head")]:{["".concat(a,"-head-title, ").concat(a,"-extra")]:{paddingTop:0,display:"flex",alignItems:"center"}}}}},Te=e=>{var a,r;return{headerBg:"transparent",headerFontSize:e.fontSizeLG,headerFontSizeSM:e.fontSize,headerHeight:e.fontSizeLG*e.lineHeightLG+e.padding*2,headerHeightSM:e.fontSize*e.lineHeight+e.paddingXS*2,actionsBg:e.colorBgContainer,actionsLiMargin:"".concat(e.paddingSM,"px 0"),tabsMarginBottom:-e.padding-e.lineWidth,extraColor:e.colorText,bodyPaddingSM:12,headerPaddingSM:12,bodyPadding:(a=e.bodyPadding)!==null&&a!==void 0?a:e.paddingLG,headerPadding:(r=e.headerPadding)!==null&&r!==void 0?r:e.paddingLG}},Ee=ue("Card",e=>{const a=me(e,{cardShadow:e.boxShadowCard,cardHeadPadding:e.padding,cardPaddingBase:e.paddingLG,cardActionsIconSize:e.fontSize});return[Pe(a),we(a)]},Te);var R=function(e,a){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&a.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,t=Object.getOwnPropertySymbols(e);n<t.length;n++)a.indexOf(t[n])<0&&Object.prototype.propertyIsEnumerable.call(e,t[n])&&(r[t[n]]=e[t[n]]);return r};const Ne=e=>{const{actionClasses:a,actions:r=[],actionStyle:t}=e;return o.createElement("ul",{className:a,style:t},r.map((n,s)=>{const g="action-".concat(s);return o.createElement("li",{style:{width:"".concat(100/r.length,"%")},key:g},o.createElement("span",null,n))}))},Be=o.forwardRef((e,a)=>{const{prefixCls:r,className:t,rootClassName:n,style:s,extra:g,headStyle:m={},bodyStyle:p={},title:h,loading:v,bordered:x=!0,size:C,type:O,cover:B,actions:j,tabList:$,children:z,activeTabKey:G,defaultActiveTabKey:_,tabBarExtraContent:A,hoverable:F,tabProps:K={},classNames:w,styles:T}=e,q=R(e,["prefixCls","className","rootClassName","style","extra","headStyle","bodyStyle","title","loading","bordered","size","type","cover","actions","tabList","children","activeTabKey","defaultActiveTabKey","tabBarExtraContent","hoverable","tabProps","classNames","styles"]),{getPrefixCls:X,direction:V,card:b}=o.useContext(N),J=c=>{var d;(d=e.onTabChange)===null||d===void 0||d.call(e,c)},f=c=>{var d;return u((d=b==null?void 0:b.classNames)===null||d===void 0?void 0:d[c],w==null?void 0:w[c])},y=c=>{var d;return Object.assign(Object.assign({},(d=b==null?void 0:b.styles)===null||d===void 0?void 0:d[c]),T==null?void 0:T[c])},Q=o.useMemo(()=>{let c=!1;return o.Children.forEach(z,d=>{(d==null?void 0:d.type)===W&&(c=!0)}),c},[z]),l=X("card",r),[U,Y,Z]=Ee(l),k=o.createElement(he,{loading:!0,active:!0,paragraph:{rows:4},title:!1},z),L=G!==void 0,ee=Object.assign(Object.assign({},K),{[L?"activeKey":"defaultActiveKey"]:L?G:_,tabBarExtraContent:A});let M;const S=fe(C),ae=!S||S==="default"?"large":S,H=$?o.createElement($e,Object.assign({size:ae},ee,{className:"".concat(l,"-head-tabs"),onChange:J,items:$.map(c=>{var{tab:d}=c,E=R(c,["tab"]);return Object.assign({label:d},E)})})):null;if(h||g||H){const c=u("".concat(l,"-head"),f("header")),d=u("".concat(l,"-head-title"),f("title")),E=u("".concat(l,"-extra"),f("extra")),be=Object.assign(Object.assign({},m),y("header"));M=o.createElement("div",{className:c,style:be},o.createElement("div",{className:"".concat(l,"-head-wrapper")},h&&o.createElement("div",{className:d,style:y("title")},h),g&&o.createElement("div",{className:E,style:y("extra")},g)),H)}const te=u("".concat(l,"-cover"),f("cover")),ne=B?o.createElement("div",{className:te,style:y("cover")},B):null,re=u("".concat(l,"-body"),f("body")),ie=Object.assign(Object.assign({},p),y("body")),oe=o.createElement("div",{className:re,style:ie},v?k:z),de=u("".concat(l,"-actions"),f("actions")),le=j!=null&&j.length?o.createElement(Ne,{actionClasses:de,actionStyle:y("actions"),actions:j}):null,se=ye(q,["onTabChange"]),ce=u(l,b==null?void 0:b.className,{["".concat(l,"-loading")]:v,["".concat(l,"-bordered")]:x,["".concat(l,"-hoverable")]:F,["".concat(l,"-contain-grid")]:Q,["".concat(l,"-contain-tabs")]:$==null?void 0:$.length,["".concat(l,"-").concat(S)]:S,["".concat(l,"-type-").concat(O)]:!!O,["".concat(l,"-rtl")]:V==="rtl"},t,n,Y,Z),ge=Object.assign(Object.assign({},b==null?void 0:b.style),s);return U(o.createElement("div",Object.assign({ref:a},se,{className:ce,style:ge}),M,ne,oe,le))});var Ge=function(e,a){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&a.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,t=Object.getOwnPropertySymbols(e);n<t.length;n++)a.indexOf(t[n])<0&&Object.prototype.propertyIsEnumerable.call(e,t[n])&&(r[t[n]]=e[t[n]]);return r};const Le=e=>{const{prefixCls:a,className:r,avatar:t,title:n,description:s}=e,g=Ge(e,["prefixCls","className","avatar","title","description"]),{getPrefixCls:m}=o.useContext(N),p=m("card",a),h=u("".concat(p,"-meta"),r),v=t?o.createElement("div",{className:"".concat(p,"-meta-avatar")},t):null,x=n?o.createElement("div",{className:"".concat(p,"-meta-title")},n):null,C=s?o.createElement("div",{className:"".concat(p,"-meta-description")},s):null,O=x||C?o.createElement("div",{className:"".concat(p,"-meta-detail")},x,C):null;return o.createElement("div",Object.assign({},g,{className:h}),v,O)},D=Be;D.Grid=W;D.Meta=Le;export{D as C};
