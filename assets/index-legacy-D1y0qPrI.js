System.register(["./index-legacy-CCwJMuy2.js","./Pagination-legacy-8loKNAwB.js","./index-legacy-BK-Y710Z.js","./index-legacy-CItXdjuV.js","./useBreakpoint-legacy-DhjjCRbx.js","./row-legacy-pJ2pnOik.js","./MyApp-legacy-fyQv5Z4s.js","./col-legacy-BIl_Rpmk.js"],(function(e,t){"use strict";var i,n,a,l,r,o,s,c,d,m,g,p,$,u,f,y,h,S,x;return{setters:[e=>{i=e.$,n=e.r,a=e.M,l=e.p,r=e.T,o=e.G,s=e.H,c=e.F,d=e.L,m=e.bG,g=e.i},e=>{p=e.e,$=e.P},e=>{u=e.r},e=>{f=e.D},e=>{y=e.u},e=>{h=e.R},e=>{S=e.a6},e=>{x=e.C}],execute:function(){const t=i.createContext({});t.Consumer;var v=function(e,t){var i={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(i[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(i[n[a]]=e[n[a]])}return i};const b=i.forwardRef(((e,o)=>{const{prefixCls:s,children:c,actions:d,extra:m,styles:g,className:p,classNames:$,colStyle:u}=e,f=v(e,["prefixCls","children","actions","extra","styles","className","classNames","colStyle"]),{grid:y,itemLayout:h}=n.useContext(t),{getPrefixCls:S,list:b}=n.useContext(a),C=e=>{var t,i;return l(null===(i=null===(t=null==b?void 0:b.item)||void 0===t?void 0:t.classNames)||void 0===i?void 0:i[e],null==$?void 0:$[e])},E=e=>{var t,i;return Object.assign(Object.assign({},null===(i=null===(t=null==b?void 0:b.item)||void 0===t?void 0:t.styles)||void 0===i?void 0:i[e]),null==g?void 0:g[e])},k=S("list",s),O=d&&d.length>0&&i.createElement("ul",{className:l(`${k}-item-action`,C("actions")),key:"actions",style:E("actions")},d.map(((e,t)=>i.createElement("li",{key:`${k}-item-action-${t}`},e,t!==d.length-1&&i.createElement("em",{className:`${k}-item-action-split`}))))),N=y?"div":"li",j=i.createElement(N,Object.assign({},f,y?{}:{ref:o},{className:l(`${k}-item`,{[`${k}-item-no-flex`]:!("vertical"===h?m:!(()=>{let e=!1;return n.Children.forEach(c,(t=>{"string"==typeof t&&(e=!0)})),e&&n.Children.count(c)>1})())},p)}),"vertical"===h&&m?[i.createElement("div",{className:`${k}-item-main`,key:"content"},c,O),i.createElement("div",{className:l(`${k}-item-extra`,C("extra")),key:"extra",style:E("extra")},m)]:[c,O,r(m,{key:"extra"})]);return y?i.createElement(x,{ref:o,flex:1,style:u},j):j}));b.Meta=e=>{var{prefixCls:t,className:r,avatar:o,title:s,description:c}=e,d=v(e,["prefixCls","className","avatar","title","description"]);const{getPrefixCls:m}=n.useContext(a),g=m("list",t),p=l(`${g}-item-meta`,r),$=i.createElement("div",{className:`${g}-item-meta-content`},s&&i.createElement("h4",{className:`${g}-item-meta-title`},s),c&&i.createElement("div",{className:`${g}-item-meta-description`},c));return i.createElement("div",Object.assign({},d,{className:p}),o&&i.createElement("div",{className:`${g}-item-meta-avatar`},o),(s||c)&&$)};const C=e=>{const{listBorderedCls:t,componentCls:i,paddingLG:n,margin:a,itemPaddingSM:l,itemPaddingLG:r,marginLG:o,borderRadiusLG:s}=e;return{[t]:{border:`${c(e.lineWidth)} ${e.lineType} ${e.colorBorder}`,borderRadius:s,[`${i}-header,${i}-footer,${i}-item`]:{paddingInline:n},[`${i}-pagination`]:{margin:`${c(a)} ${c(o)}`}},[`${t}${i}-sm`]:{[`${i}-item,${i}-header,${i}-footer`]:{padding:l}},[`${t}${i}-lg`]:{[`${i}-item,${i}-header,${i}-footer`]:{padding:r}}}},E=e=>{const{componentCls:t,screenSM:i,screenMD:n,marginLG:a,marginSM:l,margin:r}=e;return{[`@media screen and (max-width:${n}px)`]:{[t]:{[`${t}-item`]:{[`${t}-item-action`]:{marginInlineStart:a}}},[`${t}-vertical`]:{[`${t}-item`]:{[`${t}-item-extra`]:{marginInlineStart:a}}}},[`@media screen and (max-width: ${i}px)`]:{[t]:{[`${t}-item`]:{flexWrap:"wrap",[`${t}-action`]:{marginInlineStart:l}}},[`${t}-vertical`]:{[`${t}-item`]:{flexWrap:"wrap-reverse",[`${t}-item-main`]:{minWidth:e.contentWidth},[`${t}-item-extra`]:{margin:`auto auto ${c(r)}`}}}}}},k=e=>{const{componentCls:t,antCls:i,controlHeight:n,minHeight:a,paddingSM:l,marginLG:r,padding:o,itemPadding:s,colorPrimary:m,itemPaddingSM:g,itemPaddingLG:p,paddingXS:$,margin:u,colorText:f,colorTextDescription:y,motionDurationSlow:h,lineWidth:S,headerBg:x,footerBg:v,emptyTextPadding:b,metaMarginBottom:C,avatarMarginRight:E,titleMarginBottom:k,descriptionFontSize:O}=e;return{[t]:Object.assign(Object.assign({},d(e)),{position:"relative","*":{outline:"none"},[`${t}-header`]:{background:x},[`${t}-footer`]:{background:v},[`${t}-header, ${t}-footer`]:{paddingBlock:l},[`${t}-pagination`]:{marginBlockStart:r,[`${i}-pagination-options`]:{textAlign:"start"}},[`${t}-spin`]:{minHeight:a,textAlign:"center"},[`${t}-items`]:{margin:0,padding:0,listStyle:"none"},[`${t}-item`]:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:s,color:f,[`${t}-item-meta`]:{display:"flex",flex:1,alignItems:"flex-start",maxWidth:"100%",[`${t}-item-meta-avatar`]:{marginInlineEnd:E},[`${t}-item-meta-content`]:{flex:"1 0",width:0,color:f},[`${t}-item-meta-title`]:{margin:`0 0 ${c(e.marginXXS)} 0`,color:f,fontSize:e.fontSize,lineHeight:e.lineHeight,"> a":{color:f,transition:`all ${h}`,"&:hover":{color:m}}},[`${t}-item-meta-description`]:{color:y,fontSize:O,lineHeight:e.lineHeight}},[`${t}-item-action`]:{flex:"0 0 auto",marginInlineStart:e.marginXXL,padding:0,fontSize:0,listStyle:"none","& > li":{position:"relative",display:"inline-block",padding:`0 ${c($)}`,color:y,fontSize:e.fontSize,lineHeight:e.lineHeight,textAlign:"center","&:first-child":{paddingInlineStart:0}},[`${t}-item-action-split`]:{position:"absolute",insetBlockStart:"50%",insetInlineEnd:0,width:S,height:e.calc(e.fontHeight).sub(e.calc(e.marginXXS).mul(2)).equal(),transform:"translateY(-50%)",backgroundColor:e.colorSplit}}},[`${t}-empty`]:{padding:`${c(o)} 0`,color:y,fontSize:e.fontSizeSM,textAlign:"center"},[`${t}-empty-text`]:{padding:b,color:e.colorTextDisabled,fontSize:e.fontSize,textAlign:"center"},[`${t}-item-no-flex`]:{display:"block"}}),[`${t}-grid ${i}-col > ${t}-item`]:{display:"block",maxWidth:"100%",marginBlockEnd:u,paddingBlock:0,borderBlockEnd:"none"},[`${t}-vertical ${t}-item`]:{alignItems:"initial",[`${t}-item-main`]:{display:"block",flex:1},[`${t}-item-extra`]:{marginInlineStart:r},[`${t}-item-meta`]:{marginBlockEnd:C,[`${t}-item-meta-title`]:{marginBlockStart:0,marginBlockEnd:k,color:f,fontSize:e.fontSizeLG,lineHeight:e.lineHeightLG}},[`${t}-item-action`]:{marginBlockStart:o,marginInlineStart:"auto","> li":{padding:`0 ${c(o)}`,"&:first-child":{paddingInlineStart:0}}}},[`${t}-split ${t}-item`]:{borderBlockEnd:`${c(e.lineWidth)} ${e.lineType} ${e.colorSplit}`,"&:last-child":{borderBlockEnd:"none"}},[`${t}-split ${t}-header`]:{borderBlockEnd:`${c(e.lineWidth)} ${e.lineType} ${e.colorSplit}`},[`${t}-split${t}-empty ${t}-footer`]:{borderTop:`${c(e.lineWidth)} ${e.lineType} ${e.colorSplit}`},[`${t}-loading ${t}-spin-nested-loading`]:{minHeight:n},[`${t}-split${t}-something-after-last-item ${i}-spin-container > ${t}-items > ${t}-item:last-child`]:{borderBlockEnd:`${c(e.lineWidth)} ${e.lineType} ${e.colorSplit}`},[`${t}-lg ${t}-item`]:{padding:p},[`${t}-sm ${t}-item`]:{padding:g},[`${t}:not(${t}-vertical)`]:{[`${t}-item-no-flex`]:{[`${t}-item-action`]:{float:"right"}}}}},O=o("List",(e=>{const t=s(e,{listBorderedCls:`${e.componentCls}-bordered`,minHeight:e.controlHeightLG});return[k(t),C(t),E(t)]}),(e=>({contentWidth:220,itemPadding:`${c(e.paddingContentVertical)} 0`,itemPaddingSM:`${c(e.paddingContentVerticalSM)} ${c(e.paddingContentHorizontal)}`,itemPaddingLG:`${c(e.paddingContentVerticalLG)} ${c(e.paddingContentHorizontalLG)}`,headerBg:"transparent",footerBg:"transparent",emptyTextPadding:e.padding,metaMarginBottom:e.padding,avatarMarginRight:e.padding,titleMarginBottom:e.paddingSM,descriptionFontSize:e.fontSize})));function N(e,i){var{pagination:r=!1,prefixCls:o,bordered:s=!1,split:c=!0,className:d,rootClassName:x,style:v,children:b,itemLayout:C,loadMore:E,grid:k,dataSource:N=[],size:j,header:z,footer:B,loading:M=!1,rowKey:L,renderItem:P,locale:w}=e,H=function(e,t){var i={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(i[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(i[n[a]]=e[n[a]])}return i}(e,["pagination","prefixCls","bordered","split","className","rootClassName","style","children","itemLayout","loadMore","grid","dataSource","size","header","footer","loading","rowKey","renderItem","locale"]);const I=r&&"object"==typeof r?r:{},[G,W]=n.useState(I.defaultCurrent||1),[T,R]=n.useState(I.defaultPageSize||10),{getPrefixCls:X,renderEmpty:A,direction:D,list:F}=n.useContext(a),V=e=>(t,i)=>{var n;W(t),R(i),r&&(null===(n=null==r?void 0:r[e])||void 0===n||n.call(r,t,i))},J=V("onChange"),K=V("onShowSizeChange"),q=X("list",o),[Y,Q,U]=O(q);let Z=M;"boolean"==typeof Z&&(Z={spinning:Z});const _=!!(null==Z?void 0:Z.spinning);let ee="";switch(m(j)){case"large":ee="lg";break;case"small":ee="sm"}const te=l(q,{[`${q}-vertical`]:"vertical"===C,[`${q}-${ee}`]:ee,[`${q}-split`]:c,[`${q}-bordered`]:s,[`${q}-loading`]:_,[`${q}-grid`]:!!k,[`${q}-something-after-last-item`]:!!(E||r||B),[`${q}-rtl`]:"rtl"===D},null==F?void 0:F.className,d,x,Q,U),ie=p({current:1,total:0},{total:N.length,current:G,pageSize:T},r||{}),ne=Math.ceil(ie.total/ie.pageSize);ie.current>ne&&(ie.current=ne);const ae=r&&n.createElement("div",{className:l(`${q}-pagination`)},n.createElement($,Object.assign({align:"end"},ie,{onChange:J,onShowSizeChange:K})));let le=g(N);r&&N.length>(ie.current-1)*ie.pageSize&&(le=g(N).splice((ie.current-1)*ie.pageSize,ie.pageSize));const re=Object.keys(k||{}).some((e=>["xs","sm","md","lg","xl","xxl"].includes(e))),oe=y(re),se=n.useMemo((()=>{for(let e=0;e<u.length;e+=1){const t=u[e];if(oe[t])return t}}),[oe]),ce=n.useMemo((()=>{if(!k)return;const e=se&&k[se]?k[se]:k.column;return e?{width:100/e+"%",maxWidth:100/e+"%"}:void 0}),[JSON.stringify(k),se]);let de=_&&n.createElement("div",{style:{minHeight:53}});if(le.length>0){const e=le.map(((e,t)=>((e,t)=>{if(!P)return null;let i;return i="function"==typeof L?L(e):L?e[L]:e.key,i||(i=`list-item-${t}`),n.createElement(n.Fragment,{key:i},P(e,t))})(e,t)));de=k?n.createElement(h,{gutter:k.gutter},n.Children.map(e,(e=>n.createElement("div",{key:null==e?void 0:e.key,style:ce},e)))):n.createElement("ul",{className:`${q}-items`},e)}else b||_||(de=n.createElement("div",{className:`${q}-empty-text`},(null==w?void 0:w.emptyText)||(null==A?void 0:A("List"))||n.createElement(f,{componentName:"List"})));const me=ie.position||"bottom",ge=n.useMemo((()=>({grid:k,itemLayout:C})),[JSON.stringify(k),C]);return Y(n.createElement(t.Provider,{value:ge},n.createElement("div",Object.assign({ref:i,style:Object.assign(Object.assign({},null==F?void 0:F.style),v),className:te},H),("top"===me||"both"===me)&&ae,z&&n.createElement("div",{className:`${q}-header`},z),n.createElement(S,Object.assign({},Z),de,b),B&&n.createElement("div",{className:`${q}-footer`},B),E||("bottom"===me||"both"===me)&&ae)))}e("L",n.forwardRef(N)).Item=b}}}));
