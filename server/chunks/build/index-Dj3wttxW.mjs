import { _ as _sfc_main$d } from './Sidebar-CU3xTO8i.mjs';
import { _ as _sfc_main$2$1, a as _sfc_main$e, b as _sfc_main$1$1 } from './TabsList-CQAyLRQv.mjs';
import { _ as _sfc_main$f } from './TabsContent-CCtYgbi0.mjs';
import { _ as _sfc_main$4$2, a as _sfc_main$3$3, b as _sfc_main$k, c as _sfc_main$2$4, d as _sfc_main$1$5 } from './DialogContent-3boiYQyS.mjs';
import { _ as _sfc_main$n } from './DialogFooter-CwJz0Fqk.mjs';
import { _ as _sfc_main$j, v as valueUpdater, c as cn } from './isLoading-OMYrG8kb.mjs';
import { _ as _sfc_main$l } from './Label-1GMx5h-v.mjs';
import { _ as _sfc_main$m } from './Input-Chi-mD9K.mjs';
import { defineComponent, mergeProps, withCtx, createTextVNode, createVNode, ref, unref, toDisplayString, createBlock, openBlock, Fragment, renderList, watch, isRef, h, computed, createCommentVNode, resolveDynamicComponent, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderClass, ssrRenderVNode } from 'vue/server-renderer';
import { a as useNuxtApp, b as useToast, i as toast } from './server.mjs';
import { _ as _sfc_main$3$1, a as _sfc_main$2$2, c as _sfc_main$1$2, b as _sfc_main$g } from './CardDescription-BtJ1Rn5W.mjs';
import { _ as _sfc_main$1$3, a as _sfc_main$i } from './CardFooter-B-jkYOBr.mjs';
import { _ as _sfc_main$5$1, a as _sfc_main$h, b as _sfc_main$2$3, c as _sfc_main$1$4, d as _sfc_main$4$1, e as _sfc_main$3$2 } from './TableHeader-DP7X_M2q.mjs';
import { _ as _sfc_main$o } from './DialogDescription-DlwL3umT.mjs';
import { _ as _sfc_main$p } from './Textarea-CgIpn_vv.mjs';
import { _ as _sfc_main$q } from './ComboboxModels-DMXbyJ3q.mjs';
import { _ as _sfc_main$7$1, a as _sfc_main$5$2, b as _sfc_main$6$1, c as _sfc_main$4$3, d as _sfc_main$3$4, e as _sfc_main$2$6 } from './SelectScrollDownButton-Dn21NQ5S.mjs';
import { _ as _sfc_main$2$5, a as _sfc_main$1$6, b as _sfc_main$r } from './PopoverContent-BtyjlY5x.mjs';
import { _ as _sfc_main$t } from './Separator-BlISGJPB.mjs';
import { _ as _sfc_main$u } from './index-BKbWuEU4.mjs';
import { _ as _sfc_main$3$5, a as _sfc_main$w, b as _sfc_main$2$7, c as _sfc_main$1$8 } from './CommandList-BvvMk4Jy.mjs';
import { _ as _sfc_main$v, a as _sfc_main$1$7 } from './CommandInput-Nc5FVOcX.mjs';
import { _ as _sfc_main$x } from './CommandSeparator-BH5Jv-4d.mjs';
import { ChevronDown, ArrowUpDown, X, CirclePlus, Check } from 'lucide-vue-next';
import { _ as _sfc_main$s } from './Checkbox-DFSSlURz.mjs';
import { useVueTable, getFilteredRowModel, getSortedRowModel, getCoreRowModel, FlexRender } from '@tanstack/vue-table';
import { d as dateFormat } from './useMyDateFormat-Cn1Jsliy.mjs';
import { u as useMyFormatPrice } from './useMyFormatPrice-CCAsFuev.mjs';
import { Q as Qn } from './main-BplioMC0.mjs';
import { u as useHead } from './v3-BEwgjOp-.mjs';
import 'radix-vue';
import 'class-variance-authority';
import 'clsx';
import 'tailwind-merge';
import 'pinia';
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
import 'vue-router';
import '@iconify/vue';
import 'axios';
import 'date-fns';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import 'unhead/plugins';

