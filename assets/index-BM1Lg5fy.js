import{r,W as te,T as de,g as ue,bk as nt,D as ot,E as rt,n as ne,Q as it,ax as lt,j as st,I as je,q as Te,bg as at,t as Ie,p as X,z as ct,aF as dt,Z as $e}from"./index-C6IDuEAZ.js";import{T as pe,h as xe,R as ut}from"./MyApp-nuvdhu8g.js";import{o as _e,T as pt,R as ft,h as Ce}from"./TextArea--VwofgTr.js";var gt=function(e,t){var o={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(o[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,n=Object.getOwnPropertySymbols(e);i<n.length;i++)t.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(o[n[i]]=e[n[i]]);return o};const mt={border:0,background:"transparent",padding:0,lineHeight:"inherit",display:"inline-flex"},Le=r.forwardRef((e,t)=>{const o=l=>{const{keyCode:u}=l;u===te.ENTER&&l.preventDefault()},n=l=>{const{keyCode:u}=l,{onClick:g}=e;u===te.ENTER&&g&&g()},{style:i,noStyle:a,disabled:f,tabIndex:c=0}=e,m=gt(e,["style","noStyle","disabled","tabIndex"]);let d={};return a||(d=Object.assign({},mt)),f&&(d.pointerEvents="none"),d=Object.assign(Object.assign({},d),i),r.createElement("div",Object.assign({role:"button",tabIndex:c,ref:t},m,{onKeyDown:o,onKeyUp:n,style:d}))});var yt={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M257.7 752c2 0 4-.2 6-.5L431.9 722c2-.4 3.9-1.3 5.3-2.8l423.9-423.9a9.96 9.96 0 000-14.1L694.9 114.9c-1.9-1.9-4.4-2.9-7.1-2.9s-5.2 1-7.1 2.9L256.8 538.8c-1.5 1.5-2.4 3.3-2.8 5.3l-29.5 168.2a33.5 33.5 0 009.4 29.8c6.6 6.4 14.9 9.9 23.8 9.9zm67.4-174.4L687.8 215l73.3 73.3-362.7 362.6-88.9 15.7 15.6-89zM880 836H144c-17.7 0-32 14.3-32 32v36c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-36c0-17.7-14.3-32-32-32z"}}]},name:"edit",theme:"outlined"},bt=function(t,o){return r.createElement(de,ue({},t,{ref:o,icon:yt}))},vt=r.forwardRef(bt),Et={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M864 170h-60c-4.4 0-8 3.6-8 8v518H310v-73c0-6.7-7.8-10.5-13-6.3l-141.9 112a8 8 0 000 12.6l141.9 112c5.3 4.2 13 .4 13-6.3v-75h498c35.3 0 64-28.7 64-64V178c0-4.4-3.6-8-8-8z"}}]},name:"enter",theme:"outlined"},ht=function(t,o){return r.createElement(de,ue({},t,{ref:o,icon:Et}))},xt=r.forwardRef(ht);const Ct=(e,t,o,n)=>{const{titleMarginBottom:i,fontWeightStrong:a}=n;return{marginBottom:i,color:o,fontWeight:a,fontSize:e,lineHeight:t}},Ot=e=>{const t=[1,2,3,4,5],o={};return t.forEach(n=>{o[`
      h${n}&,
      div&-h${n},
      div&-h${n} > textarea,
      h${n}
    `]=Ct(e[`fontSizeHeading${n}`],e[`lineHeightHeading${n}`],e.colorTextHeading,e)}),o},St=e=>{const{componentCls:t}=e;return{"a&, a":Object.assign(Object.assign({},_e(e)),{textDecoration:e.linkDecoration,"&:active, &:hover":{textDecoration:e.linkHoverDecoration},[`&[disabled], &${t}-disabled`]:{color:e.colorTextDisabled,cursor:"not-allowed","&:active, &:hover":{color:e.colorTextDisabled},"&:active":{pointerEvents:"none"}}})}},wt=e=>({code:{margin:"0 0.2em",paddingInline:"0.4em",paddingBlock:"0.2em 0.1em",fontSize:"85%",fontFamily:e.fontFamilyCode,background:"rgba(150, 150, 150, 0.1)",border:"1px solid rgba(100, 100, 100, 0.2)",borderRadius:3},kbd:{margin:"0 0.2em",paddingInline:"0.4em",paddingBlock:"0.15em 0.1em",fontSize:"90%",fontFamily:e.fontFamilyCode,background:"rgba(150, 150, 150, 0.06)",border:"1px solid rgba(100, 100, 100, 0.2)",borderBottomWidth:2,borderRadius:3},mark:{padding:0,backgroundColor:nt[2]},"u, ins":{textDecoration:"underline",textDecorationSkipInk:"auto"},"s, del":{textDecoration:"line-through"},strong:{fontWeight:600},"ul, ol":{marginInline:0,marginBlock:"0 1em",padding:0,li:{marginInline:"20px 0",marginBlock:0,paddingInline:"4px 0",paddingBlock:0}},ul:{listStyleType:"circle",ul:{listStyleType:"disc"}},ol:{listStyleType:"decimal"},"pre, blockquote":{margin:"1em 0"},pre:{padding:"0.4em 0.6em",whiteSpace:"pre-wrap",wordWrap:"break-word",background:"rgba(150, 150, 150, 0.1)",border:"1px solid rgba(100, 100, 100, 0.2)",borderRadius:3,fontFamily:e.fontFamilyCode,code:{display:"inline",margin:0,padding:0,fontSize:"inherit",fontFamily:"inherit",background:"transparent",border:0}},blockquote:{paddingInline:"0.6em 0",paddingBlock:0,borderInlineStart:"4px solid rgba(100, 100, 100, 0.2)",opacity:.85}}),Rt=e=>{const{componentCls:t,paddingSM:o}=e,n=o;return{"&-edit-content":{position:"relative","div&":{insetInlineStart:e.calc(e.paddingSM).mul(-1).equal(),marginTop:e.calc(n).mul(-1).equal(),marginBottom:`calc(1em - ${ot(n)})`},[`${t}-edit-content-confirm`]:{position:"absolute",insetInlineEnd:e.calc(e.marginXS).add(2).equal(),insetBlockEnd:e.marginXS,color:e.colorTextDescription,fontWeight:"normal",fontSize:e.fontSize,fontStyle:"normal",pointerEvents:"none"},textarea:{margin:"0!important",MozTransition:"none",height:"1em"}}}},jt=e=>({[`${e.componentCls}-copy-success`]:{"\n    &,\n    &:hover,\n    &:focus":{color:e.colorSuccess}},[`${e.componentCls}-copy-icon-only`]:{marginInlineStart:0}}),Tt=()=>({"\n  a&-ellipsis,\n  span&-ellipsis\n  ":{display:"inline-block",maxWidth:"100%"},"&-ellipsis-single-line":{whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis","a&, span&":{verticalAlign:"bottom"},"> code":{paddingBlock:0,maxWidth:"calc(100% - 1.2em)",display:"inline-block",overflow:"hidden",textOverflow:"ellipsis",verticalAlign:"bottom",boxSizing:"content-box"}},"&-ellipsis-multiple-line":{display:"-webkit-box",overflow:"hidden",WebkitLineClamp:3,WebkitBoxOrient:"vertical"}}),It=e=>{const{componentCls:t,titleMarginTop:o}=e;return{[t]:Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({color:e.colorText,wordBreak:"break-word",lineHeight:e.lineHeight,[`&${t}-secondary`]:{color:e.colorTextDescription},[`&${t}-success`]:{color:e.colorSuccess},[`&${t}-warning`]:{color:e.colorWarning},[`&${t}-danger`]:{color:e.colorError,"a&:active, a&:focus":{color:e.colorErrorActive},"a&:hover":{color:e.colorErrorHover}},[`&${t}-disabled`]:{color:e.colorTextDisabled,cursor:"not-allowed",userSelect:"none"},"\n        div&,\n        p\n      ":{marginBottom:"1em"}},Ot(e)),{[`
      & + h1${t},
      & + h2${t},
      & + h3${t},
      & + h4${t},
      & + h5${t}
      `]:{marginTop:o},"\n      div,\n      ul,\n      li,\n      p,\n      h1,\n      h2,\n      h3,\n      h4,\n      h5":{"\n        + h1,\n        + h2,\n        + h3,\n        + h4,\n        + h5\n        ":{marginTop:o}}}),wt(e)),St(e)),{[`
        ${t}-expand,
        ${t}-collapse,
        ${t}-edit,
        ${t}-copy
      `]:Object.assign(Object.assign({},_e(e)),{marginInlineStart:e.marginXXS})}),Rt(e)),jt(e)),Tt()),{"&-rtl":{direction:"rtl"}})}},$t=()=>({titleMarginTop:"1.2em",titleMarginBottom:"0.5em"}),ke=rt("Typography",e=>[It(e)],$t),_t=e=>{const{prefixCls:t,"aria-label":o,className:n,style:i,direction:a,maxLength:f,autoSize:c=!0,value:m,onSave:d,onCancel:l,onEnd:u,component:g,enterIcon:y=r.createElement(xt,null)}=e,O=r.useRef(null),C=r.useRef(!1),j=r.useRef(),[N,H]=r.useState(m);r.useEffect(()=>{H(m)},[m]),r.useEffect(()=>{if(O.current&&O.current.resizableTextArea){const{textArea:E}=O.current.resizableTextArea;E.focus();const{length:x}=E.value;E.setSelectionRange(x,x)}},[]);const v=E=>{let{target:x}=E;H(x.value.replace(/[\n\r]/g,""))},S=()=>{C.current=!0},L=()=>{C.current=!1},T=E=>{let{keyCode:x}=E;C.current||(j.current=x)},U=()=>{d(N.trim())},k=E=>{let{keyCode:x,ctrlKey:V,altKey:A,metaKey:K,shiftKey:F}=E;j.current===x&&!C.current&&!V&&!A&&!K&&!F&&(x===te.ENTER?(U(),u==null||u()):x===te.ESC&&l())},b=()=>{U()},_=g?`${t}-${g}`:"",[w,I,R]=ke(t),z=ne(t,`${t}-edit-content`,{[`${t}-rtl`]:a==="rtl"},n,_,I,R);return w(r.createElement("div",{className:z,style:i},r.createElement(pt,{ref:O,maxLength:f,value:N,onChange:v,onKeyDown:T,onKeyUp:k,onCompositionStart:S,onCompositionEnd:L,onBlur:b,"aria-label":o,rows:1,autoSize:c}),y!==null?it(y,{className:`${t}-edit-content-confirm`}):null))};var Lt=function(){var e=document.getSelection();if(!e.rangeCount)return function(){};for(var t=document.activeElement,o=[],n=0;n<e.rangeCount;n++)o.push(e.getRangeAt(n));switch(t.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":t.blur();break;default:t=null;break}return e.removeAllRanges(),function(){e.type==="Caret"&&e.removeAllRanges(),e.rangeCount||o.forEach(function(i){e.addRange(i)}),t&&t.focus()}},kt=Lt,Oe={"text/plain":"Text","text/html":"Url",default:"Text"},Dt="Copy to clipboard: #{key}, Enter";function Mt(e){var t=(/mac os x/i.test(navigator.userAgent)?"⌘":"Ctrl")+"+C";return e.replace(/#{\s*key\s*}/g,t)}function Pt(e,t){var o,n,i,a,f,c,m=!1;t||(t={}),o=t.debug||!1;try{i=kt(),a=document.createRange(),f=document.getSelection(),c=document.createElement("span"),c.textContent=e,c.ariaHidden="true",c.style.all="unset",c.style.position="fixed",c.style.top=0,c.style.clip="rect(0, 0, 0, 0)",c.style.whiteSpace="pre",c.style.webkitUserSelect="text",c.style.MozUserSelect="text",c.style.msUserSelect="text",c.style.userSelect="text",c.addEventListener("copy",function(l){if(l.stopPropagation(),t.format)if(l.preventDefault(),typeof l.clipboardData>"u"){o&&console.warn("unable to use e.clipboardData"),o&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var u=Oe[t.format]||Oe.default;window.clipboardData.setData(u,e)}else l.clipboardData.clearData(),l.clipboardData.setData(t.format,e);t.onCopy&&(l.preventDefault(),t.onCopy(l.clipboardData))}),document.body.appendChild(c),a.selectNodeContents(c),f.addRange(a);var d=document.execCommand("copy");if(!d)throw new Error("copy command was unsuccessful");m=!0}catch(l){o&&console.error("unable to copy using execCommand: ",l),o&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(t.format||"text",e),t.onCopy&&t.onCopy(window.clipboardData),m=!0}catch(u){o&&console.error("unable to copy using clipboardData: ",u),o&&console.error("falling back to prompt"),n=Mt("message"in t?t.message:Dt),window.prompt(n,e)}}finally{f&&(typeof f.removeRange=="function"?f.removeRange(a):f.removeAllRanges()),c&&document.body.removeChild(c),i()}return m}var Nt=Pt;const Ht=lt(Nt);var zt=function(e,t,o,n){function i(a){return a instanceof o?a:new o(function(f){f(a)})}return new(o||(o=Promise))(function(a,f){function c(l){try{d(n.next(l))}catch(u){f(u)}}function m(l){try{d(n.throw(l))}catch(u){f(u)}}function d(l){l.done?a(l.value):i(l.value).then(c,m)}d((n=n.apply(e,t||[])).next())})};const At=e=>{let{copyConfig:t,children:o}=e;const[n,i]=r.useState(!1),[a,f]=r.useState(!1),c=r.useRef(null),m=()=>{c.current&&clearTimeout(c.current)},d={};t.format&&(d.format=t.format),r.useEffect(()=>m,[]);const l=st(u=>zt(void 0,void 0,void 0,function*(){var g;u==null||u.preventDefault(),u==null||u.stopPropagation(),f(!0);try{const y=typeof t.text=="function"?yield t.text():t.text;Ht(y||String(o)||"",d),f(!1),i(!0),m(),c.current=setTimeout(()=>{i(!1)},3e3),(g=t.onCopy)===null||g===void 0||g.call(t,u)}catch(y){throw f(!1),y}}));return{copied:n,copyLoading:a,onClick:l}};function le(e,t){return r.useMemo(()=>{const o=!!e;return[o,Object.assign(Object.assign({},t),o&&typeof e=="object"?e:null)]},[e])}const Bt=(e,t)=>{const o=r.useRef(!1);r.useEffect(()=>{o.current?e():o.current=!0},t)},Wt=e=>{const t=r.useRef();return r.useEffect(()=>{t.current=e}),t.current};var Ut=function(e,t){var o={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(o[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,n=Object.getOwnPropertySymbols(e);i<n.length;i++)t.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(o[n[i]]=e[n[i]]);return o};const De=r.forwardRef((e,t)=>{const{prefixCls:o,component:n="article",className:i,rootClassName:a,setContentRef:f,children:c,direction:m,style:d}=e,l=Ut(e,["prefixCls","component","className","rootClassName","setContentRef","children","direction","style"]),{getPrefixCls:u,direction:g,typography:y}=r.useContext(je),O=m??g;let C=t;f&&(C=Te(t,f));const j=u("typography",o),[N,H,v]=ke(j),S=ne(j,y==null?void 0:y.className,{[`${j}-rtl`]:O==="rtl"},i,a,H,v),L=Object.assign(Object.assign({},y==null?void 0:y.style),d);return N(r.createElement(n,Object.assign({className:S,style:L,ref:C},l),c))});var Kt={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M832 64H296c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h496v688c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V96c0-17.7-14.3-32-32-32zM704 192H192c-17.7 0-32 14.3-32 32v530.7c0 8.5 3.4 16.6 9.4 22.6l173.3 173.3c2.2 2.2 4.7 4 7.4 5.5v1.9h4.2c3.5 1.3 7.2 2 11 2H704c17.7 0 32-14.3 32-32V224c0-17.7-14.3-32-32-32zM350 856.2L263.9 770H350v86.2zM664 888H414V746c0-22.1-17.9-40-40-40H232V264h432v624z"}}]},name:"copy",theme:"outlined"},Ft=function(t,o){return r.createElement(de,ue({},t,{ref:o,icon:Kt}))},Vt=r.forwardRef(Ft);function Se(e){return e===!1?[!1,!1]:Array.isArray(e)?e:[e]}function G(e,t,o){return e===!0||e===void 0?t:e||o&&t}const qt=e=>{const{prefixCls:t,copied:o,locale:n,iconOnly:i,tooltips:a,icon:f,loading:c,tabIndex:m,onCopy:d}=e,l=Se(a),u=Se(f),{copied:g,copy:y}=n??{},O=o?G(l[1],g):G(l[0],y),j=typeof O=="string"?O:o?g:y;return r.createElement(pe,{key:"copy",title:O},r.createElement(Le,{className:ne(`${t}-copy`,{[`${t}-copy-success`]:o,[`${t}-copy-icon-only`]:i}),onClick:d,"aria-label":j,tabIndex:m},o?G(u[1],r.createElement(ft,null),!0):G(u[0],c?r.createElement(at,null):r.createElement(Vt,null),!0)))},Y=r.forwardRef((e,t)=>{let{style:o,children:n}=e;const i=r.useRef(null);return r.useImperativeHandle(t,()=>({isExceed:()=>{const a=i.current;return a.scrollHeight>a.clientHeight},getHeight:()=>i.current.clientHeight})),r.createElement("span",{"aria-hidden":!0,ref:i,style:Object.assign({position:"fixed",display:"block",left:0,top:0,pointerEvents:"none",backgroundColor:"rgba(255, 0, 0, 0.65)"},o)},n)});function Me(e){const t=typeof e;return t==="string"||t==="number"}function Xt(e){let t=0;return e.forEach(o=>{Me(o)?t+=String(o).length:t+=1}),t}function we(e,t){let o=0;const n=[];for(let i=0;i<e.length;i+=1){if(o===t)return n;const a=e[i],c=Me(a)?String(a).length:1,m=o+c;if(m>t){const d=t-o;return n.push(String(a).slice(0,d)),n}n.push(a),o=m}return e}const se=0,ae=1,ce=2,Re=3,ee={display:"-webkit-box",overflow:"hidden",WebkitBoxOrient:"vertical"};function Jt(e){const{enableMeasure:t,width:o,text:n,children:i,rows:a,expanded:f,miscDeps:c,onEllipsis:m}=e,d=r.useMemo(()=>Ie(n),[n]),l=r.useMemo(()=>Xt(d),[n]),u=r.useMemo(()=>i(d,!1),[n]),[g,y]=r.useState(null),O=r.useRef(null),C=r.useRef(null),j=r.useRef(null),N=r.useRef(null),[H,v]=r.useState(!1),[S,L]=r.useState(se),[T,U]=r.useState(0);X(()=>{L(t&&o&&l?ae:se)},[o,n,a,t,d]),X(()=>{var w,I,R,z;if(S===ae){const E=!!(!((w=C.current)===null||w===void 0)&&w.isExceed());L(E?ce:Re),y(E?[0,l]:null),v(E);const x=((I=C.current)===null||I===void 0?void 0:I.getHeight())||0,V=a===1?0:((R=j.current)===null||R===void 0?void 0:R.getHeight())||0,A=((z=N.current)===null||z===void 0?void 0:z.getHeight())||0,K=V+A,F=Math.max(x,K);U(F+1),m(E)}},[S]);const k=g?Math.ceil((g[0]+g[1])/2):0;X(()=>{var w;const[I,R]=g||[0,0];if(I!==R){const E=(((w=O.current)===null||w===void 0?void 0:w.getHeight())||0)>T;let x=k;R-I===1&&(x=E?I:R),y(E?[I,x]:[x,R])}},[g,k]);const b=r.useMemo(()=>{if(S!==ce||!g||g[0]!==g[1]){const w=i(d,!1);return S!==Re&&S!==se?r.createElement("span",{style:Object.assign(Object.assign({},ee),{WebkitLineClamp:a})},w):w}return i(f?d:we(d,g[0]),H)},[f,S,g,d].concat(ct(c))),_={width:o,margin:0,padding:0};return r.createElement(r.Fragment,null,b,S===ae&&r.createElement(r.Fragment,null,r.createElement(Y,{style:Object.assign(Object.assign(Object.assign({},_),ee),{WebkitLineClamp:a}),ref:C},u),r.createElement(Y,{style:Object.assign(Object.assign(Object.assign({},_),ee),{WebkitLineClamp:a-1}),ref:j},u),r.createElement(Y,{style:Object.assign(Object.assign(Object.assign({},_),ee),{WebkitLineClamp:1}),ref:N},i([],!0))),S===ce&&g&&g[0]!==g[1]&&r.createElement(Y,{style:Object.assign(Object.assign({},_),{top:400}),ref:O},i(we(d,k),!0)))}const Qt=e=>{let{enableEllipsis:t,isEllipsis:o,children:n,tooltipProps:i}=e;return!(i!=null&&i.title)||!t?n:r.createElement(pe,Object.assign({open:o?void 0:!1},i),n)};var Zt=function(e,t){var o={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(o[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,n=Object.getOwnPropertySymbols(e);i<n.length;i++)t.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(o[n[i]]=e[n[i]]);return o};function Gt(e,t){let{mark:o,code:n,underline:i,delete:a,strong:f,keyboard:c,italic:m}=e,d=t;function l(u,g){g&&(d=r.createElement(u,{},d))}return l("strong",f),l("u",i),l("del",a),l("code",n),l("mark",o),l("kbd",c),l("i",m),d}const Yt="...",oe=r.forwardRef((e,t)=>{var o,n,i;const{prefixCls:a,className:f,style:c,type:m,disabled:d,children:l,ellipsis:u,editable:g,copyable:y,component:O,title:C}=e,j=Zt(e,["prefixCls","className","style","type","disabled","children","ellipsis","editable","copyable","component","title"]),{getPrefixCls:N,direction:H}=r.useContext(je),[v]=dt("Text"),S=r.useRef(null),L=r.useRef(null),T=N("typography",a),U=$e(j,["mark","code","delete","underline","strong","keyboard","italic"]),[k,b]=le(g),[_,w]=xe(!1,{value:b.editing}),{triggerType:I=["icon"]}=b,R=s=>{var p;s&&((p=b.onStart)===null||p===void 0||p.call(b)),w(s)},z=Wt(_);Bt(()=>{var s;!_&&z&&((s=L.current)===null||s===void 0||s.focus())},[_]);const E=s=>{s==null||s.preventDefault(),R(!0)},x=s=>{var p;(p=b.onChange)===null||p===void 0||p.call(b,s),R(!1)},V=()=>{var s;(s=b.onCancel)===null||s===void 0||s.call(b),R(!1)},[A,K]=le(y),{copied:F,copyLoading:fe,onClick:Pe}=At({copyConfig:K,children:l}),[ge,Ne]=r.useState(!1),[me,He]=r.useState(!1),[ye,ze]=r.useState(!1),[be,Ae]=r.useState(!1),[Be,We]=r.useState(!0),[B,h]=le(u,{expandable:!1,symbol:s=>s?v==null?void 0:v.collapse:v==null?void 0:v.expand}),[D,Ue]=xe(h.defaultExpanded||!1,{value:h.expanded}),$=B&&(!D||h.expandable==="collapsible"),{rows:q=1}=h,J=r.useMemo(()=>$&&(h.suffix!==void 0||h.onEllipsis||h.expandable||k||A),[$,h,k,A]);X(()=>{B&&!J&&(Ne(Ce("webkitLineClamp")),He(Ce("textOverflow")))},[J,B]);const[M,Ke]=r.useState($),ve=r.useMemo(()=>J?!1:q===1?me:ge,[J,me,ge]);X(()=>{Ke(ve&&$)},[ve,$]);const Ee=$&&(M?be:ye),Fe=$&&q===1&&M,Q=$&&q>1&&M,Ve=(s,p)=>{var P;Ue(p.expanded),(P=h.onExpand)===null||P===void 0||P.call(h,s,p)},[he,qe]=r.useState(0),Xe=s=>{let{offsetWidth:p}=s;qe(p)},Je=s=>{var p;ze(s),ye!==s&&((p=h.onEllipsis)===null||p===void 0||p.call(h,s))};r.useEffect(()=>{const s=S.current;if(B&&M&&s){const p=Q?s.offsetHeight<s.scrollHeight:s.offsetWidth<s.scrollWidth;be!==p&&Ae(p)}},[B,M,l,Q,Be,he]),r.useEffect(()=>{const s=S.current;if(typeof IntersectionObserver>"u"||!s||!M||!$)return;const p=new IntersectionObserver(()=>{We(!!s.offsetParent)});return p.observe(s),()=>{p.disconnect()}},[M,$]);let W={};h.tooltip===!0?W={title:(o=b.text)!==null&&o!==void 0?o:l}:r.isValidElement(h.tooltip)?W={title:h.tooltip}:typeof h.tooltip=="object"?W=Object.assign({title:(n=b.text)!==null&&n!==void 0?n:l},h.tooltip):W={title:h.tooltip};const Z=r.useMemo(()=>{const s=p=>["string","number"].includes(typeof p);if(!(!B||M)){if(s(b.text))return b.text;if(s(l))return l;if(s(C))return C;if(s(W.title))return W.title}},[B,M,C,W.title,Ee]);if(_)return r.createElement(_t,{value:(i=b.text)!==null&&i!==void 0?i:typeof l=="string"?l:"",onSave:x,onCancel:V,onEnd:b.onEnd,prefixCls:T,className:f,style:c,direction:H,component:O,maxLength:b.maxLength,autoSize:b.autoSize,enterIcon:b.enterIcon});const Qe=()=>{const{expandable:s,symbol:p}=h;return!s||D&&s!=="collapsible"?null:r.createElement("a",{key:"expand",className:`${T}-${D?"collapse":"expand"}`,onClick:P=>Ve(P,{expanded:!D}),"aria-label":D?v.collapse:v==null?void 0:v.expand},typeof p=="function"?p(D):p)},Ze=()=>{if(!k)return;const{icon:s,tooltip:p,tabIndex:P}=b,ie=Ie(p)[0]||(v==null?void 0:v.edit),tt=typeof ie=="string"?ie:"";return I.includes("icon")?r.createElement(pe,{key:"edit",title:p===!1?"":ie},r.createElement(Le,{ref:L,className:`${T}-edit`,onClick:E,"aria-label":tt,tabIndex:P},s||r.createElement(vt,{role:"button"}))):null},Ge=()=>A?r.createElement(qt,Object.assign({key:"copy"},K,{prefixCls:T,copied:F,locale:v,onCopy:Pe,loading:fe,iconOnly:l==null})):null,Ye=s=>[s&&Qe(),Ze(),Ge()],et=s=>[s&&!D&&r.createElement("span",{"aria-hidden":!0,key:"ellipsis"},Yt),h.suffix,Ye(s)];return r.createElement(ut,{onResize:Xe,disabled:!$},s=>r.createElement(Qt,{tooltipProps:W,enableEllipsis:$,isEllipsis:Ee},r.createElement(De,Object.assign({className:ne({[`${T}-${m}`]:m,[`${T}-disabled`]:d,[`${T}-ellipsis`]:B,[`${T}-ellipsis-single-line`]:Fe,[`${T}-ellipsis-multiple-line`]:Q},f),prefixCls:a,style:Object.assign(Object.assign({},c),{WebkitLineClamp:Q?q:void 0}),component:O,ref:Te(s,S,t),direction:H,onClick:I.includes("text")?E:void 0,"aria-label":Z==null?void 0:Z.toString(),title:C},U),r.createElement(Jt,{enableMeasure:$&&!M,text:l,rows:q,width:he,onEllipsis:Je,expanded:D,miscDeps:[F,D,fe,k,A]},(p,P)=>Gt(e,r.createElement(r.Fragment,null,p.length>0&&P&&!D&&Z?r.createElement("span",{key:"show-content","aria-hidden":!0},p):p,et(P)))))))});var en=function(e,t){var o={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(o[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,n=Object.getOwnPropertySymbols(e);i<n.length;i++)t.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(o[n[i]]=e[n[i]]);return o};const tn=r.forwardRef((e,t)=>{var{ellipsis:o,rel:n}=e,i=en(e,["ellipsis","rel"]);const a=Object.assign(Object.assign({},i),{rel:n===void 0&&i.target==="_blank"?"noopener noreferrer":n});return delete a.navigate,r.createElement(oe,Object.assign({},a,{ref:t,ellipsis:!!o,component:"a"}))}),nn=r.forwardRef((e,t)=>r.createElement(oe,Object.assign({ref:t},e,{component:"div"})));var on=function(e,t){var o={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(o[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,n=Object.getOwnPropertySymbols(e);i<n.length;i++)t.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(o[n[i]]=e[n[i]]);return o};const rn=(e,t)=>{var{ellipsis:o}=e,n=on(e,["ellipsis"]);const i=r.useMemo(()=>o&&typeof o=="object"?$e(o,["expandable","rows"]):o,[o]);return r.createElement(oe,Object.assign({ref:t},n,{ellipsis:i,component:"span"}))},ln=r.forwardRef(rn);var sn=function(e,t){var o={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(o[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,n=Object.getOwnPropertySymbols(e);i<n.length;i++)t.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(o[n[i]]=e[n[i]]);return o};const an=[1,2,3,4,5],cn=r.forwardRef((e,t)=>{const{level:o=1}=e,n=sn(e,["level"]);let i;return an.includes(o)?i=`h${o}`:i="h1",r.createElement(oe,Object.assign({ref:t},n,{component:i}))}),re=De;re.Text=ln;re.Link=tn;re.Title=cn;re.Paragraph=nn;export{re as T};