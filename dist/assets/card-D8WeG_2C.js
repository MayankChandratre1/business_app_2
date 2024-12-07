import{r as u,j as k}from"./index-RnadGKpr.js";import{c as ne}from"./clsx-B-dksMZM.js";/**
 * @license lucide-react v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const be=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),se=(...e)=>e.filter((r,t,o)=>!!r&&o.indexOf(r)===t).join(" ");/**
 * @license lucide-react v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var fe={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ge=u.forwardRef(({color:e="currentColor",size:r=24,strokeWidth:t=2,absoluteStrokeWidth:o,className:s="",children:n,iconNode:i,...a},d)=>u.createElement("svg",{ref:d,...fe,width:r,height:r,stroke:e,strokeWidth:o?Number(t)*24/Number(r):t,className:se("lucide",s),...a},[...i.map(([c,f])=>u.createElement(c,f)),...Array.isArray(n)?n:[n]]));/**
 * @license lucide-react v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dr=(e,r)=>{const t=u.forwardRef(({className:o,...s},n)=>u.createElement(ge,{ref:n,iconNode:r,className:se(`lucide-${be(e)}`,o),...s}));return t.displayName=`${e}`,t};function me(e,r){typeof e=="function"?e(r):e!=null&&(e.current=r)}function ae(...e){return r=>e.forEach(t=>me(t,r))}function ur(...e){return u.useCallback(ae(...e),e)}var ie=u.forwardRef((e,r)=>{const{children:t,...o}=e,s=u.Children.toArray(t),n=s.find(ye);if(n){const i=n.props.children,a=s.map(d=>d===n?u.Children.count(i)>1?u.Children.only(null):u.isValidElement(i)?i.props.children:null:d);return k.jsx(U,{...o,ref:r,children:u.isValidElement(i)?u.cloneElement(i,void 0,a):null})}return k.jsx(U,{...o,ref:r,children:t})});ie.displayName="Slot";var U=u.forwardRef((e,r)=>{const{children:t,...o}=e;if(u.isValidElement(t)){const s=ve(t);return u.cloneElement(t,{...xe(o,t.props),ref:r?ae(r,s):s})}return u.Children.count(t)>1?u.Children.only(null):null});U.displayName="SlotClone";var he=({children:e})=>k.jsx(k.Fragment,{children:e});function ye(e){return u.isValidElement(e)&&e.type===he}function xe(e,r){const t={...r};for(const o in r){const s=e[o],n=r[o];/^on[A-Z]/.test(o)?s&&n?t[o]=(...a)=>{n(...a),s(...a)}:s&&(t[o]=s):o==="style"?t[o]={...s,...n}:o==="className"&&(t[o]=[s,n].filter(Boolean).join(" "))}return{...e,...t}}function ve(e){var o,s;let r=(o=Object.getOwnPropertyDescriptor(e.props,"ref"))==null?void 0:o.get,t=r&&"isReactWarning"in r&&r.isReactWarning;return t?e.ref:(r=(s=Object.getOwnPropertyDescriptor(e,"ref"))==null?void 0:s.get,t=r&&"isReactWarning"in r&&r.isReactWarning,t?e.props.ref:e.props.ref||e.ref)}const ee=e=>typeof e=="boolean"?`${e}`:e===0?"0":e,re=ne,we=(e,r)=>t=>{var o;if((r==null?void 0:r.variants)==null)return re(e,t==null?void 0:t.class,t==null?void 0:t.className);const{variants:s,defaultVariants:n}=r,i=Object.keys(s).map(c=>{const f=t==null?void 0:t[c],y=n==null?void 0:n[c];if(f===null)return null;const h=ee(f)||ee(y);return s[c][h]}),a=t&&Object.entries(t).reduce((c,f)=>{let[y,h]=f;return h===void 0||(c[y]=h),c},{}),d=r==null||(o=r.compoundVariants)===null||o===void 0?void 0:o.reduce((c,f)=>{let{class:y,className:h,...C}=f;return Object.entries(C).every(v=>{let[m,p]=v;return Array.isArray(p)?p.includes({...n,...a}[m]):{...n,...a}[m]===p})?[...c,y,h]:c},[]);return re(e,i,d,t==null?void 0:t.class,t==null?void 0:t.className)},Z="-",Ce=e=>{const r=ze(e),{conflictingClassGroups:t,conflictingClassGroupModifiers:o}=e;return{getClassGroupId:i=>{const a=i.split(Z);return a[0]===""&&a.length!==1&&a.shift(),le(a,r)||ke(i)},getConflictingClassGroupIds:(i,a)=>{const d=t[i]||[];return a&&o[i]?[...d,...o[i]]:d}}},le=(e,r)=>{var i;if(e.length===0)return r.classGroupId;const t=e[0],o=r.nextPart.get(t),s=o?le(e.slice(1),o):void 0;if(s)return s;if(r.validators.length===0)return;const n=e.join(Z);return(i=r.validators.find(({validator:a})=>a(n)))==null?void 0:i.classGroupId},te=/^\[(.+)\]$/,ke=e=>{if(te.test(e)){const r=te.exec(e)[1],t=r==null?void 0:r.substring(0,r.indexOf(":"));if(t)return"arbitrary.."+t}},ze=e=>{const{theme:r,prefix:t}=e,o={nextPart:new Map,validators:[]};return Ne(Object.entries(e.classGroups),t).forEach(([n,i])=>{H(i,o,n,r)}),o},H=(e,r,t,o)=>{e.forEach(s=>{if(typeof s=="string"){const n=s===""?r:oe(r,s);n.classGroupId=t;return}if(typeof s=="function"){if(Re(s)){H(s(o),r,t,o);return}r.validators.push({validator:s,classGroupId:t});return}Object.entries(s).forEach(([n,i])=>{H(i,oe(r,n),t,o)})})},oe=(e,r)=>{let t=e;return r.split(Z).forEach(o=>{t.nextPart.has(o)||t.nextPart.set(o,{nextPart:new Map,validators:[]}),t=t.nextPart.get(o)}),t},Re=e=>e.isThemeGetter,Ne=(e,r)=>r?e.map(([t,o])=>{const s=o.map(n=>typeof n=="string"?r+n:typeof n=="object"?Object.fromEntries(Object.entries(n).map(([i,a])=>[r+i,a])):n);return[t,s]}):e,Se=e=>{if(e<1)return{get:()=>{},set:()=>{}};let r=0,t=new Map,o=new Map;const s=(n,i)=>{t.set(n,i),r++,r>e&&(r=0,o=t,t=new Map)};return{get(n){let i=t.get(n);if(i!==void 0)return i;if((i=o.get(n))!==void 0)return s(n,i),i},set(n,i){t.has(n)?t.set(n,i):s(n,i)}}},ce="!",Ae=e=>{const{separator:r,experimentalParseClassName:t}=e,o=r.length===1,s=r[0],n=r.length,i=a=>{const d=[];let c=0,f=0,y;for(let p=0;p<a.length;p++){let x=a[p];if(c===0){if(x===s&&(o||a.slice(p,p+n)===r)){d.push(a.slice(f,p)),f=p+n;continue}if(x==="/"){y=p;continue}}x==="["?c++:x==="]"&&c--}const h=d.length===0?a:a.substring(f),C=h.startsWith(ce),v=C?h.substring(1):h,m=y&&y>f?y-f:void 0;return{modifiers:d,hasImportantModifier:C,baseClassName:v,maybePostfixModifierPosition:m}};return t?a=>t({className:a,parseClassName:i}):i},je=e=>{if(e.length<=1)return e;const r=[];let t=[];return e.forEach(o=>{o[0]==="["?(r.push(...t.sort(),o),t=[]):t.push(o)}),r.push(...t.sort()),r},Ee=e=>({cache:Se(e.cacheSize),parseClassName:Ae(e),...Ce(e)}),Me=/\s+/,Pe=(e,r)=>{const{parseClassName:t,getClassGroupId:o,getConflictingClassGroupIds:s}=r,n=[],i=e.trim().split(Me);let a="";for(let d=i.length-1;d>=0;d-=1){const c=i[d],{modifiers:f,hasImportantModifier:y,baseClassName:h,maybePostfixModifierPosition:C}=t(c);let v=!!C,m=o(v?h.substring(0,C):h);if(!m){if(!v){a=c+(a.length>0?" "+a:a);continue}if(m=o(h),!m){a=c+(a.length>0?" "+a:a);continue}v=!1}const p=je(f).join(":"),x=y?p+ce:p,w=x+m;if(n.includes(w))continue;n.push(w);const P=s(m,v);for(let A=0;A<P.length;++A){const T=P[A];n.push(x+T)}a=c+(a.length>0?" "+a:a)}return a};function Ge(){let e=0,r,t,o="";for(;e<arguments.length;)(r=arguments[e++])&&(t=de(r))&&(o&&(o+=" "),o+=t);return o}const de=e=>{if(typeof e=="string")return e;let r,t="";for(let o=0;o<e.length;o++)e[o]&&(r=de(e[o]))&&(t&&(t+=" "),t+=r);return t};function Ie(e,...r){let t,o,s,n=i;function i(d){const c=r.reduce((f,y)=>y(f),e());return t=Ee(c),o=t.cache.get,s=t.cache.set,n=a,a(d)}function a(d){const c=o(d);if(c)return c;const f=Pe(d,t);return s(d,f),f}return function(){return n(Ge.apply(null,arguments))}}const b=e=>{const r=t=>t[e]||[];return r.isThemeGetter=!0,r},ue=/^\[(?:([a-z-]+):)?(.+)\]$/i,Ve=/^\d+\/\d+$/,Te=new Set(["px","full","screen"]),We=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,Le=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,Oe=/^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,_e=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,$e=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,R=e=>E(e)||Te.has(e)||Ve.test(e),N=e=>M(e,"length",Je),E=e=>!!e&&!Number.isNaN(Number(e)),F=e=>M(e,"number",E),I=e=>!!e&&Number.isInteger(Number(e)),Be=e=>e.endsWith("%")&&E(e.slice(0,-1)),l=e=>ue.test(e),S=e=>We.test(e),Fe=new Set(["length","size","percentage"]),Ue=e=>M(e,Fe,pe),He=e=>M(e,"position",pe),Ze=new Set(["image","url"]),qe=e=>M(e,Ze,Qe),Ke=e=>M(e,"",Xe),V=()=>!0,M=(e,r,t)=>{const o=ue.exec(e);return o?o[1]?typeof r=="string"?o[1]===r:r.has(o[1]):t(o[2]):!1},Je=e=>Le.test(e)&&!Oe.test(e),pe=()=>!1,Xe=e=>_e.test(e),Qe=e=>$e.test(e),Ye=()=>{const e=b("colors"),r=b("spacing"),t=b("blur"),o=b("brightness"),s=b("borderColor"),n=b("borderRadius"),i=b("borderSpacing"),a=b("borderWidth"),d=b("contrast"),c=b("grayscale"),f=b("hueRotate"),y=b("invert"),h=b("gap"),C=b("gradientColorStops"),v=b("gradientColorStopPositions"),m=b("inset"),p=b("margin"),x=b("opacity"),w=b("padding"),P=b("saturate"),A=b("scale"),T=b("sepia"),q=b("skew"),K=b("space"),J=b("translate"),O=()=>["auto","contain","none"],_=()=>["auto","hidden","clip","visible","scroll"],$=()=>["auto",l,r],g=()=>[l,r],X=()=>["",R,N],W=()=>["auto",E,l],Q=()=>["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top"],L=()=>["solid","dashed","dotted","double","none"],Y=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],B=()=>["start","end","center","between","around","evenly","stretch"],G=()=>["","0",l],D=()=>["auto","avoid","all","avoid-page","page","left","right","column"],z=()=>[E,l];return{cacheSize:500,separator:":",theme:{colors:[V],spacing:[R,N],blur:["none","",S,l],brightness:z(),borderColor:[e],borderRadius:["none","","full",S,l],borderSpacing:g(),borderWidth:X(),contrast:z(),grayscale:G(),hueRotate:z(),invert:G(),gap:g(),gradientColorStops:[e],gradientColorStopPositions:[Be,N],inset:$(),margin:$(),opacity:z(),padding:g(),saturate:z(),scale:z(),sepia:G(),skew:z(),space:g(),translate:g()},classGroups:{aspect:[{aspect:["auto","square","video",l]}],container:["container"],columns:[{columns:[S]}],"break-after":[{"break-after":D()}],"break-before":[{"break-before":D()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:[...Q(),l]}],overflow:[{overflow:_()}],"overflow-x":[{"overflow-x":_()}],"overflow-y":[{"overflow-y":_()}],overscroll:[{overscroll:O()}],"overscroll-x":[{"overscroll-x":O()}],"overscroll-y":[{"overscroll-y":O()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:[m]}],"inset-x":[{"inset-x":[m]}],"inset-y":[{"inset-y":[m]}],start:[{start:[m]}],end:[{end:[m]}],top:[{top:[m]}],right:[{right:[m]}],bottom:[{bottom:[m]}],left:[{left:[m]}],visibility:["visible","invisible","collapse"],z:[{z:["auto",I,l]}],basis:[{basis:$()}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["wrap","wrap-reverse","nowrap"]}],flex:[{flex:["1","auto","initial","none",l]}],grow:[{grow:G()}],shrink:[{shrink:G()}],order:[{order:["first","last","none",I,l]}],"grid-cols":[{"grid-cols":[V]}],"col-start-end":[{col:["auto",{span:["full",I,l]},l]}],"col-start":[{"col-start":W()}],"col-end":[{"col-end":W()}],"grid-rows":[{"grid-rows":[V]}],"row-start-end":[{row:["auto",{span:[I,l]},l]}],"row-start":[{"row-start":W()}],"row-end":[{"row-end":W()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":["auto","min","max","fr",l]}],"auto-rows":[{"auto-rows":["auto","min","max","fr",l]}],gap:[{gap:[h]}],"gap-x":[{"gap-x":[h]}],"gap-y":[{"gap-y":[h]}],"justify-content":[{justify:["normal",...B()]}],"justify-items":[{"justify-items":["start","end","center","stretch"]}],"justify-self":[{"justify-self":["auto","start","end","center","stretch"]}],"align-content":[{content:["normal",...B(),"baseline"]}],"align-items":[{items:["start","end","center","baseline","stretch"]}],"align-self":[{self:["auto","start","end","center","stretch","baseline"]}],"place-content":[{"place-content":[...B(),"baseline"]}],"place-items":[{"place-items":["start","end","center","baseline","stretch"]}],"place-self":[{"place-self":["auto","start","end","center","stretch"]}],p:[{p:[w]}],px:[{px:[w]}],py:[{py:[w]}],ps:[{ps:[w]}],pe:[{pe:[w]}],pt:[{pt:[w]}],pr:[{pr:[w]}],pb:[{pb:[w]}],pl:[{pl:[w]}],m:[{m:[p]}],mx:[{mx:[p]}],my:[{my:[p]}],ms:[{ms:[p]}],me:[{me:[p]}],mt:[{mt:[p]}],mr:[{mr:[p]}],mb:[{mb:[p]}],ml:[{ml:[p]}],"space-x":[{"space-x":[K]}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":[K]}],"space-y-reverse":["space-y-reverse"],w:[{w:["auto","min","max","fit","svw","lvw","dvw",l,r]}],"min-w":[{"min-w":[l,r,"min","max","fit"]}],"max-w":[{"max-w":[l,r,"none","full","min","max","fit","prose",{screen:[S]},S]}],h:[{h:[l,r,"auto","min","max","fit","svh","lvh","dvh"]}],"min-h":[{"min-h":[l,r,"min","max","fit","svh","lvh","dvh"]}],"max-h":[{"max-h":[l,r,"min","max","fit","svh","lvh","dvh"]}],size:[{size:[l,r,"auto","min","max","fit"]}],"font-size":[{text:["base",S,N]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:["thin","extralight","light","normal","medium","semibold","bold","extrabold","black",F]}],"font-family":[{font:[V]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractions"],tracking:[{tracking:["tighter","tight","normal","wide","wider","widest",l]}],"line-clamp":[{"line-clamp":["none",E,F]}],leading:[{leading:["none","tight","snug","normal","relaxed","loose",R,l]}],"list-image":[{"list-image":["none",l]}],"list-style-type":[{list:["none","disc","decimal",l]}],"list-style-position":[{list:["inside","outside"]}],"placeholder-color":[{placeholder:[e]}],"placeholder-opacity":[{"placeholder-opacity":[x]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"text-color":[{text:[e]}],"text-opacity":[{"text-opacity":[x]}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...L(),"wavy"]}],"text-decoration-thickness":[{decoration:["auto","from-font",R,N]}],"underline-offset":[{"underline-offset":["auto",R,l]}],"text-decoration-color":[{decoration:[e]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:g()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",l]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",l]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-opacity":[{"bg-opacity":[x]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:[...Q(),He]}],"bg-repeat":[{bg:["no-repeat",{repeat:["","x","y","round","space"]}]}],"bg-size":[{bg:["auto","cover","contain",Ue]}],"bg-image":[{bg:["none",{"gradient-to":["t","tr","r","br","b","bl","l","tl"]},qe]}],"bg-color":[{bg:[e]}],"gradient-from-pos":[{from:[v]}],"gradient-via-pos":[{via:[v]}],"gradient-to-pos":[{to:[v]}],"gradient-from":[{from:[C]}],"gradient-via":[{via:[C]}],"gradient-to":[{to:[C]}],rounded:[{rounded:[n]}],"rounded-s":[{"rounded-s":[n]}],"rounded-e":[{"rounded-e":[n]}],"rounded-t":[{"rounded-t":[n]}],"rounded-r":[{"rounded-r":[n]}],"rounded-b":[{"rounded-b":[n]}],"rounded-l":[{"rounded-l":[n]}],"rounded-ss":[{"rounded-ss":[n]}],"rounded-se":[{"rounded-se":[n]}],"rounded-ee":[{"rounded-ee":[n]}],"rounded-es":[{"rounded-es":[n]}],"rounded-tl":[{"rounded-tl":[n]}],"rounded-tr":[{"rounded-tr":[n]}],"rounded-br":[{"rounded-br":[n]}],"rounded-bl":[{"rounded-bl":[n]}],"border-w":[{border:[a]}],"border-w-x":[{"border-x":[a]}],"border-w-y":[{"border-y":[a]}],"border-w-s":[{"border-s":[a]}],"border-w-e":[{"border-e":[a]}],"border-w-t":[{"border-t":[a]}],"border-w-r":[{"border-r":[a]}],"border-w-b":[{"border-b":[a]}],"border-w-l":[{"border-l":[a]}],"border-opacity":[{"border-opacity":[x]}],"border-style":[{border:[...L(),"hidden"]}],"divide-x":[{"divide-x":[a]}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":[a]}],"divide-y-reverse":["divide-y-reverse"],"divide-opacity":[{"divide-opacity":[x]}],"divide-style":[{divide:L()}],"border-color":[{border:[s]}],"border-color-x":[{"border-x":[s]}],"border-color-y":[{"border-y":[s]}],"border-color-s":[{"border-s":[s]}],"border-color-e":[{"border-e":[s]}],"border-color-t":[{"border-t":[s]}],"border-color-r":[{"border-r":[s]}],"border-color-b":[{"border-b":[s]}],"border-color-l":[{"border-l":[s]}],"divide-color":[{divide:[s]}],"outline-style":[{outline:["",...L()]}],"outline-offset":[{"outline-offset":[R,l]}],"outline-w":[{outline:[R,N]}],"outline-color":[{outline:[e]}],"ring-w":[{ring:X()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:[e]}],"ring-opacity":[{"ring-opacity":[x]}],"ring-offset-w":[{"ring-offset":[R,N]}],"ring-offset-color":[{"ring-offset":[e]}],shadow:[{shadow:["","inner","none",S,Ke]}],"shadow-color":[{shadow:[V]}],opacity:[{opacity:[x]}],"mix-blend":[{"mix-blend":[...Y(),"plus-lighter","plus-darker"]}],"bg-blend":[{"bg-blend":Y()}],filter:[{filter:["","none"]}],blur:[{blur:[t]}],brightness:[{brightness:[o]}],contrast:[{contrast:[d]}],"drop-shadow":[{"drop-shadow":["","none",S,l]}],grayscale:[{grayscale:[c]}],"hue-rotate":[{"hue-rotate":[f]}],invert:[{invert:[y]}],saturate:[{saturate:[P]}],sepia:[{sepia:[T]}],"backdrop-filter":[{"backdrop-filter":["","none"]}],"backdrop-blur":[{"backdrop-blur":[t]}],"backdrop-brightness":[{"backdrop-brightness":[o]}],"backdrop-contrast":[{"backdrop-contrast":[d]}],"backdrop-grayscale":[{"backdrop-grayscale":[c]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[f]}],"backdrop-invert":[{"backdrop-invert":[y]}],"backdrop-opacity":[{"backdrop-opacity":[x]}],"backdrop-saturate":[{"backdrop-saturate":[P]}],"backdrop-sepia":[{"backdrop-sepia":[T]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":[i]}],"border-spacing-x":[{"border-spacing-x":[i]}],"border-spacing-y":[{"border-spacing-y":[i]}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["none","all","","colors","opacity","shadow","transform",l]}],duration:[{duration:z()}],ease:[{ease:["linear","in","out","in-out",l]}],delay:[{delay:z()}],animate:[{animate:["none","spin","ping","pulse","bounce",l]}],transform:[{transform:["","gpu","none"]}],scale:[{scale:[A]}],"scale-x":[{"scale-x":[A]}],"scale-y":[{"scale-y":[A]}],rotate:[{rotate:[I,l]}],"translate-x":[{"translate-x":[J]}],"translate-y":[{"translate-y":[J]}],"skew-x":[{"skew-x":[q]}],"skew-y":[{"skew-y":[q]}],"transform-origin":[{origin:["center","top","top-right","right","bottom-right","bottom","bottom-left","left","top-left",l]}],accent:[{accent:["auto",e]}],appearance:[{appearance:["none","auto"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",l]}],"caret-color":[{caret:[e]}],"pointer-events":[{"pointer-events":["none","auto"]}],resize:[{resize:["none","y","x",""]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":g()}],"scroll-mx":[{"scroll-mx":g()}],"scroll-my":[{"scroll-my":g()}],"scroll-ms":[{"scroll-ms":g()}],"scroll-me":[{"scroll-me":g()}],"scroll-mt":[{"scroll-mt":g()}],"scroll-mr":[{"scroll-mr":g()}],"scroll-mb":[{"scroll-mb":g()}],"scroll-ml":[{"scroll-ml":g()}],"scroll-p":[{"scroll-p":g()}],"scroll-px":[{"scroll-px":g()}],"scroll-py":[{"scroll-py":g()}],"scroll-ps":[{"scroll-ps":g()}],"scroll-pe":[{"scroll-pe":g()}],"scroll-pt":[{"scroll-pt":g()}],"scroll-pr":[{"scroll-pr":g()}],"scroll-pb":[{"scroll-pb":g()}],"scroll-pl":[{"scroll-pl":g()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",l]}],fill:[{fill:[e,"none"]}],"stroke-w":[{stroke:[R,N,F]}],stroke:[{stroke:[e,"none"]}],sr:["sr-only","not-sr-only"],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-s","border-color-e","border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]}}},De=Ie(Ye);function j(...e){return De(ne(e))}const er=we("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",{variants:{variant:{default:"bg-primary text-primary-foreground shadow hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",outline:"border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-9 px-4 py-2",sm:"h-8 rounded-md px-3 text-xs",lg:"h-10 rounded-md px-8",icon:"h-9 w-9"}},defaultVariants:{variant:"default",size:"default"}}),rr=u.forwardRef(({className:e,variant:r,size:t,asChild:o=!1,...s},n)=>{const i=o?ie:"button";return k.jsx(i,{className:j(er({variant:r,size:t,className:e})),ref:n,...s})});rr.displayName="Button";const tr=u.forwardRef(({className:e,...r},t)=>k.jsx("div",{ref:t,className:j("rounded-xl border bg-card text-card-foreground shadow",e),...r}));tr.displayName="Card";const or=u.forwardRef(({className:e,...r},t)=>k.jsx("div",{ref:t,className:j("flex flex-col space-y-1.5 p-6",e),...r}));or.displayName="CardHeader";const nr=u.forwardRef(({className:e,...r},t)=>k.jsx("div",{ref:t,className:j("font-semibold leading-none tracking-tight",e),...r}));nr.displayName="CardTitle";const sr=u.forwardRef(({className:e,...r},t)=>k.jsx("div",{ref:t,className:j("text-sm text-muted-foreground",e),...r}));sr.displayName="CardDescription";const ar=u.forwardRef(({className:e,...r},t)=>k.jsx("div",{ref:t,className:j("p-6 pt-0",e),...r}));ar.displayName="CardContent";const ir=u.forwardRef(({className:e,...r},t)=>k.jsx("div",{ref:t,className:j("flex items-center p-6 pt-0",e),...r}));ir.displayName="CardFooter";export{rr as B,tr as C,ie as S,j as a,we as b,dr as c,or as d,nr as e,ar as f,ir as g,sr as h,ur as u};
