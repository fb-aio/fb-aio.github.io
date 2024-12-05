import{bG as Oe}from"./index-BDuAyY7p.js";import{C as ae,D as re,H as we}from"./MyApp-IVuV4tYN.js";var z={};const Se={},pe=Object.freeze(Object.defineProperty({__proto__:null,default:Se},Symbol.toStringTag,{value:"Module"})),de=Oe(pe);var Te;function Ke(){return Te||(Te=1,function(l){(function(u){u.parser=function(t,e){return new i(t,e)},u.SAXParser=i,u.SAXStream=F,u.createStream=O,u.MAX_BUFFER_LENGTH=64*1024;var d=["comment","sgmlDecl","textNode","tagName","doctype","procInstName","procInstBody","entity","attribName","attribValue","cdata","script"];u.EVENTS=["text","processinginstruction","sgmldeclaration","doctype","comment","opentagstart","attribute","opentag","closetag","opencdata","cdata","closecdata","error","end","ready","script","opennamespace","closenamespace"];function i(t,e){if(!(this instanceof i))return new i(t,e);var o=this;y(o),o.q=o.c="",o.bufferCheckPosition=u.MAX_BUFFER_LENGTH,o.opt=e||{},o.opt.lowercase=o.opt.lowercase||o.opt.lowercasetags,o.looseCase=o.opt.lowercase?"toLowerCase":"toUpperCase",o.tags=[],o.closed=o.closedRoot=o.sawRoot=!1,o.tag=o.error=null,o.strict=!!t,o.noscript=!!(t||o.opt.noscript),o.state=r.BEGIN,o.strictEntities=o.opt.strictEntities,o.ENTITIES=o.strictEntities?Object.create(u.XML_ENTITIES):Object.create(u.ENTITIES),o.attribList=[],o.opt.xmlns&&(o.ns=Object.create(U)),o.opt.unquotedAttributeValues===void 0&&(o.opt.unquotedAttributeValues=!t),o.trackPosition=o.opt.position!==!1,o.trackPosition&&(o.position=o.line=o.column=0),q(o,"onready")}Object.create||(Object.create=function(t){function e(){}e.prototype=t;var o=new e;return o}),Object.keys||(Object.keys=function(t){var e=[];for(var o in t)t.hasOwnProperty(o)&&e.push(o);return e});function E(t){for(var e=Math.max(u.MAX_BUFFER_LENGTH,10),o=0,s=0,N=d.length;s<N;s++){var x=t[d[s]].length;if(x>e)switch(d[s]){case"textNode":j(t);break;case"cdata":C(t,"oncdata",t.cdata),t.cdata="";break;case"script":C(t,"onscript",t.script),t.script="";break;default:k(t,"Max buffer length exceeded: "+d[s])}o=Math.max(o,x)}var D=u.MAX_BUFFER_LENGTH-o;t.bufferCheckPosition=D+t.position}function y(t){for(var e=0,o=d.length;e<o;e++)t[d[e]]=""}function A(t){j(t),t.cdata!==""&&(C(t,"oncdata",t.cdata),t.cdata=""),t.script!==""&&(C(t,"onscript",t.script),t.script="")}i.prototype={end:function(){oe(this)},write:xe,resume:function(){return this.error=null,this},close:function(){return this.write(null)},flush:function(){A(this)}};var h;try{h=de.Stream}catch{h=function(){}}h||(h=function(){});var I=u.EVENTS.filter(function(t){return t!=="error"&&t!=="end"});function O(t,e){return new F(t,e)}function F(t,e){if(!(this instanceof F))return new F(t,e);h.apply(this),this._parser=new i(t,e),this.writable=!0,this.readable=!0;var o=this;this._parser.onend=function(){o.emit("end")},this._parser.onerror=function(s){o.emit("error",s),o._parser.error=null},this._decoder=null,I.forEach(function(s){Object.defineProperty(o,"on"+s,{get:function(){return o._parser["on"+s]},set:function(N){if(!N)return o.removeAllListeners(s),o._parser["on"+s]=N,N;o.on(s,N)},enumerable:!0,configurable:!1})})}F.prototype=Object.create(h.prototype,{constructor:{value:F}}),F.prototype.write=function(t){if(typeof Buffer=="function"&&typeof Buffer.isBuffer=="function"&&Buffer.isBuffer(t)){if(!this._decoder){var e=de.StringDecoder;this._decoder=new e("utf8")}t=this._decoder.write(t)}return this._parser.write(t.toString()),this.emit("data",t),!0},F.prototype.end=function(t){return t&&t.length&&this.write(t),this._parser.end(),!0},F.prototype.on=function(t,e){var o=this;return!o._parser["on"+t]&&I.indexOf(t)!==-1&&(o._parser["on"+t]=function(){var s=arguments.length===1?[arguments[0]]:Array.apply(null,arguments);s.splice(0,0,t),o.emit.apply(o,s)}),h.prototype.on.call(o,t,e)};var B="[CDATA[",P="DOCTYPE",R="http://www.w3.org/XML/1998/namespace",L="http://www.w3.org/2000/xmlns/",U={xml:R,xmlns:L},S=/[:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,c=/[:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\u00B7\u0300-\u036F\u203F-\u2040.\d-]/,m=/[#:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,a=/[#:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\u00B7\u0300-\u036F\u203F-\u2040.\d-]/;function n(t){return t===" "||t===`
`||t==="\r"||t==="	"}function f(t){return t==='"'||t==="'"}function T(t){return t===">"||n(t)}function g(t,e){return t.test(e)}function _(t,e){return!g(t,e)}var r=0;u.STATE={BEGIN:r++,BEGIN_WHITESPACE:r++,TEXT:r++,TEXT_ENTITY:r++,OPEN_WAKA:r++,SGML_DECL:r++,SGML_DECL_QUOTED:r++,DOCTYPE:r++,DOCTYPE_QUOTED:r++,DOCTYPE_DTD:r++,DOCTYPE_DTD_QUOTED:r++,COMMENT_STARTING:r++,COMMENT:r++,COMMENT_ENDING:r++,COMMENT_ENDED:r++,CDATA:r++,CDATA_ENDING:r++,CDATA_ENDING_2:r++,PROC_INST:r++,PROC_INST_BODY:r++,PROC_INST_ENDING:r++,OPEN_TAG:r++,OPEN_TAG_SLASH:r++,ATTRIB:r++,ATTRIB_NAME:r++,ATTRIB_NAME_SAW_WHITE:r++,ATTRIB_VALUE:r++,ATTRIB_VALUE_QUOTED:r++,ATTRIB_VALUE_CLOSED:r++,ATTRIB_VALUE_UNQUOTED:r++,ATTRIB_VALUE_ENTITY_Q:r++,ATTRIB_VALUE_ENTITY_U:r++,CLOSE_TAG:r++,CLOSE_TAG_SAW_WHITE:r++,SCRIPT:r++,SCRIPT_ENDING:r++},u.XML_ENTITIES={amp:"&",gt:">",lt:"<",quot:'"',apos:"'"},u.ENTITIES={amp:"&",gt:">",lt:"<",quot:'"',apos:"'",AElig:198,Aacute:193,Acirc:194,Agrave:192,Aring:197,Atilde:195,Auml:196,Ccedil:199,ETH:208,Eacute:201,Ecirc:202,Egrave:200,Euml:203,Iacute:205,Icirc:206,Igrave:204,Iuml:207,Ntilde:209,Oacute:211,Ocirc:212,Ograve:210,Oslash:216,Otilde:213,Ouml:214,THORN:222,Uacute:218,Ucirc:219,Ugrave:217,Uuml:220,Yacute:221,aacute:225,acirc:226,aelig:230,agrave:224,aring:229,atilde:227,auml:228,ccedil:231,eacute:233,ecirc:234,egrave:232,eth:240,euml:235,iacute:237,icirc:238,igrave:236,iuml:239,ntilde:241,oacute:243,ocirc:244,ograve:242,oslash:248,otilde:245,ouml:246,szlig:223,thorn:254,uacute:250,ucirc:251,ugrave:249,uuml:252,yacute:253,yuml:255,copy:169,reg:174,nbsp:160,iexcl:161,cent:162,pound:163,curren:164,yen:165,brvbar:166,sect:167,uml:168,ordf:170,laquo:171,not:172,shy:173,macr:175,deg:176,plusmn:177,sup1:185,sup2:178,sup3:179,acute:180,micro:181,para:182,middot:183,cedil:184,ordm:186,raquo:187,frac14:188,frac12:189,frac34:190,iquest:191,times:215,divide:247,OElig:338,oelig:339,Scaron:352,scaron:353,Yuml:376,fnof:402,circ:710,tilde:732,Alpha:913,Beta:914,Gamma:915,Delta:916,Epsilon:917,Zeta:918,Eta:919,Theta:920,Iota:921,Kappa:922,Lambda:923,Mu:924,Nu:925,Xi:926,Omicron:927,Pi:928,Rho:929,Sigma:931,Tau:932,Upsilon:933,Phi:934,Chi:935,Psi:936,Omega:937,alpha:945,beta:946,gamma:947,delta:948,epsilon:949,zeta:950,eta:951,theta:952,iota:953,kappa:954,lambda:955,mu:956,nu:957,xi:958,omicron:959,pi:960,rho:961,sigmaf:962,sigma:963,tau:964,upsilon:965,phi:966,chi:967,psi:968,omega:969,thetasym:977,upsih:978,piv:982,ensp:8194,emsp:8195,thinsp:8201,zwnj:8204,zwj:8205,lrm:8206,rlm:8207,ndash:8211,mdash:8212,lsquo:8216,rsquo:8217,sbquo:8218,ldquo:8220,rdquo:8221,bdquo:8222,dagger:8224,Dagger:8225,bull:8226,hellip:8230,permil:8240,prime:8242,Prime:8243,lsaquo:8249,rsaquo:8250,oline:8254,frasl:8260,euro:8364,image:8465,weierp:8472,real:8476,trade:8482,alefsym:8501,larr:8592,uarr:8593,rarr:8594,darr:8595,harr:8596,crarr:8629,lArr:8656,uArr:8657,rArr:8658,dArr:8659,hArr:8660,forall:8704,part:8706,exist:8707,empty:8709,nabla:8711,isin:8712,notin:8713,ni:8715,prod:8719,sum:8721,minus:8722,lowast:8727,radic:8730,prop:8733,infin:8734,ang:8736,and:8743,or:8744,cap:8745,cup:8746,int:8747,there4:8756,sim:8764,cong:8773,asymp:8776,ne:8800,equiv:8801,le:8804,ge:8805,sub:8834,sup:8835,nsub:8836,sube:8838,supe:8839,oplus:8853,otimes:8855,perp:8869,sdot:8901,lceil:8968,rceil:8969,lfloor:8970,rfloor:8971,lang:9001,rang:9002,loz:9674,spades:9824,clubs:9827,hearts:9829,diams:9830},Object.keys(u.ENTITIES).forEach(function(t){var e=u.ENTITIES[t],o=typeof e=="number"?String.fromCharCode(e):e;u.ENTITIES[t]=o});for(var v in u.STATE)u.STATE[u.STATE[v]]=v;r=u.STATE;function q(t,e,o){t[e]&&t[e](o)}function C(t,e,o){t.textNode&&j(t),q(t,e,o)}function j(t){t.textNode=ce(t.opt,t.textNode),t.textNode&&q(t,"ontext",t.textNode),t.textNode=""}function ce(t,e){return t.trim&&(e=e.trim()),t.normalize&&(e=e.replace(/\s+/g," ")),e}function k(t,e){return j(t),t.trackPosition&&(e+=`
Line: `+t.line+`
Column: `+t.column+`
Char: `+t.c),e=new Error(e),t.error=e,q(t,"onerror",e),t}function oe(t){return t.sawRoot&&!t.closedRoot&&b(t,"Unclosed root tag"),t.state!==r.BEGIN&&t.state!==r.BEGIN_WHITESPACE&&t.state!==r.TEXT&&k(t,"Unexpected end"),j(t),t.c="",t.closed=!0,q(t,"onend"),i.call(t,t.strict,t.opt),t}function b(t,e){if(typeof t!="object"||!(t instanceof i))throw new Error("bad call to strictFail");t.strict&&k(t,e)}function Ie(t){t.strict||(t.tagName=t.tagName[t.looseCase]());var e=t.tags[t.tags.length-1]||t,o=t.tag={name:t.tagName,attributes:{}};t.opt.xmlns&&(o.ns=e.ns),t.attribList.length=0,C(t,"onopentagstart",o)}function Y(t,e){var o=t.indexOf(":"),s=o<0?["",t]:t.split(":"),N=s[0],x=s[1];return e&&t==="xmlns"&&(N="xmlns",x=""),{prefix:N,local:x}}function H(t){if(t.strict||(t.attribName=t.attribName[t.looseCase]()),t.attribList.indexOf(t.attribName)!==-1||t.tag.attributes.hasOwnProperty(t.attribName)){t.attribName=t.attribValue="";return}if(t.opt.xmlns){var e=Y(t.attribName,!0),o=e.prefix,s=e.local;if(o==="xmlns")if(s==="xml"&&t.attribValue!==R)b(t,"xml: prefix must be bound to "+R+`
Actual: `+t.attribValue);else if(s==="xmlns"&&t.attribValue!==L)b(t,"xmlns: prefix must be bound to "+L+`
Actual: `+t.attribValue);else{var N=t.tag,x=t.tags[t.tags.length-1]||t;N.ns===x.ns&&(N.ns=Object.create(x.ns)),N.ns[s]=t.attribValue}t.attribList.push([t.attribName,t.attribValue])}else t.tag.attributes[t.attribName]=t.attribValue,C(t,"onattribute",{name:t.attribName,value:t.attribValue});t.attribName=t.attribValue=""}function M(t,e){if(t.opt.xmlns){var o=t.tag,s=Y(t.tagName);o.prefix=s.prefix,o.local=s.local,o.uri=o.ns[s.prefix]||"",o.prefix&&!o.uri&&(b(t,"Unbound namespace prefix: "+JSON.stringify(t.tagName)),o.uri=s.prefix);var N=t.tags[t.tags.length-1]||t;o.ns&&N.ns!==o.ns&&Object.keys(o.ns).forEach(function(Ee){C(t,"onopennamespace",{prefix:Ee,uri:o.ns[Ee]})});for(var x=0,D=t.attribList.length;x<D;x++){var p=t.attribList[x],K=p[0],G=p[1],w=Y(K,!0),V=w.prefix,De=w.local,me=V===""?"":o.ns[V]||"",W={name:K,value:G,prefix:V,local:De,uri:me};V&&V!=="xmlns"&&!me&&(b(t,"Unbound namespace prefix: "+JSON.stringify(V)),W.uri=V),t.tag.attributes[K]=W,C(t,"onattribute",W)}t.attribList.length=0}t.tag.isSelfClosing=!!e,t.sawRoot=!0,t.tags.push(t.tag),C(t,"onopentag",t.tag),e||(!t.noscript&&t.tagName.toLowerCase()==="script"?t.state=r.SCRIPT:t.state=r.TEXT,t.tag=null,t.tagName=""),t.attribName=t.attribValue="",t.attribList.length=0}function Q(t){if(!t.tagName){b(t,"Weird empty close tag."),t.textNode+="</>",t.state=r.TEXT;return}if(t.script){if(t.tagName!=="script"){t.script+="</"+t.tagName+">",t.tagName="",t.state=r.SCRIPT;return}C(t,"onscript",t.script),t.script=""}var e=t.tags.length,o=t.tagName;t.strict||(o=o[t.looseCase]());for(var s=o;e--;){var N=t.tags[e];if(N.name!==s)b(t,"Unexpected close tag");else break}if(e<0){b(t,"Unmatched closing tag: "+t.tagName),t.textNode+="</"+t.tagName+">",t.state=r.TEXT;return}t.tagName=o;for(var x=t.tags.length;x-- >e;){var D=t.tag=t.tags.pop();t.tagName=t.tag.name,C(t,"onclosetag",t.tagName);var p={};for(var K in D.ns)p[K]=D.ns[K];var G=t.tags[t.tags.length-1]||t;t.opt.xmlns&&D.ns!==G.ns&&Object.keys(D.ns).forEach(function(w){var V=D.ns[w];C(t,"onclosenamespace",{prefix:w,uri:V})})}e===0&&(t.closedRoot=!0),t.tagName=t.attribValue=t.attribName="",t.attribList.length=0,t.state=r.TEXT}function Ce(t){var e=t.entity,o=e.toLowerCase(),s,N="";return t.ENTITIES[e]?t.ENTITIES[e]:t.ENTITIES[o]?t.ENTITIES[o]:(e=o,e.charAt(0)==="#"&&(e.charAt(1)==="x"?(e=e.slice(2),s=parseInt(e,16),N=s.toString(16)):(e=e.slice(1),s=parseInt(e,10),N=s.toString(10))),e=e.replace(/^0+/,""),isNaN(s)||N.toLowerCase()!==e?(b(t,"Invalid character entity"),"&"+t.entity+";"):String.fromCodePoint(s))}function le(t,e){e==="<"?(t.state=r.OPEN_WAKA,t.startTagPosition=t.position):n(e)||(b(t,"Non-whitespace before first tag."),t.textNode=e,t.state=r.TEXT)}function fe(t,e){var o="";return e<t.length&&(o=t.charAt(e)),o}function xe(t){var e=this;if(this.error)throw this.error;if(e.closed)return k(e,"Cannot write after close. Assign an onready handler.");if(t===null)return oe(e);typeof t=="object"&&(t=t.toString());for(var o=0,s="";s=fe(t,o++),e.c=s,!!s;)switch(e.trackPosition&&(e.position++,s===`
`?(e.line++,e.column=0):e.column++),e.state){case r.BEGIN:if(e.state=r.BEGIN_WHITESPACE,s==="\uFEFF")continue;le(e,s);continue;case r.BEGIN_WHITESPACE:le(e,s);continue;case r.TEXT:if(e.sawRoot&&!e.closedRoot){for(var N=o-1;s&&s!=="<"&&s!=="&";)s=fe(t,o++),s&&e.trackPosition&&(e.position++,s===`
`?(e.line++,e.column=0):e.column++);e.textNode+=t.substring(N,o-1)}s==="<"&&!(e.sawRoot&&e.closedRoot&&!e.strict)?(e.state=r.OPEN_WAKA,e.startTagPosition=e.position):(!n(s)&&(!e.sawRoot||e.closedRoot)&&b(e,"Text data outside of root node."),s==="&"?e.state=r.TEXT_ENTITY:e.textNode+=s);continue;case r.SCRIPT:s==="<"?e.state=r.SCRIPT_ENDING:e.script+=s;continue;case r.SCRIPT_ENDING:s==="/"?e.state=r.CLOSE_TAG:(e.script+="<"+s,e.state=r.SCRIPT);continue;case r.OPEN_WAKA:if(s==="!")e.state=r.SGML_DECL,e.sgmlDecl="";else if(!n(s))if(g(S,s))e.state=r.OPEN_TAG,e.tagName=s;else if(s==="/")e.state=r.CLOSE_TAG,e.tagName="";else if(s==="?")e.state=r.PROC_INST,e.procInstName=e.procInstBody="";else{if(b(e,"Unencoded <"),e.startTagPosition+1<e.position){var x=e.position-e.startTagPosition;s=new Array(x).join(" ")+s}e.textNode+="<"+s,e.state=r.TEXT}continue;case r.SGML_DECL:if(e.sgmlDecl+s==="--"){e.state=r.COMMENT,e.comment="",e.sgmlDecl="";continue}e.doctype&&e.doctype!==!0&&e.sgmlDecl?(e.state=r.DOCTYPE_DTD,e.doctype+="<!"+e.sgmlDecl+s,e.sgmlDecl=""):(e.sgmlDecl+s).toUpperCase()===B?(C(e,"onopencdata"),e.state=r.CDATA,e.sgmlDecl="",e.cdata=""):(e.sgmlDecl+s).toUpperCase()===P?(e.state=r.DOCTYPE,(e.doctype||e.sawRoot)&&b(e,"Inappropriately located doctype declaration"),e.doctype="",e.sgmlDecl=""):s===">"?(C(e,"onsgmldeclaration",e.sgmlDecl),e.sgmlDecl="",e.state=r.TEXT):(f(s)&&(e.state=r.SGML_DECL_QUOTED),e.sgmlDecl+=s);continue;case r.SGML_DECL_QUOTED:s===e.q&&(e.state=r.SGML_DECL,e.q=""),e.sgmlDecl+=s;continue;case r.DOCTYPE:s===">"?(e.state=r.TEXT,C(e,"ondoctype",e.doctype),e.doctype=!0):(e.doctype+=s,s==="["?e.state=r.DOCTYPE_DTD:f(s)&&(e.state=r.DOCTYPE_QUOTED,e.q=s));continue;case r.DOCTYPE_QUOTED:e.doctype+=s,s===e.q&&(e.q="",e.state=r.DOCTYPE);continue;case r.DOCTYPE_DTD:s==="]"?(e.doctype+=s,e.state=r.DOCTYPE):s==="<"?(e.state=r.OPEN_WAKA,e.startTagPosition=e.position):f(s)?(e.doctype+=s,e.state=r.DOCTYPE_DTD_QUOTED,e.q=s):e.doctype+=s;continue;case r.DOCTYPE_DTD_QUOTED:e.doctype+=s,s===e.q&&(e.state=r.DOCTYPE_DTD,e.q="");continue;case r.COMMENT:s==="-"?e.state=r.COMMENT_ENDING:e.comment+=s;continue;case r.COMMENT_ENDING:s==="-"?(e.state=r.COMMENT_ENDED,e.comment=ce(e.opt,e.comment),e.comment&&C(e,"oncomment",e.comment),e.comment=""):(e.comment+="-"+s,e.state=r.COMMENT);continue;case r.COMMENT_ENDED:s!==">"?(b(e,"Malformed comment"),e.comment+="--"+s,e.state=r.COMMENT):e.doctype&&e.doctype!==!0?e.state=r.DOCTYPE_DTD:e.state=r.TEXT;continue;case r.CDATA:s==="]"?e.state=r.CDATA_ENDING:e.cdata+=s;continue;case r.CDATA_ENDING:s==="]"?e.state=r.CDATA_ENDING_2:(e.cdata+="]"+s,e.state=r.CDATA);continue;case r.CDATA_ENDING_2:s===">"?(e.cdata&&C(e,"oncdata",e.cdata),C(e,"onclosecdata"),e.cdata="",e.state=r.TEXT):s==="]"?e.cdata+="]":(e.cdata+="]]"+s,e.state=r.CDATA);continue;case r.PROC_INST:s==="?"?e.state=r.PROC_INST_ENDING:n(s)?e.state=r.PROC_INST_BODY:e.procInstName+=s;continue;case r.PROC_INST_BODY:if(!e.procInstBody&&n(s))continue;s==="?"?e.state=r.PROC_INST_ENDING:e.procInstBody+=s;continue;case r.PROC_INST_ENDING:s===">"?(C(e,"onprocessinginstruction",{name:e.procInstName,body:e.procInstBody}),e.procInstName=e.procInstBody="",e.state=r.TEXT):(e.procInstBody+="?"+s,e.state=r.PROC_INST_BODY);continue;case r.OPEN_TAG:g(c,s)?e.tagName+=s:(Ie(e),s===">"?M(e):s==="/"?e.state=r.OPEN_TAG_SLASH:(n(s)||b(e,"Invalid character in tag name"),e.state=r.ATTRIB));continue;case r.OPEN_TAG_SLASH:s===">"?(M(e,!0),Q(e)):(b(e,"Forward-slash in opening tag not followed by >"),e.state=r.ATTRIB);continue;case r.ATTRIB:if(n(s))continue;s===">"?M(e):s==="/"?e.state=r.OPEN_TAG_SLASH:g(S,s)?(e.attribName=s,e.attribValue="",e.state=r.ATTRIB_NAME):b(e,"Invalid attribute name");continue;case r.ATTRIB_NAME:s==="="?e.state=r.ATTRIB_VALUE:s===">"?(b(e,"Attribute without value"),e.attribValue=e.attribName,H(e),M(e)):n(s)?e.state=r.ATTRIB_NAME_SAW_WHITE:g(c,s)?e.attribName+=s:b(e,"Invalid attribute name");continue;case r.ATTRIB_NAME_SAW_WHITE:if(s==="=")e.state=r.ATTRIB_VALUE;else{if(n(s))continue;b(e,"Attribute without value"),e.tag.attributes[e.attribName]="",e.attribValue="",C(e,"onattribute",{name:e.attribName,value:""}),e.attribName="",s===">"?M(e):g(S,s)?(e.attribName=s,e.state=r.ATTRIB_NAME):(b(e,"Invalid attribute name"),e.state=r.ATTRIB)}continue;case r.ATTRIB_VALUE:if(n(s))continue;f(s)?(e.q=s,e.state=r.ATTRIB_VALUE_QUOTED):(e.opt.unquotedAttributeValues||k(e,"Unquoted attribute value"),e.state=r.ATTRIB_VALUE_UNQUOTED,e.attribValue=s);continue;case r.ATTRIB_VALUE_QUOTED:if(s!==e.q){s==="&"?e.state=r.ATTRIB_VALUE_ENTITY_Q:e.attribValue+=s;continue}H(e),e.q="",e.state=r.ATTRIB_VALUE_CLOSED;continue;case r.ATTRIB_VALUE_CLOSED:n(s)?e.state=r.ATTRIB:s===">"?M(e):s==="/"?e.state=r.OPEN_TAG_SLASH:g(S,s)?(b(e,"No whitespace between attributes"),e.attribName=s,e.attribValue="",e.state=r.ATTRIB_NAME):b(e,"Invalid attribute name");continue;case r.ATTRIB_VALUE_UNQUOTED:if(!T(s)){s==="&"?e.state=r.ATTRIB_VALUE_ENTITY_U:e.attribValue+=s;continue}H(e),s===">"?M(e):e.state=r.ATTRIB;continue;case r.CLOSE_TAG:if(e.tagName)s===">"?Q(e):g(c,s)?e.tagName+=s:e.script?(e.script+="</"+e.tagName,e.tagName="",e.state=r.SCRIPT):(n(s)||b(e,"Invalid tagname in closing tag"),e.state=r.CLOSE_TAG_SAW_WHITE);else{if(n(s))continue;_(S,s)?e.script?(e.script+="</"+s,e.state=r.SCRIPT):b(e,"Invalid tagname in closing tag."):e.tagName=s}continue;case r.CLOSE_TAG_SAW_WHITE:if(n(s))continue;s===">"?Q(e):b(e,"Invalid characters in closing tag");continue;case r.TEXT_ENTITY:case r.ATTRIB_VALUE_ENTITY_Q:case r.ATTRIB_VALUE_ENTITY_U:var D,p;switch(e.state){case r.TEXT_ENTITY:D=r.TEXT,p="textNode";break;case r.ATTRIB_VALUE_ENTITY_Q:D=r.ATTRIB_VALUE_QUOTED,p="attribValue";break;case r.ATTRIB_VALUE_ENTITY_U:D=r.ATTRIB_VALUE_UNQUOTED,p="attribValue";break}if(s===";"){var K=Ce(e);e.opt.unparsedEntities&&!Object.values(u.XML_ENTITIES).includes(K)?(e.entity="",e.state=D,e.write(K)):(e[p]+=K,e.entity="",e.state=D)}else g(e.entity.length?a:m,s)?e.entity+=s:(b(e,"Invalid character in entity name"),e[p]+="&"+e.entity+s,e.entity="",e.state=D);continue;default:throw new Error(e,"Unknown state: "+e.state)}return e.position>=e.bufferCheckPosition&&E(e),e}/*! http://mths.be/fromcodepoint v0.1.0 by @mathias */String.fromCodePoint||function(){var t=String.fromCharCode,e=Math.floor,o=function(){var s=16384,N=[],x,D,p=-1,K=arguments.length;if(!K)return"";for(var G="";++p<K;){var w=Number(arguments[p]);if(!isFinite(w)||w<0||w>1114111||e(w)!==w)throw RangeError("Invalid code point: "+w);w<=65535?N.push(w):(w-=65536,x=(w>>10)+55296,D=w%1024+56320,N.push(x,D)),(p+1===K||N.length>s)&&(G+=t.apply(null,N),N.length=0)}return G};Object.defineProperty?Object.defineProperty(String,"fromCodePoint",{value:o,configurable:!0,writable:!0}):String.fromCodePoint=o}()})(l)}(z)),z}var J,ye;function se(){return ye||(ye=1,J={isArray:function(l){return Array.isArray?Array.isArray(l):Object.prototype.toString.call(l)==="[object Array]"}}),J}var Z,ge;function ue(){if(ge)return Z;ge=1;var l=se().isArray;return Z={copyOptions:function(u){var d,i={};for(d in u)u.hasOwnProperty(d)&&(i[d]=u[d]);return i},ensureFlagExists:function(u,d){(!(u in d)||typeof d[u]!="boolean")&&(d[u]=!1)},ensureSpacesExists:function(u){(!("spaces"in u)||typeof u.spaces!="number"&&typeof u.spaces!="string")&&(u.spaces=0)},ensureAlwaysArrayExists:function(u){(!("alwaysArray"in u)||typeof u.alwaysArray!="boolean"&&!l(u.alwaysArray))&&(u.alwaysArray=!1)},ensureKeyExists:function(u,d){(!(u+"Key"in d)||typeof d[u+"Key"]!="string")&&(d[u+"Key"]=d.compact?"_"+u:u)},checkFnExists:function(u,d){return u+"Fn"in d}},Z}var $,_e;function Fe(){if(_e)return $;_e=1;var l=Ke(),u=ue(),d=se().isArray,i,E;function y(c){return i=u.copyOptions(c),u.ensureFlagExists("ignoreDeclaration",i),u.ensureFlagExists("ignoreInstruction",i),u.ensureFlagExists("ignoreAttributes",i),u.ensureFlagExists("ignoreText",i),u.ensureFlagExists("ignoreComment",i),u.ensureFlagExists("ignoreCdata",i),u.ensureFlagExists("ignoreDoctype",i),u.ensureFlagExists("compact",i),u.ensureFlagExists("alwaysChildren",i),u.ensureFlagExists("addParent",i),u.ensureFlagExists("trim",i),u.ensureFlagExists("nativeType",i),u.ensureFlagExists("nativeTypeAttributes",i),u.ensureFlagExists("sanitize",i),u.ensureFlagExists("instructionHasAttributes",i),u.ensureFlagExists("captureSpacesBetweenElements",i),u.ensureAlwaysArrayExists(i),u.ensureKeyExists("declaration",i),u.ensureKeyExists("instruction",i),u.ensureKeyExists("attributes",i),u.ensureKeyExists("text",i),u.ensureKeyExists("comment",i),u.ensureKeyExists("cdata",i),u.ensureKeyExists("doctype",i),u.ensureKeyExists("type",i),u.ensureKeyExists("name",i),u.ensureKeyExists("elements",i),u.ensureKeyExists("parent",i),u.checkFnExists("doctype",i),u.checkFnExists("instruction",i),u.checkFnExists("cdata",i),u.checkFnExists("comment",i),u.checkFnExists("text",i),u.checkFnExists("instructionName",i),u.checkFnExists("elementName",i),u.checkFnExists("attributeName",i),u.checkFnExists("attributeValue",i),u.checkFnExists("attributes",i),i}function A(c){var m=Number(c);if(!isNaN(m))return m;var a=c.toLowerCase();return a==="true"?!0:a==="false"?!1:c}function h(c,m){var a;if(i.compact){if(!E[i[c+"Key"]]&&(d(i.alwaysArray)?i.alwaysArray.indexOf(i[c+"Key"])!==-1:i.alwaysArray)&&(E[i[c+"Key"]]=[]),E[i[c+"Key"]]&&!d(E[i[c+"Key"]])&&(E[i[c+"Key"]]=[E[i[c+"Key"]]]),c+"Fn"in i&&typeof m=="string"&&(m=i[c+"Fn"](m,E)),c==="instruction"&&("instructionFn"in i||"instructionNameFn"in i)){for(a in m)if(m.hasOwnProperty(a))if("instructionFn"in i)m[a]=i.instructionFn(m[a],a,E);else{var n=m[a];delete m[a],m[i.instructionNameFn(a,n,E)]=n}}d(E[i[c+"Key"]])?E[i[c+"Key"]].push(m):E[i[c+"Key"]]=m}else{E[i.elementsKey]||(E[i.elementsKey]=[]);var f={};if(f[i.typeKey]=c,c==="instruction"){for(a in m)if(m.hasOwnProperty(a))break;f[i.nameKey]="instructionNameFn"in i?i.instructionNameFn(a,m,E):a,i.instructionHasAttributes?(f[i.attributesKey]=m[a][i.attributesKey],"instructionFn"in i&&(f[i.attributesKey]=i.instructionFn(f[i.attributesKey],a,E))):("instructionFn"in i&&(m[a]=i.instructionFn(m[a],a,E)),f[i.instructionKey]=m[a])}else c+"Fn"in i&&(m=i[c+"Fn"](m,E)),f[i[c+"Key"]]=m;i.addParent&&(f[i.parentKey]=E),E[i.elementsKey].push(f)}}function I(c){if("attributesFn"in i&&c&&(c=i.attributesFn(c,E)),(i.trim||"attributeValueFn"in i||"attributeNameFn"in i||i.nativeTypeAttributes)&&c){var m;for(m in c)if(c.hasOwnProperty(m)&&(i.trim&&(c[m]=c[m].trim()),i.nativeTypeAttributes&&(c[m]=A(c[m])),"attributeValueFn"in i&&(c[m]=i.attributeValueFn(c[m],m,E)),"attributeNameFn"in i)){var a=c[m];delete c[m],c[i.attributeNameFn(m,c[m],E)]=a}}return c}function O(c){var m={};if(c.body&&(c.name.toLowerCase()==="xml"||i.instructionHasAttributes)){for(var a=/([\w:-]+)\s*=\s*(?:"([^"]*)"|'([^']*)'|(\w+))\s*/g,n;(n=a.exec(c.body))!==null;)m[n[1]]=n[2]||n[3]||n[4];m=I(m)}if(c.name.toLowerCase()==="xml"){if(i.ignoreDeclaration)return;E[i.declarationKey]={},Object.keys(m).length&&(E[i.declarationKey][i.attributesKey]=m),i.addParent&&(E[i.declarationKey][i.parentKey]=E)}else{if(i.ignoreInstruction)return;i.trim&&(c.body=c.body.trim());var f={};i.instructionHasAttributes&&Object.keys(m).length?(f[c.name]={},f[c.name][i.attributesKey]=m):f[c.name]=c.body,h("instruction",f)}}function F(c,m){var a;if(typeof c=="object"&&(m=c.attributes,c=c.name),m=I(m),"elementNameFn"in i&&(c=i.elementNameFn(c,E)),i.compact){if(a={},!i.ignoreAttributes&&m&&Object.keys(m).length){a[i.attributesKey]={};var n;for(n in m)m.hasOwnProperty(n)&&(a[i.attributesKey][n]=m[n])}!(c in E)&&(d(i.alwaysArray)?i.alwaysArray.indexOf(c)!==-1:i.alwaysArray)&&(E[c]=[]),E[c]&&!d(E[c])&&(E[c]=[E[c]]),d(E[c])?E[c].push(a):E[c]=a}else E[i.elementsKey]||(E[i.elementsKey]=[]),a={},a[i.typeKey]="element",a[i.nameKey]=c,!i.ignoreAttributes&&m&&Object.keys(m).length&&(a[i.attributesKey]=m),i.alwaysChildren&&(a[i.elementsKey]=[]),E[i.elementsKey].push(a);a[i.parentKey]=E,E=a}function B(c){i.ignoreText||!c.trim()&&!i.captureSpacesBetweenElements||(i.trim&&(c=c.trim()),i.nativeType&&(c=A(c)),i.sanitize&&(c=c.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")),h("text",c))}function P(c){i.ignoreComment||(i.trim&&(c=c.trim()),h("comment",c))}function R(c){var m=E[i.parentKey];i.addParent||delete E[i.parentKey],E=m}function L(c){i.ignoreCdata||(i.trim&&(c=c.trim()),h("cdata",c))}function U(c){i.ignoreDoctype||(c=c.replace(/^ /,""),i.trim&&(c=c.trim()),h("doctype",c))}function S(c){c.note=c}return $=function(c,m){var a=l.parser(!0,{}),n={};if(E=n,i=y(m),a.opt={strictEntities:!0},a.onopentag=F,a.ontext=B,a.oncomment=P,a.onclosetag=R,a.onerror=S,a.oncdata=L,a.ondoctype=U,a.onprocessinginstruction=O,a.write(c).close(),n[i.elementsKey]){var f=n[i.elementsKey];delete n[i.elementsKey],n[i.elementsKey]=f,delete n.text}return n},$}var ee,Ae;function Pe(){if(Ae)return ee;Ae=1;var l=ue(),u=Fe();function d(i){var E=l.copyOptions(i);return l.ensureSpacesExists(E),E}return ee=function(i,E){var y,A,h,I;return y=d(E),A=u(i,y),I="compact"in y&&y.compact?"_parent":"parent","addParent"in y&&y.addParent?h=JSON.stringify(A,function(O,F){return O===I?"_":F},y.spaces):h=JSON.stringify(A,null,y.spaces),h.replace(/\u2028/g,"\\u2028").replace(/\u2029/g,"\\u2029")},ee}var te,he;function ve(){if(he)return te;he=1;var l=ue(),u=se().isArray,d,i;function E(a){var n=l.copyOptions(a);return l.ensureFlagExists("ignoreDeclaration",n),l.ensureFlagExists("ignoreInstruction",n),l.ensureFlagExists("ignoreAttributes",n),l.ensureFlagExists("ignoreText",n),l.ensureFlagExists("ignoreComment",n),l.ensureFlagExists("ignoreCdata",n),l.ensureFlagExists("ignoreDoctype",n),l.ensureFlagExists("compact",n),l.ensureFlagExists("indentText",n),l.ensureFlagExists("indentCdata",n),l.ensureFlagExists("indentAttributes",n),l.ensureFlagExists("indentInstruction",n),l.ensureFlagExists("fullTagEmptyElement",n),l.ensureFlagExists("noQuotesForNativeAttributes",n),l.ensureSpacesExists(n),typeof n.spaces=="number"&&(n.spaces=Array(n.spaces+1).join(" ")),l.ensureKeyExists("declaration",n),l.ensureKeyExists("instruction",n),l.ensureKeyExists("attributes",n),l.ensureKeyExists("text",n),l.ensureKeyExists("comment",n),l.ensureKeyExists("cdata",n),l.ensureKeyExists("doctype",n),l.ensureKeyExists("type",n),l.ensureKeyExists("name",n),l.ensureKeyExists("elements",n),l.checkFnExists("doctype",n),l.checkFnExists("instruction",n),l.checkFnExists("cdata",n),l.checkFnExists("comment",n),l.checkFnExists("text",n),l.checkFnExists("instructionName",n),l.checkFnExists("elementName",n),l.checkFnExists("attributeName",n),l.checkFnExists("attributeValue",n),l.checkFnExists("attributes",n),l.checkFnExists("fullTagEmptyElement",n),n}function y(a,n,f){return(!f&&a.spaces?`
`:"")+Array(n+1).join(a.spaces)}function A(a,n,f){if(n.ignoreAttributes)return"";"attributesFn"in n&&(a=n.attributesFn(a,i,d));var T,g,_,r,v=[];for(T in a)a.hasOwnProperty(T)&&a[T]!==null&&a[T]!==void 0&&(r=n.noQuotesForNativeAttributes&&typeof a[T]!="string"?"":'"',g=""+a[T],g=g.replace(/"/g,"&quot;"),_="attributeNameFn"in n?n.attributeNameFn(T,g,i,d):T,v.push(n.spaces&&n.indentAttributes?y(n,f+1,!1):" "),v.push(_+"="+r+("attributeValueFn"in n?n.attributeValueFn(g,T,i,d):g)+r));return a&&Object.keys(a).length&&n.spaces&&n.indentAttributes&&v.push(y(n,f,!1)),v.join("")}function h(a,n,f){return d=a,i="xml",n.ignoreDeclaration?"":"<?xml"+A(a[n.attributesKey],n,f)+"?>"}function I(a,n,f){if(n.ignoreInstruction)return"";var T;for(T in a)if(a.hasOwnProperty(T))break;var g="instructionNameFn"in n?n.instructionNameFn(T,a[T],i,d):T;if(typeof a[T]=="object")return d=a,i=g,"<?"+g+A(a[T][n.attributesKey],n,f)+"?>";var _=a[T]?a[T]:"";return"instructionFn"in n&&(_=n.instructionFn(_,T,i,d)),"<?"+g+(_?" "+_:"")+"?>"}function O(a,n){return n.ignoreComment?"":"<!--"+("commentFn"in n?n.commentFn(a,i,d):a)+"-->"}function F(a,n){return n.ignoreCdata?"":"<![CDATA["+("cdataFn"in n?n.cdataFn(a,i,d):a.replace("]]>","]]]]><![CDATA[>"))+"]]>"}function B(a,n){return n.ignoreDoctype?"":"<!DOCTYPE "+("doctypeFn"in n?n.doctypeFn(a,i,d):a)+">"}function P(a,n){return n.ignoreText?"":(a=""+a,a=a.replace(/&amp;/g,"&"),a=a.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;"),"textFn"in n?n.textFn(a,i,d):a)}function R(a,n){var f;if(a.elements&&a.elements.length)for(f=0;f<a.elements.length;++f)switch(a.elements[f][n.typeKey]){case"text":if(n.indentText)return!0;break;case"cdata":if(n.indentCdata)return!0;break;case"instruction":if(n.indentInstruction)return!0;break;case"doctype":case"comment":case"element":return!0;default:return!0}return!1}function L(a,n,f){d=a,i=a.name;var T=[],g="elementNameFn"in n?n.elementNameFn(a.name,a):a.name;T.push("<"+g),a[n.attributesKey]&&T.push(A(a[n.attributesKey],n,f));var _=a[n.elementsKey]&&a[n.elementsKey].length||a[n.attributesKey]&&a[n.attributesKey]["xml:space"]==="preserve";return _||("fullTagEmptyElementFn"in n?_=n.fullTagEmptyElementFn(a.name,a):_=n.fullTagEmptyElement),_?(T.push(">"),a[n.elementsKey]&&a[n.elementsKey].length&&(T.push(U(a[n.elementsKey],n,f+1)),d=a,i=a.name),T.push(n.spaces&&R(a,n)?`
`+Array(f+1).join(n.spaces):""),T.push("</"+g+">")):T.push("/>"),T.join("")}function U(a,n,f,T){return a.reduce(function(g,_){var r=y(n,f,T&&!g);switch(_.type){case"element":return g+r+L(_,n,f);case"comment":return g+r+O(_[n.commentKey],n);case"doctype":return g+r+B(_[n.doctypeKey],n);case"cdata":return g+(n.indentCdata?r:"")+F(_[n.cdataKey],n);case"text":return g+(n.indentText?r:"")+P(_[n.textKey],n);case"instruction":var v={};return v[_[n.nameKey]]=_[n.attributesKey]?_:_[n.instructionKey],g+(n.indentInstruction?r:"")+I(v,n,f)}},"")}function S(a,n,f){var T;for(T in a)if(a.hasOwnProperty(T))switch(T){case n.parentKey:case n.attributesKey:break;case n.textKey:if(n.indentText||f)return!0;break;case n.cdataKey:if(n.indentCdata||f)return!0;break;case n.instructionKey:if(n.indentInstruction||f)return!0;break;case n.doctypeKey:case n.commentKey:return!0;default:return!0}return!1}function c(a,n,f,T,g){d=a,i=n;var _="elementNameFn"in f?f.elementNameFn(n,a):n;if(typeof a>"u"||a===null||a==="")return"fullTagEmptyElementFn"in f&&f.fullTagEmptyElementFn(n,a)||f.fullTagEmptyElement?"<"+_+"></"+_+">":"<"+_+"/>";var r=[];if(n){if(r.push("<"+_),typeof a!="object")return r.push(">"+P(a,f)+"</"+_+">"),r.join("");a[f.attributesKey]&&r.push(A(a[f.attributesKey],f,T));var v=S(a,f,!0)||a[f.attributesKey]&&a[f.attributesKey]["xml:space"]==="preserve";if(v||("fullTagEmptyElementFn"in f?v=f.fullTagEmptyElementFn(n,a):v=f.fullTagEmptyElement),v)r.push(">");else return r.push("/>"),r.join("")}return r.push(m(a,f,T+1,!1)),d=a,i=n,n&&r.push((g?y(f,T,!1):"")+"</"+_+">"),r.join("")}function m(a,n,f,T){var g,_,r,v=[];for(_ in a)if(a.hasOwnProperty(_))for(r=u(a[_])?a[_]:[a[_]],g=0;g<r.length;++g){switch(_){case n.declarationKey:v.push(h(r[g],n,f));break;case n.instructionKey:v.push((n.indentInstruction?y(n,f,T):"")+I(r[g],n,f));break;case n.attributesKey:case n.parentKey:break;case n.textKey:v.push((n.indentText?y(n,f,T):"")+P(r[g],n));break;case n.cdataKey:v.push((n.indentCdata?y(n,f,T):"")+F(r[g],n));break;case n.doctypeKey:v.push(y(n,f,T)+B(r[g],n));break;case n.commentKey:v.push(y(n,f,T)+O(r[g],n));break;default:v.push(y(n,f,T)+c(r[g],_,n,f,S(r[g],n)))}T=T&&!v.length}return v.join("")}return te=function(a,n){n=E(n);var f=[];return d=a,i="_root_",n.compact?f.push(m(a,n,0,!0)):(a[n.declarationKey]&&f.push(h(a[n.declarationKey],n,0)),a[n.elementsKey]&&a[n.elementsKey].length&&f.push(U(a[n.elementsKey],n,0,!f.length))),f.join("")},te}var ne,Ne;function Re(){if(Ne)return ne;Ne=1;var l=ve();return ne=function(u,d){u instanceof Buffer&&(u=u.toString());var i=null;if(typeof u=="string")try{i=JSON.parse(u)}catch{throw new Error("The JSON structure is invalid")}else i=u;return l(i,d)},ne}var ie,be;function Le(){if(be)return ie;be=1;var l=Fe(),u=Pe(),d=ve(),i=Re();return ie={xml2js:l,xml2json:u,js2xml:d,json2xml:i},ie}var Be=Le();async function qe({id:l="",cursor:u=""}){var h,I,O,F,B,P,R,L,U,S,c,m;const d=[],i=await ae({variables:{cursor:u,count:8,scale:1,id:btoa(`app_collection:${l}:1560653304174514:133`)},doc_id:"3975496529227403"}),E=re(i),{edges:y=[],page_info:A={}}=((I=(h=E==null?void 0:E.data)==null?void 0:h.node)==null?void 0:I.pageItems)||{};for(const a of y){const n=((F=(O=a==null?void 0:a.node)==null?void 0:O.node)==null?void 0:F.id)||"";d.push({id:n,recent:d.length,created_time:"",description:(R=(P=(B=a==null?void 0:a.node)==null?void 0:B.node)==null?void 0:P.title)==null?void 0:R.text,length:(U=(L=a==null?void 0:a.node)==null?void 0:L.node)==null?void 0:U.playable_duration,url:(S=a==null?void 0:a.node)==null?void 0:S.url,source:"",picture:(m=(c=a==null?void 0:a.node)==null?void 0:c.image)==null?void 0:m.uri,cursor:(a==null?void 0:a.cursor)||""})}return{videos:d,nextCursor:A==null?void 0:A.end_cursor}}async function je({id:l="",cursor:u=""}){var h,I,O,F,B,P,R,L,U,S,c,m;const d=[],i=await ae({fb_api_req_friendly_name:"GroupsCometVideosRootQueryContainerQuery",variables:{cursor:u,count:8,scale:2,groupID:l},doc_id:"6553573504724585"}),E=re(i),{edges:y=[],page_info:A={}}=((O=(I=(h=E==null?void 0:E.data)==null?void 0:h.group)==null?void 0:I.group_mediaset)==null?void 0:O.media)||{};for(const a of y){const n=((F=a==null?void 0:a.node)==null?void 0:F.id)||"";d.push({id:n,recent:d.length,created_time:"",description:(R=(P=(B=a==null?void 0:a.node)==null?void 0:B.node)==null?void 0:P.title)==null?void 0:R.text,length:(U=(L=a==null?void 0:a.node)==null?void 0:L.node)==null?void 0:U.playable_duration,url:(S=a==null?void 0:a.node)==null?void 0:S.url,source:"",picture:(m=(c=a==null?void 0:a.node)==null?void 0:c.image)==null?void 0:m.uri,cursor:(a==null?void 0:a.cursor)||""})}return{videos:d,nextCursor:A==null?void 0:A.end_cursor}}const X={};function Ue(l){var u;try{const d=Be.xml2js(l,{compact:!0});let i=we(d,"AdaptationSet")||[];return Array.isArray(i)||(i=[i]),(((u=i==null?void 0:i.map(y=>y==null?void 0:y.Representation))==null?void 0:u.flat())||[]).map(y=>{var h,I,O,F;const A=y==null?void 0:y._attributes;return A?{id:A.id,codecs:A.codecs,mimeType:A.mimeType,isAudio:(h=A.mimeType)==null?void 0:h.startsWith("audio"),height:parseInt(A.height),width:parseInt(A.width),bandwidth:parseInt(A.bandwidth),qualityClass:A.FBQualityClass,qualityLabel:A.FBQualityLabel,source:(I=y==null?void 0:y.BaseURL)==null?void 0:I._text,length:parseInt((F=(O=y==null?void 0:y.SegmentBase)==null?void 0:O._attributes)==null?void 0:F.timescale)}:null}).filter(Boolean)}catch{return[]}}function Ve(l){var u,d,i,E,y;try{return console.log("video info",l),{id:l.videoId||l.id,owner:((u=l.owner)==null?void 0:u.id)||((d=l.video_owner)==null?void 0:d.id),length:l.playable_duration_in_ms/1e3,url:l.url||l.permalink_url,width:l.original_width||l.width,height:l.original_height||l.height,source:l.browser_native_hd_url||l.playable_url_quality_hd||l.browser_native_sd_url||l.playable_url,quality:l.min_quality_preference,variants:Ue(l.playlist),created_time:(l.publish_time*1e3).toString(),thumbnail:((i=l.image)==null?void 0:i.uri)||((y=(E=l.preferred_thumbnail)==null?void 0:E.image)==null?void 0:y.uri)}}catch(A){return console.log("extractVideoInfo error",A),null}}async function ke(l,u=!1){var y,A;if(!u&&((y=X[l])!=null&&y.source))return X[l];const d=await ae({fb_api_req_friendly_name:"CometTahoeRootQuery",variables:{caller:"TAHOE",chainingCursor:null,chainingSeedVideoId:null,channelEntryPoint:"TAHOE",channelID:"",feedbackSource:41,feedLocation:"TAHOE",focusCommentID:null,isCrawler:!1,privacySelectorRenderLocation:"COMET_STREAM",renderLocation:"video_channel",scale:1,streamChainingSection:!1,useDefaultActor:!1,videoChainingContext:null,videoID:l,__relay_internal__pv__CometUFIShareActionMigrationrelayprovider:!0,__relay_internal__pv__CometUFIReactionsEnableShortNamerelayprovider:!1,__relay_internal__pv__StoriesLWRVariantrelayprovider:"www_new_reactions"},doc_id:"26374037368876407"}),i=re(d.split(`
`)[0]),E=((A=i==null?void 0:i.data)==null?void 0:A.video)||{};return console.log("video info",E),X[l]=Ve(E),X[l]}export{je as a,qe as b,Ue as c,Ve as e,ke as g};
