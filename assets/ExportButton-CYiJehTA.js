import{aq as u,aO as x,aQ as s,aS as E,au as g}from"./index-Vcj4IeAF.js";import{f as k}from"./file-download-DBg-_-Y-.js";import{D as h}from"./index-B4bb0pyT.js";function w({data:e,children:c,options:i}){const{message:l}=u.useApp(),{ti:t}=x(),m=n=>{var r,p;if(!(e!=null&&e.length))return l.error(t({en:"No data to export",vi:"Không có dữ liệu"}));const o=(p=(r=i.find(f=>f.key==n))==null?void 0:r.prepareData)==null?void 0:p.call(r,e);o!=null&&o.data&&(g("onClickExport:"+n+":"+o.fileName),k(o.data,o.fileName))},a=i.map(({key:n,label:o})=>({key:n,label:o}));return s.jsx(h,{menu:{items:a,onClick:n=>m(n.key)},children:c||s.jsx(E,{type:"primary",icon:s.jsx("i",{className:"fa-solid fa-download"}),children:t({en:"Export",vi:"Xuất"})+" "+((e==null?void 0:e.length)||0)})})}export{w as E};
