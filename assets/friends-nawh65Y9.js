import{b0 as v,a$ as D}from"./index-wbIphP0C.js";import{w as m,r as _,j as H,E,l as q}from"./MyApp-njhOwsK5.js";async function $({myUid:e,targetUid:t=""}){const i=await m({doc_id:"4936483286421335",variables:{id:t||e,query:"",scale:1}});try{const r=_(i||"{}"),{edges:n=[]}=v(r,!1);return n.map(s=>{var l,o,c,a,d,u;return{uid:(l=s.node)==null?void 0:l.id,url:((o=s.node)==null?void 0:o.url)||H((c=s.node)==null?void 0:c.id),name:(a=s.node)==null?void 0:a.name,avatar:(u=(d=s.node)==null?void 0:d.photo)==null?void 0:u.uri}})}catch(r){return[]}}async function G({myUid:e,targetUid:t}){var n;const i=await m({doc_id:"8752443744796374",variables:{input:{source:"friending_jewel",unfriended_user_id:t,actor_id:e},scale:1}}),r=_(i||"{}");if((n=r.errors)!=null&&n.length)throw new Error(r.errors[0].message);return r}async function V({myUid:e,targetUid:t}){var n;const i=await m({doc_id:"6294978773852692",variables:{input:{attribution_id_v2:"FriendingCometRoot.react,comet.friending,tap_tabbar,1667288605315,127814,2356318349,",friend_requestee_ids:[t],people_you_may_know_location:"friends_center",refs:[null],source:"people_you_may_know",warn_ack_for_ids:[],actor_id:e},scale:2}}),r=_(i);if((n=r.errors)!=null&&n.length)throw new Error(r.errors[0].message);return r}async function z({myUid:e,targetUid:t}){var n,s,l,o,c,a,d;const i=await m({doc_id:"5028133957233114",variables:{input:{actor_id:e,user_id:t}}}),r=_(i||"{}");if((n=r.errors)!=null&&n.length)throw new Error(r.errors[0].message);if(((o=(l=(s=r==null?void 0:r.data)==null?void 0:s.user_poke)==null?void 0:l.user)==null?void 0:o.poke_status)!="PENDING")throw new Error("Failed to poke friend: "+((d=(a=(c=r==null?void 0:r.data)==null?void 0:c.user_poke)==null?void 0:a.user)==null?void 0:d.poke_status));return r}var B=(e=>(e.NameContainsSpecialCharacters="Name contains special characters",e.NameContainsNumbers="Name contains numbers",e.StrangeUid="Strange uid",e.NoAvatar="No avatar",e.Locked="Locked",e.BlockedMessages="Blocked messages",e.CurrentCity="Current city",e.Hometown="Hometown",e.Highschool="Highschool",e.Work="Work",e.Following="Following",e.Follower="Follower",e))(B||{});const J={"Name contains special characters":{en:"👽 Special characters",vi:"👽 Ký tự đặc biệt",color:"orange"},"Name contains numbers":{en:"🔟 Contains numbers",vi:"🔟 Chứa số",color:"purple"},"No avatar":{en:"👤 No avatar",vi:"👤 Không avatar",color:"cyan"},"Strange uid":{en:"🆔 Strange UID",vi:"🆔 UID lạ",color:"blue"},Locked:{en:"🔒 Locked",vi:"🔒 Bị khoá",color:"red"},"Blocked messages":{en:"🚫 Blocked messages",vi:"🚫 Chặn tin nhắn",color:"red"},"Current city":{en:"🏙️ Current city",vi:"🏙️ Cùng tỉnh thành",color:"green"},Hometown:{en:"🏡 Hometown",vi:"🏡 Cùng quê",color:"green"},Highschool:{en:"📚 High school",vi:"📚 Cùng trung học",color:"green"},Work:{en:"💼 Work",vi:"💼 Cùng công ty",color:"green"},Following:{en:"👉 Following",vi:"👉 Đang theo dõi",color:"green"},Follower:{en:"👥 Follower",vi:"👥 Người theo dõi",color:"green"}};var W=(e=>(e.Male="MALE",e.Female="FEMALE",e.Unknown="UNKNOWN",e))(W||{});const S={MALE:{en:"👦🏻 Male",vi:"👦🏻 Nam"},FEMALE:{en:"👩🏻 Female",vi:"👩🏻 Nữ"},UNKNOWN:{en:"❓ Unknown",vi:"❓ Không rõ"}};var F=(e=>(e[e.friends=2]="friends",e[e.recent_added=1]="recent_added",e[e.birthdays=123]="birthdays",e[e.works=56]="works",e[e.high_school=54]="high_school",e[e.current_city=124]="current_city",e[e.hometown=125]="hometown",e[e.followers=32]="followers",e[e.following=33]="following",e))(F||{});async function X({uid:e=null,cursor:t=null,section:i=2}){let r=await m({doc_id:"4186250744800382",variables:{count:8,cursor:t,scale:2,id:btoa("app_collection:".concat(e||await E(),":2356318349:").concat(i))}});const n=_(r),{edges:s=[],page_info:l={}}=v(n)||{};return s.map(o=>{var a,d,u,g,h,y,p,w,b,N,f,L,C,U,O,I,R,M,j,x;let c=(d=(a=o==null?void 0:o.node)==null?void 0:a.node)==null?void 0:d.id;if(!/^\d+$/.exec(c))try{let k=atob(c);c=((u=/\d+/.exec(k))==null?void 0:u[0])||c}catch(k){console.log(k)}return{uid:c,name:(h=(g=o==null?void 0:o.node)==null?void 0:g.title)==null?void 0:h.text,avatar:(p=(y=o==null?void 0:o.node)==null?void 0:y.image)==null?void 0:p.uri,url:(w=o==null?void 0:o.node)==null?void 0:w.url,mutualFriendCount:((L=(f=(N=(b=o==null?void 0:o.node)==null?void 0:b.subtitle_text)==null?void 0:N.aggregated_ranges)==null?void 0:f[0])==null?void 0:L.count)||0,gender:((M=(R=(I=(O=(U=(C=o==null?void 0:o.node)==null?void 0:C.actions_renderer)==null?void 0:U.action)==null?void 0:O.client_handler)==null?void 0:I.profile_action)==null?void 0:R.restrictable_profile_owner)==null?void 0:M.gender)||"UNKNOWN",isLocked:!((j=o==null?void 0:o.node)!=null&&j.subtitle_text)||!((x=o==null?void 0:o.node)!=null&&x.url),cursor:(o==null?void 0:o.cursor)||(l==null?void 0:l.end_cursor)}})}async function Y(e=100){var l,o;const t=await m({fb_api_req_friendly_name:"CometHomeContactsContainerQuery",variables:{numContactsToFetch:e,scale:2,__relay_internal__pv__CometHomeContactListItemsContactListAnRankingIsEnabledrelayprovider:!0},doc_id:"8845828445504279"}),[i,r]=((l=t==null?void 0:t.split)==null?void 0:l.call(t,"\n"))||[];console.log(t);const n=_(i),s=[];for(let c of D(n,"chat_sidebar_contacts")||[])s.push({uid:c.id,name:c.name,avatar:(o=c.profile_picture)==null?void 0:o.uri});return s}function A(e,t,i=!1){var o,c,a,d,u,g,h,y,p;const r=i?0:1,n=((d=(a=(c=(o=e==null?void 0:e.node)==null?void 0:o.summary)==null?void 0:c.ranges)==null?void 0:a[r])==null?void 0:d.entity)||{},s=(n==null?void 0:n.id)||((u=e==null?void 0:e.node)==null?void 0:u.post_id),l=(e==null?void 0:e.cursor)||(t==null?void 0:t.cursor);return{uid:s,name:n==null?void 0:n.short_name,desc:(h=(g=e==null?void 0:e.node)==null?void 0:g.summary)==null?void 0:h.text,url:(n==null?void 0:n.url)||(n==null?void 0:n.profile_url)||(n==null?void 0:n.mobileUrl),avatar:q(s,100),time:parseInt(((y=e==null?void 0:e.node)==null?void 0:y.creation_time)||((p=l==null?void 0:l.split(":"))==null?void 0:p[0])||0)*1e3,cursor:l}}async function Z(e=""){const t=await m({fb_api_req_friendly_name:"CometActivityLogStoriesListPaginationQuery",variables:{audience:null,category:"REMOVEDFRIENDS",category_key:"REMOVEDFRIENDS",count:25,cursor:e,feedLocation:null,media_content_filters:[],month:null,person_id:null,privacy:"NONE",scale:2,timeline_visibility:"ALL",year:null,id:await E()},doc_id:"27684299287850969"}),i=_(t);console.log(i);const{edges:r=[],page_info:n={}}=v(i);return r.map(s=>A(s,n))}async function Q(e=""){const t=await m({fb_api_req_friendly_name:"CometActivityLogStoriesListPaginationQuery",variables:{audience:null,category:"FRIENDS",category_key:"FRIENDS",count:25,cursor:e,feedLocation:null,media_content_filters:[],month:null,person_id:null,privacy:"NONE",scale:2,timeline_visibility:"ALL",year:null,id:await E()},doc_id:"27684299287850969"}),i=_(t),{edges:r=[],page_info:n={}}=v(i);return r.map(s=>A(s,n))}async function T(e="1"){const t=await m({fb_api_req_friendly_name:"BirthdayCometMonthlyBirthdaysRefetchQuery",variables:{count:2,cursor:e,offset_month:0,scale:2,stream_birthday_months:!1},doc_id:"27478190941824257"}),i=_(t),{edges:r=[],page_info:n={}}=v(i);return r.map(s=>{var o,c;const l=((c=(o=s==null?void 0:s.node)==null?void 0:o.friends)==null?void 0:c.edges)||[];return l==null?void 0:l.map(a=>{var d,u,g,h,y,p,w,b,N,f,L,C;return{uid:(d=a==null?void 0:a.node)==null?void 0:d.id,name:(u=a==null?void 0:a.node)==null?void 0:u.name,url:((g=a==null?void 0:a.node)==null?void 0:g.profile_url)||((h=a==null?void 0:a.node)==null?void 0:h.url),avatar:(p=(y=a==null?void 0:a.node)==null?void 0:y.profile_picture)==null?void 0:p.uri,birthday:{day:(b=(w=a==null?void 0:a.node)==null?void 0:w.birthdate)==null?void 0:b.day,month:(f=(N=a==null?void 0:a.node)==null?void 0:N.birthdate)==null?void 0:f.month,year:(C=(L=a==null?void 0:a.node)==null?void 0:L.birthdate)==null?void 0:C.year},cursor:n==null?void 0:n.end_cursor}})}).flat()}async function ee(e=""){const t=await m({fb_api_req_friendly_name:"CometActivityLogStoriesListPaginationQuery",variables:{audience:null,category:"FOLLOWERS",category_key:"FOLLOWERS",count:25,cursor:e,feedLocation:null,media_content_filters:[],month:null,person_id:null,privacy:"NONE",scale:2,timeline_visibility:"ALL",year:null,id:await E()},doc_id:"7782012195256824"});btoa("app_collection:"+await E()+":2356318349:32");const i=_(t),{edges:r=[],page_info:n={}}=v(i);return r.map(s=>A(s,n,!0))}export{F,S as G,B as Q,J as a,W as b,V as c,X as d,Z as e,Y as f,$ as g,Q as h,T as i,ee as j,z as p,G as u};
