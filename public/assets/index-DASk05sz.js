import{r as a,o as ne,X as ce,C as ct,P as lt,d as E,W as ze,j as D,V as ut,w as ft,n as be,$ as he,g as oe,bw as vt,h as mt,e as Ge,I as xe,E as dt,F as Ze,a4 as Ce,bx as gt,G as pt,aa as ht,a2 as Ct,D as Ue,ab as wt,J as Ke,a6 as Qe,O as qe,Q as Pe,bj as He}from"./index-BDuAyY7p.js";import{R as St}from"./EyeOutlined-Vc6hqBQj.js";import{g as Je,a as we,b as bt}from"./addEventListener-DgnPC-gQ.js";import{l as ke,am as xt,$ as It}from"./MyApp-IVuV4tYN.js";var Ie=a.createContext(null),yt=function(e){var n=e.visible,o=e.maskTransitionName,r=e.getContainer,i=e.prefixCls,f=e.rootClassName,s=e.icons,l=e.countRender,v=e.showSwitch,d=e.showProgress,c=e.current,S=e.transform,g=e.count,p=e.scale,x=e.minScale,R=e.maxScale,w=e.closeIcon,O=e.onActive,M=e.onClose,N=e.onZoomIn,u=e.onZoomOut,I=e.onRotateRight,C=e.onRotateLeft,m=e.onFlipX,b=e.onFlipY,y=e.onReset,h=e.toolbarRender,P=e.zIndex,L=e.image,T=a.useContext(Ie),Y=s.rotateLeft,V=s.rotateRight,B=s.zoomIn,W=s.zoomOut,Q=s.close,H=s.left,F=s.right,q=s.flipX,G=s.flipY,ie="".concat(i,"-operations-operation");a.useEffect(function(){var _=function(k){k.keyCode===ze.ESC&&M()};return n&&window.addEventListener("keydown",_),function(){window.removeEventListener("keydown",_)}},[n]);var J=function(z,k){z.preventDefault(),z.stopPropagation(),O(k)},A=a.useCallback(function(_){var z=_.type,k=_.disabled,Z=_.onClick,j=_.icon;return a.createElement("div",{key:z,className:ne(ie,"".concat(i,"-operations-operation-").concat(z),ce({},"".concat(i,"-operations-operation-disabled"),!!k)),onClick:Z},j)},[ie,i]),se=v?A({icon:H,onClick:function(z){return J(z,-1)},type:"prev",disabled:c===0}):void 0,ee=v?A({icon:F,onClick:function(z){return J(z,1)},type:"next",disabled:c===g-1}):void 0,U=A({icon:G,onClick:b,type:"flipY"}),$=A({icon:q,onClick:m,type:"flipX"}),ae=A({icon:Y,onClick:C,type:"rotateLeft"}),X=A({icon:V,onClick:I,type:"rotateRight"}),K=A({icon:W,onClick:u,type:"zoomOut",disabled:p<=x}),re=A({icon:B,onClick:N,type:"zoomIn",disabled:p===R}),le=a.createElement("div",{className:"".concat(i,"-operations")},U,$,ae,X,K,re);return a.createElement(ct,{visible:n,motionName:o},function(_){var z=_.className,k=_.style;return a.createElement(lt,{open:!0,getContainer:r??document.body},a.createElement("div",{className:ne("".concat(i,"-operations-wrapper"),z,f),style:E(E({},k),{},{zIndex:P})},w===null?null:a.createElement("button",{className:"".concat(i,"-close"),onClick:M},w||Q),v&&a.createElement(a.Fragment,null,a.createElement("div",{className:ne("".concat(i,"-switch-left"),ce({},"".concat(i,"-switch-left-disabled"),c===0)),onClick:function(j){return J(j,-1)}},H),a.createElement("div",{className:ne("".concat(i,"-switch-right"),ce({},"".concat(i,"-switch-right-disabled"),c===g-1)),onClick:function(j){return J(j,1)}},F)),a.createElement("div",{className:"".concat(i,"-footer")},d&&a.createElement("div",{className:"".concat(i,"-progress")},l?l(c+1,g):"".concat(c+1," / ").concat(g)),h?h(le,E(E({icons:{prevIcon:se,nextIcon:ee,flipYIcon:U,flipXIcon:$,rotateLeftIcon:ae,rotateRightIcon:X,zoomOutIcon:K,zoomInIcon:re},actions:{onActive:O,onFlipY:b,onFlipX:m,onRotateLeft:C,onRotateRight:I,onZoomOut:u,onZoomIn:N,onReset:y,onClose:M},transform:S},T?{current:c,total:g}:{}),{},{image:L})):le)))})},Ee={x:0,y:0,rotate:0,scale:1,flipX:!1,flipY:!1};function Rt(t,e,n,o){var r=a.useRef(null),i=a.useRef([]),f=a.useState(Ee),s=D(f,2),l=s[0],v=s[1],d=function(p){v(Ee),ut(Ee,l)||o==null||o({transform:Ee,action:p})},c=function(p,x){r.current===null&&(i.current=[],r.current=ft(function(){v(function(R){var w=R;return i.current.forEach(function(O){w=E(E({},w),O)}),r.current=null,o==null||o({transform:w,action:x}),w})})),i.current.push(E(E({},l),p))},S=function(p,x,R,w,O){var M=t.current,N=M.width,u=M.height,I=M.offsetWidth,C=M.offsetHeight,m=M.offsetLeft,b=M.offsetTop,y=p,h=l.scale*p;h>n?(h=n,y=n/l.scale):h<e&&(h=O?h:e,y=h/l.scale);var P=R??innerWidth/2,L=w??innerHeight/2,T=y-1,Y=T*N*.5,V=T*u*.5,B=T*(P-l.x-m),W=T*(L-l.y-b),Q=l.x-(B-Y),H=l.y-(W-V);if(p<1&&h===1){var F=I*h,q=C*h,G=Je(),ie=G.width,J=G.height;F<=ie&&q<=J&&(Q=0,H=0)}c({x:Q,y:H,scale:h},x)};return{transform:l,resetTransform:d,updateTransform:c,dispatchZoomChange:S}}function Ve(t,e,n,o){var r=e+n,i=(n-o)/2;if(n>o){if(e>0)return ce({},t,i);if(e<0&&r<o)return ce({},t,-i)}else if(e<0||r>o)return ce({},t,e<0?i:-i);return{}}function et(t,e,n,o){var r=Je(),i=r.width,f=r.height,s=null;return t<=i&&e<=f?s={x:0,y:0}:(t>i||e>f)&&(s=E(E({},Ve("x",n,t,i)),Ve("y",o,e,f))),s}var Se=1,Mt=1;function Nt(t,e,n,o,r,i,f){var s=r.rotate,l=r.scale,v=r.x,d=r.y,c=a.useState(!1),S=D(c,2),g=S[0],p=S[1],x=a.useRef({diffX:0,diffY:0,transformX:0,transformY:0}),R=function(u){!e||u.button!==0||(u.preventDefault(),u.stopPropagation(),x.current={diffX:u.pageX-v,diffY:u.pageY-d,transformX:v,transformY:d},p(!0))},w=function(u){n&&g&&i({x:u.pageX-x.current.diffX,y:u.pageY-x.current.diffY},"move")},O=function(){if(n&&g){p(!1);var u=x.current,I=u.transformX,C=u.transformY,m=v!==I&&d!==C;if(!m)return;var b=t.current.offsetWidth*l,y=t.current.offsetHeight*l,h=t.current.getBoundingClientRect(),P=h.left,L=h.top,T=s%180!==0,Y=et(T?y:b,T?b:y,P,L);Y&&i(E({},Y),"dragRebound")}},M=function(u){if(!(!n||u.deltaY==0)){var I=Math.abs(u.deltaY/100),C=Math.min(I,Mt),m=Se+C*o;u.deltaY>0&&(m=Se/m),f(m,"wheel",u.clientX,u.clientY)}};return a.useEffect(function(){var N,u,I,C;if(e){I=we(window,"mouseup",O,!1),C=we(window,"mousemove",w,!1);try{window.top!==window.self&&(N=we(window.top,"mouseup",O,!1),u=we(window.top,"mousemove",w,!1))}catch{}}return function(){var m,b,y,h;(m=I)===null||m===void 0||m.remove(),(b=C)===null||b===void 0||b.remove(),(y=N)===null||y===void 0||y.remove(),(h=u)===null||h===void 0||h.remove()}},[n,g,v,d,s,e]),{isMoving:g,onMouseDown:R,onMouseMove:w,onMouseUp:O,onWheel:M}}function Et(t){return new Promise(function(e){var n=document.createElement("img");n.onerror=function(){return e(!1)},n.onload=function(){return e(!0)},n.src=t})}function tt(t){var e=t.src,n=t.isCustomPlaceholder,o=t.fallback,r=a.useState(n?"loading":"normal"),i=D(r,2),f=i[0],s=i[1],l=a.useRef(!1),v=f==="error";a.useEffect(function(){var g=!0;return Et(e).then(function(p){!p&&g&&s("error")}),function(){g=!1}},[e]),a.useEffect(function(){n&&!l.current?s("loading"):v&&s("normal")},[e]);var d=function(){s("normal")},c=function(p){l.current=!1,f==="loading"&&p!==null&&p!==void 0&&p.complete&&(p.naturalWidth||p.naturalHeight)&&(l.current=!0,d())},S=v&&o?{src:o}:{onLoad:d,src:e};return[c,S,f]}function Oe(t,e){var n=t.x-e.x,o=t.y-e.y;return Math.hypot(n,o)}function Pt(t,e,n,o){var r=Oe(t,n),i=Oe(e,o);if(r===0&&i===0)return[t.x,t.y];var f=r/(r+i),s=t.x+f*(e.x-t.x),l=t.y+f*(e.y-t.y);return[s,l]}function Ot(t,e,n,o,r,i,f){var s=r.rotate,l=r.scale,v=r.x,d=r.y,c=a.useState(!1),S=D(c,2),g=S[0],p=S[1],x=a.useRef({point1:{x:0,y:0},point2:{x:0,y:0},eventType:"none"}),R=function(u){x.current=E(E({},x.current),u)},w=function(u){if(e){u.stopPropagation(),p(!0);var I=u.touches,C=I===void 0?[]:I;C.length>1?R({point1:{x:C[0].clientX,y:C[0].clientY},point2:{x:C[1].clientX,y:C[1].clientY},eventType:"touchZoom"}):R({point1:{x:C[0].clientX-v,y:C[0].clientY-d},eventType:"move"})}},O=function(u){var I=u.touches,C=I===void 0?[]:I,m=x.current,b=m.point1,y=m.point2,h=m.eventType;if(C.length>1&&h==="touchZoom"){var P={x:C[0].clientX,y:C[0].clientY},L={x:C[1].clientX,y:C[1].clientY},T=Pt(b,y,P,L),Y=D(T,2),V=Y[0],B=Y[1],W=Oe(P,L)/Oe(b,y);f(W,"touchZoom",V,B,!0),R({point1:P,point2:L,eventType:"touchZoom"})}else h==="move"&&(i({x:C[0].clientX-b.x,y:C[0].clientY-b.y},"move"),R({eventType:"move"}))},M=function(){if(n){if(g&&p(!1),R({eventType:"none"}),o>l)return i({x:0,y:0,scale:o},"touchZoom");var u=t.current.offsetWidth*l,I=t.current.offsetHeight*l,C=t.current.getBoundingClientRect(),m=C.left,b=C.top,y=s%180!==0,h=et(y?I:u,y?u:I,m,b);h&&i(E({},h),"dragRebound")}};return a.useEffect(function(){var N;return n&&e&&(N=we(window,"touchmove",function(u){return u.preventDefault()},{passive:!1})),function(){var u;(u=N)===null||u===void 0||u.remove()}},[n,e]),{isTouching:g,onTouchStart:w,onTouchMove:O,onTouchEnd:M}}var Tt=["fallback","src","imgRef"],$t=["prefixCls","src","alt","imageInfo","fallback","movable","onClose","visible","icons","rootClassName","closeIcon","getContainer","current","count","countRender","scaleStep","minScale","maxScale","transitionName","maskTransitionName","imageRender","imgCommonProps","toolbarRender","onTransform","onChange"],Lt=function(e){var n=e.fallback,o=e.src,r=e.imgRef,i=be(e,Tt),f=tt({src:o,fallback:n}),s=D(f,2),l=s[0],v=s[1];return he.createElement("img",oe({ref:function(c){r.current=c,l(c)}},i,v))},nt=function(e){var n=e.prefixCls,o=e.src,r=e.alt,i=e.imageInfo,f=e.fallback,s=e.movable,l=s===void 0?!0:s,v=e.onClose,d=e.visible,c=e.icons,S=c===void 0?{}:c,g=e.rootClassName,p=e.closeIcon,x=e.getContainer,R=e.current,w=R===void 0?0:R,O=e.count,M=O===void 0?1:O,N=e.countRender,u=e.scaleStep,I=u===void 0?.5:u,C=e.minScale,m=C===void 0?1:C,b=e.maxScale,y=b===void 0?50:b,h=e.transitionName,P=h===void 0?"zoom":h,L=e.maskTransitionName,T=L===void 0?"fade":L,Y=e.imageRender,V=e.imgCommonProps,B=e.toolbarRender,W=e.onTransform,Q=e.onChange,H=be(e,$t),F=a.useRef(),q=a.useContext(Ie),G=q&&M>1,ie=q&&M>=1,J=a.useState(!0),A=D(J,2),se=A[0],ee=A[1],U=Rt(F,m,y,W),$=U.transform,ae=U.resetTransform,X=U.updateTransform,K=U.dispatchZoomChange,re=Nt(F,l,d,I,$,X,K),le=re.isMoving,_=re.onMouseDown,z=re.onWheel,k=Ot(F,l,d,m,$,X,K),Z=k.isTouching,j=k.onTouchStart,ve=k.onTouchMove,pe=k.onTouchEnd,ue=$.rotate,fe=$.scale,Te=ne(ce({},"".concat(n,"-moving"),le));a.useEffect(function(){se||ee(!0)},[se]);var $e=function(){ae("close")},Le=function(){K(Se+I,"zoomIn")},me=function(){K(Se/(Se+I),"zoomOut")},de=function(){X({rotate:ue+90},"rotateRight")},ye=function(){X({rotate:ue-90},"rotateLeft")},Re=function(){X({flipX:!$.flipX},"flipX")},Me=function(){X({flipY:!$.flipY},"flipY")},rt=function(){ae("reset")},_e=function(ge){var Ne=w+ge;!Number.isInteger(Ne)||Ne<0||Ne>M-1||(ee(!1),ae(ge<0?"prev":"next"),Q==null||Q(Ne,w))},it=function(ge){!d||!G||(ge.keyCode===ze.LEFT?_e(-1):ge.keyCode===ze.RIGHT&&_e(1))},st=function(ge){d&&(fe!==1?X({x:0,y:0,scale:1},"doubleClick"):K(Se+I,"doubleClick",ge.clientX,ge.clientY))};a.useEffect(function(){var te=we(window,"keydown",it,!1);return function(){te.remove()}},[d,G,w]);var Ye=he.createElement(Lt,oe({},V,{width:e.width,height:e.height,imgRef:F,className:"".concat(n,"-img"),alt:r,style:{transform:"translate3d(".concat($.x,"px, ").concat($.y,"px, 0) scale3d(").concat($.flipX?"-":"").concat(fe,", ").concat($.flipY?"-":"").concat(fe,", 1) rotate(").concat(ue,"deg)"),transitionDuration:(!se||Z)&&"0s"},fallback:f,src:o,onWheel:z,onMouseDown:_,onDoubleClick:st,onTouchStart:j,onTouchMove:ve,onTouchEnd:pe,onTouchCancel:pe})),Xe=E({url:o,alt:r},i);return he.createElement(he.Fragment,null,he.createElement(vt,oe({transitionName:P,maskTransitionName:T,closable:!1,keyboard:!0,prefixCls:n,onClose:v,visible:d,classNames:{wrapper:Te},rootClassName:g,getContainer:x},H,{afterClose:$e}),he.createElement("div",{className:"".concat(n,"-img-wrapper")},Y?Y(Ye,E({transform:$,image:Xe},q?{current:w}:{})):Ye)),he.createElement(yt,{visible:d,transform:$,maskTransitionName:T,closeIcon:p,getContainer:x,prefixCls:n,rootClassName:g,icons:S,countRender:N,showSwitch:G,showProgress:ie,current:w,count:M,scale:fe,minScale:m,maxScale:y,toolbarRender:B,onActive:_e,onZoomIn:Le,onZoomOut:me,onRotateRight:de,onRotateLeft:ye,onFlipX:Re,onFlipY:Me,onClose:v,onReset:rt,zIndex:H.zIndex!==void 0?H.zIndex+1:void 0,image:Xe}))},Ae=["crossOrigin","decoding","draggable","loading","referrerPolicy","sizes","srcSet","useMap","alt"];function _t(t){var e=a.useState({}),n=D(e,2),o=n[0],r=n[1],i=a.useCallback(function(s,l){return r(function(v){return E(E({},v),{},ce({},s,l))}),function(){r(function(v){var d=E({},v);return delete d[s],d})}},[]),f=a.useMemo(function(){return t?t.map(function(s){if(typeof s=="string")return{data:{src:s}};var l={};return Object.keys(s).forEach(function(v){["src"].concat(mt(Ae)).includes(v)&&(l[v]=s[v])}),{data:l}}):Object.keys(o).reduce(function(s,l){var v=o[l],d=v.canPreview,c=v.data;return d&&s.push({data:c,id:l}),s},[])},[t,o]);return[f,i,!!t]}var zt=["visible","onVisibleChange","getContainer","current","movable","minScale","maxScale","countRender","closeIcon","onChange","onTransform","toolbarRender","imageRender"],kt=["src"],At=function(e){var n,o=e.previewPrefixCls,r=o===void 0?"rc-image-preview":o,i=e.children,f=e.icons,s=f===void 0?{}:f,l=e.items,v=e.preview,d=e.fallback,c=Ge(v)==="object"?v:{},S=c.visible,g=c.onVisibleChange,p=c.getContainer,x=c.current,R=c.movable,w=c.minScale,O=c.maxScale,M=c.countRender,N=c.closeIcon,u=c.onChange,I=c.onTransform,C=c.toolbarRender,m=c.imageRender,b=be(c,zt),y=_t(l),h=D(y,3),P=h[0],L=h[1],T=h[2],Y=ke(0,{value:x}),V=D(Y,2),B=V[0],W=V[1],Q=a.useState(!1),H=D(Q,2),F=H[0],q=H[1],G=((n=P[B])===null||n===void 0?void 0:n.data)||{},ie=G.src,J=be(G,kt),A=ke(!!S,{value:S,onChange:function(Z,j){g==null||g(Z,j,B)}}),se=D(A,2),ee=se[0],U=se[1],$=a.useState(null),ae=D($,2),X=ae[0],K=ae[1],re=a.useCallback(function(k,Z,j,ve){var pe=T?P.findIndex(function(ue){return ue.data.src===Z}):P.findIndex(function(ue){return ue.id===k});W(pe<0?0:pe),U(!0),K({x:j,y:ve}),q(!0)},[P,T]);a.useEffect(function(){ee?F||W(0):q(!1)},[ee]);var le=function(Z,j){W(Z),u==null||u(Z,j)},_=function(){U(!1),K(null)},z=a.useMemo(function(){return{register:L,onPreview:re}},[L,re]);return a.createElement(Ie.Provider,{value:z},i,a.createElement(nt,oe({"aria-hidden":!ee,movable:R,visible:ee,prefixCls:r,closeIcon:N,onClose:_,mousePosition:X,imgCommonProps:J,src:ie,fallback:d,icons:s,minScale:w,maxScale:O,getContainer:p,current:B,count:P.length,countRender:M,onTransform:I,toolbarRender:C,imageRender:m,onChange:le},b)))},Be=0;function jt(t,e){var n=a.useState(function(){return Be+=1,String(Be)}),o=D(n,1),r=o[0],i=a.useContext(Ie),f={data:e,canPreview:t};return a.useEffect(function(){if(i)return i.register(r,f)},[]),a.useEffect(function(){i&&i.register(r,f)},[t,e]),r}var Dt=["src","alt","onPreviewClose","prefixCls","previewPrefixCls","placeholder","fallback","width","height","style","preview","className","onClick","onError","wrapperClassName","wrapperStyle","rootClassName"],Yt=["src","visible","onVisibleChange","getContainer","mask","maskClassName","movable","icons","scaleStep","minScale","maxScale","imageRender","toolbarRender"],De=function(e){var n=e.src,o=e.alt,r=e.onPreviewClose,i=e.prefixCls,f=i===void 0?"rc-image":i,s=e.previewPrefixCls,l=s===void 0?"".concat(f,"-preview"):s,v=e.placeholder,d=e.fallback,c=e.width,S=e.height,g=e.style,p=e.preview,x=p===void 0?!0:p,R=e.className,w=e.onClick,O=e.onError,M=e.wrapperClassName,N=e.wrapperStyle,u=e.rootClassName,I=be(e,Dt),C=v&&v!==!0,m=Ge(x)==="object"?x:{},b=m.src,y=m.visible,h=y===void 0?void 0:y,P=m.onVisibleChange,L=P===void 0?r:P,T=m.getContainer,Y=T===void 0?void 0:T,V=m.mask,B=m.maskClassName,W=m.movable,Q=m.icons,H=m.scaleStep,F=m.minScale,q=m.maxScale,G=m.imageRender,ie=m.toolbarRender,J=be(m,Yt),A=b??n,se=ke(!!h,{value:h,onChange:L}),ee=D(se,2),U=ee[0],$=ee[1],ae=tt({src:n,isCustomPlaceholder:C,fallback:d}),X=D(ae,3),K=X[0],re=X[1],le=X[2],_=a.useState(null),z=D(_,2),k=z[0],Z=z[1],j=a.useContext(Ie),ve=!!x,pe=function(){$(!1),Z(null)},ue=ne(f,M,u,ce({},"".concat(f,"-error"),le==="error")),fe=a.useMemo(function(){var me={};return Ae.forEach(function(de){e[de]!==void 0&&(me[de]=e[de])}),me},Ae.map(function(me){return e[me]})),Te=a.useMemo(function(){return E(E({},fe),{},{src:A})},[A,fe]),$e=jt(ve,Te),Le=function(de){var ye=bt(de.target),Re=ye.left,Me=ye.top;j?j.onPreview($e,A,Re,Me):(Z({x:Re,y:Me}),$(!0)),w==null||w(de)};return a.createElement(a.Fragment,null,a.createElement("div",oe({},I,{className:ue,onClick:ve?Le:w,style:E({width:c,height:S},N)}),a.createElement("img",oe({},fe,{className:ne("".concat(f,"-img"),ce({},"".concat(f,"-img-placeholder"),v===!0),R),style:E({height:S},g),ref:K},re,{width:c,height:S,onError:O})),le==="loading"&&a.createElement("div",{"aria-hidden":"true",className:"".concat(f,"-placeholder")},v),V&&ve&&a.createElement("div",{className:ne("".concat(f,"-mask"),B),style:{display:(g==null?void 0:g.display)==="none"?"none":void 0}},V)),!j&&ve&&a.createElement(nt,oe({"aria-hidden":!U,visible:U,prefixCls:l,onClose:pe,mousePosition:k,src:A,alt:o,imageInfo:{width:c,height:S},fallback:d,getContainer:Y,icons:Q,movable:W,scaleStep:H,minScale:F,maxScale:q,rootClassName:u,imageRender:G,imgCommonProps:fe,toolbarRender:ie},J)))};De.PreviewGroup=At;var Xt={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"defs",attrs:{},children:[{tag:"style",attrs:{}}]},{tag:"path",attrs:{d:"M672 418H144c-17.7 0-32 14.3-32 32v414c0 17.7 14.3 32 32 32h528c17.7 0 32-14.3 32-32V450c0-17.7-14.3-32-32-32zm-44 402H188V494h440v326z"}},{tag:"path",attrs:{d:"M819.3 328.5c-78.8-100.7-196-153.6-314.6-154.2l-.2-64c0-6.5-7.6-10.1-12.6-6.1l-128 101c-4 3.1-3.9 9.1 0 12.3L492 318.6c5.1 4 12.7.4 12.6-6.1v-63.9c12.9.1 25.9.9 38.8 2.5 42.1 5.2 82.1 18.2 119 38.7 38.1 21.2 71.2 49.7 98.4 84.3 27.1 34.7 46.7 73.7 58.1 115.8a325.95 325.95 0 016.5 140.9h74.9c14.8-103.6-11.3-213-81-302.3z"}}]},name:"rotate-left",theme:"outlined"},Zt=function(e,n){return a.createElement(xe,oe({},e,{ref:n,icon:Xt}))},Ht=a.forwardRef(Zt),Vt={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"defs",attrs:{},children:[{tag:"style",attrs:{}}]},{tag:"path",attrs:{d:"M480.5 251.2c13-1.6 25.9-2.4 38.8-2.5v63.9c0 6.5 7.5 10.1 12.6 6.1L660 217.6c4-3.2 4-9.2 0-12.3l-128-101c-5.1-4-12.6-.4-12.6 6.1l-.2 64c-118.6.5-235.8 53.4-314.6 154.2A399.75 399.75 0 00123.5 631h74.9c-.9-5.3-1.7-10.7-2.4-16.1-5.1-42.1-2.1-84.1 8.9-124.8 11.4-42.2 31-81.1 58.1-115.8 27.2-34.7 60.3-63.2 98.4-84.3 37-20.6 76.9-33.6 119.1-38.8z"}},{tag:"path",attrs:{d:"M880 418H352c-17.7 0-32 14.3-32 32v414c0 17.7 14.3 32 32 32h528c17.7 0 32-14.3 32-32V450c0-17.7-14.3-32-32-32zm-44 402H396V494h440v326z"}}]},name:"rotate-right",theme:"outlined"},Bt=function(e,n){return a.createElement(xe,oe({},e,{ref:n,icon:Vt}))},Wt=a.forwardRef(Bt),Ft={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M847.9 592H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h605.2L612.9 851c-4.1 5.2-.4 13 6.3 13h72.5c4.9 0 9.5-2.2 12.6-6.1l168.8-214.1c16.5-21 1.6-51.8-25.2-51.8zM872 356H266.8l144.3-183c4.1-5.2.4-13-6.3-13h-72.5c-4.9 0-9.5 2.2-12.6 6.1L150.9 380.2c-16.5 21-1.6 51.8 25.1 51.8h696c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z"}}]},name:"swap",theme:"outlined"},Gt=function(e,n){return a.createElement(xe,oe({},e,{ref:n,icon:Ft}))},We=a.forwardRef(Gt),Ut={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M637 443H519V309c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v134H325c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h118v134c0 4.4 3.6 8 8 8h60c4.4 0 8-3.6 8-8V519h118c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8zm284 424L775 721c122.1-148.9 113.6-369.5-26-509-148-148.1-388.4-148.1-537 0-148.1 148.6-148.1 389 0 537 139.5 139.6 360.1 148.1 509 26l146 146c3.2 2.8 8.3 2.8 11 0l43-43c2.8-2.7 2.8-7.8 0-11zM696 696c-118.8 118.7-311.2 118.7-430 0-118.7-118.8-118.7-311.2 0-430 118.8-118.7 311.2-118.7 430 0 118.7 118.8 118.7 311.2 0 430z"}}]},name:"zoom-in",theme:"outlined"},Kt=function(e,n){return a.createElement(xe,oe({},e,{ref:n,icon:Ut}))},Qt=a.forwardRef(Kt),qt={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M637 443H325c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h312c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8zm284 424L775 721c122.1-148.9 113.6-369.5-26-509-148-148.1-388.4-148.1-537 0-148.1 148.6-148.1 389 0 537 139.5 139.6 360.1 148.1 509 26l146 146c3.2 2.8 8.3 2.8 11 0l43-43c2.8-2.7 2.8-7.8 0-11zM696 696c-118.8 118.7-311.2 118.7-430 0-118.7-118.8-118.7-311.2 0-430 118.8-118.7 311.2-118.7 430 0 118.7 118.8 118.7 311.2 0 430z"}}]},name:"zoom-out",theme:"outlined"},Jt=function(e,n){return a.createElement(xe,oe({},e,{ref:n,icon:qt}))},en=a.forwardRef(Jt);const je=t=>({position:t||"absolute",inset:0}),tn=t=>{const{iconCls:e,motionDurationSlow:n,paddingXXS:o,marginXXS:r,prefixCls:i,colorTextLightSolid:f}=t;return{position:"absolute",inset:0,display:"flex",alignItems:"center",justifyContent:"center",color:f,background:new Ce("#000").setAlpha(.5).toRgbString(),cursor:"pointer",opacity:0,transition:`opacity ${n}`,[`.${i}-mask-info`]:Object.assign(Object.assign({},Ct),{padding:`0 ${Ue(o)}`,[e]:{marginInlineEnd:r,svg:{verticalAlign:"baseline"}}})}},nn=t=>{const{previewCls:e,modalMaskBg:n,paddingSM:o,marginXL:r,margin:i,paddingLG:f,previewOperationColorDisabled:s,previewOperationHoverColor:l,motionDurationSlow:v,iconCls:d,colorTextLightSolid:c}=t,S=new Ce(n).setAlpha(.1),g=S.clone().setAlpha(.2);return{[`${e}-footer`]:{position:"fixed",bottom:r,left:{_skip_check_:!0,value:"50%"},display:"flex",flexDirection:"column",alignItems:"center",color:t.previewOperationColor,transform:"translateX(-50%)"},[`${e}-progress`]:{marginBottom:i},[`${e}-close`]:{position:"fixed",top:r,right:{_skip_check_:!0,value:r},display:"flex",color:c,backgroundColor:S.toRgbString(),borderRadius:"50%",padding:o,outline:0,border:0,cursor:"pointer",transition:`all ${v}`,"&:hover":{backgroundColor:g.toRgbString()},[`& > ${d}`]:{fontSize:t.previewOperationSize}},[`${e}-operations`]:{display:"flex",alignItems:"center",padding:`0 ${Ue(f)}`,backgroundColor:S.toRgbString(),borderRadius:100,"&-operation":{marginInlineStart:o,padding:o,cursor:"pointer",transition:`all ${v}`,userSelect:"none",[`&:not(${e}-operations-operation-disabled):hover > ${d}`]:{color:l},"&-disabled":{color:s,cursor:"not-allowed"},"&:first-of-type":{marginInlineStart:0},[`& > ${d}`]:{fontSize:t.previewOperationSize}}}}},on=t=>{const{modalMaskBg:e,iconCls:n,previewOperationColorDisabled:o,previewCls:r,zIndexPopup:i,motionDurationSlow:f}=t,s=new Ce(e).setAlpha(.1),l=s.clone().setAlpha(.2);return{[`${r}-switch-left, ${r}-switch-right`]:{position:"fixed",insetBlockStart:"50%",zIndex:t.calc(i).add(1).equal(),display:"flex",alignItems:"center",justifyContent:"center",width:t.imagePreviewSwitchSize,height:t.imagePreviewSwitchSize,marginTop:t.calc(t.imagePreviewSwitchSize).mul(-1).div(2).equal(),color:t.previewOperationColor,background:s.toRgbString(),borderRadius:"50%",transform:"translateY(-50%)",cursor:"pointer",transition:`all ${f}`,userSelect:"none","&:hover":{background:l.toRgbString()},"&-disabled":{"&, &:hover":{color:o,background:"transparent",cursor:"not-allowed",[`> ${n}`]:{cursor:"not-allowed"}}},[`> ${n}`]:{fontSize:t.previewOperationSize}},[`${r}-switch-left`]:{insetInlineStart:t.marginSM},[`${r}-switch-right`]:{insetInlineEnd:t.marginSM}}},an=t=>{const{motionEaseOut:e,previewCls:n,motionDurationSlow:o,componentCls:r}=t;return[{[`${r}-preview-root`]:{[n]:{height:"100%",textAlign:"center",pointerEvents:"none"},[`${n}-body`]:Object.assign(Object.assign({},je()),{overflow:"hidden"}),[`${n}-img`]:{maxWidth:"100%",maxHeight:"70%",verticalAlign:"middle",transform:"scale3d(1, 1, 1)",cursor:"grab",transition:`transform ${o} ${e} 0s`,userSelect:"none","&-wrapper":Object.assign(Object.assign({},je()),{transition:`transform ${o} ${e} 0s`,display:"flex",justifyContent:"center",alignItems:"center","& > *":{pointerEvents:"auto"},"&::before":{display:"inline-block",width:1,height:"50%",marginInlineEnd:-1,content:'""'}})},[`${n}-moving`]:{[`${n}-preview-img`]:{cursor:"grabbing","&-wrapper":{transitionDuration:"0s"}}}}},{[`${r}-preview-root`]:{[`${n}-wrap`]:{zIndex:t.zIndexPopup}}},{[`${r}-preview-operations-wrapper`]:{position:"fixed",zIndex:t.calc(t.zIndexPopup).add(1).equal()},"&":[nn(t),on(t)]}]},rn=t=>{const{componentCls:e}=t;return{[e]:{position:"relative",display:"inline-block",[`${e}-img`]:{width:"100%",height:"auto",verticalAlign:"middle"},[`${e}-img-placeholder`]:{backgroundColor:t.colorBgContainerDisabled,backgroundImage:"url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTQuNSAyLjVoLTEzQS41LjUgMCAwIDAgMSAzdjEwYS41LjUgMCAwIDAgLjUuNWgxM2EuNS41IDAgMCAwIC41LS41VjNhLjUuNSAwIDAgMC0uNS0uNXpNNS4yODEgNC43NWExIDEgMCAwIDEgMCAyIDEgMSAwIDAgMSAwLTJ6bTguMDMgNi44M2EuMTI3LjEyNyAwIDAgMS0uMDgxLjAzSDIuNzY5YS4xMjUuMTI1IDAgMCAxLS4wOTYtLjIwN2wyLjY2MS0zLjE1NmEuMTI2LjEyNiAwIDAgMSAuMTc3LS4wMTZsLjAxNi4wMTZMNy4wOCAxMC4wOWwyLjQ3LTIuOTNhLjEyNi4xMjYgMCAwIDEgLjE3Ny0uMDE2bC4wMTUuMDE2IDMuNTg4IDQuMjQ0YS4xMjcuMTI3IDAgMCAxLS4wMi4xNzV6IiBmaWxsPSIjOEM4QzhDIiBmaWxsLXJ1bGU9Im5vbnplcm8iLz48L3N2Zz4=')",backgroundRepeat:"no-repeat",backgroundPosition:"center center",backgroundSize:"30%"},[`${e}-mask`]:Object.assign({},tn(t)),[`${e}-mask:hover`]:{opacity:1},[`${e}-placeholder`]:Object.assign({},je())}}},sn=t=>{const{previewCls:e}=t;return{[`${e}-root`]:pt(t,"zoom"),"&":ht(t,!0)}},cn=t=>({zIndexPopup:t.zIndexPopupBase+80,previewOperationColor:new Ce(t.colorTextLightSolid).setAlpha(.65).toRgbString(),previewOperationHoverColor:new Ce(t.colorTextLightSolid).setAlpha(.85).toRgbString(),previewOperationColorDisabled:new Ce(t.colorTextLightSolid).setAlpha(.25).toRgbString(),previewOperationSize:t.fontSizeIcon*1.5}),ot=dt("Image",t=>{const e=`${t.componentCls}-preview`,n=Ze(t,{previewCls:e,modalMaskBg:new Ce("#000").setAlpha(.45).toRgbString(),imagePreviewSwitchSize:t.controlHeightLG});return[rn(n),an(n),gt(Ze(n,{componentCls:e})),sn(n)]},cn);var ln=function(t,e){var n={};for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&e.indexOf(o)<0&&(n[o]=t[o]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,o=Object.getOwnPropertySymbols(t);r<o.length;r++)e.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(t,o[r])&&(n[o[r]]=t[o[r]]);return n};const at={rotateLeft:a.createElement(Ht,null),rotateRight:a.createElement(Wt,null),zoomIn:a.createElement(Qt,null),zoomOut:a.createElement(en,null),close:a.createElement(wt,null),left:a.createElement(xt,null),right:a.createElement(It,null),flipX:a.createElement(We,null),flipY:a.createElement(We,{rotate:90})},un=t=>{var{previewPrefixCls:e,preview:n}=t,o=ln(t,["previewPrefixCls","preview"]);const{getPrefixCls:r}=a.useContext(Ke),i=r("image",e),f=`${i}-preview`,s=r(),l=Qe(i),[v,d,c]=ot(i,l),[S]=qe("ImagePreview",typeof n=="object"?n.zIndex:void 0),g=a.useMemo(()=>{var p;if(n===!1)return n;const x=typeof n=="object"?n:{},R=ne(d,c,l,(p=x.rootClassName)!==null&&p!==void 0?p:"");return Object.assign(Object.assign({},x),{transitionName:Pe(s,"zoom",x.transitionName),maskTransitionName:Pe(s,"fade",x.maskTransitionName),rootClassName:R,zIndex:S})},[n]);return v(a.createElement(De.PreviewGroup,Object.assign({preview:g,previewPrefixCls:f,icons:at},o)))};var Fe=function(t,e){var n={};for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&e.indexOf(o)<0&&(n[o]=t[o]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,o=Object.getOwnPropertySymbols(t);r<o.length;r++)e.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(t,o[r])&&(n[o[r]]=t[o[r]]);return n};const fn=t=>{var e;const{prefixCls:n,preview:o,className:r,rootClassName:i,style:f}=t,s=Fe(t,["prefixCls","preview","className","rootClassName","style"]),{getPrefixCls:l,locale:v=He,getPopupContainer:d,image:c}=a.useContext(Ke),S=l("image",n),g=l(),p=v.Image||He.Image,x=Qe(S),[R,w,O]=ot(S,x),M=ne(i,w,O,x),N=ne(r,w,c==null?void 0:c.className),[u]=qe("ImagePreview",typeof o=="object"?o.zIndex:void 0),I=a.useMemo(()=>{var m;if(o===!1)return o;const b=typeof o=="object"?o:{},{getContainer:y,closeIcon:h,rootClassName:P}=b,L=Fe(b,["getContainer","closeIcon","rootClassName"]);return Object.assign(Object.assign({mask:a.createElement("div",{className:`${S}-mask-info`},a.createElement(St,null),p==null?void 0:p.preview),icons:at},L),{rootClassName:ne(M,P),getContainer:y??d,transitionName:Pe(g,"zoom",b.transitionName),maskTransitionName:Pe(g,"fade",b.maskTransitionName),zIndex:u,closeIcon:h??((m=c==null?void 0:c.preview)===null||m===void 0?void 0:m.closeIcon)})},[o,p,(e=c==null?void 0:c.preview)===null||e===void 0?void 0:e.closeIcon]),C=Object.assign(Object.assign({},c==null?void 0:c.style),f);return R(a.createElement(De,Object.assign({prefixCls:S,preview:I,rootClassName:M,className:N,style:C},s)))};fn.PreviewGroup=un;export{fn as I};
