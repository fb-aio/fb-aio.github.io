System.register(["./index-legacy-CCwJMuy2.js","./useForceStop-legacy-CyrO0sBx.js","./MyTable-legacy-BZeb5wke.js","./ExportButton-legacy-qXXS5y9I.js","./MyApp-legacy-fyQv5Z4s.js","./groups-legacy-CnbCwmBN.js","./WordStatisticButton-legacy-CfgeltJr.js","./BadgeWrapper-legacy-D0NABOTi.js","./index-legacy-BK-Y710Z.js","./index-legacy-DsC3Km4F.js","./index-legacy-SXhFllNV.js","./index-legacy-CdjaJQpA.js","./DownOutlined-legacy-DdSEFHD0.js","./TextArea-legacy-BDrkAJ1v.js","./Table-legacy-D8q2ISTp.js","./index-legacy-CItXdjuV.js","./PurePanel-legacy-_HKeIg-R.js","./move-legacy-DBRV_hf4.js","./SearchOutlined-legacy-0L_f4026.js","./index-legacy-DwfovYKj.js","./index-legacy-Cw6zrUfE.js","./Dropdown-legacy-BJofQUxY.js","./useBreakpoint-legacy-DhjjCRbx.js","./useForceUpdate-legacy-OleuDxTF.js","./Pagination-legacy-8loKNAwB.js","./index-legacy-DH7rkDL1.js","./row-legacy-pJ2pnOik.js","./file-download-legacy-CZ1Ihu2w.js","./index-legacy-Cbq3daSV.js","./index-legacy-3ygqBVGQ.js"],(function(e,n){"use strict";var a,t,i,s,l,o,r,c,d,m,u,g,p,h,y,j,x,f,v,b,k,w,C,_,G,N,T,S;return{setters:[e=>{a=e.aI,t=e.bi,i=e.aU,s=e.r,l=e.aQ,o=e.aW,r=e.aX,c=e.a_,d=e.bp,m=e.bl},e=>{u=e.u},e=>{g=e.default},e=>{p=e.E},e=>{h=e.u,y=e.e,j=e.m,x=e.I,f=e.S,v=e.b,b=e.t},e=>{k=e.d,w=e.g,C=e.U,_=e.a},e=>{G=e.W},e=>{N=e.B},e=>{T=e.T},e=>{S=e.A},null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],execute:function(){e("default",(function({target:e}){const{message:n}=a.useApp(),D=t(),F=u(),{ti:I}=i(),{notification:B}=h(),[E,J]=s.useState(!1),[M,A]=y("JoinedGroups.data."+e?.id,[]),[W,L]=y("JoinedGroups.myGroupLoaded",!1),[$,P]=y("Groups.data",[]),[U,O]=s.useState(!1),R=s.useMemo((()=>{const e=new Set($.map((e=>e.id)));return M.map((n=>({...n,isCommonGroup:e.has(n.id)})))}),[M,$]);s.useEffect((()=>{e?.id&&X(!j("JoinedGroups.data."+e?.id)?.length)}),[e?.id]);const X=async(a=!1)=>{if(!e?.id)return;const t=F.start();let i=[...a?[]:j("JoinedGroups.data."+e?.id)||[]],s=i[i.length-1]?.cursor||"";J(!0);try{for(;!t.value();){const n=await k({uid:e.id,cursor:s});if(!n?.length)break;s=n[n.length-1].cursor,i=[...i,...n].map(((e,n)=>({...e,recent:n}))),A(i),await l(500)}n.success({content:I({en:"Load groups success ",vi:"Tải nhóm xong "})+i.length})}catch(o){n.error({content:I({en:"Error: ",vi:"Lỗi: "})+o.message})}finally{A(i),J(!1)}},H=async()=>{const e="JoinedGroups.onClickFindCommonGroups";b(e),O(!0);const a=[],t=new Set;for(const[i,s]of[[w,C.ADMIN],[_,C.MEMBER]]){let s="";for(;;){n.loading({key:e,content:I({en:"Finding common groups...",vi:"Đang tìm nhóm chung..."})+a.length,duration:0});const o=await i({cursor:s}),r=o?.filter((e=>!t.has(e.id)));if(o.forEach((e=>t.add(e.id))),!r?.length)break;a.push(...r),s=a?.[a?.length-1]?.cursor,P([...a]),await l(500)}}O(!1),L(!0),n.destroy(e),B.open({type:"success",message:I({en:"Find common groups success",vi:"Hoàn tất tìm nhóm chung"}),description:I({en:'Please use filter in column "Common groups"',vi:'Vui lòng sử dụng bộ lọc ở cột "Nhóm chung"'}),duration:0})},Q=[{title:"#",dataIndex:"recent",key:"recent",render:(e,n,a)=>(n.recent||0)+1,sorter:(e,n)=>e.recent-n.recent,width:60},{title:I({en:"Cover",vi:"Ảnh"}),key:"cover",dataIndex:"image",render:(e,n,a)=>o.jsx(x,{src:n.image,style:{width:150,height:100,objectFit:"contain"}}),width:150},{title:I({en:"Name",vi:"Tên"}),key:"name",dataIndex:"name",sorter:(e,n)=>e.name.localeCompare(n.name),render:(e,n,a)=>o.jsxs(f,{direction:"vertical",style:{maxWidth:250},children:[o.jsx(T.Link,{strong:!0,href:n.url,target:"_blank",children:n.name}),o.jsx(T.Text,{type:"secondary",children:n.id})]})},{title:I({en:"Description",vi:"Mô tả"}),key:"description",dataIndex:"description",render:(e,n,a)=>o.jsx("p",{style:{width:250},children:e}),sorter:(e,n)=>(e.description||"").localeCompare(n.description||"")},{title:I({en:"Members",vi:"Thành viên"}),key:"membersCount",dataIndex:"membersCount",sorter:(e,n)=>e.membersCount-n.membersCount,render:(e,n,a)=>r(e),align:"end",width:120},...$.length||W?[{title:R.filter((e=>e.isCommonGroup)).length+I({en:" Common groups",vi:" Nhóm chung"}),key:"common",dataIndex:"common",render:(e,n,a)=>n.isCommonGroup?"✅":"❌",filters:[{text:`✅ (${R.filter((e=>e.isCommonGroup)).length})`,value:!0},{text:`❌ (${R.filter((e=>!e.isCommonGroup)).length})`,value:!1}],onFilter:(e,n)=>n.isCommonGroup==e,width:150,align:"right"}]:[],{title:I({en:"Actions",vi:"Hành động"}),key:"actions",render:(e,n,a)=>o.jsx(f.Compact,{children:o.jsx(v,{title:I({en:"Bulk Downloader",vi:"Tải hàng loạt"}),children:o.jsx(c,{type:"default",onClick:()=>{return e=n.id,void D("/bulk-downloader",{state:{targetId:e,platform:d.Facebook}});var e},icon:o.jsx("i",{className:"fa-solid fa-download"})})})}),width:100,align:"end"}];return o.jsxs("div",{style:{display:"flex",flexDirection:"column",width:"100%",height:"100%"},children:[o.jsx(S,{type:"success",showIcon:!0,message:I({en:`Joined ${R.length} public groups`,vi:`Đã tham gia ${R.length} nhóm công khai`}),style:{alignSelf:"center",marginBottom:10}}),o.jsx(g,{columns:Q,data:R,keyExtractor:e=>e?.id,searchable:!0,selectable:!0,pageSize:5,renderTitle:n=>o.jsxs(o.Fragment,{children:[o.jsx(c,{disabled:E,type:"primary",icon:E?o.jsx("i",{className:"fa-solid fa-rotate-right fa-spin"}):o.jsx("i",{className:"fa-solid fa-rotate-right"}),onClick:()=>X(!0),children:I({en:"Reload",vi:"Tải lại"})}),o.jsx(p,{data:n.length?n:R,options:[{key:"uid",label:".txt (id)",prepareData:n=>({fileName:e?.name+"_joined_groups_id.txt",data:n.map((e=>e.id)).join("\n")})},{key:"id_name",label:".csv (id+name)",prepareData:n=>({fileName:e?.name+"_joined_groups_id_name.csv",data:m(n.map((e=>({uid:e.id,name:e.name}))))})},{key:"name_desc",label:".csv (name+desc)",prepareData:n=>({fileName:e?.name+"_joined_groups.csv",data:m(n.map((e=>({name:e.name,desc:e.description}))))})},{key:"json",label:".json",prepareData:n=>({fileName:e?.name+"_joined_groups.json",data:JSON.stringify(n,null,4)})},{key:"csv",label:".csv",prepareData:n=>({fileName:e?.name+"_joined_groups.csv",data:m(n)})}]}),o.jsx(N,{type:"new",children:o.jsx(v,{title:I({en:"Find common groups of "+e?.name+" with you",vi:"Tìm nhóm chung của "+e?.name+" với bạn"}),children:o.jsx(c,{loading:U,icon:o.jsx("i",{className:"fa-solid fa-magnifying-glass"}),onClick:H,children:I({en:"Find common groups",vi:"Tìm nhóm chung"})})})}),o.jsx(G,{name:"JoinedGroups",text:R.map((e=>[e.name,e.description?.replace?.(e.name,"")])).flat().filter(Boolean).join("\n")})]})})]})}))}}}));
