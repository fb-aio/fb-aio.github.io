System.register(["./index-legacy-BktKT1Ke.js","./Collection-legacy-Dq2Fc6GW.js","./RecentStoryViewer-legacy-C9-Vifzo.js","./MyApp-legacy-BEYUQWl1.js","./stories-legacy-DS_A6f4L.js","./BadgeWrapper-legacy-vknUUCDz.js","./index-legacy-BacgtZPG.js","./index-legacy-Bz7hViNY.js","./index-legacy-BAM9j3iV.js","./index-legacy-DTT4c9Qe.js","./index-legacy-xJPkzNLN.js","./index-legacy-DnLMN5Vk.js","./file-download-legacy-EQNZ9vzg.js","./react-hotkeys-hook.esm-legacy-BEYjg6sQ.js","./index-legacy-BosjKPdP.js","./index-legacy-BjtoT5lQ.js","./Dropdown-legacy-DIt51RaD.js","./PurePanel-legacy-CYJBvqlN.js","./move-legacy-CuKW7LSN.js","./index-legacy-C83AmogK.js","./TextArea-legacy-BEJV1Mhn.js","./Input-legacy-TffRtpFZ.js","./SearchOutlined-legacy-0ti3VAR1.js","./index-legacy-DgNwb3oD.js","./Pagination-legacy-C9HLQMQx.js","./index-legacy-CmOcxWuR.js","./DownOutlined-legacy-CeLHQU-z.js","./row-legacy-5UqDEonM.js","./col-legacy-C6YknIOl.js","./StoryViewers-legacy-CYORdn4M.js","./VideoWithMuted-legacy-Cy2qCROO.js"],(function(e,n){"use strict";var l,s,a,t,o,i,r,c,d,y,j,u,g,x,h,m,b,w,p,f,k,v,F,N;return{setters:[e=>{l=e.aU,s=e.bj,a=e.r,t=e.aX,o=e.bd,i=e.b0,r=e.aW,c=e.cA,d=e.bq},e=>{y=e.default},e=>{j=e.default},e=>{u=e.t,g=e.b,x=e.B,h=e.I,m=e.S},e=>{b=e.b,w=e.a},e=>{p=e.B},e=>{f=e.A},e=>{k=e.L},e=>{v=e.P},e=>{F=e.A},e=>{N=e.T},null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],execute:function(){e("default",(function(){const{ti:e}=l(),n=s();return a.useEffect((()=>{u("RecentStories:onLoad")}),[]),t.jsx(y,{collectionName:"Recent Stories "+r(),fetchNext:async(e,n)=>await b(n||e?.[e.length-1]?.cursor||""),renderItem:(l,s)=>t.jsx(k.Item,{children:t.jsxs(x.Ribbon,{text:l.stories.length,style:{opacity:l.stories.length>1?1:0},children:[t.jsx(h,{src:l.thumbnail,style:{width:160,height:270,borderRadius:10,objectFit:"cover"},preview:{destroyOnClose:!0,toolbarRender:()=>null,imageRender:()=>t.jsx(j,{story:l})}}),t.jsx("div",{style:{position:"absolute",top:10,left:10},children:t.jsxs(v,{title:l.seen?t.jsxs(t.Fragment,{children:[t.jsx("i",{className:"fa-solid fa-eye"})," ",l.owner.name," ",e({en:" KNOW you saw",vi:" BIẾT bạn đã xem"})]}):l.owner.name,content:t.jsxs(m.Compact,{children:[t.jsx(g,{title:e({en:"Bulk downloader",vi:"Tải hàng loạt"}),placement:"bottom",children:t.jsx(i,{icon:t.jsx("i",{className:"fa-solid fa-download"}),onClick:()=>{return e=l.owner.id,void n("/bulk-downloader",{state:{targetId:e,platform:d.Facebook}});var e}})}),t.jsx(g,{title:e({en:"Open Facebook",vi:"Mở Facebook"}),placement:"bottom",children:t.jsx(i,{icon:t.jsx("i",{className:"fa-solid fa-external-link"}),onClick:()=>{window.open("https://fb.com/"+l.owner.id)}})})]}),children:[t.jsx(F,{src:l.owner.avatar,size:40,style:{borderWidth:4,borderColor:"#0866FF"}}),l.seen?t.jsx("i",{className:"fa-solid fa-eye fa-lg",style:{position:"absolute",bottom:0,right:0}}):null]})}),t.jsx("div",{style:{background:"linear-gradient(0deg, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0) 100%)",position:"absolute",bottom:0,left:0,padding:"5px 10px",width:"100%",paddingTop:"50px",pointerEvents:"none"},children:t.jsx(N.Text,{style:{color:"#eee"},children:l.owner.name})})]})}),downloadItem:async e=>(await w(e.bucket_id)).map(((n,l)=>({name:c(e.owner.name)+(n.video?".mp4":".jpg"),url:n.video||n.image||n.thumbnail}))),getItemCursor:e=>e?.cursor,rowKey:e=>e.bucket_id,all:!0,onSearch:(e,n)=>o(e,n.owner.name),header:()=>t.jsx(f,{type:"info",message:t.jsxs(t.Fragment,{children:[t.jsx("i",{className:"fa fa-eye-slash",style:{color:"gray"}})," ",e({en:"View stories anonymously - Friends won't know you've viewed their stories",vi:"Xem tin ẩn danh - Bạn bè sẽ không biết bạn đã xem tin của họ"})]})}),headerButtons:()=>t.jsx(t.Fragment,{children:t.jsx(p,{type:"new",children:t.jsx(g,{title:t.jsxs(t.Fragment,{children:[t.jsx("i",{className:"fa fa-history"})," ",e({en:"Undo your reactions on Facebook story",vi:"Thu hồi cảm xúc đã thả trên Facebook story"})]}),children:t.jsx(i,{icon:t.jsx("i",{className:"fa-solid fa-up-right-from-square"}),onClick:()=>{u("RecentStories:clickHistory"),window.open("https://www.facebook.com/me/allactivity/?category_key=STORIESFEEDBACK","_blank")},children:e({en:"Remove reactions",vi:"Thu hồi cảm xúc"})})})})})})}))}}}));
