import { _ as _sfc_main$6, a as _sfc_main$4, b as _sfc_main$5, c as _sfc_main$3, d as _sfc_main$2$1 } from './SelectScrollDownButton-JzJI8BsA.mjs';
import { _ as _sfc_main$7 } from './Card-D2-UPrX8.mjs';
import { _ as _sfc_main$8 } from './CardContent-5uJgHkPl.mjs';
import { _ as _sfc_main$5$1, a as _sfc_main$9, b as _sfc_main$2$2, c as _sfc_main$1$1, d as _sfc_main$4$1, e as _sfc_main$3$1 } from './TableHeader-CsCuT7pu.mjs';
import { u as useMyFormatPrice } from './useMyFormatPrice-CCAsFuev.mjs';
import { defineComponent, ref, watch, mergeProps, unref, isRef, withCtx, createVNode, createTextVNode, toDisplayString, createBlock, openBlock, Fragment, renderList, createCommentVNode, computed, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderClass } from 'vue/server-renderer';
import { u as useHead, b as useNuxtApp, c as useToast } from './server.mjs';
import { Q as Qn } from './vue-datepicker-OP97sJr3.mjs';
import 'radix-vue';
import 'lucide-vue-next';
import './utils-TCWotVPY.mjs';
import 'clsx';
import 'tailwind-merge';
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
import 'pinia';
import 'vue-router';
import '@iconify/vue';
import 'axios';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import 'unhead/plugins';
import 'date-fns';

