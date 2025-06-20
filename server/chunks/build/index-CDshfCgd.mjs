import { _ as _sfc_main$9 } from './Sidebar-BTa0LtrE.mjs';
import { _ as _sfc_main$2$1, a as _sfc_main$a, b as _sfc_main$1$1 } from './TabsList-P1PqxA-H.mjs';
import { _ as _sfc_main$b } from './TabsContent-DOjyLxAt.mjs';
import { _ as _sfc_main$4$2, a as _sfc_main$3$3, b as _sfc_main$i, c as _sfc_main$2$4, d as _sfc_main$1$5 } from './DialogContent-Cpdz0S5M.mjs';
import { _ as _sfc_main$k } from './DialogFooter--i0s9obd.mjs';
import { _ as _sfc_main$h } from './index-BASHn9g0.mjs';
import { _ as _sfc_main$j } from './Label-DWRrr4Tu.mjs';
import { _ as _sfc_main$g } from './Input-aD0e3Jyr.mjs';
import { defineComponent, mergeProps, withCtx, createTextVNode, createVNode, ref, unref, toDisplayString, createBlock, openBlock, Fragment, renderList, h, isRef, watch, computed, createCommentVNode, resolveDynamicComponent, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderClass, ssrRenderVNode } from 'vue/server-renderer';
import { a as useNuxtApp, h as useToast } from './server.mjs';
import { _ as _sfc_main$3$1, a as _sfc_main$2$2, c as _sfc_main$1$2, b as _sfc_main$c } from './CardDescription-BVNRvBA-.mjs';
import { _ as _sfc_main$1$3, a as _sfc_main$e } from './CardFooter-sUoQfSp2.mjs';
import { _ as _sfc_main$5$1, a as _sfc_main$d, b as _sfc_main$2$3, c as _sfc_main$1$4, d as _sfc_main$4$1, e as _sfc_main$3$2 } from './TableHeader-Ia1Xb6zs.mjs';
import { _ as _sfc_main$f } from './DateRangePicker-BxmmMoUS.mjs';
import { _ as _sfc_main$2$5, a as _sfc_main$1$6, b as _sfc_main$l } from './PopoverContent-DK_Eb2xq.mjs';
import { _ as _sfc_main$n } from './Separator-D2Jy4Ik6.mjs';
import { _ as _sfc_main$o } from './index-BQiwPa8s.mjs';
import { _ as _sfc_main$3$4, a as _sfc_main$q, b as _sfc_main$2$6, c as _sfc_main$1$7 } from './CommandList-DjJI8hex.mjs';
import { _ as _sfc_main$r } from './CommandEmpty-SsRO_myv.mjs';
import { _ as _sfc_main$p } from './CommandInput-DwuuHdro.mjs';
import { _ as _sfc_main$s } from './CommandSeparator-BpQQqUh4.mjs';
import { v as valueUpdater, c as cn } from './isLoading-D2o5w2su.mjs';
import { ChevronDown, ArrowUpDown, X, CirclePlus, Check } from 'lucide-vue-next';
import { _ as _sfc_main$m } from './Checkbox-DpA8KJc_.mjs';
import { useVueTable, getFilteredRowModel, getSortedRowModel, getCoreRowModel, FlexRender } from '@tanstack/vue-table';
import { d as dateFormat } from './useMyDateFormat-Cn1Jsliy.mjs';
import { u as useHead } from './v3-BEwgjOp-.mjs';
import 'radix-vue';
import 'class-variance-authority';
import '@vueuse/core';
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
import 'reka-ui';
import '@internationalized/date';
import 'clsx';
import 'tailwind-merge';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import 'unhead/plugins';

