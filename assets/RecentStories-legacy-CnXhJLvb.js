System.register(["./index-legacy-DmD19Aid.js","./Collection-legacy-BAVWQsc9.js","./RecentStoryViewer-legacy-CfVWe805.js","./MyApp-legacy-BJbLsob1.js","./stories-legacy-DFNqkh6D.js","./BadgeWrapper-legacy-B5e-UThp.js","./index-legacy-BZmWL7y2.js","./index-legacy-DPBaS3h2.js","./index-legacy-CvqRES_3.js","./index-legacy-BZc9fmdQ.js","./index-legacy-DPg2CUMR.js","./file-download-legacy-DSev46T7.js","./react-hotkeys-hook.esm-legacy-DbePOJgt.js","./index-legacy-D1fMnGF4.js","./index-legacy--HLK0E8V.js","./index-legacy-B-w8Oe-x.js","./PurePanel-legacy-RuolIxRp.js","./move-legacy-CuAq0P0j.js","./index-legacy-CFyIWi0t.js","./SearchOutlined-legacy-CsuuitbD.js","./index-legacy-B81GI0Xv.js","./Pagination-legacy-Ce7JZ3_r.js","./useBreakpoint-legacy-CFfMZR2S.js","./useForceUpdate-legacy-BPcPPEhm.js","./responsiveObserver-legacy-BCCgsqjX.js","./index-legacy-Cnn3ku5U.js","./List-legacy-CfttBbwf.js","./DownOutlined-legacy-CjjfugjU.js","./row-legacy-apyBUmro.js","./col-legacy-N3ivxPSw.js","./StoryViewers-legacy-CpNW1eht.js","./VideoWithMuted-legacy-qSIO0c2d.js"],(function(e,l){"use strict";var n,s,t,a,o,i,r,c,d,y,u,j,g,x,m,h,b,w,p,f,k,v,F,S;return{setters:[e=>{n=e.b4,s=e.br,t=e.r,a=e.b6,o=e.b3,i=e.bs,r=e.ba,c=e.cH,d=e.bA},e=>{y=e.default},e=>{u=e.default},e=>{j=e.t,g=e.T,x=e.B,m=e.I,h=e.S,b=e.d},e=>{w=e.b,p=e.a},e=>{f=e.B},e=>{k=e.A},e=>{v=e.L},e=>{F=e.P},e=>{S=e.A},null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],execute:function(){e("default",(function(){const{ti:e}=n(),l=s();return t.useEffect((()=>{j("RecentStories:onLoad")}),[]),a.jsx(y,{collectionName:"Recent Stories "+o(),fetchNext:async(e,l)=>await w(l||e?.[e.length-1]?.cursor||""),renderItem:(n,s)=>a.jsx(v.Item,{children:a.jsxs(x.Ribbon,{text:n.stories.length,style:{opacity:n.stories.length>1?1:0},children:[a.jsx(m,{src:n.thumbnail,style:{width:160,height:270,borderRadius:10,objectFit:"cover"},preview:{destroyOnClose:!0,toolbarRender:()=>null,imageRender:()=>a.jsx(u,{story:n})}}),a.jsx("div",{style:{position:"absolute",top:10,left:10},children:a.jsxs(F,{title:n.seen?a.jsxs(a.Fragment,{children:[a.jsx("i",{className:"fa-solid fa-eye"})," ",n.owner.name," ",e({en:" KNOW you saw",vi:" BIẾT bạn đã xem"})]}):n.owner.name,content:a.jsxs(h.Compact,{children:[a.jsx(g,{title:e({en:"Bulk downloader",vi:"Tải hàng loạt"}),placement:"bottom",children:a.jsx(r,{icon:a.jsx("i",{className:"fa-solid fa-download"}),onClick:()=>{return e=n.owner.id,void l("/bulk-downloader",{state:{targetId:e,platform:d.Facebook}});var e}})}),a.jsx(g,{title:e({en:"Open Facebook",vi:"Mở Facebook"}),placement:"bottom",children:a.jsx(r,{icon:a.jsx("i",{className:"fa-solid fa-external-link"}),onClick:()=>{window.open("https://fb.com/"+n.owner.id)}})})]}),children:[a.jsx(S,{src:n.owner.avatar,size:40,style:{borderWidth:4,borderColor:"#0866FF"}}),n.seen?a.jsx("i",{className:"fa-solid fa-eye fa-lg",style:{position:"absolute",bottom:0,right:0}}):null]})}),a.jsx("div",{style:{background:"linear-gradient(0deg, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0) 100%)",position:"absolute",bottom:0,left:0,padding:"5px 10px",width:"100%",paddingTop:"50px",pointerEvents:"none"},children:a.jsx(b.Text,{style:{color:"#eee"},children:n.owner.name})})]})}),downloadItem:async e=>(await p(e.bucket_id)).map(((l,n)=>({name:c(e.owner.name)+(l.video?".mp4":".jpg"),url:l.video||l.image||l.thumbnail}))),getItemCursor:e=>e?.cursor,rowKey:e=>e.bucket_id,all:!0,onSearch:(e,l)=>i(e,l.owner.name),header:()=>a.jsx(k,{type:"info",message:a.jsxs(a.Fragment,{children:[a.jsx("i",{className:"fa fa-eye-slash",style:{color:"gray"}})," ",e({en:"View stories anonymously - Friends won't know you've viewed their stories",vi:"Xem tin ẩn danh - Bạn bè sẽ không biết bạn đã xem tin của họ"})]})}),headerButtons:()=>a.jsx(a.Fragment,{children:a.jsx(f,{type:"new",children:a.jsx(g,{title:a.jsxs(a.Fragment,{children:[a.jsx("i",{className:"fa fa-history"})," ",e({en:"Undo your reactions on Facebook story",vi:"Thu hồi cảm xúc đã thả trên Facebook story"})]}),children:a.jsx(r,{icon:a.jsx("i",{className:"fa-solid fa-up-right-from-square"}),onClick:()=>{j("RecentStories:clickHistory"),window.open("https://www.facebook.com/me/allactivity/?category_key=STORIESFEEDBACK","_blank")},children:e({en:"Remove reactions",vi:"Thu hồi cảm xúc"})})})})})})}))}}}));
