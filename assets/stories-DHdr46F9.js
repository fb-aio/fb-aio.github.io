import{p as M,U as g,q as Z,a8 as d}from"./MyApp-CSAMsYNo.js";async function rt(i=""){const e=await M({fb_api_req_friendly_name:"StoriesTrayRectangularQuery",variables:{blur:10,bucketsToFetch:5,cursor:i,scale:1,id:await g()},doc_id:"24539171939059864"}),c=JSON.parse(e);console.log(c);const{edges:_=[],page_info:u={}}=Z(c);return _.map(r=>{var f,p,o,n,t,s,y,h,m,S,E,V;const a=((f=r==null?void 0:r.node)==null?void 0:f.story_bucket_owner)||{};return{bucked_id:(p=r==null?void 0:r.node)==null?void 0:p.id,thumbnail:(s=(t=(n=(o=r==null?void 0:r.node)==null?void 0:o.thumbnail_story_to_show)==null?void 0:n.story_card_info)==null?void 0:t.story_thumbnail)==null?void 0:s.uri,owner:{id:a.id,name:a.name,avatar:((y=a.coverImage)==null?void 0:y.uri)||((h=a.profilePic)==null?void 0:h.uri)||((m=a.profile_picture)==null?void 0:m.uri)},stories:(V=(E=(S=r==null?void 0:r.node)==null?void 0:S.unified_stories)==null?void 0:E.edges)==null?void 0:V.map(b=>{var k,A;return{id:(k=b==null?void 0:b.node)==null?void 0:k.id,expiration_time:(A=b==null?void 0:b.node)==null?void 0:A.expiration_time}}),cursor:(r==null?void 0:r.cursor)||u.end_cursor}}).filter(r=>r.stories.length>0)}async function it(i=""){var u,r,a,f,p;const e=await M({fb_api_req_friendly_name:"StoriesSuspenseContentPaneRootWithEntryPointQuery",variables:{blur:10,bucketID:i,feedbackSource:65,feedLocation:"COMET_MEDIA_VIEWER",focusCommentID:null,initialBucketID:i,initialLoad:!1,scale:1,shouldDeferLoad:!1,shouldEnableArmadilloStoryReply:!0,shouldEnableLiveInStories:!0,__relay_internal__pv__StoriesIsShareToStoryEnabledrelayprovider:!1,__relay_internal__pv__StoriesLWRVariantrelayprovider:"www_new_reactions"},doc_id:"8237681579610775"}),c=JSON.parse((e==null?void 0:e.split(`
`)[0])||"{}");console.log(c);const _=((r=(u=c==null?void 0:c.data)==null?void 0:u.nodes)==null?void 0:r[0])||((a=c==null?void 0:c.data)==null?void 0:a.bucket);return(p=(f=_==null?void 0:_.unified_stories)==null?void 0:f.edges)==null?void 0:p.map(o=>{var s,y,h,m,S,E,V,b,k,A,O,x,C,R,q,J,N,P,Q,T,W,U,Y,B,F,G,H;const n=((h=(y=(s=o==null?void 0:o.node)==null?void 0:s.attachments)==null?void 0:y[0])==null?void 0:h.media)||{},t=((S=(m=o==null?void 0:o.node)==null?void 0:m.story_card_info)==null?void 0:S.feedback_summary)||{};return{id:(E=o==null?void 0:o.node)==null?void 0:E.id,caption:((b=(V=o==null?void 0:o.node)==null?void 0:V.message)==null?void 0:b.text)||((k=n==null?void 0:n.message)==null?void 0:k.text)||((A=n==null?void 0:n.title)==null?void 0:A.text),thumbnail:((C=(x=(O=o==null?void 0:o.node)==null?void 0:O.story_card_info)==null?void 0:x.story_thumbnail)==null?void 0:C.uri)||((R=n==null?void 0:n.previewImage)==null?void 0:R.uri),url:(J=(q=o==null?void 0:o.node)==null?void 0:q.shareable)==null?void 0:J.url,video:(n==null?void 0:n.playable_url_quality_hd)||(n==null?void 0:n.browser_native_hd_url)||(n==null?void 0:n.playable_url)||(n==null?void 0:n.browser_native_sd_url),image:((N=n==null?void 0:n.image)==null?void 0:N.uri)||((P=n==null?void 0:n.previewImage)==null?void 0:P.uri),reaction:(T=(Q=t==null?void 0:t.reaction_summary)==null?void 0:Q.map(K=>K.reaction_unicode))==null?void 0:T.join(""),react_count:t==null?void 0:t.total_reaction_count,view_count:((Y=(U=(W=o==null?void 0:o.node)==null?void 0:W.story_card_info)==null?void 0:U.story_viewers)==null?void 0:Y.count)||((G=(F=(B=o==null?void 0:o.node)==null?void 0:B.story_card_info)==null?void 0:F.viewers)==null?void 0:G.count),creation_time:(H=o==null?void 0:o.node)==null?void 0:H.creation_time}})}async function st(i=""){const e=await M({doc_id:"2474284976008135",variables:{count:8,cursor:i,scale:1.5,id:btoa("app_collection:"+await g()+":235134840312703:175")}}),c=JSON.parse(e);console.log(c);const{edges:_=[],page_info:u={}}=Z(c)||{};return _.map(r=>{var f,p,o,n,t,s;const a=((f=r==null?void 0:r.node)==null?void 0:f.node)||(r==null?void 0:r.node);return{id:a==null?void 0:a.id,creation_time:(p=a==null?void 0:a.story_card_info)==null?void 0:p.local_creation_time,thumbnail:(n=(o=a==null?void 0:a.story_card_info)==null?void 0:o.story_thumbnail)==null?void 0:n.uri,seen_count:(s=(t=a==null?void 0:a.story_card_seen_state)==null?void 0:t.seen_count)==null?void 0:s.count,cursor:(r==null?void 0:r.cursor)||u.end_cursor}})}async function at({afterTime:i="",beforeTime:e="",creationTime:c=""}={}){var f,p,o,n;if(c){const t=new Date(c),s=new Date(t.getTime()+24*60*60*1e3);i=d(t),e=d(s)}console.log(i,e);const _=await M({fb_api_req_friendly_name:"StoriesArchiveContentPaneRootQuery",variables:{lower_bound_time:i,upper_bound_time:e,scale:1,blur:null,shouldEnableLiveInStories:!0,feedbackSource:65,useDefaultActor:!1,feedLocation:"COMET_MEDIA_VIEWER",focusCommentID:null,isStoriesArchive:!0,__relay_internal__pv__StoriesIsShareToStoryEnabledrelayprovider:!1},doc_id:"8266171723403755"}),u=JSON.parse(_.split(`
`)[0]||"{}");console.log(u);const{edges:r=[],page_info:a={}}=((n=(o=(p=(f=u==null?void 0:u.data)==null?void 0:f.viewer)==null?void 0:p.stories_data)==null?void 0:o.story_archive)==null?void 0:n.cards)||{};return r.map(t=>{var V,b,k,A,O,x,C,R,q,J,N,P,Q,T,W,U,Y,B,F,G,H,K;const s=((V=t==null?void 0:t.node)==null?void 0:V.viewerCount)||{},y=(k=(b=t==null?void 0:t.node)==null?void 0:b.media_attribution_elements)==null?void 0:k.find(l=>l.attribution_type==="MUSIC");function h(l){var I,D;return(D=(I=t==null?void 0:t.node)==null?void 0:I.attachments)==null?void 0:D.find(w=>{var v;return((v=w==null?void 0:w.media)==null?void 0:v.__typename)===l})}function m(l){return["image","previewImage","blurred_image"].reduce((I,D)=>{var w,v;return I||((v=(w=l==null?void 0:l.media)==null?void 0:w[D])==null?void 0:v.uri)},"")}let S="",E=h("GenericAttachmentMedia");return E?S=h("Photo"):E=h("Photo"),{id:(A=t==null?void 0:t.node)==null?void 0:A.id,created_at:(((O=t==null?void 0:t.node)==null?void 0:O.creation_time)||0)*1e3,last_seen_at:(((C=(x=t==null?void 0:t.node)==null?void 0:x.story_card_seen_state)==null?void 0:C.seen_receipts_last_seen_time)||0)*1e3,comment_count:(q=(R=t==null?void 0:t.node)==null?void 0:R.feedback)==null?void 0:q.story_comment_count,viewer_count:{friend:(J=s==null?void 0:s.friendViewerCount)==null?void 0:J.count,connection:(N=s==null?void 0:s.connectionViewerCount)==null?void 0:N.count,follower:(P=s==null?void 0:s.followerViewerCount)==null?void 0:P.count,new_friend:(Q=s==null?void 0:s.newFriendViewerCount)==null?void 0:Q.count,new_connection:(T=s==null?void 0:s.newConnectionViewerCount)==null?void 0:T.count},image:m(E),image_background:m(S),video:["browser_native_hd_url","browser_native_sd_url"].reduce((l,I)=>{var D,w,v,j;return l||((j=(v=(w=(D=t==null?void 0:t.node)==null?void 0:D.attachments)==null?void 0:w.find(L=>{var z;return(z=L==null?void 0:L.media)==null?void 0:z[I]}))==null?void 0:v.media)==null?void 0:j[I])},""),music:y?(y==null?void 0:y.song_title)+" - "+(y==null?void 0:y.artist_name):"",reactions:(B=(Y=(U=(W=t==null?void 0:t.node)==null?void 0:W.story_card_info)==null?void 0:U.story_card_reactions)==null?void 0:Y.edges)==null?void 0:B.map(l=>{var I,D,w,v,j,L,z;return{uid:(D=(I=l==null?void 0:l.node)==null?void 0:I.messaging_actor)==null?void 0:D.id,reactions:(j=(v=(w=l==null?void 0:l.node)==null?void 0:w.messaging_actions)==null?void 0:v.edges)==null?void 0:j.reduce((nt,X)=>{var $;return nt+(($=X==null?void 0:X.node)==null?void 0:$.reaction)},""),count:(z=(L=l==null?void 0:l.node)==null?void 0:L.messaging_actions)==null?void 0:z.count}}),viewers:(K=(H=(G=(F=t==null?void 0:t.node)==null?void 0:F.story_card_info)==null?void 0:G.viewerList_viewers)==null?void 0:H.edges)==null?void 0:K.map(tt)}})}function tt(i){var e,c,_,u,r,a,f,p;return{uid:(e=i==null?void 0:i.node)==null?void 0:e.id,avatar:(_=(c=i==null?void 0:i.node)==null?void 0:c.profile_picture)==null?void 0:_.uri,name:(u=i==null?void 0:i.node)==null?void 0:u.name,reactions:(a=(r=i==null?void 0:i.feedback)==null?void 0:r.lightweight_reactions)==null?void 0:a.reduce((o,n)=>{var s,y;const t=((s=n==null?void 0:n.last5)==null?void 0:s.edges)||((y=n==null?void 0:n.messaging_actions)==null?void 0:y.edges);return o+(t==null?void 0:t.reduce((h,m)=>{var S;return h+((S=m==null?void 0:m.node)==null?void 0:S.reaction)},""))},""),count:(p=(f=i==null?void 0:i.feedback)==null?void 0:f.lightweight_reactions)==null?void 0:p.reduce((o,n)=>{var t;return o+((t=n==null?void 0:n.messaging_actions)==null?void 0:t.count)},0),seen_time:((i==null?void 0:i.seen_time)||0)*1e3,cursor:i==null?void 0:i.cursor}}async function ct({storyId:i="",cursor:e=""}={}){const c=await M({fb_api_req_friendly_name:"StoriesViewerSheetViewerListContentQuery",variables:{cursor:e,id:i,viewerCount:8},doc_id:"3934951263269875"}),_=JSON.parse(c.split(`
`)[0]||"{}");console.log(_);const{edges:u=[],page_info:r={}}=Z(_)||{};return u.map(tt)}async function _t(i=""){var u,r,a,f,p;const e=await M({variables:{scale:1,userID:i,useIncrementalDelivery:!0},doc_id:"4192155837522535"}),c=JSON.parse(e.split(`
`)[0]||"{}"),_=(f=(a=(r=(u=c==null?void 0:c.data)==null?void 0:u.user)==null?void 0:r.story_bucket)==null?void 0:a.nodes)==null?void 0:f[0];return console.log(c),{bucketId:_==null?void 0:_.id,firstStoryId:(p=_==null?void 0:_.first_story_to_show)==null?void 0:p.id}}export{it as a,rt as b,st as c,at as d,ct as e,_t as g};