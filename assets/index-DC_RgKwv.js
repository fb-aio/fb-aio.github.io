import{r as n,n as U,j as Y,o as N,X as G,g as ee,d as T,E as re,F as ae,H as M,a1 as te,D as H,$ as ne,I as q,aK as le,aJ as oe,a7 as W,bB as se,bl as ie,Z as ce,h as F}from"./index-DfeJS4yj.js";import{k as de}from"./MyApp-DRTJ3-RF.js";var ue=["prefixCls","className","style","checked","disabled","defaultChecked","type","title","onChange"],be=n.forwardRef(function(e,r){var a=e.prefixCls,t=a===void 0?"rc-checkbox":a,i=e.className,I=e.style,m=e.checked,h=e.disabled,S=e.defaultChecked,C=S===void 0?!1:S,u=e.type,x=u===void 0?"checkbox":u,j=e.title,s=e.onChange,O=U(e,ue),v=n.useRef(null),b=n.useRef(null),l=de(C,{value:m}),w=Y(l,2),P=w[0],y=w[1];n.useImperativeHandle(r,function(){return{focus:function(d){var p;(p=v.current)===null||p===void 0||p.focus(d)},blur:function(){var d;(d=v.current)===null||d===void 0||d.blur()},input:v.current,nativeElement:b.current}});var f=N(t,i,G(G({},"".concat(t,"-checked"),P),"".concat(t,"-disabled"),h)),c=function(d){h||("checked"in e||y(d.target.checked),s==null||s({target:T(T({},e),{},{type:x,checked:d.target.checked}),stopPropagation:function(){d.stopPropagation()},preventDefault:function(){d.preventDefault()},nativeEvent:d.nativeEvent}))};return n.createElement("span",{className:f,title:j,style:I,ref:b},n.createElement("input",ee({},O,{className:"".concat(t,"-input"),ref:v,onChange:c,disabled:h,checked:!!P,type:x})),n.createElement("span",{className:"".concat(t,"-inner")}))});const fe=e=>{const{checkboxCls:r}=e,a=`${r}-wrapper`;return[{[`${r}-group`]:Object.assign(Object.assign({},M(e)),{display:"inline-flex",flexWrap:"wrap",columnGap:e.marginXS,[`> ${e.antCls}-row`]:{flex:1}}),[a]:Object.assign(Object.assign({},M(e)),{display:"inline-flex",alignItems:"baseline",cursor:"pointer","&:after":{display:"inline-block",width:0,overflow:"hidden",content:"'\\a0'"},[`& + ${a}`]:{marginInlineStart:0},[`&${a}-in-form-item`]:{'input[type="checkbox"]':{width:14,height:14}}}),[r]:Object.assign(Object.assign({},M(e)),{position:"relative",whiteSpace:"nowrap",lineHeight:1,cursor:"pointer",borderRadius:e.borderRadiusSM,alignSelf:"center",[`${r}-input`]:{position:"absolute",inset:0,zIndex:1,cursor:"pointer",opacity:0,margin:0,[`&:focus-visible + ${r}-inner`]:Object.assign({},te(e))},[`${r}-inner`]:{boxSizing:"border-box",display:"block",width:e.checkboxSize,height:e.checkboxSize,direction:"ltr",backgroundColor:e.colorBgContainer,border:`${H(e.lineWidth)} ${e.lineType} ${e.colorBorder}`,borderRadius:e.borderRadiusSM,borderCollapse:"separate",transition:`all ${e.motionDurationSlow}`,"&:after":{boxSizing:"border-box",position:"absolute",top:"50%",insetInlineStart:"25%",display:"table",width:e.calc(e.checkboxSize).div(14).mul(5).equal(),height:e.calc(e.checkboxSize).div(14).mul(8).equal(),border:`${H(e.lineWidthBold)} solid ${e.colorWhite}`,borderTop:0,borderInlineStart:0,transform:"rotate(45deg) scale(0) translate(-50%,-50%)",opacity:0,content:'""',transition:`all ${e.motionDurationFast} ${e.motionEaseInBack}, opacity ${e.motionDurationFast}`}},"& + span":{paddingInlineStart:e.paddingXS,paddingInlineEnd:e.paddingXS}})},{[`
        ${a}:not(${a}-disabled),
        ${r}:not(${r}-disabled)
      `]:{[`&:hover ${r}-inner`]:{borderColor:e.colorPrimary}},[`${a}:not(${a}-disabled)`]:{[`&:hover ${r}-checked:not(${r}-disabled) ${r}-inner`]:{backgroundColor:e.colorPrimaryHover,borderColor:"transparent"},[`&:hover ${r}-checked:not(${r}-disabled):after`]:{borderColor:e.colorPrimaryHover}}},{[`${r}-checked`]:{[`${r}-inner`]:{backgroundColor:e.colorPrimary,borderColor:e.colorPrimary,"&:after":{opacity:1,transform:"rotate(45deg) scale(1) translate(-50%,-50%)",transition:`all ${e.motionDurationMid} ${e.motionEaseOutBack} ${e.motionDurationFast}`}}},[`
        ${a}-checked:not(${a}-disabled),
        ${r}-checked:not(${r}-disabled)
      `]:{[`&:hover ${r}-inner`]:{backgroundColor:e.colorPrimaryHover,borderColor:"transparent"}}},{[r]:{"&-indeterminate":{[`${r}-inner`]:{backgroundColor:e.colorBgContainer,borderColor:e.colorBorder,"&:after":{top:"50%",insetInlineStart:"50%",width:e.calc(e.fontSizeLG).div(2).equal(),height:e.calc(e.fontSizeLG).div(2).equal(),backgroundColor:e.colorPrimary,border:0,transform:"translate(-50%, -50%) scale(1)",opacity:1,content:'""'}}}}},{[`${a}-disabled`]:{cursor:"not-allowed"},[`${r}-disabled`]:{[`&, ${r}-input`]:{cursor:"not-allowed",pointerEvents:"none"},[`${r}-inner`]:{background:e.colorBgContainerDisabled,borderColor:e.colorBorder,"&:after":{borderColor:e.colorTextDisabled}},"&:after":{display:"none"},"& + span":{color:e.colorTextDisabled},[`&${r}-indeterminate ${r}-inner::after`]:{background:e.colorTextDisabled}}}]};function pe(e,r){const a=ae(r,{checkboxCls:`.${e}`,checkboxSize:r.controlInteractiveSize});return[fe(a)]}const A=re("Checkbox",(e,r)=>{let{prefixCls:a}=r;return[pe(a,e)]}),L=ne.createContext(null);var he=function(e,r){var a={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(a[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,t=Object.getOwnPropertySymbols(e);i<t.length;i++)r.indexOf(t[i])<0&&Object.prototype.propertyIsEnumerable.call(e,t[i])&&(a[t[i]]=e[t[i]]);return a};const ve=(e,r)=>{var a;const{prefixCls:t,className:i,rootClassName:I,children:m,indeterminate:h=!1,style:S,onMouseEnter:C,onMouseLeave:u,skipGroup:x=!1,disabled:j}=e,s=he(e,["prefixCls","className","rootClassName","children","indeterminate","style","onMouseEnter","onMouseLeave","skipGroup","disabled"]),{getPrefixCls:O,direction:v,checkbox:b}=n.useContext(q),l=n.useContext(L),{isFormItemInput:w}=n.useContext(le),P=n.useContext(oe),y=(a=(l==null?void 0:l.disabled)||j)!==null&&a!==void 0?a:P,f=n.useRef(s.value);n.useEffect(()=>{l==null||l.registerValue(s.value)},[]),n.useEffect(()=>{if(!x)return s.value!==f.current&&(l==null||l.cancelValue(f.current),l==null||l.registerValue(s.value),f.current=s.value),()=>l==null?void 0:l.cancelValue(s.value)},[s.value]);const c=O("checkbox",t),g=W(c),[d,p,V]=A(c,g),$=Object.assign({},s);l&&!x&&($.onChange=function(){s.onChange&&s.onChange.apply(s,arguments),l.toggleOption&&l.toggleOption({label:m,value:s.value})},$.name=l.name,$.checked=l.value.includes(s.value));const k=N(`${c}-wrapper`,{[`${c}-rtl`]:v==="rtl",[`${c}-wrapper-checked`]:$.checked,[`${c}-wrapper-disabled`]:y,[`${c}-wrapper-in-form-item`]:w},b==null?void 0:b.className,i,I,V,g,p),R=N({[`${c}-indeterminate`]:h},se,p),D=h?"mixed":void 0;return d(n.createElement(ie,{component:"Checkbox",disabled:y},n.createElement("label",{className:k,style:Object.assign(Object.assign({},b==null?void 0:b.style),S),onMouseEnter:C,onMouseLeave:u},n.createElement(be,Object.assign({"aria-checked":D},$,{prefixCls:c,className:R,disabled:y,ref:r})),m!==void 0&&n.createElement("span",null,m))))},X=n.forwardRef(ve);var ge=function(e,r){var a={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(a[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,t=Object.getOwnPropertySymbols(e);i<t.length;i++)r.indexOf(t[i])<0&&Object.prototype.propertyIsEnumerable.call(e,t[i])&&(a[t[i]]=e[t[i]]);return a};const me=n.forwardRef((e,r)=>{const{defaultValue:a,children:t,options:i=[],prefixCls:I,className:m,rootClassName:h,style:S,onChange:C}=e,u=ge(e,["defaultValue","children","options","prefixCls","className","rootClassName","style","onChange"]),{getPrefixCls:x,direction:j}=n.useContext(q),[s,O]=n.useState(u.value||a||[]),[v,b]=n.useState([]);n.useEffect(()=>{"value"in u&&O(u.value||[])},[u.value]);const l=n.useMemo(()=>i.map(o=>typeof o=="string"||typeof o=="number"?{label:o,value:o}:o),[i]),w=o=>{b(E=>E.filter(_=>_!==o))},P=o=>{b(E=>[].concat(F(E),[o]))},y=o=>{const E=s.indexOf(o.value),_=F(s);E===-1?_.push(o.value):_.splice(E,1),"value"in u||O(_),C==null||C(_.filter(z=>v.includes(z)).sort((z,J)=>{const Z=l.findIndex(B=>B.value===z),Q=l.findIndex(B=>B.value===J);return Z-Q}))},f=x("checkbox",I),c=`${f}-group`,g=W(f),[d,p,V]=A(f,g),$=ce(u,["value","disabled"]),k=i.length?l.map(o=>n.createElement(X,{prefixCls:f,key:o.value.toString(),disabled:"disabled"in o?o.disabled:u.disabled,value:o.value,checked:s.includes(o.value),onChange:o.onChange,className:`${c}-item`,style:o.style,title:o.title,id:o.id,required:o.required},o.label)):t,R={toggleOption:y,value:s,disabled:u.disabled,name:u.name,registerValue:P,cancelValue:w},D=N(c,{[`${c}-rtl`]:j==="rtl"},m,h,V,g,p);return d(n.createElement("div",Object.assign({className:D,style:S},$,{ref:r}),n.createElement(L.Provider,{value:R},k)))}),K=X;K.Group=me;K.__ANT_CHECKBOX=!0;export{K as C,be as a,pe as g};
