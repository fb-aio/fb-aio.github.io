import{C as e,a as t}from"./CQggsdvd.js";import{L as a}from"./BPKdAadz.js";import{g as r,E as i,d as n,b as s,i as o,v as c,F as h}from"./DFpNdIL_.js";import{o as p}from"./CFK1l90-.js";
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
 */class l{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map((e=>{if(function(e){const t=e.getComponent();return"VERSION"===(null==t?void 0:t.type)}(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null})).filter((e=>e)).join(" ")}}const f="@firebase/app",d="0.13.1",b=new a("@firebase/app"),m="@firebase/app-compat",g="@firebase/analytics-compat",u="@firebase/analytics",w="@firebase/app-check-compat",v="@firebase/app-check",_="@firebase/auth",C="@firebase/auth-compat",D="@firebase/database",y="@firebase/data-connect",E="@firebase/database-compat",S="@firebase/functions",I="@firebase/functions-compat",$="@firebase/installations",j="@firebase/installations-compat",P="@firebase/messaging",k="@firebase/messaging-compat",N="@firebase/performance",O="@firebase/performance-compat",x="@firebase/remote-config",A="@firebase/remote-config-compat",F="@firebase/storage",H="@firebase/storage-compat",B="@firebase/firestore",M="@firebase/ai",U="@firebase/firestore-compat",T="firebase",R="[DEFAULT]",L={[f]:"fire-core",[m]:"fire-core-compat",[u]:"fire-analytics",[g]:"fire-analytics-compat",[v]:"fire-app-check",[w]:"fire-app-check-compat",[_]:"fire-auth",[C]:"fire-auth-compat",[D]:"fire-rtdb",[y]:"fire-data-connect",[E]:"fire-rtdb-compat",[S]:"fire-fn",[I]:"fire-fn-compat",[$]:"fire-iid",[j]:"fire-iid-compat",[P]:"fire-fcm",[k]:"fire-fcm-compat",[N]:"fire-perf",[O]:"fire-perf-compat",[x]:"fire-rc",[A]:"fire-rc-compat",[F]:"fire-gcs",[H]:"fire-gcs-compat",[B]:"fire-fst",[U]:"fire-fst-compat",[M]:"fire-vertex","fire-js":"fire-js",[T]:"fire-js-all"},V=new Map,z=new Map,J=new Map;function q(e,t){try{e.container.addComponent(t)}catch(a){b.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,a)}}function G(e){const t=e.name;if(J.has(t))return b.debug(`There were multiple attempts to register component ${t}.`),!1;J.set(t,e);for(const a of V.values())q(a,e);for(const a of z.values())q(a,e);return!0}function K(e,t){const a=e.container.getProvider("heartbeat").getImmediate({optional:!0});return a&&a.triggerHeartbeat(),e.container.getProvider(t)}function Q(e){return null!=e&&void 0!==e.settings}
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
 */const W=new i("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."});
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
class X{constructor(e,a,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},a),this._name=a.name,this._automaticDataCollectionEnabled=a.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new t("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw W.create("app-deleted",{appName:this._name})}}
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
 */const Y="11.9.0";function Z(t,a={}){let i=t;if("object"!=typeof a){a={name:a}}const s=Object.assign({name:R,automaticDataCollectionEnabled:!0},a),o=s.name;if("string"!=typeof o||!o)throw W.create("bad-app-name",{appName:String(o)});if(i||(i=r()),!i)throw W.create("no-options");const c=V.get(o);if(c){if(n(i,c.options)&&n(s,c.config))return c;throw W.create("duplicate-app",{appName:o})}const h=new e(o);for(const e of J.values())h.addComponent(e);const p=new X(i,s,h);return V.set(o,p),p}function ee(e=R){const t=V.get(e);if(!t&&e===R&&r())return Z();if(!t)throw W.create("no-app",{appName:e});return t}function te(e,a,r){var i;let n=null!==(i=L[e])&&void 0!==i?i:e;r&&(n+=`-${r}`);const s=n.match(/\s|\//),o=a.match(/\s|\//);if(s||o){const e=[`Unable to register library "${n}" with version "${a}":`];return s&&e.push(`library name "${n}" contains illegal characters (whitespace or "/")`),s&&o&&e.push("and"),o&&e.push(`version name "${a}" contains illegal characters (whitespace or "/")`),void b.warn(e.join(" "))}G(new t(`${n}-version`,(()=>({library:n,version:a})),"VERSION"))}
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
 */const ae="firebase-heartbeat-store";let re=null;function ie(){return re||(re=p("firebase-heartbeat-database",1,{upgrade:(e,t)=>{if(0===t)try{e.createObjectStore(ae)}catch(a){console.warn(a)}}}).catch((e=>{throw W.create("idb-open",{originalErrorMessage:e.message})}))),re}async function ne(e,t){try{const a=(await ie()).transaction(ae,"readwrite"),r=a.objectStore(ae);await r.put(t,se(e)),await a.done}catch(a){if(a instanceof h)b.warn(a.message);else{const e=W.create("idb-set",{originalErrorMessage:null==a?void 0:a.message});b.warn(e.message)}}}function se(e){return`${e.name}!${e.options.appId}`}
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
 */class oe{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new he(t),this._heartbeatsCachePromise=this._storage.read().then((e=>(this._heartbeatsCache=e,e)))}async triggerHeartbeat(){var e,t;try{const a=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=ce();if(null==(null===(e=this._heartbeatsCache)||void 0===e?void 0:e.heartbeats)&&(this._heartbeatsCache=await this._heartbeatsCachePromise,null==(null===(t=this._heartbeatsCache)||void 0===t?void 0:t.heartbeats)))return;if(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some((e=>e.date===r)))return;if(this._heartbeatsCache.heartbeats.push({date:r,agent:a}),this._heartbeatsCache.heartbeats.length>30){const e=function(e){if(0===e.length)return-1;let t=0,a=e[0].date;for(let r=1;r<e.length;r++)e[r].date<a&&(a=e[r].date,t=r);return t}
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
 */(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(e,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(a){b.warn(a)}}async getHeartbeatsHeader(){var e;try{if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null==(null===(e=this._heartbeatsCache)||void 0===e?void 0:e.heartbeats)||0===this._heartbeatsCache.heartbeats.length)return"";const t=ce(),{heartbeatsToSend:a,unsentEntries:r}=function(e,t=1024){const a=[];let r=e.slice();for(const i of e){const e=a.find((e=>e.agent===i.agent));if(e){if(e.dates.push(i.date),pe(a)>t){e.dates.pop();break}}else if(a.push({agent:i.agent,dates:[i.date]}),pe(a)>t){a.pop();break}r=r.slice(1)}return{heartbeatsToSend:a,unsentEntries:r}}(this._heartbeatsCache.heartbeats),i=s(JSON.stringify({version:2,heartbeats:a}));return this._heartbeatsCache.lastSentHeartbeatDate=t,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(t){return b.warn(t),""}}}function ce(){return(new Date).toISOString().substring(0,10)}class he{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!o()&&c().then((()=>!0)).catch((()=>!1))}async read(){if(await this._canUseIndexedDBPromise){const e=await async function(e){try{const t=(await ie()).transaction(ae),a=await t.objectStore(ae).get(se(e));return await t.done,a}catch(t){if(t instanceof h)b.warn(t.message);else{const e=W.create("idb-get",{originalErrorMessage:null==t?void 0:t.message});b.warn(e.message)}}}(this.app);return(null==e?void 0:e.heartbeats)?e:{heartbeats:[]}}return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const a=await this.read();return ne(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:a.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var t;if(await this._canUseIndexedDBPromise){const a=await this.read();return ne(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:a.lastSentHeartbeatDate,heartbeats:[...a.heartbeats,...e.heartbeats]})}}}function pe(e){return s(JSON.stringify({version:2,heartbeats:e})).length}var le;le="",G(new t("platform-logger",(e=>new l(e)),"PRIVATE")),G(new t("heartbeat",(e=>new oe(e)),"PRIVATE")),te(f,d,le),te(f,d,"esm2017"),te("fire-js","");export{Y as S,K as _,G as a,Q as b,ee as g,Z as i,te as r};
