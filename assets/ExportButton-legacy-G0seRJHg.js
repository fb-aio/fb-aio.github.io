System.register(["./index-legacy-Dki3Arq9.js","./file-download-legacy-CmWeckSf.js","./MyApp-legacy-DG2biexT.js","./index-legacy-BjuIenAA.js"],(function(e,t){"use strict";var n,i,a,l,o,c,r;return{setters:[e=>{n=e.ax,i=e.aK,a=e.aM,l=e.aQ},e=>{o=e.f},e=>{c=e.t},e=>{r=e.D}],execute:function(){e("E",(function({data:e,children:t,options:s,title:d={en:"Export",vi:"Xuất"}}){const{message:p}=n.useApp(),{ti:f}=i(),u=s.map((({key:e,label:t})=>({key:e,label:t})));return a.jsx(r,{menu:{items:u,onClick:t=>(t=>{if(!e?.length)return p.error(f({en:"No data to export",vi:"Không có dữ liệu"}));const n=s.find((e=>e.key==t));if("function"==typeof n?.onClick)c("onClickExport:"+t+"onClick"),n?.onClick(e);else{const i=n?.prepareData?.(e);i?.data&&(c("onClickExport:"+t+":"+i.fileName),o(i.data,i.fileName))}})(t.key)},children:t||a.jsx(l,{type:"primary",icon:a.jsx("i",{className:"fa-solid fa-download"}),children:f(d)+" "+(e?.length||0)})})}))}}}));
