import{ao as w}from"./index-Dwpma3vX.js";var l=function(t,a,r,d){var i=typeof d<"u"?[d,t]:[t],o=new Blob(i,{type:r||"application/octet-stream"});if(typeof window.navigator.msSaveBlob<"u")window.navigator.msSaveBlob(o,a);else{var n=window.URL&&window.URL.createObjectURL?window.URL.createObjectURL(o):window.webkitURL.createObjectURL(o),e=document.createElement("a");e.style.display="none",e.href=n,e.setAttribute("download",a),typeof e.download>"u"&&e.setAttribute("target","_blank"),document.body.appendChild(e),e.click(),setTimeout(function(){document.body.removeChild(e),window.URL.revokeObjectURL(n)},200)}};const f=w(l);export{f};
