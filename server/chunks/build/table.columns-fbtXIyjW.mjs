import { _ as _sfc_main$3 } from './Card-D2-UPrX8.mjs';
import { _ as _sfc_main$1$1, a as _sfc_main$4 } from './CardTitle-Dyaq6zaM.mjs';
import { _ as _sfc_main$5 } from './CardDescription-CwDlX6V_.mjs';
import { _ as _sfc_main$7 } from './CardContent-5uJgHkPl.mjs';
import { _ as _sfc_main$9 } from './CardFooter-BUlih3MF.mjs';
import { _ as _sfc_main$6 } from './ScrollArea-Kzo2fjeX.mjs';
import { _ as _sfc_main$8 } from './Separator-DmvFl46f.mjs';
import { d as dateFormat } from './useMyDateFormat-Cn1Jsliy.mjs';
import { defineComponent, h, ref, mergeProps, withCtx, createTextVNode, toDisplayString, unref, createVNode, createBlock, openBlock, Fragment, renderList, computed, watch, createCommentVNode, isRef, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderClass, ssrRenderList } from 'vue/server-renderer';
import { b as useNuxtApp } from './server.mjs';
import { _ as _sfc_main$1$2 } from './SetPlanModal-BfHKj34I.mjs';
import { _ as _sfc_main$2$1, a as _sfc_main$1$3, b as _sfc_main$b } from './PopoverContent-Dy99cMmu.mjs';
import { _ as _sfc_main$a } from './index-B6vrBiru.mjs';
import { _ as _sfc_main$c } from './Checkbox-DKAsiMFR.mjs';
import { _ as _sfc_main$5$1, a as _sfc_main$d, b as _sfc_main$2$2, c as _sfc_main$1$4, d as _sfc_main$4$1, e as _sfc_main$3$1 } from './TableHeader-CsCuT7pu.mjs';
import { _ as _sfc_main$e } from './TableFooter-DNMPUNqP.mjs';
import { v as valueUpdater } from './utils-TCWotVPY.mjs';
import { useVueTable, getFilteredRowModel, getSortedRowModel, getCoreRowModel, FlexRender } from '@tanstack/vue-table';
import { ChevronDown, ArrowUpDown } from 'lucide-vue-next';
import { _ as _sfc_main$4$2, a as _sfc_main$3$2, b as _sfc_main$f, c as _sfc_main$2$3, d as _sfc_main$1$5 } from './DialogContent-BsO2ljLB.mjs';
import { _ as _sfc_main$k } from './DialogFooter-CQpXS8R1.mjs';
import { _ as _sfc_main$2$4, a as _sfc_main$g, b as _sfc_main$1$6 } from './TabsList-C3eBcFGa.mjs';
import { _ as _sfc_main$h } from './Label-Bxzolydd.mjs';
import { _ as _sfc_main$i } from './Input-DoHPrX2-.mjs';
import { _ as _sfc_main$j } from './Textarea-oqH4YeW4.mjs';

