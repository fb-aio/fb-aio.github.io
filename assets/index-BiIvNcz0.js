import{r as a,n as ne,X as ae,C as ct,P as lt,d as O,W as $e,i as k,V as ut,w as ft,m as Se,$ as de,g as q,bt as vt,z as mt,e as Ge,T as xe,E as dt,F as Ze,a4 as ge,bu as gt,G as ht,aL as pt,a2 as wt,D as Ue,aM as Ct,I as Ke,a7 as Qe,M as qe,O as Ee,aO as He}from"./index-Zrrdisla.js";import{b as Je,a as we,g as St,R as bt}from"./addEventListener-DISMr04p.js";import{i as _e,a6 as xt,G as It}from"./MyApp-D9TAjLoC.js";var Ie=a.createContext(null),yt=function(e){var o=e.visible,n=e.maskTransitionName,r=e.getContainer,i=e.prefixCls,f=e.rootClassName,s=e.icons,l=e.countRender,m=e.showSwitch,d=e.showProgress,c=e.current,S=e.transform,h=e.count,g=e.scale,x=e.minScale,M=e.maxScale,C=e.closeIcon,L=e.onSwitchLeft,E=e.onSwitchRight,R=e.onClose,u=e.onZoomIn,I=e.onZoomOut,p=e.onRotateRight,v=e.onRotateLeft,b=e.onFlipX,y=e.onFlipY,w=e.onReset,N=e.toolbarRender,z=e.zIndex,$=e.image,j=a.useContext(Ie),H=s.rotateLeft,V=s.rotateRight,B=s.zoomIn,D=s.zoomOut,W=s.close,K=s.left,Q=s.right,F=s.flipX,ie=s.flipY,se="".concat(i,"-operations-operation");a.useEffect(function(){var T=function(Y){Y.keyCode===$e.ESC&&R()};return o&&window.addEventListener("keydown",T),function(){window.removeEventListener("keydown",T)}},[o]);var J=[{icon:ie,onClick:y,type:"flipY"},{icon:F,onClick:b,type:"flipX"},{icon:H,onClick:v,type:"rotateLeft"},{icon:V,onClick:p,type:"rotateRight"},{icon:D,onClick:I,type:"zoomOut",disabled:g<=x},{icon:B,onClick:u,type:"zoomIn",disabled:g===M}],A=J.map(function(T){var P,Y=T.icon,X=T.onClick,G=T.type,re=T.disabled;return a.createElement("div",{className:ne(se,(P={},ae(P,"".concat(i,"-operations-operation-").concat(G),!0),ae(P,"".concat(i,"-operations-operation-disabled"),!!re),P)),onClick:X,key:G},Y)}),Z=a.createElement("div",{className:"".concat(i,"-operations")},A);return a.createElement(ct,{visible:o,motionName:n},function(T){var P=T.className,Y=T.style;return a.createElement(lt,{open:!0,getContainer:r??document.body},a.createElement("div",{className:ne("".concat(i,"-operations-wrapper"),P,f),style:O(O({},Y),{},{zIndex:z})},C===null?null:a.createElement("button",{className:"".concat(i,"-close"),onClick:R},C||W),m&&a.createElement(a.Fragment,null,a.createElement("div",{className:ne("".concat(i,"-switch-left"),ae({},"".concat(i,"-switch-left-disabled"),c===0)),onClick:L},K),a.createElement("div",{className:ne("".concat(i,"-switch-right"),ae({},"".concat(i,"-switch-right-disabled"),c===h-1)),onClick:E},Q)),a.createElement("div",{className:"".concat(i,"-footer")},d&&a.createElement("div",{className:"".concat(i,"-progress")},l?l(c+1,h):"".concat(c+1," / ").concat(h)),N?N(Z,O(O({icons:{flipYIcon:A[0],flipXIcon:A[1],rotateLeftIcon:A[2],rotateRightIcon:A[3],zoomOutIcon:A[4],zoomInIcon:A[5]},actions:{onFlipY:y,onFlipX:b,onRotateLeft:v,onRotateRight:p,onZoomOut:I,onZoomIn:u,onReset:w,onClose:R},transform:S},j?{current:c,total:h}:{}),{},{image:$})):Z)))})},Pe={x:0,y:0,rotate:0,scale:1,flipX:!1,flipY:!1};function Rt(t,e,o,n){var r=a.useRef(null),i=a.useRef([]),f=a.useState(Pe),s=k(f,2),l=s[0],m=s[1],d=function(g){m(Pe),ut(Pe,l)||n==null||n({transform:Pe,action:g})},c=function(g,x){r.current===null&&(i.current=[],r.current=ft(function(){m(function(M){var C=M;return i.current.forEach(function(L){C=O(O({},C),L)}),r.current=null,n==null||n({transform:C,action:x}),C})})),i.current.push(O(O({},l),g))},S=function(g,x,M,C,L){var E=t.current,R=E.width,u=E.height,I=E.offsetWidth,p=E.offsetHeight,v=E.offsetLeft,b=E.offsetTop,y=g,w=l.scale*g;w>o?(w=o,y=o/l.scale):w<e&&(w=L?w:e,y=w/l.scale);var N=M??innerWidth/2,z=C??innerHeight/2,$=y-1,j=$*R*.5,H=$*u*.5,V=$*(N-l.x-v),B=$*(z-l.y-b),D=l.x-(V-j),W=l.y-(B-H);if(g<1&&w===1){var K=I*w,Q=p*w,F=Je(),ie=F.width,se=F.height;K<=ie&&Q<=se&&(D=0,W=0)}c({x:D,y:W,scale:w},x)};return{transform:l,resetTransform:d,updateTransform:c,dispatchZoomChange:S}}function Ve(t,e,o,n){var r=e+o,i=(o-n)/2;if(o>n){if(e>0)return ae({},t,i);if(e<0&&r<n)return ae({},t,-i)}else if(e<0||r>n)return ae({},t,e<0?i:-i);return{}}function et(t,e,o,n){var r=Je(),i=r.width,f=r.height,s=null;return t<=i&&e<=f?s={x:0,y:0}:(t>i||e>f)&&(s=O(O({},Ve("x",o,t,i)),Ve("y",n,e,f))),s}var Ce=1,Mt=1;function Pt(t,e,o,n,r,i,f){var s=r.rotate,l=r.scale,m=r.x,d=r.y,c=a.useState(!1),S=k(c,2),h=S[0],g=S[1],x=a.useRef({diffX:0,diffY:0,transformX:0,transformY:0}),M=function(u){!e||u.button!==0||(u.preventDefault(),u.stopPropagation(),x.current={diffX:u.pageX-m,diffY:u.pageY-d,transformX:m,transformY:d},g(!0))},C=function(u){o&&h&&i({x:u.pageX-x.current.diffX,y:u.pageY-x.current.diffY},"move")},L=function(){if(o&&h){g(!1);var u=x.current,I=u.transformX,p=u.transformY,v=m!==I&&d!==p;if(!v)return;var b=t.current.offsetWidth*l,y=t.current.offsetHeight*l,w=t.current.getBoundingClientRect(),N=w.left,z=w.top,$=s%180!==0,j=et($?y:b,$?b:y,N,z);j&&i(O({},j),"dragRebound")}},E=function(u){if(!(!o||u.deltaY==0)){var I=Math.abs(u.deltaY/100),p=Math.min(I,Mt),v=Ce+p*n;u.deltaY>0&&(v=Ce/v),f(v,"wheel",u.clientX,u.clientY)}};return a.useEffect(function(){var R,u,I,p;if(e){I=we(window,"mouseup",L,!1),p=we(window,"mousemove",C,!1);try{window.top!==window.self&&(R=we(window.top,"mouseup",L,!1),u=we(window.top,"mousemove",C,!1))}catch{}}return function(){var v,b,y,w;(v=I)===null||v===void 0||v.remove(),(b=p)===null||b===void 0||b.remove(),(y=R)===null||y===void 0||y.remove(),(w=u)===null||w===void 0||w.remove()}},[o,h,m,d,s,e]),{isMoving:h,onMouseDown:M,onMouseMove:C,onMouseUp:L,onWheel:E}}function Et(t){return new Promise(function(e){var o=document.createElement("img");o.onerror=function(){return e(!1)},o.onload=function(){return e(!0)},o.src=t})}function tt(t){var e=t.src,o=t.isCustomPlaceholder,n=t.fallback,r=a.useState(o?"loading":"normal"),i=k(r,2),f=i[0],s=i[1],l=a.useRef(!1),m=f==="error";a.useEffect(function(){var h=!0;return Et(e).then(function(g){!g&&h&&s("error")}),function(){h=!1}},[e]),a.useEffect(function(){o&&!l.current?s("loading"):m&&s("normal")},[e]);var d=function(){s("normal")},c=function(g){l.current=!1,f==="loading"&&g!==null&&g!==void 0&&g.complete&&(g.naturalWidth||g.naturalHeight)&&(l.current=!0,d())},S=m&&n?{src:n}:{onLoad:d,src:e};return[c,S,f]}function Ne(t,e){var o=t.x-e.x,n=t.y-e.y;return Math.hypot(o,n)}function Nt(t,e,o,n){var r=Ne(t,o),i=Ne(e,n);if(r===0&&i===0)return[t.x,t.y];var f=r/(r+i),s=t.x+f*(e.x-t.x),l=t.y+f*(e.y-t.y);return[s,l]}function Ot(t,e,o,n,r,i,f){var s=r.rotate,l=r.scale,m=r.x,d=r.y,c=a.useState(!1),S=k(c,2),h=S[0],g=S[1],x=a.useRef({point1:{x:0,y:0},point2:{x:0,y:0},eventType:"none"}),M=function(u){x.current=O(O({},x.current),u)},C=function(u){if(e){u.stopPropagation(),g(!0);var I=u.touches,p=I===void 0?[]:I;p.length>1?M({point1:{x:p[0].clientX,y:p[0].clientY},point2:{x:p[1].clientX,y:p[1].clientY},eventType:"touchZoom"}):M({point1:{x:p[0].clientX-m,y:p[0].clientY-d},eventType:"move"})}},L=function(u){var I=u.touches,p=I===void 0?[]:I,v=x.current,b=v.point1,y=v.point2,w=v.eventType;if(p.length>1&&w==="touchZoom"){var N={x:p[0].clientX,y:p[0].clientY},z={x:p[1].clientX,y:p[1].clientY},$=Nt(b,y,N,z),j=k($,2),H=j[0],V=j[1],B=Ne(N,z)/Ne(b,y);f(B,"touchZoom",H,V,!0),M({point1:N,point2:z,eventType:"touchZoom"})}else w==="move"&&(i({x:p[0].clientX-b.x,y:p[0].clientY-b.y},"move"),M({eventType:"move"}))},E=function(){if(o){if(h&&g(!1),M({eventType:"none"}),n>l)return i({x:0,y:0,scale:n},"touchZoom");var u=t.current.offsetWidth*l,I=t.current.offsetHeight*l,p=t.current.getBoundingClientRect(),v=p.left,b=p.top,y=s%180!==0,w=et(y?I:u,y?u:I,v,b);w&&i(O({},w),"dragRebound")}};return a.useEffect(function(){var R;return o&&e&&(R=we(window,"touchmove",function(u){return u.preventDefault()},{passive:!1})),function(){var u;(u=R)===null||u===void 0||u.remove()}},[o,e]),{isTouching:h,onTouchStart:C,onTouchMove:L,onTouchEnd:E}}var Tt=["fallback","src","imgRef"],Lt=["prefixCls","src","alt","imageInfo","fallback","movable","onClose","visible","icons","rootClassName","closeIcon","getContainer","current","count","countRender","scaleStep","minScale","maxScale","transitionName","maskTransitionName","imageRender","imgCommonProps","toolbarRender","onTransform","onChange"],$t=function(e){var o=e.fallback,n=e.src,r=e.imgRef,i=Se(e,Tt),f=tt({src:n,fallback:o}),s=k(f,2),l=s[0],m=s[1];return de.createElement("img",q({ref:function(c){r.current=c,l(c)}},i,m))},ot=function(e){var o=e.prefixCls,n=e.src,r=e.alt,i=e.imageInfo,f=e.fallback,s=e.movable,l=s===void 0?!0:s,m=e.onClose,d=e.visible,c=e.icons,S=c===void 0?{}:c,h=e.rootClassName,g=e.closeIcon,x=e.getContainer,M=e.current,C=M===void 0?0:M,L=e.count,E=L===void 0?1:L,R=e.countRender,u=e.scaleStep,I=u===void 0?.5:u,p=e.minScale,v=p===void 0?1:p,b=e.maxScale,y=b===void 0?50:b,w=e.transitionName,N=w===void 0?"zoom":w,z=e.maskTransitionName,$=z===void 0?"fade":z,j=e.imageRender,H=e.imgCommonProps,V=e.toolbarRender,B=e.onTransform,D=e.onChange,W=Se(e,Lt),K=a.useRef(),Q=a.useContext(Ie),F=Q&&E>1,ie=Q&&E>=1,se=a.useState(!0),J=k(se,2),A=J[0],Z=J[1],T=Rt(K,v,y,B),P=T.transform,Y=T.resetTransform,X=T.updateTransform,G=T.dispatchZoomChange,re=Pt(K,l,d,I,P,X,G),he=re.isMoving,be=re.onMouseDown,pe=re.onWheel,ee=Ot(K,l,d,v,P,X,G),te=ee.isTouching,oe=ee.onTouchStart,ue=ee.onTouchMove,me=ee.onTouchEnd,ce=P.rotate,le=P.scale,Oe=ne(ae({},"".concat(o,"-moving"),he));a.useEffect(function(){A||Z(!0)},[A]);var Te=function(){Y("close")},Le=function(){G(Ce+I,"zoomIn")},fe=function(){G(Ce/(Ce+I),"zoomOut")},ve=function(){X({rotate:ce+90},"rotateRight")},ye=function(){X({rotate:ce-90},"rotateLeft")},Re=function(){X({flipX:!P.flipX},"flipX")},Me=function(){X({flipY:!P.flipY},"flipY")},rt=function(){Y("reset")},Ae=function(_){_==null||_.preventDefault(),_==null||_.stopPropagation(),C>0&&(Z(!1),Y("prev"),D==null||D(C-1,C))},De=function(_){_==null||_.preventDefault(),_==null||_.stopPropagation(),C<E-1&&(Z(!1),Y("next"),D==null||D(C+1,C))},it=function(_){!d||!F||(_.keyCode===$e.LEFT?Ae():_.keyCode===$e.RIGHT&&De())},st=function(_){d&&(le!==1?X({x:0,y:0,scale:1},"doubleClick"):G(Ce+I,"doubleClick",_.clientX,_.clientY))};a.useEffect(function(){var U=we(window,"keydown",it,!1);return function(){U.remove()}},[d,F,C]);var Ye=de.createElement($t,q({},H,{width:e.width,height:e.height,imgRef:K,className:"".concat(o,"-img"),alt:r,style:{transform:"translate3d(".concat(P.x,"px, ").concat(P.y,"px, 0) scale3d(").concat(P.flipX?"-":"").concat(le,", ").concat(P.flipY?"-":"").concat(le,", 1) rotate(").concat(ce,"deg)"),transitionDuration:(!A||te)&&"0s"},fallback:f,src:n,onWheel:pe,onMouseDown:be,onDoubleClick:st,onTouchStart:oe,onTouchMove:ue,onTouchEnd:me,onTouchCancel:me})),Xe=O({url:n,alt:r},i);return de.createElement(de.Fragment,null,de.createElement(vt,q({transitionName:N,maskTransitionName:$,closable:!1,keyboard:!0,prefixCls:o,onClose:m,visible:d,classNames:{wrapper:Oe},rootClassName:h,getContainer:x},W,{afterClose:Te}),de.createElement("div",{className:"".concat(o,"-img-wrapper")},j?j(Ye,O({transform:P,image:Xe},Q?{current:C}:{})):Ye)),de.createElement(yt,{visible:d,transform:P,maskTransitionName:$,closeIcon:g,getContainer:x,prefixCls:o,rootClassName:h,icons:S,countRender:R,showSwitch:F,showProgress:ie,current:C,count:E,scale:le,minScale:v,maxScale:y,toolbarRender:V,onSwitchLeft:Ae,onSwitchRight:De,onZoomIn:Le,onZoomOut:fe,onRotateRight:ve,onRotateLeft:ye,onFlipX:Re,onFlipY:Me,onClose:m,onReset:rt,zIndex:W.zIndex!==void 0?W.zIndex+1:void 0,image:Xe}))},ze=["crossOrigin","decoding","draggable","loading","referrerPolicy","sizes","srcSet","useMap","alt"];function _t(t){var e=a.useState({}),o=k(e,2),n=o[0],r=o[1],i=a.useCallback(function(s,l){return r(function(m){return O(O({},m),{},ae({},s,l))}),function(){r(function(m){var d=O({},m);return delete d[s],d})}},[]),f=a.useMemo(function(){return t?t.map(function(s){if(typeof s=="string")return{data:{src:s}};var l={};return Object.keys(s).forEach(function(m){["src"].concat(mt(ze)).includes(m)&&(l[m]=s[m])}),{data:l}}):Object.keys(n).reduce(function(s,l){var m=n[l],d=m.canPreview,c=m.data;return d&&s.push({data:c,id:l}),s},[])},[t,n]);return[f,i,!!t]}var zt=["visible","onVisibleChange","getContainer","current","movable","minScale","maxScale","countRender","closeIcon","onChange","onTransform","toolbarRender","imageRender"],kt=["src"],jt=function(e){var o,n=e.previewPrefixCls,r=n===void 0?"rc-image-preview":n,i=e.children,f=e.icons,s=f===void 0?{}:f,l=e.items,m=e.preview,d=e.fallback,c=Ge(m)==="object"?m:{},S=c.visible,h=c.onVisibleChange,g=c.getContainer,x=c.current,M=c.movable,C=c.minScale,L=c.maxScale,E=c.countRender,R=c.closeIcon,u=c.onChange,I=c.onTransform,p=c.toolbarRender,v=c.imageRender,b=Se(c,zt),y=_t(l),w=k(y,3),N=w[0],z=w[1],$=w[2],j=_e(0,{value:x}),H=k(j,2),V=H[0],B=H[1],D=a.useState(!1),W=k(D,2),K=W[0],Q=W[1],F=((o=N[V])===null||o===void 0?void 0:o.data)||{},ie=F.src,se=Se(F,kt),J=_e(!!S,{value:S,onChange:function(te,oe){h==null||h(te,oe,V)}}),A=k(J,2),Z=A[0],T=A[1],P=a.useState(null),Y=k(P,2),X=Y[0],G=Y[1],re=a.useCallback(function(ee,te,oe,ue){var me=$?N.findIndex(function(ce){return ce.data.src===te}):N.findIndex(function(ce){return ce.id===ee});B(me<0?0:me),T(!0),G({x:oe,y:ue}),Q(!0)},[N,$]);a.useEffect(function(){Z?K||B(0):Q(!1)},[Z]);var he=function(te,oe){B(te),u==null||u(te,oe)},be=function(){T(!1),G(null)},pe=a.useMemo(function(){return{register:z,onPreview:re}},[z,re]);return a.createElement(Ie.Provider,{value:pe},i,a.createElement(ot,q({"aria-hidden":!Z,movable:M,visible:Z,prefixCls:r,closeIcon:R,onClose:be,mousePosition:X,imgCommonProps:se,src:ie,fallback:d,icons:s,minScale:C,maxScale:L,getContainer:g,current:V,count:N.length,countRender:E,onTransform:I,toolbarRender:p,imageRender:v,onChange:he},b)))},Be=0;function At(t,e){var o=a.useState(function(){return Be+=1,String(Be)}),n=k(o,1),r=n[0],i=a.useContext(Ie),f={data:e,canPreview:t};return a.useEffect(function(){if(i)return i.register(r,f)},[]),a.useEffect(function(){i&&i.register(r,f)},[t,e]),r}var Dt=["src","alt","onPreviewClose","prefixCls","previewPrefixCls","placeholder","fallback","width","height","style","preview","className","onClick","onError","wrapperClassName","wrapperStyle","rootClassName"],Yt=["src","visible","onVisibleChange","getContainer","mask","maskClassName","movable","icons","scaleStep","minScale","maxScale","imageRender","toolbarRender"],je=function(e){var o=e.src,n=e.alt,r=e.onPreviewClose,i=e.prefixCls,f=i===void 0?"rc-image":i,s=e.previewPrefixCls,l=s===void 0?"".concat(f,"-preview"):s,m=e.placeholder,d=e.fallback,c=e.width,S=e.height,h=e.style,g=e.preview,x=g===void 0?!0:g,M=e.className,C=e.onClick,L=e.onError,E=e.wrapperClassName,R=e.wrapperStyle,u=e.rootClassName,I=Se(e,Dt),p=m&&m!==!0,v=Ge(x)==="object"?x:{},b=v.src,y=v.visible,w=y===void 0?void 0:y,N=v.onVisibleChange,z=N===void 0?r:N,$=v.getContainer,j=$===void 0?void 0:$,H=v.mask,V=v.maskClassName,B=v.movable,D=v.icons,W=v.scaleStep,K=v.minScale,Q=v.maxScale,F=v.imageRender,ie=v.toolbarRender,se=Se(v,Yt),J=b??o,A=_e(!!w,{value:w,onChange:z}),Z=k(A,2),T=Z[0],P=Z[1],Y=tt({src:o,isCustomPlaceholder:p,fallback:d}),X=k(Y,3),G=X[0],re=X[1],he=X[2],be=a.useState(null),pe=k(be,2),ee=pe[0],te=pe[1],oe=a.useContext(Ie),ue=!!x,me=function(){P(!1),te(null)},ce=ne(f,E,u,ae({},"".concat(f,"-error"),he==="error")),le=a.useMemo(function(){var fe={};return ze.forEach(function(ve){e[ve]!==void 0&&(fe[ve]=e[ve])}),fe},ze.map(function(fe){return e[fe]})),Oe=a.useMemo(function(){return O(O({},le),{},{src:J})},[J,le]),Te=At(ue,Oe),Le=function(ve){var ye=St(ve.target),Re=ye.left,Me=ye.top;oe?oe.onPreview(Te,J,Re,Me):(te({x:Re,y:Me}),P(!0)),C==null||C(ve)};return a.createElement(a.Fragment,null,a.createElement("div",q({},I,{className:ce,onClick:ue?Le:C,style:O({width:c,height:S},R)}),a.createElement("img",q({},le,{className:ne("".concat(f,"-img"),ae({},"".concat(f,"-img-placeholder"),m===!0),M),style:O({height:S},h),ref:G},re,{width:c,height:S,onError:L})),he==="loading"&&a.createElement("div",{"aria-hidden":"true",className:"".concat(f,"-placeholder")},m),H&&ue&&a.createElement("div",{className:ne("".concat(f,"-mask"),V),style:{display:(h==null?void 0:h.display)==="none"?"none":void 0}},H)),!oe&&ue&&a.createElement(ot,q({"aria-hidden":!T,visible:T,prefixCls:l,onClose:me,mousePosition:ee,src:J,alt:n,imageInfo:{width:c,height:S},fallback:d,getContainer:j,icons:D,movable:B,scaleStep:W,minScale:K,maxScale:Q,rootClassName:u,imageRender:F,imgCommonProps:le,toolbarRender:ie},se)))};je.PreviewGroup=jt;var Xt={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"defs",attrs:{},children:[{tag:"style",attrs:{}}]},{tag:"path",attrs:{d:"M672 418H144c-17.7 0-32 14.3-32 32v414c0 17.7 14.3 32 32 32h528c17.7 0 32-14.3 32-32V450c0-17.7-14.3-32-32-32zm-44 402H188V494h440v326z"}},{tag:"path",attrs:{d:"M819.3 328.5c-78.8-100.7-196-153.6-314.6-154.2l-.2-64c0-6.5-7.6-10.1-12.6-6.1l-128 101c-4 3.1-3.9 9.1 0 12.3L492 318.6c5.1 4 12.7.4 12.6-6.1v-63.9c12.9.1 25.9.9 38.8 2.5 42.1 5.2 82.1 18.2 119 38.7 38.1 21.2 71.2 49.7 98.4 84.3 27.1 34.7 46.7 73.7 58.1 115.8a325.95 325.95 0 016.5 140.9h74.9c14.8-103.6-11.3-213-81-302.3z"}}]},name:"rotate-left",theme:"outlined"},Zt=function(e,o){return a.createElement(xe,q({},e,{ref:o,icon:Xt}))},Ht=a.forwardRef(Zt),Vt={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"defs",attrs:{},children:[{tag:"style",attrs:{}}]},{tag:"path",attrs:{d:"M480.5 251.2c13-1.6 25.9-2.4 38.8-2.5v63.9c0 6.5 7.5 10.1 12.6 6.1L660 217.6c4-3.2 4-9.2 0-12.3l-128-101c-5.1-4-12.6-.4-12.6 6.1l-.2 64c-118.6.5-235.8 53.4-314.6 154.2A399.75 399.75 0 00123.5 631h74.9c-.9-5.3-1.7-10.7-2.4-16.1-5.1-42.1-2.1-84.1 8.9-124.8 11.4-42.2 31-81.1 58.1-115.8 27.2-34.7 60.3-63.2 98.4-84.3 37-20.6 76.9-33.6 119.1-38.8z"}},{tag:"path",attrs:{d:"M880 418H352c-17.7 0-32 14.3-32 32v414c0 17.7 14.3 32 32 32h528c17.7 0 32-14.3 32-32V450c0-17.7-14.3-32-32-32zm-44 402H396V494h440v326z"}}]},name:"rotate-right",theme:"outlined"},Bt=function(e,o){return a.createElement(xe,q({},e,{ref:o,icon:Vt}))},Wt=a.forwardRef(Bt),Ft={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M847.9 592H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h605.2L612.9 851c-4.1 5.2-.4 13 6.3 13h72.5c4.9 0 9.5-2.2 12.6-6.1l168.8-214.1c16.5-21 1.6-51.8-25.2-51.8zM872 356H266.8l144.3-183c4.1-5.2.4-13-6.3-13h-72.5c-4.9 0-9.5 2.2-12.6 6.1L150.9 380.2c-16.5 21-1.6 51.8 25.1 51.8h696c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z"}}]},name:"swap",theme:"outlined"},Gt=function(e,o){return a.createElement(xe,q({},e,{ref:o,icon:Ft}))},We=a.forwardRef(Gt),Ut={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M637 443H519V309c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v134H325c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h118v134c0 4.4 3.6 8 8 8h60c4.4 0 8-3.6 8-8V519h118c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8zm284 424L775 721c122.1-148.9 113.6-369.5-26-509-148-148.1-388.4-148.1-537 0-148.1 148.6-148.1 389 0 537 139.5 139.6 360.1 148.1 509 26l146 146c3.2 2.8 8.3 2.8 11 0l43-43c2.8-2.7 2.8-7.8 0-11zM696 696c-118.8 118.7-311.2 118.7-430 0-118.7-118.8-118.7-311.2 0-430 118.8-118.7 311.2-118.7 430 0 118.7 118.8 118.7 311.2 0 430z"}}]},name:"zoom-in",theme:"outlined"},Kt=function(e,o){return a.createElement(xe,q({},e,{ref:o,icon:Ut}))},Qt=a.forwardRef(Kt),qt={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M637 443H325c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h312c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8zm284 424L775 721c122.1-148.9 113.6-369.5-26-509-148-148.1-388.4-148.1-537 0-148.1 148.6-148.1 389 0 537 139.5 139.6 360.1 148.1 509 26l146 146c3.2 2.8 8.3 2.8 11 0l43-43c2.8-2.7 2.8-7.8 0-11zM696 696c-118.8 118.7-311.2 118.7-430 0-118.7-118.8-118.7-311.2 0-430 118.8-118.7 311.2-118.7 430 0 118.7 118.8 118.7 311.2 0 430z"}}]},name:"zoom-out",theme:"outlined"},Jt=function(e,o){return a.createElement(xe,q({},e,{ref:o,icon:qt}))},eo=a.forwardRef(Jt);const ke=t=>({position:t||"absolute",inset:0}),to=t=>{const{iconCls:e,motionDurationSlow:o,paddingXXS:n,marginXXS:r,prefixCls:i,colorTextLightSolid:f}=t;return{position:"absolute",inset:0,display:"flex",alignItems:"center",justifyContent:"center",color:f,background:new ge("#000").setAlpha(.5).toRgbString(),cursor:"pointer",opacity:0,transition:`opacity ${o}`,[`.${i}-mask-info`]:Object.assign(Object.assign({},wt),{padding:`0 ${Ue(n)}`,[e]:{marginInlineEnd:r,svg:{verticalAlign:"baseline"}}})}},oo=t=>{const{previewCls:e,modalMaskBg:o,paddingSM:n,marginXL:r,margin:i,paddingLG:f,previewOperationColorDisabled:s,previewOperationHoverColor:l,motionDurationSlow:m,iconCls:d,colorTextLightSolid:c}=t,S=new ge(o).setAlpha(.1),h=S.clone().setAlpha(.2);return{[`${e}-footer`]:{position:"fixed",bottom:r,left:{_skip_check_:!0,value:0},width:"100%",display:"flex",flexDirection:"column",alignItems:"center",color:t.previewOperationColor},[`${e}-progress`]:{marginBottom:i},[`${e}-close`]:{position:"fixed",top:r,right:{_skip_check_:!0,value:r},display:"flex",color:c,backgroundColor:S.toRgbString(),borderRadius:"50%",padding:n,outline:0,border:0,cursor:"pointer",transition:`all ${m}`,"&:hover":{backgroundColor:h.toRgbString()},[`& > ${d}`]:{fontSize:t.previewOperationSize}},[`${e}-operations`]:{display:"flex",alignItems:"center",padding:`0 ${Ue(f)}`,backgroundColor:S.toRgbString(),borderRadius:100,"&-operation":{marginInlineStart:n,padding:n,cursor:"pointer",transition:`all ${m}`,userSelect:"none",[`&:not(${e}-operations-operation-disabled):hover > ${d}`]:{color:l},"&-disabled":{color:s,cursor:"not-allowed"},"&:first-of-type":{marginInlineStart:0},[`& > ${d}`]:{fontSize:t.previewOperationSize}}}}},no=t=>{const{modalMaskBg:e,iconCls:o,previewOperationColorDisabled:n,previewCls:r,zIndexPopup:i,motionDurationSlow:f}=t,s=new ge(e).setAlpha(.1),l=s.clone().setAlpha(.2);return{[`${r}-switch-left, ${r}-switch-right`]:{position:"fixed",insetBlockStart:"50%",zIndex:t.calc(i).add(1).equal(),display:"flex",alignItems:"center",justifyContent:"center",width:t.imagePreviewSwitchSize,height:t.imagePreviewSwitchSize,marginTop:t.calc(t.imagePreviewSwitchSize).mul(-1).div(2).equal(),color:t.previewOperationColor,background:s.toRgbString(),borderRadius:"50%",transform:"translateY(-50%)",cursor:"pointer",transition:`all ${f}`,userSelect:"none","&:hover":{background:l.toRgbString()},"&-disabled":{"&, &:hover":{color:n,background:"transparent",cursor:"not-allowed",[`> ${o}`]:{cursor:"not-allowed"}}},[`> ${o}`]:{fontSize:t.previewOperationSize}},[`${r}-switch-left`]:{insetInlineStart:t.marginSM},[`${r}-switch-right`]:{insetInlineEnd:t.marginSM}}},ao=t=>{const{motionEaseOut:e,previewCls:o,motionDurationSlow:n,componentCls:r}=t;return[{[`${r}-preview-root`]:{[o]:{height:"100%",textAlign:"center",pointerEvents:"none"},[`${o}-body`]:Object.assign(Object.assign({},ke()),{overflow:"hidden"}),[`${o}-img`]:{maxWidth:"100%",maxHeight:"70%",verticalAlign:"middle",transform:"scale3d(1, 1, 1)",cursor:"grab",transition:`transform ${n} ${e} 0s`,userSelect:"none","&-wrapper":Object.assign(Object.assign({},ke()),{transition:`transform ${n} ${e} 0s`,display:"flex",justifyContent:"center",alignItems:"center","& > *":{pointerEvents:"auto"},"&::before":{display:"inline-block",width:1,height:"50%",marginInlineEnd:-1,content:'""'}})},[`${o}-moving`]:{[`${o}-preview-img`]:{cursor:"grabbing","&-wrapper":{transitionDuration:"0s"}}}}},{[`${r}-preview-root`]:{[`${o}-wrap`]:{zIndex:t.zIndexPopup}}},{[`${r}-preview-operations-wrapper`]:{position:"fixed",zIndex:t.calc(t.zIndexPopup).add(1).equal()},"&":[oo(t),no(t)]}]},ro=t=>{const{componentCls:e}=t;return{[e]:{position:"relative",display:"inline-block",[`${e}-img`]:{width:"100%",height:"auto",verticalAlign:"middle"},[`${e}-img-placeholder`]:{backgroundColor:t.colorBgContainerDisabled,backgroundImage:"url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTQuNSAyLjVoLTEzQS41LjUgMCAwIDAgMSAzdjEwYS41LjUgMCAwIDAgLjUuNWgxM2EuNS41IDAgMCAwIC41LS41VjNhLjUuNSAwIDAgMC0uNS0uNXpNNS4yODEgNC43NWExIDEgMCAwIDEgMCAyIDEgMSAwIDAgMSAwLTJ6bTguMDMgNi44M2EuMTI3LjEyNyAwIDAgMS0uMDgxLjAzSDIuNzY5YS4xMjUuMTI1IDAgMCAxLS4wOTYtLjIwN2wyLjY2MS0zLjE1NmEuMTI2LjEyNiAwIDAgMSAuMTc3LS4wMTZsLjAxNi4wMTZMNy4wOCAxMC4wOWwyLjQ3LTIuOTNhLjEyNi4xMjYgMCAwIDEgLjE3Ny0uMDE2bC4wMTUuMDE2IDMuNTg4IDQuMjQ0YS4xMjcuMTI3IDAgMCAxLS4wMi4xNzV6IiBmaWxsPSIjOEM4QzhDIiBmaWxsLXJ1bGU9Im5vbnplcm8iLz48L3N2Zz4=')",backgroundRepeat:"no-repeat",backgroundPosition:"center center",backgroundSize:"30%"},[`${e}-mask`]:Object.assign({},to(t)),[`${e}-mask:hover`]:{opacity:1},[`${e}-placeholder`]:Object.assign({},ke())}}},io=t=>{const{previewCls:e}=t;return{[`${e}-root`]:ht(t,"zoom"),"&":pt(t,!0)}},so=t=>({zIndexPopup:t.zIndexPopupBase+80,previewOperationColor:new ge(t.colorTextLightSolid).setAlpha(.65).toRgbString(),previewOperationHoverColor:new ge(t.colorTextLightSolid).setAlpha(.85).toRgbString(),previewOperationColorDisabled:new ge(t.colorTextLightSolid).setAlpha(.25).toRgbString(),previewOperationSize:t.fontSizeIcon*1.5}),nt=dt("Image",t=>{const e=`${t.componentCls}-preview`,o=Ze(t,{previewCls:e,modalMaskBg:new ge("#000").setAlpha(.45).toRgbString(),imagePreviewSwitchSize:t.controlHeightLG});return[ro(o),ao(o),gt(Ze(o,{componentCls:e})),io(o)]},so);var co=function(t,e){var o={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.indexOf(n)<0&&(o[n]=t[n]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,n=Object.getOwnPropertySymbols(t);r<n.length;r++)e.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(t,n[r])&&(o[n[r]]=t[n[r]]);return o};const at={rotateLeft:a.createElement(Ht,null),rotateRight:a.createElement(Wt,null),zoomIn:a.createElement(Qt,null),zoomOut:a.createElement(eo,null),close:a.createElement(Ct,null),left:a.createElement(xt,null),right:a.createElement(It,null),flipX:a.createElement(We,null),flipY:a.createElement(We,{rotate:90})},lo=t=>{var{previewPrefixCls:e,preview:o}=t,n=co(t,["previewPrefixCls","preview"]);const{getPrefixCls:r}=a.useContext(Ke),i=r("image",e),f=`${i}-preview`,s=r(),l=Qe(i),[m,d,c]=nt(i,l),[S]=qe("ImagePreview",typeof o=="object"?o.zIndex:void 0),h=a.useMemo(()=>{var g;if(o===!1)return o;const x=typeof o=="object"?o:{},M=ne(d,c,l,(g=x.rootClassName)!==null&&g!==void 0?g:"");return Object.assign(Object.assign({},x),{transitionName:Ee(s,"zoom",x.transitionName),maskTransitionName:Ee(s,"fade",x.maskTransitionName),rootClassName:M,zIndex:S})},[o]);return m(a.createElement(je.PreviewGroup,Object.assign({preview:h,previewPrefixCls:f,icons:at},n)))},uo=lo;var Fe=function(t,e){var o={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.indexOf(n)<0&&(o[n]=t[n]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,n=Object.getOwnPropertySymbols(t);r<n.length;r++)e.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(t,n[r])&&(o[n[r]]=t[n[r]]);return o};const fo=t=>{var e;const{prefixCls:o,preview:n,className:r,rootClassName:i,style:f}=t,s=Fe(t,["prefixCls","preview","className","rootClassName","style"]),{getPrefixCls:l,locale:m=He,getPopupContainer:d,image:c}=a.useContext(Ke),S=l("image",o),h=l(),g=m.Image||He.Image,x=Qe(S),[M,C,L]=nt(S,x),E=ne(i,C,L,x),R=ne(r,C,c==null?void 0:c.className),[u]=qe("ImagePreview",typeof n=="object"?n.zIndex:void 0),I=a.useMemo(()=>{var v;if(n===!1)return n;const b=typeof n=="object"?n:{},{getContainer:y,closeIcon:w}=b,N=Fe(b,["getContainer","closeIcon"]);return Object.assign(Object.assign({mask:a.createElement("div",{className:`${S}-mask-info`},a.createElement(bt,null),g==null?void 0:g.preview),icons:at},N),{getContainer:y??d,transitionName:Ee(h,"zoom",b.transitionName),maskTransitionName:Ee(h,"fade",b.maskTransitionName),zIndex:u,closeIcon:w??((v=c==null?void 0:c.preview)===null||v===void 0?void 0:v.closeIcon)})},[n,g,(e=c==null?void 0:c.preview)===null||e===void 0?void 0:e.closeIcon]),p=Object.assign(Object.assign({},c==null?void 0:c.style),f);return M(a.createElement(je,Object.assign({prefixCls:S,preview:I,rootClassName:E,className:R,style:p},s)))};fo.PreviewGroup=uo;export{fo as I};
