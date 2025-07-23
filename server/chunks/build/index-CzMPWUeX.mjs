import { _ as _sfc_main$8 } from './Sidebar-D29xHklW.mjs';
import { _ as _sfc_main$9 } from './Input-DBSZ1Mdv.mjs';
import { _ as _sfc_main$2$1, a as _sfc_main$a, b as _sfc_main$1$1 } from './TabsList-DbIwKgY4.mjs';
import { _ as _sfc_main$b } from './TabsContent-CO2mHCzx.mjs';
import { _ as _sfc_main$3$1, a as _sfc_main$2$2, c as _sfc_main$1$2, b as _sfc_main$c } from './CardDescription-Bo1EqluP.mjs';
import { _ as _sfc_main$d } from './CardContent-BEDjQwzu.mjs';
import { _ as _sfc_main$h } from './CardFooter-DAxSdo34.mjs';
import { _ as _sfc_main$e } from './Label-B6Kf4x8e.mjs';
import { _ as _sfc_main$f } from './ComboboxModels-BJ2QnOFE.mjs';
import { _ as _sfc_main$g, v as valueUpdater, c as cn } from './isLoading-BbWzubgi.mjs';
import { _ as _sfc_main$2$3, a as _sfc_main$1$3, b as _sfc_main$j } from './PopoverContent-Bm4609Rb.mjs';
import { _ as _sfc_main$n } from './Separator-kiHjH00C.mjs';
import { _ as _sfc_main$o } from './index-CQUfSr7s.mjs';
import { _ as _sfc_main$3$3, a as _sfc_main$q, b as _sfc_main$2$5, c as _sfc_main$1$7 } from './CommandList-CkzhgsM2.mjs';
import { _ as _sfc_main$p, a as _sfc_main$1$6 } from './CommandInput-DGCCooe7.mjs';
import { _ as _sfc_main$r } from './CommandSeparator-BW0ck4T9.mjs';
import { defineComponent, ref, mergeProps, unref, isRef, withCtx, createTextVNode, createVNode, createBlock, openBlock, watch, createCommentVNode, toDisplayString, h, Fragment, renderList, computed, resolveDynamicComponent, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderClass, ssrRenderVNode } from 'vue/server-renderer';
import { ChevronDown, ArrowUpDown, X, CirclePlus, Check } from 'lucide-vue-next';
import { _ as _sfc_main$k } from './Checkbox-Cx8b_7FZ.mjs';
import { _ as _sfc_main$l, a as _sfc_main$1$5 } from './ScrollArea-CPCatQNH.mjs';
import { _ as _sfc_main$5$1, a as _sfc_main$m, b as _sfc_main$2$4, c as _sfc_main$1$4, d as _sfc_main$4$1, e as _sfc_main$3$2 } from './TableHeader-pVk7uQ16.mjs';
import { useVueTable, getFilteredRowModel, getSortedRowModel, getCoreRowModel, FlexRender } from '@tanstack/vue-table';
import { u as useMyFormatPrice } from './useMyFormatPrice-CCAsFuev.mjs';
import { Q as Qn } from './main-BplioMC0.mjs';
import { a as useNuxtApp } from './server.mjs';
import { _ as _sfc_main$i } from './DateRangePicker-BGMismpM.mjs';
import { u as useHead } from './v3-BEwgjOp-.mjs';
import 'radix-vue';
import '@vueuse/core';
import 'class-variance-authority';
import 'clsx';
import 'tailwind-merge';
import 'pinia';
import 'date-fns';
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
import 'reka-ui';
import '@internationalized/date';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import 'unhead/plugins';

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
      const _component_UiPopover = _sfc_main$2$3;
      const _component_UiPopoverTrigger = _sfc_main$1$3;
      const _component_UiButton = _sfc_main$g;
      const _component_UiSeparator = _sfc_main$n;
      const _component_UiBadge = _sfc_main$o;
      const _component_UiPopoverContent = _sfc_main$j;
      const _component_UiCommand = _sfc_main$3$3;
      const _component_UiCommandInput = _sfc_main$p;
      const _component_UiCommandList = _sfc_main$q;
      const _component_UiCommandEmpty = _sfc_main$1$6;
      const _component_UiCommandGroup = _sfc_main$2$5;
      const _component_UiCommandItem = _sfc_main$1$7;
      const _component_UiCommandSeparator = _sfc_main$r;
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
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/my/reports/DataTableFacetedFilter.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "DataTableToolbar",
  __ssrInlineRender: true,
  props: {
    table: {},
    wFilters: {},
    managersFilter: {}
  },
  setup(__props) {
    const props = __props;
    const isFiltered = computed(
      () => props.table.getState().columnFilters.length > 0
    );
    return (_ctx, _push, _parent, _attrs) => {
      const _component_MyReportsDataTableFacetedFilter = _sfc_main$7;
      const _component_UiButton = _sfc_main$g;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex items-center justify-between" }, _attrs))}><div class="flex flex-1 items-center space-x-2">`);
      if (_ctx.table.getColumn("workSpace")) {
        _push(ssrRenderComponent(_component_MyReportsDataTableFacetedFilter, {
          column: _ctx.table.getColumn("workSpace"),
          title: "\u041E\u0442\u0434\u0435\u043B",
          options: _ctx.wFilters
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      if (_ctx.table.getColumn("manager")) {
        _push(ssrRenderComponent(_component_MyReportsDataTableFacetedFilter, {
          column: _ctx.table.getColumn("manager"),
          title: "\u041C\u0435\u043D\u0435\u0434\u0436\u0435\u0440",
          options: _ctx.managersFilter
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/my/reports/DataTableToolbar.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "DataTable",
  __ssrInlineRender: true,
  props: {
    columns: {},
    data: {},
    managers: {}
  },
  emits: ["table-sorted", "on-delete-item"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const curDeal = ref(0);
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
      },
      meta: {
        deleteItem: (item) => onDeleteItem(item.id)
      }
    });
    const emit = __emit;
    const onDeleteItem = (item) => {
      emit("on-delete-item", item);
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
      const _component_MyReportsDataTableToolbar = _sfc_main$6;
      const _component_UiPopover = _sfc_main$2$3;
      const _component_UiPopoverTrigger = _sfc_main$1$3;
      const _component_UiButton = _sfc_main$g;
      const _component_UiPopoverContent = _sfc_main$j;
      const _component_UiCheckbox = _sfc_main$k;
      const _component_UiScrollArea = _sfc_main$l;
      const _component_UiTable = _sfc_main$5$1;
      const _component_UiTableHeader = _sfc_main$m;
      const _component_UiTableRow = _sfc_main$2$4;
      const _component_UiTableHead = _sfc_main$1$4;
      const _component_UiTableBody = _sfc_main$4$1;
      const _component_UiTableCell = _sfc_main$3$2;
      const _component_UiScrollBar = _sfc_main$1$5;
      _push(`<!--[--><div class="flex mb-2 justify-between ml-[290px]">`);
      _push(ssrRenderComponent(_component_MyReportsDataTableToolbar, {
        table: unref(table),
        "w-filters": [
          { label: "B2B", value: "B2B" },
          { label: "\u0412\u041A", value: "\u0412\u041A" }
        ],
        "managers-filter": _ctx.managers
      }, null, _parent));
      _push(`<div>`);
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
      _push(`</div></div><div class="bg-slate-100">`);
      _push(ssrRenderComponent(_component_UiScrollArea, { class: "h-[calc(100vh-270px)]" }, {
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
                                unref(curDeal) === row.original.id ? "bg-slate-300/70" : "bg-slate-100",
                                "cursor-pointer"
                              ],
                              "data-state": row.getIsSelected() ? "selected" : void 0
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
                                unref(curDeal) === row.original.id ? "bg-slate-300/70" : "bg-slate-100",
                                "cursor-pointer"
                              ],
                              "data-state": row.getIsSelected() ? "selected" : void 0
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
                            }, 1032, ["class", "data-state"]);
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
                                unref(curDeal) === row.original.id ? "bg-slate-300/70" : "bg-slate-100",
                                "cursor-pointer"
                              ],
                              "data-state": row.getIsSelected() ? "selected" : void 0
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
                            }, 1032, ["class", "data-state"]);
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
                              unref(curDeal) === row.original.id ? "bg-slate-300/70" : "bg-slate-100",
                              "cursor-pointer"
                            ],
                            "data-state": row.getIsSelected() ? "selected" : void 0
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
                          }, 1032, ["class", "data-state"]);
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
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/my/reports/DataTable.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const reportsColumns = [
  //date
  {
    accessorKey: "date",
    ruName: "\u0414\u0430\u0442\u0430",
    header: ({ column }) => {
      return h(
        _sfc_main$g,
        {
          variant: "ghost",
          onClick: () => column.toggleSorting(column.getIsSorted() === "asc"),
          class: "text-center h-full w-full p-0"
        },
        () => ["\u0414\u0430\u0442\u0430", h(ArrowUpDown, { class: " h-4 w-4" })]
      );
    },
    cell: ({ row }) => h("div", { class: "text-center text-xs" }, row.getValue("date"))
  },
  //manager
  {
    accessorKey: "manager",
    ruName: "\u041C\u0435\u043D\u0435\u0434\u0436\u0435\u0440",
    header: ({ column }) => {
      return h(
        _sfc_main$g,
        {
          variant: "ghost",
          onClick: () => column.toggleSorting(column.getIsSorted() === "asc"),
          class: "text-center h-full w-full p-0"
        },
        () => ["\u041C\u0435\u043D\u0435\u0434\u0436\u0435\u0440", h(ArrowUpDown, { class: " h-4 w-4" })]
      );
    },
    cell: ({ row }) => h("div", { class: "flex flex-col items-center" }, [
      h("span", {}, row.getValue("manager")),
      h(
        "span",
        { class: "text-xs text-gray-600" },
        row.getValue("workSpace")
      )
    ]),
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    }
  },
  // Отдел
  {
    accessorKey: "workSpace",
    ruName: "\u041E\u0442\u0434\u0435\u043B",
    header: ({ column }) => {
      return h(
        _sfc_main$g,
        {
          variant: "ghost",
          onClick: () => column.toggleSorting(column.getIsSorted() === "asc"),
          class: "text-center h-full w-full p-0 hidden"
        },
        () => ["\u041E\u0442\u0434\u0435\u043B", h(ArrowUpDown, { class: " h-4 w-4" })]
      );
    },
    cell: ({ row }) => h("div", { class: "text-center hidden" }, row.getValue("workSpace")),
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    }
  },
  //cals
  {
    accessorKey: "calls",
    ruName: "\u0417\u0430\u044F\u0432\u043A\u0438",
    header: ({ column }) => {
      return h(
        _sfc_main$g,
        {
          variant: "ghost",
          onClick: () => column.toggleSorting(column.getIsSorted() === "asc"),
          class: "text-center h-full w-full p-0"
        },
        () => ["\u0417\u0430\u044F\u0432\u043A\u0438", h(ArrowUpDown, { class: " h-4 w-4" })]
      );
    },
    cell: ({ row }) => h("div", { class: "text-center" }, row.getValue("calls"))
  },
  //makets
  {
    accessorKey: "makets",
    ruName: "\u041C\u0430\u043A\u0435\u0442\u044B",
    header: ({ column }) => {
      return h(
        _sfc_main$g,
        {
          variant: "ghost",
          onClick: () => column.toggleSorting(column.getIsSorted() === "asc"),
          class: "text-center h-full w-full p-0"
        },
        () => ["\u041C\u0430\u043A\u0435\u0442\u044B", h(ArrowUpDown, { class: " h-4 w-4" })]
      );
    },
    cell: ({ row }) => h("div", { class: "text-center" }, row.getValue("makets"))
  },
  //makets day
  {
    accessorKey: "maketsDayToDay",
    ruName: "\u041C\u0430\u043A\u0435\u0442\u044B \u0434\u0435\u043D\u044C \u0432 \u0434\u0435\u043D\u044C",
    header: ({ column }) => {
      return h(
        _sfc_main$g,
        {
          variant: "ghost",
          onClick: () => column.toggleSorting(column.getIsSorted() === "asc"),
          class: "text-center h-full p-0 text-wrap"
        },
        () => [
          h("span", { class: "text-wrap" }, "\u041C\u0430\u043A\u0435\u0442\u044B \u0434\u0435\u043D\u044C \u0432 \u0434\u0435\u043D\u044C"),
          h(ArrowUpDown, { class: " h-[34px] w-[34px]" })
        ]
      );
    },
    cell: ({ row }) => h("div", { class: "text-center" }, row.getValue("maketsDayToDay"))
  },
  //totalSales
  {
    accessorKey: "totalSales",
    ruName: "\u041E\u0431\u0449\u0438\u0435 \u043F\u0440\u043E\u0434\u0430\u0436\u0438",
    header: ({ column }) => {
      return h(
        _sfc_main$g,
        {
          variant: "ghost",
          onClick: () => column.toggleSorting(column.getIsSorted() === "asc"),
          class: "text-center h-full w-full p-0 text-wrap"
        },
        () => [
          h("span", { class: "text-wrap" }, "\u041E\u0431\u0449\u0438\u0435 \u043F\u0440\u043E\u0434\u0430\u0436\u0438"),
          h(ArrowUpDown, { class: "h-[34px] w-[34px]" })
        ]
      );
    },
    cell: ({ row }) => h(
      "div",
      { class: "text-center" },
      useMyFormatPrice(row.getValue("totalSales")) + "\u20BD"
    )
  },
  // dealSales
  {
    accessorKey: "dealSales",
    ruName: "\u041F\u0440\u043E\u0434\u0430\u0436\u0438 \u043F\u043E \u0441\u0434\u0435\u043B\u043A\u0430\u043C",
    header: ({ column }) => {
      return h(
        _sfc_main$g,
        {
          variant: "ghost",
          onClick: () => column.toggleSorting(column.getIsSorted() === "asc"),
          class: "text-center h-full w-full p-0 text-wrap"
        },
        () => [
          h("span", { class: "text-wrap" }, "\u041F\u0440\u043E\u0434\u0430\u0436\u0438 \u043F\u043E \u0441\u0434\u0435\u043B\u043A\u0430\u043C"),
          h(ArrowUpDown, { class: " h-[34px] w-[34px]" })
        ]
      );
    },
    cell: ({ row }) => h(
      "div",
      { class: "text-center" },
      useMyFormatPrice(row.getValue("dealSales")) + "\u20BD"
    )
  },
  // dealsAmount
  {
    accessorKey: "dealsAmount",
    ruName: "\u041A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u0441\u0434\u0435\u043B\u043E\u043A",
    header: ({ column }) => {
      return h(
        _sfc_main$g,
        {
          variant: "ghost",
          onClick: () => column.toggleSorting(column.getIsSorted() === "asc"),
          class: "text-center h-full w-full p-0 text-wrap"
        },
        () => [
          h("span", { class: "text-wrap" }, "\u041A\u043E\u043B-\u0432\u043E \u0441\u0434\u0435\u043B\u043E\u043A"),
          h(ArrowUpDown, { class: " h-[34px] w-[34px]" })
        ]
      );
    },
    cell: ({ row }) => h("div", { class: "text-center" }, row.getValue("dealsAmount"))
  },
  // Переходы в мессенджер
  {
    accessorKey: "redirectToMSG",
    ruName: "\u041F\u0435\u0440\u0435\u0445\u043E\u0434\u044B \u0432 \u043C\u0435\u0441\u0441\u0435\u043D\u0434\u0436\u0435\u0440",
    header: ({ column }) => {
      return h(
        _sfc_main$g,
        {
          variant: "ghost",
          onClick: () => column.toggleSorting(column.getIsSorted() === "asc"),
          class: "text-center h-full w-full p-0 text-wrap"
        },
        () => [
          h("span", { class: "text-wrap" }, "\u041F\u0435\u0440\u0435\u0445\u043E\u0434\u044B \u0432 \u043C\u0435\u0441\u0441\u0435\u043D\u0434\u0436\u0435\u0440"),
          h(ArrowUpDown, { class: " h-[34px] w-[34px]" })
        ]
      );
    },
    cell: ({ row }) => h("div", { class: "text-center" }, row.getValue("redirectToMSG"))
  },
  // conversion
  {
    accessorKey: "conversion",
    ruName: "\u041A\u043E\u043D\u0432\u0435\u0440\u0441\u0438\u044F",
    header: ({ column }) => {
      return h(
        _sfc_main$g,
        {
          variant: "ghost",
          onClick: () => column.toggleSorting(column.getIsSorted() === "asc"),
          class: "text-center h-full w-full p-0"
        },
        () => ["\u041A\u043E\u043D\u0432\u0435\u0440\u0441\u0438\u044F", h(ArrowUpDown, { class: " h-4 w-4" })]
      );
    },
    cell: ({ row }) => h("div", { class: "text-center" }, row.getValue("conversion") + "%")
  },
  //drr
  {
    accessorKey: "drr",
    ruName: "\u0414\u0420\u0420",
    header: ({ column }) => {
      return h(
        _sfc_main$g,
        {
          variant: "ghost",
          onClick: () => column.toggleSorting(column.getIsSorted() === "asc"),
          class: "text-center h-full w-full p-0"
        },
        () => ["\u0414\u0420\u0420", h(ArrowUpDown, { class: " h-4 w-4" })]
      );
    },
    cell: ({ row }) => h("div", { class: "text-center" }, row.getValue("drr") + "%")
  },
  // dopSales
  {
    accessorKey: "dopSales",
    ruName: "\u0414\u043E\u043F. \u043F\u0440\u043E\u0434\u0430\u0436\u0438",
    header: ({ column }) => {
      return h(
        _sfc_main$g,
        {
          variant: "ghost",
          onClick: () => column.toggleSorting(column.getIsSorted() === "asc"),
          class: "text-center h-full w-full p-0"
        },
        () => [
          h("span", { class: "text-wrap" }, "\u0414\u043E\u043F. \u043F\u0440\u043E\u0434\u0430\u0436\u0438"),
          h(ArrowUpDown, { class: " h-[34px] w-[34px]" })
        ]
      );
    },
    cell: ({ row }) => h(
      "div",
      { class: "text-center" },
      useMyFormatPrice(row.getValue("dopSales")) + "\u20BD"
    )
  },
  // averageBill
  {
    accessorKey: "averageBill",
    ruName: "\u0421\u0440\u0435\u0434\u043D\u0438\u0439 \u0447\u0435\u043A",
    header: ({ column }) => {
      return h(
        _sfc_main$g,
        {
          variant: "ghost",
          onClick: () => column.toggleSorting(column.getIsSorted() === "asc"),
          class: "text-center h-full w-full p-0 text-wrap"
        },
        () => [
          h("span", { class: "text-wrap" }, "\u0421\u0440\u0435\u0434\u043D\u0438\u0439 \u0447\u0435\u043A"),
          h(ArrowUpDown, { class: " h-[34px] w-[34px]" })
        ]
      );
    },
    cell: ({ row }) => h(
      "div",
      { class: "text-center" },
      useMyFormatPrice(row.getValue("averageBill")) + "\u20BD"
    )
  },
  // dealsDayToDayCount
  {
    accessorKey: "dealsDayToDayCount",
    ruName: "\u0421\u0434\u0435\u043B\u043A\u0438 \u0434\u0435\u043D\u044C \u0432 \u0434\u0435\u043D\u044C",
    header: ({ column }) => {
      return h(
        _sfc_main$g,
        {
          variant: "ghost",
          onClick: () => column.toggleSorting(column.getIsSorted() === "asc"),
          class: "text-center h-full w-full p-0 text-wrap"
        },
        () => [
          h("span", { class: "text-wrap" }, "\u0421\u0434\u0435\u043B\u043A\u0438 \u0434\u0435\u043D\u044C \u0432 \u0434\u0435\u043D\u044C"),
          h(ArrowUpDown, { class: " h-[34px] w-[34px]" })
        ]
      );
    },
    cell: ({ row }) => h("div", { class: "text-center" }, row.getValue("dealsDayToDayCount"))
  },
  // {
  //   accessorKey: "userId",
  //   ruName: "ID пользователя",
  //   header: ({ column }) => {
  //     return h(
  //       Button,
  //       {
  //         variant: "ghost",
  //         onClick: () => column.toggleSorting(column.getIsSorted() === "asc"),
  //         class: "text-center h-full w-full p-0",
  //       },
  //       () => ["ID пользователя", h(ArrowUpDown, { class: " h-4 w-4" })]
  //     );
  //   },
  //   cell: ({ row }) =>
  //     h("div", { class: "text-center" }, row.getValue("userId")),
  // },
  {
    accessorKey: "actions",
    ruName: "\u0414\u0435\u0439\u0441\u0442\u0432\u0438\u044F",
    header: () => h("div", { class: "text-center" }, "\u0414\u0435\u0439\u0441\u0442\u0432\u0438\u044F"),
    enableHiding: false,
    cell: ({ row, table }) => {
      const item = row.original;
      return h(
        _sfc_main$g,
        {
          class: "h-5 px-1",
          item,
          onClick: () => {
            var _a;
            return (_a = table.options.meta) == null ? void 0 : _a.deleteItem(item);
          }
        },
        () => "\u0423\u0434\u0430\u043B\u0438\u0442\u044C"
        // Используем функцию вместо статической строки
      );
    }
  }
];
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "ManagersReports",
  __ssrInlineRender: true,
  props: {
    period: {}
  },
  setup(__props) {
    const { $useApi } = useNuxtApp();
    const props = __props;
    const range = ref([
      new Date(props.period).toISOString().slice(0, 10),
      new Date(+props.period.split("-")[0], +props.period.split("-")[1], 1).toISOString().slice(0, 10)
    ]);
    const minDate = ref(/* @__PURE__ */ new Date(props.period + "-01"));
    const maxDate = ref(new Date(+props.period.split("-")[0], +props.period.split("-")[1], 0));
    const managers = ref([]);
    const curManagerWorkspace = ref("");
    const newReportManagerBlank = ref({
      date: (/* @__PURE__ */ new Date()).toISOString().slice(0, 10),
      userId: 0,
      calls: 0,
      makets: 0,
      maketsDayToDay: 0,
      redirectToMSG: 0
    });
    const totalsInfo = ref([
      {
        title: "\u0421\u0443\u043C\u043C\u0430 \u043F\u0440\u043E\u0434\u0430\u0436",
        value: "0"
      },
      {
        title: "\u0421\u0440\u0435\u0434\u043D\u0438\u0439 \u0447\u0435\u043A",
        value: "0"
      },
      {
        title: "\u041A\u043E\u043D\u0432\u0435\u0440\u0441\u0438\u044F",
        value: "0"
      }
    ]);
    function getRandomDate() {
      const day = Math.floor(Math.random() * 31) + 1;
      return `2025-03-${day.toString().padStart(2, "0")}`;
    }
    const defManagers = [
      "Bob",
      "Alice",
      "John",
      "Emma",
      "Mike",
      "Sarah",
      "Tom",
      "Lisa",
      "David",
      "Anna"
    ];
    const managersReports = ref(
      Array.from({ length: 10 }, (_, i) => ({
        id: i + 1,
        date: getRandomDate(),
        // Случайная дата в марте 2025
        userId: Math.floor(Math.random() * 10) + 1,
        // Случайный userId от 1 до 10
        calls: Math.floor(Math.random() * 100),
        // Случайное количество звонков (0-99)
        makets: Math.floor(Math.random() * 50),
        // Случайное количество макетов (0-49)
        maketsDayToDay: Math.floor(Math.random() * 20),
        // Случайное количество макетов день ко дню (0-19)
        manager: defManagers[i],
        // Случайное имя менеджера
        managerId: i + 1,
        // ID менеджера от 1 до 10
        totalSales: Math.floor(Math.random() * 1e6),
        // Общие продажи (0-999999)
        dealSales: Math.floor(Math.random() * 5e5),
        // Продажи по сделкам (0-499999)
        dealsAmount: Math.floor(Math.random() * 100),
        // Количество сделок (0-99)
        conversion: Number((Math.random() * 100).toFixed(2)),
        // Конверсия (0-100%)
        drr: Number((Math.random() * 50).toFixed(2)),
        // ДРР (0-50)
        dopSales: Math.floor(Math.random() * 2e5),
        // Дополнительные продажи (0-199999)
        averageBill: Math.floor(Math.random() * 5e4),
        // Средний чек (0-49999)
        dealsDayToDayCount: Math.floor(Math.random() * 30)
        // Количество сделок день ко дню (0-29)
      }))
    );
    const dayPredata = ref({
      manager: "\u041D\u0435 \u0432\u044B\u0431\u0440\u0430\u043D",
      dopSales: 0,
      dealSales: 0,
      dealsAmount: 0,
      averageBill: 0,
      dealsDayToDayCount: 0,
      date: (/* @__PURE__ */ new Date()).toISOString().slice(0, 10)
    });
    const disabled = ref(true);
    const getManagersData = async (id) => {
      try {
        const { data } = await $useApi.get(
          `/reports/manager/${id}/data`,
          {
            params: { date: newReportManagerBlank.value.date }
          }
        );
        dayPredata.value = data;
      } catch (error) {
        console.log(error);
      }
    };
    const createManagerReport = async () => {
      try {
        const { data } = await $useApi.post(
          "reports/manager",
          newReportManagerBlank.value
        );
        console.log(data);
        newReportManagerBlank.value.calls = 0;
        newReportManagerBlank.value.makets = 0;
        newReportManagerBlank.value.maketsDayToDay = 0;
        newReportManagerBlank.value.redirectToMSG = 0;
        await getRangeData();
      } catch (error) {
        console.log(error);
      }
    };
    const deleteItem = async (id) => {
      try {
        await $useApi.delete("reports/manager/" + id);
        await getRangeData();
        return;
      } catch (error) {
        console.log(error);
      }
    };
    const calcTotals = (ids) => {
      const rep = managersReports.value.filter((rep2) => ids.includes(rep2.id));
      const totalSales = rep.reduce((a, b) => a + b.totalSales, 0);
      const dealsAmount = rep.reduce((a, b) => a + b.dealsAmount, 0);
      const calls = rep.reduce((a, b) => a + b.calls, 0);
      const averageBill = dealsAmount ? +(totalSales / dealsAmount).toFixed() : 0;
      const conversion = calls ? dealsAmount / calls * 100 : 0;
      totalsInfo.value = [
        {
          title: "\u0421\u0443\u043C\u043C\u0430 \u043F\u0440\u043E\u0434\u0430\u0436",
          value: useMyFormatPrice(totalSales) + "\u20BD"
        },
        {
          title: "\u0421\u0440\u0435\u0434\u043D\u0438\u0439 \u0447\u0435\u043A",
          value: useMyFormatPrice(averageBill) + "\u20BD"
        },
        {
          title: "\u041A\u043E\u043D\u0432\u0435\u0440\u0441\u0438\u044F",
          value: conversion.toFixed(2) + "%"
        }
      ];
    };
    const getRangeData = async () => {
      try {
        const from = new Date(range.value[0]).toISOString().slice(0, 10);
        const to = new Date(range.value[1]).toISOString().slice(0, 10);
        const { data } = await $useApi.get("reports/managers/range", {
          params: { from, to }
        });
        managersReports.value = data;
      } catch (error) {
        console.log(error);
      }
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
    watch(
      newReportManagerBlank,
      async () => {
        if (/^\d{4}-\d{2}-\d{2}$/.test(newReportManagerBlank.value.date) && newReportManagerBlank.value.userId !== 0) {
          await getManagersData(newReportManagerBlank.value.userId);
        }
        const { calls, userId, maketsDayToDay, makets } = newReportManagerBlank.value;
        if (calls && userId && maketsDayToDay && makets) {
          disabled.value = false;
        } else {
          disabled.value = true;
        }
      },
      { deep: true }
    );
    watch(range, async () => {
      await getRangeData();
    }, { deep: true });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UiCard = _sfc_main$3$1;
      const _component_UiCardHeader = _sfc_main$2$2;
      const _component_UiCardTitle = _sfc_main$1$2;
      const _component_UiCardDescription = _sfc_main$c;
      const _component_UiCardContent = _sfc_main$d;
      const _component_UiLabel = _sfc_main$e;
      const _component_UiInput = _sfc_main$9;
      const _component_MyComboboxModels = _sfc_main$f;
      const _component_UiButton = _sfc_main$g;
      const _component_UiCardFooter = _sfc_main$h;
      const _component_MyReportsDataTable = _sfc_main$5;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex gap-2 w-full" }, _attrs))}><div class="min-w-[250px]">`);
      _push(ssrRenderComponent(_component_UiCard, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UiCardHeader, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UiCardTitle, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` \u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u043E\u0442\u0447\u0435\u0442 `);
                      } else {
                        return [
                          createTextVNode(" \u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u043E\u0442\u0447\u0435\u0442 ")
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
                        createTextVNode(" \u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u043E\u0442\u0447\u0435\u0442 ")
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
                  _push3(`<div class="flex flex-col gap-5"${_scopeId2}><div class="relative"${_scopeId2}>`);
                  if (unref(newReportManagerBlank).date) {
                    _push3(ssrRenderComponent(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`\u0414\u0430\u0442\u0430 \u0441\u043C\u0435\u043D\u044B`);
                        } else {
                          return [
                            createTextVNode("\u0414\u0430\u0442\u0430 \u0441\u043C\u0435\u043D\u044B")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(ssrRenderComponent(_component_UiInput, {
                    modelValue: unref(newReportManagerBlank).date,
                    "onUpdate:modelValue": ($event) => unref(newReportManagerBlank).date = $event,
                    type: "date",
                    placeholder: "\u0414\u0430\u0442\u0430 \u0441\u043C\u0435\u043D\u044B",
                    class: unref(newReportManagerBlank).date ? "" : "outline-1 outline-rose-300"
                  }, null, _parent3, _scopeId2));
                  _push3(`</div><div class="relative w-full"${_scopeId2}>`);
                  if (unref(newReportManagerBlank).userId !== 0) {
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
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(`<div class="flex gap-2"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_MyComboboxModels, {
                    items: unref(managers).map((m) => ({ value: m.id, label: m.fullName })),
                    label: "\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u043C\u0435\u043D\u0435\u0434\u0436\u0435\u0440\u0430",
                    onSelectedItem: (value) => {
                      var _a2;
                      var _a, _b;
                      unref(newReportManagerBlank).userId = value;
                      curManagerWorkspace.value = (_a2 = (_b = (_a = unref(managers).find((m) => m.id === value)) == null ? void 0 : _a.workSpace) == null ? void 0 : _b.title) != null ? _a2 : "";
                    }
                  }, null, _parent3, _scopeId2));
                  _push3(`</div></div><div class="relative"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`\u041A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u0437\u0430\u044F\u0432\u043E\u043A`);
                      } else {
                        return [
                          createTextVNode("\u041A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u0437\u0430\u044F\u0432\u043E\u043A")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`<div class="flex gap-2"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_UiInput, {
                    modelValue: unref(newReportManagerBlank).calls,
                    "onUpdate:modelValue": ($event) => unref(newReportManagerBlank).calls = $event,
                    placeholder: "\u041A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u0437\u0430\u044F\u0432\u043E\u043A",
                    type: "number",
                    class: unref(newReportManagerBlank).calls ? "" : "outline-1 outline-rose-300"
                  }, null, _parent3, _scopeId2));
                  _push3(`</div></div><div class="relative"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`\u041C\u0430\u043A\u0435\u0442\u043E\u0432 \u0434\u0435\u043D\u044C \u0432 \u0434\u0435\u043D\u044C`);
                      } else {
                        return [
                          createTextVNode("\u041C\u0430\u043A\u0435\u0442\u043E\u0432 \u0434\u0435\u043D\u044C \u0432 \u0434\u0435\u043D\u044C")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`<div class="flex gap-2"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_UiInput, {
                    modelValue: unref(newReportManagerBlank).maketsDayToDay,
                    "onUpdate:modelValue": ($event) => unref(newReportManagerBlank).maketsDayToDay = $event,
                    placeholder: "\u041C\u0430\u043A\u0435\u0442\u043E\u0432 \u0434\u0435\u043D\u044C \u0432 \u0434\u0435\u043D\u044C",
                    type: "number",
                    class: unref(newReportManagerBlank).maketsDayToDay ? "" : "outline-1 outline-rose-300"
                  }, null, _parent3, _scopeId2));
                  _push3(`</div></div><div class="relative"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`\u041C\u0430\u043A\u0435\u0442\u043E\u0432 \u0432\u0441\u0435\u0433\u043E`);
                      } else {
                        return [
                          createTextVNode("\u041C\u0430\u043A\u0435\u0442\u043E\u0432 \u0432\u0441\u0435\u0433\u043E")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`<div class="flex gap-2"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_UiInput, {
                    modelValue: unref(newReportManagerBlank).makets,
                    "onUpdate:modelValue": ($event) => unref(newReportManagerBlank).makets = $event,
                    placeholder: "\u041C\u0430\u043A\u0435\u0442\u043E\u0432 \u0432\u0441\u0435\u0433\u043E",
                    type: "number",
                    class: unref(newReportManagerBlank).makets ? "" : "outline-1 outline-rose-300"
                  }, null, _parent3, _scopeId2));
                  _push3(`</div></div>`);
                  if (unref(curManagerWorkspace) === "B2B") {
                    _push3(`<div class="relative"${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`\u041F\u0435\u0440\u0435\u0445\u043E\u0434 \u0432 \u043C\u0435\u0441\u0441\u0435\u043D\u0434\u0436\u0435\u0440`);
                        } else {
                          return [
                            createTextVNode("\u041F\u0435\u0440\u0435\u0445\u043E\u0434 \u0432 \u043C\u0435\u0441\u0441\u0435\u043D\u0434\u0436\u0435\u0440")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(`<div class="flex gap-2"${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_UiInput, {
                      modelValue: unref(newReportManagerBlank).redirectToMSG,
                      "onUpdate:modelValue": ($event) => unref(newReportManagerBlank).redirectToMSG = $event,
                      placeholder: "\u041F\u0435\u0440\u0435\u0445\u043E\u0434 \u0432 \u043C\u0435\u0441\u0441\u0435\u043D\u0434\u0436\u0435\u0440",
                      type: "number",
                      class: unref(newReportManagerBlank).redirectToMSG ? "" : "outline-1 outline-rose-300"
                    }, null, _parent3, _scopeId2));
                    _push3(`</div></div>`);
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(ssrRenderComponent(_component_UiButton, {
                    disabled: unref(disabled),
                    onClick: createManagerReport
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
                  _push3(`</div><div class="flex flex-col gap-1 mt-4 text-slate-500"${_scopeId2}><span${_scopeId2}> \u041C\u0435\u043D\u0435\u0434\u0436\u0435\u0440: ${ssrInterpolate(unref(dayPredata).manager)}</span><span${_scopeId2}> \u0421\u0443\u043C\u043C\u0430 \u043F\u0440\u043E\u0434\u0430\u0436: ${ssrInterpolate(unref(dayPredata).dealSales)}\u0440.</span><span${_scopeId2}> \u0421\u0443\u043C\u043C\u0430 \u0434\u043E\u043F.\u043F\u0440\u043E\u0434\u0430\u0436: ${ssrInterpolate(unref(dayPredata).dopSales)}\u0440. </span><span${_scopeId2}> \u041A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u0441\u0434\u0435\u043B\u043E\u043A: ${ssrInterpolate(unref(dayPredata).dealsAmount)}</span><span${_scopeId2}> \u0421\u0440\u0435\u0434\u043D\u0438\u0439 \u0447\u0435\u043A: ${ssrInterpolate(unref(dayPredata).averageBill)}\u0440.</span><span${_scopeId2}> \u0421\u0434\u0435\u043B\u043E\u043A \u0434\u0435\u043D\u044C \u0432 \u0434\u0435\u043D\u044C: ${ssrInterpolate(unref(dayPredata).dealsDayToDayCount)}</span></div>`);
                } else {
                  return [
                    createVNode("div", { class: "flex flex-col gap-5" }, [
                      createVNode("div", { class: "relative" }, [
                        unref(newReportManagerBlank).date ? (openBlock(), createBlock(_component_UiLabel, {
                          key: 0,
                          class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap"
                        }, {
                          default: withCtx(() => [
                            createTextVNode("\u0414\u0430\u0442\u0430 \u0441\u043C\u0435\u043D\u044B")
                          ]),
                          _: 1
                        })) : createCommentVNode("", true),
                        createVNode(_component_UiInput, {
                          modelValue: unref(newReportManagerBlank).date,
                          "onUpdate:modelValue": ($event) => unref(newReportManagerBlank).date = $event,
                          type: "date",
                          placeholder: "\u0414\u0430\u0442\u0430 \u0441\u043C\u0435\u043D\u044B",
                          class: unref(newReportManagerBlank).date ? "" : "outline-1 outline-rose-300"
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "class"])
                      ]),
                      createVNode("div", { class: "relative w-full" }, [
                        unref(newReportManagerBlank).userId !== 0 ? (openBlock(), createBlock(_component_UiLabel, {
                          key: 0,
                          class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap"
                        }, {
                          default: withCtx(() => [
                            createTextVNode("\u041C\u0435\u043D\u0435\u0434\u0436\u0435\u0440")
                          ]),
                          _: 1
                        })) : createCommentVNode("", true),
                        createVNode("div", { class: "flex gap-2" }, [
                          createVNode(_component_MyComboboxModels, {
                            items: unref(managers).map((m) => ({ value: m.id, label: m.fullName })),
                            label: "\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u043C\u0435\u043D\u0435\u0434\u0436\u0435\u0440\u0430",
                            onSelectedItem: (value) => {
                              var _a2;
                              var _a, _b;
                              unref(newReportManagerBlank).userId = value;
                              curManagerWorkspace.value = (_a2 = (_b = (_a = unref(managers).find((m) => m.id === value)) == null ? void 0 : _a.workSpace) == null ? void 0 : _b.title) != null ? _a2 : "";
                            }
                          }, null, 8, ["items", "onSelectedItem"])
                        ])
                      ]),
                      createVNode("div", { class: "relative" }, [
                        createVNode(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap" }, {
                          default: withCtx(() => [
                            createTextVNode("\u041A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u0437\u0430\u044F\u0432\u043E\u043A")
                          ]),
                          _: 1
                        }),
                        createVNode("div", { class: "flex gap-2" }, [
                          createVNode(_component_UiInput, {
                            modelValue: unref(newReportManagerBlank).calls,
                            "onUpdate:modelValue": ($event) => unref(newReportManagerBlank).calls = $event,
                            placeholder: "\u041A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u0437\u0430\u044F\u0432\u043E\u043A",
                            type: "number",
                            class: unref(newReportManagerBlank).calls ? "" : "outline-1 outline-rose-300"
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "class"])
                        ])
                      ]),
                      createVNode("div", { class: "relative" }, [
                        createVNode(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap" }, {
                          default: withCtx(() => [
                            createTextVNode("\u041C\u0430\u043A\u0435\u0442\u043E\u0432 \u0434\u0435\u043D\u044C \u0432 \u0434\u0435\u043D\u044C")
                          ]),
                          _: 1
                        }),
                        createVNode("div", { class: "flex gap-2" }, [
                          createVNode(_component_UiInput, {
                            modelValue: unref(newReportManagerBlank).maketsDayToDay,
                            "onUpdate:modelValue": ($event) => unref(newReportManagerBlank).maketsDayToDay = $event,
                            placeholder: "\u041C\u0430\u043A\u0435\u0442\u043E\u0432 \u0434\u0435\u043D\u044C \u0432 \u0434\u0435\u043D\u044C",
                            type: "number",
                            class: unref(newReportManagerBlank).maketsDayToDay ? "" : "outline-1 outline-rose-300"
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "class"])
                        ])
                      ]),
                      createVNode("div", { class: "relative" }, [
                        createVNode(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap" }, {
                          default: withCtx(() => [
                            createTextVNode("\u041C\u0430\u043A\u0435\u0442\u043E\u0432 \u0432\u0441\u0435\u0433\u043E")
                          ]),
                          _: 1
                        }),
                        createVNode("div", { class: "flex gap-2" }, [
                          createVNode(_component_UiInput, {
                            modelValue: unref(newReportManagerBlank).makets,
                            "onUpdate:modelValue": ($event) => unref(newReportManagerBlank).makets = $event,
                            placeholder: "\u041C\u0430\u043A\u0435\u0442\u043E\u0432 \u0432\u0441\u0435\u0433\u043E",
                            type: "number",
                            class: unref(newReportManagerBlank).makets ? "" : "outline-1 outline-rose-300"
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "class"])
                        ])
                      ]),
                      unref(curManagerWorkspace) === "B2B" ? (openBlock(), createBlock("div", {
                        key: 0,
                        class: "relative"
                      }, [
                        createVNode(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap" }, {
                          default: withCtx(() => [
                            createTextVNode("\u041F\u0435\u0440\u0435\u0445\u043E\u0434 \u0432 \u043C\u0435\u0441\u0441\u0435\u043D\u0434\u0436\u0435\u0440")
                          ]),
                          _: 1
                        }),
                        createVNode("div", { class: "flex gap-2" }, [
                          createVNode(_component_UiInput, {
                            modelValue: unref(newReportManagerBlank).redirectToMSG,
                            "onUpdate:modelValue": ($event) => unref(newReportManagerBlank).redirectToMSG = $event,
                            placeholder: "\u041F\u0435\u0440\u0435\u0445\u043E\u0434 \u0432 \u043C\u0435\u0441\u0441\u0435\u043D\u0434\u0436\u0435\u0440",
                            type: "number",
                            class: unref(newReportManagerBlank).redirectToMSG ? "" : "outline-1 outline-rose-300"
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "class"])
                        ])
                      ])) : createCommentVNode("", true),
                      createVNode(_component_UiButton, {
                        disabled: unref(disabled),
                        onClick: createManagerReport
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" \u0421\u043E\u0437\u0434\u0430\u0442\u044C ")
                        ]),
                        _: 1
                      }, 8, ["disabled"])
                    ]),
                    createVNode("div", { class: "flex flex-col gap-1 mt-4 text-slate-500" }, [
                      createVNode("span", null, " \u041C\u0435\u043D\u0435\u0434\u0436\u0435\u0440: " + toDisplayString(unref(dayPredata).manager), 1),
                      createVNode("span", null, " \u0421\u0443\u043C\u043C\u0430 \u043F\u0440\u043E\u0434\u0430\u0436: " + toDisplayString(unref(dayPredata).dealSales) + "\u0440.", 1),
                      createVNode("span", null, " \u0421\u0443\u043C\u043C\u0430 \u0434\u043E\u043F.\u043F\u0440\u043E\u0434\u0430\u0436: " + toDisplayString(unref(dayPredata).dopSales) + "\u0440. ", 1),
                      createVNode("span", null, " \u041A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u0441\u0434\u0435\u043B\u043E\u043A: " + toDisplayString(unref(dayPredata).dealsAmount), 1),
                      createVNode("span", null, " \u0421\u0440\u0435\u0434\u043D\u0438\u0439 \u0447\u0435\u043A: " + toDisplayString(unref(dayPredata).averageBill) + "\u0440.", 1),
                      createVNode("span", null, " \u0421\u0434\u0435\u043B\u043E\u043A \u0434\u0435\u043D\u044C \u0432 \u0434\u0435\u043D\u044C: " + toDisplayString(unref(dayPredata).dealsDayToDayCount), 1)
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
                      createTextVNode(" \u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u043E\u0442\u0447\u0435\u0442 ")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_UiCardDescription)
                ]),
                _: 1
              }),
              createVNode(_component_UiCardContent, null, {
                default: withCtx(() => [
                  createVNode("div", { class: "flex flex-col gap-5" }, [
                    createVNode("div", { class: "relative" }, [
                      unref(newReportManagerBlank).date ? (openBlock(), createBlock(_component_UiLabel, {
                        key: 0,
                        class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap"
                      }, {
                        default: withCtx(() => [
                          createTextVNode("\u0414\u0430\u0442\u0430 \u0441\u043C\u0435\u043D\u044B")
                        ]),
                        _: 1
                      })) : createCommentVNode("", true),
                      createVNode(_component_UiInput, {
                        modelValue: unref(newReportManagerBlank).date,
                        "onUpdate:modelValue": ($event) => unref(newReportManagerBlank).date = $event,
                        type: "date",
                        placeholder: "\u0414\u0430\u0442\u0430 \u0441\u043C\u0435\u043D\u044B",
                        class: unref(newReportManagerBlank).date ? "" : "outline-1 outline-rose-300"
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "class"])
                    ]),
                    createVNode("div", { class: "relative w-full" }, [
                      unref(newReportManagerBlank).userId !== 0 ? (openBlock(), createBlock(_component_UiLabel, {
                        key: 0,
                        class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap"
                      }, {
                        default: withCtx(() => [
                          createTextVNode("\u041C\u0435\u043D\u0435\u0434\u0436\u0435\u0440")
                        ]),
                        _: 1
                      })) : createCommentVNode("", true),
                      createVNode("div", { class: "flex gap-2" }, [
                        createVNode(_component_MyComboboxModels, {
                          items: unref(managers).map((m) => ({ value: m.id, label: m.fullName })),
                          label: "\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u043C\u0435\u043D\u0435\u0434\u0436\u0435\u0440\u0430",
                          onSelectedItem: (value) => {
                            var _a2;
                            var _a, _b;
                            unref(newReportManagerBlank).userId = value;
                            curManagerWorkspace.value = (_a2 = (_b = (_a = unref(managers).find((m) => m.id === value)) == null ? void 0 : _a.workSpace) == null ? void 0 : _b.title) != null ? _a2 : "";
                          }
                        }, null, 8, ["items", "onSelectedItem"])
                      ])
                    ]),
                    createVNode("div", { class: "relative" }, [
                      createVNode(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap" }, {
                        default: withCtx(() => [
                          createTextVNode("\u041A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u0437\u0430\u044F\u0432\u043E\u043A")
                        ]),
                        _: 1
                      }),
                      createVNode("div", { class: "flex gap-2" }, [
                        createVNode(_component_UiInput, {
                          modelValue: unref(newReportManagerBlank).calls,
                          "onUpdate:modelValue": ($event) => unref(newReportManagerBlank).calls = $event,
                          placeholder: "\u041A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u0437\u0430\u044F\u0432\u043E\u043A",
                          type: "number",
                          class: unref(newReportManagerBlank).calls ? "" : "outline-1 outline-rose-300"
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "class"])
                      ])
                    ]),
                    createVNode("div", { class: "relative" }, [
                      createVNode(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap" }, {
                        default: withCtx(() => [
                          createTextVNode("\u041C\u0430\u043A\u0435\u0442\u043E\u0432 \u0434\u0435\u043D\u044C \u0432 \u0434\u0435\u043D\u044C")
                        ]),
                        _: 1
                      }),
                      createVNode("div", { class: "flex gap-2" }, [
                        createVNode(_component_UiInput, {
                          modelValue: unref(newReportManagerBlank).maketsDayToDay,
                          "onUpdate:modelValue": ($event) => unref(newReportManagerBlank).maketsDayToDay = $event,
                          placeholder: "\u041C\u0430\u043A\u0435\u0442\u043E\u0432 \u0434\u0435\u043D\u044C \u0432 \u0434\u0435\u043D\u044C",
                          type: "number",
                          class: unref(newReportManagerBlank).maketsDayToDay ? "" : "outline-1 outline-rose-300"
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "class"])
                      ])
                    ]),
                    createVNode("div", { class: "relative" }, [
                      createVNode(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap" }, {
                        default: withCtx(() => [
                          createTextVNode("\u041C\u0430\u043A\u0435\u0442\u043E\u0432 \u0432\u0441\u0435\u0433\u043E")
                        ]),
                        _: 1
                      }),
                      createVNode("div", { class: "flex gap-2" }, [
                        createVNode(_component_UiInput, {
                          modelValue: unref(newReportManagerBlank).makets,
                          "onUpdate:modelValue": ($event) => unref(newReportManagerBlank).makets = $event,
                          placeholder: "\u041C\u0430\u043A\u0435\u0442\u043E\u0432 \u0432\u0441\u0435\u0433\u043E",
                          type: "number",
                          class: unref(newReportManagerBlank).makets ? "" : "outline-1 outline-rose-300"
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "class"])
                      ])
                    ]),
                    unref(curManagerWorkspace) === "B2B" ? (openBlock(), createBlock("div", {
                      key: 0,
                      class: "relative"
                    }, [
                      createVNode(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap" }, {
                        default: withCtx(() => [
                          createTextVNode("\u041F\u0435\u0440\u0435\u0445\u043E\u0434 \u0432 \u043C\u0435\u0441\u0441\u0435\u043D\u0434\u0436\u0435\u0440")
                        ]),
                        _: 1
                      }),
                      createVNode("div", { class: "flex gap-2" }, [
                        createVNode(_component_UiInput, {
                          modelValue: unref(newReportManagerBlank).redirectToMSG,
                          "onUpdate:modelValue": ($event) => unref(newReportManagerBlank).redirectToMSG = $event,
                          placeholder: "\u041F\u0435\u0440\u0435\u0445\u043E\u0434 \u0432 \u043C\u0435\u0441\u0441\u0435\u043D\u0434\u0436\u0435\u0440",
                          type: "number",
                          class: unref(newReportManagerBlank).redirectToMSG ? "" : "outline-1 outline-rose-300"
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "class"])
                      ])
                    ])) : createCommentVNode("", true),
                    createVNode(_component_UiButton, {
                      disabled: unref(disabled),
                      onClick: createManagerReport
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" \u0421\u043E\u0437\u0434\u0430\u0442\u044C ")
                      ]),
                      _: 1
                    }, 8, ["disabled"])
                  ]),
                  createVNode("div", { class: "flex flex-col gap-1 mt-4 text-slate-500" }, [
                    createVNode("span", null, " \u041C\u0435\u043D\u0435\u0434\u0436\u0435\u0440: " + toDisplayString(unref(dayPredata).manager), 1),
                    createVNode("span", null, " \u0421\u0443\u043C\u043C\u0430 \u043F\u0440\u043E\u0434\u0430\u0436: " + toDisplayString(unref(dayPredata).dealSales) + "\u0440.", 1),
                    createVNode("span", null, " \u0421\u0443\u043C\u043C\u0430 \u0434\u043E\u043F.\u043F\u0440\u043E\u0434\u0430\u0436: " + toDisplayString(unref(dayPredata).dopSales) + "\u0440. ", 1),
                    createVNode("span", null, " \u041A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u0441\u0434\u0435\u043B\u043E\u043A: " + toDisplayString(unref(dayPredata).dealsAmount), 1),
                    createVNode("span", null, " \u0421\u0440\u0435\u0434\u043D\u0438\u0439 \u0447\u0435\u043A: " + toDisplayString(unref(dayPredata).averageBill) + "\u0440.", 1),
                    createVNode("span", null, " \u0421\u0434\u0435\u043B\u043E\u043A \u0434\u0435\u043D\u044C \u0432 \u0434\u0435\u043D\u044C: " + toDisplayString(unref(dayPredata).dealsDayToDayCount), 1)
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
      _push(`</div><div class="w-full overflow-hidden"><div class="flex gap-1 mb-2"><!--[-->`);
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
      _push(`<!--]--></div><div class="w-[280px]">`);
      _push(ssrRenderComponent(unref(Qn), {
        modelValue: unref(range),
        "onUpdate:modelValue": ($event) => isRef(range) ? range.value = $event : null,
        range: "",
        "enable-time-picker": false,
        "min-date": unref(minDate),
        "max-date": unref(maxDate),
        "auto-apply": "",
        locale: "ru",
        placeholder: "\u0412\u044B\u0431\u0440\u0430\u0442\u044C \u0434\u043D\u0438",
        "select-text": "\u0413\u043E\u0442\u043E\u0432\u043E",
        "cancel-text": "\u0417\u0430\u043A\u0440\u044B\u0442\u044C",
        class: "grow",
        format: formatRange,
        clearable: false
      }, null, _parent));
      _push(`</div><div class="mt-[-35px]">`);
      _push(ssrRenderComponent(_component_MyReportsDataTable, {
        data: unref(managersReports),
        columns: unref(reportsColumns),
        managers: unref(managers).map((m) => {
          return { label: m.fullName, value: m.fullName };
        }),
        onTableSorted: (ids) => calcTotals(ids),
        onOnDeleteItem: deleteItem
      }, null, _parent));
      _push(`</div></div></div>`);
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/my/reports/ManagersReports.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "RopDataTableToolbar",
  __ssrInlineRender: true,
  props: {
    table: {},
    wFilters: {}
  },
  setup(__props) {
    const props = __props;
    const isFiltered = computed(
      () => props.table.getState().columnFilters.length > 0
    );
    return (_ctx, _push, _parent, _attrs) => {
      const _component_MyReportsDataTableFacetedFilter = _sfc_main$7;
      const _component_UiButton = _sfc_main$g;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex items-center justify-between" }, _attrs))}><div class="flex flex-1 items-center space-x-2">`);
      if (_ctx.table.getColumn("workSpace")) {
        _push(ssrRenderComponent(_component_MyReportsDataTableFacetedFilter, {
          column: _ctx.table.getColumn("workSpace"),
          title: "\u041E\u0442\u0434\u0435\u043B",
          options: _ctx.wFilters
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
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/my/reports/RopDataTableToolbar.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "RopsDataTable",
  __ssrInlineRender: true,
  props: {
    columns: {},
    data: {},
    wFilters: {}
  },
  emits: ["table-sorted", "on-delete-item"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const curDeal = ref(0);
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
      },
      meta: {
        deleteItem: (item) => onDeleteItem(item.id)
      }
    });
    const emit = __emit;
    const onDeleteItem = (item) => {
      emit("on-delete-item", item);
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
      const _component_MyReportsRopDataTableToolbar = _sfc_main$3;
      const _component_UiPopover = _sfc_main$2$3;
      const _component_UiPopoverTrigger = _sfc_main$1$3;
      const _component_UiButton = _sfc_main$g;
      const _component_UiPopoverContent = _sfc_main$j;
      const _component_UiCheckbox = _sfc_main$k;
      const _component_UiScrollArea = _sfc_main$l;
      const _component_UiTable = _sfc_main$5$1;
      const _component_UiTableHeader = _sfc_main$m;
      const _component_UiTableRow = _sfc_main$2$4;
      const _component_UiTableHead = _sfc_main$1$4;
      const _component_UiTableBody = _sfc_main$4$1;
      const _component_UiTableCell = _sfc_main$3$2;
      const _component_UiScrollBar = _sfc_main$1$5;
      _push(`<!--[--><div class="flex mb-2 justify-between"><div class="ml-[290px]">`);
      _push(ssrRenderComponent(_component_MyReportsRopDataTableToolbar, {
        key: _ctx.wFilters.length,
        table: unref(table),
        "w-filters": _ctx.wFilters
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
      _push(`</div></div><div class="bg-slate-100">`);
      _push(ssrRenderComponent(_component_UiScrollArea, { class: "h-[calc(100vh-390px)]" }, {
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
                                unref(curDeal) === row.original.id ? "bg-slate-300/70" : "bg-slate-100",
                                "cursor-pointer"
                              ],
                              "data-state": row.getIsSelected() ? "selected" : void 0
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
                                unref(curDeal) === row.original.id ? "bg-slate-300/70" : "bg-slate-100",
                                "cursor-pointer"
                              ],
                              "data-state": row.getIsSelected() ? "selected" : void 0
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
                            }, 1032, ["class", "data-state"]);
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
                                unref(curDeal) === row.original.id ? "bg-slate-300/70" : "bg-slate-100",
                                "cursor-pointer"
                              ],
                              "data-state": row.getIsSelected() ? "selected" : void 0
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
                            }, 1032, ["class", "data-state"]);
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
                              unref(curDeal) === row.original.id ? "bg-slate-300/70" : "bg-slate-100",
                              "cursor-pointer"
                            ],
                            "data-state": row.getIsSelected() ? "selected" : void 0
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
                          }, 1032, ["class", "data-state"]);
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
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/my/reports/RopsDataTable.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const ropReportsColumns = [
  // Отдел
  {
    accessorKey: "workSpace",
    ruName: "\u041E\u0442\u0434\u0435\u043B",
    header: ({ column }) => {
      return h(
        _sfc_main$g,
        {
          variant: "ghost",
          onClick: () => column.toggleSorting(column.getIsSorted() === "asc"),
          class: "text-center h-full w-full p-1"
        },
        () => ["\u041E\u0442\u0434\u0435\u043B", h(ArrowUpDown, { class: "ml-2 h-4 w-4" })]
      );
    },
    cell: ({ row }) => h("div", { class: "text-center" }, row.getValue("workSpace")),
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    }
  },
  // Дата
  {
    accessorKey: "date",
    ruName: "\u0414\u0430\u0442\u0430",
    header: ({ column }) => {
      return h(
        _sfc_main$g,
        {
          variant: "ghost",
          onClick: () => column.toggleSorting(column.getIsSorted() === "asc"),
          class: "text-center h-full w-full p-1"
        },
        () => ["\u0414\u0430\u0442\u0430", h(ArrowUpDown, { class: "ml-2 h-4 w-4" })]
      );
    },
    cell: ({ row }) => h("div", { class: "text-center text-xs" }, row.getValue("date"))
  },
  // Заявки
  {
    accessorKey: "calls",
    ruName: "\u0417\u0430\u044F\u0432\u043A\u0438",
    header: ({ column }) => {
      return h(
        _sfc_main$g,
        {
          variant: "ghost",
          onClick: () => column.toggleSorting(column.getIsSorted() === "asc"),
          class: "text-center h-full w-full p-1"
        },
        () => ["\u0417\u0430\u044F\u0432\u043A\u0438", h(ArrowUpDown, { class: "ml-2 h-4 w-4" })]
      );
    },
    cell: ({ row }) => h("div", { class: "text-center" }, row.getValue("calls"))
  },
  // Общая сумма продаж
  {
    accessorKey: "totalSales",
    ruName: "\u041E\u0431\u0449\u0430\u044F \u0441\u0443\u043C\u043C\u0430 \u043F\u0440\u043E\u0434\u0430\u0436",
    header: ({ column }) => {
      return h(
        _sfc_main$g,
        {
          variant: "ghost",
          onClick: () => column.toggleSorting(column.getIsSorted() === "asc"),
          class: "text-center h-full w-full p-1 text-wrap"
        },
        () => [
          h("span", { class: "text-wrap" }, "\u041E\u0431\u0449\u0430\u044F \u0441\u0443\u043C\u043C\u0430 \u043F\u0440\u043E\u0434\u0430\u0436"),
          h(ArrowUpDown, { class: " h-[34px] w-[34px]" })
        ]
      );
    },
    cell: ({ row }) => h(
      "div",
      { class: "text-center" },
      useMyFormatPrice(row.getValue("totalSales")) + "\u20BD"
    )
  },
  // Сумма сделок
  {
    accessorKey: "dealSales",
    ruName: "\u0421\u0443\u043C\u043C\u0430 \u0441\u0434\u0435\u043B\u043E\u043A",
    header: ({ column }) => {
      return h(
        _sfc_main$g,
        {
          variant: "ghost",
          onClick: () => column.toggleSorting(column.getIsSorted() === "asc"),
          class: "text-center h-full w-full p-1"
        },
        () => [
          h("span", { class: "text-wrap" }, "\u0421\u0443\u043C\u043C\u0430 \u0441\u0434\u0435\u043B\u043E\u043A"),
          h(ArrowUpDown, { class: " h-[34px] w-[34px]" })
        ]
      );
    },
    cell: ({ row }) => h(
      "div",
      { class: "text-center" },
      useMyFormatPrice(row.getValue("dealSales")) + "\u20BD"
    )
  },
  // Количество сделок
  {
    accessorKey: "dealsAmount",
    ruName: "\u041A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u0441\u0434\u0435\u043B\u043E\u043A",
    header: ({ column }) => {
      return h(
        _sfc_main$g,
        {
          variant: "ghost",
          onClick: () => column.toggleSorting(column.getIsSorted() === "asc"),
          class: "text-center h-full w-full p-1 text-wrap"
        },
        () => [
          h("span", { class: "text-wrap" }, "\u041A\u043E\u043B-\u0432\u043E \u0441\u0434\u0435\u043B\u043E\u043A"),
          h(ArrowUpDown, { class: " h-[34px] w-[34px]" })
        ]
      );
    },
    cell: ({ row }) => h("div", { class: "text-center" }, row.getValue("dealsAmount"))
  },
  // Сумма доп. продаж
  {
    accessorKey: "dopSales",
    ruName: "\u0421\u0443\u043C\u043C\u0430 \u0434\u043E\u043F. \u043F\u0440\u043E\u0434\u0430\u0436",
    header: ({ column }) => {
      return h(
        _sfc_main$g,
        {
          variant: "ghost",
          onClick: () => column.toggleSorting(column.getIsSorted() === "asc"),
          class: "text-center h-full w-full p-1 text-wrap"
        },
        () => [
          h("span", { class: "text-wrap" }, "\u0421\u0443\u043C\u043C\u0430 \u0434\u043E\u043F. \u043F\u0440\u043E\u0434\u0430\u0436"),
          h(ArrowUpDown, { class: " h-[34px] w-[34px]" })
        ]
      );
    },
    cell: ({ row }) => h(
      "div",
      { class: "text-center" },
      useMyFormatPrice(row.getValue("dopSales")) + "\u20BD"
    )
  },
  // Средний чек
  {
    accessorKey: "averageBill",
    ruName: "\u0421\u0440\u0435\u0434\u043D\u0438\u0439 \u0447\u0435\u043A",
    header: ({ column }) => {
      return h(
        _sfc_main$g,
        {
          variant: "ghost",
          onClick: () => column.toggleSorting(column.getIsSorted() === "asc"),
          class: "text-center h-full w-full p-1 text-wrap"
        },
        () => [
          h("span", { class: "text-wrap" }, "\u0421\u0440\u0435\u0434\u043D\u0438\u0439 \u0447\u0435\u043A"),
          h(ArrowUpDown, { class: " h-[34px] w-[34px]" })
        ]
      );
    },
    cell: ({ row }) => h(
      "div",
      { class: "text-center" },
      useMyFormatPrice(row.getValue("averageBill")) + "\u20BD"
    )
  },
  // Макеты
  {
    accessorKey: "makets",
    ruName: "\u041C\u0430\u043A\u0435\u0442\u044B",
    header: ({ column }) => {
      return h(
        _sfc_main$g,
        {
          variant: "ghost",
          onClick: () => column.toggleSorting(column.getIsSorted() === "asc"),
          class: "text-center h-full w-full p-1"
        },
        () => ["\u041C\u0430\u043A\u0435\u0442\u044B", h(ArrowUpDown, { class: "ml-2 h-4 w-4" })]
      );
    },
    cell: ({ row }) => h("div", { class: "text-center" }, row.getValue("makets"))
  },
  // Макеты день в день
  {
    accessorKey: "maketsDayToDay",
    ruName: "\u041C\u0430\u043A\u0435\u0442\u044B \u0434\u0435\u043D\u044C \u0432 \u0434\u0435\u043D\u044C",
    header: ({ column }) => {
      return h(
        _sfc_main$g,
        {
          variant: "ghost",
          onClick: () => column.toggleSorting(column.getIsSorted() === "asc"),
          class: "text-center h-full w-full p-1 text-wrap"
        },
        () => [
          h("span", { class: "text-wrap" }, "\u041C\u0430\u043A\u0435\u0442\u044B \u0434\u0435\u043D\u044C \u0432 \u0434\u0435\u043D\u044C"),
          h(ArrowUpDown, { class: " h-[34px] w-[34px]" })
        ]
      );
    },
    cell: ({ row }) => h("div", { class: "text-center" }, row.getValue("maketsDayToDay"))
  },
  // конверсия Макеты день в день
  {
    accessorKey: "conversionMaketDayToDay",
    ruName: "% \u043C\u0430\u043A\u0435\u0442 \u0434\u0435\u043D\u044C \u0432 \u0434\u0435\u043D\u044C",
    header: ({ column }) => {
      return h(
        _sfc_main$g,
        {
          variant: "ghost",
          onClick: () => column.toggleSorting(column.getIsSorted() === "asc"),
          class: "text-center h-full w-full p-1 text-wrap"
        },
        () => [
          h("span", { class: "text-wrap" }, "% \u043C\u0430\u043A\u0435\u0442 \u0434\u0435\u043D\u044C \u0432 \u0434\u0435\u043D\u044C"),
          h(ArrowUpDown, { class: " h-[34px] w-[34px]" })
        ]
      );
    },
    cell: ({ row }) => h(
      "div",
      { class: "text-center" },
      row.getValue("conversionMaketDayToDay") + "%"
    )
  },
  // Переходы в мессенджер
  {
    accessorKey: "redirectToMSG",
    ruName: "\u041F\u0435\u0440\u0435\u0445\u043E\u0434\u044B \u0432 \u043C\u0435\u0441\u0441\u0435\u043D\u0434\u0436\u0435\u0440",
    header: ({ column }) => {
      return h(
        _sfc_main$g,
        {
          variant: "ghost",
          onClick: () => column.toggleSorting(column.getIsSorted() === "asc"),
          class: "text-center h-full w-full p-1 text-wrap"
        },
        () => [
          h("span", { class: "text-wrap" }, "\u041F\u0435\u0440\u0435\u0445\u043E\u0434\u044B \u0432 \u043C\u0435\u0441\u0441\u0435\u043D\u0434\u0436\u0435\u0440"),
          h(ArrowUpDown, { class: " h-[34px] w-[34px]" })
        ]
      );
    },
    cell: ({ row }) => h("div", { class: "text-center" }, row.getValue("redirectToMSG"))
  },
  // Конверсия
  {
    accessorKey: "conversion",
    ruName: "\u041A\u043E\u043D\u0432\u0435\u0440\u0441\u0438\u044F",
    header: ({ column }) => {
      return h(
        _sfc_main$g,
        {
          variant: "ghost",
          onClick: () => column.toggleSorting(column.getIsSorted() === "asc"),
          class: "text-center h-full w-full p-1"
        },
        () => ["\u041A\u043E\u043D\u0432\u0435\u0440\u0441\u0438\u044F", h(ArrowUpDown, { class: "ml-2 h-4 w-4" })]
      );
    },
    cell: ({ row }) => h("div", { class: "text-center" }, row.getValue("conversion") + "%")
  },
  // Конверсия в макет
  {
    accessorKey: "conversionMaket",
    ruName: "\u041A\u043E\u043D\u0432\u0435\u0440\u0441\u0438\u044F \u0432 \u043C\u0430\u043A\u0435\u0442",
    header: ({ column }) => {
      return h(
        _sfc_main$g,
        {
          variant: "ghost",
          onClick: () => column.toggleSorting(column.getIsSorted() === "asc"),
          class: "text-center h-full w-full p-1 text-wrap"
        },
        () => [
          h("span", { class: "text-wrap" }, "\u041A\u043E\u043D\u0432\u0435\u0440\u0441\u0438\u044F \u0432 \u043C\u0430\u043A\u0435\u0442"),
          h(ArrowUpDown, { class: " h-[34px] w-[34px]" })
        ]
      );
    },
    cell: ({ row }) => h(
      "div",
      { class: "text-center" },
      row.getValue("conversionMaket") + "%"
    )
  },
  {
    accessorKey: "conversionToSale",
    ruName: "\u041A\u043E\u043D\u0432\u0435\u0440\u0441\u0438\u044F \u0438\u0437 \u043C\u0430\u043A\u0435\u0442\u0430 \u0432 \u043F\u0440\u043E\u0434\u0430\u0436\u0443",
    header: ({ column }) => {
      return h(
        _sfc_main$g,
        {
          variant: "ghost",
          onClick: () => column.toggleSorting(column.getIsSorted() === "asc"),
          class: "text-center h-full w-full p-1 text-wrap"
        },
        () => [
          h("span", { class: "text-wrap" }, "\u041A\u043E\u043D\u0432\u0435\u0440\u0441\u0438\u044F \u0438\u0437 \u043C\u0430\u043A\u0435\u0442\u0430 \u0432 \u043F\u0440\u043E\u0434\u0430\u0436\u0443"),
          h(ArrowUpDown, { class: " h-[34px] w-[34px]" })
        ]
      );
    },
    cell: ({ row }) => h(
      "div",
      { class: "text-center" },
      row.getValue("conversionToSale") + "%"
    )
  },
  // Заказы день в день
  {
    accessorKey: "dealsDayToDayCount",
    ruName: "\u0417\u0430\u043A\u0430\u0437\u044B \u0434\u0435\u043D\u044C \u0432 \u0434\u0435\u043D\u044C",
    header: ({ column }) => {
      return h(
        _sfc_main$g,
        {
          variant: "ghost",
          onClick: () => column.toggleSorting(column.getIsSorted() === "asc"),
          class: "text-center h-full w-full p-1 text-wrap"
        },
        () => [
          h("span", { class: "text-wrap" }, "\u0417\u0430\u043A\u0430\u0437\u044B \u0434\u0435\u043D\u044C \u0432 \u0434\u0435\u043D\u044C"),
          h(ArrowUpDown, { class: " h-[34px] w-[34px]" })
        ]
      );
    },
    cell: ({ row }) => h("div", { class: "text-center" }, row.getValue("dealsDayToDayCount"))
  },
  // Конверсия заказов день в день
  {
    accessorKey: "conversionDealsDayToDay",
    ruName: "\u041A\u043E\u043D\u0432\u0435\u0440\u0441\u0438\u044F \u0437\u0430\u043A\u0430\u0437\u043E\u0432 \u0434\u0435\u043D\u044C \u0432 \u0434\u0435\u043D\u044C",
    header: ({ column }) => {
      return h(
        _sfc_main$g,
        {
          variant: "ghost",
          onClick: () => column.toggleSorting(column.getIsSorted() === "asc"),
          class: "text-center h-full w-full p-1 text-wrap"
        },
        () => [
          h("span", { class: "text-wrap" }, "\u041A\u043E\u043D\u0432\u0435\u0440\u0441\u0438\u044F \u0437\u0430\u043A\u0430\u0437\u043E\u0432 \u0434\u0435\u043D\u044C \u0432 \u0434\u0435\u043D\u044C"),
          h(ArrowUpDown, { class: " h-[34px] w-[34px]" })
        ]
      );
    },
    cell: ({ row }) => h(
      "div",
      { class: "text-center" },
      row.getValue("conversionDealsDayToDay") + "%"
    )
  },
  // Стоимость заявки
  {
    accessorKey: "callCost",
    ruName: "\u0421\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C \u0437\u0430\u044F\u0432\u043A\u0438",
    header: ({ column }) => {
      return h(
        _sfc_main$g,
        {
          variant: "ghost",
          onClick: () => column.toggleSorting(column.getIsSorted() === "asc"),
          class: "text-center h-full w-full p-1 text-wrap"
        },
        () => [
          h("span", { class: "text-wrap" }, "\u0421\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C \u0437\u0430\u044F\u0432\u043A\u0438"),
          h(ArrowUpDown, { class: " h-[34px] w-[34px]" })
        ]
      );
    },
    cell: ({ row }) => h(
      "div",
      { class: "text-center" },
      useMyFormatPrice(row.getValue("callCost")) + "\u20BD"
    )
  },
  {
    accessorKey: "drr",
    ruName: "\u0414\u0420\u0420",
    header: ({ column }) => {
      return h(
        _sfc_main$g,
        {
          variant: "ghost",
          onClick: () => column.toggleSorting(column.getIsSorted() === "asc"),
          class: "text-center h-full w-full p-1"
        },
        () => ["\u0414\u0420\u0420", h(ArrowUpDown, { class: "ml-2 h-4 w-4" })]
      );
    },
    cell: ({ row }) => h("div", { class: "text-center" }, row.getValue("drr") + "%")
  },
  {
    id: "actions",
    header: () => h("div", { class: "text-center" }, "\u0414\u0435\u0439\u0441\u0442\u0432\u0438\u044F"),
    enableHiding: false,
    cell: ({ row, table }) => {
      const item = row.original;
      return h(
        _sfc_main$g,
        {
          class: "h-5 px-1",
          item,
          onClick: () => {
            var _a;
            return (_a = table.options.meta) == null ? void 0 : _a.deleteItem(item);
          }
        },
        () => "\u0423\u0434\u0430\u043B\u0438\u0442\u044C"
        // Используем функцию вместо статической строки
      );
    }
  }
];
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "RopsReports",
  __ssrInlineRender: true,
  props: {
    period: {}
  },
  setup(__props) {
    const { $useApi } = useNuxtApp();
    function removeDuplicatesByValue(arr) {
      return Array.from(
        arr.reduce(
          (map, item) => map.set(item.value, item),
          /* @__PURE__ */ new Map()
        )
      ).map(([, item]) => item);
    }
    const props = __props;
    const range = ref({
      start: (/* @__PURE__ */ new Date()).toISOString().slice(0, 7) + "-01",
      end: (/* @__PURE__ */ new Date()).toISOString().slice(0, 10)
    });
    const period = ref(props.period);
    const workSpaces = ref([]);
    const curWorkspace = ref("\u041D\u0435 \u0432\u044B\u0431\u0440\u0430\u043D");
    const wFilters = ref([]);
    const totalsInfo = ref([
      {
        title: "\u0421\u0443\u043C\u043C\u0430 \u043F\u0440\u043E\u0434\u0430\u0436",
        value: "0"
      },
      {
        title: "\u0421\u0440\u0435\u0434\u043D\u0438\u0439 \u0447\u0435\u043A",
        value: "0"
      },
      {
        title: "\u041A\u043E\u043D\u0432\u0435\u0440\u0441\u0438\u044F",
        value: "0"
      },
      {
        title: "\u0421\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C \u0437\u0430\u044F\u0432\u043A\u0438",
        value: "0"
      }
    ]);
    const newReportRopBlank = ref({
      date: (/* @__PURE__ */ new Date()).toISOString().slice(0, 10),
      workSpaceId: 0,
      calls: 0,
      makets: 0,
      maketsDayToDay: 0,
      redirectToMSG: 0
    });
    function getRandomDate() {
      const day = Math.floor(Math.random() * 31) + 1;
      return `2025-03-${day.toString().padStart(2, "0")}`;
    }
    const defWorkSpaces = [
      "\u041E\u0444\u0438\u0441 \u0410",
      "\u041E\u0444\u0438\u0441 \u0411",
      "\u041E\u0444\u0438\u0441 \u0412",
      "\u0421\u043A\u043B\u0430\u0434 1",
      "\u0421\u043A\u043B\u0430\u0434 2",
      "\u0426\u0435\u043D\u0442\u0440",
      "\u042E\u0433",
      "\u0421\u0435\u0432\u0435\u0440",
      "\u0417\u0430\u043F\u0430\u0434",
      "\u0412\u043E\u0441\u0442\u043E\u043A"
    ];
    const workSpacesReports = ref(
      Array.from({ length: 10 }, (_, i) => ({
        id: i + 1,
        date: getRandomDate(),
        workSpaceId: Math.floor(Math.random() * 10) + 1,
        // 1-10
        calls: Math.floor(Math.random() * 100),
        // 0-99
        dealSales: Math.floor(Math.random() * 5e5),
        // 0-499999
        dealsAmount: Math.floor(Math.random() * 100),
        // 0-99
        dopSales: Math.floor(Math.random() * 2e5),
        // 0-199999
        totalSales: Math.floor(Math.random() * 1e6),
        // 0-999999
        averageBill: Math.floor(Math.random() * 5e4),
        // 0-49999
        makets: Math.floor(Math.random() * 50),
        // 0-49
        conversion: Number((Math.random() * 100).toFixed(2)),
        // 0-100%
        conversionMaket: Number((Math.random() * 100).toFixed(2)),
        // 0-100%
        conversionToSale: Number((Math.random() * 100).toFixed(2)),
        // 0-100%
        dealsDayToDayCount: Math.floor(Math.random() * 30),
        // 0-29
        conversionDealsDayToDay: Number((Math.random() * 100).toFixed(2)),
        // 0-100%
        workSpace: defWorkSpaces[i],
        callCost: Math.floor(Math.random() * 1e4),
        // 0-9999
        drr: Number((Math.random() * 50).toFixed(2)),
        // 0-50
        dateExpensesPrice: Math.floor(Math.random() * 1e5),
        // 0-99999
        redirectToMSG: Math.floor(Math.random() * 100),
        // 0-99
        maketsDayToDay: Math.floor(Math.random() * 50)
        // 0-49
      }))
    );
    const dayPredata = ref({
      workSpace: "\u041D\u0435 \u0432\u044B\u0431\u0440\u0430\u043D",
      date: (/* @__PURE__ */ new Date()).toISOString().slice(0, 10),
      workSpaceId: 0,
      dealSales: 0,
      //сумма сделок
      dealsAmount: 0,
      //количество сделок
      dopSales: 0,
      //сумма доп продаж
      totalSales: 0,
      //общая сумма продаж
      averageBill: 0,
      //средний чек
      dealsDayToDayCount: 0
      // заказов день в день
    });
    const getRopPredata = async (id) => {
      const { data } = await $useApi.get(
        `/reports/workspace/${id}/data`,
        {
          params: { date: newReportRopBlank.value.date }
        }
      );
      dayPredata.value = data;
      console.log(data);
    };
    const disabled = ref(true);
    const createRopReport = async () => {
      const { data } = await $useApi.post("reports/rop", newReportRopBlank.value);
      newReportRopBlank.value.calls = 0;
      newReportRopBlank.value.makets = 0;
      newReportRopBlank.value.maketsDayToDay = 0;
      newReportRopBlank.value.redirectToMSG = 0;
      await getRopsReports();
    };
    const getRopsReports = async () => {
      const { data } = await $useApi.get("reports/rops", {
        params: { period: period.value }
      });
      workSpacesReports.value = data;
      wFilters.value = data.map((w) => {
        return { value: w.workSpace, label: w.workSpace };
      });
    };
    const getRangeData = async (range2) => {
      const { data } = await $useApi.get("reports/rops/range", {
        params: range2
      });
      workSpacesReports.value = data;
      wFilters.value = data.map((w) => {
        return { value: w.workSpace, label: w.workSpace };
      });
    };
    const deleteItem = async (id) => {
      console.log(id);
      await $useApi.delete("reports/rop/" + id);
      await getRopsReports();
      return;
    };
    const calcTotals = (ids) => {
      const rep = workSpacesReports.value.filter((rep2) => ids.includes(rep2.id));
      const totalSales = rep.reduce((a, b) => {
        var _a;
        return a + ((_a = b.totalSales) != null ? _a : 0);
      }, 0);
      const dealsAmount = rep.reduce((a, b) => {
        var _a;
        return a + ((_a = b.dealsAmount) != null ? _a : 0);
      }, 0);
      const calls = rep.reduce((a, b) => a + b.calls, 0);
      const averageBill = dealsAmount ? +(totalSales / dealsAmount).toFixed() : 0;
      const conversion = calls ? dealsAmount / calls * 100 : 0;
      const totalDateExpensesPrice = rep.reduce(
        (a, b) => {
          var _a;
          return a + ((_a = b.dateExpensesPrice) != null ? _a : 0);
        },
        0
      );
      const callCost = calls ? totalDateExpensesPrice / calls : 0;
      const totalCalls = rep.reduce((a, b) => a + b.calls, 0);
      const totalDDR = totalSales ? totalDateExpensesPrice / totalSales * 100 : 0;
      const totalMakets = rep.reduce((a, b) => a + b.makets, 0);
      const totalMaketsConversion = totalMakets ? totalMakets / totalCalls * 100 : 0;
      const totalMaketsToSale = totalMakets ? dealsAmount / totalMakets * 100 : 0;
      const totalCost = dealsAmount ? +(totalDateExpensesPrice / dealsAmount).toFixed() : 0;
      function getDaysInMonth(year, month) {
        return new Date(year, month, 0).getDate();
      }
      const daysInMonth = getDaysInMonth(
        +period.value.split("-")[0],
        +period.value.split("-")[1]
      );
      const isThismounth = period.value.split("-")[1] === (/* @__PURE__ */ new Date()).toISOString().slice(5, 7);
      const today = isThismounth ? (/* @__PURE__ */ new Date()).toISOString().slice(8, 10) : daysInMonth;
      const temp = +(totalSales / +today * daysInMonth).toFixed();
      const totalRedirectToMSG = rep.reduce(
        (a, b) => {
          var _a;
          return a + ((_a = b.redirectToMSG) != null ? _a : 0);
        },
        0
      );
      const totalCallsAvito = rep.filter((r) => r.workSpace === "B2B").reduce((a, b) => a + b.calls, 0);
      const totalConversionToMSG = totalCallsAvito ? totalRedirectToMSG / totalCallsAvito * 100 : 0;
      const totalCallsVk = rep.filter((r) => r.workSpace === "\u0412\u041A").reduce((a, b) => a + b.calls, 0);
      const totalMaketsDay = rep.filter((r) => r.workSpace === "\u0412\u041A").reduce((a, b) => {
        var _a;
        return a + ((_a = b.maketsDayToDay) != null ? _a : 0);
      }, 0);
      const conversionMaketDayToDay = totalCallsVk ? totalMaketsDay / totalCallsVk * 100 : 0;
      totalsInfo.value = [
        {
          title: `\u0421\u0443\u043C\u043C\u0430 \u043F\u0440\u043E\u0434\u0430\u0436 (\u0441\u0434\u0435\u043B\u043E\u043A: ${dealsAmount})`,
          value: useMyFormatPrice(totalSales) + "\u20BD"
        },
        {
          title: "\u0421\u0440\u0435\u0434\u043D\u0438\u0439 \u0447\u0435\u043A",
          value: useMyFormatPrice(averageBill) + "\u20BD"
        },
        {
          title: `\u0417\u0430\u044F\u0432\u043A\u0438`,
          value: totalCalls.toFixed()
        },
        {
          title: `\u0421\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C \u0437\u0430\u044F\u0432\u043A\u0438`,
          value: callCost.toFixed(2) + "\u20BD"
        },
        {
          title: "\u0414\u0420\u0420",
          value: totalDDR.toFixed(2) + "%"
        },
        {
          title: `\u041A\u043E\u043D\u0432\u0435\u0440\u0441\u0438\u044F`,
          value: conversion.toFixed(2) + "%"
        },
        {
          title: "% \u0432 \u043C\u0430\u043A\u0435\u0442",
          //???
          value: totalMaketsConversion.toFixed(2) + "%"
        },
        {
          title: "% \u0438\u0437 \u043C\u0430\u043A\u0435\u0442\u0430 \u0432 \u043F\u0440\u043E\u0434\u0430\u0436\u0443",
          value: totalMaketsToSale.toFixed(2) + "%"
        },
        {
          title: "\u0422\u0435\u043C\u043F",
          value: useMyFormatPrice(temp) + "\u20BD"
        },
        {
          title: "\u0421\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C \u043F\u0440\u043E\u0434\u0430\u0436\u0438",
          value: useMyFormatPrice(totalCost) + "\u20BD"
        },
        {
          title: "% \u043F\u0435\u0440\u0435\u0445\u043E\u0434 \u0432 \u043C\u0435\u0441\u0441\u0435\u043D\u0434\u0436\u0435\u0440(\u0410\u0432\u0438\u0442\u043E)",
          value: totalConversionToMSG.toFixed(2) + "%"
        },
        {
          title: "% \u0434\u0435\u043D\u044C \u0432 \u0434\u0435\u043D\u044C(\u0412\u041A)",
          value: conversionMaketDayToDay.toFixed(2) + "%"
        }
      ];
    };
    watch(
      newReportRopBlank,
      async () => {
        if (/^\d{4}-\d{2}-\d{2}$/.test(newReportRopBlank.value.date) && newReportRopBlank.value.workSpaceId !== 0) {
          await getRopPredata(newReportRopBlank.value.workSpaceId);
        }
        const { workSpaceId, makets, maketsDayToDay } = newReportRopBlank.value;
        if (workSpaceId && makets && maketsDayToDay) {
          disabled.value = false;
        } else {
          disabled.value = true;
        }
      },
      { deep: true }
    );
    watch(period, async () => {
      await getRopsReports();
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UiCard = _sfc_main$3$1;
      const _component_UiCardHeader = _sfc_main$2$2;
      const _component_UiCardTitle = _sfc_main$1$2;
      const _component_UiCardDescription = _sfc_main$c;
      const _component_UiCardContent = _sfc_main$d;
      const _component_UiLabel = _sfc_main$e;
      const _component_UiInput = _sfc_main$9;
      const _component_MyComboboxModels = _sfc_main$f;
      const _component_UiButton = _sfc_main$g;
      const _component_UiCardFooter = _sfc_main$h;
      const _component_MyDateRangePicker = _sfc_main$i;
      const _component_MyReportsRopsDataTable = _sfc_main$2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex gap-2 w-full" }, _attrs))}><div class="min-w-[250px]">`);
      _push(ssrRenderComponent(_component_UiCard, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UiCardHeader, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UiCardTitle, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` \u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u043E\u0442\u0447\u0435\u0442 `);
                      } else {
                        return [
                          createTextVNode(" \u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u043E\u0442\u0447\u0435\u0442 ")
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
                        createTextVNode(" \u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u043E\u0442\u0447\u0435\u0442 ")
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
                  _push3(`<div class="flex flex-col gap-5"${_scopeId2}><div class="relative"${_scopeId2}>`);
                  if (unref(newReportRopBlank).date) {
                    _push3(ssrRenderComponent(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`\u0414\u0430\u0442\u0430 \u0441\u043C\u0435\u043D\u044B`);
                        } else {
                          return [
                            createTextVNode("\u0414\u0430\u0442\u0430 \u0441\u043C\u0435\u043D\u044B")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(ssrRenderComponent(_component_UiInput, {
                    modelValue: unref(newReportRopBlank).date,
                    "onUpdate:modelValue": ($event) => unref(newReportRopBlank).date = $event,
                    type: "date",
                    placeholder: "\u0414\u0430\u0442\u0430 \u0441\u043C\u0435\u043D\u044B",
                    class: unref(newReportRopBlank).date ? "" : "outline-1 outline-rose-300"
                  }, null, _parent3, _scopeId2));
                  _push3(`</div><div class="relative w-full"${_scopeId2}>`);
                  if (unref(newReportRopBlank).workSpaceId !== 0) {
                    _push3(ssrRenderComponent(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`\u041E\u0442\u0434\u0435\u043B`);
                        } else {
                          return [
                            createTextVNode("\u041E\u0442\u0434\u0435\u043B")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(`<div class="flex gap-2 w-full"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_MyComboboxModels, {
                    items: unref(workSpaces).map((w) => ({ value: w.id, label: w.title })),
                    class: "w-full",
                    label: "\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u043E\u0442\u0434\u0435\u043B",
                    onSelectedItem: (value) => {
                      var _a;
                      unref(newReportRopBlank).workSpaceId = value;
                      curWorkspace.value = ((_a = unref(workSpaces).find((w) => w.id === value)) == null ? void 0 : _a.title) || "";
                    }
                  }, null, _parent3, _scopeId2));
                  _push3(`</div></div><div class="relative"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`\u041A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u0437\u0430\u044F\u0432\u043E\u043A`);
                      } else {
                        return [
                          createTextVNode("\u041A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u0437\u0430\u044F\u0432\u043E\u043A")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`<div class="flex gap-2"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_UiInput, {
                    modelValue: unref(newReportRopBlank).calls,
                    "onUpdate:modelValue": ($event) => unref(newReportRopBlank).calls = $event,
                    placeholder: "\u041A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u0437\u0430\u044F\u0432\u043E\u043A",
                    type: "number"
                  }, null, _parent3, _scopeId2));
                  _push3(`</div></div><div class="relative"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`\u041C\u0430\u043A\u0435\u0442\u043E\u0432 \u0432\u0441\u0435\u0433\u043E`);
                      } else {
                        return [
                          createTextVNode("\u041C\u0430\u043A\u0435\u0442\u043E\u0432 \u0432\u0441\u0435\u0433\u043E")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`<div class="flex gap-2"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_UiInput, {
                    modelValue: unref(newReportRopBlank).makets,
                    "onUpdate:modelValue": ($event) => unref(newReportRopBlank).makets = $event,
                    placeholder: "\u041C\u0430\u043A\u0435\u0442\u043E\u0432 \u0432\u0441\u0435\u0433\u043E",
                    type: "number",
                    class: unref(newReportRopBlank).makets ? "" : "outline-1 outline-rose-300"
                  }, null, _parent3, _scopeId2));
                  _push3(`</div></div><div class="relative"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`\u041C\u0430\u043A\u0435\u0442\u043E\u0432 \u0434\u0435\u043D\u044C \u0432 \u0434\u0435\u043D\u044C`);
                      } else {
                        return [
                          createTextVNode("\u041C\u0430\u043A\u0435\u0442\u043E\u0432 \u0434\u0435\u043D\u044C \u0432 \u0434\u0435\u043D\u044C")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`<div class="flex gap-2"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_UiInput, {
                    modelValue: unref(newReportRopBlank).maketsDayToDay,
                    "onUpdate:modelValue": ($event) => unref(newReportRopBlank).maketsDayToDay = $event,
                    placeholder: "\u041C\u0430\u043A\u0435\u0442\u043E\u0432 \u0434\u0435\u043D\u044C \u0432 \u0434\u0435\u043D\u044C",
                    type: "number",
                    class: unref(newReportRopBlank).makets ? "" : "outline-1 outline-rose-300"
                  }, null, _parent3, _scopeId2));
                  _push3(`</div></div>`);
                  if (unref(curWorkspace) === "B2B") {
                    _push3(`<div class="relative"${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`\u041F\u0435\u0440\u0435\u0445\u043E\u0434 \u0432 \u043C\u0435\u0441\u0441\u0435\u043D\u0434\u0436\u0435\u0440`);
                        } else {
                          return [
                            createTextVNode("\u041F\u0435\u0440\u0435\u0445\u043E\u0434 \u0432 \u043C\u0435\u0441\u0441\u0435\u043D\u0434\u0436\u0435\u0440")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(`<div class="flex gap-2"${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_UiInput, {
                      modelValue: unref(newReportRopBlank).redirectToMSG,
                      "onUpdate:modelValue": ($event) => unref(newReportRopBlank).redirectToMSG = $event,
                      placeholder: "\u041F\u0435\u0440\u0435\u0445\u043E\u0434 \u0432 \u043C\u0435\u0441\u0441\u0435\u043D\u0434\u0436\u0435\u0440",
                      type: "number",
                      class: unref(newReportRopBlank).makets ? "" : "outline outline-1 outline-rose-300"
                    }, null, _parent3, _scopeId2));
                    _push3(`</div></div>`);
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(ssrRenderComponent(_component_UiButton, {
                    disabled: unref(disabled),
                    onClick: createRopReport
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
                  _push3(`</div><div class="flex flex-col gap-1 mt-4 text-slate-500"${_scopeId2}><span${_scopeId2}> \u041E\u0442\u0434\u0435\u043B: ${ssrInterpolate(unref(dayPredata).workSpace)}</span><span${_scopeId2}> \u0421\u0443\u043C\u043C\u0430 \u043F\u0440\u043E\u0434\u0430\u0436: ${ssrInterpolate(unref(dayPredata).dealSales)}\u0440.</span><span${_scopeId2}> \u0421\u0443\u043C\u043C\u0430 \u0434\u043E\u043F.\u043F\u0440\u043E\u0434\u0430\u0436: ${ssrInterpolate(unref(dayPredata).dopSales)}\u0440. </span><span${_scopeId2}> \u0421\u0443\u043C\u043C\u0430 \u043E\u0431\u0449\u0430\u044F: ${ssrInterpolate(unref(dayPredata).totalSales)}\u0440. </span><span${_scopeId2}> \u041A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u0441\u0434\u0435\u043B\u043E\u043A: ${ssrInterpolate(unref(dayPredata).dealsAmount)}</span><span${_scopeId2}> \u0421\u0440\u0435\u0434\u043D\u0438\u0439 \u0447\u0435\u043A: ${ssrInterpolate(unref(dayPredata).averageBill)}\u0440.</span><span${_scopeId2}> \u0421\u0434\u0435\u043B\u043E\u043A \u0434\u0435\u043D\u044C \u0432 \u0434\u0435\u043D\u044C: ${ssrInterpolate(unref(dayPredata).dealsDayToDayCount)}</span></div>`);
                } else {
                  return [
                    createVNode("div", { class: "flex flex-col gap-5" }, [
                      createVNode("div", { class: "relative" }, [
                        unref(newReportRopBlank).date ? (openBlock(), createBlock(_component_UiLabel, {
                          key: 0,
                          class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap"
                        }, {
                          default: withCtx(() => [
                            createTextVNode("\u0414\u0430\u0442\u0430 \u0441\u043C\u0435\u043D\u044B")
                          ]),
                          _: 1
                        })) : createCommentVNode("", true),
                        createVNode(_component_UiInput, {
                          modelValue: unref(newReportRopBlank).date,
                          "onUpdate:modelValue": ($event) => unref(newReportRopBlank).date = $event,
                          type: "date",
                          placeholder: "\u0414\u0430\u0442\u0430 \u0441\u043C\u0435\u043D\u044B",
                          class: unref(newReportRopBlank).date ? "" : "outline-1 outline-rose-300"
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "class"])
                      ]),
                      createVNode("div", { class: "relative w-full" }, [
                        unref(newReportRopBlank).workSpaceId !== 0 ? (openBlock(), createBlock(_component_UiLabel, {
                          key: 0,
                          class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap"
                        }, {
                          default: withCtx(() => [
                            createTextVNode("\u041E\u0442\u0434\u0435\u043B")
                          ]),
                          _: 1
                        })) : createCommentVNode("", true),
                        createVNode("div", { class: "flex gap-2 w-full" }, [
                          createVNode(_component_MyComboboxModels, {
                            items: unref(workSpaces).map((w) => ({ value: w.id, label: w.title })),
                            class: "w-full",
                            label: "\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u043E\u0442\u0434\u0435\u043B",
                            onSelectedItem: (value) => {
                              var _a;
                              unref(newReportRopBlank).workSpaceId = value;
                              curWorkspace.value = ((_a = unref(workSpaces).find((w) => w.id === value)) == null ? void 0 : _a.title) || "";
                            }
                          }, null, 8, ["items", "onSelectedItem"])
                        ])
                      ]),
                      createVNode("div", { class: "relative" }, [
                        createVNode(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap" }, {
                          default: withCtx(() => [
                            createTextVNode("\u041A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u0437\u0430\u044F\u0432\u043E\u043A")
                          ]),
                          _: 1
                        }),
                        createVNode("div", { class: "flex gap-2" }, [
                          createVNode(_component_UiInput, {
                            modelValue: unref(newReportRopBlank).calls,
                            "onUpdate:modelValue": ($event) => unref(newReportRopBlank).calls = $event,
                            placeholder: "\u041A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u0437\u0430\u044F\u0432\u043E\u043A",
                            type: "number"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ])
                      ]),
                      createVNode("div", { class: "relative" }, [
                        createVNode(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap" }, {
                          default: withCtx(() => [
                            createTextVNode("\u041C\u0430\u043A\u0435\u0442\u043E\u0432 \u0432\u0441\u0435\u0433\u043E")
                          ]),
                          _: 1
                        }),
                        createVNode("div", { class: "flex gap-2" }, [
                          createVNode(_component_UiInput, {
                            modelValue: unref(newReportRopBlank).makets,
                            "onUpdate:modelValue": ($event) => unref(newReportRopBlank).makets = $event,
                            placeholder: "\u041C\u0430\u043A\u0435\u0442\u043E\u0432 \u0432\u0441\u0435\u0433\u043E",
                            type: "number",
                            class: unref(newReportRopBlank).makets ? "" : "outline-1 outline-rose-300"
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "class"])
                        ])
                      ]),
                      createVNode("div", { class: "relative" }, [
                        createVNode(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap" }, {
                          default: withCtx(() => [
                            createTextVNode("\u041C\u0430\u043A\u0435\u0442\u043E\u0432 \u0434\u0435\u043D\u044C \u0432 \u0434\u0435\u043D\u044C")
                          ]),
                          _: 1
                        }),
                        createVNode("div", { class: "flex gap-2" }, [
                          createVNode(_component_UiInput, {
                            modelValue: unref(newReportRopBlank).maketsDayToDay,
                            "onUpdate:modelValue": ($event) => unref(newReportRopBlank).maketsDayToDay = $event,
                            placeholder: "\u041C\u0430\u043A\u0435\u0442\u043E\u0432 \u0434\u0435\u043D\u044C \u0432 \u0434\u0435\u043D\u044C",
                            type: "number",
                            class: unref(newReportRopBlank).makets ? "" : "outline-1 outline-rose-300"
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "class"])
                        ])
                      ]),
                      unref(curWorkspace) === "B2B" ? (openBlock(), createBlock("div", {
                        key: 0,
                        class: "relative"
                      }, [
                        createVNode(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap" }, {
                          default: withCtx(() => [
                            createTextVNode("\u041F\u0435\u0440\u0435\u0445\u043E\u0434 \u0432 \u043C\u0435\u0441\u0441\u0435\u043D\u0434\u0436\u0435\u0440")
                          ]),
                          _: 1
                        }),
                        createVNode("div", { class: "flex gap-2" }, [
                          createVNode(_component_UiInput, {
                            modelValue: unref(newReportRopBlank).redirectToMSG,
                            "onUpdate:modelValue": ($event) => unref(newReportRopBlank).redirectToMSG = $event,
                            placeholder: "\u041F\u0435\u0440\u0435\u0445\u043E\u0434 \u0432 \u043C\u0435\u0441\u0441\u0435\u043D\u0434\u0436\u0435\u0440",
                            type: "number",
                            class: unref(newReportRopBlank).makets ? "" : "outline outline-1 outline-rose-300"
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "class"])
                        ])
                      ])) : createCommentVNode("", true),
                      createVNode(_component_UiButton, {
                        disabled: unref(disabled),
                        onClick: createRopReport
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" \u0421\u043E\u0437\u0434\u0430\u0442\u044C ")
                        ]),
                        _: 1
                      }, 8, ["disabled"])
                    ]),
                    createVNode("div", { class: "flex flex-col gap-1 mt-4 text-slate-500" }, [
                      createVNode("span", null, " \u041E\u0442\u0434\u0435\u043B: " + toDisplayString(unref(dayPredata).workSpace), 1),
                      createVNode("span", null, " \u0421\u0443\u043C\u043C\u0430 \u043F\u0440\u043E\u0434\u0430\u0436: " + toDisplayString(unref(dayPredata).dealSales) + "\u0440.", 1),
                      createVNode("span", null, " \u0421\u0443\u043C\u043C\u0430 \u0434\u043E\u043F.\u043F\u0440\u043E\u0434\u0430\u0436: " + toDisplayString(unref(dayPredata).dopSales) + "\u0440. ", 1),
                      createVNode("span", null, " \u0421\u0443\u043C\u043C\u0430 \u043E\u0431\u0449\u0430\u044F: " + toDisplayString(unref(dayPredata).totalSales) + "\u0440. ", 1),
                      createVNode("span", null, " \u041A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u0441\u0434\u0435\u043B\u043E\u043A: " + toDisplayString(unref(dayPredata).dealsAmount), 1),
                      createVNode("span", null, " \u0421\u0440\u0435\u0434\u043D\u0438\u0439 \u0447\u0435\u043A: " + toDisplayString(unref(dayPredata).averageBill) + "\u0440.", 1),
                      createVNode("span", null, " \u0421\u0434\u0435\u043B\u043E\u043A \u0434\u0435\u043D\u044C \u0432 \u0434\u0435\u043D\u044C: " + toDisplayString(unref(dayPredata).dealsDayToDayCount), 1)
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
                      createTextVNode(" \u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u043E\u0442\u0447\u0435\u0442 ")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_UiCardDescription)
                ]),
                _: 1
              }),
              createVNode(_component_UiCardContent, null, {
                default: withCtx(() => [
                  createVNode("div", { class: "flex flex-col gap-5" }, [
                    createVNode("div", { class: "relative" }, [
                      unref(newReportRopBlank).date ? (openBlock(), createBlock(_component_UiLabel, {
                        key: 0,
                        class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap"
                      }, {
                        default: withCtx(() => [
                          createTextVNode("\u0414\u0430\u0442\u0430 \u0441\u043C\u0435\u043D\u044B")
                        ]),
                        _: 1
                      })) : createCommentVNode("", true),
                      createVNode(_component_UiInput, {
                        modelValue: unref(newReportRopBlank).date,
                        "onUpdate:modelValue": ($event) => unref(newReportRopBlank).date = $event,
                        type: "date",
                        placeholder: "\u0414\u0430\u0442\u0430 \u0441\u043C\u0435\u043D\u044B",
                        class: unref(newReportRopBlank).date ? "" : "outline-1 outline-rose-300"
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "class"])
                    ]),
                    createVNode("div", { class: "relative w-full" }, [
                      unref(newReportRopBlank).workSpaceId !== 0 ? (openBlock(), createBlock(_component_UiLabel, {
                        key: 0,
                        class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap"
                      }, {
                        default: withCtx(() => [
                          createTextVNode("\u041E\u0442\u0434\u0435\u043B")
                        ]),
                        _: 1
                      })) : createCommentVNode("", true),
                      createVNode("div", { class: "flex gap-2 w-full" }, [
                        createVNode(_component_MyComboboxModels, {
                          items: unref(workSpaces).map((w) => ({ value: w.id, label: w.title })),
                          class: "w-full",
                          label: "\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u043E\u0442\u0434\u0435\u043B",
                          onSelectedItem: (value) => {
                            var _a;
                            unref(newReportRopBlank).workSpaceId = value;
                            curWorkspace.value = ((_a = unref(workSpaces).find((w) => w.id === value)) == null ? void 0 : _a.title) || "";
                          }
                        }, null, 8, ["items", "onSelectedItem"])
                      ])
                    ]),
                    createVNode("div", { class: "relative" }, [
                      createVNode(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap" }, {
                        default: withCtx(() => [
                          createTextVNode("\u041A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u0437\u0430\u044F\u0432\u043E\u043A")
                        ]),
                        _: 1
                      }),
                      createVNode("div", { class: "flex gap-2" }, [
                        createVNode(_component_UiInput, {
                          modelValue: unref(newReportRopBlank).calls,
                          "onUpdate:modelValue": ($event) => unref(newReportRopBlank).calls = $event,
                          placeholder: "\u041A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u0437\u0430\u044F\u0432\u043E\u043A",
                          type: "number"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ])
                    ]),
                    createVNode("div", { class: "relative" }, [
                      createVNode(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap" }, {
                        default: withCtx(() => [
                          createTextVNode("\u041C\u0430\u043A\u0435\u0442\u043E\u0432 \u0432\u0441\u0435\u0433\u043E")
                        ]),
                        _: 1
                      }),
                      createVNode("div", { class: "flex gap-2" }, [
                        createVNode(_component_UiInput, {
                          modelValue: unref(newReportRopBlank).makets,
                          "onUpdate:modelValue": ($event) => unref(newReportRopBlank).makets = $event,
                          placeholder: "\u041C\u0430\u043A\u0435\u0442\u043E\u0432 \u0432\u0441\u0435\u0433\u043E",
                          type: "number",
                          class: unref(newReportRopBlank).makets ? "" : "outline-1 outline-rose-300"
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "class"])
                      ])
                    ]),
                    createVNode("div", { class: "relative" }, [
                      createVNode(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap" }, {
                        default: withCtx(() => [
                          createTextVNode("\u041C\u0430\u043A\u0435\u0442\u043E\u0432 \u0434\u0435\u043D\u044C \u0432 \u0434\u0435\u043D\u044C")
                        ]),
                        _: 1
                      }),
                      createVNode("div", { class: "flex gap-2" }, [
                        createVNode(_component_UiInput, {
                          modelValue: unref(newReportRopBlank).maketsDayToDay,
                          "onUpdate:modelValue": ($event) => unref(newReportRopBlank).maketsDayToDay = $event,
                          placeholder: "\u041C\u0430\u043A\u0435\u0442\u043E\u0432 \u0434\u0435\u043D\u044C \u0432 \u0434\u0435\u043D\u044C",
                          type: "number",
                          class: unref(newReportRopBlank).makets ? "" : "outline-1 outline-rose-300"
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "class"])
                      ])
                    ]),
                    unref(curWorkspace) === "B2B" ? (openBlock(), createBlock("div", {
                      key: 0,
                      class: "relative"
                    }, [
                      createVNode(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap" }, {
                        default: withCtx(() => [
                          createTextVNode("\u041F\u0435\u0440\u0435\u0445\u043E\u0434 \u0432 \u043C\u0435\u0441\u0441\u0435\u043D\u0434\u0436\u0435\u0440")
                        ]),
                        _: 1
                      }),
                      createVNode("div", { class: "flex gap-2" }, [
                        createVNode(_component_UiInput, {
                          modelValue: unref(newReportRopBlank).redirectToMSG,
                          "onUpdate:modelValue": ($event) => unref(newReportRopBlank).redirectToMSG = $event,
                          placeholder: "\u041F\u0435\u0440\u0435\u0445\u043E\u0434 \u0432 \u043C\u0435\u0441\u0441\u0435\u043D\u0434\u0436\u0435\u0440",
                          type: "number",
                          class: unref(newReportRopBlank).makets ? "" : "outline outline-1 outline-rose-300"
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "class"])
                      ])
                    ])) : createCommentVNode("", true),
                    createVNode(_component_UiButton, {
                      disabled: unref(disabled),
                      onClick: createRopReport
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" \u0421\u043E\u0437\u0434\u0430\u0442\u044C ")
                      ]),
                      _: 1
                    }, 8, ["disabled"])
                  ]),
                  createVNode("div", { class: "flex flex-col gap-1 mt-4 text-slate-500" }, [
                    createVNode("span", null, " \u041E\u0442\u0434\u0435\u043B: " + toDisplayString(unref(dayPredata).workSpace), 1),
                    createVNode("span", null, " \u0421\u0443\u043C\u043C\u0430 \u043F\u0440\u043E\u0434\u0430\u0436: " + toDisplayString(unref(dayPredata).dealSales) + "\u0440.", 1),
                    createVNode("span", null, " \u0421\u0443\u043C\u043C\u0430 \u0434\u043E\u043F.\u043F\u0440\u043E\u0434\u0430\u0436: " + toDisplayString(unref(dayPredata).dopSales) + "\u0440. ", 1),
                    createVNode("span", null, " \u0421\u0443\u043C\u043C\u0430 \u043E\u0431\u0449\u0430\u044F: " + toDisplayString(unref(dayPredata).totalSales) + "\u0440. ", 1),
                    createVNode("span", null, " \u041A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u0441\u0434\u0435\u043B\u043E\u043A: " + toDisplayString(unref(dayPredata).dealsAmount), 1),
                    createVNode("span", null, " \u0421\u0440\u0435\u0434\u043D\u0438\u0439 \u0447\u0435\u043A: " + toDisplayString(unref(dayPredata).averageBill) + "\u0440.", 1),
                    createVNode("span", null, " \u0421\u0434\u0435\u043B\u043E\u043A \u0434\u0435\u043D\u044C \u0432 \u0434\u0435\u043D\u044C: " + toDisplayString(unref(dayPredata).dealsDayToDayCount), 1)
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
      _push(`</div><div class="w-full overflow-hidden"><div class="flex flex-col gap-1 mb-2"><div class="flex gap-2"><!--[-->`);
      ssrRenderList(unref(totalsInfo).slice(0, 4), (item) => {
        _push(ssrRenderComponent(_component_UiCard, {
          key: item.title,
          class: "w-full grow"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_UiCardHeader, { class: "py-1 px-3" }, {
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
                    _push3(ssrRenderComponent(_component_UiCardTitle, { class: "text-2xl font-semibold whitespace-nowrap" }, {
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
              }, _parent2, _scopeId));
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
        }, _parent));
      });
      _push(`<!--]--></div><div class="flex gap-2"><!--[-->`);
      ssrRenderList(unref(totalsInfo).slice(4, 8), (item) => {
        _push(ssrRenderComponent(_component_UiCard, {
          key: item.title,
          class: "w-full grow"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_UiCardHeader, { class: "py-1 px-3" }, {
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
                    _push3(ssrRenderComponent(_component_UiCardTitle, { class: "text-2xl font-semibold whitespace-nowrap" }, {
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
              }, _parent2, _scopeId));
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
        }, _parent));
      });
      _push(`<!--]--></div><div class="flex gap-2"><!--[-->`);
      ssrRenderList(unref(totalsInfo).slice(8), (item) => {
        _push(ssrRenderComponent(_component_UiCard, {
          key: item.title,
          class: "w-full grow"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_UiCardHeader, { class: "py-1 px-3" }, {
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
                    _push3(ssrRenderComponent(_component_UiCardTitle, { class: "text-2xl font-semibold whitespace-nowrap" }, {
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
              }, _parent2, _scopeId));
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
        }, _parent));
      });
      _push(`<!--]--></div></div>`);
      _push(ssrRenderComponent(_component_MyDateRangePicker, {
        "model-value": unref(range),
        "onUpdate:modelValue": getRangeData
      }, null, _parent));
      _push(`<div class="mt-[-34px]">`);
      _push(ssrRenderComponent(_component_MyReportsRopsDataTable, {
        data: unref(workSpacesReports),
        "w-filters": removeDuplicatesByValue(unref(wFilters)),
        columns: unref(ropReportsColumns),
        onTableSorted: (ids) => calcTotals(ids),
        onOnDeleteItem: deleteItem
      }, null, _parent));
      _push(`</div></div></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/my/reports/RopsReports.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "\u041E\u0442\u0447\u0435\u0442\u044B | Easy CRM"
    });
    const period = ref(
      (/* @__PURE__ */ new Date()).toISOString().slice(0, 7)
      //'этот месяц'
      // '2025-02'
    );
    return (_ctx, _push, _parent, _attrs) => {
      const _component_LayoutSidebar = _sfc_main$8;
      const _component_UiInput = _sfc_main$9;
      const _component_UiTabs = _sfc_main$2$1;
      const _component_UiTabsList = _sfc_main$a;
      const _component_UiTabsTrigger = _sfc_main$1$1;
      const _component_UiTabsContent = _sfc_main$b;
      const _component_MyReportsManagersReports = _sfc_main$4;
      const _component_MyReportsRopsReports = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative h-screen hidden-scrollbar" }, _attrs))}><div class="w-full fixed z-10">`);
      _push(ssrRenderComponent(_component_LayoutSidebar, null, null, _parent));
      _push(`</div><div class="h-full flex flex-col p-4 gap-2 mx-[auto] max-w-[2048px] pt-16 min-w-[1024px]"><div class="flex gap-6">`);
      _push(ssrRenderComponent(_component_UiInput, {
        modelValue: unref(period),
        "onUpdate:modelValue": ($event) => isRef(period) ? period.value = $event : null,
        type: "month",
        class: "w-[250px]"
      }, null, _parent));
      _push(`</div><div class="flex gap-2 w-full h-full">`);
      _push(ssrRenderComponent(_component_UiTabs, {
        "default-value": "\u041C\u0435\u043D\u0435\u0434\u0436\u0435\u0440",
        class: "w-full"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="ml-[260px] mt-[-48px]"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UiTabsList, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UiTabsTrigger, { value: "\u041C\u0435\u043D\u0435\u0434\u0436\u0435\u0440" }, {
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
                  _push3(ssrRenderComponent(_component_UiTabsTrigger, { value: "\u0420\u041E\u041F" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`\u0420\u041E\u041F`);
                      } else {
                        return [
                          createTextVNode("\u0420\u041E\u041F")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_UiTabsTrigger, { value: "\u041C\u0435\u043D\u0435\u0434\u0436\u0435\u0440 \u0432\u0435\u0434\u0435\u043D\u0438\u044F" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`\u041C\u0435\u043D\u0435\u0434\u0436\u0435\u0440 \u0432\u0435\u0434\u0435\u043D\u0438\u044F`);
                      } else {
                        return [
                          createTextVNode("\u041C\u0435\u043D\u0435\u0434\u0436\u0435\u0440 \u0432\u0435\u0434\u0435\u043D\u0438\u044F")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_UiTabsTrigger, { value: "\u0414\u0438\u0437\u0430\u0439\u043D\u0435\u0440" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`\u0414\u0438\u0437\u0430\u0439\u043D\u0435\u0440`);
                      } else {
                        return [
                          createTextVNode("\u0414\u0438\u0437\u0430\u0439\u043D\u0435\u0440")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UiTabsTrigger, { value: "\u041C\u0435\u043D\u0435\u0434\u0436\u0435\u0440" }, {
                      default: withCtx(() => [
                        createTextVNode("\u041C\u0435\u043D\u0435\u0434\u0436\u0435\u0440")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_UiTabsTrigger, { value: "\u0420\u041E\u041F" }, {
                      default: withCtx(() => [
                        createTextVNode("\u0420\u041E\u041F")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_UiTabsTrigger, { value: "\u041C\u0435\u043D\u0435\u0434\u0436\u0435\u0440 \u0432\u0435\u0434\u0435\u043D\u0438\u044F" }, {
                      default: withCtx(() => [
                        createTextVNode("\u041C\u0435\u043D\u0435\u0434\u0436\u0435\u0440 \u0432\u0435\u0434\u0435\u043D\u0438\u044F")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_UiTabsTrigger, { value: "\u0414\u0438\u0437\u0430\u0439\u043D\u0435\u0440" }, {
                      default: withCtx(() => [
                        createTextVNode("\u0414\u0438\u0437\u0430\u0439\u043D\u0435\u0440")
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
            _push2(ssrRenderComponent(_component_UiTabsContent, {
              value: "\u041C\u0435\u043D\u0435\u0434\u0436\u0435\u0440",
              class: ""
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_MyReportsManagersReports, {
                    key: unref(period),
                    period: unref(period)
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    (openBlock(), createBlock(_component_MyReportsManagersReports, {
                      key: unref(period),
                      period: unref(period)
                    }, null, 8, ["period"]))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UiTabsContent, { value: "\u0420\u041E\u041F" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_MyReportsRopsReports, {
                    key: unref(period),
                    period: unref(period)
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    (openBlock(), createBlock(_component_MyReportsRopsReports, {
                      key: unref(period),
                      period: unref(period)
                    }, null, 8, ["period"]))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UiTabsContent, { value: "\u041C\u0435\u043D\u0435\u0434\u0436\u0435\u0440 \u0432\u0435\u0434\u0435\u043D\u0438\u044F" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<h2${_scopeId2}>\u041E\u0442\u0447\u0435\u0442: \u041C\u0435\u043D\u0435\u0434\u0436\u0435\u0440 \u0432\u0435\u0434\u0435\u043D\u0438\u044F</h2>`);
                } else {
                  return [
                    createVNode("h2", null, "\u041E\u0442\u0447\u0435\u0442: \u041C\u0435\u043D\u0435\u0434\u0436\u0435\u0440 \u0432\u0435\u0434\u0435\u043D\u0438\u044F")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UiTabsContent, { value: "\u0414\u0438\u0437\u0430\u0439\u043D\u0435\u0440" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<h2${_scopeId2}>\u041E\u0442\u0447\u0435\u0442: \u0414\u0438\u0437\u0430\u0439\u043D\u0435\u0440</h2>`);
                } else {
                  return [
                    createVNode("h2", null, "\u041E\u0442\u0447\u0435\u0442: \u0414\u0438\u0437\u0430\u0439\u043D\u0435\u0440")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode("div", { class: "ml-[260px] mt-[-48px]" }, [
                createVNode(_component_UiTabsList, null, {
                  default: withCtx(() => [
                    createVNode(_component_UiTabsTrigger, { value: "\u041C\u0435\u043D\u0435\u0434\u0436\u0435\u0440" }, {
                      default: withCtx(() => [
                        createTextVNode("\u041C\u0435\u043D\u0435\u0434\u0436\u0435\u0440")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_UiTabsTrigger, { value: "\u0420\u041E\u041F" }, {
                      default: withCtx(() => [
                        createTextVNode("\u0420\u041E\u041F")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_UiTabsTrigger, { value: "\u041C\u0435\u043D\u0435\u0434\u0436\u0435\u0440 \u0432\u0435\u0434\u0435\u043D\u0438\u044F" }, {
                      default: withCtx(() => [
                        createTextVNode("\u041C\u0435\u043D\u0435\u0434\u0436\u0435\u0440 \u0432\u0435\u0434\u0435\u043D\u0438\u044F")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_UiTabsTrigger, { value: "\u0414\u0438\u0437\u0430\u0439\u043D\u0435\u0440" }, {
                      default: withCtx(() => [
                        createTextVNode("\u0414\u0438\u0437\u0430\u0439\u043D\u0435\u0440")
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ]),
              createVNode(_component_UiTabsContent, {
                value: "\u041C\u0435\u043D\u0435\u0434\u0436\u0435\u0440",
                class: ""
              }, {
                default: withCtx(() => [
                  (openBlock(), createBlock(_component_MyReportsManagersReports, {
                    key: unref(period),
                    period: unref(period)
                  }, null, 8, ["period"]))
                ]),
                _: 1
              }),
              createVNode(_component_UiTabsContent, { value: "\u0420\u041E\u041F" }, {
                default: withCtx(() => [
                  (openBlock(), createBlock(_component_MyReportsRopsReports, {
                    key: unref(period),
                    period: unref(period)
                  }, null, 8, ["period"]))
                ]),
                _: 1
              }),
              createVNode(_component_UiTabsContent, { value: "\u041C\u0435\u043D\u0435\u0434\u0436\u0435\u0440 \u0432\u0435\u0434\u0435\u043D\u0438\u044F" }, {
                default: withCtx(() => [
                  createVNode("h2", null, "\u041E\u0442\u0447\u0435\u0442: \u041C\u0435\u043D\u0435\u0434\u0436\u0435\u0440 \u0432\u0435\u0434\u0435\u043D\u0438\u044F")
                ]),
                _: 1
              }),
              createVNode(_component_UiTabsContent, { value: "\u0414\u0438\u0437\u0430\u0439\u043D\u0435\u0440" }, {
                default: withCtx(() => [
                  createVNode("h2", null, "\u041E\u0442\u0447\u0435\u0442: \u0414\u0438\u0437\u0430\u0439\u043D\u0435\u0440")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/reports/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-CzMPWUeX.mjs.map
