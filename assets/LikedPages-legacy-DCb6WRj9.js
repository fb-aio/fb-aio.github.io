System.register(["./index-legacy-8-GCpkLg.js","./ExportButton-legacy-BtqUhywS.js","./Collection-legacy-CbpDYmn0.js","./pages-legacy-CJUM0Wrb.js","./WordStatisticButton-legacy-Ocpn4T_1.js","./MyApp-legacy-DxnVTjuu.js","./index-legacy-CY_HTRwG.js","./index-legacy-JicNWGnH.js","./index-legacy-sbIrn-s2.js","./index-legacy-Dyh6Me7-.js","./file-download-legacy-CgSzGb7r.js","./index-legacy-DYWOJ_rp.js","./Dropdown-legacy-DuJaTT2m.js","./PurePanel-legacy-CxYmJ__b.js","./move-legacy-Qi-AQm3Z.js","./index-legacy-ByZyruIP.js","./index-legacy-90wiH5ec.js","./index-legacy-DREc_bV6.js","./TextArea-legacy-yddu9c3w.js","./EyeOutlined-legacy-_k9CHjU5.js","./SearchOutlined-legacy-D0NA1mI6.js","./index-legacy-D8gnwppX.js","./Pagination-legacy-CdlSUAnm.js","./useBreakpoint-legacy-BRBG8lH0.js","./responsiveObserver-legacy-B3sML1O0.js","./index-legacy-CIVjvpVp.js","./DownOutlined-legacy-CRUzbBMV.js","./row-legacy-BiFp7Cmz.js","./BadgeWrapper-legacy-CcgOSEOV.js","./MyTable-legacy-DkDce7pi.js","./index-legacy-CqZRXk4y.js","./Table-legacy-f9VvH3NO.js","./addEventListener-legacy-ByYub5JQ.js","./index-legacy-BlGBGEV3.js","./index-legacy-B-QFyx4G.js"],(function(e,a){"use strict";var l,n,t,s,i,c,r,g,d,o,u,j,y,x;return{setters:[e=>{l=e.aK,n=e.aM,t=e.b3,s=e.bc},e=>{i=e.E},e=>{c=e.default},e=>{r=e.c},e=>{g=e.W},e=>{d=e.e,o=e.S},e=>{u=e.A},e=>{j=e.L},e=>{y=e.I},e=>{x=e.T},null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],execute:function(){e("default",(function({target:e}){const{ti:a}=l();return d("Pages.data",[]),n.jsx(c,{collectionName:e?.name+" - Liked Pages",fetchNext:async(a=[],l)=>{if(e?.id)return await r({uid:e.id,cursor:l||a[a.length-1]?.cursor})},renderItem:e=>n.jsx(j.Item,{children:n.jsxs(o,{direction:"vertical",style:{maxWidth:150},children:[n.jsx(y,{src:e.image,style:{width:150,height:150,objectFit:"contain",borderRadius:10}}),n.jsxs("span",{style:{margin:0},children:[n.jsxs(x.Text,{type:"secondary",children:[" ",e.id," "]}),n.jsx("br",{}),n.jsx(x.Link,{strong:!0,href:e.url,target:"_blank",children:e.name})]})]})}),getItemCursor:e=>e.cursor,rowKey:e=>e.id,showPagination:!0,all:!0,searchPlaceholder:e=>a({en:`Search in ${e.length} liked pages`,vi:`Tìm trong ${e.length} trang được thích`}),onSearch:(e,a)=>t(e,a.name+a.id),header:e=>{const l=e[0]?.total&&e[0]?.total!==e.length;return n.jsx(u,{type:"success",showIcon:!0,message:a({en:`Liked ${e.length} public pages`+(l?` (in total ${e[0]?.total} likes)`:""),vi:`Đã thích ${e.length} trang công khai`+(l?` (trong tổng ${e[0]?.total} lượt thích)`:"")})})},headerButtons:a=>n.jsxs(n.Fragment,{children:[n.jsx(i,{data:a,options:[{key:"uid",label:".txt (pages id)",prepareData:a=>({fileName:e?.name+"_liked_pages_id.txt",data:a.map((e=>e.id)).join("\n")})},{key:"id_name",label:".csv (page id+name)",prepareData:a=>({fileName:e?.name+"_liked_pages_id_name.csv",data:s(a.map((e=>({id:e.id,name:e.name}))))})},{key:"json",label:".json",prepareData:a=>({fileName:e?.name+"_liked_pages.json",data:JSON.stringify(a,null,4)})},{key:"csv",label:".csv",prepareData:a=>({fileName:e?.name+"_liked_pages.csv",data:s(a)})}]}),n.jsx(g,{name:"LikedPages",text:a.map((e=>e.name)).join(" ")})]})})}))}}}));
