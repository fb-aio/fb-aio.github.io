import{v as C,X as tt,w as ot,ab as rt}from"./MyApp-B0rt5tZI.js";async function _t(i=""){const e=await C({fb_api_req_friendly_name:"StoriesTrayRectangularQuery",variables:{blur:10,bucketsToFetch:5,cursor:i,scale:1,id:await tt()},doc_id:"24539171939059864"}),_=JSON.parse(e);console.log(_);const{edges:c=[],page_info:l={}}=ot(_);return c.map(r=>{var f,y,o,n,t,a,p,I,v,D,E,V,k;const s=((f=r==null?void 0:r.node)==null?void 0:f.story_bucket_owner)||{};return{bucket_id:(y=r==null?void 0:r.node)==null?void 0:y.id,thumbnail:(a=(t=(n=(o=r==null?void 0:r.node)==null?void 0:o.thumbnail_story_to_show)==null?void 0:n.story_card_info)==null?void 0:t.story_thumbnail)==null?void 0:a.uri,owner:{id:s.id,name:s.name,avatar:((p=s.coverImage)==null?void 0:p.uri)||((I=s.profilePic)==null?void 0:I.uri)||((v=s.profile_picture)==null?void 0:v.uri)},stories:(V=(E=(D=r==null?void 0:r.node)==null?void 0:D.unified_stories)==null?void 0:E.edges)==null?void 0:V.map(S=>{var A,M;return{id:(A=S==null?void 0:S.node)==null?void 0:A.id,expiration_time:(M=S==null?void 0:S.node)==null?void 0:M.expiration_time}}),seen:(k=r==null?void 0:r.node)==null?void 0:k.is_bucket_seen_by_viewer,cursor:(r==null?void 0:r.cursor)||l.end_cursor}}).filter(r=>r.stories.length>0)}async function ct(i=""){var l,r,s,f,y;const e=await C({fb_api_req_friendly_name:"StoriesSuspenseContentPaneRootWithEntryPointQuery",variables:{blur:10,bucketID:i,feedbackSource:65,feedLocation:"COMET_MEDIA_VIEWER",focusCommentID:null,initialBucketID:i,initialLoad:!1,scale:1,shouldDeferLoad:!1,shouldEnableArmadilloStoryReply:!0,shouldEnableLiveInStories:!0,__relay_internal__pv__StoriesIsShareToStoryEnabledrelayprovider:!1,__relay_internal__pv__StoriesLWRVariantrelayprovider:"www_new_reactions"},doc_id:"8237681579610775"}),_=JSON.parse((e==null?void 0:e.split(`
`)[0])||"{}");console.log(_);const c=((r=(l=_==null?void 0:_.data)==null?void 0:l.nodes)==null?void 0:r[0])||((s=_==null?void 0:_.data)==null?void 0:s.bucket);return(y=(f=c==null?void 0:c.unified_stories)==null?void 0:f.edges)==null?void 0:y.map(o=>{var p,I,v,D,E,V,k,S,A,M,T,q,P,W,Q,G,Y,B,F,H,U,X,z,K,Z,$,j,u,b,h,m,w,O,L,R,d,J;const n=((v=(I=(p=o==null?void 0:o.node)==null?void 0:p.attachments)==null?void 0:I[0])==null?void 0:v.media)||{},t=((E=(D=o==null?void 0:o.node)==null?void 0:D.story_card_info)==null?void 0:E.feedback_summary)||{},a=[];for(let x of((S=(k=(V=o==null?void 0:o.node)==null?void 0:V.story_card_info)==null?void 0:k.viewerList_viewers)==null?void 0:S.edges)||[])for(let N of((A=x==null?void 0:x.feedback)==null?void 0:A.lightweight_reactions)||[]){let st=(T=(M=N==null?void 0:N.id)==null?void 0:M.split(":"))==null?void 0:T[0],nt="";for(let g of((q=N==null?void 0:N.last5)==null?void 0:q.edges)||[])nt+=(P=g==null?void 0:g.node)==null?void 0:P.reaction;a.push({uid:st,reaction:nt})}return{bucket_id:i,id:(W=o==null?void 0:o.node)==null?void 0:W.id,caption:((G=(Q=o==null?void 0:o.node)==null?void 0:Q.message)==null?void 0:G.text)||((Y=n==null?void 0:n.message)==null?void 0:Y.text)||((B=n==null?void 0:n.title)==null?void 0:B.text),thumbnail:((U=(H=(F=o==null?void 0:o.node)==null?void 0:F.story_card_info)==null?void 0:H.story_thumbnail)==null?void 0:U.uri)||((X=n==null?void 0:n.previewImage)==null?void 0:X.uri),url:(K=(z=o==null?void 0:o.node)==null?void 0:z.shareable)==null?void 0:K.url,video:(n==null?void 0:n.playable_url_quality_hd)||(n==null?void 0:n.browser_native_hd_url)||(n==null?void 0:n.playable_url)||(n==null?void 0:n.browser_native_sd_url),image:((Z=n==null?void 0:n.image)==null?void 0:Z.uri)||(($=n==null?void 0:n.previewImage)==null?void 0:$.uri),reaction:(u=(j=t==null?void 0:t.reaction_summary)==null?void 0:j.map(x=>x.reaction_unicode))==null?void 0:u.join(""),react_count:t==null?void 0:t.total_reaction_count,view_count:((m=(h=(b=o==null?void 0:o.node)==null?void 0:b.story_card_info)==null?void 0:h.story_viewers)==null?void 0:m.count)||((L=(O=(w=o==null?void 0:o.node)==null?void 0:w.story_card_info)==null?void 0:O.viewers)==null?void 0:L.count),creation_time:(R=o==null?void 0:o.node)==null?void 0:R.creation_time,seen:(J=(d=o==null?void 0:o.node)==null?void 0:d.story_card_seen_state)==null?void 0:J.is_seen_by_viewer,reactions:a}})}async function lt(i=""){const e=await C({doc_id:"2474284976008135",variables:{count:8,cursor:i,scale:1.5,id:btoa("app_collection:"+await tt()+":235134840312703:175")}}),_=JSON.parse(e);console.log(_);const{edges:c=[],page_info:l={}}=ot(_)||{};return c.map(r=>{var f,y,o,n,t,a;const s=((f=r==null?void 0:r.node)==null?void 0:f.node)||(r==null?void 0:r.node);return{id:s==null?void 0:s.id,creation_time:(y=s==null?void 0:s.story_card_info)==null?void 0:y.local_creation_time,thumbnail:(n=(o=s==null?void 0:s.story_card_info)==null?void 0:o.story_thumbnail)==null?void 0:n.uri,seen_count:(a=(t=s==null?void 0:s.story_card_seen_state)==null?void 0:t.seen_count)==null?void 0:a.count,cursor:(r==null?void 0:r.cursor)||l.end_cursor}})}async function ut({afterTime:i="",beforeTime:e="",creationTime:_=""}={}){var f,y,o,n;if(_){const t=new Date(_),a=new Date(t.getTime()+24*60*60*1e3);i=rt(t),e=rt(a)}console.log(i,e);const c=await C({fb_api_req_friendly_name:"StoriesArchiveContentPaneRootQuery",variables:{lower_bound_time:i,upper_bound_time:e,scale:1,blur:null,shouldEnableLiveInStories:!0,feedbackSource:65,useDefaultActor:!1,feedLocation:"COMET_MEDIA_VIEWER",focusCommentID:null,isStoriesArchive:!0,__relay_internal__pv__StoriesIsShareToStoryEnabledrelayprovider:!1},doc_id:"8266171723403755"}),l=JSON.parse(c.split(`
`)[0]||"{}");console.log(l);const{edges:r=[],page_info:s={}}=((n=(o=(y=(f=l==null?void 0:l.data)==null?void 0:f.viewer)==null?void 0:y.stories_data)==null?void 0:o.story_archive)==null?void 0:n.cards)||{};return r.map(t=>{var V,k,S,A,M,T,q,P,W,Q,G,Y,B,F,H,U,X,z,K,Z,$,j;const a=((V=t==null?void 0:t.node)==null?void 0:V.viewerCount)||{},p=(S=(k=t==null?void 0:t.node)==null?void 0:k.media_attribution_elements)==null?void 0:S.find(u=>u.attribution_type==="MUSIC");function I(u){var b,h;return(h=(b=t==null?void 0:t.node)==null?void 0:b.attachments)==null?void 0:h.find(m=>{var w;return((w=m==null?void 0:m.media)==null?void 0:w.__typename)===u})}function v(u){return["image","previewImage","blurred_image"].reduce((b,h)=>{var m,w;return b||((w=(m=u==null?void 0:u.media)==null?void 0:m[h])==null?void 0:w.uri)},"")}let D="",E=I("GenericAttachmentMedia");return E?D=I("Photo"):E=I("Photo"),{id:(A=t==null?void 0:t.node)==null?void 0:A.id,created_at:(((M=t==null?void 0:t.node)==null?void 0:M.creation_time)||0)*1e3,last_seen_at:(((q=(T=t==null?void 0:t.node)==null?void 0:T.story_card_seen_state)==null?void 0:q.seen_receipts_last_seen_time)||0)*1e3,comment_count:(W=(P=t==null?void 0:t.node)==null?void 0:P.feedback)==null?void 0:W.story_comment_count,viewer_count:{friend:(Q=a==null?void 0:a.friendViewerCount)==null?void 0:Q.count,connection:(G=a==null?void 0:a.connectionViewerCount)==null?void 0:G.count,follower:(Y=a==null?void 0:a.followerViewerCount)==null?void 0:Y.count,new_friend:(B=a==null?void 0:a.newFriendViewerCount)==null?void 0:B.count,new_connection:(F=a==null?void 0:a.newConnectionViewerCount)==null?void 0:F.count},image:v(E),image_background:v(D),video:["browser_native_hd_url","browser_native_sd_url"].reduce((u,b)=>{var h,m,w,O;return u||((O=(w=(m=(h=t==null?void 0:t.node)==null?void 0:h.attachments)==null?void 0:m.find(L=>{var R;return(R=L==null?void 0:L.media)==null?void 0:R[b]}))==null?void 0:w.media)==null?void 0:O[b])},""),music:p?(p==null?void 0:p.song_title)+" - "+(p==null?void 0:p.artist_name):"",reactions:(z=(X=(U=(H=t==null?void 0:t.node)==null?void 0:H.story_card_info)==null?void 0:U.story_card_reactions)==null?void 0:X.edges)==null?void 0:z.map(u=>{var b,h,m,w,O,L,R;return{uid:(h=(b=u==null?void 0:u.node)==null?void 0:b.messaging_actor)==null?void 0:h.id,reactions:(O=(w=(m=u==null?void 0:u.node)==null?void 0:m.messaging_actions)==null?void 0:w.edges)==null?void 0:O.reduce((d,J)=>{var x;return d+((x=J==null?void 0:J.node)==null?void 0:x.reaction)},""),count:(R=(L=u==null?void 0:u.node)==null?void 0:L.messaging_actions)==null?void 0:R.count}}),viewers:(j=($=(Z=(K=t==null?void 0:t.node)==null?void 0:K.story_card_info)==null?void 0:Z.viewerList_viewers)==null?void 0:$.edges)==null?void 0:j.map(it)}})}function it(i){var e,_,c,l,r,s,f,y;return{uid:(e=i==null?void 0:i.node)==null?void 0:e.id,avatar:(c=(_=i==null?void 0:i.node)==null?void 0:_.profile_picture)==null?void 0:c.uri,name:(l=i==null?void 0:i.node)==null?void 0:l.name,reactions:(s=(r=i==null?void 0:i.feedback)==null?void 0:r.lightweight_reactions)==null?void 0:s.reduce((o,n)=>{var a,p;const t=((a=n==null?void 0:n.last5)==null?void 0:a.edges)||((p=n==null?void 0:n.messaging_actions)==null?void 0:p.edges);return o+(t==null?void 0:t.reduce((I,v)=>{var D;return I+((D=v==null?void 0:v.node)==null?void 0:D.reaction)},""))},""),count:(y=(f=i==null?void 0:i.feedback)==null?void 0:f.lightweight_reactions)==null?void 0:y.reduce((o,n)=>{var t;return o+((t=n==null?void 0:n.messaging_actions)==null?void 0:t.count)},0),seen_time:((i==null?void 0:i.seen_time)||0)*1e3,cursor:i==null?void 0:i.cursor}}async function et({storyId:i="",cursor:e=""}={}){const _=await C({fb_api_req_friendly_name:"StoriesViewerSheetViewerListContentQuery",variables:{cursor:e,id:i,viewerCount:8},doc_id:"3934951263269875"}),c=JSON.parse(_.split(`
`)[0]||"{}");console.log(c);const{edges:l=[],page_info:r={}}=ot(c)||{};return l.map(it)}async function ft(i=""){var l,r,s,f,y;const e=await C({variables:{scale:1,userID:i,useIncrementalDelivery:!0},doc_id:"4192155837522535"}),_=JSON.parse(e.split(`
`)[0]||"{}"),c=(f=(s=(r=(l=_==null?void 0:_.data)==null?void 0:l.user)==null?void 0:r.story_bucket)==null?void 0:s.nodes)==null?void 0:f[0];return console.log(_),{bucketId:c==null?void 0:c.id,firstStoryId:(y=c==null?void 0:c.first_story_to_show)==null?void 0:y.id}}async function yt(i="",e=""){var l,r,s,f,y,o;const _=await C({fb_api_req_friendly_name:"useStoriesSendReplyMutation",variables:{input:{lightweight_reaction_actions:{offsets:[0],reaction:e},story_id:i,story_reply_type:"LIGHT_WEIGHT",actor_id:await tt(),client_mutation_id:7}},doc_id:"3769885849805751"}),c=JSON.parse(_);return console.log(c),(o=(y=(f=(s=(r=(l=c==null?void 0:c.data)==null?void 0:l.direct_message_reply)==null?void 0:r.story)==null?void 0:s.story_card_info)==null?void 0:f.story_card_reactions)==null?void 0:y.edges)==null?void 0:o.length}export{ct as a,_t as b,lt as c,ut as d,et as e,ft as g,yt as r};
