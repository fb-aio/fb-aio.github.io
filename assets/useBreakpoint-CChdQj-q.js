import{r as o,v as a}from"./index-BC_B-lGU.js";import{u as c}from"./useForceUpdate-C6SHkeCV.js";import{u as f}from"./index-BUExJboe.js";function b(){let s=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!0;const e=o.useRef({}),t=c(),r=f();return a(()=>{const n=r.subscribe(u=>{e.current=u,s&&t()});return()=>r.unsubscribe(n)},[]),e.current}export{b as u};
