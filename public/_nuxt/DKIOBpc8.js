import{e as i,f as _,g as l,o as a,u as t,E as u,w as d,B as m,b as v,as as B,c as p,F as y,r as T,a as $,h as x,d as w,t as k,at as S,i as b,C as D,D as N,m as V,j as C,au as A}from"./CkQyi58b.js";import{_ as E,ao as R,c as h,ap as F,aq as L,ar as M,as as O,at as z,g as I,u as U,a as j}from"./DlXlnpd-.js";import{X as K}from"./B4aBpjLF.js";import"./Dq3nT4Tn.js";const Z=i({__name:"Toast",props:{class:{},variant:{},onOpenChange:{type:Function},defaultOpen:{type:Boolean},forceMount:{type:Boolean},type:{},open:{type:Boolean},duration:{},asChild:{type:Boolean},as:{}},emits:["escapeKeyDown","pause","resume","swipeStart","swipeMove","swipeCancel","swipeEnd","update:open"],setup(n,{emit:s}){const o=n,r=s,e=_(()=>{const{class:f,...c}=o;return c}),g=E(e,r);return(f,c)=>(a(),l(t(R),u(t(g),{class:t(h)(t(W)({variant:f.variant}),o.class),"onUpdate:open":f.onOpenChange}),{default:d(()=>[m(f.$slots,"default")]),_:3},16,["class","onUpdate:open"]))}}),q=i({__name:"ToastClose",props:{asChild:{type:Boolean},as:{},class:{}},setup(n){const s=n,o=_(()=>{const{class:r,...e}=s;return e});return(r,e)=>(a(),l(t(F),u(o.value,{class:t(h)("absolute right-2 top-2 rounded-md p-1 text-slate-950/50 opacity-0 transition-opacity hover:text-slate-950 focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600 dark:text-slate-50/50 dark:hover:text-slate-50",s.class)}),{default:d(()=>[v(t(K),{class:"h-4 w-4"})]),_:1},16,["class"]))}}),P=i({__name:"ToastDescription",props:{asChild:{type:Boolean},as:{},class:{}},setup(n){const s=n,o=_(()=>{const{class:r,...e}=s;return e});return(r,e)=>(a(),l(t(L),u({class:t(h)("text-sm opacity-90",s.class)},o.value),{default:d(()=>[m(r.$slots,"default")]),_:3},16,["class"]))}}),G={class:"grid gap-1"},X=i({__name:"Toaster",setup(n){const{toasts:s}=B();return(o,r)=>(a(),l(t(H),null,{default:d(()=>[(a(!0),p(y,null,T(t(s),e=>(a(),l(t(Z),u({key:e.id,ref_for:!0},e),{default:d(()=>[$("div",G,[e.title?(a(),l(t(J),{key:0},{default:d(()=>[w(k(e.title),1)]),_:2},1024)):x("",!0),e.description?(a(),p(y,{key:1},[S(e.description)?(a(),l(t(P),{key:0},{default:d(()=>[(a(),l(b(e.description)))]),_:2},1024)):(a(),l(t(P),{key:1},{default:d(()=>[w(k(e.description),1)]),_:2},1024))],64)):x("",!0),v(t(q))]),(a(),l(b(e.action)))]),_:2},1040))),128)),v(t(Q))]),_:1}))}}),H=i({__name:"ToastProvider",props:{label:{},duration:{},swipeDirection:{},swipeThreshold:{}},setup(n){const s=n;return(o,r)=>(a(),l(t(M),D(N(s)),{default:d(()=>[m(o.$slots,"default")]),_:3},16))}}),J=i({__name:"ToastTitle",props:{asChild:{type:Boolean},as:{},class:{}},setup(n){const s=n,o=_(()=>{const{class:r,...e}=s;return e});return(r,e)=>(a(),l(t(O),u(o.value,{class:t(h)("text-sm font-semibold",s.class)}),{default:d(()=>[m(r.$slots,"default")]),_:3},16,["class"]))}}),Q=i({__name:"ToastViewport",props:{hotkey:{},label:{type:[String,Function]},asChild:{type:Boolean},as:{},class:{}},setup(n){const s=n,o=_(()=>{const{class:r,...e}=s;return e});return(r,e)=>(a(),l(t(z),u(o.value,{class:t(h)("fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",s.class)}),null,16,["class"]))}}),W=I("group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border border-slate-200 p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[--radix-toast-swipe-end-x] data-[swipe=move]:translate-x-[--radix-toast-swipe-move-x] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full dark:border-slate-800",{variants:{variant:{default:"border bg-white text-slate-950 dark:bg-slate-950 dark:text-slate-50",destructive:"destructive group border-red-500 bg-red-500 text-slate-50 dark:border-red-900 dark:bg-red-900 dark:text-slate-50"}},defaultVariants:{variant:"default"}}),Y={class:"h-screen"},ee={key:0},te={key:1},se={key:2},ce=i({__name:"default",setup(n){U();const s=j(),o=A(),{$useApi:r}=V(),e=C(!0),g=C(!1);return(async()=>{try{const{data:c}=await r.get("/profile");s.setUser(c),c.role.shortName==="DIZ"&&await o.push("/diz"),["DP","RP","LOGIST","FRZ","LAM","MASTER","PACKER"].includes(c.role.shortName)&&await o.push("/prod")}catch(c){g.value=!0,console.error("Ошибка при загрузке профиля:",c),await o.push("/login")}finally{e.value=!1}})(),(c,ae)=>(a(),p("div",Y,[$("section",null,[e.value?(a(),p("div",ee,"Загрузка")):g.value?(a(),p("div",te,"Ошибка")):(a(),p("div",se,[m(c.$slots,"default")]))]),v(t(X))]))}});export{ce as default};
