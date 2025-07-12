import { _ as _sfc_main$4 } from './Sidebar-D1AIfhZZ.mjs';
import { _ as _sfc_main$5, a as _sfc_main$4$1, b as _sfc_main$3$1, c as _sfc_main$2$1, d as _sfc_main$1$1, e as _sfc_main$6, f as _sfc_main$6$1 } from './index-DnaTyMzW.mjs';
import { _ as _sfc_main$3$2, a as _sfc_main$2$2, b as _sfc_main$7, c as _sfc_main$1$2 } from './CardDescription-Bo1EqluP.mjs';
import { _ as _sfc_main$1$3, a as _sfc_main$c } from './CardFooter-B-a2kxjY.mjs';
import { _ as _sfc_main$h } from './ScrollArea-CPCatQNH.mjs';
import { _ as _sfc_main$b } from './Separator-kiHjH00C.mjs';
import { d as dateFormat } from './useMyDateFormat-Cn1Jsliy.mjs';
import { defineComponent, ref, watch, mergeProps, unref, isRef, withCtx, createVNode, createBlock, openBlock, createTextVNode, toDisplayString, h, Fragment, renderList, createCommentVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderClass } from 'vue/server-renderer';
import { a as useNuxtApp } from './server.mjs';
import { _ as _sfc_main$8 } from './Input-DBSZ1Mdv.mjs';
import { _ as _sfc_main$2$5, a as _sfc_main$1$6, b as _sfc_main$i } from './PopoverContent-Bm4609Rb.mjs';
import { _ as _sfc_main$a, v as valueUpdater } from './isLoading-BbWzubgi.mjs';
import { _ as _sfc_main$j } from './Checkbox-Cx8b_7FZ.mjs';
import { _ as _sfc_main$5$1, a as _sfc_main$f, b as _sfc_main$2$4, c as _sfc_main$1$5, d as _sfc_main$4$2, e as _sfc_main$3$3 } from './TableHeader-e42BjEs_.mjs';
import { useVueTable, getFilteredRowModel, getSortedRowModel, getCoreRowModel, FlexRender } from '@tanstack/vue-table';
import { ChevronDown, ArrowUpDown } from 'lucide-vue-next';
import { _ as _sfc_main$9 } from './SetPlanModal-B_M48t0T.mjs';
import { _ as _sfc_main$4$3, a as _sfc_main$3$4, b as _sfc_main$k, c as _sfc_main$2$6, d as _sfc_main$1$7 } from './DialogContent-N24W_Bx3.mjs';
import { _ as _sfc_main$m } from './DialogFooter-C_pMBt3g.mjs';
import { _ as _sfc_main$2$3, a as _sfc_main$d, b as _sfc_main$1$4 } from './TabsList-DbIwKgY4.mjs';
import { _ as _sfc_main$l } from './Label-B6Kf4x8e.mjs';
import { _ as _sfc_main$e } from './TabsContent-CO2mHCzx.mjs';
import { _ as _sfc_main$g } from './TopList-CslpHHC9.mjs';
import { u as useMyFormatPrice } from './useMyFormatPrice-CCAsFuev.mjs';
import { u as useHead } from './v3-BEwgjOp-.mjs';
import 'radix-vue';
import 'class-variance-authority';
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
import '@vueuse/core';
import 'clsx';
import 'tailwind-merge';
import './index-OemDKZ57.mjs';
import '@iconify/utils/lib/css/icon';
import 'perfect-debounce';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import 'unhead/plugins';

