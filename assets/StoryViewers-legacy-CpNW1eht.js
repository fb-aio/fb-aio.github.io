System.register(["./index-legacy-DmD19Aid.js","./Collection-legacy-BAVWQsc9.js","./stories-legacy-DFNqkh6D.js","./MyApp-legacy-BJbLsob1.js","./row-legacy-apyBUmro.js","./index-legacy-BZc9fmdQ.js"],(function(e,t){"use strict";var i,s,r,n,a,c,l,d,o,y,u,g,f;return{setters:[e=>{i=e.b4,s=e.r,r=e.b6,n=e.bq},e=>{a=e.default,c=e.DisplayType},e=>{l=e.c},e=>{d=e.t,o=e.d,y=e.i,u=e.h},e=>{g=e.R},e=>{f=e.A}],execute:function(){e("S",(function({storyId:e,initialViewers:t=[]}){const{ti:j}=i();return s.useEffect((()=>{d("StoryViewers:onLoad")}),[]),r.jsx(a,{collectionName:"viewers of "+e,fetchNext:async(t=[],i)=>{const s=await l({storyId:e,cursor:i||t[t.length-1]?.cursor||""}),r=new Set(t.map((e=>e.uid)));return s.filter((e=>!r.has(e.uid)))},rowKey:e=>e.uid,renderItem:(e,t)=>r.jsxs(g,{align:"middle",justify:"space-between",style:{width:"100%"},children:[r.jsxs(o.Link,{href:y(e.uid),target:"_blank",style:{color:"#eee",padding:10},children:[(t||0)+1,".",r.jsx(f,{src:u(e.uid,50),style:{marginRight:10,marginLeft:10},size:40}),e.name," ",e.reactions]},e.uid),r.jsx(o.Text,{style:{},children:n(e.seen_time,j({en:"en-US",vi:"vi-VN"}))})]}),initialData:t,displayType:c.Vertical,centerItems:!1})}))}}}));
