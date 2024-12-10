import{R as he}from"./index-RnadGKpr.js";const me=e=>{let t;const n=new Set,r=(u,l)=>{const f=typeof u=="function"?u(t):u;if(!Object.is(f,t)){const b=t;t=l??(typeof f!="object"||f===null)?f:Object.assign({},t,f),n.forEach(w=>w(t,b))}},s=()=>t,c={setState:r,getState:s,getInitialState:()=>d,subscribe:u=>(n.add(u),()=>n.delete(u))},d=t=e(r,s,c);return c},tt=e=>e?me(e):me,nt=e=>e;function rt(e,t=nt){const n=he.useSyncExternalStore(e.subscribe,()=>t(e.getState()),()=>t(e.getInitialState()));return he.useDebugValue(n),n}const ye=e=>{const t=tt(e),n=r=>rt(t,r);return Object.assign(n,t),n},Un=e=>e?ye(e):ye;function Fe(e,t){return function(){return e.apply(t,arguments)}}const{toString:st}=Object.prototype,{getPrototypeOf:ce}=Object,$=(e=>t=>{const n=st.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),C=e=>(e=e.toLowerCase(),t=>$(t)===e),v=e=>t=>typeof t===e,{isArray:U}=Array,q=v("undefined");function ot(e){return e!==null&&!q(e)&&e.constructor!==null&&!q(e.constructor)&&x(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const Le=C("ArrayBuffer");function it(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&Le(e.buffer),t}const at=v("string"),x=v("function"),Be=v("number"),K=e=>e!==null&&typeof e=="object",ct=e=>e===!0||e===!1,z=e=>{if($(e)!=="object")return!1;const t=ce(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},ut=C("Date"),lt=C("File"),ft=C("Blob"),dt=C("FileList"),pt=e=>K(e)&&x(e.pipe),ht=e=>{let t;return e&&(typeof FormData=="function"&&e instanceof FormData||x(e.append)&&((t=$(e))==="formdata"||t==="object"&&x(e.toString)&&e.toString()==="[object FormData]"))},mt=C("URLSearchParams"),[yt,bt,wt,Et]=["ReadableStream","Request","Response","Headers"].map(C),St=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function I(e,t,{allOwnKeys:n=!1}={}){if(e===null||typeof e>"u")return;let r,s;if(typeof e!="object"&&(e=[e]),U(e))for(r=0,s=e.length;r<s;r++)t.call(null,e[r],r,e);else{const o=n?Object.getOwnPropertyNames(e):Object.keys(e),i=o.length;let c;for(r=0;r<i;r++)c=o[r],t.call(null,e[c],c,e)}}function De(e,t){t=t.toLowerCase();const n=Object.keys(e);let r=n.length,s;for(;r-- >0;)if(s=n[r],t===s.toLowerCase())return s;return null}const L=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,Ue=e=>!q(e)&&e!==L;function te(){const{caseless:e}=Ue(this)&&this||{},t={},n=(r,s)=>{const o=e&&De(t,s)||s;z(t[o])&&z(r)?t[o]=te(t[o],r):z(r)?t[o]=te({},r):U(r)?t[o]=r.slice():t[o]=r};for(let r=0,s=arguments.length;r<s;r++)arguments[r]&&I(arguments[r],n);return t}const gt=(e,t,n,{allOwnKeys:r}={})=>(I(t,(s,o)=>{n&&x(s)?e[o]=Fe(s,n):e[o]=s},{allOwnKeys:r}),e),Rt=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),Ot=(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},Tt=(e,t,n,r)=>{let s,o,i;const c={};if(t=t||{},e==null)return t;do{for(s=Object.getOwnPropertyNames(e),o=s.length;o-- >0;)i=s[o],(!r||r(i,e,t))&&!c[i]&&(t[i]=e[i],c[i]=!0);e=n!==!1&&ce(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},At=(e,t,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return r!==-1&&r===n},xt=e=>{if(!e)return null;if(U(e))return e;let t=e.length;if(!Be(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},Ct=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&ce(Uint8Array)),Nt=(e,t)=>{const r=(e&&e[Symbol.iterator]).call(e);let s;for(;(s=r.next())&&!s.done;){const o=s.value;t.call(e,o[0],o[1])}},Pt=(e,t)=>{let n;const r=[];for(;(n=e.exec(t))!==null;)r.push(n);return r},_t=C("HTMLFormElement"),Ft=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,s){return r.toUpperCase()+s}),be=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),Lt=C("RegExp"),ke=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};I(n,(s,o)=>{let i;(i=t(s,o,e))!==!1&&(r[o]=i||s)}),Object.defineProperties(e,r)},Bt=e=>{ke(e,(t,n)=>{if(x(e)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=e[n];if(x(r)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},Dt=(e,t)=>{const n={},r=s=>{s.forEach(o=>{n[o]=!0})};return U(e)?r(e):r(String(e).split(t)),n},Ut=()=>{},kt=(e,t)=>e!=null&&Number.isFinite(e=+e)?e:t,Q="abcdefghijklmnopqrstuvwxyz",we="0123456789",je={DIGIT:we,ALPHA:Q,ALPHA_DIGIT:Q+Q.toUpperCase()+we},jt=(e=16,t=je.ALPHA_DIGIT)=>{let n="";const{length:r}=t;for(;e--;)n+=t[Math.random()*r|0];return n};function qt(e){return!!(e&&x(e.append)&&e[Symbol.toStringTag]==="FormData"&&e[Symbol.iterator])}const It=e=>{const t=new Array(10),n=(r,s)=>{if(K(r)){if(t.indexOf(r)>=0)return;if(!("toJSON"in r)){t[s]=r;const o=U(r)?[]:{};return I(r,(i,c)=>{const d=n(i,s+1);!q(d)&&(o[c]=d)}),t[s]=void 0,o}}return r};return n(e,0)},Ht=C("AsyncFunction"),Mt=e=>e&&(K(e)||x(e))&&x(e.then)&&x(e.catch),qe=((e,t)=>e?setImmediate:t?((n,r)=>(L.addEventListener("message",({source:s,data:o})=>{s===L&&o===n&&r.length&&r.shift()()},!1),s=>{r.push(s),L.postMessage(n,"*")}))(`axios@${Math.random()}`,[]):n=>setTimeout(n))(typeof setImmediate=="function",x(L.postMessage)),zt=typeof queueMicrotask<"u"?queueMicrotask.bind(L):typeof process<"u"&&process.nextTick||qe,a={isArray:U,isArrayBuffer:Le,isBuffer:ot,isFormData:ht,isArrayBufferView:it,isString:at,isNumber:Be,isBoolean:ct,isObject:K,isPlainObject:z,isReadableStream:yt,isRequest:bt,isResponse:wt,isHeaders:Et,isUndefined:q,isDate:ut,isFile:lt,isBlob:ft,isRegExp:Lt,isFunction:x,isStream:pt,isURLSearchParams:mt,isTypedArray:Ct,isFileList:dt,forEach:I,merge:te,extend:gt,trim:St,stripBOM:Rt,inherits:Ot,toFlatObject:Tt,kindOf:$,kindOfTest:C,endsWith:At,toArray:xt,forEachEntry:Nt,matchAll:Pt,isHTMLForm:_t,hasOwnProperty:be,hasOwnProp:be,reduceDescriptors:ke,freezeMethods:Bt,toObjectSet:Dt,toCamelCase:Ft,noop:Ut,toFiniteNumber:kt,findKey:De,global:L,isContextDefined:Ue,ALPHABET:je,generateString:jt,isSpecCompliantForm:qt,toJSONObject:It,isAsyncFn:Ht,isThenable:Mt,setImmediate:qe,asap:zt};function m(e,t,n,r,s){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),s&&(this.response=s,this.status=s.status?s.status:null)}a.inherits(m,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:a.toJSONObject(this.config),code:this.code,status:this.status}}});const Ie=m.prototype,He={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{He[e]={value:e}});Object.defineProperties(m,He);Object.defineProperty(Ie,"isAxiosError",{value:!0});m.from=(e,t,n,r,s,o)=>{const i=Object.create(Ie);return a.toFlatObject(e,i,function(d){return d!==Error.prototype},c=>c!=="isAxiosError"),m.call(i,e.message,t,n,r,s),i.cause=e,i.name=e.name,o&&Object.assign(i,o),i};const Jt=null;function ne(e){return a.isPlainObject(e)||a.isArray(e)}function Me(e){return a.endsWith(e,"[]")?e.slice(0,-2):e}function Ee(e,t,n){return e?e.concat(t).map(function(s,o){return s=Me(s),!n&&o?"["+s+"]":s}).join(n?".":""):t}function Vt(e){return a.isArray(e)&&!e.some(ne)}const Wt=a.toFlatObject(a,{},null,function(t){return/^is[A-Z]/.test(t)});function G(e,t,n){if(!a.isObject(e))throw new TypeError("target must be an object");t=t||new FormData,n=a.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(y,h){return!a.isUndefined(h[y])});const r=n.metaTokens,s=n.visitor||l,o=n.dots,i=n.indexes,d=(n.Blob||typeof Blob<"u"&&Blob)&&a.isSpecCompliantForm(t);if(!a.isFunction(s))throw new TypeError("visitor must be a function");function u(p){if(p===null)return"";if(a.isDate(p))return p.toISOString();if(!d&&a.isBlob(p))throw new m("Blob is not supported. Use a Buffer instead.");return a.isArrayBuffer(p)||a.isTypedArray(p)?d&&typeof Blob=="function"?new Blob([p]):Buffer.from(p):p}function l(p,y,h){let E=p;if(p&&!h&&typeof p=="object"){if(a.endsWith(y,"{}"))y=r?y:y.slice(0,-2),p=JSON.stringify(p);else if(a.isArray(p)&&Vt(p)||(a.isFileList(p)||a.endsWith(y,"[]"))&&(E=a.toArray(p)))return y=Me(y),E.forEach(function(R,N){!(a.isUndefined(R)||R===null)&&t.append(i===!0?Ee([y],N,o):i===null?y:y+"[]",u(R))}),!1}return ne(p)?!0:(t.append(Ee(h,y,o),u(p)),!1)}const f=[],b=Object.assign(Wt,{defaultVisitor:l,convertValue:u,isVisitable:ne});function w(p,y){if(!a.isUndefined(p)){if(f.indexOf(p)!==-1)throw Error("Circular reference detected in "+y.join("."));f.push(p),a.forEach(p,function(E,S){(!(a.isUndefined(E)||E===null)&&s.call(t,E,a.isString(S)?S.trim():S,y,b))===!0&&w(E,y?y.concat(S):[S])}),f.pop()}}if(!a.isObject(e))throw new TypeError("data must be an object");return w(e),t}function Se(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(r){return t[r]})}function ue(e,t){this._pairs=[],e&&G(e,this,t)}const ze=ue.prototype;ze.append=function(t,n){this._pairs.push([t,n])};ze.toString=function(t){const n=t?function(r){return t.call(this,r,Se)}:Se;return this._pairs.map(function(s){return n(s[0])+"="+n(s[1])},"").join("&")};function $t(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function Je(e,t,n){if(!t)return e;const r=n&&n.encode||$t,s=n&&n.serialize;let o;if(s?o=s(t,n):o=a.isURLSearchParams(t)?t.toString():new ue(t,n).toString(r),o){const i=e.indexOf("#");i!==-1&&(e=e.slice(0,i)),e+=(e.indexOf("?")===-1?"?":"&")+o}return e}class ge{constructor(){this.handlers=[]}use(t,n,r){return this.handlers.push({fulfilled:t,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){a.forEach(this.handlers,function(r){r!==null&&t(r)})}}const Ve={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},vt=typeof URLSearchParams<"u"?URLSearchParams:ue,Kt=typeof FormData<"u"?FormData:null,Gt=typeof Blob<"u"?Blob:null,Xt={isBrowser:!0,classes:{URLSearchParams:vt,FormData:Kt,Blob:Gt},protocols:["http","https","file","blob","url","data"]},le=typeof window<"u"&&typeof document<"u",re=typeof navigator=="object"&&navigator||void 0,Qt=le&&(!re||["ReactNative","NativeScript","NS"].indexOf(re.product)<0),Zt=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",Yt=le&&window.location.href||"http://localhost",en=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:le,hasStandardBrowserEnv:Qt,hasStandardBrowserWebWorkerEnv:Zt,navigator:re,origin:Yt},Symbol.toStringTag,{value:"Module"})),T={...en,...Xt};function tn(e,t){return G(e,new T.classes.URLSearchParams,Object.assign({visitor:function(n,r,s,o){return T.isNode&&a.isBuffer(n)?(this.append(r,n.toString("base64")),!1):o.defaultVisitor.apply(this,arguments)}},t))}function nn(e){return a.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function rn(e){const t={},n=Object.keys(e);let r;const s=n.length;let o;for(r=0;r<s;r++)o=n[r],t[o]=e[o];return t}function We(e){function t(n,r,s,o){let i=n[o++];if(i==="__proto__")return!0;const c=Number.isFinite(+i),d=o>=n.length;return i=!i&&a.isArray(s)?s.length:i,d?(a.hasOwnProp(s,i)?s[i]=[s[i],r]:s[i]=r,!c):((!s[i]||!a.isObject(s[i]))&&(s[i]=[]),t(n,r,s[i],o)&&a.isArray(s[i])&&(s[i]=rn(s[i])),!c)}if(a.isFormData(e)&&a.isFunction(e.entries)){const n={};return a.forEachEntry(e,(r,s)=>{t(nn(r),s,n,0)}),n}return null}function sn(e,t,n){if(a.isString(e))try{return(t||JSON.parse)(e),a.trim(e)}catch(r){if(r.name!=="SyntaxError")throw r}return(0,JSON.stringify)(e)}const H={transitional:Ve,adapter:["xhr","http","fetch"],transformRequest:[function(t,n){const r=n.getContentType()||"",s=r.indexOf("application/json")>-1,o=a.isObject(t);if(o&&a.isHTMLForm(t)&&(t=new FormData(t)),a.isFormData(t))return s?JSON.stringify(We(t)):t;if(a.isArrayBuffer(t)||a.isBuffer(t)||a.isStream(t)||a.isFile(t)||a.isBlob(t)||a.isReadableStream(t))return t;if(a.isArrayBufferView(t))return t.buffer;if(a.isURLSearchParams(t))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let c;if(o){if(r.indexOf("application/x-www-form-urlencoded")>-1)return tn(t,this.formSerializer).toString();if((c=a.isFileList(t))||r.indexOf("multipart/form-data")>-1){const d=this.env&&this.env.FormData;return G(c?{"files[]":t}:t,d&&new d,this.formSerializer)}}return o||s?(n.setContentType("application/json",!1),sn(t)):t}],transformResponse:[function(t){const n=this.transitional||H.transitional,r=n&&n.forcedJSONParsing,s=this.responseType==="json";if(a.isResponse(t)||a.isReadableStream(t))return t;if(t&&a.isString(t)&&(r&&!this.responseType||s)){const i=!(n&&n.silentJSONParsing)&&s;try{return JSON.parse(t)}catch(c){if(i)throw c.name==="SyntaxError"?m.from(c,m.ERR_BAD_RESPONSE,this,null,this.response):c}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:T.classes.FormData,Blob:T.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};a.forEach(["delete","get","head","post","put","patch"],e=>{H.headers[e]={}});const on=a.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),an=e=>{const t={};let n,r,s;return e&&e.split(`
`).forEach(function(i){s=i.indexOf(":"),n=i.substring(0,s).trim().toLowerCase(),r=i.substring(s+1).trim(),!(!n||t[n]&&on[n])&&(n==="set-cookie"?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)}),t},Re=Symbol("internals");function j(e){return e&&String(e).trim().toLowerCase()}function J(e){return e===!1||e==null?e:a.isArray(e)?e.map(J):String(e)}function cn(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}const un=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function Z(e,t,n,r,s){if(a.isFunction(r))return r.call(this,t,n);if(s&&(t=n),!!a.isString(t)){if(a.isString(r))return t.indexOf(r)!==-1;if(a.isRegExp(r))return r.test(t)}}function ln(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,n,r)=>n.toUpperCase()+r)}function fn(e,t){const n=a.toCamelCase(" "+t);["get","set","has"].forEach(r=>{Object.defineProperty(e,r+n,{value:function(s,o,i){return this[r].call(this,t,s,o,i)},configurable:!0})})}class A{constructor(t){t&&this.set(t)}set(t,n,r){const s=this;function o(c,d,u){const l=j(d);if(!l)throw new Error("header name must be a non-empty string");const f=a.findKey(s,l);(!f||s[f]===void 0||u===!0||u===void 0&&s[f]!==!1)&&(s[f||d]=J(c))}const i=(c,d)=>a.forEach(c,(u,l)=>o(u,l,d));if(a.isPlainObject(t)||t instanceof this.constructor)i(t,n);else if(a.isString(t)&&(t=t.trim())&&!un(t))i(an(t),n);else if(a.isHeaders(t))for(const[c,d]of t.entries())o(d,c,r);else t!=null&&o(n,t,r);return this}get(t,n){if(t=j(t),t){const r=a.findKey(this,t);if(r){const s=this[r];if(!n)return s;if(n===!0)return cn(s);if(a.isFunction(n))return n.call(this,s,r);if(a.isRegExp(n))return n.exec(s);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,n){if(t=j(t),t){const r=a.findKey(this,t);return!!(r&&this[r]!==void 0&&(!n||Z(this,this[r],r,n)))}return!1}delete(t,n){const r=this;let s=!1;function o(i){if(i=j(i),i){const c=a.findKey(r,i);c&&(!n||Z(r,r[c],c,n))&&(delete r[c],s=!0)}}return a.isArray(t)?t.forEach(o):o(t),s}clear(t){const n=Object.keys(this);let r=n.length,s=!1;for(;r--;){const o=n[r];(!t||Z(this,this[o],o,t,!0))&&(delete this[o],s=!0)}return s}normalize(t){const n=this,r={};return a.forEach(this,(s,o)=>{const i=a.findKey(r,o);if(i){n[i]=J(s),delete n[o];return}const c=t?ln(o):String(o).trim();c!==o&&delete n[o],n[c]=J(s),r[c]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const n=Object.create(null);return a.forEach(this,(r,s)=>{r!=null&&r!==!1&&(n[s]=t&&a.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,n])=>t+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...n){const r=new this(t);return n.forEach(s=>r.set(s)),r}static accessor(t){const r=(this[Re]=this[Re]={accessors:{}}).accessors,s=this.prototype;function o(i){const c=j(i);r[c]||(fn(s,i),r[c]=!0)}return a.isArray(t)?t.forEach(o):o(t),this}}A.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);a.reduceDescriptors(A.prototype,({value:e},t)=>{let n=t[0].toUpperCase()+t.slice(1);return{get:()=>e,set(r){this[n]=r}}});a.freezeMethods(A);function Y(e,t){const n=this||H,r=t||n,s=A.from(r.headers);let o=r.data;return a.forEach(e,function(c){o=c.call(n,o,s.normalize(),t?t.status:void 0)}),s.normalize(),o}function $e(e){return!!(e&&e.__CANCEL__)}function k(e,t,n){m.call(this,e??"canceled",m.ERR_CANCELED,t,n),this.name="CanceledError"}a.inherits(k,m,{__CANCEL__:!0});function ve(e,t,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?e(n):t(new m("Request failed with status code "+n.status,[m.ERR_BAD_REQUEST,m.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}function dn(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function pn(e,t){e=e||10;const n=new Array(e),r=new Array(e);let s=0,o=0,i;return t=t!==void 0?t:1e3,function(d){const u=Date.now(),l=r[o];i||(i=u),n[s]=d,r[s]=u;let f=o,b=0;for(;f!==s;)b+=n[f++],f=f%e;if(s=(s+1)%e,s===o&&(o=(o+1)%e),u-i<t)return;const w=l&&u-l;return w?Math.round(b*1e3/w):void 0}}function hn(e,t){let n=0,r=1e3/t,s,o;const i=(u,l=Date.now())=>{n=l,s=null,o&&(clearTimeout(o),o=null),e.apply(null,u)};return[(...u)=>{const l=Date.now(),f=l-n;f>=r?i(u,l):(s=u,o||(o=setTimeout(()=>{o=null,i(s)},r-f)))},()=>s&&i(s)]}const V=(e,t,n=3)=>{let r=0;const s=pn(50,250);return hn(o=>{const i=o.loaded,c=o.lengthComputable?o.total:void 0,d=i-r,u=s(d),l=i<=c;r=i;const f={loaded:i,total:c,progress:c?i/c:void 0,bytes:d,rate:u||void 0,estimated:u&&c&&l?(c-i)/u:void 0,event:o,lengthComputable:c!=null,[t?"download":"upload"]:!0};e(f)},n)},Oe=(e,t)=>{const n=e!=null;return[r=>t[0]({lengthComputable:n,total:e,loaded:r}),t[1]]},Te=e=>(...t)=>a.asap(()=>e(...t)),mn=T.hasStandardBrowserEnv?function(){const t=T.navigator&&/(msie|trident)/i.test(T.navigator.userAgent),n=document.createElement("a");let r;function s(o){let i=o;return t&&(n.setAttribute("href",i),i=n.href),n.setAttribute("href",i),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return r=s(window.location.href),function(i){const c=a.isString(i)?s(i):i;return c.protocol===r.protocol&&c.host===r.host}}():function(){return function(){return!0}}(),yn=T.hasStandardBrowserEnv?{write(e,t,n,r,s,o){const i=[e+"="+encodeURIComponent(t)];a.isNumber(n)&&i.push("expires="+new Date(n).toGMTString()),a.isString(r)&&i.push("path="+r),a.isString(s)&&i.push("domain="+s),o===!0&&i.push("secure"),document.cookie=i.join("; ")},read(e){const t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove(e){this.write(e,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function bn(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function wn(e,t){return t?e.replace(/\/?\/$/,"")+"/"+t.replace(/^\/+/,""):e}function Ke(e,t){return e&&!bn(t)?wn(e,t):t}const Ae=e=>e instanceof A?{...e}:e;function D(e,t){t=t||{};const n={};function r(u,l,f){return a.isPlainObject(u)&&a.isPlainObject(l)?a.merge.call({caseless:f},u,l):a.isPlainObject(l)?a.merge({},l):a.isArray(l)?l.slice():l}function s(u,l,f){if(a.isUndefined(l)){if(!a.isUndefined(u))return r(void 0,u,f)}else return r(u,l,f)}function o(u,l){if(!a.isUndefined(l))return r(void 0,l)}function i(u,l){if(a.isUndefined(l)){if(!a.isUndefined(u))return r(void 0,u)}else return r(void 0,l)}function c(u,l,f){if(f in t)return r(u,l);if(f in e)return r(void 0,u)}const d={url:o,method:o,data:o,baseURL:i,transformRequest:i,transformResponse:i,paramsSerializer:i,timeout:i,timeoutMessage:i,withCredentials:i,withXSRFToken:i,adapter:i,responseType:i,xsrfCookieName:i,xsrfHeaderName:i,onUploadProgress:i,onDownloadProgress:i,decompress:i,maxContentLength:i,maxBodyLength:i,beforeRedirect:i,transport:i,httpAgent:i,httpsAgent:i,cancelToken:i,socketPath:i,responseEncoding:i,validateStatus:c,headers:(u,l)=>s(Ae(u),Ae(l),!0)};return a.forEach(Object.keys(Object.assign({},e,t)),function(l){const f=d[l]||s,b=f(e[l],t[l],l);a.isUndefined(b)&&f!==c||(n[l]=b)}),n}const Ge=e=>{const t=D({},e);let{data:n,withXSRFToken:r,xsrfHeaderName:s,xsrfCookieName:o,headers:i,auth:c}=t;t.headers=i=A.from(i),t.url=Je(Ke(t.baseURL,t.url),e.params,e.paramsSerializer),c&&i.set("Authorization","Basic "+btoa((c.username||"")+":"+(c.password?unescape(encodeURIComponent(c.password)):"")));let d;if(a.isFormData(n)){if(T.hasStandardBrowserEnv||T.hasStandardBrowserWebWorkerEnv)i.setContentType(void 0);else if((d=i.getContentType())!==!1){const[u,...l]=d?d.split(";").map(f=>f.trim()).filter(Boolean):[];i.setContentType([u||"multipart/form-data",...l].join("; "))}}if(T.hasStandardBrowserEnv&&(r&&a.isFunction(r)&&(r=r(t)),r||r!==!1&&mn(t.url))){const u=s&&o&&yn.read(o);u&&i.set(s,u)}return t},En=typeof XMLHttpRequest<"u",Sn=En&&function(e){return new Promise(function(n,r){const s=Ge(e);let o=s.data;const i=A.from(s.headers).normalize();let{responseType:c,onUploadProgress:d,onDownloadProgress:u}=s,l,f,b,w,p;function y(){w&&w(),p&&p(),s.cancelToken&&s.cancelToken.unsubscribe(l),s.signal&&s.signal.removeEventListener("abort",l)}let h=new XMLHttpRequest;h.open(s.method.toUpperCase(),s.url,!0),h.timeout=s.timeout;function E(){if(!h)return;const R=A.from("getAllResponseHeaders"in h&&h.getAllResponseHeaders()),O={data:!c||c==="text"||c==="json"?h.responseText:h.response,status:h.status,statusText:h.statusText,headers:R,config:e,request:h};ve(function(F){n(F),y()},function(F){r(F),y()},O),h=null}"onloadend"in h?h.onloadend=E:h.onreadystatechange=function(){!h||h.readyState!==4||h.status===0&&!(h.responseURL&&h.responseURL.indexOf("file:")===0)||setTimeout(E)},h.onabort=function(){h&&(r(new m("Request aborted",m.ECONNABORTED,e,h)),h=null)},h.onerror=function(){r(new m("Network Error",m.ERR_NETWORK,e,h)),h=null},h.ontimeout=function(){let N=s.timeout?"timeout of "+s.timeout+"ms exceeded":"timeout exceeded";const O=s.transitional||Ve;s.timeoutErrorMessage&&(N=s.timeoutErrorMessage),r(new m(N,O.clarifyTimeoutError?m.ETIMEDOUT:m.ECONNABORTED,e,h)),h=null},o===void 0&&i.setContentType(null),"setRequestHeader"in h&&a.forEach(i.toJSON(),function(N,O){h.setRequestHeader(O,N)}),a.isUndefined(s.withCredentials)||(h.withCredentials=!!s.withCredentials),c&&c!=="json"&&(h.responseType=s.responseType),u&&([b,p]=V(u,!0),h.addEventListener("progress",b)),d&&h.upload&&([f,w]=V(d),h.upload.addEventListener("progress",f),h.upload.addEventListener("loadend",w)),(s.cancelToken||s.signal)&&(l=R=>{h&&(r(!R||R.type?new k(null,e,h):R),h.abort(),h=null)},s.cancelToken&&s.cancelToken.subscribe(l),s.signal&&(s.signal.aborted?l():s.signal.addEventListener("abort",l)));const S=dn(s.url);if(S&&T.protocols.indexOf(S)===-1){r(new m("Unsupported protocol "+S+":",m.ERR_BAD_REQUEST,e));return}h.send(o||null)})},gn=(e,t)=>{const{length:n}=e=e?e.filter(Boolean):[];if(t||n){let r=new AbortController,s;const o=function(u){if(!s){s=!0,c();const l=u instanceof Error?u:this.reason;r.abort(l instanceof m?l:new k(l instanceof Error?l.message:l))}};let i=t&&setTimeout(()=>{i=null,o(new m(`timeout ${t} of ms exceeded`,m.ETIMEDOUT))},t);const c=()=>{e&&(i&&clearTimeout(i),i=null,e.forEach(u=>{u.unsubscribe?u.unsubscribe(o):u.removeEventListener("abort",o)}),e=null)};e.forEach(u=>u.addEventListener("abort",o));const{signal:d}=r;return d.unsubscribe=()=>a.asap(c),d}},Rn=function*(e,t){let n=e.byteLength;if(n<t){yield e;return}let r=0,s;for(;r<n;)s=r+t,yield e.slice(r,s),r=s},On=async function*(e,t){for await(const n of Tn(e))yield*Rn(n,t)},Tn=async function*(e){if(e[Symbol.asyncIterator]){yield*e;return}const t=e.getReader();try{for(;;){const{done:n,value:r}=await t.read();if(n)break;yield r}}finally{await t.cancel()}},xe=(e,t,n,r)=>{const s=On(e,t);let o=0,i,c=d=>{i||(i=!0,r&&r(d))};return new ReadableStream({async pull(d){try{const{done:u,value:l}=await s.next();if(u){c(),d.close();return}let f=l.byteLength;if(n){let b=o+=f;n(b)}d.enqueue(new Uint8Array(l))}catch(u){throw c(u),u}},cancel(d){return c(d),s.return()}},{highWaterMark:2})},X=typeof fetch=="function"&&typeof Request=="function"&&typeof Response=="function",Xe=X&&typeof ReadableStream=="function",An=X&&(typeof TextEncoder=="function"?(e=>t=>e.encode(t))(new TextEncoder):async e=>new Uint8Array(await new Response(e).arrayBuffer())),Qe=(e,...t)=>{try{return!!e(...t)}catch{return!1}},xn=Xe&&Qe(()=>{let e=!1;const t=new Request(T.origin,{body:new ReadableStream,method:"POST",get duplex(){return e=!0,"half"}}).headers.has("Content-Type");return e&&!t}),Ce=64*1024,se=Xe&&Qe(()=>a.isReadableStream(new Response("").body)),W={stream:se&&(e=>e.body)};X&&(e=>{["text","arrayBuffer","blob","formData","stream"].forEach(t=>{!W[t]&&(W[t]=a.isFunction(e[t])?n=>n[t]():(n,r)=>{throw new m(`Response type '${t}' is not supported`,m.ERR_NOT_SUPPORT,r)})})})(new Response);const Cn=async e=>{if(e==null)return 0;if(a.isBlob(e))return e.size;if(a.isSpecCompliantForm(e))return(await new Request(T.origin,{method:"POST",body:e}).arrayBuffer()).byteLength;if(a.isArrayBufferView(e)||a.isArrayBuffer(e))return e.byteLength;if(a.isURLSearchParams(e)&&(e=e+""),a.isString(e))return(await An(e)).byteLength},Nn=async(e,t)=>{const n=a.toFiniteNumber(e.getContentLength());return n??Cn(t)},Pn=X&&(async e=>{let{url:t,method:n,data:r,signal:s,cancelToken:o,timeout:i,onDownloadProgress:c,onUploadProgress:d,responseType:u,headers:l,withCredentials:f="same-origin",fetchOptions:b}=Ge(e);u=u?(u+"").toLowerCase():"text";let w=gn([s,o&&o.toAbortSignal()],i),p;const y=w&&w.unsubscribe&&(()=>{w.unsubscribe()});let h;try{if(d&&xn&&n!=="get"&&n!=="head"&&(h=await Nn(l,r))!==0){let O=new Request(t,{method:"POST",body:r,duplex:"half"}),P;if(a.isFormData(r)&&(P=O.headers.get("content-type"))&&l.setContentType(P),O.body){const[F,M]=Oe(h,V(Te(d)));r=xe(O.body,Ce,F,M)}}a.isString(f)||(f=f?"include":"omit");const E="credentials"in Request.prototype;p=new Request(t,{...b,signal:w,method:n.toUpperCase(),headers:l.normalize().toJSON(),body:r,duplex:"half",credentials:E?f:void 0});let S=await fetch(p);const R=se&&(u==="stream"||u==="response");if(se&&(c||R&&y)){const O={};["status","statusText","headers"].forEach(pe=>{O[pe]=S[pe]});const P=a.toFiniteNumber(S.headers.get("content-length")),[F,M]=c&&Oe(P,V(Te(c),!0))||[];S=new Response(xe(S.body,Ce,F,()=>{M&&M(),y&&y()}),O)}u=u||"text";let N=await W[a.findKey(W,u)||"text"](S,e);return!R&&y&&y(),await new Promise((O,P)=>{ve(O,P,{data:N,headers:A.from(S.headers),status:S.status,statusText:S.statusText,config:e,request:p})})}catch(E){throw y&&y(),E&&E.name==="TypeError"&&/fetch/i.test(E.message)?Object.assign(new m("Network Error",m.ERR_NETWORK,e,p),{cause:E.cause||E}):m.from(E,E&&E.code,e,p)}}),oe={http:Jt,xhr:Sn,fetch:Pn};a.forEach(oe,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});const Ne=e=>`- ${e}`,_n=e=>a.isFunction(e)||e===null||e===!1,Ze={getAdapter:e=>{e=a.isArray(e)?e:[e];const{length:t}=e;let n,r;const s={};for(let o=0;o<t;o++){n=e[o];let i;if(r=n,!_n(n)&&(r=oe[(i=String(n)).toLowerCase()],r===void 0))throw new m(`Unknown adapter '${i}'`);if(r)break;s[i||"#"+o]=r}if(!r){const o=Object.entries(s).map(([c,d])=>`adapter ${c} `+(d===!1?"is not supported by the environment":"is not available in the build"));let i=t?o.length>1?`since :
`+o.map(Ne).join(`
`):" "+Ne(o[0]):"as no adapter specified";throw new m("There is no suitable adapter to dispatch the request "+i,"ERR_NOT_SUPPORT")}return r},adapters:oe};function ee(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new k(null,e)}function Pe(e){return ee(e),e.headers=A.from(e.headers),e.data=Y.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),Ze.getAdapter(e.adapter||H.adapter)(e).then(function(r){return ee(e),r.data=Y.call(e,e.transformResponse,r),r.headers=A.from(r.headers),r},function(r){return $e(r)||(ee(e),r&&r.response&&(r.response.data=Y.call(e,e.transformResponse,r.response),r.response.headers=A.from(r.response.headers))),Promise.reject(r)})}const Ye="1.7.7",fe={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{fe[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}});const _e={};fe.transitional=function(t,n,r){function s(o,i){return"[Axios v"+Ye+"] Transitional option '"+o+"'"+i+(r?". "+r:"")}return(o,i,c)=>{if(t===!1)throw new m(s(i," has been removed"+(n?" in "+n:"")),m.ERR_DEPRECATED);return n&&!_e[i]&&(_e[i]=!0,console.warn(s(i," has been deprecated since v"+n+" and will be removed in the near future"))),t?t(o,i,c):!0}};function Fn(e,t,n){if(typeof e!="object")throw new m("options must be an object",m.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let s=r.length;for(;s-- >0;){const o=r[s],i=t[o];if(i){const c=e[o],d=c===void 0||i(c,o,e);if(d!==!0)throw new m("option "+o+" must be "+d,m.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new m("Unknown option "+o,m.ERR_BAD_OPTION)}}const ie={assertOptions:Fn,validators:fe},_=ie.validators;class B{constructor(t){this.defaults=t,this.interceptors={request:new ge,response:new ge}}async request(t,n){try{return await this._request(t,n)}catch(r){if(r instanceof Error){let s;Error.captureStackTrace?Error.captureStackTrace(s={}):s=new Error;const o=s.stack?s.stack.replace(/^.+\n/,""):"";try{r.stack?o&&!String(r.stack).endsWith(o.replace(/^.+\n.+\n/,""))&&(r.stack+=`
`+o):r.stack=o}catch{}}throw r}}_request(t,n){typeof t=="string"?(n=n||{},n.url=t):n=t||{},n=D(this.defaults,n);const{transitional:r,paramsSerializer:s,headers:o}=n;r!==void 0&&ie.assertOptions(r,{silentJSONParsing:_.transitional(_.boolean),forcedJSONParsing:_.transitional(_.boolean),clarifyTimeoutError:_.transitional(_.boolean)},!1),s!=null&&(a.isFunction(s)?n.paramsSerializer={serialize:s}:ie.assertOptions(s,{encode:_.function,serialize:_.function},!0)),n.method=(n.method||this.defaults.method||"get").toLowerCase();let i=o&&a.merge(o.common,o[n.method]);o&&a.forEach(["delete","get","head","post","put","patch","common"],p=>{delete o[p]}),n.headers=A.concat(i,o);const c=[];let d=!0;this.interceptors.request.forEach(function(y){typeof y.runWhen=="function"&&y.runWhen(n)===!1||(d=d&&y.synchronous,c.unshift(y.fulfilled,y.rejected))});const u=[];this.interceptors.response.forEach(function(y){u.push(y.fulfilled,y.rejected)});let l,f=0,b;if(!d){const p=[Pe.bind(this),void 0];for(p.unshift.apply(p,c),p.push.apply(p,u),b=p.length,l=Promise.resolve(n);f<b;)l=l.then(p[f++],p[f++]);return l}b=c.length;let w=n;for(f=0;f<b;){const p=c[f++],y=c[f++];try{w=p(w)}catch(h){y.call(this,h);break}}try{l=Pe.call(this,w)}catch(p){return Promise.reject(p)}for(f=0,b=u.length;f<b;)l=l.then(u[f++],u[f++]);return l}getUri(t){t=D(this.defaults,t);const n=Ke(t.baseURL,t.url);return Je(n,t.params,t.paramsSerializer)}}a.forEach(["delete","get","head","options"],function(t){B.prototype[t]=function(n,r){return this.request(D(r||{},{method:t,url:n,data:(r||{}).data}))}});a.forEach(["post","put","patch"],function(t){function n(r){return function(o,i,c){return this.request(D(c||{},{method:t,headers:r?{"Content-Type":"multipart/form-data"}:{},url:o,data:i}))}}B.prototype[t]=n(),B.prototype[t+"Form"]=n(!0)});class de{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(o){n=o});const r=this;this.promise.then(s=>{if(!r._listeners)return;let o=r._listeners.length;for(;o-- >0;)r._listeners[o](s);r._listeners=null}),this.promise.then=s=>{let o;const i=new Promise(c=>{r.subscribe(c),o=c}).then(s);return i.cancel=function(){r.unsubscribe(o)},i},t(function(o,i,c){r.reason||(r.reason=new k(o,i,c),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const n=this._listeners.indexOf(t);n!==-1&&this._listeners.splice(n,1)}toAbortSignal(){const t=new AbortController,n=r=>{t.abort(r)};return this.subscribe(n),t.signal.unsubscribe=()=>this.unsubscribe(n),t.signal}static source(){let t;return{token:new de(function(s){t=s}),cancel:t}}}function Ln(e){return function(n){return e.apply(null,n)}}function Bn(e){return a.isObject(e)&&e.isAxiosError===!0}const ae={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(ae).forEach(([e,t])=>{ae[t]=e});function et(e){const t=new B(e),n=Fe(B.prototype.request,t);return a.extend(n,B.prototype,t,{allOwnKeys:!0}),a.extend(n,t,null,{allOwnKeys:!0}),n.create=function(s){return et(D(e,s))},n}const g=et(H);g.Axios=B;g.CanceledError=k;g.CancelToken=de;g.isCancel=$e;g.VERSION=Ye;g.toFormData=G;g.AxiosError=m;g.Cancel=g.CanceledError;g.all=function(t){return Promise.all(t)};g.spread=Ln;g.isAxiosError=Bn;g.mergeConfig=D;g.AxiosHeaders=A;g.formToJSON=e=>We(a.isHTMLForm(e)?new FormData(e):e);g.getAdapter=Ze.getAdapter;g.HttpStatusCode=ae;g.default=g;export{g as a,Un as c};
