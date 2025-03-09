import{G as M,r as l,M as E,p as h,bu as q,an as D,a_ as G,bv as U,bw as Y,bb as $,a1 as J}from"./index-C5YWxV9K.js";import{y as K}from"./MyApp-Ct___eEr.js";import{a as Q,g as _,P as Z}from"./index-BS0pS8FV.js";const ee=e=>{const{componentCls:t,iconCls:s,antCls:n,zIndexPopup:o,colorText:u,colorWarning:f,marginXXS:i,marginXS:m,fontSize:g,fontWeightStrong:b,colorTextHeading:C}=e;return{[t]:{zIndex:o,["&".concat(n,"-popover")]:{fontSize:g},["".concat(t,"-message")]:{marginBottom:m,display:"flex",flexWrap:"nowrap",alignItems:"start",["> ".concat(t,"-message-icon ").concat(s)]:{color:f,fontSize:g,lineHeight:1,marginInlineEnd:m},["".concat(t,"-title")]:{fontWeight:b,color:C,"&:only-child":{fontWeight:"normal"}},["".concat(t,"-description")]:{marginTop:i,color:u}},["".concat(t,"-buttons")]:{textAlign:"end",whiteSpace:"nowrap",button:{marginInlineStart:m}}}}},ne=e=>{const{zIndexPopupBase:t}=e;return{zIndexPopup:t+60}},w=M("Popconfirm",e=>ee(e),ne,{resetStyle:!1});var te=function(e,t){var s={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(s[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(s[n[o]]=e[n[o]]);return s};const I=e=>{const{prefixCls:t,okButtonProps:s,cancelButtonProps:n,title:o,description:u,cancelText:f,okText:i,okType:m="primary",icon:g=l.createElement($,null),showCancel:b=!0,close:C,onConfirm:P,onCancel:v,onPopupClick:N}=e,{getPrefixCls:x}=l.useContext(E),[d]=q("Popconfirm",D.Popconfirm),O=_(o),p=_(u);return l.createElement("div",{className:"".concat(t,"-inner-content"),onClick:N},l.createElement("div",{className:"".concat(t,"-message")},g&&l.createElement("span",{className:"".concat(t,"-message-icon")},g),l.createElement("div",{className:"".concat(t,"-message-text")},O&&l.createElement("div",{className:"".concat(t,"-title")},O),p&&l.createElement("div",{className:"".concat(t,"-description")},p))),l.createElement("div",{className:"".concat(t,"-buttons")},b&&l.createElement(G,Object.assign({onClick:v,size:"small"},n),f||(d==null?void 0:d.cancelText)),l.createElement(U,{buttonProps:Object.assign(Object.assign({size:"small"},Y(m)),s),actionFn:P,close:C,prefixCls:x("btn"),quitOnNullishReturnValue:!0,emitEvent:!0},i||(d==null?void 0:d.okText))))},oe=e=>{const{prefixCls:t,placement:s,className:n,style:o}=e,u=te(e,["prefixCls","placement","className","style"]),{getPrefixCls:f}=l.useContext(E),i=f("popconfirm",t),[m]=w(i);return m(l.createElement(Q,{placement:s,className:h(i,n),style:o,content:l.createElement(I,Object.assign({prefixCls:i},u))}))};var le=function(e,t){var s={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(s[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(s[n[o]]=e[n[o]]);return s};const se=l.forwardRef((e,t)=>{var s,n,o,u,f,i;const{prefixCls:m,placement:g="top",trigger:b="click",okType:C="primary",icon:P=l.createElement($,null),children:v,overlayClassName:N,onOpenChange:x,onVisibleChange:d,overlayStyle:O,styles:p,classNames:y}=e,k=le(e,["prefixCls","placement","trigger","okType","icon","children","overlayClassName","onOpenChange","onVisibleChange","overlayStyle","styles","classNames"]),{getPrefixCls:T,popconfirm:a}=l.useContext(E),[z,V]=K(!1,{value:(s=e.open)!==null&&s!==void 0?s:e.visible,defaultValue:(n=e.defaultOpen)!==null&&n!==void 0?n:e.defaultVisible}),j=(r,c)=>{V(r,!0),d==null||d(r),x==null||x(r,c)},B=r=>{j(!1,r)},W=r=>{var c;return(c=e.onConfirm)===null||c===void 0?void 0:c.call(void 0,r)},R=r=>{var c;j(!1,r),(c=e.onCancel)===null||c===void 0||c.call(void 0,r)},H=(r,c)=>{const{disabled:F=!1}=e;F||j(r,c)},S=T("popconfirm",m),L=h(S,N,(o=a==null?void 0:a.classNames)===null||o===void 0?void 0:o.root,y==null?void 0:y.root),X=h((u=a==null?void 0:a.classNames)===null||u===void 0?void 0:u.body,y==null?void 0:y.body),[A]=w(S);return A(l.createElement(Z,Object.assign({},J(k,["title"]),{trigger:b,placement:g,onOpenChange:H,open:z,ref:t,classNames:{root:L,body:X},styles:{root:Object.assign(Object.assign(Object.assign(Object.assign({},(f=a==null?void 0:a.styles)===null||f===void 0?void 0:f.root),a==null?void 0:a.style),O),p==null?void 0:p.root),body:Object.assign(Object.assign({},(i=a==null?void 0:a.styles)===null||i===void 0?void 0:i.body),p==null?void 0:p.body)},content:l.createElement(I,Object.assign({okType:C,icon:P},e,{prefixCls:S,close:B,onConfirm:W,onCancel:R})),"data-popover-inject":!0}),v))}),ae=se;ae._InternalPanelDoNotUseOrYouWillBeFired=oe;export{ae as P};