const _sfc_main$8 = /* @__PURE__ */ defineComponent({
  __name: "AccountsCreateModal",
  __ssrInlineRender: true,
  emits: ["account-created"],
  setup(__props, { emit: __emit }) {
    const { $useApi } = useNuxtApp();
    const isOpen = ref(false);
    const errorMessage = ref(null);
    const isLoading = ref(false);
    const disabled = ref(true);
    const newAccountBlank = {
      name: "",
      accountNumber: "",
      balance: 0,
      balanceStartDate: "",
      isReal: false
    };
    const newAccount = ref({ ...newAccountBlank });
    const emit = __emit;
    const createAccount = async () => {
      var _a, _b;
      isLoading.value = true;
      errorMessage.value = null;
      try {
        await $useApi.post("planfact/accounts", newAccount.value);
        isOpen.value = false;
        emit("account-created");
      } catch (error) {
        const message = ((_b = (_a = error.response) == null ? void 0 : _a.data) == null ? void 0 : _b.message) || "\u041E\u0448\u0438\u0431\u043A\u0430 \u043F\u0440\u0438 \u0441\u043E\u0437\u0434\u0430\u043D\u0438\u0438 \u043E\u0442\u0437\u044B\u0432\u0430";
        errorMessage.value = message.message;
      } finally {
        isLoading.value = false;
      }
    };
    watch(
      [newAccount],
      () => {
        const { name, accountNumber, balance, balanceStartDate } = newAccount.value;
        disabled.value = !(name && accountNumber && balance && balanceStartDate);
      },
      { deep: true }
    );
    watch(isOpen, (newValue) => {
      if (!newValue) {
        newAccount.value = { ...newAccountBlank };
        errorMessage.value = null;
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UiDialog = _sfc_main$4$2;
      const _component_UiDialogTrigger = _sfc_main$3$3;
      const _component_UiButton = _sfc_main$h;
      const _component_UiDialogContent = _sfc_main$i;
      const _component_UiDialogHeader = _sfc_main$2$4;
      const _component_UiDialogTitle = _sfc_main$1$5;
      const _component_UiLabel = _sfc_main$j;
      const _component_UiInput = _sfc_main$g;
      const _component_UiDialogFooter = _sfc_main$k;
      _push(ssrRenderComponent(_component_UiDialog, mergeProps({
        open: unref(isOpen),
        "onUpdate:open": ($event) => isRef(isOpen) ? isOpen.value = $event : null
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UiDialogTrigger, { "as-child": "" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UiButton, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`\u0421\u043E\u0437\u0434\u0430\u0442\u044C \u0441\u0447\u0435\u0442`);
                      } else {
                        return [
                          createTextVNode("\u0421\u043E\u0437\u0434\u0430\u0442\u044C \u0441\u0447\u0435\u0442")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UiButton, null, {
                      default: withCtx(() => [
                        createTextVNode("\u0421\u043E\u0437\u0434\u0430\u0442\u044C \u0441\u0447\u0435\u0442")
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UiDialogContent, { class: "max-w-[400px] flex flex-col" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UiDialogHeader, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_UiDialogTitle, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`\u0421\u043E\u0437\u0434\u0430\u043D\u0438\u0435 \u0441\u0447\u0435\u0442\u0430 `);
                            } else {
                              return [
                                createTextVNode("\u0421\u043E\u0437\u0434\u0430\u043D\u0438\u0435 \u0441\u0447\u0435\u0442\u0430 ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_UiDialogTitle, null, {
                            default: withCtx(() => [
                              createTextVNode("\u0421\u043E\u0437\u0434\u0430\u043D\u0438\u0435 \u0441\u0447\u0435\u0442\u0430 ")
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`<div class="flex flex-col gap-6 mt-2"${_scopeId2}><div class="relative"${_scopeId2}>`);
                  if (unref(newAccount).name) {
                    _push3(ssrRenderComponent(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(` \u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 `);
                        } else {
                          return [
                            createTextVNode(" \u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 ")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(ssrRenderComponent(_component_UiInput, {
                    modelValue: unref(newAccount).name,
                    "onUpdate:modelValue": ($event) => unref(newAccount).name = $event,
                    placeholder: "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435. \u041D\u0430\u043F\u0440\u0438\u043C\u0435\u0440 \u0422\u0411\u0430\u043D\u043A",
                    class: unref(newAccount).name ? "" : "outline outline-1 outline-rose-300"
                  }, null, _parent3, _scopeId2));
                  _push3(`</div><div class="relative"${_scopeId2}>`);
                  if (unref(newAccount).accountNumber) {
                    _push3(ssrRenderComponent(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(` \u041D\u043E\u043C\u0435\u0440 \u0441\u0447\u0435\u0442\u0430 `);
                        } else {
                          return [
                            createTextVNode(" \u041D\u043E\u043C\u0435\u0440 \u0441\u0447\u0435\u0442\u0430 ")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(ssrRenderComponent(_component_UiInput, {
                    modelValue: unref(newAccount).accountNumber,
                    "onUpdate:modelValue": ($event) => unref(newAccount).accountNumber = $event,
                    placeholder: "\u041D\u043E\u043C\u0435\u0440 \u0441\u0447\u0435\u0442\u0430",
                    class: unref(newAccount).accountNumber ? "" : "outline outline-1 outline-rose-300"
                  }, null, _parent3, _scopeId2));
                  _push3(`</div><div class="relative"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` \u041D\u0430\u0447\u0430\u043B\u044C\u043D\u044B\u0439 \u043E\u0441\u0442\u0430\u0442\u043E\u043A `);
                      } else {
                        return [
                          createTextVNode(" \u041D\u0430\u0447\u0430\u043B\u044C\u043D\u044B\u0439 \u043E\u0441\u0442\u0430\u0442\u043E\u043A ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_UiInput, {
                    modelValue: unref(newAccount).balance,
                    "onUpdate:modelValue": ($event) => unref(newAccount).balance = $event,
                    type: "number",
                    placeholder: "\u041D\u0430\u0447\u0430\u043B\u044C\u043D\u044B\u0439 \u043E\u0441\u0442\u0430\u0442\u043E\u043A",
                    class: unref(newAccount).balance ? "" : "outline outline-1 outline-rose-300"
                  }, null, _parent3, _scopeId2));
                  _push3(`</div><div class="relative"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` \u0414\u0430\u0442\u0430 \u043D\u0430\u0447\u0430\u043B\u044C\u043D\u043E\u0433\u043E \u043E\u0441\u0442\u0430\u0442\u043A\u0430 `);
                      } else {
                        return [
                          createTextVNode(" \u0414\u0430\u0442\u0430 \u043D\u0430\u0447\u0430\u043B\u044C\u043D\u043E\u0433\u043E \u043E\u0441\u0442\u0430\u0442\u043A\u0430 ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_UiInput, {
                    modelValue: unref(newAccount).balanceStartDate,
                    "onUpdate:modelValue": ($event) => unref(newAccount).balanceStartDate = $event,
                    type: "date",
                    placeholder: "\u0414\u0430\u0442\u0430 \u043D\u0430\u0447\u0430\u043B\u044C\u043D\u043E\u0433\u043E \u043E\u0441\u0442\u0430\u0442\u043A\u0430",
                    class: unref(newAccount).balanceStartDate ? "" : "outline outline-1 outline-rose-300"
                  }, null, _parent3, _scopeId2));
                  _push3(`</div></div>`);
                  if (unref(errorMessage)) {
                    _push3(`<div class="text-red-500 text-sm"${_scopeId2}>${ssrInterpolate(unref(errorMessage))}</div>`);
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(ssrRenderComponent(_component_UiDialogFooter, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_UiButton, {
                          disabled: unref(disabled) || unref(isLoading),
                          onClick: createAccount
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              if (unref(isLoading)) {
                                _push5(`<span${_scopeId4}>\u0421\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u0438\u0435...</span>`);
                              } else {
                                _push5(`<span${_scopeId4}>\u0421\u043E\u0437\u0434\u0430\u0442\u044C</span>`);
                              }
                            } else {
                              return [
                                unref(isLoading) ? (openBlock(), createBlock("span", { key: 0 }, "\u0421\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u0438\u0435...")) : (openBlock(), createBlock("span", { key: 1 }, "\u0421\u043E\u0437\u0434\u0430\u0442\u044C"))
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_UiButton, {
                            disabled: unref(disabled) || unref(isLoading),
                            onClick: createAccount
                          }, {
                            default: withCtx(() => [
                              unref(isLoading) ? (openBlock(), createBlock("span", { key: 0 }, "\u0421\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u0438\u0435...")) : (openBlock(), createBlock("span", { key: 1 }, "\u0421\u043E\u0437\u0434\u0430\u0442\u044C"))
                            ]),
                            _: 1
                          }, 8, ["disabled"])
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
                            createTextVNode("\u0421\u043E\u0437\u0434\u0430\u043D\u0438\u0435 \u0441\u0447\u0435\u0442\u0430 ")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode("div", { class: "flex flex-col gap-6 mt-2" }, [
                      createVNode("div", { class: "relative" }, [
                        unref(newAccount).name ? (openBlock(), createBlock(_component_UiLabel, {
                          key: 0,
                          class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" \u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 ")
                          ]),
                          _: 1
                        })) : createCommentVNode("", true),
                        createVNode(_component_UiInput, {
                          modelValue: unref(newAccount).name,
                          "onUpdate:modelValue": ($event) => unref(newAccount).name = $event,
                          placeholder: "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435. \u041D\u0430\u043F\u0440\u0438\u043C\u0435\u0440 \u0422\u0411\u0430\u043D\u043A",
                          class: unref(newAccount).name ? "" : "outline outline-1 outline-rose-300"
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "class"])
                      ]),
                      createVNode("div", { class: "relative" }, [
                        unref(newAccount).accountNumber ? (openBlock(), createBlock(_component_UiLabel, {
                          key: 0,
                          class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" \u041D\u043E\u043C\u0435\u0440 \u0441\u0447\u0435\u0442\u0430 ")
                          ]),
                          _: 1
                        })) : createCommentVNode("", true),
                        createVNode(_component_UiInput, {
                          modelValue: unref(newAccount).accountNumber,
                          "onUpdate:modelValue": ($event) => unref(newAccount).accountNumber = $event,
                          placeholder: "\u041D\u043E\u043C\u0435\u0440 \u0441\u0447\u0435\u0442\u0430",
                          class: unref(newAccount).accountNumber ? "" : "outline outline-1 outline-rose-300"
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "class"])
                      ]),
                      createVNode("div", { class: "relative" }, [
                        createVNode(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap" }, {
                          default: withCtx(() => [
                            createTextVNode(" \u041D\u0430\u0447\u0430\u043B\u044C\u043D\u044B\u0439 \u043E\u0441\u0442\u0430\u0442\u043E\u043A ")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_UiInput, {
                          modelValue: unref(newAccount).balance,
                          "onUpdate:modelValue": ($event) => unref(newAccount).balance = $event,
                          type: "number",
                          placeholder: "\u041D\u0430\u0447\u0430\u043B\u044C\u043D\u044B\u0439 \u043E\u0441\u0442\u0430\u0442\u043E\u043A",
                          class: unref(newAccount).balance ? "" : "outline outline-1 outline-rose-300"
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "class"])
                      ]),
                      createVNode("div", { class: "relative" }, [
                        createVNode(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap" }, {
                          default: withCtx(() => [
                            createTextVNode(" \u0414\u0430\u0442\u0430 \u043D\u0430\u0447\u0430\u043B\u044C\u043D\u043E\u0433\u043E \u043E\u0441\u0442\u0430\u0442\u043A\u0430 ")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_UiInput, {
                          modelValue: unref(newAccount).balanceStartDate,
                          "onUpdate:modelValue": ($event) => unref(newAccount).balanceStartDate = $event,
                          type: "date",
                          placeholder: "\u0414\u0430\u0442\u0430 \u043D\u0430\u0447\u0430\u043B\u044C\u043D\u043E\u0433\u043E \u043E\u0441\u0442\u0430\u0442\u043A\u0430",
                          class: unref(newAccount).balanceStartDate ? "" : "outline outline-1 outline-rose-300"
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "class"])
                      ])
                    ]),
                    unref(errorMessage) ? (openBlock(), createBlock("div", {
                      key: 0,
                      class: "text-red-500 text-sm"
                    }, toDisplayString(unref(errorMessage)), 1)) : createCommentVNode("", true),
                    createVNode(_component_UiDialogFooter, null, {
                      default: withCtx(() => [
                        createVNode(_component_UiButton, {
                          disabled: unref(disabled) || unref(isLoading),
                          onClick: createAccount
                        }, {
                          default: withCtx(() => [
                            unref(isLoading) ? (openBlock(), createBlock("span", { key: 0 }, "\u0421\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u0438\u0435...")) : (openBlock(), createBlock("span", { key: 1 }, "\u0421\u043E\u0437\u0434\u0430\u0442\u044C"))
                          ]),
                          _: 1
                        }, 8, ["disabled"])
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
                      createTextVNode("\u0421\u043E\u0437\u0434\u0430\u0442\u044C \u0441\u0447\u0435\u0442")
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(_component_UiDialogContent, { class: "max-w-[400px] flex flex-col" }, {
                default: withCtx(() => [
                  createVNode(_component_UiDialogHeader, null, {
                    default: withCtx(() => [
                      createVNode(_component_UiDialogTitle, null, {
                        default: withCtx(() => [
                          createTextVNode("\u0421\u043E\u0437\u0434\u0430\u043D\u0438\u0435 \u0441\u0447\u0435\u0442\u0430 ")
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode("div", { class: "flex flex-col gap-6 mt-2" }, [
                    createVNode("div", { class: "relative" }, [
                      unref(newAccount).name ? (openBlock(), createBlock(_component_UiLabel, {
                        key: 0,
                        class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" \u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 ")
                        ]),
                        _: 1
                      })) : createCommentVNode("", true),
                      createVNode(_component_UiInput, {
                        modelValue: unref(newAccount).name,
                        "onUpdate:modelValue": ($event) => unref(newAccount).name = $event,
                        placeholder: "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435. \u041D\u0430\u043F\u0440\u0438\u043C\u0435\u0440 \u0422\u0411\u0430\u043D\u043A",
                        class: unref(newAccount).name ? "" : "outline outline-1 outline-rose-300"
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "class"])
                    ]),
                    createVNode("div", { class: "relative" }, [
                      unref(newAccount).accountNumber ? (openBlock(), createBlock(_component_UiLabel, {
                        key: 0,
                        class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" \u041D\u043E\u043C\u0435\u0440 \u0441\u0447\u0435\u0442\u0430 ")
                        ]),
                        _: 1
                      })) : createCommentVNode("", true),
                      createVNode(_component_UiInput, {
                        modelValue: unref(newAccount).accountNumber,
                        "onUpdate:modelValue": ($event) => unref(newAccount).accountNumber = $event,
                        placeholder: "\u041D\u043E\u043C\u0435\u0440 \u0441\u0447\u0435\u0442\u0430",
                        class: unref(newAccount).accountNumber ? "" : "outline outline-1 outline-rose-300"
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "class"])
                    ]),
                    createVNode("div", { class: "relative" }, [
                      createVNode(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap" }, {
                        default: withCtx(() => [
                          createTextVNode(" \u041D\u0430\u0447\u0430\u043B\u044C\u043D\u044B\u0439 \u043E\u0441\u0442\u0430\u0442\u043E\u043A ")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_UiInput, {
                        modelValue: unref(newAccount).balance,
                        "onUpdate:modelValue": ($event) => unref(newAccount).balance = $event,
                        type: "number",
                        placeholder: "\u041D\u0430\u0447\u0430\u043B\u044C\u043D\u044B\u0439 \u043E\u0441\u0442\u0430\u0442\u043E\u043A",
                        class: unref(newAccount).balance ? "" : "outline outline-1 outline-rose-300"
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "class"])
                    ]),
                    createVNode("div", { class: "relative" }, [
                      createVNode(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap" }, {
                        default: withCtx(() => [
                          createTextVNode(" \u0414\u0430\u0442\u0430 \u043D\u0430\u0447\u0430\u043B\u044C\u043D\u043E\u0433\u043E \u043E\u0441\u0442\u0430\u0442\u043A\u0430 ")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_UiInput, {
                        modelValue: unref(newAccount).balanceStartDate,
                        "onUpdate:modelValue": ($event) => unref(newAccount).balanceStartDate = $event,
                        type: "date",
                        placeholder: "\u0414\u0430\u0442\u0430 \u043D\u0430\u0447\u0430\u043B\u044C\u043D\u043E\u0433\u043E \u043E\u0441\u0442\u0430\u0442\u043A\u0430",
                        class: unref(newAccount).balanceStartDate ? "" : "outline outline-1 outline-rose-300"
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "class"])
                    ])
                  ]),
                  unref(errorMessage) ? (openBlock(), createBlock("div", {
                    key: 0,
                    class: "text-red-500 text-sm"
                  }, toDisplayString(unref(errorMessage)), 1)) : createCommentVNode("", true),
                  createVNode(_component_UiDialogFooter, null, {
                    default: withCtx(() => [
                      createVNode(_component_UiButton, {
                        disabled: unref(disabled) || unref(isLoading),
                        onClick: createAccount
                      }, {
                        default: withCtx(() => [
                          unref(isLoading) ? (openBlock(), createBlock("span", { key: 0 }, "\u0421\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u0438\u0435...")) : (openBlock(), createBlock("span", { key: 1 }, "\u0421\u043E\u0437\u0434\u0430\u0442\u044C"))
                        ]),
                        _: 1
                      }, 8, ["disabled"])
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
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/my/planfact/AccountsCreateModal.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  __name: "Accounts",
  __ssrInlineRender: true,
  setup(__props) {
    const { $useApi } = useNuxtApp();
    const accountsData = ref([
      {
        name: "",
        accountNumber: "",
        balance: 0,
        comment: "",
        isReal: false
      }
    ]);
    const getAccountsDatas = async () => {
      const { data } = await $useApi.get("planfact/accounts", {});
      accountsData.value = data;
      console.log(data);
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_MyPlanfactAccountsCreateModal = _sfc_main$8;
      const _component_UiCard = _sfc_main$3$1;
      const _component_UiCardHeader = _sfc_main$2$2;
      const _component_UiCardTitle = _sfc_main$1$2;
      const _component_UiCardDescription = _sfc_main$c;
      const _component_UiCardContent = _sfc_main$1$3;
      const _component_UiTable = _sfc_main$5$1;
      const _component_UiTableHeader = _sfc_main$d;
      const _component_UiTableRow = _sfc_main$2$3;
      const _component_UiTableHead = _sfc_main$1$4;
      const _component_UiTableBody = _sfc_main$4$1;
      const _component_UiTableCell = _sfc_main$3$2;
      const _component_UiCardFooter = _sfc_main$e;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_MyPlanfactAccountsCreateModal, { onAccountCreated: getAccountsDatas }, null, _parent));
      _push(`<div class="grow mt-2">`);
      _push(ssrRenderComponent(_component_UiCard, { class: "h-full" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UiCardHeader, { class: "pb-0" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UiCardTitle, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`\u0421\u0447\u0435\u0442\u0430`);
                      } else {
                        return [
                          createTextVNode("\u0421\u0447\u0435\u0442\u0430")
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
                        createTextVNode("\u0421\u0447\u0435\u0442\u0430")
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
                                          _push7(`\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435`);
                                        } else {
                                          return [
                                            createTextVNode("\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(_component_UiTableHead, { class: "text-right" }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`\u0411\u0430\u043B\u0430\u043D\u0441`);
                                        } else {
                                          return [
                                            createTextVNode("\u0411\u0430\u043B\u0430\u043D\u0441")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(_component_UiTableHead, { class: "text-right" }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`\u0420\u0435\u043A\u0432\u0438\u0437\u0438\u0442\u044B`);
                                        } else {
                                          return [
                                            createTextVNode("\u0420\u0435\u043A\u0432\u0438\u0437\u0438\u0442\u044B")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_UiTableHead, { class: "text-left" }, {
                                        default: withCtx(() => [
                                          createTextVNode("\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_UiTableHead, { class: "text-right" }, {
                                        default: withCtx(() => [
                                          createTextVNode("\u0411\u0430\u043B\u0430\u043D\u0441")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_UiTableHead, { class: "text-right" }, {
                                        default: withCtx(() => [
                                          createTextVNode("\u0420\u0435\u043A\u0432\u0438\u0437\u0438\u0442\u044B")
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
                                        createTextVNode("\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_UiTableHead, { class: "text-right" }, {
                                      default: withCtx(() => [
                                        createTextVNode("\u0411\u0430\u043B\u0430\u043D\u0441")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_UiTableHead, { class: "text-right" }, {
                                      default: withCtx(() => [
                                        createTextVNode("\u0420\u0435\u043A\u0432\u0438\u0437\u0438\u0442\u044B")
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
                              ssrRenderList(unref(accountsData), (account, i) => {
                                _push5(ssrRenderComponent(_component_UiTableRow, {
                                  key: account.accountNumber
                                }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(ssrRenderComponent(_component_UiTableCell, { class: "font-medium whitespace-nowrap" }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`${ssrInterpolate(i + 1 + ". " + account.name)}`);
                                          } else {
                                            return [
                                              createTextVNode(toDisplayString(i + 1 + ". " + account.name), 1)
                                            ];
                                          }
                                        }),
                                        _: 2
                                      }, _parent6, _scopeId5));
                                      _push6(ssrRenderComponent(_component_UiTableCell, { class: "text-right" }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`${ssrInterpolate(account.balance.toLocaleString() + "\u20BD")}`);
                                          } else {
                                            return [
                                              createTextVNode(toDisplayString(account.balance.toLocaleString() + "\u20BD"), 1)
                                            ];
                                          }
                                        }),
                                        _: 2
                                      }, _parent6, _scopeId5));
                                      _push6(ssrRenderComponent(_component_UiTableCell, { class: "text-right" }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`${ssrInterpolate(account.accountNumber)}`);
                                          } else {
                                            return [
                                              createTextVNode(toDisplayString(account.accountNumber), 1)
                                            ];
                                          }
                                        }),
                                        _: 2
                                      }, _parent6, _scopeId5));
                                    } else {
                                      return [
                                        createVNode(_component_UiTableCell, { class: "font-medium whitespace-nowrap" }, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(i + 1 + ". " + account.name), 1)
                                          ]),
                                          _: 2
                                        }, 1024),
                                        createVNode(_component_UiTableCell, { class: "text-right" }, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(account.balance.toLocaleString() + "\u20BD"), 1)
                                          ]),
                                          _: 2
                                        }, 1024),
                                        createVNode(_component_UiTableCell, { class: "text-right" }, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(account.accountNumber), 1)
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
                                (openBlock(true), createBlock(Fragment, null, renderList(unref(accountsData), (account, i) => {
                                  return openBlock(), createBlock(_component_UiTableRow, {
                                    key: account.accountNumber
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_UiTableCell, { class: "font-medium whitespace-nowrap" }, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(i + 1 + ". " + account.name), 1)
                                        ]),
                                        _: 2
                                      }, 1024),
                                      createVNode(_component_UiTableCell, { class: "text-right" }, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(account.balance.toLocaleString() + "\u20BD"), 1)
                                        ]),
                                        _: 2
                                      }, 1024),
                                      createVNode(_component_UiTableCell, { class: "text-right" }, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(account.accountNumber), 1)
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
                                      createTextVNode("\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_UiTableHead, { class: "text-right" }, {
                                    default: withCtx(() => [
                                      createTextVNode("\u0411\u0430\u043B\u0430\u043D\u0441")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_UiTableHead, { class: "text-right" }, {
                                    default: withCtx(() => [
                                      createTextVNode("\u0420\u0435\u043A\u0432\u0438\u0437\u0438\u0442\u044B")
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
                              (openBlock(true), createBlock(Fragment, null, renderList(unref(accountsData), (account, i) => {
                                return openBlock(), createBlock(_component_UiTableRow, {
                                  key: account.accountNumber
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_UiTableCell, { class: "font-medium whitespace-nowrap" }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(i + 1 + ". " + account.name), 1)
                                      ]),
                                      _: 2
                                    }, 1024),
                                    createVNode(_component_UiTableCell, { class: "text-right" }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(account.balance.toLocaleString() + "\u20BD"), 1)
                                      ]),
                                      _: 2
                                    }, 1024),
                                    createVNode(_component_UiTableCell, { class: "text-right" }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(account.accountNumber), 1)
                                      ]),
                                      _: 2
                                    }, 1024)
                                  ]),
                                  _: 2
                                }, 1024);
                              }), 128))
                            ]),
                            _: 2
                          }, 1024)
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
                                    createTextVNode("\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_UiTableHead, { class: "text-right" }, {
                                  default: withCtx(() => [
                                    createTextVNode("\u0411\u0430\u043B\u0430\u043D\u0441")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_UiTableHead, { class: "text-right" }, {
                                  default: withCtx(() => [
                                    createTextVNode("\u0420\u0435\u043A\u0432\u0438\u0437\u0438\u0442\u044B")
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
                            (openBlock(true), createBlock(Fragment, null, renderList(unref(accountsData), (account, i) => {
                              return openBlock(), createBlock(_component_UiTableRow, {
                                key: account.accountNumber
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_UiTableCell, { class: "font-medium whitespace-nowrap" }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(i + 1 + ". " + account.name), 1)
                                    ]),
                                    _: 2
                                  }, 1024),
                                  createVNode(_component_UiTableCell, { class: "text-right" }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(account.balance.toLocaleString() + "\u20BD"), 1)
                                    ]),
                                    _: 2
                                  }, 1024),
                                  createVNode(_component_UiTableCell, { class: "text-right" }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(account.accountNumber), 1)
                                    ]),
                                    _: 2
                                  }, 1024)
                                ]),
                                _: 2
                              }, 1024);
                            }), 128))
                          ]),
                          _: 2
                        }, 1024)
                      ]),
                      _: 2
                    }, 1024)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UiCardFooter, { class: "p-0" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UiCardHeader, { class: "pb-0" }, {
                default: withCtx(() => [
                  createVNode(_component_UiCardTitle, null, {
                    default: withCtx(() => [
                      createTextVNode("\u0421\u0447\u0435\u0442\u0430")
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
                                  createTextVNode("\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_UiTableHead, { class: "text-right" }, {
                                default: withCtx(() => [
                                  createTextVNode("\u0411\u0430\u043B\u0430\u043D\u0441")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_UiTableHead, { class: "text-right" }, {
                                default: withCtx(() => [
                                  createTextVNode("\u0420\u0435\u043A\u0432\u0438\u0437\u0438\u0442\u044B")
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
                          (openBlock(true), createBlock(Fragment, null, renderList(unref(accountsData), (account, i) => {
                            return openBlock(), createBlock(_component_UiTableRow, {
                              key: account.accountNumber
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_UiTableCell, { class: "font-medium whitespace-nowrap" }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(i + 1 + ". " + account.name), 1)
                                  ]),
                                  _: 2
                                }, 1024),
                                createVNode(_component_UiTableCell, { class: "text-right" }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(account.balance.toLocaleString() + "\u20BD"), 1)
                                  ]),
                                  _: 2
                                }, 1024),
                                createVNode(_component_UiTableCell, { class: "text-right" }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(account.accountNumber), 1)
                                  ]),
                                  _: 2
                                }, 1024)
                              ]),
                              _: 2
                            }, 1024);
                          }), 128))
                        ]),
                        _: 2
                      }, 1024)
                    ]),
                    _: 2
                  }, 1024)
                ]),
                _: 2
              }, 1024),
              createVNode(_component_UiCardFooter, { class: "p-0" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/my/planfact/Accounts.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
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
      const _component_UiPopover = _sfc_main$2$5;
      const _component_UiPopoverTrigger = _sfc_main$1$6;
      const _component_UiButton = _sfc_main$h;
      const _component_UiSeparator = _sfc_main$n;
      const _component_UiBadge = _sfc_main$o;
      const _component_UiPopoverContent = _sfc_main$l;
      const _component_UiCommand = _sfc_main$3$4;
      const _component_UiCommandInput = _sfc_main$p;
      const _component_UiCommandList = _sfc_main$q;
      const _component_UiCommandEmpty = _sfc_main$r;
      const _component_UiCommandGroup = _sfc_main$2$6;
      const _component_UiCommandItem = _sfc_main$1$7;
      const _component_UiCommandSeparator = _sfc_main$s;
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
                          if (selectedValues.value.size > 1) {
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
                              selectedValues.value.size > 1 ? (openBlock(), createBlock(_component_UiBadge, {
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
                            selectedValues.value.size > 1 ? (openBlock(), createBlock(_component_UiBadge, {
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
                          selectedValues.value.size > 1 ? (openBlock(), createBlock(_component_UiBadge, {
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
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/my/payments/DataTableFacetedFilter.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "DataTableToolbar",
  __ssrInlineRender: true,
  props: {
    table: {},
    operationTypes: {},
    contragentsList: {}
  },
  setup(__props) {
    const accounts = [
      { value: "\u041A\u0440\u0435\u0434\u0438\u0442\u043D\u044B\u0439 \u0441\u0447\u0435\u0442 4658", label: "\u041A\u0440\u0435\u0434\u0438\u0442\u043D\u044B\u0439 \u0441\u0447\u0435\u0442 4658" },
      { value: "\u041E\u0441\u043D\u043E\u0432\u043D\u043E\u0439 \u0441\u0447\u0435\u0442 7213", label: "\u041E\u0441\u043D\u043E\u0432\u043D\u043E\u0439 \u0441\u0447\u0435\u0442 7213" }
    ];
    const props = __props;
    const isFiltered = computed(
      () => props.table.getState().columnFilters.length > 0
    );
    return (_ctx, _push, _parent, _attrs) => {
      const _component_MyPaymentsDataTableFacetedFilter = _sfc_main$6;
      const _component_UiButton = _sfc_main$h;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex items-center justify-between" }, _attrs))}><div class="flex flex-1 items-center space-x-2">`);
      if (_ctx.table.getColumn("accountNumber")) {
        _push(ssrRenderComponent(_component_MyPaymentsDataTableFacetedFilter, {
          column: _ctx.table.getColumn("accountNumber"),
          title: "\u0421\u0447\u0435\u0442\u0430",
          options: accounts
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      if (_ctx.table.getColumn("typeOfOperation")) {
        _push(ssrRenderComponent(_component_MyPaymentsDataTableFacetedFilter, {
          column: _ctx.table.getColumn("typeOfOperation"),
          title: "\u0422\u0438\u043F \u043E\u043F\u0435\u0440\u0430\u0446\u0438\u0438",
          options: _ctx.operationTypes
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      if (_ctx.table.getColumn("counterParty")) {
        _push(ssrRenderComponent(_component_MyPaymentsDataTableFacetedFilter, {
          column: _ctx.table.getColumn("counterParty"),
          title: "\u041A\u043E\u043D\u0442\u0430\u0433\u0435\u043D\u0442",
          options: _ctx.contragentsList
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
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/my/payments/DataTableToolbar.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "DataTable",
  __ssrInlineRender: true,
  props: {
    columns: {},
    contragents: {},
    data: {}
  },
  setup(__props) {
    const props = __props;
    const sorting = ref([]);
    const columnFilters = ref([]);
    const columnVisibility = ref({});
    const operationTypes = [
      { value: "\u041F\u0435\u0440\u0435\u043C\u0435\u0449\u0435\u043D\u0438\u0435", label: "\u041F\u0435\u0440\u0435\u043C\u0435\u0449\u0435\u043D\u0438\u0435" },
      { value: "\u041F\u043E\u0441\u0442\u0443\u043F\u043B\u0435\u043D\u0438\u0435", label: "\u041F\u043E\u0441\u0442\u0443\u043F\u043B\u0435\u043D\u0438\u0435" },
      { value: "\u0412\u044B\u043F\u043B\u0430\u0442\u0430", label: "\u0412\u044B\u043F\u043B\u0430\u0442\u0430" }
    ];
    const contragentsList = ref([]);
    contragentsList.value = [...props.contragents.map((ca) => {
      return { label: ca, value: ca };
    })];
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
    return (_ctx, _push, _parent, _attrs) => {
      const _component_MyPaymentsDataTableToolbar = _sfc_main$5;
      const _component_UiPopover = _sfc_main$2$5;
      const _component_UiPopoverTrigger = _sfc_main$1$6;
      const _component_UiButton = _sfc_main$h;
      const _component_UiPopoverContent = _sfc_main$l;
      const _component_UiCheckbox = _sfc_main$m;
      const _component_UiTable = _sfc_main$5$1;
      const _component_UiTableHeader = _sfc_main$d;
      const _component_UiTableRow = _sfc_main$2$3;
      const _component_UiTableHead = _sfc_main$1$4;
      const _component_UiTableBody = _sfc_main$4$1;
      const _component_UiTableCell = _sfc_main$3$2;
      _push(`<!--[--><div class="flex justify-between mb-1"><div class="ml-[290px]">`);
      _push(ssrRenderComponent(_component_MyPaymentsDataTableToolbar, {
        table: unref(table),
        "operation-types": operationTypes,
        "contragents-list": unref(contragentsList)
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
                      "onUpdate:checked": (value) => column.toggleVisibility(!!value)
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
                          "onUpdate:checked": (value) => column.toggleVisibility(!!value)
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
                        "onUpdate:checked": (value) => column.toggleVisibility(!!value)
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
      _push(`</div></div><div class="rounded-md border max-h-[calc(100vh-170px)] overflow-y-scroll bg-slate-100">`);
      _push(ssrRenderComponent(_component_UiTable, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UiTableHeader, { class: "bg-white" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<!--[-->`);
                  ssrRenderList(unref(table).getHeaderGroups(), (headerGroup) => {
                    _push3(ssrRenderComponent(_component_UiTableRow, {
                      key: headerGroup.id
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<!--[-->`);
                          ssrRenderList(headerGroup.headers, (header) => {
                            _push4(ssrRenderComponent(_component_UiTableHead, {
                              key: header.id
                            }, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  if (!header.isPlaceholder) {
                                    _push5(ssrRenderComponent(unref(FlexRender), {
                                      render: header.column.columnDef.header,
                                      props: header.getContext()
                                    }, null, _parent5, _scopeId4));
                                  } else {
                                    _push5(`<!---->`);
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
                            }, _parent4, _scopeId3));
                          });
                          _push4(`<!--]-->`);
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
                    }, _parent3, _scopeId2));
                  });
                  _push3(`<!--]-->`);
                } else {
                  return [
                    (openBlock(true), createBlock(Fragment, null, renderList(unref(table).getHeaderGroups(), (headerGroup) => {
                      return openBlock(), createBlock(_component_UiTableRow, {
                        key: headerGroup.id
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
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UiTableBody, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                var _a, _b;
                if (_push3) {
                  if ((_a = unref(table).getRowModel().rows) == null ? void 0 : _a.length) {
                    _push3(`<!--[-->`);
                    ssrRenderList(unref(table).getRowModel().rows, (row) => {
                      _push3(ssrRenderComponent(_component_UiTableRow, {
                        key: row.id
                      }, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(`<!--[-->`);
                            ssrRenderList(row.getVisibleCells(), (cell) => {
                              _push4(ssrRenderComponent(_component_UiTableCell, {
                                key: cell.id
                              }, {
                                default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                  if (_push5) {
                                    _push5(ssrRenderComponent(unref(FlexRender), {
                                      render: cell.column.columnDef.cell,
                                      props: cell.getContext()
                                    }, null, _parent5, _scopeId4));
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
                              }, _parent4, _scopeId3));
                            });
                            _push4(`<!--]-->`);
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
                      }, _parent3, _scopeId2));
                    });
                    _push3(`<!--]-->`);
                  } else {
                    _push3(ssrRenderComponent(_component_UiTableRow, null, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_UiTableCell, {
                            colspan: _ctx.columns.length,
                            class: "text-left"
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`\u041D\u0435\u0442 \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u043E\u0432.`);
                              } else {
                                return [
                                  createTextVNode("\u041D\u0435\u0442 \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u043E\u0432.")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(_component_UiTableCell, {
                              colspan: _ctx.columns.length,
                              class: "text-left"
                            }, {
                              default: withCtx(() => [
                                createTextVNode("\u041D\u0435\u0442 \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u043E\u0432.")
                              ]),
                              _: 1
                            }, 8, ["colspan"])
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  }
                } else {
                  return [
                    ((_b = unref(table).getRowModel().rows) == null ? void 0 : _b.length) ? (openBlock(true), createBlock(Fragment, { key: 0 }, renderList(unref(table).getRowModel().rows, (row) => {
                      return openBlock(), createBlock(_component_UiTableRow, {
                        key: row.id
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
                      }, 1024);
                    }), 128)) : (openBlock(), createBlock(_component_UiTableRow, { key: 1 }, {
                      default: withCtx(() => [
                        createVNode(_component_UiTableCell, {
                          colspan: _ctx.columns.length,
                          class: "text-left"
                        }, {
                          default: withCtx(() => [
                            createTextVNode("\u041D\u0435\u0442 \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u043E\u0432.")
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
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UiTableHeader, { class: "bg-white" }, {
                default: withCtx(() => [
                  (openBlock(true), createBlock(Fragment, null, renderList(unref(table).getHeaderGroups(), (headerGroup) => {
                    return openBlock(), createBlock(_component_UiTableRow, {
                      key: headerGroup.id
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
                        key: row.id
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
                      }, 1024);
                    }), 128)) : (openBlock(), createBlock(_component_UiTableRow, { key: 1 }, {
                      default: withCtx(() => [
                        createVNode(_component_UiTableCell, {
                          colspan: _ctx.columns.length,
                          class: "text-left"
                        }, {
                          default: withCtx(() => [
                            createTextVNode("\u041D\u0435\u0442 \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u043E\u0432.")
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
      }, _parent));
      _push(`</div><!--]-->`);
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/my/payments/DataTable.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
function replaceLegalEntities(input) {
  const replacements = [
    [
      /ОБЩЕСТВО\s+С\s+ОГРАНИЧЕННОЙ\s+ОТВЕТСТВЕННОСТЬЮ|Общество\s+с\s+ограниченной\s+ответственностью/gi,
      "\u041E\u041E\u041E"
    ],
    [
      /ИНДИВИДУАЛЬНЫЙ\s+ПРЕДПРИНИМАТЕЛЬ|Индивидуальный\s+предприниматель/gi,
      "\u0418\u041F"
    ],
    [/АКЦИОНЕРНОЕ\s+ОБЩЕСТВО|Акционерное\s+общество/gi, "\u0410\u041E"],
    [
      /ЗАКРЫТОЕ\s+АКЦИОНЕРНОЕ\s+ОБЩЕСТВО|Закрытое\s+акционерное\s+общество/gi,
      "\u0417\u0410\u041E"
    ],
    [
      /ОТКРЫТОЕ\s+АКЦИОНЕРНОЕ\s+ОБЩЕСТВО|Открытое\s+акционерное\s+общество/gi,
      "\u041E\u0410\u041E"
    ]
  ];
  let result = input;
  for (const [pattern, replacement] of replacements) {
    result = result.replace(pattern, replacement);
  }
  return result.trim().replace(/\s+/g, " ");
}
const bankOperationsColumns = [
  // Дата
  {
    accessorKey: "operationDate",
    ruName: "\u0414\u0430\u0442\u0430",
    header: ({ column }) => {
      return h(
        _sfc_main$h,
        {
          variant: "ghost",
          onClick: () => column.toggleSorting(column.getIsSorted() === "asc"),
          class: "text-center h-full w-full"
        },
        () => ["\u0414\u0430\u0442\u0430", h(ArrowUpDown, { class: "ml-2 h-4 w-4" })]
      );
    },
    cell: ({ row }) => {
      return h(
        "div",
        { class: "text-center" },
        dateFormat(row.getValue("operationDate").toString().slice(0, 10))
      );
    }
  },
  // Счет
  {
    accessorKey: "accountNumber",
    ruName: "\u0421\u0447\u0435\u0442",
    header: ({ column }) => {
      return h(
        _sfc_main$h,
        {
          variant: "ghost",
          onClick: () => column.toggleSorting(column.getIsSorted() === "asc"),
          class: "text-center h-full w-full"
        },
        () => ["\u0421\u0447\u0435\u0442", h(ArrowUpDown, { class: "ml-2 h-4 w-4" })]
      );
    },
    cell: ({ row }) => {
      return h(
        "div",
        { class: "text-center whitespace-nowrap w-full" },
        row.getValue("accountNumber")
      );
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
    size: 100
  },
  // Тип
  {
    accessorKey: "typeOfOperation",
    ruName: "\u0422\u0438\u043F",
    header: ({ column }) => {
      return h(
        _sfc_main$h,
        {
          variant: "ghost",
          onClick: () => column.toggleSorting(column.getIsSorted() === "asc"),
          class: "text-center h-full w-full"
        },
        () => ["\u0422\u0438\u043F", h(ArrowUpDown, { class: "ml-2 h-4 w-4" })]
      );
    },
    cell: ({ row }) => {
      const type = row.getValue("typeOfOperation");
      const textStyle = type === "\u0412\u044B\u043F\u043B\u0430\u0442\u0430" ? "text-red-500" : type === "\u041F\u043E\u0441\u0442\u0443\u043F\u043B\u0435\u043D\u0438\u0435" ? "text-green-600" : "text-neutral-400";
      return h(
        "div",
        { class: `text-center ${textStyle} w-[200px]` },
        // Применяем стиль текста
        type
      );
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    }
  },
  // агент
  {
    accessorKey: "counterParty",
    ruName: "\u041A\u043E\u043D\u0442\u0440\u0430\u0433\u0435\u043D\u0442",
    header: ({ column }) => {
      return h(
        _sfc_main$h,
        {
          variant: "ghost",
          onClick: () => column.toggleSorting(column.getIsSorted() === "asc"),
          class: "text-center h-full w-full"
        },
        () => ["\u041A\u043E\u043D\u0442\u0440\u0430\u0433\u0435\u043D\u0442", h(ArrowUpDown, { class: "ml-2 h-4 w-4" })]
      );
    },
    cell: ({ row }) => h(
      "div",
      { class: "text-center" },
      replaceLegalEntities(row.getValue("counterParty") || "")
    ),
    filterFn: (row, id, value) => {
      console.log(row.getValue("counterParty"));
      return value.includes(row.getValue(id));
    }
  },
  // Статья
  // {
  //   accessorKey: 'category',
  //   ruName: 'Статья',
  //   header: ({ column }) => {
  //     return h(
  //       Button,
  //       {
  //         variant: 'ghost',
  //         onClick: () => column.toggleSorting(column.getIsSorted() === 'asc'),
  //         class: 'text-center h-full w-full',
  //       },
  //       () => ['Статья', h(ArrowUpDown, { class: 'ml-2 h-4 w-4' })]
  //     );
  //   },
  //   cell: ({ row }) =>
  //     h('div', { class: 'text-center' }, row.getValue('category')),
  //   filterFn: (row, id, value) => {
  //     return value.includes(row.getValue(id));
  //   },
  // },
  // Описание операции
  {
    accessorKey: "description",
    ruName: "\u0421\u0442\u0430\u0442\u044C\u044F",
    header: ({ column }) => {
      return h(
        _sfc_main$h,
        {
          variant: "ghost",
          onClick: () => column.toggleSorting(column.getIsSorted() === "asc"),
          class: "text-center h-full w-full"
        },
        () => ["\u0421\u0442\u0430\u0442\u044C\u044F", h(ArrowUpDown, { class: "ml-2 h-4 w-4" })]
      );
    },
    cell: ({ row }) => h("div", { class: "text-left" }, row.getValue("description"))
  },
  // Назначение платежа
  // {
  //   accessorKey: 'payPurpose',
  //   ruName: 'Назначение платежа',
  //   header: ({ column }) => {
  //     return h(
  //       Button,
  //       {
  //         variant: 'ghost',
  //         onClick: () => column.toggleSorting(column.getIsSorted() === 'asc'),
  //         class: 'text-center h-full w-full',
  //       },
  //       () => ['Назначение платежа', h(ArrowUpDown, { class: 'ml-2 h-4 w-4' })]
  //     );
  //   },
  //   cell: ({ row }) =>
  //     h('div', { class: 'text-left' }, row.getValue('payPurpose')),
  // },
  // Сумма в валюте счета
  {
    accessorKey: "accountAmount",
    ruName: "\u0421\u0443\u043C\u043C\u0430",
    header: ({ column }) => {
      return h(
        _sfc_main$h,
        {
          variant: "ghost",
          onClick: () => column.toggleSorting(column.getIsSorted() === "asc"),
          class: "text-center h-full w-full"
        },
        () => ["\u0421\u0443\u043C\u043C\u0430", h(ArrowUpDown, { class: "ml-2 h-4 w-4" })]
      );
    },
    cell: ({ row }) => {
      const amount = row.getValue("accountAmount");
      const type = row.getValue("typeOfOperation");
      const textStyle = type === "\u0412\u044B\u043F\u043B\u0430\u0442\u0430" ? "text-red-500" : type === "\u041F\u043E\u0441\u0442\u0443\u043F\u043B\u0435\u043D\u0438\u0435" ? "text-green-600" : "text-neutral-400";
      const formattedAmount = `${type === "\u0412\u044B\u043F\u043B\u0430\u0442\u0430" ? "-" : type === "\u041F\u043E\u0441\u0442\u0443\u043F\u043B\u0435\u043D\u0438\u0435" ? "+" : "\xB1"}${amount.toFixed(2)} \u20BD`;
      return h(
        "div",
        { class: `text-center font-semibold ${textStyle}` },
        // Применяем стиль текста
        formattedAmount
      );
    }
  }
];
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "Operations",
  __ssrInlineRender: true,
  setup(__props) {
    const { $useApi } = useNuxtApp();
    const range = ref({
      start: (/* @__PURE__ */ new Date()).toISOString().slice(0, 10),
      // start: new Date().toISOString().slice(0, 7) + '-01',
      end: (/* @__PURE__ */ new Date()).toISOString().slice(0, 10)
    });
    const operationsData = ref([
      {
        operationDate: "2025-04-07T15:10:32Z",
        typeOfOperation: "Debit",
        category: "fee",
        accountAmount: 151.2,
        description: "\u041A\u043E\u043C\u0438\u0441\u0441\u0438\u044F \u0437\u0430 \u0431\u0430\u043D\u043A\u043E\u0432\u0441\u043A\u0438\u0439 \u043F\u0435\u0440\u0435\u0432\u043E\u0434 \u0441\u0430\u043C\u043E\u0437\u0430\u043D\u044F\u0442\u044B\u043C",
        payPurpose: "\u041A\u043E\u043C\u0438\u0441\u0441\u0438\u044F \u0437\u0430 \u0432\u043D\u0443\u0442\u0440\u0435\u043D\u043D\u0438\u0439 \u0431\u0430\u043D\u043A\u043E\u0432\u0441\u043A\u0438\u0439 \u043F\u0435\u0440\u0435\u0432\u043E\u0434 \u0441\u0430\u043C\u043E\u0437\u0430\u043D\u044F\u0442\u044B\u043C. \u0414\u043E\u0433\u043E\u0432\u043E\u0440 7035739486"
      },
      {
        operationDate: "2025-04-06T10:20:45Z",
        typeOfOperation: "Credit",
        category: "income",
        accountAmount: 5e3,
        description: "\u041F\u0435\u0440\u0435\u0432\u043E\u0434 \u043E\u0442 \u043A\u043B\u0438\u0435\u043D\u0442\u0430",
        payPurpose: "\u041E\u043F\u043B\u0430\u0442\u0430 \u043F\u043E \u0434\u043E\u0433\u043E\u0432\u043E\u0440\u0443 \u211612345"
      }
    ]);
    const contragents = ref(["1", "2"]);
    const getRangeData = async (range2) => {
      const { data } = await $useApi.get("planfact/operations", {
        params: { ...range2, limit: 5e3 }
      });
      operationsData.value = data.operations;
      contragents.value = data.contragents;
      operationsData.value.reverse();
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_MyDateRangePicker = _sfc_main$f;
      const _component_MyPaymentsDataTable = _sfc_main$4;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_MyDateRangePicker, {
        "model-value": unref(range),
        "onUpdate:modelValue": getRangeData
      }, null, _parent));
      _push(`<div class="mt-[-35px]">`);
      _push(ssrRenderComponent(_component_MyPaymentsDataTable, {
        key: unref(operationsData).length,
        columns: unref(bankOperationsColumns),
        data: unref(operationsData),
        contragents: unref(contragents)
      }, null, _parent));
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/my/planfact/Operations.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "Categories",
  __ssrInlineRender: true,
  setup(__props) {
    const { $useApi } = useNuxtApp();
    const tabs = ["\u0414\u043E\u0445\u043E\u0434\u044B", "\u0420\u0430\u0441\u0445\u043E\u0434\u044B", "\u0410\u043A\u0442\u0438\u0432\u044B", "\u041E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u0441\u0442\u0432\u0430", "\u041A\u0430\u043F\u0438\u0442\u0430\u043B"];
    const curType = ref(tabs[0]);
    const categories = ref([]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UiTabs = _sfc_main$2$1;
      const _component_UiTabsList = _sfc_main$a;
      const _component_UiTabsTrigger = _sfc_main$1$1;
      const _component_UiTabsContent = _sfc_main$b;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_UiTabs, {
        modelValue: unref(curType),
        "onUpdate:modelValue": ($event) => isRef(curType) ? curType.value = $event : null
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UiTabsList, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<!--[-->`);
                  ssrRenderList(tabs, (type) => {
                    _push3(ssrRenderComponent(_component_UiTabsTrigger, {
                      key: type,
                      value: type
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`${ssrInterpolate(type)}`);
                        } else {
                          return [
                            createTextVNode(toDisplayString(type), 1)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  });
                  _push3(`<!--]-->`);
                } else {
                  return [
                    (openBlock(), createBlock(Fragment, null, renderList(tabs, (type) => {
                      return createVNode(_component_UiTabsTrigger, {
                        key: type,
                        value: type
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(type), 1)
                        ]),
                        _: 2
                      }, 1032, ["value"]);
                    }), 64))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<!--[-->`);
            ssrRenderList(tabs, (type) => {
              _push2(ssrRenderComponent(_component_UiTabsContent, {
                key: type,
                value: type
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<ul${_scopeId2}><!--[-->`);
                    ssrRenderList(unref(categories).filter((c) => c.type === type), (cat) => {
                      _push3(`<li${_scopeId2}>${ssrInterpolate(cat.title)}</li>`);
                    });
                    _push3(`<!--]--></ul>`);
                  } else {
                    return [
                      createVNode("ul", null, [
                        (openBlock(true), createBlock(Fragment, null, renderList(unref(categories).filter((c) => c.type === type), (cat) => {
                          return openBlock(), createBlock("li", {
                            key: cat.id
                          }, toDisplayString(cat.title), 1);
                        }), 128))
                      ])
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
          } else {
            return [
              createVNode(_component_UiTabsList, null, {
                default: withCtx(() => [
                  (openBlock(), createBlock(Fragment, null, renderList(tabs, (type) => {
                    return createVNode(_component_UiTabsTrigger, {
                      key: type,
                      value: type
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(type), 1)
                      ]),
                      _: 2
                    }, 1032, ["value"]);
                  }), 64))
                ]),
                _: 1
              }),
              (openBlock(), createBlock(Fragment, null, renderList(tabs, (type) => {
                return createVNode(_component_UiTabsContent, {
                  key: type,
                  value: type
                }, {
                  default: withCtx(() => [
                    createVNode("ul", null, [
                      (openBlock(true), createBlock(Fragment, null, renderList(unref(categories).filter((c) => c.type === type), (cat) => {
                        return openBlock(), createBlock("li", {
                          key: cat.id
                        }, toDisplayString(cat.title), 1);
                      }), 128))
                    ])
                  ]),
                  _: 2
                }, 1032, ["value"]);
              }), 64))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/my/planfact/Categories.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "PL",
  __ssrInlineRender: true,
  setup(__props) {
    const { $useApi } = useNuxtApp();
    const { toast } = useToast();
    const plData = ref({
      income: {
        allDealsPrice: 0,
        sendDeals: 0,
        revenue: 0
      },
      expenses: {
        production: {
          supplies: [],
          productionSalaries: []
        },
        commercial: {
          commercialSalaries: []
        },
        adExpenses: []
      }
    });
    const period = ref((/* @__PURE__ */ new Date()).toISOString().slice(0, 7));
    const fetchPLData = async () => {
      try {
        const response = await $useApi.get("planfact/pl", {
          params: { period: period.value }
        });
        plData.value = response.data;
      } catch (error) {
        toast({
          variant: "destructive",
          title: "\u041E\u0448\u0438\u0431\u043A\u0430 \u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0438 \u0434\u0430\u043D\u043D\u044B\u0445",
          description: "\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C \u0434\u0430\u043D\u043D\u044B\u0435 P&L. \u041F\u043E\u043F\u0440\u043E\u0431\u0443\u0439\u0442\u0435 \u043F\u043E\u0437\u0436\u0435."
        });
      }
    };
    watch(period, () => {
      fetchPLData();
    });
    const suppliesByCategory = computed(() => {
      return plData.value.expenses.production.supplies || [];
    });
    const productionSalaries = computed(() => {
      return plData.value.expenses.production.productionSalaries || [];
    });
    const commercialSalaries = computed(() => {
      return plData.value.expenses.commercial.commercialSalaries || [];
    });
    const adExpensesBySource = computed(() => {
      return plData.value.expenses.adExpenses || [];
    });
    const totalExpenses = computed(() => {
      const expensesList = [];
      const suppliesTotal = suppliesByCategory.value.reduce((sum, item) => sum + item.value, 0);
      if (suppliesTotal > 0) {
        expensesList.push({ category: "\u0420\u0430\u0441\u0445\u043E\u0434\u044B \u043D\u0430 \u043C\u0430\u0442\u0435\u0440\u0438\u0430\u043B\u044B", total: suppliesTotal });
      }
      const productionSalariesTotal = productionSalaries.value.reduce((sum, item) => sum + item.value, 0);
      if (productionSalariesTotal > 0) {
        expensesList.push({ category: "\u0417\u0430\u0440\u043F\u043B\u0430\u0442\u044B \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0441\u0442\u0432\u0430", total: productionSalariesTotal });
      }
      const commercialSalariesTotal = commercialSalaries.value.reduce((sum, item) => sum + item.value, 0);
      if (commercialSalariesTotal > 0) {
        expensesList.push({ category: "\u0417\u0430\u0440\u043F\u043B\u0430\u0442\u044B \u043A\u043E\u043C\u043C\u0435\u0440\u0447\u0435\u0441\u043A\u043E\u0433\u043E \u043E\u0442\u0434\u0435\u043B\u0430", total: commercialSalariesTotal });
      }
      const adExpensesTotal = adExpensesBySource.value.reduce((sum, item) => sum + item.value, 0);
      if (adExpensesTotal > 0) {
        expensesList.push({ category: "\u0420\u0430\u0441\u0445\u043E\u0434\u044B \u043D\u0430 \u0440\u0435\u043A\u043B\u0430\u043C\u0443", total: adExpensesTotal });
      }
      return expensesList;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UiInput = _sfc_main$g;
      const _component_UiCard = _sfc_main$3$1;
      const _component_UiCardHeader = _sfc_main$2$2;
      const _component_UiCardTitle = _sfc_main$1$2;
      const _component_UiCardContent = _sfc_main$1$3;
      const _component_UiTable = _sfc_main$5$1;
      const _component_UiTableHeader = _sfc_main$d;
      const _component_UiTableRow = _sfc_main$2$3;
      const _component_UiTableHead = _sfc_main$1$4;
      const _component_UiTableBody = _sfc_main$4$1;
      const _component_UiTableCell = _sfc_main$3$2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "space-y-2 mt-[-48px]" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_UiInput, {
        modelValue: unref(period),
        "onUpdate:modelValue": ($event) => isRef(period) ? period.value = $event : null,
        type: "month",
        class: "w-[180px] ml-[160px]"
      }, null, _parent));
      _push(`<div class="flex gap-2 flex-wrap">`);
      _push(ssrRenderComponent(_component_UiCard, { class: "w-full md:w-[calc(33%-0.25rem)]" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UiCardHeader, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UiCardTitle, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`\u0414\u043E\u0445\u043E\u0434\u044B`);
                      } else {
                        return [
                          createTextVNode("\u0414\u043E\u0445\u043E\u0434\u044B")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UiCardTitle, null, {
                      default: withCtx(() => [
                        createTextVNode("\u0414\u043E\u0445\u043E\u0434\u044B")
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UiCardContent, null, {
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
                                    _push6(ssrRenderComponent(_component_UiTableHead, null, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`\u041F\u043E\u043A\u0430\u0437\u0430\u0442\u0435\u043B\u044C`);
                                        } else {
                                          return [
                                            createTextVNode("\u041F\u043E\u043A\u0430\u0437\u0430\u0442\u0435\u043B\u044C")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(_component_UiTableHead, { class: "text-right" }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`\u0421\u0443\u043C\u043C\u0430 (\u20BD)`);
                                        } else {
                                          return [
                                            createTextVNode("\u0421\u0443\u043C\u043C\u0430 (\u20BD)")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_UiTableHead, null, {
                                        default: withCtx(() => [
                                          createTextVNode("\u041F\u043E\u043A\u0430\u0437\u0430\u0442\u0435\u043B\u044C")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_UiTableHead, { class: "text-right" }, {
                                        default: withCtx(() => [
                                          createTextVNode("\u0421\u0443\u043C\u043C\u0430 (\u20BD)")
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
                                    createVNode(_component_UiTableHead, null, {
                                      default: withCtx(() => [
                                        createTextVNode("\u041F\u043E\u043A\u0430\u0437\u0430\u0442\u0435\u043B\u044C")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_UiTableHead, { class: "text-right" }, {
                                      default: withCtx(() => [
                                        createTextVNode("\u0421\u0443\u043C\u043C\u0430 (\u20BD)")
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
                              _push5(ssrRenderComponent(_component_UiTableRow, null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_UiTableCell, null, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`\u041E\u0444\u043E\u0440\u043C\u043B\u0435\u043D\u043D\u044B\u0435 \u0441\u0434\u0435\u043B\u043A\u0438`);
                                        } else {
                                          return [
                                            createTextVNode("\u041E\u0444\u043E\u0440\u043C\u043B\u0435\u043D\u043D\u044B\u0435 \u0441\u0434\u0435\u043B\u043A\u0438")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(_component_UiTableCell, { class: "text-right" }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`${ssrInterpolate(unref(plData).income.allDealsPrice.toLocaleString("ru-RU"))}`);
                                        } else {
                                          return [
                                            createTextVNode(toDisplayString(unref(plData).income.allDealsPrice.toLocaleString("ru-RU")), 1)
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_UiTableCell, null, {
                                        default: withCtx(() => [
                                          createTextVNode("\u041E\u0444\u043E\u0440\u043C\u043B\u0435\u043D\u043D\u044B\u0435 \u0441\u0434\u0435\u043B\u043A\u0438")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_UiTableCell, { class: "text-right" }, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(unref(plData).income.allDealsPrice.toLocaleString("ru-RU")), 1)
                                        ]),
                                        _: 2
                                      }, 1024)
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_UiTableRow, null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_UiTableCell, null, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`\u041E\u0442\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u043D\u044B\u0435 \u0441\u0434\u0435\u043B\u043A\u0438`);
                                        } else {
                                          return [
                                            createTextVNode("\u041E\u0442\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u043D\u044B\u0435 \u0441\u0434\u0435\u043B\u043A\u0438")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(_component_UiTableCell, { class: "text-right" }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`${ssrInterpolate(unref(plData).income.sendDeals.toLocaleString("ru-RU"))}`);
                                        } else {
                                          return [
                                            createTextVNode(toDisplayString(unref(plData).income.sendDeals.toLocaleString("ru-RU")), 1)
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_UiTableCell, null, {
                                        default: withCtx(() => [
                                          createTextVNode("\u041E\u0442\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u043D\u044B\u0435 \u0441\u0434\u0435\u043B\u043A\u0438")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_UiTableCell, { class: "text-right" }, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(unref(plData).income.sendDeals.toLocaleString("ru-RU")), 1)
                                        ]),
                                        _: 2
                                      }, 1024)
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_UiTableRow, null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_UiTableCell, null, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`\u0412\u044B\u0440\u0443\u0447\u043A\u0430`);
                                        } else {
                                          return [
                                            createTextVNode("\u0412\u044B\u0440\u0443\u0447\u043A\u0430")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(_component_UiTableCell, { class: "text-right" }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`${ssrInterpolate(unref(plData).income.revenue.toLocaleString("ru-RU"))}`);
                                        } else {
                                          return [
                                            createTextVNode(toDisplayString(unref(plData).income.revenue.toLocaleString("ru-RU")), 1)
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_UiTableCell, null, {
                                        default: withCtx(() => [
                                          createTextVNode("\u0412\u044B\u0440\u0443\u0447\u043A\u0430")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_UiTableCell, { class: "text-right" }, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(unref(plData).income.revenue.toLocaleString("ru-RU")), 1)
                                        ]),
                                        _: 2
                                      }, 1024)
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_UiTableRow, null, {
                                  default: withCtx(() => [
                                    createVNode(_component_UiTableCell, null, {
                                      default: withCtx(() => [
                                        createTextVNode("\u041E\u0444\u043E\u0440\u043C\u043B\u0435\u043D\u043D\u044B\u0435 \u0441\u0434\u0435\u043B\u043A\u0438")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_UiTableCell, { class: "text-right" }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(unref(plData).income.allDealsPrice.toLocaleString("ru-RU")), 1)
                                      ]),
                                      _: 2
                                    }, 1024)
                                  ]),
                                  _: 2
                                }, 1024),
                                createVNode(_component_UiTableRow, null, {
                                  default: withCtx(() => [
                                    createVNode(_component_UiTableCell, null, {
                                      default: withCtx(() => [
                                        createTextVNode("\u041E\u0442\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u043D\u044B\u0435 \u0441\u0434\u0435\u043B\u043A\u0438")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_UiTableCell, { class: "text-right" }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(unref(plData).income.sendDeals.toLocaleString("ru-RU")), 1)
                                      ]),
                                      _: 2
                                    }, 1024)
                                  ]),
                                  _: 2
                                }, 1024),
                                createVNode(_component_UiTableRow, null, {
                                  default: withCtx(() => [
                                    createVNode(_component_UiTableCell, null, {
                                      default: withCtx(() => [
                                        createTextVNode("\u0412\u044B\u0440\u0443\u0447\u043A\u0430")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_UiTableCell, { class: "text-right" }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(unref(plData).income.revenue.toLocaleString("ru-RU")), 1)
                                      ]),
                                      _: 2
                                    }, 1024)
                                  ]),
                                  _: 2
                                }, 1024)
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
                                  createVNode(_component_UiTableHead, null, {
                                    default: withCtx(() => [
                                      createTextVNode("\u041F\u043E\u043A\u0430\u0437\u0430\u0442\u0435\u043B\u044C")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_UiTableHead, { class: "text-right" }, {
                                    default: withCtx(() => [
                                      createTextVNode("\u0421\u0443\u043C\u043C\u0430 (\u20BD)")
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
                              createVNode(_component_UiTableRow, null, {
                                default: withCtx(() => [
                                  createVNode(_component_UiTableCell, null, {
                                    default: withCtx(() => [
                                      createTextVNode("\u041E\u0444\u043E\u0440\u043C\u043B\u0435\u043D\u043D\u044B\u0435 \u0441\u0434\u0435\u043B\u043A\u0438")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_UiTableCell, { class: "text-right" }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(unref(plData).income.allDealsPrice.toLocaleString("ru-RU")), 1)
                                    ]),
                                    _: 2
                                  }, 1024)
                                ]),
                                _: 2
                              }, 1024),
                              createVNode(_component_UiTableRow, null, {
                                default: withCtx(() => [
                                  createVNode(_component_UiTableCell, null, {
                                    default: withCtx(() => [
                                      createTextVNode("\u041E\u0442\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u043D\u044B\u0435 \u0441\u0434\u0435\u043B\u043A\u0438")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_UiTableCell, { class: "text-right" }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(unref(plData).income.sendDeals.toLocaleString("ru-RU")), 1)
                                    ]),
                                    _: 2
                                  }, 1024)
                                ]),
                                _: 2
                              }, 1024),
                              createVNode(_component_UiTableRow, null, {
                                default: withCtx(() => [
                                  createVNode(_component_UiTableCell, null, {
                                    default: withCtx(() => [
                                      createTextVNode("\u0412\u044B\u0440\u0443\u0447\u043A\u0430")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_UiTableCell, { class: "text-right" }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(unref(plData).income.revenue.toLocaleString("ru-RU")), 1)
                                    ]),
                                    _: 2
                                  }, 1024)
                                ]),
                                _: 2
                              }, 1024)
                            ]),
                            _: 2
                          }, 1024)
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
                                createVNode(_component_UiTableHead, null, {
                                  default: withCtx(() => [
                                    createTextVNode("\u041F\u043E\u043A\u0430\u0437\u0430\u0442\u0435\u043B\u044C")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_UiTableHead, { class: "text-right" }, {
                                  default: withCtx(() => [
                                    createTextVNode("\u0421\u0443\u043C\u043C\u0430 (\u20BD)")
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
                            createVNode(_component_UiTableRow, null, {
                              default: withCtx(() => [
                                createVNode(_component_UiTableCell, null, {
                                  default: withCtx(() => [
                                    createTextVNode("\u041E\u0444\u043E\u0440\u043C\u043B\u0435\u043D\u043D\u044B\u0435 \u0441\u0434\u0435\u043B\u043A\u0438")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_UiTableCell, { class: "text-right" }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(unref(plData).income.allDealsPrice.toLocaleString("ru-RU")), 1)
                                  ]),
                                  _: 2
                                }, 1024)
                              ]),
                              _: 2
                            }, 1024),
                            createVNode(_component_UiTableRow, null, {
                              default: withCtx(() => [
                                createVNode(_component_UiTableCell, null, {
                                  default: withCtx(() => [
                                    createTextVNode("\u041E\u0442\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u043D\u044B\u0435 \u0441\u0434\u0435\u043B\u043A\u0438")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_UiTableCell, { class: "text-right" }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(unref(plData).income.sendDeals.toLocaleString("ru-RU")), 1)
                                  ]),
                                  _: 2
                                }, 1024)
                              ]),
                              _: 2
                            }, 1024),
                            createVNode(_component_UiTableRow, null, {
                              default: withCtx(() => [
                                createVNode(_component_UiTableCell, null, {
                                  default: withCtx(() => [
                                    createTextVNode("\u0412\u044B\u0440\u0443\u0447\u043A\u0430")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_UiTableCell, { class: "text-right" }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(unref(plData).income.revenue.toLocaleString("ru-RU")), 1)
                                  ]),
                                  _: 2
                                }, 1024)
                              ]),
                              _: 2
                            }, 1024)
                          ]),
                          _: 2
                        }, 1024)
                      ]),
                      _: 2
                    }, 1024)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UiCardHeader, null, {
                default: withCtx(() => [
                  createVNode(_component_UiCardTitle, null, {
                    default: withCtx(() => [
                      createTextVNode("\u0414\u043E\u0445\u043E\u0434\u044B")
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(_component_UiCardContent, null, {
                default: withCtx(() => [
                  createVNode(_component_UiTable, null, {
                    default: withCtx(() => [
                      createVNode(_component_UiTableHeader, null, {
                        default: withCtx(() => [
                          createVNode(_component_UiTableRow, null, {
                            default: withCtx(() => [
                              createVNode(_component_UiTableHead, null, {
                                default: withCtx(() => [
                                  createTextVNode("\u041F\u043E\u043A\u0430\u0437\u0430\u0442\u0435\u043B\u044C")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_UiTableHead, { class: "text-right" }, {
                                default: withCtx(() => [
                                  createTextVNode("\u0421\u0443\u043C\u043C\u0430 (\u20BD)")
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
                          createVNode(_component_UiTableRow, null, {
                            default: withCtx(() => [
                              createVNode(_component_UiTableCell, null, {
                                default: withCtx(() => [
                                  createTextVNode("\u041E\u0444\u043E\u0440\u043C\u043B\u0435\u043D\u043D\u044B\u0435 \u0441\u0434\u0435\u043B\u043A\u0438")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_UiTableCell, { class: "text-right" }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(unref(plData).income.allDealsPrice.toLocaleString("ru-RU")), 1)
                                ]),
                                _: 2
                              }, 1024)
                            ]),
                            _: 2
                          }, 1024),
                          createVNode(_component_UiTableRow, null, {
                            default: withCtx(() => [
                              createVNode(_component_UiTableCell, null, {
                                default: withCtx(() => [
                                  createTextVNode("\u041E\u0442\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u043D\u044B\u0435 \u0441\u0434\u0435\u043B\u043A\u0438")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_UiTableCell, { class: "text-right" }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(unref(plData).income.sendDeals.toLocaleString("ru-RU")), 1)
                                ]),
                                _: 2
                              }, 1024)
                            ]),
                            _: 2
                          }, 1024),
                          createVNode(_component_UiTableRow, null, {
                            default: withCtx(() => [
                              createVNode(_component_UiTableCell, null, {
                                default: withCtx(() => [
                                  createTextVNode("\u0412\u044B\u0440\u0443\u0447\u043A\u0430")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_UiTableCell, { class: "text-right" }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(unref(plData).income.revenue.toLocaleString("ru-RU")), 1)
                                ]),
                                _: 2
                              }, 1024)
                            ]),
                            _: 2
                          }, 1024)
                        ]),
                        _: 2
                      }, 1024)
                    ]),
                    _: 2
                  }, 1024)
                ]),
                _: 2
              }, 1024)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_UiCard, { class: "w-full md:w-[calc(33%-0.25rem)]" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UiCardHeader, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UiCardTitle, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`\u041E\u0431\u0449\u0438\u0435 \u0440\u0430\u0441\u0445\u043E\u0434\u044B`);
                      } else {
                        return [
                          createTextVNode("\u041E\u0431\u0449\u0438\u0435 \u0440\u0430\u0441\u0445\u043E\u0434\u044B")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UiCardTitle, null, {
                      default: withCtx(() => [
                        createTextVNode("\u041E\u0431\u0449\u0438\u0435 \u0440\u0430\u0441\u0445\u043E\u0434\u044B")
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UiCardContent, null, {
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
                                    _push6(ssrRenderComponent(_component_UiTableHead, null, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`\u041A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u044F`);
                                        } else {
                                          return [
                                            createTextVNode("\u041A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u044F")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(_component_UiTableHead, { class: "text-right" }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`\u0421\u0443\u043C\u043C\u0430 (\u20BD)`);
                                        } else {
                                          return [
                                            createTextVNode("\u0421\u0443\u043C\u043C\u0430 (\u20BD)")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_UiTableHead, null, {
                                        default: withCtx(() => [
                                          createTextVNode("\u041A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u044F")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_UiTableHead, { class: "text-right" }, {
                                        default: withCtx(() => [
                                          createTextVNode("\u0421\u0443\u043C\u043C\u0430 (\u20BD)")
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
                                    createVNode(_component_UiTableHead, null, {
                                      default: withCtx(() => [
                                        createTextVNode("\u041A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u044F")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_UiTableHead, { class: "text-right" }, {
                                      default: withCtx(() => [
                                        createTextVNode("\u0421\u0443\u043C\u043C\u0430 (\u20BD)")
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
                              ssrRenderList(unref(totalExpenses), (item) => {
                                _push5(ssrRenderComponent(_component_UiTableRow, {
                                  key: item.category
                                }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(ssrRenderComponent(_component_UiTableCell, null, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`${ssrInterpolate(item.category)}`);
                                          } else {
                                            return [
                                              createTextVNode(toDisplayString(item.category), 1)
                                            ];
                                          }
                                        }),
                                        _: 2
                                      }, _parent6, _scopeId5));
                                      _push6(ssrRenderComponent(_component_UiTableCell, { class: "text-right" }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`${ssrInterpolate(item.total.toLocaleString("ru-RU"))}`);
                                          } else {
                                            return [
                                              createTextVNode(toDisplayString(item.total.toLocaleString("ru-RU")), 1)
                                            ];
                                          }
                                        }),
                                        _: 2
                                      }, _parent6, _scopeId5));
                                    } else {
                                      return [
                                        createVNode(_component_UiTableCell, null, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(item.category), 1)
                                          ]),
                                          _: 2
                                        }, 1024),
                                        createVNode(_component_UiTableCell, { class: "text-right" }, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(item.total.toLocaleString("ru-RU")), 1)
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
                              if (unref(totalExpenses).length) {
                                _push5(ssrRenderComponent(_component_UiTableRow, null, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(ssrRenderComponent(_component_UiTableCell, { class: "font-bold" }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`\u0418\u0442\u043E\u0433\u043E`);
                                          } else {
                                            return [
                                              createTextVNode("\u0418\u0442\u043E\u0433\u043E")
                                            ];
                                          }
                                        }),
                                        _: 1
                                      }, _parent6, _scopeId5));
                                      _push6(ssrRenderComponent(_component_UiTableCell, { class: "text-right font-bold" }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`${ssrInterpolate(unref(totalExpenses).reduce((sum, item) => sum + item.total, 0).toLocaleString("ru-RU"))}`);
                                          } else {
                                            return [
                                              createTextVNode(toDisplayString(unref(totalExpenses).reduce((sum, item) => sum + item.total, 0).toLocaleString("ru-RU")), 1)
                                            ];
                                          }
                                        }),
                                        _: 1
                                      }, _parent6, _scopeId5));
                                    } else {
                                      return [
                                        createVNode(_component_UiTableCell, { class: "font-bold" }, {
                                          default: withCtx(() => [
                                            createTextVNode("\u0418\u0442\u043E\u0433\u043E")
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(_component_UiTableCell, { class: "text-right font-bold" }, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(unref(totalExpenses).reduce((sum, item) => sum + item.total, 0).toLocaleString("ru-RU")), 1)
                                          ]),
                                          _: 2
                                        }, 1024)
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent5, _scopeId4));
                              } else {
                                _push5(`<!---->`);
                              }
                              if (!unref(totalExpenses).length) {
                                _push5(ssrRenderComponent(_component_UiTableRow, null, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(ssrRenderComponent(_component_UiTableCell, {
                                        colspan: "2",
                                        class: "text-center"
                                      }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(` \u041D\u0435\u0442 \u0434\u0430\u043D\u043D\u044B\u0445 \u043E \u0440\u0430\u0441\u0445\u043E\u0434\u0430\u0445 `);
                                          } else {
                                            return [
                                              createTextVNode(" \u041D\u0435\u0442 \u0434\u0430\u043D\u043D\u044B\u0445 \u043E \u0440\u0430\u0441\u0445\u043E\u0434\u0430\u0445 ")
                                            ];
                                          }
                                        }),
                                        _: 1
                                      }, _parent6, _scopeId5));
                                    } else {
                                      return [
                                        createVNode(_component_UiTableCell, {
                                          colspan: "2",
                                          class: "text-center"
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(" \u041D\u0435\u0442 \u0434\u0430\u043D\u043D\u044B\u0445 \u043E \u0440\u0430\u0441\u0445\u043E\u0434\u0430\u0445 ")
                                          ]),
                                          _: 1
                                        })
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent5, _scopeId4));
                              } else {
                                _push5(`<!---->`);
                              }
                            } else {
                              return [
                                (openBlock(true), createBlock(Fragment, null, renderList(unref(totalExpenses), (item) => {
                                  return openBlock(), createBlock(_component_UiTableRow, {
                                    key: item.category
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_UiTableCell, null, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(item.category), 1)
                                        ]),
                                        _: 2
                                      }, 1024),
                                      createVNode(_component_UiTableCell, { class: "text-right" }, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(item.total.toLocaleString("ru-RU")), 1)
                                        ]),
                                        _: 2
                                      }, 1024)
                                    ]),
                                    _: 2
                                  }, 1024);
                                }), 128)),
                                unref(totalExpenses).length ? (openBlock(), createBlock(_component_UiTableRow, { key: 0 }, {
                                  default: withCtx(() => [
                                    createVNode(_component_UiTableCell, { class: "font-bold" }, {
                                      default: withCtx(() => [
                                        createTextVNode("\u0418\u0442\u043E\u0433\u043E")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_UiTableCell, { class: "text-right font-bold" }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(unref(totalExpenses).reduce((sum, item) => sum + item.total, 0).toLocaleString("ru-RU")), 1)
                                      ]),
                                      _: 2
                                    }, 1024)
                                  ]),
                                  _: 2
                                }, 1024)) : createCommentVNode("", true),
                                !unref(totalExpenses).length ? (openBlock(), createBlock(_component_UiTableRow, { key: 1 }, {
                                  default: withCtx(() => [
                                    createVNode(_component_UiTableCell, {
                                      colspan: "2",
                                      class: "text-center"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(" \u041D\u0435\u0442 \u0434\u0430\u043D\u043D\u044B\u0445 \u043E \u0440\u0430\u0441\u0445\u043E\u0434\u0430\u0445 ")
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
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_UiTableHeader, null, {
                            default: withCtx(() => [
                              createVNode(_component_UiTableRow, null, {
                                default: withCtx(() => [
                                  createVNode(_component_UiTableHead, null, {
                                    default: withCtx(() => [
                                      createTextVNode("\u041A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u044F")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_UiTableHead, { class: "text-right" }, {
                                    default: withCtx(() => [
                                      createTextVNode("\u0421\u0443\u043C\u043C\u0430 (\u20BD)")
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
                              (openBlock(true), createBlock(Fragment, null, renderList(unref(totalExpenses), (item) => {
                                return openBlock(), createBlock(_component_UiTableRow, {
                                  key: item.category
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_UiTableCell, null, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(item.category), 1)
                                      ]),
                                      _: 2
                                    }, 1024),
                                    createVNode(_component_UiTableCell, { class: "text-right" }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(item.total.toLocaleString("ru-RU")), 1)
                                      ]),
                                      _: 2
                                    }, 1024)
                                  ]),
                                  _: 2
                                }, 1024);
                              }), 128)),
                              unref(totalExpenses).length ? (openBlock(), createBlock(_component_UiTableRow, { key: 0 }, {
                                default: withCtx(() => [
                                  createVNode(_component_UiTableCell, { class: "font-bold" }, {
                                    default: withCtx(() => [
                                      createTextVNode("\u0418\u0442\u043E\u0433\u043E")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_UiTableCell, { class: "text-right font-bold" }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(unref(totalExpenses).reduce((sum, item) => sum + item.total, 0).toLocaleString("ru-RU")), 1)
                                    ]),
                                    _: 2
                                  }, 1024)
                                ]),
                                _: 2
                              }, 1024)) : createCommentVNode("", true),
                              !unref(totalExpenses).length ? (openBlock(), createBlock(_component_UiTableRow, { key: 1 }, {
                                default: withCtx(() => [
                                  createVNode(_component_UiTableCell, {
                                    colspan: "2",
                                    class: "text-center"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(" \u041D\u0435\u0442 \u0434\u0430\u043D\u043D\u044B\u0445 \u043E \u0440\u0430\u0441\u0445\u043E\u0434\u0430\u0445 ")
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              })) : createCommentVNode("", true)
                            ]),
                            _: 2
                          }, 1024)
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
                                createVNode(_component_UiTableHead, null, {
                                  default: withCtx(() => [
                                    createTextVNode("\u041A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u044F")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_UiTableHead, { class: "text-right" }, {
                                  default: withCtx(() => [
                                    createTextVNode("\u0421\u0443\u043C\u043C\u0430 (\u20BD)")
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
                            (openBlock(true), createBlock(Fragment, null, renderList(unref(totalExpenses), (item) => {
                              return openBlock(), createBlock(_component_UiTableRow, {
                                key: item.category
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_UiTableCell, null, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(item.category), 1)
                                    ]),
                                    _: 2
                                  }, 1024),
                                  createVNode(_component_UiTableCell, { class: "text-right" }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(item.total.toLocaleString("ru-RU")), 1)
                                    ]),
                                    _: 2
                                  }, 1024)
                                ]),
                                _: 2
                              }, 1024);
                            }), 128)),
                            unref(totalExpenses).length ? (openBlock(), createBlock(_component_UiTableRow, { key: 0 }, {
                              default: withCtx(() => [
                                createVNode(_component_UiTableCell, { class: "font-bold" }, {
                                  default: withCtx(() => [
                                    createTextVNode("\u0418\u0442\u043E\u0433\u043E")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_UiTableCell, { class: "text-right font-bold" }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(unref(totalExpenses).reduce((sum, item) => sum + item.total, 0).toLocaleString("ru-RU")), 1)
                                  ]),
                                  _: 2
                                }, 1024)
                              ]),
                              _: 2
                            }, 1024)) : createCommentVNode("", true),
                            !unref(totalExpenses).length ? (openBlock(), createBlock(_component_UiTableRow, { key: 1 }, {
                              default: withCtx(() => [
                                createVNode(_component_UiTableCell, {
                                  colspan: "2",
                                  class: "text-center"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" \u041D\u0435\u0442 \u0434\u0430\u043D\u043D\u044B\u0445 \u043E \u0440\u0430\u0441\u0445\u043E\u0434\u0430\u0445 ")
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            })) : createCommentVNode("", true)
                          ]),
                          _: 2
                        }, 1024)
                      ]),
                      _: 2
                    }, 1024)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UiCardHeader, null, {
                default: withCtx(() => [
                  createVNode(_component_UiCardTitle, null, {
                    default: withCtx(() => [
                      createTextVNode("\u041E\u0431\u0449\u0438\u0435 \u0440\u0430\u0441\u0445\u043E\u0434\u044B")
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(_component_UiCardContent, null, {
                default: withCtx(() => [
                  createVNode(_component_UiTable, null, {
                    default: withCtx(() => [
                      createVNode(_component_UiTableHeader, null, {
                        default: withCtx(() => [
                          createVNode(_component_UiTableRow, null, {
                            default: withCtx(() => [
                              createVNode(_component_UiTableHead, null, {
                                default: withCtx(() => [
                                  createTextVNode("\u041A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u044F")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_UiTableHead, { class: "text-right" }, {
                                default: withCtx(() => [
                                  createTextVNode("\u0421\u0443\u043C\u043C\u0430 (\u20BD)")
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
                          (openBlock(true), createBlock(Fragment, null, renderList(unref(totalExpenses), (item) => {
                            return openBlock(), createBlock(_component_UiTableRow, {
                              key: item.category
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_UiTableCell, null, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(item.category), 1)
                                  ]),
                                  _: 2
                                }, 1024),
                                createVNode(_component_UiTableCell, { class: "text-right" }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(item.total.toLocaleString("ru-RU")), 1)
                                  ]),
                                  _: 2
                                }, 1024)
                              ]),
                              _: 2
                            }, 1024);
                          }), 128)),
                          unref(totalExpenses).length ? (openBlock(), createBlock(_component_UiTableRow, { key: 0 }, {
                            default: withCtx(() => [
                              createVNode(_component_UiTableCell, { class: "font-bold" }, {
                                default: withCtx(() => [
                                  createTextVNode("\u0418\u0442\u043E\u0433\u043E")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_UiTableCell, { class: "text-right font-bold" }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(unref(totalExpenses).reduce((sum, item) => sum + item.total, 0).toLocaleString("ru-RU")), 1)
                                ]),
                                _: 2
                              }, 1024)
                            ]),
                            _: 2
                          }, 1024)) : createCommentVNode("", true),
                          !unref(totalExpenses).length ? (openBlock(), createBlock(_component_UiTableRow, { key: 1 }, {
                            default: withCtx(() => [
                              createVNode(_component_UiTableCell, {
                                colspan: "2",
                                class: "text-center"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" \u041D\u0435\u0442 \u0434\u0430\u043D\u043D\u044B\u0445 \u043E \u0440\u0430\u0441\u0445\u043E\u0434\u0430\u0445 ")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })) : createCommentVNode("", true)
                        ]),
                        _: 2
                      }, 1024)
                    ]),
                    _: 2
                  }, 1024)
                ]),
                _: 2
              }, 1024)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_UiCard, { class: "w-full md:w-[calc(33%-0.25rem)]" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UiCardHeader, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UiCardTitle, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`\u0420\u0430\u0441\u0445\u043E\u0434\u044B \u043D\u0430 \u043F\u043E\u0441\u0442\u0430\u0432\u043A\u0438`);
                      } else {
                        return [
                          createTextVNode("\u0420\u0430\u0441\u0445\u043E\u0434\u044B \u043D\u0430 \u043F\u043E\u0441\u0442\u0430\u0432\u043A\u0438")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UiCardTitle, null, {
                      default: withCtx(() => [
                        createTextVNode("\u0420\u0430\u0441\u0445\u043E\u0434\u044B \u043D\u0430 \u043F\u043E\u0441\u0442\u0430\u0432\u043A\u0438")
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UiCardContent, null, {
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
                                    _push6(ssrRenderComponent(_component_UiTableHead, null, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`\u041A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u044F`);
                                        } else {
                                          return [
                                            createTextVNode("\u041A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u044F")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(_component_UiTableHead, { class: "text-right" }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`\u0421\u0443\u043C\u043C\u0430 (\u20BD)`);
                                        } else {
                                          return [
                                            createTextVNode("\u0421\u0443\u043C\u043C\u0430 (\u20BD)")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_UiTableHead, null, {
                                        default: withCtx(() => [
                                          createTextVNode("\u041A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u044F")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_UiTableHead, { class: "text-right" }, {
                                        default: withCtx(() => [
                                          createTextVNode("\u0421\u0443\u043C\u043C\u0430 (\u20BD)")
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
                                    createVNode(_component_UiTableHead, null, {
                                      default: withCtx(() => [
                                        createTextVNode("\u041A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u044F")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_UiTableHead, { class: "text-right" }, {
                                      default: withCtx(() => [
                                        createTextVNode("\u0421\u0443\u043C\u043C\u0430 (\u20BD)")
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
                              ssrRenderList(unref(suppliesByCategory), (item) => {
                                _push5(ssrRenderComponent(_component_UiTableRow, {
                                  key: item.label
                                }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(ssrRenderComponent(_component_UiTableCell, null, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`${ssrInterpolate(item.label)}`);
                                          } else {
                                            return [
                                              createTextVNode(toDisplayString(item.label), 1)
                                            ];
                                          }
                                        }),
                                        _: 2
                                      }, _parent6, _scopeId5));
                                      _push6(ssrRenderComponent(_component_UiTableCell, { class: "text-right" }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`${ssrInterpolate(item.value.toLocaleString("ru-RU"))}`);
                                          } else {
                                            return [
                                              createTextVNode(toDisplayString(item.value.toLocaleString("ru-RU")), 1)
                                            ];
                                          }
                                        }),
                                        _: 2
                                      }, _parent6, _scopeId5));
                                    } else {
                                      return [
                                        createVNode(_component_UiTableCell, null, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(item.label), 1)
                                          ]),
                                          _: 2
                                        }, 1024),
                                        createVNode(_component_UiTableCell, { class: "text-right" }, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(item.value.toLocaleString("ru-RU")), 1)
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
                              if (unref(suppliesByCategory).length) {
                                _push5(ssrRenderComponent(_component_UiTableRow, null, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(ssrRenderComponent(_component_UiTableCell, { class: "font-bold" }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`\u0418\u0442\u043E\u0433\u043E`);
                                          } else {
                                            return [
                                              createTextVNode("\u0418\u0442\u043E\u0433\u043E")
                                            ];
                                          }
                                        }),
                                        _: 1
                                      }, _parent6, _scopeId5));
                                      _push6(ssrRenderComponent(_component_UiTableCell, { class: "text-right font-bold" }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`${ssrInterpolate(unref(suppliesByCategory).reduce((sum, item) => sum + item.value, 0).toLocaleString("ru-RU"))}`);
                                          } else {
                                            return [
                                              createTextVNode(toDisplayString(unref(suppliesByCategory).reduce((sum, item) => sum + item.value, 0).toLocaleString("ru-RU")), 1)
                                            ];
                                          }
                                        }),
                                        _: 1
                                      }, _parent6, _scopeId5));
                                    } else {
                                      return [
                                        createVNode(_component_UiTableCell, { class: "font-bold" }, {
                                          default: withCtx(() => [
                                            createTextVNode("\u0418\u0442\u043E\u0433\u043E")
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(_component_UiTableCell, { class: "text-right font-bold" }, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(unref(suppliesByCategory).reduce((sum, item) => sum + item.value, 0).toLocaleString("ru-RU")), 1)
                                          ]),
                                          _: 2
                                        }, 1024)
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent5, _scopeId4));
                              } else {
                                _push5(`<!---->`);
                              }
                              if (!unref(suppliesByCategory).length) {
                                _push5(ssrRenderComponent(_component_UiTableRow, null, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(ssrRenderComponent(_component_UiTableCell, {
                                        colspan: "2",
                                        class: "text-center"
                                      }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(` \u041D\u0435\u0442 \u0434\u0430\u043D\u043D\u044B\u0445 \u043E \u043F\u043E\u0441\u0442\u0430\u0432\u043A\u0430\u0445 `);
                                          } else {
                                            return [
                                              createTextVNode(" \u041D\u0435\u0442 \u0434\u0430\u043D\u043D\u044B\u0445 \u043E \u043F\u043E\u0441\u0442\u0430\u0432\u043A\u0430\u0445 ")
                                            ];
                                          }
                                        }),
                                        _: 1
                                      }, _parent6, _scopeId5));
                                    } else {
                                      return [
                                        createVNode(_component_UiTableCell, {
                                          colspan: "2",
                                          class: "text-center"
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(" \u041D\u0435\u0442 \u0434\u0430\u043D\u043D\u044B\u0445 \u043E \u043F\u043E\u0441\u0442\u0430\u0432\u043A\u0430\u0445 ")
                                          ]),
                                          _: 1
                                        })
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent5, _scopeId4));
                              } else {
                                _push5(`<!---->`);
                              }
                            } else {
                              return [
                                (openBlock(true), createBlock(Fragment, null, renderList(unref(suppliesByCategory), (item) => {
                                  return openBlock(), createBlock(_component_UiTableRow, {
                                    key: item.label
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_UiTableCell, null, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(item.label), 1)
                                        ]),
                                        _: 2
                                      }, 1024),
                                      createVNode(_component_UiTableCell, { class: "text-right" }, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(item.value.toLocaleString("ru-RU")), 1)
                                        ]),
                                        _: 2
                                      }, 1024)
                                    ]),
                                    _: 2
                                  }, 1024);
                                }), 128)),
                                unref(suppliesByCategory).length ? (openBlock(), createBlock(_component_UiTableRow, { key: 0 }, {
                                  default: withCtx(() => [
                                    createVNode(_component_UiTableCell, { class: "font-bold" }, {
                                      default: withCtx(() => [
                                        createTextVNode("\u0418\u0442\u043E\u0433\u043E")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_UiTableCell, { class: "text-right font-bold" }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(unref(suppliesByCategory).reduce((sum, item) => sum + item.value, 0).toLocaleString("ru-RU")), 1)
                                      ]),
                                      _: 2
                                    }, 1024)
                                  ]),
                                  _: 2
                                }, 1024)) : createCommentVNode("", true),
                                !unref(suppliesByCategory).length ? (openBlock(), createBlock(_component_UiTableRow, { key: 1 }, {
                                  default: withCtx(() => [
                                    createVNode(_component_UiTableCell, {
                                      colspan: "2",
                                      class: "text-center"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(" \u041D\u0435\u0442 \u0434\u0430\u043D\u043D\u044B\u0445 \u043E \u043F\u043E\u0441\u0442\u0430\u0432\u043A\u0430\u0445 ")
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
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_UiTableHeader, null, {
                            default: withCtx(() => [
                              createVNode(_component_UiTableRow, null, {
                                default: withCtx(() => [
                                  createVNode(_component_UiTableHead, null, {
                                    default: withCtx(() => [
                                      createTextVNode("\u041A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u044F")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_UiTableHead, { class: "text-right" }, {
                                    default: withCtx(() => [
                                      createTextVNode("\u0421\u0443\u043C\u043C\u0430 (\u20BD)")
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
                              (openBlock(true), createBlock(Fragment, null, renderList(unref(suppliesByCategory), (item) => {
                                return openBlock(), createBlock(_component_UiTableRow, {
                                  key: item.label
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_UiTableCell, null, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(item.label), 1)
                                      ]),
                                      _: 2
                                    }, 1024),
                                    createVNode(_component_UiTableCell, { class: "text-right" }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(item.value.toLocaleString("ru-RU")), 1)
                                      ]),
                                      _: 2
                                    }, 1024)
                                  ]),
                                  _: 2
                                }, 1024);
                              }), 128)),
                              unref(suppliesByCategory).length ? (openBlock(), createBlock(_component_UiTableRow, { key: 0 }, {
                                default: withCtx(() => [
                                  createVNode(_component_UiTableCell, { class: "font-bold" }, {
                                    default: withCtx(() => [
                                      createTextVNode("\u0418\u0442\u043E\u0433\u043E")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_UiTableCell, { class: "text-right font-bold" }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(unref(suppliesByCategory).reduce((sum, item) => sum + item.value, 0).toLocaleString("ru-RU")), 1)
                                    ]),
                                    _: 2
                                  }, 1024)
                                ]),
                                _: 2
                              }, 1024)) : createCommentVNode("", true),
                              !unref(suppliesByCategory).length ? (openBlock(), createBlock(_component_UiTableRow, { key: 1 }, {
                                default: withCtx(() => [
                                  createVNode(_component_UiTableCell, {
                                    colspan: "2",
                                    class: "text-center"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(" \u041D\u0435\u0442 \u0434\u0430\u043D\u043D\u044B\u0445 \u043E \u043F\u043E\u0441\u0442\u0430\u0432\u043A\u0430\u0445 ")
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              })) : createCommentVNode("", true)
                            ]),
                            _: 2
                          }, 1024)
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
                                createVNode(_component_UiTableHead, null, {
                                  default: withCtx(() => [
                                    createTextVNode("\u041A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u044F")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_UiTableHead, { class: "text-right" }, {
                                  default: withCtx(() => [
                                    createTextVNode("\u0421\u0443\u043C\u043C\u0430 (\u20BD)")
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
                            (openBlock(true), createBlock(Fragment, null, renderList(unref(suppliesByCategory), (item) => {
                              return openBlock(), createBlock(_component_UiTableRow, {
                                key: item.label
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_UiTableCell, null, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(item.label), 1)
                                    ]),
                                    _: 2
                                  }, 1024),
                                  createVNode(_component_UiTableCell, { class: "text-right" }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(item.value.toLocaleString("ru-RU")), 1)
                                    ]),
                                    _: 2
                                  }, 1024)
                                ]),
                                _: 2
                              }, 1024);
                            }), 128)),
                            unref(suppliesByCategory).length ? (openBlock(), createBlock(_component_UiTableRow, { key: 0 }, {
                              default: withCtx(() => [
                                createVNode(_component_UiTableCell, { class: "font-bold" }, {
                                  default: withCtx(() => [
                                    createTextVNode("\u0418\u0442\u043E\u0433\u043E")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_UiTableCell, { class: "text-right font-bold" }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(unref(suppliesByCategory).reduce((sum, item) => sum + item.value, 0).toLocaleString("ru-RU")), 1)
                                  ]),
                                  _: 2
                                }, 1024)
                              ]),
                              _: 2
                            }, 1024)) : createCommentVNode("", true),
                            !unref(suppliesByCategory).length ? (openBlock(), createBlock(_component_UiTableRow, { key: 1 }, {
                              default: withCtx(() => [
                                createVNode(_component_UiTableCell, {
                                  colspan: "2",
                                  class: "text-center"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" \u041D\u0435\u0442 \u0434\u0430\u043D\u043D\u044B\u0445 \u043E \u043F\u043E\u0441\u0442\u0430\u0432\u043A\u0430\u0445 ")
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            })) : createCommentVNode("", true)
                          ]),
                          _: 2
                        }, 1024)
                      ]),
                      _: 2
                    }, 1024)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UiCardHeader, null, {
                default: withCtx(() => [
                  createVNode(_component_UiCardTitle, null, {
                    default: withCtx(() => [
                      createTextVNode("\u0420\u0430\u0441\u0445\u043E\u0434\u044B \u043D\u0430 \u043F\u043E\u0441\u0442\u0430\u0432\u043A\u0438")
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(_component_UiCardContent, null, {
                default: withCtx(() => [
                  createVNode(_component_UiTable, null, {
                    default: withCtx(() => [
                      createVNode(_component_UiTableHeader, null, {
                        default: withCtx(() => [
                          createVNode(_component_UiTableRow, null, {
                            default: withCtx(() => [
                              createVNode(_component_UiTableHead, null, {
                                default: withCtx(() => [
                                  createTextVNode("\u041A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u044F")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_UiTableHead, { class: "text-right" }, {
                                default: withCtx(() => [
                                  createTextVNode("\u0421\u0443\u043C\u043C\u0430 (\u20BD)")
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
                          (openBlock(true), createBlock(Fragment, null, renderList(unref(suppliesByCategory), (item) => {
                            return openBlock(), createBlock(_component_UiTableRow, {
                              key: item.label
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_UiTableCell, null, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(item.label), 1)
                                  ]),
                                  _: 2
                                }, 1024),
                                createVNode(_component_UiTableCell, { class: "text-right" }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(item.value.toLocaleString("ru-RU")), 1)
                                  ]),
                                  _: 2
                                }, 1024)
                              ]),
                              _: 2
                            }, 1024);
                          }), 128)),
                          unref(suppliesByCategory).length ? (openBlock(), createBlock(_component_UiTableRow, { key: 0 }, {
                            default: withCtx(() => [
                              createVNode(_component_UiTableCell, { class: "font-bold" }, {
                                default: withCtx(() => [
                                  createTextVNode("\u0418\u0442\u043E\u0433\u043E")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_UiTableCell, { class: "text-right font-bold" }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(unref(suppliesByCategory).reduce((sum, item) => sum + item.value, 0).toLocaleString("ru-RU")), 1)
                                ]),
                                _: 2
                              }, 1024)
                            ]),
                            _: 2
                          }, 1024)) : createCommentVNode("", true),
                          !unref(suppliesByCategory).length ? (openBlock(), createBlock(_component_UiTableRow, { key: 1 }, {
                            default: withCtx(() => [
                              createVNode(_component_UiTableCell, {
                                colspan: "2",
                                class: "text-center"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" \u041D\u0435\u0442 \u0434\u0430\u043D\u043D\u044B\u0445 \u043E \u043F\u043E\u0441\u0442\u0430\u0432\u043A\u0430\u0445 ")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })) : createCommentVNode("", true)
                        ]),
                        _: 2
                      }, 1024)
                    ]),
                    _: 2
                  }, 1024)
                ]),
                _: 2
              }, 1024)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_UiCard, { class: "w-full md:w-[calc(33%-0.25rem)]" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UiCardHeader, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UiCardTitle, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`\u0417\u0430\u0440\u043F\u043B\u0430\u0442\u044B \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0441\u0442\u0432\u0430`);
                      } else {
                        return [
                          createTextVNode("\u0417\u0430\u0440\u043F\u043B\u0430\u0442\u044B \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0441\u0442\u0432\u0430")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UiCardTitle, null, {
                      default: withCtx(() => [
                        createTextVNode("\u0417\u0430\u0440\u043F\u043B\u0430\u0442\u044B \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0441\u0442\u0432\u0430")
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UiCardContent, null, {
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
                                    _push6(ssrRenderComponent(_component_UiTableHead, null, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`\u0420\u043E\u043B\u044C`);
                                        } else {
                                          return [
                                            createTextVNode("\u0420\u043E\u043B\u044C")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(_component_UiTableHead, { class: "text-right" }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`\u0421\u0443\u043C\u043C\u0430 (\u20BD)`);
                                        } else {
                                          return [
                                            createTextVNode("\u0421\u0443\u043C\u043C\u0430 (\u20BD)")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_UiTableHead, null, {
                                        default: withCtx(() => [
                                          createTextVNode("\u0420\u043E\u043B\u044C")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_UiTableHead, { class: "text-right" }, {
                                        default: withCtx(() => [
                                          createTextVNode("\u0421\u0443\u043C\u043C\u0430 (\u20BD)")
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
                                    createVNode(_component_UiTableHead, null, {
                                      default: withCtx(() => [
                                        createTextVNode("\u0420\u043E\u043B\u044C")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_UiTableHead, { class: "text-right" }, {
                                      default: withCtx(() => [
                                        createTextVNode("\u0421\u0443\u043C\u043C\u0430 (\u20BD)")
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
                              ssrRenderList(unref(productionSalaries), (item) => {
                                _push5(ssrRenderComponent(_component_UiTableRow, {
                                  key: item.role
                                }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(ssrRenderComponent(_component_UiTableCell, null, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`${ssrInterpolate(item.role)}`);
                                          } else {
                                            return [
                                              createTextVNode(toDisplayString(item.role), 1)
                                            ];
                                          }
                                        }),
                                        _: 2
                                      }, _parent6, _scopeId5));
                                      _push6(ssrRenderComponent(_component_UiTableCell, { class: "text-right" }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`${ssrInterpolate(item.value.toLocaleString("ru-RU"))}`);
                                          } else {
                                            return [
                                              createTextVNode(toDisplayString(item.value.toLocaleString("ru-RU")), 1)
                                            ];
                                          }
                                        }),
                                        _: 2
                                      }, _parent6, _scopeId5));
                                    } else {
                                      return [
                                        createVNode(_component_UiTableCell, null, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(item.role), 1)
                                          ]),
                                          _: 2
                                        }, 1024),
                                        createVNode(_component_UiTableCell, { class: "text-right" }, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(item.value.toLocaleString("ru-RU")), 1)
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
                              if (unref(productionSalaries).length) {
                                _push5(ssrRenderComponent(_component_UiTableRow, null, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(ssrRenderComponent(_component_UiTableCell, { class: "font-bold" }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`\u0418\u0442\u043E\u0433\u043E`);
                                          } else {
                                            return [
                                              createTextVNode("\u0418\u0442\u043E\u0433\u043E")
                                            ];
                                          }
                                        }),
                                        _: 1
                                      }, _parent6, _scopeId5));
                                      _push6(ssrRenderComponent(_component_UiTableCell, { class: "text-right font-bold" }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`${ssrInterpolate(unref(productionSalaries).reduce((sum, item) => sum + item.value, 0).toLocaleString("ru-RU"))}`);
                                          } else {
                                            return [
                                              createTextVNode(toDisplayString(unref(productionSalaries).reduce((sum, item) => sum + item.value, 0).toLocaleString("ru-RU")), 1)
                                            ];
                                          }
                                        }),
                                        _: 1
                                      }, _parent6, _scopeId5));
                                    } else {
                                      return [
                                        createVNode(_component_UiTableCell, { class: "font-bold" }, {
                                          default: withCtx(() => [
                                            createTextVNode("\u0418\u0442\u043E\u0433\u043E")
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(_component_UiTableCell, { class: "text-right font-bold" }, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(unref(productionSalaries).reduce((sum, item) => sum + item.value, 0).toLocaleString("ru-RU")), 1)
                                          ]),
                                          _: 2
                                        }, 1024)
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent5, _scopeId4));
                              } else {
                                _push5(`<!---->`);
                              }
                              if (!unref(productionSalaries).length) {
                                _push5(ssrRenderComponent(_component_UiTableRow, null, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(ssrRenderComponent(_component_UiTableCell, {
                                        colspan: "2",
                                        class: "text-center"
                                      }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(` \u041D\u0435\u0442 \u0434\u0430\u043D\u043D\u044B\u0445 \u043E \u0437\u0430\u0440\u043F\u043B\u0430\u0442\u0430\u0445 `);
                                          } else {
                                            return [
                                              createTextVNode(" \u041D\u0435\u0442 \u0434\u0430\u043D\u043D\u044B\u0445 \u043E \u0437\u0430\u0440\u043F\u043B\u0430\u0442\u0430\u0445 ")
                                            ];
                                          }
                                        }),
                                        _: 1
                                      }, _parent6, _scopeId5));
                                    } else {
                                      return [
                                        createVNode(_component_UiTableCell, {
                                          colspan: "2",
                                          class: "text-center"
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(" \u041D\u0435\u0442 \u0434\u0430\u043D\u043D\u044B\u0445 \u043E \u0437\u0430\u0440\u043F\u043B\u0430\u0442\u0430\u0445 ")
                                          ]),
                                          _: 1
                                        })
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent5, _scopeId4));
                              } else {
                                _push5(`<!---->`);
                              }
                            } else {
                              return [
                                (openBlock(true), createBlock(Fragment, null, renderList(unref(productionSalaries), (item) => {
                                  return openBlock(), createBlock(_component_UiTableRow, {
                                    key: item.role
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_UiTableCell, null, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(item.role), 1)
                                        ]),
                                        _: 2
                                      }, 1024),
                                      createVNode(_component_UiTableCell, { class: "text-right" }, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(item.value.toLocaleString("ru-RU")), 1)
                                        ]),
                                        _: 2
                                      }, 1024)
                                    ]),
                                    _: 2
                                  }, 1024);
                                }), 128)),
                                unref(productionSalaries).length ? (openBlock(), createBlock(_component_UiTableRow, { key: 0 }, {
                                  default: withCtx(() => [
                                    createVNode(_component_UiTableCell, { class: "font-bold" }, {
                                      default: withCtx(() => [
                                        createTextVNode("\u0418\u0442\u043E\u0433\u043E")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_UiTableCell, { class: "text-right font-bold" }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(unref(productionSalaries).reduce((sum, item) => sum + item.value, 0).toLocaleString("ru-RU")), 1)
                                      ]),
                                      _: 2
                                    }, 1024)
                                  ]),
                                  _: 2
                                }, 1024)) : createCommentVNode("", true),
                                !unref(productionSalaries).length ? (openBlock(), createBlock(_component_UiTableRow, { key: 1 }, {
                                  default: withCtx(() => [
                                    createVNode(_component_UiTableCell, {
                                      colspan: "2",
                                      class: "text-center"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(" \u041D\u0435\u0442 \u0434\u0430\u043D\u043D\u044B\u0445 \u043E \u0437\u0430\u0440\u043F\u043B\u0430\u0442\u0430\u0445 ")
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
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_UiTableHeader, null, {
                            default: withCtx(() => [
                              createVNode(_component_UiTableRow, null, {
                                default: withCtx(() => [
                                  createVNode(_component_UiTableHead, null, {
                                    default: withCtx(() => [
                                      createTextVNode("\u0420\u043E\u043B\u044C")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_UiTableHead, { class: "text-right" }, {
                                    default: withCtx(() => [
                                      createTextVNode("\u0421\u0443\u043C\u043C\u0430 (\u20BD)")
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
                              (openBlock(true), createBlock(Fragment, null, renderList(unref(productionSalaries), (item) => {
                                return openBlock(), createBlock(_component_UiTableRow, {
                                  key: item.role
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_UiTableCell, null, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(item.role), 1)
                                      ]),
                                      _: 2
                                    }, 1024),
                                    createVNode(_component_UiTableCell, { class: "text-right" }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(item.value.toLocaleString("ru-RU")), 1)
                                      ]),
                                      _: 2
                                    }, 1024)
                                  ]),
                                  _: 2
                                }, 1024);
                              }), 128)),
                              unref(productionSalaries).length ? (openBlock(), createBlock(_component_UiTableRow, { key: 0 }, {
                                default: withCtx(() => [
                                  createVNode(_component_UiTableCell, { class: "font-bold" }, {
                                    default: withCtx(() => [
                                      createTextVNode("\u0418\u0442\u043E\u0433\u043E")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_UiTableCell, { class: "text-right font-bold" }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(unref(productionSalaries).reduce((sum, item) => sum + item.value, 0).toLocaleString("ru-RU")), 1)
                                    ]),
                                    _: 2
                                  }, 1024)
                                ]),
                                _: 2
                              }, 1024)) : createCommentVNode("", true),
                              !unref(productionSalaries).length ? (openBlock(), createBlock(_component_UiTableRow, { key: 1 }, {
                                default: withCtx(() => [
                                  createVNode(_component_UiTableCell, {
                                    colspan: "2",
                                    class: "text-center"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(" \u041D\u0435\u0442 \u0434\u0430\u043D\u043D\u044B\u0445 \u043E \u0437\u0430\u0440\u043F\u043B\u0430\u0442\u0430\u0445 ")
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              })) : createCommentVNode("", true)
                            ]),
                            _: 2
                          }, 1024)
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
                                createVNode(_component_UiTableHead, null, {
                                  default: withCtx(() => [
                                    createTextVNode("\u0420\u043E\u043B\u044C")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_UiTableHead, { class: "text-right" }, {
                                  default: withCtx(() => [
                                    createTextVNode("\u0421\u0443\u043C\u043C\u0430 (\u20BD)")
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
                            (openBlock(true), createBlock(Fragment, null, renderList(unref(productionSalaries), (item) => {
                              return openBlock(), createBlock(_component_UiTableRow, {
                                key: item.role
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_UiTableCell, null, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(item.role), 1)
                                    ]),
                                    _: 2
                                  }, 1024),
                                  createVNode(_component_UiTableCell, { class: "text-right" }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(item.value.toLocaleString("ru-RU")), 1)
                                    ]),
                                    _: 2
                                  }, 1024)
                                ]),
                                _: 2
                              }, 1024);
                            }), 128)),
                            unref(productionSalaries).length ? (openBlock(), createBlock(_component_UiTableRow, { key: 0 }, {
                              default: withCtx(() => [
                                createVNode(_component_UiTableCell, { class: "font-bold" }, {
                                  default: withCtx(() => [
                                    createTextVNode("\u0418\u0442\u043E\u0433\u043E")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_UiTableCell, { class: "text-right font-bold" }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(unref(productionSalaries).reduce((sum, item) => sum + item.value, 0).toLocaleString("ru-RU")), 1)
                                  ]),
                                  _: 2
                                }, 1024)
                              ]),
                              _: 2
                            }, 1024)) : createCommentVNode("", true),
                            !unref(productionSalaries).length ? (openBlock(), createBlock(_component_UiTableRow, { key: 1 }, {
                              default: withCtx(() => [
                                createVNode(_component_UiTableCell, {
                                  colspan: "2",
                                  class: "text-center"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" \u041D\u0435\u0442 \u0434\u0430\u043D\u043D\u044B\u0445 \u043E \u0437\u0430\u0440\u043F\u043B\u0430\u0442\u0430\u0445 ")
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            })) : createCommentVNode("", true)
                          ]),
                          _: 2
                        }, 1024)
                      ]),
                      _: 2
                    }, 1024)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UiCardHeader, null, {
                default: withCtx(() => [
                  createVNode(_component_UiCardTitle, null, {
                    default: withCtx(() => [
                      createTextVNode("\u0417\u0430\u0440\u043F\u043B\u0430\u0442\u044B \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0441\u0442\u0432\u0430")
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(_component_UiCardContent, null, {
                default: withCtx(() => [
                  createVNode(_component_UiTable, null, {
                    default: withCtx(() => [
                      createVNode(_component_UiTableHeader, null, {
                        default: withCtx(() => [
                          createVNode(_component_UiTableRow, null, {
                            default: withCtx(() => [
                              createVNode(_component_UiTableHead, null, {
                                default: withCtx(() => [
                                  createTextVNode("\u0420\u043E\u043B\u044C")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_UiTableHead, { class: "text-right" }, {
                                default: withCtx(() => [
                                  createTextVNode("\u0421\u0443\u043C\u043C\u0430 (\u20BD)")
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
                          (openBlock(true), createBlock(Fragment, null, renderList(unref(productionSalaries), (item) => {
                            return openBlock(), createBlock(_component_UiTableRow, {
                              key: item.role
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_UiTableCell, null, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(item.role), 1)
                                  ]),
                                  _: 2
                                }, 1024),
                                createVNode(_component_UiTableCell, { class: "text-right" }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(item.value.toLocaleString("ru-RU")), 1)
                                  ]),
                                  _: 2
                                }, 1024)
                              ]),
                              _: 2
                            }, 1024);
                          }), 128)),
                          unref(productionSalaries).length ? (openBlock(), createBlock(_component_UiTableRow, { key: 0 }, {
                            default: withCtx(() => [
                              createVNode(_component_UiTableCell, { class: "font-bold" }, {
                                default: withCtx(() => [
                                  createTextVNode("\u0418\u0442\u043E\u0433\u043E")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_UiTableCell, { class: "text-right font-bold" }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(unref(productionSalaries).reduce((sum, item) => sum + item.value, 0).toLocaleString("ru-RU")), 1)
                                ]),
                                _: 2
                              }, 1024)
                            ]),
                            _: 2
                          }, 1024)) : createCommentVNode("", true),
                          !unref(productionSalaries).length ? (openBlock(), createBlock(_component_UiTableRow, { key: 1 }, {
                            default: withCtx(() => [
                              createVNode(_component_UiTableCell, {
                                colspan: "2",
                                class: "text-center"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" \u041D\u0435\u0442 \u0434\u0430\u043D\u043D\u044B\u0445 \u043E \u0437\u0430\u0440\u043F\u043B\u0430\u0442\u0430\u0445 ")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })) : createCommentVNode("", true)
                        ]),
                        _: 2
                      }, 1024)
                    ]),
                    _: 2
                  }, 1024)
                ]),
                _: 2
              }, 1024)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_UiCard, { class: "w-full md:w-[calc(33%-0.25rem)]" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UiCardHeader, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UiCardTitle, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`\u0417\u0430\u0440\u043F\u043B\u0430\u0442\u044B \u043A\u043E\u043C\u043C\u0435\u0440\u0447\u0435\u0441\u043A\u043E\u0433\u043E \u043E\u0442\u0434\u0435\u043B\u0430`);
                      } else {
                        return [
                          createTextVNode("\u0417\u0430\u0440\u043F\u043B\u0430\u0442\u044B \u043A\u043E\u043C\u043C\u0435\u0440\u0447\u0435\u0441\u043A\u043E\u0433\u043E \u043E\u0442\u0434\u0435\u043B\u0430")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UiCardTitle, null, {
                      default: withCtx(() => [
                        createTextVNode("\u0417\u0430\u0440\u043F\u043B\u0430\u0442\u044B \u043A\u043E\u043C\u043C\u0435\u0440\u0447\u0435\u0441\u043A\u043E\u0433\u043E \u043E\u0442\u0434\u0435\u043B\u0430")
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UiCardContent, null, {
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
                                    _push6(ssrRenderComponent(_component_UiTableHead, null, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`\u0420\u043E\u043B\u044C`);
                                        } else {
                                          return [
                                            createTextVNode("\u0420\u043E\u043B\u044C")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(_component_UiTableHead, { class: "text-right" }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`\u0421\u0443\u043C\u043C\u0430 (\u20BD)`);
                                        } else {
                                          return [
                                            createTextVNode("\u0421\u0443\u043C\u043C\u0430 (\u20BD)")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_UiTableHead, null, {
                                        default: withCtx(() => [
                                          createTextVNode("\u0420\u043E\u043B\u044C")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_UiTableHead, { class: "text-right" }, {
                                        default: withCtx(() => [
                                          createTextVNode("\u0421\u0443\u043C\u043C\u0430 (\u20BD)")
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
                                    createVNode(_component_UiTableHead, null, {
                                      default: withCtx(() => [
                                        createTextVNode("\u0420\u043E\u043B\u044C")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_UiTableHead, { class: "text-right" }, {
                                      default: withCtx(() => [
                                        createTextVNode("\u0421\u0443\u043C\u043C\u0430 (\u20BD)")
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
                              ssrRenderList(unref(commercialSalaries), (item) => {
                                _push5(ssrRenderComponent(_component_UiTableRow, {
                                  key: item.role
                                }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(ssrRenderComponent(_component_UiTableCell, null, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`${ssrInterpolate(item.role)}`);
                                          } else {
                                            return [
                                              createTextVNode(toDisplayString(item.role), 1)
                                            ];
                                          }
                                        }),
                                        _: 2
                                      }, _parent6, _scopeId5));
                                      _push6(ssrRenderComponent(_component_UiTableCell, { class: "text-right" }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`${ssrInterpolate(item.value.toLocaleString("ru-RU"))}`);
                                          } else {
                                            return [
                                              createTextVNode(toDisplayString(item.value.toLocaleString("ru-RU")), 1)
                                            ];
                                          }
                                        }),
                                        _: 2
                                      }, _parent6, _scopeId5));
                                    } else {
                                      return [
                                        createVNode(_component_UiTableCell, null, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(item.role), 1)
                                          ]),
                                          _: 2
                                        }, 1024),
                                        createVNode(_component_UiTableCell, { class: "text-right" }, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(item.value.toLocaleString("ru-RU")), 1)
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
                              if (unref(commercialSalaries).length) {
                                _push5(ssrRenderComponent(_component_UiTableRow, null, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(ssrRenderComponent(_component_UiTableCell, { class: "font-bold" }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`\u0418\u0442\u043E\u0433\u043E`);
                                          } else {
                                            return [
                                              createTextVNode("\u0418\u0442\u043E\u0433\u043E")
                                            ];
                                          }
                                        }),
                                        _: 1
                                      }, _parent6, _scopeId5));
                                      _push6(ssrRenderComponent(_component_UiTableCell, { class: "text-right font-bold" }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`${ssrInterpolate(unref(commercialSalaries).reduce((sum, item) => sum + item.value, 0).toLocaleString("ru-RU"))}`);
                                          } else {
                                            return [
                                              createTextVNode(toDisplayString(unref(commercialSalaries).reduce((sum, item) => sum + item.value, 0).toLocaleString("ru-RU")), 1)
                                            ];
                                          }
                                        }),
                                        _: 1
                                      }, _parent6, _scopeId5));
                                    } else {
                                      return [
                                        createVNode(_component_UiTableCell, { class: "font-bold" }, {
                                          default: withCtx(() => [
                                            createTextVNode("\u0418\u0442\u043E\u0433\u043E")
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(_component_UiTableCell, { class: "text-right font-bold" }, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(unref(commercialSalaries).reduce((sum, item) => sum + item.value, 0).toLocaleString("ru-RU")), 1)
                                          ]),
                                          _: 2
                                        }, 1024)
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent5, _scopeId4));
                              } else {
                                _push5(`<!---->`);
                              }
                              if (!unref(commercialSalaries).length) {
                                _push5(ssrRenderComponent(_component_UiTableRow, null, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(ssrRenderComponent(_component_UiTableCell, {
                                        colspan: "2",
                                        class: "text-center"
                                      }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(` \u041D\u0435\u0442 \u0434\u0430\u043D\u043D\u044B\u0445 \u043E \u0437\u0430\u0440\u043F\u043B\u0430\u0442\u0430\u0445 `);
                                          } else {
                                            return [
                                              createTextVNode(" \u041D\u0435\u0442 \u0434\u0430\u043D\u043D\u044B\u0445 \u043E \u0437\u0430\u0440\u043F\u043B\u0430\u0442\u0430\u0445 ")
                                            ];
                                          }
                                        }),
                                        _: 1
                                      }, _parent6, _scopeId5));
                                    } else {
                                      return [
                                        createVNode(_component_UiTableCell, {
                                          colspan: "2",
                                          class: "text-center"
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(" \u041D\u0435\u0442 \u0434\u0430\u043D\u043D\u044B\u0445 \u043E \u0437\u0430\u0440\u043F\u043B\u0430\u0442\u0430\u0445 ")
                                          ]),
                                          _: 1
                                        })
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent5, _scopeId4));
                              } else {
                                _push5(`<!---->`);
                              }
                            } else {
                              return [
                                (openBlock(true), createBlock(Fragment, null, renderList(unref(commercialSalaries), (item) => {
                                  return openBlock(), createBlock(_component_UiTableRow, {
                                    key: item.role
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_UiTableCell, null, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(item.role), 1)
                                        ]),
                                        _: 2
                                      }, 1024),
                                      createVNode(_component_UiTableCell, { class: "text-right" }, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(item.value.toLocaleString("ru-RU")), 1)
                                        ]),
                                        _: 2
                                      }, 1024)
                                    ]),
                                    _: 2
                                  }, 1024);
                                }), 128)),
                                unref(commercialSalaries).length ? (openBlock(), createBlock(_component_UiTableRow, { key: 0 }, {
                                  default: withCtx(() => [
                                    createVNode(_component_UiTableCell, { class: "font-bold" }, {
                                      default: withCtx(() => [
                                        createTextVNode("\u0418\u0442\u043E\u0433\u043E")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_UiTableCell, { class: "text-right font-bold" }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(unref(commercialSalaries).reduce((sum, item) => sum + item.value, 0).toLocaleString("ru-RU")), 1)
                                      ]),
                                      _: 2
                                    }, 1024)
                                  ]),
                                  _: 2
                                }, 1024)) : createCommentVNode("", true),
                                !unref(commercialSalaries).length ? (openBlock(), createBlock(_component_UiTableRow, { key: 1 }, {
                                  default: withCtx(() => [
                                    createVNode(_component_UiTableCell, {
                                      colspan: "2",
                                      class: "text-center"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(" \u041D\u0435\u0442 \u0434\u0430\u043D\u043D\u044B\u0445 \u043E \u0437\u0430\u0440\u043F\u043B\u0430\u0442\u0430\u0445 ")
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
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_UiTableHeader, null, {
                            default: withCtx(() => [
                              createVNode(_component_UiTableRow, null, {
                                default: withCtx(() => [
                                  createVNode(_component_UiTableHead, null, {
                                    default: withCtx(() => [
                                      createTextVNode("\u0420\u043E\u043B\u044C")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_UiTableHead, { class: "text-right" }, {
                                    default: withCtx(() => [
                                      createTextVNode("\u0421\u0443\u043C\u043C\u0430 (\u20BD)")
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
                              (openBlock(true), createBlock(Fragment, null, renderList(unref(commercialSalaries), (item) => {
                                return openBlock(), createBlock(_component_UiTableRow, {
                                  key: item.role
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_UiTableCell, null, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(item.role), 1)
                                      ]),
                                      _: 2
                                    }, 1024),
                                    createVNode(_component_UiTableCell, { class: "text-right" }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(item.value.toLocaleString("ru-RU")), 1)
                                      ]),
                                      _: 2
                                    }, 1024)
                                  ]),
                                  _: 2
                                }, 1024);
                              }), 128)),
                              unref(commercialSalaries).length ? (openBlock(), createBlock(_component_UiTableRow, { key: 0 }, {
                                default: withCtx(() => [
                                  createVNode(_component_UiTableCell, { class: "font-bold" }, {
                                    default: withCtx(() => [
                                      createTextVNode("\u0418\u0442\u043E\u0433\u043E")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_UiTableCell, { class: "text-right font-bold" }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(unref(commercialSalaries).reduce((sum, item) => sum + item.value, 0).toLocaleString("ru-RU")), 1)
                                    ]),
                                    _: 2
                                  }, 1024)
                                ]),
                                _: 2
                              }, 1024)) : createCommentVNode("", true),
                              !unref(commercialSalaries).length ? (openBlock(), createBlock(_component_UiTableRow, { key: 1 }, {
                                default: withCtx(() => [
                                  createVNode(_component_UiTableCell, {
                                    colspan: "2",
                                    class: "text-center"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(" \u041D\u0435\u0442 \u0434\u0430\u043D\u043D\u044B\u0445 \u043E \u0437\u0430\u0440\u043F\u043B\u0430\u0442\u0430\u0445 ")
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              })) : createCommentVNode("", true)
                            ]),
                            _: 2
                          }, 1024)
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
                                createVNode(_component_UiTableHead, null, {
                                  default: withCtx(() => [
                                    createTextVNode("\u0420\u043E\u043B\u044C")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_UiTableHead, { class: "text-right" }, {
                                  default: withCtx(() => [
                                    createTextVNode("\u0421\u0443\u043C\u043C\u0430 (\u20BD)")
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
                            (openBlock(true), createBlock(Fragment, null, renderList(unref(commercialSalaries), (item) => {
                              return openBlock(), createBlock(_component_UiTableRow, {
                                key: item.role
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_UiTableCell, null, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(item.role), 1)
                                    ]),
                                    _: 2
                                  }, 1024),
                                  createVNode(_component_UiTableCell, { class: "text-right" }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(item.value.toLocaleString("ru-RU")), 1)
                                    ]),
                                    _: 2
                                  }, 1024)
                                ]),
                                _: 2
                              }, 1024);
                            }), 128)),
                            unref(commercialSalaries).length ? (openBlock(), createBlock(_component_UiTableRow, { key: 0 }, {
                              default: withCtx(() => [
                                createVNode(_component_UiTableCell, { class: "font-bold" }, {
                                  default: withCtx(() => [
                                    createTextVNode("\u0418\u0442\u043E\u0433\u043E")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_UiTableCell, { class: "text-right font-bold" }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(unref(commercialSalaries).reduce((sum, item) => sum + item.value, 0).toLocaleString("ru-RU")), 1)
                                  ]),
                                  _: 2
                                }, 1024)
                              ]),
                              _: 2
                            }, 1024)) : createCommentVNode("", true),
                            !unref(commercialSalaries).length ? (openBlock(), createBlock(_component_UiTableRow, { key: 1 }, {
                              default: withCtx(() => [
                                createVNode(_component_UiTableCell, {
                                  colspan: "2",
                                  class: "text-center"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" \u041D\u0435\u0442 \u0434\u0430\u043D\u043D\u044B\u0445 \u043E \u0437\u0430\u0440\u043F\u043B\u0430\u0442\u0430\u0445 ")
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            })) : createCommentVNode("", true)
                          ]),
                          _: 2
                        }, 1024)
                      ]),
                      _: 2
                    }, 1024)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UiCardHeader, null, {
                default: withCtx(() => [
                  createVNode(_component_UiCardTitle, null, {
                    default: withCtx(() => [
                      createTextVNode("\u0417\u0430\u0440\u043F\u043B\u0430\u0442\u044B \u043A\u043E\u043C\u043C\u0435\u0440\u0447\u0435\u0441\u043A\u043E\u0433\u043E \u043E\u0442\u0434\u0435\u043B\u0430")
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(_component_UiCardContent, null, {
                default: withCtx(() => [
                  createVNode(_component_UiTable, null, {
                    default: withCtx(() => [
                      createVNode(_component_UiTableHeader, null, {
                        default: withCtx(() => [
                          createVNode(_component_UiTableRow, null, {
                            default: withCtx(() => [
                              createVNode(_component_UiTableHead, null, {
                                default: withCtx(() => [
                                  createTextVNode("\u0420\u043E\u043B\u044C")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_UiTableHead, { class: "text-right" }, {
                                default: withCtx(() => [
                                  createTextVNode("\u0421\u0443\u043C\u043C\u0430 (\u20BD)")
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
                          (openBlock(true), createBlock(Fragment, null, renderList(unref(commercialSalaries), (item) => {
                            return openBlock(), createBlock(_component_UiTableRow, {
                              key: item.role
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_UiTableCell, null, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(item.role), 1)
                                  ]),
                                  _: 2
                                }, 1024),
                                createVNode(_component_UiTableCell, { class: "text-right" }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(item.value.toLocaleString("ru-RU")), 1)
                                  ]),
                                  _: 2
                                }, 1024)
                              ]),
                              _: 2
                            }, 1024);
                          }), 128)),
                          unref(commercialSalaries).length ? (openBlock(), createBlock(_component_UiTableRow, { key: 0 }, {
                            default: withCtx(() => [
                              createVNode(_component_UiTableCell, { class: "font-bold" }, {
                                default: withCtx(() => [
                                  createTextVNode("\u0418\u0442\u043E\u0433\u043E")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_UiTableCell, { class: "text-right font-bold" }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(unref(commercialSalaries).reduce((sum, item) => sum + item.value, 0).toLocaleString("ru-RU")), 1)
                                ]),
                                _: 2
                              }, 1024)
                            ]),
                            _: 2
                          }, 1024)) : createCommentVNode("", true),
                          !unref(commercialSalaries).length ? (openBlock(), createBlock(_component_UiTableRow, { key: 1 }, {
                            default: withCtx(() => [
                              createVNode(_component_UiTableCell, {
                                colspan: "2",
                                class: "text-center"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" \u041D\u0435\u0442 \u0434\u0430\u043D\u043D\u044B\u0445 \u043E \u0437\u0430\u0440\u043F\u043B\u0430\u0442\u0430\u0445 ")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })) : createCommentVNode("", true)
                        ]),
                        _: 2
                      }, 1024)
                    ]),
                    _: 2
                  }, 1024)
                ]),
                _: 2
              }, 1024)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_UiCard, { class: "w-full md:w-[calc(33%-0.25rem)]" }, {
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
                } else {
                  return [
                    createVNode(_component_UiCardTitle, null, {
                      default: withCtx(() => [
                        createTextVNode("\u0420\u0430\u0441\u0445\u043E\u0434\u044B \u043D\u0430 \u0440\u0435\u043A\u043B\u0430\u043C\u0443")
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UiCardContent, null, {
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
                                    _push6(ssrRenderComponent(_component_UiTableHead, null, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`\u0418\u0441\u0442\u043E\u0447\u043D\u0438\u043A`);
                                        } else {
                                          return [
                                            createTextVNode("\u0418\u0441\u0442\u043E\u0447\u043D\u0438\u043A")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(_component_UiTableHead, { class: "text-right" }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`\u0421\u0443\u043C\u043C\u0430 (\u20BD)`);
                                        } else {
                                          return [
                                            createTextVNode("\u0421\u0443\u043C\u043C\u0430 (\u20BD)")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_UiTableHead, null, {
                                        default: withCtx(() => [
                                          createTextVNode("\u0418\u0441\u0442\u043E\u0447\u043D\u0438\u043A")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_UiTableHead, { class: "text-right" }, {
                                        default: withCtx(() => [
                                          createTextVNode("\u0421\u0443\u043C\u043C\u0430 (\u20BD)")
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
                                    createVNode(_component_UiTableHead, null, {
                                      default: withCtx(() => [
                                        createTextVNode("\u0418\u0441\u0442\u043E\u0447\u043D\u0438\u043A")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_UiTableHead, { class: "text-right" }, {
                                      default: withCtx(() => [
                                        createTextVNode("\u0421\u0443\u043C\u043C\u0430 (\u20BD)")
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
                              ssrRenderList(unref(adExpensesBySource), (item) => {
                                _push5(ssrRenderComponent(_component_UiTableRow, {
                                  key: item.source
                                }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(ssrRenderComponent(_component_UiTableCell, null, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`${ssrInterpolate(item.source)}`);
                                          } else {
                                            return [
                                              createTextVNode(toDisplayString(item.source), 1)
                                            ];
                                          }
                                        }),
                                        _: 2
                                      }, _parent6, _scopeId5));
                                      _push6(ssrRenderComponent(_component_UiTableCell, { class: "text-right" }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`${ssrInterpolate(item.value.toLocaleString("ru-RU"))}`);
                                          } else {
                                            return [
                                              createTextVNode(toDisplayString(item.value.toLocaleString("ru-RU")), 1)
                                            ];
                                          }
                                        }),
                                        _: 2
                                      }, _parent6, _scopeId5));
                                    } else {
                                      return [
                                        createVNode(_component_UiTableCell, null, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(item.source), 1)
                                          ]),
                                          _: 2
                                        }, 1024),
                                        createVNode(_component_UiTableCell, { class: "text-right" }, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(item.value.toLocaleString("ru-RU")), 1)
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
                              if (unref(adExpensesBySource).length) {
                                _push5(ssrRenderComponent(_component_UiTableRow, null, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(ssrRenderComponent(_component_UiTableCell, { class: "font-bold" }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`\u0418\u0442\u043E\u0433\u043E`);
                                          } else {
                                            return [
                                              createTextVNode("\u0418\u0442\u043E\u0433\u043E")
                                            ];
                                          }
                                        }),
                                        _: 1
                                      }, _parent6, _scopeId5));
                                      _push6(ssrRenderComponent(_component_UiTableCell, { class: "text-right font-bold" }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`${ssrInterpolate(unref(adExpensesBySource).reduce((sum, item) => sum + item.value, 0).toLocaleString("ru-RU"))}`);
                                          } else {
                                            return [
                                              createTextVNode(toDisplayString(unref(adExpensesBySource).reduce((sum, item) => sum + item.value, 0).toLocaleString("ru-RU")), 1)
                                            ];
                                          }
                                        }),
                                        _: 1
                                      }, _parent6, _scopeId5));
                                    } else {
                                      return [
                                        createVNode(_component_UiTableCell, { class: "font-bold" }, {
                                          default: withCtx(() => [
                                            createTextVNode("\u0418\u0442\u043E\u0433\u043E")
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(_component_UiTableCell, { class: "text-right font-bold" }, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(unref(adExpensesBySource).reduce((sum, item) => sum + item.value, 0).toLocaleString("ru-RU")), 1)
                                          ]),
                                          _: 2
                                        }, 1024)
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent5, _scopeId4));
                              } else {
                                _push5(`<!---->`);
                              }
                              if (!unref(adExpensesBySource).length) {
                                _push5(ssrRenderComponent(_component_UiTableRow, null, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(ssrRenderComponent(_component_UiTableCell, {
                                        colspan: "2",
                                        class: "text-center"
                                      }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(` \u041D\u0435\u0442 \u0434\u0430\u043D\u043D\u044B\u0445 \u043E \u0440\u0430\u0441\u0445\u043E\u0434\u0430\u0445 \u043D\u0430 \u0440\u0435\u043A\u043B\u0430\u043C\u0443 `);
                                          } else {
                                            return [
                                              createTextVNode(" \u041D\u0435\u0442 \u0434\u0430\u043D\u043D\u044B\u0445 \u043E \u0440\u0430\u0441\u0445\u043E\u0434\u0430\u0445 \u043D\u0430 \u0440\u0435\u043A\u043B\u0430\u043C\u0443 ")
                                            ];
                                          }
                                        }),
                                        _: 1
                                      }, _parent6, _scopeId5));
                                    } else {
                                      return [
                                        createVNode(_component_UiTableCell, {
                                          colspan: "2",
                                          class: "text-center"
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(" \u041D\u0435\u0442 \u0434\u0430\u043D\u043D\u044B\u0445 \u043E \u0440\u0430\u0441\u0445\u043E\u0434\u0430\u0445 \u043D\u0430 \u0440\u0435\u043A\u043B\u0430\u043C\u0443 ")
                                          ]),
                                          _: 1
                                        })
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent5, _scopeId4));
                              } else {
                                _push5(`<!---->`);
                              }
                            } else {
                              return [
                                (openBlock(true), createBlock(Fragment, null, renderList(unref(adExpensesBySource), (item) => {
                                  return openBlock(), createBlock(_component_UiTableRow, {
                                    key: item.source
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_UiTableCell, null, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(item.source), 1)
                                        ]),
                                        _: 2
                                      }, 1024),
                                      createVNode(_component_UiTableCell, { class: "text-right" }, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(item.value.toLocaleString("ru-RU")), 1)
                                        ]),
                                        _: 2
                                      }, 1024)
                                    ]),
                                    _: 2
                                  }, 1024);
                                }), 128)),
                                unref(adExpensesBySource).length ? (openBlock(), createBlock(_component_UiTableRow, { key: 0 }, {
                                  default: withCtx(() => [
                                    createVNode(_component_UiTableCell, { class: "font-bold" }, {
                                      default: withCtx(() => [
                                        createTextVNode("\u0418\u0442\u043E\u0433\u043E")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_UiTableCell, { class: "text-right font-bold" }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(unref(adExpensesBySource).reduce((sum, item) => sum + item.value, 0).toLocaleString("ru-RU")), 1)
                                      ]),
                                      _: 2
                                    }, 1024)
                                  ]),
                                  _: 2
                                }, 1024)) : createCommentVNode("", true),
                                !unref(adExpensesBySource).length ? (openBlock(), createBlock(_component_UiTableRow, { key: 1 }, {
                                  default: withCtx(() => [
                                    createVNode(_component_UiTableCell, {
                                      colspan: "2",
                                      class: "text-center"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(" \u041D\u0435\u0442 \u0434\u0430\u043D\u043D\u044B\u0445 \u043E \u0440\u0430\u0441\u0445\u043E\u0434\u0430\u0445 \u043D\u0430 \u0440\u0435\u043A\u043B\u0430\u043C\u0443 ")
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
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_UiTableHeader, null, {
                            default: withCtx(() => [
                              createVNode(_component_UiTableRow, null, {
                                default: withCtx(() => [
                                  createVNode(_component_UiTableHead, null, {
                                    default: withCtx(() => [
                                      createTextVNode("\u0418\u0441\u0442\u043E\u0447\u043D\u0438\u043A")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_UiTableHead, { class: "text-right" }, {
                                    default: withCtx(() => [
                                      createTextVNode("\u0421\u0443\u043C\u043C\u0430 (\u20BD)")
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
                              (openBlock(true), createBlock(Fragment, null, renderList(unref(adExpensesBySource), (item) => {
                                return openBlock(), createBlock(_component_UiTableRow, {
                                  key: item.source
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_UiTableCell, null, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(item.source), 1)
                                      ]),
                                      _: 2
                                    }, 1024),
                                    createVNode(_component_UiTableCell, { class: "text-right" }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(item.value.toLocaleString("ru-RU")), 1)
                                      ]),
                                      _: 2
                                    }, 1024)
                                  ]),
                                  _: 2
                                }, 1024);
                              }), 128)),
                              unref(adExpensesBySource).length ? (openBlock(), createBlock(_component_UiTableRow, { key: 0 }, {
                                default: withCtx(() => [
                                  createVNode(_component_UiTableCell, { class: "font-bold" }, {
                                    default: withCtx(() => [
                                      createTextVNode("\u0418\u0442\u043E\u0433\u043E")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_UiTableCell, { class: "text-right font-bold" }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(unref(adExpensesBySource).reduce((sum, item) => sum + item.value, 0).toLocaleString("ru-RU")), 1)
                                    ]),
                                    _: 2
                                  }, 1024)
                                ]),
                                _: 2
                              }, 1024)) : createCommentVNode("", true),
                              !unref(adExpensesBySource).length ? (openBlock(), createBlock(_component_UiTableRow, { key: 1 }, {
                                default: withCtx(() => [
                                  createVNode(_component_UiTableCell, {
                                    colspan: "2",
                                    class: "text-center"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(" \u041D\u0435\u0442 \u0434\u0430\u043D\u043D\u044B\u0445 \u043E \u0440\u0430\u0441\u0445\u043E\u0434\u0430\u0445 \u043D\u0430 \u0440\u0435\u043A\u043B\u0430\u043C\u0443 ")
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              })) : createCommentVNode("", true)
                            ]),
                            _: 2
                          }, 1024)
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
                                createVNode(_component_UiTableHead, null, {
                                  default: withCtx(() => [
                                    createTextVNode("\u0418\u0441\u0442\u043E\u0447\u043D\u0438\u043A")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_UiTableHead, { class: "text-right" }, {
                                  default: withCtx(() => [
                                    createTextVNode("\u0421\u0443\u043C\u043C\u0430 (\u20BD)")
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
                            (openBlock(true), createBlock(Fragment, null, renderList(unref(adExpensesBySource), (item) => {
                              return openBlock(), createBlock(_component_UiTableRow, {
                                key: item.source
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_UiTableCell, null, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(item.source), 1)
                                    ]),
                                    _: 2
                                  }, 1024),
                                  createVNode(_component_UiTableCell, { class: "text-right" }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(item.value.toLocaleString("ru-RU")), 1)
                                    ]),
                                    _: 2
                                  }, 1024)
                                ]),
                                _: 2
                              }, 1024);
                            }), 128)),
                            unref(adExpensesBySource).length ? (openBlock(), createBlock(_component_UiTableRow, { key: 0 }, {
                              default: withCtx(() => [
                                createVNode(_component_UiTableCell, { class: "font-bold" }, {
                                  default: withCtx(() => [
                                    createTextVNode("\u0418\u0442\u043E\u0433\u043E")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_UiTableCell, { class: "text-right font-bold" }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(unref(adExpensesBySource).reduce((sum, item) => sum + item.value, 0).toLocaleString("ru-RU")), 1)
                                  ]),
                                  _: 2
                                }, 1024)
                              ]),
                              _: 2
                            }, 1024)) : createCommentVNode("", true),
                            !unref(adExpensesBySource).length ? (openBlock(), createBlock(_component_UiTableRow, { key: 1 }, {
                              default: withCtx(() => [
                                createVNode(_component_UiTableCell, {
                                  colspan: "2",
                                  class: "text-center"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" \u041D\u0435\u0442 \u0434\u0430\u043D\u043D\u044B\u0445 \u043E \u0440\u0430\u0441\u0445\u043E\u0434\u0430\u0445 \u043D\u0430 \u0440\u0435\u043A\u043B\u0430\u043C\u0443 ")
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            })) : createCommentVNode("", true)
                          ]),
                          _: 2
                        }, 1024)
                      ]),
                      _: 2
                    }, 1024)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UiCardHeader, null, {
                default: withCtx(() => [
                  createVNode(_component_UiCardTitle, null, {
                    default: withCtx(() => [
                      createTextVNode("\u0420\u0430\u0441\u0445\u043E\u0434\u044B \u043D\u0430 \u0440\u0435\u043A\u043B\u0430\u043C\u0443")
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(_component_UiCardContent, null, {
                default: withCtx(() => [
                  createVNode(_component_UiTable, null, {
                    default: withCtx(() => [
                      createVNode(_component_UiTableHeader, null, {
                        default: withCtx(() => [
                          createVNode(_component_UiTableRow, null, {
                            default: withCtx(() => [
                              createVNode(_component_UiTableHead, null, {
                                default: withCtx(() => [
                                  createTextVNode("\u0418\u0441\u0442\u043E\u0447\u043D\u0438\u043A")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_UiTableHead, { class: "text-right" }, {
                                default: withCtx(() => [
                                  createTextVNode("\u0421\u0443\u043C\u043C\u0430 (\u20BD)")
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
                          (openBlock(true), createBlock(Fragment, null, renderList(unref(adExpensesBySource), (item) => {
                            return openBlock(), createBlock(_component_UiTableRow, {
                              key: item.source
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_UiTableCell, null, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(item.source), 1)
                                  ]),
                                  _: 2
                                }, 1024),
                                createVNode(_component_UiTableCell, { class: "text-right" }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(item.value.toLocaleString("ru-RU")), 1)
                                  ]),
                                  _: 2
                                }, 1024)
                              ]),
                              _: 2
                            }, 1024);
                          }), 128)),
                          unref(adExpensesBySource).length ? (openBlock(), createBlock(_component_UiTableRow, { key: 0 }, {
                            default: withCtx(() => [
                              createVNode(_component_UiTableCell, { class: "font-bold" }, {
                                default: withCtx(() => [
                                  createTextVNode("\u0418\u0442\u043E\u0433\u043E")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_UiTableCell, { class: "text-right font-bold" }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(unref(adExpensesBySource).reduce((sum, item) => sum + item.value, 0).toLocaleString("ru-RU")), 1)
                                ]),
                                _: 2
                              }, 1024)
                            ]),
                            _: 2
                          }, 1024)) : createCommentVNode("", true),
                          !unref(adExpensesBySource).length ? (openBlock(), createBlock(_component_UiTableRow, { key: 1 }, {
                            default: withCtx(() => [
                              createVNode(_component_UiTableCell, {
                                colspan: "2",
                                class: "text-center"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" \u041D\u0435\u0442 \u0434\u0430\u043D\u043D\u044B\u0445 \u043E \u0440\u0430\u0441\u0445\u043E\u0434\u0430\u0445 \u043D\u0430 \u0440\u0435\u043A\u043B\u0430\u043C\u0443 ")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })) : createCommentVNode("", true)
                        ]),
                        _: 2
                      }, 1024)
                    ]),
                    _: 2
                  }, 1024)
                ]),
                _: 2
              }, 1024)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/my/planfact/PL.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "\u041F\u043B\u0430\u043D\u0424\u0430\u043A\u0442 | Easy CRM"
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_LayoutSidebar = _sfc_main$9;
      const _component_UiTabs = _sfc_main$2$1;
      const _component_UiTabsList = _sfc_main$a;
      const _component_UiTabsTrigger = _sfc_main$1$1;
      const _component_UiTabsContent = _sfc_main$b;
      const _component_MyPlanfactAccounts = _sfc_main$7;
      const _component_MyPlanfactOperations = _sfc_main$3;
      const _component_MyPlanfactCategories = _sfc_main$2;
      const _component_MyPlanfactPL = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative h-screen hidden-scrollbar" }, _attrs))}><div class="w-full fixed z-10">`);
      _push(ssrRenderComponent(_component_LayoutSidebar, null, null, _parent));
      _push(`</div><div class="h-full flex flex-col p-4 gap-2 mx-[auto] max-w-[2048px] pt-16 min-w-[1024px]"><div class="flex items-center gap-2 w-full">`);
      _push(ssrRenderComponent(_component_UiTabs, {
        "default-value": "pl",
        class: "w-full"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UiTabsList, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UiTabsTrigger, { value: "\u041E\u043F\u0435\u0440\u0430\u0446\u0438\u0438" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`\u041E\u043F\u0435\u0440\u0430\u0446\u0438\u0438`);
                      } else {
                        return [
                          createTextVNode("\u041E\u043F\u0435\u0440\u0430\u0446\u0438\u0438")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_UiTabsTrigger, { value: "pl" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`P&amp;L`);
                      } else {
                        return [
                          createTextVNode("P&L")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UiTabsTrigger, { value: "\u041E\u043F\u0435\u0440\u0430\u0446\u0438\u0438" }, {
                      default: withCtx(() => [
                        createTextVNode("\u041E\u043F\u0435\u0440\u0430\u0446\u0438\u0438")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_UiTabsTrigger, { value: "pl" }, {
                      default: withCtx(() => [
                        createTextVNode("P&L")
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UiTabsContent, { value: "\u0421\u0447\u0435\u0442\u0430" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_MyPlanfactAccounts, null, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_MyPlanfactAccounts)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UiTabsContent, { value: "\u041E\u043F\u0435\u0440\u0430\u0446\u0438\u0438" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_MyPlanfactOperations, null, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_MyPlanfactOperations)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UiTabsContent, { value: "\u0423\u0447\u0435\u0442\u043D\u044B\u0435 \u0441\u0442\u0430\u0442\u044C\u0438" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_MyPlanfactCategories, null, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_MyPlanfactCategories)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UiTabsContent, { value: "pl" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_MyPlanfactPL, null, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_MyPlanfactPL)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UiTabsList, null, {
                default: withCtx(() => [
                  createVNode(_component_UiTabsTrigger, { value: "\u041E\u043F\u0435\u0440\u0430\u0446\u0438\u0438" }, {
                    default: withCtx(() => [
                      createTextVNode("\u041E\u043F\u0435\u0440\u0430\u0446\u0438\u0438")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_UiTabsTrigger, { value: "pl" }, {
                    default: withCtx(() => [
                      createTextVNode("P&L")
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(_component_UiTabsContent, { value: "\u0421\u0447\u0435\u0442\u0430" }, {
                default: withCtx(() => [
                  createVNode(_component_MyPlanfactAccounts)
                ]),
                _: 1
              }),
              createVNode(_component_UiTabsContent, { value: "\u041E\u043F\u0435\u0440\u0430\u0446\u0438\u0438" }, {
                default: withCtx(() => [
                  createVNode(_component_MyPlanfactOperations)
                ]),
                _: 1
              }),
              createVNode(_component_UiTabsContent, { value: "\u0423\u0447\u0435\u0442\u043D\u044B\u0435 \u0441\u0442\u0430\u0442\u044C\u0438" }, {
                default: withCtx(() => [
                  createVNode(_component_MyPlanfactCategories)
                ]),
                _: 1
              }),
              createVNode(_component_UiTabsContent, { value: "pl" }, {
                default: withCtx(() => [
                  createVNode(_component_MyPlanfactPL)
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/planfact/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-CDshfCgd.mjs.map
