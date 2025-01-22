System.register(["./index-legacy-Lkr9bBsN.js","./responsiveObserver-legacy-BxgPoWeZ.js"],(function(e,t){"use strict";var n,r,s,i,o,l,a,c;return{setters:[e=>{n=e.r,r=e.E,s=e.F,i=e.D,o=e.I,l=e.o},e=>{a=e.u,c=e.r}],execute:function(){const t=e("a",n.createContext({})),f=e=>{const{componentCls:t}=e;return{[t]:{position:"relative",maxWidth:"100%",minHeight:1}}},u=(e,t)=>((e,t)=>{const{prefixCls:n,componentCls:r,gridColumns:s}=e,i={};for(let o=s;o>=0;o--)0===o?(i[`${r}${t}-${o}`]={display:"none"},i[`${r}-push-${o}`]={insetInlineStart:"auto"},i[`${r}-pull-${o}`]={insetInlineEnd:"auto"},i[`${r}${t}-push-${o}`]={insetInlineStart:"auto"},i[`${r}${t}-pull-${o}`]={insetInlineEnd:"auto"},i[`${r}${t}-offset-${o}`]={marginInlineStart:0},i[`${r}${t}-order-${o}`]={order:0}):(i[`${r}${t}-${o}`]=[{"--ant-display":"block",display:"block"},{display:"var(--ant-display)",flex:`0 0 ${o/s*100}%`,maxWidth:o/s*100+"%"}],i[`${r}${t}-push-${o}`]={insetInlineStart:o/s*100+"%"},i[`${r}${t}-pull-${o}`]={insetInlineEnd:o/s*100+"%"},i[`${r}${t}-offset-${o}`]={marginInlineStart:o/s*100+"%"},i[`${r}${t}-order-${o}`]={order:o});return i[`${r}${t}-flex`]={flex:`var(--${n}${t}-flex)`},i})(e,t),p=r("Grid",(e=>{const{componentCls:t}=e;return{[t]:{display:"flex",flexFlow:"row wrap",minWidth:0,"&::before, &::after":{display:"flex"},"&-no-wrap":{flexWrap:"nowrap"},"&-start":{justifyContent:"flex-start"},"&-center":{justifyContent:"center"},"&-end":{justifyContent:"flex-end"},"&-space-between":{justifyContent:"space-between"},"&-space-around":{justifyContent:"space-around"},"&-space-evenly":{justifyContent:"space-evenly"},"&-top":{alignItems:"flex-start"},"&-middle":{alignItems:"center"},"&-bottom":{alignItems:"flex-end"}}}}),(()=>({})));function d(e,t){const[r,s]=n.useState("string"==typeof e?e:"");return n.useEffect((()=>{(()=>{if("string"==typeof e&&s(e),"object"==typeof e)for(let n=0;n<c.length;n++){const r=c[n];if(!t[r])continue;const i=e[r];if(void 0!==i)return void s(i)}})()}),[JSON.stringify(e),t]),r}e("u",r("Grid",(e=>{const t=s(e,{gridColumns:24}),n={"-sm":t.screenSMMin,"-md":t.screenMDMin,"-lg":t.screenLGMin,"-xl":t.screenXLMin,"-xxl":t.screenXXLMin};return[f(t),u(t,""),u(t,"-xs"),Object.keys(n).map((e=>((e,t,n)=>({[`@media (min-width: ${i(t)})`]:Object.assign({},u(e,n))}))(t,n[e],e))).reduce(((e,t)=>Object.assign(Object.assign({},e),t)),{})]}),(()=>({})))),e("R",n.forwardRef(((e,r)=>{const{prefixCls:s,justify:i,align:f,className:u,style:y,children:$,gutter:g=0,wrap:m}=e,x=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var s=0;for(r=Object.getOwnPropertySymbols(e);s<r.length;s++)t.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(e,r[s])&&(n[r[s]]=e[r[s]])}return n}(e,["prefixCls","justify","align","className","style","children","gutter","wrap"]),{getPrefixCls:b,direction:j}=n.useContext(o),[v,w]=n.useState({xs:!0,sm:!0,md:!0,lg:!0,xl:!0,xxl:!0}),[O,C]=n.useState({xs:!1,sm:!1,md:!1,lg:!1,xl:!1,xxl:!1}),h=d(f,O),I=d(i,O),S=n.useRef(g),E=a();n.useEffect((()=>{const e=E.subscribe((e=>{C(e);const t=S.current||0;(!Array.isArray(t)&&"object"==typeof t||Array.isArray(t)&&("object"==typeof t[0]||"object"==typeof t[1]))&&w(e)}));return()=>E.unsubscribe(e)}),[]);const M=b("row",s),[A,P,k]=p(M),G=(()=>{const e=[void 0,void 0];return(Array.isArray(g)?g:[g,void 0]).forEach(((t,n)=>{if("object"==typeof t)for(let r=0;r<c.length;r++){const s=c[r];if(v[s]&&void 0!==t[s]){e[n]=t[s];break}}else e[n]=t})),e})(),L=l(M,{[`${M}-no-wrap`]:!1===m,[`${M}-${I}`]:I,[`${M}-${h}`]:h,[`${M}-rtl`]:"rtl"===j},u,P,k),N={},R=null!=G[0]&&G[0]>0?G[0]/-2:void 0;R&&(N.marginLeft=R,N.marginRight=R);const[W,X]=G;N.rowGap=X;const D=n.useMemo((()=>({gutter:[W,X],wrap:m})),[W,X,m]);return A(n.createElement(t.Provider,{value:D},n.createElement("div",Object.assign({},x,{className:L,style:Object.assign(Object.assign({},N),y),ref:r}),$)))})))}}}));
