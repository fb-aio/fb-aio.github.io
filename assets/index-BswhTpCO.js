const __vite__fileDeps=["./RecentStories-CDzdrRYJ.js","./index-C0GZV8r4.js","./index-DfqnkV-X.css","./MyApp-5UuG5Alv.js","./Collection-DFbTstJo.js","./index-Ca7rCt7M.js","./file-download-BJF8e5Y0.js","./index-BFuDaB_r.js","./Dropdown-B7RIYLpN.js","./PurePanel-DK31J58S.js","./index-DBY2_SRc.js","./index-5vdqXesG.js","./index-D8nKmtSx.js","./index-CbZxyvQY.js","./addEventListener-D-0G3yIj.js","./index-B5sA0xfq.js","./index-ChuHj_qb.js","./Pagination-Bqljqj6K.js","./useBreakpoint-Bu9dHjAK.js","./row-DKHVyfQS.js","./index-9AWtuJYp.js","./RecentStoryViewer-W0p8CSOc.js","./stories-BAoNFOKF.js","./StoryViewers-DG8H_gUD.js","./index-CRcIzT1K.js","./index-CEX1fess.js","./VideoWithMuted-BYhYz8Pu.js","./index-DqYBXEs5.js","./index-D_rV-K7J.js","./ArchivedStories-BJgsl4Ev.js","./index-C-xobaWj.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{av as e,r as i,aA as a}from"./index-C0GZV8r4.js";import{u as o,b as l}from"./MyApp-5UuG5Alv.js";import{T as c}from"./index-CAxkHnSi.js";import"./Dropdown-B7RIYLpN.js";const n=i.lazy(()=>a(()=>import("./RecentStories-CDzdrRYJ.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28]),import.meta.url)),d=i.lazy(()=>a(()=>import("./ArchivedStories-BJgsl4Ev.js"),__vite__mapDeps([29,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,22,27,30,25]),import.meta.url)),r={Recent:"recent",Archived:"archived"};function v(){const{ti:t}=o(),s=[{key:r.Recent,label:t({en:"Today",vi:"Hôm nay"}),closable:!1,children:e.jsx(n,{})},{key:r.Archived,label:t({en:"Archived",vi:"Kho lưu trữ"}),closable:!1,children:e.jsx(d,{})}];return e.jsxs(l,{direction:"vertical",style:{width:"100%"},children:[e.jsx("h1",{style:{textAlign:"left"},children:t({en:"Story",vi:"Tin"})}),e.jsx(c,{hideAdd:!0,type:"editable-card",items:s})]})}export{v as default};