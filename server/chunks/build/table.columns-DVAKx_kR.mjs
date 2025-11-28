import { _ as _sfc_main$4$1, a as _sfc_main$3$1, b as _sfc_main$6, c as _sfc_main$2$1, d as _sfc_main$1$1 } from './DialogContent-BsO2ljLB.mjs';
import { _ as _sfc_main$7 } from './DialogDescription-D5yt23q9.mjs';
import { _ as _sfc_main$e } from './DialogFooter-CQpXS8R1.mjs';
import { _ as _sfc_main$5 } from './index-B6vrBiru.mjs';
import { _ as _sfc_main$8 } from './Label-Bxzolydd.mjs';
import { _ as _sfc_main$9 } from './Input-DoHPrX2-.mjs';
import { _ as _sfc_main$a } from './Combobox-kxEuhT4H.mjs';
import { _ as _sfc_main$6$1, a as _sfc_main$4$2, b as _sfc_main$5$1, c as _sfc_main$3$2, d as _sfc_main$2$2 } from './SelectScrollDownButton-JzJI8BsA.mjs';
import { _ as _sfc_main$b } from './SelectGroup-BKLQULEA.mjs';
import { _ as _sfc_main$c } from './Separator-DmvFl46f.mjs';
import { _ as _sfc_main$d, a as _sfc_main$1$4 } from './ScrollArea-Kzo2fjeX.mjs';
import { defineComponent, h, ref, watch, withCtx, createTextVNode, createVNode, toDisplayString, createBlock, openBlock, Fragment, renderList, createCommentVNode, unref, computed, mergeProps, resolveDynamicComponent, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderClass, ssrRenderVNode } from 'vue/server-renderer';
import { b as useNuxtApp } from './server.mjs';
import { _ as _sfc_main$2$3, a as _sfc_main$1$2, b as _sfc_main$f } from './PopoverContent-Dy99cMmu.mjs';
import { _ as _sfc_main$i } from './index-DiSSjj1M.mjs';
import { _ as _sfc_main$5$3, a as _sfc_main$2$5, b as _sfc_main$j, c as _sfc_main$4$4, d as _sfc_main$3$4, e as _sfc_main$1$5 } from './CommandList-DiM7UR93.mjs';
import { _ as _sfc_main$k } from './CommandSeparator-Ck23HbWz.mjs';
import { v as valueUpdater, c as cn } from './utils-TCWotVPY.mjs';
import { ChevronDown, ArrowUpDown, X, CirclePlus, Check } from 'lucide-vue-next';
import { _ as _sfc_main$g } from './Checkbox-DKAsiMFR.mjs';
import { _ as _sfc_main$5$2, a as _sfc_main$h, b as _sfc_main$2$4, c as _sfc_main$1$3, d as _sfc_main$4$3, e as _sfc_main$3$3 } from './TableHeader-CsCuT7pu.mjs';
import { useVueTable, getFilteredRowModel, getSortedRowModel, getCoreRowModel, FlexRender } from '@tanstack/vue-table';
import { u as useMyFormatPrice } from './useMyFormatPrice-CCAsFuev.mjs';

