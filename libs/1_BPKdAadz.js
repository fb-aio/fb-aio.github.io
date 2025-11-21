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
var e,r;(r=e||(e={}))[r.DEBUG=0]="DEBUG",r[r.VERBOSE=1]="VERBOSE",r[r.INFO=2]="INFO",r[r.WARN=3]="WARN",r[r.ERROR=4]="ERROR",r[r.SILENT=5]="SILENT";const s={debug:e.DEBUG,verbose:e.VERBOSE,info:e.INFO,warn:e.WARN,error:e.ERROR,silent:e.SILENT},t=e.INFO,l={[e.DEBUG]:"log",[e.VERBOSE]:"log",[e.INFO]:"info",[e.WARN]:"warn",[e.ERROR]:"error"},o=(e,r,...s)=>{if(r<e.logLevel)return;const t=(new Date).toISOString(),o=l[r];if(!o)throw new Error(`Attempted to log a message with an invalid logType (value: ${r})`);console[o](`[${t}]  ${e.name}:`,...s)};class n{constructor(e){this.name=e,this._logLevel=t,this._logHandler=o,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(r){if(!(r in e))throw new TypeError(`Invalid value "${r}" assigned to \`logLevel\``);this._logLevel=r}setLogLevel(e){this._logLevel="string"==typeof e?s[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!=typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...r){this._userLogHandler&&this._userLogHandler(this,e.DEBUG,...r),this._logHandler(this,e.DEBUG,...r)}log(...r){this._userLogHandler&&this._userLogHandler(this,e.VERBOSE,...r),this._logHandler(this,e.VERBOSE,...r)}info(...r){this._userLogHandler&&this._userLogHandler(this,e.INFO,...r),this._logHandler(this,e.INFO,...r)}warn(...r){this._userLogHandler&&this._userLogHandler(this,e.WARN,...r),this._logHandler(this,e.WARN,...r)}error(...r){this._userLogHandler&&this._userLogHandler(this,e.ERROR,...r),this._logHandler(this,e.ERROR,...r)}}export{n as L,e as a};