const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "DealCardSheet",
  __ssrInlineRender: true,
  props: {
    deal: {}
  },
  setup(__props) {
    const { $useApi } = useNuxtApp();
    const dopsPrice = ref(0);
    const recievedPayments = ref(0);
    const totalPrice = ref(0);
    const remainder = ref(0);
    const daysGone = ref(0);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UiCard = _sfc_main$3$2;
      const _component_UiCardHeader = _sfc_main$2$2;
      const _component_UiCardTitle = _sfc_main$1$2;
      const _component_UiCardDescription = _sfc_main$7;
      const _component_UiScrollArea = _sfc_main$h;
      const _component_UiCardContent = _sfc_main$1$3;
      const _component_UiSeparator = _sfc_main$b;
      const _component_UiCardFooter = _sfc_main$c;
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
                          _push4(`<div class="flex flex-col"${_scopeId3}><span${_scopeId3}> \u041F\u0435\u0440\u0432\u044B\u0439 \u043A\u043E\u043D\u0442\u0430\u043A\u0442: ${ssrInterpolate(("dateFormat" in _ctx ? _ctx.dateFormat : unref(dateFormat))(_ctx.deal.client.firstContact))}</span><span${_scopeId3}> \u0414\u0430\u0442\u0430 \u043F\u0440\u043E\u0434\u0430\u0436\u0438: ${ssrInterpolate(("dateFormat" in _ctx ? _ctx.dateFormat : unref(dateFormat))(_ctx.deal.saleDate))}</span><span${_scopeId3}> \u041F\u0440\u043E\u0448\u043B\u043E \u0434\u043D\u0435\u0439: ${ssrInterpolate(unref(daysGone))}</span><span${_scopeId3}>\u041F\u0440\u0435\u0437\u0435\u043D\u0442\u0430\u0446\u0438\u044F \u043C\u0430\u043A\u0435\u0442\u0430: ${ssrInterpolate(("dateFormat" in _ctx ? _ctx.dateFormat : unref(dateFormat))(_ctx.deal.maketPresentation))}</span></div><div class="flex gap-2 mb-2 items-center"${_scopeId3}><span${_scopeId3}>\u0421\u0442\u0430\u0442\u0443\u0441:${ssrInterpolate(_ctx.deal.status)}</span></div>`);
                        } else {
                          return [
                            createVNode("div", { class: "flex flex-col" }, [
                              createVNode("span", null, " \u041F\u0435\u0440\u0432\u044B\u0439 \u043A\u043E\u043D\u0442\u0430\u043A\u0442: " + toDisplayString(("dateFormat" in _ctx ? _ctx.dateFormat : unref(dateFormat))(_ctx.deal.client.firstContact)), 1),
                              createVNode("span", null, " \u0414\u0430\u0442\u0430 \u043F\u0440\u043E\u0434\u0430\u0436\u0438: " + toDisplayString(("dateFormat" in _ctx ? _ctx.dateFormat : unref(dateFormat))(_ctx.deal.saleDate)), 1),
                              createVNode("span", null, " \u041F\u0440\u043E\u0448\u043B\u043E \u0434\u043D\u0435\u0439: " + toDisplayString(unref(daysGone)), 1),
                              createVNode("span", null, "\u041F\u0440\u0435\u0437\u0435\u043D\u0442\u0430\u0446\u0438\u044F \u043C\u0430\u043A\u0435\u0442\u0430: " + toDisplayString(("dateFormat" in _ctx ? _ctx.dateFormat : unref(dateFormat))(_ctx.deal.maketPresentation)), 1)
                            ]),
                            createVNode("div", { class: "flex gap-2 mb-2 items-center" }, [
                              createVNode("span", null, "\u0421\u0442\u0430\u0442\u0443\u0441:" + toDisplayString(_ctx.deal.status), 1)
                            ])
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
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
                              createVNode("span", null, "\u0421\u0442\u0430\u0442\u0443\u0441:" + toDisplayString(_ctx.deal.status), 1)
                            ])
                          ]),
                          _: 1
                        })
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
                        if (_push4) {
                          _push4(`<div class="gap-3"${_scopeId3}><div class="font-semibold pb-2"${_scopeId3}>\u0414\u0435\u0442\u0430\u043B\u0438 \u043E\u043F\u043B\u0430\u0442\u044B</div><ul class="gap-1 text-gray-600"${_scopeId3}><li class="flex items-center justify-between font-semibold"${_scopeId3}><span class="text-muted-foreground"${_scopeId3}> \u0421\u0443\u043C\u043C\u0430 \u0437\u0430\u043A\u0430\u0437\u0430 </span><span${_scopeId3}>${ssrInterpolate(unref(totalPrice))}\u20BD </span></li><li class="flex items-center justify-between"${_scopeId3}><span class="text-muted-foreground"${_scopeId3}> \u0421\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C \u0432\u044B\u0432\u0435\u0441\u043A\u0438 </span><span${_scopeId3}>${ssrInterpolate(_ctx.deal.price)}\u20BD </span></li><li class="flex items-center justify-between"${_scopeId3}><span class="text-muted-foreground"${_scopeId3}> \u0421\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C \u0434\u043E\u043F. \u0443\u0441\u043B\u0443\u0433 </span><span${_scopeId3}>${ssrInterpolate(unref(dopsPrice))}\u20BD </span></li><li class="flex items-center justify-between"${_scopeId3}><span class="text-muted-foreground"${_scopeId3}> \u041E\u043F\u043B\u0430\u0447\u0435\u043D\u043E </span><span${_scopeId3}>${ssrInterpolate(unref(recievedPayments))}\u20BD </span></li><li class="flex items-center justify-between font-semibold"${_scopeId3}><span class="text-muted-foreground"${_scopeId3}> \u041E\u0441\u0442\u0430\u0442\u043E\u043A </span><span class="${ssrRenderClass(unref(remainder) > 0 ? "text-red-600" : "text-green-600")}"${_scopeId3}>${ssrInterpolate(unref(remainder))}\u20BD </span></li></ul></div>`);
                          _push4(ssrRenderComponent(_component_UiSeparator, { class: "my-2" }, null, _parent4, _scopeId3));
                          _push4(`<div class="flex flex-col"${_scopeId3}><div class="flex justify-between font-semibold pb-2"${_scopeId3}>${ssrInterpolate(_ctx.deal.dealers.length > 1 ? "\u041C\u0435\u043D\u0435\u0434\u0436\u0435\u0440\u044B" : "\u041C\u0435\u043D\u0435\u0434\u0436\u0435\u0440")}</div><div class="flex flex-col text-gray-600"${_scopeId3}><!--[-->`);
                          ssrRenderList(_ctx.deal.dealers, (dealer) => {
                            var _a;
                            _push4(`<ul class="w-full flex-cols items-center mb-2"${_scopeId3}><li class="flex"${_scopeId3}><div class="flex justify-between grow mr-1"${_scopeId3}><span${_scopeId3}>${ssrInterpolate(((_a = dealer.user) == null ? void 0 : _a.fullName) || "Nope")}</span><span${_scopeId3}>${ssrInterpolate(dealer.price + "p")}</span></div></li></ul>`);
                          });
                          _push4(`<!--]--></div></div>`);
                          _push4(ssrRenderComponent(_component_UiSeparator, { class: "my-2" }, null, _parent4, _scopeId3));
                          _push4(`<div class=""${_scopeId3}><div class="flex items-center justify-between"${_scopeId3}><div class="font-semibold pb-2"${_scopeId3}>\u041F\u043B\u0430\u0442\u0435\u0436\u0438</div></div><!--[-->`);
                          ssrRenderList(_ctx.deal.payments, (pay) => {
                            _push4(`<ul class="text-gray-600 flex"${_scopeId3}><li class="flex items-center justify-between grow mr-1 mb-1"${_scopeId3}><span class=""${_scopeId3}>${ssrInterpolate(pay.method)}</span><span class=""${_scopeId3}>${ssrInterpolate(("dateFormat" in _ctx ? _ctx.dateFormat : unref(dateFormat))(pay.date))}</span><span class=""${_scopeId3}>${ssrInterpolate(pay.price)}\u20BD </span></li></ul>`);
                          });
                          _push4(`<!--]--></div>`);
                          _push4(ssrRenderComponent(_component_UiSeparator, { class: "my-2" }, null, _parent4, _scopeId3));
                          _push4(`<div class="gap-1"${_scopeId3}><div class="flex items-center justify-between"${_scopeId3}><div class="font-semibold pb-2"${_scopeId3}>\u0414\u043E\u043F. \u0443\u0441\u043B\u0443\u0433\u0438</div></div><!--[-->`);
                          ssrRenderList(_ctx.deal.dops, (dop) => {
                            _push4(`<ul class="text-gray-600 flex flex-col"${_scopeId3}><div class="flex"${_scopeId3}><li class="flex flex-col justify-between grow mr-1 mb-1"${_scopeId3}><span class="text-muted-foreground"${_scopeId3}>${ssrInterpolate(("dateFormat" in _ctx ? _ctx.dateFormat : unref(dateFormat))(dop.saleDate) + " - " + dop.type)}</span><span class="text-muted-foreground"${_scopeId3}>${ssrInterpolate(dop.user.fullName + " - " + dop.price + "\u20BD" || "")}</span></li></div><div class="w-full flex flex-col items-center"${_scopeId3}>`);
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
                            createVNode("div", { class: "flex flex-col" }, [
                              createVNode("div", { class: "flex justify-between font-semibold pb-2" }, toDisplayString(_ctx.deal.dealers.length > 1 ? "\u041C\u0435\u043D\u0435\u0434\u0436\u0435\u0440\u044B" : "\u041C\u0435\u043D\u0435\u0434\u0436\u0435\u0440"), 1),
                              createVNode("div", { class: "flex flex-col text-gray-600" }, [
                                (openBlock(true), createBlock(Fragment, null, renderList(_ctx.deal.dealers, (dealer) => {
                                  var _a;
                                  return openBlock(), createBlock("ul", {
                                    key: dealer.id,
                                    class: "w-full flex-cols items-center mb-2"
                                  }, [
                                    createVNode("li", { class: "flex" }, [
                                      createVNode("div", { class: "flex justify-between grow mr-1" }, [
                                        createVNode("span", null, toDisplayString(((_a = dealer.user) == null ? void 0 : _a.fullName) || "Nope"), 1),
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
                                createVNode("div", { class: "font-semibold pb-2" }, "\u041F\u043B\u0430\u0442\u0435\u0436\u0438")
                              ]),
                              (openBlock(true), createBlock(Fragment, null, renderList(_ctx.deal.payments, (pay) => {
                                return openBlock(), createBlock("ul", {
                                  key: pay.id,
                                  class: "text-gray-600 flex"
                                }, [
                                  createVNode("li", { class: "flex items-center justify-between grow mr-1 mb-1" }, [
                                    createVNode("span", { class: "" }, toDisplayString(pay.method), 1),
                                    createVNode("span", { class: "" }, toDisplayString(("dateFormat" in _ctx ? _ctx.dateFormat : unref(dateFormat))(pay.date)), 1),
                                    createVNode("span", { class: "" }, toDisplayString(pay.price) + "\u20BD ", 1)
                                  ])
                                ]);
                              }), 128))
                            ]),
                            createVNode(_component_UiSeparator, { class: "my-2" }),
                            createVNode("div", { class: "gap-1" }, [
                              createVNode("div", { class: "flex items-center justify-between" }, [
                                createVNode("div", { class: "font-semibold pb-2" }, "\u0414\u043E\u043F. \u0443\u0441\u043B\u0443\u0433\u0438")
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
                                    ])
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
                        default: withCtx(() => [
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
                          createVNode("div", { class: "flex flex-col" }, [
                            createVNode("div", { class: "flex justify-between font-semibold pb-2" }, toDisplayString(_ctx.deal.dealers.length > 1 ? "\u041C\u0435\u043D\u0435\u0434\u0436\u0435\u0440\u044B" : "\u041C\u0435\u043D\u0435\u0434\u0436\u0435\u0440"), 1),
                            createVNode("div", { class: "flex flex-col text-gray-600" }, [
                              (openBlock(true), createBlock(Fragment, null, renderList(_ctx.deal.dealers, (dealer) => {
                                var _a;
                                return openBlock(), createBlock("ul", {
                                  key: dealer.id,
                                  class: "w-full flex-cols items-center mb-2"
                                }, [
                                  createVNode("li", { class: "flex" }, [
                                    createVNode("div", { class: "flex justify-between grow mr-1" }, [
                                      createVNode("span", null, toDisplayString(((_a = dealer.user) == null ? void 0 : _a.fullName) || "Nope"), 1),
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
                              createVNode("div", { class: "font-semibold pb-2" }, "\u041F\u043B\u0430\u0442\u0435\u0436\u0438")
                            ]),
                            (openBlock(true), createBlock(Fragment, null, renderList(_ctx.deal.payments, (pay) => {
                              return openBlock(), createBlock("ul", {
                                key: pay.id,
                                class: "text-gray-600 flex"
                              }, [
                                createVNode("li", { class: "flex items-center justify-between grow mr-1 mb-1" }, [
                                  createVNode("span", { class: "" }, toDisplayString(pay.method), 1),
                                  createVNode("span", { class: "" }, toDisplayString(("dateFormat" in _ctx ? _ctx.dateFormat : unref(dateFormat))(pay.date)), 1),
                                  createVNode("span", { class: "" }, toDisplayString(pay.price) + "\u20BD ", 1)
                                ])
                              ]);
                            }), 128))
                          ]),
                          createVNode(_component_UiSeparator, { class: "my-2" }),
                          createVNode("div", { class: "gap-1" }, [
                            createVNode("div", { class: "flex items-center justify-between" }, [
                              createVNode("div", { class: "font-semibold pb-2" }, "\u0414\u043E\u043F. \u0443\u0441\u043B\u0443\u0433\u0438")
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
                                  ])
                                ]),
                                createVNode("div", { class: "w-full flex flex-col items-center" }, [
                                  createVNode(_component_UiSeparator, { class: "my-1" })
                                ])
                              ]);
                            }), 128))
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
                            createVNode("span", null, "\u0421\u0442\u0430\u0442\u0443\u0441:" + toDisplayString(_ctx.deal.status), 1)
                          ])
                        ]),
                        _: 1
                      })
                    ])
                  ]),
                  _: 1
                }),
                createVNode(_component_UiScrollArea, null, {
                  default: withCtx(() => [
                    createVNode(_component_UiCardContent, { class: "p-6 text-sm h-full" }, {
                      default: withCtx(() => [
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
                        createVNode("div", { class: "flex flex-col" }, [
                          createVNode("div", { class: "flex justify-between font-semibold pb-2" }, toDisplayString(_ctx.deal.dealers.length > 1 ? "\u041C\u0435\u043D\u0435\u0434\u0436\u0435\u0440\u044B" : "\u041C\u0435\u043D\u0435\u0434\u0436\u0435\u0440"), 1),
                          createVNode("div", { class: "flex flex-col text-gray-600" }, [
                            (openBlock(true), createBlock(Fragment, null, renderList(_ctx.deal.dealers, (dealer) => {
                              var _a;
                              return openBlock(), createBlock("ul", {
                                key: dealer.id,
                                class: "w-full flex-cols items-center mb-2"
                              }, [
                                createVNode("li", { class: "flex" }, [
                                  createVNode("div", { class: "flex justify-between grow mr-1" }, [
                                    createVNode("span", null, toDisplayString(((_a = dealer.user) == null ? void 0 : _a.fullName) || "Nope"), 1),
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
                            createVNode("div", { class: "font-semibold pb-2" }, "\u041F\u043B\u0430\u0442\u0435\u0436\u0438")
                          ]),
                          (openBlock(true), createBlock(Fragment, null, renderList(_ctx.deal.payments, (pay) => {
                            return openBlock(), createBlock("ul", {
                              key: pay.id,
                              class: "text-gray-600 flex"
                            }, [
                              createVNode("li", { class: "flex items-center justify-between grow mr-1 mb-1" }, [
                                createVNode("span", { class: "" }, toDisplayString(pay.method), 1),
                                createVNode("span", { class: "" }, toDisplayString(("dateFormat" in _ctx ? _ctx.dateFormat : unref(dateFormat))(pay.date)), 1),
                                createVNode("span", { class: "" }, toDisplayString(pay.price) + "\u20BD ", 1)
                              ])
                            ]);
                          }), 128))
                        ]),
                        createVNode(_component_UiSeparator, { class: "my-2" }),
                        createVNode("div", { class: "gap-1" }, [
                          createVNode("div", { class: "flex items-center justify-between" }, [
                            createVNode("div", { class: "font-semibold pb-2" }, "\u0414\u043E\u043F. \u0443\u0441\u043B\u0443\u0433\u0438")
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
                                ])
                              ]),
                              createVNode("div", { class: "w-full flex flex-col items-center" }, [
                                createVNode(_component_UiSeparator, { class: "my-1" })
                              ])
                            ]);
                          }), 128))
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
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/my/deals/DealCardSheet.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "DataTable",
  __ssrInlineRender: true,
  props: {
    columns: {},
    data: {}
  },
  emits: ["manager-clicked", "table-sorted"],
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
    const managerClicked = (id) => {
      emit("manager-clicked", id);
    };
    watch(
      () => table.getSortedRowModel().rows,
      (newSorting) => {
        const plansIds = newSorting.map((s) => s.original.id);
        emit("table-sorted", plansIds);
      },
      { deep: true }
    );
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UiPopover = _sfc_main$2$5;
      const _component_UiPopoverTrigger = _sfc_main$1$6;
      const _component_UiButton = _sfc_main$a;
      const _component_UiPopoverContent = _sfc_main$i;
      const _component_UiCheckbox = _sfc_main$j;
      const _component_UiTable = _sfc_main$5$1;
      const _component_UiTableHeader = _sfc_main$f;
      const _component_UiTableRow = _sfc_main$2$4;
      const _component_UiTableHead = _sfc_main$1$5;
      const _component_UiTableBody = _sfc_main$4$2;
      const _component_UiTableCell = _sfc_main$3$3;
      _push(`<!--[--><div class="flex mb-2 justify-end"><div>`);
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
      _push(`</div></div><div class="rounded-md border bg-slate-100">`);
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
                        "data-state": row.getIsSelected() ? "selected" : void 0,
                        onClick: ($event) => managerClicked(row.original.id)
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
                                _push5(` \u041D\u0435\u0442 \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u043E\u0432. `);
                              } else {
                                return [
                                  createTextVNode(" \u041D\u0435\u0442 \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u043E\u0432. ")
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
                                createTextVNode(" \u041D\u0435\u0442 \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u043E\u0432. ")
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
                        "data-state": row.getIsSelected() ? "selected" : void 0,
                        onClick: ($event) => managerClicked(row.original.id)
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
                      }, 1032, ["data-state", "onClick"]);
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
                        "data-state": row.getIsSelected() ? "selected" : void 0,
                        onClick: ($event) => managerClicked(row.original.id)
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
                      }, 1032, ["data-state", "onClick"]);
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
      }, _parent));
      _push(`</div><!--]-->`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/my/comercial/DataTable.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "CorrectCreateModal",
  __ssrInlineRender: true,
  props: {
    userId: {}
  },
  emits: ["correction-created"],
  setup(__props, { emit: __emit }) {
    const { $useApi } = useNuxtApp();
    const props = __props;
    const isOpen = ref(false);
    const errorMessage = ref(null);
    const isLoading = ref(false);
    const disabled = ref(true);
    const types = ["\u0412\u044B\u0447\u0435\u0442", "\u041F\u0440\u0438\u0431\u0430\u0432\u043A\u0430"];
    const newCorrectionBlank = {
      type: types[0],
      date: (/* @__PURE__ */ new Date()).toISOString().slice(0, 10),
      period: (/* @__PURE__ */ new Date()).toISOString().slice(0, 7),
      price: 0
    };
    const newCorrection = ref({ ...newCorrectionBlank });
    const create = async () => {
      var _a, _b;
      isLoading.value = true;
      errorMessage.value = null;
      try {
        const response = await $useApi.post("/salary-pay/correction", {
          ...newCorrection.value,
          userId: props.userId
        });
        console.log(response.data);
        isOpen.value = false;
        emit("correction-created", response.data);
      } catch (error) {
        const message = ((_b = (_a = error.response) == null ? void 0 : _a.data) == null ? void 0 : _b.message) || "\u041E\u0448\u0438\u0431\u043A\u0430 \u043F\u0440\u0438 \u0441\u043E\u0437\u0434\u0430\u043D\u0438\u0438";
        errorMessage.value = message.message;
      } finally {
        isLoading.value = false;
      }
    };
    const emit = __emit;
    watch(
      [newCorrection],
      () => {
        const { price, date, period } = newCorrection.value;
        disabled.value = !(price && date && period);
      },
      { deep: true }
    );
    watch(isOpen, (newValue) => {
      if (!newValue) {
        newCorrection.value = { ...newCorrectionBlank };
        errorMessage.value = null;
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UiDialog = _sfc_main$4$3;
      const _component_UiDialogTrigger = _sfc_main$3$4;
      const _component_UiButton = _sfc_main$a;
      const _component_UiDialogContent = _sfc_main$k;
      const _component_UiDialogHeader = _sfc_main$2$6;
      const _component_UiDialogTitle = _sfc_main$1$7;
      const _component_UiTabs = _sfc_main$2$3;
      const _component_UiTabsList = _sfc_main$d;
      const _component_UiTabsTrigger = _sfc_main$1$4;
      const _component_UiLabel = _sfc_main$l;
      const _component_UiInput = _sfc_main$8;
      const _component_UiDialogFooter = _sfc_main$m;
      _push(ssrRenderComponent(_component_UiDialog, mergeProps({
        open: unref(isOpen),
        "onUpdate:open": ($event) => isRef(isOpen) ? isOpen.value = $event : null
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UiDialogTrigger, { "as-child": "" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UiButton, { class: "px-1 h-5" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`\u041A\u043E\u0440\u0440\u0435\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C`);
                      } else {
                        return [
                          createTextVNode("\u041A\u043E\u0440\u0440\u0435\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UiButton, { class: "px-1 h-5" }, {
                      default: withCtx(() => [
                        createTextVNode("\u041A\u043E\u0440\u0440\u0435\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C")
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UiDialogContent, { class: "max-w-[250px] flex flex-col" }, {
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
                  if (unref(errorMessage)) {
                    _push3(`<div class="text-red-500 text-sm"${_scopeId2}>${ssrInterpolate(unref(errorMessage))}</div>`);
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(`<div class="flex flex-col gap-6 mt-2"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_UiTabs, { class: "w-full" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_UiTabsList, { class: "w-full" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<!--[-->`);
                              ssrRenderList(types, (t) => {
                                _push5(ssrRenderComponent(_component_UiTabsTrigger, {
                                  key: t,
                                  value: t,
                                  class: "w-full",
                                  onClick: ($event) => unref(newCorrection).type = t
                                }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(`${ssrInterpolate(t)}`);
                                    } else {
                                      return [
                                        createTextVNode(toDisplayString(t), 1)
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent5, _scopeId4));
                              });
                              _push5(`<!--]-->`);
                            } else {
                              return [
                                (openBlock(), createBlock(Fragment, null, renderList(types, (t) => {
                                  return createVNode(_component_UiTabsTrigger, {
                                    key: t,
                                    value: t,
                                    class: "w-full",
                                    onClick: ($event) => unref(newCorrection).type = t
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
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_UiTabsList, { class: "w-full" }, {
                            default: withCtx(() => [
                              (openBlock(), createBlock(Fragment, null, renderList(types, (t) => {
                                return createVNode(_component_UiTabsTrigger, {
                                  key: t,
                                  value: t,
                                  class: "w-full",
                                  onClick: ($event) => unref(newCorrection).type = t
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
                  }, _parent3, _scopeId2));
                  _push3(`<div class="relative"${_scopeId2}>`);
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
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_UiInput, {
                    modelValue: unref(newCorrection).price,
                    "onUpdate:modelValue": ($event) => unref(newCorrection).price = $event,
                    type: "number",
                    placeholder: "\u0421\u0443\u043C\u043C\u0430",
                    class: unref(newCorrection).price ? "" : "outline outline-1 outline-rose-300"
                  }, null, _parent3, _scopeId2));
                  _push3(`</div><div class="relative"${_scopeId2}>`);
                  if (unref(newCorrection).period) {
                    _push3(ssrRenderComponent(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(` \u041F\u0435\u0440\u0438\u043E\u0434 `);
                        } else {
                          return [
                            createTextVNode(" \u041F\u0435\u0440\u0438\u043E\u0434 ")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(ssrRenderComponent(_component_UiInput, {
                    modelValue: unref(newCorrection).period,
                    "onUpdate:modelValue": ($event) => unref(newCorrection).period = $event,
                    type: "month",
                    placeholder: "\u041F\u0435\u0440\u0438\u043E\u0434",
                    class: unref(newCorrection).period ? "" : "outline outline-1 outline-rose-300"
                  }, null, _parent3, _scopeId2));
                  _push3(`</div><div class="relative"${_scopeId2}>`);
                  if (unref(newCorrection).date) {
                    _push3(ssrRenderComponent(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(` \u0414\u0430\u0442\u0430 \u0432\u044B\u0447\u0435\u0442\u0430 `);
                        } else {
                          return [
                            createTextVNode(" \u0414\u0430\u0442\u0430 \u0432\u044B\u0447\u0435\u0442\u0430 ")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(ssrRenderComponent(_component_UiInput, {
                    modelValue: unref(newCorrection).date,
                    "onUpdate:modelValue": ($event) => unref(newCorrection).date = $event,
                    type: "date",
                    placeholder: "\u0414\u0430\u0442\u0430 \u0432\u044B\u0447\u0435\u0442\u0430",
                    class: unref(newCorrection).date ? "" : "outline outline-1 outline-rose-300"
                  }, null, _parent3, _scopeId2));
                  _push3(`</div></div>`);
                  _push3(ssrRenderComponent(_component_UiDialogFooter, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_UiButton, {
                          disabled: unref(disabled) || unref(isLoading),
                          onClick: create
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
                            onClick: create
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
                            createTextVNode("\u0421\u043E\u0437\u0434\u0430\u0442\u044C")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    unref(errorMessage) ? (openBlock(), createBlock("div", {
                      key: 0,
                      class: "text-red-500 text-sm"
                    }, toDisplayString(unref(errorMessage)), 1)) : createCommentVNode("", true),
                    createVNode("div", { class: "flex flex-col gap-6 mt-2" }, [
                      createVNode(_component_UiTabs, { class: "w-full" }, {
                        default: withCtx(() => [
                          createVNode(_component_UiTabsList, { class: "w-full" }, {
                            default: withCtx(() => [
                              (openBlock(), createBlock(Fragment, null, renderList(types, (t) => {
                                return createVNode(_component_UiTabsTrigger, {
                                  key: t,
                                  value: t,
                                  class: "w-full",
                                  onClick: ($event) => unref(newCorrection).type = t
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
                      }),
                      createVNode("div", { class: "relative" }, [
                        createVNode(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap" }, {
                          default: withCtx(() => [
                            createTextVNode(" \u0421\u0443\u043C\u043C\u0430 ")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_UiInput, {
                          modelValue: unref(newCorrection).price,
                          "onUpdate:modelValue": ($event) => unref(newCorrection).price = $event,
                          type: "number",
                          placeholder: "\u0421\u0443\u043C\u043C\u0430",
                          class: unref(newCorrection).price ? "" : "outline outline-1 outline-rose-300"
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "class"])
                      ]),
                      createVNode("div", { class: "relative" }, [
                        unref(newCorrection).period ? (openBlock(), createBlock(_component_UiLabel, {
                          key: 0,
                          class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" \u041F\u0435\u0440\u0438\u043E\u0434 ")
                          ]),
                          _: 1
                        })) : createCommentVNode("", true),
                        createVNode(_component_UiInput, {
                          modelValue: unref(newCorrection).period,
                          "onUpdate:modelValue": ($event) => unref(newCorrection).period = $event,
                          type: "month",
                          placeholder: "\u041F\u0435\u0440\u0438\u043E\u0434",
                          class: unref(newCorrection).period ? "" : "outline outline-1 outline-rose-300"
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "class"])
                      ]),
                      createVNode("div", { class: "relative" }, [
                        unref(newCorrection).date ? (openBlock(), createBlock(_component_UiLabel, {
                          key: 0,
                          class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" \u0414\u0430\u0442\u0430 \u0432\u044B\u0447\u0435\u0442\u0430 ")
                          ]),
                          _: 1
                        })) : createCommentVNode("", true),
                        createVNode(_component_UiInput, {
                          modelValue: unref(newCorrection).date,
                          "onUpdate:modelValue": ($event) => unref(newCorrection).date = $event,
                          type: "date",
                          placeholder: "\u0414\u0430\u0442\u0430 \u0432\u044B\u0447\u0435\u0442\u0430",
                          class: unref(newCorrection).date ? "" : "outline outline-1 outline-rose-300"
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "class"])
                      ])
                    ]),
                    createVNode(_component_UiDialogFooter, null, {
                      default: withCtx(() => [
                        createVNode(_component_UiButton, {
                          disabled: unref(disabled) || unref(isLoading),
                          onClick: create
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
                  createVNode(_component_UiButton, { class: "px-1 h-5" }, {
                    default: withCtx(() => [
                      createTextVNode("\u041A\u043E\u0440\u0440\u0435\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C")
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(_component_UiDialogContent, { class: "max-w-[250px] flex flex-col" }, {
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
                  unref(errorMessage) ? (openBlock(), createBlock("div", {
                    key: 0,
                    class: "text-red-500 text-sm"
                  }, toDisplayString(unref(errorMessage)), 1)) : createCommentVNode("", true),
                  createVNode("div", { class: "flex flex-col gap-6 mt-2" }, [
                    createVNode(_component_UiTabs, { class: "w-full" }, {
                      default: withCtx(() => [
                        createVNode(_component_UiTabsList, { class: "w-full" }, {
                          default: withCtx(() => [
                            (openBlock(), createBlock(Fragment, null, renderList(types, (t) => {
                              return createVNode(_component_UiTabsTrigger, {
                                key: t,
                                value: t,
                                class: "w-full",
                                onClick: ($event) => unref(newCorrection).type = t
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
                    }),
                    createVNode("div", { class: "relative" }, [
                      createVNode(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap" }, {
                        default: withCtx(() => [
                          createTextVNode(" \u0421\u0443\u043C\u043C\u0430 ")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_UiInput, {
                        modelValue: unref(newCorrection).price,
                        "onUpdate:modelValue": ($event) => unref(newCorrection).price = $event,
                        type: "number",
                        placeholder: "\u0421\u0443\u043C\u043C\u0430",
                        class: unref(newCorrection).price ? "" : "outline outline-1 outline-rose-300"
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "class"])
                    ]),
                    createVNode("div", { class: "relative" }, [
                      unref(newCorrection).period ? (openBlock(), createBlock(_component_UiLabel, {
                        key: 0,
                        class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" \u041F\u0435\u0440\u0438\u043E\u0434 ")
                        ]),
                        _: 1
                      })) : createCommentVNode("", true),
                      createVNode(_component_UiInput, {
                        modelValue: unref(newCorrection).period,
                        "onUpdate:modelValue": ($event) => unref(newCorrection).period = $event,
                        type: "month",
                        placeholder: "\u041F\u0435\u0440\u0438\u043E\u0434",
                        class: unref(newCorrection).period ? "" : "outline outline-1 outline-rose-300"
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "class"])
                    ]),
                    createVNode("div", { class: "relative" }, [
                      unref(newCorrection).date ? (openBlock(), createBlock(_component_UiLabel, {
                        key: 0,
                        class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" \u0414\u0430\u0442\u0430 \u0432\u044B\u0447\u0435\u0442\u0430 ")
                        ]),
                        _: 1
                      })) : createCommentVNode("", true),
                      createVNode(_component_UiInput, {
                        modelValue: unref(newCorrection).date,
                        "onUpdate:modelValue": ($event) => unref(newCorrection).date = $event,
                        type: "date",
                        placeholder: "\u0414\u0430\u0442\u0430 \u0432\u044B\u0447\u0435\u0442\u0430",
                        class: unref(newCorrection).date ? "" : "outline outline-1 outline-rose-300"
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "class"])
                    ])
                  ]),
                  createVNode(_component_UiDialogFooter, null, {
                    default: withCtx(() => [
                      createVNode(_component_UiButton, {
                        disabled: unref(disabled) || unref(isLoading),
                        onClick: create
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
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/my/salaries/CorrectCreateModal.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const managersDataColumns = [
  // Менеджер
  {
    accessorKey: "fullName",
    ruName: "\u041C\u0435\u043D\u0435\u0434\u0436\u0435\u0440",
    enableHiding: false,
    header: ({ column }) => {
      return h(
        _sfc_main$a,
        {
          variant: "ghost",
          onClick: () => column.toggleSorting(column.getIsSorted() === "asc"),
          class: "text-wrap h-full"
        },
        () => ["\u041C\u0435\u043D\u0435\u0434\u0436\u0435\u0440", h(ArrowUpDown, { class: "h-[20px] w-[20px]" })]
      );
    },
    cell: ({ row }) => h(
      "div",
      { class: "text-left pl-4 whitespace-nowrap" },
      `${row.original.fullName} ${row.original.fired ? "(\u0423\u0432\u043E\u043B\u0435\u043D)" : ""}`
      // row.getValue('manager')
    )
  },
  // Отдел
  {
    accessorKey: "workSpace",
    ruName: "\u041E\u0442\u0434\u0435\u043B",
    header: ({ column }) => {
      return h(
        _sfc_main$a,
        {
          variant: "ghost",
          onClick: () => column.toggleSorting(column.getIsSorted() === "asc"),
          class: "text-center h-full w-full"
        },
        () => ["\u041E\u0442\u0434\u0435\u043B", h(ArrowUpDown, { class: "ml-2 h-4 w-4" })]
      );
    },
    cell: ({ row }) => h("div", { class: "text-center" }, row.getValue("workSpace")),
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    }
  },
  // Общие продажи
  {
    accessorKey: "totalSales",
    ruName: "\u041E\u0431\u0449\u0438\u0435 \u043F\u0440\u043E\u0434\u0430\u0436\u0438",
    header: ({ column }) => {
      return h(
        _sfc_main$a,
        {
          variant: "ghost",
          onClick: () => column.toggleSorting(column.getIsSorted() === "asc"),
          class: "text-center h-full w-full"
        },
        () => ["\u041E\u0431\u0449\u0438\u0435 \u043F\u0440\u043E\u0434\u0430\u0436\u0438", h(ArrowUpDown, { class: "ml-2 h-4 w-4" })]
      );
    },
    cell: ({ row }) => h("div", { class: "text-center" }, row.getValue("totalSales"))
  },
  // Вывески
  {
    accessorKey: "dealSales",
    ruName: "\u0412\u044B\u0432\u0435\u0441\u043A\u0438",
    header: ({ column }) => {
      return h(
        _sfc_main$a,
        {
          variant: "ghost",
          onClick: () => column.toggleSorting(column.getIsSorted() === "asc"),
          class: "text-center h-full w-full"
        },
        () => ["\u0412\u044B\u0432\u0435\u0441\u043A\u0438", h(ArrowUpDown, { class: "ml-2 h-4 w-4" })]
      );
    },
    cell: ({ row }) => h("div", { class: "text-center" }, row.getValue("dealSales"))
  },
  // Допы
  {
    accessorKey: "dopSales",
    ruName: "\u0414\u043E\u043F\u044B",
    header: ({ column }) => {
      return h(
        _sfc_main$a,
        {
          variant: "ghost",
          onClick: () => column.toggleSorting(column.getIsSorted() === "asc"),
          class: "text-center h-full w-full"
        },
        () => [
          "\u0414\u043E\u043F\u044B",
          h(ArrowUpDown, { class: "ml-2 h-4 w-4" })
        ]
      );
    },
    cell: ({ row }) => h("div", { class: "text-center" }, row.getValue("dopSales"))
  },
  // Средний чек
  {
    accessorKey: "averageBill",
    ruName: "\u0421\u0440\u0435\u0434\u043D\u0438\u0439 \u0447\u0435\u043A",
    header: ({ column }) => {
      return h(
        _sfc_main$a,
        {
          variant: "ghost",
          onClick: () => column.toggleSorting(column.getIsSorted() === "asc"),
          class: "text-center h-full w-full"
        },
        () => ["\u0421\u0440\u0435\u0434\u043D\u0438\u0439 \u0447\u0435\u043A", h(ArrowUpDown, { class: "ml-2 h-4 w-4" })]
      );
    },
    cell: ({ row }) => h("div", { class: "text-center" }, row.getValue("averageBill"))
  },
  // ДРР
  {
    accessorKey: "drr",
    ruName: "\u0414\u0420\u0420",
    header: ({ column }) => {
      return h(
        _sfc_main$a,
        {
          variant: "ghost",
          onClick: () => column.toggleSorting(column.getIsSorted() === "asc"),
          class: "text-center h-full w-full"
        },
        () => ["\u0414\u0420\u0420", h(ArrowUpDown, { class: "ml-2 h-4 w-4" })]
      );
    },
    cell: ({ row }) => h("div", { class: "text-center" }, row.getValue("drr"))
  },
  // Конверсия из заявки в продажу
  {
    accessorKey: "conversionDealsToCalls",
    ruName: "% \u0438\u0437 \u0437\u0430\u044F\u0432\u043A\u0438 \u0432 \u043F\u0440\u043E\u0434\u0430\u0436\u0443",
    header: ({ column }) => {
      return h(
        _sfc_main$a,
        {
          variant: "ghost",
          onClick: () => column.toggleSorting(column.getIsSorted() === "asc"),
          class: "text-center h-full w-full"
        },
        () => [
          "% \u0438\u0437 \u0437\u0430\u044F\u0432\u043A\u0438 \u0432 \u043F\u0440\u043E\u0434\u0430\u0436\u0443",
          h(ArrowUpDown, { class: "ml-2 h-4 w-4" })
        ]
      );
    },
    cell: ({ row }) => h(
      "div",
      { class: "text-center" },
      row.getValue("conversionDealsToCalls")
    )
  },
  // Общая зарплата
  {
    accessorKey: "totalSalary",
    ruName: "\u041E\u0431\u0449\u0430\u044F \u0437\u0430\u0440\u043F\u043B\u0430\u0442\u0430",
    header: ({ column }) => {
      return h(
        _sfc_main$a,
        {
          variant: "ghost",
          onClick: () => column.toggleSorting(column.getIsSorted() === "asc"),
          class: "text-center h-full w-full"
        },
        () => ["\u041E\u0431\u0449\u0430\u044F \u0437\u0430\u0440\u043F\u043B\u0430\u0442\u0430", h(ArrowUpDown, { class: "ml-2 h-4 w-4" })]
      );
    },
    cell: ({ row }) => h("div", { class: "text-center" }, row.getValue("totalSalary"))
  }
];
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
    const managersData = ref([
      {
        id: 0,
        fullName: "None",
        workSpace: "None",
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
        dealsInfo: 0,
        dopsInfo: 0,
        topBonus: 0,
        fired: false,
        isIntern: false
      }
    ]);
    const currentManager = ref({
      id: 0,
      fullName: "None",
      workSpace: "None",
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
      dealsInfo: 0,
      dopsInfo: 0,
      topBonus: 0,
      fired: false,
      isIntern: false
    });
    const mainInfo = ref([
      { label: "\u041F\u043B\u0430\u043D", value: "10000" }
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
      { label: "\u0417\u041F", value: "10000" }
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
          currentManager.value = data.users[0];
          getManagerData(((_a = currentManager.value) == null ? void 0 : _a.id) || 0);
          VkTopSalesManagersList.value = data.vkTop.topTotalSales;
          VkTopDopSalesManagersList.value = data.vkTop.topDopSales;
          VkTopDimmerSalesManagersList.value = data.vkTop.topDimmerSales;
          VkTopSalesWithoutDesignersList.value = data.vkTop.topSalesWithoutDesigners;
          VkTopConversionDayToDayList.value = data.vkTop.topConversionDayToDay;
          topListAvito.value = data.b2bTop;
        }
        calcTotals();
      } catch (e) {
        console.log(e);
      }
    };
    const getManagerData = (id) => {
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
      console.log(salaryCorrections);
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
          value: useMyFormatPrice(+(prevPeriodsDealsPays + prevPeriodsDopsPays).toFixed(2)) + "\u20BD"
        }
        // { label: 'Топ бонус', value: '10000' },
        // { label: 'Остатки с прошлых месяцов', value: '5000' },
        // { label: 'Выплаты', value: '5000' }, //подробнее?
        // { label: 'Остаток по выплатам', value: '5000' }, //подробнее?
      ];
    };
    const calcTotals = () => {
      const data = managersData.value;
      const totalSalary = managersData.value.reduce((a, b) => a + b.totalSalary, 0);
      const prevPeriodsDealsPays = managersData.value.reduce((a, b) => a + b.prevPeriodsDealsPays, 0);
      const pays = managersData.value.reduce((a, b) => a + b.pays, 0);
      const prevPeriodsDopsPays = managersData.value.reduce((a, b) => a + b.prevPeriodsDopsPays, 0);
      const salaryCorrectionMinus = managersData.value.reduce((a, b) => a + b.salaryCorrections.filter((c) => c.type === "\u0412\u044B\u0447\u0435\u0442").reduce((a2, b2) => a2 + b2.price, 0), 0);
      const salaryCorrectionPlus = managersData.value.reduce((a, b) => a + b.salaryCorrections.filter((s) => s.type === "\u041F\u0440\u0438\u0431\u0430\u0432\u043A\u0430").reduce((a2, b2) => a2 + b2.price, 0), 0);
      const salary = totalSalary + salaryCorrectionPlus - salaryCorrectionMinus + prevPeriodsDealsPays + prevPeriodsDopsPays;
      console.log(salary - pays);
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
      console.log(newPlan, managerId);
      managersData.value.find((m) => m.id === managerId).plan = newPlan;
      currentManager.value.plan = newPlan;
      managersData.value = [...managersData.value];
    };
    const deleteSalaryCorr = async (id) => {
      try {
        await $useApi.delete(`/salary-pay/correction/${id}`);
        currentManager.value.salaryCorrections = currentManager.value.salaryCorrections.filter((c) => c.id !== id);
        managersData.value = [...managersData.value];
        getManagerData(currentManager.value.id);
      } catch (e) {
        console.log(e);
      }
    };
    watch(period, async () => {
      await getDatas();
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_LayoutSidebar = _sfc_main$4;
      const _component_UiSheet = _sfc_main$5;
      const _component_UiSheetTrigger = _sfc_main$4$1;
      const _component_UiSheetContent = _sfc_main$3$1;
      const _component_UiSheetHeader = _sfc_main$2$1;
      const _component_UiSheetTitle = _sfc_main$1$1;
      const _component_UiSheetDescription = _sfc_main$6;
      const _component_MyDealsDealCardSheet = _sfc_main$3;
      const _component_UiCard = _sfc_main$3$2;
      const _component_UiCardHeader = _sfc_main$2$2;
      const _component_UiCardDescription = _sfc_main$7;
      const _component_UiCardTitle = _sfc_main$1$2;
      const _component_UiInput = _sfc_main$8;
      const _component_MyComercialDataTable = _sfc_main$2;
      const _component_UiCardContent = _sfc_main$1$3;
      const _component_MyManagersSetPlanModal = _sfc_main$9;
      const _component_MySalariesCorrectCreateModal = _sfc_main$1;
      const _component_UiButton = _sfc_main$a;
      const _component_UiSeparator = _sfc_main$b;
      const _component_UiCardFooter = _sfc_main$c;
      const _component_UiTabs = _sfc_main$2$3;
      const _component_UiTabsList = _sfc_main$d;
      const _component_UiTabsTrigger = _sfc_main$1$4;
      const _component_UiTabsContent = _sfc_main$e;
      const _component_UiTable = _sfc_main$5$1;
      const _component_UiTableCaption = _sfc_main$6$1;
      const _component_UiTableHeader = _sfc_main$f;
      const _component_UiTableRow = _sfc_main$2$4;
      const _component_UiTableHead = _sfc_main$1$5;
      const _component_UiTableBody = _sfc_main$4$2;
      const _component_UiTableCell = _sfc_main$3$3;
      const _component_MySalariesMopVkTopList = _sfc_main$g;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative h-screen hidden-scrollbar" }, _attrs))}><div class="w-full fixed z-[11]">`);
      _push(ssrRenderComponent(_component_LayoutSidebar, { page: "\u041C\u0435\u043D\u0435\u0434\u0436\u0435\u0440\u044B" }, null, _parent));
      _push(`</div><div class="h-[full] flex p-4 gap-4 mx-[auto] max-w-[2048px] pt-16">`);
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
      _push(`<div class="flex flex-col gap-2 min-w-[1050px] w-full"><div class="flex gap-2"><!--[-->`);
      ssrRenderList(unref(totalsInfo), (item) => {
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
      _push(`<!--]--></div><div class="w-[180px] mb-[-48px] z-[1]">`);
      _push(ssrRenderComponent(_component_UiInput, {
        modelValue: unref(period),
        "onUpdate:modelValue": ($event) => isRef(period) ? period.value = $event : null,
        type: "month",
        class: ""
      }, null, _parent));
      _push(`</div><div class="flex gap-2"><div class="max-w-[500px]">`);
      _push(ssrRenderComponent(_component_MyComercialDataTable, {
        columns: unref(managersDataColumns),
        data: unref(managersData),
        onManagerClicked: getManagerData
      }, null, _parent));
      _push(`</div><div class="min-w-[400px] h-full">`);
      _push(ssrRenderComponent(_component_UiCard, { class: "h-full rounded-md overflow-hidden" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UiCardHeader, { class: "bg-gray-100 mb-2" }, {
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
                        _push4(`${ssrInterpolate((_a = unref(currentManager)) == null ? void 0 : _a.workSpace)}${ssrInterpolate(unref(currentManager).isIntern ? "(\u0421\u0442\u0430\u0436\u0435\u0440)" : "")}`);
                      } else {
                        return [
                          createTextVNode(toDisplayString((_b = unref(currentManager)) == null ? void 0 : _b.workSpace) + toDisplayString(unref(currentManager).isIntern ? "(\u0421\u0442\u0430\u0436\u0435\u0440)" : ""), 1)
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
                          createTextVNode(toDisplayString((_a = unref(currentManager)) == null ? void 0 : _a.workSpace) + toDisplayString(unref(currentManager).isIntern ? "(\u0421\u0442\u0430\u0436\u0435\u0440)" : ""), 1)
                        ];
                      }),
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
                  _push3(`<div class="flex flex-col gap-5"${_scopeId2}><div${_scopeId2}><div class="font-semibold"${_scopeId2}>\u041E\u0441\u043D\u043E\u0432\u043D\u0430\u044F \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F</div><ul class="gap-1 text-gray-600"${_scopeId2}><div class="flex items-center"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_MyManagersSetPlanModal, {
                    key: unref(currentManager).id,
                    plan: unref(currentManager).plan,
                    period: unref(period),
                    "manager-id": unref(currentManager).id,
                    manager: unref(currentManager).fullName,
                    onIsPlanSet: (np) => handlePlanSet(np, unref(currentManager).id)
                  }, null, _parent3, _scopeId2));
                  _push3(`<span class="ml-2"${_scopeId2}>\u041F\u043B\u0430\u043D</span><span class="ml-auto"${_scopeId2}>${ssrInterpolate(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(unref(currentManager).plan) + "\u20BD")}</span></div><li class="flex items-center"${_scopeId2}><span class="text-muted-foreground"${_scopeId2}> \u041E\u0441\u0442\u0430\u0442\u043E\u043A \u0434\u043E \u043F\u043B\u0430\u043D\u0430 </span><span class="ml-auto"${_scopeId2}>${ssrInterpolate(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(
                    unref(currentManager).plan - unref(currentManager).totalSales
                  ) + "\u20BD")}</span></li><!--[-->`);
                  ssrRenderList(unref(mainInfo), (item, i) => {
                    _push3(`<li class="flex items-center"${_scopeId2}><span class="text-muted-foreground"${_scopeId2}>${ssrInterpolate(item.label)}</span><span class="ml-auto"${_scopeId2}>${ssrInterpolate(item.value)}</span></li>`);
                  });
                  _push3(`<!--]--></ul></div><div${_scopeId2}><div class="font-semibold"${_scopeId2}>\u041F\u043E\u043A\u0430\u0437\u0430\u0442\u0435\u043B\u0438</div><ul class="gap-1 text-gray-600"${_scopeId2}><!--[-->`);
                  ssrRenderList(unref(characteristicsInfo), (item, i) => {
                    _push3(`<li class="flex items-center justify-between"${_scopeId2}><span class="text-muted-foreground"${_scopeId2}>${ssrInterpolate(item.label)}</span><span${_scopeId2}>${ssrInterpolate(item.value)}</span></li>`);
                  });
                  _push3(`<!--]--></ul></div><div${_scopeId2}><div class="flex justify-between items-center mb-2"${_scopeId2}><div class="font-semibold"${_scopeId2}>\u0417\u0430\u0440\u043F\u043B\u0430\u0442\u0430</div>`);
                  _push3(ssrRenderComponent(_component_MySalariesCorrectCreateModal, {
                    "user-id": unref(currentManager).id,
                    onCorrectionCreated: (corr) => {
                      unref(currentManager).salaryCorrections.push(corr);
                      getManagerData(unref(currentManager).id);
                    }
                  }, null, _parent3, _scopeId2));
                  _push3(`</div><ul class="gap-1 text-gray-600"${_scopeId2}><!--[-->`);
                  ssrRenderList(unref(salaryInfo).slice(0, 3), (item, i) => {
                    _push3(`<li class="flex items-center w-full"${_scopeId2}><span class="text-muted-foreground mr-auto"${_scopeId2}>${ssrInterpolate(item.label)}</span><span${_scopeId2}>${ssrInterpolate(item.value)}</span></li>`);
                  });
                  _push3(`<!--]--><!--[-->`);
                  ssrRenderList(unref(currentManager).salaryCorrections, (corr) => {
                    _push3(`<li class="${ssrRenderClass([
                      "flex",
                      corr.type === "\u041F\u0440\u0438\u0431\u0430\u0432\u043A\u0430" ? "text-green-500" : "text-red-500"
                    ])}"${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_UiButton, {
                      class: "h-5 w-5 px-0 mr-1",
                      onClick: ($event) => deleteSalaryCorr(corr.id)
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(` - `);
                        } else {
                          return [
                            createTextVNode(" - ")
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                    _push3(`<span${_scopeId2}>${ssrInterpolate(corr.type)}</span><span class="ml-auto"${_scopeId2}>${ssrInterpolate(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(corr.price) + "\u20BD")}</span></li>`);
                  });
                  _push3(`<!--]-->`);
                  _push3(ssrRenderComponent(_component_UiSeparator, { class: "my-1" }, null, _parent3, _scopeId2));
                  _push3(`<!--[-->`);
                  ssrRenderList(unref(salaryInfo).slice(3), (item, i) => {
                    _push3(`<li class="flex items-center w-full"${_scopeId2}><span class="text-muted-foreground mr-auto"${_scopeId2}>${ssrInterpolate(item.label)}</span><span${_scopeId2}>${ssrInterpolate(item.value)}</span></li>`);
                  });
                  _push3(`<!--]--></ul></div></div>`);
                } else {
                  return [
                    createVNode("div", { class: "flex flex-col gap-5" }, [
                      createVNode("div", null, [
                        createVNode("div", { class: "font-semibold" }, "\u041E\u0441\u043D\u043E\u0432\u043D\u0430\u044F \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F"),
                        createVNode("ul", { class: "gap-1 text-gray-600" }, [
                          createVNode("div", { class: "flex items-center" }, [
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
                          createVNode("li", { class: "flex items-center" }, [
                            createVNode("span", { class: "text-muted-foreground" }, " \u041E\u0441\u0442\u0430\u0442\u043E\u043A \u0434\u043E \u043F\u043B\u0430\u043D\u0430 "),
                            createVNode("span", { class: "ml-auto" }, toDisplayString(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(
                              unref(currentManager).plan - unref(currentManager).totalSales
                            ) + "\u20BD"), 1)
                          ]),
                          (openBlock(true), createBlock(Fragment, null, renderList(unref(mainInfo), (item, i) => {
                            return openBlock(), createBlock("li", {
                              key: i,
                              class: "flex items-center"
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
                              class: "flex items-center justify-between"
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
                              unref(currentManager).salaryCorrections.push(corr);
                              getManagerData(unref(currentManager).id);
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
                          }), 128)),
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
                              createVNode("span", { class: "ml-auto" }, toDisplayString(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(corr.price) + "\u20BD"), 1)
                            ], 2);
                          }), 128)),
                          createVNode(_component_UiSeparator, { class: "my-1" }),
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
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UiCardFooter, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UiCardHeader, { class: "bg-gray-100 mb-2" }, {
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
                        createTextVNode(toDisplayString((_a = unref(currentManager)) == null ? void 0 : _a.workSpace) + toDisplayString(unref(currentManager).isIntern ? "(\u0421\u0442\u0430\u0436\u0435\u0440)" : ""), 1)
                      ];
                    }),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(_component_UiCardContent, null, {
                default: withCtx(() => [
                  createVNode("div", { class: "flex flex-col gap-5" }, [
                    createVNode("div", null, [
                      createVNode("div", { class: "font-semibold" }, "\u041E\u0441\u043D\u043E\u0432\u043D\u0430\u044F \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F"),
                      createVNode("ul", { class: "gap-1 text-gray-600" }, [
                        createVNode("div", { class: "flex items-center" }, [
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
                        createVNode("li", { class: "flex items-center" }, [
                          createVNode("span", { class: "text-muted-foreground" }, " \u041E\u0441\u0442\u0430\u0442\u043E\u043A \u0434\u043E \u043F\u043B\u0430\u043D\u0430 "),
                          createVNode("span", { class: "ml-auto" }, toDisplayString(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(
                            unref(currentManager).plan - unref(currentManager).totalSales
                          ) + "\u20BD"), 1)
                        ]),
                        (openBlock(true), createBlock(Fragment, null, renderList(unref(mainInfo), (item, i) => {
                          return openBlock(), createBlock("li", {
                            key: i,
                            class: "flex items-center"
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
                            class: "flex items-center justify-between"
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
                            unref(currentManager).salaryCorrections.push(corr);
                            getManagerData(unref(currentManager).id);
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
                        }), 128)),
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
                            createVNode("span", { class: "ml-auto" }, toDisplayString(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(corr.price) + "\u20BD"), 1)
                          ], 2);
                        }), 128)),
                        createVNode(_component_UiSeparator, { class: "my-1" }),
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
              }),
              createVNode(_component_UiCardFooter)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="w-full bg-white p-2 rounded-md">`);
      _push(ssrRenderComponent(_component_UiTabs, { "default-value": "deals" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UiTabsList, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UiTabsTrigger, { value: "deals" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` \u0417\u0430\u043A\u0430\u0437\u044B `);
                      } else {
                        return [
                          createTextVNode(" \u0417\u0430\u043A\u0430\u0437\u044B ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_UiTabsTrigger, { value: "dops" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` \u0414\u043E\u043F\u044B `);
                      } else {
                        return [
                          createTextVNode(" \u0414\u043E\u043F\u044B ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_UiTabsTrigger, { value: "dealsInfoPrevMounth" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` \u0417\u0430\u043A\u0430\u0437\u044B \u043F\u0440\u043E\u0448\u043B\u044B\u0435 \u043C\u0435\u0441\u044F\u0446\u0430 `);
                      } else {
                        return [
                          createTextVNode(" \u0417\u0430\u043A\u0430\u0437\u044B \u043F\u0440\u043E\u0448\u043B\u044B\u0435 \u043C\u0435\u0441\u044F\u0446\u0430 ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_UiTabsTrigger, { value: "dopsInfoPrevMounth" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` \u0414\u043E\u043F\u044B \u043F\u0440\u043E\u0448\u043B\u044B\u0435 \u043C\u0435\u0441\u044F\u0446\u0430 `);
                      } else {
                        return [
                          createTextVNode(" \u0414\u043E\u043F\u044B \u043F\u0440\u043E\u0448\u043B\u044B\u0435 \u043C\u0435\u0441\u044F\u0446\u0430 ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UiTabsTrigger, { value: "deals" }, {
                      default: withCtx(() => [
                        createTextVNode(" \u0417\u0430\u043A\u0430\u0437\u044B ")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_UiTabsTrigger, { value: "dops" }, {
                      default: withCtx(() => [
                        createTextVNode(" \u0414\u043E\u043F\u044B ")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_UiTabsTrigger, { value: "dealsInfoPrevMounth" }, {
                      default: withCtx(() => [
                        createTextVNode(" \u0417\u0430\u043A\u0430\u0437\u044B \u043F\u0440\u043E\u0448\u043B\u044B\u0435 \u043C\u0435\u0441\u044F\u0446\u0430 ")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_UiTabsTrigger, { value: "dopsInfoPrevMounth" }, {
                      default: withCtx(() => [
                        createTextVNode(" \u0414\u043E\u043F\u044B \u043F\u0440\u043E\u0448\u043B\u044B\u0435 \u043C\u0435\u0441\u044F\u0446\u0430 ")
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UiTabsContent, { value: "deals" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                var _a, _b, _c, _d;
                if (_push3) {
                  if ((_b = (_a = unref(currentManager)) == null ? void 0 : _a.dealsInfo) == null ? void 0 : _b.length) {
                    _push3(ssrRenderComponent(_component_UiTable, null, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_UiTableCaption, null, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`\u0421\u043F\u0438\u0441\u043E\u043A \u0437\u0430\u043A\u0430\u0437\u043E\u0432 \u043C\u0435\u043D\u0435\u0434\u0436\u0435\u0440\u0430`);
                              } else {
                                return [
                                  createTextVNode("\u0421\u043F\u0438\u0441\u043E\u043A \u0437\u0430\u043A\u0430\u0437\u043E\u0432 \u043C\u0435\u043D\u0435\u0434\u0436\u0435\u0440\u0430")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(_component_UiTableHeader, null, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(_component_UiTableRow, { class: "bg-gray-100" }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(ssrRenderComponent(_component_UiTableHead, { class: "text-left" }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(` \u0417\u0430\u043A\u0430\u0437 `);
                                          } else {
                                            return [
                                              createTextVNode(" \u0417\u0430\u043A\u0430\u0437 ")
                                            ];
                                          }
                                        }),
                                        _: 1
                                      }, _parent6, _scopeId5));
                                      _push6(ssrRenderComponent(_component_UiTableHead, { class: "text-center" }, {
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
                                            _push7(`\u0421\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C/\u0414\u043E\u043B\u044F`);
                                          } else {
                                            return [
                                              createTextVNode("\u0421\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C/\u0414\u043E\u043B\u044F")
                                            ];
                                          }
                                        }),
                                        _: 1
                                      }, _parent6, _scopeId5));
                                      _push6(ssrRenderComponent(_component_UiTableHead, { class: "text-center" }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`\u041E\u043F\u043B\u0430\u0447\u0435\u043D\u043E(\u0424\u0430\u043A\u0442)`);
                                          } else {
                                            return [
                                              createTextVNode("\u041E\u043F\u043B\u0430\u0447\u0435\u043D\u043E(\u0424\u0430\u043A\u0442)")
                                            ];
                                          }
                                        }),
                                        _: 1
                                      }, _parent6, _scopeId5));
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
                                            createTextVNode("\u0421\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C/\u0414\u043E\u043B\u044F")
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(_component_UiTableHead, { class: "text-center" }, {
                                          default: withCtx(() => [
                                            createTextVNode("\u041E\u043F\u043B\u0430\u0447\u0435\u043D\u043E(\u0424\u0430\u043A\u0442)")
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
                                          createTextVNode("\u0421\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C/\u0414\u043E\u043B\u044F")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_UiTableHead, { class: "text-center" }, {
                                        default: withCtx(() => [
                                          createTextVNode("\u041E\u043F\u043B\u0430\u0447\u0435\u043D\u043E(\u0424\u0430\u043A\u0442)")
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
                                ssrRenderList(unref(currentManager).dealsInfo, (deal, i) => {
                                  _push5(ssrRenderComponent(_component_UiTableRow, {
                                    key: i,
                                    class: "text-center whitespace-nowrap cursor-pointer",
                                    onClick: async () => await getDeal(deal.id)
                                  }, {
                                    default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                      if (_push6) {
                                        _push6(ssrRenderComponent(_component_UiTableCell, { class: "text-left" }, {
                                          default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                            if (_push7) {
                                              _push7(`${ssrInterpolate(deal.title)}`);
                                            } else {
                                              return [
                                                createTextVNode(toDisplayString(deal.title), 1)
                                              ];
                                            }
                                          }),
                                          _: 2
                                        }, _parent6, _scopeId5));
                                        _push6(ssrRenderComponent(_component_UiTableCell, { class: "font-medium" }, {
                                          default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                            if (_push7) {
                                              _push7(`${ssrInterpolate(("dateFormat" in _ctx ? _ctx.dateFormat : unref(dateFormat))(deal.saleDate))}`);
                                            } else {
                                              return [
                                                createTextVNode(toDisplayString(("dateFormat" in _ctx ? _ctx.dateFormat : unref(dateFormat))(deal.saleDate)), 1)
                                              ];
                                            }
                                          }),
                                          _: 2
                                        }, _parent6, _scopeId5));
                                        _push6(ssrRenderComponent(_component_UiTableCell, { class: "font-medium" }, {
                                          default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                            if (_push7) {
                                              _push7(`${ssrInterpolate(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(deal.dealPrice) + "\u20BD")}(${ssrInterpolate(deal.dealerPart)}%) `);
                                            } else {
                                              return [
                                                createTextVNode(toDisplayString(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(deal.dealPrice) + "\u20BD") + "(" + toDisplayString(deal.dealerPart) + "%) ", 1)
                                              ];
                                            }
                                          }),
                                          _: 2
                                        }, _parent6, _scopeId5));
                                        _push6(ssrRenderComponent(_component_UiTableCell, { class: "font-medium" }, {
                                          default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                            if (_push7) {
                                              _push7(`${ssrInterpolate(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(deal.paid) + "\u20BD")}`);
                                            } else {
                                              return [
                                                createTextVNode(toDisplayString(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(deal.paid) + "\u20BD"), 1)
                                              ];
                                            }
                                          }),
                                          _: 2
                                        }, _parent6, _scopeId5));
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
                                              createTextVNode(toDisplayString(("dateFormat" in _ctx ? _ctx.dateFormat : unref(dateFormat))(deal.saleDate)), 1)
                                            ]),
                                            _: 2
                                          }, 1024),
                                          createVNode(_component_UiTableCell, { class: "font-medium" }, {
                                            default: withCtx(() => [
                                              createTextVNode(toDisplayString(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(deal.dealPrice) + "\u20BD") + "(" + toDisplayString(deal.dealerPart) + "%) ", 1)
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
                                  }, _parent5, _scopeId4));
                                });
                                _push5(`<!--]-->`);
                                _push5(ssrRenderComponent(_component_UiTableRow, { class: "text-center font-bold" }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(ssrRenderComponent(_component_UiTableCell, { class: "text-left" }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(` \u0418\u0422\u041E\u0413\u041E(${ssrInterpolate(unref(currentManager).dealsInfo.length)}) `);
                                          } else {
                                            return [
                                              createTextVNode(" \u0418\u0422\u041E\u0413\u041E(" + toDisplayString(unref(currentManager).dealsInfo.length) + ") ", 1)
                                            ];
                                          }
                                        }),
                                        _: 1
                                      }, _parent6, _scopeId5));
                                      _push6(ssrRenderComponent(_component_UiTableCell, null, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`${ssrInterpolate(unref(period))}`);
                                          } else {
                                            return [
                                              createTextVNode(toDisplayString(unref(period)), 1)
                                            ];
                                          }
                                        }),
                                        _: 1
                                      }, _parent6, _scopeId5));
                                      _push6(ssrRenderComponent(_component_UiTableCell, null, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`${ssrInterpolate(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(
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
                                      }, _parent6, _scopeId5));
                                      _push6(ssrRenderComponent(_component_UiTableCell, { class: "text-center" }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`${ssrInterpolate(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(
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
                                      }, _parent6, _scopeId5));
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
                                }, _parent5, _scopeId4));
                              } else {
                                return [
                                  (openBlock(true), createBlock(Fragment, null, renderList(unref(currentManager).dealsInfo, (deal, i) => {
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
                                            createTextVNode(toDisplayString(("dateFormat" in _ctx ? _ctx.dateFormat : unref(dateFormat))(deal.saleDate)), 1)
                                          ]),
                                          _: 2
                                        }, 1024),
                                        createVNode(_component_UiTableCell, { class: "font-medium" }, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(deal.dealPrice) + "\u20BD") + "(" + toDisplayString(deal.dealerPart) + "%) ", 1)
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
                          }, _parent4, _scopeId3));
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
                                        createTextVNode("\u0421\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C/\u0414\u043E\u043B\u044F")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_UiTableHead, { class: "text-center" }, {
                                      default: withCtx(() => [
                                        createTextVNode("\u041E\u043F\u043B\u0430\u0447\u0435\u043D\u043E(\u0424\u0430\u043A\u0442)")
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
                                      createVNode(_component_UiTableCell, { class: "text-left" }, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(deal.title), 1)
                                        ]),
                                        _: 2
                                      }, 1024),
                                      createVNode(_component_UiTableCell, { class: "font-medium" }, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(("dateFormat" in _ctx ? _ctx.dateFormat : unref(dateFormat))(deal.saleDate)), 1)
                                        ]),
                                        _: 2
                                      }, 1024),
                                      createVNode(_component_UiTableCell, { class: "font-medium" }, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(deal.dealPrice) + "\u20BD") + "(" + toDisplayString(deal.dealerPart) + "%) ", 1)
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
                    }, _parent3, _scopeId2));
                  } else {
                    _push3(`<!---->`);
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
                                    createTextVNode("\u0421\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C/\u0414\u043E\u043B\u044F")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_UiTableHead, { class: "text-center" }, {
                                  default: withCtx(() => [
                                    createTextVNode("\u041E\u043F\u043B\u0430\u0447\u0435\u043D\u043E(\u0424\u0430\u043A\u0442)")
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
                                  createVNode(_component_UiTableCell, { class: "text-left" }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(deal.title), 1)
                                    ]),
                                    _: 2
                                  }, 1024),
                                  createVNode(_component_UiTableCell, { class: "font-medium" }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(("dateFormat" in _ctx ? _ctx.dateFormat : unref(dateFormat))(deal.saleDate)), 1)
                                    ]),
                                    _: 2
                                  }, 1024),
                                  createVNode(_component_UiTableCell, { class: "font-medium" }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(deal.dealPrice) + "\u20BD") + "(" + toDisplayString(deal.dealerPart) + "%) ", 1)
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
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UiTabsContent, { value: "dealsInfoPrevMounth" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                var _a, _b, _c, _d;
                if (_push3) {
                  if ((_b = (_a = unref(currentManager)) == null ? void 0 : _a.dealsInfoPrevMounth) == null ? void 0 : _b.length) {
                    _push3(ssrRenderComponent(_component_UiTable, null, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_UiTableCaption, null, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`\u0421\u043F\u0438\u0441\u043E\u043A \u0437\u0430\u043A\u0430\u0437\u043E\u0432 \u043C\u0435\u043D\u0435\u0434\u0436\u0435\u0440\u0430`);
                              } else {
                                return [
                                  createTextVNode("\u0421\u043F\u0438\u0441\u043E\u043A \u0437\u0430\u043A\u0430\u0437\u043E\u0432 \u043C\u0435\u043D\u0435\u0434\u0436\u0435\u0440\u0430")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(_component_UiTableHeader, null, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(_component_UiTableRow, { class: "bg-gray-100" }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(ssrRenderComponent(_component_UiTableHead, { class: "text-left" }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(` \u0417\u0430\u043A\u0430\u0437 `);
                                          } else {
                                            return [
                                              createTextVNode(" \u0417\u0430\u043A\u0430\u0437 ")
                                            ];
                                          }
                                        }),
                                        _: 1
                                      }, _parent6, _scopeId5));
                                      _push6(ssrRenderComponent(_component_UiTableHead, { class: "text-center" }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`\u0414\u043E\u043B\u044F(% \u043E\u0442 \u0441\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u0438)`);
                                          } else {
                                            return [
                                              createTextVNode("\u0414\u043E\u043B\u044F(% \u043E\u0442 \u0441\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u0438)")
                                            ];
                                          }
                                        }),
                                        _: 1
                                      }, _parent6, _scopeId5));
                                      _push6(ssrRenderComponent(_component_UiTableHead, { class: "text-center" }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`% \u0432 \u0417\u041F`);
                                          } else {
                                            return [
                                              createTextVNode("% \u0432 \u0417\u041F")
                                            ];
                                          }
                                        }),
                                        _: 1
                                      }, _parent6, _scopeId5));
                                      _push6(ssrRenderComponent(_component_UiTableHead, { class: "text-center" }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`\u041E\u043F\u043B\u0430\u0447\u0435\u043D\u043E(\u0424\u0430\u043A\u0442)`);
                                          } else {
                                            return [
                                              createTextVNode("\u041E\u043F\u043B\u0430\u0447\u0435\u043D\u043E(\u0424\u0430\u043A\u0442)")
                                            ];
                                          }
                                        }),
                                        _: 1
                                      }, _parent6, _scopeId5));
                                      _push6(ssrRenderComponent(_component_UiTableHead, { class: "text-center" }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`\u0412 \u0417\u041F`);
                                          } else {
                                            return [
                                              createTextVNode("\u0412 \u0417\u041F")
                                            ];
                                          }
                                        }),
                                        _: 1
                                      }, _parent6, _scopeId5));
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
                                            createTextVNode("\u0414\u043E\u043B\u044F(% \u043E\u0442 \u0441\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u0438)")
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(_component_UiTableHead, { class: "text-center" }, {
                                          default: withCtx(() => [
                                            createTextVNode("% \u0432 \u0417\u041F")
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(_component_UiTableHead, { class: "text-center" }, {
                                          default: withCtx(() => [
                                            createTextVNode("\u041E\u043F\u043B\u0430\u0447\u0435\u043D\u043E(\u0424\u0430\u043A\u0442)")
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
                                }, _parent5, _scopeId4));
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
                                          createTextVNode("\u0414\u043E\u043B\u044F(% \u043E\u0442 \u0441\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u0438)")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_UiTableHead, { class: "text-center" }, {
                                        default: withCtx(() => [
                                          createTextVNode("% \u0432 \u0417\u041F")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_UiTableHead, { class: "text-center" }, {
                                        default: withCtx(() => [
                                          createTextVNode("\u041E\u043F\u043B\u0430\u0447\u0435\u043D\u043E(\u0424\u0430\u043A\u0442)")
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
                          }, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(_component_UiTableBody, null, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`<!--[-->`);
                                ssrRenderList(unref(currentManager).dealsInfoPrevMounth, (deal, i) => {
                                  _push5(ssrRenderComponent(_component_UiTableRow, {
                                    key: i,
                                    class: "text-center whitespace-nowrap cursor-pointer",
                                    onClick: async () => await getDeal(deal.id)
                                  }, {
                                    default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                      if (_push6) {
                                        _push6(ssrRenderComponent(_component_UiTableCell, { class: "text-left" }, {
                                          default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                            if (_push7) {
                                              _push7(`${ssrInterpolate(deal.title)}`);
                                            } else {
                                              return [
                                                createTextVNode(toDisplayString(deal.title), 1)
                                              ];
                                            }
                                          }),
                                          _: 2
                                        }, _parent6, _scopeId5));
                                        _push6(ssrRenderComponent(_component_UiTableCell, { class: "font-medium" }, {
                                          default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                            if (_push7) {
                                              _push7(`${ssrInterpolate(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(deal.dealerPrice) + "\u20BD")}(${ssrInterpolate(deal.dealerPart)}% \u043E\u0442 ${ssrInterpolate(deal.dealPrice)}) `);
                                            } else {
                                              return [
                                                createTextVNode(toDisplayString(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(deal.dealerPrice) + "\u20BD") + "(" + toDisplayString(deal.dealerPart) + "% \u043E\u0442 " + toDisplayString(deal.dealPrice) + ") ", 1)
                                              ];
                                            }
                                          }),
                                          _: 2
                                        }, _parent6, _scopeId5));
                                        _push6(ssrRenderComponent(_component_UiTableCell, { class: "font-medium" }, {
                                          default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                            if (_push7) {
                                              _push7(`${ssrInterpolate((deal.bonusPercentage * 100).toFixed(2))}% `);
                                            } else {
                                              return [
                                                createTextVNode(toDisplayString((deal.bonusPercentage * 100).toFixed(2)) + "% ", 1)
                                              ];
                                            }
                                          }),
                                          _: 2
                                        }, _parent6, _scopeId5));
                                        _push6(ssrRenderComponent(_component_UiTableCell, { class: "font-medium" }, {
                                          default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                            if (_push7) {
                                              _push7(`${ssrInterpolate(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(deal.paid) + "\u20BD")}`);
                                            } else {
                                              return [
                                                createTextVNode(toDisplayString(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(deal.paid) + "\u20BD"), 1)
                                              ];
                                            }
                                          }),
                                          _: 2
                                        }, _parent6, _scopeId5));
                                        _push6(ssrRenderComponent(_component_UiTableCell, { class: "font-medium" }, {
                                          default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                            if (_push7) {
                                              _push7(`${ssrInterpolate(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(+deal.toSalary.toFixed(2)) + "\u20BD")}`);
                                            } else {
                                              return [
                                                createTextVNode(toDisplayString(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(+deal.toSalary.toFixed(2)) + "\u20BD"), 1)
                                              ];
                                            }
                                          }),
                                          _: 2
                                        }, _parent6, _scopeId5));
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
                                              createTextVNode(toDisplayString(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(deal.dealerPrice) + "\u20BD") + "(" + toDisplayString(deal.dealerPart) + "% \u043E\u0442 " + toDisplayString(deal.dealPrice) + ") ", 1)
                                            ]),
                                            _: 2
                                          }, 1024),
                                          createVNode(_component_UiTableCell, { class: "font-medium" }, {
                                            default: withCtx(() => [
                                              createTextVNode(toDisplayString((deal.bonusPercentage * 100).toFixed(2)) + "% ", 1)
                                            ]),
                                            _: 2
                                          }, 1024),
                                          createVNode(_component_UiTableCell, { class: "font-medium" }, {
                                            default: withCtx(() => [
                                              createTextVNode(toDisplayString(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(deal.paid) + "\u20BD"), 1)
                                            ]),
                                            _: 2
                                          }, 1024),
                                          createVNode(_component_UiTableCell, { class: "font-medium" }, {
                                            default: withCtx(() => [
                                              createTextVNode(toDisplayString(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(+deal.toSalary.toFixed(2)) + "\u20BD"), 1)
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
                                _push5(ssrRenderComponent(_component_UiTableRow, { class: "text-center font-bold" }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(ssrRenderComponent(_component_UiTableCell, { class: "text-left" }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(` \u0418\u0422\u041E\u0413\u041E(${ssrInterpolate(unref(currentManager).dealsInfoPrevMounth.length)}) `);
                                          } else {
                                            return [
                                              createTextVNode(" \u0418\u0422\u041E\u0413\u041E(" + toDisplayString(unref(currentManager).dealsInfoPrevMounth.length) + ") ", 1)
                                            ];
                                          }
                                        }),
                                        _: 1
                                      }, _parent6, _scopeId5));
                                      _push6(ssrRenderComponent(_component_UiTableCell, null, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`${ssrInterpolate(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(
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
                                      }, _parent6, _scopeId5));
                                      _push6(ssrRenderComponent(_component_UiTableCell, { class: "text-center" }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`% `);
                                          } else {
                                            return [
                                              createTextVNode("% ")
                                            ];
                                          }
                                        }),
                                        _: 1
                                      }, _parent6, _scopeId5));
                                      _push6(ssrRenderComponent(_component_UiTableCell, { class: "text-center" }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`${ssrInterpolate(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(
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
                                      }, _parent6, _scopeId5));
                                      _push6(ssrRenderComponent(_component_UiTableCell, { class: "text-center" }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`${ssrInterpolate(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(
                                              +unref(currentManager).dealsInfoPrevMounth.reduce((a, b) => a + b.toSalary, 0).toFixed(2)
                                            ) + "\u20BD")}`);
                                          } else {
                                            return [
                                              createTextVNode(toDisplayString(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(
                                                +unref(currentManager).dealsInfoPrevMounth.reduce((a, b) => a + b.toSalary, 0).toFixed(2)
                                              ) + "\u20BD"), 1)
                                            ];
                                          }
                                        }),
                                        _: 1
                                      }, _parent6, _scopeId5));
                                    } else {
                                      return [
                                        createVNode(_component_UiTableCell, { class: "text-left" }, {
                                          default: withCtx(() => [
                                            createTextVNode(" \u0418\u0422\u041E\u0413\u041E(" + toDisplayString(unref(currentManager).dealsInfoPrevMounth.length) + ") ", 1)
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
                                            createTextVNode("% ")
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
                                            createTextVNode(toDisplayString(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(
                                              +unref(currentManager).dealsInfoPrevMounth.reduce((a, b) => a + b.toSalary, 0).toFixed(2)
                                            ) + "\u20BD"), 1)
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
                                            createTextVNode(toDisplayString(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(deal.dealerPrice) + "\u20BD") + "(" + toDisplayString(deal.dealerPart) + "% \u043E\u0442 " + toDisplayString(deal.dealPrice) + ") ", 1)
                                          ]),
                                          _: 2
                                        }, 1024),
                                        createVNode(_component_UiTableCell, { class: "font-medium" }, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString((deal.bonusPercentage * 100).toFixed(2)) + "% ", 1)
                                          ]),
                                          _: 2
                                        }, 1024),
                                        createVNode(_component_UiTableCell, { class: "font-medium" }, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(deal.paid) + "\u20BD"), 1)
                                          ]),
                                          _: 2
                                        }, 1024),
                                        createVNode(_component_UiTableCell, { class: "font-medium" }, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(+deal.toSalary.toFixed(2)) + "\u20BD"), 1)
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
                                          createTextVNode(" \u0418\u0422\u041E\u0413\u041E(" + toDisplayString(unref(currentManager).dealsInfoPrevMounth.length) + ") ", 1)
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
                                          createTextVNode("% ")
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
                                          createTextVNode(toDisplayString(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(
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
                          }, _parent4, _scopeId3));
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
                                        createTextVNode("\u0414\u043E\u043B\u044F(% \u043E\u0442 \u0441\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u0438)")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_UiTableHead, { class: "text-center" }, {
                                      default: withCtx(() => [
                                        createTextVNode("% \u0432 \u0417\u041F")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_UiTableHead, { class: "text-center" }, {
                                      default: withCtx(() => [
                                        createTextVNode("\u041E\u043F\u043B\u0430\u0447\u0435\u043D\u043E(\u0424\u0430\u043A\u0442)")
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
                                          createTextVNode(toDisplayString(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(deal.dealerPrice) + "\u20BD") + "(" + toDisplayString(deal.dealerPart) + "% \u043E\u0442 " + toDisplayString(deal.dealPrice) + ") ", 1)
                                        ]),
                                        _: 2
                                      }, 1024),
                                      createVNode(_component_UiTableCell, { class: "font-medium" }, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString((deal.bonusPercentage * 100).toFixed(2)) + "% ", 1)
                                        ]),
                                        _: 2
                                      }, 1024),
                                      createVNode(_component_UiTableCell, { class: "font-medium" }, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(deal.paid) + "\u20BD"), 1)
                                        ]),
                                        _: 2
                                      }, 1024),
                                      createVNode(_component_UiTableCell, { class: "font-medium" }, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(+deal.toSalary.toFixed(2)) + "\u20BD"), 1)
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
                                        createTextVNode(" \u0418\u0422\u041E\u0413\u041E(" + toDisplayString(unref(currentManager).dealsInfoPrevMounth.length) + ") ", 1)
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
                                        createTextVNode("% ")
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
                                        createTextVNode(toDisplayString(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(
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
                    }, _parent3, _scopeId2));
                  } else {
                    _push3(`<!---->`);
                  }
                } else {
                  return [
                    ((_d = (_c = unref(currentManager)) == null ? void 0 : _c.dealsInfoPrevMounth) == null ? void 0 : _d.length) ? (openBlock(), createBlock(_component_UiTable, { key: 0 }, {
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
                                    createTextVNode("\u0414\u043E\u043B\u044F(% \u043E\u0442 \u0441\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u0438)")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_UiTableHead, { class: "text-center" }, {
                                  default: withCtx(() => [
                                    createTextVNode("% \u0432 \u0417\u041F")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_UiTableHead, { class: "text-center" }, {
                                  default: withCtx(() => [
                                    createTextVNode("\u041E\u043F\u043B\u0430\u0447\u0435\u043D\u043E(\u0424\u0430\u043A\u0442)")
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
                                      createTextVNode(toDisplayString(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(deal.dealerPrice) + "\u20BD") + "(" + toDisplayString(deal.dealerPart) + "% \u043E\u0442 " + toDisplayString(deal.dealPrice) + ") ", 1)
                                    ]),
                                    _: 2
                                  }, 1024),
                                  createVNode(_component_UiTableCell, { class: "font-medium" }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString((deal.bonusPercentage * 100).toFixed(2)) + "% ", 1)
                                    ]),
                                    _: 2
                                  }, 1024),
                                  createVNode(_component_UiTableCell, { class: "font-medium" }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(deal.paid) + "\u20BD"), 1)
                                    ]),
                                    _: 2
                                  }, 1024),
                                  createVNode(_component_UiTableCell, { class: "font-medium" }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(+deal.toSalary.toFixed(2)) + "\u20BD"), 1)
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
                                    createTextVNode(" \u0418\u0422\u041E\u0413\u041E(" + toDisplayString(unref(currentManager).dealsInfoPrevMounth.length) + ") ", 1)
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
                                    createTextVNode("% ")
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
                                    createTextVNode(toDisplayString(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(
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
                    })) : createCommentVNode("", true)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UiTabsContent, { value: "dops" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                var _a, _b, _c, _d;
                if (_push3) {
                  if ((_b = (_a = unref(currentManager)) == null ? void 0 : _a.dopsInfo) == null ? void 0 : _b.length) {
                    _push3(ssrRenderComponent(_component_UiTable, null, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_UiTableCaption, null, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`\u0421\u043F\u0438\u0441\u043E\u043A \u0434\u043E\u043F.\u043F\u0440\u043E\u0434\u0430\u0436 \u043C\u0435\u043D\u0435\u0434\u0436\u0435\u0440\u0430`);
                              } else {
                                return [
                                  createTextVNode("\u0421\u043F\u0438\u0441\u043E\u043A \u0434\u043E\u043F.\u043F\u0440\u043E\u0434\u0430\u0436 \u043C\u0435\u043D\u0435\u0434\u0436\u0435\u0440\u0430")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(_component_UiTableHeader, null, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(_component_UiTableRow, { class: "bg-gray-100" }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(ssrRenderComponent(_component_UiTableHead, { class: "text-left" }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(` \u0414\u043E\u043F `);
                                          } else {
                                            return [
                                              createTextVNode(" \u0414\u043E\u043F ")
                                            ];
                                          }
                                        }),
                                        _: 1
                                      }, _parent6, _scopeId5));
                                      _push6(ssrRenderComponent(_component_UiTableHead, { class: "text-center" }, {
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
                                            _push7(`\u0421\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C`);
                                          } else {
                                            return [
                                              createTextVNode("\u0421\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C")
                                            ];
                                          }
                                        }),
                                        _: 1
                                      }, _parent6, _scopeId5));
                                      _push6(ssrRenderComponent(_component_UiTableHead, { class: "text-center" }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`\u041E\u043F\u043B\u0430\u0447\u0435\u043D\u043E(\u0424\u0430\u043A\u0442)`);
                                          } else {
                                            return [
                                              createTextVNode("\u041E\u043F\u043B\u0430\u0447\u0435\u043D\u043E(\u0424\u0430\u043A\u0442)")
                                            ];
                                          }
                                        }),
                                        _: 1
                                      }, _parent6, _scopeId5));
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
                                            createTextVNode("\u041E\u043F\u043B\u0430\u0447\u0435\u043D\u043E(\u0424\u0430\u043A\u0442)")
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
                                          createTextVNode("\u041E\u043F\u043B\u0430\u0447\u0435\u043D\u043E(\u0424\u0430\u043A\u0442)")
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
                                ssrRenderList(unref(currentManager).dopsInfo, (dop, i) => {
                                  _push5(ssrRenderComponent(_component_UiTableRow, {
                                    key: i,
                                    class: "whitespace-nowrap text-center cursor-pointer",
                                    onClick: async () => await getDeal(dop.dealId)
                                  }, {
                                    default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                      if (_push6) {
                                        _push6(ssrRenderComponent(_component_UiTableCell, { class: "text-left" }, {
                                          default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                            if (_push7) {
                                              _push7(`${ssrInterpolate(dop.dealTitle)}(${ssrInterpolate(dop.title)}) `);
                                            } else {
                                              return [
                                                createTextVNode(toDisplayString(dop.dealTitle) + "(" + toDisplayString(dop.title) + ") ", 1)
                                              ];
                                            }
                                          }),
                                          _: 2
                                        }, _parent6, _scopeId5));
                                        _push6(ssrRenderComponent(_component_UiTableCell, { class: "font-medium" }, {
                                          default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                            if (_push7) {
                                              _push7(`${ssrInterpolate(("dateFormat" in _ctx ? _ctx.dateFormat : unref(dateFormat))(dop.saleDate))}`);
                                            } else {
                                              return [
                                                createTextVNode(toDisplayString(("dateFormat" in _ctx ? _ctx.dateFormat : unref(dateFormat))(dop.saleDate)), 1)
                                              ];
                                            }
                                          }),
                                          _: 2
                                        }, _parent6, _scopeId5));
                                        _push6(ssrRenderComponent(_component_UiTableCell, { class: "font-medium" }, {
                                          default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                            if (_push7) {
                                              _push7(`${ssrInterpolate(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(dop.dopPrice) + "\u20BD")}`);
                                            } else {
                                              return [
                                                createTextVNode(toDisplayString(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(dop.dopPrice) + "\u20BD"), 1)
                                              ];
                                            }
                                          }),
                                          _: 2
                                        }, _parent6, _scopeId5));
                                        _push6(ssrRenderComponent(_component_UiTableCell, { class: "font-medium" }, {
                                          default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                            if (_push7) {
                                              _push7(`${ssrInterpolate(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(dop.paid) + "\u20BD")}`);
                                            } else {
                                              return [
                                                createTextVNode(toDisplayString(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(dop.paid) + "\u20BD"), 1)
                                              ];
                                            }
                                          }),
                                          _: 2
                                        }, _parent6, _scopeId5));
                                      } else {
                                        return [
                                          createVNode(_component_UiTableCell, { class: "text-left" }, {
                                            default: withCtx(() => [
                                              createTextVNode(toDisplayString(dop.dealTitle) + "(" + toDisplayString(dop.title) + ") ", 1)
                                            ]),
                                            _: 2
                                          }, 1024),
                                          createVNode(_component_UiTableCell, { class: "font-medium" }, {
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
                                  }, _parent5, _scopeId4));
                                });
                                _push5(`<!--]-->`);
                                _push5(ssrRenderComponent(_component_UiTableRow, { class: "text-center font-bold" }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(ssrRenderComponent(_component_UiTableCell, { class: "whitespace-nowrap text-left" }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(` \u0418\u0422\u041E\u0413\u041E(${ssrInterpolate(unref(currentManager).dopsInfo.length)}) `);
                                          } else {
                                            return [
                                              createTextVNode(" \u0418\u0422\u041E\u0413\u041E(" + toDisplayString(unref(currentManager).dopsInfo.length) + ") ", 1)
                                            ];
                                          }
                                        }),
                                        _: 1
                                      }, _parent6, _scopeId5));
                                      _push6(ssrRenderComponent(_component_UiTableCell, null, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`${ssrInterpolate(unref(period))}`);
                                          } else {
                                            return [
                                              createTextVNode(toDisplayString(unref(period)), 1)
                                            ];
                                          }
                                        }),
                                        _: 1
                                      }, _parent6, _scopeId5));
                                      _push6(ssrRenderComponent(_component_UiTableCell, null, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`${ssrInterpolate(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(
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
                                      }, _parent6, _scopeId5));
                                      _push6(ssrRenderComponent(_component_UiTableCell, null, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`${ssrInterpolate(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(
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
                                      }, _parent6, _scopeId5));
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
                                }, _parent5, _scopeId4));
                              } else {
                                return [
                                  (openBlock(true), createBlock(Fragment, null, renderList(unref(currentManager).dopsInfo, (dop, i) => {
                                    return openBlock(), createBlock(_component_UiTableRow, {
                                      key: i,
                                      class: "whitespace-nowrap text-center cursor-pointer",
                                      onClick: async () => await getDeal(dop.dealId)
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(_component_UiTableCell, { class: "text-left" }, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(dop.dealTitle) + "(" + toDisplayString(dop.title) + ") ", 1)
                                          ]),
                                          _: 2
                                        }, 1024),
                                        createVNode(_component_UiTableCell, { class: "font-medium" }, {
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
                          }, _parent4, _scopeId3));
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
                                        createTextVNode("\u041E\u043F\u043B\u0430\u0447\u0435\u043D\u043E(\u0424\u0430\u043A\u0442)")
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
                                      createVNode(_component_UiTableCell, { class: "text-left" }, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(dop.dealTitle) + "(" + toDisplayString(dop.title) + ") ", 1)
                                        ]),
                                        _: 2
                                      }, 1024),
                                      createVNode(_component_UiTableCell, { class: "font-medium" }, {
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
                    }, _parent3, _scopeId2));
                  } else {
                    _push3(`<!---->`);
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
                                    createTextVNode("\u041E\u043F\u043B\u0430\u0447\u0435\u043D\u043E(\u0424\u0430\u043A\u0442)")
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
                                  createVNode(_component_UiTableCell, { class: "text-left" }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(dop.dealTitle) + "(" + toDisplayString(dop.title) + ") ", 1)
                                    ]),
                                    _: 2
                                  }, 1024),
                                  createVNode(_component_UiTableCell, { class: "font-medium" }, {
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
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UiTabsContent, { value: "dopsInfoPrevMounth" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                var _a, _b, _c, _d;
                if (_push3) {
                  if ((_b = (_a = unref(currentManager)) == null ? void 0 : _a.dopsInfoPrevMounth) == null ? void 0 : _b.length) {
                    _push3(ssrRenderComponent(_component_UiTable, null, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_UiTableCaption, null, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`\u0421\u043F\u0438\u0441\u043E\u043A \u0434\u043E\u043F.\u043F\u0440\u043E\u0434\u0430\u0436 \u043C\u0435\u043D\u0435\u0434\u0436\u0435\u0440\u0430`);
                              } else {
                                return [
                                  createTextVNode("\u0421\u043F\u0438\u0441\u043E\u043A \u0434\u043E\u043F.\u043F\u0440\u043E\u0434\u0430\u0436 \u043C\u0435\u043D\u0435\u0434\u0436\u0435\u0440\u0430")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(_component_UiTableHeader, null, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(_component_UiTableRow, { class: "bg-gray-100" }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(ssrRenderComponent(_component_UiTableHead, { class: "text-left" }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(` \u0414\u043E\u043F `);
                                          } else {
                                            return [
                                              createTextVNode(" \u0414\u043E\u043F ")
                                            ];
                                          }
                                        }),
                                        _: 1
                                      }, _parent6, _scopeId5));
                                      _push6(ssrRenderComponent(_component_UiTableHead, { class: "text-center" }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`\u0421\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C`);
                                          } else {
                                            return [
                                              createTextVNode("\u0421\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C")
                                            ];
                                          }
                                        }),
                                        _: 1
                                      }, _parent6, _scopeId5));
                                      _push6(ssrRenderComponent(_component_UiTableHead, { class: "text-center" }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`% \u0432 \u0417\u041F`);
                                          } else {
                                            return [
                                              createTextVNode("% \u0432 \u0417\u041F")
                                            ];
                                          }
                                        }),
                                        _: 1
                                      }, _parent6, _scopeId5));
                                      _push6(ssrRenderComponent(_component_UiTableHead, { class: "text-center" }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`\u041E\u043F\u043B\u0430\u0447\u0435\u043D\u043E(\u0424\u0430\u043A\u0442)`);
                                          } else {
                                            return [
                                              createTextVNode("\u041E\u043F\u043B\u0430\u0447\u0435\u043D\u043E(\u0424\u0430\u043A\u0442)")
                                            ];
                                          }
                                        }),
                                        _: 1
                                      }, _parent6, _scopeId5));
                                      _push6(ssrRenderComponent(_component_UiTableHead, { class: "text-center" }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`\u0412 \u0417\u041F`);
                                          } else {
                                            return [
                                              createTextVNode("\u0412 \u0417\u041F")
                                            ];
                                          }
                                        }),
                                        _: 1
                                      }, _parent6, _scopeId5));
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
                                            createTextVNode("\u0421\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C")
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(_component_UiTableHead, { class: "text-center" }, {
                                          default: withCtx(() => [
                                            createTextVNode("% \u0432 \u0417\u041F")
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(_component_UiTableHead, { class: "text-center" }, {
                                          default: withCtx(() => [
                                            createTextVNode("\u041E\u043F\u043B\u0430\u0447\u0435\u043D\u043E(\u0424\u0430\u043A\u0442)")
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
                                }, _parent5, _scopeId4));
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
                                          createTextVNode("\u0421\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_UiTableHead, { class: "text-center" }, {
                                        default: withCtx(() => [
                                          createTextVNode("% \u0432 \u0417\u041F")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_UiTableHead, { class: "text-center" }, {
                                        default: withCtx(() => [
                                          createTextVNode("\u041E\u043F\u043B\u0430\u0447\u0435\u043D\u043E(\u0424\u0430\u043A\u0442)")
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
                          }, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(_component_UiTableBody, null, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`<!--[-->`);
                                ssrRenderList(unref(currentManager).dopsInfoPrevMounth, (dop, i) => {
                                  _push5(ssrRenderComponent(_component_UiTableRow, {
                                    key: i,
                                    class: "whitespace-nowrap text-center cursor-pointer",
                                    onClick: async () => await getDeal(dop.dealId)
                                  }, {
                                    default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                      if (_push6) {
                                        _push6(ssrRenderComponent(_component_UiTableCell, { class: "text-left" }, {
                                          default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                            if (_push7) {
                                              _push7(`${ssrInterpolate(dop.dealTitle)}(${ssrInterpolate(dop.title)}) `);
                                            } else {
                                              return [
                                                createTextVNode(toDisplayString(dop.dealTitle) + "(" + toDisplayString(dop.title) + ") ", 1)
                                              ];
                                            }
                                          }),
                                          _: 2
                                        }, _parent6, _scopeId5));
                                        _push6(ssrRenderComponent(_component_UiTableCell, { class: "font-medium" }, {
                                          default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                            if (_push7) {
                                              _push7(`${ssrInterpolate(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(dop.dopPrice) + "\u20BD")}`);
                                            } else {
                                              return [
                                                createTextVNode(toDisplayString(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(dop.dopPrice) + "\u20BD"), 1)
                                              ];
                                            }
                                          }),
                                          _: 2
                                        }, _parent6, _scopeId5));
                                        _push6(ssrRenderComponent(_component_UiTableCell, { class: "font-medium" }, {
                                          default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                            if (_push7) {
                                              _push7(`${ssrInterpolate((dop.bonusPercentage * 100).toFixed(2))}% `);
                                            } else {
                                              return [
                                                createTextVNode(toDisplayString((dop.bonusPercentage * 100).toFixed(2)) + "% ", 1)
                                              ];
                                            }
                                          }),
                                          _: 2
                                        }, _parent6, _scopeId5));
                                        _push6(ssrRenderComponent(_component_UiTableCell, { class: "font-medium" }, {
                                          default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                            if (_push7) {
                                              _push7(`${ssrInterpolate(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(dop.paid) + "\u20BD")}`);
                                            } else {
                                              return [
                                                createTextVNode(toDisplayString(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(dop.paid) + "\u20BD"), 1)
                                              ];
                                            }
                                          }),
                                          _: 2
                                        }, _parent6, _scopeId5));
                                        _push6(ssrRenderComponent(_component_UiTableCell, { class: "font-medium" }, {
                                          default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                            if (_push7) {
                                              _push7(`${ssrInterpolate(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(+dop.toSalary.toFixed(2)) + "\u20BD")}`);
                                            } else {
                                              return [
                                                createTextVNode(toDisplayString(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(+dop.toSalary.toFixed(2)) + "\u20BD"), 1)
                                              ];
                                            }
                                          }),
                                          _: 2
                                        }, _parent6, _scopeId5));
                                      } else {
                                        return [
                                          createVNode(_component_UiTableCell, { class: "text-left" }, {
                                            default: withCtx(() => [
                                              createTextVNode(toDisplayString(dop.dealTitle) + "(" + toDisplayString(dop.title) + ") ", 1)
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
                                              createTextVNode(toDisplayString((dop.bonusPercentage * 100).toFixed(2)) + "% ", 1)
                                            ]),
                                            _: 2
                                          }, 1024),
                                          createVNode(_component_UiTableCell, { class: "font-medium" }, {
                                            default: withCtx(() => [
                                              createTextVNode(toDisplayString(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(dop.paid) + "\u20BD"), 1)
                                            ]),
                                            _: 2
                                          }, 1024),
                                          createVNode(_component_UiTableCell, { class: "font-medium" }, {
                                            default: withCtx(() => [
                                              createTextVNode(toDisplayString(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(+dop.toSalary.toFixed(2)) + "\u20BD"), 1)
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
                                _push5(ssrRenderComponent(_component_UiTableRow, { class: "text-center font-bold" }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(ssrRenderComponent(_component_UiTableCell, { class: "whitespace-nowrap text-left" }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(` \u0418\u0422\u041E\u0413\u041E(${ssrInterpolate(unref(currentManager).dopsInfoPrevMounth.length)}) `);
                                          } else {
                                            return [
                                              createTextVNode(" \u0418\u0422\u041E\u0413\u041E(" + toDisplayString(unref(currentManager).dopsInfoPrevMounth.length) + ") ", 1)
                                            ];
                                          }
                                        }),
                                        _: 1
                                      }, _parent6, _scopeId5));
                                      _push6(ssrRenderComponent(_component_UiTableCell, null, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`${ssrInterpolate(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(
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
                                      }, _parent6, _scopeId5));
                                      _push6(ssrRenderComponent(_component_UiTableCell, null, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`% `);
                                          } else {
                                            return [
                                              createTextVNode("% ")
                                            ];
                                          }
                                        }),
                                        _: 1
                                      }, _parent6, _scopeId5));
                                      _push6(ssrRenderComponent(_component_UiTableCell, null, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`${ssrInterpolate(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(
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
                                      }, _parent6, _scopeId5));
                                      _push6(ssrRenderComponent(_component_UiTableCell, { class: "text-center" }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`${ssrInterpolate(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(
                                              +unref(currentManager).dopsInfoPrevMounth.reduce((a, b) => a + b.toSalary, 0).toFixed(2)
                                            ) + "\u20BD")}`);
                                          } else {
                                            return [
                                              createTextVNode(toDisplayString(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(
                                                +unref(currentManager).dopsInfoPrevMounth.reduce((a, b) => a + b.toSalary, 0).toFixed(2)
                                              ) + "\u20BD"), 1)
                                            ];
                                          }
                                        }),
                                        _: 1
                                      }, _parent6, _scopeId5));
                                    } else {
                                      return [
                                        createVNode(_component_UiTableCell, { class: "whitespace-nowrap text-left" }, {
                                          default: withCtx(() => [
                                            createTextVNode(" \u0418\u0422\u041E\u0413\u041E(" + toDisplayString(unref(currentManager).dopsInfoPrevMounth.length) + ") ", 1)
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
                                            createTextVNode("% ")
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
                                            createTextVNode(toDisplayString(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(
                                              +unref(currentManager).dopsInfoPrevMounth.reduce((a, b) => a + b.toSalary, 0).toFixed(2)
                                            ) + "\u20BD"), 1)
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
                                  (openBlock(true), createBlock(Fragment, null, renderList(unref(currentManager).dopsInfoPrevMounth, (dop, i) => {
                                    return openBlock(), createBlock(_component_UiTableRow, {
                                      key: i,
                                      class: "whitespace-nowrap text-center cursor-pointer",
                                      onClick: async () => await getDeal(dop.dealId)
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(_component_UiTableCell, { class: "text-left" }, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(dop.dealTitle) + "(" + toDisplayString(dop.title) + ") ", 1)
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
                                            createTextVNode(toDisplayString((dop.bonusPercentage * 100).toFixed(2)) + "% ", 1)
                                          ]),
                                          _: 2
                                        }, 1024),
                                        createVNode(_component_UiTableCell, { class: "font-medium" }, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(dop.paid) + "\u20BD"), 1)
                                          ]),
                                          _: 2
                                        }, 1024),
                                        createVNode(_component_UiTableCell, { class: "font-medium" }, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(+dop.toSalary.toFixed(2)) + "\u20BD"), 1)
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
                                          createTextVNode(" \u0418\u0422\u041E\u0413\u041E(" + toDisplayString(unref(currentManager).dopsInfoPrevMounth.length) + ") ", 1)
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
                                          createTextVNode("% ")
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
                                          createTextVNode(toDisplayString(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(
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
                          }, _parent4, _scopeId3));
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
                                        createTextVNode("\u0421\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_UiTableHead, { class: "text-center" }, {
                                      default: withCtx(() => [
                                        createTextVNode("% \u0432 \u0417\u041F")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_UiTableHead, { class: "text-center" }, {
                                      default: withCtx(() => [
                                        createTextVNode("\u041E\u043F\u043B\u0430\u0447\u0435\u043D\u043E(\u0424\u0430\u043A\u0442)")
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
                                      createVNode(_component_UiTableCell, { class: "text-left" }, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(dop.dealTitle) + "(" + toDisplayString(dop.title) + ") ", 1)
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
                                          createTextVNode(toDisplayString((dop.bonusPercentage * 100).toFixed(2)) + "% ", 1)
                                        ]),
                                        _: 2
                                      }, 1024),
                                      createVNode(_component_UiTableCell, { class: "font-medium" }, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(dop.paid) + "\u20BD"), 1)
                                        ]),
                                        _: 2
                                      }, 1024),
                                      createVNode(_component_UiTableCell, { class: "font-medium" }, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(+dop.toSalary.toFixed(2)) + "\u20BD"), 1)
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
                                        createTextVNode(" \u0418\u0422\u041E\u0413\u041E(" + toDisplayString(unref(currentManager).dopsInfoPrevMounth.length) + ") ", 1)
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
                                        createTextVNode("% ")
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
                                        createTextVNode(toDisplayString(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(
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
                    }, _parent3, _scopeId2));
                  } else {
                    _push3(`<!---->`);
                  }
                } else {
                  return [
                    ((_d = (_c = unref(currentManager)) == null ? void 0 : _c.dopsInfoPrevMounth) == null ? void 0 : _d.length) ? (openBlock(), createBlock(_component_UiTable, { key: 0 }, {
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
                                    createTextVNode("\u0421\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_UiTableHead, { class: "text-center" }, {
                                  default: withCtx(() => [
                                    createTextVNode("% \u0432 \u0417\u041F")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_UiTableHead, { class: "text-center" }, {
                                  default: withCtx(() => [
                                    createTextVNode("\u041E\u043F\u043B\u0430\u0447\u0435\u043D\u043E(\u0424\u0430\u043A\u0442)")
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
                                  createVNode(_component_UiTableCell, { class: "text-left" }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(dop.dealTitle) + "(" + toDisplayString(dop.title) + ") ", 1)
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
                                      createTextVNode(toDisplayString((dop.bonusPercentage * 100).toFixed(2)) + "% ", 1)
                                    ]),
                                    _: 2
                                  }, 1024),
                                  createVNode(_component_UiTableCell, { class: "font-medium" }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(dop.paid) + "\u20BD"), 1)
                                    ]),
                                    _: 2
                                  }, 1024),
                                  createVNode(_component_UiTableCell, { class: "font-medium" }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(+dop.toSalary.toFixed(2)) + "\u20BD"), 1)
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
                                    createTextVNode(" \u0418\u0422\u041E\u0413\u041E(" + toDisplayString(unref(currentManager).dopsInfoPrevMounth.length) + ") ", 1)
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
                                    createTextVNode("% ")
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
                                    createTextVNode(toDisplayString(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(
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
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UiTabsList, null, {
                default: withCtx(() => [
                  createVNode(_component_UiTabsTrigger, { value: "deals" }, {
                    default: withCtx(() => [
                      createTextVNode(" \u0417\u0430\u043A\u0430\u0437\u044B ")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_UiTabsTrigger, { value: "dops" }, {
                    default: withCtx(() => [
                      createTextVNode(" \u0414\u043E\u043F\u044B ")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_UiTabsTrigger, { value: "dealsInfoPrevMounth" }, {
                    default: withCtx(() => [
                      createTextVNode(" \u0417\u0430\u043A\u0430\u0437\u044B \u043F\u0440\u043E\u0448\u043B\u044B\u0435 \u043C\u0435\u0441\u044F\u0446\u0430 ")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_UiTabsTrigger, { value: "dopsInfoPrevMounth" }, {
                    default: withCtx(() => [
                      createTextVNode(" \u0414\u043E\u043F\u044B \u043F\u0440\u043E\u0448\u043B\u044B\u0435 \u043C\u0435\u0441\u044F\u0446\u0430 ")
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(_component_UiTabsContent, { value: "deals" }, {
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
                                    createTextVNode("\u0421\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C/\u0414\u043E\u043B\u044F")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_UiTableHead, { class: "text-center" }, {
                                  default: withCtx(() => [
                                    createTextVNode("\u041E\u043F\u043B\u0430\u0447\u0435\u043D\u043E(\u0424\u0430\u043A\u0442)")
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
                                  createVNode(_component_UiTableCell, { class: "text-left" }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(deal.title), 1)
                                    ]),
                                    _: 2
                                  }, 1024),
                                  createVNode(_component_UiTableCell, { class: "font-medium" }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(("dateFormat" in _ctx ? _ctx.dateFormat : unref(dateFormat))(deal.saleDate)), 1)
                                    ]),
                                    _: 2
                                  }, 1024),
                                  createVNode(_component_UiTableCell, { class: "font-medium" }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(deal.dealPrice) + "\u20BD") + "(" + toDisplayString(deal.dealerPart) + "%) ", 1)
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
              }),
              createVNode(_component_UiTabsContent, { value: "dealsInfoPrevMounth" }, {
                default: withCtx(() => {
                  var _a, _b;
                  return [
                    ((_b = (_a = unref(currentManager)) == null ? void 0 : _a.dealsInfoPrevMounth) == null ? void 0 : _b.length) ? (openBlock(), createBlock(_component_UiTable, { key: 0 }, {
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
                                    createTextVNode("\u0414\u043E\u043B\u044F(% \u043E\u0442 \u0441\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u0438)")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_UiTableHead, { class: "text-center" }, {
                                  default: withCtx(() => [
                                    createTextVNode("% \u0432 \u0417\u041F")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_UiTableHead, { class: "text-center" }, {
                                  default: withCtx(() => [
                                    createTextVNode("\u041E\u043F\u043B\u0430\u0447\u0435\u043D\u043E(\u0424\u0430\u043A\u0442)")
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
                                      createTextVNode(toDisplayString(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(deal.dealerPrice) + "\u20BD") + "(" + toDisplayString(deal.dealerPart) + "% \u043E\u0442 " + toDisplayString(deal.dealPrice) + ") ", 1)
                                    ]),
                                    _: 2
                                  }, 1024),
                                  createVNode(_component_UiTableCell, { class: "font-medium" }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString((deal.bonusPercentage * 100).toFixed(2)) + "% ", 1)
                                    ]),
                                    _: 2
                                  }, 1024),
                                  createVNode(_component_UiTableCell, { class: "font-medium" }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(deal.paid) + "\u20BD"), 1)
                                    ]),
                                    _: 2
                                  }, 1024),
                                  createVNode(_component_UiTableCell, { class: "font-medium" }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(+deal.toSalary.toFixed(2)) + "\u20BD"), 1)
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
                                    createTextVNode(" \u0418\u0422\u041E\u0413\u041E(" + toDisplayString(unref(currentManager).dealsInfoPrevMounth.length) + ") ", 1)
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
                                    createTextVNode("% ")
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
                                    createTextVNode(toDisplayString(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(
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
                    })) : createCommentVNode("", true)
                  ];
                }),
                _: 1
              }),
              createVNode(_component_UiTabsContent, { value: "dops" }, {
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
                                    createTextVNode("\u041E\u043F\u043B\u0430\u0447\u0435\u043D\u043E(\u0424\u0430\u043A\u0442)")
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
                                  createVNode(_component_UiTableCell, { class: "text-left" }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(dop.dealTitle) + "(" + toDisplayString(dop.title) + ") ", 1)
                                    ]),
                                    _: 2
                                  }, 1024),
                                  createVNode(_component_UiTableCell, { class: "font-medium" }, {
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
              }),
              createVNode(_component_UiTabsContent, { value: "dopsInfoPrevMounth" }, {
                default: withCtx(() => {
                  var _a, _b;
                  return [
                    ((_b = (_a = unref(currentManager)) == null ? void 0 : _a.dopsInfoPrevMounth) == null ? void 0 : _b.length) ? (openBlock(), createBlock(_component_UiTable, { key: 0 }, {
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
                                    createTextVNode("\u0421\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_UiTableHead, { class: "text-center" }, {
                                  default: withCtx(() => [
                                    createTextVNode("% \u0432 \u0417\u041F")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_UiTableHead, { class: "text-center" }, {
                                  default: withCtx(() => [
                                    createTextVNode("\u041E\u043F\u043B\u0430\u0447\u0435\u043D\u043E(\u0424\u0430\u043A\u0442)")
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
                                  createVNode(_component_UiTableCell, { class: "text-left" }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(dop.dealTitle) + "(" + toDisplayString(dop.title) + ") ", 1)
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
                                      createTextVNode(toDisplayString((dop.bonusPercentage * 100).toFixed(2)) + "% ", 1)
                                    ]),
                                    _: 2
                                  }, 1024),
                                  createVNode(_component_UiTableCell, { class: "font-medium" }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(dop.paid) + "\u20BD"), 1)
                                    ]),
                                    _: 2
                                  }, 1024),
                                  createVNode(_component_UiTableCell, { class: "font-medium" }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(+dop.toSalary.toFixed(2)) + "\u20BD"), 1)
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
                                    createTextVNode(" \u0418\u0422\u041E\u0413\u041E(" + toDisplayString(unref(currentManager).dopsInfoPrevMounth.length) + ") ", 1)
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
                                    createTextVNode("% ")
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
                                    createTextVNode(toDisplayString(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(
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
                  ];
                }),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div>`);
      if (unref(VkTopSalesManagersList).length) {
        _push(`<div class="flex gap-2 flex-wrap"><div class="flex gap-2 flex-1">`);
        _push(ssrRenderComponent(_component_MySalariesMopVkTopList, {
          class: "min-w-[300px]",
          managers: unref(VkTopSalesManagersList),
          title: "\u0422\u043E\u043F \u043F\u043E \u0432\u044B\u0440\u0443\u0447\u043A\u0435",
          after: "\u20BD"
        }, null, _parent));
        _push(ssrRenderComponent(_component_MySalariesMopVkTopList, {
          class: "min-w-[300px]",
          managers: unref(VkTopDopSalesManagersList),
          title: "\u0422\u043E\u043F \u043F\u043E \u0434\u043E\u043F.\u043F\u0440\u043E\u0434\u0430\u0436\u0430\u043C",
          after: "\u20BD"
        }, null, _parent));
        _push(`</div><div class="flex gap-2 flex-1">`);
        _push(ssrRenderComponent(_component_MySalariesMopVkTopList, {
          class: "min-w-[300px]",
          managers: unref(VkTopDimmerSalesManagersList),
          title: "\u0422\u043E\u043F \u043F\u043E \u0434\u0438\u043C\u043C\u0435\u0440\u0430\u043C",
          after: "\u20BD"
        }, null, _parent));
        _push(ssrRenderComponent(_component_MySalariesMopVkTopList, {
          class: "min-w-[300px]",
          managers: unref(VkTopSalesWithoutDesignersList),
          title: "\u0422\u043E\u043F \u043F\u0440\u043E\u0434\u0430\u0436 \u0431\u0435\u0437 \u0434\u0438\u0437\u043E\u0432",
          after: "\u20BD"
        }, null, _parent));
        _push(ssrRenderComponent(_component_MySalariesMopVkTopList, {
          class: "min-w-[300px]",
          managers: unref(VkTopConversionDayToDayList),
          title: "\u0422\u043E\u043F \u043A\u043E\u043D\u0432\u0435\u0440\u0441\u0438\u044F",
          after: "%"
        }, null, _parent));
        _push(`</div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="flex gap-1 mb-2"><!--[-->`);
      ssrRenderList(unref(topListAvito), (item, i) => {
        _push(ssrRenderComponent(_component_UiCard, {
          key: i,
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
                          _push4(`${ssrInterpolate(item.category)}`);
                        } else {
                          return [
                            createTextVNode(toDisplayString(item.category), 1)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_component_UiCardTitle, { class: "text-3xl font-semibold whitespace-nowrap" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`${ssrInterpolate(item.user)}`);
                        } else {
                          return [
                            createTextVNode(toDisplayString(item.user), 1)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
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
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_UiCardContent, null, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(item.sales) + (item.category === "\u0422\u043E\u043F \u043A\u043E\u043D\u0432\u0435\u0440\u0441\u0438\u044F" ? "%" : "\u20BD"))}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(item.sales) + (item.category === "\u0422\u043E\u043F \u043A\u043E\u043D\u0432\u0435\u0440\u0441\u0438\u044F" ? "%" : "\u20BD")), 1)
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
        }, _parent));
      });
      _push(`<!--]--></div></div></div></div>`);
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
//# sourceMappingURL=index-C95_B7SV.mjs.map
