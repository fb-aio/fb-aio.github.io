import{r}from"./index-CiUWOVnT.js";const e={};function u(t,s){const[o,n]=r.useState(()=>(e[t]===void 0&&(e[t]=s),e[t]));return r.useEffect(()=>{e[t]=o},[o]),r.useEffect(()=>{n(e[t]!==void 0?e[t]:s)},[t]),[o,n]}function a(t,s){return e[t]!==void 0?e[t]:s}function f(t,s){const o=e[t];return e[t]=s,{oldValue:o,newValue:s}}export{a as g,f as s,u};