import{aU as W,r as a,aX as t,b0 as F}from"./index-25lgxwTR.js";import{r as U,w as z}from"./window-CmvnYNWq.js";import{u as B,e as E,t as w,S as l,a6 as M,I as J,T as C}from"./MyApp-BCKP8LFO.js";import{S as K}from"./Screen-43_FQDaT.js";import{T as c}from"./index-CcoCtLua.js";import{D as O}from"./index-B6QjRA0B.js";import{R as X}from"./row-CvEPtL8s.js";import{I as _}from"./index-DlUcIAF1.js";import"./col-Dokdf0Ix.js";import"./TextArea-B5svcMVp.js";import"./Input-sds29n1a.js";import"./SearchOutlined-_TWJ6BuU.js";const Z=""+new URL("duck--6fNLnXb.png",import.meta.url).href,$=""+new URL("emoji-Dr6CgfhJ.png",import.meta.url).href,G=""+new URL("wheel-lFKZS5xZ.png",import.meta.url).href,Q=[{id:"Duck Race",url:"https://www.online-stopwatch.com/duck-race/",img:Z},{id:"Emoji Race",url:"https://www.online-stopwatch.com/emoji-race-timer/",img:$},{id:"Wheel Name Picker",url:"https://www.online-stopwatch.com/random-name-pickers/name-picker-wheel/",img:G}];function me(){const{ti:i}=W(),{message:u}=B(),[N,k]=a.useState(!1),[x,H]=a.useState(null),[s,d]=E("Duckrace.win",null),[r,f]=E("Duckrace.tags",[]),[m,j]=a.useState(!1),[h,R]=a.useState(""),[y,I]=a.useState(-1),[p,g]=a.useState(""),b=a.useRef(null),D=a.useRef(null);a.useEffect(()=>{if(s&&x){const e="Duckrace:processHack"+Date.now();u.loading({key:e,content:"Hacking...",duration:0}),U({win:s,fnPath:"window.eval",params:[ee(r)]}).then(()=>{u.success({key:e,content:"Hacked duckrace: "+(r!=null&&r.length?r:"random")})}).catch(n=>{u.error({key:e,content:"Hack duckrace failed: "+n.message})})}},[r,s,x]),a.useEffect(()=>{var e;m&&((e=b.current)==null||e.focus())},[m]),a.useEffect(()=>{var e;(e=D.current)==null||e.focus()},[p]),a.useEffect(()=>{if(!s)return;const e=setInterval(()=>{s&&s.closed&&d(null)},1e3);return()=>{clearInterval(e)}},[s]),a.useEffect(()=>{w("HackDuckRace:onLoad")},[]);const L=e=>{const n=r.filter(o=>o!==e);console.log(n),f(n)},V=()=>{j(!0)},q=e=>{R(e.target.value)},v=()=>{if(h){const e=h.split(",").map(n=>n.trim()).filter(n=>n.length>0&&!r.includes(n));e.length&&f([...r,...e])}j(!1),R("")},A=e=>{g(e.target.value)},S=()=>{const e=[...r];e[y]=p,f(e),I(-1),g("")},P=()=>t.jsxs(t.Fragment,{children:[t.jsxs(c.Text,{children:[i({en:"Enter result you want (name or number)",vi:"Nhập kết quả mong muốn (tên hoặc số thứ tự)"}),":"]}),t.jsxs(l,{size:0,children:[r.map((e,n)=>y===n?t.jsx(_,{ref:D,size:"small",style:T,value:p,onChange:A,onBlur:S,onPressEnter:S},e):t.jsx(C,{closable:!0,style:{userSelect:"none"},onClose:()=>L(e),children:t.jsx("span",{onDoubleClick:o=>{n!==0&&(I(n),g(e),o.preventDefault())},children:e})},e)),m?t.jsx(_,{ref:b,type:"text",size:"small",style:T,value:h,onChange:q,onBlur:v,onPressEnter:v}):t.jsx(C,{style:Y,icon:t.jsx("i",{className:"fa-solid fa-plus"}),onClick:V,children:i({en:"Add result",vi:"Thêm kết quả"})})]})]});return t.jsxs(K,{mode:"center",title:i({en:"Hack DuckRace",vi:"Hack DuckRace"}),children:[t.jsxs(c.Text,{children:[i({en:"Cheat the random of Duckrace result",vi:"Kết quả Duckrace nằm trong tay bạn"})," ",t.jsx(c.Link,{href:"https://www.facebook.com/groups/fbaio/posts/1582618815726134",target:"_blank",children:t.jsx("i",{className:"fa-solid fa-arrow-up-right-from-square"})})]}),s?t.jsxs(l,{direction:"vertical",align:"center",children:[P(),t.jsx(O,{}),t.jsx(F,{danger:!0,icon:t.jsx("i",{className:"fa-solid fa-close"}),iconPosition:"end",onClick:()=>{s.close(),d(null),w("HackDuckRace:closeDuckRace")},children:"Close duckrace"})]}):N?t.jsxs(l,{children:[t.jsx(c.Text,{children:i({en:"Openning Duckrace...",vi:"Đang mở Duckrace..."})}),t.jsx(M,{})]}):t.jsxs(t.Fragment,{children:[t.jsx(c.Text,{children:i({en:"Select game to start",vi:"Chọn trò bạn muốn chơi"})}),t.jsx(X,{align:"middle",justify:"center",children:Q.map(e=>t.jsxs(l,{direction:"vertical",align:"center",style:{margin:8},children:[t.jsxs("div",{className:"show-on-hover-trigger",style:{position:"relative"},children:[t.jsx(J,{src:e.img,onClick:async()=>{var o;s&&((o=s==null?void 0:s.close)==null||o.call(s)),k(!0);const n=window.open(e.url,"_blank");await z(n),H(e),d(n),k(!1),w("HackDuckRace:openDuckRace")},preview:!1,width:150,height:150,style:{borderRadius:10,cursor:"pointer"}},e.id),t.jsx("div",{className:"show-on-hover-item",style:{position:"absolute",top:0,left:0,right:0,bottom:0,background:"rgba(0, 0, 0, 0.5)",display:"flex",justifyContent:"center",alignItems:"center",pointerEvents:"none"},children:t.jsx("i",{className:"fa-solid fa-arrow-up-right-from-square "})})]}),t.jsx(c.Text,{children:e.id})]},e.id))})]})]})}const Y={height:22,borderStyle:"dashed"},T={width:64,height:22,marginInlineEnd:8,verticalAlign:"top"};function ee(i=[]){return"(() => {\n        let targets = ".concat(JSON.stringify(i),';\n\n        let wins = Array.from(document.querySelectorAll("iframe")).map(\n          (_) => _?.contentWindow\n        );\n\n        [window, ...wins]\n          .filter((_) => _)\n          .forEach((win) => {\n            if (win.location.href.includes(\'html5/random-name-pickers\') && win.Math.specialRandom) {\n              if(!win.fbaio_duckRace_specialRandom) win.fbaio_duckRace_specialRandom = win.Math.specialRandom;\n\n              win.Math.specialRandom = function () {\n                let result = win.fbaio_duckRace_specialRandom.apply(this, arguments);\n                if (win.holder_array?.length > 0) {\n                  for (let target of targets) {\n                    let found = win.holder_array.findIndex((i) => i == target);\n                    if (found >= 0) result = found;\n                  }\n                }\n                console.log("specialRandom", this, result);\n                return result;\n              };\n            } else {\n                if (!win.fbaio_duckRace_originalShuffle) {\n                    win.fbaio_duckRace_originalShuffle = win.Array.prototype.shuffle;\n                }\n                win.Array.prototype.shuffle = function () {\n                    const result = win.fbaio_duckRace_originalShuffle.apply(\n                    this,\n                    arguments\n                    );\n                    console.log(result, win);\n                    if (result?.[0]?.instance) {\n                    for (let target of targets) {\n                        let targetIndex = result.findIndex(\n                        (i) => i?.name === target || i?.number == target\n                        );\n                        if (targetIndex >= 0) {\n                        let temp = result[0];\n                        result[0] = result[targetIndex];\n                        result[targetIndex] = temp;\n                        break;\n                        }\n                    }\n                    }\n                    console.log("shuffle", this, result, result[0]);\n                    return result;\n                };\n            }\n          });\n      })();\n      ')}export{me as default};
