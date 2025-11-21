import { _ as _sfc_main$7 } from './Sidebar-ClYzRSuC.mjs';
import { _ as _sfc_main$2$1, a as _sfc_main$8, b as _sfc_main$1$1 } from './TabsList-C3eBcFGa.mjs';
import { _ as __nuxt_component_0 } from './index-BPQNkNDf.mjs';
import { _ as _sfc_main$9 } from './Input-DoHPrX2-.mjs';
import { _ as _sfc_main$a, a as _sfc_main$1$3 } from './ScrollArea-Kzo2fjeX.mjs';
import { _ as _sfc_main$b } from './Card-D2-UPrX8.mjs';
import { _ as _sfc_main$1$2, a as _sfc_main$c } from './CardTitle-Dyaq6zaM.mjs';
import { _ as _sfc_main$d } from './CardDescription-CwDlX6V_.mjs';
import { _ as _sfc_main$f } from './CardContent-5uJgHkPl.mjs';
import { _ as _sfc_main$e } from './index-B6vrBiru.mjs';
import { defineComponent, ref, withAsyncContext, watch, mergeProps, unref, isRef, withCtx, createTextVNode, toDisplayString, createBlock, openBlock, Fragment, renderList, createVNode, createCommentVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderAttr } from 'vue/server-renderer';
import { b as useNuxtApp, u as useHead } from './server.mjs';
import { _ as _sfc_main$h } from './CardFooter-BUlih3MF.mjs';
import { _ as __nuxt_component_0$1 } from './nuxt-link-BxYosf5u.mjs';
import { _ as _sfc_main$4$1, a as _sfc_main$3$1, b as _sfc_main$i, c as _sfc_main$2$2, d as _sfc_main$1$4 } from './DialogContent-BsO2ljLB.mjs';
import { _ as _sfc_main$j } from './DialogDescription-D5yt23q9.mjs';
import { _ as _sfc_main$l } from './DialogFooter-CQpXS8R1.mjs';
import { _ as _sfc_main$k } from './OrderForm-DCVnpRuC.mjs';
import { _ as _sfc_main$g } from './CreateModal-D5eq6dl9.mjs';
import { _ as _sfc_main$m } from './Label-Bxzolydd.mjs';
import { _ as _sfc_main$6$1, a as _sfc_main$4$2, b as _sfc_main$5$1, c as _sfc_main$3$2, d as _sfc_main$2$3 } from './SelectScrollDownButton-JzJI8BsA.mjs';
import { _ as _sfc_main$n } from './SelectGroup-BKLQULEA.mjs';
import { _ as _sfc_main$o } from './Textarea-oqH4YeW4.mjs';
import './index-9T5woGxV.mjs';
import 'radix-vue';
import 'lucide-vue-next';
import 'class-variance-authority';
import './utils-TCWotVPY.mjs';
import 'clsx';
import 'tailwind-merge';
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
import '@iconify/vue';
import '@iconify/utils/lib/css/icon';
import 'perfect-debounce';
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
import 'axios';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import 'unhead/plugins';
import 'vee-validate';
import './Switch-BsBEqAPz.mjs';
import '@vee-validate/zod';
import 'zod';

