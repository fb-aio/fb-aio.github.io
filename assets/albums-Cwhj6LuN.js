import{at as C}from"./index-C9a7kOyS.js";import{o as x,p as k,z as w}from"./MyApp-eLgOszab.js";async function Q({uid:s="",cursor:p=""}){var l,n,c,d,u,b,f,_,h,y;const r=[],m=await x({fb_api_req_friendly_name:"ProfileCometAppCollectionAlbumsRendererPaginationQuery",variables:{cursor:p,count:8,scale:2,id:btoa(`app_collection:${s}:2305272732:6`)},doc_id:"8672545689426653"}),e=k(m),{edges:o=[],page_info:i={}}=((n=(l=e==null?void 0:e.data)==null?void 0:l.node)==null?void 0:n.pageItems)||{};for(const t of o){const v=atob((c=t==null?void 0:t.node)==null?void 0:c.id).split(":").pop()||"";r.push({id:v,type:"album",name:(u=(d=t==null?void 0:t.node)==null?void 0:d.title)==null?void 0:u.text,count:parseInt((f=(b=t==null?void 0:t.node)==null?void 0:b.subtitle_text)==null?void 0:f.text)||0,link:(_=t==null?void 0:t.node)==null?void 0:_.url,picture:(y=(h=t==null?void 0:t.node)==null?void 0:h.image)==null?void 0:y.uri,cursor:t==null?void 0:t.cursor,recent:r.length})}return{albums:r,nextCursor:i==null?void 0:i.end_cursor}}async function q({groupId:s="",cursor:p=""}){var l,n,c,d,u,b,f,_,h,y,t,v,A,$;const r=[],m=await x({fb_api_req_friendly_name:"GroupsCometMediaAlbumsTabGridQuery",variables:{cursor:p,count:8,scale:2,id:s},doc_id:"6894403247286675"}),e=k(m),{edges:o=[],page_info:i={}}=((n=(l=e==null?void 0:e.data)==null?void 0:l.node)==null?void 0:n.group_albums)||{};for(const a of o){const E=(c=a==null?void 0:a.node)==null?void 0:c.id;r.push({id:E,type:"album",name:(u=(d=a==null?void 0:a.node)==null?void 0:d.title)==null?void 0:u.text,count:(((f=(b=a==null?void 0:a.node)==null?void 0:b.photos)==null?void 0:f.count)||0)+(((h=(_=a==null?void 0:a.node)==null?void 0:_.video)==null?void 0:h.count)||0),link:(y=a==null?void 0:a.node)==null?void 0:y.url,picture:($=(A=(v=(t=a==null?void 0:a.node)==null?void 0:t.album_cover_focused_image)==null?void 0:v.image)==null?void 0:A.image)==null?void 0:$.uri,cursor:a==null?void 0:a.cursor,recent:r.length})}return{albums:r,nextCursor:i==null?void 0:i.end_cursor}}async function M({id:s="",fromId:p="",accessToken:r=""}){var i,l,n,c,d;const m=[],e=await C(`https://graph.facebook.com/v14.0/${s}?fields=albums.limit(100)${p?`.after(${btoa(p)})`:""}{type,name,count,link,picture{url}}&access_token=${r}`);w(e);const o=k(e);if((l=(i=o.albums)==null?void 0:i.data)!=null&&l.length)for(const u of o.albums.data)m.push({id:u.id,type:u.type,name:u.name,count:u.count,link:u.link,picture:u.picture.data.url,recent:m.length});return{albums:m,nextCursor:(d=(c=(n=o.albums)==null?void 0:n.paging)==null?void 0:c.cursors)==null?void 0:d.after}}var G=(s=>(s.IMAGE="image",s.VIDEO="video",s))(G||{});async function R({albumId:s,accessToken:p="",fromId:r=""}){var i,l;let m=`https://graph.facebook.com/v14.0/${s}/photos?fields=largest_image&limit=100&access_token=${p}`;r&&(m+=`&after=${btoa(r)}`);let e=await C(m);w(e);let o=k(e);if((i=o==null?void 0:o.data)!=null&&i.length)return((l=o==null?void 0:o.data)==null?void 0:l.map(n=>({id:n.id,uri:n.largest_image.source,type:"image"})))||[];e=await x({doc_id:"8142948395762884",variables:{id:s,cursor:r?btoa("fbid:"+r):"",count:14,renderLocation:"permalink",scale:2}}),o=k(e);try{return o.data.node.media.edges.map(c=>({id:c.node.id,uri:c.node.image.uri,type:c.node.__typename==="Video"?"video":"image"}))}catch(n){return console.error(n),[]}}export{G as M,q as a,Q as b,R as c,M as g};
