import{aw as H,b7 as K,aK as P,r as u,aE as N,aM as i,b9 as U,aO as y,bq as q,ba as T}from"./index-DNwEsvzZ.js";import{u as z}from"./useForceStop-Drejerjy.js";import{M as V}from"./MyTable-DpUP4Vpx.js";import{E as Q}from"./ExportButton-CDQQcVNV.js";import{u as X,i as j,k as I,S as v,b as S,t as Y}from"./MyApp-Cu7o1wa3.js";import{c as Z,g as ee,U as _,a as ne}from"./groups-C0Amj3qK.js";import{W as oe}from"./WordStatisticButton-B1oy6zw2.js";import{B as ie}from"./BadgeWrapper-O3PLVAiQ.js";import{I as se}from"./index-CfkWa7og.js";import{T as E}from"./index-NnOW43qm.js";import{A as ae}from"./index-onAjZnkJ.js";import"./index-DqEAv6t8.js";import"./index-C2uIuBFP.js";import"./PurePanel-DamPJgBK.js";import"./SearchOutlined-BVTOooB7.js";import"./Table-D_hF5Lbl.js";import"./addEventListener-CuIftcSw.js";import"./index-nb6ftkVc.js";import"./index-DOlxrQ7l.js";import"./Dropdown-DEIgg0_x.js";import"./useBreakpoint-CaaT5OFW.js";import"./Pagination-DbJSoy5e.js";import"./index-zt7UkdVX.js";import"./EyeOutlined-B8BcrVsH.js";import"./row-Bh8WxBhg.js";import"./file-download-DrvF_jep.js";function Me({target:o}){const{message:l}=H.useApp(),M=K(),D=z(),{ti:s}=P(),{notification:J}=X(),[k,b]=u.useState(!1),[g,C]=j("JoinedGroups.data."+(o==null?void 0:o.id),[]),[B,F]=j("JoinedGroups.myGroupLoaded",!1),[h,L]=j("Groups.data",[]),[A,w]=u.useState(!1),d=u.useMemo(()=>{const n=new Set(h.map(e=>e.id));return g.map(e=>({...e,isCommonGroup:n.has(e.id)}))},[g,h]);u.useEffect(()=>{var n;o!=null&&o.id&&G(!((n=I("JoinedGroups.data."+(o==null?void 0:o.id)))!=null&&n.length))},[o==null?void 0:o.id]);const G=async(n=!1)=>{var f;if(!(o!=null&&o.id))return;const e=D.start();let t=[...n?[]:I("JoinedGroups.data."+(o==null?void 0:o.id))||[]],p=((f=t[t.length-1])==null?void 0:f.cursor)||"";b(!0);try{for(;!e.value();){const r=await Z({uid:o.id,cursor:p});if(!(r!=null&&r.length))break;p=r[r.length-1].cursor,t=[...t,...r].map((c,m)=>({...c,recent:m})),C(t),await N(500)}l.success({content:s({en:"Load groups success ",vi:"Tải nhóm xong "})+t.length})}catch(r){l.error({content:s({en:"Error: ",vi:"Lỗi: "})+r.message})}finally{C(t),b(!1)}},W=n=>{M("/bulk-downloader",{state:{targetId:n,platform:q.Facebook}})},R=async()=>{var t;const n="JoinedGroups.onClickFindCommonGroups";Y(n),w(!0);const e=[],a=new Set;for(const[p,f]of[[ee,_.ADMIN],[ne,_.MEMBER]]){let r="";for(;;){l.loading({key:n,content:s({en:"Finding common groups...",vi:"Đang tìm nhóm chung..."})+e.length,duration:0});const c=await p({cursor:r}),m=c==null?void 0:c.filter(x=>!a.has(x.id));if(c.forEach(x=>a.add(x.id)),!(m!=null&&m.length))break;e.push(...m),r=(t=e==null?void 0:e[(e==null?void 0:e.length)-1])==null?void 0:t.cursor,L([...e]),await N(500)}}w(!1),F(!0),l.destroy(n),J.open({type:"success",message:s({en:"Find common groups success",vi:"Hoàn tất tìm nhóm chung"}),description:s({en:'Please use filter in column "Common groups"',vi:'Vui lòng sử dụng bộ lọc ở cột "Nhóm chung"'}),duration:0})},$=n=>i.jsxs(v,{children:[i.jsx(y,{disabled:k,type:"primary",icon:k?i.jsx("i",{className:"fa-solid fa-rotate-right fa-spin"}):i.jsx("i",{className:"fa-solid fa-rotate-right"}),onClick:()=>G(!0),children:s({en:"Reload",vi:"Tải lại"})}),i.jsx(Q,{data:n.length?n:d,options:[{key:"uid",label:".txt (groups id)",prepareData:e=>({fileName:(o==null?void 0:o.name)+"_joined_groups_id.txt",data:e.map(a=>a.id).join(`
`)})},{key:"id_name",label:".csv (group id+name)",prepareData:e=>({fileName:(o==null?void 0:o.name)+"_joined_groups_id_name.csv",data:T(e.map(a=>({uid:a.id,name:a.name})))})},{key:"json",label:".json",prepareData:e=>({fileName:(o==null?void 0:o.name)+"_joined_groups.json",data:JSON.stringify(e,null,4)})},{key:"csv",label:".csv",prepareData:e=>({fileName:(o==null?void 0:o.name)+"_joined_groups.csv",data:T(e)})}]}),i.jsx(ie,{type:"new",children:i.jsx(S,{title:s({en:"Find common groups of "+(o==null?void 0:o.name)+" with you",vi:"Tìm nhóm chung của "+(o==null?void 0:o.name)+" với bạn"}),children:i.jsx(y,{loading:A,icon:i.jsx("i",{className:"fa-solid fa-magnifying-glass"}),onClick:R,children:s({en:"Find common groups",vi:"Tìm nhóm chung"})})})}),i.jsx(oe,{name:"JoinedGroups",text:d.map(e=>e.name+" "+(e.description||"")).join(`
`)})]}),O=[{title:"#",dataIndex:"recent",key:"recent",render:(n,e,a)=>(e.recent||0)+1,sorter:(n,e)=>n.recent-e.recent,width:60},{title:s({en:"Cover",vi:"Ảnh"}),key:"cover",dataIndex:"image",render:(n,e,a)=>i.jsx(se,{src:e.image,style:{width:150,height:100,objectFit:"contain"}}),width:150},{title:s({en:"Name",vi:"Tên"}),key:"name",dataIndex:"name",sorter:(n,e)=>n.name.localeCompare(e.name),render:(n,e,a)=>i.jsxs(v,{direction:"vertical",style:{maxWidth:250},children:[i.jsx(E.Link,{strong:!0,href:e.url,target:"_blank",children:e.name}),i.jsx(E.Text,{type:"secondary",children:e.id})]})},{title:s({en:"Description",vi:"Mô tả"}),key:"description",dataIndex:"description",render:(n,e,a)=>i.jsx("p",{style:{width:250},children:n}),sorter:(n,e)=>(n.description||"").localeCompare(e.description||"")},{title:s({en:"Members",vi:"Thành viên"}),key:"membersCount",dataIndex:"membersCount",sorter:(n,e)=>n.membersCount-e.membersCount,render:(n,e,a)=>U(n),align:"end",width:120},...h.length||B?[{title:d.filter(n=>n.isCommonGroup).length+s({en:" Common groups",vi:" Nhóm chung"}),key:"common",dataIndex:"common",render:(n,e,a)=>e.isCommonGroup?"✅":"❌",filters:[{text:`✅ (${d.filter(n=>n.isCommonGroup).length})`,value:!0},{text:`❌ (${d.filter(n=>!n.isCommonGroup).length})`,value:!1}],onFilter:(n,e)=>e.isCommonGroup==n,width:150,align:"right"}]:[],{title:s({en:"Actions",vi:"Hành động"}),key:"actions",render:(n,e,a)=>i.jsx(v.Compact,{children:i.jsx(S,{title:s({en:"Bulk Downloader",vi:"Tải hàng loạt"}),children:i.jsx(y,{type:"default",onClick:()=>W(e.id),icon:i.jsx("i",{className:"fa-solid fa-download"})})})}),width:100,align:"end"}];return i.jsxs("div",{style:{display:"flex",flexDirection:"column",width:"100%",height:"100%"},children:[i.jsx(ae,{type:"success",showIcon:!0,message:s({en:`Joined ${d.length} public groups`,vi:`Đã tham gia ${d.length} nhóm công khai`}),style:{alignSelf:"center",marginBottom:10}}),i.jsx(V,{columns:O,data:d,keyExtractor:n=>n==null?void 0:n.id,searchable:!0,selectable:!0,pageSize:5,renderTitle:$})]})}export{Me as default};
