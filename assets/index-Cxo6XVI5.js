const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./IconSelector-CyeLBT7W.js","./index-DZEcYG8Q.js","./index-C6k8ZUm0.css","./MyApp-DRRa55Bd.js","./index-iP3EwXx5.js","./PurePanel-Beni9Vkb.js","./index-B87p3I4c.js","./Input-LTpJ6AuY.js","./EyeOutlined-BBPXKIU8.js","./SearchOutlined-Bh66KhXc.js"])))=>i.map(i=>d[i]);
import{aW as e,aU as t,r as n,a_ as i,b1 as s,b9 as r,b5 as o,b2 as a,aY as l}from"./index-DZEcYG8Q.js";import{S as c}from"./Screen-1_H4V3tg.js";import{u as h,d as u,t as d,s as p,S as f,b as _,A as m,c as g,e as y,T as v,f as C,ah as b,aI as w,I}from"./MyApp-DRRa55Bd.js";import T from"./useCacheState-D4ghBCVU.js";import{B as E}from"./BadgeWrapper-D8uZ2wKG.js";import{M as x}from"./index-iP3EwXx5.js";import{I as S}from"./index-B87p3I4c.js";import{S as k}from"./index-D9U4WvIE.js";import{E as N}from"./index-CvALG2oX.js";import{C as P}from"./index-B2BHea4N.js";import{P as R}from"./index-CQLKYzCc.js";import{T as D}from"./index-CiDxWY8X.js";import"./col-DLTiGXF3.js";import"./row-BgRGnxnv.js";import"./useBreakpoint-HjQEkdEA.js";import"./PurePanel-Beni9Vkb.js";import"./Input-LTpJ6AuY.js";import"./EyeOutlined-BBPXKIU8.js";import"./SearchOutlined-Bh66KhXc.js";import"./List-BPJoeCz4.js";import"./move-Bzyc79vL.js";import"./DownOutlined-BrkIPj-I.js";import"./index-C0Edlh-n.js";import"./Dropdown-BgvXKd3u.js";
/**
 * @license
 * Copyright 2025 Google LLC
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
 */var A={};
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
 */const j="${JSCORE_VERSION}",O=function(e,t){if(!e)throw L(t)},L=function(e){return new Error("Firebase Database ("+j+") INTERNAL ASSERT FAILED: "+e)},M=function(e){const t=[];let n=0;for(let i=0;i<e.length;i++){let s=e.charCodeAt(i);s<128?t[n++]=s:s<2048?(t[n++]=s>>6|192,t[n++]=63&s|128):55296==(64512&s)&&i+1<e.length&&56320==(64512&e.charCodeAt(i+1))?(s=65536+((1023&s)<<10)+(1023&e.charCodeAt(++i)),t[n++]=s>>18|240,t[n++]=s>>12&63|128,t[n++]=s>>6&63|128,t[n++]=63&s|128):(t[n++]=s>>12|224,t[n++]=s>>6&63|128,t[n++]=63&s|128)}return t},F={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let s=0;s<e.length;s+=3){const t=e[s],r=s+1<e.length,o=r?e[s+1]:0,a=s+2<e.length,l=a?e[s+2]:0,c=t>>2,h=(3&t)<<4|o>>4;let u=(15&o)<<2|l>>6,d=63&l;a||(d=64,r||(u=64)),i.push(n[c],n[h],n[u],n[d])}return i.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(M(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):function(e){const t=[];let n=0,i=0;for(;n<e.length;){const s=e[n++];if(s<128)t[i++]=String.fromCharCode(s);else if(s>191&&s<224){const r=e[n++];t[i++]=String.fromCharCode((31&s)<<6|63&r)}else if(s>239&&s<365){const r=((7&s)<<18|(63&e[n++])<<12|(63&e[n++])<<6|63&e[n++])-65536;t[i++]=String.fromCharCode(55296+(r>>10)),t[i++]=String.fromCharCode(56320+(1023&r))}else{const r=e[n++],o=e[n++];t[i++]=String.fromCharCode((15&s)<<12|(63&r)<<6|63&o)}}return t.join("")}(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let s=0;s<e.length;){const t=n[e.charAt(s++)],r=s<e.length?n[e.charAt(s)]:0;++s;const o=s<e.length?n[e.charAt(s)]:64;++s;const a=s<e.length?n[e.charAt(s)]:64;if(++s,null==t||null==r||null==o||null==a)throw new q;const l=t<<2|r>>4;if(i.push(l),64!==o){const e=r<<4&240|o>>2;if(i.push(e),64!==a){const e=o<<6&192|a;i.push(e)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};
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
 */class q extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const B=function(e){const t=M(e);return F.encodeByteArray(t,!0)},W=function(e){return B(e).replace(/\./g,"")},U=function(e){try{return F.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};
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
function H(e){return z(void 0,e)}function z(e,t){if(!(t instanceof Object))return t;switch(t.constructor){case Date:return new Date(t.getTime());case Object:void 0===e&&(e={});break;case Array:e=[];break;default:return t}for(const n in t)t.hasOwnProperty(n)&&"__proto__"!==n&&(e[n]=z(e[n],t[n]));return e}
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
const V=()=>
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
function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if("undefined"!=typeof global)return global;throw new Error("Unable to locate global object.")}().__FIREBASE_DEFAULTS__,$=()=>{try{return V()||(()=>{if("undefined"==typeof process)return;const e=A.__FIREBASE_DEFAULTS__;return e?JSON.parse(e):void 0})()||(()=>{if("undefined"==typeof document)return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(n){return}const t=e&&U(e[1]);return t&&JSON.parse(t)})()}catch(e){return void console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`)}},Y=e=>{const t=(e=>{var t,n;return null===(n=null===(t=$())||void 0===t?void 0:t.emulatorHosts)||void 0===n?void 0:n[e]})(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const i=parseInt(t.substring(n+1),10);return"["===t[0]?[t.substring(1,n-1),i]:[t.substring(0,n),i]},K=()=>{var e;return null===(e=$())||void 0===e?void 0:e.config};
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
class G{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"==typeof e&&(this.promise.catch((()=>{})),1===e.length?e(t):e(t,n))}}}
/**
 * @license
 * Copyright 2025 Google LLC
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
 */function Q(e){return e.endsWith(".cloudworkstations.dev")}const J={};let X=!1;function Z(e,t){if("undefined"==typeof window||"undefined"==typeof document||!Q(window.location.host)||J[e]===t||J[e]||X)return;function n(e){return`__firebase__banner__${e}`}J[e]=t;const i="__firebase__banner",s=function(){const e={prod:[],emulator:[]};for(const t of Object.keys(J))J[t]?e.emulator.push(t):e.prod.push(t);return e}().prod.length>0;function r(){const e=document.createElement("span");return e.style.cursor="pointer",e.style.marginLeft="16px",e.style.fontSize="24px",e.innerHTML=" &times;",e.onclick=()=>{X=!0,function(){const e=document.getElementById(i);e&&e.remove()}()},e}function o(){const e=function(e){let t=document.getElementById(e),n=!1;return t||(t=document.createElement("div"),t.setAttribute("id",e),n=!0),{created:n,element:t}}(i),t=n("text"),o=document.getElementById(t)||document.createElement("span"),a=n("learnmore"),l=document.getElementById(a)||document.createElement("a"),c=n("preprendIcon"),h=document.getElementById(c)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(e.created){const t=e.element;!function(e){e.style.display="flex",e.style.background="#7faaf0",e.style.position="fixed",e.style.bottom="5px",e.style.left="5px",e.style.padding=".5em",e.style.borderRadius="5px",e.style.alignItems="center"}(t),function(e,t){e.setAttribute("id",t),e.innerText="Learn more",e.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",e.setAttribute("target","__blank"),e.style.paddingLeft="5px",e.style.textDecoration="underline"}(l,a);const n=r();!function(e,t){e.setAttribute("width","24"),e.setAttribute("id",t),e.setAttribute("height","24"),e.setAttribute("viewBox","0 0 24 24"),e.setAttribute("fill","none"),e.style.marginLeft="-6px"}(h,c),t.append(h,o,l,n),document.body.appendChild(t)}s?(o.innerText="Preview backend disconnected.",h.innerHTML='<g clip-path="url(#clip0_6013_33858)">\n<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>\n</g>\n<defs>\n<clipPath id="clip0_6013_33858">\n<rect width="24" height="24" fill="white"/>\n</clipPath>\n</defs>'):(h.innerHTML='<g clip-path="url(#clip0_6083_34804)">\n<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>\n</g>\n<defs>\n<clipPath id="clip0_6083_34804">\n<rect width="24" height="24" fill="white"/>\n</clipPath>\n</defs>',o.innerText="Preview backend running in this workspace."),o.setAttribute("id",t)}"loading"===document.readyState?window.addEventListener("DOMContentLoaded",o):o()}
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
 */function ee(){return"undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test("undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:"")}class te extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name="FirebaseError",Object.setPrototypeOf(this,te.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ne.prototype.create)}}class ne{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},i=`${this.service}/${e}`,s=this.errors[e],r=s?function(e,t){return e.replace(ie,((e,n)=>{const i=t[n];return null!=i?String(i):`<${n}?>`}))}(s,n):"Error",o=`${this.serviceName}: ${r} (${i}).`;return new te(i,o,n)}}const ie=/\{\$([^}]+)}/g;
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
 */function se(e){return JSON.parse(e)}function re(e){return JSON.stringify(e)}
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
 */const oe=function(e){let t={},n={},i={},s="";try{const r=e.split(".");t=se(U(r[0])||""),n=se(U(r[1])||""),s=r[2],i=n.d||{},delete n.d}catch(r){}return{header:t,claims:n,data:i,signature:s}};
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
function ae(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function le(e,t){return Object.prototype.hasOwnProperty.call(e,t)?e[t]:void 0}function ce(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function he(e,t,n){const i={};for(const s in e)Object.prototype.hasOwnProperty.call(e,s)&&(i[s]=t.call(n,e[s],s,e));return i}function ue(e,t){if(e===t)return!0;const n=Object.keys(e),i=Object.keys(t);for(const s of n){if(!i.includes(s))return!1;const n=e[s],r=t[s];if(de(n)&&de(r)){if(!ue(n,r))return!1}else if(n!==r)return!1}for(const s of i)if(!n.includes(s))return!1;return!0}function de(e){return null!==e&&"object"==typeof e}
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
class pe{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=64,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const n=this.W_;if("string"==typeof e)for(let h=0;h<16;h++)n[h]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let h=0;h<16;h++)n[h]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let h=16;h<80;h++){const e=n[h-3]^n[h-8]^n[h-14]^n[h-16];n[h]=4294967295&(e<<1|e>>>31)}let i,s,r=this.chain_[0],o=this.chain_[1],a=this.chain_[2],l=this.chain_[3],c=this.chain_[4];for(let h=0;h<80;h++){h<40?h<20?(i=l^o&(a^l),s=1518500249):(i=o^a^l,s=1859775393):h<60?(i=o&a|l&(o|a),s=2400959708):(i=o^a^l,s=3395469782);const e=(r<<5|r>>>27)+i+c+s+n[h]&4294967295;c=l,l=a,a=4294967295&(o<<30|o>>>2),o=r,r=e}this.chain_[0]=this.chain_[0]+r&4294967295,this.chain_[1]=this.chain_[1]+o&4294967295,this.chain_[2]=this.chain_[2]+a&4294967295,this.chain_[3]=this.chain_[3]+l&4294967295,this.chain_[4]=this.chain_[4]+c&4294967295}update(e,t){if(null==e)return;void 0===t&&(t=e.length);const n=t-this.blockSize;let i=0;const s=this.buf_;let r=this.inbuf_;for(;i<t;){if(0===r)for(;i<=n;)this.compress_(e,i),i+=this.blockSize;if("string"==typeof e){for(;i<t;)if(s[r]=e.charCodeAt(i),++r,++i,r===this.blockSize){this.compress_(s),r=0;break}}else for(;i<t;)if(s[r]=e[i],++r,++i,r===this.blockSize){this.compress_(s),r=0;break}}this.inbuf_=r,this.total_+=t}digest(){const e=[];let t=8*this.total_;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=255&t,t/=256;this.compress_(this.buf_);let n=0;for(let i=0;i<5;i++)for(let t=24;t>=0;t-=8)e[n]=this.chain_[i]>>t&255,++n;return e}}function fe(e,t){return`${e} failed: ${t} argument `}
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
 */const _e=function(e){let t=0;for(let n=0;n<e.length;n++){const i=e.charCodeAt(n);i<128?t++:i<2048?t+=2:i>=55296&&i<=56319?(t+=4,n++):t+=3}return t};
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
function me(e){return e&&e._delegate?e._delegate:e}class ge{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}
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
 */const ye="[DEFAULT]";
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
 */class ve{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const e=new G;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:t});n&&e.resolve(n)}catch(n){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const n=this.normalizeInstanceIdentifier(null==e?void 0:e.identifier),i=null!==(t=null==e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(i)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(s){if(i)return null;throw s}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if(function(e){return"EAGER"===e.instantiationMode}
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
 */(e))try{this.getOrInitializeService({instanceIdentifier:ye})}catch(t){}for(const[e,n]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(e);try{const e=this.getOrInitializeService({instanceIdentifier:i});n.resolve(e)}catch(t){}}}}clearInstance(e=ye){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter((e=>"INTERNAL"in e)).map((e=>e.INTERNAL.delete())),...e.filter((e=>"_delete"in e)).map((e=>e._delete()))])}isComponentSet(){return null!=this.component}isInitialized(e=ye){return this.instances.has(e)}getOptions(e=ye){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[s,r]of this.instancesDeferred.entries()){n===this.normalizeInstanceIdentifier(s)&&r.resolve(i)}return i}onInit(e,t){var n;const i=this.normalizeInstanceIdentifier(t),s=null!==(n=this.onInitCallbacks.get(i))&&void 0!==n?n:new Set;s.add(e),this.onInitCallbacks.set(i,s);const r=this.instances.get(i);return r&&e(r,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const s of n)try{s(e,t)}catch(i){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:(i=e,i===ye?void 0:i),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch(s){}var i;return n||null}normalizeInstanceIdentifier(e=ye){return this.component?this.component.multipleInstances?e:ye:e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}class Ce{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new ve(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}
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
 */var be,we;(we=be||(be={}))[we.DEBUG=0]="DEBUG",we[we.VERBOSE=1]="VERBOSE",we[we.INFO=2]="INFO",we[we.WARN=3]="WARN",we[we.ERROR=4]="ERROR",we[we.SILENT=5]="SILENT";const Ie={debug:be.DEBUG,verbose:be.VERBOSE,info:be.INFO,warn:be.WARN,error:be.ERROR,silent:be.SILENT},Te=be.INFO,Ee={[be.DEBUG]:"log",[be.VERBOSE]:"log",[be.INFO]:"info",[be.WARN]:"warn",[be.ERROR]:"error"},xe=(e,t,...n)=>{if(t<e.logLevel)return;const i=(new Date).toISOString(),s=Ee[t];if(!s)throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);console[s](`[${i}]  ${e.name}:`,...n)};class Se{constructor(e){this.name=e,this._logLevel=Te,this._logHandler=xe,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in be))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"==typeof e?Ie[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!=typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,be.DEBUG,...e),this._logHandler(this,be.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,be.VERBOSE,...e),this._logHandler(this,be.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,be.INFO,...e),this._logHandler(this,be.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,be.WARN,...e),this._logHandler(this,be.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,be.ERROR,...e),this._logHandler(this,be.ERROR,...e)}}let ke,Ne;const Pe=new WeakMap,Re=new WeakMap,De=new WeakMap,Ae=new WeakMap,je=new WeakMap;let Oe={get(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return Re.get(e);if("objectStoreNames"===t)return e.objectStoreNames||De.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Fe(e[t])},set:(e,t,n)=>(e[t]=n,!0),has:(e,t)=>e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e};function Le(e){return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(Ne||(Ne=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(e)?function(...t){return e.apply(qe(this),t),Fe(Pe.get(this))}:function(...t){return Fe(e.apply(qe(this),t))}:function(t,...n){const i=e.call(qe(this),t,...n);return De.set(i,t.sort?t.sort():[t]),Fe(i)}}function Me(e){return"function"==typeof e?Le(e):(e instanceof IDBTransaction&&function(e){if(Re.has(e))return;const t=new Promise(((t,n)=>{const i=()=>{e.removeEventListener("complete",s),e.removeEventListener("error",r),e.removeEventListener("abort",r)},s=()=>{t(),i()},r=()=>{n(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",s),e.addEventListener("error",r),e.addEventListener("abort",r)}));Re.set(e,t)}(e),t=e,(ke||(ke=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])).some((e=>t instanceof e))?new Proxy(e,Oe):e);var t}function Fe(e){if(e instanceof IDBRequest)return function(e){const t=new Promise(((t,n)=>{const i=()=>{e.removeEventListener("success",s),e.removeEventListener("error",r)},s=()=>{t(Fe(e.result)),i()},r=()=>{n(e.error),i()};e.addEventListener("success",s),e.addEventListener("error",r)}));return t.then((t=>{t instanceof IDBCursor&&Pe.set(t,e)})).catch((()=>{})),je.set(t,e),t}(e);if(Ae.has(e))return Ae.get(e);const t=Me(e);return t!==e&&(Ae.set(e,t),je.set(t,e)),t}const qe=e=>je.get(e);const Be=["get","getKey","getAll","getAllKeys","count"],We=["put","add","delete","clear"],Ue=new Map;function He(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!=typeof t)return;if(Ue.get(t))return Ue.get(t);const n=t.replace(/FromIndex$/,""),i=t!==n,s=We.includes(n);if(!(n in(i?IDBIndex:IDBObjectStore).prototype)||!s&&!Be.includes(n))return;const r=async function(e,...t){const r=this.transaction(e,s?"readwrite":"readonly");let o=r.store;return i&&(o=o.index(t.shift())),(await Promise.all([o[n](...t),s&&r.done]))[0]};return Ue.set(t,r),r}Oe=(e=>({...e,get:(t,n,i)=>He(t,n)||e.get(t,n,i),has:(t,n)=>!!He(t,n)||e.has(t,n)}))(Oe);
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
class ze{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map((e=>{if(function(e){const t=e.getComponent();return"VERSION"===(null==t?void 0:t.type)}(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null})).filter((e=>e)).join(" ")}}const Ve="@firebase/app",$e="0.13.1",Ye=new Se("@firebase/app"),Ke="@firebase/app-compat",Ge="@firebase/analytics-compat",Qe="@firebase/analytics",Je="@firebase/app-check-compat",Xe="@firebase/app-check",Ze="@firebase/auth",et="@firebase/auth-compat",tt="@firebase/database",nt="@firebase/data-connect",it="@firebase/database-compat",st="@firebase/functions",rt="@firebase/functions-compat",ot="@firebase/installations",at="@firebase/installations-compat",lt="@firebase/messaging",ct="@firebase/messaging-compat",ht="@firebase/performance",ut="@firebase/performance-compat",dt="@firebase/remote-config",pt="@firebase/remote-config-compat",ft="@firebase/storage",_t="@firebase/storage-compat",mt="@firebase/firestore",gt="@firebase/ai",yt="@firebase/firestore-compat",vt="firebase",Ct="[DEFAULT]",bt={[Ve]:"fire-core",[Ke]:"fire-core-compat",[Qe]:"fire-analytics",[Ge]:"fire-analytics-compat",[Xe]:"fire-app-check",[Je]:"fire-app-check-compat",[Ze]:"fire-auth",[et]:"fire-auth-compat",[tt]:"fire-rtdb",[nt]:"fire-data-connect",[it]:"fire-rtdb-compat",[st]:"fire-fn",[rt]:"fire-fn-compat",[ot]:"fire-iid",[at]:"fire-iid-compat",[lt]:"fire-fcm",[ct]:"fire-fcm-compat",[ht]:"fire-perf",[ut]:"fire-perf-compat",[dt]:"fire-rc",[pt]:"fire-rc-compat",[ft]:"fire-gcs",[_t]:"fire-gcs-compat",[mt]:"fire-fst",[yt]:"fire-fst-compat",[gt]:"fire-vertex","fire-js":"fire-js",[vt]:"fire-js-all"},wt=new Map,It=new Map,Tt=new Map;function Et(e,t){try{e.container.addComponent(t)}catch(n){Ye.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function xt(e){const t=e.name;if(Tt.has(t))return Ye.debug(`There were multiple attempts to register component ${t}.`),!1;Tt.set(t,e);for(const n of wt.values())Et(n,e);for(const n of It.values())Et(n,e);return!0}
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
const St=new ne("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."});
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
class kt{constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new ge("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw St.create("app-deleted",{appName:this._name})}}
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
 */function Nt(e,t={}){let n=e;if("object"!=typeof t){t={name:t}}const i=Object.assign({name:Ct,automaticDataCollectionEnabled:!0},t),s=i.name;if("string"!=typeof s||!s)throw St.create("bad-app-name",{appName:String(s)});if(n||(n=K()),!n)throw St.create("no-options");const r=wt.get(s);if(r){if(ue(n,r.options)&&ue(i,r.config))return r;throw St.create("duplicate-app",{appName:s})}const o=new Ce(s);for(const l of Tt.values())o.addComponent(l);const a=new kt(n,i,o);return wt.set(s,a),a}function Pt(e,t,n){var i;let s=null!==(i=bt[e])&&void 0!==i?i:e;n&&(s+=`-${n}`);const r=s.match(/\s|\//),o=t.match(/\s|\//);if(r||o){const e=[`Unable to register library "${s}" with version "${t}":`];return r&&e.push(`library name "${s}" contains illegal characters (whitespace or "/")`),r&&o&&e.push("and"),o&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void Ye.warn(e.join(" "))}xt(new ge(`${s}-version`,(()=>({library:s,version:t})),"VERSION"))}
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
 */const Rt="firebase-heartbeat-store";let Dt=null;function At(){return Dt||(Dt=function(e,t,{blocked:n,upgrade:i,blocking:s,terminated:r}={}){const o=indexedDB.open(e,t),a=Fe(o);return i&&o.addEventListener("upgradeneeded",(e=>{i(Fe(o.result),e.oldVersion,e.newVersion,Fe(o.transaction),e)})),n&&o.addEventListener("blocked",(e=>n(e.oldVersion,e.newVersion,e))),a.then((e=>{r&&e.addEventListener("close",(()=>r())),s&&e.addEventListener("versionchange",(e=>s(e.oldVersion,e.newVersion,e)))})).catch((()=>{})),a}("firebase-heartbeat-database",1,{upgrade:(e,t)=>{if(0===t)try{e.createObjectStore(Rt)}catch(n){console.warn(n)}}}).catch((e=>{throw St.create("idb-open",{originalErrorMessage:e.message})}))),Dt}async function jt(e,t){try{const n=(await At()).transaction(Rt,"readwrite"),i=n.objectStore(Rt);await i.put(t,Ot(e)),await n.done}catch(n){if(n instanceof te)Ye.warn(n.message);else{const e=St.create("idb-set",{originalErrorMessage:null==n?void 0:n.message});Ye.warn(e.message)}}}function Ot(e){return`${e.name}!${e.options.appId}`}
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
 */class Lt{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Ft(t),this._heartbeatsCachePromise=this._storage.read().then((e=>(this._heartbeatsCache=e,e)))}async triggerHeartbeat(){var e,t;try{const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Mt();if(null==(null===(e=this._heartbeatsCache)||void 0===e?void 0:e.heartbeats)&&(this._heartbeatsCache=await this._heartbeatsCachePromise,null==(null===(t=this._heartbeatsCache)||void 0===t?void 0:t.heartbeats)))return;if(this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some((e=>e.date===i)))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:n}),this._heartbeatsCache.heartbeats.length>30){const e=function(e){if(0===e.length)return-1;let t=0,n=e[0].date;for(let i=1;i<e.length;i++)e[i].date<n&&(n=e[i].date,t=i);return t}
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
 */(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(e,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(n){Ye.warn(n)}}async getHeartbeatsHeader(){var e;try{if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null==(null===(e=this._heartbeatsCache)||void 0===e?void 0:e.heartbeats)||0===this._heartbeatsCache.heartbeats.length)return"";const t=Mt(),{heartbeatsToSend:n,unsentEntries:i}=function(e,t=1024){const n=[];let i=e.slice();for(const s of e){const e=n.find((e=>e.agent===s.agent));if(e){if(e.dates.push(s.date),qt(n)>t){e.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),qt(n)>t){n.pop();break}i=i.slice(1)}return{heartbeatsToSend:n,unsentEntries:i}}(this._heartbeatsCache.heartbeats),s=W(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(t){return Ye.warn(t),""}}}function Mt(){return(new Date).toISOString().substring(0,10)}class Ft{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!function(){try{return"object"==typeof indexedDB}catch(e){return!1}}()&&new Promise(((e,t)=>{try{let n=!0;const i="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(i);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(i),e(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var e;t((null===(e=s.error)||void 0===e?void 0:e.message)||"")}}catch(n){t(n)}})).then((()=>!0)).catch((()=>!1))}async read(){if(await this._canUseIndexedDBPromise){const e=await async function(e){try{const t=(await At()).transaction(Rt),n=await t.objectStore(Rt).get(Ot(e));return await t.done,n}catch(t){if(t instanceof te)Ye.warn(t.message);else{const e=St.create("idb-get",{originalErrorMessage:null==t?void 0:t.message});Ye.warn(e.message)}}}(this.app);return(null==e?void 0:e.heartbeats)?e:{heartbeats:[]}}return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const n=await this.read();return jt(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var t;if(await this._canUseIndexedDBPromise){const n=await this.read();return jt(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}}}function qt(e){return W(JSON.stringify({version:2,heartbeats:e})).length}var Bt;Bt="",xt(new ge("platform-logger",(e=>new ze(e)),"PRIVATE")),xt(new ge("heartbeat",(e=>new Lt(e)),"PRIVATE")),Pt(Ve,$e,Bt),Pt(Ve,$e,"esm2017"),Pt("fire-js","");var Wt={};const Ut="@firebase/database",Ht="1.0.19";
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
let zt="";
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
class Vt{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){null==t?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),re(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return null==t?null:se(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}
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
 */class $t{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){null==t?delete this.cache_[e]:this.cache_[e]=t}get(e){return ae(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}
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
 */const Yt=function(e){try{if("undefined"!=typeof window&&void 0!==window[e]){const t=window[e];return t.setItem("firebase:sentinel","cache"),t.removeItem("firebase:sentinel"),new Vt(t)}}catch(t){}return new $t},Kt=Yt("localStorage"),Gt=Yt("sessionStorage"),Qt=new Se("@firebase/database"),Jt=function(){let e=1;return function(){return e++}}(),Xt=function(e){const t=function(e){const t=[];let n=0;for(let i=0;i<e.length;i++){let s=e.charCodeAt(i);if(s>=55296&&s<=56319){const t=s-55296;i++,O(i<e.length,"Surrogate pair missing trail surrogate."),s=65536+(t<<10)+(e.charCodeAt(i)-56320)}s<128?t[n++]=s:s<2048?(t[n++]=s>>6|192,t[n++]=63&s|128):s<65536?(t[n++]=s>>12|224,t[n++]=s>>6&63|128,t[n++]=63&s|128):(t[n++]=s>>18|240,t[n++]=s>>12&63|128,t[n++]=s>>6&63|128,t[n++]=63&s|128)}return t}(e),n=new pe;n.update(t);const i=n.digest();return F.encodeByteArray(i)},Zt=function(...e){let t="";for(let n=0;n<e.length;n++){const i=e[n];Array.isArray(i)||i&&"object"==typeof i&&"number"==typeof i.length?t+=Zt.apply(null,i):t+="object"==typeof i?re(i):i,t+=" "}return t};let en=null,tn=!0;const nn=function(...e){if(!0===tn&&(tn=!1,null===en&&!0===Gt.get("logging_enabled")&&(O(!0,"Can't turn on custom loggers persistently."),Qt.logLevel=be.VERBOSE,en=Qt.log.bind(Qt))),en){const t=Zt.apply(null,e);en(t)}},sn=function(e){return function(...t){nn(e,...t)}},rn=function(...e){const t="FIREBASE INTERNAL ERROR: "+Zt(...e);Qt.error(t)},on=function(...e){const t=`FIREBASE FATAL ERROR: ${Zt(...e)}`;throw Qt.error(t),new Error(t)},an=function(...e){const t="FIREBASE WARNING: "+Zt(...e);Qt.warn(t)},ln=function(e){return"number"==typeof e&&(e!=e||e===Number.POSITIVE_INFINITY||e===Number.NEGATIVE_INFINITY)},cn="[MIN_NAME]",hn="[MAX_NAME]",un=function(e,t){if(e===t)return 0;if(e===cn||t===hn)return-1;if(t===cn||e===hn)return 1;{const n=vn(e),i=vn(t);return null!==n?null!==i?n-i===0?e.length-t.length:n-i:-1:null!==i?1:e<t?-1:1}},dn=function(e,t){return e===t?0:e<t?-1:1},pn=function(e,t){if(t&&e in t)return t[e];throw new Error("Missing required key ("+e+") in object: "+re(t))},fn=function(e){if("object"!=typeof e||null===e)return re(e);const t=[];for(const i in e)t.push(i);t.sort();let n="{";for(let i=0;i<t.length;i++)0!==i&&(n+=","),n+=re(t[i]),n+=":",n+=fn(e[t[i]]);return n+="}",n},_n=function(e,t){const n=e.length;if(n<=t)return[e];const i=[];for(let s=0;s<n;s+=t)s+t>n?i.push(e.substring(s,n)):i.push(e.substring(s,s+t));return i};function mn(e,t){for(const n in e)e.hasOwnProperty(n)&&t(n,e[n])}const gn=function(e){O(!ln(e),"Invalid JSON number");const t=1023;let n,i,s,r,o;0===e?(i=0,s=0,n=1/e==-1/0?1:0):(n=e<0,(e=Math.abs(e))>=Math.pow(2,-1022)?(r=Math.min(Math.floor(Math.log(e)/Math.LN2),t),i=r+t,s=Math.round(e*Math.pow(2,52-r)-Math.pow(2,52))):(i=0,s=Math.round(e/Math.pow(2,-1074))));const a=[];for(o=52;o;o-=1)a.push(s%2?1:0),s=Math.floor(s/2);for(o=11;o;o-=1)a.push(i%2?1:0),i=Math.floor(i/2);a.push(n?1:0),a.reverse();const l=a.join("");let c="";for(o=0;o<64;o+=8){let e=parseInt(l.substr(o,8),2).toString(16);1===e.length&&(e="0"+e),c+=e}return c.toLowerCase()};const yn=new RegExp("^-?(0*)\\d{1,10}$"),vn=function(e){if(yn.test(e)){const t=Number(e);if(t>=-2147483648&&t<=2147483647)return t}return null},Cn=function(e){try{e()}catch(t){setTimeout((()=>{const e=t.stack||"";throw an("Exception was thrown by user callback.",e),t}),Math.floor(0))}},bn=function(e,t){const n=setTimeout(e,t);return"number"==typeof n&&"undefined"!=typeof Deno&&Deno.unrefTimer?Deno.unrefTimer(n):"object"==typeof n&&n.unref&&n.unref(),n};
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
class wn{constructor(e,t){var n;this.appCheckProvider=t,this.appName=e.name,null!=(n=e)&&void 0!==n.settings&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.appCheck=null==t?void 0:t.getImmediate({optional:!0}),this.appCheck||null==t||t.get().then((e=>this.appCheck=e))}getToken(e){if(this.serverAppAppCheckToken){if(e)throw new Error("Attempted reuse of `FirebaseServerApp.appCheckToken` after previous usage failed.");return Promise.resolve({token:this.serverAppAppCheckToken})}return this.appCheck?this.appCheck.getToken(e):new Promise(((t,n)=>{setTimeout((()=>{this.appCheck?this.getToken(e).then(t,n):t(null)}),0)}))}addTokenChangeListener(e){var t;null===(t=this.appCheckProvider)||void 0===t||t.get().then((t=>t.addTokenListener(e)))}notifyForInvalidToken(){an(`Provided AppCheck credentials for the app named "${this.appName}" are invalid. This usually indicates your app was not initialized correctly.`)}}
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
 */class In{constructor(e,t,n){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=n,this.auth_=null,this.auth_=n.getImmediate({optional:!0}),this.auth_||n.onInit((e=>this.auth_=e))}getToken(e){return this.auth_?this.auth_.getToken(e).catch((e=>e&&"auth/token-not-initialized"===e.code?(nn("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(e))):new Promise(((t,n)=>{setTimeout((()=>{this.auth_?this.getToken(e).then(t,n):t(null)}),0)}))}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then((t=>t.addAuthTokenListener(e)))}removeTokenChangeListener(e){this.authProvider_.get().then((t=>t.removeAuthTokenListener(e)))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',an(e)}}class Tn{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Tn.OWNER="owner";
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
const En=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,xn="ac",Sn="websocket",kn="long_polling";
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
class Nn{constructor(e,t,n,i,s=!1,r="",o=!1,a=!1,l=null){this.secure=t,this.namespace=n,this.webSocketOnly=i,this.nodeAdmin=s,this.persistenceKey=r,this.includeNamespaceInQueryParams=o,this.isUsingEmulator=a,this.emulatorOptions=l,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Kt.get("host:"+e)||this._host}isCacheableHost(){return"s-"===this.internalHost.substr(0,2)}isCustomHost(){return"firebaseio.com"!==this._domain&&"firebaseio-demo.com"!==this._domain}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Kt.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function Pn(e,t,n){let i;if(O("string"==typeof t,"typeof type must == string"),O("object"==typeof n,"typeof params must == object"),t===Sn)i=(e.secure?"wss://":"ws://")+e.internalHost+"/.ws?";else{if(t!==kn)throw new Error("Unknown connection type: "+t);i=(e.secure?"https://":"http://")+e.internalHost+"/.lp?"}(function(e){return e.host!==e.internalHost||e.isCustomHost()||e.includeNamespaceInQueryParams})(e)&&(n.ns=e.namespace);const s=[];return mn(n,((e,t)=>{s.push(e+"="+t)})),i+s.join("&")}
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
 */class Rn{constructor(){this.counters_={}}incrementCounter(e,t=1){ae(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return H(this.counters_)}}
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
 */const Dn={},An={};function jn(e){const t=e.toString();return Dn[t]||(Dn[t]=new Rn),Dn[t]}
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
class On{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){const e=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let t=0;t<e.length;++t)e[t]&&Cn((()=>{this.onMessage_(e[t])}));if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}
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
 */const Ln="start";class Mn{constructor(e,t,n,i,s,r,o){this.connId=e,this.repoInfo=t,this.applicationId=n,this.appCheckToken=i,this.authToken=s,this.transportSessionId=r,this.lastSessionId=o,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=sn(e),this.stats_=jn(t),this.urlFn=e=>(this.appCheckToken&&(e[xn]=this.appCheckToken),Pn(t,kn,e))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new On(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout((()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null}),Math.floor(3e4)),function(e){if("complete"===document.readyState)e();else{let t=!1;const n=function(){document.body?t||(t=!0,e()):setTimeout(n,Math.floor(10))};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",(()=>{"complete"===document.readyState&&n()})),window.attachEvent("onload",n))}}((()=>{if(this.isClosed_)return;this.scriptTagHolder=new Fn(((...e)=>{const[t,n,i,s,r]=e;if(this.incrementIncomingBytes_(e),this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,t===Ln)this.id=n,this.password=i;else{if("close"!==t)throw new Error("Unrecognized command received: "+t);n?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(n,(()=>{this.onClosed_()}))):this.onClosed_()}}),((...e)=>{const[t,n]=e;this.incrementIncomingBytes_(e),this.myPacketOrderer.handleResponse(t,n)}),(()=>{this.onClosed_()}),this.urlFn);const e={};e[Ln]="t",e.ser=Math.floor(1e8*Math.random()),this.scriptTagHolder.uniqueCallbackIdentifier&&(e.cb=this.scriptTagHolder.uniqueCallbackIdentifier),e.v="5",this.transportSessionId&&(e.s=this.transportSessionId),this.lastSessionId&&(e.ls=this.lastSessionId),this.applicationId&&(e.p=this.applicationId),this.appCheckToken&&(e[xn]=this.appCheckToken),"undefined"!=typeof location&&location.hostname&&En.test(location.hostname)&&(e.r="f");const t=this.urlFn(e);this.log_("Connecting via long-poll to "+t),this.scriptTagHolder.addTag(t,(()=>{}))}))}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Mn.forceAllow_=!0}static forceDisallow(){Mn.forceDisallow_=!0}static isAvailable(){return!!Mn.forceAllow_||!(Mn.forceDisallow_||"undefined"==typeof document||null==document.createElement||"object"==typeof window&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href)||"object"==typeof Windows&&"object"==typeof Windows.UI)}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=re(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const n=B(t),i=_n(n,1840);for(let s=0;s<i.length;s++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[s]),this.curSegmentNum++}addDisconnectPingFrame(e,t){this.myDisconnFrame=document.createElement("iframe");const n={dframe:"t"};n.id=e,n.pw=t,this.myDisconnFrame.src=this.urlFn(n),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=re(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class Fn{constructor(e,t,n,i){this.onDisconnect=n,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(1e8*Math.random()),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=Jt(),window["pLPCommand"+this.uniqueCallbackIdentifier]=e,window["pRTLPCB"+this.uniqueCallbackIdentifier]=t,this.myIFrame=Fn.createIFrame_();let n="";if(this.myIFrame.src&&"javascript:"===this.myIFrame.src.substr(0,11)){n='<script>document.domain="'+document.domain+'";<\/script>'}const i="<html><body>"+n+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(i),this.myIFrame.doc.close()}catch(s){nn("frame writing exception"),s.stack&&nn(s.stack),nn(s)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",!document.body)throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";document.body.appendChild(e);try{e.contentWindow.document||nn("No IE domain setting required")}catch(t){const n=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+n+"';document.close();})())"}return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout((()=>{null!==this.myIFrame&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)}),Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e.id=this.myID,e.pw=this.myPW,e.ser=this.currentSerial;let t=this.urlFn(e),n="",i=0;for(;this.pendingSegs.length>0;){if(!(this.pendingSegs[0].d.length+30+n.length<=1870))break;{const e=this.pendingSegs.shift();n=n+"&seg"+i+"="+e.seg+"&ts"+i+"="+e.ts+"&d"+i+"="+e.d,i++}}return t+=n,this.addLongPollTag_(t,this.currentSerial),!0}return!1}enqueueSegment(e,t,n){this.pendingSegs.push({seg:e,ts:t,d:n}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const n=()=>{this.outstandingRequests.delete(t),this.newRequest_()},i=setTimeout(n,Math.floor(25e3));this.addTag(e,(()=>{clearTimeout(i),n()}))}addTag(e,t){setTimeout((()=>{try{if(!this.sendNewPolls)return;const n=this.myIFrame.doc.createElement("script");n.type="text/javascript",n.async=!0,n.src=e,n.onload=n.onreadystatechange=function(){const e=n.readyState;e&&"loaded"!==e&&"complete"!==e||(n.onload=n.onreadystatechange=null,n.parentNode&&n.parentNode.removeChild(n),t())},n.onerror=()=>{nn("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(n)}catch(n){}}),Math.floor(1))}}
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
 */let qn=null;"undefined"!=typeof MozWebSocket?qn=MozWebSocket:"undefined"!=typeof WebSocket&&(qn=WebSocket);class Bn{constructor(e,t,n,i,s,r,o){this.connId=e,this.applicationId=n,this.appCheckToken=i,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=sn(this.connId),this.stats_=jn(t),this.connURL=Bn.connectionURL_(t,r,o,i,n),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,n,i,s){const r={v:"5"};return"undefined"!=typeof location&&location.hostname&&En.test(location.hostname)&&(r.r="f"),t&&(r.s=t),n&&(r.ls=n),i&&(r[xn]=i),s&&(r.p=s),Pn(e,Sn,r)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Kt.set("previous_websocket_failure",!0);try{let e;this.mySock=new qn(this.connURL,[],e)}catch(n){this.log_("Error instantiating WebSocket.");const e=n.message||n.data;return e&&this.log_(e),void this.onClosed_()}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=e=>{this.handleIncomingFrame(e)},this.mySock.onerror=e=>{this.log_("WebSocket error.  Closing connection.");const t=e.message||e.data;t&&this.log_(t),this.onClosed_()}}start(){}static forceDisallow(){Bn.forceDisallow_=!0}static isAvailable(){let e=!1;if("undefined"!=typeof navigator&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,n=navigator.userAgent.match(t);n&&n.length>1&&parseFloat(n[1])<4.4&&(e=!0)}return!e&&null!==qn&&!Bn.forceDisallow_}static previouslyFailed(){return Kt.isInMemoryStorage||!0===Kt.get("previous_websocket_failure")}markConnectionHealthy(){Kt.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const e=this.frames.join("");this.frames=null;const t=se(e);this.onMessage(t)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(O(null===this.frames,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(null===this.mySock)return;const t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),null!==this.frames)this.appendFrame_(t);else{const e=this.extractFrameCount_(t);null!==e&&this.appendFrame_(e)}}send(e){this.resetKeepAlive();const t=re(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const n=_n(t,16384);n.length>1&&this.sendString_(String(n.length));for(let i=0;i<n.length;i++)this.sendString_(n[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval((()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()}),Math.floor(45e3))}sendString_(e){try{this.mySock.send(e)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Bn.responsesRequiredToBeHealthy=2,Bn.healthyTimeout=3e4;
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
class Wn{static get ALL_TRANSPORTS(){return[Mn,Bn]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){const t=Bn&&Bn.isAvailable();let n=t&&!Bn.previouslyFailed();if(e.webSocketOnly&&(t||an("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),n=!0),n)this.transports_=[Bn];else{const e=this.transports_=[];for(const t of Wn.ALL_TRANSPORTS)t&&t.isAvailable()&&e.push(t);Wn.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Wn.globalTransportInitialized_=!1;class Un{constructor(e,t,n,i,s,r,o,a,l,c){this.id=e,this.repoInfo_=t,this.applicationId_=n,this.appCheckToken_=i,this.authToken_=s,this.onMessage_=r,this.onReady_=o,this.onDisconnect_=a,this.onKill_=l,this.lastSessionId=c,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=sn("c:"+this.id+":"),this.transportManager_=new Wn(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.conn_),n=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout((()=>{this.conn_&&this.conn_.open(t,n)}),Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=bn((()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>102400?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>10240?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))}),Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{2!==this.state_&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if("t"in e){const t=e.t;"a"===t?this.upgradeIfSecondaryHealthy_():"r"===t?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),this.tx_!==this.secondaryConn_&&this.rx_!==this.secondaryConn_||this.close()):"o"===t&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=pn("t",e),n=pn("d",e);if("c"===t)this.onSecondaryControl_(n);else{if("d"!==t)throw new Error("Unknown protocol layer: "+t);this.pendingDataMessages.push(n)}}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:"p",d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:"a",d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:"n",d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=pn("t",e),n=pn("d",e);"c"===t?this.onControl_(n):"d"===t&&this.onDataMessage_(n)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=pn("t",e);if("d"in e){const n=e.d;if("h"===t){const e=Object.assign({},n);this.repoInfo_.isUsingEmulator&&(e.h=this.repoInfo_.host),this.onHandshake_(e)}else if("n"===t){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let e=0;e<this.pendingDataMessages.length;++e)this.onDataMessage_(this.pendingDataMessages[e]);this.pendingDataMessages=[],this.tryCleanupConnection()}else"s"===t?this.onConnectionShutdown_(n):"r"===t?this.onReset_(n):"e"===t?rn("Server Error: "+n):"o"===t?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):rn("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,n=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,0===this.state_&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),"5"!==n&&an("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.secondaryConn_),n=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,n),bn((()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())}),Math.floor(6e4))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,1===this.state_?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),0===this.primaryResponsesRequired_?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):bn((()=>{this.sendPingOnPrimaryIfNecessary_()}),Math.floor(5e3))}sendPingOnPrimaryIfNecessary_(){this.isHealthy_||1!==this.state_||(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:"p",d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,this.tx_!==e&&this.rx_!==e||this.close()}onConnectionLost_(e){this.conn_=null,e||0!==this.state_?1===this.state_&&this.log_("Realtime connection lost."):(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Kt.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(1!==this.state_)throw"Connection is not connected";this.tx_.send(e)}close(){2!==this.state_&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}
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
 */class Hn{put(e,t,n,i){}merge(e,t,n,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,n){}onDisconnectMerge(e,t,n){}onDisconnectCancel(e,t){}reportStats(e){}}
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
 */class zn{constructor(e){this.allowedEvents_=e,this.listeners_={},O(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const n=[...this.listeners_[e]];for(let e=0;e<n.length;e++)n[e].callback.apply(n[e].context,t)}}on(e,t,n){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:n});const i=this.getInitialEvent(e);i&&t.apply(n,i)}off(e,t,n){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let s=0;s<i.length;s++)if(i[s].callback===t&&(!n||n===i[s].context))return void i.splice(s,1)}validateEventType_(e){O(this.allowedEvents_.find((t=>t===e)),"Unknown event: "+e)}}
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
 */class Vn extends zn{static getInstance(){return new Vn}constructor(){super(["online"]),this.online_=!0,"undefined"==typeof window||void 0===window.addEventListener||ee()||(window.addEventListener("online",(()=>{this.online_||(this.online_=!0,this.trigger("online",!0))}),!1),window.addEventListener("offline",(()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))}),!1))}getInitialEvent(e){return O("online"===e,"Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}
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
 */class $n{constructor(e,t){if(void 0===t){this.pieces_=e.split("/");let t=0;for(let e=0;e<this.pieces_.length;e++)this.pieces_[e].length>0&&(this.pieces_[t]=this.pieces_[e],t++);this.pieces_.length=t,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)""!==this.pieces_[t]&&(e+="/"+this.pieces_[t]);return e||"/"}}function Yn(){return new $n("")}function Kn(e){return e.pieceNum_>=e.pieces_.length?null:e.pieces_[e.pieceNum_]}function Gn(e){return e.pieces_.length-e.pieceNum_}function Qn(e){let t=e.pieceNum_;return t<e.pieces_.length&&t++,new $n(e.pieces_,t)}function Jn(e){return e.pieceNum_<e.pieces_.length?e.pieces_[e.pieces_.length-1]:null}function Xn(e,t=0){return e.pieces_.slice(e.pieceNum_+t)}function Zn(e){if(e.pieceNum_>=e.pieces_.length)return null;const t=[];for(let n=e.pieceNum_;n<e.pieces_.length-1;n++)t.push(e.pieces_[n]);return new $n(t,0)}function ei(e,t){const n=[];for(let i=e.pieceNum_;i<e.pieces_.length;i++)n.push(e.pieces_[i]);if(t instanceof $n)for(let i=t.pieceNum_;i<t.pieces_.length;i++)n.push(t.pieces_[i]);else{const e=t.split("/");for(let t=0;t<e.length;t++)e[t].length>0&&n.push(e[t])}return new $n(n,0)}function ti(e){return e.pieceNum_>=e.pieces_.length}function ni(e,t){const n=Kn(e),i=Kn(t);if(null===n)return t;if(n===i)return ni(Qn(e),Qn(t));throw new Error("INTERNAL ERROR: innerPath ("+t+") is not within outerPath ("+e+")")}function ii(e,t){if(Gn(e)!==Gn(t))return!1;for(let n=e.pieceNum_,i=t.pieceNum_;n<=e.pieces_.length;n++,i++)if(e.pieces_[n]!==t.pieces_[i])return!1;return!0}function si(e,t){let n=e.pieceNum_,i=t.pieceNum_;if(Gn(e)>Gn(t))return!1;for(;n<e.pieces_.length;){if(e.pieces_[n]!==t.pieces_[i])return!1;++n,++i}return!0}class ri{constructor(e,t){this.errorPrefix_=t,this.parts_=Xn(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let n=0;n<this.parts_.length;n++)this.byteLength_+=_e(this.parts_[n]);oi(this)}}function oi(e){if(e.byteLength_>768)throw new Error(e.errorPrefix_+"has a key path longer than 768 bytes ("+e.byteLength_+").");if(e.parts_.length>32)throw new Error(e.errorPrefix_+"path specified exceeds the maximum depth that can be written (32) or object contains a cycle "+ai(e))}function ai(e){return 0===e.parts_.length?"":"in property '"+e.parts_.join(".")+"'"}
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
 */class li extends zn{static getInstance(){return new li}constructor(){let e,t;super(["visible"]),"undefined"!=typeof document&&void 0!==document.addEventListener&&(void 0!==document.hidden?(t="visibilitychange",e="hidden"):void 0!==document.mozHidden?(t="mozvisibilitychange",e="mozHidden"):void 0!==document.msHidden?(t="msvisibilitychange",e="msHidden"):void 0!==document.webkitHidden&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,(()=>{const t=!document[e];t!==this.visible_&&(this.visible_=t,this.trigger("visible",t))}),!1)}getInitialEvent(e){return O("visible"===e,"Unknown event type: "+e),[this.visible_]}}
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
 */const ci=1e3;class hi extends Hn{constructor(e,t,n,i,s,r,o,a){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=n,this.onConnectStatus_=i,this.onServerInfoUpdate_=s,this.authTokenProvider_=r,this.appCheckTokenProvider_=o,this.authOverride_=a,this.id=hi.nextPersistentConnectionId_++,this.log_=sn("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=ci,this.maxReconnectDelay_=3e5,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,a)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");li.getInstance().on("visible",this.onVisible_,this),-1===e.host.indexOf("fblocal")&&Vn.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,n){const i=++this.requestNumber_,s={r:i,a:e,b:t};this.log_(re(s)),O(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),n&&(this.requestCBHash_[i]=n)}get(e){this.initConnection_();const t=new G,n={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:e=>{const n=e.d;"ok"===e.s?t.resolve(n):t.reject(n)}};this.outstandingGets_.push(n),this.outstandingGetCount_++;const i=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(i),t.promise}listen(e,t,n,i){this.initConnection_();const s=e._queryIdentifier,r=e._path.toString();this.log_("Listen called for "+r+" "+s),this.listens.has(r)||this.listens.set(r,new Map),O(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),O(!this.listens.get(r).has(s),"listen() called twice for same path/queryId.");const o={onComplete:i,hashFn:t,query:e,tag:n};this.listens.get(r).set(s,o),this.connected_&&this.sendListen_(o)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,(n=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,0===this.outstandingGetCount_&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(n)}))}sendListen_(e){const t=e.query,n=t._path.toString(),i=t._queryIdentifier;this.log_("Listen on "+n+" for "+i);const s={p:n};e.tag&&(s.q=t._queryObject,s.t=e.tag),s.h=e.hashFn(),this.sendRequest("q",s,(s=>{const r=s.d,o=s.s;hi.warnOnListenWarnings_(r,t);(this.listens.get(n)&&this.listens.get(n).get(i))===e&&(this.log_("listen response",s),"ok"!==o&&this.removeListen_(n,i),e.onComplete&&e.onComplete(o,r))}))}static warnOnListenWarnings_(e,t){if(e&&"object"==typeof e&&ae(e,"w")){const n=le(e,"w");if(Array.isArray(n)&&~n.indexOf("no_index")){const e='".indexOn": "'+t._queryParams.getIndex().toString()+'"',n=t._path.toString();an(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${e} at ${n} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},(()=>{})),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&40===e.length||function(e){const t=oe(e).claims;return"object"==typeof t&&!0===t.admin}(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=3e4)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},(()=>{}))}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=function(e){const t=oe(e).claims;return!!t&&"object"==typeof t&&t.hasOwnProperty("iat")}(e)?"auth":"gauth",n={cred:e};null===this.authOverride_?n.noauth=!0:"object"==typeof this.authOverride_&&(n.authvar=this.authOverride_),this.sendRequest(t,n,(t=>{const n=t.s,i=t.d||"error";this.authToken_===e&&("ok"===n?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(n,i))}))}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},(e=>{const t=e.s,n=e.d||"error";"ok"===t?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,n)}))}unlisten(e,t){const n=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+n+" "+i),O(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query");this.removeListen_(n,i)&&this.connected_&&this.sendUnlisten_(n,i,e._queryObject,t)}sendUnlisten_(e,t,n,i){this.log_("Unlisten on "+e+" for "+t);const s={p:e};i&&(s.q=n,s.t=i),this.sendRequest("n",s)}onDisconnectPut(e,t,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:n})}onDisconnectMerge(e,t,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:n})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,n,i){const s={p:t,d:n};this.log_("onDisconnect "+e,s),this.sendRequest(e,s,(e=>{i&&setTimeout((()=>{i(e.s,e.d)}),Math.floor(0))}))}put(e,t,n,i){this.putInternal("p",e,t,n,i)}merge(e,t,n,i){this.putInternal("m",e,t,n,i)}putInternal(e,t,n,i,s){this.initConnection_();const r={p:t,d:n};void 0!==s&&(r.h=s),this.outstandingPuts_.push({action:e,request:r,onComplete:i}),this.outstandingPutCount_++;const o=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(o):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,n=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,n,(n=>{this.log_(t+" response",n),delete this.outstandingPuts_[e],this.outstandingPutCount_--,0===this.outstandingPutCount_&&(this.outstandingPuts_=[]),i&&i(n.s,n.d)}))}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,(e=>{if("ok"!==e.s){const t=e.d;this.log_("reportStats","Error sending stats: "+t)}}))}}onDataMessage_(e){if("r"in e){this.log_("from server: "+re(e));const t=e.r,n=this.requestCBHash_[t];n&&(delete this.requestCBHash_[t],n(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),"d"===e?this.onDataUpdate_(t.p,t.d,!1,t.t):"m"===e?this.onDataUpdate_(t.p,t.d,!0,t.t):"c"===e?this.onListenRevoked_(t.p,t.q):"ac"===e?this.onAuthRevoked_(t.s,t.d):"apc"===e?this.onAppCheckRevoked_(t.s,t.d):"sd"===e?this.onSecurityDebugPacket_(t):rn("Unrecognized action received from server: "+re(e)+"\nAre you using the latest client?")}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=(new Date).getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){O(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout((()=>{this.establishConnectionTimer_=null,this.establishConnection_()}),Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=ci,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=ci,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){if(this.visible_){if(this.lastConnectionEstablishedTime_){(new Date).getTime()-this.lastConnectionEstablishedTime_>3e4&&(this.reconnectDelay_=ci),this.lastConnectionEstablishedTime_=null}}else this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=(new Date).getTime();const e=Math.max(0,(new Date).getTime()-this.lastConnectionAttemptTime_);let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,1.3*this.reconnectDelay_)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=(new Date).getTime(),this.lastConnectionEstablishedTime_=null;const t=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),i=this.onRealtimeDisconnect_.bind(this),s=this.id+":"+hi.nextConnectionId_++,r=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,i())},c=function(e){O(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(e)};this.realtime_={close:l,sendRequest:c};const h=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[e,l]=await Promise.all([this.authTokenProvider_.getToken(h),this.appCheckTokenProvider_.getToken(h)]);o?nn("getToken() completed but was canceled"):(nn("getToken() completed. Creating connection."),this.authToken_=e&&e.accessToken,this.appCheckToken_=l&&l.token,a=new Un(s,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,t,n,i,(e=>{an(e+" ("+this.repoInfo_.toString()+")"),this.interrupt("server_kill")}),r))}catch(e){this.log_("Failed to get token: "+e),o||(this.repoInfo_.nodeAdmin&&an(e),l())}}}interrupt(e){nn("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){nn("Resuming connection for reason: "+e),delete this.interruptReasons_[e],ce(this.interruptReasons_)&&(this.reconnectDelay_=ci,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-(new Date).getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}0===this.outstandingPutCount_&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let n;n=t?t.map((e=>fn(e))).join("$"):"default";const i=this.removeListen_(e,n);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,t){const n=new $n(e).toString();let i;if(this.listens.has(n)){const e=this.listens.get(n);i=e.get(t),e.delete(t),0===e.size&&this.listens.delete(n)}else i=void 0;return i}onAuthRevoked_(e,t){nn("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),"invalid_token"!==e&&"permission_denied"!==e||(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=3&&(this.reconnectDelay_=3e4,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){nn("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,"invalid_token"!==e&&"permission_denied"!==e||(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=3&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace("\n","\nFIREBASE: "))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};e["sdk.js."+zt.replace(/\./g,"-")]=1,ee()?e["framework.cordova"]=1:"object"==typeof navigator&&"ReactNative"===navigator.product&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Vn.getInstance().currentlyOnline();return ce(this.interruptReasons_)&&e}}hi.nextPersistentConnectionId_=0,hi.nextConnectionId_=0;
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
class ui{constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new ui(e,t)}}
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
 */class di{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const n=new ui(cn,e),i=new ui(cn,t);return 0!==this.compare(n,i)}minPost(){return ui.MIN}}
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
 */let pi;class fi extends di{static get __EMPTY_NODE(){return pi}static set __EMPTY_NODE(e){pi=e}compare(e,t){return un(e.name,t.name)}isDefinedOn(e){throw L("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return ui.MIN}maxPost(){return new ui(hn,pi)}makePost(e,t){return O("string"==typeof e,"KeyIndex indexValue must always be a string."),new ui(e,pi)}toString(){return".key"}}const _i=new fi;
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
 */class mi{constructor(e,t,n,i,s=null){this.isReverse_=i,this.resultGenerator_=s,this.nodeStack_=[];let r=1;for(;!e.isEmpty();)if(r=t?n(e.key,t):1,i&&(r*=-1),r<0)e=this.isReverse_?e.left:e.right;else{if(0===r){this.nodeStack_.push(e);break}this.nodeStack_.push(e),e=this.isReverse_?e.right:e.left}}getNext(){if(0===this.nodeStack_.length)return null;let e,t=this.nodeStack_.pop();if(e=this.resultGenerator_?this.resultGenerator_(t.key,t.value):{key:t.key,value:t.value},this.isReverse_)for(t=t.left;!t.isEmpty();)this.nodeStack_.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack_.push(t),t=t.left;return e}hasNext(){return this.nodeStack_.length>0}peek(){if(0===this.nodeStack_.length)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class gi{constructor(e,t,n,i,s){this.key=e,this.value=t,this.color=null!=n?n:gi.RED,this.left=null!=i?i:yi.EMPTY_NODE,this.right=null!=s?s:yi.EMPTY_NODE}copy(e,t,n,i,s){return new gi(null!=e?e:this.key,null!=t?t:this.value,null!=n?n:this.color,null!=i?i:this.left,null!=s?s:this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let i=this;const s=n(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,t,n),null):0===s?i.copy(null,t,null,null,null):i.copy(null,null,null,null,i.right.insert(e,t,n)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return yi.EMPTY_NODE;let e=this;return e.left.isRed_()||e.left.left.isRed_()||(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let n,i;if(n=this,t(e,n.key)<0)n.left.isEmpty()||n.left.isRed_()||n.left.left.isRed_()||(n=n.moveRedLeft_()),n=n.copy(null,null,null,n.left.remove(e,t),null);else{if(n.left.isRed_()&&(n=n.rotateRight_()),n.right.isEmpty()||n.right.isRed_()||n.right.left.isRed_()||(n=n.moveRedRight_()),0===t(e,n.key)){if(n.right.isEmpty())return yi.EMPTY_NODE;i=n.right.min_(),n=n.copy(i.key,i.value,null,null,n.right.removeMin_())}n=n.copy(null,null,null,null,n.right.remove(e,t))}return n.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,gi.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,gi.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}gi.RED=!0,gi.BLACK=!1;class yi{constructor(e,t=yi.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new yi(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,gi.BLACK,null,null))}remove(e){return new yi(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,gi.BLACK,null,null))}get(e){let t,n=this.root_;for(;!n.isEmpty();){if(t=this.comparator_(e,n.key),0===t)return n.value;t<0?n=n.left:t>0&&(n=n.right)}return null}getPredecessorKey(e){let t,n=this.root_,i=null;for(;!n.isEmpty();){if(t=this.comparator_(e,n.key),0===t){if(n.left.isEmpty())return i?i.key:null;for(n=n.left;!n.right.isEmpty();)n=n.right;return n.key}t<0?n=n.left:t>0&&(i=n,n=n.right)}throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new mi(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new mi(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new mi(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new mi(this.root_,null,this.comparator_,!0,e)}}
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
function vi(e,t){return un(e.name,t.name)}function Ci(e,t){return un(e,t)}
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
 */let bi;yi.EMPTY_NODE=new class{copy(e,t,n,i,s){return this}insert(e,t,n){return new gi(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}};const wi=function(e){return"number"==typeof e?"number:"+gn(e):"string:"+e},Ii=function(e){if(e.isLeafNode()){const t=e.val();O("string"==typeof t||"number"==typeof t||"object"==typeof t&&ae(t,".sv"),"Priority must be a string or number.")}else O(e===bi||e.isEmpty(),"priority of unexpected type.");O(e===bi||e.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};
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
let Ti,Ei,xi;class Si{static set __childrenNodeConstructor(e){Ti=e}static get __childrenNodeConstructor(){return Ti}constructor(e,t=Si.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,O(void 0!==this.value_&&null!==this.value_,"LeafNode shouldn't be created with null/undefined value."),Ii(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Si(this.value_,e)}getImmediateChild(e){return".priority"===e?this.priorityNode_:Si.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return ti(e)?this:".priority"===Kn(e)?this.priorityNode_:Si.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return".priority"===e?this.updatePriority(t):t.isEmpty()&&".priority"!==e?this:Si.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const n=Kn(e);return null===n?t:t.isEmpty()&&".priority"!==n?this:(O(".priority"!==n||1===Gn(e),".priority must be the last token in a path"),this.updateImmediateChild(n,Si.__childrenNodeConstructor.EMPTY_NODE.updateChild(Qn(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(null===this.lazyHash_){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+wi(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",e+="number"===t?gn(this.value_):this.value_,this.lazyHash_=Xt(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Si.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Si.__childrenNodeConstructor?-1:(O(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,n=typeof this.value_,i=Si.VALUE_TYPE_ORDER.indexOf(t),s=Si.VALUE_TYPE_ORDER.indexOf(n);return O(i>=0,"Unknown leaf type: "+t),O(s>=0,"Unknown leaf type: "+n),i===s?"object"===n?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:s-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}return!1}}Si.VALUE_TYPE_ORDER=["object","boolean","number","string"];const ki=new class extends di{compare(e,t){const n=e.node.getPriority(),i=t.node.getPriority(),s=n.compareTo(i);return 0===s?un(e.name,t.name):s}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return ui.MIN}maxPost(){return new ui(hn,new Si("[PRIORITY-POST]",xi))}makePost(e,t){const n=Ei(e);return new ui(t,new Si("[PRIORITY-POST]",n))}toString(){return".priority"}},Ni=Math.log(2);
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
 */class Pi{constructor(e){var t;this.count=(t=e+1,parseInt(Math.log(t)/Ni,10)),this.current_=this.count-1;const n=(i=this.count,parseInt(Array(i+1).join("1"),2));var i;this.bits_=e+1&n}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Ri=function(e,t,n,i){e.sort(t);const s=function(t,i){const r=i-t;let o,a;if(0===r)return null;if(1===r)return o=e[t],a=n?n(o):o,new gi(a,o.node,gi.BLACK,null,null);{const l=parseInt(r/2,10)+t,c=s(t,l),h=s(l+1,i);return o=e[l],a=n?n(o):o,new gi(a,o.node,gi.BLACK,c,h)}},r=function(t){let i=null,r=null,o=e.length;const a=function(t,i){const r=o-t,a=o;o-=t;const c=s(r+1,a),h=e[r],u=n?n(h):h;l(new gi(u,h.node,i,null,c))},l=function(e){i?(i.left=e,i=e):(r=e,i=e)};for(let e=0;e<t.count;++e){const n=t.nextBitIsOne(),i=Math.pow(2,t.count-(e+1));n?a(i,gi.BLACK):(a(i,gi.BLACK),a(i,gi.RED))}return r}(new Pi(e.length));return new yi(i||t,r)};
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
 */let Di;const Ai={};class ji{static get Default(){return O(Ai&&ki,"ChildrenNode.ts has not been loaded"),Di=Di||new ji({".priority":Ai},{".priority":ki}),Di}constructor(e,t){this.indexes_=e,this.indexSet_=t}get(e){const t=le(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof yi?t:null}hasIndex(e){return ae(this.indexSet_,e.toString())}addIndex(e,t){O(e!==_i,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const n=[];let i=!1;const s=t.getIterator(ui.Wrap);let r,o=s.getNext();for(;o;)i=i||e.isDefinedOn(o.node),n.push(o),o=s.getNext();r=i?Ri(n,e.getCompare()):Ai;const a=e.toString(),l=Object.assign({},this.indexSet_);l[a]=e;const c=Object.assign({},this.indexes_);return c[a]=r,new ji(c,l)}addToIndexes(e,t){const n=he(this.indexes_,((n,i)=>{const s=le(this.indexSet_,i);if(O(s,"Missing index implementation for "+i),n===Ai){if(s.isDefinedOn(e.node)){const n=[],i=t.getIterator(ui.Wrap);let r=i.getNext();for(;r;)r.name!==e.name&&n.push(r),r=i.getNext();return n.push(e),Ri(n,s.getCompare())}return Ai}{const i=t.get(e.name);let s=n;return i&&(s=s.remove(new ui(e.name,i))),s.insert(e,e.node)}}));return new ji(n,this.indexSet_)}removeFromIndexes(e,t){const n=he(this.indexes_,(n=>{if(n===Ai)return n;{const i=t.get(e.name);return i?n.remove(new ui(e.name,i)):n}}));return new ji(n,this.indexSet_)}}
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
 */let Oi;class Li{static get EMPTY_NODE(){return Oi||(Oi=new Li(new yi(Ci),null,ji.Default))}constructor(e,t,n){this.children_=e,this.priorityNode_=t,this.indexMap_=n,this.lazyHash_=null,this.priorityNode_&&Ii(this.priorityNode_),this.children_.isEmpty()&&O(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Oi}updatePriority(e){return this.children_.isEmpty()?this:new Li(this.children_,e,this.indexMap_)}getImmediateChild(e){if(".priority"===e)return this.getPriority();{const t=this.children_.get(e);return null===t?Oi:t}}getChild(e){const t=Kn(e);return null===t?this:this.getImmediateChild(t).getChild(Qn(e))}hasChild(e){return null!==this.children_.get(e)}updateImmediateChild(e,t){if(O(t,"We should always be passing snapshot nodes"),".priority"===e)return this.updatePriority(t);{const n=new ui(e,t);let i,s;t.isEmpty()?(i=this.children_.remove(e),s=this.indexMap_.removeFromIndexes(n,this.children_)):(i=this.children_.insert(e,t),s=this.indexMap_.addToIndexes(n,this.children_));const r=i.isEmpty()?Oi:this.priorityNode_;return new Li(i,r,s)}}updateChild(e,t){const n=Kn(e);if(null===n)return t;{O(".priority"!==Kn(e)||1===Gn(e),".priority must be the last token in a path");const i=this.getImmediateChild(n).updateChild(Qn(e),t);return this.updateImmediateChild(n,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let n=0,i=0,s=!0;if(this.forEachChild(ki,((r,o)=>{t[r]=o.val(e),n++,s&&Li.INTEGER_REGEXP_.test(r)?i=Math.max(i,Number(r)):s=!1})),!e&&s&&i<2*n){const e=[];for(const n in t)e[n]=t[n];return e}return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(null===this.lazyHash_){let e="";this.getPriority().isEmpty()||(e+="priority:"+wi(this.getPriority().val())+":"),this.forEachChild(ki,((t,n)=>{const i=n.hash();""!==i&&(e+=":"+t+":"+i)})),this.lazyHash_=""===e?"":Xt(e)}return this.lazyHash_}getPredecessorChildName(e,t,n){const i=this.resolveIndex_(n);if(i){const n=i.getPredecessorKey(new ui(e,t));return n?n.name:null}return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const e=t.minKey();return e&&e.name}return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new ui(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const e=t.maxKey();return e&&e.name}return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new ui(t,this.children_.get(t)):null}forEachChild(e,t){const n=this.resolveIndex_(e);return n?n.inorderTraversal((e=>t(e.name,e.node))):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const n=this.resolveIndex_(t);if(n)return n.getIteratorFrom(e,(e=>e));{const n=this.children_.getIteratorFrom(e.name,ui.Wrap);let i=n.peek();for(;null!=i&&t.compare(i,e)<0;)n.getNext(),i=n.peek();return n}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const n=this.resolveIndex_(t);if(n)return n.getReverseIteratorFrom(e,(e=>e));{const n=this.children_.getReverseIteratorFrom(e.name,ui.Wrap);let i=n.peek();for(;null!=i&&t.compare(i,e)>0;)n.getNext(),i=n.peek();return n}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Mi?-1:0}withIndex(e){if(e===_i||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new Li(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===_i||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority())){if(this.children_.count()===t.children_.count()){const e=this.getIterator(ki),n=t.getIterator(ki);let i=e.getNext(),s=n.getNext();for(;i&&s;){if(i.name!==s.name||!i.node.equals(s.node))return!1;i=e.getNext(),s=n.getNext()}return null===i&&null===s}return!1}return!1}}resolveIndex_(e){return e===_i?null:this.indexMap_.get(e.toString())}}Li.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;const Mi=new class extends Li{constructor(){super(new yi(Ci),Li.EMPTY_NODE,ji.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return Li.EMPTY_NODE}isEmpty(){return!1}};Object.defineProperties(ui,{MIN:{value:new ui(cn,Li.EMPTY_NODE)},MAX:{value:new ui(hn,Mi)}}),fi.__EMPTY_NODE=Li.EMPTY_NODE,Si.__childrenNodeConstructor=Li,bi=Mi,function(e){xi=e}(Mi);function Fi(e,t=null){if(null===e)return Li.EMPTY_NODE;if("object"==typeof e&&".priority"in e&&(t=e[".priority"]),O(null===t||"string"==typeof t||"number"==typeof t||"object"==typeof t&&".sv"in t,"Invalid priority type found: "+typeof t),"object"==typeof e&&".value"in e&&null!==e[".value"]&&(e=e[".value"]),"object"!=typeof e||".sv"in e){return new Si(e,Fi(t))}if(e instanceof Array){let n=Li.EMPTY_NODE;return mn(e,((t,i)=>{if(ae(e,t)&&"."!==t.substring(0,1)){const e=Fi(i);!e.isLeafNode()&&e.isEmpty()||(n=n.updateImmediateChild(t,e))}})),n.updatePriority(Fi(t))}{const n=[];let i=!1;if(mn(e,((e,t)=>{if("."!==e.substring(0,1)){const s=Fi(t);s.isEmpty()||(i=i||!s.getPriority().isEmpty(),n.push(new ui(e,s)))}})),0===n.length)return Li.EMPTY_NODE;const s=Ri(n,vi,(e=>e.name),Ci);if(i){const e=Ri(n,ki.getCompare());return new Li(s,Fi(t),new ji({".priority":e},{".priority":ki}))}return new Li(s,Fi(t),ji.Default)}}!function(e){Ei=e}(Fi);
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
class qi extends di{constructor(e){super(),this.indexPath_=e,O(!ti(e)&&".priority"!==Kn(e),"Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const n=this.extractChild(e.node),i=this.extractChild(t.node),s=n.compareTo(i);return 0===s?un(e.name,t.name):s}makePost(e,t){const n=Fi(e),i=Li.EMPTY_NODE.updateChild(this.indexPath_,n);return new ui(t,i)}maxPost(){const e=Li.EMPTY_NODE.updateChild(this.indexPath_,Mi);return new ui(hn,e)}toString(){return Xn(this.indexPath_,0).join("/")}}
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
 */const Bi=new class extends di{compare(e,t){const n=e.node.compareTo(t.node);return 0===n?un(e.name,t.name):n}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return ui.MIN}maxPost(){return ui.MAX}makePost(e,t){const n=Fi(e);return new ui(t,n)}toString(){return".value"}};
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
 */function Wi(e){return{type:"value",snapshotNode:e}}function Ui(e,t){return{type:"child_added",snapshotNode:t,childName:e}}function Hi(e,t){return{type:"child_removed",snapshotNode:t,childName:e}}function zi(e,t,n){return{type:"child_changed",snapshotNode:t,childName:e,oldSnap:n}}
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
class Vi{constructor(e){this.index_=e}updateChild(e,t,n,i,s,r){O(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const o=e.getImmediateChild(t);return o.getChild(i).equals(n.getChild(i))&&o.isEmpty()===n.isEmpty()?e:(null!=r&&(n.isEmpty()?e.hasChild(t)?r.trackChildChange(Hi(t,o)):O(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):o.isEmpty()?r.trackChildChange(Ui(t,n)):r.trackChildChange(zi(t,n,o))),e.isLeafNode()&&n.isEmpty()?e:e.updateImmediateChild(t,n).withIndex(this.index_))}updateFullNode(e,t,n){return null!=n&&(e.isLeafNode()||e.forEachChild(ki,((e,i)=>{t.hasChild(e)||n.trackChildChange(Hi(e,i))})),t.isLeafNode()||t.forEachChild(ki,((t,i)=>{if(e.hasChild(t)){const s=e.getImmediateChild(t);s.equals(i)||n.trackChildChange(zi(t,i,s))}else n.trackChildChange(Ui(t,i))}))),t.withIndex(this.index_)}updatePriority(e,t){return e.isEmpty()?Li.EMPTY_NODE:e.updatePriority(t)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}
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
 */class $i{constructor(e){this.indexedFilter_=new Vi(e.getIndex()),this.index_=e.getIndex(),this.startPost_=$i.getStartPost_(e),this.endPost_=$i.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const t=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,n=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return t&&n}updateChild(e,t,n,i,s,r){return this.matches(new ui(t,n))||(n=Li.EMPTY_NODE),this.indexedFilter_.updateChild(e,t,n,i,s,r)}updateFullNode(e,t,n){t.isLeafNode()&&(t=Li.EMPTY_NODE);let i=t.withIndex(this.index_);i=i.updatePriority(Li.EMPTY_NODE);const s=this;return t.forEachChild(ki,((e,t)=>{s.matches(new ui(e,t))||(i=i.updateImmediateChild(e,Li.EMPTY_NODE))})),this.indexedFilter_.updateFullNode(e,i,n)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const t=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),t)}return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const t=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),t)}return e.getIndex().maxPost()}}
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
 */class Yi{constructor(e){this.withinDirectionalStart=e=>this.reverse_?this.withinEndPost(e):this.withinStartPost(e),this.withinDirectionalEnd=e=>this.reverse_?this.withinStartPost(e):this.withinEndPost(e),this.withinStartPost=e=>{const t=this.index_.compare(this.rangedFilter_.getStartPost(),e);return this.startIsInclusive_?t<=0:t<0},this.withinEndPost=e=>{const t=this.index_.compare(e,this.rangedFilter_.getEndPost());return this.endIsInclusive_?t<=0:t<0},this.rangedFilter_=new $i(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,t,n,i,s,r){return this.rangedFilter_.matches(new ui(t,n))||(n=Li.EMPTY_NODE),e.getImmediateChild(t).equals(n)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,t,n,i,s,r):this.fullLimitUpdateChild_(e,t,n,s,r)}updateFullNode(e,t,n){let i;if(t.isLeafNode()||t.isEmpty())i=Li.EMPTY_NODE.withIndex(this.index_);else if(2*this.limit_<t.numChildren()&&t.isIndexed(this.index_)){let e;i=Li.EMPTY_NODE.withIndex(this.index_),e=this.reverse_?t.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):t.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let n=0;for(;e.hasNext()&&n<this.limit_;){const t=e.getNext();if(this.withinDirectionalStart(t)){if(!this.withinDirectionalEnd(t))break;i=i.updateImmediateChild(t.name,t.node),n++}}}else{let e;i=t.withIndex(this.index_),i=i.updatePriority(Li.EMPTY_NODE),e=this.reverse_?i.getReverseIterator(this.index_):i.getIterator(this.index_);let n=0;for(;e.hasNext();){const t=e.getNext();n<this.limit_&&this.withinDirectionalStart(t)&&this.withinDirectionalEnd(t)?n++:i=i.updateImmediateChild(t.name,Li.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,n)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,t,n,i,s){let r;if(this.reverse_){const e=this.index_.getCompare();r=(t,n)=>e(n,t)}else r=this.index_.getCompare();const o=e;O(o.numChildren()===this.limit_,"");const a=new ui(t,n),l=this.reverse_?o.getFirstChild(this.index_):o.getLastChild(this.index_),c=this.rangedFilter_.matches(a);if(o.hasChild(t)){const e=o.getImmediateChild(t);let h=i.getChildAfterChild(this.index_,l,this.reverse_);for(;null!=h&&(h.name===t||o.hasChild(h.name));)h=i.getChildAfterChild(this.index_,h,this.reverse_);const u=null==h?1:r(h,a);if(c&&!n.isEmpty()&&u>=0)return null!=s&&s.trackChildChange(zi(t,n,e)),o.updateImmediateChild(t,n);{null!=s&&s.trackChildChange(Hi(t,e));const n=o.updateImmediateChild(t,Li.EMPTY_NODE);return null!=h&&this.rangedFilter_.matches(h)?(null!=s&&s.trackChildChange(Ui(h.name,h.node)),n.updateImmediateChild(h.name,h.node)):n}}return n.isEmpty()?e:c&&r(l,a)>=0?(null!=s&&(s.trackChildChange(Hi(l.name,l.node)),s.trackChildChange(Ui(t,n))),o.updateImmediateChild(t,n).updateImmediateChild(l.name,Li.EMPTY_NODE)):e}}
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
 */class Ki{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=ki}hasStart(){return this.startSet_}isViewFromLeft(){return""===this.viewFrom_?this.startSet_:"l"===this.viewFrom_}getIndexStartValue(){return O(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return O(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:cn}hasEnd(){return this.endSet_}getIndexEndValue(){return O(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return O(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:hn}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&""!==this.viewFrom_}getLimit(){return O(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===ki}copy(){const e=new Ki;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function Gi(e){const t={};if(e.isDefault())return t;let n;if(e.index_===ki?n="$priority":e.index_===Bi?n="$value":e.index_===_i?n="$key":(O(e.index_ instanceof qi,"Unrecognized index type!"),n=e.index_.toString()),t.orderBy=re(n),e.startSet_){const n=e.startAfterSet_?"startAfter":"startAt";t[n]=re(e.indexStartValue_),e.startNameSet_&&(t[n]+=","+re(e.indexStartName_))}if(e.endSet_){const n=e.endBeforeSet_?"endBefore":"endAt";t[n]=re(e.indexEndValue_),e.endNameSet_&&(t[n]+=","+re(e.indexEndName_))}return e.limitSet_&&(e.isViewFromLeft()?t.limitToFirst=e.limit_:t.limitToLast=e.limit_),t}function Qi(e){const t={};if(e.startSet_&&(t.sp=e.indexStartValue_,e.startNameSet_&&(t.sn=e.indexStartName_),t.sin=!e.startAfterSet_),e.endSet_&&(t.ep=e.indexEndValue_,e.endNameSet_&&(t.en=e.indexEndName_),t.ein=!e.endBeforeSet_),e.limitSet_){t.l=e.limit_;let n=e.viewFrom_;""===n&&(n=e.isViewFromLeft()?"l":"r"),t.vf=n}return e.index_!==ki&&(t.i=e.index_.toString()),t}
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
 */class Ji extends Hn{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return void 0!==t?"tag$"+t:(O(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,t,n,i){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=n,this.appCheckTokenProvider_=i,this.log_=sn("p:rest:"),this.listens_={}}listen(e,t,n,i){const s=e._path.toString();this.log_("Listen called for "+s+" "+e._queryIdentifier);const r=Ji.getListenId_(e,n),o={};this.listens_[r]=o;const a=Gi(e._queryParams);this.restRequest_(s+".json",a,((e,t)=>{let a=t;if(404===e&&(a=null,e=null),null===e&&this.onDataUpdate_(s,a,!1,n),le(this.listens_,r)===o){let t;t=e?401===e?"permission_denied":"rest_error:"+e:"ok",i(t,null)}}))}unlisten(e,t){const n=Ji.getListenId_(e,t);delete this.listens_[n]}get(e){const t=Gi(e._queryParams),n=e._path.toString(),i=new G;return this.restRequest_(n+".json",t,((e,t)=>{let s=t;404===e&&(s=null,e=null),null===e?(this.onDataUpdate_(n,s,!1,null),i.resolve(s)):i.reject(new Error(s))})),i.promise}refreshAuthToken(e){}restRequest_(e,t={},n){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then((([i,s])=>{i&&i.accessToken&&(t.auth=i.accessToken),s&&s.token&&(t.ac=s.token);const r=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+function(e){const t=[];for(const[n,i]of Object.entries(e))Array.isArray(i)?i.forEach((e=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(e))})):t.push(encodeURIComponent(n)+"="+encodeURIComponent(i));return t.length?"&"+t.join("&"):""}(t);this.log_("Sending REST request for "+r);const o=new XMLHttpRequest;o.onreadystatechange=()=>{if(n&&4===o.readyState){this.log_("REST Response for "+r+" received. status:",o.status,"response:",o.responseText);let t=null;if(o.status>=200&&o.status<300){try{t=se(o.responseText)}catch(e){an("Failed to parse JSON response for "+r+": "+o.responseText)}n(null,t)}else 401!==o.status&&404!==o.status&&an("Got unsuccessful REST response for "+r+" Status: "+o.status),n(o.status);n=null}},o.open("GET",r,!0),o.send()}))}}
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
 */class Xi{constructor(){this.rootNode_=Li.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}
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
 */function Zi(){return{value:null,children:new Map}}function es(e,t,n){if(ti(t))e.value=n,e.children.clear();else if(null!==e.value)e.value=e.value.updateChild(t,n);else{const i=Kn(t);e.children.has(i)||e.children.set(i,Zi());es(e.children.get(i),t=Qn(t),n)}}function ts(e,t,n){null!==e.value?n(t,e.value):function(e,t){e.children.forEach(((e,n)=>{t(n,e)}))}
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
 */(e,((e,i)=>{ts(i,new $n(t.toString()+"/"+e),n)}))}class ns{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t=Object.assign({},e);return this.last_&&mn(this.last_,((e,n)=>{t[e]=t[e]-n})),this.last_=e,t}}
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
 */class is{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new ns(e);const n=1e4+2e4*Math.random();bn(this.reportStats_.bind(this),Math.floor(n))}reportStats_(){const e=this.statsListener_.get(),t={};let n=!1;mn(e,((e,i)=>{i>0&&ae(this.statsToReport_,e)&&(t[e]=i,n=!0)})),n&&this.server_.reportStats(t),bn(this.reportStats_.bind(this),Math.floor(2*Math.random()*3e5))}}
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
 */var ss,rs;function os(e){return{fromUser:!1,fromServer:!0,queryId:e,tagged:!0}}
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
 */(rs=ss||(ss={}))[rs.OVERWRITE=0]="OVERWRITE",rs[rs.MERGE=1]="MERGE",rs[rs.ACK_USER_WRITE=2]="ACK_USER_WRITE",rs[rs.LISTEN_COMPLETE=3]="LISTEN_COMPLETE";class as{constructor(e,t,n){this.path=e,this.affectedTree=t,this.revert=n,this.type=ss.ACK_USER_WRITE,this.source={fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}operationForChild(e){if(ti(this.path)){if(null!=this.affectedTree.value)return O(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new $n(e));return new as(Yn(),t,this.revert)}}return O(Kn(this.path)===e,"operationForChild called for unrelated child."),new as(Qn(this.path),this.affectedTree,this.revert)}}
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
 */class ls{constructor(e,t){this.source=e,this.path=t,this.type=ss.LISTEN_COMPLETE}operationForChild(e){return ti(this.path)?new ls(this.source,Yn()):new ls(this.source,Qn(this.path))}}
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
 */class cs{constructor(e,t,n){this.source=e,this.path=t,this.snap=n,this.type=ss.OVERWRITE}operationForChild(e){return ti(this.path)?new cs(this.source,Yn(),this.snap.getImmediateChild(e)):new cs(this.source,Qn(this.path),this.snap)}}
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
 */class hs{constructor(e,t,n){this.source=e,this.path=t,this.children=n,this.type=ss.MERGE}operationForChild(e){if(ti(this.path)){const t=this.children.subtree(new $n(e));return t.isEmpty()?null:t.value?new cs(this.source,Yn(),t.value):new hs(this.source,Yn(),t)}return O(Kn(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new hs(this.source,Qn(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}
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
 */class us{constructor(e,t,n){this.node_=e,this.fullyInitialized_=t,this.filtered_=n}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(ti(e))return this.isFullyInitialized()&&!this.filtered_;const t=Kn(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}
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
 */class ds{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function ps(e,t,n,i,s,r){const o=i.filter((e=>e.type===n));o.sort(((t,n)=>function(e,t,n){if(null==t.childName||null==n.childName)throw L("Should only compare child_ events.");const i=new ui(t.childName,t.snapshotNode),s=new ui(n.childName,n.snapshotNode);return e.index_.compare(i,s)}
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
 */(e,t,n))),o.forEach((n=>{const i=function(e,t,n){return"value"===t.type||"child_removed"===t.type||(t.prevName=n.getPredecessorChildName(t.childName,t.snapshotNode,e.index_)),t}(e,n,r);s.forEach((s=>{s.respondsTo(n.type)&&t.push(s.createEvent(i,e.query_))}))}))}function fs(e,t){return{eventCache:e,serverCache:t}}function _s(e,t,n,i){return fs(new us(t,n,i),e.serverCache)}function ms(e,t,n,i){return fs(e.eventCache,new us(t,n,i))}function gs(e){return e.eventCache.isFullyInitialized()?e.eventCache.getNode():null}function ys(e){return e.serverCache.isFullyInitialized()?e.serverCache.getNode():null}
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
 */let vs;class Cs{static fromObject(e){let t=new Cs(null);return mn(e,((e,n)=>{t=t.set(new $n(e),n)})),t}constructor(e,t=(()=>(vs||(vs=new yi(dn)),vs))()){this.value=e,this.children=t}isEmpty(){return null===this.value&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(null!=this.value&&t(this.value))return{path:Yn(),value:this.value};if(ti(e))return null;{const n=Kn(e),i=this.children.get(n);if(null!==i){const s=i.findRootMostMatchingPathAndValue(Qn(e),t);if(null!=s){return{path:ei(new $n(n),s.path),value:s.value}}return null}return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,(()=>!0))}subtree(e){if(ti(e))return this;{const t=Kn(e),n=this.children.get(t);return null!==n?n.subtree(Qn(e)):new Cs(null)}}set(e,t){if(ti(e))return new Cs(t,this.children);{const n=Kn(e),i=(this.children.get(n)||new Cs(null)).set(Qn(e),t),s=this.children.insert(n,i);return new Cs(this.value,s)}}remove(e){if(ti(e))return this.children.isEmpty()?new Cs(null):new Cs(null,this.children);{const t=Kn(e),n=this.children.get(t);if(n){const i=n.remove(Qn(e));let s;return s=i.isEmpty()?this.children.remove(t):this.children.insert(t,i),null===this.value&&s.isEmpty()?new Cs(null):new Cs(this.value,s)}return this}}get(e){if(ti(e))return this.value;{const t=Kn(e),n=this.children.get(t);return n?n.get(Qn(e)):null}}setTree(e,t){if(ti(e))return t;{const n=Kn(e),i=(this.children.get(n)||new Cs(null)).setTree(Qn(e),t);let s;return s=i.isEmpty()?this.children.remove(n):this.children.insert(n,i),new Cs(this.value,s)}}fold(e){return this.fold_(Yn(),e)}fold_(e,t){const n={};return this.children.inorderTraversal(((i,s)=>{n[i]=s.fold_(ei(e,i),t)})),t(e,this.value,n)}findOnPath(e,t){return this.findOnPath_(e,Yn(),t)}findOnPath_(e,t,n){const i=!!this.value&&n(t,this.value);if(i)return i;if(ti(e))return null;{const i=Kn(e),s=this.children.get(i);return s?s.findOnPath_(Qn(e),ei(t,i),n):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,Yn(),t)}foreachOnPath_(e,t,n){if(ti(e))return this;{this.value&&n(t,this.value);const i=Kn(e),s=this.children.get(i);return s?s.foreachOnPath_(Qn(e),ei(t,i),n):new Cs(null)}}foreach(e){this.foreach_(Yn(),e)}foreach_(e,t){this.children.inorderTraversal(((n,i)=>{i.foreach_(ei(e,n),t)})),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal(((t,n)=>{n.value&&e(t,n.value)}))}}
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
 */class bs{constructor(e){this.writeTree_=e}static empty(){return new bs(new Cs(null))}}function ws(e,t,n){if(ti(t))return new bs(new Cs(n));{const i=e.writeTree_.findRootMostValueAndPath(t);if(null!=i){const s=i.path;let r=i.value;const o=ni(s,t);return r=r.updateChild(o,n),new bs(e.writeTree_.set(s,r))}{const i=new Cs(n),s=e.writeTree_.setTree(t,i);return new bs(s)}}}function Is(e,t,n){let i=e;return mn(n,((e,n)=>{i=ws(i,ei(t,e),n)})),i}function Ts(e,t){if(ti(t))return bs.empty();{const n=e.writeTree_.setTree(t,new Cs(null));return new bs(n)}}function Es(e,t){return null!=xs(e,t)}function xs(e,t){const n=e.writeTree_.findRootMostValueAndPath(t);return null!=n?e.writeTree_.get(n.path).getChild(ni(n.path,t)):null}function Ss(e){const t=[],n=e.writeTree_.value;return null!=n?n.isLeafNode()||n.forEachChild(ki,((e,n)=>{t.push(new ui(e,n))})):e.writeTree_.children.inorderTraversal(((e,n)=>{null!=n.value&&t.push(new ui(e,n.value))})),t}function ks(e,t){if(ti(t))return e;{const n=xs(e,t);return new bs(null!=n?new Cs(n):e.writeTree_.subtree(t))}}function Ns(e){return e.writeTree_.isEmpty()}function Ps(e,t){return Rs(Yn(),e.writeTree_,t)}function Rs(e,t,n){if(null!=t.value)return n.updateChild(e,t.value);{let i=null;return t.children.inorderTraversal(((t,s)=>{".priority"===t?(O(null!==s.value,"Priority writes must always be leaf nodes"),i=s.value):n=Rs(ei(e,t),s,n)})),n.getChild(e).isEmpty()||null===i||(n=n.updateChild(ei(e,".priority"),i)),n}}
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
 */function Ds(e,t){return Vs(t,e)}function As(e,t){const n=e.allWrites.findIndex((e=>e.writeId===t));O(n>=0,"removeWrite called with nonexistent writeId.");const i=e.allWrites[n];e.allWrites.splice(n,1);let s=i.visible,r=!1,o=e.allWrites.length-1;for(;s&&o>=0;){const t=e.allWrites[o];t.visible&&(o>=n&&js(t,i.path)?s=!1:si(i.path,t.path)&&(r=!0)),o--}if(s){if(r)return function(e){e.visibleWrites=Ls(e.allWrites,Os,Yn()),e.allWrites.length>0?e.lastWriteId=e.allWrites[e.allWrites.length-1].writeId:e.lastWriteId=-1}(e),!0;if(i.snap)e.visibleWrites=Ts(e.visibleWrites,i.path);else{mn(i.children,(t=>{e.visibleWrites=Ts(e.visibleWrites,ei(i.path,t))}))}return!0}return!1}function js(e,t){if(e.snap)return si(e.path,t);for(const n in e.children)if(e.children.hasOwnProperty(n)&&si(ei(e.path,n),t))return!0;return!1}function Os(e){return e.visible}function Ls(e,t,n){let i=bs.empty();for(let s=0;s<e.length;++s){const r=e[s];if(t(r)){const e=r.path;let t;if(r.snap)si(n,e)?(t=ni(n,e),i=ws(i,t,r.snap)):si(e,n)&&(t=ni(e,n),i=ws(i,Yn(),r.snap.getChild(t)));else{if(!r.children)throw L("WriteRecord should have .snap or .children");if(si(n,e))t=ni(n,e),i=Is(i,t,r.children);else if(si(e,n))if(t=ni(e,n),ti(t))i=Is(i,Yn(),r.children);else{const e=le(r.children,Kn(t));if(e){const n=e.getChild(Qn(t));i=ws(i,Yn(),n)}}}}}return i}function Ms(e,t,n,i,s){if(i||s){const r=ks(e.visibleWrites,t);if(!s&&Ns(r))return n;if(s||null!=n||Es(r,Yn())){const r=function(e){return(e.visible||s)&&(!i||!~i.indexOf(e.writeId))&&(si(e.path,t)||si(t,e.path))};return Ps(Ls(e.allWrites,r,t),n||Li.EMPTY_NODE)}return null}{const i=xs(e.visibleWrites,t);if(null!=i)return i;{const i=ks(e.visibleWrites,t);if(Ns(i))return n;if(null!=n||Es(i,Yn())){return Ps(i,n||Li.EMPTY_NODE)}return null}}}function Fs(e,t,n,i){return Ms(e.writeTree,e.treePath,t,n,i)}function qs(e,t){return function(e,t,n){let i=Li.EMPTY_NODE;const s=xs(e.visibleWrites,t);if(s)return s.isLeafNode()||s.forEachChild(ki,((e,t)=>{i=i.updateImmediateChild(e,t)})),i;if(n){const s=ks(e.visibleWrites,t);return n.forEachChild(ki,((e,t)=>{const n=Ps(ks(s,new $n(e)),t);i=i.updateImmediateChild(e,n)})),Ss(s).forEach((e=>{i=i.updateImmediateChild(e.name,e.node)})),i}return Ss(ks(e.visibleWrites,t)).forEach((e=>{i=i.updateImmediateChild(e.name,e.node)})),i}(e.writeTree,e.treePath,t)}function Bs(e,t,n,i){return function(e,t,n,i,s){O(i||s,"Either existingEventSnap or existingServerSnap must exist");const r=ei(t,n);if(Es(e.visibleWrites,r))return null;{const t=ks(e.visibleWrites,r);return Ns(t)?s.getChild(n):Ps(t,s.getChild(n))}}(e.writeTree,e.treePath,t,n,i)}function Ws(e,t){return function(e,t){return xs(e.visibleWrites,t)}(e.writeTree,ei(e.treePath,t))}function Us(e,t,n,i,s,r){return function(e,t,n,i,s,r,o){let a;const l=ks(e.visibleWrites,t),c=xs(l,Yn());if(null!=c)a=c;else{if(null==n)return[];a=Ps(l,n)}if(a=a.withIndex(o),a.isEmpty()||a.isLeafNode())return[];{const e=[],t=o.getCompare(),n=r?a.getReverseIteratorFrom(i,o):a.getIteratorFrom(i,o);let l=n.getNext();for(;l&&e.length<s;)0!==t(l,i)&&e.push(l),l=n.getNext();return e}}(e.writeTree,e.treePath,t,n,i,s,r)}function Hs(e,t,n){return function(e,t,n,i){const s=ei(t,n),r=xs(e.visibleWrites,s);if(null!=r)return r;if(i.isCompleteForChild(n))return Ps(ks(e.visibleWrites,s),i.getNode().getImmediateChild(n));return null}(e.writeTree,e.treePath,t,n)}function zs(e,t){return Vs(ei(e.treePath,t),e.writeTree)}function Vs(e,t){return{treePath:e,writeTree:t}}
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
 */class $s{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,n=e.childName;O("child_added"===t||"child_changed"===t||"child_removed"===t,"Only child changes supported for tracking"),O(".priority"!==n,"Only non-priority child changes can be tracked.");const i=this.changeMap.get(n);if(i){const s=i.type;if("child_added"===t&&"child_removed"===s)this.changeMap.set(n,zi(n,e.snapshotNode,i.snapshotNode));else if("child_removed"===t&&"child_added"===s)this.changeMap.delete(n);else if("child_removed"===t&&"child_changed"===s)this.changeMap.set(n,Hi(n,i.oldSnap));else if("child_changed"===t&&"child_added"===s)this.changeMap.set(n,Ui(n,e.snapshotNode));else{if("child_changed"!==t||"child_changed"!==s)throw L("Illegal combination of changes: "+e+" occurred after "+i);this.changeMap.set(n,zi(n,e.snapshotNode,i.oldSnap))}}else this.changeMap.set(n,e)}getChanges(){return Array.from(this.changeMap.values())}}
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
 */const Ys=new class{getCompleteChild(e){return null}getChildAfterChild(e,t,n){return null}};class Ks{constructor(e,t,n=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=n}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const t=null!=this.optCompleteServerCache_?new us(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Hs(this.writes_,e,t)}}getChildAfterChild(e,t,n){const i=null!=this.optCompleteServerCache_?this.optCompleteServerCache_:ys(this.viewCache_),s=Us(this.writes_,i,t,1,n,e);return 0===s.length?null:s[0]}}
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
 */function Gs(e,t,n,i,s){const r=new $s;let o,a;if(n.type===ss.OVERWRITE){const l=n;l.source.fromUser?o=Xs(e,t,l.path,l.snap,i,s,r):(O(l.source.fromServer,"Unknown source."),a=l.source.tagged||t.serverCache.isFiltered()&&!ti(l.path),o=Js(e,t,l.path,l.snap,i,s,a,r))}else if(n.type===ss.MERGE){const l=n;l.source.fromUser?o=function(e,t,n,i,s,r,o){let a=t;return i.foreach(((i,l)=>{const c=ei(n,i);Zs(t,Kn(c))&&(a=Xs(e,a,c,l,s,r,o))})),i.foreach(((i,l)=>{const c=ei(n,i);Zs(t,Kn(c))||(a=Xs(e,a,c,l,s,r,o))})),a}(e,t,l.path,l.children,i,s,r):(O(l.source.fromServer,"Unknown source."),a=l.source.tagged||t.serverCache.isFiltered(),o=tr(e,t,l.path,l.children,i,s,a,r))}else if(n.type===ss.ACK_USER_WRITE){const a=n;o=a.revert?function(e,t,n,i,s,r){let o;if(null!=Ws(i,n))return t;{const a=new Ks(i,t,s),l=t.eventCache.getNode();let c;if(ti(n)||".priority"===Kn(n)){let n;if(t.serverCache.isFullyInitialized())n=Fs(i,ys(t));else{const e=t.serverCache.getNode();O(e instanceof Li,"serverChildren would be complete if leaf node"),n=qs(i,e)}c=e.filter.updateFullNode(l,n,r)}else{const s=Kn(n);let h=Hs(i,s,t.serverCache);null==h&&t.serverCache.isCompleteForChild(s)&&(h=l.getImmediateChild(s)),c=null!=h?e.filter.updateChild(l,s,h,Qn(n),a,r):t.eventCache.getNode().hasChild(s)?e.filter.updateChild(l,s,Li.EMPTY_NODE,Qn(n),a,r):l,c.isEmpty()&&t.serverCache.isFullyInitialized()&&(o=Fs(i,ys(t)),o.isLeafNode()&&(c=e.filter.updateFullNode(c,o,r)))}return o=t.serverCache.isFullyInitialized()||null!=Ws(i,Yn()),_s(t,c,o,e.filter.filtersNodes())}}
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
 */(e,t,a.path,i,s,r):function(e,t,n,i,s,r,o){if(null!=Ws(s,n))return t;const a=t.serverCache.isFiltered(),l=t.serverCache;if(null!=i.value){if(ti(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return Js(e,t,n,l.getNode().getChild(n),s,r,a,o);if(ti(n)){let i=new Cs(null);return l.getNode().forEachChild(_i,((e,t)=>{i=i.set(new $n(e),t)})),tr(e,t,n,i,s,r,a,o)}return t}{let c=new Cs(null);return i.foreach(((e,t)=>{const i=ei(n,e);l.isCompleteForPath(i)&&(c=c.set(e,l.getNode().getChild(i)))})),tr(e,t,n,c,s,r,a,o)}}(e,t,a.path,a.affectedTree,i,s,r)}else{if(n.type!==ss.LISTEN_COMPLETE)throw L("Unknown operation type: "+n.type);o=function(e,t,n,i,s){const r=t.serverCache,o=ms(t,r.getNode(),r.isFullyInitialized()||ti(n),r.isFiltered());return Qs(e,o,n,i,Ys,s)}(e,t,n.path,i,r)}const l=r.getChanges();return function(e,t,n){const i=t.eventCache;if(i.isFullyInitialized()){const s=i.getNode().isLeafNode()||i.getNode().isEmpty(),r=gs(e);(n.length>0||!e.eventCache.isFullyInitialized()||s&&!i.getNode().equals(r)||!i.getNode().getPriority().equals(r.getPriority()))&&n.push(Wi(gs(t)))}}(t,o,l),{viewCache:o,changes:l}}function Qs(e,t,n,i,s,r){const o=t.eventCache;if(null!=Ws(i,n))return t;{let a,l;if(ti(n))if(O(t.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),t.serverCache.isFiltered()){const n=ys(t),s=qs(i,n instanceof Li?n:Li.EMPTY_NODE);a=e.filter.updateFullNode(t.eventCache.getNode(),s,r)}else{const n=Fs(i,ys(t));a=e.filter.updateFullNode(t.eventCache.getNode(),n,r)}else{const c=Kn(n);if(".priority"===c){O(1===Gn(n),"Can't have a priority with additional path components");const s=o.getNode();l=t.serverCache.getNode();const r=Bs(i,n,s,l);a=null!=r?e.filter.updatePriority(s,r):o.getNode()}else{const h=Qn(n);let u;if(o.isCompleteForChild(c)){l=t.serverCache.getNode();const e=Bs(i,n,o.getNode(),l);u=null!=e?o.getNode().getImmediateChild(c).updateChild(h,e):o.getNode().getImmediateChild(c)}else u=Hs(i,c,t.serverCache);a=null!=u?e.filter.updateChild(o.getNode(),c,u,h,s,r):o.getNode()}}return _s(t,a,o.isFullyInitialized()||ti(n),e.filter.filtersNodes())}}function Js(e,t,n,i,s,r,o,a){const l=t.serverCache;let c;const h=o?e.filter:e.filter.getIndexedFilter();if(ti(n))c=h.updateFullNode(l.getNode(),i,null);else if(h.filtersNodes()&&!l.isFiltered()){const e=l.getNode().updateChild(n,i);c=h.updateFullNode(l.getNode(),e,null)}else{const e=Kn(n);if(!l.isCompleteForPath(n)&&Gn(n)>1)return t;const s=Qn(n),r=l.getNode().getImmediateChild(e).updateChild(s,i);c=".priority"===e?h.updatePriority(l.getNode(),r):h.updateChild(l.getNode(),e,r,s,Ys,null)}const u=ms(t,c,l.isFullyInitialized()||ti(n),h.filtersNodes());return Qs(e,u,n,s,new Ks(s,u,r),a)}function Xs(e,t,n,i,s,r,o){const a=t.eventCache;let l,c;const h=new Ks(s,t,r);if(ti(n))c=e.filter.updateFullNode(t.eventCache.getNode(),i,o),l=_s(t,c,!0,e.filter.filtersNodes());else{const s=Kn(n);if(".priority"===s)c=e.filter.updatePriority(t.eventCache.getNode(),i),l=_s(t,c,a.isFullyInitialized(),a.isFiltered());else{const r=Qn(n),c=a.getNode().getImmediateChild(s);let u;if(ti(r))u=i;else{const e=h.getCompleteChild(s);u=null!=e?".priority"===Jn(r)&&e.getChild(Zn(r)).isEmpty()?e:e.updateChild(r,i):Li.EMPTY_NODE}if(c.equals(u))l=t;else{l=_s(t,e.filter.updateChild(a.getNode(),s,u,r,h,o),a.isFullyInitialized(),e.filter.filtersNodes())}}}return l}function Zs(e,t){return e.eventCache.isCompleteForChild(t)}function er(e,t,n){return n.foreach(((e,n)=>{t=t.updateChild(e,n)})),t}function tr(e,t,n,i,s,r,o,a){if(t.serverCache.getNode().isEmpty()&&!t.serverCache.isFullyInitialized())return t;let l,c=t;l=ti(n)?i:new Cs(null).setTree(n,i);const h=t.serverCache.getNode();return l.children.inorderTraversal(((n,i)=>{if(h.hasChild(n)){const l=er(0,t.serverCache.getNode().getImmediateChild(n),i);c=Js(e,c,new $n(n),l,s,r,o,a)}})),l.children.inorderTraversal(((n,i)=>{const l=!t.serverCache.isCompleteForChild(n)&&null===i.value;if(!h.hasChild(n)&&!l){const l=er(0,t.serverCache.getNode().getImmediateChild(n),i);c=Js(e,c,new $n(n),l,s,r,o,a)}})),c}class nr{constructor(e,t){this.query_=e,this.eventRegistrations_=[];const n=this.query_._queryParams,i=new Vi(n.getIndex()),s=(r=n).loadsAllData()?new Vi(r.getIndex()):r.hasLimit()?new Yi(r):new $i(r);var r;this.processor_=function(e){return{filter:e}}(s);const o=t.serverCache,a=t.eventCache,l=i.updateFullNode(Li.EMPTY_NODE,o.getNode(),null),c=s.updateFullNode(Li.EMPTY_NODE,a.getNode(),null),h=new us(l,o.isFullyInitialized(),i.filtersNodes()),u=new us(c,a.isFullyInitialized(),s.filtersNodes());this.viewCache_=fs(u,h),this.eventGenerator_=new ds(this.query_)}get query(){return this.query_}}function ir(e,t){const n=ys(e.viewCache_);return n&&(e.query._queryParams.loadsAllData()||!ti(t)&&!n.getImmediateChild(Kn(t)).isEmpty())?n.getChild(t):null}function sr(e){return 0===e.eventRegistrations_.length}function rr(e,t,n){const i=[];if(n){O(null==t,"A cancel should cancel all event registrations.");const s=e.query._path;e.eventRegistrations_.forEach((e=>{const t=e.createCancelEvent(n,s);t&&i.push(t)}))}if(t){let n=[];for(let i=0;i<e.eventRegistrations_.length;++i){const s=e.eventRegistrations_[i];if(s.matches(t)){if(t.hasAnyCallback()){n=n.concat(e.eventRegistrations_.slice(i+1));break}}else n.push(s)}e.eventRegistrations_=n}else e.eventRegistrations_=[];return i}function or(e,t,n,i){t.type===ss.MERGE&&null!==t.source.queryId&&(O(ys(e.viewCache_),"We should always have a full cache before handling merges"),O(gs(e.viewCache_),"Missing event cache, even though we have a server cache"));const s=e.viewCache_,r=Gs(e.processor_,s,t,n,i);var o,a;return o=e.processor_,a=r.viewCache,O(a.eventCache.getNode().isIndexed(o.filter.getIndex()),"Event snap not indexed"),O(a.serverCache.getNode().isIndexed(o.filter.getIndex()),"Server snap not indexed"),O(r.viewCache.serverCache.isFullyInitialized()||!s.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),e.viewCache_=r.viewCache,ar(e,r.changes,r.viewCache.eventCache.getNode(),null)}function ar(e,t,n,i){const s=i?[i]:e.eventRegistrations_;return function(e,t,n,i){const s=[],r=[];return t.forEach((t=>{var n;"child_changed"===t.type&&e.index_.indexedValueChanged(t.oldSnap,t.snapshotNode)&&r.push((n=t.childName,{type:"child_moved",snapshotNode:t.snapshotNode,childName:n}))})),ps(e,s,"child_removed",t,i,n),ps(e,s,"child_added",t,i,n),ps(e,s,"child_moved",r,i,n),ps(e,s,"child_changed",t,i,n),ps(e,s,"value",t,i,n),s}(e.eventGenerator_,t,n,s)}
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
 */let lr,cr;class hr{constructor(){this.views=new Map}}function ur(e,t,n,i){const s=t.source.queryId;if(null!==s){const r=e.views.get(s);return O(null!=r,"SyncTree gave us an op for an invalid query."),or(r,t,n,i)}{let s=[];for(const r of e.views.values())s=s.concat(or(r,t,n,i));return s}}function dr(e,t,n,i,s,r){const o=function(e,t,n,i,s){const r=t._queryIdentifier,o=e.views.get(r);if(!o){let e=Fs(n,s?i:null),r=!1;e?r=!0:i instanceof Li?(e=qs(n,i),r=!1):(e=Li.EMPTY_NODE,r=!1);const o=fs(new us(e,r,!1),new us(i,s,!1));return new nr(t,o)}return o}(e,t,i,s,r);return e.views.has(t._queryIdentifier)||e.views.set(t._queryIdentifier,o),function(e,t){e.eventRegistrations_.push(t)}(o,n),function(e,t){const n=e.viewCache_.eventCache,i=[];n.getNode().isLeafNode()||n.getNode().forEachChild(ki,((e,t)=>{i.push(Ui(e,t))}));return n.isFullyInitialized()&&i.push(Wi(n.getNode())),ar(e,i,n.getNode(),t)}(o,n)}function pr(e,t,n,i){const s=t._queryIdentifier,r=[];let o=[];const a=yr(e);if("default"===s)for(const[l,c]of e.views.entries())o=o.concat(rr(c,n,i)),sr(c)&&(e.views.delete(l),c.query._queryParams.loadsAllData()||r.push(c.query));else{const t=e.views.get(s);t&&(o=o.concat(rr(t,n,i)),sr(t)&&(e.views.delete(s),t.query._queryParams.loadsAllData()||r.push(t.query)))}return a&&!yr(e)&&r.push(new(O(lr,"Reference.ts has not been loaded"),lr)(t._repo,t._path)),{removed:r,events:o}}function fr(e){const t=[];for(const n of e.views.values())n.query._queryParams.loadsAllData()||t.push(n);return t}function _r(e,t){let n=null;for(const i of e.views.values())n=n||ir(i,t);return n}function mr(e,t){if(t._queryParams.loadsAllData())return vr(e);{const n=t._queryIdentifier;return e.views.get(n)}}function gr(e,t){return null!=mr(e,t)}function yr(e){return null!=vr(e)}function vr(e){for(const t of e.views.values())if(t.query._queryParams.loadsAllData())return t;return null}
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
 */let Cr=1;class br{constructor(e){this.listenProvider_=e,this.syncPointTree_=new Cs(null),this.pendingWriteTree_={visibleWrites:bs.empty(),allWrites:[],lastWriteId:-1},this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function wr(e,t,n,i,s){return function(e,t,n,i,s){O(i>e.lastWriteId,"Stacking an older write on top of newer ones"),void 0===s&&(s=!0),e.allWrites.push({path:t,snap:n,writeId:i,visible:s}),s&&(e.visibleWrites=ws(e.visibleWrites,t,n)),e.lastWriteId=i}(e.pendingWriteTree_,t,n,i,s),s?kr(e,new cs({fromUser:!0,fromServer:!1,queryId:null,tagged:!1},t,n)):[]}function Ir(e,t,n=!1){const i=function(e,t){for(let n=0;n<e.allWrites.length;n++){const i=e.allWrites[n];if(i.writeId===t)return i}return null}(e.pendingWriteTree_,t);if(As(e.pendingWriteTree_,t)){let t=new Cs(null);return null!=i.snap?t=t.set(Yn(),!0):mn(i.children,(e=>{t=t.set(new $n(e),!0)})),kr(e,new as(i.path,t,n))}return[]}function Tr(e,t,n){return kr(e,new cs({fromUser:!1,fromServer:!0,queryId:null,tagged:!1},t,n))}function Er(e,t,n,i,s=!1){const r=t._path,o=e.syncPointTree_.get(r);let a=[];if(o&&("default"===t._queryIdentifier||gr(o,t))){const l=pr(o,t,n,i);0===o.views.size&&(e.syncPointTree_=e.syncPointTree_.remove(r));const c=l.removed;if(a=l.events,!s){const n=-1!==c.findIndex((e=>e._queryParams.loadsAllData())),s=e.syncPointTree_.findOnPath(r,((e,t)=>yr(t)));if(n&&!s){const t=e.syncPointTree_.subtree(r);if(!t.isEmpty()){const n=function(e){return e.fold(((e,t,n)=>{if(t&&yr(t)){return[vr(t)]}{let e=[];return t&&(e=fr(t)),mn(n,((t,n)=>{e=e.concat(n)})),e}}))}(t);for(let t=0;t<n.length;++t){const i=n[t],s=i.query,r=Rr(e,i);e.listenProvider_.startListening(Mr(s),Dr(e,s),r.hashFn,r.onComplete)}}}if(!s&&c.length>0&&!i)if(n){const n=null;e.listenProvider_.stopListening(Mr(t),n)}else c.forEach((t=>{const n=e.queryToTagMap.get(Ar(t));e.listenProvider_.stopListening(Mr(t),n)}))}!function(e,t){for(let n=0;n<t.length;++n){const i=t[n];if(!i._queryParams.loadsAllData()){const t=Ar(i),n=e.queryToTagMap.get(t);e.queryToTagMap.delete(t),e.tagToQueryMap.delete(n)}}}(e,c)}return a}function xr(e,t,n,i=!1){const s=t._path;let r=null,o=!1;e.syncPointTree_.foreachOnPath(s,((e,t)=>{const n=ni(e,s);r=r||_r(t,n),o=o||yr(t)}));let a,l=e.syncPointTree_.get(s);if(l?(o=o||yr(l),r=r||_r(l,Yn())):(l=new hr,e.syncPointTree_=e.syncPointTree_.set(s,l)),null!=r)a=!0;else{a=!1,r=Li.EMPTY_NODE;e.syncPointTree_.subtree(s).foreachChild(((e,t)=>{const n=_r(t,Yn());n&&(r=r.updateImmediateChild(e,n))}))}const c=gr(l,t);if(!c&&!t._queryParams.loadsAllData()){const n=Ar(t);O(!e.queryToTagMap.has(n),"View does not exist, but we have a tag");const i=Cr++;e.queryToTagMap.set(n,i),e.tagToQueryMap.set(i,n)}let h=dr(l,t,n,Ds(e.pendingWriteTree_,s),r,a);if(!c&&!o&&!i){const n=mr(l,t);h=h.concat(function(e,t,n){const i=t._path,s=Dr(e,t),r=Rr(e,n),o=e.listenProvider_.startListening(Mr(t),s,r.hashFn,r.onComplete),a=e.syncPointTree_.subtree(i);if(s)O(!yr(a.value),"If we're adding a query, it shouldn't be shadowed");else{const t=a.fold(((e,t,n)=>{if(!ti(e)&&t&&yr(t))return[vr(t).query];{let e=[];return t&&(e=e.concat(fr(t).map((e=>e.query)))),mn(n,((t,n)=>{e=e.concat(n)})),e}}));for(let n=0;n<t.length;++n){const i=t[n];e.listenProvider_.stopListening(Mr(i),Dr(e,i))}}return o}
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
 */(e,t,n))}return h}function Sr(e,t,n){const i=e.pendingWriteTree_,s=e.syncPointTree_.findOnPath(t,((e,n)=>{const i=_r(n,ni(e,t));if(i)return i}));return Ms(i,t,s,n,!0)}function kr(e,t){return Nr(t,e.syncPointTree_,null,Ds(e.pendingWriteTree_,Yn()))}function Nr(e,t,n,i){if(ti(e.path))return Pr(e,t,n,i);{const s=t.get(Yn());null==n&&null!=s&&(n=_r(s,Yn()));let r=[];const o=Kn(e.path),a=e.operationForChild(o),l=t.children.get(o);if(l&&a){const e=n?n.getImmediateChild(o):null,t=zs(i,o);r=r.concat(Nr(a,l,e,t))}return s&&(r=r.concat(ur(s,e,i,n))),r}}function Pr(e,t,n,i){const s=t.get(Yn());null==n&&null!=s&&(n=_r(s,Yn()));let r=[];return t.children.inorderTraversal(((t,s)=>{const o=n?n.getImmediateChild(t):null,a=zs(i,t),l=e.operationForChild(t);l&&(r=r.concat(Pr(l,s,o,a)))})),s&&(r=r.concat(ur(s,e,i,n))),r}function Rr(e,t){const n=t.query,i=Dr(e,n);return{hashFn:()=>{const e=function(e){return e.viewCache_.serverCache.getNode()}(t)||Li.EMPTY_NODE;return e.hash()},onComplete:t=>{if("ok"===t)return i?function(e,t,n){const i=jr(e,n);if(i){const n=Or(i),s=n.path,r=n.queryId,o=ni(s,t);return Lr(e,s,new ls(os(r),o))}return[]}(e,n._path,i):function(e,t){return kr(e,new ls({fromUser:!1,fromServer:!0,queryId:null,tagged:!1},t))}(e,n._path);{const i=function(e,t){let n="Unknown Error";"too_big"===e?n="The data requested exceeds the maximum size that can be accessed with a single request.":"permission_denied"===e?n="Client doesn't have permission to access the desired data.":"unavailable"===e&&(n="The service is unavailable");const i=new Error(e+" at "+t._path.toString()+": "+n);return i.code=e.toUpperCase(),i}(t,n);return Er(e,n,null,i)}}}}function Dr(e,t){const n=Ar(t);return e.queryToTagMap.get(n)}function Ar(e){return e._path.toString()+"$"+e._queryIdentifier}function jr(e,t){return e.tagToQueryMap.get(t)}function Or(e){const t=e.indexOf("$");return O(-1!==t&&t<e.length-1,"Bad queryKey."),{queryId:e.substr(t+1),path:new $n(e.substr(0,t))}}function Lr(e,t,n){const i=e.syncPointTree_.get(t);O(i,"Missing sync point for query tag that we're tracking");return ur(i,n,Ds(e.pendingWriteTree_,t),null)}function Mr(e){return e._queryParams.loadsAllData()&&!e._queryParams.isDefault()?new(O(cr,"Reference.ts has not been loaded"),cr)(e._repo,e._path):e}class Fr{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new Fr(t)}node(){return this.node_}}class qr{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=ei(this.path_,e);return new qr(this.syncTree_,t)}node(){return Sr(this.syncTree_,this.path_)}}const Br=function(e,t,n){return e&&"object"==typeof e?(O(".sv"in e,"Unexpected leaf node or priority contents"),"string"==typeof e[".sv"]?Wr(e[".sv"],t,n):"object"==typeof e[".sv"]?Ur(e[".sv"],t):void O(!1,"Unexpected server value: "+JSON.stringify(e,null,2))):e},Wr=function(e,t,n){if("timestamp"===e)return n.timestamp;O(!1,"Unexpected server value: "+e)},Ur=function(e,t,n){e.hasOwnProperty("increment")||O(!1,"Unexpected server value: "+JSON.stringify(e,null,2));const i=e.increment;"number"!=typeof i&&O(!1,"Unexpected increment value: "+i);const s=t.node();if(O(null!=s,"Expected ChildrenNode.EMPTY_NODE for nulls"),!s.isLeafNode())return i;const r=s.getValue();return"number"!=typeof r?i:r+i},Hr=function(e,t,n){return zr(e,new Fr(t),n)};function zr(e,t,n){const i=e.getPriority().val(),s=Br(i,t.getImmediateChild(".priority"),n);let r;if(e.isLeafNode()){const i=e,r=Br(i.getValue(),t,n);return r!==i.getValue()||s!==i.getPriority().val()?new Si(r,Fi(s)):e}{const i=e;return r=i,s!==i.getPriority().val()&&(r=r.updatePriority(new Si(s))),i.forEachChild(ki,((e,i)=>{const s=zr(i,t.getImmediateChild(e),n);s!==i&&(r=r.updateImmediateChild(e,s))})),r}}
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
 */class Vr{constructor(e="",t=null,n={children:{},childCount:0}){this.name=e,this.parent=t,this.node=n}}function $r(e,t){let n=t instanceof $n?t:new $n(t),i=e,s=Kn(n);for(;null!==s;){const e=le(i.node.children,s)||{children:{},childCount:0};i=new Vr(s,i,e),n=Qn(n),s=Kn(n)}return i}function Yr(e){return e.node.value}function Kr(e,t){e.node.value=t,Zr(e)}function Gr(e){return e.node.childCount>0}function Qr(e,t){mn(e.node.children,((n,i)=>{t(new Vr(n,e,i))}))}function Jr(e,t,n,i){n&&!i&&t(e),Qr(e,(e=>{Jr(e,t,!0,i)})),n&&i&&t(e)}function Xr(e){return new $n(null===e.parent?e.name:Xr(e.parent)+"/"+e.name)}function Zr(e){null!==e.parent&&function(e,t,n){const i=function(e){return void 0===Yr(e)&&!Gr(e)}(n),s=ae(e.node.children,t);i&&s?(delete e.node.children[t],e.node.childCount--,Zr(e)):i||s||(e.node.children[t]=n.node,e.node.childCount++,Zr(e))}
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
 */(e.parent,e.name,e)}const eo=/[\[\].#$\/\u0000-\u001F\u007F]/,to=/[\[\].#$\u0000-\u001F\u007F]/,no=10485760,io=function(e){return"string"==typeof e&&0!==e.length&&!eo.test(e)},so=function(e){return"string"==typeof e&&0!==e.length&&!to.test(e)},ro=function(e,t,n){const i=n instanceof $n?new ri(n,e):n;if(void 0===t)throw new Error(e+"contains undefined "+ai(i));if("function"==typeof t)throw new Error(e+"contains a function "+ai(i)+" with contents = "+t.toString());if(ln(t))throw new Error(e+"contains "+t.toString()+" "+ai(i));if("string"==typeof t&&t.length>no/3&&_e(t)>no)throw new Error(e+"contains a string greater than "+no+" utf8 bytes "+ai(i)+" ('"+t.substring(0,50)+"...')");if(t&&"object"==typeof t){let n=!1,s=!1;if(mn(t,((t,r)=>{if(".value"===t)n=!0;else if(".priority"!==t&&".sv"!==t&&(s=!0,!io(t)))throw new Error(e+" contains an invalid key ("+t+") "+ai(i)+'.  Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"');var o,a;a=t,(o=i).parts_.length>0&&(o.byteLength_+=1),o.parts_.push(a),o.byteLength_+=_e(a),oi(o),ro(e,r,i),function(e){const t=e.parts_.pop();e.byteLength_-=_e(t),e.parts_.length>0&&(e.byteLength_-=1)}(i)})),n&&s)throw new Error(e+' contains ".value" child '+ai(i)+" in addition to actual children.")}},oo=function(e,t,n,i){if(!so(n))throw new Error(fe(e,t)+'was an invalid path = "'+n+'". Paths must be non-empty strings and can\'t contain ".", "#", "$", "[", or "]"')},ao=function(e,t){if(".info"===Kn(t))throw new Error(e+" failed = Can't modify data under /.info/")},lo=function(e,t){const n=t.path.toString();if("string"!=typeof t.repoInfo.host||0===t.repoInfo.host.length||!io(t.repoInfo.namespace)&&"localhost"!==t.repoInfo.host.split(":")[0]||0!==n.length&&!function(e){return e&&(e=e.replace(/^\/*\.info(\/|$)/,"/")),so(e)}(n))throw new Error(fe(e,"url")+'must be a valid firebase URL and the path can\'t contain ".", "#", "$", "[", or "]".')};
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
class co{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function ho(e,t){let n=null;for(let i=0;i<t.length;i++){const s=t[i],r=s.getPath();null===n||ii(r,n.path)||(e.eventLists_.push(n),n=null),null===n&&(n={events:[],path:r}),n.events.push(s)}n&&e.eventLists_.push(n)}function uo(e,t,n){ho(e,n),fo(e,(e=>ii(e,t)))}function po(e,t,n){ho(e,n),fo(e,(e=>si(e,t)||si(t,e)))}function fo(e,t){e.recursionDepth_++;let n=!0;for(let i=0;i<e.eventLists_.length;i++){const s=e.eventLists_[i];if(s){t(s.path)?(_o(e.eventLists_[i]),e.eventLists_[i]=null):n=!1}}n&&(e.eventLists_=[]),e.recursionDepth_--}function _o(e){for(let t=0;t<e.events.length;t++){const n=e.events[t];if(null!==n){e.events[t]=null;const i=n.getEventRunner();en&&nn("event: "+n.toString()),Cn(i)}}}
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
 */class mo{constructor(e,t,n,i){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=n,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new co,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Zi(),this.transactionQueueTree_=new Vr,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function go(e,t,n){if(e.stats_=jn(e.repoInfo_),e.forceRestClient_||("object"==typeof window&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0)e.server_=new Ji(e.repoInfo_,((t,n,i,s)=>{Co(e,t,n,i,s)}),e.authTokenProvider_,e.appCheckProvider_),setTimeout((()=>bo(e,!0)),0);else{if(null!=n){if("object"!=typeof n)throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{re(n)}catch(i){throw new Error("Invalid authOverride provided: "+i)}}e.persistentConnection_=new hi(e.repoInfo_,t,((t,n,i,s)=>{Co(e,t,n,i,s)}),(t=>{bo(e,t)}),(t=>{!function(e,t){mn(t,((t,n)=>{wo(e,t,n)}))}(e,t)}),e.authTokenProvider_,e.appCheckProvider_,n),e.server_=e.persistentConnection_}e.authTokenProvider_.addTokenChangeListener((t=>{e.server_.refreshAuthToken(t)})),e.appCheckProvider_.addTokenChangeListener((t=>{e.server_.refreshAppCheckToken(t.token)})),e.statsReporter_=function(e,t){const n=e.toString();return An[n]||(An[n]=t()),An[n]}(e.repoInfo_,(()=>new is(e.stats_,e.server_))),e.infoData_=new Xi,e.infoSyncTree_=new br({startListening:(t,n,i,s)=>{let r=[];const o=e.infoData_.getNode(t._path);return o.isEmpty()||(r=Tr(e.infoSyncTree_,t._path,o),setTimeout((()=>{s("ok")}),0)),r},stopListening:()=>{}}),wo(e,"connected",!1),e.serverSyncTree_=new br({startListening:(t,n,i,s)=>(e.server_.listen(t,i,n,((n,i)=>{const r=s(n,i);po(e.eventQueue_,t._path,r)})),[]),stopListening:(t,n)=>{e.server_.unlisten(t,n)}})}function yo(e){const t=e.infoData_.getNode(new $n(".info/serverTimeOffset")).val()||0;return(new Date).getTime()+t}function vo(e){return(t=(t={timestamp:yo(e)})||{}).timestamp=t.timestamp||(new Date).getTime(),t;var t}function Co(e,t,n,i,s){e.dataUpdateCount++;const r=new $n(t);n=e.interceptServerDataCallback_?e.interceptServerDataCallback_(t,n):n;let o=[];if(s)if(i){const t=he(n,(e=>Fi(e)));o=function(e,t,n,i){const s=jr(e,i);if(s){const i=Or(s),r=i.path,o=i.queryId,a=ni(r,t),l=Cs.fromObject(n);return Lr(e,r,new hs(os(o),a,l))}return[]}(e.serverSyncTree_,r,t,s)}else{const t=Fi(n);o=function(e,t,n,i){const s=jr(e,i);if(null!=s){const i=Or(s),r=i.path,o=i.queryId,a=ni(r,t);return Lr(e,r,new cs(os(o),a,n))}return[]}(e.serverSyncTree_,r,t,s)}else if(i){const t=he(n,(e=>Fi(e)));o=function(e,t,n){const i=Cs.fromObject(n);return kr(e,new hs({fromUser:!1,fromServer:!0,queryId:null,tagged:!1},t,i))}(e.serverSyncTree_,r,t)}else{const t=Fi(n);o=Tr(e.serverSyncTree_,r,t)}let a=r;o.length>0&&(a=ko(e,r)),po(e.eventQueue_,a,o)}function bo(e,t){wo(e,"connected",t),!1===t&&function(e){Eo(e,"onDisconnectEvents");const t=vo(e),n=Zi();ts(e.onDisconnect_,Yn(),((i,s)=>{const r=function(e,t,n,i){return zr(t,new qr(n,e),i)}(i,s,e.serverSyncTree_,t);es(n,i,r)}));let i=[];ts(n,Yn(),((t,n)=>{i=i.concat(Tr(e.serverSyncTree_,t,n));const s=Ao(e,t);ko(e,s)})),e.onDisconnect_=Zi(),po(e.eventQueue_,Yn(),i)}(e)}function wo(e,t,n){const i=new $n("/.info/"+t),s=Fi(n);e.infoData_.updateSnapshot(i,s);const r=Tr(e.infoSyncTree_,i,s);po(e.eventQueue_,i,r)}function Io(e){return e.nextWriteId_++}function To(e,t,n,i,s){Eo(e,"set",{path:t.toString(),value:n,priority:i});const r=vo(e),o=Fi(n,i),a=Sr(e.serverSyncTree_,t),l=Hr(o,a,r),c=Io(e),h=wr(e.serverSyncTree_,t,l,c,!0);ho(e.eventQueue_,h),e.server_.put(t.toString(),o.val(!0),((n,i)=>{const r="ok"===n;r||an("set at "+t+" failed: "+n);const o=Ir(e.serverSyncTree_,c,!r);po(e.eventQueue_,t,o),function(e,t,n,i){t&&Cn((()=>{if("ok"===n)t(null);else{const e=(n||"error").toUpperCase();let s=e;i&&(s+=": "+i);const r=new Error(s);r.code=e,t(r)}}))}(0,s,n,i)}));const u=Ao(e,t);ko(e,u),po(e.eventQueue_,u,[])}function Eo(e,...t){let n="";e.persistentConnection_&&(n=e.persistentConnection_.id+":"),nn(n,...t)}function xo(e,t,n){return Sr(e.serverSyncTree_,t,n)||Li.EMPTY_NODE}function So(e,t=e.transactionQueueTree_){if(t||Do(e,t),Yr(t)){const n=Po(e,t);O(n.length>0,"Sending zero length transaction queue");n.every((e=>0===e.status))&&function(e,t,n){const i=n.map((e=>e.currentWriteId)),s=xo(e,t,i);let r=s;const o=s.hash();for(let c=0;c<n.length;c++){const e=n[c];O(0===e.status,"tryToSendTransactionQueue_: items in queue should all be run."),e.status=1,e.retryCount++;const i=ni(t,e.path);r=r.updateChild(i,e.currentOutputSnapshotRaw)}const a=r.val(!0),l=t;e.server_.put(l.toString(),a,(i=>{Eo(e,"transaction put response",{path:l.toString(),status:i});let s=[];if("ok"===i){const i=[];for(let t=0;t<n.length;t++)n[t].status=2,s=s.concat(Ir(e.serverSyncTree_,n[t].currentWriteId)),n[t].onComplete&&i.push((()=>n[t].onComplete(null,!0,n[t].currentOutputSnapshotResolved))),n[t].unwatcher();Do(e,$r(e.transactionQueueTree_,t)),So(e,e.transactionQueueTree_),po(e.eventQueue_,t,s);for(let e=0;e<i.length;e++)Cn(i[e])}else{if("datastale"===i)for(let e=0;e<n.length;e++)3===n[e].status?n[e].status=4:n[e].status=0;else{an("transaction at "+l.toString()+" failed: "+i);for(let e=0;e<n.length;e++)n[e].status=4,n[e].abortReason=i}ko(e,t)}}),o)}(e,Xr(t),n)}else Gr(t)&&Qr(t,(t=>{So(e,t)}))}function ko(e,t){const n=No(e,t),i=Xr(n);return function(e,t,n){if(0===t.length)return;const i=[];let s=[];const r=t.filter((e=>0===e.status)),o=r.map((e=>e.currentWriteId));for(let l=0;l<t.length;l++){const r=t[l],c=ni(n,r.path);let h,u=!1;if(O(null!==c,"rerunTransactionsUnderNode_: relativePath should not be null."),4===r.status)u=!0,h=r.abortReason,s=s.concat(Ir(e.serverSyncTree_,r.currentWriteId,!0));else if(0===r.status)if(r.retryCount>=25)u=!0,h="maxretry",s=s.concat(Ir(e.serverSyncTree_,r.currentWriteId,!0));else{const n=xo(e,r.path,o);r.currentInputSnapshot=n;const i=t[l].update(n.val());if(void 0!==i){ro("transaction failed: Data returned ",i,r.path);let t=Fi(i);"object"==typeof i&&null!=i&&ae(i,".priority")||(t=t.updatePriority(n.getPriority()));const a=r.currentWriteId,l=vo(e),c=Hr(t,n,l);r.currentOutputSnapshotRaw=t,r.currentOutputSnapshotResolved=c,r.currentWriteId=Io(e),o.splice(o.indexOf(a),1),s=s.concat(wr(e.serverSyncTree_,r.path,c,r.currentWriteId,r.applyLocally)),s=s.concat(Ir(e.serverSyncTree_,a,!0))}else u=!0,h="nodata",s=s.concat(Ir(e.serverSyncTree_,r.currentWriteId,!0))}po(e.eventQueue_,n,s),s=[],u&&(t[l].status=2,a=t[l].unwatcher,setTimeout(a,Math.floor(0)),t[l].onComplete&&("nodata"===h?i.push((()=>t[l].onComplete(null,!1,t[l].currentInputSnapshot))):i.push((()=>t[l].onComplete(new Error(h),!1,null)))))}var a;Do(e,e.transactionQueueTree_);for(let l=0;l<i.length;l++)Cn(i[l]);So(e,e.transactionQueueTree_)}(e,Po(e,n),i),i}function No(e,t){let n,i=e.transactionQueueTree_;for(n=Kn(t);null!==n&&void 0===Yr(i);)i=$r(i,n),n=Kn(t=Qn(t));return i}function Po(e,t){const n=[];return Ro(e,t,n),n.sort(((e,t)=>e.order-t.order)),n}function Ro(e,t,n){const i=Yr(t);if(i)for(let s=0;s<i.length;s++)n.push(i[s]);Qr(t,(t=>{Ro(e,t,n)}))}function Do(e,t){const n=Yr(t);if(n){let e=0;for(let t=0;t<n.length;t++)2!==n[t].status&&(n[e]=n[t],e++);n.length=e,Kr(t,n.length>0?n:void 0)}Qr(t,(t=>{Do(e,t)}))}function Ao(e,t){const n=Xr(No(e,t)),i=$r(e.transactionQueueTree_,t);return function(e,t){let n=e.parent;for(;null!==n;){if(t(n))return!0;n=n.parent}}(i,(t=>{jo(e,t)})),jo(e,i),Jr(i,(t=>{jo(e,t)})),n}function jo(e,t){const n=Yr(t);if(n){const i=[];let s=[],r=-1;for(let t=0;t<n.length;t++)3===n[t].status||(1===n[t].status?(O(r===t-1,"All SENT items should be at beginning of queue."),r=t,n[t].status=3,n[t].abortReason="set"):(O(0===n[t].status,"Unexpected transaction status in abort"),n[t].unwatcher(),s=s.concat(Ir(e.serverSyncTree_,n[t].currentWriteId,!0)),n[t].onComplete&&i.push(n[t].onComplete.bind(null,new Error("set"),!1,null))));-1===r?Kr(t,void 0):n.length=r+1,po(e.eventQueue_,Xr(t),s);for(let e=0;e<i.length;e++)Cn(i[e])}}
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
 */const Oo=function(e,t){const n=Lo(e),i=n.namespace;"firebase.com"===n.domain&&on(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),i&&"undefined"!==i||"localhost"===n.domain||on("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||"undefined"!=typeof window&&window.location&&window.location.protocol&&-1!==window.location.protocol.indexOf("https:")&&an("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().");const s="ws"===n.scheme||"wss"===n.scheme;return{repoInfo:new Nn(n.host,n.secure,i,s,t,"",i!==n.subdomain),path:new $n(n.pathString)}},Lo=function(e){let t="",n="",i="",s="",r="",o=!0,a="https",l=443;if("string"==typeof e){let c=e.indexOf("//");c>=0&&(a=e.substring(0,c-1),e=e.substring(c+2));let h=e.indexOf("/");-1===h&&(h=e.length);let u=e.indexOf("?");-1===u&&(u=e.length),t=e.substring(0,Math.min(h,u)),h<u&&(s=function(e){let t="";const n=e.split("/");for(let s=0;s<n.length;s++)if(n[s].length>0){let e=n[s];try{e=decodeURIComponent(e.replace(/\+/g," "))}catch(i){}t+="/"+e}return t}(e.substring(h,u)));const d=function(e){const t={};"?"===e.charAt(0)&&(e=e.substring(1));for(const n of e.split("&")){if(0===n.length)continue;const i=n.split("=");2===i.length?t[decodeURIComponent(i[0])]=decodeURIComponent(i[1]):an(`Invalid query segment '${n}' in query '${e}'`)}return t}(e.substring(Math.min(e.length,u)));c=t.indexOf(":"),c>=0?(o="https"===a||"wss"===a,l=parseInt(t.substring(c+1),10)):c=t.length;const p=t.slice(0,c);if("localhost"===p.toLowerCase())n="localhost";else if(p.split(".").length<=2)n=p;else{const e=t.indexOf(".");i=t.substring(0,e).toLowerCase(),n=t.substring(e+1),r=i}"ns"in d&&(r=d.ns)}return{host:t,port:l,domain:n,subdomain:i,secure:o,scheme:a,pathString:s,namespace:r}};
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
class Mo{constructor(e,t,n,i){this.eventType=e,this.eventRegistration=t,this.snapshot=n,this.prevName=i}getPath(){const e=this.snapshot.ref;return"value"===this.eventType?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+re(this.snapshot.exportVal())}}class Fo{constructor(e,t,n){this.eventRegistration=e,this.error=t,this.path=n}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}
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
 */class qo{constructor(e,t){this.snapshotCallback=e,this.cancelCallback=t}onValue(e,t){this.snapshotCallback.call(null,e,t)}onCancel(e){return O(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||void 0!==this.snapshotCallback.userCallback&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}
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
 */class Bo{constructor(e,t,n,i){this._repo=e,this._path=t,this._queryParams=n,this._orderByCalled=i}get key(){return ti(this._path)?null:Jn(this._path)}get ref(){return new Wo(this._repo,this._path)}get _queryIdentifier(){const e=Qi(this._queryParams),t=fn(e);return"{}"===t?"default":t}get _queryObject(){return Qi(this._queryParams)}isEqual(e){if(!((e=me(e))instanceof Bo))return!1;const t=this._repo===e._repo,n=ii(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return t&&n&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+function(e){let t="";for(let n=e.pieceNum_;n<e.pieces_.length;n++)""!==e.pieces_[n]&&(t+="/"+encodeURIComponent(String(e.pieces_[n])));return t||"/"}(this._path)}}class Wo extends Bo{constructor(e,t){super(e,t,new Ki,!1)}get parent(){const e=Zn(this._path);return null===e?null:new Wo(this._repo,e)}get root(){let e=this;for(;null!==e.parent;)e=e.parent;return e}}class Uo{constructor(e,t,n){this._node=e,this.ref=t,this._index=n}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const t=new $n(e),n=zo(this.ref,e);return new Uo(this._node.getChild(t),n,ki)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){if(this._node.isLeafNode())return!1;return!!this._node.forEachChild(this._index,((t,n)=>e(new Uo(n,zo(this.ref,t),ki))))}hasChild(e){const t=new $n(e);return!this._node.getChild(t).isEmpty()}hasChildren(){return!this._node.isLeafNode()&&!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function Ho(e,t){return(e=me(e))._checkNotDeleted("ref"),void 0!==t?zo(e._root,t):e._root}function zo(e,t){var n,i,s;return null===Kn((e=me(e))._path)?(n="child",i="path",(s=t)&&(s=s.replace(/^\/*\.info(\/|$)/,"/")),oo(n,i,s)):oo("child","path",t),new Wo(e._repo,ei(e._path,t))}function Vo(e,t){e=me(e),ao("set",e._path),function(e,t,n){ro(fe(e,"value"),t,n)}("set",t,e._path);const n=new G;return To(e._repo,e._path,t,null,n.wrapCallback((()=>{}))),n.promise}class $o{constructor(e){this.callbackContext=e}respondsTo(e){return"value"===e}createEvent(e,t){const n=t._queryParams.getIndex();return new Mo("value",this,new Uo(e.snapshotNode,new Wo(t._repo,t._path),n))}getEventRunner(e){return"cancel"===e.getEventType()?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new Fo(this,e,t):null}matches(e){return e instanceof $o&&(!e.callbackContext||!this.callbackContext||e.callbackContext.matches(this.callbackContext))}hasAnyCallback(){return null!==this.callbackContext}}function Yo(e,t,n,i,s){const r=new qo(n,void 0),o=new $o(r);return function(e,t,n){let i;i=".info"===Kn(t._path)?xr(e.infoSyncTree_,t,n):xr(e.serverSyncTree_,t,n),uo(e.eventQueue_,t._path,i)}(e._repo,e,o),()=>function(e,t,n){let i;i=".info"===Kn(t._path)?Er(e.infoSyncTree_,t,n):Er(e.serverSyncTree_,t,n),uo(e.eventQueue_,t._path,i)}(e._repo,e,o)}function Ko(e,t,n,i){return Yo(e,0,t)}!function(e){O(!lr,"__referenceConstructor has already been defined"),lr=e}(Wo),function(e){O(!cr,"__referenceConstructor has already been defined"),cr=e}(Wo);
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
const Go={};let Qo=!1;function Jo(e,t,n,i,s){let r=i||e.options.databaseURL;void 0===r&&(e.options.projectId||on("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),nn("Using default host for project ",e.options.projectId),r=`${e.options.projectId}-default-rtdb.firebaseio.com`);let o,a=Oo(r,s),l=a.repoInfo;"undefined"!=typeof process&&Wt&&(o=Wt.FIREBASE_DATABASE_EMULATOR_HOST),o?(r=`http://${o}?ns=${l.namespace}`,a=Oo(r,s),l=a.repoInfo):a.repoInfo.secure;const c=new In(e.name,e.options,t);lo("Invalid Firebase Database URL",a),ti(a.path)||on("Database URL must point to the root of a Firebase Database (not including a child path).");const h=function(e,t,n,i){let s=Go[t.name];s||(s={},Go[t.name]=s);let r=s[e.toURLString()];r&&on("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call.");return r=new mo(e,Qo,n,i),s[e.toURLString()]=r,r}(l,e,c,new wn(e,n));return new Xo(h,e)}class Xo{constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(go(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Wo(this._repo,Yn())),this._rootInternal}_delete(){return null!==this._rootInternal&&(!function(e,t){const n=Go[t];n&&n[e.key]===e||on(`Database ${t}(${e.repoInfo_}) has already been deleted.`),function(e){e.persistentConnection_&&e.persistentConnection_.interrupt("repo_interrupt")}(e),delete n[e.key]}(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){null===this._rootInternal&&on("Cannot call "+e+" on a deleted database.")}}hi.prototype.simpleListen=function(e,t){this.sendRequest("q",{p:e},t)},hi.prototype.echo=function(e,t){this.sendRequest("echo",{d:e},t)},
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
function(e){zt="11.9.0",xt(new ge("database",((e,{instanceIdentifier:t})=>Jo(e.getProvider("app").getImmediate(),e.getProvider("auth-internal"),e.getProvider("app-check-internal"),t)),"PUBLIC").setMultipleInstances(!0)),Pt(Ut,Ht,e),Pt(Ut,Ht,"esm2017")}();
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
Pt("firebase","11.9.1","app");const Zo=function(e=function(e=Ct){const t=wt.get(e);if(!t&&e===Ct&&K())return Nt();if(!t)throw St.create("no-app",{appName:e});return t}(),t){const n=function(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}(e,"database").getImmediate({identifier:t});if(!n._instanceStarted){const e=Y("database");e&&function(e,t,n,i={}){e=me(e),e._checkNotDeleted("useEmulator");const s=`${t}:${n}`,r=e._repoInternal;if(e._instanceStarted){if(s===e._repoInternal.repoInfo_.host&&ue(i,r.repoInfo_.emulatorOptions))return;on("connectDatabaseEmulator() cannot initialize or alter the emulator configuration after the database instance has started.")}let o;if(r.repoInfo_.nodeAdmin)i.mockUserToken&&on('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),o=new Tn(Tn.OWNER);else if(i.mockUserToken){const t="string"==typeof i.mockUserToken?i.mockUserToken:
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
function(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n=t||"demo-project",i=e.iat||0,s=e.sub||e.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const r=Object.assign({iss:`https://securetoken.google.com/${n}`,aud:n,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},e);return[W(JSON.stringify({alg:"none",type:"JWT"})),W(JSON.stringify(r)),""].join(".")}(i.mockUserToken,e.app.options.projectId);o=new Tn(t)}Q(t)&&(!async function(e){(await fetch(e,{credentials:"include"})).ok}(t),Z("Database",!0));!function(e,t,n,i){const s=t.lastIndexOf(":"),r=Q(t.substring(0,s));e.repoInfo_=new Nn(t,r,e.repoInfo_.namespace,e.repoInfo_.webSocketOnly,e.repoInfo_.nodeAdmin,e.repoInfo_.persistenceKey,e.repoInfo_.includeNamespaceInQueryParams,!0,n),i&&(e.authTokenProvider_=i)}(r,s,i,o)}(n,...e)}return n}(Nt({apiKey:"AIzaSyB0RZF4QLx8ybjXSo0mwd3jcuct-CQ45qc",authDomain:"fb-aio.firebaseapp.com",databaseURL:"https://fb-aio-default-rtdb.asia-southeast1.firebasedatabase.app",projectId:"fb-aio",storageBucket:"fb-aio.firebasestorage.app",messagingSenderId:"77035215087",appId:"1:77035215087:web:f98dc90b21c7edb905e31a"}));var ea=(e=>(e.Request="request",e.Pending="pending",e.InProgress="in_progress",e.Done="done",e.Canceled="canceled",e))(ea||{});const ta=a((()=>l((()=>import("./IconSelector-CyeLBT7W.js")),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9]),import.meta.url)),{fallback:I}),{Text:na}=g,ia=e=>Object.fromEntries(Object.entries(e).filter((([e,t])=>void 0!==t)));function sa(){const{ti:a}=h(),{message:l}=u(),I=e(t.profile),[A,j]=n.useState(!0),[O,L]=T("ComingSoon.search",""),[M,F]=T("ComingSoon.votes",{},!0),[q,B]=T("ComingSoon.comments",{},!0),[W,U]=T("ComingSoon.requests",[],!0),[H,z]=n.useState(!1),[V,$]=T("ComingSoon.title",""),[Y,K]=T("ComingSoon.description",""),[G,Q]=T("ComingSoon.icon","fa-solid fa-lightbulb"),[J,X]=T("ComingSoon.status",ea.Request),[Z,ee]=T("ComingSoon.try",""),[te,ne]=T("ComingSoon.discuss",""),[ie,se]=n.useState(!1),[re,oe]=n.useState(null),[ae,le]=T("ComingSoon.filterBy","all"),[ce,he]=T("ComingSoon.sortBy","votes"),[ue,de]=T("ComingSoon.sortOrder","asc"),pe=(null==I?void 0:I.uid)==i.me.uid;n.useEffect((()=>{d("ComingSoon:onLoad")}),[]),n.useEffect((()=>{const e=Ko(Ho(Zo,"feature_requests"),(e=>{const t=e.val()||{},n=Object.entries(t).map((([e,t])=>({id:e,title:t.title,description:t.description,icon:t.icon||"fa-solid fa-lightbulb",status:t.status||ea.Request,createdAt:t.createdAt||0,updatedAt:t.updatedAt||0,discuss:t.discuss,try:t.try,uid:t.uid,name:t.name})));U(n),j(!1)}));return()=>e()}),[]),n.useEffect((()=>{const e=Ko(Ho(Zo,"feature_votes"),(e=>{const t=e.val()||{};F(t)}));return()=>{e()}}),[]),n.useEffect((()=>{const e=Ko(Ho(Zo,"feature_comments"),(e=>{const t=e.val()||{},n={};Object.entries(t).forEach((([e,t])=>{n[e]=Object.entries(t).map((([e,t])=>({id:t.id,featureId:t.featureId,content:t.content,createdAt:t.createdAt||0,updatedAt:t.updatedAt||0,name:t.name||"Anonymous",uid:t.uid||""})))})),B(n)}));return()=>{e()}}),[]);const fe=()=>{z(!1),oe(null)},[_e,me]=n.useState(!1),[ge,ye]=n.useState(null),[ve,Ce]=n.useState(""),[be,we]=n.useState(null),[Ie,Te]=n.useState(!1),Ee=n.useMemo((()=>{if(!ge)return[];return q[ge.id]||[]}),[ge,q]),xe=e=>{const t=W.find((t=>t.id===e));t&&(e=>{ye(e),me(!0),Ce(""),we(null)})(t)},Se=n.useMemo((()=>!re||(V!==a(re.title)||Y!==a(re.description)||G!==(re.icon||"fa-solid fa-lightbulb")||J!==(re.status||ea.Request)||pe&&Z!==(re.try||"")||pe&&te!==(re.discuss||""))),[re,V,Y,G,J,Z,te,a,pe]),ke=async e=>{try{await(t=Ho(Zo,`feature_requests/${e}`),ao("remove",t._path),Vo(t,null)),l.success(a({en:"Request deleted!",vi:"Đã xóa yêu cầu!"}))}catch(n){l.error(a({en:"Failed to delete request.",vi:"Xóa yêu cầu thất bại."}))}var t},Ne=e=>{switch(e){case ea.Request:return s.jsx(_,{color:"default",icon:s.jsx("i",{className:"fa-solid fa-pen-to-square"}),children:" "+a({en:"Request",vi:"Yêu cầu"})});case ea.Pending:return s.jsx(_,{color:"warning",icon:s.jsx("i",{className:"fa-solid fa-thumbs-up"}),children:" "+a({en:"Approved",vi:"Đã phê duyệt"})});case ea.InProgress:return s.jsx(_,{color:"processing",icon:s.jsx("i",{className:"fa-solid fa-forward"}),children:" "+a({en:"In progress",vi:"Đang phát triển"})});case ea.Done:return s.jsx(_,{color:"success",icon:s.jsx("i",{className:"fa-solid fa-check"}),children:" "+a({en:"Done",vi:"Hoàn thành"})});case ea.Canceled:return s.jsx(_,{color:"error",icon:s.jsx("i",{className:"fa-solid fa-ban"}),children:" "+a({en:"Canceled",vi:"Đã hủy"})})}},Pe=e=>s.jsxs(f,{direction:"vertical",style:{width:"100%",maxWidth:650,margin:"0 auto",marginBottom:10},children:[0===e.length&&s.jsx(N,{description:a({en:"No features",vi:"Không có tính năng"}),image:N.PRESENTED_IMAGE_SIMPLE}),e.map((e=>{var t,n;const i=(e=>{var t;return(null==I?void 0:I.uid)&&(null==(t=M[e])?void 0:t.includes(I.uid))||!1})(e.id),l=e.uid&&(null==I?void 0:I.uid)&&e.uid===I.uid;return e.uid,s.jsx(P,{children:s.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10},children:[s.jsxs(f,{direction:"vertical",style:{flex:1,flexGrow:1,flexShrink:1},children:[s.jsxs(f,{wrap:!0,style:{display:"flex",alignItems:"center",justifyContent:"space-between"},children:[s.jsxs(g.Title,{level:5,style:{margin:0},children:[s.jsx("i",{className:e.icon+" fa-xl",style:{marginRight:10}})," ",a(e.title)]}),Ne(e.status)]}),s.jsx(na,{type:"secondary",style:{},children:a(e.description)}),s.jsxs(f,{wrap:!0,size:3,children:[!!e.createdAt&&s.jsx(v,{title:a({en:"Created at",vi:"Tạo lúc"})+" "+C(e.createdAt),children:s.jsxs(_,{color:"default",children:[s.jsx("i",{className:"fa-solid fa-clock"})," ",y(e.createdAt)]})}),!!e.updatedAt&&s.jsx(v,{title:a({en:"Updated at",vi:"Cập nhật lúc"})+" "+C(e.updatedAt),children:s.jsxs(_,{color:"processing",children:[s.jsx("i",{className:"fa-solid fa-rotate"})," ",y(e.updatedAt)]})}),!!e.try&&s.jsxs(r,{to:e.try,children:[a({en:"Try",vi:"Dùng thử"})," ",s.jsx("i",{className:"fa-solid fa-arrow-right"})]}),!!e.discuss&&s.jsxs(r,{to:e.discuss,target:"_blank",children:[a({en:"Discuss",vi:"Thảo luận"})," ",s.jsx("i",{className:"fa-solid fa-arrow-up-right-from-square"})]})]})]}),s.jsxs(f,{direction:"vertical",children:[s.jsx(o,{type:"default",onClick:()=>(async e=>{if(!(null==I?void 0:I.uid))return;const t=Ho(Zo,`feature_votes/${e}`),n=M[e]||[];if(n.includes(I.uid)){const i=n.filter((e=>e!==I.uid));await Vo(t,i),d("ComingSoon:unVote:"+e)}else await Vo(t,[...n,I.uid]),d("ComingSoon:vote:"+e)})(e.id),disabled:!(null==I?void 0:I.uid),style:{width:60,height:60,color:i?"#1890ff":void 0,border:i?"2px solid #1890ff":void 0,backgroundColor:i?"#1890ff22":void 0,borderRadius:10},children:s.jsxs(f,{direction:"vertical",size:0,children:[s.jsx("i",{className:"fa-solid fa-caret-up fa-lg"}),s.jsx(g.Text,{strong:i,style:{color:i?"#1890ff":void 0},children:(null==(t=M[e.id])?void 0:t.length)||0})]})}),s.jsx(o,{icon:s.jsx("i",{className:"fa-regular fa-comment"}),onClick:()=>xe(e.id),style:{width:"100%"},children:(null==(n=q[e.id])?void 0:n.length)||""}),(l||pe)&&s.jsxs(f.Compact,{children:[s.jsx(o,{icon:s.jsx("i",{className:"fa-solid fa-pen-to-square"}),onClick:()=>{return oe(t=e),$(a(t.title)),K(a(t.description)),Q(t.icon||"fa-solid fa-lightbulb"),X(t.status||ea.Request),ee(t.try||""),ne(t.discuss||""),void z(!0);var t}}),s.jsx(R,{title:a({en:"Delete feature request?",vi:"Xóa yêu cầu tính năng"}),description:a({en:"This action cannot be undone.",vi:"Hành động này không thể được hoàn tác"}),okType:"danger",okText:a({en:"Delete",vi:"Xóa"}),cancelText:a({en:"Cancel",vi:"Hủy"}),onConfirm:()=>ke(e.id),children:s.jsx(o,{icon:s.jsx("i",{className:"fa-solid fa-trash"})})})]})]})]})},e.id)}))]}),Re=n.useMemo((()=>[...W].filter((e=>{var t,n;return"yours"===ae?e.uid===(null==I?void 0:I.uid):"voted"===ae?null==(t=M[e.id])?void 0:t.includes(null==I?void 0:I.uid):"commented"!==ae||(null==(n=q[e.id])?void 0:n.find((e=>e.uid===(null==I?void 0:I.uid))))})).filter((e=>!O||p(O,e.title+e.description))).sort(((e,t)=>{var n,i,s,r;const o="asc"===ue?e:t,a="asc"===ue?t:e;return"createdAt"===ce?(o.createdAt||0)-(a.createdAt||0):"updatedAt"===ce?(o.updatedAt||0)-(a.updatedAt||0):"comments"===ce?((null==(n=q[a.id])?void 0:n.length)||0)-((null==(i=q[o.id])?void 0:i.length)||0):"votes"===ce?((null==(s=M[a.id])?void 0:s.length)||0)-((null==(r=M[o.id])?void 0:r.length)||0):0}))),[M,ce,ue,W,ae,O]),De=[{key:"all",label:"✨ "+a({en:"All",vi:"Tất cả"}),type:null},{key:"requests",label:"📝 "+a({en:"Requests",vi:"Yêu cầu"}),type:ea.Request},{key:"pending",label:"👍 "+a({en:"Approved",vi:"Đã phê duyệt"}),type:ea.Pending},{key:"inProgress",label:"🔄 "+a({en:"In progress",vi:"Đang phát triển"}),type:ea.InProgress},{key:"done",label:"✅ "+a({en:"Done",vi:"Hoàn thành"}),type:ea.Done},{key:"canceled",label:"❌ "+a({en:"Canceled",vi:"Đã hủy"}),type:ea.Canceled}].map((e=>{const t=e.type?Re.filter((t=>t.status===e.type)):Re;return{...e,icon:void 0,label:s.jsxs(f,{size:3,children:[e.label," ",s.jsx(_,{color:"default",children:t.length})]}),children:Pe(t)}}));return s.jsxs(c,{title:a({en:"Coming soon",vi:"Sắp ra mắt"})+" 🌠",mode:"center",children:[s.jsx(m,{type:"info",showIcon:!0,message:s.jsxs(s.Fragment,{children:[a({en:"Priority order: Based on VIP members, the higher the VIP package, the higher the priority",vi:"Thứ tự ưu tiên: Dựa trên thành viên VIP, gói VIP cao hơn sẽ được ưu tiên làm trước"})," 💎 ",s.jsxs(r,{to:"/vip",children:[a({en:"Unlock VIP",vi:"Xem VIP"})," ",s.jsx("i",{className:"fa-solid fa-arrow-right"})]})]}),style:{marginBottom:10}}),!(null==I?void 0:I.uid)&&s.jsx(m,{type:"warning",showIcon:!0,message:a({en:s.jsxs(s.Fragment,{children:["Install"," ",s.jsx("a",{href:i.FB_AIO.webstore,target:"_blank",children:"FB AIO"})," ","and"," ",s.jsx("a",{href:"https://fb.com",target:"_blank",children:"Login to Facebook"})," ","to request / upvote / comment features."]}),vi:s.jsxs(s.Fragment,{children:["Cài"," ",s.jsx("a",{href:i.FB_AIO.webstore,target:"_blank",children:"FB AIO"})," ","và"," ",s.jsx("a",{href:"https://fb.com",target:"_blank",children:"Đăng nhập Facebook"})," ","để yêu cầu / bình chọn / bình luận tính năng."]})}),style:{marginBottom:10}}),s.jsx(E,{type:"new",children:s.jsx(o,{size:"large",className:"highlight-text",type:"primary",icon:s.jsx("i",{className:"fa-solid fa-plus"}),style:{marginBottom:16},onClick:()=>{oe(null),$(""),K(""),X(ea.Request),ee(""),ne(""),z(!0)},disabled:!(null==I?void 0:I.uid),children:a({en:"Create feature request",vi:"Tạo yêu cầu tính năng"})})}),s.jsx(x,{open:H,title:a(re?{en:"Edit feature request",vi:"Chỉnh sửa yêu cầu"}:{en:"Request a new feature",vi:"Yêu cầu tính năng mới"}),onCancel:fe,onOk:async()=>{if(V.trim())if(Y.trim())if(V.length>100)l.error(a({en:"Title too long (max 100 characters)",vi:"Tiêu đề quá dài (tối đa 100 ký tự)"}));else if(Y.length>500)l.error(a({en:"Description too long (max 500 characters)",vi:"Mô tả quá dài (tối đa 500 ký tự)"}));else if(null==I?void 0:I.uid){se(!0);try{if(re){let e=re.id;const t=Ho(Zo,`feature_requests/${e}`);await Vo(t,ia({...re,title:V,description:Y,icon:G,uid:re.uid||I.uid,name:re.name||I.name||"",createdAt:re.createdAt||Date.now(),updatedAt:Date.now(),status:J,try:pe?Z:re.try,discuss:pe?te:re.discuss})),l.success(a({en:"Request updated!",vi:"Đã cập nhật yêu cầu!"}))}else{if(W.filter((e=>e.uid===I.uid)).length>=5)return void l.error(a({en:"You can only submit up to 5 requests.",vi:"Bạn chỉ có thể gửi tối đa 5 yêu cầu."}));const e=Ho(Zo,`feature_requests/${I.uid}_${Date.now()}`);await Vo(e,ia({title:V,description:Y,icon:G,uid:I.uid,name:I.name||"",createdAt:Date.now(),status:J,try:pe?Z:void 0,discuss:pe?te:void 0})),l.success(a({en:"Request submitted!",vi:"Đã gửi yêu cầu!"}))}fe()}catch(e){l.error(a(re?{en:"Failed to update request.",vi:"Cập nhật yêu cầu thất bại."}:{en:"Failed to submit request.",vi:"Gửi yêu cầu thất bại."})+" "+e)}finally{se(!1)}}else l.error(a({en:"You must be logged in to submit a request.",vi:"Bạn cần đăng nhập để gửi yêu cầu."}));else l.error(a({en:"Please enter a description",vi:"Vui lòng nhập mô tả"}));else l.error(a({en:"Please enter a title",vi:"Vui lòng nhập tiêu đề"}))},confirmLoading:ie,okText:a(re?{en:"Update",vi:"Cập nhật"}:{en:"Submit",vi:"Gửi"}),cancelText:a({en:"Cancel",vi:"Hủy"}),okButtonProps:re?{disabled:!Se}:{},children:s.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:16},children:[s.jsxs("div",{children:[s.jsx("label",{style:{fontWeight:500},children:a({en:"Icon",vi:"Biểu tượng"})}),s.jsx("br",{}),s.jsx(ta,{icon:G,setIcon:Q})]}),s.jsxs("div",{children:[s.jsx("label",{style:{fontWeight:500},children:a({en:"Title",vi:"Tiêu đề"})}),s.jsx(S,{maxLength:100,value:V,onChange:e=>$(e.target.value),placeholder:a({en:"Feature title",vi:"Tiêu đề tính năng"})})]}),s.jsxs("div",{children:[s.jsx("label",{style:{fontWeight:500},children:a({en:"Description",vi:"Mô tả"})}),s.jsx(S.TextArea,{maxLength:500,rows:4,value:Y,onChange:e=>K(e.target.value),placeholder:a({en:"Describe your feature request",vi:"Mô tả tính năng bạn muốn"})})]}),pe&&s.jsxs(s.Fragment,{children:[s.jsxs("div",{children:[s.jsx("label",{style:{fontWeight:500},children:a({en:"Status",vi:"Trạng thái"})}),s.jsx(k,{value:J,onChange:X,style:{width:"100%"},options:[{value:ea.Request,label:a({en:"Request",vi:"Yêu cầu"})},{value:ea.Pending,label:a({en:"Pending",vi:"Đã phê duyệt"})},{value:ea.InProgress,label:a({en:"In progress",vi:"Đang phát triển"})},{value:ea.Done,label:a({en:"Done",vi:"Hoàn thành"})},{value:ea.Canceled,label:a({en:"Canceled",vi:"Đã hủy"})}]})]}),s.jsxs("div",{children:[s.jsx("label",{style:{fontWeight:500},children:a({en:"Try (URL)",vi:"Dùng thử (URL)"})}),s.jsx(S,{value:Z,onChange:e=>ee(e.target.value),placeholder:a({en:"Try link (optional)",vi:"Link dùng thử (không bắt buộc)"})})]}),s.jsxs("div",{children:[s.jsx("label",{style:{fontWeight:500},children:a({en:"Discuss (URL)",vi:"Thảo luận (URL)"})}),s.jsx(S,{value:te,onChange:e=>ne(e.target.value),placeholder:a({en:"Discuss link (optional)",vi:"Link thảo luận (không bắt buộc)"})})]})]})]})}),s.jsxs(x,{open:_e,title:a({en:"Comments",vi:"Bình luận"}),onCancel:()=>{me(!1),ye(null),Ce(""),we(null)},footer:null,width:600,children:[ge&&s.jsxs("div",{style:{marginBottom:16},children:[s.jsxs(g.Title,{level:5,children:[s.jsx("i",{className:ge.icon+" fa-xl",style:{marginRight:10}}),a(ge.title)]}),s.jsx(na,{type:"secondary",children:a(ge.description)}),s.jsxs("div",{style:{marginTop:8},children:[Ne(ge.status),!!ge.createdAt&&s.jsxs(_,{color:"default",style:{marginLeft:8},children:[s.jsx("i",{className:"fa-solid fa-clock"})," ",y(ge.createdAt)]})]}),ge.uid&&s.jsx("div",{style:{marginTop:8},children:s.jsxs(na,{type:"secondary",children:[a({en:"Author",vi:"Tác giả"}),":"," ",s.jsx("a",{href:`https://fb.com/${ge.uid}`,target:"_blank",children:ge.name||"Anonymous"})]})})]}),s.jsx(m,{type:"warning",showIcon:!0,message:a({en:"Comments are not moderated. Please do not spam, will be banned by admin.",vi:"Bình luận không được kiểm duyệt. Vui lòng không spam, sẽ bị admin ban."}),style:{marginBottom:16}}),s.jsx("div",{style:{maxHeight:400,overflowY:"auto",marginBottom:16},children:0===Ee.length?s.jsx(N,{description:a({en:"No comments yet",vi:"Chưa có bình luận"})}):s.jsx(f,{direction:"vertical",style:{width:"100%"},children:Ee.map((e=>s.jsx(P,{children:s.jsxs(f,{direction:"vertical",style:{width:"100%"},children:[s.jsxs(f,{align:"center",style:{justifyContent:"space-between",width:"100%"},children:[s.jsxs(na,{strong:!0,children:[s.jsx("a",{href:`https://fb.com/${e.uid}`,target:"_blank",children:e.name||"-Anonymous-"})," ",e.uid===i.me.uid&&s.jsxs(_,{color:"success",children:[s.jsx("i",{className:"fa-solid fa-user"})," Admin"]}),e.uid===(null==I?void 0:I.uid)&&s.jsxs(_,{color:"default",children:[s.jsx("i",{className:"fa-solid fa-user"})," ",a({en:"You",vi:"Bạn"})]}),e.uid===ge.uid&&s.jsxs(_,{color:"default",children:[s.jsx("i",{className:"fa-solid fa-user"})," ",a({en:"Author",vi:"Tác giả"})]})]}),s.jsx(v,{title:s.jsxs(f,{direction:"vertical",size:0,children:[a({en:"Created at",vi:"Ngày tạo"}),C(e.createdAt),e.updatedAt&&e.updatedAt!==e.createdAt&&s.jsxs(s.Fragment,{children:[a({en:"Updated at",vi:"Ngày cập nhật"}),C(e.updatedAt)]})]}),children:s.jsx(na,{type:"secondary",style:{fontSize:12},children:e.updatedAt&&e.updatedAt!==e.createdAt?y(e.updatedAt):y(e.createdAt)})})]}),s.jsx(na,{children:e.content}),((null==I?void 0:I.uid)===e.uid||pe)&&s.jsxs(f,{children:[s.jsx(o,{size:"small",icon:s.jsx("i",{className:"fa-solid fa-pen-to-square"}),onClick:()=>{return t=e.id,n=e.content,we(t),void Ce(n);var t,n},children:a({en:"Edit",vi:"Sửa"})}),s.jsx(R,{title:a({en:"Delete comment?",vi:"Xóa bình luận?"}),okType:"danger",okText:a({en:"Delete",vi:"Xóa"}),cancelText:a({en:"Cancel",vi:"Hủy"}),onConfirm:()=>(async e=>{if(ge){Te(!0);try{const t=(q[ge.id]||[]).filter((t=>t.id!==e));await Vo(Ho(Zo,`feature_comments/${ge.id}`),t)}catch(t){l.error(a({en:"Failed to delete comment.",vi:"Xóa bình luận thất bại."}))}finally{Te(!1)}}})(e.id),children:s.jsx(o,{size:"small",icon:s.jsx("i",{className:"fa-solid fa-trash"}),children:a({en:"Delete",vi:"Xóa"})})})]})]})},e.id)))})}),!(null==I?void 0:I.uid)&&s.jsx(m,{type:"info",showIcon:!0,message:a({en:"You must be logged in to Facebook to comment.",vi:"Bạn cần đăng nhập Facebook để bình luận."})}),s.jsx(S.TextArea,{rows:3,maxLength:300,value:ve,onChange:e=>Ce(e.target.value),placeholder:a({en:"Add a comment...",vi:"Thêm bình luận..."}),disabled:Ie||!(null==I?void 0:I.uid)}),s.jsxs("div",{style:{display:"flex",justifyContent:"flex-end",marginTop:8},children:[be&&s.jsx(o,{style:{marginRight:8},onClick:()=>{we(null),Ce("")},disabled:Ie,children:a({en:"Cancel edit",vi:"Hủy sửa"})}),s.jsx(o,{type:"primary",loading:Ie,onClick:async()=>{if(!(null==I?void 0:I.uid))return void l.error(a({en:"You must be logged in to comment.",vi:"Bạn cần đăng nhập để bình luận."}));if(!ge)return;const e=ve.trim();if(e){Te(!0);try{const t=q[ge.id]||[];let n;be?(n=t.map((t=>t.id===be?{...t,content:e,updatedAt:Date.now()}:t)),console.log("newArr",t.map((e=>e.id)),n.map((e=>e.id)),q)):n=[...t,{id:w(),featureId:ge.id,uid:I.uid,name:I.name||"",content:e,createdAt:Date.now(),updatedAt:Date.now()}],await Vo(Ho(Zo,`feature_comments/${ge.id}`),n),Ce(""),we(null)}catch(t){l.error(a({en:"Failed to submit comment.",vi:"Gửi bình luận thất bại."})+" "+t)}finally{Te(!1)}}else l.error(a({en:"Comment cannot be empty.",vi:"Bình luận không được để trống."}))},disabled:!(null==I?void 0:I.uid),children:a(be?{en:"Update comment",vi:"Cập nhật bình luận"}:{en:"Add comment",vi:"Thêm bình luận"})})]})]}),A&&s.jsxs("div",{style:{display:"flex",justifyContent:"center",marginBottom:16,alignItems:"center",gap:10},children:[s.jsx(b,{}),s.jsx(na,{children:a({en:"Loading...",vi:"Đang tải..."})})]}),s.jsxs("div",{style:{maxWidth:650,width:"100%",margin:"0 auto",display:"flex",flexDirection:"column",alignItems:"center"},children:[s.jsx(S.Search,{placeholder:a({en:"Search",vi:"Tìm kiếm"}),onChange:e=>L(e.target.value),value:O,style:{marginBottom:16,maxWidth:300},allowClear:!0}),s.jsxs("div",{style:{width:"100%",display:"flex",justifyContent:"space-between",marginBottom:16},children:[s.jsx(k,{placeholder:a({en:"Filter by",vi:"Lọc theo"}),value:ae,onChange:le,style:{minWidth:140},popupMatchSelectWidth:!1,options:[{value:"title",label:a({en:"Filter by",vi:"Lọc theo"}),disabled:!0},{value:"all",label:s.jsxs(f,{children:[s.jsx("i",{className:"fa-solid fa-list"}),a({en:"All",vi:"Tất cả"})]})},{value:"yours",label:s.jsxs(f,{children:[s.jsx("i",{className:"fa-solid fa-user"}),a({en:"Yours requests",vi:"Yêu cầu của bạn"})]})},{value:"voted",label:s.jsxs(f,{children:[s.jsx("i",{className:"fa-solid fa-thumbs-up"}),a({en:"You voted",vi:"Bạn bình chọn"})]})},{value:"commented",label:s.jsxs(f,{children:[s.jsx("i",{className:"fa-solid fa-comment"}),a({en:"You commented",vi:"Bạn bình luận"})]})}],suffixIcon:s.jsx("i",{className:"fa-solid fa-filter"})}),s.jsxs(f.Compact,{children:[s.jsx(k,{value:ce,onChange:he,style:{minWidth:140},popupMatchSelectWidth:!1,options:[{value:"title",label:a({en:"Sort by",vi:"Sắp xếp theo"}),disabled:!0},{value:"createdAt",label:s.jsxs(f,{children:[s.jsx("i",{className:"fa-solid fa-clock"}),a({en:"Created at",vi:"Ngày tạo"})]})},{value:"updatedAt",label:s.jsxs(f,{children:[s.jsx("i",{className:"fa-solid fa-rotate"}),a({en:"Updated at",vi:"Ngày cập nhật"})]})},{value:"votes",label:s.jsxs(f,{children:[s.jsx("i",{className:"fa-solid fa-thumbs-up"}),a({en:"Votes",vi:"Bình chọn"})]})},{value:"comments",label:s.jsxs(f,{children:[s.jsx("i",{className:"fa-solid fa-comment"}),a({en:"Comments",vi:"Bình luận"})]})}],suffixIcon:s.jsx("i",{className:"fa-solid fa-sort"})}),s.jsx(o,{icon:s.jsx("i",{className:"asc"===ue?"fa-solid fa-arrow-down":"fa-solid fa-arrow-up"}),onClick:()=>de((e=>"asc"===e?"desc":"asc"))})]})]}),s.jsx(D,{style:{maxWidth:"100%"},centered:!0,type:"card",destroyOnHidden:!0,items:De})]}),s.jsx(o,{icon:s.jsx("i",{className:"fa-solid fa-question"}),href:"https://www.facebook.com/groups/fbaio/posts/1624543838200298",type:"primary",target:"_blank",children:a({en:"Want more",vi:"Yêu cầu thêm"})})]})}export{sa as default};
