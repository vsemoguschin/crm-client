import{_ as qe}from"./DuExPZa-.js";import{_ as ue}from"./BH-IEl0K.js";import{b as Je,_ as Xe,a as Qe}from"./DIk1itph.js";import{_ as Ye}from"./DI2KliM5.js";import{c as he,_ as we,b as ye,a as xe,d as Se,e as ke}from"./BYvaxhZq.js";import{_ as be}from"./DTfs80Nu.js";import{_ as Ce}from"./Cs_4ea9z.js";import{_ as p}from"./CVfD7Z-I.js";import{_ as Me}from"./BDsxrxNW.js";import{_ as Ze}from"./DmGng3il.js";import{_ as et}from"./CELj3OIF.js";import{_ as me,a as pe,b as ge,u as De,g as Ve,c as Te,d as Ie,F as ce}from"./DctKKscK.js";import{_ as tt,a as at,b as lt,c as st}from"./BgUGR5RI.js";import{c as ve,v as se}from"./DlXlnpd-.js";import{_ as ot,a as nt}from"./DQUyBuYH.js";import{C as rt,_ as ct}from"./HBTxpG4B.js";import{C as it,a as $e}from"./CmhCbA6o.js";import{e as Z,f as de,g as S,o as c,w as o,b as a,d as g,c as D,h as j,u as l,t as M,F as N,a as r,r as O,n as E,i as dt,j as V,k as oe,l as t,m as Ue,p as Fe,q as ut}from"./CkQyi58b.js";import{X as mt}from"./B4aBpjLF.js";import{_ as Re}from"./DoP7rJBU.js";import{e as Ne,_ as Be,b as Ke,c as Ae,d as Pe,a as Ge}from"./dYra1jTF.js";import{u as z}from"./Dt19OLxm.js";import{A as w}from"./I9B7OHRz.js";import{u as pt}from"./kLQ5KVH_.js";import"./Dq3nT4Tn.js";const gt={class:"hidden space-x-1 lg:flex"},ft={key:1,class:"ml-auto flex h-4 w-4 items-center justify-center font-mono text-xs"},_t=Z({__name:"DataTableFacetedFilter",props:{column:{},title:{},options:{}},setup(e){const f=e,I=de(()=>{var b;return(b=f.column)==null?void 0:b.getFacetedUniqueValues()}),u=de(()=>{var b;return new Set((b=f.column)==null?void 0:b.getFilterValue())});return(b,T)=>{const F=Ze,d=et,P=p,A=me,n=ot,$=nt,U=st,L=lt,G=ct,W=at,J=tt,q=pe,X=ge;return c(),S(X,null,{default:o(()=>[a(A,{"as-child":""},{default:o(()=>[a(P,{variant:"outline",size:"sm",class:"h-8 border-dashed"},{default:o(()=>[a(l(rt),{class:"mr-2 h-4 w-4"}),g(" "+M(b.title)+" ",1),u.value.size>0?(c(),D(N,{key:0},[a(F,{orientation:"vertical",class:"mx-2 h-4"}),a(d,{variant:"secondary",class:"rounded-sm px-1 font-normal lg:hidden"},{default:o(()=>[g(M(u.value.size),1)]),_:1}),r("div",gt,[u.value.size>1?(c(),S(d,{key:0,variant:"secondary",class:"rounded-sm px-1 font-normal"},{default:o(()=>[g(M(u.value.size),1)]),_:1})):(c(!0),D(N,{key:1},O(b.options.filter(v=>u.value.has(v.value)),v=>(c(),S(d,{key:v.value,variant:"secondary",class:"rounded-sm px-1 font-normal"},{default:o(()=>[g(M(v.label),1)]),_:2},1024))),128))])],64)):j("",!0)]),_:1})]),_:1}),a(q,{class:"w-[200px] p-0",align:"start"},{default:o(()=>[a(J,{"filter-function":(v,x)=>v.filter(i=>{var B;return(B=i.label.toLowerCase())==null?void 0:B.includes(x)})},{default:o(()=>[a(n,{placeholder:b.title},null,8,["placeholder"]),a(W,null,{default:o(()=>[a($,null,{default:o(()=>T[1]||(T[1]=[g("Нет совпадений.")])),_:1}),a(L,null,{default:o(()=>[(c(!0),D(N,null,O(b.options,v=>(c(),S(U,{key:v.value,value:v,onSelect:x=>{var _;u.value.has(v.value)?u.value.delete(v.value):u.value.add(v.value);const B=Array.from(u.value);(_=b.column)==null||_.setFilterValue(B.length?B:void 0)}},{default:o(()=>{var x;return[r("div",{class:E(l(ve)("mr-2 flex h-4 w-4 items-center justify-center rounded-sm border border-primary",u.value.has(v.value)?"bg-primary text-primary-foreground":"opacity-50 [&_svg]:invisible"))},[a(l(it),{class:E(l(ve)("h-4 w-4"))},null,8,["class"])],2),v.icon?(c(),S(dt(v.icon),{key:0,class:"mr-2 h-4 w-4 text-muted-foreground"})):j("",!0),r("span",null,M(v.label),1),(x=I.value)!=null&&x.get(v.value)?(c(),D("span",ft,M(I.value.get(v.value)),1)):j("",!0)]}),_:2},1032,["value","onSelect"]))),128))]),_:1}),u.value.size>0?(c(),D(N,{key:0},[a(G),a(L,null,{default:o(()=>[a(U,{value:{label:"Очистить"},class:"justify-center text-center",onSelect:T[0]||(T[0]=v=>{var x;return(x=b.column)==null?void 0:x.setFilterValue(void 0)})},{default:o(()=>T[2]||(T[2]=[g(" Очистить ")])),_:1})]),_:1})],64)):j("",!0)]),_:1})]),_:1},8,["filter-function"])]),_:1})]),_:1})}}}),vt={class:"flex items-center justify-between"},ht={class:"flex flex-1 items-center space-x-2"},He=Z({__name:"DataTableToolbar",props:{table:{},wFilters:{},managersFilter:{}},setup(e){const f=e,I=de(()=>f.table.getState().columnFilters.length>0);return(u,b)=>{const T=_t,F=p;return c(),D("div",vt,[r("div",ht,[u.table.getColumn("workSpace")?(c(),S(T,{key:0,column:u.table.getColumn("workSpace"),title:"Отдел",options:u.wFilters},null,8,["column","options"])):j("",!0),u.table.getColumn("manager")?(c(),S(T,{key:1,column:u.table.getColumn("manager"),title:"Менеджер",options:u.managersFilter},null,8,["column","options"])):j("",!0),I.value?(c(),S(F,{key:2,variant:"secondary",class:"h-8 px-2 lg:px-3",onClick:b[0]||(b[0]=d=>u.table.resetColumnFilters())},{default:o(()=>[b[1]||(b[1]=g(" Сброс ")),a(l(mt),{class:"ml-2 h-4 w-4"})]),_:1})):j("",!0)])])}}}),wt={class:"flex mb-2 justify-between ml-[290px]"},yt={class:"bg-slate-100"},xt=Z({__name:"DataTable",props:{columns:{},data:{},managers:{}},emits:["table-sorted","on-delete-item"],setup(e,{emit:f}){const I=e,u=V(0),b=V([]),T=V([]),F=V({}),d=De({get data(){return I.data},get columns(){return I.columns},getCoreRowModel:Ie(),getSortedRowModel:Te(),getFilteredRowModel:Ve(),onSortingChange:n=>se(n,b),onColumnFiltersChange:n=>se(n,T),onColumnVisibilityChange:n=>se(n,F),state:{get sorting(){return b.value},get columnFilters(){return T.value},get columnVisibility(){return F.value}},meta:{deleteItem:n=>A(n.id)}}),P=f,A=n=>{P("on-delete-item",n)};return oe(()=>d.getSortedRowModel().rows,n=>{const $=n.map(U=>U.original.id);P("table-sorted",$)},{deep:!0}),(n,$)=>{const U=He,L=p,G=me,W=Re,J=pe,q=ge,X=Ke,v=Ge,x=Be,i=Pe,B=Ae,_=Ne;return c(),D(N,null,[r("div",wt,[a(U,{table:l(d),"w-filters":[{label:"B2B",value:"B2B"},{label:"ВК",value:"ВК"}],"managers-filter":n.managers},null,8,["table","managers-filter"]),r("div",null,[a(q,null,{default:o(()=>[a(G,null,{default:o(()=>[a(L,{variant:"outline",class:"ml-auto"},{default:o(()=>[$[0]||($[0]=g(" Колонки ")),a(l($e),{class:"w-4 h-4 ml-2"})]),_:1})]),_:1}),a(J,{class:"w-[180px]"},{default:o(()=>[(c(!0),D(N,null,O(l(d).getAllColumns().filter(s=>s.getCanHide()),s=>(c(),D("div",{key:s.id},[a(W,{checked:s.getIsVisible(),"onUpdate:checked":m=>{s.toggleVisibility(!!m)}},null,8,["checked","onUpdate:checked"]),g(" "+M(s.columnDef.ruName),1)]))),128))]),_:1})]),_:1})])]),r("div",yt,[a(_,null,{default:o(()=>[a(x,{class:"bg-white"},{default:o(()=>[(c(!0),D(N,null,O(l(d).getHeaderGroups(),s=>(c(),S(v,{key:s.id,class:""},{default:o(()=>[(c(!0),D(N,null,O(s.headers,m=>(c(),S(X,{key:m.id},{default:o(()=>[m.isPlaceholder?j("",!0):(c(),S(l(ce),{key:0,render:m.column.columnDef.header,props:m.getContext()},null,8,["render","props"]))]),_:2},1024))),128))]),_:2},1024))),128))]),_:1}),a(B,null,{default:o(()=>{var s;return[(s=l(d).getRowModel().rows)!=null&&s.length?(c(!0),D(N,{key:0},O(l(d).getRowModel().rows,m=>(c(),S(v,{key:m.id,class:E([l(u)===m.original.id?"bg-slate-300/70":"bg-slate-100","cursor-pointer"]),"data-state":m.getIsSelected()?"selected":void 0},{default:o(()=>[(c(!0),D(N,null,O(m.getVisibleCells(),k=>(c(),S(i,{key:k.id},{default:o(()=>[a(l(ce),{render:k.column.columnDef.cell,props:k.getContext()},null,8,["render","props"])]),_:2},1024))),128))]),_:2},1032,["class","data-state"]))),128)):(c(),S(v,{key:1},{default:o(()=>[a(i,{colspan:n.columns.length,class:"text-left"},{default:o(()=>$[1]||($[1]=[g(" Нет результатов. ")])),_:1},8,["colspan"])]),_:1}))]}),_:1})]),_:1})])],64)}}}),St=[{accessorKey:"date",ruName:"Дата",header:({column:e})=>t(p,{variant:"ghost",onClick:()=>e.toggleSorting(e.getIsSorted()==="asc"),class:"text-center h-full w-full"},()=>["Дата",t(w,{class:"ml-2 h-4 w-4"})]),cell:({row:e})=>t("div",{class:"text-center"},e.getValue("date"))},{accessorKey:"manager",ruName:"Менеджер",header:({column:e})=>t(p,{variant:"ghost",onClick:()=>e.toggleSorting(e.getIsSorted()==="asc"),class:"text-center h-full w-full"},()=>["Менеджер",t(w,{class:"ml-2 h-4 w-4"})]),cell:({row:e})=>t("div",{class:"text-center whitespace-nowrap"},e.getValue("manager")),filterFn:(e,f,I)=>I.includes(e.getValue(f))},{accessorKey:"workSpace",ruName:"Отдел",header:({column:e})=>t(p,{variant:"ghost",onClick:()=>e.toggleSorting(e.getIsSorted()==="asc"),class:"text-center h-full w-full"},()=>["Отдел",t(w,{class:"ml-2 h-4 w-4"})]),cell:({row:e})=>t("div",{class:"text-center"},e.getValue("workSpace")),filterFn:(e,f,I)=>I.includes(e.getValue(f))},{accessorKey:"calls",ruName:"Заявки",header:({column:e})=>t(p,{variant:"ghost",onClick:()=>e.toggleSorting(e.getIsSorted()==="asc"),class:"text-center h-full w-full"},()=>["Заявки",t(w,{class:"ml-2 h-4 w-4"})]),cell:({row:e})=>t("div",{class:"text-center"},e.getValue("calls"))},{accessorKey:"makets",ruName:"Макеты",header:({column:e})=>t(p,{variant:"ghost",onClick:()=>e.toggleSorting(e.getIsSorted()==="asc"),class:"text-center h-full w-full"},()=>["Макеты",t(w,{class:"ml-2 h-4 w-4"})]),cell:({row:e})=>t("div",{class:"text-center"},e.getValue("makets"))},{accessorKey:"maketsDayToDay",ruName:"Макеты день в день",header:({column:e})=>t(p,{variant:"ghost",onClick:()=>e.toggleSorting(e.getIsSorted()==="asc"),class:"text-center h-full w-full text-wrap"},()=>["Макеты день в день",t(w,{class:"ml-2 h-4 w-4"})]),cell:({row:e})=>t("div",{class:"text-center"},e.getValue("maketsDayToDay"))},{accessorKey:"totalSales",ruName:"Общие продажи",header:({column:e})=>t(p,{variant:"ghost",onClick:()=>e.toggleSorting(e.getIsSorted()==="asc"),class:"text-center h-full w-full text-wrap"},()=>["Общие продажи",t(w,{class:"ml-2 h-4 w-4"})]),cell:({row:e})=>t("div",{class:"text-center"},z(e.getValue("totalSales"))+"₽")},{accessorKey:"dealSales",ruName:"Продажи по сделкам",header:({column:e})=>t(p,{variant:"ghost",onClick:()=>e.toggleSorting(e.getIsSorted()==="asc"),class:"text-center h-full w-full text-wrap"},()=>["Продажи по сделкам",t(w,{class:"ml-2 h-4 w-4"})]),cell:({row:e})=>t("div",{class:"text-center"},z(e.getValue("dealSales"))+"₽")},{accessorKey:"dealsAmount",ruName:"Количество сделок",header:({column:e})=>t(p,{variant:"ghost",onClick:()=>e.toggleSorting(e.getIsSorted()==="asc"),class:"text-center h-full w-full text-wrap"},()=>["Количество сделок",t(w,{class:"ml-2 h-4 w-4"})]),cell:({row:e})=>t("div",{class:"text-center"},e.getValue("dealsAmount"))},{accessorKey:"redirectToMSG",ruName:"Переходы в мессенджер",header:({column:e})=>t(p,{variant:"ghost",onClick:()=>e.toggleSorting(e.getIsSorted()==="asc"),class:"text-center h-full w-full text-wrap"},()=>["Переходы в мессенджер",t(w,{class:"ml-2 h-4 w-4"})]),cell:({row:e})=>t("div",{class:"text-center"},e.getValue("redirectToMSG"))},{accessorKey:"conversion",ruName:"Конверсия",header:({column:e})=>t(p,{variant:"ghost",onClick:()=>e.toggleSorting(e.getIsSorted()==="asc"),class:"text-center h-full w-full"},()=>["Конверсия",t(w,{class:"ml-2 h-4 w-4"})]),cell:({row:e})=>t("div",{class:"text-center"},e.getValue("conversion")+"%")},{accessorKey:"ddr",ruName:"DDR",header:({column:e})=>t(p,{variant:"ghost",onClick:()=>e.toggleSorting(e.getIsSorted()==="asc"),class:"text-center h-full w-full"},()=>["DDR",t(w,{class:"ml-2 h-4 w-4"})]),cell:({row:e})=>t("div",{class:"text-center"},e.getValue("ddr")+"%")},{accessorKey:"dopSales",ruName:"Доп. продажи",header:({column:e})=>t(p,{variant:"ghost",onClick:()=>e.toggleSorting(e.getIsSorted()==="asc"),class:"text-center h-full w-full"},()=>["Доп. продажи",t(w,{class:"ml-2 h-4 w-4"})]),cell:({row:e})=>t("div",{class:"text-center"},z(e.getValue("dopSales"))+"₽")},{accessorKey:"averageBill",ruName:"Средний чек",header:({column:e})=>t(p,{variant:"ghost",onClick:()=>e.toggleSorting(e.getIsSorted()==="asc"),class:"text-center h-full w-full text-wrap"},()=>["Средний чек",t(w,{class:"ml-2 h-4 w-4"})]),cell:({row:e})=>t("div",{class:"text-center"},z(e.getValue("averageBill"))+"₽")},{accessorKey:"dealsDayToDayCount",ruName:"Сделки день в день",header:({column:e})=>t(p,{variant:"ghost",onClick:()=>e.toggleSorting(e.getIsSorted()==="asc"),class:"text-center h-full w-full text-wrap"},()=>["Сделки день в день",t(w,{class:"ml-2 h-4 w-4"})]),cell:({row:e})=>t("div",{class:"text-center"},e.getValue("dealsDayToDayCount"))},{id:"actions",header:()=>t("div",{class:"text-center"},"Действия"),enableHiding:!1,cell:({row:e,table:f})=>{const I=e.original;return t(p,{class:"h-5 px-1",item:I,onClick:()=>{var u;return(u=f.options.meta)==null?void 0:u.deleteItem(I)}},()=>"Удалить")}}],kt={class:"flex gap-2 w-full"},bt={class:"min-w-[250px]"},Ct={class:"flex flex-col gap-5"},Mt={class:"relative"},Dt={class:"relative w-full"},Vt={class:"flex gap-2"},Tt={class:"relative"},It={class:"flex gap-2"},$t={class:"relative"},Ut={class:"flex gap-2"},Ft={class:"relative"},Rt={class:"flex gap-2"},Nt={key:0,class:"relative"},Bt={class:"flex gap-2"},Kt={class:"flex flex-col gap-1 mt-4 text-slate-500"},At={class:"w-full overflow-hidden"},Pt={class:"flex gap-1 mb-2"},Gt={class:"mt-[-35px]"},Ht=Z({__name:"ManagersReports",props:{period:{}},setup(e){const{$useApi:f}=Ue(),u=V(e.period),b=V({start:u.value+"-01",end:new Date(+u.value.split("-")[0],+u.value.split("-")[1],1).toISOString().slice(0,10)}),T=V([]),F=V(""),d=V({date:new Date().toISOString().slice(0,10),userId:0,calls:0,makets:0,maketsDayToDay:0,redirectToMSG:0}),P=V([{title:"Сумма продаж",value:"0"},{title:"Средний чек",value:"0"},{title:"Конверсия",value:"0"}]);function A(){return`2025-03-${(Math.floor(Math.random()*31)+1).toString().padStart(2,"0")}`}const n=["Bob","Alice","John","Emma","Mike","Sarah","Tom","Lisa","David","Anna"],$=V(Array.from({length:10},(x,i)=>({id:i+1,date:A(),userId:Math.floor(Math.random()*10)+1,calls:Math.floor(Math.random()*100),makets:Math.floor(Math.random()*50),maketsDayToDay:Math.floor(Math.random()*20),manager:n[i],managerId:i+1,totalSales:Math.floor(Math.random()*1e6),dealSales:Math.floor(Math.random()*5e5),dealsAmount:Math.floor(Math.random()*100),conversion:Number((Math.random()*100).toFixed(2)),ddr:Number((Math.random()*50).toFixed(2)),dopSales:Math.floor(Math.random()*2e5),averageBill:Math.floor(Math.random()*5e4),dealsDayToDayCount:Math.floor(Math.random()*30)}))),U=V({manager:"Не выбран",dopSales:0,dealSales:0,dealsAmount:0,averageBill:0,dealsDayToDayCount:0,date:new Date().toISOString().slice(0,10)}),L=async()=>{const{data:x}=await f.get("/managers")||[];T.value=x||[]},G=async x=>{const{data:i}=await f.get(`/reports/manager/${x}/data`,{params:{date:d.value.date}});U.value=i,console.log(i)},W=V(!0),J=async()=>{const{data:x}=await f.post("reports/manager",d.value);console.log(x),d.value.calls=0,d.value.makets=0,d.value.maketsDayToDay=0,d.value.redirectToMSG=0,await getManagersReports()},q=async x=>{await f.delete("reports/manager/"+x),await getManagersReports()},X=x=>{const i=$.value.filter(K=>x.includes(K.id)),B=i.reduce((K,H)=>K+H.totalSales,0),_=i.reduce((K,H)=>K+H.dealsAmount,0),s=i.reduce((K,H)=>K+H.calls,0),m=_?+(B/_).toFixed():0,k=s?_/s*100:0;P.value=[{title:"Сумма продаж",value:z(B)+"₽"},{title:"Средний чек",value:z(m)+"₽"},{title:"Конверсия",value:k.toFixed(2)+"%"}]},v=async x=>{const{data:i}=await f.get("reports/managers/range",{params:{...x}});$.value=i};return Fe(()=>{L()}),oe(d,async()=>{/^\d{4}-\d{2}-\d{2}$/.test(d.value.date)&&d.value.userId!==0&&await G(d.value.userId);const{calls:x,userId:i,maketsDayToDay:B,makets:_}=d.value;x&&i&&B&&_?W.value=!1:W.value=!0},{deep:!0}),oe(u,x=>{console.log(u)},{deep:!0}),(x,i)=>{const B=ye,_=xe,s=we,m=be,k=ue,K=Ce,H=p,Q=Se,Y=ke,ee=he,te=Me,ne=xt;return c(),D("div",kt,[r("div",bt,[a(ee,null,{default:o(()=>[a(s,null,{default:o(()=>[a(B,null,{default:o(()=>i[7]||(i[7]=[g(" Добавить отчет ")])),_:1}),a(_)]),_:1}),a(Q,null,{default:o(()=>[r("div",Ct,[r("div",Mt,[l(d).date?(c(),S(m,{key:0,class:"font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap"},{default:o(()=>i[8]||(i[8]=[g("Дата смены")])),_:1})):j("",!0),a(k,{modelValue:l(d).date,"onUpdate:modelValue":i[0]||(i[0]=h=>l(d).date=h),type:"date",placeholder:"Дата смены",class:E(l(d).date?"":"outline outline-1 outline-rose-300")},null,8,["modelValue","class"])]),r("div",Dt,[l(d).userId!==0?(c(),S(m,{key:0,class:"font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap"},{default:o(()=>i[9]||(i[9]=[g("Менеджер")])),_:1})):j("",!0),r("div",Vt,[a(K,{items:l(T).map(h=>({value:h.id,label:h.fullName})),label:"Выберите менеджера",onSelectedItem:i[1]||(i[1]=h=>{var ae,le;l(d).userId=h,F.value=((le=(ae=l(T).find(y=>y.id===h))==null?void 0:ae.workSpace)==null?void 0:le.title)??""})},null,8,["items"])])]),r("div",Tt,[a(m,{class:"font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap"},{default:o(()=>i[10]||(i[10]=[g("Количество заявок")])),_:1}),r("div",It,[a(k,{modelValue:l(d).calls,"onUpdate:modelValue":i[2]||(i[2]=h=>l(d).calls=h),placeholder:"Количество заявок",type:"number",class:E(l(d).calls?"":"outline outline-1 outline-rose-300")},null,8,["modelValue","class"])])]),r("div",$t,[a(m,{class:"font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap"},{default:o(()=>i[11]||(i[11]=[g("Макетов день в день")])),_:1}),r("div",Ut,[a(k,{modelValue:l(d).maketsDayToDay,"onUpdate:modelValue":i[3]||(i[3]=h=>l(d).maketsDayToDay=h),placeholder:"Макетов день в день",type:"number",class:E(l(d).maketsDayToDay?"":"outline outline-1 outline-rose-300")},null,8,["modelValue","class"])])]),r("div",Ft,[a(m,{class:"font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap"},{default:o(()=>i[12]||(i[12]=[g("Макетов всего")])),_:1}),r("div",Rt,[a(k,{modelValue:l(d).makets,"onUpdate:modelValue":i[4]||(i[4]=h=>l(d).makets=h),placeholder:"Макетов всего",type:"number",class:E(l(d).makets?"":"outline outline-1 outline-rose-300")},null,8,["modelValue","class"])])]),l(F)==="B2B"?(c(),D("div",Nt,[a(m,{class:"font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap"},{default:o(()=>i[13]||(i[13]=[g("Переход в мессенджер")])),_:1}),r("div",Bt,[a(k,{modelValue:l(d).redirectToMSG,"onUpdate:modelValue":i[5]||(i[5]=h=>l(d).redirectToMSG=h),placeholder:"Переход в мессенджер",type:"number",class:E(l(d).redirectToMSG?"":"outline outline-1 outline-rose-300")},null,8,["modelValue","class"])])])):j("",!0),a(H,{disabled:l(W),onClick:J},{default:o(()=>i[14]||(i[14]=[g(" Создать ")])),_:1},8,["disabled"])]),r("div",Kt,[r("span",null," Менеджер: "+M(l(U).manager),1),r("span",null," Сумма продаж: "+M(l(U).dealSales)+"р.",1),r("span",null," Сумма доп.продаж: "+M(l(U).dopSales)+"р. ",1),r("span",null," Количество сделок: "+M(l(U).dealsAmount),1),r("span",null," Средний чек: "+M(l(U).averageBill)+"р.",1),r("span",null," Сделок день в день: "+M(l(U).dealsDayToDayCount),1)])]),_:1}),a(Y)]),_:1})]),r("div",At,[r("div",Pt,[(c(!0),D(N,null,O(l(P),h=>(c(),S(ee,{key:h.title,class:"min-w-[150px] grow"},{default:o(()=>[a(s,{class:"p-3 pb-2"},{default:o(()=>[a(_,null,{default:o(()=>[g(M(h.title),1)]),_:2},1024),a(B,{class:"text-3xl font-semibold whitespace-nowrap"},{default:o(()=>[g(M(h.value),1)]),_:2},1024)]),_:2},1024)]),_:2},1024))),128))]),a(te,{"model-value":l(b),"onUpdate:modelValue":v},null,8,["model-value"]),r("div",Gt,[a(ne,{data:l($),columns:l(St),managers:l(T).map(h=>({label:h.fullName,value:h.fullName})),onTableSorted:i[6]||(i[6]=h=>X(h)),onOnDeleteItem:q},null,8,["data","columns","managers"])])])])}}}),Ot={class:"flex mb-2 justify-between"},zt={class:"ml-[290px]"},jt={class:"bg-slate-100"},Et=Z({__name:"RopsDataTable",props:{columns:{},data:{},wFilters:{}},emits:["table-sorted","on-delete-item"],setup(e,{emit:f}){const I=e,u=V(0),b=V([]),T=V([]),F=V({}),d=De({get data(){return I.data},get columns(){return I.columns},getCoreRowModel:Ie(),getSortedRowModel:Te(),getFilteredRowModel:Ve(),onSortingChange:n=>se(n,b),onColumnFiltersChange:n=>se(n,T),onColumnVisibilityChange:n=>se(n,F),state:{get sorting(){return b.value},get columnFilters(){return T.value},get columnVisibility(){return F.value}},meta:{deleteItem:n=>A(n.id)}}),P=f,A=n=>{P("on-delete-item",n)};return oe(()=>d.getSortedRowModel().rows,n=>{const $=n.map(U=>U.original.id);P("table-sorted",$)},{deep:!0}),(n,$)=>{const U=He,L=p,G=me,W=Re,J=pe,q=ge,X=Ke,v=Ge,x=Be,i=Pe,B=Ae,_=Ne;return c(),D(N,null,[r("div",Ot,[r("div",zt,[(c(),S(U,{key:n.wFilters.length,table:l(d),"w-filters":n.wFilters},null,8,["table","w-filters"]))]),r("div",null,[a(q,null,{default:o(()=>[a(G,null,{default:o(()=>[a(L,{variant:"outline",class:"ml-auto"},{default:o(()=>[$[0]||($[0]=g(" Колонки ")),a(l($e),{class:"w-4 h-4 ml-2"})]),_:1})]),_:1}),a(J,{class:"w-[180px]"},{default:o(()=>[(c(!0),D(N,null,O(l(d).getAllColumns().filter(s=>s.getCanHide()),s=>(c(),D("div",{key:s.id},[a(W,{checked:s.getIsVisible(),"onUpdate:checked":m=>{s.toggleVisibility(!!m)}},null,8,["checked","onUpdate:checked"]),g(" "+M(s.columnDef.ruName),1)]))),128))]),_:1})]),_:1})])]),r("div",jt,[a(_,null,{default:o(()=>[a(x,{class:"bg-white"},{default:o(()=>[(c(!0),D(N,null,O(l(d).getHeaderGroups(),s=>(c(),S(v,{key:s.id,class:""},{default:o(()=>[(c(!0),D(N,null,O(s.headers,m=>(c(),S(X,{key:m.id},{default:o(()=>[m.isPlaceholder?j("",!0):(c(),S(l(ce),{key:0,render:m.column.columnDef.header,props:m.getContext()},null,8,["render","props"]))]),_:2},1024))),128))]),_:2},1024))),128))]),_:1}),a(B,null,{default:o(()=>{var s;return[(s=l(d).getRowModel().rows)!=null&&s.length?(c(!0),D(N,{key:0},O(l(d).getRowModel().rows,m=>(c(),S(v,{key:m.id,class:E([l(u)===m.original.id?"bg-slate-300/70":"bg-slate-100","cursor-pointer"]),"data-state":m.getIsSelected()?"selected":void 0},{default:o(()=>[(c(!0),D(N,null,O(m.getVisibleCells(),k=>(c(),S(i,{key:k.id},{default:o(()=>[a(l(ce),{render:k.column.columnDef.cell,props:k.getContext()},null,8,["render","props"])]),_:2},1024))),128))]),_:2},1032,["class","data-state"]))),128)):(c(),S(v,{key:1},{default:o(()=>[a(i,{colspan:n.columns.length,class:"text-left"},{default:o(()=>$[1]||($[1]=[g(" Нет результатов. ")])),_:1},8,["colspan"])]),_:1}))]}),_:1})]),_:1})])],64)}}}),Lt=[{accessorKey:"workSpace",ruName:"Отдел",header:({column:e})=>t(p,{variant:"ghost",onClick:()=>e.toggleSorting(e.getIsSorted()==="asc"),class:"text-center h-full w-full"},()=>["Отдел",t(w,{class:"ml-2 h-4 w-4"})]),cell:({row:e})=>t("div",{class:"text-center"},e.getValue("workSpace")),filterFn:(e,f,I)=>I.includes(e.getValue(f))},{accessorKey:"date",ruName:"Дата",header:({column:e})=>t(p,{variant:"ghost",onClick:()=>e.toggleSorting(e.getIsSorted()==="asc"),class:"text-center h-full w-full"},()=>["Дата",t(w,{class:"ml-2 h-4 w-4"})]),cell:({row:e})=>t("div",{class:"text-center"},e.getValue("date"))},{accessorKey:"calls",ruName:"Заявки",header:({column:e})=>t(p,{variant:"ghost",onClick:()=>e.toggleSorting(e.getIsSorted()==="asc"),class:"text-center h-full w-full"},()=>["Заявки",t(w,{class:"ml-2 h-4 w-4"})]),cell:({row:e})=>t("div",{class:"text-center"},e.getValue("calls"))},{accessorKey:"totalSales",ruName:"Общая сумма продаж",header:({column:e})=>t(p,{variant:"ghost",onClick:()=>e.toggleSorting(e.getIsSorted()==="asc"),class:"text-center h-full w-full text-wrap"},()=>["Общая сумма продаж",t(w,{class:"ml-2 h-4 w-4"})]),cell:({row:e})=>t("div",{class:"text-center"},z(e.getValue("totalSales"))+"₽")},{accessorKey:"dealSales",ruName:"Сумма сделок",header:({column:e})=>t(p,{variant:"ghost",onClick:()=>e.toggleSorting(e.getIsSorted()==="asc"),class:"text-center h-full w-full"},()=>["Сумма сделок",t(w,{class:"ml-2 h-4 w-4"})]),cell:({row:e})=>t("div",{class:"text-center"},z(e.getValue("dealSales"))+"₽")},{accessorKey:"dealsAmount",ruName:"Количество сделок",header:({column:e})=>t(p,{variant:"ghost",onClick:()=>e.toggleSorting(e.getIsSorted()==="asc"),class:"text-center h-full w-full text-wrap"},()=>["Количество сделок",t(w,{class:"ml-2 h-4 w-4"})]),cell:({row:e})=>t("div",{class:"text-center"},e.getValue("dealsAmount"))},{accessorKey:"dopSales",ruName:"Сумма доп. продаж",header:({column:e})=>t(p,{variant:"ghost",onClick:()=>e.toggleSorting(e.getIsSorted()==="asc"),class:"text-center h-full w-full text-wrap"},()=>["Сумма доп. продаж",t(w,{class:"ml-2 h-4 w-4"})]),cell:({row:e})=>t("div",{class:"text-center"},z(e.getValue("dopSales"))+"₽")},{accessorKey:"averageBill",ruName:"Средний чек",header:({column:e})=>t(p,{variant:"ghost",onClick:()=>e.toggleSorting(e.getIsSorted()==="asc"),class:"text-center h-full w-full text-wrap"},()=>["Средний чек",t(w,{class:"ml-2 h-4 w-4"})]),cell:({row:e})=>t("div",{class:"text-center"},z(e.getValue("averageBill"))+"₽")},{accessorKey:"makets",ruName:"Макеты",header:({column:e})=>t(p,{variant:"ghost",onClick:()=>e.toggleSorting(e.getIsSorted()==="asc"),class:"text-center h-full w-full"},()=>["Макеты",t(w,{class:"ml-2 h-4 w-4"})]),cell:({row:e})=>t("div",{class:"text-center"},e.getValue("makets"))},{accessorKey:"maketsDayToDay",ruName:"Макеты день в день",header:({column:e})=>t(p,{variant:"ghost",onClick:()=>e.toggleSorting(e.getIsSorted()==="asc"),class:"text-center h-full w-full text-wrap"},()=>["Макеты день в день",t(w,{class:"ml-2 h-4 w-4"})]),cell:({row:e})=>t("div",{class:"text-center"},e.getValue("maketsDayToDay"))},{accessorKey:"conversionMaketDayToDay",ruName:"% макет день в день",header:({column:e})=>t(p,{variant:"ghost",onClick:()=>e.toggleSorting(e.getIsSorted()==="asc"),class:"text-center h-full w-full text-wrap"},()=>["% макет день в день",t(w,{class:"ml-2 h-4 w-4"})]),cell:({row:e})=>t("div",{class:"text-center"},e.getValue("conversionMaketDayToDay")+"%")},{accessorKey:"redirectToMSG",ruName:"Переходы в мессенджер",header:({column:e})=>t(p,{variant:"ghost",onClick:()=>e.toggleSorting(e.getIsSorted()==="asc"),class:"text-center h-full w-full text-wrap"},()=>["Переходы в мессенджер",t(w,{class:"ml-2 h-4 w-4"})]),cell:({row:e})=>t("div",{class:"text-center"},e.getValue("redirectToMSG"))},{accessorKey:"conversion",ruName:"Конверсия",header:({column:e})=>t(p,{variant:"ghost",onClick:()=>e.toggleSorting(e.getIsSorted()==="asc"),class:"text-center h-full w-full"},()=>["Конверсия",t(w,{class:"ml-2 h-4 w-4"})]),cell:({row:e})=>t("div",{class:"text-center"},e.getValue("conversion")+"%")},{accessorKey:"conversionMaket",ruName:"Конверсия в макет",header:({column:e})=>t(p,{variant:"ghost",onClick:()=>e.toggleSorting(e.getIsSorted()==="asc"),class:"text-center h-full w-full text-wrap"},()=>["Конверсия в макет",t(w,{class:"ml-2 h-4 w-4"})]),cell:({row:e})=>t("div",{class:"text-center"},e.getValue("conversionMaket")+"%")},{accessorKey:"conversionToSale",ruName:"Конверсия из макета в продажу",header:({column:e})=>t(p,{variant:"ghost",onClick:()=>e.toggleSorting(e.getIsSorted()==="asc"),class:"text-center h-full w-full text-wrap"},()=>["Конверсия из макета в продажу",t(w,{class:"ml-2 h-4 w-4"})]),cell:({row:e})=>t("div",{class:"text-center"},e.getValue("conversionToSale")+"%")},{accessorKey:"dealsDayToDayCount",ruName:"Заказы день в день",header:({column:e})=>t(p,{variant:"ghost",onClick:()=>e.toggleSorting(e.getIsSorted()==="asc"),class:"text-center h-full w-full text-wrap"},()=>["Заказы день в день",t(w,{class:"ml-2 h-4 w-4"})]),cell:({row:e})=>t("div",{class:"text-center"},e.getValue("dealsDayToDayCount"))},{accessorKey:"conversionDealsDayToDay",ruName:"Конверсия заказов день в день",header:({column:e})=>t(p,{variant:"ghost",onClick:()=>e.toggleSorting(e.getIsSorted()==="asc"),class:"text-center h-full w-full text-wrap"},()=>["Конверсия заказов день в день",t(w,{class:"ml-2 h-4 w-4"})]),cell:({row:e})=>t("div",{class:"text-center"},e.getValue("conversionDealsDayToDay")+"%")},{accessorKey:"callCost",ruName:"Стоимость заявки",header:({column:e})=>t(p,{variant:"ghost",onClick:()=>e.toggleSorting(e.getIsSorted()==="asc"),class:"text-center h-full w-full text-wrap"},()=>["Стоимость заявки",t(w,{class:"ml-2 h-4 w-4"})]),cell:({row:e})=>t("div",{class:"text-center"},z(e.getValue("callCost"))+"₽")},{accessorKey:"ddr",ruName:"ДРР",header:({column:e})=>t(p,{variant:"ghost",onClick:()=>e.toggleSorting(e.getIsSorted()==="asc"),class:"text-center h-full w-full"},()=>["ДРР",t(w,{class:"ml-2 h-4 w-4"})]),cell:({row:e})=>t("div",{class:"text-center"},e.getValue("ddr")+"%")},{id:"actions",header:()=>t("div",{class:"text-center"},"Действия"),enableHiding:!1,cell:({row:e,table:f})=>{const I=e.original;return t(p,{class:"h-5 px-1",item:I,onClick:()=>{var u;return(u=f.options.meta)==null?void 0:u.deleteItem(I)}},()=>"Удалить")}}],Wt={class:"flex gap-2 w-full"},qt={class:"min-w-[250px]"},Jt={class:"flex flex-col gap-5"},Xt={class:"relative"},Qt={class:"relative w-full"},Yt={class:"flex gap-2 w-full"},Zt={class:"relative"},ea={class:"flex gap-2"},ta={class:"relative"},aa={class:"flex gap-2"},la={class:"relative"},sa={class:"flex gap-2"},oa={key:0,class:"relative"},na={class:"flex gap-2"},ra={class:"flex flex-col gap-1 mt-4 text-slate-500"},ca={class:"w-full overflow-hidden"},ia={class:"flex flex-col gap-1 mb-2"},da={class:"flex gap-2"},ua={class:"flex gap-2"},ma={class:"flex gap-2"},pa={class:"mt-[-34px]"},ga=Z({__name:"RopsReports",props:{period:{}},setup(e){const{$useApi:f}=Ue();function I(_){return Array.from(_.reduce((s,m)=>s.set(m.value,m),new Map)).map(([,s])=>s)}const u=e,b=V({start:new Date().toISOString().slice(0,7)+"-01",end:new Date().toISOString().slice(0,10)}),T=V(u.period),F=V([]),d=V("Не выбран"),P=V([]),A=V([{title:"Сумма продаж",value:"0"},{title:"Средний чек",value:"0"},{title:"Конверсия",value:"0"},{title:"Стоимость заявки",value:"0"}]),n=V({date:new Date().toISOString().slice(0,10),workSpaceId:0,calls:0,makets:0,maketsDayToDay:0,redirectToMSG:0});function $(){return`2025-03-${(Math.floor(Math.random()*31)+1).toString().padStart(2,"0")}`}const U=["Офис А","Офис Б","Офис В","Склад 1","Склад 2","Центр","Юг","Север","Запад","Восток"],L=V(Array.from({length:10},(_,s)=>({id:s+1,date:$(),workSpaceId:Math.floor(Math.random()*10)+1,calls:Math.floor(Math.random()*100),dealSales:Math.floor(Math.random()*5e5),dealsAmount:Math.floor(Math.random()*100),dopSales:Math.floor(Math.random()*2e5),totalSales:Math.floor(Math.random()*1e6),averageBill:Math.floor(Math.random()*5e4),makets:Math.floor(Math.random()*50),conversion:Number((Math.random()*100).toFixed(2)),conversionMaket:Number((Math.random()*100).toFixed(2)),conversionToSale:Number((Math.random()*100).toFixed(2)),dealsDayToDayCount:Math.floor(Math.random()*30),conversionDealsDayToDay:Number((Math.random()*100).toFixed(2)),workSpace:U[s],callCost:Math.floor(Math.random()*1e4),ddr:Number((Math.random()*50).toFixed(2)),dateExpensesPrice:Math.floor(Math.random()*1e5),redirectToMSG:Math.floor(Math.random()*100),maketsDayToDay:Math.floor(Math.random()*50)}))),G=V({workSpace:"Не выбран",date:new Date().toISOString().slice(0,10),workSpaceId:0,dealSales:0,dealsAmount:0,dopSales:0,totalSales:0,averageBill:0,dealsDayToDayCount:0}),W=async()=>{const{data:_}=await f.get("reports/workspaces-list")||[];F.value=_||[]},J=async _=>{const{data:s}=await f.get(`/reports/workspace/${_}/data`,{params:{date:n.value.date}});G.value=s,console.log(s)},q=V(!0),X=async()=>{const{data:_}=await f.post("reports/rop",n.value);n.value.calls=0,n.value.makets=0,n.value.maketsDayToDay=0,n.value.redirectToMSG=0,await v()},v=async()=>{const{data:_}=await f.get("reports/rops",{params:{period:T.value}});L.value=_,P.value=_.map(s=>({value:s.workSpace,label:s.workSpace}))},x=async _=>{const{data:s}=await f.get("reports/rops/range",{params:_});L.value=s,P.value=s.map(m=>({value:m.workSpace,label:m.workSpace}))},i=async _=>{console.log(_),await f.delete("reports/rop/"+_),await v()},B=_=>{const s=L.value.filter(C=>_.includes(C.id)),m=s.reduce((C,R)=>C+(R.totalSales??0),0),k=s.reduce((C,R)=>C+(R.dealsAmount??0),0),K=s.reduce((C,R)=>C+R.calls,0),H=k?+(m/k).toFixed():0,Q=K?k/K*100:0,Y=s.reduce((C,R)=>C+(R.dateExpensesPrice??0),0),ee=K?Y/K:0,te=s.reduce((C,R)=>C+R.calls,0),ne=m?Y/m*100:0,h=s.reduce((C,R)=>C+R.makets,0),ae=h?h/te*100:0,le=h?k/h*100:0,y=k?+(Y/k).toFixed():0;function re(C,R){return new Date(C,R,0).getDate()}const ie=re(+T.value.split("-")[0],+T.value.split("-")[1]),Oe=new Date().toISOString().slice(8,10),ze=+(m/+Oe*ie).toFixed(),je=s.reduce((C,R)=>C+(R.redirectToMSG??0),0),fe=s.filter(C=>C.workSpace==="B2B").reduce((C,R)=>C+R.calls,0),Ee=fe?je/fe*100:0,_e=s.filter(C=>C.workSpace==="ВК").reduce((C,R)=>C+R.calls,0),Le=s.filter(C=>C.workSpace==="ВК").reduce((C,R)=>C+(R.maketsDayToDay??0),0),We=_e?Le/_e*100:0;A.value=[{title:`Сумма продаж (сделок: ${k})`,value:z(m)+"₽"},{title:"Средний чек",value:z(H)+"₽"},{title:"Заявки",value:te.toFixed()},{title:"Стоимость заявки",value:ee.toFixed(2)+"₽"},{title:"ДДР",value:ne.toFixed(2)+"%"},{title:"Конверсия",value:Q.toFixed(2)+"%"},{title:"% в макет",value:ae.toFixed(2)+"%"},{title:"% из макета в продажу",value:le.toFixed(2)+"%"},{title:"Темп",value:z(ze)+"₽"},{title:"Стоимость продажи",value:z(y)+"₽"},{title:"% переход в мессенджер(Авито)",value:Ee.toFixed(2)+"%"},{title:"% день в день(ВК)",value:We.toFixed(2)+"%"}]};return Fe(()=>{W(),v()}),oe(n,async()=>{/^\d{4}-\d{2}-\d{2}$/.test(n.value.date)&&n.value.workSpaceId!==0&&await J(n.value.workSpaceId);const{calls:_,workSpaceId:s,makets:m,maketsDayToDay:k}=n.value;_&&s&&m&&k?q.value=!1:q.value=!0},{deep:!0}),oe(T,async()=>{await v()}),(_,s)=>{const m=ye,k=xe,K=we,H=be,Q=ue,Y=Ce,ee=p,te=Se,ne=ke,h=he,ae=Me,le=Et;return c(),D("div",Wt,[r("div",qt,[a(h,null,{default:o(()=>[a(K,null,{default:o(()=>[a(m,null,{default:o(()=>s[7]||(s[7]=[g(" Добавить отчет ")])),_:1}),a(k)]),_:1}),a(te,null,{default:o(()=>[r("div",Jt,[r("div",Xt,[l(n).date?(c(),S(H,{key:0,class:"font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap"},{default:o(()=>s[8]||(s[8]=[g("Дата смены")])),_:1})):j("",!0),a(Q,{modelValue:l(n).date,"onUpdate:modelValue":s[0]||(s[0]=y=>l(n).date=y),type:"date",placeholder:"Дата смены",class:E(l(n).date?"":"outline outline-1 outline-rose-300")},null,8,["modelValue","class"])]),r("div",Qt,[l(n).workSpaceId!==0?(c(),S(H,{key:0,class:"font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap"},{default:o(()=>s[9]||(s[9]=[g("Отдел")])),_:1})):j("",!0),r("div",Yt,[a(Y,{items:l(F).map(y=>({value:y.id,label:y.title})),class:"w-full",label:"Выберите отдел",onSelectedItem:s[1]||(s[1]=y=>{var re;l(n).workSpaceId=y,d.value=((re=l(F).find(ie=>ie.id===y))==null?void 0:re.title)||""})},null,8,["items"])])]),r("div",Zt,[a(H,{class:"font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap"},{default:o(()=>s[10]||(s[10]=[g("Количество заявок")])),_:1}),r("div",ea,[a(Q,{modelValue:l(n).calls,"onUpdate:modelValue":s[2]||(s[2]=y=>l(n).calls=y),placeholder:"Количество заявок",type:"number",class:E(l(n).calls?"":"outline outline-1 outline-rose-300")},null,8,["modelValue","class"])])]),r("div",ta,[a(H,{class:"font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap"},{default:o(()=>s[11]||(s[11]=[g("Макетов всего")])),_:1}),r("div",aa,[a(Q,{modelValue:l(n).makets,"onUpdate:modelValue":s[3]||(s[3]=y=>l(n).makets=y),placeholder:"Макетов всего",type:"number",class:E(l(n).makets?"":"outline outline-1 outline-rose-300")},null,8,["modelValue","class"])])]),r("div",la,[a(H,{class:"font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap"},{default:o(()=>s[12]||(s[12]=[g("Макетов день в день")])),_:1}),r("div",sa,[a(Q,{modelValue:l(n).maketsDayToDay,"onUpdate:modelValue":s[4]||(s[4]=y=>l(n).maketsDayToDay=y),placeholder:"Макетов день в день",type:"number",class:E(l(n).makets?"":"outline outline-1 outline-rose-300")},null,8,["modelValue","class"])])]),l(d)==="B2B"?(c(),D("div",oa,[a(H,{class:"font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap"},{default:o(()=>s[13]||(s[13]=[g("Переход в мессенджер")])),_:1}),r("div",na,[a(Q,{modelValue:l(n).redirectToMSG,"onUpdate:modelValue":s[5]||(s[5]=y=>l(n).redirectToMSG=y),placeholder:"Переход в мессенджер",type:"number",class:E(l(n).makets?"":"outline outline-1 outline-rose-300")},null,8,["modelValue","class"])])])):j("",!0),a(ee,{disabled:l(q),onClick:X},{default:o(()=>s[14]||(s[14]=[g(" Создать ")])),_:1},8,["disabled"])]),r("div",ra,[r("span",null," Отдел: "+M(l(G).workSpace),1),r("span",null," Сумма продаж: "+M(l(G).dealSales)+"р.",1),r("span",null," Сумма доп.продаж: "+M(l(G).dopSales)+"р. ",1),r("span",null," Сумма общая: "+M(l(G).totalSales)+"р. ",1),r("span",null," Количество сделок: "+M(l(G).dealsAmount),1),r("span",null," Средний чек: "+M(l(G).averageBill)+"р.",1),r("span",null," Сделок день в день: "+M(l(G).dealsDayToDayCount),1)])]),_:1}),a(ne)]),_:1})]),r("div",ca,[r("div",ia,[r("div",da,[(c(!0),D(N,null,O(l(A).slice(0,4),y=>(c(),S(h,{key:y.title,class:"w-full grow"},{default:o(()=>[a(K,{class:"py-1 px-3"},{default:o(()=>[a(k,null,{default:o(()=>[g(M(y.title),1)]),_:2},1024),a(m,{class:"text-2xl font-semibold whitespace-nowrap"},{default:o(()=>[g(M(y.value),1)]),_:2},1024)]),_:2},1024)]),_:2},1024))),128))]),r("div",ua,[(c(!0),D(N,null,O(l(A).slice(4,8),y=>(c(),S(h,{key:y.title,class:"w-full grow"},{default:o(()=>[a(K,{class:"py-1 px-3"},{default:o(()=>[a(k,null,{default:o(()=>[g(M(y.title),1)]),_:2},1024),a(m,{class:"text-2xl font-semibold whitespace-nowrap"},{default:o(()=>[g(M(y.value),1)]),_:2},1024)]),_:2},1024)]),_:2},1024))),128))]),r("div",ma,[(c(!0),D(N,null,O(l(A).slice(8),y=>(c(),S(h,{key:y.title,class:"w-full grow"},{default:o(()=>[a(K,{class:"py-1 px-3"},{default:o(()=>[a(k,null,{default:o(()=>[g(M(y.title),1)]),_:2},1024),a(m,{class:"text-2xl font-semibold whitespace-nowrap"},{default:o(()=>[g(M(y.value),1)]),_:2},1024)]),_:2},1024)]),_:2},1024))),128))])]),a(ae,{"model-value":l(b),"onUpdate:modelValue":x},null,8,["model-value"]),r("div",pa,[a(le,{data:l(L),"w-filters":I(l(P)),columns:l(Lt),onTableSorted:s[6]||(s[6]=y=>B(y)),onOnDeleteItem:i},null,8,["data","w-filters","columns"])])])])}}}),fa={class:"relative h-screen hidden-scrollbar"},_a={class:"w-full fixed z-10"},va={class:"h-full flex flex-col p-4 gap-2 mx-[auto] max-w-[2048px] pt-16 min-w-[1024px]"},ha={class:"flex gap-6"},wa={class:"flex gap-2 w-full h-full"},ya={class:"ml-[260px] mt-[-48px]"},La=Z({__name:"index",setup(e){pt({title:"Отчеты | Easy CRM"});const f=V(new Date().toISOString().slice(0,7));return(I,u)=>{const b=qe,T=ue,F=Qe,d=Xe,P=Ht,A=Ye,n=ga,$=Je;return c(),D("div",fa,[r("div",_a,[a(b)]),r("div",va,[r("div",ha,[a(T,{modelValue:l(f),"onUpdate:modelValue":u[0]||(u[0]=U=>ut(f)?f.value=U:null),type:"month",class:"w-[250px]"},null,8,["modelValue"])]),r("div",wa,[a($,{"default-value":"Менеджер",class:"w-full"},{default:o(()=>[r("div",ya,[a(d,null,{default:o(()=>[a(F,{value:"Менеджер"},{default:o(()=>u[1]||(u[1]=[g("Менеджер")])),_:1}),a(F,{value:"РОП"},{default:o(()=>u[2]||(u[2]=[g("РОП")])),_:1}),a(F,{value:"Менеджер ведения"},{default:o(()=>u[3]||(u[3]=[g("Менеджер ведения")])),_:1}),a(F,{value:"Дизайнер"},{default:o(()=>u[4]||(u[4]=[g("Дизайнер")])),_:1})]),_:1})]),a(A,{value:"Менеджер",class:""},{default:o(()=>[(c(),S(P,{key:l(f),period:l(f)},null,8,["period"]))]),_:1}),a(A,{value:"РОП"},{default:o(()=>[(c(),S(n,{key:l(f),period:l(f)},null,8,["period"]))]),_:1}),a(A,{value:"Менеджер ведения"},{default:o(()=>u[5]||(u[5]=[r("h2",null,"Отчет: Менеджер ведения",-1)])),_:1}),a(A,{value:"Дизайнер"},{default:o(()=>u[6]||(u[6]=[r("h2",null,"Отчет: Дизайнер",-1)])),_:1})]),_:1})])])])}}});export{La as default};
