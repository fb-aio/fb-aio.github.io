import{ao as x,ap as h,aq as e}from"./index-CiUWOVnT.js";import{P as r}from"./index-BDpFD7oM.js";import{A as d}from"./index-BWqB_tOj.js";import{T as g}from"./index-Drn6P3uZ.js";import"./MyApp-CSAMsYNo.js";import"./responsiveObserver-eRqqnUkT.js";import"./useBreakpoint-Biy8e67G.js";import"./index-DG5rzQVh.js";import"./styleChecker-DrkA_zFw.js";import"./TextArea-C8RwuKiT.js";const{Title:y,Text:u}=g;function f({showName:i=!0,showAvatar:n=!0,avatarSize:l=50,titleColor:m="white",textColor:c="#eee",style:p={}}){var s,o;const t=x(h.profile);return e.jsxs("div",{style:{...a.container,...p},children:[i&&e.jsxs("div",{style:a.info,children:[e.jsx("a",{href:"https:/fb.com/me",target:"_blank",children:e.jsx(y,{level:4,style:a.name(m),children:t==null?void 0:t.name})}),e.jsx(u,{style:a.id(c),children:t==null?void 0:t.uid})]}),n&&e.jsx("a",{href:(s=t==null?void 0:t.avatar)==null?void 0:s.link,target:"_blank",children:e.jsx(d,{src:(o=t==null?void 0:t.avatar)==null?void 0:o.uri,size:l})})]})}f.propTypes={showName:r.bool,showAvatar:r.bool,avatarSize:r.number,titleColor:r.string,textColor:r.string,style:r.object};const a={container:{display:"flex",alignItems:"center"},info:{display:"flex",flexDirection:"column",marginRight:"16px"},name:i=>({margin:0,textAlign:"right",color:i}),id:i=>({color:i,fontSize:"0.9em",textAlign:"right"})};export{f as default};