const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "List",
  __ssrInlineRender: true,
  props: {
    deals: {},
    total: {}
  },
  emits: ["deal-clicked", "deal-loaded"],
  setup(__props, { emit: __emit }) {
    const { $useApi } = useNuxtApp();
    const emit = __emit;
    const loadDeal = async (dealId) => {
      try {
        await $useApi.patch(`/production/deal/${dealId}/status/1`);
      } catch (e) {
        console.log(e.response.data.message, 32422);
      }
      emit("deal-loaded");
    };
    const handleItemClick = (dealId) => {
      emit("deal-clicked", dealId);
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UiScrollArea = _sfc_main$a;
      const _component_UiCard = _sfc_main$b;
      const _component_UiCardHeader = _sfc_main$1$2;
      const _component_UiCardTitle = _sfc_main$c;
      const _component_UiCardDescription = _sfc_main$d;
      const _component_UiButton = _sfc_main$e;
      const _component_UiCardContent = _sfc_main$f;
      _push(ssrRenderComponent(_component_UiScrollArea, mergeProps({ class: "pr-2" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div${_scopeId}><!--[-->`);
            ssrRenderList(_ctx.deals, (deal, index) => {
              _push2(ssrRenderComponent(_component_UiCard, {
                key: index,
                class: "flex cursor-pointer mb-2",
                onClick: ($event) => handleItemClick(deal.id)
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_UiCardHeader, { class: "flex-1" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<div class="flex flex-col justify-between flex-1"${_scopeId3}>`);
                          _push4(ssrRenderComponent(_component_UiCardTitle, null, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`${ssrInterpolate(deal.title)}`);
                              } else {
                                return [
                                  createTextVNode(toDisplayString(deal.title), 1)
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(_component_UiCardDescription, { class: "flex flex-col" }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`<div${_scopeId4}>\u0421\u0440\u043E\u043A: ${ssrInterpolate(deal.deadline)}</div>`);
                              } else {
                                return [
                                  createVNode("div", null, "\u0421\u0440\u043E\u043A: " + toDisplayString(deal.deadline), 1)
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                          if (deal.status === "\u0421\u043E\u0437\u0434\u0430\u043D\u0430") {
                            _push4(ssrRenderComponent(_component_UiButton, {
                              class: "self-end",
                              onClick: () => loadDeal(deal.id)
                            }, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(` \u0412 \u0440\u0430\u0431\u043E\u0442\u0443 `);
                                } else {
                                  return [
                                    createTextVNode(" \u0412 \u0440\u0430\u0431\u043E\u0442\u0443 ")
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                          } else {
                            _push4(`<!---->`);
                          }
                          _push4(`</div>`);
                        } else {
                          return [
                            createVNode("div", { class: "flex flex-col justify-between flex-1" }, [
                              createVNode(_component_UiCardTitle, null, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(deal.title), 1)
                                ]),
                                _: 2
                              }, 1024),
                              createVNode(_component_UiCardDescription, { class: "flex flex-col" }, {
                                default: withCtx(() => [
                                  createVNode("div", null, "\u0421\u0440\u043E\u043A: " + toDisplayString(deal.deadline), 1)
                                ]),
                                _: 2
                              }, 1024),
                              deal.status === "\u0421\u043E\u0437\u0434\u0430\u043D\u0430" ? (openBlock(), createBlock(_component_UiButton, {
                                key: 0,
                                class: "self-end",
                                onClick: () => loadDeal(deal.id)
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" \u0412 \u0440\u0430\u0431\u043E\u0442\u0443 ")
                                ]),
                                _: 2
                              }, 1032, ["onClick"])) : createCommentVNode("", true)
                            ])
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_component_UiCardContent, { class: "p-0" }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_UiCardHeader, { class: "flex-1" }, {
                        default: withCtx(() => [
                          createVNode("div", { class: "flex flex-col justify-between flex-1" }, [
                            createVNode(_component_UiCardTitle, null, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(deal.title), 1)
                              ]),
                              _: 2
                            }, 1024),
                            createVNode(_component_UiCardDescription, { class: "flex flex-col" }, {
                              default: withCtx(() => [
                                createVNode("div", null, "\u0421\u0440\u043E\u043A: " + toDisplayString(deal.deadline), 1)
                              ]),
                              _: 2
                            }, 1024),
                            deal.status === "\u0421\u043E\u0437\u0434\u0430\u043D\u0430" ? (openBlock(), createBlock(_component_UiButton, {
                              key: 0,
                              class: "self-end",
                              onClick: () => loadDeal(deal.id)
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" \u0412 \u0440\u0430\u0431\u043E\u0442\u0443 ")
                              ]),
                              _: 2
                            }, 1032, ["onClick"])) : createCommentVNode("", true)
                          ])
                        ]),
                        _: 2
                      }, 1024),
                      createVNode(_component_UiCardContent, { class: "p-0" })
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]--></div>`);
          } else {
            return [
              createVNode("div", null, [
                (openBlock(true), createBlock(Fragment, null, renderList(_ctx.deals, (deal, index) => {
                  return openBlock(), createBlock(_component_UiCard, {
                    key: index,
                    class: "flex cursor-pointer mb-2",
                    onClick: ($event) => handleItemClick(deal.id)
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_UiCardHeader, { class: "flex-1" }, {
                        default: withCtx(() => [
                          createVNode("div", { class: "flex flex-col justify-between flex-1" }, [
                            createVNode(_component_UiCardTitle, null, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(deal.title), 1)
                              ]),
                              _: 2
                            }, 1024),
                            createVNode(_component_UiCardDescription, { class: "flex flex-col" }, {
                              default: withCtx(() => [
                                createVNode("div", null, "\u0421\u0440\u043E\u043A: " + toDisplayString(deal.deadline), 1)
                              ]),
                              _: 2
                            }, 1024),
                            deal.status === "\u0421\u043E\u0437\u0434\u0430\u043D\u0430" ? (openBlock(), createBlock(_component_UiButton, {
                              key: 0,
                              class: "self-end",
                              onClick: () => loadDeal(deal.id)
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" \u0412 \u0440\u0430\u0431\u043E\u0442\u0443 ")
                              ]),
                              _: 2
                            }, 1032, ["onClick"])) : createCommentVNode("", true)
                          ])
                        ]),
                        _: 2
                      }, 1024),
                      createVNode(_component_UiCardContent, { class: "p-0" })
                    ]),
                    _: 2
                  }, 1032, ["onClick"]);
                }), 128))
              ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/my/orders/List.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "CreateModal",
  __ssrInlineRender: true,
  props: {
    deal: {}
  },
  emits: ["order-created"],
  setup(__props, { emit: __emit }) {
    const { $useApi } = useNuxtApp();
    const props = __props;
    const newOrder = ref();
    const backlight = ref({});
    const isOpen = ref(false);
    const newOrderDatas = (data) => {
      const newOrderDatas2 = data[0];
      const backlightData = data[1];
      console.log(newOrderDatas2);
      backlight.value = { ...backlightData };
      newOrder.value = { ...newOrderDatas2 };
      return;
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UiDialog = _sfc_main$4$1;
      const _component_UiDialogTrigger = _sfc_main$3$1;
      const _component_UiButton = _sfc_main$e;
      const _component_Icon = __nuxt_component_0;
      const _component_UiDialogContent = _sfc_main$i;
      const _component_UiDialogHeader = _sfc_main$2$2;
      const _component_UiDialogTitle = _sfc_main$1$4;
      const _component_UiDialogDescription = _sfc_main$j;
      const _component_MyOrdersOrderForm = _sfc_main$k;
      const _component_UiDialogFooter = _sfc_main$l;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_UiDialog, {
        open: unref(isOpen),
        "onUpdate:open": ($event) => isRef(isOpen) ? isOpen.value = $event : null
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UiDialogTrigger, { "as-child": "" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UiButton, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_Icon, {
                          name: "akar-icons:plus",
                          color: "white",
                          size: "25px"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_Icon, {
                            name: "akar-icons:plus",
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
                    createVNode(_component_UiButton, null, {
                      default: withCtx(() => [
                        createVNode(_component_Icon, {
                          name: "akar-icons:plus",
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
            _push2(ssrRenderComponent(_component_UiDialogContent, { class: "flex flex-col max-w-min" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UiDialogHeader, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_UiDialogTitle, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`\u0421\u043E\u0437\u0434\u0430\u0442\u044C \u0437\u0430\u043A\u0430\u0437`);
                            } else {
                              return [
                                createTextVNode("\u0421\u043E\u0437\u0434\u0430\u0442\u044C \u0437\u0430\u043A\u0430\u0437")
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
                              createTextVNode("\u0421\u043E\u0437\u0434\u0430\u0442\u044C \u0437\u0430\u043A\u0430\u0437")
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
                  _push3(ssrRenderComponent(_component_MyOrdersOrderForm, {
                    deal: props.deal,
                    onGetNewOrderDatas: newOrderDatas
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_UiDialogFooter, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="flex justify-between w-full"${_scopeId3}></div>`);
                      } else {
                        return [
                          createVNode("div", { class: "flex justify-between w-full" })
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
                            createTextVNode("\u0421\u043E\u0437\u0434\u0430\u0442\u044C \u0437\u0430\u043A\u0430\u0437")
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
                    createVNode(_component_MyOrdersOrderForm, {
                      deal: props.deal,
                      onGetNewOrderDatas: newOrderDatas
                    }, null, 8, ["deal"]),
                    createVNode(_component_UiDialogFooter, null, {
                      default: withCtx(() => [
                        createVNode("div", { class: "flex justify-between w-full" })
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
                      createVNode(_component_Icon, {
                        name: "akar-icons:plus",
                        color: "white",
                        size: "25px"
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(_component_UiDialogContent, { class: "flex flex-col max-w-min" }, {
                default: withCtx(() => [
                  createVNode(_component_UiDialogHeader, null, {
                    default: withCtx(() => [
                      createVNode(_component_UiDialogTitle, null, {
                        default: withCtx(() => [
                          createTextVNode("\u0421\u043E\u0437\u0434\u0430\u0442\u044C \u0437\u0430\u043A\u0430\u0437")
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
                  createVNode(_component_MyOrdersOrderForm, {
                    deal: props.deal,
                    onGetNewOrderDatas: newOrderDatas
                  }, null, 8, ["deal"]),
                  createVNode(_component_UiDialogFooter, null, {
                    default: withCtx(() => [
                      createVNode("div", { class: "flex justify-between w-full" })
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
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/my/orders/CreateModal.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "EditModal",
  __ssrInlineRender: true,
  props: {
    order: {}
  },
  emits: ["order-edited"],
  setup(__props, { emit: __emit }) {
    const { $useApi } = useNuxtApp();
    const props = __props;
    const editedOrder = ref();
    const isOpen = ref(false);
    const editedOrderDatas = (data) => {
      editedOrder.value = { ...data[0] };
      return;
    };
    const emit = __emit;
    const editOrder = async () => {
      try {
        await $useApi.patch(`/orders/${props.order.id}`, {
          ...editedOrder.value
        });
        emit("order-edited", "data");
        isOpen.value = false;
        return;
      } catch (e) {
        console.log(e);
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UiDialog = _sfc_main$4$1;
      const _component_UiDialogTrigger = _sfc_main$3$1;
      const _component_UiButton = _sfc_main$e;
      const _component_Icon = __nuxt_component_0;
      const _component_UiDialogContent = _sfc_main$i;
      const _component_UiDialogHeader = _sfc_main$2$2;
      const _component_UiDialogTitle = _sfc_main$1$4;
      const _component_UiDialogDescription = _sfc_main$j;
      const _component_MyOrdersOrderForm = _sfc_main$k;
      const _component_UiDialogFooter = _sfc_main$l;
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
                  _push3(ssrRenderComponent(_component_UiButton, { class: "" }, {
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
                    createVNode(_component_UiButton, { class: "" }, {
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
            _push2(ssrRenderComponent(_component_UiDialogContent, { class: "flex flex-col max-w-[1200px]" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UiDialogHeader, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_UiDialogTitle, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u0437\u0430\u043A\u0430\u0437`);
                            } else {
                              return [
                                createTextVNode("\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u0437\u0430\u043A\u0430\u0437")
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
                              createTextVNode("\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u0437\u0430\u043A\u0430\u0437")
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
                  _push3(`<div class="flex gap-6"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_MyOrdersOrderForm, {
                    order: props.order,
                    onGetEditedOrderDatas: editedOrderDatas
                  }, null, _parent3, _scopeId2));
                  _push3(`</div>`);
                  _push3(ssrRenderComponent(_component_UiDialogFooter, { class: "w-full" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="flex justify-between w-full"${_scopeId3}>`);
                        _push4(ssrRenderComponent(_component_UiButton, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` \u041E\u0442\u043C\u0435\u043D\u0438\u0442\u044C `);
                            } else {
                              return [
                                createTextVNode(" \u041E\u0442\u043C\u0435\u043D\u0438\u0442\u044C ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_UiButton, { onClick: editOrder }, {
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
                            createVNode(_component_UiButton, null, {
                              default: withCtx(() => [
                                createTextVNode(" \u041E\u0442\u043C\u0435\u043D\u0438\u0442\u044C ")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_UiButton, { onClick: editOrder }, {
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
                            createTextVNode("\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u0437\u0430\u043A\u0430\u0437")
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
                    createVNode("div", { class: "flex gap-6" }, [
                      createVNode(_component_MyOrdersOrderForm, {
                        order: props.order,
                        onGetEditedOrderDatas: editedOrderDatas
                      }, null, 8, ["order"])
                    ]),
                    createVNode(_component_UiDialogFooter, { class: "w-full" }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "flex justify-between w-full" }, [
                          createVNode(_component_UiButton, null, {
                            default: withCtx(() => [
                              createTextVNode(" \u041E\u0442\u043C\u0435\u043D\u0438\u0442\u044C ")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_UiButton, { onClick: editOrder }, {
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
                  createVNode(_component_UiButton, { class: "" }, {
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
              createVNode(_component_UiDialogContent, { class: "flex flex-col max-w-[1200px]" }, {
                default: withCtx(() => [
                  createVNode(_component_UiDialogHeader, null, {
                    default: withCtx(() => [
                      createVNode(_component_UiDialogTitle, null, {
                        default: withCtx(() => [
                          createTextVNode("\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u0437\u0430\u043A\u0430\u0437")
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
                  createVNode("div", { class: "flex gap-6" }, [
                    createVNode(_component_MyOrdersOrderForm, {
                      order: props.order,
                      onGetEditedOrderDatas: editedOrderDatas
                    }, null, 8, ["order"])
                  ]),
                  createVNode(_component_UiDialogFooter, { class: "w-full" }, {
                    default: withCtx(() => [
                      createVNode("div", { class: "flex justify-between w-full" }, [
                        createVNode(_component_UiButton, null, {
                          default: withCtx(() => [
                            createTextVNode(" \u041E\u0442\u043C\u0435\u043D\u0438\u0442\u044C ")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_UiButton, { onClick: editOrder }, {
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
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/my/orders/EditModal.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "NewDeliveryForm",
  __ssrInlineRender: true,
  emits: ["get-new-delivery-datas"],
  setup(__props, { emit: __emit }) {
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
    const newDelivery = ref({
      id: 0,
      method: methods[0],
      type: types[0],
      description: "",
      track: "",
      status: "",
      price: 0,
      date: (/* @__PURE__ */ new Date()).toISOString().slice(0, 10),
      deliveredDate: ""
    });
    const emit = __emit;
    const handleDataChange = () => {
      emit("get-new-delivery-datas", newDelivery.value);
    };
    watch(
      newDelivery,
      () => {
        console.log("newDelivery", newDelivery.value.description);
        handleDataChange();
      },
      { deep: true }
    );
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UiCard = _sfc_main$b;
      const _component_UiCardHeader = _sfc_main$1$2;
      const _component_UiCardTitle = _sfc_main$c;
      const _component_UiCardDescription = _sfc_main$d;
      const _component_UiCardContent = _sfc_main$f;
      const _component_UiLabel = _sfc_main$m;
      const _component_UiSelect = _sfc_main$6$1;
      const _component_UiSelectTrigger = _sfc_main$4$2;
      const _component_UiSelectValue = _sfc_main$5$1;
      const _component_UiSelectContent = _sfc_main$3$2;
      const _component_UiSelectGroup = _sfc_main$n;
      const _component_UiSelectItem = _sfc_main$2$3;
      const _component_UiInput = _sfc_main$9;
      const _component_UiTextarea = _sfc_main$o;
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
                        _push4(`\u0414\u043E\u0441\u0442\u0430\u0432\u043A\u0430`);
                      } else {
                        return [
                          createTextVNode("\u0414\u043E\u0441\u0442\u0430\u0432\u043A\u0430")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_UiCardDescription, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`\u0417\u0430\u043F\u043E\u043B\u043D\u0438 \u0434\u0430\u043D\u043D\u044B\u0435 \u0434\u043E\u0441\u0442\u0430\u0432\u043A\u0438`);
                      } else {
                        return [
                          createTextVNode("\u0417\u0430\u043F\u043E\u043B\u043D\u0438 \u0434\u0430\u043D\u043D\u044B\u0435 \u0434\u043E\u0441\u0442\u0430\u0432\u043A\u0438")
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
                    }),
                    createVNode(_component_UiCardDescription, null, {
                      default: withCtx(() => [
                        createTextVNode("\u0417\u0430\u043F\u043E\u043B\u043D\u0438 \u0434\u0430\u043D\u043D\u044B\u0435 \u0434\u043E\u0441\u0442\u0430\u0432\u043A\u0438")
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
                  _push3(`<div class="flex flex-col gap-5"${_scopeId2}><div class="relative"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1" }, {
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
                    modelValue: unref(newDelivery).method,
                    "onUpdate:modelValue": ($event) => unref(newDelivery).method = $event
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_UiSelectTrigger, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_UiSelectValue, null, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_UiSelectValue)
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_UiSelectContent, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<!--[-->`);
                              ssrRenderList(methods, (item, index) => {
                                _push5(ssrRenderComponent(_component_UiSelectGroup, {
                                  key: methods[index]
                                }, {
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
                                (openBlock(), createBlock(Fragment, null, renderList(methods, (item, index) => {
                                  return createVNode(_component_UiSelectGroup, {
                                    key: methods[index]
                                  }, {
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
                              createVNode(_component_UiSelectValue)
                            ]),
                            _: 1
                          }),
                          createVNode(_component_UiSelectContent, null, {
                            default: withCtx(() => [
                              (openBlock(), createBlock(Fragment, null, renderList(methods, (item, index) => {
                                return createVNode(_component_UiSelectGroup, {
                                  key: methods[index]
                                }, {
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
                  _push3(`</div><div class="flex gap-2"${_scopeId2}><div class="relative w-full"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`\u0414\u0430\u0442\u0430 \u043E\u0442\u043F\u0440\u0430\u0432\u043A\u0438`);
                      } else {
                        return [
                          createTextVNode("\u0414\u0430\u0442\u0430 \u043E\u0442\u043F\u0440\u0430\u0432\u043A\u0438")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_UiInput, {
                    modelValue: unref(newDelivery).date,
                    "onUpdate:modelValue": ($event) => unref(newDelivery).date = $event,
                    type: "date",
                    min: (/* @__PURE__ */ new Date()).toISOString().slice(0, 7) + "-01",
                    class: unref(newDelivery).date ? "" : "outline outline-1 outline-rose-300"
                  }, null, _parent3, _scopeId2));
                  _push3(`</div><div class="relative w-full"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`\u0414\u0430\u0442\u0430 \u0432\u0440\u0443\u0447\u0435\u043D\u0438\u044F`);
                      } else {
                        return [
                          createTextVNode("\u0414\u0430\u0442\u0430 \u0432\u0440\u0443\u0447\u0435\u043D\u0438\u044F")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_UiInput, {
                    modelValue: unref(newDelivery).deliveredDate,
                    "onUpdate:modelValue": ($event) => unref(newDelivery).deliveredDate = $event,
                    type: "date",
                    min: (/* @__PURE__ */ new Date()).toISOString().slice(0, 7) + "-01"
                  }, null, _parent3, _scopeId2));
                  _push3(`</div></div><div class="relative"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`\u041E\u043F\u043B\u0430\u0442\u0430`);
                      } else {
                        return [
                          createTextVNode("\u041E\u043F\u043B\u0430\u0442\u0430")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_UiSelect, {
                    modelValue: unref(newDelivery).type,
                    "onUpdate:modelValue": ($event) => unref(newDelivery).type = $event
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_UiSelectTrigger, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_UiSelectValue, null, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_UiSelectValue)
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_UiSelectContent, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<!--[-->`);
                              ssrRenderList(types, (item, index) => {
                                _push5(ssrRenderComponent(_component_UiSelectGroup, {
                                  key: types[index]
                                }, {
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
                                (openBlock(), createBlock(Fragment, null, renderList(types, (item, index) => {
                                  return createVNode(_component_UiSelectGroup, {
                                    key: types[index]
                                  }, {
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
                              createVNode(_component_UiSelectValue)
                            ]),
                            _: 1
                          }),
                          createVNode(_component_UiSelectContent, null, {
                            default: withCtx(() => [
                              (openBlock(), createBlock(Fragment, null, renderList(types, (item, index) => {
                                return createVNode(_component_UiSelectGroup, {
                                  key: types[index]
                                }, {
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
                  _push3(ssrRenderComponent(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`\u0421\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C \u0434\u043E\u0441\u0442\u0430\u0432\u043A\u0438`);
                      } else {
                        return [
                          createTextVNode("\u0421\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C \u0434\u043E\u0441\u0442\u0430\u0432\u043A\u0438")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_UiInput, {
                    modelValue: unref(newDelivery).price,
                    "onUpdate:modelValue": ($event) => unref(newDelivery).price = $event,
                    type: "number",
                    class: "col-span-3"
                  }, null, _parent3, _scopeId2));
                  _push3(`</div><div class="relative"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1" }, {
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
                  _push3(ssrRenderComponent(_component_UiInput, {
                    modelValue: unref(newDelivery).track,
                    "onUpdate:modelValue": ($event) => unref(newDelivery).track = $event,
                    class: "col-span-3"
                  }, null, _parent3, _scopeId2));
                  _push3(`</div><div class="relative"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`\u0414\u043E\u043F. \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F`);
                      } else {
                        return [
                          createTextVNode("\u0414\u043E\u043F. \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_UiTextarea, {
                    modelValue: unref(newDelivery).description,
                    "onUpdate:modelValue": ($event) => unref(newDelivery).description = $event,
                    placeholder: "\u0418\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F \u043E \u0434\u043E\u0441\u0442\u0430\u0432\u043A\u0435"
                  }, null, _parent3, _scopeId2));
                  _push3(`</div></div>`);
                } else {
                  return [
                    createVNode("div", { class: "flex flex-col gap-5" }, [
                      createVNode("div", { class: "relative" }, [
                        createVNode(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1" }, {
                          default: withCtx(() => [
                            createTextVNode("\u0421\u043F\u043E\u0441\u043E\u0431 \u0434\u043E\u0441\u0442\u0430\u0432\u043A\u0438")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_UiSelect, {
                          modelValue: unref(newDelivery).method,
                          "onUpdate:modelValue": ($event) => unref(newDelivery).method = $event
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_UiSelectTrigger, null, {
                              default: withCtx(() => [
                                createVNode(_component_UiSelectValue)
                              ]),
                              _: 1
                            }),
                            createVNode(_component_UiSelectContent, null, {
                              default: withCtx(() => [
                                (openBlock(), createBlock(Fragment, null, renderList(methods, (item, index) => {
                                  return createVNode(_component_UiSelectGroup, {
                                    key: methods[index]
                                  }, {
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
                      createVNode("div", { class: "flex gap-2" }, [
                        createVNode("div", { class: "relative w-full" }, [
                          createVNode(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1" }, {
                            default: withCtx(() => [
                              createTextVNode("\u0414\u0430\u0442\u0430 \u043E\u0442\u043F\u0440\u0430\u0432\u043A\u0438")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_UiInput, {
                            modelValue: unref(newDelivery).date,
                            "onUpdate:modelValue": ($event) => unref(newDelivery).date = $event,
                            type: "date",
                            min: (/* @__PURE__ */ new Date()).toISOString().slice(0, 7) + "-01",
                            class: unref(newDelivery).date ? "" : "outline outline-1 outline-rose-300"
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "min", "class"])
                        ]),
                        createVNode("div", { class: "relative w-full" }, [
                          createVNode(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1" }, {
                            default: withCtx(() => [
                              createTextVNode("\u0414\u0430\u0442\u0430 \u0432\u0440\u0443\u0447\u0435\u043D\u0438\u044F")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_UiInput, {
                            modelValue: unref(newDelivery).deliveredDate,
                            "onUpdate:modelValue": ($event) => unref(newDelivery).deliveredDate = $event,
                            type: "date",
                            min: (/* @__PURE__ */ new Date()).toISOString().slice(0, 7) + "-01"
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "min"])
                        ])
                      ]),
                      createVNode("div", { class: "relative" }, [
                        createVNode(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1" }, {
                          default: withCtx(() => [
                            createTextVNode("\u041E\u043F\u043B\u0430\u0442\u0430")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_UiSelect, {
                          modelValue: unref(newDelivery).type,
                          "onUpdate:modelValue": ($event) => unref(newDelivery).type = $event
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_UiSelectTrigger, null, {
                              default: withCtx(() => [
                                createVNode(_component_UiSelectValue)
                              ]),
                              _: 1
                            }),
                            createVNode(_component_UiSelectContent, null, {
                              default: withCtx(() => [
                                (openBlock(), createBlock(Fragment, null, renderList(types, (item, index) => {
                                  return createVNode(_component_UiSelectGroup, {
                                    key: types[index]
                                  }, {
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
                        createVNode(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1" }, {
                          default: withCtx(() => [
                            createTextVNode("\u0421\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C \u0434\u043E\u0441\u0442\u0430\u0432\u043A\u0438")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_UiInput, {
                          modelValue: unref(newDelivery).price,
                          "onUpdate:modelValue": ($event) => unref(newDelivery).price = $event,
                          type: "number",
                          class: "col-span-3"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      createVNode("div", { class: "relative" }, [
                        createVNode(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1" }, {
                          default: withCtx(() => [
                            createTextVNode("\u0422\u0440\u0435\u043A")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_UiInput, {
                          modelValue: unref(newDelivery).track,
                          "onUpdate:modelValue": ($event) => unref(newDelivery).track = $event,
                          class: "col-span-3"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      createVNode("div", { class: "relative" }, [
                        createVNode(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1" }, {
                          default: withCtx(() => [
                            createTextVNode("\u0414\u043E\u043F. \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_UiTextarea, {
                          modelValue: unref(newDelivery).description,
                          "onUpdate:modelValue": ($event) => unref(newDelivery).description = $event,
                          placeholder: "\u0418\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F \u043E \u0434\u043E\u0441\u0442\u0430\u0432\u043A\u0435"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
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
                      createTextVNode("\u0414\u043E\u0441\u0442\u0430\u0432\u043A\u0430")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_UiCardDescription, null, {
                    default: withCtx(() => [
                      createTextVNode("\u0417\u0430\u043F\u043E\u043B\u043D\u0438 \u0434\u0430\u043D\u043D\u044B\u0435 \u0434\u043E\u0441\u0442\u0430\u0432\u043A\u0438")
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(_component_UiCardContent, null, {
                default: withCtx(() => [
                  createVNode("div", { class: "flex flex-col gap-5" }, [
                    createVNode("div", { class: "relative" }, [
                      createVNode(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1" }, {
                        default: withCtx(() => [
                          createTextVNode("\u0421\u043F\u043E\u0441\u043E\u0431 \u0434\u043E\u0441\u0442\u0430\u0432\u043A\u0438")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_UiSelect, {
                        modelValue: unref(newDelivery).method,
                        "onUpdate:modelValue": ($event) => unref(newDelivery).method = $event
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_UiSelectTrigger, null, {
                            default: withCtx(() => [
                              createVNode(_component_UiSelectValue)
                            ]),
                            _: 1
                          }),
                          createVNode(_component_UiSelectContent, null, {
                            default: withCtx(() => [
                              (openBlock(), createBlock(Fragment, null, renderList(methods, (item, index) => {
                                return createVNode(_component_UiSelectGroup, {
                                  key: methods[index]
                                }, {
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
                    createVNode("div", { class: "flex gap-2" }, [
                      createVNode("div", { class: "relative w-full" }, [
                        createVNode(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1" }, {
                          default: withCtx(() => [
                            createTextVNode("\u0414\u0430\u0442\u0430 \u043E\u0442\u043F\u0440\u0430\u0432\u043A\u0438")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_UiInput, {
                          modelValue: unref(newDelivery).date,
                          "onUpdate:modelValue": ($event) => unref(newDelivery).date = $event,
                          type: "date",
                          min: (/* @__PURE__ */ new Date()).toISOString().slice(0, 7) + "-01",
                          class: unref(newDelivery).date ? "" : "outline outline-1 outline-rose-300"
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "min", "class"])
                      ]),
                      createVNode("div", { class: "relative w-full" }, [
                        createVNode(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1" }, {
                          default: withCtx(() => [
                            createTextVNode("\u0414\u0430\u0442\u0430 \u0432\u0440\u0443\u0447\u0435\u043D\u0438\u044F")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_UiInput, {
                          modelValue: unref(newDelivery).deliveredDate,
                          "onUpdate:modelValue": ($event) => unref(newDelivery).deliveredDate = $event,
                          type: "date",
                          min: (/* @__PURE__ */ new Date()).toISOString().slice(0, 7) + "-01"
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "min"])
                      ])
                    ]),
                    createVNode("div", { class: "relative" }, [
                      createVNode(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1" }, {
                        default: withCtx(() => [
                          createTextVNode("\u041E\u043F\u043B\u0430\u0442\u0430")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_UiSelect, {
                        modelValue: unref(newDelivery).type,
                        "onUpdate:modelValue": ($event) => unref(newDelivery).type = $event
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_UiSelectTrigger, null, {
                            default: withCtx(() => [
                              createVNode(_component_UiSelectValue)
                            ]),
                            _: 1
                          }),
                          createVNode(_component_UiSelectContent, null, {
                            default: withCtx(() => [
                              (openBlock(), createBlock(Fragment, null, renderList(types, (item, index) => {
                                return createVNode(_component_UiSelectGroup, {
                                  key: types[index]
                                }, {
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
                      createVNode(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1" }, {
                        default: withCtx(() => [
                          createTextVNode("\u0421\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C \u0434\u043E\u0441\u0442\u0430\u0432\u043A\u0438")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_UiInput, {
                        modelValue: unref(newDelivery).price,
                        "onUpdate:modelValue": ($event) => unref(newDelivery).price = $event,
                        type: "number",
                        class: "col-span-3"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    createVNode("div", { class: "relative" }, [
                      createVNode(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1" }, {
                        default: withCtx(() => [
                          createTextVNode("\u0422\u0440\u0435\u043A")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_UiInput, {
                        modelValue: unref(newDelivery).track,
                        "onUpdate:modelValue": ($event) => unref(newDelivery).track = $event,
                        class: "col-span-3"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    createVNode("div", { class: "relative" }, [
                      createVNode(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1" }, {
                        default: withCtx(() => [
                          createTextVNode("\u0414\u043E\u043F. \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_UiTextarea, {
                        modelValue: unref(newDelivery).description,
                        "onUpdate:modelValue": ($event) => unref(newDelivery).description = $event,
                        placeholder: "\u0418\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F \u043E \u0434\u043E\u0441\u0442\u0430\u0432\u043A\u0435"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
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
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/my/deliveries/NewDeliveryForm.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "CreateModal",
  __ssrInlineRender: true,
  props: {
    deal: {}
  },
  emits: ["delivery-created"],
  setup(__props, { emit: __emit }) {
    const { $useApi } = useNuxtApp();
    const props = __props;
    const newOrder = ref({});
    const isOpen = ref(false);
    const newDeliveryDatas = (data) => {
      newOrder.value = { ...data };
      return;
    };
    const emit = __emit;
    const createDelivery = async () => {
      await $useApi.post(
        `/deals/${props.deal.id}/deliveries/`,
        {
          ...newOrder.value
        }
      );
      emit("delivery-created", "data");
      isOpen.value = false;
      return;
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UiDialog = _sfc_main$4$1;
      const _component_UiDialogTrigger = _sfc_main$3$1;
      const _component_UiButton = _sfc_main$e;
      const _component_UiDialogContent = _sfc_main$i;
      const _component_UiDialogHeader = _sfc_main$2$2;
      const _component_UiDialogTitle = _sfc_main$1$4;
      const _component_UiDialogDescription = _sfc_main$j;
      const _component_MyDeliveriesNewDeliveryForm = _sfc_main$3;
      const _component_UiDialogFooter = _sfc_main$l;
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
                  _push3(ssrRenderComponent(_component_UiButton, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` + \u0414\u041E\u0411\u0410\u0412\u0418\u0422\u042C \u041F\u041E\u0414\u0410\u0420\u041E\u041A `);
                      } else {
                        return [
                          createTextVNode(" + \u0414\u041E\u0411\u0410\u0412\u0418\u0422\u042C \u041F\u041E\u0414\u0410\u0420\u041E\u041A ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UiButton, null, {
                      default: withCtx(() => [
                        createTextVNode(" + \u0414\u041E\u0411\u0410\u0412\u0418\u0422\u042C \u041F\u041E\u0414\u0410\u0420\u041E\u041A ")
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UiDialogContent, { class: "flex flex-col" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UiDialogHeader, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_UiDialogTitle, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0434\u043E\u0441\u0442\u0430\u0432\u043A\u0443`);
                            } else {
                              return [
                                createTextVNode("\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0434\u043E\u0441\u0442\u0430\u0432\u043A\u0443")
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
                              createTextVNode("\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0434\u043E\u0441\u0442\u0430\u0432\u043A\u0443")
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
                  _push3(`<div class="flex gap-6"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_MyDeliveriesNewDeliveryForm, { onGetNewDeliveryDatas: newDeliveryDatas }, null, _parent3, _scopeId2));
                  _push3(`</div>`);
                  _push3(ssrRenderComponent(_component_UiDialogFooter, { class: "w-full" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="flex justify-between w-full"${_scopeId3}>`);
                        _push4(ssrRenderComponent(_component_UiButton, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` \u041E\u0442\u043C\u0435\u043D\u0438\u0442\u044C `);
                            } else {
                              return [
                                createTextVNode(" \u041E\u0442\u043C\u0435\u043D\u0438\u0442\u044C ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_UiButton, { onClick: createDelivery }, {
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
                            createVNode(_component_UiButton, null, {
                              default: withCtx(() => [
                                createTextVNode(" \u041E\u0442\u043C\u0435\u043D\u0438\u0442\u044C ")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_UiButton, { onClick: createDelivery }, {
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
                            createTextVNode("\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0434\u043E\u0441\u0442\u0430\u0432\u043A\u0443")
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
                    createVNode("div", { class: "flex gap-6" }, [
                      createVNode(_component_MyDeliveriesNewDeliveryForm, { onGetNewDeliveryDatas: newDeliveryDatas })
                    ]),
                    createVNode(_component_UiDialogFooter, { class: "w-full" }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "flex justify-between w-full" }, [
                          createVNode(_component_UiButton, null, {
                            default: withCtx(() => [
                              createTextVNode(" \u041E\u0442\u043C\u0435\u043D\u0438\u0442\u044C ")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_UiButton, { onClick: createDelivery }, {
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
                  createVNode(_component_UiButton, null, {
                    default: withCtx(() => [
                      createTextVNode(" + \u0414\u041E\u0411\u0410\u0412\u0418\u0422\u042C \u041F\u041E\u0414\u0410\u0420\u041E\u041A ")
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(_component_UiDialogContent, { class: "flex flex-col" }, {
                default: withCtx(() => [
                  createVNode(_component_UiDialogHeader, null, {
                    default: withCtx(() => [
                      createVNode(_component_UiDialogTitle, null, {
                        default: withCtx(() => [
                          createTextVNode("\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0434\u043E\u0441\u0442\u0430\u0432\u043A\u0443")
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
                  createVNode("div", { class: "flex gap-6" }, [
                    createVNode(_component_MyDeliveriesNewDeliveryForm, { onGetNewDeliveryDatas: newDeliveryDatas })
                  ]),
                  createVNode(_component_UiDialogFooter, { class: "w-full" }, {
                    default: withCtx(() => [
                      createVNode("div", { class: "flex justify-between w-full" }, [
                        createVNode(_component_UiButton, null, {
                          default: withCtx(() => [
                            createTextVNode(" \u041E\u0442\u043C\u0435\u043D\u0438\u0442\u044C ")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_UiButton, { onClick: createDelivery }, {
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
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/my/gifts/CreateModal.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Card",
  __ssrInlineRender: true,
  props: {
    deal: {}
  },
  emits: ["deal-updated", "deal-loded", "order-moved"],
  setup(__props, { emit: __emit }) {
    const { $useApi } = useNuxtApp();
    const props = __props;
    console.log(props.deal.files);
    const emit = __emit;
    const dealUpdated = () => {
      console.log("deal-updated");
      emit("deal-updated", props.deal.id);
    };
    const deleteOrder = async (orderId) => {
      await $useApi.delete(`/orders/${orderId}`);
      emit("deal-updated", props.deal.id);
    };
    const changeStage = async (order) => {
      await $useApi.patch(`/orders/${order.id}/stage/${order.stageId + 1}`);
      emit("order-moved", props.deal);
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UiCard = _sfc_main$b;
      const _component_UiCardHeader = _sfc_main$1$2;
      const _component_UiCardTitle = _sfc_main$c;
      const _component_UiCardDescription = _sfc_main$d;
      const _component_UiButton = _sfc_main$e;
      const _component_NuxtLink = __nuxt_component_0$1;
      const _component_UiCardContent = _sfc_main$f;
      const _component_MyOrdersCreateModal = _sfc_main$5;
      const _component_UiScrollArea = _sfc_main$a;
      const _component_MyOrdersEditModal = _sfc_main$4;
      const _component_Icon = __nuxt_component_0;
      const _component_UiScrollBar = _sfc_main$1$3;
      const _component_MyDeliveriesCreateModal = _sfc_main$g;
      const _component_MyGiftsCreateModal = _sfc_main$2;
      const _component_UiCardFooter = _sfc_main$h;
      _push(ssrRenderComponent(_component_UiCard, mergeProps({ class: "flex flex-col overflow-hidden bg-slate-100" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UiCardHeader, { class: "flex flex-row items-start bg-slate-50 pb-1" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="flex flex-col justify-start w-full"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_UiCardTitle, { class: "flex items-center gap-2 text-lg pb-2" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` \u0418\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F: ${ssrInterpolate(_ctx.deal.title)}`);
                      } else {
                        return [
                          createTextVNode(" \u0418\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F: " + toDisplayString(_ctx.deal.title), 1)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_UiCardDescription, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` \u0413\u043E\u0442\u043E\u0432\u043D\u043E\u0441\u0442\u044C: ${ssrInterpolate(_ctx.deal.deadline)}`);
                      } else {
                        return [
                          createTextVNode(" \u0413\u043E\u0442\u043E\u0432\u043D\u043E\u0441\u0442\u044C: " + toDisplayString(_ctx.deal.deadline), 1)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_UiButton, { class: "h-6 mt-3 self-start" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_NuxtLink, {
                          to: "/orders/" + _ctx.deal.id
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` \u041F\u043E\u043B\u043D\u0430\u044F \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F `);
                            } else {
                              return [
                                createTextVNode(" \u041F\u043E\u043B\u043D\u0430\u044F \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_NuxtLink, {
                            to: "/orders/" + _ctx.deal.id
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" \u041F\u043E\u043B\u043D\u0430\u044F \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F ")
                            ]),
                            _: 1
                          }, 8, ["to"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("div", { class: "flex flex-col justify-start w-full" }, [
                      createVNode(_component_UiCardTitle, { class: "flex items-center gap-2 text-lg pb-2" }, {
                        default: withCtx(() => [
                          createTextVNode(" \u0418\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F: " + toDisplayString(_ctx.deal.title), 1)
                        ]),
                        _: 1
                      }),
                      createVNode(_component_UiCardDescription, null, {
                        default: withCtx(() => [
                          createTextVNode(" \u0413\u043E\u0442\u043E\u0432\u043D\u043E\u0441\u0442\u044C: " + toDisplayString(_ctx.deal.deadline), 1)
                        ]),
                        _: 1
                      }),
                      createVNode(_component_UiButton, { class: "h-6 mt-3 self-start" }, {
                        default: withCtx(() => [
                          createVNode(_component_NuxtLink, {
                            to: "/orders/" + _ctx.deal.id
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" \u041F\u043E\u043B\u043D\u0430\u044F \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F ")
                            ]),
                            _: 1
                          }, 8, ["to"])
                        ]),
                        _: 1
                      })
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UiCardContent, { class: "p-3 flex flex-col items-center h-full" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  if (_ctx.deal.preorder) {
                    _push3(ssrRenderComponent(_component_UiCard, { class: "overflow-hidden w-full mb-3" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_UiCardHeader, { class: "bg-slate-50 pb-1 mb-2" }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(_component_UiCardTitle, null, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(` \u041A\u0430\u0440\u0442\u043E\u0447\u043A\u0430 \u0434\u0438\u0437\u0430\u0439\u043D\u0430 `);
                                    } else {
                                      return [
                                        createTextVNode(" \u041A\u0430\u0440\u0442\u043E\u0447\u043A\u0430 \u0434\u0438\u0437\u0430\u0439\u043D\u0430 ")
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(_component_UiCardTitle, null, {
                                    default: withCtx(() => [
                                      createTextVNode(" \u041A\u0430\u0440\u0442\u043E\u0447\u043A\u0430 \u0434\u0438\u0437\u0430\u0439\u043D\u0430 ")
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
                              var _a, _b;
                              if (_push5) {
                                _push5(`<div class="flex"${_scopeId4}><div class="w-[200px] mr-3 rounded overflow-hidden"${_scopeId4}><img${ssrRenderAttr("src", _ctx.deal.preorder.preview)} alt="Preview" class="preview-image"${_scopeId4}></div><div class="flex flex-col"${_scopeId4}><a class="underline decoration-solid cursor-pointer text-blue-600"${ssrRenderAttr("href", (_a = _ctx.deal.preorder) == null ? void 0 : _a.card_link)} target="_blank"${_scopeId4}>\u0421\u0441\u044B\u043B\u043A\u0430 \u043D\u0430 \u043A\u0430\u0440\u0442\u043E\u0447\u043A\u0443</a><a class="underline decoration-solid cursor-pointer text-blue-600"${ssrRenderAttr(
                                  "href",
                                  _ctx.deal.preorder.maket + "?name=" + _ctx.deal.title + ".cdr&dl=true"
                                )}${_scopeId4}>\u041C\u0430\u043A\u0435\u0442</a></div></div>`);
                              } else {
                                return [
                                  createVNode("div", { class: "flex" }, [
                                    createVNode("div", { class: "w-[200px] mr-3 rounded overflow-hidden" }, [
                                      createVNode("img", {
                                        src: _ctx.deal.preorder.preview,
                                        alt: "Preview",
                                        class: "preview-image"
                                      }, null, 8, ["src"])
                                    ]),
                                    createVNode("div", { class: "flex flex-col" }, [
                                      createVNode("a", {
                                        class: "underline decoration-solid cursor-pointer text-blue-600",
                                        href: (_b = _ctx.deal.preorder) == null ? void 0 : _b.card_link,
                                        target: "_blank"
                                      }, "\u0421\u0441\u044B\u043B\u043A\u0430 \u043D\u0430 \u043A\u0430\u0440\u0442\u043E\u0447\u043A\u0443", 8, ["href"]),
                                      createVNode("a", {
                                        class: "underline decoration-solid cursor-pointer text-blue-600",
                                        href: _ctx.deal.preorder.maket + "?name=" + _ctx.deal.title + ".cdr&dl=true"
                                      }, "\u041C\u0430\u043A\u0435\u0442", 8, ["href"])
                                    ])
                                  ])
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(_component_UiCardHeader, { class: "bg-slate-50 pb-1 mb-2" }, {
                              default: withCtx(() => [
                                createVNode(_component_UiCardTitle, null, {
                                  default: withCtx(() => [
                                    createTextVNode(" \u041A\u0430\u0440\u0442\u043E\u0447\u043A\u0430 \u0434\u0438\u0437\u0430\u0439\u043D\u0430 ")
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }),
                            createVNode(_component_UiCardContent, null, {
                              default: withCtx(() => {
                                var _a;
                                return [
                                  createVNode("div", { class: "flex" }, [
                                    createVNode("div", { class: "w-[200px] mr-3 rounded overflow-hidden" }, [
                                      createVNode("img", {
                                        src: _ctx.deal.preorder.preview,
                                        alt: "Preview",
                                        class: "preview-image"
                                      }, null, 8, ["src"])
                                    ]),
                                    createVNode("div", { class: "flex flex-col" }, [
                                      createVNode("a", {
                                        class: "underline decoration-solid cursor-pointer text-blue-600",
                                        href: (_a = _ctx.deal.preorder) == null ? void 0 : _a.card_link,
                                        target: "_blank"
                                      }, "\u0421\u0441\u044B\u043B\u043A\u0430 \u043D\u0430 \u043A\u0430\u0440\u0442\u043E\u0447\u043A\u0443", 8, ["href"]),
                                      createVNode("a", {
                                        class: "underline decoration-solid cursor-pointer text-blue-600",
                                        href: _ctx.deal.preorder.maket + "?name=" + _ctx.deal.title + ".cdr&dl=true"
                                      }, "\u041C\u0430\u043A\u0435\u0442", 8, ["href"])
                                    ])
                                  ])
                                ];
                              }),
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
                  _push3(ssrRenderComponent(_component_UiCard, { class: "mb-3 w-full overflow-hidden" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      var _a, _b, _c, _d;
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_UiCardHeader, { class: "p-2 pb-2 bg-slate-50 flex" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_UiCardTitle, { class: "flex items-center" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    if (_ctx.deal.status === "\u0421\u043E\u0437\u0434\u0430\u043D\u0430") {
                                      _push6(ssrRenderComponent(_component_MyOrdersCreateModal, {
                                        deal: _ctx.deal,
                                        class: "mr-3 justify-between",
                                        onOrderCreated: dealUpdated
                                      }, null, _parent6, _scopeId5));
                                    } else {
                                      _push6(`<!---->`);
                                    }
                                    _push6(` \u0421\u043F\u0438\u0441\u043E\u043A \u0437\u0430\u043A\u0430\u0437\u043E\u0432 `);
                                  } else {
                                    return [
                                      _ctx.deal.status === "\u0421\u043E\u0437\u0434\u0430\u043D\u0430" ? (openBlock(), createBlock(_component_MyOrdersCreateModal, {
                                        key: 0,
                                        deal: _ctx.deal,
                                        class: "mr-3 justify-between",
                                        onOrderCreated: dealUpdated
                                      }, null, 8, ["deal"])) : createCommentVNode("", true),
                                      createTextVNode(" \u0421\u043F\u0438\u0441\u043E\u043A \u0437\u0430\u043A\u0430\u0437\u043E\u0432 ")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_UiCardTitle, { class: "flex items-center" }, {
                                  default: withCtx(() => [
                                    _ctx.deal.status === "\u0421\u043E\u0437\u0434\u0430\u043D\u0430" ? (openBlock(), createBlock(_component_MyOrdersCreateModal, {
                                      key: 0,
                                      deal: _ctx.deal,
                                      class: "mr-3 justify-between",
                                      onOrderCreated: dealUpdated
                                    }, null, 8, ["deal"])) : createCommentVNode("", true),
                                    createTextVNode(" \u0421\u043F\u0438\u0441\u043E\u043A \u0437\u0430\u043A\u0430\u0437\u043E\u0432 ")
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        if ((_b = (_a = _ctx.deal) == null ? void 0 : _a.orders) == null ? void 0 : _b.length) {
                          _push4(ssrRenderComponent(_component_UiCardContent, { class: "p-2" }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(_component_UiScrollArea, { class: "pb-2" }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(`<div class="flex gap-2"${_scopeId5}><!--[-->`);
                                      ssrRenderList(_ctx.deal.orders, (order, index) => {
                                        _push6(`<div class="mb-2 w-[300px] h-full"${_scopeId5}>`);
                                        _push6(ssrRenderComponent(_component_UiCard, null, {
                                          default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                            if (_push7) {
                                              _push7(ssrRenderComponent(_component_UiCardHeader, { class: "p-2" }, {
                                                default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                  if (_push8) {
                                                    _push8(`<div${_scopeId7}>`);
                                                    _push8(ssrRenderComponent(_component_UiCardTitle, null, {
                                                      default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                        if (_push9) {
                                                          _push9(`${ssrInterpolate(order.title)}`);
                                                        } else {
                                                          return [
                                                            createTextVNode(toDisplayString(order.title), 1)
                                                          ];
                                                        }
                                                      }),
                                                      _: 2
                                                    }, _parent8, _scopeId7));
                                                    _push8(ssrRenderComponent(_component_UiCardDescription, null, {
                                                      default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                        var _a2, _b2;
                                                        if (_push9) {
                                                          _push9(` \u0441\u0442\u0430\u0442\u0443\u0441 - ${ssrInterpolate(((_a2 = order.stage) == null ? void 0 : _a2.title) || "dfsds")}`);
                                                        } else {
                                                          return [
                                                            createTextVNode(" \u0441\u0442\u0430\u0442\u0443\u0441 - " + toDisplayString(((_b2 = order.stage) == null ? void 0 : _b2.title) || "dfsds"), 1)
                                                          ];
                                                        }
                                                      }),
                                                      _: 2
                                                    }, _parent8, _scopeId7));
                                                    _push8(`</div>`);
                                                  } else {
                                                    return [
                                                      createVNode("div", null, [
                                                        createVNode(_component_UiCardTitle, null, {
                                                          default: withCtx(() => [
                                                            createTextVNode(toDisplayString(order.title), 1)
                                                          ]),
                                                          _: 2
                                                        }, 1024),
                                                        createVNode(_component_UiCardDescription, null, {
                                                          default: withCtx(() => {
                                                            var _a2;
                                                            return [
                                                              createTextVNode(" \u0441\u0442\u0430\u0442\u0443\u0441 - " + toDisplayString(((_a2 = order.stage) == null ? void 0 : _a2.title) || "dfsds"), 1)
                                                            ];
                                                          }),
                                                          _: 2
                                                        }, 1024)
                                                      ])
                                                    ];
                                                  }
                                                }),
                                                _: 2
                                              }, _parent7, _scopeId6));
                                              _push7(ssrRenderComponent(_component_UiCardContent, { class: "p-2" }, {
                                                default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                  if (_push8) {
                                                    _push8(`<div class="flex justify-between"${_scopeId7}>`);
                                                    _push8(ssrRenderComponent(_component_MyOrdersEditModal, {
                                                      order,
                                                      onOrderEdited: dealUpdated
                                                    }, null, _parent8, _scopeId7));
                                                    if (_ctx.deal.status === "\u0421\u043E\u0437\u0434\u0430\u043D\u0430") {
                                                      _push8(ssrRenderComponent(_component_UiButton, {
                                                        onClick: () => deleteOrder(order.id)
                                                      }, {
                                                        default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                          if (_push9) {
                                                            _push9(ssrRenderComponent(_component_Icon, {
                                                              name: "mi:delete",
                                                              color: "white",
                                                              size: "25px"
                                                            }, null, _parent9, _scopeId8));
                                                          } else {
                                                            return [
                                                              createVNode(_component_Icon, {
                                                                name: "mi:delete",
                                                                color: "white",
                                                                size: "25px"
                                                              })
                                                            ];
                                                          }
                                                        }),
                                                        _: 2
                                                      }, _parent8, _scopeId7));
                                                    } else {
                                                      _push8(ssrRenderComponent(_component_UiButton, {
                                                        onClick: () => changeStage(order)
                                                      }, {
                                                        default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                          if (_push9) {
                                                            _push9(` \u0413\u043E\u0442\u043E\u0432\u043E `);
                                                          } else {
                                                            return [
                                                              createTextVNode(" \u0413\u043E\u0442\u043E\u0432\u043E ")
                                                            ];
                                                          }
                                                        }),
                                                        _: 2
                                                      }, _parent8, _scopeId7));
                                                    }
                                                    _push8(`</div>`);
                                                  } else {
                                                    return [
                                                      createVNode("div", { class: "flex justify-between" }, [
                                                        createVNode(_component_MyOrdersEditModal, {
                                                          order,
                                                          onOrderEdited: dealUpdated
                                                        }, null, 8, ["order"]),
                                                        _ctx.deal.status === "\u0421\u043E\u0437\u0434\u0430\u043D\u0430" ? (openBlock(), createBlock(_component_UiButton, {
                                                          key: 0,
                                                          onClick: () => deleteOrder(order.id)
                                                        }, {
                                                          default: withCtx(() => [
                                                            createVNode(_component_Icon, {
                                                              name: "mi:delete",
                                                              color: "white",
                                                              size: "25px"
                                                            })
                                                          ]),
                                                          _: 2
                                                        }, 1032, ["onClick"])) : (openBlock(), createBlock(_component_UiButton, {
                                                          key: 1,
                                                          onClick: () => changeStage(order)
                                                        }, {
                                                          default: withCtx(() => [
                                                            createTextVNode(" \u0413\u043E\u0442\u043E\u0432\u043E ")
                                                          ]),
                                                          _: 2
                                                        }, 1032, ["onClick"]))
                                                      ])
                                                    ];
                                                  }
                                                }),
                                                _: 2
                                              }, _parent7, _scopeId6));
                                            } else {
                                              return [
                                                createVNode(_component_UiCardHeader, { class: "p-2" }, {
                                                  default: withCtx(() => [
                                                    createVNode("div", null, [
                                                      createVNode(_component_UiCardTitle, null, {
                                                        default: withCtx(() => [
                                                          createTextVNode(toDisplayString(order.title), 1)
                                                        ]),
                                                        _: 2
                                                      }, 1024),
                                                      createVNode(_component_UiCardDescription, null, {
                                                        default: withCtx(() => {
                                                          var _a2;
                                                          return [
                                                            createTextVNode(" \u0441\u0442\u0430\u0442\u0443\u0441 - " + toDisplayString(((_a2 = order.stage) == null ? void 0 : _a2.title) || "dfsds"), 1)
                                                          ];
                                                        }),
                                                        _: 2
                                                      }, 1024)
                                                    ])
                                                  ]),
                                                  _: 2
                                                }, 1024),
                                                createVNode(_component_UiCardContent, { class: "p-2" }, {
                                                  default: withCtx(() => [
                                                    createVNode("div", { class: "flex justify-between" }, [
                                                      createVNode(_component_MyOrdersEditModal, {
                                                        order,
                                                        onOrderEdited: dealUpdated
                                                      }, null, 8, ["order"]),
                                                      _ctx.deal.status === "\u0421\u043E\u0437\u0434\u0430\u043D\u0430" ? (openBlock(), createBlock(_component_UiButton, {
                                                        key: 0,
                                                        onClick: () => deleteOrder(order.id)
                                                      }, {
                                                        default: withCtx(() => [
                                                          createVNode(_component_Icon, {
                                                            name: "mi:delete",
                                                            color: "white",
                                                            size: "25px"
                                                          })
                                                        ]),
                                                        _: 2
                                                      }, 1032, ["onClick"])) : (openBlock(), createBlock(_component_UiButton, {
                                                        key: 1,
                                                        onClick: () => changeStage(order)
                                                      }, {
                                                        default: withCtx(() => [
                                                          createTextVNode(" \u0413\u043E\u0442\u043E\u0432\u043E ")
                                                        ]),
                                                        _: 2
                                                      }, 1032, ["onClick"]))
                                                    ])
                                                  ]),
                                                  _: 2
                                                }, 1024)
                                              ];
                                            }
                                          }),
                                          _: 2
                                        }, _parent6, _scopeId5));
                                        _push6(`</div>`);
                                      });
                                      _push6(`<!--]--></div>`);
                                      _push6(ssrRenderComponent(_component_UiScrollBar, { orientation: "horizontal" }, null, _parent6, _scopeId5));
                                    } else {
                                      return [
                                        createVNode("div", { class: "flex gap-2" }, [
                                          (openBlock(true), createBlock(Fragment, null, renderList(_ctx.deal.orders, (order, index) => {
                                            return openBlock(), createBlock("div", {
                                              key: index,
                                              class: "mb-2 w-[300px] h-full"
                                            }, [
                                              createVNode(_component_UiCard, null, {
                                                default: withCtx(() => [
                                                  createVNode(_component_UiCardHeader, { class: "p-2" }, {
                                                    default: withCtx(() => [
                                                      createVNode("div", null, [
                                                        createVNode(_component_UiCardTitle, null, {
                                                          default: withCtx(() => [
                                                            createTextVNode(toDisplayString(order.title), 1)
                                                          ]),
                                                          _: 2
                                                        }, 1024),
                                                        createVNode(_component_UiCardDescription, null, {
                                                          default: withCtx(() => {
                                                            var _a2;
                                                            return [
                                                              createTextVNode(" \u0441\u0442\u0430\u0442\u0443\u0441 - " + toDisplayString(((_a2 = order.stage) == null ? void 0 : _a2.title) || "dfsds"), 1)
                                                            ];
                                                          }),
                                                          _: 2
                                                        }, 1024)
                                                      ])
                                                    ]),
                                                    _: 2
                                                  }, 1024),
                                                  createVNode(_component_UiCardContent, { class: "p-2" }, {
                                                    default: withCtx(() => [
                                                      createVNode("div", { class: "flex justify-between" }, [
                                                        createVNode(_component_MyOrdersEditModal, {
                                                          order,
                                                          onOrderEdited: dealUpdated
                                                        }, null, 8, ["order"]),
                                                        _ctx.deal.status === "\u0421\u043E\u0437\u0434\u0430\u043D\u0430" ? (openBlock(), createBlock(_component_UiButton, {
                                                          key: 0,
                                                          onClick: () => deleteOrder(order.id)
                                                        }, {
                                                          default: withCtx(() => [
                                                            createVNode(_component_Icon, {
                                                              name: "mi:delete",
                                                              color: "white",
                                                              size: "25px"
                                                            })
                                                          ]),
                                                          _: 2
                                                        }, 1032, ["onClick"])) : (openBlock(), createBlock(_component_UiButton, {
                                                          key: 1,
                                                          onClick: () => changeStage(order)
                                                        }, {
                                                          default: withCtx(() => [
                                                            createTextVNode(" \u0413\u043E\u0442\u043E\u0432\u043E ")
                                                          ]),
                                                          _: 2
                                                        }, 1032, ["onClick"]))
                                                      ])
                                                    ]),
                                                    _: 2
                                                  }, 1024)
                                                ]),
                                                _: 2
                                              }, 1024)
                                            ]);
                                          }), 128))
                                        ]),
                                        createVNode(_component_UiScrollBar, { orientation: "horizontal" })
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(_component_UiScrollArea, { class: "pb-2" }, {
                                    default: withCtx(() => [
                                      createVNode("div", { class: "flex gap-2" }, [
                                        (openBlock(true), createBlock(Fragment, null, renderList(_ctx.deal.orders, (order, index) => {
                                          return openBlock(), createBlock("div", {
                                            key: index,
                                            class: "mb-2 w-[300px] h-full"
                                          }, [
                                            createVNode(_component_UiCard, null, {
                                              default: withCtx(() => [
                                                createVNode(_component_UiCardHeader, { class: "p-2" }, {
                                                  default: withCtx(() => [
                                                    createVNode("div", null, [
                                                      createVNode(_component_UiCardTitle, null, {
                                                        default: withCtx(() => [
                                                          createTextVNode(toDisplayString(order.title), 1)
                                                        ]),
                                                        _: 2
                                                      }, 1024),
                                                      createVNode(_component_UiCardDescription, null, {
                                                        default: withCtx(() => {
                                                          var _a2;
                                                          return [
                                                            createTextVNode(" \u0441\u0442\u0430\u0442\u0443\u0441 - " + toDisplayString(((_a2 = order.stage) == null ? void 0 : _a2.title) || "dfsds"), 1)
                                                          ];
                                                        }),
                                                        _: 2
                                                      }, 1024)
                                                    ])
                                                  ]),
                                                  _: 2
                                                }, 1024),
                                                createVNode(_component_UiCardContent, { class: "p-2" }, {
                                                  default: withCtx(() => [
                                                    createVNode("div", { class: "flex justify-between" }, [
                                                      createVNode(_component_MyOrdersEditModal, {
                                                        order,
                                                        onOrderEdited: dealUpdated
                                                      }, null, 8, ["order"]),
                                                      _ctx.deal.status === "\u0421\u043E\u0437\u0434\u0430\u043D\u0430" ? (openBlock(), createBlock(_component_UiButton, {
                                                        key: 0,
                                                        onClick: () => deleteOrder(order.id)
                                                      }, {
                                                        default: withCtx(() => [
                                                          createVNode(_component_Icon, {
                                                            name: "mi:delete",
                                                            color: "white",
                                                            size: "25px"
                                                          })
                                                        ]),
                                                        _: 2
                                                      }, 1032, ["onClick"])) : (openBlock(), createBlock(_component_UiButton, {
                                                        key: 1,
                                                        onClick: () => changeStage(order)
                                                      }, {
                                                        default: withCtx(() => [
                                                          createTextVNode(" \u0413\u043E\u0442\u043E\u0432\u043E ")
                                                        ]),
                                                        _: 2
                                                      }, 1032, ["onClick"]))
                                                    ])
                                                  ]),
                                                  _: 2
                                                }, 1024)
                                              ]),
                                              _: 2
                                            }, 1024)
                                          ]);
                                        }), 128))
                                      ]),
                                      createVNode(_component_UiScrollBar, { orientation: "horizontal" })
                                    ]),
                                    _: 1
                                  })
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                        } else {
                          _push4(`<!---->`);
                        }
                      } else {
                        return [
                          createVNode(_component_UiCardHeader, { class: "p-2 pb-2 bg-slate-50 flex" }, {
                            default: withCtx(() => [
                              createVNode(_component_UiCardTitle, { class: "flex items-center" }, {
                                default: withCtx(() => [
                                  _ctx.deal.status === "\u0421\u043E\u0437\u0434\u0430\u043D\u0430" ? (openBlock(), createBlock(_component_MyOrdersCreateModal, {
                                    key: 0,
                                    deal: _ctx.deal,
                                    class: "mr-3 justify-between",
                                    onOrderCreated: dealUpdated
                                  }, null, 8, ["deal"])) : createCommentVNode("", true),
                                  createTextVNode(" \u0421\u043F\u0438\u0441\u043E\u043A \u0437\u0430\u043A\u0430\u0437\u043E\u0432 ")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          ((_d = (_c = _ctx.deal) == null ? void 0 : _c.orders) == null ? void 0 : _d.length) ? (openBlock(), createBlock(_component_UiCardContent, {
                            key: 0,
                            class: "p-2"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_UiScrollArea, { class: "pb-2" }, {
                                default: withCtx(() => [
                                  createVNode("div", { class: "flex gap-2" }, [
                                    (openBlock(true), createBlock(Fragment, null, renderList(_ctx.deal.orders, (order, index) => {
                                      return openBlock(), createBlock("div", {
                                        key: index,
                                        class: "mb-2 w-[300px] h-full"
                                      }, [
                                        createVNode(_component_UiCard, null, {
                                          default: withCtx(() => [
                                            createVNode(_component_UiCardHeader, { class: "p-2" }, {
                                              default: withCtx(() => [
                                                createVNode("div", null, [
                                                  createVNode(_component_UiCardTitle, null, {
                                                    default: withCtx(() => [
                                                      createTextVNode(toDisplayString(order.title), 1)
                                                    ]),
                                                    _: 2
                                                  }, 1024),
                                                  createVNode(_component_UiCardDescription, null, {
                                                    default: withCtx(() => {
                                                      var _a2;
                                                      return [
                                                        createTextVNode(" \u0441\u0442\u0430\u0442\u0443\u0441 - " + toDisplayString(((_a2 = order.stage) == null ? void 0 : _a2.title) || "dfsds"), 1)
                                                      ];
                                                    }),
                                                    _: 2
                                                  }, 1024)
                                                ])
                                              ]),
                                              _: 2
                                            }, 1024),
                                            createVNode(_component_UiCardContent, { class: "p-2" }, {
                                              default: withCtx(() => [
                                                createVNode("div", { class: "flex justify-between" }, [
                                                  createVNode(_component_MyOrdersEditModal, {
                                                    order,
                                                    onOrderEdited: dealUpdated
                                                  }, null, 8, ["order"]),
                                                  _ctx.deal.status === "\u0421\u043E\u0437\u0434\u0430\u043D\u0430" ? (openBlock(), createBlock(_component_UiButton, {
                                                    key: 0,
                                                    onClick: () => deleteOrder(order.id)
                                                  }, {
                                                    default: withCtx(() => [
                                                      createVNode(_component_Icon, {
                                                        name: "mi:delete",
                                                        color: "white",
                                                        size: "25px"
                                                      })
                                                    ]),
                                                    _: 2
                                                  }, 1032, ["onClick"])) : (openBlock(), createBlock(_component_UiButton, {
                                                    key: 1,
                                                    onClick: () => changeStage(order)
                                                  }, {
                                                    default: withCtx(() => [
                                                      createTextVNode(" \u0413\u043E\u0442\u043E\u0432\u043E ")
                                                    ]),
                                                    _: 2
                                                  }, 1032, ["onClick"]))
                                                ])
                                              ]),
                                              _: 2
                                            }, 1024)
                                          ]),
                                          _: 2
                                        }, 1024)
                                      ]);
                                    }), 128))
                                  ]),
                                  createVNode(_component_UiScrollBar, { orientation: "horizontal" })
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
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_UiCard, { class: "mb-3 w-full overflow-hidden" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      var _a, _b, _c, _d;
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_UiCardHeader, { class: "p-2 pb-2 bg-slate-50 flex" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_UiCardTitle, { class: "flex items-center" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    if (_ctx.deal.status === "\u0421\u043E\u0437\u0434\u0430\u043D\u0430") {
                                      _push6(ssrRenderComponent(_component_MyDeliveriesCreateModal, {
                                        deal: _ctx.deal,
                                        class: "mr-3",
                                        onDeliveryCreated: dealUpdated
                                      }, null, _parent6, _scopeId5));
                                    } else {
                                      _push6(`<!---->`);
                                    }
                                    _push6(` \u0421\u043F\u0438\u0441\u043E\u043A \u0434\u043E\u0441\u0442\u0430\u0432\u043E\u043A `);
                                  } else {
                                    return [
                                      _ctx.deal.status === "\u0421\u043E\u0437\u0434\u0430\u043D\u0430" ? (openBlock(), createBlock(_component_MyDeliveriesCreateModal, {
                                        key: 0,
                                        deal: _ctx.deal,
                                        class: "mr-3",
                                        onDeliveryCreated: dealUpdated
                                      }, null, 8, ["deal"])) : createCommentVNode("", true),
                                      createTextVNode(" \u0421\u043F\u0438\u0441\u043E\u043A \u0434\u043E\u0441\u0442\u0430\u0432\u043E\u043A ")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_UiCardTitle, { class: "flex items-center" }, {
                                  default: withCtx(() => [
                                    _ctx.deal.status === "\u0421\u043E\u0437\u0434\u0430\u043D\u0430" ? (openBlock(), createBlock(_component_MyDeliveriesCreateModal, {
                                      key: 0,
                                      deal: _ctx.deal,
                                      class: "mr-3",
                                      onDeliveryCreated: dealUpdated
                                    }, null, 8, ["deal"])) : createCommentVNode("", true),
                                    createTextVNode(" \u0421\u043F\u0438\u0441\u043E\u043A \u0434\u043E\u0441\u0442\u0430\u0432\u043E\u043A ")
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        if ((_b = (_a = _ctx.deal) == null ? void 0 : _a.deliveries) == null ? void 0 : _b.length) {
                          _push4(ssrRenderComponent(_component_UiCardContent, { class: "p-2" }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`<!--[-->`);
                                ssrRenderList(_ctx.deal.deliveries, (delivery, index) => {
                                  _push5(`<div class="mb-2"${_scopeId4}>`);
                                  _push5(ssrRenderComponent(_component_UiCard, null, {
                                    default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                      if (_push6) {
                                        _push6(ssrRenderComponent(_component_UiCardHeader, { class: "p-2" }, {
                                          default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                            if (_push7) {
                                              _push7(`<div${_scopeId6}>`);
                                              _push7(ssrRenderComponent(_component_UiCardTitle, null, {
                                                default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                  if (_push8) {
                                                    _push8(`${ssrInterpolate(delivery.method)}`);
                                                  } else {
                                                    return [
                                                      createTextVNode(toDisplayString(delivery.method), 1)
                                                    ];
                                                  }
                                                }),
                                                _: 2
                                              }, _parent7, _scopeId6));
                                              _push7(ssrRenderComponent(_component_UiCardDescription, null, {
                                                default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                  if (_push8) {
                                                    _push8(`${ssrInterpolate(delivery.type)}`);
                                                  } else {
                                                    return [
                                                      createTextVNode(toDisplayString(delivery.type), 1)
                                                    ];
                                                  }
                                                }),
                                                _: 2
                                              }, _parent7, _scopeId6));
                                              _push7(`</div>`);
                                            } else {
                                              return [
                                                createVNode("div", null, [
                                                  createVNode(_component_UiCardTitle, null, {
                                                    default: withCtx(() => [
                                                      createTextVNode(toDisplayString(delivery.method), 1)
                                                    ]),
                                                    _: 2
                                                  }, 1024),
                                                  createVNode(_component_UiCardDescription, null, {
                                                    default: withCtx(() => [
                                                      createTextVNode(toDisplayString(delivery.type), 1)
                                                    ]),
                                                    _: 2
                                                  }, 1024)
                                                ])
                                              ];
                                            }
                                          }),
                                          _: 2
                                        }, _parent6, _scopeId5));
                                        _push6(ssrRenderComponent(_component_UiCardContent, { class: "p-2" }, {
                                          default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                            if (_push7) {
                                              _push7(` \u0441\u0442\u0430\u0442\u0443\u0441 - ${ssrInterpolate(delivery.status)}`);
                                            } else {
                                              return [
                                                createTextVNode(" \u0441\u0442\u0430\u0442\u0443\u0441 - " + toDisplayString(delivery.status), 1)
                                              ];
                                            }
                                          }),
                                          _: 2
                                        }, _parent6, _scopeId5));
                                      } else {
                                        return [
                                          createVNode(_component_UiCardHeader, { class: "p-2" }, {
                                            default: withCtx(() => [
                                              createVNode("div", null, [
                                                createVNode(_component_UiCardTitle, null, {
                                                  default: withCtx(() => [
                                                    createTextVNode(toDisplayString(delivery.method), 1)
                                                  ]),
                                                  _: 2
                                                }, 1024),
                                                createVNode(_component_UiCardDescription, null, {
                                                  default: withCtx(() => [
                                                    createTextVNode(toDisplayString(delivery.type), 1)
                                                  ]),
                                                  _: 2
                                                }, 1024)
                                              ])
                                            ]),
                                            _: 2
                                          }, 1024),
                                          createVNode(_component_UiCardContent, { class: "p-2" }, {
                                            default: withCtx(() => [
                                              createTextVNode(" \u0441\u0442\u0430\u0442\u0443\u0441 - " + toDisplayString(delivery.status), 1)
                                            ]),
                                            _: 2
                                          }, 1024)
                                        ];
                                      }
                                    }),
                                    _: 2
                                  }, _parent5, _scopeId4));
                                  _push5(`</div>`);
                                });
                                _push5(`<!--]-->`);
                              } else {
                                return [
                                  (openBlock(true), createBlock(Fragment, null, renderList(_ctx.deal.deliveries, (delivery, index) => {
                                    return openBlock(), createBlock("div", {
                                      key: index,
                                      class: "mb-2"
                                    }, [
                                      createVNode(_component_UiCard, null, {
                                        default: withCtx(() => [
                                          createVNode(_component_UiCardHeader, { class: "p-2" }, {
                                            default: withCtx(() => [
                                              createVNode("div", null, [
                                                createVNode(_component_UiCardTitle, null, {
                                                  default: withCtx(() => [
                                                    createTextVNode(toDisplayString(delivery.method), 1)
                                                  ]),
                                                  _: 2
                                                }, 1024),
                                                createVNode(_component_UiCardDescription, null, {
                                                  default: withCtx(() => [
                                                    createTextVNode(toDisplayString(delivery.type), 1)
                                                  ]),
                                                  _: 2
                                                }, 1024)
                                              ])
                                            ]),
                                            _: 2
                                          }, 1024),
                                          createVNode(_component_UiCardContent, { class: "p-2" }, {
                                            default: withCtx(() => [
                                              createTextVNode(" \u0441\u0442\u0430\u0442\u0443\u0441 - " + toDisplayString(delivery.status), 1)
                                            ]),
                                            _: 2
                                          }, 1024)
                                        ]),
                                        _: 2
                                      }, 1024)
                                    ]);
                                  }), 128))
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                        } else {
                          _push4(`<!---->`);
                        }
                      } else {
                        return [
                          createVNode(_component_UiCardHeader, { class: "p-2 pb-2 bg-slate-50 flex" }, {
                            default: withCtx(() => [
                              createVNode(_component_UiCardTitle, { class: "flex items-center" }, {
                                default: withCtx(() => [
                                  _ctx.deal.status === "\u0421\u043E\u0437\u0434\u0430\u043D\u0430" ? (openBlock(), createBlock(_component_MyDeliveriesCreateModal, {
                                    key: 0,
                                    deal: _ctx.deal,
                                    class: "mr-3",
                                    onDeliveryCreated: dealUpdated
                                  }, null, 8, ["deal"])) : createCommentVNode("", true),
                                  createTextVNode(" \u0421\u043F\u0438\u0441\u043E\u043A \u0434\u043E\u0441\u0442\u0430\u0432\u043E\u043A ")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          ((_d = (_c = _ctx.deal) == null ? void 0 : _c.deliveries) == null ? void 0 : _d.length) ? (openBlock(), createBlock(_component_UiCardContent, {
                            key: 0,
                            class: "p-2"
                          }, {
                            default: withCtx(() => [
                              (openBlock(true), createBlock(Fragment, null, renderList(_ctx.deal.deliveries, (delivery, index) => {
                                return openBlock(), createBlock("div", {
                                  key: index,
                                  class: "mb-2"
                                }, [
                                  createVNode(_component_UiCard, null, {
                                    default: withCtx(() => [
                                      createVNode(_component_UiCardHeader, { class: "p-2" }, {
                                        default: withCtx(() => [
                                          createVNode("div", null, [
                                            createVNode(_component_UiCardTitle, null, {
                                              default: withCtx(() => [
                                                createTextVNode(toDisplayString(delivery.method), 1)
                                              ]),
                                              _: 2
                                            }, 1024),
                                            createVNode(_component_UiCardDescription, null, {
                                              default: withCtx(() => [
                                                createTextVNode(toDisplayString(delivery.type), 1)
                                              ]),
                                              _: 2
                                            }, 1024)
                                          ])
                                        ]),
                                        _: 2
                                      }, 1024),
                                      createVNode(_component_UiCardContent, { class: "p-2" }, {
                                        default: withCtx(() => [
                                          createTextVNode(" \u0441\u0442\u0430\u0442\u0443\u0441 - " + toDisplayString(delivery.status), 1)
                                        ]),
                                        _: 2
                                      }, 1024)
                                    ]),
                                    _: 2
                                  }, 1024)
                                ]);
                              }), 128))
                            ]),
                            _: 1
                          })) : createCommentVNode("", true)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  if (_ctx.deal.status === "\u0421\u043E\u0437\u0434\u0430\u043D\u0430") {
                    _push3(ssrRenderComponent(_component_MyGiftsCreateModal, {
                      deal: _ctx.deal,
                      class: "mt-3",
                      onDeliveryCreated: dealUpdated
                    }, null, _parent3, _scopeId2));
                  } else {
                    _push3(`<!---->`);
                  }
                } else {
                  return [
                    _ctx.deal.preorder ? (openBlock(), createBlock(_component_UiCard, {
                      key: 0,
                      class: "overflow-hidden w-full mb-3"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_UiCardHeader, { class: "bg-slate-50 pb-1 mb-2" }, {
                          default: withCtx(() => [
                            createVNode(_component_UiCardTitle, null, {
                              default: withCtx(() => [
                                createTextVNode(" \u041A\u0430\u0440\u0442\u043E\u0447\u043A\u0430 \u0434\u0438\u0437\u0430\u0439\u043D\u0430 ")
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(_component_UiCardContent, null, {
                          default: withCtx(() => {
                            var _a;
                            return [
                              createVNode("div", { class: "flex" }, [
                                createVNode("div", { class: "w-[200px] mr-3 rounded overflow-hidden" }, [
                                  createVNode("img", {
                                    src: _ctx.deal.preorder.preview,
                                    alt: "Preview",
                                    class: "preview-image"
                                  }, null, 8, ["src"])
                                ]),
                                createVNode("div", { class: "flex flex-col" }, [
                                  createVNode("a", {
                                    class: "underline decoration-solid cursor-pointer text-blue-600",
                                    href: (_a = _ctx.deal.preorder) == null ? void 0 : _a.card_link,
                                    target: "_blank"
                                  }, "\u0421\u0441\u044B\u043B\u043A\u0430 \u043D\u0430 \u043A\u0430\u0440\u0442\u043E\u0447\u043A\u0443", 8, ["href"]),
                                  createVNode("a", {
                                    class: "underline decoration-solid cursor-pointer text-blue-600",
                                    href: _ctx.deal.preorder.maket + "?name=" + _ctx.deal.title + ".cdr&dl=true"
                                  }, "\u041C\u0430\u043A\u0435\u0442", 8, ["href"])
                                ])
                              ])
                            ];
                          }),
                          _: 1
                        })
                      ]),
                      _: 1
                    })) : createCommentVNode("", true),
                    createVNode(_component_UiCard, { class: "mb-3 w-full overflow-hidden" }, {
                      default: withCtx(() => {
                        var _a, _b;
                        return [
                          createVNode(_component_UiCardHeader, { class: "p-2 pb-2 bg-slate-50 flex" }, {
                            default: withCtx(() => [
                              createVNode(_component_UiCardTitle, { class: "flex items-center" }, {
                                default: withCtx(() => [
                                  _ctx.deal.status === "\u0421\u043E\u0437\u0434\u0430\u043D\u0430" ? (openBlock(), createBlock(_component_MyOrdersCreateModal, {
                                    key: 0,
                                    deal: _ctx.deal,
                                    class: "mr-3 justify-between",
                                    onOrderCreated: dealUpdated
                                  }, null, 8, ["deal"])) : createCommentVNode("", true),
                                  createTextVNode(" \u0421\u043F\u0438\u0441\u043E\u043A \u0437\u0430\u043A\u0430\u0437\u043E\u0432 ")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          ((_b = (_a = _ctx.deal) == null ? void 0 : _a.orders) == null ? void 0 : _b.length) ? (openBlock(), createBlock(_component_UiCardContent, {
                            key: 0,
                            class: "p-2"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_UiScrollArea, { class: "pb-2" }, {
                                default: withCtx(() => [
                                  createVNode("div", { class: "flex gap-2" }, [
                                    (openBlock(true), createBlock(Fragment, null, renderList(_ctx.deal.orders, (order, index) => {
                                      return openBlock(), createBlock("div", {
                                        key: index,
                                        class: "mb-2 w-[300px] h-full"
                                      }, [
                                        createVNode(_component_UiCard, null, {
                                          default: withCtx(() => [
                                            createVNode(_component_UiCardHeader, { class: "p-2" }, {
                                              default: withCtx(() => [
                                                createVNode("div", null, [
                                                  createVNode(_component_UiCardTitle, null, {
                                                    default: withCtx(() => [
                                                      createTextVNode(toDisplayString(order.title), 1)
                                                    ]),
                                                    _: 2
                                                  }, 1024),
                                                  createVNode(_component_UiCardDescription, null, {
                                                    default: withCtx(() => {
                                                      var _a2;
                                                      return [
                                                        createTextVNode(" \u0441\u0442\u0430\u0442\u0443\u0441 - " + toDisplayString(((_a2 = order.stage) == null ? void 0 : _a2.title) || "dfsds"), 1)
                                                      ];
                                                    }),
                                                    _: 2
                                                  }, 1024)
                                                ])
                                              ]),
                                              _: 2
                                            }, 1024),
                                            createVNode(_component_UiCardContent, { class: "p-2" }, {
                                              default: withCtx(() => [
                                                createVNode("div", { class: "flex justify-between" }, [
                                                  createVNode(_component_MyOrdersEditModal, {
                                                    order,
                                                    onOrderEdited: dealUpdated
                                                  }, null, 8, ["order"]),
                                                  _ctx.deal.status === "\u0421\u043E\u0437\u0434\u0430\u043D\u0430" ? (openBlock(), createBlock(_component_UiButton, {
                                                    key: 0,
                                                    onClick: () => deleteOrder(order.id)
                                                  }, {
                                                    default: withCtx(() => [
                                                      createVNode(_component_Icon, {
                                                        name: "mi:delete",
                                                        color: "white",
                                                        size: "25px"
                                                      })
                                                    ]),
                                                    _: 2
                                                  }, 1032, ["onClick"])) : (openBlock(), createBlock(_component_UiButton, {
                                                    key: 1,
                                                    onClick: () => changeStage(order)
                                                  }, {
                                                    default: withCtx(() => [
                                                      createTextVNode(" \u0413\u043E\u0442\u043E\u0432\u043E ")
                                                    ]),
                                                    _: 2
                                                  }, 1032, ["onClick"]))
                                                ])
                                              ]),
                                              _: 2
                                            }, 1024)
                                          ]),
                                          _: 2
                                        }, 1024)
                                      ]);
                                    }), 128))
                                  ]),
                                  createVNode(_component_UiScrollBar, { orientation: "horizontal" })
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
                    createVNode(_component_UiCard, { class: "mb-3 w-full overflow-hidden" }, {
                      default: withCtx(() => {
                        var _a, _b;
                        return [
                          createVNode(_component_UiCardHeader, { class: "p-2 pb-2 bg-slate-50 flex" }, {
                            default: withCtx(() => [
                              createVNode(_component_UiCardTitle, { class: "flex items-center" }, {
                                default: withCtx(() => [
                                  _ctx.deal.status === "\u0421\u043E\u0437\u0434\u0430\u043D\u0430" ? (openBlock(), createBlock(_component_MyDeliveriesCreateModal, {
                                    key: 0,
                                    deal: _ctx.deal,
                                    class: "mr-3",
                                    onDeliveryCreated: dealUpdated
                                  }, null, 8, ["deal"])) : createCommentVNode("", true),
                                  createTextVNode(" \u0421\u043F\u0438\u0441\u043E\u043A \u0434\u043E\u0441\u0442\u0430\u0432\u043E\u043A ")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          ((_b = (_a = _ctx.deal) == null ? void 0 : _a.deliveries) == null ? void 0 : _b.length) ? (openBlock(), createBlock(_component_UiCardContent, {
                            key: 0,
                            class: "p-2"
                          }, {
                            default: withCtx(() => [
                              (openBlock(true), createBlock(Fragment, null, renderList(_ctx.deal.deliveries, (delivery, index) => {
                                return openBlock(), createBlock("div", {
                                  key: index,
                                  class: "mb-2"
                                }, [
                                  createVNode(_component_UiCard, null, {
                                    default: withCtx(() => [
                                      createVNode(_component_UiCardHeader, { class: "p-2" }, {
                                        default: withCtx(() => [
                                          createVNode("div", null, [
                                            createVNode(_component_UiCardTitle, null, {
                                              default: withCtx(() => [
                                                createTextVNode(toDisplayString(delivery.method), 1)
                                              ]),
                                              _: 2
                                            }, 1024),
                                            createVNode(_component_UiCardDescription, null, {
                                              default: withCtx(() => [
                                                createTextVNode(toDisplayString(delivery.type), 1)
                                              ]),
                                              _: 2
                                            }, 1024)
                                          ])
                                        ]),
                                        _: 2
                                      }, 1024),
                                      createVNode(_component_UiCardContent, { class: "p-2" }, {
                                        default: withCtx(() => [
                                          createTextVNode(" \u0441\u0442\u0430\u0442\u0443\u0441 - " + toDisplayString(delivery.status), 1)
                                        ]),
                                        _: 2
                                      }, 1024)
                                    ]),
                                    _: 2
                                  }, 1024)
                                ]);
                              }), 128))
                            ]),
                            _: 1
                          })) : createCommentVNode("", true)
                        ];
                      }),
                      _: 1
                    }),
                    _ctx.deal.status === "\u0421\u043E\u0437\u0434\u0430\u043D\u0430" ? (openBlock(), createBlock(_component_MyGiftsCreateModal, {
                      key: 1,
                      deal: _ctx.deal,
                      class: "mt-3",
                      onDeliveryCreated: dealUpdated
                    }, null, 8, ["deal"])) : createCommentVNode("", true)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UiCardFooter, { class: "flex items-center border-t bg-muted/50 px-6 py-3 mt-3" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` \u0424\u0423\u0422\u0415\u0420 `);
                } else {
                  return [
                    createTextVNode(" \u0424\u0423\u0422\u0415\u0420 ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UiCardHeader, { class: "flex flex-row items-start bg-slate-50 pb-1" }, {
                default: withCtx(() => [
                  createVNode("div", { class: "flex flex-col justify-start w-full" }, [
                    createVNode(_component_UiCardTitle, { class: "flex items-center gap-2 text-lg pb-2" }, {
                      default: withCtx(() => [
                        createTextVNode(" \u0418\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F: " + toDisplayString(_ctx.deal.title), 1)
                      ]),
                      _: 1
                    }),
                    createVNode(_component_UiCardDescription, null, {
                      default: withCtx(() => [
                        createTextVNode(" \u0413\u043E\u0442\u043E\u0432\u043D\u043E\u0441\u0442\u044C: " + toDisplayString(_ctx.deal.deadline), 1)
                      ]),
                      _: 1
                    }),
                    createVNode(_component_UiButton, { class: "h-6 mt-3 self-start" }, {
                      default: withCtx(() => [
                        createVNode(_component_NuxtLink, {
                          to: "/orders/" + _ctx.deal.id
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" \u041F\u043E\u043B\u043D\u0430\u044F \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F ")
                          ]),
                          _: 1
                        }, 8, ["to"])
                      ]),
                      _: 1
                    })
                  ])
                ]),
                _: 1
              }),
              createVNode(_component_UiCardContent, { class: "p-3 flex flex-col items-center h-full" }, {
                default: withCtx(() => [
                  _ctx.deal.preorder ? (openBlock(), createBlock(_component_UiCard, {
                    key: 0,
                    class: "overflow-hidden w-full mb-3"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_UiCardHeader, { class: "bg-slate-50 pb-1 mb-2" }, {
                        default: withCtx(() => [
                          createVNode(_component_UiCardTitle, null, {
                            default: withCtx(() => [
                              createTextVNode(" \u041A\u0430\u0440\u0442\u043E\u0447\u043A\u0430 \u0434\u0438\u0437\u0430\u0439\u043D\u0430 ")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(_component_UiCardContent, null, {
                        default: withCtx(() => {
                          var _a;
                          return [
                            createVNode("div", { class: "flex" }, [
                              createVNode("div", { class: "w-[200px] mr-3 rounded overflow-hidden" }, [
                                createVNode("img", {
                                  src: _ctx.deal.preorder.preview,
                                  alt: "Preview",
                                  class: "preview-image"
                                }, null, 8, ["src"])
                              ]),
                              createVNode("div", { class: "flex flex-col" }, [
                                createVNode("a", {
                                  class: "underline decoration-solid cursor-pointer text-blue-600",
                                  href: (_a = _ctx.deal.preorder) == null ? void 0 : _a.card_link,
                                  target: "_blank"
                                }, "\u0421\u0441\u044B\u043B\u043A\u0430 \u043D\u0430 \u043A\u0430\u0440\u0442\u043E\u0447\u043A\u0443", 8, ["href"]),
                                createVNode("a", {
                                  class: "underline decoration-solid cursor-pointer text-blue-600",
                                  href: _ctx.deal.preorder.maket + "?name=" + _ctx.deal.title + ".cdr&dl=true"
                                }, "\u041C\u0430\u043A\u0435\u0442", 8, ["href"])
                              ])
                            ])
                          ];
                        }),
                        _: 1
                      })
                    ]),
                    _: 1
                  })) : createCommentVNode("", true),
                  createVNode(_component_UiCard, { class: "mb-3 w-full overflow-hidden" }, {
                    default: withCtx(() => {
                      var _a, _b;
                      return [
                        createVNode(_component_UiCardHeader, { class: "p-2 pb-2 bg-slate-50 flex" }, {
                          default: withCtx(() => [
                            createVNode(_component_UiCardTitle, { class: "flex items-center" }, {
                              default: withCtx(() => [
                                _ctx.deal.status === "\u0421\u043E\u0437\u0434\u0430\u043D\u0430" ? (openBlock(), createBlock(_component_MyOrdersCreateModal, {
                                  key: 0,
                                  deal: _ctx.deal,
                                  class: "mr-3 justify-between",
                                  onOrderCreated: dealUpdated
                                }, null, 8, ["deal"])) : createCommentVNode("", true),
                                createTextVNode(" \u0421\u043F\u0438\u0441\u043E\u043A \u0437\u0430\u043A\u0430\u0437\u043E\u0432 ")
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }),
                        ((_b = (_a = _ctx.deal) == null ? void 0 : _a.orders) == null ? void 0 : _b.length) ? (openBlock(), createBlock(_component_UiCardContent, {
                          key: 0,
                          class: "p-2"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_UiScrollArea, { class: "pb-2" }, {
                              default: withCtx(() => [
                                createVNode("div", { class: "flex gap-2" }, [
                                  (openBlock(true), createBlock(Fragment, null, renderList(_ctx.deal.orders, (order, index) => {
                                    return openBlock(), createBlock("div", {
                                      key: index,
                                      class: "mb-2 w-[300px] h-full"
                                    }, [
                                      createVNode(_component_UiCard, null, {
                                        default: withCtx(() => [
                                          createVNode(_component_UiCardHeader, { class: "p-2" }, {
                                            default: withCtx(() => [
                                              createVNode("div", null, [
                                                createVNode(_component_UiCardTitle, null, {
                                                  default: withCtx(() => [
                                                    createTextVNode(toDisplayString(order.title), 1)
                                                  ]),
                                                  _: 2
                                                }, 1024),
                                                createVNode(_component_UiCardDescription, null, {
                                                  default: withCtx(() => {
                                                    var _a2;
                                                    return [
                                                      createTextVNode(" \u0441\u0442\u0430\u0442\u0443\u0441 - " + toDisplayString(((_a2 = order.stage) == null ? void 0 : _a2.title) || "dfsds"), 1)
                                                    ];
                                                  }),
                                                  _: 2
                                                }, 1024)
                                              ])
                                            ]),
                                            _: 2
                                          }, 1024),
                                          createVNode(_component_UiCardContent, { class: "p-2" }, {
                                            default: withCtx(() => [
                                              createVNode("div", { class: "flex justify-between" }, [
                                                createVNode(_component_MyOrdersEditModal, {
                                                  order,
                                                  onOrderEdited: dealUpdated
                                                }, null, 8, ["order"]),
                                                _ctx.deal.status === "\u0421\u043E\u0437\u0434\u0430\u043D\u0430" ? (openBlock(), createBlock(_component_UiButton, {
                                                  key: 0,
                                                  onClick: () => deleteOrder(order.id)
                                                }, {
                                                  default: withCtx(() => [
                                                    createVNode(_component_Icon, {
                                                      name: "mi:delete",
                                                      color: "white",
                                                      size: "25px"
                                                    })
                                                  ]),
                                                  _: 2
                                                }, 1032, ["onClick"])) : (openBlock(), createBlock(_component_UiButton, {
                                                  key: 1,
                                                  onClick: () => changeStage(order)
                                                }, {
                                                  default: withCtx(() => [
                                                    createTextVNode(" \u0413\u043E\u0442\u043E\u0432\u043E ")
                                                  ]),
                                                  _: 2
                                                }, 1032, ["onClick"]))
                                              ])
                                            ]),
                                            _: 2
                                          }, 1024)
                                        ]),
                                        _: 2
                                      }, 1024)
                                    ]);
                                  }), 128))
                                ]),
                                createVNode(_component_UiScrollBar, { orientation: "horizontal" })
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
                  createVNode(_component_UiCard, { class: "mb-3 w-full overflow-hidden" }, {
                    default: withCtx(() => {
                      var _a, _b;
                      return [
                        createVNode(_component_UiCardHeader, { class: "p-2 pb-2 bg-slate-50 flex" }, {
                          default: withCtx(() => [
                            createVNode(_component_UiCardTitle, { class: "flex items-center" }, {
                              default: withCtx(() => [
                                _ctx.deal.status === "\u0421\u043E\u0437\u0434\u0430\u043D\u0430" ? (openBlock(), createBlock(_component_MyDeliveriesCreateModal, {
                                  key: 0,
                                  deal: _ctx.deal,
                                  class: "mr-3",
                                  onDeliveryCreated: dealUpdated
                                }, null, 8, ["deal"])) : createCommentVNode("", true),
                                createTextVNode(" \u0421\u043F\u0438\u0441\u043E\u043A \u0434\u043E\u0441\u0442\u0430\u0432\u043E\u043A ")
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }),
                        ((_b = (_a = _ctx.deal) == null ? void 0 : _a.deliveries) == null ? void 0 : _b.length) ? (openBlock(), createBlock(_component_UiCardContent, {
                          key: 0,
                          class: "p-2"
                        }, {
                          default: withCtx(() => [
                            (openBlock(true), createBlock(Fragment, null, renderList(_ctx.deal.deliveries, (delivery, index) => {
                              return openBlock(), createBlock("div", {
                                key: index,
                                class: "mb-2"
                              }, [
                                createVNode(_component_UiCard, null, {
                                  default: withCtx(() => [
                                    createVNode(_component_UiCardHeader, { class: "p-2" }, {
                                      default: withCtx(() => [
                                        createVNode("div", null, [
                                          createVNode(_component_UiCardTitle, null, {
                                            default: withCtx(() => [
                                              createTextVNode(toDisplayString(delivery.method), 1)
                                            ]),
                                            _: 2
                                          }, 1024),
                                          createVNode(_component_UiCardDescription, null, {
                                            default: withCtx(() => [
                                              createTextVNode(toDisplayString(delivery.type), 1)
                                            ]),
                                            _: 2
                                          }, 1024)
                                        ])
                                      ]),
                                      _: 2
                                    }, 1024),
                                    createVNode(_component_UiCardContent, { class: "p-2" }, {
                                      default: withCtx(() => [
                                        createTextVNode(" \u0441\u0442\u0430\u0442\u0443\u0441 - " + toDisplayString(delivery.status), 1)
                                      ]),
                                      _: 2
                                    }, 1024)
                                  ]),
                                  _: 2
                                }, 1024)
                              ]);
                            }), 128))
                          ]),
                          _: 1
                        })) : createCommentVNode("", true)
                      ];
                    }),
                    _: 1
                  }),
                  _ctx.deal.status === "\u0421\u043E\u0437\u0434\u0430\u043D\u0430" ? (openBlock(), createBlock(_component_MyGiftsCreateModal, {
                    key: 1,
                    deal: _ctx.deal,
                    class: "mt-3",
                    onDeliveryCreated: dealUpdated
                  }, null, 8, ["deal"])) : createCommentVNode("", true)
                ]),
                _: 1
              }),
              createVNode(_component_UiCardFooter, { class: "flex items-center border-t bg-muted/50 px-6 py-3 mt-3" }, {
                default: withCtx(() => [
                  createTextVNode(" \u0424\u0423\u0422\u0415\u0420 ")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/my/orders/Card.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { $useApi } = useNuxtApp();
    useHead({
      title: "\u041F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0441\u0442\u0432\u043E | Easy CRM"
    });
    const defaultDeal = {
      id: 0,
      title: "\u041F\u0443\u0441\u0442\u043E",
      price: 1e4,
      status: "null",
      deadline: "-----",
      clothingMethod: "string",
      description: "string",
      source: "string",
      adTag: "string",
      discont: "string",
      sphere: "string",
      city: "string",
      region: "string",
      cardLink: "string",
      paid: "string",
      totalPrice: 1,
      dopsPrice: 1,
      recievedPayments: 1,
      remainder: 1,
      firstPayment: "string",
      clientType: "string",
      recievedPay: 1,
      createdAt: "",
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
        inn: "string"
      },
      preorder: {
        preview: "string"
      }
    };
    const stages = ref([]);
    const currentStageId = ref("1");
    const dealsSearch = ref("");
    const { data: stagesData } = ([__temp, __restore] = withAsyncContext(() => $useApi.get("/stages")), __temp = await __temp, __restore(), __temp);
    stages.value = stagesData || [];
    const deals = ref([]);
    const currentDeal = ref(defaultDeal);
    const totalDeals = ref(0);
    const getDeals = async () => {
      const url = "production/stage/" + currentStageId.value;
      const { data: dealsDatas } = await $useApi.get(url);
      deals.value = dealsDatas.deals || [];
      if (dealsDatas.deals.length) {
        await getDeal(dealsDatas.deals[0].id);
      } else {
        currentDeal.value = defaultDeal;
      }
    };
    const getDeal = async (id) => {
      const { data: deal } = await $useApi.get(`production/deals/${id}`);
      if (currentStageId.value !== "1") {
        deal.orders = deal.orders.filter(
          (order) => order.stageId === +currentStageId.value
        );
      }
      currentDeal.value = deal;
      const { data: preorder } = await $useApi.get("kaiten/card/" + deal.card_id);
      if (preorder !== "Nope") {
        currentDeal.value.preorder = preorder;
      }
      return;
    };
    const orderMoved = async (deal) => {
      console.log("deal", deal.orders.length);
      if (deal.orders.length > 1) {
        return await getDeal(deal.id);
      }
      await getDeals();
      return;
    };
    [__temp, __restore] = withAsyncContext(() => getDeals()), await __temp, __restore();
    watch(currentStageId, async () => {
      await getDeals();
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_LayoutSidebar = _sfc_main$7;
      const _component_UiTabs = _sfc_main$2$1;
      const _component_UiTabsList = _sfc_main$8;
      const _component_UiTabsTrigger = _sfc_main$1$1;
      const _component_Icon = __nuxt_component_0;
      const _component_UiInput = _sfc_main$9;
      const _component_MyOrdersList = _sfc_main$6;
      const _component_MyOrdersCard = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex relative h-screen" }, _attrs))}><div class="w-[50px] fixed">`);
      _push(ssrRenderComponent(_component_LayoutSidebar, null, null, _parent));
      _push(`</div><div class="flex flex-col p-3 h-full w-full ml-[50px]">`);
      _push(ssrRenderComponent(_component_UiTabs, {
        modelValue: unref(currentStageId),
        "onUpdate:modelValue": ($event) => isRef(currentStageId) ? currentStageId.value = $event : null,
        "default-value": "1",
        class: ""
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UiTabsList, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<!--[-->`);
                  ssrRenderList(unref(stages), (stage) => {
                    _push3(ssrRenderComponent(_component_UiTabsTrigger, {
                      key: stage.id,
                      value: stage.id.toString()
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`${ssrInterpolate(stage.title)}`);
                        } else {
                          return [
                            createTextVNode(toDisplayString(stage.title), 1)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  });
                  _push3(`<!--]-->`);
                } else {
                  return [
                    (openBlock(true), createBlock(Fragment, null, renderList(unref(stages), (stage) => {
                      return openBlock(), createBlock(_component_UiTabsTrigger, {
                        key: stage.id,
                        value: stage.id.toString()
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(stage.title), 1)
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
                  (openBlock(true), createBlock(Fragment, null, renderList(unref(stages), (stage) => {
                    return openBlock(), createBlock(_component_UiTabsTrigger, {
                      key: stage.id,
                      value: stage.id.toString()
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(stage.title), 1)
                      ]),
                      _: 2
                    }, 1032, ["value"]);
                  }), 128))
                ]),
                _: 2
              }, 1024)
            ];
          }
        }),
        _: 1
      }, _parent));
      if (unref(deals).length) {
        _push(`<div class="mt-2 flex gap-2 h-[95%]"><div class="flex flex-col w-[50%]"><form class="sm:flex-initial mb-2 pr-2"><div class="relative">`);
        _push(ssrRenderComponent(_component_Icon, {
          name: "mi:search",
          color: "black",
          size: "15px",
          class: "absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground"
        }, null, _parent));
        _push(ssrRenderComponent(_component_UiInput, {
          modelValue: unref(dealsSearch),
          "onUpdate:modelValue": ($event) => isRef(dealsSearch) ? dealsSearch.value = $event : null,
          class: "pl-8 w-full",
          type: "search",
          placeholder: "\u0418\u0441\u043A\u0430\u0442\u044C \u0441\u0434\u0435\u043B\u043A\u0438...",
          onInput: getDeals
        }, null, _parent));
        _push(`</div></form>`);
        _push(ssrRenderComponent(_component_MyOrdersList, {
          class: "grow",
          deals: unref(deals),
          total: unref(totalDeals),
          onDealClicked: getDeal,
          onDealLoaded: getDeals
        }, null, _parent));
        _push(`</div><div class="flex flex-col w-[50%]">`);
        _push(ssrRenderComponent(_component_MyOrdersCard, {
          class: "grow",
          deal: unref(currentDeal),
          "current-stage": unref(currentStageId),
          onDealUpdated: async (id) => {
            await getDeal(id);
          },
          onOrderMoved: async (deal) => {
            await orderMoved(deal);
          }
        }, null, _parent));
        _push(`</div></div>`);
      } else {
        _push(`<div>\u041F\u0443\u0441\u0442\u043E...</div>`);
      }
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/orders/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-AnkDzXfM.mjs.map