const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "Create",
  __ssrInlineRender: true,
  props: {
    suppliers: {},
    positionsList: {}
  },
  emits: ["supplie-created"],
  setup(__props, { emit: __emit }) {
    const { $useApi } = useNuxtApp();
    const categories = ref([
      "\u041F\u043E\u043B\u0438\u043A\u0430\u0440\u0431\u043E\u043D\u0430\u0442",
      "\u041D\u0435\u043E\u043D",
      "\u0411\u043B\u043E\u043A\u0438 \u043F\u0438\u0442\u0430\u043D\u0438\u044F",
      "\u041F\u043B\u0435\u043D\u043A\u0438",
      "\u0410\u043A\u0440\u0438\u043B",
      "\u0423\u043F\u0430\u043A\u043E\u0432\u043A\u0430",
      "\u041A\u043E\u043C\u043F\u043B\u0435\u043A\u0442\u0443\u044E\u0449\u0438\u0435 \u0434\u043B\u044F \u0441\u0442\u0430\u043D\u043A\u043E\u0432",
      "\u041A\u043E\u043C\u043F\u043B\u0435\u043A\u0442\u0443\u044E\u0449\u0438\u0435 \u0434\u043B\u044F \u043C\u0430\u0441\u0442\u0435\u0440\u043E\u0432",
      "\u041A\u043E\u043C\u043F\u043B\u0435\u043A\u0442\u0443\u044E\u0449\u0438\u0435 \u0434\u043B\u044F \u0443\u043F\u0430\u043A\u043E\u0432\u043A\u0438",
      "\u0414\u0440\u0443\u0433\u043E\u0435"
    ]);
    const paymentMethods = ["\u0421\u0447\u0435\u0442", "\u041F\u0435\u0440\u0435\u0432\u043E\u0434", "\u041D\u0430\u043B\u0438\u0447\u043A\u0430"];
    const orderStatuses = ["\u041E\u0444\u043E\u0440\u043C\u043B\u0435\u043D \u0437\u0430\u043A\u0430\u0437", "\u0412 \u043F\u0443\u0442\u0438", "\u041E\u0442\u0433\u0440\u0443\u0436\u0435\u043D \u043D\u0430\u043C"];
    const paymentStatuses = ["\u041E\u043F\u043B\u0430\u0447\u0435\u043D", "\u041D\u0435 \u043E\u043F\u043B\u0430\u0447\u0435\u043D"];
    const deliveryMethods = [
      "\u0414\u043E\u0441\u0442\u0430\u0432\u043A\u0430 \u043E\u0442 \u043F\u043E\u0441\u0442\u0430\u0432\u0449\u0438\u043A\u0430",
      "\u0421\u0434\u0435\u043A",
      "\u0421\u0430\u043C\u043E\u0432\u044B\u0432\u043E\u0437",
      "\u041A\u0443\u0440\u044C\u0435\u0440\u0441\u043A\u0430\u044F \u0434\u043E\u0441\u0442\u0430\u0432\u043A\u0430",
      "\u041F\u042D\u041A",
      "\u0414\u0435\u043B\u043E\u0432\u044B\u0435 \u041B\u0438\u043D\u0438\u0438"
    ];
    const getBlankSupplies = () => ({
      date: (/* @__PURE__ */ new Date()).toISOString().slice(0, 10),
      shipmentDate: "",
      supplier: "",
      paymentMethod: paymentMethods[0],
      orderStatus: orderStatuses[0],
      paymentStatus: paymentStatuses[0],
      deliveryMethod: deliveryMethods[0],
      invoice: "",
      track: "",
      positions: [{ name: "", quantity: 1, priceForItem: 0, category: "" }]
      // Начальная позиция
    });
    const disabled = ref(true);
    ref(false);
    const isOpen = ref(false);
    const newSuppliesData = ref(getBlankSupplies());
    const addPosition = () => {
      newSuppliesData.value.positions.push({
        name: "",
        quantity: 1,
        priceForItem: 1,
        category: ""
      });
    };
    const removePosition = (index) => {
      if (newSuppliesData.value.positions.length > 1) {
        newSuppliesData.value.positions.splice(index, 1);
      }
    };
    const createSupplieItem = async () => {
      try {
        disabled.value = true;
        await $useApi.post("supplies/", newSuppliesData.value);
        newSuppliesData.value = getBlankSupplies();
        emit("supplie-created");
        isOpen.value = false;
      } catch (e) {
        console.log(e);
      }
    };
    const emit = __emit;
    watch(
      newSuppliesData,
      () => {
        const { date, supplier, positions } = newSuppliesData.value;
        disabled.value = !(date && supplier && positions.length > 0 && positions.every(
          (pos) => pos.name && pos.category && pos.quantity > 0 && pos.priceForItem > 0
        ) && /^\d{4}-\d{2}-\d{2}$/.test(date));
      },
      { deep: true }
    );
    watch(isOpen, (newValue) => {
      if (!newValue) {
        newSuppliesData.value = getBlankSupplies();
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UiDialog = _sfc_main$4$1;
      const _component_UiDialogTrigger = _sfc_main$3$1;
      const _component_UiButton = _sfc_main$5;
      const _component_UiDialogContent = _sfc_main$6;
      const _component_UiDialogHeader = _sfc_main$2$1;
      const _component_UiDialogTitle = _sfc_main$1$1;
      const _component_UiDialogDescription = _sfc_main$7;
      const _component_UiLabel = _sfc_main$8;
      const _component_UiInput = _sfc_main$9;
      const _component_MyCombobox = _sfc_main$a;
      const _component_UiSelect = _sfc_main$6$1;
      const _component_UiSelectTrigger = _sfc_main$4$2;
      const _component_UiSelectValue = _sfc_main$5$1;
      const _component_UiSelectContent = _sfc_main$3$2;
      const _component_UiSelectGroup = _sfc_main$b;
      const _component_UiSelectItem = _sfc_main$2$2;
      const _component_UiSeparator = _sfc_main$c;
      const _component_UiScrollArea = _sfc_main$d;
      const _component_UiDialogFooter = _sfc_main$e;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_UiDialog, {
        open: isOpen.value,
        "onUpdate:open": ($event) => isOpen.value = $event
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UiDialogTrigger, { "as-child": "" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UiButton, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`\u0421\u043E\u0437\u0434\u0430\u0442\u044C`);
                      } else {
                        return [
                          createTextVNode("\u0421\u043E\u0437\u0434\u0430\u0442\u044C")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UiButton, null, {
                      default: withCtx(() => [
                        createTextVNode("\u0421\u043E\u0437\u0434\u0430\u0442\u044C")
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UiDialogContent, { class: "max-w-[1200px] flex flex-col" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UiDialogHeader, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_UiDialogTitle, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`\u0421\u0442\u0430\u0442\u044C\u044F`);
                            } else {
                              return [
                                createTextVNode("\u0421\u0442\u0430\u0442\u044C\u044F")
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
                              createTextVNode("\u0421\u0442\u0430\u0442\u044C\u044F")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_UiDialogDescription)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`<div class="flex gap-5"${_scopeId2}><div class="flex flex-col gap-5 min-w-[350px]"${_scopeId2}><div class="flex gap-2"${_scopeId2}><div class="relative w-full"${_scopeId2}>`);
                  if (newSuppliesData.value.date) {
                    _push3(ssrRenderComponent(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`\u0414\u0430\u0442\u0430 \u0437\u0430\u043A\u0430\u0437\u0430`);
                        } else {
                          return [
                            createTextVNode("\u0414\u0430\u0442\u0430 \u0437\u0430\u043A\u0430\u0437\u0430")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(ssrRenderComponent(_component_UiInput, {
                    modelValue: newSuppliesData.value.date,
                    "onUpdate:modelValue": ($event) => newSuppliesData.value.date = $event,
                    type: "date",
                    placeholder: "\u0414\u0430\u0442\u0430",
                    class: newSuppliesData.value.date ? "" : "outline outline-1 outline-rose-300"
                  }, null, _parent3, _scopeId2));
                  _push3(`</div><div class="relative w-full"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`\u0414\u0430\u0442\u0430 \u043E\u0442\u0433\u0440\u0443\u0437\u043A\u0438`);
                      } else {
                        return [
                          createTextVNode("\u0414\u0430\u0442\u0430 \u043E\u0442\u0433\u0440\u0443\u0437\u043A\u0438")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_UiInput, {
                    modelValue: newSuppliesData.value.shipmentDate,
                    "onUpdate:modelValue": ($event) => newSuppliesData.value.shipmentDate = $event,
                    type: "date",
                    placeholder: "\u0414\u0430\u0442\u0430"
                  }, null, _parent3, _scopeId2));
                  _push3(`</div></div><div class="relative"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`\u041F\u043E\u0441\u0442\u0430\u0432\u0449\u0438\u043A (\u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u044F)`);
                      } else {
                        return [
                          createTextVNode("\u041F\u043E\u0441\u0442\u0430\u0432\u0449\u0438\u043A (\u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u044F)")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_MyCombobox, {
                    items: _ctx.suppliers,
                    label: newSuppliesData.value.supplier,
                    class: newSuppliesData.value.supplier ? "" : "outline-1 outline-rose-300 rounded-md",
                    onSelectedItem: (value) => newSuppliesData.value.supplier = value
                  }, null, _parent3, _scopeId2));
                  _push3(`</div><div class="relative w-full"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`\u041A\u0430\u043A \u043E\u043F\u043B\u0430\u0442\u0438\u043B\u0438`);
                      } else {
                        return [
                          createTextVNode("\u041A\u0430\u043A \u043E\u043F\u043B\u0430\u0442\u0438\u043B\u0438")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_UiSelect, {
                    modelValue: newSuppliesData.value.paymentMethod,
                    "onUpdate:modelValue": ($event) => newSuppliesData.value.paymentMethod = $event
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_UiSelectTrigger, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_UiSelectValue, {
                                placeholder: newSuppliesData.value.paymentMethod
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_UiSelectValue, {
                                  placeholder: newSuppliesData.value.paymentMethod
                                }, null, 8, ["placeholder"])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_UiSelectContent, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<!--[-->`);
                              ssrRenderList(paymentMethods, (item, i) => {
                                _push5(ssrRenderComponent(_component_UiSelectGroup, { key: i }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(ssrRenderComponent(_component_UiSelectItem, { value: item }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`${ssrInterpolate(item)}`);
                                          } else {
                                            return [
                                              createTextVNode(toDisplayString(item), 1)
                                            ];
                                          }
                                        }),
                                        _: 2
                                      }, _parent6, _scopeId5));
                                    } else {
                                      return [
                                        createVNode(_component_UiSelectItem, { value: item }, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(item), 1)
                                          ]),
                                          _: 2
                                        }, 1032, ["value"])
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent5, _scopeId4));
                              });
                              _push5(`<!--]-->`);
                            } else {
                              return [
                                (openBlock(), createBlock(Fragment, null, renderList(paymentMethods, (item, i) => {
                                  return createVNode(_component_UiSelectGroup, { key: i }, {
                                    default: withCtx(() => [
                                      createVNode(_component_UiSelectItem, { value: item }, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(item), 1)
                                        ]),
                                        _: 2
                                      }, 1032, ["value"])
                                    ]),
                                    _: 2
                                  }, 1024);
                                }), 64))
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_UiSelectTrigger, null, {
                            default: withCtx(() => [
                              createVNode(_component_UiSelectValue, {
                                placeholder: newSuppliesData.value.paymentMethod
                              }, null, 8, ["placeholder"])
                            ]),
                            _: 1
                          }),
                          createVNode(_component_UiSelectContent, null, {
                            default: withCtx(() => [
                              (openBlock(), createBlock(Fragment, null, renderList(paymentMethods, (item, i) => {
                                return createVNode(_component_UiSelectGroup, { key: i }, {
                                  default: withCtx(() => [
                                    createVNode(_component_UiSelectItem, { value: item }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(item), 1)
                                      ]),
                                      _: 2
                                    }, 1032, ["value"])
                                  ]),
                                  _: 2
                                }, 1024);
                              }), 64))
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div><div class="relative w-full"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`\u0421\u0442\u0430\u0442\u0443\u0441 \u0437\u0430\u043A\u0430\u0437\u0430`);
                      } else {
                        return [
                          createTextVNode("\u0421\u0442\u0430\u0442\u0443\u0441 \u0437\u0430\u043A\u0430\u0437\u0430")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_UiSelect, {
                    modelValue: newSuppliesData.value.orderStatus,
                    "onUpdate:modelValue": ($event) => newSuppliesData.value.orderStatus = $event
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_UiSelectTrigger, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_UiSelectValue, {
                                placeholder: newSuppliesData.value.orderStatus
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_UiSelectValue, {
                                  placeholder: newSuppliesData.value.orderStatus
                                }, null, 8, ["placeholder"])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_UiSelectContent, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<!--[-->`);
                              ssrRenderList(orderStatuses, (item, i) => {
                                _push5(ssrRenderComponent(_component_UiSelectGroup, { key: i }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(ssrRenderComponent(_component_UiSelectItem, { value: item }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`${ssrInterpolate(item)}`);
                                          } else {
                                            return [
                                              createTextVNode(toDisplayString(item), 1)
                                            ];
                                          }
                                        }),
                                        _: 2
                                      }, _parent6, _scopeId5));
                                    } else {
                                      return [
                                        createVNode(_component_UiSelectItem, { value: item }, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(item), 1)
                                          ]),
                                          _: 2
                                        }, 1032, ["value"])
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent5, _scopeId4));
                              });
                              _push5(`<!--]-->`);
                            } else {
                              return [
                                (openBlock(), createBlock(Fragment, null, renderList(orderStatuses, (item, i) => {
                                  return createVNode(_component_UiSelectGroup, { key: i }, {
                                    default: withCtx(() => [
                                      createVNode(_component_UiSelectItem, { value: item }, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(item), 1)
                                        ]),
                                        _: 2
                                      }, 1032, ["value"])
                                    ]),
                                    _: 2
                                  }, 1024);
                                }), 64))
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_UiSelectTrigger, null, {
                            default: withCtx(() => [
                              createVNode(_component_UiSelectValue, {
                                placeholder: newSuppliesData.value.orderStatus
                              }, null, 8, ["placeholder"])
                            ]),
                            _: 1
                          }),
                          createVNode(_component_UiSelectContent, null, {
                            default: withCtx(() => [
                              (openBlock(), createBlock(Fragment, null, renderList(orderStatuses, (item, i) => {
                                return createVNode(_component_UiSelectGroup, { key: i }, {
                                  default: withCtx(() => [
                                    createVNode(_component_UiSelectItem, { value: item }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(item), 1)
                                      ]),
                                      _: 2
                                    }, 1032, ["value"])
                                  ]),
                                  _: 2
                                }, 1024);
                              }), 64))
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div><div class="relative w-full"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`\u0421\u0442\u0430\u0442\u0443\u0441 \u043E\u043F\u043B\u0430\u0442\u044B`);
                      } else {
                        return [
                          createTextVNode("\u0421\u0442\u0430\u0442\u0443\u0441 \u043E\u043F\u043B\u0430\u0442\u044B")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_UiSelect, {
                    modelValue: newSuppliesData.value.paymentStatus,
                    "onUpdate:modelValue": ($event) => newSuppliesData.value.paymentStatus = $event
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_UiSelectTrigger, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_UiSelectValue, {
                                placeholder: newSuppliesData.value.paymentStatus
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_UiSelectValue, {
                                  placeholder: newSuppliesData.value.paymentStatus
                                }, null, 8, ["placeholder"])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_UiSelectContent, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<!--[-->`);
                              ssrRenderList(paymentStatuses, (item, i) => {
                                _push5(ssrRenderComponent(_component_UiSelectGroup, { key: i }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(ssrRenderComponent(_component_UiSelectItem, { value: item }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`${ssrInterpolate(item)}`);
                                          } else {
                                            return [
                                              createTextVNode(toDisplayString(item), 1)
                                            ];
                                          }
                                        }),
                                        _: 2
                                      }, _parent6, _scopeId5));
                                    } else {
                                      return [
                                        createVNode(_component_UiSelectItem, { value: item }, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(item), 1)
                                          ]),
                                          _: 2
                                        }, 1032, ["value"])
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent5, _scopeId4));
                              });
                              _push5(`<!--]-->`);
                            } else {
                              return [
                                (openBlock(), createBlock(Fragment, null, renderList(paymentStatuses, (item, i) => {
                                  return createVNode(_component_UiSelectGroup, { key: i }, {
                                    default: withCtx(() => [
                                      createVNode(_component_UiSelectItem, { value: item }, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(item), 1)
                                        ]),
                                        _: 2
                                      }, 1032, ["value"])
                                    ]),
                                    _: 2
                                  }, 1024);
                                }), 64))
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_UiSelectTrigger, null, {
                            default: withCtx(() => [
                              createVNode(_component_UiSelectValue, {
                                placeholder: newSuppliesData.value.paymentStatus
                              }, null, 8, ["placeholder"])
                            ]),
                            _: 1
                          }),
                          createVNode(_component_UiSelectContent, null, {
                            default: withCtx(() => [
                              (openBlock(), createBlock(Fragment, null, renderList(paymentStatuses, (item, i) => {
                                return createVNode(_component_UiSelectGroup, { key: i }, {
                                  default: withCtx(() => [
                                    createVNode(_component_UiSelectItem, { value: item }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(item), 1)
                                      ]),
                                      _: 2
                                    }, 1032, ["value"])
                                  ]),
                                  _: 2
                                }, 1024);
                              }), 64))
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div><div class="relative w-full"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`\u0421\u043F\u043E\u0441\u043E\u0431 \u0434\u043E\u0441\u0442\u0430\u0432\u043A\u0438`);
                      } else {
                        return [
                          createTextVNode("\u0421\u043F\u043E\u0441\u043E\u0431 \u0434\u043E\u0441\u0442\u0430\u0432\u043A\u0438")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_UiSelect, {
                    modelValue: newSuppliesData.value.deliveryMethod,
                    "onUpdate:modelValue": ($event) => newSuppliesData.value.deliveryMethod = $event
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_UiSelectTrigger, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_UiSelectValue, {
                                placeholder: newSuppliesData.value.deliveryMethod
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_UiSelectValue, {
                                  placeholder: newSuppliesData.value.deliveryMethod
                                }, null, 8, ["placeholder"])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_UiSelectContent, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<!--[-->`);
                              ssrRenderList(deliveryMethods, (item, i) => {
                                _push5(ssrRenderComponent(_component_UiSelectGroup, { key: i }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(ssrRenderComponent(_component_UiSelectItem, { value: item }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`${ssrInterpolate(item)}`);
                                          } else {
                                            return [
                                              createTextVNode(toDisplayString(item), 1)
                                            ];
                                          }
                                        }),
                                        _: 2
                                      }, _parent6, _scopeId5));
                                    } else {
                                      return [
                                        createVNode(_component_UiSelectItem, { value: item }, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(item), 1)
                                          ]),
                                          _: 2
                                        }, 1032, ["value"])
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent5, _scopeId4));
                              });
                              _push5(`<!--]-->`);
                            } else {
                              return [
                                (openBlock(), createBlock(Fragment, null, renderList(deliveryMethods, (item, i) => {
                                  return createVNode(_component_UiSelectGroup, { key: i }, {
                                    default: withCtx(() => [
                                      createVNode(_component_UiSelectItem, { value: item }, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(item), 1)
                                        ]),
                                        _: 2
                                      }, 1032, ["value"])
                                    ]),
                                    _: 2
                                  }, 1024);
                                }), 64))
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_UiSelectTrigger, null, {
                            default: withCtx(() => [
                              createVNode(_component_UiSelectValue, {
                                placeholder: newSuppliesData.value.deliveryMethod
                              }, null, 8, ["placeholder"])
                            ]),
                            _: 1
                          }),
                          createVNode(_component_UiSelectContent, null, {
                            default: withCtx(() => [
                              (openBlock(), createBlock(Fragment, null, renderList(deliveryMethods, (item, i) => {
                                return createVNode(_component_UiSelectGroup, { key: i }, {
                                  default: withCtx(() => [
                                    createVNode(_component_UiSelectItem, { value: item }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(item), 1)
                                      ]),
                                      _: 2
                                    }, 1032, ["value"])
                                  ]),
                                  _: 2
                                }, 1024);
                              }), 64))
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div><div class="relative"${_scopeId2}>`);
                  if (newSuppliesData.value.invoice) {
                    _push3(ssrRenderComponent(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`\u041D\u043E\u043C\u0435\u0440 \u0441\u0447\u0435\u0442\u0430`);
                        } else {
                          return [
                            createTextVNode("\u041D\u043E\u043C\u0435\u0440 \u0441\u0447\u0435\u0442\u0430")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(ssrRenderComponent(_component_UiInput, {
                    modelValue: newSuppliesData.value.invoice,
                    "onUpdate:modelValue": ($event) => newSuppliesData.value.invoice = $event,
                    placeholder: "\u041D\u043E\u043C\u0435\u0440 \u0441\u0447\u0435\u0442\u0430"
                  }, null, _parent3, _scopeId2));
                  _push3(`</div><div class="relative"${_scopeId2}>`);
                  if (newSuppliesData.value.track) {
                    _push3(ssrRenderComponent(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`\u0422\u0440\u0435\u043A`);
                        } else {
                          return [
                            createTextVNode("\u0422\u0440\u0435\u043A")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(ssrRenderComponent(_component_UiInput, {
                    modelValue: newSuppliesData.value.track,
                    "onUpdate:modelValue": ($event) => newSuppliesData.value.track = $event,
                    placeholder: "\u0422\u0440\u0435\u043A"
                  }, null, _parent3, _scopeId2));
                  _push3(`</div></div>`);
                  _push3(ssrRenderComponent(_component_UiSeparator, {
                    orientation: "vertical",
                    class: "h-[520px]"
                  }, null, _parent3, _scopeId2));
                  _push3(`<div class="flex flex-col grow"${_scopeId2}><div class="w-full grow"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_UiScrollArea, { class: "h-[460px]" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="flex flex-col p-2 gap-5"${_scopeId3}><!--[-->`);
                        ssrRenderList(newSuppliesData.value.positions, (position, index) => {
                          _push4(`<div class="flex gap-2 items-center"${_scopeId3}><div class="relative w-full"${_scopeId3}>`);
                          _push4(ssrRenderComponent(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap" }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`\u041F\u043E\u0437\u0438\u0446\u0438\u044F`);
                              } else {
                                return [
                                  createTextVNode("\u041F\u043E\u0437\u0438\u0446\u0438\u044F")
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(_component_MyCombobox, {
                            items: _ctx.positionsList.map((item) => item.name),
                            label: position.name,
                            class: [
                              position.name ? "" : "outline-1 outline-rose-300 rounded-md "
                            ],
                            onSelectedItem: (value) => {
                              position.name = value;
                              const selectedPosition = _ctx.positionsList.find(
                                (item) => item.name === value
                              );
                              position.category = selectedPosition ? selectedPosition.category : "";
                            }
                          }, null, _parent4, _scopeId3));
                          _push4(`</div><div class="relative"${_scopeId3}>`);
                          _push4(ssrRenderComponent(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap" }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`\u041A\u043E\u043B-\u0432\u043E`);
                              } else {
                                return [
                                  createTextVNode("\u041A\u043E\u043B-\u0432\u043E")
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(_component_UiInput, {
                            modelValue: position.quantity,
                            "onUpdate:modelValue": ($event) => position.quantity = $event,
                            modelModifiers: { number: true },
                            type: "number",
                            placeholder: "\u041A\u043E\u043B-\u0432\u043E",
                            class: [
                              position.quantity > 0 ? "" : "outline-1 outline-rose-300",
                              "w-[100px]"
                            ]
                          }, null, _parent4, _scopeId3));
                          _push4(`</div><div class="relative"${_scopeId3}>`);
                          _push4(ssrRenderComponent(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap" }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`\u0426\u0435\u043D\u0430 \u0437\u0430 \u0435\u0434.`);
                              } else {
                                return [
                                  createTextVNode("\u0426\u0435\u043D\u0430 \u0437\u0430 \u0435\u0434.")
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(_component_UiInput, {
                            modelValue: position.priceForItem,
                            "onUpdate:modelValue": ($event) => position.priceForItem = $event,
                            modelModifiers: { number: true },
                            type: "number",
                            placeholder: "\u0426\u0435\u043D\u0430 \u0437\u0430 \u0435\u0434.",
                            class: [
                              position.priceForItem > 0 ? "" : "outline-1 outline-rose-300",
                              "w-[100px]"
                            ]
                          }, null, _parent4, _scopeId3));
                          _push4(`</div><div class="relative w-full"${_scopeId3}>`);
                          _push4(ssrRenderComponent(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap" }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`\u041A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u044F`);
                              } else {
                                return [
                                  createTextVNode("\u041A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u044F")
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(_component_UiSelect, {
                            modelValue: position.category,
                            "onUpdate:modelValue": ($event) => position.category = $event
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(_component_UiSelectTrigger, {
                                  class: position.category ? "" : "outline-1 outline-rose-300"
                                }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(ssrRenderComponent(_component_UiSelectValue, {
                                        placeholder: position.category
                                      }, null, _parent6, _scopeId5));
                                    } else {
                                      return [
                                        createVNode(_component_UiSelectValue, {
                                          placeholder: position.category
                                        }, null, 8, ["placeholder"])
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent5, _scopeId4));
                                _push5(ssrRenderComponent(_component_UiSelectContent, null, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(`<!--[-->`);
                                      ssrRenderList(categories.value, (item, i) => {
                                        _push6(ssrRenderComponent(_component_UiSelectGroup, { key: i }, {
                                          default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                            if (_push7) {
                                              _push7(ssrRenderComponent(_component_UiSelectItem, { value: item }, {
                                                default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                  if (_push8) {
                                                    _push8(`${ssrInterpolate(item)}`);
                                                  } else {
                                                    return [
                                                      createTextVNode(toDisplayString(item), 1)
                                                    ];
                                                  }
                                                }),
                                                _: 2
                                              }, _parent7, _scopeId6));
                                            } else {
                                              return [
                                                createVNode(_component_UiSelectItem, { value: item }, {
                                                  default: withCtx(() => [
                                                    createTextVNode(toDisplayString(item), 1)
                                                  ]),
                                                  _: 2
                                                }, 1032, ["value"])
                                              ];
                                            }
                                          }),
                                          _: 2
                                        }, _parent6, _scopeId5));
                                      });
                                      _push6(`<!--]-->`);
                                    } else {
                                      return [
                                        (openBlock(true), createBlock(Fragment, null, renderList(categories.value, (item, i) => {
                                          return openBlock(), createBlock(_component_UiSelectGroup, { key: i }, {
                                            default: withCtx(() => [
                                              createVNode(_component_UiSelectItem, { value: item }, {
                                                default: withCtx(() => [
                                                  createTextVNode(toDisplayString(item), 1)
                                                ]),
                                                _: 2
                                              }, 1032, ["value"])
                                            ]),
                                            _: 2
                                          }, 1024);
                                        }), 128))
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(_component_UiSelectTrigger, {
                                    class: position.category ? "" : "outline-1 outline-rose-300"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_UiSelectValue, {
                                        placeholder: position.category
                                      }, null, 8, ["placeholder"])
                                    ]),
                                    _: 2
                                  }, 1032, ["class"]),
                                  createVNode(_component_UiSelectContent, null, {
                                    default: withCtx(() => [
                                      (openBlock(true), createBlock(Fragment, null, renderList(categories.value, (item, i) => {
                                        return openBlock(), createBlock(_component_UiSelectGroup, { key: i }, {
                                          default: withCtx(() => [
                                            createVNode(_component_UiSelectItem, { value: item }, {
                                              default: withCtx(() => [
                                                createTextVNode(toDisplayString(item), 1)
                                              ]),
                                              _: 2
                                            }, 1032, ["value"])
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
                            _: 2
                          }, _parent4, _scopeId3));
                          _push4(`</div>`);
                          if (newSuppliesData.value.positions.length > 1) {
                            _push4(ssrRenderComponent(_component_UiButton, {
                              variant: "destructive",
                              onClick: ($event) => removePosition(index)
                            }, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(` \u0425 `);
                                } else {
                                  return [
                                    createTextVNode(" \u0425 ")
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                          } else {
                            _push4(`<!---->`);
                          }
                          _push4(`</div>`);
                        });
                        _push4(`<!--]--></div>`);
                      } else {
                        return [
                          createVNode("div", { class: "flex flex-col p-2 gap-5" }, [
                            (openBlock(true), createBlock(Fragment, null, renderList(newSuppliesData.value.positions, (position, index) => {
                              return openBlock(), createBlock("div", {
                                key: index,
                                class: "flex gap-2 items-center"
                              }, [
                                createVNode("div", { class: "relative w-full" }, [
                                  createVNode(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap" }, {
                                    default: withCtx(() => [
                                      createTextVNode("\u041F\u043E\u0437\u0438\u0446\u0438\u044F")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_MyCombobox, {
                                    items: _ctx.positionsList.map((item) => item.name),
                                    label: position.name,
                                    class: [
                                      position.name ? "" : "outline-1 outline-rose-300 rounded-md "
                                    ],
                                    onSelectedItem: (value) => {
                                      position.name = value;
                                      const selectedPosition = _ctx.positionsList.find(
                                        (item) => item.name === value
                                      );
                                      position.category = selectedPosition ? selectedPosition.category : "";
                                    }
                                  }, null, 8, ["items", "label", "class", "onSelectedItem"])
                                ]),
                                createVNode("div", { class: "relative" }, [
                                  createVNode(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap" }, {
                                    default: withCtx(() => [
                                      createTextVNode("\u041A\u043E\u043B-\u0432\u043E")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_UiInput, {
                                    modelValue: position.quantity,
                                    "onUpdate:modelValue": ($event) => position.quantity = $event,
                                    modelModifiers: { number: true },
                                    type: "number",
                                    placeholder: "\u041A\u043E\u043B-\u0432\u043E",
                                    class: [
                                      position.quantity > 0 ? "" : "outline-1 outline-rose-300",
                                      "w-[100px]"
                                    ]
                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "class"])
                                ]),
                                createVNode("div", { class: "relative" }, [
                                  createVNode(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap" }, {
                                    default: withCtx(() => [
                                      createTextVNode("\u0426\u0435\u043D\u0430 \u0437\u0430 \u0435\u0434.")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_UiInput, {
                                    modelValue: position.priceForItem,
                                    "onUpdate:modelValue": ($event) => position.priceForItem = $event,
                                    modelModifiers: { number: true },
                                    type: "number",
                                    placeholder: "\u0426\u0435\u043D\u0430 \u0437\u0430 \u0435\u0434.",
                                    class: [
                                      position.priceForItem > 0 ? "" : "outline-1 outline-rose-300",
                                      "w-[100px]"
                                    ]
                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "class"])
                                ]),
                                createVNode("div", { class: "relative w-full" }, [
                                  createVNode(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap" }, {
                                    default: withCtx(() => [
                                      createTextVNode("\u041A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u044F")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_UiSelect, {
                                    modelValue: position.category,
                                    "onUpdate:modelValue": ($event) => position.category = $event
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_UiSelectTrigger, {
                                        class: position.category ? "" : "outline-1 outline-rose-300"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_UiSelectValue, {
                                            placeholder: position.category
                                          }, null, 8, ["placeholder"])
                                        ]),
                                        _: 2
                                      }, 1032, ["class"]),
                                      createVNode(_component_UiSelectContent, null, {
                                        default: withCtx(() => [
                                          (openBlock(true), createBlock(Fragment, null, renderList(categories.value, (item, i) => {
                                            return openBlock(), createBlock(_component_UiSelectGroup, { key: i }, {
                                              default: withCtx(() => [
                                                createVNode(_component_UiSelectItem, { value: item }, {
                                                  default: withCtx(() => [
                                                    createTextVNode(toDisplayString(item), 1)
                                                  ]),
                                                  _: 2
                                                }, 1032, ["value"])
                                              ]),
                                              _: 2
                                            }, 1024);
                                          }), 128))
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 2
                                  }, 1032, ["modelValue", "onUpdate:modelValue"])
                                ]),
                                newSuppliesData.value.positions.length > 1 ? (openBlock(), createBlock(_component_UiButton, {
                                  key: 0,
                                  variant: "destructive",
                                  onClick: ($event) => removePosition(index)
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" \u0425 ")
                                  ]),
                                  _: 2
                                }, 1032, ["onClick"])) : createCommentVNode("", true)
                              ]);
                            }), 128))
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div>`);
                  _push3(ssrRenderComponent(_component_UiButton, {
                    variant: "outline",
                    onClick: addPosition
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u043F\u043E\u0437\u0438\u0446\u0438\u044E`);
                      } else {
                        return [
                          createTextVNode("\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u043F\u043E\u0437\u0438\u0446\u0438\u044E")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div></div>`);
                  _push3(ssrRenderComponent(_component_UiDialogFooter, { class: "w-full" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="flex justify-between w-full"${_scopeId3}>`);
                        _push4(ssrRenderComponent(_component_UiButton, {
                          disabled: disabled.value,
                          class: "w-full",
                          onClick: createSupplieItem
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` \u0421\u043E\u0437\u0434\u0430\u0442\u044C `);
                            } else {
                              return [
                                createTextVNode(" \u0421\u043E\u0437\u0434\u0430\u0442\u044C ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(`</div>`);
                      } else {
                        return [
                          createVNode("div", { class: "flex justify-between w-full" }, [
                            createVNode(_component_UiButton, {
                              disabled: disabled.value,
                              class: "w-full",
                              onClick: createSupplieItem
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" \u0421\u043E\u0437\u0434\u0430\u0442\u044C ")
                              ]),
                              _: 1
                            }, 8, ["disabled"])
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UiDialogHeader, null, {
                      default: withCtx(() => [
                        createVNode(_component_UiDialogTitle, null, {
                          default: withCtx(() => [
                            createTextVNode("\u0421\u0442\u0430\u0442\u044C\u044F")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_UiDialogDescription)
                      ]),
                      _: 1
                    }),
                    createVNode("div", { class: "flex gap-5" }, [
                      createVNode("div", { class: "flex flex-col gap-5 min-w-[350px]" }, [
                        createVNode("div", { class: "flex gap-2" }, [
                          createVNode("div", { class: "relative w-full" }, [
                            newSuppliesData.value.date ? (openBlock(), createBlock(_component_UiLabel, {
                              key: 0,
                              class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap"
                            }, {
                              default: withCtx(() => [
                                createTextVNode("\u0414\u0430\u0442\u0430 \u0437\u0430\u043A\u0430\u0437\u0430")
                              ]),
                              _: 1
                            })) : createCommentVNode("", true),
                            createVNode(_component_UiInput, {
                              modelValue: newSuppliesData.value.date,
                              "onUpdate:modelValue": ($event) => newSuppliesData.value.date = $event,
                              type: "date",
                              placeholder: "\u0414\u0430\u0442\u0430",
                              class: newSuppliesData.value.date ? "" : "outline outline-1 outline-rose-300"
                            }, null, 8, ["modelValue", "onUpdate:modelValue", "class"])
                          ]),
                          createVNode("div", { class: "relative w-full" }, [
                            createVNode(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap" }, {
                              default: withCtx(() => [
                                createTextVNode("\u0414\u0430\u0442\u0430 \u043E\u0442\u0433\u0440\u0443\u0437\u043A\u0438")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_UiInput, {
                              modelValue: newSuppliesData.value.shipmentDate,
                              "onUpdate:modelValue": ($event) => newSuppliesData.value.shipmentDate = $event,
                              type: "date",
                              placeholder: "\u0414\u0430\u0442\u0430"
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ])
                        ]),
                        createVNode("div", { class: "relative" }, [
                          createVNode(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1" }, {
                            default: withCtx(() => [
                              createTextVNode("\u041F\u043E\u0441\u0442\u0430\u0432\u0449\u0438\u043A (\u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u044F)")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_MyCombobox, {
                            items: _ctx.suppliers,
                            label: newSuppliesData.value.supplier,
                            class: newSuppliesData.value.supplier ? "" : "outline-1 outline-rose-300 rounded-md",
                            onSelectedItem: (value) => newSuppliesData.value.supplier = value
                          }, null, 8, ["items", "label", "class", "onSelectedItem"])
                        ]),
                        createVNode("div", { class: "relative w-full" }, [
                          createVNode(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap" }, {
                            default: withCtx(() => [
                              createTextVNode("\u041A\u0430\u043A \u043E\u043F\u043B\u0430\u0442\u0438\u043B\u0438")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_UiSelect, {
                            modelValue: newSuppliesData.value.paymentMethod,
                            "onUpdate:modelValue": ($event) => newSuppliesData.value.paymentMethod = $event
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_UiSelectTrigger, null, {
                                default: withCtx(() => [
                                  createVNode(_component_UiSelectValue, {
                                    placeholder: newSuppliesData.value.paymentMethod
                                  }, null, 8, ["placeholder"])
                                ]),
                                _: 1
                              }),
                              createVNode(_component_UiSelectContent, null, {
                                default: withCtx(() => [
                                  (openBlock(), createBlock(Fragment, null, renderList(paymentMethods, (item, i) => {
                                    return createVNode(_component_UiSelectGroup, { key: i }, {
                                      default: withCtx(() => [
                                        createVNode(_component_UiSelectItem, { value: item }, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(item), 1)
                                          ]),
                                          _: 2
                                        }, 1032, ["value"])
                                      ]),
                                      _: 2
                                    }, 1024);
                                  }), 64))
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        createVNode("div", { class: "relative w-full" }, [
                          createVNode(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap" }, {
                            default: withCtx(() => [
                              createTextVNode("\u0421\u0442\u0430\u0442\u0443\u0441 \u0437\u0430\u043A\u0430\u0437\u0430")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_UiSelect, {
                            modelValue: newSuppliesData.value.orderStatus,
                            "onUpdate:modelValue": ($event) => newSuppliesData.value.orderStatus = $event
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_UiSelectTrigger, null, {
                                default: withCtx(() => [
                                  createVNode(_component_UiSelectValue, {
                                    placeholder: newSuppliesData.value.orderStatus
                                  }, null, 8, ["placeholder"])
                                ]),
                                _: 1
                              }),
                              createVNode(_component_UiSelectContent, null, {
                                default: withCtx(() => [
                                  (openBlock(), createBlock(Fragment, null, renderList(orderStatuses, (item, i) => {
                                    return createVNode(_component_UiSelectGroup, { key: i }, {
                                      default: withCtx(() => [
                                        createVNode(_component_UiSelectItem, { value: item }, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(item), 1)
                                          ]),
                                          _: 2
                                        }, 1032, ["value"])
                                      ]),
                                      _: 2
                                    }, 1024);
                                  }), 64))
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        createVNode("div", { class: "relative w-full" }, [
                          createVNode(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap" }, {
                            default: withCtx(() => [
                              createTextVNode("\u0421\u0442\u0430\u0442\u0443\u0441 \u043E\u043F\u043B\u0430\u0442\u044B")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_UiSelect, {
                            modelValue: newSuppliesData.value.paymentStatus,
                            "onUpdate:modelValue": ($event) => newSuppliesData.value.paymentStatus = $event
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_UiSelectTrigger, null, {
                                default: withCtx(() => [
                                  createVNode(_component_UiSelectValue, {
                                    placeholder: newSuppliesData.value.paymentStatus
                                  }, null, 8, ["placeholder"])
                                ]),
                                _: 1
                              }),
                              createVNode(_component_UiSelectContent, null, {
                                default: withCtx(() => [
                                  (openBlock(), createBlock(Fragment, null, renderList(paymentStatuses, (item, i) => {
                                    return createVNode(_component_UiSelectGroup, { key: i }, {
                                      default: withCtx(() => [
                                        createVNode(_component_UiSelectItem, { value: item }, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(item), 1)
                                          ]),
                                          _: 2
                                        }, 1032, ["value"])
                                      ]),
                                      _: 2
                                    }, 1024);
                                  }), 64))
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        createVNode("div", { class: "relative w-full" }, [
                          createVNode(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap" }, {
                            default: withCtx(() => [
                              createTextVNode("\u0421\u043F\u043E\u0441\u043E\u0431 \u0434\u043E\u0441\u0442\u0430\u0432\u043A\u0438")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_UiSelect, {
                            modelValue: newSuppliesData.value.deliveryMethod,
                            "onUpdate:modelValue": ($event) => newSuppliesData.value.deliveryMethod = $event
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_UiSelectTrigger, null, {
                                default: withCtx(() => [
                                  createVNode(_component_UiSelectValue, {
                                    placeholder: newSuppliesData.value.deliveryMethod
                                  }, null, 8, ["placeholder"])
                                ]),
                                _: 1
                              }),
                              createVNode(_component_UiSelectContent, null, {
                                default: withCtx(() => [
                                  (openBlock(), createBlock(Fragment, null, renderList(deliveryMethods, (item, i) => {
                                    return createVNode(_component_UiSelectGroup, { key: i }, {
                                      default: withCtx(() => [
                                        createVNode(_component_UiSelectItem, { value: item }, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(item), 1)
                                          ]),
                                          _: 2
                                        }, 1032, ["value"])
                                      ]),
                                      _: 2
                                    }, 1024);
                                  }), 64))
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        createVNode("div", { class: "relative" }, [
                          newSuppliesData.value.invoice ? (openBlock(), createBlock(_component_UiLabel, {
                            key: 0,
                            class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap"
                          }, {
                            default: withCtx(() => [
                              createTextVNode("\u041D\u043E\u043C\u0435\u0440 \u0441\u0447\u0435\u0442\u0430")
                            ]),
                            _: 1
                          })) : createCommentVNode("", true),
                          createVNode(_component_UiInput, {
                            modelValue: newSuppliesData.value.invoice,
                            "onUpdate:modelValue": ($event) => newSuppliesData.value.invoice = $event,
                            placeholder: "\u041D\u043E\u043C\u0435\u0440 \u0441\u0447\u0435\u0442\u0430"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        createVNode("div", { class: "relative" }, [
                          newSuppliesData.value.track ? (openBlock(), createBlock(_component_UiLabel, {
                            key: 0,
                            class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap"
                          }, {
                            default: withCtx(() => [
                              createTextVNode("\u0422\u0440\u0435\u043A")
                            ]),
                            _: 1
                          })) : createCommentVNode("", true),
                          createVNode(_component_UiInput, {
                            modelValue: newSuppliesData.value.track,
                            "onUpdate:modelValue": ($event) => newSuppliesData.value.track = $event,
                            placeholder: "\u0422\u0440\u0435\u043A"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ])
                      ]),
                      createVNode(_component_UiSeparator, {
                        orientation: "vertical",
                        class: "h-[520px]"
                      }),
                      createVNode("div", { class: "flex flex-col grow" }, [
                        createVNode("div", { class: "w-full grow" }, [
                          createVNode(_component_UiScrollArea, { class: "h-[460px]" }, {
                            default: withCtx(() => [
                              createVNode("div", { class: "flex flex-col p-2 gap-5" }, [
                                (openBlock(true), createBlock(Fragment, null, renderList(newSuppliesData.value.positions, (position, index) => {
                                  return openBlock(), createBlock("div", {
                                    key: index,
                                    class: "flex gap-2 items-center"
                                  }, [
                                    createVNode("div", { class: "relative w-full" }, [
                                      createVNode(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap" }, {
                                        default: withCtx(() => [
                                          createTextVNode("\u041F\u043E\u0437\u0438\u0446\u0438\u044F")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_MyCombobox, {
                                        items: _ctx.positionsList.map((item) => item.name),
                                        label: position.name,
                                        class: [
                                          position.name ? "" : "outline-1 outline-rose-300 rounded-md "
                                        ],
                                        onSelectedItem: (value) => {
                                          position.name = value;
                                          const selectedPosition = _ctx.positionsList.find(
                                            (item) => item.name === value
                                          );
                                          position.category = selectedPosition ? selectedPosition.category : "";
                                        }
                                      }, null, 8, ["items", "label", "class", "onSelectedItem"])
                                    ]),
                                    createVNode("div", { class: "relative" }, [
                                      createVNode(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap" }, {
                                        default: withCtx(() => [
                                          createTextVNode("\u041A\u043E\u043B-\u0432\u043E")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_UiInput, {
                                        modelValue: position.quantity,
                                        "onUpdate:modelValue": ($event) => position.quantity = $event,
                                        modelModifiers: { number: true },
                                        type: "number",
                                        placeholder: "\u041A\u043E\u043B-\u0432\u043E",
                                        class: [
                                          position.quantity > 0 ? "" : "outline-1 outline-rose-300",
                                          "w-[100px]"
                                        ]
                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "class"])
                                    ]),
                                    createVNode("div", { class: "relative" }, [
                                      createVNode(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap" }, {
                                        default: withCtx(() => [
                                          createTextVNode("\u0426\u0435\u043D\u0430 \u0437\u0430 \u0435\u0434.")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_UiInput, {
                                        modelValue: position.priceForItem,
                                        "onUpdate:modelValue": ($event) => position.priceForItem = $event,
                                        modelModifiers: { number: true },
                                        type: "number",
                                        placeholder: "\u0426\u0435\u043D\u0430 \u0437\u0430 \u0435\u0434.",
                                        class: [
                                          position.priceForItem > 0 ? "" : "outline-1 outline-rose-300",
                                          "w-[100px]"
                                        ]
                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "class"])
                                    ]),
                                    createVNode("div", { class: "relative w-full" }, [
                                      createVNode(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap" }, {
                                        default: withCtx(() => [
                                          createTextVNode("\u041A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u044F")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_UiSelect, {
                                        modelValue: position.category,
                                        "onUpdate:modelValue": ($event) => position.category = $event
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_UiSelectTrigger, {
                                            class: position.category ? "" : "outline-1 outline-rose-300"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(_component_UiSelectValue, {
                                                placeholder: position.category
                                              }, null, 8, ["placeholder"])
                                            ]),
                                            _: 2
                                          }, 1032, ["class"]),
                                          createVNode(_component_UiSelectContent, null, {
                                            default: withCtx(() => [
                                              (openBlock(true), createBlock(Fragment, null, renderList(categories.value, (item, i) => {
                                                return openBlock(), createBlock(_component_UiSelectGroup, { key: i }, {
                                                  default: withCtx(() => [
                                                    createVNode(_component_UiSelectItem, { value: item }, {
                                                      default: withCtx(() => [
                                                        createTextVNode(toDisplayString(item), 1)
                                                      ]),
                                                      _: 2
                                                    }, 1032, ["value"])
                                                  ]),
                                                  _: 2
                                                }, 1024);
                                              }), 128))
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 2
                                      }, 1032, ["modelValue", "onUpdate:modelValue"])
                                    ]),
                                    newSuppliesData.value.positions.length > 1 ? (openBlock(), createBlock(_component_UiButton, {
                                      key: 0,
                                      variant: "destructive",
                                      onClick: ($event) => removePosition(index)
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(" \u0425 ")
                                      ]),
                                      _: 2
                                    }, 1032, ["onClick"])) : createCommentVNode("", true)
                                  ]);
                                }), 128))
                              ])
                            ]),
                            _: 1
                          })
                        ]),
                        createVNode(_component_UiButton, {
                          variant: "outline",
                          onClick: addPosition
                        }, {
                          default: withCtx(() => [
                            createTextVNode("\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u043F\u043E\u0437\u0438\u0446\u0438\u044E")
                          ]),
                          _: 1
                        })
                      ])
                    ]),
                    createVNode(_component_UiDialogFooter, { class: "w-full" }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "flex justify-between w-full" }, [
                          createVNode(_component_UiButton, {
                            disabled: disabled.value,
                            class: "w-full",
                            onClick: createSupplieItem
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" \u0421\u043E\u0437\u0434\u0430\u0442\u044C ")
                            ]),
                            _: 1
                          }, 8, ["disabled"])
                        ])
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
              createVNode(_component_UiDialogTrigger, { "as-child": "" }, {
                default: withCtx(() => [
                  createVNode(_component_UiButton, null, {
                    default: withCtx(() => [
                      createTextVNode("\u0421\u043E\u0437\u0434\u0430\u0442\u044C")
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(_component_UiDialogContent, { class: "max-w-[1200px] flex flex-col" }, {
                default: withCtx(() => [
                  createVNode(_component_UiDialogHeader, null, {
                    default: withCtx(() => [
                      createVNode(_component_UiDialogTitle, null, {
                        default: withCtx(() => [
                          createTextVNode("\u0421\u0442\u0430\u0442\u044C\u044F")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_UiDialogDescription)
                    ]),
                    _: 1
                  }),
                  createVNode("div", { class: "flex gap-5" }, [
                    createVNode("div", { class: "flex flex-col gap-5 min-w-[350px]" }, [
                      createVNode("div", { class: "flex gap-2" }, [
                        createVNode("div", { class: "relative w-full" }, [
                          newSuppliesData.value.date ? (openBlock(), createBlock(_component_UiLabel, {
                            key: 0,
                            class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap"
                          }, {
                            default: withCtx(() => [
                              createTextVNode("\u0414\u0430\u0442\u0430 \u0437\u0430\u043A\u0430\u0437\u0430")
                            ]),
                            _: 1
                          })) : createCommentVNode("", true),
                          createVNode(_component_UiInput, {
                            modelValue: newSuppliesData.value.date,
                            "onUpdate:modelValue": ($event) => newSuppliesData.value.date = $event,
                            type: "date",
                            placeholder: "\u0414\u0430\u0442\u0430",
                            class: newSuppliesData.value.date ? "" : "outline outline-1 outline-rose-300"
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "class"])
                        ]),
                        createVNode("div", { class: "relative w-full" }, [
                          createVNode(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap" }, {
                            default: withCtx(() => [
                              createTextVNode("\u0414\u0430\u0442\u0430 \u043E\u0442\u0433\u0440\u0443\u0437\u043A\u0438")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_UiInput, {
                            modelValue: newSuppliesData.value.shipmentDate,
                            "onUpdate:modelValue": ($event) => newSuppliesData.value.shipmentDate = $event,
                            type: "date",
                            placeholder: "\u0414\u0430\u0442\u0430"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ])
                      ]),
                      createVNode("div", { class: "relative" }, [
                        createVNode(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1" }, {
                          default: withCtx(() => [
                            createTextVNode("\u041F\u043E\u0441\u0442\u0430\u0432\u0449\u0438\u043A (\u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u044F)")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_MyCombobox, {
                          items: _ctx.suppliers,
                          label: newSuppliesData.value.supplier,
                          class: newSuppliesData.value.supplier ? "" : "outline-1 outline-rose-300 rounded-md",
                          onSelectedItem: (value) => newSuppliesData.value.supplier = value
                        }, null, 8, ["items", "label", "class", "onSelectedItem"])
                      ]),
                      createVNode("div", { class: "relative w-full" }, [
                        createVNode(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap" }, {
                          default: withCtx(() => [
                            createTextVNode("\u041A\u0430\u043A \u043E\u043F\u043B\u0430\u0442\u0438\u043B\u0438")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_UiSelect, {
                          modelValue: newSuppliesData.value.paymentMethod,
                          "onUpdate:modelValue": ($event) => newSuppliesData.value.paymentMethod = $event
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_UiSelectTrigger, null, {
                              default: withCtx(() => [
                                createVNode(_component_UiSelectValue, {
                                  placeholder: newSuppliesData.value.paymentMethod
                                }, null, 8, ["placeholder"])
                              ]),
                              _: 1
                            }),
                            createVNode(_component_UiSelectContent, null, {
                              default: withCtx(() => [
                                (openBlock(), createBlock(Fragment, null, renderList(paymentMethods, (item, i) => {
                                  return createVNode(_component_UiSelectGroup, { key: i }, {
                                    default: withCtx(() => [
                                      createVNode(_component_UiSelectItem, { value: item }, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(item), 1)
                                        ]),
                                        _: 2
                                      }, 1032, ["value"])
                                    ]),
                                    _: 2
                                  }, 1024);
                                }), 64))
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      createVNode("div", { class: "relative w-full" }, [
                        createVNode(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap" }, {
                          default: withCtx(() => [
                            createTextVNode("\u0421\u0442\u0430\u0442\u0443\u0441 \u0437\u0430\u043A\u0430\u0437\u0430")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_UiSelect, {
                          modelValue: newSuppliesData.value.orderStatus,
                          "onUpdate:modelValue": ($event) => newSuppliesData.value.orderStatus = $event
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_UiSelectTrigger, null, {
                              default: withCtx(() => [
                                createVNode(_component_UiSelectValue, {
                                  placeholder: newSuppliesData.value.orderStatus
                                }, null, 8, ["placeholder"])
                              ]),
                              _: 1
                            }),
                            createVNode(_component_UiSelectContent, null, {
                              default: withCtx(() => [
                                (openBlock(), createBlock(Fragment, null, renderList(orderStatuses, (item, i) => {
                                  return createVNode(_component_UiSelectGroup, { key: i }, {
                                    default: withCtx(() => [
                                      createVNode(_component_UiSelectItem, { value: item }, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(item), 1)
                                        ]),
                                        _: 2
                                      }, 1032, ["value"])
                                    ]),
                                    _: 2
                                  }, 1024);
                                }), 64))
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      createVNode("div", { class: "relative w-full" }, [
                        createVNode(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap" }, {
                          default: withCtx(() => [
                            createTextVNode("\u0421\u0442\u0430\u0442\u0443\u0441 \u043E\u043F\u043B\u0430\u0442\u044B")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_UiSelect, {
                          modelValue: newSuppliesData.value.paymentStatus,
                          "onUpdate:modelValue": ($event) => newSuppliesData.value.paymentStatus = $event
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_UiSelectTrigger, null, {
                              default: withCtx(() => [
                                createVNode(_component_UiSelectValue, {
                                  placeholder: newSuppliesData.value.paymentStatus
                                }, null, 8, ["placeholder"])
                              ]),
                              _: 1
                            }),
                            createVNode(_component_UiSelectContent, null, {
                              default: withCtx(() => [
                                (openBlock(), createBlock(Fragment, null, renderList(paymentStatuses, (item, i) => {
                                  return createVNode(_component_UiSelectGroup, { key: i }, {
                                    default: withCtx(() => [
                                      createVNode(_component_UiSelectItem, { value: item }, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(item), 1)
                                        ]),
                                        _: 2
                                      }, 1032, ["value"])
                                    ]),
                                    _: 2
                                  }, 1024);
                                }), 64))
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      createVNode("div", { class: "relative w-full" }, [
                        createVNode(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap" }, {
                          default: withCtx(() => [
                            createTextVNode("\u0421\u043F\u043E\u0441\u043E\u0431 \u0434\u043E\u0441\u0442\u0430\u0432\u043A\u0438")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_UiSelect, {
                          modelValue: newSuppliesData.value.deliveryMethod,
                          "onUpdate:modelValue": ($event) => newSuppliesData.value.deliveryMethod = $event
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_UiSelectTrigger, null, {
                              default: withCtx(() => [
                                createVNode(_component_UiSelectValue, {
                                  placeholder: newSuppliesData.value.deliveryMethod
                                }, null, 8, ["placeholder"])
                              ]),
                              _: 1
                            }),
                            createVNode(_component_UiSelectContent, null, {
                              default: withCtx(() => [
                                (openBlock(), createBlock(Fragment, null, renderList(deliveryMethods, (item, i) => {
                                  return createVNode(_component_UiSelectGroup, { key: i }, {
                                    default: withCtx(() => [
                                      createVNode(_component_UiSelectItem, { value: item }, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(item), 1)
                                        ]),
                                        _: 2
                                      }, 1032, ["value"])
                                    ]),
                                    _: 2
                                  }, 1024);
                                }), 64))
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      createVNode("div", { class: "relative" }, [
                        newSuppliesData.value.invoice ? (openBlock(), createBlock(_component_UiLabel, {
                          key: 0,
                          class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap"
                        }, {
                          default: withCtx(() => [
                            createTextVNode("\u041D\u043E\u043C\u0435\u0440 \u0441\u0447\u0435\u0442\u0430")
                          ]),
                          _: 1
                        })) : createCommentVNode("", true),
                        createVNode(_component_UiInput, {
                          modelValue: newSuppliesData.value.invoice,
                          "onUpdate:modelValue": ($event) => newSuppliesData.value.invoice = $event,
                          placeholder: "\u041D\u043E\u043C\u0435\u0440 \u0441\u0447\u0435\u0442\u0430"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      createVNode("div", { class: "relative" }, [
                        newSuppliesData.value.track ? (openBlock(), createBlock(_component_UiLabel, {
                          key: 0,
                          class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap"
                        }, {
                          default: withCtx(() => [
                            createTextVNode("\u0422\u0440\u0435\u043A")
                          ]),
                          _: 1
                        })) : createCommentVNode("", true),
                        createVNode(_component_UiInput, {
                          modelValue: newSuppliesData.value.track,
                          "onUpdate:modelValue": ($event) => newSuppliesData.value.track = $event,
                          placeholder: "\u0422\u0440\u0435\u043A"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ])
                    ]),
                    createVNode(_component_UiSeparator, {
                      orientation: "vertical",
                      class: "h-[520px]"
                    }),
                    createVNode("div", { class: "flex flex-col grow" }, [
                      createVNode("div", { class: "w-full grow" }, [
                        createVNode(_component_UiScrollArea, { class: "h-[460px]" }, {
                          default: withCtx(() => [
                            createVNode("div", { class: "flex flex-col p-2 gap-5" }, [
                              (openBlock(true), createBlock(Fragment, null, renderList(newSuppliesData.value.positions, (position, index) => {
                                return openBlock(), createBlock("div", {
                                  key: index,
                                  class: "flex gap-2 items-center"
                                }, [
                                  createVNode("div", { class: "relative w-full" }, [
                                    createVNode(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap" }, {
                                      default: withCtx(() => [
                                        createTextVNode("\u041F\u043E\u0437\u0438\u0446\u0438\u044F")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_MyCombobox, {
                                      items: _ctx.positionsList.map((item) => item.name),
                                      label: position.name,
                                      class: [
                                        position.name ? "" : "outline-1 outline-rose-300 rounded-md "
                                      ],
                                      onSelectedItem: (value) => {
                                        position.name = value;
                                        const selectedPosition = _ctx.positionsList.find(
                                          (item) => item.name === value
                                        );
                                        position.category = selectedPosition ? selectedPosition.category : "";
                                      }
                                    }, null, 8, ["items", "label", "class", "onSelectedItem"])
                                  ]),
                                  createVNode("div", { class: "relative" }, [
                                    createVNode(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap" }, {
                                      default: withCtx(() => [
                                        createTextVNode("\u041A\u043E\u043B-\u0432\u043E")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_UiInput, {
                                      modelValue: position.quantity,
                                      "onUpdate:modelValue": ($event) => position.quantity = $event,
                                      modelModifiers: { number: true },
                                      type: "number",
                                      placeholder: "\u041A\u043E\u043B-\u0432\u043E",
                                      class: [
                                        position.quantity > 0 ? "" : "outline-1 outline-rose-300",
                                        "w-[100px]"
                                      ]
                                    }, null, 8, ["modelValue", "onUpdate:modelValue", "class"])
                                  ]),
                                  createVNode("div", { class: "relative" }, [
                                    createVNode(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap" }, {
                                      default: withCtx(() => [
                                        createTextVNode("\u0426\u0435\u043D\u0430 \u0437\u0430 \u0435\u0434.")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_UiInput, {
                                      modelValue: position.priceForItem,
                                      "onUpdate:modelValue": ($event) => position.priceForItem = $event,
                                      modelModifiers: { number: true },
                                      type: "number",
                                      placeholder: "\u0426\u0435\u043D\u0430 \u0437\u0430 \u0435\u0434.",
                                      class: [
                                        position.priceForItem > 0 ? "" : "outline-1 outline-rose-300",
                                        "w-[100px]"
                                      ]
                                    }, null, 8, ["modelValue", "onUpdate:modelValue", "class"])
                                  ]),
                                  createVNode("div", { class: "relative w-full" }, [
                                    createVNode(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap" }, {
                                      default: withCtx(() => [
                                        createTextVNode("\u041A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u044F")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_UiSelect, {
                                      modelValue: position.category,
                                      "onUpdate:modelValue": ($event) => position.category = $event
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(_component_UiSelectTrigger, {
                                          class: position.category ? "" : "outline-1 outline-rose-300"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(_component_UiSelectValue, {
                                              placeholder: position.category
                                            }, null, 8, ["placeholder"])
                                          ]),
                                          _: 2
                                        }, 1032, ["class"]),
                                        createVNode(_component_UiSelectContent, null, {
                                          default: withCtx(() => [
                                            (openBlock(true), createBlock(Fragment, null, renderList(categories.value, (item, i) => {
                                              return openBlock(), createBlock(_component_UiSelectGroup, { key: i }, {
                                                default: withCtx(() => [
                                                  createVNode(_component_UiSelectItem, { value: item }, {
                                                    default: withCtx(() => [
                                                      createTextVNode(toDisplayString(item), 1)
                                                    ]),
                                                    _: 2
                                                  }, 1032, ["value"])
                                                ]),
                                                _: 2
                                              }, 1024);
                                            }), 128))
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 2
                                    }, 1032, ["modelValue", "onUpdate:modelValue"])
                                  ]),
                                  newSuppliesData.value.positions.length > 1 ? (openBlock(), createBlock(_component_UiButton, {
                                    key: 0,
                                    variant: "destructive",
                                    onClick: ($event) => removePosition(index)
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(" \u0425 ")
                                    ]),
                                    _: 2
                                  }, 1032, ["onClick"])) : createCommentVNode("", true)
                                ]);
                              }), 128))
                            ])
                          ]),
                          _: 1
                        })
                      ]),
                      createVNode(_component_UiButton, {
                        variant: "outline",
                        onClick: addPosition
                      }, {
                        default: withCtx(() => [
                          createTextVNode("\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u043F\u043E\u0437\u0438\u0446\u0438\u044E")
                        ]),
                        _: 1
                      })
                    ])
                  ]),
                  createVNode(_component_UiDialogFooter, { class: "w-full" }, {
                    default: withCtx(() => [
                      createVNode("div", { class: "flex justify-between w-full" }, [
                        createVNode(_component_UiButton, {
                          disabled: disabled.value,
                          class: "w-full",
                          onClick: createSupplieItem
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" \u0421\u043E\u0437\u0434\u0430\u0442\u044C ")
                          ]),
                          _: 1
                        }, 8, ["disabled"])
                      ])
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
      _push(`</div>`);
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/my/supplies/Create.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "DataTableFacetedFilter",
  __ssrInlineRender: true,
  props: {
    column: {},
    title: {},
    options: {}
  },
  setup(__props) {
    const props = __props;
    const facets = computed(() => {
      var _a;
      return (_a = props.column) == null ? void 0 : _a.getFacetedUniqueValues();
    });
    const selectedValues = computed(
      () => {
        var _a;
        return new Set((_a = props.column) == null ? void 0 : _a.getFilterValue());
      }
    );
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UiPopover = _sfc_main$2$3;
      const _component_UiPopoverTrigger = _sfc_main$1$2;
      const _component_UiButton = _sfc_main$5;
      const _component_UiSeparator = _sfc_main$c;
      const _component_UiBadge = _sfc_main$i;
      const _component_UiPopoverContent = _sfc_main$f;
      const _component_UiCommand = _sfc_main$5$3;
      const _component_UiCommandInput = _sfc_main$2$5;
      const _component_UiCommandList = _sfc_main$j;
      const _component_UiCommandEmpty = _sfc_main$4$4;
      const _component_UiCommandGroup = _sfc_main$3$4;
      const _component_UiCommandItem = _sfc_main$1$5;
      const _component_UiCommandSeparator = _sfc_main$k;
      _push(ssrRenderComponent(_component_UiPopover, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UiPopoverTrigger, { "as-child": "" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UiButton, {
                    variant: "outline",
                    size: "sm",
                    class: "h-8 border-dashed"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(CirclePlus), { class: "mr-2 h-4 w-4" }, null, _parent4, _scopeId3));
                        _push4(` ${ssrInterpolate(_ctx.title)} `);
                        if (selectedValues.value.size > 0) {
                          _push4(`<!--[-->`);
                          _push4(ssrRenderComponent(_component_UiSeparator, {
                            orientation: "vertical",
                            class: "mx-2 h-4"
                          }, null, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(_component_UiBadge, {
                            variant: "secondary",
                            class: "rounded-sm px-1 font-normal lg:hidden"
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`${ssrInterpolate(selectedValues.value.size)}`);
                              } else {
                                return [
                                  createTextVNode(toDisplayString(selectedValues.value.size), 1)
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                          _push4(`<div class="hidden space-x-1 lg:flex"${_scopeId3}>`);
                          if (selectedValues.value.size > 0) {
                            _push4(ssrRenderComponent(_component_UiBadge, {
                              variant: "secondary",
                              class: "rounded-sm px-1 font-normal"
                            }, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(`${ssrInterpolate(selectedValues.value.size)}`);
                                } else {
                                  return [
                                    createTextVNode(toDisplayString(selectedValues.value.size), 1)
                                  ];
                                }
                              }),
                              _: 1
                            }, _parent4, _scopeId3));
                          } else {
                            _push4(`<!--[-->`);
                            ssrRenderList(_ctx.options.filter(
                              (option) => selectedValues.value.has(option.value)
                            ), (option) => {
                              _push4(ssrRenderComponent(_component_UiBadge, {
                                key: option.value,
                                variant: "secondary",
                                class: "rounded-sm px-1 font-normal"
                              }, {
                                default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                  if (_push5) {
                                    _push5(`${ssrInterpolate(option.label)}`);
                                  } else {
                                    return [
                                      createTextVNode(toDisplayString(option.label), 1)
                                    ];
                                  }
                                }),
                                _: 2
                              }, _parent4, _scopeId3));
                            });
                            _push4(`<!--]-->`);
                          }
                          _push4(`</div><!--]-->`);
                        } else {
                          _push4(`<!---->`);
                        }
                      } else {
                        return [
                          createVNode(unref(CirclePlus), { class: "mr-2 h-4 w-4" }),
                          createTextVNode(" " + toDisplayString(_ctx.title) + " ", 1),
                          selectedValues.value.size > 0 ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                            createVNode(_component_UiSeparator, {
                              orientation: "vertical",
                              class: "mx-2 h-4"
                            }),
                            createVNode(_component_UiBadge, {
                              variant: "secondary",
                              class: "rounded-sm px-1 font-normal lg:hidden"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(selectedValues.value.size), 1)
                              ]),
                              _: 1
                            }),
                            createVNode("div", { class: "hidden space-x-1 lg:flex" }, [
                              selectedValues.value.size > 0 ? (openBlock(), createBlock(_component_UiBadge, {
                                key: 0,
                                variant: "secondary",
                                class: "rounded-sm px-1 font-normal"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(selectedValues.value.size), 1)
                                ]),
                                _: 1
                              })) : (openBlock(true), createBlock(Fragment, { key: 1 }, renderList(_ctx.options.filter(
                                (option) => selectedValues.value.has(option.value)
                              ), (option) => {
                                return openBlock(), createBlock(_component_UiBadge, {
                                  key: option.value,
                                  variant: "secondary",
                                  class: "rounded-sm px-1 font-normal"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(option.label), 1)
                                  ]),
                                  _: 2
                                }, 1024);
                              }), 128))
                            ])
                          ], 64)) : createCommentVNode("", true)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UiButton, {
                      variant: "outline",
                      size: "sm",
                      class: "h-8 border-dashed"
                    }, {
                      default: withCtx(() => [
                        createVNode(unref(CirclePlus), { class: "mr-2 h-4 w-4" }),
                        createTextVNode(" " + toDisplayString(_ctx.title) + " ", 1),
                        selectedValues.value.size > 0 ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                          createVNode(_component_UiSeparator, {
                            orientation: "vertical",
                            class: "mx-2 h-4"
                          }),
                          createVNode(_component_UiBadge, {
                            variant: "secondary",
                            class: "rounded-sm px-1 font-normal lg:hidden"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(selectedValues.value.size), 1)
                            ]),
                            _: 1
                          }),
                          createVNode("div", { class: "hidden space-x-1 lg:flex" }, [
                            selectedValues.value.size > 0 ? (openBlock(), createBlock(_component_UiBadge, {
                              key: 0,
                              variant: "secondary",
                              class: "rounded-sm px-1 font-normal"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(selectedValues.value.size), 1)
                              ]),
                              _: 1
                            })) : (openBlock(true), createBlock(Fragment, { key: 1 }, renderList(_ctx.options.filter(
                              (option) => selectedValues.value.has(option.value)
                            ), (option) => {
                              return openBlock(), createBlock(_component_UiBadge, {
                                key: option.value,
                                variant: "secondary",
                                class: "rounded-sm px-1 font-normal"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(option.label), 1)
                                ]),
                                _: 2
                              }, 1024);
                            }), 128))
                          ])
                        ], 64)) : createCommentVNode("", true)
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UiPopoverContent, {
              class: "w-[250px] p-0",
              align: "start"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UiCommand, {
                    "filter-function": (list, term) => list.filter((i) => {
                      var _a;
                      return (_a = i.label.toLowerCase()) == null ? void 0 : _a.includes(term);
                    })
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_UiCommandInput, { placeholder: _ctx.title }, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_UiCommandList, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_UiCommandEmpty, null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`\u041D\u0435\u0442 \u0441\u043E\u0432\u043F\u0430\u0434\u0435\u043D\u0438\u0439.`);
                                  } else {
                                    return [
                                      createTextVNode("\u041D\u0435\u0442 \u0441\u043E\u0432\u043F\u0430\u0434\u0435\u043D\u0438\u0439.")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_UiCommandGroup, null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`<!--[-->`);
                                    ssrRenderList(_ctx.options, (option) => {
                                      _push6(ssrRenderComponent(_component_UiCommandItem, {
                                        key: option.value,
                                        value: option,
                                        onSelect: (e) => {
                                          var _a;
                                          const isSelected = selectedValues.value.has(option.value);
                                          if (isSelected) {
                                            selectedValues.value.delete(option.value);
                                          } else {
                                            selectedValues.value.add(option.value);
                                          }
                                          const filterValues = Array.from(selectedValues.value);
                                          (_a = _ctx.column) == null ? void 0 : _a.setFilterValue(
                                            filterValues.length ? filterValues : void 0
                                          );
                                        }
                                      }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          var _a, _b;
                                          if (_push7) {
                                            _push7(`<div class="${ssrRenderClass(
                                              unref(cn)(
                                                "mr-2 flex h-4 w-4 items-center justify-center rounded-sm border border-primary",
                                                selectedValues.value.has(option.value) ? "bg-primary text-primary-foreground" : "opacity-50 [&_svg]:invisible"
                                              )
                                            )}"${_scopeId6}>`);
                                            _push7(ssrRenderComponent(unref(Check), {
                                              class: unref(cn)("h-4 w-4")
                                            }, null, _parent7, _scopeId6));
                                            _push7(`</div>`);
                                            if (option.icon) {
                                              ssrRenderVNode(_push7, createVNode(resolveDynamicComponent(option.icon), { class: "mr-2 h-4 w-4 text-muted-foreground" }, null), _parent7, _scopeId6);
                                            } else {
                                              _push7(`<!---->`);
                                            }
                                            _push7(`<span${_scopeId6}>${ssrInterpolate(option.label)}</span>`);
                                            if ((_a = facets.value) == null ? void 0 : _a.get(option.value)) {
                                              _push7(`<span class="ml-auto flex h-4 w-4 items-center justify-center font-mono text-xs"${_scopeId6}>${ssrInterpolate(facets.value.get(option.value))}</span>`);
                                            } else {
                                              _push7(`<!---->`);
                                            }
                                          } else {
                                            return [
                                              createVNode("div", {
                                                class: unref(cn)(
                                                  "mr-2 flex h-4 w-4 items-center justify-center rounded-sm border border-primary",
                                                  selectedValues.value.has(option.value) ? "bg-primary text-primary-foreground" : "opacity-50 [&_svg]:invisible"
                                                )
                                              }, [
                                                createVNode(unref(Check), {
                                                  class: unref(cn)("h-4 w-4")
                                                }, null, 8, ["class"])
                                              ], 2),
                                              option.icon ? (openBlock(), createBlock(resolveDynamicComponent(option.icon), {
                                                key: 0,
                                                class: "mr-2 h-4 w-4 text-muted-foreground"
                                              })) : createCommentVNode("", true),
                                              createVNode("span", null, toDisplayString(option.label), 1),
                                              ((_b = facets.value) == null ? void 0 : _b.get(option.value)) ? (openBlock(), createBlock("span", {
                                                key: 1,
                                                class: "ml-auto flex h-4 w-4 items-center justify-center font-mono text-xs"
                                              }, toDisplayString(facets.value.get(option.value)), 1)) : createCommentVNode("", true)
                                            ];
                                          }
                                        }),
                                        _: 2
                                      }, _parent6, _scopeId5));
                                    });
                                    _push6(`<!--]-->`);
                                  } else {
                                    return [
                                      (openBlock(true), createBlock(Fragment, null, renderList(_ctx.options, (option) => {
                                        return openBlock(), createBlock(_component_UiCommandItem, {
                                          key: option.value,
                                          value: option,
                                          onSelect: (e) => {
                                            var _a;
                                            const isSelected = selectedValues.value.has(option.value);
                                            if (isSelected) {
                                              selectedValues.value.delete(option.value);
                                            } else {
                                              selectedValues.value.add(option.value);
                                            }
                                            const filterValues = Array.from(selectedValues.value);
                                            (_a = _ctx.column) == null ? void 0 : _a.setFilterValue(
                                              filterValues.length ? filterValues : void 0
                                            );
                                          }
                                        }, {
                                          default: withCtx(() => {
                                            var _a;
                                            return [
                                              createVNode("div", {
                                                class: unref(cn)(
                                                  "mr-2 flex h-4 w-4 items-center justify-center rounded-sm border border-primary",
                                                  selectedValues.value.has(option.value) ? "bg-primary text-primary-foreground" : "opacity-50 [&_svg]:invisible"
                                                )
                                              }, [
                                                createVNode(unref(Check), {
                                                  class: unref(cn)("h-4 w-4")
                                                }, null, 8, ["class"])
                                              ], 2),
                                              option.icon ? (openBlock(), createBlock(resolveDynamicComponent(option.icon), {
                                                key: 0,
                                                class: "mr-2 h-4 w-4 text-muted-foreground"
                                              })) : createCommentVNode("", true),
                                              createVNode("span", null, toDisplayString(option.label), 1),
                                              ((_a = facets.value) == null ? void 0 : _a.get(option.value)) ? (openBlock(), createBlock("span", {
                                                key: 1,
                                                class: "ml-auto flex h-4 w-4 items-center justify-center font-mono text-xs"
                                              }, toDisplayString(facets.value.get(option.value)), 1)) : createCommentVNode("", true)
                                            ];
                                          }),
                                          _: 2
                                        }, 1032, ["value", "onSelect"]);
                                      }), 128))
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              if (selectedValues.value.size > 0) {
                                _push5(`<!--[-->`);
                                _push5(ssrRenderComponent(_component_UiCommandSeparator, null, null, _parent5, _scopeId4));
                                _push5(ssrRenderComponent(_component_UiCommandGroup, null, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(ssrRenderComponent(_component_UiCommandItem, {
                                        value: { label: "\u041E\u0447\u0438\u0441\u0442\u0438\u0442\u044C" },
                                        class: "justify-center text-center",
                                        onSelect: ($event) => {
                                          var _a;
                                          return (_a = _ctx.column) == null ? void 0 : _a.setFilterValue(void 0);
                                        }
                                      }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(` \u041E\u0447\u0438\u0441\u0442\u0438\u0442\u044C `);
                                          } else {
                                            return [
                                              createTextVNode(" \u041E\u0447\u0438\u0441\u0442\u0438\u0442\u044C ")
                                            ];
                                          }
                                        }),
                                        _: 1
                                      }, _parent6, _scopeId5));
                                    } else {
                                      return [
                                        createVNode(_component_UiCommandItem, {
                                          value: { label: "\u041E\u0447\u0438\u0441\u0442\u0438\u0442\u044C" },
                                          class: "justify-center text-center",
                                          onSelect: ($event) => {
                                            var _a;
                                            return (_a = _ctx.column) == null ? void 0 : _a.setFilterValue(void 0);
                                          }
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(" \u041E\u0447\u0438\u0441\u0442\u0438\u0442\u044C ")
                                          ]),
                                          _: 1
                                        }, 8, ["onSelect"])
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent5, _scopeId4));
                                _push5(`<!--]-->`);
                              } else {
                                _push5(`<!---->`);
                              }
                            } else {
                              return [
                                createVNode(_component_UiCommandEmpty, null, {
                                  default: withCtx(() => [
                                    createTextVNode("\u041D\u0435\u0442 \u0441\u043E\u0432\u043F\u0430\u0434\u0435\u043D\u0438\u0439.")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_UiCommandGroup, null, {
                                  default: withCtx(() => [
                                    (openBlock(true), createBlock(Fragment, null, renderList(_ctx.options, (option) => {
                                      return openBlock(), createBlock(_component_UiCommandItem, {
                                        key: option.value,
                                        value: option,
                                        onSelect: (e) => {
                                          var _a;
                                          const isSelected = selectedValues.value.has(option.value);
                                          if (isSelected) {
                                            selectedValues.value.delete(option.value);
                                          } else {
                                            selectedValues.value.add(option.value);
                                          }
                                          const filterValues = Array.from(selectedValues.value);
                                          (_a = _ctx.column) == null ? void 0 : _a.setFilterValue(
                                            filterValues.length ? filterValues : void 0
                                          );
                                        }
                                      }, {
                                        default: withCtx(() => {
                                          var _a;
                                          return [
                                            createVNode("div", {
                                              class: unref(cn)(
                                                "mr-2 flex h-4 w-4 items-center justify-center rounded-sm border border-primary",
                                                selectedValues.value.has(option.value) ? "bg-primary text-primary-foreground" : "opacity-50 [&_svg]:invisible"
                                              )
                                            }, [
                                              createVNode(unref(Check), {
                                                class: unref(cn)("h-4 w-4")
                                              }, null, 8, ["class"])
                                            ], 2),
                                            option.icon ? (openBlock(), createBlock(resolveDynamicComponent(option.icon), {
                                              key: 0,
                                              class: "mr-2 h-4 w-4 text-muted-foreground"
                                            })) : createCommentVNode("", true),
                                            createVNode("span", null, toDisplayString(option.label), 1),
                                            ((_a = facets.value) == null ? void 0 : _a.get(option.value)) ? (openBlock(), createBlock("span", {
                                              key: 1,
                                              class: "ml-auto flex h-4 w-4 items-center justify-center font-mono text-xs"
                                            }, toDisplayString(facets.value.get(option.value)), 1)) : createCommentVNode("", true)
                                          ];
                                        }),
                                        _: 2
                                      }, 1032, ["value", "onSelect"]);
                                    }), 128))
                                  ]),
                                  _: 1
                                }),
                                selectedValues.value.size > 0 ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                                  createVNode(_component_UiCommandSeparator),
                                  createVNode(_component_UiCommandGroup, null, {
                                    default: withCtx(() => [
                                      createVNode(_component_UiCommandItem, {
                                        value: { label: "\u041E\u0447\u0438\u0441\u0442\u0438\u0442\u044C" },
                                        class: "justify-center text-center",
                                        onSelect: ($event) => {
                                          var _a;
                                          return (_a = _ctx.column) == null ? void 0 : _a.setFilterValue(void 0);
                                        }
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(" \u041E\u0447\u0438\u0441\u0442\u0438\u0442\u044C ")
                                        ]),
                                        _: 1
                                      }, 8, ["onSelect"])
                                    ]),
                                    _: 1
                                  })
                                ], 64)) : createCommentVNode("", true)
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_UiCommandInput, { placeholder: _ctx.title }, null, 8, ["placeholder"]),
                          createVNode(_component_UiCommandList, null, {
                            default: withCtx(() => [
                              createVNode(_component_UiCommandEmpty, null, {
                                default: withCtx(() => [
                                  createTextVNode("\u041D\u0435\u0442 \u0441\u043E\u0432\u043F\u0430\u0434\u0435\u043D\u0438\u0439.")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_UiCommandGroup, null, {
                                default: withCtx(() => [
                                  (openBlock(true), createBlock(Fragment, null, renderList(_ctx.options, (option) => {
                                    return openBlock(), createBlock(_component_UiCommandItem, {
                                      key: option.value,
                                      value: option,
                                      onSelect: (e) => {
                                        var _a;
                                        const isSelected = selectedValues.value.has(option.value);
                                        if (isSelected) {
                                          selectedValues.value.delete(option.value);
                                        } else {
                                          selectedValues.value.add(option.value);
                                        }
                                        const filterValues = Array.from(selectedValues.value);
                                        (_a = _ctx.column) == null ? void 0 : _a.setFilterValue(
                                          filterValues.length ? filterValues : void 0
                                        );
                                      }
                                    }, {
                                      default: withCtx(() => {
                                        var _a;
                                        return [
                                          createVNode("div", {
                                            class: unref(cn)(
                                              "mr-2 flex h-4 w-4 items-center justify-center rounded-sm border border-primary",
                                              selectedValues.value.has(option.value) ? "bg-primary text-primary-foreground" : "opacity-50 [&_svg]:invisible"
                                            )
                                          }, [
                                            createVNode(unref(Check), {
                                              class: unref(cn)("h-4 w-4")
                                            }, null, 8, ["class"])
                                          ], 2),
                                          option.icon ? (openBlock(), createBlock(resolveDynamicComponent(option.icon), {
                                            key: 0,
                                            class: "mr-2 h-4 w-4 text-muted-foreground"
                                          })) : createCommentVNode("", true),
                                          createVNode("span", null, toDisplayString(option.label), 1),
                                          ((_a = facets.value) == null ? void 0 : _a.get(option.value)) ? (openBlock(), createBlock("span", {
                                            key: 1,
                                            class: "ml-auto flex h-4 w-4 items-center justify-center font-mono text-xs"
                                          }, toDisplayString(facets.value.get(option.value)), 1)) : createCommentVNode("", true)
                                        ];
                                      }),
                                      _: 2
                                    }, 1032, ["value", "onSelect"]);
                                  }), 128))
                                ]),
                                _: 1
                              }),
                              selectedValues.value.size > 0 ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                                createVNode(_component_UiCommandSeparator),
                                createVNode(_component_UiCommandGroup, null, {
                                  default: withCtx(() => [
                                    createVNode(_component_UiCommandItem, {
                                      value: { label: "\u041E\u0447\u0438\u0441\u0442\u0438\u0442\u044C" },
                                      class: "justify-center text-center",
                                      onSelect: ($event) => {
                                        var _a;
                                        return (_a = _ctx.column) == null ? void 0 : _a.setFilterValue(void 0);
                                      }
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(" \u041E\u0447\u0438\u0441\u0442\u0438\u0442\u044C ")
                                      ]),
                                      _: 1
                                    }, 8, ["onSelect"])
                                  ]),
                                  _: 1
                                })
                              ], 64)) : createCommentVNode("", true)
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
                    createVNode(_component_UiCommand, {
                      "filter-function": (list, term) => list.filter((i) => {
                        var _a;
                        return (_a = i.label.toLowerCase()) == null ? void 0 : _a.includes(term);
                      })
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_UiCommandInput, { placeholder: _ctx.title }, null, 8, ["placeholder"]),
                        createVNode(_component_UiCommandList, null, {
                          default: withCtx(() => [
                            createVNode(_component_UiCommandEmpty, null, {
                              default: withCtx(() => [
                                createTextVNode("\u041D\u0435\u0442 \u0441\u043E\u0432\u043F\u0430\u0434\u0435\u043D\u0438\u0439.")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_UiCommandGroup, null, {
                              default: withCtx(() => [
                                (openBlock(true), createBlock(Fragment, null, renderList(_ctx.options, (option) => {
                                  return openBlock(), createBlock(_component_UiCommandItem, {
                                    key: option.value,
                                    value: option,
                                    onSelect: (e) => {
                                      var _a;
                                      const isSelected = selectedValues.value.has(option.value);
                                      if (isSelected) {
                                        selectedValues.value.delete(option.value);
                                      } else {
                                        selectedValues.value.add(option.value);
                                      }
                                      const filterValues = Array.from(selectedValues.value);
                                      (_a = _ctx.column) == null ? void 0 : _a.setFilterValue(
                                        filterValues.length ? filterValues : void 0
                                      );
                                    }
                                  }, {
                                    default: withCtx(() => {
                                      var _a;
                                      return [
                                        createVNode("div", {
                                          class: unref(cn)(
                                            "mr-2 flex h-4 w-4 items-center justify-center rounded-sm border border-primary",
                                            selectedValues.value.has(option.value) ? "bg-primary text-primary-foreground" : "opacity-50 [&_svg]:invisible"
                                          )
                                        }, [
                                          createVNode(unref(Check), {
                                            class: unref(cn)("h-4 w-4")
                                          }, null, 8, ["class"])
                                        ], 2),
                                        option.icon ? (openBlock(), createBlock(resolveDynamicComponent(option.icon), {
                                          key: 0,
                                          class: "mr-2 h-4 w-4 text-muted-foreground"
                                        })) : createCommentVNode("", true),
                                        createVNode("span", null, toDisplayString(option.label), 1),
                                        ((_a = facets.value) == null ? void 0 : _a.get(option.value)) ? (openBlock(), createBlock("span", {
                                          key: 1,
                                          class: "ml-auto flex h-4 w-4 items-center justify-center font-mono text-xs"
                                        }, toDisplayString(facets.value.get(option.value)), 1)) : createCommentVNode("", true)
                                      ];
                                    }),
                                    _: 2
                                  }, 1032, ["value", "onSelect"]);
                                }), 128))
                              ]),
                              _: 1
                            }),
                            selectedValues.value.size > 0 ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                              createVNode(_component_UiCommandSeparator),
                              createVNode(_component_UiCommandGroup, null, {
                                default: withCtx(() => [
                                  createVNode(_component_UiCommandItem, {
                                    value: { label: "\u041E\u0447\u0438\u0441\u0442\u0438\u0442\u044C" },
                                    class: "justify-center text-center",
                                    onSelect: ($event) => {
                                      var _a;
                                      return (_a = _ctx.column) == null ? void 0 : _a.setFilterValue(void 0);
                                    }
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(" \u041E\u0447\u0438\u0441\u0442\u0438\u0442\u044C ")
                                    ]),
                                    _: 1
                                  }, 8, ["onSelect"])
                                ]),
                                _: 1
                              })
                            ], 64)) : createCommentVNode("", true)
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }, 8, ["filter-function"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UiPopoverTrigger, { "as-child": "" }, {
                default: withCtx(() => [
                  createVNode(_component_UiButton, {
                    variant: "outline",
                    size: "sm",
                    class: "h-8 border-dashed"
                  }, {
                    default: withCtx(() => [
                      createVNode(unref(CirclePlus), { class: "mr-2 h-4 w-4" }),
                      createTextVNode(" " + toDisplayString(_ctx.title) + " ", 1),
                      selectedValues.value.size > 0 ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                        createVNode(_component_UiSeparator, {
                          orientation: "vertical",
                          class: "mx-2 h-4"
                        }),
                        createVNode(_component_UiBadge, {
                          variant: "secondary",
                          class: "rounded-sm px-1 font-normal lg:hidden"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(selectedValues.value.size), 1)
                          ]),
                          _: 1
                        }),
                        createVNode("div", { class: "hidden space-x-1 lg:flex" }, [
                          selectedValues.value.size > 0 ? (openBlock(), createBlock(_component_UiBadge, {
                            key: 0,
                            variant: "secondary",
                            class: "rounded-sm px-1 font-normal"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(selectedValues.value.size), 1)
                            ]),
                            _: 1
                          })) : (openBlock(true), createBlock(Fragment, { key: 1 }, renderList(_ctx.options.filter(
                            (option) => selectedValues.value.has(option.value)
                          ), (option) => {
                            return openBlock(), createBlock(_component_UiBadge, {
                              key: option.value,
                              variant: "secondary",
                              class: "rounded-sm px-1 font-normal"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(option.label), 1)
                              ]),
                              _: 2
                            }, 1024);
                          }), 128))
                        ])
                      ], 64)) : createCommentVNode("", true)
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(_component_UiPopoverContent, {
                class: "w-[250px] p-0",
                align: "start"
              }, {
                default: withCtx(() => [
                  createVNode(_component_UiCommand, {
                    "filter-function": (list, term) => list.filter((i) => {
                      var _a;
                      return (_a = i.label.toLowerCase()) == null ? void 0 : _a.includes(term);
                    })
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_UiCommandInput, { placeholder: _ctx.title }, null, 8, ["placeholder"]),
                      createVNode(_component_UiCommandList, null, {
                        default: withCtx(() => [
                          createVNode(_component_UiCommandEmpty, null, {
                            default: withCtx(() => [
                              createTextVNode("\u041D\u0435\u0442 \u0441\u043E\u0432\u043F\u0430\u0434\u0435\u043D\u0438\u0439.")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_UiCommandGroup, null, {
                            default: withCtx(() => [
                              (openBlock(true), createBlock(Fragment, null, renderList(_ctx.options, (option) => {
                                return openBlock(), createBlock(_component_UiCommandItem, {
                                  key: option.value,
                                  value: option,
                                  onSelect: (e) => {
                                    var _a;
                                    const isSelected = selectedValues.value.has(option.value);
                                    if (isSelected) {
                                      selectedValues.value.delete(option.value);
                                    } else {
                                      selectedValues.value.add(option.value);
                                    }
                                    const filterValues = Array.from(selectedValues.value);
                                    (_a = _ctx.column) == null ? void 0 : _a.setFilterValue(
                                      filterValues.length ? filterValues : void 0
                                    );
                                  }
                                }, {
                                  default: withCtx(() => {
                                    var _a;
                                    return [
                                      createVNode("div", {
                                        class: unref(cn)(
                                          "mr-2 flex h-4 w-4 items-center justify-center rounded-sm border border-primary",
                                          selectedValues.value.has(option.value) ? "bg-primary text-primary-foreground" : "opacity-50 [&_svg]:invisible"
                                        )
                                      }, [
                                        createVNode(unref(Check), {
                                          class: unref(cn)("h-4 w-4")
                                        }, null, 8, ["class"])
                                      ], 2),
                                      option.icon ? (openBlock(), createBlock(resolveDynamicComponent(option.icon), {
                                        key: 0,
                                        class: "mr-2 h-4 w-4 text-muted-foreground"
                                      })) : createCommentVNode("", true),
                                      createVNode("span", null, toDisplayString(option.label), 1),
                                      ((_a = facets.value) == null ? void 0 : _a.get(option.value)) ? (openBlock(), createBlock("span", {
                                        key: 1,
                                        class: "ml-auto flex h-4 w-4 items-center justify-center font-mono text-xs"
                                      }, toDisplayString(facets.value.get(option.value)), 1)) : createCommentVNode("", true)
                                    ];
                                  }),
                                  _: 2
                                }, 1032, ["value", "onSelect"]);
                              }), 128))
                            ]),
                            _: 1
                          }),
                          selectedValues.value.size > 0 ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                            createVNode(_component_UiCommandSeparator),
                            createVNode(_component_UiCommandGroup, null, {
                              default: withCtx(() => [
                                createVNode(_component_UiCommandItem, {
                                  value: { label: "\u041E\u0447\u0438\u0441\u0442\u0438\u0442\u044C" },
                                  class: "justify-center text-center",
                                  onSelect: ($event) => {
                                    var _a;
                                    return (_a = _ctx.column) == null ? void 0 : _a.setFilterValue(void 0);
                                  }
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" \u041E\u0447\u0438\u0441\u0442\u0438\u0442\u044C ")
                                  ]),
                                  _: 1
                                }, 8, ["onSelect"])
                              ]),
                              _: 1
                            })
                          ], 64)) : createCommentVNode("", true)
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }, 8, ["filter-function"])
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
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/my/supplies/DataTableFacetedFilter.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "DataTableToolbar",
  __ssrInlineRender: true,
  props: {
    table: {},
    filters: {}
  },
  setup(__props) {
    const props = __props;
    const isFiltered = computed(
      () => props.table.getState().columnFilters.length > 0
    );
    return (_ctx, _push, _parent, _attrs) => {
      const _component_MySuppliesDataTableFacetedFilter = _sfc_main$3;
      const _component_UiButton = _sfc_main$5;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex items-center justify-between" }, _attrs))}><div class="flex flex-1 items-center space-x-2">`);
      if (_ctx.table.getColumn("positions")) {
        _push(ssrRenderComponent(_component_MySuppliesDataTableFacetedFilter, {
          column: _ctx.table.getColumn("positions"),
          title: "\u041F\u043E\u0437\u0438\u0446\u0438\u0438",
          options: _ctx.filters.uniquePositions.map((p) => ({ label: p, value: p }))
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      if (_ctx.table.getColumn("positionsCat")) {
        _push(ssrRenderComponent(_component_MySuppliesDataTableFacetedFilter, {
          column: _ctx.table.getColumn("positionsCat"),
          title: "\u041A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u0438",
          options: _ctx.filters.uniqueCategories.map((p) => ({ label: p, value: p }))
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      if (_ctx.table.getColumn("supplier")) {
        _push(ssrRenderComponent(_component_MySuppliesDataTableFacetedFilter, {
          column: _ctx.table.getColumn("supplier"),
          title: "\u041F\u043E\u0441\u0442\u0430\u0432\u0449\u0438\u043A",
          options: _ctx.filters.uniqueSuppliers.map((p) => ({ label: p, value: p }))
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      if (isFiltered.value) {
        _push(ssrRenderComponent(_component_UiButton, {
          variant: "secondary",
          class: "h-8 px-2 lg:px-3",
          onClick: ($event) => _ctx.table.resetColumnFilters()
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` \u0421\u0431\u0440\u043E\u0441 `);
              _push2(ssrRenderComponent(unref(X), { class: "ml-2 h-4 w-4" }, null, _parent2, _scopeId));
            } else {
              return [
                createTextVNode(" \u0421\u0431\u0440\u043E\u0441 "),
                createVNode(unref(X), { class: "ml-2 h-4 w-4" })
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/my/supplies/DataTableToolbar.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "DataTable",
  __ssrInlineRender: true,
  props: {
    columns: {},
    data: {},
    filters: {}
  },
  emits: ["table-sorted", "item-clicked"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const sorting = ref([]);
    const columnFilters = ref([]);
    const columnVisibility = ref({});
    const table = useVueTable({
      get data() {
        return props.data;
      },
      get columns() {
        return props.columns;
      },
      getCoreRowModel: getCoreRowModel(),
      getSortedRowModel: getSortedRowModel(),
      getFilteredRowModel: getFilteredRowModel(),
      onSortingChange: (updaterOrValue) => valueUpdater(updaterOrValue, sorting),
      onColumnFiltersChange: (updaterOrValue) => valueUpdater(updaterOrValue, columnFilters),
      onColumnVisibilityChange: (updaterOrValue) => valueUpdater(updaterOrValue, columnVisibility),
      state: {
        get sorting() {
          return sorting.value;
        },
        get columnFilters() {
          return columnFilters.value;
        },
        get columnVisibility() {
          return columnVisibility.value;
        }
      }
    });
    const emit = __emit;
    const itemClick = (id) => {
      emit("item-clicked", id);
    };
    watch(
      () => table.getSortedRowModel().rows,
      (newSorting) => {
        const dealIds = newSorting.map((row) => row.original.id);
        emit("table-sorted", dealIds);
      },
      { deep: true }
    );
    return (_ctx, _push, _parent, _attrs) => {
      const _component_MySuppliesDataTableToolbar = _sfc_main$2;
      const _component_UiPopover = _sfc_main$2$3;
      const _component_UiPopoverTrigger = _sfc_main$1$2;
      const _component_UiButton = _sfc_main$5;
      const _component_UiPopoverContent = _sfc_main$f;
      const _component_UiCheckbox = _sfc_main$g;
      const _component_UiScrollArea = _sfc_main$d;
      const _component_UiTable = _sfc_main$5$2;
      const _component_UiTableHeader = _sfc_main$h;
      const _component_UiTableRow = _sfc_main$2$4;
      const _component_UiTableHead = _sfc_main$1$3;
      const _component_UiTableBody = _sfc_main$4$3;
      const _component_UiTableCell = _sfc_main$3$3;
      const _component_UiScrollBar = _sfc_main$1$4;
      _push(`<!--[--><div class="flex mb-2 justify-between"><div class="ml-[105px]">`);
      _push(ssrRenderComponent(_component_MySuppliesDataTableToolbar, {
        table: unref(table),
        filters: _ctx.filters
      }, null, _parent));
      _push(`</div><div>`);
      _push(ssrRenderComponent(_component_UiPopover, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UiPopoverTrigger, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UiButton, {
                    variant: "outline",
                    class: "ml-auto"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` \u041A\u043E\u043B\u043E\u043D\u043A\u0438 `);
                        _push4(ssrRenderComponent(unref(ChevronDown), { class: "w-4 h-4 ml-2" }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createTextVNode(" \u041A\u043E\u043B\u043E\u043D\u043A\u0438 "),
                          createVNode(unref(ChevronDown), { class: "w-4 h-4 ml-2" })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UiButton, {
                      variant: "outline",
                      class: "ml-auto"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" \u041A\u043E\u043B\u043E\u043D\u043A\u0438 "),
                        createVNode(unref(ChevronDown), { class: "w-4 h-4 ml-2" })
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UiPopoverContent, { class: "w-[180px]" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<!--[-->`);
                  ssrRenderList(unref(table).getAllColumns().filter((column) => column.getCanHide()), (column) => {
                    _push3(`<div${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_UiCheckbox, {
                      checked: column.getIsVisible(),
                      "onUpdate:checked": (value) => {
                        column.toggleVisibility(!!value);
                      }
                    }, null, _parent3, _scopeId2));
                    _push3(` ${ssrInterpolate(column.columnDef.ruName)}</div>`);
                  });
                  _push3(`<!--]-->`);
                } else {
                  return [
                    (openBlock(true), createBlock(Fragment, null, renderList(unref(table).getAllColumns().filter((column) => column.getCanHide()), (column) => {
                      return openBlock(), createBlock("div", {
                        key: column.id
                      }, [
                        createVNode(_component_UiCheckbox, {
                          checked: column.getIsVisible(),
                          "onUpdate:checked": (value) => {
                            column.toggleVisibility(!!value);
                          }
                        }, null, 8, ["checked", "onUpdate:checked"]),
                        createTextVNode(" " + toDisplayString(column.columnDef.ruName), 1)
                      ]);
                    }), 128))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UiPopoverTrigger, null, {
                default: withCtx(() => [
                  createVNode(_component_UiButton, {
                    variant: "outline",
                    class: "ml-auto"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" \u041A\u043E\u043B\u043E\u043D\u043A\u0438 "),
                      createVNode(unref(ChevronDown), { class: "w-4 h-4 ml-2" })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(_component_UiPopoverContent, { class: "w-[180px]" }, {
                default: withCtx(() => [
                  (openBlock(true), createBlock(Fragment, null, renderList(unref(table).getAllColumns().filter((column) => column.getCanHide()), (column) => {
                    return openBlock(), createBlock("div", {
                      key: column.id
                    }, [
                      createVNode(_component_UiCheckbox, {
                        checked: column.getIsVisible(),
                        "onUpdate:checked": (value) => {
                          column.toggleVisibility(!!value);
                        }
                      }, null, 8, ["checked", "onUpdate:checked"]),
                      createTextVNode(" " + toDisplayString(column.columnDef.ruName), 1)
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
      _push(`</div></div><div class="bg-slate-100 rounded-sm overflow-hidden">`);
      _push(ssrRenderComponent(_component_UiScrollArea, { class: "h-[calc(100vh-180px)]" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UiTable, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UiTableHeader, { class: "bg-white" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<!--[-->`);
                        ssrRenderList(unref(table).getHeaderGroups(), (headerGroup) => {
                          _push4(ssrRenderComponent(_component_UiTableRow, {
                            key: headerGroup.id,
                            class: ""
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`<!--[-->`);
                                ssrRenderList(headerGroup.headers, (header) => {
                                  _push5(ssrRenderComponent(_component_UiTableHead, {
                                    key: header.id
                                  }, {
                                    default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                      if (_push6) {
                                        if (!header.isPlaceholder) {
                                          _push6(ssrRenderComponent(unref(FlexRender), {
                                            render: header.column.columnDef.header,
                                            props: header.getContext()
                                          }, null, _parent6, _scopeId5));
                                        } else {
                                          _push6(`<!---->`);
                                        }
                                      } else {
                                        return [
                                          !header.isPlaceholder ? (openBlock(), createBlock(unref(FlexRender), {
                                            key: 0,
                                            render: header.column.columnDef.header,
                                            props: header.getContext()
                                          }, null, 8, ["render", "props"])) : createCommentVNode("", true)
                                        ];
                                      }
                                    }),
                                    _: 2
                                  }, _parent5, _scopeId4));
                                });
                                _push5(`<!--]-->`);
                              } else {
                                return [
                                  (openBlock(true), createBlock(Fragment, null, renderList(headerGroup.headers, (header) => {
                                    return openBlock(), createBlock(_component_UiTableHead, {
                                      key: header.id
                                    }, {
                                      default: withCtx(() => [
                                        !header.isPlaceholder ? (openBlock(), createBlock(unref(FlexRender), {
                                          key: 0,
                                          render: header.column.columnDef.header,
                                          props: header.getContext()
                                        }, null, 8, ["render", "props"])) : createCommentVNode("", true)
                                      ]),
                                      _: 2
                                    }, 1024);
                                  }), 128))
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                        });
                        _push4(`<!--]-->`);
                      } else {
                        return [
                          (openBlock(true), createBlock(Fragment, null, renderList(unref(table).getHeaderGroups(), (headerGroup) => {
                            return openBlock(), createBlock(_component_UiTableRow, {
                              key: headerGroup.id,
                              class: ""
                            }, {
                              default: withCtx(() => [
                                (openBlock(true), createBlock(Fragment, null, renderList(headerGroup.headers, (header) => {
                                  return openBlock(), createBlock(_component_UiTableHead, {
                                    key: header.id
                                  }, {
                                    default: withCtx(() => [
                                      !header.isPlaceholder ? (openBlock(), createBlock(unref(FlexRender), {
                                        key: 0,
                                        render: header.column.columnDef.header,
                                        props: header.getContext()
                                      }, null, 8, ["render", "props"])) : createCommentVNode("", true)
                                    ]),
                                    _: 2
                                  }, 1024);
                                }), 128))
                              ]),
                              _: 2
                            }, 1024);
                          }), 128))
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_UiTableBody, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      var _a, _b;
                      if (_push4) {
                        if ((_a = unref(table).getRowModel().rows) == null ? void 0 : _a.length) {
                          _push4(`<!--[-->`);
                          ssrRenderList(unref(table).getRowModel().rows, (row) => {
                            _push4(ssrRenderComponent(_component_UiTableRow, {
                              key: row.id,
                              "data-state": row.getIsSelected() ? "selected" : void 0,
                              class: [
                                "cursor-pointer",
                                row.original.orderStatus === "\u041E\u0442\u0433\u0440\u0443\u0436\u0435\u043D \u043D\u0430\u043C" ? "bg-green-500/40" : ""
                              ],
                              onClick: ($event) => itemClick(row.original.id)
                            }, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(`<!--[-->`);
                                  ssrRenderList(row.getVisibleCells(), (cell) => {
                                    _push5(ssrRenderComponent(_component_UiTableCell, {
                                      key: cell.id
                                    }, {
                                      default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                        if (_push6) {
                                          _push6(ssrRenderComponent(unref(FlexRender), {
                                            render: cell.column.columnDef.cell,
                                            props: cell.getContext()
                                          }, null, _parent6, _scopeId5));
                                        } else {
                                          return [
                                            createVNode(unref(FlexRender), {
                                              render: cell.column.columnDef.cell,
                                              props: cell.getContext()
                                            }, null, 8, ["render", "props"])
                                          ];
                                        }
                                      }),
                                      _: 2
                                    }, _parent5, _scopeId4));
                                  });
                                  _push5(`<!--]-->`);
                                } else {
                                  return [
                                    (openBlock(true), createBlock(Fragment, null, renderList(row.getVisibleCells(), (cell) => {
                                      return openBlock(), createBlock(_component_UiTableCell, {
                                        key: cell.id
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(unref(FlexRender), {
                                            render: cell.column.columnDef.cell,
                                            props: cell.getContext()
                                          }, null, 8, ["render", "props"])
                                        ]),
                                        _: 2
                                      }, 1024);
                                    }), 128))
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                          });
                          _push4(`<!--]-->`);
                        } else {
                          _push4(ssrRenderComponent(_component_UiTableRow, null, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(_component_UiTableCell, {
                                  colspan: _ctx.columns.length,
                                  class: "text-left"
                                }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(` \u041D\u0435\u0442 \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u043E\u0432. `);
                                    } else {
                                      return [
                                        createTextVNode(" \u041D\u0435\u0442 \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u043E\u0432. ")
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(_component_UiTableCell, {
                                    colspan: _ctx.columns.length,
                                    class: "text-left"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(" \u041D\u0435\u0442 \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u043E\u0432. ")
                                    ]),
                                    _: 1
                                  }, 8, ["colspan"])
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                        }
                      } else {
                        return [
                          ((_b = unref(table).getRowModel().rows) == null ? void 0 : _b.length) ? (openBlock(true), createBlock(Fragment, { key: 0 }, renderList(unref(table).getRowModel().rows, (row) => {
                            return openBlock(), createBlock(_component_UiTableRow, {
                              key: row.id,
                              "data-state": row.getIsSelected() ? "selected" : void 0,
                              class: [
                                "cursor-pointer",
                                row.original.orderStatus === "\u041E\u0442\u0433\u0440\u0443\u0436\u0435\u043D \u043D\u0430\u043C" ? "bg-green-500/40" : ""
                              ],
                              onClick: ($event) => itemClick(row.original.id)
                            }, {
                              default: withCtx(() => [
                                (openBlock(true), createBlock(Fragment, null, renderList(row.getVisibleCells(), (cell) => {
                                  return openBlock(), createBlock(_component_UiTableCell, {
                                    key: cell.id
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(unref(FlexRender), {
                                        render: cell.column.columnDef.cell,
                                        props: cell.getContext()
                                      }, null, 8, ["render", "props"])
                                    ]),
                                    _: 2
                                  }, 1024);
                                }), 128))
                              ]),
                              _: 2
                            }, 1032, ["data-state", "class", "onClick"]);
                          }), 128)) : (openBlock(), createBlock(_component_UiTableRow, { key: 1 }, {
                            default: withCtx(() => [
                              createVNode(_component_UiTableCell, {
                                colspan: _ctx.columns.length,
                                class: "text-left"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" \u041D\u0435\u0442 \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u043E\u0432. ")
                                ]),
                                _: 1
                              }, 8, ["colspan"])
                            ]),
                            _: 1
                          }))
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UiTableHeader, { class: "bg-white" }, {
                      default: withCtx(() => [
                        (openBlock(true), createBlock(Fragment, null, renderList(unref(table).getHeaderGroups(), (headerGroup) => {
                          return openBlock(), createBlock(_component_UiTableRow, {
                            key: headerGroup.id,
                            class: ""
                          }, {
                            default: withCtx(() => [
                              (openBlock(true), createBlock(Fragment, null, renderList(headerGroup.headers, (header) => {
                                return openBlock(), createBlock(_component_UiTableHead, {
                                  key: header.id
                                }, {
                                  default: withCtx(() => [
                                    !header.isPlaceholder ? (openBlock(), createBlock(unref(FlexRender), {
                                      key: 0,
                                      render: header.column.columnDef.header,
                                      props: header.getContext()
                                    }, null, 8, ["render", "props"])) : createCommentVNode("", true)
                                  ]),
                                  _: 2
                                }, 1024);
                              }), 128))
                            ]),
                            _: 2
                          }, 1024);
                        }), 128))
                      ]),
                      _: 1
                    }),
                    createVNode(_component_UiTableBody, null, {
                      default: withCtx(() => {
                        var _a;
                        return [
                          ((_a = unref(table).getRowModel().rows) == null ? void 0 : _a.length) ? (openBlock(true), createBlock(Fragment, { key: 0 }, renderList(unref(table).getRowModel().rows, (row) => {
                            return openBlock(), createBlock(_component_UiTableRow, {
                              key: row.id,
                              "data-state": row.getIsSelected() ? "selected" : void 0,
                              class: [
                                "cursor-pointer",
                                row.original.orderStatus === "\u041E\u0442\u0433\u0440\u0443\u0436\u0435\u043D \u043D\u0430\u043C" ? "bg-green-500/40" : ""
                              ],
                              onClick: ($event) => itemClick(row.original.id)
                            }, {
                              default: withCtx(() => [
                                (openBlock(true), createBlock(Fragment, null, renderList(row.getVisibleCells(), (cell) => {
                                  return openBlock(), createBlock(_component_UiTableCell, {
                                    key: cell.id
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(unref(FlexRender), {
                                        render: cell.column.columnDef.cell,
                                        props: cell.getContext()
                                      }, null, 8, ["render", "props"])
                                    ]),
                                    _: 2
                                  }, 1024);
                                }), 128))
                              ]),
                              _: 2
                            }, 1032, ["data-state", "class", "onClick"]);
                          }), 128)) : (openBlock(), createBlock(_component_UiTableRow, { key: 1 }, {
                            default: withCtx(() => [
                              createVNode(_component_UiTableCell, {
                                colspan: _ctx.columns.length,
                                class: "text-left"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" \u041D\u0435\u0442 \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u043E\u0432. ")
                                ]),
                                _: 1
                              }, 8, ["colspan"])
                            ]),
                            _: 1
                          }))
                        ];
                      }),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UiScrollBar, { orientation: "horizontal" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UiTable, null, {
                default: withCtx(() => [
                  createVNode(_component_UiTableHeader, { class: "bg-white" }, {
                    default: withCtx(() => [
                      (openBlock(true), createBlock(Fragment, null, renderList(unref(table).getHeaderGroups(), (headerGroup) => {
                        return openBlock(), createBlock(_component_UiTableRow, {
                          key: headerGroup.id,
                          class: ""
                        }, {
                          default: withCtx(() => [
                            (openBlock(true), createBlock(Fragment, null, renderList(headerGroup.headers, (header) => {
                              return openBlock(), createBlock(_component_UiTableHead, {
                                key: header.id
                              }, {
                                default: withCtx(() => [
                                  !header.isPlaceholder ? (openBlock(), createBlock(unref(FlexRender), {
                                    key: 0,
                                    render: header.column.columnDef.header,
                                    props: header.getContext()
                                  }, null, 8, ["render", "props"])) : createCommentVNode("", true)
                                ]),
                                _: 2
                              }, 1024);
                            }), 128))
                          ]),
                          _: 2
                        }, 1024);
                      }), 128))
                    ]),
                    _: 1
                  }),
                  createVNode(_component_UiTableBody, null, {
                    default: withCtx(() => {
                      var _a;
                      return [
                        ((_a = unref(table).getRowModel().rows) == null ? void 0 : _a.length) ? (openBlock(true), createBlock(Fragment, { key: 0 }, renderList(unref(table).getRowModel().rows, (row) => {
                          return openBlock(), createBlock(_component_UiTableRow, {
                            key: row.id,
                            "data-state": row.getIsSelected() ? "selected" : void 0,
                            class: [
                              "cursor-pointer",
                              row.original.orderStatus === "\u041E\u0442\u0433\u0440\u0443\u0436\u0435\u043D \u043D\u0430\u043C" ? "bg-green-500/40" : ""
                            ],
                            onClick: ($event) => itemClick(row.original.id)
                          }, {
                            default: withCtx(() => [
                              (openBlock(true), createBlock(Fragment, null, renderList(row.getVisibleCells(), (cell) => {
                                return openBlock(), createBlock(_component_UiTableCell, {
                                  key: cell.id
                                }, {
                                  default: withCtx(() => [
                                    createVNode(unref(FlexRender), {
                                      render: cell.column.columnDef.cell,
                                      props: cell.getContext()
                                    }, null, 8, ["render", "props"])
                                  ]),
                                  _: 2
                                }, 1024);
                              }), 128))
                            ]),
                            _: 2
                          }, 1032, ["data-state", "class", "onClick"]);
                        }), 128)) : (openBlock(), createBlock(_component_UiTableRow, { key: 1 }, {
                          default: withCtx(() => [
                            createVNode(_component_UiTableCell, {
                              colspan: _ctx.columns.length,
                              class: "text-left"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" \u041D\u0435\u0442 \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u043E\u0432. ")
                              ]),
                              _: 1
                            }, 8, ["colspan"])
                          ]),
                          _: 1
                        }))
                      ];
                    }),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(_component_UiScrollBar, { orientation: "horizontal" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><!--]-->`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/my/supplies/DataTable.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Edit",
  __ssrInlineRender: true,
  props: {
    supplie: {},
    suppliers: {},
    positionsList: {}
  },
  emits: ["supplie-updated"],
  setup(__props, { emit: __emit }) {
    const { $useApi } = useNuxtApp();
    const props = __props;
    const categories = ref([
      "\u041F\u043E\u043B\u0438\u043A\u0430\u0440\u0431\u043E\u043D\u0430\u0442",
      "\u041D\u0435\u043E\u043D",
      "\u0411\u043B\u043E\u043A\u0438 \u043F\u0438\u0442\u0430\u043D\u0438\u044F",
      "\u041F\u043B\u0435\u043D\u043A\u0438",
      "\u0410\u043A\u0440\u0438\u043B",
      "\u0423\u043F\u0430\u043A\u043E\u0432\u043A\u0430",
      "\u041A\u043E\u043C\u043F\u043B\u0435\u043A\u0442\u0443\u044E\u0449\u0438\u0435 \u0434\u043B\u044F \u0441\u0442\u0430\u043D\u043A\u043E\u0432",
      "\u041A\u043E\u043C\u043F\u043B\u0435\u043A\u0442\u0443\u044E\u0449\u0438\u0435 \u0434\u043B\u044F \u043C\u0430\u0441\u0442\u0435\u0440\u043E\u0432",
      "\u041A\u043E\u043C\u043F\u043B\u0435\u043A\u0442\u0443\u044E\u0449\u0438\u0435 \u0434\u043B\u044F \u0443\u043F\u0430\u043A\u043E\u0432\u043A\u0438",
      "\u0414\u0440\u0443\u0433\u043E\u0435"
    ]);
    const paymentMethods = ["\u0421\u0447\u0435\u0442", "\u041F\u0435\u0440\u0435\u0432\u043E\u0434", "\u041D\u0430\u043B\u0438\u0447\u043A\u0430"];
    const orderStatuses = ["\u041E\u0444\u043E\u0440\u043C\u043B\u0435\u043D \u0437\u0430\u043A\u0430\u0437", "\u0412 \u043F\u0443\u0442\u0438", "\u041E\u0442\u0433\u0440\u0443\u0436\u0435\u043D \u043D\u0430\u043C"];
    const paymentStatuses = ["\u041E\u043F\u043B\u0430\u0447\u0435\u043D", "\u041D\u0435 \u043E\u043F\u043B\u0430\u0447\u0435\u043D"];
    const deliveryMethods = [
      "\u0414\u043E\u0441\u0442\u0430\u0432\u043A\u0430 \u043E\u0442 \u043F\u043E\u0441\u0442\u0430\u0432\u0449\u0438\u043A\u0430",
      "\u0421\u0434\u0435\u043A",
      "\u0421\u0430\u043C\u043E\u0432\u044B\u0432\u043E\u0437",
      "\u041A\u0443\u0440\u044C\u0435\u0440\u0441\u043A\u0430\u044F \u0434\u043E\u0441\u0442\u0430\u0432\u043A\u0430",
      "\u041F\u042D\u041A",
      "\u0414\u0435\u043B\u043E\u0432\u044B\u0435 \u041B\u0438\u043D\u0438\u0438"
    ];
    const getBlankSupplies = () => ({
      date: (/* @__PURE__ */ new Date()).toISOString().slice(0, 10),
      shipmentDate: "",
      supplier: "",
      paymentMethod: paymentMethods[0],
      orderStatus: orderStatuses[0],
      paymentStatus: paymentStatuses[0],
      deliveryMethod: deliveryMethods[0],
      invoice: "",
      track: "",
      positions: [{ name: "", quantity: 1, priceForItem: 0, category: "" }]
    });
    const newSuppliesData = ref(
      props.supplie ? { ...props.supplie } : getBlankSupplies()
    );
    const disabled = ref(true);
    const addPosition = () => {
      newSuppliesData.value.positions.push({
        name: "",
        quantity: 1,
        priceForItem: 1,
        category: ""
      });
    };
    const removePosition = (index) => {
      if (newSuppliesData.value.positions.length > 1) {
        newSuppliesData.value.positions.splice(index, 1);
      }
    };
    const updateSupplieItem = async () => {
      var _a, _b;
      console.log((_a = props.supplie) == null ? void 0 : _a.id);
      if (!((_b = props.supplie) == null ? void 0 : _b.id)) return;
      await $useApi.patch(`supplies/${props.supplie.id}`, newSuppliesData.value);
      newSuppliesData.value = getBlankSupplies();
      emit("supplie-updated");
    };
    const deleteItem = async () => {
      await $useApi.delete(`supplies/${props.supplie.id}`);
      emit("supplie-updated");
    };
    const emit = __emit;
    watch(
      newSuppliesData,
      () => {
        const { date, supplier, positions } = newSuppliesData.value;
        disabled.value = !(date && supplier && positions.length > 0 && positions.every(
          (pos) => pos.name && pos.category && pos.quantity > 0 && pos.priceForItem >= 0
        ) && /^\d{4}-\d{2}-\d{2}$/.test(date));
      },
      { deep: true }
    );
    watch(
      () => props.supplie,
      (newSupplie) => {
      },
      { deep: true }
    );
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UiLabel = _sfc_main$8;
      const _component_UiInput = _sfc_main$9;
      const _component_MyCombobox = _sfc_main$a;
      const _component_UiSelect = _sfc_main$6$1;
      const _component_UiSelectTrigger = _sfc_main$4$2;
      const _component_UiSelectValue = _sfc_main$5$1;
      const _component_UiSelectContent = _sfc_main$3$2;
      const _component_UiSelectGroup = _sfc_main$b;
      const _component_UiSelectItem = _sfc_main$2$2;
      const _component_UiScrollArea = _sfc_main$d;
      const _component_UiButton = _sfc_main$5;
      _push(`<!--[--><div class="flex gap-5"><div class="flex flex-col gap-5 min-w-[350px]"><div class="flex gap-2"><div class="relative w-full">`);
      if (newSuppliesData.value.date) {
        _push(ssrRenderComponent(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`\u0414\u0430\u0442\u0430 \u0437\u0430\u043A\u0430\u0437\u0430`);
            } else {
              return [
                createTextVNode("\u0414\u0430\u0442\u0430 \u0437\u0430\u043A\u0430\u0437\u0430")
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(ssrRenderComponent(_component_UiInput, {
        modelValue: newSuppliesData.value.date,
        "onUpdate:modelValue": ($event) => newSuppliesData.value.date = $event,
        type: "date",
        placeholder: "\u0414\u0430\u0442\u0430",
        class: newSuppliesData.value.date ? "" : "outline outline-1 outline-rose-300"
      }, null, _parent));
      _push(`</div><div class="relative w-full">`);
      _push(ssrRenderComponent(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`\u0414\u0430\u0442\u0430 \u043E\u0442\u0433\u0440\u0443\u0437\u043A\u0438`);
          } else {
            return [
              createTextVNode("\u0414\u0430\u0442\u0430 \u043E\u0442\u0433\u0440\u0443\u0437\u043A\u0438")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_UiInput, {
        modelValue: newSuppliesData.value.shipmentDate,
        "onUpdate:modelValue": ($event) => newSuppliesData.value.shipmentDate = $event,
        type: "date",
        placeholder: "\u0414\u0430\u0442\u0430"
      }, null, _parent));
      _push(`</div></div><div class="relative">`);
      _push(ssrRenderComponent(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`\u041F\u043E\u0441\u0442\u0430\u0432\u0449\u0438\u043A (\u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u044F)`);
          } else {
            return [
              createTextVNode("\u041F\u043E\u0441\u0442\u0430\u0432\u0449\u0438\u043A (\u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u044F)")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_MyCombobox, {
        items: _ctx.suppliers,
        label: newSuppliesData.value.supplier,
        class: newSuppliesData.value.supplier ? "" : "outline-1 outline-rose-300 rounded-md",
        onSelectedItem: (value) => newSuppliesData.value.supplier = value
      }, null, _parent));
      _push(`</div><div class="relative w-full">`);
      _push(ssrRenderComponent(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`\u041A\u0430\u043A \u043E\u043F\u043B\u0430\u0442\u0438\u043B\u0438`);
          } else {
            return [
              createTextVNode("\u041A\u0430\u043A \u043E\u043F\u043B\u0430\u0442\u0438\u043B\u0438")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_UiSelect, {
        modelValue: newSuppliesData.value.paymentMethod,
        "onUpdate:modelValue": ($event) => newSuppliesData.value.paymentMethod = $event
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UiSelectTrigger, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UiSelectValue, {
                    placeholder: newSuppliesData.value.paymentMethod
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UiSelectValue, {
                      placeholder: newSuppliesData.value.paymentMethod
                    }, null, 8, ["placeholder"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UiSelectContent, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<!--[-->`);
                  ssrRenderList(paymentMethods, (item, i) => {
                    _push3(ssrRenderComponent(_component_UiSelectGroup, { key: i }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_UiSelectItem, { value: item }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`${ssrInterpolate(item)}`);
                              } else {
                                return [
                                  createTextVNode(toDisplayString(item), 1)
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(_component_UiSelectItem, { value: item }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(item), 1)
                              ]),
                              _: 2
                            }, 1032, ["value"])
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  });
                  _push3(`<!--]-->`);
                } else {
                  return [
                    (openBlock(), createBlock(Fragment, null, renderList(paymentMethods, (item, i) => {
                      return createVNode(_component_UiSelectGroup, { key: i }, {
                        default: withCtx(() => [
                          createVNode(_component_UiSelectItem, { value: item }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(item), 1)
                            ]),
                            _: 2
                          }, 1032, ["value"])
                        ]),
                        _: 2
                      }, 1024);
                    }), 64))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UiSelectTrigger, null, {
                default: withCtx(() => [
                  createVNode(_component_UiSelectValue, {
                    placeholder: newSuppliesData.value.paymentMethod
                  }, null, 8, ["placeholder"])
                ]),
                _: 1
              }),
              createVNode(_component_UiSelectContent, null, {
                default: withCtx(() => [
                  (openBlock(), createBlock(Fragment, null, renderList(paymentMethods, (item, i) => {
                    return createVNode(_component_UiSelectGroup, { key: i }, {
                      default: withCtx(() => [
                        createVNode(_component_UiSelectItem, { value: item }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(item), 1)
                          ]),
                          _: 2
                        }, 1032, ["value"])
                      ]),
                      _: 2
                    }, 1024);
                  }), 64))
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="relative w-full">`);
      _push(ssrRenderComponent(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`\u0421\u0442\u0430\u0442\u0443\u0441 \u0437\u0430\u043A\u0430\u0437\u0430`);
          } else {
            return [
              createTextVNode("\u0421\u0442\u0430\u0442\u0443\u0441 \u0437\u0430\u043A\u0430\u0437\u0430")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_UiSelect, {
        modelValue: newSuppliesData.value.orderStatus,
        "onUpdate:modelValue": ($event) => newSuppliesData.value.orderStatus = $event
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UiSelectTrigger, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UiSelectValue, {
                    placeholder: newSuppliesData.value.orderStatus
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UiSelectValue, {
                      placeholder: newSuppliesData.value.orderStatus
                    }, null, 8, ["placeholder"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UiSelectContent, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<!--[-->`);
                  ssrRenderList(orderStatuses, (item, i) => {
                    _push3(ssrRenderComponent(_component_UiSelectGroup, { key: i }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_UiSelectItem, { value: item }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`${ssrInterpolate(item)}`);
                              } else {
                                return [
                                  createTextVNode(toDisplayString(item), 1)
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(_component_UiSelectItem, { value: item }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(item), 1)
                              ]),
                              _: 2
                            }, 1032, ["value"])
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  });
                  _push3(`<!--]-->`);
                } else {
                  return [
                    (openBlock(), createBlock(Fragment, null, renderList(orderStatuses, (item, i) => {
                      return createVNode(_component_UiSelectGroup, { key: i }, {
                        default: withCtx(() => [
                          createVNode(_component_UiSelectItem, { value: item }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(item), 1)
                            ]),
                            _: 2
                          }, 1032, ["value"])
                        ]),
                        _: 2
                      }, 1024);
                    }), 64))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UiSelectTrigger, null, {
                default: withCtx(() => [
                  createVNode(_component_UiSelectValue, {
                    placeholder: newSuppliesData.value.orderStatus
                  }, null, 8, ["placeholder"])
                ]),
                _: 1
              }),
              createVNode(_component_UiSelectContent, null, {
                default: withCtx(() => [
                  (openBlock(), createBlock(Fragment, null, renderList(orderStatuses, (item, i) => {
                    return createVNode(_component_UiSelectGroup, { key: i }, {
                      default: withCtx(() => [
                        createVNode(_component_UiSelectItem, { value: item }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(item), 1)
                          ]),
                          _: 2
                        }, 1032, ["value"])
                      ]),
                      _: 2
                    }, 1024);
                  }), 64))
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="relative w-full">`);
      _push(ssrRenderComponent(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`\u0421\u0442\u0430\u0442\u0443\u0441 \u043E\u043F\u043B\u0430\u0442\u044B`);
          } else {
            return [
              createTextVNode("\u0421\u0442\u0430\u0442\u0443\u0441 \u043E\u043F\u043B\u0430\u0442\u044B")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_UiSelect, {
        modelValue: newSuppliesData.value.paymentStatus,
        "onUpdate:modelValue": ($event) => newSuppliesData.value.paymentStatus = $event
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UiSelectTrigger, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UiSelectValue, {
                    placeholder: newSuppliesData.value.paymentStatus
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UiSelectValue, {
                      placeholder: newSuppliesData.value.paymentStatus
                    }, null, 8, ["placeholder"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UiSelectContent, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<!--[-->`);
                  ssrRenderList(paymentStatuses, (item, i) => {
                    _push3(ssrRenderComponent(_component_UiSelectGroup, { key: i }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_UiSelectItem, { value: item }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`${ssrInterpolate(item)}`);
                              } else {
                                return [
                                  createTextVNode(toDisplayString(item), 1)
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(_component_UiSelectItem, { value: item }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(item), 1)
                              ]),
                              _: 2
                            }, 1032, ["value"])
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  });
                  _push3(`<!--]-->`);
                } else {
                  return [
                    (openBlock(), createBlock(Fragment, null, renderList(paymentStatuses, (item, i) => {
                      return createVNode(_component_UiSelectGroup, { key: i }, {
                        default: withCtx(() => [
                          createVNode(_component_UiSelectItem, { value: item }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(item), 1)
                            ]),
                            _: 2
                          }, 1032, ["value"])
                        ]),
                        _: 2
                      }, 1024);
                    }), 64))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UiSelectTrigger, null, {
                default: withCtx(() => [
                  createVNode(_component_UiSelectValue, {
                    placeholder: newSuppliesData.value.paymentStatus
                  }, null, 8, ["placeholder"])
                ]),
                _: 1
              }),
              createVNode(_component_UiSelectContent, null, {
                default: withCtx(() => [
                  (openBlock(), createBlock(Fragment, null, renderList(paymentStatuses, (item, i) => {
                    return createVNode(_component_UiSelectGroup, { key: i }, {
                      default: withCtx(() => [
                        createVNode(_component_UiSelectItem, { value: item }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(item), 1)
                          ]),
                          _: 2
                        }, 1032, ["value"])
                      ]),
                      _: 2
                    }, 1024);
                  }), 64))
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="relative w-full">`);
      _push(ssrRenderComponent(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`\u0421\u043F\u043E\u0441\u043E\u0431 \u0434\u043E\u0441\u0442\u0430\u0432\u043A\u0438`);
          } else {
            return [
              createTextVNode("\u0421\u043F\u043E\u0441\u043E\u0431 \u0434\u043E\u0441\u0442\u0430\u0432\u043A\u0438")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_UiSelect, {
        modelValue: newSuppliesData.value.deliveryMethod,
        "onUpdate:modelValue": ($event) => newSuppliesData.value.deliveryMethod = $event
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UiSelectTrigger, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UiSelectValue, {
                    placeholder: newSuppliesData.value.deliveryMethod
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UiSelectValue, {
                      placeholder: newSuppliesData.value.deliveryMethod
                    }, null, 8, ["placeholder"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UiSelectContent, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<!--[-->`);
                  ssrRenderList(deliveryMethods, (item, i) => {
                    _push3(ssrRenderComponent(_component_UiSelectGroup, { key: i }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_UiSelectItem, { value: item }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`${ssrInterpolate(item)}`);
                              } else {
                                return [
                                  createTextVNode(toDisplayString(item), 1)
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(_component_UiSelectItem, { value: item }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(item), 1)
                              ]),
                              _: 2
                            }, 1032, ["value"])
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  });
                  _push3(`<!--]-->`);
                } else {
                  return [
                    (openBlock(), createBlock(Fragment, null, renderList(deliveryMethods, (item, i) => {
                      return createVNode(_component_UiSelectGroup, { key: i }, {
                        default: withCtx(() => [
                          createVNode(_component_UiSelectItem, { value: item }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(item), 1)
                            ]),
                            _: 2
                          }, 1032, ["value"])
                        ]),
                        _: 2
                      }, 1024);
                    }), 64))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UiSelectTrigger, null, {
                default: withCtx(() => [
                  createVNode(_component_UiSelectValue, {
                    placeholder: newSuppliesData.value.deliveryMethod
                  }, null, 8, ["placeholder"])
                ]),
                _: 1
              }),
              createVNode(_component_UiSelectContent, null, {
                default: withCtx(() => [
                  (openBlock(), createBlock(Fragment, null, renderList(deliveryMethods, (item, i) => {
                    return createVNode(_component_UiSelectGroup, { key: i }, {
                      default: withCtx(() => [
                        createVNode(_component_UiSelectItem, { value: item }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(item), 1)
                          ]),
                          _: 2
                        }, 1032, ["value"])
                      ]),
                      _: 2
                    }, 1024);
                  }), 64))
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="relative">`);
      if (newSuppliesData.value.invoice) {
        _push(ssrRenderComponent(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`\u041D\u043E\u043C\u0435\u0440 \u0441\u0447\u0435\u0442\u0430`);
            } else {
              return [
                createTextVNode("\u041D\u043E\u043C\u0435\u0440 \u0441\u0447\u0435\u0442\u0430")
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(ssrRenderComponent(_component_UiInput, {
        modelValue: newSuppliesData.value.invoice,
        "onUpdate:modelValue": ($event) => newSuppliesData.value.invoice = $event,
        placeholder: "\u041D\u043E\u043C\u0435\u0440 \u0441\u0447\u0435\u0442\u0430"
      }, null, _parent));
      _push(`</div><div class="relative">`);
      if (newSuppliesData.value.track) {
        _push(ssrRenderComponent(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`\u0422\u0440\u0435\u043A`);
            } else {
              return [
                createTextVNode("\u0422\u0440\u0435\u043A")
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(ssrRenderComponent(_component_UiInput, {
        modelValue: newSuppliesData.value.track,
        "onUpdate:modelValue": ($event) => newSuppliesData.value.track = $event,
        placeholder: "\u0422\u0440\u0435\u043A"
      }, null, _parent));
      _push(`</div></div><div class="flex flex-col grow"><div class="w-[full] grow">`);
      _push(ssrRenderComponent(_component_UiScrollArea, { class: "h-[460px]" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex flex-col gap-5 p-2"${_scopeId}><!--[-->`);
            ssrRenderList(newSuppliesData.value.positions, (position, index) => {
              _push2(`<div class="flex gap-2 items-center"${_scopeId}><div class="relative w-full"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`\u041F\u043E\u0437\u0438\u0446\u0438\u044F`);
                  } else {
                    return [
                      createTextVNode("\u041F\u043E\u0437\u0438\u0446\u0438\u044F")
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_MyCombobox, {
                items: _ctx.positionsList.map((item) => item.name),
                label: position.name,
                class: [
                  position.name ? "" : "outline-1 outline-rose-300 rounded-md "
                ],
                onSelectedItem: (value) => {
                  position.name = value;
                  const selectedPosition = _ctx.positionsList.find(
                    (item) => item.name === value
                  );
                  position.category = selectedPosition ? selectedPosition.category : "";
                }
              }, null, _parent2, _scopeId));
              _push2(`</div><div class="relative min-w-[100px] w-[100px]"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`\u041A\u043E\u043B-\u0432\u043E`);
                  } else {
                    return [
                      createTextVNode("\u041A\u043E\u043B-\u0432\u043E")
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_UiInput, {
                modelValue: position.quantity,
                "onUpdate:modelValue": ($event) => position.quantity = $event,
                modelModifiers: { number: true },
                type: "number",
                placeholder: "\u041A\u043E\u043B-\u0432\u043E",
                class: [
                  position.quantity > 0 ? "" : "outline-1 outline-rose-300"
                ]
              }, null, _parent2, _scopeId));
              _push2(`</div><div class="relative min-w-[100px] w-[100px]"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`\u0426\u0435\u043D\u0430 \u0437\u0430 \u0435\u0434.`);
                  } else {
                    return [
                      createTextVNode("\u0426\u0435\u043D\u0430 \u0437\u0430 \u0435\u0434.")
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_UiInput, {
                modelValue: position.priceForItem,
                "onUpdate:modelValue": ($event) => position.priceForItem = $event,
                modelModifiers: { number: true },
                type: "number",
                placeholder: "\u0426\u0435\u043D\u0430 \u0437\u0430 \u0435\u0434.",
                class: [
                  position.priceForItem > 0 ? "" : "outline-1 outline-rose-300"
                ]
              }, null, _parent2, _scopeId));
              _push2(`</div><div class="relative min-w-[150px] w-[150px]"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`\u041A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u044F`);
                  } else {
                    return [
                      createTextVNode("\u041A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u044F")
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(`<div${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UiSelect, {
                modelValue: position.category,
                "onUpdate:modelValue": ($event) => position.category = $event
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_UiSelectTrigger, {
                      class: position.category ? "" : "outline-1 outline-rose-300 "
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_UiSelectValue, {
                            placeholder: position.category
                          }, null, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(_component_UiSelectValue, {
                              placeholder: position.category
                            }, null, 8, ["placeholder"])
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_component_UiSelectContent, null, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<!--[-->`);
                          ssrRenderList(categories.value, (item, i) => {
                            _push4(ssrRenderComponent(_component_UiSelectGroup, { key: i }, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(ssrRenderComponent(_component_UiSelectItem, { value: item }, {
                                    default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                      if (_push6) {
                                        _push6(`${ssrInterpolate(item)}`);
                                      } else {
                                        return [
                                          createTextVNode(toDisplayString(item), 1)
                                        ];
                                      }
                                    }),
                                    _: 2
                                  }, _parent5, _scopeId4));
                                } else {
                                  return [
                                    createVNode(_component_UiSelectItem, { value: item }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(item), 1)
                                      ]),
                                      _: 2
                                    }, 1032, ["value"])
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                          });
                          _push4(`<!--]-->`);
                        } else {
                          return [
                            (openBlock(true), createBlock(Fragment, null, renderList(categories.value, (item, i) => {
                              return openBlock(), createBlock(_component_UiSelectGroup, { key: i }, {
                                default: withCtx(() => [
                                  createVNode(_component_UiSelectItem, { value: item }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(item), 1)
                                    ]),
                                    _: 2
                                  }, 1032, ["value"])
                                ]),
                                _: 2
                              }, 1024);
                            }), 128))
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_UiSelectTrigger, {
                        class: position.category ? "" : "outline-1 outline-rose-300 "
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_UiSelectValue, {
                            placeholder: position.category
                          }, null, 8, ["placeholder"])
                        ]),
                        _: 2
                      }, 1032, ["class"]),
                      createVNode(_component_UiSelectContent, null, {
                        default: withCtx(() => [
                          (openBlock(true), createBlock(Fragment, null, renderList(categories.value, (item, i) => {
                            return openBlock(), createBlock(_component_UiSelectGroup, { key: i }, {
                              default: withCtx(() => [
                                createVNode(_component_UiSelectItem, { value: item }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(item), 1)
                                  ]),
                                  _: 2
                                }, 1032, ["value"])
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
                _: 2
              }, _parent2, _scopeId));
              _push2(`</div></div>`);
              if (newSuppliesData.value.positions.length > 1) {
                _push2(ssrRenderComponent(_component_UiButton, {
                  variant: "destructive",
                  onClick: ($event) => removePosition(index)
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(` \u0425 `);
                    } else {
                      return [
                        createTextVNode(" \u0425 ")
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div>`);
            });
            _push2(`<!--]--></div>`);
          } else {
            return [
              createVNode("div", { class: "flex flex-col gap-5 p-2" }, [
                (openBlock(true), createBlock(Fragment, null, renderList(newSuppliesData.value.positions, (position, index) => {
                  return openBlock(), createBlock("div", {
                    key: index,
                    class: "flex gap-2 items-center"
                  }, [
                    createVNode("div", { class: "relative w-full" }, [
                      createVNode(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap" }, {
                        default: withCtx(() => [
                          createTextVNode("\u041F\u043E\u0437\u0438\u0446\u0438\u044F")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_MyCombobox, {
                        items: _ctx.positionsList.map((item) => item.name),
                        label: position.name,
                        class: [
                          position.name ? "" : "outline-1 outline-rose-300 rounded-md "
                        ],
                        onSelectedItem: (value) => {
                          position.name = value;
                          const selectedPosition = _ctx.positionsList.find(
                            (item) => item.name === value
                          );
                          position.category = selectedPosition ? selectedPosition.category : "";
                        }
                      }, null, 8, ["items", "label", "class", "onSelectedItem"])
                    ]),
                    createVNode("div", { class: "relative min-w-[100px] w-[100px]" }, [
                      createVNode(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap" }, {
                        default: withCtx(() => [
                          createTextVNode("\u041A\u043E\u043B-\u0432\u043E")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_UiInput, {
                        modelValue: position.quantity,
                        "onUpdate:modelValue": ($event) => position.quantity = $event,
                        modelModifiers: { number: true },
                        type: "number",
                        placeholder: "\u041A\u043E\u043B-\u0432\u043E",
                        class: [
                          position.quantity > 0 ? "" : "outline-1 outline-rose-300"
                        ]
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "class"])
                    ]),
                    createVNode("div", { class: "relative min-w-[100px] w-[100px]" }, [
                      createVNode(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap" }, {
                        default: withCtx(() => [
                          createTextVNode("\u0426\u0435\u043D\u0430 \u0437\u0430 \u0435\u0434.")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_UiInput, {
                        modelValue: position.priceForItem,
                        "onUpdate:modelValue": ($event) => position.priceForItem = $event,
                        modelModifiers: { number: true },
                        type: "number",
                        placeholder: "\u0426\u0435\u043D\u0430 \u0437\u0430 \u0435\u0434.",
                        class: [
                          position.priceForItem > 0 ? "" : "outline-1 outline-rose-300"
                        ]
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "class"])
                    ]),
                    createVNode("div", { class: "relative min-w-[150px] w-[150px]" }, [
                      createVNode(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap" }, {
                        default: withCtx(() => [
                          createTextVNode("\u041A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u044F")
                        ]),
                        _: 1
                      }),
                      createVNode("div", null, [
                        createVNode(_component_UiSelect, {
                          modelValue: position.category,
                          "onUpdate:modelValue": ($event) => position.category = $event
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_UiSelectTrigger, {
                              class: position.category ? "" : "outline-1 outline-rose-300 "
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_UiSelectValue, {
                                  placeholder: position.category
                                }, null, 8, ["placeholder"])
                              ]),
                              _: 2
                            }, 1032, ["class"]),
                            createVNode(_component_UiSelectContent, null, {
                              default: withCtx(() => [
                                (openBlock(true), createBlock(Fragment, null, renderList(categories.value, (item, i) => {
                                  return openBlock(), createBlock(_component_UiSelectGroup, { key: i }, {
                                    default: withCtx(() => [
                                      createVNode(_component_UiSelectItem, { value: item }, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(item), 1)
                                        ]),
                                        _: 2
                                      }, 1032, ["value"])
                                    ]),
                                    _: 2
                                  }, 1024);
                                }), 128))
                              ]),
                              _: 1
                            })
                          ]),
                          _: 2
                        }, 1032, ["modelValue", "onUpdate:modelValue"])
                      ])
                    ]),
                    newSuppliesData.value.positions.length > 1 ? (openBlock(), createBlock(_component_UiButton, {
                      key: 0,
                      variant: "destructive",
                      onClick: ($event) => removePosition(index)
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" \u0425 ")
                      ]),
                      _: 2
                    }, 1032, ["onClick"])) : createCommentVNode("", true)
                  ]);
                }), 128))
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_component_UiButton, {
        variant: "outline",
        onClick: addPosition
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u043F\u043E\u0437\u0438\u0446\u0438\u044E`);
          } else {
            return [
              createTextVNode("\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u043F\u043E\u0437\u0438\u0446\u0438\u044E")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class="flex justify-between w-full gap-2">`);
      _push(ssrRenderComponent(_component_UiButton, {
        class: "",
        onClick: deleteItem
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` \u0423\u0434\u0430\u043B\u0438\u0442\u044C `);
          } else {
            return [
              createTextVNode(" \u0423\u0434\u0430\u043B\u0438\u0442\u044C ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_UiButton, {
        disabled: disabled.value,
        class: "",
        onClick: updateSupplieItem
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` \u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C `);
          } else {
            return [
              createTextVNode(" \u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/my/supplies/Edit.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const suppliesColumns = [
  // Колонка для даты заказа
  {
    accessorKey: "date",
    ruName: "\u0414\u0430\u0442\u0430 \u0437\u0430\u043A\u0430\u0437\u0430",
    header: ({ column }) => {
      return h(
        _sfc_main$5,
        {
          variant: "ghost",
          onClick: () => column.toggleSorting(column.getIsSorted() === "asc"),
          class: "text-center h-full w-full p-0"
        },
        () => ["\u0414\u0430\u0442\u0430 \u0437\u0430\u043A\u0430\u0437\u0430", h(ArrowUpDown, { class: "ml-2 h-4 w-4" })]
      );
    },
    cell: ({ row }) => {
      const date = row.getValue("date");
      const formateDate = new Date(date).toLocaleDateString();
      const shipmentDate = row.getValue("shipmentDate");
      new Date(shipmentDate).toLocaleDateString();
      return h("div", { class: "text-center flex flex-col" }, [
        h("span", formateDate === "Invalid Date" ? "-" : formateDate)
        // h("span", formateShipmentDate === "Invalid Date" ? "-" : formateShipmentDate),
      ]);
    }
  },
  // Колонка для даты отгрузки
  {
    accessorKey: "shipmentDate",
    ruName: "\u0414\u0430\u0442\u0430 \u043E\u0442\u0433\u0440\u0443\u0437\u043A\u0438",
    header: ({ column }) => {
      return h(
        _sfc_main$5,
        {
          variant: "ghost",
          onClick: () => column.toggleSorting(column.getIsSorted() === "asc"),
          class: "text-center h-full w-full text-wrap p-0"
        },
        () => ["\u0414\u0430\u0442\u0430 \u043E\u0442\u0433\u0440\u0443\u0437\u043A\u0438", h(ArrowUpDown, { class: "ml-2 h-4 w-4" })]
      );
    },
    cell: ({ row }) => {
      const date = row.getValue("shipmentDate");
      const formateDate = new Date(date).toLocaleDateString();
      return h(
        "div",
        { class: "text-center" },
        formateDate === "Invalid Date" ? "-" : formateDate
      );
    }
  },
  // Колонка для категории
  // {
  //   accessorKey: 'category',
  //   ruName: 'Категория',
  //   header: ({ column }) => {
  //     return h(
  //       Button,
  //       {
  //         variant: 'ghost',
  //         onClick: () => column.toggleSorting(column.getIsSorted() === 'asc'),
  //         class: 'text-center h-full w-full',
  //       },
  //       () => ['Категория', h(ArrowUpDown, { class: 'ml-2 h-4 w-4' })]
  //     );
  //   },
  //   cell: ({ row }) =>
  //     h('div', { class: 'text-center' }, row.getValue('category')),
  //   filterFn: (row, id, value) => {
  //     return value.includes(row.getValue(id));
  //   },
  // },
  // Колонка для позиций
  {
    accessorKey: "positions",
    ruName: "\u0421\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C",
    header: ({ column }) => {
      return h(
        _sfc_main$5,
        {
          variant: "ghost",
          onClick: () => column.toggleSorting(column.getIsSorted() === "asc"),
          class: "text-center h-full w-full p-0"
        },
        () => ["\u0421\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C", h(ArrowUpDown, { class: "ml-2 h-4 w-4" })]
      );
    },
    cell: ({ row }) => {
      const positions = row.getValue("positions");
      const totalPrice = positions.reduce(
        (sum, pos) => sum + pos.quantity * pos.priceForItem,
        0
      );
      return h("div", { class: "text-center flex flex-col" }, [
        h("span", { class: "font-semibold text-grey-500" }, `${useMyFormatPrice(+totalPrice.toFixed(2))}\u20BD`),
        h("span", { class: "text-xs" }, `${positions.length} \u043F\u043E\u0437.`)
      ]);
    },
    sortingFn: (rowA, rowB, columnId) => {
      const positionsA = rowA.getValue(columnId);
      const positionsB = rowB.getValue(columnId);
      const totalPriceA = positionsA.reduce(
        (sum, pos) => sum + pos.quantity * pos.priceForItem,
        0
      );
      const totalPriceB = positionsB.reduce(
        (sum, pos) => sum + pos.quantity * pos.priceForItem,
        0
      );
      return totalPriceA - totalPriceB;
    },
    filterFn: (row, id, value) => {
      const positions = row.getValue("positions");
      return positions.some((pos) => Object.values(value).includes(pos.name));
    }
  },
  // categ
  {
    accessorKey: "positionsCat",
    ruName: "\u041F\u043E\u0437\u0438\u0446\u0438\u0438",
    enableHiding: false,
    header: ({ column }) => {
      return h("div", { class: "text-center p-0 hidden" });
    },
    cell: ({ row }) => {
      return h("div", { class: "text-center p-0 hidden" });
    },
    filterFn: (row, id, value) => {
      const positions = row.getValue("positions");
      return positions.some((pos) => Object.values(value).includes(pos.category));
    }
  },
  // Колонка для поставщика
  {
    accessorKey: "supplier",
    ruName: "\u041F\u043E\u0441\u0442\u0430\u0432\u0449\u0438\u043A",
    header: ({ column }) => {
      return h(
        _sfc_main$5,
        {
          variant: "ghost",
          onClick: () => column.toggleSorting(column.getIsSorted() === "asc"),
          class: "text-center h-full w-full p-0"
        },
        () => ["\u041F\u043E\u0441\u0442\u0430\u0432\u0449\u0438\u043A", h(ArrowUpDown, { class: "ml-2 h-4 w-4" })]
      );
    },
    cell: ({ row }) => h("div", { class: "text-center" }, row.getValue("supplier")),
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    }
  },
  // Колонка для способа оплаты
  {
    accessorKey: "paymentMethod",
    ruName: "\u0421\u043F\u043E\u0441\u043E\u0431 \u043E\u043F\u043B\u0430\u0442\u044B",
    header: ({ column }) => {
      return h(
        _sfc_main$5,
        {
          variant: "ghost",
          onClick: () => column.toggleSorting(column.getIsSorted() === "asc"),
          class: "text-center h-full w-full text-wrap p-0"
        },
        () => ["\u0421\u043F\u043E\u0441\u043E\u0431 \u043E\u043F\u043B\u0430\u0442\u044B", h(ArrowUpDown, { class: "ml-2 h-4 w-4" })]
      );
    },
    cell: ({ row }) => h("div", { class: "text-center" }, row.getValue("paymentMethod")),
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    }
  },
  // Колонка для статуса заказа
  {
    accessorKey: "orderStatus",
    ruName: "\u0421\u0442\u0430\u0442\u0443\u0441 \u0437\u0430\u043A\u0430\u0437\u0430",
    header: ({ column }) => {
      return h(
        _sfc_main$5,
        {
          variant: "ghost",
          onClick: () => column.toggleSorting(column.getIsSorted() === "asc"),
          class: "text-center h-full w-full p-0"
        },
        () => ["\u0421\u0442\u0430\u0442\u0443\u0441 \u0437\u0430\u043A\u0430\u0437\u0430", h(ArrowUpDown, { class: "ml-2 h-4 w-4" })]
      );
    },
    cell: ({ row }) => h(
      "div",
      {
        class: ["text-center"]
      },
      row.getValue("orderStatus")
    ),
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    }
  },
  // Колонка для статуса оплаты
  {
    accessorKey: "paymentStatus",
    ruName: "\u0421\u0442\u0430\u0442\u0443\u0441 \u043E\u043F\u043B\u0430\u0442\u044B",
    header: ({ column }) => {
      return h(
        _sfc_main$5,
        {
          variant: "ghost",
          onClick: () => column.toggleSorting(column.getIsSorted() === "asc"),
          class: "text-center h-full w-full text-wrap p-0"
        },
        () => ["\u0421\u0442\u0430\u0442\u0443\u0441 \u043E\u043F\u043B\u0430\u0442\u044B", h(ArrowUpDown, { class: "ml-2 h-4 w-4" })]
      );
    },
    cell: ({ row }) => h(
      "div",
      {
        class: [
          "text-center",
          // console.log(row.original.paymentStatus),
          row.original.paymentStatus === "\u041E\u043F\u043B\u0430\u0447\u0435\u043D" ? "bg-green-500/50 rounded-sm" : ""
        ]
      },
      row.getValue("paymentStatus")
    ),
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    }
  },
  // Колонка для способа доставки
  {
    accessorKey: "deliveryMethod",
    ruName: "\u0421\u043F\u043E\u0441\u043E\u0431 \u0434\u043E\u0441\u0442\u0430\u0432\u043A\u0438",
    header: ({ column }) => {
      return h(
        _sfc_main$5,
        {
          variant: "ghost",
          onClick: () => column.toggleSorting(column.getIsSorted() === "asc"),
          class: "text-center h-full w-full text-wrap p-0"
        },
        () => ["\u0421\u043F\u043E\u0441\u043E\u0431 \u0434\u043E\u0441\u0442\u0430\u0432\u043A\u0438", h(ArrowUpDown, { class: "ml-2 h-4 w-4" })]
      );
    },
    cell: ({ row }) => h(
      "div",
      {
        class: ["text-center text-wrap"]
      },
      row.getValue("deliveryMethod")
    ),
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    }
  },
  // Колонка для номера счета
  {
    accessorKey: "invoice",
    ruName: "\u0421\u0447\u0435\u0442",
    header: ({ column }) => {
      return h(
        _sfc_main$5,
        {
          variant: "ghost",
          onClick: () => column.toggleSorting(column.getIsSorted() === "asc"),
          class: "text-center h-full w-full p-0"
        },
        () => ["\u0421\u0447\u0435\u0442", h(ArrowUpDown, { class: "ml-2 h-4 w-4" })]
      );
    },
    cell: ({ row }) => h(
      "div",
      { class: "text-center text-wrap min-w-[100px]" },
      row.getValue("invoice") || "-"
    )
  },
  // Колонка для трек-номера
  {
    accessorKey: "track",
    ruName: "\u0422\u0440\u0435\u043A-\u043D\u043E\u043C\u0435\u0440",
    header: ({ column }) => {
      return h(
        _sfc_main$5,
        {
          variant: "ghost",
          onClick: () => column.toggleSorting(column.getIsSorted() === "asc"),
          class: "text-center h-full w-full p-0"
        },
        () => ["\u0422\u0440\u0435\u043A-\u043D\u043E\u043C\u0435\u0440", h(ArrowUpDown, { class: "ml-2 h-4 w-4" })]
      );
    },
    cell: ({ row }) => h("div", { class: "text-center" }, row.getValue("track") || "-")
  }
];

export { _sfc_main$4 as _, _sfc_main$1 as a, _sfc_main as b, suppliesColumns as s };
//# sourceMappingURL=table.columns-DVAKx_kR.mjs.map
