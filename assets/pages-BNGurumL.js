import{p,U as m,q as D,g as C}from"./MyApp-BeNpzLox.js";async function h({uid:a="",cursor:o}){const n=await p({fb_api_req_friendly_name:"ProfileCometAppCollectionGridRendererPaginationQuery",variables:{count:8,scale:1,cursor:o??null,id:btoa(`app_collection:${a}:2409997254:96`)},doc_id:"2983410188445167"}),t=JSON.parse(n);console.log(t);const{edges:l=[],page_info:i={}}=D(t)||{};return l.map(r=>{var _,s,c,u,e;return{id:((_=r.node.node)==null?void 0:_.id)||atob(r.node.id).split(":").at(-1),name:r.node.title.text,subTitle:(s=r.node.subtitle_text)==null?void 0:s.text,url:r.node.url,image:r.node.image.uri,cursor:r.cursor,total:((e=(u=(c=t==null?void 0:t.data)==null?void 0:c.node)==null?void 0:u.items)==null?void 0:e.count)||0}})}var O=(a=>(a.ADMIN="admin",a.LIKED="liked",a.UNLIKED="unliked",a.INVITED="invited",a.DECLINED="declined",a))(O||{});async function q(a=""){const o=await p({fb_api_req_friendly_name:"PagesCometAllLikedPagesSectionPaginationQuery",variables:{cursor:a||null,count:20,ranking_model:"INTEGRITY_SIGNALS",scale:2,id:await m(),__relay_internal__pv__StoriesRingrelayprovider:!1},doc_id:"7763290630455552"}),n=JSON.parse(o),{edges:t=[],page_info:l={}}=D(n)||{};return console.log(n),t.map(i=>{var r,_,s,c,u,e,f,d,v,b,y,w,N,k,I,S,L,P,x;return{id:((_=(r=i==null?void 0:i.node)==null?void 0:r.node)==null?void 0:_.id)||((s=i==null?void 0:i.node)==null?void 0:s.id),name:((u=(c=i==null?void 0:i.node)==null?void 0:c.title)==null?void 0:u.text)||((e=i==null?void 0:i.node)==null?void 0:e.name),url:(f=i==null?void 0:i.node)==null?void 0:f.url,image:((v=(d=i==null?void 0:i.node)==null?void 0:d.image)==null?void 0:v.uri)||((y=(b=i==null?void 0:i.node)==null?void 0:b.profile_picture)==null?void 0:y.uri),cursor:i==null?void 0:i.cursor,userType:(w=i==null?void 0:i.node)!=null&&w.is_viewer_admin?"admin":"liked",category:(N=i==null?void 0:i.node)==null?void 0:N.category_name,verified:(k=i==null?void 0:i.node)==null?void 0:k.is_verified,ctaLabel:(L=(S=(I=i==null?void 0:i.node)==null?void 0:I.comet_page_cta_renderer)==null?void 0:S.label)==null?void 0:L.text,ctaSubtext:(x=(P=i==null?void 0:i.node)==null?void 0:P.comet_page_cta_renderer)==null?void 0:x.subtext}})}async function A(a=""){var t,l,i;const o=await p({variables:{input:{is_tracking_encrypted:!1,page_id:a,source:"page_profile",tracking:null,actor_id:await m(),client_mutation_id:"2"},scale:3},doc_id:"5358677870817645"}),n=JSON.parse(o);return((i=(l=(t=n==null?void 0:n.data)==null?void 0:t.page_unlike)==null?void 0:l.page)==null?void 0:i.id)===a}async function J(){var n,t,l;const a=await p({fb_api_req_friendly_name:"PageCometLaunchpointInvitesRootQuery",variables:{id:await m()},doc_id:"7224925170868877"}),o=JSON.parse(a);return console.log(o),(l=(t=(n=o==null?void 0:o.data)==null?void 0:n.user)==null?void 0:t.profile_plus_follower_invites)==null?void 0:l.map(i=>{var r,_,s,c,u,e;return{id:((r=i==null?void 0:i.delegate_page)==null?void 0:r.id)||(i==null?void 0:i.delegate_page_id),name:((_=i==null?void 0:i.delegate_page)==null?void 0:_.name)||"???",category:(s=i==null?void 0:i.delegate_page)==null?void 0:s.category_name,image:(c=i==null?void 0:i.delegate_page)==null?void 0:c.profile_picture_uri,url:C((u=i==null?void 0:i.delegate_page)==null?void 0:u.id),userType:"invited",cursor:"",inviteId:i==null?void 0:i.follower_invite_id,inviterId:i==null?void 0:i.inviter_id,inviterName:i==null?void 0:i.inviter_name,inviterAvatar:(e=i==null?void 0:i.inviter_profile_photo)==null?void 0:e.uri}})}async function G(a=""){var t,l;const o=await p({fb_api_req_friendly_name:"CometProfilePlusDeclineFollowerInviteCommitMutation",variables:{input:{actor_id:await m(),follower_invite_id:a,ref:"pending_invites"}},doc_id:"5270202713012831"}),n=JSON.parse(o);return(l=(t=n==null?void 0:n.data)==null?void 0:t.decline_follower_invite)==null?void 0:l.follower_invite}export{O as U,q as a,h as b,G as d,J as g,A as u};
