import{a4 as m,a7 as I,a8 as E,j,k as _,f as L,p as N,a6 as O,e as P,_ as $,$ as C,u as w,c as J,n as T,q as W,o as B}from"./CkQyi58b.js";import{c as D}from"./DlXlnpd-.js";const u=new WeakMap,F=(e,t)=>{var n;const o=(n=m())==null?void 0:n.proxy;if(o==null)throw new Error("provideLocal must be called in setup");u.has(o)||u.set(o,Object.create(null));const a=u.get(o);a[e]=t,E(e,t)},G=(...e)=>{var t;const n=e[0],o=(t=m())==null?void 0:t.proxy;if(o==null)throw new Error("injectLocal must be called in setup");return u.has(o)&&n in u.get(o)?u.get(o)[n]:I(...e)};function H(e,t){const n=Symbol(e.name||"InjectionState"),o=void 0;return[(...r)=>{const i=e(...r);return F(n,i),i},()=>G(n,o)]}typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;const U=e=>typeof e<"u";function K(){const e=j(!1),t=m();return t&&N(()=>{e.value=!0},t),e}function q(e){return JSON.parse(JSON.stringify(e))}function z(e,t,n,o={}){var a,c,r;const{clone:i=!1,passive:k=!1,eventName:y,deep:b=!1,defaultValue:M,shouldEmit:g}=o,l=m(),x=n||(l==null?void 0:l.emit)||((a=l==null?void 0:l.$emit)==null?void 0:a.bind(l))||((r=(c=l==null?void 0:l.proxy)==null?void 0:c.$emit)==null?void 0:r.bind(l==null?void 0:l.proxy));let d=y;d=d||`update:${t.toString()}`;const S=s=>i?typeof i=="function"?i(s):q(s):s,V=()=>U(e[t])?S(e[t]):M,h=s=>{g?g(s)&&x(d,s):x(d,s)};if(k){const s=V(),v=j(s);let f=!1;return _(()=>e[t],p=>{f||(f=!0,v.value=S(p),O(()=>f=!1))}),_(v,p=>{!f&&(p!==e[t]||b)&&h(p)},{deep:b}),v}else return L({get(){return V()},set(s){h(s)}})}const Q=P({__name:"Input",props:{defaultValue:{},modelValue:{},class:{}},emits:["update:modelValue"],setup(e,{emit:t}){const n=e,a=z(n,"modelValue",t,{passive:!0,defaultValue:n.defaultValue});return(c,r)=>$((B(),J("input",{"onUpdate:modelValue":r[0]||(r[0]=i=>W(a)?a.value=i:null),class:T(w(D)("flex h-10 w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-slate-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-800 dark:bg-slate-950 dark:ring-offset-slate-950 dark:placeholder:text-slate-400 dark:focus-visible:ring-slate-300",n.class))},null,2)),[[C,w(a)]])}});export{Q as _,K as a,H as c,z as u};
