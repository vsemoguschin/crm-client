import{G as c}from"./LcRD3ia0.js";/**
 * @license lucide-vue-next v0.514.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),h=e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(t,r,o)=>o?o.toUpperCase():r.toLowerCase()),w=e=>{const t=h(e);return t.charAt(0).toUpperCase()+t.slice(1)},p=(...e)=>e.filter((t,r,o)=>!!t&&t.trim()!==""&&o.indexOf(t)===r).join(" ").trim();/**
 * @license lucide-vue-next v0.514.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var s={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};/**
 * @license lucide-vue-next v0.514.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C=({size:e,strokeWidth:t=2,absoluteStrokeWidth:r,color:o,iconNode:l,name:a,class:g,...d},{slots:n})=>c("svg",{...s,width:e||s.width,height:e||s.height,stroke:o||s.stroke,"stroke-width":r?Number(t)*24/Number(e):t,class:p("lucide",...a?[`lucide-${i(w(a))}-icon`,`lucide-${i(a)}`]:["lucide-icon"]),...d},[...l.map(u=>c(...u)),...n.default?[n.default()]:[]]);/**
 * @license lucide-vue-next v0.514.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m=(e,t)=>(r,{slots:o})=>c(C,{...r,iconNode:t,name:e},o);/**
 * @license lucide-vue-next v0.514.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f=m("x",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);export{f as X,m as c};