const _sfc_main$2 = /* @__PURE__ */ defineComponent({
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
      const _component_UiCard = _sfc_main$3;
      const _component_UiCardHeader = _sfc_main$1$1;
      const _component_UiCardTitle = _sfc_main$4;
      const _component_UiCardDescription = _sfc_main$5;
      const _component_UiScrollArea = _sfc_main$6;
      const _component_UiCardContent = _sfc_main$7;
      const _component_UiSeparator = _sfc_main$8;
      const _component_UiCardFooter = _sfc_main$9;
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
                          _push4(`<div class="flex flex-col"${_scopeId3}><span${_scopeId3}> \u041F\u0435\u0440\u0432\u044B\u0439 \u043A\u043E\u043D\u0442\u0430\u043A\u0442: ${ssrInterpolate(("dateFormat" in _ctx ? _ctx.dateFormat : unref(dateFormat))(_ctx.deal.client.firstContact))}</span><span${_scopeId3}> \u0414\u0430\u0442\u0430 \u043F\u0440\u043E\u0434\u0430\u0436\u0438: ${ssrInterpolate(("dateFormat" in _ctx ? _ctx.dateFormat : unref(dateFormat))(_ctx.deal.saleDate))}</span><span${_scopeId3}> \u041F\u0440\u043E\u0448\u043B\u043E \u0434\u043D\u0435\u0439: ${ssrInterpolate(unref(daysGone))}</span></div><div class="flex gap-2 mb-2 items-center"${_scopeId3}><span${_scopeId3}>\u0421\u0442\u0430\u0442\u0443\u0441:${ssrInterpolate(_ctx.deal.status)}</span></div>`);
                        } else {
                          return [
                            createVNode("div", { class: "flex flex-col" }, [
                              createVNode("span", null, " \u041F\u0435\u0440\u0432\u044B\u0439 \u043A\u043E\u043D\u0442\u0430\u043A\u0442: " + toDisplayString(("dateFormat" in _ctx ? _ctx.dateFormat : unref(dateFormat))(_ctx.deal.client.firstContact)), 1),
                              createVNode("span", null, " \u0414\u0430\u0442\u0430 \u043F\u0440\u043E\u0434\u0430\u0436\u0438: " + toDisplayString(("dateFormat" in _ctx ? _ctx.dateFormat : unref(dateFormat))(_ctx.deal.saleDate)), 1),
                              createVNode("span", null, " \u041F\u0440\u043E\u0448\u043B\u043E \u0434\u043D\u0435\u0439: " + toDisplayString(unref(daysGone)), 1)
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
                              createVNode("span", null, " \u041F\u0440\u043E\u0448\u043B\u043E \u0434\u043D\u0435\u0439: " + toDisplayString(unref(daysGone)), 1)
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
                            createVNode("span", null, " \u041F\u0440\u043E\u0448\u043B\u043E \u0434\u043D\u0435\u0439: " + toDisplayString(unref(daysGone)), 1)
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
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/my/deals/DealCardSheet.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "DataTable",
  __ssrInlineRender: true,
  props: {
    columns: {},
    data: {},
    currentManagerId: {}
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
    const filters = computed(() => {
      const workspaces = Array.from(
        new Set(props.data.map((item) => item.workSpace).filter(Boolean))
      ).map((value) => ({ value, label: value }));
      const groups = Array.from(
        new Set(props.data.map((item) => item.group).filter(Boolean))
      ).map((value) => ({ value, label: value }));
      const managers = Array.from(
        new Map(
          props.data.map((item) => [
            item.id,
            { value: item.fullName, label: item.fullName }
          ])
        )
      ).map(([, option]) => option);
      return { workspaces, groups, managers };
    });
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
    const footerTotals = computed(() => {
      const rows = table.getRowModel().rows;
      const totals = {
        totalSales: 0,
        dealSales: 0,
        dopSales: 0,
        averageBill: 0,
        drr: 0,
        conversionDealsToCalls: 0,
        fact: 0,
        count: rows.length
      };
      rows.forEach((row) => {
        const data = row.original;
        totals.totalSales += Number(data.totalSales) || 0;
        totals.dealSales += Number(data.dealSales) || 0;
        totals.dopSales += Number(data.dopSales) || 0;
        totals.averageBill += Number(data.averageBill) || 0;
        totals.drr += Number(data.drr) || 0;
        totals.conversionDealsToCalls += Number(data.conversionDealsToCalls) || 0;
        if ("fact" in data && typeof data.fact === "number") {
          totals.fact += Number(data.fact) || 0;
        }
      });
      if (totals.count > 0) {
        totals.averageBill = totals.averageBill / totals.count;
        totals.drr = totals.drr / totals.count;
        totals.conversionDealsToCalls = totals.conversionDealsToCalls / totals.count;
      }
      return totals;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_MyManagersDataTableToolbar = _sfc_main$1$2;
      const _component_UiPopover = _sfc_main$2$1;
      const _component_UiPopoverTrigger = _sfc_main$1$3;
      const _component_UiButton = _sfc_main$a;
      const _component_UiPopoverContent = _sfc_main$b;
      const _component_UiCheckbox = _sfc_main$c;
      const _component_UiScrollArea = _sfc_main$6;
      const _component_UiTable = _sfc_main$5$1;
      const _component_UiTableHeader = _sfc_main$d;
      const _component_UiTableRow = _sfc_main$2$2;
      const _component_UiTableHead = _sfc_main$1$4;
      const _component_UiTableBody = _sfc_main$4$1;
      const _component_UiTableCell = _sfc_main$3$1;
      const _component_UiTableFooter = _sfc_main$e;
      _push(`<!--[--><div class="flex mb-2 justify-end gap-2 items-center"><div>`);
      _push(ssrRenderComponent(_component_MyManagersDataTableToolbar, {
        table: unref(table),
        filters: filters.value
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
      _push(`</div></div><div class="rounded-md border bg-slate-100 overflow-hidden">`);
      _push(ssrRenderComponent(_component_UiScrollArea, { class: "h-[calc(100vh-185px)]" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UiTable, { class: "relative" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UiTableHeader, { class: "bg-white sticky top-0 z-50" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<!--[-->`);
                        ssrRenderList(unref(table).getHeaderGroups(), (headerGroup) => {
                          _push4(ssrRenderComponent(_component_UiTableRow, {
                            key: headerGroup.id
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
                                "cursor-pointer",
                                "hover:bg-slate-300",
                                _ctx.currentManagerId === row.original.id ? "bg-slate-400/70" : ""
                              ],
                              "data-state": row.getIsSelected() ? "selected" : void 0,
                              onClick: ($event) => managerClicked(row.original.id)
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
                                "cursor-pointer",
                                "hover:bg-slate-300",
                                _ctx.currentManagerId === row.original.id ? "bg-slate-400/70" : ""
                              ],
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
                  _push3(ssrRenderComponent(_component_UiTableFooter, { class: "bg-slate-300 sticky bottom-0 z-40" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_UiTableRow, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            var _a, _b;
                            if (_push5) {
                              _push5(`<!--[-->`);
                              ssrRenderList((_a = unref(table).getHeaderGroups()[0]) == null ? void 0 : _a.headers.filter(
                                (h2) => !h2.isPlaceholder && h2.column.getIsVisible()
                              ), (header) => {
                                _push5(`<!--[-->`);
                                if (header.column.id === "fullName") {
                                  _push5(ssrRenderComponent(_component_UiTableCell, { class: "text-left pl-4 font-semibold text-slate-700" }, {
                                    default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                      if (_push6) {
                                        _push6(` \u0418\u0442\u043E\u0433\u043E `);
                                      } else {
                                        return [
                                          createTextVNode(" \u0418\u0442\u043E\u0433\u043E ")
                                        ];
                                      }
                                    }),
                                    _: 2
                                  }, _parent5, _scopeId4));
                                } else {
                                  _push5(ssrRenderComponent(_component_UiTableCell, { class: "text-center font-semibold" }, {
                                    default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                      if (_push6) {
                                        if (header.column.id === "totalSales") {
                                          _push6(`<!--[-->${ssrInterpolate(footerTotals.value.totalSales.toLocaleString("ru-RU"))}<!--]-->`);
                                        } else if (header.column.id === "dealSales") {
                                          _push6(`<!--[-->${ssrInterpolate(footerTotals.value.dealSales.toLocaleString("ru-RU"))}<!--]-->`);
                                        } else if (header.column.id === "dopSales") {
                                          _push6(`<!--[-->${ssrInterpolate(footerTotals.value.dopSales.toLocaleString("ru-RU"))}<!--]-->`);
                                        } else if (header.column.id === "averageBill") {
                                          _push6(`<!--[-->${ssrInterpolate(footerTotals.value.averageBill.toFixed(2))}<!--]-->`);
                                        } else if (header.column.id === "drr") {
                                          _push6(`<!--[-->${ssrInterpolate(footerTotals.value.drr.toFixed(2))}% <!--]-->`);
                                        } else if (header.column.id === "conversionDealsToCalls") {
                                          _push6(`<!--[-->${ssrInterpolate(footerTotals.value.conversionDealsToCalls.toFixed(2))}% <!--]-->`);
                                        } else if (header.column.id === "fact") {
                                          _push6(`<!--[-->${ssrInterpolate(footerTotals.value.fact.toLocaleString("ru-RU"))}<!--]-->`);
                                        } else {
                                          _push6(`<!---->`);
                                        }
                                      } else {
                                        return [
                                          header.column.id === "totalSales" ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                                            createTextVNode(toDisplayString(footerTotals.value.totalSales.toLocaleString("ru-RU")), 1)
                                          ], 64)) : header.column.id === "dealSales" ? (openBlock(), createBlock(Fragment, { key: 1 }, [
                                            createTextVNode(toDisplayString(footerTotals.value.dealSales.toLocaleString("ru-RU")), 1)
                                          ], 64)) : header.column.id === "dopSales" ? (openBlock(), createBlock(Fragment, { key: 2 }, [
                                            createTextVNode(toDisplayString(footerTotals.value.dopSales.toLocaleString("ru-RU")), 1)
                                          ], 64)) : header.column.id === "averageBill" ? (openBlock(), createBlock(Fragment, { key: 3 }, [
                                            createTextVNode(toDisplayString(footerTotals.value.averageBill.toFixed(2)), 1)
                                          ], 64)) : header.column.id === "drr" ? (openBlock(), createBlock(Fragment, { key: 4 }, [
                                            createTextVNode(toDisplayString(footerTotals.value.drr.toFixed(2)) + "% ", 1)
                                          ], 64)) : header.column.id === "conversionDealsToCalls" ? (openBlock(), createBlock(Fragment, { key: 5 }, [
                                            createTextVNode(toDisplayString(footerTotals.value.conversionDealsToCalls.toFixed(2)) + "% ", 1)
                                          ], 64)) : header.column.id === "fact" ? (openBlock(), createBlock(Fragment, { key: 6 }, [
                                            createTextVNode(toDisplayString(footerTotals.value.fact.toLocaleString("ru-RU")), 1)
                                          ], 64)) : createCommentVNode("", true)
                                        ];
                                      }
                                    }),
                                    _: 2
                                  }, _parent5, _scopeId4));
                                }
                                _push5(`<!--]-->`);
                              });
                              _push5(`<!--]-->`);
                            } else {
                              return [
                                (openBlock(true), createBlock(Fragment, null, renderList((_b = unref(table).getHeaderGroups()[0]) == null ? void 0 : _b.headers.filter(
                                  (h2) => !h2.isPlaceholder && h2.column.getIsVisible()
                                ), (header) => {
                                  return openBlock(), createBlock(Fragment, {
                                    key: header.id
                                  }, [
                                    header.column.id === "fullName" ? (openBlock(), createBlock(_component_UiTableCell, {
                                      key: 0,
                                      class: "text-left pl-4 font-semibold text-slate-700"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(" \u0418\u0442\u043E\u0433\u043E ")
                                      ]),
                                      _: 1
                                    })) : (openBlock(), createBlock(_component_UiTableCell, {
                                      key: 1,
                                      class: "text-center font-semibold"
                                    }, {
                                      default: withCtx(() => [
                                        header.column.id === "totalSales" ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                                          createTextVNode(toDisplayString(footerTotals.value.totalSales.toLocaleString("ru-RU")), 1)
                                        ], 64)) : header.column.id === "dealSales" ? (openBlock(), createBlock(Fragment, { key: 1 }, [
                                          createTextVNode(toDisplayString(footerTotals.value.dealSales.toLocaleString("ru-RU")), 1)
                                        ], 64)) : header.column.id === "dopSales" ? (openBlock(), createBlock(Fragment, { key: 2 }, [
                                          createTextVNode(toDisplayString(footerTotals.value.dopSales.toLocaleString("ru-RU")), 1)
                                        ], 64)) : header.column.id === "averageBill" ? (openBlock(), createBlock(Fragment, { key: 3 }, [
                                          createTextVNode(toDisplayString(footerTotals.value.averageBill.toFixed(2)), 1)
                                        ], 64)) : header.column.id === "drr" ? (openBlock(), createBlock(Fragment, { key: 4 }, [
                                          createTextVNode(toDisplayString(footerTotals.value.drr.toFixed(2)) + "% ", 1)
                                        ], 64)) : header.column.id === "conversionDealsToCalls" ? (openBlock(), createBlock(Fragment, { key: 5 }, [
                                          createTextVNode(toDisplayString(footerTotals.value.conversionDealsToCalls.toFixed(2)) + "% ", 1)
                                        ], 64)) : header.column.id === "fact" ? (openBlock(), createBlock(Fragment, { key: 6 }, [
                                          createTextVNode(toDisplayString(footerTotals.value.fact.toLocaleString("ru-RU")), 1)
                                        ], 64)) : createCommentVNode("", true)
                                      ]),
                                      _: 2
                                    }, 1024))
                                  ], 64);
                                }), 128))
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_UiTableRow, null, {
                            default: withCtx(() => {
                              var _a;
                              return [
                                (openBlock(true), createBlock(Fragment, null, renderList((_a = unref(table).getHeaderGroups()[0]) == null ? void 0 : _a.headers.filter(
                                  (h2) => !h2.isPlaceholder && h2.column.getIsVisible()
                                ), (header) => {
                                  return openBlock(), createBlock(Fragment, {
                                    key: header.id
                                  }, [
                                    header.column.id === "fullName" ? (openBlock(), createBlock(_component_UiTableCell, {
                                      key: 0,
                                      class: "text-left pl-4 font-semibold text-slate-700"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(" \u0418\u0442\u043E\u0433\u043E ")
                                      ]),
                                      _: 1
                                    })) : (openBlock(), createBlock(_component_UiTableCell, {
                                      key: 1,
                                      class: "text-center font-semibold"
                                    }, {
                                      default: withCtx(() => [
                                        header.column.id === "totalSales" ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                                          createTextVNode(toDisplayString(footerTotals.value.totalSales.toLocaleString("ru-RU")), 1)
                                        ], 64)) : header.column.id === "dealSales" ? (openBlock(), createBlock(Fragment, { key: 1 }, [
                                          createTextVNode(toDisplayString(footerTotals.value.dealSales.toLocaleString("ru-RU")), 1)
                                        ], 64)) : header.column.id === "dopSales" ? (openBlock(), createBlock(Fragment, { key: 2 }, [
                                          createTextVNode(toDisplayString(footerTotals.value.dopSales.toLocaleString("ru-RU")), 1)
                                        ], 64)) : header.column.id === "averageBill" ? (openBlock(), createBlock(Fragment, { key: 3 }, [
                                          createTextVNode(toDisplayString(footerTotals.value.averageBill.toFixed(2)), 1)
                                        ], 64)) : header.column.id === "drr" ? (openBlock(), createBlock(Fragment, { key: 4 }, [
                                          createTextVNode(toDisplayString(footerTotals.value.drr.toFixed(2)) + "% ", 1)
                                        ], 64)) : header.column.id === "conversionDealsToCalls" ? (openBlock(), createBlock(Fragment, { key: 5 }, [
                                          createTextVNode(toDisplayString(footerTotals.value.conversionDealsToCalls.toFixed(2)) + "% ", 1)
                                        ], 64)) : header.column.id === "fact" ? (openBlock(), createBlock(Fragment, { key: 6 }, [
                                          createTextVNode(toDisplayString(footerTotals.value.fact.toLocaleString("ru-RU")), 1)
                                        ], 64)) : createCommentVNode("", true)
                                      ]),
                                      _: 2
                                    }, 1024))
                                  ], 64);
                                }), 128))
                              ];
                            }),
                            _: 2
                          }, 1024)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UiTableHeader, { class: "bg-white sticky top-0 z-50" }, {
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
                              class: [
                                "cursor-pointer",
                                "hover:bg-slate-300",
                                _ctx.currentManagerId === row.original.id ? "bg-slate-400/70" : ""
                              ],
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
                    }),
                    createVNode(_component_UiTableFooter, { class: "bg-slate-300 sticky bottom-0 z-40" }, {
                      default: withCtx(() => [
                        createVNode(_component_UiTableRow, null, {
                          default: withCtx(() => {
                            var _a;
                            return [
                              (openBlock(true), createBlock(Fragment, null, renderList((_a = unref(table).getHeaderGroups()[0]) == null ? void 0 : _a.headers.filter(
                                (h2) => !h2.isPlaceholder && h2.column.getIsVisible()
                              ), (header) => {
                                return openBlock(), createBlock(Fragment, {
                                  key: header.id
                                }, [
                                  header.column.id === "fullName" ? (openBlock(), createBlock(_component_UiTableCell, {
                                    key: 0,
                                    class: "text-left pl-4 font-semibold text-slate-700"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(" \u0418\u0442\u043E\u0433\u043E ")
                                    ]),
                                    _: 1
                                  })) : (openBlock(), createBlock(_component_UiTableCell, {
                                    key: 1,
                                    class: "text-center font-semibold"
                                  }, {
                                    default: withCtx(() => [
                                      header.column.id === "totalSales" ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                                        createTextVNode(toDisplayString(footerTotals.value.totalSales.toLocaleString("ru-RU")), 1)
                                      ], 64)) : header.column.id === "dealSales" ? (openBlock(), createBlock(Fragment, { key: 1 }, [
                                        createTextVNode(toDisplayString(footerTotals.value.dealSales.toLocaleString("ru-RU")), 1)
                                      ], 64)) : header.column.id === "dopSales" ? (openBlock(), createBlock(Fragment, { key: 2 }, [
                                        createTextVNode(toDisplayString(footerTotals.value.dopSales.toLocaleString("ru-RU")), 1)
                                      ], 64)) : header.column.id === "averageBill" ? (openBlock(), createBlock(Fragment, { key: 3 }, [
                                        createTextVNode(toDisplayString(footerTotals.value.averageBill.toFixed(2)), 1)
                                      ], 64)) : header.column.id === "drr" ? (openBlock(), createBlock(Fragment, { key: 4 }, [
                                        createTextVNode(toDisplayString(footerTotals.value.drr.toFixed(2)) + "% ", 1)
                                      ], 64)) : header.column.id === "conversionDealsToCalls" ? (openBlock(), createBlock(Fragment, { key: 5 }, [
                                        createTextVNode(toDisplayString(footerTotals.value.conversionDealsToCalls.toFixed(2)) + "% ", 1)
                                      ], 64)) : header.column.id === "fact" ? (openBlock(), createBlock(Fragment, { key: 6 }, [
                                        createTextVNode(toDisplayString(footerTotals.value.fact.toLocaleString("ru-RU")), 1)
                                      ], 64)) : createCommentVNode("", true)
                                    ]),
                                    _: 2
                                  }, 1024))
                                ], 64);
                              }), 128))
                            ];
                          }),
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
              createVNode(_component_UiTable, { class: "relative" }, {
                default: withCtx(() => [
                  createVNode(_component_UiTableHeader, { class: "bg-white sticky top-0 z-50" }, {
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
                            class: [
                              "cursor-pointer",
                              "hover:bg-slate-300",
                              _ctx.currentManagerId === row.original.id ? "bg-slate-400/70" : ""
                            ],
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
                  }),
                  createVNode(_component_UiTableFooter, { class: "bg-slate-300 sticky bottom-0 z-40" }, {
                    default: withCtx(() => [
                      createVNode(_component_UiTableRow, null, {
                        default: withCtx(() => {
                          var _a;
                          return [
                            (openBlock(true), createBlock(Fragment, null, renderList((_a = unref(table).getHeaderGroups()[0]) == null ? void 0 : _a.headers.filter(
                              (h2) => !h2.isPlaceholder && h2.column.getIsVisible()
                            ), (header) => {
                              return openBlock(), createBlock(Fragment, {
                                key: header.id
                              }, [
                                header.column.id === "fullName" ? (openBlock(), createBlock(_component_UiTableCell, {
                                  key: 0,
                                  class: "text-left pl-4 font-semibold text-slate-700"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" \u0418\u0442\u043E\u0433\u043E ")
                                  ]),
                                  _: 1
                                })) : (openBlock(), createBlock(_component_UiTableCell, {
                                  key: 1,
                                  class: "text-center font-semibold"
                                }, {
                                  default: withCtx(() => [
                                    header.column.id === "totalSales" ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                                      createTextVNode(toDisplayString(footerTotals.value.totalSales.toLocaleString("ru-RU")), 1)
                                    ], 64)) : header.column.id === "dealSales" ? (openBlock(), createBlock(Fragment, { key: 1 }, [
                                      createTextVNode(toDisplayString(footerTotals.value.dealSales.toLocaleString("ru-RU")), 1)
                                    ], 64)) : header.column.id === "dopSales" ? (openBlock(), createBlock(Fragment, { key: 2 }, [
                                      createTextVNode(toDisplayString(footerTotals.value.dopSales.toLocaleString("ru-RU")), 1)
                                    ], 64)) : header.column.id === "averageBill" ? (openBlock(), createBlock(Fragment, { key: 3 }, [
                                      createTextVNode(toDisplayString(footerTotals.value.averageBill.toFixed(2)), 1)
                                    ], 64)) : header.column.id === "drr" ? (openBlock(), createBlock(Fragment, { key: 4 }, [
                                      createTextVNode(toDisplayString(footerTotals.value.drr.toFixed(2)) + "% ", 1)
                                    ], 64)) : header.column.id === "conversionDealsToCalls" ? (openBlock(), createBlock(Fragment, { key: 5 }, [
                                      createTextVNode(toDisplayString(footerTotals.value.conversionDealsToCalls.toFixed(2)) + "% ", 1)
                                    ], 64)) : header.column.id === "fact" ? (openBlock(), createBlock(Fragment, { key: 6 }, [
                                      createTextVNode(toDisplayString(footerTotals.value.fact.toLocaleString("ru-RU")), 1)
                                    ], 64)) : createCommentVNode("", true)
                                  ]),
                                  _: 2
                                }, 1024))
                              ], 64);
                            }), 128))
                          ];
                        }),
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
      _push(`</div><!--]-->`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/my/comercial/DataTable.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
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
    const types = ["\u0412\u044B\u0447\u0435\u0442", "\u041F\u0440\u0438\u0431\u0430\u0432\u043A\u0430", "\u0412\u044B\u043F\u043B\u0430\u0442\u0430"];
    const curTab = ref(types[0]);
    const newCorrectionBlank = {
      type: types[0],
      date: (/* @__PURE__ */ new Date()).toISOString().slice(0, 10),
      period: (/* @__PURE__ */ new Date()).toISOString().slice(0, 7),
      price: 0,
      description: ""
    };
    const newCorrection = ref({ ...newCorrectionBlank });
    const create = async () => {
      var _a, _b;
      isLoading.value = true;
      errorMessage.value = null;
      try {
        if (curTab.value === "\u0412\u044B\u043F\u043B\u0430\u0442\u0430") {
          const { data } = await $useApi.post("/salary-pay/", {
            ...newCorrection.value,
            userId: props.userId
          });
          console.log("pay set");
          isOpen.value = false;
          emit("correction-created", data);
          return;
        }
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
        curTab.value = types[0];
        newCorrection.value = { ...newCorrectionBlank };
        errorMessage.value = null;
      }
    }, { deep: true });
    watch(curTab, (val) => {
      if (["\u0412\u044B\u0447\u0435\u0442", "\u041F\u0440\u0438\u0431\u0430\u0432\u043A\u0430"].includes(val)) {
        newCorrection.value.type = val;
      } else {
        return;
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UiDialog = _sfc_main$4$2;
      const _component_UiDialogTrigger = _sfc_main$3$2;
      const _component_UiButton = _sfc_main$a;
      const _component_UiDialogContent = _sfc_main$f;
      const _component_UiDialogHeader = _sfc_main$2$3;
      const _component_UiDialogTitle = _sfc_main$1$5;
      const _component_UiTabs = _sfc_main$2$4;
      const _component_UiTabsList = _sfc_main$g;
      const _component_UiTabsTrigger = _sfc_main$1$6;
      const _component_UiLabel = _sfc_main$h;
      const _component_UiInput = _sfc_main$i;
      const _component_UiTextarea = _sfc_main$j;
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
                  _push3(ssrRenderComponent(_component_UiButton, { class: "px-1 h-5" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`\u0412\u044B\u043F\u043B\u0430\u0442\u044B/\u041A\u043E\u0440\u0440\u0435\u043A\u0442\u0438\u0440\u043E\u0432\u043A\u0430`);
                      } else {
                        return [
                          createTextVNode("\u0412\u044B\u043F\u043B\u0430\u0442\u044B/\u041A\u043E\u0440\u0440\u0435\u043A\u0442\u0438\u0440\u043E\u0432\u043A\u0430")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UiButton, { class: "px-1 h-5" }, {
                      default: withCtx(() => [
                        createTextVNode("\u0412\u044B\u043F\u043B\u0430\u0442\u044B/\u041A\u043E\u0440\u0440\u0435\u043A\u0442\u0438\u0440\u043E\u0432\u043A\u0430")
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UiDialogContent, { class: "max-w-[350px] flex flex-col" }, {
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
                  _push3(ssrRenderComponent(_component_UiTabs, {
                    modelValue: unref(curTab),
                    "onUpdate:modelValue": ($event) => isRef(curTab) ? curTab.value = $event : null,
                    class: "w-full"
                  }, {
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
                                  class: "w-full"
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
                                    class: "w-full"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(t), 1)
                                    ]),
                                    _: 2
                                  }, 1032, ["value"]);
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
                                  class: "w-full"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(t), 1)
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
                    class: unref(newCorrection).price ? "" : "outline-1 outline-rose-300"
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
                    class: unref(newCorrection).period ? "" : "outline-1 outline-rose-300"
                  }, null, _parent3, _scopeId2));
                  _push3(`</div>`);
                  if (unref(curTab) !== "\u0412\u044B\u043F\u043B\u0430\u0442\u0430") {
                    _push3(`<div class="relative"${_scopeId2}>`);
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
                      class: unref(newCorrection).date ? "" : "outline-1 outline-rose-300"
                    }, null, _parent3, _scopeId2));
                    _push3(`</div>`);
                  } else {
                    _push3(`<!---->`);
                  }
                  if (unref(curTab) !== "\u0412\u044B\u043F\u043B\u0430\u0442\u0430") {
                    _push3(`<div class="relative"${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_UiTextarea, {
                      modelValue: unref(newCorrection).description,
                      "onUpdate:modelValue": ($event) => unref(newCorrection).description = $event,
                      placeholder: "\u041A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0439"
                    }, null, _parent3, _scopeId2));
                    if (unref(newCorrection).description) {
                      _push3(ssrRenderComponent(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap" }, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(` \u041A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0439 `);
                          } else {
                            return [
                              createTextVNode(" \u041A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0439 ")
                            ];
                          }
                        }),
                        _: 1
                      }, _parent3, _scopeId2));
                    } else {
                      _push3(`<!---->`);
                    }
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
                      createVNode(_component_UiTabs, {
                        modelValue: unref(curTab),
                        "onUpdate:modelValue": ($event) => isRef(curTab) ? curTab.value = $event : null,
                        class: "w-full"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_UiTabsList, { class: "w-full" }, {
                            default: withCtx(() => [
                              (openBlock(), createBlock(Fragment, null, renderList(types, (t) => {
                                return createVNode(_component_UiTabsTrigger, {
                                  key: t,
                                  value: t,
                                  class: "w-full"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(t), 1)
                                  ]),
                                  _: 2
                                }, 1032, ["value"]);
                              }), 64))
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }, 8, ["modelValue", "onUpdate:modelValue"]),
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
                          class: unref(newCorrection).price ? "" : "outline-1 outline-rose-300"
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
                          class: unref(newCorrection).period ? "" : "outline-1 outline-rose-300"
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "class"])
                      ]),
                      unref(curTab) !== "\u0412\u044B\u043F\u043B\u0430\u0442\u0430" ? (openBlock(), createBlock("div", {
                        key: 0,
                        class: "relative"
                      }, [
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
                          class: unref(newCorrection).date ? "" : "outline-1 outline-rose-300"
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "class"])
                      ])) : createCommentVNode("", true),
                      unref(curTab) !== "\u0412\u044B\u043F\u043B\u0430\u0442\u0430" ? (openBlock(), createBlock("div", {
                        key: 1,
                        class: "relative"
                      }, [
                        createVNode(_component_UiTextarea, {
                          modelValue: unref(newCorrection).description,
                          "onUpdate:modelValue": ($event) => unref(newCorrection).description = $event,
                          placeholder: "\u041A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0439"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                        unref(newCorrection).description ? (openBlock(), createBlock(_component_UiLabel, {
                          key: 0,
                          class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" \u041A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0439 ")
                          ]),
                          _: 1
                        })) : createCommentVNode("", true)
                      ])) : createCommentVNode("", true)
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
                      createTextVNode("\u0412\u044B\u043F\u043B\u0430\u0442\u044B/\u041A\u043E\u0440\u0440\u0435\u043A\u0442\u0438\u0440\u043E\u0432\u043A\u0430")
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(_component_UiDialogContent, { class: "max-w-[350px] flex flex-col" }, {
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
                    createVNode(_component_UiTabs, {
                      modelValue: unref(curTab),
                      "onUpdate:modelValue": ($event) => isRef(curTab) ? curTab.value = $event : null,
                      class: "w-full"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_UiTabsList, { class: "w-full" }, {
                          default: withCtx(() => [
                            (openBlock(), createBlock(Fragment, null, renderList(types, (t) => {
                              return createVNode(_component_UiTabsTrigger, {
                                key: t,
                                value: t,
                                class: "w-full"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(t), 1)
                                ]),
                                _: 2
                              }, 1032, ["value"]);
                            }), 64))
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }, 8, ["modelValue", "onUpdate:modelValue"]),
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
                        class: unref(newCorrection).price ? "" : "outline-1 outline-rose-300"
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
                        class: unref(newCorrection).period ? "" : "outline-1 outline-rose-300"
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "class"])
                    ]),
                    unref(curTab) !== "\u0412\u044B\u043F\u043B\u0430\u0442\u0430" ? (openBlock(), createBlock("div", {
                      key: 0,
                      class: "relative"
                    }, [
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
                        class: unref(newCorrection).date ? "" : "outline-1 outline-rose-300"
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "class"])
                    ])) : createCommentVNode("", true),
                    unref(curTab) !== "\u0412\u044B\u043F\u043B\u0430\u0442\u0430" ? (openBlock(), createBlock("div", {
                      key: 1,
                      class: "relative"
                    }, [
                      createVNode(_component_UiTextarea, {
                        modelValue: unref(newCorrection).description,
                        "onUpdate:modelValue": ($event) => unref(newCorrection).description = $event,
                        placeholder: "\u041A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0439"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                      unref(newCorrection).description ? (openBlock(), createBlock(_component_UiLabel, {
                        key: 0,
                        class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" \u041A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0439 ")
                        ]),
                        _: 1
                      })) : createCommentVNode("", true)
                    ])) : createCommentVNode("", true)
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
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/my/salaries/CorrectCreateModal.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
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
          class: "h-full text-xl"
        },
        () => ["\u041C\u0435\u043D\u0435\u0434\u0436\u0435\u0440", h(ArrowUpDown, { class: "h-[25px] w-[25px] ml-1" })]
      );
    },
    cell: ({ row }) => {
      return h(
        "div",
        { class: "text-left pl-4 whitespace-nowrap flex flex-col items-start" },
        [
          // h('span', { class: 'text-xs text-gray-600' }, row.original.workSpace),
          h(
            "span",
            { class: "" },
            `${row.original.fullName} ${row.original.fired ? "(\u0423\u0432\u043E\u043B\u0435\u043D)" : ""}`
          ),
          h("span", { class: "text-xs text-gray-600" }, row.original.role)
        ]
        // row.getValue('manager')
      );
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
          class: "text-center h-full w-full p-2"
        },
        () => [
          h("div", { class: "flex items-center text-wrap" }, [
            "\u041E\u0431\u0449\u0438\u0435 \u043F\u0440\u043E\u0434\u0430\u0436\u0438",
            h(ArrowUpDown, { class: "h-[20px] w-[20px]" })
          ])
        ]
      );
    },
    cell: ({ row }) => h("div", { class: "text-center" }, row.getValue("totalSales"))
  },
  // Заказы
  {
    accessorKey: "dealSales",
    ruName: "\u0417\u0430\u043A\u0430\u0437\u044B",
    header: ({ column }) => {
      return h(
        _sfc_main$a,
        {
          variant: "ghost",
          onClick: () => column.toggleSorting(column.getIsSorted() === "asc"),
          class: "text-center h-full p-2 w-full"
        },
        () => [
          h("div", { class: "flex items-center text-wrap" }, [
            "\u0417\u0430\u043A\u0430\u0437\u044B",
            h(ArrowUpDown, { class: "h-[20px] w-[20px]" })
          ])
        ]
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
          class: "text-center h-full w-full p-2"
        },
        () => [
          h("div", { class: "flex items-center" }, [
            "\u0414\u043E\u043F\u044B",
            h(ArrowUpDown, { class: "h-[20px] w-[20px]" })
          ])
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
          class: "text-center h-full w-full p-2"
        },
        () => [
          h("div", { class: "flex items-center text-wrap" }, [
            "\u0421\u0440\u0435\u0434\u043D\u0438\u0439 \u0447\u0435\u043A",
            h(ArrowUpDown, { class: "h-[20px] w-[20px]" })
          ])
        ]
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
          class: "text-center h-full w-full p-2"
        },
        () => [
          h("div", { class: "flex items-center text-wrap" }, [
            "\u0414\u0420\u0420",
            h(ArrowUpDown, { class: "h-[20px] w-[20px]" })
          ])
        ]
      );
    },
    cell: ({ row }) => h("div", { class: "text-center" }, row.getValue("drr") + "%")
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
          class: "text-center h-full p-2 w-full"
        },
        () => [
          h("div", { class: "flex items-center text-wrap" }, [
            "% \u0438\u0437 \u0437\u0430\u044F\u0432\u043A\u0438 \u0432 \u043F\u0440\u043E\u0434\u0430\u0436\u0443",
            h(ArrowUpDown, { class: "h-[20px] w-[20px]" })
          ])
        ]
      );
    },
    cell: ({ row }) => h(
      "div",
      { class: "text-center" },
      row.getValue("conversionDealsToCalls") + "%"
    )
  },
  // факт для ведения
  {
    accessorKey: "fact",
    ruName: "\u0424\u0430\u043A\u0442",
    header: ({ column }) => {
      return h(
        _sfc_main$a,
        {
          variant: "ghost",
          onClick: () => column.toggleSorting(column.getIsSorted() === "asc"),
          class: "text-center h-full p-2 w-full"
        },
        () => [
          h("div", { class: "flex items-center text-wrap" }, [
            "\u0424\u0430\u043A\u0442",
            h(ArrowUpDown, { class: "h-[20px] w-[20px]" })
          ])
        ]
      );
    },
    cell: ({ row }) => h("div", { class: "text-center" }, row.getValue("fact") + "")
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
          class: "text-center h-full w-full hidden"
        },
        () => ["\u041E\u0442\u0434\u0435\u043B", h(ArrowUpDown, { class: "ml-2 h-4 w-4" })]
      );
    },
    cell: ({ row }) => h("div", { class: "text-center hidden" }, row.getValue("workSpace")),
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    }
  },
  // Группа
  {
    accessorKey: "group",
    ruName: "\u0413\u0440\u0443\u043F\u043F\u0430",
    header: ({ column }) => {
      return h(
        _sfc_main$a,
        {
          variant: "ghost",
          onClick: () => column.toggleSorting(column.getIsSorted() === "asc"),
          class: "text-center h-full w-full hidden"
        },
        () => ["\u0413\u0440\u0443\u043F\u043F\u0430", h(ArrowUpDown, { class: "ml-2 h-4 w-4" })]
      );
    },
    cell: ({ row }) => h("div", { class: "text-center hidden" }, row.getValue("group")),
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    }
  },
  // Роль
  {
    accessorKey: "role",
    ruName: "\u0420\u043E\u043B\u044C",
    header: ({ column }) => {
      return h(
        _sfc_main$a,
        {
          variant: "ghost",
          onClick: () => column.toggleSorting(column.getIsSorted() === "asc"),
          class: "text-center h-full w-full hidden"
        },
        () => ["\u0420\u043E\u043B\u044C", h(ArrowUpDown, { class: "ml-2 h-4 w-4" })]
      );
    },
    cell: ({ row }) => h("div", { class: "text-center hidden" }, row.getValue("role")),
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    }
  }
];

export { _sfc_main$2 as _, _sfc_main$1 as a, _sfc_main as b, managersDataColumns as m };
//# sourceMappingURL=table.columns-fbtXIyjW.mjs.map
