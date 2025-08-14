import { _ as _sfc_main$j } from './Sidebar-BnzOFdjX.mjs';
import { _ as _sfc_main$3$1, a as _sfc_main$2$1, b as _sfc_main$k, c as _sfc_main$1$1 } from './CardDescription-B9jynpEL.mjs';
import { _ as _sfc_main$4$1, a as _sfc_main$3$2, b as _sfc_main$p, c as _sfc_main$2$3, d as _sfc_main$1$3 } from './DialogContent-DodNAlD8.mjs';
import { _ as _sfc_main$q } from './DialogDescription-Bv3iXHRh.mjs';
import { _ as _sfc_main$s } from './DialogFooter-CS0sFmAA.mjs';
import { _ as _sfc_main$o, v as valueUpdater, c as cn } from './index-DXIlBIYA.mjs';
import { _ as _sfc_main$r } from './ComboboxModels-BcsYUbW8.mjs';
import { _ as _sfc_main$1$6, a as _sfc_main$y } from './CardFooter-CIZt0R6-.mjs';
import { _ as _sfc_main$z } from './Label-C4ujgS20.mjs';
import { _ as _sfc_main$m } from './Input-CzbisvbY.mjs';
import { _ as _sfc_main$7$1, a as _sfc_main$5$2, b as _sfc_main$6$1, c as _sfc_main$4$3, d as _sfc_main$3$4, e as _sfc_main$2$5 } from './SelectScrollDownButton-B_NwGHHK.mjs';
import { _ as _sfc_main$A } from './Switch-MGCRXA8Z.mjs';
import { defineComponent, ref, withAsyncContext, watch, mergeProps, unref, withCtx, createTextVNode, toDisplayString, createVNode, isRef, createBlock, createCommentVNode, openBlock, h, Fragment, renderList, computed, resolveDynamicComponent, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderClass, ssrRenderVNode } from 'vue/server-renderer';
import { a as useNuxtApp } from './server.mjs';
import { _ as _sfc_main$B } from './Combobox-TceLR5QD.mjs';
import { _ as _sfc_main$2$2, a as _sfc_main$l, b as _sfc_main$1$2 } from './TabsList-BccwyRY_.mjs';
import { _ as _sfc_main$n } from './CreateModal-BI0JGc8v.mjs';
import { _ as _sfc_main$2$6, a as _sfc_main$1$7, b as _sfc_main$F } from './PopoverContent-tRGx4jX7.mjs';
import { _ as _sfc_main$v } from './Separator-CLaMwOnh.mjs';
import { _ as _sfc_main$E } from './index-DkpNfINN.mjs';
import { _ as _sfc_main$3$5, a as _sfc_main$H, b as _sfc_main$2$7, c as _sfc_main$1$9 } from './CommandList-DJfPvy-6.mjs';
import { _ as _sfc_main$G, a as _sfc_main$1$8 } from './CommandInput-Ca0d3E3_.mjs';
import { _ as _sfc_main$I } from './CommandSeparator-DeDETuPU.mjs';
import { ArrowUpDown, X, CirclePlus, Check } from 'lucide-vue-next';
import { _ as _sfc_main$t, a as _sfc_main$1$5 } from './ScrollArea-NCgGlv0P.mjs';
import { _ as _sfc_main$5$1, a as _sfc_main$u, b as _sfc_main$2$4, c as _sfc_main$1$4, d as _sfc_main$4$2, e as _sfc_main$3$3 } from './TableHeader-BLDvnO_S.mjs';
import { useVueTable, getFilteredRowModel, getSortedRowModel, getCoreRowModel, FlexRender } from '@tanstack/vue-table';
import __nuxt_component_7 from './index-AgMVcrN0.mjs';
import { _ as __nuxt_component_0 } from './nuxt-link-HZteq-Zb.mjs';
import { _ as _sfc_main$w } from './CreateModal-DEJodF2E.mjs';
import { _ as _sfc_main$x } from './EditModal-RjPsqKZ5.mjs';
import { _ as _sfc_main$C } from './Textarea-8eRA4fdT.mjs';
import { _ as _sfc_main$D } from './NuxtImg-CkudYSzx.mjs';
import { d as dateFormat } from './useMyDateFormat-Cn1Jsliy.mjs';
import { u as useMyFormatPrice } from './useMyFormatPrice-CCAsFuev.mjs';
import { u as useHead } from './v3-CJAL4xID.mjs';
import './DropdownMenuItem-bkfc8fNQ.mjs';
import 'radix-vue';
import './isLoading-BADbcWeo.mjs';
import 'pinia';
import 'class-variance-authority';
import 'clsx';
import 'tailwind-merge';
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
import 'ipx';
import 'vue-router';
import '@iconify/vue';
import 'axios';
import '@iconify/utils/lib/css/icon';
import 'perfect-debounce';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import 'unhead/plugins';

const _sfc_main$i = /* @__PURE__ */ defineComponent({
  __name: "CreateClientCard",
  __ssrInlineRender: true,
  emits: ["update:clientBlank"],
  setup(__props, { emit: __emit }) {
    const { $useApi } = useNuxtApp();
    const newClientBlank = {
      id: 0,
      chatLink: "",
      fullName: "",
      phone: "",
      gender: "M",
      type: "\u0424\u0418\u0417",
      firstContact: "",
      adLink: "",
      inn: "",
      isRegular: false
    };
    const readOnly = ref(true);
    const clientData = ref({ ...newClientBlank });
    const getClient = async (link) => {
      try {
        if (!link) {
          readOnly.value = true;
          clientData.value = newClientBlank;
          clientData.value.chatLink = link;
          return;
        }
        const { data: fetchedData } = await $useApi.get("/clients", {
          params: { chatLink: link }
        });
        if (!fetchedData.length) {
          readOnly.value = false;
          clientData.value = newClientBlank;
          clientData.value.chatLink = link;
          return;
        }
        const { chatLink, ...client } = fetchedData[0];
        clientData.value = client;
        clientData.value.chatLink = link;
        readOnly.value = true;
      } catch (error) {
        console.error("\u041E\u0448\u0438\u0431\u043A\u0430 \u043F\u0440\u0438 \u043F\u043E\u043B\u0443\u0447\u0435\u043D\u0438\u0438 \u0434\u0430\u043D\u043D\u044B\u0445 \u043A\u043B\u0438\u0435\u043D\u0442\u0430:", error);
      }
    };
    const emit = __emit;
    watch(
      clientData,
      async (newValue) => {
        emit("update:clientBlank", newValue);
      },
      { deep: true }
    );
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UiCard = _sfc_main$3$1;
      const _component_UiCardHeader = _sfc_main$2$1;
      const _component_UiCardTitle = _sfc_main$1$1;
      const _component_UiCardDescription = _sfc_main$k;
      const _component_UiCardContent = _sfc_main$1$6;
      const _component_UiLabel = _sfc_main$z;
      const _component_UiInput = _sfc_main$m;
      const _component_UiSelect = _sfc_main$7$1;
      const _component_UiSelectTrigger = _sfc_main$5$2;
      const _component_UiSelectValue = _sfc_main$6$1;
      const _component_UiSelectContent = _sfc_main$4$3;
      const _component_UiSelectGroup = _sfc_main$3$4;
      const _component_UiSelectItem = _sfc_main$2$5;
      const _component_UiSwitch = _sfc_main$A;
      _push(ssrRenderComponent(_component_UiCard, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UiCardHeader, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UiCardTitle, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`\u041A\u043B\u0438\u0435\u043D\u0442`);
                      } else {
                        return [
                          createTextVNode("\u041A\u043B\u0438\u0435\u043D\u0442")
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
                        createTextVNode("\u041A\u043B\u0438\u0435\u043D\u0442")
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
                  _push3(`<div class="flex flex-col gap-6"${_scopeId2}><div class="relative"${_scopeId2}>`);
                  if (unref(clientData).chatLink) {
                    _push3(ssrRenderComponent(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`\u0421\u0441\u044B\u043B\u043A\u0430 \u043D\u0430 \u0447\u0430\u0442`);
                        } else {
                          return [
                            createTextVNode("\u0421\u0441\u044B\u043B\u043A\u0430 \u043D\u0430 \u0447\u0430\u0442")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(ssrRenderComponent(_component_UiInput, {
                    modelValue: unref(clientData).chatLink,
                    "onUpdate:modelValue": ($event) => unref(clientData).chatLink = $event,
                    placeholder: "\u0421\u0441\u044B\u043B\u043A\u0430 \u043D\u0430 \u0447\u0430\u0442",
                    class: unref(clientData).chatLink ? "" : "outline-1 outline-rose-300 rounded-md",
                    onInput: async (e) => await getClient(e.target.value.trim())
                  }, null, _parent3, _scopeId2));
                  _push3(`</div><div class="relative group"${_scopeId2}>`);
                  if (unref(clientData).fullName) {
                    _push3(ssrRenderComponent(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`\u0424\u0418\u041E`);
                        } else {
                          return [
                            createTextVNode("\u0424\u0418\u041E")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(ssrRenderComponent(_component_UiInput, {
                    modelValue: unref(clientData).fullName,
                    "onUpdate:modelValue": ($event) => unref(clientData).fullName = $event,
                    placeholder: "\u0424\u0418\u041E",
                    class: unref(clientData).fullName || unref(readOnly) ? "" : "outline-1 outline-rose-300",
                    disabled: unref(readOnly)
                  }, null, _parent3, _scopeId2));
                  _push3(`</div><div class="relative"${_scopeId2}>`);
                  if (unref(clientData).phone) {
                    _push3(ssrRenderComponent(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`\u0422\u0435\u043B\u0435\u0444\u043E\u043D`);
                        } else {
                          return [
                            createTextVNode("\u0422\u0435\u043B\u0435\u0444\u043E\u043D")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(ssrRenderComponent(_component_UiInput, {
                    modelValue: unref(clientData).phone,
                    "onUpdate:modelValue": ($event) => unref(clientData).phone = $event,
                    placeholder: "\u0422\u0435\u043B\u0435\u0444\u043E\u043D",
                    class: unref(clientData).phone || unref(readOnly) ? "" : "outline-1 outline-rose-300",
                    disabled: unref(readOnly)
                  }, null, _parent3, _scopeId2));
                  _push3(`</div>`);
                  if (!unref(readOnly)) {
                    _push3(`<div class="relative"${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`\u0414\u0430\u0442\u0430 \u043F\u0435\u0440\u0432\u043E\u0433\u043E \u043A\u043E\u043D\u0442\u0430\u043A\u0442\u0430`);
                        } else {
                          return [
                            createTextVNode("\u0414\u0430\u0442\u0430 \u043F\u0435\u0440\u0432\u043E\u0433\u043E \u043A\u043E\u043D\u0442\u0430\u043A\u0442\u0430")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_component_UiInput, {
                      modelValue: unref(clientData).firstContact,
                      "onUpdate:modelValue": ($event) => unref(clientData).firstContact = $event,
                      type: "date",
                      class: unref(clientData).firstContact || unref(readOnly) ? "" : "outline-1 outline-rose-300"
                    }, null, _parent3, _scopeId2));
                    _push3(`</div>`);
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(`<div class="relative"${_scopeId2}>`);
                  if (unref(clientData).adLink) {
                    _push3(ssrRenderComponent(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`\u0421\u0441\u044B\u043B\u043A\u0430 \u043D\u0430 \u043E\u0431\u044A\u044F\u0432\u043B\u0435\u043D\u0438\u0435`);
                        } else {
                          return [
                            createTextVNode("\u0421\u0441\u044B\u043B\u043A\u0430 \u043D\u0430 \u043E\u0431\u044A\u044F\u0432\u043B\u0435\u043D\u0438\u0435")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(ssrRenderComponent(_component_UiInput, {
                    modelValue: unref(clientData).adLink,
                    "onUpdate:modelValue": ($event) => unref(clientData).adLink = $event,
                    placeholder: "\u0421\u0441\u044B\u043B\u043A\u0430 \u043D\u0430 \u043E\u0431\u044A\u044F\u0432\u043B\u0435\u043D\u0438\u0435",
                    class: "col-span-3",
                    disabled: unref(readOnly)
                  }, null, _parent3, _scopeId2));
                  _push3(`</div>`);
                  if (!unref(readOnly)) {
                    _push3(`<div class="relative"${_scopeId2}>`);
                    if (unref(clientData).type) {
                      _push3(ssrRenderComponent(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1" }, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(`\u0422\u0438\u043F \u043A\u043B\u0438\u0435\u043D\u0442\u0430`);
                          } else {
                            return [
                              createTextVNode("\u0422\u0438\u043F \u043A\u043B\u0438\u0435\u043D\u0442\u0430")
                            ];
                          }
                        }),
                        _: 1
                      }, _parent3, _scopeId2));
                    } else {
                      _push3(`<!---->`);
                    }
                    _push3(`<div${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_UiSelect, {
                      modelValue: unref(clientData).type,
                      "onUpdate:modelValue": ($event) => unref(clientData).type = $event
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_UiSelectTrigger, null, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(_component_UiSelectValue, { placeholder: "\u0422\u0438\u043F \u043A\u043B\u0438\u0435\u043D\u0442\u0430" }, null, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(_component_UiSelectValue, { placeholder: "\u0422\u0438\u043F \u043A\u043B\u0438\u0435\u043D\u0442\u0430" })
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
                                      _push6(ssrRenderComponent(_component_UiSelectItem, { value: "\u0424\u0418\u0417" }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(` \u0424\u0418\u0417 `);
                                          } else {
                                            return [
                                              createTextVNode(" \u0424\u0418\u0417 ")
                                            ];
                                          }
                                        }),
                                        _: 1
                                      }, _parent6, _scopeId5));
                                      _push6(ssrRenderComponent(_component_UiSelectItem, { value: "\u0418\u041F" }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(` \u0418\u041F `);
                                          } else {
                                            return [
                                              createTextVNode(" \u0418\u041F ")
                                            ];
                                          }
                                        }),
                                        _: 1
                                      }, _parent6, _scopeId5));
                                      _push6(ssrRenderComponent(_component_UiSelectItem, { value: "\u041E\u041E\u041E" }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(` \u041E\u041E\u041E `);
                                          } else {
                                            return [
                                              createTextVNode(" \u041E\u041E\u041E ")
                                            ];
                                          }
                                        }),
                                        _: 1
                                      }, _parent6, _scopeId5));
                                      _push6(ssrRenderComponent(_component_UiSelectItem, { value: "\u041D\u041A\u041E" }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(` \u041D\u041A\u041E `);
                                          } else {
                                            return [
                                              createTextVNode(" \u041D\u041A\u041E ")
                                            ];
                                          }
                                        }),
                                        _: 1
                                      }, _parent6, _scopeId5));
                                    } else {
                                      return [
                                        createVNode(_component_UiSelectItem, { value: "\u0424\u0418\u0417" }, {
                                          default: withCtx(() => [
                                            createTextVNode(" \u0424\u0418\u0417 ")
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(_component_UiSelectItem, { value: "\u0418\u041F" }, {
                                          default: withCtx(() => [
                                            createTextVNode(" \u0418\u041F ")
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(_component_UiSelectItem, { value: "\u041E\u041E\u041E" }, {
                                          default: withCtx(() => [
                                            createTextVNode(" \u041E\u041E\u041E ")
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(_component_UiSelectItem, { value: "\u041D\u041A\u041E" }, {
                                          default: withCtx(() => [
                                            createTextVNode(" \u041D\u041A\u041E ")
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
                                      createVNode(_component_UiSelectItem, { value: "\u0424\u0418\u0417" }, {
                                        default: withCtx(() => [
                                          createTextVNode(" \u0424\u0418\u0417 ")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_UiSelectItem, { value: "\u0418\u041F" }, {
                                        default: withCtx(() => [
                                          createTextVNode(" \u0418\u041F ")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_UiSelectItem, { value: "\u041E\u041E\u041E" }, {
                                        default: withCtx(() => [
                                          createTextVNode(" \u041E\u041E\u041E ")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_UiSelectItem, { value: "\u041D\u041A\u041E" }, {
                                        default: withCtx(() => [
                                          createTextVNode(" \u041D\u041A\u041E ")
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
                                createVNode(_component_UiSelectValue, { placeholder: "\u0422\u0438\u043F \u043A\u043B\u0438\u0435\u043D\u0442\u0430" })
                              ]),
                              _: 1
                            }),
                            createVNode(_component_UiSelectContent, null, {
                              default: withCtx(() => [
                                createVNode(_component_UiSelectGroup, null, {
                                  default: withCtx(() => [
                                    createVNode(_component_UiSelectItem, { value: "\u0424\u0418\u0417" }, {
                                      default: withCtx(() => [
                                        createTextVNode(" \u0424\u0418\u0417 ")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_UiSelectItem, { value: "\u0418\u041F" }, {
                                      default: withCtx(() => [
                                        createTextVNode(" \u0418\u041F ")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_UiSelectItem, { value: "\u041E\u041E\u041E" }, {
                                      default: withCtx(() => [
                                        createTextVNode(" \u041E\u041E\u041E ")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_UiSelectItem, { value: "\u041D\u041A\u041E" }, {
                                      default: withCtx(() => [
                                        createTextVNode(" \u041D\u041A\u041E ")
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
                    _push3(`</div></div>`);
                  } else {
                    _push3(`<!---->`);
                  }
                  if (!unref(readOnly)) {
                    _push3(`<div class="relative"${_scopeId2}>`);
                    if (unref(clientData).gender) {
                      _push3(ssrRenderComponent(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1" }, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(`\u041F\u043E\u043B \u043A\u043B\u0438\u0435\u043D\u0442\u0430`);
                          } else {
                            return [
                              createTextVNode("\u041F\u043E\u043B \u043A\u043B\u0438\u0435\u043D\u0442\u0430")
                            ];
                          }
                        }),
                        _: 1
                      }, _parent3, _scopeId2));
                    } else {
                      _push3(`<!---->`);
                    }
                    _push3(`<div${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_UiSelect, {
                      modelValue: unref(clientData).gender,
                      "onUpdate:modelValue": ($event) => unref(clientData).gender = $event
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_UiSelectTrigger, null, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(_component_UiSelectValue, { placeholder: "\u041F\u043E\u043B \u043A\u043B\u0438\u0435\u043D\u0442\u0430" }, null, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(_component_UiSelectValue, { placeholder: "\u041F\u043E\u043B \u043A\u043B\u0438\u0435\u043D\u0442\u0430" })
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
                                      _push6(ssrRenderComponent(_component_UiSelectItem, { value: "M" }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(` \u041C\u0443\u0436\u0441\u043A\u043E\u0439 `);
                                          } else {
                                            return [
                                              createTextVNode(" \u041C\u0443\u0436\u0441\u043A\u043E\u0439 ")
                                            ];
                                          }
                                        }),
                                        _: 1
                                      }, _parent6, _scopeId5));
                                      _push6(ssrRenderComponent(_component_UiSelectItem, { value: "F" }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(` \u0416\u0435\u043D\u0441\u043A\u0438\u0439 `);
                                          } else {
                                            return [
                                              createTextVNode(" \u0416\u0435\u043D\u0441\u043A\u0438\u0439 ")
                                            ];
                                          }
                                        }),
                                        _: 1
                                      }, _parent6, _scopeId5));
                                      _push6(ssrRenderComponent(_component_UiSelectItem, { value: "IT" }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(` \u0425\u0417 `);
                                          } else {
                                            return [
                                              createTextVNode(" \u0425\u0417 ")
                                            ];
                                          }
                                        }),
                                        _: 1
                                      }, _parent6, _scopeId5));
                                    } else {
                                      return [
                                        createVNode(_component_UiSelectItem, { value: "M" }, {
                                          default: withCtx(() => [
                                            createTextVNode(" \u041C\u0443\u0436\u0441\u043A\u043E\u0439 ")
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(_component_UiSelectItem, { value: "F" }, {
                                          default: withCtx(() => [
                                            createTextVNode(" \u0416\u0435\u043D\u0441\u043A\u0438\u0439 ")
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(_component_UiSelectItem, { value: "IT" }, {
                                          default: withCtx(() => [
                                            createTextVNode(" \u0425\u0417 ")
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
                                      createVNode(_component_UiSelectItem, { value: "M" }, {
                                        default: withCtx(() => [
                                          createTextVNode(" \u041C\u0443\u0436\u0441\u043A\u043E\u0439 ")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_UiSelectItem, { value: "F" }, {
                                        default: withCtx(() => [
                                          createTextVNode(" \u0416\u0435\u043D\u0441\u043A\u0438\u0439 ")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_UiSelectItem, { value: "IT" }, {
                                        default: withCtx(() => [
                                          createTextVNode(" \u0425\u0417 ")
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
                                createVNode(_component_UiSelectValue, { placeholder: "\u041F\u043E\u043B \u043A\u043B\u0438\u0435\u043D\u0442\u0430" })
                              ]),
                              _: 1
                            }),
                            createVNode(_component_UiSelectContent, null, {
                              default: withCtx(() => [
                                createVNode(_component_UiSelectGroup, null, {
                                  default: withCtx(() => [
                                    createVNode(_component_UiSelectItem, { value: "M" }, {
                                      default: withCtx(() => [
                                        createTextVNode(" \u041C\u0443\u0436\u0441\u043A\u043E\u0439 ")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_UiSelectItem, { value: "F" }, {
                                      default: withCtx(() => [
                                        createTextVNode(" \u0416\u0435\u043D\u0441\u043A\u0438\u0439 ")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_UiSelectItem, { value: "IT" }, {
                                      default: withCtx(() => [
                                        createTextVNode(" \u0425\u0417 ")
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
                    _push3(`</div></div>`);
                  } else {
                    _push3(`<!---->`);
                  }
                  if (!unref(readOnly)) {
                    _push3(`<div class="flex items-center space-x-2"${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_UiSwitch, {
                      id: "reservation",
                      checked: unref(clientData).isRegular,
                      "onUpdate:checked": ($event) => unref(clientData).isRegular = $event
                    }, null, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_component_UiLabel, { for: "reservation" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`\u041F\u043E\u0441\u0442\u043E\u044F\u043D\u043D\u044B\u0439`);
                        } else {
                          return [
                            createTextVNode("\u041F\u043E\u0441\u0442\u043E\u044F\u043D\u043D\u044B\u0439")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(`</div>`);
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("div", { class: "flex flex-col gap-6" }, [
                      createVNode("div", { class: "relative" }, [
                        unref(clientData).chatLink ? (openBlock(), createBlock(_component_UiLabel, {
                          key: 0,
                          class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap"
                        }, {
                          default: withCtx(() => [
                            createTextVNode("\u0421\u0441\u044B\u043B\u043A\u0430 \u043D\u0430 \u0447\u0430\u0442")
                          ]),
                          _: 1
                        })) : createCommentVNode("", true),
                        createVNode(_component_UiInput, {
                          modelValue: unref(clientData).chatLink,
                          "onUpdate:modelValue": ($event) => unref(clientData).chatLink = $event,
                          placeholder: "\u0421\u0441\u044B\u043B\u043A\u0430 \u043D\u0430 \u0447\u0430\u0442",
                          class: unref(clientData).chatLink ? "" : "outline-1 outline-rose-300 rounded-md",
                          onInput: async (e) => await getClient(e.target.value.trim())
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "class", "onInput"])
                      ]),
                      createVNode("div", { class: "relative group" }, [
                        unref(clientData).fullName ? (openBlock(), createBlock(_component_UiLabel, {
                          key: 0,
                          class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap"
                        }, {
                          default: withCtx(() => [
                            createTextVNode("\u0424\u0418\u041E")
                          ]),
                          _: 1
                        })) : createCommentVNode("", true),
                        createVNode(_component_UiInput, {
                          modelValue: unref(clientData).fullName,
                          "onUpdate:modelValue": ($event) => unref(clientData).fullName = $event,
                          placeholder: "\u0424\u0418\u041E",
                          class: unref(clientData).fullName || unref(readOnly) ? "" : "outline-1 outline-rose-300",
                          disabled: unref(readOnly)
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "class", "disabled"])
                      ]),
                      createVNode("div", { class: "relative" }, [
                        unref(clientData).phone ? (openBlock(), createBlock(_component_UiLabel, {
                          key: 0,
                          class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap"
                        }, {
                          default: withCtx(() => [
                            createTextVNode("\u0422\u0435\u043B\u0435\u0444\u043E\u043D")
                          ]),
                          _: 1
                        })) : createCommentVNode("", true),
                        createVNode(_component_UiInput, {
                          modelValue: unref(clientData).phone,
                          "onUpdate:modelValue": ($event) => unref(clientData).phone = $event,
                          placeholder: "\u0422\u0435\u043B\u0435\u0444\u043E\u043D",
                          class: unref(clientData).phone || unref(readOnly) ? "" : "outline-1 outline-rose-300",
                          disabled: unref(readOnly)
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "class", "disabled"])
                      ]),
                      !unref(readOnly) ? (openBlock(), createBlock("div", {
                        key: 0,
                        class: "relative"
                      }, [
                        createVNode(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1" }, {
                          default: withCtx(() => [
                            createTextVNode("\u0414\u0430\u0442\u0430 \u043F\u0435\u0440\u0432\u043E\u0433\u043E \u043A\u043E\u043D\u0442\u0430\u043A\u0442\u0430")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_UiInput, {
                          modelValue: unref(clientData).firstContact,
                          "onUpdate:modelValue": ($event) => unref(clientData).firstContact = $event,
                          type: "date",
                          class: unref(clientData).firstContact || unref(readOnly) ? "" : "outline-1 outline-rose-300"
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "class"])
                      ])) : createCommentVNode("", true),
                      createVNode("div", { class: "relative" }, [
                        unref(clientData).adLink ? (openBlock(), createBlock(_component_UiLabel, {
                          key: 0,
                          class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap"
                        }, {
                          default: withCtx(() => [
                            createTextVNode("\u0421\u0441\u044B\u043B\u043A\u0430 \u043D\u0430 \u043E\u0431\u044A\u044F\u0432\u043B\u0435\u043D\u0438\u0435")
                          ]),
                          _: 1
                        })) : createCommentVNode("", true),
                        createVNode(_component_UiInput, {
                          modelValue: unref(clientData).adLink,
                          "onUpdate:modelValue": ($event) => unref(clientData).adLink = $event,
                          placeholder: "\u0421\u0441\u044B\u043B\u043A\u0430 \u043D\u0430 \u043E\u0431\u044A\u044F\u0432\u043B\u0435\u043D\u0438\u0435",
                          class: "col-span-3",
                          disabled: unref(readOnly)
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled"])
                      ]),
                      !unref(readOnly) ? (openBlock(), createBlock("div", {
                        key: 1,
                        class: "relative"
                      }, [
                        unref(clientData).type ? (openBlock(), createBlock(_component_UiLabel, {
                          key: 0,
                          class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1"
                        }, {
                          default: withCtx(() => [
                            createTextVNode("\u0422\u0438\u043F \u043A\u043B\u0438\u0435\u043D\u0442\u0430")
                          ]),
                          _: 1
                        })) : createCommentVNode("", true),
                        createVNode("div", null, [
                          createVNode(_component_UiSelect, {
                            modelValue: unref(clientData).type,
                            "onUpdate:modelValue": ($event) => unref(clientData).type = $event
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_UiSelectTrigger, null, {
                                default: withCtx(() => [
                                  createVNode(_component_UiSelectValue, { placeholder: "\u0422\u0438\u043F \u043A\u043B\u0438\u0435\u043D\u0442\u0430" })
                                ]),
                                _: 1
                              }),
                              createVNode(_component_UiSelectContent, null, {
                                default: withCtx(() => [
                                  createVNode(_component_UiSelectGroup, null, {
                                    default: withCtx(() => [
                                      createVNode(_component_UiSelectItem, { value: "\u0424\u0418\u0417" }, {
                                        default: withCtx(() => [
                                          createTextVNode(" \u0424\u0418\u0417 ")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_UiSelectItem, { value: "\u0418\u041F" }, {
                                        default: withCtx(() => [
                                          createTextVNode(" \u0418\u041F ")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_UiSelectItem, { value: "\u041E\u041E\u041E" }, {
                                        default: withCtx(() => [
                                          createTextVNode(" \u041E\u041E\u041E ")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_UiSelectItem, { value: "\u041D\u041A\u041E" }, {
                                        default: withCtx(() => [
                                          createTextVNode(" \u041D\u041A\u041E ")
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
                        ])
                      ])) : createCommentVNode("", true),
                      !unref(readOnly) ? (openBlock(), createBlock("div", {
                        key: 2,
                        class: "relative"
                      }, [
                        unref(clientData).gender ? (openBlock(), createBlock(_component_UiLabel, {
                          key: 0,
                          class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1"
                        }, {
                          default: withCtx(() => [
                            createTextVNode("\u041F\u043E\u043B \u043A\u043B\u0438\u0435\u043D\u0442\u0430")
                          ]),
                          _: 1
                        })) : createCommentVNode("", true),
                        createVNode("div", null, [
                          createVNode(_component_UiSelect, {
                            modelValue: unref(clientData).gender,
                            "onUpdate:modelValue": ($event) => unref(clientData).gender = $event
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_UiSelectTrigger, null, {
                                default: withCtx(() => [
                                  createVNode(_component_UiSelectValue, { placeholder: "\u041F\u043E\u043B \u043A\u043B\u0438\u0435\u043D\u0442\u0430" })
                                ]),
                                _: 1
                              }),
                              createVNode(_component_UiSelectContent, null, {
                                default: withCtx(() => [
                                  createVNode(_component_UiSelectGroup, null, {
                                    default: withCtx(() => [
                                      createVNode(_component_UiSelectItem, { value: "M" }, {
                                        default: withCtx(() => [
                                          createTextVNode(" \u041C\u0443\u0436\u0441\u043A\u043E\u0439 ")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_UiSelectItem, { value: "F" }, {
                                        default: withCtx(() => [
                                          createTextVNode(" \u0416\u0435\u043D\u0441\u043A\u0438\u0439 ")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_UiSelectItem, { value: "IT" }, {
                                        default: withCtx(() => [
                                          createTextVNode(" \u0425\u0417 ")
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
                        ])
                      ])) : createCommentVNode("", true),
                      !unref(readOnly) ? (openBlock(), createBlock("div", {
                        key: 3,
                        class: "flex items-center space-x-2"
                      }, [
                        createVNode(_component_UiSwitch, {
                          id: "reservation",
                          checked: unref(clientData).isRegular,
                          "onUpdate:checked": ($event) => unref(clientData).isRegular = $event
                        }, null, 8, ["checked", "onUpdate:checked"]),
                        createVNode(_component_UiLabel, { for: "reservation" }, {
                          default: withCtx(() => [
                            createTextVNode("\u041F\u043E\u0441\u0442\u043E\u044F\u043D\u043D\u044B\u0439")
                          ]),
                          _: 1
                        })
                      ])) : createCommentVNode("", true)
                    ])
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
                      createTextVNode("\u041A\u043B\u0438\u0435\u043D\u0442")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_UiCardDescription)
                ]),
                _: 1
              }),
              createVNode(_component_UiCardContent, null, {
                default: withCtx(() => [
                  createVNode("div", { class: "flex flex-col gap-6" }, [
                    createVNode("div", { class: "relative" }, [
                      unref(clientData).chatLink ? (openBlock(), createBlock(_component_UiLabel, {
                        key: 0,
                        class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap"
                      }, {
                        default: withCtx(() => [
                          createTextVNode("\u0421\u0441\u044B\u043B\u043A\u0430 \u043D\u0430 \u0447\u0430\u0442")
                        ]),
                        _: 1
                      })) : createCommentVNode("", true),
                      createVNode(_component_UiInput, {
                        modelValue: unref(clientData).chatLink,
                        "onUpdate:modelValue": ($event) => unref(clientData).chatLink = $event,
                        placeholder: "\u0421\u0441\u044B\u043B\u043A\u0430 \u043D\u0430 \u0447\u0430\u0442",
                        class: unref(clientData).chatLink ? "" : "outline-1 outline-rose-300 rounded-md",
                        onInput: async (e) => await getClient(e.target.value.trim())
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "class", "onInput"])
                    ]),
                    createVNode("div", { class: "relative group" }, [
                      unref(clientData).fullName ? (openBlock(), createBlock(_component_UiLabel, {
                        key: 0,
                        class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap"
                      }, {
                        default: withCtx(() => [
                          createTextVNode("\u0424\u0418\u041E")
                        ]),
                        _: 1
                      })) : createCommentVNode("", true),
                      createVNode(_component_UiInput, {
                        modelValue: unref(clientData).fullName,
                        "onUpdate:modelValue": ($event) => unref(clientData).fullName = $event,
                        placeholder: "\u0424\u0418\u041E",
                        class: unref(clientData).fullName || unref(readOnly) ? "" : "outline-1 outline-rose-300",
                        disabled: unref(readOnly)
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "class", "disabled"])
                    ]),
                    createVNode("div", { class: "relative" }, [
                      unref(clientData).phone ? (openBlock(), createBlock(_component_UiLabel, {
                        key: 0,
                        class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap"
                      }, {
                        default: withCtx(() => [
                          createTextVNode("\u0422\u0435\u043B\u0435\u0444\u043E\u043D")
                        ]),
                        _: 1
                      })) : createCommentVNode("", true),
                      createVNode(_component_UiInput, {
                        modelValue: unref(clientData).phone,
                        "onUpdate:modelValue": ($event) => unref(clientData).phone = $event,
                        placeholder: "\u0422\u0435\u043B\u0435\u0444\u043E\u043D",
                        class: unref(clientData).phone || unref(readOnly) ? "" : "outline-1 outline-rose-300",
                        disabled: unref(readOnly)
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "class", "disabled"])
                    ]),
                    !unref(readOnly) ? (openBlock(), createBlock("div", {
                      key: 0,
                      class: "relative"
                    }, [
                      createVNode(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1" }, {
                        default: withCtx(() => [
                          createTextVNode("\u0414\u0430\u0442\u0430 \u043F\u0435\u0440\u0432\u043E\u0433\u043E \u043A\u043E\u043D\u0442\u0430\u043A\u0442\u0430")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_UiInput, {
                        modelValue: unref(clientData).firstContact,
                        "onUpdate:modelValue": ($event) => unref(clientData).firstContact = $event,
                        type: "date",
                        class: unref(clientData).firstContact || unref(readOnly) ? "" : "outline-1 outline-rose-300"
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "class"])
                    ])) : createCommentVNode("", true),
                    createVNode("div", { class: "relative" }, [
                      unref(clientData).adLink ? (openBlock(), createBlock(_component_UiLabel, {
                        key: 0,
                        class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap"
                      }, {
                        default: withCtx(() => [
                          createTextVNode("\u0421\u0441\u044B\u043B\u043A\u0430 \u043D\u0430 \u043E\u0431\u044A\u044F\u0432\u043B\u0435\u043D\u0438\u0435")
                        ]),
                        _: 1
                      })) : createCommentVNode("", true),
                      createVNode(_component_UiInput, {
                        modelValue: unref(clientData).adLink,
                        "onUpdate:modelValue": ($event) => unref(clientData).adLink = $event,
                        placeholder: "\u0421\u0441\u044B\u043B\u043A\u0430 \u043D\u0430 \u043E\u0431\u044A\u044F\u0432\u043B\u0435\u043D\u0438\u0435",
                        class: "col-span-3",
                        disabled: unref(readOnly)
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled"])
                    ]),
                    !unref(readOnly) ? (openBlock(), createBlock("div", {
                      key: 1,
                      class: "relative"
                    }, [
                      unref(clientData).type ? (openBlock(), createBlock(_component_UiLabel, {
                        key: 0,
                        class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1"
                      }, {
                        default: withCtx(() => [
                          createTextVNode("\u0422\u0438\u043F \u043A\u043B\u0438\u0435\u043D\u0442\u0430")
                        ]),
                        _: 1
                      })) : createCommentVNode("", true),
                      createVNode("div", null, [
                        createVNode(_component_UiSelect, {
                          modelValue: unref(clientData).type,
                          "onUpdate:modelValue": ($event) => unref(clientData).type = $event
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_UiSelectTrigger, null, {
                              default: withCtx(() => [
                                createVNode(_component_UiSelectValue, { placeholder: "\u0422\u0438\u043F \u043A\u043B\u0438\u0435\u043D\u0442\u0430" })
                              ]),
                              _: 1
                            }),
                            createVNode(_component_UiSelectContent, null, {
                              default: withCtx(() => [
                                createVNode(_component_UiSelectGroup, null, {
                                  default: withCtx(() => [
                                    createVNode(_component_UiSelectItem, { value: "\u0424\u0418\u0417" }, {
                                      default: withCtx(() => [
                                        createTextVNode(" \u0424\u0418\u0417 ")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_UiSelectItem, { value: "\u0418\u041F" }, {
                                      default: withCtx(() => [
                                        createTextVNode(" \u0418\u041F ")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_UiSelectItem, { value: "\u041E\u041E\u041E" }, {
                                      default: withCtx(() => [
                                        createTextVNode(" \u041E\u041E\u041E ")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_UiSelectItem, { value: "\u041D\u041A\u041E" }, {
                                      default: withCtx(() => [
                                        createTextVNode(" \u041D\u041A\u041E ")
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
                      ])
                    ])) : createCommentVNode("", true),
                    !unref(readOnly) ? (openBlock(), createBlock("div", {
                      key: 2,
                      class: "relative"
                    }, [
                      unref(clientData).gender ? (openBlock(), createBlock(_component_UiLabel, {
                        key: 0,
                        class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1"
                      }, {
                        default: withCtx(() => [
                          createTextVNode("\u041F\u043E\u043B \u043A\u043B\u0438\u0435\u043D\u0442\u0430")
                        ]),
                        _: 1
                      })) : createCommentVNode("", true),
                      createVNode("div", null, [
                        createVNode(_component_UiSelect, {
                          modelValue: unref(clientData).gender,
                          "onUpdate:modelValue": ($event) => unref(clientData).gender = $event
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_UiSelectTrigger, null, {
                              default: withCtx(() => [
                                createVNode(_component_UiSelectValue, { placeholder: "\u041F\u043E\u043B \u043A\u043B\u0438\u0435\u043D\u0442\u0430" })
                              ]),
                              _: 1
                            }),
                            createVNode(_component_UiSelectContent, null, {
                              default: withCtx(() => [
                                createVNode(_component_UiSelectGroup, null, {
                                  default: withCtx(() => [
                                    createVNode(_component_UiSelectItem, { value: "M" }, {
                                      default: withCtx(() => [
                                        createTextVNode(" \u041C\u0443\u0436\u0441\u043A\u043E\u0439 ")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_UiSelectItem, { value: "F" }, {
                                      default: withCtx(() => [
                                        createTextVNode(" \u0416\u0435\u043D\u0441\u043A\u0438\u0439 ")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_UiSelectItem, { value: "IT" }, {
                                      default: withCtx(() => [
                                        createTextVNode(" \u0425\u0417 ")
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
                      ])
                    ])) : createCommentVNode("", true),
                    !unref(readOnly) ? (openBlock(), createBlock("div", {
                      key: 3,
                      class: "flex items-center space-x-2"
                    }, [
                      createVNode(_component_UiSwitch, {
                        id: "reservation",
                        checked: unref(clientData).isRegular,
                        "onUpdate:checked": ($event) => unref(clientData).isRegular = $event
                      }, null, 8, ["checked", "onUpdate:checked"]),
                      createVNode(_component_UiLabel, { for: "reservation" }, {
                        default: withCtx(() => [
                          createTextVNode("\u041F\u043E\u0441\u0442\u043E\u044F\u043D\u043D\u044B\u0439")
                        ]),
                        _: 1
                      })
                    ])) : createCommentVNode("", true)
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
const _sfc_setup$i = _sfc_main$i.setup;
_sfc_main$i.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/my/clients/CreateClientCard.vue");
  return _sfc_setup$i ? _sfc_setup$i(props, ctx) : void 0;
};
const _sfc_main$h = /* @__PURE__ */ defineComponent({
  __name: "CreateDealCard",
  __ssrInlineRender: true,
  props: {
    dealSubDatas: {},
    clientData: {},
    curGroupId: {}
  },
  emits: ["update:dealBlank"],
  setup(__props, { emit: __emit }) {
    const categories = [
      "\u041F\u0440\u0435\u0434\u043B\u043E\u0436\u0435\u043D\u0438\u044F \u0443\u0441\u043B\u0443\u0433",
      "\u041E\u0431\u043E\u0440\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u0435 \u0434\u043B\u044F \u0431\u0438\u0437\u043D\u0435\u0441\u0430",
      "\u041C\u0435\u0431\u0435\u043B\u044C \u0438 \u0438\u043D\u0442\u0435\u0440\u044C\u0435\u0440"
    ];
    const maketTypes = [
      "\u0414\u0438\u0437\u0430\u0439\u043D\u0435\u0440\u0441\u043A\u0438\u0439",
      "\u0417\u0430\u0433\u043E\u0442\u043E\u0432\u043A\u0430 \u0438\u0437 \u0431\u0430\u0437\u044B",
      "\u0420\u0435\u043A\u043B\u0430\u043C\u043D\u044B\u0439",
      "\u0412\u0438\u0437\u0443\u0430\u043B\u0438\u0437\u0430\u0442\u043E\u0440",
      "\u0418\u0437 \u0440\u0430\u0441\u0441\u044B\u043B\u043A\u0438"
    ];
    const disconts = ["\u0411\u0435\u0437 \u0441\u043A\u0438\u0434\u043A\u0438", "\u0416\u0435\u043B\u0442\u0430\u044F", "\u041E\u041F\u0422", "\u0420\u0430\u0441\u0441\u044B\u043B\u043A\u0430", "\u041A\u0440\u0430\u0441\u043D\u0430\u044F"];
    const courseTypes = [
      "\u0421\u0442\u0430\u0440\u0442",
      "\u0421\u0442\u0430\u0440\u0442 + \u041F\u0440\u043E\u0444\u0438\u043B\u044C\u043D\u044B\u0439",
      "\u0414\u043E\u043F. \u041F\u0440\u043E\u0444\u0438\u043B\u044C\u043D\u044B\u0439",
      "\u0427\u0430\u0441\u0442\u043D\u044B\u0439"
    ];
    const newDealBlank = {
      saleDate: "",
      card_id: "",
      title: "",
      price: 0,
      clothingMethod: "",
      source: "",
      adTag: "\u041D\u0435\u0442 \u0442\u0435\u0433\u0430",
      discont: "",
      maketType: "",
      maketPresentation: "",
      city: "",
      region: "",
      category: "",
      reservation: false,
      courseType: "",
      discontAmount: 0
    };
    const props = __props;
    const dealData = ref({ ...newDealBlank });
    const emit = __emit;
    watch(
      dealData,
      (newValue) => {
        emit("update:dealBlank", newValue);
      },
      { deep: true }
    );
    watch(() => props.curGroupId, (newVal, oldVal) => {
      console.log("curGroup \u0438\u0437\u043C\u0435\u043D\u0438\u043B\u0441\u044F:", newVal);
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UiCard = _sfc_main$3$1;
      const _component_UiCardHeader = _sfc_main$2$1;
      const _component_UiCardTitle = _sfc_main$1$1;
      const _component_UiSwitch = _sfc_main$A;
      const _component_UiLabel = _sfc_main$z;
      const _component_UiCardDescription = _sfc_main$k;
      const _component_UiCardContent = _sfc_main$1$6;
      const _component_UiInput = _sfc_main$m;
      const _component_UiSelect = _sfc_main$7$1;
      const _component_UiSelectTrigger = _sfc_main$5$2;
      const _component_UiSelectValue = _sfc_main$6$1;
      const _component_UiSelectContent = _sfc_main$4$3;
      const _component_UiSelectGroup = _sfc_main$3$4;
      const _component_UiSelectItem = _sfc_main$2$5;
      const _component_MyCombobox = _sfc_main$B;
      _push(ssrRenderComponent(_component_UiCard, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UiCardHeader, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UiCardTitle, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="flex items-center justify-between"${_scopeId3}> \u0421\u0434\u0435\u043B\u043A\u0430 <div class="relative flex items-center space-x-2"${_scopeId3}>`);
                        _push4(ssrRenderComponent(_component_UiSwitch, {
                          id: "reservation",
                          checked: unref(dealData).reservation,
                          "onUpdate:checked": ($event) => unref(dealData).reservation = $event
                        }, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_UiLabel, { for: "reservation" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`\u0411\u0440\u043E\u043D\u044C`);
                            } else {
                              return [
                                createTextVNode("\u0411\u0440\u043E\u043D\u044C")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(`</div></div>`);
                      } else {
                        return [
                          createVNode("div", { class: "flex items-center justify-between" }, [
                            createTextVNode(" \u0421\u0434\u0435\u043B\u043A\u0430 "),
                            createVNode("div", { class: "relative flex items-center space-x-2" }, [
                              createVNode(_component_UiSwitch, {
                                id: "reservation",
                                checked: unref(dealData).reservation,
                                "onUpdate:checked": ($event) => unref(dealData).reservation = $event
                              }, null, 8, ["checked", "onUpdate:checked"]),
                              createVNode(_component_UiLabel, { for: "reservation" }, {
                                default: withCtx(() => [
                                  createTextVNode("\u0411\u0440\u043E\u043D\u044C")
                                ]),
                                _: 1
                              })
                            ])
                          ])
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
                        createVNode("div", { class: "flex items-center justify-between" }, [
                          createTextVNode(" \u0421\u0434\u0435\u043B\u043A\u0430 "),
                          createVNode("div", { class: "relative flex items-center space-x-2" }, [
                            createVNode(_component_UiSwitch, {
                              id: "reservation",
                              checked: unref(dealData).reservation,
                              "onUpdate:checked": ($event) => unref(dealData).reservation = $event
                            }, null, 8, ["checked", "onUpdate:checked"]),
                            createVNode(_component_UiLabel, { for: "reservation" }, {
                              default: withCtx(() => [
                                createTextVNode("\u0411\u0440\u043E\u043D\u044C")
                              ]),
                              _: 1
                            })
                          ])
                        ])
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
                  _push3(`<div class="flex w-full gap-4"${_scopeId2}><div class="flex flex-col gap-6 w-full"${_scopeId2}><div class="relative"${_scopeId2}>`);
                  if (unref(dealData).title) {
                    _push3(ssrRenderComponent(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435`);
                        } else {
                          return [
                            createTextVNode("\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(ssrRenderComponent(_component_UiInput, {
                    modelValue: unref(dealData).title,
                    "onUpdate:modelValue": ($event) => unref(dealData).title = $event,
                    placeholder: "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435",
                    class: unref(dealData).title ? "" : "outline-1 outline-rose-300"
                  }, null, _parent3, _scopeId2));
                  _push3(`</div><div class="relative"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`\u0414\u0430\u0442\u0430 \u043F\u0440\u043E\u0434\u0430\u0436\u0438`);
                      } else {
                        return [
                          createTextVNode("\u0414\u0430\u0442\u0430 \u043F\u0440\u043E\u0434\u0430\u0436\u0438")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_UiInput, {
                    modelValue: unref(dealData).saleDate,
                    "onUpdate:modelValue": ($event) => unref(dealData).saleDate = $event,
                    type: "date",
                    placeholder: "dsad",
                    class: unref(dealData).saleDate ? "" : "outline-1 outline-rose-300"
                  }, null, _parent3, _scopeId2));
                  _push3(`</div><div class="relative"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`\u0421\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C`);
                      } else {
                        return [
                          createTextVNode("\u0421\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_UiInput, {
                    modelValue: unref(dealData).price,
                    "onUpdate:modelValue": ($event) => unref(dealData).price = $event,
                    type: "number",
                    placeholder: "\u0421\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C",
                    class: unref(dealData).price ? "" : "outline-1 outline-rose-300"
                  }, null, _parent3, _scopeId2));
                  _push3(`</div>`);
                  if (_ctx.curGroupId === 16) {
                    _push3(`<div class="relative"${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`\u0421\u043A\u0438\u0434\u043A\u0430`);
                        } else {
                          return [
                            createTextVNode("\u0421\u043A\u0438\u0434\u043A\u0430")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_component_UiInput, {
                      modelValue: unref(dealData).discontAmount,
                      "onUpdate:modelValue": ($event) => unref(dealData).discontAmount = $event,
                      type: "number",
                      placeholder: "\u0421\u043A\u0438\u0434\u043A\u0430"
                    }, null, _parent3, _scopeId2));
                    _push3(`</div>`);
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(`<div class="relative"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`\u0414\u0430\u0442\u0430 \u043F\u0440\u0435\u0437\u0435\u043D\u0442\u0430\u0446\u0438\u0438 \u043C\u0430\u043A\u0435\u0442\u0430`);
                      } else {
                        return [
                          createTextVNode("\u0414\u0430\u0442\u0430 \u043F\u0440\u0435\u0437\u0435\u043D\u0442\u0430\u0446\u0438\u0438 \u043C\u0430\u043A\u0435\u0442\u0430")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_UiInput, {
                    modelValue: unref(dealData).maketPresentation,
                    "onUpdate:modelValue": ($event) => unref(dealData).maketPresentation = $event,
                    type: "date",
                    placeholder: "dsad",
                    class: unref(dealData).maketPresentation ? "" : "outline-1 outline-rose-300"
                  }, null, _parent3, _scopeId2));
                  _push3(`</div>`);
                  if (_ctx.curGroupId !== 16) {
                    _push3(`<div class="relative"${_scopeId2}>`);
                    if (unref(dealData).maketType) {
                      _push3(ssrRenderComponent(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1" }, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(`\u0422\u0438\u043F \u043C\u0430\u043A\u0435\u0442\u0430`);
                          } else {
                            return [
                              createTextVNode("\u0422\u0438\u043F \u043C\u0430\u043A\u0435\u0442\u0430")
                            ];
                          }
                        }),
                        _: 1
                      }, _parent3, _scopeId2));
                    } else {
                      _push3(`<!---->`);
                    }
                    _push3(`<div class="${ssrRenderClass(
                      unref(dealData).maketType ? "" : "outline-1 outline-rose-300 rounded-md"
                    )}"${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_UiSelect, {
                      modelValue: unref(dealData).maketType,
                      "onUpdate:modelValue": ($event) => unref(dealData).maketType = $event
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_UiSelectTrigger, null, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(_component_UiSelectValue, { placeholder: "\u0422\u0438\u043F \u043C\u0430\u043A\u0435\u0442\u0430" }, null, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(_component_UiSelectValue, { placeholder: "\u0422\u0438\u043F \u043C\u0430\u043A\u0435\u0442\u0430" })
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(_component_UiSelectContent, null, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`<!--[-->`);
                                ssrRenderList(maketTypes, (item, i) => {
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
                                  (openBlock(), createBlock(Fragment, null, renderList(maketTypes, (item, i) => {
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
                                createVNode(_component_UiSelectValue, { placeholder: "\u0422\u0438\u043F \u043C\u0430\u043A\u0435\u0442\u0430" })
                              ]),
                              _: 1
                            }),
                            createVNode(_component_UiSelectContent, null, {
                              default: withCtx(() => [
                                (openBlock(), createBlock(Fragment, null, renderList(maketTypes, (item, i) => {
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
                    _push3(`</div></div>`);
                  } else {
                    _push3(`<!---->`);
                  }
                  if (_ctx.curGroupId === 16) {
                    _push3(`<div class="relative"${_scopeId2}>`);
                    if (unref(dealData).courseType) {
                      _push3(ssrRenderComponent(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1" }, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(`\u0422\u0438\u043F \u043A\u0443\u0440\u0441\u0430`);
                          } else {
                            return [
                              createTextVNode("\u0422\u0438\u043F \u043A\u0443\u0440\u0441\u0430")
                            ];
                          }
                        }),
                        _: 1
                      }, _parent3, _scopeId2));
                    } else {
                      _push3(`<!---->`);
                    }
                    _push3(`<div class="${ssrRenderClass(
                      unref(dealData).courseType ? "" : "outline-1 outline-rose-300 rounded-md"
                    )}"${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_UiSelect, {
                      modelValue: unref(dealData).courseType,
                      "onUpdate:modelValue": ($event) => unref(dealData).courseType = $event
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_UiSelectTrigger, null, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(_component_UiSelectValue, { placeholder: "\u0422\u0438\u043F \u043A\u0443\u0440\u0441\u0430" }, null, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(_component_UiSelectValue, { placeholder: "\u0422\u0438\u043F \u043A\u0443\u0440\u0441\u0430" })
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(_component_UiSelectContent, null, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`<!--[-->`);
                                ssrRenderList(courseTypes, (item, i) => {
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
                                  (openBlock(), createBlock(Fragment, null, renderList(courseTypes, (item, i) => {
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
                                createVNode(_component_UiSelectValue, { placeholder: "\u0422\u0438\u043F \u043A\u0443\u0440\u0441\u0430" })
                              ]),
                              _: 1
                            }),
                            createVNode(_component_UiSelectContent, null, {
                              default: withCtx(() => [
                                (openBlock(), createBlock(Fragment, null, renderList(courseTypes, (item, i) => {
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
                    _push3(`</div></div>`);
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(`<div class="relative"${_scopeId2}>`);
                  if (unref(dealData).card_id) {
                    _push3(ssrRenderComponent(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`id \u043A\u0430\u0440\u0442\u043E\u0447\u043A\u0438`);
                        } else {
                          return [
                            createTextVNode("id \u043A\u0430\u0440\u0442\u043E\u0447\u043A\u0438")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(ssrRenderComponent(_component_UiInput, {
                    modelValue: unref(dealData).card_id,
                    "onUpdate:modelValue": ($event) => unref(dealData).card_id = $event,
                    placeholder: "id \u043A\u0430\u0440\u0442\u043E\u0447\u043A\u0438 \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0441\u0442\u0432\u0430",
                    class: unref(dealData).card_id ? "" : "outline-1 outline-rose-300"
                  }, null, _parent3, _scopeId2));
                  _push3(`</div>`);
                  if (_ctx.curGroupId !== 16) {
                    _push3(`<div class="relative"${_scopeId2}>`);
                    if (unref(dealData).discont) {
                      _push3(ssrRenderComponent(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1" }, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(`\u0421\u043A\u0438\u0434\u043A\u0430`);
                          } else {
                            return [
                              createTextVNode("\u0421\u043A\u0438\u0434\u043A\u0430")
                            ];
                          }
                        }),
                        _: 1
                      }, _parent3, _scopeId2));
                    } else {
                      _push3(`<!---->`);
                    }
                    _push3(`<div class="${ssrRenderClass(
                      unref(dealData).discont ? "" : "outline-1 outline-rose-300 rounded-md "
                    )}"${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_UiSelect, {
                      modelValue: unref(dealData).discont,
                      "onUpdate:modelValue": ($event) => unref(dealData).discont = $event
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_UiSelectTrigger, null, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(_component_UiSelectValue, { placeholder: "\u0421\u043A\u0438\u0434\u043A\u0430" }, null, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(_component_UiSelectValue, { placeholder: "\u0421\u043A\u0438\u0434\u043A\u0430" })
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(_component_UiSelectContent, null, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`<!--[-->`);
                                ssrRenderList(disconts, (item, i) => {
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
                                  (openBlock(), createBlock(Fragment, null, renderList(disconts, (item, i) => {
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
                                createVNode(_component_UiSelectValue, { placeholder: "\u0421\u043A\u0438\u0434\u043A\u0430" })
                              ]),
                              _: 1
                            }),
                            createVNode(_component_UiSelectContent, null, {
                              default: withCtx(() => [
                                (openBlock(), createBlock(Fragment, null, renderList(disconts, (item, i) => {
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
                    _push3(`</div></div>`);
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(`</div><div class="flex flex-col gap-6 w-full"${_scopeId2}><div class="relative"${_scopeId2}>`);
                  if (unref(dealData).clothingMethod) {
                    _push3(ssrRenderComponent(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`\u0421\u043F\u043E\u0441\u043E\u0431 \u0437\u0430\u043A\u0440\u044B\u0442\u0438\u044F`);
                        } else {
                          return [
                            createTextVNode("\u0421\u043F\u043E\u0441\u043E\u0431 \u0437\u0430\u043A\u0440\u044B\u0442\u0438\u044F")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(ssrRenderComponent(_component_MyCombobox, {
                    items: _ctx.dealSubDatas.methods,
                    label: "\u0421\u043F\u043E\u0441\u043E\u0431 \u0437\u0430\u043A\u0440\u044B\u0442\u0438\u044F",
                    class: unref(dealData).clothingMethod ? "" : "outline-1 outline-rose-300 rounded-md",
                    onSelectedItem: (value) => unref(dealData).clothingMethod = value
                  }, null, _parent3, _scopeId2));
                  _push3(`</div><div class="relative"${_scopeId2}>`);
                  if (unref(dealData).source) {
                    _push3(ssrRenderComponent(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`\u0418\u0441\u0442\u043E\u0447\u043D\u0438\u043A \u0441\u0434\u0435\u043B\u043A\u0438`);
                        } else {
                          return [
                            createTextVNode("\u0418\u0441\u0442\u043E\u0447\u043D\u0438\u043A \u0441\u0434\u0435\u043B\u043A\u0438")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(ssrRenderComponent(_component_MyCombobox, {
                    items: _ctx.dealSubDatas.sources,
                    label: "\u0418\u0441\u0442\u043E\u0447\u043D\u0438\u043A \u0441\u0434\u0435\u043B\u043A\u0438",
                    class: unref(dealData).source ? "" : "outline-1 outline-rose-300 rounded-md",
                    onSelectedItem: (value) => unref(dealData).source = value
                  }, null, _parent3, _scopeId2));
                  _push3(`</div><div class="relative"${_scopeId2}>`);
                  if (unref(dealData).adTag) {
                    _push3(ssrRenderComponent(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`\u0422\u042D\u0413`);
                        } else {
                          return [
                            createTextVNode("\u0422\u042D\u0413")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(ssrRenderComponent(_component_MyCombobox, {
                    items: _ctx.dealSubDatas.adTags,
                    label: "\u041D\u0435\u0442 \u0442\u0435\u0433\u0430",
                    class: unref(dealData).adTag ? "" : "outline-1 outline-rose-300 rounded-md",
                    onSelectedItem: (value) => unref(dealData).adTag = value
                  }, null, _parent3, _scopeId2));
                  _push3(`</div><div class="relative"${_scopeId2}>`);
                  if (unref(dealData).city) {
                    _push3(ssrRenderComponent(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`\u0413\u043E\u0440\u043E\u0434`);
                        } else {
                          return [
                            createTextVNode("\u0413\u043E\u0440\u043E\u0434")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(ssrRenderComponent(_component_UiInput, {
                    modelValue: unref(dealData).city,
                    "onUpdate:modelValue": ($event) => unref(dealData).city = $event,
                    placeholder: "\u0413\u043E\u0440\u043E\u0434"
                  }, null, _parent3, _scopeId2));
                  _push3(`</div><div class="relative"${_scopeId2}>`);
                  if (unref(dealData).region) {
                    _push3(ssrRenderComponent(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`\u0420\u0435\u0433\u0438\u043E\u043D/\u043E\u0431\u043B\u0430\u0441\u0442\u044C`);
                        } else {
                          return [
                            createTextVNode("\u0420\u0435\u0433\u0438\u043E\u043D/\u043E\u0431\u043B\u0430\u0441\u0442\u044C")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(ssrRenderComponent(_component_UiInput, {
                    modelValue: unref(dealData).region,
                    "onUpdate:modelValue": ($event) => unref(dealData).region = $event,
                    placeholder: "\u0420\u0435\u0433\u0438\u043E\u043D/\u043E\u0431\u043B\u0430\u0441\u0442\u044C"
                  }, null, _parent3, _scopeId2));
                  _push3(`</div>`);
                  if (_ctx.clientData.chatLink.includes("easyneon.amocrm.ru")) {
                    _push3(`<div class="relative"${_scopeId2}>`);
                    if (unref(dealData).category) {
                      _push3(ssrRenderComponent(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1" }, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(`\u041A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u044F`);
                          } else {
                            return [
                              createTextVNode("\u041A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u044F")
                            ];
                          }
                        }),
                        _: 1
                      }, _parent3, _scopeId2));
                    } else {
                      _push3(`<!---->`);
                    }
                    _push3(`<div${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_UiSelect, {
                      modelValue: unref(dealData).category,
                      "onUpdate:modelValue": ($event) => unref(dealData).category = $event
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_UiSelectTrigger, null, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(_component_UiSelectValue, { placeholder: "\u041A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u044F" }, null, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(_component_UiSelectValue, { placeholder: "\u041A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u044F" })
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(_component_UiSelectContent, null, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`<!--[-->`);
                                ssrRenderList(categories, (item, i) => {
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
                                  (openBlock(), createBlock(Fragment, null, renderList(categories, (item, i) => {
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
                                createVNode(_component_UiSelectValue, { placeholder: "\u041A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u044F" })
                              ]),
                              _: 1
                            }),
                            createVNode(_component_UiSelectContent, null, {
                              default: withCtx(() => [
                                (openBlock(), createBlock(Fragment, null, renderList(categories, (item, i) => {
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
                    _push3(`</div></div>`);
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(`</div></div>`);
                } else {
                  return [
                    createVNode("div", { class: "flex w-full gap-4" }, [
                      createVNode("div", { class: "flex flex-col gap-6 w-full" }, [
                        createVNode("div", { class: "relative" }, [
                          unref(dealData).title ? (openBlock(), createBlock(_component_UiLabel, {
                            key: 0,
                            class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1"
                          }, {
                            default: withCtx(() => [
                              createTextVNode("\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435")
                            ]),
                            _: 1
                          })) : createCommentVNode("", true),
                          createVNode(_component_UiInput, {
                            modelValue: unref(dealData).title,
                            "onUpdate:modelValue": ($event) => unref(dealData).title = $event,
                            placeholder: "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435",
                            class: unref(dealData).title ? "" : "outline-1 outline-rose-300"
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "class"])
                        ]),
                        createVNode("div", { class: "relative" }, [
                          createVNode(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1" }, {
                            default: withCtx(() => [
                              createTextVNode("\u0414\u0430\u0442\u0430 \u043F\u0440\u043E\u0434\u0430\u0436\u0438")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_UiInput, {
                            modelValue: unref(dealData).saleDate,
                            "onUpdate:modelValue": ($event) => unref(dealData).saleDate = $event,
                            type: "date",
                            placeholder: "dsad",
                            class: unref(dealData).saleDate ? "" : "outline-1 outline-rose-300"
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "class"])
                        ]),
                        createVNode("div", { class: "relative" }, [
                          createVNode(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1" }, {
                            default: withCtx(() => [
                              createTextVNode("\u0421\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_UiInput, {
                            modelValue: unref(dealData).price,
                            "onUpdate:modelValue": ($event) => unref(dealData).price = $event,
                            type: "number",
                            placeholder: "\u0421\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C",
                            class: unref(dealData).price ? "" : "outline-1 outline-rose-300"
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "class"])
                        ]),
                        _ctx.curGroupId === 16 ? (openBlock(), createBlock("div", {
                          key: 0,
                          class: "relative"
                        }, [
                          createVNode(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1" }, {
                            default: withCtx(() => [
                              createTextVNode("\u0421\u043A\u0438\u0434\u043A\u0430")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_UiInput, {
                            modelValue: unref(dealData).discontAmount,
                            "onUpdate:modelValue": ($event) => unref(dealData).discontAmount = $event,
                            type: "number",
                            placeholder: "\u0421\u043A\u0438\u0434\u043A\u0430"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ])) : createCommentVNode("", true),
                        createVNode("div", { class: "relative" }, [
                          createVNode(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap" }, {
                            default: withCtx(() => [
                              createTextVNode("\u0414\u0430\u0442\u0430 \u043F\u0440\u0435\u0437\u0435\u043D\u0442\u0430\u0446\u0438\u0438 \u043C\u0430\u043A\u0435\u0442\u0430")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_UiInput, {
                            modelValue: unref(dealData).maketPresentation,
                            "onUpdate:modelValue": ($event) => unref(dealData).maketPresentation = $event,
                            type: "date",
                            placeholder: "dsad",
                            class: unref(dealData).maketPresentation ? "" : "outline-1 outline-rose-300"
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "class"])
                        ]),
                        _ctx.curGroupId !== 16 ? (openBlock(), createBlock("div", {
                          key: 1,
                          class: "relative"
                        }, [
                          unref(dealData).maketType ? (openBlock(), createBlock(_component_UiLabel, {
                            key: 0,
                            class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1"
                          }, {
                            default: withCtx(() => [
                              createTextVNode("\u0422\u0438\u043F \u043C\u0430\u043A\u0435\u0442\u0430")
                            ]),
                            _: 1
                          })) : createCommentVNode("", true),
                          createVNode("div", {
                            class: unref(dealData).maketType ? "" : "outline-1 outline-rose-300 rounded-md"
                          }, [
                            createVNode(_component_UiSelect, {
                              modelValue: unref(dealData).maketType,
                              "onUpdate:modelValue": ($event) => unref(dealData).maketType = $event
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_UiSelectTrigger, null, {
                                  default: withCtx(() => [
                                    createVNode(_component_UiSelectValue, { placeholder: "\u0422\u0438\u043F \u043C\u0430\u043A\u0435\u0442\u0430" })
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_UiSelectContent, null, {
                                  default: withCtx(() => [
                                    (openBlock(), createBlock(Fragment, null, renderList(maketTypes, (item, i) => {
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
                          ], 2)
                        ])) : createCommentVNode("", true),
                        _ctx.curGroupId === 16 ? (openBlock(), createBlock("div", {
                          key: 2,
                          class: "relative"
                        }, [
                          unref(dealData).courseType ? (openBlock(), createBlock(_component_UiLabel, {
                            key: 0,
                            class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1"
                          }, {
                            default: withCtx(() => [
                              createTextVNode("\u0422\u0438\u043F \u043A\u0443\u0440\u0441\u0430")
                            ]),
                            _: 1
                          })) : createCommentVNode("", true),
                          createVNode("div", {
                            class: unref(dealData).courseType ? "" : "outline-1 outline-rose-300 rounded-md"
                          }, [
                            createVNode(_component_UiSelect, {
                              modelValue: unref(dealData).courseType,
                              "onUpdate:modelValue": ($event) => unref(dealData).courseType = $event
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_UiSelectTrigger, null, {
                                  default: withCtx(() => [
                                    createVNode(_component_UiSelectValue, { placeholder: "\u0422\u0438\u043F \u043A\u0443\u0440\u0441\u0430" })
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_UiSelectContent, null, {
                                  default: withCtx(() => [
                                    (openBlock(), createBlock(Fragment, null, renderList(courseTypes, (item, i) => {
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
                          ], 2)
                        ])) : createCommentVNode("", true),
                        createVNode("div", { class: "relative" }, [
                          unref(dealData).card_id ? (openBlock(), createBlock(_component_UiLabel, {
                            key: 0,
                            class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1"
                          }, {
                            default: withCtx(() => [
                              createTextVNode("id \u043A\u0430\u0440\u0442\u043E\u0447\u043A\u0438")
                            ]),
                            _: 1
                          })) : createCommentVNode("", true),
                          createVNode(_component_UiInput, {
                            modelValue: unref(dealData).card_id,
                            "onUpdate:modelValue": ($event) => unref(dealData).card_id = $event,
                            placeholder: "id \u043A\u0430\u0440\u0442\u043E\u0447\u043A\u0438 \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0441\u0442\u0432\u0430",
                            class: unref(dealData).card_id ? "" : "outline-1 outline-rose-300"
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "class"])
                        ]),
                        _ctx.curGroupId !== 16 ? (openBlock(), createBlock("div", {
                          key: 3,
                          class: "relative"
                        }, [
                          unref(dealData).discont ? (openBlock(), createBlock(_component_UiLabel, {
                            key: 0,
                            class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1"
                          }, {
                            default: withCtx(() => [
                              createTextVNode("\u0421\u043A\u0438\u0434\u043A\u0430")
                            ]),
                            _: 1
                          })) : createCommentVNode("", true),
                          createVNode("div", {
                            class: unref(dealData).discont ? "" : "outline-1 outline-rose-300 rounded-md "
                          }, [
                            createVNode(_component_UiSelect, {
                              modelValue: unref(dealData).discont,
                              "onUpdate:modelValue": ($event) => unref(dealData).discont = $event
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_UiSelectTrigger, null, {
                                  default: withCtx(() => [
                                    createVNode(_component_UiSelectValue, { placeholder: "\u0421\u043A\u0438\u0434\u043A\u0430" })
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_UiSelectContent, null, {
                                  default: withCtx(() => [
                                    (openBlock(), createBlock(Fragment, null, renderList(disconts, (item, i) => {
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
                          ], 2)
                        ])) : createCommentVNode("", true)
                      ]),
                      createVNode("div", { class: "flex flex-col gap-6 w-full" }, [
                        createVNode("div", { class: "relative" }, [
                          unref(dealData).clothingMethod ? (openBlock(), createBlock(_component_UiLabel, {
                            key: 0,
                            class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1"
                          }, {
                            default: withCtx(() => [
                              createTextVNode("\u0421\u043F\u043E\u0441\u043E\u0431 \u0437\u0430\u043A\u0440\u044B\u0442\u0438\u044F")
                            ]),
                            _: 1
                          })) : createCommentVNode("", true),
                          createVNode(_component_MyCombobox, {
                            items: _ctx.dealSubDatas.methods,
                            label: "\u0421\u043F\u043E\u0441\u043E\u0431 \u0437\u0430\u043A\u0440\u044B\u0442\u0438\u044F",
                            class: unref(dealData).clothingMethod ? "" : "outline-1 outline-rose-300 rounded-md",
                            onSelectedItem: (value) => unref(dealData).clothingMethod = value
                          }, null, 8, ["items", "class", "onSelectedItem"])
                        ]),
                        createVNode("div", { class: "relative" }, [
                          unref(dealData).source ? (openBlock(), createBlock(_component_UiLabel, {
                            key: 0,
                            class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1"
                          }, {
                            default: withCtx(() => [
                              createTextVNode("\u0418\u0441\u0442\u043E\u0447\u043D\u0438\u043A \u0441\u0434\u0435\u043B\u043A\u0438")
                            ]),
                            _: 1
                          })) : createCommentVNode("", true),
                          createVNode(_component_MyCombobox, {
                            items: _ctx.dealSubDatas.sources,
                            label: "\u0418\u0441\u0442\u043E\u0447\u043D\u0438\u043A \u0441\u0434\u0435\u043B\u043A\u0438",
                            class: unref(dealData).source ? "" : "outline-1 outline-rose-300 rounded-md",
                            onSelectedItem: (value) => unref(dealData).source = value
                          }, null, 8, ["items", "class", "onSelectedItem"])
                        ]),
                        createVNode("div", { class: "relative" }, [
                          unref(dealData).adTag ? (openBlock(), createBlock(_component_UiLabel, {
                            key: 0,
                            class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1"
                          }, {
                            default: withCtx(() => [
                              createTextVNode("\u0422\u042D\u0413")
                            ]),
                            _: 1
                          })) : createCommentVNode("", true),
                          createVNode(_component_MyCombobox, {
                            items: _ctx.dealSubDatas.adTags,
                            label: "\u041D\u0435\u0442 \u0442\u0435\u0433\u0430",
                            class: unref(dealData).adTag ? "" : "outline-1 outline-rose-300 rounded-md",
                            onSelectedItem: (value) => unref(dealData).adTag = value
                          }, null, 8, ["items", "class", "onSelectedItem"])
                        ]),
                        createVNode("div", { class: "relative" }, [
                          unref(dealData).city ? (openBlock(), createBlock(_component_UiLabel, {
                            key: 0,
                            class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1"
                          }, {
                            default: withCtx(() => [
                              createTextVNode("\u0413\u043E\u0440\u043E\u0434")
                            ]),
                            _: 1
                          })) : createCommentVNode("", true),
                          createVNode(_component_UiInput, {
                            modelValue: unref(dealData).city,
                            "onUpdate:modelValue": ($event) => unref(dealData).city = $event,
                            placeholder: "\u0413\u043E\u0440\u043E\u0434"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        createVNode("div", { class: "relative" }, [
                          unref(dealData).region ? (openBlock(), createBlock(_component_UiLabel, {
                            key: 0,
                            class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1"
                          }, {
                            default: withCtx(() => [
                              createTextVNode("\u0420\u0435\u0433\u0438\u043E\u043D/\u043E\u0431\u043B\u0430\u0441\u0442\u044C")
                            ]),
                            _: 1
                          })) : createCommentVNode("", true),
                          createVNode(_component_UiInput, {
                            modelValue: unref(dealData).region,
                            "onUpdate:modelValue": ($event) => unref(dealData).region = $event,
                            placeholder: "\u0420\u0435\u0433\u0438\u043E\u043D/\u043E\u0431\u043B\u0430\u0441\u0442\u044C"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        _ctx.clientData.chatLink.includes("easyneon.amocrm.ru") ? (openBlock(), createBlock("div", {
                          key: 0,
                          class: "relative"
                        }, [
                          unref(dealData).category ? (openBlock(), createBlock(_component_UiLabel, {
                            key: 0,
                            class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1"
                          }, {
                            default: withCtx(() => [
                              createTextVNode("\u041A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u044F")
                            ]),
                            _: 1
                          })) : createCommentVNode("", true),
                          createVNode("div", null, [
                            createVNode(_component_UiSelect, {
                              modelValue: unref(dealData).category,
                              "onUpdate:modelValue": ($event) => unref(dealData).category = $event
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_UiSelectTrigger, null, {
                                  default: withCtx(() => [
                                    createVNode(_component_UiSelectValue, { placeholder: "\u041A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u044F" })
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_UiSelectContent, null, {
                                  default: withCtx(() => [
                                    (openBlock(), createBlock(Fragment, null, renderList(categories, (item, i) => {
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
                          ])
                        ])) : createCommentVNode("", true)
                      ])
                    ])
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
                      createVNode("div", { class: "flex items-center justify-between" }, [
                        createTextVNode(" \u0421\u0434\u0435\u043B\u043A\u0430 "),
                        createVNode("div", { class: "relative flex items-center space-x-2" }, [
                          createVNode(_component_UiSwitch, {
                            id: "reservation",
                            checked: unref(dealData).reservation,
                            "onUpdate:checked": ($event) => unref(dealData).reservation = $event
                          }, null, 8, ["checked", "onUpdate:checked"]),
                          createVNode(_component_UiLabel, { for: "reservation" }, {
                            default: withCtx(() => [
                              createTextVNode("\u0411\u0440\u043E\u043D\u044C")
                            ]),
                            _: 1
                          })
                        ])
                      ])
                    ]),
                    _: 1
                  }),
                  createVNode(_component_UiCardDescription)
                ]),
                _: 1
              }),
              createVNode(_component_UiCardContent, null, {
                default: withCtx(() => [
                  createVNode("div", { class: "flex w-full gap-4" }, [
                    createVNode("div", { class: "flex flex-col gap-6 w-full" }, [
                      createVNode("div", { class: "relative" }, [
                        unref(dealData).title ? (openBlock(), createBlock(_component_UiLabel, {
                          key: 0,
                          class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1"
                        }, {
                          default: withCtx(() => [
                            createTextVNode("\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435")
                          ]),
                          _: 1
                        })) : createCommentVNode("", true),
                        createVNode(_component_UiInput, {
                          modelValue: unref(dealData).title,
                          "onUpdate:modelValue": ($event) => unref(dealData).title = $event,
                          placeholder: "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435",
                          class: unref(dealData).title ? "" : "outline-1 outline-rose-300"
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "class"])
                      ]),
                      createVNode("div", { class: "relative" }, [
                        createVNode(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1" }, {
                          default: withCtx(() => [
                            createTextVNode("\u0414\u0430\u0442\u0430 \u043F\u0440\u043E\u0434\u0430\u0436\u0438")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_UiInput, {
                          modelValue: unref(dealData).saleDate,
                          "onUpdate:modelValue": ($event) => unref(dealData).saleDate = $event,
                          type: "date",
                          placeholder: "dsad",
                          class: unref(dealData).saleDate ? "" : "outline-1 outline-rose-300"
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "class"])
                      ]),
                      createVNode("div", { class: "relative" }, [
                        createVNode(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1" }, {
                          default: withCtx(() => [
                            createTextVNode("\u0421\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_UiInput, {
                          modelValue: unref(dealData).price,
                          "onUpdate:modelValue": ($event) => unref(dealData).price = $event,
                          type: "number",
                          placeholder: "\u0421\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C",
                          class: unref(dealData).price ? "" : "outline-1 outline-rose-300"
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "class"])
                      ]),
                      _ctx.curGroupId === 16 ? (openBlock(), createBlock("div", {
                        key: 0,
                        class: "relative"
                      }, [
                        createVNode(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1" }, {
                          default: withCtx(() => [
                            createTextVNode("\u0421\u043A\u0438\u0434\u043A\u0430")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_UiInput, {
                          modelValue: unref(dealData).discontAmount,
                          "onUpdate:modelValue": ($event) => unref(dealData).discontAmount = $event,
                          type: "number",
                          placeholder: "\u0421\u043A\u0438\u0434\u043A\u0430"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ])) : createCommentVNode("", true),
                      createVNode("div", { class: "relative" }, [
                        createVNode(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap" }, {
                          default: withCtx(() => [
                            createTextVNode("\u0414\u0430\u0442\u0430 \u043F\u0440\u0435\u0437\u0435\u043D\u0442\u0430\u0446\u0438\u0438 \u043C\u0430\u043A\u0435\u0442\u0430")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_UiInput, {
                          modelValue: unref(dealData).maketPresentation,
                          "onUpdate:modelValue": ($event) => unref(dealData).maketPresentation = $event,
                          type: "date",
                          placeholder: "dsad",
                          class: unref(dealData).maketPresentation ? "" : "outline-1 outline-rose-300"
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "class"])
                      ]),
                      _ctx.curGroupId !== 16 ? (openBlock(), createBlock("div", {
                        key: 1,
                        class: "relative"
                      }, [
                        unref(dealData).maketType ? (openBlock(), createBlock(_component_UiLabel, {
                          key: 0,
                          class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1"
                        }, {
                          default: withCtx(() => [
                            createTextVNode("\u0422\u0438\u043F \u043C\u0430\u043A\u0435\u0442\u0430")
                          ]),
                          _: 1
                        })) : createCommentVNode("", true),
                        createVNode("div", {
                          class: unref(dealData).maketType ? "" : "outline-1 outline-rose-300 rounded-md"
                        }, [
                          createVNode(_component_UiSelect, {
                            modelValue: unref(dealData).maketType,
                            "onUpdate:modelValue": ($event) => unref(dealData).maketType = $event
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_UiSelectTrigger, null, {
                                default: withCtx(() => [
                                  createVNode(_component_UiSelectValue, { placeholder: "\u0422\u0438\u043F \u043C\u0430\u043A\u0435\u0442\u0430" })
                                ]),
                                _: 1
                              }),
                              createVNode(_component_UiSelectContent, null, {
                                default: withCtx(() => [
                                  (openBlock(), createBlock(Fragment, null, renderList(maketTypes, (item, i) => {
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
                        ], 2)
                      ])) : createCommentVNode("", true),
                      _ctx.curGroupId === 16 ? (openBlock(), createBlock("div", {
                        key: 2,
                        class: "relative"
                      }, [
                        unref(dealData).courseType ? (openBlock(), createBlock(_component_UiLabel, {
                          key: 0,
                          class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1"
                        }, {
                          default: withCtx(() => [
                            createTextVNode("\u0422\u0438\u043F \u043A\u0443\u0440\u0441\u0430")
                          ]),
                          _: 1
                        })) : createCommentVNode("", true),
                        createVNode("div", {
                          class: unref(dealData).courseType ? "" : "outline-1 outline-rose-300 rounded-md"
                        }, [
                          createVNode(_component_UiSelect, {
                            modelValue: unref(dealData).courseType,
                            "onUpdate:modelValue": ($event) => unref(dealData).courseType = $event
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_UiSelectTrigger, null, {
                                default: withCtx(() => [
                                  createVNode(_component_UiSelectValue, { placeholder: "\u0422\u0438\u043F \u043A\u0443\u0440\u0441\u0430" })
                                ]),
                                _: 1
                              }),
                              createVNode(_component_UiSelectContent, null, {
                                default: withCtx(() => [
                                  (openBlock(), createBlock(Fragment, null, renderList(courseTypes, (item, i) => {
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
                        ], 2)
                      ])) : createCommentVNode("", true),
                      createVNode("div", { class: "relative" }, [
                        unref(dealData).card_id ? (openBlock(), createBlock(_component_UiLabel, {
                          key: 0,
                          class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1"
                        }, {
                          default: withCtx(() => [
                            createTextVNode("id \u043A\u0430\u0440\u0442\u043E\u0447\u043A\u0438")
                          ]),
                          _: 1
                        })) : createCommentVNode("", true),
                        createVNode(_component_UiInput, {
                          modelValue: unref(dealData).card_id,
                          "onUpdate:modelValue": ($event) => unref(dealData).card_id = $event,
                          placeholder: "id \u043A\u0430\u0440\u0442\u043E\u0447\u043A\u0438 \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0441\u0442\u0432\u0430",
                          class: unref(dealData).card_id ? "" : "outline-1 outline-rose-300"
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "class"])
                      ]),
                      _ctx.curGroupId !== 16 ? (openBlock(), createBlock("div", {
                        key: 3,
                        class: "relative"
                      }, [
                        unref(dealData).discont ? (openBlock(), createBlock(_component_UiLabel, {
                          key: 0,
                          class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1"
                        }, {
                          default: withCtx(() => [
                            createTextVNode("\u0421\u043A\u0438\u0434\u043A\u0430")
                          ]),
                          _: 1
                        })) : createCommentVNode("", true),
                        createVNode("div", {
                          class: unref(dealData).discont ? "" : "outline-1 outline-rose-300 rounded-md "
                        }, [
                          createVNode(_component_UiSelect, {
                            modelValue: unref(dealData).discont,
                            "onUpdate:modelValue": ($event) => unref(dealData).discont = $event
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_UiSelectTrigger, null, {
                                default: withCtx(() => [
                                  createVNode(_component_UiSelectValue, { placeholder: "\u0421\u043A\u0438\u0434\u043A\u0430" })
                                ]),
                                _: 1
                              }),
                              createVNode(_component_UiSelectContent, null, {
                                default: withCtx(() => [
                                  (openBlock(), createBlock(Fragment, null, renderList(disconts, (item, i) => {
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
                        ], 2)
                      ])) : createCommentVNode("", true)
                    ]),
                    createVNode("div", { class: "flex flex-col gap-6 w-full" }, [
                      createVNode("div", { class: "relative" }, [
                        unref(dealData).clothingMethod ? (openBlock(), createBlock(_component_UiLabel, {
                          key: 0,
                          class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1"
                        }, {
                          default: withCtx(() => [
                            createTextVNode("\u0421\u043F\u043E\u0441\u043E\u0431 \u0437\u0430\u043A\u0440\u044B\u0442\u0438\u044F")
                          ]),
                          _: 1
                        })) : createCommentVNode("", true),
                        createVNode(_component_MyCombobox, {
                          items: _ctx.dealSubDatas.methods,
                          label: "\u0421\u043F\u043E\u0441\u043E\u0431 \u0437\u0430\u043A\u0440\u044B\u0442\u0438\u044F",
                          class: unref(dealData).clothingMethod ? "" : "outline-1 outline-rose-300 rounded-md",
                          onSelectedItem: (value) => unref(dealData).clothingMethod = value
                        }, null, 8, ["items", "class", "onSelectedItem"])
                      ]),
                      createVNode("div", { class: "relative" }, [
                        unref(dealData).source ? (openBlock(), createBlock(_component_UiLabel, {
                          key: 0,
                          class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1"
                        }, {
                          default: withCtx(() => [
                            createTextVNode("\u0418\u0441\u0442\u043E\u0447\u043D\u0438\u043A \u0441\u0434\u0435\u043B\u043A\u0438")
                          ]),
                          _: 1
                        })) : createCommentVNode("", true),
                        createVNode(_component_MyCombobox, {
                          items: _ctx.dealSubDatas.sources,
                          label: "\u0418\u0441\u0442\u043E\u0447\u043D\u0438\u043A \u0441\u0434\u0435\u043B\u043A\u0438",
                          class: unref(dealData).source ? "" : "outline-1 outline-rose-300 rounded-md",
                          onSelectedItem: (value) => unref(dealData).source = value
                        }, null, 8, ["items", "class", "onSelectedItem"])
                      ]),
                      createVNode("div", { class: "relative" }, [
                        unref(dealData).adTag ? (openBlock(), createBlock(_component_UiLabel, {
                          key: 0,
                          class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1"
                        }, {
                          default: withCtx(() => [
                            createTextVNode("\u0422\u042D\u0413")
                          ]),
                          _: 1
                        })) : createCommentVNode("", true),
                        createVNode(_component_MyCombobox, {
                          items: _ctx.dealSubDatas.adTags,
                          label: "\u041D\u0435\u0442 \u0442\u0435\u0433\u0430",
                          class: unref(dealData).adTag ? "" : "outline-1 outline-rose-300 rounded-md",
                          onSelectedItem: (value) => unref(dealData).adTag = value
                        }, null, 8, ["items", "class", "onSelectedItem"])
                      ]),
                      createVNode("div", { class: "relative" }, [
                        unref(dealData).city ? (openBlock(), createBlock(_component_UiLabel, {
                          key: 0,
                          class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1"
                        }, {
                          default: withCtx(() => [
                            createTextVNode("\u0413\u043E\u0440\u043E\u0434")
                          ]),
                          _: 1
                        })) : createCommentVNode("", true),
                        createVNode(_component_UiInput, {
                          modelValue: unref(dealData).city,
                          "onUpdate:modelValue": ($event) => unref(dealData).city = $event,
                          placeholder: "\u0413\u043E\u0440\u043E\u0434"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      createVNode("div", { class: "relative" }, [
                        unref(dealData).region ? (openBlock(), createBlock(_component_UiLabel, {
                          key: 0,
                          class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1"
                        }, {
                          default: withCtx(() => [
                            createTextVNode("\u0420\u0435\u0433\u0438\u043E\u043D/\u043E\u0431\u043B\u0430\u0441\u0442\u044C")
                          ]),
                          _: 1
                        })) : createCommentVNode("", true),
                        createVNode(_component_UiInput, {
                          modelValue: unref(dealData).region,
                          "onUpdate:modelValue": ($event) => unref(dealData).region = $event,
                          placeholder: "\u0420\u0435\u0433\u0438\u043E\u043D/\u043E\u0431\u043B\u0430\u0441\u0442\u044C"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _ctx.clientData.chatLink.includes("easyneon.amocrm.ru") ? (openBlock(), createBlock("div", {
                        key: 0,
                        class: "relative"
                      }, [
                        unref(dealData).category ? (openBlock(), createBlock(_component_UiLabel, {
                          key: 0,
                          class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1"
                        }, {
                          default: withCtx(() => [
                            createTextVNode("\u041A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u044F")
                          ]),
                          _: 1
                        })) : createCommentVNode("", true),
                        createVNode("div", null, [
                          createVNode(_component_UiSelect, {
                            modelValue: unref(dealData).category,
                            "onUpdate:modelValue": ($event) => unref(dealData).category = $event
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_UiSelectTrigger, null, {
                                default: withCtx(() => [
                                  createVNode(_component_UiSelectValue, { placeholder: "\u041A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u044F" })
                                ]),
                                _: 1
                              }),
                              createVNode(_component_UiSelectContent, null, {
                                default: withCtx(() => [
                                  (openBlock(), createBlock(Fragment, null, renderList(categories, (item, i) => {
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
                        ])
                      ])) : createCommentVNode("", true)
                    ])
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
const _sfc_setup$h = _sfc_main$h.setup;
_sfc_main$h.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/my/deals/CreateDealCard.vue");
  return _sfc_setup$h ? _sfc_setup$h(props, ctx) : void 0;
};
const _sfc_main$g = /* @__PURE__ */ defineComponent({
  __name: "CreatePaymentCard",
  __ssrInlineRender: true,
  emits: ["update:paymentBlank"],
  setup(__props, { emit: __emit }) {
    const methods = [
      "\u041D\u0430\u043B\u0438\u0447\u043D\u044B\u0435",
      "\u041F\u0435\u0440\u0435\u0432\u043E\u0434",
      "\u0414\u043E\u0433\u043E\u0432\u043E\u0440",
      "\u041D\u0430\u043B\u043E\u0436\u043A\u0430",
      "\u0421\u0441\u044B\u043B\u043A\u0430",
      "\u0414\u043E\u043B\u044F\u043C\u0438",
      "\u0420\u0430\u0441\u0441\u0440\u043E\u0447\u043A\u0430",
      "\u0421\u0447\u0435\u0442"
      // 'Бронь',
    ];
    const newPaymentBlank = {
      title: "1",
      price: 0,
      date: "",
      method: "\u0421\u0441\u044B\u043B\u043A\u0430",
      reservation: false,
      isConfirmed: false
    };
    const paymentData = ref({ ...newPaymentBlank });
    const emit = __emit;
    watch(
      paymentData,
      (newValue) => {
        emit("update:paymentBlank", newValue);
      },
      { deep: true }
    );
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UiCard = _sfc_main$3$1;
      const _component_UiCardHeader = _sfc_main$2$1;
      const _component_UiCardTitle = _sfc_main$1$1;
      const _component_UiCardDescription = _sfc_main$k;
      const _component_UiCardContent = _sfc_main$1$6;
      const _component_UiLabel = _sfc_main$z;
      const _component_UiInput = _sfc_main$m;
      const _component_UiSelect = _sfc_main$7$1;
      const _component_UiSelectTrigger = _sfc_main$5$2;
      const _component_UiSelectValue = _sfc_main$6$1;
      const _component_UiSelectContent = _sfc_main$4$3;
      const _component_UiSelectGroup = _sfc_main$3$4;
      const _component_UiSelectItem = _sfc_main$2$5;
      _push(ssrRenderComponent(_component_UiCard, mergeProps({ class: "w-full" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UiCardHeader, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UiCardTitle, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`\u041F\u043B\u0430\u0442\u0435\u0436`);
                      } else {
                        return [
                          createTextVNode("\u041F\u043B\u0430\u0442\u0435\u0436")
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
                        createTextVNode("\u041F\u043B\u0430\u0442\u0435\u0436")
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
                  _push3(`<div class="flex flex-col gap-6"${_scopeId2}><div class="relative"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`\u0421\u0443\u043C\u043C\u0430`);
                      } else {
                        return [
                          createTextVNode("\u0421\u0443\u043C\u043C\u0430")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_UiInput, {
                    modelValue: unref(paymentData).price,
                    "onUpdate:modelValue": ($event) => unref(paymentData).price = $event,
                    type: "number",
                    placeholder: "\u0421\u0443\u043C\u043C\u0430",
                    class: unref(paymentData).price ? "" : "outline-1 outline-rose-300"
                  }, null, _parent3, _scopeId2));
                  _push3(`</div><div class="relative"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_UiSelect, {
                    modelValue: unref(paymentData).method,
                    "onUpdate:modelValue": ($event) => unref(paymentData).method = $event
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_UiSelectTrigger, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_UiSelectValue, {
                                placeholder: unref(paymentData).method
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_UiSelectValue, {
                                  placeholder: unref(paymentData).method
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
                              ssrRenderList(methods, (item, i) => {
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
                                (openBlock(), createBlock(Fragment, null, renderList(methods, (item, i) => {
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
                                placeholder: unref(paymentData).method
                              }, null, 8, ["placeholder"])
                            ]),
                            _: 1
                          }),
                          createVNode(_component_UiSelectContent, null, {
                            default: withCtx(() => [
                              (openBlock(), createBlock(Fragment, null, renderList(methods, (item, i) => {
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
                  _push3(`</div></div>`);
                } else {
                  return [
                    createVNode("div", { class: "flex flex-col gap-6" }, [
                      createVNode("div", { class: "relative" }, [
                        createVNode(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap" }, {
                          default: withCtx(() => [
                            createTextVNode("\u0421\u0443\u043C\u043C\u0430")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_UiInput, {
                          modelValue: unref(paymentData).price,
                          "onUpdate:modelValue": ($event) => unref(paymentData).price = $event,
                          type: "number",
                          placeholder: "\u0421\u0443\u043C\u043C\u0430",
                          class: unref(paymentData).price ? "" : "outline-1 outline-rose-300"
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "class"])
                      ]),
                      createVNode("div", { class: "relative" }, [
                        createVNode(_component_UiSelect, {
                          modelValue: unref(paymentData).method,
                          "onUpdate:modelValue": ($event) => unref(paymentData).method = $event
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_UiSelectTrigger, null, {
                              default: withCtx(() => [
                                createVNode(_component_UiSelectValue, {
                                  placeholder: unref(paymentData).method
                                }, null, 8, ["placeholder"])
                              ]),
                              _: 1
                            }),
                            createVNode(_component_UiSelectContent, null, {
                              default: withCtx(() => [
                                (openBlock(), createBlock(Fragment, null, renderList(methods, (item, i) => {
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
                      ])
                    ])
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
                      createTextVNode("\u041F\u043B\u0430\u0442\u0435\u0436")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_UiCardDescription)
                ]),
                _: 1
              }),
              createVNode(_component_UiCardContent, null, {
                default: withCtx(() => [
                  createVNode("div", { class: "flex flex-col gap-6" }, [
                    createVNode("div", { class: "relative" }, [
                      createVNode(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap" }, {
                        default: withCtx(() => [
                          createTextVNode("\u0421\u0443\u043C\u043C\u0430")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_UiInput, {
                        modelValue: unref(paymentData).price,
                        "onUpdate:modelValue": ($event) => unref(paymentData).price = $event,
                        type: "number",
                        placeholder: "\u0421\u0443\u043C\u043C\u0430",
                        class: unref(paymentData).price ? "" : "outline-1 outline-rose-300"
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "class"])
                    ]),
                    createVNode("div", { class: "relative" }, [
                      createVNode(_component_UiSelect, {
                        modelValue: unref(paymentData).method,
                        "onUpdate:modelValue": ($event) => unref(paymentData).method = $event
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_UiSelectTrigger, null, {
                            default: withCtx(() => [
                              createVNode(_component_UiSelectValue, {
                                placeholder: unref(paymentData).method
                              }, null, 8, ["placeholder"])
                            ]),
                            _: 1
                          }),
                          createVNode(_component_UiSelectContent, null, {
                            default: withCtx(() => [
                              (openBlock(), createBlock(Fragment, null, renderList(methods, (item, i) => {
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
                    ])
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
const _sfc_setup$g = _sfc_main$g.setup;
_sfc_main$g.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/my/payments/CreatePaymentCard.vue");
  return _sfc_setup$g ? _sfc_setup$g(props, ctx) : void 0;
};
const _sfc_main$f = /* @__PURE__ */ defineComponent({
  __name: "DealCreateModal",
  __ssrInlineRender: true,
  emits: ["isDealCreated"],
  setup(__props, { emit: __emit }) {
    const { $useApi } = useNuxtApp();
    const newClientBlank = {
      id: 0,
      chatLink: "",
      fullName: "",
      phone: "",
      gender: "M",
      type: "\u0424\u0418\u0417",
      firstContact: "",
      adLink: "",
      inn: "",
      isRegular: false
    };
    const newDealBlank = {
      saleDate: "",
      card_id: "",
      title: "",
      price: 0,
      clothingMethod: "",
      source: "",
      adTag: "",
      discont: "",
      maketType: "",
      maketPresentation: "",
      city: "",
      region: "",
      category: "",
      reservation: false,
      discontAmount: 0
    };
    const newPaymentBlank = {
      title: "",
      price: 0,
      date: "",
      method: "\u041F\u0435\u0440\u0435\u0432\u043E\u0434",
      reservation: false,
      isConfirmed: false
    };
    const methods = [
      "\u0421\u0414\u0415\u041A",
      "\u041F\u041E\u0427\u0422\u0410 \u0420\u041E\u0421\u0421\u0418\u0418",
      "\u042F\u043D\u0434\u0435\u043A\u0441",
      "\u0411\u0430\u043B\u0442\u0438\u0439\u0441\u043A\u0438\u0439 \u043A\u0443\u0440\u044C\u0435\u0440",
      "\u0421\u0430\u043C\u043E\u0432\u044B\u0432\u043E\u0437",
      "\u0422\u041A \u041A\u0418\u0422",
      "\u041F\u042D\u0422",
      "\u0411\u043E\u043A\u0441\u0431\u0435\u0440\u0438",
      "\u0414\u0435\u043B\u043E\u0432\u044B\u0435 \u043B\u0438\u043D\u0438\u0438"
    ];
    const types = ["\u0411\u0435\u0441\u043F\u043B\u0430\u0442\u043D\u043E", "\u041F\u043B\u0430\u0442\u043D\u043E", "\u0414\u043E\u0441\u044B\u043B"];
    ref({
      type: types[0],
      method: methods[0]
    });
    const newClient = ref({ ...newClientBlank });
    const newDeal = ref({ ...newDealBlank });
    const newPayment = ref({ ...newPaymentBlank });
    const dealSubDatas = ref({
      adTags: [],
      methods: [],
      sources: [],
      spheres: []
    });
    const groups = ref([]);
    const curGroup = ref();
    const curGroupId = ref(0);
    const getDealSubDatas = async () => {
      const { data } = await $useApi.get("/deals/datas") || [];
      dealSubDatas.value = data;
      groups.value = data.userGroups;
      curGroup.value = data.userGroups[0];
      curGroupId.value = data.userGroups[0].id;
      return;
    };
    const isOpen = ref(false);
    const disabled = ref(false);
    const checkFields = () => {
      console.log(newClient.value);
      if (newClient.value.chatLink === "" || newClient.value.fullName === "" || newClient.value.phone === "" || newClient.value.gender === "" || newClient.value.type === "" || newClient.value.firstContact === "") {
        return console.log("wrong client");
      }
      if (newDeal.value.title === "" || newDeal.value.saleDate === "" || newDeal.value.card_id === "" || +newDeal.value.price === 0 || newDeal.value.clothingMethod === "" || newDeal.value.source === "" || newDeal.value.adTag === "" || newDeal.value.maketType === "" && newDeal.value.courseType === "" || newDeal.value.maketPresentation === "") {
        return console.log("wrong deal");
      }
      if (newPayment.value.title === "" || +newPayment.value.price === 0 || newPayment.value.method === "") {
        return console.log("wrong payment");
      }
      console.log("success!!");
      return true;
    };
    const emit = __emit;
    const saveDeal = async () => {
      try {
        const checking = checkFields();
        if (!checking) {
          return console.log("nope");
        }
        disabled.value = true;
        let client = newClient.value;
        if (newClient.value.id === 0) {
          const { id, ...clientData } = newClient.value;
          clientData.phone = clientData.phone.toString();
          const { data } = await $useApi.post(`/clients`, { ...clientData, groupId: curGroupId.value });
          client = data;
        }
        const { data: deal } = await $useApi.post(`deals/`, {
          // method: 'post',
          ...newDeal.value,
          clientId: client.id,
          groupId: curGroupId.value
        });
        console.log(deal);
        newPayment.value.date = newDeal.value.saleDate;
        await $useApi.post(`/payments/`, {
          ...newPayment.value,
          dealId: deal.id,
          groupId: curGroupId.value
        });
        emit("isDealCreated", deal.id);
        return isOpen.value = false;
      } catch (error) {
        console.log(error);
      }
    };
    watch(isOpen, () => {
      if (!isOpen.value) {
        newClient.value = newClientBlank;
        newDeal.value = newDealBlank;
        newPayment.value = newPaymentBlank;
        disabled.value = false;
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UiDialog = _sfc_main$4$1;
      const _component_UiDialogTrigger = _sfc_main$3$2;
      const _component_UiButton = _sfc_main$o;
      const _component_UiDialogContent = _sfc_main$p;
      const _component_UiDialogHeader = _sfc_main$2$3;
      const _component_UiDialogTitle = _sfc_main$1$3;
      const _component_UiDialogDescription = _sfc_main$q;
      const _component_MyComboboxModels = _sfc_main$r;
      const _component_MyClientsCreateClientCard = _sfc_main$i;
      const _component_MyDealsCreateDealCard = _sfc_main$h;
      const _component_MyPaymentsCreatePaymentCard = _sfc_main$g;
      const _component_UiDialogFooter = _sfc_main$s;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_UiDialog, {
        open: unref(isOpen),
        "onUpdate:open": ($event) => isRef(isOpen) ? isOpen.value = $event : null
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UiDialogTrigger, { "as-child": "" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UiButton, {
                    size: "icon",
                    class: "w-full px-2",
                    onClick: getDealSubDatas
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` \u0421\u043E\u0437\u0434\u0430\u0442\u044C `);
                      } else {
                        return [
                          createTextVNode(" \u0421\u043E\u0437\u0434\u0430\u0442\u044C ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UiButton, {
                      size: "icon",
                      class: "w-full px-2",
                      onClick: getDealSubDatas
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" \u0421\u043E\u0437\u0434\u0430\u0442\u044C ")
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UiDialogContent, { class: "max-w-[1200px] min-w-[1000px] flex flex-col" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UiDialogHeader, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      var _a, _b;
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_UiDialogTitle, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`\u0421\u043E\u0437\u0434\u0430\u043D\u0438\u0435 \u0441\u0434\u0435\u043B\u043A\u0438`);
                            } else {
                              return [
                                createTextVNode("\u0421\u043E\u0437\u0434\u0430\u043D\u0438\u0435 \u0441\u0434\u0435\u043B\u043A\u0438")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_UiDialogDescription, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` \u0417\u0430\u043F\u043E\u043B\u043D\u0438 \u0432\u0441\u0435 \u043F\u043E\u043B\u044F \u0438 \u043D\u0430\u0436\u043C\u0438 \u0421\u043E\u0437\u0434\u0430\u0442\u044C `);
                            } else {
                              return [
                                createTextVNode(" \u0417\u0430\u043F\u043E\u043B\u043D\u0438 \u0432\u0441\u0435 \u043F\u043E\u043B\u044F \u0438 \u043D\u0430\u0436\u043C\u0438 \u0421\u043E\u0437\u0434\u0430\u0442\u044C ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(`<div class="flex items-center gap-3"${_scopeId3}><span class="whitespace-nowrap"${_scopeId3}>\u0412\u044B\u0431\u0440\u0430\u0442\u044C \u043F\u0440\u043E\u0435\u043A\u0442 -&gt; </span><div class="w-[200px]"${_scopeId3}>`);
                        if (unref(groups).length) {
                          _push4(ssrRenderComponent(_component_MyComboboxModels, {
                            items: unref(groups).map((m) => ({ value: m.id, label: m.title })),
                            class: "w-full",
                            label: ((_a = unref(curGroup)) == null ? void 0 : _a.title) || "\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u043F\u0440\u043E\u0435\u043A\u0442",
                            onSelectedItem: (val) => {
                              curGroupId.value = val;
                            }
                          }, null, _parent4, _scopeId3));
                        } else {
                          _push4(`<!---->`);
                        }
                        _push4(`</div></div>`);
                      } else {
                        return [
                          createVNode(_component_UiDialogTitle, null, {
                            default: withCtx(() => [
                              createTextVNode("\u0421\u043E\u0437\u0434\u0430\u043D\u0438\u0435 \u0441\u0434\u0435\u043B\u043A\u0438")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_UiDialogDescription, null, {
                            default: withCtx(() => [
                              createTextVNode(" \u0417\u0430\u043F\u043E\u043B\u043D\u0438 \u0432\u0441\u0435 \u043F\u043E\u043B\u044F \u0438 \u043D\u0430\u0436\u043C\u0438 \u0421\u043E\u0437\u0434\u0430\u0442\u044C ")
                            ]),
                            _: 1
                          }),
                          createVNode("div", { class: "flex items-center gap-3" }, [
                            createVNode("span", { class: "whitespace-nowrap" }, "\u0412\u044B\u0431\u0440\u0430\u0442\u044C \u043F\u0440\u043E\u0435\u043A\u0442 -> "),
                            createVNode("div", { class: "w-[200px]" }, [
                              unref(groups).length ? (openBlock(), createBlock(_component_MyComboboxModels, {
                                key: 0,
                                items: unref(groups).map((m) => ({ value: m.id, label: m.title })),
                                class: "w-full",
                                label: ((_b = unref(curGroup)) == null ? void 0 : _b.title) || "\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u043F\u0440\u043E\u0435\u043A\u0442",
                                onSelectedItem: (val) => {
                                  curGroupId.value = val;
                                }
                              }, null, 8, ["items", "label", "onSelectedItem"])) : createCommentVNode("", true)
                            ])
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`<div class="flex gap-4"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_MyClientsCreateClientCard, {
                    class: "w-[300px]",
                    "onUpdate:clientBlank": (value) => newClient.value = value
                  }, null, _parent3, _scopeId2));
                  if (unref(curGroupId)) {
                    _push3(ssrRenderComponent(_component_MyDealsCreateDealCard, {
                      class: "w-[600px]",
                      "deal-sub-datas": unref(dealSubDatas),
                      "client-data": unref(newClient),
                      "cur-group-id": unref(curGroupId),
                      "onUpdate:dealBlank": (value) => newDeal.value = value
                    }, null, _parent3, _scopeId2));
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(`<div class="flex flex-col gap-5 w-[300px]"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_MyPaymentsCreatePaymentCard, {
                    class: "h-full",
                    "new-payment-data": unref(newPayment),
                    "onUpdate:paymentBlank": (value) => newPayment.value = value
                  }, null, _parent3, _scopeId2));
                  _push3(`</div></div>`);
                  _push3(ssrRenderComponent(_component_UiDialogFooter, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_UiButton, {
                          disabled: unref(disabled),
                          onClick: saveDeal
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
                      } else {
                        return [
                          createVNode(_component_UiButton, {
                            disabled: unref(disabled),
                            onClick: saveDeal
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" \u0421\u043E\u0437\u0434\u0430\u0442\u044C ")
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
                      default: withCtx(() => {
                        var _a;
                        return [
                          createVNode(_component_UiDialogTitle, null, {
                            default: withCtx(() => [
                              createTextVNode("\u0421\u043E\u0437\u0434\u0430\u043D\u0438\u0435 \u0441\u0434\u0435\u043B\u043A\u0438")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_UiDialogDescription, null, {
                            default: withCtx(() => [
                              createTextVNode(" \u0417\u0430\u043F\u043E\u043B\u043D\u0438 \u0432\u0441\u0435 \u043F\u043E\u043B\u044F \u0438 \u043D\u0430\u0436\u043C\u0438 \u0421\u043E\u0437\u0434\u0430\u0442\u044C ")
                            ]),
                            _: 1
                          }),
                          createVNode("div", { class: "flex items-center gap-3" }, [
                            createVNode("span", { class: "whitespace-nowrap" }, "\u0412\u044B\u0431\u0440\u0430\u0442\u044C \u043F\u0440\u043E\u0435\u043A\u0442 -> "),
                            createVNode("div", { class: "w-[200px]" }, [
                              unref(groups).length ? (openBlock(), createBlock(_component_MyComboboxModels, {
                                key: 0,
                                items: unref(groups).map((m) => ({ value: m.id, label: m.title })),
                                class: "w-full",
                                label: ((_a = unref(curGroup)) == null ? void 0 : _a.title) || "\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u043F\u0440\u043E\u0435\u043A\u0442",
                                onSelectedItem: (val) => {
                                  curGroupId.value = val;
                                }
                              }, null, 8, ["items", "label", "onSelectedItem"])) : createCommentVNode("", true)
                            ])
                          ])
                        ];
                      }),
                      _: 1
                    }),
                    createVNode("div", { class: "flex gap-4" }, [
                      createVNode(_component_MyClientsCreateClientCard, {
                        class: "w-[300px]",
                        "onUpdate:clientBlank": (value) => newClient.value = value
                      }, null, 8, ["onUpdate:clientBlank"]),
                      unref(curGroupId) ? (openBlock(), createBlock(_component_MyDealsCreateDealCard, {
                        key: 0,
                        class: "w-[600px]",
                        "deal-sub-datas": unref(dealSubDatas),
                        "client-data": unref(newClient),
                        "cur-group-id": unref(curGroupId),
                        "onUpdate:dealBlank": (value) => newDeal.value = value
                      }, null, 8, ["deal-sub-datas", "client-data", "cur-group-id", "onUpdate:dealBlank"])) : createCommentVNode("", true),
                      createVNode("div", { class: "flex flex-col gap-5 w-[300px]" }, [
                        createVNode(_component_MyPaymentsCreatePaymentCard, {
                          class: "h-full",
                          "new-payment-data": unref(newPayment),
                          "onUpdate:paymentBlank": (value) => newPayment.value = value
                        }, null, 8, ["new-payment-data", "onUpdate:paymentBlank"])
                      ])
                    ]),
                    createVNode(_component_UiDialogFooter, null, {
                      default: withCtx(() => [
                        createVNode(_component_UiButton, {
                          disabled: unref(disabled),
                          onClick: saveDeal
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" \u0421\u043E\u0437\u0434\u0430\u0442\u044C ")
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
                  createVNode(_component_UiButton, {
                    size: "icon",
                    class: "w-full px-2",
                    onClick: getDealSubDatas
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" \u0421\u043E\u0437\u0434\u0430\u0442\u044C ")
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(_component_UiDialogContent, { class: "max-w-[1200px] min-w-[1000px] flex flex-col" }, {
                default: withCtx(() => [
                  createVNode(_component_UiDialogHeader, null, {
                    default: withCtx(() => {
                      var _a;
                      return [
                        createVNode(_component_UiDialogTitle, null, {
                          default: withCtx(() => [
                            createTextVNode("\u0421\u043E\u0437\u0434\u0430\u043D\u0438\u0435 \u0441\u0434\u0435\u043B\u043A\u0438")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_UiDialogDescription, null, {
                          default: withCtx(() => [
                            createTextVNode(" \u0417\u0430\u043F\u043E\u043B\u043D\u0438 \u0432\u0441\u0435 \u043F\u043E\u043B\u044F \u0438 \u043D\u0430\u0436\u043C\u0438 \u0421\u043E\u0437\u0434\u0430\u0442\u044C ")
                          ]),
                          _: 1
                        }),
                        createVNode("div", { class: "flex items-center gap-3" }, [
                          createVNode("span", { class: "whitespace-nowrap" }, "\u0412\u044B\u0431\u0440\u0430\u0442\u044C \u043F\u0440\u043E\u0435\u043A\u0442 -> "),
                          createVNode("div", { class: "w-[200px]" }, [
                            unref(groups).length ? (openBlock(), createBlock(_component_MyComboboxModels, {
                              key: 0,
                              items: unref(groups).map((m) => ({ value: m.id, label: m.title })),
                              class: "w-full",
                              label: ((_a = unref(curGroup)) == null ? void 0 : _a.title) || "\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u043F\u0440\u043E\u0435\u043A\u0442",
                              onSelectedItem: (val) => {
                                curGroupId.value = val;
                              }
                            }, null, 8, ["items", "label", "onSelectedItem"])) : createCommentVNode("", true)
                          ])
                        ])
                      ];
                    }),
                    _: 1
                  }),
                  createVNode("div", { class: "flex gap-4" }, [
                    createVNode(_component_MyClientsCreateClientCard, {
                      class: "w-[300px]",
                      "onUpdate:clientBlank": (value) => newClient.value = value
                    }, null, 8, ["onUpdate:clientBlank"]),
                    unref(curGroupId) ? (openBlock(), createBlock(_component_MyDealsCreateDealCard, {
                      key: 0,
                      class: "w-[600px]",
                      "deal-sub-datas": unref(dealSubDatas),
                      "client-data": unref(newClient),
                      "cur-group-id": unref(curGroupId),
                      "onUpdate:dealBlank": (value) => newDeal.value = value
                    }, null, 8, ["deal-sub-datas", "client-data", "cur-group-id", "onUpdate:dealBlank"])) : createCommentVNode("", true),
                    createVNode("div", { class: "flex flex-col gap-5 w-[300px]" }, [
                      createVNode(_component_MyPaymentsCreatePaymentCard, {
                        class: "h-full",
                        "new-payment-data": unref(newPayment),
                        "onUpdate:paymentBlank": (value) => newPayment.value = value
                      }, null, 8, ["new-payment-data", "onUpdate:paymentBlank"])
                    ])
                  ]),
                  createVNode(_component_UiDialogFooter, null, {
                    default: withCtx(() => [
                      createVNode(_component_UiButton, {
                        disabled: unref(disabled),
                        onClick: saveDeal
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" \u0421\u043E\u0437\u0434\u0430\u0442\u044C ")
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
      _push(`</div>`);
    };
  }
});
const _sfc_setup$f = _sfc_main$f.setup;
_sfc_main$f.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/my/deals/DealCreateModal.vue");
  return _sfc_setup$f ? _sfc_setup$f(props, ctx) : void 0;
};
const _sfc_main$e = /* @__PURE__ */ defineComponent({
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
      const _component_UiPopover = _sfc_main$2$6;
      const _component_UiPopoverTrigger = _sfc_main$1$7;
      const _component_UiButton = _sfc_main$o;
      const _component_UiSeparator = _sfc_main$v;
      const _component_UiBadge = _sfc_main$E;
      const _component_UiPopoverContent = _sfc_main$F;
      const _component_UiCommand = _sfc_main$3$5;
      const _component_UiCommandInput = _sfc_main$G;
      const _component_UiCommandList = _sfc_main$H;
      const _component_UiCommandEmpty = _sfc_main$1$8;
      const _component_UiCommandGroup = _sfc_main$2$7;
      const _component_UiCommandItem = _sfc_main$1$9;
      const _component_UiCommandSeparator = _sfc_main$I;
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
              class: "w-[200px] p-0",
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
                class: "w-[200px] p-0",
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
const _sfc_setup$e = _sfc_main$e.setup;
_sfc_main$e.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/my/deals/DataTableFacetedFilter.vue");
  return _sfc_setup$e ? _sfc_setup$e(props, ctx) : void 0;
};
const _sfc_main$d = /* @__PURE__ */ defineComponent({
  __name: "DataTableToolbar",
  __ssrInlineRender: true,
  props: {
    table: {},
    filters: {},
    sources: {},
    adTags: {}
  },
  setup(__props) {
    const statuses = [
      { label: "\u0421\u043E\u0437\u0434\u0430\u043D\u0430", value: "\u0421\u043E\u0437\u0434\u0430\u043D\u0430" },
      { label: "\u0421\u0431\u043E\u0440\u043A\u0430", value: "\u0421\u0431\u043E\u0440\u043A\u0430" },
      { label: "\u0423\u043F\u0430\u043A\u043E\u0432\u043A\u0430", value: "\u0423\u043F\u0430\u043A\u043E\u0432\u043A\u0430" },
      // { label: 'Доступна', value: 'Доступна' },
      { label: "\u041E\u0442\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0430", value: "\u041E\u0442\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0430" },
      { label: "\u0412\u0440\u0443\u0447\u0435\u043D\u0430", value: "\u0412\u0440\u0443\u0447\u0435\u043D\u0430" },
      { label: "\u0412\u043E\u0437\u0432\u0440\u0430\u0442", value: "\u0412\u043E\u0437\u0432\u0440\u0430\u0442" }
    ];
    const maketTypes = [
      {
        value: "\u0414\u0438\u0437\u0430\u0439\u043D\u0435\u0440\u0441\u043A\u0438\u0439",
        label: "\u0414\u0438\u0437\u0430\u0439\u043D\u0435\u0440\u0441\u043A\u0438\u0439"
      },
      {
        value: "\u0417\u0430\u0433\u043E\u0442\u043E\u0432\u043A\u0430 \u0438\u0437 \u0431\u0430\u0437\u044B",
        label: "\u0417\u0430\u0433\u043E\u0442\u043E\u0432\u043A\u0430 \u0438\u0437 \u0431\u0430\u0437\u044B"
      },
      {
        value: "\u0420\u0435\u043A\u043B\u0430\u043C\u043D\u044B\u0439",
        label: "\u0420\u0435\u043A\u043B\u0430\u043C\u043D\u044B\u0439"
      },
      {
        value: "\u0412\u0438\u0437\u0443\u0430\u043B\u0438\u0437\u0430\u0442\u043E\u0440",
        label: "\u0412\u0438\u0437\u0443\u0430\u043B\u0438\u0437\u0430\u0442\u043E\u0440"
      },
      {
        value: "\u0418\u0437 \u0440\u0430\u0441\u0441\u044B\u043B\u043A\u0438",
        label: "\u0418\u0437 \u0440\u0430\u0441\u0441\u044B\u043B\u043A\u0438"
      }
    ];
    const daysGone = [
      { label: "\u0411\u043E\u043B\u044C\u0448\u0435 31", value: "\u0411\u043E\u043B\u044C\u0448\u0435 31" },
      { label: "8-31", value: "8-31" },
      { label: "3-7", value: "3-7" },
      { label: "1-2", value: "1-2" },
      { label: "0", value: "0" }
    ];
    const props = __props;
    props.filters.workspaces.map((w) => {
      return { value: w.id, label: w.title };
    });
    const groups = props.filters.groups.map((g) => {
      return { value: g.id, label: g.title };
    });
    console.log(groups);
    const managers = props.filters.managers.map((m) => {
      return { value: m.id, label: m.fullName };
    });
    const isFiltered = computed(
      () => props.table.getState().columnFilters.length > 0
    );
    return (_ctx, _push, _parent, _attrs) => {
      const _component_MyDealsDataTableFacetedFilter = _sfc_main$e;
      const _component_UiButton = _sfc_main$o;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex items-center justify-between" }, _attrs))}><div class="flex flex-1 items-center space-x-2">`);
      if (_ctx.table.getColumn("status")) {
        _push(ssrRenderComponent(_component_MyDealsDataTableFacetedFilter, {
          column: _ctx.table.getColumn("status"),
          title: "\u0421\u0442\u0430\u0442\u0443\u0441",
          options: statuses
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      if (_ctx.table.getColumn("maketType")) {
        _push(ssrRenderComponent(_component_MyDealsDataTableFacetedFilter, {
          column: _ctx.table.getColumn("maketType"),
          title: "\u041C\u0430\u043A\u0435\u0442",
          options: maketTypes
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      if (_ctx.table.getColumn("source")) {
        _push(ssrRenderComponent(_component_MyDealsDataTableFacetedFilter, {
          column: _ctx.table.getColumn("source"),
          title: "\u0418\u0441\u0442\u043E\u0447\u043D\u0438\u043A",
          options: _ctx.sources
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      if (_ctx.table.getColumn("adTag")) {
        _push(ssrRenderComponent(_component_MyDealsDataTableFacetedFilter, {
          column: _ctx.table.getColumn("adTag"),
          title: "\u0422\u0435\u0433",
          options: _ctx.adTags
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      if (_ctx.table.getColumn("daysGone")) {
        _push(ssrRenderComponent(_component_MyDealsDataTableFacetedFilter, {
          column: _ctx.table.getColumn("daysGone"),
          title: "\u041F\u0440\u043E\u0448\u043B\u043E \u0434\u043D\u0435\u0439",
          options: daysGone
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      if (_ctx.table.getColumn("groupId") && unref(groups).length) {
        _push(ssrRenderComponent(_component_MyDealsDataTableFacetedFilter, {
          column: _ctx.table.getColumn("groupId"),
          title: "\u041F\u0440\u043E\u0435\u043A\u0442",
          options: unref(groups)
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      if (_ctx.table.getColumn("dealers") && unref(managers).length > 1) {
        _push(ssrRenderComponent(_component_MyDealsDataTableFacetedFilter, {
          column: _ctx.table.getColumn("dealers"),
          title: "\u041C\u0435\u043D\u0435\u0434\u0436\u0435\u0440\u044B",
          options: unref(managers)
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      if (_ctx.table.getColumn("haveReviews")) {
        _push(ssrRenderComponent(_component_MyDealsDataTableFacetedFilter, {
          column: _ctx.table.getColumn("haveReviews"),
          title: "\u041E\u0442\u0437\u044B\u0432",
          options: [
            { label: "\u0415\u0441\u0442\u044C", value: "\u0415\u0441\u0442\u044C" },
            { label: "\u041D\u0435\u0442", value: "\u041D\u0435\u0442" }
          ]
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      if (_ctx.table.getColumn("isRegular")) {
        _push(ssrRenderComponent(_component_MyDealsDataTableFacetedFilter, {
          column: _ctx.table.getColumn("isRegular"),
          title: "\u041A\u043B\u0438\u0435\u043D\u0442",
          options: [
            { label: "\u041D\u043E\u0432\u044B\u0439 \u043A\u043B\u0438\u0435\u043D\u0442", value: "\u041D\u043E\u0432\u044B\u0439 \u043A\u043B\u0438\u0435\u043D\u0442" },
            { label: "\u041F\u043E\u0441\u0442\u043E\u044F\u043D\u043D\u044B\u0439 \u043A\u043B\u0438\u0435\u043D\u0442", value: "\u041F\u043E\u0441\u0442\u043E\u044F\u043D\u043D\u044B\u0439 \u043A\u043B\u0438\u0435\u043D\u0442" }
          ]
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
const _sfc_setup$d = _sfc_main$d.setup;
_sfc_main$d.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/my/deals/DataTableToolbar.vue");
  return _sfc_setup$d ? _sfc_setup$d(props, ctx) : void 0;
};
const _sfc_main$c = /* @__PURE__ */ defineComponent({
  __name: "DataTable",
  __ssrInlineRender: true,
  props: {
    columns: {},
    data: {},
    filters: {}
  },
  emits: ["deal-clicked", "table-sorted"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const curDeal = ref(0);
    const sorting = ref([]);
    const columnFilters = ref([]);
    const columnVisibility = ref({});
    const sources = ref([]);
    const adTags = ref([]);
    function removeDuplicatesByValue(arr) {
      return Array.from(
        arr.reduce(
          (map, item) => map.set(item.value, item),
          /* @__PURE__ */ new Map()
        )
      ).map(([, item]) => item);
    }
    sources.value = removeDuplicatesByValue(
      props.data.map((d) => {
        return { value: d.source, label: d.source };
      })
    );
    adTags.value = removeDuplicatesByValue(
      props.data.map((d) => {
        return { value: d.adTag, label: d.adTag };
      })
    );
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
    const dealClick = (id) => {
      curDeal.value = id;
      emit("deal-clicked", id);
    };
    watch(
      () => table.getSortedRowModel().rows,
      (newSorting) => {
        const dealIds = newSorting.map((s) => s.original.id);
        emit("table-sorted", dealIds);
      },
      { deep: true }
    );
    return (_ctx, _push, _parent, _attrs) => {
      const _component_MyDealsDataTableToolbar = _sfc_main$d;
      const _component_UiScrollArea = _sfc_main$t;
      const _component_UiTable = _sfc_main$5$1;
      const _component_UiTableHeader = _sfc_main$u;
      const _component_UiTableRow = _sfc_main$2$4;
      const _component_UiTableHead = _sfc_main$1$4;
      const _component_UiTableBody = _sfc_main$4$2;
      const _component_UiTableCell = _sfc_main$3$3;
      const _component_UiScrollBar = _sfc_main$1$5;
      _push(`<!--[--><div class="flex mb-2 justify-between">`);
      _push(ssrRenderComponent(_component_MyDealsDataTableToolbar, {
        table: unref(table),
        filters: _ctx.filters,
        sources: unref(sources),
        "ad-tags": unref(adTags)
      }, null, _parent));
      _push(`</div><div class="bg-slate-100">`);
      _push(ssrRenderComponent(_component_UiScrollArea, { class: "h-[calc(100vh-280px)]" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UiTable, { class: "bg-white relative" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UiTableHeader, { class: "bg-gray-50 sticky top-0 z-50" }, {
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
                              class: [
                                "cursor-pointer hover:bg-slate-300/50",
                                unref(curDeal) === row.original.id ? "bg-slate-400/70 hover:bg-slate-400/50" : "",
                                row.original.reservation === true ? "bg-yellow-500/30 hover:bg-yellow-500/20" : "",
                                ["\u041E\u0442\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0430", "\u0412\u0440\u0443\u0447\u0435\u043D\u0430"].includes(row.original.status) ? "bg-green-500/30 hover:bg-green-500/20" : "",
                                row.original.price !== row.original.dealers.reduce(
                                  (acc, dealer) => acc + dealer.price,
                                  0
                                ) ? "bg-red-400/60 hover:bg-red-400/50" : ""
                                // row.original.deletedAt !== null ? 'bg-yellow-500' : '',
                              ],
                              "data-state": row.getIsSelected() ? "selected" : void 0,
                              onClick: ($event) => dealClick(row.original.id)
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
                              class: [
                                "cursor-pointer hover:bg-slate-300/50",
                                unref(curDeal) === row.original.id ? "bg-slate-400/70 hover:bg-slate-400/50" : "",
                                row.original.reservation === true ? "bg-yellow-500/30 hover:bg-yellow-500/20" : "",
                                ["\u041E\u0442\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0430", "\u0412\u0440\u0443\u0447\u0435\u043D\u0430"].includes(row.original.status) ? "bg-green-500/30 hover:bg-green-500/20" : "",
                                row.original.price !== row.original.dealers.reduce(
                                  (acc, dealer) => acc + dealer.price,
                                  0
                                ) ? "bg-red-400/60 hover:bg-red-400/50" : ""
                                // row.original.deletedAt !== null ? 'bg-yellow-500' : '',
                              ],
                              "data-state": row.getIsSelected() ? "selected" : void 0,
                              onClick: ($event) => dealClick(row.original.id)
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
                            }, 1032, ["class", "data-state", "onClick"]);
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
                    createVNode(_component_UiTableHeader, { class: "bg-gray-50 sticky top-0 z-50" }, {
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
                              class: [
                                "cursor-pointer hover:bg-slate-300/50",
                                unref(curDeal) === row.original.id ? "bg-slate-400/70 hover:bg-slate-400/50" : "",
                                row.original.reservation === true ? "bg-yellow-500/30 hover:bg-yellow-500/20" : "",
                                ["\u041E\u0442\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0430", "\u0412\u0440\u0443\u0447\u0435\u043D\u0430"].includes(row.original.status) ? "bg-green-500/30 hover:bg-green-500/20" : "",
                                row.original.price !== row.original.dealers.reduce(
                                  (acc, dealer) => acc + dealer.price,
                                  0
                                ) ? "bg-red-400/60 hover:bg-red-400/50" : ""
                                // row.original.deletedAt !== null ? 'bg-yellow-500' : '',
                              ],
                              "data-state": row.getIsSelected() ? "selected" : void 0,
                              onClick: ($event) => dealClick(row.original.id)
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
                            }, 1032, ["class", "data-state", "onClick"]);
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
              createVNode(_component_UiTable, { class: "bg-white relative" }, {
                default: withCtx(() => [
                  createVNode(_component_UiTableHeader, { class: "bg-gray-50 sticky top-0 z-50" }, {
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
                            class: [
                              "cursor-pointer hover:bg-slate-300/50",
                              unref(curDeal) === row.original.id ? "bg-slate-400/70 hover:bg-slate-400/50" : "",
                              row.original.reservation === true ? "bg-yellow-500/30 hover:bg-yellow-500/20" : "",
                              ["\u041E\u0442\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0430", "\u0412\u0440\u0443\u0447\u0435\u043D\u0430"].includes(row.original.status) ? "bg-green-500/30 hover:bg-green-500/20" : "",
                              row.original.price !== row.original.dealers.reduce(
                                (acc, dealer) => acc + dealer.price,
                                0
                              ) ? "bg-red-400/60 hover:bg-red-400/50" : ""
                              // row.original.deletedAt !== null ? 'bg-yellow-500' : '',
                            ],
                            "data-state": row.getIsSelected() ? "selected" : void 0,
                            onClick: ($event) => dealClick(row.original.id)
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
                          }, 1032, ["class", "data-state", "onClick"]);
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
const _sfc_setup$c = _sfc_main$c.setup;
_sfc_main$c.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/my/deals/DataTable.vue");
  return _sfc_setup$c ? _sfc_setup$c(props, ctx) : void 0;
};
const _sfc_main$b = /* @__PURE__ */ defineComponent({
  __name: "DealHistory",
  __ssrInlineRender: true,
  props: {
    dealId: {}
  },
  setup(__props) {
    const { $useApi } = useNuxtApp();
    const props = __props;
    const dealHistory = ref([]);
    const getDealHistory = async () => {
      try {
        const { data } = await $useApi.get(`deals/${props.dealId}/deal-history`);
        dealHistory.value = data;
        console.log("\u0418\u0441\u0442\u043E\u0440\u0438\u044F \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u0439:", data);
      } catch (error) {
        console.error("\u041E\u0448\u0438\u0431\u043A\u0430 \u043F\u0440\u0438 \u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0435 \u0438\u0441\u0442\u043E\u0440\u0438\u0438:", error);
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UiDialog = _sfc_main$4$1;
      const _component_UiDialogTrigger = _sfc_main$3$2;
      const _component_UiButton = _sfc_main$o;
      const _component_Icon = __nuxt_component_7;
      const _component_UiDialogContent = _sfc_main$p;
      const _component_UiDialogHeader = _sfc_main$2$3;
      const _component_UiDialogTitle = _sfc_main$1$3;
      const _component_UiDialogDescription = _sfc_main$q;
      const _component_UiTable = _sfc_main$5$1;
      const _component_UiTableHeader = _sfc_main$u;
      const _component_UiTableRow = _sfc_main$2$4;
      const _component_UiTableHead = _sfc_main$1$4;
      const _component_UiTableBody = _sfc_main$4$2;
      const _component_UiTableCell = _sfc_main$3$3;
      const _component_UiDialogFooter = _sfc_main$s;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_UiDialog, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UiDialogTrigger, { "as-child": "" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UiButton, {
                    class: "h-7 w-7 gap-1",
                    size: "icon",
                    onClick: getDealHistory
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_Icon, {
                          name: "material-symbols:history-rounded",
                          color: "white",
                          size: "25px"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_Icon, {
                            name: "material-symbols:history-rounded",
                            color: "white",
                            size: "25px"
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UiButton, {
                      class: "h-7 w-7 gap-1",
                      size: "icon",
                      onClick: getDealHistory
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_Icon, {
                          name: "material-symbols:history-rounded",
                          color: "white",
                          size: "25px"
                        })
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
                              _push5(`\u0418\u0441\u0442\u043E\u0440\u0438\u044F \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u0439`);
                            } else {
                              return [
                                createTextVNode("\u0418\u0441\u0442\u043E\u0440\u0438\u044F \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u0439")
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
                              createTextVNode("\u0418\u0441\u0442\u043E\u0440\u0438\u044F \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u0439")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_UiDialogDescription)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`<div class="flex gap-4 max-h-[500px] overflow-y-scroll"${_scopeId2}>`);
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
                                          _push7(`\u0414\u0430\u0442\u0430`);
                                        } else {
                                          return [
                                            createTextVNode("\u0414\u0430\u0442\u0430")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(_component_UiTableHead, { class: "text-center" }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`\u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C`);
                                        } else {
                                          return [
                                            createTextVNode("\u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(_component_UiTableHead, { class: "text-left" }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`\u041A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0439`);
                                        } else {
                                          return [
                                            createTextVNode("\u041A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0439")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_UiTableHead, { class: "text-left" }, {
                                        default: withCtx(() => [
                                          createTextVNode("\u0414\u0430\u0442\u0430")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_UiTableHead, { class: "text-center" }, {
                                        default: withCtx(() => [
                                          createTextVNode("\u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_UiTableHead, { class: "text-left" }, {
                                        default: withCtx(() => [
                                          createTextVNode("\u041A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0439")
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
                                        createTextVNode("\u0414\u0430\u0442\u0430")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_UiTableHead, { class: "text-center" }, {
                                      default: withCtx(() => [
                                        createTextVNode("\u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_UiTableHead, { class: "text-left" }, {
                                      default: withCtx(() => [
                                        createTextVNode("\u041A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0439")
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
                              ssrRenderList(unref(dealHistory), (item) => {
                                _push5(ssrRenderComponent(_component_UiTableRow, {
                                  key: item.id
                                }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(ssrRenderComponent(_component_UiTableCell, { class: "whitespace-nowrap" }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`${ssrInterpolate(new Date(item.createdAt).toLocaleString("ru-RU"))}`);
                                          } else {
                                            return [
                                              createTextVNode(toDisplayString(new Date(item.createdAt).toLocaleString("ru-RU")), 1)
                                            ];
                                          }
                                        }),
                                        _: 2
                                      }, _parent6, _scopeId5));
                                      _push6(ssrRenderComponent(_component_UiTableCell, { class: "whitespace-nowrap text-center" }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`${ssrInterpolate(item.user.fullName)}`);
                                          } else {
                                            return [
                                              createTextVNode(toDisplayString(item.user.fullName), 1)
                                            ];
                                          }
                                        }),
                                        _: 2
                                      }, _parent6, _scopeId5));
                                      _push6(ssrRenderComponent(_component_UiTableCell, { class: "whitespace-nowrap" }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`${ssrInterpolate(item.comment)}`);
                                          } else {
                                            return [
                                              createTextVNode(toDisplayString(item.comment), 1)
                                            ];
                                          }
                                        }),
                                        _: 2
                                      }, _parent6, _scopeId5));
                                    } else {
                                      return [
                                        createVNode(_component_UiTableCell, { class: "whitespace-nowrap" }, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(new Date(item.createdAt).toLocaleString("ru-RU")), 1)
                                          ]),
                                          _: 2
                                        }, 1024),
                                        createVNode(_component_UiTableCell, { class: "whitespace-nowrap text-center" }, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(item.user.fullName), 1)
                                          ]),
                                          _: 2
                                        }, 1024),
                                        createVNode(_component_UiTableCell, { class: "whitespace-nowrap" }, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(item.comment), 1)
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
                              if (unref(dealHistory).length === 0) {
                                _push5(ssrRenderComponent(_component_UiTableRow, null, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(ssrRenderComponent(_component_UiTableCell, {
                                        colspan: "4",
                                        class: "text-center"
                                      }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`\u041D\u0435\u0442 \u0434\u0430\u043D\u043D\u044B\u0445 \u0434\u043B\u044F \u043E\u0442\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u044F`);
                                          } else {
                                            return [
                                              createTextVNode("\u041D\u0435\u0442 \u0434\u0430\u043D\u043D\u044B\u0445 \u0434\u043B\u044F \u043E\u0442\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u044F")
                                            ];
                                          }
                                        }),
                                        _: 1
                                      }, _parent6, _scopeId5));
                                    } else {
                                      return [
                                        createVNode(_component_UiTableCell, {
                                          colspan: "4",
                                          class: "text-center"
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode("\u041D\u0435\u0442 \u0434\u0430\u043D\u043D\u044B\u0445 \u0434\u043B\u044F \u043E\u0442\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u044F")
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
                                (openBlock(true), createBlock(Fragment, null, renderList(unref(dealHistory), (item) => {
                                  return openBlock(), createBlock(_component_UiTableRow, {
                                    key: item.id
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_UiTableCell, { class: "whitespace-nowrap" }, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(new Date(item.createdAt).toLocaleString("ru-RU")), 1)
                                        ]),
                                        _: 2
                                      }, 1024),
                                      createVNode(_component_UiTableCell, { class: "whitespace-nowrap text-center" }, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(item.user.fullName), 1)
                                        ]),
                                        _: 2
                                      }, 1024),
                                      createVNode(_component_UiTableCell, { class: "whitespace-nowrap" }, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(item.comment), 1)
                                        ]),
                                        _: 2
                                      }, 1024)
                                    ]),
                                    _: 2
                                  }, 1024);
                                }), 128)),
                                unref(dealHistory).length === 0 ? (openBlock(), createBlock(_component_UiTableRow, { key: 0 }, {
                                  default: withCtx(() => [
                                    createVNode(_component_UiTableCell, {
                                      colspan: "4",
                                      class: "text-center"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode("\u041D\u0435\u0442 \u0434\u0430\u043D\u043D\u044B\u0445 \u0434\u043B\u044F \u043E\u0442\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u044F")
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
                                  createVNode(_component_UiTableHead, { class: "text-left" }, {
                                    default: withCtx(() => [
                                      createTextVNode("\u0414\u0430\u0442\u0430")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_UiTableHead, { class: "text-center" }, {
                                    default: withCtx(() => [
                                      createTextVNode("\u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_UiTableHead, { class: "text-left" }, {
                                    default: withCtx(() => [
                                      createTextVNode("\u041A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0439")
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
                              (openBlock(true), createBlock(Fragment, null, renderList(unref(dealHistory), (item) => {
                                return openBlock(), createBlock(_component_UiTableRow, {
                                  key: item.id
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_UiTableCell, { class: "whitespace-nowrap" }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(new Date(item.createdAt).toLocaleString("ru-RU")), 1)
                                      ]),
                                      _: 2
                                    }, 1024),
                                    createVNode(_component_UiTableCell, { class: "whitespace-nowrap text-center" }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(item.user.fullName), 1)
                                      ]),
                                      _: 2
                                    }, 1024),
                                    createVNode(_component_UiTableCell, { class: "whitespace-nowrap" }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(item.comment), 1)
                                      ]),
                                      _: 2
                                    }, 1024)
                                  ]),
                                  _: 2
                                }, 1024);
                              }), 128)),
                              unref(dealHistory).length === 0 ? (openBlock(), createBlock(_component_UiTableRow, { key: 0 }, {
                                default: withCtx(() => [
                                  createVNode(_component_UiTableCell, {
                                    colspan: "4",
                                    class: "text-center"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode("\u041D\u0435\u0442 \u0434\u0430\u043D\u043D\u044B\u0445 \u0434\u043B\u044F \u043E\u0442\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u044F")
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
                  _push3(`</div>`);
                  _push3(ssrRenderComponent(_component_UiDialogFooter, null, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UiDialogHeader, null, {
                      default: withCtx(() => [
                        createVNode(_component_UiDialogTitle, null, {
                          default: withCtx(() => [
                            createTextVNode("\u0418\u0441\u0442\u043E\u0440\u0438\u044F \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u0439")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_UiDialogDescription)
                      ]),
                      _: 1
                    }),
                    createVNode("div", { class: "flex gap-4 max-h-[500px] overflow-y-scroll" }, [
                      createVNode(_component_UiTable, null, {
                        default: withCtx(() => [
                          createVNode(_component_UiTableHeader, null, {
                            default: withCtx(() => [
                              createVNode(_component_UiTableRow, null, {
                                default: withCtx(() => [
                                  createVNode(_component_UiTableHead, { class: "text-left" }, {
                                    default: withCtx(() => [
                                      createTextVNode("\u0414\u0430\u0442\u0430")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_UiTableHead, { class: "text-center" }, {
                                    default: withCtx(() => [
                                      createTextVNode("\u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_UiTableHead, { class: "text-left" }, {
                                    default: withCtx(() => [
                                      createTextVNode("\u041A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0439")
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
                              (openBlock(true), createBlock(Fragment, null, renderList(unref(dealHistory), (item) => {
                                return openBlock(), createBlock(_component_UiTableRow, {
                                  key: item.id
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_UiTableCell, { class: "whitespace-nowrap" }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(new Date(item.createdAt).toLocaleString("ru-RU")), 1)
                                      ]),
                                      _: 2
                                    }, 1024),
                                    createVNode(_component_UiTableCell, { class: "whitespace-nowrap text-center" }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(item.user.fullName), 1)
                                      ]),
                                      _: 2
                                    }, 1024),
                                    createVNode(_component_UiTableCell, { class: "whitespace-nowrap" }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(item.comment), 1)
                                      ]),
                                      _: 2
                                    }, 1024)
                                  ]),
                                  _: 2
                                }, 1024);
                              }), 128)),
                              unref(dealHistory).length === 0 ? (openBlock(), createBlock(_component_UiTableRow, { key: 0 }, {
                                default: withCtx(() => [
                                  createVNode(_component_UiTableCell, {
                                    colspan: "4",
                                    class: "text-center"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode("\u041D\u0435\u0442 \u0434\u0430\u043D\u043D\u044B\u0445 \u0434\u043B\u044F \u043E\u0442\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u044F")
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
                    createVNode(_component_UiDialogFooter)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UiDialogTrigger, { "as-child": "" }, {
                default: withCtx(() => [
                  createVNode(_component_UiButton, {
                    class: "h-7 w-7 gap-1",
                    size: "icon",
                    onClick: getDealHistory
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_Icon, {
                        name: "material-symbols:history-rounded",
                        color: "white",
                        size: "25px"
                      })
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
                          createTextVNode("\u0418\u0441\u0442\u043E\u0440\u0438\u044F \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u0439")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_UiDialogDescription)
                    ]),
                    _: 1
                  }),
                  createVNode("div", { class: "flex gap-4 max-h-[500px] overflow-y-scroll" }, [
                    createVNode(_component_UiTable, null, {
                      default: withCtx(() => [
                        createVNode(_component_UiTableHeader, null, {
                          default: withCtx(() => [
                            createVNode(_component_UiTableRow, null, {
                              default: withCtx(() => [
                                createVNode(_component_UiTableHead, { class: "text-left" }, {
                                  default: withCtx(() => [
                                    createTextVNode("\u0414\u0430\u0442\u0430")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_UiTableHead, { class: "text-center" }, {
                                  default: withCtx(() => [
                                    createTextVNode("\u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_UiTableHead, { class: "text-left" }, {
                                  default: withCtx(() => [
                                    createTextVNode("\u041A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0439")
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
                            (openBlock(true), createBlock(Fragment, null, renderList(unref(dealHistory), (item) => {
                              return openBlock(), createBlock(_component_UiTableRow, {
                                key: item.id
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_UiTableCell, { class: "whitespace-nowrap" }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(new Date(item.createdAt).toLocaleString("ru-RU")), 1)
                                    ]),
                                    _: 2
                                  }, 1024),
                                  createVNode(_component_UiTableCell, { class: "whitespace-nowrap text-center" }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(item.user.fullName), 1)
                                    ]),
                                    _: 2
                                  }, 1024),
                                  createVNode(_component_UiTableCell, { class: "whitespace-nowrap" }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(item.comment), 1)
                                    ]),
                                    _: 2
                                  }, 1024)
                                ]),
                                _: 2
                              }, 1024);
                            }), 128)),
                            unref(dealHistory).length === 0 ? (openBlock(), createBlock(_component_UiTableRow, { key: 0 }, {
                              default: withCtx(() => [
                                createVNode(_component_UiTableCell, {
                                  colspan: "4",
                                  class: "text-center"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("\u041D\u0435\u0442 \u0434\u0430\u043D\u043D\u044B\u0445 \u0434\u043B\u044F \u043E\u0442\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u044F")
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
                  createVNode(_component_UiDialogFooter)
                ]),
                _: 2
              }, 1024)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$b = _sfc_main$b.setup;
_sfc_main$b.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/my/deals/DealHistory.vue");
  return _sfc_setup$b ? _sfc_setup$b(props, ctx) : void 0;
};
const _sfc_main$a = /* @__PURE__ */ defineComponent({
  __name: "EditDealForm",
  __ssrInlineRender: true,
  props: {
    dealSubDatas: {},
    deal: {}
  },
  emits: ["dealDataChanged"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const categories = [
      "\u041F\u0440\u0435\u0434\u043B\u043E\u0436\u0435\u043D\u0438\u044F \u0443\u0441\u043B\u0443\u0433",
      "\u041E\u0431\u043E\u0440\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u0435 \u0434\u043B\u044F \u0431\u0438\u0437\u043D\u0435\u0441\u0430",
      "\u041C\u0435\u0431\u0435\u043B\u044C \u0438 \u0438\u043D\u0442\u0435\u0440\u044C\u0435\u0440"
    ];
    const courseTypes = [
      "\u0421\u0442\u0430\u0440\u0442",
      "\u0421\u0442\u0430\u0440\u0442 + \u041F\u0440\u043E\u0444\u0438\u043B\u044C\u043D\u044B\u0439",
      "\u0414\u043E\u043F. \u041F\u0440\u043E\u0444\u0438\u043B\u044C\u043D\u044B\u0439",
      "\u0427\u0430\u0441\u0442\u043D\u044B\u0439"
    ];
    const maketTypes = [
      "\u0414\u0438\u0437\u0430\u0439\u043D\u0435\u0440\u0441\u043A\u0438\u0439",
      "\u0417\u0430\u0433\u043E\u0442\u043E\u0432\u043A\u0430 \u0438\u0437 \u0431\u0430\u0437\u044B",
      "\u0420\u0435\u043A\u043B\u0430\u043C\u043D\u044B\u0439",
      "\u0412\u0438\u0437\u0443\u0430\u043B\u0438\u0437\u0430\u0442\u043E\u0440",
      "\u0418\u0437 \u0440\u0430\u0441\u0441\u044B\u043B\u043A\u0438"
    ];
    const disconts = ["\u0411\u0435\u0437 \u0441\u043A\u0438\u0434\u043A\u0438", "\u0416\u0435\u043B\u0442\u0430\u044F", "\u041E\u041F\u0422", "\u0420\u0430\u0441\u0441\u044B\u043B\u043A\u0430", "\u041A\u0440\u0430\u0441\u043D\u0430\u044F"];
    const dealData = ref({ ...props.deal });
    const emit = __emit;
    watch(
      dealData,
      () => {
        emit("dealDataChanged", dealData.value);
      },
      { deep: true }
    );
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UiCard = _sfc_main$3$1;
      const _component_UiCardHeader = _sfc_main$2$1;
      const _component_UiCardTitle = _sfc_main$1$1;
      const _component_UiSwitch = _sfc_main$A;
      const _component_UiLabel = _sfc_main$z;
      const _component_UiCardContent = _sfc_main$1$6;
      const _component_UiInput = _sfc_main$m;
      const _component_UiSelect = _sfc_main$7$1;
      const _component_UiSelectTrigger = _sfc_main$5$2;
      const _component_UiSelectValue = _sfc_main$6$1;
      const _component_UiSelectContent = _sfc_main$4$3;
      const _component_UiSelectGroup = _sfc_main$3$4;
      const _component_UiSelectItem = _sfc_main$2$5;
      const _component_MyCombobox = _sfc_main$B;
      _push(ssrRenderComponent(_component_UiCard, mergeProps({ class: "w-full" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UiCardHeader, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UiCardTitle, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="flex items-center justify-between"${_scopeId3}> \u0421\u0434\u0435\u043B\u043A\u0430 <div class="relative flex items-center space-x-2"${_scopeId3}>`);
                        _push4(ssrRenderComponent(_component_UiSwitch, {
                          id: "reservation",
                          checked: unref(dealData).reservation,
                          "onUpdate:checked": ($event) => unref(dealData).reservation = $event
                        }, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_UiLabel, { for: "reservation" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`\u0411\u0440\u043E\u043D\u044C`);
                            } else {
                              return [
                                createTextVNode("\u0411\u0440\u043E\u043D\u044C")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(`</div></div>`);
                      } else {
                        return [
                          createVNode("div", { class: "flex items-center justify-between" }, [
                            createTextVNode(" \u0421\u0434\u0435\u043B\u043A\u0430 "),
                            createVNode("div", { class: "relative flex items-center space-x-2" }, [
                              createVNode(_component_UiSwitch, {
                                id: "reservation",
                                checked: unref(dealData).reservation,
                                "onUpdate:checked": ($event) => unref(dealData).reservation = $event
                              }, null, 8, ["checked", "onUpdate:checked"]),
                              createVNode(_component_UiLabel, { for: "reservation" }, {
                                default: withCtx(() => [
                                  createTextVNode("\u0411\u0440\u043E\u043D\u044C")
                                ]),
                                _: 1
                              })
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
                      default: withCtx(() => [
                        createVNode("div", { class: "flex items-center justify-between" }, [
                          createTextVNode(" \u0421\u0434\u0435\u043B\u043A\u0430 "),
                          createVNode("div", { class: "relative flex items-center space-x-2" }, [
                            createVNode(_component_UiSwitch, {
                              id: "reservation",
                              checked: unref(dealData).reservation,
                              "onUpdate:checked": ($event) => unref(dealData).reservation = $event
                            }, null, 8, ["checked", "onUpdate:checked"]),
                            createVNode(_component_UiLabel, { for: "reservation" }, {
                              default: withCtx(() => [
                                createTextVNode("\u0411\u0440\u043E\u043D\u044C")
                              ]),
                              _: 1
                            })
                          ])
                        ])
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
                  _push3(`<div class="flex gap-4 w-full"${_scopeId2}><div class="flex flex-col gap-5 w-full"${_scopeId2}><div class="relative"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435`);
                      } else {
                        return [
                          createTextVNode("\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_UiInput, {
                    modelValue: unref(dealData).title,
                    "onUpdate:modelValue": ($event) => unref(dealData).title = $event,
                    placeholder: "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435",
                    class: "col-span-3"
                  }, null, _parent3, _scopeId2));
                  _push3(`</div><div class="relative"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`\u0414\u0430\u0442\u0430 \u043F\u0440\u043E\u0434\u0430\u0436\u0438`);
                      } else {
                        return [
                          createTextVNode("\u0414\u0430\u0442\u0430 \u043F\u0440\u043E\u0434\u0430\u0436\u0438")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_UiInput, {
                    modelValue: unref(dealData).saleDate,
                    "onUpdate:modelValue": ($event) => unref(dealData).saleDate = $event,
                    type: "date",
                    min: (/* @__PURE__ */ new Date()).toISOString().slice(0, 7) + "-01",
                    class: unref(dealData).saleDate ? "" : "outline-1 outline-rose-300"
                  }, null, _parent3, _scopeId2));
                  _push3(`</div><div class="relative"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`\u0421\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C`);
                      } else {
                        return [
                          createTextVNode("\u0421\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_UiInput, {
                    modelValue: unref(dealData).price,
                    "onUpdate:modelValue": ($event) => unref(dealData).price = $event,
                    type: "number",
                    placeholder: "\u0421\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C",
                    class: "col-span-3"
                  }, null, _parent3, _scopeId2));
                  _push3(`</div>`);
                  if (unref(dealData).groupId !== 16) {
                    _push3(`<div class="relative"${_scopeId2}>`);
                    if (unref(dealData).discont) {
                      _push3(ssrRenderComponent(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1" }, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(`\u0421\u043A\u0438\u0434\u043A\u0430`);
                          } else {
                            return [
                              createTextVNode("\u0421\u043A\u0438\u0434\u043A\u0430")
                            ];
                          }
                        }),
                        _: 1
                      }, _parent3, _scopeId2));
                    } else {
                      _push3(`<!---->`);
                    }
                    _push3(`<div class="${ssrRenderClass(
                      unref(dealData).discont ? "" : "outline-1 outline-rose-300 rounded-md"
                    )}"${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_UiSelect, {
                      modelValue: unref(dealData).discont,
                      "onUpdate:modelValue": ($event) => unref(dealData).discont = $event
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_UiSelectTrigger, null, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(_component_UiSelectValue, { placeholder: "\u0421\u043A\u0438\u0434\u043A\u0430" }, null, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(_component_UiSelectValue, { placeholder: "\u0421\u043A\u0438\u0434\u043A\u0430" })
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(_component_UiSelectContent, null, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`<!--[-->`);
                                ssrRenderList(disconts, (item, i) => {
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
                                  (openBlock(), createBlock(Fragment, null, renderList(disconts, (item, i) => {
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
                                createVNode(_component_UiSelectValue, { placeholder: "\u0421\u043A\u0438\u0434\u043A\u0430" })
                              ]),
                              _: 1
                            }),
                            createVNode(_component_UiSelectContent, null, {
                              default: withCtx(() => [
                                (openBlock(), createBlock(Fragment, null, renderList(disconts, (item, i) => {
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
                    _push3(`</div></div>`);
                  } else {
                    _push3(`<!---->`);
                  }
                  if (unref(dealData).groupId === 16) {
                    _push3(`<div class="relative"${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`\u0421\u043A\u0438\u0434\u043A\u0430`);
                        } else {
                          return [
                            createTextVNode("\u0421\u043A\u0438\u0434\u043A\u0430")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_component_UiInput, {
                      modelValue: unref(dealData).discontAmount,
                      "onUpdate:modelValue": ($event) => unref(dealData).discontAmount = $event,
                      type: "number",
                      placeholder: "\u0421\u043A\u0438\u0434\u043A\u0430",
                      class: unref(dealData).discontAmount ? "" : "outline-1 outline-rose-300"
                    }, null, _parent3, _scopeId2));
                    _push3(`</div>`);
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(`<div class="relative"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`\u0414\u0430\u0442\u0430 \u043F\u0440\u0435\u0437\u0435\u043D\u0442\u0430\u0446\u0438\u0438 \u043C\u0430\u043A\u0435\u0442\u0430`);
                      } else {
                        return [
                          createTextVNode("\u0414\u0430\u0442\u0430 \u043F\u0440\u0435\u0437\u0435\u043D\u0442\u0430\u0446\u0438\u0438 \u043C\u0430\u043A\u0435\u0442\u0430")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_UiInput, {
                    modelValue: unref(dealData).maketPresentation,
                    "onUpdate:modelValue": ($event) => unref(dealData).maketPresentation = $event,
                    type: "date",
                    placeholder: "dsad",
                    class: unref(dealData).maketPresentation ? "" : "outline-1 outline-rose-300"
                  }, null, _parent3, _scopeId2));
                  _push3(`</div>`);
                  if (unref(dealData).groupId !== 16) {
                    _push3(`<div class="relative"${_scopeId2}>`);
                    if (unref(dealData).maketType) {
                      _push3(ssrRenderComponent(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1" }, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(`\u0422\u0438\u043F \u043C\u0430\u043A\u0435\u0442\u0430`);
                          } else {
                            return [
                              createTextVNode("\u0422\u0438\u043F \u043C\u0430\u043A\u0435\u0442\u0430")
                            ];
                          }
                        }),
                        _: 1
                      }, _parent3, _scopeId2));
                    } else {
                      _push3(`<!---->`);
                    }
                    _push3(`<div class="${ssrRenderClass(
                      unref(dealData).maketType ? "" : "outline-1 outline-rose-300 rounded-md"
                    )}"${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_UiSelect, {
                      modelValue: unref(dealData).maketType,
                      "onUpdate:modelValue": ($event) => unref(dealData).maketType = $event
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_UiSelectTrigger, null, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(_component_UiSelectValue, { placeholder: "\u0422\u0438\u043F \u043C\u0430\u043A\u0435\u0442\u0430" }, null, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(_component_UiSelectValue, { placeholder: "\u0422\u0438\u043F \u043C\u0430\u043A\u0435\u0442\u0430" })
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(_component_UiSelectContent, null, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`<!--[-->`);
                                ssrRenderList(maketTypes, (item, i) => {
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
                                  (openBlock(), createBlock(Fragment, null, renderList(maketTypes, (item, i) => {
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
                                createVNode(_component_UiSelectValue, { placeholder: "\u0422\u0438\u043F \u043C\u0430\u043A\u0435\u0442\u0430" })
                              ]),
                              _: 1
                            }),
                            createVNode(_component_UiSelectContent, null, {
                              default: withCtx(() => [
                                (openBlock(), createBlock(Fragment, null, renderList(maketTypes, (item, i) => {
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
                    _push3(`</div></div>`);
                  } else {
                    _push3(`<!---->`);
                  }
                  if (unref(dealData).groupId === 16) {
                    _push3(`<div class="relative"${_scopeId2}>`);
                    if (unref(dealData).courseType) {
                      _push3(ssrRenderComponent(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1" }, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(`\u0422\u0438\u043F \u043A\u0443\u0440\u0441\u0430`);
                          } else {
                            return [
                              createTextVNode("\u0422\u0438\u043F \u043A\u0443\u0440\u0441\u0430")
                            ];
                          }
                        }),
                        _: 1
                      }, _parent3, _scopeId2));
                    } else {
                      _push3(`<!---->`);
                    }
                    _push3(`<div class="${ssrRenderClass(
                      unref(dealData).courseType ? "" : "outline-1 outline-rose-300 rounded-md"
                    )}"${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_UiSelect, {
                      modelValue: unref(dealData).courseType,
                      "onUpdate:modelValue": ($event) => unref(dealData).courseType = $event
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_UiSelectTrigger, null, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(_component_UiSelectValue, { placeholder: "\u0422\u0438\u043F \u043A\u0443\u0440\u0441\u0430" }, null, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(_component_UiSelectValue, { placeholder: "\u0422\u0438\u043F \u043A\u0443\u0440\u0441\u0430" })
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(_component_UiSelectContent, null, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`<!--[-->`);
                                ssrRenderList(courseTypes, (item, i) => {
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
                                  (openBlock(), createBlock(Fragment, null, renderList(courseTypes, (item, i) => {
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
                                createVNode(_component_UiSelectValue, { placeholder: "\u0422\u0438\u043F \u043A\u0443\u0440\u0441\u0430" })
                              ]),
                              _: 1
                            }),
                            createVNode(_component_UiSelectContent, null, {
                              default: withCtx(() => [
                                (openBlock(), createBlock(Fragment, null, renderList(courseTypes, (item, i) => {
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
                    _push3(`</div></div>`);
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(`<div class="relative"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`id \u043A\u0430\u0440\u0442\u043E\u0447\u043A\u0438 \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0441\u0442\u0432\u0430`);
                      } else {
                        return [
                          createTextVNode("id \u043A\u0430\u0440\u0442\u043E\u0447\u043A\u0438 \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0441\u0442\u0432\u0430")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_UiInput, {
                    modelValue: unref(dealData).card_id,
                    "onUpdate:modelValue": ($event) => unref(dealData).card_id = $event,
                    placeholder: "id \u043A\u0430\u0440\u0442\u043E\u0447\u043A\u0438 \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0441\u0442\u0432\u0430",
                    class: "col-span-3"
                  }, null, _parent3, _scopeId2));
                  _push3(`</div></div><div class="flex flex-col gap-5 w-full"${_scopeId2}><div class="relative"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`\u0421\u043F\u043E\u0441\u043E\u0431 \u0437\u0430\u043A\u0440\u044B\u0442\u0438\u044F`);
                      } else {
                        return [
                          createTextVNode("\u0421\u043F\u043E\u0441\u043E\u0431 \u0437\u0430\u043A\u0440\u044B\u0442\u0438\u044F")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_MyCombobox, {
                    items: _ctx.dealSubDatas.methods,
                    label: unref(dealData).clothingMethod,
                    onSelectedItem: (value) => unref(dealData).clothingMethod = value
                  }, null, _parent3, _scopeId2));
                  _push3(`</div><div class="relative"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`\u0418\u0441\u0442\u043E\u0447\u043D\u0438\u043A \u0441\u0434\u0435\u043B\u043A\u0438`);
                      } else {
                        return [
                          createTextVNode("\u0418\u0441\u0442\u043E\u0447\u043D\u0438\u043A \u0441\u0434\u0435\u043B\u043A\u0438")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_MyCombobox, {
                    items: _ctx.dealSubDatas.sources,
                    label: unref(dealData).source,
                    onSelectedItem: (value) => unref(dealData).source = value
                  }, null, _parent3, _scopeId2));
                  _push3(`</div><div class="relative"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`\u0422\u0415\u0413`);
                      } else {
                        return [
                          createTextVNode("\u0422\u0415\u0413")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_MyCombobox, {
                    items: _ctx.dealSubDatas.adTags,
                    label: unref(dealData).adTag,
                    onSelectedItem: (value) => unref(dealData).adTag = value
                  }, null, _parent3, _scopeId2));
                  _push3(`</div><div class="relative"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`\u0421\u0444\u0435\u0440\u0430`);
                      } else {
                        return [
                          createTextVNode("\u0421\u0444\u0435\u0440\u0430")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_MyCombobox, {
                    items: _ctx.dealSubDatas.spheres,
                    label: unref(dealData).sphere,
                    onSelectedItem: (value) => unref(dealData).sphere = value
                  }, null, _parent3, _scopeId2));
                  _push3(`</div><div class="relative"${_scopeId2}>`);
                  if (unref(dealData).city !== "") {
                    _push3(ssrRenderComponent(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`\u0413\u043E\u0440\u043E\u0434`);
                        } else {
                          return [
                            createTextVNode("\u0413\u043E\u0440\u043E\u0434")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(ssrRenderComponent(_component_UiInput, {
                    modelValue: unref(dealData).city,
                    "onUpdate:modelValue": ($event) => unref(dealData).city = $event,
                    placeholder: "\u0413\u043E\u0440\u043E\u0434",
                    class: "col-span-3"
                  }, null, _parent3, _scopeId2));
                  _push3(`</div><div class="relative"${_scopeId2}>`);
                  if (unref(dealData).region !== "") {
                    _push3(ssrRenderComponent(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`\u0420\u0435\u0433\u0438\u043E\u043D/\u041E\u0431\u043B\u0430\u0441\u0442\u044C`);
                        } else {
                          return [
                            createTextVNode("\u0420\u0435\u0433\u0438\u043E\u043D/\u041E\u0431\u043B\u0430\u0441\u0442\u044C")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(ssrRenderComponent(_component_UiInput, {
                    modelValue: unref(dealData).region,
                    "onUpdate:modelValue": ($event) => unref(dealData).region = $event,
                    placeholder: "\u0420\u0435\u0433\u0438\u043E\u043D/\u041E\u0431\u043B\u0430\u0441\u0442\u044C",
                    class: "col-span-3"
                  }, null, _parent3, _scopeId2));
                  _push3(`</div>`);
                  if (_ctx.deal.client.chatLink.includes("easyneon.amocrm.ru")) {
                    _push3(`<div class="relative"${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`\u041A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u044F`);
                        } else {
                          return [
                            createTextVNode("\u041A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u044F")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(`<div${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_UiSelect, {
                      modelValue: unref(dealData).category,
                      "onUpdate:modelValue": ($event) => unref(dealData).category = $event
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_UiSelectTrigger, null, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(_component_UiSelectValue, { placeholder: "\u041A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u044F" }, null, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(_component_UiSelectValue, { placeholder: "\u041A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u044F" })
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(_component_UiSelectContent, null, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`<!--[-->`);
                                ssrRenderList(categories, (item, i) => {
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
                                  (openBlock(), createBlock(Fragment, null, renderList(categories, (item, i) => {
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
                                createVNode(_component_UiSelectValue, { placeholder: "\u041A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u044F" })
                              ]),
                              _: 1
                            }),
                            createVNode(_component_UiSelectContent, null, {
                              default: withCtx(() => [
                                (openBlock(), createBlock(Fragment, null, renderList(categories, (item, i) => {
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
                    _push3(`</div></div>`);
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(`</div></div>`);
                } else {
                  return [
                    createVNode("div", { class: "flex gap-4 w-full" }, [
                      createVNode("div", { class: "flex flex-col gap-5 w-full" }, [
                        createVNode("div", { class: "relative" }, [
                          createVNode(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1" }, {
                            default: withCtx(() => [
                              createTextVNode("\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_UiInput, {
                            modelValue: unref(dealData).title,
                            "onUpdate:modelValue": ($event) => unref(dealData).title = $event,
                            placeholder: "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435",
                            class: "col-span-3"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        createVNode("div", { class: "relative" }, [
                          createVNode(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1" }, {
                            default: withCtx(() => [
                              createTextVNode("\u0414\u0430\u0442\u0430 \u043F\u0440\u043E\u0434\u0430\u0436\u0438")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_UiInput, {
                            modelValue: unref(dealData).saleDate,
                            "onUpdate:modelValue": ($event) => unref(dealData).saleDate = $event,
                            type: "date",
                            min: (/* @__PURE__ */ new Date()).toISOString().slice(0, 7) + "-01",
                            class: unref(dealData).saleDate ? "" : "outline-1 outline-rose-300"
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "min", "class"])
                        ]),
                        createVNode("div", { class: "relative" }, [
                          createVNode(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1" }, {
                            default: withCtx(() => [
                              createTextVNode("\u0421\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_UiInput, {
                            modelValue: unref(dealData).price,
                            "onUpdate:modelValue": ($event) => unref(dealData).price = $event,
                            type: "number",
                            placeholder: "\u0421\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C",
                            class: "col-span-3"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        unref(dealData).groupId !== 16 ? (openBlock(), createBlock("div", {
                          key: 0,
                          class: "relative"
                        }, [
                          unref(dealData).discont ? (openBlock(), createBlock(_component_UiLabel, {
                            key: 0,
                            class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1"
                          }, {
                            default: withCtx(() => [
                              createTextVNode("\u0421\u043A\u0438\u0434\u043A\u0430")
                            ]),
                            _: 1
                          })) : createCommentVNode("", true),
                          createVNode("div", {
                            class: unref(dealData).discont ? "" : "outline-1 outline-rose-300 rounded-md"
                          }, [
                            createVNode(_component_UiSelect, {
                              modelValue: unref(dealData).discont,
                              "onUpdate:modelValue": ($event) => unref(dealData).discont = $event
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_UiSelectTrigger, null, {
                                  default: withCtx(() => [
                                    createVNode(_component_UiSelectValue, { placeholder: "\u0421\u043A\u0438\u0434\u043A\u0430" })
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_UiSelectContent, null, {
                                  default: withCtx(() => [
                                    (openBlock(), createBlock(Fragment, null, renderList(disconts, (item, i) => {
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
                          ], 2)
                        ])) : createCommentVNode("", true),
                        unref(dealData).groupId === 16 ? (openBlock(), createBlock("div", {
                          key: 1,
                          class: "relative"
                        }, [
                          createVNode(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1" }, {
                            default: withCtx(() => [
                              createTextVNode("\u0421\u043A\u0438\u0434\u043A\u0430")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_UiInput, {
                            modelValue: unref(dealData).discontAmount,
                            "onUpdate:modelValue": ($event) => unref(dealData).discontAmount = $event,
                            type: "number",
                            placeholder: "\u0421\u043A\u0438\u0434\u043A\u0430",
                            class: unref(dealData).discontAmount ? "" : "outline-1 outline-rose-300"
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "class"])
                        ])) : createCommentVNode("", true),
                        createVNode("div", { class: "relative" }, [
                          createVNode(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap" }, {
                            default: withCtx(() => [
                              createTextVNode("\u0414\u0430\u0442\u0430 \u043F\u0440\u0435\u0437\u0435\u043D\u0442\u0430\u0446\u0438\u0438 \u043C\u0430\u043A\u0435\u0442\u0430")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_UiInput, {
                            modelValue: unref(dealData).maketPresentation,
                            "onUpdate:modelValue": ($event) => unref(dealData).maketPresentation = $event,
                            type: "date",
                            placeholder: "dsad",
                            class: unref(dealData).maketPresentation ? "" : "outline-1 outline-rose-300"
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "class"])
                        ]),
                        unref(dealData).groupId !== 16 ? (openBlock(), createBlock("div", {
                          key: 2,
                          class: "relative"
                        }, [
                          unref(dealData).maketType ? (openBlock(), createBlock(_component_UiLabel, {
                            key: 0,
                            class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1"
                          }, {
                            default: withCtx(() => [
                              createTextVNode("\u0422\u0438\u043F \u043C\u0430\u043A\u0435\u0442\u0430")
                            ]),
                            _: 1
                          })) : createCommentVNode("", true),
                          createVNode("div", {
                            class: unref(dealData).maketType ? "" : "outline-1 outline-rose-300 rounded-md"
                          }, [
                            createVNode(_component_UiSelect, {
                              modelValue: unref(dealData).maketType,
                              "onUpdate:modelValue": ($event) => unref(dealData).maketType = $event
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_UiSelectTrigger, null, {
                                  default: withCtx(() => [
                                    createVNode(_component_UiSelectValue, { placeholder: "\u0422\u0438\u043F \u043C\u0430\u043A\u0435\u0442\u0430" })
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_UiSelectContent, null, {
                                  default: withCtx(() => [
                                    (openBlock(), createBlock(Fragment, null, renderList(maketTypes, (item, i) => {
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
                          ], 2)
                        ])) : createCommentVNode("", true),
                        unref(dealData).groupId === 16 ? (openBlock(), createBlock("div", {
                          key: 3,
                          class: "relative"
                        }, [
                          unref(dealData).courseType ? (openBlock(), createBlock(_component_UiLabel, {
                            key: 0,
                            class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1"
                          }, {
                            default: withCtx(() => [
                              createTextVNode("\u0422\u0438\u043F \u043A\u0443\u0440\u0441\u0430")
                            ]),
                            _: 1
                          })) : createCommentVNode("", true),
                          createVNode("div", {
                            class: unref(dealData).courseType ? "" : "outline-1 outline-rose-300 rounded-md"
                          }, [
                            createVNode(_component_UiSelect, {
                              modelValue: unref(dealData).courseType,
                              "onUpdate:modelValue": ($event) => unref(dealData).courseType = $event
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_UiSelectTrigger, null, {
                                  default: withCtx(() => [
                                    createVNode(_component_UiSelectValue, { placeholder: "\u0422\u0438\u043F \u043A\u0443\u0440\u0441\u0430" })
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_UiSelectContent, null, {
                                  default: withCtx(() => [
                                    (openBlock(), createBlock(Fragment, null, renderList(courseTypes, (item, i) => {
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
                          ], 2)
                        ])) : createCommentVNode("", true),
                        createVNode("div", { class: "relative" }, [
                          createVNode(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1" }, {
                            default: withCtx(() => [
                              createTextVNode("id \u043A\u0430\u0440\u0442\u043E\u0447\u043A\u0438 \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0441\u0442\u0432\u0430")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_UiInput, {
                            modelValue: unref(dealData).card_id,
                            "onUpdate:modelValue": ($event) => unref(dealData).card_id = $event,
                            placeholder: "id \u043A\u0430\u0440\u0442\u043E\u0447\u043A\u0438 \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0441\u0442\u0432\u0430",
                            class: "col-span-3"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ])
                      ]),
                      createVNode("div", { class: "flex flex-col gap-5 w-full" }, [
                        createVNode("div", { class: "relative" }, [
                          createVNode(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1" }, {
                            default: withCtx(() => [
                              createTextVNode("\u0421\u043F\u043E\u0441\u043E\u0431 \u0437\u0430\u043A\u0440\u044B\u0442\u0438\u044F")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_MyCombobox, {
                            items: _ctx.dealSubDatas.methods,
                            label: unref(dealData).clothingMethod,
                            onSelectedItem: (value) => unref(dealData).clothingMethod = value
                          }, null, 8, ["items", "label", "onSelectedItem"])
                        ]),
                        createVNode("div", { class: "relative" }, [
                          createVNode(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1" }, {
                            default: withCtx(() => [
                              createTextVNode("\u0418\u0441\u0442\u043E\u0447\u043D\u0438\u043A \u0441\u0434\u0435\u043B\u043A\u0438")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_MyCombobox, {
                            items: _ctx.dealSubDatas.sources,
                            label: unref(dealData).source,
                            onSelectedItem: (value) => unref(dealData).source = value
                          }, null, 8, ["items", "label", "onSelectedItem"])
                        ]),
                        createVNode("div", { class: "relative" }, [
                          createVNode(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1" }, {
                            default: withCtx(() => [
                              createTextVNode("\u0422\u0415\u0413")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_MyCombobox, {
                            items: _ctx.dealSubDatas.adTags,
                            label: unref(dealData).adTag,
                            onSelectedItem: (value) => unref(dealData).adTag = value
                          }, null, 8, ["items", "label", "onSelectedItem"])
                        ]),
                        createVNode("div", { class: "relative" }, [
                          createVNode(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1" }, {
                            default: withCtx(() => [
                              createTextVNode("\u0421\u0444\u0435\u0440\u0430")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_MyCombobox, {
                            items: _ctx.dealSubDatas.spheres,
                            label: unref(dealData).sphere,
                            onSelectedItem: (value) => unref(dealData).sphere = value
                          }, null, 8, ["items", "label", "onSelectedItem"])
                        ]),
                        createVNode("div", { class: "relative" }, [
                          unref(dealData).city !== "" ? (openBlock(), createBlock(_component_UiLabel, {
                            key: 0,
                            class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1"
                          }, {
                            default: withCtx(() => [
                              createTextVNode("\u0413\u043E\u0440\u043E\u0434")
                            ]),
                            _: 1
                          })) : createCommentVNode("", true),
                          createVNode(_component_UiInput, {
                            modelValue: unref(dealData).city,
                            "onUpdate:modelValue": ($event) => unref(dealData).city = $event,
                            placeholder: "\u0413\u043E\u0440\u043E\u0434",
                            class: "col-span-3"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        createVNode("div", { class: "relative" }, [
                          unref(dealData).region !== "" ? (openBlock(), createBlock(_component_UiLabel, {
                            key: 0,
                            class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1"
                          }, {
                            default: withCtx(() => [
                              createTextVNode("\u0420\u0435\u0433\u0438\u043E\u043D/\u041E\u0431\u043B\u0430\u0441\u0442\u044C")
                            ]),
                            _: 1
                          })) : createCommentVNode("", true),
                          createVNode(_component_UiInput, {
                            modelValue: unref(dealData).region,
                            "onUpdate:modelValue": ($event) => unref(dealData).region = $event,
                            placeholder: "\u0420\u0435\u0433\u0438\u043E\u043D/\u041E\u0431\u043B\u0430\u0441\u0442\u044C",
                            class: "col-span-3"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        _ctx.deal.client.chatLink.includes("easyneon.amocrm.ru") ? (openBlock(), createBlock("div", {
                          key: 0,
                          class: "relative"
                        }, [
                          createVNode(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1" }, {
                            default: withCtx(() => [
                              createTextVNode("\u041A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u044F")
                            ]),
                            _: 1
                          }),
                          createVNode("div", null, [
                            createVNode(_component_UiSelect, {
                              modelValue: unref(dealData).category,
                              "onUpdate:modelValue": ($event) => unref(dealData).category = $event
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_UiSelectTrigger, null, {
                                  default: withCtx(() => [
                                    createVNode(_component_UiSelectValue, { placeholder: "\u041A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u044F" })
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_UiSelectContent, null, {
                                  default: withCtx(() => [
                                    (openBlock(), createBlock(Fragment, null, renderList(categories, (item, i) => {
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
                          ])
                        ])) : createCommentVNode("", true)
                      ])
                    ])
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
                      createVNode("div", { class: "flex items-center justify-between" }, [
                        createTextVNode(" \u0421\u0434\u0435\u043B\u043A\u0430 "),
                        createVNode("div", { class: "relative flex items-center space-x-2" }, [
                          createVNode(_component_UiSwitch, {
                            id: "reservation",
                            checked: unref(dealData).reservation,
                            "onUpdate:checked": ($event) => unref(dealData).reservation = $event
                          }, null, 8, ["checked", "onUpdate:checked"]),
                          createVNode(_component_UiLabel, { for: "reservation" }, {
                            default: withCtx(() => [
                              createTextVNode("\u0411\u0440\u043E\u043D\u044C")
                            ]),
                            _: 1
                          })
                        ])
                      ])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(_component_UiCardContent, null, {
                default: withCtx(() => [
                  createVNode("div", { class: "flex gap-4 w-full" }, [
                    createVNode("div", { class: "flex flex-col gap-5 w-full" }, [
                      createVNode("div", { class: "relative" }, [
                        createVNode(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1" }, {
                          default: withCtx(() => [
                            createTextVNode("\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_UiInput, {
                          modelValue: unref(dealData).title,
                          "onUpdate:modelValue": ($event) => unref(dealData).title = $event,
                          placeholder: "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435",
                          class: "col-span-3"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      createVNode("div", { class: "relative" }, [
                        createVNode(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1" }, {
                          default: withCtx(() => [
                            createTextVNode("\u0414\u0430\u0442\u0430 \u043F\u0440\u043E\u0434\u0430\u0436\u0438")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_UiInput, {
                          modelValue: unref(dealData).saleDate,
                          "onUpdate:modelValue": ($event) => unref(dealData).saleDate = $event,
                          type: "date",
                          min: (/* @__PURE__ */ new Date()).toISOString().slice(0, 7) + "-01",
                          class: unref(dealData).saleDate ? "" : "outline-1 outline-rose-300"
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "min", "class"])
                      ]),
                      createVNode("div", { class: "relative" }, [
                        createVNode(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1" }, {
                          default: withCtx(() => [
                            createTextVNode("\u0421\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_UiInput, {
                          modelValue: unref(dealData).price,
                          "onUpdate:modelValue": ($event) => unref(dealData).price = $event,
                          type: "number",
                          placeholder: "\u0421\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C",
                          class: "col-span-3"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      unref(dealData).groupId !== 16 ? (openBlock(), createBlock("div", {
                        key: 0,
                        class: "relative"
                      }, [
                        unref(dealData).discont ? (openBlock(), createBlock(_component_UiLabel, {
                          key: 0,
                          class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1"
                        }, {
                          default: withCtx(() => [
                            createTextVNode("\u0421\u043A\u0438\u0434\u043A\u0430")
                          ]),
                          _: 1
                        })) : createCommentVNode("", true),
                        createVNode("div", {
                          class: unref(dealData).discont ? "" : "outline-1 outline-rose-300 rounded-md"
                        }, [
                          createVNode(_component_UiSelect, {
                            modelValue: unref(dealData).discont,
                            "onUpdate:modelValue": ($event) => unref(dealData).discont = $event
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_UiSelectTrigger, null, {
                                default: withCtx(() => [
                                  createVNode(_component_UiSelectValue, { placeholder: "\u0421\u043A\u0438\u0434\u043A\u0430" })
                                ]),
                                _: 1
                              }),
                              createVNode(_component_UiSelectContent, null, {
                                default: withCtx(() => [
                                  (openBlock(), createBlock(Fragment, null, renderList(disconts, (item, i) => {
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
                        ], 2)
                      ])) : createCommentVNode("", true),
                      unref(dealData).groupId === 16 ? (openBlock(), createBlock("div", {
                        key: 1,
                        class: "relative"
                      }, [
                        createVNode(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1" }, {
                          default: withCtx(() => [
                            createTextVNode("\u0421\u043A\u0438\u0434\u043A\u0430")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_UiInput, {
                          modelValue: unref(dealData).discontAmount,
                          "onUpdate:modelValue": ($event) => unref(dealData).discontAmount = $event,
                          type: "number",
                          placeholder: "\u0421\u043A\u0438\u0434\u043A\u0430",
                          class: unref(dealData).discontAmount ? "" : "outline-1 outline-rose-300"
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "class"])
                      ])) : createCommentVNode("", true),
                      createVNode("div", { class: "relative" }, [
                        createVNode(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap" }, {
                          default: withCtx(() => [
                            createTextVNode("\u0414\u0430\u0442\u0430 \u043F\u0440\u0435\u0437\u0435\u043D\u0442\u0430\u0446\u0438\u0438 \u043C\u0430\u043A\u0435\u0442\u0430")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_UiInput, {
                          modelValue: unref(dealData).maketPresentation,
                          "onUpdate:modelValue": ($event) => unref(dealData).maketPresentation = $event,
                          type: "date",
                          placeholder: "dsad",
                          class: unref(dealData).maketPresentation ? "" : "outline-1 outline-rose-300"
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "class"])
                      ]),
                      unref(dealData).groupId !== 16 ? (openBlock(), createBlock("div", {
                        key: 2,
                        class: "relative"
                      }, [
                        unref(dealData).maketType ? (openBlock(), createBlock(_component_UiLabel, {
                          key: 0,
                          class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1"
                        }, {
                          default: withCtx(() => [
                            createTextVNode("\u0422\u0438\u043F \u043C\u0430\u043A\u0435\u0442\u0430")
                          ]),
                          _: 1
                        })) : createCommentVNode("", true),
                        createVNode("div", {
                          class: unref(dealData).maketType ? "" : "outline-1 outline-rose-300 rounded-md"
                        }, [
                          createVNode(_component_UiSelect, {
                            modelValue: unref(dealData).maketType,
                            "onUpdate:modelValue": ($event) => unref(dealData).maketType = $event
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_UiSelectTrigger, null, {
                                default: withCtx(() => [
                                  createVNode(_component_UiSelectValue, { placeholder: "\u0422\u0438\u043F \u043C\u0430\u043A\u0435\u0442\u0430" })
                                ]),
                                _: 1
                              }),
                              createVNode(_component_UiSelectContent, null, {
                                default: withCtx(() => [
                                  (openBlock(), createBlock(Fragment, null, renderList(maketTypes, (item, i) => {
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
                        ], 2)
                      ])) : createCommentVNode("", true),
                      unref(dealData).groupId === 16 ? (openBlock(), createBlock("div", {
                        key: 3,
                        class: "relative"
                      }, [
                        unref(dealData).courseType ? (openBlock(), createBlock(_component_UiLabel, {
                          key: 0,
                          class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1"
                        }, {
                          default: withCtx(() => [
                            createTextVNode("\u0422\u0438\u043F \u043A\u0443\u0440\u0441\u0430")
                          ]),
                          _: 1
                        })) : createCommentVNode("", true),
                        createVNode("div", {
                          class: unref(dealData).courseType ? "" : "outline-1 outline-rose-300 rounded-md"
                        }, [
                          createVNode(_component_UiSelect, {
                            modelValue: unref(dealData).courseType,
                            "onUpdate:modelValue": ($event) => unref(dealData).courseType = $event
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_UiSelectTrigger, null, {
                                default: withCtx(() => [
                                  createVNode(_component_UiSelectValue, { placeholder: "\u0422\u0438\u043F \u043A\u0443\u0440\u0441\u0430" })
                                ]),
                                _: 1
                              }),
                              createVNode(_component_UiSelectContent, null, {
                                default: withCtx(() => [
                                  (openBlock(), createBlock(Fragment, null, renderList(courseTypes, (item, i) => {
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
                        ], 2)
                      ])) : createCommentVNode("", true),
                      createVNode("div", { class: "relative" }, [
                        createVNode(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1" }, {
                          default: withCtx(() => [
                            createTextVNode("id \u043A\u0430\u0440\u0442\u043E\u0447\u043A\u0438 \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0441\u0442\u0432\u0430")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_UiInput, {
                          modelValue: unref(dealData).card_id,
                          "onUpdate:modelValue": ($event) => unref(dealData).card_id = $event,
                          placeholder: "id \u043A\u0430\u0440\u0442\u043E\u0447\u043A\u0438 \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0441\u0442\u0432\u0430",
                          class: "col-span-3"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ])
                    ]),
                    createVNode("div", { class: "flex flex-col gap-5 w-full" }, [
                      createVNode("div", { class: "relative" }, [
                        createVNode(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1" }, {
                          default: withCtx(() => [
                            createTextVNode("\u0421\u043F\u043E\u0441\u043E\u0431 \u0437\u0430\u043A\u0440\u044B\u0442\u0438\u044F")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_MyCombobox, {
                          items: _ctx.dealSubDatas.methods,
                          label: unref(dealData).clothingMethod,
                          onSelectedItem: (value) => unref(dealData).clothingMethod = value
                        }, null, 8, ["items", "label", "onSelectedItem"])
                      ]),
                      createVNode("div", { class: "relative" }, [
                        createVNode(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1" }, {
                          default: withCtx(() => [
                            createTextVNode("\u0418\u0441\u0442\u043E\u0447\u043D\u0438\u043A \u0441\u0434\u0435\u043B\u043A\u0438")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_MyCombobox, {
                          items: _ctx.dealSubDatas.sources,
                          label: unref(dealData).source,
                          onSelectedItem: (value) => unref(dealData).source = value
                        }, null, 8, ["items", "label", "onSelectedItem"])
                      ]),
                      createVNode("div", { class: "relative" }, [
                        createVNode(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1" }, {
                          default: withCtx(() => [
                            createTextVNode("\u0422\u0415\u0413")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_MyCombobox, {
                          items: _ctx.dealSubDatas.adTags,
                          label: unref(dealData).adTag,
                          onSelectedItem: (value) => unref(dealData).adTag = value
                        }, null, 8, ["items", "label", "onSelectedItem"])
                      ]),
                      createVNode("div", { class: "relative" }, [
                        createVNode(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1" }, {
                          default: withCtx(() => [
                            createTextVNode("\u0421\u0444\u0435\u0440\u0430")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_MyCombobox, {
                          items: _ctx.dealSubDatas.spheres,
                          label: unref(dealData).sphere,
                          onSelectedItem: (value) => unref(dealData).sphere = value
                        }, null, 8, ["items", "label", "onSelectedItem"])
                      ]),
                      createVNode("div", { class: "relative" }, [
                        unref(dealData).city !== "" ? (openBlock(), createBlock(_component_UiLabel, {
                          key: 0,
                          class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1"
                        }, {
                          default: withCtx(() => [
                            createTextVNode("\u0413\u043E\u0440\u043E\u0434")
                          ]),
                          _: 1
                        })) : createCommentVNode("", true),
                        createVNode(_component_UiInput, {
                          modelValue: unref(dealData).city,
                          "onUpdate:modelValue": ($event) => unref(dealData).city = $event,
                          placeholder: "\u0413\u043E\u0440\u043E\u0434",
                          class: "col-span-3"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      createVNode("div", { class: "relative" }, [
                        unref(dealData).region !== "" ? (openBlock(), createBlock(_component_UiLabel, {
                          key: 0,
                          class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1"
                        }, {
                          default: withCtx(() => [
                            createTextVNode("\u0420\u0435\u0433\u0438\u043E\u043D/\u041E\u0431\u043B\u0430\u0441\u0442\u044C")
                          ]),
                          _: 1
                        })) : createCommentVNode("", true),
                        createVNode(_component_UiInput, {
                          modelValue: unref(dealData).region,
                          "onUpdate:modelValue": ($event) => unref(dealData).region = $event,
                          placeholder: "\u0420\u0435\u0433\u0438\u043E\u043D/\u041E\u0431\u043B\u0430\u0441\u0442\u044C",
                          class: "col-span-3"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _ctx.deal.client.chatLink.includes("easyneon.amocrm.ru") ? (openBlock(), createBlock("div", {
                        key: 0,
                        class: "relative"
                      }, [
                        createVNode(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1" }, {
                          default: withCtx(() => [
                            createTextVNode("\u041A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u044F")
                          ]),
                          _: 1
                        }),
                        createVNode("div", null, [
                          createVNode(_component_UiSelect, {
                            modelValue: unref(dealData).category,
                            "onUpdate:modelValue": ($event) => unref(dealData).category = $event
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_UiSelectTrigger, null, {
                                default: withCtx(() => [
                                  createVNode(_component_UiSelectValue, { placeholder: "\u041A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u044F" })
                                ]),
                                _: 1
                              }),
                              createVNode(_component_UiSelectContent, null, {
                                default: withCtx(() => [
                                  (openBlock(), createBlock(Fragment, null, renderList(categories, (item, i) => {
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
                        ])
                      ])) : createCommentVNode("", true)
                    ])
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
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/my/deals/EditDealForm.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const _sfc_main$9 = /* @__PURE__ */ defineComponent({
  __name: "EditDealModal",
  __ssrInlineRender: true,
  props: {
    deal: {}
  },
  emits: ["isDealEdited", "isDealDeleted"],
  setup(__props, { emit: __emit }) {
    const { $useApi } = useNuxtApp();
    const props = __props;
    const defaultData = {
      adTags: [],
      methods: [],
      sources: [],
      spheres: []
    };
    const dealData = ref({ ...props.deal });
    const dealSubDatas = ref(defaultData);
    const isOpen = ref(false);
    const getDealSubDatas = async () => {
      const { data } = await $useApi.get("/deals/datas") || [];
      dealSubDatas.value = data;
      return;
    };
    const emit = __emit;
    const editDeal = async () => {
      try {
        await $useApi.patch(`/deals/${props.deal.id}`, {
          // method: 'patch',
          ...dealData.value
        });
        console.log(dealData.value);
        console.log("success!!");
        emit("isDealEdited");
        return isOpen.value = false;
      } catch (e) {
        console.log(e);
      }
    };
    const deleteDeal = async () => {
      try {
        await $useApi.delete(`/deals/${props.deal.id}`, {
          // method: 'delete',
        });
        console.log("success!!");
        emit("isDealDeleted");
        return isOpen.value = false;
      } catch (e) {
        console.log(e);
      }
    };
    const updateDealData = (data) => {
      dealData.value = { ...data };
      return;
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UiDialog = _sfc_main$4$1;
      const _component_UiDialogTrigger = _sfc_main$3$2;
      const _component_UiButton = _sfc_main$o;
      const _component_Icon = __nuxt_component_7;
      const _component_UiDialogContent = _sfc_main$p;
      const _component_UiDialogHeader = _sfc_main$2$3;
      const _component_UiDialogTitle = _sfc_main$1$3;
      const _component_UiDialogDescription = _sfc_main$q;
      const _component_MyDealsEditDealForm = _sfc_main$a;
      const _component_UiDialogFooter = _sfc_main$s;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_UiDialog, {
        open: unref(isOpen),
        "onUpdate:open": ($event) => isRef(isOpen) ? isOpen.value = $event : null
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UiDialogTrigger, { "as-child": "" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UiButton, {
                    class: "h-7 w-7 gap-1",
                    size: "icon",
                    onClick: getDealSubDatas
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_Icon, {
                          name: "mingcute:edit-line",
                          color: "white",
                          size: "25px"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_Icon, {
                            name: "mingcute:edit-line",
                            color: "white",
                            size: "25px"
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UiButton, {
                      class: "h-7 w-7 gap-1",
                      size: "icon",
                      onClick: getDealSubDatas
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_Icon, {
                          name: "mingcute:edit-line",
                          color: "white",
                          size: "25px"
                        })
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UiDialogContent, { class: "max-w-[700px] flex flex-col" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UiDialogHeader, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_UiDialogTitle, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435 \u0441\u0434\u0435\u043B\u043A\u0438`);
                            } else {
                              return [
                                createTextVNode("\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435 \u0441\u0434\u0435\u043B\u043A\u0438")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_UiDialogDescription, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` \u0417\u0430\u043F\u043E\u043B\u043D\u0438 \u0432\u0441\u0435 \u043F\u043E\u043B\u044F \u0438 \u043D\u0430\u0436\u043C\u0438 &quot;\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C&quot; `);
                            } else {
                              return [
                                createTextVNode(' \u0417\u0430\u043F\u043E\u043B\u043D\u0438 \u0432\u0441\u0435 \u043F\u043E\u043B\u044F \u0438 \u043D\u0430\u0436\u043C\u0438 "\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C" ')
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_UiDialogTitle, null, {
                            default: withCtx(() => [
                              createTextVNode("\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435 \u0441\u0434\u0435\u043B\u043A\u0438")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_UiDialogDescription, null, {
                            default: withCtx(() => [
                              createTextVNode(' \u0417\u0430\u043F\u043E\u043B\u043D\u0438 \u0432\u0441\u0435 \u043F\u043E\u043B\u044F \u0438 \u043D\u0430\u0436\u043C\u0438 "\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C" ')
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`<div class="flex gap-4"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_MyDealsEditDealForm, {
                    deal: _ctx.deal,
                    "deal-sub-datas": unref(dealSubDatas),
                    onDealDataChanged: updateDealData
                  }, null, _parent3, _scopeId2));
                  _push3(`</div>`);
                  _push3(ssrRenderComponent(_component_UiDialogFooter, { class: "w-full" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="flex justify-between w-full"${_scopeId3}>`);
                        _push4(ssrRenderComponent(_component_UiButton, { onClick: deleteDeal }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` \u0423\u0434\u0430\u043B\u0438\u0442\u044C `);
                            } else {
                              return [
                                createTextVNode(" \u0423\u0434\u0430\u043B\u0438\u0442\u044C ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_UiButton, { onClick: editDeal }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` \u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C `);
                            } else {
                              return [
                                createTextVNode(" \u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(`</div>`);
                      } else {
                        return [
                          createVNode("div", { class: "flex justify-between w-full" }, [
                            createVNode(_component_UiButton, { onClick: deleteDeal }, {
                              default: withCtx(() => [
                                createTextVNode(" \u0423\u0434\u0430\u043B\u0438\u0442\u044C ")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_UiButton, { onClick: editDeal }, {
                              default: withCtx(() => [
                                createTextVNode(" \u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C ")
                              ]),
                              _: 1
                            })
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
                            createTextVNode("\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435 \u0441\u0434\u0435\u043B\u043A\u0438")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_UiDialogDescription, null, {
                          default: withCtx(() => [
                            createTextVNode(' \u0417\u0430\u043F\u043E\u043B\u043D\u0438 \u0432\u0441\u0435 \u043F\u043E\u043B\u044F \u0438 \u043D\u0430\u0436\u043C\u0438 "\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C" ')
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode("div", { class: "flex gap-4" }, [
                      createVNode(_component_MyDealsEditDealForm, {
                        deal: _ctx.deal,
                        "deal-sub-datas": unref(dealSubDatas),
                        onDealDataChanged: updateDealData
                      }, null, 8, ["deal", "deal-sub-datas"])
                    ]),
                    createVNode(_component_UiDialogFooter, { class: "w-full" }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "flex justify-between w-full" }, [
                          createVNode(_component_UiButton, { onClick: deleteDeal }, {
                            default: withCtx(() => [
                              createTextVNode(" \u0423\u0434\u0430\u043B\u0438\u0442\u044C ")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_UiButton, { onClick: editDeal }, {
                            default: withCtx(() => [
                              createTextVNode(" \u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C ")
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
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UiDialogTrigger, { "as-child": "" }, {
                default: withCtx(() => [
                  createVNode(_component_UiButton, {
                    class: "h-7 w-7 gap-1",
                    size: "icon",
                    onClick: getDealSubDatas
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_Icon, {
                        name: "mingcute:edit-line",
                        color: "white",
                        size: "25px"
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(_component_UiDialogContent, { class: "max-w-[700px] flex flex-col" }, {
                default: withCtx(() => [
                  createVNode(_component_UiDialogHeader, null, {
                    default: withCtx(() => [
                      createVNode(_component_UiDialogTitle, null, {
                        default: withCtx(() => [
                          createTextVNode("\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435 \u0441\u0434\u0435\u043B\u043A\u0438")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_UiDialogDescription, null, {
                        default: withCtx(() => [
                          createTextVNode(' \u0417\u0430\u043F\u043E\u043B\u043D\u0438 \u0432\u0441\u0435 \u043F\u043E\u043B\u044F \u0438 \u043D\u0430\u0436\u043C\u0438 "\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C" ')
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode("div", { class: "flex gap-4" }, [
                    createVNode(_component_MyDealsEditDealForm, {
                      deal: _ctx.deal,
                      "deal-sub-datas": unref(dealSubDatas),
                      onDealDataChanged: updateDealData
                    }, null, 8, ["deal", "deal-sub-datas"])
                  ]),
                  createVNode(_component_UiDialogFooter, { class: "w-full" }, {
                    default: withCtx(() => [
                      createVNode("div", { class: "flex justify-between w-full" }, [
                        createVNode(_component_UiButton, { onClick: deleteDeal }, {
                          default: withCtx(() => [
                            createTextVNode(" \u0423\u0434\u0430\u043B\u0438\u0442\u044C ")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_UiButton, { onClick: editDeal }, {
                          default: withCtx(() => [
                            createTextVNode(" \u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C ")
                          ]),
                          _: 1
                        })
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
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/my/deals/EditDealModal.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const _sfc_main$8 = /* @__PURE__ */ defineComponent({
  __name: "Client",
  __ssrInlineRender: true,
  props: {
    client: {}
  },
  emits: ["clientDataChanged"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    ref(true);
    const defaultClient = { ...props.client };
    const clientData = ref(defaultClient);
    const emit = __emit;
    watch(
      clientData,
      () => {
        emit("clientDataChanged", clientData.value);
      },
      { deep: true }
    );
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UiCard = _sfc_main$3$1;
      const _component_UiCardHeader = _sfc_main$2$1;
      const _component_UiCardTitle = _sfc_main$1$1;
      const _component_UiCardContent = _sfc_main$1$6;
      const _component_UiLabel = _sfc_main$z;
      const _component_UiInput = _sfc_main$m;
      const _component_UiSelect = _sfc_main$7$1;
      const _component_UiSelectTrigger = _sfc_main$5$2;
      const _component_UiSelectValue = _sfc_main$6$1;
      const _component_UiSelectContent = _sfc_main$4$3;
      const _component_UiSelectGroup = _sfc_main$3$4;
      const _component_UiSelectItem = _sfc_main$2$5;
      const _component_UiSwitch = _sfc_main$A;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-full h-full" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_UiCard, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UiCardHeader, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UiCardTitle, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`\u041A\u043B\u0438\u0435\u043D\u0442`);
                      } else {
                        return [
                          createTextVNode("\u041A\u043B\u0438\u0435\u043D\u0442")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UiCardTitle, null, {
                      default: withCtx(() => [
                        createTextVNode("\u041A\u043B\u0438\u0435\u043D\u0442")
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
                  _push3(`<div class="flex flex-col gap-4"${_scopeId2}><div class="relative"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`\u0421\u0441\u044B\u043B\u043A\u0430 \u043D\u0430 \u0447\u0430\u0442`);
                      } else {
                        return [
                          createTextVNode("\u0421\u0441\u044B\u043B\u043A\u0430 \u043D\u0430 \u0447\u0430\u0442")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_UiInput, {
                    modelValue: unref(clientData).chatLink,
                    "onUpdate:modelValue": ($event) => unref(clientData).chatLink = $event,
                    placeholder: "\u0421\u0441\u044B\u043B\u043A\u0430 \u043D\u0430 \u0447\u0430\u0442",
                    class: "col-span-3"
                  }, null, _parent3, _scopeId2));
                  _push3(`</div><div class="relative"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`\u0424\u0418\u041E`);
                      } else {
                        return [
                          createTextVNode("\u0424\u0418\u041E")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_UiInput, {
                    modelValue: unref(clientData).fullName,
                    "onUpdate:modelValue": ($event) => unref(clientData).fullName = $event,
                    class: "col-span-3"
                  }, null, _parent3, _scopeId2));
                  _push3(`</div><div class="relative"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`\u0422\u0435\u043B\u0435\u0444\u043E\u043D`);
                      } else {
                        return [
                          createTextVNode("\u0422\u0435\u043B\u0435\u0444\u043E\u043D")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_UiInput, {
                    modelValue: unref(clientData).phone,
                    "onUpdate:modelValue": ($event) => unref(clientData).phone = $event,
                    placeholder: "\u0422\u0435\u043B\u0435\u0444\u043E\u043D",
                    class: "col-span-3"
                  }, null, _parent3, _scopeId2));
                  _push3(`</div><div class="relative"${_scopeId2}>`);
                  if (unref(clientData).adLink !== "") {
                    _push3(ssrRenderComponent(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`\u0421\u0441\u044B\u043B\u043A\u0430 \u043D\u0430 \u043E\u0431\u044A\u044F\u0432\u043B\u0435\u043D\u0438\u0435`);
                        } else {
                          return [
                            createTextVNode("\u0421\u0441\u044B\u043B\u043A\u0430 \u043D\u0430 \u043E\u0431\u044A\u044F\u0432\u043B\u0435\u043D\u0438\u0435")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(ssrRenderComponent(_component_UiInput, {
                    modelValue: unref(clientData).adLink,
                    "onUpdate:modelValue": ($event) => unref(clientData).adLink = $event,
                    placeholder: "\u0421\u0441\u044B\u043B\u043A\u0430 \u043D\u0430 \u043E\u0431\u044A\u044F\u0432\u043B\u0435\u043D\u0438\u0435",
                    class: "col-span-3"
                  }, null, _parent3, _scopeId2));
                  _push3(`</div><div class="relative"${_scopeId2}>`);
                  if (unref(clientData).inn !== "") {
                    _push3(ssrRenderComponent(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`\u0418\u041D\u041D`);
                        } else {
                          return [
                            createTextVNode("\u0418\u041D\u041D")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(ssrRenderComponent(_component_UiInput, {
                    modelValue: unref(clientData).inn,
                    "onUpdate:modelValue": ($event) => unref(clientData).inn = $event,
                    placeholder: "\u0418\u041D\u041D",
                    class: "col-span-3"
                  }, null, _parent3, _scopeId2));
                  _push3(`</div><div class="flex items-center justify-center gap-1 justify-left relative"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`\u0414\u0430\u0442\u0430 \u043F\u0435\u0440\u0432\u043E\u0433\u043E \u043A\u043E\u043D\u0442\u0430\u043A\u0442\u0430`);
                      } else {
                        return [
                          createTextVNode("\u0414\u0430\u0442\u0430 \u043F\u0435\u0440\u0432\u043E\u0433\u043E \u043A\u043E\u043D\u0442\u0430\u043A\u0442\u0430")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_UiInput, {
                    modelValue: unref(clientData).firstContact,
                    "onUpdate:modelValue": ($event) => unref(clientData).firstContact = $event,
                    type: "date",
                    class: unref(clientData).firstContact ? "" : "outline outline-1 outline-rose-300"
                  }, null, _parent3, _scopeId2));
                  _push3(`</div><div class="relative"${_scopeId2}>`);
                  if (unref(clientData).type) {
                    _push3(ssrRenderComponent(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`\u0422\u0438\u043F \u043A\u043B\u0438\u0435\u043D\u0442\u0430`);
                        } else {
                          return [
                            createTextVNode("\u0422\u0438\u043F \u043A\u043B\u0438\u0435\u043D\u0442\u0430")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(`<div${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_UiSelect, {
                    modelValue: unref(clientData).type,
                    "onUpdate:modelValue": ($event) => unref(clientData).type = $event
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_UiSelectTrigger, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_UiSelectValue, { placeholder: "\u0422\u0438\u043F \u043A\u043B\u0438\u0435\u043D\u0442\u0430" }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_UiSelectValue, { placeholder: "\u0422\u0438\u043F \u043A\u043B\u0438\u0435\u043D\u0442\u0430" })
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
                                    _push6(ssrRenderComponent(_component_UiSelectItem, { value: "\u0424\u0418\u0417" }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(` \u0424\u0418\u0417 `);
                                        } else {
                                          return [
                                            createTextVNode(" \u0424\u0418\u0417 ")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(_component_UiSelectItem, { value: "\u0418\u041F" }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(` \u0418\u041F `);
                                        } else {
                                          return [
                                            createTextVNode(" \u0418\u041F ")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(_component_UiSelectItem, { value: "\u041E\u041E\u041E" }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(` \u041E\u041E\u041E `);
                                        } else {
                                          return [
                                            createTextVNode(" \u041E\u041E\u041E ")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(_component_UiSelectItem, { value: "\u041D\u041A\u041E" }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(` \u041D\u041A\u041E `);
                                        } else {
                                          return [
                                            createTextVNode(" \u041D\u041A\u041E ")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_UiSelectItem, { value: "\u0424\u0418\u0417" }, {
                                        default: withCtx(() => [
                                          createTextVNode(" \u0424\u0418\u0417 ")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_UiSelectItem, { value: "\u0418\u041F" }, {
                                        default: withCtx(() => [
                                          createTextVNode(" \u0418\u041F ")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_UiSelectItem, { value: "\u041E\u041E\u041E" }, {
                                        default: withCtx(() => [
                                          createTextVNode(" \u041E\u041E\u041E ")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_UiSelectItem, { value: "\u041D\u041A\u041E" }, {
                                        default: withCtx(() => [
                                          createTextVNode(" \u041D\u041A\u041E ")
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
                                    createVNode(_component_UiSelectItem, { value: "\u0424\u0418\u0417" }, {
                                      default: withCtx(() => [
                                        createTextVNode(" \u0424\u0418\u0417 ")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_UiSelectItem, { value: "\u0418\u041F" }, {
                                      default: withCtx(() => [
                                        createTextVNode(" \u0418\u041F ")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_UiSelectItem, { value: "\u041E\u041E\u041E" }, {
                                      default: withCtx(() => [
                                        createTextVNode(" \u041E\u041E\u041E ")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_UiSelectItem, { value: "\u041D\u041A\u041E" }, {
                                      default: withCtx(() => [
                                        createTextVNode(" \u041D\u041A\u041E ")
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
                              createVNode(_component_UiSelectValue, { placeholder: "\u0422\u0438\u043F \u043A\u043B\u0438\u0435\u043D\u0442\u0430" })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_UiSelectContent, null, {
                            default: withCtx(() => [
                              createVNode(_component_UiSelectGroup, null, {
                                default: withCtx(() => [
                                  createVNode(_component_UiSelectItem, { value: "\u0424\u0418\u0417" }, {
                                    default: withCtx(() => [
                                      createTextVNode(" \u0424\u0418\u0417 ")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_UiSelectItem, { value: "\u0418\u041F" }, {
                                    default: withCtx(() => [
                                      createTextVNode(" \u0418\u041F ")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_UiSelectItem, { value: "\u041E\u041E\u041E" }, {
                                    default: withCtx(() => [
                                      createTextVNode(" \u041E\u041E\u041E ")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_UiSelectItem, { value: "\u041D\u041A\u041E" }, {
                                    default: withCtx(() => [
                                      createTextVNode(" \u041D\u041A\u041E ")
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
                  _push3(`</div></div><div class="relative"${_scopeId2}>`);
                  if (unref(clientData).gender) {
                    _push3(ssrRenderComponent(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`\u041F\u043E\u043B \u043A\u043B\u0438\u0435\u043D\u0442\u0430`);
                        } else {
                          return [
                            createTextVNode("\u041F\u043E\u043B \u043A\u043B\u0438\u0435\u043D\u0442\u0430")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(`<div${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_UiSelect, {
                    modelValue: unref(clientData).gender,
                    "onUpdate:modelValue": ($event) => unref(clientData).gender = $event
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_UiSelectTrigger, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_UiSelectValue, { placeholder: "\u041F\u043E\u043B \u043A\u043B\u0438\u0435\u043D\u0442\u0430" }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_UiSelectValue, { placeholder: "\u041F\u043E\u043B \u043A\u043B\u0438\u0435\u043D\u0442\u0430" })
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
                                    _push6(ssrRenderComponent(_component_UiSelectItem, { value: "M" }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(` \u041C\u0443\u0436\u0441\u043A\u043E\u0439 `);
                                        } else {
                                          return [
                                            createTextVNode(" \u041C\u0443\u0436\u0441\u043A\u043E\u0439 ")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(_component_UiSelectItem, { value: "F" }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(` \u0416\u0435\u043D\u0441\u043A\u0438\u0439 `);
                                        } else {
                                          return [
                                            createTextVNode(" \u0416\u0435\u043D\u0441\u043A\u0438\u0439 ")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(_component_UiSelectItem, { value: "IT" }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(` \u0425\u0417 `);
                                        } else {
                                          return [
                                            createTextVNode(" \u0425\u0417 ")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_UiSelectItem, { value: "M" }, {
                                        default: withCtx(() => [
                                          createTextVNode(" \u041C\u0443\u0436\u0441\u043A\u043E\u0439 ")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_UiSelectItem, { value: "F" }, {
                                        default: withCtx(() => [
                                          createTextVNode(" \u0416\u0435\u043D\u0441\u043A\u0438\u0439 ")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_UiSelectItem, { value: "IT" }, {
                                        default: withCtx(() => [
                                          createTextVNode(" \u0425\u0417 ")
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
                                    createVNode(_component_UiSelectItem, { value: "M" }, {
                                      default: withCtx(() => [
                                        createTextVNode(" \u041C\u0443\u0436\u0441\u043A\u043E\u0439 ")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_UiSelectItem, { value: "F" }, {
                                      default: withCtx(() => [
                                        createTextVNode(" \u0416\u0435\u043D\u0441\u043A\u0438\u0439 ")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_UiSelectItem, { value: "IT" }, {
                                      default: withCtx(() => [
                                        createTextVNode(" \u0425\u0417 ")
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
                              createVNode(_component_UiSelectValue, { placeholder: "\u041F\u043E\u043B \u043A\u043B\u0438\u0435\u043D\u0442\u0430" })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_UiSelectContent, null, {
                            default: withCtx(() => [
                              createVNode(_component_UiSelectGroup, null, {
                                default: withCtx(() => [
                                  createVNode(_component_UiSelectItem, { value: "M" }, {
                                    default: withCtx(() => [
                                      createTextVNode(" \u041C\u0443\u0436\u0441\u043A\u043E\u0439 ")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_UiSelectItem, { value: "F" }, {
                                    default: withCtx(() => [
                                      createTextVNode(" \u0416\u0435\u043D\u0441\u043A\u0438\u0439 ")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_UiSelectItem, { value: "IT" }, {
                                    default: withCtx(() => [
                                      createTextVNode(" \u0425\u0417 ")
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
                  _push3(`</div></div><div class="flex items-center space-x-2"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_UiSwitch, {
                    id: "reservation",
                    checked: unref(clientData).isRegular,
                    "onUpdate:checked": ($event) => unref(clientData).isRegular = $event
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_UiLabel, { for: "reservation" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`\u041F\u043E\u0441\u0442\u043E\u044F\u043D\u043D\u044B\u0439`);
                      } else {
                        return [
                          createTextVNode("\u041F\u043E\u0441\u0442\u043E\u044F\u043D\u043D\u044B\u0439")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div></div>`);
                } else {
                  return [
                    createVNode("div", { class: "flex flex-col gap-4" }, [
                      createVNode("div", { class: "relative" }, [
                        createVNode(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1" }, {
                          default: withCtx(() => [
                            createTextVNode("\u0421\u0441\u044B\u043B\u043A\u0430 \u043D\u0430 \u0447\u0430\u0442")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_UiInput, {
                          modelValue: unref(clientData).chatLink,
                          "onUpdate:modelValue": ($event) => unref(clientData).chatLink = $event,
                          placeholder: "\u0421\u0441\u044B\u043B\u043A\u0430 \u043D\u0430 \u0447\u0430\u0442",
                          class: "col-span-3"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      createVNode("div", { class: "relative" }, [
                        createVNode(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1" }, {
                          default: withCtx(() => [
                            createTextVNode("\u0424\u0418\u041E")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_UiInput, {
                          modelValue: unref(clientData).fullName,
                          "onUpdate:modelValue": ($event) => unref(clientData).fullName = $event,
                          class: "col-span-3"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      createVNode("div", { class: "relative" }, [
                        createVNode(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1" }, {
                          default: withCtx(() => [
                            createTextVNode("\u0422\u0435\u043B\u0435\u0444\u043E\u043D")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_UiInput, {
                          modelValue: unref(clientData).phone,
                          "onUpdate:modelValue": ($event) => unref(clientData).phone = $event,
                          placeholder: "\u0422\u0435\u043B\u0435\u0444\u043E\u043D",
                          class: "col-span-3"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      createVNode("div", { class: "relative" }, [
                        unref(clientData).adLink !== "" ? (openBlock(), createBlock(_component_UiLabel, {
                          key: 0,
                          class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1"
                        }, {
                          default: withCtx(() => [
                            createTextVNode("\u0421\u0441\u044B\u043B\u043A\u0430 \u043D\u0430 \u043E\u0431\u044A\u044F\u0432\u043B\u0435\u043D\u0438\u0435")
                          ]),
                          _: 1
                        })) : createCommentVNode("", true),
                        createVNode(_component_UiInput, {
                          modelValue: unref(clientData).adLink,
                          "onUpdate:modelValue": ($event) => unref(clientData).adLink = $event,
                          placeholder: "\u0421\u0441\u044B\u043B\u043A\u0430 \u043D\u0430 \u043E\u0431\u044A\u044F\u0432\u043B\u0435\u043D\u0438\u0435",
                          class: "col-span-3"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      createVNode("div", { class: "relative" }, [
                        unref(clientData).inn !== "" ? (openBlock(), createBlock(_component_UiLabel, {
                          key: 0,
                          class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1"
                        }, {
                          default: withCtx(() => [
                            createTextVNode("\u0418\u041D\u041D")
                          ]),
                          _: 1
                        })) : createCommentVNode("", true),
                        createVNode(_component_UiInput, {
                          modelValue: unref(clientData).inn,
                          "onUpdate:modelValue": ($event) => unref(clientData).inn = $event,
                          placeholder: "\u0418\u041D\u041D",
                          class: "col-span-3"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      createVNode("div", { class: "flex items-center justify-center gap-1 justify-left relative" }, [
                        createVNode(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1" }, {
                          default: withCtx(() => [
                            createTextVNode("\u0414\u0430\u0442\u0430 \u043F\u0435\u0440\u0432\u043E\u0433\u043E \u043A\u043E\u043D\u0442\u0430\u043A\u0442\u0430")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_UiInput, {
                          modelValue: unref(clientData).firstContact,
                          "onUpdate:modelValue": ($event) => unref(clientData).firstContact = $event,
                          type: "date",
                          class: unref(clientData).firstContact ? "" : "outline outline-1 outline-rose-300"
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "class"])
                      ]),
                      createVNode("div", { class: "relative" }, [
                        unref(clientData).type ? (openBlock(), createBlock(_component_UiLabel, {
                          key: 0,
                          class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1"
                        }, {
                          default: withCtx(() => [
                            createTextVNode("\u0422\u0438\u043F \u043A\u043B\u0438\u0435\u043D\u0442\u0430")
                          ]),
                          _: 1
                        })) : createCommentVNode("", true),
                        createVNode("div", null, [
                          createVNode(_component_UiSelect, {
                            modelValue: unref(clientData).type,
                            "onUpdate:modelValue": ($event) => unref(clientData).type = $event
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_UiSelectTrigger, null, {
                                default: withCtx(() => [
                                  createVNode(_component_UiSelectValue, { placeholder: "\u0422\u0438\u043F \u043A\u043B\u0438\u0435\u043D\u0442\u0430" })
                                ]),
                                _: 1
                              }),
                              createVNode(_component_UiSelectContent, null, {
                                default: withCtx(() => [
                                  createVNode(_component_UiSelectGroup, null, {
                                    default: withCtx(() => [
                                      createVNode(_component_UiSelectItem, { value: "\u0424\u0418\u0417" }, {
                                        default: withCtx(() => [
                                          createTextVNode(" \u0424\u0418\u0417 ")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_UiSelectItem, { value: "\u0418\u041F" }, {
                                        default: withCtx(() => [
                                          createTextVNode(" \u0418\u041F ")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_UiSelectItem, { value: "\u041E\u041E\u041E" }, {
                                        default: withCtx(() => [
                                          createTextVNode(" \u041E\u041E\u041E ")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_UiSelectItem, { value: "\u041D\u041A\u041E" }, {
                                        default: withCtx(() => [
                                          createTextVNode(" \u041D\u041A\u041E ")
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
                        ])
                      ]),
                      createVNode("div", { class: "relative" }, [
                        unref(clientData).gender ? (openBlock(), createBlock(_component_UiLabel, {
                          key: 0,
                          class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1"
                        }, {
                          default: withCtx(() => [
                            createTextVNode("\u041F\u043E\u043B \u043A\u043B\u0438\u0435\u043D\u0442\u0430")
                          ]),
                          _: 1
                        })) : createCommentVNode("", true),
                        createVNode("div", null, [
                          createVNode(_component_UiSelect, {
                            modelValue: unref(clientData).gender,
                            "onUpdate:modelValue": ($event) => unref(clientData).gender = $event
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_UiSelectTrigger, null, {
                                default: withCtx(() => [
                                  createVNode(_component_UiSelectValue, { placeholder: "\u041F\u043E\u043B \u043A\u043B\u0438\u0435\u043D\u0442\u0430" })
                                ]),
                                _: 1
                              }),
                              createVNode(_component_UiSelectContent, null, {
                                default: withCtx(() => [
                                  createVNode(_component_UiSelectGroup, null, {
                                    default: withCtx(() => [
                                      createVNode(_component_UiSelectItem, { value: "M" }, {
                                        default: withCtx(() => [
                                          createTextVNode(" \u041C\u0443\u0436\u0441\u043A\u043E\u0439 ")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_UiSelectItem, { value: "F" }, {
                                        default: withCtx(() => [
                                          createTextVNode(" \u0416\u0435\u043D\u0441\u043A\u0438\u0439 ")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_UiSelectItem, { value: "IT" }, {
                                        default: withCtx(() => [
                                          createTextVNode(" \u0425\u0417 ")
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
                        ])
                      ]),
                      createVNode("div", { class: "flex items-center space-x-2" }, [
                        createVNode(_component_UiSwitch, {
                          id: "reservation",
                          checked: unref(clientData).isRegular,
                          "onUpdate:checked": ($event) => unref(clientData).isRegular = $event
                        }, null, 8, ["checked", "onUpdate:checked"]),
                        createVNode(_component_UiLabel, { for: "reservation" }, {
                          default: withCtx(() => [
                            createTextVNode("\u041F\u043E\u0441\u0442\u043E\u044F\u043D\u043D\u044B\u0439")
                          ]),
                          _: 1
                        })
                      ])
                    ])
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
                      createTextVNode("\u041A\u043B\u0438\u0435\u043D\u0442")
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(_component_UiCardContent, null, {
                default: withCtx(() => [
                  createVNode("div", { class: "flex flex-col gap-4" }, [
                    createVNode("div", { class: "relative" }, [
                      createVNode(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1" }, {
                        default: withCtx(() => [
                          createTextVNode("\u0421\u0441\u044B\u043B\u043A\u0430 \u043D\u0430 \u0447\u0430\u0442")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_UiInput, {
                        modelValue: unref(clientData).chatLink,
                        "onUpdate:modelValue": ($event) => unref(clientData).chatLink = $event,
                        placeholder: "\u0421\u0441\u044B\u043B\u043A\u0430 \u043D\u0430 \u0447\u0430\u0442",
                        class: "col-span-3"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    createVNode("div", { class: "relative" }, [
                      createVNode(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1" }, {
                        default: withCtx(() => [
                          createTextVNode("\u0424\u0418\u041E")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_UiInput, {
                        modelValue: unref(clientData).fullName,
                        "onUpdate:modelValue": ($event) => unref(clientData).fullName = $event,
                        class: "col-span-3"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    createVNode("div", { class: "relative" }, [
                      createVNode(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1" }, {
                        default: withCtx(() => [
                          createTextVNode("\u0422\u0435\u043B\u0435\u0444\u043E\u043D")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_UiInput, {
                        modelValue: unref(clientData).phone,
                        "onUpdate:modelValue": ($event) => unref(clientData).phone = $event,
                        placeholder: "\u0422\u0435\u043B\u0435\u0444\u043E\u043D",
                        class: "col-span-3"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    createVNode("div", { class: "relative" }, [
                      unref(clientData).adLink !== "" ? (openBlock(), createBlock(_component_UiLabel, {
                        key: 0,
                        class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1"
                      }, {
                        default: withCtx(() => [
                          createTextVNode("\u0421\u0441\u044B\u043B\u043A\u0430 \u043D\u0430 \u043E\u0431\u044A\u044F\u0432\u043B\u0435\u043D\u0438\u0435")
                        ]),
                        _: 1
                      })) : createCommentVNode("", true),
                      createVNode(_component_UiInput, {
                        modelValue: unref(clientData).adLink,
                        "onUpdate:modelValue": ($event) => unref(clientData).adLink = $event,
                        placeholder: "\u0421\u0441\u044B\u043B\u043A\u0430 \u043D\u0430 \u043E\u0431\u044A\u044F\u0432\u043B\u0435\u043D\u0438\u0435",
                        class: "col-span-3"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    createVNode("div", { class: "relative" }, [
                      unref(clientData).inn !== "" ? (openBlock(), createBlock(_component_UiLabel, {
                        key: 0,
                        class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1"
                      }, {
                        default: withCtx(() => [
                          createTextVNode("\u0418\u041D\u041D")
                        ]),
                        _: 1
                      })) : createCommentVNode("", true),
                      createVNode(_component_UiInput, {
                        modelValue: unref(clientData).inn,
                        "onUpdate:modelValue": ($event) => unref(clientData).inn = $event,
                        placeholder: "\u0418\u041D\u041D",
                        class: "col-span-3"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    createVNode("div", { class: "flex items-center justify-center gap-1 justify-left relative" }, [
                      createVNode(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1" }, {
                        default: withCtx(() => [
                          createTextVNode("\u0414\u0430\u0442\u0430 \u043F\u0435\u0440\u0432\u043E\u0433\u043E \u043A\u043E\u043D\u0442\u0430\u043A\u0442\u0430")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_UiInput, {
                        modelValue: unref(clientData).firstContact,
                        "onUpdate:modelValue": ($event) => unref(clientData).firstContact = $event,
                        type: "date",
                        class: unref(clientData).firstContact ? "" : "outline outline-1 outline-rose-300"
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "class"])
                    ]),
                    createVNode("div", { class: "relative" }, [
                      unref(clientData).type ? (openBlock(), createBlock(_component_UiLabel, {
                        key: 0,
                        class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1"
                      }, {
                        default: withCtx(() => [
                          createTextVNode("\u0422\u0438\u043F \u043A\u043B\u0438\u0435\u043D\u0442\u0430")
                        ]),
                        _: 1
                      })) : createCommentVNode("", true),
                      createVNode("div", null, [
                        createVNode(_component_UiSelect, {
                          modelValue: unref(clientData).type,
                          "onUpdate:modelValue": ($event) => unref(clientData).type = $event
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_UiSelectTrigger, null, {
                              default: withCtx(() => [
                                createVNode(_component_UiSelectValue, { placeholder: "\u0422\u0438\u043F \u043A\u043B\u0438\u0435\u043D\u0442\u0430" })
                              ]),
                              _: 1
                            }),
                            createVNode(_component_UiSelectContent, null, {
                              default: withCtx(() => [
                                createVNode(_component_UiSelectGroup, null, {
                                  default: withCtx(() => [
                                    createVNode(_component_UiSelectItem, { value: "\u0424\u0418\u0417" }, {
                                      default: withCtx(() => [
                                        createTextVNode(" \u0424\u0418\u0417 ")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_UiSelectItem, { value: "\u0418\u041F" }, {
                                      default: withCtx(() => [
                                        createTextVNode(" \u0418\u041F ")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_UiSelectItem, { value: "\u041E\u041E\u041E" }, {
                                      default: withCtx(() => [
                                        createTextVNode(" \u041E\u041E\u041E ")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_UiSelectItem, { value: "\u041D\u041A\u041E" }, {
                                      default: withCtx(() => [
                                        createTextVNode(" \u041D\u041A\u041E ")
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
                      ])
                    ]),
                    createVNode("div", { class: "relative" }, [
                      unref(clientData).gender ? (openBlock(), createBlock(_component_UiLabel, {
                        key: 0,
                        class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1"
                      }, {
                        default: withCtx(() => [
                          createTextVNode("\u041F\u043E\u043B \u043A\u043B\u0438\u0435\u043D\u0442\u0430")
                        ]),
                        _: 1
                      })) : createCommentVNode("", true),
                      createVNode("div", null, [
                        createVNode(_component_UiSelect, {
                          modelValue: unref(clientData).gender,
                          "onUpdate:modelValue": ($event) => unref(clientData).gender = $event
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_UiSelectTrigger, null, {
                              default: withCtx(() => [
                                createVNode(_component_UiSelectValue, { placeholder: "\u041F\u043E\u043B \u043A\u043B\u0438\u0435\u043D\u0442\u0430" })
                              ]),
                              _: 1
                            }),
                            createVNode(_component_UiSelectContent, null, {
                              default: withCtx(() => [
                                createVNode(_component_UiSelectGroup, null, {
                                  default: withCtx(() => [
                                    createVNode(_component_UiSelectItem, { value: "M" }, {
                                      default: withCtx(() => [
                                        createTextVNode(" \u041C\u0443\u0436\u0441\u043A\u043E\u0439 ")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_UiSelectItem, { value: "F" }, {
                                      default: withCtx(() => [
                                        createTextVNode(" \u0416\u0435\u043D\u0441\u043A\u0438\u0439 ")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_UiSelectItem, { value: "IT" }, {
                                      default: withCtx(() => [
                                        createTextVNode(" \u0425\u0417 ")
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
                      ])
                    ]),
                    createVNode("div", { class: "flex items-center space-x-2" }, [
                      createVNode(_component_UiSwitch, {
                        id: "reservation",
                        checked: unref(clientData).isRegular,
                        "onUpdate:checked": ($event) => unref(clientData).isRegular = $event
                      }, null, 8, ["checked", "onUpdate:checked"]),
                      createVNode(_component_UiLabel, { for: "reservation" }, {
                        default: withCtx(() => [
                          createTextVNode("\u041F\u043E\u0441\u0442\u043E\u044F\u043D\u043D\u044B\u0439")
                        ]),
                        _: 1
                      })
                    ])
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
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/my/clients/Client.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  __name: "EditClient",
  __ssrInlineRender: true,
  props: {
    client: {}
  },
  emits: ["isClientEdited"],
  setup(__props, { emit: __emit }) {
    const { $useApi } = useNuxtApp();
    const props = __props;
    const clientData = ref({ ...props.client });
    const isOpen = ref(false);
    const updateClientData = (data) => {
      clientData.value = { ...data };
      return;
    };
    const emit = __emit;
    const editClient = async () => {
      try {
        await $useApi.patch(`/clients/${props.client.id}`, clientData.value);
        console.log(clientData.value);
        console.log("success!!");
        emit("isClientEdited");
        return isOpen.value = false;
      } catch (e) {
        console.log(e);
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UiDialog = _sfc_main$4$1;
      const _component_UiDialogTrigger = _sfc_main$3$2;
      const _component_UiButton = _sfc_main$o;
      const _component_Icon = __nuxt_component_7;
      const _component_UiDialogContent = _sfc_main$p;
      const _component_UiDialogHeader = _sfc_main$2$3;
      const _component_UiDialogTitle = _sfc_main$1$3;
      const _component_UiDialogDescription = _sfc_main$q;
      const _component_MyClientsClient = _sfc_main$8;
      const _component_UiDialogFooter = _sfc_main$s;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_UiDialog, {
        open: unref(isOpen),
        "onUpdate:open": ($event) => isRef(isOpen) ? isOpen.value = $event : null
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UiDialogTrigger, { "as-child": "" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UiButton, {
                    size: "icon",
                    class: "h-5 w-5 gap-1"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_Icon, {
                          name: "mingcute:edit-line",
                          color: "white",
                          size: "15px"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_Icon, {
                            name: "mingcute:edit-line",
                            color: "white",
                            size: "15px"
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UiButton, {
                      size: "icon",
                      class: "h-5 w-5 gap-1"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_Icon, {
                          name: "mingcute:edit-line",
                          color: "white",
                          size: "15px"
                        })
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
                              _push5(`\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435 \u043A\u043B\u0438\u0435\u043D\u0442\u0430`);
                            } else {
                              return [
                                createTextVNode("\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435 \u043A\u043B\u0438\u0435\u043D\u0442\u0430")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_UiDialogDescription, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` \u0417\u0430\u043F\u043E\u043B\u043D\u0438 \u0432\u0441\u0435 \u043F\u043E\u043B\u044F \u0438 \u043D\u0430\u0436\u043C\u0438 &quot;\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C&quot; `);
                            } else {
                              return [
                                createTextVNode(' \u0417\u0430\u043F\u043E\u043B\u043D\u0438 \u0432\u0441\u0435 \u043F\u043E\u043B\u044F \u0438 \u043D\u0430\u0436\u043C\u0438 "\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C" ')
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_UiDialogTitle, null, {
                            default: withCtx(() => [
                              createTextVNode("\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435 \u043A\u043B\u0438\u0435\u043D\u0442\u0430")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_UiDialogDescription, null, {
                            default: withCtx(() => [
                              createTextVNode(' \u0417\u0430\u043F\u043E\u043B\u043D\u0438 \u0432\u0441\u0435 \u043F\u043E\u043B\u044F \u0438 \u043D\u0430\u0436\u043C\u0438 "\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C" ')
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`<div class="flex gap-4"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_MyClientsClient, {
                    client: _ctx.client,
                    onClientDataChanged: updateClientData
                  }, null, _parent3, _scopeId2));
                  _push3(`</div>`);
                  _push3(ssrRenderComponent(_component_UiDialogFooter, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_UiButton, { onClick: editClient }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` \u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C `);
                            } else {
                              return [
                                createTextVNode(" \u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_UiButton, { onClick: editClient }, {
                            default: withCtx(() => [
                              createTextVNode(" \u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C ")
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
                    createVNode(_component_UiDialogHeader, null, {
                      default: withCtx(() => [
                        createVNode(_component_UiDialogTitle, null, {
                          default: withCtx(() => [
                            createTextVNode("\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435 \u043A\u043B\u0438\u0435\u043D\u0442\u0430")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_UiDialogDescription, null, {
                          default: withCtx(() => [
                            createTextVNode(' \u0417\u0430\u043F\u043E\u043B\u043D\u0438 \u0432\u0441\u0435 \u043F\u043E\u043B\u044F \u0438 \u043D\u0430\u0436\u043C\u0438 "\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C" ')
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode("div", { class: "flex gap-4" }, [
                      createVNode(_component_MyClientsClient, {
                        client: _ctx.client,
                        onClientDataChanged: updateClientData
                      }, null, 8, ["client"])
                    ]),
                    createVNode(_component_UiDialogFooter, null, {
                      default: withCtx(() => [
                        createVNode(_component_UiButton, { onClick: editClient }, {
                          default: withCtx(() => [
                            createTextVNode(" \u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C ")
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
          } else {
            return [
              createVNode(_component_UiDialogTrigger, { "as-child": "" }, {
                default: withCtx(() => [
                  createVNode(_component_UiButton, {
                    size: "icon",
                    class: "h-5 w-5 gap-1"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_Icon, {
                        name: "mingcute:edit-line",
                        color: "white",
                        size: "15px"
                      })
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
                          createTextVNode("\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435 \u043A\u043B\u0438\u0435\u043D\u0442\u0430")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_UiDialogDescription, null, {
                        default: withCtx(() => [
                          createTextVNode(' \u0417\u0430\u043F\u043E\u043B\u043D\u0438 \u0432\u0441\u0435 \u043F\u043E\u043B\u044F \u0438 \u043D\u0430\u0436\u043C\u0438 "\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C" ')
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode("div", { class: "flex gap-4" }, [
                    createVNode(_component_MyClientsClient, {
                      client: _ctx.client,
                      onClientDataChanged: updateClientData
                    }, null, 8, ["client"])
                  ]),
                  createVNode(_component_UiDialogFooter, null, {
                    default: withCtx(() => [
                      createVNode(_component_UiButton, { onClick: editClient }, {
                        default: withCtx(() => [
                          createTextVNode(" \u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C ")
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
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/my/clients/EditClient.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "AddDealerModal",
  __ssrInlineRender: true,
  props: {
    deal: {}
  },
  emits: ["isDealerAdded"],
  setup(__props, { emit: __emit }) {
    var _a;
    const { $useApi } = useNuxtApp();
    const props = __props;
    const isOpen = ref(false);
    const managers = ref([]);
    const dealersList = ref(
      ((_a = props.deal.dealers) == null ? void 0 : _a.length) ? [...props.deal.dealers] : []
    );
    const errorMessage = ref(null);
    const emit = __emit;
    const getManagers = async () => {
      const { data } = await $useApi.get("/managers") || [];
      managers.value = data || [];
    };
    const addNewDealer = () => {
      dealersList.value.push({
        id: 0,
        // Временный ID, будет заменен сервером
        dealId: props.deal.id,
        userId: 0,
        // По умолчанию первый менеджер
        price: 0
        // Начальная стоимость
      });
    };
    const removeDealer = (index) => {
      dealersList.value.splice(index, 1);
      errorMessage.value = null;
    };
    const updateDealers = async () => {
      console.log(dealersList.value);
      try {
        const hasInvalidPrice = dealersList.value.some(
          (dealer) => dealer.price <= 0
        );
        if (hasInvalidPrice) {
          errorMessage.value = "\u0421\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C \u043D\u0435 \u043C\u043E\u0436\u0435\u0442 \u0431\u044B\u0442\u044C \u043C\u0435\u043D\u044C\u0448\u0435 \u0438\u043B\u0438 \u0440\u0430\u0432\u043D\u0430 \u043D\u0443\u043B\u044E.";
          return;
        }
        const hasInvalidUserId = dealersList.value.some(
          (dealer) => dealer.userId === 0
        );
        if (hasInvalidUserId) {
          errorMessage.value = "\u041D\u0435 \u0432\u044B\u0431\u0440\u0430\u043D \u043C\u0435\u043D\u0435\u0434\u0436\u0435\u0440.";
          return;
        }
        const userIds = dealersList.value.map((d) => d.userId);
        const hasDuplicates = new Set(userIds).size !== userIds.length;
        if (hasDuplicates) {
          errorMessage.value = "\u041D\u0435 \u0434\u043E\u043B\u0436\u043D\u043E \u0431\u044B\u0442\u044C \u043E\u0434\u0438\u043D\u0430\u043A\u043E\u0432\u044B\u0445 \u043C\u0435\u043D\u0435\u0434\u0436\u0435\u0440\u043E\u0432.";
          return;
        }
        const totalDealersPrice = dealersList.value.reduce(
          (a, b) => a + (b.price || 0),
          0
        );
        const dealPrice = props.deal.price || 0;
        if (totalDealersPrice !== dealPrice) {
          errorMessage.value = `\u0421\u0443\u043C\u043C\u0430 (${totalDealersPrice}) \u043D\u0435 \u0440\u0430\u0432\u043D\u0430 \u0441\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u0438 \u0441\u0434\u0435\u043B\u043A\u0438 (${dealPrice}).`;
          return;
        }
        const updatedDealers = dealersList.value.map((dealer, i) => ({
          id: dealer.id,
          userId: dealer.userId,
          price: dealer.price,
          dealId: props.deal.id,
          idx: i
        }));
        const { data } = await $useApi.patch(`/deals/${props.deal.id}/dealers`, {
          dealers: updatedDealers
        });
        console.log("Dealers updated:", data);
        dealersList.value = data.dealers;
        emit("isDealerAdded");
        isOpen.value = false;
        errorMessage.value = null;
      } catch (error) {
        console.error("Error updating dealers:", error);
        errorMessage.value = "\u041E\u0448\u0438\u0431\u043A\u0430 \u043F\u0440\u0438 \u0441\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u0438\u0438 \u0434\u0438\u043B\u0435\u0440\u043E\u0432.";
      }
    };
    watch(
      dealersList,
      () => {
        if (dealersList.value.length === 1) {
          dealersList.value[0].price = props.deal.price;
        }
        console.log(dealersList.value);
      },
      { deep: true }
    );
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UiDialog = _sfc_main$4$1;
      const _component_UiDialogTrigger = _sfc_main$3$2;
      const _component_UiButton = _sfc_main$o;
      const _component_Icon = __nuxt_component_7;
      const _component_UiDialogContent = _sfc_main$p;
      const _component_UiDialogHeader = _sfc_main$2$3;
      const _component_UiDialogTitle = _sfc_main$1$3;
      const _component_UiCard = _sfc_main$3$1;
      const _component_UiCardHeader = _sfc_main$2$1;
      const _component_UiCardTitle = _sfc_main$1$1;
      const _component_UiCardDescription = _sfc_main$k;
      const _component_UiCardContent = _sfc_main$1$6;
      const _component_UiLabel = _sfc_main$z;
      const _component_MyComboboxModels = _sfc_main$r;
      const _component_UiInput = _sfc_main$m;
      const _component_UiSeparator = _sfc_main$v;
      const _component_UiDialogFooter = _sfc_main$s;
      _push(ssrRenderComponent(_component_UiDialog, mergeProps({
        open: unref(isOpen),
        "onUpdate:open": ($event) => isRef(isOpen) ? isOpen.value = $event : null
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UiDialogTrigger, { "as-child": "" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UiButton, {
                    class: "h-5 w-5 px-0 py-2",
                    onClick: getManagers
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_Icon, {
                          name: "mingcute:edit-line",
                          color: "white",
                          size: "15px"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_Icon, {
                            name: "mingcute:edit-line",
                            color: "white",
                            size: "15px"
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UiButton, {
                      class: "h-5 w-5 px-0 py-2",
                      onClick: getManagers
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_Icon, {
                          name: "mingcute:edit-line",
                          color: "white",
                          size: "15px"
                        })
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
                              _push5(`\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u0443\u0447\u0430\u0441\u0442\u043D\u0438\u043A\u043E\u0432`);
                            } else {
                              return [
                                createTextVNode("\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u0443\u0447\u0430\u0441\u0442\u043D\u0438\u043A\u043E\u0432")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_UiDialogTitle, null, {
                            default: withCtx(() => [
                              createTextVNode("\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u0443\u0447\u0430\u0441\u0442\u043D\u0438\u043A\u043E\u0432")
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`<div class="flex gap-4"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_UiCard, { class: "w-full" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_UiCardHeader, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_UiCardTitle, null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`\u0423\u0447\u0430\u0441\u0442\u043D\u0438\u043A\u0438`);
                                  } else {
                                    return [
                                      createTextVNode("\u0423\u0447\u0430\u0441\u0442\u043D\u0438\u043A\u0438")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_UiCardDescription, null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`\u0423\u043F\u0440\u0430\u0432\u043B\u044F\u0439\u0442\u0435 \u0441\u043F\u0438\u0441\u043A\u043E\u043C \u0434\u0438\u043B\u0435\u0440\u043E\u0432`);
                                  } else {
                                    return [
                                      createTextVNode("\u0423\u043F\u0440\u0430\u0432\u043B\u044F\u0439\u0442\u0435 \u0441\u043F\u0438\u0441\u043A\u043E\u043C \u0434\u0438\u043B\u0435\u0440\u043E\u0432")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_UiCardTitle, null, {
                                  default: withCtx(() => [
                                    createTextVNode("\u0423\u0447\u0430\u0441\u0442\u043D\u0438\u043A\u0438")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_UiCardDescription, null, {
                                  default: withCtx(() => [
                                    createTextVNode("\u0423\u043F\u0440\u0430\u0432\u043B\u044F\u0439\u0442\u0435 \u0441\u043F\u0438\u0441\u043A\u043E\u043C \u0434\u0438\u043B\u0435\u0440\u043E\u0432")
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_UiCardContent, { class: "flex flex-col gap-4" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<!--[-->`);
                              ssrRenderList(unref(dealersList), (dealer, index) => {
                                var _a2;
                                _push5(`<div class="flex flex-col gap-4"${_scopeId4}><div class="relative"${_scopeId4}>`);
                                _push5(ssrRenderComponent(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap" }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(`\u041C\u0435\u043D\u0435\u0434\u0436\u0435\u0440`);
                                    } else {
                                      return [
                                        createTextVNode("\u041C\u0435\u043D\u0435\u0434\u0436\u0435\u0440")
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent5, _scopeId4));
                                _push5(`<div class="flex gap-2"${_scopeId4}>`);
                                _push5(ssrRenderComponent(_component_MyComboboxModels, {
                                  items: unref(managers).map((m) => ({ value: m.id, label: m.fullName })),
                                  class: "w-full",
                                  label: ((_a2 = dealer.user) == null ? void 0 : _a2.fullName) || "\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u043C\u0435\u043D\u0435\u0434\u0436\u0435\u0440\u0430",
                                  onSelectedItem: (value) => {
                                    dealer.userId = value;
                                    errorMessage.value = null;
                                  }
                                }, null, _parent5, _scopeId4));
                                if (unref(dealersList).length > 1) {
                                  _push5(ssrRenderComponent(_component_UiButton, {
                                    variant: "destructive",
                                    onClick: ($event) => removeDealer(index)
                                  }, {
                                    default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                      if (_push6) {
                                        _push6(ssrRenderComponent(unref(X), null, null, _parent6, _scopeId5));
                                      } else {
                                        return [
                                          createVNode(unref(X))
                                        ];
                                      }
                                    }),
                                    _: 2
                                  }, _parent5, _scopeId4));
                                } else {
                                  _push5(`<!---->`);
                                }
                                _push5(`</div></div><div class="relative"${_scopeId4}>`);
                                _push5(ssrRenderComponent(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap" }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(`\u0421\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C`);
                                    } else {
                                      return [
                                        createTextVNode("\u0421\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C")
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent5, _scopeId4));
                                _push5(ssrRenderComponent(_component_UiInput, {
                                  modelValue: dealer.price,
                                  "onUpdate:modelValue": ($event) => dealer.price = $event,
                                  modelModifiers: { number: true },
                                  type: "number",
                                  placeholder: "\u0427\u0430\u0441\u0442\u044C \u043E\u0442 10 \u0434\u043E 90",
                                  class: dealer.price ? "" : "outline outline-1 outline-rose-300 rounded-md",
                                  onInput: ($event) => errorMessage.value = null
                                }, null, _parent5, _scopeId4));
                                _push5(`</div>`);
                                if (unref(dealersList).length) {
                                  _push5(ssrRenderComponent(_component_UiSeparator, null, null, _parent5, _scopeId4));
                                } else {
                                  _push5(`<!---->`);
                                }
                                _push5(`</div>`);
                              });
                              _push5(`<!--]-->`);
                              if (unref(dealersList).length < 3) {
                                _push5(ssrRenderComponent(_component_UiButton, { onClick: addNewDealer }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(` \u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u043C\u0435\u043D\u0435\u0434\u0436\u0435\u0440\u0430 `);
                                    } else {
                                      return [
                                        createTextVNode(" \u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u043C\u0435\u043D\u0435\u0434\u0436\u0435\u0440\u0430 ")
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
                                (openBlock(true), createBlock(Fragment, null, renderList(unref(dealersList), (dealer, index) => {
                                  var _a2;
                                  return openBlock(), createBlock("div", {
                                    key: dealer.id || `new-${index}`,
                                    class: "flex flex-col gap-4"
                                  }, [
                                    createVNode("div", { class: "relative" }, [
                                      createVNode(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap" }, {
                                        default: withCtx(() => [
                                          createTextVNode("\u041C\u0435\u043D\u0435\u0434\u0436\u0435\u0440")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode("div", { class: "flex gap-2" }, [
                                        createVNode(_component_MyComboboxModels, {
                                          items: unref(managers).map((m) => ({ value: m.id, label: m.fullName })),
                                          class: "w-full",
                                          label: ((_a2 = dealer.user) == null ? void 0 : _a2.fullName) || "\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u043C\u0435\u043D\u0435\u0434\u0436\u0435\u0440\u0430",
                                          onSelectedItem: (value) => {
                                            dealer.userId = value;
                                            errorMessage.value = null;
                                          }
                                        }, null, 8, ["items", "label", "onSelectedItem"]),
                                        unref(dealersList).length > 1 ? (openBlock(), createBlock(_component_UiButton, {
                                          key: 0,
                                          variant: "destructive",
                                          onClick: ($event) => removeDealer(index)
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(unref(X))
                                          ]),
                                          _: 2
                                        }, 1032, ["onClick"])) : createCommentVNode("", true)
                                      ])
                                    ]),
                                    createVNode("div", { class: "relative" }, [
                                      createVNode(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap" }, {
                                        default: withCtx(() => [
                                          createTextVNode("\u0421\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_UiInput, {
                                        modelValue: dealer.price,
                                        "onUpdate:modelValue": ($event) => dealer.price = $event,
                                        modelModifiers: { number: true },
                                        type: "number",
                                        placeholder: "\u0427\u0430\u0441\u0442\u044C \u043E\u0442 10 \u0434\u043E 90",
                                        class: dealer.price ? "" : "outline outline-1 outline-rose-300 rounded-md",
                                        onInput: ($event) => errorMessage.value = null
                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "class", "onInput"])
                                    ]),
                                    unref(dealersList).length ? (openBlock(), createBlock(_component_UiSeparator, { key: 0 })) : createCommentVNode("", true)
                                  ]);
                                }), 128)),
                                unref(dealersList).length < 3 ? (openBlock(), createBlock(_component_UiButton, {
                                  key: 0,
                                  onClick: addNewDealer
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" \u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u043C\u0435\u043D\u0435\u0434\u0436\u0435\u0440\u0430 ")
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
                          createVNode(_component_UiCardHeader, null, {
                            default: withCtx(() => [
                              createVNode(_component_UiCardTitle, null, {
                                default: withCtx(() => [
                                  createTextVNode("\u0423\u0447\u0430\u0441\u0442\u043D\u0438\u043A\u0438")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_UiCardDescription, null, {
                                default: withCtx(() => [
                                  createTextVNode("\u0423\u043F\u0440\u0430\u0432\u043B\u044F\u0439\u0442\u0435 \u0441\u043F\u0438\u0441\u043A\u043E\u043C \u0434\u0438\u043B\u0435\u0440\u043E\u0432")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_UiCardContent, { class: "flex flex-col gap-4" }, {
                            default: withCtx(() => [
                              (openBlock(true), createBlock(Fragment, null, renderList(unref(dealersList), (dealer, index) => {
                                var _a2;
                                return openBlock(), createBlock("div", {
                                  key: dealer.id || `new-${index}`,
                                  class: "flex flex-col gap-4"
                                }, [
                                  createVNode("div", { class: "relative" }, [
                                    createVNode(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap" }, {
                                      default: withCtx(() => [
                                        createTextVNode("\u041C\u0435\u043D\u0435\u0434\u0436\u0435\u0440")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode("div", { class: "flex gap-2" }, [
                                      createVNode(_component_MyComboboxModels, {
                                        items: unref(managers).map((m) => ({ value: m.id, label: m.fullName })),
                                        class: "w-full",
                                        label: ((_a2 = dealer.user) == null ? void 0 : _a2.fullName) || "\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u043C\u0435\u043D\u0435\u0434\u0436\u0435\u0440\u0430",
                                        onSelectedItem: (value) => {
                                          dealer.userId = value;
                                          errorMessage.value = null;
                                        }
                                      }, null, 8, ["items", "label", "onSelectedItem"]),
                                      unref(dealersList).length > 1 ? (openBlock(), createBlock(_component_UiButton, {
                                        key: 0,
                                        variant: "destructive",
                                        onClick: ($event) => removeDealer(index)
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(unref(X))
                                        ]),
                                        _: 2
                                      }, 1032, ["onClick"])) : createCommentVNode("", true)
                                    ])
                                  ]),
                                  createVNode("div", { class: "relative" }, [
                                    createVNode(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap" }, {
                                      default: withCtx(() => [
                                        createTextVNode("\u0421\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_UiInput, {
                                      modelValue: dealer.price,
                                      "onUpdate:modelValue": ($event) => dealer.price = $event,
                                      modelModifiers: { number: true },
                                      type: "number",
                                      placeholder: "\u0427\u0430\u0441\u0442\u044C \u043E\u0442 10 \u0434\u043E 90",
                                      class: dealer.price ? "" : "outline outline-1 outline-rose-300 rounded-md",
                                      onInput: ($event) => errorMessage.value = null
                                    }, null, 8, ["modelValue", "onUpdate:modelValue", "class", "onInput"])
                                  ]),
                                  unref(dealersList).length ? (openBlock(), createBlock(_component_UiSeparator, { key: 0 })) : createCommentVNode("", true)
                                ]);
                              }), 128)),
                              unref(dealersList).length < 3 ? (openBlock(), createBlock(_component_UiButton, {
                                key: 0,
                                onClick: addNewDealer
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" \u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u043C\u0435\u043D\u0435\u0434\u0436\u0435\u0440\u0430 ")
                                ]),
                                _: 1
                              })) : createCommentVNode("", true)
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div>`);
                  _push3(ssrRenderComponent(_component_UiDialogFooter, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        if (unref(errorMessage)) {
                          _push4(`<p class="text-red-500 text-sm mb-2"${_scopeId3}>${ssrInterpolate(unref(errorMessage))}</p>`);
                        } else {
                          _push4(`<!---->`);
                        }
                        _push4(ssrRenderComponent(_component_UiButton, { onClick: updateDealers }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C`);
                            } else {
                              return [
                                createTextVNode("\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          unref(errorMessage) ? (openBlock(), createBlock("p", {
                            key: 0,
                            class: "text-red-500 text-sm mb-2"
                          }, toDisplayString(unref(errorMessage)), 1)) : createCommentVNode("", true),
                          createVNode(_component_UiButton, { onClick: updateDealers }, {
                            default: withCtx(() => [
                              createTextVNode("\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C")
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
                    createVNode(_component_UiDialogHeader, null, {
                      default: withCtx(() => [
                        createVNode(_component_UiDialogTitle, null, {
                          default: withCtx(() => [
                            createTextVNode("\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u0443\u0447\u0430\u0441\u0442\u043D\u0438\u043A\u043E\u0432")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode("div", { class: "flex gap-4" }, [
                      createVNode(_component_UiCard, { class: "w-full" }, {
                        default: withCtx(() => [
                          createVNode(_component_UiCardHeader, null, {
                            default: withCtx(() => [
                              createVNode(_component_UiCardTitle, null, {
                                default: withCtx(() => [
                                  createTextVNode("\u0423\u0447\u0430\u0441\u0442\u043D\u0438\u043A\u0438")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_UiCardDescription, null, {
                                default: withCtx(() => [
                                  createTextVNode("\u0423\u043F\u0440\u0430\u0432\u043B\u044F\u0439\u0442\u0435 \u0441\u043F\u0438\u0441\u043A\u043E\u043C \u0434\u0438\u043B\u0435\u0440\u043E\u0432")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_UiCardContent, { class: "flex flex-col gap-4" }, {
                            default: withCtx(() => [
                              (openBlock(true), createBlock(Fragment, null, renderList(unref(dealersList), (dealer, index) => {
                                var _a2;
                                return openBlock(), createBlock("div", {
                                  key: dealer.id || `new-${index}`,
                                  class: "flex flex-col gap-4"
                                }, [
                                  createVNode("div", { class: "relative" }, [
                                    createVNode(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap" }, {
                                      default: withCtx(() => [
                                        createTextVNode("\u041C\u0435\u043D\u0435\u0434\u0436\u0435\u0440")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode("div", { class: "flex gap-2" }, [
                                      createVNode(_component_MyComboboxModels, {
                                        items: unref(managers).map((m) => ({ value: m.id, label: m.fullName })),
                                        class: "w-full",
                                        label: ((_a2 = dealer.user) == null ? void 0 : _a2.fullName) || "\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u043C\u0435\u043D\u0435\u0434\u0436\u0435\u0440\u0430",
                                        onSelectedItem: (value) => {
                                          dealer.userId = value;
                                          errorMessage.value = null;
                                        }
                                      }, null, 8, ["items", "label", "onSelectedItem"]),
                                      unref(dealersList).length > 1 ? (openBlock(), createBlock(_component_UiButton, {
                                        key: 0,
                                        variant: "destructive",
                                        onClick: ($event) => removeDealer(index)
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(unref(X))
                                        ]),
                                        _: 2
                                      }, 1032, ["onClick"])) : createCommentVNode("", true)
                                    ])
                                  ]),
                                  createVNode("div", { class: "relative" }, [
                                    createVNode(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap" }, {
                                      default: withCtx(() => [
                                        createTextVNode("\u0421\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_UiInput, {
                                      modelValue: dealer.price,
                                      "onUpdate:modelValue": ($event) => dealer.price = $event,
                                      modelModifiers: { number: true },
                                      type: "number",
                                      placeholder: "\u0427\u0430\u0441\u0442\u044C \u043E\u0442 10 \u0434\u043E 90",
                                      class: dealer.price ? "" : "outline outline-1 outline-rose-300 rounded-md",
                                      onInput: ($event) => errorMessage.value = null
                                    }, null, 8, ["modelValue", "onUpdate:modelValue", "class", "onInput"])
                                  ]),
                                  unref(dealersList).length ? (openBlock(), createBlock(_component_UiSeparator, { key: 0 })) : createCommentVNode("", true)
                                ]);
                              }), 128)),
                              unref(dealersList).length < 3 ? (openBlock(), createBlock(_component_UiButton, {
                                key: 0,
                                onClick: addNewDealer
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" \u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u043C\u0435\u043D\u0435\u0434\u0436\u0435\u0440\u0430 ")
                                ]),
                                _: 1
                              })) : createCommentVNode("", true)
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    createVNode(_component_UiDialogFooter, null, {
                      default: withCtx(() => [
                        unref(errorMessage) ? (openBlock(), createBlock("p", {
                          key: 0,
                          class: "text-red-500 text-sm mb-2"
                        }, toDisplayString(unref(errorMessage)), 1)) : createCommentVNode("", true),
                        createVNode(_component_UiButton, { onClick: updateDealers }, {
                          default: withCtx(() => [
                            createTextVNode("\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C")
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
          } else {
            return [
              createVNode(_component_UiDialogTrigger, { "as-child": "" }, {
                default: withCtx(() => [
                  createVNode(_component_UiButton, {
                    class: "h-5 w-5 px-0 py-2",
                    onClick: getManagers
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_Icon, {
                        name: "mingcute:edit-line",
                        color: "white",
                        size: "15px"
                      })
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
                          createTextVNode("\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u0443\u0447\u0430\u0441\u0442\u043D\u0438\u043A\u043E\u0432")
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode("div", { class: "flex gap-4" }, [
                    createVNode(_component_UiCard, { class: "w-full" }, {
                      default: withCtx(() => [
                        createVNode(_component_UiCardHeader, null, {
                          default: withCtx(() => [
                            createVNode(_component_UiCardTitle, null, {
                              default: withCtx(() => [
                                createTextVNode("\u0423\u0447\u0430\u0441\u0442\u043D\u0438\u043A\u0438")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_UiCardDescription, null, {
                              default: withCtx(() => [
                                createTextVNode("\u0423\u043F\u0440\u0430\u0432\u043B\u044F\u0439\u0442\u0435 \u0441\u043F\u0438\u0441\u043A\u043E\u043C \u0434\u0438\u043B\u0435\u0440\u043E\u0432")
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(_component_UiCardContent, { class: "flex flex-col gap-4" }, {
                          default: withCtx(() => [
                            (openBlock(true), createBlock(Fragment, null, renderList(unref(dealersList), (dealer, index) => {
                              var _a2;
                              return openBlock(), createBlock("div", {
                                key: dealer.id || `new-${index}`,
                                class: "flex flex-col gap-4"
                              }, [
                                createVNode("div", { class: "relative" }, [
                                  createVNode(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap" }, {
                                    default: withCtx(() => [
                                      createTextVNode("\u041C\u0435\u043D\u0435\u0434\u0436\u0435\u0440")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode("div", { class: "flex gap-2" }, [
                                    createVNode(_component_MyComboboxModels, {
                                      items: unref(managers).map((m) => ({ value: m.id, label: m.fullName })),
                                      class: "w-full",
                                      label: ((_a2 = dealer.user) == null ? void 0 : _a2.fullName) || "\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u043C\u0435\u043D\u0435\u0434\u0436\u0435\u0440\u0430",
                                      onSelectedItem: (value) => {
                                        dealer.userId = value;
                                        errorMessage.value = null;
                                      }
                                    }, null, 8, ["items", "label", "onSelectedItem"]),
                                    unref(dealersList).length > 1 ? (openBlock(), createBlock(_component_UiButton, {
                                      key: 0,
                                      variant: "destructive",
                                      onClick: ($event) => removeDealer(index)
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(unref(X))
                                      ]),
                                      _: 2
                                    }, 1032, ["onClick"])) : createCommentVNode("", true)
                                  ])
                                ]),
                                createVNode("div", { class: "relative" }, [
                                  createVNode(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap" }, {
                                    default: withCtx(() => [
                                      createTextVNode("\u0421\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_UiInput, {
                                    modelValue: dealer.price,
                                    "onUpdate:modelValue": ($event) => dealer.price = $event,
                                    modelModifiers: { number: true },
                                    type: "number",
                                    placeholder: "\u0427\u0430\u0441\u0442\u044C \u043E\u0442 10 \u0434\u043E 90",
                                    class: dealer.price ? "" : "outline outline-1 outline-rose-300 rounded-md",
                                    onInput: ($event) => errorMessage.value = null
                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "class", "onInput"])
                                ]),
                                unref(dealersList).length ? (openBlock(), createBlock(_component_UiSeparator, { key: 0 })) : createCommentVNode("", true)
                              ]);
                            }), 128)),
                            unref(dealersList).length < 3 ? (openBlock(), createBlock(_component_UiButton, {
                              key: 0,
                              onClick: addNewDealer
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" \u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u043C\u0435\u043D\u0435\u0434\u0436\u0435\u0440\u0430 ")
                              ]),
                              _: 1
                            })) : createCommentVNode("", true)
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ]),
                  createVNode(_component_UiDialogFooter, null, {
                    default: withCtx(() => [
                      unref(errorMessage) ? (openBlock(), createBlock("p", {
                        key: 0,
                        class: "text-red-500 text-sm mb-2"
                      }, toDisplayString(unref(errorMessage)), 1)) : createCommentVNode("", true),
                      createVNode(_component_UiButton, { onClick: updateDealers }, {
                        default: withCtx(() => [
                          createTextVNode("\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C")
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
      }, _parent));
    };
  }
});
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/my/deals/AddDealerModal.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "CreatePaymentModal",
  __ssrInlineRender: true,
  props: {
    dealId: {}
  },
  emits: ["isPayCreated"],
  setup(__props, { emit: __emit }) {
    const { $useApi } = useNuxtApp();
    const props = __props;
    const isOpen = ref(false);
    const methods = [
      "\u041D\u0430\u043B\u0438\u0447\u043D\u044B\u0435",
      "\u041F\u0435\u0440\u0435\u0432\u043E\u0434",
      "\u0414\u043E\u0433\u043E\u0432\u043E\u0440",
      "\u041D\u0430\u043B\u043E\u0436\u043A\u0430",
      "\u0421\u0441\u044B\u043B\u043A\u0430",
      "\u0414\u043E\u043B\u044F\u043C\u0438",
      "\u0420\u0430\u0441\u0441\u0440\u043E\u0447\u043A\u0430",
      "\u0421\u0447\u0435\u0442",
      "\u0412\u043E\u0437\u0432\u0440\u0430\u0442"
      // 'Бронь',
    ];
    const terminals = ["\u0422\u0435\u0440\u043C\u0438\u043D\u0430\u043B \u0418\u0437\u0438\u043D\u0435\u043E\u043D \u0421\u0411\u041F", "\u0422\u0435\u0440\u043C\u0438\u043D\u0430\u043B \u0418\u0437\u0438\u043D\u0435\u043E\u043D"];
    const newPaymentBlank = {
      title: "1",
      price: 0,
      date: "",
      method: "\u041F\u0435\u0440\u0435\u0432\u043E\u0434",
      reservation: false,
      paymentId: "",
      terminal: "",
      isConfirmed: false
    };
    const newPayment = ref({ ...newPaymentBlank });
    const checkPaymentMessage = ref("\u0421\u0442\u0430\u0442\u0443\u0441");
    const emit = __emit;
    const savePayment = async () => {
      try {
        if (!newPayment.value.paymentId) {
          newPayment.value.terminal = "";
        }
        await $useApi.post(`/payments/`, {
          ...newPayment.value,
          dealId: props.dealId
        });
        console.log("payment created");
        emit("isPayCreated");
        isOpen.value = false;
        return;
      } catch (error) {
        console.log(error);
      }
    };
    watch(isOpen, () => {
      if (!isOpen.value) {
        newPayment.value = { ...newPaymentBlank };
      }
    });
    watch(
      () => [newPayment.value.paymentId, newPayment.value.terminal],
      async ([paymentId, terminal]) => {
        if (paymentId && paymentId.length > 5 && terminal) {
          const { data } = await $useApi.get("payments/checkPayment", {
            params: { paymentId, terminal }
          });
          checkPaymentMessage.value = data.message;
          newPayment.value.price = data.price;
          newPayment.value.isConfirmed = data.isConfirmed;
        }
      }
    );
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UiDialog = _sfc_main$4$1;
      const _component_UiDialogTrigger = _sfc_main$3$2;
      const _component_UiButton = _sfc_main$o;
      const _component_Icon = __nuxt_component_7;
      const _component_UiDialogContent = _sfc_main$p;
      const _component_UiDialogHeader = _sfc_main$2$3;
      const _component_UiDialogTitle = _sfc_main$1$3;
      const _component_UiCard = _sfc_main$3$1;
      const _component_UiCardHeader = _sfc_main$2$1;
      const _component_UiCardTitle = _sfc_main$1$1;
      const _component_UiCardDescription = _sfc_main$k;
      const _component_UiCardContent = _sfc_main$1$6;
      const _component_UiSelect = _sfc_main$7$1;
      const _component_UiSelectTrigger = _sfc_main$5$2;
      const _component_UiSelectValue = _sfc_main$6$1;
      const _component_UiSelectContent = _sfc_main$4$3;
      const _component_UiSelectGroup = _sfc_main$3$4;
      const _component_UiSelectItem = _sfc_main$2$5;
      const _component_UiLabel = _sfc_main$z;
      const _component_UiInput = _sfc_main$m;
      const _component_UiTextarea = _sfc_main$C;
      const _component_UiTabs = _sfc_main$2$2;
      const _component_UiTabsList = _sfc_main$l;
      const _component_UiTabsTrigger = _sfc_main$1$2;
      const _component_UiSwitch = _sfc_main$A;
      const _component_UiDialogFooter = _sfc_main$s;
      _push(ssrRenderComponent(_component_UiDialog, mergeProps({
        open: unref(isOpen),
        "onUpdate:open": ($event) => isRef(isOpen) ? isOpen.value = $event : null
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UiDialogTrigger, { "as-child": "" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UiButton, { class: "h-5 w-5 px-0 py-2" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_Icon, {
                          name: "akar-icons:plus",
                          color: "white",
                          size: "15px"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_Icon, {
                            name: "akar-icons:plus",
                            color: "white",
                            size: "15px"
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UiButton, { class: "h-5 w-5 px-0 py-2" }, {
                      default: withCtx(() => [
                        createVNode(_component_Icon, {
                          name: "akar-icons:plus",
                          color: "white",
                          size: "15px"
                        })
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UiDialogContent, { class: "flex flex-col max-w-[450px]" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UiDialogHeader, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_UiDialogTitle, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`\u0421\u043E\u0437\u0434\u0430\u0442\u044C`);
                            } else {
                              return [
                                createTextVNode("\u0421\u043E\u0437\u0434\u0430\u0442\u044C")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_UiDialogTitle, null, {
                            default: withCtx(() => [
                              createTextVNode("\u0421\u043E\u0437\u0434\u0430\u0442\u044C")
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`<div class="flex gap-4"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_UiCard, { class: "w-full" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_UiCardHeader, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_UiCardTitle, null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`\u041F\u043B\u0430\u0442\u0435\u0436`);
                                  } else {
                                    return [
                                      createTextVNode("\u041F\u043B\u0430\u0442\u0435\u0436")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_UiCardDescription, null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`${ssrInterpolate(unref(checkPaymentMessage))}`);
                                  } else {
                                    return [
                                      createTextVNode(toDisplayString(unref(checkPaymentMessage)), 1)
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_UiCardTitle, null, {
                                  default: withCtx(() => [
                                    createTextVNode("\u041F\u043B\u0430\u0442\u0435\u0436")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_UiCardDescription, null, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(unref(checkPaymentMessage)), 1)
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_UiCardContent, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<div class="flex flex-col gap-6"${_scopeId4}><div class="relative"${_scopeId4}>`);
                              _push5(ssrRenderComponent(_component_UiSelect, {
                                modelValue: unref(newPayment).method,
                                "onUpdate:modelValue": ($event) => unref(newPayment).method = $event
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_UiSelectTrigger, null, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(_component_UiSelectValue, {
                                            placeholder: unref(newPayment).method
                                          }, null, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(_component_UiSelectValue, {
                                              placeholder: unref(newPayment).method
                                            }, null, 8, ["placeholder"])
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(_component_UiSelectContent, null, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`<!--[-->`);
                                          ssrRenderList(methods, (item, i) => {
                                            _push7(ssrRenderComponent(_component_UiSelectGroup, { key: i }, {
                                              default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                if (_push8) {
                                                  _push8(ssrRenderComponent(_component_UiSelectItem, { value: item }, {
                                                    default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                      if (_push9) {
                                                        _push9(`${ssrInterpolate(item)}`);
                                                      } else {
                                                        return [
                                                          createTextVNode(toDisplayString(item), 1)
                                                        ];
                                                      }
                                                    }),
                                                    _: 2
                                                  }, _parent8, _scopeId7));
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
                                            }, _parent7, _scopeId6));
                                          });
                                          _push7(`<!--]-->`);
                                        } else {
                                          return [
                                            (openBlock(), createBlock(Fragment, null, renderList(methods, (item, i) => {
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
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_UiSelectTrigger, null, {
                                        default: withCtx(() => [
                                          createVNode(_component_UiSelectValue, {
                                            placeholder: unref(newPayment).method
                                          }, null, 8, ["placeholder"])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_UiSelectContent, null, {
                                        default: withCtx(() => [
                                          (openBlock(), createBlock(Fragment, null, renderList(methods, (item, i) => {
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
                              }, _parent5, _scopeId4));
                              _push5(`</div><div class="relative"${_scopeId4}>`);
                              _push5(ssrRenderComponent(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`\u0421\u0443\u043C\u043C\u0430`);
                                  } else {
                                    return [
                                      createTextVNode("\u0421\u0443\u043C\u043C\u0430")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_UiInput, {
                                modelValue: unref(newPayment).price,
                                "onUpdate:modelValue": ($event) => unref(newPayment).price = $event,
                                type: "number",
                                placeholder: "\u0421\u0443\u043C\u043C\u0430",
                                class: unref(newPayment).price ? "" : "outline outline-1 outline-rose-300"
                              }, null, _parent5, _scopeId4));
                              _push5(`</div><div class="relative"${_scopeId4}>`);
                              _push5(ssrRenderComponent(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`\u0414\u0430\u0442\u0430 \u043E\u043F\u043B\u0430\u0442\u044B`);
                                  } else {
                                    return [
                                      createTextVNode("\u0414\u0430\u0442\u0430 \u043E\u043F\u043B\u0430\u0442\u044B")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_UiInput, {
                                modelValue: unref(newPayment).date,
                                "onUpdate:modelValue": ($event) => unref(newPayment).date = $event,
                                type: "date",
                                placeholder: "\u0414\u0430\u0442\u0430 \u043E\u043F\u043B\u0430\u0442\u044B",
                                class: unref(newPayment).date ? "" : "outline outline-1 outline-rose-300"
                              }, null, _parent5, _scopeId4));
                              _push5(`</div>`);
                              if (unref(newPayment).method === "\u0412\u043E\u0437\u0432\u0440\u0430\u0442") {
                                _push5(`<div class="relative"${_scopeId4}>`);
                                _push5(ssrRenderComponent(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1" }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(`\u041F\u0440\u0438\u0447\u0438\u043D\u0430`);
                                    } else {
                                      return [
                                        createTextVNode("\u041F\u0440\u0438\u0447\u0438\u043D\u0430")
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent5, _scopeId4));
                                _push5(ssrRenderComponent(_component_UiTextarea, {
                                  modelValue: unref(newPayment).description,
                                  "onUpdate:modelValue": ($event) => unref(newPayment).description = $event,
                                  placeholder: "\u0418\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F \u043E \u0432\u043E\u0437\u0432\u0440\u0430\u0442\u0435"
                                }, null, _parent5, _scopeId4));
                                _push5(`</div>`);
                              } else {
                                _push5(`<!---->`);
                              }
                              _push5(`<div class="relative"${_scopeId4}>`);
                              if (unref(newPayment).paymentId) {
                                _push5(ssrRenderComponent(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap" }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(`paymentId`);
                                    } else {
                                      return [
                                        createTextVNode("paymentId")
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent5, _scopeId4));
                              } else {
                                _push5(`<!---->`);
                              }
                              _push5(ssrRenderComponent(_component_UiInput, {
                                modelValue: unref(newPayment).paymentId,
                                "onUpdate:modelValue": ($event) => unref(newPayment).paymentId = $event,
                                placeholder: "paymentId"
                              }, null, _parent5, _scopeId4));
                              _push5(`</div>`);
                              if (unref(newPayment).paymentId) {
                                _push5(`<div class="${ssrRenderClass(
                                  unref(newPayment).terminal ? "" : "outline outline-1 outline-rose-300"
                                )}"${_scopeId4}>`);
                                _push5(ssrRenderComponent(_component_UiTabs, null, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(ssrRenderComponent(_component_UiTabsList, null, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`<!--[-->`);
                                            ssrRenderList(terminals, (t) => {
                                              _push7(ssrRenderComponent(_component_UiTabsTrigger, {
                                                key: t,
                                                value: t,
                                                onClick: ($event) => unref(newPayment).terminal = t
                                              }, {
                                                default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                  if (_push8) {
                                                    _push8(`${ssrInterpolate(t)}`);
                                                  } else {
                                                    return [
                                                      createTextVNode(toDisplayString(t), 1)
                                                    ];
                                                  }
                                                }),
                                                _: 2
                                              }, _parent7, _scopeId6));
                                            });
                                            _push7(`<!--]-->`);
                                          } else {
                                            return [
                                              (openBlock(), createBlock(Fragment, null, renderList(terminals, (t) => {
                                                return createVNode(_component_UiTabsTrigger, {
                                                  key: t,
                                                  value: t,
                                                  onClick: ($event) => unref(newPayment).terminal = t
                                                }, {
                                                  default: withCtx(() => [
                                                    createTextVNode(toDisplayString(t), 1)
                                                  ]),
                                                  _: 2
                                                }, 1032, ["value", "onClick"]);
                                              }), 64))
                                            ];
                                          }
                                        }),
                                        _: 1
                                      }, _parent6, _scopeId5));
                                    } else {
                                      return [
                                        createVNode(_component_UiTabsList, null, {
                                          default: withCtx(() => [
                                            (openBlock(), createBlock(Fragment, null, renderList(terminals, (t) => {
                                              return createVNode(_component_UiTabsTrigger, {
                                                key: t,
                                                value: t,
                                                onClick: ($event) => unref(newPayment).terminal = t
                                              }, {
                                                default: withCtx(() => [
                                                  createTextVNode(toDisplayString(t), 1)
                                                ]),
                                                _: 2
                                              }, 1032, ["value", "onClick"]);
                                            }), 64))
                                          ]),
                                          _: 1
                                        })
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent5, _scopeId4));
                                _push5(`</div>`);
                              } else {
                                _push5(`<!---->`);
                              }
                              _push5(`<div class="relative flex items-center space-x-2"${_scopeId4}>`);
                              _push5(ssrRenderComponent(_component_UiSwitch, {
                                id: "isConfirmed",
                                checked: unref(newPayment).isConfirmed,
                                "onUpdate:checked": ($event) => unref(newPayment).isConfirmed = $event
                              }, null, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_UiLabel, { for: "isConfirmed" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`\u041F\u043E\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043D`);
                                  } else {
                                    return [
                                      createTextVNode("\u041F\u043E\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043D")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(`</div></div>`);
                            } else {
                              return [
                                createVNode("div", { class: "flex flex-col gap-6" }, [
                                  createVNode("div", { class: "relative" }, [
                                    createVNode(_component_UiSelect, {
                                      modelValue: unref(newPayment).method,
                                      "onUpdate:modelValue": ($event) => unref(newPayment).method = $event
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(_component_UiSelectTrigger, null, {
                                          default: withCtx(() => [
                                            createVNode(_component_UiSelectValue, {
                                              placeholder: unref(newPayment).method
                                            }, null, 8, ["placeholder"])
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(_component_UiSelectContent, null, {
                                          default: withCtx(() => [
                                            (openBlock(), createBlock(Fragment, null, renderList(methods, (item, i) => {
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
                                    createVNode(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap" }, {
                                      default: withCtx(() => [
                                        createTextVNode("\u0421\u0443\u043C\u043C\u0430")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_UiInput, {
                                      modelValue: unref(newPayment).price,
                                      "onUpdate:modelValue": ($event) => unref(newPayment).price = $event,
                                      type: "number",
                                      placeholder: "\u0421\u0443\u043C\u043C\u0430",
                                      class: unref(newPayment).price ? "" : "outline outline-1 outline-rose-300"
                                    }, null, 8, ["modelValue", "onUpdate:modelValue", "class"])
                                  ]),
                                  createVNode("div", { class: "relative" }, [
                                    createVNode(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap" }, {
                                      default: withCtx(() => [
                                        createTextVNode("\u0414\u0430\u0442\u0430 \u043E\u043F\u043B\u0430\u0442\u044B")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_UiInput, {
                                      modelValue: unref(newPayment).date,
                                      "onUpdate:modelValue": ($event) => unref(newPayment).date = $event,
                                      type: "date",
                                      placeholder: "\u0414\u0430\u0442\u0430 \u043E\u043F\u043B\u0430\u0442\u044B",
                                      class: unref(newPayment).date ? "" : "outline outline-1 outline-rose-300"
                                    }, null, 8, ["modelValue", "onUpdate:modelValue", "class"])
                                  ]),
                                  unref(newPayment).method === "\u0412\u043E\u0437\u0432\u0440\u0430\u0442" ? (openBlock(), createBlock("div", {
                                    key: 0,
                                    class: "relative"
                                  }, [
                                    createVNode(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1" }, {
                                      default: withCtx(() => [
                                        createTextVNode("\u041F\u0440\u0438\u0447\u0438\u043D\u0430")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_UiTextarea, {
                                      modelValue: unref(newPayment).description,
                                      "onUpdate:modelValue": ($event) => unref(newPayment).description = $event,
                                      placeholder: "\u0418\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F \u043E \u0432\u043E\u0437\u0432\u0440\u0430\u0442\u0435"
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                  ])) : createCommentVNode("", true),
                                  createVNode("div", { class: "relative" }, [
                                    unref(newPayment).paymentId ? (openBlock(), createBlock(_component_UiLabel, {
                                      key: 0,
                                      class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode("paymentId")
                                      ]),
                                      _: 1
                                    })) : createCommentVNode("", true),
                                    createVNode(_component_UiInput, {
                                      modelValue: unref(newPayment).paymentId,
                                      "onUpdate:modelValue": ($event) => unref(newPayment).paymentId = $event,
                                      placeholder: "paymentId"
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                  ]),
                                  unref(newPayment).paymentId ? (openBlock(), createBlock("div", {
                                    key: 1,
                                    class: unref(newPayment).terminal ? "" : "outline outline-1 outline-rose-300"
                                  }, [
                                    createVNode(_component_UiTabs, null, {
                                      default: withCtx(() => [
                                        createVNode(_component_UiTabsList, null, {
                                          default: withCtx(() => [
                                            (openBlock(), createBlock(Fragment, null, renderList(terminals, (t) => {
                                              return createVNode(_component_UiTabsTrigger, {
                                                key: t,
                                                value: t,
                                                onClick: ($event) => unref(newPayment).terminal = t
                                              }, {
                                                default: withCtx(() => [
                                                  createTextVNode(toDisplayString(t), 1)
                                                ]),
                                                _: 2
                                              }, 1032, ["value", "onClick"]);
                                            }), 64))
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    })
                                  ], 2)) : createCommentVNode("", true),
                                  createVNode("div", { class: "relative flex items-center space-x-2" }, [
                                    createVNode(_component_UiSwitch, {
                                      id: "isConfirmed",
                                      checked: unref(newPayment).isConfirmed,
                                      "onUpdate:checked": ($event) => unref(newPayment).isConfirmed = $event
                                    }, null, 8, ["checked", "onUpdate:checked"]),
                                    createVNode(_component_UiLabel, { for: "isConfirmed" }, {
                                      default: withCtx(() => [
                                        createTextVNode("\u041F\u043E\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043D")
                                      ]),
                                      _: 1
                                    })
                                  ])
                                ])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_UiCardHeader, null, {
                            default: withCtx(() => [
                              createVNode(_component_UiCardTitle, null, {
                                default: withCtx(() => [
                                  createTextVNode("\u041F\u043B\u0430\u0442\u0435\u0436")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_UiCardDescription, null, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(unref(checkPaymentMessage)), 1)
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_UiCardContent, null, {
                            default: withCtx(() => [
                              createVNode("div", { class: "flex flex-col gap-6" }, [
                                createVNode("div", { class: "relative" }, [
                                  createVNode(_component_UiSelect, {
                                    modelValue: unref(newPayment).method,
                                    "onUpdate:modelValue": ($event) => unref(newPayment).method = $event
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_UiSelectTrigger, null, {
                                        default: withCtx(() => [
                                          createVNode(_component_UiSelectValue, {
                                            placeholder: unref(newPayment).method
                                          }, null, 8, ["placeholder"])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_UiSelectContent, null, {
                                        default: withCtx(() => [
                                          (openBlock(), createBlock(Fragment, null, renderList(methods, (item, i) => {
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
                                  createVNode(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap" }, {
                                    default: withCtx(() => [
                                      createTextVNode("\u0421\u0443\u043C\u043C\u0430")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_UiInput, {
                                    modelValue: unref(newPayment).price,
                                    "onUpdate:modelValue": ($event) => unref(newPayment).price = $event,
                                    type: "number",
                                    placeholder: "\u0421\u0443\u043C\u043C\u0430",
                                    class: unref(newPayment).price ? "" : "outline outline-1 outline-rose-300"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "class"])
                                ]),
                                createVNode("div", { class: "relative" }, [
                                  createVNode(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap" }, {
                                    default: withCtx(() => [
                                      createTextVNode("\u0414\u0430\u0442\u0430 \u043E\u043F\u043B\u0430\u0442\u044B")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_UiInput, {
                                    modelValue: unref(newPayment).date,
                                    "onUpdate:modelValue": ($event) => unref(newPayment).date = $event,
                                    type: "date",
                                    placeholder: "\u0414\u0430\u0442\u0430 \u043E\u043F\u043B\u0430\u0442\u044B",
                                    class: unref(newPayment).date ? "" : "outline outline-1 outline-rose-300"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "class"])
                                ]),
                                unref(newPayment).method === "\u0412\u043E\u0437\u0432\u0440\u0430\u0442" ? (openBlock(), createBlock("div", {
                                  key: 0,
                                  class: "relative"
                                }, [
                                  createVNode(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1" }, {
                                    default: withCtx(() => [
                                      createTextVNode("\u041F\u0440\u0438\u0447\u0438\u043D\u0430")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_UiTextarea, {
                                    modelValue: unref(newPayment).description,
                                    "onUpdate:modelValue": ($event) => unref(newPayment).description = $event,
                                    placeholder: "\u0418\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F \u043E \u0432\u043E\u0437\u0432\u0440\u0430\u0442\u0435"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                ])) : createCommentVNode("", true),
                                createVNode("div", { class: "relative" }, [
                                  unref(newPayment).paymentId ? (openBlock(), createBlock(_component_UiLabel, {
                                    key: 0,
                                    class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode("paymentId")
                                    ]),
                                    _: 1
                                  })) : createCommentVNode("", true),
                                  createVNode(_component_UiInput, {
                                    modelValue: unref(newPayment).paymentId,
                                    "onUpdate:modelValue": ($event) => unref(newPayment).paymentId = $event,
                                    placeholder: "paymentId"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                ]),
                                unref(newPayment).paymentId ? (openBlock(), createBlock("div", {
                                  key: 1,
                                  class: unref(newPayment).terminal ? "" : "outline outline-1 outline-rose-300"
                                }, [
                                  createVNode(_component_UiTabs, null, {
                                    default: withCtx(() => [
                                      createVNode(_component_UiTabsList, null, {
                                        default: withCtx(() => [
                                          (openBlock(), createBlock(Fragment, null, renderList(terminals, (t) => {
                                            return createVNode(_component_UiTabsTrigger, {
                                              key: t,
                                              value: t,
                                              onClick: ($event) => unref(newPayment).terminal = t
                                            }, {
                                              default: withCtx(() => [
                                                createTextVNode(toDisplayString(t), 1)
                                              ]),
                                              _: 2
                                            }, 1032, ["value", "onClick"]);
                                          }), 64))
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  })
                                ], 2)) : createCommentVNode("", true),
                                createVNode("div", { class: "relative flex items-center space-x-2" }, [
                                  createVNode(_component_UiSwitch, {
                                    id: "isConfirmed",
                                    checked: unref(newPayment).isConfirmed,
                                    "onUpdate:checked": ($event) => unref(newPayment).isConfirmed = $event
                                  }, null, 8, ["checked", "onUpdate:checked"]),
                                  createVNode(_component_UiLabel, { for: "isConfirmed" }, {
                                    default: withCtx(() => [
                                      createTextVNode("\u041F\u043E\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043D")
                                    ]),
                                    _: 1
                                  })
                                ])
                              ])
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div>`);
                  _push3(ssrRenderComponent(_component_UiDialogFooter, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_UiButton, { onClick: savePayment }, {
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
                      } else {
                        return [
                          createVNode(_component_UiButton, { onClick: savePayment }, {
                            default: withCtx(() => [
                              createTextVNode(" \u0421\u043E\u0437\u0434\u0430\u0442\u044C ")
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
                    createVNode(_component_UiDialogHeader, null, {
                      default: withCtx(() => [
                        createVNode(_component_UiDialogTitle, null, {
                          default: withCtx(() => [
                            createTextVNode("\u0421\u043E\u0437\u0434\u0430\u0442\u044C")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode("div", { class: "flex gap-4" }, [
                      createVNode(_component_UiCard, { class: "w-full" }, {
                        default: withCtx(() => [
                          createVNode(_component_UiCardHeader, null, {
                            default: withCtx(() => [
                              createVNode(_component_UiCardTitle, null, {
                                default: withCtx(() => [
                                  createTextVNode("\u041F\u043B\u0430\u0442\u0435\u0436")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_UiCardDescription, null, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(unref(checkPaymentMessage)), 1)
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_UiCardContent, null, {
                            default: withCtx(() => [
                              createVNode("div", { class: "flex flex-col gap-6" }, [
                                createVNode("div", { class: "relative" }, [
                                  createVNode(_component_UiSelect, {
                                    modelValue: unref(newPayment).method,
                                    "onUpdate:modelValue": ($event) => unref(newPayment).method = $event
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_UiSelectTrigger, null, {
                                        default: withCtx(() => [
                                          createVNode(_component_UiSelectValue, {
                                            placeholder: unref(newPayment).method
                                          }, null, 8, ["placeholder"])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_UiSelectContent, null, {
                                        default: withCtx(() => [
                                          (openBlock(), createBlock(Fragment, null, renderList(methods, (item, i) => {
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
                                  createVNode(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap" }, {
                                    default: withCtx(() => [
                                      createTextVNode("\u0421\u0443\u043C\u043C\u0430")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_UiInput, {
                                    modelValue: unref(newPayment).price,
                                    "onUpdate:modelValue": ($event) => unref(newPayment).price = $event,
                                    type: "number",
                                    placeholder: "\u0421\u0443\u043C\u043C\u0430",
                                    class: unref(newPayment).price ? "" : "outline outline-1 outline-rose-300"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "class"])
                                ]),
                                createVNode("div", { class: "relative" }, [
                                  createVNode(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap" }, {
                                    default: withCtx(() => [
                                      createTextVNode("\u0414\u0430\u0442\u0430 \u043E\u043F\u043B\u0430\u0442\u044B")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_UiInput, {
                                    modelValue: unref(newPayment).date,
                                    "onUpdate:modelValue": ($event) => unref(newPayment).date = $event,
                                    type: "date",
                                    placeholder: "\u0414\u0430\u0442\u0430 \u043E\u043F\u043B\u0430\u0442\u044B",
                                    class: unref(newPayment).date ? "" : "outline outline-1 outline-rose-300"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "class"])
                                ]),
                                unref(newPayment).method === "\u0412\u043E\u0437\u0432\u0440\u0430\u0442" ? (openBlock(), createBlock("div", {
                                  key: 0,
                                  class: "relative"
                                }, [
                                  createVNode(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1" }, {
                                    default: withCtx(() => [
                                      createTextVNode("\u041F\u0440\u0438\u0447\u0438\u043D\u0430")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_UiTextarea, {
                                    modelValue: unref(newPayment).description,
                                    "onUpdate:modelValue": ($event) => unref(newPayment).description = $event,
                                    placeholder: "\u0418\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F \u043E \u0432\u043E\u0437\u0432\u0440\u0430\u0442\u0435"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                ])) : createCommentVNode("", true),
                                createVNode("div", { class: "relative" }, [
                                  unref(newPayment).paymentId ? (openBlock(), createBlock(_component_UiLabel, {
                                    key: 0,
                                    class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode("paymentId")
                                    ]),
                                    _: 1
                                  })) : createCommentVNode("", true),
                                  createVNode(_component_UiInput, {
                                    modelValue: unref(newPayment).paymentId,
                                    "onUpdate:modelValue": ($event) => unref(newPayment).paymentId = $event,
                                    placeholder: "paymentId"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                ]),
                                unref(newPayment).paymentId ? (openBlock(), createBlock("div", {
                                  key: 1,
                                  class: unref(newPayment).terminal ? "" : "outline outline-1 outline-rose-300"
                                }, [
                                  createVNode(_component_UiTabs, null, {
                                    default: withCtx(() => [
                                      createVNode(_component_UiTabsList, null, {
                                        default: withCtx(() => [
                                          (openBlock(), createBlock(Fragment, null, renderList(terminals, (t) => {
                                            return createVNode(_component_UiTabsTrigger, {
                                              key: t,
                                              value: t,
                                              onClick: ($event) => unref(newPayment).terminal = t
                                            }, {
                                              default: withCtx(() => [
                                                createTextVNode(toDisplayString(t), 1)
                                              ]),
                                              _: 2
                                            }, 1032, ["value", "onClick"]);
                                          }), 64))
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  })
                                ], 2)) : createCommentVNode("", true),
                                createVNode("div", { class: "relative flex items-center space-x-2" }, [
                                  createVNode(_component_UiSwitch, {
                                    id: "isConfirmed",
                                    checked: unref(newPayment).isConfirmed,
                                    "onUpdate:checked": ($event) => unref(newPayment).isConfirmed = $event
                                  }, null, 8, ["checked", "onUpdate:checked"]),
                                  createVNode(_component_UiLabel, { for: "isConfirmed" }, {
                                    default: withCtx(() => [
                                      createTextVNode("\u041F\u043E\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043D")
                                    ]),
                                    _: 1
                                  })
                                ])
                              ])
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    createVNode(_component_UiDialogFooter, null, {
                      default: withCtx(() => [
                        createVNode(_component_UiButton, { onClick: savePayment }, {
                          default: withCtx(() => [
                            createTextVNode(" \u0421\u043E\u0437\u0434\u0430\u0442\u044C ")
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
          } else {
            return [
              createVNode(_component_UiDialogTrigger, { "as-child": "" }, {
                default: withCtx(() => [
                  createVNode(_component_UiButton, { class: "h-5 w-5 px-0 py-2" }, {
                    default: withCtx(() => [
                      createVNode(_component_Icon, {
                        name: "akar-icons:plus",
                        color: "white",
                        size: "15px"
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(_component_UiDialogContent, { class: "flex flex-col max-w-[450px]" }, {
                default: withCtx(() => [
                  createVNode(_component_UiDialogHeader, null, {
                    default: withCtx(() => [
                      createVNode(_component_UiDialogTitle, null, {
                        default: withCtx(() => [
                          createTextVNode("\u0421\u043E\u0437\u0434\u0430\u0442\u044C")
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode("div", { class: "flex gap-4" }, [
                    createVNode(_component_UiCard, { class: "w-full" }, {
                      default: withCtx(() => [
                        createVNode(_component_UiCardHeader, null, {
                          default: withCtx(() => [
                            createVNode(_component_UiCardTitle, null, {
                              default: withCtx(() => [
                                createTextVNode("\u041F\u043B\u0430\u0442\u0435\u0436")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_UiCardDescription, null, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(unref(checkPaymentMessage)), 1)
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(_component_UiCardContent, null, {
                          default: withCtx(() => [
                            createVNode("div", { class: "flex flex-col gap-6" }, [
                              createVNode("div", { class: "relative" }, [
                                createVNode(_component_UiSelect, {
                                  modelValue: unref(newPayment).method,
                                  "onUpdate:modelValue": ($event) => unref(newPayment).method = $event
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_UiSelectTrigger, null, {
                                      default: withCtx(() => [
                                        createVNode(_component_UiSelectValue, {
                                          placeholder: unref(newPayment).method
                                        }, null, 8, ["placeholder"])
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_UiSelectContent, null, {
                                      default: withCtx(() => [
                                        (openBlock(), createBlock(Fragment, null, renderList(methods, (item, i) => {
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
                                createVNode(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap" }, {
                                  default: withCtx(() => [
                                    createTextVNode("\u0421\u0443\u043C\u043C\u0430")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_UiInput, {
                                  modelValue: unref(newPayment).price,
                                  "onUpdate:modelValue": ($event) => unref(newPayment).price = $event,
                                  type: "number",
                                  placeholder: "\u0421\u0443\u043C\u043C\u0430",
                                  class: unref(newPayment).price ? "" : "outline outline-1 outline-rose-300"
                                }, null, 8, ["modelValue", "onUpdate:modelValue", "class"])
                              ]),
                              createVNode("div", { class: "relative" }, [
                                createVNode(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap" }, {
                                  default: withCtx(() => [
                                    createTextVNode("\u0414\u0430\u0442\u0430 \u043E\u043F\u043B\u0430\u0442\u044B")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_UiInput, {
                                  modelValue: unref(newPayment).date,
                                  "onUpdate:modelValue": ($event) => unref(newPayment).date = $event,
                                  type: "date",
                                  placeholder: "\u0414\u0430\u0442\u0430 \u043E\u043F\u043B\u0430\u0442\u044B",
                                  class: unref(newPayment).date ? "" : "outline outline-1 outline-rose-300"
                                }, null, 8, ["modelValue", "onUpdate:modelValue", "class"])
                              ]),
                              unref(newPayment).method === "\u0412\u043E\u0437\u0432\u0440\u0430\u0442" ? (openBlock(), createBlock("div", {
                                key: 0,
                                class: "relative"
                              }, [
                                createVNode(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1" }, {
                                  default: withCtx(() => [
                                    createTextVNode("\u041F\u0440\u0438\u0447\u0438\u043D\u0430")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_UiTextarea, {
                                  modelValue: unref(newPayment).description,
                                  "onUpdate:modelValue": ($event) => unref(newPayment).description = $event,
                                  placeholder: "\u0418\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F \u043E \u0432\u043E\u0437\u0432\u0440\u0430\u0442\u0435"
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ])) : createCommentVNode("", true),
                              createVNode("div", { class: "relative" }, [
                                unref(newPayment).paymentId ? (openBlock(), createBlock(_component_UiLabel, {
                                  key: 0,
                                  class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("paymentId")
                                  ]),
                                  _: 1
                                })) : createCommentVNode("", true),
                                createVNode(_component_UiInput, {
                                  modelValue: unref(newPayment).paymentId,
                                  "onUpdate:modelValue": ($event) => unref(newPayment).paymentId = $event,
                                  placeholder: "paymentId"
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ]),
                              unref(newPayment).paymentId ? (openBlock(), createBlock("div", {
                                key: 1,
                                class: unref(newPayment).terminal ? "" : "outline outline-1 outline-rose-300"
                              }, [
                                createVNode(_component_UiTabs, null, {
                                  default: withCtx(() => [
                                    createVNode(_component_UiTabsList, null, {
                                      default: withCtx(() => [
                                        (openBlock(), createBlock(Fragment, null, renderList(terminals, (t) => {
                                          return createVNode(_component_UiTabsTrigger, {
                                            key: t,
                                            value: t,
                                            onClick: ($event) => unref(newPayment).terminal = t
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode(toDisplayString(t), 1)
                                            ]),
                                            _: 2
                                          }, 1032, ["value", "onClick"]);
                                        }), 64))
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                })
                              ], 2)) : createCommentVNode("", true),
                              createVNode("div", { class: "relative flex items-center space-x-2" }, [
                                createVNode(_component_UiSwitch, {
                                  id: "isConfirmed",
                                  checked: unref(newPayment).isConfirmed,
                                  "onUpdate:checked": ($event) => unref(newPayment).isConfirmed = $event
                                }, null, 8, ["checked", "onUpdate:checked"]),
                                createVNode(_component_UiLabel, { for: "isConfirmed" }, {
                                  default: withCtx(() => [
                                    createTextVNode("\u041F\u043E\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043D")
                                  ]),
                                  _: 1
                                })
                              ])
                            ])
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ]),
                  createVNode(_component_UiDialogFooter, null, {
                    default: withCtx(() => [
                      createVNode(_component_UiButton, { onClick: savePayment }, {
                        default: withCtx(() => [
                          createTextVNode(" \u0421\u043E\u0437\u0434\u0430\u0442\u044C ")
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
      }, _parent));
    };
  }
});
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/my/payments/CreatePaymentModal.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "CreateDopCard",
  __ssrInlineRender: true,
  props: {
    managers: {},
    doptypes: {}
  },
  emits: ["update:dopBlank"],
  setup(__props, { emit: __emit }) {
    const newDopBlank = {
      id: 0,
      dealId: 0,
      saleDate: "",
      type: "",
      price: 0,
      userId: 0
    };
    const dopData = ref({ ...newDopBlank });
    const emit = __emit;
    watch(
      dopData,
      () => {
        emit("update:dopBlank", dopData.value);
      },
      { deep: true }
    );
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UiCard = _sfc_main$3$1;
      const _component_UiCardHeader = _sfc_main$2$1;
      const _component_UiCardTitle = _sfc_main$1$1;
      const _component_UiCardDescription = _sfc_main$k;
      const _component_UiCardContent = _sfc_main$1$6;
      const _component_UiLabel = _sfc_main$z;
      const _component_UiInput = _sfc_main$m;
      const _component_MyComboboxModels = _sfc_main$r;
      const _component_MyCombobox = _sfc_main$B;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-full" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_UiCard, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UiCardHeader, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UiCardTitle, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`\u0414\u043E\u043F. \u043F\u0440\u043E\u0434\u0430\u0436\u0430`);
                      } else {
                        return [
                          createTextVNode("\u0414\u043E\u043F. \u043F\u0440\u043E\u0434\u0430\u0436\u0430")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_UiCardDescription, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`\u0417\u0430\u043F\u043E\u043B\u043D\u0438 \u0434\u0430\u043D\u043D\u044B\u0435`);
                      } else {
                        return [
                          createTextVNode("\u0417\u0430\u043F\u043E\u043B\u043D\u0438 \u0434\u0430\u043D\u043D\u044B\u0435")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UiCardTitle, null, {
                      default: withCtx(() => [
                        createTextVNode("\u0414\u043E\u043F. \u043F\u0440\u043E\u0434\u0430\u0436\u0430")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_UiCardDescription, null, {
                      default: withCtx(() => [
                        createTextVNode("\u0417\u0430\u043F\u043E\u043B\u043D\u0438 \u0434\u0430\u043D\u043D\u044B\u0435")
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
                  _push3(`<div class="flex flex-col gap-6"${_scopeId2}><div class="relative"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`\u0414\u0430\u0442\u0430 \u043F\u0440\u043E\u0434\u0430\u0436\u0438`);
                      } else {
                        return [
                          createTextVNode("\u0414\u0430\u0442\u0430 \u043F\u0440\u043E\u0434\u0430\u0436\u0438")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_UiInput, {
                    modelValue: unref(dopData).saleDate,
                    "onUpdate:modelValue": ($event) => unref(dopData).saleDate = $event,
                    type: "date",
                    placeholder: "\u0414\u0430\u0442\u0430 \u043F\u0440\u043E\u0434\u0430\u0436\u0438",
                    class: unref(dopData).saleDate ? "" : "outline outline-1 outline-rose-300"
                  }, null, _parent3, _scopeId2));
                  _push3(`</div><div class="relative"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`\u041C\u0435\u043D\u0435\u0434\u0436\u0435\u0440`);
                      } else {
                        return [
                          createTextVNode("\u041C\u0435\u043D\u0435\u0434\u0436\u0435\u0440")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_MyComboboxModels, {
                    class: unref(dopData).userId ? "" : "outline-1 outline-rose-300 rounded-md",
                    items: _ctx.managers.map((m) => ({ value: m.id, label: m.fullName })),
                    label: "\u0412\u044B\u0431\u0440\u0430\u0442\u044C \u043C\u0435\u043D\u0435\u0434\u0436\u0435\u0440\u0430",
                    onSelectedItem: (value) => unref(dopData).userId = value
                  }, null, _parent3, _scopeId2));
                  _push3(`</div><div class="relative"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`\u0421\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C`);
                      } else {
                        return [
                          createTextVNode("\u0421\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_UiInput, {
                    modelValue: unref(dopData).price,
                    "onUpdate:modelValue": ($event) => unref(dopData).price = $event,
                    type: "number",
                    placeholder: "\u0421\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C",
                    class: unref(dopData).price ? "" : "outline outline-1 outline-rose-300 rounded-md"
                  }, null, _parent3, _scopeId2));
                  _push3(`</div><div class="relative"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`\u0422\u0438\u043F`);
                      } else {
                        return [
                          createTextVNode("\u0422\u0438\u043F")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_MyCombobox, {
                    class: unref(dopData).type ? "" : "outline outline-1 outline-rose-300 rounded-md",
                    items: _ctx.doptypes,
                    label: unref(dopData).type,
                    onSelectedItem: (value) => unref(dopData).type = value
                  }, null, _parent3, _scopeId2));
                  _push3(`</div></div>`);
                } else {
                  return [
                    createVNode("div", { class: "flex flex-col gap-6" }, [
                      createVNode("div", { class: "relative" }, [
                        createVNode(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap" }, {
                          default: withCtx(() => [
                            createTextVNode("\u0414\u0430\u0442\u0430 \u043F\u0440\u043E\u0434\u0430\u0436\u0438")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_UiInput, {
                          modelValue: unref(dopData).saleDate,
                          "onUpdate:modelValue": ($event) => unref(dopData).saleDate = $event,
                          type: "date",
                          placeholder: "\u0414\u0430\u0442\u0430 \u043F\u0440\u043E\u0434\u0430\u0436\u0438",
                          class: unref(dopData).saleDate ? "" : "outline outline-1 outline-rose-300"
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "class"])
                      ]),
                      createVNode("div", { class: "relative" }, [
                        createVNode(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap" }, {
                          default: withCtx(() => [
                            createTextVNode("\u041C\u0435\u043D\u0435\u0434\u0436\u0435\u0440")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_MyComboboxModels, {
                          class: unref(dopData).userId ? "" : "outline-1 outline-rose-300 rounded-md",
                          items: _ctx.managers.map((m) => ({ value: m.id, label: m.fullName })),
                          label: "\u0412\u044B\u0431\u0440\u0430\u0442\u044C \u043C\u0435\u043D\u0435\u0434\u0436\u0435\u0440\u0430",
                          onSelectedItem: (value) => unref(dopData).userId = value
                        }, null, 8, ["class", "items", "onSelectedItem"])
                      ]),
                      createVNode("div", { class: "relative" }, [
                        createVNode(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap" }, {
                          default: withCtx(() => [
                            createTextVNode("\u0421\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_UiInput, {
                          modelValue: unref(dopData).price,
                          "onUpdate:modelValue": ($event) => unref(dopData).price = $event,
                          type: "number",
                          placeholder: "\u0421\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C",
                          class: unref(dopData).price ? "" : "outline outline-1 outline-rose-300 rounded-md"
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "class"])
                      ]),
                      createVNode("div", { class: "relative" }, [
                        createVNode(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1" }, {
                          default: withCtx(() => [
                            createTextVNode("\u0422\u0438\u043F")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_MyCombobox, {
                          class: unref(dopData).type ? "" : "outline outline-1 outline-rose-300 rounded-md",
                          items: _ctx.doptypes,
                          label: unref(dopData).type,
                          onSelectedItem: (value) => unref(dopData).type = value
                        }, null, 8, ["class", "items", "label", "onSelectedItem"])
                      ])
                    ])
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
                      createTextVNode("\u0414\u043E\u043F. \u043F\u0440\u043E\u0434\u0430\u0436\u0430")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_UiCardDescription, null, {
                    default: withCtx(() => [
                      createTextVNode("\u0417\u0430\u043F\u043E\u043B\u043D\u0438 \u0434\u0430\u043D\u043D\u044B\u0435")
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(_component_UiCardContent, null, {
                default: withCtx(() => [
                  createVNode("div", { class: "flex flex-col gap-6" }, [
                    createVNode("div", { class: "relative" }, [
                      createVNode(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap" }, {
                        default: withCtx(() => [
                          createTextVNode("\u0414\u0430\u0442\u0430 \u043F\u0440\u043E\u0434\u0430\u0436\u0438")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_UiInput, {
                        modelValue: unref(dopData).saleDate,
                        "onUpdate:modelValue": ($event) => unref(dopData).saleDate = $event,
                        type: "date",
                        placeholder: "\u0414\u0430\u0442\u0430 \u043F\u0440\u043E\u0434\u0430\u0436\u0438",
                        class: unref(dopData).saleDate ? "" : "outline outline-1 outline-rose-300"
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "class"])
                    ]),
                    createVNode("div", { class: "relative" }, [
                      createVNode(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap" }, {
                        default: withCtx(() => [
                          createTextVNode("\u041C\u0435\u043D\u0435\u0434\u0436\u0435\u0440")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_MyComboboxModels, {
                        class: unref(dopData).userId ? "" : "outline-1 outline-rose-300 rounded-md",
                        items: _ctx.managers.map((m) => ({ value: m.id, label: m.fullName })),
                        label: "\u0412\u044B\u0431\u0440\u0430\u0442\u044C \u043C\u0435\u043D\u0435\u0434\u0436\u0435\u0440\u0430",
                        onSelectedItem: (value) => unref(dopData).userId = value
                      }, null, 8, ["class", "items", "onSelectedItem"])
                    ]),
                    createVNode("div", { class: "relative" }, [
                      createVNode(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap" }, {
                        default: withCtx(() => [
                          createTextVNode("\u0421\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_UiInput, {
                        modelValue: unref(dopData).price,
                        "onUpdate:modelValue": ($event) => unref(dopData).price = $event,
                        type: "number",
                        placeholder: "\u0421\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C",
                        class: unref(dopData).price ? "" : "outline outline-1 outline-rose-300 rounded-md"
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "class"])
                    ]),
                    createVNode("div", { class: "relative" }, [
                      createVNode(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1" }, {
                        default: withCtx(() => [
                          createTextVNode("\u0422\u0438\u043F")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_MyCombobox, {
                        class: unref(dopData).type ? "" : "outline outline-1 outline-rose-300 rounded-md",
                        items: _ctx.doptypes,
                        label: unref(dopData).type,
                        onSelectedItem: (value) => unref(dopData).type = value
                      }, null, 8, ["class", "items", "label", "onSelectedItem"])
                    ])
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
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/my/dops/CreateDopCard.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "CreateDopModal",
  __ssrInlineRender: true,
  props: {
    dealId: {}
  },
  emits: ["isDopCreated"],
  setup(__props, { emit: __emit }) {
    const { $useApi } = useNuxtApp();
    const props = __props;
    const isOpen = ref(false);
    const managers = ref([]);
    const types = ref([]);
    const getDatas = async () => {
      try {
        const { data } = await $useApi.get(`/managers`) || [];
        managers.value = data;
        console.log(managers.value);
        const { data: doptypes } = await $useApi.get("/dops/types") || [];
        types.value = doptypes;
        console.log(doptypes);
      } catch (e) {
        console.log(e);
      }
    };
    const newDopBlank = {
      id: 0,
      dealId: 0,
      saleDate: "",
      type: "",
      price: 0,
      userId: 0
    };
    const newDop = ref(newDopBlank);
    const emit = __emit;
    const saveDop = async () => {
      try {
        await $useApi.post(`/dops`, {
          // method: 'post',
          ...newDop.value,
          dealId: props.dealId
        });
        console.log("dop created");
        emit("isDopCreated");
        isOpen.value = false;
        return;
      } catch (error) {
        console.log(error);
      }
    };
    watch(isOpen, () => {
      if (!isOpen.value) {
        newDop.value = newDopBlank;
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UiDialog = _sfc_main$4$1;
      const _component_UiDialogTrigger = _sfc_main$3$2;
      const _component_UiButton = _sfc_main$o;
      const _component_Icon = __nuxt_component_7;
      const _component_UiDialogContent = _sfc_main$p;
      const _component_UiDialogHeader = _sfc_main$2$3;
      const _component_UiDialogTitle = _sfc_main$1$3;
      const _component_MyDopsCreateDopCard = _sfc_main$4;
      const _component_UiDialogFooter = _sfc_main$s;
      _push(ssrRenderComponent(_component_UiDialog, mergeProps({
        open: unref(isOpen),
        "onUpdate:open": ($event) => isRef(isOpen) ? isOpen.value = $event : null
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UiDialogTrigger, { "as-child": "" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UiButton, {
                    class: "h-5 w-5 px-0 py-2",
                    onClick: getDatas
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_Icon, {
                          name: "akar-icons:plus",
                          color: "white",
                          size: "15px"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_Icon, {
                            name: "akar-icons:plus",
                            color: "white",
                            size: "15px"
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UiButton, {
                      class: "h-5 w-5 px-0 py-2",
                      onClick: getDatas
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_Icon, {
                          name: "akar-icons:plus",
                          color: "white",
                          size: "15px"
                        })
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
                              _push5(`\u0421\u043E\u0437\u0434\u0430\u0442\u044C`);
                            } else {
                              return [
                                createTextVNode("\u0421\u043E\u0437\u0434\u0430\u0442\u044C")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_UiDialogTitle, null, {
                            default: withCtx(() => [
                              createTextVNode("\u0421\u043E\u0437\u0434\u0430\u0442\u044C")
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`<div class="flex gap-4"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_MyDopsCreateDopCard, {
                    managers: unref(managers),
                    doptypes: unref(types),
                    "onUpdate:dopBlank": (value) => newDop.value = value
                  }, null, _parent3, _scopeId2));
                  _push3(`</div>`);
                  _push3(ssrRenderComponent(_component_UiDialogFooter, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_UiButton, { onClick: saveDop }, {
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
                      } else {
                        return [
                          createVNode(_component_UiButton, { onClick: saveDop }, {
                            default: withCtx(() => [
                              createTextVNode(" \u0421\u043E\u0437\u0434\u0430\u0442\u044C ")
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
                    createVNode(_component_UiDialogHeader, null, {
                      default: withCtx(() => [
                        createVNode(_component_UiDialogTitle, null, {
                          default: withCtx(() => [
                            createTextVNode("\u0421\u043E\u0437\u0434\u0430\u0442\u044C")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode("div", { class: "flex gap-4" }, [
                      createVNode(_component_MyDopsCreateDopCard, {
                        managers: unref(managers),
                        doptypes: unref(types),
                        "onUpdate:dopBlank": (value) => newDop.value = value
                      }, null, 8, ["managers", "doptypes", "onUpdate:dopBlank"])
                    ]),
                    createVNode(_component_UiDialogFooter, null, {
                      default: withCtx(() => [
                        createVNode(_component_UiButton, { onClick: saveDop }, {
                          default: withCtx(() => [
                            createTextVNode(" \u0421\u043E\u0437\u0434\u0430\u0442\u044C ")
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
          } else {
            return [
              createVNode(_component_UiDialogTrigger, { "as-child": "" }, {
                default: withCtx(() => [
                  createVNode(_component_UiButton, {
                    class: "h-5 w-5 px-0 py-2",
                    onClick: getDatas
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_Icon, {
                        name: "akar-icons:plus",
                        color: "white",
                        size: "15px"
                      })
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
                          createTextVNode("\u0421\u043E\u0437\u0434\u0430\u0442\u044C")
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode("div", { class: "flex gap-4" }, [
                    createVNode(_component_MyDopsCreateDopCard, {
                      managers: unref(managers),
                      doptypes: unref(types),
                      "onUpdate:dopBlank": (value) => newDop.value = value
                    }, null, 8, ["managers", "doptypes", "onUpdate:dopBlank"])
                  ]),
                  createVNode(_component_UiDialogFooter, null, {
                    default: withCtx(() => [
                      createVNode(_component_UiButton, { onClick: saveDop }, {
                        default: withCtx(() => [
                          createTextVNode(" \u0421\u043E\u0437\u0434\u0430\u0442\u044C ")
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
      }, _parent));
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/my/dops/CreateDopModal.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "CreateModal",
  __ssrInlineRender: true,
  props: {
    dealId: {}
  },
  emits: ["isReviewCreated", "error"],
  setup(__props, { emit: __emit }) {
    const { $useApi } = useNuxtApp();
    const props = __props;
    const emit = __emit;
    const managers = ref([]);
    const isOpen = ref(false);
    const file = ref(null);
    const errorMessage = ref(null);
    const previewUrl = ref(null);
    const isLoading = ref(false);
    const disabled = ref(true);
    const newReviewBlank = {
      id: 0,
      dealId: 0,
      date: "",
      userId: 0
    };
    const newReview = ref({ ...newReviewBlank });
    const getFile = (event) => {
      var _a;
      const input = event.target;
      const selectedFile = (_a = input.files) == null ? void 0 : _a[0];
      if (!selectedFile) {
        errorMessage.value = "\u041F\u043E\u0436\u0430\u043B\u0443\u0439\u0441\u0442\u0430, \u0432\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0444\u0430\u0439\u043B";
        file.value = null;
        previewUrl.value = null;
        return;
      }
      validateAndSetFile(selectedFile);
    };
    const saveReview = async () => {
      var _a, _b;
      if (!file.value) {
        errorMessage.value = "\u0424\u0430\u0439\u043B \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u0435\u043D \u0434\u043B\u044F \u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0438";
        return;
      }
      isLoading.value = true;
      errorMessage.value = null;
      try {
        const formData = new FormData();
        formData.append("file", file.value);
        formData.append("date", newReview.value.date);
        formData.append("userId", String(newReview.value.userId));
        formData.append("dealId", String(props.dealId));
        await $useApi.post("/reviews", formData, {
          headers: {
            "Content-Type": "multipart/form-data"
          }
        });
        emit("isReviewCreated");
        isOpen.value = false;
      } catch (error) {
        const message = ((_b = (_a = error.response) == null ? void 0 : _a.data) == null ? void 0 : _b.message) || "\u041E\u0448\u0438\u0431\u043A\u0430 \u043F\u0440\u0438 \u0441\u043E\u0437\u0434\u0430\u043D\u0438\u0438 \u043E\u0442\u0437\u044B\u0432\u0430";
        errorMessage.value = message;
        emit("error", message);
      } finally {
        isLoading.value = false;
      }
    };
    const handlePaste = (event) => {
      var _a;
      const clipboardItems = (_a = event.clipboardData) == null ? void 0 : _a.items;
      if (!clipboardItems) {
        errorMessage.value = "\u041D\u0435\u0432\u043E\u0437\u043C\u043E\u0436\u043D\u043E \u043F\u043E\u043B\u0443\u0447\u0438\u0442\u044C \u0434\u0430\u043D\u043D\u044B\u0435 \u0438\u0437 \u0431\u0443\u0444\u0435\u0440\u0430 \u043E\u0431\u043C\u0435\u043D\u0430";
        return;
      }
      for (const item of clipboardItems) {
        if (item.type.startsWith("image/")) {
          const pastedFile = item.getAsFile();
          if (pastedFile) {
            validateAndSetFile(pastedFile);
            return;
          }
        }
      }
      errorMessage.value = "\u0412 \u0431\u0443\u0444\u0435\u0440\u0435 \u043E\u0431\u043C\u0435\u043D\u0430 \u043D\u0435\u0442 \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u044F";
    };
    const validateAndSetFile = (selectedFile) => {
      const allowedTypes = ["image/jpeg", "image/png"];
      const maxSize = 5 * 1024 * 1024;
      if (!allowedTypes.includes(selectedFile.type)) {
        errorMessage.value = "\u0414\u043E\u043F\u0443\u0441\u0442\u0438\u043C\u044B \u0442\u043E\u043B\u044C\u043A\u043E \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u044F (JPEG, PNG)";
        file.value = null;
        previewUrl.value = null;
        return;
      }
      if (selectedFile.size > maxSize) {
        errorMessage.value = "\u0420\u0430\u0437\u043C\u0435\u0440 \u0444\u0430\u0439\u043B\u0430 \u043D\u0435 \u0434\u043E\u043B\u0436\u0435\u043D \u043F\u0440\u0435\u0432\u044B\u0448\u0430\u0442\u044C 5MB";
        file.value = null;
        previewUrl.value = null;
        return;
      }
      errorMessage.value = null;
      file.value = selectedFile;
      const reader = new FileReader();
      reader.onload = (e) => {
        var _a;
        previewUrl.value = (_a = e.target) == null ? void 0 : _a.result;
      };
      reader.readAsDataURL(selectedFile);
    };
    watch(
      [newReview, file],
      () => {
        const { date, userId } = newReview.value;
        disabled.value = !(date && userId && file.value);
      },
      { deep: true }
    );
    watch(isOpen, (newValue) => {
      if (!newValue) {
        newReview.value = { ...newReviewBlank };
        file.value = null;
        previewUrl.value = null;
        errorMessage.value = null;
        const fileInput = (void 0).getElementById(
          "file-input"
        );
        console.log(fileInput);
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UiDialog = _sfc_main$4$1;
      const _component_UiDialogTrigger = _sfc_main$3$2;
      const _component_UiButton = _sfc_main$o;
      const _component_Icon = __nuxt_component_7;
      const _component_UiDialogContent = _sfc_main$p;
      const _component_UiDialogHeader = _sfc_main$2$3;
      const _component_UiDialogTitle = _sfc_main$1$3;
      const _component_UiLabel = _sfc_main$z;
      const _component_UiInput = _sfc_main$m;
      const _component_MyComboboxModels = _sfc_main$r;
      const _component_NuxtImg = _sfc_main$D;
      const _component_UiDialogFooter = _sfc_main$s;
      _push(ssrRenderComponent(_component_UiDialog, mergeProps({
        open: unref(isOpen),
        "onUpdate:open": ($event) => isRef(isOpen) ? isOpen.value = $event : null
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UiDialogTrigger, { "as-child": "" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UiButton, { class: "h-5 w-5 px-0 py-2" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_Icon, {
                          name: "akar-icons:plus",
                          color: "white",
                          size: "15px"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_Icon, {
                            name: "akar-icons:plus",
                            color: "white",
                            size: "15px"
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UiButton, { class: "h-5 w-5 px-0 py-2" }, {
                      default: withCtx(() => [
                        createVNode(_component_Icon, {
                          name: "akar-icons:plus",
                          color: "white",
                          size: "15px"
                        })
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
                              _push5(`\u0421\u043E\u0437\u0434\u0430\u0442\u044C \u043E\u0442\u0437\u044B\u0432`);
                            } else {
                              return [
                                createTextVNode("\u0421\u043E\u0437\u0434\u0430\u0442\u044C \u043E\u0442\u0437\u044B\u0432")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_UiDialogTitle, null, {
                            default: withCtx(() => [
                              createTextVNode("\u0421\u043E\u0437\u0434\u0430\u0442\u044C \u043E\u0442\u0437\u044B\u0432")
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`<div class="flex flex-col gap-6"${_scopeId2}>`);
                  if (unref(errorMessage)) {
                    _push3(`<div class="text-red-500 text-sm"${_scopeId2}>${ssrInterpolate(unref(errorMessage))}</div>`);
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(`<div class="relative"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`\u0421\u043A\u0440\u0438\u043D\u0448\u043E\u0442(Ctrl+v)`);
                      } else {
                        return [
                          createTextVNode("\u0421\u043A\u0440\u0438\u043D\u0448\u043E\u0442(Ctrl+v)")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_UiInput, {
                    id: "file-input",
                    type: "file",
                    accept: "image/jpeg,image/png",
                    class: [
                      unref(file) ? "" : "outline-1 outline-rose-300 rounded-md",
                      "cursor-pointer"
                    ],
                    onChange: ($event) => getFile($event),
                    onPaste: handlePaste
                  }, null, _parent3, _scopeId2));
                  _push3(`</div><div class="relative"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`\u0414\u0430\u0442\u0430`);
                      } else {
                        return [
                          createTextVNode("\u0414\u0430\u0442\u0430")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_UiInput, {
                    modelValue: unref(newReview).date,
                    "onUpdate:modelValue": ($event) => unref(newReview).date = $event,
                    type: "date",
                    placeholder: "\u0414\u0430\u0442\u0430 \u043F\u0440\u043E\u0434\u0430\u0436\u0438",
                    class: unref(newReview).date ? "" : "outline outline-1 outline-rose-300"
                  }, null, _parent3, _scopeId2));
                  _push3(`</div><div class="relative"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`\u041C\u0435\u043D\u0435\u0434\u0436\u0435\u0440`);
                      } else {
                        return [
                          createTextVNode("\u041C\u0435\u043D\u0435\u0434\u0436\u0435\u0440")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_MyComboboxModels, {
                    class: unref(newReview).userId ? "" : "outline-1 outline-rose-300 rounded-md",
                    items: unref(managers).map((m) => ({ value: m.id, label: m.fullName })),
                    label: "\u0412\u044B\u0431\u0440\u0430\u0442\u044C \u043C\u0435\u043D\u0435\u0434\u0436\u0435\u0440\u0430",
                    onSelectedItem: (value) => unref(newReview).userId = value
                  }, null, _parent3, _scopeId2));
                  _push3(`</div>`);
                  if (unref(previewUrl)) {
                    _push3(`<div class="mt-2"${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_NuxtImg, {
                      src: unref(previewUrl),
                      alt: "\u041F\u0440\u0435\u0432\u044C\u044E \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u044F",
                      class: "w-full h-auto rounded-md"
                    }, null, _parent3, _scopeId2));
                    _push3(`</div>`);
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(`</div>`);
                  _push3(ssrRenderComponent(_component_UiDialogFooter, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_UiButton, {
                          disabled: unref(disabled) || unref(isLoading),
                          onClick: saveReview
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
                            onClick: saveReview
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
                            createTextVNode("\u0421\u043E\u0437\u0434\u0430\u0442\u044C \u043E\u0442\u0437\u044B\u0432")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode("div", { class: "flex flex-col gap-6" }, [
                      unref(errorMessage) ? (openBlock(), createBlock("div", {
                        key: 0,
                        class: "text-red-500 text-sm"
                      }, toDisplayString(unref(errorMessage)), 1)) : createCommentVNode("", true),
                      createVNode("div", { class: "relative" }, [
                        createVNode(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap" }, {
                          default: withCtx(() => [
                            createTextVNode("\u0421\u043A\u0440\u0438\u043D\u0448\u043E\u0442(Ctrl+v)")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_UiInput, {
                          id: "file-input",
                          type: "file",
                          accept: "image/jpeg,image/png",
                          class: [
                            unref(file) ? "" : "outline-1 outline-rose-300 rounded-md",
                            "cursor-pointer"
                          ],
                          onChange: ($event) => getFile($event),
                          onPaste: handlePaste
                        }, null, 8, ["class", "onChange"])
                      ]),
                      createVNode("div", { class: "relative" }, [
                        createVNode(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap" }, {
                          default: withCtx(() => [
                            createTextVNode("\u0414\u0430\u0442\u0430")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_UiInput, {
                          modelValue: unref(newReview).date,
                          "onUpdate:modelValue": ($event) => unref(newReview).date = $event,
                          type: "date",
                          placeholder: "\u0414\u0430\u0442\u0430 \u043F\u0440\u043E\u0434\u0430\u0436\u0438",
                          class: unref(newReview).date ? "" : "outline outline-1 outline-rose-300"
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "class"])
                      ]),
                      createVNode("div", { class: "relative" }, [
                        createVNode(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap" }, {
                          default: withCtx(() => [
                            createTextVNode("\u041C\u0435\u043D\u0435\u0434\u0436\u0435\u0440")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_MyComboboxModels, {
                          class: unref(newReview).userId ? "" : "outline-1 outline-rose-300 rounded-md",
                          items: unref(managers).map((m) => ({ value: m.id, label: m.fullName })),
                          label: "\u0412\u044B\u0431\u0440\u0430\u0442\u044C \u043C\u0435\u043D\u0435\u0434\u0436\u0435\u0440\u0430",
                          onSelectedItem: (value) => unref(newReview).userId = value
                        }, null, 8, ["class", "items", "onSelectedItem"])
                      ]),
                      unref(previewUrl) ? (openBlock(), createBlock("div", {
                        key: 1,
                        class: "mt-2"
                      }, [
                        createVNode(_component_NuxtImg, {
                          src: unref(previewUrl),
                          alt: "\u041F\u0440\u0435\u0432\u044C\u044E \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u044F",
                          class: "w-full h-auto rounded-md"
                        }, null, 8, ["src"])
                      ])) : createCommentVNode("", true)
                    ]),
                    createVNode(_component_UiDialogFooter, null, {
                      default: withCtx(() => [
                        createVNode(_component_UiButton, {
                          disabled: unref(disabled) || unref(isLoading),
                          onClick: saveReview
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
                  createVNode(_component_UiButton, { class: "h-5 w-5 px-0 py-2" }, {
                    default: withCtx(() => [
                      createVNode(_component_Icon, {
                        name: "akar-icons:plus",
                        color: "white",
                        size: "15px"
                      })
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
                          createTextVNode("\u0421\u043E\u0437\u0434\u0430\u0442\u044C \u043E\u0442\u0437\u044B\u0432")
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode("div", { class: "flex flex-col gap-6" }, [
                    unref(errorMessage) ? (openBlock(), createBlock("div", {
                      key: 0,
                      class: "text-red-500 text-sm"
                    }, toDisplayString(unref(errorMessage)), 1)) : createCommentVNode("", true),
                    createVNode("div", { class: "relative" }, [
                      createVNode(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap" }, {
                        default: withCtx(() => [
                          createTextVNode("\u0421\u043A\u0440\u0438\u043D\u0448\u043E\u0442(Ctrl+v)")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_UiInput, {
                        id: "file-input",
                        type: "file",
                        accept: "image/jpeg,image/png",
                        class: [
                          unref(file) ? "" : "outline-1 outline-rose-300 rounded-md",
                          "cursor-pointer"
                        ],
                        onChange: ($event) => getFile($event),
                        onPaste: handlePaste
                      }, null, 8, ["class", "onChange"])
                    ]),
                    createVNode("div", { class: "relative" }, [
                      createVNode(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap" }, {
                        default: withCtx(() => [
                          createTextVNode("\u0414\u0430\u0442\u0430")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_UiInput, {
                        modelValue: unref(newReview).date,
                        "onUpdate:modelValue": ($event) => unref(newReview).date = $event,
                        type: "date",
                        placeholder: "\u0414\u0430\u0442\u0430 \u043F\u0440\u043E\u0434\u0430\u0436\u0438",
                        class: unref(newReview).date ? "" : "outline outline-1 outline-rose-300"
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "class"])
                    ]),
                    createVNode("div", { class: "relative" }, [
                      createVNode(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap" }, {
                        default: withCtx(() => [
                          createTextVNode("\u041C\u0435\u043D\u0435\u0434\u0436\u0435\u0440")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_MyComboboxModels, {
                        class: unref(newReview).userId ? "" : "outline-1 outline-rose-300 rounded-md",
                        items: unref(managers).map((m) => ({ value: m.id, label: m.fullName })),
                        label: "\u0412\u044B\u0431\u0440\u0430\u0442\u044C \u043C\u0435\u043D\u0435\u0434\u0436\u0435\u0440\u0430",
                        onSelectedItem: (value) => unref(newReview).userId = value
                      }, null, 8, ["class", "items", "onSelectedItem"])
                    ]),
                    unref(previewUrl) ? (openBlock(), createBlock("div", {
                      key: 1,
                      class: "mt-2"
                    }, [
                      createVNode(_component_NuxtImg, {
                        src: unref(previewUrl),
                        alt: "\u041F\u0440\u0435\u0432\u044C\u044E \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u044F",
                        class: "w-full h-auto rounded-md"
                      }, null, 8, ["src"])
                    ])) : createCommentVNode("", true)
                  ]),
                  createVNode(_component_UiDialogFooter, null, {
                    default: withCtx(() => [
                      createVNode(_component_UiButton, {
                        disabled: unref(disabled) || unref(isLoading),
                        onClick: saveReview
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
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/my/reviews/CreateModal.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const useMyGetDaysDifference = (dateString1, dateString2) => {
  const date1 = new Date(dateString1);
  const date2 = new Date(dateString2);
  const timeDifference = Math.abs(date2.getTime() - date1.getTime());
  const differenceInDays = Math.ceil(timeDifference / (1e3 * 3600 * 24));
  return differenceInDays;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "DealCard",
  __ssrInlineRender: true,
  props: {
    deal: {}
  },
  emits: ["deal-updated", "deal-deleted", "update-deal"],
  setup(__props, { emit: __emit }) {
    const { $useApi } = useNuxtApp();
    const props = __props;
    const dealStatus = ref(props.deal.status || "\u041D\u0435 \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D");
    const dopsPrice = ref(0);
    const recievedPayments = ref(0);
    const totalPrice = ref(0);
    const remainder = ref(0);
    const daysGone = ref(0);
    const emit = __emit;
    const dealUpdated = () => {
      console.log("dealUpdated");
      emit("deal-updated", props.deal.id);
    };
    const dealDeleted = () => {
      console.log("dealDeleted");
      emit("deal-deleted");
    };
    const removePayment = async (payment) => {
      try {
        await $useApi.delete(`/payments/${payment.id}`);
        console.log("payment deleted");
        emit("deal-updated", props.deal.id);
        return;
      } catch (error) {
        console.log(error);
      }
    };
    const removeDop = async (dop) => {
      try {
        await $useApi.delete(`/dops/${dop.id}`);
        console.log("dop deleted");
        emit("deal-updated", props.deal.id);
        return;
      } catch (error) {
        console.log(error);
      }
    };
    const removeReview = async (review) => {
      try {
        await $useApi.delete(`/reviews/${review.id}`);
        console.log("review deleted");
        emit("deal-updated", props.deal.id);
        return;
      } catch (error) {
        console.log(error);
      }
    };
    const editDealStatus = async () => {
      try {
        await $useApi.patch(`/deals/${props.deal.id}`, {
          // method: 'patch',
          status: dealStatus.value
        });
        emit("deal-updated", props.deal.id);
      } catch (e) {
        console.log(e);
      }
    };
    const deleteDelivery = async (id) => {
      try {
        await $useApi.delete("deliveries/" + id);
        emit("deal-updated", props.deal.id);
      } catch (error) {
        console.log(error);
      }
    };
    const calcTotals = () => {
      var _a, _b;
      dopsPrice.value = ((_a = props.deal.dops) == null ? void 0 : _a.reduce((a, b) => a + b.price, 0)) || 0;
      recievedPayments.value = ((_b = props.deal.payments) == null ? void 0 : _b.reduce((a, b) => a + b.price, 0)) || 0;
      totalPrice.value = props.deal.price + dopsPrice.value;
      remainder.value = totalPrice.value - recievedPayments.value;
      daysGone.value = useMyGetDaysDifference(
        props.deal.client.firstContact,
        props.deal.saleDate
      );
    };
    watch(dealStatus, () => {
      console.log(dealStatus.value);
      editDealStatus();
    });
    watch(
      () => props.deal,
      () => {
        calcTotals();
      },
      { deep: true }
      // Глубокое наблюдение, так как deal — объект
    );
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UiCard = _sfc_main$3$1;
      const _component_UiCardHeader = _sfc_main$2$1;
      const _component_UiCardTitle = _sfc_main$1$1;
      const _component_UiCardDescription = _sfc_main$k;
      const _component_MyDealsDealHistory = _sfc_main$b;
      const _component_MyDealsEditDealModal = _sfc_main$9;
      const _component_UiScrollArea = _sfc_main$t;
      const _component_UiCardContent = _sfc_main$1$6;
      const _component_UiSeparator = _sfc_main$v;
      const _component_MyClientsEditClient = _sfc_main$7;
      const _component_NuxtLink = __nuxt_component_0;
      const _component_MyDeliveriesCreateModal = _sfc_main$w;
      const _component_MyDeliveriesEditModal = _sfc_main$x;
      const _component_UiButton = _sfc_main$o;
      const _component_Icon = __nuxt_component_7;
      const _component_MyDealsAddDealerModal = _sfc_main$6;
      const _component_MyPaymentsCreatePaymentModal = _sfc_main$5;
      const _component_MyDopsCreateDopModal = _sfc_main$3;
      const _component_MyReviewsCreateModal = _sfc_main$2;
      const _component_UiCardFooter = _sfc_main$y;
      if (_ctx.deal.id !== 0) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "h-full" }, _attrs))}>`);
        _push(ssrRenderComponent(_component_UiCard, { class: "flex flex-col overflow-hidden h-full" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_UiCardHeader, { class: "flex flex-row items-start bg-slate-50 pb-1" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class=""${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_UiCardTitle, { class: "flex items-center gap-2 text-lg pb-2" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`${ssrInterpolate(_ctx.deal.title)}`);
                        } else {
                          return [
                            createTextVNode(toDisplayString(_ctx.deal.title), 1)
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_component_UiCardDescription, null, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<div class="flex flex-col"${_scopeId3}><span${_scopeId3}> \u041F\u0435\u0440\u0432\u044B\u0439 \u043A\u043E\u043D\u0442\u0430\u043A\u0442: ${ssrInterpolate(("dateFormat" in _ctx ? _ctx.dateFormat : unref(dateFormat))(_ctx.deal.client.firstContact))}</span><span${_scopeId3}> \u0414\u0430\u0442\u0430 \u043F\u0440\u043E\u0434\u0430\u0436\u0438: ${ssrInterpolate(("dateFormat" in _ctx ? _ctx.dateFormat : unref(dateFormat))(_ctx.deal.saleDate))}</span><span${_scopeId3}> \u041F\u0440\u043E\u0448\u043B\u043E \u0434\u043D\u0435\u0439: ${ssrInterpolate(unref(daysGone))}</span><span${_scopeId3}>\u041F\u0440\u0435\u0437\u0435\u043D\u0442\u0430\u0446\u0438\u044F \u043C\u0430\u043A\u0435\u0442\u0430: ${ssrInterpolate(("dateFormat" in _ctx ? _ctx.dateFormat : unref(dateFormat))(_ctx.deal.maketPresentation))}</span></div><div class="flex gap-2 mb-2 items-center"${_scopeId3}><span${_scopeId3}>\u0421\u0442\u0430\u0442\u0443\u0441: ${ssrInterpolate(_ctx.deal.status)}</span></div>`);
                        } else {
                          return [
                            createVNode("div", { class: "flex flex-col" }, [
                              createVNode("span", null, " \u041F\u0435\u0440\u0432\u044B\u0439 \u043A\u043E\u043D\u0442\u0430\u043A\u0442: " + toDisplayString(("dateFormat" in _ctx ? _ctx.dateFormat : unref(dateFormat))(_ctx.deal.client.firstContact)), 1),
                              createVNode("span", null, " \u0414\u0430\u0442\u0430 \u043F\u0440\u043E\u0434\u0430\u0436\u0438: " + toDisplayString(("dateFormat" in _ctx ? _ctx.dateFormat : unref(dateFormat))(_ctx.deal.saleDate)), 1),
                              createVNode("span", null, " \u041F\u0440\u043E\u0448\u043B\u043E \u0434\u043D\u0435\u0439: " + toDisplayString(unref(daysGone)), 1),
                              createVNode("span", null, "\u041F\u0440\u0435\u0437\u0435\u043D\u0442\u0430\u0446\u0438\u044F \u043C\u0430\u043A\u0435\u0442\u0430: " + toDisplayString(("dateFormat" in _ctx ? _ctx.dateFormat : unref(dateFormat))(_ctx.deal.maketPresentation)), 1)
                            ]),
                            createVNode("div", { class: "flex gap-2 mb-2 items-center" }, [
                              createVNode("span", null, "\u0421\u0442\u0430\u0442\u0443\u0441: " + toDisplayString(_ctx.deal.status), 1)
                            ])
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(`</div><div class="ml-auto flex items-center gap-2"${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_MyDealsDealHistory, {
                      "deal-id": _ctx.deal.id,
                      onIsDealEdited: dealUpdated,
                      onIsDealDeleted: dealDeleted
                    }, null, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_component_MyDealsEditDealModal, {
                      deal: _ctx.deal,
                      onIsDealEdited: dealUpdated,
                      onIsDealDeleted: dealDeleted
                    }, null, _parent3, _scopeId2));
                    _push3(`</div>`);
                  } else {
                    return [
                      createVNode("div", { class: "" }, [
                        createVNode(_component_UiCardTitle, { class: "flex items-center gap-2 text-lg pb-2" }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(_ctx.deal.title), 1)
                          ]),
                          _: 1
                        }),
                        createVNode(_component_UiCardDescription, null, {
                          default: withCtx(() => [
                            createVNode("div", { class: "flex flex-col" }, [
                              createVNode("span", null, " \u041F\u0435\u0440\u0432\u044B\u0439 \u043A\u043E\u043D\u0442\u0430\u043A\u0442: " + toDisplayString(("dateFormat" in _ctx ? _ctx.dateFormat : unref(dateFormat))(_ctx.deal.client.firstContact)), 1),
                              createVNode("span", null, " \u0414\u0430\u0442\u0430 \u043F\u0440\u043E\u0434\u0430\u0436\u0438: " + toDisplayString(("dateFormat" in _ctx ? _ctx.dateFormat : unref(dateFormat))(_ctx.deal.saleDate)), 1),
                              createVNode("span", null, " \u041F\u0440\u043E\u0448\u043B\u043E \u0434\u043D\u0435\u0439: " + toDisplayString(unref(daysGone)), 1),
                              createVNode("span", null, "\u041F\u0440\u0435\u0437\u0435\u043D\u0442\u0430\u0446\u0438\u044F \u043C\u0430\u043A\u0435\u0442\u0430: " + toDisplayString(("dateFormat" in _ctx ? _ctx.dateFormat : unref(dateFormat))(_ctx.deal.maketPresentation)), 1)
                            ]),
                            createVNode("div", { class: "flex gap-2 mb-2 items-center" }, [
                              createVNode("span", null, "\u0421\u0442\u0430\u0442\u0443\u0441: " + toDisplayString(_ctx.deal.status), 1)
                            ])
                          ]),
                          _: 1
                        })
                      ]),
                      createVNode("div", { class: "ml-auto flex items-center gap-2" }, [
                        createVNode(_component_MyDealsDealHistory, {
                          "deal-id": _ctx.deal.id,
                          onIsDealEdited: dealUpdated,
                          onIsDealDeleted: dealDeleted
                        }, null, 8, ["deal-id"]),
                        createVNode(_component_MyDealsEditDealModal, {
                          deal: _ctx.deal,
                          onIsDealEdited: dealUpdated,
                          onIsDealDeleted: dealDeleted
                        }, null, 8, ["deal"])
                      ])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_UiScrollArea, null, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_UiCardContent, { class: "p-6 text-sm h-full" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        var _a, _b, _c, _d, _e, _f;
                        if (_push4) {
                          _push4(`<div class="gap-3"${_scopeId3}><div class="font-semibold pb-2"${_scopeId3}>\u0414\u0435\u0442\u0430\u043B\u0438 \u043E\u043F\u043B\u0430\u0442\u044B</div><ul class="gap-1 text-gray-600"${_scopeId3}><li class="flex items-center justify-between font-semibold"${_scopeId3}><span class="text-muted-foreground"${_scopeId3}> \u0421\u0443\u043C\u043C\u0430 \u0437\u0430\u043A\u0430\u0437\u0430 </span><span${_scopeId3}>${ssrInterpolate(unref(totalPrice))}\u20BD </span></li><li class="flex items-center justify-between"${_scopeId3}><span class="text-muted-foreground"${_scopeId3}> \u0421\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C \u0432\u044B\u0432\u0435\u0441\u043A\u0438 </span><span${_scopeId3}>${ssrInterpolate(_ctx.deal.price)}\u20BD </span></li><li class="flex items-center justify-between"${_scopeId3}><span class="text-muted-foreground"${_scopeId3}> \u0421\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C \u0434\u043E\u043F. \u0443\u0441\u043B\u0443\u0433 </span><span${_scopeId3}>${ssrInterpolate(unref(dopsPrice))}\u20BD </span></li><li class="flex items-center justify-between"${_scopeId3}><span class="text-muted-foreground"${_scopeId3}> \u041E\u043F\u043B\u0430\u0447\u0435\u043D\u043E </span><span${_scopeId3}>${ssrInterpolate(unref(recievedPayments))}\u20BD </span></li><li class="flex items-center justify-between font-semibold"${_scopeId3}><span class="text-muted-foreground"${_scopeId3}> \u041E\u0441\u0442\u0430\u0442\u043E\u043A </span><span class="${ssrRenderClass(unref(remainder) > 0 ? "text-red-600" : "text-green-600")}"${_scopeId3}>${ssrInterpolate(unref(remainder))}\u20BD </span></li></ul></div>`);
                          _push4(ssrRenderComponent(_component_UiSeparator, { class: "my-2" }, null, _parent4, _scopeId3));
                          _push4(`<div class="gap-1"${_scopeId3}><div class="font-semibold pb-2 flex justify-between"${_scopeId3}><span${_scopeId3}>\u041A\u043B\u0438\u0435\u043D\u0442</span>`);
                          _push4(ssrRenderComponent(_component_MyClientsEditClient, {
                            client: _ctx.deal.client,
                            onIsClientEdited: dealUpdated
                          }, null, _parent4, _scopeId3));
                          _push4(`</div><div class="text-gray-600 flex justify-between"${_scopeId3}><div${_scopeId3}>${ssrInterpolate(((_a = _ctx.deal.client) == null ? void 0 : _a.fullName.length) < 20 ? (_b = _ctx.deal.client) == null ? void 0 : _b.fullName : ((_c = _ctx.deal.client) == null ? void 0 : _c.fullName.split(" ")[0]) || "\u041D\u0435 \u0443\u043A\u0430\u0437\u0430\u043D")}</div>`);
                          _push4(ssrRenderComponent(_component_NuxtLink, {
                            class: "underline",
                            to: _ctx.deal.client.chatLink,
                            target: "_blank"
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(` \u0421\u0441\u044B\u043B\u043A\u0430 \u043D\u0430 \u0447\u0430\u0442 `);
                              } else {
                                return [
                                  createTextVNode(" \u0421\u0441\u044B\u043B\u043A\u0430 \u043D\u0430 \u0447\u0430\u0442 ")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                          _push4(`</div></div>`);
                          _push4(ssrRenderComponent(_component_UiSeparator, { class: "my-2" }, null, _parent4, _scopeId3));
                          _push4(`<div${_scopeId3}><div class="font-semibold pb-2 flex justify-between"${_scopeId3}><span${_scopeId3}>\u0414\u043E\u0441\u0442\u0430\u0432\u043A\u0430</span>`);
                          _push4(ssrRenderComponent(_component_MyDeliveriesCreateModal, {
                            deal: _ctx.deal,
                            onDeliveryCreated: dealUpdated
                          }, null, _parent4, _scopeId3));
                          _push4(`</div><ul class=""${_scopeId3}><!--[-->`);
                          ssrRenderList(_ctx.deal.deliveries, (delivery) => {
                            _push4(`<li${_scopeId3}><div class="flex gap-2"${_scopeId3}>`);
                            _push4(ssrRenderComponent(_component_MyDeliveriesEditModal, {
                              delivery,
                              onDeliveryEdited: dealUpdated
                            }, null, _parent4, _scopeId3));
                            _push4(`<div class="flex flex-col"${_scopeId3}><span class="text-gray-600"${_scopeId3}>${ssrInterpolate(delivery.method)}</span><div class="flex gap-1"${_scopeId3}><span${_scopeId3}>\u0422\u0440\u0435\u043A-\u043D\u043E\u043C\u0435\u0440:</span><span class="text-gray-900 font-bold"${_scopeId3}>${ssrInterpolate(delivery.track)}</span></div></div><div class="ml-[auto]"${_scopeId3}>`);
                            _push4(ssrRenderComponent(_component_UiButton, {
                              class: "ml-[auto] w-5 h-5 p-0",
                              onClick: () => deleteDelivery(delivery.id)
                            }, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(ssrRenderComponent(_component_Icon, {
                                    name: "lucide:minus",
                                    color: "white",
                                    size: "15px"
                                  }, null, _parent5, _scopeId4));
                                } else {
                                  return [
                                    createVNode(_component_Icon, {
                                      name: "lucide:minus",
                                      color: "white",
                                      size: "15px"
                                    })
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                            _push4(`</div></div></li>`);
                          });
                          _push4(`<!--]--></ul></div>`);
                          _push4(ssrRenderComponent(_component_UiSeparator, { class: "my-2" }, null, _parent4, _scopeId3));
                          _push4(`<div class="flex flex-col"${_scopeId3}><div class="flex justify-between font-semibold pb-2"${_scopeId3}>${ssrInterpolate(_ctx.deal.dealers.length > 1 ? "\u041C\u0435\u043D\u0435\u0434\u0436\u0435\u0440\u044B" : "\u041C\u0435\u043D\u0435\u0434\u0436\u0435\u0440")} `);
                          _push4(ssrRenderComponent(_component_MyDealsAddDealerModal, {
                            key: _ctx.deal.id,
                            deal: _ctx.deal,
                            onIsDealerAdded: dealUpdated
                          }, null, _parent4, _scopeId3));
                          _push4(`</div><div class="flex flex-col text-gray-600"${_scopeId3}><!--[-->`);
                          ssrRenderList(_ctx.deal.dealers, (dealer) => {
                            var _a2;
                            _push4(`<ul class="w-full flex-cols items-center mb-2"${_scopeId3}><li class="flex"${_scopeId3}><div class="flex justify-between grow mr-1"${_scopeId3}><span${_scopeId3}>${ssrInterpolate(((_a2 = dealer.user) == null ? void 0 : _a2.fullName) || "Nope")}</span><span${_scopeId3}>${ssrInterpolate(dealer.price + "p")}</span></div></li></ul>`);
                          });
                          _push4(`<!--]--></div></div>`);
                          _push4(ssrRenderComponent(_component_UiSeparator, { class: "my-2" }, null, _parent4, _scopeId3));
                          _push4(`<div class=""${_scopeId3}><div class="flex items-center justify-between"${_scopeId3}><div class="font-semibold pb-2"${_scopeId3}>\u041F\u043B\u0430\u0442\u0435\u0436\u0438</div>`);
                          _push4(ssrRenderComponent(_component_MyPaymentsCreatePaymentModal, {
                            "deal-id": _ctx.deal.id,
                            onIsPayCreated: dealUpdated
                          }, null, _parent4, _scopeId3));
                          _push4(`</div><!--[-->`);
                          ssrRenderList(_ctx.deal.payments, (pay) => {
                            _push4(`<ul class="text-gray-600 flex"${_scopeId3}><li class="${ssrRenderClass([
                              "flex items-center justify-between grow mr-1 mb-1",
                              pay.isConfirmed ? "text-green-600" : "text-red-500"
                            ])}"${_scopeId3}><span class=""${_scopeId3}>${ssrInterpolate(pay.method)}</span><span class=""${_scopeId3}>${ssrInterpolate(("dateFormat" in _ctx ? _ctx.dateFormat : unref(dateFormat))(pay.date))}</span><span class=""${_scopeId3}>${ssrInterpolate(pay.price)}\u20BD </span></li>`);
                            _push4(ssrRenderComponent(_component_UiButton, {
                              class: "h-5 w-5 px-0 py-2",
                              onClick: () => removePayment(pay)
                            }, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(ssrRenderComponent(_component_Icon, {
                                    name: "lucide:minus",
                                    color: "white",
                                    size: "15px"
                                  }, null, _parent5, _scopeId4));
                                } else {
                                  return [
                                    createVNode(_component_Icon, {
                                      name: "lucide:minus",
                                      color: "white",
                                      size: "15px"
                                    })
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                            _push4(`</ul>`);
                          });
                          _push4(`<!--]--></div>`);
                          _push4(ssrRenderComponent(_component_UiSeparator, { class: "my-2" }, null, _parent4, _scopeId3));
                          _push4(`<div class="gap-1"${_scopeId3}><div class="flex items-center justify-between"${_scopeId3}><div class="font-semibold pb-2"${_scopeId3}>\u0414\u043E\u043F. \u0443\u0441\u043B\u0443\u0433\u0438</div>`);
                          _push4(ssrRenderComponent(_component_UiButton, { class: "h-5 w-5 px-0 py-2" }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(_component_MyDopsCreateDopModal, {
                                  "deal-id": _ctx.deal.id,
                                  onIsDopCreated: dealUpdated
                                }, null, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(_component_MyDopsCreateDopModal, {
                                    "deal-id": _ctx.deal.id,
                                    onIsDopCreated: dealUpdated
                                  }, null, 8, ["deal-id"])
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                          _push4(`</div><!--[-->`);
                          ssrRenderList(_ctx.deal.dops, (dop) => {
                            _push4(`<ul class="text-gray-600 flex flex-col"${_scopeId3}><div class="flex"${_scopeId3}><li class="flex flex-col justify-between grow mr-1 mb-1"${_scopeId3}><span class="text-muted-foreground"${_scopeId3}>${ssrInterpolate(("dateFormat" in _ctx ? _ctx.dateFormat : unref(dateFormat))(dop.saleDate) + " - " + dop.type)}</span><span class="text-muted-foreground"${_scopeId3}>${ssrInterpolate(dop.user.fullName + " - " + dop.price + "\u20BD" || "")}</span></li>`);
                            _push4(ssrRenderComponent(_component_UiButton, {
                              class: "h-5 w-5 px-0 py-2",
                              onClick: () => removeDop(dop)
                            }, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(ssrRenderComponent(_component_Icon, {
                                    name: "lucide:minus",
                                    color: "white",
                                    size: "15px"
                                  }, null, _parent5, _scopeId4));
                                } else {
                                  return [
                                    createVNode(_component_Icon, {
                                      name: "lucide:minus",
                                      color: "white",
                                      size: "15px"
                                    })
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                            _push4(`</div><div class="w-full flex flex-col items-center"${_scopeId3}>`);
                            _push4(ssrRenderComponent(_component_UiSeparator, { class: "my-1" }, null, _parent4, _scopeId3));
                            _push4(`</div></ul>`);
                          });
                          _push4(`<!--]--></div><div class="gap-1 mt-3"${_scopeId3}><div class="flex items-center justify-between"${_scopeId3}><div class="font-semibold pb-2"${_scopeId3}>\u0418\u0437\u0433\u043E\u0442\u043E\u0432\u043B\u0435\u043D\u0438\u0435</div></div>`);
                          _push4(ssrRenderComponent(_component_NuxtLink, {
                            class: "underline text-gray-600",
                            to: "https://easyneonwork.kaiten.ru/" + _ctx.deal.card_id.toString(),
                            target: "_blank"
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(` \u0414\u0438\u0437\u0430\u0439\u043D `);
                              } else {
                                return [
                                  createTextVNode(" \u0414\u0438\u0437\u0430\u0439\u043D ")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                          _push4(`<!--[-->`);
                          ssrRenderList(_ctx.deal.masterReports, (masterReport) => {
                            _push4(`<ul class="text-gray-600 flex flex-col"${_scopeId3}><li${_scopeId3}>`);
                            _push4(ssrRenderComponent(_component_NuxtLink, {
                              class: "underline",
                              to: masterReport.name,
                              target: "_blank"
                            }, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(` \u041F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0441\u0442\u0432\u043E `);
                                } else {
                                  return [
                                    createTextVNode(" \u041F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0441\u0442\u0432\u043E ")
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                            _push4(`</li><li class="flex flex-col justify-between grow mr-1 mb-1"${_scopeId3}><span class="text-muted-foreground"${_scopeId3}> (${ssrInterpolate(masterReport.type)}) \u0421\u043E\u0431\u0440\u0430\u043D\u0430 ${ssrInterpolate(("dateFormat" in _ctx ? _ctx.dateFormat : unref(dateFormat))(masterReport.date))}</span></li></ul>`);
                          });
                          _push4(`<!--]--><!--[-->`);
                          ssrRenderList(_ctx.deal.packerReports, (masterReport) => {
                            _push4(`<ul class="text-gray-600 flex flex-col"${_scopeId3}><li${_scopeId3}>`);
                            _push4(ssrRenderComponent(_component_NuxtLink, {
                              class: "underline",
                              to: masterReport.name,
                              target: "_blank"
                            }, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(` \u0423\u043F\u0430\u043A\u043E\u0432\u043A\u0430 `);
                                } else {
                                  return [
                                    createTextVNode(" \u0423\u043F\u0430\u043A\u043E\u0432\u043A\u0430 ")
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                            _push4(`</li><li class="flex flex-col justify-between grow mr-1 mb-1"${_scopeId3}><span class="text-muted-foreground"${_scopeId3}> (${ssrInterpolate(masterReport.items)}-\u0448\u0442.) \u0423\u043F\u0430\u043A\u043E\u0432\u0430\u043D\u0430 ${ssrInterpolate(("dateFormat" in _ctx ? _ctx.dateFormat : unref(dateFormat))(masterReport.date))}</span></li></ul>`);
                          });
                          _push4(`<!--]--></div>`);
                          _push4(ssrRenderComponent(_component_UiSeparator, { class: "my-1" }, null, _parent4, _scopeId3));
                          _push4(`<div class="gap-1"${_scopeId3}><div class="flex items-center justify-between"${_scopeId3}><div class="font-semibold pb-2"${_scopeId3}>\u041E\u0442\u0437\u044B\u0432</div>`);
                          _push4(ssrRenderComponent(_component_UiButton, { class: "h-5 w-5 px-0 py-2" }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(_component_MyReviewsCreateModal, {
                                  "deal-id": _ctx.deal.id,
                                  onIsReviewCreated: dealUpdated
                                }, null, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(_component_MyReviewsCreateModal, {
                                    "deal-id": _ctx.deal.id,
                                    onIsReviewCreated: dealUpdated
                                  }, null, 8, ["deal-id"])
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                          _push4(`</div><!--[-->`);
                          ssrRenderList(_ctx.deal.reviews, (review) => {
                            var _a2, _b2;
                            _push4(`<ul class="text-gray-600 flex flex-col"${_scopeId3}><div class="flex"${_scopeId3}><li class="flex flex-col justify-between grow mr-1 mb-1"${_scopeId3}><span class="text-muted-foreground"${_scopeId3}>${ssrInterpolate(("dateFormat" in _ctx ? _ctx.dateFormat : unref(dateFormat))(review.date))}</span></li>`);
                            _push4(ssrRenderComponent(_component_NuxtLink, {
                              class: "underline",
                              to: (_b2 = (_a2 = review.file[0]) == null ? void 0 : _a2.preview) != null ? _b2 : "",
                              target: "_blank"
                            }, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(` \u0421\u043A\u0440\u0438\u043D\u0448\u043E\u0442 `);
                                } else {
                                  return [
                                    createTextVNode(" \u0421\u043A\u0440\u0438\u043D\u0448\u043E\u0442 ")
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                            _push4(ssrRenderComponent(_component_UiButton, {
                              class: "h-5 w-5 px-0 py-2 ml-2",
                              onClick: () => removeReview(review)
                            }, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(ssrRenderComponent(_component_Icon, {
                                    name: "lucide:minus",
                                    color: "white",
                                    size: "15px"
                                  }, null, _parent5, _scopeId4));
                                } else {
                                  return [
                                    createVNode(_component_Icon, {
                                      name: "lucide:minus",
                                      color: "white",
                                      size: "15px"
                                    })
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                            _push4(`</div><div class="w-full flex flex-col items-center"${_scopeId3}>`);
                            _push4(ssrRenderComponent(_component_UiSeparator, { class: "my-1" }, null, _parent4, _scopeId3));
                            _push4(`</div></ul>`);
                          });
                          _push4(`<!--]--></div>`);
                        } else {
                          return [
                            createVNode("div", { class: "gap-3" }, [
                              createVNode("div", { class: "font-semibold pb-2" }, "\u0414\u0435\u0442\u0430\u043B\u0438 \u043E\u043F\u043B\u0430\u0442\u044B"),
                              createVNode("ul", { class: "gap-1 text-gray-600" }, [
                                createVNode("li", { class: "flex items-center justify-between font-semibold" }, [
                                  createVNode("span", { class: "text-muted-foreground" }, " \u0421\u0443\u043C\u043C\u0430 \u0437\u0430\u043A\u0430\u0437\u0430 "),
                                  createVNode("span", null, toDisplayString(unref(totalPrice)) + "\u20BD ", 1)
                                ]),
                                createVNode("li", { class: "flex items-center justify-between" }, [
                                  createVNode("span", { class: "text-muted-foreground" }, " \u0421\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C \u0432\u044B\u0432\u0435\u0441\u043A\u0438 "),
                                  createVNode("span", null, toDisplayString(_ctx.deal.price) + "\u20BD ", 1)
                                ]),
                                createVNode("li", { class: "flex items-center justify-between" }, [
                                  createVNode("span", { class: "text-muted-foreground" }, " \u0421\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C \u0434\u043E\u043F. \u0443\u0441\u043B\u0443\u0433 "),
                                  createVNode("span", null, toDisplayString(unref(dopsPrice)) + "\u20BD ", 1)
                                ]),
                                createVNode("li", { class: "flex items-center justify-between" }, [
                                  createVNode("span", { class: "text-muted-foreground" }, " \u041E\u043F\u043B\u0430\u0447\u0435\u043D\u043E "),
                                  createVNode("span", null, toDisplayString(unref(recievedPayments)) + "\u20BD ", 1)
                                ]),
                                createVNode("li", { class: "flex items-center justify-between font-semibold" }, [
                                  createVNode("span", { class: "text-muted-foreground" }, " \u041E\u0441\u0442\u0430\u0442\u043E\u043A "),
                                  createVNode("span", {
                                    class: unref(remainder) > 0 ? "text-red-600" : "text-green-600"
                                  }, toDisplayString(unref(remainder)) + "\u20BD ", 3)
                                ])
                              ])
                            ]),
                            createVNode(_component_UiSeparator, { class: "my-2" }),
                            createVNode("div", { class: "gap-1" }, [
                              createVNode("div", { class: "font-semibold pb-2 flex justify-between" }, [
                                createVNode("span", null, "\u041A\u043B\u0438\u0435\u043D\u0442"),
                                createVNode(_component_MyClientsEditClient, {
                                  client: _ctx.deal.client,
                                  onIsClientEdited: dealUpdated
                                }, null, 8, ["client"])
                              ]),
                              createVNode("div", { class: "text-gray-600 flex justify-between" }, [
                                createVNode("div", null, toDisplayString(((_d = _ctx.deal.client) == null ? void 0 : _d.fullName.length) < 20 ? (_e = _ctx.deal.client) == null ? void 0 : _e.fullName : ((_f = _ctx.deal.client) == null ? void 0 : _f.fullName.split(" ")[0]) || "\u041D\u0435 \u0443\u043A\u0430\u0437\u0430\u043D"), 1),
                                createVNode(_component_NuxtLink, {
                                  class: "underline",
                                  to: _ctx.deal.client.chatLink,
                                  target: "_blank"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" \u0421\u0441\u044B\u043B\u043A\u0430 \u043D\u0430 \u0447\u0430\u0442 ")
                                  ]),
                                  _: 1
                                }, 8, ["to"])
                              ])
                            ]),
                            createVNode(_component_UiSeparator, { class: "my-2" }),
                            createVNode("div", null, [
                              createVNode("div", { class: "font-semibold pb-2 flex justify-between" }, [
                                createVNode("span", null, "\u0414\u043E\u0441\u0442\u0430\u0432\u043A\u0430"),
                                createVNode(_component_MyDeliveriesCreateModal, {
                                  deal: _ctx.deal,
                                  onDeliveryCreated: dealUpdated
                                }, null, 8, ["deal"])
                              ]),
                              createVNode("ul", { class: "" }, [
                                (openBlock(true), createBlock(Fragment, null, renderList(_ctx.deal.deliveries, (delivery) => {
                                  return openBlock(), createBlock("li", {
                                    key: delivery.id
                                  }, [
                                    createVNode("div", { class: "flex gap-2" }, [
                                      createVNode(_component_MyDeliveriesEditModal, {
                                        delivery,
                                        onDeliveryEdited: dealUpdated
                                      }, null, 8, ["delivery"]),
                                      createVNode("div", { class: "flex flex-col" }, [
                                        createVNode("span", { class: "text-gray-600" }, toDisplayString(delivery.method), 1),
                                        createVNode("div", { class: "flex gap-1" }, [
                                          createVNode("span", null, "\u0422\u0440\u0435\u043A-\u043D\u043E\u043C\u0435\u0440:"),
                                          createVNode("span", { class: "text-gray-900 font-bold" }, toDisplayString(delivery.track), 1)
                                        ])
                                      ]),
                                      createVNode("div", { class: "ml-[auto]" }, [
                                        createVNode(_component_UiButton, {
                                          class: "ml-[auto] w-5 h-5 p-0",
                                          onClick: () => deleteDelivery(delivery.id)
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(_component_Icon, {
                                              name: "lucide:minus",
                                              color: "white",
                                              size: "15px"
                                            })
                                          ]),
                                          _: 2
                                        }, 1032, ["onClick"])
                                      ])
                                    ])
                                  ]);
                                }), 128))
                              ])
                            ]),
                            createVNode(_component_UiSeparator, { class: "my-2" }),
                            createVNode("div", { class: "flex flex-col" }, [
                              createVNode("div", { class: "flex justify-between font-semibold pb-2" }, [
                                createTextVNode(toDisplayString(_ctx.deal.dealers.length > 1 ? "\u041C\u0435\u043D\u0435\u0434\u0436\u0435\u0440\u044B" : "\u041C\u0435\u043D\u0435\u0434\u0436\u0435\u0440") + " ", 1),
                                (openBlock(), createBlock(_component_MyDealsAddDealerModal, {
                                  key: _ctx.deal.id,
                                  deal: _ctx.deal,
                                  onIsDealerAdded: dealUpdated
                                }, null, 8, ["deal"]))
                              ]),
                              createVNode("div", { class: "flex flex-col text-gray-600" }, [
                                (openBlock(true), createBlock(Fragment, null, renderList(_ctx.deal.dealers, (dealer) => {
                                  var _a2;
                                  return openBlock(), createBlock("ul", {
                                    key: dealer.id,
                                    class: "w-full flex-cols items-center mb-2"
                                  }, [
                                    createVNode("li", { class: "flex" }, [
                                      createVNode("div", { class: "flex justify-between grow mr-1" }, [
                                        createVNode("span", null, toDisplayString(((_a2 = dealer.user) == null ? void 0 : _a2.fullName) || "Nope"), 1),
                                        createVNode("span", null, toDisplayString(dealer.price + "p"), 1)
                                      ])
                                    ])
                                  ]);
                                }), 128))
                              ])
                            ]),
                            createVNode(_component_UiSeparator, { class: "my-2" }),
                            createVNode("div", { class: "" }, [
                              createVNode("div", { class: "flex items-center justify-between" }, [
                                createVNode("div", { class: "font-semibold pb-2" }, "\u041F\u043B\u0430\u0442\u0435\u0436\u0438"),
                                createVNode(_component_MyPaymentsCreatePaymentModal, {
                                  "deal-id": _ctx.deal.id,
                                  onIsPayCreated: dealUpdated
                                }, null, 8, ["deal-id"])
                              ]),
                              (openBlock(true), createBlock(Fragment, null, renderList(_ctx.deal.payments, (pay) => {
                                return openBlock(), createBlock("ul", {
                                  key: pay.id,
                                  class: "text-gray-600 flex"
                                }, [
                                  createVNode("li", {
                                    class: [
                                      "flex items-center justify-between grow mr-1 mb-1",
                                      pay.isConfirmed ? "text-green-600" : "text-red-500"
                                    ]
                                  }, [
                                    createVNode("span", { class: "" }, toDisplayString(pay.method), 1),
                                    createVNode("span", { class: "" }, toDisplayString(("dateFormat" in _ctx ? _ctx.dateFormat : unref(dateFormat))(pay.date)), 1),
                                    createVNode("span", { class: "" }, toDisplayString(pay.price) + "\u20BD ", 1)
                                  ], 2),
                                  createVNode(_component_UiButton, {
                                    class: "h-5 w-5 px-0 py-2",
                                    onClick: () => removePayment(pay)
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_Icon, {
                                        name: "lucide:minus",
                                        color: "white",
                                        size: "15px"
                                      })
                                    ]),
                                    _: 2
                                  }, 1032, ["onClick"])
                                ]);
                              }), 128))
                            ]),
                            createVNode(_component_UiSeparator, { class: "my-2" }),
                            createVNode("div", { class: "gap-1" }, [
                              createVNode("div", { class: "flex items-center justify-between" }, [
                                createVNode("div", { class: "font-semibold pb-2" }, "\u0414\u043E\u043F. \u0443\u0441\u043B\u0443\u0433\u0438"),
                                createVNode(_component_UiButton, { class: "h-5 w-5 px-0 py-2" }, {
                                  default: withCtx(() => [
                                    createVNode(_component_MyDopsCreateDopModal, {
                                      "deal-id": _ctx.deal.id,
                                      onIsDopCreated: dealUpdated
                                    }, null, 8, ["deal-id"])
                                  ]),
                                  _: 1
                                })
                              ]),
                              (openBlock(true), createBlock(Fragment, null, renderList(_ctx.deal.dops, (dop) => {
                                return openBlock(), createBlock("ul", {
                                  key: dop.id,
                                  class: "text-gray-600 flex flex-col"
                                }, [
                                  createVNode("div", { class: "flex" }, [
                                    createVNode("li", { class: "flex flex-col justify-between grow mr-1 mb-1" }, [
                                      createVNode("span", { class: "text-muted-foreground" }, toDisplayString(("dateFormat" in _ctx ? _ctx.dateFormat : unref(dateFormat))(dop.saleDate) + " - " + dop.type), 1),
                                      createVNode("span", { class: "text-muted-foreground" }, toDisplayString(dop.user.fullName + " - " + dop.price + "\u20BD" || ""), 1)
                                    ]),
                                    createVNode(_component_UiButton, {
                                      class: "h-5 w-5 px-0 py-2",
                                      onClick: () => removeDop(dop)
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(_component_Icon, {
                                          name: "lucide:minus",
                                          color: "white",
                                          size: "15px"
                                        })
                                      ]),
                                      _: 2
                                    }, 1032, ["onClick"])
                                  ]),
                                  createVNode("div", { class: "w-full flex flex-col items-center" }, [
                                    createVNode(_component_UiSeparator, { class: "my-1" })
                                  ])
                                ]);
                              }), 128))
                            ]),
                            createVNode("div", { class: "gap-1 mt-3" }, [
                              createVNode("div", { class: "flex items-center justify-between" }, [
                                createVNode("div", { class: "font-semibold pb-2" }, "\u0418\u0437\u0433\u043E\u0442\u043E\u0432\u043B\u0435\u043D\u0438\u0435")
                              ]),
                              createVNode(_component_NuxtLink, {
                                class: "underline text-gray-600",
                                to: "https://easyneonwork.kaiten.ru/" + _ctx.deal.card_id.toString(),
                                target: "_blank"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" \u0414\u0438\u0437\u0430\u0439\u043D ")
                                ]),
                                _: 2
                              }, 1032, ["to"]),
                              (openBlock(true), createBlock(Fragment, null, renderList(_ctx.deal.masterReports, (masterReport) => {
                                return openBlock(), createBlock("ul", {
                                  key: masterReport.id,
                                  class: "text-gray-600 flex flex-col"
                                }, [
                                  createVNode("li", null, [
                                    createVNode(_component_NuxtLink, {
                                      class: "underline",
                                      to: masterReport.name,
                                      target: "_blank"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(" \u041F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0441\u0442\u0432\u043E ")
                                      ]),
                                      _: 2
                                    }, 1032, ["to"])
                                  ]),
                                  createVNode("li", { class: "flex flex-col justify-between grow mr-1 mb-1" }, [
                                    createVNode("span", { class: "text-muted-foreground" }, " (" + toDisplayString(masterReport.type) + ") \u0421\u043E\u0431\u0440\u0430\u043D\u0430 " + toDisplayString(("dateFormat" in _ctx ? _ctx.dateFormat : unref(dateFormat))(masterReport.date)), 1)
                                  ])
                                ]);
                              }), 128)),
                              (openBlock(true), createBlock(Fragment, null, renderList(_ctx.deal.packerReports, (masterReport) => {
                                return openBlock(), createBlock("ul", {
                                  key: masterReport.id,
                                  class: "text-gray-600 flex flex-col"
                                }, [
                                  createVNode("li", null, [
                                    createVNode(_component_NuxtLink, {
                                      class: "underline",
                                      to: masterReport.name,
                                      target: "_blank"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(" \u0423\u043F\u0430\u043A\u043E\u0432\u043A\u0430 ")
                                      ]),
                                      _: 2
                                    }, 1032, ["to"])
                                  ]),
                                  createVNode("li", { class: "flex flex-col justify-between grow mr-1 mb-1" }, [
                                    createVNode("span", { class: "text-muted-foreground" }, " (" + toDisplayString(masterReport.items) + "-\u0448\u0442.) \u0423\u043F\u0430\u043A\u043E\u0432\u0430\u043D\u0430 " + toDisplayString(("dateFormat" in _ctx ? _ctx.dateFormat : unref(dateFormat))(masterReport.date)), 1)
                                  ])
                                ]);
                              }), 128))
                            ]),
                            createVNode(_component_UiSeparator, { class: "my-1" }),
                            createVNode("div", { class: "gap-1" }, [
                              createVNode("div", { class: "flex items-center justify-between" }, [
                                createVNode("div", { class: "font-semibold pb-2" }, "\u041E\u0442\u0437\u044B\u0432"),
                                createVNode(_component_UiButton, { class: "h-5 w-5 px-0 py-2" }, {
                                  default: withCtx(() => [
                                    createVNode(_component_MyReviewsCreateModal, {
                                      "deal-id": _ctx.deal.id,
                                      onIsReviewCreated: dealUpdated
                                    }, null, 8, ["deal-id"])
                                  ]),
                                  _: 1
                                })
                              ]),
                              (openBlock(true), createBlock(Fragment, null, renderList(_ctx.deal.reviews, (review) => {
                                var _a2, _b2;
                                return openBlock(), createBlock("ul", {
                                  key: review.id,
                                  class: "text-gray-600 flex flex-col"
                                }, [
                                  createVNode("div", { class: "flex" }, [
                                    createVNode("li", { class: "flex flex-col justify-between grow mr-1 mb-1" }, [
                                      createVNode("span", { class: "text-muted-foreground" }, toDisplayString(("dateFormat" in _ctx ? _ctx.dateFormat : unref(dateFormat))(review.date)), 1)
                                    ]),
                                    createVNode(_component_NuxtLink, {
                                      class: "underline",
                                      to: (_b2 = (_a2 = review.file[0]) == null ? void 0 : _a2.preview) != null ? _b2 : "",
                                      target: "_blank"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(" \u0421\u043A\u0440\u0438\u043D\u0448\u043E\u0442 ")
                                      ]),
                                      _: 2
                                    }, 1032, ["to"]),
                                    createVNode(_component_UiButton, {
                                      class: "h-5 w-5 px-0 py-2 ml-2",
                                      onClick: () => removeReview(review)
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(_component_Icon, {
                                          name: "lucide:minus",
                                          color: "white",
                                          size: "15px"
                                        })
                                      ]),
                                      _: 2
                                    }, 1032, ["onClick"])
                                  ]),
                                  createVNode("div", { class: "w-full flex flex-col items-center" }, [
                                    createVNode(_component_UiSeparator, { class: "my-1" })
                                  ])
                                ]);
                              }), 128))
                            ])
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_UiCardContent, { class: "p-6 text-sm h-full" }, {
                        default: withCtx(() => {
                          var _a, _b, _c;
                          return [
                            createVNode("div", { class: "gap-3" }, [
                              createVNode("div", { class: "font-semibold pb-2" }, "\u0414\u0435\u0442\u0430\u043B\u0438 \u043E\u043F\u043B\u0430\u0442\u044B"),
                              createVNode("ul", { class: "gap-1 text-gray-600" }, [
                                createVNode("li", { class: "flex items-center justify-between font-semibold" }, [
                                  createVNode("span", { class: "text-muted-foreground" }, " \u0421\u0443\u043C\u043C\u0430 \u0437\u0430\u043A\u0430\u0437\u0430 "),
                                  createVNode("span", null, toDisplayString(unref(totalPrice)) + "\u20BD ", 1)
                                ]),
                                createVNode("li", { class: "flex items-center justify-between" }, [
                                  createVNode("span", { class: "text-muted-foreground" }, " \u0421\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C \u0432\u044B\u0432\u0435\u0441\u043A\u0438 "),
                                  createVNode("span", null, toDisplayString(_ctx.deal.price) + "\u20BD ", 1)
                                ]),
                                createVNode("li", { class: "flex items-center justify-between" }, [
                                  createVNode("span", { class: "text-muted-foreground" }, " \u0421\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C \u0434\u043E\u043F. \u0443\u0441\u043B\u0443\u0433 "),
                                  createVNode("span", null, toDisplayString(unref(dopsPrice)) + "\u20BD ", 1)
                                ]),
                                createVNode("li", { class: "flex items-center justify-between" }, [
                                  createVNode("span", { class: "text-muted-foreground" }, " \u041E\u043F\u043B\u0430\u0447\u0435\u043D\u043E "),
                                  createVNode("span", null, toDisplayString(unref(recievedPayments)) + "\u20BD ", 1)
                                ]),
                                createVNode("li", { class: "flex items-center justify-between font-semibold" }, [
                                  createVNode("span", { class: "text-muted-foreground" }, " \u041E\u0441\u0442\u0430\u0442\u043E\u043A "),
                                  createVNode("span", {
                                    class: unref(remainder) > 0 ? "text-red-600" : "text-green-600"
                                  }, toDisplayString(unref(remainder)) + "\u20BD ", 3)
                                ])
                              ])
                            ]),
                            createVNode(_component_UiSeparator, { class: "my-2" }),
                            createVNode("div", { class: "gap-1" }, [
                              createVNode("div", { class: "font-semibold pb-2 flex justify-between" }, [
                                createVNode("span", null, "\u041A\u043B\u0438\u0435\u043D\u0442"),
                                createVNode(_component_MyClientsEditClient, {
                                  client: _ctx.deal.client,
                                  onIsClientEdited: dealUpdated
                                }, null, 8, ["client"])
                              ]),
                              createVNode("div", { class: "text-gray-600 flex justify-between" }, [
                                createVNode("div", null, toDisplayString(((_a = _ctx.deal.client) == null ? void 0 : _a.fullName.length) < 20 ? (_b = _ctx.deal.client) == null ? void 0 : _b.fullName : ((_c = _ctx.deal.client) == null ? void 0 : _c.fullName.split(" ")[0]) || "\u041D\u0435 \u0443\u043A\u0430\u0437\u0430\u043D"), 1),
                                createVNode(_component_NuxtLink, {
                                  class: "underline",
                                  to: _ctx.deal.client.chatLink,
                                  target: "_blank"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" \u0421\u0441\u044B\u043B\u043A\u0430 \u043D\u0430 \u0447\u0430\u0442 ")
                                  ]),
                                  _: 1
                                }, 8, ["to"])
                              ])
                            ]),
                            createVNode(_component_UiSeparator, { class: "my-2" }),
                            createVNode("div", null, [
                              createVNode("div", { class: "font-semibold pb-2 flex justify-between" }, [
                                createVNode("span", null, "\u0414\u043E\u0441\u0442\u0430\u0432\u043A\u0430"),
                                createVNode(_component_MyDeliveriesCreateModal, {
                                  deal: _ctx.deal,
                                  onDeliveryCreated: dealUpdated
                                }, null, 8, ["deal"])
                              ]),
                              createVNode("ul", { class: "" }, [
                                (openBlock(true), createBlock(Fragment, null, renderList(_ctx.deal.deliveries, (delivery) => {
                                  return openBlock(), createBlock("li", {
                                    key: delivery.id
                                  }, [
                                    createVNode("div", { class: "flex gap-2" }, [
                                      createVNode(_component_MyDeliveriesEditModal, {
                                        delivery,
                                        onDeliveryEdited: dealUpdated
                                      }, null, 8, ["delivery"]),
                                      createVNode("div", { class: "flex flex-col" }, [
                                        createVNode("span", { class: "text-gray-600" }, toDisplayString(delivery.method), 1),
                                        createVNode("div", { class: "flex gap-1" }, [
                                          createVNode("span", null, "\u0422\u0440\u0435\u043A-\u043D\u043E\u043C\u0435\u0440:"),
                                          createVNode("span", { class: "text-gray-900 font-bold" }, toDisplayString(delivery.track), 1)
                                        ])
                                      ]),
                                      createVNode("div", { class: "ml-[auto]" }, [
                                        createVNode(_component_UiButton, {
                                          class: "ml-[auto] w-5 h-5 p-0",
                                          onClick: () => deleteDelivery(delivery.id)
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(_component_Icon, {
                                              name: "lucide:minus",
                                              color: "white",
                                              size: "15px"
                                            })
                                          ]),
                                          _: 2
                                        }, 1032, ["onClick"])
                                      ])
                                    ])
                                  ]);
                                }), 128))
                              ])
                            ]),
                            createVNode(_component_UiSeparator, { class: "my-2" }),
                            createVNode("div", { class: "flex flex-col" }, [
                              createVNode("div", { class: "flex justify-between font-semibold pb-2" }, [
                                createTextVNode(toDisplayString(_ctx.deal.dealers.length > 1 ? "\u041C\u0435\u043D\u0435\u0434\u0436\u0435\u0440\u044B" : "\u041C\u0435\u043D\u0435\u0434\u0436\u0435\u0440") + " ", 1),
                                (openBlock(), createBlock(_component_MyDealsAddDealerModal, {
                                  key: _ctx.deal.id,
                                  deal: _ctx.deal,
                                  onIsDealerAdded: dealUpdated
                                }, null, 8, ["deal"]))
                              ]),
                              createVNode("div", { class: "flex flex-col text-gray-600" }, [
                                (openBlock(true), createBlock(Fragment, null, renderList(_ctx.deal.dealers, (dealer) => {
                                  var _a2;
                                  return openBlock(), createBlock("ul", {
                                    key: dealer.id,
                                    class: "w-full flex-cols items-center mb-2"
                                  }, [
                                    createVNode("li", { class: "flex" }, [
                                      createVNode("div", { class: "flex justify-between grow mr-1" }, [
                                        createVNode("span", null, toDisplayString(((_a2 = dealer.user) == null ? void 0 : _a2.fullName) || "Nope"), 1),
                                        createVNode("span", null, toDisplayString(dealer.price + "p"), 1)
                                      ])
                                    ])
                                  ]);
                                }), 128))
                              ])
                            ]),
                            createVNode(_component_UiSeparator, { class: "my-2" }),
                            createVNode("div", { class: "" }, [
                              createVNode("div", { class: "flex items-center justify-between" }, [
                                createVNode("div", { class: "font-semibold pb-2" }, "\u041F\u043B\u0430\u0442\u0435\u0436\u0438"),
                                createVNode(_component_MyPaymentsCreatePaymentModal, {
                                  "deal-id": _ctx.deal.id,
                                  onIsPayCreated: dealUpdated
                                }, null, 8, ["deal-id"])
                              ]),
                              (openBlock(true), createBlock(Fragment, null, renderList(_ctx.deal.payments, (pay) => {
                                return openBlock(), createBlock("ul", {
                                  key: pay.id,
                                  class: "text-gray-600 flex"
                                }, [
                                  createVNode("li", {
                                    class: [
                                      "flex items-center justify-between grow mr-1 mb-1",
                                      pay.isConfirmed ? "text-green-600" : "text-red-500"
                                    ]
                                  }, [
                                    createVNode("span", { class: "" }, toDisplayString(pay.method), 1),
                                    createVNode("span", { class: "" }, toDisplayString(("dateFormat" in _ctx ? _ctx.dateFormat : unref(dateFormat))(pay.date)), 1),
                                    createVNode("span", { class: "" }, toDisplayString(pay.price) + "\u20BD ", 1)
                                  ], 2),
                                  createVNode(_component_UiButton, {
                                    class: "h-5 w-5 px-0 py-2",
                                    onClick: () => removePayment(pay)
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_Icon, {
                                        name: "lucide:minus",
                                        color: "white",
                                        size: "15px"
                                      })
                                    ]),
                                    _: 2
                                  }, 1032, ["onClick"])
                                ]);
                              }), 128))
                            ]),
                            createVNode(_component_UiSeparator, { class: "my-2" }),
                            createVNode("div", { class: "gap-1" }, [
                              createVNode("div", { class: "flex items-center justify-between" }, [
                                createVNode("div", { class: "font-semibold pb-2" }, "\u0414\u043E\u043F. \u0443\u0441\u043B\u0443\u0433\u0438"),
                                createVNode(_component_UiButton, { class: "h-5 w-5 px-0 py-2" }, {
                                  default: withCtx(() => [
                                    createVNode(_component_MyDopsCreateDopModal, {
                                      "deal-id": _ctx.deal.id,
                                      onIsDopCreated: dealUpdated
                                    }, null, 8, ["deal-id"])
                                  ]),
                                  _: 1
                                })
                              ]),
                              (openBlock(true), createBlock(Fragment, null, renderList(_ctx.deal.dops, (dop) => {
                                return openBlock(), createBlock("ul", {
                                  key: dop.id,
                                  class: "text-gray-600 flex flex-col"
                                }, [
                                  createVNode("div", { class: "flex" }, [
                                    createVNode("li", { class: "flex flex-col justify-between grow mr-1 mb-1" }, [
                                      createVNode("span", { class: "text-muted-foreground" }, toDisplayString(("dateFormat" in _ctx ? _ctx.dateFormat : unref(dateFormat))(dop.saleDate) + " - " + dop.type), 1),
                                      createVNode("span", { class: "text-muted-foreground" }, toDisplayString(dop.user.fullName + " - " + dop.price + "\u20BD" || ""), 1)
                                    ]),
                                    createVNode(_component_UiButton, {
                                      class: "h-5 w-5 px-0 py-2",
                                      onClick: () => removeDop(dop)
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(_component_Icon, {
                                          name: "lucide:minus",
                                          color: "white",
                                          size: "15px"
                                        })
                                      ]),
                                      _: 2
                                    }, 1032, ["onClick"])
                                  ]),
                                  createVNode("div", { class: "w-full flex flex-col items-center" }, [
                                    createVNode(_component_UiSeparator, { class: "my-1" })
                                  ])
                                ]);
                              }), 128))
                            ]),
                            createVNode("div", { class: "gap-1 mt-3" }, [
                              createVNode("div", { class: "flex items-center justify-between" }, [
                                createVNode("div", { class: "font-semibold pb-2" }, "\u0418\u0437\u0433\u043E\u0442\u043E\u0432\u043B\u0435\u043D\u0438\u0435")
                              ]),
                              createVNode(_component_NuxtLink, {
                                class: "underline text-gray-600",
                                to: "https://easyneonwork.kaiten.ru/" + _ctx.deal.card_id.toString(),
                                target: "_blank"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" \u0414\u0438\u0437\u0430\u0439\u043D ")
                                ]),
                                _: 2
                              }, 1032, ["to"]),
                              (openBlock(true), createBlock(Fragment, null, renderList(_ctx.deal.masterReports, (masterReport) => {
                                return openBlock(), createBlock("ul", {
                                  key: masterReport.id,
                                  class: "text-gray-600 flex flex-col"
                                }, [
                                  createVNode("li", null, [
                                    createVNode(_component_NuxtLink, {
                                      class: "underline",
                                      to: masterReport.name,
                                      target: "_blank"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(" \u041F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0441\u0442\u0432\u043E ")
                                      ]),
                                      _: 2
                                    }, 1032, ["to"])
                                  ]),
                                  createVNode("li", { class: "flex flex-col justify-between grow mr-1 mb-1" }, [
                                    createVNode("span", { class: "text-muted-foreground" }, " (" + toDisplayString(masterReport.type) + ") \u0421\u043E\u0431\u0440\u0430\u043D\u0430 " + toDisplayString(("dateFormat" in _ctx ? _ctx.dateFormat : unref(dateFormat))(masterReport.date)), 1)
                                  ])
                                ]);
                              }), 128)),
                              (openBlock(true), createBlock(Fragment, null, renderList(_ctx.deal.packerReports, (masterReport) => {
                                return openBlock(), createBlock("ul", {
                                  key: masterReport.id,
                                  class: "text-gray-600 flex flex-col"
                                }, [
                                  createVNode("li", null, [
                                    createVNode(_component_NuxtLink, {
                                      class: "underline",
                                      to: masterReport.name,
                                      target: "_blank"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(" \u0423\u043F\u0430\u043A\u043E\u0432\u043A\u0430 ")
                                      ]),
                                      _: 2
                                    }, 1032, ["to"])
                                  ]),
                                  createVNode("li", { class: "flex flex-col justify-between grow mr-1 mb-1" }, [
                                    createVNode("span", { class: "text-muted-foreground" }, " (" + toDisplayString(masterReport.items) + "-\u0448\u0442.) \u0423\u043F\u0430\u043A\u043E\u0432\u0430\u043D\u0430 " + toDisplayString(("dateFormat" in _ctx ? _ctx.dateFormat : unref(dateFormat))(masterReport.date)), 1)
                                  ])
                                ]);
                              }), 128))
                            ]),
                            createVNode(_component_UiSeparator, { class: "my-1" }),
                            createVNode("div", { class: "gap-1" }, [
                              createVNode("div", { class: "flex items-center justify-between" }, [
                                createVNode("div", { class: "font-semibold pb-2" }, "\u041E\u0442\u0437\u044B\u0432"),
                                createVNode(_component_UiButton, { class: "h-5 w-5 px-0 py-2" }, {
                                  default: withCtx(() => [
                                    createVNode(_component_MyReviewsCreateModal, {
                                      "deal-id": _ctx.deal.id,
                                      onIsReviewCreated: dealUpdated
                                    }, null, 8, ["deal-id"])
                                  ]),
                                  _: 1
                                })
                              ]),
                              (openBlock(true), createBlock(Fragment, null, renderList(_ctx.deal.reviews, (review) => {
                                var _a2, _b2;
                                return openBlock(), createBlock("ul", {
                                  key: review.id,
                                  class: "text-gray-600 flex flex-col"
                                }, [
                                  createVNode("div", { class: "flex" }, [
                                    createVNode("li", { class: "flex flex-col justify-between grow mr-1 mb-1" }, [
                                      createVNode("span", { class: "text-muted-foreground" }, toDisplayString(("dateFormat" in _ctx ? _ctx.dateFormat : unref(dateFormat))(review.date)), 1)
                                    ]),
                                    createVNode(_component_NuxtLink, {
                                      class: "underline",
                                      to: (_b2 = (_a2 = review.file[0]) == null ? void 0 : _a2.preview) != null ? _b2 : "",
                                      target: "_blank"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(" \u0421\u043A\u0440\u0438\u043D\u0448\u043E\u0442 ")
                                      ]),
                                      _: 2
                                    }, 1032, ["to"]),
                                    createVNode(_component_UiButton, {
                                      class: "h-5 w-5 px-0 py-2 ml-2",
                                      onClick: () => removeReview(review)
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(_component_Icon, {
                                          name: "lucide:minus",
                                          color: "white",
                                          size: "15px"
                                        })
                                      ]),
                                      _: 2
                                    }, 1032, ["onClick"])
                                  ]),
                                  createVNode("div", { class: "w-full flex flex-col items-center" }, [
                                    createVNode(_component_UiSeparator, { class: "my-1" })
                                  ])
                                ]);
                              }), 128))
                            ])
                          ];
                        }),
                        _: 2
                      }, 1024)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_UiCardFooter, null, null, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_UiCardHeader, { class: "flex flex-row items-start bg-slate-50 pb-1" }, {
                  default: withCtx(() => [
                    createVNode("div", { class: "" }, [
                      createVNode(_component_UiCardTitle, { class: "flex items-center gap-2 text-lg pb-2" }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(_ctx.deal.title), 1)
                        ]),
                        _: 1
                      }),
                      createVNode(_component_UiCardDescription, null, {
                        default: withCtx(() => [
                          createVNode("div", { class: "flex flex-col" }, [
                            createVNode("span", null, " \u041F\u0435\u0440\u0432\u044B\u0439 \u043A\u043E\u043D\u0442\u0430\u043A\u0442: " + toDisplayString(("dateFormat" in _ctx ? _ctx.dateFormat : unref(dateFormat))(_ctx.deal.client.firstContact)), 1),
                            createVNode("span", null, " \u0414\u0430\u0442\u0430 \u043F\u0440\u043E\u0434\u0430\u0436\u0438: " + toDisplayString(("dateFormat" in _ctx ? _ctx.dateFormat : unref(dateFormat))(_ctx.deal.saleDate)), 1),
                            createVNode("span", null, " \u041F\u0440\u043E\u0448\u043B\u043E \u0434\u043D\u0435\u0439: " + toDisplayString(unref(daysGone)), 1),
                            createVNode("span", null, "\u041F\u0440\u0435\u0437\u0435\u043D\u0442\u0430\u0446\u0438\u044F \u043C\u0430\u043A\u0435\u0442\u0430: " + toDisplayString(("dateFormat" in _ctx ? _ctx.dateFormat : unref(dateFormat))(_ctx.deal.maketPresentation)), 1)
                          ]),
                          createVNode("div", { class: "flex gap-2 mb-2 items-center" }, [
                            createVNode("span", null, "\u0421\u0442\u0430\u0442\u0443\u0441: " + toDisplayString(_ctx.deal.status), 1)
                          ])
                        ]),
                        _: 1
                      })
                    ]),
                    createVNode("div", { class: "ml-auto flex items-center gap-2" }, [
                      createVNode(_component_MyDealsDealHistory, {
                        "deal-id": _ctx.deal.id,
                        onIsDealEdited: dealUpdated,
                        onIsDealDeleted: dealDeleted
                      }, null, 8, ["deal-id"]),
                      createVNode(_component_MyDealsEditDealModal, {
                        deal: _ctx.deal,
                        onIsDealEdited: dealUpdated,
                        onIsDealDeleted: dealDeleted
                      }, null, 8, ["deal"])
                    ])
                  ]),
                  _: 1
                }),
                createVNode(_component_UiScrollArea, null, {
                  default: withCtx(() => [
                    createVNode(_component_UiCardContent, { class: "p-6 text-sm h-full" }, {
                      default: withCtx(() => {
                        var _a, _b, _c;
                        return [
                          createVNode("div", { class: "gap-3" }, [
                            createVNode("div", { class: "font-semibold pb-2" }, "\u0414\u0435\u0442\u0430\u043B\u0438 \u043E\u043F\u043B\u0430\u0442\u044B"),
                            createVNode("ul", { class: "gap-1 text-gray-600" }, [
                              createVNode("li", { class: "flex items-center justify-between font-semibold" }, [
                                createVNode("span", { class: "text-muted-foreground" }, " \u0421\u0443\u043C\u043C\u0430 \u0437\u0430\u043A\u0430\u0437\u0430 "),
                                createVNode("span", null, toDisplayString(unref(totalPrice)) + "\u20BD ", 1)
                              ]),
                              createVNode("li", { class: "flex items-center justify-between" }, [
                                createVNode("span", { class: "text-muted-foreground" }, " \u0421\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C \u0432\u044B\u0432\u0435\u0441\u043A\u0438 "),
                                createVNode("span", null, toDisplayString(_ctx.deal.price) + "\u20BD ", 1)
                              ]),
                              createVNode("li", { class: "flex items-center justify-between" }, [
                                createVNode("span", { class: "text-muted-foreground" }, " \u0421\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C \u0434\u043E\u043F. \u0443\u0441\u043B\u0443\u0433 "),
                                createVNode("span", null, toDisplayString(unref(dopsPrice)) + "\u20BD ", 1)
                              ]),
                              createVNode("li", { class: "flex items-center justify-between" }, [
                                createVNode("span", { class: "text-muted-foreground" }, " \u041E\u043F\u043B\u0430\u0447\u0435\u043D\u043E "),
                                createVNode("span", null, toDisplayString(unref(recievedPayments)) + "\u20BD ", 1)
                              ]),
                              createVNode("li", { class: "flex items-center justify-between font-semibold" }, [
                                createVNode("span", { class: "text-muted-foreground" }, " \u041E\u0441\u0442\u0430\u0442\u043E\u043A "),
                                createVNode("span", {
                                  class: unref(remainder) > 0 ? "text-red-600" : "text-green-600"
                                }, toDisplayString(unref(remainder)) + "\u20BD ", 3)
                              ])
                            ])
                          ]),
                          createVNode(_component_UiSeparator, { class: "my-2" }),
                          createVNode("div", { class: "gap-1" }, [
                            createVNode("div", { class: "font-semibold pb-2 flex justify-between" }, [
                              createVNode("span", null, "\u041A\u043B\u0438\u0435\u043D\u0442"),
                              createVNode(_component_MyClientsEditClient, {
                                client: _ctx.deal.client,
                                onIsClientEdited: dealUpdated
                              }, null, 8, ["client"])
                            ]),
                            createVNode("div", { class: "text-gray-600 flex justify-between" }, [
                              createVNode("div", null, toDisplayString(((_a = _ctx.deal.client) == null ? void 0 : _a.fullName.length) < 20 ? (_b = _ctx.deal.client) == null ? void 0 : _b.fullName : ((_c = _ctx.deal.client) == null ? void 0 : _c.fullName.split(" ")[0]) || "\u041D\u0435 \u0443\u043A\u0430\u0437\u0430\u043D"), 1),
                              createVNode(_component_NuxtLink, {
                                class: "underline",
                                to: _ctx.deal.client.chatLink,
                                target: "_blank"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" \u0421\u0441\u044B\u043B\u043A\u0430 \u043D\u0430 \u0447\u0430\u0442 ")
                                ]),
                                _: 1
                              }, 8, ["to"])
                            ])
                          ]),
                          createVNode(_component_UiSeparator, { class: "my-2" }),
                          createVNode("div", null, [
                            createVNode("div", { class: "font-semibold pb-2 flex justify-between" }, [
                              createVNode("span", null, "\u0414\u043E\u0441\u0442\u0430\u0432\u043A\u0430"),
                              createVNode(_component_MyDeliveriesCreateModal, {
                                deal: _ctx.deal,
                                onDeliveryCreated: dealUpdated
                              }, null, 8, ["deal"])
                            ]),
                            createVNode("ul", { class: "" }, [
                              (openBlock(true), createBlock(Fragment, null, renderList(_ctx.deal.deliveries, (delivery) => {
                                return openBlock(), createBlock("li", {
                                  key: delivery.id
                                }, [
                                  createVNode("div", { class: "flex gap-2" }, [
                                    createVNode(_component_MyDeliveriesEditModal, {
                                      delivery,
                                      onDeliveryEdited: dealUpdated
                                    }, null, 8, ["delivery"]),
                                    createVNode("div", { class: "flex flex-col" }, [
                                      createVNode("span", { class: "text-gray-600" }, toDisplayString(delivery.method), 1),
                                      createVNode("div", { class: "flex gap-1" }, [
                                        createVNode("span", null, "\u0422\u0440\u0435\u043A-\u043D\u043E\u043C\u0435\u0440:"),
                                        createVNode("span", { class: "text-gray-900 font-bold" }, toDisplayString(delivery.track), 1)
                                      ])
                                    ]),
                                    createVNode("div", { class: "ml-[auto]" }, [
                                      createVNode(_component_UiButton, {
                                        class: "ml-[auto] w-5 h-5 p-0",
                                        onClick: () => deleteDelivery(delivery.id)
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_Icon, {
                                            name: "lucide:minus",
                                            color: "white",
                                            size: "15px"
                                          })
                                        ]),
                                        _: 2
                                      }, 1032, ["onClick"])
                                    ])
                                  ])
                                ]);
                              }), 128))
                            ])
                          ]),
                          createVNode(_component_UiSeparator, { class: "my-2" }),
                          createVNode("div", { class: "flex flex-col" }, [
                            createVNode("div", { class: "flex justify-between font-semibold pb-2" }, [
                              createTextVNode(toDisplayString(_ctx.deal.dealers.length > 1 ? "\u041C\u0435\u043D\u0435\u0434\u0436\u0435\u0440\u044B" : "\u041C\u0435\u043D\u0435\u0434\u0436\u0435\u0440") + " ", 1),
                              (openBlock(), createBlock(_component_MyDealsAddDealerModal, {
                                key: _ctx.deal.id,
                                deal: _ctx.deal,
                                onIsDealerAdded: dealUpdated
                              }, null, 8, ["deal"]))
                            ]),
                            createVNode("div", { class: "flex flex-col text-gray-600" }, [
                              (openBlock(true), createBlock(Fragment, null, renderList(_ctx.deal.dealers, (dealer) => {
                                var _a2;
                                return openBlock(), createBlock("ul", {
                                  key: dealer.id,
                                  class: "w-full flex-cols items-center mb-2"
                                }, [
                                  createVNode("li", { class: "flex" }, [
                                    createVNode("div", { class: "flex justify-between grow mr-1" }, [
                                      createVNode("span", null, toDisplayString(((_a2 = dealer.user) == null ? void 0 : _a2.fullName) || "Nope"), 1),
                                      createVNode("span", null, toDisplayString(dealer.price + "p"), 1)
                                    ])
                                  ])
                                ]);
                              }), 128))
                            ])
                          ]),
                          createVNode(_component_UiSeparator, { class: "my-2" }),
                          createVNode("div", { class: "" }, [
                            createVNode("div", { class: "flex items-center justify-between" }, [
                              createVNode("div", { class: "font-semibold pb-2" }, "\u041F\u043B\u0430\u0442\u0435\u0436\u0438"),
                              createVNode(_component_MyPaymentsCreatePaymentModal, {
                                "deal-id": _ctx.deal.id,
                                onIsPayCreated: dealUpdated
                              }, null, 8, ["deal-id"])
                            ]),
                            (openBlock(true), createBlock(Fragment, null, renderList(_ctx.deal.payments, (pay) => {
                              return openBlock(), createBlock("ul", {
                                key: pay.id,
                                class: "text-gray-600 flex"
                              }, [
                                createVNode("li", {
                                  class: [
                                    "flex items-center justify-between grow mr-1 mb-1",
                                    pay.isConfirmed ? "text-green-600" : "text-red-500"
                                  ]
                                }, [
                                  createVNode("span", { class: "" }, toDisplayString(pay.method), 1),
                                  createVNode("span", { class: "" }, toDisplayString(("dateFormat" in _ctx ? _ctx.dateFormat : unref(dateFormat))(pay.date)), 1),
                                  createVNode("span", { class: "" }, toDisplayString(pay.price) + "\u20BD ", 1)
                                ], 2),
                                createVNode(_component_UiButton, {
                                  class: "h-5 w-5 px-0 py-2",
                                  onClick: () => removePayment(pay)
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_Icon, {
                                      name: "lucide:minus",
                                      color: "white",
                                      size: "15px"
                                    })
                                  ]),
                                  _: 2
                                }, 1032, ["onClick"])
                              ]);
                            }), 128))
                          ]),
                          createVNode(_component_UiSeparator, { class: "my-2" }),
                          createVNode("div", { class: "gap-1" }, [
                            createVNode("div", { class: "flex items-center justify-between" }, [
                              createVNode("div", { class: "font-semibold pb-2" }, "\u0414\u043E\u043F. \u0443\u0441\u043B\u0443\u0433\u0438"),
                              createVNode(_component_UiButton, { class: "h-5 w-5 px-0 py-2" }, {
                                default: withCtx(() => [
                                  createVNode(_component_MyDopsCreateDopModal, {
                                    "deal-id": _ctx.deal.id,
                                    onIsDopCreated: dealUpdated
                                  }, null, 8, ["deal-id"])
                                ]),
                                _: 1
                              })
                            ]),
                            (openBlock(true), createBlock(Fragment, null, renderList(_ctx.deal.dops, (dop) => {
                              return openBlock(), createBlock("ul", {
                                key: dop.id,
                                class: "text-gray-600 flex flex-col"
                              }, [
                                createVNode("div", { class: "flex" }, [
                                  createVNode("li", { class: "flex flex-col justify-between grow mr-1 mb-1" }, [
                                    createVNode("span", { class: "text-muted-foreground" }, toDisplayString(("dateFormat" in _ctx ? _ctx.dateFormat : unref(dateFormat))(dop.saleDate) + " - " + dop.type), 1),
                                    createVNode("span", { class: "text-muted-foreground" }, toDisplayString(dop.user.fullName + " - " + dop.price + "\u20BD" || ""), 1)
                                  ]),
                                  createVNode(_component_UiButton, {
                                    class: "h-5 w-5 px-0 py-2",
                                    onClick: () => removeDop(dop)
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_Icon, {
                                        name: "lucide:minus",
                                        color: "white",
                                        size: "15px"
                                      })
                                    ]),
                                    _: 2
                                  }, 1032, ["onClick"])
                                ]),
                                createVNode("div", { class: "w-full flex flex-col items-center" }, [
                                  createVNode(_component_UiSeparator, { class: "my-1" })
                                ])
                              ]);
                            }), 128))
                          ]),
                          createVNode("div", { class: "gap-1 mt-3" }, [
                            createVNode("div", { class: "flex items-center justify-between" }, [
                              createVNode("div", { class: "font-semibold pb-2" }, "\u0418\u0437\u0433\u043E\u0442\u043E\u0432\u043B\u0435\u043D\u0438\u0435")
                            ]),
                            createVNode(_component_NuxtLink, {
                              class: "underline text-gray-600",
                              to: "https://easyneonwork.kaiten.ru/" + _ctx.deal.card_id.toString(),
                              target: "_blank"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" \u0414\u0438\u0437\u0430\u0439\u043D ")
                              ]),
                              _: 2
                            }, 1032, ["to"]),
                            (openBlock(true), createBlock(Fragment, null, renderList(_ctx.deal.masterReports, (masterReport) => {
                              return openBlock(), createBlock("ul", {
                                key: masterReport.id,
                                class: "text-gray-600 flex flex-col"
                              }, [
                                createVNode("li", null, [
                                  createVNode(_component_NuxtLink, {
                                    class: "underline",
                                    to: masterReport.name,
                                    target: "_blank"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(" \u041F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0441\u0442\u0432\u043E ")
                                    ]),
                                    _: 2
                                  }, 1032, ["to"])
                                ]),
                                createVNode("li", { class: "flex flex-col justify-between grow mr-1 mb-1" }, [
                                  createVNode("span", { class: "text-muted-foreground" }, " (" + toDisplayString(masterReport.type) + ") \u0421\u043E\u0431\u0440\u0430\u043D\u0430 " + toDisplayString(("dateFormat" in _ctx ? _ctx.dateFormat : unref(dateFormat))(masterReport.date)), 1)
                                ])
                              ]);
                            }), 128)),
                            (openBlock(true), createBlock(Fragment, null, renderList(_ctx.deal.packerReports, (masterReport) => {
                              return openBlock(), createBlock("ul", {
                                key: masterReport.id,
                                class: "text-gray-600 flex flex-col"
                              }, [
                                createVNode("li", null, [
                                  createVNode(_component_NuxtLink, {
                                    class: "underline",
                                    to: masterReport.name,
                                    target: "_blank"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(" \u0423\u043F\u0430\u043A\u043E\u0432\u043A\u0430 ")
                                    ]),
                                    _: 2
                                  }, 1032, ["to"])
                                ]),
                                createVNode("li", { class: "flex flex-col justify-between grow mr-1 mb-1" }, [
                                  createVNode("span", { class: "text-muted-foreground" }, " (" + toDisplayString(masterReport.items) + "-\u0448\u0442.) \u0423\u043F\u0430\u043A\u043E\u0432\u0430\u043D\u0430 " + toDisplayString(("dateFormat" in _ctx ? _ctx.dateFormat : unref(dateFormat))(masterReport.date)), 1)
                                ])
                              ]);
                            }), 128))
                          ]),
                          createVNode(_component_UiSeparator, { class: "my-1" }),
                          createVNode("div", { class: "gap-1" }, [
                            createVNode("div", { class: "flex items-center justify-between" }, [
                              createVNode("div", { class: "font-semibold pb-2" }, "\u041E\u0442\u0437\u044B\u0432"),
                              createVNode(_component_UiButton, { class: "h-5 w-5 px-0 py-2" }, {
                                default: withCtx(() => [
                                  createVNode(_component_MyReviewsCreateModal, {
                                    "deal-id": _ctx.deal.id,
                                    onIsReviewCreated: dealUpdated
                                  }, null, 8, ["deal-id"])
                                ]),
                                _: 1
                              })
                            ]),
                            (openBlock(true), createBlock(Fragment, null, renderList(_ctx.deal.reviews, (review) => {
                              var _a2, _b2;
                              return openBlock(), createBlock("ul", {
                                key: review.id,
                                class: "text-gray-600 flex flex-col"
                              }, [
                                createVNode("div", { class: "flex" }, [
                                  createVNode("li", { class: "flex flex-col justify-between grow mr-1 mb-1" }, [
                                    createVNode("span", { class: "text-muted-foreground" }, toDisplayString(("dateFormat" in _ctx ? _ctx.dateFormat : unref(dateFormat))(review.date)), 1)
                                  ]),
                                  createVNode(_component_NuxtLink, {
                                    class: "underline",
                                    to: (_b2 = (_a2 = review.file[0]) == null ? void 0 : _a2.preview) != null ? _b2 : "",
                                    target: "_blank"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(" \u0421\u043A\u0440\u0438\u043D\u0448\u043E\u0442 ")
                                    ]),
                                    _: 2
                                  }, 1032, ["to"]),
                                  createVNode(_component_UiButton, {
                                    class: "h-5 w-5 px-0 py-2 ml-2",
                                    onClick: () => removeReview(review)
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_Icon, {
                                        name: "lucide:minus",
                                        color: "white",
                                        size: "15px"
                                      })
                                    ]),
                                    _: 2
                                  }, 1032, ["onClick"])
                                ]),
                                createVNode("div", { class: "w-full flex flex-col items-center" }, [
                                  createVNode(_component_UiSeparator, { class: "my-1" })
                                ])
                              ]);
                            }), 128))
                          ])
                        ];
                      }),
                      _: 2
                    }, 1024)
                  ]),
                  _: 2
                }, 1024),
                createVNode(_component_UiCardFooter)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/my/deals/DealCard.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const dealsColumns = [
  // Название
  {
    accessorKey: "title",
    ruName: "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435",
    enableHiding: false,
    // header: "Название",
    header: () => {
      return h(
        "span",
        { class: "text-xl w-full" },
        "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435"
        // Button,
        // {
        //   variant: "ghost",
        //   onClick: () => column.toggleSorting(column.getIsSorted() === "asc"),
        //   class: "text-left h-full p-0",
        // },
        // () => ["Название", h(ArrowUpDown, { class: "ml-2 h-4 w-4" })]
      );
    },
    cell: ({ row }) => {
      return h("div", { class: "flex flex-col pl-2 items-start gap-0.5" }, [
        h(
          "span",
          { class: "font-semibold text-slate-800" },
          row.getValue("title")
        ),
        h(
          "div",
          {
            class: "flex gap-1 itens-center"
          },
          [
            h(
              "span",
              {
                class: "text-xs text-gray-600 py-0.2 px-1 rounded-sm bg-indigo-300/30"
              },
              row.getValue("group")
            ),
            h(
              "span",
              {
                class: "text-xs text-gray-600 py-0.2 px-1 rounded-sm bg-amber-300/30"
              },
              row.getValue("courseType") || row.getValue("maketType")
            )
          ]
        ),
        h("div", { class: "text-xs text-gray-500 flex gap-1" }, [
          h(
            "span",
            { class: "bg-gray-300/50 text-slate-700 py-0.2 px-1 rounded-sm" },
            row.getValue("isRegular")
          ),
          h("span", { class: "" }, " - " + row.getValue("clientType")),
          h("span", { class: "ml-1" }, row.getValue("sphere"))
        ]),
        h("span", { class: "text-xs text-gray-500" }, row.getValue("city"))
      ]);
    }
  },
  // Дата продажи
  {
    accessorKey: "saleDate",
    ruName: "\u0414\u0430\u0442\u0430 \u043F\u0440\u043E\u0434\u0430\u0436\u0438",
    header: ({ column }) => {
      return h(
        _sfc_main$o,
        {
          variant: "ghost",
          onClick: () => column.toggleSorting(column.getIsSorted() === "asc"),
          class: "p-1"
        },
        () => [
          h("span", { class: "text-wrap" }, "\u0414\u0430\u0442\u0430 \u043F\u0440\u043E\u0434\u0430\u0436\u0438"),
          h(ArrowUpDown, { class: " h-[24px] w-[24px]" })
        ]
      );
    },
    cell: ({ row }) => {
      const status = row.getValue("status");
      const isReserved = row.original.reservation;
      return h(
        "div",
        {
          class: "flex flex-col items-center whitespace-nowrap text-center"
        },
        [
          h("span", { class: "" }, dateFormat(row.getValue("saleDate"))),
          h(
            "span",
            { class: "text-xs text-gray-500" },
            "\u0421\u0442\u0430\u0442\u0443\u0441: " + (isReserved ? "\u0411\u0440\u043E\u043D\u044C" : status)
          )
        ]
      );
    }
  },
  // Total
  {
    accessorKey: "totalPrice",
    // header: "Total",
    ruName: "\u041E\u0431\u0449\u0435\u0435",
    header: ({ column }) => {
      return h(
        _sfc_main$o,
        {
          variant: "ghost",
          onClick: () => column.toggleSorting(column.getIsSorted() === "asc"),
          class: "text-center h-full w-full p-1"
        },
        () => ["\u041E\u0431\u0449\u0435\u0435", h(ArrowUpDown, { class: "ml-2 h-4 w-4" })]
      );
    },
    cell: ({ row }) => h(
      "div",
      {
        class: "flex flex-col items-center"
      },
      [
        h(
          "span",
          {
            class: "lowercase whitespace-nowrap text-center text-slate-800 font-semibold"
          },
          useMyFormatPrice(row.getValue("totalPrice")) + "\u20BD"
        ),
        h(
          "span",
          { class: "text-xs text-gray-500" },
          row.getValue("discont") || "\u0421\u043A\u0438\u0434\u043A\u0430 - " + row.getValue("discontAmount") + "%"
        )
      ]
    )
  },
  // Вывески
  {
    accessorKey: "price",
    // header: "Вывески",
    ruName: "\u0412\u044B\u0432\u0435\u0441\u043A\u0438",
    header: ({ column }) => {
      return h(
        _sfc_main$o,
        {
          variant: "ghost",
          onClick: () => column.toggleSorting(column.getIsSorted() === "asc"),
          class: "text-center h-full w-full p-1"
        },
        () => ["\u0412\u044B\u0432\u0435\u0441\u043A\u0438", h(ArrowUpDown, { class: "ml-2 h-4 w-4" })]
      );
    },
    cell: ({ row }) => h(
      "div",
      {
        class: "lowercase whitespace-nowrap text-center text-slate-700 font-semibold"
      },
      useMyFormatPrice(row.getValue("price")) + "\u20BD"
    )
  },
  // Допы
  {
    accessorKey: "dopsPrice",
    // header: "Допы",
    ruName: "\u0414\u043E\u043F\u044B",
    header: ({ column }) => {
      return h(
        _sfc_main$o,
        {
          variant: "ghost",
          onClick: () => column.toggleSorting(column.getIsSorted() === "asc"),
          class: "text-center h-full w-full p-1"
        },
        () => ["\u0414\u043E\u043F\u044B", h(ArrowUpDown, { class: "ml-2 h-4 w-4" })]
      );
    },
    cell: ({ row }) => h(
      "div",
      {
        class: "lowercase whitespace-nowrap text-center text-slate-600 font-semibold"
      },
      useMyFormatPrice(row.getValue("dopsPrice")) + "\u20BD"
    )
  },
  // Оплачено
  {
    accessorKey: "recievedPayments",
    // header: "Оплачено",
    ruName: "\u041E\u043F\u043B\u0430\u0447\u0435\u043D\u043E",
    header: ({ column }) => {
      return h(
        _sfc_main$o,
        {
          variant: "ghost",
          onClick: () => column.toggleSorting(column.getIsSorted() === "asc"),
          class: "text-center h-full w-full p-1"
        },
        () => ["\u041E\u043F\u043B\u0430\u0447\u0435\u043D\u043E", h(ArrowUpDown, { class: "ml-2 h-4 w-4" })]
      );
    },
    cell: ({ row }) => h("div", { class: "flex flex-col items-center" }, [
      h(
        "span",
        { class: "lowercase whitespace-nowrap text-center text-green-700" },
        "+" + useMyFormatPrice(row.getValue("recievedPayments")) + "\u20BD"
      ),
      h(
        "span",
        { class: "text-xs text-gray-500" },
        row.getValue("firstPayment")
      )
    ])
  },
  // Остаток
  {
    accessorKey: "remainder",
    // header: "Остаток",
    ruName: "\u041E\u0441\u0442\u0430\u0442\u043E\u043A",
    header: ({ column }) => {
      return h(
        _sfc_main$o,
        {
          variant: "ghost",
          onClick: () => column.toggleSorting(column.getIsSorted() === "asc"),
          class: "text-center h-full w-full p-1"
        },
        () => ["\u041E\u0441\u0442\u0430\u0442\u043E\u043A", h(ArrowUpDown, { class: "ml-2 h-4 w-4" })]
      );
    },
    cell: ({ row }) => h(
      "div",
      { class: "lowercase whitespace-nowrap text-center text-red-700" },
      useMyFormatPrice(row.getValue("remainder")) + "\u20BD"
    )
  },
  // Инфо
  {
    accessorKey: "info",
    ruName: "\u0418\u043D\u0444\u043E",
    enableHiding: false,
    header: () => {
      return h("span", { class: "text-xl w-full pl-3" }, "\u0418\u043D\u0444\u043E");
    },
    cell: ({ row }) => h("div", { class: "flex flex-col pl-2" }, [
      h(
        "span",
        { class: "text-xs text-gray-600" },
        "\u0418\u0441\u0442\u043E\u0447\u043D\u0438\u043A - " + row.getValue("source")
      ),
      h(
        "span",
        { class: "text-xs text-gray-600" },
        "\u0422\u0435\u0433 - " + row.getValue("adTag")
      ),
      h(
        "span",
        { class: "text-xs text-gray-600" },
        "\u0417\u0430\u043A\u0440\u044B\u0442\u0438\u0435 - " + row.getValue("clothingMethod")
      )
    ])
  },
  // Источник
  {
    accessorKey: "source",
    ruName: "\u0418\u0441\u0442\u043E\u0447\u043D\u0438\u043A",
    enableHiding: true,
    header: () => {
      return h("div", {
        class: "hidden p-0"
      });
    },
    cell: () => h("div", { class: "hidden p-0" })
  },
  // Тег
  {
    accessorKey: "adTag",
    ruName: "\u0422\u0435\u0433",
    enableHiding: true,
    header: () => {
      return h("div", {
        class: "hidden p-0"
      });
    },
    cell: () => h("div", { class: "hidden p-0" })
  },
  // платеж
  {
    accessorKey: "firstPayment",
    ruName: "\u041F\u043B\u0430\u0442\u0435\u0436",
    enableHiding: true,
    header: () => {
      return h("div", {
        class: "hidden p-0"
      });
    },
    cell: () => h("div", { class: "hidden p-0" })
  },
  // Город
  {
    accessorKey: "city",
    ruName: "\u0413\u043E\u0440\u043E\u0434",
    enableHiding: true,
    header: () => {
      return h("div", {
        class: "hidden p-0"
      });
    },
    cell: () => h("div", { class: "hidden p-0" })
  },
  // Закрытие
  {
    accessorKey: "clothingMethod",
    ruName: "\u0417\u0430\u043A\u0440\u044B\u0442\u0438\u0435",
    enableHiding: true,
    header: () => {
      return h("div", {
        class: "hidden p-0"
      });
    },
    cell: () => h("div", { class: "hidden p-0" })
  },
  // Клиент
  {
    accessorKey: "clientType",
    ruName: "\u041A\u043B\u0438\u0435\u043D\u0442",
    enableHiding: true,
    header: () => {
      return h("div", {
        class: "hidden p-0"
      });
    },
    cell: () => h("div", { class: "hidden p-0" })
  },
  // Сфера
  {
    accessorKey: "sphere",
    ruName: "\u0421\u0444\u0435\u0440\u0430",
    enableHiding: true,
    header: () => {
      return h("div", {
        class: "hidden p-0"
      });
    },
    cell: () => h("div", { class: "hidden p-0" })
  },
  // Скидка
  {
    accessorKey: "discont",
    ruName: "\u0421\u043A\u0438\u0434\u043A\u0430",
    enableHiding: true,
    header: () => {
      return h("div", {
        class: "hidden p-0"
      });
    },
    cell: () => h("div", { class: "hidden p-0" })
  },
  // Статус
  {
    accessorKey: "status",
    enableHiding: true,
    header: () => {
      return h("div", {
        class: "hidden p-0"
      });
    },
    cell: () => h("div", { class: "hidden p-0" }),
    ruName: "\u0421\u0442\u0430\u0442\u0443\u0441",
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    }
  },
  {
    accessorKey: "maketType",
    // header: 'Тип макета',
    enableHiding: true,
    header: () => {
      return h("div", {
        class: "hidden p-0"
      });
    },
    cell: () => h("div", { class: "hidden p-0" }),
    ruName: "\u0422\u0438\u043F \u043C\u0430\u043A\u0435\u0442\u0430",
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    }
  },
  {
    accessorKey: "courseType",
    // header: 'Тип макета',
    enableHiding: true,
    header: () => {
      return h("div", {
        class: "hidden p-0"
      });
    },
    cell: () => h("div", { class: "hidden p-0" }),
    ruName: "\u0422\u0438\u043F \u043A\u0443\u0440\u0441\u0430",
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    }
  },
  // Отдел
  {
    accessorKey: "workSpaceId",
    enableHiding: false,
    ruName: "\u041E\u0442\u0434\u0435\u043B",
    header: () => {
      return h("div", {
        class: "hidden p-0"
      });
    },
    cell: () => h("div", { class: "hidden p-0" }),
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    }
  },
  // диллеры
  {
    accessorKey: "dealers",
    enableHiding: false,
    // header: "Managers",
    ruName: "\u041C\u0435\u043D\u0435\u0434\u0436\u0435\u0440\u044B",
    header: () => {
      return h("div", {
        class: "hidden p-0"
      });
    },
    cell: () => h("div", { class: "hidden p-0" }),
    // cell: ({ row }) => row.original.dealers.map(d => d.userId).join(", "),
    filterFn: (row, id, value) => {
      const dealers = row.getValue("dealers");
      return dealers.some(
        (dealer) => Object.values(value).includes(dealer.userId)
      );
    }
  },
  // Прошло дней
  {
    accessorKey: "daysGone",
    enableHiding: false,
    ruName: "\u041F\u0440\u043E\u0448\u043B\u043E \u0434\u043D\u0435\u0439",
    header: () => {
      return h("div", {
        class: "hidden p-0"
      });
    },
    cell: () => h("div", { class: "hidden p-0" }),
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    }
  },
  // Отзывы
  {
    accessorKey: "haveReviews",
    enableHiding: false,
    ruName: "\u041E\u0442\u0437\u044B\u0432\u044B",
    header: () => {
      return h("div", {
        class: "hidden p-10"
      });
    },
    cell: () => h("div", { class: "hidden p-10" }),
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    }
  },
  // тип клиента
  {
    accessorKey: "isRegular",
    enableHiding: false,
    ruName: "\u0442\u0438\u043F \u043A\u043B\u0438\u0435\u043D\u0442\u0430",
    header: () => {
      return h("div", {
        class: "hidden p-10"
      });
    },
    cell: () => h("div", { class: "hidden p-10" }),
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    }
  },
  // Группа
  {
    accessorKey: "group",
    enableHiding: false,
    ruName: "\u0413\u0440\u0443\u043F\u043F\u0430",
    header: () => {
      return h("div", {
        class: "hidden p-10"
      });
    },
    cell: () => h("div", { class: "hidden p-10" }),
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    }
  },
  // Группа
  {
    accessorKey: "groupId",
    enableHiding: false,
    ruName: "\u0413\u0440\u0443\u043F\u043F\u0430 id",
    header: () => {
      return h("div", {
        class: "hidden p-10"
      });
    },
    cell: () => h("div", { class: "hidden p-10" }),
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    }
  },
  // discontAmount
  {
    accessorKey: "discontAmount",
    enableHiding: false,
    ruName: "discontAmount",
    header: () => {
      return h("div", {
        class: "hidden p-10"
      });
    },
    cell: () => h("div", { class: "hidden p-10" }),
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    }
  }
];
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { $useApi } = useNuxtApp();
    useHead({
      title: "\u0421\u0434\u0435\u043B\u043A\u0438 | Easy CRM"
    });
    const defaultDeal = {
      id: 0,
      title: "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435",
      price: 1e4,
      status: "\u0421\u043E\u0437\u0434\u0430\u043D\u0430",
      // deadline: '2024-01-01',
      clothingMethod: "string",
      description: "string",
      source: "string",
      adTag: "string",
      discont: "string",
      sphere: "string",
      city: "string",
      region: "string",
      // cardLink: 'string',
      paid: false,
      totalPrice: 1,
      dopsPrice: 1,
      recievedPayments: 1,
      remainder: 1,
      firstPayment: "string",
      clientType: "string",
      recievedPay: 1,
      createdAt: "",
      saleDate: "string",
      card_id: "0",
      dealers: [],
      client: {
        id: 0,
        fullName: "string",
        workSpaceId: 0,
        groupId: 0,
        phone: "string",
        type: "string",
        chatLink: "string",
        gender: "string",
        firstContact: "string",
        adLink: "string",
        inn: "string",
        isRegular: false
      }
    };
    const period = ref((/* @__PURE__ */ new Date()).toISOString().slice(0, 7));
    const search = ref("");
    const deals = ref([]);
    const currentDeal = ref(defaultDeal);
    const totalsInfo = ref([
      {
        title: "\u041E\u0431\u0449\u0430\u044F \u0441\u0443\u043C\u043C\u0430 \u0437\u0430\u043A\u0430\u0437\u043E\u0432(\u20BD)",
        value: "0"
      },
      {
        title: "\u0421\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C \u0432\u044B\u0432\u0435\u0441\u043E\u043A (\u20BD)",
        value: "0"
      },
      {
        title: "\u0414\u043E\u043F\u044B(%)",
        value: "0"
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
    const filters = ref({ workspaces: [], groups: [], managers: [] });
    const dateFilter = ref("this_month");
    const { data: dashboardData } = ([__temp, __restore] = withAsyncContext(() => $useApi.get("/dashboards/deals")), __temp = await __temp, __restore(), __temp);
    filters.value = {
      workspaces: (dashboardData == null ? void 0 : dashboardData.workSpaces) || [],
      groups: (dashboardData == null ? void 0 : dashboardData.groups) || [],
      managers: (dashboardData == null ? void 0 : dashboardData.managers) || []
    };
    const getDeals = async () => {
      const { data: dealsDatas } = await $useApi.get("/deals", {
        params: { period: period.value }
      });
      deals.value = dealsDatas.deals || [];
      if (!dealsDatas.deals.length) return;
      updateTotals(dealsDatas.totalInfo, dealsDatas.deals.length);
    };
    const updateTotals = (totals, dealsAmount) => {
      totalsInfo.value = [
        {
          title: "\u041E\u0431\u0449\u0430\u044F \u0441\u0443\u043C\u043C\u0430 \u0437\u0430\u043A\u0430\u0437\u043E\u0432(\u20BD)",
          value: useMyFormatPrice(totals.totalPrice) + "\u20BD"
        },
        {
          title: `\u0421\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C \u0432\u044B\u0432\u0435\u0441\u043E\u043A (\u0437\u0430\u043A\u0430\u0437\u043E\u0432: ${dealsAmount})`,
          value: useMyFormatPrice(totals.price) + "\u20BD"
        },
        {
          title: `\u0414\u043E\u043F\u044B(${totals.totalPrice ? (totals.dopsPrice / totals.totalPrice * 100).toFixed() : 0}%)`,
          value: useMyFormatPrice(totals.dopsPrice) + "\u20BD"
        },
        {
          title: `\u041E\u043F\u043B\u0430\u0447\u0435\u043D\u043E(${totals.totalPrice ? (totals.recievedPayments / totals.totalPrice * 100).toFixed() : 0}%)`,
          value: useMyFormatPrice(totals.recievedPayments) + "\u20BD"
        },
        {
          title: `\u041E\u0441\u0442\u0430\u0442\u043E\u043A(${totals.totalPrice ? (totals.remainder / totals.totalPrice * 100).toFixed() : 0}%)`,
          value: useMyFormatPrice(totals.remainder) + "\u20BD"
        },
        {
          title: `\u041E\u0442\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u044B(${deals.value.filter((d) => ["\u041E\u0442\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0430", "\u0412\u0440\u0443\u0447\u0435\u043D\u0430"].includes(d.status || "")).length})`,
          value: useMyFormatPrice(
            deals.value.filter((d) => ["\u041E\u0442\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0430", "\u0412\u0440\u0443\u0447\u0435\u043D\u0430"].includes(d.status || "")).reduce((a, b) => a + b.price, 0)
          ) + "\u20BD"
        }
      ];
    };
    const calcTotals = (ids) => {
      console.log(ids.length);
      const de = deals.value.filter((d) => ids.includes(d.id) && !d.reservation);
      const totalPrice = de.reduce((a, b) => a + b.totalPrice, 0);
      const price = de.reduce((a, b) => a + b.price, 0);
      const dopsPrice = de.reduce((a, b) => a + b.dopsPrice, 0);
      const recievedPayments = de.reduce((a, b) => a + b.recievedPayments, 0);
      const remainder = de.reduce((a, b) => a + b.remainder, 0);
      updateTotals(
        { totalPrice, price, dopsPrice, recievedPayments, remainder },
        ids.length
      );
    };
    const getDeal = async (id) => {
      const { data: deal } = await $useApi.get(`/deals/${id}`);
      currentDeal.value = deal;
    };
    watch(dateFilter, () => {
      console.log(dateFilter.value);
      if (dateFilter.value === "this_month") {
        period.value = (/* @__PURE__ */ new Date()).toISOString().slice(0, 7);
      }
      if (dateFilter.value === "today") {
        period.value = (/* @__PURE__ */ new Date()).toISOString().slice(0, 10);
      }
    });
    watch(
      period,
      async () => {
        await getDeals();
      },
      { deep: true }
    );
    watch(search, async () => {
      if (search.value.length > 2) {
        const { data: dealsDatas } = await $useApi.get("/deals/search", {
          params: { name: search.value }
        });
        deals.value = dealsDatas.deals || [];
        if (!dealsDatas.deals.length) return;
        updateTotals(dealsDatas.totalInfo, dealsDatas.deals.length);
      } else {
        await getDeals();
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_LayoutSidebar = _sfc_main$j;
      const _component_UiCard = _sfc_main$3$1;
      const _component_UiCardHeader = _sfc_main$2$1;
      const _component_UiCardDescription = _sfc_main$k;
      const _component_UiCardTitle = _sfc_main$1$1;
      const _component_MyDealsDealCreateModal = _sfc_main$f;
      const _component_UiTabs = _sfc_main$2$2;
      const _component_UiTabsList = _sfc_main$l;
      const _component_UiTabsTrigger = _sfc_main$1$2;
      const _component_UiInput = _sfc_main$m;
      const _component_MyOperationsCreateModal = _sfc_main$n;
      const _component_MyDealsDataTable = _sfc_main$c;
      const _component_MyDealsDealCard = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative h-screen hidden-scrollbar" }, _attrs))}><div class="w-full fixed z-10">`);
      _push(ssrRenderComponent(_component_LayoutSidebar, null, null, _parent));
      _push(`</div><div class="h-[full] flex p-4 gap-4 mx-[auto] max-w-[2048px] pt-16"><div class="flex flex-col gap-4 min-w-[1050px] w-full"><div class="flex gap-4"><!--[-->`);
      ssrRenderList(unref(totalsInfo), (item) => {
        _push(ssrRenderComponent(_component_UiCard, {
          key: item.title,
          class: "min-w-[150px] grow"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_UiCardHeader, { class: "p-3 pb-2" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_UiCardDescription, null, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`${ssrInterpolate(item.title)}`);
                        } else {
                          return [
                            createTextVNode(toDisplayString(item.title), 1)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_component_UiCardTitle, { class: "text-3xl font-semibold whitespace-nowrap" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`${ssrInterpolate(item.value)}`);
                        } else {
                          return [
                            createTextVNode(toDisplayString(item.value), 1)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_UiCardDescription, null, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(item.title), 1)
                        ]),
                        _: 2
                      }, 1024),
                      createVNode(_component_UiCardTitle, { class: "text-3xl font-semibold whitespace-nowrap" }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(item.value), 1)
                        ]),
                        _: 2
                      }, 1024)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_UiCardHeader, { class: "p-3 pb-2" }, {
                  default: withCtx(() => [
                    createVNode(_component_UiCardDescription, null, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(item.title), 1)
                      ]),
                      _: 2
                    }, 1024),
                    createVNode(_component_UiCardTitle, { class: "text-3xl font-semibold whitespace-nowrap" }, {
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
        }, _parent));
      });
      _push(`<!--]--></div><div class="flex gap-2 items-center">`);
      _push(ssrRenderComponent(_component_MyDealsDealCreateModal, {
        groups: unref(filters).groups,
        onIsDealCreated: async (id) => {
          await getDeals();
          await getDeal(id);
        }
      }, null, _parent));
      _push(ssrRenderComponent(_component_UiTabs, {
        modelValue: unref(dateFilter),
        "onUpdate:modelValue": ($event) => isRef(dateFilter) ? dateFilter.value = $event : null,
        "default-value": "month"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex items-center justify-between"${_scopeId}><div class="flex items-center"${_scopeId}>`);
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
                  _push3(ssrRenderComponent(_component_UiTabsTrigger, { value: "today" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` \u0421\u0435\u0433\u043E\u0434\u043D\u044F `);
                      } else {
                        return [
                          createTextVNode(" \u0421\u0435\u0433\u043E\u0434\u043D\u044F ")
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
                    createVNode(_component_UiTabsTrigger, { value: "today" }, {
                      default: withCtx(() => [
                        createTextVNode(" \u0421\u0435\u0433\u043E\u0434\u043D\u044F ")
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
            _push2(`<div class="ml-2"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UiInput, {
              modelValue: unref(search),
              "onUpdate:modelValue": ($event) => isRef(search) ? search.value = $event : null,
              placeholder: "\u0413\u043B\u043E\u0431\u0430\u043B\u044C\u043D\u044B\u0439 \u043F\u043E\u0438\u0441\u043A..."
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
            if (unref(dateFilter) === "month") {
              _push2(`<div class="ml-2"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UiInput, {
                modelValue: unref(period),
                "onUpdate:modelValue": ($event) => isRef(period) ? period.value = $event : null,
                type: "month"
              }, null, _parent2, _scopeId));
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
            if (unref(dateFilter) === "day") {
              _push2(`<div class="ml-2"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UiInput, {
                modelValue: unref(period),
                "onUpdate:modelValue": ($event) => isRef(period) ? period.value = $event : null,
                type: "date"
              }, null, _parent2, _scopeId));
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div></div>`);
          } else {
            return [
              createVNode("div", { class: "flex items-center justify-between" }, [
                createVNode("div", { class: "flex items-center" }, [
                  createVNode(_component_UiTabsList, null, {
                    default: withCtx(() => [
                      createVNode(_component_UiTabsTrigger, { value: "this_month" }, {
                        default: withCtx(() => [
                          createTextVNode(" \u042D\u0442\u043E\u0442 \u043C\u0435\u0441\u044F\u0446 ")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_UiTabsTrigger, { value: "today" }, {
                        default: withCtx(() => [
                          createTextVNode(" \u0421\u0435\u0433\u043E\u0434\u043D\u044F ")
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
                  createVNode("div", { class: "ml-2" }, [
                    createVNode(_component_UiInput, {
                      modelValue: unref(search),
                      "onUpdate:modelValue": ($event) => isRef(search) ? search.value = $event : null,
                      placeholder: "\u0413\u043B\u043E\u0431\u0430\u043B\u044C\u043D\u044B\u0439 \u043F\u043E\u0438\u0441\u043A..."
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ]),
                  unref(dateFilter) === "month" ? (openBlock(), createBlock("div", {
                    key: 0,
                    class: "ml-2"
                  }, [
                    createVNode(_component_UiInput, {
                      modelValue: unref(period),
                      "onUpdate:modelValue": ($event) => isRef(period) ? period.value = $event : null,
                      type: "month"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ])) : createCommentVNode("", true),
                  unref(dateFilter) === "day" ? (openBlock(), createBlock("div", {
                    key: 1,
                    class: "ml-2"
                  }, [
                    createVNode(_component_UiInput, {
                      modelValue: unref(period),
                      "onUpdate:modelValue": ($event) => isRef(period) ? period.value = $event : null,
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
      _push(`<div class="ml-[auto]">`);
      _push(ssrRenderComponent(_component_MyOperationsCreateModal, null, null, _parent));
      _push(`</div></div><div class="mt-[-8px]">`);
      _push(ssrRenderComponent(_component_MyDealsDataTable, {
        key: unref(deals).length,
        columns: unref(dealsColumns),
        data: unref(deals),
        filters: unref(filters),
        onDealClicked: (id) => getDeal(id),
        onTableSorted: (ids) => calcTotals(ids)
      }, null, _parent));
      _push(`</div></div>`);
      if (unref(currentDeal)) {
        _push(`<div class="min-w-[350px] w-[350px] h-[calc(100vh-85px)]">`);
        _push(ssrRenderComponent(_component_MyDealsDealCard, {
          key: unref(currentDeal).id,
          deal: unref(currentDeal),
          onDealUpdated: async (id) => {
            await getDeal(id);
            await getDeals();
          },
          onDealDeleted: async () => {
            await getDeals();
          }
        }, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/deals/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-BMcyXER5.mjs.map
