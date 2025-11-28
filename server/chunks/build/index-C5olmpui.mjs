import { _ as _sfc_main$1 } from './Sidebar-ClYzRSuC.mjs';
import { _ as _sfc_main$2 } from './Input-DoHPrX2-.mjs';
import { _ as _sfc_main$2$1, a as _sfc_main$3, b as _sfc_main$1$1 } from './TabsList-C3eBcFGa.mjs';
import { _ as _sfc_main$4 } from './Card-D2-UPrX8.mjs';
import { _ as _sfc_main$1$2, a as _sfc_main$5 } from './CardTitle-Dyaq6zaM.mjs';
import { _ as _sfc_main$8 } from './CardDescription-CwDlX6V_.mjs';
import { _ as _sfc_main$6 } from './CardContent-5uJgHkPl.mjs';
import { _ as _sfc_main$a } from './CardFooter-BUlih3MF.mjs';
import { _ as _sfc_main$7 } from './Separator-DmvFl46f.mjs';
import { _ as _sfc_main$5$1, a as _sfc_main$9, b as _sfc_main$2$2, c as _sfc_main$1$3, d as _sfc_main$4$1, e as _sfc_main$3$1 } from './TableHeader-CsCuT7pu.mjs';
import { _ as _sfc_main$3$2, a as _sfc_main$2$3, b as _sfc_main$1$4, c as _sfc_main$d } from './CustomCallsChartTooltip-CnYzi0KL.mjs';
import { _ as _sfc_main$b } from './ScrollArea-Kzo2fjeX.mjs';
import { _ as _sfc_main$c } from './LineChart-C42qCZot.mjs';
import { u as useMyFormatPrice } from './useMyFormatPrice-CCAsFuev.mjs';
import { defineComponent, ref, watch, mergeProps, unref, isRef, withCtx, createTextVNode, toDisplayString, createBlock, openBlock, Fragment, renderList, createVNode, createCommentVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderClass } from 'vue/server-renderer';
import { b as useNuxtApp, u as useHead } from './server.mjs';
import './index-9T5woGxV.mjs';
import 'radix-vue';
import 'lucide-vue-next';
import 'class-variance-authority';
import './utils-TCWotVPY.mjs';
import 'clsx';
import 'tailwind-merge';
import './index-B6vrBiru.mjs';
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
import './DropdownMenuItem-Bzav__sm.mjs';
import './DropdownMenuSeparator-B4V4iajS.mjs';
import './UserListItem-w8spDyow.mjs';
import './auth-CDeEREL9.mjs';
import 'pinia';
import './isLoading-BaPa0n0V.mjs';
import 'vue-router';
import '@unovis/ts';
import '@unovis/vue';
import '@iconify/vue';
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
      title: "\u0421\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043A\u0430 | Easy CRM"
    });
    const period = ref(
      (/* @__PURE__ */ new Date()).toISOString().slice(0, 7)
      //'этот месяц'
      //   '2025-02'
    );
    const isTempGood = ref(false);
    const totalsInfo = ref([
      {
        title: "\u041E\u0431\u0449\u0438\u0439 \u043F\u043B\u0430\u043D",
        value: "0",
        content: "\u041E\u0441\u0442\u0430\u0442\u043E\u043A",
        footer: ""
      },
      {
        title: "\u041F\u0440\u043E\u0434\u0430\u0436\u0438",
        value: "0",
        content: "\u041F\u0440\u043E\u0446\u0435\u043D\u0442 \u043E\u0442 \u043F\u043B\u0430\u043D\u0430",
        footer: ""
      },
      {
        title: "\u0412\u044B\u0440\u0443\u0447\u043A\u0430(\u0424\u0430\u043A\u0442)",
        value: "0",
        content: "\u0421\u0440\u0435\u0434\u043D\u0438\u0439 \u0447\u0435\u043A",
        footer: ""
      },
      {
        title: "\u0421\u0434\u0435\u043B\u043A\u0438",
        value: "0",
        content: "\u041A\u043E\u043B\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u0441\u0434\u0435\u043B\u043E\u043A",
        footer: ""
      },
      {
        title: "\u0414\u043E\u043F. \u0443\u0441\u043B\u0443\u0433\u0438",
        value: "0",
        content: "\u041F\u0440\u043E\u0446\u0435\u043D\u0442 \u043E\u0442 \u043F\u0440\u043E\u0434\u0430\u0436",
        footer: ""
      },
      {
        title: "\u041E\u043F\u043B\u0430\u0447\u0435\u043D\u043E(%)",
        value: "0"
      },
      {
        title: "\u041E\u0441\u0442\u0430\u0442\u043E\u043A(%)",
        value: "0"
      }
    ]);
    const characteristicsInfo = ref([
      {
        title: "\u0414\u0420\u0420",
        value: "0",
        content: "",
        footer: ""
      },
      {
        title: "\u0421\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C \u0437\u0430\u044F\u0432\u043A\u0438",
        value: "0",
        content: "\u041A\u043E\u043B\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u0437\u0430\u044F\u0432\u043E\u043A",
        footer: "0"
      },
      {
        title: "% \u0438\u0437 \u0437\u0430\u044F\u0432\u043A\u0438 \u0432 \u043F\u0440\u043E\u0434\u0430\u0436\u0443",
        value: "0%",
        content: "",
        footer: ""
      },
      {
        title: "% \u0438\u0437 \u0437\u0430\u044F\u0432\u043A\u0438 \u0432 \u043C\u0430\u043A\u0435\u0442",
        value: "0%",
        content: "\u041E\u0431\u0449\u0435\u0435 \u043A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u043C\u0430\u043A\u0435\u0442\u043E\u0432",
        footer: "0"
      },
      {
        title: "% \u0438\u0437 \u043C\u0430\u043A\u0435\u0442\u0430 \u0432 \u043F\u0440\u043E\u0434\u0430\u0436\u0443",
        value: "0%",
        content: "",
        footer: ""
      },
      {
        title: "% \u0438\u0437 \u0437\u0430\u044F\u0432\u043A\u0438 \u0432 \u043C\u0430\u043A\u0435\u0442 \u0434\u0435\u043D\u044C \u0432 \u0434\u0435\u043D\u044C",
        value: "0%",
        content: "\u041C\u0430\u043A\u0435\u0442\u044B \u0434\u0435\u043D\u044C \u0432 \u0434\u0435\u043D\u044C",
        footer: "0"
      },
      {
        title: "\u041F\u0440\u043E\u0434\u0430\u0436\u0438 \u0434\u0435\u043D\u044C \u0432 \u0434\u0435\u043D\u044C(0)",
        value: "0\u20BD",
        content: "\u041A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u043F\u0440\u043E\u0434\u0430\u0436 \u0434\u0435\u043D\u044C \u0432 \u0434\u0435\u043D\u044C",
        footer: "0"
      },
      {
        title: "\u0411\u0435\u0437 \u0434\u0438\u0437\u0430\u0439\u043D\u0435\u0440\u0430(0)",
        value: "0\u20BD",
        content: "\u041F\u0440\u043E\u0434\u0430\u0436\u0438 \u0431\u0435\u0437 \u0443\u0447\u0430\u0441\u0442\u0438\u044F \u0434\u0438\u0437\u0430\u0439\u043D\u0435\u0440\u0430",
        footer: "0"
      },
      {
        title: "\u041F\u0435\u0440\u0435\u0445\u043E\u0434\u044B \u0432 \u043C\u0435\u0441\u0441\u0435\u043D\u0434\u0436\u0435\u0440",
        value: "0",
        content: "",
        footer: ""
      }
    ]);
    const deliveryInfo = ref([
      {
        title: "\u041E\u0442\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u043E",
        value: "0",
        content: "\u041A\u043E\u043B\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E",
        footer: ""
      },
      {
        title: "\u0411\u0435\u0441\u043F\u043B\u0430\u0442\u043D\u043E",
        value: "0",
        content: "\u041A\u043E\u043B\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E",
        footer: "0"
      },
      {
        title: "\u041F\u043B\u0430\u0442\u043D\u043E",
        value: "0",
        content: "\u041A\u043E\u043B\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E",
        footer: "0"
      }
    ]);
    const DRR = ref(0);
    const totalSales = ref(0);
    const fullChartData = ref([]);
    const chartData = ref([
      {
        name: "01",
        ["\u0421\u0434\u0435\u043B\u043A\u0438"]: Math.floor(Math.random() * 2e3) + 500,
        ["\u0414\u043E\u043F\u044B"]: Math.floor(Math.random() * 2e3) + 500
      },
      {
        name: "02",
        ["\u0421\u0434\u0435\u043B\u043A\u0438"]: Math.floor(Math.random() * 2e3) + 500,
        ["\u0414\u043E\u043F\u044B"]: Math.floor(Math.random() * 2e3) + 500
      },
      {
        name: "03",
        ["\u0421\u0434\u0435\u043B\u043A\u0438"]: Math.floor(Math.random() * 2e3) + 500,
        ["\u0414\u043E\u043F\u044B"]: Math.floor(Math.random() * 2e3) + 500
      },
      {
        name: "04",
        ["\u0421\u0434\u0435\u043B\u043A\u0438"]: Math.floor(Math.random() * 2e3) + 500,
        ["\u0414\u043E\u043F\u044B"]: Math.floor(Math.random() * 2e3) + 500
      },
      {
        name: "05",
        ["\u0421\u0434\u0435\u043B\u043A\u0438"]: Math.floor(Math.random() * 2e3) + 500,
        ["\u0414\u043E\u043F\u044B"]: Math.floor(Math.random() * 2e3) + 500
      },
      {
        name: "06",
        ["\u0421\u0434\u0435\u043B\u043A\u0438"]: Math.floor(Math.random() * 2e3) + 500,
        ["\u0414\u043E\u043F\u044B"]: Math.floor(Math.random() * 2e3) + 500
      },
      {
        name: "07",
        ["\u0421\u0434\u0435\u043B\u043A\u0438"]: Math.floor(Math.random() * 2e3) + 500,
        ["\u0414\u043E\u043F\u044B"]: Math.floor(Math.random() * 2e3) + 500
      }
    ]);
    const callsChartData = ref([
      {
        name: "01",
        ["\u0412\u041A"]: Math.floor(Math.random() * 2e3) + 500,
        ["B2B"]: Math.floor(Math.random() * 2e3) + 500
      },
      {
        name: "02",
        ["\u0412\u041A"]: Math.floor(Math.random() * 2e3) + 500,
        ["B2B"]: Math.floor(Math.random() * 2e3) + 500
      },
      {
        name: "03",
        ["\u0412\u041A"]: Math.floor(Math.random() * 2e3) + 500,
        ["B2B"]: Math.floor(Math.random() * 2e3) + 500
      },
      {
        name: "04",
        ["\u0412\u041A"]: Math.floor(Math.random() * 2e3) + 500,
        ["B2B"]: Math.floor(Math.random() * 2e3) + 500
      },
      {
        name: "05",
        ["\u0412\u041A"]: Math.floor(Math.random() * 2e3) + 500,
        ["B2B"]: Math.floor(Math.random() * 2e3) + 500
      },
      {
        name: "06",
        ["\u0412\u041A"]: Math.floor(Math.random() * 2e3) + 500,
        ["B2B"]: Math.floor(Math.random() * 2e3) + 500
      },
      {
        name: "07",
        ["\u0412\u041A"]: Math.floor(Math.random() * 2e3) + 500,
        ["B2B"]: Math.floor(Math.random() * 2e3) + 500
      }
    ]);
    const topManagersList = ref([
      { fullName: "\u0418\u0432\u0430\u043D\u043E\u0432 \u0418\u0432\u0430\u043D \u0418\u0432\u0430\u043D\u043E\u0432\u0438\u0447", sales: 100500 },
      { fullName: "\u041F\u0435\u0442\u0440\u043E\u0432 \u041F\u0435\u0442\u0440 \u041F\u0435\u0442\u0440\u043E\u0432\u0438\u0447", sales: 100500 },
      { fullName: "\u0421\u0438\u0434\u043E\u0440\u043E\u0432 \u0421\u0438\u0434\u043E\u0440 \u0421\u0438\u0434\u043E\u0440\u043E\u0432\u0438\u0447", sales: 100500 },
      { fullName: "\u0418\u0432\u0430\u043D\u043E\u0432 \u0418\u0432\u0430\u043D \u0418\u0432\u0430\u043D\u043E\u0432\u0438\u0447", sales: 100500 },
      { fullName: "\u041F\u0435\u0442\u0440\u043E\u0432 \u041F\u0435\u0442\u0440 \u041F\u0435\u0442\u0440\u043E\u0432\u0438\u0447", sales: 100500 }
    ]);
    const maketsData = ref([
      {
        name: "\u0414\u0438\u0437\u0430\u0439\u043D\u0435\u0440\u0441\u043A\u0438\u0439",
        sales: 10,
        amount: 0
      },
      {
        name: "\u0417\u0430\u0433\u043E\u0442\u043E\u0432\u043A\u0430 \u0438\u0437 \u0431\u0430\u0437\u044B",
        sales: 20,
        amount: 0
      },
      {
        name: "\u0420\u0435\u043A\u043B\u0430\u043C\u043D\u044B\u0439",
        sales: 20,
        amount: 0
      },
      {
        name: "\u0412\u0438\u0437\u0443\u0430\u043B\u0438\u0437\u0430\u0442\u043E\u0440",
        sales: 10,
        amount: 0
      },
      {
        name: "\u0418\u0437 \u0440\u0430\u0441\u0441\u044B\u043B\u043A\u0438",
        sales: 30,
        amount: 0
      }
    ]);
    const sourcesData = ref([
      {
        name: "\u043F\u0440\u0438\u043C\u0435\u0440",
        sales: 10
      },
      {
        name: "\u043F\u0440\u0438\u043C\u0435\u04402",
        sales: 20
      },
      {
        name: "\u043F\u0440\u0438\u043C\u0435\u04403",
        sales: 20
      }
    ]);
    const adTagsData = ref([
      {
        name: "\u043F\u0440\u0438\u043C\u0435\u0440",
        sales: 10
      },
      {
        name: "\u043F\u0440\u0438\u043C\u0435\u04402",
        sales: 20
      },
      {
        name: "\u043F\u0440\u0438\u043C\u0435\u04403",
        sales: 20
      }
    ]);
    const adExpensesData = ref([
      {
        name: "\u043F\u0440\u0438\u043C\u0435\u0440",
        sales: 10
      },
      {
        name: "\u043F\u0440\u0438\u043C\u0435\u04402",
        sales: 20
      },
      {
        name: "\u043F\u0440\u0438\u043C\u0435\u04403",
        sales: 20
      }
    ]);
    const workspacesTabs = ref(["\u0412\u0441\u0435", "\u0412\u041A", "\u0410\u0432\u0438\u0442\u043E"]);
    const currentTab = ref(workspacesTabs.value[0]);
    const registersSum = ref(0);
    const getData = async () => {
      try {
        const { data } = await $useApi.get("/dashboards/statistics", {
          params: {
            period: period.value
          }
        });
        fullChartData.value = data;
        workspacesTabs.value = data.map((w) => w.workSpaceName);
        const {
          chartData: cd,
          callsChartData: ccd,
          users: managers,
          maketsSales,
          sources,
          adTags,
          adExpenses,
          ...totals
        } = data[0];
        chartData.value = cd;
        callsChartData.value = ccd;
        topManagersList.value = managers;
        maketsData.value = maketsSales;
        sourcesData.value = sources;
        adTagsData.value = adTags;
        adExpensesData.value = adExpenses;
        currentTab.value = workspacesTabs.value[0];
        calcTotals(totals);
        calcCharacteristics(totals);
        calcDeliveryInfo(totals);
      } catch (e) {
        console.log(e);
      }
    };
    const checkCdekRegister = async () => {
      try {
        const { data } = await $useApi.get("/deliveries/registers", {
          params: {
            period: period.value
          }
        });
        registersSum.value = data.sum || 0;
      } catch (e) {
        console.log(e);
      }
    };
    const calcTotals = (totals) => {
      totalSales.value = totals.totalSales;
      if (totals.plan < totals.temp) isTempGood.value = true;
      totalsInfo.value = [
        {
          title: "\u041E\u0431\u0449\u0438\u0439 \u043F\u043B\u0430\u043D",
          value: useMyFormatPrice(totals.plan) + "\u20BD",
          content: "\u041E\u0441\u0442\u0430\u0442\u043E\u043A",
          footer: useMyFormatPrice(totals.remainder) + "\u20BD"
        },
        {
          title: "\u0422\u0435\u043C\u043F",
          value: useMyFormatPrice(totals.temp) + "\u20BD",
          content: "\u041F\u0440\u043E\u0446\u0435\u043D\u0442 \u043E\u0442 \u043F\u043B\u0430\u043D\u0430",
          footer: totals.tempToPlan.toFixed() + "%"
        },
        {
          title: "\u041F\u0440\u043E\u0434\u0430\u0436\u0438",
          value: useMyFormatPrice(totals.totalSales) + "\u20BD",
          content: "\u041F\u0440\u043E\u0446\u0435\u043D\u0442 \u043E\u0442 \u043F\u043B\u0430\u043D\u0430",
          footer: totals.salesToPlan.toFixed() + "%"
        },
        {
          title: "\u0417\u0430\u043A\u0430\u0437\u044B",
          value: useMyFormatPrice(totals.dealsSales) + "\u20BD",
          content: "\u041A\u043E\u043B\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u0437\u0430\u043A\u0430\u0437\u043E\u0432",
          footer: totals.dealsAmount.toString()
        },
        {
          title: "\u0414\u043E\u043F. \u0443\u0441\u043B\u0443\u0433\u0438",
          value: useMyFormatPrice(totals.dopSales) + "\u20BD",
          content: "\u041F\u0440\u043E\u0446\u0435\u043D\u0442 \u043E\u0442 \u043F\u0440\u043E\u0434\u0430\u0436",
          footer: totals.dopsToSales.toFixed() + "%"
        },
        {
          title: "\u0412\u044B\u0440\u0443\u0447\u043A\u0430(\u0424\u0430\u043A\u0442)",
          value: useMyFormatPrice(totals.receivedPayments) + "\u20BD",
          content: "\u0421\u0440\u0435\u0434\u043D\u0438\u0439 \u0447\u0435\u043A",
          footer: useMyFormatPrice(+totals.averageBill.toFixed()) + "\u20BD"
        },
        {
          title: "\u041E\u0441\u0442\u0430\u0442\u043E\u043A",
          value: useMyFormatPrice(totals.totalSales - totals.receivedPayments) + "\u20BD",
          content: "\u041F\u0440\u043E\u0446\u0435\u043D\u0442 \u043D\u0435\u043E\u043F\u043B\u0430\u0447\u0435\u043D\u043E",
          footer: totals.totalSales ? ((totals.totalSales - totals.receivedPayments) / totals.totalSales * 100).toFixed() + "%" : "0%"
        }
      ];
    };
    const calcCharacteristics = (totals) => {
      characteristicsInfo.value = [
        {
          title: "\u0414\u0420\u0420",
          value: totals.drr + "%",
          content: "",
          footer: ""
        },
        {
          title: "\u0421\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C \u0437\u0430\u044F\u0432\u043A\u0438",
          value: totals.callCost + "\u20BD",
          content: "\u041A\u043E\u043B\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u0437\u0430\u044F\u0432\u043E\u043A",
          footer: totals.calls
        },
        {
          title: "% \u0438\u0437 \u0437\u0430\u044F\u0432\u043A\u0438 \u0432 \u043F\u0440\u043E\u0434\u0430\u0436\u0443",
          value: totals.conversionDealsToCalls + "%",
          content: "",
          footer: ""
        },
        {
          title: "% \u0438\u0437 \u0437\u0430\u044F\u0432\u043A\u0438 \u0432 \u043C\u0430\u043A\u0435\u0442",
          value: totals.conversionMaketsToCalls + "%",
          content: "\u041E\u0431\u0449\u0435\u0435 \u043A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u043C\u0430\u043A\u0435\u0442\u043E\u0432",
          footer: totals.makets
        },
        {
          title: "% \u0438\u0437 \u043C\u0430\u043A\u0435\u0442\u0430 \u0432 \u043F\u0440\u043E\u0434\u0430\u0436\u0443",
          value: totals.conversionMaketsToSales + "%",
          content: "",
          footer: ""
        },
        {
          title: "% \u0438\u0437 \u0437\u0430\u044F\u0432\u043A\u0438 \u0432 \u043C\u0430\u043A\u0435\u0442 \u0434\u0435\u043D\u044C \u0432 \u0434\u0435\u043D\u044C",
          value: totals.conversionMaketsDayToDayToCalls + "%",
          content: "\u041C\u0430\u043A\u0435\u0442\u044B \u0434\u0435\u043D\u044C \u0432 \u0434\u0435\u043D\u044C",
          footer: totals.maketsDayToDay
        },
        {
          title: "\u041F\u0440\u043E\u0434\u0430\u0436\u0438 \u0434\u0435\u043D\u044C \u0432 \u0434\u0435\u043D\u044C",
          value: useMyFormatPrice(totals.dealsDayToDayPrice || 0) + "\u20BD",
          content: "\u041A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u043F\u0440\u043E\u0434\u0430\u0436 \u0434\u0435\u043D\u044C \u0432 \u0434\u0435\u043D\u044C",
          footer: totals.dealsDayToDay
        },
        {
          title: "\u0411\u0435\u0437 \u0434\u0438\u0437\u0430\u0439\u043D\u0435\u0440\u0430",
          value: useMyFormatPrice(totals.dealsSalesWithoutDesigners || 0) + "\u20BD",
          content: "\u041F\u0440\u043E\u0434\u0430\u0436\u0438 \u0431\u0435\u0437 \u0443\u0447\u0430\u0441\u0442\u0438\u044F \u0434\u0438\u0437\u0430\u0439\u043D\u0435\u0440\u0430",
          footer: totals.dealsWithoutDesigners
        },
        {
          title: "\u041F\u0435\u0440\u0435\u0445\u043E\u0434\u044B \u0432 \u043C\u0435\u0441\u0441\u0435\u043D\u0434\u0436\u0435\u0440",
          value: totals.redirectToMSG,
          content: "",
          footer: ""
        }
      ];
    };
    const calcDeliveryInfo = (totals) => {
      deliveryInfo.value = [
        {
          title: "\u041E\u0442\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u043E",
          value: useMyFormatPrice(totals.sendDeliveriesPrice) + "\u20BD",
          content: "\u041A\u043E\u043B\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E",
          footer: totals.sendDeliveries
        },
        {
          title: "\u0414\u043E\u0441\u0442\u0430\u0432\u043B\u0435\u043D\u043E",
          value: useMyFormatPrice(totals.deliveredDeliveriesPrice) + "\u20BD",
          content: "\u041A\u043E\u043B\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E",
          footer: totals.deliveredDeliveries
        },
        {
          title: "\u0411\u0435\u0441\u043F\u043B\u0430\u0442\u043D\u044B\u0435 \u0434\u043E\u0441\u0442\u0430\u0432\u043A\u0438",
          value: totals.freeDeliveries,
          content: "\u0421\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C \u0434\u043E\u0441\u0442\u0430\u0432\u043E\u043A",
          footer: totals.freeDeliveriesPrice.toFixed(2)
        }
        // {
        //   title: 'Платно',
        //   value: '0',
        //   content: 'Колличество',
        //   footer: '0',
        // },
      ];
    };
    const showData = (wId) => {
      const wData = fullChartData.value.find((w) => w.workSpaceName === wId) || [];
      chartData.value = wData.chartData;
      callsChartData.value = wData.callsChartData;
      topManagersList.value = wData.users;
      maketsData.value = wData.maketsSales;
      sourcesData.value = wData.sources;
      adTagsData.value = wData.adTags;
      adExpensesData.value = wData.adExpenses;
      calcTotals(wData);
      calcCharacteristics(wData);
      calcDeliveryInfo(wData);
    };
    watch(period, () => {
      getData();
      checkCdekRegister();
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_LayoutSidebar = _sfc_main$1;
      const _component_UiInput = _sfc_main$2;
      const _component_UiTabs = _sfc_main$2$1;
      const _component_UiTabsList = _sfc_main$3;
      const _component_UiTabsTrigger = _sfc_main$1$1;
      const _component_UiCard = _sfc_main$4;
      const _component_UiCardHeader = _sfc_main$1$2;
      const _component_UiCardTitle = _sfc_main$5;
      const _component_UiCardContent = _sfc_main$6;
      const _component_UiSeparator = _sfc_main$7;
      const _component_UiCardDescription = _sfc_main$8;
      const _component_UiTable = _sfc_main$5$1;
      const _component_UiTableHeader = _sfc_main$9;
      const _component_UiTableRow = _sfc_main$2$2;
      const _component_UiTableHead = _sfc_main$1$3;
      const _component_UiTableBody = _sfc_main$4$1;
      const _component_UiTableCell = _sfc_main$3$1;
      const _component_UiCardFooter = _sfc_main$a;
      const _component_UiDonutChart = _sfc_main$3$2;
      const _component_UiScrollArea = _sfc_main$b;
      const _component_UiBarChart = _sfc_main$2$3;
      const _component_UiLineChart = _sfc_main$c;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative h-screen hidden-scrollbar" }, _attrs))}><div class="w-full fixed z-10">`);
      _push(ssrRenderComponent(_component_LayoutSidebar, null, null, _parent));
      _push(`</div><div class="h-[full] flex p-4 gap-2 mx-[auto] max-w-[2048px] pt-16"><div class="flex flex-col gap-4 w-full"><div class="flex gap-2"><div class="flex flex-col gap-2"><div class="flex gap-2">`);
      _push(ssrRenderComponent(_component_UiInput, {
        modelValue: unref(period),
        "onUpdate:modelValue": ($event) => isRef(period) ? period.value = $event : null,
        type: "month",
        class: ""
      }, null, _parent));
      _push(ssrRenderComponent(_component_UiTabs, {
        modelValue: unref(currentTab),
        "onUpdate:modelValue": ($event) => isRef(currentTab) ? currentTab.value = $event : null
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex items-center justify-between"${_scopeId}><div class="flex items-center"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UiTabsList, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<!--[-->`);
                  ssrRenderList(unref(workspacesTabs), (item) => {
                    _push3(ssrRenderComponent(_component_UiTabsTrigger, {
                      key: item,
                      value: item,
                      onClick: ($event) => showData(item)
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`${ssrInterpolate(item)}`);
                        } else {
                          return [
                            createTextVNode(toDisplayString(item), 1)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  });
                  _push3(`<!--]-->`);
                } else {
                  return [
                    (openBlock(true), createBlock(Fragment, null, renderList(unref(workspacesTabs), (item) => {
                      return openBlock(), createBlock(_component_UiTabsTrigger, {
                        key: item,
                        value: item,
                        onClick: ($event) => showData(item)
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(item), 1)
                        ]),
                        _: 2
                      }, 1032, ["value", "onClick"]);
                    }), 128))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div>`);
          } else {
            return [
              createVNode("div", { class: "flex items-center justify-between" }, [
                createVNode("div", { class: "flex items-center" }, [
                  createVNode(_component_UiTabsList, null, {
                    default: withCtx(() => [
                      (openBlock(true), createBlock(Fragment, null, renderList(unref(workspacesTabs), (item) => {
                        return openBlock(), createBlock(_component_UiTabsTrigger, {
                          key: item,
                          value: item,
                          onClick: ($event) => showData(item)
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(item), 1)
                          ]),
                          _: 2
                        }, 1032, ["value", "onClick"]);
                      }), 128))
                    ]),
                    _: 1
                  })
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_component_UiCard, { class: "h-full" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UiCardHeader, { class: "px-4 py-4" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UiCardTitle, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`\u041F\u0440\u043E\u0434\u0430\u0436\u0438`);
                      } else {
                        return [
                          createTextVNode("\u041F\u0440\u043E\u0434\u0430\u0436\u0438")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UiCardTitle, null, {
                      default: withCtx(() => [
                        createTextVNode("\u041F\u0440\u043E\u0434\u0430\u0436\u0438")
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UiCardContent, { class: "p-4 space-y-3" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<!--[-->`);
                  ssrRenderList(unref(totalsInfo), (item) => {
                    _push3(`<div class="text-sm md:text-base leading-normal"${_scopeId2}><div class="flex justify-between items-center"${_scopeId2}><span class="font-medium text-gray-800"${_scopeId2}>${ssrInterpolate(item.title)}</span><span class="${ssrRenderClass([
                      // item.title === 'Темп' && isTempGood
                      //   ? 'text-green-600'
                      //   : '',
                      "font-bold text-lg"
                    ])}"${_scopeId2}>${ssrInterpolate(item.value)}</span></div><div class="text-xs text-muted-foreground flex justify-between mt-1"${_scopeId2}><span${_scopeId2}>${ssrInterpolate(item.content)}</span>`);
                    if (item.footer) {
                      _push3(`<span class="text-gray-500"${_scopeId2}>${ssrInterpolate(item.footer)}</span>`);
                    } else {
                      _push3(`<!---->`);
                    }
                    _push3(`</div>`);
                    _push3(ssrRenderComponent(_component_UiSeparator, null, null, _parent3, _scopeId2));
                    _push3(`</div>`);
                  });
                  _push3(`<!--]-->`);
                } else {
                  return [
                    (openBlock(true), createBlock(Fragment, null, renderList(unref(totalsInfo), (item) => {
                      return openBlock(), createBlock("div", {
                        key: item.title,
                        class: "text-sm md:text-base leading-normal"
                      }, [
                        createVNode("div", { class: "flex justify-between items-center" }, [
                          createVNode("span", { class: "font-medium text-gray-800" }, toDisplayString(item.title), 1),
                          createVNode("span", { class: [
                            // item.title === 'Темп' && isTempGood
                            //   ? 'text-green-600'
                            //   : '',
                            "font-bold text-lg"
                          ] }, toDisplayString(item.value), 1)
                        ]),
                        createVNode("div", { class: "text-xs text-muted-foreground flex justify-between mt-1" }, [
                          createVNode("span", null, toDisplayString(item.content), 1),
                          item.footer ? (openBlock(), createBlock("span", {
                            key: 0,
                            class: "text-gray-500"
                          }, toDisplayString(item.footer), 1)) : createCommentVNode("", true)
                        ]),
                        createVNode(_component_UiSeparator)
                      ]);
                    }), 128))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UiCardHeader, { class: "px-4 py-4" }, {
                default: withCtx(() => [
                  createVNode(_component_UiCardTitle, null, {
                    default: withCtx(() => [
                      createTextVNode("\u041F\u0440\u043E\u0434\u0430\u0436\u0438")
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(_component_UiCardContent, { class: "p-4 space-y-3" }, {
                default: withCtx(() => [
                  (openBlock(true), createBlock(Fragment, null, renderList(unref(totalsInfo), (item) => {
                    return openBlock(), createBlock("div", {
                      key: item.title,
                      class: "text-sm md:text-base leading-normal"
                    }, [
                      createVNode("div", { class: "flex justify-between items-center" }, [
                        createVNode("span", { class: "font-medium text-gray-800" }, toDisplayString(item.title), 1),
                        createVNode("span", { class: [
                          // item.title === 'Темп' && isTempGood
                          //   ? 'text-green-600'
                          //   : '',
                          "font-bold text-lg"
                        ] }, toDisplayString(item.value), 1)
                      ]),
                      createVNode("div", { class: "text-xs text-muted-foreground flex justify-between mt-1" }, [
                        createVNode("span", null, toDisplayString(item.content), 1),
                        item.footer ? (openBlock(), createBlock("span", {
                          key: 0,
                          class: "text-gray-500"
                        }, toDisplayString(item.footer), 1)) : createCommentVNode("", true)
                      ]),
                      createVNode(_component_UiSeparator)
                    ]);
                  }), 128))
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_component_UiCard, { class: "min-w-[350px]" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UiCardHeader, { class: "px-4 py-4" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UiCardTitle, null, {
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
                    createVNode(_component_UiCardTitle, null, {
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
            _push2(ssrRenderComponent(_component_UiCardContent, { class: "p-4 space-y-3" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<!--[-->`);
                  ssrRenderList(unref(characteristicsInfo), (item) => {
                    _push3(`<div class="text-sm md:text-base leading-normal"${_scopeId2}><div class="flex justify-between gap-5 items-center"${_scopeId2}><span class="font-medium text-gray-800"${_scopeId2}>${ssrInterpolate(item.title)}</span><span class="${ssrRenderClass(["font-bold text-lg"])}"${_scopeId2}>${ssrInterpolate(item.value)}</span></div><div class="text-xs text-muted-foreground flex justify-between mt-1"${_scopeId2}><span${_scopeId2}>${ssrInterpolate(item.content)}</span>`);
                    if (item.footer) {
                      _push3(`<span class="text-gray-500"${_scopeId2}>${ssrInterpolate(item.footer)}</span>`);
                    } else {
                      _push3(`<!---->`);
                    }
                    _push3(`</div>`);
                    _push3(ssrRenderComponent(_component_UiSeparator, null, null, _parent3, _scopeId2));
                    _push3(`</div>`);
                  });
                  _push3(`<!--]-->`);
                } else {
                  return [
                    (openBlock(true), createBlock(Fragment, null, renderList(unref(characteristicsInfo), (item) => {
                      return openBlock(), createBlock("div", {
                        key: item.title,
                        class: "text-sm md:text-base leading-normal"
                      }, [
                        createVNode("div", { class: "flex justify-between gap-5 items-center" }, [
                          createVNode("span", { class: "font-medium text-gray-800" }, toDisplayString(item.title), 1),
                          createVNode("span", { class: ["font-bold text-lg"] }, toDisplayString(item.value), 1)
                        ]),
                        createVNode("div", { class: "text-xs text-muted-foreground flex justify-between mt-1" }, [
                          createVNode("span", null, toDisplayString(item.content), 1),
                          item.footer ? (openBlock(), createBlock("span", {
                            key: 0,
                            class: "text-gray-500"
                          }, toDisplayString(item.footer), 1)) : createCommentVNode("", true)
                        ]),
                        createVNode(_component_UiSeparator)
                      ]);
                    }), 128))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UiCardHeader, { class: "px-4 py-4" }, {
                default: withCtx(() => [
                  createVNode(_component_UiCardTitle, null, {
                    default: withCtx(() => [
                      createTextVNode("\u041F\u043E\u043A\u0430\u0437\u0430\u0442\u0435\u043B\u0438")
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(_component_UiCardContent, { class: "p-4 space-y-3" }, {
                default: withCtx(() => [
                  (openBlock(true), createBlock(Fragment, null, renderList(unref(characteristicsInfo), (item) => {
                    return openBlock(), createBlock("div", {
                      key: item.title,
                      class: "text-sm md:text-base leading-normal"
                    }, [
                      createVNode("div", { class: "flex justify-between gap-5 items-center" }, [
                        createVNode("span", { class: "font-medium text-gray-800" }, toDisplayString(item.title), 1),
                        createVNode("span", { class: ["font-bold text-lg"] }, toDisplayString(item.value), 1)
                      ]),
                      createVNode("div", { class: "text-xs text-muted-foreground flex justify-between mt-1" }, [
                        createVNode("span", null, toDisplayString(item.content), 1),
                        item.footer ? (openBlock(), createBlock("span", {
                          key: 0,
                          class: "text-gray-500"
                        }, toDisplayString(item.footer), 1)) : createCommentVNode("", true)
                      ]),
                      createVNode(_component_UiSeparator)
                    ]);
                  }), 128))
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="grow">`);
      _push(ssrRenderComponent(_component_UiCard, { class: "h-full" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UiCardHeader, { class: "px-4 py-4" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UiCardTitle, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`\u0422\u043E\u043F \u043C\u0435\u043D\u0435\u0434\u0436\u0435\u0440\u043E\u0432`);
                      } else {
                        return [
                          createTextVNode("\u0422\u043E\u043F \u043C\u0435\u043D\u0435\u0434\u0436\u0435\u0440\u043E\u0432")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_UiCardDescription, null, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UiCardTitle, null, {
                      default: withCtx(() => [
                        createTextVNode("\u0422\u043E\u043F \u043C\u0435\u043D\u0435\u0434\u0436\u0435\u0440\u043E\u0432")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_UiCardDescription)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UiCardContent, { class: "p-0" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UiTable, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_UiTableHeader, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_UiTableRow, null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_UiTableHead, { class: "text-left" }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(` \u041C\u0435\u043D\u0435\u0434\u0436\u0435\u0440 `);
                                        } else {
                                          return [
                                            createTextVNode(" \u041C\u0435\u043D\u0435\u0434\u0436\u0435\u0440 ")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(_component_UiTableHead, { class: "text-right" }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(` \u0421\u0443\u043C\u043C\u0430 `);
                                        } else {
                                          return [
                                            createTextVNode(" \u0421\u0443\u043C\u043C\u0430 ")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_UiTableHead, { class: "text-left" }, {
                                        default: withCtx(() => [
                                          createTextVNode(" \u041C\u0435\u043D\u0435\u0434\u0436\u0435\u0440 ")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_UiTableHead, { class: "text-right" }, {
                                        default: withCtx(() => [
                                          createTextVNode(" \u0421\u0443\u043C\u043C\u0430 ")
                                        ]),
                                        _: 1
                                      })
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_UiTableRow, null, {
                                  default: withCtx(() => [
                                    createVNode(_component_UiTableHead, { class: "text-left" }, {
                                      default: withCtx(() => [
                                        createTextVNode(" \u041C\u0435\u043D\u0435\u0434\u0436\u0435\u0440 ")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_UiTableHead, { class: "text-right" }, {
                                      default: withCtx(() => [
                                        createTextVNode(" \u0421\u0443\u043C\u043C\u0430 ")
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
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_UiTableBody, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<!--[-->`);
                              ssrRenderList(unref(topManagersList), (manager, i) => {
                                _push5(ssrRenderComponent(_component_UiTableRow, { key: i }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(ssrRenderComponent(_component_UiTableCell, { class: "font-medium whitespace-nowrap" }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`${ssrInterpolate(i + 1 + ". " + manager.fullName)}`);
                                          } else {
                                            return [
                                              createTextVNode(toDisplayString(i + 1 + ". " + manager.fullName), 1)
                                            ];
                                          }
                                        }),
                                        _: 2
                                      }, _parent6, _scopeId5));
                                      _push6(ssrRenderComponent(_component_UiTableCell, { class: "text-right whitespace-nowrap" }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`${ssrInterpolate(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(manager.sales) + "\u20BD")}`);
                                          } else {
                                            return [
                                              createTextVNode(toDisplayString(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(manager.sales) + "\u20BD"), 1)
                                            ];
                                          }
                                        }),
                                        _: 2
                                      }, _parent6, _scopeId5));
                                    } else {
                                      return [
                                        createVNode(_component_UiTableCell, { class: "font-medium whitespace-nowrap" }, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(i + 1 + ". " + manager.fullName), 1)
                                          ]),
                                          _: 2
                                        }, 1024),
                                        createVNode(_component_UiTableCell, { class: "text-right whitespace-nowrap" }, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(manager.sales) + "\u20BD"), 1)
                                          ]),
                                          _: 2
                                        }, 1024)
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent5, _scopeId4));
                              });
                              _push5(`<!--]-->`);
                            } else {
                              return [
                                (openBlock(true), createBlock(Fragment, null, renderList(unref(topManagersList), (manager, i) => {
                                  return openBlock(), createBlock(_component_UiTableRow, { key: i }, {
                                    default: withCtx(() => [
                                      createVNode(_component_UiTableCell, { class: "font-medium whitespace-nowrap" }, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(i + 1 + ". " + manager.fullName), 1)
                                        ]),
                                        _: 2
                                      }, 1024),
                                      createVNode(_component_UiTableCell, { class: "text-right whitespace-nowrap" }, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(manager.sales) + "\u20BD"), 1)
                                        ]),
                                        _: 2
                                      }, 1024)
                                    ]),
                                    _: 2
                                  }, 1024);
                                }), 128))
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_UiTableHeader, null, {
                            default: withCtx(() => [
                              createVNode(_component_UiTableRow, null, {
                                default: withCtx(() => [
                                  createVNode(_component_UiTableHead, { class: "text-left" }, {
                                    default: withCtx(() => [
                                      createTextVNode(" \u041C\u0435\u043D\u0435\u0434\u0436\u0435\u0440 ")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_UiTableHead, { class: "text-right" }, {
                                    default: withCtx(() => [
                                      createTextVNode(" \u0421\u0443\u043C\u043C\u0430 ")
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
                              (openBlock(true), createBlock(Fragment, null, renderList(unref(topManagersList), (manager, i) => {
                                return openBlock(), createBlock(_component_UiTableRow, { key: i }, {
                                  default: withCtx(() => [
                                    createVNode(_component_UiTableCell, { class: "font-medium whitespace-nowrap" }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(i + 1 + ". " + manager.fullName), 1)
                                      ]),
                                      _: 2
                                    }, 1024),
                                    createVNode(_component_UiTableCell, { class: "text-right whitespace-nowrap" }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(manager.sales) + "\u20BD"), 1)
                                      ]),
                                      _: 2
                                    }, 1024)
                                  ]),
                                  _: 2
                                }, 1024);
                              }), 128))
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
                    createVNode(_component_UiTable, null, {
                      default: withCtx(() => [
                        createVNode(_component_UiTableHeader, null, {
                          default: withCtx(() => [
                            createVNode(_component_UiTableRow, null, {
                              default: withCtx(() => [
                                createVNode(_component_UiTableHead, { class: "text-left" }, {
                                  default: withCtx(() => [
                                    createTextVNode(" \u041C\u0435\u043D\u0435\u0434\u0436\u0435\u0440 ")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_UiTableHead, { class: "text-right" }, {
                                  default: withCtx(() => [
                                    createTextVNode(" \u0421\u0443\u043C\u043C\u0430 ")
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
                            (openBlock(true), createBlock(Fragment, null, renderList(unref(topManagersList), (manager, i) => {
                              return openBlock(), createBlock(_component_UiTableRow, { key: i }, {
                                default: withCtx(() => [
                                  createVNode(_component_UiTableCell, { class: "font-medium whitespace-nowrap" }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(i + 1 + ". " + manager.fullName), 1)
                                    ]),
                                    _: 2
                                  }, 1024),
                                  createVNode(_component_UiTableCell, { class: "text-right whitespace-nowrap" }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(manager.sales) + "\u20BD"), 1)
                                    ]),
                                    _: 2
                                  }, 1024)
                                ]),
                                _: 2
                              }, 1024);
                            }), 128))
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
            _push2(ssrRenderComponent(_component_UiCardFooter, { class: "p-0" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UiCardHeader, { class: "px-4 py-4" }, {
                default: withCtx(() => [
                  createVNode(_component_UiCardTitle, null, {
                    default: withCtx(() => [
                      createTextVNode("\u0422\u043E\u043F \u043C\u0435\u043D\u0435\u0434\u0436\u0435\u0440\u043E\u0432")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_UiCardDescription)
                ]),
                _: 1
              }),
              createVNode(_component_UiCardContent, { class: "p-0" }, {
                default: withCtx(() => [
                  createVNode(_component_UiTable, null, {
                    default: withCtx(() => [
                      createVNode(_component_UiTableHeader, null, {
                        default: withCtx(() => [
                          createVNode(_component_UiTableRow, null, {
                            default: withCtx(() => [
                              createVNode(_component_UiTableHead, { class: "text-left" }, {
                                default: withCtx(() => [
                                  createTextVNode(" \u041C\u0435\u043D\u0435\u0434\u0436\u0435\u0440 ")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_UiTableHead, { class: "text-right" }, {
                                default: withCtx(() => [
                                  createTextVNode(" \u0421\u0443\u043C\u043C\u0430 ")
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
                          (openBlock(true), createBlock(Fragment, null, renderList(unref(topManagersList), (manager, i) => {
                            return openBlock(), createBlock(_component_UiTableRow, { key: i }, {
                              default: withCtx(() => [
                                createVNode(_component_UiTableCell, { class: "font-medium whitespace-nowrap" }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(i + 1 + ". " + manager.fullName), 1)
                                  ]),
                                  _: 2
                                }, 1024),
                                createVNode(_component_UiTableCell, { class: "text-right whitespace-nowrap" }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(manager.sales) + "\u20BD"), 1)
                                  ]),
                                  _: 2
                                }, 1024)
                              ]),
                              _: 2
                            }, 1024);
                          }), 128))
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(_component_UiCardFooter, { class: "p-0" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_component_UiCard, { class: "min-w-[350px]" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UiCardHeader, { class: "px-4 py-4" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UiCardTitle, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`\u0414\u043E\u0441\u0442\u0430\u0432\u043A\u0430`);
                      } else {
                        return [
                          createTextVNode("\u0414\u043E\u0441\u0442\u0430\u0432\u043A\u0430")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UiCardTitle, null, {
                      default: withCtx(() => [
                        createTextVNode("\u0414\u043E\u0441\u0442\u0430\u0432\u043A\u0430")
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UiCardContent, { class: "p-4 space-y-3" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<!--[-->`);
                  ssrRenderList(unref(deliveryInfo), (item) => {
                    _push3(`<div class="text-sm md:text-base leading-normal"${_scopeId2}><div class="flex justify-between gap-5 items-center"${_scopeId2}><span class="font-medium text-gray-800"${_scopeId2}>${ssrInterpolate(item.title)}</span><span class="${ssrRenderClass(["font-bold text-lg"])}"${_scopeId2}>${ssrInterpolate(item.value)}</span></div><div class="text-xs text-muted-foreground flex justify-between mt-1"${_scopeId2}><span${_scopeId2}>${ssrInterpolate(item.content)}</span>`);
                    if (item.footer) {
                      _push3(`<span class="text-gray-500"${_scopeId2}>${ssrInterpolate(item.footer)}</span>`);
                    } else {
                      _push3(`<!---->`);
                    }
                    _push3(`</div>`);
                    _push3(ssrRenderComponent(_component_UiSeparator, null, null, _parent3, _scopeId2));
                    _push3(`</div>`);
                  });
                  _push3(`<!--]--><div class="flex justify-between gap-5 items-center"${_scopeId2}><span class="font-medium text-gray-800"${_scopeId2}>\u0420\u0435\u0435\u0441\u0442\u0440 \u0421\u0414\u0415\u041A</span><span class="${ssrRenderClass(["font-bold text-lg"])}"${_scopeId2}>${ssrInterpolate(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(+unref(registersSum).toFixed(2)) + "\u20BD")}</span></div>`);
                } else {
                  return [
                    (openBlock(true), createBlock(Fragment, null, renderList(unref(deliveryInfo), (item) => {
                      return openBlock(), createBlock("div", {
                        key: item.title,
                        class: "text-sm md:text-base leading-normal"
                      }, [
                        createVNode("div", { class: "flex justify-between gap-5 items-center" }, [
                          createVNode("span", { class: "font-medium text-gray-800" }, toDisplayString(item.title), 1),
                          createVNode("span", { class: ["font-bold text-lg"] }, toDisplayString(item.value), 1)
                        ]),
                        createVNode("div", { class: "text-xs text-muted-foreground flex justify-between mt-1" }, [
                          createVNode("span", null, toDisplayString(item.content), 1),
                          item.footer ? (openBlock(), createBlock("span", {
                            key: 0,
                            class: "text-gray-500"
                          }, toDisplayString(item.footer), 1)) : createCommentVNode("", true)
                        ]),
                        createVNode(_component_UiSeparator)
                      ]);
                    }), 128)),
                    createVNode("div", { class: "flex justify-between gap-5 items-center" }, [
                      createVNode("span", { class: "font-medium text-gray-800" }, "\u0420\u0435\u0435\u0441\u0442\u0440 \u0421\u0414\u0415\u041A"),
                      createVNode("span", { class: ["font-bold text-lg"] }, toDisplayString(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(+unref(registersSum).toFixed(2)) + "\u20BD"), 1)
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UiCardHeader, { class: "px-4 py-4" }, {
                default: withCtx(() => [
                  createVNode(_component_UiCardTitle, null, {
                    default: withCtx(() => [
                      createTextVNode("\u0414\u043E\u0441\u0442\u0430\u0432\u043A\u0430")
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(_component_UiCardContent, { class: "p-4 space-y-3" }, {
                default: withCtx(() => [
                  (openBlock(true), createBlock(Fragment, null, renderList(unref(deliveryInfo), (item) => {
                    return openBlock(), createBlock("div", {
                      key: item.title,
                      class: "text-sm md:text-base leading-normal"
                    }, [
                      createVNode("div", { class: "flex justify-between gap-5 items-center" }, [
                        createVNode("span", { class: "font-medium text-gray-800" }, toDisplayString(item.title), 1),
                        createVNode("span", { class: ["font-bold text-lg"] }, toDisplayString(item.value), 1)
                      ]),
                      createVNode("div", { class: "text-xs text-muted-foreground flex justify-between mt-1" }, [
                        createVNode("span", null, toDisplayString(item.content), 1),
                        item.footer ? (openBlock(), createBlock("span", {
                          key: 0,
                          class: "text-gray-500"
                        }, toDisplayString(item.footer), 1)) : createCommentVNode("", true)
                      ]),
                      createVNode(_component_UiSeparator)
                    ]);
                  }), 128)),
                  createVNode("div", { class: "flex justify-between gap-5 items-center" }, [
                    createVNode("span", { class: "font-medium text-gray-800" }, "\u0420\u0435\u0435\u0441\u0442\u0440 \u0421\u0414\u0415\u041A"),
                    createVNode("span", { class: ["font-bold text-lg"] }, toDisplayString(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(+unref(registersSum).toFixed(2)) + "\u20BD"), 1)
                  ])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="flex flex-col gap-4"><div class="w-full flex gap-2">`);
      _push(ssrRenderComponent(_component_UiCard, { class: "w-full" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UiCardHeader, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UiCardTitle, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`\u041C\u0430\u043A\u0435\u0442\u044B`);
                      } else {
                        return [
                          createTextVNode("\u041C\u0430\u043A\u0435\u0442\u044B")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_UiCardDescription, null, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UiCardTitle, null, {
                      default: withCtx(() => [
                        createTextVNode("\u041C\u0430\u043A\u0435\u0442\u044B")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_UiCardDescription)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UiCardContent, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UiDonutChart, {
                    index: "name",
                    category: "sales",
                    data: unref(maketsData),
                    "value-formatter": (tick, i) => {
                      return typeof tick === "number" ? ("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(tick) + "\u20BD" : "";
                    }
                  }, null, _parent3, _scopeId2));
                  _push3(`<div class="mt-4 flex flex-col"${_scopeId2}><!--[-->`);
                  ssrRenderList(unref(maketsData), (item) => {
                    _push3(`<div class="flex items-center justify-between"${_scopeId2}><span${_scopeId2}>${ssrInterpolate(item.name)}(${ssrInterpolate(item.amount)})</span><span${_scopeId2}>${ssrInterpolate(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(item.sales))}\u20BD</span></div>`);
                  });
                  _push3(`<!--]--></div>`);
                } else {
                  return [
                    createVNode(_component_UiDonutChart, {
                      index: "name",
                      category: "sales",
                      data: unref(maketsData),
                      "value-formatter": (tick, i) => {
                        return typeof tick === "number" ? ("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(tick) + "\u20BD" : "";
                      }
                    }, null, 8, ["data", "value-formatter"]),
                    createVNode("div", { class: "mt-4 flex flex-col" }, [
                      (openBlock(true), createBlock(Fragment, null, renderList(unref(maketsData), (item) => {
                        return openBlock(), createBlock("div", {
                          key: item.name,
                          class: "flex items-center justify-between"
                        }, [
                          createVNode("span", null, toDisplayString(item.name) + "(" + toDisplayString(item.amount) + ")", 1),
                          createVNode("span", null, toDisplayString(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(item.sales)) + "\u20BD", 1)
                        ]);
                      }), 128))
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UiCardFooter, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UiCardHeader, null, {
                default: withCtx(() => [
                  createVNode(_component_UiCardTitle, null, {
                    default: withCtx(() => [
                      createTextVNode("\u041C\u0430\u043A\u0435\u0442\u044B")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_UiCardDescription)
                ]),
                _: 1
              }),
              createVNode(_component_UiCardContent, null, {
                default: withCtx(() => [
                  createVNode(_component_UiDonutChart, {
                    index: "name",
                    category: "sales",
                    data: unref(maketsData),
                    "value-formatter": (tick, i) => {
                      return typeof tick === "number" ? ("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(tick) + "\u20BD" : "";
                    }
                  }, null, 8, ["data", "value-formatter"]),
                  createVNode("div", { class: "mt-4 flex flex-col" }, [
                    (openBlock(true), createBlock(Fragment, null, renderList(unref(maketsData), (item) => {
                      return openBlock(), createBlock("div", {
                        key: item.name,
                        class: "flex items-center justify-between"
                      }, [
                        createVNode("span", null, toDisplayString(item.name) + "(" + toDisplayString(item.amount) + ")", 1),
                        createVNode("span", null, toDisplayString(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(item.sales)) + "\u20BD", 1)
                      ]);
                    }), 128))
                  ])
                ]),
                _: 1
              }),
              createVNode(_component_UiCardFooter)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_UiCard, { class: "w-full" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UiCardHeader, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UiCardTitle, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`\u0418\u0441\u0442\u043E\u0447\u043D\u0438\u043A\u0438`);
                      } else {
                        return [
                          createTextVNode("\u0418\u0441\u0442\u043E\u0447\u043D\u0438\u043A\u0438")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_UiCardDescription, null, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UiCardTitle, null, {
                      default: withCtx(() => [
                        createTextVNode("\u0418\u0441\u0442\u043E\u0447\u043D\u0438\u043A\u0438")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_UiCardDescription)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UiCardContent, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UiDonutChart, {
                    index: "name",
                    category: "sales",
                    data: unref(sourcesData),
                    "value-formatter": (tick, i) => {
                      return typeof tick === "number" ? ("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(tick) + "\u20BD" : "";
                    }
                  }, null, _parent3, _scopeId2));
                  _push3(`<div class="mt-4 flex flex-col"${_scopeId2}><!--[-->`);
                  ssrRenderList(unref(sourcesData), (item) => {
                    _push3(`<div class="flex items-center justify-between"${_scopeId2}><span${_scopeId2}>${ssrInterpolate(item.name)}</span><span${_scopeId2}>${ssrInterpolate(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(item.sales))}\u20BD</span></div>`);
                  });
                  _push3(`<!--]--></div>`);
                } else {
                  return [
                    createVNode(_component_UiDonutChart, {
                      index: "name",
                      category: "sales",
                      data: unref(sourcesData),
                      "value-formatter": (tick, i) => {
                        return typeof tick === "number" ? ("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(tick) + "\u20BD" : "";
                      }
                    }, null, 8, ["data", "value-formatter"]),
                    createVNode("div", { class: "mt-4 flex flex-col" }, [
                      (openBlock(true), createBlock(Fragment, null, renderList(unref(sourcesData), (item) => {
                        return openBlock(), createBlock("div", {
                          key: item.name,
                          class: "flex items-center justify-between"
                        }, [
                          createVNode("span", null, toDisplayString(item.name), 1),
                          createVNode("span", null, toDisplayString(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(item.sales)) + "\u20BD", 1)
                        ]);
                      }), 128))
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UiCardFooter, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UiCardHeader, null, {
                default: withCtx(() => [
                  createVNode(_component_UiCardTitle, null, {
                    default: withCtx(() => [
                      createTextVNode("\u0418\u0441\u0442\u043E\u0447\u043D\u0438\u043A\u0438")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_UiCardDescription)
                ]),
                _: 1
              }),
              createVNode(_component_UiCardContent, null, {
                default: withCtx(() => [
                  createVNode(_component_UiDonutChart, {
                    index: "name",
                    category: "sales",
                    data: unref(sourcesData),
                    "value-formatter": (tick, i) => {
                      return typeof tick === "number" ? ("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(tick) + "\u20BD" : "";
                    }
                  }, null, 8, ["data", "value-formatter"]),
                  createVNode("div", { class: "mt-4 flex flex-col" }, [
                    (openBlock(true), createBlock(Fragment, null, renderList(unref(sourcesData), (item) => {
                      return openBlock(), createBlock("div", {
                        key: item.name,
                        class: "flex items-center justify-between"
                      }, [
                        createVNode("span", null, toDisplayString(item.name), 1),
                        createVNode("span", null, toDisplayString(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(item.sales)) + "\u20BD", 1)
                      ]);
                    }), 128))
                  ])
                ]),
                _: 1
              }),
              createVNode(_component_UiCardFooter)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_UiCard, { class: "w-full" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UiCardHeader, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UiCardTitle, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`\u0422\u0435\u0433\u0438`);
                      } else {
                        return [
                          createTextVNode("\u0422\u0435\u0433\u0438")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_UiCardDescription, null, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UiCardTitle, null, {
                      default: withCtx(() => [
                        createTextVNode("\u0422\u0435\u0433\u0438")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_UiCardDescription)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UiCardContent, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UiDonutChart, {
                    index: "name",
                    category: "sales",
                    data: unref(adTagsData),
                    "value-formatter": (tick, i) => {
                      return typeof tick === "number" ? ("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(tick) + "\u20BD" : "";
                    }
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_UiScrollArea, { class: "h-[300px] pr-2" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="mt-4 flex flex-col pb-3 relative"${_scopeId3}><!--[-->`);
                        ssrRenderList(unref(adTagsData), (item) => {
                          _push4(`<div class="flex items-center justify-between"${_scopeId3}><span class="w-[150px] overflow-hidden text-ellipsis"${_scopeId3}>${ssrInterpolate(item.name)}</span><span${_scopeId3}>${ssrInterpolate(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(item.sales))}\u20BD</span></div>`);
                        });
                        _push4(`<!--]--><div class="h-[20px] bg-gradient-to-b from-transparent to-slate-700/10 fixed"${_scopeId3}></div></div>`);
                      } else {
                        return [
                          createVNode("div", { class: "mt-4 flex flex-col pb-3 relative" }, [
                            (openBlock(true), createBlock(Fragment, null, renderList(unref(adTagsData), (item) => {
                              return openBlock(), createBlock("div", {
                                key: item.name,
                                class: "flex items-center justify-between"
                              }, [
                                createVNode("span", { class: "w-[150px] overflow-hidden text-ellipsis" }, toDisplayString(item.name), 1),
                                createVNode("span", null, toDisplayString(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(item.sales)) + "\u20BD", 1)
                              ]);
                            }), 128)),
                            createVNode("div", { class: "h-[20px] bg-gradient-to-b from-transparent to-slate-700/10 fixed" })
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UiDonutChart, {
                      index: "name",
                      category: "sales",
                      data: unref(adTagsData),
                      "value-formatter": (tick, i) => {
                        return typeof tick === "number" ? ("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(tick) + "\u20BD" : "";
                      }
                    }, null, 8, ["data", "value-formatter"]),
                    createVNode(_component_UiScrollArea, { class: "h-[300px] pr-2" }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "mt-4 flex flex-col pb-3 relative" }, [
                          (openBlock(true), createBlock(Fragment, null, renderList(unref(adTagsData), (item) => {
                            return openBlock(), createBlock("div", {
                              key: item.name,
                              class: "flex items-center justify-between"
                            }, [
                              createVNode("span", { class: "w-[150px] overflow-hidden text-ellipsis" }, toDisplayString(item.name), 1),
                              createVNode("span", null, toDisplayString(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(item.sales)) + "\u20BD", 1)
                            ]);
                          }), 128)),
                          createVNode("div", { class: "h-[20px] bg-gradient-to-b from-transparent to-slate-700/10 fixed" })
                        ])
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
              createVNode(_component_UiCardHeader, null, {
                default: withCtx(() => [
                  createVNode(_component_UiCardTitle, null, {
                    default: withCtx(() => [
                      createTextVNode("\u0422\u0435\u0433\u0438")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_UiCardDescription)
                ]),
                _: 1
              }),
              createVNode(_component_UiCardContent, null, {
                default: withCtx(() => [
                  createVNode(_component_UiDonutChart, {
                    index: "name",
                    category: "sales",
                    data: unref(adTagsData),
                    "value-formatter": (tick, i) => {
                      return typeof tick === "number" ? ("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(tick) + "\u20BD" : "";
                    }
                  }, null, 8, ["data", "value-formatter"]),
                  createVNode(_component_UiScrollArea, { class: "h-[300px] pr-2" }, {
                    default: withCtx(() => [
                      createVNode("div", { class: "mt-4 flex flex-col pb-3 relative" }, [
                        (openBlock(true), createBlock(Fragment, null, renderList(unref(adTagsData), (item) => {
                          return openBlock(), createBlock("div", {
                            key: item.name,
                            class: "flex items-center justify-between"
                          }, [
                            createVNode("span", { class: "w-[150px] overflow-hidden text-ellipsis" }, toDisplayString(item.name), 1),
                            createVNode("span", null, toDisplayString(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(item.sales)) + "\u20BD", 1)
                          ]);
                        }), 128)),
                        createVNode("div", { class: "h-[20px] bg-gradient-to-b from-transparent to-slate-700/10 fixed" })
                      ])
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
      _push(ssrRenderComponent(_component_UiCard, { class: "w-full" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UiCardHeader, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UiCardTitle, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`\u0420\u0430\u0441\u0445\u043E\u0434\u044B \u043D\u0430 \u0440\u0435\u043A\u043B\u0430\u043C\u0443`);
                      } else {
                        return [
                          createTextVNode("\u0420\u0430\u0441\u0445\u043E\u0434\u044B \u043D\u0430 \u0440\u0435\u043A\u043B\u0430\u043C\u0443")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_UiCardDescription, null, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UiCardTitle, null, {
                      default: withCtx(() => [
                        createTextVNode("\u0420\u0430\u0441\u0445\u043E\u0434\u044B \u043D\u0430 \u0440\u0435\u043A\u043B\u0430\u043C\u0443")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_UiCardDescription)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UiCardContent, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="relative"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_UiDonutChart, {
                    index: "name",
                    category: "sales",
                    data: unref(adExpensesData),
                    "value-formatter": (tick, i) => {
                      DRR.value = unref(totalSales) ? +(tick / unref(totalSales) * 100).toFixed(2) : 0;
                      return ("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(tick) + "\u20BD";
                    }
                  }, null, _parent3, _scopeId2));
                  _push3(`<div class="absolute font-bold top-[55%] left-1/2 translate-x-[-50%] h-full"${_scopeId2}> \u0414\u0420\u0420: ${ssrInterpolate(unref(DRR))}% </div></div><div class="mt-4 flex flex-col"${_scopeId2}><!--[-->`);
                  ssrRenderList(unref(adExpensesData), (item) => {
                    _push3(`<div class="flex items-center justify-between gap-4"${_scopeId2}><span class="text-nowrap"${_scopeId2}>${ssrInterpolate(item.name)}</span><span class="text-nowrap"${_scopeId2}>${ssrInterpolate(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(item.sales))}\u20BD</span></div>`);
                  });
                  _push3(`<!--]--></div>`);
                } else {
                  return [
                    createVNode("div", { class: "relative" }, [
                      createVNode(_component_UiDonutChart, {
                        index: "name",
                        category: "sales",
                        data: unref(adExpensesData),
                        "value-formatter": (tick, i) => {
                          DRR.value = unref(totalSales) ? +(tick / unref(totalSales) * 100).toFixed(2) : 0;
                          return ("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(tick) + "\u20BD";
                        }
                      }, null, 8, ["data", "value-formatter"]),
                      createVNode("div", { class: "absolute font-bold top-[55%] left-1/2 translate-x-[-50%] h-full" }, " \u0414\u0420\u0420: " + toDisplayString(unref(DRR)) + "% ", 1)
                    ]),
                    createVNode("div", { class: "mt-4 flex flex-col" }, [
                      (openBlock(true), createBlock(Fragment, null, renderList(unref(adExpensesData), (item) => {
                        return openBlock(), createBlock("div", {
                          key: item.name,
                          class: "flex items-center justify-between gap-4"
                        }, [
                          createVNode("span", { class: "text-nowrap" }, toDisplayString(item.name), 1),
                          createVNode("span", { class: "text-nowrap" }, toDisplayString(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(item.sales)) + "\u20BD", 1)
                        ]);
                      }), 128))
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UiCardFooter, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UiCardHeader, null, {
                default: withCtx(() => [
                  createVNode(_component_UiCardTitle, null, {
                    default: withCtx(() => [
                      createTextVNode("\u0420\u0430\u0441\u0445\u043E\u0434\u044B \u043D\u0430 \u0440\u0435\u043A\u043B\u0430\u043C\u0443")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_UiCardDescription)
                ]),
                _: 1
              }),
              createVNode(_component_UiCardContent, null, {
                default: withCtx(() => [
                  createVNode("div", { class: "relative" }, [
                    createVNode(_component_UiDonutChart, {
                      index: "name",
                      category: "sales",
                      data: unref(adExpensesData),
                      "value-formatter": (tick, i) => {
                        DRR.value = unref(totalSales) ? +(tick / unref(totalSales) * 100).toFixed(2) : 0;
                        return ("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(tick) + "\u20BD";
                      }
                    }, null, 8, ["data", "value-formatter"]),
                    createVNode("div", { class: "absolute font-bold top-[55%] left-1/2 translate-x-[-50%] h-full" }, " \u0414\u0420\u0420: " + toDisplayString(unref(DRR)) + "% ", 1)
                  ]),
                  createVNode("div", { class: "mt-4 flex flex-col" }, [
                    (openBlock(true), createBlock(Fragment, null, renderList(unref(adExpensesData), (item) => {
                      return openBlock(), createBlock("div", {
                        key: item.name,
                        class: "flex items-center justify-between gap-4"
                      }, [
                        createVNode("span", { class: "text-nowrap" }, toDisplayString(item.name), 1),
                        createVNode("span", { class: "text-nowrap" }, toDisplayString(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(item.sales)) + "\u20BD", 1)
                      ]);
                    }), 128))
                  ])
                ]),
                _: 1
              }),
              createVNode(_component_UiCardFooter)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="grow">`);
      _push(ssrRenderComponent(_component_UiCard, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UiCardHeader, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UiCardTitle, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`\u0413\u0440\u0430\u0444\u0438\u043A \u043F\u0440\u043E\u0434\u0430\u0436`);
                      } else {
                        return [
                          createTextVNode("\u0413\u0440\u0430\u0444\u0438\u043A \u043F\u0440\u043E\u0434\u0430\u0436")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_UiCardDescription, null, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UiCardTitle, null, {
                      default: withCtx(() => [
                        createTextVNode("\u0413\u0440\u0430\u0444\u0438\u043A \u043F\u0440\u043E\u0434\u0430\u0436")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_UiCardDescription)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UiCardContent, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UiBarChart, {
                    index: "name",
                    data: unref(chartData),
                    categories: ["\u0421\u0434\u0435\u043B\u043A\u0438", "\u0414\u043E\u043F\u044B"],
                    "y-formatter": (tick, i) => {
                      return typeof tick === "number" ? ("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(tick) + "\u20BD" : "";
                    },
                    type: "stacked",
                    "custom-tooltip": _sfc_main$1$4
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UiBarChart, {
                      index: "name",
                      data: unref(chartData),
                      categories: ["\u0421\u0434\u0435\u043B\u043A\u0438", "\u0414\u043E\u043F\u044B"],
                      "y-formatter": (tick, i) => {
                        return typeof tick === "number" ? ("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(tick) + "\u20BD" : "";
                      },
                      type: "stacked",
                      "custom-tooltip": _sfc_main$1$4
                    }, null, 8, ["data", "y-formatter"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UiCardFooter, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UiCardHeader, null, {
                default: withCtx(() => [
                  createVNode(_component_UiCardTitle, null, {
                    default: withCtx(() => [
                      createTextVNode("\u0413\u0440\u0430\u0444\u0438\u043A \u043F\u0440\u043E\u0434\u0430\u0436")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_UiCardDescription)
                ]),
                _: 1
              }),
              createVNode(_component_UiCardContent, null, {
                default: withCtx(() => [
                  createVNode(_component_UiBarChart, {
                    index: "name",
                    data: unref(chartData),
                    categories: ["\u0421\u0434\u0435\u043B\u043A\u0438", "\u0414\u043E\u043F\u044B"],
                    "y-formatter": (tick, i) => {
                      return typeof tick === "number" ? ("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(tick) + "\u20BD" : "";
                    },
                    type: "stacked",
                    "custom-tooltip": _sfc_main$1$4
                  }, null, 8, ["data", "y-formatter"])
                ]),
                _: 1
              }),
              createVNode(_component_UiCardFooter)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="grow">`);
      _push(ssrRenderComponent(_component_UiCard, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UiCardHeader, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UiCardTitle, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`\u0413\u0440\u0430\u0444\u0438\u043A \u0437\u0430\u044F\u0432\u043E\u043A`);
                      } else {
                        return [
                          createTextVNode("\u0413\u0440\u0430\u0444\u0438\u043A \u0437\u0430\u044F\u0432\u043E\u043A")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_UiCardDescription, null, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UiCardTitle, null, {
                      default: withCtx(() => [
                        createTextVNode("\u0413\u0440\u0430\u0444\u0438\u043A \u0437\u0430\u044F\u0432\u043E\u043A")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_UiCardDescription)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UiCardContent, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UiLineChart, {
                    index: "name",
                    data: unref(callsChartData),
                    categories: ["\u0412\u041A", "B2B"],
                    "y-formatter": (tick, i) => {
                      return typeof tick === "number" ? ("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(tick) : "";
                    },
                    "custom-tooltip": _sfc_main$d
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UiLineChart, {
                      index: "name",
                      data: unref(callsChartData),
                      categories: ["\u0412\u041A", "B2B"],
                      "y-formatter": (tick, i) => {
                        return typeof tick === "number" ? ("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(tick) : "";
                      },
                      "custom-tooltip": _sfc_main$d
                    }, null, 8, ["data", "y-formatter"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UiCardFooter, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UiCardHeader, null, {
                default: withCtx(() => [
                  createVNode(_component_UiCardTitle, null, {
                    default: withCtx(() => [
                      createTextVNode("\u0413\u0440\u0430\u0444\u0438\u043A \u0437\u0430\u044F\u0432\u043E\u043A")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_UiCardDescription)
                ]),
                _: 1
              }),
              createVNode(_component_UiCardContent, null, {
                default: withCtx(() => [
                  createVNode(_component_UiLineChart, {
                    index: "name",
                    data: unref(callsChartData),
                    categories: ["\u0412\u041A", "B2B"],
                    "y-formatter": (tick, i) => {
                      return typeof tick === "number" ? ("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(tick) : "";
                    },
                    "custom-tooltip": _sfc_main$d
                  }, null, 8, ["data", "y-formatter"])
                ]),
                _: 1
              }),
              createVNode(_component_UiCardFooter)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/statistics copy/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-C5olmpui.mjs.map
