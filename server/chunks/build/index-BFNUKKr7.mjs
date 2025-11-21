import { _ as _sfc_main$1 } from './Sidebar-ClYzRSuC.mjs';
import { _ as _sfc_main$2 } from './Card-D2-UPrX8.mjs';
import { _ as _sfc_main$1$1, a as _sfc_main$4 } from './CardTitle-Dyaq6zaM.mjs';
import { _ as _sfc_main$3 } from './CardDescription-CwDlX6V_.mjs';
import { _ as _sfc_main$4$1, a as _sfc_main$1$3, s as suppliesColumns, b as _sfc_main$9 } from './table.columns-DVAKx_kR.mjs';
import { _ as _sfc_main$2$1, a as _sfc_main$5, b as _sfc_main$1$2 } from './TabsList-C3eBcFGa.mjs';
import { _ as _sfc_main$6 } from './Input-DoHPrX2-.mjs';
import { _ as _sfc_main$4$2, a as _sfc_main$3$1, b as _sfc_main$7, c as _sfc_main$2$2, d as _sfc_main$1$4 } from './DialogContent-BsO2ljLB.mjs';
import { _ as _sfc_main$8 } from './DialogDescription-D5yt23q9.mjs';
import { _ as _sfc_main$a } from './DialogFooter-CQpXS8R1.mjs';
import { defineComponent, ref, watch, mergeProps, withCtx, createTextVNode, toDisplayString, createVNode, createBlock, createCommentVNode, openBlock, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { b as useNuxtApp, u as useHead } from './server.mjs';
import { u as useMyFormatPrice } from './useMyFormatPrice-CCAsFuev.mjs';
import './index-9T5woGxV.mjs';
import 'radix-vue';
import 'lucide-vue-next';
import 'class-variance-authority';
import './utils-TCWotVPY.mjs';
import 'clsx';
import 'tailwind-merge';
import './index-B6vrBiru.mjs';
import './ScrollArea-Kzo2fjeX.mjs';
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
import './Label-Bxzolydd.mjs';
import './Combobox-kxEuhT4H.mjs';
import './PopoverContent-Dy99cMmu.mjs';
import './CommandList-DiM7UR93.mjs';
import './SelectScrollDownButton-JzJI8BsA.mjs';
import './SelectGroup-BKLQULEA.mjs';
import './Separator-DmvFl46f.mjs';
import './index-DiSSjj1M.mjs';
import './CommandSeparator-Ck23HbWz.mjs';
import './Checkbox-DKAsiMFR.mjs';
import './TableHeader-CsCuT7pu.mjs';
import '@tanstack/vue-table';
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
      title: "\u0417\u0430\u043A\u0443\u043F\u043A\u0438 | Easy CRM"
    });
    const isOpen = ref(false);
    const period = ref((/* @__PURE__ */ new Date()).toISOString().slice(0, 7));
    const tabValue = ref("this_month");
    const total = ref(useMyFormatPrice(0) + "\u20BD");
    const suppliers = ref(['\u041E\u041E\u041E "\u0422\u0414\u0412 \u0413\u0420\u0423\u041F\u041F"', "\u0418\u041F \u041A\u043E\u0440\u043E\u043B\u0451\u0432"]);
    const positionsList = ref([]);
    const supplies = ref([]);
    const blank = {
      date: (/* @__PURE__ */ new Date()).toISOString().slice(0, 10),
      shipmentDate: "",
      supplier: "",
      paymentMethod: "\u0421\u0447\u0435\u0442",
      orderStatus: "\u041E\u0444\u043E\u0440\u043C\u043B\u0435\u043D \u0437\u0430\u043A\u0430\u0437",
      paymentStatus: "\u041D\u0435 \u043E\u043F\u043B\u0430\u0447\u0435\u043D",
      deliveryMethod: "\u0414\u043E\u0441\u0442\u0430\u0432\u043A\u0430 \u043E\u0442 \u043F\u043E\u0441\u0442\u0430\u0432\u0449\u0438\u043A\u0430",
      invoice: "",
      track: "",
      positions: [{ name: "", quantity: 1, priceForItem: 1, category: "" }]
    };
    const editingSupplie = ref(blank);
    const getSuppliers = async () => {
      const { data } = await $useApi.get("supplies/suppliers");
      suppliers.value = data.map((s) => s.name) || [];
      const { data: positionsData } = await $useApi.get("supplies/positions");
      positionsList.value = positionsData || [];
    };
    const getSupplies = async () => {
      const { data } = await $useApi.get("supplies", {
        params: { period: period.value }
      });
      supplies.value = data || [];
      total.value = calcTotals(
        supplies.value.filter((s) => !!s.id).map((s) => s.id)
      );
    };
    const calcTotals = (ids) => {
      const selectedSupplies = supplies.value.filter((ad) => ids.includes(ad.id));
      const totalPrice = selectedSupplies.reduce((sum, supplie) => {
        return sum + supplie.positions.reduce(
          (posSum, pos) => posSum + pos.quantity * pos.priceForItem,
          0
        );
      }, 0);
      return useMyFormatPrice(+totalPrice.toFixed(2)) + "\u20BD";
    };
    const editItem = (id) => {
      isOpen.value = true;
      editingSupplie.value = supplies.value.find((ad) => ad.id === id) || blank;
    };
    watch(tabValue, () => {
      if (tabValue.value === "this_month") {
        period.value = (/* @__PURE__ */ new Date()).toISOString().slice(0, 7);
      }
      if (tabValue.value === "yesterday") {
        const today = /* @__PURE__ */ new Date();
        const yesterday = new Date(today);
        yesterday.setDate(today.getDate() - 1);
        period.value = yesterday.toISOString().split("T")[0];
      }
    });
    watch(
      period,
      async () => {
        await getSupplies();
      },
      { deep: true }
    );
    watch(isOpen, async () => {
      if (!isOpen.value) {
        await getSupplies();
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_LayoutSidebar = _sfc_main$1;
      const _component_UiCard = _sfc_main$2;
      const _component_UiCardHeader = _sfc_main$1$1;
      const _component_UiCardDescription = _sfc_main$3;
      const _component_UiCardTitle = _sfc_main$4;
      const _component_MySuppliesCreate = _sfc_main$4$1;
      const _component_UiTabs = _sfc_main$2$1;
      const _component_UiTabsList = _sfc_main$5;
      const _component_UiTabsTrigger = _sfc_main$1$2;
      const _component_UiInput = _sfc_main$6;
      const _component_MySuppliesDataTable = _sfc_main$1$3;
      const _component_UiDialog = _sfc_main$4$2;
      const _component_UiDialogTrigger = _sfc_main$3$1;
      const _component_UiDialogContent = _sfc_main$7;
      const _component_UiDialogHeader = _sfc_main$2$2;
      const _component_UiDialogTitle = _sfc_main$1$4;
      const _component_UiDialogDescription = _sfc_main$8;
      const _component_MySuppliesEdit = _sfc_main$9;
      const _component_UiDialogFooter = _sfc_main$a;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative h-screen hidden-scrollbar" }, _attrs))}><div class="w-full fixed z-10">`);
      _push(ssrRenderComponent(_component_LayoutSidebar, null, null, _parent));
      _push(`</div><div class="h-full flex flex-col p-4 gap-2 mx-[auto] max-w-[2048px] pt-16 min-w-[1024px]"><div class="w-full flex gap-2"><div class="flex flex-col w-full gap-2">`);
      _push(ssrRenderComponent(_component_UiCard, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UiCardHeader, { class: "p-3 pb-2" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UiCardDescription, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`\u041F\u0440\u0438\u043E\u0431\u0440\u0435\u0442\u0435\u043D\u043E \u043D\u0430 \u0441\u0443\u043C\u043C\u0443`);
                      } else {
                        return [
                          createTextVNode("\u041F\u0440\u0438\u043E\u0431\u0440\u0435\u0442\u0435\u043D\u043E \u043D\u0430 \u0441\u0443\u043C\u043C\u0443")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_UiCardTitle, { class: "text-3xl font-semibold whitespace-nowrap" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`${ssrInterpolate(total.value)}`);
                      } else {
                        return [
                          createTextVNode(toDisplayString(total.value), 1)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UiCardDescription, null, {
                      default: withCtx(() => [
                        createTextVNode("\u041F\u0440\u0438\u043E\u0431\u0440\u0435\u0442\u0435\u043D\u043E \u043D\u0430 \u0441\u0443\u043C\u043C\u0443")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_UiCardTitle, { class: "text-3xl font-semibold whitespace-nowrap" }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(total.value), 1)
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
              createVNode(_component_UiCardHeader, { class: "p-3 pb-2" }, {
                default: withCtx(() => [
                  createVNode(_component_UiCardDescription, null, {
                    default: withCtx(() => [
                      createTextVNode("\u041F\u0440\u0438\u043E\u0431\u0440\u0435\u0442\u0435\u043D\u043E \u043D\u0430 \u0441\u0443\u043C\u043C\u0443")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_UiCardTitle, { class: "text-3xl font-semibold whitespace-nowrap" }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(total.value), 1)
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
      _push(`<div class="flex gap-2">`);
      _push(ssrRenderComponent(_component_MySuppliesCreate, {
        suppliers: suppliers.value,
        "positions-list": positionsList.value,
        onSupplieCreated: async () => {
          await getSupplies();
          await getSuppliers();
        }
      }, null, _parent));
      _push(ssrRenderComponent(_component_UiTabs, {
        modelValue: tabValue.value,
        "onUpdate:modelValue": ($event) => tabValue.value = $event,
        "default-value": "month"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex items-center gap-2"${_scopeId}><div class="flex items-center"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UiTabsList, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UiTabsTrigger, { value: "this_month" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` \u042D\u0442\u043E\u0442 \u043C\u0435\u0441\u044F\u0446 `);
                      } else {
                        return [
                          createTextVNode(" \u042D\u0442\u043E\u0442 \u043C\u0435\u0441\u044F\u0446 ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_UiTabsTrigger, { value: "yesterday" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` \u0412\u0447\u0435\u0440\u0430 `);
                      } else {
                        return [
                          createTextVNode(" \u0412\u0447\u0435\u0440\u0430 ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_UiTabsTrigger, { value: "month" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` \u0412\u044B\u0431\u0440\u0430\u0442\u044C \u043C\u0435\u0441\u044F\u0446 `);
                      } else {
                        return [
                          createTextVNode(" \u0412\u044B\u0431\u0440\u0430\u0442\u044C \u043C\u0435\u0441\u044F\u0446 ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_UiTabsTrigger, { value: "day" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` \u0412\u044B\u0431\u0440\u0430\u0442\u044C \u0434\u0435\u043D\u044C `);
                      } else {
                        return [
                          createTextVNode(" \u0412\u044B\u0431\u0440\u0430\u0442\u044C \u0434\u0435\u043D\u044C ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UiTabsTrigger, { value: "this_month" }, {
                      default: withCtx(() => [
                        createTextVNode(" \u042D\u0442\u043E\u0442 \u043C\u0435\u0441\u044F\u0446 ")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_UiTabsTrigger, { value: "yesterday" }, {
                      default: withCtx(() => [
                        createTextVNode(" \u0412\u0447\u0435\u0440\u0430 ")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_UiTabsTrigger, { value: "month" }, {
                      default: withCtx(() => [
                        createTextVNode(" \u0412\u044B\u0431\u0440\u0430\u0442\u044C \u043C\u0435\u0441\u044F\u0446 ")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_UiTabsTrigger, { value: "day" }, {
                      default: withCtx(() => [
                        createTextVNode(" \u0412\u044B\u0431\u0440\u0430\u0442\u044C \u0434\u0435\u043D\u044C ")
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            if (tabValue.value === "month") {
              _push2(`<div class="ml-2"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UiInput, {
                modelValue: period.value,
                "onUpdate:modelValue": ($event) => period.value = $event,
                type: "month"
              }, null, _parent2, _scopeId));
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
            if (tabValue.value === "day") {
              _push2(`<div class="ml-2"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UiInput, {
                modelValue: period.value,
                "onUpdate:modelValue": ($event) => period.value = $event,
                type: "date"
              }, null, _parent2, _scopeId));
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div></div>`);
          } else {
            return [
              createVNode("div", { class: "flex items-center gap-2" }, [
                createVNode("div", { class: "flex items-center" }, [
                  createVNode(_component_UiTabsList, null, {
                    default: withCtx(() => [
                      createVNode(_component_UiTabsTrigger, { value: "this_month" }, {
                        default: withCtx(() => [
                          createTextVNode(" \u042D\u0442\u043E\u0442 \u043C\u0435\u0441\u044F\u0446 ")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_UiTabsTrigger, { value: "yesterday" }, {
                        default: withCtx(() => [
                          createTextVNode(" \u0412\u0447\u0435\u0440\u0430 ")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_UiTabsTrigger, { value: "month" }, {
                        default: withCtx(() => [
                          createTextVNode(" \u0412\u044B\u0431\u0440\u0430\u0442\u044C \u043C\u0435\u0441\u044F\u0446 ")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_UiTabsTrigger, { value: "day" }, {
                        default: withCtx(() => [
                          createTextVNode(" \u0412\u044B\u0431\u0440\u0430\u0442\u044C \u0434\u0435\u043D\u044C ")
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  tabValue.value === "month" ? (openBlock(), createBlock("div", {
                    key: 0,
                    class: "ml-2"
                  }, [
                    createVNode(_component_UiInput, {
                      modelValue: period.value,
                      "onUpdate:modelValue": ($event) => period.value = $event,
                      type: "month"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ])) : createCommentVNode("", true),
                  tabValue.value === "day" ? (openBlock(), createBlock("div", {
                    key: 1,
                    class: "ml-2"
                  }, [
                    createVNode(_component_UiInput, {
                      modelValue: period.value,
                      "onUpdate:modelValue": ($event) => period.value = $event,
                      type: "date"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ])) : createCommentVNode("", true)
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div>`);
      _push(ssrRenderComponent(_component_MySuppliesDataTable, {
        key: supplies.value.length,
        data: supplies.value,
        columns: unref(suppliesColumns),
        onTableSorted: (ids) => total.value = calcTotals(ids),
        onItemClicked: (id) => editItem(id)
      }, null, _parent));
      _push(`</div></div></div>`);
      _push(ssrRenderComponent(_component_UiDialog, {
        open: isOpen.value,
        "onUpdate:open": ($event) => isOpen.value = $event
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UiDialogTrigger, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UiDialogContent, { class: "max-w-[1200px] flex flex-col" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UiDialogHeader, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_UiDialogTitle, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u0441\u0442\u0430\u0442\u044C\u044E`);
                            } else {
                              return [
                                createTextVNode("\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u0441\u0442\u0430\u0442\u044C\u044E")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_UiDialogDescription, null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_UiDialogTitle, null, {
                            default: withCtx(() => [
                              createTextVNode("\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u0441\u0442\u0430\u0442\u044C\u044E")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_UiDialogDescription)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_MySuppliesEdit, {
                    key: editingSupplie.value.id,
                    suppliers: suppliers.value,
                    supplie: editingSupplie.value,
                    "positions-list": positionsList.value,
                    onSupplieUpdated: async () => {
                      isOpen.value = false;
                      editingSupplie.value = blank;
                      await getSupplies();
                    }
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_UiDialogFooter, null, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UiDialogHeader, null, {
                      default: withCtx(() => [
                        createVNode(_component_UiDialogTitle, null, {
                          default: withCtx(() => [
                            createTextVNode("\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u0441\u0442\u0430\u0442\u044C\u044E")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_UiDialogDescription)
                      ]),
                      _: 1
                    }),
                    (openBlock(), createBlock(_component_MySuppliesEdit, {
                      key: editingSupplie.value.id,
                      suppliers: suppliers.value,
                      supplie: editingSupplie.value,
                      "positions-list": positionsList.value,
                      onSupplieUpdated: async () => {
                        isOpen.value = false;
                        editingSupplie.value = blank;
                        await getSupplies();
                      }
                    }, null, 8, ["suppliers", "supplie", "positions-list", "onSupplieUpdated"])),
                    createVNode(_component_UiDialogFooter)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UiDialogTrigger),
              createVNode(_component_UiDialogContent, { class: "max-w-[1200px] flex flex-col" }, {
                default: withCtx(() => [
                  createVNode(_component_UiDialogHeader, null, {
                    default: withCtx(() => [
                      createVNode(_component_UiDialogTitle, null, {
                        default: withCtx(() => [
                          createTextVNode("\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u0441\u0442\u0430\u0442\u044C\u044E")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_UiDialogDescription)
                    ]),
                    _: 1
                  }),
                  (openBlock(), createBlock(_component_MySuppliesEdit, {
                    key: editingSupplie.value.id,
                    suppliers: suppliers.value,
                    supplie: editingSupplie.value,
                    "positions-list": positionsList.value,
                    onSupplieUpdated: async () => {
                      isOpen.value = false;
                      editingSupplie.value = blank;
                      await getSupplies();
                    }
                  }, null, 8, ["suppliers", "supplie", "positions-list", "onSupplieUpdated"])),
                  createVNode(_component_UiDialogFooter)
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/supplies/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-BFNUKKr7.mjs.map
