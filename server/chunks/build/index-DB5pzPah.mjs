import { _ as _sfc_main$1 } from './Sidebar-ClYzRSuC.mjs';
import { _ as _sfc_main$2, a as _sfc_main$1$1, b as _sfc_main$3 } from './index-9T5woGxV.mjs';
import { _ as _sfc_main$2$1, a as _sfc_main$1$4, m as managersDataColumns, b as _sfc_main$h } from './table.columns-fbtXIyjW.mjs';
import { _ as _sfc_main$2$2, a as _sfc_main$6, b as _sfc_main$1$3 } from './TabsList-C3eBcFGa.mjs';
import { _ as _sfc_main$7 } from './TabsContent-9LTM_IKf.mjs';
import { _ as _sfc_main$8 } from './TopList-CZi4Ts7u.mjs';
import { _ as _sfc_main$9 } from './Card-D2-UPrX8.mjs';
import { _ as _sfc_main$1$5, a as _sfc_main$b } from './CardTitle-Dyaq6zaM.mjs';
import { _ as _sfc_main$a } from './CardDescription-CwDlX6V_.mjs';
import { _ as _sfc_main$c } from './CardContent-5uJgHkPl.mjs';
import { _ as _sfc_main$m } from './CardFooter-BUlih3MF.mjs';
import { _ as _sfc_main$d } from './Label-Bxzolydd.mjs';
import { _ as _sfc_main$e } from './Switch-BsBEqAPz.mjs';
import { _ as _sfc_main$f } from './ScrollArea-Kzo2fjeX.mjs';
import { a as _sfc_main$g } from './SetPlanModal-BfHKj34I.mjs';
import { _ as _sfc_main$i } from './Separator-DmvFl46f.mjs';
import { _ as _sfc_main$j } from './index-B6vrBiru.mjs';
import { _ as _sfc_main$5$1, a as _sfc_main$l, b as _sfc_main$2$3, c as _sfc_main$1$6, d as _sfc_main$4$1, e as _sfc_main$3$1 } from './TableHeader-CsCuT7pu.mjs';
import { _ as _sfc_main$k } from './TableCaption-CNOU3AES.mjs';
import { u as useMyFormatPrice } from './useMyFormatPrice-CCAsFuev.mjs';
import { d as dateFormat } from './useMyDateFormat-Cn1Jsliy.mjs';
import { defineComponent, ref, watch, mergeProps, unref, isRef, withCtx, createVNode, createBlock, openBlock, createTextVNode, toDisplayString, createCommentVNode, Fragment, renderList, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderClass } from 'vue/server-renderer';
import { Q as Qn } from './vue-datepicker-OP97sJr3.mjs';
import { b as useNuxtApp, u as useHead } from './server.mjs';
import { _ as _sfc_main$1$2, a as _sfc_main$4 } from './SheetTitle-BvqrBQuX.mjs';
import { _ as _sfc_main$5 } from './SheetDescription-PHwQcLA9.mjs';
import './nuxt-link-BxYosf5u.mjs';
import '../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';
import '@iconify/utils';
import 'consola';
import 'node:module';
import 'ipx';
import './index-gpRkqh0i.mjs';
import '@vueuse/core';
import 'reka-ui';
import './utils-TCWotVPY.mjs';
import 'clsx';
import 'tailwind-merge';
import 'lucide-vue-next';
import 'class-variance-authority';
import './DropdownMenuItem-Bzav__sm.mjs';
import 'radix-vue';
import './DropdownMenuSeparator-B4V4iajS.mjs';
import './UserListItem-w8spDyow.mjs';
import './auth-CDeEREL9.mjs';
import 'pinia';
import './isLoading-BaPa0n0V.mjs';
import 'vue-router';
import './PopoverContent-Dy99cMmu.mjs';
import './Checkbox-DKAsiMFR.mjs';
import './TableFooter-DNMPUNqP.mjs';
import '@tanstack/vue-table';
import './DialogContent-BsO2ljLB.mjs';
import './DialogFooter-CQpXS8R1.mjs';
import './Input-DoHPrX2-.mjs';
import './Textarea-oqH4YeW4.mjs';
import './index-BPQNkNDf.mjs';
import '@iconify/vue';
import '@iconify/utils/lib/css/icon';
import 'perfect-debounce';
import 'date-fns';
import 'axios';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import 'unhead/plugins';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const { $useApi } = useNuxtApp();
    useHead({
      title: "\u041C\u0435\u043D\u0435\u0434\u0436\u0435\u0440\u044B | Easy CRM"
    });
    const period = ref(
      (/* @__PURE__ */ new Date()).toISOString().slice(0, 7)
      //'этот месяц'
    );
    const month = ref({
      month: (/* @__PURE__ */ new Date()).getMonth(),
      year: (/* @__PURE__ */ new Date()).getFullYear()
    });
    const managersData = ref([
      {
        id: 0,
        fullName: "None",
        workSpace: "None",
        group: "None",
        plan: 0,
        totalSales: 0,
        dealSales: 0,
        dopSales: 0,
        temp: 0,
        dealsAmount: 0,
        dopsAmount: 0,
        averageBill: 0,
        drr: 0,
        calls: 0,
        makets: 0,
        maketsDayToDay: 0,
        conversionMaketsToCalls: 0,
        conversionMaketsDayToDayToCalls: 0,
        dealsDayToDay: 0,
        dealsDayToDayPrice: 0,
        conversionDealsToCalls: 0,
        dealsWithoutDesigners: 0,
        dealsSalesWithoutDesigners: 0,
        conversionMaketsToSales: 0,
        redirectToMSG: 0,
        totalSalary: 0,
        pays: 0,
        rem: 0,
        dopPays: 0,
        dealPays: 0,
        bonusPercentage: 0,
        bonus: 0,
        shiftBonus: 0,
        shift: 0,
        dealsInfo: [],
        dopsInfo: [],
        topBonus: 0,
        fired: false,
        isIntern: false,
        dealsInfoPrevMounth: [],
        dopsInfoPrevMounth: [],
        salaryPays: []
      }
    ]);
    const currentManager = ref({
      id: 0,
      fullName: "None",
      workSpace: "None",
      group: "None",
      plan: 0,
      totalSales: 0,
      dealSales: 0,
      dopSales: 0,
      temp: 0,
      dealsAmount: 0,
      dopsAmount: 0,
      averageBill: 0,
      drr: 0,
      calls: 0,
      makets: 0,
      maketsDayToDay: 0,
      conversionMaketsToCalls: 0,
      conversionMaketsDayToDayToCalls: 0,
      dealsDayToDay: 0,
      dealsDayToDayPrice: 0,
      conversionDealsToCalls: 0,
      dealsWithoutDesigners: 0,
      dealsSalesWithoutDesigners: 0,
      conversionMaketsToSales: 0,
      redirectToMSG: 0,
      totalSalary: 0,
      pays: 0,
      rem: 0,
      dopPays: 0,
      dealPays: 0,
      bonusPercentage: 0,
      bonus: 0,
      shiftBonus: 0,
      shift: 0,
      dealsInfo: [],
      dopsInfo: [],
      topBonus: 0,
      fired: false,
      isIntern: false,
      salaryPays: [],
      dealsInfoPrevMounth: [],
      dopsInfoPrevMounth: []
    });
    const mainInfo = ref([
      { label: "\u041F\u043B\u0430\u043D", value: "0" }
      //План(+остаток до плана)
    ]);
    const isSheetOpen = ref(false);
    const currentDeal = ref();
    const totalsInfo = ref([
      {
        title: "\u0421\u0443\u043C\u043C\u0430 \u043F\u0440\u043E\u0434\u0430\u0436",
        value: "0"
      }
    ]);
    const getDeal = async (id) => {
      const { data: deal } = await $useApi.get(`/deals/${id}`);
      currentDeal.value = deal;
      isSheetOpen.value = true;
    };
    const characteristicsInfo = ref([
      { label: "\u0414\u0420\u0420 ", value: "32" }
    ]);
    const salaryInfo = ref([
      { label: "\u0417\u041F", value: "0" }
      //сформированная
    ]);
    const topListAvito = ref([
      {
        user: "\u0418\u0432\u0430\u043D\u043E\u0432 \u0418\u0432\u0430\u043D",
        category: "\u0422\u043E\u043F \u0441\u0443\u043C\u043C\u044B \u0437\u0430\u043A\u0430\u0437\u043E\u0432",
        sales: 2e3
      },
      {
        user: "\u0418\u0432\u0430\u043D\u043E\u0432 \u0418\u0432\u0430\u043D",
        category: "\u0422\u043E\u043F \u0441\u0443\u043C\u043C\u044B \u0434\u043E\u043F\u043E\u0432",
        sales: 2e3
      },
      { user: "\u0418\u0432\u0430\u043D\u043E\u0432 \u0418\u0432\u0430\u043D", category: "\u0422\u043E\u043F \u0441\u0440\u0435\u0434\u043D\u0438\u0439 \u0447\u0435\u043A", sales: 2e3 },
      { user: "\u0418\u0432\u0430\u043D\u043E\u0432 \u0418\u0432\u0430\u043D", category: "\u0422\u043E\u043F \u043A\u043E\u043D\u0432\u0435\u0440\u0441\u0438\u044F", sales: 2e3 }
    ]);
    const VkTopSalesManagersList = ref([
      { user: "\u0418\u0432\u0430\u043D\u043E\u0432 \u0418\u0432\u0430\u043D \u0418\u0432\u0430\u043D\u043E\u0432\u0438\u0447", sales: 100500 },
      { user: "\u041F\u0435\u0442\u0440\u043E\u0432 \u041F\u0435\u0442\u0440 \u041F\u0435\u0442\u0440\u043E\u0432\u0438\u0447", sales: 100500 },
      { user: "\u0421\u0438\u0434\u043E\u0440\u043E\u0432 \u0421\u0438\u0434\u043E\u0440 \u0421\u0438\u0434\u043E\u0440\u043E\u0432\u0438\u0447", sales: 100500 }
    ]);
    const VkTopDopSalesManagersList = ref([
      { user: "\u0418\u0432\u0430\u043D\u043E\u0432 \u0418\u0432\u0430\u043D \u0418\u0432\u0430\u043D\u043E\u0432\u0438\u0447", sales: 100500 },
      { user: "\u041F\u0435\u0442\u0440\u043E\u0432 \u041F\u0435\u0442\u0440 \u041F\u0435\u0442\u0440\u043E\u0432\u0438\u0447", sales: 100500 },
      { user: "\u0421\u0438\u0434\u043E\u0440\u043E\u0432 \u0421\u0438\u0434\u043E\u0440 \u0421\u0438\u0434\u043E\u0440\u043E\u0432\u0438\u0447", sales: 100500 }
    ]);
    const VkTopDimmerSalesManagersList = ref([
      { user: "\u0418\u0432\u0430\u043D\u043E\u0432 \u0418\u0432\u0430\u043D \u0418\u0432\u0430\u043D\u043E\u0432\u0438\u0447", sales: 100500 },
      { user: "\u041F\u0435\u0442\u0440\u043E\u0432 \u041F\u0435\u0442\u0440 \u041F\u0435\u0442\u0440\u043E\u0432\u0438\u0447", sales: 100500 },
      { user: "\u0421\u0438\u0434\u043E\u0440\u043E\u0432 \u0421\u0438\u0434\u043E\u0440 \u0421\u0438\u0434\u043E\u0440\u043E\u0432\u0438\u0447", sales: 100500 }
    ]);
    const VkTopSalesWithoutDesignersList = ref([
      { user: "\u0418\u0432\u0430\u043D\u043E\u0432 \u0418\u0432\u0430\u043D \u0418\u0432\u0430\u043D\u043E\u0432\u0438\u0447", sales: 100500 },
      { user: "\u041F\u0435\u0442\u0440\u043E\u0432 \u041F\u0435\u0442\u0440 \u041F\u0435\u0442\u0440\u043E\u0432\u0438\u0447", sales: 100500 },
      { user: "\u0421\u0438\u0434\u043E\u0440\u043E\u0432 \u0421\u0438\u0434\u043E\u0440 \u0421\u0438\u0434\u043E\u0440\u043E\u0432\u0438\u0447", sales: 100500 }
    ]);
    const VkTopConversionDayToDayList = ref([
      { user: "\u0418\u0432\u0430\u043D\u043E\u0432 \u0418\u0432\u0430\u043D \u0418\u0432\u0430\u043D\u043E\u0432\u0438\u0447", sales: 100500 },
      { user: "\u041F\u0435\u0442\u0440\u043E\u0432 \u041F\u0435\u0442\u0440 \u041F\u0435\u0442\u0440\u043E\u0432\u0438\u0447", sales: 100500 },
      { user: "\u0421\u0438\u0434\u043E\u0440\u043E\u0432 \u0421\u0438\u0434\u043E\u0440 \u0421\u0438\u0434\u043E\u0440\u043E\u0432\u0438\u0447", sales: 100500 }
    ]);
    const getDatas = async () => {
      var _a;
      try {
        const { data } = await $useApi.get("/dashboards/comercial", {
          params: {
            period: period.value
          }
        });
        managersData.value = data.users;
        if (data.users.length) {
          if (currentManager.value.id) {
            currentManager.value = data.users.find(
              (u) => u.id === currentManager.value.id
            );
            getManagerData(currentManager.value.id);
          } else {
            currentManager.value = data.users[0];
            getManagerData(((_a = currentManager.value) == null ? void 0 : _a.id) || 0);
          }
          VkTopSalesManagersList.value = data.vkTop.topTotalSales;
          VkTopDopSalesManagersList.value = data.vkTop.topDopSales;
          VkTopDimmerSalesManagersList.value = data.vkTop.topDimmerSales;
          VkTopSalesWithoutDesignersList.value = data.vkTop.topSalesWithoutDesigners;
          VkTopConversionDayToDayList.value = data.vkTop.topConversionDayToDay;
          topListAvito.value = data.b2bTop;
          calcTotals();
        }
        return data;
      } catch (e) {
        console.log(e);
      }
    };
    const getManagerData = (id) => {
      if (!managersData.value.find((m) => m.id === id)) return;
      currentManager.value = managersData.value.find((m) => m.id === id);
      const {
        workSpace,
        totalSales,
        dealSales,
        dopSales,
        temp,
        dealsAmount,
        dopsAmount
      } = currentManager.value;
      mainInfo.value = [
        {
          label: "\u041E\u0431\u0449\u0430\u044F \u0441\u0443\u043C\u043C\u0430 \u0437\u0430\u043A\u0430\u0437\u043E\u0432",
          value: useMyFormatPrice(totalSales) + "\u20BD"
        },
        //Общая сумма( +процент от плана)
        { label: "\u0422\u0435\u043C\u043F", value: useMyFormatPrice(temp) + "\u20BD" },
        //темп
        {
          label: `\u0412\u044B\u0432\u0435\u0441\u043A\u0438(${dealsAmount})`,
          value: useMyFormatPrice(dealSales) + "\u20BD"
        },
        //Сумма вывесок(+ подробнее) + количество
        { label: `\u0414\u043E\u043F\u044B(${dopsAmount})`, value: useMyFormatPrice(dopSales) + "\u20BD" }
        //сумма допов(+подробнее со списком) + количество +процент от сделок
        // { label: 'Выручка(Факт)', value: '10000' }, //оплаты по сделкам + подробнее
      ];
      const {
        drr,
        averageBill,
        calls,
        makets,
        maketsDayToDay,
        dealsDayToDay,
        dealsDayToDayPrice,
        conversionDealsToCalls,
        dealsWithoutDesigners,
        dealsSalesWithoutDesigners,
        conversionMaketsToCalls,
        conversionMaketsDayToDayToCalls,
        conversionMaketsToSales,
        redirectToMSG
      } = currentManager.value;
      characteristicsInfo.value = [
        { label: "\u0421\u0440\u0435\u0434\u043D\u0438\u0439 \u0447\u0435\u043A", value: useMyFormatPrice(averageBill) + "\u20BD" },
        { label: "\u0414\u0420\u0420", value: drr + "%" },
        { label: `\u0417\u0430\u044F\u0432\u043A\u0438`, value: calls },
        { label: `% \u0438\u0437 \u0437\u0430\u044F\u0432\u043A\u0438 \u0432 \u043F\u0440\u043E\u0434\u0430\u0436\u0443`, value: conversionDealsToCalls + "%" },
        { label: `% \u0438\u0437 \u0437\u0430\u044F\u0432\u043A\u0438 \u0432 \u043C\u0430\u043A\u0435\u0442`, value: conversionMaketsToCalls + "%" },
        { label: "\u041C\u0430\u043A\u0435\u0442\u044B", value: makets },
        { label: `% \u0438\u0437 \u043C\u0430\u043A\u0435\u0442\u0430 \u0432 \u043F\u0440\u043E\u0434\u0430\u0436\u0443`, value: conversionMaketsToSales + "%" },
        { label: "\u041C\u0430\u043A\u0435\u0442\u044B \u0434\u0435\u043D\u044C \u0432 \u0434\u0435\u043D\u044C", value: maketsDayToDay },
        {
          label: `% \u0438\u0437 \u0437\u0430\u044F\u0432\u043A\u0438 \u0432 \u043C\u0430\u043A\u0435\u0442 \u0434\u0435\u043D\u044C \u0432 \u0434\u0435\u043D\u044C`,
          value: conversionMaketsDayToDayToCalls + "%"
        },
        {
          label: `\u041F\u0440\u043E\u0434\u0430\u0436\u0438 \u0434\u0435\u043D\u044C \u0432 \u0434\u0435\u043D\u044C(${dealsDayToDay})`,
          value: useMyFormatPrice(dealsDayToDayPrice) + "\u20BD"
        },
        {
          label: `\u0411\u0435\u0437 \u0434\u0438\u0437\u0430\u0439\u043D\u0435\u0440\u0430(${dealsWithoutDesigners})`,
          value: useMyFormatPrice(dealsSalesWithoutDesigners) + "\u20BD"
        }
      ];
      if (workSpace === "B2B") {
        characteristicsInfo.value.push({
          label: "\u041F\u0435\u0440\u0435\u0445\u043E\u0434\u044B \u0432 \u043C\u0435\u0441\u0441\u0435\u043D\u0434\u0436\u0435\u0440",
          value: redirectToMSG
        });
      }
      let { totalSalary } = currentManager.value;
      const {
        bonusPercentage,
        bonus,
        shift,
        shiftBonus,
        pays,
        dopPays,
        dealPays,
        topBonus,
        salaryCorrections,
        prevPeriodsDealsPays,
        prevPeriodsDopsPays
      } = currentManager.value;
      const salaryCorrectionMinus = salaryCorrections.filter((c) => c.type === "\u0412\u044B\u0447\u0435\u0442").reduce((a, b) => a + b.price, 0);
      const salaryCorrectionPlus = salaryCorrections.filter((s) => s.type === "\u041F\u0440\u0438\u0431\u0430\u0432\u043A\u0430").reduce((a, b) => a + b.price, 0);
      totalSalary = totalSalary + salaryCorrectionPlus - salaryCorrectionMinus + prevPeriodsDealsPays + prevPeriodsDopsPays;
      const rem = totalSalary - pays;
      salaryInfo.value = [
        { label: "\u0417\u041F", value: useMyFormatPrice(+totalSalary.toFixed(2)) + "\u20BD" },
        //сформированная
        { label: "\u0412\u044B\u043F\u043B\u0430\u0442\u044B", value: useMyFormatPrice(pays) + "\u20BD" },
        { label: "\u041E\u0441\u0442\u0430\u0442\u043E\u043A", value: useMyFormatPrice(+rem.toFixed(2)) + "\u20BD" },
        {
          label: `\u0417\u0430 \u0432\u044B\u0432\u0435\u0441\u043A\u0438(${(bonusPercentage * 100).toFixed(1)}%)`,
          value: useMyFormatPrice(dealPays) + "\u20BD"
        },
        //за нынешний месяц
        {
          label: workSpace === "B2B" ? "\u0417\u0430 \u0434\u043E\u043F\u044B(10%)" : `\u0417\u0430 \u0434\u043E\u043F\u044B(${(bonusPercentage * 100).toFixed(1)}%)`,
          value: useMyFormatPrice(dopPays) + "\u20BD"
        },
        {
          label: `\u0421\u043C\u0435\u043D\u044B(${shift})`,
          value: useMyFormatPrice(shiftBonus) + "\u20BD"
        },
        { label: "\u041F\u0440\u0435\u043C\u0438\u044F", value: useMyFormatPrice(bonus) + "\u20BD" },
        { label: "\u0422\u043E\u043F\u0411\u043E\u043D\u0443\u0441", value: useMyFormatPrice(topBonus) + "\u20BD" },
        {
          label: "\u041E\u0441\u0442\u0430\u0442\u043A\u0438",
          value: useMyFormatPrice(
            +(prevPeriodsDealsPays + prevPeriodsDopsPays).toFixed(2)
          ) + "\u20BD"
        }
        // { label: 'Топ бонус', value: '10000' },
        // { label: 'Остатки с прошлых месяцов', value: '5000' },
        // { label: 'Выплаты', value: '5000' }, //подробнее?
        // { label: 'Остаток по выплатам', value: '5000' }, //подробнее?
      ];
    };
    const calcTotals = () => {
      const data = managersData.value;
      managersData.value.reduce(
        (a, b) => a + b.totalSalary,
        0
      );
      managersData.value.reduce(
        (a, b) => a + b.prevPeriodsDealsPays,
        0
      );
      managersData.value.reduce((a, b) => a + b.pays, 0);
      managersData.value.reduce(
        (a, b) => a + b.prevPeriodsDopsPays,
        0
      );
      managersData.value.reduce(
        (a, b) => a + b.salaryCorrections.filter((c) => c.type === "\u0412\u044B\u0447\u0435\u0442").reduce((a2, b2) => a2 + b2.price, 0),
        0
      );
      managersData.value.reduce(
        (a, b) => a + b.salaryCorrections.filter((s) => s.type === "\u041F\u0440\u0438\u0431\u0430\u0432\u043A\u0430").reduce((a2, b2) => a2 + b2.price, 0),
        0
      );
      totalsInfo.value = [
        {
          title: "\u0421\u0443\u043C\u043C\u0430 \u043F\u0440\u043E\u0434\u0430\u0436",
          value: useMyFormatPrice(data.reduce((a, b) => a + b.totalSales, 0)) + "\u20BD"
        },
        {
          title: `\u0421\u0443\u043C\u043C\u0430 \u0437\u0430\u043A\u0430\u0437\u043E\u0432(${data.reduce((a, b) => a + b.dealsAmount, 0)})`,
          value: useMyFormatPrice(data.reduce((a, b) => a + b.dealSales, 0)) + "\u20BD"
        },
        {
          title: `\u0421\u0443\u043C\u043C\u0430 \u0434\u043E\u043F\u043E\u0432(${data.reduce((a, b) => a + b.dopsAmount, 0)})`,
          value: useMyFormatPrice(data.reduce((a, b) => a + b.dopSales, 0)) + "\u20BD"
        }
      ];
    };
    const handlePlanSet = (newPlan, managerId) => {
      managersData.value.find((m) => m.id === managerId).plan = newPlan;
      currentManager.value.plan = newPlan;
      managersData.value = [...managersData.value];
    };
    const deleteSalaryCorr = async (id) => {
      try {
        await $useApi.delete(`/salary-pay/correction/${id}`);
        await getDatas();
      } catch (e) {
        console.log(e);
      }
    };
    const deleteSalaryItem = async (id) => {
      try {
        await $useApi.delete("/salary-pay/" + id);
        getDatas();
      } catch (error) {
        console.log(error);
      }
    };
    const changeInternStatus = async (isIntern) => {
      try {
        await $useApi.patch(
          `/managers/${currentManager.value.id}/change-intern-status`,
          {
            isIntern
          }
        );
      } catch (error) {
        currentManager.value.isIntern = !isIntern;
        console.log(error);
      }
    };
    watch(month, async (val) => {
      const { month: month2, year } = val;
      period.value = new Date(year, month2 + 1).toISOString().slice(0, 7);
      await getDatas();
    });
    const handleSwitchChange = async (value) => {
      await changeInternStatus(value);
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_LayoutSidebar = _sfc_main$1;
      const _component_UiSheet = _sfc_main$2;
      const _component_UiSheetTrigger = _sfc_main$1$1;
      const _component_UiSheetContent = _sfc_main$3;
      const _component_UiSheetHeader = _sfc_main$1$2;
      const _component_UiSheetTitle = _sfc_main$4;
      const _component_UiSheetDescription = _sfc_main$5;
      const _component_MyDealsDealCardSheet = _sfc_main$2$1;
      const _component_UiTabs = _sfc_main$2$2;
      const _component_UiTabsList = _sfc_main$6;
      const _component_UiTabsTrigger = _sfc_main$1$3;
      const _component_UiTabsContent = _sfc_main$7;
      const _component_MyComercialDataTable = _sfc_main$1$4;
      const _component_MySalariesMopVkTopList = _sfc_main$8;
      const _component_UiCard = _sfc_main$9;
      const _component_UiCardHeader = _sfc_main$1$5;
      const _component_UiCardDescription = _sfc_main$a;
      const _component_UiCardTitle = _sfc_main$b;
      const _component_UiCardContent = _sfc_main$c;
      const _component_UiLabel = _sfc_main$d;
      const _component_UiSwitch = _sfc_main$e;
      const _component_UiScrollArea = _sfc_main$f;
      const _component_MyManagersSetPlanModal = _sfc_main$g;
      const _component_MySalariesCorrectCreateModal = _sfc_main$h;
      const _component_UiSeparator = _sfc_main$i;
      const _component_UiButton = _sfc_main$j;
      const _component_UiTable = _sfc_main$5$1;
      const _component_UiTableCaption = _sfc_main$k;
      const _component_UiTableHeader = _sfc_main$l;
      const _component_UiTableRow = _sfc_main$2$3;
      const _component_UiTableHead = _sfc_main$1$6;
      const _component_UiTableBody = _sfc_main$4$1;
      const _component_UiTableCell = _sfc_main$3$1;
      const _component_UiCardFooter = _sfc_main$m;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative h-screen hidden-scrollbar" }, _attrs))}><div class="w-full fixed z-[11]">`);
      _push(ssrRenderComponent(_component_LayoutSidebar, { page: "\u041C\u0435\u043D\u0435\u0434\u0436\u0435\u0440\u044B" }, null, _parent));
      _push(`</div><div class="h-[full] flex p-4 gap-4 mx-[auto] max-w-[2048px] pt-18">`);
      _push(ssrRenderComponent(_component_UiSheet, {
        open: unref(isSheetOpen),
        "onUpdate:open": ($event) => isRef(isSheetOpen) ? isSheetOpen.value = $event : null
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UiSheetTrigger, { class: "hidden" }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UiSheetContent, { class: "p-0" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UiSheetHeader, { class: "hidden" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_UiSheetTitle, null, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_UiSheetDescription, null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_UiSheetTitle),
                          createVNode(_component_UiSheetDescription)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_MyDealsDealCardSheet, {
                    key: unref(currentDeal).id,
                    deal: unref(currentDeal)
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UiSheetHeader, { class: "hidden" }, {
                      default: withCtx(() => [
                        createVNode(_component_UiSheetTitle),
                        createVNode(_component_UiSheetDescription)
                      ]),
                      _: 1
                    }),
                    (openBlock(), createBlock(_component_MyDealsDealCardSheet, {
                      key: unref(currentDeal).id,
                      deal: unref(currentDeal)
                    }, null, 8, ["deal"]))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UiSheetTrigger, { class: "hidden" }),
              createVNode(_component_UiSheetContent, { class: "p-0" }, {
                default: withCtx(() => [
                  createVNode(_component_UiSheetHeader, { class: "hidden" }, {
                    default: withCtx(() => [
                      createVNode(_component_UiSheetTitle),
                      createVNode(_component_UiSheetDescription)
                    ]),
                    _: 1
                  }),
                  (openBlock(), createBlock(_component_MyDealsDealCardSheet, {
                    key: unref(currentDeal).id,
                    deal: unref(currentDeal)
                  }, null, 8, ["deal"]))
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="flex gap-2 min-w-[1050px] w-full"><div class="w-[180px] absolute">`);
      _push(ssrRenderComponent(unref(Qn), {
        modelValue: unref(month),
        "onUpdate:modelValue": ($event) => isRef(month) ? month.value = $event : null,
        "month-picker": "",
        "auto-apply": "",
        locale: "ru",
        "select-text": "\u0413\u043E\u0442\u043E\u0432\u043E",
        "cancel-text": "\u0417\u0430\u043A\u0440\u044B\u0442\u044C",
        clearable: false
      }, null, _parent));
      _push(`</div><div class="flex gap-2 w-full">`);
      _push(ssrRenderComponent(_component_UiTabs, {
        "default-value": "table",
        class: "w-full"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UiTabsList, { class: "ml-[185px]" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UiTabsTrigger, { value: "table" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`\u0422\u0430\u0431\u043B\u0438\u0446\u0430`);
                      } else {
                        return [
                          createTextVNode("\u0422\u0430\u0431\u043B\u0438\u0446\u0430")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_UiTabsTrigger, { value: "top" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`\u0422\u043E\u043F`);
                      } else {
                        return [
                          createTextVNode("\u0422\u043E\u043F")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_UiTabsTrigger, { value: "info" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`\u041F\u043E\u043A\u0430\u0437\u0430\u0442\u0435\u043B\u0438`);
                      } else {
                        return [
                          createTextVNode("\u041F\u043E\u043A\u0430\u0437\u0430\u0442\u0435\u043B\u0438")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UiTabsTrigger, { value: "table" }, {
                      default: withCtx(() => [
                        createTextVNode("\u0422\u0430\u0431\u043B\u0438\u0446\u0430")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_UiTabsTrigger, { value: "top" }, {
                      default: withCtx(() => [
                        createTextVNode("\u0422\u043E\u043F")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_UiTabsTrigger, { value: "info" }, {
                      default: withCtx(() => [
                        createTextVNode("\u041F\u043E\u043A\u0430\u0437\u0430\u0442\u0435\u043B\u0438")
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UiTabsContent, { value: "table" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="mt-[-47px]"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_MyComercialDataTable, {
                    columns: unref(managersDataColumns),
                    data: unref(managersData),
                    "current-manager-id": unref(currentManager).id,
                    onManagerClicked: getManagerData
                  }, null, _parent3, _scopeId2));
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("div", { class: "mt-[-47px]" }, [
                      createVNode(_component_MyComercialDataTable, {
                        columns: unref(managersDataColumns),
                        data: unref(managersData),
                        "current-manager-id": unref(currentManager).id,
                        onManagerClicked: getManagerData
                      }, null, 8, ["columns", "data", "current-manager-id"])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UiTabsContent, { value: "top" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="flex flex-col gap-2"${_scopeId2}>`);
                  if (unref(VkTopSalesManagersList).length) {
                    _push3(`<div class="flex gap-2 flex-wrap"${_scopeId2}><div class="flex gap-2 flex-1"${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_MySalariesMopVkTopList, {
                      class: "min-w-[300px]",
                      managers: unref(VkTopSalesManagersList),
                      title: "\u0422\u043E\u043F \u043F\u043E \u0432\u044B\u0440\u0443\u0447\u043A\u0435",
                      after: "\u20BD"
                    }, null, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_component_MySalariesMopVkTopList, {
                      class: "min-w-[300px]",
                      managers: unref(VkTopDopSalesManagersList),
                      title: "\u0422\u043E\u043F \u043F\u043E \u0434\u043E\u043F.\u043F\u0440\u043E\u0434\u0430\u0436\u0430\u043C",
                      after: "\u20BD"
                    }, null, _parent3, _scopeId2));
                    _push3(`</div><div class="flex gap-2 flex-1"${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_MySalariesMopVkTopList, {
                      class: "min-w-[300px]",
                      managers: unref(VkTopDimmerSalesManagersList),
                      title: "\u0422\u043E\u043F \u043F\u043E \u0434\u0438\u043C\u043C\u0435\u0440\u0430\u043C",
                      after: "\u20BD"
                    }, null, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_component_MySalariesMopVkTopList, {
                      class: "min-w-[300px]",
                      managers: unref(VkTopSalesWithoutDesignersList),
                      title: "\u0422\u043E\u043F \u043F\u0440\u043E\u0434\u0430\u0436 \u0431\u0435\u0437 \u0434\u0438\u0437\u043E\u0432",
                      after: "\u20BD"
                    }, null, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_component_MySalariesMopVkTopList, {
                      class: "min-w-[300px]",
                      managers: unref(VkTopConversionDayToDayList),
                      title: "\u0422\u043E\u043F \u043A\u043E\u043D\u0432\u0435\u0440\u0441\u0438\u044F",
                      after: "%"
                    }, null, _parent3, _scopeId2));
                    _push3(`</div></div>`);
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(`<div class="flex gap-1 mb-2"${_scopeId2}><!--[-->`);
                  ssrRenderList(unref(topListAvito), (item, i) => {
                    _push3(ssrRenderComponent(_component_UiCard, {
                      key: i,
                      class: "min-w-[150px] grow"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_UiCardHeader, { class: "p-3 pb-2" }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(_component_UiCardDescription, null, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(`${ssrInterpolate(item.category)}`);
                                    } else {
                                      return [
                                        createTextVNode(toDisplayString(item.category), 1)
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent5, _scopeId4));
                                _push5(ssrRenderComponent(_component_UiCardTitle, { class: "text-3xl font-semibold whitespace-nowrap" }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(`${ssrInterpolate(item.user)}`);
                                    } else {
                                      return [
                                        createTextVNode(toDisplayString(item.user), 1)
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(_component_UiCardDescription, null, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(item.category), 1)
                                    ]),
                                    _: 2
                                  }, 1024),
                                  createVNode(_component_UiCardTitle, { class: "text-3xl font-semibold whitespace-nowrap" }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(item.user), 1)
                                    ]),
                                    _: 2
                                  }, 1024)
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(_component_UiCardContent, null, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`${ssrInterpolate(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(item.sales) + (item.category === "\u0422\u043E\u043F \u043A\u043E\u043D\u0432\u0435\u0440\u0441\u0438\u044F" ? "%" : "\u20BD"))}`);
                              } else {
                                return [
                                  createTextVNode(toDisplayString(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(item.sales) + (item.category === "\u0422\u043E\u043F \u043A\u043E\u043D\u0432\u0435\u0440\u0441\u0438\u044F" ? "%" : "\u20BD")), 1)
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(_component_UiCardHeader, { class: "p-3 pb-2" }, {
                              default: withCtx(() => [
                                createVNode(_component_UiCardDescription, null, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(item.category), 1)
                                  ]),
                                  _: 2
                                }, 1024),
                                createVNode(_component_UiCardTitle, { class: "text-3xl font-semibold whitespace-nowrap" }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(item.user), 1)
                                  ]),
                                  _: 2
                                }, 1024)
                              ]),
                              _: 2
                            }, 1024),
                            createVNode(_component_UiCardContent, null, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(item.sales) + (item.category === "\u0422\u043E\u043F \u043A\u043E\u043D\u0432\u0435\u0440\u0441\u0438\u044F" ? "%" : "\u20BD")), 1)
                              ]),
                              _: 2
                            }, 1024)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  });
                  _push3(`<!--]--></div></div>`);
                } else {
                  return [
                    createVNode("div", { class: "flex flex-col gap-2" }, [
                      unref(VkTopSalesManagersList).length ? (openBlock(), createBlock("div", {
                        key: 0,
                        class: "flex gap-2 flex-wrap"
                      }, [
                        createVNode("div", { class: "flex gap-2 flex-1" }, [
                          createVNode(_component_MySalariesMopVkTopList, {
                            class: "min-w-[300px]",
                            managers: unref(VkTopSalesManagersList),
                            title: "\u0422\u043E\u043F \u043F\u043E \u0432\u044B\u0440\u0443\u0447\u043A\u0435",
                            after: "\u20BD"
                          }, null, 8, ["managers"]),
                          createVNode(_component_MySalariesMopVkTopList, {
                            class: "min-w-[300px]",
                            managers: unref(VkTopDopSalesManagersList),
                            title: "\u0422\u043E\u043F \u043F\u043E \u0434\u043E\u043F.\u043F\u0440\u043E\u0434\u0430\u0436\u0430\u043C",
                            after: "\u20BD"
                          }, null, 8, ["managers"])
                        ]),
                        createVNode("div", { class: "flex gap-2 flex-1" }, [
                          createVNode(_component_MySalariesMopVkTopList, {
                            class: "min-w-[300px]",
                            managers: unref(VkTopDimmerSalesManagersList),
                            title: "\u0422\u043E\u043F \u043F\u043E \u0434\u0438\u043C\u043C\u0435\u0440\u0430\u043C",
                            after: "\u20BD"
                          }, null, 8, ["managers"]),
                          createVNode(_component_MySalariesMopVkTopList, {
                            class: "min-w-[300px]",
                            managers: unref(VkTopSalesWithoutDesignersList),
                            title: "\u0422\u043E\u043F \u043F\u0440\u043E\u0434\u0430\u0436 \u0431\u0435\u0437 \u0434\u0438\u0437\u043E\u0432",
                            after: "\u20BD"
                          }, null, 8, ["managers"]),
                          createVNode(_component_MySalariesMopVkTopList, {
                            class: "min-w-[300px]",
                            managers: unref(VkTopConversionDayToDayList),
                            title: "\u0422\u043E\u043F \u043A\u043E\u043D\u0432\u0435\u0440\u0441\u0438\u044F",
                            after: "%"
                          }, null, 8, ["managers"])
                        ])
                      ])) : createCommentVNode("", true),
                      createVNode("div", { class: "flex gap-1 mb-2" }, [
                        (openBlock(true), createBlock(Fragment, null, renderList(unref(topListAvito), (item, i) => {
                          return openBlock(), createBlock(_component_UiCard, {
                            key: i,
                            class: "min-w-[150px] grow"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_UiCardHeader, { class: "p-3 pb-2" }, {
                                default: withCtx(() => [
                                  createVNode(_component_UiCardDescription, null, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(item.category), 1)
                                    ]),
                                    _: 2
                                  }, 1024),
                                  createVNode(_component_UiCardTitle, { class: "text-3xl font-semibold whitespace-nowrap" }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(item.user), 1)
                                    ]),
                                    _: 2
                                  }, 1024)
                                ]),
                                _: 2
                              }, 1024),
                              createVNode(_component_UiCardContent, null, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(item.sales) + (item.category === "\u0422\u043E\u043F \u043A\u043E\u043D\u0432\u0435\u0440\u0441\u0438\u044F" ? "%" : "\u20BD")), 1)
                                ]),
                                _: 2
                              }, 1024)
                            ]),
                            _: 2
                          }, 1024);
                        }), 128))
                      ])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UiTabsContent, { value: "info" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="flex gap-2"${_scopeId2}><!--[-->`);
                  ssrRenderList(unref(totalsInfo), (item) => {
                    _push3(ssrRenderComponent(_component_UiCard, {
                      key: item.title,
                      class: "w-full grow"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_UiCardHeader, { class: "py-1 px-3" }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(_component_UiCardDescription, null, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(`${ssrInterpolate(item.title)}`);
                                    } else {
                                      return [
                                        createTextVNode(toDisplayString(item.title), 1)
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent5, _scopeId4));
                                _push5(ssrRenderComponent(_component_UiCardTitle, { class: "text-2xl font-semibold whitespace-nowrap" }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(`${ssrInterpolate(item.value)}`);
                                    } else {
                                      return [
                                        createTextVNode(toDisplayString(item.value), 1)
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(_component_UiCardDescription, null, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(item.title), 1)
                                    ]),
                                    _: 2
                                  }, 1024),
                                  createVNode(_component_UiCardTitle, { class: "text-2xl font-semibold whitespace-nowrap" }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(item.value), 1)
                                    ]),
                                    _: 2
                                  }, 1024)
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(_component_UiCardHeader, { class: "py-1 px-3" }, {
                              default: withCtx(() => [
                                createVNode(_component_UiCardDescription, null, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(item.title), 1)
                                  ]),
                                  _: 2
                                }, 1024),
                                createVNode(_component_UiCardTitle, { class: "text-2xl font-semibold whitespace-nowrap" }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(item.value), 1)
                                  ]),
                                  _: 2
                                }, 1024)
                              ]),
                              _: 2
                            }, 1024)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  });
                  _push3(`<!--]--></div>`);
                } else {
                  return [
                    createVNode("div", { class: "flex gap-2" }, [
                      (openBlock(true), createBlock(Fragment, null, renderList(unref(totalsInfo), (item) => {
                        return openBlock(), createBlock(_component_UiCard, {
                          key: item.title,
                          class: "w-full grow"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_UiCardHeader, { class: "py-1 px-3" }, {
                              default: withCtx(() => [
                                createVNode(_component_UiCardDescription, null, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(item.title), 1)
                                  ]),
                                  _: 2
                                }, 1024),
                                createVNode(_component_UiCardTitle, { class: "text-2xl font-semibold whitespace-nowrap" }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(item.value), 1)
                                  ]),
                                  _: 2
                                }, 1024)
                              ]),
                              _: 2
                            }, 1024)
                          ]),
                          _: 2
                        }, 1024);
                      }), 128))
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UiTabsList, { class: "ml-[185px]" }, {
                default: withCtx(() => [
                  createVNode(_component_UiTabsTrigger, { value: "table" }, {
                    default: withCtx(() => [
                      createTextVNode("\u0422\u0430\u0431\u043B\u0438\u0446\u0430")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_UiTabsTrigger, { value: "top" }, {
                    default: withCtx(() => [
                      createTextVNode("\u0422\u043E\u043F")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_UiTabsTrigger, { value: "info" }, {
                    default: withCtx(() => [
                      createTextVNode("\u041F\u043E\u043A\u0430\u0437\u0430\u0442\u0435\u043B\u0438")
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(_component_UiTabsContent, { value: "table" }, {
                default: withCtx(() => [
                  createVNode("div", { class: "mt-[-47px]" }, [
                    createVNode(_component_MyComercialDataTable, {
                      columns: unref(managersDataColumns),
                      data: unref(managersData),
                      "current-manager-id": unref(currentManager).id,
                      onManagerClicked: getManagerData
                    }, null, 8, ["columns", "data", "current-manager-id"])
                  ])
                ]),
                _: 1
              }),
              createVNode(_component_UiTabsContent, { value: "top" }, {
                default: withCtx(() => [
                  createVNode("div", { class: "flex flex-col gap-2" }, [
                    unref(VkTopSalesManagersList).length ? (openBlock(), createBlock("div", {
                      key: 0,
                      class: "flex gap-2 flex-wrap"
                    }, [
                      createVNode("div", { class: "flex gap-2 flex-1" }, [
                        createVNode(_component_MySalariesMopVkTopList, {
                          class: "min-w-[300px]",
                          managers: unref(VkTopSalesManagersList),
                          title: "\u0422\u043E\u043F \u043F\u043E \u0432\u044B\u0440\u0443\u0447\u043A\u0435",
                          after: "\u20BD"
                        }, null, 8, ["managers"]),
                        createVNode(_component_MySalariesMopVkTopList, {
                          class: "min-w-[300px]",
                          managers: unref(VkTopDopSalesManagersList),
                          title: "\u0422\u043E\u043F \u043F\u043E \u0434\u043E\u043F.\u043F\u0440\u043E\u0434\u0430\u0436\u0430\u043C",
                          after: "\u20BD"
                        }, null, 8, ["managers"])
                      ]),
                      createVNode("div", { class: "flex gap-2 flex-1" }, [
                        createVNode(_component_MySalariesMopVkTopList, {
                          class: "min-w-[300px]",
                          managers: unref(VkTopDimmerSalesManagersList),
                          title: "\u0422\u043E\u043F \u043F\u043E \u0434\u0438\u043C\u043C\u0435\u0440\u0430\u043C",
                          after: "\u20BD"
                        }, null, 8, ["managers"]),
                        createVNode(_component_MySalariesMopVkTopList, {
                          class: "min-w-[300px]",
                          managers: unref(VkTopSalesWithoutDesignersList),
                          title: "\u0422\u043E\u043F \u043F\u0440\u043E\u0434\u0430\u0436 \u0431\u0435\u0437 \u0434\u0438\u0437\u043E\u0432",
                          after: "\u20BD"
                        }, null, 8, ["managers"]),
                        createVNode(_component_MySalariesMopVkTopList, {
                          class: "min-w-[300px]",
                          managers: unref(VkTopConversionDayToDayList),
                          title: "\u0422\u043E\u043F \u043A\u043E\u043D\u0432\u0435\u0440\u0441\u0438\u044F",
                          after: "%"
                        }, null, 8, ["managers"])
                      ])
                    ])) : createCommentVNode("", true),
                    createVNode("div", { class: "flex gap-1 mb-2" }, [
                      (openBlock(true), createBlock(Fragment, null, renderList(unref(topListAvito), (item, i) => {
                        return openBlock(), createBlock(_component_UiCard, {
                          key: i,
                          class: "min-w-[150px] grow"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_UiCardHeader, { class: "p-3 pb-2" }, {
                              default: withCtx(() => [
                                createVNode(_component_UiCardDescription, null, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(item.category), 1)
                                  ]),
                                  _: 2
                                }, 1024),
                                createVNode(_component_UiCardTitle, { class: "text-3xl font-semibold whitespace-nowrap" }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(item.user), 1)
                                  ]),
                                  _: 2
                                }, 1024)
                              ]),
                              _: 2
                            }, 1024),
                            createVNode(_component_UiCardContent, null, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(item.sales) + (item.category === "\u0422\u043E\u043F \u043A\u043E\u043D\u0432\u0435\u0440\u0441\u0438\u044F" ? "%" : "\u20BD")), 1)
                              ]),
                              _: 2
                            }, 1024)
                          ]),
                          _: 2
                        }, 1024);
                      }), 128))
                    ])
                  ])
                ]),
                _: 1
              }),
              createVNode(_component_UiTabsContent, { value: "info" }, {
                default: withCtx(() => [
                  createVNode("div", { class: "flex gap-2" }, [
                    (openBlock(true), createBlock(Fragment, null, renderList(unref(totalsInfo), (item) => {
                      return openBlock(), createBlock(_component_UiCard, {
                        key: item.title,
                        class: "w-full grow"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_UiCardHeader, { class: "py-1 px-3" }, {
                            default: withCtx(() => [
                              createVNode(_component_UiCardDescription, null, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(item.title), 1)
                                ]),
                                _: 2
                              }, 1024),
                              createVNode(_component_UiCardTitle, { class: "text-2xl font-semibold whitespace-nowrap" }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(item.value), 1)
                                ]),
                                _: 2
                              }, 1024)
                            ]),
                            _: 2
                          }, 1024)
                        ]),
                        _: 2
                      }, 1024);
                    }), 128))
                  ])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="min-w-[490px] h-[calc(100vh-90px)]">`);
      _push(ssrRenderComponent(_component_UiCard, { class: "h-full rounded-md overflow-hidden" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UiCardHeader, { class: "bg-gray-100 mb-2 p-3" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UiCardTitle, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      var _a, _b;
                      if (_push4) {
                        _push4(`${ssrInterpolate((_a = unref(currentManager)) == null ? void 0 : _a.fullName)}`);
                      } else {
                        return [
                          createTextVNode(toDisplayString((_b = unref(currentManager)) == null ? void 0 : _b.fullName), 1)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_UiCardDescription, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      var _a, _b;
                      if (_push4) {
                        _push4(`<div class="flex w-full justify-between items-center"${_scopeId3}><span${_scopeId3}>${ssrInterpolate((_a = unref(currentManager)) == null ? void 0 : _a.workSpace)}</span><div class="flex items-center gap-2"${_scopeId3}>`);
                        _push4(ssrRenderComponent(_component_UiLabel, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`\u0421\u0442\u0430\u0436\u0435\u0440`);
                            } else {
                              return [
                                createTextVNode("\u0421\u0442\u0430\u0436\u0435\u0440")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_UiSwitch, {
                          checked: unref(currentManager).isIntern,
                          "onUpdate:checked": [($event) => unref(currentManager).isIntern = $event, handleSwitchChange]
                        }, null, _parent4, _scopeId3));
                        _push4(`</div></div>`);
                      } else {
                        return [
                          createVNode("div", { class: "flex w-full justify-between items-center" }, [
                            createVNode("span", null, toDisplayString((_b = unref(currentManager)) == null ? void 0 : _b.workSpace), 1),
                            createVNode("div", { class: "flex items-center gap-2" }, [
                              createVNode(_component_UiLabel, null, {
                                default: withCtx(() => [
                                  createTextVNode("\u0421\u0442\u0430\u0436\u0435\u0440")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_UiSwitch, {
                                checked: unref(currentManager).isIntern,
                                "onUpdate:checked": [($event) => unref(currentManager).isIntern = $event, handleSwitchChange]
                              }, null, 8, ["checked", "onUpdate:checked"])
                            ])
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UiCardTitle, null, {
                      default: withCtx(() => {
                        var _a;
                        return [
                          createTextVNode(toDisplayString((_a = unref(currentManager)) == null ? void 0 : _a.fullName), 1)
                        ];
                      }),
                      _: 1
                    }),
                    createVNode(_component_UiCardDescription, null, {
                      default: withCtx(() => {
                        var _a;
                        return [
                          createVNode("div", { class: "flex w-full justify-between items-center" }, [
                            createVNode("span", null, toDisplayString((_a = unref(currentManager)) == null ? void 0 : _a.workSpace), 1),
                            createVNode("div", { class: "flex items-center gap-2" }, [
                              createVNode(_component_UiLabel, null, {
                                default: withCtx(() => [
                                  createTextVNode("\u0421\u0442\u0430\u0436\u0435\u0440")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_UiSwitch, {
                                checked: unref(currentManager).isIntern,
                                "onUpdate:checked": [($event) => unref(currentManager).isIntern = $event, handleSwitchChange]
                              }, null, 8, ["checked", "onUpdate:checked"])
                            ])
                          ])
                        ];
                      }),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UiCardContent, { class: "p-2" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UiTabs, { "default-value": "info" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_UiTabsList, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_UiTabsTrigger, { value: "info" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(` \u0418\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F `);
                                  } else {
                                    return [
                                      createTextVNode(" \u0418\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F ")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_UiTabsTrigger, { value: "deals" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(` \u0412\u044B\u0432\u0435\u0441\u043A\u0438 `);
                                  } else {
                                    return [
                                      createTextVNode(" \u0412\u044B\u0432\u0435\u0441\u043A\u0438 ")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_UiTabsTrigger, { value: "dops" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(` \u0414\u043E\u043F\u044B `);
                                  } else {
                                    return [
                                      createTextVNode(" \u0414\u043E\u043F\u044B ")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_UiTabsTrigger, { value: "remainders" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(` \u041E\u0441\u0442\u0430\u0442\u043A\u0438 `);
                                  } else {
                                    return [
                                      createTextVNode(" \u041E\u0441\u0442\u0430\u0442\u043A\u0438 ")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_UiTabsTrigger, { value: "info" }, {
                                  default: withCtx(() => [
                                    createTextVNode(" \u0418\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F ")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_UiTabsTrigger, { value: "deals" }, {
                                  default: withCtx(() => [
                                    createTextVNode(" \u0412\u044B\u0432\u0435\u0441\u043A\u0438 ")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_UiTabsTrigger, { value: "dops" }, {
                                  default: withCtx(() => [
                                    createTextVNode(" \u0414\u043E\u043F\u044B ")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_UiTabsTrigger, { value: "remainders" }, {
                                  default: withCtx(() => [
                                    createTextVNode(" \u041E\u0441\u0442\u0430\u0442\u043A\u0438 ")
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_UiTabsContent, {
                          value: "info",
                          class: ""
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_UiScrollArea, { class: "h-[calc(100vh-250px)] px-5 pb-5" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`<div class="flex flex-col gap-5"${_scopeId5}><div${_scopeId5}><div class="font-semibold"${_scopeId5}>\u041E\u0441\u043D\u043E\u0432\u043D\u0430\u044F \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F</div><ul class="gap-1 text-gray-600"${_scopeId5}><div class="flex items-center border-b-1"${_scopeId5}>`);
                                    _push6(ssrRenderComponent(_component_MyManagersSetPlanModal, {
                                      key: unref(currentManager).id,
                                      plan: unref(currentManager).plan,
                                      period: unref(period),
                                      "manager-id": unref(currentManager).id,
                                      manager: unref(currentManager).fullName,
                                      onIsPlanSet: (np) => handlePlanSet(np, unref(currentManager).id)
                                    }, null, _parent6, _scopeId5));
                                    _push6(`<span class="ml-2"${_scopeId5}>\u041F\u043B\u0430\u043D</span><span class="ml-auto"${_scopeId5}>${ssrInterpolate(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(unref(currentManager).plan) + "\u20BD")}</span></div><li class="flex items-center border-b-1"${_scopeId5}><span class="text-muted-foreground"${_scopeId5}> \u041E\u0441\u0442\u0430\u0442\u043E\u043A \u0434\u043E \u043F\u043B\u0430\u043D\u0430 </span><span class="ml-auto"${_scopeId5}>${ssrInterpolate(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(
                                      unref(currentManager).plan - unref(currentManager).totalSales
                                    ) + "\u20BD")}</span></li><!--[-->`);
                                    ssrRenderList(unref(mainInfo), (item, i) => {
                                      _push6(`<li class="flex items-center border-b-1"${_scopeId5}><span class="text-muted-foreground"${_scopeId5}>${ssrInterpolate(item.label)}</span><span class="ml-auto"${_scopeId5}>${ssrInterpolate(item.value)}</span></li>`);
                                    });
                                    _push6(`<!--]--></ul></div><div${_scopeId5}><div class="font-semibold"${_scopeId5}>\u041F\u043E\u043A\u0430\u0437\u0430\u0442\u0435\u043B\u0438</div><ul class="gap-1 text-gray-600"${_scopeId5}><!--[-->`);
                                    ssrRenderList(unref(characteristicsInfo), (item, i) => {
                                      _push6(`<li class="flex items-center justify-between border-b-1"${_scopeId5}><span class="text-muted-foreground"${_scopeId5}>${ssrInterpolate(item.label)}</span><span${_scopeId5}>${ssrInterpolate(item.value)}</span></li>`);
                                    });
                                    _push6(`<!--]--></ul></div><div${_scopeId5}><div class="flex justify-between items-center mb-2"${_scopeId5}><div class="font-semibold"${_scopeId5}>\u0417\u0430\u0440\u043F\u043B\u0430\u0442\u0430</div>`);
                                    _push6(ssrRenderComponent(_component_MySalariesCorrectCreateModal, {
                                      "user-id": unref(currentManager).id,
                                      onCorrectionCreated: (corr) => {
                                        getDatas();
                                      }
                                    }, null, _parent6, _scopeId5));
                                    _push6(`</div><ul class="gap-1 text-gray-600"${_scopeId5}><!--[-->`);
                                    ssrRenderList(unref(salaryInfo).slice(0, 3), (item, i) => {
                                      _push6(`<li class="flex items-center w-full"${_scopeId5}><span class="text-muted-foreground mr-auto"${_scopeId5}>${ssrInterpolate(item.label)}</span><span${_scopeId5}>${ssrInterpolate(item.value)}</span></li>`);
                                    });
                                    _push6(`<!--]--></ul>`);
                                    _push6(ssrRenderComponent(_component_UiSeparator, { class: "mb-2" }, null, _parent6, _scopeId5));
                                    _push6(`<ul class="gap-1 text-green-600/80"${_scopeId5}><!--[-->`);
                                    ssrRenderList(unref(currentManager).salaryPays, (pay) => {
                                      _push6(`<li class="${ssrRenderClass(["flex font-semibold"])}"${_scopeId5}>`);
                                      _push6(ssrRenderComponent(_component_UiButton, {
                                        class: "h-5 w-5 px-0 mr-1",
                                        onClick: ($event) => deleteSalaryItem(pay.id)
                                      }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(` - `);
                                          } else {
                                            return [
                                              createTextVNode(" - ")
                                            ];
                                          }
                                        }),
                                        _: 2
                                      }, _parent6, _scopeId5));
                                      _push6(`<span${_scopeId5}> \u0412\u044B\u043F\u043B\u0430\u0442\u0430 </span><span class="ml-auto"${_scopeId5}>${ssrInterpolate(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(pay.price) + "\u20BD")}</span></li>`);
                                    });
                                    _push6(`<!--]--></ul><ul class="gap-1 text-gray-600"${_scopeId5}><!--[-->`);
                                    ssrRenderList(unref(currentManager).salaryCorrections, (corr) => {
                                      _push6(`<li class="${ssrRenderClass([
                                        "flex",
                                        corr.type === "\u041F\u0440\u0438\u0431\u0430\u0432\u043A\u0430" ? "text-green-500" : "text-red-500"
                                      ])}"${_scopeId5}>`);
                                      _push6(ssrRenderComponent(_component_UiButton, {
                                        class: "h-5 w-5 px-0 mr-1",
                                        onClick: ($event) => deleteSalaryCorr(corr.id)
                                      }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(` - `);
                                          } else {
                                            return [
                                              createTextVNode(" - ")
                                            ];
                                          }
                                        }),
                                        _: 2
                                      }, _parent6, _scopeId5));
                                      _push6(`<span${_scopeId5}>${ssrInterpolate(corr.type)}</span>`);
                                      if (corr.description) {
                                        _push6(`<span${_scopeId5}>${ssrInterpolate("(" + corr.description + ")")}</span>`);
                                      } else {
                                        _push6(`<!---->`);
                                      }
                                      _push6(`<span class="ml-auto"${_scopeId5}>${ssrInterpolate(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(corr.price) + "\u20BD")}</span></li>`);
                                    });
                                    _push6(`<!--]--></ul>`);
                                    _push6(ssrRenderComponent(_component_UiSeparator, { class: "my-1" }, null, _parent6, _scopeId5));
                                    _push6(`<ul${_scopeId5}><!--[-->`);
                                    ssrRenderList(unref(salaryInfo).slice(3), (item, i) => {
                                      _push6(`<li class="flex items-center w-full"${_scopeId5}><span class="text-muted-foreground mr-auto"${_scopeId5}>${ssrInterpolate(item.label)}</span><span${_scopeId5}>${ssrInterpolate(item.value)}</span></li>`);
                                    });
                                    _push6(`<!--]--></ul></div></div>`);
                                  } else {
                                    return [
                                      createVNode("div", { class: "flex flex-col gap-5" }, [
                                        createVNode("div", null, [
                                          createVNode("div", { class: "font-semibold" }, "\u041E\u0441\u043D\u043E\u0432\u043D\u0430\u044F \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F"),
                                          createVNode("ul", { class: "gap-1 text-gray-600" }, [
                                            createVNode("div", { class: "flex items-center border-b-1" }, [
                                              (openBlock(), createBlock(_component_MyManagersSetPlanModal, {
                                                key: unref(currentManager).id,
                                                plan: unref(currentManager).plan,
                                                period: unref(period),
                                                "manager-id": unref(currentManager).id,
                                                manager: unref(currentManager).fullName,
                                                onIsPlanSet: (np) => handlePlanSet(np, unref(currentManager).id)
                                              }, null, 8, ["plan", "period", "manager-id", "manager", "onIsPlanSet"])),
                                              createVNode("span", { class: "ml-2" }, "\u041F\u043B\u0430\u043D"),
                                              createVNode("span", { class: "ml-auto" }, toDisplayString(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(unref(currentManager).plan) + "\u20BD"), 1)
                                            ]),
                                            createVNode("li", { class: "flex items-center border-b-1" }, [
                                              createVNode("span", { class: "text-muted-foreground" }, " \u041E\u0441\u0442\u0430\u0442\u043E\u043A \u0434\u043E \u043F\u043B\u0430\u043D\u0430 "),
                                              createVNode("span", { class: "ml-auto" }, toDisplayString(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(
                                                unref(currentManager).plan - unref(currentManager).totalSales
                                              ) + "\u20BD"), 1)
                                            ]),
                                            (openBlock(true), createBlock(Fragment, null, renderList(unref(mainInfo), (item, i) => {
                                              return openBlock(), createBlock("li", {
                                                key: i,
                                                class: "flex items-center border-b-1"
                                              }, [
                                                createVNode("span", { class: "text-muted-foreground" }, toDisplayString(item.label), 1),
                                                createVNode("span", { class: "ml-auto" }, toDisplayString(item.value), 1)
                                              ]);
                                            }), 128))
                                          ])
                                        ]),
                                        createVNode("div", null, [
                                          createVNode("div", { class: "font-semibold" }, "\u041F\u043E\u043A\u0430\u0437\u0430\u0442\u0435\u043B\u0438"),
                                          createVNode("ul", { class: "gap-1 text-gray-600" }, [
                                            (openBlock(true), createBlock(Fragment, null, renderList(unref(characteristicsInfo), (item, i) => {
                                              return openBlock(), createBlock("li", {
                                                key: i,
                                                class: "flex items-center justify-between border-b-1"
                                              }, [
                                                createVNode("span", { class: "text-muted-foreground" }, toDisplayString(item.label), 1),
                                                createVNode("span", null, toDisplayString(item.value), 1)
                                              ]);
                                            }), 128))
                                          ])
                                        ]),
                                        createVNode("div", null, [
                                          createVNode("div", { class: "flex justify-between items-center mb-2" }, [
                                            createVNode("div", { class: "font-semibold" }, "\u0417\u0430\u0440\u043F\u043B\u0430\u0442\u0430"),
                                            createVNode(_component_MySalariesCorrectCreateModal, {
                                              "user-id": unref(currentManager).id,
                                              onCorrectionCreated: (corr) => {
                                                getDatas();
                                              }
                                            }, null, 8, ["user-id", "onCorrectionCreated"])
                                          ]),
                                          createVNode("ul", { class: "gap-1 text-gray-600" }, [
                                            (openBlock(true), createBlock(Fragment, null, renderList(unref(salaryInfo).slice(0, 3), (item, i) => {
                                              return openBlock(), createBlock("li", {
                                                key: i,
                                                class: "flex items-center w-full"
                                              }, [
                                                createVNode("span", { class: "text-muted-foreground mr-auto" }, toDisplayString(item.label), 1),
                                                createVNode("span", null, toDisplayString(item.value), 1)
                                              ]);
                                            }), 128))
                                          ]),
                                          createVNode(_component_UiSeparator, { class: "mb-2" }),
                                          createVNode("ul", { class: "gap-1 text-green-600/80" }, [
                                            (openBlock(true), createBlock(Fragment, null, renderList(unref(currentManager).salaryPays, (pay) => {
                                              return openBlock(), createBlock("li", {
                                                key: pay.id,
                                                class: ["flex font-semibold"]
                                              }, [
                                                createVNode(_component_UiButton, {
                                                  class: "h-5 w-5 px-0 mr-1",
                                                  onClick: ($event) => deleteSalaryItem(pay.id)
                                                }, {
                                                  default: withCtx(() => [
                                                    createTextVNode(" - ")
                                                  ]),
                                                  _: 2
                                                }, 1032, ["onClick"]),
                                                createVNode("span", null, " \u0412\u044B\u043F\u043B\u0430\u0442\u0430 "),
                                                createVNode("span", { class: "ml-auto" }, toDisplayString(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(pay.price) + "\u20BD"), 1)
                                              ]);
                                            }), 128))
                                          ]),
                                          createVNode("ul", { class: "gap-1 text-gray-600" }, [
                                            (openBlock(true), createBlock(Fragment, null, renderList(unref(currentManager).salaryCorrections, (corr) => {
                                              return openBlock(), createBlock("li", {
                                                key: corr.id,
                                                class: [
                                                  "flex",
                                                  corr.type === "\u041F\u0440\u0438\u0431\u0430\u0432\u043A\u0430" ? "text-green-500" : "text-red-500"
                                                ]
                                              }, [
                                                createVNode(_component_UiButton, {
                                                  class: "h-5 w-5 px-0 mr-1",
                                                  onClick: ($event) => deleteSalaryCorr(corr.id)
                                                }, {
                                                  default: withCtx(() => [
                                                    createTextVNode(" - ")
                                                  ]),
                                                  _: 2
                                                }, 1032, ["onClick"]),
                                                createVNode("span", null, toDisplayString(corr.type), 1),
                                                corr.description ? (openBlock(), createBlock("span", { key: 0 }, toDisplayString("(" + corr.description + ")"), 1)) : createCommentVNode("", true),
                                                createVNode("span", { class: "ml-auto" }, toDisplayString(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(corr.price) + "\u20BD"), 1)
                                              ], 2);
                                            }), 128))
                                          ]),
                                          createVNode(_component_UiSeparator, { class: "my-1" }),
                                          createVNode("ul", null, [
                                            (openBlock(true), createBlock(Fragment, null, renderList(unref(salaryInfo).slice(3), (item, i) => {
                                              return openBlock(), createBlock("li", {
                                                key: i,
                                                class: "flex items-center w-full"
                                              }, [
                                                createVNode("span", { class: "text-muted-foreground mr-auto" }, toDisplayString(item.label), 1),
                                                createVNode("span", null, toDisplayString(item.value), 1)
                                              ]);
                                            }), 128))
                                          ])
                                        ])
                                      ])
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_UiScrollArea, { class: "h-[calc(100vh-250px)] px-5 pb-5" }, {
                                  default: withCtx(() => [
                                    createVNode("div", { class: "flex flex-col gap-5" }, [
                                      createVNode("div", null, [
                                        createVNode("div", { class: "font-semibold" }, "\u041E\u0441\u043D\u043E\u0432\u043D\u0430\u044F \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F"),
                                        createVNode("ul", { class: "gap-1 text-gray-600" }, [
                                          createVNode("div", { class: "flex items-center border-b-1" }, [
                                            (openBlock(), createBlock(_component_MyManagersSetPlanModal, {
                                              key: unref(currentManager).id,
                                              plan: unref(currentManager).plan,
                                              period: unref(period),
                                              "manager-id": unref(currentManager).id,
                                              manager: unref(currentManager).fullName,
                                              onIsPlanSet: (np) => handlePlanSet(np, unref(currentManager).id)
                                            }, null, 8, ["plan", "period", "manager-id", "manager", "onIsPlanSet"])),
                                            createVNode("span", { class: "ml-2" }, "\u041F\u043B\u0430\u043D"),
                                            createVNode("span", { class: "ml-auto" }, toDisplayString(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(unref(currentManager).plan) + "\u20BD"), 1)
                                          ]),
                                          createVNode("li", { class: "flex items-center border-b-1" }, [
                                            createVNode("span", { class: "text-muted-foreground" }, " \u041E\u0441\u0442\u0430\u0442\u043E\u043A \u0434\u043E \u043F\u043B\u0430\u043D\u0430 "),
                                            createVNode("span", { class: "ml-auto" }, toDisplayString(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(
                                              unref(currentManager).plan - unref(currentManager).totalSales
                                            ) + "\u20BD"), 1)
                                          ]),
                                          (openBlock(true), createBlock(Fragment, null, renderList(unref(mainInfo), (item, i) => {
                                            return openBlock(), createBlock("li", {
                                              key: i,
                                              class: "flex items-center border-b-1"
                                            }, [
                                              createVNode("span", { class: "text-muted-foreground" }, toDisplayString(item.label), 1),
                                              createVNode("span", { class: "ml-auto" }, toDisplayString(item.value), 1)
                                            ]);
                                          }), 128))
                                        ])
                                      ]),
                                      createVNode("div", null, [
                                        createVNode("div", { class: "font-semibold" }, "\u041F\u043E\u043A\u0430\u0437\u0430\u0442\u0435\u043B\u0438"),
                                        createVNode("ul", { class: "gap-1 text-gray-600" }, [
                                          (openBlock(true), createBlock(Fragment, null, renderList(unref(characteristicsInfo), (item, i) => {
                                            return openBlock(), createBlock("li", {
                                              key: i,
                                              class: "flex items-center justify-between border-b-1"
                                            }, [
                                              createVNode("span", { class: "text-muted-foreground" }, toDisplayString(item.label), 1),
                                              createVNode("span", null, toDisplayString(item.value), 1)
                                            ]);
                                          }), 128))
                                        ])
                                      ]),
                                      createVNode("div", null, [
                                        createVNode("div", { class: "flex justify-between items-center mb-2" }, [
                                          createVNode("div", { class: "font-semibold" }, "\u0417\u0430\u0440\u043F\u043B\u0430\u0442\u0430"),
                                          createVNode(_component_MySalariesCorrectCreateModal, {
                                            "user-id": unref(currentManager).id,
                                            onCorrectionCreated: (corr) => {
                                              getDatas();
                                            }
                                          }, null, 8, ["user-id", "onCorrectionCreated"])
                                        ]),
                                        createVNode("ul", { class: "gap-1 text-gray-600" }, [
                                          (openBlock(true), createBlock(Fragment, null, renderList(unref(salaryInfo).slice(0, 3), (item, i) => {
                                            return openBlock(), createBlock("li", {
                                              key: i,
                                              class: "flex items-center w-full"
                                            }, [
                                              createVNode("span", { class: "text-muted-foreground mr-auto" }, toDisplayString(item.label), 1),
                                              createVNode("span", null, toDisplayString(item.value), 1)
                                            ]);
                                          }), 128))
                                        ]),
                                        createVNode(_component_UiSeparator, { class: "mb-2" }),
                                        createVNode("ul", { class: "gap-1 text-green-600/80" }, [
                                          (openBlock(true), createBlock(Fragment, null, renderList(unref(currentManager).salaryPays, (pay) => {
                                            return openBlock(), createBlock("li", {
                                              key: pay.id,
                                              class: ["flex font-semibold"]
                                            }, [
                                              createVNode(_component_UiButton, {
                                                class: "h-5 w-5 px-0 mr-1",
                                                onClick: ($event) => deleteSalaryItem(pay.id)
                                              }, {
                                                default: withCtx(() => [
                                                  createTextVNode(" - ")
                                                ]),
                                                _: 2
                                              }, 1032, ["onClick"]),
                                              createVNode("span", null, " \u0412\u044B\u043F\u043B\u0430\u0442\u0430 "),
                                              createVNode("span", { class: "ml-auto" }, toDisplayString(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(pay.price) + "\u20BD"), 1)
                                            ]);
                                          }), 128))
                                        ]),
                                        createVNode("ul", { class: "gap-1 text-gray-600" }, [
                                          (openBlock(true), createBlock(Fragment, null, renderList(unref(currentManager).salaryCorrections, (corr) => {
                                            return openBlock(), createBlock("li", {
                                              key: corr.id,
                                              class: [
                                                "flex",
                                                corr.type === "\u041F\u0440\u0438\u0431\u0430\u0432\u043A\u0430" ? "text-green-500" : "text-red-500"
                                              ]
                                            }, [
                                              createVNode(_component_UiButton, {
                                                class: "h-5 w-5 px-0 mr-1",
                                                onClick: ($event) => deleteSalaryCorr(corr.id)
                                              }, {
                                                default: withCtx(() => [
                                                  createTextVNode(" - ")
                                                ]),
                                                _: 2
                                              }, 1032, ["onClick"]),
                                              createVNode("span", null, toDisplayString(corr.type), 1),
                                              corr.description ? (openBlock(), createBlock("span", { key: 0 }, toDisplayString("(" + corr.description + ")"), 1)) : createCommentVNode("", true),
                                              createVNode("span", { class: "ml-auto" }, toDisplayString(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(corr.price) + "\u20BD"), 1)
                                            ], 2);
                                          }), 128))
                                        ]),
                                        createVNode(_component_UiSeparator, { class: "my-1" }),
                                        createVNode("ul", null, [
                                          (openBlock(true), createBlock(Fragment, null, renderList(unref(salaryInfo).slice(3), (item, i) => {
                                            return openBlock(), createBlock("li", {
                                              key: i,
                                              class: "flex items-center w-full"
                                            }, [
                                              createVNode("span", { class: "text-muted-foreground mr-auto" }, toDisplayString(item.label), 1),
                                              createVNode("span", null, toDisplayString(item.value), 1)
                                            ]);
                                          }), 128))
                                        ])
                                      ])
                                    ])
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_UiTabsContent, { value: "deals" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_UiScrollArea, { class: "relative h-[calc(100vh-270px)] px-2" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  var _a, _b, _c, _d;
                                  if (_push6) {
                                    if ((_b = (_a = unref(currentManager)) == null ? void 0 : _a.dealsInfo) == null ? void 0 : _b.length) {
                                      _push6(ssrRenderComponent(_component_UiTable, null, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(ssrRenderComponent(_component_UiTableCaption, null, {
                                              default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                if (_push8) {
                                                  _push8(`\u0421\u043F\u0438\u0441\u043E\u043A \u0437\u0430\u043A\u0430\u0437\u043E\u0432 \u043C\u0435\u043D\u0435\u0434\u0436\u0435\u0440\u0430`);
                                                } else {
                                                  return [
                                                    createTextVNode("\u0421\u043F\u0438\u0441\u043E\u043A \u0437\u0430\u043A\u0430\u0437\u043E\u0432 \u043C\u0435\u043D\u0435\u0434\u0436\u0435\u0440\u0430")
                                                  ];
                                                }
                                              }),
                                              _: 1
                                            }, _parent7, _scopeId6));
                                            _push7(ssrRenderComponent(_component_UiTableHeader, null, {
                                              default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                if (_push8) {
                                                  _push8(ssrRenderComponent(_component_UiTableRow, { class: "bg-gray-100" }, {
                                                    default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                      if (_push9) {
                                                        _push9(ssrRenderComponent(_component_UiTableHead, { class: "text-left" }, {
                                                          default: withCtx((_9, _push10, _parent10, _scopeId9) => {
                                                            if (_push10) {
                                                              _push10(` \u0417\u0430\u043A\u0430\u0437 `);
                                                            } else {
                                                              return [
                                                                createTextVNode(" \u0417\u0430\u043A\u0430\u0437 ")
                                                              ];
                                                            }
                                                          }),
                                                          _: 1
                                                        }, _parent9, _scopeId8));
                                                        _push9(ssrRenderComponent(_component_UiTableHead, { class: "text-center" }, {
                                                          default: withCtx((_9, _push10, _parent10, _scopeId9) => {
                                                            if (_push10) {
                                                              _push10(`\u0414\u0430\u0442\u0430`);
                                                            } else {
                                                              return [
                                                                createTextVNode("\u0414\u0430\u0442\u0430")
                                                              ];
                                                            }
                                                          }),
                                                          _: 1
                                                        }, _parent9, _scopeId8));
                                                        _push9(ssrRenderComponent(_component_UiTableHead, { class: "text-center" }, {
                                                          default: withCtx((_9, _push10, _parent10, _scopeId9) => {
                                                            if (_push10) {
                                                              _push10(`\u0414\u043E\u043B\u044F`);
                                                            } else {
                                                              return [
                                                                createTextVNode("\u0414\u043E\u043B\u044F")
                                                              ];
                                                            }
                                                          }),
                                                          _: 1
                                                        }, _parent9, _scopeId8));
                                                        _push9(ssrRenderComponent(_component_UiTableHead, { class: "text-center" }, {
                                                          default: withCtx((_9, _push10, _parent10, _scopeId9) => {
                                                            if (_push10) {
                                                              _push10(`\u041E\u043F\u043B\u0430\u0447\u0435\u043D\u043E`);
                                                            } else {
                                                              return [
                                                                createTextVNode("\u041E\u043F\u043B\u0430\u0447\u0435\u043D\u043E")
                                                              ];
                                                            }
                                                          }),
                                                          _: 1
                                                        }, _parent9, _scopeId8));
                                                      } else {
                                                        return [
                                                          createVNode(_component_UiTableHead, { class: "text-left" }, {
                                                            default: withCtx(() => [
                                                              createTextVNode(" \u0417\u0430\u043A\u0430\u0437 ")
                                                            ]),
                                                            _: 1
                                                          }),
                                                          createVNode(_component_UiTableHead, { class: "text-center" }, {
                                                            default: withCtx(() => [
                                                              createTextVNode("\u0414\u0430\u0442\u0430")
                                                            ]),
                                                            _: 1
                                                          }),
                                                          createVNode(_component_UiTableHead, { class: "text-center" }, {
                                                            default: withCtx(() => [
                                                              createTextVNode("\u0414\u043E\u043B\u044F")
                                                            ]),
                                                            _: 1
                                                          }),
                                                          createVNode(_component_UiTableHead, { class: "text-center" }, {
                                                            default: withCtx(() => [
                                                              createTextVNode("\u041E\u043F\u043B\u0430\u0447\u0435\u043D\u043E")
                                                            ]),
                                                            _: 1
                                                          })
                                                        ];
                                                      }
                                                    }),
                                                    _: 1
                                                  }, _parent8, _scopeId7));
                                                } else {
                                                  return [
                                                    createVNode(_component_UiTableRow, { class: "bg-gray-100" }, {
                                                      default: withCtx(() => [
                                                        createVNode(_component_UiTableHead, { class: "text-left" }, {
                                                          default: withCtx(() => [
                                                            createTextVNode(" \u0417\u0430\u043A\u0430\u0437 ")
                                                          ]),
                                                          _: 1
                                                        }),
                                                        createVNode(_component_UiTableHead, { class: "text-center" }, {
                                                          default: withCtx(() => [
                                                            createTextVNode("\u0414\u0430\u0442\u0430")
                                                          ]),
                                                          _: 1
                                                        }),
                                                        createVNode(_component_UiTableHead, { class: "text-center" }, {
                                                          default: withCtx(() => [
                                                            createTextVNode("\u0414\u043E\u043B\u044F")
                                                          ]),
                                                          _: 1
                                                        }),
                                                        createVNode(_component_UiTableHead, { class: "text-center" }, {
                                                          default: withCtx(() => [
                                                            createTextVNode("\u041E\u043F\u043B\u0430\u0447\u0435\u043D\u043E")
                                                          ]),
                                                          _: 1
                                                        })
                                                      ]),
                                                      _: 1
                                                    })
                                                  ];
                                                }
                                              }),
                                              _: 1
                                            }, _parent7, _scopeId6));
                                            _push7(ssrRenderComponent(_component_UiTableBody, null, {
                                              default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                if (_push8) {
                                                  _push8(`<!--[-->`);
                                                  ssrRenderList(unref(currentManager).dealsInfo, (deal, i) => {
                                                    _push8(ssrRenderComponent(_component_UiTableRow, {
                                                      key: i,
                                                      class: "text-center whitespace-nowrap cursor-pointer",
                                                      onClick: async () => await getDeal(deal.id)
                                                    }, {
                                                      default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                        if (_push9) {
                                                          _push9(ssrRenderComponent(_component_UiTableCell, { class: "text-left text-wrap" }, {
                                                            default: withCtx((_9, _push10, _parent10, _scopeId9) => {
                                                              if (_push10) {
                                                                _push10(`${ssrInterpolate(deal.title)}`);
                                                              } else {
                                                                return [
                                                                  createTextVNode(toDisplayString(deal.title), 1)
                                                                ];
                                                              }
                                                            }),
                                                            _: 2
                                                          }, _parent9, _scopeId8));
                                                          _push9(ssrRenderComponent(_component_UiTableCell, { class: "font-medium text-xs" }, {
                                                            default: withCtx((_9, _push10, _parent10, _scopeId9) => {
                                                              if (_push10) {
                                                                _push10(`${ssrInterpolate(("dateFormat" in _ctx ? _ctx.dateFormat : unref(dateFormat))(deal.saleDate))}`);
                                                              } else {
                                                                return [
                                                                  createTextVNode(toDisplayString(("dateFormat" in _ctx ? _ctx.dateFormat : unref(dateFormat))(deal.saleDate)), 1)
                                                                ];
                                                              }
                                                            }),
                                                            _: 2
                                                          }, _parent9, _scopeId8));
                                                          _push9(ssrRenderComponent(_component_UiTableCell, { class: "font-medium flex flex-col" }, {
                                                            default: withCtx((_9, _push10, _parent10, _scopeId9) => {
                                                              if (_push10) {
                                                                _push10(`<span${_scopeId9}>${ssrInterpolate(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(deal.dealPrice) + "\u20BD")}</span><span class="text-xs text-gray-500"${_scopeId9}>${ssrInterpolate(deal.dealerPart + "%")}</span>`);
                                                              } else {
                                                                return [
                                                                  createVNode("span", null, toDisplayString(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(deal.dealPrice) + "\u20BD"), 1),
                                                                  createVNode("span", { class: "text-xs text-gray-500" }, toDisplayString(deal.dealerPart + "%"), 1)
                                                                ];
                                                              }
                                                            }),
                                                            _: 2
                                                          }, _parent9, _scopeId8));
                                                          _push9(ssrRenderComponent(_component_UiTableCell, { class: "font-medium" }, {
                                                            default: withCtx((_9, _push10, _parent10, _scopeId9) => {
                                                              if (_push10) {
                                                                _push10(`${ssrInterpolate(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(deal.paid) + "\u20BD")}`);
                                                              } else {
                                                                return [
                                                                  createTextVNode(toDisplayString(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(deal.paid) + "\u20BD"), 1)
                                                                ];
                                                              }
                                                            }),
                                                            _: 2
                                                          }, _parent9, _scopeId8));
                                                        } else {
                                                          return [
                                                            createVNode(_component_UiTableCell, { class: "text-left text-wrap" }, {
                                                              default: withCtx(() => [
                                                                createTextVNode(toDisplayString(deal.title), 1)
                                                              ]),
                                                              _: 2
                                                            }, 1024),
                                                            createVNode(_component_UiTableCell, { class: "font-medium text-xs" }, {
                                                              default: withCtx(() => [
                                                                createTextVNode(toDisplayString(("dateFormat" in _ctx ? _ctx.dateFormat : unref(dateFormat))(deal.saleDate)), 1)
                                                              ]),
                                                              _: 2
                                                            }, 1024),
                                                            createVNode(_component_UiTableCell, { class: "font-medium flex flex-col" }, {
                                                              default: withCtx(() => [
                                                                createVNode("span", null, toDisplayString(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(deal.dealPrice) + "\u20BD"), 1),
                                                                createVNode("span", { class: "text-xs text-gray-500" }, toDisplayString(deal.dealerPart + "%"), 1)
                                                              ]),
                                                              _: 2
                                                            }, 1024),
                                                            createVNode(_component_UiTableCell, { class: "font-medium" }, {
                                                              default: withCtx(() => [
                                                                createTextVNode(toDisplayString(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(deal.paid) + "\u20BD"), 1)
                                                              ]),
                                                              _: 2
                                                            }, 1024)
                                                          ];
                                                        }
                                                      }),
                                                      _: 2
                                                    }, _parent8, _scopeId7));
                                                  });
                                                  _push8(`<!--]-->`);
                                                  _push8(ssrRenderComponent(_component_UiTableRow, { class: "text-center font-bold" }, {
                                                    default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                      if (_push9) {
                                                        _push9(ssrRenderComponent(_component_UiTableCell, { class: "text-left" }, {
                                                          default: withCtx((_9, _push10, _parent10, _scopeId9) => {
                                                            if (_push10) {
                                                              _push10(` \u0418\u0422\u041E\u0413\u041E(${ssrInterpolate(unref(currentManager).dealsInfo.length)}) `);
                                                            } else {
                                                              return [
                                                                createTextVNode(" \u0418\u0422\u041E\u0413\u041E(" + toDisplayString(unref(currentManager).dealsInfo.length) + ") ", 1)
                                                              ];
                                                            }
                                                          }),
                                                          _: 1
                                                        }, _parent9, _scopeId8));
                                                        _push9(ssrRenderComponent(_component_UiTableCell, null, {
                                                          default: withCtx((_9, _push10, _parent10, _scopeId9) => {
                                                            if (_push10) {
                                                              _push10(`${ssrInterpolate(unref(period))}`);
                                                            } else {
                                                              return [
                                                                createTextVNode(toDisplayString(unref(period)), 1)
                                                              ];
                                                            }
                                                          }),
                                                          _: 1
                                                        }, _parent9, _scopeId8));
                                                        _push9(ssrRenderComponent(_component_UiTableCell, null, {
                                                          default: withCtx((_9, _push10, _parent10, _scopeId9) => {
                                                            if (_push10) {
                                                              _push10(`${ssrInterpolate(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(
                                                                unref(currentManager).dealsInfo.reduce(
                                                                  (a, b) => a + b.dealerPrice,
                                                                  0
                                                                )
                                                              ) + "\u20BD")}`);
                                                            } else {
                                                              return [
                                                                createTextVNode(toDisplayString(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(
                                                                  unref(currentManager).dealsInfo.reduce(
                                                                    (a, b) => a + b.dealerPrice,
                                                                    0
                                                                  )
                                                                ) + "\u20BD"), 1)
                                                              ];
                                                            }
                                                          }),
                                                          _: 1
                                                        }, _parent9, _scopeId8));
                                                        _push9(ssrRenderComponent(_component_UiTableCell, { class: "text-center" }, {
                                                          default: withCtx((_9, _push10, _parent10, _scopeId9) => {
                                                            if (_push10) {
                                                              _push10(`${ssrInterpolate(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(
                                                                +unref(currentManager).dealsInfo.reduce((a, b) => a + b.paid, 0).toFixed(2)
                                                              ) + "\u20BD")}`);
                                                            } else {
                                                              return [
                                                                createTextVNode(toDisplayString(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(
                                                                  +unref(currentManager).dealsInfo.reduce((a, b) => a + b.paid, 0).toFixed(2)
                                                                ) + "\u20BD"), 1)
                                                              ];
                                                            }
                                                          }),
                                                          _: 1
                                                        }, _parent9, _scopeId8));
                                                      } else {
                                                        return [
                                                          createVNode(_component_UiTableCell, { class: "text-left" }, {
                                                            default: withCtx(() => [
                                                              createTextVNode(" \u0418\u0422\u041E\u0413\u041E(" + toDisplayString(unref(currentManager).dealsInfo.length) + ") ", 1)
                                                            ]),
                                                            _: 1
                                                          }),
                                                          createVNode(_component_UiTableCell, null, {
                                                            default: withCtx(() => [
                                                              createTextVNode(toDisplayString(unref(period)), 1)
                                                            ]),
                                                            _: 1
                                                          }),
                                                          createVNode(_component_UiTableCell, null, {
                                                            default: withCtx(() => [
                                                              createTextVNode(toDisplayString(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(
                                                                unref(currentManager).dealsInfo.reduce(
                                                                  (a, b) => a + b.dealerPrice,
                                                                  0
                                                                )
                                                              ) + "\u20BD"), 1)
                                                            ]),
                                                            _: 1
                                                          }),
                                                          createVNode(_component_UiTableCell, { class: "text-center" }, {
                                                            default: withCtx(() => [
                                                              createTextVNode(toDisplayString(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(
                                                                +unref(currentManager).dealsInfo.reduce((a, b) => a + b.paid, 0).toFixed(2)
                                                              ) + "\u20BD"), 1)
                                                            ]),
                                                            _: 1
                                                          })
                                                        ];
                                                      }
                                                    }),
                                                    _: 1
                                                  }, _parent8, _scopeId7));
                                                } else {
                                                  return [
                                                    (openBlock(true), createBlock(Fragment, null, renderList(unref(currentManager).dealsInfo, (deal, i) => {
                                                      return openBlock(), createBlock(_component_UiTableRow, {
                                                        key: i,
                                                        class: "text-center whitespace-nowrap cursor-pointer",
                                                        onClick: async () => await getDeal(deal.id)
                                                      }, {
                                                        default: withCtx(() => [
                                                          createVNode(_component_UiTableCell, { class: "text-left text-wrap" }, {
                                                            default: withCtx(() => [
                                                              createTextVNode(toDisplayString(deal.title), 1)
                                                            ]),
                                                            _: 2
                                                          }, 1024),
                                                          createVNode(_component_UiTableCell, { class: "font-medium text-xs" }, {
                                                            default: withCtx(() => [
                                                              createTextVNode(toDisplayString(("dateFormat" in _ctx ? _ctx.dateFormat : unref(dateFormat))(deal.saleDate)), 1)
                                                            ]),
                                                            _: 2
                                                          }, 1024),
                                                          createVNode(_component_UiTableCell, { class: "font-medium flex flex-col" }, {
                                                            default: withCtx(() => [
                                                              createVNode("span", null, toDisplayString(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(deal.dealPrice) + "\u20BD"), 1),
                                                              createVNode("span", { class: "text-xs text-gray-500" }, toDisplayString(deal.dealerPart + "%"), 1)
                                                            ]),
                                                            _: 2
                                                          }, 1024),
                                                          createVNode(_component_UiTableCell, { class: "font-medium" }, {
                                                            default: withCtx(() => [
                                                              createTextVNode(toDisplayString(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(deal.paid) + "\u20BD"), 1)
                                                            ]),
                                                            _: 2
                                                          }, 1024)
                                                        ]),
                                                        _: 2
                                                      }, 1032, ["onClick"]);
                                                    }), 128)),
                                                    createVNode(_component_UiTableRow, { class: "text-center font-bold" }, {
                                                      default: withCtx(() => [
                                                        createVNode(_component_UiTableCell, { class: "text-left" }, {
                                                          default: withCtx(() => [
                                                            createTextVNode(" \u0418\u0422\u041E\u0413\u041E(" + toDisplayString(unref(currentManager).dealsInfo.length) + ") ", 1)
                                                          ]),
                                                          _: 1
                                                        }),
                                                        createVNode(_component_UiTableCell, null, {
                                                          default: withCtx(() => [
                                                            createTextVNode(toDisplayString(unref(period)), 1)
                                                          ]),
                                                          _: 1
                                                        }),
                                                        createVNode(_component_UiTableCell, null, {
                                                          default: withCtx(() => [
                                                            createTextVNode(toDisplayString(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(
                                                              unref(currentManager).dealsInfo.reduce(
                                                                (a, b) => a + b.dealerPrice,
                                                                0
                                                              )
                                                            ) + "\u20BD"), 1)
                                                          ]),
                                                          _: 1
                                                        }),
                                                        createVNode(_component_UiTableCell, { class: "text-center" }, {
                                                          default: withCtx(() => [
                                                            createTextVNode(toDisplayString(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(
                                                              +unref(currentManager).dealsInfo.reduce((a, b) => a + b.paid, 0).toFixed(2)
                                                            ) + "\u20BD"), 1)
                                                          ]),
                                                          _: 1
                                                        })
                                                      ]),
                                                      _: 1
                                                    })
                                                  ];
                                                }
                                              }),
                                              _: 1
                                            }, _parent7, _scopeId6));
                                          } else {
                                            return [
                                              createVNode(_component_UiTableCaption, null, {
                                                default: withCtx(() => [
                                                  createTextVNode("\u0421\u043F\u0438\u0441\u043E\u043A \u0437\u0430\u043A\u0430\u0437\u043E\u0432 \u043C\u0435\u043D\u0435\u0434\u0436\u0435\u0440\u0430")
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(_component_UiTableHeader, null, {
                                                default: withCtx(() => [
                                                  createVNode(_component_UiTableRow, { class: "bg-gray-100" }, {
                                                    default: withCtx(() => [
                                                      createVNode(_component_UiTableHead, { class: "text-left" }, {
                                                        default: withCtx(() => [
                                                          createTextVNode(" \u0417\u0430\u043A\u0430\u0437 ")
                                                        ]),
                                                        _: 1
                                                      }),
                                                      createVNode(_component_UiTableHead, { class: "text-center" }, {
                                                        default: withCtx(() => [
                                                          createTextVNode("\u0414\u0430\u0442\u0430")
                                                        ]),
                                                        _: 1
                                                      }),
                                                      createVNode(_component_UiTableHead, { class: "text-center" }, {
                                                        default: withCtx(() => [
                                                          createTextVNode("\u0414\u043E\u043B\u044F")
                                                        ]),
                                                        _: 1
                                                      }),
                                                      createVNode(_component_UiTableHead, { class: "text-center" }, {
                                                        default: withCtx(() => [
                                                          createTextVNode("\u041E\u043F\u043B\u0430\u0447\u0435\u043D\u043E")
                                                        ]),
                                                        _: 1
                                                      })
                                                    ]),
                                                    _: 1
                                                  })
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(_component_UiTableBody, null, {
                                                default: withCtx(() => [
                                                  (openBlock(true), createBlock(Fragment, null, renderList(unref(currentManager).dealsInfo, (deal, i) => {
                                                    return openBlock(), createBlock(_component_UiTableRow, {
                                                      key: i,
                                                      class: "text-center whitespace-nowrap cursor-pointer",
                                                      onClick: async () => await getDeal(deal.id)
                                                    }, {
                                                      default: withCtx(() => [
                                                        createVNode(_component_UiTableCell, { class: "text-left text-wrap" }, {
                                                          default: withCtx(() => [
                                                            createTextVNode(toDisplayString(deal.title), 1)
                                                          ]),
                                                          _: 2
                                                        }, 1024),
                                                        createVNode(_component_UiTableCell, { class: "font-medium text-xs" }, {
                                                          default: withCtx(() => [
                                                            createTextVNode(toDisplayString(("dateFormat" in _ctx ? _ctx.dateFormat : unref(dateFormat))(deal.saleDate)), 1)
                                                          ]),
                                                          _: 2
                                                        }, 1024),
                                                        createVNode(_component_UiTableCell, { class: "font-medium flex flex-col" }, {
                                                          default: withCtx(() => [
                                                            createVNode("span", null, toDisplayString(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(deal.dealPrice) + "\u20BD"), 1),
                                                            createVNode("span", { class: "text-xs text-gray-500" }, toDisplayString(deal.dealerPart + "%"), 1)
                                                          ]),
                                                          _: 2
                                                        }, 1024),
                                                        createVNode(_component_UiTableCell, { class: "font-medium" }, {
                                                          default: withCtx(() => [
                                                            createTextVNode(toDisplayString(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(deal.paid) + "\u20BD"), 1)
                                                          ]),
                                                          _: 2
                                                        }, 1024)
                                                      ]),
                                                      _: 2
                                                    }, 1032, ["onClick"]);
                                                  }), 128)),
                                                  createVNode(_component_UiTableRow, { class: "text-center font-bold" }, {
                                                    default: withCtx(() => [
                                                      createVNode(_component_UiTableCell, { class: "text-left" }, {
                                                        default: withCtx(() => [
                                                          createTextVNode(" \u0418\u0422\u041E\u0413\u041E(" + toDisplayString(unref(currentManager).dealsInfo.length) + ") ", 1)
                                                        ]),
                                                        _: 1
                                                      }),
                                                      createVNode(_component_UiTableCell, null, {
                                                        default: withCtx(() => [
                                                          createTextVNode(toDisplayString(unref(period)), 1)
                                                        ]),
                                                        _: 1
                                                      }),
                                                      createVNode(_component_UiTableCell, null, {
                                                        default: withCtx(() => [
                                                          createTextVNode(toDisplayString(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(
                                                            unref(currentManager).dealsInfo.reduce(
                                                              (a, b) => a + b.dealerPrice,
                                                              0
                                                            )
                                                          ) + "\u20BD"), 1)
                                                        ]),
                                                        _: 1
                                                      }),
                                                      createVNode(_component_UiTableCell, { class: "text-center" }, {
                                                        default: withCtx(() => [
                                                          createTextVNode(toDisplayString(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(
                                                            +unref(currentManager).dealsInfo.reduce((a, b) => a + b.paid, 0).toFixed(2)
                                                          ) + "\u20BD"), 1)
                                                        ]),
                                                        _: 1
                                                      })
                                                    ]),
                                                    _: 1
                                                  })
                                                ]),
                                                _: 1
                                              })
                                            ];
                                          }
                                        }),
                                        _: 1
                                      }, _parent6, _scopeId5));
                                    } else {
                                      _push6(`<!---->`);
                                    }
                                  } else {
                                    return [
                                      ((_d = (_c = unref(currentManager)) == null ? void 0 : _c.dealsInfo) == null ? void 0 : _d.length) ? (openBlock(), createBlock(_component_UiTable, { key: 0 }, {
                                        default: withCtx(() => [
                                          createVNode(_component_UiTableCaption, null, {
                                            default: withCtx(() => [
                                              createTextVNode("\u0421\u043F\u0438\u0441\u043E\u043A \u0437\u0430\u043A\u0430\u0437\u043E\u0432 \u043C\u0435\u043D\u0435\u0434\u0436\u0435\u0440\u0430")
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(_component_UiTableHeader, null, {
                                            default: withCtx(() => [
                                              createVNode(_component_UiTableRow, { class: "bg-gray-100" }, {
                                                default: withCtx(() => [
                                                  createVNode(_component_UiTableHead, { class: "text-left" }, {
                                                    default: withCtx(() => [
                                                      createTextVNode(" \u0417\u0430\u043A\u0430\u0437 ")
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createVNode(_component_UiTableHead, { class: "text-center" }, {
                                                    default: withCtx(() => [
                                                      createTextVNode("\u0414\u0430\u0442\u0430")
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createVNode(_component_UiTableHead, { class: "text-center" }, {
                                                    default: withCtx(() => [
                                                      createTextVNode("\u0414\u043E\u043B\u044F")
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createVNode(_component_UiTableHead, { class: "text-center" }, {
                                                    default: withCtx(() => [
                                                      createTextVNode("\u041E\u043F\u043B\u0430\u0447\u0435\u043D\u043E")
                                                    ]),
                                                    _: 1
                                                  })
                                                ]),
                                                _: 1
                                              })
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(_component_UiTableBody, null, {
                                            default: withCtx(() => [
                                              (openBlock(true), createBlock(Fragment, null, renderList(unref(currentManager).dealsInfo, (deal, i) => {
                                                return openBlock(), createBlock(_component_UiTableRow, {
                                                  key: i,
                                                  class: "text-center whitespace-nowrap cursor-pointer",
                                                  onClick: async () => await getDeal(deal.id)
                                                }, {
                                                  default: withCtx(() => [
                                                    createVNode(_component_UiTableCell, { class: "text-left text-wrap" }, {
                                                      default: withCtx(() => [
                                                        createTextVNode(toDisplayString(deal.title), 1)
                                                      ]),
                                                      _: 2
                                                    }, 1024),
                                                    createVNode(_component_UiTableCell, { class: "font-medium text-xs" }, {
                                                      default: withCtx(() => [
                                                        createTextVNode(toDisplayString(("dateFormat" in _ctx ? _ctx.dateFormat : unref(dateFormat))(deal.saleDate)), 1)
                                                      ]),
                                                      _: 2
                                                    }, 1024),
                                                    createVNode(_component_UiTableCell, { class: "font-medium flex flex-col" }, {
                                                      default: withCtx(() => [
                                                        createVNode("span", null, toDisplayString(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(deal.dealPrice) + "\u20BD"), 1),
                                                        createVNode("span", { class: "text-xs text-gray-500" }, toDisplayString(deal.dealerPart + "%"), 1)
                                                      ]),
                                                      _: 2
                                                    }, 1024),
                                                    createVNode(_component_UiTableCell, { class: "font-medium" }, {
                                                      default: withCtx(() => [
                                                        createTextVNode(toDisplayString(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(deal.paid) + "\u20BD"), 1)
                                                      ]),
                                                      _: 2
                                                    }, 1024)
                                                  ]),
                                                  _: 2
                                                }, 1032, ["onClick"]);
                                              }), 128)),
                                              createVNode(_component_UiTableRow, { class: "text-center font-bold" }, {
                                                default: withCtx(() => [
                                                  createVNode(_component_UiTableCell, { class: "text-left" }, {
                                                    default: withCtx(() => [
                                                      createTextVNode(" \u0418\u0422\u041E\u0413\u041E(" + toDisplayString(unref(currentManager).dealsInfo.length) + ") ", 1)
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createVNode(_component_UiTableCell, null, {
                                                    default: withCtx(() => [
                                                      createTextVNode(toDisplayString(unref(period)), 1)
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createVNode(_component_UiTableCell, null, {
                                                    default: withCtx(() => [
                                                      createTextVNode(toDisplayString(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(
                                                        unref(currentManager).dealsInfo.reduce(
                                                          (a, b) => a + b.dealerPrice,
                                                          0
                                                        )
                                                      ) + "\u20BD"), 1)
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createVNode(_component_UiTableCell, { class: "text-center" }, {
                                                    default: withCtx(() => [
                                                      createTextVNode(toDisplayString(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(
                                                        +unref(currentManager).dealsInfo.reduce((a, b) => a + b.paid, 0).toFixed(2)
                                                      ) + "\u20BD"), 1)
                                                    ]),
                                                    _: 1
                                                  })
                                                ]),
                                                _: 1
                                              })
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      })) : createCommentVNode("", true)
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_UiScrollArea, { class: "relative h-[calc(100vh-270px)] px-2" }, {
                                  default: withCtx(() => {
                                    var _a, _b;
                                    return [
                                      ((_b = (_a = unref(currentManager)) == null ? void 0 : _a.dealsInfo) == null ? void 0 : _b.length) ? (openBlock(), createBlock(_component_UiTable, { key: 0 }, {
                                        default: withCtx(() => [
                                          createVNode(_component_UiTableCaption, null, {
                                            default: withCtx(() => [
                                              createTextVNode("\u0421\u043F\u0438\u0441\u043E\u043A \u0437\u0430\u043A\u0430\u0437\u043E\u0432 \u043C\u0435\u043D\u0435\u0434\u0436\u0435\u0440\u0430")
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(_component_UiTableHeader, null, {
                                            default: withCtx(() => [
                                              createVNode(_component_UiTableRow, { class: "bg-gray-100" }, {
                                                default: withCtx(() => [
                                                  createVNode(_component_UiTableHead, { class: "text-left" }, {
                                                    default: withCtx(() => [
                                                      createTextVNode(" \u0417\u0430\u043A\u0430\u0437 ")
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createVNode(_component_UiTableHead, { class: "text-center" }, {
                                                    default: withCtx(() => [
                                                      createTextVNode("\u0414\u0430\u0442\u0430")
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createVNode(_component_UiTableHead, { class: "text-center" }, {
                                                    default: withCtx(() => [
                                                      createTextVNode("\u0414\u043E\u043B\u044F")
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createVNode(_component_UiTableHead, { class: "text-center" }, {
                                                    default: withCtx(() => [
                                                      createTextVNode("\u041E\u043F\u043B\u0430\u0447\u0435\u043D\u043E")
                                                    ]),
                                                    _: 1
                                                  })
                                                ]),
                                                _: 1
                                              })
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(_component_UiTableBody, null, {
                                            default: withCtx(() => [
                                              (openBlock(true), createBlock(Fragment, null, renderList(unref(currentManager).dealsInfo, (deal, i) => {
                                                return openBlock(), createBlock(_component_UiTableRow, {
                                                  key: i,
                                                  class: "text-center whitespace-nowrap cursor-pointer",
                                                  onClick: async () => await getDeal(deal.id)
                                                }, {
                                                  default: withCtx(() => [
                                                    createVNode(_component_UiTableCell, { class: "text-left text-wrap" }, {
                                                      default: withCtx(() => [
                                                        createTextVNode(toDisplayString(deal.title), 1)
                                                      ]),
                                                      _: 2
                                                    }, 1024),
                                                    createVNode(_component_UiTableCell, { class: "font-medium text-xs" }, {
                                                      default: withCtx(() => [
                                                        createTextVNode(toDisplayString(("dateFormat" in _ctx ? _ctx.dateFormat : unref(dateFormat))(deal.saleDate)), 1)
                                                      ]),
                                                      _: 2
                                                    }, 1024),
                                                    createVNode(_component_UiTableCell, { class: "font-medium flex flex-col" }, {
                                                      default: withCtx(() => [
                                                        createVNode("span", null, toDisplayString(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(deal.dealPrice) + "\u20BD"), 1),
                                                        createVNode("span", { class: "text-xs text-gray-500" }, toDisplayString(deal.dealerPart + "%"), 1)
                                                      ]),
                                                      _: 2
                                                    }, 1024),
                                                    createVNode(_component_UiTableCell, { class: "font-medium" }, {
                                                      default: withCtx(() => [
                                                        createTextVNode(toDisplayString(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(deal.paid) + "\u20BD"), 1)
                                                      ]),
                                                      _: 2
                                                    }, 1024)
                                                  ]),
                                                  _: 2
                                                }, 1032, ["onClick"]);
                                              }), 128)),
                                              createVNode(_component_UiTableRow, { class: "text-center font-bold" }, {
                                                default: withCtx(() => [
                                                  createVNode(_component_UiTableCell, { class: "text-left" }, {
                                                    default: withCtx(() => [
                                                      createTextVNode(" \u0418\u0422\u041E\u0413\u041E(" + toDisplayString(unref(currentManager).dealsInfo.length) + ") ", 1)
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createVNode(_component_UiTableCell, null, {
                                                    default: withCtx(() => [
                                                      createTextVNode(toDisplayString(unref(period)), 1)
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createVNode(_component_UiTableCell, null, {
                                                    default: withCtx(() => [
                                                      createTextVNode(toDisplayString(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(
                                                        unref(currentManager).dealsInfo.reduce(
                                                          (a, b) => a + b.dealerPrice,
                                                          0
                                                        )
                                                      ) + "\u20BD"), 1)
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createVNode(_component_UiTableCell, { class: "text-center" }, {
                                                    default: withCtx(() => [
                                                      createTextVNode(toDisplayString(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(
                                                        +unref(currentManager).dealsInfo.reduce((a, b) => a + b.paid, 0).toFixed(2)
                                                      ) + "\u20BD"), 1)
                                                    ]),
                                                    _: 1
                                                  })
                                                ]),
                                                _: 1
                                              })
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      })) : createCommentVNode("", true)
                                    ];
                                  }),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_UiTabsContent, { value: "dops" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_UiScrollArea, { class: "relative h-[calc(100vh-270px)] px-2" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  var _a, _b, _c, _d;
                                  if (_push6) {
                                    if ((_b = (_a = unref(currentManager)) == null ? void 0 : _a.dopsInfo) == null ? void 0 : _b.length) {
                                      _push6(ssrRenderComponent(_component_UiTable, null, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(ssrRenderComponent(_component_UiTableCaption, null, {
                                              default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                if (_push8) {
                                                  _push8(`\u0421\u043F\u0438\u0441\u043E\u043A \u0434\u043E\u043F.\u043F\u0440\u043E\u0434\u0430\u0436 \u043C\u0435\u043D\u0435\u0434\u0436\u0435\u0440\u0430`);
                                                } else {
                                                  return [
                                                    createTextVNode("\u0421\u043F\u0438\u0441\u043E\u043A \u0434\u043E\u043F.\u043F\u0440\u043E\u0434\u0430\u0436 \u043C\u0435\u043D\u0435\u0434\u0436\u0435\u0440\u0430")
                                                  ];
                                                }
                                              }),
                                              _: 1
                                            }, _parent7, _scopeId6));
                                            _push7(ssrRenderComponent(_component_UiTableHeader, null, {
                                              default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                if (_push8) {
                                                  _push8(ssrRenderComponent(_component_UiTableRow, { class: "bg-gray-100" }, {
                                                    default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                      if (_push9) {
                                                        _push9(ssrRenderComponent(_component_UiTableHead, { class: "text-left" }, {
                                                          default: withCtx((_9, _push10, _parent10, _scopeId9) => {
                                                            if (_push10) {
                                                              _push10(` \u0414\u043E\u043F `);
                                                            } else {
                                                              return [
                                                                createTextVNode(" \u0414\u043E\u043F ")
                                                              ];
                                                            }
                                                          }),
                                                          _: 1
                                                        }, _parent9, _scopeId8));
                                                        _push9(ssrRenderComponent(_component_UiTableHead, { class: "text-center" }, {
                                                          default: withCtx((_9, _push10, _parent10, _scopeId9) => {
                                                            if (_push10) {
                                                              _push10(`\u0414\u0430\u0442\u0430`);
                                                            } else {
                                                              return [
                                                                createTextVNode("\u0414\u0430\u0442\u0430")
                                                              ];
                                                            }
                                                          }),
                                                          _: 1
                                                        }, _parent9, _scopeId8));
                                                        _push9(ssrRenderComponent(_component_UiTableHead, { class: "text-center" }, {
                                                          default: withCtx((_9, _push10, _parent10, _scopeId9) => {
                                                            if (_push10) {
                                                              _push10(`\u0421\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C`);
                                                            } else {
                                                              return [
                                                                createTextVNode("\u0421\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C")
                                                              ];
                                                            }
                                                          }),
                                                          _: 1
                                                        }, _parent9, _scopeId8));
                                                        _push9(ssrRenderComponent(_component_UiTableHead, { class: "text-center" }, {
                                                          default: withCtx((_9, _push10, _parent10, _scopeId9) => {
                                                            if (_push10) {
                                                              _push10(`\u041E\u043F\u043B\u0430\u0447\u0435\u043D\u043E`);
                                                            } else {
                                                              return [
                                                                createTextVNode("\u041E\u043F\u043B\u0430\u0447\u0435\u043D\u043E")
                                                              ];
                                                            }
                                                          }),
                                                          _: 1
                                                        }, _parent9, _scopeId8));
                                                      } else {
                                                        return [
                                                          createVNode(_component_UiTableHead, { class: "text-left" }, {
                                                            default: withCtx(() => [
                                                              createTextVNode(" \u0414\u043E\u043F ")
                                                            ]),
                                                            _: 1
                                                          }),
                                                          createVNode(_component_UiTableHead, { class: "text-center" }, {
                                                            default: withCtx(() => [
                                                              createTextVNode("\u0414\u0430\u0442\u0430")
                                                            ]),
                                                            _: 1
                                                          }),
                                                          createVNode(_component_UiTableHead, { class: "text-center" }, {
                                                            default: withCtx(() => [
                                                              createTextVNode("\u0421\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C")
                                                            ]),
                                                            _: 1
                                                          }),
                                                          createVNode(_component_UiTableHead, { class: "text-center" }, {
                                                            default: withCtx(() => [
                                                              createTextVNode("\u041E\u043F\u043B\u0430\u0447\u0435\u043D\u043E")
                                                            ]),
                                                            _: 1
                                                          })
                                                        ];
                                                      }
                                                    }),
                                                    _: 1
                                                  }, _parent8, _scopeId7));
                                                } else {
                                                  return [
                                                    createVNode(_component_UiTableRow, { class: "bg-gray-100" }, {
                                                      default: withCtx(() => [
                                                        createVNode(_component_UiTableHead, { class: "text-left" }, {
                                                          default: withCtx(() => [
                                                            createTextVNode(" \u0414\u043E\u043F ")
                                                          ]),
                                                          _: 1
                                                        }),
                                                        createVNode(_component_UiTableHead, { class: "text-center" }, {
                                                          default: withCtx(() => [
                                                            createTextVNode("\u0414\u0430\u0442\u0430")
                                                          ]),
                                                          _: 1
                                                        }),
                                                        createVNode(_component_UiTableHead, { class: "text-center" }, {
                                                          default: withCtx(() => [
                                                            createTextVNode("\u0421\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C")
                                                          ]),
                                                          _: 1
                                                        }),
                                                        createVNode(_component_UiTableHead, { class: "text-center" }, {
                                                          default: withCtx(() => [
                                                            createTextVNode("\u041E\u043F\u043B\u0430\u0447\u0435\u043D\u043E")
                                                          ]),
                                                          _: 1
                                                        })
                                                      ]),
                                                      _: 1
                                                    })
                                                  ];
                                                }
                                              }),
                                              _: 1
                                            }, _parent7, _scopeId6));
                                            _push7(ssrRenderComponent(_component_UiTableBody, null, {
                                              default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                if (_push8) {
                                                  _push8(`<!--[-->`);
                                                  ssrRenderList(unref(currentManager).dopsInfo, (dop, i) => {
                                                    _push8(ssrRenderComponent(_component_UiTableRow, {
                                                      key: i,
                                                      class: "whitespace-nowrap text-center cursor-pointer",
                                                      onClick: async () => await getDeal(dop.dealId)
                                                    }, {
                                                      default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                        if (_push9) {
                                                          _push9(ssrRenderComponent(_component_UiTableCell, { class: "text-left flex flex-col" }, {
                                                            default: withCtx((_9, _push10, _parent10, _scopeId9) => {
                                                              if (_push10) {
                                                                _push10(`<span${_scopeId9}>${ssrInterpolate(dop.dealTitle)}</span><span class="text-xs text-gray-500"${_scopeId9}>${ssrInterpolate(dop.title)}</span>`);
                                                              } else {
                                                                return [
                                                                  createVNode("span", null, toDisplayString(dop.dealTitle), 1),
                                                                  createVNode("span", { class: "text-xs text-gray-500" }, toDisplayString(dop.title), 1)
                                                                ];
                                                              }
                                                            }),
                                                            _: 2
                                                          }, _parent9, _scopeId8));
                                                          _push9(ssrRenderComponent(_component_UiTableCell, { class: "font-medium text-xs" }, {
                                                            default: withCtx((_9, _push10, _parent10, _scopeId9) => {
                                                              if (_push10) {
                                                                _push10(`${ssrInterpolate(("dateFormat" in _ctx ? _ctx.dateFormat : unref(dateFormat))(dop.saleDate))}`);
                                                              } else {
                                                                return [
                                                                  createTextVNode(toDisplayString(("dateFormat" in _ctx ? _ctx.dateFormat : unref(dateFormat))(dop.saleDate)), 1)
                                                                ];
                                                              }
                                                            }),
                                                            _: 2
                                                          }, _parent9, _scopeId8));
                                                          _push9(ssrRenderComponent(_component_UiTableCell, { class: "font-medium" }, {
                                                            default: withCtx((_9, _push10, _parent10, _scopeId9) => {
                                                              if (_push10) {
                                                                _push10(`${ssrInterpolate(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(dop.dopPrice) + "\u20BD")}`);
                                                              } else {
                                                                return [
                                                                  createTextVNode(toDisplayString(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(dop.dopPrice) + "\u20BD"), 1)
                                                                ];
                                                              }
                                                            }),
                                                            _: 2
                                                          }, _parent9, _scopeId8));
                                                          _push9(ssrRenderComponent(_component_UiTableCell, { class: "font-medium" }, {
                                                            default: withCtx((_9, _push10, _parent10, _scopeId9) => {
                                                              if (_push10) {
                                                                _push10(`${ssrInterpolate(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(dop.paid) + "\u20BD")}`);
                                                              } else {
                                                                return [
                                                                  createTextVNode(toDisplayString(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(dop.paid) + "\u20BD"), 1)
                                                                ];
                                                              }
                                                            }),
                                                            _: 2
                                                          }, _parent9, _scopeId8));
                                                        } else {
                                                          return [
                                                            createVNode(_component_UiTableCell, { class: "text-left flex flex-col" }, {
                                                              default: withCtx(() => [
                                                                createVNode("span", null, toDisplayString(dop.dealTitle), 1),
                                                                createVNode("span", { class: "text-xs text-gray-500" }, toDisplayString(dop.title), 1)
                                                              ]),
                                                              _: 2
                                                            }, 1024),
                                                            createVNode(_component_UiTableCell, { class: "font-medium text-xs" }, {
                                                              default: withCtx(() => [
                                                                createTextVNode(toDisplayString(("dateFormat" in _ctx ? _ctx.dateFormat : unref(dateFormat))(dop.saleDate)), 1)
                                                              ]),
                                                              _: 2
                                                            }, 1024),
                                                            createVNode(_component_UiTableCell, { class: "font-medium" }, {
                                                              default: withCtx(() => [
                                                                createTextVNode(toDisplayString(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(dop.dopPrice) + "\u20BD"), 1)
                                                              ]),
                                                              _: 2
                                                            }, 1024),
                                                            createVNode(_component_UiTableCell, { class: "font-medium" }, {
                                                              default: withCtx(() => [
                                                                createTextVNode(toDisplayString(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(dop.paid) + "\u20BD"), 1)
                                                              ]),
                                                              _: 2
                                                            }, 1024)
                                                          ];
                                                        }
                                                      }),
                                                      _: 2
                                                    }, _parent8, _scopeId7));
                                                  });
                                                  _push8(`<!--]-->`);
                                                  _push8(ssrRenderComponent(_component_UiTableRow, { class: "text-center font-bold" }, {
                                                    default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                      if (_push9) {
                                                        _push9(ssrRenderComponent(_component_UiTableCell, { class: "whitespace-nowrap text-left" }, {
                                                          default: withCtx((_9, _push10, _parent10, _scopeId9) => {
                                                            if (_push10) {
                                                              _push10(` \u0418\u0422\u041E\u0413\u041E(${ssrInterpolate(unref(currentManager).dopsInfo.length)}) `);
                                                            } else {
                                                              return [
                                                                createTextVNode(" \u0418\u0422\u041E\u0413\u041E(" + toDisplayString(unref(currentManager).dopsInfo.length) + ") ", 1)
                                                              ];
                                                            }
                                                          }),
                                                          _: 1
                                                        }, _parent9, _scopeId8));
                                                        _push9(ssrRenderComponent(_component_UiTableCell, null, {
                                                          default: withCtx((_9, _push10, _parent10, _scopeId9) => {
                                                            if (_push10) {
                                                              _push10(`${ssrInterpolate(unref(period))}`);
                                                            } else {
                                                              return [
                                                                createTextVNode(toDisplayString(unref(period)), 1)
                                                              ];
                                                            }
                                                          }),
                                                          _: 1
                                                        }, _parent9, _scopeId8));
                                                        _push9(ssrRenderComponent(_component_UiTableCell, null, {
                                                          default: withCtx((_9, _push10, _parent10, _scopeId9) => {
                                                            if (_push10) {
                                                              _push10(`${ssrInterpolate(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(
                                                                unref(currentManager).dopsInfo.reduce(
                                                                  (a, b) => a + b.dopPrice,
                                                                  0
                                                                )
                                                              ) + "\u20BD")}`);
                                                            } else {
                                                              return [
                                                                createTextVNode(toDisplayString(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(
                                                                  unref(currentManager).dopsInfo.reduce(
                                                                    (a, b) => a + b.dopPrice,
                                                                    0
                                                                  )
                                                                ) + "\u20BD"), 1)
                                                              ];
                                                            }
                                                          }),
                                                          _: 1
                                                        }, _parent9, _scopeId8));
                                                        _push9(ssrRenderComponent(_component_UiTableCell, null, {
                                                          default: withCtx((_9, _push10, _parent10, _scopeId9) => {
                                                            if (_push10) {
                                                              _push10(`${ssrInterpolate(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(
                                                                +unref(currentManager).dopsInfo.reduce((a, b) => a + b.paid, 0).toFixed()
                                                              ) + "\u20BD")}`);
                                                            } else {
                                                              return [
                                                                createTextVNode(toDisplayString(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(
                                                                  +unref(currentManager).dopsInfo.reduce((a, b) => a + b.paid, 0).toFixed()
                                                                ) + "\u20BD"), 1)
                                                              ];
                                                            }
                                                          }),
                                                          _: 1
                                                        }, _parent9, _scopeId8));
                                                      } else {
                                                        return [
                                                          createVNode(_component_UiTableCell, { class: "whitespace-nowrap text-left" }, {
                                                            default: withCtx(() => [
                                                              createTextVNode(" \u0418\u0422\u041E\u0413\u041E(" + toDisplayString(unref(currentManager).dopsInfo.length) + ") ", 1)
                                                            ]),
                                                            _: 1
                                                          }),
                                                          createVNode(_component_UiTableCell, null, {
                                                            default: withCtx(() => [
                                                              createTextVNode(toDisplayString(unref(period)), 1)
                                                            ]),
                                                            _: 1
                                                          }),
                                                          createVNode(_component_UiTableCell, null, {
                                                            default: withCtx(() => [
                                                              createTextVNode(toDisplayString(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(
                                                                unref(currentManager).dopsInfo.reduce(
                                                                  (a, b) => a + b.dopPrice,
                                                                  0
                                                                )
                                                              ) + "\u20BD"), 1)
                                                            ]),
                                                            _: 1
                                                          }),
                                                          createVNode(_component_UiTableCell, null, {
                                                            default: withCtx(() => [
                                                              createTextVNode(toDisplayString(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(
                                                                +unref(currentManager).dopsInfo.reduce((a, b) => a + b.paid, 0).toFixed()
                                                              ) + "\u20BD"), 1)
                                                            ]),
                                                            _: 1
                                                          })
                                                        ];
                                                      }
                                                    }),
                                                    _: 1
                                                  }, _parent8, _scopeId7));
                                                } else {
                                                  return [
                                                    (openBlock(true), createBlock(Fragment, null, renderList(unref(currentManager).dopsInfo, (dop, i) => {
                                                      return openBlock(), createBlock(_component_UiTableRow, {
                                                        key: i,
                                                        class: "whitespace-nowrap text-center cursor-pointer",
                                                        onClick: async () => await getDeal(dop.dealId)
                                                      }, {
                                                        default: withCtx(() => [
                                                          createVNode(_component_UiTableCell, { class: "text-left flex flex-col" }, {
                                                            default: withCtx(() => [
                                                              createVNode("span", null, toDisplayString(dop.dealTitle), 1),
                                                              createVNode("span", { class: "text-xs text-gray-500" }, toDisplayString(dop.title), 1)
                                                            ]),
                                                            _: 2
                                                          }, 1024),
                                                          createVNode(_component_UiTableCell, { class: "font-medium text-xs" }, {
                                                            default: withCtx(() => [
                                                              createTextVNode(toDisplayString(("dateFormat" in _ctx ? _ctx.dateFormat : unref(dateFormat))(dop.saleDate)), 1)
                                                            ]),
                                                            _: 2
                                                          }, 1024),
                                                          createVNode(_component_UiTableCell, { class: "font-medium" }, {
                                                            default: withCtx(() => [
                                                              createTextVNode(toDisplayString(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(dop.dopPrice) + "\u20BD"), 1)
                                                            ]),
                                                            _: 2
                                                          }, 1024),
                                                          createVNode(_component_UiTableCell, { class: "font-medium" }, {
                                                            default: withCtx(() => [
                                                              createTextVNode(toDisplayString(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(dop.paid) + "\u20BD"), 1)
                                                            ]),
                                                            _: 2
                                                          }, 1024)
                                                        ]),
                                                        _: 2
                                                      }, 1032, ["onClick"]);
                                                    }), 128)),
                                                    createVNode(_component_UiTableRow, { class: "text-center font-bold" }, {
                                                      default: withCtx(() => [
                                                        createVNode(_component_UiTableCell, { class: "whitespace-nowrap text-left" }, {
                                                          default: withCtx(() => [
                                                            createTextVNode(" \u0418\u0422\u041E\u0413\u041E(" + toDisplayString(unref(currentManager).dopsInfo.length) + ") ", 1)
                                                          ]),
                                                          _: 1
                                                        }),
                                                        createVNode(_component_UiTableCell, null, {
                                                          default: withCtx(() => [
                                                            createTextVNode(toDisplayString(unref(period)), 1)
                                                          ]),
                                                          _: 1
                                                        }),
                                                        createVNode(_component_UiTableCell, null, {
                                                          default: withCtx(() => [
                                                            createTextVNode(toDisplayString(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(
                                                              unref(currentManager).dopsInfo.reduce(
                                                                (a, b) => a + b.dopPrice,
                                                                0
                                                              )
                                                            ) + "\u20BD"), 1)
                                                          ]),
                                                          _: 1
                                                        }),
                                                        createVNode(_component_UiTableCell, null, {
                                                          default: withCtx(() => [
                                                            createTextVNode(toDisplayString(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(
                                                              +unref(currentManager).dopsInfo.reduce((a, b) => a + b.paid, 0).toFixed()
                                                            ) + "\u20BD"), 1)
                                                          ]),
                                                          _: 1
                                                        })
                                                      ]),
                                                      _: 1
                                                    })
                                                  ];
                                                }
                                              }),
                                              _: 1
                                            }, _parent7, _scopeId6));
                                          } else {
                                            return [
                                              createVNode(_component_UiTableCaption, null, {
                                                default: withCtx(() => [
                                                  createTextVNode("\u0421\u043F\u0438\u0441\u043E\u043A \u0434\u043E\u043F.\u043F\u0440\u043E\u0434\u0430\u0436 \u043C\u0435\u043D\u0435\u0434\u0436\u0435\u0440\u0430")
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(_component_UiTableHeader, null, {
                                                default: withCtx(() => [
                                                  createVNode(_component_UiTableRow, { class: "bg-gray-100" }, {
                                                    default: withCtx(() => [
                                                      createVNode(_component_UiTableHead, { class: "text-left" }, {
                                                        default: withCtx(() => [
                                                          createTextVNode(" \u0414\u043E\u043F ")
                                                        ]),
                                                        _: 1
                                                      }),
                                                      createVNode(_component_UiTableHead, { class: "text-center" }, {
                                                        default: withCtx(() => [
                                                          createTextVNode("\u0414\u0430\u0442\u0430")
                                                        ]),
                                                        _: 1
                                                      }),
                                                      createVNode(_component_UiTableHead, { class: "text-center" }, {
                                                        default: withCtx(() => [
                                                          createTextVNode("\u0421\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C")
                                                        ]),
                                                        _: 1
                                                      }),
                                                      createVNode(_component_UiTableHead, { class: "text-center" }, {
                                                        default: withCtx(() => [
                                                          createTextVNode("\u041E\u043F\u043B\u0430\u0447\u0435\u043D\u043E")
                                                        ]),
                                                        _: 1
                                                      })
                                                    ]),
                                                    _: 1
                                                  })
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(_component_UiTableBody, null, {
                                                default: withCtx(() => [
                                                  (openBlock(true), createBlock(Fragment, null, renderList(unref(currentManager).dopsInfo, (dop, i) => {
                                                    return openBlock(), createBlock(_component_UiTableRow, {
                                                      key: i,
                                                      class: "whitespace-nowrap text-center cursor-pointer",
                                                      onClick: async () => await getDeal(dop.dealId)
                                                    }, {
                                                      default: withCtx(() => [
                                                        createVNode(_component_UiTableCell, { class: "text-left flex flex-col" }, {
                                                          default: withCtx(() => [
                                                            createVNode("span", null, toDisplayString(dop.dealTitle), 1),
                                                            createVNode("span", { class: "text-xs text-gray-500" }, toDisplayString(dop.title), 1)
                                                          ]),
                                                          _: 2
                                                        }, 1024),
                                                        createVNode(_component_UiTableCell, { class: "font-medium text-xs" }, {
                                                          default: withCtx(() => [
                                                            createTextVNode(toDisplayString(("dateFormat" in _ctx ? _ctx.dateFormat : unref(dateFormat))(dop.saleDate)), 1)
                                                          ]),
                                                          _: 2
                                                        }, 1024),
                                                        createVNode(_component_UiTableCell, { class: "font-medium" }, {
                                                          default: withCtx(() => [
                                                            createTextVNode(toDisplayString(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(dop.dopPrice) + "\u20BD"), 1)
                                                          ]),
                                                          _: 2
                                                        }, 1024),
                                                        createVNode(_component_UiTableCell, { class: "font-medium" }, {
                                                          default: withCtx(() => [
                                                            createTextVNode(toDisplayString(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(dop.paid) + "\u20BD"), 1)
                                                          ]),
                                                          _: 2
                                                        }, 1024)
                                                      ]),
                                                      _: 2
                                                    }, 1032, ["onClick"]);
                                                  }), 128)),
                                                  createVNode(_component_UiTableRow, { class: "text-center font-bold" }, {
                                                    default: withCtx(() => [
                                                      createVNode(_component_UiTableCell, { class: "whitespace-nowrap text-left" }, {
                                                        default: withCtx(() => [
                                                          createTextVNode(" \u0418\u0422\u041E\u0413\u041E(" + toDisplayString(unref(currentManager).dopsInfo.length) + ") ", 1)
                                                        ]),
                                                        _: 1
                                                      }),
                                                      createVNode(_component_UiTableCell, null, {
                                                        default: withCtx(() => [
                                                          createTextVNode(toDisplayString(unref(period)), 1)
                                                        ]),
                                                        _: 1
                                                      }),
                                                      createVNode(_component_UiTableCell, null, {
                                                        default: withCtx(() => [
                                                          createTextVNode(toDisplayString(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(
                                                            unref(currentManager).dopsInfo.reduce(
                                                              (a, b) => a + b.dopPrice,
                                                              0
                                                            )
                                                          ) + "\u20BD"), 1)
                                                        ]),
                                                        _: 1
                                                      }),
                                                      createVNode(_component_UiTableCell, null, {
                                                        default: withCtx(() => [
                                                          createTextVNode(toDisplayString(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(
                                                            +unref(currentManager).dopsInfo.reduce((a, b) => a + b.paid, 0).toFixed()
                                                          ) + "\u20BD"), 1)
                                                        ]),
                                                        _: 1
                                                      })
                                                    ]),
                                                    _: 1
                                                  })
                                                ]),
                                                _: 1
                                              })
                                            ];
                                          }
                                        }),
                                        _: 1
                                      }, _parent6, _scopeId5));
                                    } else {
                                      _push6(`<!---->`);
                                    }
                                  } else {
                                    return [
                                      ((_d = (_c = unref(currentManager)) == null ? void 0 : _c.dopsInfo) == null ? void 0 : _d.length) ? (openBlock(), createBlock(_component_UiTable, { key: 0 }, {
                                        default: withCtx(() => [
                                          createVNode(_component_UiTableCaption, null, {
                                            default: withCtx(() => [
                                              createTextVNode("\u0421\u043F\u0438\u0441\u043E\u043A \u0434\u043E\u043F.\u043F\u0440\u043E\u0434\u0430\u0436 \u043C\u0435\u043D\u0435\u0434\u0436\u0435\u0440\u0430")
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(_component_UiTableHeader, null, {
                                            default: withCtx(() => [
                                              createVNode(_component_UiTableRow, { class: "bg-gray-100" }, {
                                                default: withCtx(() => [
                                                  createVNode(_component_UiTableHead, { class: "text-left" }, {
                                                    default: withCtx(() => [
                                                      createTextVNode(" \u0414\u043E\u043F ")
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createVNode(_component_UiTableHead, { class: "text-center" }, {
                                                    default: withCtx(() => [
                                                      createTextVNode("\u0414\u0430\u0442\u0430")
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createVNode(_component_UiTableHead, { class: "text-center" }, {
                                                    default: withCtx(() => [
                                                      createTextVNode("\u0421\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C")
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createVNode(_component_UiTableHead, { class: "text-center" }, {
                                                    default: withCtx(() => [
                                                      createTextVNode("\u041E\u043F\u043B\u0430\u0447\u0435\u043D\u043E")
                                                    ]),
                                                    _: 1
                                                  })
                                                ]),
                                                _: 1
                                              })
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(_component_UiTableBody, null, {
                                            default: withCtx(() => [
                                              (openBlock(true), createBlock(Fragment, null, renderList(unref(currentManager).dopsInfo, (dop, i) => {
                                                return openBlock(), createBlock(_component_UiTableRow, {
                                                  key: i,
                                                  class: "whitespace-nowrap text-center cursor-pointer",
                                                  onClick: async () => await getDeal(dop.dealId)
                                                }, {
                                                  default: withCtx(() => [
                                                    createVNode(_component_UiTableCell, { class: "text-left flex flex-col" }, {
                                                      default: withCtx(() => [
                                                        createVNode("span", null, toDisplayString(dop.dealTitle), 1),
                                                        createVNode("span", { class: "text-xs text-gray-500" }, toDisplayString(dop.title), 1)
                                                      ]),
                                                      _: 2
                                                    }, 1024),
                                                    createVNode(_component_UiTableCell, { class: "font-medium text-xs" }, {
                                                      default: withCtx(() => [
                                                        createTextVNode(toDisplayString(("dateFormat" in _ctx ? _ctx.dateFormat : unref(dateFormat))(dop.saleDate)), 1)
                                                      ]),
                                                      _: 2
                                                    }, 1024),
                                                    createVNode(_component_UiTableCell, { class: "font-medium" }, {
                                                      default: withCtx(() => [
                                                        createTextVNode(toDisplayString(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(dop.dopPrice) + "\u20BD"), 1)
                                                      ]),
                                                      _: 2
                                                    }, 1024),
                                                    createVNode(_component_UiTableCell, { class: "font-medium" }, {
                                                      default: withCtx(() => [
                                                        createTextVNode(toDisplayString(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(dop.paid) + "\u20BD"), 1)
                                                      ]),
                                                      _: 2
                                                    }, 1024)
                                                  ]),
                                                  _: 2
                                                }, 1032, ["onClick"]);
                                              }), 128)),
                                              createVNode(_component_UiTableRow, { class: "text-center font-bold" }, {
                                                default: withCtx(() => [
                                                  createVNode(_component_UiTableCell, { class: "whitespace-nowrap text-left" }, {
                                                    default: withCtx(() => [
                                                      createTextVNode(" \u0418\u0422\u041E\u0413\u041E(" + toDisplayString(unref(currentManager).dopsInfo.length) + ") ", 1)
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createVNode(_component_UiTableCell, null, {
                                                    default: withCtx(() => [
                                                      createTextVNode(toDisplayString(unref(period)), 1)
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createVNode(_component_UiTableCell, null, {
                                                    default: withCtx(() => [
                                                      createTextVNode(toDisplayString(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(
                                                        unref(currentManager).dopsInfo.reduce(
                                                          (a, b) => a + b.dopPrice,
                                                          0
                                                        )
                                                      ) + "\u20BD"), 1)
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createVNode(_component_UiTableCell, null, {
                                                    default: withCtx(() => [
                                                      createTextVNode(toDisplayString(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(
                                                        +unref(currentManager).dopsInfo.reduce((a, b) => a + b.paid, 0).toFixed()
                                                      ) + "\u20BD"), 1)
                                                    ]),
                                                    _: 1
                                                  })
                                                ]),
                                                _: 1
                                              })
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      })) : createCommentVNode("", true)
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_UiScrollArea, { class: "relative h-[calc(100vh-270px)] px-2" }, {
                                  default: withCtx(() => {
                                    var _a, _b;
                                    return [
                                      ((_b = (_a = unref(currentManager)) == null ? void 0 : _a.dopsInfo) == null ? void 0 : _b.length) ? (openBlock(), createBlock(_component_UiTable, { key: 0 }, {
                                        default: withCtx(() => [
                                          createVNode(_component_UiTableCaption, null, {
                                            default: withCtx(() => [
                                              createTextVNode("\u0421\u043F\u0438\u0441\u043E\u043A \u0434\u043E\u043F.\u043F\u0440\u043E\u0434\u0430\u0436 \u043C\u0435\u043D\u0435\u0434\u0436\u0435\u0440\u0430")
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(_component_UiTableHeader, null, {
                                            default: withCtx(() => [
                                              createVNode(_component_UiTableRow, { class: "bg-gray-100" }, {
                                                default: withCtx(() => [
                                                  createVNode(_component_UiTableHead, { class: "text-left" }, {
                                                    default: withCtx(() => [
                                                      createTextVNode(" \u0414\u043E\u043F ")
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createVNode(_component_UiTableHead, { class: "text-center" }, {
                                                    default: withCtx(() => [
                                                      createTextVNode("\u0414\u0430\u0442\u0430")
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createVNode(_component_UiTableHead, { class: "text-center" }, {
                                                    default: withCtx(() => [
                                                      createTextVNode("\u0421\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C")
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createVNode(_component_UiTableHead, { class: "text-center" }, {
                                                    default: withCtx(() => [
                                                      createTextVNode("\u041E\u043F\u043B\u0430\u0447\u0435\u043D\u043E")
                                                    ]),
                                                    _: 1
                                                  })
                                                ]),
                                                _: 1
                                              })
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(_component_UiTableBody, null, {
                                            default: withCtx(() => [
                                              (openBlock(true), createBlock(Fragment, null, renderList(unref(currentManager).dopsInfo, (dop, i) => {
                                                return openBlock(), createBlock(_component_UiTableRow, {
                                                  key: i,
                                                  class: "whitespace-nowrap text-center cursor-pointer",
                                                  onClick: async () => await getDeal(dop.dealId)
                                                }, {
                                                  default: withCtx(() => [
                                                    createVNode(_component_UiTableCell, { class: "text-left flex flex-col" }, {
                                                      default: withCtx(() => [
                                                        createVNode("span", null, toDisplayString(dop.dealTitle), 1),
                                                        createVNode("span", { class: "text-xs text-gray-500" }, toDisplayString(dop.title), 1)
                                                      ]),
                                                      _: 2
                                                    }, 1024),
                                                    createVNode(_component_UiTableCell, { class: "font-medium text-xs" }, {
                                                      default: withCtx(() => [
                                                        createTextVNode(toDisplayString(("dateFormat" in _ctx ? _ctx.dateFormat : unref(dateFormat))(dop.saleDate)), 1)
                                                      ]),
                                                      _: 2
                                                    }, 1024),
                                                    createVNode(_component_UiTableCell, { class: "font-medium" }, {
                                                      default: withCtx(() => [
                                                        createTextVNode(toDisplayString(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(dop.dopPrice) + "\u20BD"), 1)
                                                      ]),
                                                      _: 2
                                                    }, 1024),
                                                    createVNode(_component_UiTableCell, { class: "font-medium" }, {
                                                      default: withCtx(() => [
                                                        createTextVNode(toDisplayString(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(dop.paid) + "\u20BD"), 1)
                                                      ]),
                                                      _: 2
                                                    }, 1024)
                                                  ]),
                                                  _: 2
                                                }, 1032, ["onClick"]);
                                              }), 128)),
                                              createVNode(_component_UiTableRow, { class: "text-center font-bold" }, {
                                                default: withCtx(() => [
                                                  createVNode(_component_UiTableCell, { class: "whitespace-nowrap text-left" }, {
                                                    default: withCtx(() => [
                                                      createTextVNode(" \u0418\u0422\u041E\u0413\u041E(" + toDisplayString(unref(currentManager).dopsInfo.length) + ") ", 1)
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createVNode(_component_UiTableCell, null, {
                                                    default: withCtx(() => [
                                                      createTextVNode(toDisplayString(unref(period)), 1)
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createVNode(_component_UiTableCell, null, {
                                                    default: withCtx(() => [
                                                      createTextVNode(toDisplayString(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(
                                                        unref(currentManager).dopsInfo.reduce(
                                                          (a, b) => a + b.dopPrice,
                                                          0
                                                        )
                                                      ) + "\u20BD"), 1)
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createVNode(_component_UiTableCell, null, {
                                                    default: withCtx(() => [
                                                      createTextVNode(toDisplayString(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(
                                                        +unref(currentManager).dopsInfo.reduce((a, b) => a + b.paid, 0).toFixed()
                                                      ) + "\u20BD"), 1)
                                                    ]),
                                                    _: 1
                                                  })
                                                ]),
                                                _: 1
                                              })
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      })) : createCommentVNode("", true)
                                    ];
                                  }),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_UiTabsContent, { value: "remainders" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_UiScrollArea, { class: "relative h-[calc(100vh-270px)] px-2" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  var _a, _b, _c, _d, _e, _f, _g, _h;
                                  if (_push6) {
                                    _push6(`<div class="flex flex-col gap-8"${_scopeId5}>`);
                                    if ((_b = (_a = unref(currentManager)) == null ? void 0 : _a.dealsInfoPrevMounth) == null ? void 0 : _b.length) {
                                      _push6(ssrRenderComponent(_component_UiTable, null, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(ssrRenderComponent(_component_UiTableCaption, null, null, _parent7, _scopeId6));
                                            _push7(ssrRenderComponent(_component_UiTableHeader, null, {
                                              default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                if (_push8) {
                                                  _push8(ssrRenderComponent(_component_UiTableRow, { class: "bg-gray-100" }, {
                                                    default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                      if (_push9) {
                                                        _push9(ssrRenderComponent(_component_UiTableHead, { class: "text-left text-xl" }, {
                                                          default: withCtx((_9, _push10, _parent10, _scopeId9) => {
                                                            if (_push10) {
                                                              _push10(` \u0417\u0430\u043A\u0430\u0437\u044B `);
                                                            } else {
                                                              return [
                                                                createTextVNode(" \u0417\u0430\u043A\u0430\u0437\u044B ")
                                                              ];
                                                            }
                                                          }),
                                                          _: 1
                                                        }, _parent9, _scopeId8));
                                                        _push9(ssrRenderComponent(_component_UiTableHead, { class: "text-center" }, {
                                                          default: withCtx((_9, _push10, _parent10, _scopeId9) => {
                                                            if (_push10) {
                                                              _push10(`\u0414\u043E\u043B\u044F`);
                                                            } else {
                                                              return [
                                                                createTextVNode("\u0414\u043E\u043B\u044F")
                                                              ];
                                                            }
                                                          }),
                                                          _: 1
                                                        }, _parent9, _scopeId8));
                                                        _push9(ssrRenderComponent(_component_UiTableHead, { class: "text-center" }, {
                                                          default: withCtx((_9, _push10, _parent10, _scopeId9) => {
                                                            if (_push10) {
                                                              _push10(`\u041E\u043F\u043B\u0430\u0447\u0435\u043D\u043E`);
                                                            } else {
                                                              return [
                                                                createTextVNode("\u041E\u043F\u043B\u0430\u0447\u0435\u043D\u043E")
                                                              ];
                                                            }
                                                          }),
                                                          _: 1
                                                        }, _parent9, _scopeId8));
                                                        _push9(ssrRenderComponent(_component_UiTableHead, { class: "text-center" }, {
                                                          default: withCtx((_9, _push10, _parent10, _scopeId9) => {
                                                            if (_push10) {
                                                              _push10(`\u0412 \u0417\u041F`);
                                                            } else {
                                                              return [
                                                                createTextVNode("\u0412 \u0417\u041F")
                                                              ];
                                                            }
                                                          }),
                                                          _: 1
                                                        }, _parent9, _scopeId8));
                                                      } else {
                                                        return [
                                                          createVNode(_component_UiTableHead, { class: "text-left text-xl" }, {
                                                            default: withCtx(() => [
                                                              createTextVNode(" \u0417\u0430\u043A\u0430\u0437\u044B ")
                                                            ]),
                                                            _: 1
                                                          }),
                                                          createVNode(_component_UiTableHead, { class: "text-center" }, {
                                                            default: withCtx(() => [
                                                              createTextVNode("\u0414\u043E\u043B\u044F")
                                                            ]),
                                                            _: 1
                                                          }),
                                                          createVNode(_component_UiTableHead, { class: "text-center" }, {
                                                            default: withCtx(() => [
                                                              createTextVNode("\u041E\u043F\u043B\u0430\u0447\u0435\u043D\u043E")
                                                            ]),
                                                            _: 1
                                                          }),
                                                          createVNode(_component_UiTableHead, { class: "text-center" }, {
                                                            default: withCtx(() => [
                                                              createTextVNode("\u0412 \u0417\u041F")
                                                            ]),
                                                            _: 1
                                                          })
                                                        ];
                                                      }
                                                    }),
                                                    _: 1
                                                  }, _parent8, _scopeId7));
                                                } else {
                                                  return [
                                                    createVNode(_component_UiTableRow, { class: "bg-gray-100" }, {
                                                      default: withCtx(() => [
                                                        createVNode(_component_UiTableHead, { class: "text-left text-xl" }, {
                                                          default: withCtx(() => [
                                                            createTextVNode(" \u0417\u0430\u043A\u0430\u0437\u044B ")
                                                          ]),
                                                          _: 1
                                                        }),
                                                        createVNode(_component_UiTableHead, { class: "text-center" }, {
                                                          default: withCtx(() => [
                                                            createTextVNode("\u0414\u043E\u043B\u044F")
                                                          ]),
                                                          _: 1
                                                        }),
                                                        createVNode(_component_UiTableHead, { class: "text-center" }, {
                                                          default: withCtx(() => [
                                                            createTextVNode("\u041E\u043F\u043B\u0430\u0447\u0435\u043D\u043E")
                                                          ]),
                                                          _: 1
                                                        }),
                                                        createVNode(_component_UiTableHead, { class: "text-center" }, {
                                                          default: withCtx(() => [
                                                            createTextVNode("\u0412 \u0417\u041F")
                                                          ]),
                                                          _: 1
                                                        })
                                                      ]),
                                                      _: 1
                                                    })
                                                  ];
                                                }
                                              }),
                                              _: 1
                                            }, _parent7, _scopeId6));
                                            _push7(ssrRenderComponent(_component_UiTableBody, null, {
                                              default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                if (_push8) {
                                                  _push8(`<!--[-->`);
                                                  ssrRenderList(unref(currentManager).dealsInfoPrevMounth, (deal, i) => {
                                                    _push8(ssrRenderComponent(_component_UiTableRow, {
                                                      key: i,
                                                      class: "text-center whitespace-nowrap cursor-pointer",
                                                      onClick: async () => await getDeal(deal.id)
                                                    }, {
                                                      default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                        if (_push9) {
                                                          _push9(ssrRenderComponent(_component_UiTableCell, { class: "text-left" }, {
                                                            default: withCtx((_9, _push10, _parent10, _scopeId9) => {
                                                              if (_push10) {
                                                                _push10(`${ssrInterpolate(deal.title)}`);
                                                              } else {
                                                                return [
                                                                  createTextVNode(toDisplayString(deal.title), 1)
                                                                ];
                                                              }
                                                            }),
                                                            _: 2
                                                          }, _parent9, _scopeId8));
                                                          _push9(ssrRenderComponent(_component_UiTableCell, { class: "font-medium" }, {
                                                            default: withCtx((_9, _push10, _parent10, _scopeId9) => {
                                                              if (_push10) {
                                                                _push10(`<div class="flex flex-col"${_scopeId9}><span${_scopeId9}>${ssrInterpolate(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(deal.dealerPrice) + "\u20BD")}</span><span class="text-xs text-gray-500"${_scopeId9}><span${_scopeId9}>${ssrInterpolate(deal.dealerPart)}%</span><span${_scopeId9}> \u043E\u0442 ${ssrInterpolate(deal.dealPrice)}</span></span></div>`);
                                                              } else {
                                                                return [
                                                                  createVNode("div", { class: "flex flex-col" }, [
                                                                    createVNode("span", null, toDisplayString(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(deal.dealerPrice) + "\u20BD"), 1),
                                                                    createVNode("span", { class: "text-xs text-gray-500" }, [
                                                                      createVNode("span", null, toDisplayString(deal.dealerPart) + "%", 1),
                                                                      createVNode("span", null, " \u043E\u0442 " + toDisplayString(deal.dealPrice), 1)
                                                                    ])
                                                                  ])
                                                                ];
                                                              }
                                                            }),
                                                            _: 2
                                                          }, _parent9, _scopeId8));
                                                          _push9(ssrRenderComponent(_component_UiTableCell, { class: "font-medium" }, {
                                                            default: withCtx((_9, _push10, _parent10, _scopeId9) => {
                                                              if (_push10) {
                                                                _push10(`${ssrInterpolate(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(deal.paid) + "\u20BD")}`);
                                                              } else {
                                                                return [
                                                                  createTextVNode(toDisplayString(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(deal.paid) + "\u20BD"), 1)
                                                                ];
                                                              }
                                                            }),
                                                            _: 2
                                                          }, _parent9, _scopeId8));
                                                          _push9(ssrRenderComponent(_component_UiTableCell, { class: "font-medium flex flex-col" }, {
                                                            default: withCtx((_9, _push10, _parent10, _scopeId9) => {
                                                              if (_push10) {
                                                                _push10(`<span class="text-green-600"${_scopeId9}>${ssrInterpolate("+" + ("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(+deal.toSalary.toFixed(2)) + "\u20BD")}</span><span class="text-xs text-gray-500"${_scopeId9}>${ssrInterpolate((deal.bonusPercentage * 100).toFixed(2) + "%")}</span>`);
                                                              } else {
                                                                return [
                                                                  createVNode("span", { class: "text-green-600" }, toDisplayString("+" + ("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(+deal.toSalary.toFixed(2)) + "\u20BD"), 1),
                                                                  createVNode("span", { class: "text-xs text-gray-500" }, toDisplayString((deal.bonusPercentage * 100).toFixed(2) + "%"), 1)
                                                                ];
                                                              }
                                                            }),
                                                            _: 2
                                                          }, _parent9, _scopeId8));
                                                        } else {
                                                          return [
                                                            createVNode(_component_UiTableCell, { class: "text-left" }, {
                                                              default: withCtx(() => [
                                                                createTextVNode(toDisplayString(deal.title), 1)
                                                              ]),
                                                              _: 2
                                                            }, 1024),
                                                            createVNode(_component_UiTableCell, { class: "font-medium" }, {
                                                              default: withCtx(() => [
                                                                createVNode("div", { class: "flex flex-col" }, [
                                                                  createVNode("span", null, toDisplayString(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(deal.dealerPrice) + "\u20BD"), 1),
                                                                  createVNode("span", { class: "text-xs text-gray-500" }, [
                                                                    createVNode("span", null, toDisplayString(deal.dealerPart) + "%", 1),
                                                                    createVNode("span", null, " \u043E\u0442 " + toDisplayString(deal.dealPrice), 1)
                                                                  ])
                                                                ])
                                                              ]),
                                                              _: 2
                                                            }, 1024),
                                                            createVNode(_component_UiTableCell, { class: "font-medium" }, {
                                                              default: withCtx(() => [
                                                                createTextVNode(toDisplayString(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(deal.paid) + "\u20BD"), 1)
                                                              ]),
                                                              _: 2
                                                            }, 1024),
                                                            createVNode(_component_UiTableCell, { class: "font-medium flex flex-col" }, {
                                                              default: withCtx(() => [
                                                                createVNode("span", { class: "text-green-600" }, toDisplayString("+" + ("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(+deal.toSalary.toFixed(2)) + "\u20BD"), 1),
                                                                createVNode("span", { class: "text-xs text-gray-500" }, toDisplayString((deal.bonusPercentage * 100).toFixed(2) + "%"), 1)
                                                              ]),
                                                              _: 2
                                                            }, 1024)
                                                          ];
                                                        }
                                                      }),
                                                      _: 2
                                                    }, _parent8, _scopeId7));
                                                  });
                                                  _push8(`<!--]-->`);
                                                  _push8(ssrRenderComponent(_component_UiTableRow, { class: "text-center font-bold bg-zinc-100" }, {
                                                    default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                      if (_push9) {
                                                        _push9(ssrRenderComponent(_component_UiTableCell, { class: "text-left" }, {
                                                          default: withCtx((_9, _push10, _parent10, _scopeId9) => {
                                                            if (_push10) {
                                                              _push10(`<span${_scopeId9}>\u0418\u0422\u041E\u0413\u041E</span><span${_scopeId9}>${ssrInterpolate("(" + unref(currentManager).dealsInfoPrevMounth.length + ")")}</span>`);
                                                            } else {
                                                              return [
                                                                createVNode("span", null, "\u0418\u0422\u041E\u0413\u041E"),
                                                                createVNode("span", null, toDisplayString("(" + unref(currentManager).dealsInfoPrevMounth.length + ")"), 1)
                                                              ];
                                                            }
                                                          }),
                                                          _: 1
                                                        }, _parent9, _scopeId8));
                                                        _push9(ssrRenderComponent(_component_UiTableCell, null, {
                                                          default: withCtx((_9, _push10, _parent10, _scopeId9) => {
                                                            if (_push10) {
                                                              _push10(`${ssrInterpolate(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(
                                                                unref(currentManager).dealsInfoPrevMounth.reduce(
                                                                  (a, b) => a + b.dealerPrice,
                                                                  0
                                                                )
                                                              ) + "\u20BD")}`);
                                                            } else {
                                                              return [
                                                                createTextVNode(toDisplayString(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(
                                                                  unref(currentManager).dealsInfoPrevMounth.reduce(
                                                                    (a, b) => a + b.dealerPrice,
                                                                    0
                                                                  )
                                                                ) + "\u20BD"), 1)
                                                              ];
                                                            }
                                                          }),
                                                          _: 1
                                                        }, _parent9, _scopeId8));
                                                        _push9(ssrRenderComponent(_component_UiTableCell, { class: "text-center" }, {
                                                          default: withCtx((_9, _push10, _parent10, _scopeId9) => {
                                                            if (_push10) {
                                                              _push10(`${ssrInterpolate(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(
                                                                +unref(currentManager).dealsInfoPrevMounth.reduce((a, b) => a + b.paid, 0).toFixed(2)
                                                              ) + "\u20BD")}`);
                                                            } else {
                                                              return [
                                                                createTextVNode(toDisplayString(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(
                                                                  +unref(currentManager).dealsInfoPrevMounth.reduce((a, b) => a + b.paid, 0).toFixed(2)
                                                                ) + "\u20BD"), 1)
                                                              ];
                                                            }
                                                          }),
                                                          _: 1
                                                        }, _parent9, _scopeId8));
                                                        _push9(ssrRenderComponent(_component_UiTableCell, { class: "text-center" }, {
                                                          default: withCtx((_9, _push10, _parent10, _scopeId9) => {
                                                            if (_push10) {
                                                              _push10(`<span class="text-green-600"${_scopeId9}>${ssrInterpolate("+" + ("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(
                                                                +unref(currentManager).dealsInfoPrevMounth.reduce((a, b) => a + b.toSalary, 0).toFixed(2)
                                                              ) + "\u20BD")}</span>`);
                                                            } else {
                                                              return [
                                                                createVNode("span", { class: "text-green-600" }, toDisplayString("+" + ("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(
                                                                  +unref(currentManager).dealsInfoPrevMounth.reduce((a, b) => a + b.toSalary, 0).toFixed(2)
                                                                ) + "\u20BD"), 1)
                                                              ];
                                                            }
                                                          }),
                                                          _: 1
                                                        }, _parent9, _scopeId8));
                                                      } else {
                                                        return [
                                                          createVNode(_component_UiTableCell, { class: "text-left" }, {
                                                            default: withCtx(() => [
                                                              createVNode("span", null, "\u0418\u0422\u041E\u0413\u041E"),
                                                              createVNode("span", null, toDisplayString("(" + unref(currentManager).dealsInfoPrevMounth.length + ")"), 1)
                                                            ]),
                                                            _: 1
                                                          }),
                                                          createVNode(_component_UiTableCell, null, {
                                                            default: withCtx(() => [
                                                              createTextVNode(toDisplayString(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(
                                                                unref(currentManager).dealsInfoPrevMounth.reduce(
                                                                  (a, b) => a + b.dealerPrice,
                                                                  0
                                                                )
                                                              ) + "\u20BD"), 1)
                                                            ]),
                                                            _: 1
                                                          }),
                                                          createVNode(_component_UiTableCell, { class: "text-center" }, {
                                                            default: withCtx(() => [
                                                              createTextVNode(toDisplayString(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(
                                                                +unref(currentManager).dealsInfoPrevMounth.reduce((a, b) => a + b.paid, 0).toFixed(2)
                                                              ) + "\u20BD"), 1)
                                                            ]),
                                                            _: 1
                                                          }),
                                                          createVNode(_component_UiTableCell, { class: "text-center" }, {
                                                            default: withCtx(() => [
                                                              createVNode("span", { class: "text-green-600" }, toDisplayString("+" + ("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(
                                                                +unref(currentManager).dealsInfoPrevMounth.reduce((a, b) => a + b.toSalary, 0).toFixed(2)
                                                              ) + "\u20BD"), 1)
                                                            ]),
                                                            _: 1
                                                          })
                                                        ];
                                                      }
                                                    }),
                                                    _: 1
                                                  }, _parent8, _scopeId7));
                                                } else {
                                                  return [
                                                    (openBlock(true), createBlock(Fragment, null, renderList(unref(currentManager).dealsInfoPrevMounth, (deal, i) => {
                                                      return openBlock(), createBlock(_component_UiTableRow, {
                                                        key: i,
                                                        class: "text-center whitespace-nowrap cursor-pointer",
                                                        onClick: async () => await getDeal(deal.id)
                                                      }, {
                                                        default: withCtx(() => [
                                                          createVNode(_component_UiTableCell, { class: "text-left" }, {
                                                            default: withCtx(() => [
                                                              createTextVNode(toDisplayString(deal.title), 1)
                                                            ]),
                                                            _: 2
                                                          }, 1024),
                                                          createVNode(_component_UiTableCell, { class: "font-medium" }, {
                                                            default: withCtx(() => [
                                                              createVNode("div", { class: "flex flex-col" }, [
                                                                createVNode("span", null, toDisplayString(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(deal.dealerPrice) + "\u20BD"), 1),
                                                                createVNode("span", { class: "text-xs text-gray-500" }, [
                                                                  createVNode("span", null, toDisplayString(deal.dealerPart) + "%", 1),
                                                                  createVNode("span", null, " \u043E\u0442 " + toDisplayString(deal.dealPrice), 1)
                                                                ])
                                                              ])
                                                            ]),
                                                            _: 2
                                                          }, 1024),
                                                          createVNode(_component_UiTableCell, { class: "font-medium" }, {
                                                            default: withCtx(() => [
                                                              createTextVNode(toDisplayString(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(deal.paid) + "\u20BD"), 1)
                                                            ]),
                                                            _: 2
                                                          }, 1024),
                                                          createVNode(_component_UiTableCell, { class: "font-medium flex flex-col" }, {
                                                            default: withCtx(() => [
                                                              createVNode("span", { class: "text-green-600" }, toDisplayString("+" + ("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(+deal.toSalary.toFixed(2)) + "\u20BD"), 1),
                                                              createVNode("span", { class: "text-xs text-gray-500" }, toDisplayString((deal.bonusPercentage * 100).toFixed(2) + "%"), 1)
                                                            ]),
                                                            _: 2
                                                          }, 1024)
                                                        ]),
                                                        _: 2
                                                      }, 1032, ["onClick"]);
                                                    }), 128)),
                                                    createVNode(_component_UiTableRow, { class: "text-center font-bold bg-zinc-100" }, {
                                                      default: withCtx(() => [
                                                        createVNode(_component_UiTableCell, { class: "text-left" }, {
                                                          default: withCtx(() => [
                                                            createVNode("span", null, "\u0418\u0422\u041E\u0413\u041E"),
                                                            createVNode("span", null, toDisplayString("(" + unref(currentManager).dealsInfoPrevMounth.length + ")"), 1)
                                                          ]),
                                                          _: 1
                                                        }),
                                                        createVNode(_component_UiTableCell, null, {
                                                          default: withCtx(() => [
                                                            createTextVNode(toDisplayString(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(
                                                              unref(currentManager).dealsInfoPrevMounth.reduce(
                                                                (a, b) => a + b.dealerPrice,
                                                                0
                                                              )
                                                            ) + "\u20BD"), 1)
                                                          ]),
                                                          _: 1
                                                        }),
                                                        createVNode(_component_UiTableCell, { class: "text-center" }, {
                                                          default: withCtx(() => [
                                                            createTextVNode(toDisplayString(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(
                                                              +unref(currentManager).dealsInfoPrevMounth.reduce((a, b) => a + b.paid, 0).toFixed(2)
                                                            ) + "\u20BD"), 1)
                                                          ]),
                                                          _: 1
                                                        }),
                                                        createVNode(_component_UiTableCell, { class: "text-center" }, {
                                                          default: withCtx(() => [
                                                            createVNode("span", { class: "text-green-600" }, toDisplayString("+" + ("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(
                                                              +unref(currentManager).dealsInfoPrevMounth.reduce((a, b) => a + b.toSalary, 0).toFixed(2)
                                                            ) + "\u20BD"), 1)
                                                          ]),
                                                          _: 1
                                                        })
                                                      ]),
                                                      _: 1
                                                    })
                                                  ];
                                                }
                                              }),
                                              _: 1
                                            }, _parent7, _scopeId6));
                                          } else {
                                            return [
                                              createVNode(_component_UiTableCaption),
                                              createVNode(_component_UiTableHeader, null, {
                                                default: withCtx(() => [
                                                  createVNode(_component_UiTableRow, { class: "bg-gray-100" }, {
                                                    default: withCtx(() => [
                                                      createVNode(_component_UiTableHead, { class: "text-left text-xl" }, {
                                                        default: withCtx(() => [
                                                          createTextVNode(" \u0417\u0430\u043A\u0430\u0437\u044B ")
                                                        ]),
                                                        _: 1
                                                      }),
                                                      createVNode(_component_UiTableHead, { class: "text-center" }, {
                                                        default: withCtx(() => [
                                                          createTextVNode("\u0414\u043E\u043B\u044F")
                                                        ]),
                                                        _: 1
                                                      }),
                                                      createVNode(_component_UiTableHead, { class: "text-center" }, {
                                                        default: withCtx(() => [
                                                          createTextVNode("\u041E\u043F\u043B\u0430\u0447\u0435\u043D\u043E")
                                                        ]),
                                                        _: 1
                                                      }),
                                                      createVNode(_component_UiTableHead, { class: "text-center" }, {
                                                        default: withCtx(() => [
                                                          createTextVNode("\u0412 \u0417\u041F")
                                                        ]),
                                                        _: 1
                                                      })
                                                    ]),
                                                    _: 1
                                                  })
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(_component_UiTableBody, null, {
                                                default: withCtx(() => [
                                                  (openBlock(true), createBlock(Fragment, null, renderList(unref(currentManager).dealsInfoPrevMounth, (deal, i) => {
                                                    return openBlock(), createBlock(_component_UiTableRow, {
                                                      key: i,
                                                      class: "text-center whitespace-nowrap cursor-pointer",
                                                      onClick: async () => await getDeal(deal.id)
                                                    }, {
                                                      default: withCtx(() => [
                                                        createVNode(_component_UiTableCell, { class: "text-left" }, {
                                                          default: withCtx(() => [
                                                            createTextVNode(toDisplayString(deal.title), 1)
                                                          ]),
                                                          _: 2
                                                        }, 1024),
                                                        createVNode(_component_UiTableCell, { class: "font-medium" }, {
                                                          default: withCtx(() => [
                                                            createVNode("div", { class: "flex flex-col" }, [
                                                              createVNode("span", null, toDisplayString(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(deal.dealerPrice) + "\u20BD"), 1),
                                                              createVNode("span", { class: "text-xs text-gray-500" }, [
                                                                createVNode("span", null, toDisplayString(deal.dealerPart) + "%", 1),
                                                                createVNode("span", null, " \u043E\u0442 " + toDisplayString(deal.dealPrice), 1)
                                                              ])
                                                            ])
                                                          ]),
                                                          _: 2
                                                        }, 1024),
                                                        createVNode(_component_UiTableCell, { class: "font-medium" }, {
                                                          default: withCtx(() => [
                                                            createTextVNode(toDisplayString(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(deal.paid) + "\u20BD"), 1)
                                                          ]),
                                                          _: 2
                                                        }, 1024),
                                                        createVNode(_component_UiTableCell, { class: "font-medium flex flex-col" }, {
                                                          default: withCtx(() => [
                                                            createVNode("span", { class: "text-green-600" }, toDisplayString("+" + ("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(+deal.toSalary.toFixed(2)) + "\u20BD"), 1),
                                                            createVNode("span", { class: "text-xs text-gray-500" }, toDisplayString((deal.bonusPercentage * 100).toFixed(2) + "%"), 1)
                                                          ]),
                                                          _: 2
                                                        }, 1024)
                                                      ]),
                                                      _: 2
                                                    }, 1032, ["onClick"]);
                                                  }), 128)),
                                                  createVNode(_component_UiTableRow, { class: "text-center font-bold bg-zinc-100" }, {
                                                    default: withCtx(() => [
                                                      createVNode(_component_UiTableCell, { class: "text-left" }, {
                                                        default: withCtx(() => [
                                                          createVNode("span", null, "\u0418\u0422\u041E\u0413\u041E"),
                                                          createVNode("span", null, toDisplayString("(" + unref(currentManager).dealsInfoPrevMounth.length + ")"), 1)
                                                        ]),
                                                        _: 1
                                                      }),
                                                      createVNode(_component_UiTableCell, null, {
                                                        default: withCtx(() => [
                                                          createTextVNode(toDisplayString(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(
                                                            unref(currentManager).dealsInfoPrevMounth.reduce(
                                                              (a, b) => a + b.dealerPrice,
                                                              0
                                                            )
                                                          ) + "\u20BD"), 1)
                                                        ]),
                                                        _: 1
                                                      }),
                                                      createVNode(_component_UiTableCell, { class: "text-center" }, {
                                                        default: withCtx(() => [
                                                          createTextVNode(toDisplayString(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(
                                                            +unref(currentManager).dealsInfoPrevMounth.reduce((a, b) => a + b.paid, 0).toFixed(2)
                                                          ) + "\u20BD"), 1)
                                                        ]),
                                                        _: 1
                                                      }),
                                                      createVNode(_component_UiTableCell, { class: "text-center" }, {
                                                        default: withCtx(() => [
                                                          createVNode("span", { class: "text-green-600" }, toDisplayString("+" + ("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(
                                                            +unref(currentManager).dealsInfoPrevMounth.reduce((a, b) => a + b.toSalary, 0).toFixed(2)
                                                          ) + "\u20BD"), 1)
                                                        ]),
                                                        _: 1
                                                      })
                                                    ]),
                                                    _: 1
                                                  })
                                                ]),
                                                _: 1
                                              })
                                            ];
                                          }
                                        }),
                                        _: 1
                                      }, _parent6, _scopeId5));
                                    } else {
                                      _push6(`<!---->`);
                                    }
                                    if ((_d = (_c = unref(currentManager)) == null ? void 0 : _c.dopsInfoPrevMounth) == null ? void 0 : _d.length) {
                                      _push6(ssrRenderComponent(_component_UiTable, null, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(ssrRenderComponent(_component_UiTableCaption, null, null, _parent7, _scopeId6));
                                            _push7(ssrRenderComponent(_component_UiTableHeader, null, {
                                              default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                if (_push8) {
                                                  _push8(ssrRenderComponent(_component_UiTableRow, { class: "bg-gray-100" }, {
                                                    default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                      if (_push9) {
                                                        _push9(ssrRenderComponent(_component_UiTableHead, { class: "text-left text-xl" }, {
                                                          default: withCtx((_9, _push10, _parent10, _scopeId9) => {
                                                            if (_push10) {
                                                              _push10(` \u0414\u043E\u043F\u044B `);
                                                            } else {
                                                              return [
                                                                createTextVNode(" \u0414\u043E\u043F\u044B ")
                                                              ];
                                                            }
                                                          }),
                                                          _: 1
                                                        }, _parent9, _scopeId8));
                                                        _push9(ssrRenderComponent(_component_UiTableHead, { class: "text-center" }, {
                                                          default: withCtx((_9, _push10, _parent10, _scopeId9) => {
                                                            if (_push10) {
                                                              _push10(`\u0421\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C`);
                                                            } else {
                                                              return [
                                                                createTextVNode("\u0421\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C")
                                                              ];
                                                            }
                                                          }),
                                                          _: 1
                                                        }, _parent9, _scopeId8));
                                                        _push9(ssrRenderComponent(_component_UiTableHead, { class: "text-center" }, {
                                                          default: withCtx((_9, _push10, _parent10, _scopeId9) => {
                                                            if (_push10) {
                                                              _push10(`\u041E\u043F\u043B\u0430\u0447\u0435\u043D\u043E`);
                                                            } else {
                                                              return [
                                                                createTextVNode("\u041E\u043F\u043B\u0430\u0447\u0435\u043D\u043E")
                                                              ];
                                                            }
                                                          }),
                                                          _: 1
                                                        }, _parent9, _scopeId8));
                                                        _push9(ssrRenderComponent(_component_UiTableHead, { class: "text-center" }, {
                                                          default: withCtx((_9, _push10, _parent10, _scopeId9) => {
                                                            if (_push10) {
                                                              _push10(`\u0412 \u0417\u041F`);
                                                            } else {
                                                              return [
                                                                createTextVNode("\u0412 \u0417\u041F")
                                                              ];
                                                            }
                                                          }),
                                                          _: 1
                                                        }, _parent9, _scopeId8));
                                                      } else {
                                                        return [
                                                          createVNode(_component_UiTableHead, { class: "text-left text-xl" }, {
                                                            default: withCtx(() => [
                                                              createTextVNode(" \u0414\u043E\u043F\u044B ")
                                                            ]),
                                                            _: 1
                                                          }),
                                                          createVNode(_component_UiTableHead, { class: "text-center" }, {
                                                            default: withCtx(() => [
                                                              createTextVNode("\u0421\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C")
                                                            ]),
                                                            _: 1
                                                          }),
                                                          createVNode(_component_UiTableHead, { class: "text-center" }, {
                                                            default: withCtx(() => [
                                                              createTextVNode("\u041E\u043F\u043B\u0430\u0447\u0435\u043D\u043E")
                                                            ]),
                                                            _: 1
                                                          }),
                                                          createVNode(_component_UiTableHead, { class: "text-center" }, {
                                                            default: withCtx(() => [
                                                              createTextVNode("\u0412 \u0417\u041F")
                                                            ]),
                                                            _: 1
                                                          })
                                                        ];
                                                      }
                                                    }),
                                                    _: 1
                                                  }, _parent8, _scopeId7));
                                                } else {
                                                  return [
                                                    createVNode(_component_UiTableRow, { class: "bg-gray-100" }, {
                                                      default: withCtx(() => [
                                                        createVNode(_component_UiTableHead, { class: "text-left text-xl" }, {
                                                          default: withCtx(() => [
                                                            createTextVNode(" \u0414\u043E\u043F\u044B ")
                                                          ]),
                                                          _: 1
                                                        }),
                                                        createVNode(_component_UiTableHead, { class: "text-center" }, {
                                                          default: withCtx(() => [
                                                            createTextVNode("\u0421\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C")
                                                          ]),
                                                          _: 1
                                                        }),
                                                        createVNode(_component_UiTableHead, { class: "text-center" }, {
                                                          default: withCtx(() => [
                                                            createTextVNode("\u041E\u043F\u043B\u0430\u0447\u0435\u043D\u043E")
                                                          ]),
                                                          _: 1
                                                        }),
                                                        createVNode(_component_UiTableHead, { class: "text-center" }, {
                                                          default: withCtx(() => [
                                                            createTextVNode("\u0412 \u0417\u041F")
                                                          ]),
                                                          _: 1
                                                        })
                                                      ]),
                                                      _: 1
                                                    })
                                                  ];
                                                }
                                              }),
                                              _: 1
                                            }, _parent7, _scopeId6));
                                            _push7(ssrRenderComponent(_component_UiTableBody, null, {
                                              default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                if (_push8) {
                                                  _push8(`<!--[-->`);
                                                  ssrRenderList(unref(currentManager).dopsInfoPrevMounth, (dop, i) => {
                                                    _push8(ssrRenderComponent(_component_UiTableRow, {
                                                      key: i,
                                                      class: "whitespace-nowrap text-center cursor-pointer",
                                                      onClick: async () => await getDeal(dop.dealId)
                                                    }, {
                                                      default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                        if (_push9) {
                                                          _push9(ssrRenderComponent(_component_UiTableCell, { class: "text-left flex flex-col" }, {
                                                            default: withCtx((_9, _push10, _parent10, _scopeId9) => {
                                                              if (_push10) {
                                                                _push10(`<span${_scopeId9}>${ssrInterpolate(dop.dealTitle)}</span><span class="text-xs text-gray-500"${_scopeId9}>${ssrInterpolate(dop.title)}</span>`);
                                                              } else {
                                                                return [
                                                                  createVNode("span", null, toDisplayString(dop.dealTitle), 1),
                                                                  createVNode("span", { class: "text-xs text-gray-500" }, toDisplayString(dop.title), 1)
                                                                ];
                                                              }
                                                            }),
                                                            _: 2
                                                          }, _parent9, _scopeId8));
                                                          _push9(ssrRenderComponent(_component_UiTableCell, { class: "font-medium" }, {
                                                            default: withCtx((_9, _push10, _parent10, _scopeId9) => {
                                                              if (_push10) {
                                                                _push10(`${ssrInterpolate(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(dop.dopPrice) + "\u20BD")}`);
                                                              } else {
                                                                return [
                                                                  createTextVNode(toDisplayString(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(dop.dopPrice) + "\u20BD"), 1)
                                                                ];
                                                              }
                                                            }),
                                                            _: 2
                                                          }, _parent9, _scopeId8));
                                                          _push9(ssrRenderComponent(_component_UiTableCell, { class: "font-medium" }, {
                                                            default: withCtx((_9, _push10, _parent10, _scopeId9) => {
                                                              if (_push10) {
                                                                _push10(`${ssrInterpolate(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(dop.paid) + "\u20BD")}`);
                                                              } else {
                                                                return [
                                                                  createTextVNode(toDisplayString(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(dop.paid) + "\u20BD"), 1)
                                                                ];
                                                              }
                                                            }),
                                                            _: 2
                                                          }, _parent9, _scopeId8));
                                                          _push9(ssrRenderComponent(_component_UiTableCell, { class: "font-medium flex flex-col" }, {
                                                            default: withCtx((_9, _push10, _parent10, _scopeId9) => {
                                                              if (_push10) {
                                                                _push10(`<span class="text-green-600"${_scopeId9}>${ssrInterpolate("+" + ("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(+dop.toSalary.toFixed(2)) + "\u20BD")}</span><span class="text-xs text-gray-500"${_scopeId9}>${ssrInterpolate((dop.bonusPercentage * 100).toFixed(2) + "%")}</span>`);
                                                              } else {
                                                                return [
                                                                  createVNode("span", { class: "text-green-600" }, toDisplayString("+" + ("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(+dop.toSalary.toFixed(2)) + "\u20BD"), 1),
                                                                  createVNode("span", { class: "text-xs text-gray-500" }, toDisplayString((dop.bonusPercentage * 100).toFixed(2) + "%"), 1)
                                                                ];
                                                              }
                                                            }),
                                                            _: 2
                                                          }, _parent9, _scopeId8));
                                                        } else {
                                                          return [
                                                            createVNode(_component_UiTableCell, { class: "text-left flex flex-col" }, {
                                                              default: withCtx(() => [
                                                                createVNode("span", null, toDisplayString(dop.dealTitle), 1),
                                                                createVNode("span", { class: "text-xs text-gray-500" }, toDisplayString(dop.title), 1)
                                                              ]),
                                                              _: 2
                                                            }, 1024),
                                                            createVNode(_component_UiTableCell, { class: "font-medium" }, {
                                                              default: withCtx(() => [
                                                                createTextVNode(toDisplayString(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(dop.dopPrice) + "\u20BD"), 1)
                                                              ]),
                                                              _: 2
                                                            }, 1024),
                                                            createVNode(_component_UiTableCell, { class: "font-medium" }, {
                                                              default: withCtx(() => [
                                                                createTextVNode(toDisplayString(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(dop.paid) + "\u20BD"), 1)
                                                              ]),
                                                              _: 2
                                                            }, 1024),
                                                            createVNode(_component_UiTableCell, { class: "font-medium flex flex-col" }, {
                                                              default: withCtx(() => [
                                                                createVNode("span", { class: "text-green-600" }, toDisplayString("+" + ("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(+dop.toSalary.toFixed(2)) + "\u20BD"), 1),
                                                                createVNode("span", { class: "text-xs text-gray-500" }, toDisplayString((dop.bonusPercentage * 100).toFixed(2) + "%"), 1)
                                                              ]),
                                                              _: 2
                                                            }, 1024)
                                                          ];
                                                        }
                                                      }),
                                                      _: 2
                                                    }, _parent8, _scopeId7));
                                                  });
                                                  _push8(`<!--]-->`);
                                                  _push8(ssrRenderComponent(_component_UiTableRow, { class: "text-center font-bold bg-zinc-100" }, {
                                                    default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                      if (_push9) {
                                                        _push9(ssrRenderComponent(_component_UiTableCell, { class: "whitespace-nowrap text-left" }, {
                                                          default: withCtx((_9, _push10, _parent10, _scopeId9) => {
                                                            if (_push10) {
                                                              _push10(` \u0418\u0422\u041E\u0413\u041E${ssrInterpolate("(" + unref(currentManager).dopsInfoPrevMounth.length + ")")}`);
                                                            } else {
                                                              return [
                                                                createTextVNode(" \u0418\u0422\u041E\u0413\u041E" + toDisplayString("(" + unref(currentManager).dopsInfoPrevMounth.length + ")"), 1)
                                                              ];
                                                            }
                                                          }),
                                                          _: 1
                                                        }, _parent9, _scopeId8));
                                                        _push9(ssrRenderComponent(_component_UiTableCell, null, {
                                                          default: withCtx((_9, _push10, _parent10, _scopeId9) => {
                                                            if (_push10) {
                                                              _push10(`${ssrInterpolate(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(
                                                                unref(currentManager).dopsInfoPrevMounth.reduce(
                                                                  (a, b) => a + b.dopPrice,
                                                                  0
                                                                )
                                                              ) + "\u20BD")}`);
                                                            } else {
                                                              return [
                                                                createTextVNode(toDisplayString(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(
                                                                  unref(currentManager).dopsInfoPrevMounth.reduce(
                                                                    (a, b) => a + b.dopPrice,
                                                                    0
                                                                  )
                                                                ) + "\u20BD"), 1)
                                                              ];
                                                            }
                                                          }),
                                                          _: 1
                                                        }, _parent9, _scopeId8));
                                                        _push9(ssrRenderComponent(_component_UiTableCell, null, {
                                                          default: withCtx((_9, _push10, _parent10, _scopeId9) => {
                                                            if (_push10) {
                                                              _push10(`${ssrInterpolate(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(
                                                                +unref(currentManager).dopsInfoPrevMounth.reduce((a, b) => a + b.paid, 0).toFixed()
                                                              ) + "\u20BD")}`);
                                                            } else {
                                                              return [
                                                                createTextVNode(toDisplayString(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(
                                                                  +unref(currentManager).dopsInfoPrevMounth.reduce((a, b) => a + b.paid, 0).toFixed()
                                                                ) + "\u20BD"), 1)
                                                              ];
                                                            }
                                                          }),
                                                          _: 1
                                                        }, _parent9, _scopeId8));
                                                        _push9(ssrRenderComponent(_component_UiTableCell, { class: "text-center" }, {
                                                          default: withCtx((_9, _push10, _parent10, _scopeId9) => {
                                                            if (_push10) {
                                                              _push10(`<span class="text-green-600"${_scopeId9}>${ssrInterpolate("+" + ("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(
                                                                +unref(currentManager).dopsInfoPrevMounth.reduce((a, b) => a + b.toSalary, 0).toFixed(2)
                                                              ) + "\u20BD")}</span>`);
                                                            } else {
                                                              return [
                                                                createVNode("span", { class: "text-green-600" }, toDisplayString("+" + ("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(
                                                                  +unref(currentManager).dopsInfoPrevMounth.reduce((a, b) => a + b.toSalary, 0).toFixed(2)
                                                                ) + "\u20BD"), 1)
                                                              ];
                                                            }
                                                          }),
                                                          _: 1
                                                        }, _parent9, _scopeId8));
                                                      } else {
                                                        return [
                                                          createVNode(_component_UiTableCell, { class: "whitespace-nowrap text-left" }, {
                                                            default: withCtx(() => [
                                                              createTextVNode(" \u0418\u0422\u041E\u0413\u041E" + toDisplayString("(" + unref(currentManager).dopsInfoPrevMounth.length + ")"), 1)
                                                            ]),
                                                            _: 1
                                                          }),
                                                          createVNode(_component_UiTableCell, null, {
                                                            default: withCtx(() => [
                                                              createTextVNode(toDisplayString(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(
                                                                unref(currentManager).dopsInfoPrevMounth.reduce(
                                                                  (a, b) => a + b.dopPrice,
                                                                  0
                                                                )
                                                              ) + "\u20BD"), 1)
                                                            ]),
                                                            _: 1
                                                          }),
                                                          createVNode(_component_UiTableCell, null, {
                                                            default: withCtx(() => [
                                                              createTextVNode(toDisplayString(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(
                                                                +unref(currentManager).dopsInfoPrevMounth.reduce((a, b) => a + b.paid, 0).toFixed()
                                                              ) + "\u20BD"), 1)
                                                            ]),
                                                            _: 1
                                                          }),
                                                          createVNode(_component_UiTableCell, { class: "text-center" }, {
                                                            default: withCtx(() => [
                                                              createVNode("span", { class: "text-green-600" }, toDisplayString("+" + ("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(
                                                                +unref(currentManager).dopsInfoPrevMounth.reduce((a, b) => a + b.toSalary, 0).toFixed(2)
                                                              ) + "\u20BD"), 1)
                                                            ]),
                                                            _: 1
                                                          })
                                                        ];
                                                      }
                                                    }),
                                                    _: 1
                                                  }, _parent8, _scopeId7));
                                                } else {
                                                  return [
                                                    (openBlock(true), createBlock(Fragment, null, renderList(unref(currentManager).dopsInfoPrevMounth, (dop, i) => {
                                                      return openBlock(), createBlock(_component_UiTableRow, {
                                                        key: i,
                                                        class: "whitespace-nowrap text-center cursor-pointer",
                                                        onClick: async () => await getDeal(dop.dealId)
                                                      }, {
                                                        default: withCtx(() => [
                                                          createVNode(_component_UiTableCell, { class: "text-left flex flex-col" }, {
                                                            default: withCtx(() => [
                                                              createVNode("span", null, toDisplayString(dop.dealTitle), 1),
                                                              createVNode("span", { class: "text-xs text-gray-500" }, toDisplayString(dop.title), 1)
                                                            ]),
                                                            _: 2
                                                          }, 1024),
                                                          createVNode(_component_UiTableCell, { class: "font-medium" }, {
                                                            default: withCtx(() => [
                                                              createTextVNode(toDisplayString(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(dop.dopPrice) + "\u20BD"), 1)
                                                            ]),
                                                            _: 2
                                                          }, 1024),
                                                          createVNode(_component_UiTableCell, { class: "font-medium" }, {
                                                            default: withCtx(() => [
                                                              createTextVNode(toDisplayString(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(dop.paid) + "\u20BD"), 1)
                                                            ]),
                                                            _: 2
                                                          }, 1024),
                                                          createVNode(_component_UiTableCell, { class: "font-medium flex flex-col" }, {
                                                            default: withCtx(() => [
                                                              createVNode("span", { class: "text-green-600" }, toDisplayString("+" + ("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(+dop.toSalary.toFixed(2)) + "\u20BD"), 1),
                                                              createVNode("span", { class: "text-xs text-gray-500" }, toDisplayString((dop.bonusPercentage * 100).toFixed(2) + "%"), 1)
                                                            ]),
                                                            _: 2
                                                          }, 1024)
                                                        ]),
                                                        _: 2
                                                      }, 1032, ["onClick"]);
                                                    }), 128)),
                                                    createVNode(_component_UiTableRow, { class: "text-center font-bold bg-zinc-100" }, {
                                                      default: withCtx(() => [
                                                        createVNode(_component_UiTableCell, { class: "whitespace-nowrap text-left" }, {
                                                          default: withCtx(() => [
                                                            createTextVNode(" \u0418\u0422\u041E\u0413\u041E" + toDisplayString("(" + unref(currentManager).dopsInfoPrevMounth.length + ")"), 1)
                                                          ]),
                                                          _: 1
                                                        }),
                                                        createVNode(_component_UiTableCell, null, {
                                                          default: withCtx(() => [
                                                            createTextVNode(toDisplayString(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(
                                                              unref(currentManager).dopsInfoPrevMounth.reduce(
                                                                (a, b) => a + b.dopPrice,
                                                                0
                                                              )
                                                            ) + "\u20BD"), 1)
                                                          ]),
                                                          _: 1
                                                        }),
                                                        createVNode(_component_UiTableCell, null, {
                                                          default: withCtx(() => [
                                                            createTextVNode(toDisplayString(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(
                                                              +unref(currentManager).dopsInfoPrevMounth.reduce((a, b) => a + b.paid, 0).toFixed()
                                                            ) + "\u20BD"), 1)
                                                          ]),
                                                          _: 1
                                                        }),
                                                        createVNode(_component_UiTableCell, { class: "text-center" }, {
                                                          default: withCtx(() => [
                                                            createVNode("span", { class: "text-green-600" }, toDisplayString("+" + ("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(
                                                              +unref(currentManager).dopsInfoPrevMounth.reduce((a, b) => a + b.toSalary, 0).toFixed(2)
                                                            ) + "\u20BD"), 1)
                                                          ]),
                                                          _: 1
                                                        })
                                                      ]),
                                                      _: 1
                                                    })
                                                  ];
                                                }
                                              }),
                                              _: 1
                                            }, _parent7, _scopeId6));
                                          } else {
                                            return [
                                              createVNode(_component_UiTableCaption),
                                              createVNode(_component_UiTableHeader, null, {
                                                default: withCtx(() => [
                                                  createVNode(_component_UiTableRow, { class: "bg-gray-100" }, {
                                                    default: withCtx(() => [
                                                      createVNode(_component_UiTableHead, { class: "text-left text-xl" }, {
                                                        default: withCtx(() => [
                                                          createTextVNode(" \u0414\u043E\u043F\u044B ")
                                                        ]),
                                                        _: 1
                                                      }),
                                                      createVNode(_component_UiTableHead, { class: "text-center" }, {
                                                        default: withCtx(() => [
                                                          createTextVNode("\u0421\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C")
                                                        ]),
                                                        _: 1
                                                      }),
                                                      createVNode(_component_UiTableHead, { class: "text-center" }, {
                                                        default: withCtx(() => [
                                                          createTextVNode("\u041E\u043F\u043B\u0430\u0447\u0435\u043D\u043E")
                                                        ]),
                                                        _: 1
                                                      }),
                                                      createVNode(_component_UiTableHead, { class: "text-center" }, {
                                                        default: withCtx(() => [
                                                          createTextVNode("\u0412 \u0417\u041F")
                                                        ]),
                                                        _: 1
                                                      })
                                                    ]),
                                                    _: 1
                                                  })
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(_component_UiTableBody, null, {
                                                default: withCtx(() => [
                                                  (openBlock(true), createBlock(Fragment, null, renderList(unref(currentManager).dopsInfoPrevMounth, (dop, i) => {
                                                    return openBlock(), createBlock(_component_UiTableRow, {
                                                      key: i,
                                                      class: "whitespace-nowrap text-center cursor-pointer",
                                                      onClick: async () => await getDeal(dop.dealId)
                                                    }, {
                                                      default: withCtx(() => [
                                                        createVNode(_component_UiTableCell, { class: "text-left flex flex-col" }, {
                                                          default: withCtx(() => [
                                                            createVNode("span", null, toDisplayString(dop.dealTitle), 1),
                                                            createVNode("span", { class: "text-xs text-gray-500" }, toDisplayString(dop.title), 1)
                                                          ]),
                                                          _: 2
                                                        }, 1024),
                                                        createVNode(_component_UiTableCell, { class: "font-medium" }, {
                                                          default: withCtx(() => [
                                                            createTextVNode(toDisplayString(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(dop.dopPrice) + "\u20BD"), 1)
                                                          ]),
                                                          _: 2
                                                        }, 1024),
                                                        createVNode(_component_UiTableCell, { class: "font-medium" }, {
                                                          default: withCtx(() => [
                                                            createTextVNode(toDisplayString(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(dop.paid) + "\u20BD"), 1)
                                                          ]),
                                                          _: 2
                                                        }, 1024),
                                                        createVNode(_component_UiTableCell, { class: "font-medium flex flex-col" }, {
                                                          default: withCtx(() => [
                                                            createVNode("span", { class: "text-green-600" }, toDisplayString("+" + ("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(+dop.toSalary.toFixed(2)) + "\u20BD"), 1),
                                                            createVNode("span", { class: "text-xs text-gray-500" }, toDisplayString((dop.bonusPercentage * 100).toFixed(2) + "%"), 1)
                                                          ]),
                                                          _: 2
                                                        }, 1024)
                                                      ]),
                                                      _: 2
                                                    }, 1032, ["onClick"]);
                                                  }), 128)),
                                                  createVNode(_component_UiTableRow, { class: "text-center font-bold bg-zinc-100" }, {
                                                    default: withCtx(() => [
                                                      createVNode(_component_UiTableCell, { class: "whitespace-nowrap text-left" }, {
                                                        default: withCtx(() => [
                                                          createTextVNode(" \u0418\u0422\u041E\u0413\u041E" + toDisplayString("(" + unref(currentManager).dopsInfoPrevMounth.length + ")"), 1)
                                                        ]),
                                                        _: 1
                                                      }),
                                                      createVNode(_component_UiTableCell, null, {
                                                        default: withCtx(() => [
                                                          createTextVNode(toDisplayString(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(
                                                            unref(currentManager).dopsInfoPrevMounth.reduce(
                                                              (a, b) => a + b.dopPrice,
                                                              0
                                                            )
                                                          ) + "\u20BD"), 1)
                                                        ]),
                                                        _: 1
                                                      }),
                                                      createVNode(_component_UiTableCell, null, {
                                                        default: withCtx(() => [
                                                          createTextVNode(toDisplayString(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(
                                                            +unref(currentManager).dopsInfoPrevMounth.reduce((a, b) => a + b.paid, 0).toFixed()
                                                          ) + "\u20BD"), 1)
                                                        ]),
                                                        _: 1
                                                      }),
                                                      createVNode(_component_UiTableCell, { class: "text-center" }, {
                                                        default: withCtx(() => [
                                                          createVNode("span", { class: "text-green-600" }, toDisplayString("+" + ("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(
                                                            +unref(currentManager).dopsInfoPrevMounth.reduce((a, b) => a + b.toSalary, 0).toFixed(2)
                                                          ) + "\u20BD"), 1)
                                                        ]),
                                                        _: 1
                                                      })
                                                    ]),
                                                    _: 1
                                                  })
                                                ]),
                                                _: 1
                                              })
                                            ];
                                          }
                                        }),
                                        _: 1
                                      }, _parent6, _scopeId5));
                                    } else {
                                      _push6(`<!---->`);
                                    }
                                    _push6(`</div>`);
                                  } else {
                                    return [
                                      createVNode("div", { class: "flex flex-col gap-8" }, [
                                        ((_f = (_e = unref(currentManager)) == null ? void 0 : _e.dealsInfoPrevMounth) == null ? void 0 : _f.length) ? (openBlock(), createBlock(_component_UiTable, { key: 0 }, {
                                          default: withCtx(() => [
                                            createVNode(_component_UiTableCaption),
                                            createVNode(_component_UiTableHeader, null, {
                                              default: withCtx(() => [
                                                createVNode(_component_UiTableRow, { class: "bg-gray-100" }, {
                                                  default: withCtx(() => [
                                                    createVNode(_component_UiTableHead, { class: "text-left text-xl" }, {
                                                      default: withCtx(() => [
                                                        createTextVNode(" \u0417\u0430\u043A\u0430\u0437\u044B ")
                                                      ]),
                                                      _: 1
                                                    }),
                                                    createVNode(_component_UiTableHead, { class: "text-center" }, {
                                                      default: withCtx(() => [
                                                        createTextVNode("\u0414\u043E\u043B\u044F")
                                                      ]),
                                                      _: 1
                                                    }),
                                                    createVNode(_component_UiTableHead, { class: "text-center" }, {
                                                      default: withCtx(() => [
                                                        createTextVNode("\u041E\u043F\u043B\u0430\u0447\u0435\u043D\u043E")
                                                      ]),
                                                      _: 1
                                                    }),
                                                    createVNode(_component_UiTableHead, { class: "text-center" }, {
                                                      default: withCtx(() => [
                                                        createTextVNode("\u0412 \u0417\u041F")
                                                      ]),
                                                      _: 1
                                                    })
                                                  ]),
                                                  _: 1
                                                })
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(_component_UiTableBody, null, {
                                              default: withCtx(() => [
                                                (openBlock(true), createBlock(Fragment, null, renderList(unref(currentManager).dealsInfoPrevMounth, (deal, i) => {
                                                  return openBlock(), createBlock(_component_UiTableRow, {
                                                    key: i,
                                                    class: "text-center whitespace-nowrap cursor-pointer",
                                                    onClick: async () => await getDeal(deal.id)
                                                  }, {
                                                    default: withCtx(() => [
                                                      createVNode(_component_UiTableCell, { class: "text-left" }, {
                                                        default: withCtx(() => [
                                                          createTextVNode(toDisplayString(deal.title), 1)
                                                        ]),
                                                        _: 2
                                                      }, 1024),
                                                      createVNode(_component_UiTableCell, { class: "font-medium" }, {
                                                        default: withCtx(() => [
                                                          createVNode("div", { class: "flex flex-col" }, [
                                                            createVNode("span", null, toDisplayString(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(deal.dealerPrice) + "\u20BD"), 1),
                                                            createVNode("span", { class: "text-xs text-gray-500" }, [
                                                              createVNode("span", null, toDisplayString(deal.dealerPart) + "%", 1),
                                                              createVNode("span", null, " \u043E\u0442 " + toDisplayString(deal.dealPrice), 1)
                                                            ])
                                                          ])
                                                        ]),
                                                        _: 2
                                                      }, 1024),
                                                      createVNode(_component_UiTableCell, { class: "font-medium" }, {
                                                        default: withCtx(() => [
                                                          createTextVNode(toDisplayString(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(deal.paid) + "\u20BD"), 1)
                                                        ]),
                                                        _: 2
                                                      }, 1024),
                                                      createVNode(_component_UiTableCell, { class: "font-medium flex flex-col" }, {
                                                        default: withCtx(() => [
                                                          createVNode("span", { class: "text-green-600" }, toDisplayString("+" + ("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(+deal.toSalary.toFixed(2)) + "\u20BD"), 1),
                                                          createVNode("span", { class: "text-xs text-gray-500" }, toDisplayString((deal.bonusPercentage * 100).toFixed(2) + "%"), 1)
                                                        ]),
                                                        _: 2
                                                      }, 1024)
                                                    ]),
                                                    _: 2
                                                  }, 1032, ["onClick"]);
                                                }), 128)),
                                                createVNode(_component_UiTableRow, { class: "text-center font-bold bg-zinc-100" }, {
                                                  default: withCtx(() => [
                                                    createVNode(_component_UiTableCell, { class: "text-left" }, {
                                                      default: withCtx(() => [
                                                        createVNode("span", null, "\u0418\u0422\u041E\u0413\u041E"),
                                                        createVNode("span", null, toDisplayString("(" + unref(currentManager).dealsInfoPrevMounth.length + ")"), 1)
                                                      ]),
                                                      _: 1
                                                    }),
                                                    createVNode(_component_UiTableCell, null, {
                                                      default: withCtx(() => [
                                                        createTextVNode(toDisplayString(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(
                                                          unref(currentManager).dealsInfoPrevMounth.reduce(
                                                            (a, b) => a + b.dealerPrice,
                                                            0
                                                          )
                                                        ) + "\u20BD"), 1)
                                                      ]),
                                                      _: 1
                                                    }),
                                                    createVNode(_component_UiTableCell, { class: "text-center" }, {
                                                      default: withCtx(() => [
                                                        createTextVNode(toDisplayString(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(
                                                          +unref(currentManager).dealsInfoPrevMounth.reduce((a, b) => a + b.paid, 0).toFixed(2)
                                                        ) + "\u20BD"), 1)
                                                      ]),
                                                      _: 1
                                                    }),
                                                    createVNode(_component_UiTableCell, { class: "text-center" }, {
                                                      default: withCtx(() => [
                                                        createVNode("span", { class: "text-green-600" }, toDisplayString("+" + ("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(
                                                          +unref(currentManager).dealsInfoPrevMounth.reduce((a, b) => a + b.toSalary, 0).toFixed(2)
                                                        ) + "\u20BD"), 1)
                                                      ]),
                                                      _: 1
                                                    })
                                                  ]),
                                                  _: 1
                                                })
                                              ]),
                                              _: 1
                                            })
                                          ]),
                                          _: 1
                                        })) : createCommentVNode("", true),
                                        ((_h = (_g = unref(currentManager)) == null ? void 0 : _g.dopsInfoPrevMounth) == null ? void 0 : _h.length) ? (openBlock(), createBlock(_component_UiTable, { key: 1 }, {
                                          default: withCtx(() => [
                                            createVNode(_component_UiTableCaption),
                                            createVNode(_component_UiTableHeader, null, {
                                              default: withCtx(() => [
                                                createVNode(_component_UiTableRow, { class: "bg-gray-100" }, {
                                                  default: withCtx(() => [
                                                    createVNode(_component_UiTableHead, { class: "text-left text-xl" }, {
                                                      default: withCtx(() => [
                                                        createTextVNode(" \u0414\u043E\u043F\u044B ")
                                                      ]),
                                                      _: 1
                                                    }),
                                                    createVNode(_component_UiTableHead, { class: "text-center" }, {
                                                      default: withCtx(() => [
                                                        createTextVNode("\u0421\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C")
                                                      ]),
                                                      _: 1
                                                    }),
                                                    createVNode(_component_UiTableHead, { class: "text-center" }, {
                                                      default: withCtx(() => [
                                                        createTextVNode("\u041E\u043F\u043B\u0430\u0447\u0435\u043D\u043E")
                                                      ]),
                                                      _: 1
                                                    }),
                                                    createVNode(_component_UiTableHead, { class: "text-center" }, {
                                                      default: withCtx(() => [
                                                        createTextVNode("\u0412 \u0417\u041F")
                                                      ]),
                                                      _: 1
                                                    })
                                                  ]),
                                                  _: 1
                                                })
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(_component_UiTableBody, null, {
                                              default: withCtx(() => [
                                                (openBlock(true), createBlock(Fragment, null, renderList(unref(currentManager).dopsInfoPrevMounth, (dop, i) => {
                                                  return openBlock(), createBlock(_component_UiTableRow, {
                                                    key: i,
                                                    class: "whitespace-nowrap text-center cursor-pointer",
                                                    onClick: async () => await getDeal(dop.dealId)
                                                  }, {
                                                    default: withCtx(() => [
                                                      createVNode(_component_UiTableCell, { class: "text-left flex flex-col" }, {
                                                        default: withCtx(() => [
                                                          createVNode("span", null, toDisplayString(dop.dealTitle), 1),
                                                          createVNode("span", { class: "text-xs text-gray-500" }, toDisplayString(dop.title), 1)
                                                        ]),
                                                        _: 2
                                                      }, 1024),
                                                      createVNode(_component_UiTableCell, { class: "font-medium" }, {
                                                        default: withCtx(() => [
                                                          createTextVNode(toDisplayString(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(dop.dopPrice) + "\u20BD"), 1)
                                                        ]),
                                                        _: 2
                                                      }, 1024),
                                                      createVNode(_component_UiTableCell, { class: "font-medium" }, {
                                                        default: withCtx(() => [
                                                          createTextVNode(toDisplayString(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(dop.paid) + "\u20BD"), 1)
                                                        ]),
                                                        _: 2
                                                      }, 1024),
                                                      createVNode(_component_UiTableCell, { class: "font-medium flex flex-col" }, {
                                                        default: withCtx(() => [
                                                          createVNode("span", { class: "text-green-600" }, toDisplayString("+" + ("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(+dop.toSalary.toFixed(2)) + "\u20BD"), 1),
                                                          createVNode("span", { class: "text-xs text-gray-500" }, toDisplayString((dop.bonusPercentage * 100).toFixed(2) + "%"), 1)
                                                        ]),
                                                        _: 2
                                                      }, 1024)
                                                    ]),
                                                    _: 2
                                                  }, 1032, ["onClick"]);
                                                }), 128)),
                                                createVNode(_component_UiTableRow, { class: "text-center font-bold bg-zinc-100" }, {
                                                  default: withCtx(() => [
                                                    createVNode(_component_UiTableCell, { class: "whitespace-nowrap text-left" }, {
                                                      default: withCtx(() => [
                                                        createTextVNode(" \u0418\u0422\u041E\u0413\u041E" + toDisplayString("(" + unref(currentManager).dopsInfoPrevMounth.length + ")"), 1)
                                                      ]),
                                                      _: 1
                                                    }),
                                                    createVNode(_component_UiTableCell, null, {
                                                      default: withCtx(() => [
                                                        createTextVNode(toDisplayString(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(
                                                          unref(currentManager).dopsInfoPrevMounth.reduce(
                                                            (a, b) => a + b.dopPrice,
                                                            0
                                                          )
                                                        ) + "\u20BD"), 1)
                                                      ]),
                                                      _: 1
                                                    }),
                                                    createVNode(_component_UiTableCell, null, {
                                                      default: withCtx(() => [
                                                        createTextVNode(toDisplayString(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(
                                                          +unref(currentManager).dopsInfoPrevMounth.reduce((a, b) => a + b.paid, 0).toFixed()
                                                        ) + "\u20BD"), 1)
                                                      ]),
                                                      _: 1
                                                    }),
                                                    createVNode(_component_UiTableCell, { class: "text-center" }, {
                                                      default: withCtx(() => [
                                                        createVNode("span", { class: "text-green-600" }, toDisplayString("+" + ("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(
                                                          +unref(currentManager).dopsInfoPrevMounth.reduce((a, b) => a + b.toSalary, 0).toFixed(2)
                                                        ) + "\u20BD"), 1)
                                                      ]),
                                                      _: 1
                                                    })
                                                  ]),
                                                  _: 1
                                                })
                                              ]),
                                              _: 1
                                            })
                                          ]),
                                          _: 1
                                        })) : createCommentVNode("", true)
                                      ])
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_UiScrollArea, { class: "relative h-[calc(100vh-270px)] px-2" }, {
                                  default: withCtx(() => {
                                    var _a, _b, _c, _d;
                                    return [
                                      createVNode("div", { class: "flex flex-col gap-8" }, [
                                        ((_b = (_a = unref(currentManager)) == null ? void 0 : _a.dealsInfoPrevMounth) == null ? void 0 : _b.length) ? (openBlock(), createBlock(_component_UiTable, { key: 0 }, {
                                          default: withCtx(() => [
                                            createVNode(_component_UiTableCaption),
                                            createVNode(_component_UiTableHeader, null, {
                                              default: withCtx(() => [
                                                createVNode(_component_UiTableRow, { class: "bg-gray-100" }, {
                                                  default: withCtx(() => [
                                                    createVNode(_component_UiTableHead, { class: "text-left text-xl" }, {
                                                      default: withCtx(() => [
                                                        createTextVNode(" \u0417\u0430\u043A\u0430\u0437\u044B ")
                                                      ]),
                                                      _: 1
                                                    }),
                                                    createVNode(_component_UiTableHead, { class: "text-center" }, {
                                                      default: withCtx(() => [
                                                        createTextVNode("\u0414\u043E\u043B\u044F")
                                                      ]),
                                                      _: 1
                                                    }),
                                                    createVNode(_component_UiTableHead, { class: "text-center" }, {
                                                      default: withCtx(() => [
                                                        createTextVNode("\u041E\u043F\u043B\u0430\u0447\u0435\u043D\u043E")
                                                      ]),
                                                      _: 1
                                                    }),
                                                    createVNode(_component_UiTableHead, { class: "text-center" }, {
                                                      default: withCtx(() => [
                                                        createTextVNode("\u0412 \u0417\u041F")
                                                      ]),
                                                      _: 1
                                                    })
                                                  ]),
                                                  _: 1
                                                })
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(_component_UiTableBody, null, {
                                              default: withCtx(() => [
                                                (openBlock(true), createBlock(Fragment, null, renderList(unref(currentManager).dealsInfoPrevMounth, (deal, i) => {
                                                  return openBlock(), createBlock(_component_UiTableRow, {
                                                    key: i,
                                                    class: "text-center whitespace-nowrap cursor-pointer",
                                                    onClick: async () => await getDeal(deal.id)
                                                  }, {
                                                    default: withCtx(() => [
                                                      createVNode(_component_UiTableCell, { class: "text-left" }, {
                                                        default: withCtx(() => [
                                                          createTextVNode(toDisplayString(deal.title), 1)
                                                        ]),
                                                        _: 2
                                                      }, 1024),
                                                      createVNode(_component_UiTableCell, { class: "font-medium" }, {
                                                        default: withCtx(() => [
                                                          createVNode("div", { class: "flex flex-col" }, [
                                                            createVNode("span", null, toDisplayString(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(deal.dealerPrice) + "\u20BD"), 1),
                                                            createVNode("span", { class: "text-xs text-gray-500" }, [
                                                              createVNode("span", null, toDisplayString(deal.dealerPart) + "%", 1),
                                                              createVNode("span", null, " \u043E\u0442 " + toDisplayString(deal.dealPrice), 1)
                                                            ])
                                                          ])
                                                        ]),
                                                        _: 2
                                                      }, 1024),
                                                      createVNode(_component_UiTableCell, { class: "font-medium" }, {
                                                        default: withCtx(() => [
                                                          createTextVNode(toDisplayString(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(deal.paid) + "\u20BD"), 1)
                                                        ]),
                                                        _: 2
                                                      }, 1024),
                                                      createVNode(_component_UiTableCell, { class: "font-medium flex flex-col" }, {
                                                        default: withCtx(() => [
                                                          createVNode("span", { class: "text-green-600" }, toDisplayString("+" + ("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(+deal.toSalary.toFixed(2)) + "\u20BD"), 1),
                                                          createVNode("span", { class: "text-xs text-gray-500" }, toDisplayString((deal.bonusPercentage * 100).toFixed(2) + "%"), 1)
                                                        ]),
                                                        _: 2
                                                      }, 1024)
                                                    ]),
                                                    _: 2
                                                  }, 1032, ["onClick"]);
                                                }), 128)),
                                                createVNode(_component_UiTableRow, { class: "text-center font-bold bg-zinc-100" }, {
                                                  default: withCtx(() => [
                                                    createVNode(_component_UiTableCell, { class: "text-left" }, {
                                                      default: withCtx(() => [
                                                        createVNode("span", null, "\u0418\u0422\u041E\u0413\u041E"),
                                                        createVNode("span", null, toDisplayString("(" + unref(currentManager).dealsInfoPrevMounth.length + ")"), 1)
                                                      ]),
                                                      _: 1
                                                    }),
                                                    createVNode(_component_UiTableCell, null, {
                                                      default: withCtx(() => [
                                                        createTextVNode(toDisplayString(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(
                                                          unref(currentManager).dealsInfoPrevMounth.reduce(
                                                            (a, b) => a + b.dealerPrice,
                                                            0
                                                          )
                                                        ) + "\u20BD"), 1)
                                                      ]),
                                                      _: 1
                                                    }),
                                                    createVNode(_component_UiTableCell, { class: "text-center" }, {
                                                      default: withCtx(() => [
                                                        createTextVNode(toDisplayString(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(
                                                          +unref(currentManager).dealsInfoPrevMounth.reduce((a, b) => a + b.paid, 0).toFixed(2)
                                                        ) + "\u20BD"), 1)
                                                      ]),
                                                      _: 1
                                                    }),
                                                    createVNode(_component_UiTableCell, { class: "text-center" }, {
                                                      default: withCtx(() => [
                                                        createVNode("span", { class: "text-green-600" }, toDisplayString("+" + ("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(
                                                          +unref(currentManager).dealsInfoPrevMounth.reduce((a, b) => a + b.toSalary, 0).toFixed(2)
                                                        ) + "\u20BD"), 1)
                                                      ]),
                                                      _: 1
                                                    })
                                                  ]),
                                                  _: 1
                                                })
                                              ]),
                                              _: 1
                                            })
                                          ]),
                                          _: 1
                                        })) : createCommentVNode("", true),
                                        ((_d = (_c = unref(currentManager)) == null ? void 0 : _c.dopsInfoPrevMounth) == null ? void 0 : _d.length) ? (openBlock(), createBlock(_component_UiTable, { key: 1 }, {
                                          default: withCtx(() => [
                                            createVNode(_component_UiTableCaption),
                                            createVNode(_component_UiTableHeader, null, {
                                              default: withCtx(() => [
                                                createVNode(_component_UiTableRow, { class: "bg-gray-100" }, {
                                                  default: withCtx(() => [
                                                    createVNode(_component_UiTableHead, { class: "text-left text-xl" }, {
                                                      default: withCtx(() => [
                                                        createTextVNode(" \u0414\u043E\u043F\u044B ")
                                                      ]),
                                                      _: 1
                                                    }),
                                                    createVNode(_component_UiTableHead, { class: "text-center" }, {
                                                      default: withCtx(() => [
                                                        createTextVNode("\u0421\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C")
                                                      ]),
                                                      _: 1
                                                    }),
                                                    createVNode(_component_UiTableHead, { class: "text-center" }, {
                                                      default: withCtx(() => [
                                                        createTextVNode("\u041E\u043F\u043B\u0430\u0447\u0435\u043D\u043E")
                                                      ]),
                                                      _: 1
                                                    }),
                                                    createVNode(_component_UiTableHead, { class: "text-center" }, {
                                                      default: withCtx(() => [
                                                        createTextVNode("\u0412 \u0417\u041F")
                                                      ]),
                                                      _: 1
                                                    })
                                                  ]),
                                                  _: 1
                                                })
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(_component_UiTableBody, null, {
                                              default: withCtx(() => [
                                                (openBlock(true), createBlock(Fragment, null, renderList(unref(currentManager).dopsInfoPrevMounth, (dop, i) => {
                                                  return openBlock(), createBlock(_component_UiTableRow, {
                                                    key: i,
                                                    class: "whitespace-nowrap text-center cursor-pointer",
                                                    onClick: async () => await getDeal(dop.dealId)
                                                  }, {
                                                    default: withCtx(() => [
                                                      createVNode(_component_UiTableCell, { class: "text-left flex flex-col" }, {
                                                        default: withCtx(() => [
                                                          createVNode("span", null, toDisplayString(dop.dealTitle), 1),
                                                          createVNode("span", { class: "text-xs text-gray-500" }, toDisplayString(dop.title), 1)
                                                        ]),
                                                        _: 2
                                                      }, 1024),
                                                      createVNode(_component_UiTableCell, { class: "font-medium" }, {
                                                        default: withCtx(() => [
                                                          createTextVNode(toDisplayString(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(dop.dopPrice) + "\u20BD"), 1)
                                                        ]),
                                                        _: 2
                                                      }, 1024),
                                                      createVNode(_component_UiTableCell, { class: "font-medium" }, {
                                                        default: withCtx(() => [
                                                          createTextVNode(toDisplayString(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(dop.paid) + "\u20BD"), 1)
                                                        ]),
                                                        _: 2
                                                      }, 1024),
                                                      createVNode(_component_UiTableCell, { class: "font-medium flex flex-col" }, {
                                                        default: withCtx(() => [
                                                          createVNode("span", { class: "text-green-600" }, toDisplayString("+" + ("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(+dop.toSalary.toFixed(2)) + "\u20BD"), 1),
                                                          createVNode("span", { class: "text-xs text-gray-500" }, toDisplayString((dop.bonusPercentage * 100).toFixed(2) + "%"), 1)
                                                        ]),
                                                        _: 2
                                                      }, 1024)
                                                    ]),
                                                    _: 2
                                                  }, 1032, ["onClick"]);
                                                }), 128)),
                                                createVNode(_component_UiTableRow, { class: "text-center font-bold bg-zinc-100" }, {
                                                  default: withCtx(() => [
                                                    createVNode(_component_UiTableCell, { class: "whitespace-nowrap text-left" }, {
                                                      default: withCtx(() => [
                                                        createTextVNode(" \u0418\u0422\u041E\u0413\u041E" + toDisplayString("(" + unref(currentManager).dopsInfoPrevMounth.length + ")"), 1)
                                                      ]),
                                                      _: 1
                                                    }),
                                                    createVNode(_component_UiTableCell, null, {
                                                      default: withCtx(() => [
                                                        createTextVNode(toDisplayString(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(
                                                          unref(currentManager).dopsInfoPrevMounth.reduce(
                                                            (a, b) => a + b.dopPrice,
                                                            0
                                                          )
                                                        ) + "\u20BD"), 1)
                                                      ]),
                                                      _: 1
                                                    }),
                                                    createVNode(_component_UiTableCell, null, {
                                                      default: withCtx(() => [
                                                        createTextVNode(toDisplayString(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(
                                                          +unref(currentManager).dopsInfoPrevMounth.reduce((a, b) => a + b.paid, 0).toFixed()
                                                        ) + "\u20BD"), 1)
                                                      ]),
                                                      _: 1
                                                    }),
                                                    createVNode(_component_UiTableCell, { class: "text-center" }, {
                                                      default: withCtx(() => [
                                                        createVNode("span", { class: "text-green-600" }, toDisplayString("+" + ("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(
                                                          +unref(currentManager).dopsInfoPrevMounth.reduce((a, b) => a + b.toSalary, 0).toFixed(2)
                                                        ) + "\u20BD"), 1)
                                                      ]),
                                                      _: 1
                                                    })
                                                  ]),
                                                  _: 1
                                                })
                                              ]),
                                              _: 1
                                            })
                                          ]),
                                          _: 1
                                        })) : createCommentVNode("", true)
                                      ])
                                    ];
                                  }),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_UiTabsList, null, {
                            default: withCtx(() => [
                              createVNode(_component_UiTabsTrigger, { value: "info" }, {
                                default: withCtx(() => [
                                  createTextVNode(" \u0418\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F ")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_UiTabsTrigger, { value: "deals" }, {
                                default: withCtx(() => [
                                  createTextVNode(" \u0412\u044B\u0432\u0435\u0441\u043A\u0438 ")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_UiTabsTrigger, { value: "dops" }, {
                                default: withCtx(() => [
                                  createTextVNode(" \u0414\u043E\u043F\u044B ")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_UiTabsTrigger, { value: "remainders" }, {
                                default: withCtx(() => [
                                  createTextVNode(" \u041E\u0441\u0442\u0430\u0442\u043A\u0438 ")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_UiTabsContent, {
                            value: "info",
                            class: ""
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_UiScrollArea, { class: "h-[calc(100vh-250px)] px-5 pb-5" }, {
                                default: withCtx(() => [
                                  createVNode("div", { class: "flex flex-col gap-5" }, [
                                    createVNode("div", null, [
                                      createVNode("div", { class: "font-semibold" }, "\u041E\u0441\u043D\u043E\u0432\u043D\u0430\u044F \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F"),
                                      createVNode("ul", { class: "gap-1 text-gray-600" }, [
                                        createVNode("div", { class: "flex items-center border-b-1" }, [
                                          (openBlock(), createBlock(_component_MyManagersSetPlanModal, {
                                            key: unref(currentManager).id,
                                            plan: unref(currentManager).plan,
                                            period: unref(period),
                                            "manager-id": unref(currentManager).id,
                                            manager: unref(currentManager).fullName,
                                            onIsPlanSet: (np) => handlePlanSet(np, unref(currentManager).id)
                                          }, null, 8, ["plan", "period", "manager-id", "manager", "onIsPlanSet"])),
                                          createVNode("span", { class: "ml-2" }, "\u041F\u043B\u0430\u043D"),
                                          createVNode("span", { class: "ml-auto" }, toDisplayString(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(unref(currentManager).plan) + "\u20BD"), 1)
                                        ]),
                                        createVNode("li", { class: "flex items-center border-b-1" }, [
                                          createVNode("span", { class: "text-muted-foreground" }, " \u041E\u0441\u0442\u0430\u0442\u043E\u043A \u0434\u043E \u043F\u043B\u0430\u043D\u0430 "),
                                          createVNode("span", { class: "ml-auto" }, toDisplayString(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(
                                            unref(currentManager).plan - unref(currentManager).totalSales
                                          ) + "\u20BD"), 1)
                                        ]),
                                        (openBlock(true), createBlock(Fragment, null, renderList(unref(mainInfo), (item, i) => {
                                          return openBlock(), createBlock("li", {
                                            key: i,
                                            class: "flex items-center border-b-1"
                                          }, [
                                            createVNode("span", { class: "text-muted-foreground" }, toDisplayString(item.label), 1),
                                            createVNode("span", { class: "ml-auto" }, toDisplayString(item.value), 1)
                                          ]);
                                        }), 128))
                                      ])
                                    ]),
                                    createVNode("div", null, [
                                      createVNode("div", { class: "font-semibold" }, "\u041F\u043E\u043A\u0430\u0437\u0430\u0442\u0435\u043B\u0438"),
                                      createVNode("ul", { class: "gap-1 text-gray-600" }, [
                                        (openBlock(true), createBlock(Fragment, null, renderList(unref(characteristicsInfo), (item, i) => {
                                          return openBlock(), createBlock("li", {
                                            key: i,
                                            class: "flex items-center justify-between border-b-1"
                                          }, [
                                            createVNode("span", { class: "text-muted-foreground" }, toDisplayString(item.label), 1),
                                            createVNode("span", null, toDisplayString(item.value), 1)
                                          ]);
                                        }), 128))
                                      ])
                                    ]),
                                    createVNode("div", null, [
                                      createVNode("div", { class: "flex justify-between items-center mb-2" }, [
                                        createVNode("div", { class: "font-semibold" }, "\u0417\u0430\u0440\u043F\u043B\u0430\u0442\u0430"),
                                        createVNode(_component_MySalariesCorrectCreateModal, {
                                          "user-id": unref(currentManager).id,
                                          onCorrectionCreated: (corr) => {
                                            getDatas();
                                          }
                                        }, null, 8, ["user-id", "onCorrectionCreated"])
                                      ]),
                                      createVNode("ul", { class: "gap-1 text-gray-600" }, [
                                        (openBlock(true), createBlock(Fragment, null, renderList(unref(salaryInfo).slice(0, 3), (item, i) => {
                                          return openBlock(), createBlock("li", {
                                            key: i,
                                            class: "flex items-center w-full"
                                          }, [
                                            createVNode("span", { class: "text-muted-foreground mr-auto" }, toDisplayString(item.label), 1),
                                            createVNode("span", null, toDisplayString(item.value), 1)
                                          ]);
                                        }), 128))
                                      ]),
                                      createVNode(_component_UiSeparator, { class: "mb-2" }),
                                      createVNode("ul", { class: "gap-1 text-green-600/80" }, [
                                        (openBlock(true), createBlock(Fragment, null, renderList(unref(currentManager).salaryPays, (pay) => {
                                          return openBlock(), createBlock("li", {
                                            key: pay.id,
                                            class: ["flex font-semibold"]
                                          }, [
                                            createVNode(_component_UiButton, {
                                              class: "h-5 w-5 px-0 mr-1",
                                              onClick: ($event) => deleteSalaryItem(pay.id)
                                            }, {
                                              default: withCtx(() => [
                                                createTextVNode(" - ")
                                              ]),
                                              _: 2
                                            }, 1032, ["onClick"]),
                                            createVNode("span", null, " \u0412\u044B\u043F\u043B\u0430\u0442\u0430 "),
                                            createVNode("span", { class: "ml-auto" }, toDisplayString(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(pay.price) + "\u20BD"), 1)
                                          ]);
                                        }), 128))
                                      ]),
                                      createVNode("ul", { class: "gap-1 text-gray-600" }, [
                                        (openBlock(true), createBlock(Fragment, null, renderList(unref(currentManager).salaryCorrections, (corr) => {
                                          return openBlock(), createBlock("li", {
                                            key: corr.id,
                                            class: [
                                              "flex",
                                              corr.type === "\u041F\u0440\u0438\u0431\u0430\u0432\u043A\u0430" ? "text-green-500" : "text-red-500"
                                            ]
                                          }, [
                                            createVNode(_component_UiButton, {
                                              class: "h-5 w-5 px-0 mr-1",
                                              onClick: ($event) => deleteSalaryCorr(corr.id)
                                            }, {
                                              default: withCtx(() => [
                                                createTextVNode(" - ")
                                              ]),
                                              _: 2
                                            }, 1032, ["onClick"]),
                                            createVNode("span", null, toDisplayString(corr.type), 1),
                                            corr.description ? (openBlock(), createBlock("span", { key: 0 }, toDisplayString("(" + corr.description + ")"), 1)) : createCommentVNode("", true),
                                            createVNode("span", { class: "ml-auto" }, toDisplayString(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(corr.price) + "\u20BD"), 1)
                                          ], 2);
                                        }), 128))
                                      ]),
                                      createVNode(_component_UiSeparator, { class: "my-1" }),
                                      createVNode("ul", null, [
                                        (openBlock(true), createBlock(Fragment, null, renderList(unref(salaryInfo).slice(3), (item, i) => {
                                          return openBlock(), createBlock("li", {
                                            key: i,
                                            class: "flex items-center w-full"
                                          }, [
                                            createVNode("span", { class: "text-muted-foreground mr-auto" }, toDisplayString(item.label), 1),
                                            createVNode("span", null, toDisplayString(item.value), 1)
                                          ]);
                                        }), 128))
                                      ])
                                    ])
                                  ])
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_UiTabsContent, { value: "deals" }, {
                            default: withCtx(() => [
                              createVNode(_component_UiScrollArea, { class: "relative h-[calc(100vh-270px)] px-2" }, {
                                default: withCtx(() => {
                                  var _a, _b;
                                  return [
                                    ((_b = (_a = unref(currentManager)) == null ? void 0 : _a.dealsInfo) == null ? void 0 : _b.length) ? (openBlock(), createBlock(_component_UiTable, { key: 0 }, {
                                      default: withCtx(() => [
                                        createVNode(_component_UiTableCaption, null, {
                                          default: withCtx(() => [
                                            createTextVNode("\u0421\u043F\u0438\u0441\u043E\u043A \u0437\u0430\u043A\u0430\u0437\u043E\u0432 \u043C\u0435\u043D\u0435\u0434\u0436\u0435\u0440\u0430")
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(_component_UiTableHeader, null, {
                                          default: withCtx(() => [
                                            createVNode(_component_UiTableRow, { class: "bg-gray-100" }, {
                                              default: withCtx(() => [
                                                createVNode(_component_UiTableHead, { class: "text-left" }, {
                                                  default: withCtx(() => [
                                                    createTextVNode(" \u0417\u0430\u043A\u0430\u0437 ")
                                                  ]),
                                                  _: 1
                                                }),
                                                createVNode(_component_UiTableHead, { class: "text-center" }, {
                                                  default: withCtx(() => [
                                                    createTextVNode("\u0414\u0430\u0442\u0430")
                                                  ]),
                                                  _: 1
                                                }),
                                                createVNode(_component_UiTableHead, { class: "text-center" }, {
                                                  default: withCtx(() => [
                                                    createTextVNode("\u0414\u043E\u043B\u044F")
                                                  ]),
                                                  _: 1
                                                }),
                                                createVNode(_component_UiTableHead, { class: "text-center" }, {
                                                  default: withCtx(() => [
                                                    createTextVNode("\u041E\u043F\u043B\u0430\u0447\u0435\u043D\u043E")
                                                  ]),
                                                  _: 1
                                                })
                                              ]),
                                              _: 1
                                            })
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(_component_UiTableBody, null, {
                                          default: withCtx(() => [
                                            (openBlock(true), createBlock(Fragment, null, renderList(unref(currentManager).dealsInfo, (deal, i) => {
                                              return openBlock(), createBlock(_component_UiTableRow, {
                                                key: i,
                                                class: "text-center whitespace-nowrap cursor-pointer",
                                                onClick: async () => await getDeal(deal.id)
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode(_component_UiTableCell, { class: "text-left text-wrap" }, {
                                                    default: withCtx(() => [
                                                      createTextVNode(toDisplayString(deal.title), 1)
                                                    ]),
                                                    _: 2
                                                  }, 1024),
                                                  createVNode(_component_UiTableCell, { class: "font-medium text-xs" }, {
                                                    default: withCtx(() => [
                                                      createTextVNode(toDisplayString(("dateFormat" in _ctx ? _ctx.dateFormat : unref(dateFormat))(deal.saleDate)), 1)
                                                    ]),
                                                    _: 2
                                                  }, 1024),
                                                  createVNode(_component_UiTableCell, { class: "font-medium flex flex-col" }, {
                                                    default: withCtx(() => [
                                                      createVNode("span", null, toDisplayString(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(deal.dealPrice) + "\u20BD"), 1),
                                                      createVNode("span", { class: "text-xs text-gray-500" }, toDisplayString(deal.dealerPart + "%"), 1)
                                                    ]),
                                                    _: 2
                                                  }, 1024),
                                                  createVNode(_component_UiTableCell, { class: "font-medium" }, {
                                                    default: withCtx(() => [
                                                      createTextVNode(toDisplayString(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(deal.paid) + "\u20BD"), 1)
                                                    ]),
                                                    _: 2
                                                  }, 1024)
                                                ]),
                                                _: 2
                                              }, 1032, ["onClick"]);
                                            }), 128)),
                                            createVNode(_component_UiTableRow, { class: "text-center font-bold" }, {
                                              default: withCtx(() => [
                                                createVNode(_component_UiTableCell, { class: "text-left" }, {
                                                  default: withCtx(() => [
                                                    createTextVNode(" \u0418\u0422\u041E\u0413\u041E(" + toDisplayString(unref(currentManager).dealsInfo.length) + ") ", 1)
                                                  ]),
                                                  _: 1
                                                }),
                                                createVNode(_component_UiTableCell, null, {
                                                  default: withCtx(() => [
                                                    createTextVNode(toDisplayString(unref(period)), 1)
                                                  ]),
                                                  _: 1
                                                }),
                                                createVNode(_component_UiTableCell, null, {
                                                  default: withCtx(() => [
                                                    createTextVNode(toDisplayString(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(
                                                      unref(currentManager).dealsInfo.reduce(
                                                        (a, b) => a + b.dealerPrice,
                                                        0
                                                      )
                                                    ) + "\u20BD"), 1)
                                                  ]),
                                                  _: 1
                                                }),
                                                createVNode(_component_UiTableCell, { class: "text-center" }, {
                                                  default: withCtx(() => [
                                                    createTextVNode(toDisplayString(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(
                                                      +unref(currentManager).dealsInfo.reduce((a, b) => a + b.paid, 0).toFixed(2)
                                                    ) + "\u20BD"), 1)
                                                  ]),
                                                  _: 1
                                                })
                                              ]),
                                              _: 1
                                            })
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    })) : createCommentVNode("", true)
                                  ];
                                }),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_UiTabsContent, { value: "dops" }, {
                            default: withCtx(() => [
                              createVNode(_component_UiScrollArea, { class: "relative h-[calc(100vh-270px)] px-2" }, {
                                default: withCtx(() => {
                                  var _a, _b;
                                  return [
                                    ((_b = (_a = unref(currentManager)) == null ? void 0 : _a.dopsInfo) == null ? void 0 : _b.length) ? (openBlock(), createBlock(_component_UiTable, { key: 0 }, {
                                      default: withCtx(() => [
                                        createVNode(_component_UiTableCaption, null, {
                                          default: withCtx(() => [
                                            createTextVNode("\u0421\u043F\u0438\u0441\u043E\u043A \u0434\u043E\u043F.\u043F\u0440\u043E\u0434\u0430\u0436 \u043C\u0435\u043D\u0435\u0434\u0436\u0435\u0440\u0430")
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(_component_UiTableHeader, null, {
                                          default: withCtx(() => [
                                            createVNode(_component_UiTableRow, { class: "bg-gray-100" }, {
                                              default: withCtx(() => [
                                                createVNode(_component_UiTableHead, { class: "text-left" }, {
                                                  default: withCtx(() => [
                                                    createTextVNode(" \u0414\u043E\u043F ")
                                                  ]),
                                                  _: 1
                                                }),
                                                createVNode(_component_UiTableHead, { class: "text-center" }, {
                                                  default: withCtx(() => [
                                                    createTextVNode("\u0414\u0430\u0442\u0430")
                                                  ]),
                                                  _: 1
                                                }),
                                                createVNode(_component_UiTableHead, { class: "text-center" }, {
                                                  default: withCtx(() => [
                                                    createTextVNode("\u0421\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C")
                                                  ]),
                                                  _: 1
                                                }),
                                                createVNode(_component_UiTableHead, { class: "text-center" }, {
                                                  default: withCtx(() => [
                                                    createTextVNode("\u041E\u043F\u043B\u0430\u0447\u0435\u043D\u043E")
                                                  ]),
                                                  _: 1
                                                })
                                              ]),
                                              _: 1
                                            })
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(_component_UiTableBody, null, {
                                          default: withCtx(() => [
                                            (openBlock(true), createBlock(Fragment, null, renderList(unref(currentManager).dopsInfo, (dop, i) => {
                                              return openBlock(), createBlock(_component_UiTableRow, {
                                                key: i,
                                                class: "whitespace-nowrap text-center cursor-pointer",
                                                onClick: async () => await getDeal(dop.dealId)
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode(_component_UiTableCell, { class: "text-left flex flex-col" }, {
                                                    default: withCtx(() => [
                                                      createVNode("span", null, toDisplayString(dop.dealTitle), 1),
                                                      createVNode("span", { class: "text-xs text-gray-500" }, toDisplayString(dop.title), 1)
                                                    ]),
                                                    _: 2
                                                  }, 1024),
                                                  createVNode(_component_UiTableCell, { class: "font-medium text-xs" }, {
                                                    default: withCtx(() => [
                                                      createTextVNode(toDisplayString(("dateFormat" in _ctx ? _ctx.dateFormat : unref(dateFormat))(dop.saleDate)), 1)
                                                    ]),
                                                    _: 2
                                                  }, 1024),
                                                  createVNode(_component_UiTableCell, { class: "font-medium" }, {
                                                    default: withCtx(() => [
                                                      createTextVNode(toDisplayString(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(dop.dopPrice) + "\u20BD"), 1)
                                                    ]),
                                                    _: 2
                                                  }, 1024),
                                                  createVNode(_component_UiTableCell, { class: "font-medium" }, {
                                                    default: withCtx(() => [
                                                      createTextVNode(toDisplayString(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(dop.paid) + "\u20BD"), 1)
                                                    ]),
                                                    _: 2
                                                  }, 1024)
                                                ]),
                                                _: 2
                                              }, 1032, ["onClick"]);
                                            }), 128)),
                                            createVNode(_component_UiTableRow, { class: "text-center font-bold" }, {
                                              default: withCtx(() => [
                                                createVNode(_component_UiTableCell, { class: "whitespace-nowrap text-left" }, {
                                                  default: withCtx(() => [
                                                    createTextVNode(" \u0418\u0422\u041E\u0413\u041E(" + toDisplayString(unref(currentManager).dopsInfo.length) + ") ", 1)
                                                  ]),
                                                  _: 1
                                                }),
                                                createVNode(_component_UiTableCell, null, {
                                                  default: withCtx(() => [
                                                    createTextVNode(toDisplayString(unref(period)), 1)
                                                  ]),
                                                  _: 1
                                                }),
                                                createVNode(_component_UiTableCell, null, {
                                                  default: withCtx(() => [
                                                    createTextVNode(toDisplayString(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(
                                                      unref(currentManager).dopsInfo.reduce(
                                                        (a, b) => a + b.dopPrice,
                                                        0
                                                      )
                                                    ) + "\u20BD"), 1)
                                                  ]),
                                                  _: 1
                                                }),
                                                createVNode(_component_UiTableCell, null, {
                                                  default: withCtx(() => [
                                                    createTextVNode(toDisplayString(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(
                                                      +unref(currentManager).dopsInfo.reduce((a, b) => a + b.paid, 0).toFixed()
                                                    ) + "\u20BD"), 1)
                                                  ]),
                                                  _: 1
                                                })
                                              ]),
                                              _: 1
                                            })
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    })) : createCommentVNode("", true)
                                  ];
                                }),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_UiTabsContent, { value: "remainders" }, {
                            default: withCtx(() => [
                              createVNode(_component_UiScrollArea, { class: "relative h-[calc(100vh-270px)] px-2" }, {
                                default: withCtx(() => {
                                  var _a, _b, _c, _d;
                                  return [
                                    createVNode("div", { class: "flex flex-col gap-8" }, [
                                      ((_b = (_a = unref(currentManager)) == null ? void 0 : _a.dealsInfoPrevMounth) == null ? void 0 : _b.length) ? (openBlock(), createBlock(_component_UiTable, { key: 0 }, {
                                        default: withCtx(() => [
                                          createVNode(_component_UiTableCaption),
                                          createVNode(_component_UiTableHeader, null, {
                                            default: withCtx(() => [
                                              createVNode(_component_UiTableRow, { class: "bg-gray-100" }, {
                                                default: withCtx(() => [
                                                  createVNode(_component_UiTableHead, { class: "text-left text-xl" }, {
                                                    default: withCtx(() => [
                                                      createTextVNode(" \u0417\u0430\u043A\u0430\u0437\u044B ")
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createVNode(_component_UiTableHead, { class: "text-center" }, {
                                                    default: withCtx(() => [
                                                      createTextVNode("\u0414\u043E\u043B\u044F")
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createVNode(_component_UiTableHead, { class: "text-center" }, {
                                                    default: withCtx(() => [
                                                      createTextVNode("\u041E\u043F\u043B\u0430\u0447\u0435\u043D\u043E")
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createVNode(_component_UiTableHead, { class: "text-center" }, {
                                                    default: withCtx(() => [
                                                      createTextVNode("\u0412 \u0417\u041F")
                                                    ]),
                                                    _: 1
                                                  })
                                                ]),
                                                _: 1
                                              })
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(_component_UiTableBody, null, {
                                            default: withCtx(() => [
                                              (openBlock(true), createBlock(Fragment, null, renderList(unref(currentManager).dealsInfoPrevMounth, (deal, i) => {
                                                return openBlock(), createBlock(_component_UiTableRow, {
                                                  key: i,
                                                  class: "text-center whitespace-nowrap cursor-pointer",
                                                  onClick: async () => await getDeal(deal.id)
                                                }, {
                                                  default: withCtx(() => [
                                                    createVNode(_component_UiTableCell, { class: "text-left" }, {
                                                      default: withCtx(() => [
                                                        createTextVNode(toDisplayString(deal.title), 1)
                                                      ]),
                                                      _: 2
                                                    }, 1024),
                                                    createVNode(_component_UiTableCell, { class: "font-medium" }, {
                                                      default: withCtx(() => [
                                                        createVNode("div", { class: "flex flex-col" }, [
                                                          createVNode("span", null, toDisplayString(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(deal.dealerPrice) + "\u20BD"), 1),
                                                          createVNode("span", { class: "text-xs text-gray-500" }, [
                                                            createVNode("span", null, toDisplayString(deal.dealerPart) + "%", 1),
                                                            createVNode("span", null, " \u043E\u0442 " + toDisplayString(deal.dealPrice), 1)
                                                          ])
                                                        ])
                                                      ]),
                                                      _: 2
                                                    }, 1024),
                                                    createVNode(_component_UiTableCell, { class: "font-medium" }, {
                                                      default: withCtx(() => [
                                                        createTextVNode(toDisplayString(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(deal.paid) + "\u20BD"), 1)
                                                      ]),
                                                      _: 2
                                                    }, 1024),
                                                    createVNode(_component_UiTableCell, { class: "font-medium flex flex-col" }, {
                                                      default: withCtx(() => [
                                                        createVNode("span", { class: "text-green-600" }, toDisplayString("+" + ("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(+deal.toSalary.toFixed(2)) + "\u20BD"), 1),
                                                        createVNode("span", { class: "text-xs text-gray-500" }, toDisplayString((deal.bonusPercentage * 100).toFixed(2) + "%"), 1)
                                                      ]),
                                                      _: 2
                                                    }, 1024)
                                                  ]),
                                                  _: 2
                                                }, 1032, ["onClick"]);
                                              }), 128)),
                                              createVNode(_component_UiTableRow, { class: "text-center font-bold bg-zinc-100" }, {
                                                default: withCtx(() => [
                                                  createVNode(_component_UiTableCell, { class: "text-left" }, {
                                                    default: withCtx(() => [
                                                      createVNode("span", null, "\u0418\u0422\u041E\u0413\u041E"),
                                                      createVNode("span", null, toDisplayString("(" + unref(currentManager).dealsInfoPrevMounth.length + ")"), 1)
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createVNode(_component_UiTableCell, null, {
                                                    default: withCtx(() => [
                                                      createTextVNode(toDisplayString(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(
                                                        unref(currentManager).dealsInfoPrevMounth.reduce(
                                                          (a, b) => a + b.dealerPrice,
                                                          0
                                                        )
                                                      ) + "\u20BD"), 1)
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createVNode(_component_UiTableCell, { class: "text-center" }, {
                                                    default: withCtx(() => [
                                                      createTextVNode(toDisplayString(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(
                                                        +unref(currentManager).dealsInfoPrevMounth.reduce((a, b) => a + b.paid, 0).toFixed(2)
                                                      ) + "\u20BD"), 1)
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createVNode(_component_UiTableCell, { class: "text-center" }, {
                                                    default: withCtx(() => [
                                                      createVNode("span", { class: "text-green-600" }, toDisplayString("+" + ("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(
                                                        +unref(currentManager).dealsInfoPrevMounth.reduce((a, b) => a + b.toSalary, 0).toFixed(2)
                                                      ) + "\u20BD"), 1)
                                                    ]),
                                                    _: 1
                                                  })
                                                ]),
                                                _: 1
                                              })
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      })) : createCommentVNode("", true),
                                      ((_d = (_c = unref(currentManager)) == null ? void 0 : _c.dopsInfoPrevMounth) == null ? void 0 : _d.length) ? (openBlock(), createBlock(_component_UiTable, { key: 1 }, {
                                        default: withCtx(() => [
                                          createVNode(_component_UiTableCaption),
                                          createVNode(_component_UiTableHeader, null, {
                                            default: withCtx(() => [
                                              createVNode(_component_UiTableRow, { class: "bg-gray-100" }, {
                                                default: withCtx(() => [
                                                  createVNode(_component_UiTableHead, { class: "text-left text-xl" }, {
                                                    default: withCtx(() => [
                                                      createTextVNode(" \u0414\u043E\u043F\u044B ")
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createVNode(_component_UiTableHead, { class: "text-center" }, {
                                                    default: withCtx(() => [
                                                      createTextVNode("\u0421\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C")
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createVNode(_component_UiTableHead, { class: "text-center" }, {
                                                    default: withCtx(() => [
                                                      createTextVNode("\u041E\u043F\u043B\u0430\u0447\u0435\u043D\u043E")
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createVNode(_component_UiTableHead, { class: "text-center" }, {
                                                    default: withCtx(() => [
                                                      createTextVNode("\u0412 \u0417\u041F")
                                                    ]),
                                                    _: 1
                                                  })
                                                ]),
                                                _: 1
                                              })
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(_component_UiTableBody, null, {
                                            default: withCtx(() => [
                                              (openBlock(true), createBlock(Fragment, null, renderList(unref(currentManager).dopsInfoPrevMounth, (dop, i) => {
                                                return openBlock(), createBlock(_component_UiTableRow, {
                                                  key: i,
                                                  class: "whitespace-nowrap text-center cursor-pointer",
                                                  onClick: async () => await getDeal(dop.dealId)
                                                }, {
                                                  default: withCtx(() => [
                                                    createVNode(_component_UiTableCell, { class: "text-left flex flex-col" }, {
                                                      default: withCtx(() => [
                                                        createVNode("span", null, toDisplayString(dop.dealTitle), 1),
                                                        createVNode("span", { class: "text-xs text-gray-500" }, toDisplayString(dop.title), 1)
                                                      ]),
                                                      _: 2
                                                    }, 1024),
                                                    createVNode(_component_UiTableCell, { class: "font-medium" }, {
                                                      default: withCtx(() => [
                                                        createTextVNode(toDisplayString(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(dop.dopPrice) + "\u20BD"), 1)
                                                      ]),
                                                      _: 2
                                                    }, 1024),
                                                    createVNode(_component_UiTableCell, { class: "font-medium" }, {
                                                      default: withCtx(() => [
                                                        createTextVNode(toDisplayString(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(dop.paid) + "\u20BD"), 1)
                                                      ]),
                                                      _: 2
                                                    }, 1024),
                                                    createVNode(_component_UiTableCell, { class: "font-medium flex flex-col" }, {
                                                      default: withCtx(() => [
                                                        createVNode("span", { class: "text-green-600" }, toDisplayString("+" + ("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(+dop.toSalary.toFixed(2)) + "\u20BD"), 1),
                                                        createVNode("span", { class: "text-xs text-gray-500" }, toDisplayString((dop.bonusPercentage * 100).toFixed(2) + "%"), 1)
                                                      ]),
                                                      _: 2
                                                    }, 1024)
                                                  ]),
                                                  _: 2
                                                }, 1032, ["onClick"]);
                                              }), 128)),
                                              createVNode(_component_UiTableRow, { class: "text-center font-bold bg-zinc-100" }, {
                                                default: withCtx(() => [
                                                  createVNode(_component_UiTableCell, { class: "whitespace-nowrap text-left" }, {
                                                    default: withCtx(() => [
                                                      createTextVNode(" \u0418\u0422\u041E\u0413\u041E" + toDisplayString("(" + unref(currentManager).dopsInfoPrevMounth.length + ")"), 1)
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createVNode(_component_UiTableCell, null, {
                                                    default: withCtx(() => [
                                                      createTextVNode(toDisplayString(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(
                                                        unref(currentManager).dopsInfoPrevMounth.reduce(
                                                          (a, b) => a + b.dopPrice,
                                                          0
                                                        )
                                                      ) + "\u20BD"), 1)
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createVNode(_component_UiTableCell, null, {
                                                    default: withCtx(() => [
                                                      createTextVNode(toDisplayString(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(
                                                        +unref(currentManager).dopsInfoPrevMounth.reduce((a, b) => a + b.paid, 0).toFixed()
                                                      ) + "\u20BD"), 1)
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createVNode(_component_UiTableCell, { class: "text-center" }, {
                                                    default: withCtx(() => [
                                                      createVNode("span", { class: "text-green-600" }, toDisplayString("+" + ("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(
                                                        +unref(currentManager).dopsInfoPrevMounth.reduce((a, b) => a + b.toSalary, 0).toFixed(2)
                                                      ) + "\u20BD"), 1)
                                                    ]),
                                                    _: 1
                                                  })
                                                ]),
                                                _: 1
                                              })
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      })) : createCommentVNode("", true)
                                    ])
                                  ];
                                }),
                                _: 1
                              })
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UiTabs, { "default-value": "info" }, {
                      default: withCtx(() => [
                        createVNode(_component_UiTabsList, null, {
                          default: withCtx(() => [
                            createVNode(_component_UiTabsTrigger, { value: "info" }, {
                              default: withCtx(() => [
                                createTextVNode(" \u0418\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F ")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_UiTabsTrigger, { value: "deals" }, {
                              default: withCtx(() => [
                                createTextVNode(" \u0412\u044B\u0432\u0435\u0441\u043A\u0438 ")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_UiTabsTrigger, { value: "dops" }, {
                              default: withCtx(() => [
                                createTextVNode(" \u0414\u043E\u043F\u044B ")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_UiTabsTrigger, { value: "remainders" }, {
                              default: withCtx(() => [
                                createTextVNode(" \u041E\u0441\u0442\u0430\u0442\u043A\u0438 ")
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(_component_UiTabsContent, {
                          value: "info",
                          class: ""
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_UiScrollArea, { class: "h-[calc(100vh-250px)] px-5 pb-5" }, {
                              default: withCtx(() => [
                                createVNode("div", { class: "flex flex-col gap-5" }, [
                                  createVNode("div", null, [
                                    createVNode("div", { class: "font-semibold" }, "\u041E\u0441\u043D\u043E\u0432\u043D\u0430\u044F \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F"),
                                    createVNode("ul", { class: "gap-1 text-gray-600" }, [
                                      createVNode("div", { class: "flex items-center border-b-1" }, [
                                        (openBlock(), createBlock(_component_MyManagersSetPlanModal, {
                                          key: unref(currentManager).id,
                                          plan: unref(currentManager).plan,
                                          period: unref(period),
                                          "manager-id": unref(currentManager).id,
                                          manager: unref(currentManager).fullName,
                                          onIsPlanSet: (np) => handlePlanSet(np, unref(currentManager).id)
                                        }, null, 8, ["plan", "period", "manager-id", "manager", "onIsPlanSet"])),
                                        createVNode("span", { class: "ml-2" }, "\u041F\u043B\u0430\u043D"),
                                        createVNode("span", { class: "ml-auto" }, toDisplayString(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(unref(currentManager).plan) + "\u20BD"), 1)
                                      ]),
                                      createVNode("li", { class: "flex items-center border-b-1" }, [
                                        createVNode("span", { class: "text-muted-foreground" }, " \u041E\u0441\u0442\u0430\u0442\u043E\u043A \u0434\u043E \u043F\u043B\u0430\u043D\u0430 "),
                                        createVNode("span", { class: "ml-auto" }, toDisplayString(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(
                                          unref(currentManager).plan - unref(currentManager).totalSales
                                        ) + "\u20BD"), 1)
                                      ]),
                                      (openBlock(true), createBlock(Fragment, null, renderList(unref(mainInfo), (item, i) => {
                                        return openBlock(), createBlock("li", {
                                          key: i,
                                          class: "flex items-center border-b-1"
                                        }, [
                                          createVNode("span", { class: "text-muted-foreground" }, toDisplayString(item.label), 1),
                                          createVNode("span", { class: "ml-auto" }, toDisplayString(item.value), 1)
                                        ]);
                                      }), 128))
                                    ])
                                  ]),
                                  createVNode("div", null, [
                                    createVNode("div", { class: "font-semibold" }, "\u041F\u043E\u043A\u0430\u0437\u0430\u0442\u0435\u043B\u0438"),
                                    createVNode("ul", { class: "gap-1 text-gray-600" }, [
                                      (openBlock(true), createBlock(Fragment, null, renderList(unref(characteristicsInfo), (item, i) => {
                                        return openBlock(), createBlock("li", {
                                          key: i,
                                          class: "flex items-center justify-between border-b-1"
                                        }, [
                                          createVNode("span", { class: "text-muted-foreground" }, toDisplayString(item.label), 1),
                                          createVNode("span", null, toDisplayString(item.value), 1)
                                        ]);
                                      }), 128))
                                    ])
                                  ]),
                                  createVNode("div", null, [
                                    createVNode("div", { class: "flex justify-between items-center mb-2" }, [
                                      createVNode("div", { class: "font-semibold" }, "\u0417\u0430\u0440\u043F\u043B\u0430\u0442\u0430"),
                                      createVNode(_component_MySalariesCorrectCreateModal, {
                                        "user-id": unref(currentManager).id,
                                        onCorrectionCreated: (corr) => {
                                          getDatas();
                                        }
                                      }, null, 8, ["user-id", "onCorrectionCreated"])
                                    ]),
                                    createVNode("ul", { class: "gap-1 text-gray-600" }, [
                                      (openBlock(true), createBlock(Fragment, null, renderList(unref(salaryInfo).slice(0, 3), (item, i) => {
                                        return openBlock(), createBlock("li", {
                                          key: i,
                                          class: "flex items-center w-full"
                                        }, [
                                          createVNode("span", { class: "text-muted-foreground mr-auto" }, toDisplayString(item.label), 1),
                                          createVNode("span", null, toDisplayString(item.value), 1)
                                        ]);
                                      }), 128))
                                    ]),
                                    createVNode(_component_UiSeparator, { class: "mb-2" }),
                                    createVNode("ul", { class: "gap-1 text-green-600/80" }, [
                                      (openBlock(true), createBlock(Fragment, null, renderList(unref(currentManager).salaryPays, (pay) => {
                                        return openBlock(), createBlock("li", {
                                          key: pay.id,
                                          class: ["flex font-semibold"]
                                        }, [
                                          createVNode(_component_UiButton, {
                                            class: "h-5 w-5 px-0 mr-1",
                                            onClick: ($event) => deleteSalaryItem(pay.id)
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode(" - ")
                                            ]),
                                            _: 2
                                          }, 1032, ["onClick"]),
                                          createVNode("span", null, " \u0412\u044B\u043F\u043B\u0430\u0442\u0430 "),
                                          createVNode("span", { class: "ml-auto" }, toDisplayString(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(pay.price) + "\u20BD"), 1)
                                        ]);
                                      }), 128))
                                    ]),
                                    createVNode("ul", { class: "gap-1 text-gray-600" }, [
                                      (openBlock(true), createBlock(Fragment, null, renderList(unref(currentManager).salaryCorrections, (corr) => {
                                        return openBlock(), createBlock("li", {
                                          key: corr.id,
                                          class: [
                                            "flex",
                                            corr.type === "\u041F\u0440\u0438\u0431\u0430\u0432\u043A\u0430" ? "text-green-500" : "text-red-500"
                                          ]
                                        }, [
                                          createVNode(_component_UiButton, {
                                            class: "h-5 w-5 px-0 mr-1",
                                            onClick: ($event) => deleteSalaryCorr(corr.id)
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode(" - ")
                                            ]),
                                            _: 2
                                          }, 1032, ["onClick"]),
                                          createVNode("span", null, toDisplayString(corr.type), 1),
                                          corr.description ? (openBlock(), createBlock("span", { key: 0 }, toDisplayString("(" + corr.description + ")"), 1)) : createCommentVNode("", true),
                                          createVNode("span", { class: "ml-auto" }, toDisplayString(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(corr.price) + "\u20BD"), 1)
                                        ], 2);
                                      }), 128))
                                    ]),
                                    createVNode(_component_UiSeparator, { class: "my-1" }),
                                    createVNode("ul", null, [
                                      (openBlock(true), createBlock(Fragment, null, renderList(unref(salaryInfo).slice(3), (item, i) => {
                                        return openBlock(), createBlock("li", {
                                          key: i,
                                          class: "flex items-center w-full"
                                        }, [
                                          createVNode("span", { class: "text-muted-foreground mr-auto" }, toDisplayString(item.label), 1),
                                          createVNode("span", null, toDisplayString(item.value), 1)
                                        ]);
                                      }), 128))
                                    ])
                                  ])
                                ])
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(_component_UiTabsContent, { value: "deals" }, {
                          default: withCtx(() => [
                            createVNode(_component_UiScrollArea, { class: "relative h-[calc(100vh-270px)] px-2" }, {
                              default: withCtx(() => {
                                var _a, _b;
                                return [
                                  ((_b = (_a = unref(currentManager)) == null ? void 0 : _a.dealsInfo) == null ? void 0 : _b.length) ? (openBlock(), createBlock(_component_UiTable, { key: 0 }, {
                                    default: withCtx(() => [
                                      createVNode(_component_UiTableCaption, null, {
                                        default: withCtx(() => [
                                          createTextVNode("\u0421\u043F\u0438\u0441\u043E\u043A \u0437\u0430\u043A\u0430\u0437\u043E\u0432 \u043C\u0435\u043D\u0435\u0434\u0436\u0435\u0440\u0430")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_UiTableHeader, null, {
                                        default: withCtx(() => [
                                          createVNode(_component_UiTableRow, { class: "bg-gray-100" }, {
                                            default: withCtx(() => [
                                              createVNode(_component_UiTableHead, { class: "text-left" }, {
                                                default: withCtx(() => [
                                                  createTextVNode(" \u0417\u0430\u043A\u0430\u0437 ")
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(_component_UiTableHead, { class: "text-center" }, {
                                                default: withCtx(() => [
                                                  createTextVNode("\u0414\u0430\u0442\u0430")
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(_component_UiTableHead, { class: "text-center" }, {
                                                default: withCtx(() => [
                                                  createTextVNode("\u0414\u043E\u043B\u044F")
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(_component_UiTableHead, { class: "text-center" }, {
                                                default: withCtx(() => [
                                                  createTextVNode("\u041E\u043F\u043B\u0430\u0447\u0435\u043D\u043E")
                                                ]),
                                                _: 1
                                              })
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_UiTableBody, null, {
                                        default: withCtx(() => [
                                          (openBlock(true), createBlock(Fragment, null, renderList(unref(currentManager).dealsInfo, (deal, i) => {
                                            return openBlock(), createBlock(_component_UiTableRow, {
                                              key: i,
                                              class: "text-center whitespace-nowrap cursor-pointer",
                                              onClick: async () => await getDeal(deal.id)
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(_component_UiTableCell, { class: "text-left text-wrap" }, {
                                                  default: withCtx(() => [
                                                    createTextVNode(toDisplayString(deal.title), 1)
                                                  ]),
                                                  _: 2
                                                }, 1024),
                                                createVNode(_component_UiTableCell, { class: "font-medium text-xs" }, {
                                                  default: withCtx(() => [
                                                    createTextVNode(toDisplayString(("dateFormat" in _ctx ? _ctx.dateFormat : unref(dateFormat))(deal.saleDate)), 1)
                                                  ]),
                                                  _: 2
                                                }, 1024),
                                                createVNode(_component_UiTableCell, { class: "font-medium flex flex-col" }, {
                                                  default: withCtx(() => [
                                                    createVNode("span", null, toDisplayString(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(deal.dealPrice) + "\u20BD"), 1),
                                                    createVNode("span", { class: "text-xs text-gray-500" }, toDisplayString(deal.dealerPart + "%"), 1)
                                                  ]),
                                                  _: 2
                                                }, 1024),
                                                createVNode(_component_UiTableCell, { class: "font-medium" }, {
                                                  default: withCtx(() => [
                                                    createTextVNode(toDisplayString(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(deal.paid) + "\u20BD"), 1)
                                                  ]),
                                                  _: 2
                                                }, 1024)
                                              ]),
                                              _: 2
                                            }, 1032, ["onClick"]);
                                          }), 128)),
                                          createVNode(_component_UiTableRow, { class: "text-center font-bold" }, {
                                            default: withCtx(() => [
                                              createVNode(_component_UiTableCell, { class: "text-left" }, {
                                                default: withCtx(() => [
                                                  createTextVNode(" \u0418\u0422\u041E\u0413\u041E(" + toDisplayString(unref(currentManager).dealsInfo.length) + ") ", 1)
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(_component_UiTableCell, null, {
                                                default: withCtx(() => [
                                                  createTextVNode(toDisplayString(unref(period)), 1)
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(_component_UiTableCell, null, {
                                                default: withCtx(() => [
                                                  createTextVNode(toDisplayString(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(
                                                    unref(currentManager).dealsInfo.reduce(
                                                      (a, b) => a + b.dealerPrice,
                                                      0
                                                    )
                                                  ) + "\u20BD"), 1)
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(_component_UiTableCell, { class: "text-center" }, {
                                                default: withCtx(() => [
                                                  createTextVNode(toDisplayString(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(
                                                    +unref(currentManager).dealsInfo.reduce((a, b) => a + b.paid, 0).toFixed(2)
                                                  ) + "\u20BD"), 1)
                                                ]),
                                                _: 1
                                              })
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  })) : createCommentVNode("", true)
                                ];
                              }),
                              _: 1
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(_component_UiTabsContent, { value: "dops" }, {
                          default: withCtx(() => [
                            createVNode(_component_UiScrollArea, { class: "relative h-[calc(100vh-270px)] px-2" }, {
                              default: withCtx(() => {
                                var _a, _b;
                                return [
                                  ((_b = (_a = unref(currentManager)) == null ? void 0 : _a.dopsInfo) == null ? void 0 : _b.length) ? (openBlock(), createBlock(_component_UiTable, { key: 0 }, {
                                    default: withCtx(() => [
                                      createVNode(_component_UiTableCaption, null, {
                                        default: withCtx(() => [
                                          createTextVNode("\u0421\u043F\u0438\u0441\u043E\u043A \u0434\u043E\u043F.\u043F\u0440\u043E\u0434\u0430\u0436 \u043C\u0435\u043D\u0435\u0434\u0436\u0435\u0440\u0430")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_UiTableHeader, null, {
                                        default: withCtx(() => [
                                          createVNode(_component_UiTableRow, { class: "bg-gray-100" }, {
                                            default: withCtx(() => [
                                              createVNode(_component_UiTableHead, { class: "text-left" }, {
                                                default: withCtx(() => [
                                                  createTextVNode(" \u0414\u043E\u043F ")
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(_component_UiTableHead, { class: "text-center" }, {
                                                default: withCtx(() => [
                                                  createTextVNode("\u0414\u0430\u0442\u0430")
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(_component_UiTableHead, { class: "text-center" }, {
                                                default: withCtx(() => [
                                                  createTextVNode("\u0421\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C")
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(_component_UiTableHead, { class: "text-center" }, {
                                                default: withCtx(() => [
                                                  createTextVNode("\u041E\u043F\u043B\u0430\u0447\u0435\u043D\u043E")
                                                ]),
                                                _: 1
                                              })
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_UiTableBody, null, {
                                        default: withCtx(() => [
                                          (openBlock(true), createBlock(Fragment, null, renderList(unref(currentManager).dopsInfo, (dop, i) => {
                                            return openBlock(), createBlock(_component_UiTableRow, {
                                              key: i,
                                              class: "whitespace-nowrap text-center cursor-pointer",
                                              onClick: async () => await getDeal(dop.dealId)
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(_component_UiTableCell, { class: "text-left flex flex-col" }, {
                                                  default: withCtx(() => [
                                                    createVNode("span", null, toDisplayString(dop.dealTitle), 1),
                                                    createVNode("span", { class: "text-xs text-gray-500" }, toDisplayString(dop.title), 1)
                                                  ]),
                                                  _: 2
                                                }, 1024),
                                                createVNode(_component_UiTableCell, { class: "font-medium text-xs" }, {
                                                  default: withCtx(() => [
                                                    createTextVNode(toDisplayString(("dateFormat" in _ctx ? _ctx.dateFormat : unref(dateFormat))(dop.saleDate)), 1)
                                                  ]),
                                                  _: 2
                                                }, 1024),
                                                createVNode(_component_UiTableCell, { class: "font-medium" }, {
                                                  default: withCtx(() => [
                                                    createTextVNode(toDisplayString(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(dop.dopPrice) + "\u20BD"), 1)
                                                  ]),
                                                  _: 2
                                                }, 1024),
                                                createVNode(_component_UiTableCell, { class: "font-medium" }, {
                                                  default: withCtx(() => [
                                                    createTextVNode(toDisplayString(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(dop.paid) + "\u20BD"), 1)
                                                  ]),
                                                  _: 2
                                                }, 1024)
                                              ]),
                                              _: 2
                                            }, 1032, ["onClick"]);
                                          }), 128)),
                                          createVNode(_component_UiTableRow, { class: "text-center font-bold" }, {
                                            default: withCtx(() => [
                                              createVNode(_component_UiTableCell, { class: "whitespace-nowrap text-left" }, {
                                                default: withCtx(() => [
                                                  createTextVNode(" \u0418\u0422\u041E\u0413\u041E(" + toDisplayString(unref(currentManager).dopsInfo.length) + ") ", 1)
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(_component_UiTableCell, null, {
                                                default: withCtx(() => [
                                                  createTextVNode(toDisplayString(unref(period)), 1)
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(_component_UiTableCell, null, {
                                                default: withCtx(() => [
                                                  createTextVNode(toDisplayString(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(
                                                    unref(currentManager).dopsInfo.reduce(
                                                      (a, b) => a + b.dopPrice,
                                                      0
                                                    )
                                                  ) + "\u20BD"), 1)
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(_component_UiTableCell, null, {
                                                default: withCtx(() => [
                                                  createTextVNode(toDisplayString(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(
                                                    +unref(currentManager).dopsInfo.reduce((a, b) => a + b.paid, 0).toFixed()
                                                  ) + "\u20BD"), 1)
                                                ]),
                                                _: 1
                                              })
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  })) : createCommentVNode("", true)
                                ];
                              }),
                              _: 1
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(_component_UiTabsContent, { value: "remainders" }, {
                          default: withCtx(() => [
                            createVNode(_component_UiScrollArea, { class: "relative h-[calc(100vh-270px)] px-2" }, {
                              default: withCtx(() => {
                                var _a, _b, _c, _d;
                                return [
                                  createVNode("div", { class: "flex flex-col gap-8" }, [
                                    ((_b = (_a = unref(currentManager)) == null ? void 0 : _a.dealsInfoPrevMounth) == null ? void 0 : _b.length) ? (openBlock(), createBlock(_component_UiTable, { key: 0 }, {
                                      default: withCtx(() => [
                                        createVNode(_component_UiTableCaption),
                                        createVNode(_component_UiTableHeader, null, {
                                          default: withCtx(() => [
                                            createVNode(_component_UiTableRow, { class: "bg-gray-100" }, {
                                              default: withCtx(() => [
                                                createVNode(_component_UiTableHead, { class: "text-left text-xl" }, {
                                                  default: withCtx(() => [
                                                    createTextVNode(" \u0417\u0430\u043A\u0430\u0437\u044B ")
                                                  ]),
                                                  _: 1
                                                }),
                                                createVNode(_component_UiTableHead, { class: "text-center" }, {
                                                  default: withCtx(() => [
                                                    createTextVNode("\u0414\u043E\u043B\u044F")
                                                  ]),
                                                  _: 1
                                                }),
                                                createVNode(_component_UiTableHead, { class: "text-center" }, {
                                                  default: withCtx(() => [
                                                    createTextVNode("\u041E\u043F\u043B\u0430\u0447\u0435\u043D\u043E")
                                                  ]),
                                                  _: 1
                                                }),
                                                createVNode(_component_UiTableHead, { class: "text-center" }, {
                                                  default: withCtx(() => [
                                                    createTextVNode("\u0412 \u0417\u041F")
                                                  ]),
                                                  _: 1
                                                })
                                              ]),
                                              _: 1
                                            })
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(_component_UiTableBody, null, {
                                          default: withCtx(() => [
                                            (openBlock(true), createBlock(Fragment, null, renderList(unref(currentManager).dealsInfoPrevMounth, (deal, i) => {
                                              return openBlock(), createBlock(_component_UiTableRow, {
                                                key: i,
                                                class: "text-center whitespace-nowrap cursor-pointer",
                                                onClick: async () => await getDeal(deal.id)
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode(_component_UiTableCell, { class: "text-left" }, {
                                                    default: withCtx(() => [
                                                      createTextVNode(toDisplayString(deal.title), 1)
                                                    ]),
                                                    _: 2
                                                  }, 1024),
                                                  createVNode(_component_UiTableCell, { class: "font-medium" }, {
                                                    default: withCtx(() => [
                                                      createVNode("div", { class: "flex flex-col" }, [
                                                        createVNode("span", null, toDisplayString(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(deal.dealerPrice) + "\u20BD"), 1),
                                                        createVNode("span", { class: "text-xs text-gray-500" }, [
                                                          createVNode("span", null, toDisplayString(deal.dealerPart) + "%", 1),
                                                          createVNode("span", null, " \u043E\u0442 " + toDisplayString(deal.dealPrice), 1)
                                                        ])
                                                      ])
                                                    ]),
                                                    _: 2
                                                  }, 1024),
                                                  createVNode(_component_UiTableCell, { class: "font-medium" }, {
                                                    default: withCtx(() => [
                                                      createTextVNode(toDisplayString(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(deal.paid) + "\u20BD"), 1)
                                                    ]),
                                                    _: 2
                                                  }, 1024),
                                                  createVNode(_component_UiTableCell, { class: "font-medium flex flex-col" }, {
                                                    default: withCtx(() => [
                                                      createVNode("span", { class: "text-green-600" }, toDisplayString("+" + ("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(+deal.toSalary.toFixed(2)) + "\u20BD"), 1),
                                                      createVNode("span", { class: "text-xs text-gray-500" }, toDisplayString((deal.bonusPercentage * 100).toFixed(2) + "%"), 1)
                                                    ]),
                                                    _: 2
                                                  }, 1024)
                                                ]),
                                                _: 2
                                              }, 1032, ["onClick"]);
                                            }), 128)),
                                            createVNode(_component_UiTableRow, { class: "text-center font-bold bg-zinc-100" }, {
                                              default: withCtx(() => [
                                                createVNode(_component_UiTableCell, { class: "text-left" }, {
                                                  default: withCtx(() => [
                                                    createVNode("span", null, "\u0418\u0422\u041E\u0413\u041E"),
                                                    createVNode("span", null, toDisplayString("(" + unref(currentManager).dealsInfoPrevMounth.length + ")"), 1)
                                                  ]),
                                                  _: 1
                                                }),
                                                createVNode(_component_UiTableCell, null, {
                                                  default: withCtx(() => [
                                                    createTextVNode(toDisplayString(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(
                                                      unref(currentManager).dealsInfoPrevMounth.reduce(
                                                        (a, b) => a + b.dealerPrice,
                                                        0
                                                      )
                                                    ) + "\u20BD"), 1)
                                                  ]),
                                                  _: 1
                                                }),
                                                createVNode(_component_UiTableCell, { class: "text-center" }, {
                                                  default: withCtx(() => [
                                                    createTextVNode(toDisplayString(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(
                                                      +unref(currentManager).dealsInfoPrevMounth.reduce((a, b) => a + b.paid, 0).toFixed(2)
                                                    ) + "\u20BD"), 1)
                                                  ]),
                                                  _: 1
                                                }),
                                                createVNode(_component_UiTableCell, { class: "text-center" }, {
                                                  default: withCtx(() => [
                                                    createVNode("span", { class: "text-green-600" }, toDisplayString("+" + ("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(
                                                      +unref(currentManager).dealsInfoPrevMounth.reduce((a, b) => a + b.toSalary, 0).toFixed(2)
                                                    ) + "\u20BD"), 1)
                                                  ]),
                                                  _: 1
                                                })
                                              ]),
                                              _: 1
                                            })
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    })) : createCommentVNode("", true),
                                    ((_d = (_c = unref(currentManager)) == null ? void 0 : _c.dopsInfoPrevMounth) == null ? void 0 : _d.length) ? (openBlock(), createBlock(_component_UiTable, { key: 1 }, {
                                      default: withCtx(() => [
                                        createVNode(_component_UiTableCaption),
                                        createVNode(_component_UiTableHeader, null, {
                                          default: withCtx(() => [
                                            createVNode(_component_UiTableRow, { class: "bg-gray-100" }, {
                                              default: withCtx(() => [
                                                createVNode(_component_UiTableHead, { class: "text-left text-xl" }, {
                                                  default: withCtx(() => [
                                                    createTextVNode(" \u0414\u043E\u043F\u044B ")
                                                  ]),
                                                  _: 1
                                                }),
                                                createVNode(_component_UiTableHead, { class: "text-center" }, {
                                                  default: withCtx(() => [
                                                    createTextVNode("\u0421\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C")
                                                  ]),
                                                  _: 1
                                                }),
                                                createVNode(_component_UiTableHead, { class: "text-center" }, {
                                                  default: withCtx(() => [
                                                    createTextVNode("\u041E\u043F\u043B\u0430\u0447\u0435\u043D\u043E")
                                                  ]),
                                                  _: 1
                                                }),
                                                createVNode(_component_UiTableHead, { class: "text-center" }, {
                                                  default: withCtx(() => [
                                                    createTextVNode("\u0412 \u0417\u041F")
                                                  ]),
                                                  _: 1
                                                })
                                              ]),
                                              _: 1
                                            })
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(_component_UiTableBody, null, {
                                          default: withCtx(() => [
                                            (openBlock(true), createBlock(Fragment, null, renderList(unref(currentManager).dopsInfoPrevMounth, (dop, i) => {
                                              return openBlock(), createBlock(_component_UiTableRow, {
                                                key: i,
                                                class: "whitespace-nowrap text-center cursor-pointer",
                                                onClick: async () => await getDeal(dop.dealId)
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode(_component_UiTableCell, { class: "text-left flex flex-col" }, {
                                                    default: withCtx(() => [
                                                      createVNode("span", null, toDisplayString(dop.dealTitle), 1),
                                                      createVNode("span", { class: "text-xs text-gray-500" }, toDisplayString(dop.title), 1)
                                                    ]),
                                                    _: 2
                                                  }, 1024),
                                                  createVNode(_component_UiTableCell, { class: "font-medium" }, {
                                                    default: withCtx(() => [
                                                      createTextVNode(toDisplayString(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(dop.dopPrice) + "\u20BD"), 1)
                                                    ]),
                                                    _: 2
                                                  }, 1024),
                                                  createVNode(_component_UiTableCell, { class: "font-medium" }, {
                                                    default: withCtx(() => [
                                                      createTextVNode(toDisplayString(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(dop.paid) + "\u20BD"), 1)
                                                    ]),
                                                    _: 2
                                                  }, 1024),
                                                  createVNode(_component_UiTableCell, { class: "font-medium flex flex-col" }, {
                                                    default: withCtx(() => [
                                                      createVNode("span", { class: "text-green-600" }, toDisplayString("+" + ("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(+dop.toSalary.toFixed(2)) + "\u20BD"), 1),
                                                      createVNode("span", { class: "text-xs text-gray-500" }, toDisplayString((dop.bonusPercentage * 100).toFixed(2) + "%"), 1)
                                                    ]),
                                                    _: 2
                                                  }, 1024)
                                                ]),
                                                _: 2
                                              }, 1032, ["onClick"]);
                                            }), 128)),
                                            createVNode(_component_UiTableRow, { class: "text-center font-bold bg-zinc-100" }, {
                                              default: withCtx(() => [
                                                createVNode(_component_UiTableCell, { class: "whitespace-nowrap text-left" }, {
                                                  default: withCtx(() => [
                                                    createTextVNode(" \u0418\u0422\u041E\u0413\u041E" + toDisplayString("(" + unref(currentManager).dopsInfoPrevMounth.length + ")"), 1)
                                                  ]),
                                                  _: 1
                                                }),
                                                createVNode(_component_UiTableCell, null, {
                                                  default: withCtx(() => [
                                                    createTextVNode(toDisplayString(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(
                                                      unref(currentManager).dopsInfoPrevMounth.reduce(
                                                        (a, b) => a + b.dopPrice,
                                                        0
                                                      )
                                                    ) + "\u20BD"), 1)
                                                  ]),
                                                  _: 1
                                                }),
                                                createVNode(_component_UiTableCell, null, {
                                                  default: withCtx(() => [
                                                    createTextVNode(toDisplayString(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(
                                                      +unref(currentManager).dopsInfoPrevMounth.reduce((a, b) => a + b.paid, 0).toFixed()
                                                    ) + "\u20BD"), 1)
                                                  ]),
                                                  _: 1
                                                }),
                                                createVNode(_component_UiTableCell, { class: "text-center" }, {
                                                  default: withCtx(() => [
                                                    createVNode("span", { class: "text-green-600" }, toDisplayString("+" + ("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(
                                                      +unref(currentManager).dopsInfoPrevMounth.reduce((a, b) => a + b.toSalary, 0).toFixed(2)
                                                    ) + "\u20BD"), 1)
                                                  ]),
                                                  _: 1
                                                })
                                              ]),
                                              _: 1
                                            })
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    })) : createCommentVNode("", true)
                                  ])
                                ];
                              }),
                              _: 1
                            })
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UiCardFooter, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UiCardHeader, { class: "bg-gray-100 mb-2 p-3" }, {
                default: withCtx(() => [
                  createVNode(_component_UiCardTitle, null, {
                    default: withCtx(() => {
                      var _a;
                      return [
                        createTextVNode(toDisplayString((_a = unref(currentManager)) == null ? void 0 : _a.fullName), 1)
                      ];
                    }),
                    _: 1
                  }),
                  createVNode(_component_UiCardDescription, null, {
                    default: withCtx(() => {
                      var _a;
                      return [
                        createVNode("div", { class: "flex w-full justify-between items-center" }, [
                          createVNode("span", null, toDisplayString((_a = unref(currentManager)) == null ? void 0 : _a.workSpace), 1),
                          createVNode("div", { class: "flex items-center gap-2" }, [
                            createVNode(_component_UiLabel, null, {
                              default: withCtx(() => [
                                createTextVNode("\u0421\u0442\u0430\u0436\u0435\u0440")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_UiSwitch, {
                              checked: unref(currentManager).isIntern,
                              "onUpdate:checked": [($event) => unref(currentManager).isIntern = $event, handleSwitchChange]
                            }, null, 8, ["checked", "onUpdate:checked"])
                          ])
                        ])
                      ];
                    }),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(_component_UiCardContent, { class: "p-2" }, {
                default: withCtx(() => [
                  createVNode(_component_UiTabs, { "default-value": "info" }, {
                    default: withCtx(() => [
                      createVNode(_component_UiTabsList, null, {
                        default: withCtx(() => [
                          createVNode(_component_UiTabsTrigger, { value: "info" }, {
                            default: withCtx(() => [
                              createTextVNode(" \u0418\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F ")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_UiTabsTrigger, { value: "deals" }, {
                            default: withCtx(() => [
                              createTextVNode(" \u0412\u044B\u0432\u0435\u0441\u043A\u0438 ")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_UiTabsTrigger, { value: "dops" }, {
                            default: withCtx(() => [
                              createTextVNode(" \u0414\u043E\u043F\u044B ")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_UiTabsTrigger, { value: "remainders" }, {
                            default: withCtx(() => [
                              createTextVNode(" \u041E\u0441\u0442\u0430\u0442\u043A\u0438 ")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(_component_UiTabsContent, {
                        value: "info",
                        class: ""
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_UiScrollArea, { class: "h-[calc(100vh-250px)] px-5 pb-5" }, {
                            default: withCtx(() => [
                              createVNode("div", { class: "flex flex-col gap-5" }, [
                                createVNode("div", null, [
                                  createVNode("div", { class: "font-semibold" }, "\u041E\u0441\u043D\u043E\u0432\u043D\u0430\u044F \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F"),
                                  createVNode("ul", { class: "gap-1 text-gray-600" }, [
                                    createVNode("div", { class: "flex items-center border-b-1" }, [
                                      (openBlock(), createBlock(_component_MyManagersSetPlanModal, {
                                        key: unref(currentManager).id,
                                        plan: unref(currentManager).plan,
                                        period: unref(period),
                                        "manager-id": unref(currentManager).id,
                                        manager: unref(currentManager).fullName,
                                        onIsPlanSet: (np) => handlePlanSet(np, unref(currentManager).id)
                                      }, null, 8, ["plan", "period", "manager-id", "manager", "onIsPlanSet"])),
                                      createVNode("span", { class: "ml-2" }, "\u041F\u043B\u0430\u043D"),
                                      createVNode("span", { class: "ml-auto" }, toDisplayString(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(unref(currentManager).plan) + "\u20BD"), 1)
                                    ]),
                                    createVNode("li", { class: "flex items-center border-b-1" }, [
                                      createVNode("span", { class: "text-muted-foreground" }, " \u041E\u0441\u0442\u0430\u0442\u043E\u043A \u0434\u043E \u043F\u043B\u0430\u043D\u0430 "),
                                      createVNode("span", { class: "ml-auto" }, toDisplayString(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(
                                        unref(currentManager).plan - unref(currentManager).totalSales
                                      ) + "\u20BD"), 1)
                                    ]),
                                    (openBlock(true), createBlock(Fragment, null, renderList(unref(mainInfo), (item, i) => {
                                      return openBlock(), createBlock("li", {
                                        key: i,
                                        class: "flex items-center border-b-1"
                                      }, [
                                        createVNode("span", { class: "text-muted-foreground" }, toDisplayString(item.label), 1),
                                        createVNode("span", { class: "ml-auto" }, toDisplayString(item.value), 1)
                                      ]);
                                    }), 128))
                                  ])
                                ]),
                                createVNode("div", null, [
                                  createVNode("div", { class: "font-semibold" }, "\u041F\u043E\u043A\u0430\u0437\u0430\u0442\u0435\u043B\u0438"),
                                  createVNode("ul", { class: "gap-1 text-gray-600" }, [
                                    (openBlock(true), createBlock(Fragment, null, renderList(unref(characteristicsInfo), (item, i) => {
                                      return openBlock(), createBlock("li", {
                                        key: i,
                                        class: "flex items-center justify-between border-b-1"
                                      }, [
                                        createVNode("span", { class: "text-muted-foreground" }, toDisplayString(item.label), 1),
                                        createVNode("span", null, toDisplayString(item.value), 1)
                                      ]);
                                    }), 128))
                                  ])
                                ]),
                                createVNode("div", null, [
                                  createVNode("div", { class: "flex justify-between items-center mb-2" }, [
                                    createVNode("div", { class: "font-semibold" }, "\u0417\u0430\u0440\u043F\u043B\u0430\u0442\u0430"),
                                    createVNode(_component_MySalariesCorrectCreateModal, {
                                      "user-id": unref(currentManager).id,
                                      onCorrectionCreated: (corr) => {
                                        getDatas();
                                      }
                                    }, null, 8, ["user-id", "onCorrectionCreated"])
                                  ]),
                                  createVNode("ul", { class: "gap-1 text-gray-600" }, [
                                    (openBlock(true), createBlock(Fragment, null, renderList(unref(salaryInfo).slice(0, 3), (item, i) => {
                                      return openBlock(), createBlock("li", {
                                        key: i,
                                        class: "flex items-center w-full"
                                      }, [
                                        createVNode("span", { class: "text-muted-foreground mr-auto" }, toDisplayString(item.label), 1),
                                        createVNode("span", null, toDisplayString(item.value), 1)
                                      ]);
                                    }), 128))
                                  ]),
                                  createVNode(_component_UiSeparator, { class: "mb-2" }),
                                  createVNode("ul", { class: "gap-1 text-green-600/80" }, [
                                    (openBlock(true), createBlock(Fragment, null, renderList(unref(currentManager).salaryPays, (pay) => {
                                      return openBlock(), createBlock("li", {
                                        key: pay.id,
                                        class: ["flex font-semibold"]
                                      }, [
                                        createVNode(_component_UiButton, {
                                          class: "h-5 w-5 px-0 mr-1",
                                          onClick: ($event) => deleteSalaryItem(pay.id)
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(" - ")
                                          ]),
                                          _: 2
                                        }, 1032, ["onClick"]),
                                        createVNode("span", null, " \u0412\u044B\u043F\u043B\u0430\u0442\u0430 "),
                                        createVNode("span", { class: "ml-auto" }, toDisplayString(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(pay.price) + "\u20BD"), 1)
                                      ]);
                                    }), 128))
                                  ]),
                                  createVNode("ul", { class: "gap-1 text-gray-600" }, [
                                    (openBlock(true), createBlock(Fragment, null, renderList(unref(currentManager).salaryCorrections, (corr) => {
                                      return openBlock(), createBlock("li", {
                                        key: corr.id,
                                        class: [
                                          "flex",
                                          corr.type === "\u041F\u0440\u0438\u0431\u0430\u0432\u043A\u0430" ? "text-green-500" : "text-red-500"
                                        ]
                                      }, [
                                        createVNode(_component_UiButton, {
                                          class: "h-5 w-5 px-0 mr-1",
                                          onClick: ($event) => deleteSalaryCorr(corr.id)
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(" - ")
                                          ]),
                                          _: 2
                                        }, 1032, ["onClick"]),
                                        createVNode("span", null, toDisplayString(corr.type), 1),
                                        corr.description ? (openBlock(), createBlock("span", { key: 0 }, toDisplayString("(" + corr.description + ")"), 1)) : createCommentVNode("", true),
                                        createVNode("span", { class: "ml-auto" }, toDisplayString(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(corr.price) + "\u20BD"), 1)
                                      ], 2);
                                    }), 128))
                                  ]),
                                  createVNode(_component_UiSeparator, { class: "my-1" }),
                                  createVNode("ul", null, [
                                    (openBlock(true), createBlock(Fragment, null, renderList(unref(salaryInfo).slice(3), (item, i) => {
                                      return openBlock(), createBlock("li", {
                                        key: i,
                                        class: "flex items-center w-full"
                                      }, [
                                        createVNode("span", { class: "text-muted-foreground mr-auto" }, toDisplayString(item.label), 1),
                                        createVNode("span", null, toDisplayString(item.value), 1)
                                      ]);
                                    }), 128))
                                  ])
                                ])
                              ])
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(_component_UiTabsContent, { value: "deals" }, {
                        default: withCtx(() => [
                          createVNode(_component_UiScrollArea, { class: "relative h-[calc(100vh-270px)] px-2" }, {
                            default: withCtx(() => {
                              var _a, _b;
                              return [
                                ((_b = (_a = unref(currentManager)) == null ? void 0 : _a.dealsInfo) == null ? void 0 : _b.length) ? (openBlock(), createBlock(_component_UiTable, { key: 0 }, {
                                  default: withCtx(() => [
                                    createVNode(_component_UiTableCaption, null, {
                                      default: withCtx(() => [
                                        createTextVNode("\u0421\u043F\u0438\u0441\u043E\u043A \u0437\u0430\u043A\u0430\u0437\u043E\u0432 \u043C\u0435\u043D\u0435\u0434\u0436\u0435\u0440\u0430")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_UiTableHeader, null, {
                                      default: withCtx(() => [
                                        createVNode(_component_UiTableRow, { class: "bg-gray-100" }, {
                                          default: withCtx(() => [
                                            createVNode(_component_UiTableHead, { class: "text-left" }, {
                                              default: withCtx(() => [
                                                createTextVNode(" \u0417\u0430\u043A\u0430\u0437 ")
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(_component_UiTableHead, { class: "text-center" }, {
                                              default: withCtx(() => [
                                                createTextVNode("\u0414\u0430\u0442\u0430")
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(_component_UiTableHead, { class: "text-center" }, {
                                              default: withCtx(() => [
                                                createTextVNode("\u0414\u043E\u043B\u044F")
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(_component_UiTableHead, { class: "text-center" }, {
                                              default: withCtx(() => [
                                                createTextVNode("\u041E\u043F\u043B\u0430\u0447\u0435\u043D\u043E")
                                              ]),
                                              _: 1
                                            })
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_UiTableBody, null, {
                                      default: withCtx(() => [
                                        (openBlock(true), createBlock(Fragment, null, renderList(unref(currentManager).dealsInfo, (deal, i) => {
                                          return openBlock(), createBlock(_component_UiTableRow, {
                                            key: i,
                                            class: "text-center whitespace-nowrap cursor-pointer",
                                            onClick: async () => await getDeal(deal.id)
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(_component_UiTableCell, { class: "text-left text-wrap" }, {
                                                default: withCtx(() => [
                                                  createTextVNode(toDisplayString(deal.title), 1)
                                                ]),
                                                _: 2
                                              }, 1024),
                                              createVNode(_component_UiTableCell, { class: "font-medium text-xs" }, {
                                                default: withCtx(() => [
                                                  createTextVNode(toDisplayString(("dateFormat" in _ctx ? _ctx.dateFormat : unref(dateFormat))(deal.saleDate)), 1)
                                                ]),
                                                _: 2
                                              }, 1024),
                                              createVNode(_component_UiTableCell, { class: "font-medium flex flex-col" }, {
                                                default: withCtx(() => [
                                                  createVNode("span", null, toDisplayString(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(deal.dealPrice) + "\u20BD"), 1),
                                                  createVNode("span", { class: "text-xs text-gray-500" }, toDisplayString(deal.dealerPart + "%"), 1)
                                                ]),
                                                _: 2
                                              }, 1024),
                                              createVNode(_component_UiTableCell, { class: "font-medium" }, {
                                                default: withCtx(() => [
                                                  createTextVNode(toDisplayString(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(deal.paid) + "\u20BD"), 1)
                                                ]),
                                                _: 2
                                              }, 1024)
                                            ]),
                                            _: 2
                                          }, 1032, ["onClick"]);
                                        }), 128)),
                                        createVNode(_component_UiTableRow, { class: "text-center font-bold" }, {
                                          default: withCtx(() => [
                                            createVNode(_component_UiTableCell, { class: "text-left" }, {
                                              default: withCtx(() => [
                                                createTextVNode(" \u0418\u0422\u041E\u0413\u041E(" + toDisplayString(unref(currentManager).dealsInfo.length) + ") ", 1)
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(_component_UiTableCell, null, {
                                              default: withCtx(() => [
                                                createTextVNode(toDisplayString(unref(period)), 1)
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(_component_UiTableCell, null, {
                                              default: withCtx(() => [
                                                createTextVNode(toDisplayString(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(
                                                  unref(currentManager).dealsInfo.reduce(
                                                    (a, b) => a + b.dealerPrice,
                                                    0
                                                  )
                                                ) + "\u20BD"), 1)
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(_component_UiTableCell, { class: "text-center" }, {
                                              default: withCtx(() => [
                                                createTextVNode(toDisplayString(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(
                                                  +unref(currentManager).dealsInfo.reduce((a, b) => a + b.paid, 0).toFixed(2)
                                                ) + "\u20BD"), 1)
                                              ]),
                                              _: 1
                                            })
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                })) : createCommentVNode("", true)
                              ];
                            }),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(_component_UiTabsContent, { value: "dops" }, {
                        default: withCtx(() => [
                          createVNode(_component_UiScrollArea, { class: "relative h-[calc(100vh-270px)] px-2" }, {
                            default: withCtx(() => {
                              var _a, _b;
                              return [
                                ((_b = (_a = unref(currentManager)) == null ? void 0 : _a.dopsInfo) == null ? void 0 : _b.length) ? (openBlock(), createBlock(_component_UiTable, { key: 0 }, {
                                  default: withCtx(() => [
                                    createVNode(_component_UiTableCaption, null, {
                                      default: withCtx(() => [
                                        createTextVNode("\u0421\u043F\u0438\u0441\u043E\u043A \u0434\u043E\u043F.\u043F\u0440\u043E\u0434\u0430\u0436 \u043C\u0435\u043D\u0435\u0434\u0436\u0435\u0440\u0430")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_UiTableHeader, null, {
                                      default: withCtx(() => [
                                        createVNode(_component_UiTableRow, { class: "bg-gray-100" }, {
                                          default: withCtx(() => [
                                            createVNode(_component_UiTableHead, { class: "text-left" }, {
                                              default: withCtx(() => [
                                                createTextVNode(" \u0414\u043E\u043F ")
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(_component_UiTableHead, { class: "text-center" }, {
                                              default: withCtx(() => [
                                                createTextVNode("\u0414\u0430\u0442\u0430")
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(_component_UiTableHead, { class: "text-center" }, {
                                              default: withCtx(() => [
                                                createTextVNode("\u0421\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C")
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(_component_UiTableHead, { class: "text-center" }, {
                                              default: withCtx(() => [
                                                createTextVNode("\u041E\u043F\u043B\u0430\u0447\u0435\u043D\u043E")
                                              ]),
                                              _: 1
                                            })
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_UiTableBody, null, {
                                      default: withCtx(() => [
                                        (openBlock(true), createBlock(Fragment, null, renderList(unref(currentManager).dopsInfo, (dop, i) => {
                                          return openBlock(), createBlock(_component_UiTableRow, {
                                            key: i,
                                            class: "whitespace-nowrap text-center cursor-pointer",
                                            onClick: async () => await getDeal(dop.dealId)
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(_component_UiTableCell, { class: "text-left flex flex-col" }, {
                                                default: withCtx(() => [
                                                  createVNode("span", null, toDisplayString(dop.dealTitle), 1),
                                                  createVNode("span", { class: "text-xs text-gray-500" }, toDisplayString(dop.title), 1)
                                                ]),
                                                _: 2
                                              }, 1024),
                                              createVNode(_component_UiTableCell, { class: "font-medium text-xs" }, {
                                                default: withCtx(() => [
                                                  createTextVNode(toDisplayString(("dateFormat" in _ctx ? _ctx.dateFormat : unref(dateFormat))(dop.saleDate)), 1)
                                                ]),
                                                _: 2
                                              }, 1024),
                                              createVNode(_component_UiTableCell, { class: "font-medium" }, {
                                                default: withCtx(() => [
                                                  createTextVNode(toDisplayString(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(dop.dopPrice) + "\u20BD"), 1)
                                                ]),
                                                _: 2
                                              }, 1024),
                                              createVNode(_component_UiTableCell, { class: "font-medium" }, {
                                                default: withCtx(() => [
                                                  createTextVNode(toDisplayString(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(dop.paid) + "\u20BD"), 1)
                                                ]),
                                                _: 2
                                              }, 1024)
                                            ]),
                                            _: 2
                                          }, 1032, ["onClick"]);
                                        }), 128)),
                                        createVNode(_component_UiTableRow, { class: "text-center font-bold" }, {
                                          default: withCtx(() => [
                                            createVNode(_component_UiTableCell, { class: "whitespace-nowrap text-left" }, {
                                              default: withCtx(() => [
                                                createTextVNode(" \u0418\u0422\u041E\u0413\u041E(" + toDisplayString(unref(currentManager).dopsInfo.length) + ") ", 1)
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(_component_UiTableCell, null, {
                                              default: withCtx(() => [
                                                createTextVNode(toDisplayString(unref(period)), 1)
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(_component_UiTableCell, null, {
                                              default: withCtx(() => [
                                                createTextVNode(toDisplayString(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(
                                                  unref(currentManager).dopsInfo.reduce(
                                                    (a, b) => a + b.dopPrice,
                                                    0
                                                  )
                                                ) + "\u20BD"), 1)
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(_component_UiTableCell, null, {
                                              default: withCtx(() => [
                                                createTextVNode(toDisplayString(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(
                                                  +unref(currentManager).dopsInfo.reduce((a, b) => a + b.paid, 0).toFixed()
                                                ) + "\u20BD"), 1)
                                              ]),
                                              _: 1
                                            })
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                })) : createCommentVNode("", true)
                              ];
                            }),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(_component_UiTabsContent, { value: "remainders" }, {
                        default: withCtx(() => [
                          createVNode(_component_UiScrollArea, { class: "relative h-[calc(100vh-270px)] px-2" }, {
                            default: withCtx(() => {
                              var _a, _b, _c, _d;
                              return [
                                createVNode("div", { class: "flex flex-col gap-8" }, [
                                  ((_b = (_a = unref(currentManager)) == null ? void 0 : _a.dealsInfoPrevMounth) == null ? void 0 : _b.length) ? (openBlock(), createBlock(_component_UiTable, { key: 0 }, {
                                    default: withCtx(() => [
                                      createVNode(_component_UiTableCaption),
                                      createVNode(_component_UiTableHeader, null, {
                                        default: withCtx(() => [
                                          createVNode(_component_UiTableRow, { class: "bg-gray-100" }, {
                                            default: withCtx(() => [
                                              createVNode(_component_UiTableHead, { class: "text-left text-xl" }, {
                                                default: withCtx(() => [
                                                  createTextVNode(" \u0417\u0430\u043A\u0430\u0437\u044B ")
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(_component_UiTableHead, { class: "text-center" }, {
                                                default: withCtx(() => [
                                                  createTextVNode("\u0414\u043E\u043B\u044F")
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(_component_UiTableHead, { class: "text-center" }, {
                                                default: withCtx(() => [
                                                  createTextVNode("\u041E\u043F\u043B\u0430\u0447\u0435\u043D\u043E")
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(_component_UiTableHead, { class: "text-center" }, {
                                                default: withCtx(() => [
                                                  createTextVNode("\u0412 \u0417\u041F")
                                                ]),
                                                _: 1
                                              })
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_UiTableBody, null, {
                                        default: withCtx(() => [
                                          (openBlock(true), createBlock(Fragment, null, renderList(unref(currentManager).dealsInfoPrevMounth, (deal, i) => {
                                            return openBlock(), createBlock(_component_UiTableRow, {
                                              key: i,
                                              class: "text-center whitespace-nowrap cursor-pointer",
                                              onClick: async () => await getDeal(deal.id)
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(_component_UiTableCell, { class: "text-left" }, {
                                                  default: withCtx(() => [
                                                    createTextVNode(toDisplayString(deal.title), 1)
                                                  ]),
                                                  _: 2
                                                }, 1024),
                                                createVNode(_component_UiTableCell, { class: "font-medium" }, {
                                                  default: withCtx(() => [
                                                    createVNode("div", { class: "flex flex-col" }, [
                                                      createVNode("span", null, toDisplayString(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(deal.dealerPrice) + "\u20BD"), 1),
                                                      createVNode("span", { class: "text-xs text-gray-500" }, [
                                                        createVNode("span", null, toDisplayString(deal.dealerPart) + "%", 1),
                                                        createVNode("span", null, " \u043E\u0442 " + toDisplayString(deal.dealPrice), 1)
                                                      ])
                                                    ])
                                                  ]),
                                                  _: 2
                                                }, 1024),
                                                createVNode(_component_UiTableCell, { class: "font-medium" }, {
                                                  default: withCtx(() => [
                                                    createTextVNode(toDisplayString(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(deal.paid) + "\u20BD"), 1)
                                                  ]),
                                                  _: 2
                                                }, 1024),
                                                createVNode(_component_UiTableCell, { class: "font-medium flex flex-col" }, {
                                                  default: withCtx(() => [
                                                    createVNode("span", { class: "text-green-600" }, toDisplayString("+" + ("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(+deal.toSalary.toFixed(2)) + "\u20BD"), 1),
                                                    createVNode("span", { class: "text-xs text-gray-500" }, toDisplayString((deal.bonusPercentage * 100).toFixed(2) + "%"), 1)
                                                  ]),
                                                  _: 2
                                                }, 1024)
                                              ]),
                                              _: 2
                                            }, 1032, ["onClick"]);
                                          }), 128)),
                                          createVNode(_component_UiTableRow, { class: "text-center font-bold bg-zinc-100" }, {
                                            default: withCtx(() => [
                                              createVNode(_component_UiTableCell, { class: "text-left" }, {
                                                default: withCtx(() => [
                                                  createVNode("span", null, "\u0418\u0422\u041E\u0413\u041E"),
                                                  createVNode("span", null, toDisplayString("(" + unref(currentManager).dealsInfoPrevMounth.length + ")"), 1)
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(_component_UiTableCell, null, {
                                                default: withCtx(() => [
                                                  createTextVNode(toDisplayString(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(
                                                    unref(currentManager).dealsInfoPrevMounth.reduce(
                                                      (a, b) => a + b.dealerPrice,
                                                      0
                                                    )
                                                  ) + "\u20BD"), 1)
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(_component_UiTableCell, { class: "text-center" }, {
                                                default: withCtx(() => [
                                                  createTextVNode(toDisplayString(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(
                                                    +unref(currentManager).dealsInfoPrevMounth.reduce((a, b) => a + b.paid, 0).toFixed(2)
                                                  ) + "\u20BD"), 1)
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(_component_UiTableCell, { class: "text-center" }, {
                                                default: withCtx(() => [
                                                  createVNode("span", { class: "text-green-600" }, toDisplayString("+" + ("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(
                                                    +unref(currentManager).dealsInfoPrevMounth.reduce((a, b) => a + b.toSalary, 0).toFixed(2)
                                                  ) + "\u20BD"), 1)
                                                ]),
                                                _: 1
                                              })
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  })) : createCommentVNode("", true),
                                  ((_d = (_c = unref(currentManager)) == null ? void 0 : _c.dopsInfoPrevMounth) == null ? void 0 : _d.length) ? (openBlock(), createBlock(_component_UiTable, { key: 1 }, {
                                    default: withCtx(() => [
                                      createVNode(_component_UiTableCaption),
                                      createVNode(_component_UiTableHeader, null, {
                                        default: withCtx(() => [
                                          createVNode(_component_UiTableRow, { class: "bg-gray-100" }, {
                                            default: withCtx(() => [
                                              createVNode(_component_UiTableHead, { class: "text-left text-xl" }, {
                                                default: withCtx(() => [
                                                  createTextVNode(" \u0414\u043E\u043F\u044B ")
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(_component_UiTableHead, { class: "text-center" }, {
                                                default: withCtx(() => [
                                                  createTextVNode("\u0421\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C")
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(_component_UiTableHead, { class: "text-center" }, {
                                                default: withCtx(() => [
                                                  createTextVNode("\u041E\u043F\u043B\u0430\u0447\u0435\u043D\u043E")
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(_component_UiTableHead, { class: "text-center" }, {
                                                default: withCtx(() => [
                                                  createTextVNode("\u0412 \u0417\u041F")
                                                ]),
                                                _: 1
                                              })
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_UiTableBody, null, {
                                        default: withCtx(() => [
                                          (openBlock(true), createBlock(Fragment, null, renderList(unref(currentManager).dopsInfoPrevMounth, (dop, i) => {
                                            return openBlock(), createBlock(_component_UiTableRow, {
                                              key: i,
                                              class: "whitespace-nowrap text-center cursor-pointer",
                                              onClick: async () => await getDeal(dop.dealId)
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(_component_UiTableCell, { class: "text-left flex flex-col" }, {
                                                  default: withCtx(() => [
                                                    createVNode("span", null, toDisplayString(dop.dealTitle), 1),
                                                    createVNode("span", { class: "text-xs text-gray-500" }, toDisplayString(dop.title), 1)
                                                  ]),
                                                  _: 2
                                                }, 1024),
                                                createVNode(_component_UiTableCell, { class: "font-medium" }, {
                                                  default: withCtx(() => [
                                                    createTextVNode(toDisplayString(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(dop.dopPrice) + "\u20BD"), 1)
                                                  ]),
                                                  _: 2
                                                }, 1024),
                                                createVNode(_component_UiTableCell, { class: "font-medium" }, {
                                                  default: withCtx(() => [
                                                    createTextVNode(toDisplayString(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(dop.paid) + "\u20BD"), 1)
                                                  ]),
                                                  _: 2
                                                }, 1024),
                                                createVNode(_component_UiTableCell, { class: "font-medium flex flex-col" }, {
                                                  default: withCtx(() => [
                                                    createVNode("span", { class: "text-green-600" }, toDisplayString("+" + ("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(+dop.toSalary.toFixed(2)) + "\u20BD"), 1),
                                                    createVNode("span", { class: "text-xs text-gray-500" }, toDisplayString((dop.bonusPercentage * 100).toFixed(2) + "%"), 1)
                                                  ]),
                                                  _: 2
                                                }, 1024)
                                              ]),
                                              _: 2
                                            }, 1032, ["onClick"]);
                                          }), 128)),
                                          createVNode(_component_UiTableRow, { class: "text-center font-bold bg-zinc-100" }, {
                                            default: withCtx(() => [
                                              createVNode(_component_UiTableCell, { class: "whitespace-nowrap text-left" }, {
                                                default: withCtx(() => [
                                                  createTextVNode(" \u0418\u0422\u041E\u0413\u041E" + toDisplayString("(" + unref(currentManager).dopsInfoPrevMounth.length + ")"), 1)
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(_component_UiTableCell, null, {
                                                default: withCtx(() => [
                                                  createTextVNode(toDisplayString(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(
                                                    unref(currentManager).dopsInfoPrevMounth.reduce(
                                                      (a, b) => a + b.dopPrice,
                                                      0
                                                    )
                                                  ) + "\u20BD"), 1)
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(_component_UiTableCell, null, {
                                                default: withCtx(() => [
                                                  createTextVNode(toDisplayString(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(
                                                    +unref(currentManager).dopsInfoPrevMounth.reduce((a, b) => a + b.paid, 0).toFixed()
                                                  ) + "\u20BD"), 1)
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(_component_UiTableCell, { class: "text-center" }, {
                                                default: withCtx(() => [
                                                  createVNode("span", { class: "text-green-600" }, toDisplayString("+" + ("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(
                                                    +unref(currentManager).dopsInfoPrevMounth.reduce((a, b) => a + b.toSalary, 0).toFixed(2)
                                                  ) + "\u20BD"), 1)
                                                ]),
                                                _: 1
                                              })
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  })) : createCommentVNode("", true)
                                ])
                              ];
                            }),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(_component_UiCardFooter)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/comercial/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-DB5pzPah.mjs.map
