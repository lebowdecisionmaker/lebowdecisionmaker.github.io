import{a6 as _l,a7 as yl,i as El,a8 as Ka,a9 as nr,aa as Ha,ab as Ga,ac as vl,e as No,ad as ko,ae as Tl,af as Il,ag as wl,ah as Al,ai as Rl,aj as Sl,ak as js,al as zs,y as Pl,s as Mo,am as Qa,an as Cl,ao as Vl,ap as bl,aq as Dl,h as Nl,ar as kl}from"./index-BDuR2JEX.js";let Ml=!1;function Lm(n,t){return t}function xl(n,t,e,r){for(var s=[],o=t.length,a=0;a<o;a++)Tl(t[a].e,s,!0);var c=o>0&&s.length===0&&e!==null;if(c){var h=e.parentNode;Il(h),h.append(e),r.clear(),Xt(n,t[0].prev,t[o-1].next)}wl(s,()=>{for(var f=0;f<o;f++){var p=t[f];c||(r.delete(p.k),Xt(n,p.prev,p.next)),Al(p.e,!c)}})}function Fm(n,t,e,r,s,o=null){var a=n,c={flags:t,items:new Map,first:null},h=(t&Qa)!==0;if(h){var f=n;a=f.appendChild(_l())}var p=null,T=!1;yl(()=>{var A=e(),S=El(A)?A:A==null?[]:Ka(A),V=S.length;if(!(T&&V===0)){T=V===0;{var D=Rl;Ol(S,c,a,s,t,(D.f&nr)!==0,r)}o!==null&&(V===0?p?Ha(p):p=Ga(()=>o(a)):p!==null&&vl(p,()=>{p=null})),e()}})}function Ol(n,t,e,r,s,o,a,c){var jt,Dn,zt,Kt;var h=(s&Cl)!==0,f=(s&(js|zs))!==0,p=n.length,T=t.items,A=t.first,S=A,V,D=null,N,U=[],q=[],z,Y,$,B;if(h)for(B=0;B<p;B+=1)z=n[B],Y=a(z,B),$=T.get(Y),$!==void 0&&((jt=$.a)==null||jt.measure(),(N??(N=new Set)).add($));for(B=0;B<p;B+=1){if(z=n[B],Y=a(z,B),$=T.get(Y),$===void 0){var v=S?S.e.nodes_start:e;D=Fl(v,t,D,D===null?t.first:D.next,z,Y,B,r,s),T.set(Y,D),U=[],q=[],S=D.next;continue}if(f&&Ll($,z,B,s),$.e.f&nr&&(Ha($.e),h&&((Dn=$.a)==null||Dn.unfix(),(N??(N=new Set)).delete($))),$!==S){if(V!==void 0&&V.has($)){if(U.length<q.length){var m=q[0],g;D=m.prev;var y=U[0],E=U[U.length-1];for(g=0;g<U.length;g+=1)xo(U[g],m,e);for(g=0;g<q.length;g+=1)V.delete(q[g]);Xt(t,y.prev,E.next),Xt(t,D,y),Xt(t,E,m),S=m,D=E,B-=1,U=[],q=[]}else V.delete($),xo($,S,e),Xt(t,$.prev,$.next),Xt(t,$,D===null?t.first:D.next),Xt(t,D,$),D=$;continue}for(U=[],q=[];S!==null&&S.k!==Y;)(o||!(S.e.f&nr))&&(V??(V=new Set)).add(S),q.push(S),S=S.next;if(S===null)continue;$=S}U.push($),D=$,S=$.next}if(S!==null||V!==void 0){for(var w=V===void 0?[]:Ka(V);S!==null;)(o||!(S.e.f&nr))&&w.push(S),S=S.next;var _=w.length;if(_>0){var Pt=s&Qa&&p===0?e:null;if(h){for(B=0;B<_;B+=1)(zt=w[B].a)==null||zt.measure();for(B=0;B<_;B+=1)(Kt=w[B].a)==null||Kt.fix()}xl(t,w,Pt,T)}}h&&Sl(()=>{var Te;if(N!==void 0)for($ of N)(Te=$.a)==null||Te.apply()}),No.first=t.first&&t.first.e,No.last=D&&D.e}function Ll(n,t,e,r){r&js&&ko(n.v,t),r&zs?ko(n.i,e):n.i=e}function Fl(n,t,e,r,s,o,a,c,h,f){var p=(h&js)!==0,T=(h&Vl)===0,A=p?T?Pl(s):Mo(s):s,S=h&zs?Mo(a):a,V={i:S,v:A,k:o,a:null,e:null,prev:e,next:r};try{return V.e=Ga(()=>c(n,A,S),Ml),V.e.prev=e&&e.e,V.e.next=r&&r.e,e===null?t.first=V:(e.next=V,e.e.next=V.e),r!==null&&(r.prev=V,r.e.prev=V.e),V}finally{}}function xo(n,t,e){for(var r=n.next?n.next.e.nodes_start:e,s=t?t.e.nodes_start:e,o=n.e.nodes_start;o!==r;){var a=bl(o);s.before(o),o=a}}function Xt(n,t,e){t===null?n.first=e:(t.next=e,t.e.next=e&&e.e),e!==null&&(e.prev=t,e.e.prev=t&&t.e)}function Um(n,t){var e=n.__attributes??(n.__attributes={});e.value===(e.value=t??void 0)||n.value===t&&(t!==0||n.nodeName!=="PROGRESS")||(n.value=t)}function Bm(n,t,e,r){var s=n.__attributes??(n.__attributes={});s[t]!==(s[t]=e)&&(t==="style"&&"__styles"in n&&(n.__styles={}),t==="loading"&&(n[Dl]=e),e==null?n.removeAttribute(t):typeof e!="string"&&Ul(n).includes(t)?n[t]=e:n.setAttribute(t,e))}var Oo=new Map;function Ul(n){var t=Oo.get(n.nodeName);if(t)return t;Oo.set(n.nodeName,t=[]);for(var e,r=n,s=Element.prototype;s!==r;){e=kl(r);for(var o in e)e[o].set&&t.push(o);r=Nl(r)}return t}var Lo={};/**
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
 */const Wa=function(n){const t=[];let e=0;for(let r=0;r<n.length;r++){let s=n.charCodeAt(r);s<128?t[e++]=s:s<2048?(t[e++]=s>>6|192,t[e++]=s&63|128):(s&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++r)&1023),t[e++]=s>>18|240,t[e++]=s>>12&63|128,t[e++]=s>>6&63|128,t[e++]=s&63|128):(t[e++]=s>>12|224,t[e++]=s>>6&63|128,t[e++]=s&63|128)}return t},Bl=function(n){const t=[];let e=0,r=0;for(;e<n.length;){const s=n[e++];if(s<128)t[r++]=String.fromCharCode(s);else if(s>191&&s<224){const o=n[e++];t[r++]=String.fromCharCode((s&31)<<6|o&63)}else if(s>239&&s<365){const o=n[e++],a=n[e++],c=n[e++],h=((s&7)<<18|(o&63)<<12|(a&63)<<6|c&63)-65536;t[r++]=String.fromCharCode(55296+(h>>10)),t[r++]=String.fromCharCode(56320+(h&1023))}else{const o=n[e++],a=n[e++];t[r++]=String.fromCharCode((s&15)<<12|(o&63)<<6|a&63)}}return t.join("")},Xa={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,t){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const e=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<n.length;s+=3){const o=n[s],a=s+1<n.length,c=a?n[s+1]:0,h=s+2<n.length,f=h?n[s+2]:0,p=o>>2,T=(o&3)<<4|c>>4;let A=(c&15)<<2|f>>6,S=f&63;h||(S=64,a||(A=64)),r.push(e[p],e[T],e[A],e[S])}return r.join("")},encodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(n):this.encodeByteArray(Wa(n),t)},decodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(n):Bl(this.decodeStringToByteArray(n,t))},decodeStringToByteArray(n,t){this.init_();const e=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<n.length;){const o=e[n.charAt(s++)],c=s<n.length?e[n.charAt(s)]:0;++s;const f=s<n.length?e[n.charAt(s)]:64;++s;const T=s<n.length?e[n.charAt(s)]:64;if(++s,o==null||c==null||f==null||T==null)throw new ql;const A=o<<2|c>>4;if(r.push(A),f!==64){const S=c<<4&240|f>>2;if(r.push(S),T!==64){const V=f<<6&192|T;r.push(V)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class ql extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const $l=function(n){const t=Wa(n);return Xa.encodeByteArray(t,!0)},lr=function(n){return $l(n).replace(/\./g,"")},jl=function(n){try{return Xa.decodeString(n,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */function zl(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Kl=()=>zl().__FIREBASE_DEFAULTS__,Hl=()=>{if(typeof process>"u"||typeof Lo>"u")return;const n=Lo.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Gl=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=n&&jl(n[1]);return t&&JSON.parse(t)},Ks=()=>{try{return Kl()||Hl()||Gl()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Ql=n=>{var t,e;return(e=(t=Ks())===null||t===void 0?void 0:t.emulatorHosts)===null||e===void 0?void 0:e[n]},Wl=n=>{const t=Ql(n);if(!t)return;const e=t.lastIndexOf(":");if(e<=0||e+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(e+1),10);return t[0]==="["?[t.substring(1,e-1),r]:[t.substring(0,e),r]},Ya=()=>{var n;return(n=Ks())===null||n===void 0?void 0:n.config};/**
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
 */class Xl{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}wrapCallback(t){return(e,r)=>{e?this.reject(e):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(e):t(e,r))}}}/**
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
 */function Yl(n,t){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const e={alg:"none",type:"JWT"},r=t||"demo-project",s=n.iat||0,o=n.sub||n.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}}},n);return[lr(JSON.stringify(e)),lr(JSON.stringify(a)),""].join(".")}/**
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
 */function Jl(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Zl(){var n;const t=(n=Ks())===null||n===void 0?void 0:n.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function th(){return!Zl()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function eh(){try{return typeof indexedDB=="object"}catch{return!1}}function nh(){return new Promise((n,t)=>{try{let e=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),e||self.indexedDB.deleteDatabase(r),n(!0)},s.onupgradeneeded=()=>{e=!1},s.onerror=()=>{var o;t(((o=s.error)===null||o===void 0?void 0:o.message)||"")}}catch(e){t(e)}})}/**
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
 */const rh="FirebaseError";class Ue extends Error{constructor(t,e,r){super(e),this.code=t,this.customData=r,this.name=rh,Object.setPrototypeOf(this,Ue.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ja.prototype.create)}}class Ja{constructor(t,e,r){this.service=t,this.serviceName=e,this.errors=r}create(t,...e){const r=e[0]||{},s=`${this.service}/${t}`,o=this.errors[t],a=o?sh(o,r):"Error",c=`${this.serviceName}: ${a} (${s}).`;return new Ue(s,c,r)}}function sh(n,t){return n.replace(ih,(e,r)=>{const s=t[r];return s!=null?String(s):`<${r}?>`})}const ih=/\{\$([^}]+)}/g;function vs(n,t){if(n===t)return!0;const e=Object.keys(n),r=Object.keys(t);for(const s of e){if(!r.includes(s))return!1;const o=n[s],a=t[s];if(Fo(o)&&Fo(a)){if(!vs(o,a))return!1}else if(o!==a)return!1}for(const s of r)if(!e.includes(s))return!1;return!0}function Fo(n){return n!==null&&typeof n=="object"}/**
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
 */function Ft(n){return n&&n._delegate?n._delegate:n}class mn{constructor(t,e,r){this.name=t,this.instanceFactory=e,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */const me="[DEFAULT]";/**
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
 */class oh{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const r=new Xl;if(this.instancesDeferred.set(e,r),this.isInitialized(e)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:e});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),s=(e=t==null?void 0:t.optional)!==null&&e!==void 0?e:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(o){if(s)return null;throw o}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(uh(t))try{this.getOrInitializeService({instanceIdentifier:me})}catch{}for(const[e,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(e);try{const o=this.getOrInitializeService({instanceIdentifier:s});r.resolve(o)}catch{}}}}clearInstance(t=me){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...t.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=me){return this.instances.has(t)}getOptions(t=me){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:e});for(const[o,a]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(o);r===c&&a.resolve(s)}return s}onInit(t,e){var r;const s=this.normalizeInstanceIdentifier(e),o=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;o.add(t),this.onInitCallbacks.set(s,o);const a=this.instances.get(s);return a&&t(a,s),()=>{o.delete(t)}}invokeOnInitCallbacks(t,e){const r=this.onInitCallbacks.get(e);if(r)for(const s of r)try{s(t,e)}catch{}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:ah(t),options:e}),this.instances.set(t,r),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=me){return this.component?this.component.multipleInstances?t:me:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function ah(n){return n===me?void 0:n}function uh(n){return n.instantiationMode==="EAGER"}/**
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
 */class ch{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new oh(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var G;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(G||(G={}));const lh={debug:G.DEBUG,verbose:G.VERBOSE,info:G.INFO,warn:G.WARN,error:G.ERROR,silent:G.SILENT},hh=G.INFO,dh={[G.DEBUG]:"log",[G.VERBOSE]:"log",[G.INFO]:"info",[G.WARN]:"warn",[G.ERROR]:"error"},fh=(n,t,...e)=>{if(t<n.logLevel)return;const r=new Date().toISOString(),s=dh[t];if(s)console[s](`[${r}]  ${n.name}:`,...e);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class Za{constructor(t){this.name=t,this._logLevel=hh,this._logHandler=fh,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in G))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?lh[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,G.DEBUG,...t),this._logHandler(this,G.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,G.VERBOSE,...t),this._logHandler(this,G.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,G.INFO,...t),this._logHandler(this,G.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,G.WARN,...t),this._logHandler(this,G.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,G.ERROR,...t),this._logHandler(this,G.ERROR,...t)}}const ph=(n,t)=>t.some(e=>n instanceof e);let Uo,Bo;function mh(){return Uo||(Uo=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function gh(){return Bo||(Bo=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const tu=new WeakMap,Ts=new WeakMap,eu=new WeakMap,ds=new WeakMap,Hs=new WeakMap;function _h(n){const t=new Promise((e,r)=>{const s=()=>{n.removeEventListener("success",o),n.removeEventListener("error",a)},o=()=>{e(Jt(n.result)),s()},a=()=>{r(n.error),s()};n.addEventListener("success",o),n.addEventListener("error",a)});return t.then(e=>{e instanceof IDBCursor&&tu.set(e,n)}).catch(()=>{}),Hs.set(t,n),t}function yh(n){if(Ts.has(n))return;const t=new Promise((e,r)=>{const s=()=>{n.removeEventListener("complete",o),n.removeEventListener("error",a),n.removeEventListener("abort",a)},o=()=>{e(),s()},a=()=>{r(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",o),n.addEventListener("error",a),n.addEventListener("abort",a)});Ts.set(n,t)}let Is={get(n,t,e){if(n instanceof IDBTransaction){if(t==="done")return Ts.get(n);if(t==="objectStoreNames")return n.objectStoreNames||eu.get(n);if(t==="store")return e.objectStoreNames[1]?void 0:e.objectStore(e.objectStoreNames[0])}return Jt(n[t])},set(n,t,e){return n[t]=e,!0},has(n,t){return n instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in n}};function Eh(n){Is=n(Is)}function vh(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...e){const r=n.call(fs(this),t,...e);return eu.set(r,t.sort?t.sort():[t]),Jt(r)}:gh().includes(n)?function(...t){return n.apply(fs(this),t),Jt(tu.get(this))}:function(...t){return Jt(n.apply(fs(this),t))}}function Th(n){return typeof n=="function"?vh(n):(n instanceof IDBTransaction&&yh(n),ph(n,mh())?new Proxy(n,Is):n)}function Jt(n){if(n instanceof IDBRequest)return _h(n);if(ds.has(n))return ds.get(n);const t=Th(n);return t!==n&&(ds.set(n,t),Hs.set(t,n)),t}const fs=n=>Hs.get(n);function Ih(n,t,{blocked:e,upgrade:r,blocking:s,terminated:o}={}){const a=indexedDB.open(n,t),c=Jt(a);return r&&a.addEventListener("upgradeneeded",h=>{r(Jt(a.result),h.oldVersion,h.newVersion,Jt(a.transaction),h)}),e&&a.addEventListener("blocked",h=>e(h.oldVersion,h.newVersion,h)),c.then(h=>{o&&h.addEventListener("close",()=>o()),s&&h.addEventListener("versionchange",f=>s(f.oldVersion,f.newVersion,f))}).catch(()=>{}),c}const wh=["get","getKey","getAll","getAllKeys","count"],Ah=["put","add","delete","clear"],ps=new Map;function qo(n,t){if(!(n instanceof IDBDatabase&&!(t in n)&&typeof t=="string"))return;if(ps.get(t))return ps.get(t);const e=t.replace(/FromIndex$/,""),r=t!==e,s=Ah.includes(e);if(!(e in(r?IDBIndex:IDBObjectStore).prototype)||!(s||wh.includes(e)))return;const o=async function(a,...c){const h=this.transaction(a,s?"readwrite":"readonly");let f=h.store;return r&&(f=f.index(c.shift())),(await Promise.all([f[e](...c),s&&h.done]))[0]};return ps.set(t,o),o}Eh(n=>({...n,get:(t,e,r)=>qo(t,e)||n.get(t,e,r),has:(t,e)=>!!qo(t,e)||n.has(t,e)}));/**
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
 */class Rh{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(e=>{if(Sh(e)){const r=e.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(e=>e).join(" ")}}function Sh(n){const t=n.getComponent();return(t==null?void 0:t.type)==="VERSION"}const ws="@firebase/app",$o="0.11.1";/**
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
 */const Ut=new Za("@firebase/app"),Ph="@firebase/app-compat",Ch="@firebase/analytics-compat",Vh="@firebase/analytics",bh="@firebase/app-check-compat",Dh="@firebase/app-check",Nh="@firebase/auth",kh="@firebase/auth-compat",Mh="@firebase/database",xh="@firebase/data-connect",Oh="@firebase/database-compat",Lh="@firebase/functions",Fh="@firebase/functions-compat",Uh="@firebase/installations",Bh="@firebase/installations-compat",qh="@firebase/messaging",$h="@firebase/messaging-compat",jh="@firebase/performance",zh="@firebase/performance-compat",Kh="@firebase/remote-config",Hh="@firebase/remote-config-compat",Gh="@firebase/storage",Qh="@firebase/storage-compat",Wh="@firebase/firestore",Xh="@firebase/vertexai",Yh="@firebase/firestore-compat",Jh="firebase",Zh="11.3.1";/**
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
 */const As="[DEFAULT]",td={[ws]:"fire-core",[Ph]:"fire-core-compat",[Vh]:"fire-analytics",[Ch]:"fire-analytics-compat",[Dh]:"fire-app-check",[bh]:"fire-app-check-compat",[Nh]:"fire-auth",[kh]:"fire-auth-compat",[Mh]:"fire-rtdb",[xh]:"fire-data-connect",[Oh]:"fire-rtdb-compat",[Lh]:"fire-fn",[Fh]:"fire-fn-compat",[Uh]:"fire-iid",[Bh]:"fire-iid-compat",[qh]:"fire-fcm",[$h]:"fire-fcm-compat",[jh]:"fire-perf",[zh]:"fire-perf-compat",[Kh]:"fire-rc",[Hh]:"fire-rc-compat",[Gh]:"fire-gcs",[Qh]:"fire-gcs-compat",[Wh]:"fire-fst",[Yh]:"fire-fst-compat",[Xh]:"fire-vertex","fire-js":"fire-js",[Jh]:"fire-js-all"};/**
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
 */const hr=new Map,ed=new Map,Rs=new Map;function jo(n,t){try{n.container.addComponent(t)}catch(e){Ut.debug(`Component ${t.name} failed to register with FirebaseApp ${n.name}`,e)}}function dr(n){const t=n.name;if(Rs.has(t))return Ut.debug(`There were multiple attempts to register component ${t}.`),!1;Rs.set(t,n);for(const e of hr.values())jo(e,n);for(const e of ed.values())jo(e,n);return!0}function nd(n,t){const e=n.container.getProvider("heartbeat").getImmediate({optional:!0});return e&&e.triggerHeartbeat(),n.container.getProvider(t)}function rd(n){return n==null?!1:n.settings!==void 0}/**
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
 */const sd={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Zt=new Ja("app","Firebase",sd);/**
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
 */class id{constructor(t,e,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new mn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Zt.create("app-deleted",{appName:this._name})}}/**
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
 */const od=Zh;function nu(n,t={}){let e=n;typeof t!="object"&&(t={name:t});const r=Object.assign({name:As,automaticDataCollectionEnabled:!1},t),s=r.name;if(typeof s!="string"||!s)throw Zt.create("bad-app-name",{appName:String(s)});if(e||(e=Ya()),!e)throw Zt.create("no-options");const o=hr.get(s);if(o){if(vs(e,o.options)&&vs(r,o.config))return o;throw Zt.create("duplicate-app",{appName:s})}const a=new ch(s);for(const h of Rs.values())a.addComponent(h);const c=new id(e,r,a);return hr.set(s,c),c}function ad(n=As){const t=hr.get(n);if(!t&&n===As&&Ya())return nu();if(!t)throw Zt.create("no-app",{appName:n});return t}function be(n,t,e){var r;let s=(r=td[n])!==null&&r!==void 0?r:n;e&&(s+=`-${e}`);const o=s.match(/\s|\//),a=t.match(/\s|\//);if(o||a){const c=[`Unable to register library "${s}" with version "${t}":`];o&&c.push(`library name "${s}" contains illegal characters (whitespace or "/")`),o&&a&&c.push("and"),a&&c.push(`version name "${t}" contains illegal characters (whitespace or "/")`),Ut.warn(c.join(" "));return}dr(new mn(`${s}-version`,()=>({library:s,version:t}),"VERSION"))}/**
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
 */const ud="firebase-heartbeat-database",cd=1,gn="firebase-heartbeat-store";let ms=null;function ru(){return ms||(ms=Ih(ud,cd,{upgrade:(n,t)=>{switch(t){case 0:try{n.createObjectStore(gn)}catch(e){console.warn(e)}}}}).catch(n=>{throw Zt.create("idb-open",{originalErrorMessage:n.message})})),ms}async function ld(n){try{const e=(await ru()).transaction(gn),r=await e.objectStore(gn).get(su(n));return await e.done,r}catch(t){if(t instanceof Ue)Ut.warn(t.message);else{const e=Zt.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});Ut.warn(e.message)}}}async function zo(n,t){try{const r=(await ru()).transaction(gn,"readwrite");await r.objectStore(gn).put(t,su(n)),await r.done}catch(e){if(e instanceof Ue)Ut.warn(e.message);else{const r=Zt.create("idb-set",{originalErrorMessage:e==null?void 0:e.message});Ut.warn(r.message)}}}function su(n){return`${n.name}!${n.options.appId}`}/**
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
 */const hd=1024,dd=30;class fd{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new md(e),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var t,e;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=Ko();if(((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(a=>a.date===o))return;if(this._heartbeatsCache.heartbeats.push({date:o,agent:s}),this._heartbeatsCache.heartbeats.length>dd){const a=gd(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(a,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){Ut.warn(r)}}async getHeartbeatsHeader(){var t;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Ko(),{heartbeatsToSend:r,unsentEntries:s}=pd(this._heartbeatsCache.heartbeats),o=lr(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}catch(e){return Ut.warn(e),""}}}function Ko(){return new Date().toISOString().substring(0,10)}function pd(n,t=hd){const e=[];let r=n.slice();for(const s of n){const o=e.find(a=>a.agent===s.agent);if(o){if(o.dates.push(s.date),Ho(e)>t){o.dates.pop();break}}else if(e.push({agent:s.agent,dates:[s.date]}),Ho(e)>t){e.pop();break}r=r.slice(1)}return{heartbeatsToSend:e,unsentEntries:r}}class md{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return eh()?nh().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const e=await ld(this.app);return e!=null&&e.heartbeats?e:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var e;if(await this._canUseIndexedDBPromise){const s=await this.read();return zo(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:s.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var e;if(await this._canUseIndexedDBPromise){const s=await this.read();return zo(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...t.heartbeats]})}else return}}function Ho(n){return lr(JSON.stringify({version:2,heartbeats:n})).length}function gd(n){if(n.length===0)return-1;let t=0,e=n[0].date;for(let r=1;r<n.length;r++)n[r].date<e&&(e=n[r].date,t=r);return t}/**
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
 */function _d(n){dr(new mn("platform-logger",t=>new Rh(t),"PRIVATE")),dr(new mn("heartbeat",t=>new fd(t),"PRIVATE")),be(ws,$o,n),be(ws,$o,"esm2017"),be("fire-js","")}_d("");var yd="firebase",Ed="11.3.1";/**
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
 */be(yd,Ed,"app");var Go=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var te,iu;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(v,m){function g(){}g.prototype=m.prototype,v.D=m.prototype,v.prototype=new g,v.prototype.constructor=v,v.C=function(y,E,w){for(var _=Array(arguments.length-2),Pt=2;Pt<arguments.length;Pt++)_[Pt-2]=arguments[Pt];return m.prototype[E].apply(y,_)}}function e(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}t(r,e),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(v,m,g){g||(g=0);var y=Array(16);if(typeof m=="string")for(var E=0;16>E;++E)y[E]=m.charCodeAt(g++)|m.charCodeAt(g++)<<8|m.charCodeAt(g++)<<16|m.charCodeAt(g++)<<24;else for(E=0;16>E;++E)y[E]=m[g++]|m[g++]<<8|m[g++]<<16|m[g++]<<24;m=v.g[0],g=v.g[1],E=v.g[2];var w=v.g[3],_=m+(w^g&(E^w))+y[0]+3614090360&4294967295;m=g+(_<<7&4294967295|_>>>25),_=w+(E^m&(g^E))+y[1]+3905402710&4294967295,w=m+(_<<12&4294967295|_>>>20),_=E+(g^w&(m^g))+y[2]+606105819&4294967295,E=w+(_<<17&4294967295|_>>>15),_=g+(m^E&(w^m))+y[3]+3250441966&4294967295,g=E+(_<<22&4294967295|_>>>10),_=m+(w^g&(E^w))+y[4]+4118548399&4294967295,m=g+(_<<7&4294967295|_>>>25),_=w+(E^m&(g^E))+y[5]+1200080426&4294967295,w=m+(_<<12&4294967295|_>>>20),_=E+(g^w&(m^g))+y[6]+2821735955&4294967295,E=w+(_<<17&4294967295|_>>>15),_=g+(m^E&(w^m))+y[7]+4249261313&4294967295,g=E+(_<<22&4294967295|_>>>10),_=m+(w^g&(E^w))+y[8]+1770035416&4294967295,m=g+(_<<7&4294967295|_>>>25),_=w+(E^m&(g^E))+y[9]+2336552879&4294967295,w=m+(_<<12&4294967295|_>>>20),_=E+(g^w&(m^g))+y[10]+4294925233&4294967295,E=w+(_<<17&4294967295|_>>>15),_=g+(m^E&(w^m))+y[11]+2304563134&4294967295,g=E+(_<<22&4294967295|_>>>10),_=m+(w^g&(E^w))+y[12]+1804603682&4294967295,m=g+(_<<7&4294967295|_>>>25),_=w+(E^m&(g^E))+y[13]+4254626195&4294967295,w=m+(_<<12&4294967295|_>>>20),_=E+(g^w&(m^g))+y[14]+2792965006&4294967295,E=w+(_<<17&4294967295|_>>>15),_=g+(m^E&(w^m))+y[15]+1236535329&4294967295,g=E+(_<<22&4294967295|_>>>10),_=m+(E^w&(g^E))+y[1]+4129170786&4294967295,m=g+(_<<5&4294967295|_>>>27),_=w+(g^E&(m^g))+y[6]+3225465664&4294967295,w=m+(_<<9&4294967295|_>>>23),_=E+(m^g&(w^m))+y[11]+643717713&4294967295,E=w+(_<<14&4294967295|_>>>18),_=g+(w^m&(E^w))+y[0]+3921069994&4294967295,g=E+(_<<20&4294967295|_>>>12),_=m+(E^w&(g^E))+y[5]+3593408605&4294967295,m=g+(_<<5&4294967295|_>>>27),_=w+(g^E&(m^g))+y[10]+38016083&4294967295,w=m+(_<<9&4294967295|_>>>23),_=E+(m^g&(w^m))+y[15]+3634488961&4294967295,E=w+(_<<14&4294967295|_>>>18),_=g+(w^m&(E^w))+y[4]+3889429448&4294967295,g=E+(_<<20&4294967295|_>>>12),_=m+(E^w&(g^E))+y[9]+568446438&4294967295,m=g+(_<<5&4294967295|_>>>27),_=w+(g^E&(m^g))+y[14]+3275163606&4294967295,w=m+(_<<9&4294967295|_>>>23),_=E+(m^g&(w^m))+y[3]+4107603335&4294967295,E=w+(_<<14&4294967295|_>>>18),_=g+(w^m&(E^w))+y[8]+1163531501&4294967295,g=E+(_<<20&4294967295|_>>>12),_=m+(E^w&(g^E))+y[13]+2850285829&4294967295,m=g+(_<<5&4294967295|_>>>27),_=w+(g^E&(m^g))+y[2]+4243563512&4294967295,w=m+(_<<9&4294967295|_>>>23),_=E+(m^g&(w^m))+y[7]+1735328473&4294967295,E=w+(_<<14&4294967295|_>>>18),_=g+(w^m&(E^w))+y[12]+2368359562&4294967295,g=E+(_<<20&4294967295|_>>>12),_=m+(g^E^w)+y[5]+4294588738&4294967295,m=g+(_<<4&4294967295|_>>>28),_=w+(m^g^E)+y[8]+2272392833&4294967295,w=m+(_<<11&4294967295|_>>>21),_=E+(w^m^g)+y[11]+1839030562&4294967295,E=w+(_<<16&4294967295|_>>>16),_=g+(E^w^m)+y[14]+4259657740&4294967295,g=E+(_<<23&4294967295|_>>>9),_=m+(g^E^w)+y[1]+2763975236&4294967295,m=g+(_<<4&4294967295|_>>>28),_=w+(m^g^E)+y[4]+1272893353&4294967295,w=m+(_<<11&4294967295|_>>>21),_=E+(w^m^g)+y[7]+4139469664&4294967295,E=w+(_<<16&4294967295|_>>>16),_=g+(E^w^m)+y[10]+3200236656&4294967295,g=E+(_<<23&4294967295|_>>>9),_=m+(g^E^w)+y[13]+681279174&4294967295,m=g+(_<<4&4294967295|_>>>28),_=w+(m^g^E)+y[0]+3936430074&4294967295,w=m+(_<<11&4294967295|_>>>21),_=E+(w^m^g)+y[3]+3572445317&4294967295,E=w+(_<<16&4294967295|_>>>16),_=g+(E^w^m)+y[6]+76029189&4294967295,g=E+(_<<23&4294967295|_>>>9),_=m+(g^E^w)+y[9]+3654602809&4294967295,m=g+(_<<4&4294967295|_>>>28),_=w+(m^g^E)+y[12]+3873151461&4294967295,w=m+(_<<11&4294967295|_>>>21),_=E+(w^m^g)+y[15]+530742520&4294967295,E=w+(_<<16&4294967295|_>>>16),_=g+(E^w^m)+y[2]+3299628645&4294967295,g=E+(_<<23&4294967295|_>>>9),_=m+(E^(g|~w))+y[0]+4096336452&4294967295,m=g+(_<<6&4294967295|_>>>26),_=w+(g^(m|~E))+y[7]+1126891415&4294967295,w=m+(_<<10&4294967295|_>>>22),_=E+(m^(w|~g))+y[14]+2878612391&4294967295,E=w+(_<<15&4294967295|_>>>17),_=g+(w^(E|~m))+y[5]+4237533241&4294967295,g=E+(_<<21&4294967295|_>>>11),_=m+(E^(g|~w))+y[12]+1700485571&4294967295,m=g+(_<<6&4294967295|_>>>26),_=w+(g^(m|~E))+y[3]+2399980690&4294967295,w=m+(_<<10&4294967295|_>>>22),_=E+(m^(w|~g))+y[10]+4293915773&4294967295,E=w+(_<<15&4294967295|_>>>17),_=g+(w^(E|~m))+y[1]+2240044497&4294967295,g=E+(_<<21&4294967295|_>>>11),_=m+(E^(g|~w))+y[8]+1873313359&4294967295,m=g+(_<<6&4294967295|_>>>26),_=w+(g^(m|~E))+y[15]+4264355552&4294967295,w=m+(_<<10&4294967295|_>>>22),_=E+(m^(w|~g))+y[6]+2734768916&4294967295,E=w+(_<<15&4294967295|_>>>17),_=g+(w^(E|~m))+y[13]+1309151649&4294967295,g=E+(_<<21&4294967295|_>>>11),_=m+(E^(g|~w))+y[4]+4149444226&4294967295,m=g+(_<<6&4294967295|_>>>26),_=w+(g^(m|~E))+y[11]+3174756917&4294967295,w=m+(_<<10&4294967295|_>>>22),_=E+(m^(w|~g))+y[2]+718787259&4294967295,E=w+(_<<15&4294967295|_>>>17),_=g+(w^(E|~m))+y[9]+3951481745&4294967295,v.g[0]=v.g[0]+m&4294967295,v.g[1]=v.g[1]+(E+(_<<21&4294967295|_>>>11))&4294967295,v.g[2]=v.g[2]+E&4294967295,v.g[3]=v.g[3]+w&4294967295}r.prototype.u=function(v,m){m===void 0&&(m=v.length);for(var g=m-this.blockSize,y=this.B,E=this.h,w=0;w<m;){if(E==0)for(;w<=g;)s(this,v,w),w+=this.blockSize;if(typeof v=="string"){for(;w<m;)if(y[E++]=v.charCodeAt(w++),E==this.blockSize){s(this,y),E=0;break}}else for(;w<m;)if(y[E++]=v[w++],E==this.blockSize){s(this,y),E=0;break}}this.h=E,this.o+=m},r.prototype.v=function(){var v=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);v[0]=128;for(var m=1;m<v.length-8;++m)v[m]=0;var g=8*this.o;for(m=v.length-8;m<v.length;++m)v[m]=g&255,g/=256;for(this.u(v),v=Array(16),m=g=0;4>m;++m)for(var y=0;32>y;y+=8)v[g++]=this.g[m]>>>y&255;return v};function o(v,m){var g=c;return Object.prototype.hasOwnProperty.call(g,v)?g[v]:g[v]=m(v)}function a(v,m){this.h=m;for(var g=[],y=!0,E=v.length-1;0<=E;E--){var w=v[E]|0;y&&w==m||(g[E]=w,y=!1)}this.g=g}var c={};function h(v){return-128<=v&&128>v?o(v,function(m){return new a([m|0],0>m?-1:0)}):new a([v|0],0>v?-1:0)}function f(v){if(isNaN(v)||!isFinite(v))return T;if(0>v)return N(f(-v));for(var m=[],g=1,y=0;v>=g;y++)m[y]=v/g|0,g*=4294967296;return new a(m,0)}function p(v,m){if(v.length==0)throw Error("number format error: empty string");if(m=m||10,2>m||36<m)throw Error("radix out of range: "+m);if(v.charAt(0)=="-")return N(p(v.substring(1),m));if(0<=v.indexOf("-"))throw Error('number format error: interior "-" character');for(var g=f(Math.pow(m,8)),y=T,E=0;E<v.length;E+=8){var w=Math.min(8,v.length-E),_=parseInt(v.substring(E,E+w),m);8>w?(w=f(Math.pow(m,w)),y=y.j(w).add(f(_))):(y=y.j(g),y=y.add(f(_)))}return y}var T=h(0),A=h(1),S=h(16777216);n=a.prototype,n.m=function(){if(D(this))return-N(this).m();for(var v=0,m=1,g=0;g<this.g.length;g++){var y=this.i(g);v+=(0<=y?y:4294967296+y)*m,m*=4294967296}return v},n.toString=function(v){if(v=v||10,2>v||36<v)throw Error("radix out of range: "+v);if(V(this))return"0";if(D(this))return"-"+N(this).toString(v);for(var m=f(Math.pow(v,6)),g=this,y="";;){var E=Y(g,m).g;g=U(g,E.j(m));var w=((0<g.g.length?g.g[0]:g.h)>>>0).toString(v);if(g=E,V(g))return w+y;for(;6>w.length;)w="0"+w;y=w+y}},n.i=function(v){return 0>v?0:v<this.g.length?this.g[v]:this.h};function V(v){if(v.h!=0)return!1;for(var m=0;m<v.g.length;m++)if(v.g[m]!=0)return!1;return!0}function D(v){return v.h==-1}n.l=function(v){return v=U(this,v),D(v)?-1:V(v)?0:1};function N(v){for(var m=v.g.length,g=[],y=0;y<m;y++)g[y]=~v.g[y];return new a(g,~v.h).add(A)}n.abs=function(){return D(this)?N(this):this},n.add=function(v){for(var m=Math.max(this.g.length,v.g.length),g=[],y=0,E=0;E<=m;E++){var w=y+(this.i(E)&65535)+(v.i(E)&65535),_=(w>>>16)+(this.i(E)>>>16)+(v.i(E)>>>16);y=_>>>16,w&=65535,_&=65535,g[E]=_<<16|w}return new a(g,g[g.length-1]&-2147483648?-1:0)};function U(v,m){return v.add(N(m))}n.j=function(v){if(V(this)||V(v))return T;if(D(this))return D(v)?N(this).j(N(v)):N(N(this).j(v));if(D(v))return N(this.j(N(v)));if(0>this.l(S)&&0>v.l(S))return f(this.m()*v.m());for(var m=this.g.length+v.g.length,g=[],y=0;y<2*m;y++)g[y]=0;for(y=0;y<this.g.length;y++)for(var E=0;E<v.g.length;E++){var w=this.i(y)>>>16,_=this.i(y)&65535,Pt=v.i(E)>>>16,jt=v.i(E)&65535;g[2*y+2*E]+=_*jt,q(g,2*y+2*E),g[2*y+2*E+1]+=w*jt,q(g,2*y+2*E+1),g[2*y+2*E+1]+=_*Pt,q(g,2*y+2*E+1),g[2*y+2*E+2]+=w*Pt,q(g,2*y+2*E+2)}for(y=0;y<m;y++)g[y]=g[2*y+1]<<16|g[2*y];for(y=m;y<2*m;y++)g[y]=0;return new a(g,0)};function q(v,m){for(;(v[m]&65535)!=v[m];)v[m+1]+=v[m]>>>16,v[m]&=65535,m++}function z(v,m){this.g=v,this.h=m}function Y(v,m){if(V(m))throw Error("division by zero");if(V(v))return new z(T,T);if(D(v))return m=Y(N(v),m),new z(N(m.g),N(m.h));if(D(m))return m=Y(v,N(m)),new z(N(m.g),m.h);if(30<v.g.length){if(D(v)||D(m))throw Error("slowDivide_ only works with positive integers.");for(var g=A,y=m;0>=y.l(v);)g=$(g),y=$(y);var E=B(g,1),w=B(y,1);for(y=B(y,2),g=B(g,2);!V(y);){var _=w.add(y);0>=_.l(v)&&(E=E.add(g),w=_),y=B(y,1),g=B(g,1)}return m=U(v,E.j(m)),new z(E,m)}for(E=T;0<=v.l(m);){for(g=Math.max(1,Math.floor(v.m()/m.m())),y=Math.ceil(Math.log(g)/Math.LN2),y=48>=y?1:Math.pow(2,y-48),w=f(g),_=w.j(m);D(_)||0<_.l(v);)g-=y,w=f(g),_=w.j(m);V(w)&&(w=A),E=E.add(w),v=U(v,_)}return new z(E,v)}n.A=function(v){return Y(this,v).h},n.and=function(v){for(var m=Math.max(this.g.length,v.g.length),g=[],y=0;y<m;y++)g[y]=this.i(y)&v.i(y);return new a(g,this.h&v.h)},n.or=function(v){for(var m=Math.max(this.g.length,v.g.length),g=[],y=0;y<m;y++)g[y]=this.i(y)|v.i(y);return new a(g,this.h|v.h)},n.xor=function(v){for(var m=Math.max(this.g.length,v.g.length),g=[],y=0;y<m;y++)g[y]=this.i(y)^v.i(y);return new a(g,this.h^v.h)};function $(v){for(var m=v.g.length+1,g=[],y=0;y<m;y++)g[y]=v.i(y)<<1|v.i(y-1)>>>31;return new a(g,v.h)}function B(v,m){var g=m>>5;m%=32;for(var y=v.g.length-g,E=[],w=0;w<y;w++)E[w]=0<m?v.i(w+g)>>>m|v.i(w+g+1)<<32-m:v.i(w+g);return new a(E,v.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,iu=r,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=f,a.fromString=p,te=a}).apply(typeof Go<"u"?Go:typeof self<"u"?self:typeof window<"u"?window:{});var Yn=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var ou,an,au,rr,Ss,uu,cu,lu;(function(){var n,t=typeof Object.defineProperties=="function"?Object.defineProperty:function(i,u,l){return i==Array.prototype||i==Object.prototype||(i[u]=l.value),i};function e(i){i=[typeof globalThis=="object"&&globalThis,i,typeof window=="object"&&window,typeof self=="object"&&self,typeof Yn=="object"&&Yn];for(var u=0;u<i.length;++u){var l=i[u];if(l&&l.Math==Math)return l}throw Error("Cannot find global object")}var r=e(this);function s(i,u){if(u)t:{var l=r;i=i.split(".");for(var d=0;d<i.length-1;d++){var I=i[d];if(!(I in l))break t;l=l[I]}i=i[i.length-1],d=l[i],u=u(d),u!=d&&u!=null&&t(l,i,{configurable:!0,writable:!0,value:u})}}function o(i,u){i instanceof String&&(i+="");var l=0,d=!1,I={next:function(){if(!d&&l<i.length){var R=l++;return{value:u(R,i[R]),done:!1}}return d=!0,{done:!0,value:void 0}}};return I[Symbol.iterator]=function(){return I},I}s("Array.prototype.values",function(i){return i||function(){return o(this,function(u,l){return l})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},c=this||self;function h(i){var u=typeof i;return u=u!="object"?u:i?Array.isArray(i)?"array":u:"null",u=="array"||u=="object"&&typeof i.length=="number"}function f(i){var u=typeof i;return u=="object"&&i!=null||u=="function"}function p(i,u,l){return i.call.apply(i.bind,arguments)}function T(i,u,l){if(!i)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var I=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(I,d),i.apply(u,I)}}return function(){return i.apply(u,arguments)}}function A(i,u,l){return A=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?p:T,A.apply(null,arguments)}function S(i,u){var l=Array.prototype.slice.call(arguments,1);return function(){var d=l.slice();return d.push.apply(d,arguments),i.apply(this,d)}}function V(i,u){function l(){}l.prototype=u.prototype,i.aa=u.prototype,i.prototype=new l,i.prototype.constructor=i,i.Qb=function(d,I,R){for(var b=Array(arguments.length-2),X=2;X<arguments.length;X++)b[X-2]=arguments[X];return u.prototype[I].apply(d,b)}}function D(i){const u=i.length;if(0<u){const l=Array(u);for(let d=0;d<u;d++)l[d]=i[d];return l}return[]}function N(i,u){for(let l=1;l<arguments.length;l++){const d=arguments[l];if(h(d)){const I=i.length||0,R=d.length||0;i.length=I+R;for(let b=0;b<R;b++)i[I+b]=d[b]}else i.push(d)}}class U{constructor(u,l){this.i=u,this.j=l,this.h=0,this.g=null}get(){let u;return 0<this.h?(this.h--,u=this.g,this.g=u.next,u.next=null):u=this.i(),u}}function q(i){return/^[\s\xa0]*$/.test(i)}function z(){var i=c.navigator;return i&&(i=i.userAgent)?i:""}function Y(i){return Y[" "](i),i}Y[" "]=function(){};var $=z().indexOf("Gecko")!=-1&&!(z().toLowerCase().indexOf("webkit")!=-1&&z().indexOf("Edge")==-1)&&!(z().indexOf("Trident")!=-1||z().indexOf("MSIE")!=-1)&&z().indexOf("Edge")==-1;function B(i,u,l){for(const d in i)u.call(l,i[d],d,i)}function v(i,u){for(const l in i)u.call(void 0,i[l],l,i)}function m(i){const u={};for(const l in i)u[l]=i[l];return u}const g="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function y(i,u){let l,d;for(let I=1;I<arguments.length;I++){d=arguments[I];for(l in d)i[l]=d[l];for(let R=0;R<g.length;R++)l=g[R],Object.prototype.hasOwnProperty.call(d,l)&&(i[l]=d[l])}}function E(i){var u=1;i=i.split(":");const l=[];for(;0<u&&i.length;)l.push(i.shift()),u--;return i.length&&l.push(i.join(":")),l}function w(i){c.setTimeout(()=>{throw i},0)}function _(){var i=Te;let u=null;return i.g&&(u=i.g,i.g=i.g.next,i.g||(i.h=null),u.next=null),u}class Pt{constructor(){this.h=this.g=null}add(u,l){const d=jt.get();d.set(u,l),this.h?this.h.next=d:this.g=d,this.h=d}}var jt=new U(()=>new Dn,i=>i.reset());class Dn{constructor(){this.next=this.g=this.h=null}set(u,l){this.h=u,this.g=l,this.next=null}reset(){this.next=this.g=this.h=null}}let zt,Kt=!1,Te=new Pt,Di=()=>{const i=c.Promise.resolve(void 0);zt=()=>{i.then(Lc)}};var Lc=()=>{for(var i;i=_();){try{i.h.call(i.g)}catch(l){w(l)}var u=jt;u.j(i),100>u.h&&(u.h++,i.next=u.g,u.g=i)}Kt=!1};function Ht(){this.s=this.s,this.C=this.C}Ht.prototype.s=!1,Ht.prototype.ma=function(){this.s||(this.s=!0,this.N())},Ht.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function dt(i,u){this.type=i,this.g=this.target=u,this.defaultPrevented=!1}dt.prototype.h=function(){this.defaultPrevented=!0};var Fc=function(){if(!c.addEventListener||!Object.defineProperty)return!1;var i=!1,u=Object.defineProperty({},"passive",{get:function(){i=!0}});try{const l=()=>{};c.addEventListener("test",l,u),c.removeEventListener("test",l,u)}catch{}return i}();function He(i,u){if(dt.call(this,i?i.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,i){var l=this.type=i.type,d=i.changedTouches&&i.changedTouches.length?i.changedTouches[0]:null;if(this.target=i.target||i.srcElement,this.g=u,u=i.relatedTarget){if($){t:{try{Y(u.nodeName);var I=!0;break t}catch{}I=!1}I||(u=null)}}else l=="mouseover"?u=i.fromElement:l=="mouseout"&&(u=i.toElement);this.relatedTarget=u,d?(this.clientX=d.clientX!==void 0?d.clientX:d.pageX,this.clientY=d.clientY!==void 0?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||0):(this.clientX=i.clientX!==void 0?i.clientX:i.pageX,this.clientY=i.clientY!==void 0?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0),this.button=i.button,this.key=i.key||"",this.ctrlKey=i.ctrlKey,this.altKey=i.altKey,this.shiftKey=i.shiftKey,this.metaKey=i.metaKey,this.pointerId=i.pointerId||0,this.pointerType=typeof i.pointerType=="string"?i.pointerType:Uc[i.pointerType]||"",this.state=i.state,this.i=i,i.defaultPrevented&&He.aa.h.call(this)}}V(He,dt);var Uc={2:"touch",3:"pen",4:"mouse"};He.prototype.h=function(){He.aa.h.call(this);var i=this.i;i.preventDefault?i.preventDefault():i.returnValue=!1};var Nn="closure_listenable_"+(1e6*Math.random()|0),Bc=0;function qc(i,u,l,d,I){this.listener=i,this.proxy=null,this.src=u,this.type=l,this.capture=!!d,this.ha=I,this.key=++Bc,this.da=this.fa=!1}function kn(i){i.da=!0,i.listener=null,i.proxy=null,i.src=null,i.ha=null}function Mn(i){this.src=i,this.g={},this.h=0}Mn.prototype.add=function(i,u,l,d,I){var R=i.toString();i=this.g[R],i||(i=this.g[R]=[],this.h++);var b=zr(i,u,d,I);return-1<b?(u=i[b],l||(u.fa=!1)):(u=new qc(u,this.src,R,!!d,I),u.fa=l,i.push(u)),u};function jr(i,u){var l=u.type;if(l in i.g){var d=i.g[l],I=Array.prototype.indexOf.call(d,u,void 0),R;(R=0<=I)&&Array.prototype.splice.call(d,I,1),R&&(kn(u),i.g[l].length==0&&(delete i.g[l],i.h--))}}function zr(i,u,l,d){for(var I=0;I<i.length;++I){var R=i[I];if(!R.da&&R.listener==u&&R.capture==!!l&&R.ha==d)return I}return-1}var Kr="closure_lm_"+(1e6*Math.random()|0),Hr={};function Ni(i,u,l,d,I){if(Array.isArray(u)){for(var R=0;R<u.length;R++)Ni(i,u[R],l,d,I);return null}return l=xi(l),i&&i[Nn]?i.K(u,l,f(d)?!!d.capture:!!d,I):$c(i,u,l,!1,d,I)}function $c(i,u,l,d,I,R){if(!u)throw Error("Invalid event type");var b=f(I)?!!I.capture:!!I,X=Qr(i);if(X||(i[Kr]=X=new Mn(i)),l=X.add(u,l,d,b,R),l.proxy)return l;if(d=jc(),l.proxy=d,d.src=i,d.listener=l,i.addEventListener)Fc||(I=b),I===void 0&&(I=!1),i.addEventListener(u.toString(),d,I);else if(i.attachEvent)i.attachEvent(Mi(u.toString()),d);else if(i.addListener&&i.removeListener)i.addListener(d);else throw Error("addEventListener and attachEvent are unavailable.");return l}function jc(){function i(l){return u.call(i.src,i.listener,l)}const u=zc;return i}function ki(i,u,l,d,I){if(Array.isArray(u))for(var R=0;R<u.length;R++)ki(i,u[R],l,d,I);else d=f(d)?!!d.capture:!!d,l=xi(l),i&&i[Nn]?(i=i.i,u=String(u).toString(),u in i.g&&(R=i.g[u],l=zr(R,l,d,I),-1<l&&(kn(R[l]),Array.prototype.splice.call(R,l,1),R.length==0&&(delete i.g[u],i.h--)))):i&&(i=Qr(i))&&(u=i.g[u.toString()],i=-1,u&&(i=zr(u,l,d,I)),(l=-1<i?u[i]:null)&&Gr(l))}function Gr(i){if(typeof i!="number"&&i&&!i.da){var u=i.src;if(u&&u[Nn])jr(u.i,i);else{var l=i.type,d=i.proxy;u.removeEventListener?u.removeEventListener(l,d,i.capture):u.detachEvent?u.detachEvent(Mi(l),d):u.addListener&&u.removeListener&&u.removeListener(d),(l=Qr(u))?(jr(l,i),l.h==0&&(l.src=null,u[Kr]=null)):kn(i)}}}function Mi(i){return i in Hr?Hr[i]:Hr[i]="on"+i}function zc(i,u){if(i.da)i=!0;else{u=new He(u,this);var l=i.listener,d=i.ha||i.src;i.fa&&Gr(i),i=l.call(d,u)}return i}function Qr(i){return i=i[Kr],i instanceof Mn?i:null}var Wr="__closure_events_fn_"+(1e9*Math.random()>>>0);function xi(i){return typeof i=="function"?i:(i[Wr]||(i[Wr]=function(u){return i.handleEvent(u)}),i[Wr])}function ft(){Ht.call(this),this.i=new Mn(this),this.M=this,this.F=null}V(ft,Ht),ft.prototype[Nn]=!0,ft.prototype.removeEventListener=function(i,u,l,d){ki(this,i,u,l,d)};function Et(i,u){var l,d=i.F;if(d)for(l=[];d;d=d.F)l.push(d);if(i=i.M,d=u.type||u,typeof u=="string")u=new dt(u,i);else if(u instanceof dt)u.target=u.target||i;else{var I=u;u=new dt(d,i),y(u,I)}if(I=!0,l)for(var R=l.length-1;0<=R;R--){var b=u.g=l[R];I=xn(b,d,!0,u)&&I}if(b=u.g=i,I=xn(b,d,!0,u)&&I,I=xn(b,d,!1,u)&&I,l)for(R=0;R<l.length;R++)b=u.g=l[R],I=xn(b,d,!1,u)&&I}ft.prototype.N=function(){if(ft.aa.N.call(this),this.i){var i=this.i,u;for(u in i.g){for(var l=i.g[u],d=0;d<l.length;d++)kn(l[d]);delete i.g[u],i.h--}}this.F=null},ft.prototype.K=function(i,u,l,d){return this.i.add(String(i),u,!1,l,d)},ft.prototype.L=function(i,u,l,d){return this.i.add(String(i),u,!0,l,d)};function xn(i,u,l,d){if(u=i.i.g[String(u)],!u)return!0;u=u.concat();for(var I=!0,R=0;R<u.length;++R){var b=u[R];if(b&&!b.da&&b.capture==l){var X=b.listener,ut=b.ha||b.src;b.fa&&jr(i.i,b),I=X.call(ut,d)!==!1&&I}}return I&&!d.defaultPrevented}function Oi(i,u,l){if(typeof i=="function")l&&(i=A(i,l));else if(i&&typeof i.handleEvent=="function")i=A(i.handleEvent,i);else throw Error("Invalid listener argument");return 2147483647<Number(u)?-1:c.setTimeout(i,u||0)}function Li(i){i.g=Oi(()=>{i.g=null,i.i&&(i.i=!1,Li(i))},i.l);const u=i.h;i.h=null,i.m.apply(null,u)}class Kc extends Ht{constructor(u,l){super(),this.m=u,this.l=l,this.h=null,this.i=!1,this.g=null}j(u){this.h=arguments,this.g?this.i=!0:Li(this)}N(){super.N(),this.g&&(c.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ge(i){Ht.call(this),this.h=i,this.g={}}V(Ge,Ht);var Fi=[];function Ui(i){B(i.g,function(u,l){this.g.hasOwnProperty(l)&&Gr(u)},i),i.g={}}Ge.prototype.N=function(){Ge.aa.N.call(this),Ui(this)},Ge.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Xr=c.JSON.stringify,Hc=c.JSON.parse,Gc=class{stringify(i){return c.JSON.stringify(i,void 0)}parse(i){return c.JSON.parse(i,void 0)}};function Yr(){}Yr.prototype.h=null;function Bi(i){return i.h||(i.h=i.i())}function qi(){}var Qe={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Jr(){dt.call(this,"d")}V(Jr,dt);function Zr(){dt.call(this,"c")}V(Zr,dt);var he={},$i=null;function On(){return $i=$i||new ft}he.La="serverreachability";function ji(i){dt.call(this,he.La,i)}V(ji,dt);function We(i){const u=On();Et(u,new ji(u))}he.STAT_EVENT="statevent";function zi(i,u){dt.call(this,he.STAT_EVENT,i),this.stat=u}V(zi,dt);function vt(i){const u=On();Et(u,new zi(u,i))}he.Ma="timingevent";function Ki(i,u){dt.call(this,he.Ma,i),this.size=u}V(Ki,dt);function Xe(i,u){if(typeof i!="function")throw Error("Fn must not be null and must be a function");return c.setTimeout(function(){i()},u)}function Ye(){this.g=!0}Ye.prototype.xa=function(){this.g=!1};function Qc(i,u,l,d,I,R){i.info(function(){if(i.g)if(R)for(var b="",X=R.split("&"),ut=0;ut<X.length;ut++){var Q=X[ut].split("=");if(1<Q.length){var pt=Q[0];Q=Q[1];var mt=pt.split("_");b=2<=mt.length&&mt[1]=="type"?b+(pt+"="+Q+"&"):b+(pt+"=redacted&")}}else b=null;else b=R;return"XMLHTTP REQ ("+d+") [attempt "+I+"]: "+u+`
`+l+`
`+b})}function Wc(i,u,l,d,I,R,b){i.info(function(){return"XMLHTTP RESP ("+d+") [ attempt "+I+"]: "+u+`
`+l+`
`+R+" "+b})}function Ie(i,u,l,d){i.info(function(){return"XMLHTTP TEXT ("+u+"): "+Yc(i,l)+(d?" "+d:"")})}function Xc(i,u){i.info(function(){return"TIMEOUT: "+u})}Ye.prototype.info=function(){};function Yc(i,u){if(!i.g)return u;if(!u)return null;try{var l=JSON.parse(u);if(l){for(i=0;i<l.length;i++)if(Array.isArray(l[i])){var d=l[i];if(!(2>d.length)){var I=d[1];if(Array.isArray(I)&&!(1>I.length)){var R=I[0];if(R!="noop"&&R!="stop"&&R!="close")for(var b=1;b<I.length;b++)I[b]=""}}}}return Xr(l)}catch{return u}}var Ln={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Hi={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},ts;function Fn(){}V(Fn,Yr),Fn.prototype.g=function(){return new XMLHttpRequest},Fn.prototype.i=function(){return{}},ts=new Fn;function Gt(i,u,l,d){this.j=i,this.i=u,this.l=l,this.R=d||1,this.U=new Ge(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Gi}function Gi(){this.i=null,this.g="",this.h=!1}var Qi={},es={};function ns(i,u,l){i.L=1,i.v=$n(xt(u)),i.m=l,i.P=!0,Wi(i,null)}function Wi(i,u){i.F=Date.now(),Un(i),i.A=xt(i.v);var l=i.A,d=i.R;Array.isArray(d)||(d=[String(d)]),co(l.i,"t",d),i.C=0,l=i.j.J,i.h=new Gi,i.g=Co(i.j,l?u:null,!i.m),0<i.O&&(i.M=new Kc(A(i.Y,i,i.g),i.O)),u=i.U,l=i.g,d=i.ca;var I="readystatechange";Array.isArray(I)||(I&&(Fi[0]=I.toString()),I=Fi);for(var R=0;R<I.length;R++){var b=Ni(l,I[R],d||u.handleEvent,!1,u.h||u);if(!b)break;u.g[b.key]=b}u=i.H?m(i.H):{},i.m?(i.u||(i.u="POST"),u["Content-Type"]="application/x-www-form-urlencoded",i.g.ea(i.A,i.u,i.m,u)):(i.u="GET",i.g.ea(i.A,i.u,null,u)),We(),Qc(i.i,i.u,i.A,i.l,i.R,i.m)}Gt.prototype.ca=function(i){i=i.target;const u=this.M;u&&Ot(i)==3?u.j():this.Y(i)},Gt.prototype.Y=function(i){try{if(i==this.g)t:{const mt=Ot(this.g);var u=this.g.Ba();const Re=this.g.Z();if(!(3>mt)&&(mt!=3||this.g&&(this.h.h||this.g.oa()||_o(this.g)))){this.J||mt!=4||u==7||(u==8||0>=Re?We(3):We(2)),rs(this);var l=this.g.Z();this.X=l;e:if(Xi(this)){var d=_o(this.g);i="";var I=d.length,R=Ot(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){de(this),Je(this);var b="";break e}this.h.i=new c.TextDecoder}for(u=0;u<I;u++)this.h.h=!0,i+=this.h.i.decode(d[u],{stream:!(R&&u==I-1)});d.length=0,this.h.g+=i,this.C=0,b=this.h.g}else b=this.g.oa();if(this.o=l==200,Wc(this.i,this.u,this.A,this.l,this.R,mt,l),this.o){if(this.T&&!this.K){e:{if(this.g){var X,ut=this.g;if((X=ut.g?ut.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!q(X)){var Q=X;break e}}Q=null}if(l=Q)Ie(this.i,this.l,l,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,ss(this,l);else{this.o=!1,this.s=3,vt(12),de(this),Je(this);break t}}if(this.P){l=!0;let Ct;for(;!this.J&&this.C<b.length;)if(Ct=Jc(this,b),Ct==es){mt==4&&(this.s=4,vt(14),l=!1),Ie(this.i,this.l,null,"[Incomplete Response]");break}else if(Ct==Qi){this.s=4,vt(15),Ie(this.i,this.l,b,"[Invalid Chunk]"),l=!1;break}else Ie(this.i,this.l,Ct,null),ss(this,Ct);if(Xi(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),mt!=4||b.length!=0||this.h.h||(this.s=1,vt(16),l=!1),this.o=this.o&&l,!l)Ie(this.i,this.l,b,"[Invalid Chunked Response]"),de(this),Je(this);else if(0<b.length&&!this.W){this.W=!0;var pt=this.j;pt.g==this&&pt.ba&&!pt.M&&(pt.j.info("Great, no buffering proxy detected. Bytes received: "+b.length),ls(pt),pt.M=!0,vt(11))}}else Ie(this.i,this.l,b,null),ss(this,b);mt==4&&de(this),this.o&&!this.J&&(mt==4?Ao(this.j,this):(this.o=!1,Un(this)))}else ml(this.g),l==400&&0<b.indexOf("Unknown SID")?(this.s=3,vt(12)):(this.s=0,vt(13)),de(this),Je(this)}}}catch{}finally{}};function Xi(i){return i.g?i.u=="GET"&&i.L!=2&&i.j.Ca:!1}function Jc(i,u){var l=i.C,d=u.indexOf(`
`,l);return d==-1?es:(l=Number(u.substring(l,d)),isNaN(l)?Qi:(d+=1,d+l>u.length?es:(u=u.slice(d,d+l),i.C=d+l,u)))}Gt.prototype.cancel=function(){this.J=!0,de(this)};function Un(i){i.S=Date.now()+i.I,Yi(i,i.I)}function Yi(i,u){if(i.B!=null)throw Error("WatchDog timer not null");i.B=Xe(A(i.ba,i),u)}function rs(i){i.B&&(c.clearTimeout(i.B),i.B=null)}Gt.prototype.ba=function(){this.B=null;const i=Date.now();0<=i-this.S?(Xc(this.i,this.A),this.L!=2&&(We(),vt(17)),de(this),this.s=2,Je(this)):Yi(this,this.S-i)};function Je(i){i.j.G==0||i.J||Ao(i.j,i)}function de(i){rs(i);var u=i.M;u&&typeof u.ma=="function"&&u.ma(),i.M=null,Ui(i.U),i.g&&(u=i.g,i.g=null,u.abort(),u.ma())}function ss(i,u){try{var l=i.j;if(l.G!=0&&(l.g==i||is(l.h,i))){if(!i.K&&is(l.h,i)&&l.G==3){try{var d=l.Da.g.parse(u)}catch{d=null}if(Array.isArray(d)&&d.length==3){var I=d;if(I[0]==0){t:if(!l.u){if(l.g)if(l.g.F+3e3<i.F)Qn(l),Hn(l);else break t;cs(l),vt(18)}}else l.za=I[1],0<l.za-l.T&&37500>I[2]&&l.F&&l.v==0&&!l.C&&(l.C=Xe(A(l.Za,l),6e3));if(1>=to(l.h)&&l.ca){try{l.ca()}catch{}l.ca=void 0}}else pe(l,11)}else if((i.K||l.g==i)&&Qn(l),!q(u))for(I=l.Da.g.parse(u),u=0;u<I.length;u++){let Q=I[u];if(l.T=Q[0],Q=Q[1],l.G==2)if(Q[0]=="c"){l.K=Q[1],l.ia=Q[2];const pt=Q[3];pt!=null&&(l.la=pt,l.j.info("VER="+l.la));const mt=Q[4];mt!=null&&(l.Aa=mt,l.j.info("SVER="+l.Aa));const Re=Q[5];Re!=null&&typeof Re=="number"&&0<Re&&(d=1.5*Re,l.L=d,l.j.info("backChannelRequestTimeoutMs_="+d)),d=l;const Ct=i.g;if(Ct){const Xn=Ct.g?Ct.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Xn){var R=d.h;R.g||Xn.indexOf("spdy")==-1&&Xn.indexOf("quic")==-1&&Xn.indexOf("h2")==-1||(R.j=R.l,R.g=new Set,R.h&&(os(R,R.h),R.h=null))}if(d.D){const hs=Ct.g?Ct.g.getResponseHeader("X-HTTP-Session-Id"):null;hs&&(d.ya=hs,J(d.I,d.D,hs))}}l.G=3,l.l&&l.l.ua(),l.ba&&(l.R=Date.now()-i.F,l.j.info("Handshake RTT: "+l.R+"ms")),d=l;var b=i;if(d.qa=Po(d,d.J?d.ia:null,d.W),b.K){eo(d.h,b);var X=b,ut=d.L;ut&&(X.I=ut),X.B&&(rs(X),Un(X)),d.g=b}else Io(d);0<l.i.length&&Gn(l)}else Q[0]!="stop"&&Q[0]!="close"||pe(l,7);else l.G==3&&(Q[0]=="stop"||Q[0]=="close"?Q[0]=="stop"?pe(l,7):us(l):Q[0]!="noop"&&l.l&&l.l.ta(Q),l.v=0)}}We(4)}catch{}}var Zc=class{constructor(i,u){this.g=i,this.map=u}};function Ji(i){this.l=i||10,c.PerformanceNavigationTiming?(i=c.performance.getEntriesByType("navigation"),i=0<i.length&&(i[0].nextHopProtocol=="hq"||i[0].nextHopProtocol=="h2")):i=!!(c.chrome&&c.chrome.loadTimes&&c.chrome.loadTimes()&&c.chrome.loadTimes().wasFetchedViaSpdy),this.j=i?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Zi(i){return i.h?!0:i.g?i.g.size>=i.j:!1}function to(i){return i.h?1:i.g?i.g.size:0}function is(i,u){return i.h?i.h==u:i.g?i.g.has(u):!1}function os(i,u){i.g?i.g.add(u):i.h=u}function eo(i,u){i.h&&i.h==u?i.h=null:i.g&&i.g.has(u)&&i.g.delete(u)}Ji.prototype.cancel=function(){if(this.i=no(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const i of this.g.values())i.cancel();this.g.clear()}};function no(i){if(i.h!=null)return i.i.concat(i.h.D);if(i.g!=null&&i.g.size!==0){let u=i.i;for(const l of i.g.values())u=u.concat(l.D);return u}return D(i.i)}function tl(i){if(i.V&&typeof i.V=="function")return i.V();if(typeof Map<"u"&&i instanceof Map||typeof Set<"u"&&i instanceof Set)return Array.from(i.values());if(typeof i=="string")return i.split("");if(h(i)){for(var u=[],l=i.length,d=0;d<l;d++)u.push(i[d]);return u}u=[],l=0;for(d in i)u[l++]=i[d];return u}function el(i){if(i.na&&typeof i.na=="function")return i.na();if(!i.V||typeof i.V!="function"){if(typeof Map<"u"&&i instanceof Map)return Array.from(i.keys());if(!(typeof Set<"u"&&i instanceof Set)){if(h(i)||typeof i=="string"){var u=[];i=i.length;for(var l=0;l<i;l++)u.push(l);return u}u=[],l=0;for(const d in i)u[l++]=d;return u}}}function ro(i,u){if(i.forEach&&typeof i.forEach=="function")i.forEach(u,void 0);else if(h(i)||typeof i=="string")Array.prototype.forEach.call(i,u,void 0);else for(var l=el(i),d=tl(i),I=d.length,R=0;R<I;R++)u.call(void 0,d[R],l&&l[R],i)}var so=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function nl(i,u){if(i){i=i.split("&");for(var l=0;l<i.length;l++){var d=i[l].indexOf("="),I=null;if(0<=d){var R=i[l].substring(0,d);I=i[l].substring(d+1)}else R=i[l];u(R,I?decodeURIComponent(I.replace(/\+/g," ")):"")}}}function fe(i){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,i instanceof fe){this.h=i.h,Bn(this,i.j),this.o=i.o,this.g=i.g,qn(this,i.s),this.l=i.l;var u=i.i,l=new en;l.i=u.i,u.g&&(l.g=new Map(u.g),l.h=u.h),io(this,l),this.m=i.m}else i&&(u=String(i).match(so))?(this.h=!1,Bn(this,u[1]||"",!0),this.o=Ze(u[2]||""),this.g=Ze(u[3]||"",!0),qn(this,u[4]),this.l=Ze(u[5]||"",!0),io(this,u[6]||"",!0),this.m=Ze(u[7]||"")):(this.h=!1,this.i=new en(null,this.h))}fe.prototype.toString=function(){var i=[],u=this.j;u&&i.push(tn(u,oo,!0),":");var l=this.g;return(l||u=="file")&&(i.push("//"),(u=this.o)&&i.push(tn(u,oo,!0),"@"),i.push(encodeURIComponent(String(l)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),l=this.s,l!=null&&i.push(":",String(l))),(l=this.l)&&(this.g&&l.charAt(0)!="/"&&i.push("/"),i.push(tn(l,l.charAt(0)=="/"?il:sl,!0))),(l=this.i.toString())&&i.push("?",l),(l=this.m)&&i.push("#",tn(l,al)),i.join("")};function xt(i){return new fe(i)}function Bn(i,u,l){i.j=l?Ze(u,!0):u,i.j&&(i.j=i.j.replace(/:$/,""))}function qn(i,u){if(u){if(u=Number(u),isNaN(u)||0>u)throw Error("Bad port number "+u);i.s=u}else i.s=null}function io(i,u,l){u instanceof en?(i.i=u,ul(i.i,i.h)):(l||(u=tn(u,ol)),i.i=new en(u,i.h))}function J(i,u,l){i.i.set(u,l)}function $n(i){return J(i,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),i}function Ze(i,u){return i?u?decodeURI(i.replace(/%25/g,"%2525")):decodeURIComponent(i):""}function tn(i,u,l){return typeof i=="string"?(i=encodeURI(i).replace(u,rl),l&&(i=i.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),i):null}function rl(i){return i=i.charCodeAt(0),"%"+(i>>4&15).toString(16)+(i&15).toString(16)}var oo=/[#\/\?@]/g,sl=/[#\?:]/g,il=/[#\?]/g,ol=/[#\?@]/g,al=/#/g;function en(i,u){this.h=this.g=null,this.i=i||null,this.j=!!u}function Qt(i){i.g||(i.g=new Map,i.h=0,i.i&&nl(i.i,function(u,l){i.add(decodeURIComponent(u.replace(/\+/g," ")),l)}))}n=en.prototype,n.add=function(i,u){Qt(this),this.i=null,i=we(this,i);var l=this.g.get(i);return l||this.g.set(i,l=[]),l.push(u),this.h+=1,this};function ao(i,u){Qt(i),u=we(i,u),i.g.has(u)&&(i.i=null,i.h-=i.g.get(u).length,i.g.delete(u))}function uo(i,u){return Qt(i),u=we(i,u),i.g.has(u)}n.forEach=function(i,u){Qt(this),this.g.forEach(function(l,d){l.forEach(function(I){i.call(u,I,d,this)},this)},this)},n.na=function(){Qt(this);const i=Array.from(this.g.values()),u=Array.from(this.g.keys()),l=[];for(let d=0;d<u.length;d++){const I=i[d];for(let R=0;R<I.length;R++)l.push(u[d])}return l},n.V=function(i){Qt(this);let u=[];if(typeof i=="string")uo(this,i)&&(u=u.concat(this.g.get(we(this,i))));else{i=Array.from(this.g.values());for(let l=0;l<i.length;l++)u=u.concat(i[l])}return u},n.set=function(i,u){return Qt(this),this.i=null,i=we(this,i),uo(this,i)&&(this.h-=this.g.get(i).length),this.g.set(i,[u]),this.h+=1,this},n.get=function(i,u){return i?(i=this.V(i),0<i.length?String(i[0]):u):u};function co(i,u,l){ao(i,u),0<l.length&&(i.i=null,i.g.set(we(i,u),D(l)),i.h+=l.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const i=[],u=Array.from(this.g.keys());for(var l=0;l<u.length;l++){var d=u[l];const R=encodeURIComponent(String(d)),b=this.V(d);for(d=0;d<b.length;d++){var I=R;b[d]!==""&&(I+="="+encodeURIComponent(String(b[d]))),i.push(I)}}return this.i=i.join("&")};function we(i,u){return u=String(u),i.j&&(u=u.toLowerCase()),u}function ul(i,u){u&&!i.j&&(Qt(i),i.i=null,i.g.forEach(function(l,d){var I=d.toLowerCase();d!=I&&(ao(this,d),co(this,I,l))},i)),i.j=u}function cl(i,u){const l=new Ye;if(c.Image){const d=new Image;d.onload=S(Wt,l,"TestLoadImage: loaded",!0,u,d),d.onerror=S(Wt,l,"TestLoadImage: error",!1,u,d),d.onabort=S(Wt,l,"TestLoadImage: abort",!1,u,d),d.ontimeout=S(Wt,l,"TestLoadImage: timeout",!1,u,d),c.setTimeout(function(){d.ontimeout&&d.ontimeout()},1e4),d.src=i}else u(!1)}function ll(i,u){const l=new Ye,d=new AbortController,I=setTimeout(()=>{d.abort(),Wt(l,"TestPingServer: timeout",!1,u)},1e4);fetch(i,{signal:d.signal}).then(R=>{clearTimeout(I),R.ok?Wt(l,"TestPingServer: ok",!0,u):Wt(l,"TestPingServer: server error",!1,u)}).catch(()=>{clearTimeout(I),Wt(l,"TestPingServer: error",!1,u)})}function Wt(i,u,l,d,I){try{I&&(I.onload=null,I.onerror=null,I.onabort=null,I.ontimeout=null),d(l)}catch{}}function hl(){this.g=new Gc}function dl(i,u,l){const d=l||"";try{ro(i,function(I,R){let b=I;f(I)&&(b=Xr(I)),u.push(d+R+"="+encodeURIComponent(b))})}catch(I){throw u.push(d+"type="+encodeURIComponent("_badmap")),I}}function jn(i){this.l=i.Ub||null,this.j=i.eb||!1}V(jn,Yr),jn.prototype.g=function(){return new zn(this.l,this.j)},jn.prototype.i=function(i){return function(){return i}}({});function zn(i,u){ft.call(this),this.D=i,this.o=u,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}V(zn,ft),n=zn.prototype,n.open=function(i,u){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=i,this.A=u,this.readyState=1,rn(this)},n.send=function(i){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const u={headers:this.u,method:this.B,credentials:this.m,cache:void 0};i&&(u.body=i),(this.D||c).fetch(new Request(this.A,u)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,nn(this)),this.readyState=0},n.Sa=function(i){if(this.g&&(this.l=i,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=i.headers,this.readyState=2,rn(this)),this.g&&(this.readyState=3,rn(this),this.g)))if(this.responseType==="arraybuffer")i.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof c.ReadableStream<"u"&&"body"in i){if(this.j=i.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;lo(this)}else i.text().then(this.Ra.bind(this),this.ga.bind(this))};function lo(i){i.j.read().then(i.Pa.bind(i)).catch(i.ga.bind(i))}n.Pa=function(i){if(this.g){if(this.o&&i.value)this.response.push(i.value);else if(!this.o){var u=i.value?i.value:new Uint8Array(0);(u=this.v.decode(u,{stream:!i.done}))&&(this.response=this.responseText+=u)}i.done?nn(this):rn(this),this.readyState==3&&lo(this)}},n.Ra=function(i){this.g&&(this.response=this.responseText=i,nn(this))},n.Qa=function(i){this.g&&(this.response=i,nn(this))},n.ga=function(){this.g&&nn(this)};function nn(i){i.readyState=4,i.l=null,i.j=null,i.v=null,rn(i)}n.setRequestHeader=function(i,u){this.u.append(i,u)},n.getResponseHeader=function(i){return this.h&&this.h.get(i.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const i=[],u=this.h.entries();for(var l=u.next();!l.done;)l=l.value,i.push(l[0]+": "+l[1]),l=u.next();return i.join(`\r
`)};function rn(i){i.onreadystatechange&&i.onreadystatechange.call(i)}Object.defineProperty(zn.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(i){this.m=i?"include":"same-origin"}});function ho(i){let u="";return B(i,function(l,d){u+=d,u+=":",u+=l,u+=`\r
`}),u}function as(i,u,l){t:{for(d in l){var d=!1;break t}d=!0}d||(l=ho(l),typeof i=="string"?l!=null&&encodeURIComponent(String(l)):J(i,u,l))}function et(i){ft.call(this),this.headers=new Map,this.o=i||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}V(et,ft);var fl=/^https?$/i,pl=["POST","PUT"];n=et.prototype,n.Ha=function(i){this.J=i},n.ea=function(i,u,l,d){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+i);u=u?u.toUpperCase():"GET",this.D=i,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():ts.g(),this.v=this.o?Bi(this.o):Bi(ts),this.g.onreadystatechange=A(this.Ea,this);try{this.B=!0,this.g.open(u,String(i),!0),this.B=!1}catch(R){fo(this,R);return}if(i=l||"",l=new Map(this.headers),d)if(Object.getPrototypeOf(d)===Object.prototype)for(var I in d)l.set(I,d[I]);else if(typeof d.keys=="function"&&typeof d.get=="function")for(const R of d.keys())l.set(R,d.get(R));else throw Error("Unknown input type for opt_headers: "+String(d));d=Array.from(l.keys()).find(R=>R.toLowerCase()=="content-type"),I=c.FormData&&i instanceof c.FormData,!(0<=Array.prototype.indexOf.call(pl,u,void 0))||d||I||l.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[R,b]of l)this.g.setRequestHeader(R,b);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{go(this),this.u=!0,this.g.send(i),this.u=!1}catch(R){fo(this,R)}};function fo(i,u){i.h=!1,i.g&&(i.j=!0,i.g.abort(),i.j=!1),i.l=u,i.m=5,po(i),Kn(i)}function po(i){i.A||(i.A=!0,Et(i,"complete"),Et(i,"error"))}n.abort=function(i){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=i||7,Et(this,"complete"),Et(this,"abort"),Kn(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Kn(this,!0)),et.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?mo(this):this.bb())},n.bb=function(){mo(this)};function mo(i){if(i.h&&typeof a<"u"&&(!i.v[1]||Ot(i)!=4||i.Z()!=2)){if(i.u&&Ot(i)==4)Oi(i.Ea,0,i);else if(Et(i,"readystatechange"),Ot(i)==4){i.h=!1;try{const b=i.Z();t:switch(b){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var u=!0;break t;default:u=!1}var l;if(!(l=u)){var d;if(d=b===0){var I=String(i.D).match(so)[1]||null;!I&&c.self&&c.self.location&&(I=c.self.location.protocol.slice(0,-1)),d=!fl.test(I?I.toLowerCase():"")}l=d}if(l)Et(i,"complete"),Et(i,"success");else{i.m=6;try{var R=2<Ot(i)?i.g.statusText:""}catch{R=""}i.l=R+" ["+i.Z()+"]",po(i)}}finally{Kn(i)}}}}function Kn(i,u){if(i.g){go(i);const l=i.g,d=i.v[0]?()=>{}:null;i.g=null,i.v=null,u||Et(i,"ready");try{l.onreadystatechange=d}catch{}}}function go(i){i.I&&(c.clearTimeout(i.I),i.I=null)}n.isActive=function(){return!!this.g};function Ot(i){return i.g?i.g.readyState:0}n.Z=function(){try{return 2<Ot(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(i){if(this.g){var u=this.g.responseText;return i&&u.indexOf(i)==0&&(u=u.substring(i.length)),Hc(u)}};function _o(i){try{if(!i.g)return null;if("response"in i.g)return i.g.response;switch(i.H){case"":case"text":return i.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in i.g)return i.g.mozResponseArrayBuffer}return null}catch{return null}}function ml(i){const u={};i=(i.g&&2<=Ot(i)&&i.g.getAllResponseHeaders()||"").split(`\r
`);for(let d=0;d<i.length;d++){if(q(i[d]))continue;var l=E(i[d]);const I=l[0];if(l=l[1],typeof l!="string")continue;l=l.trim();const R=u[I]||[];u[I]=R,R.push(l)}v(u,function(d){return d.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function sn(i,u,l){return l&&l.internalChannelParams&&l.internalChannelParams[i]||u}function yo(i){this.Aa=0,this.i=[],this.j=new Ye,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=sn("failFast",!1,i),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=sn("baseRetryDelayMs",5e3,i),this.cb=sn("retryDelaySeedMs",1e4,i),this.Wa=sn("forwardChannelMaxRetries",2,i),this.wa=sn("forwardChannelRequestTimeoutMs",2e4,i),this.pa=i&&i.xmlHttpFactory||void 0,this.Xa=i&&i.Tb||void 0,this.Ca=i&&i.useFetchStreams||!1,this.L=void 0,this.J=i&&i.supportsCrossDomainXhr||!1,this.K="",this.h=new Ji(i&&i.concurrentRequestLimit),this.Da=new hl,this.P=i&&i.fastHandshake||!1,this.O=i&&i.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=i&&i.Rb||!1,i&&i.xa&&this.j.xa(),i&&i.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&i&&i.detectBufferingProxy||!1,this.ja=void 0,i&&i.longPollingTimeout&&0<i.longPollingTimeout&&(this.ja=i.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=yo.prototype,n.la=8,n.G=1,n.connect=function(i,u,l,d){vt(0),this.W=i,this.H=u||{},l&&d!==void 0&&(this.H.OSID=l,this.H.OAID=d),this.F=this.X,this.I=Po(this,null,this.W),Gn(this)};function us(i){if(Eo(i),i.G==3){var u=i.U++,l=xt(i.I);if(J(l,"SID",i.K),J(l,"RID",u),J(l,"TYPE","terminate"),on(i,l),u=new Gt(i,i.j,u),u.L=2,u.v=$n(xt(l)),l=!1,c.navigator&&c.navigator.sendBeacon)try{l=c.navigator.sendBeacon(u.v.toString(),"")}catch{}!l&&c.Image&&(new Image().src=u.v,l=!0),l||(u.g=Co(u.j,null),u.g.ea(u.v)),u.F=Date.now(),Un(u)}So(i)}function Hn(i){i.g&&(ls(i),i.g.cancel(),i.g=null)}function Eo(i){Hn(i),i.u&&(c.clearTimeout(i.u),i.u=null),Qn(i),i.h.cancel(),i.s&&(typeof i.s=="number"&&c.clearTimeout(i.s),i.s=null)}function Gn(i){if(!Zi(i.h)&&!i.s){i.s=!0;var u=i.Ga;zt||Di(),Kt||(zt(),Kt=!0),Te.add(u,i),i.B=0}}function gl(i,u){return to(i.h)>=i.h.j-(i.s?1:0)?!1:i.s?(i.i=u.D.concat(i.i),!0):i.G==1||i.G==2||i.B>=(i.Va?0:i.Wa)?!1:(i.s=Xe(A(i.Ga,i,u),Ro(i,i.B)),i.B++,!0)}n.Ga=function(i){if(this.s)if(this.s=null,this.G==1){if(!i){this.U=Math.floor(1e5*Math.random()),i=this.U++;const I=new Gt(this,this.j,i);let R=this.o;if(this.S&&(R?(R=m(R),y(R,this.S)):R=this.S),this.m!==null||this.O||(I.H=R,R=null),this.P)t:{for(var u=0,l=0;l<this.i.length;l++){e:{var d=this.i[l];if("__data__"in d.map&&(d=d.map.__data__,typeof d=="string")){d=d.length;break e}d=void 0}if(d===void 0)break;if(u+=d,4096<u){u=l;break t}if(u===4096||l===this.i.length-1){u=l+1;break t}}u=1e3}else u=1e3;u=To(this,I,u),l=xt(this.I),J(l,"RID",i),J(l,"CVER",22),this.D&&J(l,"X-HTTP-Session-Id",this.D),on(this,l),R&&(this.O?u="headers="+encodeURIComponent(String(ho(R)))+"&"+u:this.m&&as(l,this.m,R)),os(this.h,I),this.Ua&&J(l,"TYPE","init"),this.P?(J(l,"$req",u),J(l,"SID","null"),I.T=!0,ns(I,l,null)):ns(I,l,u),this.G=2}}else this.G==3&&(i?vo(this,i):this.i.length==0||Zi(this.h)||vo(this))};function vo(i,u){var l;u?l=u.l:l=i.U++;const d=xt(i.I);J(d,"SID",i.K),J(d,"RID",l),J(d,"AID",i.T),on(i,d),i.m&&i.o&&as(d,i.m,i.o),l=new Gt(i,i.j,l,i.B+1),i.m===null&&(l.H=i.o),u&&(i.i=u.D.concat(i.i)),u=To(i,l,1e3),l.I=Math.round(.5*i.wa)+Math.round(.5*i.wa*Math.random()),os(i.h,l),ns(l,d,u)}function on(i,u){i.H&&B(i.H,function(l,d){J(u,d,l)}),i.l&&ro({},function(l,d){J(u,d,l)})}function To(i,u,l){l=Math.min(i.i.length,l);var d=i.l?A(i.l.Na,i.l,i):null;t:{var I=i.i;let R=-1;for(;;){const b=["count="+l];R==-1?0<l?(R=I[0].g,b.push("ofs="+R)):R=0:b.push("ofs="+R);let X=!0;for(let ut=0;ut<l;ut++){let Q=I[ut].g;const pt=I[ut].map;if(Q-=R,0>Q)R=Math.max(0,I[ut].g-100),X=!1;else try{dl(pt,b,"req"+Q+"_")}catch{d&&d(pt)}}if(X){d=b.join("&");break t}}}return i=i.i.splice(0,l),u.D=i,d}function Io(i){if(!i.g&&!i.u){i.Y=1;var u=i.Fa;zt||Di(),Kt||(zt(),Kt=!0),Te.add(u,i),i.v=0}}function cs(i){return i.g||i.u||3<=i.v?!1:(i.Y++,i.u=Xe(A(i.Fa,i),Ro(i,i.v)),i.v++,!0)}n.Fa=function(){if(this.u=null,wo(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var i=2*this.R;this.j.info("BP detection timer enabled: "+i),this.A=Xe(A(this.ab,this),i)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,vt(10),Hn(this),wo(this))};function ls(i){i.A!=null&&(c.clearTimeout(i.A),i.A=null)}function wo(i){i.g=new Gt(i,i.j,"rpc",i.Y),i.m===null&&(i.g.H=i.o),i.g.O=0;var u=xt(i.qa);J(u,"RID","rpc"),J(u,"SID",i.K),J(u,"AID",i.T),J(u,"CI",i.F?"0":"1"),!i.F&&i.ja&&J(u,"TO",i.ja),J(u,"TYPE","xmlhttp"),on(i,u),i.m&&i.o&&as(u,i.m,i.o),i.L&&(i.g.I=i.L);var l=i.g;i=i.ia,l.L=1,l.v=$n(xt(u)),l.m=null,l.P=!0,Wi(l,i)}n.Za=function(){this.C!=null&&(this.C=null,Hn(this),cs(this),vt(19))};function Qn(i){i.C!=null&&(c.clearTimeout(i.C),i.C=null)}function Ao(i,u){var l=null;if(i.g==u){Qn(i),ls(i),i.g=null;var d=2}else if(is(i.h,u))l=u.D,eo(i.h,u),d=1;else return;if(i.G!=0){if(u.o)if(d==1){l=u.m?u.m.length:0,u=Date.now()-u.F;var I=i.B;d=On(),Et(d,new Ki(d,l)),Gn(i)}else Io(i);else if(I=u.s,I==3||I==0&&0<u.X||!(d==1&&gl(i,u)||d==2&&cs(i)))switch(l&&0<l.length&&(u=i.h,u.i=u.i.concat(l)),I){case 1:pe(i,5);break;case 4:pe(i,10);break;case 3:pe(i,6);break;default:pe(i,2)}}}function Ro(i,u){let l=i.Ta+Math.floor(Math.random()*i.cb);return i.isActive()||(l*=2),l*u}function pe(i,u){if(i.j.info("Error code "+u),u==2){var l=A(i.fb,i),d=i.Xa;const I=!d;d=new fe(d||"//www.google.com/images/cleardot.gif"),c.location&&c.location.protocol=="http"||Bn(d,"https"),$n(d),I?cl(d.toString(),l):ll(d.toString(),l)}else vt(2);i.G=0,i.l&&i.l.sa(u),So(i),Eo(i)}n.fb=function(i){i?(this.j.info("Successfully pinged google.com"),vt(2)):(this.j.info("Failed to ping google.com"),vt(1))};function So(i){if(i.G=0,i.ka=[],i.l){const u=no(i.h);(u.length!=0||i.i.length!=0)&&(N(i.ka,u),N(i.ka,i.i),i.h.i.length=0,D(i.i),i.i.length=0),i.l.ra()}}function Po(i,u,l){var d=l instanceof fe?xt(l):new fe(l);if(d.g!="")u&&(d.g=u+"."+d.g),qn(d,d.s);else{var I=c.location;d=I.protocol,u=u?u+"."+I.hostname:I.hostname,I=+I.port;var R=new fe(null);d&&Bn(R,d),u&&(R.g=u),I&&qn(R,I),l&&(R.l=l),d=R}return l=i.D,u=i.ya,l&&u&&J(d,l,u),J(d,"VER",i.la),on(i,d),d}function Co(i,u,l){if(u&&!i.J)throw Error("Can't create secondary domain capable XhrIo object.");return u=i.Ca&&!i.pa?new et(new jn({eb:l})):new et(i.pa),u.Ha(i.J),u}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function Vo(){}n=Vo.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function Wn(){}Wn.prototype.g=function(i,u){return new At(i,u)};function At(i,u){ft.call(this),this.g=new yo(u),this.l=i,this.h=u&&u.messageUrlParams||null,i=u&&u.messageHeaders||null,u&&u.clientProtocolHeaderRequired&&(i?i["X-Client-Protocol"]="webchannel":i={"X-Client-Protocol":"webchannel"}),this.g.o=i,i=u&&u.initMessageHeaders||null,u&&u.messageContentType&&(i?i["X-WebChannel-Content-Type"]=u.messageContentType:i={"X-WebChannel-Content-Type":u.messageContentType}),u&&u.va&&(i?i["X-WebChannel-Client-Profile"]=u.va:i={"X-WebChannel-Client-Profile":u.va}),this.g.S=i,(i=u&&u.Sb)&&!q(i)&&(this.g.m=i),this.v=u&&u.supportsCrossDomainXhr||!1,this.u=u&&u.sendRawJson||!1,(u=u&&u.httpSessionIdParam)&&!q(u)&&(this.g.D=u,i=this.h,i!==null&&u in i&&(i=this.h,u in i&&delete i[u])),this.j=new Ae(this)}V(At,ft),At.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},At.prototype.close=function(){us(this.g)},At.prototype.o=function(i){var u=this.g;if(typeof i=="string"){var l={};l.__data__=i,i=l}else this.u&&(l={},l.__data__=Xr(i),i=l);u.i.push(new Zc(u.Ya++,i)),u.G==3&&Gn(u)},At.prototype.N=function(){this.g.l=null,delete this.j,us(this.g),delete this.g,At.aa.N.call(this)};function bo(i){Jr.call(this),i.__headers__&&(this.headers=i.__headers__,this.statusCode=i.__status__,delete i.__headers__,delete i.__status__);var u=i.__sm__;if(u){t:{for(const l in u){i=l;break t}i=void 0}(this.i=i)&&(i=this.i,u=u!==null&&i in u?u[i]:void 0),this.data=u}else this.data=i}V(bo,Jr);function Do(){Zr.call(this),this.status=1}V(Do,Zr);function Ae(i){this.g=i}V(Ae,Vo),Ae.prototype.ua=function(){Et(this.g,"a")},Ae.prototype.ta=function(i){Et(this.g,new bo(i))},Ae.prototype.sa=function(i){Et(this.g,new Do)},Ae.prototype.ra=function(){Et(this.g,"b")},Wn.prototype.createWebChannel=Wn.prototype.g,At.prototype.send=At.prototype.o,At.prototype.open=At.prototype.m,At.prototype.close=At.prototype.close,lu=function(){return new Wn},cu=function(){return On()},uu=he,Ss={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Ln.NO_ERROR=0,Ln.TIMEOUT=8,Ln.HTTP_ERROR=6,rr=Ln,Hi.COMPLETE="complete",au=Hi,qi.EventType=Qe,Qe.OPEN="a",Qe.CLOSE="b",Qe.ERROR="c",Qe.MESSAGE="d",ft.prototype.listen=ft.prototype.K,an=qi,et.prototype.listenOnce=et.prototype.L,et.prototype.getLastError=et.prototype.Ka,et.prototype.getLastErrorCode=et.prototype.Ba,et.prototype.getStatus=et.prototype.Z,et.prototype.getResponseJson=et.prototype.Oa,et.prototype.getResponseText=et.prototype.oa,et.prototype.send=et.prototype.ea,et.prototype.setWithCredentials=et.prototype.Ha,ou=et}).apply(typeof Yn<"u"?Yn:typeof self<"u"?self:typeof window<"u"?window:{});const Qo="@firebase/firestore",Wo="4.7.8";/**
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
 */class _t{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}_t.UNAUTHENTICATED=new _t(null),_t.GOOGLE_CREDENTIALS=new _t("google-credentials-uid"),_t.FIRST_PARTY=new _t("first-party-uid"),_t.MOCK_USER=new _t("mock-user");/**
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
 */let Be="11.3.1";/**
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
 */const _e=new Za("@firebase/firestore");function Se(){return _e.logLevel}function k(n,...t){if(_e.logLevel<=G.DEBUG){const e=t.map(Gs);_e.debug(`Firestore (${Be}): ${n}`,...e)}}function Bt(n,...t){if(_e.logLevel<=G.ERROR){const e=t.map(Gs);_e.error(`Firestore (${Be}): ${n}`,...e)}}function Ne(n,...t){if(_e.logLevel<=G.WARN){const e=t.map(Gs);_e.warn(`Firestore (${Be}): ${n}`,...e)}}function Gs(n){if(typeof n=="string")return n;try{/**
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
*/return function(e){return JSON.stringify(e)}(n)}catch{return n}}/**
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
 */function O(n="Unexpected state"){const t=`FIRESTORE (${Be}) INTERNAL ASSERTION FAILED: `+n;throw Bt(t),new Error(t)}function W(n,t){n||O()}function F(n,t){return n}/**
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
 */const C={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class M extends Ue{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Lt{constructor(){this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}}/**
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
 */class hu{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class vd{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable(()=>e(_t.UNAUTHENTICATED))}shutdown(){}}class Td{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable(()=>e(this.token.user))}shutdown(){this.changeListener=null}}class Id{constructor(t){this.t=t,this.currentUser=_t.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){W(this.o===void 0);let r=this.i;const s=h=>this.i!==r?(r=this.i,e(h)):Promise.resolve();let o=new Lt;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new Lt,t.enqueueRetryable(()=>s(this.currentUser))};const a=()=>{const h=o;t.enqueueRetryable(async()=>{await h.promise,await s(this.currentUser)})},c=h=>{k("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=h,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit(h=>c(h)),setTimeout(()=>{if(!this.auth){const h=this.t.getImmediate({optional:!0});h?c(h):(k("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new Lt)}},0),a()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then(r=>this.i!==t?(k("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(W(typeof r.accessToken=="string"),new hu(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const t=this.auth&&this.auth.getUid();return W(t===null||typeof t=="string"),new _t(t)}}class wd{constructor(t,e,r){this.l=t,this.h=e,this.P=r,this.type="FirstParty",this.user=_t.FIRST_PARTY,this.T=new Map}I(){return this.P?this.P():null}get headers(){this.T.set("X-Goog-AuthUser",this.l);const t=this.I();return t&&this.T.set("Authorization",t),this.h&&this.T.set("X-Goog-Iam-Authorization-Token",this.h),this.T}}class Ad{constructor(t,e,r){this.l=t,this.h=e,this.P=r}getToken(){return Promise.resolve(new wd(this.l,this.h,this.P))}start(t,e){t.enqueueRetryable(()=>e(_t.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Xo{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Rd{constructor(t,e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null,this.V=null,rd(t)&&t.settings.appCheckToken&&(this.V=t.settings.appCheckToken)}start(t,e){W(this.o===void 0);const r=o=>{o.error!=null&&k("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const a=o.token!==this.R;return this.R=o.token,k("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?e(o.token):Promise.resolve()};this.o=o=>{t.enqueueRetryable(()=>r(o))};const s=o=>{k("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(o=>s(o)),setTimeout(()=>{if(!this.appCheck){const o=this.A.getImmediate({optional:!0});o?s(o):k("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.V)return Promise.resolve(new Xo(this.V));const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(e=>e?(W(typeof e.token=="string"),this.R=e.token,new Xo(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function Sd(n){const t=typeof self<"u"&&(self.crypto||self.msCrypto),e=new Uint8Array(n);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(e);else for(let r=0;r<n;r++)e[r]=Math.floor(256*Math.random());return e}/**
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
 */class du{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=Sd(40);for(let o=0;o<s.length;++o)r.length<20&&s[o]<e&&(r+=t.charAt(s[o]%62))}return r}}function K(n,t){return n<t?-1:n>t?1:0}function ke(n,t,e){return n.length===t.length&&n.every((r,s)=>e(r,t[s]))}/**
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
 */const Yo=-62135596800,Jo=1e6;class it{static now(){return it.fromMillis(Date.now())}static fromDate(t){return it.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),r=Math.floor((t-1e3*e)*Jo);return new it(e,r)}constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new M(C.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new M(C.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<Yo)throw new M(C.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new M(C.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Jo}_compareTo(t){return this.seconds===t.seconds?K(this.nanoseconds,t.nanoseconds):K(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds-Yo;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class L{static fromTimestamp(t){return new L(t)}static min(){return new L(new it(0,0))}static max(){return new L(new it(253402300799,999999999))}constructor(t){this.timestamp=t}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const Zo="__name__";class Dt{constructor(t,e,r){e===void 0?e=0:e>t.length&&O(),r===void 0?r=t.length-e:r>t.length-e&&O(),this.segments=t,this.offset=e,this.len=r}get length(){return this.len}isEqual(t){return Dt.comparator(this,t)===0}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof Dt?t.forEach(r=>{e.push(r)}):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,r=this.limit();e<r;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const r=Math.min(t.length,e.length);for(let s=0;s<r;s++){const o=Dt.compareSegments(t.get(s),e.get(s));if(o!==0)return o}return Math.sign(t.length-e.length)}static compareSegments(t,e){const r=Dt.isNumericId(t),s=Dt.isNumericId(e);return r&&!s?-1:!r&&s?1:r&&s?Dt.extractNumericId(t).compare(Dt.extractNumericId(e)):t<e?-1:t>e?1:0}static isNumericId(t){return t.startsWith("__id")&&t.endsWith("__")}static extractNumericId(t){return te.fromString(t.substring(4,t.length-2))}}class Z extends Dt{construct(t,e,r){return new Z(t,e,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const e=[];for(const r of t){if(r.indexOf("//")>=0)throw new M(C.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);e.push(...r.split("/").filter(s=>s.length>0))}return new Z(e)}static emptyPath(){return new Z([])}}const Pd=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class lt extends Dt{construct(t,e,r){return new lt(t,e,r)}static isValidIdentifier(t){return Pd.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),lt.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Zo}static keyField(){return new lt([Zo])}static fromServerFormat(t){const e=[];let r="",s=0;const o=()=>{if(r.length===0)throw new M(C.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(r),r=""};let a=!1;for(;s<t.length;){const c=t[s];if(c==="\\"){if(s+1===t.length)throw new M(C.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const h=t[s+1];if(h!=="\\"&&h!=="."&&h!=="`")throw new M(C.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);r+=h,s+=2}else c==="`"?(a=!a,s++):c!=="."||a?(r+=c,s++):(o(),s++)}if(o(),a)throw new M(C.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new lt(e)}static emptyPath(){return new lt([])}}/**
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
 */class x{constructor(t){this.path=t}static fromPath(t){return new x(Z.fromString(t))}static fromName(t){return new x(Z.fromString(t).popFirst(5))}static empty(){return new x(Z.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&Z.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,e){return Z.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new x(new Z(t.slice()))}}/**
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
 */const _n=-1;function Cd(n,t){const e=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,s=L.fromTimestamp(r===1e9?new it(e+1,0):new it(e,r));return new ne(s,x.empty(),t)}function Vd(n){return new ne(n.readTime,n.key,_n)}class ne{constructor(t,e,r){this.readTime=t,this.documentKey=e,this.largestBatchId=r}static min(){return new ne(L.min(),x.empty(),_n)}static max(){return new ne(L.max(),x.empty(),_n)}}function bd(n,t){let e=n.readTime.compareTo(t.readTime);return e!==0?e:(e=x.comparator(n.documentKey,t.documentKey),e!==0?e:K(n.largestBatchId,t.largestBatchId))}/**
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
 */const Dd="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Nd{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
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
 */async function qe(n){if(n.code!==C.FAILED_PRECONDITION||n.message!==Dd)throw n;k("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class P{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&O(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new P((r,s)=>{this.nextCallback=o=>{this.wrapSuccess(t,o).next(r,s)},this.catchCallback=o=>{this.wrapFailure(e,o).next(r,s)}})}toPromise(){return new Promise((t,e)=>{this.next(t,e)})}wrapUserFunction(t){try{const e=t();return e instanceof P?e:P.resolve(e)}catch(e){return P.reject(e)}}wrapSuccess(t,e){return t?this.wrapUserFunction(()=>t(e)):P.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction(()=>t(e)):P.reject(e)}static resolve(t){return new P((e,r)=>{e(t)})}static reject(t){return new P((e,r)=>{r(t)})}static waitFor(t){return new P((e,r)=>{let s=0,o=0,a=!1;t.forEach(c=>{++s,c.next(()=>{++o,a&&o===s&&e()},h=>r(h))}),a=!0,o===s&&e()})}static or(t){let e=P.resolve(!1);for(const r of t)e=e.next(s=>s?P.resolve(s):r());return e}static forEach(t,e){const r=[];return t.forEach((s,o)=>{r.push(e.call(this,s,o))}),this.waitFor(r)}static mapArray(t,e){return new P((r,s)=>{const o=t.length,a=new Array(o);let c=0;for(let h=0;h<o;h++){const f=h;e(t[f]).next(p=>{a[f]=p,++c,c===o&&r(a)},p=>s(p))}})}static doWhile(t,e){return new P((r,s)=>{const o=()=>{t()===!0?e().next(()=>{o()},s):r()};o()})}}function kd(n){const t=n.match(/Android ([\d.]+)/i),e=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(e)}function $e(n){return n.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
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
 */class Pr{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=r=>this.oe(r),this._e=r=>e.writeSequenceNumber(r))}oe(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this._e&&this._e(t),t}}Pr.ae=-1;/**
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
 */const Qs=-1;function Cr(n){return n==null}function fr(n){return n===0&&1/n==-1/0}function Md(n){return typeof n=="number"&&Number.isInteger(n)&&!fr(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
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
 */const fu="";function xd(n){let t="";for(let e=0;e<n.length;e++)t.length>0&&(t=ta(t)),t=Od(n.get(e),t);return ta(t)}function Od(n,t){let e=t;const r=n.length;for(let s=0;s<r;s++){const o=n.charAt(s);switch(o){case"\0":e+="";break;case fu:e+="";break;default:e+=o}}return e}function ta(n){return n+fu+""}/**
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
 */function ea(n){let t=0;for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t++;return t}function ce(n,t){for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t(e,n[e])}function pu(n){for(const t in n)if(Object.prototype.hasOwnProperty.call(n,t))return!1;return!0}/**
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
 */class tt{constructor(t,e){this.comparator=t,this.root=e||ct.EMPTY}insert(t,e){return new tt(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,ct.BLACK,null,null))}remove(t){return new tt(this.comparator,this.root.remove(t,this.comparator).copy(null,null,ct.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const r=this.comparator(t,e.key);if(r===0)return e.value;r<0?e=e.left:r>0&&(e=e.right)}return null}indexOf(t){let e=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(t,r.key);if(s===0)return e+r.left.size;s<0?r=r.left:(e+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((e,r)=>(t(e,r),!1))}toString(){const t=[];return this.inorderTraversal((e,r)=>(t.push(`${e}:${r}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Jn(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Jn(this.root,t,this.comparator,!1)}getReverseIterator(){return new Jn(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Jn(this.root,t,this.comparator,!0)}}class Jn{constructor(t,e,r,s){this.isReverse=s,this.nodeStack=[];let o=1;for(;!t.isEmpty();)if(o=e?r(t.key,e):1,e&&s&&(o*=-1),o<0)t=this.isReverse?t.left:t.right;else{if(o===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class ct{constructor(t,e,r,s,o){this.key=t,this.value=e,this.color=r??ct.RED,this.left=s??ct.EMPTY,this.right=o??ct.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,r,s,o){return new ct(t??this.key,e??this.value,r??this.color,s??this.left,o??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,r){let s=this;const o=r(t,s.key);return s=o<0?s.copy(null,null,null,s.left.insert(t,e,r),null):o===0?s.copy(null,e,null,null,null):s.copy(null,null,null,null,s.right.insert(t,e,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return ct.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let r,s=this;if(e(t,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(t,e),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),e(t,s.key)===0){if(s.right.isEmpty())return ct.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(t,e))}return s.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,ct.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,ct.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw O();const t=this.left.check();if(t!==this.right.check())throw O();return t+(this.isRed()?0:1)}}ct.EMPTY=null,ct.RED=!0,ct.BLACK=!1;ct.EMPTY=new class{constructor(){this.size=0}get key(){throw O()}get value(){throw O()}get color(){throw O()}get left(){throw O()}get right(){throw O()}copy(t,e,r,s,o){return this}insert(t,e,r){return new ct(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class ot{constructor(t){this.comparator=t,this.data=new tt(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((e,r)=>(t(e),!1))}forEachInRange(t,e){const r=this.data.getIteratorFrom(t[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,t[1])>=0)return;e(s.key)}}forEachWhile(t,e){let r;for(r=e!==void 0?this.data.getIteratorFrom(e):this.data.getIterator();r.hasNext();)if(!t(r.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new na(this.data.getIterator())}getIteratorFrom(t){return new na(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach(r=>{e=e.add(r)}),e}isEqual(t){if(!(t instanceof ot)||this.size!==t.size)return!1;const e=this.data.getIterator(),r=t.data.getIterator();for(;e.hasNext();){const s=e.getNext().key,o=r.getNext().key;if(this.comparator(s,o)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(e=>{t.push(e)}),t}toString(){const t=[];return this.forEach(e=>t.push(e)),"SortedSet("+t.toString()+")"}copy(t){const e=new ot(this.comparator);return e.data=t,e}}class na{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Rt{constructor(t){this.fields=t,t.sort(lt.comparator)}static empty(){return new Rt([])}unionWith(t){let e=new ot(lt.comparator);for(const r of this.fields)e=e.add(r);for(const r of t)e=e.add(r);return new Rt(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return ke(this.fields,t.fields,(e,r)=>e.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
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
 */class mu extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class ht{constructor(t){this.binaryString=t}static fromBase64String(t){const e=function(s){try{return atob(s)}catch(o){throw typeof DOMException<"u"&&o instanceof DOMException?new mu("Invalid base64 string: "+o):o}}(t);return new ht(e)}static fromUint8Array(t){const e=function(s){let o="";for(let a=0;a<s.length;++a)o+=String.fromCharCode(s[a]);return o}(t);return new ht(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(e){return btoa(e)}(this.binaryString)}toUint8Array(){return function(e){const r=new Uint8Array(e.length);for(let s=0;s<e.length;s++)r[s]=e.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return K(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}ht.EMPTY_BYTE_STRING=new ht("");const Ld=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function re(n){if(W(!!n),typeof n=="string"){let t=0;const e=Ld.exec(n);if(W(!!e),e[1]){let s=e[1];s=(s+"000000000").substr(0,9),t=Number(s)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:nt(n.seconds),nanos:nt(n.nanos)}}function nt(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function se(n){return typeof n=="string"?ht.fromBase64String(n):ht.fromUint8Array(n)}/**
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
 */const gu="server_timestamp",_u="__type__",yu="__previous_value__",Eu="__local_write_time__";function Ws(n){var t,e;return((e=(((t=n==null?void 0:n.mapValue)===null||t===void 0?void 0:t.fields)||{})[_u])===null||e===void 0?void 0:e.stringValue)===gu}function Vr(n){const t=n.mapValue.fields[yu];return Ws(t)?Vr(t):t}function yn(n){const t=re(n.mapValue.fields[Eu].timestampValue);return new it(t.seconds,t.nanos)}/**
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
 */class Fd{constructor(t,e,r,s,o,a,c,h,f){this.databaseId=t,this.appId=e,this.persistenceKey=r,this.host=s,this.ssl=o,this.forceLongPolling=a,this.autoDetectLongPolling=c,this.longPollingOptions=h,this.useFetchStreams=f}}const pr="(default)";class En{constructor(t,e){this.projectId=t,this.database=e||pr}static empty(){return new En("","")}get isDefaultDatabase(){return this.database===pr}isEqual(t){return t instanceof En&&t.projectId===this.projectId&&t.database===this.database}}/**
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
 */const vu="__type__",Tu="__max__",Zn={mapValue:{fields:{__type__:{stringValue:Tu}}}},Iu="__vector__",mr="value";function ie(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Ws(n)?4:Bd(n)?9007199254740991:Ud(n)?10:11:O()}function Mt(n,t){if(n===t)return!0;const e=ie(n);if(e!==ie(t))return!1;switch(e){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===t.booleanValue;case 4:return yn(n).isEqual(yn(t));case 3:return function(s,o){if(typeof s.timestampValue=="string"&&typeof o.timestampValue=="string"&&s.timestampValue.length===o.timestampValue.length)return s.timestampValue===o.timestampValue;const a=re(s.timestampValue),c=re(o.timestampValue);return a.seconds===c.seconds&&a.nanos===c.nanos}(n,t);case 5:return n.stringValue===t.stringValue;case 6:return function(s,o){return se(s.bytesValue).isEqual(se(o.bytesValue))}(n,t);case 7:return n.referenceValue===t.referenceValue;case 8:return function(s,o){return nt(s.geoPointValue.latitude)===nt(o.geoPointValue.latitude)&&nt(s.geoPointValue.longitude)===nt(o.geoPointValue.longitude)}(n,t);case 2:return function(s,o){if("integerValue"in s&&"integerValue"in o)return nt(s.integerValue)===nt(o.integerValue);if("doubleValue"in s&&"doubleValue"in o){const a=nt(s.doubleValue),c=nt(o.doubleValue);return a===c?fr(a)===fr(c):isNaN(a)&&isNaN(c)}return!1}(n,t);case 9:return ke(n.arrayValue.values||[],t.arrayValue.values||[],Mt);case 10:case 11:return function(s,o){const a=s.mapValue.fields||{},c=o.mapValue.fields||{};if(ea(a)!==ea(c))return!1;for(const h in a)if(a.hasOwnProperty(h)&&(c[h]===void 0||!Mt(a[h],c[h])))return!1;return!0}(n,t);default:return O()}}function vn(n,t){return(n.values||[]).find(e=>Mt(e,t))!==void 0}function Me(n,t){if(n===t)return 0;const e=ie(n),r=ie(t);if(e!==r)return K(e,r);switch(e){case 0:case 9007199254740991:return 0;case 1:return K(n.booleanValue,t.booleanValue);case 2:return function(o,a){const c=nt(o.integerValue||o.doubleValue),h=nt(a.integerValue||a.doubleValue);return c<h?-1:c>h?1:c===h?0:isNaN(c)?isNaN(h)?0:-1:1}(n,t);case 3:return ra(n.timestampValue,t.timestampValue);case 4:return ra(yn(n),yn(t));case 5:return K(n.stringValue,t.stringValue);case 6:return function(o,a){const c=se(o),h=se(a);return c.compareTo(h)}(n.bytesValue,t.bytesValue);case 7:return function(o,a){const c=o.split("/"),h=a.split("/");for(let f=0;f<c.length&&f<h.length;f++){const p=K(c[f],h[f]);if(p!==0)return p}return K(c.length,h.length)}(n.referenceValue,t.referenceValue);case 8:return function(o,a){const c=K(nt(o.latitude),nt(a.latitude));return c!==0?c:K(nt(o.longitude),nt(a.longitude))}(n.geoPointValue,t.geoPointValue);case 9:return sa(n.arrayValue,t.arrayValue);case 10:return function(o,a){var c,h,f,p;const T=o.fields||{},A=a.fields||{},S=(c=T[mr])===null||c===void 0?void 0:c.arrayValue,V=(h=A[mr])===null||h===void 0?void 0:h.arrayValue,D=K(((f=S==null?void 0:S.values)===null||f===void 0?void 0:f.length)||0,((p=V==null?void 0:V.values)===null||p===void 0?void 0:p.length)||0);return D!==0?D:sa(S,V)}(n.mapValue,t.mapValue);case 11:return function(o,a){if(o===Zn.mapValue&&a===Zn.mapValue)return 0;if(o===Zn.mapValue)return 1;if(a===Zn.mapValue)return-1;const c=o.fields||{},h=Object.keys(c),f=a.fields||{},p=Object.keys(f);h.sort(),p.sort();for(let T=0;T<h.length&&T<p.length;++T){const A=K(h[T],p[T]);if(A!==0)return A;const S=Me(c[h[T]],f[p[T]]);if(S!==0)return S}return K(h.length,p.length)}(n.mapValue,t.mapValue);default:throw O()}}function ra(n,t){if(typeof n=="string"&&typeof t=="string"&&n.length===t.length)return K(n,t);const e=re(n),r=re(t),s=K(e.seconds,r.seconds);return s!==0?s:K(e.nanos,r.nanos)}function sa(n,t){const e=n.values||[],r=t.values||[];for(let s=0;s<e.length&&s<r.length;++s){const o=Me(e[s],r[s]);if(o)return o}return K(e.length,r.length)}function xe(n){return Ps(n)}function Ps(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(e){const r=re(e);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(e){return se(e).toBase64()}(n.bytesValue):"referenceValue"in n?function(e){return x.fromName(e).toString()}(n.referenceValue):"geoPointValue"in n?function(e){return`geo(${e.latitude},${e.longitude})`}(n.geoPointValue):"arrayValue"in n?function(e){let r="[",s=!0;for(const o of e.values||[])s?s=!1:r+=",",r+=Ps(o);return r+"]"}(n.arrayValue):"mapValue"in n?function(e){const r=Object.keys(e.fields||{}).sort();let s="{",o=!0;for(const a of r)o?o=!1:s+=",",s+=`${a}:${Ps(e.fields[a])}`;return s+"}"}(n.mapValue):O()}function sr(n){switch(ie(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const t=Vr(n);return t?16+sr(t):16;case 5:return 2*n.stringValue.length;case 6:return se(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((s,o)=>s+sr(o),0)}(n.arrayValue);case 10:case 11:return function(r){let s=0;return ce(r.fields,(o,a)=>{s+=o.length+sr(a)}),s}(n.mapValue);default:throw O()}}function ia(n,t){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${t.path.canonicalString()}`}}function Cs(n){return!!n&&"integerValue"in n}function Xs(n){return!!n&&"arrayValue"in n}function oa(n){return!!n&&"nullValue"in n}function aa(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function ir(n){return!!n&&"mapValue"in n}function Ud(n){var t,e;return((e=(((t=n==null?void 0:n.mapValue)===null||t===void 0?void 0:t.fields)||{})[vu])===null||e===void 0?void 0:e.stringValue)===Iu}function hn(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const t={mapValue:{fields:{}}};return ce(n.mapValue.fields,(e,r)=>t.mapValue.fields[e]=hn(r)),t}if(n.arrayValue){const t={arrayValue:{values:[]}};for(let e=0;e<(n.arrayValue.values||[]).length;++e)t.arrayValue.values[e]=hn(n.arrayValue.values[e]);return t}return Object.assign({},n)}function Bd(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===Tu}/**
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
 */class It{constructor(t){this.value=t}static empty(){return new It({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let r=0;r<t.length-1;++r)if(e=(e.mapValue.fields||{})[t.get(r)],!ir(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=hn(e)}setAll(t){let e=lt.emptyPath(),r={},s=[];t.forEach((a,c)=>{if(!e.isImmediateParentOf(c)){const h=this.getFieldsMap(e);this.applyChanges(h,r,s),r={},s=[],e=c.popLast()}a?r[c.lastSegment()]=hn(a):s.push(c.lastSegment())});const o=this.getFieldsMap(e);this.applyChanges(o,r,s)}delete(t){const e=this.field(t.popLast());ir(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return Mt(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let r=0;r<t.length;++r){let s=e.mapValue.fields[t.get(r)];ir(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},e.mapValue.fields[t.get(r)]=s),e=s}return e.mapValue.fields}applyChanges(t,e,r){ce(e,(s,o)=>t[s]=o);for(const s of r)delete t[s]}clone(){return new It(hn(this.value))}}function wu(n){const t=[];return ce(n.fields,(e,r)=>{const s=new lt([e]);if(ir(r)){const o=wu(r.mapValue).fields;if(o.length===0)t.push(s);else for(const a of o)t.push(s.child(a))}else t.push(s)}),new Rt(t)}/**
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
 */class yt{constructor(t,e,r,s,o,a,c){this.key=t,this.documentType=e,this.version=r,this.readTime=s,this.createTime=o,this.data=a,this.documentState=c}static newInvalidDocument(t){return new yt(t,0,L.min(),L.min(),L.min(),It.empty(),0)}static newFoundDocument(t,e,r,s){return new yt(t,1,e,L.min(),r,s,0)}static newNoDocument(t,e){return new yt(t,2,e,L.min(),L.min(),It.empty(),0)}static newUnknownDocument(t,e){return new yt(t,3,e,L.min(),L.min(),It.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(L.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=It.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=It.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=L.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof yt&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new yt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class gr{constructor(t,e){this.position=t,this.inclusive=e}}function ua(n,t,e){let r=0;for(let s=0;s<n.position.length;s++){const o=t[s],a=n.position[s];if(o.field.isKeyField()?r=x.comparator(x.fromName(a.referenceValue),e.key):r=Me(a,e.data.field(o.field)),o.dir==="desc"&&(r*=-1),r!==0)break}return r}function ca(n,t){if(n===null)return t===null;if(t===null||n.inclusive!==t.inclusive||n.position.length!==t.position.length)return!1;for(let e=0;e<n.position.length;e++)if(!Mt(n.position[e],t.position[e]))return!1;return!0}/**
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
 */class _r{constructor(t,e="asc"){this.field=t,this.dir=e}}function qd(n,t){return n.dir===t.dir&&n.field.isEqual(t.field)}/**
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
 */class Au{}class st extends Au{constructor(t,e,r){super(),this.field=t,this.op=e,this.value=r}static create(t,e,r){return t.isKeyField()?e==="in"||e==="not-in"?this.createKeyFieldInFilter(t,e,r):new jd(t,e,r):e==="array-contains"?new Hd(t,r):e==="in"?new Gd(t,r):e==="not-in"?new Qd(t,r):e==="array-contains-any"?new Wd(t,r):new st(t,e,r)}static createKeyFieldInFilter(t,e,r){return e==="in"?new zd(t,r):new Kd(t,r)}matches(t){const e=t.data.field(this.field);return this.op==="!="?e!==null&&this.matchesComparison(Me(e,this.value)):e!==null&&ie(this.value)===ie(e)&&this.matchesComparison(Me(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return O()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class bt extends Au{constructor(t,e){super(),this.filters=t,this.op=e,this.ce=null}static create(t,e){return new bt(t,e)}matches(t){return Ru(this)?this.filters.find(e=>!e.matches(t))===void 0:this.filters.find(e=>e.matches(t))!==void 0}getFlattenedFilters(){return this.ce!==null||(this.ce=this.filters.reduce((t,e)=>t.concat(e.getFlattenedFilters()),[])),this.ce}getFilters(){return Object.assign([],this.filters)}}function Ru(n){return n.op==="and"}function Su(n){return $d(n)&&Ru(n)}function $d(n){for(const t of n.filters)if(t instanceof bt)return!1;return!0}function Vs(n){if(n instanceof st)return n.field.canonicalString()+n.op.toString()+xe(n.value);if(Su(n))return n.filters.map(t=>Vs(t)).join(",");{const t=n.filters.map(e=>Vs(e)).join(",");return`${n.op}(${t})`}}function Pu(n,t){return n instanceof st?function(r,s){return s instanceof st&&r.op===s.op&&r.field.isEqual(s.field)&&Mt(r.value,s.value)}(n,t):n instanceof bt?function(r,s){return s instanceof bt&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((o,a,c)=>o&&Pu(a,s.filters[c]),!0):!1}(n,t):void O()}function Cu(n){return n instanceof st?function(e){return`${e.field.canonicalString()} ${e.op} ${xe(e.value)}`}(n):n instanceof bt?function(e){return e.op.toString()+" {"+e.getFilters().map(Cu).join(" ,")+"}"}(n):"Filter"}class jd extends st{constructor(t,e,r){super(t,e,r),this.key=x.fromName(r.referenceValue)}matches(t){const e=x.comparator(t.key,this.key);return this.matchesComparison(e)}}class zd extends st{constructor(t,e){super(t,"in",e),this.keys=Vu("in",e)}matches(t){return this.keys.some(e=>e.isEqual(t.key))}}class Kd extends st{constructor(t,e){super(t,"not-in",e),this.keys=Vu("not-in",e)}matches(t){return!this.keys.some(e=>e.isEqual(t.key))}}function Vu(n,t){var e;return(((e=t.arrayValue)===null||e===void 0?void 0:e.values)||[]).map(r=>x.fromName(r.referenceValue))}class Hd extends st{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return Xs(e)&&vn(e.arrayValue,this.value)}}class Gd extends st{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return e!==null&&vn(this.value.arrayValue,e)}}class Qd extends st{constructor(t,e){super(t,"not-in",e)}matches(t){if(vn(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return e!==null&&!vn(this.value.arrayValue,e)}}class Wd extends st{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!Xs(e)||!e.arrayValue.values)&&e.arrayValue.values.some(r=>vn(this.value.arrayValue,r))}}/**
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
 */class Xd{constructor(t,e=null,r=[],s=[],o=null,a=null,c=null){this.path=t,this.collectionGroup=e,this.orderBy=r,this.filters=s,this.limit=o,this.startAt=a,this.endAt=c,this.le=null}}function la(n,t=null,e=[],r=[],s=null,o=null,a=null){return new Xd(n,t,e,r,s,o,a)}function Ys(n){const t=F(n);if(t.le===null){let e=t.path.canonicalString();t.collectionGroup!==null&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map(r=>Vs(r)).join(","),e+="|ob:",e+=t.orderBy.map(r=>function(o){return o.field.canonicalString()+o.dir}(r)).join(","),Cr(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(r=>xe(r)).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(r=>xe(r)).join(",")),t.le=e}return t.le}function Js(n,t){if(n.limit!==t.limit||n.orderBy.length!==t.orderBy.length)return!1;for(let e=0;e<n.orderBy.length;e++)if(!qd(n.orderBy[e],t.orderBy[e]))return!1;if(n.filters.length!==t.filters.length)return!1;for(let e=0;e<n.filters.length;e++)if(!Pu(n.filters[e],t.filters[e]))return!1;return n.collectionGroup===t.collectionGroup&&!!n.path.isEqual(t.path)&&!!ca(n.startAt,t.startAt)&&ca(n.endAt,t.endAt)}function bs(n){return x.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
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
 */class An{constructor(t,e=null,r=[],s=[],o=null,a="F",c=null,h=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=r,this.filters=s,this.limit=o,this.limitType=a,this.startAt=c,this.endAt=h,this.he=null,this.Pe=null,this.Te=null,this.startAt,this.endAt}}function Yd(n,t,e,r,s,o,a,c){return new An(n,t,e,r,s,o,a,c)}function Zs(n){return new An(n)}function ha(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function bu(n){return n.collectionGroup!==null}function dn(n){const t=F(n);if(t.he===null){t.he=[];const e=new Set;for(const o of t.explicitOrderBy)t.he.push(o),e.add(o.field.canonicalString());const r=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(a){let c=new ot(lt.comparator);return a.filters.forEach(h=>{h.getFlattenedFilters().forEach(f=>{f.isInequality()&&(c=c.add(f.field))})}),c})(t).forEach(o=>{e.has(o.canonicalString())||o.isKeyField()||t.he.push(new _r(o,r))}),e.has(lt.keyField().canonicalString())||t.he.push(new _r(lt.keyField(),r))}return t.he}function Nt(n){const t=F(n);return t.Pe||(t.Pe=Jd(t,dn(n))),t.Pe}function Jd(n,t){if(n.limitType==="F")return la(n.path,n.collectionGroup,t,n.filters,n.limit,n.startAt,n.endAt);{t=t.map(s=>{const o=s.dir==="desc"?"asc":"desc";return new _r(s.field,o)});const e=n.endAt?new gr(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new gr(n.startAt.position,n.startAt.inclusive):null;return la(n.path,n.collectionGroup,t,n.filters,n.limit,e,r)}}function Ds(n,t){const e=n.filters.concat([t]);return new An(n.path,n.collectionGroup,n.explicitOrderBy.slice(),e,n.limit,n.limitType,n.startAt,n.endAt)}function Ns(n,t,e){return new An(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),t,e,n.startAt,n.endAt)}function br(n,t){return Js(Nt(n),Nt(t))&&n.limitType===t.limitType}function Du(n){return`${Ys(Nt(n))}|lt:${n.limitType}`}function Pe(n){return`Query(target=${function(e){let r=e.path.canonicalString();return e.collectionGroup!==null&&(r+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(r+=`, filters: [${e.filters.map(s=>Cu(s)).join(", ")}]`),Cr(e.limit)||(r+=", limit: "+e.limit),e.orderBy.length>0&&(r+=`, orderBy: [${e.orderBy.map(s=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(s)).join(", ")}]`),e.startAt&&(r+=", startAt: ",r+=e.startAt.inclusive?"b:":"a:",r+=e.startAt.position.map(s=>xe(s)).join(",")),e.endAt&&(r+=", endAt: ",r+=e.endAt.inclusive?"a:":"b:",r+=e.endAt.position.map(s=>xe(s)).join(",")),`Target(${r})`}(Nt(n))}; limitType=${n.limitType})`}function Dr(n,t){return t.isFoundDocument()&&function(r,s){const o=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(o):x.isDocumentKey(r.path)?r.path.isEqual(o):r.path.isImmediateParentOf(o)}(n,t)&&function(r,s){for(const o of dn(r))if(!o.field.isKeyField()&&s.data.field(o.field)===null)return!1;return!0}(n,t)&&function(r,s){for(const o of r.filters)if(!o.matches(s))return!1;return!0}(n,t)&&function(r,s){return!(r.startAt&&!function(a,c,h){const f=ua(a,c,h);return a.inclusive?f<=0:f<0}(r.startAt,dn(r),s)||r.endAt&&!function(a,c,h){const f=ua(a,c,h);return a.inclusive?f>=0:f>0}(r.endAt,dn(r),s))}(n,t)}function Zd(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function Nu(n){return(t,e)=>{let r=!1;for(const s of dn(n)){const o=tf(s,t,e);if(o!==0)return o;r=r||s.field.isKeyField()}return 0}}function tf(n,t,e){const r=n.field.isKeyField()?x.comparator(t.key,e.key):function(o,a,c){const h=a.data.field(o),f=c.data.field(o);return h!==null&&f!==null?Me(h,f):O()}(n.field,t,e);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return O()}}/**
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
 */class Ee{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),r=this.inner[e];if(r!==void 0){for(const[s,o]of r)if(this.equalsFn(s,t))return o}}has(t){return this.get(t)!==void 0}set(t,e){const r=this.mapKeyFn(t),s=this.inner[r];if(s===void 0)return this.inner[r]=[[t,e]],void this.innerSize++;for(let o=0;o<s.length;o++)if(this.equalsFn(s[o][0],t))return void(s[o]=[t,e]);s.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),r=this.inner[e];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],t))return r.length===1?delete this.inner[e]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(t){ce(this.inner,(e,r)=>{for(const[s,o]of r)t(s,o)})}isEmpty(){return pu(this.inner)}size(){return this.innerSize}}/**
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
 */const ef=new tt(x.comparator);function qt(){return ef}const ku=new tt(x.comparator);function un(...n){let t=ku;for(const e of n)t=t.insert(e.key,e);return t}function Mu(n){let t=ku;return n.forEach((e,r)=>t=t.insert(e,r.overlayedDocument)),t}function ge(){return fn()}function xu(){return fn()}function fn(){return new Ee(n=>n.toString(),(n,t)=>n.isEqual(t))}const nf=new tt(x.comparator),rf=new ot(x.comparator);function j(...n){let t=rf;for(const e of n)t=t.add(e);return t}const sf=new ot(K);function of(){return sf}/**
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
 */function ti(n,t){if(n.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:fr(t)?"-0":t}}function Ou(n){return{integerValue:""+n}}function af(n,t){return Md(t)?Ou(t):ti(n,t)}/**
 * @license
 * Copyright 2018 Google LLC
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
 */class Nr{constructor(){this._=void 0}}function uf(n,t,e){return n instanceof yr?function(s,o){const a={fields:{[_u]:{stringValue:gu},[Eu]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return o&&Ws(o)&&(o=Vr(o)),o&&(a.fields[yu]=o),{mapValue:a}}(e,t):n instanceof Tn?Fu(n,t):n instanceof In?Uu(n,t):function(s,o){const a=Lu(s,o),c=da(a)+da(s.Ie);return Cs(a)&&Cs(s.Ie)?Ou(c):ti(s.serializer,c)}(n,t)}function cf(n,t,e){return n instanceof Tn?Fu(n,t):n instanceof In?Uu(n,t):e}function Lu(n,t){return n instanceof Er?function(r){return Cs(r)||function(o){return!!o&&"doubleValue"in o}(r)}(t)?t:{integerValue:0}:null}class yr extends Nr{}class Tn extends Nr{constructor(t){super(),this.elements=t}}function Fu(n,t){const e=Bu(t);for(const r of n.elements)e.some(s=>Mt(s,r))||e.push(r);return{arrayValue:{values:e}}}class In extends Nr{constructor(t){super(),this.elements=t}}function Uu(n,t){let e=Bu(t);for(const r of n.elements)e=e.filter(s=>!Mt(s,r));return{arrayValue:{values:e}}}class Er extends Nr{constructor(t,e){super(),this.serializer=t,this.Ie=e}}function da(n){return nt(n.integerValue||n.doubleValue)}function Bu(n){return Xs(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function lf(n,t){return n.field.isEqual(t.field)&&function(r,s){return r instanceof Tn&&s instanceof Tn||r instanceof In&&s instanceof In?ke(r.elements,s.elements,Mt):r instanceof Er&&s instanceof Er?Mt(r.Ie,s.Ie):r instanceof yr&&s instanceof yr}(n.transform,t.transform)}class hf{constructor(t,e){this.version=t,this.transformResults=e}}class Vt{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new Vt}static exists(t){return new Vt(void 0,t)}static updateTime(t){return new Vt(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function or(n,t){return n.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(n.updateTime):n.exists===void 0||n.exists===t.isFoundDocument()}class kr{}function qu(n,t){if(!n.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return n.isNoDocument()?new ei(n.key,Vt.none()):new Rn(n.key,n.data,Vt.none());{const e=n.data,r=It.empty();let s=new ot(lt.comparator);for(let o of t.fields)if(!s.has(o)){let a=e.field(o);a===null&&o.length>1&&(o=o.popLast(),a=e.field(o)),a===null?r.delete(o):r.set(o,a),s=s.add(o)}return new le(n.key,r,new Rt(s.toArray()),Vt.none())}}function df(n,t,e){n instanceof Rn?function(s,o,a){const c=s.value.clone(),h=pa(s.fieldTransforms,o,a.transformResults);c.setAll(h),o.convertToFoundDocument(a.version,c).setHasCommittedMutations()}(n,t,e):n instanceof le?function(s,o,a){if(!or(s.precondition,o))return void o.convertToUnknownDocument(a.version);const c=pa(s.fieldTransforms,o,a.transformResults),h=o.data;h.setAll($u(s)),h.setAll(c),o.convertToFoundDocument(a.version,h).setHasCommittedMutations()}(n,t,e):function(s,o,a){o.convertToNoDocument(a.version).setHasCommittedMutations()}(0,t,e)}function pn(n,t,e,r){return n instanceof Rn?function(o,a,c,h){if(!or(o.precondition,a))return c;const f=o.value.clone(),p=ma(o.fieldTransforms,h,a);return f.setAll(p),a.convertToFoundDocument(a.version,f).setHasLocalMutations(),null}(n,t,e,r):n instanceof le?function(o,a,c,h){if(!or(o.precondition,a))return c;const f=ma(o.fieldTransforms,h,a),p=a.data;return p.setAll($u(o)),p.setAll(f),a.convertToFoundDocument(a.version,p).setHasLocalMutations(),c===null?null:c.unionWith(o.fieldMask.fields).unionWith(o.fieldTransforms.map(T=>T.field))}(n,t,e,r):function(o,a,c){return or(o.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):c}(n,t,e)}function ff(n,t){let e=null;for(const r of n.fieldTransforms){const s=t.data.field(r.field),o=Lu(r.transform,s||null);o!=null&&(e===null&&(e=It.empty()),e.set(r.field,o))}return e||null}function fa(n,t){return n.type===t.type&&!!n.key.isEqual(t.key)&&!!n.precondition.isEqual(t.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&ke(r,s,(o,a)=>lf(o,a))}(n.fieldTransforms,t.fieldTransforms)&&(n.type===0?n.value.isEqual(t.value):n.type!==1||n.data.isEqual(t.data)&&n.fieldMask.isEqual(t.fieldMask))}class Rn extends kr{constructor(t,e,r,s=[]){super(),this.key=t,this.value=e,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class le extends kr{constructor(t,e,r,s,o=[]){super(),this.key=t,this.data=e,this.fieldMask=r,this.precondition=s,this.fieldTransforms=o,this.type=1}getFieldMask(){return this.fieldMask}}function $u(n){const t=new Map;return n.fieldMask.fields.forEach(e=>{if(!e.isEmpty()){const r=n.data.field(e);t.set(e,r)}}),t}function pa(n,t,e){const r=new Map;W(n.length===e.length);for(let s=0;s<e.length;s++){const o=n[s],a=o.transform,c=t.data.field(o.field);r.set(o.field,cf(a,c,e[s]))}return r}function ma(n,t,e){const r=new Map;for(const s of n){const o=s.transform,a=e.data.field(s.field);r.set(s.field,uf(o,a,t))}return r}class ei extends kr{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class pf extends kr{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class mf{constructor(t,e,r,s){this.batchId=t,this.localWriteTime=e,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(t,e){const r=e.mutationResults;for(let s=0;s<this.mutations.length;s++){const o=this.mutations[s];o.key.isEqual(t.key)&&df(o,t,r[s])}}applyToLocalView(t,e){for(const r of this.baseMutations)r.key.isEqual(t.key)&&(e=pn(r,t,e,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(t.key)&&(e=pn(r,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const r=xu();return this.mutations.forEach(s=>{const o=t.get(s.key),a=o.overlayedDocument;let c=this.applyToLocalView(a,o.mutatedFields);c=e.has(s.key)?null:c;const h=qu(a,c);h!==null&&r.set(s.key,h),a.isValidDocument()||a.convertToNoDocument(L.min())}),r}keys(){return this.mutations.reduce((t,e)=>t.add(e.key),j())}isEqual(t){return this.batchId===t.batchId&&ke(this.mutations,t.mutations,(e,r)=>fa(e,r))&&ke(this.baseMutations,t.baseMutations,(e,r)=>fa(e,r))}}class ni{constructor(t,e,r,s){this.batch=t,this.commitVersion=e,this.mutationResults=r,this.docVersions=s}static from(t,e,r){W(t.mutations.length===r.length);let s=function(){return nf}();const o=t.mutations;for(let a=0;a<o.length;a++)s=s.insert(o[a].key,r[a].version);return new ni(t,e,r,s)}}/**
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
 */class gf{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
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
 */class _f{constructor(t,e){this.count=t,this.unchangedNames=e}}/**
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
 */var rt,H;function yf(n){switch(n){case C.OK:return O();case C.CANCELLED:case C.UNKNOWN:case C.DEADLINE_EXCEEDED:case C.RESOURCE_EXHAUSTED:case C.INTERNAL:case C.UNAVAILABLE:case C.UNAUTHENTICATED:return!1;case C.INVALID_ARGUMENT:case C.NOT_FOUND:case C.ALREADY_EXISTS:case C.PERMISSION_DENIED:case C.FAILED_PRECONDITION:case C.ABORTED:case C.OUT_OF_RANGE:case C.UNIMPLEMENTED:case C.DATA_LOSS:return!0;default:return O()}}function ju(n){if(n===void 0)return Bt("GRPC error has no .code"),C.UNKNOWN;switch(n){case rt.OK:return C.OK;case rt.CANCELLED:return C.CANCELLED;case rt.UNKNOWN:return C.UNKNOWN;case rt.DEADLINE_EXCEEDED:return C.DEADLINE_EXCEEDED;case rt.RESOURCE_EXHAUSTED:return C.RESOURCE_EXHAUSTED;case rt.INTERNAL:return C.INTERNAL;case rt.UNAVAILABLE:return C.UNAVAILABLE;case rt.UNAUTHENTICATED:return C.UNAUTHENTICATED;case rt.INVALID_ARGUMENT:return C.INVALID_ARGUMENT;case rt.NOT_FOUND:return C.NOT_FOUND;case rt.ALREADY_EXISTS:return C.ALREADY_EXISTS;case rt.PERMISSION_DENIED:return C.PERMISSION_DENIED;case rt.FAILED_PRECONDITION:return C.FAILED_PRECONDITION;case rt.ABORTED:return C.ABORTED;case rt.OUT_OF_RANGE:return C.OUT_OF_RANGE;case rt.UNIMPLEMENTED:return C.UNIMPLEMENTED;case rt.DATA_LOSS:return C.DATA_LOSS;default:return O()}}(H=rt||(rt={}))[H.OK=0]="OK",H[H.CANCELLED=1]="CANCELLED",H[H.UNKNOWN=2]="UNKNOWN",H[H.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",H[H.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",H[H.NOT_FOUND=5]="NOT_FOUND",H[H.ALREADY_EXISTS=6]="ALREADY_EXISTS",H[H.PERMISSION_DENIED=7]="PERMISSION_DENIED",H[H.UNAUTHENTICATED=16]="UNAUTHENTICATED",H[H.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",H[H.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",H[H.ABORTED=10]="ABORTED",H[H.OUT_OF_RANGE=11]="OUT_OF_RANGE",H[H.UNIMPLEMENTED=12]="UNIMPLEMENTED",H[H.INTERNAL=13]="INTERNAL",H[H.UNAVAILABLE=14]="UNAVAILABLE",H[H.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
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
 */function Ef(){return new TextEncoder}/**
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
 */const vf=new te([4294967295,4294967295],0);function ga(n){const t=Ef().encode(n),e=new iu;return e.update(t),new Uint8Array(e.digest())}function _a(n){const t=new DataView(n.buffer),e=t.getUint32(0,!0),r=t.getUint32(4,!0),s=t.getUint32(8,!0),o=t.getUint32(12,!0);return[new te([e,r],0),new te([s,o],0)]}class ri{constructor(t,e,r){if(this.bitmap=t,this.padding=e,this.hashCount=r,e<0||e>=8)throw new cn(`Invalid padding: ${e}`);if(r<0)throw new cn(`Invalid hash count: ${r}`);if(t.length>0&&this.hashCount===0)throw new cn(`Invalid hash count: ${r}`);if(t.length===0&&e!==0)throw new cn(`Invalid padding when bitmap length is 0: ${e}`);this.Ee=8*t.length-e,this.de=te.fromNumber(this.Ee)}Ae(t,e,r){let s=t.add(e.multiply(te.fromNumber(r)));return s.compare(vf)===1&&(s=new te([s.getBits(0),s.getBits(1)],0)),s.modulo(this.de).toNumber()}Re(t){return!!(this.bitmap[Math.floor(t/8)]&1<<t%8)}mightContain(t){if(this.Ee===0)return!1;const e=ga(t),[r,s]=_a(e);for(let o=0;o<this.hashCount;o++){const a=this.Ae(r,s,o);if(!this.Re(a))return!1}return!0}static create(t,e,r){const s=t%8==0?0:8-t%8,o=new Uint8Array(Math.ceil(t/8)),a=new ri(o,s,e);return r.forEach(c=>a.insert(c)),a}insert(t){if(this.Ee===0)return;const e=ga(t),[r,s]=_a(e);for(let o=0;o<this.hashCount;o++){const a=this.Ae(r,s,o);this.Ve(a)}}Ve(t){const e=Math.floor(t/8),r=t%8;this.bitmap[e]|=1<<r}}class cn extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Mr{constructor(t,e,r,s,o){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=o}static createSynthesizedRemoteEventForCurrentChange(t,e,r){const s=new Map;return s.set(t,Sn.createSynthesizedTargetChangeForCurrentChange(t,e,r)),new Mr(L.min(),s,new tt(K),qt(),j())}}class Sn{constructor(t,e,r,s,o){this.resumeToken=t,this.current=e,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=o}static createSynthesizedTargetChangeForCurrentChange(t,e,r){return new Sn(r,e,j(),j(),j())}}/**
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
 */class ar{constructor(t,e,r,s){this.me=t,this.removedTargetIds=e,this.key=r,this.fe=s}}class zu{constructor(t,e){this.targetId=t,this.ge=e}}class Ku{constructor(t,e,r=ht.EMPTY_BYTE_STRING,s=null){this.state=t,this.targetIds=e,this.resumeToken=r,this.cause=s}}class ya{constructor(){this.pe=0,this.ye=Ea(),this.we=ht.EMPTY_BYTE_STRING,this.Se=!1,this.be=!0}get current(){return this.Se}get resumeToken(){return this.we}get De(){return this.pe!==0}get ve(){return this.be}Ce(t){t.approximateByteSize()>0&&(this.be=!0,this.we=t)}Fe(){let t=j(),e=j(),r=j();return this.ye.forEach((s,o)=>{switch(o){case 0:t=t.add(s);break;case 2:e=e.add(s);break;case 1:r=r.add(s);break;default:O()}}),new Sn(this.we,this.Se,t,e,r)}Me(){this.be=!1,this.ye=Ea()}xe(t,e){this.be=!0,this.ye=this.ye.insert(t,e)}Oe(t){this.be=!0,this.ye=this.ye.remove(t)}Ne(){this.pe+=1}Be(){this.pe-=1,W(this.pe>=0)}Le(){this.be=!0,this.Se=!0}}class Tf{constructor(t){this.ke=t,this.qe=new Map,this.Qe=qt(),this.$e=tr(),this.Ke=tr(),this.Ue=new tt(K)}We(t){for(const e of t.me)t.fe&&t.fe.isFoundDocument()?this.Ge(e,t.fe):this.ze(e,t.key,t.fe);for(const e of t.removedTargetIds)this.ze(e,t.key,t.fe)}je(t){this.forEachTarget(t,e=>{const r=this.He(e);switch(t.state){case 0:this.Je(e)&&r.Ce(t.resumeToken);break;case 1:r.Be(),r.De||r.Me(),r.Ce(t.resumeToken);break;case 2:r.Be(),r.De||this.removeTarget(e);break;case 3:this.Je(e)&&(r.Le(),r.Ce(t.resumeToken));break;case 4:this.Je(e)&&(this.Ye(e),r.Ce(t.resumeToken));break;default:O()}})}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.qe.forEach((r,s)=>{this.Je(s)&&e(s)})}Ze(t){const e=t.targetId,r=t.ge.count,s=this.Xe(e);if(s){const o=s.target;if(bs(o))if(r===0){const a=new x(o.path);this.ze(e,a,yt.newNoDocument(a,L.min()))}else W(r===1);else{const a=this.et(e);if(a!==r){const c=this.tt(t),h=c?this.nt(c,t,a):1;if(h!==0){this.Ye(e);const f=h===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ue=this.Ue.insert(e,f)}}}}}tt(t){const e=t.ge.unchangedNames;if(!e||!e.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:o=0}=e;let a,c;try{a=se(r).toUint8Array()}catch(h){if(h instanceof mu)return Ne("Decoding the base64 bloom filter in existence filter failed ("+h.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw h}try{c=new ri(a,s,o)}catch(h){return Ne(h instanceof cn?"BloomFilter error: ":"Applying bloom filter failed: ",h),null}return c.Ee===0?null:c}nt(t,e,r){return e.ge.count===r-this.st(t,e.targetId)?0:2}st(t,e){const r=this.ke.getRemoteKeysForTarget(e);let s=0;return r.forEach(o=>{const a=this.ke.it(),c=`projects/${a.projectId}/databases/${a.database}/documents/${o.path.canonicalString()}`;t.mightContain(c)||(this.ze(e,o,null),s++)}),s}ot(t){const e=new Map;this.qe.forEach((o,a)=>{const c=this.Xe(a);if(c){if(o.current&&bs(c.target)){const h=new x(c.target.path);this._t(h).has(a)||this.ut(a,h)||this.ze(a,h,yt.newNoDocument(h,t))}o.ve&&(e.set(a,o.Fe()),o.Me())}});let r=j();this.Ke.forEach((o,a)=>{let c=!0;a.forEachWhile(h=>{const f=this.Xe(h);return!f||f.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)}),c&&(r=r.add(o))}),this.Qe.forEach((o,a)=>a.setReadTime(t));const s=new Mr(t,e,this.Ue,this.Qe,r);return this.Qe=qt(),this.$e=tr(),this.Ke=tr(),this.Ue=new tt(K),s}Ge(t,e){if(!this.Je(t))return;const r=this.ut(t,e.key)?2:0;this.He(t).xe(e.key,r),this.Qe=this.Qe.insert(e.key,e),this.$e=this.$e.insert(e.key,this._t(e.key).add(t)),this.Ke=this.Ke.insert(e.key,this.ct(e.key).add(t))}ze(t,e,r){if(!this.Je(t))return;const s=this.He(t);this.ut(t,e)?s.xe(e,1):s.Oe(e),this.Ke=this.Ke.insert(e,this.ct(e).delete(t)),this.Ke=this.Ke.insert(e,this.ct(e).add(t)),r&&(this.Qe=this.Qe.insert(e,r))}removeTarget(t){this.qe.delete(t)}et(t){const e=this.He(t).Fe();return this.ke.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}Ne(t){this.He(t).Ne()}He(t){let e=this.qe.get(t);return e||(e=new ya,this.qe.set(t,e)),e}ct(t){let e=this.Ke.get(t);return e||(e=new ot(K),this.Ke=this.Ke.insert(t,e)),e}_t(t){let e=this.$e.get(t);return e||(e=new ot(K),this.$e=this.$e.insert(t,e)),e}Je(t){const e=this.Xe(t)!==null;return e||k("WatchChangeAggregator","Detected inactive target",t),e}Xe(t){const e=this.qe.get(t);return e&&e.De?null:this.ke.lt(t)}Ye(t){this.qe.set(t,new ya),this.ke.getRemoteKeysForTarget(t).forEach(e=>{this.ze(t,e,null)})}ut(t,e){return this.ke.getRemoteKeysForTarget(t).has(e)}}function tr(){return new tt(x.comparator)}function Ea(){return new tt(x.comparator)}const If={asc:"ASCENDING",desc:"DESCENDING"},wf={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Af={and:"AND",or:"OR"};class Rf{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function ks(n,t){return n.useProto3Json||Cr(t)?t:{value:t}}function vr(n,t){return n.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function Hu(n,t){return n.useProto3Json?t.toBase64():t.toUint8Array()}function Sf(n,t){return vr(n,t.toTimestamp())}function kt(n){return W(!!n),L.fromTimestamp(function(e){const r=re(e);return new it(r.seconds,r.nanos)}(n))}function si(n,t){return Ms(n,t).canonicalString()}function Ms(n,t){const e=function(s){return new Z(["projects",s.projectId,"databases",s.database])}(n).child("documents");return t===void 0?e:e.child(t)}function Gu(n){const t=Z.fromString(n);return W(Ju(t)),t}function xs(n,t){return si(n.databaseId,t.path)}function gs(n,t){const e=Gu(t);if(e.get(1)!==n.databaseId.projectId)throw new M(C.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+e.get(1)+" vs "+n.databaseId.projectId);if(e.get(3)!==n.databaseId.database)throw new M(C.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+e.get(3)+" vs "+n.databaseId.database);return new x(Wu(e))}function Qu(n,t){return si(n.databaseId,t)}function Pf(n){const t=Gu(n);return t.length===4?Z.emptyPath():Wu(t)}function Os(n){return new Z(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function Wu(n){return W(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function va(n,t,e){return{name:xs(n,t),fields:e.value.mapValue.fields}}function Cf(n,t){let e;if("targetChange"in t){t.targetChange;const r=function(f){return f==="NO_CHANGE"?0:f==="ADD"?1:f==="REMOVE"?2:f==="CURRENT"?3:f==="RESET"?4:O()}(t.targetChange.targetChangeType||"NO_CHANGE"),s=t.targetChange.targetIds||[],o=function(f,p){return f.useProto3Json?(W(p===void 0||typeof p=="string"),ht.fromBase64String(p||"")):(W(p===void 0||p instanceof Buffer||p instanceof Uint8Array),ht.fromUint8Array(p||new Uint8Array))}(n,t.targetChange.resumeToken),a=t.targetChange.cause,c=a&&function(f){const p=f.code===void 0?C.UNKNOWN:ju(f.code);return new M(p,f.message||"")}(a);e=new Ku(r,s,o,c||null)}else if("documentChange"in t){t.documentChange;const r=t.documentChange;r.document,r.document.name,r.document.updateTime;const s=gs(n,r.document.name),o=kt(r.document.updateTime),a=r.document.createTime?kt(r.document.createTime):L.min(),c=new It({mapValue:{fields:r.document.fields}}),h=yt.newFoundDocument(s,o,a,c),f=r.targetIds||[],p=r.removedTargetIds||[];e=new ar(f,p,h.key,h)}else if("documentDelete"in t){t.documentDelete;const r=t.documentDelete;r.document;const s=gs(n,r.document),o=r.readTime?kt(r.readTime):L.min(),a=yt.newNoDocument(s,o),c=r.removedTargetIds||[];e=new ar([],c,a.key,a)}else if("documentRemove"in t){t.documentRemove;const r=t.documentRemove;r.document;const s=gs(n,r.document),o=r.removedTargetIds||[];e=new ar([],o,s,null)}else{if(!("filter"in t))return O();{t.filter;const r=t.filter;r.targetId;const{count:s=0,unchangedNames:o}=r,a=new _f(s,o),c=r.targetId;e=new zu(c,a)}}return e}function Vf(n,t){let e;if(t instanceof Rn)e={update:va(n,t.key,t.value)};else if(t instanceof ei)e={delete:xs(n,t.key)};else if(t instanceof le)e={update:va(n,t.key,t.data),updateMask:Ff(t.fieldMask)};else{if(!(t instanceof pf))return O();e={verify:xs(n,t.key)}}return t.fieldTransforms.length>0&&(e.updateTransforms=t.fieldTransforms.map(r=>function(o,a){const c=a.transform;if(c instanceof yr)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof Tn)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof In)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof Er)return{fieldPath:a.field.canonicalString(),increment:c.Ie};throw O()}(0,r))),t.precondition.isNone||(e.currentDocument=function(s,o){return o.updateTime!==void 0?{updateTime:Sf(s,o.updateTime)}:o.exists!==void 0?{exists:o.exists}:O()}(n,t.precondition)),e}function bf(n,t){return n&&n.length>0?(W(t!==void 0),n.map(e=>function(s,o){let a=s.updateTime?kt(s.updateTime):kt(o);return a.isEqual(L.min())&&(a=kt(o)),new hf(a,s.transformResults||[])}(e,t))):[]}function Df(n,t){return{documents:[Qu(n,t.path)]}}function Nf(n,t){const e={structuredQuery:{}},r=t.path;let s;t.collectionGroup!==null?(s=r,e.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(s=r.popLast(),e.structuredQuery.from=[{collectionId:r.lastSegment()}]),e.parent=Qu(n,s);const o=function(f){if(f.length!==0)return Yu(bt.create(f,"and"))}(t.filters);o&&(e.structuredQuery.where=o);const a=function(f){if(f.length!==0)return f.map(p=>function(A){return{field:Ce(A.field),direction:xf(A.dir)}}(p))}(t.orderBy);a&&(e.structuredQuery.orderBy=a);const c=ks(n,t.limit);return c!==null&&(e.structuredQuery.limit=c),t.startAt&&(e.structuredQuery.startAt=function(f){return{before:f.inclusive,values:f.position}}(t.startAt)),t.endAt&&(e.structuredQuery.endAt=function(f){return{before:!f.inclusive,values:f.position}}(t.endAt)),{ht:e,parent:s}}function kf(n){let t=Pf(n.parent);const e=n.structuredQuery,r=e.from?e.from.length:0;let s=null;if(r>0){W(r===1);const p=e.from[0];p.allDescendants?s=p.collectionId:t=t.child(p.collectionId)}let o=[];e.where&&(o=function(T){const A=Xu(T);return A instanceof bt&&Su(A)?A.getFilters():[A]}(e.where));let a=[];e.orderBy&&(a=function(T){return T.map(A=>function(V){return new _r(Ve(V.field),function(N){switch(N){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(V.direction))}(A))}(e.orderBy));let c=null;e.limit&&(c=function(T){let A;return A=typeof T=="object"?T.value:T,Cr(A)?null:A}(e.limit));let h=null;e.startAt&&(h=function(T){const A=!!T.before,S=T.values||[];return new gr(S,A)}(e.startAt));let f=null;return e.endAt&&(f=function(T){const A=!T.before,S=T.values||[];return new gr(S,A)}(e.endAt)),Yd(t,s,a,o,c,"F",h,f)}function Mf(n,t){const e=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return O()}}(t.purpose);return e==null?null:{"goog-listen-tags":e}}function Xu(n){return n.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const r=Ve(e.unaryFilter.field);return st.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Ve(e.unaryFilter.field);return st.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const o=Ve(e.unaryFilter.field);return st.create(o,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=Ve(e.unaryFilter.field);return st.create(a,"!=",{nullValue:"NULL_VALUE"});default:return O()}}(n):n.fieldFilter!==void 0?function(e){return st.create(Ve(e.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return O()}}(e.fieldFilter.op),e.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(e){return bt.create(e.compositeFilter.filters.map(r=>Xu(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return O()}}(e.compositeFilter.op))}(n):O()}function xf(n){return If[n]}function Of(n){return wf[n]}function Lf(n){return Af[n]}function Ce(n){return{fieldPath:n.canonicalString()}}function Ve(n){return lt.fromServerFormat(n.fieldPath)}function Yu(n){return n instanceof st?function(e){if(e.op==="=="){if(aa(e.value))return{unaryFilter:{field:Ce(e.field),op:"IS_NAN"}};if(oa(e.value))return{unaryFilter:{field:Ce(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(aa(e.value))return{unaryFilter:{field:Ce(e.field),op:"IS_NOT_NAN"}};if(oa(e.value))return{unaryFilter:{field:Ce(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ce(e.field),op:Of(e.op),value:e.value}}}(n):n instanceof bt?function(e){const r=e.getFilters().map(s=>Yu(s));return r.length===1?r[0]:{compositeFilter:{op:Lf(e.op),filters:r}}}(n):O()}function Ff(n){const t=[];return n.fields.forEach(e=>t.push(e.canonicalString())),{fieldPaths:t}}function Ju(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
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
 */class Yt{constructor(t,e,r,s,o=L.min(),a=L.min(),c=ht.EMPTY_BYTE_STRING,h=null){this.target=t,this.targetId=e,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=o,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=c,this.expectedCount=h}withSequenceNumber(t){return new Yt(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,e){return new Yt(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new Yt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new Yt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
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
 */class Uf{constructor(t){this.Tt=t}}function Bf(n){const t=kf({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Ns(t,t.limit,"L"):t}/**
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
 */class qf{constructor(){this.Tn=new $f}addToCollectionParentIndex(t,e){return this.Tn.add(e),P.resolve()}getCollectionParents(t,e){return P.resolve(this.Tn.getEntries(e))}addFieldIndex(t,e){return P.resolve()}deleteFieldIndex(t,e){return P.resolve()}deleteAllFieldIndexes(t){return P.resolve()}createTargetIndexes(t,e){return P.resolve()}getDocumentsMatchingTarget(t,e){return P.resolve(null)}getIndexType(t,e){return P.resolve(0)}getFieldIndexes(t,e){return P.resolve([])}getNextCollectionGroupToUpdate(t){return P.resolve(null)}getMinOffset(t,e){return P.resolve(ne.min())}getMinOffsetFromCollectionGroup(t,e){return P.resolve(ne.min())}updateCollectionGroup(t,e,r){return P.resolve()}updateIndexEntries(t,e){return P.resolve()}}class $f{constructor(){this.index={}}add(t){const e=t.lastSegment(),r=t.popLast(),s=this.index[e]||new ot(Z.comparator),o=!s.has(r);return this.index[e]=s.add(r),o}has(t){const e=t.lastSegment(),r=t.popLast(),s=this.index[e];return s&&s.has(r)}getEntries(t){return(this.index[t]||new ot(Z.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
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
 */const Ta={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},Zu=41943040;class Tt{static withCacheSize(t){return new Tt(t,Tt.DEFAULT_COLLECTION_PERCENTILE,Tt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(t,e,r){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=e,this.maximumSequenceNumbersToCollect=r}}/**
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
 */Tt.DEFAULT_COLLECTION_PERCENTILE=10,Tt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Tt.DEFAULT=new Tt(Zu,Tt.DEFAULT_COLLECTION_PERCENTILE,Tt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Tt.DISABLED=new Tt(-1,0,0);/**
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
 */class Oe{constructor(t){this.$n=t}next(){return this.$n+=2,this.$n}static Kn(){return new Oe(0)}static Un(){return new Oe(-1)}}/**
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
 */const Ia="LruGarbageCollector",jf=1048576;function wa([n,t],[e,r]){const s=K(n,e);return s===0?K(t,r):s}class zf{constructor(t){this.Hn=t,this.buffer=new ot(wa),this.Jn=0}Yn(){return++this.Jn}Zn(t){const e=[t,this.Yn()];if(this.buffer.size<this.Hn)this.buffer=this.buffer.add(e);else{const r=this.buffer.last();wa(e,r)<0&&(this.buffer=this.buffer.delete(r).add(e))}}get maxValue(){return this.buffer.last()[0]}}class Kf{constructor(t,e,r){this.garbageCollector=t,this.asyncQueue=e,this.localStore=r,this.Xn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.er(6e4)}stop(){this.Xn&&(this.Xn.cancel(),this.Xn=null)}get started(){return this.Xn!==null}er(t){k(Ia,`Garbage collection scheduled in ${t}ms`),this.Xn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",t,async()=>{this.Xn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(e){$e(e)?k(Ia,"Ignoring IndexedDB error during garbage collection: ",e):await qe(e)}await this.er(3e5)})}}class Hf{constructor(t,e){this.tr=t,this.params=e}calculateTargetCount(t,e){return this.tr.nr(t).next(r=>Math.floor(e/100*r))}nthSequenceNumber(t,e){if(e===0)return P.resolve(Pr.ae);const r=new zf(e);return this.tr.forEachTarget(t,s=>r.Zn(s.sequenceNumber)).next(()=>this.tr.rr(t,s=>r.Zn(s))).next(()=>r.maxValue)}removeTargets(t,e,r){return this.tr.removeTargets(t,e,r)}removeOrphanedDocuments(t,e){return this.tr.removeOrphanedDocuments(t,e)}collect(t,e){return this.params.cacheSizeCollectionThreshold===-1?(k("LruGarbageCollector","Garbage collection skipped; disabled"),P.resolve(Ta)):this.getCacheSize(t).next(r=>r<this.params.cacheSizeCollectionThreshold?(k("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Ta):this.ir(t,e))}getCacheSize(t){return this.tr.getCacheSize(t)}ir(t,e){let r,s,o,a,c,h,f;const p=Date.now();return this.calculateTargetCount(t,this.params.percentileToCollect).next(T=>(T>this.params.maximumSequenceNumbersToCollect?(k("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${T}`),s=this.params.maximumSequenceNumbersToCollect):s=T,a=Date.now(),this.nthSequenceNumber(t,s))).next(T=>(r=T,c=Date.now(),this.removeTargets(t,r,e))).next(T=>(o=T,h=Date.now(),this.removeOrphanedDocuments(t,r))).next(T=>(f=Date.now(),Se()<=G.DEBUG&&k("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${a-p}ms
	Determined least recently used ${s} in `+(c-a)+`ms
	Removed ${o} targets in `+(h-c)+`ms
	Removed ${T} documents in `+(f-h)+`ms
Total Duration: ${f-p}ms`),P.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:o,documentsRemoved:T})))}}function Gf(n,t){return new Hf(n,t)}/**
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
 */class Qf{constructor(){this.changes=new Ee(t=>t.toString(),(t,e)=>t.isEqual(e)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,yt.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const r=this.changes.get(e);return r!==void 0?P.resolve(r):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
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
 *//**
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
 */class Wf{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}/**
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
 */class Xf{constructor(t,e,r,s){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=r,this.indexManager=s}getDocument(t,e){let r=null;return this.documentOverlayCache.getOverlay(t,e).next(s=>(r=s,this.remoteDocumentCache.getEntry(t,e))).next(s=>(r!==null&&pn(r.mutation,s,Rt.empty(),it.now()),s))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next(r=>this.getLocalViewOfDocuments(t,r,j()).next(()=>r))}getLocalViewOfDocuments(t,e,r=j()){const s=ge();return this.populateOverlays(t,s,e).next(()=>this.computeViews(t,e,s,r).next(o=>{let a=un();return o.forEach((c,h)=>{a=a.insert(c,h.overlayedDocument)}),a}))}getOverlayedDocuments(t,e){const r=ge();return this.populateOverlays(t,r,e).next(()=>this.computeViews(t,e,r,j()))}populateOverlays(t,e,r){const s=[];return r.forEach(o=>{e.has(o)||s.push(o)}),this.documentOverlayCache.getOverlays(t,s).next(o=>{o.forEach((a,c)=>{e.set(a,c)})})}computeViews(t,e,r,s){let o=qt();const a=fn(),c=function(){return fn()}();return e.forEach((h,f)=>{const p=r.get(f.key);s.has(f.key)&&(p===void 0||p.mutation instanceof le)?o=o.insert(f.key,f):p!==void 0?(a.set(f.key,p.mutation.getFieldMask()),pn(p.mutation,f,p.mutation.getFieldMask(),it.now())):a.set(f.key,Rt.empty())}),this.recalculateAndSaveOverlays(t,o).next(h=>(h.forEach((f,p)=>a.set(f,p)),e.forEach((f,p)=>{var T;return c.set(f,new Wf(p,(T=a.get(f))!==null&&T!==void 0?T:null))}),c))}recalculateAndSaveOverlays(t,e){const r=fn();let s=new tt((a,c)=>a-c),o=j();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next(a=>{for(const c of a)c.keys().forEach(h=>{const f=e.get(h);if(f===null)return;let p=r.get(h)||Rt.empty();p=c.applyToLocalView(f,p),r.set(h,p);const T=(s.get(c.batchId)||j()).add(h);s=s.insert(c.batchId,T)})}).next(()=>{const a=[],c=s.getReverseIterator();for(;c.hasNext();){const h=c.getNext(),f=h.key,p=h.value,T=xu();p.forEach(A=>{if(!o.has(A)){const S=qu(e.get(A),r.get(A));S!==null&&T.set(A,S),o=o.add(A)}}),a.push(this.documentOverlayCache.saveOverlays(t,f,T))}return P.waitFor(a)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next(r=>this.recalculateAndSaveOverlays(t,r))}getDocumentsMatchingQuery(t,e,r,s){return function(a){return x.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0}(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):bu(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,r,s):this.getDocumentsMatchingCollectionQuery(t,e,r,s)}getNextDocuments(t,e,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,r,s).next(o=>{const a=s-o.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,r.largestBatchId,s-o.size):P.resolve(ge());let c=_n,h=o;return a.next(f=>P.forEach(f,(p,T)=>(c<T.largestBatchId&&(c=T.largestBatchId),o.get(p)?P.resolve():this.remoteDocumentCache.getEntry(t,p).next(A=>{h=h.insert(p,A)}))).next(()=>this.populateOverlays(t,f,o)).next(()=>this.computeViews(t,h,f,j())).next(p=>({batchId:c,changes:Mu(p)})))})}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new x(e)).next(r=>{let s=un();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(t,e,r,s){const o=e.collectionGroup;let a=un();return this.indexManager.getCollectionParents(t,o).next(c=>P.forEach(c,h=>{const f=function(T,A){return new An(A,null,T.explicitOrderBy.slice(),T.filters.slice(),T.limit,T.limitType,T.startAt,T.endAt)}(e,h.child(o));return this.getDocumentsMatchingCollectionQuery(t,f,r,s).next(p=>{p.forEach((T,A)=>{a=a.insert(T,A)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(t,e,r,s){let o;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,r.largestBatchId).next(a=>(o=a,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,r,o,s))).next(a=>{o.forEach((h,f)=>{const p=f.getKey();a.get(p)===null&&(a=a.insert(p,yt.newInvalidDocument(p)))});let c=un();return a.forEach((h,f)=>{const p=o.get(h);p!==void 0&&pn(p.mutation,f,Rt.empty(),it.now()),Dr(e,f)&&(c=c.insert(h,f))}),c})}}/**
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
 */class Yf{constructor(t){this.serializer=t,this.dr=new Map,this.Ar=new Map}getBundleMetadata(t,e){return P.resolve(this.dr.get(e))}saveBundleMetadata(t,e){return this.dr.set(e.id,function(s){return{id:s.id,version:s.version,createTime:kt(s.createTime)}}(e)),P.resolve()}getNamedQuery(t,e){return P.resolve(this.Ar.get(e))}saveNamedQuery(t,e){return this.Ar.set(e.name,function(s){return{name:s.name,query:Bf(s.bundledQuery),readTime:kt(s.readTime)}}(e)),P.resolve()}}/**
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
 */class Jf{constructor(){this.overlays=new tt(x.comparator),this.Rr=new Map}getOverlay(t,e){return P.resolve(this.overlays.get(e))}getOverlays(t,e){const r=ge();return P.forEach(e,s=>this.getOverlay(t,s).next(o=>{o!==null&&r.set(s,o)})).next(()=>r)}saveOverlays(t,e,r){return r.forEach((s,o)=>{this.Et(t,e,o)}),P.resolve()}removeOverlaysForBatchId(t,e,r){const s=this.Rr.get(r);return s!==void 0&&(s.forEach(o=>this.overlays=this.overlays.remove(o)),this.Rr.delete(r)),P.resolve()}getOverlaysForCollection(t,e,r){const s=ge(),o=e.length+1,a=new x(e.child("")),c=this.overlays.getIteratorFrom(a);for(;c.hasNext();){const h=c.getNext().value,f=h.getKey();if(!e.isPrefixOf(f.path))break;f.path.length===o&&h.largestBatchId>r&&s.set(h.getKey(),h)}return P.resolve(s)}getOverlaysForCollectionGroup(t,e,r,s){let o=new tt((f,p)=>f-p);const a=this.overlays.getIterator();for(;a.hasNext();){const f=a.getNext().value;if(f.getKey().getCollectionGroup()===e&&f.largestBatchId>r){let p=o.get(f.largestBatchId);p===null&&(p=ge(),o=o.insert(f.largestBatchId,p)),p.set(f.getKey(),f)}}const c=ge(),h=o.getIterator();for(;h.hasNext()&&(h.getNext().value.forEach((f,p)=>c.set(f,p)),!(c.size()>=s)););return P.resolve(c)}Et(t,e,r){const s=this.overlays.get(r.key);if(s!==null){const a=this.Rr.get(s.largestBatchId).delete(r.key);this.Rr.set(s.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new gf(e,r));let o=this.Rr.get(e);o===void 0&&(o=j(),this.Rr.set(e,o)),this.Rr.set(e,o.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
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
 */class Zf{constructor(){this.sessionToken=ht.EMPTY_BYTE_STRING}getSessionToken(t){return P.resolve(this.sessionToken)}setSessionToken(t,e){return this.sessionToken=e,P.resolve()}}/**
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
 */class ii{constructor(){this.Vr=new ot(at.mr),this.gr=new ot(at.pr)}isEmpty(){return this.Vr.isEmpty()}addReference(t,e){const r=new at(t,e);this.Vr=this.Vr.add(r),this.gr=this.gr.add(r)}yr(t,e){t.forEach(r=>this.addReference(r,e))}removeReference(t,e){this.wr(new at(t,e))}Sr(t,e){t.forEach(r=>this.removeReference(r,e))}br(t){const e=new x(new Z([])),r=new at(e,t),s=new at(e,t+1),o=[];return this.gr.forEachInRange([r,s],a=>{this.wr(a),o.push(a.key)}),o}Dr(){this.Vr.forEach(t=>this.wr(t))}wr(t){this.Vr=this.Vr.delete(t),this.gr=this.gr.delete(t)}vr(t){const e=new x(new Z([])),r=new at(e,t),s=new at(e,t+1);let o=j();return this.gr.forEachInRange([r,s],a=>{o=o.add(a.key)}),o}containsKey(t){const e=new at(t,0),r=this.Vr.firstAfterOrEqual(e);return r!==null&&t.isEqual(r.key)}}class at{constructor(t,e){this.key=t,this.Cr=e}static mr(t,e){return x.comparator(t.key,e.key)||K(t.Cr,e.Cr)}static pr(t,e){return K(t.Cr,e.Cr)||x.comparator(t.key,e.key)}}/**
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
 */class tp{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.Fr=1,this.Mr=new ot(at.mr)}checkEmpty(t){return P.resolve(this.mutationQueue.length===0)}addMutationBatch(t,e,r,s){const o=this.Fr;this.Fr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new mf(o,e,r,s);this.mutationQueue.push(a);for(const c of s)this.Mr=this.Mr.add(new at(c.key,o)),this.indexManager.addToCollectionParentIndex(t,c.key.path.popLast());return P.resolve(a)}lookupMutationBatch(t,e){return P.resolve(this.Or(e))}getNextMutationBatchAfterBatchId(t,e){const r=e+1,s=this.Nr(r),o=s<0?0:s;return P.resolve(this.mutationQueue.length>o?this.mutationQueue[o]:null)}getHighestUnacknowledgedBatchId(){return P.resolve(this.mutationQueue.length===0?Qs:this.Fr-1)}getAllMutationBatches(t){return P.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const r=new at(e,0),s=new at(e,Number.POSITIVE_INFINITY),o=[];return this.Mr.forEachInRange([r,s],a=>{const c=this.Or(a.Cr);o.push(c)}),P.resolve(o)}getAllMutationBatchesAffectingDocumentKeys(t,e){let r=new ot(K);return e.forEach(s=>{const o=new at(s,0),a=new at(s,Number.POSITIVE_INFINITY);this.Mr.forEachInRange([o,a],c=>{r=r.add(c.Cr)})}),P.resolve(this.Br(r))}getAllMutationBatchesAffectingQuery(t,e){const r=e.path,s=r.length+1;let o=r;x.isDocumentKey(o)||(o=o.child(""));const a=new at(new x(o),0);let c=new ot(K);return this.Mr.forEachWhile(h=>{const f=h.key.path;return!!r.isPrefixOf(f)&&(f.length===s&&(c=c.add(h.Cr)),!0)},a),P.resolve(this.Br(c))}Br(t){const e=[];return t.forEach(r=>{const s=this.Or(r);s!==null&&e.push(s)}),e}removeMutationBatch(t,e){W(this.Lr(e.batchId,"removed")===0),this.mutationQueue.shift();let r=this.Mr;return P.forEach(e.mutations,s=>{const o=new at(s.key,e.batchId);return r=r.delete(o),this.referenceDelegate.markPotentiallyOrphaned(t,s.key)}).next(()=>{this.Mr=r})}qn(t){}containsKey(t,e){const r=new at(e,0),s=this.Mr.firstAfterOrEqual(r);return P.resolve(e.isEqual(s&&s.key))}performConsistencyCheck(t){return this.mutationQueue.length,P.resolve()}Lr(t,e){return this.Nr(t)}Nr(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Or(t){const e=this.Nr(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}/**
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
 */class ep{constructor(t){this.kr=t,this.docs=function(){return new tt(x.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const r=e.key,s=this.docs.get(r),o=s?s.size:0,a=this.kr(e);return this.docs=this.docs.insert(r,{document:e.mutableCopy(),size:a}),this.size+=a-o,this.indexManager.addToCollectionParentIndex(t,r.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const r=this.docs.get(e);return P.resolve(r?r.document.mutableCopy():yt.newInvalidDocument(e))}getEntries(t,e){let r=qt();return e.forEach(s=>{const o=this.docs.get(s);r=r.insert(s,o?o.document.mutableCopy():yt.newInvalidDocument(s))}),P.resolve(r)}getDocumentsMatchingQuery(t,e,r,s){let o=qt();const a=e.path,c=new x(a.child("__id-9223372036854775808__")),h=this.docs.getIteratorFrom(c);for(;h.hasNext();){const{key:f,value:{document:p}}=h.getNext();if(!a.isPrefixOf(f.path))break;f.path.length>a.length+1||bd(Vd(p),r)<=0||(s.has(p.key)||Dr(e,p))&&(o=o.insert(p.key,p.mutableCopy()))}return P.resolve(o)}getAllFromCollectionGroup(t,e,r,s){O()}qr(t,e){return P.forEach(this.docs,r=>e(r))}newChangeBuffer(t){return new np(this)}getSize(t){return P.resolve(this.size)}}class np extends Qf{constructor(t){super(),this.Ir=t}applyChanges(t){const e=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?e.push(this.Ir.addEntry(t,s)):this.Ir.removeEntry(r)}),P.waitFor(e)}getFromCache(t,e){return this.Ir.getEntry(t,e)}getAllFromCache(t,e){return this.Ir.getEntries(t,e)}}/**
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
 */class rp{constructor(t){this.persistence=t,this.Qr=new Ee(e=>Ys(e),Js),this.lastRemoteSnapshotVersion=L.min(),this.highestTargetId=0,this.$r=0,this.Kr=new ii,this.targetCount=0,this.Ur=Oe.Kn()}forEachTarget(t,e){return this.Qr.forEach((r,s)=>e(s)),P.resolve()}getLastRemoteSnapshotVersion(t){return P.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return P.resolve(this.$r)}allocateTargetId(t){return this.highestTargetId=this.Ur.next(),P.resolve(this.highestTargetId)}setTargetsMetadata(t,e,r){return r&&(this.lastRemoteSnapshotVersion=r),e>this.$r&&(this.$r=e),P.resolve()}zn(t){this.Qr.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.Ur=new Oe(e),this.highestTargetId=e),t.sequenceNumber>this.$r&&(this.$r=t.sequenceNumber)}addTargetData(t,e){return this.zn(e),this.targetCount+=1,P.resolve()}updateTargetData(t,e){return this.zn(e),P.resolve()}removeTargetData(t,e){return this.Qr.delete(e.target),this.Kr.br(e.targetId),this.targetCount-=1,P.resolve()}removeTargets(t,e,r){let s=0;const o=[];return this.Qr.forEach((a,c)=>{c.sequenceNumber<=e&&r.get(c.targetId)===null&&(this.Qr.delete(a),o.push(this.removeMatchingKeysForTargetId(t,c.targetId)),s++)}),P.waitFor(o).next(()=>s)}getTargetCount(t){return P.resolve(this.targetCount)}getTargetData(t,e){const r=this.Qr.get(e)||null;return P.resolve(r)}addMatchingKeys(t,e,r){return this.Kr.yr(e,r),P.resolve()}removeMatchingKeys(t,e,r){this.Kr.Sr(e,r);const s=this.persistence.referenceDelegate,o=[];return s&&e.forEach(a=>{o.push(s.markPotentiallyOrphaned(t,a))}),P.waitFor(o)}removeMatchingKeysForTargetId(t,e){return this.Kr.br(e),P.resolve()}getMatchingKeysForTargetId(t,e){const r=this.Kr.vr(e);return P.resolve(r)}containsKey(t,e){return P.resolve(this.Kr.containsKey(e))}}/**
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
 */class tc{constructor(t,e){this.Wr={},this.overlays={},this.Gr=new Pr(0),this.zr=!1,this.zr=!0,this.jr=new Zf,this.referenceDelegate=t(this),this.Hr=new rp(this),this.indexManager=new qf,this.remoteDocumentCache=function(s){return new ep(s)}(r=>this.referenceDelegate.Jr(r)),this.serializer=new Uf(e),this.Yr=new Yf(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.zr=!1,Promise.resolve()}get started(){return this.zr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new Jf,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let r=this.Wr[t.toKey()];return r||(r=new tp(e,this.referenceDelegate),this.Wr[t.toKey()]=r),r}getGlobalsCache(){return this.jr}getTargetCache(){return this.Hr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Yr}runTransaction(t,e,r){k("MemoryPersistence","Starting transaction:",t);const s=new sp(this.Gr.next());return this.referenceDelegate.Zr(),r(s).next(o=>this.referenceDelegate.Xr(s).next(()=>o)).toPromise().then(o=>(s.raiseOnCommittedEvent(),o))}ei(t,e){return P.or(Object.values(this.Wr).map(r=>()=>r.containsKey(t,e)))}}class sp extends Nd{constructor(t){super(),this.currentSequenceNumber=t}}class oi{constructor(t){this.persistence=t,this.ti=new ii,this.ni=null}static ri(t){return new oi(t)}get ii(){if(this.ni)return this.ni;throw O()}addReference(t,e,r){return this.ti.addReference(r,e),this.ii.delete(r.toString()),P.resolve()}removeReference(t,e,r){return this.ti.removeReference(r,e),this.ii.add(r.toString()),P.resolve()}markPotentiallyOrphaned(t,e){return this.ii.add(e.toString()),P.resolve()}removeTarget(t,e){this.ti.br(e.targetId).forEach(s=>this.ii.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(t,e.targetId).next(s=>{s.forEach(o=>this.ii.add(o.toString()))}).next(()=>r.removeTargetData(t,e))}Zr(){this.ni=new Set}Xr(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return P.forEach(this.ii,r=>{const s=x.fromPath(r);return this.si(t,s).next(o=>{o||e.removeEntry(s,L.min())})}).next(()=>(this.ni=null,e.apply(t)))}updateLimboDocument(t,e){return this.si(t,e).next(r=>{r?this.ii.delete(e.toString()):this.ii.add(e.toString())})}Jr(t){return 0}si(t,e){return P.or([()=>P.resolve(this.ti.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.ei(t,e)])}}class Tr{constructor(t,e){this.persistence=t,this.oi=new Ee(r=>xd(r.path),(r,s)=>r.isEqual(s)),this.garbageCollector=Gf(this,e)}static ri(t,e){return new Tr(t,e)}Zr(){}Xr(t){return P.resolve()}forEachTarget(t,e){return this.persistence.getTargetCache().forEachTarget(t,e)}nr(t){const e=this.sr(t);return this.persistence.getTargetCache().getTargetCount(t).next(r=>e.next(s=>r+s))}sr(t){let e=0;return this.rr(t,r=>{e++}).next(()=>e)}rr(t,e){return P.forEach(this.oi,(r,s)=>this.ar(t,r,s).next(o=>o?P.resolve():e(s)))}removeTargets(t,e,r){return this.persistence.getTargetCache().removeTargets(t,e,r)}removeOrphanedDocuments(t,e){let r=0;const s=this.persistence.getRemoteDocumentCache(),o=s.newChangeBuffer();return s.qr(t,a=>this.ar(t,a,e).next(c=>{c||(r++,o.removeEntry(a,L.min()))})).next(()=>o.apply(t)).next(()=>r)}markPotentiallyOrphaned(t,e){return this.oi.set(e,t.currentSequenceNumber),P.resolve()}removeTarget(t,e){const r=e.withSequenceNumber(t.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(t,r)}addReference(t,e,r){return this.oi.set(r,t.currentSequenceNumber),P.resolve()}removeReference(t,e,r){return this.oi.set(r,t.currentSequenceNumber),P.resolve()}updateLimboDocument(t,e){return this.oi.set(e,t.currentSequenceNumber),P.resolve()}Jr(t){let e=t.key.toString().length;return t.isFoundDocument()&&(e+=sr(t.data.value)),e}ar(t,e,r){return P.or([()=>this.persistence.ei(t,e),()=>this.persistence.getTargetCache().containsKey(t,e),()=>{const s=this.oi.get(e);return P.resolve(s!==void 0&&s>r)}])}getCacheSize(t){return this.persistence.getRemoteDocumentCache().getSize(t)}}/**
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
 */class ai{constructor(t,e,r,s){this.targetId=t,this.fromCache=e,this.Hi=r,this.Ji=s}static Yi(t,e){let r=j(),s=j();for(const o of e.docChanges)switch(o.type){case 0:r=r.add(o.doc.key);break;case 1:s=s.add(o.doc.key)}return new ai(t,e.fromCache,r,s)}}/**
 * @license
 * Copyright 2023 Google LLC
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
 */class ip{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
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
 */class op{constructor(){this.Zi=!1,this.Xi=!1,this.es=100,this.ts=function(){return th()?8:kd(Jl())>0?6:4}()}initialize(t,e){this.ns=t,this.indexManager=e,this.Zi=!0}getDocumentsMatchingQuery(t,e,r,s){const o={result:null};return this.rs(t,e).next(a=>{o.result=a}).next(()=>{if(!o.result)return this.ss(t,e,s,r).next(a=>{o.result=a})}).next(()=>{if(o.result)return;const a=new ip;return this._s(t,e,a).next(c=>{if(o.result=c,this.Xi)return this.us(t,e,a,c.size)})}).next(()=>o.result)}us(t,e,r,s){return r.documentReadCount<this.es?(Se()<=G.DEBUG&&k("QueryEngine","SDK will not create cache indexes for query:",Pe(e),"since it only creates cache indexes for collection contains","more than or equal to",this.es,"documents"),P.resolve()):(Se()<=G.DEBUG&&k("QueryEngine","Query:",Pe(e),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.ts*s?(Se()<=G.DEBUG&&k("QueryEngine","The SDK decides to create cache indexes for query:",Pe(e),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,Nt(e))):P.resolve())}rs(t,e){if(ha(e))return P.resolve(null);let r=Nt(e);return this.indexManager.getIndexType(t,r).next(s=>s===0?null:(e.limit!==null&&s===1&&(e=Ns(e,null,"F"),r=Nt(e)),this.indexManager.getDocumentsMatchingTarget(t,r).next(o=>{const a=j(...o);return this.ns.getDocuments(t,a).next(c=>this.indexManager.getMinOffset(t,r).next(h=>{const f=this.cs(e,c);return this.ls(e,f,a,h.readTime)?this.rs(t,Ns(e,null,"F")):this.hs(t,f,e,h)}))})))}ss(t,e,r,s){return ha(e)||s.isEqual(L.min())?P.resolve(null):this.ns.getDocuments(t,r).next(o=>{const a=this.cs(e,o);return this.ls(e,a,r,s)?P.resolve(null):(Se()<=G.DEBUG&&k("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Pe(e)),this.hs(t,a,e,Cd(s,_n)).next(c=>c))})}cs(t,e){let r=new ot(Nu(t));return e.forEach((s,o)=>{Dr(t,o)&&(r=r.add(o))}),r}ls(t,e,r,s){if(t.limit===null)return!1;if(r.size!==e.size)return!0;const o=t.limitType==="F"?e.last():e.first();return!!o&&(o.hasPendingWrites||o.version.compareTo(s)>0)}_s(t,e,r){return Se()<=G.DEBUG&&k("QueryEngine","Using full collection scan to execute query:",Pe(e)),this.ns.getDocumentsMatchingQuery(t,e,ne.min(),r)}hs(t,e,r,s){return this.ns.getDocumentsMatchingQuery(t,r,s).next(o=>(e.forEach(a=>{o=o.insert(a.key,a)}),o))}}/**
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
 */const ui="LocalStore",ap=3e8;class up{constructor(t,e,r,s){this.persistence=t,this.Ps=e,this.serializer=s,this.Ts=new tt(K),this.Is=new Ee(o=>Ys(o),Js),this.Es=new Map,this.ds=t.getRemoteDocumentCache(),this.Hr=t.getTargetCache(),this.Yr=t.getBundleCache(),this.As(r)}As(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new Xf(this.ds,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ds.setIndexManager(this.indexManager),this.Ps.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",e=>t.collect(e,this.Ts))}}function cp(n,t,e,r){return new up(n,t,e,r)}async function ec(n,t){const e=F(n);return await e.persistence.runTransaction("Handle user change","readonly",r=>{let s;return e.mutationQueue.getAllMutationBatches(r).next(o=>(s=o,e.As(t),e.mutationQueue.getAllMutationBatches(r))).next(o=>{const a=[],c=[];let h=j();for(const f of s){a.push(f.batchId);for(const p of f.mutations)h=h.add(p.key)}for(const f of o){c.push(f.batchId);for(const p of f.mutations)h=h.add(p.key)}return e.localDocuments.getDocuments(r,h).next(f=>({Rs:f,removedBatchIds:a,addedBatchIds:c}))})})}function lp(n,t){const e=F(n);return e.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=t.batch.keys(),o=e.ds.newChangeBuffer({trackRemovals:!0});return function(c,h,f,p){const T=f.batch,A=T.keys();let S=P.resolve();return A.forEach(V=>{S=S.next(()=>p.getEntry(h,V)).next(D=>{const N=f.docVersions.get(V);W(N!==null),D.version.compareTo(N)<0&&(T.applyToRemoteDocument(D,f),D.isValidDocument()&&(D.setReadTime(f.commitVersion),p.addEntry(D)))})}),S.next(()=>c.mutationQueue.removeMutationBatch(h,T))}(e,r,t,o).next(()=>o.apply(r)).next(()=>e.mutationQueue.performConsistencyCheck(r)).next(()=>e.documentOverlayCache.removeOverlaysForBatchId(r,s,t.batch.batchId)).next(()=>e.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(c){let h=j();for(let f=0;f<c.mutationResults.length;++f)c.mutationResults[f].transformResults.length>0&&(h=h.add(c.batch.mutations[f].key));return h}(t))).next(()=>e.localDocuments.getDocuments(r,s))})}function nc(n){const t=F(n);return t.persistence.runTransaction("Get last remote snapshot version","readonly",e=>t.Hr.getLastRemoteSnapshotVersion(e))}function hp(n,t){const e=F(n),r=t.snapshotVersion;let s=e.Ts;return e.persistence.runTransaction("Apply remote event","readwrite-primary",o=>{const a=e.ds.newChangeBuffer({trackRemovals:!0});s=e.Ts;const c=[];t.targetChanges.forEach((p,T)=>{const A=s.get(T);if(!A)return;c.push(e.Hr.removeMatchingKeys(o,p.removedDocuments,T).next(()=>e.Hr.addMatchingKeys(o,p.addedDocuments,T)));let S=A.withSequenceNumber(o.currentSequenceNumber);t.targetMismatches.get(T)!==null?S=S.withResumeToken(ht.EMPTY_BYTE_STRING,L.min()).withLastLimboFreeSnapshotVersion(L.min()):p.resumeToken.approximateByteSize()>0&&(S=S.withResumeToken(p.resumeToken,r)),s=s.insert(T,S),function(D,N,U){return D.resumeToken.approximateByteSize()===0||N.snapshotVersion.toMicroseconds()-D.snapshotVersion.toMicroseconds()>=ap?!0:U.addedDocuments.size+U.modifiedDocuments.size+U.removedDocuments.size>0}(A,S,p)&&c.push(e.Hr.updateTargetData(o,S))});let h=qt(),f=j();if(t.documentUpdates.forEach(p=>{t.resolvedLimboDocuments.has(p)&&c.push(e.persistence.referenceDelegate.updateLimboDocument(o,p))}),c.push(dp(o,a,t.documentUpdates).next(p=>{h=p.Vs,f=p.fs})),!r.isEqual(L.min())){const p=e.Hr.getLastRemoteSnapshotVersion(o).next(T=>e.Hr.setTargetsMetadata(o,o.currentSequenceNumber,r));c.push(p)}return P.waitFor(c).next(()=>a.apply(o)).next(()=>e.localDocuments.getLocalViewOfDocuments(o,h,f)).next(()=>h)}).then(o=>(e.Ts=s,o))}function dp(n,t,e){let r=j(),s=j();return e.forEach(o=>r=r.add(o)),t.getEntries(n,r).next(o=>{let a=qt();return e.forEach((c,h)=>{const f=o.get(c);h.isFoundDocument()!==f.isFoundDocument()&&(s=s.add(c)),h.isNoDocument()&&h.version.isEqual(L.min())?(t.removeEntry(c,h.readTime),a=a.insert(c,h)):!f.isValidDocument()||h.version.compareTo(f.version)>0||h.version.compareTo(f.version)===0&&f.hasPendingWrites?(t.addEntry(h),a=a.insert(c,h)):k(ui,"Ignoring outdated watch update for ",c,". Current version:",f.version," Watch version:",h.version)}),{Vs:a,fs:s}})}function fp(n,t){const e=F(n);return e.persistence.runTransaction("Get next mutation batch","readonly",r=>(t===void 0&&(t=Qs),e.mutationQueue.getNextMutationBatchAfterBatchId(r,t)))}function pp(n,t){const e=F(n);return e.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return e.Hr.getTargetData(r,t).next(o=>o?(s=o,P.resolve(s)):e.Hr.allocateTargetId(r).next(a=>(s=new Yt(t,a,"TargetPurposeListen",r.currentSequenceNumber),e.Hr.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=e.Ts.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(e.Ts=e.Ts.insert(r.targetId,r),e.Is.set(t,r.targetId)),r})}async function Ls(n,t,e){const r=F(n),s=r.Ts.get(t),o=e?"readwrite":"readwrite-primary";try{e||await r.persistence.runTransaction("Release target",o,a=>r.persistence.referenceDelegate.removeTarget(a,s))}catch(a){if(!$e(a))throw a;k(ui,`Failed to update sequence numbers for target ${t}: ${a}`)}r.Ts=r.Ts.remove(t),r.Is.delete(s.target)}function Aa(n,t,e){const r=F(n);let s=L.min(),o=j();return r.persistence.runTransaction("Execute query","readwrite",a=>function(h,f,p){const T=F(h),A=T.Is.get(p);return A!==void 0?P.resolve(T.Ts.get(A)):T.Hr.getTargetData(f,p)}(r,a,Nt(t)).next(c=>{if(c)return s=c.lastLimboFreeSnapshotVersion,r.Hr.getMatchingKeysForTargetId(a,c.targetId).next(h=>{o=h})}).next(()=>r.Ps.getDocumentsMatchingQuery(a,t,e?s:L.min(),e?o:j())).next(c=>(mp(r,Zd(t),c),{documents:c,gs:o})))}function mp(n,t,e){let r=n.Es.get(t)||L.min();e.forEach((s,o)=>{o.readTime.compareTo(r)>0&&(r=o.readTime)}),n.Es.set(t,r)}class Ra{constructor(){this.activeTargetIds=of()}Ds(t){this.activeTargetIds=this.activeTargetIds.add(t)}vs(t){this.activeTargetIds=this.activeTargetIds.delete(t)}bs(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class gp{constructor(){this.ho=new Ra,this.Po={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,r){}addLocalQueryTarget(t,e=!0){return e&&this.ho.Ds(t),this.Po[t]||"not-current"}updateQueryState(t,e,r){this.Po[t]=e}removeLocalQueryTarget(t){this.ho.vs(t)}isLocalQueryTarget(t){return this.ho.activeTargetIds.has(t)}clearQueryState(t){delete this.Po[t]}getAllActiveQueryTargets(){return this.ho.activeTargetIds}isActiveQueryTarget(t){return this.ho.activeTargetIds.has(t)}start(){return this.ho=new Ra,Promise.resolve()}handleUserChange(t,e,r){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
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
 */class _p{To(t){}shutdown(){}}/**
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
 */const Sa="ConnectivityMonitor";class Pa{constructor(){this.Io=()=>this.Eo(),this.Ao=()=>this.Ro(),this.Vo=[],this.mo()}To(t){this.Vo.push(t)}shutdown(){window.removeEventListener("online",this.Io),window.removeEventListener("offline",this.Ao)}mo(){window.addEventListener("online",this.Io),window.addEventListener("offline",this.Ao)}Eo(){k(Sa,"Network connectivity changed: AVAILABLE");for(const t of this.Vo)t(0)}Ro(){k(Sa,"Network connectivity changed: UNAVAILABLE");for(const t of this.Vo)t(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
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
 */let er=null;function Fs(){return er===null?er=function(){return 268435456+Math.round(2147483648*Math.random())}():er++,"0x"+er.toString(16)}/**
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
 */const _s="RestConnection",yp={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class Ep{get fo(){return!1}constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const e=t.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.po=e+"://"+t.host,this.yo=`projects/${r}/databases/${s}`,this.wo=this.databaseId.database===pr?`project_id=${r}`:`project_id=${r}&database_id=${s}`}So(t,e,r,s,o){const a=Fs(),c=this.bo(t,e.toUriEncodedString());k(_s,`Sending RPC '${t}' ${a}:`,c,r);const h={"google-cloud-resource-prefix":this.yo,"x-goog-request-params":this.wo};return this.Do(h,s,o),this.vo(t,c,h,r).then(f=>(k(_s,`Received RPC '${t}' ${a}: `,f),f),f=>{throw Ne(_s,`RPC '${t}' ${a} failed with error: `,f,"url: ",c,"request:",r),f})}Co(t,e,r,s,o,a){return this.So(t,e,r,s,o)}Do(t,e,r){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Be}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e&&e.headers.forEach((s,o)=>t[o]=s),r&&r.headers.forEach((s,o)=>t[o]=s)}bo(t,e){const r=yp[t];return`${this.po}/v1/${e}:${r}`}terminate(){}}/**
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
 */class vp{constructor(t){this.Fo=t.Fo,this.Mo=t.Mo}xo(t){this.Oo=t}No(t){this.Bo=t}Lo(t){this.ko=t}onMessage(t){this.qo=t}close(){this.Mo()}send(t){this.Fo(t)}Qo(){this.Oo()}$o(){this.Bo()}Ko(t){this.ko(t)}Uo(t){this.qo(t)}}/**
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
 */const gt="WebChannelConnection";class Tp extends Ep{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}vo(t,e,r,s){const o=Fs();return new Promise((a,c)=>{const h=new ou;h.setWithCredentials(!0),h.listenOnce(au.COMPLETE,()=>{try{switch(h.getLastErrorCode()){case rr.NO_ERROR:const p=h.getResponseJson();k(gt,`XHR for RPC '${t}' ${o} received:`,JSON.stringify(p)),a(p);break;case rr.TIMEOUT:k(gt,`RPC '${t}' ${o} timed out`),c(new M(C.DEADLINE_EXCEEDED,"Request time out"));break;case rr.HTTP_ERROR:const T=h.getStatus();if(k(gt,`RPC '${t}' ${o} failed with status:`,T,"response text:",h.getResponseText()),T>0){let A=h.getResponseJson();Array.isArray(A)&&(A=A[0]);const S=A==null?void 0:A.error;if(S&&S.status&&S.message){const V=function(N){const U=N.toLowerCase().replace(/_/g,"-");return Object.values(C).indexOf(U)>=0?U:C.UNKNOWN}(S.status);c(new M(V,S.message))}else c(new M(C.UNKNOWN,"Server responded with status "+h.getStatus()))}else c(new M(C.UNAVAILABLE,"Connection failed."));break;default:O()}}finally{k(gt,`RPC '${t}' ${o} completed.`)}});const f=JSON.stringify(s);k(gt,`RPC '${t}' ${o} sending request:`,s),h.send(e,"POST",f,r,15)})}Wo(t,e,r){const s=Fs(),o=[this.po,"/","google.firestore.v1.Firestore","/",t,"/channel"],a=lu(),c=cu(),h={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},f=this.longPollingOptions.timeoutSeconds;f!==void 0&&(h.longPollingTimeout=Math.round(1e3*f)),this.useFetchStreams&&(h.useFetchStreams=!0),this.Do(h.initMessageHeaders,e,r),h.encodeInitMessageHeaders=!0;const p=o.join("");k(gt,`Creating RPC '${t}' stream ${s}: ${p}`,h);const T=a.createWebChannel(p,h);let A=!1,S=!1;const V=new vp({Fo:N=>{S?k(gt,`Not sending because RPC '${t}' stream ${s} is closed:`,N):(A||(k(gt,`Opening RPC '${t}' stream ${s} transport.`),T.open(),A=!0),k(gt,`RPC '${t}' stream ${s} sending:`,N),T.send(N))},Mo:()=>T.close()}),D=(N,U,q)=>{N.listen(U,z=>{try{q(z)}catch(Y){setTimeout(()=>{throw Y},0)}})};return D(T,an.EventType.OPEN,()=>{S||(k(gt,`RPC '${t}' stream ${s} transport opened.`),V.Qo())}),D(T,an.EventType.CLOSE,()=>{S||(S=!0,k(gt,`RPC '${t}' stream ${s} transport closed`),V.Ko())}),D(T,an.EventType.ERROR,N=>{S||(S=!0,Ne(gt,`RPC '${t}' stream ${s} transport errored:`,N),V.Ko(new M(C.UNAVAILABLE,"The operation could not be completed")))}),D(T,an.EventType.MESSAGE,N=>{var U;if(!S){const q=N.data[0];W(!!q);const z=q,Y=(z==null?void 0:z.error)||((U=z[0])===null||U===void 0?void 0:U.error);if(Y){k(gt,`RPC '${t}' stream ${s} received error:`,Y);const $=Y.status;let B=function(g){const y=rt[g];if(y!==void 0)return ju(y)}($),v=Y.message;B===void 0&&(B=C.INTERNAL,v="Unknown error status: "+$+" with message "+Y.message),S=!0,V.Ko(new M(B,v)),T.close()}else k(gt,`RPC '${t}' stream ${s} received:`,q),V.Uo(q)}}),D(c,uu.STAT_EVENT,N=>{N.stat===Ss.PROXY?k(gt,`RPC '${t}' stream ${s} detected buffering proxy`):N.stat===Ss.NOPROXY&&k(gt,`RPC '${t}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{V.$o()},0),V}}function ys(){return typeof document<"u"?document:null}/**
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
 */function xr(n){return new Rf(n,!0)}/**
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
 */class rc{constructor(t,e,r=1e3,s=1.5,o=6e4){this.Ti=t,this.timerId=e,this.Go=r,this.zo=s,this.jo=o,this.Ho=0,this.Jo=null,this.Yo=Date.now(),this.reset()}reset(){this.Ho=0}Zo(){this.Ho=this.jo}Xo(t){this.cancel();const e=Math.floor(this.Ho+this.e_()),r=Math.max(0,Date.now()-this.Yo),s=Math.max(0,e-r);s>0&&k("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Ho} ms, delay with jitter: ${e} ms, last attempt: ${r} ms ago)`),this.Jo=this.Ti.enqueueAfterDelay(this.timerId,s,()=>(this.Yo=Date.now(),t())),this.Ho*=this.zo,this.Ho<this.Go&&(this.Ho=this.Go),this.Ho>this.jo&&(this.Ho=this.jo)}t_(){this.Jo!==null&&(this.Jo.skipDelay(),this.Jo=null)}cancel(){this.Jo!==null&&(this.Jo.cancel(),this.Jo=null)}e_(){return(Math.random()-.5)*this.Ho}}/**
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
 */const Ca="PersistentStream";class sc{constructor(t,e,r,s,o,a,c,h){this.Ti=t,this.n_=r,this.r_=s,this.connection=o,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=c,this.listener=h,this.state=0,this.i_=0,this.s_=null,this.o_=null,this.stream=null,this.__=0,this.a_=new rc(t,e)}u_(){return this.state===1||this.state===5||this.c_()}c_(){return this.state===2||this.state===3}start(){this.__=0,this.state!==4?this.auth():this.l_()}async stop(){this.u_()&&await this.close(0)}h_(){this.state=0,this.a_.reset()}P_(){this.c_()&&this.s_===null&&(this.s_=this.Ti.enqueueAfterDelay(this.n_,6e4,()=>this.T_()))}I_(t){this.E_(),this.stream.send(t)}async T_(){if(this.c_())return this.close(0)}E_(){this.s_&&(this.s_.cancel(),this.s_=null)}d_(){this.o_&&(this.o_.cancel(),this.o_=null)}async close(t,e){this.E_(),this.d_(),this.a_.cancel(),this.i_++,t!==4?this.a_.reset():e&&e.code===C.RESOURCE_EXHAUSTED?(Bt(e.toString()),Bt("Using maximum backoff delay to prevent overloading the backend."),this.a_.Zo()):e&&e.code===C.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.A_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.Lo(e)}A_(){}auth(){this.state=1;const t=this.R_(this.i_),e=this.i_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.i_===e&&this.V_(r,s)},r=>{t(()=>{const s=new M(C.UNKNOWN,"Fetching auth token failed: "+r.message);return this.m_(s)})})}V_(t,e){const r=this.R_(this.i_);this.stream=this.f_(t,e),this.stream.xo(()=>{r(()=>this.listener.xo())}),this.stream.No(()=>{r(()=>(this.state=2,this.o_=this.Ti.enqueueAfterDelay(this.r_,1e4,()=>(this.c_()&&(this.state=3),Promise.resolve())),this.listener.No()))}),this.stream.Lo(s=>{r(()=>this.m_(s))}),this.stream.onMessage(s=>{r(()=>++this.__==1?this.g_(s):this.onNext(s))})}l_(){this.state=5,this.a_.Xo(async()=>{this.state=0,this.start()})}m_(t){return k(Ca,`close with error: ${t}`),this.stream=null,this.close(4,t)}R_(t){return e=>{this.Ti.enqueueAndForget(()=>this.i_===t?e():(k(Ca,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Ip extends sc{constructor(t,e,r,s,o,a){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,r,s,a),this.serializer=o}f_(t,e){return this.connection.Wo("Listen",t,e)}g_(t){return this.onNext(t)}onNext(t){this.a_.reset();const e=Cf(this.serializer,t),r=function(o){if(!("targetChange"in o))return L.min();const a=o.targetChange;return a.targetIds&&a.targetIds.length?L.min():a.readTime?kt(a.readTime):L.min()}(t);return this.listener.p_(e,r)}y_(t){const e={};e.database=Os(this.serializer),e.addTarget=function(o,a){let c;const h=a.target;if(c=bs(h)?{documents:Df(o,h)}:{query:Nf(o,h).ht},c.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){c.resumeToken=Hu(o,a.resumeToken);const f=ks(o,a.expectedCount);f!==null&&(c.expectedCount=f)}else if(a.snapshotVersion.compareTo(L.min())>0){c.readTime=vr(o,a.snapshotVersion.toTimestamp());const f=ks(o,a.expectedCount);f!==null&&(c.expectedCount=f)}return c}(this.serializer,t);const r=Mf(this.serializer,t);r&&(e.labels=r),this.I_(e)}w_(t){const e={};e.database=Os(this.serializer),e.removeTarget=t,this.I_(e)}}class wp extends sc{constructor(t,e,r,s,o,a){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,r,s,a),this.serializer=o}get S_(){return this.__>0}start(){this.lastStreamToken=void 0,super.start()}A_(){this.S_&&this.b_([])}f_(t,e){return this.connection.Wo("Write",t,e)}g_(t){return W(!!t.streamToken),this.lastStreamToken=t.streamToken,W(!t.writeResults||t.writeResults.length===0),this.listener.D_()}onNext(t){W(!!t.streamToken),this.lastStreamToken=t.streamToken,this.a_.reset();const e=bf(t.writeResults,t.commitTime),r=kt(t.commitTime);return this.listener.v_(r,e)}C_(){const t={};t.database=Os(this.serializer),this.I_(t)}b_(t){const e={streamToken:this.lastStreamToken,writes:t.map(r=>Vf(this.serializer,r))};this.I_(e)}}/**
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
 */class Ap{}class Rp extends Ap{constructor(t,e,r,s){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=r,this.serializer=s,this.F_=!1}M_(){if(this.F_)throw new M(C.FAILED_PRECONDITION,"The client has already been terminated.")}So(t,e,r,s){return this.M_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.So(t,Ms(e,r),s,o,a)).catch(o=>{throw o.name==="FirebaseError"?(o.code===C.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new M(C.UNKNOWN,o.toString())})}Co(t,e,r,s,o){return this.M_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,c])=>this.connection.Co(t,Ms(e,r),s,a,c,o)).catch(a=>{throw a.name==="FirebaseError"?(a.code===C.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new M(C.UNKNOWN,a.toString())})}terminate(){this.F_=!0,this.connection.terminate()}}class Sp{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.x_=0,this.O_=null,this.N_=!0}B_(){this.x_===0&&(this.L_("Unknown"),this.O_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.O_=null,this.k_("Backend didn't respond within 10 seconds."),this.L_("Offline"),Promise.resolve())))}q_(t){this.state==="Online"?this.L_("Unknown"):(this.x_++,this.x_>=1&&(this.Q_(),this.k_(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.L_("Offline")))}set(t){this.Q_(),this.x_=0,t==="Online"&&(this.N_=!1),this.L_(t)}L_(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}k_(t){const e=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.N_?(Bt(e),this.N_=!1):k("OnlineStateTracker",e)}Q_(){this.O_!==null&&(this.O_.cancel(),this.O_=null)}}/**
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
 */const ye="RemoteStore";class Pp{constructor(t,e,r,s,o){this.localStore=t,this.datastore=e,this.asyncQueue=r,this.remoteSyncer={},this.K_=[],this.U_=new Map,this.W_=new Set,this.G_=[],this.z_=o,this.z_.To(a=>{r.enqueueAndForget(async()=>{ve(this)&&(k(ye,"Restarting streams for network reachability change."),await async function(h){const f=F(h);f.W_.add(4),await Pn(f),f.j_.set("Unknown"),f.W_.delete(4),await Or(f)}(this))})}),this.j_=new Sp(r,s)}}async function Or(n){if(ve(n))for(const t of n.G_)await t(!0)}async function Pn(n){for(const t of n.G_)await t(!1)}function ic(n,t){const e=F(n);e.U_.has(t.targetId)||(e.U_.set(t.targetId,t),di(e)?hi(e):je(e).c_()&&li(e,t))}function ci(n,t){const e=F(n),r=je(e);e.U_.delete(t),r.c_()&&oc(e,t),e.U_.size===0&&(r.c_()?r.P_():ve(e)&&e.j_.set("Unknown"))}function li(n,t){if(n.H_.Ne(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(L.min())>0){const e=n.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(e)}je(n).y_(t)}function oc(n,t){n.H_.Ne(t),je(n).w_(t)}function hi(n){n.H_=new Tf({getRemoteKeysForTarget:t=>n.remoteSyncer.getRemoteKeysForTarget(t),lt:t=>n.U_.get(t)||null,it:()=>n.datastore.serializer.databaseId}),je(n).start(),n.j_.B_()}function di(n){return ve(n)&&!je(n).u_()&&n.U_.size>0}function ve(n){return F(n).W_.size===0}function ac(n){n.H_=void 0}async function Cp(n){n.j_.set("Online")}async function Vp(n){n.U_.forEach((t,e)=>{li(n,t)})}async function bp(n,t){ac(n),di(n)?(n.j_.q_(t),hi(n)):n.j_.set("Unknown")}async function Dp(n,t,e){if(n.j_.set("Online"),t instanceof Ku&&t.state===2&&t.cause)try{await async function(s,o){const a=o.cause;for(const c of o.targetIds)s.U_.has(c)&&(await s.remoteSyncer.rejectListen(c,a),s.U_.delete(c),s.H_.removeTarget(c))}(n,t)}catch(r){k(ye,"Failed to remove targets %s: %s ",t.targetIds.join(","),r),await Ir(n,r)}else if(t instanceof ar?n.H_.We(t):t instanceof zu?n.H_.Ze(t):n.H_.je(t),!e.isEqual(L.min()))try{const r=await nc(n.localStore);e.compareTo(r)>=0&&await function(o,a){const c=o.H_.ot(a);return c.targetChanges.forEach((h,f)=>{if(h.resumeToken.approximateByteSize()>0){const p=o.U_.get(f);p&&o.U_.set(f,p.withResumeToken(h.resumeToken,a))}}),c.targetMismatches.forEach((h,f)=>{const p=o.U_.get(h);if(!p)return;o.U_.set(h,p.withResumeToken(ht.EMPTY_BYTE_STRING,p.snapshotVersion)),oc(o,h);const T=new Yt(p.target,h,f,p.sequenceNumber);li(o,T)}),o.remoteSyncer.applyRemoteEvent(c)}(n,e)}catch(r){k(ye,"Failed to raise snapshot:",r),await Ir(n,r)}}async function Ir(n,t,e){if(!$e(t))throw t;n.W_.add(1),await Pn(n),n.j_.set("Offline"),e||(e=()=>nc(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{k(ye,"Retrying IndexedDB access"),await e(),n.W_.delete(1),await Or(n)})}function uc(n,t){return t().catch(e=>Ir(n,e,t))}async function Lr(n){const t=F(n),e=oe(t);let r=t.K_.length>0?t.K_[t.K_.length-1].batchId:Qs;for(;Np(t);)try{const s=await fp(t.localStore,r);if(s===null){t.K_.length===0&&e.P_();break}r=s.batchId,kp(t,s)}catch(s){await Ir(t,s)}cc(t)&&lc(t)}function Np(n){return ve(n)&&n.K_.length<10}function kp(n,t){n.K_.push(t);const e=oe(n);e.c_()&&e.S_&&e.b_(t.mutations)}function cc(n){return ve(n)&&!oe(n).u_()&&n.K_.length>0}function lc(n){oe(n).start()}async function Mp(n){oe(n).C_()}async function xp(n){const t=oe(n);for(const e of n.K_)t.b_(e.mutations)}async function Op(n,t,e){const r=n.K_.shift(),s=ni.from(r,t,e);await uc(n,()=>n.remoteSyncer.applySuccessfulWrite(s)),await Lr(n)}async function Lp(n,t){t&&oe(n).S_&&await async function(r,s){if(function(a){return yf(a)&&a!==C.ABORTED}(s.code)){const o=r.K_.shift();oe(r).h_(),await uc(r,()=>r.remoteSyncer.rejectFailedWrite(o.batchId,s)),await Lr(r)}}(n,t),cc(n)&&lc(n)}async function Va(n,t){const e=F(n);e.asyncQueue.verifyOperationInProgress(),k(ye,"RemoteStore received new credentials");const r=ve(e);e.W_.add(3),await Pn(e),r&&e.j_.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.W_.delete(3),await Or(e)}async function Fp(n,t){const e=F(n);t?(e.W_.delete(2),await Or(e)):t||(e.W_.add(2),await Pn(e),e.j_.set("Unknown"))}function je(n){return n.J_||(n.J_=function(e,r,s){const o=F(e);return o.M_(),new Ip(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,s)}(n.datastore,n.asyncQueue,{xo:Cp.bind(null,n),No:Vp.bind(null,n),Lo:bp.bind(null,n),p_:Dp.bind(null,n)}),n.G_.push(async t=>{t?(n.J_.h_(),di(n)?hi(n):n.j_.set("Unknown")):(await n.J_.stop(),ac(n))})),n.J_}function oe(n){return n.Y_||(n.Y_=function(e,r,s){const o=F(e);return o.M_(),new wp(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,s)}(n.datastore,n.asyncQueue,{xo:()=>Promise.resolve(),No:Mp.bind(null,n),Lo:Lp.bind(null,n),D_:xp.bind(null,n),v_:Op.bind(null,n)}),n.G_.push(async t=>{t?(n.Y_.h_(),await Lr(n)):(await n.Y_.stop(),n.K_.length>0&&(k(ye,`Stopping write stream with ${n.K_.length} pending writes`),n.K_=[]))})),n.Y_}/**
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
 */class fi{constructor(t,e,r,s,o){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=r,this.op=s,this.removalCallback=o,this.deferred=new Lt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,e,r,s,o){const a=Date.now()+r,c=new fi(t,e,a,s,o);return c.start(r),c}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new M(C.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function pi(n,t){if(Bt("AsyncQueue",`${t}: ${n}`),$e(n))return new M(C.UNAVAILABLE,`${t}: ${n}`);throw n}/**
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
 */class De{static emptySet(t){return new De(t.comparator)}constructor(t){this.comparator=t?(e,r)=>t(e,r)||x.comparator(e.key,r.key):(e,r)=>x.comparator(e.key,r.key),this.keyedMap=un(),this.sortedSet=new tt(this.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((e,r)=>(t(e),!1))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof De)||this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),r=t.sortedSet.getIterator();for(;e.hasNext();){const s=e.getNext().key,o=r.getNext().key;if(!s.isEqual(o))return!1}return!0}toString(){const t=[];return this.forEach(e=>{t.push(e.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,e){const r=new De;return r.comparator=this.comparator,r.keyedMap=t,r.sortedSet=e,r}}/**
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
 */class ba{constructor(){this.Z_=new tt(x.comparator)}track(t){const e=t.doc.key,r=this.Z_.get(e);r?t.type!==0&&r.type===3?this.Z_=this.Z_.insert(e,t):t.type===3&&r.type!==1?this.Z_=this.Z_.insert(e,{type:r.type,doc:t.doc}):t.type===2&&r.type===2?this.Z_=this.Z_.insert(e,{type:2,doc:t.doc}):t.type===2&&r.type===0?this.Z_=this.Z_.insert(e,{type:0,doc:t.doc}):t.type===1&&r.type===0?this.Z_=this.Z_.remove(e):t.type===1&&r.type===2?this.Z_=this.Z_.insert(e,{type:1,doc:r.doc}):t.type===0&&r.type===1?this.Z_=this.Z_.insert(e,{type:2,doc:t.doc}):O():this.Z_=this.Z_.insert(e,t)}X_(){const t=[];return this.Z_.inorderTraversal((e,r)=>{t.push(r)}),t}}class Le{constructor(t,e,r,s,o,a,c,h,f){this.query=t,this.docs=e,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=o,this.fromCache=a,this.syncStateChanged=c,this.excludesMetadataChanges=h,this.hasCachedResults=f}static fromInitialDocuments(t,e,r,s,o){const a=[];return e.forEach(c=>{a.push({type:0,doc:c})}),new Le(t,e,De.emptySet(e),a,r,s,!0,!1,o)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&br(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,r=t.docChanges;if(e.length!==r.length)return!1;for(let s=0;s<e.length;s++)if(e[s].type!==r[s].type||!e[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
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
 */class Up{constructor(){this.ea=void 0,this.ta=[]}na(){return this.ta.some(t=>t.ra())}}class Bp{constructor(){this.queries=Da(),this.onlineState="Unknown",this.ia=new Set}terminate(){(function(e,r){const s=F(e),o=s.queries;s.queries=Da(),o.forEach((a,c)=>{for(const h of c.ta)h.onError(r)})})(this,new M(C.ABORTED,"Firestore shutting down"))}}function Da(){return new Ee(n=>Du(n),br)}async function hc(n,t){const e=F(n);let r=3;const s=t.query;let o=e.queries.get(s);o?!o.na()&&t.ra()&&(r=2):(o=new Up,r=t.ra()?0:1);try{switch(r){case 0:o.ea=await e.onListen(s,!0);break;case 1:o.ea=await e.onListen(s,!1);break;case 2:await e.onFirstRemoteStoreListen(s)}}catch(a){const c=pi(a,`Initialization of query '${Pe(t.query)}' failed`);return void t.onError(c)}e.queries.set(s,o),o.ta.push(t),t.sa(e.onlineState),o.ea&&t.oa(o.ea)&&mi(e)}async function dc(n,t){const e=F(n),r=t.query;let s=3;const o=e.queries.get(r);if(o){const a=o.ta.indexOf(t);a>=0&&(o.ta.splice(a,1),o.ta.length===0?s=t.ra()?0:1:!o.na()&&t.ra()&&(s=2))}switch(s){case 0:return e.queries.delete(r),e.onUnlisten(r,!0);case 1:return e.queries.delete(r),e.onUnlisten(r,!1);case 2:return e.onLastRemoteStoreUnlisten(r);default:return}}function qp(n,t){const e=F(n);let r=!1;for(const s of t){const o=s.query,a=e.queries.get(o);if(a){for(const c of a.ta)c.oa(s)&&(r=!0);a.ea=s}}r&&mi(e)}function $p(n,t,e){const r=F(n),s=r.queries.get(t);if(s)for(const o of s.ta)o.onError(e);r.queries.delete(t)}function mi(n){n.ia.forEach(t=>{t.next()})}var Us,Na;(Na=Us||(Us={}))._a="default",Na.Cache="cache";class fc{constructor(t,e,r){this.query=t,this.aa=e,this.ua=!1,this.ca=null,this.onlineState="Unknown",this.options=r||{}}oa(t){if(!this.options.includeMetadataChanges){const r=[];for(const s of t.docChanges)s.type!==3&&r.push(s);t=new Le(t.query,t.docs,t.oldDocs,r,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let e=!1;return this.ua?this.la(t)&&(this.aa.next(t),e=!0):this.ha(t,this.onlineState)&&(this.Pa(t),e=!0),this.ca=t,e}onError(t){this.aa.error(t)}sa(t){this.onlineState=t;let e=!1;return this.ca&&!this.ua&&this.ha(this.ca,t)&&(this.Pa(this.ca),e=!0),e}ha(t,e){if(!t.fromCache||!this.ra())return!0;const r=e!=="Offline";return(!this.options.Ta||!r)&&(!t.docs.isEmpty()||t.hasCachedResults||e==="Offline")}la(t){if(t.docChanges.length>0)return!0;const e=this.ca&&this.ca.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&this.options.includeMetadataChanges===!0}Pa(t){t=Le.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.ua=!0,this.aa.next(t)}ra(){return this.options.source!==Us.Cache}}/**
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
 */class pc{constructor(t){this.key=t}}class mc{constructor(t){this.key=t}}class jp{constructor(t,e){this.query=t,this.fa=e,this.ga=null,this.hasCachedResults=!1,this.current=!1,this.pa=j(),this.mutatedKeys=j(),this.ya=Nu(t),this.wa=new De(this.ya)}get Sa(){return this.fa}ba(t,e){const r=e?e.Da:new ba,s=e?e.wa:this.wa;let o=e?e.mutatedKeys:this.mutatedKeys,a=s,c=!1;const h=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,f=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(t.inorderTraversal((p,T)=>{const A=s.get(p),S=Dr(this.query,T)?T:null,V=!!A&&this.mutatedKeys.has(A.key),D=!!S&&(S.hasLocalMutations||this.mutatedKeys.has(S.key)&&S.hasCommittedMutations);let N=!1;A&&S?A.data.isEqual(S.data)?V!==D&&(r.track({type:3,doc:S}),N=!0):this.va(A,S)||(r.track({type:2,doc:S}),N=!0,(h&&this.ya(S,h)>0||f&&this.ya(S,f)<0)&&(c=!0)):!A&&S?(r.track({type:0,doc:S}),N=!0):A&&!S&&(r.track({type:1,doc:A}),N=!0,(h||f)&&(c=!0)),N&&(S?(a=a.add(S),o=D?o.add(p):o.delete(p)):(a=a.delete(p),o=o.delete(p)))}),this.query.limit!==null)for(;a.size>this.query.limit;){const p=this.query.limitType==="F"?a.last():a.first();a=a.delete(p.key),o=o.delete(p.key),r.track({type:1,doc:p})}return{wa:a,Da:r,ls:c,mutatedKeys:o}}va(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,r,s){const o=this.wa;this.wa=t.wa,this.mutatedKeys=t.mutatedKeys;const a=t.Da.X_();a.sort((p,T)=>function(S,V){const D=N=>{switch(N){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return O()}};return D(S)-D(V)}(p.type,T.type)||this.ya(p.doc,T.doc)),this.Ca(r),s=s!=null&&s;const c=e&&!s?this.Fa():[],h=this.pa.size===0&&this.current&&!s?1:0,f=h!==this.ga;return this.ga=h,a.length!==0||f?{snapshot:new Le(this.query,t.wa,o,a,t.mutatedKeys,h===0,f,!1,!!r&&r.resumeToken.approximateByteSize()>0),Ma:c}:{Ma:c}}sa(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({wa:this.wa,Da:new ba,mutatedKeys:this.mutatedKeys,ls:!1},!1)):{Ma:[]}}xa(t){return!this.fa.has(t)&&!!this.wa.has(t)&&!this.wa.get(t).hasLocalMutations}Ca(t){t&&(t.addedDocuments.forEach(e=>this.fa=this.fa.add(e)),t.modifiedDocuments.forEach(e=>{}),t.removedDocuments.forEach(e=>this.fa=this.fa.delete(e)),this.current=t.current)}Fa(){if(!this.current)return[];const t=this.pa;this.pa=j(),this.wa.forEach(r=>{this.xa(r.key)&&(this.pa=this.pa.add(r.key))});const e=[];return t.forEach(r=>{this.pa.has(r)||e.push(new mc(r))}),this.pa.forEach(r=>{t.has(r)||e.push(new pc(r))}),e}Oa(t){this.fa=t.gs,this.pa=j();const e=this.ba(t.documents);return this.applyChanges(e,!0)}Na(){return Le.fromInitialDocuments(this.query,this.wa,this.mutatedKeys,this.ga===0,this.hasCachedResults)}}const gi="SyncEngine";class zp{constructor(t,e,r){this.query=t,this.targetId=e,this.view=r}}class Kp{constructor(t){this.key=t,this.Ba=!1}}class Hp{constructor(t,e,r,s,o,a){this.localStore=t,this.remoteStore=e,this.eventManager=r,this.sharedClientState=s,this.currentUser=o,this.maxConcurrentLimboResolutions=a,this.La={},this.ka=new Ee(c=>Du(c),br),this.qa=new Map,this.Qa=new Set,this.$a=new tt(x.comparator),this.Ka=new Map,this.Ua=new ii,this.Wa={},this.Ga=new Map,this.za=Oe.Un(),this.onlineState="Unknown",this.ja=void 0}get isPrimaryClient(){return this.ja===!0}}async function Gp(n,t,e=!0){const r=Tc(n);let s;const o=r.ka.get(t);return o?(r.sharedClientState.addLocalQueryTarget(o.targetId),s=o.view.Na()):s=await gc(r,t,e,!0),s}async function Qp(n,t){const e=Tc(n);await gc(e,t,!0,!1)}async function gc(n,t,e,r){const s=await pp(n.localStore,Nt(t)),o=s.targetId,a=n.sharedClientState.addLocalQueryTarget(o,e);let c;return r&&(c=await Wp(n,t,o,a==="current",s.resumeToken)),n.isPrimaryClient&&e&&ic(n.remoteStore,s),c}async function Wp(n,t,e,r,s){n.Ha=(T,A,S)=>async function(D,N,U,q){let z=N.view.ba(U);z.ls&&(z=await Aa(D.localStore,N.query,!1).then(({documents:v})=>N.view.ba(v,z)));const Y=q&&q.targetChanges.get(N.targetId),$=q&&q.targetMismatches.get(N.targetId)!=null,B=N.view.applyChanges(z,D.isPrimaryClient,Y,$);return Ma(D,N.targetId,B.Ma),B.snapshot}(n,T,A,S);const o=await Aa(n.localStore,t,!0),a=new jp(t,o.gs),c=a.ba(o.documents),h=Sn.createSynthesizedTargetChangeForCurrentChange(e,r&&n.onlineState!=="Offline",s),f=a.applyChanges(c,n.isPrimaryClient,h);Ma(n,e,f.Ma);const p=new zp(t,e,a);return n.ka.set(t,p),n.qa.has(e)?n.qa.get(e).push(t):n.qa.set(e,[t]),f.snapshot}async function Xp(n,t,e){const r=F(n),s=r.ka.get(t),o=r.qa.get(s.targetId);if(o.length>1)return r.qa.set(s.targetId,o.filter(a=>!br(a,t))),void r.ka.delete(t);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await Ls(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),e&&ci(r.remoteStore,s.targetId),Bs(r,s.targetId)}).catch(qe)):(Bs(r,s.targetId),await Ls(r.localStore,s.targetId,!0))}async function Yp(n,t){const e=F(n),r=e.ka.get(t),s=e.qa.get(r.targetId);e.isPrimaryClient&&s.length===1&&(e.sharedClientState.removeLocalQueryTarget(r.targetId),ci(e.remoteStore,r.targetId))}async function Jp(n,t,e){const r=im(n);try{const s=await function(a,c){const h=F(a),f=it.now(),p=c.reduce((S,V)=>S.add(V.key),j());let T,A;return h.persistence.runTransaction("Locally write mutations","readwrite",S=>{let V=qt(),D=j();return h.ds.getEntries(S,p).next(N=>{V=N,V.forEach((U,q)=>{q.isValidDocument()||(D=D.add(U))})}).next(()=>h.localDocuments.getOverlayedDocuments(S,V)).next(N=>{T=N;const U=[];for(const q of c){const z=ff(q,T.get(q.key).overlayedDocument);z!=null&&U.push(new le(q.key,z,wu(z.value.mapValue),Vt.exists(!0)))}return h.mutationQueue.addMutationBatch(S,f,U,c)}).next(N=>{A=N;const U=N.applyToLocalDocumentSet(T,D);return h.documentOverlayCache.saveOverlays(S,N.batchId,U)})}).then(()=>({batchId:A.batchId,changes:Mu(T)}))}(r.localStore,t);r.sharedClientState.addPendingMutation(s.batchId),function(a,c,h){let f=a.Wa[a.currentUser.toKey()];f||(f=new tt(K)),f=f.insert(c,h),a.Wa[a.currentUser.toKey()]=f}(r,s.batchId,e),await Cn(r,s.changes),await Lr(r.remoteStore)}catch(s){const o=pi(s,"Failed to persist write");e.reject(o)}}async function _c(n,t){const e=F(n);try{const r=await hp(e.localStore,t);t.targetChanges.forEach((s,o)=>{const a=e.Ka.get(o);a&&(W(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?a.Ba=!0:s.modifiedDocuments.size>0?W(a.Ba):s.removedDocuments.size>0&&(W(a.Ba),a.Ba=!1))}),await Cn(e,r,t)}catch(r){await qe(r)}}function ka(n,t,e){const r=F(n);if(r.isPrimaryClient&&e===0||!r.isPrimaryClient&&e===1){const s=[];r.ka.forEach((o,a)=>{const c=a.view.sa(t);c.snapshot&&s.push(c.snapshot)}),function(a,c){const h=F(a);h.onlineState=c;let f=!1;h.queries.forEach((p,T)=>{for(const A of T.ta)A.sa(c)&&(f=!0)}),f&&mi(h)}(r.eventManager,t),s.length&&r.La.p_(s),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function Zp(n,t,e){const r=F(n);r.sharedClientState.updateQueryState(t,"rejected",e);const s=r.Ka.get(t),o=s&&s.key;if(o){let a=new tt(x.comparator);a=a.insert(o,yt.newNoDocument(o,L.min()));const c=j().add(o),h=new Mr(L.min(),new Map,new tt(K),a,c);await _c(r,h),r.$a=r.$a.remove(o),r.Ka.delete(t),_i(r)}else await Ls(r.localStore,t,!1).then(()=>Bs(r,t,e)).catch(qe)}async function tm(n,t){const e=F(n),r=t.batch.batchId;try{const s=await lp(e.localStore,t);Ec(e,r,null),yc(e,r),e.sharedClientState.updateMutationState(r,"acknowledged"),await Cn(e,s)}catch(s){await qe(s)}}async function em(n,t,e){const r=F(n);try{const s=await function(a,c){const h=F(a);return h.persistence.runTransaction("Reject batch","readwrite-primary",f=>{let p;return h.mutationQueue.lookupMutationBatch(f,c).next(T=>(W(T!==null),p=T.keys(),h.mutationQueue.removeMutationBatch(f,T))).next(()=>h.mutationQueue.performConsistencyCheck(f)).next(()=>h.documentOverlayCache.removeOverlaysForBatchId(f,p,c)).next(()=>h.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(f,p)).next(()=>h.localDocuments.getDocuments(f,p))})}(r.localStore,t);Ec(r,t,e),yc(r,t),r.sharedClientState.updateMutationState(t,"rejected",e),await Cn(r,s)}catch(s){await qe(s)}}function yc(n,t){(n.Ga.get(t)||[]).forEach(e=>{e.resolve()}),n.Ga.delete(t)}function Ec(n,t,e){const r=F(n);let s=r.Wa[r.currentUser.toKey()];if(s){const o=s.get(t);o&&(e?o.reject(e):o.resolve(),s=s.remove(t)),r.Wa[r.currentUser.toKey()]=s}}function Bs(n,t,e=null){n.sharedClientState.removeLocalQueryTarget(t);for(const r of n.qa.get(t))n.ka.delete(r),e&&n.La.Ja(r,e);n.qa.delete(t),n.isPrimaryClient&&n.Ua.br(t).forEach(r=>{n.Ua.containsKey(r)||vc(n,r)})}function vc(n,t){n.Qa.delete(t.path.canonicalString());const e=n.$a.get(t);e!==null&&(ci(n.remoteStore,e),n.$a=n.$a.remove(t),n.Ka.delete(e),_i(n))}function Ma(n,t,e){for(const r of e)r instanceof pc?(n.Ua.addReference(r.key,t),nm(n,r)):r instanceof mc?(k(gi,"Document no longer in limbo: "+r.key),n.Ua.removeReference(r.key,t),n.Ua.containsKey(r.key)||vc(n,r.key)):O()}function nm(n,t){const e=t.key,r=e.path.canonicalString();n.$a.get(e)||n.Qa.has(r)||(k(gi,"New document in limbo: "+e),n.Qa.add(r),_i(n))}function _i(n){for(;n.Qa.size>0&&n.$a.size<n.maxConcurrentLimboResolutions;){const t=n.Qa.values().next().value;n.Qa.delete(t);const e=new x(Z.fromString(t)),r=n.za.next();n.Ka.set(r,new Kp(e)),n.$a=n.$a.insert(e,r),ic(n.remoteStore,new Yt(Nt(Zs(e.path)),r,"TargetPurposeLimboResolution",Pr.ae))}}async function Cn(n,t,e){const r=F(n),s=[],o=[],a=[];r.ka.isEmpty()||(r.ka.forEach((c,h)=>{a.push(r.Ha(h,t,e).then(f=>{var p;if((f||e)&&r.isPrimaryClient){const T=f?!f.fromCache:(p=e==null?void 0:e.targetChanges.get(h.targetId))===null||p===void 0?void 0:p.current;r.sharedClientState.updateQueryState(h.targetId,T?"current":"not-current")}if(f){s.push(f);const T=ai.Yi(h.targetId,f);o.push(T)}}))}),await Promise.all(a),r.La.p_(s),await async function(h,f){const p=F(h);try{await p.persistence.runTransaction("notifyLocalViewChanges","readwrite",T=>P.forEach(f,A=>P.forEach(A.Hi,S=>p.persistence.referenceDelegate.addReference(T,A.targetId,S)).next(()=>P.forEach(A.Ji,S=>p.persistence.referenceDelegate.removeReference(T,A.targetId,S)))))}catch(T){if(!$e(T))throw T;k(ui,"Failed to update sequence numbers: "+T)}for(const T of f){const A=T.targetId;if(!T.fromCache){const S=p.Ts.get(A),V=S.snapshotVersion,D=S.withLastLimboFreeSnapshotVersion(V);p.Ts=p.Ts.insert(A,D)}}}(r.localStore,o))}async function rm(n,t){const e=F(n);if(!e.currentUser.isEqual(t)){k(gi,"User change. New user:",t.toKey());const r=await ec(e.localStore,t);e.currentUser=t,function(o,a){o.Ga.forEach(c=>{c.forEach(h=>{h.reject(new M(C.CANCELLED,a))})}),o.Ga.clear()}(e,"'waitForPendingWrites' promise is rejected due to a user change."),e.sharedClientState.handleUserChange(t,r.removedBatchIds,r.addedBatchIds),await Cn(e,r.Rs)}}function sm(n,t){const e=F(n),r=e.Ka.get(t);if(r&&r.Ba)return j().add(r.key);{let s=j();const o=e.qa.get(t);if(!o)return s;for(const a of o){const c=e.ka.get(a);s=s.unionWith(c.view.Sa)}return s}}function Tc(n){const t=F(n);return t.remoteStore.remoteSyncer.applyRemoteEvent=_c.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=sm.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=Zp.bind(null,t),t.La.p_=qp.bind(null,t.eventManager),t.La.Ja=$p.bind(null,t.eventManager),t}function im(n){const t=F(n);return t.remoteStore.remoteSyncer.applySuccessfulWrite=tm.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=em.bind(null,t),t}class wr{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(t){this.serializer=xr(t.databaseInfo.databaseId),this.sharedClientState=this.Za(t),this.persistence=this.Xa(t),await this.persistence.start(),this.localStore=this.eu(t),this.gcScheduler=this.tu(t,this.localStore),this.indexBackfillerScheduler=this.nu(t,this.localStore)}tu(t,e){return null}nu(t,e){return null}eu(t){return cp(this.persistence,new op,t.initialUser,this.serializer)}Xa(t){return new tc(oi.ri,this.serializer)}Za(t){return new gp}async terminate(){var t,e;(t=this.gcScheduler)===null||t===void 0||t.stop(),(e=this.indexBackfillerScheduler)===null||e===void 0||e.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}wr.provider={build:()=>new wr};class om extends wr{constructor(t){super(),this.cacheSizeBytes=t}tu(t,e){W(this.persistence.referenceDelegate instanceof Tr);const r=this.persistence.referenceDelegate.garbageCollector;return new Kf(r,t.asyncQueue,e)}Xa(t){const e=this.cacheSizeBytes!==void 0?Tt.withCacheSize(this.cacheSizeBytes):Tt.DEFAULT;return new tc(r=>Tr.ri(r,e),this.serializer)}}class qs{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>ka(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=rm.bind(null,this.syncEngine),await Fp(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new Bp}()}createDatastore(t){const e=xr(t.databaseInfo.databaseId),r=function(o){return new Tp(o)}(t.databaseInfo);return function(o,a,c,h){return new Rp(o,a,c,h)}(t.authCredentials,t.appCheckCredentials,r,e)}createRemoteStore(t){return function(r,s,o,a,c){return new Pp(r,s,o,a,c)}(this.localStore,this.datastore,t.asyncQueue,e=>ka(this.syncEngine,e,0),function(){return Pa.D()?new Pa:new _p}())}createSyncEngine(t,e){return function(s,o,a,c,h,f,p){const T=new Hp(s,o,a,c,h,f);return p&&(T.ja=!0),T}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}async terminate(){var t,e;await async function(s){const o=F(s);k(ye,"RemoteStore shutting down."),o.W_.add(5),await Pn(o),o.z_.shutdown(),o.j_.set("Unknown")}(this.remoteStore),(t=this.datastore)===null||t===void 0||t.terminate(),(e=this.eventManager)===null||e===void 0||e.terminate()}}qs.provider={build:()=>new qs};/**
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
 *//**
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
 */class Ic{constructor(t){this.observer=t,this.muted=!1}next(t){this.muted||this.observer.next&&this.iu(this.observer.next,t)}error(t){this.muted||(this.observer.error?this.iu(this.observer.error,t):Bt("Uncaught Error in snapshot listener:",t.toString()))}su(){this.muted=!0}iu(t,e){setTimeout(()=>{this.muted||t(e)},0)}}/**
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
 */const ae="FirestoreClient";class am{constructor(t,e,r,s,o){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=r,this.databaseInfo=s,this.user=_t.UNAUTHENTICATED,this.clientId=du.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=o,this.authCredentials.start(r,async a=>{k(ae,"Received user=",a.uid),await this.authCredentialListener(a),this.user=a}),this.appCheckCredentials.start(r,a=>(k(ae,"Received new app check token=",a),this.appCheckCredentialListener(a,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}terminate(){this.asyncQueue.enterRestrictedMode();const t=new Lt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const r=pi(e,"Failed to shutdown persistence");t.reject(r)}}),t.promise}}async function Es(n,t){n.asyncQueue.verifyOperationInProgress(),k(ae,"Initializing OfflineComponentProvider");const e=n.configuration;await t.initialize(e);let r=e.initialUser;n.setCredentialChangeListener(async s=>{r.isEqual(s)||(await ec(t.localStore,s),r=s)}),t.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=t}async function xa(n,t){n.asyncQueue.verifyOperationInProgress();const e=await um(n);k(ae,"Initializing OnlineComponentProvider"),await t.initialize(e,n.configuration),n.setCredentialChangeListener(r=>Va(t.remoteStore,r)),n.setAppCheckTokenChangeListener((r,s)=>Va(t.remoteStore,s)),n._onlineComponents=t}async function um(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){k(ae,"Using user provided OfflineComponentProvider");try{await Es(n,n._uninitializedComponentsProvider._offline)}catch(t){const e=t;if(!function(s){return s.name==="FirebaseError"?s.code===C.FAILED_PRECONDITION||s.code===C.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(e))throw e;Ne("Error using user provided cache. Falling back to memory cache: "+e),await Es(n,new wr)}}else k(ae,"Using default OfflineComponentProvider"),await Es(n,new om(void 0));return n._offlineComponents}async function wc(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(k(ae,"Using user provided OnlineComponentProvider"),await xa(n,n._uninitializedComponentsProvider._online)):(k(ae,"Using default OnlineComponentProvider"),await xa(n,new qs))),n._onlineComponents}function cm(n){return wc(n).then(t=>t.syncEngine)}async function Ac(n){const t=await wc(n),e=t.eventManager;return e.onListen=Gp.bind(null,t.syncEngine),e.onUnlisten=Xp.bind(null,t.syncEngine),e.onFirstRemoteStoreListen=Qp.bind(null,t.syncEngine),e.onLastRemoteStoreUnlisten=Yp.bind(null,t.syncEngine),e}function lm(n,t,e={}){const r=new Lt;return n.asyncQueue.enqueueAndForget(async()=>function(o,a,c,h,f){const p=new Ic({next:A=>{p.su(),a.enqueueAndForget(()=>dc(o,T));const S=A.docs.has(c);!S&&A.fromCache?f.reject(new M(C.UNAVAILABLE,"Failed to get document because the client is offline.")):S&&A.fromCache&&h&&h.source==="server"?f.reject(new M(C.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):f.resolve(A)},error:A=>f.reject(A)}),T=new fc(Zs(c.path),p,{includeMetadataChanges:!0,Ta:!0});return hc(o,T)}(await Ac(n),n.asyncQueue,t,e,r)),r.promise}function hm(n,t,e={}){const r=new Lt;return n.asyncQueue.enqueueAndForget(async()=>function(o,a,c,h,f){const p=new Ic({next:A=>{p.su(),a.enqueueAndForget(()=>dc(o,T)),A.fromCache&&h.source==="server"?f.reject(new M(C.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):f.resolve(A)},error:A=>f.reject(A)}),T=new fc(c,p,{includeMetadataChanges:!0,Ta:!0});return hc(o,T)}(await Ac(n),n.asyncQueue,t,e,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
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
 */function Rc(n){const t={};return n.timeoutSeconds!==void 0&&(t.timeoutSeconds=n.timeoutSeconds),t}/**
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
 */const Oa=new Map;/**
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
 */function Sc(n,t,e){if(!e)throw new M(C.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${t}.`)}function dm(n,t,e,r){if(t===!0&&r===!0)throw new M(C.INVALID_ARGUMENT,`${n} and ${e} cannot be used together.`)}function La(n){if(!x.isDocumentKey(n))throw new M(C.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function Fa(n){if(x.isDocumentKey(n))throw new M(C.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function Fr(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const t=function(r){return r.constructor?r.constructor.name:null}(n);return t?`a custom ${t} object`:"an object"}}return typeof n=="function"?"a function":O()}function $t(n,t){if("_delegate"in n&&(n=n._delegate),!(n instanceof t)){if(t.name===n.constructor.name)throw new M(C.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const e=Fr(n);throw new M(C.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${e}`)}}return n}/**
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
 */const Pc="firestore.googleapis.com",Ua=!0;class Ba{constructor(t){var e,r;if(t.host===void 0){if(t.ssl!==void 0)throw new M(C.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Pc,this.ssl=Ua}else this.host=t.host,this.ssl=(e=t.ssl)!==null&&e!==void 0?e:Ua;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=Zu;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<jf)throw new M(C.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}dm("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Rc((r=t.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(o){if(o.timeoutSeconds!==void 0){if(isNaN(o.timeoutSeconds))throw new M(C.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (must not be NaN)`);if(o.timeoutSeconds<5)throw new M(C.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (minimum allowed value is 5)`);if(o.timeoutSeconds>30)throw new M(C.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class Ur{constructor(t,e,r,s){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Ba({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new M(C.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(t){if(this._settingsFrozen)throw new M(C.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Ba(t),t.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new vd;switch(r.type){case"firstParty":return new Ad(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new M(C.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const r=Oa.get(e);r&&(k("ComponentProvider","Removing Datastore"),Oa.delete(e),r.terminate())}(this),Promise.resolve()}}function fm(n,t,e,r={}){var s;const o=(n=$t(n,Ur))._getSettings(),a=`${t}:${e}`;if(o.host!==Pc&&o.host!==a&&Ne("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),n._setSettings(Object.assign(Object.assign({},o),{host:a,ssl:!1})),r.mockUserToken){let c,h;if(typeof r.mockUserToken=="string")c=r.mockUserToken,h=_t.MOCK_USER;else{c=Yl(r.mockUserToken,(s=n._app)===null||s===void 0?void 0:s.options.projectId);const f=r.mockUserToken.sub||r.mockUserToken.user_id;if(!f)throw new M(C.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");h=new _t(f)}n._authCredentials=new Td(new hu(c,h))}}/**
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
 */class ze{constructor(t,e,r){this.converter=e,this._query=r,this.type="query",this.firestore=t}withConverter(t){return new ze(this.firestore,t,this._query)}}class wt{constructor(t,e,r){this.converter=e,this._key=r,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new ee(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new wt(this.firestore,t,this._key)}}class ee extends ze{constructor(t,e,r){super(t,e,Zs(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new wt(this.firestore,null,new x(t))}withConverter(t){return new ee(this.firestore,t,this._path)}}function ue(n,t,...e){if(n=Ft(n),Sc("collection","path",t),n instanceof Ur){const r=Z.fromString(t,...e);return Fa(r),new ee(n,null,r)}{if(!(n instanceof wt||n instanceof ee))throw new M(C.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(Z.fromString(t,...e));return Fa(r),new ee(n.firestore,null,r)}}function Vn(n,t,...e){if(n=Ft(n),arguments.length===1&&(t=du.newId()),Sc("doc","path",t),n instanceof Ur){const r=Z.fromString(t,...e);return La(r),new wt(n,null,new x(r))}{if(!(n instanceof wt||n instanceof ee))throw new M(C.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(Z.fromString(t,...e));return La(r),new wt(n.firestore,n instanceof ee?n.converter:null,new x(r))}}/**
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
 */const qa="AsyncQueue";class $a{constructor(t=Promise.resolve()){this.Vu=[],this.mu=!1,this.fu=[],this.gu=null,this.pu=!1,this.yu=!1,this.wu=[],this.a_=new rc(this,"async_queue_retry"),this.Su=()=>{const r=ys();r&&k(qa,"Visibility state changed to "+r.visibilityState),this.a_.t_()},this.bu=t;const e=ys();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Su)}get isShuttingDown(){return this.mu}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.Du(),this.vu(t)}enterRestrictedMode(t){if(!this.mu){this.mu=!0,this.yu=t||!1;const e=ys();e&&typeof e.removeEventListener=="function"&&e.removeEventListener("visibilitychange",this.Su)}}enqueue(t){if(this.Du(),this.mu)return new Promise(()=>{});const e=new Lt;return this.vu(()=>this.mu&&this.yu?Promise.resolve():(t().then(e.resolve,e.reject),e.promise)).then(()=>e.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Vu.push(t),this.Cu()))}async Cu(){if(this.Vu.length!==0){try{await this.Vu[0](),this.Vu.shift(),this.a_.reset()}catch(t){if(!$e(t))throw t;k(qa,"Operation failed with retryable error: "+t)}this.Vu.length>0&&this.a_.Xo(()=>this.Cu())}}vu(t){const e=this.bu.then(()=>(this.pu=!0,t().catch(r=>{this.gu=r,this.pu=!1;const s=function(a){let c=a.message||"";return a.stack&&(c=a.stack.includes(a.message)?a.stack:a.message+`
`+a.stack),c}(r);throw Bt("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.pu=!1,r))));return this.bu=e,e}enqueueAfterDelay(t,e,r){this.Du(),this.wu.indexOf(t)>-1&&(e=0);const s=fi.createAndSchedule(this,t,e,r,o=>this.Fu(o));return this.fu.push(s),s}Du(){this.gu&&O()}verifyOperationInProgress(){}async Mu(){let t;do t=this.bu,await t;while(t!==this.bu)}xu(t){for(const e of this.fu)if(e.timerId===t)return!0;return!1}Ou(t){return this.Mu().then(()=>{this.fu.sort((e,r)=>e.targetTimeMs-r.targetTimeMs);for(const e of this.fu)if(e.skipDelay(),t!=="all"&&e.timerId===t)break;return this.Mu()})}Nu(t){this.wu.push(t)}Fu(t){const e=this.fu.indexOf(t);this.fu.splice(e,1)}}class Ke extends Ur{constructor(t,e,r,s){super(t,e,r,s),this.type="firestore",this._queue=new $a,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const t=this._firestoreClient.terminate();this._queue=new $a(t),this._firestoreClient=void 0,await t}}}function pm(n,t){const e=typeof n=="object"?n:ad(),r=typeof n=="string"?n:pr,s=nd(e,"firestore").getImmediate({identifier:r});if(!s._initialized){const o=Wl("firestore");o&&fm(s,...o)}return s}function yi(n){if(n._terminated)throw new M(C.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||mm(n),n._firestoreClient}function mm(n){var t,e,r;const s=n._freezeSettings(),o=function(c,h,f,p){return new Fd(c,h,f,p.host,p.ssl,p.experimentalForceLongPolling,p.experimentalAutoDetectLongPolling,Rc(p.experimentalLongPollingOptions),p.useFetchStreams)}(n._databaseId,((t=n._app)===null||t===void 0?void 0:t.options.appId)||"",n._persistenceKey,s);n._componentsProvider||!((e=s.localCache)===null||e===void 0)&&e._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),n._firestoreClient=new am(n._authCredentials,n._appCheckCredentials,n._queue,o,n._componentsProvider&&function(c){const h=c==null?void 0:c._online.build();return{_offline:c==null?void 0:c._offline.build(h),_online:h}}(n._componentsProvider))}/**
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
 */class Fe{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Fe(ht.fromBase64String(t))}catch(e){throw new M(C.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(t){return new Fe(ht.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
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
 */class Br{constructor(...t){for(let e=0;e<t.length;++e)if(t[e].length===0)throw new M(C.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new lt(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
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
 */class Ei{constructor(t){this._methodName=t}}/**
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
 */class vi{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new M(C.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new M(C.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return K(this._lat,t._lat)||K(this._long,t._long)}}/**
 * @license
 * Copyright 2024 Google LLC
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
 */class Ti{constructor(t){this._values=(t||[]).map(e=>e)}toArray(){return this._values.map(t=>t)}isEqual(t){return function(r,s){if(r.length!==s.length)return!1;for(let o=0;o<r.length;++o)if(r[o]!==s[o])return!1;return!0}(this._values,t._values)}}/**
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
 */const gm=/^__.*__$/;class _m{constructor(t,e,r){this.data=t,this.fieldMask=e,this.fieldTransforms=r}toMutation(t,e){return this.fieldMask!==null?new le(t,this.data,this.fieldMask,e,this.fieldTransforms):new Rn(t,this.data,e,this.fieldTransforms)}}class Cc{constructor(t,e,r){this.data=t,this.fieldMask=e,this.fieldTransforms=r}toMutation(t,e){return new le(t,this.data,this.fieldMask,e,this.fieldTransforms)}}function Vc(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw O()}}class Ii{constructor(t,e,r,s,o,a){this.settings=t,this.databaseId=e,this.serializer=r,this.ignoreUndefinedProperties=s,o===void 0&&this.Bu(),this.fieldTransforms=o||[],this.fieldMask=a||[]}get path(){return this.settings.path}get Lu(){return this.settings.Lu}ku(t){return new Ii(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}qu(t){var e;const r=(e=this.path)===null||e===void 0?void 0:e.child(t),s=this.ku({path:r,Qu:!1});return s.$u(t),s}Ku(t){var e;const r=(e=this.path)===null||e===void 0?void 0:e.child(t),s=this.ku({path:r,Qu:!1});return s.Bu(),s}Uu(t){return this.ku({path:void 0,Qu:!0})}Wu(t){return Ar(t,this.settings.methodName,this.settings.Gu||!1,this.path,this.settings.zu)}contains(t){return this.fieldMask.find(e=>t.isPrefixOf(e))!==void 0||this.fieldTransforms.find(e=>t.isPrefixOf(e.field))!==void 0}Bu(){if(this.path)for(let t=0;t<this.path.length;t++)this.$u(this.path.get(t))}$u(t){if(t.length===0)throw this.Wu("Document fields must not be empty");if(Vc(this.Lu)&&gm.test(t))throw this.Wu('Document fields cannot begin and end with "__"')}}class ym{constructor(t,e,r){this.databaseId=t,this.ignoreUndefinedProperties=e,this.serializer=r||xr(t)}ju(t,e,r,s=!1){return new Ii({Lu:t,methodName:e,zu:r,path:lt.emptyPath(),Qu:!1,Gu:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function wi(n){const t=n._freezeSettings(),e=xr(n._databaseId);return new ym(n._databaseId,!!t.ignoreUndefinedProperties,e)}function Em(n,t,e,r,s,o={}){const a=n.ju(o.merge||o.mergeFields?2:0,t,e,s);Ai("Data must be an object, but it was:",a,r);const c=bc(r,a);let h,f;if(o.merge)h=new Rt(a.fieldMask),f=a.fieldTransforms;else if(o.mergeFields){const p=[];for(const T of o.mergeFields){const A=$s(t,T,e);if(!a.contains(A))throw new M(C.INVALID_ARGUMENT,`Field '${A}' is specified in your field mask but missing from your input data.`);Nc(p,A)||p.push(A)}h=new Rt(p),f=a.fieldTransforms.filter(T=>h.covers(T.field))}else h=null,f=a.fieldTransforms;return new _m(new It(c),h,f)}class qr extends Ei{_toFieldTransform(t){if(t.Lu!==2)throw t.Lu===1?t.Wu(`${this._methodName}() can only appear at the top level of your update data`):t.Wu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return t.fieldMask.push(t.path),null}isEqual(t){return t instanceof qr}}function vm(n,t,e,r){const s=n.ju(1,t,e);Ai("Data must be an object, but it was:",s,r);const o=[],a=It.empty();ce(r,(h,f)=>{const p=Ri(t,h,e);f=Ft(f);const T=s.Ku(p);if(f instanceof qr)o.push(p);else{const A=bn(f,T);A!=null&&(o.push(p),a.set(p,A))}});const c=new Rt(o);return new Cc(a,c,s.fieldTransforms)}function Tm(n,t,e,r,s,o){const a=n.ju(1,t,e),c=[$s(t,r,e)],h=[s];if(o.length%2!=0)throw new M(C.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let A=0;A<o.length;A+=2)c.push($s(t,o[A])),h.push(o[A+1]);const f=[],p=It.empty();for(let A=c.length-1;A>=0;--A)if(!Nc(f,c[A])){const S=c[A];let V=h[A];V=Ft(V);const D=a.Ku(S);if(V instanceof qr)f.push(S);else{const N=bn(V,D);N!=null&&(f.push(S),p.set(S,N))}}const T=new Rt(f);return new Cc(p,T,a.fieldTransforms)}function Im(n,t,e,r=!1){return bn(e,n.ju(r?4:3,t))}function bn(n,t){if(Dc(n=Ft(n)))return Ai("Unsupported field value:",t,n),bc(n,t);if(n instanceof Ei)return function(r,s){if(!Vc(s.Lu))throw s.Wu(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Wu(`${r._methodName}() is not currently supported inside arrays`);const o=r._toFieldTransform(s);o&&s.fieldTransforms.push(o)}(n,t),null;if(n===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),n instanceof Array){if(t.settings.Qu&&t.Lu!==4)throw t.Wu("Nested arrays are not supported");return function(r,s){const o=[];let a=0;for(const c of r){let h=bn(c,s.Uu(a));h==null&&(h={nullValue:"NULL_VALUE"}),o.push(h),a++}return{arrayValue:{values:o}}}(n,t)}return function(r,s){if((r=Ft(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return af(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const o=it.fromDate(r);return{timestampValue:vr(s.serializer,o)}}if(r instanceof it){const o=new it(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:vr(s.serializer,o)}}if(r instanceof vi)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Fe)return{bytesValue:Hu(s.serializer,r._byteString)};if(r instanceof wt){const o=s.databaseId,a=r.firestore._databaseId;if(!a.isEqual(o))throw s.Wu(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${o.projectId}/${o.database}`);return{referenceValue:si(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof Ti)return function(a,c){return{mapValue:{fields:{[vu]:{stringValue:Iu},[mr]:{arrayValue:{values:a.toArray().map(f=>{if(typeof f!="number")throw c.Wu("VectorValues must only contain numeric values.");return ti(c.serializer,f)})}}}}}}(r,s);throw s.Wu(`Unsupported field value: ${Fr(r)}`)}(n,t)}function bc(n,t){const e={};return pu(n)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):ce(n,(r,s)=>{const o=bn(s,t.qu(r));o!=null&&(e[r]=o)}),{mapValue:{fields:e}}}function Dc(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof it||n instanceof vi||n instanceof Fe||n instanceof wt||n instanceof Ei||n instanceof Ti)}function Ai(n,t,e){if(!Dc(e)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(e)){const r=Fr(e);throw r==="an object"?t.Wu(n+" a custom object"):t.Wu(n+" "+r)}}function $s(n,t,e){if((t=Ft(t))instanceof Br)return t._internalPath;if(typeof t=="string")return Ri(n,t);throw Ar("Field path arguments must be of type string or ",n,!1,void 0,e)}const wm=new RegExp("[~\\*/\\[\\]]");function Ri(n,t,e){if(t.search(wm)>=0)throw Ar(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,e);try{return new Br(...t.split("."))._internalPath}catch{throw Ar(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,e)}}function Ar(n,t,e,r,s){const o=r&&!r.isEmpty(),a=s!==void 0;let c=`Function ${t}() called with invalid data`;e&&(c+=" (via `toFirestore()`)"),c+=". ";let h="";return(o||a)&&(h+=" (found",o&&(h+=` in field ${r}`),a&&(h+=` in document ${s}`),h+=")"),new M(C.INVALID_ARGUMENT,c+n+h)}function Nc(n,t){return n.some(e=>e.isEqual(t))}/**
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
 */class kc{constructor(t,e,r,s,o){this._firestore=t,this._userDataWriter=e,this._key=r,this._document=s,this._converter=o}get id(){return this._key.path.lastSegment()}get ref(){return new wt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new Am(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(Si("DocumentSnapshot.get",t));if(e!==null)return this._userDataWriter.convertValue(e)}}}class Am extends kc{data(){return super.data()}}function Si(n,t){return typeof t=="string"?Ri(n,t):t instanceof Br?t._internalPath:t._delegate._internalPath}/**
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
 */function Rm(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new M(C.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Pi{}class Sm extends Pi{}function Rr(n,t,...e){let r=[];t instanceof Pi&&r.push(t),r=r.concat(e),function(o){const a=o.filter(h=>h instanceof Ci).length,c=o.filter(h=>h instanceof $r).length;if(a>1||a>0&&c>0)throw new M(C.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)n=s._apply(n);return n}class $r extends Sm{constructor(t,e,r){super(),this._field=t,this._op=e,this._value=r,this.type="where"}static _create(t,e,r){return new $r(t,e,r)}_apply(t){const e=this._parse(t);return Mc(t._query,e),new ze(t.firestore,t.converter,Ds(t._query,e))}_parse(t){const e=wi(t.firestore);return function(o,a,c,h,f,p,T){let A;if(f.isKeyField()){if(p==="array-contains"||p==="array-contains-any")throw new M(C.INVALID_ARGUMENT,`Invalid Query. You can't perform '${p}' queries on documentId().`);if(p==="in"||p==="not-in"){za(T,p);const V=[];for(const D of T)V.push(ja(h,o,D));A={arrayValue:{values:V}}}else A=ja(h,o,T)}else p!=="in"&&p!=="not-in"&&p!=="array-contains-any"||za(T,p),A=Im(c,a,T,p==="in"||p==="not-in");return st.create(f,p,A)}(t._query,"where",e,t.firestore._databaseId,this._field,this._op,this._value)}}function Sr(n,t,e){const r=t,s=Si("where",n);return $r._create(s,r,e)}class Ci extends Pi{constructor(t,e){super(),this.type=t,this._queryConstraints=e}static _create(t,e){return new Ci(t,e)}_parse(t){const e=this._queryConstraints.map(r=>r._parse(t)).filter(r=>r.getFilters().length>0);return e.length===1?e[0]:bt.create(e,this._getOperator())}_apply(t){const e=this._parse(t);return e.getFilters().length===0?t:(function(s,o){let a=s;const c=o.getFlattenedFilters();for(const h of c)Mc(a,h),a=Ds(a,h)}(t._query,e),new ze(t.firestore,t.converter,Ds(t._query,e)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function ja(n,t,e){if(typeof(e=Ft(e))=="string"){if(e==="")throw new M(C.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!bu(t)&&e.indexOf("/")!==-1)throw new M(C.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${e}' contains a '/' character.`);const r=t.path.child(Z.fromString(e));if(!x.isDocumentKey(r))throw new M(C.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return ia(n,new x(r))}if(e instanceof wt)return ia(n,e._key);throw new M(C.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Fr(e)}.`)}function za(n,t){if(!Array.isArray(n)||n.length===0)throw new M(C.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`)}function Mc(n,t){const e=function(s,o){for(const a of s)for(const c of a.getFlattenedFilters())if(o.indexOf(c.op)>=0)return c.op;return null}(n.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(t.op));if(e!==null)throw e===t.op?new M(C.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new M(C.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${e.toString()}' filters.`)}class Pm{convertValue(t,e="none"){switch(ie(t)){case 0:return null;case 1:return t.booleanValue;case 2:return nt(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(se(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 11:return this.convertObject(t.mapValue,e);case 10:return this.convertVectorValue(t.mapValue);default:throw O()}}convertObject(t,e){return this.convertObjectMap(t.fields,e)}convertObjectMap(t,e="none"){const r={};return ce(t,(s,o)=>{r[s]=this.convertValue(o,e)}),r}convertVectorValue(t){var e,r,s;const o=(s=(r=(e=t.fields)===null||e===void 0?void 0:e[mr].arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.map(a=>nt(a.doubleValue));return new Ti(o)}convertGeoPoint(t){return new vi(nt(t.latitude),nt(t.longitude))}convertArray(t,e){return(t.values||[]).map(r=>this.convertValue(r,e))}convertServerTimestamp(t,e){switch(e){case"previous":const r=Vr(t);return r==null?null:this.convertValue(r,e);case"estimate":return this.convertTimestamp(yn(t));default:return null}}convertTimestamp(t){const e=re(t);return new it(e.seconds,e.nanos)}convertDocumentKey(t,e){const r=Z.fromString(t);W(Ju(r));const s=new En(r.get(1),r.get(3)),o=new x(r.popFirst(5));return s.isEqual(e)||Bt(`Document ${o} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),o}}/**
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
 */function Cm(n,t,e){let r;return r=n?n.toFirestore(t):t,r}/**
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
 */class ln{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class xc extends kc{constructor(t,e,r,s,o,a){super(t,e,r,s,a),this._firestore=t,this._firestoreImpl=t,this.metadata=o}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new ur(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const r=this._document.data.field(Si("DocumentSnapshot.get",t));if(r!==null)return this._userDataWriter.convertValue(r,e.serverTimestamps)}}}class ur extends xc{data(t={}){return super.data(t)}}class Vm{constructor(t,e,r,s){this._firestore=t,this._userDataWriter=e,this._snapshot=s,this.metadata=new ln(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const t=[];return this.forEach(e=>t.push(e)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,e){this._snapshot.docs.forEach(r=>{t.call(e,new ur(this._firestore,this._userDataWriter,r.key,r,new ln(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new M(C.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(s,o){if(s._snapshot.oldDocs.isEmpty()){let a=0;return s._snapshot.docChanges.map(c=>{const h=new ur(s._firestore,s._userDataWriter,c.doc.key,c.doc,new ln(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);return c.doc,{type:"added",doc:h,oldIndex:-1,newIndex:a++}})}{let a=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(c=>o||c.type!==3).map(c=>{const h=new ur(s._firestore,s._userDataWriter,c.doc.key,c.doc,new ln(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);let f=-1,p=-1;return c.type!==0&&(f=a.indexOf(c.doc.key),a=a.delete(c.doc.key)),c.type!==1&&(a=a.add(c.doc),p=a.indexOf(c.doc.key)),{type:bm(c.type),doc:h,oldIndex:f,newIndex:p}})}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}}function bm(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return O()}}/**
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
 */function Dm(n){n=$t(n,wt);const t=$t(n.firestore,Ke);return lm(yi(t),n._key).then(e=>km(t,n,e))}class Oc extends Pm{constructor(t){super(),this.firestore=t}convertBytes(t){return new Fe(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new wt(this.firestore,null,e)}}function wn(n){n=$t(n,ze);const t=$t(n.firestore,Ke),e=yi(t),r=new Oc(t);return Rm(n._query),hm(e,n._query).then(s=>new Vm(t,r,n,s))}function Nm(n,t,e,...r){n=$t(n,wt);const s=$t(n.firestore,Ke),o=wi(s);let a;return a=typeof(t=Ft(t))=="string"||t instanceof Br?Tm(o,"updateDoc",n._key,t,e,r):vm(o,"updateDoc",n._key,t),bi(s,[a.toMutation(n._key,Vt.exists(!0))])}function cr(n){return bi($t(n.firestore,Ke),[new ei(n._key,Vt.none())])}function Vi(n,t){const e=$t(n.firestore,Ke),r=Vn(n),s=Cm(n.converter,t);return bi(e,[Em(wi(n.firestore),"addDoc",r._key,s,n.converter!==null,{}).toMutation(r._key,Vt.exists(!1))]).then(()=>r)}function bi(n,t){return function(r,s){const o=new Lt;return r.asyncQueue.enqueueAndForget(async()=>Jp(await cm(r),s,o)),o.promise}(yi(n),t)}function km(n,t,e){const r=e.docs.get(t._key),s=new Oc(n);return new xc(n,s,t._key,r,new ln(e.hasPendingWrites,e.fromCache),t.converter)}(function(t,e=!0){(function(s){Be=s})(od),dr(new mn("firestore",(r,{instanceIdentifier:s,options:o})=>{const a=r.getProvider("app").getImmediate(),c=new Ke(new Id(r.getProvider("auth-internal")),new Rd(a,r.getProvider("app-check-internal")),function(f,p){if(!Object.prototype.hasOwnProperty.apply(f.options,["projectId"]))throw new M(C.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new En(f.options.projectId,p)}(a,s),a);return o=Object.assign({useFetchStreams:e},o),c._setSettings(o),c},"PUBLIC").setMultipleInstances(!0)),be(Qo,Wo,t),be(Qo,Wo,"esm2017")})();const Mm={apiKey:"AIzaSyAJHKZ2NYVUMQT5lzlZUKlgWUTP6esIvUc",authDomain:"lebow-decision-maker.firebaseapp.com",projectId:"lebow-decision-maker",storageBucket:"lebow-decision-maker.firebasestorage.app",messagingSenderId:"1033111206450",appId:"1:1033111206450:web:9b712012cdf42e38ef5a2b",measurementId:"G-76JNZZRHGW"},xm=nu(Mm),St=pm(xm),$m=async n=>{try{return(await Vi(ue(St,"surveys"),{name:n.name,topics:n.topics,createdAt:new Date})).id}catch(t){throw console.error("Error adding survey: ",t),t}},jm=async()=>{try{return(await wn(ue(St,"surveys"))).docs.map(t=>({id:t.id,...t.data()}))}catch(n){throw console.error("Error getting surveys: ",n),n}},zm=async n=>{try{const t=Vn(St,"surveys",n),e=await Dm(t);if(e.exists())return{id:e.id,...e.data()};throw new Error("Survey not found")}catch(t){throw console.error("Error getting survey: ",t),t}},Km=async n=>{try{const e=(await wn(Rr(ue(St,"questions"),Sr("surveyId","==",n)))).docs.map(a=>cr(a.ref));await Promise.all(e),await cr(Vn(St,"surveys",n));const r=Rr(ue(St,"users"),Sr("surveyId","==",n)),o=(await wn(r)).docs.map(a=>cr(a.ref));return await Promise.all(o),console.log(`Deleted survey ${n} and its associated questions and user submissions.`),!0}catch(t){throw console.error("Error deleting survey and associated data:",t),t}},Hm=async(n,t)=>{try{return(await Vi(ue(St,"questions"),{surveyId:n,question:t.question,buttons:t.buttons,createdAt:new Date})).id}catch(e){throw console.error("Error adding question: ",e),e}},Gm=async n=>{try{const t=Rr(ue(St,"questions"),Sr("surveyId","==",n));return(await wn(t)).docs.map(r=>({id:r.id,...r.data()}))}catch(t){throw console.error("Error getting questions: ",t),t}},Qm=async n=>{try{return await cr(Vn(St,"questions",n)),!0}catch(t){throw console.error("Error deleting question: ",t),t}},Wm=async(n,t)=>{try{return await Nm(Vn(St,"questions",n),{question:t.question,buttons:t.buttons,updatedAt:new Date}),!0}catch(e){throw console.error("Error updating question:",e),e}},Xm=async n=>{try{const t=await Vi(ue(St,"users"),{surveyId:n.surveyId,surveyName:n.surveyName,userName:n.userName,userEmail:n.userEmail,topicResults:n.topicResults,answerHistory:n.answerHistory,finalResult:n.finalResult,submittedAt:new Date});return console.log("User survey submission saved with ID: ",t.id),t.id}catch(t){throw console.error("Error saving user survey submission: ",t),t}},Ym=async n=>{try{const t=Rr(ue(St,"users"),Sr("surveyId","==",n));return(await wn(t)).docs.map(r=>({id:r.id,...r.data()}))}catch(t){throw console.error(`Error getting submissions for survey ${n}:`,t),t}};export{zm as a,Gm as b,Xm as c,Km as d,Fm as e,Ym as f,jm as g,Um as h,Lm as i,$m as j,Hm as k,Qm as l,Bm as s,Wm as u};