const _sfc_main$c = /* @__PURE__ */ defineComponent({
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
      const _component_UiButton = _sfc_main$j;
      const _component_UiDialogContent = _sfc_main$k;
      const _component_UiDialogHeader = _sfc_main$2$4;
      const _component_UiDialogTitle = _sfc_main$1$5;
      const _component_UiLabel = _sfc_main$l;
      const _component_UiInput = _sfc_main$m;
      const _component_UiDialogFooter = _sfc_main$n;
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
                    class: unref(newAccount).name ? "" : "outline-1 outline-rose-300"
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
                    class: unref(newAccount).accountNumber ? "" : "outline-1 outline-rose-300"
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
                    class: unref(newAccount).balance ? "" : "outline-1 outline-rose-300"
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
                    class: unref(newAccount).balanceStartDate ? "" : "outline-1 outline-rose-300"
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
                          class: unref(newAccount).name ? "" : "outline-1 outline-rose-300"
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
                          class: unref(newAccount).accountNumber ? "" : "outline-1 outline-rose-300"
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
                          class: unref(newAccount).balance ? "" : "outline-1 outline-rose-300"
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
                          class: unref(newAccount).balanceStartDate ? "" : "outline-1 outline-rose-300"
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
                        class: unref(newAccount).name ? "" : "outline-1 outline-rose-300"
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
                        class: unref(newAccount).accountNumber ? "" : "outline-1 outline-rose-300"
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
                        class: unref(newAccount).balance ? "" : "outline-1 outline-rose-300"
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
                        class: unref(newAccount).balanceStartDate ? "" : "outline-1 outline-rose-300"
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
const _sfc_setup$c = _sfc_main$c.setup;
_sfc_main$c.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/my/planfact/AccountsCreateModal.vue");
  return _sfc_setup$c ? _sfc_setup$c(props, ctx) : void 0;
};
const _sfc_main$b = /* @__PURE__ */ defineComponent({
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
      const _component_MyPlanfactAccountsCreateModal = _sfc_main$c;
      const _component_UiCard = _sfc_main$3$1;
      const _component_UiCardHeader = _sfc_main$2$2;
      const _component_UiCardTitle = _sfc_main$1$2;
      const _component_UiCardDescription = _sfc_main$g;
      const _component_UiCardContent = _sfc_main$1$3;
      const _component_UiTable = _sfc_main$5$1;
      const _component_UiTableHeader = _sfc_main$h;
      const _component_UiTableRow = _sfc_main$2$3;
      const _component_UiTableHead = _sfc_main$1$4;
      const _component_UiTableBody = _sfc_main$4$1;
      const _component_UiTableCell = _sfc_main$3$2;
      const _component_UiCardFooter = _sfc_main$i;
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
const _sfc_setup$b = _sfc_main$b.setup;
_sfc_main$b.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/my/planfact/Accounts.vue");
  return _sfc_setup$b ? _sfc_setup$b(props, ctx) : void 0;
};
const _sfc_main$a = /* @__PURE__ */ defineComponent({
  __name: "CreateModal",
  __ssrInlineRender: true,
  emits: ["category-created"],
  setup(__props, { emit: __emit }) {
    const { $useApi } = useNuxtApp();
    const { toast: toast2 } = useToast();
    const isOpen = ref(false);
    const expenseCategories = ref([]);
    const categoryType = ref("\u0414\u043E\u0445\u043E\u0434\u044B");
    const disabled = ref(true);
    const emit = __emit;
    const categoryFormData = ref({
      name: "",
      type: "\u0414\u043E\u0445\u043E\u0434\u044B",
      description: "",
      parentId: null
    });
    const fetchExpenseCategories = async (type) => {
      try {
        const { data } = await $useApi.get("planfact/expense-categories-by-type", {
          params: { type }
        });
        expenseCategories.value = data;
      } catch (error) {
        console.error(error);
        toast2({
          variant: "destructive",
          title: "\u041E\u0448\u0438\u0431\u043A\u0430",
          description: "\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C \u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u0438."
        });
      }
    };
    const createExpenseCategory = async () => {
      try {
        disabled.value = true;
        const { data } = await $useApi.post(
          "planfact/expense-categories",
          categoryFormData.value
        );
        toast2({
          title: "\u0423\u0441\u043F\u0435\u0445",
          description: "\u041A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u044F \u0443\u0441\u043F\u0435\u0448\u043D\u043E \u0441\u043E\u0437\u0434\u0430\u043D\u0430."
        });
        emit("category-created", data);
        isOpen.value = false;
        disabled.value = false;
        categoryFormData.value = { name: "", type: "\u0414\u043E\u0445\u043E\u0434\u044B", description: "", parentId: null };
      } catch (error) {
        console.error(error);
        toast2({
          variant: "destructive",
          title: "\u041E\u0448\u0438\u0431\u043A\u0430",
          description: "\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u0441\u043E\u0437\u0434\u0430\u0442\u044C \u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u044E."
        });
      }
    };
    watch(isOpen, (value) => {
      if (!value) {
        categoryFormData.value = {
          name: "",
          type: "\u0414\u043E\u0445\u043E\u0434\u044B",
          description: "",
          parentId: null
        };
      }
    });
    watch(categoryType, async (value) => {
      categoryFormData.value.type = value;
      await fetchExpenseCategories(value);
    }, { deep: true });
    watch(categoryFormData, (value) => {
      console.log(value);
      const { name, type } = value;
      if (name && type) return disabled.value = false;
      disabled.value = true;
    }, { deep: true });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UiDialog = _sfc_main$4$2;
      const _component_UiDialogTrigger = _sfc_main$3$3;
      const _component_UiButton = _sfc_main$j;
      const _component_UiDialogContent = _sfc_main$k;
      const _component_UiDialogHeader = _sfc_main$2$4;
      const _component_UiDialogTitle = _sfc_main$1$5;
      const _component_UiDialogDescription = _sfc_main$o;
      const _component_UiTabs = _sfc_main$2$1;
      const _component_UiTabsList = _sfc_main$e;
      const _component_UiTabsTrigger = _sfc_main$1$1;
      const _component_UiLabel = _sfc_main$l;
      const _component_MyComboboxModels = _sfc_main$q;
      const _component_UiInput = _sfc_main$m;
      const _component_UiTextarea = _sfc_main$p;
      _push(ssrRenderComponent(_component_UiDialog, mergeProps({
        open: unref(isOpen),
        "onUpdate:open": ($event) => isRef(isOpen) ? isOpen.value = $event : null
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UiDialogTrigger, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UiButton, { variant: "secondary" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`\u0421\u043E\u0437\u0434\u0430\u0442\u044C \u0441\u0442\u0430\u0442\u044C\u044E`);
                      } else {
                        return [
                          createTextVNode("\u0421\u043E\u0437\u0434\u0430\u0442\u044C \u0441\u0442\u0430\u0442\u044C\u044E")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UiButton, { variant: "secondary" }, {
                      default: withCtx(() => [
                        createTextVNode("\u0421\u043E\u0437\u0434\u0430\u0442\u044C \u0441\u0442\u0430\u0442\u044C\u044E")
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UiDialogContent, { class: "" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                var _a2, _b2;
                var _a, _b;
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UiDialogHeader, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_UiDialogTitle, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`\u0421\u043E\u0437\u0434\u0430\u043D\u0438\u0435 \u0441\u0442\u0430\u0442\u044C\u0438`);
                            } else {
                              return [
                                createTextVNode("\u0421\u043E\u0437\u0434\u0430\u043D\u0438\u0435 \u0441\u0442\u0430\u0442\u044C\u0438")
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
                              createTextVNode("\u0421\u043E\u0437\u0434\u0430\u043D\u0438\u0435 \u0441\u0442\u0430\u0442\u044C\u0438")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_UiDialogDescription)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`<div class="space-y-5"${_scopeId2}><div class="relative w-full"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_UiTabs, {
                    modelValue: unref(categoryType),
                    "onUpdate:modelValue": ($event) => isRef(categoryType) ? categoryType.value = $event : null
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_UiTabsList, { class: "w-full" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_UiTabsTrigger, {
                                class: "w-full",
                                value: "\u0414\u043E\u0445\u043E\u0434\u044B"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`\u0414\u043E\u0445\u043E\u0434\u044B`);
                                  } else {
                                    return [
                                      createTextVNode("\u0414\u043E\u0445\u043E\u0434\u044B")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_UiTabsTrigger, {
                                class: "w-full",
                                value: "\u0420\u0430\u0441\u0445\u043E\u0434\u044B"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`\u0420\u0430\u0441\u0445\u043E\u0434\u044B`);
                                  } else {
                                    return [
                                      createTextVNode("\u0420\u0430\u0441\u0445\u043E\u0434\u044B")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_UiTabsTrigger, {
                                class: "w-full",
                                value: "\u0410\u043A\u0442\u0438\u0432\u044B"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`\u0410\u043A\u0442\u0438\u0432\u044B`);
                                  } else {
                                    return [
                                      createTextVNode("\u0410\u043A\u0442\u0438\u0432\u044B")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_UiTabsTrigger, {
                                class: "w-full",
                                value: "\u041E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u0441\u0442\u0432\u0430"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`\u041E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u0441\u0442\u0432\u0430`);
                                  } else {
                                    return [
                                      createTextVNode("\u041E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u0441\u0442\u0432\u0430")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_UiTabsTrigger, {
                                class: "w-full",
                                value: "\u041A\u0430\u043F\u0438\u0442\u0430\u043B"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`\u041A\u0430\u043F\u0438\u0442\u0430\u043B`);
                                  } else {
                                    return [
                                      createTextVNode("\u041A\u0430\u043F\u0438\u0442\u0430\u043B")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_UiTabsTrigger, {
                                  class: "w-full",
                                  value: "\u0414\u043E\u0445\u043E\u0434\u044B"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("\u0414\u043E\u0445\u043E\u0434\u044B")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_UiTabsTrigger, {
                                  class: "w-full",
                                  value: "\u0420\u0430\u0441\u0445\u043E\u0434\u044B"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("\u0420\u0430\u0441\u0445\u043E\u0434\u044B")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_UiTabsTrigger, {
                                  class: "w-full",
                                  value: "\u0410\u043A\u0442\u0438\u0432\u044B"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("\u0410\u043A\u0442\u0438\u0432\u044B")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_UiTabsTrigger, {
                                  class: "w-full",
                                  value: "\u041E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u0441\u0442\u0432\u0430"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("\u041E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u0441\u0442\u0432\u0430")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_UiTabsTrigger, {
                                  class: "w-full",
                                  value: "\u041A\u0430\u043F\u0438\u0442\u0430\u043B"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("\u041A\u0430\u043F\u0438\u0442\u0430\u043B")
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_UiTabsList, { class: "w-full" }, {
                            default: withCtx(() => [
                              createVNode(_component_UiTabsTrigger, {
                                class: "w-full",
                                value: "\u0414\u043E\u0445\u043E\u0434\u044B"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode("\u0414\u043E\u0445\u043E\u0434\u044B")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_UiTabsTrigger, {
                                class: "w-full",
                                value: "\u0420\u0430\u0441\u0445\u043E\u0434\u044B"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode("\u0420\u0430\u0441\u0445\u043E\u0434\u044B")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_UiTabsTrigger, {
                                class: "w-full",
                                value: "\u0410\u043A\u0442\u0438\u0432\u044B"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode("\u0410\u043A\u0442\u0438\u0432\u044B")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_UiTabsTrigger, {
                                class: "w-full",
                                value: "\u041E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u0441\u0442\u0432\u0430"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode("\u041E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u0441\u0442\u0432\u0430")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_UiTabsTrigger, {
                                class: "w-full",
                                value: "\u041A\u0430\u043F\u0438\u0442\u0430\u043B"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode("\u041A\u0430\u043F\u0438\u0442\u0430\u043B")
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
                  }, _parent3, _scopeId2));
                  _push3(`</div><div class="relative"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` \u041F\u0440\u0438\u043D\u0430\u0434\u043B\u0435\u0436\u0438\u0442 \u043A `);
                      } else {
                        return [
                          createTextVNode(" \u041F\u0440\u0438\u043D\u0430\u0434\u043B\u0435\u0436\u0438\u0442 \u043A ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`<div class="flex gap-2"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_MyComboboxModels, {
                    key: unref(expenseCategories).length,
                    class: "min-w-[462px] w-[462px] overflow-hidden",
                    items: unref(expenseCategories).map((c) => ({ value: c.id, label: c.name })),
                    label: (_a2 = (_a = unref(expenseCategories).find((c) => c.id === unref(categoryFormData).parentId)) == null ? void 0 : _a.name) != null ? _a2 : "\u0412\u044B\u0431\u0440\u0430\u0442\u044C",
                    "model-value": unref(categoryFormData).parentId,
                    onSelectedItem: (value) => unref(categoryFormData).parentId = value
                  }, null, _parent3, _scopeId2));
                  _push3(`</div></div><div class="relative"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_UiInput, {
                    modelValue: unref(categoryFormData).name,
                    "onUpdate:modelValue": ($event) => unref(categoryFormData).name = $event,
                    placeholder: "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u0438",
                    class: unref(categoryFormData).name ? "" : "outline-1 outline-rose-300"
                  }, null, _parent3, _scopeId2));
                  if (unref(categoryFormData).name) {
                    _push3(ssrRenderComponent(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(` \u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u0438 `);
                        } else {
                          return [
                            createTextVNode(" \u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u0438 ")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(`</div><div class="relative"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_UiTextarea, {
                    modelValue: unref(categoryFormData).description,
                    "onUpdate:modelValue": ($event) => unref(categoryFormData).description = $event,
                    placeholder: "\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435"
                  }, null, _parent3, _scopeId2));
                  if (unref(categoryFormData).description) {
                    _push3(ssrRenderComponent(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(` \u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435 `);
                        } else {
                          return [
                            createTextVNode(" \u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435 ")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(`</div></div><div class="flex justify-end gap-2 mt-4"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_UiButton, {
                    variant: "outline",
                    onClick: ($event) => isOpen.value = false
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`\u041E\u0442\u043C\u0435\u043D\u0430`);
                      } else {
                        return [
                          createTextVNode("\u041E\u0442\u043C\u0435\u043D\u0430")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_UiButton, {
                    disabled: unref(disabled),
                    onClick: createExpenseCategory
                  }, {
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
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode(_component_UiDialogHeader, null, {
                      default: withCtx(() => [
                        createVNode(_component_UiDialogTitle, null, {
                          default: withCtx(() => [
                            createTextVNode("\u0421\u043E\u0437\u0434\u0430\u043D\u0438\u0435 \u0441\u0442\u0430\u0442\u044C\u0438")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_UiDialogDescription)
                      ]),
                      _: 1
                    }),
                    createVNode("div", { class: "space-y-5" }, [
                      createVNode("div", { class: "relative w-full" }, [
                        createVNode(_component_UiTabs, {
                          modelValue: unref(categoryType),
                          "onUpdate:modelValue": ($event) => isRef(categoryType) ? categoryType.value = $event : null
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_UiTabsList, { class: "w-full" }, {
                              default: withCtx(() => [
                                createVNode(_component_UiTabsTrigger, {
                                  class: "w-full",
                                  value: "\u0414\u043E\u0445\u043E\u0434\u044B"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("\u0414\u043E\u0445\u043E\u0434\u044B")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_UiTabsTrigger, {
                                  class: "w-full",
                                  value: "\u0420\u0430\u0441\u0445\u043E\u0434\u044B"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("\u0420\u0430\u0441\u0445\u043E\u0434\u044B")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_UiTabsTrigger, {
                                  class: "w-full",
                                  value: "\u0410\u043A\u0442\u0438\u0432\u044B"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("\u0410\u043A\u0442\u0438\u0432\u044B")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_UiTabsTrigger, {
                                  class: "w-full",
                                  value: "\u041E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u0441\u0442\u0432\u0430"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("\u041E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u0441\u0442\u0432\u0430")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_UiTabsTrigger, {
                                  class: "w-full",
                                  value: "\u041A\u0430\u043F\u0438\u0442\u0430\u043B"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("\u041A\u0430\u043F\u0438\u0442\u0430\u043B")
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      createVNode("div", { class: "relative" }, [
                        createVNode(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap" }, {
                          default: withCtx(() => [
                            createTextVNode(" \u041F\u0440\u0438\u043D\u0430\u0434\u043B\u0435\u0436\u0438\u0442 \u043A ")
                          ]),
                          _: 1
                        }),
                        createVNode("div", { class: "flex gap-2" }, [
                          (openBlock(), createBlock(_component_MyComboboxModels, {
                            key: unref(expenseCategories).length,
                            class: "min-w-[462px] w-[462px] overflow-hidden",
                            items: unref(expenseCategories).map((c) => ({ value: c.id, label: c.name })),
                            label: (_b2 = (_b = unref(expenseCategories).find((c) => c.id === unref(categoryFormData).parentId)) == null ? void 0 : _b.name) != null ? _b2 : "\u0412\u044B\u0431\u0440\u0430\u0442\u044C",
                            "model-value": unref(categoryFormData).parentId,
                            onSelectedItem: (value) => unref(categoryFormData).parentId = value
                          }, null, 8, ["items", "label", "model-value", "onSelectedItem"]))
                        ])
                      ]),
                      createVNode("div", { class: "relative" }, [
                        createVNode(_component_UiInput, {
                          modelValue: unref(categoryFormData).name,
                          "onUpdate:modelValue": ($event) => unref(categoryFormData).name = $event,
                          placeholder: "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u0438",
                          class: unref(categoryFormData).name ? "" : "outline-1 outline-rose-300"
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "class"]),
                        unref(categoryFormData).name ? (openBlock(), createBlock(_component_UiLabel, {
                          key: 0,
                          class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" \u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u0438 ")
                          ]),
                          _: 1
                        })) : createCommentVNode("", true)
                      ]),
                      createVNode("div", { class: "relative" }, [
                        createVNode(_component_UiTextarea, {
                          modelValue: unref(categoryFormData).description,
                          "onUpdate:modelValue": ($event) => unref(categoryFormData).description = $event,
                          placeholder: "\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                        unref(categoryFormData).description ? (openBlock(), createBlock(_component_UiLabel, {
                          key: 0,
                          class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" \u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435 ")
                          ]),
                          _: 1
                        })) : createCommentVNode("", true)
                      ])
                    ]),
                    createVNode("div", { class: "flex justify-end gap-2 mt-4" }, [
                      createVNode(_component_UiButton, {
                        variant: "outline",
                        onClick: ($event) => isOpen.value = false
                      }, {
                        default: withCtx(() => [
                          createTextVNode("\u041E\u0442\u043C\u0435\u043D\u0430")
                        ]),
                        _: 1
                      }, 8, ["onClick"]),
                      createVNode(_component_UiButton, {
                        disabled: unref(disabled),
                        onClick: createExpenseCategory
                      }, {
                        default: withCtx(() => [
                          createTextVNode("\u0421\u043E\u0437\u0434\u0430\u0442\u044C")
                        ]),
                        _: 1
                      }, 8, ["disabled"])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UiDialogTrigger, null, {
                default: withCtx(() => [
                  createVNode(_component_UiButton, { variant: "secondary" }, {
                    default: withCtx(() => [
                      createTextVNode("\u0421\u043E\u0437\u0434\u0430\u0442\u044C \u0441\u0442\u0430\u0442\u044C\u044E")
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(_component_UiDialogContent, { class: "" }, {
                default: withCtx(() => {
                  var _a2;
                  var _a;
                  return [
                    createVNode(_component_UiDialogHeader, null, {
                      default: withCtx(() => [
                        createVNode(_component_UiDialogTitle, null, {
                          default: withCtx(() => [
                            createTextVNode("\u0421\u043E\u0437\u0434\u0430\u043D\u0438\u0435 \u0441\u0442\u0430\u0442\u044C\u0438")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_UiDialogDescription)
                      ]),
                      _: 1
                    }),
                    createVNode("div", { class: "space-y-5" }, [
                      createVNode("div", { class: "relative w-full" }, [
                        createVNode(_component_UiTabs, {
                          modelValue: unref(categoryType),
                          "onUpdate:modelValue": ($event) => isRef(categoryType) ? categoryType.value = $event : null
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_UiTabsList, { class: "w-full" }, {
                              default: withCtx(() => [
                                createVNode(_component_UiTabsTrigger, {
                                  class: "w-full",
                                  value: "\u0414\u043E\u0445\u043E\u0434\u044B"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("\u0414\u043E\u0445\u043E\u0434\u044B")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_UiTabsTrigger, {
                                  class: "w-full",
                                  value: "\u0420\u0430\u0441\u0445\u043E\u0434\u044B"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("\u0420\u0430\u0441\u0445\u043E\u0434\u044B")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_UiTabsTrigger, {
                                  class: "w-full",
                                  value: "\u0410\u043A\u0442\u0438\u0432\u044B"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("\u0410\u043A\u0442\u0438\u0432\u044B")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_UiTabsTrigger, {
                                  class: "w-full",
                                  value: "\u041E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u0441\u0442\u0432\u0430"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("\u041E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u0441\u0442\u0432\u0430")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_UiTabsTrigger, {
                                  class: "w-full",
                                  value: "\u041A\u0430\u043F\u0438\u0442\u0430\u043B"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("\u041A\u0430\u043F\u0438\u0442\u0430\u043B")
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      createVNode("div", { class: "relative" }, [
                        createVNode(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap" }, {
                          default: withCtx(() => [
                            createTextVNode(" \u041F\u0440\u0438\u043D\u0430\u0434\u043B\u0435\u0436\u0438\u0442 \u043A ")
                          ]),
                          _: 1
                        }),
                        createVNode("div", { class: "flex gap-2" }, [
                          (openBlock(), createBlock(_component_MyComboboxModels, {
                            key: unref(expenseCategories).length,
                            class: "min-w-[462px] w-[462px] overflow-hidden",
                            items: unref(expenseCategories).map((c) => ({ value: c.id, label: c.name })),
                            label: (_a2 = (_a = unref(expenseCategories).find((c) => c.id === unref(categoryFormData).parentId)) == null ? void 0 : _a.name) != null ? _a2 : "\u0412\u044B\u0431\u0440\u0430\u0442\u044C",
                            "model-value": unref(categoryFormData).parentId,
                            onSelectedItem: (value) => unref(categoryFormData).parentId = value
                          }, null, 8, ["items", "label", "model-value", "onSelectedItem"]))
                        ])
                      ]),
                      createVNode("div", { class: "relative" }, [
                        createVNode(_component_UiInput, {
                          modelValue: unref(categoryFormData).name,
                          "onUpdate:modelValue": ($event) => unref(categoryFormData).name = $event,
                          placeholder: "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u0438",
                          class: unref(categoryFormData).name ? "" : "outline-1 outline-rose-300"
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "class"]),
                        unref(categoryFormData).name ? (openBlock(), createBlock(_component_UiLabel, {
                          key: 0,
                          class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" \u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u0438 ")
                          ]),
                          _: 1
                        })) : createCommentVNode("", true)
                      ]),
                      createVNode("div", { class: "relative" }, [
                        createVNode(_component_UiTextarea, {
                          modelValue: unref(categoryFormData).description,
                          "onUpdate:modelValue": ($event) => unref(categoryFormData).description = $event,
                          placeholder: "\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                        unref(categoryFormData).description ? (openBlock(), createBlock(_component_UiLabel, {
                          key: 0,
                          class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" \u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435 ")
                          ]),
                          _: 1
                        })) : createCommentVNode("", true)
                      ])
                    ]),
                    createVNode("div", { class: "flex justify-end gap-2 mt-4" }, [
                      createVNode(_component_UiButton, {
                        variant: "outline",
                        onClick: ($event) => isOpen.value = false
                      }, {
                        default: withCtx(() => [
                          createTextVNode("\u041E\u0442\u043C\u0435\u043D\u0430")
                        ]),
                        _: 1
                      }, 8, ["onClick"]),
                      createVNode(_component_UiButton, {
                        disabled: unref(disabled),
                        onClick: createExpenseCategory
                      }, {
                        default: withCtx(() => [
                          createTextVNode("\u0421\u043E\u0437\u0434\u0430\u0442\u044C")
                        ]),
                        _: 1
                      }, 8, ["disabled"])
                    ])
                  ];
                }),
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
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/my/planfact/Categories/CreateModal.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const _sfc_main$9 = /* @__PURE__ */ defineComponent({
  __name: "CreateModal",
  __ssrInlineRender: true,
  emits: ["counterparty-created"],
  setup(__props, { emit: __emit }) {
    const { $useApi } = useNuxtApp();
    const { toast: toast2 } = useToast();
    const isOpen = ref(false);
    const incomeExpenseCategories = ref([]);
    const outcomeExpenseCategories = ref([]);
    const disabled = ref(true);
    const emit = __emit;
    const counterPartyFormData = ref({
      title: "",
      inn: "",
      kpp: "",
      account: "",
      bankBic: "",
      bankName: "",
      contrAgentGroup: "",
      incomeExpenseCategoryId: null,
      outcomeExpenseCategoryId: null
    });
    const createCounterParty = async () => {
      try {
        disabled.value = true;
        const { data } = await $useApi.post("planfact/counter-parties", {
          title: counterPartyFormData.value.title,
          inn: counterPartyFormData.value.inn || "",
          kpp: counterPartyFormData.value.kpp || "",
          account: counterPartyFormData.value.account || "",
          bankBic: counterPartyFormData.value.bankBic || "",
          bankName: counterPartyFormData.value.bankName || "",
          contrAgentGroup: counterPartyFormData.value.contrAgentGroup || "",
          incomeExpenseCategoryId: counterPartyFormData.value.incomeExpenseCategoryId || null,
          outcomeExpenseCategoryId: counterPartyFormData.value.outcomeExpenseCategoryId || null
        });
        toast2({
          title: "\u0423\u0441\u043F\u0435\u0445",
          description: "\u041A\u043E\u043D\u0442\u0440\u0430\u0433\u0435\u043D\u0442 \u0443\u0441\u043F\u0435\u0448\u043D\u043E \u0441\u043E\u0437\u0434\u0430\u043D."
        });
        emit("counterparty-created", data);
        isOpen.value = false;
        disabled.value = false;
        counterPartyFormData.value = {
          title: "",
          inn: "",
          kpp: "",
          account: "",
          bankBic: "",
          bankName: "",
          contrAgentGroup: "",
          incomeExpenseCategoryId: null,
          outcomeExpenseCategoryId: null
        };
      } catch (error) {
        console.error(error);
        toast2({
          variant: "destructive",
          title: "\u041E\u0448\u0438\u0431\u043A\u0430",
          description: "\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u0441\u043E\u0437\u0434\u0430\u0442\u044C \u043A\u043E\u043D\u0442\u0440\u0430\u0433\u0435\u043D\u0442\u0430."
        });
      }
    };
    watch(isOpen, (value) => {
      if (!value) {
        counterPartyFormData.value = {
          title: "",
          inn: "",
          kpp: "",
          account: "",
          bankBic: "",
          bankName: "",
          contrAgentGroup: "",
          incomeExpenseCategoryId: null,
          outcomeExpenseCategoryId: null
        };
      }
    });
    watch(counterPartyFormData, (value) => {
      const { title } = value;
      disabled.value = !title;
    }, { deep: true });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UiDialog = _sfc_main$4$2;
      const _component_UiDialogTrigger = _sfc_main$3$3;
      const _component_UiButton = _sfc_main$j;
      const _component_UiDialogContent = _sfc_main$k;
      const _component_UiDialogHeader = _sfc_main$2$4;
      const _component_UiDialogTitle = _sfc_main$1$5;
      const _component_UiDialogDescription = _sfc_main$o;
      const _component_UiInput = _sfc_main$m;
      const _component_UiLabel = _sfc_main$l;
      const _component_UiSelect = _sfc_main$7$1;
      const _component_UiSelectTrigger = _sfc_main$5$2;
      const _component_UiSelectValue = _sfc_main$6$1;
      const _component_UiSelectContent = _sfc_main$4$3;
      const _component_UiSelectGroup = _sfc_main$3$4;
      const _component_UiSelectItem = _sfc_main$2$6;
      const _component_MyComboboxModels = _sfc_main$q;
      _push(ssrRenderComponent(_component_UiDialog, mergeProps({
        open: unref(isOpen),
        "onUpdate:open": ($event) => isRef(isOpen) ? isOpen.value = $event : null
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UiDialogTrigger, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UiButton, { variant: "secondary" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`\u0421\u043E\u0437\u0434\u0430\u0442\u044C \u043A\u043E\u043D\u0442\u0440\u0430\u0433\u0435\u043D\u0442\u0430`);
                      } else {
                        return [
                          createTextVNode("\u0421\u043E\u0437\u0434\u0430\u0442\u044C \u043A\u043E\u043D\u0442\u0440\u0430\u0433\u0435\u043D\u0442\u0430")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UiButton, { variant: "secondary" }, {
                      default: withCtx(() => [
                        createTextVNode("\u0421\u043E\u0437\u0434\u0430\u0442\u044C \u043A\u043E\u043D\u0442\u0440\u0430\u0433\u0435\u043D\u0442\u0430")
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UiDialogContent, { class: "" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                var _a2, _b2, _c2, _d2;
                var _a, _b, _c, _d;
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UiDialogHeader, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_UiDialogTitle, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`\u0421\u043E\u0437\u0434\u0430\u043D\u0438\u0435 \u043A\u043E\u043D\u0442\u0440\u0430\u0433\u0435\u043D\u0442\u0430`);
                            } else {
                              return [
                                createTextVNode("\u0421\u043E\u0437\u0434\u0430\u043D\u0438\u0435 \u043A\u043E\u043D\u0442\u0440\u0430\u0433\u0435\u043D\u0442\u0430")
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
                              createTextVNode("\u0421\u043E\u0437\u0434\u0430\u043D\u0438\u0435 \u043A\u043E\u043D\u0442\u0440\u0430\u0433\u0435\u043D\u0442\u0430")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_UiDialogDescription)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`<div class="space-y-5"${_scopeId2}><div class="relative"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_UiInput, {
                    modelValue: unref(counterPartyFormData).title,
                    "onUpdate:modelValue": ($event) => unref(counterPartyFormData).title = $event,
                    placeholder: "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u043A\u043E\u043D\u0442\u0440\u0430\u0433\u0435\u043D\u0442\u0430",
                    class: unref(counterPartyFormData).title ? "" : "outline-1 outline-rose-300"
                  }, null, _parent3, _scopeId2));
                  if (unref(counterPartyFormData).title) {
                    _push3(ssrRenderComponent(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(` \u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u043A\u043E\u043D\u0442\u0440\u0430\u0433\u0435\u043D\u0442\u0430 `);
                        } else {
                          return [
                            createTextVNode(" \u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u043A\u043E\u043D\u0442\u0440\u0430\u0433\u0435\u043D\u0442\u0430 ")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(`</div><div class="relative w-full"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_UiSelect, {
                    modelValue: unref(counterPartyFormData).contrAgentGroup,
                    "onUpdate:modelValue": ($event) => unref(counterPartyFormData).contrAgentGroup = $event
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_UiSelectTrigger, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_UiSelectValue, { placeholder: "\u0413\u0440\u0443\u043F\u043F\u0430" }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_UiSelectValue, { placeholder: "\u0413\u0440\u0443\u043F\u043F\u0430" })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_UiSelectContent, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_UiSelectGroup, null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_UiSelectItem, {
                                      class: "w-full",
                                      value: "\u0411\u0430\u043D\u043A\u0438"
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`\u0411\u0430\u043D\u043A\u0438`);
                                        } else {
                                          return [
                                            createTextVNode("\u0411\u0430\u043D\u043A\u0438")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(_component_UiSelectItem, {
                                      class: "w-full",
                                      value: "\u0413\u043E\u0441. \u043E\u0440\u0433\u0430\u043D\u044B"
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`\u0413\u043E\u0441. \u043E\u0440\u0433\u0430\u043D\u044B`);
                                        } else {
                                          return [
                                            createTextVNode("\u0413\u043E\u0441. \u043E\u0440\u0433\u0430\u043D\u044B")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(_component_UiSelectItem, {
                                      class: "w-full",
                                      value: "\u041A\u043B\u0438\u0435\u043D\u0442\u044B"
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`\u041A\u043B\u0438\u0435\u043D\u0442\u044B`);
                                        } else {
                                          return [
                                            createTextVNode("\u041A\u043B\u0438\u0435\u043D\u0442\u044B")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(_component_UiSelectItem, {
                                      class: "w-full",
                                      value: "\u041F\u043E\u0441\u0442\u0430\u0432\u0449\u0438\u043A\u0438"
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`\u041F\u043E\u0441\u0442\u0430\u0432\u0449\u0438\u043A\u0438`);
                                        } else {
                                          return [
                                            createTextVNode("\u041F\u043E\u0441\u0442\u0430\u0432\u0449\u0438\u043A\u0438")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(_component_UiSelectItem, {
                                      class: "w-full",
                                      value: "\u0421\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438"
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`\u0421\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438`);
                                        } else {
                                          return [
                                            createTextVNode("\u0421\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_UiSelectItem, {
                                        class: "w-full",
                                        value: "\u0411\u0430\u043D\u043A\u0438"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode("\u0411\u0430\u043D\u043A\u0438")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_UiSelectItem, {
                                        class: "w-full",
                                        value: "\u0413\u043E\u0441. \u043E\u0440\u0433\u0430\u043D\u044B"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode("\u0413\u043E\u0441. \u043E\u0440\u0433\u0430\u043D\u044B")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_UiSelectItem, {
                                        class: "w-full",
                                        value: "\u041A\u043B\u0438\u0435\u043D\u0442\u044B"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode("\u041A\u043B\u0438\u0435\u043D\u0442\u044B")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_UiSelectItem, {
                                        class: "w-full",
                                        value: "\u041F\u043E\u0441\u0442\u0430\u0432\u0449\u0438\u043A\u0438"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode("\u041F\u043E\u0441\u0442\u0430\u0432\u0449\u0438\u043A\u0438")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_UiSelectItem, {
                                        class: "w-full",
                                        value: "\u0421\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode("\u0421\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438")
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
                                createVNode(_component_UiSelectGroup, null, {
                                  default: withCtx(() => [
                                    createVNode(_component_UiSelectItem, {
                                      class: "w-full",
                                      value: "\u0411\u0430\u043D\u043A\u0438"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode("\u0411\u0430\u043D\u043A\u0438")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_UiSelectItem, {
                                      class: "w-full",
                                      value: "\u0413\u043E\u0441. \u043E\u0440\u0433\u0430\u043D\u044B"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode("\u0413\u043E\u0441. \u043E\u0440\u0433\u0430\u043D\u044B")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_UiSelectItem, {
                                      class: "w-full",
                                      value: "\u041A\u043B\u0438\u0435\u043D\u0442\u044B"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode("\u041A\u043B\u0438\u0435\u043D\u0442\u044B")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_UiSelectItem, {
                                      class: "w-full",
                                      value: "\u041F\u043E\u0441\u0442\u0430\u0432\u0449\u0438\u043A\u0438"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode("\u041F\u043E\u0441\u0442\u0430\u0432\u0449\u0438\u043A\u0438")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_UiSelectItem, {
                                      class: "w-full",
                                      value: "\u0421\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode("\u0421\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438")
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
                      } else {
                        return [
                          createVNode(_component_UiSelectTrigger, null, {
                            default: withCtx(() => [
                              createVNode(_component_UiSelectValue, { placeholder: "\u0413\u0440\u0443\u043F\u043F\u0430" })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_UiSelectContent, null, {
                            default: withCtx(() => [
                              createVNode(_component_UiSelectGroup, null, {
                                default: withCtx(() => [
                                  createVNode(_component_UiSelectItem, {
                                    class: "w-full",
                                    value: "\u0411\u0430\u043D\u043A\u0438"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode("\u0411\u0430\u043D\u043A\u0438")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_UiSelectItem, {
                                    class: "w-full",
                                    value: "\u0413\u043E\u0441. \u043E\u0440\u0433\u0430\u043D\u044B"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode("\u0413\u043E\u0441. \u043E\u0440\u0433\u0430\u043D\u044B")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_UiSelectItem, {
                                    class: "w-full",
                                    value: "\u041A\u043B\u0438\u0435\u043D\u0442\u044B"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode("\u041A\u043B\u0438\u0435\u043D\u0442\u044B")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_UiSelectItem, {
                                    class: "w-full",
                                    value: "\u041F\u043E\u0441\u0442\u0430\u0432\u0449\u0438\u043A\u0438"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode("\u041F\u043E\u0441\u0442\u0430\u0432\u0449\u0438\u043A\u0438")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_UiSelectItem, {
                                    class: "w-full",
                                    value: "\u0421\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode("\u0421\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438")
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
                  }, _parent3, _scopeId2));
                  _push3(`</div><div class="relative"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` \u041A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u044F \u0434\u043B\u044F \u0432\u0445\u043E\u0434\u044F\u0449\u0438\u0445 \u043E\u043F\u0435\u0440\u0430\u0446\u0438\u0439 `);
                      } else {
                        return [
                          createTextVNode(" \u041A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u044F \u0434\u043B\u044F \u0432\u0445\u043E\u0434\u044F\u0449\u0438\u0445 \u043E\u043F\u0435\u0440\u0430\u0446\u0438\u0439 ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`<div class="flex gap-2"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_MyComboboxModels, {
                    key: unref(incomeExpenseCategories).length,
                    class: "min-w-[462px] w-[462px] overflow-hidden",
                    items: unref(incomeExpenseCategories).map((c) => ({ value: c.id, label: c.name })),
                    label: (_a2 = (_a = unref(incomeExpenseCategories).find((c) => c.id === unref(counterPartyFormData).incomeExpenseCategoryId)) == null ? void 0 : _a.name) != null ? _a2 : "\u0412\u044B\u0431\u0440\u0430\u0442\u044C",
                    "model-value": unref(counterPartyFormData).incomeExpenseCategoryId,
                    onSelectedItem: (value) => unref(counterPartyFormData).incomeExpenseCategoryId = value
                  }, null, _parent3, _scopeId2));
                  _push3(`</div></div><div class="relative"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` \u041A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u044F \u0434\u043B\u044F \u0438\u0441\u0445\u043E\u0434\u044F\u0449\u0438\u0445 \u043E\u043F\u0435\u0440\u0430\u0446\u0438\u0439 `);
                      } else {
                        return [
                          createTextVNode(" \u041A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u044F \u0434\u043B\u044F \u0438\u0441\u0445\u043E\u0434\u044F\u0449\u0438\u0445 \u043E\u043F\u0435\u0440\u0430\u0446\u0438\u0439 ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`<div class="flex gap-2"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_MyComboboxModels, {
                    key: unref(outcomeExpenseCategories).length,
                    class: "min-w-[462px] w-[462px] overflow-hidden",
                    items: unref(outcomeExpenseCategories).map((c) => ({ value: c.id, label: c.name })),
                    label: (_b2 = (_b = unref(outcomeExpenseCategories).find((c) => c.id === unref(counterPartyFormData).outcomeExpenseCategoryId)) == null ? void 0 : _b.name) != null ? _b2 : "\u0412\u044B\u0431\u0440\u0430\u0442\u044C",
                    "model-value": unref(counterPartyFormData).outcomeExpenseCategoryId,
                    onSelectedItem: (value) => unref(counterPartyFormData).outcomeExpenseCategoryId = value
                  }, null, _parent3, _scopeId2));
                  _push3(`</div></div><div class="relative"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_UiInput, {
                    modelValue: unref(counterPartyFormData).inn,
                    "onUpdate:modelValue": ($event) => unref(counterPartyFormData).inn = $event,
                    placeholder: "\u0418\u041D\u041D"
                  }, null, _parent3, _scopeId2));
                  if (unref(counterPartyFormData).inn) {
                    _push3(ssrRenderComponent(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(` \u0418\u041D\u041D `);
                        } else {
                          return [
                            createTextVNode(" \u0418\u041D\u041D ")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(`</div><div class="relative"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_UiInput, {
                    modelValue: unref(counterPartyFormData).kpp,
                    "onUpdate:modelValue": ($event) => unref(counterPartyFormData).kpp = $event,
                    placeholder: "\u041A\u041F\u041F"
                  }, null, _parent3, _scopeId2));
                  if (unref(counterPartyFormData).kpp) {
                    _push3(ssrRenderComponent(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(` \u041A\u041F\u041F `);
                        } else {
                          return [
                            createTextVNode(" \u041A\u041F\u041F ")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(`</div><div class="relative"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_UiInput, {
                    modelValue: unref(counterPartyFormData).account,
                    "onUpdate:modelValue": ($event) => unref(counterPartyFormData).account = $event,
                    placeholder: "\u0420\u0430\u0441\u0447\u0435\u0442\u043D\u044B\u0439 \u0441\u0447\u0435\u0442"
                  }, null, _parent3, _scopeId2));
                  if (unref(counterPartyFormData).account) {
                    _push3(ssrRenderComponent(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(` \u0420\u0430\u0441\u0447\u0435\u0442\u043D\u044B\u0439 \u0441\u0447\u0435\u0442 `);
                        } else {
                          return [
                            createTextVNode(" \u0420\u0430\u0441\u0447\u0435\u0442\u043D\u044B\u0439 \u0441\u0447\u0435\u0442 ")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(`</div></div><div class="flex justify-end gap-2 mt-4"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_UiButton, {
                    variant: "outline",
                    onClick: ($event) => isOpen.value = false
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`\u041E\u0442\u043C\u0435\u043D\u0430`);
                      } else {
                        return [
                          createTextVNode("\u041E\u0442\u043C\u0435\u043D\u0430")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_UiButton, {
                    disabled: unref(disabled),
                    onClick: createCounterParty
                  }, {
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
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode(_component_UiDialogHeader, null, {
                      default: withCtx(() => [
                        createVNode(_component_UiDialogTitle, null, {
                          default: withCtx(() => [
                            createTextVNode("\u0421\u043E\u0437\u0434\u0430\u043D\u0438\u0435 \u043A\u043E\u043D\u0442\u0440\u0430\u0433\u0435\u043D\u0442\u0430")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_UiDialogDescription)
                      ]),
                      _: 1
                    }),
                    createVNode("div", { class: "space-y-5" }, [
                      createVNode("div", { class: "relative" }, [
                        createVNode(_component_UiInput, {
                          modelValue: unref(counterPartyFormData).title,
                          "onUpdate:modelValue": ($event) => unref(counterPartyFormData).title = $event,
                          placeholder: "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u043A\u043E\u043D\u0442\u0440\u0430\u0433\u0435\u043D\u0442\u0430",
                          class: unref(counterPartyFormData).title ? "" : "outline-1 outline-rose-300"
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "class"]),
                        unref(counterPartyFormData).title ? (openBlock(), createBlock(_component_UiLabel, {
                          key: 0,
                          class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" \u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u043A\u043E\u043D\u0442\u0440\u0430\u0433\u0435\u043D\u0442\u0430 ")
                          ]),
                          _: 1
                        })) : createCommentVNode("", true)
                      ]),
                      createVNode("div", { class: "relative w-full" }, [
                        createVNode(_component_UiSelect, {
                          modelValue: unref(counterPartyFormData).contrAgentGroup,
                          "onUpdate:modelValue": ($event) => unref(counterPartyFormData).contrAgentGroup = $event
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_UiSelectTrigger, null, {
                              default: withCtx(() => [
                                createVNode(_component_UiSelectValue, { placeholder: "\u0413\u0440\u0443\u043F\u043F\u0430" })
                              ]),
                              _: 1
                            }),
                            createVNode(_component_UiSelectContent, null, {
                              default: withCtx(() => [
                                createVNode(_component_UiSelectGroup, null, {
                                  default: withCtx(() => [
                                    createVNode(_component_UiSelectItem, {
                                      class: "w-full",
                                      value: "\u0411\u0430\u043D\u043A\u0438"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode("\u0411\u0430\u043D\u043A\u0438")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_UiSelectItem, {
                                      class: "w-full",
                                      value: "\u0413\u043E\u0441. \u043E\u0440\u0433\u0430\u043D\u044B"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode("\u0413\u043E\u0441. \u043E\u0440\u0433\u0430\u043D\u044B")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_UiSelectItem, {
                                      class: "w-full",
                                      value: "\u041A\u043B\u0438\u0435\u043D\u0442\u044B"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode("\u041A\u043B\u0438\u0435\u043D\u0442\u044B")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_UiSelectItem, {
                                      class: "w-full",
                                      value: "\u041F\u043E\u0441\u0442\u0430\u0432\u0449\u0438\u043A\u0438"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode("\u041F\u043E\u0441\u0442\u0430\u0432\u0449\u0438\u043A\u0438")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_UiSelectItem, {
                                      class: "w-full",
                                      value: "\u0421\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode("\u0421\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438")
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
                        }, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      createVNode("div", { class: "relative" }, [
                        createVNode(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap" }, {
                          default: withCtx(() => [
                            createTextVNode(" \u041A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u044F \u0434\u043B\u044F \u0432\u0445\u043E\u0434\u044F\u0449\u0438\u0445 \u043E\u043F\u0435\u0440\u0430\u0446\u0438\u0439 ")
                          ]),
                          _: 1
                        }),
                        createVNode("div", { class: "flex gap-2" }, [
                          (openBlock(), createBlock(_component_MyComboboxModels, {
                            key: unref(incomeExpenseCategories).length,
                            class: "min-w-[462px] w-[462px] overflow-hidden",
                            items: unref(incomeExpenseCategories).map((c) => ({ value: c.id, label: c.name })),
                            label: (_c2 = (_c = unref(incomeExpenseCategories).find((c) => c.id === unref(counterPartyFormData).incomeExpenseCategoryId)) == null ? void 0 : _c.name) != null ? _c2 : "\u0412\u044B\u0431\u0440\u0430\u0442\u044C",
                            "model-value": unref(counterPartyFormData).incomeExpenseCategoryId,
                            onSelectedItem: (value) => unref(counterPartyFormData).incomeExpenseCategoryId = value
                          }, null, 8, ["items", "label", "model-value", "onSelectedItem"]))
                        ])
                      ]),
                      createVNode("div", { class: "relative" }, [
                        createVNode(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap" }, {
                          default: withCtx(() => [
                            createTextVNode(" \u041A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u044F \u0434\u043B\u044F \u0438\u0441\u0445\u043E\u0434\u044F\u0449\u0438\u0445 \u043E\u043F\u0435\u0440\u0430\u0446\u0438\u0439 ")
                          ]),
                          _: 1
                        }),
                        createVNode("div", { class: "flex gap-2" }, [
                          (openBlock(), createBlock(_component_MyComboboxModels, {
                            key: unref(outcomeExpenseCategories).length,
                            class: "min-w-[462px] w-[462px] overflow-hidden",
                            items: unref(outcomeExpenseCategories).map((c) => ({ value: c.id, label: c.name })),
                            label: (_d2 = (_d = unref(outcomeExpenseCategories).find((c) => c.id === unref(counterPartyFormData).outcomeExpenseCategoryId)) == null ? void 0 : _d.name) != null ? _d2 : "\u0412\u044B\u0431\u0440\u0430\u0442\u044C",
                            "model-value": unref(counterPartyFormData).outcomeExpenseCategoryId,
                            onSelectedItem: (value) => unref(counterPartyFormData).outcomeExpenseCategoryId = value
                          }, null, 8, ["items", "label", "model-value", "onSelectedItem"]))
                        ])
                      ]),
                      createVNode("div", { class: "relative" }, [
                        createVNode(_component_UiInput, {
                          modelValue: unref(counterPartyFormData).inn,
                          "onUpdate:modelValue": ($event) => unref(counterPartyFormData).inn = $event,
                          placeholder: "\u0418\u041D\u041D"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                        unref(counterPartyFormData).inn ? (openBlock(), createBlock(_component_UiLabel, {
                          key: 0,
                          class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" \u0418\u041D\u041D ")
                          ]),
                          _: 1
                        })) : createCommentVNode("", true)
                      ]),
                      createVNode("div", { class: "relative" }, [
                        createVNode(_component_UiInput, {
                          modelValue: unref(counterPartyFormData).kpp,
                          "onUpdate:modelValue": ($event) => unref(counterPartyFormData).kpp = $event,
                          placeholder: "\u041A\u041F\u041F"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                        unref(counterPartyFormData).kpp ? (openBlock(), createBlock(_component_UiLabel, {
                          key: 0,
                          class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" \u041A\u041F\u041F ")
                          ]),
                          _: 1
                        })) : createCommentVNode("", true)
                      ]),
                      createVNode("div", { class: "relative" }, [
                        createVNode(_component_UiInput, {
                          modelValue: unref(counterPartyFormData).account,
                          "onUpdate:modelValue": ($event) => unref(counterPartyFormData).account = $event,
                          placeholder: "\u0420\u0430\u0441\u0447\u0435\u0442\u043D\u044B\u0439 \u0441\u0447\u0435\u0442"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                        unref(counterPartyFormData).account ? (openBlock(), createBlock(_component_UiLabel, {
                          key: 0,
                          class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" \u0420\u0430\u0441\u0447\u0435\u0442\u043D\u044B\u0439 \u0441\u0447\u0435\u0442 ")
                          ]),
                          _: 1
                        })) : createCommentVNode("", true)
                      ])
                    ]),
                    createVNode("div", { class: "flex justify-end gap-2 mt-4" }, [
                      createVNode(_component_UiButton, {
                        variant: "outline",
                        onClick: ($event) => isOpen.value = false
                      }, {
                        default: withCtx(() => [
                          createTextVNode("\u041E\u0442\u043C\u0435\u043D\u0430")
                        ]),
                        _: 1
                      }, 8, ["onClick"]),
                      createVNode(_component_UiButton, {
                        disabled: unref(disabled),
                        onClick: createCounterParty
                      }, {
                        default: withCtx(() => [
                          createTextVNode("\u0421\u043E\u0437\u0434\u0430\u0442\u044C")
                        ]),
                        _: 1
                      }, 8, ["disabled"])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UiDialogTrigger, null, {
                default: withCtx(() => [
                  createVNode(_component_UiButton, { variant: "secondary" }, {
                    default: withCtx(() => [
                      createTextVNode("\u0421\u043E\u0437\u0434\u0430\u0442\u044C \u043A\u043E\u043D\u0442\u0440\u0430\u0433\u0435\u043D\u0442\u0430")
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(_component_UiDialogContent, { class: "" }, {
                default: withCtx(() => {
                  var _a2, _b2;
                  var _a, _b;
                  return [
                    createVNode(_component_UiDialogHeader, null, {
                      default: withCtx(() => [
                        createVNode(_component_UiDialogTitle, null, {
                          default: withCtx(() => [
                            createTextVNode("\u0421\u043E\u0437\u0434\u0430\u043D\u0438\u0435 \u043A\u043E\u043D\u0442\u0440\u0430\u0433\u0435\u043D\u0442\u0430")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_UiDialogDescription)
                      ]),
                      _: 1
                    }),
                    createVNode("div", { class: "space-y-5" }, [
                      createVNode("div", { class: "relative" }, [
                        createVNode(_component_UiInput, {
                          modelValue: unref(counterPartyFormData).title,
                          "onUpdate:modelValue": ($event) => unref(counterPartyFormData).title = $event,
                          placeholder: "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u043A\u043E\u043D\u0442\u0440\u0430\u0433\u0435\u043D\u0442\u0430",
                          class: unref(counterPartyFormData).title ? "" : "outline-1 outline-rose-300"
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "class"]),
                        unref(counterPartyFormData).title ? (openBlock(), createBlock(_component_UiLabel, {
                          key: 0,
                          class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" \u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u043A\u043E\u043D\u0442\u0440\u0430\u0433\u0435\u043D\u0442\u0430 ")
                          ]),
                          _: 1
                        })) : createCommentVNode("", true)
                      ]),
                      createVNode("div", { class: "relative w-full" }, [
                        createVNode(_component_UiSelect, {
                          modelValue: unref(counterPartyFormData).contrAgentGroup,
                          "onUpdate:modelValue": ($event) => unref(counterPartyFormData).contrAgentGroup = $event
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_UiSelectTrigger, null, {
                              default: withCtx(() => [
                                createVNode(_component_UiSelectValue, { placeholder: "\u0413\u0440\u0443\u043F\u043F\u0430" })
                              ]),
                              _: 1
                            }),
                            createVNode(_component_UiSelectContent, null, {
                              default: withCtx(() => [
                                createVNode(_component_UiSelectGroup, null, {
                                  default: withCtx(() => [
                                    createVNode(_component_UiSelectItem, {
                                      class: "w-full",
                                      value: "\u0411\u0430\u043D\u043A\u0438"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode("\u0411\u0430\u043D\u043A\u0438")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_UiSelectItem, {
                                      class: "w-full",
                                      value: "\u0413\u043E\u0441. \u043E\u0440\u0433\u0430\u043D\u044B"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode("\u0413\u043E\u0441. \u043E\u0440\u0433\u0430\u043D\u044B")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_UiSelectItem, {
                                      class: "w-full",
                                      value: "\u041A\u043B\u0438\u0435\u043D\u0442\u044B"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode("\u041A\u043B\u0438\u0435\u043D\u0442\u044B")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_UiSelectItem, {
                                      class: "w-full",
                                      value: "\u041F\u043E\u0441\u0442\u0430\u0432\u0449\u0438\u043A\u0438"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode("\u041F\u043E\u0441\u0442\u0430\u0432\u0449\u0438\u043A\u0438")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_UiSelectItem, {
                                      class: "w-full",
                                      value: "\u0421\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode("\u0421\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438")
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
                        }, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      createVNode("div", { class: "relative" }, [
                        createVNode(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap" }, {
                          default: withCtx(() => [
                            createTextVNode(" \u041A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u044F \u0434\u043B\u044F \u0432\u0445\u043E\u0434\u044F\u0449\u0438\u0445 \u043E\u043F\u0435\u0440\u0430\u0446\u0438\u0439 ")
                          ]),
                          _: 1
                        }),
                        createVNode("div", { class: "flex gap-2" }, [
                          (openBlock(), createBlock(_component_MyComboboxModels, {
                            key: unref(incomeExpenseCategories).length,
                            class: "min-w-[462px] w-[462px] overflow-hidden",
                            items: unref(incomeExpenseCategories).map((c) => ({ value: c.id, label: c.name })),
                            label: (_a2 = (_a = unref(incomeExpenseCategories).find((c) => c.id === unref(counterPartyFormData).incomeExpenseCategoryId)) == null ? void 0 : _a.name) != null ? _a2 : "\u0412\u044B\u0431\u0440\u0430\u0442\u044C",
                            "model-value": unref(counterPartyFormData).incomeExpenseCategoryId,
                            onSelectedItem: (value) => unref(counterPartyFormData).incomeExpenseCategoryId = value
                          }, null, 8, ["items", "label", "model-value", "onSelectedItem"]))
                        ])
                      ]),
                      createVNode("div", { class: "relative" }, [
                        createVNode(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap" }, {
                          default: withCtx(() => [
                            createTextVNode(" \u041A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u044F \u0434\u043B\u044F \u0438\u0441\u0445\u043E\u0434\u044F\u0449\u0438\u0445 \u043E\u043F\u0435\u0440\u0430\u0446\u0438\u0439 ")
                          ]),
                          _: 1
                        }),
                        createVNode("div", { class: "flex gap-2" }, [
                          (openBlock(), createBlock(_component_MyComboboxModels, {
                            key: unref(outcomeExpenseCategories).length,
                            class: "min-w-[462px] w-[462px] overflow-hidden",
                            items: unref(outcomeExpenseCategories).map((c) => ({ value: c.id, label: c.name })),
                            label: (_b2 = (_b = unref(outcomeExpenseCategories).find((c) => c.id === unref(counterPartyFormData).outcomeExpenseCategoryId)) == null ? void 0 : _b.name) != null ? _b2 : "\u0412\u044B\u0431\u0440\u0430\u0442\u044C",
                            "model-value": unref(counterPartyFormData).outcomeExpenseCategoryId,
                            onSelectedItem: (value) => unref(counterPartyFormData).outcomeExpenseCategoryId = value
                          }, null, 8, ["items", "label", "model-value", "onSelectedItem"]))
                        ])
                      ]),
                      createVNode("div", { class: "relative" }, [
                        createVNode(_component_UiInput, {
                          modelValue: unref(counterPartyFormData).inn,
                          "onUpdate:modelValue": ($event) => unref(counterPartyFormData).inn = $event,
                          placeholder: "\u0418\u041D\u041D"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                        unref(counterPartyFormData).inn ? (openBlock(), createBlock(_component_UiLabel, {
                          key: 0,
                          class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" \u0418\u041D\u041D ")
                          ]),
                          _: 1
                        })) : createCommentVNode("", true)
                      ]),
                      createVNode("div", { class: "relative" }, [
                        createVNode(_component_UiInput, {
                          modelValue: unref(counterPartyFormData).kpp,
                          "onUpdate:modelValue": ($event) => unref(counterPartyFormData).kpp = $event,
                          placeholder: "\u041A\u041F\u041F"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                        unref(counterPartyFormData).kpp ? (openBlock(), createBlock(_component_UiLabel, {
                          key: 0,
                          class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" \u041A\u041F\u041F ")
                          ]),
                          _: 1
                        })) : createCommentVNode("", true)
                      ]),
                      createVNode("div", { class: "relative" }, [
                        createVNode(_component_UiInput, {
                          modelValue: unref(counterPartyFormData).account,
                          "onUpdate:modelValue": ($event) => unref(counterPartyFormData).account = $event,
                          placeholder: "\u0420\u0430\u0441\u0447\u0435\u0442\u043D\u044B\u0439 \u0441\u0447\u0435\u0442"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                        unref(counterPartyFormData).account ? (openBlock(), createBlock(_component_UiLabel, {
                          key: 0,
                          class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" \u0420\u0430\u0441\u0447\u0435\u0442\u043D\u044B\u0439 \u0441\u0447\u0435\u0442 ")
                          ]),
                          _: 1
                        })) : createCommentVNode("", true)
                      ])
                    ]),
                    createVNode("div", { class: "flex justify-end gap-2 mt-4" }, [
                      createVNode(_component_UiButton, {
                        variant: "outline",
                        onClick: ($event) => isOpen.value = false
                      }, {
                        default: withCtx(() => [
                          createTextVNode("\u041E\u0442\u043C\u0435\u043D\u0430")
                        ]),
                        _: 1
                      }, 8, ["onClick"]),
                      createVNode(_component_UiButton, {
                        disabled: unref(disabled),
                        onClick: createCounterParty
                      }, {
                        default: withCtx(() => [
                          createTextVNode("\u0421\u043E\u0437\u0434\u0430\u0442\u044C")
                        ]),
                        _: 1
                      }, 8, ["disabled"])
                    ])
                  ];
                }),
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
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/my/planfact/CounterParties/CreateModal.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const _sfc_main$8 = /* @__PURE__ */ defineComponent({
  __name: "OperationCreateModal",
  __ssrInlineRender: true,
  props: {
    accountId: {}
  },
  emits: ["operation-created"],
  setup(__props, { emit: __emit }) {
    const { $useApi } = useNuxtApp();
    const props = __props;
    const isOpen = ref(false);
    const expenseCategories = ref([]);
    const counterParties = ref([]);
    const opTypeTab = ref("\u041F\u043E\u0441\u0442\u0443\u043F\u043B\u0435\u043D\u0438\u0435");
    const disabled = ref(true);
    const emit = __emit;
    const formData = ref({
      operationDate: "",
      operationType: "\u041F\u043E\u0441\u0442\u0443\u043F\u043B\u0435\u043D\u0438\u0435",
      payPurpose: "",
      accountId: props.accountId,
      operationPositions: [{ amount: 0, counterPartyId: null, expenseCategoryId: null }]
    });
    const isFormValid = computed(() => {
      var _a;
      return formData.value.operationDate && formData.value.operationType && formData.value.accountId && ((_a = formData.value.operationPositions) == null ? void 0 : _a.length) > 0 && formData.value.operationPositions.every((pos) => pos.amount > 0 && pos.counterPartyId && pos.expenseCategoryId);
    });
    const totalAmountPrice = computed(() => {
      var _a;
      return ((_a = formData.value.operationPositions) == null ? void 0 : _a.reduce((a, b) => a + (b.amount || 0), 0)) || 0;
    });
    const fetchExpenseCategories = async (operationType) => {
      try {
        const { data } = await $useApi.get("planfact/expense-categories", {
          params: { operationType }
        });
        expenseCategories.value = data;
      } catch (error) {
        console.error(error);
        toast({
          variant: "destructive",
          title: "\u041E\u0448\u0438\u0431\u043A\u0430",
          description: "\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C \u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u0438."
        });
      }
    };
    const getCounterParties = async () => {
      try {
        const { data } = await $useApi.get("planfact/counter-parties");
        counterParties.value = data;
      } catch (error) {
        console.error(error);
        toast({
          variant: "destructive",
          title: "\u041E\u0448\u0438\u0431\u043A\u0430",
          description: "\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C \u043A\u043E\u043D\u0442\u0440\u0430\u0433\u0435\u043D\u0442\u043E\u0432."
        });
      }
    };
    const createOperation = async () => {
      try {
        disabled.value = true;
        const { data } = await $useApi.post("planfact/operation", {
          ...formData.value,
          operationPositions: formData.value.operationPositions.map((pos) => ({
            amount: pos.amount,
            counterPartyId: pos.counterPartyId || null,
            expenseCategoryId: pos.expenseCategoryId || null
          }))
        });
        toast({
          title: "\u0423\u0441\u043F\u0435\u0445",
          description: "\u041E\u043F\u0435\u0440\u0430\u0446\u0438\u044F \u0443\u0441\u043F\u0435\u0448\u043D\u043E \u0441\u043E\u0437\u0434\u0430\u043D\u0430."
        });
        emit("operation-created", data);
        isOpen.value = false;
        disabled.value = false;
        formData.value = {
          operationDate: "",
          operationType: "\u041F\u043E\u0441\u0442\u0443\u043F\u043B\u0435\u043D\u0438\u0435",
          payPurpose: "",
          accountId: props.accountId,
          operationPositions: [{ amount: 0, counterPartyId: null, expenseCategoryId: null }]
        };
      } catch (error) {
        console.error(error);
        toast({
          variant: "destructive",
          title: "\u041E\u0448\u0438\u0431\u043A\u0430",
          description: "\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u0441\u043E\u0437\u0434\u0430\u0442\u044C \u043E\u043F\u0435\u0440\u0430\u0446\u0438\u044E."
        });
      }
    };
    const addPosition = () => {
      formData.value.operationPositions = [
        ...formData.value.operationPositions || [],
        { amount: 0, counterPartyId: null, expenseCategoryId: null }
      ];
    };
    const removePosition = (index) => {
      if (formData.value.operationPositions && formData.value.operationPositions.length > 1) {
        formData.value.operationPositions.splice(index, 1);
      } else {
        toast({
          variant: "destructive",
          title: "\u041E\u0448\u0438\u0431\u043A\u0430",
          description: "\u041D\u0435\u043B\u044C\u0437\u044F \u0443\u0434\u0430\u043B\u0438\u0442\u044C \u043F\u043E\u0441\u043B\u0435\u0434\u043D\u044E\u044E \u043F\u043E\u0437\u0438\u0446\u0438\u044E."
        });
      }
    };
    const handleCategory = async (category) => {
      expenseCategories.value.push(category);
    };
    const handleCounterParty = async (counterParty) => {
      counterParties.value.push(counterParty);
    };
    watch(isOpen, (value) => {
      if (!value) {
        formData.value = {
          operationDate: "",
          operationType: "\u041F\u043E\u0441\u0442\u0443\u043F\u043B\u0435\u043D\u0438\u0435",
          payPurpose: "",
          accountId: props.accountId,
          operationPositions: [{ amount: 0, counterPartyId: null, expenseCategoryId: null }]
        };
      }
    });
    watch(opTypeTab, async (value) => {
      var _a;
      formData.value.operationType = value;
      await fetchExpenseCategories(value);
      await getCounterParties();
      formData.value.operationPositions = ((_a = formData.value.operationPositions) == null ? void 0 : _a.map((pos) => ({
        ...pos,
        expenseCategoryId: null
      }))) || [{ amount: 0, counterPartyId: null, expenseCategoryId: null }];
    }, { deep: true });
    watch(formData, () => {
      disabled.value = !isFormValid.value;
    }, { deep: true });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UiDialog = _sfc_main$4$2;
      const _component_UiDialogTrigger = _sfc_main$3$3;
      const _component_UiButton = _sfc_main$j;
      const _component_UiDialogContent = _sfc_main$k;
      const _component_UiDialogHeader = _sfc_main$2$4;
      const _component_UiDialogTitle = _sfc_main$1$5;
      const _component_UiDialogDescription = _sfc_main$o;
      const _component_UiTabs = _sfc_main$2$1;
      const _component_UiTabsList = _sfc_main$e;
      const _component_UiTabsTrigger = _sfc_main$1$1;
      const _component_UiInput = _sfc_main$m;
      const _component_UiLabel = _sfc_main$l;
      const _component_UiTextarea = _sfc_main$p;
      const _component_MyPlanfactCategoriesCreateModal = _sfc_main$a;
      const _component_MyPlanfactCounterPartiesCreateModal = _sfc_main$9;
      const _component_MyComboboxModels = _sfc_main$q;
      _push(ssrRenderComponent(_component_UiDialog, mergeProps({
        open: isOpen.value,
        "onUpdate:open": ($event) => isOpen.value = $event
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UiDialogTrigger, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UiButton, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`\u0421\u043E\u0437\u0434\u0430\u0442\u044C \u043E\u043F\u0435\u0440\u0430\u0446\u0438\u044E`);
                      } else {
                        return [
                          createTextVNode("\u0421\u043E\u0437\u0434\u0430\u0442\u044C \u043E\u043F\u0435\u0440\u0430\u0446\u0438\u044E")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UiButton, null, {
                      default: withCtx(() => [
                        createTextVNode("\u0421\u043E\u0437\u0434\u0430\u0442\u044C \u043E\u043F\u0435\u0440\u0430\u0446\u0438\u044E")
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UiDialogContent, { class: "max-w-[1200px]" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UiDialogHeader, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_UiDialogTitle, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`\u0421\u043E\u0437\u0434\u0430\u043D\u0438\u0435 \u043E\u043F\u0435\u0440\u0430\u0446\u0438\u0438`);
                            } else {
                              return [
                                createTextVNode("\u0421\u043E\u0437\u0434\u0430\u043D\u0438\u0435 \u043E\u043F\u0435\u0440\u0430\u0446\u0438\u0438")
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
                              createTextVNode("\u0421\u043E\u0437\u0434\u0430\u043D\u0438\u0435 \u043E\u043F\u0435\u0440\u0430\u0446\u0438\u0438")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_UiDialogDescription)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`<div class="flex gap-2 min-h-[600px]"${_scopeId2}><div class="space-y-5 min-w-[450px]"${_scopeId2}><div class="relative w-full"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_UiTabs, {
                    modelValue: opTypeTab.value,
                    "onUpdate:modelValue": ($event) => opTypeTab.value = $event
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_UiTabsList, { class: "w-full" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_UiTabsTrigger, {
                                class: "w-full",
                                value: "\u041F\u043E\u0441\u0442\u0443\u043F\u043B\u0435\u043D\u0438\u0435"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`\u041F\u043E\u0441\u0442\u0443\u043F\u043B\u0435\u043D\u0438\u0435`);
                                  } else {
                                    return [
                                      createTextVNode("\u041F\u043E\u0441\u0442\u0443\u043F\u043B\u0435\u043D\u0438\u0435")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_UiTabsTrigger, {
                                class: "w-full",
                                value: "\u0412\u044B\u043F\u043B\u0430\u0442\u0430"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`\u0412\u044B\u043F\u043B\u0430\u0442\u0430`);
                                  } else {
                                    return [
                                      createTextVNode("\u0412\u044B\u043F\u043B\u0430\u0442\u0430")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_UiTabsTrigger, {
                                class: "w-full",
                                value: "\u041D\u0430\u0447\u0438\u0441\u043B\u0435\u043D\u0438\u0435"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`\u041D\u0430\u0447\u0438\u0441\u043B\u0435\u043D\u0438\u0435`);
                                  } else {
                                    return [
                                      createTextVNode("\u041D\u0430\u0447\u0438\u0441\u043B\u0435\u043D\u0438\u0435")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_UiTabsTrigger, {
                                  class: "w-full",
                                  value: "\u041F\u043E\u0441\u0442\u0443\u043F\u043B\u0435\u043D\u0438\u0435"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("\u041F\u043E\u0441\u0442\u0443\u043F\u043B\u0435\u043D\u0438\u0435")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_UiTabsTrigger, {
                                  class: "w-full",
                                  value: "\u0412\u044B\u043F\u043B\u0430\u0442\u0430"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("\u0412\u044B\u043F\u043B\u0430\u0442\u0430")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_UiTabsTrigger, {
                                  class: "w-full",
                                  value: "\u041D\u0430\u0447\u0438\u0441\u043B\u0435\u043D\u0438\u0435"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("\u041D\u0430\u0447\u0438\u0441\u043B\u0435\u043D\u0438\u0435")
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_UiTabsList, { class: "w-full" }, {
                            default: withCtx(() => [
                              createVNode(_component_UiTabsTrigger, {
                                class: "w-full",
                                value: "\u041F\u043E\u0441\u0442\u0443\u043F\u043B\u0435\u043D\u0438\u0435"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode("\u041F\u043E\u0441\u0442\u0443\u043F\u043B\u0435\u043D\u0438\u0435")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_UiTabsTrigger, {
                                class: "w-full",
                                value: "\u0412\u044B\u043F\u043B\u0430\u0442\u0430"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode("\u0412\u044B\u043F\u043B\u0430\u0442\u0430")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_UiTabsTrigger, {
                                class: "w-full",
                                value: "\u041D\u0430\u0447\u0438\u0441\u043B\u0435\u043D\u0438\u0435"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode("\u041D\u0430\u0447\u0438\u0441\u043B\u0435\u043D\u0438\u0435")
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
                  }, _parent3, _scopeId2));
                  _push3(`</div><div class="relative"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_UiInput, {
                    modelValue: formData.value.operationDate,
                    "onUpdate:modelValue": ($event) => formData.value.operationDate = $event,
                    type: "date",
                    placeholder: "\u0414\u0430\u0442\u0430 \u043E\u043F\u0435\u0440\u0430\u0446\u0438\u0438",
                    class: formData.value.operationDate ? "" : "outline-1 outline-rose-300"
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` \u0414\u0430\u0442\u0430 \u043E\u043F\u0435\u0440\u0430\u0446\u0438\u0438 `);
                      } else {
                        return [
                          createTextVNode(" \u0414\u0430\u0442\u0430 \u043E\u043F\u0435\u0440\u0430\u0446\u0438\u0438 ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div><div class="relative"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_UiTextarea, {
                    modelValue: formData.value.payPurpose,
                    "onUpdate:modelValue": ($event) => formData.value.payPurpose = $event,
                    placeholder: "\u041D\u0430\u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435 \u043F\u043B\u0430\u0442\u0435\u0436\u0430"
                  }, null, _parent3, _scopeId2));
                  if (formData.value.payPurpose) {
                    _push3(ssrRenderComponent(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(` \u041D\u0430\u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435 \u043F\u043B\u0430\u0442\u0435\u0436\u0430 `);
                        } else {
                          return [
                            createTextVNode(" \u041D\u0430\u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435 \u043F\u043B\u0430\u0442\u0435\u0436\u0430 ")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(`</div></div><div class="space-y-3"${_scopeId2}><div class="flex gap-4 justify-between"${_scopeId2}><div class="relative"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_UiInput, {
                    value: totalAmountPrice.value,
                    type: "number",
                    placeholder: "\u041E\u0431\u0449\u0430\u044F \u0441\u0443\u043C\u043C\u0430",
                    disabled: "",
                    class: "bg-gray-100"
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` \u041E\u0431\u0449\u0430\u044F \u0441\u0443\u043C\u043C\u0430 `);
                      } else {
                        return [
                          createTextVNode(" \u041E\u0431\u0449\u0430\u044F \u0441\u0443\u043C\u043C\u0430 ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div>`);
                  _push3(ssrRenderComponent(_component_MyPlanfactCategoriesCreateModal, { onCategoryCreated: handleCategory }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_MyPlanfactCounterPartiesCreateModal, { onCounterpartyCreated: handleCounterParty }, null, _parent3, _scopeId2));
                  _push3(`</div><!--[-->`);
                  ssrRenderList(formData.value.operationPositions, (position, index) => {
                    var _a2, _b2;
                    var _a, _b, _c;
                    _push3(`<div class="flex gap-2 items-center"${_scopeId2}><div class="relative flex-1"${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_UiInput, {
                      modelValue: position.amount,
                      "onUpdate:modelValue": ($event) => position.amount = $event,
                      modelModifiers: { number: true },
                      type: "number",
                      placeholder: "\u0421\u0443\u043C\u043C\u0430",
                      class: position.amount > 0 ? "" : "outline-1 outline-rose-300"
                    }, null, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(` \u0421\u0443\u043C\u043C\u0430 `);
                        } else {
                          return [
                            createTextVNode(" \u0421\u0443\u043C\u043C\u0430 ")
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                    _push3(`</div><div class="relative"${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(` \u0421\u0442\u0430\u0442\u044C\u044F `);
                        } else {
                          return [
                            createTextVNode(" \u0421\u0442\u0430\u0442\u044C\u044F ")
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_component_MyComboboxModels, {
                      class: "min-w-[200px] w-[200px] overflow-hidden",
                      items: expenseCategories.value.map((c) => ({ value: c.id, label: c.name })),
                      label: (_a2 = (_a = expenseCategories.value.find((c) => c.id === position.expenseCategoryId)) == null ? void 0 : _a.name) != null ? _a2 : "\u0412\u044B\u0431\u0440\u0430\u0442\u044C",
                      "model-value": position.expenseCategoryId,
                      onSelectedItem: (value) => position.expenseCategoryId = value
                    }, null, _parent3, _scopeId2));
                    _push3(`</div><div class="relative"${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(` \u041A\u043E\u043D\u0442\u0440\u0430\u0433\u0435\u043D\u0442 `);
                        } else {
                          return [
                            createTextVNode(" \u041A\u043E\u043D\u0442\u0440\u0430\u0433\u0435\u043D\u0442 ")
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_component_MyComboboxModels, {
                      class: "min-w-[250px] w-[250px] overflow-hidden",
                      items: counterParties.value.map((c) => ({ value: c.id, label: c.title })),
                      label: (_b2 = (_b = counterParties.value.find((c) => c.id === position.counterPartyId)) == null ? void 0 : _b.title) != null ? _b2 : "\u041D\u0435 \u0432\u044B\u0431\u0440\u0430\u043D",
                      "model-value": position.counterPartyId,
                      onSelectedItem: (value) => position.counterPartyId = value
                    }, null, _parent3, _scopeId2));
                    _push3(`</div>`);
                    _push3(ssrRenderComponent(_component_UiButton, {
                      variant: "destructive",
                      disabled: ((_c = formData.value.operationPositions) == null ? void 0 : _c.length) === 1,
                      onClick: ($event) => removePosition(index)
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(` X `);
                        } else {
                          return [
                            createTextVNode(" X ")
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                    _push3(`</div>`);
                  });
                  _push3(`<!--]--><div class="flex flex-col mt-6"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_UiButton, {
                    class: "ml-auto",
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
                  _push3(`</div></div></div><div class="flex justify-end gap-2 mt-4"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_UiButton, {
                    variant: "outline",
                    onClick: ($event) => isOpen.value = false
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`\u041E\u0442\u043C\u0435\u043D\u0430`);
                      } else {
                        return [
                          createTextVNode("\u041E\u0442\u043C\u0435\u043D\u0430")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_UiButton, {
                    disabled: disabled.value,
                    onClick: createOperation
                  }, {
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
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode(_component_UiDialogHeader, null, {
                      default: withCtx(() => [
                        createVNode(_component_UiDialogTitle, null, {
                          default: withCtx(() => [
                            createTextVNode("\u0421\u043E\u0437\u0434\u0430\u043D\u0438\u0435 \u043E\u043F\u0435\u0440\u0430\u0446\u0438\u0438")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_UiDialogDescription)
                      ]),
                      _: 1
                    }),
                    createVNode("div", { class: "flex gap-2 min-h-[600px]" }, [
                      createVNode("div", { class: "space-y-5 min-w-[450px]" }, [
                        createVNode("div", { class: "relative w-full" }, [
                          createVNode(_component_UiTabs, {
                            modelValue: opTypeTab.value,
                            "onUpdate:modelValue": ($event) => opTypeTab.value = $event
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_UiTabsList, { class: "w-full" }, {
                                default: withCtx(() => [
                                  createVNode(_component_UiTabsTrigger, {
                                    class: "w-full",
                                    value: "\u041F\u043E\u0441\u0442\u0443\u043F\u043B\u0435\u043D\u0438\u0435"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode("\u041F\u043E\u0441\u0442\u0443\u043F\u043B\u0435\u043D\u0438\u0435")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_UiTabsTrigger, {
                                    class: "w-full",
                                    value: "\u0412\u044B\u043F\u043B\u0430\u0442\u0430"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode("\u0412\u044B\u043F\u043B\u0430\u0442\u0430")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_UiTabsTrigger, {
                                    class: "w-full",
                                    value: "\u041D\u0430\u0447\u0438\u0441\u043B\u0435\u043D\u0438\u0435"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode("\u041D\u0430\u0447\u0438\u0441\u043B\u0435\u043D\u0438\u0435")
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        createVNode("div", { class: "relative" }, [
                          createVNode(_component_UiInput, {
                            modelValue: formData.value.operationDate,
                            "onUpdate:modelValue": ($event) => formData.value.operationDate = $event,
                            type: "date",
                            placeholder: "\u0414\u0430\u0442\u0430 \u043E\u043F\u0435\u0440\u0430\u0446\u0438\u0438",
                            class: formData.value.operationDate ? "" : "outline-1 outline-rose-300"
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "class"]),
                          createVNode(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap" }, {
                            default: withCtx(() => [
                              createTextVNode(" \u0414\u0430\u0442\u0430 \u043E\u043F\u0435\u0440\u0430\u0446\u0438\u0438 ")
                            ]),
                            _: 1
                          })
                        ]),
                        createVNode("div", { class: "relative" }, [
                          createVNode(_component_UiTextarea, {
                            modelValue: formData.value.payPurpose,
                            "onUpdate:modelValue": ($event) => formData.value.payPurpose = $event,
                            placeholder: "\u041D\u0430\u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435 \u043F\u043B\u0430\u0442\u0435\u0436\u0430"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                          formData.value.payPurpose ? (openBlock(), createBlock(_component_UiLabel, {
                            key: 0,
                            class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" \u041D\u0430\u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435 \u043F\u043B\u0430\u0442\u0435\u0436\u0430 ")
                            ]),
                            _: 1
                          })) : createCommentVNode("", true)
                        ])
                      ]),
                      createVNode("div", { class: "space-y-3" }, [
                        createVNode("div", { class: "flex gap-4 justify-between" }, [
                          createVNode("div", { class: "relative" }, [
                            createVNode(_component_UiInput, {
                              value: totalAmountPrice.value,
                              type: "number",
                              placeholder: "\u041E\u0431\u0449\u0430\u044F \u0441\u0443\u043C\u043C\u0430",
                              disabled: "",
                              class: "bg-gray-100"
                            }, null, 8, ["value"]),
                            createVNode(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap" }, {
                              default: withCtx(() => [
                                createTextVNode(" \u041E\u0431\u0449\u0430\u044F \u0441\u0443\u043C\u043C\u0430 ")
                              ]),
                              _: 1
                            })
                          ]),
                          createVNode(_component_MyPlanfactCategoriesCreateModal, { onCategoryCreated: handleCategory }),
                          createVNode(_component_MyPlanfactCounterPartiesCreateModal, { onCounterpartyCreated: handleCounterParty })
                        ]),
                        (openBlock(true), createBlock(Fragment, null, renderList(formData.value.operationPositions, (position, index) => {
                          var _a2, _b2;
                          var _a, _b, _c;
                          return openBlock(), createBlock("div", {
                            key: index,
                            class: "flex gap-2 items-center"
                          }, [
                            createVNode("div", { class: "relative flex-1" }, [
                              createVNode(_component_UiInput, {
                                modelValue: position.amount,
                                "onUpdate:modelValue": ($event) => position.amount = $event,
                                modelModifiers: { number: true },
                                type: "number",
                                placeholder: "\u0421\u0443\u043C\u043C\u0430",
                                class: position.amount > 0 ? "" : "outline-1 outline-rose-300"
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "class"]),
                              createVNode(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap" }, {
                                default: withCtx(() => [
                                  createTextVNode(" \u0421\u0443\u043C\u043C\u0430 ")
                                ]),
                                _: 1
                              })
                            ]),
                            createVNode("div", { class: "relative" }, [
                              createVNode(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap" }, {
                                default: withCtx(() => [
                                  createTextVNode(" \u0421\u0442\u0430\u0442\u044C\u044F ")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_MyComboboxModels, {
                                class: "min-w-[200px] w-[200px] overflow-hidden",
                                items: expenseCategories.value.map((c) => ({ value: c.id, label: c.name })),
                                label: (_a2 = (_a = expenseCategories.value.find((c) => c.id === position.expenseCategoryId)) == null ? void 0 : _a.name) != null ? _a2 : "\u0412\u044B\u0431\u0440\u0430\u0442\u044C",
                                "model-value": position.expenseCategoryId,
                                onSelectedItem: (value) => position.expenseCategoryId = value
                              }, null, 8, ["items", "label", "model-value", "onSelectedItem"])
                            ]),
                            createVNode("div", { class: "relative" }, [
                              createVNode(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap" }, {
                                default: withCtx(() => [
                                  createTextVNode(" \u041A\u043E\u043D\u0442\u0440\u0430\u0433\u0435\u043D\u0442 ")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_MyComboboxModels, {
                                class: "min-w-[250px] w-[250px] overflow-hidden",
                                items: counterParties.value.map((c) => ({ value: c.id, label: c.title })),
                                label: (_b2 = (_b = counterParties.value.find((c) => c.id === position.counterPartyId)) == null ? void 0 : _b.title) != null ? _b2 : "\u041D\u0435 \u0432\u044B\u0431\u0440\u0430\u043D",
                                "model-value": position.counterPartyId,
                                onSelectedItem: (value) => position.counterPartyId = value
                              }, null, 8, ["items", "label", "model-value", "onSelectedItem"])
                            ]),
                            createVNode(_component_UiButton, {
                              variant: "destructive",
                              disabled: ((_c = formData.value.operationPositions) == null ? void 0 : _c.length) === 1,
                              onClick: ($event) => removePosition(index)
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" X ")
                              ]),
                              _: 2
                            }, 1032, ["disabled", "onClick"])
                          ]);
                        }), 128)),
                        createVNode("div", { class: "flex flex-col mt-6" }, [
                          createVNode(_component_UiButton, {
                            class: "ml-auto",
                            onClick: addPosition
                          }, {
                            default: withCtx(() => [
                              createTextVNode("\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u043F\u043E\u0437\u0438\u0446\u0438\u044E")
                            ]),
                            _: 1
                          })
                        ])
                      ])
                    ]),
                    createVNode("div", { class: "flex justify-end gap-2 mt-4" }, [
                      createVNode(_component_UiButton, {
                        variant: "outline",
                        onClick: ($event) => isOpen.value = false
                      }, {
                        default: withCtx(() => [
                          createTextVNode("\u041E\u0442\u043C\u0435\u043D\u0430")
                        ]),
                        _: 1
                      }, 8, ["onClick"]),
                      createVNode(_component_UiButton, {
                        disabled: disabled.value,
                        onClick: createOperation
                      }, {
                        default: withCtx(() => [
                          createTextVNode("\u0421\u043E\u0437\u0434\u0430\u0442\u044C")
                        ]),
                        _: 1
                      }, 8, ["disabled"])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UiDialogTrigger, null, {
                default: withCtx(() => [
                  createVNode(_component_UiButton, null, {
                    default: withCtx(() => [
                      createTextVNode("\u0421\u043E\u0437\u0434\u0430\u0442\u044C \u043E\u043F\u0435\u0440\u0430\u0446\u0438\u044E")
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(_component_UiDialogContent, { class: "max-w-[1200px]" }, {
                default: withCtx(() => [
                  createVNode(_component_UiDialogHeader, null, {
                    default: withCtx(() => [
                      createVNode(_component_UiDialogTitle, null, {
                        default: withCtx(() => [
                          createTextVNode("\u0421\u043E\u0437\u0434\u0430\u043D\u0438\u0435 \u043E\u043F\u0435\u0440\u0430\u0446\u0438\u0438")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_UiDialogDescription)
                    ]),
                    _: 1
                  }),
                  createVNode("div", { class: "flex gap-2 min-h-[600px]" }, [
                    createVNode("div", { class: "space-y-5 min-w-[450px]" }, [
                      createVNode("div", { class: "relative w-full" }, [
                        createVNode(_component_UiTabs, {
                          modelValue: opTypeTab.value,
                          "onUpdate:modelValue": ($event) => opTypeTab.value = $event
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_UiTabsList, { class: "w-full" }, {
                              default: withCtx(() => [
                                createVNode(_component_UiTabsTrigger, {
                                  class: "w-full",
                                  value: "\u041F\u043E\u0441\u0442\u0443\u043F\u043B\u0435\u043D\u0438\u0435"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("\u041F\u043E\u0441\u0442\u0443\u043F\u043B\u0435\u043D\u0438\u0435")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_UiTabsTrigger, {
                                  class: "w-full",
                                  value: "\u0412\u044B\u043F\u043B\u0430\u0442\u0430"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("\u0412\u044B\u043F\u043B\u0430\u0442\u0430")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_UiTabsTrigger, {
                                  class: "w-full",
                                  value: "\u041D\u0430\u0447\u0438\u0441\u043B\u0435\u043D\u0438\u0435"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("\u041D\u0430\u0447\u0438\u0441\u043B\u0435\u043D\u0438\u0435")
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      createVNode("div", { class: "relative" }, [
                        createVNode(_component_UiInput, {
                          modelValue: formData.value.operationDate,
                          "onUpdate:modelValue": ($event) => formData.value.operationDate = $event,
                          type: "date",
                          placeholder: "\u0414\u0430\u0442\u0430 \u043E\u043F\u0435\u0440\u0430\u0446\u0438\u0438",
                          class: formData.value.operationDate ? "" : "outline-1 outline-rose-300"
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "class"]),
                        createVNode(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap" }, {
                          default: withCtx(() => [
                            createTextVNode(" \u0414\u0430\u0442\u0430 \u043E\u043F\u0435\u0440\u0430\u0446\u0438\u0438 ")
                          ]),
                          _: 1
                        })
                      ]),
                      createVNode("div", { class: "relative" }, [
                        createVNode(_component_UiTextarea, {
                          modelValue: formData.value.payPurpose,
                          "onUpdate:modelValue": ($event) => formData.value.payPurpose = $event,
                          placeholder: "\u041D\u0430\u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435 \u043F\u043B\u0430\u0442\u0435\u0436\u0430"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                        formData.value.payPurpose ? (openBlock(), createBlock(_component_UiLabel, {
                          key: 0,
                          class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" \u041D\u0430\u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435 \u043F\u043B\u0430\u0442\u0435\u0436\u0430 ")
                          ]),
                          _: 1
                        })) : createCommentVNode("", true)
                      ])
                    ]),
                    createVNode("div", { class: "space-y-3" }, [
                      createVNode("div", { class: "flex gap-4 justify-between" }, [
                        createVNode("div", { class: "relative" }, [
                          createVNode(_component_UiInput, {
                            value: totalAmountPrice.value,
                            type: "number",
                            placeholder: "\u041E\u0431\u0449\u0430\u044F \u0441\u0443\u043C\u043C\u0430",
                            disabled: "",
                            class: "bg-gray-100"
                          }, null, 8, ["value"]),
                          createVNode(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap" }, {
                            default: withCtx(() => [
                              createTextVNode(" \u041E\u0431\u0449\u0430\u044F \u0441\u0443\u043C\u043C\u0430 ")
                            ]),
                            _: 1
                          })
                        ]),
                        createVNode(_component_MyPlanfactCategoriesCreateModal, { onCategoryCreated: handleCategory }),
                        createVNode(_component_MyPlanfactCounterPartiesCreateModal, { onCounterpartyCreated: handleCounterParty })
                      ]),
                      (openBlock(true), createBlock(Fragment, null, renderList(formData.value.operationPositions, (position, index) => {
                        var _a2, _b2;
                        var _a, _b, _c;
                        return openBlock(), createBlock("div", {
                          key: index,
                          class: "flex gap-2 items-center"
                        }, [
                          createVNode("div", { class: "relative flex-1" }, [
                            createVNode(_component_UiInput, {
                              modelValue: position.amount,
                              "onUpdate:modelValue": ($event) => position.amount = $event,
                              modelModifiers: { number: true },
                              type: "number",
                              placeholder: "\u0421\u0443\u043C\u043C\u0430",
                              class: position.amount > 0 ? "" : "outline-1 outline-rose-300"
                            }, null, 8, ["modelValue", "onUpdate:modelValue", "class"]),
                            createVNode(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap" }, {
                              default: withCtx(() => [
                                createTextVNode(" \u0421\u0443\u043C\u043C\u0430 ")
                              ]),
                              _: 1
                            })
                          ]),
                          createVNode("div", { class: "relative" }, [
                            createVNode(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap" }, {
                              default: withCtx(() => [
                                createTextVNode(" \u0421\u0442\u0430\u0442\u044C\u044F ")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_MyComboboxModels, {
                              class: "min-w-[200px] w-[200px] overflow-hidden",
                              items: expenseCategories.value.map((c) => ({ value: c.id, label: c.name })),
                              label: (_a2 = (_a = expenseCategories.value.find((c) => c.id === position.expenseCategoryId)) == null ? void 0 : _a.name) != null ? _a2 : "\u0412\u044B\u0431\u0440\u0430\u0442\u044C",
                              "model-value": position.expenseCategoryId,
                              onSelectedItem: (value) => position.expenseCategoryId = value
                            }, null, 8, ["items", "label", "model-value", "onSelectedItem"])
                          ]),
                          createVNode("div", { class: "relative" }, [
                            createVNode(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap" }, {
                              default: withCtx(() => [
                                createTextVNode(" \u041A\u043E\u043D\u0442\u0440\u0430\u0433\u0435\u043D\u0442 ")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_MyComboboxModels, {
                              class: "min-w-[250px] w-[250px] overflow-hidden",
                              items: counterParties.value.map((c) => ({ value: c.id, label: c.title })),
                              label: (_b2 = (_b = counterParties.value.find((c) => c.id === position.counterPartyId)) == null ? void 0 : _b.title) != null ? _b2 : "\u041D\u0435 \u0432\u044B\u0431\u0440\u0430\u043D",
                              "model-value": position.counterPartyId,
                              onSelectedItem: (value) => position.counterPartyId = value
                            }, null, 8, ["items", "label", "model-value", "onSelectedItem"])
                          ]),
                          createVNode(_component_UiButton, {
                            variant: "destructive",
                            disabled: ((_c = formData.value.operationPositions) == null ? void 0 : _c.length) === 1,
                            onClick: ($event) => removePosition(index)
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" X ")
                            ]),
                            _: 2
                          }, 1032, ["disabled", "onClick"])
                        ]);
                      }), 128)),
                      createVNode("div", { class: "flex flex-col mt-6" }, [
                        createVNode(_component_UiButton, {
                          class: "ml-auto",
                          onClick: addPosition
                        }, {
                          default: withCtx(() => [
                            createTextVNode("\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u043F\u043E\u0437\u0438\u0446\u0438\u044E")
                          ]),
                          _: 1
                        })
                      ])
                    ])
                  ]),
                  createVNode("div", { class: "flex justify-end gap-2 mt-4" }, [
                    createVNode(_component_UiButton, {
                      variant: "outline",
                      onClick: ($event) => isOpen.value = false
                    }, {
                      default: withCtx(() => [
                        createTextVNode("\u041E\u0442\u043C\u0435\u043D\u0430")
                      ]),
                      _: 1
                    }, 8, ["onClick"]),
                    createVNode(_component_UiButton, {
                      disabled: disabled.value,
                      onClick: createOperation
                    }, {
                      default: withCtx(() => [
                        createTextVNode("\u0421\u043E\u0437\u0434\u0430\u0442\u044C")
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
      }, _parent));
    };
  }
});
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/my/planfact/OperationCreateModal.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
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
      const _component_UiButton = _sfc_main$j;
      const _component_UiSeparator = _sfc_main$t;
      const _component_UiBadge = _sfc_main$u;
      const _component_UiPopoverContent = _sfc_main$r;
      const _component_UiCommand = _sfc_main$3$5;
      const _component_UiCommandInput = _sfc_main$v;
      const _component_UiCommandList = _sfc_main$w;
      const _component_UiCommandEmpty = _sfc_main$1$7;
      const _component_UiCommandGroup = _sfc_main$2$7;
      const _component_UiCommandItem = _sfc_main$1$8;
      const _component_UiCommandSeparator = _sfc_main$x;
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
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/my/planfact/Operations/DataTableFacetedFilter.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "DataTableToolbar",
  __ssrInlineRender: true,
  props: {
    table: {},
    operationTypes: {},
    contragentsList: {}
  },
  setup(__props) {
    const props = __props;
    const isFiltered = computed(
      () => props.table.getState().columnFilters.length > 0
    );
    return (_ctx, _push, _parent, _attrs) => {
      const _component_MyPlanfactOperationsDataTableFacetedFilter = _sfc_main$7;
      const _component_UiButton = _sfc_main$j;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex items-center justify-between" }, _attrs))}><div class="flex flex-1 items-center space-x-2">`);
      if (_ctx.table.getColumn("operationType")) {
        _push(ssrRenderComponent(_component_MyPlanfactOperationsDataTableFacetedFilter, {
          column: _ctx.table.getColumn("operationType"),
          title: "\u0422\u0438\u043F \u043E\u043F\u0435\u0440\u0430\u0446\u0438\u0438",
          options: _ctx.operationTypes
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
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/my/planfact/Operations/DataTableToolbar.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "DataTable",
  __ssrInlineRender: true,
  props: {
    columns: {},
    contragents: {},
    data: {}
  },
  emits: ["item-clicked"],
  setup(__props, { emit: __emit }) {
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
    const emit = __emit;
    const itemClick = (id) => {
      emit("item-clicked", id);
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_MyPlanfactOperationsDataTableToolbar = _sfc_main$6;
      const _component_UiPopover = _sfc_main$2$5;
      const _component_UiPopoverTrigger = _sfc_main$1$6;
      const _component_UiButton = _sfc_main$j;
      const _component_UiPopoverContent = _sfc_main$r;
      const _component_UiCheckbox = _sfc_main$s;
      const _component_UiTable = _sfc_main$5$1;
      const _component_UiTableHeader = _sfc_main$h;
      const _component_UiTableRow = _sfc_main$2$3;
      const _component_UiTableHead = _sfc_main$1$4;
      const _component_UiTableBody = _sfc_main$4$1;
      const _component_UiTableCell = _sfc_main$3$2;
      _push(`<!--[--><div class="flex justify-between mb-1 mt-[-33px]"><div class="ml-[170px]">`);
      _push(ssrRenderComponent(_component_MyPlanfactOperationsDataTableToolbar, {
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
      _push(`</div></div><div class="rounded-md border max-h-[calc(100vh-213px)] overflow-y-scroll bg-slate-100">`);
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
                        key: row.id,
                        class: "cursor-pointer",
                        onClick: ($event) => itemClick(row.original.operationId)
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
                        key: row.id,
                        class: "cursor-pointer",
                        onClick: ($event) => itemClick(row.original.operationId)
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
                      }, 1032, ["onClick"]);
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
                        key: row.id,
                        class: "cursor-pointer",
                        onClick: ($event) => itemClick(row.original.operationId)
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
                      }, 1032, ["onClick"]);
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
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/my/planfact/Operations/DataTable.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "OperationModal",
  __ssrInlineRender: true,
  props: {
    operation: {},
    isOpen: { type: Boolean }
  },
  emits: ["update:isOpen", "save", "delete"],
  setup(__props, { emit: __emit }) {
    const { $useApi } = useNuxtApp();
    const props = __props;
    const expenseCategories = ref([]);
    const counterParties = ref([]);
    const emit = __emit;
    const formData = ref({});
    const originalData = ref({});
    const opTypeTab = ref(props.operation.operationType);
    watch(
      () => props.operation,
      (newOperation) => {
        var _a, _b;
        if (newOperation) {
          formData.value = {
            ...newOperation,
            operationPositions: ((_a = newOperation.operationPositions) == null ? void 0 : _a.map((pos) => ({ ...pos }))) || [{ amount: 0, counterPartyId: null, expenseCategoryId: null }]
          };
          originalData.value = {
            ...newOperation,
            operationPositions: ((_b = newOperation.operationPositions) == null ? void 0 : _b.map((pos) => ({ ...pos }))) || [{ amount: 0, counterPartyId: null, expenseCategoryId: null }]
          };
        } else {
          formData.value = { operationPositions: [{ amount: 0, counterPartyId: null, expenseCategoryId: null, operationId: props.operation.id }] };
          originalData.value = { operationPositions: [{ amount: 0, counterPartyId: null, expenseCategoryId: null, operationId: props.operation.id }] };
        }
      },
      { immediate: true }
    );
    const isFormChanged = computed(() => {
      return JSON.stringify(formData.value) !== JSON.stringify(originalData.value);
    });
    const totalAmountPrice = ref(0);
    const isPositionsValid = computed(() => {
      var _a;
      return formData.value.operationPositions && ((_a = formData.value.operationPositions) == null ? void 0 : _a.length) > 0 && formData.value.operationPositions.every((pos) => pos.amount > 0 && pos.counterPartyId && pos.expenseCategoryId);
    });
    const handleCancel = () => {
      var _a;
      formData.value = {
        ...originalData.value,
        operationPositions: ((_a = originalData.value.operationPositions) == null ? void 0 : _a.map((pos) => ({ ...pos }))) || [{ amount: 0, counterPartyId: null, expenseCategoryId: null, operationId: props.operation.id }]
      };
      emit("update:isOpen", false);
    };
    const handleSave = async () => {
      var _a;
      if (formData.value && formData.value.operationId && isPositionsValid.value) {
        try {
          const { data } = await $useApi.patch(`planfact/operation/${formData.value.operationId}`, {
            ...formData.value,
            operationPositions: (_a = formData.value.operationPositions) == null ? void 0 : _a.map((pos) => ({
              id: pos.id,
              amount: pos.amount,
              counterPartyId: pos.counterPartyId || null,
              expenseCategoryId: pos.expenseCategoryId || null,
              operationId: formData.value.operationId
            }))
          });
          emit("save", data);
          emit("update:isOpen", false);
          toast({
            title: "\u0423\u0441\u043F\u0435\u0445",
            description: "\u041E\u043F\u0435\u0440\u0430\u0446\u0438\u044F \u0443\u0441\u043F\u0435\u0448\u043D\u043E \u043E\u0431\u043D\u043E\u0432\u043B\u0435\u043D\u0430."
          });
        } catch (error) {
          console.error(error);
          toast({
            variant: "destructive",
            title: "\u041E\u0448\u0438\u0431\u043A\u0430",
            description: "\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u043E\u0431\u043D\u043E\u0432\u0438\u0442\u044C \u043E\u043F\u0435\u0440\u0430\u0446\u0438\u044E."
          });
        }
      } else {
        toast({
          variant: "destructive",
          title: "\u041E\u0448\u0438\u0431\u043A\u0430",
          description: "\u041A\u0430\u0436\u0434\u0430\u044F \u043F\u043E\u0437\u0438\u0446\u0438\u044F \u0434\u043E\u043B\u0436\u043D\u0430 \u0438\u043C\u0435\u0442\u044C \u0441\u0443\u043C\u043C\u0443 \u0431\u043E\u043B\u044C\u0448\u0435 0, \u043A\u043E\u043D\u0442\u0440\u0430\u0433\u0435\u043D\u0442\u0430 \u0438 \u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u044E."
        });
      }
    };
    const handleDelete = async () => {
      var _a;
      if ((_a = formData.value) == null ? void 0 : _a.operationId) {
        await deleteOperation(formData.value.operationId);
        emit("delete");
        emit("update:isOpen", false);
      }
    };
    const deleteOperation = async (operationId) => {
      try {
        await $useApi.delete(`planfact/operation/${operationId}`);
        toast({
          title: "\u0423\u0441\u043F\u0435\u0445",
          description: "\u041E\u043F\u0435\u0440\u0430\u0446\u0438\u044F \u0443\u0441\u043F\u0435\u0448\u043D\u043E \u0443\u0434\u0430\u043B\u0435\u043D\u0430."
        });
      } catch (error) {
        console.error(error);
        toast({
          variant: "destructive",
          title: "\u041E\u0448\u0438\u0431\u043A\u0430",
          description: "\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u0443\u0434\u0430\u043B\u0438\u0442\u044C \u043E\u043F\u0435\u0440\u0430\u0446\u0438\u044E."
        });
      }
    };
    const fetchExpenseCategories = async (operationType) => {
      try {
        const { data } = await $useApi.get("planfact/expense-categories", {
          params: { operationType }
        });
        expenseCategories.value = data;
      } catch (error) {
        console.error(error);
        toast({
          variant: "destructive",
          title: "\u041E\u0448\u0438\u0431\u043A\u0430",
          description: "\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C \u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u0438."
        });
      }
    };
    const getCounterParties = async () => {
      try {
        const { data } = await $useApi.get("planfact/counter-parties");
        counterParties.value = data;
      } catch (error) {
        console.error(error);
        toast({
          variant: "destructive",
          title: "\u041E\u0448\u0438\u0431\u043A\u0430",
          description: "\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C \u043A\u043E\u043D\u0442\u0440\u0430\u0433\u0435\u043D\u0442\u043E\u0432."
        });
      }
    };
    const addPosition = () => {
      formData.value.operationPositions = [
        ...formData.value.operationPositions || [],
        { amount: 0, counterPartyId: null, expenseCategoryId: null, operationId: props.operation.id }
      ];
    };
    const removePosition = (index) => {
      if (formData.value.operationPositions && formData.value.operationPositions.length > 1) {
        formData.value.operationPositions.splice(index, 1);
      } else {
        toast({
          variant: "destructive",
          title: "\u041E\u0448\u0438\u0431\u043A\u0430",
          description: "\u041D\u0435\u043B\u044C\u0437\u044F \u0443\u0434\u0430\u043B\u0438\u0442\u044C \u043F\u043E\u0441\u043B\u0435\u0434\u043D\u044E\u044E \u043F\u043E\u0437\u0438\u0446\u0438\u044E."
        });
      }
    };
    const handleCategory = async (category) => {
      expenseCategories.value.push(category);
    };
    const handleCounterParty = async (counterParty) => {
      counterParties.value.push(counterParty);
    };
    watch(props, (val) => {
      if (!val.isOpen) {
        handleCancel();
      }
    });
    watch(opTypeTab, async (value) => {
      var _a;
      formData.value.operationType = value;
      await fetchExpenseCategories(value);
      await getCounterParties();
      formData.value.operationPositions = ((_a = formData.value.operationPositions) == null ? void 0 : _a.map((pos) => ({
        ...pos,
        expenseCategoryId: null
      }))) || [{ amount: 0, counterPartyId: null, expenseCategoryId: null, operationId: props.operation.id }];
    }, { deep: true });
    watch(formData, (val) => {
      totalAmountPrice.value = val.operationPositions ? val.operationPositions.reduce((a, b) => a + b.amount, 0) : 0;
    }, { deep: true });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UiDialog = _sfc_main$4$2;
      const _component_UiDialogContent = _sfc_main$k;
      const _component_UiDialogHeader = _sfc_main$2$4;
      const _component_UiDialogTitle = _sfc_main$1$5;
      const _component_UiDialogDescription = _sfc_main$o;
      const _component_UiTabs = _sfc_main$2$1;
      const _component_UiTabsList = _sfc_main$e;
      const _component_UiTabsTrigger = _sfc_main$1$1;
      const _component_UiInput = _sfc_main$m;
      const _component_UiLabel = _sfc_main$l;
      const _component_UiTextarea = _sfc_main$p;
      const _component_MyPlanfactCategoriesCreateModal = _sfc_main$a;
      const _component_MyPlanfactCounterPartiesCreateModal = _sfc_main$9;
      const _component_MyComboboxModels = _sfc_main$q;
      const _component_UiButton = _sfc_main$j;
      _push(ssrRenderComponent(_component_UiDialog, mergeProps({
        open: _ctx.isOpen,
        "onUpdate:open": ($event) => emit("update:isOpen", $event)
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UiDialogContent, { class: "max-w-[1200px]" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UiDialogHeader, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_UiDialogTitle, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435 \u043E\u043F\u0435\u0440\u0430\u0446\u0438\u0438`);
                            } else {
                              return [
                                createTextVNode("\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435 \u043E\u043F\u0435\u0440\u0430\u0446\u0438\u0438")
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
                              createTextVNode("\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435 \u043E\u043F\u0435\u0440\u0430\u0446\u0438\u0438")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_UiDialogDescription)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`<div class="flex gap-2 min-h-[600px]"${_scopeId2}><div class="space-y-5 min-w-[450px]"${_scopeId2}><div class="relative w-full"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_UiTabs, {
                    modelValue: opTypeTab.value,
                    "onUpdate:modelValue": ($event) => opTypeTab.value = $event
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_UiTabsList, { class: "w-full" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_UiTabsTrigger, {
                                class: "w-full",
                                value: "\u041F\u043E\u0441\u0442\u0443\u043F\u043B\u0435\u043D\u0438\u0435"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`\u041F\u043E\u0441\u0442\u0443\u043F\u043B\u0435\u043D\u0438\u0435`);
                                  } else {
                                    return [
                                      createTextVNode("\u041F\u043E\u0441\u0442\u0443\u043F\u043B\u0435\u043D\u0438\u0435")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_UiTabsTrigger, {
                                class: "w-full",
                                value: "\u0412\u044B\u043F\u043B\u0430\u0442\u0430"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`\u0412\u044B\u043F\u043B\u0430\u0442\u0430`);
                                  } else {
                                    return [
                                      createTextVNode("\u0412\u044B\u043F\u043B\u0430\u0442\u0430")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_UiTabsTrigger, {
                                class: "w-full",
                                value: "\u041D\u0430\u0447\u0438\u0441\u043B\u0435\u043D\u0438\u0435"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`\u041D\u0430\u0447\u0438\u0441\u043B\u0435\u043D\u0438\u0435`);
                                  } else {
                                    return [
                                      createTextVNode("\u041D\u0430\u0447\u0438\u0441\u043B\u0435\u043D\u0438\u0435")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_UiTabsTrigger, {
                                  class: "w-full",
                                  value: "\u041F\u043E\u0441\u0442\u0443\u043F\u043B\u0435\u043D\u0438\u0435"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("\u041F\u043E\u0441\u0442\u0443\u043F\u043B\u0435\u043D\u0438\u0435")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_UiTabsTrigger, {
                                  class: "w-full",
                                  value: "\u0412\u044B\u043F\u043B\u0430\u0442\u0430"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("\u0412\u044B\u043F\u043B\u0430\u0442\u0430")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_UiTabsTrigger, {
                                  class: "w-full",
                                  value: "\u041D\u0430\u0447\u0438\u0441\u043B\u0435\u043D\u0438\u0435"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("\u041D\u0430\u0447\u0438\u0441\u043B\u0435\u043D\u0438\u0435")
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_UiTabsList, { class: "w-full" }, {
                            default: withCtx(() => [
                              createVNode(_component_UiTabsTrigger, {
                                class: "w-full",
                                value: "\u041F\u043E\u0441\u0442\u0443\u043F\u043B\u0435\u043D\u0438\u0435"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode("\u041F\u043E\u0441\u0442\u0443\u043F\u043B\u0435\u043D\u0438\u0435")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_UiTabsTrigger, {
                                class: "w-full",
                                value: "\u0412\u044B\u043F\u043B\u0430\u0442\u0430"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode("\u0412\u044B\u043F\u043B\u0430\u0442\u0430")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_UiTabsTrigger, {
                                class: "w-full",
                                value: "\u041D\u0430\u0447\u0438\u0441\u043B\u0435\u043D\u0438\u0435"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode("\u041D\u0430\u0447\u0438\u0441\u043B\u0435\u043D\u0438\u0435")
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
                  }, _parent3, _scopeId2));
                  _push3(`</div><div class="relative"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_UiInput, {
                    modelValue: formData.value.operationDate,
                    "onUpdate:modelValue": ($event) => formData.value.operationDate = $event,
                    type: "date",
                    placeholder: "\u0414\u0430\u0442\u0430 \u043E\u043F\u0435\u0440\u0430\u0446\u0438\u0438",
                    class: formData.value.operationDate ? "" : "outline-1 outline-rose-300"
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` \u0414\u0430\u0442\u0430 \u043E\u043F\u0435\u0440\u0430\u0446\u0438\u0438 `);
                      } else {
                        return [
                          createTextVNode(" \u0414\u0430\u0442\u0430 \u043E\u043F\u0435\u0440\u0430\u0446\u0438\u0438 ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div><div class="relative"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_UiTextarea, {
                    modelValue: formData.value.payPurpose,
                    "onUpdate:modelValue": ($event) => formData.value.payPurpose = $event,
                    placeholder: "\u041D\u0430\u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435 \u043F\u043B\u0430\u0442\u0435\u0436\u0430"
                  }, null, _parent3, _scopeId2));
                  if (formData.value.payPurpose) {
                    _push3(ssrRenderComponent(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(` \u041D\u0430\u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435 \u043F\u043B\u0430\u0442\u0435\u0436\u0430 `);
                        } else {
                          return [
                            createTextVNode(" \u041D\u0430\u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435 \u043F\u043B\u0430\u0442\u0435\u0436\u0430 ")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(`</div></div><div class="space-y-3"${_scopeId2}><div class="flex gap-4 justify-between"${_scopeId2}><div class="relative"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_UiInput, {
                    value: totalAmountPrice.value,
                    type: "number",
                    placeholder: "\u041E\u0431\u0449\u0430\u044F \u0441\u0443\u043C\u043C\u0430",
                    disabled: "",
                    class: "bg-gray-100"
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` \u041E\u0431\u0449\u0430\u044F \u0441\u0443\u043C\u043C\u0430 `);
                      } else {
                        return [
                          createTextVNode(" \u041E\u0431\u0449\u0430\u044F \u0441\u0443\u043C\u043C\u0430 ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div>`);
                  _push3(ssrRenderComponent(_component_MyPlanfactCategoriesCreateModal, { onCategoryCreated: handleCategory }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_MyPlanfactCounterPartiesCreateModal, { onCounterpartyCreated: handleCounterParty }, null, _parent3, _scopeId2));
                  _push3(`</div><!--[-->`);
                  ssrRenderList(formData.value.operationPositions, (position, index) => {
                    var _a2, _b2;
                    var _a, _b, _c;
                    _push3(`<div class="flex gap-2 items-center"${_scopeId2}><div class="relative flex-1"${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_UiInput, {
                      modelValue: position.amount,
                      "onUpdate:modelValue": ($event) => position.amount = $event,
                      modelModifiers: { number: true },
                      type: "number",
                      placeholder: "\u0421\u0443\u043C\u043C\u0430",
                      class: position.amount > 0 ? "" : "outline-1 outline-rose-300"
                    }, null, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(` \u0421\u0443\u043C\u043C\u0430 `);
                        } else {
                          return [
                            createTextVNode(" \u0421\u0443\u043C\u043C\u0430 ")
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                    _push3(`</div><div class="relative"${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(` \u0421\u0442\u0430\u0442\u044C\u044F `);
                        } else {
                          return [
                            createTextVNode(" \u0421\u0442\u0430\u0442\u044C\u044F ")
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_component_MyComboboxModels, {
                      class: "min-w-[200px] w-[200px] overflow-hidden",
                      items: expenseCategories.value.map((c) => ({ value: c.id, label: c.name })),
                      label: (_a2 = (_a = expenseCategories.value.find((c) => c.id === position.expenseCategoryId)) == null ? void 0 : _a.name) != null ? _a2 : "\u0412\u044B\u0431\u0440\u0430\u0442\u044C",
                      "model-value": position.expenseCategoryId,
                      onSelectedItem: (value) => position.expenseCategoryId = value
                    }, null, _parent3, _scopeId2));
                    _push3(`</div><div class="relative"${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(` \u041A\u043E\u043D\u0442\u0440\u0430\u0433\u0435\u043D\u0442 `);
                        } else {
                          return [
                            createTextVNode(" \u041A\u043E\u043D\u0442\u0440\u0430\u0433\u0435\u043D\u0442 ")
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_component_MyComboboxModels, {
                      class: "min-w-[250px] w-[250px] overflow-hidden",
                      items: counterParties.value.map((c) => ({ value: c.id, label: c.title })),
                      label: (_b2 = (_b = counterParties.value.find((c) => c.id === position.counterPartyId)) == null ? void 0 : _b.title) != null ? _b2 : "\u041D\u0435 \u0432\u044B\u0431\u0440\u0430\u043D",
                      "model-value": position.counterPartyId,
                      onSelectedItem: (value) => position.counterPartyId = value
                    }, null, _parent3, _scopeId2));
                    _push3(`</div>`);
                    _push3(ssrRenderComponent(_component_UiButton, {
                      variant: "destructive",
                      disabled: ((_c = formData.value.operationPositions) == null ? void 0 : _c.length) === 1,
                      onClick: ($event) => removePosition(index)
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(` X `);
                        } else {
                          return [
                            createTextVNode(" X ")
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                    _push3(`</div>`);
                  });
                  _push3(`<!--]--><div class="flex flex-col mt-6"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_UiButton, {
                    class: "ml-auto",
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
                  _push3(`</div></div></div><div class="flex justify-end gap-2 mt-4"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_UiButton, {
                    variant: "destructive",
                    class: "mr-auto",
                    onClick: handleDelete
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`\u0423\u0434\u0430\u043B\u0438\u0442\u044C`);
                      } else {
                        return [
                          createTextVNode("\u0423\u0434\u0430\u043B\u0438\u0442\u044C")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_UiButton, {
                    variant: "outline",
                    onClick: handleCancel
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`\u041E\u0442\u043C\u0435\u043D\u0430`);
                      } else {
                        return [
                          createTextVNode("\u041E\u0442\u043C\u0435\u043D\u0430")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_UiButton, {
                    disabled: !isFormChanged.value || !isPositionsValid.value,
                    onClick: handleSave
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C`);
                      } else {
                        return [
                          createTextVNode("\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode(_component_UiDialogHeader, null, {
                      default: withCtx(() => [
                        createVNode(_component_UiDialogTitle, null, {
                          default: withCtx(() => [
                            createTextVNode("\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435 \u043E\u043F\u0435\u0440\u0430\u0446\u0438\u0438")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_UiDialogDescription)
                      ]),
                      _: 1
                    }),
                    createVNode("div", { class: "flex gap-2 min-h-[600px]" }, [
                      createVNode("div", { class: "space-y-5 min-w-[450px]" }, [
                        createVNode("div", { class: "relative w-full" }, [
                          createVNode(_component_UiTabs, {
                            modelValue: opTypeTab.value,
                            "onUpdate:modelValue": ($event) => opTypeTab.value = $event
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_UiTabsList, { class: "w-full" }, {
                                default: withCtx(() => [
                                  createVNode(_component_UiTabsTrigger, {
                                    class: "w-full",
                                    value: "\u041F\u043E\u0441\u0442\u0443\u043F\u043B\u0435\u043D\u0438\u0435"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode("\u041F\u043E\u0441\u0442\u0443\u043F\u043B\u0435\u043D\u0438\u0435")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_UiTabsTrigger, {
                                    class: "w-full",
                                    value: "\u0412\u044B\u043F\u043B\u0430\u0442\u0430"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode("\u0412\u044B\u043F\u043B\u0430\u0442\u0430")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_UiTabsTrigger, {
                                    class: "w-full",
                                    value: "\u041D\u0430\u0447\u0438\u0441\u043B\u0435\u043D\u0438\u0435"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode("\u041D\u0430\u0447\u0438\u0441\u043B\u0435\u043D\u0438\u0435")
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        createVNode("div", { class: "relative" }, [
                          createVNode(_component_UiInput, {
                            modelValue: formData.value.operationDate,
                            "onUpdate:modelValue": ($event) => formData.value.operationDate = $event,
                            type: "date",
                            placeholder: "\u0414\u0430\u0442\u0430 \u043E\u043F\u0435\u0440\u0430\u0446\u0438\u0438",
                            class: formData.value.operationDate ? "" : "outline-1 outline-rose-300"
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "class"]),
                          createVNode(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap" }, {
                            default: withCtx(() => [
                              createTextVNode(" \u0414\u0430\u0442\u0430 \u043E\u043F\u0435\u0440\u0430\u0446\u0438\u0438 ")
                            ]),
                            _: 1
                          })
                        ]),
                        createVNode("div", { class: "relative" }, [
                          createVNode(_component_UiTextarea, {
                            modelValue: formData.value.payPurpose,
                            "onUpdate:modelValue": ($event) => formData.value.payPurpose = $event,
                            placeholder: "\u041D\u0430\u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435 \u043F\u043B\u0430\u0442\u0435\u0436\u0430"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                          formData.value.payPurpose ? (openBlock(), createBlock(_component_UiLabel, {
                            key: 0,
                            class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" \u041D\u0430\u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435 \u043F\u043B\u0430\u0442\u0435\u0436\u0430 ")
                            ]),
                            _: 1
                          })) : createCommentVNode("", true)
                        ])
                      ]),
                      createVNode("div", { class: "space-y-3" }, [
                        createVNode("div", { class: "flex gap-4 justify-between" }, [
                          createVNode("div", { class: "relative" }, [
                            createVNode(_component_UiInput, {
                              value: totalAmountPrice.value,
                              type: "number",
                              placeholder: "\u041E\u0431\u0449\u0430\u044F \u0441\u0443\u043C\u043C\u0430",
                              disabled: "",
                              class: "bg-gray-100"
                            }, null, 8, ["value"]),
                            createVNode(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap" }, {
                              default: withCtx(() => [
                                createTextVNode(" \u041E\u0431\u0449\u0430\u044F \u0441\u0443\u043C\u043C\u0430 ")
                              ]),
                              _: 1
                            })
                          ]),
                          createVNode(_component_MyPlanfactCategoriesCreateModal, { onCategoryCreated: handleCategory }),
                          createVNode(_component_MyPlanfactCounterPartiesCreateModal, { onCounterpartyCreated: handleCounterParty })
                        ]),
                        (openBlock(true), createBlock(Fragment, null, renderList(formData.value.operationPositions, (position, index) => {
                          var _a2, _b2;
                          var _a, _b, _c;
                          return openBlock(), createBlock("div", {
                            key: index,
                            class: "flex gap-2 items-center"
                          }, [
                            createVNode("div", { class: "relative flex-1" }, [
                              createVNode(_component_UiInput, {
                                modelValue: position.amount,
                                "onUpdate:modelValue": ($event) => position.amount = $event,
                                modelModifiers: { number: true },
                                type: "number",
                                placeholder: "\u0421\u0443\u043C\u043C\u0430",
                                class: position.amount > 0 ? "" : "outline-1 outline-rose-300"
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "class"]),
                              createVNode(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap" }, {
                                default: withCtx(() => [
                                  createTextVNode(" \u0421\u0443\u043C\u043C\u0430 ")
                                ]),
                                _: 1
                              })
                            ]),
                            createVNode("div", { class: "relative" }, [
                              createVNode(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap" }, {
                                default: withCtx(() => [
                                  createTextVNode(" \u0421\u0442\u0430\u0442\u044C\u044F ")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_MyComboboxModels, {
                                class: "min-w-[200px] w-[200px] overflow-hidden",
                                items: expenseCategories.value.map((c) => ({ value: c.id, label: c.name })),
                                label: (_a2 = (_a = expenseCategories.value.find((c) => c.id === position.expenseCategoryId)) == null ? void 0 : _a.name) != null ? _a2 : "\u0412\u044B\u0431\u0440\u0430\u0442\u044C",
                                "model-value": position.expenseCategoryId,
                                onSelectedItem: (value) => position.expenseCategoryId = value
                              }, null, 8, ["items", "label", "model-value", "onSelectedItem"])
                            ]),
                            createVNode("div", { class: "relative" }, [
                              createVNode(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap" }, {
                                default: withCtx(() => [
                                  createTextVNode(" \u041A\u043E\u043D\u0442\u0440\u0430\u0433\u0435\u043D\u0442 ")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_MyComboboxModels, {
                                class: "min-w-[250px] w-[250px] overflow-hidden",
                                items: counterParties.value.map((c) => ({ value: c.id, label: c.title })),
                                label: (_b2 = (_b = counterParties.value.find((c) => c.id === position.counterPartyId)) == null ? void 0 : _b.title) != null ? _b2 : "\u041D\u0435 \u0432\u044B\u0431\u0440\u0430\u043D",
                                "model-value": position.counterPartyId,
                                onSelectedItem: (value) => position.counterPartyId = value
                              }, null, 8, ["items", "label", "model-value", "onSelectedItem"])
                            ]),
                            createVNode(_component_UiButton, {
                              variant: "destructive",
                              disabled: ((_c = formData.value.operationPositions) == null ? void 0 : _c.length) === 1,
                              onClick: ($event) => removePosition(index)
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" X ")
                              ]),
                              _: 2
                            }, 1032, ["disabled", "onClick"])
                          ]);
                        }), 128)),
                        createVNode("div", { class: "flex flex-col mt-6" }, [
                          createVNode(_component_UiButton, {
                            class: "ml-auto",
                            onClick: addPosition
                          }, {
                            default: withCtx(() => [
                              createTextVNode("\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u043F\u043E\u0437\u0438\u0446\u0438\u044E")
                            ]),
                            _: 1
                          })
                        ])
                      ])
                    ]),
                    createVNode("div", { class: "flex justify-end gap-2 mt-4" }, [
                      createVNode(_component_UiButton, {
                        variant: "destructive",
                        class: "mr-auto",
                        onClick: handleDelete
                      }, {
                        default: withCtx(() => [
                          createTextVNode("\u0423\u0434\u0430\u043B\u0438\u0442\u044C")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_UiButton, {
                        variant: "outline",
                        onClick: handleCancel
                      }, {
                        default: withCtx(() => [
                          createTextVNode("\u041E\u0442\u043C\u0435\u043D\u0430")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_UiButton, {
                        disabled: !isFormChanged.value || !isPositionsValid.value,
                        onClick: handleSave
                      }, {
                        default: withCtx(() => [
                          createTextVNode("\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C")
                        ]),
                        _: 1
                      }, 8, ["disabled"])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UiDialogContent, { class: "max-w-[1200px]" }, {
                default: withCtx(() => [
                  createVNode(_component_UiDialogHeader, null, {
                    default: withCtx(() => [
                      createVNode(_component_UiDialogTitle, null, {
                        default: withCtx(() => [
                          createTextVNode("\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435 \u043E\u043F\u0435\u0440\u0430\u0446\u0438\u0438")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_UiDialogDescription)
                    ]),
                    _: 1
                  }),
                  createVNode("div", { class: "flex gap-2 min-h-[600px]" }, [
                    createVNode("div", { class: "space-y-5 min-w-[450px]" }, [
                      createVNode("div", { class: "relative w-full" }, [
                        createVNode(_component_UiTabs, {
                          modelValue: opTypeTab.value,
                          "onUpdate:modelValue": ($event) => opTypeTab.value = $event
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_UiTabsList, { class: "w-full" }, {
                              default: withCtx(() => [
                                createVNode(_component_UiTabsTrigger, {
                                  class: "w-full",
                                  value: "\u041F\u043E\u0441\u0442\u0443\u043F\u043B\u0435\u043D\u0438\u0435"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("\u041F\u043E\u0441\u0442\u0443\u043F\u043B\u0435\u043D\u0438\u0435")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_UiTabsTrigger, {
                                  class: "w-full",
                                  value: "\u0412\u044B\u043F\u043B\u0430\u0442\u0430"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("\u0412\u044B\u043F\u043B\u0430\u0442\u0430")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_UiTabsTrigger, {
                                  class: "w-full",
                                  value: "\u041D\u0430\u0447\u0438\u0441\u043B\u0435\u043D\u0438\u0435"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("\u041D\u0430\u0447\u0438\u0441\u043B\u0435\u043D\u0438\u0435")
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      createVNode("div", { class: "relative" }, [
                        createVNode(_component_UiInput, {
                          modelValue: formData.value.operationDate,
                          "onUpdate:modelValue": ($event) => formData.value.operationDate = $event,
                          type: "date",
                          placeholder: "\u0414\u0430\u0442\u0430 \u043E\u043F\u0435\u0440\u0430\u0446\u0438\u0438",
                          class: formData.value.operationDate ? "" : "outline-1 outline-rose-300"
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "class"]),
                        createVNode(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap" }, {
                          default: withCtx(() => [
                            createTextVNode(" \u0414\u0430\u0442\u0430 \u043E\u043F\u0435\u0440\u0430\u0446\u0438\u0438 ")
                          ]),
                          _: 1
                        })
                      ]),
                      createVNode("div", { class: "relative" }, [
                        createVNode(_component_UiTextarea, {
                          modelValue: formData.value.payPurpose,
                          "onUpdate:modelValue": ($event) => formData.value.payPurpose = $event,
                          placeholder: "\u041D\u0430\u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435 \u043F\u043B\u0430\u0442\u0435\u0436\u0430"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                        formData.value.payPurpose ? (openBlock(), createBlock(_component_UiLabel, {
                          key: 0,
                          class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" \u041D\u0430\u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435 \u043F\u043B\u0430\u0442\u0435\u0436\u0430 ")
                          ]),
                          _: 1
                        })) : createCommentVNode("", true)
                      ])
                    ]),
                    createVNode("div", { class: "space-y-3" }, [
                      createVNode("div", { class: "flex gap-4 justify-between" }, [
                        createVNode("div", { class: "relative" }, [
                          createVNode(_component_UiInput, {
                            value: totalAmountPrice.value,
                            type: "number",
                            placeholder: "\u041E\u0431\u0449\u0430\u044F \u0441\u0443\u043C\u043C\u0430",
                            disabled: "",
                            class: "bg-gray-100"
                          }, null, 8, ["value"]),
                          createVNode(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap" }, {
                            default: withCtx(() => [
                              createTextVNode(" \u041E\u0431\u0449\u0430\u044F \u0441\u0443\u043C\u043C\u0430 ")
                            ]),
                            _: 1
                          })
                        ]),
                        createVNode(_component_MyPlanfactCategoriesCreateModal, { onCategoryCreated: handleCategory }),
                        createVNode(_component_MyPlanfactCounterPartiesCreateModal, { onCounterpartyCreated: handleCounterParty })
                      ]),
                      (openBlock(true), createBlock(Fragment, null, renderList(formData.value.operationPositions, (position, index) => {
                        var _a2, _b2;
                        var _a, _b, _c;
                        return openBlock(), createBlock("div", {
                          key: index,
                          class: "flex gap-2 items-center"
                        }, [
                          createVNode("div", { class: "relative flex-1" }, [
                            createVNode(_component_UiInput, {
                              modelValue: position.amount,
                              "onUpdate:modelValue": ($event) => position.amount = $event,
                              modelModifiers: { number: true },
                              type: "number",
                              placeholder: "\u0421\u0443\u043C\u043C\u0430",
                              class: position.amount > 0 ? "" : "outline-1 outline-rose-300"
                            }, null, 8, ["modelValue", "onUpdate:modelValue", "class"]),
                            createVNode(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap" }, {
                              default: withCtx(() => [
                                createTextVNode(" \u0421\u0443\u043C\u043C\u0430 ")
                              ]),
                              _: 1
                            })
                          ]),
                          createVNode("div", { class: "relative" }, [
                            createVNode(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap" }, {
                              default: withCtx(() => [
                                createTextVNode(" \u0421\u0442\u0430\u0442\u044C\u044F ")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_MyComboboxModels, {
                              class: "min-w-[200px] w-[200px] overflow-hidden",
                              items: expenseCategories.value.map((c) => ({ value: c.id, label: c.name })),
                              label: (_a2 = (_a = expenseCategories.value.find((c) => c.id === position.expenseCategoryId)) == null ? void 0 : _a.name) != null ? _a2 : "\u0412\u044B\u0431\u0440\u0430\u0442\u044C",
                              "model-value": position.expenseCategoryId,
                              onSelectedItem: (value) => position.expenseCategoryId = value
                            }, null, 8, ["items", "label", "model-value", "onSelectedItem"])
                          ]),
                          createVNode("div", { class: "relative" }, [
                            createVNode(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap" }, {
                              default: withCtx(() => [
                                createTextVNode(" \u041A\u043E\u043D\u0442\u0440\u0430\u0433\u0435\u043D\u0442 ")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_MyComboboxModels, {
                              class: "min-w-[250px] w-[250px] overflow-hidden",
                              items: counterParties.value.map((c) => ({ value: c.id, label: c.title })),
                              label: (_b2 = (_b = counterParties.value.find((c) => c.id === position.counterPartyId)) == null ? void 0 : _b.title) != null ? _b2 : "\u041D\u0435 \u0432\u044B\u0431\u0440\u0430\u043D",
                              "model-value": position.counterPartyId,
                              onSelectedItem: (value) => position.counterPartyId = value
                            }, null, 8, ["items", "label", "model-value", "onSelectedItem"])
                          ]),
                          createVNode(_component_UiButton, {
                            variant: "destructive",
                            disabled: ((_c = formData.value.operationPositions) == null ? void 0 : _c.length) === 1,
                            onClick: ($event) => removePosition(index)
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" X ")
                            ]),
                            _: 2
                          }, 1032, ["disabled", "onClick"])
                        ]);
                      }), 128)),
                      createVNode("div", { class: "flex flex-col mt-6" }, [
                        createVNode(_component_UiButton, {
                          class: "ml-auto",
                          onClick: addPosition
                        }, {
                          default: withCtx(() => [
                            createTextVNode("\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u043F\u043E\u0437\u0438\u0446\u0438\u044E")
                          ]),
                          _: 1
                        })
                      ])
                    ])
                  ]),
                  createVNode("div", { class: "flex justify-end gap-2 mt-4" }, [
                    createVNode(_component_UiButton, {
                      variant: "destructive",
                      class: "mr-auto",
                      onClick: handleDelete
                    }, {
                      default: withCtx(() => [
                        createTextVNode("\u0423\u0434\u0430\u043B\u0438\u0442\u044C")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_UiButton, {
                      variant: "outline",
                      onClick: handleCancel
                    }, {
                      default: withCtx(() => [
                        createTextVNode("\u041E\u0442\u043C\u0435\u043D\u0430")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_UiButton, {
                      disabled: !isFormChanged.value || !isPositionsValid.value,
                      onClick: handleSave
                    }, {
                      default: withCtx(() => [
                        createTextVNode("\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C")
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
      }, _parent));
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/my/planfact/OperationModal.vue");
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
        _sfc_main$j,
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
        (() => {
          const date = row.getValue("operationDate");
          return dateFormat(date);
        })()
      );
    },
    sortingFn: (rowA, rowB, columnId) => {
      const dateA = new Date(rowA.getValue(columnId));
      const dateB = new Date(rowB.getValue(columnId));
      return dateA.getTime() - dateB.getTime();
    }
  },
  // Тип
  {
    accessorKey: "operationType",
    ruName: "\u0422\u0438\u043F",
    header: ({ column }) => {
      return h(
        _sfc_main$j,
        {
          variant: "ghost",
          onClick: () => column.toggleSorting(column.getIsSorted() === "asc"),
          class: "text-center h-full w-full"
        },
        () => ["\u0422\u0438\u043F", h(ArrowUpDown, { class: "ml-2 h-4 w-4" })]
      );
    },
    cell: ({ row }) => {
      const type = row.getValue("operationType");
      const textStyle = type === "\u0412\u044B\u043F\u043B\u0430\u0442\u0430" ? "text-red-500" : type === "\u041F\u043E\u0441\u0442\u0443\u043F\u043B\u0435\u043D\u0438\u0435" ? "text-green-600" : "text-neutral-400";
      return h(
        "div",
        { class: `text-center ${textStyle} w-[200px]` },
        type
      );
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
    sortingFn: (rowA, rowB, columnId) => {
      const typeA = rowA.getValue(columnId);
      const typeB = rowB.getValue(columnId);
      return typeA.localeCompare(typeB);
    }
  },
  // Контрагент
  {
    accessorKey: "operationPositions",
    ruName: "\u041A\u043E\u043D\u0442\u0440\u0430\u0433\u0435\u043D\u0442",
    header: ({ column }) => {
      return h(
        _sfc_main$j,
        {
          variant: "ghost",
          onClick: () => column.toggleSorting(column.getIsSorted() === "asc"),
          class: "text-center h-full w-full"
        },
        () => ["\u041A\u043E\u043D\u0442\u0440\u0430\u0433\u0435\u043D\u0442", h(ArrowUpDown, { class: "ml-2 h-4 w-4" })]
      );
    },
    cell: ({ row }) => {
      var _a, _b;
      const operationPositions = row.getValue("operationPositions");
      return h(
        "div",
        { class: "text-center text-wrap" },
        operationPositions.length > 1 ? `${operationPositions.length} \u043A\u043E\u043D\u0442\u0440\u0430\u0433\u0435\u043D\u0442\u0430` : replaceLegalEntities(((_b = (_a = operationPositions[0]) == null ? void 0 : _a.counterParty) == null ? void 0 : _b.title) || "")
      );
    },
    filterFn: (row, id, value) => {
      const operationPositions = row.getValue(id);
      return operationPositions.some(
        (pos) => {
          var _a;
          return value.includes(replaceLegalEntities(((_a = pos.counterParty) == null ? void 0 : _a.title) || ""));
        }
      );
    },
    sortingFn: (rowA, rowB, columnId) => {
      var _a, _b, _c, _d;
      const positionsA = rowA.getValue(columnId);
      const positionsB = rowB.getValue(columnId);
      const titleA = ((_b = (_a = positionsA[0]) == null ? void 0 : _a.counterParty) == null ? void 0 : _b.title) ? replaceLegalEntities(positionsA[0].counterParty.title) : "";
      const titleB = ((_d = (_c = positionsB[0]) == null ? void 0 : _c.counterParty) == null ? void 0 : _d.title) ? replaceLegalEntities(positionsB[0].counterParty.title) : "";
      return titleA.localeCompare(titleB);
    }
  },
  // Статья
  {
    accessorKey: "operationPositions",
    ruName: "\u0421\u0442\u0430\u0442\u044C\u044F",
    header: ({ column }) => {
      return h(
        _sfc_main$j,
        {
          variant: "ghost",
          onClick: () => column.toggleSorting(column.getIsSorted() === "asc"),
          class: "text-center h-full w-full"
        },
        () => ["\u0421\u0442\u0430\u0442\u044C\u044F", h(ArrowUpDown, { class: "ml-2 h-4 w-4" })]
      );
    },
    cell: ({ row }) => {
      var _a2;
      var _a, _b;
      const operationPositions = row.getValue("operationPositions");
      return h(
        "div",
        { class: "text-center text-wrap" },
        operationPositions.length > 1 ? `${operationPositions.length} \u0441\u0442\u0430\u0442\u044C\u0438` : (_a2 = (_b = (_a = operationPositions[0]) == null ? void 0 : _a.expenseCategory) == null ? void 0 : _b.name) != null ? _a2 : "\u041D\u0435\u0442 \u0441\u0442\u0430\u0442\u044C\u0438"
      );
    },
    filterFn: (row, id, value) => {
      const operationPositions = row.getValue(id);
      return operationPositions.some(
        (pos) => {
          var _a;
          return value.includes(((_a = pos.expenseCategory) == null ? void 0 : _a.name) || "\u041D\u0435\u0442 \u0441\u0442\u0430\u0442\u044C\u0438");
        }
      );
    },
    sortingFn: (rowA, rowB, columnId) => {
      var _a, _b, _c, _d;
      const positionsA = rowA.getValue(columnId);
      const positionsB = rowB.getValue(columnId);
      const nameA = ((_b = (_a = positionsA[0]) == null ? void 0 : _a.expenseCategory) == null ? void 0 : _b.name) || "\u041D\u0435\u0442 \u0441\u0442\u0430\u0442\u044C\u0438";
      const nameB = ((_d = (_c = positionsB[0]) == null ? void 0 : _c.expenseCategory) == null ? void 0 : _d.name) || "\u041D\u0435\u0442 \u0441\u0442\u0430\u0442\u044C\u0438";
      return nameA.localeCompare(nameB);
    }
  },
  // Назначение платежа
  {
    accessorKey: "payPurpose",
    ruName: "\u041D\u0430\u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435",
    header: ({ column }) => {
      return h(
        _sfc_main$j,
        {
          variant: "ghost",
          onClick: () => column.toggleSorting(column.getIsSorted() === "asc"),
          class: "text-center h-full w-full"
        },
        () => ["\u041D\u0430\u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435", h(ArrowUpDown, { class: "ml-2 h-4 w-4" })]
      );
    },
    cell: ({ row }) => h("div", { class: "text-left w-[400px] text-wrap" }, [
      h("div", {}, row.getValue("payPurpose") || "")
    ]),
    filterFn: (row, id, value) => {
      var _a;
      return (_a = row.getValue(id)) == null ? void 0 : _a.toLowerCase().includes(value.toLowerCase());
    },
    sortingFn: (rowA, rowB, columnId) => {
      const purposeA = rowA.getValue(columnId) || "";
      const purposeB = rowB.getValue(columnId) || "";
      return purposeA.localeCompare(purposeB);
    }
  },
  // Сумма
  {
    accessorKey: "operationPositions",
    ruName: "\u0421\u0443\u043C\u043C\u0430",
    header: ({ column }) => {
      return h(
        _sfc_main$j,
        {
          variant: "ghost",
          onClick: () => column.toggleSorting(column.getIsSorted() === "asc"),
          class: "text-center h-full w-full"
        },
        () => ["\u0421\u0443\u043C\u043C\u0430", h(ArrowUpDown, { class: "ml-2 h-4 w-4" })]
      );
    },
    cell: ({ row }) => {
      const type = row.getValue("operationType");
      const positions = row.getValue("operationPositions");
      const totalPrice = positions.reduce((sum, pos) => sum + (pos.amount || 0), 0);
      const textStyle = type === "\u0412\u044B\u043F\u043B\u0430\u0442\u0430" ? "text-red-500" : type === "\u041F\u043E\u0441\u0442\u0443\u043F\u043B\u0435\u043D\u0438\u0435" ? "text-green-600" : "text-neutral-400";
      const formattedAmount = `${type === "\u0412\u044B\u043F\u043B\u0430\u0442\u0430" ? "-" : type === "\u041F\u043E\u0441\u0442\u0443\u043F\u043B\u0435\u043D\u0438\u0435" ? "+" : "\xB1"}${useMyFormatPrice(+totalPrice.toFixed(2))} \u20BD`;
      return h(
        "div",
        { class: `text-center font-semibold ${textStyle}` },
        formattedAmount
      );
    },
    filterFn: (row, id, value) => {
      const positions = row.getValue(id);
      const totalPrice = positions.reduce((sum, pos) => sum + (pos.amount || 0), 0);
      const [min, max] = value;
      return totalPrice >= min && totalPrice <= max;
    },
    sortingFn: (rowA, rowB, columnId) => {
      const positionsA = rowA.getValue(columnId);
      const positionsB = rowB.getValue(columnId);
      const totalA = positionsA.reduce((sum, pos) => sum + (pos.amount || 0), 0);
      const totalB = positionsB.reduce((sum, pos) => sum + (pos.amount || 0), 0);
      return totalA - totalB;
    }
  }
];
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "Operations",
  __ssrInlineRender: true,
  setup(__props) {
    const { $useApi } = useNuxtApp();
    const period = ref((/* @__PURE__ */ new Date()).toISOString().slice(0, 7));
    const range = ref([
      new Date(period.value).toISOString().slice(0, 10),
      new Date(+period.value.split("-")[0], +period.value.split("-")[1], 1).toISOString().slice(0, 10)
    ]);
    const accounts = ref([]);
    const account = ref("");
    const isInitialLoad = ref(true);
    const curOperation = ref(null);
    const operationsData = ref([]);
    const contragents = ref([]);
    const isOpen = ref(false);
    const getAccounts = async () => {
      const { data } = await $useApi.get("planfact/accounts");
      accounts.value = data.map((acc) => ({ value: acc.id, label: acc.name }));
      if (data.length > 0) {
        account.value = data[0].id;
      }
    };
    const getRangeData = async () => {
      if (!account.value) return;
      try {
        const from = new Date(range.value[0]).toISOString().slice(0, 10);
        const to = new Date(range.value[1]).toISOString().slice(0, 10);
        const { data } = await $useApi.get("planfact/operations", {
          params: { start: from, end: to, limit: 5e3, accountId: account.value }
        });
        operationsData.value = data.operations;
        contragents.value = data.contragents;
        operationsData.value.reverse();
      } catch (error) {
        console.error(error);
        toast({
          variant: "destructive",
          title: "\u041E\u0448\u0438\u0431\u043A\u0430",
          description: "\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C \u043E\u043F\u0435\u0440\u0430\u0446\u0438\u0438."
        });
      }
    };
    const getOperation = (operationId) => {
      const op = operationsData.value.find((item) => item.operationId === operationId);
      curOperation.value = op ? op : null;
      isOpen.value = true;
    };
    const formatRange = (date) => {
      return date.map((d) => {
        const date2 = new Date(d).toISOString().slice(0, 10).split("-");
        const day = date2[2];
        const mounth = date2[1];
        const year = date2[0];
        return `${day}.${mounth}.${year}`;
      }).join(" / ");
    };
    watch([range, account], async ([newRange, newAccount]) => {
      if (isInitialLoad.value || !newAccount) return;
      await getRangeData();
    }, { deep: true });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UiTabs = _sfc_main$2$1;
      const _component_UiTabsList = _sfc_main$e;
      const _component_UiTabsTrigger = _sfc_main$1$1;
      const _component_MyPlanfactAccountsCreateModal = _sfc_main$c;
      const _component_MyPlanfactOperationCreateModal = _sfc_main$8;
      const _component_MyPlanfactOperationsDataTable = _sfc_main$5;
      const _component_MyPlanfactOperationModal = _sfc_main$4;
      _push(`<div${ssrRenderAttrs(_attrs)}><div class="flex items-center gap-2"><div class="w-[280px]">`);
      _push(ssrRenderComponent(unref(Qn), {
        modelValue: unref(range),
        "onUpdate:modelValue": ($event) => isRef(range) ? range.value = $event : null,
        range: "",
        "enable-time-picker": false,
        "auto-apply": "",
        locale: "ru",
        placeholder: "\u0412\u044B\u0431\u0440\u0430\u0442\u044C \u0434\u043D\u0438",
        "select-text": "\u0413\u043E\u0442\u043E\u0432\u043E",
        "cancel-text": "\u0417\u0430\u043A\u0440\u044B\u0442\u044C",
        class: "grow",
        format: formatRange,
        clearable: false
      }, null, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_component_UiTabs, {
        modelValue: unref(account),
        "onUpdate:modelValue": ($event) => isRef(account) ? account.value = $event : null
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UiTabsList, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<!--[-->`);
                  ssrRenderList(unref(accounts), (acc, i) => {
                    _push3(ssrRenderComponent(_component_UiTabsTrigger, {
                      key: i,
                      value: acc.value
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`${ssrInterpolate(acc.label)}`);
                        } else {
                          return [
                            createTextVNode(toDisplayString(acc.label), 1)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  });
                  _push3(`<!--]-->`);
                } else {
                  return [
                    (openBlock(true), createBlock(Fragment, null, renderList(unref(accounts), (acc, i) => {
                      return openBlock(), createBlock(_component_UiTabsTrigger, {
                        key: i,
                        value: acc.value
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(acc.label), 1)
                        ]),
                        _: 2
                      }, 1032, ["value"]);
                    }), 128))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UiTabsList, null, {
                default: withCtx(() => [
                  (openBlock(true), createBlock(Fragment, null, renderList(unref(accounts), (acc, i) => {
                    return openBlock(), createBlock(_component_UiTabsTrigger, {
                      key: i,
                      value: acc.value
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(acc.label), 1)
                      ]),
                      _: 2
                    }, 1032, ["value"]);
                  }), 128))
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_MyPlanfactAccountsCreateModal, { onAccountCreated: getAccounts }, null, _parent));
      _push(`</div><div class="mt-1">`);
      _push(ssrRenderComponent(_component_MyPlanfactOperationCreateModal, {
        key: unref(account),
        "account-id": +unref(account),
        onOperationCreated: getRangeData
      }, null, _parent));
      _push(ssrRenderComponent(_component_MyPlanfactOperationsDataTable, {
        key: unref(operationsData).length,
        columns: unref(bankOperationsColumns),
        data: unref(operationsData),
        contragents: unref(contragents),
        onItemClicked: getOperation
      }, null, _parent));
      _push(`</div>`);
      if (unref(curOperation)) {
        _push(ssrRenderComponent(_component_MyPlanfactOperationModal, {
          key: unref(curOperation).id,
          operation: unref(curOperation),
          "is-open": unref(isOpen),
          "onUpdate:isOpen": ($event) => isOpen.value = $event,
          onDelete: getRangeData,
          onSave: getRangeData
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
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
      const _component_UiTabsList = _sfc_main$e;
      const _component_UiTabsTrigger = _sfc_main$1$1;
      const _component_UiTabsContent = _sfc_main$f;
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
    const { toast: toast2 } = useToast();
    const month = ref({
      month: (/* @__PURE__ */ new Date()).getMonth(),
      year: (/* @__PURE__ */ new Date()).getFullYear()
    });
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
          adExpenses: [{
            data: {
              title: "string",
              data: []
            },
            totals: []
          }],
          commercialSalaries: []
        },
        design: {
          designSalaries: []
        },
        adExpenses: [],
        totals: {
          data: [],
          totals: []
        }
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
        toast2({
          variant: "destructive",
          title: "\u041E\u0448\u0438\u0431\u043A\u0430 \u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0438 \u0434\u0430\u043D\u043D\u044B\u0445",
          description: "\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C \u0434\u0430\u043D\u043D\u044B\u0435 P&L. \u041F\u043E\u043F\u0440\u043E\u0431\u0443\u0439\u0442\u0435 \u043F\u043E\u0437\u0436\u0435."
        });
      }
    };
    watch(period, () => {
      fetchPLData();
    });
    watch(month, async (val) => {
      const { month: month2, year } = val;
      period.value = new Date(year, month2 + 1).toISOString().slice(0, 7);
      await fetchPLData();
    });
    computed(() => {
      return plData.value.expenses.production.supplies || [];
    });
    computed(() => {
      return plData.value.expenses.production.productionSalaries || [];
    });
    computed(() => {
      return plData.value.expenses.design.designSalaries || [];
    });
    computed(() => {
      return plData.value.expenses.adExpenses || [];
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UiCard = _sfc_main$3$1;
      const _component_UiCardContent = _sfc_main$1$3;
      const _component_UiTable = _sfc_main$5$1;
      const _component_UiTableHeader = _sfc_main$h;
      const _component_UiTableRow = _sfc_main$2$3;
      const _component_UiTableHead = _sfc_main$1$4;
      const _component_UiTableBody = _sfc_main$4$1;
      const _component_UiTableCell = _sfc_main$3$2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "space-y-2" }, _attrs))}><div class="w-[180px] mt-[-47px] ml-[220px]">`);
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
      _push(ssrRenderComponent(_component_UiCard, { class: "" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UiCardContent, { class: "space-y-1 px-0 py-3" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="px-3"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_UiTable, { class: "bg-slate-100 rounded-sm overflow-hidden" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_UiTableHeader, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_UiTableRow, { class: "bg-slate-200 hover:bg-slate-200" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_UiTableHead, { class: "text-xl" }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`\u0414\u043E\u0445\u043E\u0434\u044B`);
                                        } else {
                                          return [
                                            createTextVNode("\u0414\u043E\u0445\u043E\u0434\u044B")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(`<!--[-->`);
                                    ssrRenderList(unref(plData).periods, (per, i) => {
                                      _push6(ssrRenderComponent(_component_UiTableHead, {
                                        key: i,
                                        class: "text-center"
                                      }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`${ssrInterpolate(per)}`);
                                          } else {
                                            return [
                                              createTextVNode(toDisplayString(per), 1)
                                            ];
                                          }
                                        }),
                                        _: 2
                                      }, _parent6, _scopeId5));
                                    });
                                    _push6(`<!--]-->`);
                                  } else {
                                    return [
                                      createVNode(_component_UiTableHead, { class: "text-xl" }, {
                                        default: withCtx(() => [
                                          createTextVNode("\u0414\u043E\u0445\u043E\u0434\u044B")
                                        ]),
                                        _: 1
                                      }),
                                      (openBlock(true), createBlock(Fragment, null, renderList(unref(plData).periods, (per, i) => {
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
                              }, _parent5, _scopeId4));
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
                                    (openBlock(true), createBlock(Fragment, null, renderList(unref(plData).periods, (per, i) => {
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
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_UiTableBody, { class: "font-semibold" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_UiTableRow, null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_UiTableCell, null, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`\u041E\u0444\u043E\u0440\u043C\u043B\u0435\u043D\u043D\u044B\u0435 \u0437\u0430\u043A\u0430\u0437\u044B`);
                                        } else {
                                          return [
                                            createTextVNode("\u041E\u0444\u043E\u0440\u043C\u043B\u0435\u043D\u043D\u044B\u0435 \u0437\u0430\u043A\u0430\u0437\u044B")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(`<!--[-->`);
                                    ssrRenderList(unref(plData).income.allDealsPrice, (dp, i) => {
                                      _push6(ssrRenderComponent(_component_UiTableCell, {
                                        key: i,
                                        class: "text-center"
                                      }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`<div class="${ssrRenderClass([
                                              "flex justify-center items-center gap-1",
                                              dp.changePercent < 0 ? "text-red-600/90" : "",
                                              dp.changePercent > 0 ? "text-green-700/90" : "",
                                              dp.changePercent === 0 ? "text-slate-500/90" : ""
                                            ])}"${_scopeId6}><span${_scopeId6}>${ssrInterpolate(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(dp.value) + "\u20BD")}</span><span${_scopeId6}> (${ssrInterpolate(dp.changePercent)}%) </span></div>`);
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
                                      }, _parent6, _scopeId5));
                                    });
                                    _push6(`<!--]-->`);
                                  } else {
                                    return [
                                      createVNode(_component_UiTableCell, null, {
                                        default: withCtx(() => [
                                          createTextVNode("\u041E\u0444\u043E\u0440\u043C\u043B\u0435\u043D\u043D\u044B\u0435 \u0437\u0430\u043A\u0430\u0437\u044B")
                                        ]),
                                        _: 1
                                      }),
                                      (openBlock(true), createBlock(Fragment, null, renderList(unref(plData).income.allDealsPrice, (dp, i) => {
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
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_UiTableRow, null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_UiTableCell, null, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`\u041E\u0442\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u043D\u044B\u0435 \u0437\u0430\u043A\u0430\u0437\u044B`);
                                        } else {
                                          return [
                                            createTextVNode("\u041E\u0442\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u043D\u044B\u0435 \u0437\u0430\u043A\u0430\u0437\u044B")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(`<!--[-->`);
                                    ssrRenderList(unref(plData).income.sendDeals, (dp, i) => {
                                      _push6(ssrRenderComponent(_component_UiTableCell, {
                                        key: i,
                                        class: "text-center"
                                      }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`<div class="${ssrRenderClass([
                                              "flex justify-center items-center gap-1",
                                              dp.changePercent < 0 ? "text-red-600/90" : "",
                                              dp.changePercent > 0 ? "text-green-700/90" : "",
                                              dp.changePercent === 0 ? "text-slate-500/90" : ""
                                            ])}"${_scopeId6}><span${_scopeId6}>${ssrInterpolate(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(dp.value) + "\u20BD")}</span><span${_scopeId6}> (${ssrInterpolate(dp.changePercent)}%) </span></div>`);
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
                                      }, _parent6, _scopeId5));
                                    });
                                    _push6(`<!--]-->`);
                                  } else {
                                    return [
                                      createVNode(_component_UiTableCell, null, {
                                        default: withCtx(() => [
                                          createTextVNode("\u041E\u0442\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u043D\u044B\u0435 \u0437\u0430\u043A\u0430\u0437\u044B")
                                        ]),
                                        _: 1
                                      }),
                                      (openBlock(true), createBlock(Fragment, null, renderList(unref(plData).income.sendDeals, (dp, i) => {
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
                                    _push6(`<!--[-->`);
                                    ssrRenderList(unref(plData).income.revenue, (dp, i) => {
                                      _push6(ssrRenderComponent(_component_UiTableCell, {
                                        key: i,
                                        class: "text-center"
                                      }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`<div class="${ssrRenderClass([
                                              "flex justify-center items-center gap-1",
                                              dp.changePercent < 0 ? "text-red-600/90" : "",
                                              dp.changePercent > 0 ? "text-green-700/90" : "",
                                              dp.changePercent === 0 ? "text-slate-500/90" : ""
                                            ])}"${_scopeId6}><span${_scopeId6}>${ssrInterpolate(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(dp.value) + "\u20BD")}</span><span${_scopeId6}> (${ssrInterpolate(dp.changePercent)}%) </span></div>`);
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
                                      }, _parent6, _scopeId5));
                                    });
                                    _push6(`<!--]-->`);
                                  } else {
                                    return [
                                      createVNode(_component_UiTableCell, null, {
                                        default: withCtx(() => [
                                          createTextVNode("\u0412\u044B\u0440\u0443\u0447\u043A\u0430")
                                        ]),
                                        _: 1
                                      }),
                                      (openBlock(true), createBlock(Fragment, null, renderList(unref(plData).income.revenue, (dp, i) => {
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
                              }, _parent5, _scopeId4));
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
                                    (openBlock(true), createBlock(Fragment, null, renderList(unref(plData).income.allDealsPrice, (dp, i) => {
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
                                    (openBlock(true), createBlock(Fragment, null, renderList(unref(plData).income.sendDeals, (dp, i) => {
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
                                    (openBlock(true), createBlock(Fragment, null, renderList(unref(plData).income.revenue, (dp, i) => {
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
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_UiTableHeader, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_UiTableRow, { class: "text-xl text-center font-semibold bg-white hover:bg-white py-1 pb-2 border-t-1 rounded-t-xl" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_UiTableHead, {
                                      colspan: "5",
                                      class: "text-center h-4"
                                    }, null, _parent6, _scopeId5));
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
                              }, _parent5, _scopeId4));
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
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_UiTableHeader, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_UiTableRow, { class: "bg-slate-200 hover:bg-slate-200" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_UiTableHead, { class: "text-xl" }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`\u0420\u0430\u0441\u0445\u043E\u0434\u044B `);
                                        } else {
                                          return [
                                            createTextVNode("\u0420\u0430\u0441\u0445\u043E\u0434\u044B ")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(`<!--[-->`);
                                    ssrRenderList(unref(plData).periods, (per, i) => {
                                      _push6(ssrRenderComponent(_component_UiTableHead, {
                                        key: i,
                                        class: "text-center"
                                      }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`${ssrInterpolate(per)}`);
                                          } else {
                                            return [
                                              createTextVNode(toDisplayString(per), 1)
                                            ];
                                          }
                                        }),
                                        _: 2
                                      }, _parent6, _scopeId5));
                                    });
                                    _push6(`<!--]-->`);
                                  } else {
                                    return [
                                      createVNode(_component_UiTableHead, { class: "text-xl" }, {
                                        default: withCtx(() => [
                                          createTextVNode("\u0420\u0430\u0441\u0445\u043E\u0434\u044B ")
                                        ]),
                                        _: 1
                                      }),
                                      (openBlock(true), createBlock(Fragment, null, renderList(unref(plData).periods, (per, i) => {
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
                              }, _parent5, _scopeId4));
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
                                    (openBlock(true), createBlock(Fragment, null, renderList(unref(plData).periods, (per, i) => {
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
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_UiTableBody, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<!--[-->`);
                              ssrRenderList(unref(plData).expenses.totals.data, (item, i) => {
                                _push5(ssrRenderComponent(_component_UiTableRow, { key: i }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(ssrRenderComponent(_component_UiTableCell, null, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`<div${_scopeId6}><span${_scopeId6}>${ssrInterpolate(item.title)}</span></div>`);
                                          } else {
                                            return [
                                              createVNode("div", null, [
                                                createVNode("span", null, toDisplayString(item.title), 1)
                                              ])
                                            ];
                                          }
                                        }),
                                        _: 2
                                      }, _parent6, _scopeId5));
                                      _push6(`<!--[-->`);
                                      ssrRenderList(item.data, (dp, i2) => {
                                        _push6(ssrRenderComponent(_component_UiTableCell, {
                                          key: i2,
                                          class: "text-center"
                                        }, {
                                          default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                            if (_push7) {
                                              _push7(`<div class="${ssrRenderClass([
                                                "flex justify-center items-center gap-1"
                                              ])}"${_scopeId6}><span${_scopeId6}>${ssrInterpolate(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(+dp.value.toFixed(2)) + "\u20BD")}</span><span${_scopeId6}> (${ssrInterpolate(dp.changePercent)}%) </span></div>`);
                                            } else {
                                              return [
                                                createVNode("div", { class: [
                                                  "flex justify-center items-center gap-1"
                                                ] }, [
                                                  createVNode("span", null, toDisplayString(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(+dp.value.toFixed(2)) + "\u20BD"), 1),
                                                  createVNode("span", null, " (" + toDisplayString(dp.changePercent) + "%) ", 1)
                                                ])
                                              ];
                                            }
                                          }),
                                          _: 2
                                        }, _parent6, _scopeId5));
                                      });
                                      _push6(`<!--]-->`);
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
                                        (openBlock(true), createBlock(Fragment, null, renderList(item.data, (dp, i2) => {
                                          return openBlock(), createBlock(_component_UiTableCell, {
                                            key: i2,
                                            class: "text-center"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode("div", { class: [
                                                "flex justify-center items-center gap-1"
                                              ] }, [
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
                                }, _parent5, _scopeId4));
                              });
                              _push5(`<!--]-->`);
                              _push5(ssrRenderComponent(_component_UiTableRow, { class: "text-center bg-slate-300 hover:bg-slate-300" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_UiTableCell, { class: "font-bold text-left" }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(` \u0418\u0422\u041E\u0413\u041E `);
                                        } else {
                                          return [
                                            createTextVNode(" \u0418\u0422\u041E\u0413\u041E ")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(`<!--[-->`);
                                    ssrRenderList(unref(plData).expenses.totals.totals, (total, i) => {
                                      _push6(ssrRenderComponent(_component_UiTableCell, { key: i }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`<span${_scopeId6}>${ssrInterpolate(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(+total.value.toFixed(2)) + "\u20BD")}</span><span${_scopeId6}> (${ssrInterpolate(total.changePercent.toFixed(2))}%) </span>`);
                                          } else {
                                            return [
                                              createVNode("span", null, toDisplayString(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(+total.value.toFixed(2)) + "\u20BD"), 1),
                                              createVNode("span", null, " (" + toDisplayString(total.changePercent.toFixed(2)) + "%) ", 1)
                                            ];
                                          }
                                        }),
                                        _: 2
                                      }, _parent6, _scopeId5));
                                    });
                                    _push6(`<!--]-->`);
                                  } else {
                                    return [
                                      createVNode(_component_UiTableCell, { class: "font-bold text-left" }, {
                                        default: withCtx(() => [
                                          createTextVNode(" \u0418\u0422\u041E\u0413\u041E ")
                                        ]),
                                        _: 1
                                      }),
                                      (openBlock(true), createBlock(Fragment, null, renderList(unref(plData).expenses.totals.totals, (total, i) => {
                                        return openBlock(), createBlock(_component_UiTableCell, { key: i }, {
                                          default: withCtx(() => [
                                            createVNode("span", null, toDisplayString(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(+total.value.toFixed(2)) + "\u20BD"), 1),
                                            createVNode("span", null, " (" + toDisplayString(total.changePercent.toFixed(2)) + "%) ", 1)
                                          ]),
                                          _: 2
                                        }, 1024);
                                      }), 128))
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                (openBlock(true), createBlock(Fragment, null, renderList(unref(plData).expenses.totals.data, (item, i) => {
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
                                      (openBlock(true), createBlock(Fragment, null, renderList(item.data, (dp, i2) => {
                                        return openBlock(), createBlock(_component_UiTableCell, {
                                          key: i2,
                                          class: "text-center"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode("div", { class: [
                                              "flex justify-center items-center gap-1"
                                            ] }, [
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
                                    (openBlock(true), createBlock(Fragment, null, renderList(unref(plData).expenses.totals.totals, (total, i) => {
                                      return openBlock(), createBlock(_component_UiTableCell, { key: i }, {
                                        default: withCtx(() => [
                                          createVNode("span", null, toDisplayString(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(+total.value.toFixed(2)) + "\u20BD"), 1),
                                          createVNode("span", null, " (" + toDisplayString(total.changePercent.toFixed(2)) + "%) ", 1)
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
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_UiTableHeader, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_UiTableRow, { class: "text-xl text-center font-semibold bg-white hover:bg-white py-1 pb-2 border-t-1 rounded-t-xl" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_UiTableHead, {
                                      colspan: "5",
                                      class: "text-center h-4"
                                    }, null, _parent6, _scopeId5));
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
                              }, _parent5, _scopeId4));
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
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_UiTableHeader, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_UiTableRow, { class: "text-xl text-center font-semibold bg-gray-300 hover:bg-gray-300 py-1 pb-2 border-t-1 rounded-t-xl" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_UiTableHead, {
                                      colspan: "5",
                                      class: "text-center"
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(` \u041E\u0442\u0434\u0435\u043B \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0441\u0442\u0432\u0430 `);
                                        } else {
                                          return [
                                            createTextVNode(" \u041E\u0442\u0434\u0435\u043B \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0441\u0442\u0432\u0430 ")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
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
                              }, _parent5, _scopeId4));
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
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_UiTableHeader, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_UiTableRow, { class: "bg-slate-200 hover:bg-slate-200" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_UiTableHead, { class: "text-xl" }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`\u0420\u0430\u0441\u0445\u043E\u0434\u044B \u043D\u0430 \u043F\u043E\u0441\u0442\u0430\u0432\u043A\u0438 `);
                                        } else {
                                          return [
                                            createTextVNode("\u0420\u0430\u0441\u0445\u043E\u0434\u044B \u043D\u0430 \u043F\u043E\u0441\u0442\u0430\u0432\u043A\u0438 ")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(`<!--[-->`);
                                    ssrRenderList(unref(plData).periods, (per, i) => {
                                      _push6(ssrRenderComponent(_component_UiTableHead, {
                                        key: i,
                                        class: "text-center"
                                      }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`${ssrInterpolate(per)}`);
                                          } else {
                                            return [
                                              createTextVNode(toDisplayString(per), 1)
                                            ];
                                          }
                                        }),
                                        _: 2
                                      }, _parent6, _scopeId5));
                                    });
                                    _push6(`<!--]-->`);
                                  } else {
                                    return [
                                      createVNode(_component_UiTableHead, { class: "text-xl" }, {
                                        default: withCtx(() => [
                                          createTextVNode("\u0420\u0430\u0441\u0445\u043E\u0434\u044B \u043D\u0430 \u043F\u043E\u0441\u0442\u0430\u0432\u043A\u0438 ")
                                        ]),
                                        _: 1
                                      }),
                                      (openBlock(true), createBlock(Fragment, null, renderList(unref(plData).periods, (per, i) => {
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
                              }, _parent5, _scopeId4));
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
                                    (openBlock(true), createBlock(Fragment, null, renderList(unref(plData).periods, (per, i) => {
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
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_UiTableBody, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<!--[-->`);
                              ssrRenderList(unref(plData).expenses.production.supplies.data, (item) => {
                                _push5(ssrRenderComponent(_component_UiTableRow, {
                                  key: item.label
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
                                      _push6(`<!--[-->`);
                                      ssrRenderList(item.data, (dp, i) => {
                                        _push6(ssrRenderComponent(_component_UiTableCell, {
                                          key: i,
                                          class: "text-center"
                                        }, {
                                          default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                            if (_push7) {
                                              _push7(`<div class="${ssrRenderClass([
                                                "flex justify-center items-center gap-1"
                                              ])}"${_scopeId6}><span${_scopeId6}>${ssrInterpolate(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(+dp.value.toFixed(2)) + "\u20BD")}</span><span${_scopeId6}> (${ssrInterpolate(dp.changePercent)}%) </span></div>`);
                                            } else {
                                              return [
                                                createVNode("div", { class: [
                                                  "flex justify-center items-center gap-1"
                                                ] }, [
                                                  createVNode("span", null, toDisplayString(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(+dp.value.toFixed(2)) + "\u20BD"), 1),
                                                  createVNode("span", null, " (" + toDisplayString(dp.changePercent) + "%) ", 1)
                                                ])
                                              ];
                                            }
                                          }),
                                          _: 2
                                        }, _parent6, _scopeId5));
                                      });
                                      _push6(`<!--]-->`);
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
                                              createVNode("div", { class: [
                                                "flex justify-center items-center gap-1"
                                              ] }, [
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
                                }, _parent5, _scopeId4));
                              });
                              _push5(`<!--]-->`);
                              _push5(ssrRenderComponent(_component_UiTableRow, { class: "text-center bg-slate-300 hover:bg-slate-300" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_UiTableCell, { class: "font-bold text-left" }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(` \u0418\u0422\u041E\u0413\u041E `);
                                        } else {
                                          return [
                                            createTextVNode(" \u0418\u0422\u041E\u0413\u041E ")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(`<!--[-->`);
                                    ssrRenderList(unref(plData).expenses.production.supplies.totals, (total) => {
                                      _push6(ssrRenderComponent(_component_UiTableCell, { key: total }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`<span${_scopeId6}>${ssrInterpolate(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(+total.value.toFixed(2)) + "\u20BD")}</span><span${_scopeId6}> (${ssrInterpolate(total.changePercent.toFixed(2))}%) </span>`);
                                          } else {
                                            return [
                                              createVNode("span", null, toDisplayString(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(+total.value.toFixed(2)) + "\u20BD"), 1),
                                              createVNode("span", null, " (" + toDisplayString(total.changePercent.toFixed(2)) + "%) ", 1)
                                            ];
                                          }
                                        }),
                                        _: 2
                                      }, _parent6, _scopeId5));
                                    });
                                    _push6(`<!--]-->`);
                                  } else {
                                    return [
                                      createVNode(_component_UiTableCell, { class: "font-bold text-left" }, {
                                        default: withCtx(() => [
                                          createTextVNode(" \u0418\u0422\u041E\u0413\u041E ")
                                        ]),
                                        _: 1
                                      }),
                                      (openBlock(true), createBlock(Fragment, null, renderList(unref(plData).expenses.production.supplies.totals, (total) => {
                                        return openBlock(), createBlock(_component_UiTableCell, { key: total }, {
                                          default: withCtx(() => [
                                            createVNode("span", null, toDisplayString(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(+total.value.toFixed(2)) + "\u20BD"), 1),
                                            createVNode("span", null, " (" + toDisplayString(total.changePercent.toFixed(2)) + "%) ", 1)
                                          ]),
                                          _: 2
                                        }, 1024);
                                      }), 128))
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                (openBlock(true), createBlock(Fragment, null, renderList(unref(plData).expenses.production.supplies.data, (item) => {
                                  return openBlock(), createBlock(_component_UiTableRow, {
                                    key: item.label
                                  }, {
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
                                            createVNode("div", { class: [
                                              "flex justify-center items-center gap-1"
                                            ] }, [
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
                                    (openBlock(true), createBlock(Fragment, null, renderList(unref(plData).expenses.production.supplies.totals, (total) => {
                                      return openBlock(), createBlock(_component_UiTableCell, { key: total }, {
                                        default: withCtx(() => [
                                          createVNode("span", null, toDisplayString(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(+total.value.toFixed(2)) + "\u20BD"), 1),
                                          createVNode("span", null, " (" + toDisplayString(total.changePercent.toFixed(2)) + "%) ", 1)
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
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_UiTableHeader, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_UiTableRow, { class: "bg-slate-200 hover:bg-slate-200" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_UiTableHead, { class: "text-xl" }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`\u0417\u0430\u0440\u043F\u043B\u0430\u0442\u044B \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0441\u0442\u0432\u0430 `);
                                        } else {
                                          return [
                                            createTextVNode("\u0417\u0430\u0440\u043F\u043B\u0430\u0442\u044B \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0441\u0442\u0432\u0430 ")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(`<!--[-->`);
                                    ssrRenderList(unref(plData).periods, (per, i) => {
                                      _push6(ssrRenderComponent(_component_UiTableHead, {
                                        key: i,
                                        class: "text-center"
                                      }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`${ssrInterpolate(per)}`);
                                          } else {
                                            return [
                                              createTextVNode(toDisplayString(per), 1)
                                            ];
                                          }
                                        }),
                                        _: 2
                                      }, _parent6, _scopeId5));
                                    });
                                    _push6(`<!--]-->`);
                                  } else {
                                    return [
                                      createVNode(_component_UiTableHead, { class: "text-xl" }, {
                                        default: withCtx(() => [
                                          createTextVNode("\u0417\u0430\u0440\u043F\u043B\u0430\u0442\u044B \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0441\u0442\u0432\u0430 ")
                                        ]),
                                        _: 1
                                      }),
                                      (openBlock(true), createBlock(Fragment, null, renderList(unref(plData).periods, (per, i) => {
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
                              }, _parent5, _scopeId4));
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
                                    (openBlock(true), createBlock(Fragment, null, renderList(unref(plData).periods, (per, i) => {
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
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_UiTableBody, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<!--[-->`);
                              ssrRenderList(unref(plData).expenses.production.productionSalaries.data, (item) => {
                                _push5(ssrRenderComponent(_component_UiTableRow, {
                                  key: item.label
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
                                      _push6(`<!--[-->`);
                                      ssrRenderList(item.data, (dp, i) => {
                                        _push6(ssrRenderComponent(_component_UiTableCell, {
                                          key: i,
                                          class: "text-center"
                                        }, {
                                          default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                            if (_push7) {
                                              _push7(`<div class="${ssrRenderClass([
                                                "flex justify-center items-center gap-1"
                                              ])}"${_scopeId6}><span${_scopeId6}>${ssrInterpolate(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(+dp.value.toFixed(2)) + "\u20BD")}</span><span${_scopeId6}> (${ssrInterpolate(dp.changePercent)}%) </span></div>`);
                                            } else {
                                              return [
                                                createVNode("div", { class: [
                                                  "flex justify-center items-center gap-1"
                                                ] }, [
                                                  createVNode("span", null, toDisplayString(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(+dp.value.toFixed(2)) + "\u20BD"), 1),
                                                  createVNode("span", null, " (" + toDisplayString(dp.changePercent) + "%) ", 1)
                                                ])
                                              ];
                                            }
                                          }),
                                          _: 2
                                        }, _parent6, _scopeId5));
                                      });
                                      _push6(`<!--]-->`);
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
                                              createVNode("div", { class: [
                                                "flex justify-center items-center gap-1"
                                              ] }, [
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
                                }, _parent5, _scopeId4));
                              });
                              _push5(`<!--]-->`);
                              _push5(ssrRenderComponent(_component_UiTableRow, { class: "text-center bg-slate-300 hover:bg-slate-300" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_UiTableCell, { class: "font-bold text-left" }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(` \u0418\u0422\u041E\u0413\u041E `);
                                        } else {
                                          return [
                                            createTextVNode(" \u0418\u0422\u041E\u0413\u041E ")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(`<!--[-->`);
                                    ssrRenderList(unref(plData).expenses.production.productionSalaries.totals, (total) => {
                                      _push6(ssrRenderComponent(_component_UiTableCell, { key: total }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`<span${_scopeId6}>${ssrInterpolate(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(+total.value.toFixed(2)) + "\u20BD")}</span><span${_scopeId6}> (${ssrInterpolate(total.changePercent.toFixed(2))}%) </span>`);
                                          } else {
                                            return [
                                              createVNode("span", null, toDisplayString(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(+total.value.toFixed(2)) + "\u20BD"), 1),
                                              createVNode("span", null, " (" + toDisplayString(total.changePercent.toFixed(2)) + "%) ", 1)
                                            ];
                                          }
                                        }),
                                        _: 2
                                      }, _parent6, _scopeId5));
                                    });
                                    _push6(`<!--]-->`);
                                  } else {
                                    return [
                                      createVNode(_component_UiTableCell, { class: "font-bold text-left" }, {
                                        default: withCtx(() => [
                                          createTextVNode(" \u0418\u0422\u041E\u0413\u041E ")
                                        ]),
                                        _: 1
                                      }),
                                      (openBlock(true), createBlock(Fragment, null, renderList(unref(plData).expenses.production.productionSalaries.totals, (total) => {
                                        return openBlock(), createBlock(_component_UiTableCell, { key: total }, {
                                          default: withCtx(() => [
                                            createVNode("span", null, toDisplayString(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(+total.value.toFixed(2)) + "\u20BD"), 1),
                                            createVNode("span", null, " (" + toDisplayString(total.changePercent.toFixed(2)) + "%) ", 1)
                                          ]),
                                          _: 2
                                        }, 1024);
                                      }), 128))
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                (openBlock(true), createBlock(Fragment, null, renderList(unref(plData).expenses.production.productionSalaries.data, (item) => {
                                  return openBlock(), createBlock(_component_UiTableRow, {
                                    key: item.label
                                  }, {
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
                                            createVNode("div", { class: [
                                              "flex justify-center items-center gap-1"
                                            ] }, [
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
                                    (openBlock(true), createBlock(Fragment, null, renderList(unref(plData).expenses.production.productionSalaries.totals, (total) => {
                                      return openBlock(), createBlock(_component_UiTableCell, { key: total }, {
                                        default: withCtx(() => [
                                          createVNode("span", null, toDisplayString(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(+total.value.toFixed(2)) + "\u20BD"), 1),
                                          createVNode("span", null, " (" + toDisplayString(total.changePercent.toFixed(2)) + "%) ", 1)
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
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_UiTableHeader, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_UiTableRow, { class: "text-xl text-center font-semibold bg-white hover:bg-white py-1 pb-2 border-t-1 rounded-t-xl" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_UiTableHead, {
                                      colspan: "5",
                                      class: "text-center h-4"
                                    }, null, _parent6, _scopeId5));
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
                              }, _parent5, _scopeId4));
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
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_UiTableHeader, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_UiTableRow, { class: "text-xl text-center font-semibold bg-gray-300 hover:bg-gray-300 py-1 pb-2 border-t-1 rounded-t-xl" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_UiTableHead, {
                                      colspan: "5",
                                      class: "text-center"
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(` \u041A\u043E\u043C\u043C\u0435\u0440\u0447\u0435\u0441\u043A\u0438\u0439 \u043E\u0442\u0434\u0435\u043B `);
                                        } else {
                                          return [
                                            createTextVNode(" \u041A\u043E\u043C\u043C\u0435\u0440\u0447\u0435\u0441\u043A\u0438\u0439 \u043E\u0442\u0434\u0435\u043B ")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
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
                              }, _parent5, _scopeId4));
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
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_UiTableHeader, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_UiTableRow, { class: "bg-slate-200 hover:bg-slate-200" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_UiTableHead, { class: "text-xl" }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`\u0420\u0430\u0441\u0445\u043E\u0434\u044B \u043D\u0430 \u0440\u0435\u043A\u043B\u0430\u043C\u0443 `);
                                        } else {
                                          return [
                                            createTextVNode("\u0420\u0430\u0441\u0445\u043E\u0434\u044B \u043D\u0430 \u0440\u0435\u043A\u043B\u0430\u043C\u0443 ")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(`<!--[-->`);
                                    ssrRenderList(unref(plData).periods, (per, i) => {
                                      _push6(ssrRenderComponent(_component_UiTableHead, {
                                        key: i,
                                        class: "text-center"
                                      }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`${ssrInterpolate(per)}`);
                                          } else {
                                            return [
                                              createTextVNode(toDisplayString(per), 1)
                                            ];
                                          }
                                        }),
                                        _: 2
                                      }, _parent6, _scopeId5));
                                    });
                                    _push6(`<!--]-->`);
                                  } else {
                                    return [
                                      createVNode(_component_UiTableHead, { class: "text-xl" }, {
                                        default: withCtx(() => [
                                          createTextVNode("\u0420\u0430\u0441\u0445\u043E\u0434\u044B \u043D\u0430 \u0440\u0435\u043A\u043B\u0430\u043C\u0443 ")
                                        ]),
                                        _: 1
                                      }),
                                      (openBlock(true), createBlock(Fragment, null, renderList(unref(plData).periods, (per, i) => {
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
                              }, _parent5, _scopeId4));
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
                                    (openBlock(true), createBlock(Fragment, null, renderList(unref(plData).periods, (per, i) => {
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
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_UiTableBody, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<!--[-->`);
                              ssrRenderList(unref(plData).expenses.commercial.adExpenses.data, (item) => {
                                _push5(ssrRenderComponent(_component_UiTableRow, {
                                  key: item.title
                                }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(ssrRenderComponent(_component_UiTableCell, null, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`${ssrInterpolate(item.title)}`);
                                          } else {
                                            return [
                                              createTextVNode(toDisplayString(item.title), 1)
                                            ];
                                          }
                                        }),
                                        _: 2
                                      }, _parent6, _scopeId5));
                                      _push6(`<!--[-->`);
                                      ssrRenderList(item.data, (dp, i) => {
                                        _push6(ssrRenderComponent(_component_UiTableCell, {
                                          key: i,
                                          class: "text-center"
                                        }, {
                                          default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                            if (_push7) {
                                              _push7(`<div class="${ssrRenderClass([
                                                "flex justify-center items-center gap-1"
                                              ])}"${_scopeId6}><span${_scopeId6}>${ssrInterpolate(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(+dp.value.toFixed(2)) + "\u20BD")}</span><span${_scopeId6}> (${ssrInterpolate(dp.changePercent)}%) </span></div>`);
                                            } else {
                                              return [
                                                createVNode("div", { class: [
                                                  "flex justify-center items-center gap-1"
                                                ] }, [
                                                  createVNode("span", null, toDisplayString(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(+dp.value.toFixed(2)) + "\u20BD"), 1),
                                                  createVNode("span", null, " (" + toDisplayString(dp.changePercent) + "%) ", 1)
                                                ])
                                              ];
                                            }
                                          }),
                                          _: 2
                                        }, _parent6, _scopeId5));
                                      });
                                      _push6(`<!--]-->`);
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
                                              createVNode("div", { class: [
                                                "flex justify-center items-center gap-1"
                                              ] }, [
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
                                }, _parent5, _scopeId4));
                              });
                              _push5(`<!--]-->`);
                              _push5(ssrRenderComponent(_component_UiTableRow, { class: "text-center bg-slate-300 hover:bg-slate-300" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_UiTableCell, { class: "font-bold text-left" }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(` \u0418\u0422\u041E\u0413\u041E `);
                                        } else {
                                          return [
                                            createTextVNode(" \u0418\u0422\u041E\u0413\u041E ")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(`<!--[-->`);
                                    ssrRenderList(unref(plData).expenses.commercial.adExpenses.totals, (total) => {
                                      _push6(ssrRenderComponent(_component_UiTableCell, { key: total }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`<span${_scopeId6}>${ssrInterpolate(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(+total.value.toFixed(2)) + "\u20BD")}</span><span${_scopeId6}> (${ssrInterpolate(total.changePercent.toFixed(2))}%) </span>`);
                                          } else {
                                            return [
                                              createVNode("span", null, toDisplayString(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(+total.value.toFixed(2)) + "\u20BD"), 1),
                                              createVNode("span", null, " (" + toDisplayString(total.changePercent.toFixed(2)) + "%) ", 1)
                                            ];
                                          }
                                        }),
                                        _: 2
                                      }, _parent6, _scopeId5));
                                    });
                                    _push6(`<!--]-->`);
                                  } else {
                                    return [
                                      createVNode(_component_UiTableCell, { class: "font-bold text-left" }, {
                                        default: withCtx(() => [
                                          createTextVNode(" \u0418\u0422\u041E\u0413\u041E ")
                                        ]),
                                        _: 1
                                      }),
                                      (openBlock(true), createBlock(Fragment, null, renderList(unref(plData).expenses.commercial.adExpenses.totals, (total) => {
                                        return openBlock(), createBlock(_component_UiTableCell, { key: total }, {
                                          default: withCtx(() => [
                                            createVNode("span", null, toDisplayString(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(+total.value.toFixed(2)) + "\u20BD"), 1),
                                            createVNode("span", null, " (" + toDisplayString(total.changePercent.toFixed(2)) + "%) ", 1)
                                          ]),
                                          _: 2
                                        }, 1024);
                                      }), 128))
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                (openBlock(true), createBlock(Fragment, null, renderList(unref(plData).expenses.commercial.adExpenses.data, (item) => {
                                  return openBlock(), createBlock(_component_UiTableRow, {
                                    key: item.title
                                  }, {
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
                                            createVNode("div", { class: [
                                              "flex justify-center items-center gap-1"
                                            ] }, [
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
                                    (openBlock(true), createBlock(Fragment, null, renderList(unref(plData).expenses.commercial.adExpenses.totals, (total) => {
                                      return openBlock(), createBlock(_component_UiTableCell, { key: total }, {
                                        default: withCtx(() => [
                                          createVNode("span", null, toDisplayString(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(+total.value.toFixed(2)) + "\u20BD"), 1),
                                          createVNode("span", null, " (" + toDisplayString(total.changePercent.toFixed(2)) + "%) ", 1)
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
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_UiTableHeader, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_UiTableRow, { class: "bg-slate-200 hover:bg-slate-200" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_UiTableHead, { class: "text-xl" }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`\u0417\u0430\u0440\u043F\u043B\u0430\u0442\u044B \u043A\u043E\u043C\u043C\u0435\u0440\u0447\u0435\u0441\u043A\u043E\u0433\u043E \u043E\u0442\u0434\u0435\u043B\u0430 `);
                                        } else {
                                          return [
                                            createTextVNode("\u0417\u0430\u0440\u043F\u043B\u0430\u0442\u044B \u043A\u043E\u043C\u043C\u0435\u0440\u0447\u0435\u0441\u043A\u043E\u0433\u043E \u043E\u0442\u0434\u0435\u043B\u0430 ")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(`<!--[-->`);
                                    ssrRenderList(unref(plData).periods, (per, i) => {
                                      _push6(ssrRenderComponent(_component_UiTableHead, {
                                        key: i,
                                        class: "text-center"
                                      }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`${ssrInterpolate(per)}`);
                                          } else {
                                            return [
                                              createTextVNode(toDisplayString(per), 1)
                                            ];
                                          }
                                        }),
                                        _: 2
                                      }, _parent6, _scopeId5));
                                    });
                                    _push6(`<!--]-->`);
                                  } else {
                                    return [
                                      createVNode(_component_UiTableHead, { class: "text-xl" }, {
                                        default: withCtx(() => [
                                          createTextVNode("\u0417\u0430\u0440\u043F\u043B\u0430\u0442\u044B \u043A\u043E\u043C\u043C\u0435\u0440\u0447\u0435\u0441\u043A\u043E\u0433\u043E \u043E\u0442\u0434\u0435\u043B\u0430 ")
                                        ]),
                                        _: 1
                                      }),
                                      (openBlock(true), createBlock(Fragment, null, renderList(unref(plData).periods, (per, i) => {
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
                              }, _parent5, _scopeId4));
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
                                    (openBlock(true), createBlock(Fragment, null, renderList(unref(plData).periods, (per, i) => {
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
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_UiTableBody, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<!--[-->`);
                              ssrRenderList(unref(plData).expenses.commercial.commercialSalaries.data, (item) => {
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
                                      _push6(`<!--[-->`);
                                      ssrRenderList(item.data, (dp, i) => {
                                        _push6(ssrRenderComponent(_component_UiTableCell, {
                                          key: i,
                                          class: "text-center"
                                        }, {
                                          default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                            if (_push7) {
                                              _push7(`<div class="${ssrRenderClass([
                                                "flex justify-center items-center gap-1"
                                              ])}"${_scopeId6}><span${_scopeId6}>${ssrInterpolate(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(+dp.value.toFixed(2)) + "\u20BD")}</span><span${_scopeId6}> (${ssrInterpolate(dp.changePercent)}%) </span></div>`);
                                            } else {
                                              return [
                                                createVNode("div", { class: [
                                                  "flex justify-center items-center gap-1"
                                                ] }, [
                                                  createVNode("span", null, toDisplayString(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(+dp.value.toFixed(2)) + "\u20BD"), 1),
                                                  createVNode("span", null, " (" + toDisplayString(dp.changePercent) + "%) ", 1)
                                                ])
                                              ];
                                            }
                                          }),
                                          _: 2
                                        }, _parent6, _scopeId5));
                                      });
                                      _push6(`<!--]-->`);
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
                                              createVNode("div", { class: [
                                                "flex justify-center items-center gap-1"
                                              ] }, [
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
                                }, _parent5, _scopeId4));
                              });
                              _push5(`<!--]-->`);
                              _push5(ssrRenderComponent(_component_UiTableRow, { class: "text-center bg-slate-300" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_UiTableCell, { class: "font-bold text-left" }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(` \u0418\u0422\u041E\u0413\u041E `);
                                        } else {
                                          return [
                                            createTextVNode(" \u0418\u0422\u041E\u0413\u041E ")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(`<!--[-->`);
                                    ssrRenderList(unref(plData).expenses.commercial.commercialSalaries.totals, (total) => {
                                      _push6(ssrRenderComponent(_component_UiTableCell, { key: total }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`<span${_scopeId6}>${ssrInterpolate(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(+total.value.toFixed(2)) + "\u20BD")}</span><span${_scopeId6}> (${ssrInterpolate(total.changePercent.toFixed(2))}%) </span>`);
                                          } else {
                                            return [
                                              createVNode("span", null, toDisplayString(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(+total.value.toFixed(2)) + "\u20BD"), 1),
                                              createVNode("span", null, " (" + toDisplayString(total.changePercent.toFixed(2)) + "%) ", 1)
                                            ];
                                          }
                                        }),
                                        _: 2
                                      }, _parent6, _scopeId5));
                                    });
                                    _push6(`<!--]-->`);
                                  } else {
                                    return [
                                      createVNode(_component_UiTableCell, { class: "font-bold text-left" }, {
                                        default: withCtx(() => [
                                          createTextVNode(" \u0418\u0422\u041E\u0413\u041E ")
                                        ]),
                                        _: 1
                                      }),
                                      (openBlock(true), createBlock(Fragment, null, renderList(unref(plData).expenses.commercial.commercialSalaries.totals, (total) => {
                                        return openBlock(), createBlock(_component_UiTableCell, { key: total }, {
                                          default: withCtx(() => [
                                            createVNode("span", null, toDisplayString(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(+total.value.toFixed(2)) + "\u20BD"), 1),
                                            createVNode("span", null, " (" + toDisplayString(total.changePercent.toFixed(2)) + "%) ", 1)
                                          ]),
                                          _: 2
                                        }, 1024);
                                      }), 128))
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                (openBlock(true), createBlock(Fragment, null, renderList(unref(plData).expenses.commercial.commercialSalaries.data, (item) => {
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
                                      (openBlock(true), createBlock(Fragment, null, renderList(item.data, (dp, i) => {
                                        return openBlock(), createBlock(_component_UiTableCell, {
                                          key: i,
                                          class: "text-center"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode("div", { class: [
                                              "flex justify-center items-center gap-1"
                                            ] }, [
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
                                    (openBlock(true), createBlock(Fragment, null, renderList(unref(plData).expenses.commercial.commercialSalaries.totals, (total) => {
                                      return openBlock(), createBlock(_component_UiTableCell, { key: total }, {
                                        default: withCtx(() => [
                                          createVNode("span", null, toDisplayString(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(+total.value.toFixed(2)) + "\u20BD"), 1),
                                          createVNode("span", null, " (" + toDisplayString(total.changePercent.toFixed(2)) + "%) ", 1)
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
                        }, _parent4, _scopeId3));
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
                                  (openBlock(true), createBlock(Fragment, null, renderList(unref(plData).periods, (per, i) => {
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
                                  (openBlock(true), createBlock(Fragment, null, renderList(unref(plData).income.allDealsPrice, (dp, i) => {
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
                                  (openBlock(true), createBlock(Fragment, null, renderList(unref(plData).income.sendDeals, (dp, i) => {
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
                                  (openBlock(true), createBlock(Fragment, null, renderList(unref(plData).income.revenue, (dp, i) => {
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
                                  (openBlock(true), createBlock(Fragment, null, renderList(unref(plData).periods, (per, i) => {
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
                              (openBlock(true), createBlock(Fragment, null, renderList(unref(plData).expenses.totals.data, (item, i) => {
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
                                    (openBlock(true), createBlock(Fragment, null, renderList(item.data, (dp, i2) => {
                                      return openBlock(), createBlock(_component_UiTableCell, {
                                        key: i2,
                                        class: "text-center"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode("div", { class: [
                                            "flex justify-center items-center gap-1"
                                          ] }, [
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
                                  (openBlock(true), createBlock(Fragment, null, renderList(unref(plData).expenses.totals.totals, (total, i) => {
                                    return openBlock(), createBlock(_component_UiTableCell, { key: i }, {
                                      default: withCtx(() => [
                                        createVNode("span", null, toDisplayString(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(+total.value.toFixed(2)) + "\u20BD"), 1),
                                        createVNode("span", null, " (" + toDisplayString(total.changePercent.toFixed(2)) + "%) ", 1)
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
                                  (openBlock(true), createBlock(Fragment, null, renderList(unref(plData).periods, (per, i) => {
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
                              (openBlock(true), createBlock(Fragment, null, renderList(unref(plData).expenses.production.supplies.data, (item) => {
                                return openBlock(), createBlock(_component_UiTableRow, {
                                  key: item.label
                                }, {
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
                                          createVNode("div", { class: [
                                            "flex justify-center items-center gap-1"
                                          ] }, [
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
                                  (openBlock(true), createBlock(Fragment, null, renderList(unref(plData).expenses.production.supplies.totals, (total) => {
                                    return openBlock(), createBlock(_component_UiTableCell, { key: total }, {
                                      default: withCtx(() => [
                                        createVNode("span", null, toDisplayString(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(+total.value.toFixed(2)) + "\u20BD"), 1),
                                        createVNode("span", null, " (" + toDisplayString(total.changePercent.toFixed(2)) + "%) ", 1)
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
                              createVNode(_component_UiTableRow, { class: "bg-slate-200 hover:bg-slate-200" }, {
                                default: withCtx(() => [
                                  createVNode(_component_UiTableHead, { class: "text-xl" }, {
                                    default: withCtx(() => [
                                      createTextVNode("\u0417\u0430\u0440\u043F\u043B\u0430\u0442\u044B \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0441\u0442\u0432\u0430 ")
                                    ]),
                                    _: 1
                                  }),
                                  (openBlock(true), createBlock(Fragment, null, renderList(unref(plData).periods, (per, i) => {
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
                              (openBlock(true), createBlock(Fragment, null, renderList(unref(plData).expenses.production.productionSalaries.data, (item) => {
                                return openBlock(), createBlock(_component_UiTableRow, {
                                  key: item.label
                                }, {
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
                                          createVNode("div", { class: [
                                            "flex justify-center items-center gap-1"
                                          ] }, [
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
                                  (openBlock(true), createBlock(Fragment, null, renderList(unref(plData).expenses.production.productionSalaries.totals, (total) => {
                                    return openBlock(), createBlock(_component_UiTableCell, { key: total }, {
                                      default: withCtx(() => [
                                        createVNode("span", null, toDisplayString(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(+total.value.toFixed(2)) + "\u20BD"), 1),
                                        createVNode("span", null, " (" + toDisplayString(total.changePercent.toFixed(2)) + "%) ", 1)
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
                                  (openBlock(true), createBlock(Fragment, null, renderList(unref(plData).periods, (per, i) => {
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
                              (openBlock(true), createBlock(Fragment, null, renderList(unref(plData).expenses.commercial.adExpenses.data, (item) => {
                                return openBlock(), createBlock(_component_UiTableRow, {
                                  key: item.title
                                }, {
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
                                          createVNode("div", { class: [
                                            "flex justify-center items-center gap-1"
                                          ] }, [
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
                                  (openBlock(true), createBlock(Fragment, null, renderList(unref(plData).expenses.commercial.adExpenses.totals, (total) => {
                                    return openBlock(), createBlock(_component_UiTableCell, { key: total }, {
                                      default: withCtx(() => [
                                        createVNode("span", null, toDisplayString(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(+total.value.toFixed(2)) + "\u20BD"), 1),
                                        createVNode("span", null, " (" + toDisplayString(total.changePercent.toFixed(2)) + "%) ", 1)
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
                              createVNode(_component_UiTableRow, { class: "bg-slate-200 hover:bg-slate-200" }, {
                                default: withCtx(() => [
                                  createVNode(_component_UiTableHead, { class: "text-xl" }, {
                                    default: withCtx(() => [
                                      createTextVNode("\u0417\u0430\u0440\u043F\u043B\u0430\u0442\u044B \u043A\u043E\u043C\u043C\u0435\u0440\u0447\u0435\u0441\u043A\u043E\u0433\u043E \u043E\u0442\u0434\u0435\u043B\u0430 ")
                                    ]),
                                    _: 1
                                  }),
                                  (openBlock(true), createBlock(Fragment, null, renderList(unref(plData).periods, (per, i) => {
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
                              (openBlock(true), createBlock(Fragment, null, renderList(unref(plData).expenses.commercial.commercialSalaries.data, (item) => {
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
                                    (openBlock(true), createBlock(Fragment, null, renderList(item.data, (dp, i) => {
                                      return openBlock(), createBlock(_component_UiTableCell, {
                                        key: i,
                                        class: "text-center"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode("div", { class: [
                                            "flex justify-center items-center gap-1"
                                          ] }, [
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
                                  (openBlock(true), createBlock(Fragment, null, renderList(unref(plData).expenses.commercial.commercialSalaries.totals, (total) => {
                                    return openBlock(), createBlock(_component_UiTableCell, { key: total }, {
                                      default: withCtx(() => [
                                        createVNode("span", null, toDisplayString(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(+total.value.toFixed(2)) + "\u20BD"), 1),
                                        createVNode("span", null, " (" + toDisplayString(total.changePercent.toFixed(2)) + "%) ", 1)
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
                  }, _parent3, _scopeId2));
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("div", { class: "px-3" }, [
                      createVNode(_component_UiTable, { class: "bg-slate-100 rounded-sm overflow-hidden" }, {
                        default: withCtx(() => [
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
                                  (openBlock(true), createBlock(Fragment, null, renderList(unref(plData).periods, (per, i) => {
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
                                  (openBlock(true), createBlock(Fragment, null, renderList(unref(plData).income.allDealsPrice, (dp, i) => {
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
                                  (openBlock(true), createBlock(Fragment, null, renderList(unref(plData).income.sendDeals, (dp, i) => {
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
                                  (openBlock(true), createBlock(Fragment, null, renderList(unref(plData).income.revenue, (dp, i) => {
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
                                  (openBlock(true), createBlock(Fragment, null, renderList(unref(plData).periods, (per, i) => {
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
                              (openBlock(true), createBlock(Fragment, null, renderList(unref(plData).expenses.totals.data, (item, i) => {
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
                                    (openBlock(true), createBlock(Fragment, null, renderList(item.data, (dp, i2) => {
                                      return openBlock(), createBlock(_component_UiTableCell, {
                                        key: i2,
                                        class: "text-center"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode("div", { class: [
                                            "flex justify-center items-center gap-1"
                                          ] }, [
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
                                  (openBlock(true), createBlock(Fragment, null, renderList(unref(plData).expenses.totals.totals, (total, i) => {
                                    return openBlock(), createBlock(_component_UiTableCell, { key: i }, {
                                      default: withCtx(() => [
                                        createVNode("span", null, toDisplayString(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(+total.value.toFixed(2)) + "\u20BD"), 1),
                                        createVNode("span", null, " (" + toDisplayString(total.changePercent.toFixed(2)) + "%) ", 1)
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
                                  (openBlock(true), createBlock(Fragment, null, renderList(unref(plData).periods, (per, i) => {
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
                              (openBlock(true), createBlock(Fragment, null, renderList(unref(plData).expenses.production.supplies.data, (item) => {
                                return openBlock(), createBlock(_component_UiTableRow, {
                                  key: item.label
                                }, {
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
                                          createVNode("div", { class: [
                                            "flex justify-center items-center gap-1"
                                          ] }, [
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
                                  (openBlock(true), createBlock(Fragment, null, renderList(unref(plData).expenses.production.supplies.totals, (total) => {
                                    return openBlock(), createBlock(_component_UiTableCell, { key: total }, {
                                      default: withCtx(() => [
                                        createVNode("span", null, toDisplayString(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(+total.value.toFixed(2)) + "\u20BD"), 1),
                                        createVNode("span", null, " (" + toDisplayString(total.changePercent.toFixed(2)) + "%) ", 1)
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
                              createVNode(_component_UiTableRow, { class: "bg-slate-200 hover:bg-slate-200" }, {
                                default: withCtx(() => [
                                  createVNode(_component_UiTableHead, { class: "text-xl" }, {
                                    default: withCtx(() => [
                                      createTextVNode("\u0417\u0430\u0440\u043F\u043B\u0430\u0442\u044B \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0441\u0442\u0432\u0430 ")
                                    ]),
                                    _: 1
                                  }),
                                  (openBlock(true), createBlock(Fragment, null, renderList(unref(plData).periods, (per, i) => {
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
                              (openBlock(true), createBlock(Fragment, null, renderList(unref(plData).expenses.production.productionSalaries.data, (item) => {
                                return openBlock(), createBlock(_component_UiTableRow, {
                                  key: item.label
                                }, {
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
                                          createVNode("div", { class: [
                                            "flex justify-center items-center gap-1"
                                          ] }, [
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
                                  (openBlock(true), createBlock(Fragment, null, renderList(unref(plData).expenses.production.productionSalaries.totals, (total) => {
                                    return openBlock(), createBlock(_component_UiTableCell, { key: total }, {
                                      default: withCtx(() => [
                                        createVNode("span", null, toDisplayString(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(+total.value.toFixed(2)) + "\u20BD"), 1),
                                        createVNode("span", null, " (" + toDisplayString(total.changePercent.toFixed(2)) + "%) ", 1)
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
                                  (openBlock(true), createBlock(Fragment, null, renderList(unref(plData).periods, (per, i) => {
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
                              (openBlock(true), createBlock(Fragment, null, renderList(unref(plData).expenses.commercial.adExpenses.data, (item) => {
                                return openBlock(), createBlock(_component_UiTableRow, {
                                  key: item.title
                                }, {
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
                                          createVNode("div", { class: [
                                            "flex justify-center items-center gap-1"
                                          ] }, [
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
                                  (openBlock(true), createBlock(Fragment, null, renderList(unref(plData).expenses.commercial.adExpenses.totals, (total) => {
                                    return openBlock(), createBlock(_component_UiTableCell, { key: total }, {
                                      default: withCtx(() => [
                                        createVNode("span", null, toDisplayString(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(+total.value.toFixed(2)) + "\u20BD"), 1),
                                        createVNode("span", null, " (" + toDisplayString(total.changePercent.toFixed(2)) + "%) ", 1)
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
                              createVNode(_component_UiTableRow, { class: "bg-slate-200 hover:bg-slate-200" }, {
                                default: withCtx(() => [
                                  createVNode(_component_UiTableHead, { class: "text-xl" }, {
                                    default: withCtx(() => [
                                      createTextVNode("\u0417\u0430\u0440\u043F\u043B\u0430\u0442\u044B \u043A\u043E\u043C\u043C\u0435\u0440\u0447\u0435\u0441\u043A\u043E\u0433\u043E \u043E\u0442\u0434\u0435\u043B\u0430 ")
                                    ]),
                                    _: 1
                                  }),
                                  (openBlock(true), createBlock(Fragment, null, renderList(unref(plData).periods, (per, i) => {
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
                              (openBlock(true), createBlock(Fragment, null, renderList(unref(plData).expenses.commercial.commercialSalaries.data, (item) => {
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
                                    (openBlock(true), createBlock(Fragment, null, renderList(item.data, (dp, i) => {
                                      return openBlock(), createBlock(_component_UiTableCell, {
                                        key: i,
                                        class: "text-center"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode("div", { class: [
                                            "flex justify-center items-center gap-1"
                                          ] }, [
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
                                  (openBlock(true), createBlock(Fragment, null, renderList(unref(plData).expenses.commercial.commercialSalaries.totals, (total) => {
                                    return openBlock(), createBlock(_component_UiTableCell, { key: total }, {
                                      default: withCtx(() => [
                                        createVNode("span", null, toDisplayString(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(+total.value.toFixed(2)) + "\u20BD"), 1),
                                        createVNode("span", null, " (" + toDisplayString(total.changePercent.toFixed(2)) + "%) ", 1)
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
                      })
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
                    createVNode(_component_UiTable, { class: "bg-slate-100 rounded-sm overflow-hidden" }, {
                      default: withCtx(() => [
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
                                (openBlock(true), createBlock(Fragment, null, renderList(unref(plData).periods, (per, i) => {
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
                                (openBlock(true), createBlock(Fragment, null, renderList(unref(plData).income.allDealsPrice, (dp, i) => {
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
                                (openBlock(true), createBlock(Fragment, null, renderList(unref(plData).income.sendDeals, (dp, i) => {
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
                                (openBlock(true), createBlock(Fragment, null, renderList(unref(plData).income.revenue, (dp, i) => {
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
                                (openBlock(true), createBlock(Fragment, null, renderList(unref(plData).periods, (per, i) => {
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
                            (openBlock(true), createBlock(Fragment, null, renderList(unref(plData).expenses.totals.data, (item, i) => {
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
                                  (openBlock(true), createBlock(Fragment, null, renderList(item.data, (dp, i2) => {
                                    return openBlock(), createBlock(_component_UiTableCell, {
                                      key: i2,
                                      class: "text-center"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode("div", { class: [
                                          "flex justify-center items-center gap-1"
                                        ] }, [
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
                                (openBlock(true), createBlock(Fragment, null, renderList(unref(plData).expenses.totals.totals, (total, i) => {
                                  return openBlock(), createBlock(_component_UiTableCell, { key: i }, {
                                    default: withCtx(() => [
                                      createVNode("span", null, toDisplayString(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(+total.value.toFixed(2)) + "\u20BD"), 1),
                                      createVNode("span", null, " (" + toDisplayString(total.changePercent.toFixed(2)) + "%) ", 1)
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
                                (openBlock(true), createBlock(Fragment, null, renderList(unref(plData).periods, (per, i) => {
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
                            (openBlock(true), createBlock(Fragment, null, renderList(unref(plData).expenses.production.supplies.data, (item) => {
                              return openBlock(), createBlock(_component_UiTableRow, {
                                key: item.label
                              }, {
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
                                        createVNode("div", { class: [
                                          "flex justify-center items-center gap-1"
                                        ] }, [
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
                                (openBlock(true), createBlock(Fragment, null, renderList(unref(plData).expenses.production.supplies.totals, (total) => {
                                  return openBlock(), createBlock(_component_UiTableCell, { key: total }, {
                                    default: withCtx(() => [
                                      createVNode("span", null, toDisplayString(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(+total.value.toFixed(2)) + "\u20BD"), 1),
                                      createVNode("span", null, " (" + toDisplayString(total.changePercent.toFixed(2)) + "%) ", 1)
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
                            createVNode(_component_UiTableRow, { class: "bg-slate-200 hover:bg-slate-200" }, {
                              default: withCtx(() => [
                                createVNode(_component_UiTableHead, { class: "text-xl" }, {
                                  default: withCtx(() => [
                                    createTextVNode("\u0417\u0430\u0440\u043F\u043B\u0430\u0442\u044B \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0441\u0442\u0432\u0430 ")
                                  ]),
                                  _: 1
                                }),
                                (openBlock(true), createBlock(Fragment, null, renderList(unref(plData).periods, (per, i) => {
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
                            (openBlock(true), createBlock(Fragment, null, renderList(unref(plData).expenses.production.productionSalaries.data, (item) => {
                              return openBlock(), createBlock(_component_UiTableRow, {
                                key: item.label
                              }, {
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
                                        createVNode("div", { class: [
                                          "flex justify-center items-center gap-1"
                                        ] }, [
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
                                (openBlock(true), createBlock(Fragment, null, renderList(unref(plData).expenses.production.productionSalaries.totals, (total) => {
                                  return openBlock(), createBlock(_component_UiTableCell, { key: total }, {
                                    default: withCtx(() => [
                                      createVNode("span", null, toDisplayString(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(+total.value.toFixed(2)) + "\u20BD"), 1),
                                      createVNode("span", null, " (" + toDisplayString(total.changePercent.toFixed(2)) + "%) ", 1)
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
                                (openBlock(true), createBlock(Fragment, null, renderList(unref(plData).periods, (per, i) => {
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
                            (openBlock(true), createBlock(Fragment, null, renderList(unref(plData).expenses.commercial.adExpenses.data, (item) => {
                              return openBlock(), createBlock(_component_UiTableRow, {
                                key: item.title
                              }, {
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
                                        createVNode("div", { class: [
                                          "flex justify-center items-center gap-1"
                                        ] }, [
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
                                (openBlock(true), createBlock(Fragment, null, renderList(unref(plData).expenses.commercial.adExpenses.totals, (total) => {
                                  return openBlock(), createBlock(_component_UiTableCell, { key: total }, {
                                    default: withCtx(() => [
                                      createVNode("span", null, toDisplayString(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(+total.value.toFixed(2)) + "\u20BD"), 1),
                                      createVNode("span", null, " (" + toDisplayString(total.changePercent.toFixed(2)) + "%) ", 1)
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
                            createVNode(_component_UiTableRow, { class: "bg-slate-200 hover:bg-slate-200" }, {
                              default: withCtx(() => [
                                createVNode(_component_UiTableHead, { class: "text-xl" }, {
                                  default: withCtx(() => [
                                    createTextVNode("\u0417\u0430\u0440\u043F\u043B\u0430\u0442\u044B \u043A\u043E\u043C\u043C\u0435\u0440\u0447\u0435\u0441\u043A\u043E\u0433\u043E \u043E\u0442\u0434\u0435\u043B\u0430 ")
                                  ]),
                                  _: 1
                                }),
                                (openBlock(true), createBlock(Fragment, null, renderList(unref(plData).periods, (per, i) => {
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
                            (openBlock(true), createBlock(Fragment, null, renderList(unref(plData).expenses.commercial.commercialSalaries.data, (item) => {
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
                                  (openBlock(true), createBlock(Fragment, null, renderList(item.data, (dp, i) => {
                                    return openBlock(), createBlock(_component_UiTableCell, {
                                      key: i,
                                      class: "text-center"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode("div", { class: [
                                          "flex justify-center items-center gap-1"
                                        ] }, [
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
                                (openBlock(true), createBlock(Fragment, null, renderList(unref(plData).expenses.commercial.commercialSalaries.totals, (total) => {
                                  return openBlock(), createBlock(_component_UiTableCell, { key: total }, {
                                    default: withCtx(() => [
                                      createVNode("span", null, toDisplayString(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(+total.value.toFixed(2)) + "\u20BD"), 1),
                                      createVNode("span", null, " (" + toDisplayString(total.changePercent.toFixed(2)) + "%) ", 1)
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
                    })
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
      const _component_LayoutSidebar = _sfc_main$d;
      const _component_UiTabs = _sfc_main$2$1;
      const _component_UiTabsList = _sfc_main$e;
      const _component_UiTabsTrigger = _sfc_main$1$1;
      const _component_UiTabsContent = _sfc_main$f;
      const _component_MyPlanfactAccounts = _sfc_main$b;
      const _component_MyPlanfactOperations = _sfc_main$3;
      const _component_MyPlanfactCategories = _sfc_main$2;
      const _component_MyPlanfactPL = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative h-screen hidden-scrollbar" }, _attrs))}><div class="w-full fixed z-10">`);
      _push(ssrRenderComponent(_component_LayoutSidebar, null, null, _parent));
      _push(`</div><div class="h-full flex flex-col p-4 gap-2 mx-[auto] max-w-[2048px] pt-16 min-w-[1024px]">`);
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
                        _push4(`\u041F\u041D\u041B`);
                      } else {
                        return [
                          createTextVNode("\u041F\u041D\u041B")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_UiTabsTrigger, { value: "dds" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`\u0414\u0414\u0421`);
                      } else {
                        return [
                          createTextVNode("\u0414\u0414\u0421")
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
                        createTextVNode("\u041F\u041D\u041B")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_UiTabsTrigger, { value: "dds" }, {
                      default: withCtx(() => [
                        createTextVNode("\u0414\u0414\u0421")
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
            _push2(ssrRenderComponent(_component_UiTabsContent, { value: "dds" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` \u0414\u0414\u0421 `);
                } else {
                  return [
                    createTextVNode(" \u0414\u0414\u0421 ")
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
                      createTextVNode("\u041F\u041D\u041B")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_UiTabsTrigger, { value: "dds" }, {
                    default: withCtx(() => [
                      createTextVNode("\u0414\u0414\u0421")
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
              }),
              createVNode(_component_UiTabsContent, { value: "dds" }, {
                default: withCtx(() => [
                  createTextVNode(" \u0414\u0414\u0421 ")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/planfact/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-Dj3wttxW.mjs.map
