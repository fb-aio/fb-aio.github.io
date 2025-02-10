import{bf as ot,r as o,I as Y,h as Z,bP as _e,bQ as it,F as lt,G as st,p as ee,T as at,Y as Oe,bG as ct,l as ut,M as Me,x as ke,bn as dt,t as Pe,v as U,i as ft,bp as pt,a1 as De}from"./index-Cl5zvECE.js";import{b as ye,n as we,R as mt}from"./MyApp-MWa74BZS.js";import{T as gt}from"./TextArea-VDCbegm4.js";var Ae=function(t){if(ot()&&window.document.documentElement){var r=Array.isArray(t)?t:[t],n=window.document.documentElement;return r.some(function(i){return i in n.style})}return!1},yt=function(t,r){if(!Ae(t))return!1;var n=document.createElement("div"),i=n.style[t];return n.style[t]=r,n.style[t]!==i};function Re(e,t){return!Array.isArray(e)&&t!==void 0?yt(e,t):Ae(e)}var bt={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 00-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z"}}]},name:"check",theme:"outlined"},Et=function(t,r){return o.createElement(Y,Z({},t,{ref:r,icon:bt}))},ht=o.forwardRef(Et);function vt(e){return(arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1)&&e==null?[]:Array.isArray(e)?e:[e]}var xt={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M832 64H296c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h496v688c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V96c0-17.7-14.3-32-32-32zM704 192H192c-17.7 0-32 14.3-32 32v530.7c0 8.5 3.4 16.6 9.4 22.6l173.3 173.3c2.2 2.2 4.7 4 7.4 5.5v1.9h4.2c3.5 1.3 7.2 2 11 2H704c17.7 0 32-14.3 32-32V224c0-17.7-14.3-32-32-32zM350 856.2L263.9 770H350v86.2zM664 888H414V746c0-22.1-17.9-40-40-40H232V264h432v624z"}}]},name:"copy",theme:"outlined"},St=function(t,r){return o.createElement(Y,Z({},t,{ref:r,icon:xt}))},Ct=o.forwardRef(St),Ot={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M257.7 752c2 0 4-.2 6-.5L431.9 722c2-.4 3.9-1.3 5.3-2.8l423.9-423.9a9.96 9.96 0 000-14.1L694.9 114.9c-1.9-1.9-4.4-2.9-7.1-2.9s-5.2 1-7.1 2.9L256.8 538.8c-1.5 1.5-2.4 3.3-2.8 5.3l-29.5 168.2a33.5 33.5 0 009.4 29.8c6.6 6.4 14.9 9.9 23.8 9.9zm67.4-174.4L687.8 215l73.3 73.3-362.7 362.6-88.9 15.7 15.6-89zM880 836H144c-17.7 0-32 14.3-32 32v36c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-36c0-17.7-14.3-32-32-32z"}}]},name:"edit",theme:"outlined"},wt=function(t,r){return o.createElement(Y,Z({},t,{ref:r,icon:Ot}))},Rt=o.forwardRef(wt),Tt={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M864 170h-60c-4.4 0-8 3.6-8 8v518H310v-73c0-6.7-7.8-10.5-13-6.3l-141.9 112a8 8 0 000 12.6l141.9 112c5.3 4.2 13 .4 13-6.3v-75h498c35.3 0 64-28.7 64-64V178c0-4.4-3.6-8-8-8z"}}]},name:"enter",theme:"outlined"},jt=function(t,r){return o.createElement(Y,Z({},t,{ref:r,icon:Tt}))},It=o.forwardRef(jt);const $t=(e,t,r,n)=>{const{titleMarginBottom:i,fontWeightStrong:s}=n;return{marginBottom:i,color:r,fontWeight:s,fontSize:e,lineHeight:t}},Lt=e=>{const t=[1,2,3,4,5],r={};return t.forEach(n=>{r["\n      h".concat(n,"&,\n      div&-h").concat(n,",\n      div&-h").concat(n," > textarea,\n      h").concat(n,"\n    ")]=$t(e["fontSizeHeading".concat(n)],e["lineHeightHeading".concat(n)],e.colorTextHeading,e)}),r},_t=e=>{const{componentCls:t}=e;return{"a&, a":Object.assign(Object.assign({},_e(e)),{userSelect:"text",["&[disabled], &".concat(t,"-disabled")]:{color:e.colorTextDisabled,cursor:"not-allowed","&:active, &:hover":{color:e.colorTextDisabled},"&:active":{pointerEvents:"none"}}})}},Mt=e=>({code:{margin:"0 0.2em",paddingInline:"0.4em",paddingBlock:"0.2em 0.1em",fontSize:"85%",fontFamily:e.fontFamilyCode,background:"rgba(150, 150, 150, 0.1)",border:"1px solid rgba(100, 100, 100, 0.2)",borderRadius:3},kbd:{margin:"0 0.2em",paddingInline:"0.4em",paddingBlock:"0.15em 0.1em",fontSize:"90%",fontFamily:e.fontFamilyCode,background:"rgba(150, 150, 150, 0.06)",border:"1px solid rgba(100, 100, 100, 0.2)",borderBottomWidth:2,borderRadius:3},mark:{padding:0,backgroundColor:it[2]},"u, ins":{textDecoration:"underline",textDecorationSkipInk:"auto"},"s, del":{textDecoration:"line-through"},strong:{fontWeight:600},"ul, ol":{marginInline:0,marginBlock:"0 1em",padding:0,li:{marginInline:"20px 0",marginBlock:0,paddingInline:"4px 0",paddingBlock:0}},ul:{listStyleType:"circle",ul:{listStyleType:"disc"}},ol:{listStyleType:"decimal"},"pre, blockquote":{margin:"1em 0"},pre:{padding:"0.4em 0.6em",whiteSpace:"pre-wrap",wordWrap:"break-word",background:"rgba(150, 150, 150, 0.1)",border:"1px solid rgba(100, 100, 100, 0.2)",borderRadius:3,fontFamily:e.fontFamilyCode,code:{display:"inline",margin:0,padding:0,fontSize:"inherit",fontFamily:"inherit",background:"transparent",border:0}},blockquote:{paddingInline:"0.6em 0",paddingBlock:0,borderInlineStart:"4px solid rgba(100, 100, 100, 0.2)",opacity:.85}}),kt=e=>{const{componentCls:t,paddingSM:r}=e,n=r;return{"&-edit-content":{position:"relative","div&":{insetInlineStart:e.calc(e.paddingSM).mul(-1).equal(),marginTop:e.calc(n).mul(-1).equal(),marginBottom:"calc(1em - ".concat(lt(n),")")},["".concat(t,"-edit-content-confirm")]:{position:"absolute",insetInlineEnd:e.calc(e.marginXS).add(2).equal(),insetBlockEnd:e.marginXS,color:e.colorTextDescription,fontWeight:"normal",fontSize:e.fontSize,fontStyle:"normal",pointerEvents:"none"},textarea:{margin:"0!important",MozTransition:"none",height:"1em"}}}},Pt=e=>({["".concat(e.componentCls,"-copy-success")]:{"\n    &,\n    &:hover,\n    &:focus":{color:e.colorSuccess}},["".concat(e.componentCls,"-copy-icon-only")]:{marginInlineStart:0}}),Dt=()=>({"\n  a&-ellipsis,\n  span&-ellipsis\n  ":{display:"inline-block",maxWidth:"100%"},"&-ellipsis-single-line":{whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis","a&, span&":{verticalAlign:"bottom"},"> code":{paddingBlock:0,maxWidth:"calc(100% - 1.2em)",display:"inline-block",overflow:"hidden",textOverflow:"ellipsis",verticalAlign:"bottom",boxSizing:"content-box"}},"&-ellipsis-multiple-line":{display:"-webkit-box",overflow:"hidden",WebkitLineClamp:3,WebkitBoxOrient:"vertical"}}),At=e=>{const{componentCls:t,titleMarginTop:r}=e;return{[t]:Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({color:e.colorText,wordBreak:"break-word",lineHeight:e.lineHeight,["&".concat(t,"-secondary")]:{color:e.colorTextDescription},["&".concat(t,"-success")]:{color:e.colorSuccess},["&".concat(t,"-warning")]:{color:e.colorWarning},["&".concat(t,"-danger")]:{color:e.colorError,"a&:active, a&:focus":{color:e.colorErrorActive},"a&:hover":{color:e.colorErrorHover}},["&".concat(t,"-disabled")]:{color:e.colorTextDisabled,cursor:"not-allowed",userSelect:"none"},"\n        div&,\n        p\n      ":{marginBottom:"1em"}},Lt(e)),{["\n      & + h1".concat(t,",\n      & + h2").concat(t,",\n      & + h3").concat(t,",\n      & + h4").concat(t,",\n      & + h5").concat(t,"\n      ")]:{marginTop:r},"\n      div,\n      ul,\n      li,\n      p,\n      h1,\n      h2,\n      h3,\n      h4,\n      h5":{"\n        + h1,\n        + h2,\n        + h3,\n        + h4,\n        + h5\n        ":{marginTop:r}}}),Mt(e)),_t(e)),{["\n        ".concat(t,"-expand,\n        ").concat(t,"-collapse,\n        ").concat(t,"-edit,\n        ").concat(t,"-copy\n      ")]:Object.assign(Object.assign({},_e(e)),{marginInlineStart:e.marginXXS})}),kt(e)),Pt(e)),Dt()),{"&-rtl":{direction:"rtl"}})}},Ht=()=>({titleMarginTop:"1.2em",titleMarginBottom:"0.5em"}),He=st("Typography",e=>[At(e)],Ht),Nt=e=>{const{prefixCls:t,"aria-label":r,className:n,style:i,direction:s,maxLength:c,autoSize:g=!0,value:u,onSave:f,onCancel:p,onEnd:d,component:l,enterIcon:y=o.createElement(It,null)}=e,O=o.useRef(null),b=o.useRef(!1),S=o.useRef(null),[E,$]=o.useState(u);o.useEffect(()=>{$(u)},[u]),o.useEffect(()=>{var h;if(!((h=O.current)===null||h===void 0)&&h.resizableTextArea){const{textArea:v}=O.current.resizableTextArea;v.focus();const{length:C}=v.value;v.setSelectionRange(C,C)}},[]);const N=h=>{let{target:v}=h;$(v.value.replace(/[\n\r]/g,""))},w=()=>{b.current=!0},R=()=>{b.current=!1},L=h=>{let{keyCode:v}=h;b.current||(S.current=v)},x=()=>{f(E.trim())},z=h=>{let{keyCode:v,ctrlKey:C,altKey:A,metaKey:j,shiftKey:_}=h;S.current!==v||b.current||C||A||j||_||(v===Oe.ENTER?(x(),d==null||d()):v===Oe.ESC&&p())},V=()=>{x()},[W,P,F]=He(t),D=ee(t,"".concat(t,"-edit-content"),{["".concat(t,"-rtl")]:s==="rtl",["".concat(t,"-").concat(l)]:!!l},n,P,F);return W(o.createElement("div",{className:D,style:i},o.createElement(gt,{ref:O,maxLength:c,value:E,onChange:N,onKeyDown:L,onKeyUp:z,onCompositionStart:w,onCompositionEnd:R,onBlur:V,"aria-label":r,rows:1,autoSize:g}),y!==null?at(y,{className:"".concat(t,"-edit-content-confirm")}):null))};var ae,Te;function zt(){return Te||(Te=1,ae=function(){var e=document.getSelection();if(!e.rangeCount)return function(){};for(var t=document.activeElement,r=[],n=0;n<e.rangeCount;n++)r.push(e.getRangeAt(n));switch(t.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":t.blur();break;default:t=null;break}return e.removeAllRanges(),function(){e.type==="Caret"&&e.removeAllRanges(),e.rangeCount||r.forEach(function(i){e.addRange(i)}),t&&t.focus()}}),ae}var ce,je;function Bt(){if(je)return ce;je=1;var e=zt(),t={"text/plain":"Text","text/html":"Url",default:"Text"},r="Copy to clipboard: #{key}, Enter";function n(s){var c=(/mac os x/i.test(navigator.userAgent)?"⌘":"Ctrl")+"+C";return s.replace(/#{\s*key\s*}/g,c)}function i(s,c){var g,u,f,p,d,l,y=!1;c||(c={}),g=c.debug||!1;try{f=e(),p=document.createRange(),d=document.getSelection(),l=document.createElement("span"),l.textContent=s,l.ariaHidden="true",l.style.all="unset",l.style.position="fixed",l.style.top=0,l.style.clip="rect(0, 0, 0, 0)",l.style.whiteSpace="pre",l.style.webkitUserSelect="text",l.style.MozUserSelect="text",l.style.msUserSelect="text",l.style.userSelect="text",l.addEventListener("copy",function(b){if(b.stopPropagation(),c.format)if(b.preventDefault(),typeof b.clipboardData>"u"){g&&console.warn("unable to use e.clipboardData"),g&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var S=t[c.format]||t.default;window.clipboardData.setData(S,s)}else b.clipboardData.clearData(),b.clipboardData.setData(c.format,s);c.onCopy&&(b.preventDefault(),c.onCopy(b.clipboardData))}),document.body.appendChild(l),p.selectNodeContents(l),d.addRange(p);var O=document.execCommand("copy");if(!O)throw new Error("copy command was unsuccessful");y=!0}catch(b){g&&console.error("unable to copy using execCommand: ",b),g&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(c.format||"text",s),c.onCopy&&c.onCopy(window.clipboardData),y=!0}catch(S){g&&console.error("unable to copy using clipboardData: ",S),g&&console.error("falling back to prompt"),u=n("message"in c?c.message:r),window.prompt(u,s)}}finally{d&&(typeof d.removeRange=="function"?d.removeRange(p):d.removeAllRanges()),l&&document.body.removeChild(l),f()}return y}return ce=i,ce}var Wt=Bt();const Ut=ct(Wt);var Vt=function(e,t,r,n){function i(s){return s instanceof r?s:new r(function(c){c(s)})}return new(r||(r=Promise))(function(s,c){function g(p){try{f(n.next(p))}catch(d){c(d)}}function u(p){try{f(n.throw(p))}catch(d){c(d)}}function f(p){p.done?s(p.value):i(p.value).then(g,u)}f((n=n.apply(e,t||[])).next())})};const Ft=e=>{let{copyConfig:t,children:r}=e;const[n,i]=o.useState(!1),[s,c]=o.useState(!1),g=o.useRef(null),u=()=>{g.current&&clearTimeout(g.current)},f={};t.format&&(f.format=t.format),o.useEffect(()=>u,[]);const p=ut(d=>Vt(void 0,void 0,void 0,function*(){var l;d==null||d.preventDefault(),d==null||d.stopPropagation(),c(!0);try{const y=typeof t.text=="function"?yield t.text():t.text;Ut(y||vt(r,!0).join("")||"",f),c(!1),i(!0),u(),g.current=setTimeout(()=>{i(!1)},3e3),(l=t.onCopy)===null||l===void 0||l.call(t,d)}catch(y){throw c(!1),y}}));return{copied:n,copyLoading:s,onClick:p}};function ue(e,t){return o.useMemo(()=>{const r=!!e;return[r,Object.assign(Object.assign({},t),r&&typeof e=="object"?e:null)]},[e])}const Kt=e=>{const t=o.useRef(void 0);return o.useEffect(()=>{t.current=e}),t.current},qt=(e,t,r)=>o.useMemo(()=>e===!0?{title:t!=null?t:r}:o.isValidElement(e)?{title:e}:typeof e=="object"?Object.assign({title:t!=null?t:r},e):{title:e},[e,t,r]);var Xt=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,n=Object.getOwnPropertySymbols(e);i<n.length;i++)t.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(r[n[i]]=e[n[i]]);return r};const Ne=o.forwardRef((e,t)=>{const{prefixCls:r,component:n="article",className:i,rootClassName:s,setContentRef:c,children:g,direction:u,style:f}=e,p=Xt(e,["prefixCls","component","className","rootClassName","setContentRef","children","direction","style"]),{getPrefixCls:d,direction:l,typography:y}=o.useContext(Me),O=u!=null?u:l,b=c?ke(t,c):t,S=d("typography",r),[E,$,N]=He(S),w=ee(S,y==null?void 0:y.className,{["".concat(S,"-rtl")]:O==="rtl"},i,s,$,N),R=Object.assign(Object.assign({},y==null?void 0:y.style),f);return E(o.createElement(n,Object.assign({className:w,style:R,ref:b},p),g))});function Ie(e){return e===!1?[!1,!1]:Array.isArray(e)?e:[e]}function de(e,t,r){return e===!0||e===void 0?t:e||r&&t}function Jt(e){const t=document.createElement("em");e.appendChild(t);const r=e.getBoundingClientRect(),n=t.getBoundingClientRect();return e.removeChild(t),r.left>n.left||n.right>r.right||r.top>n.top||n.bottom>r.bottom}const be=e=>["string","number"].includes(typeof e),Gt=e=>{let{prefixCls:t,copied:r,locale:n,iconOnly:i,tooltips:s,icon:c,tabIndex:g,onCopy:u,loading:f}=e;const p=Ie(s),d=Ie(c),{copied:l,copy:y}=n!=null?n:{},O=r?l:y,b=de(p[r?1:0],O),S=typeof b=="string"?b:O;return o.createElement(ye,{title:b},o.createElement("button",{type:"button",className:ee("".concat(t,"-copy"),{["".concat(t,"-copy-success")]:r,["".concat(t,"-copy-icon-only")]:i}),onClick:u,"aria-label":S,tabIndex:g},r?de(d[1],o.createElement(ht,null),!0):de(d[0],f?o.createElement(dt,null):o.createElement(Ct,null),!0)))},G=o.forwardRef((e,t)=>{let{style:r,children:n}=e;const i=o.useRef(null);return o.useImperativeHandle(t,()=>({isExceed:()=>{const s=i.current;return s.scrollHeight>s.clientHeight},getHeight:()=>i.current.clientHeight})),o.createElement("span",{"aria-hidden":!0,ref:i,style:Object.assign({position:"fixed",display:"block",left:0,top:0,pointerEvents:"none",backgroundColor:"rgba(255, 0, 0, 0.65)"},r)},n)}),Qt=e=>e.reduce((t,r)=>t+(be(r)?String(r).length:1),0);function $e(e,t){let r=0;const n=[];for(let i=0;i<e.length;i+=1){if(r===t)return n;const s=e[i],g=be(s)?String(s).length:1,u=r+g;if(u>t){const f=t-r;return n.push(String(s).slice(0,f)),n}n.push(s),r=u}return e}const fe=0,pe=1,me=2,ge=3,Le=4,Q={display:"-webkit-box",overflow:"hidden",WebkitBoxOrient:"vertical"};function Yt(e){const{enableMeasure:t,width:r,text:n,children:i,rows:s,expanded:c,miscDeps:g,onEllipsis:u}=e,f=o.useMemo(()=>Pe(n),[n]),p=o.useMemo(()=>Qt(f),[n]),d=o.useMemo(()=>i(f,!1),[n]),[l,y]=o.useState(null),O=o.useRef(null),b=o.useRef(null),S=o.useRef(null),E=o.useRef(null),$=o.useRef(null),[N,w]=o.useState(!1),[R,L]=o.useState(fe),[x,z]=o.useState(0),[V,W]=o.useState(null);U(()=>{L(t&&r&&p?pe:fe)},[r,n,s,t,f]),U(()=>{var h,v,C,A;if(R===pe){L(me);const j=b.current&&getComputedStyle(b.current).whiteSpace;W(j)}else if(R===me){const j=!!(!((h=S.current)===null||h===void 0)&&h.isExceed());L(j?ge:Le),y(j?[0,p]:null),w(j);const _=((v=S.current)===null||v===void 0?void 0:v.getHeight())||0,re=s===1?0:((C=E.current)===null||C===void 0?void 0:C.getHeight())||0,q=((A=$.current)===null||A===void 0?void 0:A.getHeight())||0,oe=Math.max(_,re+q);z(oe+1),u(j)}},[R]);const P=l?Math.ceil((l[0]+l[1])/2):0;U(()=>{var h;const[v,C]=l||[0,0];if(v!==C){const j=(((h=O.current)===null||h===void 0?void 0:h.getHeight())||0)>x;let _=P;C-v===1&&(_=j?v:C),y(j?[v,_]:[_,C])}},[l,P]);const F=o.useMemo(()=>{if(!t)return i(f,!1);if(R!==ge||!l||l[0]!==l[1]){const h=i(f,!1);return[Le,fe].includes(R)?h:o.createElement("span",{style:Object.assign(Object.assign({},Q),{WebkitLineClamp:s})},h)}return i(c?f:$e(f,l[0]),N)},[c,R,l,f].concat(ft(g))),D={width:r,margin:0,padding:0,whiteSpace:V==="nowrap"?"normal":"inherit"};return o.createElement(o.Fragment,null,F,R===me&&o.createElement(o.Fragment,null,o.createElement(G,{style:Object.assign(Object.assign(Object.assign({},D),Q),{WebkitLineClamp:s}),ref:S},d),o.createElement(G,{style:Object.assign(Object.assign(Object.assign({},D),Q),{WebkitLineClamp:s-1}),ref:E},d),o.createElement(G,{style:Object.assign(Object.assign(Object.assign({},D),Q),{WebkitLineClamp:1}),ref:$},i([],!0))),R===ge&&l&&l[0]!==l[1]&&o.createElement(G,{style:Object.assign(Object.assign({},D),{top:400}),ref:O},i($e(f,P),!0)),R===pe&&o.createElement("span",{style:{whiteSpace:"inherit"},ref:b}))}const Zt=e=>{let{enableEllipsis:t,isEllipsis:r,children:n,tooltipProps:i}=e;return!(i!=null&&i.title)||!t?n:o.createElement(ye,Object.assign({open:r?void 0:!1},i),n)};var en=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,n=Object.getOwnPropertySymbols(e);i<n.length;i++)t.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(r[n[i]]=e[n[i]]);return r};function tn(e,t){let{mark:r,code:n,underline:i,delete:s,strong:c,keyboard:g,italic:u}=e,f=t;function p(d,l){l&&(f=o.createElement(d,{},f))}return p("strong",c),p("u",i),p("del",s),p("code",n),p("mark",r),p("kbd",g),p("i",u),f}const nn="...",te=o.forwardRef((e,t)=>{var r;const{prefixCls:n,className:i,style:s,type:c,disabled:g,children:u,ellipsis:f,editable:p,copyable:d,component:l,title:y}=e,O=en(e,["prefixCls","className","style","type","disabled","children","ellipsis","editable","copyable","component","title"]),{getPrefixCls:b,direction:S}=o.useContext(Me),[E]=pt("Text"),$=o.useRef(null),N=o.useRef(null),w=b("typography",n),R=De(O,["mark","code","delete","underline","strong","keyboard","italic"]),[L,x]=ue(p),[z,V]=we(!1,{value:x.editing}),{triggerType:W=["icon"]}=x,P=a=>{var m;a&&((m=x.onStart)===null||m===void 0||m.call(x)),V(a)},F=Kt(z);U(()=>{var a;!z&&F&&((a=N.current)===null||a===void 0||a.focus())},[z]);const D=a=>{a==null||a.preventDefault(),P(!0)},h=a=>{var m;(m=x.onChange)===null||m===void 0||m.call(x,a),P(!1)},v=()=>{var a;(a=x.onCancel)===null||a===void 0||a.call(x),P(!1)},[C,A]=ue(d),{copied:j,copyLoading:_,onClick:re}=Ft({copyConfig:A,children:u}),[q,oe]=o.useState(!1),[Ee,ze]=o.useState(!1),[he,Be]=o.useState(!1),[ve,We]=o.useState(!1),[Ue,Ve]=o.useState(!0),[B,T]=ue(f,{expandable:!1,symbol:a=>a?E==null?void 0:E.collapse:E==null?void 0:E.expand}),[H,Fe]=we(T.defaultExpanded||!1,{value:T.expanded}),I=B&&(!H||T.expandable==="collapsible"),{rows:K=1}=T,X=o.useMemo(()=>I&&(T.suffix!==void 0||T.onEllipsis||T.expandable||L||C),[I,T,L,C]);U(()=>{B&&!X&&(oe(Re("webkitLineClamp")),ze(Re("textOverflow")))},[X,B]);const[M,Ke]=o.useState(I),xe=o.useMemo(()=>X?!1:K===1?Ee:q,[X,Ee,q]);U(()=>{Ke(xe&&I)},[xe,I]);const Se=I&&(M?ve:he),qe=I&&K===1&&M,ie=I&&K>1&&M,Xe=(a,m)=>{var k;Fe(m.expanded),(k=T.onExpand)===null||k===void 0||k.call(T,a,m)},[Ce,Je]=o.useState(0),Ge=a=>{let{offsetWidth:m}=a;Je(m)},Qe=a=>{var m;Be(a),he!==a&&((m=T.onEllipsis)===null||m===void 0||m.call(T,a))};o.useEffect(()=>{const a=$.current;if(B&&M&&a){const m=Jt(a);ve!==m&&We(m)}},[B,M,u,ie,Ue,Ce]),o.useEffect(()=>{const a=$.current;if(typeof IntersectionObserver>"u"||!a||!M||!I)return;const m=new IntersectionObserver(()=>{Ve(!!a.offsetParent)});return m.observe(a),()=>{m.disconnect()}},[M,I]);const le=qt(T.tooltip,x.text,u),J=o.useMemo(()=>{if(!(!B||M))return[x.text,u,y,le.title].find(be)},[B,M,y,le.title,Se]);if(z)return o.createElement(Nt,{value:(r=x.text)!==null&&r!==void 0?r:typeof u=="string"?u:"",onSave:h,onCancel:v,onEnd:x.onEnd,prefixCls:w,className:i,style:s,direction:S,component:l,maxLength:x.maxLength,autoSize:x.autoSize,enterIcon:x.enterIcon});const Ye=()=>{const{expandable:a,symbol:m}=T;return a?o.createElement("button",{type:"button",key:"expand",className:"".concat(w,"-").concat(H?"collapse":"expand"),onClick:k=>Xe(k,{expanded:!H}),"aria-label":H?E.collapse:E==null?void 0:E.expand},typeof m=="function"?m(H):m):null},Ze=()=>{if(!L)return;const{icon:a,tooltip:m,tabIndex:k}=x,se=Pe(m)[0]||(E==null?void 0:E.edit),rt=typeof se=="string"?se:"";return W.includes("icon")?o.createElement(ye,{key:"edit",title:m===!1?"":se},o.createElement("button",{type:"button",ref:N,className:"".concat(w,"-edit"),onClick:D,"aria-label":rt,tabIndex:k},a||o.createElement(Rt,{role:"button"}))):null},et=()=>C?o.createElement(Gt,Object.assign({key:"copy"},A,{prefixCls:w,copied:j,locale:E,onCopy:re,loading:_,iconOnly:u==null})):null,tt=a=>[a&&Ye(),Ze(),et()],nt=a=>[a&&!H&&o.createElement("span",{"aria-hidden":!0,key:"ellipsis"},nn),T.suffix,tt(a)];return o.createElement(mt,{onResize:Ge,disabled:!I},a=>o.createElement(Zt,{tooltipProps:le,enableEllipsis:I,isEllipsis:Se},o.createElement(Ne,Object.assign({className:ee({["".concat(w,"-").concat(c)]:c,["".concat(w,"-disabled")]:g,["".concat(w,"-ellipsis")]:B,["".concat(w,"-ellipsis-single-line")]:qe,["".concat(w,"-ellipsis-multiple-line")]:ie},i),prefixCls:n,style:Object.assign(Object.assign({},s),{WebkitLineClamp:ie?K:void 0}),component:l,ref:ke(a,$,t),direction:S,onClick:W.includes("text")?D:void 0,"aria-label":J==null?void 0:J.toString(),title:y},R),o.createElement(Yt,{enableMeasure:I&&!M,text:u,rows:K,width:Ce,onEllipsis:Qe,expanded:H,miscDeps:[j,H,_,L,C,E]},(m,k)=>tn(e,o.createElement(o.Fragment,null,m.length>0&&k&&!H&&J?o.createElement("span",{key:"show-content","aria-hidden":!0},m):m,nt(k)))))))});var rn=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,n=Object.getOwnPropertySymbols(e);i<n.length;i++)t.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(r[n[i]]=e[n[i]]);return r};const on=o.forwardRef((e,t)=>{var{ellipsis:r,rel:n}=e,i=rn(e,["ellipsis","rel"]);const s=Object.assign(Object.assign({},i),{rel:n===void 0&&i.target==="_blank"?"noopener noreferrer":n});return delete s.navigate,o.createElement(te,Object.assign({},s,{ref:t,ellipsis:!!r,component:"a"}))}),ln=o.forwardRef((e,t)=>o.createElement(te,Object.assign({ref:t},e,{component:"div"})));var sn=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,n=Object.getOwnPropertySymbols(e);i<n.length;i++)t.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(r[n[i]]=e[n[i]]);return r};const an=(e,t)=>{var{ellipsis:r}=e,n=sn(e,["ellipsis"]);const i=o.useMemo(()=>r&&typeof r=="object"?De(r,["expandable","rows"]):r,[r]);return o.createElement(te,Object.assign({ref:t},n,{ellipsis:i,component:"span"}))},cn=o.forwardRef(an);var un=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,n=Object.getOwnPropertySymbols(e);i<n.length;i++)t.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(r[n[i]]=e[n[i]]);return r};const dn=[1,2,3,4,5],fn=o.forwardRef((e,t)=>{const{level:r=1}=e,n=un(e,["level"]),i=dn.includes(r)?"h".concat(r):"h1";return o.createElement(te,Object.assign({ref:t},n,{component:i}))}),ne=Ne;ne.Text=cn;ne.Link=on;ne.Title=fn;ne.Paragraph=ln;export{ht as R,ne as T,Re as i};
