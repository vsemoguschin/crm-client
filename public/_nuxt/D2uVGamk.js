import{_ as ee}from"./DuExPZa-.js";import{_ as te,a as ae,b as se,d as le,e as oe,c as ne}from"./BYvaxhZq.js";import{_ as re}from"./BH-IEl0K.js";import{_ as ce}from"./DmGng3il.js";import{_ as ie}from"./CELj3OIF.js";import{_ as m}from"./CVfD7Z-I.js";import{_ as J,a as Q,b as Y,u as ue,F as G,g as de,c as me,d as pe}from"./DctKKscK.js";import{_ as ge,a as _e,b as fe,c as ve}from"./BgUGR5RI.js";import{c as O,v as q}from"./DlXlnpd-.js";import{_ as he,a as xe}from"./DQUyBuYH.js";import{C as ye,_ as we}from"./HBTxpG4B.js";import{C as Se,a as Ce}from"./CmhCbA6o.js";import{e as W,f as E,g as y,o,w as l,b as s,d as $,c as k,h as B,u as g,t as F,F as D,a as I,r as A,n as X,i as ke,j as z,k as Z,l as t,m as be,v as Ie,p as Ve,q as $e}from"./CkQyi58b.js";import{X as Te}from"./B4aBpjLF.js";import{_ as Ue}from"./DoP7rJBU.js";import{e as Ne,_ as Pe,b as Fe,c as De,d as Ke,a as Me}from"./dYra1jTF.js";import{u as Ae}from"./kLQ5KVH_.js";import{u as C}from"./Dt19OLxm.js";import{_ as Be}from"./CZAMlBnd.js";import{A as f}from"./I9B7OHRz.js";import"./Dq3nT4Tn.js";import"./DIDwpX-o.js";import"./73PKtgBv.js";import"./DlAUqK2U.js";import"./Z3QgsFLo.js";import"./J33pU5yk.js";const Re={class:"hidden space-x-1 lg:flex"},He={key:1,class:"ml-auto flex h-4 w-4 items-center justify-center font-mono text-xs"},ze=W({__name:"DataTableFacetedFilter",props:{column:{},title:{},options:{}},setup(e){const _=e,v=E(()=>{var c;return(c=_.column)==null?void 0:c.getFacetedUniqueValues()}),u=E(()=>{var c;return new Set((c=_.column)==null?void 0:c.getFilterValue())});return(c,a)=>{const x=ce,T=ie,r=m,b=J,R=he,j=xe,L=ve,n=fe,d=we,U=_e,K=ge,N=Q,H=Y;return o(),y(H,null,{default:l(()=>[s(b,{"as-child":""},{default:l(()=>[s(r,{variant:"outline",size:"sm",class:"h-8 border-dashed"},{default:l(()=>[s(g(ye),{class:"mr-2 h-4 w-4"}),$(" "+F(c.title)+" ",1),u.value.size>0?(o(),k(D,{key:0},[s(x,{orientation:"vertical",class:"mx-2 h-4"}),s(T,{variant:"secondary",class:"rounded-sm px-1 font-normal lg:hidden"},{default:l(()=>[$(F(u.value.size),1)]),_:1}),I("div",Re,[u.value.size>1?(o(),y(T,{key:0,variant:"secondary",class:"rounded-sm px-1 font-normal"},{default:l(()=>[$(F(u.value.size),1)]),_:1})):(o(!0),k(D,{key:1},A(c.options.filter(i=>u.value.has(i.value)),i=>(o(),y(T,{key:i.value,variant:"secondary",class:"rounded-sm px-1 font-normal"},{default:l(()=>[$(F(i.label),1)]),_:2},1024))),128))])],64)):B("",!0)]),_:1})]),_:1}),s(N,{class:"w-[400px] p-0",align:"start"},{default:l(()=>[s(K,{"filter-function":(i,w)=>i.filter(M=>{var p;return(p=M.label.toLowerCase())==null?void 0:p.includes(w)})},{default:l(()=>[s(R,{placeholder:c.title},null,8,["placeholder"]),s(U,null,{default:l(()=>[s(j,null,{default:l(()=>a[1]||(a[1]=[$("Нет совпадений.")])),_:1}),s(n,null,{default:l(()=>[(o(!0),k(D,null,A(c.options,i=>(o(),y(L,{key:i.value,value:i,onSelect:w=>{var h;u.value.has(i.value)?u.value.delete(i.value):u.value.add(i.value);const p=Array.from(u.value);(h=c.column)==null||h.setFilterValue(p.length?p:void 0)}},{default:l(()=>{var w;return[I("div",{class:X(g(O)("mr-2 flex h-4 w-4 items-center justify-center rounded-sm border border-primary",u.value.has(i.value)?"bg-primary text-primary-foreground":"opacity-50 [&_svg]:invisible"))},[s(g(Se),{class:X(g(O)("h-4 w-4"))},null,8,["class"])],2),i.icon?(o(),y(ke(i.icon),{key:0,class:"mr-2 h-4 w-4 text-muted-foreground"})):B("",!0),I("span",null,F(i.label),1),(w=v.value)!=null&&w.get(i.value)?(o(),k("span",He,F(v.value.get(i.value)),1)):B("",!0)]}),_:2},1032,["value","onSelect"]))),128))]),_:1}),u.value.size>0?(o(),k(D,{key:0},[s(d),s(n,null,{default:l(()=>[s(L,{value:{label:"Очистить"},class:"justify-center text-center",onSelect:a[0]||(a[0]=i=>{var w;return(w=c.column)==null?void 0:w.setFilterValue(void 0)})},{default:l(()=>a[2]||(a[2]=[$(" Очистить ")])),_:1})]),_:1})],64)):B("",!0)]),_:1})]),_:1},8,["filter-function"])]),_:1})]),_:1})}}}),je={class:"flex items-center justify-between"},Le={class:"flex flex-1 items-center space-x-2"},We=W({__name:"DataTableToolbar",props:{table:{},filters:{}},setup(e){const _=e,v=_.filters.workspaces.map(a=>({value:a.id,label:a.title}));_.filters.groups.map(a=>({value:a.id,label:a.title}));const u=_.filters.managers.map(a=>({value:a.id,label:a.fullName})),c=E(()=>_.table.getState().columnFilters.length>0);return(a,x)=>{const T=ze,r=m;return o(),k("div",je,[I("div",Le,[a.table.getColumn("workSpaceId")&&g(v).length?(o(),y(T,{key:0,column:a.table.getColumn("workSpaceId"),title:"Отдел",options:g(v)},null,8,["column","options"])):B("",!0),a.table.getColumn("managerId")&&g(u).length?(o(),y(T,{key:1,column:a.table.getColumn("managerId"),title:"Менеджеры",options:g(u)},null,8,["column","options"])):B("",!0),c.value?(o(),y(r,{key:2,variant:"secondary",class:"h-8 px-2 lg:px-3",onClick:x[0]||(x[0]=b=>a.table.resetColumnFilters())},{default:l(()=>[x[1]||(x[1]=$(" Сброс ")),s(g(Te),{class:"ml-2 h-4 w-4"})]),_:1})):B("",!0)])])}}}),qe={class:"flex mb-2 justify-between"},Ee={class:"rounded-md border max-h-[calc(100vh-320px)] overflow-y-scroll bg-slate-100"},Ge=W({__name:"DataTable",props:{columns:{},data:{},filters:{}},emits:["deal-clicked","table-sorted","is-plan-set"],setup(e,{emit:_}){const v=e,u=z([]),c=z([]),a=z({}),x=ue({get data(){return v.data},get columns(){return v.columns},getCoreRowModel:pe(),getSortedRowModel:me(),getFilteredRowModel:de(),onSortingChange:r=>q(r,u),onColumnFiltersChange:r=>q(r,c),onColumnVisibilityChange:r=>q(r,a),state:{get sorting(){return u.value},get columnFilters(){return c.value},get columnVisibility(){return a.value}},meta:{onPlanSet:(r,b)=>{T("is-plan-set",{managerId:r,newPlan:b})}}}),T=_;return Z(()=>x.getSortedRowModel().rows,r=>{console.log("Сортировка изменилась:",r);const b=r.map(R=>R.original.id);T("table-sorted",b)},{deep:!0}),(r,b)=>{const R=We,j=m,L=J,n=Ue,d=Q,U=Y,K=Fe,N=Me,H=Pe,i=Ke,w=De,M=Ne;return o(),k(D,null,[I("div",qe,[s(R,{table:g(x),filters:r.filters},null,8,["table","filters"]),I("div",null,[s(U,null,{default:l(()=>[s(L,null,{default:l(()=>[s(j,{variant:"outline",class:"ml-auto"},{default:l(()=>[b[0]||(b[0]=$(" Колонки ")),s(g(Ce),{class:"w-4 h-4 ml-2"})]),_:1})]),_:1}),s(d,{class:"w-[180px]"},{default:l(()=>[(o(!0),k(D,null,A(g(x).getAllColumns().filter(p=>p.getCanHide()),p=>(o(),k("div",{key:p.id},[s(n,{checked:p.getIsVisible(),"onUpdate:checked":h=>{p.toggleVisibility(!!h)}},null,8,["checked","onUpdate:checked"]),$(" "+F(p.columnDef.ruName),1)]))),128))]),_:1})]),_:1})])]),I("div",Ee,[s(M,null,{default:l(()=>[s(H,{class:"bg-white"},{default:l(()=>[(o(!0),k(D,null,A(g(x).getHeaderGroups(),p=>(o(),y(N,{key:p.id},{default:l(()=>[(o(!0),k(D,null,A(p.headers,h=>(o(),y(K,{key:h.id},{default:l(()=>[h.isPlaceholder?B("",!0):(o(),y(g(G),{key:0,render:h.column.columnDef.header,props:h.getContext()},null,8,["render","props"]))]),_:2},1024))),128))]),_:2},1024))),128))]),_:1}),s(w,null,{default:l(()=>{var p;return[(p=g(x).getRowModel().rows)!=null&&p.length?(o(!0),k(D,{key:0},A(g(x).getRowModel().rows,h=>(o(),y(N,{key:h.id,"data-state":h.getIsSelected()?"selected":void 0},{default:l(()=>[(o(!0),k(D,null,A(h.getVisibleCells(),S=>(o(),y(i,{key:S.id},{default:l(()=>[s(g(G),{render:S.column.columnDef.cell,props:S.getContext()},null,8,["render","props"])]),_:2},1024))),128))]),_:2},1032,["data-state"]))),128)):(o(),y(N,{key:1},{default:l(()=>[s(i,{colspan:r.columns.length,class:"text-left"},{default:l(()=>b[1]||(b[1]=[$(" Нет результатов. ")])),_:1},8,["colspan"])]),_:1}))]}),_:1})]),_:1})])],64)}}}),Oe=[{accessorKey:"manager",ruName:"Менеджер",enableHiding:!1,header:({column:e})=>t(m,{variant:"ghost",onClick:()=>e.toggleSorting(e.getIsSorted()==="asc"),class:"text-wrap h-full"},()=>["Менеджер",t(f,{class:"h-[20px] w-[20px]"})]),cell:({row:e,table:_})=>t("div",{class:"flex items-center gap-2"},[t(Be,{period:e.original.period,plan:e.original.plan,managerId:e.original.managerId,manager:e.original.manager,onIsPlanSet:v=>{var u,c;(c=(u=_.options.meta)==null?void 0:u.onPlanSet)==null||c.call(u,e.original.managerId,v)}}),t("span",{class:"whitespace-nowrap"},`${e.original.manager} ${e.original.fired?"(Уволен)":""}`)])},{accessorKey:"totalSales",ruName:"Продажи",header:({column:e})=>t(m,{variant:"ghost",onClick:()=>e.toggleSorting(e.getIsSorted()==="asc"),class:"text-wrap h-full"},()=>["Продажи",t(f,{class:"h-[20px] w-[20px]"})]),cell:({row:e})=>t("div",{class:"text-center"},C(e.getValue("totalSales"))+"₽")},{accessorKey:"plan",ruName:"План",header:({column:e})=>t(m,{variant:"ghost",onClick:()=>e.toggleSorting(e.getIsSorted()==="asc"),class:"text-wrap h-full"},()=>["План",t(f,{class:"h-[20px] w-[20px]"})]),cell:({row:e})=>t("div",{class:"text-center"},C(e.getValue("plan"))+"₽")},{accessorKey:"salesToPlan",ruName:"% от плана",header:({column:e})=>t(m,{variant:"ghost",onClick:()=>e.toggleSorting(e.getIsSorted()==="asc"),class:"text-wrap h-full"},()=>["% от плана",t(f,{class:"h-[20px] w-[20px]"})]),cell:({row:e})=>t("div",{class:"text-center"},e.getValue("salesToPlan")+"%")},{accessorKey:"remainder",ruName:"Остаток до плана",header:({column:e})=>t(m,{variant:"ghost",onClick:()=>e.toggleSorting(e.getIsSorted()==="asc"),class:"text-wrap h-full"},()=>["Остаток до плана",t(f,{class:"h-[20px] w-[20px]"})]),cell:({row:e})=>t("div",{class:"text-center"},C(e.getValue("remainder"))+"₽")},{accessorKey:"receivedPayments",ruName:"Выручка",header:({column:e})=>t(m,{variant:"ghost",onClick:()=>e.toggleSorting(e.getIsSorted()==="asc"),class:"text-wrap h-full"},()=>["Выручка",t(f,{class:"h-[20px] w-[20px]"})]),cell:({row:e})=>t("div",{class:"text-center"},C(e.getValue("receivedPayments"))+"₽")},{accessorKey:"averageBill",ruName:"Средний чек",header:({column:e})=>t(m,{variant:"ghost",onClick:()=>e.toggleSorting(e.getIsSorted()==="asc"),class:"text-wrap h-full"},()=>["Средний чек",t(f,{class:"h-[20px] w-[20px]"})]),cell:({row:e})=>t("div",{class:"text-center"},C(e.getValue("averageBill"))+"₽")},{accessorKey:"dealsSales",ruName:"Сумма сделок",header:({column:e})=>t(m,{variant:"ghost",onClick:()=>e.toggleSorting(e.getIsSorted()==="asc"),class:"text-wrap h-full"},()=>["Сумма сделок",t(f,{class:"h-[20px] w-[20px]"})]),cell:({row:e})=>t("div",{class:"text-center"},C(e.getValue("dealsSales"))+"₽")},{accessorKey:"dealsAmount",ruName:"Кол-во сделок",header:({column:e})=>t(m,{variant:"ghost",onClick:()=>e.toggleSorting(e.getIsSorted()==="asc"),class:"text-wrap h-full"},()=>["Кол-во сделок",t(f,{class:"h-[20px] w-[20px]"})]),cell:({row:e})=>t("div",{class:"text-center"},e.getValue("dealsAmount"))},{accessorKey:"dopsSales",ruName:"Допы (сумма)",header:({column:e})=>t(m,{variant:"ghost",onClick:()=>e.toggleSorting(e.getIsSorted()==="asc"),class:"text-wrap h-full"},()=>["Допы (сумма)",t(f,{class:"h-[20px] w-[20px]"})]),cell:({row:e})=>t("div",{class:"text-center"},C(e.getValue("dopsSales"))+"₽")},{accessorKey:"dopsToSales",ruName:"% от продаж",header:({column:e})=>t(m,{variant:"ghost",onClick:()=>e.toggleSorting(e.getIsSorted()==="asc"),class:"text-wrap h-full"},()=>["Допы к продажам (%)",t(f,{class:"h-[20px] w-[20px]"})]),cell:({row:e})=>t("div",{class:"text-center"},e.getValue("dopsToSales")+"%")},{accessorKey:"dopsAmount",ruName:"Кол-во допов",header:({column:e})=>t(m,{variant:"ghost",onClick:()=>e.toggleSorting(e.getIsSorted()==="asc"),class:"text-wrap h-full"},()=>["Кол-во допов",t(f,{class:"h-[20px] w-[20px]"})]),cell:({row:e})=>t("div",{class:"text-center"},e.getValue("dopsAmount"))},{accessorKey:"dealsSalesWithoutDesigners",ruName:"Продаж без дизайнеров",header:({column:e})=>t(m,{variant:"ghost",onClick:()=>e.toggleSorting(e.getIsSorted()==="asc"),class:"text-wrap h-full"},()=>["Продаж без дизайнеров",t(f,{class:"h-[20px] w-[20px]"})]),cell:({row:e})=>t("div",{class:"text-center"},C(e.getValue("dealsSalesWithoutDesigners"))+"₽")},{accessorKey:"dealsWithoutDesigners",ruName:"Сделки без дизайнеров",header:({column:e})=>t(m,{variant:"ghost",onClick:()=>e.toggleSorting(e.getIsSorted()==="asc"),class:"text-wrap h-full"},()=>["Сделки без дизайнеров",t(f,{class:"h-[20px] w-[20px]"})]),cell:({row:e})=>t("div",{class:"text-center"},e.getValue("dealsWithoutDesigners"))},{accessorKey:"dealsDayToDayCount",ruName:"Сделки день в день",header:({column:e})=>t(m,{variant:"ghost",onClick:()=>e.toggleSorting(e.getIsSorted()==="asc"),class:"text-wrap h-full"},()=>["Сделки день в день",t(f,{class:"h-[20px] w-[20px]"})]),cell:({row:e})=>t("div",{class:"text-center"},e.getValue("dealsDayToDayCount"))},{accessorKey:"calls",ruName:"Заявки",header:({column:e})=>t(m,{variant:"ghost",onClick:()=>e.toggleSorting(e.getIsSorted()==="asc"),class:"text-wrap h-full"},()=>["Заявки",t(f,{class:"h-[20px] w-[20px]"})]),cell:({row:e})=>t("div",{class:"text-center"},e.getValue("calls"))},{accessorKey:"makets",ruName:"Макеты",header:({column:e})=>t(m,{variant:"ghost",onClick:()=>e.toggleSorting(e.getIsSorted()==="asc"),class:"text-wrap h-full"},()=>["Макеты",t(f,{class:"h-[20px] w-[20px]"})]),cell:({row:e})=>t("div",{class:"text-center"},e.getValue("makets"))},{accessorKey:"maketsDayToDay",ruName:"Макеты день в день",header:({column:e})=>t(m,{variant:"ghost",onClick:()=>e.toggleSorting(e.getIsSorted()==="asc"),class:"text-wrap h-full"},()=>["Макеты день в день",t(f,{class:"h-[20px] w-[20px]"})]),cell:({row:e})=>t("div",{class:"text-center"},e.getValue("maketsDayToDay"))},{accessorKey:"conversionMaket",ruName:"Конверсия из заявки в макет",header:({column:e})=>t(m,{variant:"ghost",onClick:()=>e.toggleSorting(e.getIsSorted()==="asc"),class:"text-wrap h-full"},()=>["Конверсия из заявки в макет",t(f,{class:"h-[20px] w-[20px]"})]),cell:({row:e})=>t("div",{class:"text-center"},e.getValue("conversionMaket")+"%")},{accessorKey:"conversionMaketDayToDay",ruName:"Конверсия из заявки в макет день в день",header:({column:e})=>t(m,{variant:"ghost",onClick:()=>e.toggleSorting(e.getIsSorted()==="asc"),class:"text-wrap h-full"},()=>["Конверсия из заявки в макет день в день",t(f,{class:"h-[20px] w-[20px]"})]),cell:({row:e})=>t("div",{class:"text-center"},e.getValue("conversionMaketDayToDay")+"%")},{accessorKey:"conversionToSale",ruName:"Конверсия из макета в продажу",header:({column:e})=>t(m,{variant:"ghost",onClick:()=>e.toggleSorting(e.getIsSorted()==="asc"),class:"text-wrap h-full"},()=>["Конверсия из макета в продажу",t(f,{class:"h-[20px] w-[20px]"})]),cell:({row:e})=>t("div",{class:"text-center"},e.getValue("conversionToSale")+"%")},{accessorKey:"workSpaceId",enableHiding:!1,ruName:"Отдел",header:()=>t("div",{class:"text-center"},""),cell:()=>t("div",{class:"text-center"},""),filterFn:(e,_,v)=>v.includes(e.getValue(_))},{accessorKey:"groupId",enableHiding:!1,ruName:"Группа",header:()=>t("div",{class:"text-center"},""),cell:()=>t("div",{class:"text-center"},""),filterFn:(e,_,v)=>v.includes(e.getValue(_))},{accessorKey:"managerId",enableHiding:!1,ruName:"Менеджер",header:()=>t("div",{class:"text-center"},""),cell:()=>t("div",{class:"text-center"},""),filterFn:(e,_,v)=>v.includes(e.getValue(_))}],Xe={class:"relative h-screen hidden-scrollbar"},Je={class:"w-full fixed z-10"},Qe={class:"h-[full] flex p-4 gap-4 mx-[auto] max-w-[2048px] pt-16"},Ye={class:"flex flex-col gap-4 min-w-[1050px] w-full"},Ze={class:"flex gap-4"},et={class:"text-xs text-muted-foreground"},tt={class:""},at={class:"mt-[-8px]"},Tt=W({__name:"index",async setup(e){let _,v;const{$useApi:u}=be();Ae({title:"Планы | Easy CRM"});const c=z(new Date().toISOString().slice(0,7)),a=z([]),x=z([{title:"Общий план",value:"0",content:"",footer:""},{title:"Продажи",value:"0",content:"",footer:""},{title:"Выручка(Факт)",value:"0",content:"",footer:""},{title:"Сделки",value:"0",content:"",footer:""},{title:"Доп. услуги",value:"0",content:"",footer:""}]),T=z({workspaces:[],groups:[],managers:[]}),{data:r}=([_,v]=Ie(()=>u.get("/dashboards/deals")),_=await _,v(),_);T.value={workspaces:(r==null?void 0:r.workSpaces)||[],groups:(r==null?void 0:r.groups)||[],managers:(r==null?void 0:r.managers)||[]};const b=async()=>{try{const{data:n}=await u.get("/dashboards/managers",{params:{period:c.value}});a.value=n||[];const d=n.map(U=>U.id);j(d)}catch(n){console.log(n)}},R=n=>{x.value=[{title:"Общий план",value:C(n.totalPlan)+"₽",content:"Остаток",footer:C(n.remainder)+"₽"},{title:"Продажи",value:C(n.totalSales)+"₽",content:"Процент от плана",footer:n.salesToPlan.toFixed()+"%"},{title:"Выручка(Факт)",value:C(n.receivedPayments)+"₽",content:"Средний чек",footer:C(+n.averageBill.toFixed())+"₽"},{title:"Сделки",value:C(n.dealsSales)+"₽",content:"Колличество сделок",footer:n.dealsAmount.toString()},{title:"Доп. услуги",value:C(n.dopsSales)+"₽",content:"Процент от продаж",footer:n.dopsToSales.toFixed()+"%"}]},j=n=>{const d=a.value.filter(V=>n.includes(V.id));console.log("sdasdasda");const U=d.reduce((V,P)=>V+P.dealsAmount,0),K=d.reduce((V,P)=>V+P.plan,0),N=d.reduce((V,P)=>V+P.totalSales,0),H=K-N,i=K?N/K*100:0,w=d.reduce((V,P)=>V+P.dealsSales,0),M=w/U||0,p=d.reduce((V,P)=>V+P.dopsSales,0),h=d.reduce((V,P)=>V+P.receivedPayments,0),S=p/N*100||0;R({dealsAmount:U,totalPlan:K,remainder:H,totalSales:N,receivedPayments:h,salesToPlan:i,averageBill:M,dealsSales:w,dopsSales:p,dopsToSales:S})},L=n=>{const d=a.value.findIndex(U=>U.managerId===n.managerId);d!==-1&&(a.value[d].plan=n.newPlan,a.value[d].remainder=n.newPlan-a.value[d].totalSales,a.value[d].salesToPlan=n.newPlan?+(a.value[d].totalSales/n.newPlan*100).toFixed():0,a.value=[...a.value])};return Z(c,async()=>{await b()}),Ve(async()=>{await b()}),(n,d)=>{const U=ee,K=ae,N=se,H=te,i=le,w=oe,M=ne,p=re,h=Ge;return o(),k("div",Xe,[I("div",Je,[s(U)]),I("div",Qe,[I("div",Ye,[I("div",Ze,[(o(!0),k(D,null,A(g(x),S=>(o(),y(M,{key:S.title,class:"min-w-[150px] grow"},{default:l(()=>[s(H,{class:"p-3 pb-2"},{default:l(()=>[s(K,null,{default:l(()=>[$(F(S.title),1)]),_:2},1024),s(N,{class:"text-3xl font-semibold whitespace-nowrap"},{default:l(()=>[$(F(S.value),1)]),_:2},1024)]),_:2},1024),s(i,{class:"pb-1 pl-3"},{default:l(()=>[I("div",et,F(S.content),1)]),_:2},1024),s(w,{class:"pl-3 pb-1"},{default:l(()=>[$(F(S.footer),1)]),_:2},1024)]),_:2},1024))),128))]),I("div",tt,[s(p,{modelValue:g(c),"onUpdate:modelValue":d[0]||(d[0]=S=>$e(c)?c.value=S:null),type:"month",class:"w-[180px]"},null,8,["modelValue"])]),I("div",at,[(o(),y(h,{key:g(a).length,columns:g(Oe),data:g(a),filters:g(T),onTableSorted:d[1]||(d[1]=S=>j(S)),onIsPlanSet:L},null,8,["columns","data","filters"]))])])])])}}});export{Tt as default};
