System.register(["./index-legacy-D9CHblSf.js","./MyApp-legacy-DY-xUJj-.js","./Screen-legacy-Dnq4w2A6.js","./col-legacy-BgwNVbHz.js","./row-legacy-g15ra8ff.js","./responsiveObserver-legacy-dUfw9XRe.js"],(function(e,t){"use strict";var n,i,s,r,o;return{setters:[e=>{n=e.b6,i=e.r,s=e.b8},e=>{r=e.E},e=>{o=e.S},null,null,null],execute:function(){e("default",(function(){const{ti:e}=n();return i.useEffect((()=>{r().then((e=>{!function(e){!function(e,t){e=U(e),Lr("set",e._path),Dr("set",t,e._path);const n=new b;(function(e,t,n,i,s){Zr(e,"set",{path:t.toString(),value:n,priority:i});const r=Kr(e),o=li(n,i),a=Zs(e.serverSyncTree_,t),l=gr(o,a,r),h=Xr(e),c=Ys(e.serverSyncTree_,t,l,h,!0);Ur(e.eventQueue_,c),e.server_.put(t.toString(),o.val(!0),((n,i)=>{const r="ok"===n;r||Pt("set at "+t+" failed: "+n);const o=Ks(e.serverSyncTree_,h,!r);Br(e.eventQueue_,t,o),function(e,t,n,i){t&&jt((()=>{if("ok"===n)t(null);else{const e=(n||"error").toUpperCase();let s=e;i&&(s+=": "+i);const r=new Error(s);r.code=e,t(r)}}))}(0,s,n,i)}));const u=ao(e,t);no(e,u),Br(e.eventQueue_,u,[])})(e._repo,e._path,t,null,n.wrapCallback((()=>{}))),n.promise}(yo(ko,"online/"+e),(new Date).getTime())}(e)})),async function(){const e=await function(e){e=U(e);const t=new _o((()=>{})),n=new Co(t);return function(e,t,n){const i=function(e,t){const n=t._path;let i=null;e.syncPointTree_.foreachOnPath(n,((e,t)=>{const s=En(e,n);i=i||Ws(t,s)}));let s=e.syncPointTree_.get(n);s?i=i||Ws(s,gn()):(s=new Os,e.syncPointTree_=e.syncPointTree_.set(n,s));const r=null!=i,o=r?new Mi(i,!0,!1):null,a=ns(e.pendingWriteTree_,t._path),l=Ls(s,t,a,r?o.getNode():ri.EMPTY_NODE,r);return function(e){return Bi(e.viewCache_)}(l)}(e.serverSyncTree_,t);return null!=i?Promise.resolve(i):e.server_.get(t).then((i=>{const s=li(i).withIndex(t._queryParams.getIndex());let r;if(Xs(e.serverSyncTree_,t,n,!0),t._queryParams.loadsAllData())r=Gs(e.serverSyncTree_,t._path,s);else{const n=sr(e.serverSyncTree_,t);r=Js(e.serverSyncTree_,t._path,s,n)}return Br(e.eventQueue_,t._path,r),Qs(e.serverSyncTree_,t,n,null,!0),s}),(n=>(Zr(e,"get for query "+N(t)+" failed: "+n),Promise.reject(new Error(n)))))}(e._repo,e,n).then((t=>new mo(t,new go(e._repo,e._path),e._queryParams.getIndex())))}(yo(ko,"online/"));if(!e.exists())return[];const t=e.val();return t}().then((e=>{console.log(e)}));const e=function(e){const t=function(e,t){return function(e,t,n){const i=new _o(n,void 0),s="value"===t?new Co(i):new wo(t,i);return function(e,t,n){let i;i=".info"===mn(t._path)?Xs(e.infoSyncTree_,t,n):Xs(e.serverSyncTree_,t,n),Wr(e.eventQueue_,t._path,i)}(e._repo,e,s),()=>function(e,t,n){let i;i=".info"===mn(t._path)?Qs(e.infoSyncTree_,t,n):Qs(e.serverSyncTree_,t,n),Wr(e.eventQueue_,t._path,i)}(e._repo,e,s)}(e,"value",t)}(yo(ko,"online/"),(t=>{const n=t.val();e(n)}));return t}((e=>{console.log(e)}));return()=>{!function(e){e()}(e)}}),[]),s.jsx(o,{title:e({en:"Who is online",vi:"Ai đang online"})})}));var t={};
/**
             * @license
             * Copyright 2017 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */const a="${JSCORE_VERSION}",l=function(e,t){if(!e)throw h(t)},h=function(e){return new Error("Firebase Database ("+a+") INTERNAL ASSERT FAILED: "+e)},c=function(e){const t=[];let n=0;for(let i=0;i<e.length;i++){let s=e.charCodeAt(i);s<128?t[n++]=s:s<2048?(t[n++]=s>>6|192,t[n++]=63&s|128):55296==(64512&s)&&i+1<e.length&&56320==(64512&e.charCodeAt(i+1))?(s=65536+((1023&s)<<10)+(1023&e.charCodeAt(++i)),t[n++]=s>>18|240,t[n++]=s>>12&63|128,t[n++]=s>>6&63|128,t[n++]=63&s|128):(t[n++]=s>>12|224,t[n++]=s>>6&63|128,t[n++]=63&s|128)}return t},u={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let s=0;s<e.length;s+=3){const t=e[s],r=s+1<e.length,o=r?e[s+1]:0,a=s+2<e.length,l=a?e[s+2]:0,h=t>>2,c=(3&t)<<4|o>>4;let u=(15&o)<<2|l>>6,d=63&l;a||(d=64,r||(u=64)),i.push(n[h],n[c],n[u],n[d])}return i.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(c(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):function(e){const t=[];let n=0,i=0;for(;n<e.length;){const s=e[n++];if(s<128)t[i++]=String.fromCharCode(s);else if(s>191&&s<224){const r=e[n++];t[i++]=String.fromCharCode((31&s)<<6|63&r)}else if(s>239&&s<365){const r=((7&s)<<18|(63&e[n++])<<12|(63&e[n++])<<6|63&e[n++])-65536;t[i++]=String.fromCharCode(55296+(r>>10)),t[i++]=String.fromCharCode(56320+(1023&r))}else{const r=e[n++],o=e[n++];t[i++]=String.fromCharCode((15&s)<<12|(63&r)<<6|63&o)}}return t.join("")}(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let s=0;s<e.length;){const t=n[e.charAt(s++)],r=s<e.length?n[e.charAt(s)]:0;++s;const o=s<e.length?n[e.charAt(s)]:64;++s;const a=s<e.length?n[e.charAt(s)]:64;if(++s,null==t||null==r||null==o||null==a)throw new d;const l=t<<2|r>>4;if(i.push(l),64!==o){const e=r<<4&240|o>>2;if(i.push(e),64!==a){const e=o<<6&192|a;i.push(e)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};
/**
             * @license
             * Copyright 2017 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */class d extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const p=function(e){const t=c(e);return u.encodeByteArray(t,!0)},_=function(e){return p(e).replace(/\./g,"")},f=function(e){try{return u.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};
/**
             * @license
             * Copyright 2017 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */
function g(e){return m(void 0,e)}function m(e,t){if(!(t instanceof Object))return t;switch(t.constructor){case Date:return new Date(t.getTime());case Object:void 0===e&&(e={});break;case Array:e=[];break;default:return t}for(const n in t)t.hasOwnProperty(n)&&"__proto__"!==n&&(e[n]=m(e[n],t[n]));return e}
/**
             * @license
             * Copyright 2022 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */
const y=()=>
/**
             * @license
             * Copyright 2022 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */
function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if("undefined"!=typeof global)return global;throw new Error("Unable to locate global object.")}().__FIREBASE_DEFAULTS__,v=()=>{try{return y()||(()=>{if("undefined"==typeof process)return;const e=t.__FIREBASE_DEFAULTS__;return e?JSON.parse(e):void 0})()||(()=>{if("undefined"==typeof document)return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(n){return}const t=e&&f(e[1]);return t&&JSON.parse(t)})()}catch(e){return void console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`)}},C=e=>{const t=(e=>{var t,n;return null===(n=null===(t=v())||void 0===t?void 0:t.emulatorHosts)||void 0===n?void 0:n[e]})(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const i=parseInt(t.substring(n+1),10);return"["===t[0]?[t.substring(1,n-1),i]:[t.substring(0,n),i]},w=()=>{var e;return null===(e=v())||void 0===e?void 0:e.config};
/**
             * @license
             * Copyright 2017 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */
class b{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"==typeof e&&(this.promise.catch((()=>{})),1===e.length?e(t):e(t,n))}}}
/**
             * @license
             * Copyright 2021 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */function I(){return"undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test("undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:"")}class T extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name="FirebaseError",Object.setPrototypeOf(this,T.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,E.prototype.create)}}class E{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},i=`${this.service}/${e}`,s=this.errors[e],r=s?function(e,t){return e.replace(S,((e,n)=>{const i=t[n];return null!=i?String(i):`<${n}?>`}))}(s,n):"Error",o=`${this.serviceName}: ${r} (${i}).`;return new T(i,o,n)}}const S=/\{\$([^}]+)}/g;
/**
             * @license
             * Copyright 2017 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */function k(e){return JSON.parse(e)}function N(e){return JSON.stringify(e)}
/**
             * @license
             * Copyright 2017 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */const P=function(e){let t={},n={},i={},s="";try{const r=e.split(".");t=k(f(r[0])||""),n=k(f(r[1])||""),s=r[2],i=n.d||{},delete n.d}catch(r){}return{header:t,claims:n,data:i,signature:s}};
/**
             * @license
             * Copyright 2017 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */
function x(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function R(e,t){return Object.prototype.hasOwnProperty.call(e,t)?e[t]:void 0}function D(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function A(e,t,n){const i={};for(const s in e)Object.prototype.hasOwnProperty.call(e,s)&&(i[s]=t.call(n,e[s],s,e));return i}function O(e,t){if(e===t)return!0;const n=Object.keys(e),i=Object.keys(t);for(const s of n){if(!i.includes(s))return!1;const n=e[s],r=t[s];if(M(n)&&M(r)){if(!O(n,r))return!1}else if(n!==r)return!1}for(const s of i)if(!n.includes(s))return!1;return!0}function M(e){return null!==e&&"object"==typeof e}
/**
             * @license
             * Copyright 2017 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */
/**
             * @license
             * Copyright 2017 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */
class L{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=64,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const n=this.W_;if("string"==typeof e)for(let c=0;c<16;c++)n[c]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let c=0;c<16;c++)n[c]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let c=16;c<80;c++){const e=n[c-3]^n[c-8]^n[c-14]^n[c-16];n[c]=4294967295&(e<<1|e>>>31)}let i,s,r=this.chain_[0],o=this.chain_[1],a=this.chain_[2],l=this.chain_[3],h=this.chain_[4];for(let c=0;c<80;c++){c<40?c<20?(i=l^o&(a^l),s=1518500249):(i=o^a^l,s=1859775393):c<60?(i=o&a|l&(o|a),s=2400959708):(i=o^a^l,s=3395469782);const e=(r<<5|r>>>27)+i+h+s+n[c]&4294967295;h=l,l=a,a=4294967295&(o<<30|o>>>2),o=r,r=e}this.chain_[0]=this.chain_[0]+r&4294967295,this.chain_[1]=this.chain_[1]+o&4294967295,this.chain_[2]=this.chain_[2]+a&4294967295,this.chain_[3]=this.chain_[3]+l&4294967295,this.chain_[4]=this.chain_[4]+h&4294967295}update(e,t){if(null==e)return;void 0===t&&(t=e.length);const n=t-this.blockSize;let i=0;const s=this.buf_;let r=this.inbuf_;for(;i<t;){if(0===r)for(;i<=n;)this.compress_(e,i),i+=this.blockSize;if("string"==typeof e){for(;i<t;)if(s[r]=e.charCodeAt(i),++r,++i,r===this.blockSize){this.compress_(s),r=0;break}}else for(;i<t;)if(s[r]=e[i],++r,++i,r===this.blockSize){this.compress_(s),r=0;break}}this.inbuf_=r,this.total_+=t}digest(){const e=[];let t=8*this.total_;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=255&t,t/=256;this.compress_(this.buf_);let n=0;for(let i=0;i<5;i++)for(let t=24;t>=0;t-=8)e[n]=this.chain_[i]>>t&255,++n;return e}}function F(e,t){return`${e} failed: ${t} argument `}
/**
             * @license
             * Copyright 2017 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */const q=function(e){let t=0;for(let n=0;n<e.length;n++){const i=e.charCodeAt(n);i<128?t++:i<2048?t+=2:i>=55296&&i<=56319?(t+=4,n++):t+=3}return t};
/**
             * @license
             * Copyright 2021 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */
function U(e){return e&&e._delegate?e._delegate:e}class W{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}
/**
             * @license
             * Copyright 2019 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */const B="[DEFAULT]";
/**
             * @license
             * Copyright 2019 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */class j{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const e=new b;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:t});n&&e.resolve(n)}catch(n){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const n=this.normalizeInstanceIdentifier(null==e?void 0:e.identifier),i=null!==(t=null==e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(i)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(s){if(i)return null;throw s}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if(function(e){return"EAGER"===e.instantiationMode}
/**
             * @license
             * Copyright 2019 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */(e))try{this.getOrInitializeService({instanceIdentifier:B})}catch(t){}for(const[e,n]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(e);try{const e=this.getOrInitializeService({instanceIdentifier:i});n.resolve(e)}catch(t){}}}}clearInstance(e=B){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter((e=>"INTERNAL"in e)).map((e=>e.INTERNAL.delete())),...e.filter((e=>"_delete"in e)).map((e=>e._delete()))])}isComponentSet(){return null!=this.component}isInitialized(e=B){return this.instances.has(e)}getOptions(e=B){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[s,r]of this.instancesDeferred.entries())n===this.normalizeInstanceIdentifier(s)&&r.resolve(i);return i}onInit(e,t){var n;const i=this.normalizeInstanceIdentifier(t),s=null!==(n=this.onInitCallbacks.get(i))&&void 0!==n?n:new Set;s.add(e),this.onInitCallbacks.set(i,s);const r=this.instances.get(i);return r&&e(r,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const s of n)try{s(e,t)}catch(i){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:(i=e,i===B?void 0:i),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch(s){}var i;return n||null}normalizeInstanceIdentifier(e=B){return this.component?this.component.multipleInstances?e:B:e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}class H{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new j(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}
/**
             * @license
             * Copyright 2017 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */var z;!function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"}(z||(z={}));const V={debug:z.DEBUG,verbose:z.VERBOSE,info:z.INFO,warn:z.WARN,error:z.ERROR,silent:z.SILENT},$=z.INFO,Y={[z.DEBUG]:"log",[z.VERBOSE]:"log",[z.INFO]:"info",[z.WARN]:"warn",[z.ERROR]:"error"},K=(e,t,...n)=>{if(t<e.logLevel)return;const i=(new Date).toISOString(),s=Y[t];if(!s)throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);console[s](`[${i}]  ${e.name}:`,...n)};class G{constructor(e){this.name=e,this._logLevel=$,this._logHandler=K,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in z))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"==typeof e?V[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!=typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,z.DEBUG,...e),this._logHandler(this,z.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,z.VERBOSE,...e),this._logHandler(this,z.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,z.INFO,...e),this._logHandler(this,z.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,z.WARN,...e),this._logHandler(this,z.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,z.ERROR,...e),this._logHandler(this,z.ERROR,...e)}}let Q,J;const X=new WeakMap,Z=new WeakMap,ee=new WeakMap,te=new WeakMap,ne=new WeakMap;let ie={get(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return Z.get(e);if("objectStoreNames"===t)return e.objectStoreNames||ee.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return oe(e[t])},set:(e,t,n)=>(e[t]=n,!0),has:(e,t)=>e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e};function se(e){return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(J||(J=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(e)?function(...t){return e.apply(ae(this),t),oe(X.get(this))}:function(...t){return oe(e.apply(ae(this),t))}:function(t,...n){const i=e.call(ae(this),t,...n);return ee.set(i,t.sort?t.sort():[t]),oe(i)}}function re(e){return"function"==typeof e?se(e):(e instanceof IDBTransaction&&function(e){if(Z.has(e))return;const t=new Promise(((t,n)=>{const i=()=>{e.removeEventListener("complete",s),e.removeEventListener("error",r),e.removeEventListener("abort",r)},s=()=>{t(),i()},r=()=>{n(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",s),e.addEventListener("error",r),e.addEventListener("abort",r)}));Z.set(e,t)}(e),t=e,(Q||(Q=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])).some((e=>t instanceof e))?new Proxy(e,ie):e);var t}function oe(e){if(e instanceof IDBRequest)return function(e){const t=new Promise(((t,n)=>{const i=()=>{e.removeEventListener("success",s),e.removeEventListener("error",r)},s=()=>{t(oe(e.result)),i()},r=()=>{n(e.error),i()};e.addEventListener("success",s),e.addEventListener("error",r)}));return t.then((t=>{t instanceof IDBCursor&&X.set(t,e)})).catch((()=>{})),ne.set(t,e),t}(e);if(te.has(e))return te.get(e);const t=re(e);return t!==e&&(te.set(e,t),ne.set(t,e)),t}const ae=e=>ne.get(e),le=["get","getKey","getAll","getAllKeys","count"],he=["put","add","delete","clear"],ce=new Map;function ue(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!=typeof t)return;if(ce.get(t))return ce.get(t);const n=t.replace(/FromIndex$/,""),i=t!==n,s=he.includes(n);if(!(n in(i?IDBIndex:IDBObjectStore).prototype)||!s&&!le.includes(n))return;const r=async function(e,...t){const r=this.transaction(e,s?"readwrite":"readonly");let o=r.store;return i&&(o=o.index(t.shift())),(await Promise.all([o[n](...t),s&&r.done]))[0]};return ce.set(t,r),r}var de;de=ie,ie={...de,get:(e,t,n)=>ue(e,t)||de.get(e,t,n),has:(e,t)=>!!ue(e,t)||de.has(e,t)};
/**
             * @license
             * Copyright 2019 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */
class pe{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map((e=>{if(function(e){const t=e.getComponent();return"VERSION"===(null==t?void 0:t.type)}(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null})).filter((e=>e)).join(" ")}}const _e="@firebase/app",fe="0.11.4",ge=new G("@firebase/app"),me="@firebase/app-compat",ye="@firebase/analytics-compat",ve="@firebase/analytics",Ce="@firebase/app-check-compat",we="@firebase/app-check",be="@firebase/auth",Ie="@firebase/auth-compat",Te="@firebase/database",Ee="@firebase/data-connect",Se="@firebase/database-compat",ke="@firebase/functions",Ne="@firebase/functions-compat",Pe="@firebase/installations",xe="@firebase/installations-compat",Re="@firebase/messaging",De="@firebase/messaging-compat",Ae="@firebase/performance",Oe="@firebase/performance-compat",Me="@firebase/remote-config",Le="@firebase/remote-config-compat",Fe="@firebase/storage",qe="@firebase/storage-compat",Ue="@firebase/firestore",We="@firebase/vertexai",Be="@firebase/firestore-compat",je="firebase",He="[DEFAULT]",ze={[_e]:"fire-core",[me]:"fire-core-compat",[ve]:"fire-analytics",[ye]:"fire-analytics-compat",[we]:"fire-app-check",[Ce]:"fire-app-check-compat",[be]:"fire-auth",[Ie]:"fire-auth-compat",[Te]:"fire-rtdb",[Ee]:"fire-data-connect",[Se]:"fire-rtdb-compat",[ke]:"fire-fn",[Ne]:"fire-fn-compat",[Pe]:"fire-iid",[xe]:"fire-iid-compat",[Re]:"fire-fcm",[De]:"fire-fcm-compat",[Ae]:"fire-perf",[Oe]:"fire-perf-compat",[Me]:"fire-rc",[Le]:"fire-rc-compat",[Fe]:"fire-gcs",[qe]:"fire-gcs-compat",[Ue]:"fire-fst",[Be]:"fire-fst-compat",[We]:"fire-vertex","fire-js":"fire-js",[je]:"fire-js-all"},Ve=new Map,$e=new Map,Ye=new Map;function Ke(e,t){try{e.container.addComponent(t)}catch(n){ge.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function Ge(e){const t=e.name;if(Ye.has(t))return ge.debug(`There were multiple attempts to register component ${t}.`),!1;Ye.set(t,e);for(const n of Ve.values())Ke(n,e);for(const n of $e.values())Ke(n,e);return!0}
/**
             * @license
             * Copyright 2019 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */
const Qe=new E("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."});
/**
             * @license
             * Copyright 2019 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */
class Je{constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new W("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Qe.create("app-deleted",{appName:this._name})}}
/**
             * @license
             * Copyright 2019 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */function Xe(e,t={}){let n=e;"object"!=typeof t&&(t={name:t});const i=Object.assign({name:He,automaticDataCollectionEnabled:!1},t),s=i.name;if("string"!=typeof s||!s)throw Qe.create("bad-app-name",{appName:String(s)});if(n||(n=w()),!n)throw Qe.create("no-options");const r=Ve.get(s);if(r){if(O(n,r.options)&&O(i,r.config))return r;throw Qe.create("duplicate-app",{appName:s})}const o=new H(s);for(const l of Ye.values())o.addComponent(l);const a=new Je(n,i,o);return Ve.set(s,a),a}function Ze(e,t,n){var i;let s=null!==(i=ze[e])&&void 0!==i?i:e;n&&(s+=`-${n}`);const r=s.match(/\s|\//),o=t.match(/\s|\//);if(r||o){const e=[`Unable to register library "${s}" with version "${t}":`];return r&&e.push(`library name "${s}" contains illegal characters (whitespace or "/")`),r&&o&&e.push("and"),o&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void ge.warn(e.join(" "))}Ge(new W(`${s}-version`,(()=>({library:s,version:t})),"VERSION"))}
/**
             * @license
             * Copyright 2021 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */const et="firebase-heartbeat-store";let tt=null;function nt(){return tt||(tt=function(e,t,{blocked:n,upgrade:i,blocking:s,terminated:r}={}){const o=indexedDB.open(e,t),a=oe(o);return i&&o.addEventListener("upgradeneeded",(e=>{i(oe(o.result),e.oldVersion,e.newVersion,oe(o.transaction),e)})),n&&o.addEventListener("blocked",(e=>n(e.oldVersion,e.newVersion,e))),a.then((e=>{r&&e.addEventListener("close",(()=>r())),s&&e.addEventListener("versionchange",(e=>s(e.oldVersion,e.newVersion,e)))})).catch((()=>{})),a}("firebase-heartbeat-database",1,{upgrade:(e,t)=>{if(0===t)try{e.createObjectStore(et)}catch(n){console.warn(n)}}}).catch((e=>{throw Qe.create("idb-open",{originalErrorMessage:e.message})}))),tt}async function it(e,t){try{const n=(await nt()).transaction(et,"readwrite"),i=n.objectStore(et);await i.put(t,st(e)),await n.done}catch(n){if(n instanceof T)ge.warn(n.message);else{const e=Qe.create("idb-set",{originalErrorMessage:null==n?void 0:n.message});ge.warn(e.message)}}}function st(e){return`${e.name}!${e.options.appId}`}
/**
             * @license
             * Copyright 2021 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */class rt{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new at(t),this._heartbeatsCachePromise=this._storage.read().then((e=>(this._heartbeatsCache=e,e)))}async triggerHeartbeat(){var e,t;try{const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=ot();if(null==(null===(e=this._heartbeatsCache)||void 0===e?void 0:e.heartbeats)&&(this._heartbeatsCache=await this._heartbeatsCachePromise,null==(null===(t=this._heartbeatsCache)||void 0===t?void 0:t.heartbeats)))return;if(this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some((e=>e.date===i)))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:n}),this._heartbeatsCache.heartbeats.length>30){const e=function(e){if(0===e.length)return-1;let t=0,n=e[0].date;for(let i=1;i<e.length;i++)e[i].date<n&&(n=e[i].date,t=i);return t}
/**
             * @license
             * Copyright 2019 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(e,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(n){ge.warn(n)}}async getHeartbeatsHeader(){var e;try{if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null==(null===(e=this._heartbeatsCache)||void 0===e?void 0:e.heartbeats)||0===this._heartbeatsCache.heartbeats.length)return"";const t=ot(),{heartbeatsToSend:n,unsentEntries:i}=function(e,t=1024){const n=[];let i=e.slice();for(const s of e){const e=n.find((e=>e.agent===s.agent));if(e){if(e.dates.push(s.date),lt(n)>t){e.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),lt(n)>t){n.pop();break}i=i.slice(1)}return{heartbeatsToSend:n,unsentEntries:i}}(this._heartbeatsCache.heartbeats),s=_(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(t){return ge.warn(t),""}}}function ot(){return(new Date).toISOString().substring(0,10)}class at{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!function(){try{return"object"==typeof indexedDB}catch(e){return!1}}()&&new Promise(((e,t)=>{try{let n=!0;const i="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(i);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(i),e(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var e;t((null===(e=s.error)||void 0===e?void 0:e.message)||"")}}catch(kt){t(kt)}})).then((()=>!0)).catch((()=>!1))}async read(){if(await this._canUseIndexedDBPromise){const e=await async function(e){try{const t=(await nt()).transaction(et),n=await t.objectStore(et).get(st(e));return await t.done,n}catch(t){if(t instanceof T)ge.warn(t.message);else{const e=Qe.create("idb-get",{originalErrorMessage:null==t?void 0:t.message});ge.warn(e.message)}}}(this.app);return(null==e?void 0:e.heartbeats)?e:{heartbeats:[]}}return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const n=await this.read();return it(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var t;if(await this._canUseIndexedDBPromise){const n=await this.read();return it(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}}}function lt(e){return _(JSON.stringify({version:2,heartbeats:e})).length}var ht;ht="",Ge(new W("platform-logger",(e=>new pe(e)),"PRIVATE")),Ge(new W("heartbeat",(e=>new rt(e)),"PRIVATE")),Ze(_e,fe,ht),Ze(_e,fe,"esm2017"),Ze("fire-js",""),
/**
             * @license
             * Copyright 2020 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */
Ze("firebase","11.6.0","app");var ct={};const ut="@firebase/database",dt="1.0.14";
/**
             * @license
             * Copyright 2019 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */
let pt="";
/**
             * @license
             * Copyright 2017 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */
class _t{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){null==t?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),N(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return null==t?null:k(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}
/**
             * @license
             * Copyright 2017 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */class ft{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){null==t?delete this.cache_[e]:this.cache_[e]=t}get(e){return x(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}
/**
             * @license
             * Copyright 2017 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */const gt=function(e){try{if("undefined"!=typeof window&&void 0!==window[e]){const t=window[e];return t.setItem("firebase:sentinel","cache"),t.removeItem("firebase:sentinel"),new _t(t)}}catch(t){}return new ft},mt=gt("localStorage"),yt=gt("sessionStorage"),vt=new G("@firebase/database"),Ct=function(){let e=1;return function(){return e++}}(),wt=function(e){const t=function(e){const t=[];let n=0;for(let i=0;i<e.length;i++){let s=e.charCodeAt(i);if(s>=55296&&s<=56319){const t=s-55296;i++,l(i<e.length,"Surrogate pair missing trail surrogate."),s=65536+(t<<10)+(e.charCodeAt(i)-56320)}s<128?t[n++]=s:s<2048?(t[n++]=s>>6|192,t[n++]=63&s|128):s<65536?(t[n++]=s>>12|224,t[n++]=s>>6&63|128,t[n++]=63&s|128):(t[n++]=s>>18|240,t[n++]=s>>12&63|128,t[n++]=s>>6&63|128,t[n++]=63&s|128)}return t}(e),n=new L;n.update(t);const i=n.digest();return u.encodeByteArray(i)},bt=function(...e){let t="";for(let n=0;n<e.length;n++){const i=e[n];Array.isArray(i)||i&&"object"==typeof i&&"number"==typeof i.length?t+=bt.apply(null,i):t+="object"==typeof i?N(i):i,t+=" "}return t};let It=null,Tt=!0;const Et=function(...e){if(!0===Tt&&(Tt=!1,null===It&&!0===yt.get("logging_enabled")&&(l(!0,"Can't turn on custom loggers persistently."),vt.logLevel=z.VERBOSE,It=vt.log.bind(vt))),It){const t=bt.apply(null,e);It(t)}},St=function(e){return function(...t){Et(e,...t)}},kt=function(...e){const t="FIREBASE INTERNAL ERROR: "+bt(...e);vt.error(t)},Nt=function(...e){const t=`FIREBASE FATAL ERROR: ${bt(...e)}`;throw vt.error(t),new Error(t)},Pt=function(...e){const t="FIREBASE WARNING: "+bt(...e);vt.warn(t)},xt=function(e){return"number"==typeof e&&(e!=e||e===Number.POSITIVE_INFINITY||e===Number.NEGATIVE_INFINITY)},Rt="[MIN_NAME]",Dt="[MAX_NAME]",At=function(e,t){if(e===t)return 0;if(e===Rt||t===Dt)return-1;if(t===Rt||e===Dt)return 1;{const n=Bt(e),i=Bt(t);return null!==n?null!==i?n-i==0?e.length-t.length:n-i:-1:null!==i?1:e<t?-1:1}},Ot=function(e,t){return e===t?0:e<t?-1:1},Mt=function(e,t){if(t&&e in t)return t[e];throw new Error("Missing required key ("+e+") in object: "+N(t))},Lt=function(e){if("object"!=typeof e||null===e)return N(e);const t=[];for(const i in e)t.push(i);t.sort();let n="{";for(let i=0;i<t.length;i++)0!==i&&(n+=","),n+=N(t[i]),n+=":",n+=Lt(e[t[i]]);return n+="}",n},Ft=function(e,t){const n=e.length;if(n<=t)return[e];const i=[];for(let s=0;s<n;s+=t)s+t>n?i.push(e.substring(s,n)):i.push(e.substring(s,s+t));return i};function qt(e,t){for(const n in e)e.hasOwnProperty(n)&&t(n,e[n])}const Ut=function(e){l(!xt(e),"Invalid JSON number");const t=1023;let n,i,s,r,o;0===e?(i=0,s=0,n=1/e==-1/0?1:0):(n=e<0,(e=Math.abs(e))>=Math.pow(2,-1022)?(r=Math.min(Math.floor(Math.log(e)/Math.LN2),t),i=r+t,s=Math.round(e*Math.pow(2,52-r)-Math.pow(2,52))):(i=0,s=Math.round(e/Math.pow(2,-1074))));const a=[];for(o=52;o;o-=1)a.push(s%2?1:0),s=Math.floor(s/2);for(o=11;o;o-=1)a.push(i%2?1:0),i=Math.floor(i/2);a.push(n?1:0),a.reverse();const h=a.join("");let c="";for(o=0;o<64;o+=8){let e=parseInt(h.substr(o,8),2).toString(16);1===e.length&&(e="0"+e),c+=e}return c.toLowerCase()},Wt=new RegExp("^-?(0*)\\d{1,10}$"),Bt=function(e){if(Wt.test(e)){const t=Number(e);if(t>=-2147483648&&t<=2147483647)return t}return null},jt=function(e){try{e()}catch(t){setTimeout((()=>{const e=t.stack||"";throw Pt("Exception was thrown by user callback.",e),t}),Math.floor(0))}},Ht=function(e,t){const n=setTimeout(e,t);return"number"==typeof n&&"undefined"!=typeof Deno&&Deno.unrefTimer?Deno.unrefTimer(n):"object"==typeof n&&n.unref&&n.unref(),n};
/**
             * @license
             * Copyright 2021 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */
class zt{constructor(e,t){var n;this.appCheckProvider=t,this.appName=e.name,null!=(n=e)&&void 0!==n.settings&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.appCheck=null==t?void 0:t.getImmediate({optional:!0}),this.appCheck||null==t||t.get().then((e=>this.appCheck=e))}getToken(e){if(this.serverAppAppCheckToken){if(e)throw new Error("Attempted reuse of `FirebaseServerApp.appCheckToken` after previous usage failed.");return Promise.resolve({token:this.serverAppAppCheckToken})}return this.appCheck?this.appCheck.getToken(e):new Promise(((t,n)=>{setTimeout((()=>{this.appCheck?this.getToken(e).then(t,n):t(null)}),0)}))}addTokenChangeListener(e){var t;null===(t=this.appCheckProvider)||void 0===t||t.get().then((t=>t.addTokenListener(e)))}notifyForInvalidToken(){Pt(`Provided AppCheck credentials for the app named "${this.appName}" are invalid. This usually indicates your app was not initialized correctly.`)}}
/**
             * @license
             * Copyright 2017 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */class Vt{constructor(e,t,n){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=n,this.auth_=null,this.auth_=n.getImmediate({optional:!0}),this.auth_||n.onInit((e=>this.auth_=e))}getToken(e){return this.auth_?this.auth_.getToken(e).catch((e=>e&&"auth/token-not-initialized"===e.code?(Et("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(e))):new Promise(((t,n)=>{setTimeout((()=>{this.auth_?this.getToken(e).then(t,n):t(null)}),0)}))}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then((t=>t.addAuthTokenListener(e)))}removeTokenChangeListener(e){this.authProvider_.get().then((t=>t.removeAuthTokenListener(e)))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Pt(e)}}class $t{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}$t.OWNER="owner";
/**
             * @license
             * Copyright 2017 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */
const Yt=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Kt="ac",Gt="websocket",Qt="long_polling";
/**
             * @license
             * Copyright 2017 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */
class Jt{constructor(e,t,n,i,s=!1,r="",o=!1,a=!1,l=null){this.secure=t,this.namespace=n,this.webSocketOnly=i,this.nodeAdmin=s,this.persistenceKey=r,this.includeNamespaceInQueryParams=o,this.isUsingEmulator=a,this.emulatorOptions=l,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=mt.get("host:"+e)||this._host}isCacheableHost(){return"s-"===this.internalHost.substr(0,2)}isCustomHost(){return"firebaseio.com"!==this._domain&&"firebaseio-demo.com"!==this._domain}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&mt.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function Xt(e,t,n){let i;if(l("string"==typeof t,"typeof type must == string"),l("object"==typeof n,"typeof params must == object"),t===Gt)i=(e.secure?"wss://":"ws://")+e.internalHost+"/.ws?";else{if(t!==Qt)throw new Error("Unknown connection type: "+t);i=(e.secure?"https://":"http://")+e.internalHost+"/.lp?"}(function(e){return e.host!==e.internalHost||e.isCustomHost()||e.includeNamespaceInQueryParams})(e)&&(n.ns=e.namespace);const s=[];return qt(n,((e,t)=>{s.push(e+"="+t)})),i+s.join("&")}
/**
             * @license
             * Copyright 2017 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */class Zt{constructor(){this.counters_={}}incrementCounter(e,t=1){x(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return g(this.counters_)}}
/**
             * @license
             * Copyright 2017 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */const en={},tn={};function nn(e){const t=e.toString();return en[t]||(en[t]=new Zt),en[t]}
/**
             * @license
             * Copyright 2017 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */
class sn{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){const e=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let t=0;t<e.length;++t)e[t]&&jt((()=>{this.onMessage_(e[t])}));if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}
/**
             * @license
             * Copyright 2017 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */const rn="start";class on{constructor(e,t,n,i,s,r,o){this.connId=e,this.repoInfo=t,this.applicationId=n,this.appCheckToken=i,this.authToken=s,this.transportSessionId=r,this.lastSessionId=o,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=St(e),this.stats_=nn(t),this.urlFn=e=>(this.appCheckToken&&(e[Kt]=this.appCheckToken),Xt(t,Qt,e))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new sn(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout((()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null}),Math.floor(3e4)),function(e){if("complete"===document.readyState)e();else{let t=!1;const n=function(){document.body?t||(t=!0,e()):setTimeout(n,Math.floor(10))};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",(()=>{"complete"===document.readyState&&n()})),window.attachEvent("onload",n))}}((()=>{if(this.isClosed_)return;this.scriptTagHolder=new an(((...e)=>{const[t,n,i,s,r]=e;if(this.incrementIncomingBytes_(e),this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,t===rn)this.id=n,this.password=i;else{if("close"!==t)throw new Error("Unrecognized command received: "+t);n?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(n,(()=>{this.onClosed_()}))):this.onClosed_()}}),((...e)=>{const[t,n]=e;this.incrementIncomingBytes_(e),this.myPacketOrderer.handleResponse(t,n)}),(()=>{this.onClosed_()}),this.urlFn);const e={};e[rn]="t",e.ser=Math.floor(1e8*Math.random()),this.scriptTagHolder.uniqueCallbackIdentifier&&(e.cb=this.scriptTagHolder.uniqueCallbackIdentifier),e.v="5",this.transportSessionId&&(e.s=this.transportSessionId),this.lastSessionId&&(e.ls=this.lastSessionId),this.applicationId&&(e.p=this.applicationId),this.appCheckToken&&(e[Kt]=this.appCheckToken),"undefined"!=typeof location&&location.hostname&&Yt.test(location.hostname)&&(e.r="f");const t=this.urlFn(e);this.log_("Connecting via long-poll to "+t),this.scriptTagHolder.addTag(t,(()=>{}))}))}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){on.forceAllow_=!0}static forceDisallow(){on.forceDisallow_=!0}static isAvailable(){return!!on.forceAllow_||!(on.forceDisallow_||"undefined"==typeof document||null==document.createElement||"object"==typeof window&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href)||"object"==typeof Windows&&"object"==typeof Windows.UI)}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=N(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const n=p(t),i=Ft(n,1840);for(let s=0;s<i.length;s++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[s]),this.curSegmentNum++}addDisconnectPingFrame(e,t){this.myDisconnFrame=document.createElement("iframe");const n={dframe:"t"};n.id=e,n.pw=t,this.myDisconnFrame.src=this.urlFn(n),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=N(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class an{constructor(e,t,n,i){this.onDisconnect=n,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(1e8*Math.random()),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=Ct(),window["pLPCommand"+this.uniqueCallbackIdentifier]=e,window["pRTLPCB"+this.uniqueCallbackIdentifier]=t,this.myIFrame=an.createIFrame_();let n="";this.myIFrame.src&&"javascript:"===this.myIFrame.src.substr(0,11)&&(n='<script>document.domain="'+document.domain+'";<\/script>');const i="<html><body>"+n+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(i),this.myIFrame.doc.close()}catch(s){Et("frame writing exception"),s.stack&&Et(s.stack),Et(s)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",!document.body)throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";document.body.appendChild(e);try{e.contentWindow.document||Et("No IE domain setting required")}catch(t){const n=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+n+"';document.close();})())"}return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout((()=>{null!==this.myIFrame&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)}),Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e.id=this.myID,e.pw=this.myPW,e.ser=this.currentSerial;let t=this.urlFn(e),n="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+30+n.length<=1870;){const e=this.pendingSegs.shift();n=n+"&seg"+i+"="+e.seg+"&ts"+i+"="+e.ts+"&d"+i+"="+e.d,i++}return t+=n,this.addLongPollTag_(t,this.currentSerial),!0}return!1}enqueueSegment(e,t,n){this.pendingSegs.push({seg:e,ts:t,d:n}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const n=()=>{this.outstandingRequests.delete(t),this.newRequest_()},i=setTimeout(n,Math.floor(25e3));this.addTag(e,(()=>{clearTimeout(i),n()}))}addTag(e,t){setTimeout((()=>{try{if(!this.sendNewPolls)return;const n=this.myIFrame.doc.createElement("script");n.type="text/javascript",n.async=!0,n.src=e,n.onload=n.onreadystatechange=function(){const e=n.readyState;e&&"loaded"!==e&&"complete"!==e||(n.onload=n.onreadystatechange=null,n.parentNode&&n.parentNode.removeChild(n),t())},n.onerror=()=>{Et("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(n)}catch(n){}}),Math.floor(1))}}
/**
             * @license
             * Copyright 2017 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */let ln=null;"undefined"!=typeof MozWebSocket?ln=MozWebSocket:"undefined"!=typeof WebSocket&&(ln=WebSocket);class hn{constructor(e,t,n,i,s,r,o){this.connId=e,this.applicationId=n,this.appCheckToken=i,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=St(this.connId),this.stats_=nn(t),this.connURL=hn.connectionURL_(t,r,o,i,n),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,n,i,s){const r={v:"5"};return"undefined"!=typeof location&&location.hostname&&Yt.test(location.hostname)&&(r.r="f"),t&&(r.s=t),n&&(r.ls=n),i&&(r[Kt]=i),s&&(r.p=s),Xt(e,Gt,r)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,mt.set("previous_websocket_failure",!0);try{let e;this.mySock=new ln(this.connURL,[],e)}catch(n){this.log_("Error instantiating WebSocket.");const e=n.message||n.data;return e&&this.log_(e),void this.onClosed_()}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=e=>{this.handleIncomingFrame(e)},this.mySock.onerror=e=>{this.log_("WebSocket error.  Closing connection.");const t=e.message||e.data;t&&this.log_(t),this.onClosed_()}}start(){}static forceDisallow(){hn.forceDisallow_=!0}static isAvailable(){let e=!1;if("undefined"!=typeof navigator&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,n=navigator.userAgent.match(t);n&&n.length>1&&parseFloat(n[1])<4.4&&(e=!0)}return!e&&null!==ln&&!hn.forceDisallow_}static previouslyFailed(){return mt.isInMemoryStorage||!0===mt.get("previous_websocket_failure")}markConnectionHealthy(){mt.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const e=this.frames.join("");this.frames=null;const t=k(e);this.onMessage(t)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(l(null===this.frames,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(null===this.mySock)return;const t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),null!==this.frames)this.appendFrame_(t);else{const e=this.extractFrameCount_(t);null!==e&&this.appendFrame_(e)}}send(e){this.resetKeepAlive();const t=N(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const n=Ft(t,16384);n.length>1&&this.sendString_(String(n.length));for(let i=0;i<n.length;i++)this.sendString_(n[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval((()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()}),Math.floor(45e3))}sendString_(e){try{this.mySock.send(e)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}hn.responsesRequiredToBeHealthy=2,hn.healthyTimeout=3e4;
/**
             * @license
             * Copyright 2017 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */
class cn{static get ALL_TRANSPORTS(){return[on,hn]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){const t=hn.isAvailable();let n=t&&!hn.previouslyFailed();if(e.webSocketOnly&&(t||Pt("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),n=!0),n)this.transports_=[hn];else{const e=this.transports_=[];for(const t of cn.ALL_TRANSPORTS)t&&t.isAvailable()&&e.push(t);cn.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}cn.globalTransportInitialized_=!1;class un{constructor(e,t,n,i,s,r,o,a,l,h){this.id=e,this.repoInfo_=t,this.applicationId_=n,this.appCheckToken_=i,this.authToken_=s,this.onMessage_=r,this.onReady_=o,this.onDisconnect_=a,this.onKill_=l,this.lastSessionId=h,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=St("c:"+this.id+":"),this.transportManager_=new cn(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.conn_),n=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout((()=>{this.conn_&&this.conn_.open(t,n)}),Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=Ht((()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>102400?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>10240?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))}),Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{2!==this.state_&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if("t"in e){const t=e.t;"a"===t?this.upgradeIfSecondaryHealthy_():"r"===t?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),this.tx_!==this.secondaryConn_&&this.rx_!==this.secondaryConn_||this.close()):"o"===t&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=Mt("t",e),n=Mt("d",e);if("c"===t)this.onSecondaryControl_(n);else{if("d"!==t)throw new Error("Unknown protocol layer: "+t);this.pendingDataMessages.push(n)}}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:"p",d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:"a",d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:"n",d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=Mt("t",e),n=Mt("d",e);"c"===t?this.onControl_(n):"d"===t&&this.onDataMessage_(n)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=Mt("t",e);if("d"in e){const n=e.d;if("h"===t){const e=Object.assign({},n);this.repoInfo_.isUsingEmulator&&(e.h=this.repoInfo_.host),this.onHandshake_(e)}else if("n"===t){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let e=0;e<this.pendingDataMessages.length;++e)this.onDataMessage_(this.pendingDataMessages[e]);this.pendingDataMessages=[],this.tryCleanupConnection()}else"s"===t?this.onConnectionShutdown_(n):"r"===t?this.onReset_(n):"e"===t?kt("Server Error: "+n):"o"===t?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):kt("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,n=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,0===this.state_&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),"5"!==n&&Pt("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.secondaryConn_),n=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,n),Ht((()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())}),Math.floor(6e4))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,1===this.state_?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),0===this.primaryResponsesRequired_?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Ht((()=>{this.sendPingOnPrimaryIfNecessary_()}),Math.floor(5e3))}sendPingOnPrimaryIfNecessary_(){this.isHealthy_||1!==this.state_||(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:"p",d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,this.tx_!==e&&this.rx_!==e||this.close()}onConnectionLost_(e){this.conn_=null,e||0!==this.state_?1===this.state_&&this.log_("Realtime connection lost."):(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(mt.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(1!==this.state_)throw"Connection is not connected";this.tx_.send(e)}close(){2!==this.state_&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}
/**
             * @license
             * Copyright 2017 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */class dn{put(e,t,n,i){}merge(e,t,n,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,n){}onDisconnectMerge(e,t,n){}onDisconnectCancel(e,t){}reportStats(e){}}
/**
             * @license
             * Copyright 2017 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */class pn{constructor(e){this.allowedEvents_=e,this.listeners_={},l(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const n=[...this.listeners_[e]];for(let e=0;e<n.length;e++)n[e].callback.apply(n[e].context,t)}}on(e,t,n){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:n});const i=this.getInitialEvent(e);i&&t.apply(n,i)}off(e,t,n){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let s=0;s<i.length;s++)if(i[s].callback===t&&(!n||n===i[s].context))return void i.splice(s,1)}validateEventType_(e){l(this.allowedEvents_.find((t=>t===e)),"Unknown event: "+e)}}
/**
             * @license
             * Copyright 2017 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */class _n extends pn{static getInstance(){return new _n}constructor(){super(["online"]),this.online_=!0,"undefined"==typeof window||void 0===window.addEventListener||I()||(window.addEventListener("online",(()=>{this.online_||(this.online_=!0,this.trigger("online",!0))}),!1),window.addEventListener("offline",(()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))}),!1))}getInitialEvent(e){return l("online"===e,"Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}
/**
             * @license
             * Copyright 2017 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */class fn{constructor(e,t){if(void 0===t){this.pieces_=e.split("/");let t=0;for(let e=0;e<this.pieces_.length;e++)this.pieces_[e].length>0&&(this.pieces_[t]=this.pieces_[e],t++);this.pieces_.length=t,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)""!==this.pieces_[t]&&(e+="/"+this.pieces_[t]);return e||"/"}}function gn(){return new fn("")}function mn(e){return e.pieceNum_>=e.pieces_.length?null:e.pieces_[e.pieceNum_]}function yn(e){return e.pieces_.length-e.pieceNum_}function vn(e){let t=e.pieceNum_;return t<e.pieces_.length&&t++,new fn(e.pieces_,t)}function Cn(e){return e.pieceNum_<e.pieces_.length?e.pieces_[e.pieces_.length-1]:null}function wn(e,t=0){return e.pieces_.slice(e.pieceNum_+t)}function bn(e){if(e.pieceNum_>=e.pieces_.length)return null;const t=[];for(let n=e.pieceNum_;n<e.pieces_.length-1;n++)t.push(e.pieces_[n]);return new fn(t,0)}function In(e,t){const n=[];for(let i=e.pieceNum_;i<e.pieces_.length;i++)n.push(e.pieces_[i]);if(t instanceof fn)for(let i=t.pieceNum_;i<t.pieces_.length;i++)n.push(t.pieces_[i]);else{const e=t.split("/");for(let t=0;t<e.length;t++)e[t].length>0&&n.push(e[t])}return new fn(n,0)}function Tn(e){return e.pieceNum_>=e.pieces_.length}function En(e,t){const n=mn(e),i=mn(t);if(null===n)return t;if(n===i)return En(vn(e),vn(t));throw new Error("INTERNAL ERROR: innerPath ("+t+") is not within outerPath ("+e+")")}function Sn(e,t){if(yn(e)!==yn(t))return!1;for(let n=e.pieceNum_,i=t.pieceNum_;n<=e.pieces_.length;n++,i++)if(e.pieces_[n]!==t.pieces_[i])return!1;return!0}function kn(e,t){let n=e.pieceNum_,i=t.pieceNum_;if(yn(e)>yn(t))return!1;for(;n<e.pieces_.length;){if(e.pieces_[n]!==t.pieces_[i])return!1;++n,++i}return!0}class Nn{constructor(e,t){this.errorPrefix_=t,this.parts_=wn(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let n=0;n<this.parts_.length;n++)this.byteLength_+=q(this.parts_[n]);Pn(this)}}function Pn(e){if(e.byteLength_>768)throw new Error(e.errorPrefix_+"has a key path longer than 768 bytes ("+e.byteLength_+").");if(e.parts_.length>32)throw new Error(e.errorPrefix_+"path specified exceeds the maximum depth that can be written (32) or object contains a cycle "+xn(e))}function xn(e){return 0===e.parts_.length?"":"in property '"+e.parts_.join(".")+"'"}
/**
             * @license
             * Copyright 2017 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */class Rn extends pn{static getInstance(){return new Rn}constructor(){let e,t;super(["visible"]),"undefined"!=typeof document&&void 0!==document.addEventListener&&(void 0!==document.hidden?(t="visibilitychange",e="hidden"):void 0!==document.mozHidden?(t="mozvisibilitychange",e="mozHidden"):void 0!==document.msHidden?(t="msvisibilitychange",e="msHidden"):void 0!==document.webkitHidden&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,(()=>{const t=!document[e];t!==this.visible_&&(this.visible_=t,this.trigger("visible",t))}),!1)}getInitialEvent(e){return l("visible"===e,"Unknown event type: "+e),[this.visible_]}}
/**
             * @license
             * Copyright 2017 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */const Dn=1e3;class An extends dn{constructor(e,t,n,i,s,r,o,a){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=n,this.onConnectStatus_=i,this.onServerInfoUpdate_=s,this.authTokenProvider_=r,this.appCheckTokenProvider_=o,this.authOverride_=a,this.id=An.nextPersistentConnectionId_++,this.log_=St("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Dn,this.maxReconnectDelay_=3e5,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,a)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Rn.getInstance().on("visible",this.onVisible_,this),-1===e.host.indexOf("fblocal")&&_n.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,n){const i=++this.requestNumber_,s={r:i,a:e,b:t};this.log_(N(s)),l(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),n&&(this.requestCBHash_[i]=n)}get(e){this.initConnection_();const t=new b,n={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:e=>{const n=e.d;"ok"===e.s?t.resolve(n):t.reject(n)}};this.outstandingGets_.push(n),this.outstandingGetCount_++;const i=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(i),t.promise}listen(e,t,n,i){this.initConnection_();const s=e._queryIdentifier,r=e._path.toString();this.log_("Listen called for "+r+" "+s),this.listens.has(r)||this.listens.set(r,new Map),l(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),l(!this.listens.get(r).has(s),"listen() called twice for same path/queryId.");const o={onComplete:i,hashFn:t,query:e,tag:n};this.listens.get(r).set(s,o),this.connected_&&this.sendListen_(o)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,(n=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,0===this.outstandingGetCount_&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(n)}))}sendListen_(e){const t=e.query,n=t._path.toString(),i=t._queryIdentifier;this.log_("Listen on "+n+" for "+i);const s={p:n};e.tag&&(s.q=t._queryObject,s.t=e.tag),s.h=e.hashFn(),this.sendRequest("q",s,(s=>{const r=s.d,o=s.s;An.warnOnListenWarnings_(r,t),(this.listens.get(n)&&this.listens.get(n).get(i))===e&&(this.log_("listen response",s),"ok"!==o&&this.removeListen_(n,i),e.onComplete&&e.onComplete(o,r))}))}static warnOnListenWarnings_(e,t){if(e&&"object"==typeof e&&x(e,"w")){const n=R(e,"w");if(Array.isArray(n)&&~n.indexOf("no_index")){const e='".indexOn": "'+t._queryParams.getIndex().toString()+'"',n=t._path.toString();Pt(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${e} at ${n} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},(()=>{})),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&40===e.length||function(e){const t=P(e).claims;return"object"==typeof t&&!0===t.admin}(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=3e4)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},(()=>{}))}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=function(e){const t=P(e).claims;return!!t&&"object"==typeof t&&t.hasOwnProperty("iat")}(e)?"auth":"gauth",n={cred:e};null===this.authOverride_?n.noauth=!0:"object"==typeof this.authOverride_&&(n.authvar=this.authOverride_),this.sendRequest(t,n,(t=>{const n=t.s,i=t.d||"error";this.authToken_===e&&("ok"===n?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(n,i))}))}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},(e=>{const t=e.s,n=e.d||"error";"ok"===t?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,n)}))}unlisten(e,t){const n=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+n+" "+i),l(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(n,i)&&this.connected_&&this.sendUnlisten_(n,i,e._queryObject,t)}sendUnlisten_(e,t,n,i){this.log_("Unlisten on "+e+" for "+t);const s={p:e};i&&(s.q=n,s.t=i),this.sendRequest("n",s)}onDisconnectPut(e,t,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:n})}onDisconnectMerge(e,t,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:n})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,n,i){const s={p:t,d:n};this.log_("onDisconnect "+e,s),this.sendRequest(e,s,(e=>{i&&setTimeout((()=>{i(e.s,e.d)}),Math.floor(0))}))}put(e,t,n,i){this.putInternal("p",e,t,n,i)}merge(e,t,n,i){this.putInternal("m",e,t,n,i)}putInternal(e,t,n,i,s){this.initConnection_();const r={p:t,d:n};void 0!==s&&(r.h=s),this.outstandingPuts_.push({action:e,request:r,onComplete:i}),this.outstandingPutCount_++;const o=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(o):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,n=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,n,(n=>{this.log_(t+" response",n),delete this.outstandingPuts_[e],this.outstandingPutCount_--,0===this.outstandingPutCount_&&(this.outstandingPuts_=[]),i&&i(n.s,n.d)}))}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,(e=>{if("ok"!==e.s){const t=e.d;this.log_("reportStats","Error sending stats: "+t)}}))}}onDataMessage_(e){if("r"in e){this.log_("from server: "+N(e));const t=e.r,n=this.requestCBHash_[t];n&&(delete this.requestCBHash_[t],n(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),"d"===e?this.onDataUpdate_(t.p,t.d,!1,t.t):"m"===e?this.onDataUpdate_(t.p,t.d,!0,t.t):"c"===e?this.onListenRevoked_(t.p,t.q):"ac"===e?this.onAuthRevoked_(t.s,t.d):"apc"===e?this.onAppCheckRevoked_(t.s,t.d):"sd"===e?this.onSecurityDebugPacket_(t):kt("Unrecognized action received from server: "+N(e)+"\nAre you using the latest client?")}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=(new Date).getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){l(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout((()=>{this.establishConnectionTimer_=null,this.establishConnection_()}),Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Dn,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Dn,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&((new Date).getTime()-this.lastConnectionEstablishedTime_>3e4&&(this.reconnectDelay_=Dn),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=(new Date).getTime());const e=Math.max(0,(new Date).getTime()-this.lastConnectionAttemptTime_);let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,1.3*this.reconnectDelay_)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=(new Date).getTime(),this.lastConnectionEstablishedTime_=null;const t=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),i=this.onRealtimeDisconnect_.bind(this),s=this.id+":"+An.nextConnectionId_++,r=this.lastSessionId;let o=!1,a=null;const h=function(){a?a.close():(o=!0,i())},c=function(e){l(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(e)};this.realtime_={close:h,sendRequest:c};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[e,l]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?Et("getToken() completed but was canceled"):(Et("getToken() completed. Creating connection."),this.authToken_=e&&e.accessToken,this.appCheckToken_=l&&l.token,a=new un(s,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,t,n,i,(e=>{Pt(e+" ("+this.repoInfo_.toString()+")"),this.interrupt("server_kill")}),r))}catch(e){this.log_("Failed to get token: "+e),o||(this.repoInfo_.nodeAdmin&&Pt(e),h())}}}interrupt(e){Et("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Et("Resuming connection for reason: "+e),delete this.interruptReasons_[e],D(this.interruptReasons_)&&(this.reconnectDelay_=Dn,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-(new Date).getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}0===this.outstandingPutCount_&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let n;n=t?t.map((e=>Lt(e))).join("$"):"default";const i=this.removeListen_(e,n);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,t){const n=new fn(e).toString();let i;if(this.listens.has(n)){const e=this.listens.get(n);i=e.get(t),e.delete(t),0===e.size&&this.listens.delete(n)}else i=void 0;return i}onAuthRevoked_(e,t){Et("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),"invalid_token"!==e&&"permission_denied"!==e||(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=3&&(this.reconnectDelay_=3e4,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){Et("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,"invalid_token"!==e&&"permission_denied"!==e||(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=3&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace("\n","\nFIREBASE: "))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};e["sdk.js."+pt.replace(/\./g,"-")]=1,I()?e["framework.cordova"]=1:"object"==typeof navigator&&"ReactNative"===navigator.product&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=_n.getInstance().currentlyOnline();return D(this.interruptReasons_)&&e}}An.nextPersistentConnectionId_=0,An.nextConnectionId_=0;
/**
             * @license
             * Copyright 2017 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */
class On{constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new On(e,t)}}
/**
             * @license
             * Copyright 2017 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */class Mn{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const n=new On(Rt,e),i=new On(Rt,t);return 0!==this.compare(n,i)}minPost(){return On.MIN}}
/**
             * @license
             * Copyright 2017 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */let Ln;class Fn extends Mn{static get __EMPTY_NODE(){return Ln}static set __EMPTY_NODE(e){Ln=e}compare(e,t){return At(e.name,t.name)}isDefinedOn(e){throw h("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return On.MIN}maxPost(){return new On(Dt,Ln)}makePost(e,t){return l("string"==typeof e,"KeyIndex indexValue must always be a string."),new On(e,Ln)}toString(){return".key"}}const qn=new Fn;
/**
             * @license
             * Copyright 2017 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */class Un{constructor(e,t,n,i,s=null){this.isReverse_=i,this.resultGenerator_=s,this.nodeStack_=[];let r=1;for(;!e.isEmpty();)if(r=t?n(e.key,t):1,i&&(r*=-1),r<0)e=this.isReverse_?e.left:e.right;else{if(0===r){this.nodeStack_.push(e);break}this.nodeStack_.push(e),e=this.isReverse_?e.right:e.left}}getNext(){if(0===this.nodeStack_.length)return null;let e,t=this.nodeStack_.pop();if(e=this.resultGenerator_?this.resultGenerator_(t.key,t.value):{key:t.key,value:t.value},this.isReverse_)for(t=t.left;!t.isEmpty();)this.nodeStack_.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack_.push(t),t=t.left;return e}hasNext(){return this.nodeStack_.length>0}peek(){if(0===this.nodeStack_.length)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Wn{constructor(e,t,n,i,s){this.key=e,this.value=t,this.color=null!=n?n:Wn.RED,this.left=null!=i?i:Bn.EMPTY_NODE,this.right=null!=s?s:Bn.EMPTY_NODE}copy(e,t,n,i,s){return new Wn(null!=e?e:this.key,null!=t?t:this.value,null!=n?n:this.color,null!=i?i:this.left,null!=s?s:this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let i=this;const s=n(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,t,n),null):0===s?i.copy(null,t,null,null,null):i.copy(null,null,null,null,i.right.insert(e,t,n)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return Bn.EMPTY_NODE;let e=this;return e.left.isRed_()||e.left.left.isRed_()||(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let n,i;if(n=this,t(e,n.key)<0)n.left.isEmpty()||n.left.isRed_()||n.left.left.isRed_()||(n=n.moveRedLeft_()),n=n.copy(null,null,null,n.left.remove(e,t),null);else{if(n.left.isRed_()&&(n=n.rotateRight_()),n.right.isEmpty()||n.right.isRed_()||n.right.left.isRed_()||(n=n.moveRedRight_()),0===t(e,n.key)){if(n.right.isEmpty())return Bn.EMPTY_NODE;i=n.right.min_(),n=n.copy(i.key,i.value,null,null,n.right.removeMin_())}n=n.copy(null,null,null,null,n.right.remove(e,t))}return n.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Wn.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Wn.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Wn.RED=!0,Wn.BLACK=!1;class Bn{constructor(e,t=Bn.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new Bn(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,Wn.BLACK,null,null))}remove(e){return new Bn(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Wn.BLACK,null,null))}get(e){let t,n=this.root_;for(;!n.isEmpty();){if(t=this.comparator_(e,n.key),0===t)return n.value;t<0?n=n.left:t>0&&(n=n.right)}return null}getPredecessorKey(e){let t,n=this.root_,i=null;for(;!n.isEmpty();){if(t=this.comparator_(e,n.key),0===t){if(n.left.isEmpty())return i?i.key:null;for(n=n.left;!n.right.isEmpty();)n=n.right;return n.key}t<0?n=n.left:t>0&&(i=n,n=n.right)}throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Un(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new Un(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new Un(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new Un(this.root_,null,this.comparator_,!0,e)}}
/**
             * @license
             * Copyright 2017 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */
function jn(e,t){return At(e.name,t.name)}function Hn(e,t){return At(e,t)}
/**
             * @license
             * Copyright 2017 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */let zn;Bn.EMPTY_NODE=new class{copy(e,t,n,i,s){return this}insert(e,t,n){return new Wn(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}};const Vn=function(e){return"number"==typeof e?"number:"+Ut(e):"string:"+e},$n=function(e){if(e.isLeafNode()){const t=e.val();l("string"==typeof t||"number"==typeof t||"object"==typeof t&&x(t,".sv"),"Priority must be a string or number.")}else l(e===zn||e.isEmpty(),"priority of unexpected type.");l(e===zn||e.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};
/**
             * @license
             * Copyright 2017 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */
let Yn,Kn,Gn;class Qn{static set __childrenNodeConstructor(e){Yn=e}static get __childrenNodeConstructor(){return Yn}constructor(e,t=Qn.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,l(void 0!==this.value_&&null!==this.value_,"LeafNode shouldn't be created with null/undefined value."),$n(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Qn(this.value_,e)}getImmediateChild(e){return".priority"===e?this.priorityNode_:Qn.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return Tn(e)?this:".priority"===mn(e)?this.priorityNode_:Qn.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return".priority"===e?this.updatePriority(t):t.isEmpty()&&".priority"!==e?this:Qn.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const n=mn(e);return null===n?t:t.isEmpty()&&".priority"!==n?this:(l(".priority"!==n||1===yn(e),".priority must be the last token in a path"),this.updateImmediateChild(n,Qn.__childrenNodeConstructor.EMPTY_NODE.updateChild(vn(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(null===this.lazyHash_){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Vn(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",e+="number"===t?Ut(this.value_):this.value_,this.lazyHash_=wt(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Qn.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Qn.__childrenNodeConstructor?-1:(l(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,n=typeof this.value_,i=Qn.VALUE_TYPE_ORDER.indexOf(t),s=Qn.VALUE_TYPE_ORDER.indexOf(n);return l(i>=0,"Unknown leaf type: "+t),l(s>=0,"Unknown leaf type: "+n),i===s?"object"===n?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:s-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}return!1}}Qn.VALUE_TYPE_ORDER=["object","boolean","number","string"];const Jn=new class extends Mn{compare(e,t){const n=e.node.getPriority(),i=t.node.getPriority(),s=n.compareTo(i);return 0===s?At(e.name,t.name):s}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return On.MIN}maxPost(){return new On(Dt,new Qn("[PRIORITY-POST]",Gn))}makePost(e,t){const n=Kn(e);return new On(t,new Qn("[PRIORITY-POST]",n))}toString(){return".priority"}},Xn=Math.log(2);
/**
             * @license
             * Copyright 2017 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */class Zn{constructor(e){var t;this.count=(t=e+1,parseInt(Math.log(t)/Xn,10)),this.current_=this.count-1;const n=(i=this.count,parseInt(Array(i+1).join("1"),2));var i;this.bits_=e+1&n}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const ei=function(e,t,n,i){e.sort(t);const s=function(t,i){const r=i-t;let o,a;if(0===r)return null;if(1===r)return o=e[t],a=n?n(o):o,new Wn(a,o.node,Wn.BLACK,null,null);{const l=parseInt(r/2,10)+t,h=s(t,l),c=s(l+1,i);return o=e[l],a=n?n(o):o,new Wn(a,o.node,Wn.BLACK,h,c)}},r=function(t){let i=null,r=null,o=e.length;const a=function(t,i){const r=o-t,a=o;o-=t;const h=s(r+1,a),c=e[r],u=n?n(c):c;l(new Wn(u,c.node,i,null,h))},l=function(e){i?(i.left=e,i=e):(r=e,i=e)};for(let e=0;e<t.count;++e){const n=t.nextBitIsOne(),i=Math.pow(2,t.count-(e+1));n?a(i,Wn.BLACK):(a(i,Wn.BLACK),a(i,Wn.RED))}return r}(new Zn(e.length));return new Bn(i||t,r)};
/**
             * @license
             * Copyright 2017 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */let ti;const ni={};class ii{static get Default(){return l(Jn,"ChildrenNode.ts has not been loaded"),ti=ti||new ii({".priority":ni},{".priority":Jn}),ti}constructor(e,t){this.indexes_=e,this.indexSet_=t}get(e){const t=R(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof Bn?t:null}hasIndex(e){return x(this.indexSet_,e.toString())}addIndex(e,t){l(e!==qn,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const n=[];let i=!1;const s=t.getIterator(On.Wrap);let r,o=s.getNext();for(;o;)i=i||e.isDefinedOn(o.node),n.push(o),o=s.getNext();r=i?ei(n,e.getCompare()):ni;const a=e.toString(),h=Object.assign({},this.indexSet_);h[a]=e;const c=Object.assign({},this.indexes_);return c[a]=r,new ii(c,h)}addToIndexes(e,t){const n=A(this.indexes_,((n,i)=>{const s=R(this.indexSet_,i);if(l(s,"Missing index implementation for "+i),n===ni){if(s.isDefinedOn(e.node)){const n=[],i=t.getIterator(On.Wrap);let r=i.getNext();for(;r;)r.name!==e.name&&n.push(r),r=i.getNext();return n.push(e),ei(n,s.getCompare())}return ni}{const i=t.get(e.name);let s=n;return i&&(s=s.remove(new On(e.name,i))),s.insert(e,e.node)}}));return new ii(n,this.indexSet_)}removeFromIndexes(e,t){const n=A(this.indexes_,(n=>{if(n===ni)return n;{const i=t.get(e.name);return i?n.remove(new On(e.name,i)):n}}));return new ii(n,this.indexSet_)}}
/**
             * @license
             * Copyright 2017 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */let si;class ri{static get EMPTY_NODE(){return si||(si=new ri(new Bn(Hn),null,ii.Default))}constructor(e,t,n){this.children_=e,this.priorityNode_=t,this.indexMap_=n,this.lazyHash_=null,this.priorityNode_&&$n(this.priorityNode_),this.children_.isEmpty()&&l(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||si}updatePriority(e){return this.children_.isEmpty()?this:new ri(this.children_,e,this.indexMap_)}getImmediateChild(e){if(".priority"===e)return this.getPriority();{const t=this.children_.get(e);return null===t?si:t}}getChild(e){const t=mn(e);return null===t?this:this.getImmediateChild(t).getChild(vn(e))}hasChild(e){return null!==this.children_.get(e)}updateImmediateChild(e,t){if(l(t,"We should always be passing snapshot nodes"),".priority"===e)return this.updatePriority(t);{const n=new On(e,t);let i,s;t.isEmpty()?(i=this.children_.remove(e),s=this.indexMap_.removeFromIndexes(n,this.children_)):(i=this.children_.insert(e,t),s=this.indexMap_.addToIndexes(n,this.children_));const r=i.isEmpty()?si:this.priorityNode_;return new ri(i,r,s)}}updateChild(e,t){const n=mn(e);if(null===n)return t;{l(".priority"!==mn(e)||1===yn(e),".priority must be the last token in a path");const i=this.getImmediateChild(n).updateChild(vn(e),t);return this.updateImmediateChild(n,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let n=0,i=0,s=!0;if(this.forEachChild(Jn,((r,o)=>{t[r]=o.val(e),n++,s&&ri.INTEGER_REGEXP_.test(r)?i=Math.max(i,Number(r)):s=!1})),!e&&s&&i<2*n){const e=[];for(const n in t)e[n]=t[n];return e}return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(null===this.lazyHash_){let e="";this.getPriority().isEmpty()||(e+="priority:"+Vn(this.getPriority().val())+":"),this.forEachChild(Jn,((t,n)=>{const i=n.hash();""!==i&&(e+=":"+t+":"+i)})),this.lazyHash_=""===e?"":wt(e)}return this.lazyHash_}getPredecessorChildName(e,t,n){const i=this.resolveIndex_(n);if(i){const n=i.getPredecessorKey(new On(e,t));return n?n.name:null}return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const e=t.minKey();return e&&e.name}return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new On(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const e=t.maxKey();return e&&e.name}return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new On(t,this.children_.get(t)):null}forEachChild(e,t){const n=this.resolveIndex_(e);return n?n.inorderTraversal((e=>t(e.name,e.node))):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const n=this.resolveIndex_(t);if(n)return n.getIteratorFrom(e,(e=>e));{const n=this.children_.getIteratorFrom(e.name,On.Wrap);let i=n.peek();for(;null!=i&&t.compare(i,e)<0;)n.getNext(),i=n.peek();return n}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const n=this.resolveIndex_(t);if(n)return n.getReverseIteratorFrom(e,(e=>e));{const n=this.children_.getReverseIteratorFrom(e.name,On.Wrap);let i=n.peek();for(;null!=i&&t.compare(i,e)>0;)n.getNext(),i=n.peek();return n}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===oi?-1:0}withIndex(e){if(e===qn||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new ri(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===qn||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority())){if(this.children_.count()===t.children_.count()){const e=this.getIterator(Jn),n=t.getIterator(Jn);let i=e.getNext(),s=n.getNext();for(;i&&s;){if(i.name!==s.name||!i.node.equals(s.node))return!1;i=e.getNext(),s=n.getNext()}return null===i&&null===s}return!1}return!1}}resolveIndex_(e){return e===qn?null:this.indexMap_.get(e.toString())}}ri.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;const oi=new class extends ri{constructor(){super(new Bn(Hn),ri.EMPTY_NODE,ii.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return ri.EMPTY_NODE}isEmpty(){return!1}};Object.defineProperties(On,{MIN:{value:new On(Rt,ri.EMPTY_NODE)},MAX:{value:new On(Dt,oi)}}),Fn.__EMPTY_NODE=ri.EMPTY_NODE,Qn.__childrenNodeConstructor=ri,zn=oi,function(e){Gn=e}(oi);
/**
             * @license
             * Copyright 2017 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */
const ai=!0;function li(e,t=null){if(null===e)return ri.EMPTY_NODE;if("object"==typeof e&&".priority"in e&&(t=e[".priority"]),l(null===t||"string"==typeof t||"number"==typeof t||"object"==typeof t&&".sv"in t,"Invalid priority type found: "+typeof t),"object"==typeof e&&".value"in e&&null!==e[".value"]&&(e=e[".value"]),"object"!=typeof e||".sv"in e)return new Qn(e,li(t));if(e instanceof Array||!ai){let n=ri.EMPTY_NODE;return qt(e,((t,i)=>{if(x(e,t)&&"."!==t.substring(0,1)){const e=li(i);!e.isLeafNode()&&e.isEmpty()||(n=n.updateImmediateChild(t,e))}})),n.updatePriority(li(t))}{const n=[];let i=!1;if(qt(e,((e,t)=>{if("."!==e.substring(0,1)){const s=li(t);s.isEmpty()||(i=i||!s.getPriority().isEmpty(),n.push(new On(e,s)))}})),0===n.length)return ri.EMPTY_NODE;const s=ei(n,jn,(e=>e.name),Hn);if(i){const e=ei(n,Jn.getCompare());return new ri(s,li(t),new ii({".priority":e},{".priority":Jn}))}return new ri(s,li(t),ii.Default)}}!function(e){Kn=e}(li);
/**
             * @license
             * Copyright 2017 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */
class hi extends Mn{constructor(e){super(),this.indexPath_=e,l(!Tn(e)&&".priority"!==mn(e),"Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const n=this.extractChild(e.node),i=this.extractChild(t.node),s=n.compareTo(i);return 0===s?At(e.name,t.name):s}makePost(e,t){const n=li(e),i=ri.EMPTY_NODE.updateChild(this.indexPath_,n);return new On(t,i)}maxPost(){const e=ri.EMPTY_NODE.updateChild(this.indexPath_,oi);return new On(Dt,e)}toString(){return wn(this.indexPath_,0).join("/")}}
/**
             * @license
             * Copyright 2017 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */const ci=new class extends Mn{compare(e,t){const n=e.node.compareTo(t.node);return 0===n?At(e.name,t.name):n}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return On.MIN}maxPost(){return On.MAX}makePost(e,t){const n=li(e);return new On(t,n)}toString(){return".value"}};
/**
             * @license
             * Copyright 2017 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */function ui(e){return{type:"value",snapshotNode:e}}function di(e,t){return{type:"child_added",snapshotNode:t,childName:e}}function pi(e,t){return{type:"child_removed",snapshotNode:t,childName:e}}function _i(e,t,n){return{type:"child_changed",snapshotNode:t,childName:e,oldSnap:n}}
/**
             * @license
             * Copyright 2017 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */
class fi{constructor(e){this.index_=e}updateChild(e,t,n,i,s,r){l(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const o=e.getImmediateChild(t);return o.getChild(i).equals(n.getChild(i))&&o.isEmpty()===n.isEmpty()?e:(null!=r&&(n.isEmpty()?e.hasChild(t)?r.trackChildChange(pi(t,o)):l(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):o.isEmpty()?r.trackChildChange(di(t,n)):r.trackChildChange(_i(t,n,o))),e.isLeafNode()&&n.isEmpty()?e:e.updateImmediateChild(t,n).withIndex(this.index_))}updateFullNode(e,t,n){return null!=n&&(e.isLeafNode()||e.forEachChild(Jn,((e,i)=>{t.hasChild(e)||n.trackChildChange(pi(e,i))})),t.isLeafNode()||t.forEachChild(Jn,((t,i)=>{if(e.hasChild(t)){const s=e.getImmediateChild(t);s.equals(i)||n.trackChildChange(_i(t,i,s))}else n.trackChildChange(di(t,i))}))),t.withIndex(this.index_)}updatePriority(e,t){return e.isEmpty()?ri.EMPTY_NODE:e.updatePriority(t)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}
/**
             * @license
             * Copyright 2017 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */class gi{constructor(e){this.indexedFilter_=new fi(e.getIndex()),this.index_=e.getIndex(),this.startPost_=gi.getStartPost_(e),this.endPost_=gi.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const t=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,n=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return t&&n}updateChild(e,t,n,i,s,r){return this.matches(new On(t,n))||(n=ri.EMPTY_NODE),this.indexedFilter_.updateChild(e,t,n,i,s,r)}updateFullNode(e,t,n){t.isLeafNode()&&(t=ri.EMPTY_NODE);let i=t.withIndex(this.index_);i=i.updatePriority(ri.EMPTY_NODE);const s=this;return t.forEachChild(Jn,((e,t)=>{s.matches(new On(e,t))||(i=i.updateImmediateChild(e,ri.EMPTY_NODE))})),this.indexedFilter_.updateFullNode(e,i,n)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const t=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),t)}return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const t=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),t)}return e.getIndex().maxPost()}}
/**
             * @license
             * Copyright 2017 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */class mi{constructor(e){this.withinDirectionalStart=e=>this.reverse_?this.withinEndPost(e):this.withinStartPost(e),this.withinDirectionalEnd=e=>this.reverse_?this.withinStartPost(e):this.withinEndPost(e),this.withinStartPost=e=>{const t=this.index_.compare(this.rangedFilter_.getStartPost(),e);return this.startIsInclusive_?t<=0:t<0},this.withinEndPost=e=>{const t=this.index_.compare(e,this.rangedFilter_.getEndPost());return this.endIsInclusive_?t<=0:t<0},this.rangedFilter_=new gi(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,t,n,i,s,r){return this.rangedFilter_.matches(new On(t,n))||(n=ri.EMPTY_NODE),e.getImmediateChild(t).equals(n)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,t,n,i,s,r):this.fullLimitUpdateChild_(e,t,n,s,r)}updateFullNode(e,t,n){let i;if(t.isLeafNode()||t.isEmpty())i=ri.EMPTY_NODE.withIndex(this.index_);else if(2*this.limit_<t.numChildren()&&t.isIndexed(this.index_)){let e;i=ri.EMPTY_NODE.withIndex(this.index_),e=this.reverse_?t.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):t.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let n=0;for(;e.hasNext()&&n<this.limit_;){const t=e.getNext();if(this.withinDirectionalStart(t)){if(!this.withinDirectionalEnd(t))break;i=i.updateImmediateChild(t.name,t.node),n++}}}else{let e;i=t.withIndex(this.index_),i=i.updatePriority(ri.EMPTY_NODE),e=this.reverse_?i.getReverseIterator(this.index_):i.getIterator(this.index_);let n=0;for(;e.hasNext();){const t=e.getNext();n<this.limit_&&this.withinDirectionalStart(t)&&this.withinDirectionalEnd(t)?n++:i=i.updateImmediateChild(t.name,ri.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,n)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,t,n,i,s){let r;if(this.reverse_){const e=this.index_.getCompare();r=(t,n)=>e(n,t)}else r=this.index_.getCompare();const o=e;l(o.numChildren()===this.limit_,"");const a=new On(t,n),h=this.reverse_?o.getFirstChild(this.index_):o.getLastChild(this.index_),c=this.rangedFilter_.matches(a);if(o.hasChild(t)){const e=o.getImmediateChild(t);let l=i.getChildAfterChild(this.index_,h,this.reverse_);for(;null!=l&&(l.name===t||o.hasChild(l.name));)l=i.getChildAfterChild(this.index_,l,this.reverse_);const u=null==l?1:r(l,a);if(c&&!n.isEmpty()&&u>=0)return null!=s&&s.trackChildChange(_i(t,n,e)),o.updateImmediateChild(t,n);{null!=s&&s.trackChildChange(pi(t,e));const n=o.updateImmediateChild(t,ri.EMPTY_NODE);return null!=l&&this.rangedFilter_.matches(l)?(null!=s&&s.trackChildChange(di(l.name,l.node)),n.updateImmediateChild(l.name,l.node)):n}}return n.isEmpty()?e:c&&r(h,a)>=0?(null!=s&&(s.trackChildChange(pi(h.name,h.node)),s.trackChildChange(di(t,n))),o.updateImmediateChild(t,n).updateImmediateChild(h.name,ri.EMPTY_NODE)):e}}
/**
             * @license
             * Copyright 2017 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */class yi{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Jn}hasStart(){return this.startSet_}isViewFromLeft(){return""===this.viewFrom_?this.startSet_:"l"===this.viewFrom_}getIndexStartValue(){return l(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return l(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Rt}hasEnd(){return this.endSet_}getIndexEndValue(){return l(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return l(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Dt}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&""!==this.viewFrom_}getLimit(){return l(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Jn}copy(){const e=new yi;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function vi(e){const t={};if(e.isDefault())return t;let n;if(e.index_===Jn?n="$priority":e.index_===ci?n="$value":e.index_===qn?n="$key":(l(e.index_ instanceof hi,"Unrecognized index type!"),n=e.index_.toString()),t.orderBy=N(n),e.startSet_){const n=e.startAfterSet_?"startAfter":"startAt";t[n]=N(e.indexStartValue_),e.startNameSet_&&(t[n]+=","+N(e.indexStartName_))}if(e.endSet_){const n=e.endBeforeSet_?"endBefore":"endAt";t[n]=N(e.indexEndValue_),e.endNameSet_&&(t[n]+=","+N(e.indexEndName_))}return e.limitSet_&&(e.isViewFromLeft()?t.limitToFirst=e.limit_:t.limitToLast=e.limit_),t}function Ci(e){const t={};if(e.startSet_&&(t.sp=e.indexStartValue_,e.startNameSet_&&(t.sn=e.indexStartName_),t.sin=!e.startAfterSet_),e.endSet_&&(t.ep=e.indexEndValue_,e.endNameSet_&&(t.en=e.indexEndName_),t.ein=!e.endBeforeSet_),e.limitSet_){t.l=e.limit_;let n=e.viewFrom_;""===n&&(n=e.isViewFromLeft()?"l":"r"),t.vf=n}return e.index_!==Jn&&(t.i=e.index_.toString()),t}
/**
             * @license
             * Copyright 2017 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */class wi extends dn{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return void 0!==t?"tag$"+t:(l(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,t,n,i){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=n,this.appCheckTokenProvider_=i,this.log_=St("p:rest:"),this.listens_={}}listen(e,t,n,i){const s=e._path.toString();this.log_("Listen called for "+s+" "+e._queryIdentifier);const r=wi.getListenId_(e,n),o={};this.listens_[r]=o;const a=vi(e._queryParams);this.restRequest_(s+".json",a,((e,t)=>{let a=t;if(404===e&&(a=null,e=null),null===e&&this.onDataUpdate_(s,a,!1,n),R(this.listens_,r)===o){let t;t=e?401===e?"permission_denied":"rest_error:"+e:"ok",i(t,null)}}))}unlisten(e,t){const n=wi.getListenId_(e,t);delete this.listens_[n]}get(e){const t=vi(e._queryParams),n=e._path.toString(),i=new b;return this.restRequest_(n+".json",t,((e,t)=>{let s=t;404===e&&(s=null,e=null),null===e?(this.onDataUpdate_(n,s,!1,null),i.resolve(s)):i.reject(new Error(s))})),i.promise}refreshAuthToken(e){}restRequest_(e,t={},n){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then((([i,s])=>{i&&i.accessToken&&(t.auth=i.accessToken),s&&s.token&&(t.ac=s.token);const r=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+function(e){const t=[];for(const[n,i]of Object.entries(e))Array.isArray(i)?i.forEach((e=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(e))})):t.push(encodeURIComponent(n)+"="+encodeURIComponent(i));return t.length?"&"+t.join("&"):""}(t);this.log_("Sending REST request for "+r);const o=new XMLHttpRequest;o.onreadystatechange=()=>{if(n&&4===o.readyState){this.log_("REST Response for "+r+" received. status:",o.status,"response:",o.responseText);let t=null;if(o.status>=200&&o.status<300){try{t=k(o.responseText)}catch(e){Pt("Failed to parse JSON response for "+r+": "+o.responseText)}n(null,t)}else 401!==o.status&&404!==o.status&&Pt("Got unsuccessful REST response for "+r+" Status: "+o.status),n(o.status);n=null}},o.open("GET",r,!0),o.send()}))}}
/**
             * @license
             * Copyright 2017 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */class bi{constructor(){this.rootNode_=ri.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}
/**
             * @license
             * Copyright 2017 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */function Ii(){return{value:null,children:new Map}}function Ti(e,t,n){if(Tn(t))e.value=n,e.children.clear();else if(null!==e.value)e.value=e.value.updateChild(t,n);else{const i=mn(t);e.children.has(i)||e.children.set(i,Ii()),Ti(e.children.get(i),t=vn(t),n)}}function Ei(e,t,n){null!==e.value?n(t,e.value):function(e,t){e.children.forEach(((e,n)=>{t(n,e)}))}
/**
             * @license
             * Copyright 2017 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */(e,((e,i)=>{Ei(i,new fn(t.toString()+"/"+e),n)}))}class Si{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t=Object.assign({},e);return this.last_&&qt(this.last_,((e,n)=>{t[e]=t[e]-n})),this.last_=e,t}}
/**
             * @license
             * Copyright 2017 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */class ki{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new Si(e);const n=1e4+2e4*Math.random();Ht(this.reportStats_.bind(this),Math.floor(n))}reportStats_(){const e=this.statsListener_.get(),t={};let n=!1;qt(e,((e,i)=>{i>0&&x(this.statsToReport_,e)&&(t[e]=i,n=!0)})),n&&this.server_.reportStats(t),Ht(this.reportStats_.bind(this),Math.floor(2*Math.random()*3e5))}}
/**
             * @license
             * Copyright 2017 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */var Ni,Pi;function xi(e){return{fromUser:!1,fromServer:!0,queryId:e,tagged:!0}}
/**
             * @license
             * Copyright 2017 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */(Pi=Ni||(Ni={}))[Pi.OVERWRITE=0]="OVERWRITE",Pi[Pi.MERGE=1]="MERGE",Pi[Pi.ACK_USER_WRITE=2]="ACK_USER_WRITE",Pi[Pi.LISTEN_COMPLETE=3]="LISTEN_COMPLETE";class Ri{constructor(e,t,n){this.path=e,this.affectedTree=t,this.revert=n,this.type=Ni.ACK_USER_WRITE,this.source={fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}operationForChild(e){if(Tn(this.path)){if(null!=this.affectedTree.value)return l(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new fn(e));return new Ri(gn(),t,this.revert)}}return l(mn(this.path)===e,"operationForChild called for unrelated child."),new Ri(vn(this.path),this.affectedTree,this.revert)}}
/**
             * @license
             * Copyright 2017 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */class Di{constructor(e,t){this.source=e,this.path=t,this.type=Ni.LISTEN_COMPLETE}operationForChild(e){return Tn(this.path)?new Di(this.source,gn()):new Di(this.source,vn(this.path))}}
/**
             * @license
             * Copyright 2017 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */class Ai{constructor(e,t,n){this.source=e,this.path=t,this.snap=n,this.type=Ni.OVERWRITE}operationForChild(e){return Tn(this.path)?new Ai(this.source,gn(),this.snap.getImmediateChild(e)):new Ai(this.source,vn(this.path),this.snap)}}
/**
             * @license
             * Copyright 2017 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */class Oi{constructor(e,t,n){this.source=e,this.path=t,this.children=n,this.type=Ni.MERGE}operationForChild(e){if(Tn(this.path)){const t=this.children.subtree(new fn(e));return t.isEmpty()?null:t.value?new Ai(this.source,gn(),t.value):new Oi(this.source,gn(),t)}return l(mn(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Oi(this.source,vn(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}
/**
             * @license
             * Copyright 2017 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */class Mi{constructor(e,t,n){this.node_=e,this.fullyInitialized_=t,this.filtered_=n}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(Tn(e))return this.isFullyInitialized()&&!this.filtered_;const t=mn(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}
/**
             * @license
             * Copyright 2017 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */class Li{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function Fi(e,t,n,i,s,r){const o=i.filter((e=>e.type===n));o.sort(((t,n)=>function(e,t,n){if(null==t.childName||null==n.childName)throw h("Should only compare child_ events.");const i=new On(t.childName,t.snapshotNode),s=new On(n.childName,n.snapshotNode);return e.index_.compare(i,s)}
/**
             * @license
             * Copyright 2017 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */(e,t,n))),o.forEach((n=>{const i=function(e,t,n){return"value"===t.type||"child_removed"===t.type||(t.prevName=n.getPredecessorChildName(t.childName,t.snapshotNode,e.index_)),t}(e,n,r);s.forEach((s=>{s.respondsTo(n.type)&&t.push(s.createEvent(i,e.query_))}))}))}function qi(e,t){return{eventCache:e,serverCache:t}}function Ui(e,t,n,i){return qi(new Mi(t,n,i),e.serverCache)}function Wi(e,t,n,i){return qi(e.eventCache,new Mi(t,n,i))}function Bi(e){return e.eventCache.isFullyInitialized()?e.eventCache.getNode():null}function ji(e){return e.serverCache.isFullyInitialized()?e.serverCache.getNode():null}
/**
             * @license
             * Copyright 2017 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */let Hi;class zi{static fromObject(e){let t=new zi(null);return qt(e,((e,n)=>{t=t.set(new fn(e),n)})),t}constructor(e,t=(()=>(Hi||(Hi=new Bn(Ot)),Hi))()){this.value=e,this.children=t}isEmpty(){return null===this.value&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(null!=this.value&&t(this.value))return{path:gn(),value:this.value};if(Tn(e))return null;{const n=mn(e),i=this.children.get(n);if(null!==i){const s=i.findRootMostMatchingPathAndValue(vn(e),t);return null!=s?{path:In(new fn(n),s.path),value:s.value}:null}return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,(()=>!0))}subtree(e){if(Tn(e))return this;{const t=mn(e),n=this.children.get(t);return null!==n?n.subtree(vn(e)):new zi(null)}}set(e,t){if(Tn(e))return new zi(t,this.children);{const n=mn(e),i=(this.children.get(n)||new zi(null)).set(vn(e),t),s=this.children.insert(n,i);return new zi(this.value,s)}}remove(e){if(Tn(e))return this.children.isEmpty()?new zi(null):new zi(null,this.children);{const t=mn(e),n=this.children.get(t);if(n){const i=n.remove(vn(e));let s;return s=i.isEmpty()?this.children.remove(t):this.children.insert(t,i),null===this.value&&s.isEmpty()?new zi(null):new zi(this.value,s)}return this}}get(e){if(Tn(e))return this.value;{const t=mn(e),n=this.children.get(t);return n?n.get(vn(e)):null}}setTree(e,t){if(Tn(e))return t;{const n=mn(e),i=(this.children.get(n)||new zi(null)).setTree(vn(e),t);let s;return s=i.isEmpty()?this.children.remove(n):this.children.insert(n,i),new zi(this.value,s)}}fold(e){return this.fold_(gn(),e)}fold_(e,t){const n={};return this.children.inorderTraversal(((i,s)=>{n[i]=s.fold_(In(e,i),t)})),t(e,this.value,n)}findOnPath(e,t){return this.findOnPath_(e,gn(),t)}findOnPath_(e,t,n){const i=!!this.value&&n(t,this.value);if(i)return i;if(Tn(e))return null;{const i=mn(e),s=this.children.get(i);return s?s.findOnPath_(vn(e),In(t,i),n):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,gn(),t)}foreachOnPath_(e,t,n){if(Tn(e))return this;{this.value&&n(t,this.value);const i=mn(e),s=this.children.get(i);return s?s.foreachOnPath_(vn(e),In(t,i),n):new zi(null)}}foreach(e){this.foreach_(gn(),e)}foreach_(e,t){this.children.inorderTraversal(((n,i)=>{i.foreach_(In(e,n),t)})),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal(((t,n)=>{n.value&&e(t,n.value)}))}}
/**
             * @license
             * Copyright 2017 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */class Vi{constructor(e){this.writeTree_=e}static empty(){return new Vi(new zi(null))}}function $i(e,t,n){if(Tn(t))return new Vi(new zi(n));{const i=e.writeTree_.findRootMostValueAndPath(t);if(null!=i){const s=i.path;let r=i.value;const o=En(s,t);return r=r.updateChild(o,n),new Vi(e.writeTree_.set(s,r))}{const i=new zi(n),s=e.writeTree_.setTree(t,i);return new Vi(s)}}}function Yi(e,t,n){let i=e;return qt(n,((e,n)=>{i=$i(i,In(t,e),n)})),i}function Ki(e,t){if(Tn(t))return Vi.empty();{const n=e.writeTree_.setTree(t,new zi(null));return new Vi(n)}}function Gi(e,t){return null!=Qi(e,t)}function Qi(e,t){const n=e.writeTree_.findRootMostValueAndPath(t);return null!=n?e.writeTree_.get(n.path).getChild(En(n.path,t)):null}function Ji(e){const t=[],n=e.writeTree_.value;return null!=n?n.isLeafNode()||n.forEachChild(Jn,((e,n)=>{t.push(new On(e,n))})):e.writeTree_.children.inorderTraversal(((e,n)=>{null!=n.value&&t.push(new On(e,n.value))})),t}function Xi(e,t){if(Tn(t))return e;{const n=Qi(e,t);return new Vi(null!=n?new zi(n):e.writeTree_.subtree(t))}}function Zi(e){return e.writeTree_.isEmpty()}function es(e,t){return ts(gn(),e.writeTree_,t)}function ts(e,t,n){if(null!=t.value)return n.updateChild(e,t.value);{let i=null;return t.children.inorderTraversal(((t,s)=>{".priority"===t?(l(null!==s.value,"Priority writes must always be leaf nodes"),i=s.value):n=ts(In(e,t),s,n)})),n.getChild(e).isEmpty()||null===i||(n=n.updateChild(In(e,".priority"),i)),n}}
/**
             * @license
             * Copyright 2017 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */function ns(e,t){return fs(t,e)}function is(e,t){const n=e.allWrites.findIndex((e=>e.writeId===t));l(n>=0,"removeWrite called with nonexistent writeId.");const i=e.allWrites[n];e.allWrites.splice(n,1);let s=i.visible,r=!1,o=e.allWrites.length-1;for(;s&&o>=0;){const t=e.allWrites[o];t.visible&&(o>=n&&ss(t,i.path)?s=!1:kn(i.path,t.path)&&(r=!0)),o--}return!!s&&(r?(function(e){e.visibleWrites=os(e.allWrites,rs,gn()),e.allWrites.length>0?e.lastWriteId=e.allWrites[e.allWrites.length-1].writeId:e.lastWriteId=-1}(e),!0):(i.snap?e.visibleWrites=Ki(e.visibleWrites,i.path):qt(i.children,(t=>{e.visibleWrites=Ki(e.visibleWrites,In(i.path,t))})),!0))}function ss(e,t){if(e.snap)return kn(e.path,t);for(const n in e.children)if(e.children.hasOwnProperty(n)&&kn(In(e.path,n),t))return!0;return!1}function rs(e){return e.visible}function os(e,t,n){let i=Vi.empty();for(let s=0;s<e.length;++s){const r=e[s];if(t(r)){const e=r.path;let t;if(r.snap)kn(n,e)?(t=En(n,e),i=$i(i,t,r.snap)):kn(e,n)&&(t=En(e,n),i=$i(i,gn(),r.snap.getChild(t)));else{if(!r.children)throw h("WriteRecord should have .snap or .children");if(kn(n,e))t=En(n,e),i=Yi(i,t,r.children);else if(kn(e,n))if(t=En(e,n),Tn(t))i=Yi(i,gn(),r.children);else{const e=R(r.children,mn(t));if(e){const n=e.getChild(vn(t));i=$i(i,gn(),n)}}}}}return i}function as(e,t,n,i,s){if(i||s){const r=Xi(e.visibleWrites,t);if(!s&&Zi(r))return n;if(s||null!=n||Gi(r,gn())){const r=function(e){return(e.visible||s)&&(!i||!~i.indexOf(e.writeId))&&(kn(e.path,t)||kn(t,e.path))};return es(os(e.allWrites,r,t),n||ri.EMPTY_NODE)}return null}{const i=Qi(e.visibleWrites,t);if(null!=i)return i;{const i=Xi(e.visibleWrites,t);return Zi(i)?n:null!=n||Gi(i,gn())?es(i,n||ri.EMPTY_NODE):null}}}function ls(e,t,n,i){return as(e.writeTree,e.treePath,t,n,i)}function hs(e,t){return function(e,t,n){let i=ri.EMPTY_NODE;const s=Qi(e.visibleWrites,t);if(s)return s.isLeafNode()||s.forEachChild(Jn,((e,t)=>{i=i.updateImmediateChild(e,t)})),i;if(n){const s=Xi(e.visibleWrites,t);return n.forEachChild(Jn,((e,t)=>{const n=es(Xi(s,new fn(e)),t);i=i.updateImmediateChild(e,n)})),Ji(s).forEach((e=>{i=i.updateImmediateChild(e.name,e.node)})),i}return Ji(Xi(e.visibleWrites,t)).forEach((e=>{i=i.updateImmediateChild(e.name,e.node)})),i}(e.writeTree,e.treePath,t)}function cs(e,t,n,i){return function(e,t,n,i,s){l(i||s,"Either existingEventSnap or existingServerSnap must exist");const r=In(t,n);if(Gi(e.visibleWrites,r))return null;{const t=Xi(e.visibleWrites,r);return Zi(t)?s.getChild(n):es(t,s.getChild(n))}}(e.writeTree,e.treePath,t,n,i)}function us(e,t){return function(e,t){return Qi(e.visibleWrites,t)}(e.writeTree,In(e.treePath,t))}function ds(e,t,n,i,s,r){return function(e,t,n,i,s,r,o){let a;const l=Xi(e.visibleWrites,t),h=Qi(l,gn());if(null!=h)a=h;else{if(null==n)return[];a=es(l,n)}if(a=a.withIndex(o),a.isEmpty()||a.isLeafNode())return[];{const e=[],t=o.getCompare(),n=r?a.getReverseIteratorFrom(i,o):a.getIteratorFrom(i,o);let l=n.getNext();for(;l&&e.length<s;)0!==t(l,i)&&e.push(l),l=n.getNext();return e}}(e.writeTree,e.treePath,t,n,i,s,r)}function ps(e,t,n){return function(e,t,n,i){const s=In(t,n),r=Qi(e.visibleWrites,s);return null!=r?r:i.isCompleteForChild(n)?es(Xi(e.visibleWrites,s),i.getNode().getImmediateChild(n)):null}(e.writeTree,e.treePath,t,n)}function _s(e,t){return fs(In(e.treePath,t),e.writeTree)}function fs(e,t){return{treePath:e,writeTree:t}}
/**
             * @license
             * Copyright 2017 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */class gs{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,n=e.childName;l("child_added"===t||"child_changed"===t||"child_removed"===t,"Only child changes supported for tracking"),l(".priority"!==n,"Only non-priority child changes can be tracked.");const i=this.changeMap.get(n);if(i){const s=i.type;if("child_added"===t&&"child_removed"===s)this.changeMap.set(n,_i(n,e.snapshotNode,i.snapshotNode));else if("child_removed"===t&&"child_added"===s)this.changeMap.delete(n);else if("child_removed"===t&&"child_changed"===s)this.changeMap.set(n,pi(n,i.oldSnap));else if("child_changed"===t&&"child_added"===s)this.changeMap.set(n,di(n,e.snapshotNode));else{if("child_changed"!==t||"child_changed"!==s)throw h("Illegal combination of changes: "+e+" occurred after "+i);this.changeMap.set(n,_i(n,e.snapshotNode,i.oldSnap))}}else this.changeMap.set(n,e)}getChanges(){return Array.from(this.changeMap.values())}}
/**
             * @license
             * Copyright 2017 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */const ms=new class{getCompleteChild(e){return null}getChildAfterChild(e,t,n){return null}};class ys{constructor(e,t,n=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=n}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const t=null!=this.optCompleteServerCache_?new Mi(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return ps(this.writes_,e,t)}}getChildAfterChild(e,t,n){const i=null!=this.optCompleteServerCache_?this.optCompleteServerCache_:ji(this.viewCache_),s=ds(this.writes_,i,t,1,n,e);return 0===s.length?null:s[0]}}
/**
             * @license
             * Copyright 2017 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */function vs(e,t,n,i,s){const r=new gs;let o,a;if(n.type===Ni.OVERWRITE){const h=n;h.source.fromUser?o=bs(e,t,h.path,h.snap,i,s,r):(l(h.source.fromServer,"Unknown source."),a=h.source.tagged||t.serverCache.isFiltered()&&!Tn(h.path),o=ws(e,t,h.path,h.snap,i,s,a,r))}else if(n.type===Ni.MERGE){const h=n;h.source.fromUser?o=function(e,t,n,i,s,r,o){let a=t;return i.foreach(((i,l)=>{const h=In(n,i);Is(t,mn(h))&&(a=bs(e,a,h,l,s,r,o))})),i.foreach(((i,l)=>{const h=In(n,i);Is(t,mn(h))||(a=bs(e,a,h,l,s,r,o))})),a}(e,t,h.path,h.children,i,s,r):(l(h.source.fromServer,"Unknown source."),a=h.source.tagged||t.serverCache.isFiltered(),o=Es(e,t,h.path,h.children,i,s,a,r))}else if(n.type===Ni.ACK_USER_WRITE){const a=n;o=a.revert?function(e,t,n,i,s,r){let o;if(null!=us(i,n))return t;{const a=new ys(i,t,s),h=t.eventCache.getNode();let c;if(Tn(n)||".priority"===mn(n)){let n;if(t.serverCache.isFullyInitialized())n=ls(i,ji(t));else{const e=t.serverCache.getNode();l(e instanceof ri,"serverChildren would be complete if leaf node"),n=hs(i,e)}c=e.filter.updateFullNode(h,n,r)}else{const s=mn(n);let l=ps(i,s,t.serverCache);null==l&&t.serverCache.isCompleteForChild(s)&&(l=h.getImmediateChild(s)),c=null!=l?e.filter.updateChild(h,s,l,vn(n),a,r):t.eventCache.getNode().hasChild(s)?e.filter.updateChild(h,s,ri.EMPTY_NODE,vn(n),a,r):h,c.isEmpty()&&t.serverCache.isFullyInitialized()&&(o=ls(i,ji(t)),o.isLeafNode()&&(c=e.filter.updateFullNode(c,o,r)))}return o=t.serverCache.isFullyInitialized()||null!=us(i,gn()),Ui(t,c,o,e.filter.filtersNodes())}}
/**
             * @license
             * Copyright 2017 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */(e,t,a.path,i,s,r):function(e,t,n,i,s,r,o){if(null!=us(s,n))return t;const a=t.serverCache.isFiltered(),l=t.serverCache;if(null!=i.value){if(Tn(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return ws(e,t,n,l.getNode().getChild(n),s,r,a,o);if(Tn(n)){let i=new zi(null);return l.getNode().forEachChild(qn,((e,t)=>{i=i.set(new fn(e),t)})),Es(e,t,n,i,s,r,a,o)}return t}{let h=new zi(null);return i.foreach(((e,t)=>{const i=In(n,e);l.isCompleteForPath(i)&&(h=h.set(e,l.getNode().getChild(i)))})),Es(e,t,n,h,s,r,a,o)}}(e,t,a.path,a.affectedTree,i,s,r)}else{if(n.type!==Ni.LISTEN_COMPLETE)throw h("Unknown operation type: "+n.type);o=function(e,t,n,i,s){const r=t.serverCache,o=Wi(t,r.getNode(),r.isFullyInitialized()||Tn(n),r.isFiltered());return Cs(e,o,n,i,ms,s)}(e,t,n.path,i,r)}const c=r.getChanges();return function(e,t,n){const i=t.eventCache;if(i.isFullyInitialized()){const s=i.getNode().isLeafNode()||i.getNode().isEmpty(),r=Bi(e);(n.length>0||!e.eventCache.isFullyInitialized()||s&&!i.getNode().equals(r)||!i.getNode().getPriority().equals(r.getPriority()))&&n.push(ui(Bi(t)))}}(t,o,c),{viewCache:o,changes:c}}function Cs(e,t,n,i,s,r){const o=t.eventCache;if(null!=us(i,n))return t;{let a,h;if(Tn(n))if(l(t.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),t.serverCache.isFiltered()){const n=ji(t),s=hs(i,n instanceof ri?n:ri.EMPTY_NODE);a=e.filter.updateFullNode(t.eventCache.getNode(),s,r)}else{const n=ls(i,ji(t));a=e.filter.updateFullNode(t.eventCache.getNode(),n,r)}else{const c=mn(n);if(".priority"===c){l(1===yn(n),"Can't have a priority with additional path components");const s=o.getNode();h=t.serverCache.getNode();const r=cs(i,n,s,h);a=null!=r?e.filter.updatePriority(s,r):o.getNode()}else{const l=vn(n);let u;if(o.isCompleteForChild(c)){h=t.serverCache.getNode();const e=cs(i,n,o.getNode(),h);u=null!=e?o.getNode().getImmediateChild(c).updateChild(l,e):o.getNode().getImmediateChild(c)}else u=ps(i,c,t.serverCache);a=null!=u?e.filter.updateChild(o.getNode(),c,u,l,s,r):o.getNode()}}return Ui(t,a,o.isFullyInitialized()||Tn(n),e.filter.filtersNodes())}}function ws(e,t,n,i,s,r,o,a){const l=t.serverCache;let h;const c=o?e.filter:e.filter.getIndexedFilter();if(Tn(n))h=c.updateFullNode(l.getNode(),i,null);else if(c.filtersNodes()&&!l.isFiltered()){const e=l.getNode().updateChild(n,i);h=c.updateFullNode(l.getNode(),e,null)}else{const e=mn(n);if(!l.isCompleteForPath(n)&&yn(n)>1)return t;const s=vn(n),r=l.getNode().getImmediateChild(e).updateChild(s,i);h=".priority"===e?c.updatePriority(l.getNode(),r):c.updateChild(l.getNode(),e,r,s,ms,null)}const u=Wi(t,h,l.isFullyInitialized()||Tn(n),c.filtersNodes());return Cs(e,u,n,s,new ys(s,u,r),a)}function bs(e,t,n,i,s,r,o){const a=t.eventCache;let l,h;const c=new ys(s,t,r);if(Tn(n))h=e.filter.updateFullNode(t.eventCache.getNode(),i,o),l=Ui(t,h,!0,e.filter.filtersNodes());else{const s=mn(n);if(".priority"===s)h=e.filter.updatePriority(t.eventCache.getNode(),i),l=Ui(t,h,a.isFullyInitialized(),a.isFiltered());else{const r=vn(n),h=a.getNode().getImmediateChild(s);let u;if(Tn(r))u=i;else{const e=c.getCompleteChild(s);u=null!=e?".priority"===Cn(r)&&e.getChild(bn(r)).isEmpty()?e:e.updateChild(r,i):ri.EMPTY_NODE}l=h.equals(u)?t:Ui(t,e.filter.updateChild(a.getNode(),s,u,r,c,o),a.isFullyInitialized(),e.filter.filtersNodes())}}return l}function Is(e,t){return e.eventCache.isCompleteForChild(t)}function Ts(e,t,n){return n.foreach(((e,n)=>{t=t.updateChild(e,n)})),t}function Es(e,t,n,i,s,r,o,a){if(t.serverCache.getNode().isEmpty()&&!t.serverCache.isFullyInitialized())return t;let l,h=t;l=Tn(n)?i:new zi(null).setTree(n,i);const c=t.serverCache.getNode();return l.children.inorderTraversal(((n,i)=>{if(c.hasChild(n)){const l=Ts(0,t.serverCache.getNode().getImmediateChild(n),i);h=ws(e,h,new fn(n),l,s,r,o,a)}})),l.children.inorderTraversal(((n,i)=>{const l=!t.serverCache.isCompleteForChild(n)&&null===i.value;if(!c.hasChild(n)&&!l){const l=Ts(0,t.serverCache.getNode().getImmediateChild(n),i);h=ws(e,h,new fn(n),l,s,r,o,a)}})),h}class Ss{constructor(e,t){this.query_=e,this.eventRegistrations_=[];const n=this.query_._queryParams,i=new fi(n.getIndex()),s=(r=n).loadsAllData()?new fi(r.getIndex()):r.hasLimit()?new mi(r):new gi(r);var r;this.processor_=function(e){return{filter:e}}(s);const o=t.serverCache,a=t.eventCache,l=i.updateFullNode(ri.EMPTY_NODE,o.getNode(),null),h=s.updateFullNode(ri.EMPTY_NODE,a.getNode(),null),c=new Mi(l,o.isFullyInitialized(),i.filtersNodes()),u=new Mi(h,a.isFullyInitialized(),s.filtersNodes());this.viewCache_=qi(u,c),this.eventGenerator_=new Li(this.query_)}get query(){return this.query_}}function ks(e,t){const n=ji(e.viewCache_);return n&&(e.query._queryParams.loadsAllData()||!Tn(t)&&!n.getImmediateChild(mn(t)).isEmpty())?n.getChild(t):null}function Ns(e){return 0===e.eventRegistrations_.length}function Ps(e,t,n){const i=[];if(n){l(null==t,"A cancel should cancel all event registrations.");const s=e.query._path;e.eventRegistrations_.forEach((e=>{const t=e.createCancelEvent(n,s);t&&i.push(t)}))}if(t){let n=[];for(let i=0;i<e.eventRegistrations_.length;++i){const s=e.eventRegistrations_[i];if(s.matches(t)){if(t.hasAnyCallback()){n=n.concat(e.eventRegistrations_.slice(i+1));break}}else n.push(s)}e.eventRegistrations_=n}else e.eventRegistrations_=[];return i}function xs(e,t,n,i){t.type===Ni.MERGE&&null!==t.source.queryId&&(l(ji(e.viewCache_),"We should always have a full cache before handling merges"),l(Bi(e.viewCache_),"Missing event cache, even though we have a server cache"));const s=e.viewCache_,r=vs(e.processor_,s,t,n,i);var o,a;return o=e.processor_,a=r.viewCache,l(a.eventCache.getNode().isIndexed(o.filter.getIndex()),"Event snap not indexed"),l(a.serverCache.getNode().isIndexed(o.filter.getIndex()),"Server snap not indexed"),l(r.viewCache.serverCache.isFullyInitialized()||!s.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),e.viewCache_=r.viewCache,Rs(e,r.changes,r.viewCache.eventCache.getNode(),null)}function Rs(e,t,n,i){const s=i?[i]:e.eventRegistrations_;return function(e,t,n,i){const s=[],r=[];return t.forEach((t=>{var n;"child_changed"===t.type&&e.index_.indexedValueChanged(t.oldSnap,t.snapshotNode)&&r.push((n=t.childName,{type:"child_moved",snapshotNode:t.snapshotNode,childName:n}))})),Fi(e,s,"child_removed",t,i,n),Fi(e,s,"child_added",t,i,n),Fi(e,s,"child_moved",r,i,n),Fi(e,s,"child_changed",t,i,n),Fi(e,s,"value",t,i,n),s}(e.eventGenerator_,t,n,s)}
/**
             * @license
             * Copyright 2017 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */let Ds,As;class Os{constructor(){this.views=new Map}}function Ms(e,t,n,i){const s=t.source.queryId;if(null!==s){const r=e.views.get(s);return l(null!=r,"SyncTree gave us an op for an invalid query."),xs(r,t,n,i)}{let s=[];for(const r of e.views.values())s=s.concat(xs(r,t,n,i));return s}}function Ls(e,t,n,i,s){const r=t._queryIdentifier,o=e.views.get(r);if(!o){let e=ls(n,s?i:null),r=!1;e?r=!0:i instanceof ri?(e=hs(n,i),r=!1):(e=ri.EMPTY_NODE,r=!1);const o=qi(new Mi(e,r,!1),new Mi(i,s,!1));return new Ss(t,o)}return o}function Fs(e,t,n,i,s,r){const o=Ls(e,t,i,s,r);return e.views.has(t._queryIdentifier)||e.views.set(t._queryIdentifier,o),function(e,t){e.eventRegistrations_.push(t)}(o,n),function(e,t){const n=e.viewCache_.eventCache,i=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(Jn,((e,t)=>{i.push(di(e,t))})),n.isFullyInitialized()&&i.push(ui(n.getNode())),Rs(e,i,n.getNode(),t)}(o,n)}function qs(e,t,n,i){const s=t._queryIdentifier,r=[];let o=[];const a=Hs(e);if("default"===s)for(const[l,h]of e.views.entries())o=o.concat(Ps(h,n,i)),Ns(h)&&(e.views.delete(l),h.query._queryParams.loadsAllData()||r.push(h.query));else{const t=e.views.get(s);t&&(o=o.concat(Ps(t,n,i)),Ns(t)&&(e.views.delete(s),t.query._queryParams.loadsAllData()||r.push(t.query)))}return a&&!Hs(e)&&r.push(new(l(Ds,"Reference.ts has not been loaded"),Ds)(t._repo,t._path)),{removed:r,events:o}}function Us(e){const t=[];for(const n of e.views.values())n.query._queryParams.loadsAllData()||t.push(n);return t}function Ws(e,t){let n=null;for(const i of e.views.values())n=n||ks(i,t);return n}function Bs(e,t){if(t._queryParams.loadsAllData())return zs(e);{const n=t._queryIdentifier;return e.views.get(n)}}function js(e,t){return null!=Bs(e,t)}function Hs(e){return null!=zs(e)}function zs(e){for(const t of e.views.values())if(t.query._queryParams.loadsAllData())return t;return null}
/**
             * @license
             * Copyright 2017 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */let Vs=1;class $s{constructor(e){this.listenProvider_=e,this.syncPointTree_=new zi(null),this.pendingWriteTree_={visibleWrites:Vi.empty(),allWrites:[],lastWriteId:-1},this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function Ys(e,t,n,i,s){return function(e,t,n,i,s){l(i>e.lastWriteId,"Stacking an older write on top of newer ones"),void 0===s&&(s=!0),e.allWrites.push({path:t,snap:n,writeId:i,visible:s}),s&&(e.visibleWrites=$i(e.visibleWrites,t,n)),e.lastWriteId=i}(e.pendingWriteTree_,t,n,i,s),s?er(e,new Ai({fromUser:!0,fromServer:!1,queryId:null,tagged:!1},t,n)):[]}function Ks(e,t,n=!1){const i=function(e,t){for(let n=0;n<e.allWrites.length;n++){const i=e.allWrites[n];if(i.writeId===t)return i}return null}(e.pendingWriteTree_,t);if(is(e.pendingWriteTree_,t)){let t=new zi(null);return null!=i.snap?t=t.set(gn(),!0):qt(i.children,(e=>{t=t.set(new fn(e),!0)})),er(e,new Ri(i.path,t,n))}return[]}function Gs(e,t,n){return er(e,new Ai({fromUser:!1,fromServer:!0,queryId:null,tagged:!1},t,n))}function Qs(e,t,n,i,s=!1){const r=t._path,o=e.syncPointTree_.get(r);let a=[];if(o&&("default"===t._queryIdentifier||js(o,t))){const l=qs(o,t,n,i);0===o.views.size&&(e.syncPointTree_=e.syncPointTree_.remove(r));const h=l.removed;if(a=l.events,!s){const n=-1!==h.findIndex((e=>e._queryParams.loadsAllData())),s=e.syncPointTree_.findOnPath(r,((e,t)=>Hs(t)));if(n&&!s){const t=e.syncPointTree_.subtree(r);if(!t.isEmpty()){const n=function(e){return e.fold(((e,t,n)=>{if(t&&Hs(t))return[zs(t)];{let e=[];return t&&(e=Us(t)),qt(n,((t,n)=>{e=e.concat(n)})),e}}))}(t);for(let t=0;t<n.length;++t){const i=n[t],s=i.query,r=ir(e,i);e.listenProvider_.startListening(hr(s),sr(e,s),r.hashFn,r.onComplete)}}}if(!s&&h.length>0&&!i)if(n){const n=null;e.listenProvider_.stopListening(hr(t),n)}else h.forEach((t=>{const n=e.queryToTagMap.get(rr(t));e.listenProvider_.stopListening(hr(t),n)}))}!function(e,t){for(let n=0;n<t.length;++n){const i=t[n];if(!i._queryParams.loadsAllData()){const t=rr(i),n=e.queryToTagMap.get(t);e.queryToTagMap.delete(t),e.tagToQueryMap.delete(n)}}}(e,h)}return a}function Js(e,t,n,i){const s=or(e,i);if(null!=s){const i=ar(s),r=i.path,o=i.queryId,a=En(r,t);return lr(e,r,new Ai(xi(o),a,n))}return[]}function Xs(e,t,n,i=!1){const s=t._path;let r=null,o=!1;e.syncPointTree_.foreachOnPath(s,((e,t)=>{const n=En(e,s);r=r||Ws(t,n),o=o||Hs(t)}));let a,h=e.syncPointTree_.get(s);h?(o=o||Hs(h),r=r||Ws(h,gn())):(h=new Os,e.syncPointTree_=e.syncPointTree_.set(s,h)),null!=r?a=!0:(a=!1,r=ri.EMPTY_NODE,e.syncPointTree_.subtree(s).foreachChild(((e,t)=>{const n=Ws(t,gn());n&&(r=r.updateImmediateChild(e,n))})));const c=js(h,t);if(!c&&!t._queryParams.loadsAllData()){const n=rr(t);l(!e.queryToTagMap.has(n),"View does not exist, but we have a tag");const i=Vs++;e.queryToTagMap.set(n,i),e.tagToQueryMap.set(i,n)}let u=Fs(h,t,n,ns(e.pendingWriteTree_,s),r,a);if(!c&&!o&&!i){const n=Bs(h,t);u=u.concat(function(e,t,n){const i=t._path,s=sr(e,t),r=ir(e,n),o=e.listenProvider_.startListening(hr(t),s,r.hashFn,r.onComplete),a=e.syncPointTree_.subtree(i);if(s)l(!Hs(a.value),"If we're adding a query, it shouldn't be shadowed");else{const t=a.fold(((e,t,n)=>{if(!Tn(e)&&t&&Hs(t))return[zs(t).query];{let e=[];return t&&(e=e.concat(Us(t).map((e=>e.query)))),qt(n,((t,n)=>{e=e.concat(n)})),e}}));for(let n=0;n<t.length;++n){const i=t[n];e.listenProvider_.stopListening(hr(i),sr(e,i))}}return o}
/**
             * @license
             * Copyright 2017 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */(e,t,n))}return u}function Zs(e,t,n){const i=e.pendingWriteTree_,s=e.syncPointTree_.findOnPath(t,((e,n)=>{const i=Ws(n,En(e,t));if(i)return i}));return as(i,t,s,n,!0)}function er(e,t){return tr(t,e.syncPointTree_,null,ns(e.pendingWriteTree_,gn()))}function tr(e,t,n,i){if(Tn(e.path))return nr(e,t,n,i);{const s=t.get(gn());null==n&&null!=s&&(n=Ws(s,gn()));let r=[];const o=mn(e.path),a=e.operationForChild(o),l=t.children.get(o);if(l&&a){const e=n?n.getImmediateChild(o):null,t=_s(i,o);r=r.concat(tr(a,l,e,t))}return s&&(r=r.concat(Ms(s,e,i,n))),r}}function nr(e,t,n,i){const s=t.get(gn());null==n&&null!=s&&(n=Ws(s,gn()));let r=[];return t.children.inorderTraversal(((t,s)=>{const o=n?n.getImmediateChild(t):null,a=_s(i,t),l=e.operationForChild(t);l&&(r=r.concat(nr(l,s,o,a)))})),s&&(r=r.concat(Ms(s,e,i,n))),r}function ir(e,t){const n=t.query,i=sr(e,n);return{hashFn:()=>{const e=function(e){return e.viewCache_.serverCache.getNode()}(t)||ri.EMPTY_NODE;return e.hash()},onComplete:t=>{if("ok"===t)return i?function(e,t,n){const i=or(e,n);if(i){const n=ar(i),s=n.path,r=n.queryId,o=En(s,t);return lr(e,s,new Di(xi(r),o))}return[]}(e,n._path,i):function(e,t){return er(e,new Di({fromUser:!1,fromServer:!0,queryId:null,tagged:!1},t))}(e,n._path);{const i=function(e,t){let n="Unknown Error";"too_big"===e?n="The data requested exceeds the maximum size that can be accessed with a single request.":"permission_denied"===e?n="Client doesn't have permission to access the desired data.":"unavailable"===e&&(n="The service is unavailable");const i=new Error(e+" at "+t._path.toString()+": "+n);return i.code=e.toUpperCase(),i}(t,n);return Qs(e,n,null,i)}}}}function sr(e,t){const n=rr(t);return e.queryToTagMap.get(n)}function rr(e){return e._path.toString()+"$"+e._queryIdentifier}function or(e,t){return e.tagToQueryMap.get(t)}function ar(e){const t=e.indexOf("$");return l(-1!==t&&t<e.length-1,"Bad queryKey."),{queryId:e.substr(t+1),path:new fn(e.substr(0,t))}}function lr(e,t,n){const i=e.syncPointTree_.get(t);return l(i,"Missing sync point for query tag that we're tracking"),Ms(i,n,ns(e.pendingWriteTree_,t),null)}function hr(e){return e._queryParams.loadsAllData()&&!e._queryParams.isDefault()?new(l(As,"Reference.ts has not been loaded"),As)(e._repo,e._path):e}class cr{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new cr(t)}node(){return this.node_}}class ur{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=In(this.path_,e);return new ur(this.syncTree_,t)}node(){return Zs(this.syncTree_,this.path_)}}const dr=function(e){return(e=e||{}).timestamp=e.timestamp||(new Date).getTime(),e},pr=function(e,t,n){return e&&"object"==typeof e?(l(".sv"in e,"Unexpected leaf node or priority contents"),"string"==typeof e[".sv"]?_r(e[".sv"],t,n):"object"==typeof e[".sv"]?fr(e[".sv"],t):void l(!1,"Unexpected server value: "+JSON.stringify(e,null,2))):e},_r=function(e,t,n){if("timestamp"===e)return n.timestamp;l(!1,"Unexpected server value: "+e)},fr=function(e,t,n){e.hasOwnProperty("increment")||l(!1,"Unexpected server value: "+JSON.stringify(e,null,2));const i=e.increment;"number"!=typeof i&&l(!1,"Unexpected increment value: "+i);const s=t.node();if(l(null!=s,"Expected ChildrenNode.EMPTY_NODE for nulls"),!s.isLeafNode())return i;const r=s.getValue();return"number"!=typeof r?i:r+i},gr=function(e,t,n){return mr(e,new cr(t),n)};function mr(e,t,n){const i=e.getPriority().val(),s=pr(i,t.getImmediateChild(".priority"),n);let r;if(e.isLeafNode()){const i=e,r=pr(i.getValue(),t,n);return r!==i.getValue()||s!==i.getPriority().val()?new Qn(r,li(s)):e}{const i=e;return r=i,s!==i.getPriority().val()&&(r=r.updatePriority(new Qn(s))),i.forEachChild(Jn,((e,i)=>{const s=mr(i,t.getImmediateChild(e),n);s!==i&&(r=r.updateImmediateChild(e,s))})),r}}
/**
             * @license
             * Copyright 2017 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */class yr{constructor(e="",t=null,n={children:{},childCount:0}){this.name=e,this.parent=t,this.node=n}}function vr(e,t){let n=t instanceof fn?t:new fn(t),i=e,s=mn(n);for(;null!==s;){const e=R(i.node.children,s)||{children:{},childCount:0};i=new yr(s,i,e),n=vn(n),s=mn(n)}return i}function Cr(e){return e.node.value}function wr(e,t){e.node.value=t,Sr(e)}function br(e){return e.node.childCount>0}function Ir(e,t){qt(e.node.children,((n,i)=>{t(new yr(n,e,i))}))}function Tr(e,t,n,i){n&&t(e),Ir(e,(e=>{Tr(e,t,!0)}))}function Er(e){return new fn(null===e.parent?e.name:Er(e.parent)+"/"+e.name)}function Sr(e){null!==e.parent&&function(e,t,n){const i=function(e){return void 0===Cr(e)&&!br(e)}(n),s=x(e.node.children,t);i&&s?(delete e.node.children[t],e.node.childCount--,Sr(e)):i||s||(e.node.children[t]=n.node,e.node.childCount++,Sr(e))}
/**
             * @license
             * Copyright 2017 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */(e.parent,e.name,e)}const kr=/[\[\].#$\/\u0000-\u001F\u007F]/,Nr=/[\[\].#$\u0000-\u001F\u007F]/,Pr=10485760,xr=function(e){return"string"==typeof e&&0!==e.length&&!kr.test(e)},Rr=function(e){return"string"==typeof e&&0!==e.length&&!Nr.test(e)},Dr=function(e,t,n,i){Ar(F(e,"value"),t,n)},Ar=function(e,t,n){const i=n instanceof fn?new Nn(n,e):n;if(void 0===t)throw new Error(e+"contains undefined "+xn(i));if("function"==typeof t)throw new Error(e+"contains a function "+xn(i)+" with contents = "+t.toString());if(xt(t))throw new Error(e+"contains "+t.toString()+" "+xn(i));if("string"==typeof t&&t.length>Pr/3&&q(t)>Pr)throw new Error(e+"contains a string greater than "+Pr+" utf8 bytes "+xn(i)+" ('"+t.substring(0,50)+"...')");if(t&&"object"==typeof t){let n=!1,s=!1;if(qt(t,((t,r)=>{if(".value"===t)n=!0;else if(".priority"!==t&&".sv"!==t&&(s=!0,!xr(t)))throw new Error(e+" contains an invalid key ("+t+") "+xn(i)+'.  Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"');var o,a;a=t,(o=i).parts_.length>0&&(o.byteLength_+=1),o.parts_.push(a),o.byteLength_+=q(a),Pn(o),Ar(e,r,i),function(e){const t=e.parts_.pop();e.byteLength_-=q(t),e.parts_.length>0&&(e.byteLength_-=1)}(i)})),n&&s)throw new Error(e+' contains ".value" child '+xn(i)+" in addition to actual children.")}},Or=function(e,t,n,i){if(!Rr(n))throw new Error(F(e,t)+'was an invalid path = "'+n+'". Paths must be non-empty strings and can\'t contain ".", "#", "$", "[", or "]"')},Mr=function(e,t,n,i){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),Or(e,t,n)},Lr=function(e,t){if(".info"===mn(t))throw new Error(e+" failed = Can't modify data under /.info/")},Fr=function(e,t){const n=t.path.toString();if("string"!=typeof t.repoInfo.host||0===t.repoInfo.host.length||!xr(t.repoInfo.namespace)&&"localhost"!==t.repoInfo.host.split(":")[0]||0!==n.length&&!function(e){return e&&(e=e.replace(/^\/*\.info(\/|$)/,"/")),Rr(e)}(n))throw new Error(F(e,"url")+'must be a valid firebase URL and the path can\'t contain ".", "#", "$", "[", or "]".')};
/**
             * @license
             * Copyright 2017 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */
class qr{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Ur(e,t){let n=null;for(let i=0;i<t.length;i++){const s=t[i],r=s.getPath();null===n||Sn(r,n.path)||(e.eventLists_.push(n),n=null),null===n&&(n={events:[],path:r}),n.events.push(s)}n&&e.eventLists_.push(n)}function Wr(e,t,n){Ur(e,n),jr(e,(e=>Sn(e,t)))}function Br(e,t,n){Ur(e,n),jr(e,(e=>kn(e,t)||kn(t,e)))}function jr(e,t){e.recursionDepth_++;let n=!0;for(let i=0;i<e.eventLists_.length;i++){const s=e.eventLists_[i];s&&(t(s.path)?(Hr(e.eventLists_[i]),e.eventLists_[i]=null):n=!1)}n&&(e.eventLists_=[]),e.recursionDepth_--}function Hr(e){for(let t=0;t<e.events.length;t++){const n=e.events[t];if(null!==n){e.events[t]=null;const i=n.getEventRunner();It&&Et("event: "+n.toString()),jt(i)}}}
/**
             * @license
             * Copyright 2017 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */const zr=25;class Vr{constructor(e,t,n,i){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=n,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new qr,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Ii(),this.transactionQueueTree_=new yr,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function $r(e,t,n){if(e.stats_=nn(e.repoInfo_),e.forceRestClient_||("object"==typeof window&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0)e.server_=new wi(e.repoInfo_,((t,n,i,s)=>{Gr(e,t,n,i,s)}),e.authTokenProvider_,e.appCheckProvider_),setTimeout((()=>Qr(e,!0)),0);else{if(null!=n){if("object"!=typeof n)throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{N(n)}catch(i){throw new Error("Invalid authOverride provided: "+i)}}e.persistentConnection_=new An(e.repoInfo_,t,((t,n,i,s)=>{Gr(e,t,n,i,s)}),(t=>{Qr(e,t)}),(t=>{!function(e,t){qt(t,((t,n)=>{Jr(e,t,n)}))}(e,t)}),e.authTokenProvider_,e.appCheckProvider_,n),e.server_=e.persistentConnection_}e.authTokenProvider_.addTokenChangeListener((t=>{e.server_.refreshAuthToken(t)})),e.appCheckProvider_.addTokenChangeListener((t=>{e.server_.refreshAppCheckToken(t.token)})),e.statsReporter_=function(e,t){const n=e.toString();return tn[n]||(tn[n]=t()),tn[n]}(e.repoInfo_,(()=>new ki(e.stats_,e.server_))),e.infoData_=new bi,e.infoSyncTree_=new $s({startListening:(t,n,i,s)=>{let r=[];const o=e.infoData_.getNode(t._path);return o.isEmpty()||(r=Gs(e.infoSyncTree_,t._path,o),setTimeout((()=>{s("ok")}),0)),r},stopListening:()=>{}}),Jr(e,"connected",!1),e.serverSyncTree_=new $s({startListening:(t,n,i,s)=>(e.server_.listen(t,i,n,((n,i)=>{const r=s(n,i);Br(e.eventQueue_,t._path,r)})),[]),stopListening:(t,n)=>{e.server_.unlisten(t,n)}})}function Yr(e){const t=e.infoData_.getNode(new fn(".info/serverTimeOffset")).val()||0;return(new Date).getTime()+t}function Kr(e){return dr({timestamp:Yr(e)})}function Gr(e,t,n,i,s){e.dataUpdateCount++;const r=new fn(t);n=e.interceptServerDataCallback_?e.interceptServerDataCallback_(t,n):n;let o=[];if(s)if(i){const t=A(n,(e=>li(e)));o=function(e,t,n,i){const s=or(e,i);if(s){const i=ar(s),r=i.path,o=i.queryId,a=En(r,t),l=zi.fromObject(n);return lr(e,r,new Oi(xi(o),a,l))}return[]}(e.serverSyncTree_,r,t,s)}else{const t=li(n);o=Js(e.serverSyncTree_,r,t,s)}else if(i){const t=A(n,(e=>li(e)));o=function(e,t,n){const i=zi.fromObject(n);return er(e,new Oi({fromUser:!1,fromServer:!0,queryId:null,tagged:!1},t,i))}(e.serverSyncTree_,r,t)}else{const t=li(n);o=Gs(e.serverSyncTree_,r,t)}let a=r;o.length>0&&(a=no(e,r)),Br(e.eventQueue_,a,o)}function Qr(e,t){Jr(e,"connected",t),!1===t&&function(e){Zr(e,"onDisconnectEvents");const t=Kr(e),n=Ii();Ei(e.onDisconnect_,gn(),((i,s)=>{const r=function(e,t,n,i){return mr(t,new ur(n,e),i)}(i,s,e.serverSyncTree_,t);Ti(n,i,r)}));let i=[];Ei(n,gn(),((t,n)=>{i=i.concat(Gs(e.serverSyncTree_,t,n));const s=ao(e,t);no(e,s)})),e.onDisconnect_=Ii(),Br(e.eventQueue_,gn(),i)}(e)}function Jr(e,t,n){const i=new fn("/.info/"+t),s=li(n);e.infoData_.updateSnapshot(i,s);const r=Gs(e.infoSyncTree_,i,s);Br(e.eventQueue_,i,r)}function Xr(e){return e.nextWriteId_++}function Zr(e,...t){let n="";e.persistentConnection_&&(n=e.persistentConnection_.id+":"),Et(n,...t)}function eo(e,t,n){return Zs(e.serverSyncTree_,t,n)||ri.EMPTY_NODE}function to(e,t=e.transactionQueueTree_){if(t||oo(e,t),Cr(t)){const n=so(e,t);l(n.length>0,"Sending zero length transaction queue"),n.every((e=>0===e.status))&&function(e,t,n){const i=n.map((e=>e.currentWriteId)),s=eo(e,t,i);let r=s;const o=s.hash();for(let c=0;c<n.length;c++){const e=n[c];l(0===e.status,"tryToSendTransactionQueue_: items in queue should all be run."),e.status=1,e.retryCount++;const i=En(t,e.path);r=r.updateChild(i,e.currentOutputSnapshotRaw)}const a=r.val(!0),h=t;e.server_.put(h.toString(),a,(i=>{Zr(e,"transaction put response",{path:h.toString(),status:i});let s=[];if("ok"===i){const i=[];for(let t=0;t<n.length;t++)n[t].status=2,s=s.concat(Ks(e.serverSyncTree_,n[t].currentWriteId)),n[t].onComplete&&i.push((()=>n[t].onComplete(null,!0,n[t].currentOutputSnapshotResolved))),n[t].unwatcher();oo(e,vr(e.transactionQueueTree_,t)),to(e,e.transactionQueueTree_),Br(e.eventQueue_,t,s);for(let e=0;e<i.length;e++)jt(i[e])}else{if("datastale"===i)for(let e=0;e<n.length;e++)3===n[e].status?n[e].status=4:n[e].status=0;else{Pt("transaction at "+h.toString()+" failed: "+i);for(let e=0;e<n.length;e++)n[e].status=4,n[e].abortReason=i}no(e,t)}}),o)}(e,Er(t),n)}else br(t)&&Ir(t,(t=>{to(e,t)}))}function no(e,t){const n=io(e,t),i=Er(n);return function(e,t,n){if(0===t.length)return;const i=[];let s=[];const r=t.filter((e=>0===e.status)),o=r.map((e=>e.currentWriteId));for(let h=0;h<t.length;h++){const r=t[h],c=En(n,r.path);let u,d=!1;if(l(null!==c,"rerunTransactionsUnderNode_: relativePath should not be null."),4===r.status)d=!0,u=r.abortReason,s=s.concat(Ks(e.serverSyncTree_,r.currentWriteId,!0));else if(0===r.status)if(r.retryCount>=zr)d=!0,u="maxretry",s=s.concat(Ks(e.serverSyncTree_,r.currentWriteId,!0));else{const n=eo(e,r.path,o);r.currentInputSnapshot=n;const i=t[h].update(n.val());if(void 0!==i){Ar("transaction failed: Data returned ",i,r.path);let t=li(i);"object"==typeof i&&null!=i&&x(i,".priority")||(t=t.updatePriority(n.getPriority()));const a=r.currentWriteId,l=Kr(e),h=gr(t,n,l);r.currentOutputSnapshotRaw=t,r.currentOutputSnapshotResolved=h,r.currentWriteId=Xr(e),o.splice(o.indexOf(a),1),s=s.concat(Ys(e.serverSyncTree_,r.path,h,r.currentWriteId,r.applyLocally)),s=s.concat(Ks(e.serverSyncTree_,a,!0))}else d=!0,u="nodata",s=s.concat(Ks(e.serverSyncTree_,r.currentWriteId,!0))}Br(e.eventQueue_,n,s),s=[],d&&(t[h].status=2,a=t[h].unwatcher,setTimeout(a,Math.floor(0)),t[h].onComplete&&("nodata"===u?i.push((()=>t[h].onComplete(null,!1,t[h].currentInputSnapshot))):i.push((()=>t[h].onComplete(new Error(u),!1,null)))))}var a;oo(e,e.transactionQueueTree_);for(let l=0;l<i.length;l++)jt(i[l]);to(e,e.transactionQueueTree_)}(e,so(e,n),i),i}function io(e,t){let n,i=e.transactionQueueTree_;for(n=mn(t);null!==n&&void 0===Cr(i);)i=vr(i,n),n=mn(t=vn(t));return i}function so(e,t){const n=[];return ro(e,t,n),n.sort(((e,t)=>e.order-t.order)),n}function ro(e,t,n){const i=Cr(t);if(i)for(let s=0;s<i.length;s++)n.push(i[s]);Ir(t,(t=>{ro(e,t,n)}))}function oo(e,t){const n=Cr(t);if(n){let e=0;for(let t=0;t<n.length;t++)2!==n[t].status&&(n[e]=n[t],e++);n.length=e,wr(t,n.length>0?n:void 0)}Ir(t,(t=>{oo(e,t)}))}function ao(e,t){const n=Er(io(e,t)),i=vr(e.transactionQueueTree_,t);return function(e,t){let n=e.parent;for(;null!==n;){if(t(n))return!0;n=n.parent}}(i,(t=>{lo(e,t)})),lo(e,i),Tr(i,(t=>{lo(e,t)})),n}function lo(e,t){const n=Cr(t);if(n){const i=[];let s=[],r=-1;for(let t=0;t<n.length;t++)3===n[t].status||(1===n[t].status?(l(r===t-1,"All SENT items should be at beginning of queue."),r=t,n[t].status=3,n[t].abortReason="set"):(l(0===n[t].status,"Unexpected transaction status in abort"),n[t].unwatcher(),s=s.concat(Ks(e.serverSyncTree_,n[t].currentWriteId,!0)),n[t].onComplete&&i.push(n[t].onComplete.bind(null,new Error("set"),!1,null))));-1===r?wr(t,void 0):n.length=r+1,Br(e.eventQueue_,Er(t),s);for(let e=0;e<i.length;e++)jt(i[e])}}
/**
             * @license
             * Copyright 2017 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */const ho=function(e,t){const n=co(e),i=n.namespace;"firebase.com"===n.domain&&Nt(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),i&&"undefined"!==i||"localhost"===n.domain||Nt("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||"undefined"!=typeof window&&window.location&&window.location.protocol&&-1!==window.location.protocol.indexOf("https:")&&Pt("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().");const s="ws"===n.scheme||"wss"===n.scheme;return{repoInfo:new Jt(n.host,n.secure,i,s,t,"",i!==n.subdomain),path:new fn(n.pathString)}},co=function(e){let t="",n="",i="",s="",r="",o=!0,a="https",l=443;if("string"==typeof e){let h=e.indexOf("//");h>=0&&(a=e.substring(0,h-1),e=e.substring(h+2));let c=e.indexOf("/");-1===c&&(c=e.length);let u=e.indexOf("?");-1===u&&(u=e.length),t=e.substring(0,Math.min(c,u)),c<u&&(s=function(e){let t="";const n=e.split("/");for(let s=0;s<n.length;s++)if(n[s].length>0){let e=n[s];try{e=decodeURIComponent(e.replace(/\+/g," "))}catch(i){}t+="/"+e}return t}(e.substring(c,u)));const d=function(e){const t={};"?"===e.charAt(0)&&(e=e.substring(1));for(const n of e.split("&")){if(0===n.length)continue;const i=n.split("=");2===i.length?t[decodeURIComponent(i[0])]=decodeURIComponent(i[1]):Pt(`Invalid query segment '${n}' in query '${e}'`)}return t}(e.substring(Math.min(e.length,u)));h=t.indexOf(":"),h>=0?(o="https"===a||"wss"===a,l=parseInt(t.substring(h+1),10)):h=t.length;const p=t.slice(0,h);if("localhost"===p.toLowerCase())n="localhost";else if(p.split(".").length<=2)n=p;else{const e=t.indexOf(".");i=t.substring(0,e).toLowerCase(),n=t.substring(e+1),r=i}"ns"in d&&(r=d.ns)}return{host:t,port:l,domain:n,subdomain:i,secure:o,scheme:a,pathString:s,namespace:r}};
/**
             * @license
             * Copyright 2017 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */
class uo{constructor(e,t,n,i){this.eventType=e,this.eventRegistration=t,this.snapshot=n,this.prevName=i}getPath(){const e=this.snapshot.ref;return"value"===this.eventType?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+N(this.snapshot.exportVal())}}class po{constructor(e,t,n){this.eventRegistration=e,this.error=t,this.path=n}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}
/**
             * @license
             * Copyright 2017 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */class _o{constructor(e,t){this.snapshotCallback=e,this.cancelCallback=t}onValue(e,t){this.snapshotCallback.call(null,e,t)}onCancel(e){return l(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||void 0!==this.snapshotCallback.userCallback&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}
/**
             * @license
             * Copyright 2020 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */class fo{constructor(e,t,n,i){this._repo=e,this._path=t,this._queryParams=n,this._orderByCalled=i}get key(){return Tn(this._path)?null:Cn(this._path)}get ref(){return new go(this._repo,this._path)}get _queryIdentifier(){const e=Ci(this._queryParams),t=Lt(e);return"{}"===t?"default":t}get _queryObject(){return Ci(this._queryParams)}isEqual(e){if(!((e=U(e))instanceof fo))return!1;const t=this._repo===e._repo,n=Sn(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return t&&n&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+function(e){let t="";for(let n=e.pieceNum_;n<e.pieces_.length;n++)""!==e.pieces_[n]&&(t+="/"+encodeURIComponent(String(e.pieces_[n])));return t||"/"}(this._path)}}class go extends fo{constructor(e,t){super(e,t,new yi,!1)}get parent(){const e=bn(this._path);return null===e?null:new go(this._repo,e)}get root(){let e=this;for(;null!==e.parent;)e=e.parent;return e}}class mo{constructor(e,t,n){this._node=e,this.ref=t,this._index=n}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const t=new fn(e),n=vo(this.ref,e);return new mo(this._node.getChild(t),n,Jn)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return!this._node.isLeafNode()&&!!this._node.forEachChild(this._index,((t,n)=>e(new mo(n,vo(this.ref,t),Jn))))}hasChild(e){const t=new fn(e);return!this._node.getChild(t).isEmpty()}hasChildren(){return!this._node.isLeafNode()&&!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function yo(e,t){return(e=U(e))._checkNotDeleted("ref"),void 0!==t?vo(e._root,t):e._root}function vo(e,t){return null===mn((e=U(e))._path)?Mr("child","path",t):Or("child","path",t),new go(e._repo,In(e._path,t))}class Co{constructor(e){this.callbackContext=e}respondsTo(e){return"value"===e}createEvent(e,t){const n=t._queryParams.getIndex();return new uo("value",this,new mo(e.snapshotNode,new go(t._repo,t._path),n))}getEventRunner(e){return"cancel"===e.getEventType()?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new po(this,e,t):null}matches(e){return e instanceof Co&&(!e.callbackContext||!this.callbackContext||e.callbackContext.matches(this.callbackContext))}hasAnyCallback(){return null!==this.callbackContext}}class wo{constructor(e,t){this.eventType=e,this.callbackContext=t}respondsTo(e){let t="children_added"===e?"child_added":e;return t="children_removed"===t?"child_removed":t,this.eventType===t}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new po(this,e,t):null}createEvent(e,t){l(null!=e.childName,"Child events should have a childName.");const n=vo(new go(t._repo,t._path),e.childName),i=t._queryParams.getIndex();return new uo(e.type,this,new mo(e.snapshotNode,n,i),e.prevName)}getEventRunner(e){return"cancel"===e.getEventType()?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,e.prevName)}matches(e){return e instanceof wo&&this.eventType===e.eventType&&(!this.callbackContext||!e.callbackContext||this.callbackContext.matches(e.callbackContext))}hasAnyCallback(){return!!this.callbackContext}}!function(e){l(!Ds,"__referenceConstructor has already been defined"),Ds=e}(go),function(e){l(!As,"__referenceConstructor has already been defined"),As=e}(go);
/**
             * @license
             * Copyright 2020 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */
const bo={};let Io=!1;function To(e,t,n,i,s){let r=i||e.options.databaseURL;void 0===r&&(e.options.projectId||Nt("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Et("Using default host for project ",e.options.projectId),r=`${e.options.projectId}-default-rtdb.firebaseio.com`);let o,a=ho(r,s),l=a.repoInfo;"undefined"!=typeof process&&ct&&(o=ct.FIREBASE_DATABASE_EMULATOR_HOST),o?(r=`http://${o}?ns=${l.namespace}`,a=ho(r,s),l=a.repoInfo):a.repoInfo.secure;const h=new Vt(e.name,e.options,t);Fr("Invalid Firebase Database URL",a),Tn(a.path)||Nt("Database URL must point to the root of a Firebase Database (not including a child path).");const c=function(e,t,n,i){let s=bo[t.name];s||(s={},bo[t.name]=s);let r=s[e.toURLString()];return r&&Nt("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new Vr(e,Io,n,i),s[e.toURLString()]=r,r}(l,e,h,new zt(e,n));return new Eo(c,e)}class Eo{constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||($r(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new go(this._repo,gn())),this._rootInternal}_delete(){return null!==this._rootInternal&&(function(e,t){const n=bo[t];n&&n[e.key]===e||Nt(`Database ${t}(${e.repoInfo_}) has already been deleted.`),function(e){e.persistentConnection_&&e.persistentConnection_.interrupt("repo_interrupt")}(e),delete n[e.key]}(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){null===this._rootInternal&&Nt("Cannot call "+e+" on a deleted database.")}}An.prototype.simpleListen=function(e,t){this.sendRequest("q",{p:e},t)},An.prototype.echo=function(e,t){this.sendRequest("echo",{d:e},t)},
/**
             * @license
             * Copyright 2021 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */
function(e){pt="11.6.0",Ge(new W("database",((e,{instanceIdentifier:t})=>To(e.getProvider("app").getImmediate(),e.getProvider("auth-internal"),e.getProvider("app-check-internal"),t)),"PUBLIC").setMultipleInstances(!0)),Ze(ut,dt,e),Ze(ut,dt,"esm2017")}();const So=Xe({apiKey:"AIzaSyB0RZF4QLx8ybjXSo0mwd3jcuct-CQ45qc",authDomain:"fb-aio.firebaseapp.com",databaseURL:"https://fb-aio-default-rtdb.asia-southeast1.firebasedatabase.app",projectId:"fb-aio",storageBucket:"fb-aio.firebasestorage.app",messagingSenderId:"77035215087",appId:"1:77035215087:web:f98dc90b21c7edb905e31a"});console.log(So);const ko=function(e=function(e=He){const t=Ve.get(e);if(!t&&e===He&&w())return Xe();if(!t)throw Qe.create("no-app",{appName:e});return t}(),t){const n=function(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}(e,"database").getImmediate({identifier:t});if(!n._instanceStarted){const e=C("database");e&&function(e,t,n,i={}){(e=U(e))._checkNotDeleted("useEmulator");const s=`${t}:${n}`,r=e._repoInternal;if(e._instanceStarted){if(s===e._repoInternal.repoInfo_.host&&O(i,r.repoInfo_.emulatorOptions))return;Nt("connectDatabaseEmulator() cannot initialize or alter the emulator configuration after the database instance has started.")}let o;if(r.repoInfo_.nodeAdmin)i.mockUserToken&&Nt('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),o=new $t($t.OWNER);else if(i.mockUserToken){const t="string"==typeof i.mockUserToken?i.mockUserToken:function(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n=t||"demo-project",i=e.iat||0,s=e.sub||e.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const r=Object.assign({iss:`https://securetoken.google.com/${n}`,aud:n,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},e);return[_(JSON.stringify({alg:"none",type:"JWT"})),_(JSON.stringify(r)),""].join(".")}
/**
             * @license
             * Copyright 2017 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */(i.mockUserToken,e.app.options.projectId);o=new $t(t)}!function(e,t,n,i){e.repoInfo_=new Jt(t,!1,e.repoInfo_.namespace,e.repoInfo_.webSocketOnly,e.repoInfo_.nodeAdmin,e.repoInfo_.persistenceKey,e.repoInfo_.includeNamespaceInQueryParams,!0,n),i&&(e.authTokenProvider_=i)}(r,s,i,o)}(n,...e)}return n}(So)}}}));
