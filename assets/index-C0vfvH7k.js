import{bj as c,b1 as i,aU as u,r,bl as l,aX as f}from"./index-25lgxwTR.js";import{u as p,j as d}from"./MyApp-BCKP8LFO.js";function m(){const a=c(),e=i(),{ti:t}=u(),{notification:o}=p();return r.useEffect(()=>{new URLSearchParams(e.search),console.log(e);const s=t({en:"FB AIO updated",vi:"FB AIO đã được cập nhật"})+" - v".concat(l.version),n=t({en:"Please turn on Autorun features again",vi:"Vui lòng bật lại các chức năng Tự động chạy"});d.fire({icon:"success",title:s,text:n,allowEscapeKey:!1,allowOutsideClick:!1,confirmButtonText:t({en:"Ok",vi:"Đã hiểu"})}),o.open({type:"success",message:s,description:n},!0),a("/autorun")},[e]),f.jsx("div",{children:"ExtUpdated"})}export{m as default};
