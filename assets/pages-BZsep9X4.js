import{v as p,X as m,w as D,g as x}from"./MyApp-DvK0rWAv.js";async function J({uid:t="",cursor:r}){const a=await p({fb_api_req_friendly_name:"ProfileCometAppCollectionGridRendererPaginationQuery",variables:{count:8,scale:1,cursor:r??null,id:btoa(`app_collection:${t}:2409997254:96`)},doc_id:"2983410188445167"}),n=JSON.parse(a);console.log(n);const{edges:o=[],page_info:i={}}=D(n)||{};return o.map(l=>{var s,_,c,u,e;return{id:((s=l.node.node)==null?void 0:s.id)||atob(l.node.id).split(":").at(-1),name:l.node.title.text,subTitle:(_=l.node.subtitle_text)==null?void 0:_.text,url:l.node.url,image:l.node.image.uri,cursor:l.cursor,total:((e=(u=(c=n==null?void 0:n.data)==null?void 0:c.node)==null?void 0:u.items)==null?void 0:e.count)||0}})}var F=(t=>(t.ADMIN="admin",t.LIKED="liked",t.UNLIKED="unliked",t.UNFOLLOWED="unfollowed",t.INVITED="invited",t.DECLINED="declined",t))(F||{});async function M(t=""){const r=await p({fb_api_req_friendly_name:"PagesCometAllLikedPagesSectionPaginationQuery",variables:{cursor:t||null,count:20,ranking_model:"INTEGRITY_SIGNALS",scale:2,id:await m(),__relay_internal__pv__StoriesRingrelayprovider:!1},doc_id:"7763290630455552"}),a=JSON.parse(r),{edges:n=[],page_info:o={}}=D(a)||{};return console.log(a),n.map(i=>{var l,s,_,c,u,e,f,d,v,b,w,y,k,L,N,O,I,P,S,C,E;return{id:((s=(l=i==null?void 0:i.node)==null?void 0:l.node)==null?void 0:s.id)||((_=i==null?void 0:i.node)==null?void 0:_.id),name:((u=(c=i==null?void 0:i.node)==null?void 0:c.title)==null?void 0:u.text)||((e=i==null?void 0:i.node)==null?void 0:e.name),url:(f=i==null?void 0:i.node)==null?void 0:f.url,image:((v=(d=i==null?void 0:i.node)==null?void 0:d.image)==null?void 0:v.uri)||((w=(b=i==null?void 0:i.node)==null?void 0:b.profile_picture)==null?void 0:w.uri),cursor:i==null?void 0:i.cursor,userType:(y=i==null?void 0:i.node)!=null&&y.is_viewer_admin?"admin":"liked",category:(k=i==null?void 0:i.node)==null?void 0:k.category_name,verified:(L=i==null?void 0:i.node)==null?void 0:L.is_verified,ctaLabel:(I=(O=(N=i==null?void 0:i.node)==null?void 0:N.comet_page_cta_renderer)==null?void 0:O.label)==null?void 0:I.text,ctaSubtext:(S=(P=i==null?void 0:i.node)==null?void 0:P.comet_page_cta_renderer)==null?void 0:S.subtext,canLike:(C=i==null?void 0:i.node)==null?void 0:C.can_viewer_like,subscribe_status:(E=i==null?void 0:i.node)==null?void 0:E.subscribe_status}})}async function h(t=""){var n,o,i;const r=await p({variables:{input:{is_tracking_encrypted:!1,page_id:t,source:"page_profile",tracking:null,actor_id:await m(),client_mutation_id:"2"},scale:3},doc_id:"5358677870817645"}),a=JSON.parse(r);return((i=(o=(n=a==null?void 0:a.data)==null?void 0:n.page_unlike)==null?void 0:o.page)==null?void 0:i.id)===t}async function q(t=""){var n,o,i;const r=await p({fb_api_req_friendly_name:"CometUserUnfollowMutation",variables:{action_render_location:"WWW_COMET_PROFILE",input:{attribution_id_v2:"ProfileCometTimelineListViewRoot.react,comet.profile.timeline.list,via_cold_start,1724165629822,111511,250100865708545,,",is_tracking_encrypted:!1,subscribe_location:"PROFILE",tracking:null,unsubscribee_id:t,actor_id:await m()},scale:2},doc_id:"7959683157389920"}),a=JSON.parse(r);return(i=(o=(n=a==null?void 0:a.data)==null?void 0:n.actor_unsubscribe)==null?void 0:o.unsubscribee)==null?void 0:i.id}async function A(){var a,n,o;const t=await p({fb_api_req_friendly_name:"PageCometLaunchpointInvitesRootQuery",variables:{id:await m()},doc_id:"7224925170868877"}),r=JSON.parse(t);return console.log(r),(o=(n=(a=r==null?void 0:r.data)==null?void 0:a.user)==null?void 0:n.profile_plus_follower_invites)==null?void 0:o.map(i=>{var s,_,c,u,e;const l=((s=i==null?void 0:i.delegate_page)==null?void 0:s.id)||(i==null?void 0:i.delegate_page_id);return{id:l,name:((_=i==null?void 0:i.delegate_page)==null?void 0:_.name)||"???",category:(c=i==null?void 0:i.delegate_page)==null?void 0:c.category_name,image:(u=i==null?void 0:i.delegate_page)==null?void 0:u.profile_picture_uri,url:x(l),userType:"invited",cursor:"",inviteId:i==null?void 0:i.follower_invite_id,inviterId:i==null?void 0:i.inviter_id,inviterName:i==null?void 0:i.inviter_name,inviterAvatar:(e=i==null?void 0:i.inviter_profile_photo)==null?void 0:e.uri}})}async function G(t=""){var n,o;const r=await p({fb_api_req_friendly_name:"CometProfilePlusDeclineFollowerInviteCommitMutation",variables:{input:{actor_id:await m(),follower_invite_id:t,ref:"pending_invites"}},doc_id:"5270202713012831"}),a=JSON.parse(r);return(o=(n=a==null?void 0:a.data)==null?void 0:n.decline_follower_invite)==null?void 0:o.follower_invite}export{F as U,M as a,q as b,J as c,G as d,A as g,h as u};