const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "NeonTable",
  __ssrInlineRender: true,
  props: {
    plData: {}
  },
  setup(__props) {
    const props = __props;
    const isRawFormat = computed(() => {
      return Array.isArray(props.plData.income) && props.plData.income.length > 0 && "allDealsPrice" in props.plData.income[0];
    });
    const transformedData = computed(() => {
      var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j;
      if (!isRawFormat.value) {
        return props.plData;
      }
      const rawData = props.plData;
      const periods2 = rawData.periods;
      const income = {
        allDealsPrice: rawData.income.map((item) => ({
          value: item.allDealsPrice,
          period: item.period
        })),
        sendDeals: rawData.income.map((item) => ({
          value: item.sendDeals,
          period: item.period
        })),
        revenue: rawData.income.map((item) => ({
          value: item.revenue,
          period: item.period
        }))
      };
      const transformToDataPoints = (data) => {
        return periods2.map((period, index) => {
          var _a2, _b2, _c2;
          const item = data.find((d) => d.period === period);
          const value = (_a2 = item == null ? void 0 : item.value) != null ? _a2 : 0;
          const sendDeals = (_c2 = (_b2 = income.sendDeals[index]) == null ? void 0 : _b2.value) != null ? _c2 : 0;
          const changePercent = sendDeals === 0 ? 0 : +(value / sendDeals * 100).toFixed(2);
          return { value, changePercent };
        });
      };
      const getValueByPeriod = (data, period) => {
        var _a2, _b2;
        return (_b2 = (_a2 = data == null ? void 0 : data.find((item) => item.period === period)) == null ? void 0 : _a2.value) != null ? _b2 : 0;
      };
      const suppliesData = [];
      const suppliesTotals = periods2.map((period, index) => {
        var _a2, _b2;
        const value = getValueByPeriod(rawData.prodExpenses, period);
        const sendDeals = (_b2 = (_a2 = income.sendDeals[index]) == null ? void 0 : _a2.value) != null ? _b2 : 0;
        const changePercent = sendDeals === 0 ? 0 : +(value / sendDeals * 100).toFixed(2);
        return { value, changePercent };
      });
      const productionSalariesData = [
        {
          role: "\u0421\u0431\u043E\u0440\u0449\u0438\u043A\u0438",
          data: transformToDataPoints((_a = rawData.mastersSalaries) != null ? _a : [])
        },
        {
          role: "\u0423\u043F\u0430\u043A\u043E\u0432\u0449\u0438\u043A\u0438",
          data: transformToDataPoints((_b = rawData.packersSalaries) != null ? _b : [])
        },
        {
          role: "\u0424\u0440\u0435\u0437\u0435\u0440\u043E\u0432\u0449\u0438\u043A\u0438",
          data: transformToDataPoints((_c = rawData.frezerSalaries) != null ? _c : [])
        },
        {
          role: "\u0420\u0435\u043C\u043E\u043D\u0442\u044B",
          data: transformToDataPoints((_d = rawData.mastersRepairsSalaries) != null ? _d : [])
        },
        {
          role: "\u0414\u0440\u0443\u0433\u043E\u0435",
          data: transformToDataPoints((_e = rawData.otherSalaries) != null ? _e : [])
        },
        {
          role: "\u041B\u043E\u0433\u0438\u0441\u0442\u044B",
          data: transformToDataPoints((_f = rawData.logisticsSalaries) != null ? _f : [])
        }
      ].filter((item) => item.data.some((dp) => dp.value > 0));
      productionSalariesData.sort((a, b) => {
        var _a2, _b2;
        const lastA = ((_a2 = a.data[a.data.length - 1]) == null ? void 0 : _a2.value) || 0;
        const lastB = ((_b2 = b.data[b.data.length - 1]) == null ? void 0 : _b2.value) || 0;
        return lastB - lastA;
      });
      const productionSalariesTotals = periods2.map((period, index) => {
        var _a2, _b2;
        const value = productionSalariesData.reduce((sum, role) => {
          var _a3, _b3;
          return sum + ((_b3 = (_a3 = role.data[index]) == null ? void 0 : _a3.value) != null ? _b3 : 0);
        }, 0);
        const sendDeals = (_b2 = (_a2 = income.sendDeals[index]) == null ? void 0 : _a2.value) != null ? _b2 : 0;
        const changePercent = sendDeals === 0 ? 0 : +(value / sendDeals * 100).toFixed(2);
        return { value, changePercent };
      });
      const adExpensesData = [];
      const adExpensesTotals = periods2.map((period, index) => {
        var _a2, _b2;
        const value = getValueByPeriod(rawData.adExpenses, period);
        const sendDeals = (_b2 = (_a2 = income.sendDeals[index]) == null ? void 0 : _a2.value) != null ? _b2 : 0;
        const changePercent = sendDeals === 0 ? 0 : +(value / sendDeals * 100).toFixed(2);
        return { value, changePercent };
      });
      const commercialSalariesData = [
        {
          role: "\u041C\u0435\u043D\u0435\u0434\u0436\u0435\u0440\u044B \u043E\u0442\u0434\u0435\u043B\u0430 \u043F\u0440\u043E\u0434\u0430\u0436",
          data: transformToDataPoints((_g = rawData.mopSalaries) != null ? _g : [])
        },
        {
          role: "\u0414\u0438\u0437\u0430\u0439\u043D\u0435\u0440\u044B",
          data: transformToDataPoints((_h = rawData.disSalaries) != null ? _h : [])
        },
        {
          role: "\u041C\u0435\u043D\u0435\u0434\u0436\u0435\u0440\u044B \u043E\u0442\u0434\u0435\u043B\u0430 \u0432\u0435\u0434\u0435\u043D\u0438\u044F",
          data: transformToDataPoints((_i = rawData.movSalaries) != null ? _i : [])
        },
        {
          role: "\u041A\u043E\u043C\u043C\u0435\u0440\u0447\u0435\u0441\u043A\u0438\u0439 \u0434\u0438\u0440\u0435\u043A\u0442\u043E\u0440",
          data: transformToDataPoints((_j = rawData.kdSalaries) != null ? _j : [])
        }
      ].filter((item) => item.data.some((dp) => dp.value > 0));
      commercialSalariesData.sort((a, b) => {
        var _a2, _b2;
        const lastA = ((_a2 = a.data[a.data.length - 1]) == null ? void 0 : _a2.value) || 0;
        const lastB = ((_b2 = b.data[b.data.length - 1]) == null ? void 0 : _b2.value) || 0;
        return lastB - lastA;
      });
      const commercialSalariesTotals = periods2.map((period, index) => {
        var _a2, _b2;
        const value = commercialSalariesData.reduce((sum, role) => {
          var _a3, _b3;
          return sum + ((_b3 = (_a3 = role.data[index]) == null ? void 0 : _a3.value) != null ? _b3 : 0);
        }, 0);
        const sendDeals = (_b2 = (_a2 = income.sendDeals[index]) == null ? void 0 : _a2.value) != null ? _b2 : 0;
        const changePercent = sendDeals === 0 ? 0 : +(value / sendDeals * 100).toFixed(2);
        return { value, changePercent };
      });
      const totalsData = [
        {
          title: "\u0420\u0430\u0441\u0445\u043E\u0434\u044B \u043D\u0430 \u043F\u043E\u0441\u0442\u0430\u0432\u043A\u0438",
          data: suppliesTotals
        },
        {
          title: "\u0417\u0430\u0440\u043F\u043B\u0430\u0442\u044B \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0441\u0442\u0432\u0430",
          data: productionSalariesTotals
        },
        {
          title: "\u0420\u0430\u0441\u0445\u043E\u0434\u044B \u043D\u0430 \u0440\u0435\u043A\u043B\u0430\u043C\u0443",
          data: adExpensesTotals
        },
        {
          title: "\u0417\u0430\u0440\u043F\u043B\u0430\u0442\u044B \u043A\u043E\u043C\u043C\u0435\u0440\u0447\u0435\u0441\u043A\u043E\u0433\u043E \u043E\u0442\u0434\u0435\u043B\u0430",
          data: commercialSalariesTotals
        }
      ];
      totalsData.sort((a, b) => {
        var _a2, _b2;
        const lastA = ((_a2 = a.data[a.data.length - 1]) == null ? void 0 : _a2.value) || 0;
        const lastB = ((_b2 = b.data[b.data.length - 1]) == null ? void 0 : _b2.value) || 0;
        return lastB - lastA;
      });
      const totalsTotals = periods2.map((period, index) => {
        var _a2, _b2;
        const value = totalsData.reduce((sum, item) => {
          var _a3, _b3;
          return sum + ((_b3 = (_a3 = item.data[index]) == null ? void 0 : _a3.value) != null ? _b3 : 0);
        }, 0);
        const sendDeals = (_b2 = (_a2 = income.sendDeals[index]) == null ? void 0 : _a2.value) != null ? _b2 : 0;
        const changePercent = sendDeals === 0 ? 0 : +(value / sendDeals * 100).toFixed(2);
        return { value, changePercent };
      });
      return {
        periods: periods2,
        income,
        expenses: {
          totals: {
            data: totalsData,
            totals: totalsTotals
          },
          production: {
            supplies: {
              data: suppliesData,
              totals: suppliesTotals
            },
            productionSalaries: {
              data: productionSalariesData,
              totals: productionSalariesTotals
            }
          },
          commercial: {
            adExpenses: {
              data: adExpensesData,
              totals: adExpensesTotals
            },
            commercialSalaries: {
              data: commercialSalariesData,
              totals: commercialSalariesTotals
            }
          }
        }
      };
    });
    const calculateIncomeWithPercent = (data) => computed(
      () => data.map((item, index) => {
        var _a, _b;
        return {
          value: item.value,
          changePercent: !((_a = data[index - 1]) == null ? void 0 : _a.value) || ((_b = data[index - 1]) == null ? void 0 : _b.value) === 0 ? 0 : +((item.value - data[index - 1].value) / data[index - 1].value * 100).toFixed(2)
        };
      })
    );
    const incomeAllDealsPrice = computed(() => {
      const data = transformedData.value.income.allDealsPrice;
      return calculateIncomeWithPercent(data).value;
    });
    const incomeSendDeals = computed(() => {
      const data = transformedData.value.income.sendDeals;
      return calculateIncomeWithPercent(data).value;
    });
    const incomeRevenue = computed(() => {
      const data = transformedData.value.income.revenue;
      return calculateIncomeWithPercent(data).value;
    });
    const expenses = computed(() => transformedData.value.expenses);
    const periods = computed(() => transformedData.value.periods);
    const totalExpensesShare = computed(
      () => periods.value.map((period, index) => {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        const totalValue = (_b = (_a = expenses.value.totals.totals[index]) == null ? void 0 : _a.value) != null ? _b : 0;
        const sendDeals = (_d = (_c = incomeSendDeals.value[index]) == null ? void 0 : _c.value) != null ? _d : 0;
        const percent = sendDeals === 0 ? 0 : +(totalValue / sendDeals * 100).toFixed(2);
        let isIncreased = false;
        let isDecreased = false;
        if (index > 0) {
          const prevTotalValue = (_f = (_e = expenses.value.totals.totals[index - 1]) == null ? void 0 : _e.value) != null ? _f : 0;
          const prevSendDeals = (_h = (_g = incomeSendDeals.value[index - 1]) == null ? void 0 : _g.value) != null ? _h : 0;
          const prevPercent = prevSendDeals === 0 ? 0 : +(prevTotalValue / prevSendDeals * 100).toFixed(2);
          if (percent > prevPercent) {
            isIncreased = true;
          } else if (percent < prevPercent) {
            isDecreased = true;
          }
        }
        return {
          period,
          value: totalValue,
          percent,
          isIncreased,
          isDecreased
        };
      })
    );
    const incomeNetProfit = computed(
      () => periods.value.map((period, index) => {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        const sendDealsValue = (_b = (_a = incomeSendDeals.value[index]) == null ? void 0 : _a.value) != null ? _b : 0;
        const totalExpensesValue = (_d = (_c = totalExpensesShare.value[index]) == null ? void 0 : _c.value) != null ? _d : 0;
        const netProfitValue = +(sendDealsValue - totalExpensesValue).toFixed(2);
        let changePercent = 0;
        if (index > 0) {
          const prevSendDeals = (_f = (_e = incomeSendDeals.value[index - 1]) == null ? void 0 : _e.value) != null ? _f : 0;
          const prevTotalExpenses = (_h = (_g = totalExpensesShare.value[index - 1]) == null ? void 0 : _g.value) != null ? _h : 0;
          const prevNetProfit = +(prevSendDeals - prevTotalExpenses).toFixed(2);
          if (prevNetProfit !== 0) {
            changePercent = +((netProfitValue - prevNetProfit) / Math.abs(prevNetProfit) * 100).toFixed(2);
          }
        }
        return {
          value: netProfitValue,
          changePercent
        };
      })
    );
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UiTable = _sfc_main$5$1;
      const _component_UiTableHeader = _sfc_main$9;
      const _component_UiTableRow = _sfc_main$2$2;
      const _component_UiTableHead = _sfc_main$1$1;
      const _component_UiTableBody = _sfc_main$4$1;
      const _component_UiTableCell = _sfc_main$3$1;
      _push(ssrRenderComponent(_component_UiTable, mergeProps({ class: "bg-slate-100 rounded-sm overflow-hidden" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UiTableHeader, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UiTableRow, { class: "bg-slate-200 hover:bg-slate-200" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_UiTableHead, { class: "text-xl" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`\u0414\u043E\u0445\u043E\u0434\u044B`);
                            } else {
                              return [
                                createTextVNode("\u0414\u043E\u0445\u043E\u0434\u044B")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(`<!--[-->`);
                        ssrRenderList(periods.value, (per, i) => {
                          _push4(ssrRenderComponent(_component_UiTableHead, {
                            key: i,
                            class: "text-center"
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`${ssrInterpolate(per)}`);
                              } else {
                                return [
                                  createTextVNode(toDisplayString(per), 1)
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                        });
                        _push4(`<!--]-->`);
                      } else {
                        return [
                          createVNode(_component_UiTableHead, { class: "text-xl" }, {
                            default: withCtx(() => [
                              createTextVNode("\u0414\u043E\u0445\u043E\u0434\u044B")
                            ]),
                            _: 1
                          }),
                          (openBlock(true), createBlock(Fragment, null, renderList(periods.value, (per, i) => {
                            return openBlock(), createBlock(_component_UiTableHead, {
                              key: i,
                              class: "text-center"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(per), 1)
                              ]),
                              _: 2
                            }, 1024);
                          }), 128))
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UiTableRow, { class: "bg-slate-200 hover:bg-slate-200" }, {
                      default: withCtx(() => [
                        createVNode(_component_UiTableHead, { class: "text-xl" }, {
                          default: withCtx(() => [
                            createTextVNode("\u0414\u043E\u0445\u043E\u0434\u044B")
                          ]),
                          _: 1
                        }),
                        (openBlock(true), createBlock(Fragment, null, renderList(periods.value, (per, i) => {
                          return openBlock(), createBlock(_component_UiTableHead, {
                            key: i,
                            class: "text-center"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(per), 1)
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
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UiTableBody, { class: "font-semibold" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UiTableRow, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_UiTableCell, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`\u041E\u0444\u043E\u0440\u043C\u043B\u0435\u043D\u043D\u044B\u0435 \u0437\u0430\u043A\u0430\u0437\u044B`);
                            } else {
                              return [
                                createTextVNode("\u041E\u0444\u043E\u0440\u043C\u043B\u0435\u043D\u043D\u044B\u0435 \u0437\u0430\u043A\u0430\u0437\u044B")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(`<!--[-->`);
                        ssrRenderList(incomeAllDealsPrice.value, (dp, i) => {
                          _push4(ssrRenderComponent(_component_UiTableCell, {
                            key: i,
                            class: "text-center"
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`<div class="${ssrRenderClass([
                                  "flex justify-center items-center gap-1",
                                  dp.changePercent < 0 ? "text-red-600/90" : "",
                                  dp.changePercent > 0 ? "text-green-700/90" : "",
                                  dp.changePercent === 0 ? "text-slate-500/90" : ""
                                ])}"${_scopeId4}><span${_scopeId4}>${ssrInterpolate(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(dp.value) + "\u20BD")}</span><span${_scopeId4}> (${ssrInterpolate(dp.changePercent)}%) </span></div>`);
                              } else {
                                return [
                                  createVNode("div", {
                                    class: [
                                      "flex justify-center items-center gap-1",
                                      dp.changePercent < 0 ? "text-red-600/90" : "",
                                      dp.changePercent > 0 ? "text-green-700/90" : "",
                                      dp.changePercent === 0 ? "text-slate-500/90" : ""
                                    ]
                                  }, [
                                    createVNode("span", null, toDisplayString(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(dp.value) + "\u20BD"), 1),
                                    createVNode("span", null, " (" + toDisplayString(dp.changePercent) + "%) ", 1)
                                  ], 2)
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                        });
                        _push4(`<!--]-->`);
                      } else {
                        return [
                          createVNode(_component_UiTableCell, null, {
                            default: withCtx(() => [
                              createTextVNode("\u041E\u0444\u043E\u0440\u043C\u043B\u0435\u043D\u043D\u044B\u0435 \u0437\u0430\u043A\u0430\u0437\u044B")
                            ]),
                            _: 1
                          }),
                          (openBlock(true), createBlock(Fragment, null, renderList(incomeAllDealsPrice.value, (dp, i) => {
                            return openBlock(), createBlock(_component_UiTableCell, {
                              key: i,
                              class: "text-center"
                            }, {
                              default: withCtx(() => [
                                createVNode("div", {
                                  class: [
                                    "flex justify-center items-center gap-1",
                                    dp.changePercent < 0 ? "text-red-600/90" : "",
                                    dp.changePercent > 0 ? "text-green-700/90" : "",
                                    dp.changePercent === 0 ? "text-slate-500/90" : ""
                                  ]
                                }, [
                                  createVNode("span", null, toDisplayString(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(dp.value) + "\u20BD"), 1),
                                  createVNode("span", null, " (" + toDisplayString(dp.changePercent) + "%) ", 1)
                                ], 2)
                              ]),
                              _: 2
                            }, 1024);
                          }), 128))
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_UiTableRow, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_UiTableCell, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`\u041E\u0442\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u043D\u044B\u0435 \u0437\u0430\u043A\u0430\u0437\u044B`);
                            } else {
                              return [
                                createTextVNode("\u041E\u0442\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u043D\u044B\u0435 \u0437\u0430\u043A\u0430\u0437\u044B")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(`<!--[-->`);
                        ssrRenderList(incomeSendDeals.value, (dp, i) => {
                          _push4(ssrRenderComponent(_component_UiTableCell, {
                            key: i,
                            class: "text-center"
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`<div class="${ssrRenderClass([
                                  "flex justify-center items-center gap-1",
                                  dp.changePercent < 0 ? "text-red-600/90" : "",
                                  dp.changePercent > 0 ? "text-green-700/90" : "",
                                  dp.changePercent === 0 ? "text-slate-500/90" : ""
                                ])}"${_scopeId4}><span${_scopeId4}>${ssrInterpolate(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(dp.value) + "\u20BD")}</span><span${_scopeId4}> (${ssrInterpolate(dp.changePercent)}%) </span></div>`);
                              } else {
                                return [
                                  createVNode("div", {
                                    class: [
                                      "flex justify-center items-center gap-1",
                                      dp.changePercent < 0 ? "text-red-600/90" : "",
                                      dp.changePercent > 0 ? "text-green-700/90" : "",
                                      dp.changePercent === 0 ? "text-slate-500/90" : ""
                                    ]
                                  }, [
                                    createVNode("span", null, toDisplayString(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(dp.value) + "\u20BD"), 1),
                                    createVNode("span", null, " (" + toDisplayString(dp.changePercent) + "%) ", 1)
                                  ], 2)
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                        });
                        _push4(`<!--]-->`);
                      } else {
                        return [
                          createVNode(_component_UiTableCell, null, {
                            default: withCtx(() => [
                              createTextVNode("\u041E\u0442\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u043D\u044B\u0435 \u0437\u0430\u043A\u0430\u0437\u044B")
                            ]),
                            _: 1
                          }),
                          (openBlock(true), createBlock(Fragment, null, renderList(incomeSendDeals.value, (dp, i) => {
                            return openBlock(), createBlock(_component_UiTableCell, {
                              key: i,
                              class: "text-center"
                            }, {
                              default: withCtx(() => [
                                createVNode("div", {
                                  class: [
                                    "flex justify-center items-center gap-1",
                                    dp.changePercent < 0 ? "text-red-600/90" : "",
                                    dp.changePercent > 0 ? "text-green-700/90" : "",
                                    dp.changePercent === 0 ? "text-slate-500/90" : ""
                                  ]
                                }, [
                                  createVNode("span", null, toDisplayString(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(dp.value) + "\u20BD"), 1),
                                  createVNode("span", null, " (" + toDisplayString(dp.changePercent) + "%) ", 1)
                                ], 2)
                              ]),
                              _: 2
                            }, 1024);
                          }), 128))
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_UiTableRow, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_UiTableCell, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`\u0412\u044B\u0440\u0443\u0447\u043A\u0430`);
                            } else {
                              return [
                                createTextVNode("\u0412\u044B\u0440\u0443\u0447\u043A\u0430")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(`<!--[-->`);
                        ssrRenderList(incomeRevenue.value, (dp, i) => {
                          _push4(ssrRenderComponent(_component_UiTableCell, {
                            key: i,
                            class: "text-center"
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`<div class="${ssrRenderClass([
                                  "flex justify-center items-center gap-1",
                                  dp.changePercent < 0 ? "text-red-600/90" : "",
                                  dp.changePercent > 0 ? "text-green-700/90" : "",
                                  dp.changePercent === 0 ? "text-slate-500/90" : ""
                                ])}"${_scopeId4}><span${_scopeId4}>${ssrInterpolate(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(dp.value) + "\u20BD")}</span><span${_scopeId4}> (${ssrInterpolate(dp.changePercent)}%) </span></div>`);
                              } else {
                                return [
                                  createVNode("div", {
                                    class: [
                                      "flex justify-center items-center gap-1",
                                      dp.changePercent < 0 ? "text-red-600/90" : "",
                                      dp.changePercent > 0 ? "text-green-700/90" : "",
                                      dp.changePercent === 0 ? "text-slate-500/90" : ""
                                    ]
                                  }, [
                                    createVNode("span", null, toDisplayString(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(dp.value) + "\u20BD"), 1),
                                    createVNode("span", null, " (" + toDisplayString(dp.changePercent) + "%) ", 1)
                                  ], 2)
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                        });
                        _push4(`<!--]-->`);
                      } else {
                        return [
                          createVNode(_component_UiTableCell, null, {
                            default: withCtx(() => [
                              createTextVNode("\u0412\u044B\u0440\u0443\u0447\u043A\u0430")
                            ]),
                            _: 1
                          }),
                          (openBlock(true), createBlock(Fragment, null, renderList(incomeRevenue.value, (dp, i) => {
                            return openBlock(), createBlock(_component_UiTableCell, {
                              key: i,
                              class: "text-center"
                            }, {
                              default: withCtx(() => [
                                createVNode("div", {
                                  class: [
                                    "flex justify-center items-center gap-1",
                                    dp.changePercent < 0 ? "text-red-600/90" : "",
                                    dp.changePercent > 0 ? "text-green-700/90" : "",
                                    dp.changePercent === 0 ? "text-slate-500/90" : ""
                                  ]
                                }, [
                                  createVNode("span", null, toDisplayString(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(dp.value) + "\u20BD"), 1),
                                  createVNode("span", null, " (" + toDisplayString(dp.changePercent) + "%) ", 1)
                                ], 2)
                              ]),
                              _: 2
                            }, 1024);
                          }), 128))
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_UiTableRow, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_UiTableCell, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`\u0427\u0438\u0441\u0442\u0430\u044F \u043F\u0440\u0438\u0431\u044B\u043B\u044C`);
                            } else {
                              return [
                                createTextVNode("\u0427\u0438\u0441\u0442\u0430\u044F \u043F\u0440\u0438\u0431\u044B\u043B\u044C")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(`<!--[-->`);
                        ssrRenderList(incomeNetProfit.value, (dp, i) => {
                          _push4(ssrRenderComponent(_component_UiTableCell, {
                            key: `net-profit-${i}`,
                            class: "text-center"
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`<div class="${ssrRenderClass([
                                  "flex justify-center items-center gap-1",
                                  dp.value < 0 ? "text-red-600/90" : "",
                                  dp.value > 0 ? "text-green-700/90" : "",
                                  dp.value === 0 ? "text-slate-500/90" : ""
                                ])}"${_scopeId4}><span${_scopeId4}>${ssrInterpolate(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(dp.value) + "\u20BD")}</span></div>`);
                              } else {
                                return [
                                  createVNode("div", {
                                    class: [
                                      "flex justify-center items-center gap-1",
                                      dp.value < 0 ? "text-red-600/90" : "",
                                      dp.value > 0 ? "text-green-700/90" : "",
                                      dp.value === 0 ? "text-slate-500/90" : ""
                                    ]
                                  }, [
                                    createVNode("span", null, toDisplayString(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(dp.value) + "\u20BD"), 1)
                                  ], 2)
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                        });
                        _push4(`<!--]-->`);
                      } else {
                        return [
                          createVNode(_component_UiTableCell, null, {
                            default: withCtx(() => [
                              createTextVNode("\u0427\u0438\u0441\u0442\u0430\u044F \u043F\u0440\u0438\u0431\u044B\u043B\u044C")
                            ]),
                            _: 1
                          }),
                          (openBlock(true), createBlock(Fragment, null, renderList(incomeNetProfit.value, (dp, i) => {
                            return openBlock(), createBlock(_component_UiTableCell, {
                              key: `net-profit-${i}`,
                              class: "text-center"
                            }, {
                              default: withCtx(() => [
                                createVNode("div", {
                                  class: [
                                    "flex justify-center items-center gap-1",
                                    dp.value < 0 ? "text-red-600/90" : "",
                                    dp.value > 0 ? "text-green-700/90" : "",
                                    dp.value === 0 ? "text-slate-500/90" : ""
                                  ]
                                }, [
                                  createVNode("span", null, toDisplayString(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(dp.value) + "\u20BD"), 1)
                                ], 2)
                              ]),
                              _: 2
                            }, 1024);
                          }), 128))
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UiTableRow, null, {
                      default: withCtx(() => [
                        createVNode(_component_UiTableCell, null, {
                          default: withCtx(() => [
                            createTextVNode("\u041E\u0444\u043E\u0440\u043C\u043B\u0435\u043D\u043D\u044B\u0435 \u0437\u0430\u043A\u0430\u0437\u044B")
                          ]),
                          _: 1
                        }),
                        (openBlock(true), createBlock(Fragment, null, renderList(incomeAllDealsPrice.value, (dp, i) => {
                          return openBlock(), createBlock(_component_UiTableCell, {
                            key: i,
                            class: "text-center"
                          }, {
                            default: withCtx(() => [
                              createVNode("div", {
                                class: [
                                  "flex justify-center items-center gap-1",
                                  dp.changePercent < 0 ? "text-red-600/90" : "",
                                  dp.changePercent > 0 ? "text-green-700/90" : "",
                                  dp.changePercent === 0 ? "text-slate-500/90" : ""
                                ]
                              }, [
                                createVNode("span", null, toDisplayString(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(dp.value) + "\u20BD"), 1),
                                createVNode("span", null, " (" + toDisplayString(dp.changePercent) + "%) ", 1)
                              ], 2)
                            ]),
                            _: 2
                          }, 1024);
                        }), 128))
                      ]),
                      _: 1
                    }),
                    createVNode(_component_UiTableRow, null, {
                      default: withCtx(() => [
                        createVNode(_component_UiTableCell, null, {
                          default: withCtx(() => [
                            createTextVNode("\u041E\u0442\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u043D\u044B\u0435 \u0437\u0430\u043A\u0430\u0437\u044B")
                          ]),
                          _: 1
                        }),
                        (openBlock(true), createBlock(Fragment, null, renderList(incomeSendDeals.value, (dp, i) => {
                          return openBlock(), createBlock(_component_UiTableCell, {
                            key: i,
                            class: "text-center"
                          }, {
                            default: withCtx(() => [
                              createVNode("div", {
                                class: [
                                  "flex justify-center items-center gap-1",
                                  dp.changePercent < 0 ? "text-red-600/90" : "",
                                  dp.changePercent > 0 ? "text-green-700/90" : "",
                                  dp.changePercent === 0 ? "text-slate-500/90" : ""
                                ]
                              }, [
                                createVNode("span", null, toDisplayString(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(dp.value) + "\u20BD"), 1),
                                createVNode("span", null, " (" + toDisplayString(dp.changePercent) + "%) ", 1)
                              ], 2)
                            ]),
                            _: 2
                          }, 1024);
                        }), 128))
                      ]),
                      _: 1
                    }),
                    createVNode(_component_UiTableRow, null, {
                      default: withCtx(() => [
                        createVNode(_component_UiTableCell, null, {
                          default: withCtx(() => [
                            createTextVNode("\u0412\u044B\u0440\u0443\u0447\u043A\u0430")
                          ]),
                          _: 1
                        }),
                        (openBlock(true), createBlock(Fragment, null, renderList(incomeRevenue.value, (dp, i) => {
                          return openBlock(), createBlock(_component_UiTableCell, {
                            key: i,
                            class: "text-center"
                          }, {
                            default: withCtx(() => [
                              createVNode("div", {
                                class: [
                                  "flex justify-center items-center gap-1",
                                  dp.changePercent < 0 ? "text-red-600/90" : "",
                                  dp.changePercent > 0 ? "text-green-700/90" : "",
                                  dp.changePercent === 0 ? "text-slate-500/90" : ""
                                ]
                              }, [
                                createVNode("span", null, toDisplayString(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(dp.value) + "\u20BD"), 1),
                                createVNode("span", null, " (" + toDisplayString(dp.changePercent) + "%) ", 1)
                              ], 2)
                            ]),
                            _: 2
                          }, 1024);
                        }), 128))
                      ]),
                      _: 1
                    }),
                    createVNode(_component_UiTableRow, null, {
                      default: withCtx(() => [
                        createVNode(_component_UiTableCell, null, {
                          default: withCtx(() => [
                            createTextVNode("\u0427\u0438\u0441\u0442\u0430\u044F \u043F\u0440\u0438\u0431\u044B\u043B\u044C")
                          ]),
                          _: 1
                        }),
                        (openBlock(true), createBlock(Fragment, null, renderList(incomeNetProfit.value, (dp, i) => {
                          return openBlock(), createBlock(_component_UiTableCell, {
                            key: `net-profit-${i}`,
                            class: "text-center"
                          }, {
                            default: withCtx(() => [
                              createVNode("div", {
                                class: [
                                  "flex justify-center items-center gap-1",
                                  dp.value < 0 ? "text-red-600/90" : "",
                                  dp.value > 0 ? "text-green-700/90" : "",
                                  dp.value === 0 ? "text-slate-500/90" : ""
                                ]
                              }, [
                                createVNode("span", null, toDisplayString(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(dp.value) + "\u20BD"), 1)
                              ], 2)
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
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UiTableHeader, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UiTableRow, { class: "text-xl text-center font-semibold bg-white hover:bg-white py-1 pb-2 border-t-1 rounded-t-xl" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_UiTableHead, {
                          colspan: "5",
                          class: "text-center h-4"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_UiTableHead, {
                            colspan: "5",
                            class: "text-center h-4"
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UiTableRow, { class: "text-xl text-center font-semibold bg-white hover:bg-white py-1 pb-2 border-t-1 rounded-t-xl" }, {
                      default: withCtx(() => [
                        createVNode(_component_UiTableHead, {
                          colspan: "5",
                          class: "text-center h-4"
                        })
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UiTableHeader, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UiTableRow, { class: "bg-slate-200 hover:bg-slate-200" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_UiTableHead, { class: "text-xl" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`\u0420\u0430\u0441\u0445\u043E\u0434\u044B `);
                            } else {
                              return [
                                createTextVNode("\u0420\u0430\u0441\u0445\u043E\u0434\u044B ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(`<!--[-->`);
                        ssrRenderList(periods.value, (per, i) => {
                          _push4(ssrRenderComponent(_component_UiTableHead, {
                            key: i,
                            class: "text-center"
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`${ssrInterpolate(per)}`);
                              } else {
                                return [
                                  createTextVNode(toDisplayString(per), 1)
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                        });
                        _push4(`<!--]-->`);
                      } else {
                        return [
                          createVNode(_component_UiTableHead, { class: "text-xl" }, {
                            default: withCtx(() => [
                              createTextVNode("\u0420\u0430\u0441\u0445\u043E\u0434\u044B ")
                            ]),
                            _: 1
                          }),
                          (openBlock(true), createBlock(Fragment, null, renderList(periods.value, (per, i) => {
                            return openBlock(), createBlock(_component_UiTableHead, {
                              key: i,
                              class: "text-center"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(per), 1)
                              ]),
                              _: 2
                            }, 1024);
                          }), 128))
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UiTableRow, { class: "bg-slate-200 hover:bg-slate-200" }, {
                      default: withCtx(() => [
                        createVNode(_component_UiTableHead, { class: "text-xl" }, {
                          default: withCtx(() => [
                            createTextVNode("\u0420\u0430\u0441\u0445\u043E\u0434\u044B ")
                          ]),
                          _: 1
                        }),
                        (openBlock(true), createBlock(Fragment, null, renderList(periods.value, (per, i) => {
                          return openBlock(), createBlock(_component_UiTableHead, {
                            key: i,
                            class: "text-center"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(per), 1)
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
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UiTableBody, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<!--[-->`);
                  ssrRenderList(expenses.value.totals.data, (item, i) => {
                    _push3(ssrRenderComponent(_component_UiTableRow, { key: i }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_UiTableCell, null, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`<div${_scopeId4}><span${_scopeId4}>${ssrInterpolate(item.title)}</span></div>`);
                              } else {
                                return [
                                  createVNode("div", null, [
                                    createVNode("span", null, toDisplayString(item.title), 1)
                                  ])
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                          _push4(`<!--[-->`);
                          ssrRenderList(item.data, (dp, j) => {
                            _push4(ssrRenderComponent(_component_UiTableCell, {
                              key: j,
                              class: "text-center"
                            }, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(`<div class="${ssrRenderClass(["flex justify-center items-center gap-1"])}"${_scopeId4}><span${_scopeId4}>${ssrInterpolate(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(+dp.value.toFixed(2)) + "\u20BD")}</span><span${_scopeId4}> (${ssrInterpolate(dp.changePercent)}%) </span></div>`);
                                } else {
                                  return [
                                    createVNode("div", { class: ["flex justify-center items-center gap-1"] }, [
                                      createVNode("span", null, toDisplayString(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(+dp.value.toFixed(2)) + "\u20BD"), 1),
                                      createVNode("span", null, " (" + toDisplayString(dp.changePercent) + "%) ", 1)
                                    ])
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                          });
                          _push4(`<!--]-->`);
                        } else {
                          return [
                            createVNode(_component_UiTableCell, null, {
                              default: withCtx(() => [
                                createVNode("div", null, [
                                  createVNode("span", null, toDisplayString(item.title), 1)
                                ])
                              ]),
                              _: 2
                            }, 1024),
                            (openBlock(true), createBlock(Fragment, null, renderList(item.data, (dp, j) => {
                              return openBlock(), createBlock(_component_UiTableCell, {
                                key: j,
                                class: "text-center"
                              }, {
                                default: withCtx(() => [
                                  createVNode("div", { class: ["flex justify-center items-center gap-1"] }, [
                                    createVNode("span", null, toDisplayString(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(+dp.value.toFixed(2)) + "\u20BD"), 1),
                                    createVNode("span", null, " (" + toDisplayString(dp.changePercent) + "%) ", 1)
                                  ])
                                ]),
                                _: 2
                              }, 1024);
                            }), 128))
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  });
                  _push3(`<!--]-->`);
                  _push3(ssrRenderComponent(_component_UiTableRow, { class: "text-center bg-slate-300 hover:bg-slate-300" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_UiTableCell, { class: "font-bold text-left" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` \u0418\u0422\u041E\u0413\u041E `);
                            } else {
                              return [
                                createTextVNode(" \u0418\u0422\u041E\u0413\u041E ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(`<!--[-->`);
                        ssrRenderList(expenses.value.totals.totals, (total, k) => {
                          _push4(ssrRenderComponent(_component_UiTableCell, { key: k }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              var _a, _b;
                              if (_push5) {
                                _push5(`<span${_scopeId4}>${ssrInterpolate(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(+total.value.toFixed(2)) + "\u20BD")}</span><span${_scopeId4}> (${ssrInterpolate(((_a = total.changePercent) != null ? _a : 0).toFixed(2))}%) </span>`);
                              } else {
                                return [
                                  createVNode("span", null, toDisplayString(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(+total.value.toFixed(2)) + "\u20BD"), 1),
                                  createVNode("span", null, " (" + toDisplayString(((_b = total.changePercent) != null ? _b : 0).toFixed(2)) + "%) ", 1)
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                        });
                        _push4(`<!--]-->`);
                      } else {
                        return [
                          createVNode(_component_UiTableCell, { class: "font-bold text-left" }, {
                            default: withCtx(() => [
                              createTextVNode(" \u0418\u0422\u041E\u0413\u041E ")
                            ]),
                            _: 1
                          }),
                          (openBlock(true), createBlock(Fragment, null, renderList(expenses.value.totals.totals, (total, k) => {
                            return openBlock(), createBlock(_component_UiTableCell, { key: k }, {
                              default: withCtx(() => {
                                var _a;
                                return [
                                  createVNode("span", null, toDisplayString(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(+total.value.toFixed(2)) + "\u20BD"), 1),
                                  createVNode("span", null, " (" + toDisplayString(((_a = total.changePercent) != null ? _a : 0).toFixed(2)) + "%) ", 1)
                                ];
                              }),
                              _: 2
                            }, 1024);
                          }), 128))
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    (openBlock(true), createBlock(Fragment, null, renderList(expenses.value.totals.data, (item, i) => {
                      return openBlock(), createBlock(_component_UiTableRow, { key: i }, {
                        default: withCtx(() => [
                          createVNode(_component_UiTableCell, null, {
                            default: withCtx(() => [
                              createVNode("div", null, [
                                createVNode("span", null, toDisplayString(item.title), 1)
                              ])
                            ]),
                            _: 2
                          }, 1024),
                          (openBlock(true), createBlock(Fragment, null, renderList(item.data, (dp, j) => {
                            return openBlock(), createBlock(_component_UiTableCell, {
                              key: j,
                              class: "text-center"
                            }, {
                              default: withCtx(() => [
                                createVNode("div", { class: ["flex justify-center items-center gap-1"] }, [
                                  createVNode("span", null, toDisplayString(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(+dp.value.toFixed(2)) + "\u20BD"), 1),
                                  createVNode("span", null, " (" + toDisplayString(dp.changePercent) + "%) ", 1)
                                ])
                              ]),
                              _: 2
                            }, 1024);
                          }), 128))
                        ]),
                        _: 2
                      }, 1024);
                    }), 128)),
                    createVNode(_component_UiTableRow, { class: "text-center bg-slate-300 hover:bg-slate-300" }, {
                      default: withCtx(() => [
                        createVNode(_component_UiTableCell, { class: "font-bold text-left" }, {
                          default: withCtx(() => [
                            createTextVNode(" \u0418\u0422\u041E\u0413\u041E ")
                          ]),
                          _: 1
                        }),
                        (openBlock(true), createBlock(Fragment, null, renderList(expenses.value.totals.totals, (total, k) => {
                          return openBlock(), createBlock(_component_UiTableCell, { key: k }, {
                            default: withCtx(() => {
                              var _a;
                              return [
                                createVNode("span", null, toDisplayString(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(+total.value.toFixed(2)) + "\u20BD"), 1),
                                createVNode("span", null, " (" + toDisplayString(((_a = total.changePercent) != null ? _a : 0).toFixed(2)) + "%) ", 1)
                              ];
                            }),
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
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UiTableHeader, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UiTableRow, { class: "text-xl text-center font-semibold bg-white hover:bg-white py-1 pb-2 border-t-1 rounded-t-xl" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_UiTableHead, {
                          colspan: "5",
                          class: "text-center h-4"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_UiTableHead, {
                            colspan: "5",
                            class: "text-center h-4"
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UiTableRow, { class: "text-xl text-center font-semibold bg-white hover:bg-white py-1 pb-2 border-t-1 rounded-t-xl" }, {
                      default: withCtx(() => [
                        createVNode(_component_UiTableHead, {
                          colspan: "5",
                          class: "text-center h-4"
                        })
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UiTableHeader, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UiTableRow, { class: "text-xl text-center font-semibold bg-gray-300 hover:bg-gray-300 py-1 pb-2 border-t-1 rounded-t-xl" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_UiTableHead, {
                          colspan: "5",
                          class: "text-center"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` \u041E\u0442\u0434\u0435\u043B \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0441\u0442\u0432\u0430 `);
                            } else {
                              return [
                                createTextVNode(" \u041E\u0442\u0434\u0435\u043B \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0441\u0442\u0432\u0430 ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_UiTableHead, {
                            colspan: "5",
                            class: "text-center"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" \u041E\u0442\u0434\u0435\u043B \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0441\u0442\u0432\u0430 ")
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
                    createVNode(_component_UiTableRow, { class: "text-xl text-center font-semibold bg-gray-300 hover:bg-gray-300 py-1 pb-2 border-t-1 rounded-t-xl" }, {
                      default: withCtx(() => [
                        createVNode(_component_UiTableHead, {
                          colspan: "5",
                          class: "text-center"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" \u041E\u0442\u0434\u0435\u043B \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0441\u0442\u0432\u0430 ")
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
            _push2(ssrRenderComponent(_component_UiTableHeader, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UiTableRow, { class: "bg-slate-200 hover:bg-slate-200" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_UiTableHead, { class: "text-xl" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`\u0420\u0430\u0441\u0445\u043E\u0434\u044B \u043D\u0430 \u043F\u043E\u0441\u0442\u0430\u0432\u043A\u0438 `);
                            } else {
                              return [
                                createTextVNode("\u0420\u0430\u0441\u0445\u043E\u0434\u044B \u043D\u0430 \u043F\u043E\u0441\u0442\u0430\u0432\u043A\u0438 ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(`<!--[-->`);
                        ssrRenderList(periods.value, (per, i) => {
                          _push4(ssrRenderComponent(_component_UiTableHead, {
                            key: i,
                            class: "text-center"
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`${ssrInterpolate(per)}`);
                              } else {
                                return [
                                  createTextVNode(toDisplayString(per), 1)
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                        });
                        _push4(`<!--]-->`);
                      } else {
                        return [
                          createVNode(_component_UiTableHead, { class: "text-xl" }, {
                            default: withCtx(() => [
                              createTextVNode("\u0420\u0430\u0441\u0445\u043E\u0434\u044B \u043D\u0430 \u043F\u043E\u0441\u0442\u0430\u0432\u043A\u0438 ")
                            ]),
                            _: 1
                          }),
                          (openBlock(true), createBlock(Fragment, null, renderList(periods.value, (per, i) => {
                            return openBlock(), createBlock(_component_UiTableHead, {
                              key: i,
                              class: "text-center"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(per), 1)
                              ]),
                              _: 2
                            }, 1024);
                          }), 128))
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UiTableRow, { class: "bg-slate-200 hover:bg-slate-200" }, {
                      default: withCtx(() => [
                        createVNode(_component_UiTableHead, { class: "text-xl" }, {
                          default: withCtx(() => [
                            createTextVNode("\u0420\u0430\u0441\u0445\u043E\u0434\u044B \u043D\u0430 \u043F\u043E\u0441\u0442\u0430\u0432\u043A\u0438 ")
                          ]),
                          _: 1
                        }),
                        (openBlock(true), createBlock(Fragment, null, renderList(periods.value, (per, i) => {
                          return openBlock(), createBlock(_component_UiTableHead, {
                            key: i,
                            class: "text-center"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(per), 1)
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
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UiTableBody, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<!--[-->`);
                  ssrRenderList(expenses.value.production.supplies.data, (item, idx) => {
                    _push3(ssrRenderComponent(_component_UiTableRow, { key: idx }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_UiTableCell, null, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`${ssrInterpolate(item.category)}`);
                              } else {
                                return [
                                  createTextVNode(toDisplayString(item.category), 1)
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                          _push4(`<!--[-->`);
                          ssrRenderList(item.data, (dp, i) => {
                            _push4(ssrRenderComponent(_component_UiTableCell, {
                              key: i,
                              class: "text-center"
                            }, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(`<div class="${ssrRenderClass(["flex justify-center items-center gap-1"])}"${_scopeId4}><span${_scopeId4}>${ssrInterpolate(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(+dp.value.toFixed(2)) + "\u20BD")}</span><span${_scopeId4}> (${ssrInterpolate(dp.changePercent)}%) </span></div>`);
                                } else {
                                  return [
                                    createVNode("div", { class: ["flex justify-center items-center gap-1"] }, [
                                      createVNode("span", null, toDisplayString(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(+dp.value.toFixed(2)) + "\u20BD"), 1),
                                      createVNode("span", null, " (" + toDisplayString(dp.changePercent) + "%) ", 1)
                                    ])
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                          });
                          _push4(`<!--]-->`);
                        } else {
                          return [
                            createVNode(_component_UiTableCell, null, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(item.category), 1)
                              ]),
                              _: 2
                            }, 1024),
                            (openBlock(true), createBlock(Fragment, null, renderList(item.data, (dp, i) => {
                              return openBlock(), createBlock(_component_UiTableCell, {
                                key: i,
                                class: "text-center"
                              }, {
                                default: withCtx(() => [
                                  createVNode("div", { class: ["flex justify-center items-center gap-1"] }, [
                                    createVNode("span", null, toDisplayString(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(+dp.value.toFixed(2)) + "\u20BD"), 1),
                                    createVNode("span", null, " (" + toDisplayString(dp.changePercent) + "%) ", 1)
                                  ])
                                ]),
                                _: 2
                              }, 1024);
                            }), 128))
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  });
                  _push3(`<!--]-->`);
                  _push3(ssrRenderComponent(_component_UiTableRow, { class: "text-center bg-slate-300 hover:bg-slate-300" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_UiTableCell, { class: "font-bold text-left" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` \u0418\u0422\u041E\u0413\u041E `);
                            } else {
                              return [
                                createTextVNode(" \u0418\u0422\u041E\u0413\u041E ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(`<!--[-->`);
                        ssrRenderList(expenses.value.production.supplies.totals, (total, idx2) => {
                          _push4(ssrRenderComponent(_component_UiTableCell, { key: idx2 }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              var _a, _b;
                              if (_push5) {
                                _push5(`<span${_scopeId4}>${ssrInterpolate(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(+total.value.toFixed(2)) + "\u20BD")}</span><span${_scopeId4}> (${ssrInterpolate(((_a = total.changePercent) != null ? _a : 0).toFixed(2))}%) </span>`);
                              } else {
                                return [
                                  createVNode("span", null, toDisplayString(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(+total.value.toFixed(2)) + "\u20BD"), 1),
                                  createVNode("span", null, " (" + toDisplayString(((_b = total.changePercent) != null ? _b : 0).toFixed(2)) + "%) ", 1)
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                        });
                        _push4(`<!--]-->`);
                      } else {
                        return [
                          createVNode(_component_UiTableCell, { class: "font-bold text-left" }, {
                            default: withCtx(() => [
                              createTextVNode(" \u0418\u0422\u041E\u0413\u041E ")
                            ]),
                            _: 1
                          }),
                          (openBlock(true), createBlock(Fragment, null, renderList(expenses.value.production.supplies.totals, (total, idx2) => {
                            return openBlock(), createBlock(_component_UiTableCell, { key: idx2 }, {
                              default: withCtx(() => {
                                var _a;
                                return [
                                  createVNode("span", null, toDisplayString(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(+total.value.toFixed(2)) + "\u20BD"), 1),
                                  createVNode("span", null, " (" + toDisplayString(((_a = total.changePercent) != null ? _a : 0).toFixed(2)) + "%) ", 1)
                                ];
                              }),
                              _: 2
                            }, 1024);
                          }), 128))
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    (openBlock(true), createBlock(Fragment, null, renderList(expenses.value.production.supplies.data, (item, idx) => {
                      return openBlock(), createBlock(_component_UiTableRow, { key: idx }, {
                        default: withCtx(() => [
                          createVNode(_component_UiTableCell, null, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(item.category), 1)
                            ]),
                            _: 2
                          }, 1024),
                          (openBlock(true), createBlock(Fragment, null, renderList(item.data, (dp, i) => {
                            return openBlock(), createBlock(_component_UiTableCell, {
                              key: i,
                              class: "text-center"
                            }, {
                              default: withCtx(() => [
                                createVNode("div", { class: ["flex justify-center items-center gap-1"] }, [
                                  createVNode("span", null, toDisplayString(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(+dp.value.toFixed(2)) + "\u20BD"), 1),
                                  createVNode("span", null, " (" + toDisplayString(dp.changePercent) + "%) ", 1)
                                ])
                              ]),
                              _: 2
                            }, 1024);
                          }), 128))
                        ]),
                        _: 2
                      }, 1024);
                    }), 128)),
                    createVNode(_component_UiTableRow, { class: "text-center bg-slate-300 hover:bg-slate-300" }, {
                      default: withCtx(() => [
                        createVNode(_component_UiTableCell, { class: "font-bold text-left" }, {
                          default: withCtx(() => [
                            createTextVNode(" \u0418\u0422\u041E\u0413\u041E ")
                          ]),
                          _: 1
                        }),
                        (openBlock(true), createBlock(Fragment, null, renderList(expenses.value.production.supplies.totals, (total, idx2) => {
                          return openBlock(), createBlock(_component_UiTableCell, { key: idx2 }, {
                            default: withCtx(() => {
                              var _a;
                              return [
                                createVNode("span", null, toDisplayString(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(+total.value.toFixed(2)) + "\u20BD"), 1),
                                createVNode("span", null, " (" + toDisplayString(((_a = total.changePercent) != null ? _a : 0).toFixed(2)) + "%) ", 1)
                              ];
                            }),
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
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UiTableHeader, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UiTableRow, { class: "bg-slate-200 hover:bg-slate-200" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_UiTableHead, { class: "text-xl" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`\u0417\u0430\u0440\u043F\u043B\u0430\u0442\u044B \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0441\u0442\u0432\u0430 `);
                            } else {
                              return [
                                createTextVNode("\u0417\u0430\u0440\u043F\u043B\u0430\u0442\u044B \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0441\u0442\u0432\u0430 ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(`<!--[-->`);
                        ssrRenderList(periods.value, (per, i) => {
                          _push4(ssrRenderComponent(_component_UiTableHead, {
                            key: i,
                            class: "text-center"
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`${ssrInterpolate(per)}`);
                              } else {
                                return [
                                  createTextVNode(toDisplayString(per), 1)
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                        });
                        _push4(`<!--]-->`);
                      } else {
                        return [
                          createVNode(_component_UiTableHead, { class: "text-xl" }, {
                            default: withCtx(() => [
                              createTextVNode("\u0417\u0430\u0440\u043F\u043B\u0430\u0442\u044B \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0441\u0442\u0432\u0430 ")
                            ]),
                            _: 1
                          }),
                          (openBlock(true), createBlock(Fragment, null, renderList(periods.value, (per, i) => {
                            return openBlock(), createBlock(_component_UiTableHead, {
                              key: i,
                              class: "text-center"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(per), 1)
                              ]),
                              _: 2
                            }, 1024);
                          }), 128))
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UiTableRow, { class: "bg-slate-200 hover:bg-slate-200" }, {
                      default: withCtx(() => [
                        createVNode(_component_UiTableHead, { class: "text-xl" }, {
                          default: withCtx(() => [
                            createTextVNode("\u0417\u0430\u0440\u043F\u043B\u0430\u0442\u044B \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0441\u0442\u0432\u0430 ")
                          ]),
                          _: 1
                        }),
                        (openBlock(true), createBlock(Fragment, null, renderList(periods.value, (per, i) => {
                          return openBlock(), createBlock(_component_UiTableHead, {
                            key: i,
                            class: "text-center"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(per), 1)
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
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UiTableBody, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<!--[-->`);
                  ssrRenderList(expenses.value.production.productionSalaries.data, (item, idx3) => {
                    _push3(ssrRenderComponent(_component_UiTableRow, { key: idx3 }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_UiTableCell, null, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`${ssrInterpolate(item.role)}`);
                              } else {
                                return [
                                  createTextVNode(toDisplayString(item.role), 1)
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                          _push4(`<!--[-->`);
                          ssrRenderList(item.data, (dp, i) => {
                            _push4(ssrRenderComponent(_component_UiTableCell, {
                              key: i,
                              class: "text-center"
                            }, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(`<div class="${ssrRenderClass(["flex justify-center items-center gap-1"])}"${_scopeId4}><span${_scopeId4}>${ssrInterpolate(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(+dp.value.toFixed(2)) + "\u20BD")}</span><span${_scopeId4}> (${ssrInterpolate(dp.changePercent)}%) </span></div>`);
                                } else {
                                  return [
                                    createVNode("div", { class: ["flex justify-center items-center gap-1"] }, [
                                      createVNode("span", null, toDisplayString(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(+dp.value.toFixed(2)) + "\u20BD"), 1),
                                      createVNode("span", null, " (" + toDisplayString(dp.changePercent) + "%) ", 1)
                                    ])
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                          });
                          _push4(`<!--]-->`);
                        } else {
                          return [
                            createVNode(_component_UiTableCell, null, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(item.role), 1)
                              ]),
                              _: 2
                            }, 1024),
                            (openBlock(true), createBlock(Fragment, null, renderList(item.data, (dp, i) => {
                              return openBlock(), createBlock(_component_UiTableCell, {
                                key: i,
                                class: "text-center"
                              }, {
                                default: withCtx(() => [
                                  createVNode("div", { class: ["flex justify-center items-center gap-1"] }, [
                                    createVNode("span", null, toDisplayString(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(+dp.value.toFixed(2)) + "\u20BD"), 1),
                                    createVNode("span", null, " (" + toDisplayString(dp.changePercent) + "%) ", 1)
                                  ])
                                ]),
                                _: 2
                              }, 1024);
                            }), 128))
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  });
                  _push3(`<!--]-->`);
                  _push3(ssrRenderComponent(_component_UiTableRow, { class: "text-center bg-slate-300 hover:bg-slate-300" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_UiTableCell, { class: "font-bold text-left" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` \u0418\u0422\u041E\u0413\u041E `);
                            } else {
                              return [
                                createTextVNode(" \u0418\u0422\u041E\u0413\u041E ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(`<!--[-->`);
                        ssrRenderList(expenses.value.production.productionSalaries.totals, (total, idx4) => {
                          _push4(ssrRenderComponent(_component_UiTableCell, { key: idx4 }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              var _a, _b;
                              if (_push5) {
                                _push5(`<span${_scopeId4}>${ssrInterpolate(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(+total.value.toFixed(2)) + "\u20BD")}</span><span${_scopeId4}> (${ssrInterpolate(((_a = total.changePercent) != null ? _a : 0).toFixed(2))}%) </span>`);
                              } else {
                                return [
                                  createVNode("span", null, toDisplayString(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(+total.value.toFixed(2)) + "\u20BD"), 1),
                                  createVNode("span", null, " (" + toDisplayString(((_b = total.changePercent) != null ? _b : 0).toFixed(2)) + "%) ", 1)
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                        });
                        _push4(`<!--]-->`);
                      } else {
                        return [
                          createVNode(_component_UiTableCell, { class: "font-bold text-left" }, {
                            default: withCtx(() => [
                              createTextVNode(" \u0418\u0422\u041E\u0413\u041E ")
                            ]),
                            _: 1
                          }),
                          (openBlock(true), createBlock(Fragment, null, renderList(expenses.value.production.productionSalaries.totals, (total, idx4) => {
                            return openBlock(), createBlock(_component_UiTableCell, { key: idx4 }, {
                              default: withCtx(() => {
                                var _a;
                                return [
                                  createVNode("span", null, toDisplayString(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(+total.value.toFixed(2)) + "\u20BD"), 1),
                                  createVNode("span", null, " (" + toDisplayString(((_a = total.changePercent) != null ? _a : 0).toFixed(2)) + "%) ", 1)
                                ];
                              }),
                              _: 2
                            }, 1024);
                          }), 128))
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    (openBlock(true), createBlock(Fragment, null, renderList(expenses.value.production.productionSalaries.data, (item, idx3) => {
                      return openBlock(), createBlock(_component_UiTableRow, { key: idx3 }, {
                        default: withCtx(() => [
                          createVNode(_component_UiTableCell, null, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(item.role), 1)
                            ]),
                            _: 2
                          }, 1024),
                          (openBlock(true), createBlock(Fragment, null, renderList(item.data, (dp, i) => {
                            return openBlock(), createBlock(_component_UiTableCell, {
                              key: i,
                              class: "text-center"
                            }, {
                              default: withCtx(() => [
                                createVNode("div", { class: ["flex justify-center items-center gap-1"] }, [
                                  createVNode("span", null, toDisplayString(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(+dp.value.toFixed(2)) + "\u20BD"), 1),
                                  createVNode("span", null, " (" + toDisplayString(dp.changePercent) + "%) ", 1)
                                ])
                              ]),
                              _: 2
                            }, 1024);
                          }), 128))
                        ]),
                        _: 2
                      }, 1024);
                    }), 128)),
                    createVNode(_component_UiTableRow, { class: "text-center bg-slate-300 hover:bg-slate-300" }, {
                      default: withCtx(() => [
                        createVNode(_component_UiTableCell, { class: "font-bold text-left" }, {
                          default: withCtx(() => [
                            createTextVNode(" \u0418\u0422\u041E\u0413\u041E ")
                          ]),
                          _: 1
                        }),
                        (openBlock(true), createBlock(Fragment, null, renderList(expenses.value.production.productionSalaries.totals, (total, idx4) => {
                          return openBlock(), createBlock(_component_UiTableCell, { key: idx4 }, {
                            default: withCtx(() => {
                              var _a;
                              return [
                                createVNode("span", null, toDisplayString(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(+total.value.toFixed(2)) + "\u20BD"), 1),
                                createVNode("span", null, " (" + toDisplayString(((_a = total.changePercent) != null ? _a : 0).toFixed(2)) + "%) ", 1)
                              ];
                            }),
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
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UiTableHeader, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UiTableRow, { class: "text-xl text-center font-semibold bg-white hover:bg-white py-1 pb-2 border-t-1 rounded-t-xl" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_UiTableHead, {
                          colspan: "5",
                          class: "text-center h-4"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_UiTableHead, {
                            colspan: "5",
                            class: "text-center h-4"
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UiTableRow, { class: "text-xl text-center font-semibold bg-white hover:bg-white py-1 pb-2 border-t-1 rounded-t-xl" }, {
                      default: withCtx(() => [
                        createVNode(_component_UiTableHead, {
                          colspan: "5",
                          class: "text-center h-4"
                        })
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UiTableHeader, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UiTableRow, { class: "text-xl text-center font-semibold bg-gray-300 hover:bg-gray-300 py-1 pb-2 border-t-1 rounded-t-xl" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_UiTableHead, {
                          colspan: "5",
                          class: "text-center"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` \u041A\u043E\u043C\u043C\u0435\u0440\u0447\u0435\u0441\u043A\u0438\u0439 \u043E\u0442\u0434\u0435\u043B `);
                            } else {
                              return [
                                createTextVNode(" \u041A\u043E\u043C\u043C\u0435\u0440\u0447\u0435\u0441\u043A\u0438\u0439 \u043E\u0442\u0434\u0435\u043B ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_UiTableHead, {
                            colspan: "5",
                            class: "text-center"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" \u041A\u043E\u043C\u043C\u0435\u0440\u0447\u0435\u0441\u043A\u0438\u0439 \u043E\u0442\u0434\u0435\u043B ")
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
                    createVNode(_component_UiTableRow, { class: "text-xl text-center font-semibold bg-gray-300 hover:bg-gray-300 py-1 pb-2 border-t-1 rounded-t-xl" }, {
                      default: withCtx(() => [
                        createVNode(_component_UiTableHead, {
                          colspan: "5",
                          class: "text-center"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" \u041A\u043E\u043C\u043C\u0435\u0440\u0447\u0435\u0441\u043A\u0438\u0439 \u043E\u0442\u0434\u0435\u043B ")
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
            _push2(ssrRenderComponent(_component_UiTableHeader, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UiTableRow, { class: "bg-slate-200 hover:bg-slate-200" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_UiTableHead, { class: "text-xl" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`\u0420\u0430\u0441\u0445\u043E\u0434\u044B \u043D\u0430 \u0440\u0435\u043A\u043B\u0430\u043C\u0443 `);
                            } else {
                              return [
                                createTextVNode("\u0420\u0430\u0441\u0445\u043E\u0434\u044B \u043D\u0430 \u0440\u0435\u043A\u043B\u0430\u043C\u0443 ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(`<!--[-->`);
                        ssrRenderList(periods.value, (per, i) => {
                          _push4(ssrRenderComponent(_component_UiTableHead, {
                            key: i,
                            class: "text-center"
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`${ssrInterpolate(per)}`);
                              } else {
                                return [
                                  createTextVNode(toDisplayString(per), 1)
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                        });
                        _push4(`<!--]-->`);
                      } else {
                        return [
                          createVNode(_component_UiTableHead, { class: "text-xl" }, {
                            default: withCtx(() => [
                              createTextVNode("\u0420\u0430\u0441\u0445\u043E\u0434\u044B \u043D\u0430 \u0440\u0435\u043A\u043B\u0430\u043C\u0443 ")
                            ]),
                            _: 1
                          }),
                          (openBlock(true), createBlock(Fragment, null, renderList(periods.value, (per, i) => {
                            return openBlock(), createBlock(_component_UiTableHead, {
                              key: i,
                              class: "text-center"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(per), 1)
                              ]),
                              _: 2
                            }, 1024);
                          }), 128))
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UiTableRow, { class: "bg-slate-200 hover:bg-slate-200" }, {
                      default: withCtx(() => [
                        createVNode(_component_UiTableHead, { class: "text-xl" }, {
                          default: withCtx(() => [
                            createTextVNode("\u0420\u0430\u0441\u0445\u043E\u0434\u044B \u043D\u0430 \u0440\u0435\u043A\u043B\u0430\u043C\u0443 ")
                          ]),
                          _: 1
                        }),
                        (openBlock(true), createBlock(Fragment, null, renderList(periods.value, (per, i) => {
                          return openBlock(), createBlock(_component_UiTableHead, {
                            key: i,
                            class: "text-center"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(per), 1)
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
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UiTableBody, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<!--[-->`);
                  ssrRenderList(expenses.value.commercial.adExpenses.data, (item, idx5) => {
                    _push3(ssrRenderComponent(_component_UiTableRow, { key: idx5 }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_UiTableCell, null, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`${ssrInterpolate(item.title)}`);
                              } else {
                                return [
                                  createTextVNode(toDisplayString(item.title), 1)
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                          _push4(`<!--[-->`);
                          ssrRenderList(item.data, (dp, i) => {
                            _push4(ssrRenderComponent(_component_UiTableCell, {
                              key: i,
                              class: "text-center"
                            }, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(`<div class="${ssrRenderClass(["flex justify-center items-center gap-1"])}"${_scopeId4}><span${_scopeId4}>${ssrInterpolate(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(+dp.value.toFixed(2)) + "\u20BD")}</span><span${_scopeId4}> (${ssrInterpolate(dp.changePercent)}%) </span></div>`);
                                } else {
                                  return [
                                    createVNode("div", { class: ["flex justify-center items-center gap-1"] }, [
                                      createVNode("span", null, toDisplayString(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(+dp.value.toFixed(2)) + "\u20BD"), 1),
                                      createVNode("span", null, " (" + toDisplayString(dp.changePercent) + "%) ", 1)
                                    ])
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                          });
                          _push4(`<!--]-->`);
                        } else {
                          return [
                            createVNode(_component_UiTableCell, null, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(item.title), 1)
                              ]),
                              _: 2
                            }, 1024),
                            (openBlock(true), createBlock(Fragment, null, renderList(item.data, (dp, i) => {
                              return openBlock(), createBlock(_component_UiTableCell, {
                                key: i,
                                class: "text-center"
                              }, {
                                default: withCtx(() => [
                                  createVNode("div", { class: ["flex justify-center items-center gap-1"] }, [
                                    createVNode("span", null, toDisplayString(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(+dp.value.toFixed(2)) + "\u20BD"), 1),
                                    createVNode("span", null, " (" + toDisplayString(dp.changePercent) + "%) ", 1)
                                  ])
                                ]),
                                _: 2
                              }, 1024);
                            }), 128))
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  });
                  _push3(`<!--]-->`);
                  _push3(ssrRenderComponent(_component_UiTableRow, { class: "text-center bg-slate-300 hover:bg-slate-300" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_UiTableCell, { class: "font-bold text-left" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` \u0418\u0422\u041E\u0413\u041E `);
                            } else {
                              return [
                                createTextVNode(" \u0418\u0422\u041E\u0413\u041E ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(`<!--[-->`);
                        ssrRenderList(expenses.value.commercial.adExpenses.totals, (total, idx6) => {
                          _push4(ssrRenderComponent(_component_UiTableCell, { key: idx6 }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              var _a, _b;
                              if (_push5) {
                                _push5(`<span${_scopeId4}>${ssrInterpolate(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(+total.value.toFixed(2)) + "\u20BD")}</span><span${_scopeId4}> (${ssrInterpolate(((_a = total.changePercent) != null ? _a : 0).toFixed(2))}%) </span>`);
                              } else {
                                return [
                                  createVNode("span", null, toDisplayString(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(+total.value.toFixed(2)) + "\u20BD"), 1),
                                  createVNode("span", null, " (" + toDisplayString(((_b = total.changePercent) != null ? _b : 0).toFixed(2)) + "%) ", 1)
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                        });
                        _push4(`<!--]-->`);
                      } else {
                        return [
                          createVNode(_component_UiTableCell, { class: "font-bold text-left" }, {
                            default: withCtx(() => [
                              createTextVNode(" \u0418\u0422\u041E\u0413\u041E ")
                            ]),
                            _: 1
                          }),
                          (openBlock(true), createBlock(Fragment, null, renderList(expenses.value.commercial.adExpenses.totals, (total, idx6) => {
                            return openBlock(), createBlock(_component_UiTableCell, { key: idx6 }, {
                              default: withCtx(() => {
                                var _a;
                                return [
                                  createVNode("span", null, toDisplayString(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(+total.value.toFixed(2)) + "\u20BD"), 1),
                                  createVNode("span", null, " (" + toDisplayString(((_a = total.changePercent) != null ? _a : 0).toFixed(2)) + "%) ", 1)
                                ];
                              }),
                              _: 2
                            }, 1024);
                          }), 128))
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    (openBlock(true), createBlock(Fragment, null, renderList(expenses.value.commercial.adExpenses.data, (item, idx5) => {
                      return openBlock(), createBlock(_component_UiTableRow, { key: idx5 }, {
                        default: withCtx(() => [
                          createVNode(_component_UiTableCell, null, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(item.title), 1)
                            ]),
                            _: 2
                          }, 1024),
                          (openBlock(true), createBlock(Fragment, null, renderList(item.data, (dp, i) => {
                            return openBlock(), createBlock(_component_UiTableCell, {
                              key: i,
                              class: "text-center"
                            }, {
                              default: withCtx(() => [
                                createVNode("div", { class: ["flex justify-center items-center gap-1"] }, [
                                  createVNode("span", null, toDisplayString(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(+dp.value.toFixed(2)) + "\u20BD"), 1),
                                  createVNode("span", null, " (" + toDisplayString(dp.changePercent) + "%) ", 1)
                                ])
                              ]),
                              _: 2
                            }, 1024);
                          }), 128))
                        ]),
                        _: 2
                      }, 1024);
                    }), 128)),
                    createVNode(_component_UiTableRow, { class: "text-center bg-slate-300 hover:bg-slate-300" }, {
                      default: withCtx(() => [
                        createVNode(_component_UiTableCell, { class: "font-bold text-left" }, {
                          default: withCtx(() => [
                            createTextVNode(" \u0418\u0422\u041E\u0413\u041E ")
                          ]),
                          _: 1
                        }),
                        (openBlock(true), createBlock(Fragment, null, renderList(expenses.value.commercial.adExpenses.totals, (total, idx6) => {
                          return openBlock(), createBlock(_component_UiTableCell, { key: idx6 }, {
                            default: withCtx(() => {
                              var _a;
                              return [
                                createVNode("span", null, toDisplayString(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(+total.value.toFixed(2)) + "\u20BD"), 1),
                                createVNode("span", null, " (" + toDisplayString(((_a = total.changePercent) != null ? _a : 0).toFixed(2)) + "%) ", 1)
                              ];
                            }),
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
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UiTableHeader, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UiTableRow, { class: "bg-slate-200 hover:bg-slate-200" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_UiTableHead, { class: "text-xl" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`\u0417\u0430\u0440\u043F\u043B\u0430\u0442\u044B \u043A\u043E\u043C\u043C\u0435\u0440\u0447\u0435\u0441\u043A\u043E\u0433\u043E \u043E\u0442\u0434\u0435\u043B\u0430 `);
                            } else {
                              return [
                                createTextVNode("\u0417\u0430\u0440\u043F\u043B\u0430\u0442\u044B \u043A\u043E\u043C\u043C\u0435\u0440\u0447\u0435\u0441\u043A\u043E\u0433\u043E \u043E\u0442\u0434\u0435\u043B\u0430 ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(`<!--[-->`);
                        ssrRenderList(periods.value, (per, i) => {
                          _push4(ssrRenderComponent(_component_UiTableHead, {
                            key: i,
                            class: "text-center"
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`${ssrInterpolate(per)}`);
                              } else {
                                return [
                                  createTextVNode(toDisplayString(per), 1)
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                        });
                        _push4(`<!--]-->`);
                      } else {
                        return [
                          createVNode(_component_UiTableHead, { class: "text-xl" }, {
                            default: withCtx(() => [
                              createTextVNode("\u0417\u0430\u0440\u043F\u043B\u0430\u0442\u044B \u043A\u043E\u043C\u043C\u0435\u0440\u0447\u0435\u0441\u043A\u043E\u0433\u043E \u043E\u0442\u0434\u0435\u043B\u0430 ")
                            ]),
                            _: 1
                          }),
                          (openBlock(true), createBlock(Fragment, null, renderList(periods.value, (per, i) => {
                            return openBlock(), createBlock(_component_UiTableHead, {
                              key: i,
                              class: "text-center"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(per), 1)
                              ]),
                              _: 2
                            }, 1024);
                          }), 128))
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UiTableRow, { class: "bg-slate-200 hover:bg-slate-200" }, {
                      default: withCtx(() => [
                        createVNode(_component_UiTableHead, { class: "text-xl" }, {
                          default: withCtx(() => [
                            createTextVNode("\u0417\u0430\u0440\u043F\u043B\u0430\u0442\u044B \u043A\u043E\u043C\u043C\u0435\u0440\u0447\u0435\u0441\u043A\u043E\u0433\u043E \u043E\u0442\u0434\u0435\u043B\u0430 ")
                          ]),
                          _: 1
                        }),
                        (openBlock(true), createBlock(Fragment, null, renderList(periods.value, (per, i) => {
                          return openBlock(), createBlock(_component_UiTableHead, {
                            key: i,
                            class: "text-center"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(per), 1)
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
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UiTableBody, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<!--[-->`);
                  ssrRenderList(expenses.value.commercial.commercialSalaries.data, (item, idx7) => {
                    _push3(ssrRenderComponent(_component_UiTableRow, { key: idx7 }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_UiTableCell, null, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`${ssrInterpolate(item.role)}`);
                              } else {
                                return [
                                  createTextVNode(toDisplayString(item.role), 1)
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                          _push4(`<!--[-->`);
                          ssrRenderList(item.data, (dp, i) => {
                            _push4(ssrRenderComponent(_component_UiTableCell, {
                              key: i,
                              class: "text-center"
                            }, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(`<div class="${ssrRenderClass(["flex justify-center items-center gap-1"])}"${_scopeId4}><span${_scopeId4}>${ssrInterpolate(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(+dp.value.toFixed(2)) + "\u20BD")}</span><span${_scopeId4}> (${ssrInterpolate(dp.changePercent)}%) </span></div>`);
                                } else {
                                  return [
                                    createVNode("div", { class: ["flex justify-center items-center gap-1"] }, [
                                      createVNode("span", null, toDisplayString(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(+dp.value.toFixed(2)) + "\u20BD"), 1),
                                      createVNode("span", null, " (" + toDisplayString(dp.changePercent) + "%) ", 1)
                                    ])
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                          });
                          _push4(`<!--]-->`);
                        } else {
                          return [
                            createVNode(_component_UiTableCell, null, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(item.role), 1)
                              ]),
                              _: 2
                            }, 1024),
                            (openBlock(true), createBlock(Fragment, null, renderList(item.data, (dp, i) => {
                              return openBlock(), createBlock(_component_UiTableCell, {
                                key: i,
                                class: "text-center"
                              }, {
                                default: withCtx(() => [
                                  createVNode("div", { class: ["flex justify-center items-center gap-1"] }, [
                                    createVNode("span", null, toDisplayString(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(+dp.value.toFixed(2)) + "\u20BD"), 1),
                                    createVNode("span", null, " (" + toDisplayString(dp.changePercent) + "%) ", 1)
                                  ])
                                ]),
                                _: 2
                              }, 1024);
                            }), 128))
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  });
                  _push3(`<!--]-->`);
                  _push3(ssrRenderComponent(_component_UiTableRow, { class: "text-center bg-slate-300" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_UiTableCell, { class: "font-bold text-left" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` \u0418\u0422\u041E\u0413\u041E `);
                            } else {
                              return [
                                createTextVNode(" \u0418\u0422\u041E\u0413\u041E ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(`<!--[-->`);
                        ssrRenderList(expenses.value.commercial.commercialSalaries.totals, (total, idx8) => {
                          _push4(ssrRenderComponent(_component_UiTableCell, { key: idx8 }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              var _a, _b;
                              if (_push5) {
                                _push5(`<span${_scopeId4}>${ssrInterpolate(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(+total.value.toFixed(2)) + "\u20BD")}</span><span${_scopeId4}> (${ssrInterpolate(((_a = total.changePercent) != null ? _a : 0).toFixed(2))}%) </span>`);
                              } else {
                                return [
                                  createVNode("span", null, toDisplayString(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(+total.value.toFixed(2)) + "\u20BD"), 1),
                                  createVNode("span", null, " (" + toDisplayString(((_b = total.changePercent) != null ? _b : 0).toFixed(2)) + "%) ", 1)
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                        });
                        _push4(`<!--]-->`);
                      } else {
                        return [
                          createVNode(_component_UiTableCell, { class: "font-bold text-left" }, {
                            default: withCtx(() => [
                              createTextVNode(" \u0418\u0422\u041E\u0413\u041E ")
                            ]),
                            _: 1
                          }),
                          (openBlock(true), createBlock(Fragment, null, renderList(expenses.value.commercial.commercialSalaries.totals, (total, idx8) => {
                            return openBlock(), createBlock(_component_UiTableCell, { key: idx8 }, {
                              default: withCtx(() => {
                                var _a;
                                return [
                                  createVNode("span", null, toDisplayString(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(+total.value.toFixed(2)) + "\u20BD"), 1),
                                  createVNode("span", null, " (" + toDisplayString(((_a = total.changePercent) != null ? _a : 0).toFixed(2)) + "%) ", 1)
                                ];
                              }),
                              _: 2
                            }, 1024);
                          }), 128))
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    (openBlock(true), createBlock(Fragment, null, renderList(expenses.value.commercial.commercialSalaries.data, (item, idx7) => {
                      return openBlock(), createBlock(_component_UiTableRow, { key: idx7 }, {
                        default: withCtx(() => [
                          createVNode(_component_UiTableCell, null, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(item.role), 1)
                            ]),
                            _: 2
                          }, 1024),
                          (openBlock(true), createBlock(Fragment, null, renderList(item.data, (dp, i) => {
                            return openBlock(), createBlock(_component_UiTableCell, {
                              key: i,
                              class: "text-center"
                            }, {
                              default: withCtx(() => [
                                createVNode("div", { class: ["flex justify-center items-center gap-1"] }, [
                                  createVNode("span", null, toDisplayString(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(+dp.value.toFixed(2)) + "\u20BD"), 1),
                                  createVNode("span", null, " (" + toDisplayString(dp.changePercent) + "%) ", 1)
                                ])
                              ]),
                              _: 2
                            }, 1024);
                          }), 128))
                        ]),
                        _: 2
                      }, 1024);
                    }), 128)),
                    createVNode(_component_UiTableRow, { class: "text-center bg-slate-300" }, {
                      default: withCtx(() => [
                        createVNode(_component_UiTableCell, { class: "font-bold text-left" }, {
                          default: withCtx(() => [
                            createTextVNode(" \u0418\u0422\u041E\u0413\u041E ")
                          ]),
                          _: 1
                        }),
                        (openBlock(true), createBlock(Fragment, null, renderList(expenses.value.commercial.commercialSalaries.totals, (total, idx8) => {
                          return openBlock(), createBlock(_component_UiTableCell, { key: idx8 }, {
                            default: withCtx(() => {
                              var _a;
                              return [
                                createVNode("span", null, toDisplayString(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(+total.value.toFixed(2)) + "\u20BD"), 1),
                                createVNode("span", null, " (" + toDisplayString(((_a = total.changePercent) != null ? _a : 0).toFixed(2)) + "%) ", 1)
                              ];
                            }),
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
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UiTableHeader, null, {
                default: withCtx(() => [
                  createVNode(_component_UiTableRow, { class: "bg-slate-200 hover:bg-slate-200" }, {
                    default: withCtx(() => [
                      createVNode(_component_UiTableHead, { class: "text-xl" }, {
                        default: withCtx(() => [
                          createTextVNode("\u0414\u043E\u0445\u043E\u0434\u044B")
                        ]),
                        _: 1
                      }),
                      (openBlock(true), createBlock(Fragment, null, renderList(periods.value, (per, i) => {
                        return openBlock(), createBlock(_component_UiTableHead, {
                          key: i,
                          class: "text-center"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(per), 1)
                          ]),
                          _: 2
                        }, 1024);
                      }), 128))
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(_component_UiTableBody, { class: "font-semibold" }, {
                default: withCtx(() => [
                  createVNode(_component_UiTableRow, null, {
                    default: withCtx(() => [
                      createVNode(_component_UiTableCell, null, {
                        default: withCtx(() => [
                          createTextVNode("\u041E\u0444\u043E\u0440\u043C\u043B\u0435\u043D\u043D\u044B\u0435 \u0437\u0430\u043A\u0430\u0437\u044B")
                        ]),
                        _: 1
                      }),
                      (openBlock(true), createBlock(Fragment, null, renderList(incomeAllDealsPrice.value, (dp, i) => {
                        return openBlock(), createBlock(_component_UiTableCell, {
                          key: i,
                          class: "text-center"
                        }, {
                          default: withCtx(() => [
                            createVNode("div", {
                              class: [
                                "flex justify-center items-center gap-1",
                                dp.changePercent < 0 ? "text-red-600/90" : "",
                                dp.changePercent > 0 ? "text-green-700/90" : "",
                                dp.changePercent === 0 ? "text-slate-500/90" : ""
                              ]
                            }, [
                              createVNode("span", null, toDisplayString(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(dp.value) + "\u20BD"), 1),
                              createVNode("span", null, " (" + toDisplayString(dp.changePercent) + "%) ", 1)
                            ], 2)
                          ]),
                          _: 2
                        }, 1024);
                      }), 128))
                    ]),
                    _: 1
                  }),
                  createVNode(_component_UiTableRow, null, {
                    default: withCtx(() => [
                      createVNode(_component_UiTableCell, null, {
                        default: withCtx(() => [
                          createTextVNode("\u041E\u0442\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u043D\u044B\u0435 \u0437\u0430\u043A\u0430\u0437\u044B")
                        ]),
                        _: 1
                      }),
                      (openBlock(true), createBlock(Fragment, null, renderList(incomeSendDeals.value, (dp, i) => {
                        return openBlock(), createBlock(_component_UiTableCell, {
                          key: i,
                          class: "text-center"
                        }, {
                          default: withCtx(() => [
                            createVNode("div", {
                              class: [
                                "flex justify-center items-center gap-1",
                                dp.changePercent < 0 ? "text-red-600/90" : "",
                                dp.changePercent > 0 ? "text-green-700/90" : "",
                                dp.changePercent === 0 ? "text-slate-500/90" : ""
                              ]
                            }, [
                              createVNode("span", null, toDisplayString(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(dp.value) + "\u20BD"), 1),
                              createVNode("span", null, " (" + toDisplayString(dp.changePercent) + "%) ", 1)
                            ], 2)
                          ]),
                          _: 2
                        }, 1024);
                      }), 128))
                    ]),
                    _: 1
                  }),
                  createVNode(_component_UiTableRow, null, {
                    default: withCtx(() => [
                      createVNode(_component_UiTableCell, null, {
                        default: withCtx(() => [
                          createTextVNode("\u0412\u044B\u0440\u0443\u0447\u043A\u0430")
                        ]),
                        _: 1
                      }),
                      (openBlock(true), createBlock(Fragment, null, renderList(incomeRevenue.value, (dp, i) => {
                        return openBlock(), createBlock(_component_UiTableCell, {
                          key: i,
                          class: "text-center"
                        }, {
                          default: withCtx(() => [
                            createVNode("div", {
                              class: [
                                "flex justify-center items-center gap-1",
                                dp.changePercent < 0 ? "text-red-600/90" : "",
                                dp.changePercent > 0 ? "text-green-700/90" : "",
                                dp.changePercent === 0 ? "text-slate-500/90" : ""
                              ]
                            }, [
                              createVNode("span", null, toDisplayString(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(dp.value) + "\u20BD"), 1),
                              createVNode("span", null, " (" + toDisplayString(dp.changePercent) + "%) ", 1)
                            ], 2)
                          ]),
                          _: 2
                        }, 1024);
                      }), 128))
                    ]),
                    _: 1
                  }),
                  createVNode(_component_UiTableRow, null, {
                    default: withCtx(() => [
                      createVNode(_component_UiTableCell, null, {
                        default: withCtx(() => [
                          createTextVNode("\u0427\u0438\u0441\u0442\u0430\u044F \u043F\u0440\u0438\u0431\u044B\u043B\u044C")
                        ]),
                        _: 1
                      }),
                      (openBlock(true), createBlock(Fragment, null, renderList(incomeNetProfit.value, (dp, i) => {
                        return openBlock(), createBlock(_component_UiTableCell, {
                          key: `net-profit-${i}`,
                          class: "text-center"
                        }, {
                          default: withCtx(() => [
                            createVNode("div", {
                              class: [
                                "flex justify-center items-center gap-1",
                                dp.value < 0 ? "text-red-600/90" : "",
                                dp.value > 0 ? "text-green-700/90" : "",
                                dp.value === 0 ? "text-slate-500/90" : ""
                              ]
                            }, [
                              createVNode("span", null, toDisplayString(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(dp.value) + "\u20BD"), 1)
                            ], 2)
                          ]),
                          _: 2
                        }, 1024);
                      }), 128))
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(_component_UiTableHeader, null, {
                default: withCtx(() => [
                  createVNode(_component_UiTableRow, { class: "text-xl text-center font-semibold bg-white hover:bg-white py-1 pb-2 border-t-1 rounded-t-xl" }, {
                    default: withCtx(() => [
                      createVNode(_component_UiTableHead, {
                        colspan: "5",
                        class: "text-center h-4"
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(_component_UiTableHeader, null, {
                default: withCtx(() => [
                  createVNode(_component_UiTableRow, { class: "bg-slate-200 hover:bg-slate-200" }, {
                    default: withCtx(() => [
                      createVNode(_component_UiTableHead, { class: "text-xl" }, {
                        default: withCtx(() => [
                          createTextVNode("\u0420\u0430\u0441\u0445\u043E\u0434\u044B ")
                        ]),
                        _: 1
                      }),
                      (openBlock(true), createBlock(Fragment, null, renderList(periods.value, (per, i) => {
                        return openBlock(), createBlock(_component_UiTableHead, {
                          key: i,
                          class: "text-center"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(per), 1)
                          ]),
                          _: 2
                        }, 1024);
                      }), 128))
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(_component_UiTableBody, null, {
                default: withCtx(() => [
                  (openBlock(true), createBlock(Fragment, null, renderList(expenses.value.totals.data, (item, i) => {
                    return openBlock(), createBlock(_component_UiTableRow, { key: i }, {
                      default: withCtx(() => [
                        createVNode(_component_UiTableCell, null, {
                          default: withCtx(() => [
                            createVNode("div", null, [
                              createVNode("span", null, toDisplayString(item.title), 1)
                            ])
                          ]),
                          _: 2
                        }, 1024),
                        (openBlock(true), createBlock(Fragment, null, renderList(item.data, (dp, j) => {
                          return openBlock(), createBlock(_component_UiTableCell, {
                            key: j,
                            class: "text-center"
                          }, {
                            default: withCtx(() => [
                              createVNode("div", { class: ["flex justify-center items-center gap-1"] }, [
                                createVNode("span", null, toDisplayString(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(+dp.value.toFixed(2)) + "\u20BD"), 1),
                                createVNode("span", null, " (" + toDisplayString(dp.changePercent) + "%) ", 1)
                              ])
                            ]),
                            _: 2
                          }, 1024);
                        }), 128))
                      ]),
                      _: 2
                    }, 1024);
                  }), 128)),
                  createVNode(_component_UiTableRow, { class: "text-center bg-slate-300 hover:bg-slate-300" }, {
                    default: withCtx(() => [
                      createVNode(_component_UiTableCell, { class: "font-bold text-left" }, {
                        default: withCtx(() => [
                          createTextVNode(" \u0418\u0422\u041E\u0413\u041E ")
                        ]),
                        _: 1
                      }),
                      (openBlock(true), createBlock(Fragment, null, renderList(expenses.value.totals.totals, (total, k) => {
                        return openBlock(), createBlock(_component_UiTableCell, { key: k }, {
                          default: withCtx(() => {
                            var _a;
                            return [
                              createVNode("span", null, toDisplayString(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(+total.value.toFixed(2)) + "\u20BD"), 1),
                              createVNode("span", null, " (" + toDisplayString(((_a = total.changePercent) != null ? _a : 0).toFixed(2)) + "%) ", 1)
                            ];
                          }),
                          _: 2
                        }, 1024);
                      }), 128))
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(_component_UiTableHeader, null, {
                default: withCtx(() => [
                  createVNode(_component_UiTableRow, { class: "text-xl text-center font-semibold bg-white hover:bg-white py-1 pb-2 border-t-1 rounded-t-xl" }, {
                    default: withCtx(() => [
                      createVNode(_component_UiTableHead, {
                        colspan: "5",
                        class: "text-center h-4"
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(_component_UiTableHeader, null, {
                default: withCtx(() => [
                  createVNode(_component_UiTableRow, { class: "text-xl text-center font-semibold bg-gray-300 hover:bg-gray-300 py-1 pb-2 border-t-1 rounded-t-xl" }, {
                    default: withCtx(() => [
                      createVNode(_component_UiTableHead, {
                        colspan: "5",
                        class: "text-center"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" \u041E\u0442\u0434\u0435\u043B \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0441\u0442\u0432\u0430 ")
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(_component_UiTableHeader, null, {
                default: withCtx(() => [
                  createVNode(_component_UiTableRow, { class: "bg-slate-200 hover:bg-slate-200" }, {
                    default: withCtx(() => [
                      createVNode(_component_UiTableHead, { class: "text-xl" }, {
                        default: withCtx(() => [
                          createTextVNode("\u0420\u0430\u0441\u0445\u043E\u0434\u044B \u043D\u0430 \u043F\u043E\u0441\u0442\u0430\u0432\u043A\u0438 ")
                        ]),
                        _: 1
                      }),
                      (openBlock(true), createBlock(Fragment, null, renderList(periods.value, (per, i) => {
                        return openBlock(), createBlock(_component_UiTableHead, {
                          key: i,
                          class: "text-center"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(per), 1)
                          ]),
                          _: 2
                        }, 1024);
                      }), 128))
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(_component_UiTableBody, null, {
                default: withCtx(() => [
                  (openBlock(true), createBlock(Fragment, null, renderList(expenses.value.production.supplies.data, (item, idx) => {
                    return openBlock(), createBlock(_component_UiTableRow, { key: idx }, {
                      default: withCtx(() => [
                        createVNode(_component_UiTableCell, null, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(item.category), 1)
                          ]),
                          _: 2
                        }, 1024),
                        (openBlock(true), createBlock(Fragment, null, renderList(item.data, (dp, i) => {
                          return openBlock(), createBlock(_component_UiTableCell, {
                            key: i,
                            class: "text-center"
                          }, {
                            default: withCtx(() => [
                              createVNode("div", { class: ["flex justify-center items-center gap-1"] }, [
                                createVNode("span", null, toDisplayString(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(+dp.value.toFixed(2)) + "\u20BD"), 1),
                                createVNode("span", null, " (" + toDisplayString(dp.changePercent) + "%) ", 1)
                              ])
                            ]),
                            _: 2
                          }, 1024);
                        }), 128))
                      ]),
                      _: 2
                    }, 1024);
                  }), 128)),
                  createVNode(_component_UiTableRow, { class: "text-center bg-slate-300 hover:bg-slate-300" }, {
                    default: withCtx(() => [
                      createVNode(_component_UiTableCell, { class: "font-bold text-left" }, {
                        default: withCtx(() => [
                          createTextVNode(" \u0418\u0422\u041E\u0413\u041E ")
                        ]),
                        _: 1
                      }),
                      (openBlock(true), createBlock(Fragment, null, renderList(expenses.value.production.supplies.totals, (total, idx2) => {
                        return openBlock(), createBlock(_component_UiTableCell, { key: idx2 }, {
                          default: withCtx(() => {
                            var _a;
                            return [
                              createVNode("span", null, toDisplayString(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(+total.value.toFixed(2)) + "\u20BD"), 1),
                              createVNode("span", null, " (" + toDisplayString(((_a = total.changePercent) != null ? _a : 0).toFixed(2)) + "%) ", 1)
                            ];
                          }),
                          _: 2
                        }, 1024);
                      }), 128))
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(_component_UiTableHeader, null, {
                default: withCtx(() => [
                  createVNode(_component_UiTableRow, { class: "bg-slate-200 hover:bg-slate-200" }, {
                    default: withCtx(() => [
                      createVNode(_component_UiTableHead, { class: "text-xl" }, {
                        default: withCtx(() => [
                          createTextVNode("\u0417\u0430\u0440\u043F\u043B\u0430\u0442\u044B \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0441\u0442\u0432\u0430 ")
                        ]),
                        _: 1
                      }),
                      (openBlock(true), createBlock(Fragment, null, renderList(periods.value, (per, i) => {
                        return openBlock(), createBlock(_component_UiTableHead, {
                          key: i,
                          class: "text-center"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(per), 1)
                          ]),
                          _: 2
                        }, 1024);
                      }), 128))
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(_component_UiTableBody, null, {
                default: withCtx(() => [
                  (openBlock(true), createBlock(Fragment, null, renderList(expenses.value.production.productionSalaries.data, (item, idx3) => {
                    return openBlock(), createBlock(_component_UiTableRow, { key: idx3 }, {
                      default: withCtx(() => [
                        createVNode(_component_UiTableCell, null, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(item.role), 1)
                          ]),
                          _: 2
                        }, 1024),
                        (openBlock(true), createBlock(Fragment, null, renderList(item.data, (dp, i) => {
                          return openBlock(), createBlock(_component_UiTableCell, {
                            key: i,
                            class: "text-center"
                          }, {
                            default: withCtx(() => [
                              createVNode("div", { class: ["flex justify-center items-center gap-1"] }, [
                                createVNode("span", null, toDisplayString(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(+dp.value.toFixed(2)) + "\u20BD"), 1),
                                createVNode("span", null, " (" + toDisplayString(dp.changePercent) + "%) ", 1)
                              ])
                            ]),
                            _: 2
                          }, 1024);
                        }), 128))
                      ]),
                      _: 2
                    }, 1024);
                  }), 128)),
                  createVNode(_component_UiTableRow, { class: "text-center bg-slate-300 hover:bg-slate-300" }, {
                    default: withCtx(() => [
                      createVNode(_component_UiTableCell, { class: "font-bold text-left" }, {
                        default: withCtx(() => [
                          createTextVNode(" \u0418\u0422\u041E\u0413\u041E ")
                        ]),
                        _: 1
                      }),
                      (openBlock(true), createBlock(Fragment, null, renderList(expenses.value.production.productionSalaries.totals, (total, idx4) => {
                        return openBlock(), createBlock(_component_UiTableCell, { key: idx4 }, {
                          default: withCtx(() => {
                            var _a;
                            return [
                              createVNode("span", null, toDisplayString(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(+total.value.toFixed(2)) + "\u20BD"), 1),
                              createVNode("span", null, " (" + toDisplayString(((_a = total.changePercent) != null ? _a : 0).toFixed(2)) + "%) ", 1)
                            ];
                          }),
                          _: 2
                        }, 1024);
                      }), 128))
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(_component_UiTableHeader, null, {
                default: withCtx(() => [
                  createVNode(_component_UiTableRow, { class: "text-xl text-center font-semibold bg-white hover:bg-white py-1 pb-2 border-t-1 rounded-t-xl" }, {
                    default: withCtx(() => [
                      createVNode(_component_UiTableHead, {
                        colspan: "5",
                        class: "text-center h-4"
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(_component_UiTableHeader, null, {
                default: withCtx(() => [
                  createVNode(_component_UiTableRow, { class: "text-xl text-center font-semibold bg-gray-300 hover:bg-gray-300 py-1 pb-2 border-t-1 rounded-t-xl" }, {
                    default: withCtx(() => [
                      createVNode(_component_UiTableHead, {
                        colspan: "5",
                        class: "text-center"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" \u041A\u043E\u043C\u043C\u0435\u0440\u0447\u0435\u0441\u043A\u0438\u0439 \u043E\u0442\u0434\u0435\u043B ")
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(_component_UiTableHeader, null, {
                default: withCtx(() => [
                  createVNode(_component_UiTableRow, { class: "bg-slate-200 hover:bg-slate-200" }, {
                    default: withCtx(() => [
                      createVNode(_component_UiTableHead, { class: "text-xl" }, {
                        default: withCtx(() => [
                          createTextVNode("\u0420\u0430\u0441\u0445\u043E\u0434\u044B \u043D\u0430 \u0440\u0435\u043A\u043B\u0430\u043C\u0443 ")
                        ]),
                        _: 1
                      }),
                      (openBlock(true), createBlock(Fragment, null, renderList(periods.value, (per, i) => {
                        return openBlock(), createBlock(_component_UiTableHead, {
                          key: i,
                          class: "text-center"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(per), 1)
                          ]),
                          _: 2
                        }, 1024);
                      }), 128))
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(_component_UiTableBody, null, {
                default: withCtx(() => [
                  (openBlock(true), createBlock(Fragment, null, renderList(expenses.value.commercial.adExpenses.data, (item, idx5) => {
                    return openBlock(), createBlock(_component_UiTableRow, { key: idx5 }, {
                      default: withCtx(() => [
                        createVNode(_component_UiTableCell, null, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(item.title), 1)
                          ]),
                          _: 2
                        }, 1024),
                        (openBlock(true), createBlock(Fragment, null, renderList(item.data, (dp, i) => {
                          return openBlock(), createBlock(_component_UiTableCell, {
                            key: i,
                            class: "text-center"
                          }, {
                            default: withCtx(() => [
                              createVNode("div", { class: ["flex justify-center items-center gap-1"] }, [
                                createVNode("span", null, toDisplayString(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(+dp.value.toFixed(2)) + "\u20BD"), 1),
                                createVNode("span", null, " (" + toDisplayString(dp.changePercent) + "%) ", 1)
                              ])
                            ]),
                            _: 2
                          }, 1024);
                        }), 128))
                      ]),
                      _: 2
                    }, 1024);
                  }), 128)),
                  createVNode(_component_UiTableRow, { class: "text-center bg-slate-300 hover:bg-slate-300" }, {
                    default: withCtx(() => [
                      createVNode(_component_UiTableCell, { class: "font-bold text-left" }, {
                        default: withCtx(() => [
                          createTextVNode(" \u0418\u0422\u041E\u0413\u041E ")
                        ]),
                        _: 1
                      }),
                      (openBlock(true), createBlock(Fragment, null, renderList(expenses.value.commercial.adExpenses.totals, (total, idx6) => {
                        return openBlock(), createBlock(_component_UiTableCell, { key: idx6 }, {
                          default: withCtx(() => {
                            var _a;
                            return [
                              createVNode("span", null, toDisplayString(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(+total.value.toFixed(2)) + "\u20BD"), 1),
                              createVNode("span", null, " (" + toDisplayString(((_a = total.changePercent) != null ? _a : 0).toFixed(2)) + "%) ", 1)
                            ];
                          }),
                          _: 2
                        }, 1024);
                      }), 128))
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(_component_UiTableHeader, null, {
                default: withCtx(() => [
                  createVNode(_component_UiTableRow, { class: "bg-slate-200 hover:bg-slate-200" }, {
                    default: withCtx(() => [
                      createVNode(_component_UiTableHead, { class: "text-xl" }, {
                        default: withCtx(() => [
                          createTextVNode("\u0417\u0430\u0440\u043F\u043B\u0430\u0442\u044B \u043A\u043E\u043C\u043C\u0435\u0440\u0447\u0435\u0441\u043A\u043E\u0433\u043E \u043E\u0442\u0434\u0435\u043B\u0430 ")
                        ]),
                        _: 1
                      }),
                      (openBlock(true), createBlock(Fragment, null, renderList(periods.value, (per, i) => {
                        return openBlock(), createBlock(_component_UiTableHead, {
                          key: i,
                          class: "text-center"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(per), 1)
                          ]),
                          _: 2
                        }, 1024);
                      }), 128))
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(_component_UiTableBody, null, {
                default: withCtx(() => [
                  (openBlock(true), createBlock(Fragment, null, renderList(expenses.value.commercial.commercialSalaries.data, (item, idx7) => {
                    return openBlock(), createBlock(_component_UiTableRow, { key: idx7 }, {
                      default: withCtx(() => [
                        createVNode(_component_UiTableCell, null, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(item.role), 1)
                          ]),
                          _: 2
                        }, 1024),
                        (openBlock(true), createBlock(Fragment, null, renderList(item.data, (dp, i) => {
                          return openBlock(), createBlock(_component_UiTableCell, {
                            key: i,
                            class: "text-center"
                          }, {
                            default: withCtx(() => [
                              createVNode("div", { class: ["flex justify-center items-center gap-1"] }, [
                                createVNode("span", null, toDisplayString(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(+dp.value.toFixed(2)) + "\u20BD"), 1),
                                createVNode("span", null, " (" + toDisplayString(dp.changePercent) + "%) ", 1)
                              ])
                            ]),
                            _: 2
                          }, 1024);
                        }), 128))
                      ]),
                      _: 2
                    }, 1024);
                  }), 128)),
                  createVNode(_component_UiTableRow, { class: "text-center bg-slate-300" }, {
                    default: withCtx(() => [
                      createVNode(_component_UiTableCell, { class: "font-bold text-left" }, {
                        default: withCtx(() => [
                          createTextVNode(" \u0418\u0422\u041E\u0413\u041E ")
                        ]),
                        _: 1
                      }),
                      (openBlock(true), createBlock(Fragment, null, renderList(expenses.value.commercial.commercialSalaries.totals, (total, idx8) => {
                        return openBlock(), createBlock(_component_UiTableCell, { key: idx8 }, {
                          default: withCtx(() => {
                            var _a;
                            return [
                              createVNode("span", null, toDisplayString(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(+total.value.toFixed(2)) + "\u20BD"), 1),
                              createVNode("span", null, " (" + toDisplayString(((_a = total.changePercent) != null ? _a : 0).toFixed(2)) + "%) ", 1)
                            ];
                          }),
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
      }, _parent));
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/my/pnl/NeonTable.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "BookTable",
  __ssrInlineRender: true,
  props: {
    plData: {}
  },
  setup(__props) {
    var _a, _b, _c, _d, _e, _f;
    const props = __props;
    const calculateIncomeWithPercent = (data, field) => computed(
      () => data.map((item, index) => {
        var _a2, _b2, _c2;
        const currentValue = (_a2 = item[field]) != null ? _a2 : 0;
        const prevValue = (_c2 = (_b2 = data[index - 1]) == null ? void 0 : _b2[field]) != null ? _c2 : 0;
        const changePercent = index === 0 || prevValue === 0 ? 0 : +((currentValue - prevValue) / prevValue * 100).toFixed(2);
        return {
          value: currentValue,
          changePercent
        };
      })
    );
    const calculatePercentOfIncome = (data, getValue) => computed(
      () => props.plData.periods.map((period) => {
        var _a2, _b2;
        const entry = data.find((item) => item.period === period);
        const value = entry ? getValue(entry) : 0;
        const incomeValue = (_b2 = (_a2 = props.plData.income.find((item) => item.period === period)) == null ? void 0 : _a2.sendDeals) != null ? _b2 : 0;
        const percent = incomeValue === 0 ? 0 : +(value / incomeValue * 100).toFixed(2);
        return {
          period,
          value,
          percent
        };
      })
    );
    const incomeAllDealsPrice = calculateIncomeWithPercent(
      props.plData.income,
      "allDealsPrice"
    );
    const incomeSendDeals = calculateIncomeWithPercent(
      props.plData.income,
      "sendDeals"
    );
    const incomeRevenue = calculateIncomeWithPercent(
      props.plData.income,
      "revenue"
    );
    const productionExpensesShare = calculatePercentOfIncome(
      (_a = props.plData.prodExpensesByPeriod) != null ? _a : [],
      (item) => item.value
    );
    const adExpensesShare = calculatePercentOfIncome(
      (_b = props.plData.adExpenses) != null ? _b : [],
      (item) => item.value
    );
    const mopSalariesShare = calculatePercentOfIncome(
      (_c = props.plData.mopSalaries) != null ? _c : [],
      (item) => item.value
    );
    const ropSalariesShare = calculatePercentOfIncome(
      (_d = props.plData.ropSalaries) != null ? _d : [],
      (item) => item.value
    );
    const movSalariesShare = calculatePercentOfIncome(
      (_e = props.plData.movSalaries) != null ? _e : [],
      (item) => item.value
    );
    const designExpensesShare = calculatePercentOfIncome(
      (_f = props.plData.designExpensesByPeriod) != null ? _f : [],
      (item) => item.value
    );
    const totalExpensesShare = computed(
      () => props.plData.periods.map((period, index) => {
        var _a2, _b2, _c2, _d2, _e2, _f2, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _A, _B, _C, _D, _E, _F, _G, _H, _I, _J, _K;
        const prodExpense = (_c2 = (_b2 = (_a2 = props.plData.prodExpensesByPeriod) == null ? void 0 : _a2.find((item) => item.period === period)) == null ? void 0 : _b2.value) != null ? _c2 : 0;
        const adExpense = (_f2 = (_e2 = (_d2 = props.plData.adExpenses) == null ? void 0 : _d2.find((item) => item.period === period)) == null ? void 0 : _e2.value) != null ? _f2 : 0;
        const designExpense = (_i = (_h = (_g = props.plData.designExpensesByPeriod) == null ? void 0 : _g.find(
          (item) => item.period === period
        )) == null ? void 0 : _h.value) != null ? _i : 0;
        const mopSalary = (_l = (_k = (_j = props.plData.mopSalaries) == null ? void 0 : _j.find((item) => item.period === period)) == null ? void 0 : _k.value) != null ? _l : 0;
        const ropSalary = (_o = (_n = (_m = props.plData.ropSalaries) == null ? void 0 : _m.find((item) => item.period === period)) == null ? void 0 : _n.value) != null ? _o : 0;
        const movSalary = (_r = (_q = (_p = props.plData.movSalaries) == null ? void 0 : _p.find((item) => item.period === period)) == null ? void 0 : _q.value) != null ? _r : 0;
        const totalValue = prodExpense + adExpense + designExpense + mopSalary + ropSalary + movSalary;
        const incomeValue = (_t = (_s = props.plData.income.find((item) => item.period === period)) == null ? void 0 : _s.sendDeals) != null ? _t : 0;
        const percent = incomeValue === 0 ? 0 : +(totalValue / incomeValue * 100).toFixed(2);
        let isIncreased = false;
        let isDecreased = false;
        if (index > 0) {
          const prevPeriod = props.plData.periods[index - 1];
          const prevProdExpense = (_w = (_v = (_u = props.plData.prodExpensesByPeriod) == null ? void 0 : _u.find(
            (item) => item.period === prevPeriod
          )) == null ? void 0 : _v.value) != null ? _w : 0;
          const prevAdExpense = (_z = (_y = (_x = props.plData.adExpenses) == null ? void 0 : _x.find((item) => item.period === prevPeriod)) == null ? void 0 : _y.value) != null ? _z : 0;
          const prevMopSalary = (_C = (_B = (_A = props.plData.mopSalaries) == null ? void 0 : _A.find((item) => item.period === prevPeriod)) == null ? void 0 : _B.value) != null ? _C : 0;
          const prevRopSalary = (_F = (_E = (_D = props.plData.ropSalaries) == null ? void 0 : _D.find((item) => item.period === prevPeriod)) == null ? void 0 : _E.value) != null ? _F : 0;
          const prevMovSalary = (_I = (_H = (_G = props.plData.movSalaries) == null ? void 0 : _G.find((item) => item.period === prevPeriod)) == null ? void 0 : _H.value) != null ? _I : 0;
          const prevTotalValue = prevProdExpense + prevAdExpense + prevMopSalary + prevRopSalary + prevMovSalary;
          const prevIncomeValue = (_K = (_J = props.plData.income.find((item) => item.period === prevPeriod)) == null ? void 0 : _J.allDealsPrice) != null ? _K : 0;
          const prevPercent = prevIncomeValue === 0 ? 0 : +(prevTotalValue / prevIncomeValue * 100).toFixed(2);
          if (percent > prevPercent) {
            isIncreased = true;
          } else if (percent < prevPercent) {
            isDecreased = true;
          }
        }
        return {
          period,
          value: totalValue,
          percent,
          isIncreased,
          isDecreased
        };
      })
    );
    const incomeNetProfit = computed(
      () => props.plData.periods.map((period, index) => {
        var _a2, _b2, _c2, _d2, _e2, _f2, _g, _h;
        const sendDealsValue = (_b2 = (_a2 = incomeSendDeals.value[index]) == null ? void 0 : _a2.value) != null ? _b2 : 0;
        const totalExpensesValue = (_d2 = (_c2 = totalExpensesShare.value[index]) == null ? void 0 : _c2.value) != null ? _d2 : 0;
        const netProfitValue = +(sendDealsValue - totalExpensesValue).toFixed(2);
        let changePercent = 0;
        if (index > 0) {
          const prevSendDeals = (_f2 = (_e2 = incomeSendDeals.value[index - 1]) == null ? void 0 : _e2.value) != null ? _f2 : 0;
          const prevTotalExpenses = (_h = (_g = totalExpensesShare.value[index - 1]) == null ? void 0 : _g.value) != null ? _h : 0;
          const prevNetProfit = +(prevSendDeals - prevTotalExpenses).toFixed(2);
          if (prevNetProfit !== 0) {
            changePercent = +((netProfitValue - prevNetProfit) / Math.abs(prevNetProfit) * 100).toFixed(2);
          }
        }
        return {
          value: netProfitValue,
          changePercent
        };
      })
    );
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UiTable = _sfc_main$5$1;
      const _component_UiTableHeader = _sfc_main$9;
      const _component_UiTableRow = _sfc_main$2$2;
      const _component_UiTableHead = _sfc_main$1$1;
      const _component_UiTableBody = _sfc_main$4$1;
      const _component_UiTableCell = _sfc_main$3$1;
      _push(ssrRenderComponent(_component_UiTable, mergeProps({ class: "bg-slate-100 rounded-sm overflow-hidden" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a2, _b2, _c2, _d2, _e2, _f2, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x;
          if (_push2) {
            _push2(ssrRenderComponent(_component_UiTableHeader, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UiTableRow, { class: "bg-slate-200 hover:bg-slate-200" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_UiTableHead, { class: "text-xl" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`\u0414\u043E\u0445\u043E\u0434\u044B`);
                            } else {
                              return [
                                createTextVNode("\u0414\u043E\u0445\u043E\u0434\u044B")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(`<!--[-->`);
                        ssrRenderList(_ctx.plData.periods, (per, i) => {
                          _push4(ssrRenderComponent(_component_UiTableHead, {
                            key: i,
                            class: "text-center"
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`${ssrInterpolate(per)}`);
                              } else {
                                return [
                                  createTextVNode(toDisplayString(per), 1)
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                        });
                        _push4(`<!--]-->`);
                      } else {
                        return [
                          createVNode(_component_UiTableHead, { class: "text-xl" }, {
                            default: withCtx(() => [
                              createTextVNode("\u0414\u043E\u0445\u043E\u0434\u044B")
                            ]),
                            _: 1
                          }),
                          (openBlock(true), createBlock(Fragment, null, renderList(_ctx.plData.periods, (per, i) => {
                            return openBlock(), createBlock(_component_UiTableHead, {
                              key: i,
                              class: "text-center"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(per), 1)
                              ]),
                              _: 2
                            }, 1024);
                          }), 128))
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UiTableRow, { class: "bg-slate-200 hover:bg-slate-200" }, {
                      default: withCtx(() => [
                        createVNode(_component_UiTableHead, { class: "text-xl" }, {
                          default: withCtx(() => [
                            createTextVNode("\u0414\u043E\u0445\u043E\u0434\u044B")
                          ]),
                          _: 1
                        }),
                        (openBlock(true), createBlock(Fragment, null, renderList(_ctx.plData.periods, (per, i) => {
                          return openBlock(), createBlock(_component_UiTableHead, {
                            key: i,
                            class: "text-center"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(per), 1)
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
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UiTableBody, { class: "font-semibold" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UiTableRow, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_UiTableCell, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`\u041E\u0444\u043E\u0440\u043C\u043B\u0435\u043D\u043D\u044B\u0435 \u0437\u0430\u043A\u0430\u0437\u044B`);
                            } else {
                              return [
                                createTextVNode("\u041E\u0444\u043E\u0440\u043C\u043B\u0435\u043D\u043D\u044B\u0435 \u0437\u0430\u043A\u0430\u0437\u044B")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(`<!--[-->`);
                        ssrRenderList(unref(incomeAllDealsPrice), (dp, i) => {
                          _push4(ssrRenderComponent(_component_UiTableCell, {
                            key: i,
                            class: "text-center"
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`<div class="${ssrRenderClass([
                                  "flex justify-center items-center gap-1",
                                  dp.changePercent < 0 ? "text-red-600/90" : "",
                                  dp.changePercent > 0 ? "text-green-700/90" : "",
                                  dp.changePercent === 0 ? "text-slate-500/90" : ""
                                ])}"${_scopeId4}><span${_scopeId4}>${ssrInterpolate(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(dp.value) + "\u20BD")}</span><span${_scopeId4}> (${ssrInterpolate(dp.changePercent)}%) </span></div>`);
                              } else {
                                return [
                                  createVNode("div", {
                                    class: [
                                      "flex justify-center items-center gap-1",
                                      dp.changePercent < 0 ? "text-red-600/90" : "",
                                      dp.changePercent > 0 ? "text-green-700/90" : "",
                                      dp.changePercent === 0 ? "text-slate-500/90" : ""
                                    ]
                                  }, [
                                    createVNode("span", null, toDisplayString(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(dp.value) + "\u20BD"), 1),
                                    createVNode("span", null, " (" + toDisplayString(dp.changePercent) + "%) ", 1)
                                  ], 2)
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                        });
                        _push4(`<!--]-->`);
                      } else {
                        return [
                          createVNode(_component_UiTableCell, null, {
                            default: withCtx(() => [
                              createTextVNode("\u041E\u0444\u043E\u0440\u043C\u043B\u0435\u043D\u043D\u044B\u0435 \u0437\u0430\u043A\u0430\u0437\u044B")
                            ]),
                            _: 1
                          }),
                          (openBlock(true), createBlock(Fragment, null, renderList(unref(incomeAllDealsPrice), (dp, i) => {
                            return openBlock(), createBlock(_component_UiTableCell, {
                              key: i,
                              class: "text-center"
                            }, {
                              default: withCtx(() => [
                                createVNode("div", {
                                  class: [
                                    "flex justify-center items-center gap-1",
                                    dp.changePercent < 0 ? "text-red-600/90" : "",
                                    dp.changePercent > 0 ? "text-green-700/90" : "",
                                    dp.changePercent === 0 ? "text-slate-500/90" : ""
                                  ]
                                }, [
                                  createVNode("span", null, toDisplayString(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(dp.value) + "\u20BD"), 1),
                                  createVNode("span", null, " (" + toDisplayString(dp.changePercent) + "%) ", 1)
                                ], 2)
                              ]),
                              _: 2
                            }, 1024);
                          }), 128))
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_UiTableRow, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_UiTableCell, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`\u041E\u0442\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u043D\u044B\u0435 \u0437\u0430\u043A\u0430\u0437\u044B`);
                            } else {
                              return [
                                createTextVNode("\u041E\u0442\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u043D\u044B\u0435 \u0437\u0430\u043A\u0430\u0437\u044B")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(`<!--[-->`);
                        ssrRenderList(unref(incomeSendDeals), (dp, i) => {
                          _push4(ssrRenderComponent(_component_UiTableCell, {
                            key: i,
                            class: "text-center"
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`<div class="${ssrRenderClass([
                                  "flex justify-center items-center gap-1",
                                  dp.changePercent < 0 ? "text-red-600/90" : "",
                                  dp.changePercent > 0 ? "text-green-700/90" : "",
                                  dp.changePercent === 0 ? "text-slate-500/90" : ""
                                ])}"${_scopeId4}><span${_scopeId4}>${ssrInterpolate(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(dp.value) + "\u20BD")}</span><span${_scopeId4}> (${ssrInterpolate(dp.changePercent)}%) </span></div>`);
                              } else {
                                return [
                                  createVNode("div", {
                                    class: [
                                      "flex justify-center items-center gap-1",
                                      dp.changePercent < 0 ? "text-red-600/90" : "",
                                      dp.changePercent > 0 ? "text-green-700/90" : "",
                                      dp.changePercent === 0 ? "text-slate-500/90" : ""
                                    ]
                                  }, [
                                    createVNode("span", null, toDisplayString(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(dp.value) + "\u20BD"), 1),
                                    createVNode("span", null, " (" + toDisplayString(dp.changePercent) + "%) ", 1)
                                  ], 2)
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                        });
                        _push4(`<!--]-->`);
                      } else {
                        return [
                          createVNode(_component_UiTableCell, null, {
                            default: withCtx(() => [
                              createTextVNode("\u041E\u0442\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u043D\u044B\u0435 \u0437\u0430\u043A\u0430\u0437\u044B")
                            ]),
                            _: 1
                          }),
                          (openBlock(true), createBlock(Fragment, null, renderList(unref(incomeSendDeals), (dp, i) => {
                            return openBlock(), createBlock(_component_UiTableCell, {
                              key: i,
                              class: "text-center"
                            }, {
                              default: withCtx(() => [
                                createVNode("div", {
                                  class: [
                                    "flex justify-center items-center gap-1",
                                    dp.changePercent < 0 ? "text-red-600/90" : "",
                                    dp.changePercent > 0 ? "text-green-700/90" : "",
                                    dp.changePercent === 0 ? "text-slate-500/90" : ""
                                  ]
                                }, [
                                  createVNode("span", null, toDisplayString(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(dp.value) + "\u20BD"), 1),
                                  createVNode("span", null, " (" + toDisplayString(dp.changePercent) + "%) ", 1)
                                ], 2)
                              ]),
                              _: 2
                            }, 1024);
                          }), 128))
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_UiTableRow, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_UiTableCell, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`\u0412\u044B\u0440\u0443\u0447\u043A\u0430`);
                            } else {
                              return [
                                createTextVNode("\u0412\u044B\u0440\u0443\u0447\u043A\u0430")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(`<!--[-->`);
                        ssrRenderList(unref(incomeRevenue), (dp, i) => {
                          _push4(ssrRenderComponent(_component_UiTableCell, {
                            key: i,
                            class: "text-center"
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`<div class="${ssrRenderClass([
                                  "flex justify-center items-center gap-1",
                                  dp.changePercent < 0 ? "text-red-600/90" : "",
                                  dp.changePercent > 0 ? "text-green-700/90" : "",
                                  dp.changePercent === 0 ? "text-slate-500/90" : ""
                                ])}"${_scopeId4}><span${_scopeId4}>${ssrInterpolate(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(dp.value) + "\u20BD")}</span><span${_scopeId4}> (${ssrInterpolate(dp.changePercent)}%) </span></div>`);
                              } else {
                                return [
                                  createVNode("div", {
                                    class: [
                                      "flex justify-center items-center gap-1",
                                      dp.changePercent < 0 ? "text-red-600/90" : "",
                                      dp.changePercent > 0 ? "text-green-700/90" : "",
                                      dp.changePercent === 0 ? "text-slate-500/90" : ""
                                    ]
                                  }, [
                                    createVNode("span", null, toDisplayString(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(dp.value) + "\u20BD"), 1),
                                    createVNode("span", null, " (" + toDisplayString(dp.changePercent) + "%) ", 1)
                                  ], 2)
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                        });
                        _push4(`<!--]-->`);
                      } else {
                        return [
                          createVNode(_component_UiTableCell, null, {
                            default: withCtx(() => [
                              createTextVNode("\u0412\u044B\u0440\u0443\u0447\u043A\u0430")
                            ]),
                            _: 1
                          }),
                          (openBlock(true), createBlock(Fragment, null, renderList(unref(incomeRevenue), (dp, i) => {
                            return openBlock(), createBlock(_component_UiTableCell, {
                              key: i,
                              class: "text-center"
                            }, {
                              default: withCtx(() => [
                                createVNode("div", {
                                  class: [
                                    "flex justify-center items-center gap-1",
                                    dp.changePercent < 0 ? "text-red-600/90" : "",
                                    dp.changePercent > 0 ? "text-green-700/90" : "",
                                    dp.changePercent === 0 ? "text-slate-500/90" : ""
                                  ]
                                }, [
                                  createVNode("span", null, toDisplayString(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(dp.value) + "\u20BD"), 1),
                                  createVNode("span", null, " (" + toDisplayString(dp.changePercent) + "%) ", 1)
                                ], 2)
                              ]),
                              _: 2
                            }, 1024);
                          }), 128))
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_UiTableRow, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_UiTableCell, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`\u0427\u0438\u0441\u0442\u0430\u044F \u043F\u0440\u0438\u0431\u044B\u043B\u044C`);
                            } else {
                              return [
                                createTextVNode("\u0427\u0438\u0441\u0442\u0430\u044F \u043F\u0440\u0438\u0431\u044B\u043B\u044C")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(`<!--[-->`);
                        ssrRenderList(incomeNetProfit.value, (dp, i) => {
                          _push4(ssrRenderComponent(_component_UiTableCell, {
                            key: `net-profit-${i}`,
                            class: "text-center"
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`<div class="${ssrRenderClass([
                                  "flex justify-center items-center gap-1",
                                  dp.value < 0 ? "text-red-600/90" : "",
                                  dp.value > 0 ? "text-green-700/90" : "",
                                  dp.value === 0 ? "text-slate-500/90" : ""
                                ])}"${_scopeId4}><span${_scopeId4}>${ssrInterpolate(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(dp.value) + "\u20BD")}</span></div>`);
                              } else {
                                return [
                                  createVNode("div", {
                                    class: [
                                      "flex justify-center items-center gap-1",
                                      dp.value < 0 ? "text-red-600/90" : "",
                                      dp.value > 0 ? "text-green-700/90" : "",
                                      dp.value === 0 ? "text-slate-500/90" : ""
                                    ]
                                  }, [
                                    createVNode("span", null, toDisplayString(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(dp.value) + "\u20BD"), 1)
                                  ], 2)
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                        });
                        _push4(`<!--]-->`);
                      } else {
                        return [
                          createVNode(_component_UiTableCell, null, {
                            default: withCtx(() => [
                              createTextVNode("\u0427\u0438\u0441\u0442\u0430\u044F \u043F\u0440\u0438\u0431\u044B\u043B\u044C")
                            ]),
                            _: 1
                          }),
                          (openBlock(true), createBlock(Fragment, null, renderList(incomeNetProfit.value, (dp, i) => {
                            return openBlock(), createBlock(_component_UiTableCell, {
                              key: `net-profit-${i}`,
                              class: "text-center"
                            }, {
                              default: withCtx(() => [
                                createVNode("div", {
                                  class: [
                                    "flex justify-center items-center gap-1",
                                    dp.value < 0 ? "text-red-600/90" : "",
                                    dp.value > 0 ? "text-green-700/90" : "",
                                    dp.value === 0 ? "text-slate-500/90" : ""
                                  ]
                                }, [
                                  createVNode("span", null, toDisplayString(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(dp.value) + "\u20BD"), 1)
                                ], 2)
                              ]),
                              _: 2
                            }, 1024);
                          }), 128))
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UiTableRow, null, {
                      default: withCtx(() => [
                        createVNode(_component_UiTableCell, null, {
                          default: withCtx(() => [
                            createTextVNode("\u041E\u0444\u043E\u0440\u043C\u043B\u0435\u043D\u043D\u044B\u0435 \u0437\u0430\u043A\u0430\u0437\u044B")
                          ]),
                          _: 1
                        }),
                        (openBlock(true), createBlock(Fragment, null, renderList(unref(incomeAllDealsPrice), (dp, i) => {
                          return openBlock(), createBlock(_component_UiTableCell, {
                            key: i,
                            class: "text-center"
                          }, {
                            default: withCtx(() => [
                              createVNode("div", {
                                class: [
                                  "flex justify-center items-center gap-1",
                                  dp.changePercent < 0 ? "text-red-600/90" : "",
                                  dp.changePercent > 0 ? "text-green-700/90" : "",
                                  dp.changePercent === 0 ? "text-slate-500/90" : ""
                                ]
                              }, [
                                createVNode("span", null, toDisplayString(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(dp.value) + "\u20BD"), 1),
                                createVNode("span", null, " (" + toDisplayString(dp.changePercent) + "%) ", 1)
                              ], 2)
                            ]),
                            _: 2
                          }, 1024);
                        }), 128))
                      ]),
                      _: 1
                    }),
                    createVNode(_component_UiTableRow, null, {
                      default: withCtx(() => [
                        createVNode(_component_UiTableCell, null, {
                          default: withCtx(() => [
                            createTextVNode("\u041E\u0442\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u043D\u044B\u0435 \u0437\u0430\u043A\u0430\u0437\u044B")
                          ]),
                          _: 1
                        }),
                        (openBlock(true), createBlock(Fragment, null, renderList(unref(incomeSendDeals), (dp, i) => {
                          return openBlock(), createBlock(_component_UiTableCell, {
                            key: i,
                            class: "text-center"
                          }, {
                            default: withCtx(() => [
                              createVNode("div", {
                                class: [
                                  "flex justify-center items-center gap-1",
                                  dp.changePercent < 0 ? "text-red-600/90" : "",
                                  dp.changePercent > 0 ? "text-green-700/90" : "",
                                  dp.changePercent === 0 ? "text-slate-500/90" : ""
                                ]
                              }, [
                                createVNode("span", null, toDisplayString(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(dp.value) + "\u20BD"), 1),
                                createVNode("span", null, " (" + toDisplayString(dp.changePercent) + "%) ", 1)
                              ], 2)
                            ]),
                            _: 2
                          }, 1024);
                        }), 128))
                      ]),
                      _: 1
                    }),
                    createVNode(_component_UiTableRow, null, {
                      default: withCtx(() => [
                        createVNode(_component_UiTableCell, null, {
                          default: withCtx(() => [
                            createTextVNode("\u0412\u044B\u0440\u0443\u0447\u043A\u0430")
                          ]),
                          _: 1
                        }),
                        (openBlock(true), createBlock(Fragment, null, renderList(unref(incomeRevenue), (dp, i) => {
                          return openBlock(), createBlock(_component_UiTableCell, {
                            key: i,
                            class: "text-center"
                          }, {
                            default: withCtx(() => [
                              createVNode("div", {
                                class: [
                                  "flex justify-center items-center gap-1",
                                  dp.changePercent < 0 ? "text-red-600/90" : "",
                                  dp.changePercent > 0 ? "text-green-700/90" : "",
                                  dp.changePercent === 0 ? "text-slate-500/90" : ""
                                ]
                              }, [
                                createVNode("span", null, toDisplayString(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(dp.value) + "\u20BD"), 1),
                                createVNode("span", null, " (" + toDisplayString(dp.changePercent) + "%) ", 1)
                              ], 2)
                            ]),
                            _: 2
                          }, 1024);
                        }), 128))
                      ]),
                      _: 1
                    }),
                    createVNode(_component_UiTableRow, null, {
                      default: withCtx(() => [
                        createVNode(_component_UiTableCell, null, {
                          default: withCtx(() => [
                            createTextVNode("\u0427\u0438\u0441\u0442\u0430\u044F \u043F\u0440\u0438\u0431\u044B\u043B\u044C")
                          ]),
                          _: 1
                        }),
                        (openBlock(true), createBlock(Fragment, null, renderList(incomeNetProfit.value, (dp, i) => {
                          return openBlock(), createBlock(_component_UiTableCell, {
                            key: `net-profit-${i}`,
                            class: "text-center"
                          }, {
                            default: withCtx(() => [
                              createVNode("div", {
                                class: [
                                  "flex justify-center items-center gap-1",
                                  dp.value < 0 ? "text-red-600/90" : "",
                                  dp.value > 0 ? "text-green-700/90" : "",
                                  dp.value === 0 ? "text-slate-500/90" : ""
                                ]
                              }, [
                                createVNode("span", null, toDisplayString(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(dp.value) + "\u20BD"), 1)
                              ], 2)
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
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UiTableHeader, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UiTableRow, { class: "text-xl text-center font-semibold bg-white hover:bg-white py-1 pb-2 border-t-1 rounded-t-xl" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_UiTableHead, {
                          colspan: "5",
                          class: "text-center h-4"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_UiTableHead, {
                            colspan: "5",
                            class: "text-center h-4"
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UiTableRow, { class: "text-xl text-center font-semibold bg-white hover:bg-white py-1 pb-2 border-t-1 rounded-t-xl" }, {
                      default: withCtx(() => [
                        createVNode(_component_UiTableHead, {
                          colspan: "5",
                          class: "text-center h-4"
                        })
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UiTableHeader, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UiTableRow, { class: "bg-red-200 hover:bg-red-200" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_UiTableHead, { class: "text-xl font-bold" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`\u0420\u0430\u0441\u0445\u043E\u0434\u044B`);
                            } else {
                              return [
                                createTextVNode("\u0420\u0430\u0441\u0445\u043E\u0434\u044B")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(`<!--[-->`);
                        ssrRenderList(_ctx.plData.periods, (per, i) => {
                          _push4(ssrRenderComponent(_component_UiTableHead, {
                            key: `expenses-${i}`,
                            class: "text-center"
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`${ssrInterpolate(per)}`);
                              } else {
                                return [
                                  createTextVNode(toDisplayString(per), 1)
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                        });
                        _push4(`<!--]-->`);
                      } else {
                        return [
                          createVNode(_component_UiTableHead, { class: "text-xl font-bold" }, {
                            default: withCtx(() => [
                              createTextVNode("\u0420\u0430\u0441\u0445\u043E\u0434\u044B")
                            ]),
                            _: 1
                          }),
                          (openBlock(true), createBlock(Fragment, null, renderList(_ctx.plData.periods, (per, i) => {
                            return openBlock(), createBlock(_component_UiTableHead, {
                              key: `expenses-${i}`,
                              class: "text-center"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(per), 1)
                              ]),
                              _: 2
                            }, 1024);
                          }), 128))
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UiTableRow, { class: "bg-red-200 hover:bg-red-200" }, {
                      default: withCtx(() => [
                        createVNode(_component_UiTableHead, { class: "text-xl font-bold" }, {
                          default: withCtx(() => [
                            createTextVNode("\u0420\u0430\u0441\u0445\u043E\u0434\u044B")
                          ]),
                          _: 1
                        }),
                        (openBlock(true), createBlock(Fragment, null, renderList(_ctx.plData.periods, (per, i) => {
                          return openBlock(), createBlock(_component_UiTableHead, {
                            key: `expenses-${i}`,
                            class: "text-center"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(per), 1)
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
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UiTableBody, { class: "font-semibold" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UiTableRow, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_UiTableCell, { class: "font-bold" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`\u0412\u0441\u0435\u0433\u043E \u0440\u0430\u0441\u0445\u043E\u0434\u043E\u0432`);
                            } else {
                              return [
                                createTextVNode("\u0412\u0441\u0435\u0433\u043E \u0440\u0430\u0441\u0445\u043E\u0434\u043E\u0432")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(`<!--[-->`);
                        ssrRenderList(totalExpensesShare.value, (dp, i) => {
                          _push4(ssrRenderComponent(_component_UiTableCell, {
                            key: `expenses-val-${i}`,
                            class: "text-center"
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`<div class="${ssrRenderClass([
                                  "flex justify-center items-center gap-1",
                                  dp.isIncreased ? "text-red-600/90" : "",
                                  dp.isDecreased ? "text-green-700/90" : "",
                                  !dp.isIncreased && !dp.isDecreased ? "text-slate-500/90" : ""
                                ])}"${_scopeId4}><span${_scopeId4}>${ssrInterpolate(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(+dp.value.toFixed(2)) + "\u20BD")}</span><span${_scopeId4}> (${ssrInterpolate(dp.percent.toFixed(2))}%) </span></div>`);
                              } else {
                                return [
                                  createVNode("div", {
                                    class: [
                                      "flex justify-center items-center gap-1",
                                      dp.isIncreased ? "text-red-600/90" : "",
                                      dp.isDecreased ? "text-green-700/90" : "",
                                      !dp.isIncreased && !dp.isDecreased ? "text-slate-500/90" : ""
                                    ]
                                  }, [
                                    createVNode("span", null, toDisplayString(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(+dp.value.toFixed(2)) + "\u20BD"), 1),
                                    createVNode("span", null, " (" + toDisplayString(dp.percent.toFixed(2)) + "%) ", 1)
                                  ], 2)
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                        });
                        _push4(`<!--]-->`);
                      } else {
                        return [
                          createVNode(_component_UiTableCell, { class: "font-bold" }, {
                            default: withCtx(() => [
                              createTextVNode("\u0412\u0441\u0435\u0433\u043E \u0440\u0430\u0441\u0445\u043E\u0434\u043E\u0432")
                            ]),
                            _: 1
                          }),
                          (openBlock(true), createBlock(Fragment, null, renderList(totalExpensesShare.value, (dp, i) => {
                            return openBlock(), createBlock(_component_UiTableCell, {
                              key: `expenses-val-${i}`,
                              class: "text-center"
                            }, {
                              default: withCtx(() => [
                                createVNode("div", {
                                  class: [
                                    "flex justify-center items-center gap-1",
                                    dp.isIncreased ? "text-red-600/90" : "",
                                    dp.isDecreased ? "text-green-700/90" : "",
                                    !dp.isIncreased && !dp.isDecreased ? "text-slate-500/90" : ""
                                  ]
                                }, [
                                  createVNode("span", null, toDisplayString(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(+dp.value.toFixed(2)) + "\u20BD"), 1),
                                  createVNode("span", null, " (" + toDisplayString(dp.percent.toFixed(2)) + "%) ", 1)
                                ], 2)
                              ]),
                              _: 2
                            }, 1024);
                          }), 128))
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UiTableRow, null, {
                      default: withCtx(() => [
                        createVNode(_component_UiTableCell, { class: "font-bold" }, {
                          default: withCtx(() => [
                            createTextVNode("\u0412\u0441\u0435\u0433\u043E \u0440\u0430\u0441\u0445\u043E\u0434\u043E\u0432")
                          ]),
                          _: 1
                        }),
                        (openBlock(true), createBlock(Fragment, null, renderList(totalExpensesShare.value, (dp, i) => {
                          return openBlock(), createBlock(_component_UiTableCell, {
                            key: `expenses-val-${i}`,
                            class: "text-center"
                          }, {
                            default: withCtx(() => [
                              createVNode("div", {
                                class: [
                                  "flex justify-center items-center gap-1",
                                  dp.isIncreased ? "text-red-600/90" : "",
                                  dp.isDecreased ? "text-green-700/90" : "",
                                  !dp.isIncreased && !dp.isDecreased ? "text-slate-500/90" : ""
                                ]
                              }, [
                                createVNode("span", null, toDisplayString(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(+dp.value.toFixed(2)) + "\u20BD"), 1),
                                createVNode("span", null, " (" + toDisplayString(dp.percent.toFixed(2)) + "%) ", 1)
                              ], 2)
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
            }, _parent2, _scopeId));
            if (((_b2 = (_a2 = props.plData.prodExpensesByPeriod) == null ? void 0 : _a2.length) != null ? _b2 : 0) > 0) {
              _push2(`<!--[-->`);
              _push2(ssrRenderComponent(_component_UiTableHeader, null, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_UiTableRow, { class: "text-xl text-center font-semibold bg-white hover:bg-white py-1 pb-2 border-t-1 rounded-t-xl" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_UiTableHead, {
                            colspan: "5",
                            class: "text-center h-4"
                          }, null, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(_component_UiTableHead, {
                              colspan: "5",
                              class: "text-center h-4"
                            })
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_UiTableRow, { class: "text-xl text-center font-semibold bg-white hover:bg-white py-1 pb-2 border-t-1 rounded-t-xl" }, {
                        default: withCtx(() => [
                          createVNode(_component_UiTableHead, {
                            colspan: "5",
                            class: "text-center h-4"
                          })
                        ]),
                        _: 1
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_UiTableHeader, null, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_UiTableRow, { class: "bg-slate-200 hover:bg-slate-200" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_UiTableHead, { class: "text-xl" }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`\u0420\u0430\u0441\u0445\u043E\u0434\u044B \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0441\u0442\u0432\u0430`);
                              } else {
                                return [
                                  createTextVNode("\u0420\u0430\u0441\u0445\u043E\u0434\u044B \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0441\u0442\u0432\u0430")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                          _push4(`<!--[-->`);
                          ssrRenderList(_ctx.plData.periods, (per, i) => {
                            _push4(ssrRenderComponent(_component_UiTableHead, {
                              key: `prod-${i}`,
                              class: "text-center"
                            }, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(`${ssrInterpolate(per)}`);
                                } else {
                                  return [
                                    createTextVNode(toDisplayString(per), 1)
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                          });
                          _push4(`<!--]-->`);
                        } else {
                          return [
                            createVNode(_component_UiTableHead, { class: "text-xl" }, {
                              default: withCtx(() => [
                                createTextVNode("\u0420\u0430\u0441\u0445\u043E\u0434\u044B \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0441\u0442\u0432\u0430")
                              ]),
                              _: 1
                            }),
                            (openBlock(true), createBlock(Fragment, null, renderList(_ctx.plData.periods, (per, i) => {
                              return openBlock(), createBlock(_component_UiTableHead, {
                                key: `prod-${i}`,
                                class: "text-center"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(per), 1)
                                ]),
                                _: 2
                              }, 1024);
                            }), 128))
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_UiTableRow, { class: "bg-slate-200 hover:bg-slate-200" }, {
                        default: withCtx(() => [
                          createVNode(_component_UiTableHead, { class: "text-xl" }, {
                            default: withCtx(() => [
                              createTextVNode("\u0420\u0430\u0441\u0445\u043E\u0434\u044B \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0441\u0442\u0432\u0430")
                            ]),
                            _: 1
                          }),
                          (openBlock(true), createBlock(Fragment, null, renderList(_ctx.plData.periods, (per, i) => {
                            return openBlock(), createBlock(_component_UiTableHead, {
                              key: `prod-${i}`,
                              class: "text-center"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(per), 1)
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
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_UiTableBody, null, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_UiTableRow, null, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_UiTableCell, null, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`\u0420\u0430\u0441\u0445\u043E\u0434\u044B \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0441\u0442\u0432\u0430`);
                              } else {
                                return [
                                  createTextVNode("\u0420\u0430\u0441\u0445\u043E\u0434\u044B \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0441\u0442\u0432\u0430")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                          _push4(`<!--[-->`);
                          ssrRenderList(unref(productionExpensesShare), (dp, i) => {
                            _push4(ssrRenderComponent(_component_UiTableCell, {
                              key: `prod-val-${i}`,
                              class: "text-center"
                            }, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(`<div class="${ssrRenderClass(["flex justify-center items-center gap-1"])}"${_scopeId4}><span${_scopeId4}>${ssrInterpolate(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(+dp.value.toFixed(2)) + "\u20BD")}</span><span${_scopeId4}> (${ssrInterpolate(dp.percent.toFixed(2))}%) </span></div>`);
                                } else {
                                  return [
                                    createVNode("div", { class: ["flex justify-center items-center gap-1"] }, [
                                      createVNode("span", null, toDisplayString(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(+dp.value.toFixed(2)) + "\u20BD"), 1),
                                      createVNode("span", null, " (" + toDisplayString(dp.percent.toFixed(2)) + "%) ", 1)
                                    ])
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                          });
                          _push4(`<!--]-->`);
                        } else {
                          return [
                            createVNode(_component_UiTableCell, null, {
                              default: withCtx(() => [
                                createTextVNode("\u0420\u0430\u0441\u0445\u043E\u0434\u044B \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0441\u0442\u0432\u0430")
                              ]),
                              _: 1
                            }),
                            (openBlock(true), createBlock(Fragment, null, renderList(unref(productionExpensesShare), (dp, i) => {
                              return openBlock(), createBlock(_component_UiTableCell, {
                                key: `prod-val-${i}`,
                                class: "text-center"
                              }, {
                                default: withCtx(() => [
                                  createVNode("div", { class: ["flex justify-center items-center gap-1"] }, [
                                    createVNode("span", null, toDisplayString(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(+dp.value.toFixed(2)) + "\u20BD"), 1),
                                    createVNode("span", null, " (" + toDisplayString(dp.percent.toFixed(2)) + "%) ", 1)
                                  ])
                                ]),
                                _: 2
                              }, 1024);
                            }), 128))
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_UiTableRow, null, {
                        default: withCtx(() => [
                          createVNode(_component_UiTableCell, null, {
                            default: withCtx(() => [
                              createTextVNode("\u0420\u0430\u0441\u0445\u043E\u0434\u044B \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0441\u0442\u0432\u0430")
                            ]),
                            _: 1
                          }),
                          (openBlock(true), createBlock(Fragment, null, renderList(unref(productionExpensesShare), (dp, i) => {
                            return openBlock(), createBlock(_component_UiTableCell, {
                              key: `prod-val-${i}`,
                              class: "text-center"
                            }, {
                              default: withCtx(() => [
                                createVNode("div", { class: ["flex justify-center items-center gap-1"] }, [
                                  createVNode("span", null, toDisplayString(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(+dp.value.toFixed(2)) + "\u20BD"), 1),
                                  createVNode("span", null, " (" + toDisplayString(dp.percent.toFixed(2)) + "%) ", 1)
                                ])
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
              }, _parent2, _scopeId));
              _push2(`<!--]-->`);
            } else {
              _push2(`<!---->`);
            }
            if (((_d2 = (_c2 = props.plData.adExpenses) == null ? void 0 : _c2.length) != null ? _d2 : 0) > 0) {
              _push2(`<!--[-->`);
              _push2(ssrRenderComponent(_component_UiTableHeader, null, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_UiTableRow, { class: "text-xl text-center font-semibold bg-white hover:bg-white py-1 pb-2 border-t-1 rounded-t-xl" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_UiTableHead, {
                            colspan: "5",
                            class: "text-center h-4"
                          }, null, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(_component_UiTableHead, {
                              colspan: "5",
                              class: "text-center h-4"
                            })
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_UiTableRow, { class: "text-xl text-center font-semibold bg-white hover:bg-white py-1 pb-2 border-t-1 rounded-t-xl" }, {
                        default: withCtx(() => [
                          createVNode(_component_UiTableHead, {
                            colspan: "5",
                            class: "text-center h-4"
                          })
                        ]),
                        _: 1
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_UiTableHeader, null, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_UiTableRow, { class: "bg-slate-200 hover:bg-slate-200" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_UiTableHead, { class: "text-xl" }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`\u0420\u0430\u0441\u0445\u043E\u0434\u044B \u043D\u0430 \u0440\u0435\u043A\u043B\u0430\u043C\u0443`);
                              } else {
                                return [
                                  createTextVNode("\u0420\u0430\u0441\u0445\u043E\u0434\u044B \u043D\u0430 \u0440\u0435\u043A\u043B\u0430\u043C\u0443")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                          _push4(`<!--[-->`);
                          ssrRenderList(_ctx.plData.periods, (per, i) => {
                            _push4(ssrRenderComponent(_component_UiTableHead, {
                              key: `ad-${i}`,
                              class: "text-center"
                            }, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(`${ssrInterpolate(per)}`);
                                } else {
                                  return [
                                    createTextVNode(toDisplayString(per), 1)
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                          });
                          _push4(`<!--]-->`);
                        } else {
                          return [
                            createVNode(_component_UiTableHead, { class: "text-xl" }, {
                              default: withCtx(() => [
                                createTextVNode("\u0420\u0430\u0441\u0445\u043E\u0434\u044B \u043D\u0430 \u0440\u0435\u043A\u043B\u0430\u043C\u0443")
                              ]),
                              _: 1
                            }),
                            (openBlock(true), createBlock(Fragment, null, renderList(_ctx.plData.periods, (per, i) => {
                              return openBlock(), createBlock(_component_UiTableHead, {
                                key: `ad-${i}`,
                                class: "text-center"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(per), 1)
                                ]),
                                _: 2
                              }, 1024);
                            }), 128))
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_UiTableRow, { class: "bg-slate-200 hover:bg-slate-200" }, {
                        default: withCtx(() => [
                          createVNode(_component_UiTableHead, { class: "text-xl" }, {
                            default: withCtx(() => [
                              createTextVNode("\u0420\u0430\u0441\u0445\u043E\u0434\u044B \u043D\u0430 \u0440\u0435\u043A\u043B\u0430\u043C\u0443")
                            ]),
                            _: 1
                          }),
                          (openBlock(true), createBlock(Fragment, null, renderList(_ctx.plData.periods, (per, i) => {
                            return openBlock(), createBlock(_component_UiTableHead, {
                              key: `ad-${i}`,
                              class: "text-center"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(per), 1)
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
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_UiTableBody, null, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_UiTableRow, null, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_UiTableCell, null, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`\u0420\u0430\u0441\u0445\u043E\u0434\u044B \u043D\u0430 \u0440\u0435\u043A\u043B\u0430\u043C\u0443`);
                              } else {
                                return [
                                  createTextVNode("\u0420\u0430\u0441\u0445\u043E\u0434\u044B \u043D\u0430 \u0440\u0435\u043A\u043B\u0430\u043C\u0443")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                          _push4(`<!--[-->`);
                          ssrRenderList(unref(adExpensesShare), (dp, i) => {
                            _push4(ssrRenderComponent(_component_UiTableCell, {
                              key: `ad-val-${i}`,
                              class: "text-center"
                            }, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(`<div class="${ssrRenderClass(["flex justify-center items-center gap-1"])}"${_scopeId4}><span${_scopeId4}>${ssrInterpolate(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(+dp.value.toFixed(2)) + "\u20BD")}</span><span${_scopeId4}> (${ssrInterpolate(dp.percent.toFixed(2))}%) </span></div>`);
                                } else {
                                  return [
                                    createVNode("div", { class: ["flex justify-center items-center gap-1"] }, [
                                      createVNode("span", null, toDisplayString(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(+dp.value.toFixed(2)) + "\u20BD"), 1),
                                      createVNode("span", null, " (" + toDisplayString(dp.percent.toFixed(2)) + "%) ", 1)
                                    ])
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                          });
                          _push4(`<!--]-->`);
                        } else {
                          return [
                            createVNode(_component_UiTableCell, null, {
                              default: withCtx(() => [
                                createTextVNode("\u0420\u0430\u0441\u0445\u043E\u0434\u044B \u043D\u0430 \u0440\u0435\u043A\u043B\u0430\u043C\u0443")
                              ]),
                              _: 1
                            }),
                            (openBlock(true), createBlock(Fragment, null, renderList(unref(adExpensesShare), (dp, i) => {
                              return openBlock(), createBlock(_component_UiTableCell, {
                                key: `ad-val-${i}`,
                                class: "text-center"
                              }, {
                                default: withCtx(() => [
                                  createVNode("div", { class: ["flex justify-center items-center gap-1"] }, [
                                    createVNode("span", null, toDisplayString(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(+dp.value.toFixed(2)) + "\u20BD"), 1),
                                    createVNode("span", null, " (" + toDisplayString(dp.percent.toFixed(2)) + "%) ", 1)
                                  ])
                                ]),
                                _: 2
                              }, 1024);
                            }), 128))
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_UiTableRow, null, {
                        default: withCtx(() => [
                          createVNode(_component_UiTableCell, null, {
                            default: withCtx(() => [
                              createTextVNode("\u0420\u0430\u0441\u0445\u043E\u0434\u044B \u043D\u0430 \u0440\u0435\u043A\u043B\u0430\u043C\u0443")
                            ]),
                            _: 1
                          }),
                          (openBlock(true), createBlock(Fragment, null, renderList(unref(adExpensesShare), (dp, i) => {
                            return openBlock(), createBlock(_component_UiTableCell, {
                              key: `ad-val-${i}`,
                              class: "text-center"
                            }, {
                              default: withCtx(() => [
                                createVNode("div", { class: ["flex justify-center items-center gap-1"] }, [
                                  createVNode("span", null, toDisplayString(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(+dp.value.toFixed(2)) + "\u20BD"), 1),
                                  createVNode("span", null, " (" + toDisplayString(dp.percent.toFixed(2)) + "%) ", 1)
                                ])
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
              }, _parent2, _scopeId));
              _push2(`<!--]-->`);
            } else {
              _push2(`<!---->`);
            }
            if (((_f2 = (_e2 = props.plData.mopSalaries) == null ? void 0 : _e2.length) != null ? _f2 : 0) > 0 || ((_h = (_g = props.plData.ropSalaries) == null ? void 0 : _g.length) != null ? _h : 0) > 0 || ((_j = (_i = props.plData.movSalaries) == null ? void 0 : _i.length) != null ? _j : 0) > 0 || ((_l = (_k = props.plData.designExpensesByPeriod) == null ? void 0 : _k.length) != null ? _l : 0) > 0) {
              _push2(`<!--[-->`);
              _push2(ssrRenderComponent(_component_UiTableHeader, null, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_UiTableRow, { class: "text-xl text-center font-semibold bg-white hover:bg-white py-1 pb-2 border-t-1 rounded-t-xl" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_UiTableHead, {
                            colspan: "5",
                            class: "text-center h-4"
                          }, null, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(_component_UiTableHead, {
                              colspan: "5",
                              class: "text-center h-4"
                            })
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_UiTableRow, { class: "text-xl text-center font-semibold bg-white hover:bg-white py-1 pb-2 border-t-1 rounded-t-xl" }, {
                        default: withCtx(() => [
                          createVNode(_component_UiTableHead, {
                            colspan: "5",
                            class: "text-center h-4"
                          })
                        ]),
                        _: 1
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_UiTableHeader, null, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_UiTableRow, { class: "bg-slate-200 hover:bg-slate-200" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_UiTableHead, { class: "text-xl" }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`\u0417\u0430\u0440\u043F\u043B\u0430\u0442\u044B \u043A\u043E\u043C\u043C\u0435\u0440\u0447\u0435\u0441\u043A\u043E\u0433\u043E \u043E\u0442\u0434\u0435\u043B\u0430`);
                              } else {
                                return [
                                  createTextVNode("\u0417\u0430\u0440\u043F\u043B\u0430\u0442\u044B \u043A\u043E\u043C\u043C\u0435\u0440\u0447\u0435\u0441\u043A\u043E\u0433\u043E \u043E\u0442\u0434\u0435\u043B\u0430")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                          _push4(`<!--[-->`);
                          ssrRenderList(_ctx.plData.periods, (per, i) => {
                            _push4(ssrRenderComponent(_component_UiTableHead, {
                              key: `salaries-${i}`,
                              class: "text-center"
                            }, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(`${ssrInterpolate(per)}`);
                                } else {
                                  return [
                                    createTextVNode(toDisplayString(per), 1)
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                          });
                          _push4(`<!--]-->`);
                        } else {
                          return [
                            createVNode(_component_UiTableHead, { class: "text-xl" }, {
                              default: withCtx(() => [
                                createTextVNode("\u0417\u0430\u0440\u043F\u043B\u0430\u0442\u044B \u043A\u043E\u043C\u043C\u0435\u0440\u0447\u0435\u0441\u043A\u043E\u0433\u043E \u043E\u0442\u0434\u0435\u043B\u0430")
                              ]),
                              _: 1
                            }),
                            (openBlock(true), createBlock(Fragment, null, renderList(_ctx.plData.periods, (per, i) => {
                              return openBlock(), createBlock(_component_UiTableHead, {
                                key: `salaries-${i}`,
                                class: "text-center"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(per), 1)
                                ]),
                                _: 2
                              }, 1024);
                            }), 128))
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_UiTableRow, { class: "bg-slate-200 hover:bg-slate-200" }, {
                        default: withCtx(() => [
                          createVNode(_component_UiTableHead, { class: "text-xl" }, {
                            default: withCtx(() => [
                              createTextVNode("\u0417\u0430\u0440\u043F\u043B\u0430\u0442\u044B \u043A\u043E\u043C\u043C\u0435\u0440\u0447\u0435\u0441\u043A\u043E\u0433\u043E \u043E\u0442\u0434\u0435\u043B\u0430")
                            ]),
                            _: 1
                          }),
                          (openBlock(true), createBlock(Fragment, null, renderList(_ctx.plData.periods, (per, i) => {
                            return openBlock(), createBlock(_component_UiTableHead, {
                              key: `salaries-${i}`,
                              class: "text-center"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(per), 1)
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
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_UiTableBody, null, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  var _a3, _b3, _c3, _d3, _e3, _f3, _g2, _h2, _i2, _j2, _k2, _l2, _m2, _n2, _o2, _p2;
                  if (_push3) {
                    if (((_b3 = (_a3 = props.plData.mopSalaries) == null ? void 0 : _a3.length) != null ? _b3 : 0) > 0) {
                      _push3(ssrRenderComponent(_component_UiTableRow, null, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(ssrRenderComponent(_component_UiTableCell, null, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(`\u0417\u0430\u0440\u043F\u043B\u0430\u0442\u044B \u043C\u0435\u043D\u0435\u0434\u0436\u0435\u0440\u043E\u0432 \u043E\u0442\u0434\u0435\u043B\u0430 \u043F\u0440\u043E\u0434\u0430\u0436`);
                                } else {
                                  return [
                                    createTextVNode("\u0417\u0430\u0440\u043F\u043B\u0430\u0442\u044B \u043C\u0435\u043D\u0435\u0434\u0436\u0435\u0440\u043E\u0432 \u043E\u0442\u0434\u0435\u043B\u0430 \u043F\u0440\u043E\u0434\u0430\u0436")
                                  ];
                                }
                              }),
                              _: 1
                            }, _parent4, _scopeId3));
                            _push4(`<!--[-->`);
                            ssrRenderList(unref(mopSalariesShare), (dp, i) => {
                              _push4(ssrRenderComponent(_component_UiTableCell, {
                                key: `mop-val-${i}`,
                                class: "text-center"
                              }, {
                                default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                  if (_push5) {
                                    _push5(`<div class="${ssrRenderClass(["flex justify-center items-center gap-1"])}"${_scopeId4}><span${_scopeId4}>${ssrInterpolate(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(+dp.value.toFixed(2)) + "\u20BD")}</span><span${_scopeId4}> (${ssrInterpolate(dp.percent.toFixed(2))}%) </span></div>`);
                                  } else {
                                    return [
                                      createVNode("div", { class: ["flex justify-center items-center gap-1"] }, [
                                        createVNode("span", null, toDisplayString(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(+dp.value.toFixed(2)) + "\u20BD"), 1),
                                        createVNode("span", null, " (" + toDisplayString(dp.percent.toFixed(2)) + "%) ", 1)
                                      ])
                                    ];
                                  }
                                }),
                                _: 2
                              }, _parent4, _scopeId3));
                            });
                            _push4(`<!--]-->`);
                          } else {
                            return [
                              createVNode(_component_UiTableCell, null, {
                                default: withCtx(() => [
                                  createTextVNode("\u0417\u0430\u0440\u043F\u043B\u0430\u0442\u044B \u043C\u0435\u043D\u0435\u0434\u0436\u0435\u0440\u043E\u0432 \u043E\u0442\u0434\u0435\u043B\u0430 \u043F\u0440\u043E\u0434\u0430\u0436")
                                ]),
                                _: 1
                              }),
                              (openBlock(true), createBlock(Fragment, null, renderList(unref(mopSalariesShare), (dp, i) => {
                                return openBlock(), createBlock(_component_UiTableCell, {
                                  key: `mop-val-${i}`,
                                  class: "text-center"
                                }, {
                                  default: withCtx(() => [
                                    createVNode("div", { class: ["flex justify-center items-center gap-1"] }, [
                                      createVNode("span", null, toDisplayString(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(+dp.value.toFixed(2)) + "\u20BD"), 1),
                                      createVNode("span", null, " (" + toDisplayString(dp.percent.toFixed(2)) + "%) ", 1)
                                    ])
                                  ]),
                                  _: 2
                                }, 1024);
                              }), 128))
                            ];
                          }
                        }),
                        _: 1
                      }, _parent3, _scopeId2));
                    } else {
                      _push3(`<!---->`);
                    }
                    if (((_d3 = (_c3 = props.plData.ropSalaries) == null ? void 0 : _c3.length) != null ? _d3 : 0) > 0) {
                      _push3(ssrRenderComponent(_component_UiTableRow, null, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(ssrRenderComponent(_component_UiTableCell, null, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(`\u0417\u0430\u0440\u043F\u043B\u0430\u0442\u044B \u0440\u043E\u043F\u043E\u0432 `);
                                } else {
                                  return [
                                    createTextVNode("\u0417\u0430\u0440\u043F\u043B\u0430\u0442\u044B \u0440\u043E\u043F\u043E\u0432 ")
                                  ];
                                }
                              }),
                              _: 1
                            }, _parent4, _scopeId3));
                            _push4(`<!--[-->`);
                            ssrRenderList(unref(ropSalariesShare), (dp, i) => {
                              _push4(ssrRenderComponent(_component_UiTableCell, {
                                key: `rop-val-${i}`,
                                class: "text-center"
                              }, {
                                default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                  if (_push5) {
                                    _push5(`<div class="${ssrRenderClass(["flex justify-center items-center gap-1"])}"${_scopeId4}><span${_scopeId4}>${ssrInterpolate(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(+dp.value.toFixed(2)) + "\u20BD")}</span><span${_scopeId4}> (${ssrInterpolate(dp.percent.toFixed(2))}%) </span></div>`);
                                  } else {
                                    return [
                                      createVNode("div", { class: ["flex justify-center items-center gap-1"] }, [
                                        createVNode("span", null, toDisplayString(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(+dp.value.toFixed(2)) + "\u20BD"), 1),
                                        createVNode("span", null, " (" + toDisplayString(dp.percent.toFixed(2)) + "%) ", 1)
                                      ])
                                    ];
                                  }
                                }),
                                _: 2
                              }, _parent4, _scopeId3));
                            });
                            _push4(`<!--]-->`);
                          } else {
                            return [
                              createVNode(_component_UiTableCell, null, {
                                default: withCtx(() => [
                                  createTextVNode("\u0417\u0430\u0440\u043F\u043B\u0430\u0442\u044B \u0440\u043E\u043F\u043E\u0432 ")
                                ]),
                                _: 1
                              }),
                              (openBlock(true), createBlock(Fragment, null, renderList(unref(ropSalariesShare), (dp, i) => {
                                return openBlock(), createBlock(_component_UiTableCell, {
                                  key: `rop-val-${i}`,
                                  class: "text-center"
                                }, {
                                  default: withCtx(() => [
                                    createVNode("div", { class: ["flex justify-center items-center gap-1"] }, [
                                      createVNode("span", null, toDisplayString(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(+dp.value.toFixed(2)) + "\u20BD"), 1),
                                      createVNode("span", null, " (" + toDisplayString(dp.percent.toFixed(2)) + "%) ", 1)
                                    ])
                                  ]),
                                  _: 2
                                }, 1024);
                              }), 128))
                            ];
                          }
                        }),
                        _: 1
                      }, _parent3, _scopeId2));
                    } else {
                      _push3(`<!---->`);
                    }
                    if (((_f3 = (_e3 = props.plData.movSalaries) == null ? void 0 : _e3.length) != null ? _f3 : 0) > 0) {
                      _push3(ssrRenderComponent(_component_UiTableRow, null, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(ssrRenderComponent(_component_UiTableCell, null, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(`\u0417\u0430\u0440\u043F\u043B\u0430\u0442\u044B \u043C\u0435\u043D\u0435\u0434\u0436\u0435\u0440\u043E\u0432 \u043E\u0442\u0434\u0435\u043B\u0430 \u0432\u0435\u0434\u0435\u043D\u0438\u044F`);
                                } else {
                                  return [
                                    createTextVNode("\u0417\u0430\u0440\u043F\u043B\u0430\u0442\u044B \u043C\u0435\u043D\u0435\u0434\u0436\u0435\u0440\u043E\u0432 \u043E\u0442\u0434\u0435\u043B\u0430 \u0432\u0435\u0434\u0435\u043D\u0438\u044F")
                                  ];
                                }
                              }),
                              _: 1
                            }, _parent4, _scopeId3));
                            _push4(`<!--[-->`);
                            ssrRenderList(unref(movSalariesShare), (dp, i) => {
                              _push4(ssrRenderComponent(_component_UiTableCell, {
                                key: `mov-val-${i}`,
                                class: "text-center"
                              }, {
                                default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                  if (_push5) {
                                    _push5(`<div class="${ssrRenderClass(["flex justify-center items-center gap-1"])}"${_scopeId4}><span${_scopeId4}>${ssrInterpolate(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(+dp.value.toFixed(2)) + "\u20BD")}</span><span${_scopeId4}> (${ssrInterpolate(dp.percent.toFixed(2))}%) </span></div>`);
                                  } else {
                                    return [
                                      createVNode("div", { class: ["flex justify-center items-center gap-1"] }, [
                                        createVNode("span", null, toDisplayString(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(+dp.value.toFixed(2)) + "\u20BD"), 1),
                                        createVNode("span", null, " (" + toDisplayString(dp.percent.toFixed(2)) + "%) ", 1)
                                      ])
                                    ];
                                  }
                                }),
                                _: 2
                              }, _parent4, _scopeId3));
                            });
                            _push4(`<!--]-->`);
                          } else {
                            return [
                              createVNode(_component_UiTableCell, null, {
                                default: withCtx(() => [
                                  createTextVNode("\u0417\u0430\u0440\u043F\u043B\u0430\u0442\u044B \u043C\u0435\u043D\u0435\u0434\u0436\u0435\u0440\u043E\u0432 \u043E\u0442\u0434\u0435\u043B\u0430 \u0432\u0435\u0434\u0435\u043D\u0438\u044F")
                                ]),
                                _: 1
                              }),
                              (openBlock(true), createBlock(Fragment, null, renderList(unref(movSalariesShare), (dp, i) => {
                                return openBlock(), createBlock(_component_UiTableCell, {
                                  key: `mov-val-${i}`,
                                  class: "text-center"
                                }, {
                                  default: withCtx(() => [
                                    createVNode("div", { class: ["flex justify-center items-center gap-1"] }, [
                                      createVNode("span", null, toDisplayString(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(+dp.value.toFixed(2)) + "\u20BD"), 1),
                                      createVNode("span", null, " (" + toDisplayString(dp.percent.toFixed(2)) + "%) ", 1)
                                    ])
                                  ]),
                                  _: 2
                                }, 1024);
                              }), 128))
                            ];
                          }
                        }),
                        _: 1
                      }, _parent3, _scopeId2));
                    } else {
                      _push3(`<!---->`);
                    }
                    if (((_h2 = (_g2 = props.plData.designExpensesByPeriod) == null ? void 0 : _g2.length) != null ? _h2 : 0) > 0) {
                      _push3(ssrRenderComponent(_component_UiTableRow, null, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(ssrRenderComponent(_component_UiTableCell, null, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(`\u0420\u0430\u0441\u0445\u043E\u0434\u044B \u043D\u0430 \u0434\u0438\u0437\u0430\u0439\u043D`);
                                } else {
                                  return [
                                    createTextVNode("\u0420\u0430\u0441\u0445\u043E\u0434\u044B \u043D\u0430 \u0434\u0438\u0437\u0430\u0439\u043D")
                                  ];
                                }
                              }),
                              _: 1
                            }, _parent4, _scopeId3));
                            _push4(`<!--[-->`);
                            ssrRenderList(unref(designExpensesShare), (dp, i) => {
                              _push4(ssrRenderComponent(_component_UiTableCell, {
                                key: `design-val-${i}`,
                                class: "text-center"
                              }, {
                                default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                  if (_push5) {
                                    _push5(`<div class="${ssrRenderClass(["flex justify-center items-center gap-1"])}"${_scopeId4}><span${_scopeId4}>${ssrInterpolate(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(+dp.value.toFixed(2)) + "\u20BD")}</span><span${_scopeId4}> (${ssrInterpolate(dp.percent.toFixed(2))}%) </span></div>`);
                                  } else {
                                    return [
                                      createVNode("div", { class: ["flex justify-center items-center gap-1"] }, [
                                        createVNode("span", null, toDisplayString(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(+dp.value.toFixed(2)) + "\u20BD"), 1),
                                        createVNode("span", null, " (" + toDisplayString(dp.percent.toFixed(2)) + "%) ", 1)
                                      ])
                                    ];
                                  }
                                }),
                                _: 2
                              }, _parent4, _scopeId3));
                            });
                            _push4(`<!--]-->`);
                          } else {
                            return [
                              createVNode(_component_UiTableCell, null, {
                                default: withCtx(() => [
                                  createTextVNode("\u0420\u0430\u0441\u0445\u043E\u0434\u044B \u043D\u0430 \u0434\u0438\u0437\u0430\u0439\u043D")
                                ]),
                                _: 1
                              }),
                              (openBlock(true), createBlock(Fragment, null, renderList(unref(designExpensesShare), (dp, i) => {
                                return openBlock(), createBlock(_component_UiTableCell, {
                                  key: `design-val-${i}`,
                                  class: "text-center"
                                }, {
                                  default: withCtx(() => [
                                    createVNode("div", { class: ["flex justify-center items-center gap-1"] }, [
                                      createVNode("span", null, toDisplayString(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(+dp.value.toFixed(2)) + "\u20BD"), 1),
                                      createVNode("span", null, " (" + toDisplayString(dp.percent.toFixed(2)) + "%) ", 1)
                                    ])
                                  ]),
                                  _: 2
                                }, 1024);
                              }), 128))
                            ];
                          }
                        }),
                        _: 1
                      }, _parent3, _scopeId2));
                    } else {
                      _push3(`<!---->`);
                    }
                  } else {
                    return [
                      ((_j2 = (_i2 = props.plData.mopSalaries) == null ? void 0 : _i2.length) != null ? _j2 : 0) > 0 ? (openBlock(), createBlock(_component_UiTableRow, { key: 0 }, {
                        default: withCtx(() => [
                          createVNode(_component_UiTableCell, null, {
                            default: withCtx(() => [
                              createTextVNode("\u0417\u0430\u0440\u043F\u043B\u0430\u0442\u044B \u043C\u0435\u043D\u0435\u0434\u0436\u0435\u0440\u043E\u0432 \u043E\u0442\u0434\u0435\u043B\u0430 \u043F\u0440\u043E\u0434\u0430\u0436")
                            ]),
                            _: 1
                          }),
                          (openBlock(true), createBlock(Fragment, null, renderList(unref(mopSalariesShare), (dp, i) => {
                            return openBlock(), createBlock(_component_UiTableCell, {
                              key: `mop-val-${i}`,
                              class: "text-center"
                            }, {
                              default: withCtx(() => [
                                createVNode("div", { class: ["flex justify-center items-center gap-1"] }, [
                                  createVNode("span", null, toDisplayString(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(+dp.value.toFixed(2)) + "\u20BD"), 1),
                                  createVNode("span", null, " (" + toDisplayString(dp.percent.toFixed(2)) + "%) ", 1)
                                ])
                              ]),
                              _: 2
                            }, 1024);
                          }), 128))
                        ]),
                        _: 1
                      })) : createCommentVNode("", true),
                      ((_l2 = (_k2 = props.plData.ropSalaries) == null ? void 0 : _k2.length) != null ? _l2 : 0) > 0 ? (openBlock(), createBlock(_component_UiTableRow, { key: 1 }, {
                        default: withCtx(() => [
                          createVNode(_component_UiTableCell, null, {
                            default: withCtx(() => [
                              createTextVNode("\u0417\u0430\u0440\u043F\u043B\u0430\u0442\u044B \u0440\u043E\u043F\u043E\u0432 ")
                            ]),
                            _: 1
                          }),
                          (openBlock(true), createBlock(Fragment, null, renderList(unref(ropSalariesShare), (dp, i) => {
                            return openBlock(), createBlock(_component_UiTableCell, {
                              key: `rop-val-${i}`,
                              class: "text-center"
                            }, {
                              default: withCtx(() => [
                                createVNode("div", { class: ["flex justify-center items-center gap-1"] }, [
                                  createVNode("span", null, toDisplayString(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(+dp.value.toFixed(2)) + "\u20BD"), 1),
                                  createVNode("span", null, " (" + toDisplayString(dp.percent.toFixed(2)) + "%) ", 1)
                                ])
                              ]),
                              _: 2
                            }, 1024);
                          }), 128))
                        ]),
                        _: 1
                      })) : createCommentVNode("", true),
                      ((_n2 = (_m2 = props.plData.movSalaries) == null ? void 0 : _m2.length) != null ? _n2 : 0) > 0 ? (openBlock(), createBlock(_component_UiTableRow, { key: 2 }, {
                        default: withCtx(() => [
                          createVNode(_component_UiTableCell, null, {
                            default: withCtx(() => [
                              createTextVNode("\u0417\u0430\u0440\u043F\u043B\u0430\u0442\u044B \u043C\u0435\u043D\u0435\u0434\u0436\u0435\u0440\u043E\u0432 \u043E\u0442\u0434\u0435\u043B\u0430 \u0432\u0435\u0434\u0435\u043D\u0438\u044F")
                            ]),
                            _: 1
                          }),
                          (openBlock(true), createBlock(Fragment, null, renderList(unref(movSalariesShare), (dp, i) => {
                            return openBlock(), createBlock(_component_UiTableCell, {
                              key: `mov-val-${i}`,
                              class: "text-center"
                            }, {
                              default: withCtx(() => [
                                createVNode("div", { class: ["flex justify-center items-center gap-1"] }, [
                                  createVNode("span", null, toDisplayString(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(+dp.value.toFixed(2)) + "\u20BD"), 1),
                                  createVNode("span", null, " (" + toDisplayString(dp.percent.toFixed(2)) + "%) ", 1)
                                ])
                              ]),
                              _: 2
                            }, 1024);
                          }), 128))
                        ]),
                        _: 1
                      })) : createCommentVNode("", true),
                      ((_p2 = (_o2 = props.plData.designExpensesByPeriod) == null ? void 0 : _o2.length) != null ? _p2 : 0) > 0 ? (openBlock(), createBlock(_component_UiTableRow, { key: 3 }, {
                        default: withCtx(() => [
                          createVNode(_component_UiTableCell, null, {
                            default: withCtx(() => [
                              createTextVNode("\u0420\u0430\u0441\u0445\u043E\u0434\u044B \u043D\u0430 \u0434\u0438\u0437\u0430\u0439\u043D")
                            ]),
                            _: 1
                          }),
                          (openBlock(true), createBlock(Fragment, null, renderList(unref(designExpensesShare), (dp, i) => {
                            return openBlock(), createBlock(_component_UiTableCell, {
                              key: `design-val-${i}`,
                              class: "text-center"
                            }, {
                              default: withCtx(() => [
                                createVNode("div", { class: ["flex justify-center items-center gap-1"] }, [
                                  createVNode("span", null, toDisplayString(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(+dp.value.toFixed(2)) + "\u20BD"), 1),
                                  createVNode("span", null, " (" + toDisplayString(dp.percent.toFixed(2)) + "%) ", 1)
                                ])
                              ]),
                              _: 2
                            }, 1024);
                          }), 128))
                        ]),
                        _: 1
                      })) : createCommentVNode("", true)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`<!--]-->`);
            } else {
              _push2(`<!---->`);
            }
            if (_ctx.plData.expenses) {
              _push2(`<!--[-->`);
              _push2(ssrRenderComponent(_component_UiTableHeader, null, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_UiTableRow, { class: "text-xl text-center font-semibold bg-white hover:bg-white py-1 pb-2 border-t-1 rounded-t-xl" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_UiTableHead, {
                            colspan: "5",
                            class: "text-center h-4"
                          }, null, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(_component_UiTableHead, {
                              colspan: "5",
                              class: "text-center h-4"
                            })
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_UiTableRow, { class: "text-xl text-center font-semibold bg-white hover:bg-white py-1 pb-2 border-t-1 rounded-t-xl" }, {
                        default: withCtx(() => [
                          createVNode(_component_UiTableHead, {
                            colspan: "5",
                            class: "text-center h-4"
                          })
                        ]),
                        _: 1
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_UiTableHeader, null, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_UiTableRow, { class: "bg-slate-200 hover:bg-slate-200" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_UiTableHead, { class: "text-xl" }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`\u0420\u0430\u0441\u0445\u043E\u0434\u044B `);
                              } else {
                                return [
                                  createTextVNode("\u0420\u0430\u0441\u0445\u043E\u0434\u044B ")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                          _push4(`<!--[-->`);
                          ssrRenderList(_ctx.plData.periods, (per, i) => {
                            _push4(ssrRenderComponent(_component_UiTableHead, {
                              key: i,
                              class: "text-center"
                            }, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(`${ssrInterpolate(per)}`);
                                } else {
                                  return [
                                    createTextVNode(toDisplayString(per), 1)
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                          });
                          _push4(`<!--]-->`);
                        } else {
                          return [
                            createVNode(_component_UiTableHead, { class: "text-xl" }, {
                              default: withCtx(() => [
                                createTextVNode("\u0420\u0430\u0441\u0445\u043E\u0434\u044B ")
                              ]),
                              _: 1
                            }),
                            (openBlock(true), createBlock(Fragment, null, renderList(_ctx.plData.periods, (per, i) => {
                              return openBlock(), createBlock(_component_UiTableHead, {
                                key: i,
                                class: "text-center"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(per), 1)
                                ]),
                                _: 2
                              }, 1024);
                            }), 128))
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_UiTableRow, { class: "bg-slate-200 hover:bg-slate-200" }, {
                        default: withCtx(() => [
                          createVNode(_component_UiTableHead, { class: "text-xl" }, {
                            default: withCtx(() => [
                              createTextVNode("\u0420\u0430\u0441\u0445\u043E\u0434\u044B ")
                            ]),
                            _: 1
                          }),
                          (openBlock(true), createBlock(Fragment, null, renderList(_ctx.plData.periods, (per, i) => {
                            return openBlock(), createBlock(_component_UiTableHead, {
                              key: i,
                              class: "text-center"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(per), 1)
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
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_UiTableBody, null, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<!--[-->`);
                    ssrRenderList(_ctx.plData.expenses.totals.data, (item, i) => {
                      _push3(ssrRenderComponent(_component_UiTableRow, { key: i }, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(ssrRenderComponent(_component_UiTableCell, null, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(`<div${_scopeId4}><span${_scopeId4}>${ssrInterpolate(item.title)}</span></div>`);
                                } else {
                                  return [
                                    createVNode("div", null, [
                                      createVNode("span", null, toDisplayString(item.title), 1)
                                    ])
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                            _push4(`<!--[-->`);
                            ssrRenderList(item.data, (dp, j) => {
                              _push4(ssrRenderComponent(_component_UiTableCell, {
                                key: j,
                                class: "text-center"
                              }, {
                                default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                  if (_push5) {
                                    _push5(`<div class="${ssrRenderClass(["flex justify-center items-center gap-1"])}"${_scopeId4}><span${_scopeId4}>${ssrInterpolate(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(+dp.value.toFixed(2)) + "\u20BD")}</span><span${_scopeId4}> (${ssrInterpolate(dp.changePercent)}%) </span></div>`);
                                  } else {
                                    return [
                                      createVNode("div", { class: ["flex justify-center items-center gap-1"] }, [
                                        createVNode("span", null, toDisplayString(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(+dp.value.toFixed(2)) + "\u20BD"), 1),
                                        createVNode("span", null, " (" + toDisplayString(dp.changePercent) + "%) ", 1)
                                      ])
                                    ];
                                  }
                                }),
                                _: 2
                              }, _parent4, _scopeId3));
                            });
                            _push4(`<!--]-->`);
                          } else {
                            return [
                              createVNode(_component_UiTableCell, null, {
                                default: withCtx(() => [
                                  createVNode("div", null, [
                                    createVNode("span", null, toDisplayString(item.title), 1)
                                  ])
                                ]),
                                _: 2
                              }, 1024),
                              (openBlock(true), createBlock(Fragment, null, renderList(item.data, (dp, j) => {
                                return openBlock(), createBlock(_component_UiTableCell, {
                                  key: j,
                                  class: "text-center"
                                }, {
                                  default: withCtx(() => [
                                    createVNode("div", { class: ["flex justify-center items-center gap-1"] }, [
                                      createVNode("span", null, toDisplayString(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(+dp.value.toFixed(2)) + "\u20BD"), 1),
                                      createVNode("span", null, " (" + toDisplayString(dp.changePercent) + "%) ", 1)
                                    ])
                                  ]),
                                  _: 2
                                }, 1024);
                              }), 128))
                            ];
                          }
                        }),
                        _: 2
                      }, _parent3, _scopeId2));
                    });
                    _push3(`<!--]-->`);
                    _push3(ssrRenderComponent(_component_UiTableRow, { class: "text-center bg-slate-300 hover:bg-slate-300" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_UiTableCell, { class: "font-bold text-left" }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(` \u0418\u0422\u041E\u0413\u041E `);
                              } else {
                                return [
                                  createTextVNode(" \u0418\u0422\u041E\u0413\u041E ")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                          _push4(`<!--[-->`);
                          ssrRenderList(_ctx.plData.expenses.totals.totals, (total, k) => {
                            _push4(ssrRenderComponent(_component_UiTableCell, { key: k }, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                var _a3, _b3;
                                if (_push5) {
                                  _push5(`<span${_scopeId4}>${ssrInterpolate(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(+total.value.toFixed(2)) + "\u20BD")}</span><span${_scopeId4}> (${ssrInterpolate(((_a3 = total.changePercent) != null ? _a3 : 0).toFixed(2))}%) </span>`);
                                } else {
                                  return [
                                    createVNode("span", null, toDisplayString(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(+total.value.toFixed(2)) + "\u20BD"), 1),
                                    createVNode("span", null, " (" + toDisplayString(((_b3 = total.changePercent) != null ? _b3 : 0).toFixed(2)) + "%) ", 1)
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                          });
                          _push4(`<!--]-->`);
                        } else {
                          return [
                            createVNode(_component_UiTableCell, { class: "font-bold text-left" }, {
                              default: withCtx(() => [
                                createTextVNode(" \u0418\u0422\u041E\u0413\u041E ")
                              ]),
                              _: 1
                            }),
                            (openBlock(true), createBlock(Fragment, null, renderList(_ctx.plData.expenses.totals.totals, (total, k) => {
                              return openBlock(), createBlock(_component_UiTableCell, { key: k }, {
                                default: withCtx(() => {
                                  var _a3;
                                  return [
                                    createVNode("span", null, toDisplayString(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(+total.value.toFixed(2)) + "\u20BD"), 1),
                                    createVNode("span", null, " (" + toDisplayString(((_a3 = total.changePercent) != null ? _a3 : 0).toFixed(2)) + "%) ", 1)
                                  ];
                                }),
                                _: 2
                              }, 1024);
                            }), 128))
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      (openBlock(true), createBlock(Fragment, null, renderList(_ctx.plData.expenses.totals.data, (item, i) => {
                        return openBlock(), createBlock(_component_UiTableRow, { key: i }, {
                          default: withCtx(() => [
                            createVNode(_component_UiTableCell, null, {
                              default: withCtx(() => [
                                createVNode("div", null, [
                                  createVNode("span", null, toDisplayString(item.title), 1)
                                ])
                              ]),
                              _: 2
                            }, 1024),
                            (openBlock(true), createBlock(Fragment, null, renderList(item.data, (dp, j) => {
                              return openBlock(), createBlock(_component_UiTableCell, {
                                key: j,
                                class: "text-center"
                              }, {
                                default: withCtx(() => [
                                  createVNode("div", { class: ["flex justify-center items-center gap-1"] }, [
                                    createVNode("span", null, toDisplayString(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(+dp.value.toFixed(2)) + "\u20BD"), 1),
                                    createVNode("span", null, " (" + toDisplayString(dp.changePercent) + "%) ", 1)
                                  ])
                                ]),
                                _: 2
                              }, 1024);
                            }), 128))
                          ]),
                          _: 2
                        }, 1024);
                      }), 128)),
                      createVNode(_component_UiTableRow, { class: "text-center bg-slate-300 hover:bg-slate-300" }, {
                        default: withCtx(() => [
                          createVNode(_component_UiTableCell, { class: "font-bold text-left" }, {
                            default: withCtx(() => [
                              createTextVNode(" \u0418\u0422\u041E\u0413\u041E ")
                            ]),
                            _: 1
                          }),
                          (openBlock(true), createBlock(Fragment, null, renderList(_ctx.plData.expenses.totals.totals, (total, k) => {
                            return openBlock(), createBlock(_component_UiTableCell, { key: k }, {
                              default: withCtx(() => {
                                var _a3;
                                return [
                                  createVNode("span", null, toDisplayString(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(+total.value.toFixed(2)) + "\u20BD"), 1),
                                  createVNode("span", null, " (" + toDisplayString(((_a3 = total.changePercent) != null ? _a3 : 0).toFixed(2)) + "%) ", 1)
                                ];
                              }),
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
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_UiTableHeader, null, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_UiTableRow, { class: "text-xl text-center font-semibold bg-white hover:bg-white py-1 pb-2 border-t-1 rounded-t-xl" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_UiTableHead, {
                            colspan: "5",
                            class: "text-center h-4"
                          }, null, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(_component_UiTableHead, {
                              colspan: "5",
                              class: "text-center h-4"
                            })
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_UiTableRow, { class: "text-xl text-center font-semibold bg-white hover:bg-white py-1 pb-2 border-t-1 rounded-t-xl" }, {
                        default: withCtx(() => [
                          createVNode(_component_UiTableHead, {
                            colspan: "5",
                            class: "text-center h-4"
                          })
                        ]),
                        _: 1
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_UiTableHeader, null, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_UiTableRow, { class: "text-xl text-center font-semibold bg-gray-300 hover:bg-gray-300 py-1 pb-2 border-t-1 rounded-t-xl" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_UiTableHead, {
                            colspan: "5",
                            class: "text-center"
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(` \u041E\u0442\u0434\u0435\u043B \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0441\u0442\u0432\u0430\u0447\u0444\u0446\u0439 `);
                              } else {
                                return [
                                  createTextVNode(" \u041E\u0442\u0434\u0435\u043B \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0441\u0442\u0432\u0430\u0447\u0444\u0446\u0439 ")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(_component_UiTableHead, {
                              colspan: "5",
                              class: "text-center"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" \u041E\u0442\u0434\u0435\u043B \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0441\u0442\u0432\u0430\u0447\u0444\u0446\u0439 ")
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
                      createVNode(_component_UiTableRow, { class: "text-xl text-center font-semibold bg-gray-300 hover:bg-gray-300 py-1 pb-2 border-t-1 rounded-t-xl" }, {
                        default: withCtx(() => [
                          createVNode(_component_UiTableHead, {
                            colspan: "5",
                            class: "text-center"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" \u041E\u0442\u0434\u0435\u043B \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0441\u0442\u0432\u0430\u0447\u0444\u0446\u0439 ")
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
              _push2(ssrRenderComponent(_component_UiTableHeader, null, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_UiTableRow, { class: "bg-slate-200 hover:bg-slate-200" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_UiTableHead, { class: "text-xl" }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`\u0417\u0430\u0440\u043F\u043B\u0430\u0442\u044B \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0441\u0442\u0432\u0430 `);
                              } else {
                                return [
                                  createTextVNode("\u0417\u0430\u0440\u043F\u043B\u0430\u0442\u044B \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0441\u0442\u0432\u0430 ")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                          _push4(`<!--[-->`);
                          ssrRenderList(_ctx.plData.periods, (per, i) => {
                            _push4(ssrRenderComponent(_component_UiTableHead, {
                              key: i,
                              class: "text-center"
                            }, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(`${ssrInterpolate(per)}`);
                                } else {
                                  return [
                                    createTextVNode(toDisplayString(per), 1)
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                          });
                          _push4(`<!--]-->`);
                        } else {
                          return [
                            createVNode(_component_UiTableHead, { class: "text-xl" }, {
                              default: withCtx(() => [
                                createTextVNode("\u0417\u0430\u0440\u043F\u043B\u0430\u0442\u044B \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0441\u0442\u0432\u0430 ")
                              ]),
                              _: 1
                            }),
                            (openBlock(true), createBlock(Fragment, null, renderList(_ctx.plData.periods, (per, i) => {
                              return openBlock(), createBlock(_component_UiTableHead, {
                                key: i,
                                class: "text-center"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(per), 1)
                                ]),
                                _: 2
                              }, 1024);
                            }), 128))
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_UiTableRow, { class: "bg-slate-200 hover:bg-slate-200" }, {
                        default: withCtx(() => [
                          createVNode(_component_UiTableHead, { class: "text-xl" }, {
                            default: withCtx(() => [
                              createTextVNode("\u0417\u0430\u0440\u043F\u043B\u0430\u0442\u044B \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0441\u0442\u0432\u0430 ")
                            ]),
                            _: 1
                          }),
                          (openBlock(true), createBlock(Fragment, null, renderList(_ctx.plData.periods, (per, i) => {
                            return openBlock(), createBlock(_component_UiTableHead, {
                              key: i,
                              class: "text-center"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(per), 1)
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
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_UiTableBody, null, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<!--[-->`);
                    ssrRenderList(_ctx.plData.expenses.production.productionSalaries.data, (item, idx3) => {
                      _push3(ssrRenderComponent(_component_UiTableRow, { key: idx3 }, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(ssrRenderComponent(_component_UiTableCell, null, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(`${ssrInterpolate(item.role)}`);
                                } else {
                                  return [
                                    createTextVNode(toDisplayString(item.role), 1)
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                            _push4(`<!--[-->`);
                            ssrRenderList(item.data, (dp, i) => {
                              _push4(ssrRenderComponent(_component_UiTableCell, {
                                key: i,
                                class: "text-center"
                              }, {
                                default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                  if (_push5) {
                                    _push5(`<div class="${ssrRenderClass(["flex justify-center items-center gap-1"])}"${_scopeId4}><span${_scopeId4}>${ssrInterpolate(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(+dp.value.toFixed(2)) + "\u20BD")}</span><span${_scopeId4}> (${ssrInterpolate(dp.changePercent)}%) </span></div>`);
                                  } else {
                                    return [
                                      createVNode("div", { class: ["flex justify-center items-center gap-1"] }, [
                                        createVNode("span", null, toDisplayString(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(+dp.value.toFixed(2)) + "\u20BD"), 1),
                                        createVNode("span", null, " (" + toDisplayString(dp.changePercent) + "%) ", 1)
                                      ])
                                    ];
                                  }
                                }),
                                _: 2
                              }, _parent4, _scopeId3));
                            });
                            _push4(`<!--]-->`);
                          } else {
                            return [
                              createVNode(_component_UiTableCell, null, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(item.role), 1)
                                ]),
                                _: 2
                              }, 1024),
                              (openBlock(true), createBlock(Fragment, null, renderList(item.data, (dp, i) => {
                                return openBlock(), createBlock(_component_UiTableCell, {
                                  key: i,
                                  class: "text-center"
                                }, {
                                  default: withCtx(() => [
                                    createVNode("div", { class: ["flex justify-center items-center gap-1"] }, [
                                      createVNode("span", null, toDisplayString(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(+dp.value.toFixed(2)) + "\u20BD"), 1),
                                      createVNode("span", null, " (" + toDisplayString(dp.changePercent) + "%) ", 1)
                                    ])
                                  ]),
                                  _: 2
                                }, 1024);
                              }), 128))
                            ];
                          }
                        }),
                        _: 2
                      }, _parent3, _scopeId2));
                    });
                    _push3(`<!--]-->`);
                    _push3(ssrRenderComponent(_component_UiTableRow, { class: "text-center bg-slate-300 hover:bg-slate-300" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_UiTableCell, { class: "font-bold text-left" }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(` \u0418\u0422\u041E\u0413\u041E `);
                              } else {
                                return [
                                  createTextVNode(" \u0418\u0422\u041E\u0413\u041E ")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                          _push4(`<!--[-->`);
                          ssrRenderList(_ctx.plData.expenses.production.productionSalaries.totals, (total, idx4) => {
                            _push4(ssrRenderComponent(_component_UiTableCell, { key: idx4 }, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                var _a3, _b3;
                                if (_push5) {
                                  _push5(`<span${_scopeId4}>${ssrInterpolate(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(+total.value.toFixed(2)) + "\u20BD")}</span><span${_scopeId4}> (${ssrInterpolate(((_a3 = total.changePercent) != null ? _a3 : 0).toFixed(2))}%) </span>`);
                                } else {
                                  return [
                                    createVNode("span", null, toDisplayString(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(+total.value.toFixed(2)) + "\u20BD"), 1),
                                    createVNode("span", null, " (" + toDisplayString(((_b3 = total.changePercent) != null ? _b3 : 0).toFixed(2)) + "%) ", 1)
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                          });
                          _push4(`<!--]-->`);
                        } else {
                          return [
                            createVNode(_component_UiTableCell, { class: "font-bold text-left" }, {
                              default: withCtx(() => [
                                createTextVNode(" \u0418\u0422\u041E\u0413\u041E ")
                              ]),
                              _: 1
                            }),
                            (openBlock(true), createBlock(Fragment, null, renderList(_ctx.plData.expenses.production.productionSalaries.totals, (total, idx4) => {
                              return openBlock(), createBlock(_component_UiTableCell, { key: idx4 }, {
                                default: withCtx(() => {
                                  var _a3;
                                  return [
                                    createVNode("span", null, toDisplayString(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(+total.value.toFixed(2)) + "\u20BD"), 1),
                                    createVNode("span", null, " (" + toDisplayString(((_a3 = total.changePercent) != null ? _a3 : 0).toFixed(2)) + "%) ", 1)
                                  ];
                                }),
                                _: 2
                              }, 1024);
                            }), 128))
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      (openBlock(true), createBlock(Fragment, null, renderList(_ctx.plData.expenses.production.productionSalaries.data, (item, idx3) => {
                        return openBlock(), createBlock(_component_UiTableRow, { key: idx3 }, {
                          default: withCtx(() => [
                            createVNode(_component_UiTableCell, null, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(item.role), 1)
                              ]),
                              _: 2
                            }, 1024),
                            (openBlock(true), createBlock(Fragment, null, renderList(item.data, (dp, i) => {
                              return openBlock(), createBlock(_component_UiTableCell, {
                                key: i,
                                class: "text-center"
                              }, {
                                default: withCtx(() => [
                                  createVNode("div", { class: ["flex justify-center items-center gap-1"] }, [
                                    createVNode("span", null, toDisplayString(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(+dp.value.toFixed(2)) + "\u20BD"), 1),
                                    createVNode("span", null, " (" + toDisplayString(dp.changePercent) + "%) ", 1)
                                  ])
                                ]),
                                _: 2
                              }, 1024);
                            }), 128))
                          ]),
                          _: 2
                        }, 1024);
                      }), 128)),
                      createVNode(_component_UiTableRow, { class: "text-center bg-slate-300 hover:bg-slate-300" }, {
                        default: withCtx(() => [
                          createVNode(_component_UiTableCell, { class: "font-bold text-left" }, {
                            default: withCtx(() => [
                              createTextVNode(" \u0418\u0422\u041E\u0413\u041E ")
                            ]),
                            _: 1
                          }),
                          (openBlock(true), createBlock(Fragment, null, renderList(_ctx.plData.expenses.production.productionSalaries.totals, (total, idx4) => {
                            return openBlock(), createBlock(_component_UiTableCell, { key: idx4 }, {
                              default: withCtx(() => {
                                var _a3;
                                return [
                                  createVNode("span", null, toDisplayString(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(+total.value.toFixed(2)) + "\u20BD"), 1),
                                  createVNode("span", null, " (" + toDisplayString(((_a3 = total.changePercent) != null ? _a3 : 0).toFixed(2)) + "%) ", 1)
                                ];
                              }),
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
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_UiTableHeader, null, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_UiTableRow, { class: "text-xl text-center font-semibold bg-white hover:bg-white py-1 pb-2 border-t-1 rounded-t-xl" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_UiTableHead, {
                            colspan: "5",
                            class: "text-center h-4"
                          }, null, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(_component_UiTableHead, {
                              colspan: "5",
                              class: "text-center h-4"
                            })
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_UiTableRow, { class: "text-xl text-center font-semibold bg-white hover:bg-white py-1 pb-2 border-t-1 rounded-t-xl" }, {
                        default: withCtx(() => [
                          createVNode(_component_UiTableHead, {
                            colspan: "5",
                            class: "text-center h-4"
                          })
                        ]),
                        _: 1
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_UiTableHeader, null, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_UiTableRow, { class: "text-xl text-center font-semibold bg-gray-300 hover:bg-gray-300 py-1 pb-2 border-t-1 rounded-t-xl" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_UiTableHead, {
                            colspan: "5",
                            class: "text-center"
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(` \u041A\u043E\u043C\u043C\u0435\u0440\u0447\u0435\u0441\u043A\u0438\u0439 \u043E\u0442\u0434\u0435\u043B `);
                              } else {
                                return [
                                  createTextVNode(" \u041A\u043E\u043C\u043C\u0435\u0440\u0447\u0435\u0441\u043A\u0438\u0439 \u043E\u0442\u0434\u0435\u043B ")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(_component_UiTableHead, {
                              colspan: "5",
                              class: "text-center"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" \u041A\u043E\u043C\u043C\u0435\u0440\u0447\u0435\u0441\u043A\u0438\u0439 \u043E\u0442\u0434\u0435\u043B ")
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
                      createVNode(_component_UiTableRow, { class: "text-xl text-center font-semibold bg-gray-300 hover:bg-gray-300 py-1 pb-2 border-t-1 rounded-t-xl" }, {
                        default: withCtx(() => [
                          createVNode(_component_UiTableHead, {
                            colspan: "5",
                            class: "text-center"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" \u041A\u043E\u043C\u043C\u0435\u0440\u0447\u0435\u0441\u043A\u0438\u0439 \u043E\u0442\u0434\u0435\u043B ")
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
              _push2(ssrRenderComponent(_component_UiTableHeader, null, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_UiTableRow, { class: "bg-slate-200 hover:bg-slate-200" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_UiTableHead, { class: "text-xl" }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`\u0420\u0430\u0441\u0445\u043E\u0434\u044B \u043D\u0430 \u0440\u0435\u043A\u043B\u0430\u043C\u0443 `);
                              } else {
                                return [
                                  createTextVNode("\u0420\u0430\u0441\u0445\u043E\u0434\u044B \u043D\u0430 \u0440\u0435\u043A\u043B\u0430\u043C\u0443 ")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                          _push4(`<!--[-->`);
                          ssrRenderList(_ctx.plData.periods, (per, i) => {
                            _push4(ssrRenderComponent(_component_UiTableHead, {
                              key: i,
                              class: "text-center"
                            }, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(`${ssrInterpolate(per)}`);
                                } else {
                                  return [
                                    createTextVNode(toDisplayString(per), 1)
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                          });
                          _push4(`<!--]-->`);
                        } else {
                          return [
                            createVNode(_component_UiTableHead, { class: "text-xl" }, {
                              default: withCtx(() => [
                                createTextVNode("\u0420\u0430\u0441\u0445\u043E\u0434\u044B \u043D\u0430 \u0440\u0435\u043A\u043B\u0430\u043C\u0443 ")
                              ]),
                              _: 1
                            }),
                            (openBlock(true), createBlock(Fragment, null, renderList(_ctx.plData.periods, (per, i) => {
                              return openBlock(), createBlock(_component_UiTableHead, {
                                key: i,
                                class: "text-center"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(per), 1)
                                ]),
                                _: 2
                              }, 1024);
                            }), 128))
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_UiTableRow, { class: "bg-slate-200 hover:bg-slate-200" }, {
                        default: withCtx(() => [
                          createVNode(_component_UiTableHead, { class: "text-xl" }, {
                            default: withCtx(() => [
                              createTextVNode("\u0420\u0430\u0441\u0445\u043E\u0434\u044B \u043D\u0430 \u0440\u0435\u043A\u043B\u0430\u043C\u0443 ")
                            ]),
                            _: 1
                          }),
                          (openBlock(true), createBlock(Fragment, null, renderList(_ctx.plData.periods, (per, i) => {
                            return openBlock(), createBlock(_component_UiTableHead, {
                              key: i,
                              class: "text-center"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(per), 1)
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
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_UiTableBody, null, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<!--[-->`);
                    ssrRenderList(_ctx.plData.expenses.commercial.adExpenses.data, (item, idx5) => {
                      _push3(ssrRenderComponent(_component_UiTableRow, { key: idx5 }, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(ssrRenderComponent(_component_UiTableCell, null, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(`${ssrInterpolate(item.title)}`);
                                } else {
                                  return [
                                    createTextVNode(toDisplayString(item.title), 1)
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                            _push4(`<!--[-->`);
                            ssrRenderList(item.data, (dp, i) => {
                              _push4(ssrRenderComponent(_component_UiTableCell, {
                                key: i,
                                class: "text-center"
                              }, {
                                default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                  if (_push5) {
                                    _push5(`<div class="${ssrRenderClass(["flex justify-center items-center gap-1"])}"${_scopeId4}><span${_scopeId4}>${ssrInterpolate(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(+dp.value.toFixed(2)) + "\u20BD")}</span><span${_scopeId4}> (${ssrInterpolate(dp.changePercent)}%) </span></div>`);
                                  } else {
                                    return [
                                      createVNode("div", { class: ["flex justify-center items-center gap-1"] }, [
                                        createVNode("span", null, toDisplayString(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(+dp.value.toFixed(2)) + "\u20BD"), 1),
                                        createVNode("span", null, " (" + toDisplayString(dp.changePercent) + "%) ", 1)
                                      ])
                                    ];
                                  }
                                }),
                                _: 2
                              }, _parent4, _scopeId3));
                            });
                            _push4(`<!--]-->`);
                          } else {
                            return [
                              createVNode(_component_UiTableCell, null, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(item.title), 1)
                                ]),
                                _: 2
                              }, 1024),
                              (openBlock(true), createBlock(Fragment, null, renderList(item.data, (dp, i) => {
                                return openBlock(), createBlock(_component_UiTableCell, {
                                  key: i,
                                  class: "text-center"
                                }, {
                                  default: withCtx(() => [
                                    createVNode("div", { class: ["flex justify-center items-center gap-1"] }, [
                                      createVNode("span", null, toDisplayString(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(+dp.value.toFixed(2)) + "\u20BD"), 1),
                                      createVNode("span", null, " (" + toDisplayString(dp.changePercent) + "%) ", 1)
                                    ])
                                  ]),
                                  _: 2
                                }, 1024);
                              }), 128))
                            ];
                          }
                        }),
                        _: 2
                      }, _parent3, _scopeId2));
                    });
                    _push3(`<!--]-->`);
                    _push3(ssrRenderComponent(_component_UiTableRow, { class: "text-center bg-slate-300 hover:bg-slate-300" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_UiTableCell, { class: "font-bold text-left" }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(` \u0418\u0422\u041E\u0413\u041E `);
                              } else {
                                return [
                                  createTextVNode(" \u0418\u0422\u041E\u0413\u041E ")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                          _push4(`<!--[-->`);
                          ssrRenderList(_ctx.plData.expenses.commercial.adExpenses.totals, (total, idx6) => {
                            _push4(ssrRenderComponent(_component_UiTableCell, { key: idx6 }, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                var _a3, _b3;
                                if (_push5) {
                                  _push5(`<span${_scopeId4}>${ssrInterpolate(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(+total.value.toFixed(2)) + "\u20BD")}</span><span${_scopeId4}> (${ssrInterpolate(((_a3 = total.changePercent) != null ? _a3 : 0).toFixed(2))}%) </span>`);
                                } else {
                                  return [
                                    createVNode("span", null, toDisplayString(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(+total.value.toFixed(2)) + "\u20BD"), 1),
                                    createVNode("span", null, " (" + toDisplayString(((_b3 = total.changePercent) != null ? _b3 : 0).toFixed(2)) + "%) ", 1)
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                          });
                          _push4(`<!--]-->`);
                        } else {
                          return [
                            createVNode(_component_UiTableCell, { class: "font-bold text-left" }, {
                              default: withCtx(() => [
                                createTextVNode(" \u0418\u0422\u041E\u0413\u041E ")
                              ]),
                              _: 1
                            }),
                            (openBlock(true), createBlock(Fragment, null, renderList(_ctx.plData.expenses.commercial.adExpenses.totals, (total, idx6) => {
                              return openBlock(), createBlock(_component_UiTableCell, { key: idx6 }, {
                                default: withCtx(() => {
                                  var _a3;
                                  return [
                                    createVNode("span", null, toDisplayString(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(+total.value.toFixed(2)) + "\u20BD"), 1),
                                    createVNode("span", null, " (" + toDisplayString(((_a3 = total.changePercent) != null ? _a3 : 0).toFixed(2)) + "%) ", 1)
                                  ];
                                }),
                                _: 2
                              }, 1024);
                            }), 128))
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      (openBlock(true), createBlock(Fragment, null, renderList(_ctx.plData.expenses.commercial.adExpenses.data, (item, idx5) => {
                        return openBlock(), createBlock(_component_UiTableRow, { key: idx5 }, {
                          default: withCtx(() => [
                            createVNode(_component_UiTableCell, null, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(item.title), 1)
                              ]),
                              _: 2
                            }, 1024),
                            (openBlock(true), createBlock(Fragment, null, renderList(item.data, (dp, i) => {
                              return openBlock(), createBlock(_component_UiTableCell, {
                                key: i,
                                class: "text-center"
                              }, {
                                default: withCtx(() => [
                                  createVNode("div", { class: ["flex justify-center items-center gap-1"] }, [
                                    createVNode("span", null, toDisplayString(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(+dp.value.toFixed(2)) + "\u20BD"), 1),
                                    createVNode("span", null, " (" + toDisplayString(dp.changePercent) + "%) ", 1)
                                  ])
                                ]),
                                _: 2
                              }, 1024);
                            }), 128))
                          ]),
                          _: 2
                        }, 1024);
                      }), 128)),
                      createVNode(_component_UiTableRow, { class: "text-center bg-slate-300 hover:bg-slate-300" }, {
                        default: withCtx(() => [
                          createVNode(_component_UiTableCell, { class: "font-bold text-left" }, {
                            default: withCtx(() => [
                              createTextVNode(" \u0418\u0422\u041E\u0413\u041E ")
                            ]),
                            _: 1
                          }),
                          (openBlock(true), createBlock(Fragment, null, renderList(_ctx.plData.expenses.commercial.adExpenses.totals, (total, idx6) => {
                            return openBlock(), createBlock(_component_UiTableCell, { key: idx6 }, {
                              default: withCtx(() => {
                                var _a3;
                                return [
                                  createVNode("span", null, toDisplayString(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(+total.value.toFixed(2)) + "\u20BD"), 1),
                                  createVNode("span", null, " (" + toDisplayString(((_a3 = total.changePercent) != null ? _a3 : 0).toFixed(2)) + "%) ", 1)
                                ];
                              }),
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
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_UiTableHeader, null, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_UiTableRow, { class: "bg-slate-200 hover:bg-slate-200" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_UiTableHead, { class: "text-xl" }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`\u0417\u0430\u0440\u043F\u043B\u0430\u0442\u044B \u043A\u043E\u043C\u043C\u0435\u0440\u0447\u0435\u0441\u043A\u043E\u0433\u043E \u043E\u0442\u0434\u0435\u043B\u0430 `);
                              } else {
                                return [
                                  createTextVNode("\u0417\u0430\u0440\u043F\u043B\u0430\u0442\u044B \u043A\u043E\u043C\u043C\u0435\u0440\u0447\u0435\u0441\u043A\u043E\u0433\u043E \u043E\u0442\u0434\u0435\u043B\u0430 ")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                          _push4(`<!--[-->`);
                          ssrRenderList(_ctx.plData.periods, (per, i) => {
                            _push4(ssrRenderComponent(_component_UiTableHead, {
                              key: i,
                              class: "text-center"
                            }, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(`${ssrInterpolate(per)}`);
                                } else {
                                  return [
                                    createTextVNode(toDisplayString(per), 1)
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                          });
                          _push4(`<!--]-->`);
                        } else {
                          return [
                            createVNode(_component_UiTableHead, { class: "text-xl" }, {
                              default: withCtx(() => [
                                createTextVNode("\u0417\u0430\u0440\u043F\u043B\u0430\u0442\u044B \u043A\u043E\u043C\u043C\u0435\u0440\u0447\u0435\u0441\u043A\u043E\u0433\u043E \u043E\u0442\u0434\u0435\u043B\u0430 ")
                              ]),
                              _: 1
                            }),
                            (openBlock(true), createBlock(Fragment, null, renderList(_ctx.plData.periods, (per, i) => {
                              return openBlock(), createBlock(_component_UiTableHead, {
                                key: i,
                                class: "text-center"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(per), 1)
                                ]),
                                _: 2
                              }, 1024);
                            }), 128))
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_UiTableRow, { class: "bg-slate-200 hover:bg-slate-200" }, {
                        default: withCtx(() => [
                          createVNode(_component_UiTableHead, { class: "text-xl" }, {
                            default: withCtx(() => [
                              createTextVNode("\u0417\u0430\u0440\u043F\u043B\u0430\u0442\u044B \u043A\u043E\u043C\u043C\u0435\u0440\u0447\u0435\u0441\u043A\u043E\u0433\u043E \u043E\u0442\u0434\u0435\u043B\u0430 ")
                            ]),
                            _: 1
                          }),
                          (openBlock(true), createBlock(Fragment, null, renderList(_ctx.plData.periods, (per, i) => {
                            return openBlock(), createBlock(_component_UiTableHead, {
                              key: i,
                              class: "text-center"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(per), 1)
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
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_UiTableBody, null, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<!--[-->`);
                    ssrRenderList(_ctx.plData.expenses.commercial.commercialSalaries.data, (item, idx7) => {
                      _push3(ssrRenderComponent(_component_UiTableRow, { key: idx7 }, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(ssrRenderComponent(_component_UiTableCell, null, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(`${ssrInterpolate(item.role)}`);
                                } else {
                                  return [
                                    createTextVNode(toDisplayString(item.role), 1)
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                            _push4(`<!--[-->`);
                            ssrRenderList(item.data, (dp, i) => {
                              _push4(ssrRenderComponent(_component_UiTableCell, {
                                key: i,
                                class: "text-center"
                              }, {
                                default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                  if (_push5) {
                                    _push5(`<div class="${ssrRenderClass(["flex justify-center items-center gap-1"])}"${_scopeId4}><span${_scopeId4}>${ssrInterpolate(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(+dp.value.toFixed(2)) + "\u20BD")}</span><span${_scopeId4}> (${ssrInterpolate(dp.changePercent)}%) </span></div>`);
                                  } else {
                                    return [
                                      createVNode("div", { class: ["flex justify-center items-center gap-1"] }, [
                                        createVNode("span", null, toDisplayString(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(+dp.value.toFixed(2)) + "\u20BD"), 1),
                                        createVNode("span", null, " (" + toDisplayString(dp.changePercent) + "%) ", 1)
                                      ])
                                    ];
                                  }
                                }),
                                _: 2
                              }, _parent4, _scopeId3));
                            });
                            _push4(`<!--]-->`);
                          } else {
                            return [
                              createVNode(_component_UiTableCell, null, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(item.role), 1)
                                ]),
                                _: 2
                              }, 1024),
                              (openBlock(true), createBlock(Fragment, null, renderList(item.data, (dp, i) => {
                                return openBlock(), createBlock(_component_UiTableCell, {
                                  key: i,
                                  class: "text-center"
                                }, {
                                  default: withCtx(() => [
                                    createVNode("div", { class: ["flex justify-center items-center gap-1"] }, [
                                      createVNode("span", null, toDisplayString(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(+dp.value.toFixed(2)) + "\u20BD"), 1),
                                      createVNode("span", null, " (" + toDisplayString(dp.changePercent) + "%) ", 1)
                                    ])
                                  ]),
                                  _: 2
                                }, 1024);
                              }), 128))
                            ];
                          }
                        }),
                        _: 2
                      }, _parent3, _scopeId2));
                    });
                    _push3(`<!--]-->`);
                    _push3(ssrRenderComponent(_component_UiTableRow, { class: "text-center bg-slate-300" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_UiTableCell, { class: "font-bold text-left" }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(` \u0418\u0422\u041E\u0413\u041E `);
                              } else {
                                return [
                                  createTextVNode(" \u0418\u0422\u041E\u0413\u041E ")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                          _push4(`<!--[-->`);
                          ssrRenderList(_ctx.plData.expenses.commercial.commercialSalaries.totals, (total, idx8) => {
                            _push4(ssrRenderComponent(_component_UiTableCell, { key: idx8 }, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                var _a3, _b3;
                                if (_push5) {
                                  _push5(`<span${_scopeId4}>${ssrInterpolate(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(+total.value.toFixed(2)) + "\u20BD")}</span><span${_scopeId4}> (${ssrInterpolate(((_a3 = total.changePercent) != null ? _a3 : 0).toFixed(2))}%) </span>`);
                                } else {
                                  return [
                                    createVNode("span", null, toDisplayString(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(+total.value.toFixed(2)) + "\u20BD"), 1),
                                    createVNode("span", null, " (" + toDisplayString(((_b3 = total.changePercent) != null ? _b3 : 0).toFixed(2)) + "%) ", 1)
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                          });
                          _push4(`<!--]-->`);
                        } else {
                          return [
                            createVNode(_component_UiTableCell, { class: "font-bold text-left" }, {
                              default: withCtx(() => [
                                createTextVNode(" \u0418\u0422\u041E\u0413\u041E ")
                              ]),
                              _: 1
                            }),
                            (openBlock(true), createBlock(Fragment, null, renderList(_ctx.plData.expenses.commercial.commercialSalaries.totals, (total, idx8) => {
                              return openBlock(), createBlock(_component_UiTableCell, { key: idx8 }, {
                                default: withCtx(() => {
                                  var _a3;
                                  return [
                                    createVNode("span", null, toDisplayString(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(+total.value.toFixed(2)) + "\u20BD"), 1),
                                    createVNode("span", null, " (" + toDisplayString(((_a3 = total.changePercent) != null ? _a3 : 0).toFixed(2)) + "%) ", 1)
                                  ];
                                }),
                                _: 2
                              }, 1024);
                            }), 128))
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      (openBlock(true), createBlock(Fragment, null, renderList(_ctx.plData.expenses.commercial.commercialSalaries.data, (item, idx7) => {
                        return openBlock(), createBlock(_component_UiTableRow, { key: idx7 }, {
                          default: withCtx(() => [
                            createVNode(_component_UiTableCell, null, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(item.role), 1)
                              ]),
                              _: 2
                            }, 1024),
                            (openBlock(true), createBlock(Fragment, null, renderList(item.data, (dp, i) => {
                              return openBlock(), createBlock(_component_UiTableCell, {
                                key: i,
                                class: "text-center"
                              }, {
                                default: withCtx(() => [
                                  createVNode("div", { class: ["flex justify-center items-center gap-1"] }, [
                                    createVNode("span", null, toDisplayString(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(+dp.value.toFixed(2)) + "\u20BD"), 1),
                                    createVNode("span", null, " (" + toDisplayString(dp.changePercent) + "%) ", 1)
                                  ])
                                ]),
                                _: 2
                              }, 1024);
                            }), 128))
                          ]),
                          _: 2
                        }, 1024);
                      }), 128)),
                      createVNode(_component_UiTableRow, { class: "text-center bg-slate-300" }, {
                        default: withCtx(() => [
                          createVNode(_component_UiTableCell, { class: "font-bold text-left" }, {
                            default: withCtx(() => [
                              createTextVNode(" \u0418\u0422\u041E\u0413\u041E ")
                            ]),
                            _: 1
                          }),
                          (openBlock(true), createBlock(Fragment, null, renderList(_ctx.plData.expenses.commercial.commercialSalaries.totals, (total, idx8) => {
                            return openBlock(), createBlock(_component_UiTableCell, { key: idx8 }, {
                              default: withCtx(() => {
                                var _a3;
                                return [
                                  createVNode("span", null, toDisplayString(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(+total.value.toFixed(2)) + "\u20BD"), 1),
                                  createVNode("span", null, " (" + toDisplayString(((_a3 = total.changePercent) != null ? _a3 : 0).toFixed(2)) + "%) ", 1)
                                ];
                              }),
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
              }, _parent2, _scopeId));
              _push2(`<!--]-->`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              createVNode(_component_UiTableHeader, null, {
                default: withCtx(() => [
                  createVNode(_component_UiTableRow, { class: "bg-slate-200 hover:bg-slate-200" }, {
                    default: withCtx(() => [
                      createVNode(_component_UiTableHead, { class: "text-xl" }, {
                        default: withCtx(() => [
                          createTextVNode("\u0414\u043E\u0445\u043E\u0434\u044B")
                        ]),
                        _: 1
                      }),
                      (openBlock(true), createBlock(Fragment, null, renderList(_ctx.plData.periods, (per, i) => {
                        return openBlock(), createBlock(_component_UiTableHead, {
                          key: i,
                          class: "text-center"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(per), 1)
                          ]),
                          _: 2
                        }, 1024);
                      }), 128))
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(_component_UiTableBody, { class: "font-semibold" }, {
                default: withCtx(() => [
                  createVNode(_component_UiTableRow, null, {
                    default: withCtx(() => [
                      createVNode(_component_UiTableCell, null, {
                        default: withCtx(() => [
                          createTextVNode("\u041E\u0444\u043E\u0440\u043C\u043B\u0435\u043D\u043D\u044B\u0435 \u0437\u0430\u043A\u0430\u0437\u044B")
                        ]),
                        _: 1
                      }),
                      (openBlock(true), createBlock(Fragment, null, renderList(unref(incomeAllDealsPrice), (dp, i) => {
                        return openBlock(), createBlock(_component_UiTableCell, {
                          key: i,
                          class: "text-center"
                        }, {
                          default: withCtx(() => [
                            createVNode("div", {
                              class: [
                                "flex justify-center items-center gap-1",
                                dp.changePercent < 0 ? "text-red-600/90" : "",
                                dp.changePercent > 0 ? "text-green-700/90" : "",
                                dp.changePercent === 0 ? "text-slate-500/90" : ""
                              ]
                            }, [
                              createVNode("span", null, toDisplayString(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(dp.value) + "\u20BD"), 1),
                              createVNode("span", null, " (" + toDisplayString(dp.changePercent) + "%) ", 1)
                            ], 2)
                          ]),
                          _: 2
                        }, 1024);
                      }), 128))
                    ]),
                    _: 1
                  }),
                  createVNode(_component_UiTableRow, null, {
                    default: withCtx(() => [
                      createVNode(_component_UiTableCell, null, {
                        default: withCtx(() => [
                          createTextVNode("\u041E\u0442\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u043D\u044B\u0435 \u0437\u0430\u043A\u0430\u0437\u044B")
                        ]),
                        _: 1
                      }),
                      (openBlock(true), createBlock(Fragment, null, renderList(unref(incomeSendDeals), (dp, i) => {
                        return openBlock(), createBlock(_component_UiTableCell, {
                          key: i,
                          class: "text-center"
                        }, {
                          default: withCtx(() => [
                            createVNode("div", {
                              class: [
                                "flex justify-center items-center gap-1",
                                dp.changePercent < 0 ? "text-red-600/90" : "",
                                dp.changePercent > 0 ? "text-green-700/90" : "",
                                dp.changePercent === 0 ? "text-slate-500/90" : ""
                              ]
                            }, [
                              createVNode("span", null, toDisplayString(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(dp.value) + "\u20BD"), 1),
                              createVNode("span", null, " (" + toDisplayString(dp.changePercent) + "%) ", 1)
                            ], 2)
                          ]),
                          _: 2
                        }, 1024);
                      }), 128))
                    ]),
                    _: 1
                  }),
                  createVNode(_component_UiTableRow, null, {
                    default: withCtx(() => [
                      createVNode(_component_UiTableCell, null, {
                        default: withCtx(() => [
                          createTextVNode("\u0412\u044B\u0440\u0443\u0447\u043A\u0430")
                        ]),
                        _: 1
                      }),
                      (openBlock(true), createBlock(Fragment, null, renderList(unref(incomeRevenue), (dp, i) => {
                        return openBlock(), createBlock(_component_UiTableCell, {
                          key: i,
                          class: "text-center"
                        }, {
                          default: withCtx(() => [
                            createVNode("div", {
                              class: [
                                "flex justify-center items-center gap-1",
                                dp.changePercent < 0 ? "text-red-600/90" : "",
                                dp.changePercent > 0 ? "text-green-700/90" : "",
                                dp.changePercent === 0 ? "text-slate-500/90" : ""
                              ]
                            }, [
                              createVNode("span", null, toDisplayString(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(dp.value) + "\u20BD"), 1),
                              createVNode("span", null, " (" + toDisplayString(dp.changePercent) + "%) ", 1)
                            ], 2)
                          ]),
                          _: 2
                        }, 1024);
                      }), 128))
                    ]),
                    _: 1
                  }),
                  createVNode(_component_UiTableRow, null, {
                    default: withCtx(() => [
                      createVNode(_component_UiTableCell, null, {
                        default: withCtx(() => [
                          createTextVNode("\u0427\u0438\u0441\u0442\u0430\u044F \u043F\u0440\u0438\u0431\u044B\u043B\u044C")
                        ]),
                        _: 1
                      }),
                      (openBlock(true), createBlock(Fragment, null, renderList(incomeNetProfit.value, (dp, i) => {
                        return openBlock(), createBlock(_component_UiTableCell, {
                          key: `net-profit-${i}`,
                          class: "text-center"
                        }, {
                          default: withCtx(() => [
                            createVNode("div", {
                              class: [
                                "flex justify-center items-center gap-1",
                                dp.value < 0 ? "text-red-600/90" : "",
                                dp.value > 0 ? "text-green-700/90" : "",
                                dp.value === 0 ? "text-slate-500/90" : ""
                              ]
                            }, [
                              createVNode("span", null, toDisplayString(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(dp.value) + "\u20BD"), 1)
                            ], 2)
                          ]),
                          _: 2
                        }, 1024);
                      }), 128))
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(_component_UiTableHeader, null, {
                default: withCtx(() => [
                  createVNode(_component_UiTableRow, { class: "text-xl text-center font-semibold bg-white hover:bg-white py-1 pb-2 border-t-1 rounded-t-xl" }, {
                    default: withCtx(() => [
                      createVNode(_component_UiTableHead, {
                        colspan: "5",
                        class: "text-center h-4"
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(_component_UiTableHeader, null, {
                default: withCtx(() => [
                  createVNode(_component_UiTableRow, { class: "bg-red-200 hover:bg-red-200" }, {
                    default: withCtx(() => [
                      createVNode(_component_UiTableHead, { class: "text-xl font-bold" }, {
                        default: withCtx(() => [
                          createTextVNode("\u0420\u0430\u0441\u0445\u043E\u0434\u044B")
                        ]),
                        _: 1
                      }),
                      (openBlock(true), createBlock(Fragment, null, renderList(_ctx.plData.periods, (per, i) => {
                        return openBlock(), createBlock(_component_UiTableHead, {
                          key: `expenses-${i}`,
                          class: "text-center"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(per), 1)
                          ]),
                          _: 2
                        }, 1024);
                      }), 128))
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(_component_UiTableBody, { class: "font-semibold" }, {
                default: withCtx(() => [
                  createVNode(_component_UiTableRow, null, {
                    default: withCtx(() => [
                      createVNode(_component_UiTableCell, { class: "font-bold" }, {
                        default: withCtx(() => [
                          createTextVNode("\u0412\u0441\u0435\u0433\u043E \u0440\u0430\u0441\u0445\u043E\u0434\u043E\u0432")
                        ]),
                        _: 1
                      }),
                      (openBlock(true), createBlock(Fragment, null, renderList(totalExpensesShare.value, (dp, i) => {
                        return openBlock(), createBlock(_component_UiTableCell, {
                          key: `expenses-val-${i}`,
                          class: "text-center"
                        }, {
                          default: withCtx(() => [
                            createVNode("div", {
                              class: [
                                "flex justify-center items-center gap-1",
                                dp.isIncreased ? "text-red-600/90" : "",
                                dp.isDecreased ? "text-green-700/90" : "",
                                !dp.isIncreased && !dp.isDecreased ? "text-slate-500/90" : ""
                              ]
                            }, [
                              createVNode("span", null, toDisplayString(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(+dp.value.toFixed(2)) + "\u20BD"), 1),
                              createVNode("span", null, " (" + toDisplayString(dp.percent.toFixed(2)) + "%) ", 1)
                            ], 2)
                          ]),
                          _: 2
                        }, 1024);
                      }), 128))
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              ((_n = (_m = props.plData.prodExpensesByPeriod) == null ? void 0 : _m.length) != null ? _n : 0) > 0 ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                createVNode(_component_UiTableHeader, null, {
                  default: withCtx(() => [
                    createVNode(_component_UiTableRow, { class: "text-xl text-center font-semibold bg-white hover:bg-white py-1 pb-2 border-t-1 rounded-t-xl" }, {
                      default: withCtx(() => [
                        createVNode(_component_UiTableHead, {
                          colspan: "5",
                          class: "text-center h-4"
                        })
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                createVNode(_component_UiTableHeader, null, {
                  default: withCtx(() => [
                    createVNode(_component_UiTableRow, { class: "bg-slate-200 hover:bg-slate-200" }, {
                      default: withCtx(() => [
                        createVNode(_component_UiTableHead, { class: "text-xl" }, {
                          default: withCtx(() => [
                            createTextVNode("\u0420\u0430\u0441\u0445\u043E\u0434\u044B \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0441\u0442\u0432\u0430")
                          ]),
                          _: 1
                        }),
                        (openBlock(true), createBlock(Fragment, null, renderList(_ctx.plData.periods, (per, i) => {
                          return openBlock(), createBlock(_component_UiTableHead, {
                            key: `prod-${i}`,
                            class: "text-center"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(per), 1)
                            ]),
                            _: 2
                          }, 1024);
                        }), 128))
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                createVNode(_component_UiTableBody, null, {
                  default: withCtx(() => [
                    createVNode(_component_UiTableRow, null, {
                      default: withCtx(() => [
                        createVNode(_component_UiTableCell, null, {
                          default: withCtx(() => [
                            createTextVNode("\u0420\u0430\u0441\u0445\u043E\u0434\u044B \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0441\u0442\u0432\u0430")
                          ]),
                          _: 1
                        }),
                        (openBlock(true), createBlock(Fragment, null, renderList(unref(productionExpensesShare), (dp, i) => {
                          return openBlock(), createBlock(_component_UiTableCell, {
                            key: `prod-val-${i}`,
                            class: "text-center"
                          }, {
                            default: withCtx(() => [
                              createVNode("div", { class: ["flex justify-center items-center gap-1"] }, [
                                createVNode("span", null, toDisplayString(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(+dp.value.toFixed(2)) + "\u20BD"), 1),
                                createVNode("span", null, " (" + toDisplayString(dp.percent.toFixed(2)) + "%) ", 1)
                              ])
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
              ], 64)) : createCommentVNode("", true),
              ((_p = (_o = props.plData.adExpenses) == null ? void 0 : _o.length) != null ? _p : 0) > 0 ? (openBlock(), createBlock(Fragment, { key: 1 }, [
                createVNode(_component_UiTableHeader, null, {
                  default: withCtx(() => [
                    createVNode(_component_UiTableRow, { class: "text-xl text-center font-semibold bg-white hover:bg-white py-1 pb-2 border-t-1 rounded-t-xl" }, {
                      default: withCtx(() => [
                        createVNode(_component_UiTableHead, {
                          colspan: "5",
                          class: "text-center h-4"
                        })
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                createVNode(_component_UiTableHeader, null, {
                  default: withCtx(() => [
                    createVNode(_component_UiTableRow, { class: "bg-slate-200 hover:bg-slate-200" }, {
                      default: withCtx(() => [
                        createVNode(_component_UiTableHead, { class: "text-xl" }, {
                          default: withCtx(() => [
                            createTextVNode("\u0420\u0430\u0441\u0445\u043E\u0434\u044B \u043D\u0430 \u0440\u0435\u043A\u043B\u0430\u043C\u0443")
                          ]),
                          _: 1
                        }),
                        (openBlock(true), createBlock(Fragment, null, renderList(_ctx.plData.periods, (per, i) => {
                          return openBlock(), createBlock(_component_UiTableHead, {
                            key: `ad-${i}`,
                            class: "text-center"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(per), 1)
                            ]),
                            _: 2
                          }, 1024);
                        }), 128))
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                createVNode(_component_UiTableBody, null, {
                  default: withCtx(() => [
                    createVNode(_component_UiTableRow, null, {
                      default: withCtx(() => [
                        createVNode(_component_UiTableCell, null, {
                          default: withCtx(() => [
                            createTextVNode("\u0420\u0430\u0441\u0445\u043E\u0434\u044B \u043D\u0430 \u0440\u0435\u043A\u043B\u0430\u043C\u0443")
                          ]),
                          _: 1
                        }),
                        (openBlock(true), createBlock(Fragment, null, renderList(unref(adExpensesShare), (dp, i) => {
                          return openBlock(), createBlock(_component_UiTableCell, {
                            key: `ad-val-${i}`,
                            class: "text-center"
                          }, {
                            default: withCtx(() => [
                              createVNode("div", { class: ["flex justify-center items-center gap-1"] }, [
                                createVNode("span", null, toDisplayString(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(+dp.value.toFixed(2)) + "\u20BD"), 1),
                                createVNode("span", null, " (" + toDisplayString(dp.percent.toFixed(2)) + "%) ", 1)
                              ])
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
              ], 64)) : createCommentVNode("", true),
              ((_r = (_q = props.plData.mopSalaries) == null ? void 0 : _q.length) != null ? _r : 0) > 0 || ((_t = (_s = props.plData.ropSalaries) == null ? void 0 : _s.length) != null ? _t : 0) > 0 || ((_v = (_u = props.plData.movSalaries) == null ? void 0 : _u.length) != null ? _v : 0) > 0 || ((_x = (_w = props.plData.designExpensesByPeriod) == null ? void 0 : _w.length) != null ? _x : 0) > 0 ? (openBlock(), createBlock(Fragment, { key: 2 }, [
                createVNode(_component_UiTableHeader, null, {
                  default: withCtx(() => [
                    createVNode(_component_UiTableRow, { class: "text-xl text-center font-semibold bg-white hover:bg-white py-1 pb-2 border-t-1 rounded-t-xl" }, {
                      default: withCtx(() => [
                        createVNode(_component_UiTableHead, {
                          colspan: "5",
                          class: "text-center h-4"
                        })
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                createVNode(_component_UiTableHeader, null, {
                  default: withCtx(() => [
                    createVNode(_component_UiTableRow, { class: "bg-slate-200 hover:bg-slate-200" }, {
                      default: withCtx(() => [
                        createVNode(_component_UiTableHead, { class: "text-xl" }, {
                          default: withCtx(() => [
                            createTextVNode("\u0417\u0430\u0440\u043F\u043B\u0430\u0442\u044B \u043A\u043E\u043C\u043C\u0435\u0440\u0447\u0435\u0441\u043A\u043E\u0433\u043E \u043E\u0442\u0434\u0435\u043B\u0430")
                          ]),
                          _: 1
                        }),
                        (openBlock(true), createBlock(Fragment, null, renderList(_ctx.plData.periods, (per, i) => {
                          return openBlock(), createBlock(_component_UiTableHead, {
                            key: `salaries-${i}`,
                            class: "text-center"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(per), 1)
                            ]),
                            _: 2
                          }, 1024);
                        }), 128))
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                createVNode(_component_UiTableBody, null, {
                  default: withCtx(() => {
                    var _a3, _b3, _c3, _d3, _e3, _f3, _g2, _h2;
                    return [
                      ((_b3 = (_a3 = props.plData.mopSalaries) == null ? void 0 : _a3.length) != null ? _b3 : 0) > 0 ? (openBlock(), createBlock(_component_UiTableRow, { key: 0 }, {
                        default: withCtx(() => [
                          createVNode(_component_UiTableCell, null, {
                            default: withCtx(() => [
                              createTextVNode("\u0417\u0430\u0440\u043F\u043B\u0430\u0442\u044B \u043C\u0435\u043D\u0435\u0434\u0436\u0435\u0440\u043E\u0432 \u043E\u0442\u0434\u0435\u043B\u0430 \u043F\u0440\u043E\u0434\u0430\u0436")
                            ]),
                            _: 1
                          }),
                          (openBlock(true), createBlock(Fragment, null, renderList(unref(mopSalariesShare), (dp, i) => {
                            return openBlock(), createBlock(_component_UiTableCell, {
                              key: `mop-val-${i}`,
                              class: "text-center"
                            }, {
                              default: withCtx(() => [
                                createVNode("div", { class: ["flex justify-center items-center gap-1"] }, [
                                  createVNode("span", null, toDisplayString(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(+dp.value.toFixed(2)) + "\u20BD"), 1),
                                  createVNode("span", null, " (" + toDisplayString(dp.percent.toFixed(2)) + "%) ", 1)
                                ])
                              ]),
                              _: 2
                            }, 1024);
                          }), 128))
                        ]),
                        _: 1
                      })) : createCommentVNode("", true),
                      ((_d3 = (_c3 = props.plData.ropSalaries) == null ? void 0 : _c3.length) != null ? _d3 : 0) > 0 ? (openBlock(), createBlock(_component_UiTableRow, { key: 1 }, {
                        default: withCtx(() => [
                          createVNode(_component_UiTableCell, null, {
                            default: withCtx(() => [
                              createTextVNode("\u0417\u0430\u0440\u043F\u043B\u0430\u0442\u044B \u0440\u043E\u043F\u043E\u0432 ")
                            ]),
                            _: 1
                          }),
                          (openBlock(true), createBlock(Fragment, null, renderList(unref(ropSalariesShare), (dp, i) => {
                            return openBlock(), createBlock(_component_UiTableCell, {
                              key: `rop-val-${i}`,
                              class: "text-center"
                            }, {
                              default: withCtx(() => [
                                createVNode("div", { class: ["flex justify-center items-center gap-1"] }, [
                                  createVNode("span", null, toDisplayString(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(+dp.value.toFixed(2)) + "\u20BD"), 1),
                                  createVNode("span", null, " (" + toDisplayString(dp.percent.toFixed(2)) + "%) ", 1)
                                ])
                              ]),
                              _: 2
                            }, 1024);
                          }), 128))
                        ]),
                        _: 1
                      })) : createCommentVNode("", true),
                      ((_f3 = (_e3 = props.plData.movSalaries) == null ? void 0 : _e3.length) != null ? _f3 : 0) > 0 ? (openBlock(), createBlock(_component_UiTableRow, { key: 2 }, {
                        default: withCtx(() => [
                          createVNode(_component_UiTableCell, null, {
                            default: withCtx(() => [
                              createTextVNode("\u0417\u0430\u0440\u043F\u043B\u0430\u0442\u044B \u043C\u0435\u043D\u0435\u0434\u0436\u0435\u0440\u043E\u0432 \u043E\u0442\u0434\u0435\u043B\u0430 \u0432\u0435\u0434\u0435\u043D\u0438\u044F")
                            ]),
                            _: 1
                          }),
                          (openBlock(true), createBlock(Fragment, null, renderList(unref(movSalariesShare), (dp, i) => {
                            return openBlock(), createBlock(_component_UiTableCell, {
                              key: `mov-val-${i}`,
                              class: "text-center"
                            }, {
                              default: withCtx(() => [
                                createVNode("div", { class: ["flex justify-center items-center gap-1"] }, [
                                  createVNode("span", null, toDisplayString(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(+dp.value.toFixed(2)) + "\u20BD"), 1),
                                  createVNode("span", null, " (" + toDisplayString(dp.percent.toFixed(2)) + "%) ", 1)
                                ])
                              ]),
                              _: 2
                            }, 1024);
                          }), 128))
                        ]),
                        _: 1
                      })) : createCommentVNode("", true),
                      ((_h2 = (_g2 = props.plData.designExpensesByPeriod) == null ? void 0 : _g2.length) != null ? _h2 : 0) > 0 ? (openBlock(), createBlock(_component_UiTableRow, { key: 3 }, {
                        default: withCtx(() => [
                          createVNode(_component_UiTableCell, null, {
                            default: withCtx(() => [
                              createTextVNode("\u0420\u0430\u0441\u0445\u043E\u0434\u044B \u043D\u0430 \u0434\u0438\u0437\u0430\u0439\u043D")
                            ]),
                            _: 1
                          }),
                          (openBlock(true), createBlock(Fragment, null, renderList(unref(designExpensesShare), (dp, i) => {
                            return openBlock(), createBlock(_component_UiTableCell, {
                              key: `design-val-${i}`,
                              class: "text-center"
                            }, {
                              default: withCtx(() => [
                                createVNode("div", { class: ["flex justify-center items-center gap-1"] }, [
                                  createVNode("span", null, toDisplayString(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(+dp.value.toFixed(2)) + "\u20BD"), 1),
                                  createVNode("span", null, " (" + toDisplayString(dp.percent.toFixed(2)) + "%) ", 1)
                                ])
                              ]),
                              _: 2
                            }, 1024);
                          }), 128))
                        ]),
                        _: 1
                      })) : createCommentVNode("", true)
                    ];
                  }),
                  _: 1
                })
              ], 64)) : createCommentVNode("", true),
              _ctx.plData.expenses ? (openBlock(), createBlock(Fragment, { key: 3 }, [
                createVNode(_component_UiTableHeader, null, {
                  default: withCtx(() => [
                    createVNode(_component_UiTableRow, { class: "text-xl text-center font-semibold bg-white hover:bg-white py-1 pb-2 border-t-1 rounded-t-xl" }, {
                      default: withCtx(() => [
                        createVNode(_component_UiTableHead, {
                          colspan: "5",
                          class: "text-center h-4"
                        })
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                createVNode(_component_UiTableHeader, null, {
                  default: withCtx(() => [
                    createVNode(_component_UiTableRow, { class: "bg-slate-200 hover:bg-slate-200" }, {
                      default: withCtx(() => [
                        createVNode(_component_UiTableHead, { class: "text-xl" }, {
                          default: withCtx(() => [
                            createTextVNode("\u0420\u0430\u0441\u0445\u043E\u0434\u044B ")
                          ]),
                          _: 1
                        }),
                        (openBlock(true), createBlock(Fragment, null, renderList(_ctx.plData.periods, (per, i) => {
                          return openBlock(), createBlock(_component_UiTableHead, {
                            key: i,
                            class: "text-center"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(per), 1)
                            ]),
                            _: 2
                          }, 1024);
                        }), 128))
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                createVNode(_component_UiTableBody, null, {
                  default: withCtx(() => [
                    (openBlock(true), createBlock(Fragment, null, renderList(_ctx.plData.expenses.totals.data, (item, i) => {
                      return openBlock(), createBlock(_component_UiTableRow, { key: i }, {
                        default: withCtx(() => [
                          createVNode(_component_UiTableCell, null, {
                            default: withCtx(() => [
                              createVNode("div", null, [
                                createVNode("span", null, toDisplayString(item.title), 1)
                              ])
                            ]),
                            _: 2
                          }, 1024),
                          (openBlock(true), createBlock(Fragment, null, renderList(item.data, (dp, j) => {
                            return openBlock(), createBlock(_component_UiTableCell, {
                              key: j,
                              class: "text-center"
                            }, {
                              default: withCtx(() => [
                                createVNode("div", { class: ["flex justify-center items-center gap-1"] }, [
                                  createVNode("span", null, toDisplayString(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(+dp.value.toFixed(2)) + "\u20BD"), 1),
                                  createVNode("span", null, " (" + toDisplayString(dp.changePercent) + "%) ", 1)
                                ])
                              ]),
                              _: 2
                            }, 1024);
                          }), 128))
                        ]),
                        _: 2
                      }, 1024);
                    }), 128)),
                    createVNode(_component_UiTableRow, { class: "text-center bg-slate-300 hover:bg-slate-300" }, {
                      default: withCtx(() => [
                        createVNode(_component_UiTableCell, { class: "font-bold text-left" }, {
                          default: withCtx(() => [
                            createTextVNode(" \u0418\u0422\u041E\u0413\u041E ")
                          ]),
                          _: 1
                        }),
                        (openBlock(true), createBlock(Fragment, null, renderList(_ctx.plData.expenses.totals.totals, (total, k) => {
                          return openBlock(), createBlock(_component_UiTableCell, { key: k }, {
                            default: withCtx(() => {
                              var _a3;
                              return [
                                createVNode("span", null, toDisplayString(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(+total.value.toFixed(2)) + "\u20BD"), 1),
                                createVNode("span", null, " (" + toDisplayString(((_a3 = total.changePercent) != null ? _a3 : 0).toFixed(2)) + "%) ", 1)
                              ];
                            }),
                            _: 2
                          }, 1024);
                        }), 128))
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                createVNode(_component_UiTableHeader, null, {
                  default: withCtx(() => [
                    createVNode(_component_UiTableRow, { class: "text-xl text-center font-semibold bg-white hover:bg-white py-1 pb-2 border-t-1 rounded-t-xl" }, {
                      default: withCtx(() => [
                        createVNode(_component_UiTableHead, {
                          colspan: "5",
                          class: "text-center h-4"
                        })
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                createVNode(_component_UiTableHeader, null, {
                  default: withCtx(() => [
                    createVNode(_component_UiTableRow, { class: "text-xl text-center font-semibold bg-gray-300 hover:bg-gray-300 py-1 pb-2 border-t-1 rounded-t-xl" }, {
                      default: withCtx(() => [
                        createVNode(_component_UiTableHead, {
                          colspan: "5",
                          class: "text-center"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" \u041E\u0442\u0434\u0435\u043B \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0441\u0442\u0432\u0430\u0447\u0444\u0446\u0439 ")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                createVNode(_component_UiTableHeader, null, {
                  default: withCtx(() => [
                    createVNode(_component_UiTableRow, { class: "bg-slate-200 hover:bg-slate-200" }, {
                      default: withCtx(() => [
                        createVNode(_component_UiTableHead, { class: "text-xl" }, {
                          default: withCtx(() => [
                            createTextVNode("\u0417\u0430\u0440\u043F\u043B\u0430\u0442\u044B \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0441\u0442\u0432\u0430 ")
                          ]),
                          _: 1
                        }),
                        (openBlock(true), createBlock(Fragment, null, renderList(_ctx.plData.periods, (per, i) => {
                          return openBlock(), createBlock(_component_UiTableHead, {
                            key: i,
                            class: "text-center"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(per), 1)
                            ]),
                            _: 2
                          }, 1024);
                        }), 128))
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                createVNode(_component_UiTableBody, null, {
                  default: withCtx(() => [
                    (openBlock(true), createBlock(Fragment, null, renderList(_ctx.plData.expenses.production.productionSalaries.data, (item, idx3) => {
                      return openBlock(), createBlock(_component_UiTableRow, { key: idx3 }, {
                        default: withCtx(() => [
                          createVNode(_component_UiTableCell, null, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(item.role), 1)
                            ]),
                            _: 2
                          }, 1024),
                          (openBlock(true), createBlock(Fragment, null, renderList(item.data, (dp, i) => {
                            return openBlock(), createBlock(_component_UiTableCell, {
                              key: i,
                              class: "text-center"
                            }, {
                              default: withCtx(() => [
                                createVNode("div", { class: ["flex justify-center items-center gap-1"] }, [
                                  createVNode("span", null, toDisplayString(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(+dp.value.toFixed(2)) + "\u20BD"), 1),
                                  createVNode("span", null, " (" + toDisplayString(dp.changePercent) + "%) ", 1)
                                ])
                              ]),
                              _: 2
                            }, 1024);
                          }), 128))
                        ]),
                        _: 2
                      }, 1024);
                    }), 128)),
                    createVNode(_component_UiTableRow, { class: "text-center bg-slate-300 hover:bg-slate-300" }, {
                      default: withCtx(() => [
                        createVNode(_component_UiTableCell, { class: "font-bold text-left" }, {
                          default: withCtx(() => [
                            createTextVNode(" \u0418\u0422\u041E\u0413\u041E ")
                          ]),
                          _: 1
                        }),
                        (openBlock(true), createBlock(Fragment, null, renderList(_ctx.plData.expenses.production.productionSalaries.totals, (total, idx4) => {
                          return openBlock(), createBlock(_component_UiTableCell, { key: idx4 }, {
                            default: withCtx(() => {
                              var _a3;
                              return [
                                createVNode("span", null, toDisplayString(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(+total.value.toFixed(2)) + "\u20BD"), 1),
                                createVNode("span", null, " (" + toDisplayString(((_a3 = total.changePercent) != null ? _a3 : 0).toFixed(2)) + "%) ", 1)
                              ];
                            }),
                            _: 2
                          }, 1024);
                        }), 128))
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                createVNode(_component_UiTableHeader, null, {
                  default: withCtx(() => [
                    createVNode(_component_UiTableRow, { class: "text-xl text-center font-semibold bg-white hover:bg-white py-1 pb-2 border-t-1 rounded-t-xl" }, {
                      default: withCtx(() => [
                        createVNode(_component_UiTableHead, {
                          colspan: "5",
                          class: "text-center h-4"
                        })
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                createVNode(_component_UiTableHeader, null, {
                  default: withCtx(() => [
                    createVNode(_component_UiTableRow, { class: "text-xl text-center font-semibold bg-gray-300 hover:bg-gray-300 py-1 pb-2 border-t-1 rounded-t-xl" }, {
                      default: withCtx(() => [
                        createVNode(_component_UiTableHead, {
                          colspan: "5",
                          class: "text-center"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" \u041A\u043E\u043C\u043C\u0435\u0440\u0447\u0435\u0441\u043A\u0438\u0439 \u043E\u0442\u0434\u0435\u043B ")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                createVNode(_component_UiTableHeader, null, {
                  default: withCtx(() => [
                    createVNode(_component_UiTableRow, { class: "bg-slate-200 hover:bg-slate-200" }, {
                      default: withCtx(() => [
                        createVNode(_component_UiTableHead, { class: "text-xl" }, {
                          default: withCtx(() => [
                            createTextVNode("\u0420\u0430\u0441\u0445\u043E\u0434\u044B \u043D\u0430 \u0440\u0435\u043A\u043B\u0430\u043C\u0443 ")
                          ]),
                          _: 1
                        }),
                        (openBlock(true), createBlock(Fragment, null, renderList(_ctx.plData.periods, (per, i) => {
                          return openBlock(), createBlock(_component_UiTableHead, {
                            key: i,
                            class: "text-center"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(per), 1)
                            ]),
                            _: 2
                          }, 1024);
                        }), 128))
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                createVNode(_component_UiTableBody, null, {
                  default: withCtx(() => [
                    (openBlock(true), createBlock(Fragment, null, renderList(_ctx.plData.expenses.commercial.adExpenses.data, (item, idx5) => {
                      return openBlock(), createBlock(_component_UiTableRow, { key: idx5 }, {
                        default: withCtx(() => [
                          createVNode(_component_UiTableCell, null, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(item.title), 1)
                            ]),
                            _: 2
                          }, 1024),
                          (openBlock(true), createBlock(Fragment, null, renderList(item.data, (dp, i) => {
                            return openBlock(), createBlock(_component_UiTableCell, {
                              key: i,
                              class: "text-center"
                            }, {
                              default: withCtx(() => [
                                createVNode("div", { class: ["flex justify-center items-center gap-1"] }, [
                                  createVNode("span", null, toDisplayString(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(+dp.value.toFixed(2)) + "\u20BD"), 1),
                                  createVNode("span", null, " (" + toDisplayString(dp.changePercent) + "%) ", 1)
                                ])
                              ]),
                              _: 2
                            }, 1024);
                          }), 128))
                        ]),
                        _: 2
                      }, 1024);
                    }), 128)),
                    createVNode(_component_UiTableRow, { class: "text-center bg-slate-300 hover:bg-slate-300" }, {
                      default: withCtx(() => [
                        createVNode(_component_UiTableCell, { class: "font-bold text-left" }, {
                          default: withCtx(() => [
                            createTextVNode(" \u0418\u0422\u041E\u0413\u041E ")
                          ]),
                          _: 1
                        }),
                        (openBlock(true), createBlock(Fragment, null, renderList(_ctx.plData.expenses.commercial.adExpenses.totals, (total, idx6) => {
                          return openBlock(), createBlock(_component_UiTableCell, { key: idx6 }, {
                            default: withCtx(() => {
                              var _a3;
                              return [
                                createVNode("span", null, toDisplayString(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(+total.value.toFixed(2)) + "\u20BD"), 1),
                                createVNode("span", null, " (" + toDisplayString(((_a3 = total.changePercent) != null ? _a3 : 0).toFixed(2)) + "%) ", 1)
                              ];
                            }),
                            _: 2
                          }, 1024);
                        }), 128))
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                createVNode(_component_UiTableHeader, null, {
                  default: withCtx(() => [
                    createVNode(_component_UiTableRow, { class: "bg-slate-200 hover:bg-slate-200" }, {
                      default: withCtx(() => [
                        createVNode(_component_UiTableHead, { class: "text-xl" }, {
                          default: withCtx(() => [
                            createTextVNode("\u0417\u0430\u0440\u043F\u043B\u0430\u0442\u044B \u043A\u043E\u043C\u043C\u0435\u0440\u0447\u0435\u0441\u043A\u043E\u0433\u043E \u043E\u0442\u0434\u0435\u043B\u0430 ")
                          ]),
                          _: 1
                        }),
                        (openBlock(true), createBlock(Fragment, null, renderList(_ctx.plData.periods, (per, i) => {
                          return openBlock(), createBlock(_component_UiTableHead, {
                            key: i,
                            class: "text-center"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(per), 1)
                            ]),
                            _: 2
                          }, 1024);
                        }), 128))
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                createVNode(_component_UiTableBody, null, {
                  default: withCtx(() => [
                    (openBlock(true), createBlock(Fragment, null, renderList(_ctx.plData.expenses.commercial.commercialSalaries.data, (item, idx7) => {
                      return openBlock(), createBlock(_component_UiTableRow, { key: idx7 }, {
                        default: withCtx(() => [
                          createVNode(_component_UiTableCell, null, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(item.role), 1)
                            ]),
                            _: 2
                          }, 1024),
                          (openBlock(true), createBlock(Fragment, null, renderList(item.data, (dp, i) => {
                            return openBlock(), createBlock(_component_UiTableCell, {
                              key: i,
                              class: "text-center"
                            }, {
                              default: withCtx(() => [
                                createVNode("div", { class: ["flex justify-center items-center gap-1"] }, [
                                  createVNode("span", null, toDisplayString(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(+dp.value.toFixed(2)) + "\u20BD"), 1),
                                  createVNode("span", null, " (" + toDisplayString(dp.changePercent) + "%) ", 1)
                                ])
                              ]),
                              _: 2
                            }, 1024);
                          }), 128))
                        ]),
                        _: 2
                      }, 1024);
                    }), 128)),
                    createVNode(_component_UiTableRow, { class: "text-center bg-slate-300" }, {
                      default: withCtx(() => [
                        createVNode(_component_UiTableCell, { class: "font-bold text-left" }, {
                          default: withCtx(() => [
                            createTextVNode(" \u0418\u0422\u041E\u0413\u041E ")
                          ]),
                          _: 1
                        }),
                        (openBlock(true), createBlock(Fragment, null, renderList(_ctx.plData.expenses.commercial.commercialSalaries.totals, (total, idx8) => {
                          return openBlock(), createBlock(_component_UiTableCell, { key: idx8 }, {
                            default: withCtx(() => {
                              var _a3;
                              return [
                                createVNode("span", null, toDisplayString(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(+total.value.toFixed(2)) + "\u20BD"), 1),
                                createVNode("span", null, " (" + toDisplayString(((_a3 = total.changePercent) != null ? _a3 : 0).toFixed(2)) + "%) ", 1)
                              ];
                            }),
                            _: 2
                          }, 1024);
                        }), 128))
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ], 64)) : createCommentVNode("", true)
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/my/pnl/BookTable.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "\u041F\u041D\u041B | Easy CRM"
    });
    const { $useApi } = useNuxtApp();
    const { toast } = useToast();
    const month = ref({
      month: (/* @__PURE__ */ new Date()).getMonth(),
      year: (/* @__PURE__ */ new Date()).getFullYear()
    });
    const plData = ref({
      periods: [],
      income: [],
      prodExpensesByPeriod: []
    });
    const period = ref((/* @__PURE__ */ new Date()).toISOString().slice(0, 7));
    const project = ref("book");
    const loading = ref(false);
    const projectOptions = [
      // { label: 'Все', value: 'all' },
      { label: "\u0418\u0437\u0438\u041D\u0435\u043E\u043D", value: "neon" },
      { label: "\u0418\u0437\u0438\u0411\u0443\u043A", value: "book" }
    ];
    const fetchPLData = async () => {
      loading.value = true;
      try {
        if (project.value === "book") {
          const response = await $useApi.get("/pnl/book", {
            params: {
              period: period.value
            }
          });
          plData.value = response.data;
        } else {
          const response = await $useApi.get("/pnl/neon", {
            params: {
              period: period.value
            }
          });
          plData.value = response.data;
        }
      } catch {
        toast({
          variant: "destructive",
          title: "\u041E\u0448\u0438\u0431\u043A\u0430 \u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0438 \u0434\u0430\u043D\u043D\u044B\u0445",
          description: "\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C \u0434\u0430\u043D\u043D\u044B\u0435 P&L. \u041F\u043E\u043F\u0440\u043E\u0431\u0443\u0439\u0442\u0435 \u043F\u043E\u0437\u0436\u0435."
        });
      } finally {
        loading.value = false;
      }
    };
    watch(period, () => {
      fetchPLData();
    });
    watch(project, () => {
      fetchPLData();
    });
    watch(month, async (val) => {
      const { month: month2, year } = val;
      period.value = new Date(year, month2 + 1).toISOString().slice(0, 7);
      await fetchPLData();
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UiSelect = _sfc_main$6;
      const _component_UiSelectTrigger = _sfc_main$4;
      const _component_UiSelectValue = _sfc_main$5;
      const _component_UiSelectContent = _sfc_main$3;
      const _component_UiSelectItem = _sfc_main$2$1;
      const _component_UiCard = _sfc_main$7;
      const _component_UiCardContent = _sfc_main$8;
      const _component_MyPnlNeonTable = _sfc_main$2;
      const _component_MyPnlBookTable = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "space-y-2" }, _attrs))}><div class="flex items-center gap-4"><div class="w-[180px]">`);
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
      _push(`</div>`);
      _push(ssrRenderComponent(_component_UiSelect, {
        modelValue: unref(project),
        "onUpdate:modelValue": ($event) => isRef(project) ? project.value = $event : null
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UiSelectTrigger, { class: "w-[180px]" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UiSelectValue, { placeholder: "\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u043F\u0440\u043E\u0435\u043A\u0442" }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UiSelectValue, { placeholder: "\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u043F\u0440\u043E\u0435\u043A\u0442" })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UiSelectContent, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<!--[-->`);
                  ssrRenderList(projectOptions, (option) => {
                    _push3(ssrRenderComponent(_component_UiSelectItem, {
                      key: option.value,
                      value: option.value
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`${ssrInterpolate(option.label)}`);
                        } else {
                          return [
                            createTextVNode(toDisplayString(option.label), 1)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  });
                  _push3(`<!--]-->`);
                } else {
                  return [
                    (openBlock(), createBlock(Fragment, null, renderList(projectOptions, (option) => {
                      return createVNode(_component_UiSelectItem, {
                        key: option.value,
                        value: option.value
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(option.label), 1)
                        ]),
                        _: 2
                      }, 1032, ["value"]);
                    }), 64))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UiSelectTrigger, { class: "w-[180px]" }, {
                default: withCtx(() => [
                  createVNode(_component_UiSelectValue, { placeholder: "\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u043F\u0440\u043E\u0435\u043A\u0442" })
                ]),
                _: 1
              }),
              createVNode(_component_UiSelectContent, null, {
                default: withCtx(() => [
                  (openBlock(), createBlock(Fragment, null, renderList(projectOptions, (option) => {
                    return createVNode(_component_UiSelectItem, {
                      key: option.value,
                      value: option.value
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(option.label), 1)
                      ]),
                      _: 2
                    }, 1032, ["value"]);
                  }), 64))
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_component_UiCard, { class: "" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UiCardContent, { class: "space-y-1 px-0 py-3" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="px-3"${_scopeId2}>`);
                  if (unref(loading)) {
                    _push3(`<div class="space-y-4"${_scopeId2}><div class="bg-slate-100 rounded-sm overflow-hidden p-4"${_scopeId2}><div class="flex items-center justify-center py-12"${_scopeId2}><div class="flex flex-col items-center gap-3"${_scopeId2}><div class="h-12 w-12 animate-spin rounded-full border-4 border-slate-300 border-t-slate-600"${_scopeId2}></div><p class="text-slate-600 text-sm font-medium"${_scopeId2}> \u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430 \u0434\u0430\u043D\u043D\u044B\u0445... </p></div></div></div></div>`);
                  } else {
                    _push3(`<!---->`);
                  }
                  if (!unref(loading) && unref(project) === "neon") {
                    _push3(ssrRenderComponent(_component_MyPnlNeonTable, {
                      "pl-data": unref(plData)
                    }, null, _parent3, _scopeId2));
                  } else {
                    _push3(`<!---->`);
                  }
                  if (!unref(loading) && unref(project) === "book") {
                    _push3(ssrRenderComponent(_component_MyPnlBookTable, {
                      "pl-data": unref(plData)
                    }, null, _parent3, _scopeId2));
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("div", { class: "px-3" }, [
                      unref(loading) ? (openBlock(), createBlock("div", {
                        key: 0,
                        class: "space-y-4"
                      }, [
                        createVNode("div", { class: "bg-slate-100 rounded-sm overflow-hidden p-4" }, [
                          createVNode("div", { class: "flex items-center justify-center py-12" }, [
                            createVNode("div", { class: "flex flex-col items-center gap-3" }, [
                              createVNode("div", { class: "h-12 w-12 animate-spin rounded-full border-4 border-slate-300 border-t-slate-600" }),
                              createVNode("p", { class: "text-slate-600 text-sm font-medium" }, " \u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430 \u0434\u0430\u043D\u043D\u044B\u0445... ")
                            ])
                          ])
                        ])
                      ])) : createCommentVNode("", true),
                      !unref(loading) && unref(project) === "neon" ? (openBlock(), createBlock(_component_MyPnlNeonTable, {
                        key: 1,
                        "pl-data": unref(plData)
                      }, null, 8, ["pl-data"])) : createCommentVNode("", true),
                      !unref(loading) && unref(project) === "book" ? (openBlock(), createBlock(_component_MyPnlBookTable, {
                        key: 2,
                        "pl-data": unref(plData)
                      }, null, 8, ["pl-data"])) : createCommentVNode("", true)
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UiCardContent, { class: "space-y-1 px-0 py-3" }, {
                default: withCtx(() => [
                  createVNode("div", { class: "px-3" }, [
                    unref(loading) ? (openBlock(), createBlock("div", {
                      key: 0,
                      class: "space-y-4"
                    }, [
                      createVNode("div", { class: "bg-slate-100 rounded-sm overflow-hidden p-4" }, [
                        createVNode("div", { class: "flex items-center justify-center py-12" }, [
                          createVNode("div", { class: "flex flex-col items-center gap-3" }, [
                            createVNode("div", { class: "h-12 w-12 animate-spin rounded-full border-4 border-slate-300 border-t-slate-600" }),
                            createVNode("p", { class: "text-slate-600 text-sm font-medium" }, " \u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430 \u0434\u0430\u043D\u043D\u044B\u0445... ")
                          ])
                        ])
                      ])
                    ])) : createCommentVNode("", true),
                    !unref(loading) && unref(project) === "neon" ? (openBlock(), createBlock(_component_MyPnlNeonTable, {
                      key: 1,
                      "pl-data": unref(plData)
                    }, null, 8, ["pl-data"])) : createCommentVNode("", true),
                    !unref(loading) && unref(project) === "book" ? (openBlock(), createBlock(_component_MyPnlBookTable, {
                      key: 2,
                      "pl-data": unref(plData)
                    }, null, 8, ["pl-data"])) : createCommentVNode("", true)
                  ])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/planfact/pl/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-IWnGaX6o.mjs.map
