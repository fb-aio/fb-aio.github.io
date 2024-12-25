import{r as s,I as X,o as q,bB as D,E as ee,F as te,w as ne,bd as oe,a6 as se,bs as J,k as W,h as re,T as ae,g as ie,Z as le,v as Y,bA as ce,Q as Z,aM as ue}from"./index-Cf3ye8Qe.js";import{m as fe,c as pe,i as me,I as U,f as de,n as ve,o as ge}from"./index-C20emWyk.js";import{R as Ce}from"./EyeOutlined-D6ILWGos.js";import{R as be}from"./SearchOutlined-HRSuk4gs.js";const ye=e=>{const{getPrefixCls:r,direction:i}=s.useContext(X),{prefixCls:t,className:n}=e,u=r("input-group",t),v=r("input"),[m,C]=fe(v),x=q(u,{[`${u}-lg`]:e.size==="large",[`${u}-sm`]:e.size==="small",[`${u}-compact`]:e.compact,[`${u}-rtl`]:i==="rtl"},C,n),g=s.useContext(D),d=s.useMemo(()=>Object.assign(Object.assign({},g),{isFormItemInput:!1}),[g]);return m(s.createElement("span",{className:x,style:e.style,onMouseEnter:e.onMouseEnter,onMouseLeave:e.onMouseLeave,onFocus:e.onFocus,onBlur:e.onBlur},s.createElement(D.Provider,{value:d},e.children)))},Oe=e=>{const{componentCls:r,paddingXS:i}=e;return{[`${r}`]:{display:"inline-flex",alignItems:"center",flexWrap:"nowrap",columnGap:i,"&-rtl":{direction:"rtl"},[`${r}-input`]:{textAlign:"center",paddingInline:e.paddingXXS},[`&${r}-sm ${r}-input`]:{paddingInline:e.calc(e.paddingXXS).div(2).equal()},[`&${r}-lg ${r}-input`]:{paddingInline:e.paddingXS}}}},he=ee(["Input","OTP"],e=>{const r=te(e,pe(e));return[Oe(r)]},me);var xe=function(e,r){var i={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(i[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,t=Object.getOwnPropertySymbols(e);n<t.length;n++)r.indexOf(t[n])<0&&Object.prototype.propertyIsEnumerable.call(e,t[n])&&(i[t[n]]=e[t[n]]);return i};const Ie=s.forwardRef((e,r)=>{const{value:i,onChange:t,onActiveChange:n,index:u,mask:v}=e,m=xe(e,["value","onChange","onActiveChange","index","mask"]),C=i&&typeof v=="string"?v:i,x=p=>{t(u,p.target.value)},g=s.useRef(null);s.useImperativeHandle(r,()=>g.current);const d=()=>{ne(()=>{var p;const b=(p=g.current)===null||p===void 0?void 0:p.input;document.activeElement===b&&b&&b.select()})},_=p=>{let{key:b}=p;b==="ArrowLeft"?n(u-1):b==="ArrowRight"&&n(u+1),d()},w=p=>{p.key==="Backspace"&&!i&&n(u-1),d()};return s.createElement(U,Object.assign({},m,{ref:g,value:C,onInput:x,onFocus:d,onKeyDown:_,onKeyUp:w,onMouseDown:d,onMouseUp:d,type:v===!0?"password":"text"}))});var Pe=function(e,r){var i={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(i[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,t=Object.getOwnPropertySymbols(e);n<t.length;n++)r.indexOf(t[n])<0&&Object.prototype.propertyIsEnumerable.call(e,t[n])&&(i[t[n]]=e[t[n]]);return i};function L(e){return(e||"").split("")}const Se=s.forwardRef((e,r)=>{const{prefixCls:i,length:t=6,size:n,defaultValue:u,value:v,onChange:m,formatter:C,variant:x,disabled:g,status:d,autoFocus:_,mask:w}=e,p=Pe(e,["prefixCls","length","size","defaultValue","value","onChange","formatter","variant","disabled","status","autoFocus","mask"]),{getPrefixCls:b,direction:j}=s.useContext(X),y=b("otp",i),k=oe(p,{aria:!0,data:!0,attr:!0}),P=se(y),[A,M,$]=he(y,P),S=J(o=>n??o),z=s.useContext(D),O=de(z.status,d),h=s.useMemo(()=>Object.assign(Object.assign({},z),{status:O,hasFeedback:!1,feedbackIcon:null}),[z,O]),T=s.useRef(null),I=s.useRef({});s.useImperativeHandle(r,()=>({focus:()=>{var o;(o=I.current[0])===null||o===void 0||o.focus()},blur:()=>{var o;for(let a=0;a<t;a+=1)(o=I.current[a])===null||o===void 0||o.blur()},nativeElement:T.current}));const N=o=>C?C(o):o,[R,E]=s.useState(L(N(u||"")));s.useEffect(()=>{v!==void 0&&E(L(v))},[v]);const V=W(o=>{E(o),m&&o.length===t&&o.every(a=>a)&&o.some((a,c)=>R[c]!==a)&&m(o.join(""))}),K=W((o,a)=>{let c=re(R);for(let f=0;f<o;f+=1)c[f]||(c[f]="");a.length<=1?c[o]=a:c=c.slice(0,o).concat(L(a)),c=c.slice(0,t);for(let f=c.length-1;f>=0&&!c[f];f-=1)c.pop();const B=N(c.map(f=>f||" ").join(""));return c=L(B).map((f,H)=>f===" "&&!c[H]?c[H]:f),c}),Q=(o,a)=>{var c;const B=K(o,a),f=Math.min(o+a.length,t-1);f!==o&&((c=I.current[f])===null||c===void 0||c.focus()),V(B)},G=o=>{var a;(a=I.current[o])===null||a===void 0||a.focus()},l={variant:x,disabled:g,status:O,mask:w};return A(s.createElement("div",Object.assign({},k,{ref:T,className:q(y,{[`${y}-sm`]:S==="small",[`${y}-lg`]:S==="large",[`${y}-rtl`]:j==="rtl"},$,M)}),s.createElement(D.Provider,{value:h},Array.from({length:t}).map((o,a)=>{const c=`otp-${a}`,B=R[a]||"";return s.createElement(Ie,Object.assign({ref:f=>{I.current[a]=f},key:c,index:a,size:S,htmlSize:1,className:`${y}-input`,onChange:Q,value:B,onActiveChange:G,autoFocus:a===0&&_},l))}))))});var Ee={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M942.2 486.2Q889.47 375.11 816.7 305l-50.88 50.88C807.31 395.53 843.45 447.4 874.7 512 791.5 684.2 673.4 766 512 766q-72.67 0-133.87-22.38L323 798.75Q408 838 512 838q288.3 0 430.2-300.3a60.29 60.29 0 000-51.5zm-63.57-320.64L836 122.88a8 8 0 00-11.32 0L715.31 232.2Q624.86 186 512 186q-288.3 0-430.2 300.3a60.3 60.3 0 000 51.5q56.69 119.4 136.5 191.41L112.48 835a8 8 0 000 11.31L155.17 889a8 8 0 0011.31 0l712.15-712.12a8 8 0 000-11.32zM149.3 512C232.6 339.8 350.7 258 512 258c54.54 0 104.13 9.36 149.12 28.39l-70.3 70.3a176 176 0 00-238.13 238.13l-83.42 83.42C223.1 637.49 183.3 582.28 149.3 512zm246.7 0a112.11 112.11 0 01146.2-106.69L401.31 546.2A112 112 0 01396 512z"}},{tag:"path",attrs:{d:"M508 624c-3.46 0-6.87-.16-10.25-.47l-52.82 52.82a176.09 176.09 0 00227.42-227.42l-52.82 52.82c.31 3.38.47 6.79.47 10.25a111.94 111.94 0 01-112 112z"}}]},name:"eye-invisible",theme:"outlined"},we=function(r,i){return s.createElement(ae,ie({},r,{ref:i,icon:Ee}))},je=s.forwardRef(we),$e=function(e,r){var i={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(i[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,t=Object.getOwnPropertySymbols(e);n<t.length;n++)r.indexOf(t[n])<0&&Object.prototype.propertyIsEnumerable.call(e,t[n])&&(i[t[n]]=e[t[n]]);return i};const ze=e=>e?s.createElement(Ce,null):s.createElement(je,null),Re={click:"onClick",hover:"onMouseOver"},_e=s.forwardRef((e,r)=>{const{disabled:i,action:t="click",visibilityToggle:n=!0,iconRender:u=ze}=e,v=typeof n=="object"&&n.visible!==void 0,[m,C]=s.useState(()=>v?n.visible:!1),x=s.useRef(null);s.useEffect(()=>{v&&C(n.visible)},[v,n]);const g=ve(x),d=()=>{i||(m&&g(),C(z=>{var O;const h=!z;return typeof n=="object"&&((O=n.onVisibleChange)===null||O===void 0||O.call(n,h)),h}))},_=z=>{const O=Re[t]||"",h=u(m),T={[O]:d,className:`${z}-icon`,key:"passwordIcon",onMouseDown:I=>{I.preventDefault()},onMouseUp:I=>{I.preventDefault()}};return s.cloneElement(s.isValidElement(h)?h:s.createElement("span",null,h),T)},{className:w,prefixCls:p,inputPrefixCls:b,size:j}=e,y=$e(e,["className","prefixCls","inputPrefixCls","size"]),{getPrefixCls:k}=s.useContext(X),P=k("input",b),A=k("input-password",p),M=n&&_(A),$=q(A,w,{[`${A}-${j}`]:!!j}),S=Object.assign(Object.assign({},le(y,["suffix","iconRender","visibilityToggle"])),{type:m?"text":"password",className:$,prefixCls:P,suffix:M});return j&&(S.size=j),s.createElement(U,Object.assign({ref:Y(r,x)},S))});var ke=function(e,r){var i={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(i[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,t=Object.getOwnPropertySymbols(e);n<t.length;n++)r.indexOf(t[n])<0&&Object.prototype.propertyIsEnumerable.call(e,t[n])&&(i[t[n]]=e[t[n]]);return i};const Ae=s.forwardRef((e,r)=>{const{prefixCls:i,inputPrefixCls:t,className:n,size:u,suffix:v,enterButton:m=!1,addonAfter:C,loading:x,disabled:g,onSearch:d,onChange:_,onCompositionStart:w,onCompositionEnd:p}=e,b=ke(e,["prefixCls","inputPrefixCls","className","size","suffix","enterButton","addonAfter","loading","disabled","onSearch","onChange","onCompositionStart","onCompositionEnd"]),{getPrefixCls:j,direction:y}=s.useContext(X),k=s.useRef(!1),P=j("input-search",i),A=j("input",t),{compactSize:M}=ce(P,y),$=J(l=>{var o;return(o=u??M)!==null&&o!==void 0?o:l}),S=s.useRef(null),z=l=>{l&&l.target&&l.type==="click"&&d&&d(l.target.value,l,{source:"clear"}),_&&_(l)},O=l=>{var o;document.activeElement===((o=S.current)===null||o===void 0?void 0:o.input)&&l.preventDefault()},h=l=>{var o,a;d&&d((a=(o=S.current)===null||o===void 0?void 0:o.input)===null||a===void 0?void 0:a.value,l,{source:"input"})},T=l=>{k.current||x||h(l)},I=typeof m=="boolean"?s.createElement(be,null):null,N=`${P}-button`;let R;const E=m||{},V=E.type&&E.type.__ANT_BUTTON===!0;V||E.type==="button"?R=Z(E,Object.assign({onMouseDown:O,onClick:l=>{var o,a;(a=(o=E==null?void 0:E.props)===null||o===void 0?void 0:o.onClick)===null||a===void 0||a.call(o,l),h(l)},key:"enterButton"},V?{className:N,size:$}:{})):R=s.createElement(ue,{className:N,type:m?"primary":void 0,size:$,disabled:g,key:"enterButton",onMouseDown:O,onClick:h,loading:x,icon:I},m),C&&(R=[R,Z(C,{key:"addonAfter"})]);const K=q(P,{[`${P}-rtl`]:y==="rtl",[`${P}-${$}`]:!!$,[`${P}-with-button`]:!!m},n),Q=l=>{k.current=!0,w==null||w(l)},G=l=>{k.current=!1,p==null||p(l)};return s.createElement(U,Object.assign({ref:Y(S,r),onPressEnter:T},b,{size:$,onCompositionStart:Q,onCompositionEnd:G,prefixCls:A,addonAfter:R,suffix:v,onChange:z,className:K,disabled:g}))}),F=U;F.Group=ye;F.Search=Ae;F.TextArea=ge;F.Password=_e;F.OTP=Se;export{F as I};
