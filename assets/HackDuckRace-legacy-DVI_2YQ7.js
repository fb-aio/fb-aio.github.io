System.register(["./index-legacy-DCRKCEcB.js","./window-legacy-D-fWCYOr.js","./MyApp-legacy-BQI0nYJo.js","./index-legacy-BejfsfhF.js","./index-legacy-sBANgr4S.js","./index-legacy-BBkkpQYz.js","./index-legacy-D0j_pZVB.js","./TextArea-legacy-DI2D5z2i.js","./EyeOutlined-legacy-B8nzFVcd.js","./addEventListener-legacy-BKBRMSN0.js","./SearchOutlined-legacy-CPXg4cBl.js"],(function(e,n){"use strict";var t,a,r,i,s,l,c,o,u,d,f,h,g,m,w,p;return{setters:[e=>{t=e.aK,a=e.r,r=e.aM,i=e.aQ},e=>{s=e.r,l=e.w},e=>{c=e.u,o=e.e,u=e.t,d=e.S,f=e.a3,h=e.T},e=>{g=e.T},e=>{m=e.D},e=>{w=e.I},e=>{p=e.I},null,null,null,null],execute:function(){e("default",(function(){const{ti:e}=t(),{message:n}=c(),[R,v]=a.useState(!1),[b,D]=a.useState(null),[_,S]=o("Duckrace.win",null),[E,I]=o("Duckrace.tags",[]),[C,N]=a.useState(!1),[T,H]=a.useState(""),[A,L]=a.useState(-1),[P,q]=a.useState(""),M=a.useRef(null),z=a.useRef(null);a.useEffect((()=>{if(_&&b){const e=new URL(b.url).origin,t="Duckrace:processHack"+Date.now();n.loading({key:t,content:"Hacking...",duration:0}),s({win:_,origin:e,fnPath:"window.eval",params:[y(E)]}).then((()=>{n.success({key:t,content:"Hacked duckrace: "+(E?.length?E:"random")})})).catch((e=>{n.error({key:t,content:"Hack duckrace failed: "+e.message})}))}}),[E,_,b]),a.useEffect((()=>{C&&M.current?.focus()}),[C]),a.useEffect((()=>{z.current?.focus()}),[P]),a.useEffect((()=>{if(!_)return;const e=setInterval((()=>{_&&_.closed&&S(null)}),1e3);return()=>{clearInterval(e)}}),[_]),a.useEffect((()=>{u("HackDuckRace:onLoad")}),[]);const O=()=>{N(!0)},U=e=>{H(e.target.value)},F=()=>{if(T){const e=T.split(",").map((e=>e.trim())).filter((e=>e.length>0&&!E.includes(e)));e.length&&I([...E,...e])}N(!1),H("")},K=e=>{q(e.target.value)},B=()=>{const e=[...E];e[A]=P,I(e),L(-1),q("")};return r.jsxs(d,{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",padding:10},direction:"vertical",children:[r.jsx(g.Title,{level:3,children:e({en:"Hack DuckRace",vi:"Hack DuckRace"})}),r.jsxs(g.Text,{children:[e({en:"Cheat the random of Duckrace result",vi:"Kết quả Duckrace nằm trong tay bạn"})," ",r.jsx(g.Link,{href:"https://www.facebook.com/groups/fbaio/posts/1582618815726134",target:"_blank",children:r.jsx("i",{className:"fa-solid fa-arrow-up-right-from-square"})})]}),_?r.jsxs(d,{direction:"vertical",align:"center",children:[r.jsxs(r.Fragment,{children:[r.jsxs(g.Text,{children:[e({en:"Enter result you want (name or number)",vi:"Nhập kết quả mong muốn (tên hoặc số thứ tự)"}),":"]}),r.jsxs(d,{size:0,children:[E.map(((e,n)=>A===n?r.jsx(p,{ref:z,size:"small",style:j,value:P,onChange:K,onBlur:B,onPressEnter:B},e):r.jsx(h,{closable:!0,style:{userSelect:"none"},onClose:()=>(e=>{const n=E.filter((n=>n!==e));console.log(n),I(n)})(e),children:r.jsx("span",{onDoubleClick:t=>{0!==n&&(L(n),q(e),t.preventDefault())},children:e})},e))),C?r.jsx(p,{ref:M,type:"text",size:"small",style:j,value:T,onChange:U,onBlur:F,onPressEnter:F}):r.jsx(h,{style:x,icon:r.jsx("i",{className:"fa-solid fa-plus"}),onClick:O,children:e({en:"Add result",vi:"Thêm kết quả"})})]})]}),r.jsx(m,{}),r.jsx(i,{danger:!0,icon:r.jsx("i",{className:"fa-solid fa-close"}),iconPosition:"end",onClick:()=>{_.close(),S(null),u("HackDuckRace:closeDuckRace")},children:"Close duckrace"})]}):R?r.jsxs(d,{children:[r.jsx(g.Text,{children:e({en:"Openning Duckrace...",vi:"Đang mở Duckrace..."})}),r.jsx(f,{})]}):r.jsxs(r.Fragment,{children:[r.jsx(g.Text,{children:e({en:"Select game to start",vi:"Chọn trò bạn muốn chơi"})}),r.jsx(d,{direction:"horizontal",children:k.map((e=>r.jsxs(d,{direction:"vertical",align:"center",children:[r.jsxs("div",{className:"show-on-hover-trigger",style:{position:"relative"},children:[r.jsx(w,{src:e.img,onClick:async()=>{_&&_?.close?.(),v(!0);const n=window.open(e.url,"_blank");await l(n),D(e),S(n),v(!1),u("HackDuckRace:openDuckRace")},preview:!1,width:150,height:150,style:{borderRadius:10,cursor:"pointer"}},e.id),r.jsx("div",{className:"show-on-hover-item",style:{position:"absolute",top:0,left:0,right:0,bottom:0,background:"rgba(0, 0, 0, 0.5)",display:"flex",justifyContent:"center",alignItems:"center",pointerEvents:"none"},children:r.jsx("i",{className:"fa-solid fa-arrow-up-right-from-square "})})]}),r.jsx(g.Text,{children:e.id})]})))})]})]})}));const k=[{id:"Duck Race",url:"https://www.online-stopwatch.com/duck-race/",img:""+new URL("duck--6fNLnXb.png",n.meta.url).href},{id:"Emoji Race",url:"https://www.online-stopwatch.com/emoji-race-timer/",img:""+new URL("emoji-Dr6CgfhJ.png",n.meta.url).href},{id:"Wheel Name Picker",url:"https://www.online-stopwatch.com/random-name-pickers/name-picker-wheel/",img:""+new URL("wheel-lFKZS5xZ.png",n.meta.url).href}],x={height:22,borderStyle:"dashed"},j={width:64,height:22,marginInlineEnd:8,verticalAlign:"top"};function y(e=[]){return`(() => {\n        let targets = ${JSON.stringify(e)};\n\n        let wins = Array.from(document.querySelectorAll("iframe")).map(\n          (_) => _?.contentWindow\n        );\n\n        [window, ...wins]\n          .filter((_) => _)\n          .forEach((win) => {\n            if (win.location.href.includes('random-name-pickers') && !win.fbaio_duckRace_specialRandom && win.Math.specialRandom) {\n              win.fbaio_duckRace_specialRandom = win.Math.specialRandom;\n\n              win.Math.specialRandom = function () {\n                let result = win.fbaio_duckRace_specialRandom.apply(this, arguments);\n                if (win.holder_array?.length > 0) {\n                  for (let target of targets) {\n                    let found = win.holder_array.findIndex((i) => i == target);\n                    if (found >= 0) result = found;\n                  }\n                }\n                console.log("specialRandom", this, result);\n                return result;\n              };\n            }\n\n            if (!win.fbaio_duckRace_originalShuffle) {\n              win.fbaio_duckRace_originalShuffle = win.Array.prototype.shuffle;\n              win.Array.prototype.shuffle = function () {\n                const result = win.fbaio_duckRace_originalShuffle.apply(\n                  this,\n                  arguments\n                );\n                console.log(result, win);\n                if (result?.[0]?.instance) {\n                  for (let target of targets) {\n                    let targetIndex = result.findIndex(\n                      (i) => i?.name === target || i?.number == target\n                    );\n                    if (targetIndex >= 0) {\n                      let temp = result[0];\n                      result[0] = result[targetIndex];\n                      result[targetIndex] = temp;\n                      break;\n                    }\n                  }\n                }\n                console.log("shuffle", this, result, result[0]);\n                return result;\n              };\n            }\n          });\n      })();\n      `}}}}));
