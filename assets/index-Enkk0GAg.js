import{r as i,I,a6 as F,bX as S,bY as j,bZ as $,b_ as v,o as E,b$ as _,c0 as M,c1 as N,c2 as c,c3 as V,c4 as W,c5 as A,c6 as Y,c7 as p,c8 as z,c9 as B}from"./index-Cf3ye8Qe.js";import{w as D}from"./PurePanel-DT73mvq3.js";var G=function(e,o){var l={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&o.indexOf(r)<0&&(l[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,r=Object.getOwnPropertySymbols(e);n<r.length;n++)o.indexOf(r[n])<0&&Object.prototype.propertyIsEnumerable.call(e,r[n])&&(l[r[n]]=e[r[n]]);return l};const R=e=>{const{prefixCls:o,className:l,closeIcon:r,closable:n,type:a,title:x,children:d,footer:h}=e,y=G(e,["prefixCls","className","closeIcon","closable","type","title","children","footer"]),{getPrefixCls:m}=i.useContext(I),C=m(),s=o||m("modal"),b=F(C),[w,O,g]=S(s,b),f=`${s}-confirm`;let u={};return a?u={closable:n??!1,title:"",footer:"",children:i.createElement(j,Object.assign({},e,{prefixCls:s,confirmPrefixCls:f,rootPrefixCls:C,content:d}))}:u={closable:n??!0,title:x,footer:h!==null&&i.createElement($,Object.assign({},e)),children:d},w(i.createElement(v,Object.assign({prefixCls:s,className:E(O,`${s}-pure-panel`,a&&f,a&&`${f}-${a}`,l,g,b)},y,{closeIcon:_(s,r),closable:n},u)))},T=D(R);function P(e){return c(B(e))}const t=M;t.useModal=N;t.info=function(o){return c(V(o))};t.success=function(o){return c(W(o))};t.error=function(o){return c(A(o))};t.warning=P;t.warn=P;t.confirm=function(o){return c(Y(o))};t.destroyAll=function(){for(;p.length;){const o=p.pop();o&&o()}};t.config=z;t._InternalPanelDoNotUseOrYouWillBeFired=T;export{t as M};
