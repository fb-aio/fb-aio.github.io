import{t as n}from"./CsciPe7n.js";function r(r,t){return r&&"run"in r?async function(i,o){const u=n(i,{file:o,...t});await r.run(u,o)}:function(i,o){return n(i,{file:o,...r||t})}}export{r};
