System.register(["./index-legacy-DTLe8kAD.js","./Collection-legacy-C6aZdUSr.js","./videos-legacy-CZwTzIeN.js","./MyApp-legacy-CJmYcBAR.js","./icons-legacy-z455ZJfA.js","./VideoWithMuted-legacy-BbwjzeBM.js","./index-legacy-BgGp0TOt.js","./index-legacy-Dd0Cggd7.js","./index-legacy-Dcn_hJ56.js","./index-legacy-Czdpd784.js","./file-download-legacy-CadI2MJ-.js","./react-hotkeys-hook.esm-legacy-Bwkg78PV.js","./index-legacy-BJ5d0egn.js","./index-legacy-DSwRxTjJ.js","./index-legacy-DViN5dLW.js","./index-legacy-D6I2sCN5.js","./Dropdown-legacy-DZVNfkVQ.js","./PurePanel-legacy-C-GnDDuo.js","./move-legacy-Bhelst4Q.js","./index-legacy-MRBPaTr5.js","./TextArea-legacy-DZro9fgy.js","./SearchOutlined-legacy-CpSkcKg3.js","./index-legacy-BIVGEDE3.js","./Pagination-legacy-BNB895Ft.js","./useBreakpoint-legacy-BG7XjNpS.js","./useForceUpdate-legacy-C_Sup0cT.js","./index-legacy-Be80bh0z.js","./List-legacy-CBX3Fru0.js","./DownOutlined-legacy-FTWfGM7s.js","./row-legacy-q5PRKH6C.js","./col-legacy-Cr-bP19i.js"],(function(e,i){"use strict";var t,n,l,s,a,o,r,c,d,g,u,y,j,h,m,x,p,v,f;return{setters:[e=>{t=e.aU,n=e.r,l=e.aO,s=e.aW,a=e.a_,o=e.b0},e=>{r=e.default},e=>{c=e.g},e=>{d=e.u,g=e.k,u=e.ai,y=e.h,j=e.a6,h=e.aj},e=>{m=e.i},e=>{x=e.V},e=>{p=e.T},e=>{v=e.A},e=>{f=e.L},null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],execute:function(){e("default",(function({target:e,postId:i}){const{ti:o}=t(),{message:I}=d(),[b,k]=g("PostMediaset."+i+".mediaset_token",null),[P,V]=n.useState(!1);n.useEffect((()=>{e?.id&&i&&!b&&(V(!0),u(e?.id,i).then((t=>{console.log(e,i,t);const n=l(t,"mediaset_token");if(!n)throw new Error("No mediaset token found");k(n)})).catch((e=>{I.error({content:o({en:"Fail to load post content ",vi:"Lỗi tải dữ liệu bài post "})+e.message})})).finally((()=>{V(!1)})))}),[i,e?.id,b]);const R=s.jsx(a,{href:y(i),target:"_blank",icon:s.jsx("i",{className:"fa-solid fa-arrow-up-right-from-square"}),children:o({en:"View post",vi:"Xem bài viết"})});return P?s.jsxs("div",{style:{textAlign:"center"},children:[s.jsx(j,{style:{marginRight:10}}),s.jsx(p.Text,{children:o({en:"Loading post content...",vi:"Đang tải nội dung bài viết..."})})]}):b?s.jsx(r,{collectionName:e?.name+" - Post media - "+i,fetchNext:async(i=[],t)=>{if(!e?.id||!b)return;const n=t||i[i.length-1]?.cursor;return await h(b,n)},renderItem:e=>s.jsxs(f.Item,{style:{position:"relative"},children:[s.jsx(w,{src:e.image,width:200/e.height*e.width,height:200,style:{objectFit:"cover",borderRadius:10},cacheId:"mediaset."+e.id,getPreview:async()=>e.isVideo?(await c(e.id)).source:e.image,renderPreview:e.isVideo?(e,i)=>({destroyOnClose:!0,imageRender:()=>s.jsx(j,{spinning:i,children:s.jsx(x,{src:e,style:{maxWidth:"90vw",maxHeight:"90vh"}})}),toolbarRender:()=>null}):void 0}),e.isVideo&&s.jsx("div",{style:{position:"absolute",top:10,right:10},children:m.IGVideo})]}),downloadItem:async e=>{if(e.isVideo){const i=await c(e.id);return{name:e.id+".mp4",url:i.source}}return{name:e.id+".jpg",url:e.image}},getItemCursor:e=>e.cursor,rowKey:e=>e.id,stop:!e?.id||!b||P,headerButtons:()=>R}):s.jsxs("div",{style:{textAlign:"center",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center"},children:[s.jsx(v,{type:"error",showIcon:!0,message:o({en:"This post not contain multiple medias",vi:"Bài viết này không chứa nhiều ảnh/video"}),style:{marginRight:10}}),R]})}));const w=n.lazy((()=>o((()=>i.import("./ImageLazyPreview-legacy-ChortRuw.js")),void 0,i.meta.url)))}}}));
