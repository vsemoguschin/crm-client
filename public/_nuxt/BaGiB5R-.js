import{_ as re}from"./5D9ayNEF.js";import{_ as ce,b as _e,a as ue}from"./BOaGZJlZ.js";import H from"./BsX0nDRz.js";import{_ as F,a as pe}from"./abOcypeU.js";import{_ as le,a as se,b as ae,d as oe,e as J,f as K,g as Q,h as W,i as X}from"./BIbUJbcM.js";import{_ as ne,g as Y,h as fe}from"./DnoJaZrw.js";import{a as ie,_ as me}from"./C2hrqJ_b.js";import{f as A,o as n,h as D,w as t,a as i,c as k,r as z,F as E,b as e,d as o,t as O,y as N,z as j,k as U,u as b,q as V,B as te,x as ge}from"./BTbT73Y8.js";import{_ as ve}from"./DOAn8S8T.js";import{_ as Z}from"./CotC41Rz.js";import{_ as de,b as he,a as we}from"./DgxT5Y6U.js";import{u as ye}from"./B0t3hkIB.js";import"./CgKHxuS9.js";import"./BPjn5jLe.js";import"./CvPl5tTm.js";import"./DlAUqK2U.js";import"./D_P99AUt.js";import"./xHKAbfE9.js";import"./14TUkJ44.js";const xe={class:"flex flex-col justify-between flex-1"},$e=A({__name:"List",props:{deals:{},total:{}},emits:["deal-clicked","deal-loaded"],setup(M,{emit:w}){const{$useApi:y}=j(),u=w,m=async r=>{try{await y.patch(`/production/deal/${r}/status/1`)}catch(g){console.log(g.response.data.message,32422)}u("deal-loaded")},d=r=>{u("deal-clicked",r)};return(r,g)=>{const l=le,p=ne,c=F,x=se,f=ae,v=oe,h=ie;return n(),D(h,{class:"pr-2"},{default:t(()=>[i("div",null,[(n(!0),k(E,null,z(r.deals,(a,s)=>(n(),D(v,{key:s,class:"flex cursor-pointer mb-2",onClick:$=>d(a.id)},{default:t(()=>[e(x,{class:"flex-1"},{default:t(()=>[i("div",xe,[e(l,null,{default:t(()=>[o(O(a.title),1)]),_:2},1024),e(p,{class:"flex flex-col"},{default:t(()=>[i("div",null,"Срок: "+O(a.deadline),1)]),_:2},1024),a.status==="Создана"?(n(),D(c,{key:0,class:"self-end",onClick:()=>m(a.id)},{default:t(()=>[o(" В работу ")]),_:2},1032,["onClick"])):N("",!0)])]),_:2},1024),e(f,{class:"p-0"})]),_:2},1032,["onClick"]))),128))])]),_:1})}}}),De={class:""},Ue=i("div",{class:"flex justify-between w-full"},null,-1),ke=A({__name:"CreateModal",props:{deal:{}},emits:["order-created"],setup(M,{emit:w}){const y=M,u=U(),m=U({}),d=U(!1),r=g=>{const l=g[0],p=g[1];console.log(l),m.value={...p},u.value={...l}};return(g,l)=>{const p=H,c=F,x=J,f=K,v=Z,h=Q,a=de,s=Y,$=W,C=X;return n(),k("div",De,[e(C,{open:b(d),"onUpdate:open":l[0]||(l[0]=T=>V(d)?d.value=T:null)},{default:t(()=>[e(x,{"as-child":""},{default:t(()=>[e(c,null,{default:t(()=>[e(p,{name:"akar-icons:plus",color:"white",size:"25px"})]),_:1})]),_:1}),e($,{class:"flex flex-col max-w-min"},{default:t(()=>[e(h,null,{default:t(()=>[e(f,null,{default:t(()=>[o("Создать заказ")]),_:1}),e(v,null,{default:t(()=>[o(' Заполни все поля и нажми "Сохранить" ')]),_:1})]),_:1}),e(a,{deal:y.deal,onGetNewOrderDatas:r},null,8,["deal"]),e(s,null,{default:t(()=>[Ue]),_:1})]),_:1})]),_:1},8,["open"])])}}}),Ce={class:"flex gap-6"},be={class:"flex justify-between w-full"},Oe=A({__name:"EditModal",props:{order:{}},emits:["order-edited"],setup(M,{emit:w}){const{$useApi:y}=j(),u=M,m=U(),d=U(!1),r=p=>{m.value={...p[0]}},g=w,l=async()=>{try{await y.patch(`/orders/${u.order.id}`,{...m.value}),g("order-edited","data"),d.value=!1;return}catch(p){console.log(p)}};return(p,c)=>{const x=H,f=F,v=J,h=K,a=Z,s=Q,$=de,C=Y,T=W,B=X;return n(),k("div",null,[e(B,{open:b(d),"onUpdate:open":c[0]||(c[0]=L=>V(d)?d.value=L:null)},{default:t(()=>[e(v,{"as-child":""},{default:t(()=>[e(f,{class:""},{default:t(()=>[e(x,{name:"mingcute:edit-line",color:"white",size:"25px"})]),_:1})]),_:1}),e(T,{class:"flex flex-col max-w-[1200px]"},{default:t(()=>[e(s,null,{default:t(()=>[e(h,null,{default:t(()=>[o("Редактировать заказ")]),_:1}),e(a,null,{default:t(()=>[o(' Заполни все поля и нажми "Сохранить" ')]),_:1})]),_:1}),i("div",Ce,[e($,{order:u.order,onGetEditedOrderDatas:r},null,8,["order"])]),e(C,{class:"w-full"},{default:t(()=>[i("div",be,[e(f,null,{default:t(()=>[o(" Отменить ")]),_:1}),e(f,{onClick:l},{default:t(()=>[o(" Сохранить ")]),_:1})])]),_:1})]),_:1})]),_:1},8,["open"])])}}}),Me={class:"flex gap-6"},Te={class:"flex justify-between w-full"},Ie=A({__name:"CreateModal",props:{deal:{}},emits:["delivery-created"],setup(M,{emit:w}){const{$useApi:y}=j(),u=M,m=U({}),d=U(!1),r=p=>{m.value={...p}},g=w,l=async()=>{await y.post(`/deals/${u.deal.id}/deliveries/`,{...m.value}),g("delivery-created","data"),d.value=!1};return(p,c)=>{const x=F,f=J,v=K,h=Z,a=Q,s=he,$=Y,C=W,T=X;return n(),k("div",null,[e(T,{open:b(d),"onUpdate:open":c[0]||(c[0]=B=>V(d)?d.value=B:null)},{default:t(()=>[e(f,{"as-child":""},{default:t(()=>[e(x,null,{default:t(()=>[o(" + ДОБАВИТЬ ПОДАРОК ")]),_:1})]),_:1}),e(C,{class:"flex flex-col"},{default:t(()=>[e(a,null,{default:t(()=>[e(v,null,{default:t(()=>[o("Добавить доставку")]),_:1}),e(h,null,{default:t(()=>[o(' Заполни все поля и нажми "Сохранить" ')]),_:1})]),_:1}),i("div",Me,[e(s,{onGetNewDeliveryDatas:r})]),e($,{class:"w-full"},{default:t(()=>[i("div",Te,[e(x,null,{default:t(()=>[o(" Отменить ")]),_:1}),e(x,{onClick:l},{default:t(()=>[o(" Сохранить ")]),_:1})])]),_:1})]),_:1})]),_:1},8,["open"])])}}}),Be={class:"flex flex-col justify-start w-full"},Ne={class:"flex"},Ae={class:"w-[200px] mr-3 rounded overflow-hidden"},Le=["src"],Se={class:"flex flex-col"},Ve=["href"],Fe=["href"],je={class:"flex gap-2"},ze={class:"flex justify-between"},Ee=A({__name:"Card",props:{deal:{}},emits:["deal-updated","deal-loded","order-moved"],setup(M,{emit:w}){const{$useApi:y}=j(),u=M,m=w,d=()=>{console.log("deal-updated"),m("deal-updated",u.deal.id)},r=async l=>{await y.delete(`/orders/${l}`),m("deal-updated",u.deal.id)},g=async l=>{await y.patch(`/orders/${l.id}/stage/${l.stageId+1}`),m("order-moved",u.deal)};return(l,p)=>{const c=le,x=ne,f=ve,v=F,h=se,a=ae,s=oe,$=ke,C=Oe,T=H,B=me,L=ie,P=we,G=Ie,q=fe;return n(),D(s,{class:"flex flex-col overflow-hidden bg-slate-100"},{default:t(()=>[e(h,{class:"flex flex-row items-start bg-slate-50 pb-1"},{default:t(()=>[i("div",Be,[e(c,{class:"flex items-center gap-2 text-lg pb-2"},{default:t(()=>[o(" Информация: "+O(l.deal.title),1)]),_:1}),e(x,null,{default:t(()=>[o(" Готовность: "+O(l.deal.deadline),1)]),_:1}),e(v,{class:"h-6 mt-3 self-start"},{default:t(()=>[e(f,{to:"/orders/"+l.deal.id},{default:t(()=>[o(" Полная информация ")]),_:1},8,["to"])]),_:1})])]),_:1}),e(a,{class:"p-3 flex flex-col items-center h-full"},{default:t(()=>[l.deal.preorder?(n(),D(s,{key:0,class:"overflow-hidden w-full mb-3"},{default:t(()=>[e(h,{class:"bg-slate-50 pb-1 mb-2"},{default:t(()=>[e(c,null,{default:t(()=>[o(" Карточка дизайна ")]),_:1})]),_:1}),e(a,null,{default:t(()=>{var _;return[i("div",Ne,[i("div",Ae,[i("img",{src:l.deal.preorder.preview,alt:"Preview",class:"preview-image"},null,8,Le)]),i("div",Se,[i("a",{class:"underline decoration-solid cursor-pointer text-blue-600",href:(_=l.deal.preorder)==null?void 0:_.card_link,target:"_blank"},"Ссылка на карточку",8,Ve),i("a",{class:"underline decoration-solid cursor-pointer text-blue-600",href:l.deal.preorder.maket+"?name="+l.deal.title+".cdr&dl=true"},"Макет",8,Fe)])])]}),_:1})]),_:1})):N("",!0),e(s,{class:"mb-3 w-full overflow-hidden"},{default:t(()=>{var _,S;return[e(h,{class:"p-2 pb-2 bg-slate-50 flex"},{default:t(()=>[e(c,{class:"flex items-center"},{default:t(()=>[l.deal.status==="Создана"?(n(),D($,{key:0,deal:l.deal,class:"mr-3 justify-between",onOrderCreated:d},null,8,["deal"])):N("",!0),o(" Список заказов ")]),_:1})]),_:1}),(S=(_=l.deal)==null?void 0:_.orders)!=null&&S.length?(n(),D(a,{key:0,class:"p-2"},{default:t(()=>[e(L,{class:"pb-2"},{default:t(()=>[i("div",je,[(n(!0),k(E,null,z(l.deal.orders,(I,R)=>(n(),k("div",{key:R,class:"mb-2 w-[300px] h-full"},[e(s,null,{default:t(()=>[e(h,{class:"p-2"},{default:t(()=>[i("div",null,[e(c,null,{default:t(()=>[o(O(I.title),1)]),_:2},1024),e(x,null,{default:t(()=>{var ee;return[o(" статус - "+O(((ee=I.stage)==null?void 0:ee.title)||"dfsds"),1)]}),_:2},1024)])]),_:2},1024),e(a,{class:"p-2"},{default:t(()=>[i("div",ze,[e(C,{order:I,onOrderEdited:d},null,8,["order"]),l.deal.status==="Создана"?(n(),D(v,{key:0,onClick:()=>r(I.id)},{default:t(()=>[e(T,{name:"mi:delete",color:"white",size:"25px"})]),_:2},1032,["onClick"])):(n(),D(v,{key:1,onClick:()=>g(I)},{default:t(()=>[o(" Готово ")]),_:2},1032,["onClick"]))])]),_:2},1024)]),_:2},1024)]))),128))]),e(B,{orientation:"horizontal"})]),_:1})]),_:1})):N("",!0)]}),_:1}),e(s,{class:"mb-3 w-full overflow-hidden"},{default:t(()=>{var _,S;return[e(h,{class:"p-2 pb-2 bg-slate-50 flex"},{default:t(()=>[e(c,{class:"flex items-center"},{default:t(()=>[l.deal.status==="Создана"?(n(),D(P,{key:0,deal:l.deal,class:"mr-3",onDeliveryCreated:d},null,8,["deal"])):N("",!0),o(" Список доставок ")]),_:1})]),_:1}),(S=(_=l.deal)==null?void 0:_.deliveries)!=null&&S.length?(n(),D(a,{key:0,class:"p-2"},{default:t(()=>[(n(!0),k(E,null,z(l.deal.deliveries,(I,R)=>(n(),k("div",{key:R,class:"mb-2"},[e(s,null,{default:t(()=>[e(h,{class:"p-2"},{default:t(()=>[i("div",null,[e(c,null,{default:t(()=>[o(O(I.method),1)]),_:2},1024),e(x,null,{default:t(()=>[o(O(I.type),1)]),_:2},1024)])]),_:2},1024),e(a,{class:"p-2"},{default:t(()=>[o(" статус - "+O(I.status),1)]),_:2},1024)]),_:2},1024)]))),128))]),_:1})):N("",!0)]}),_:1}),l.deal.status==="Создана"?(n(),D(G,{key:1,deal:l.deal,class:"mt-3",onDeliveryCreated:d},null,8,["deal"])):N("",!0)]),_:1}),e(q,{class:"flex items-center border-t bg-muted/50 px-6 py-3 mt-3"},{default:t(()=>[o(" ФУТЕР ")]),_:1})]),_:1})}}}),He={class:"flex relative h-screen"},Pe={class:"w-[50px] fixed"},Ge={class:"flex flex-col p-3 h-full w-full ml-[50px]"},qe={key:0,class:"mt-2 flex gap-2 h-[95%]"},Re={class:"flex flex-col w-[50%]"},Je={class:"sm:flex-initial mb-2 pr-2"},Ke={class:"relative"},Qe={class:"flex flex-col w-[50%]"},We={key:1},gt=A({__name:"index",async setup(M){let w,y;const{$useApi:u}=j();ye({title:"Производство | Easy CRM"});const m={id:0,title:"Пусто",price:1e4,status:"null",deadline:"-----",clothingMethod:"string",description:"string",source:"string",adTag:"string",discont:"string",sphere:"string",city:"string",region:"string",cardLink:"string",paid:"string",totalPrice:1,dopsPrice:1,recievedPayments:1,remainder:1,firstPayment:"string",clientType:"string",recievedPay:1,createdAt:"",dealers:[],client:{id:0,fullName:"string",workSpaceId:0,groupId:0,phone:"string",type:"string",chatLink:"string",gender:"string",firstContact:"string",adLink:"string",inn:"string"},preorder:{preview:"string"}},d=U([]),r=U("1"),g=U(""),{data:l}=([w,y]=te(()=>u.get("/stages")),w=await w,y(),w);d.value=l||[];const p=U([]),c=U(m),x=U(0),f=async()=>{const a="production/stage/"+r.value,{data:s}=await u.get(a);p.value=s.deals||[],s.deals.length?await v(s.deals[0].id):c.value=m},v=async a=>{const{data:s}=await u.get(`production/deals/${a}`);r.value!=="1"&&(s.orders=s.orders.filter(C=>C.stageId===+r.value)),c.value=s;const{data:$}=await u.get("kaiten/card/"+s.card_id);$!=="Nope"&&(c.value.preorder=$)},h=async a=>{if(console.log("deal",a.orders.length),a.orders.length>1)return await v(a.id);await f()};return[w,y]=te(()=>f()),await w,y(),ge(r,async()=>{await f()}),(a,s)=>{const $=re,C=ue,T=_e,B=ce,L=H,P=pe,G=$e,q=Ee;return n(),k("div",He,[i("div",Pe,[e($)]),i("div",Ge,[e(B,{modelValue:b(r),"onUpdate:modelValue":s[0]||(s[0]=_=>V(r)?r.value=_:null),"default-value":"1",class:""},{default:t(()=>[e(T,null,{default:t(()=>[(n(!0),k(E,null,z(b(d),_=>(n(),D(C,{key:_.id,value:_.id.toString()},{default:t(()=>[o(O(_.title),1)]),_:2},1032,["value"]))),128))]),_:1})]),_:1},8,["modelValue"]),b(p).length?(n(),k("div",qe,[i("div",Re,[i("form",Je,[i("div",Ke,[e(L,{name:"mi:search",color:"black",size:"15px",class:"absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground"}),e(P,{modelValue:b(g),"onUpdate:modelValue":s[1]||(s[1]=_=>V(g)?g.value=_:null),class:"pl-8 w-full",type:"search",placeholder:"Искать сделки...",onInput:f},null,8,["modelValue"])])]),e(G,{class:"grow",deals:b(p),total:b(x),onDealClicked:v,onDealLoaded:f},null,8,["deals","total"])]),i("div",Qe,[e(q,{class:"grow",deal:b(c),"current-stage":b(r),onDealUpdated:s[2]||(s[2]=async _=>{await v(_)}),onOrderMoved:s[3]||(s[3]=async _=>{await h(_)})},null,8,["deal","current-stage"])])])):(n(),k("div",We,"Пусто..."))])])}}});export{gt as default};