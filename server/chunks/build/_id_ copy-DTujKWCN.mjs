import { _ as _sfc_main$2, a as _sfc_main$1$4 } from './Sidebar-ClYzRSuC.mjs';
import { _ as _sfc_main$3 } from './Card-D2-UPrX8.mjs';
import { _ as _sfc_main$1$1, a as _sfc_main$4 } from './CardTitle-Dyaq6zaM.mjs';
import { _ as _sfc_main$5 } from './CardDescription-CwDlX6V_.mjs';
import { _ as _sfc_main$6 } from './CardContent-5uJgHkPl.mjs';
import { _ as _sfc_main$7 } from './NuxtImg-BJKLxDnu.mjs';
import { _ as _sfc_main$2$1, a as _sfc_main$8, b as _sfc_main$1$2 } from './TabsList-C3eBcFGa.mjs';
import { _ as _sfc_main$9 } from './TabsContent-9LTM_IKf.mjs';
import { _ as _sfc_main$a } from './OrderFormModal-Cg_8pl1L.mjs';
import { _ as _sfc_main$h } from './CardFooter-BUlih3MF.mjs';
import { _ as _sfc_main$3$1, a as _sfc_main$2$2, b as _sfc_main$1$3 } from './DropdownMenuItem-Bzav__sm.mjs';
import { _ as _sfc_main$1$5, a as _sfc_main$g } from './DropdownMenuRadioItem-4ysE0sdZ.mjs';
import { _ as _sfc_main$e } from './index-B6vrBiru.mjs';
import { _ as __nuxt_component_0 } from './index-BPQNkNDf.mjs';
import { _ as _sfc_main$f } from './Separator-DmvFl46f.mjs';
import { defineComponent, ref, withAsyncContext, mergeProps, withCtx, unref, createTextVNode, toDisplayString, createVNode, createBlock, createCommentVNode, openBlock, Fragment, renderList, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderAttr, ssrRenderList } from 'vue/server-renderer';
import { b as useNuxtApp, i as useRoute, u as useHead } from './server.mjs';
import { _ as _sfc_main$b } from './CreateModal-D5eq6dl9.mjs';
import { _ as _sfc_main$c } from './List-C4HeE6dS.mjs';
import { _ as _sfc_main$d } from './UploadFileForm-D83FwgZv.mjs';
import './index-9T5woGxV.mjs';
import 'radix-vue';
import 'lucide-vue-next';
import 'class-variance-authority';
import './utils-TCWotVPY.mjs';
import 'clsx';
import 'tailwind-merge';
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
import './DropdownMenuSeparator-B4V4iajS.mjs';
import './UserListItem-w8spDyow.mjs';
import './auth-CDeEREL9.mjs';
import 'pinia';
import './isLoading-BaPa0n0V.mjs';
import 'vue-router';
import './DialogContent-BsO2ljLB.mjs';
import './DialogDescription-D5yt23q9.mjs';
import './DialogFooter-CQpXS8R1.mjs';
import './OrderForm-DCVnpRuC.mjs';
import 'vee-validate';
import './Label-Bxzolydd.mjs';
import './Input-DoHPrX2-.mjs';
import './SelectScrollDownButton-JzJI8BsA.mjs';
import './SelectGroup-BKLQULEA.mjs';
import './Switch-BsBEqAPz.mjs';
import './Textarea-oqH4YeW4.mjs';
import '@vee-validate/zod';
import 'zod';
import '@iconify/vue';
import '@iconify/utils/lib/css/icon';
import 'perfect-debounce';
import 'axios';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import 'unhead/plugins';
import './EditModal-BkYjnShT.mjs';
import 'form-data';

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "OrderCard",
  __ssrInlineRender: true,
  props: {
    currentOrder: {},
    stages: {},
    workers: {}
  },
  emits: ["update-orders-list"],
  setup(__props, { emit: __emit }) {
    const { $useApi } = useNuxtApp();
    const props = __props;
    const order = ref({ ...props.currentOrder });
    const frezer = ref({ ...order.value.frezer });
    const laminater = ref({ ...order.value.laminater });
    const master = ref({ ...order.value.master });
    const packer = ref({ ...order.value.packer });
    const emit = __emit;
    const deleteOrder = async (orderId) => {
      await $useApi.delete(`/orders/${orderId}`);
      emit("update-orders-list");
    };
    const getOrder = async () => {
      const { data } = await $useApi.get(`/orders/${order.value.id}`);
      order.value = data;
      return;
    };
    const changeStage = async (orderId, stageId) => {
      console.log(orderId, stageId);
      const { data: order2 } = await $useApi.patch(
        `/orders/${orderId}/stage/${stageId}`
      );
      await getOrder();
      return console.log(order2);
    };
    const setFrezer = async (orderId, frezerId) => {
      console.log(orderId, frezerId);
      const { data: order2 } = await $useApi.patch(
        `/orders/${orderId}/frezer/${frezerId}`
      );
      await getOrder();
      return console.log(order2);
    };
    const setLaminater = async (orderId, laminaterId) => {
      console.log(orderId, laminaterId);
      const { data: order2 } = await $useApi.patch(
        `/orders/${orderId}/laminater/${laminaterId}`
      );
      await getOrder();
      return console.log(order2);
    };
    const setMaster = async (orderId, masterId) => {
      console.log(orderId, masterId);
      const { data: order2 } = await $useApi.patch(
        `/orders/${orderId}/master/${masterId}`
      );
      await getOrder();
      return console.log(order2);
    };
    const setPacker = async (orderId, packerId) => {
      console.log(orderId, packerId);
      const { data: order2 } = await $useApi.patch(
        `/orders/${orderId}/packer/${packerId}`
      );
      await getOrder();
      return console.log(order2);
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UiCard = _sfc_main$3;
      const _component_UiCardHeader = _sfc_main$1$1;
      const _component_UiCardTitle = _sfc_main$4;
      const _component_UiCardDescription = _sfc_main$5;
      const _component_UiDropdownMenu = _sfc_main$3$1;
      const _component_UiDropdownMenuTrigger = _sfc_main$2$2;
      const _component_UiButton = _sfc_main$e;
      const _component_Icon = __nuxt_component_0;
      const _component_UiDropdownMenuContent = _sfc_main$1$3;
      const _component_UiDropdownMenuLabel = _sfc_main$1$4;
      const _component_UiSeparator = _sfc_main$f;
      const _component_UiDropdownMenuRadioGroup = _sfc_main$1$5;
      const _component_UiDropdownMenuRadioItem = _sfc_main$g;
      const _component_UiCardContent = _sfc_main$6;
      const _component_UiCardFooter = _sfc_main$h;
      const _component_MyOrdersOrderFormModal = _sfc_main$a;
      _push(ssrRenderComponent(_component_UiCard, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UiCardHeader, { class: "bg-slate-50 p-2 pl-4" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UiCardTitle, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`${ssrInterpolate(unref(order).title)}`);
                      } else {
                        return [
                          createTextVNode(toDisplayString(unref(order).title), 1)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_UiCardDescription, { class: "flex items-center gap-2" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      var _a, _b;
                      if (_push4) {
                        _push4(`\u0421\u0442\u0430\u0442\u0443\u0441: ${ssrInterpolate(((_a = unref(order).stage) == null ? void 0 : _a.title) || "\u0412\u044B\u0433\u0440\u0443\u0437\u043A\u0430")} `);
                        _push4(ssrRenderComponent(_component_UiDropdownMenu, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_UiDropdownMenuTrigger, { "as-child": "" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_UiButton, {
                                      size: "icon",
                                      class: "h-6 w-6"
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(_component_Icon, {
                                            name: "mdi:skew-more",
                                            color: "white",
                                            size: "20px"
                                          }, null, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(_component_Icon, {
                                              name: "mdi:skew-more",
                                              color: "white",
                                              size: "20px"
                                            })
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_UiButton, {
                                        size: "icon",
                                        class: "h-6 w-6"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_Icon, {
                                            name: "mdi:skew-more",
                                            color: "white",
                                            size: "20px"
                                          })
                                        ]),
                                        _: 1
                                      })
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_UiDropdownMenuContent, null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_UiDropdownMenuLabel, { class: "text-center" }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`\u041F\u0435\u0440\u0435\u043C\u0435\u0441\u0442\u0438\u0442\u044C `);
                                        } else {
                                          return [
                                            createTextVNode("\u041F\u0435\u0440\u0435\u043C\u0435\u0441\u0442\u0438\u0442\u044C ")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(_component_UiSeparator, null, null, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(_component_UiDropdownMenuRadioGroup, {
                                      modelValue: unref(order).stage.title,
                                      "onUpdate:modelValue": ($event) => unref(order).stage.title = $event
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`<!--[-->`);
                                          ssrRenderList(_ctx.stages, (stage) => {
                                            _push7(ssrRenderComponent(_component_UiDropdownMenuRadioItem, {
                                              key: stage.id,
                                              value: stage.title,
                                              onClick: ($event) => changeStage(unref(order).id, stage.id)
                                            }, {
                                              default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                if (_push8) {
                                                  _push8(`${ssrInterpolate(stage.title)}`);
                                                } else {
                                                  return [
                                                    createTextVNode(toDisplayString(stage.title), 1)
                                                  ];
                                                }
                                              }),
                                              _: 2
                                            }, _parent7, _scopeId6));
                                          });
                                          _push7(`<!--]-->`);
                                        } else {
                                          return [
                                            (openBlock(true), createBlock(Fragment, null, renderList(_ctx.stages, (stage) => {
                                              return openBlock(), createBlock(_component_UiDropdownMenuRadioItem, {
                                                key: stage.id,
                                                value: stage.title,
                                                onClick: ($event) => changeStage(unref(order).id, stage.id)
                                              }, {
                                                default: withCtx(() => [
                                                  createTextVNode(toDisplayString(stage.title), 1)
                                                ]),
                                                _: 2
                                              }, 1032, ["value", "onClick"]);
                                            }), 128))
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_UiDropdownMenuLabel, { class: "text-center" }, {
                                        default: withCtx(() => [
                                          createTextVNode("\u041F\u0435\u0440\u0435\u043C\u0435\u0441\u0442\u0438\u0442\u044C ")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_UiSeparator),
                                      createVNode(_component_UiDropdownMenuRadioGroup, {
                                        modelValue: unref(order).stage.title,
                                        "onUpdate:modelValue": ($event) => unref(order).stage.title = $event
                                      }, {
                                        default: withCtx(() => [
                                          (openBlock(true), createBlock(Fragment, null, renderList(_ctx.stages, (stage) => {
                                            return openBlock(), createBlock(_component_UiDropdownMenuRadioItem, {
                                              key: stage.id,
                                              value: stage.title,
                                              onClick: ($event) => changeStage(unref(order).id, stage.id)
                                            }, {
                                              default: withCtx(() => [
                                                createTextVNode(toDisplayString(stage.title), 1)
                                              ]),
                                              _: 2
                                            }, 1032, ["value", "onClick"]);
                                          }), 128))
                                        ]),
                                        _: 1
                                      }, 8, ["modelValue", "onUpdate:modelValue"])
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_UiDropdownMenuTrigger, { "as-child": "" }, {
                                  default: withCtx(() => [
                                    createVNode(_component_UiButton, {
                                      size: "icon",
                                      class: "h-6 w-6"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(_component_Icon, {
                                          name: "mdi:skew-more",
                                          color: "white",
                                          size: "20px"
                                        })
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_UiDropdownMenuContent, null, {
                                  default: withCtx(() => [
                                    createVNode(_component_UiDropdownMenuLabel, { class: "text-center" }, {
                                      default: withCtx(() => [
                                        createTextVNode("\u041F\u0435\u0440\u0435\u043C\u0435\u0441\u0442\u0438\u0442\u044C ")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_UiSeparator),
                                    createVNode(_component_UiDropdownMenuRadioGroup, {
                                      modelValue: unref(order).stage.title,
                                      "onUpdate:modelValue": ($event) => unref(order).stage.title = $event
                                    }, {
                                      default: withCtx(() => [
                                        (openBlock(true), createBlock(Fragment, null, renderList(_ctx.stages, (stage) => {
                                          return openBlock(), createBlock(_component_UiDropdownMenuRadioItem, {
                                            key: stage.id,
                                            value: stage.title,
                                            onClick: ($event) => changeStage(unref(order).id, stage.id)
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode(toDisplayString(stage.title), 1)
                                            ]),
                                            _: 2
                                          }, 1032, ["value", "onClick"]);
                                        }), 128))
                                      ]),
                                      _: 1
                                    }, 8, ["modelValue", "onUpdate:modelValue"])
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
                          createTextVNode("\u0421\u0442\u0430\u0442\u0443\u0441: " + toDisplayString(((_b = unref(order).stage) == null ? void 0 : _b.title) || "\u0412\u044B\u0433\u0440\u0443\u0437\u043A\u0430") + " ", 1),
                          createVNode(_component_UiDropdownMenu, null, {
                            default: withCtx(() => [
                              createVNode(_component_UiDropdownMenuTrigger, { "as-child": "" }, {
                                default: withCtx(() => [
                                  createVNode(_component_UiButton, {
                                    size: "icon",
                                    class: "h-6 w-6"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_Icon, {
                                        name: "mdi:skew-more",
                                        color: "white",
                                        size: "20px"
                                      })
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode(_component_UiDropdownMenuContent, null, {
                                default: withCtx(() => [
                                  createVNode(_component_UiDropdownMenuLabel, { class: "text-center" }, {
                                    default: withCtx(() => [
                                      createTextVNode("\u041F\u0435\u0440\u0435\u043C\u0435\u0441\u0442\u0438\u0442\u044C ")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_UiSeparator),
                                  createVNode(_component_UiDropdownMenuRadioGroup, {
                                    modelValue: unref(order).stage.title,
                                    "onUpdate:modelValue": ($event) => unref(order).stage.title = $event
                                  }, {
                                    default: withCtx(() => [
                                      (openBlock(true), createBlock(Fragment, null, renderList(_ctx.stages, (stage) => {
                                        return openBlock(), createBlock(_component_UiDropdownMenuRadioItem, {
                                          key: stage.id,
                                          value: stage.title,
                                          onClick: ($event) => changeStage(unref(order).id, stage.id)
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(stage.title), 1)
                                          ]),
                                          _: 2
                                        }, 1032, ["value", "onClick"]);
                                      }), 128))
                                    ]),
                                    _: 1
                                  }, 8, ["modelValue", "onUpdate:modelValue"])
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
                  return [
                    createVNode(_component_UiCardTitle, null, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(unref(order).title), 1)
                      ]),
                      _: 1
                    }),
                    createVNode(_component_UiCardDescription, { class: "flex items-center gap-2" }, {
                      default: withCtx(() => {
                        var _a;
                        return [
                          createTextVNode("\u0421\u0442\u0430\u0442\u0443\u0441: " + toDisplayString(((_a = unref(order).stage) == null ? void 0 : _a.title) || "\u0412\u044B\u0433\u0440\u0443\u0437\u043A\u0430") + " ", 1),
                          createVNode(_component_UiDropdownMenu, null, {
                            default: withCtx(() => [
                              createVNode(_component_UiDropdownMenuTrigger, { "as-child": "" }, {
                                default: withCtx(() => [
                                  createVNode(_component_UiButton, {
                                    size: "icon",
                                    class: "h-6 w-6"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_Icon, {
                                        name: "mdi:skew-more",
                                        color: "white",
                                        size: "20px"
                                      })
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode(_component_UiDropdownMenuContent, null, {
                                default: withCtx(() => [
                                  createVNode(_component_UiDropdownMenuLabel, { class: "text-center" }, {
                                    default: withCtx(() => [
                                      createTextVNode("\u041F\u0435\u0440\u0435\u043C\u0435\u0441\u0442\u0438\u0442\u044C ")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_UiSeparator),
                                  createVNode(_component_UiDropdownMenuRadioGroup, {
                                    modelValue: unref(order).stage.title,
                                    "onUpdate:modelValue": ($event) => unref(order).stage.title = $event
                                  }, {
                                    default: withCtx(() => [
                                      (openBlock(true), createBlock(Fragment, null, renderList(_ctx.stages, (stage) => {
                                        return openBlock(), createBlock(_component_UiDropdownMenuRadioItem, {
                                          key: stage.id,
                                          value: stage.title,
                                          onClick: ($event) => changeStage(unref(order).id, stage.id)
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(stage.title), 1)
                                          ]),
                                          _: 2
                                        }, 1032, ["value", "onClick"]);
                                      }), 128))
                                    ]),
                                    _: 1
                                  }, 8, ["modelValue", "onUpdate:modelValue"])
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })
                        ];
                      }),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UiCardContent, { class: "flex gap-2 p-2 flex-col" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                var _a, _b, _c, _d, _e, _f, _g, _h;
                if (_push3) {
                  _push3(`<div class="gap-3 flex-1 border p-2 rounded-md"${_scopeId2}><div class="font-semibold pb-2"${_scopeId2}>\u0417\u0430\u0434\u0430\u043D\u0438\u0435 \u043D\u0430 \u0444\u0440\u0435\u0437\u0435\u0440\u043E\u0432\u043A\u0443</div><ul class="text-gray-600"${_scopeId2}><li class=""${_scopeId2}>\u041C\u0430\u0442\u0435\u0440\u0438\u0430\u043B: ${ssrInterpolate(unref(order).material)}</li><li class=""${_scopeId2}> \u0420\u0430\u0437\u043C\u0435\u0440\u044B: ${ssrInterpolate(unref(order).boardHeight)}/${ssrInterpolate(unref(order).boardWidth)} \u0441\u043C </li><li class=""${_scopeId2}>\u041E\u0442\u0432\u0435\u0440\u0441\u0442\u0438\u044F: ${ssrInterpolate(unref(order).holeType)}</li><li class=""${_scopeId2}>\u041F\u043E\u0434\u0441\u0442\u0430\u0432\u043A\u0430: ${ssrInterpolate(unref(order).stand === true ? "\u0414\u0430" : "\u041D\u0435\u0442")}</li><li${_scopeId2}> \u0412\u044B\u043F\u043E\u043B\u043D\u0438\u043B: ${ssrInterpolate((_a = unref(order).frezer) == null ? void 0 : _a.fullName)} `);
                  _push3(ssrRenderComponent(_component_UiDropdownMenu, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_UiDropdownMenuTrigger, { "as-child": "" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_UiButton, {
                                size: "icon",
                                class: "h-6 w-6"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_Icon, {
                                      name: "mingcute:edit-line",
                                      color: "white",
                                      size: "20px"
                                    }, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_Icon, {
                                        name: "mingcute:edit-line",
                                        color: "white",
                                        size: "20px"
                                      })
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_UiButton, {
                                  size: "icon",
                                  class: "h-6 w-6"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_Icon, {
                                      name: "mingcute:edit-line",
                                      color: "white",
                                      size: "20px"
                                    })
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_UiDropdownMenuContent, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_UiDropdownMenuLabel, { class: "text-center" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`\u041D\u0430\u0437\u043D\u0430\u0447\u0438\u0442\u044C `);
                                  } else {
                                    return [
                                      createTextVNode("\u041D\u0430\u0437\u043D\u0430\u0447\u0438\u0442\u044C ")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_UiSeparator, null, null, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_UiDropdownMenuRadioGroup, {
                                modelValue: unref(frezer).fullName,
                                "onUpdate:modelValue": ($event) => unref(frezer).fullName = $event
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`<!--[-->`);
                                    ssrRenderList(_ctx.workers, (worker) => {
                                      _push6(ssrRenderComponent(_component_UiDropdownMenuRadioItem, {
                                        key: worker.id,
                                        value: worker.fullName,
                                        onClick: ($event) => setFrezer(unref(order).id, worker.id)
                                      }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`${ssrInterpolate(worker.fullName)} - ${ssrInterpolate(worker.role.fullName)}`);
                                          } else {
                                            return [
                                              createTextVNode(toDisplayString(worker.fullName) + " - " + toDisplayString(worker.role.fullName), 1)
                                            ];
                                          }
                                        }),
                                        _: 2
                                      }, _parent6, _scopeId5));
                                    });
                                    _push6(`<!--]-->`);
                                  } else {
                                    return [
                                      (openBlock(true), createBlock(Fragment, null, renderList(_ctx.workers, (worker) => {
                                        return openBlock(), createBlock(_component_UiDropdownMenuRadioItem, {
                                          key: worker.id,
                                          value: worker.fullName,
                                          onClick: ($event) => setFrezer(unref(order).id, worker.id)
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(worker.fullName) + " - " + toDisplayString(worker.role.fullName), 1)
                                          ]),
                                          _: 2
                                        }, 1032, ["value", "onClick"]);
                                      }), 128))
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_UiDropdownMenuLabel, { class: "text-center" }, {
                                  default: withCtx(() => [
                                    createTextVNode("\u041D\u0430\u0437\u043D\u0430\u0447\u0438\u0442\u044C ")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_UiSeparator),
                                createVNode(_component_UiDropdownMenuRadioGroup, {
                                  modelValue: unref(frezer).fullName,
                                  "onUpdate:modelValue": ($event) => unref(frezer).fullName = $event
                                }, {
                                  default: withCtx(() => [
                                    (openBlock(true), createBlock(Fragment, null, renderList(_ctx.workers, (worker) => {
                                      return openBlock(), createBlock(_component_UiDropdownMenuRadioItem, {
                                        key: worker.id,
                                        value: worker.fullName,
                                        onClick: ($event) => setFrezer(unref(order).id, worker.id)
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(worker.fullName) + " - " + toDisplayString(worker.role.fullName), 1)
                                        ]),
                                        _: 2
                                      }, 1032, ["value", "onClick"]);
                                    }), 128))
                                  ]),
                                  _: 1
                                }, 8, ["modelValue", "onUpdate:modelValue"])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_UiDropdownMenuTrigger, { "as-child": "" }, {
                            default: withCtx(() => [
                              createVNode(_component_UiButton, {
                                size: "icon",
                                class: "h-6 w-6"
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_Icon, {
                                    name: "mingcute:edit-line",
                                    color: "white",
                                    size: "20px"
                                  })
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_UiDropdownMenuContent, null, {
                            default: withCtx(() => [
                              createVNode(_component_UiDropdownMenuLabel, { class: "text-center" }, {
                                default: withCtx(() => [
                                  createTextVNode("\u041D\u0430\u0437\u043D\u0430\u0447\u0438\u0442\u044C ")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_UiSeparator),
                              createVNode(_component_UiDropdownMenuRadioGroup, {
                                modelValue: unref(frezer).fullName,
                                "onUpdate:modelValue": ($event) => unref(frezer).fullName = $event
                              }, {
                                default: withCtx(() => [
                                  (openBlock(true), createBlock(Fragment, null, renderList(_ctx.workers, (worker) => {
                                    return openBlock(), createBlock(_component_UiDropdownMenuRadioItem, {
                                      key: worker.id,
                                      value: worker.fullName,
                                      onClick: ($event) => setFrezer(unref(order).id, worker.id)
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(worker.fullName) + " - " + toDisplayString(worker.role.fullName), 1)
                                      ]),
                                      _: 2
                                    }, 1032, ["value", "onClick"]);
                                  }), 128))
                                ]),
                                _: 1
                              }, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</li></ul></div><div class="gap-3 flex-1 border p-2 rounded-md"${_scopeId2}><div class="font-semibold pb-2"${_scopeId2}>\u0417\u0430\u0434\u0430\u043D\u0438\u0435 \u043D\u0430 \u043F\u043B\u0435\u043D\u043A\u0443</div><ul class="text-gray-600"${_scopeId2}><li class=""${_scopeId2}>\u041F\u043B\u0435\u043D\u043A\u0430: ${ssrInterpolate(unref(order).laminate || "\u041D\u0435\u0442")}</li><li class=""${_scopeId2}>\u0410\u043A\u0440\u0438\u043B: ${ssrInterpolate(unref(order).acrylic || "\u041D\u0435\u0442")}</li><li class=""${_scopeId2}>\u041F\u0435\u0447\u0430\u0442\u044C: ${ssrInterpolate(unref(order).print === true ? "\u0414\u0430" : "\u041D\u0435\u0442")}</li>`);
                  if (unref(order).print) {
                    _push3(`<li class=""${_scopeId2}> \u041A\u0430\u0447\u0435\u0441\u0442\u0432\u043E: ${ssrInterpolate(unref(order).printQuality === true ? "\u0421\u043E\u0433\u043B\u0430\u0441\u043E\u0432\u0430\u043D\u043E" : "\u041D\u0435 \u0441\u043E\u0433\u043B\u0430\u0441\u043E\u0432\u0430\u043D\u043E")}</li>`);
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(`<li${_scopeId2}> \u0412\u044B\u043F\u043E\u043B\u043D\u0438\u043B: ${ssrInterpolate((_b = unref(order).laminater) == null ? void 0 : _b.fullName)} `);
                  _push3(ssrRenderComponent(_component_UiDropdownMenu, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_UiDropdownMenuTrigger, { "as-child": "" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_UiButton, {
                                size: "icon",
                                class: "h-6 w-6"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_Icon, {
                                      name: "mingcute:edit-line",
                                      color: "white",
                                      size: "20px"
                                    }, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_Icon, {
                                        name: "mingcute:edit-line",
                                        color: "white",
                                        size: "20px"
                                      })
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_UiButton, {
                                  size: "icon",
                                  class: "h-6 w-6"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_Icon, {
                                      name: "mingcute:edit-line",
                                      color: "white",
                                      size: "20px"
                                    })
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_UiDropdownMenuContent, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_UiDropdownMenuLabel, { class: "text-center" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`\u041D\u0430\u0437\u043D\u0430\u0447\u0438\u0442\u044C `);
                                  } else {
                                    return [
                                      createTextVNode("\u041D\u0430\u0437\u043D\u0430\u0447\u0438\u0442\u044C ")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_UiSeparator, null, null, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_UiDropdownMenuRadioGroup, {
                                modelValue: unref(laminater).fullName,
                                "onUpdate:modelValue": ($event) => unref(laminater).fullName = $event
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`<!--[-->`);
                                    ssrRenderList(_ctx.workers, (worker) => {
                                      _push6(ssrRenderComponent(_component_UiDropdownMenuRadioItem, {
                                        key: worker.id,
                                        value: worker.fullName,
                                        onClick: ($event) => setLaminater(unref(order).id, worker.id)
                                      }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`${ssrInterpolate(worker.fullName)}`);
                                          } else {
                                            return [
                                              createTextVNode(toDisplayString(worker.fullName), 1)
                                            ];
                                          }
                                        }),
                                        _: 2
                                      }, _parent6, _scopeId5));
                                    });
                                    _push6(`<!--]-->`);
                                  } else {
                                    return [
                                      (openBlock(true), createBlock(Fragment, null, renderList(_ctx.workers, (worker) => {
                                        return openBlock(), createBlock(_component_UiDropdownMenuRadioItem, {
                                          key: worker.id,
                                          value: worker.fullName,
                                          onClick: ($event) => setLaminater(unref(order).id, worker.id)
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(worker.fullName), 1)
                                          ]),
                                          _: 2
                                        }, 1032, ["value", "onClick"]);
                                      }), 128))
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_UiDropdownMenuLabel, { class: "text-center" }, {
                                  default: withCtx(() => [
                                    createTextVNode("\u041D\u0430\u0437\u043D\u0430\u0447\u0438\u0442\u044C ")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_UiSeparator),
                                createVNode(_component_UiDropdownMenuRadioGroup, {
                                  modelValue: unref(laminater).fullName,
                                  "onUpdate:modelValue": ($event) => unref(laminater).fullName = $event
                                }, {
                                  default: withCtx(() => [
                                    (openBlock(true), createBlock(Fragment, null, renderList(_ctx.workers, (worker) => {
                                      return openBlock(), createBlock(_component_UiDropdownMenuRadioItem, {
                                        key: worker.id,
                                        value: worker.fullName,
                                        onClick: ($event) => setLaminater(unref(order).id, worker.id)
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(worker.fullName), 1)
                                        ]),
                                        _: 2
                                      }, 1032, ["value", "onClick"]);
                                    }), 128))
                                  ]),
                                  _: 1
                                }, 8, ["modelValue", "onUpdate:modelValue"])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_UiDropdownMenuTrigger, { "as-child": "" }, {
                            default: withCtx(() => [
                              createVNode(_component_UiButton, {
                                size: "icon",
                                class: "h-6 w-6"
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_Icon, {
                                    name: "mingcute:edit-line",
                                    color: "white",
                                    size: "20px"
                                  })
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_UiDropdownMenuContent, null, {
                            default: withCtx(() => [
                              createVNode(_component_UiDropdownMenuLabel, { class: "text-center" }, {
                                default: withCtx(() => [
                                  createTextVNode("\u041D\u0430\u0437\u043D\u0430\u0447\u0438\u0442\u044C ")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_UiSeparator),
                              createVNode(_component_UiDropdownMenuRadioGroup, {
                                modelValue: unref(laminater).fullName,
                                "onUpdate:modelValue": ($event) => unref(laminater).fullName = $event
                              }, {
                                default: withCtx(() => [
                                  (openBlock(true), createBlock(Fragment, null, renderList(_ctx.workers, (worker) => {
                                    return openBlock(), createBlock(_component_UiDropdownMenuRadioItem, {
                                      key: worker.id,
                                      value: worker.fullName,
                                      onClick: ($event) => setLaminater(unref(order).id, worker.id)
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(worker.fullName), 1)
                                      ]),
                                      _: 2
                                    }, 1032, ["value", "onClick"]);
                                  }), 128))
                                ]),
                                _: 1
                              }, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</li></ul></div><div class="gap-3 flex-1 border p-2 rounded-md"${_scopeId2}><div class="font-semibold pb-2"${_scopeId2}>\u0417\u0430\u0434\u0430\u043D\u0438\u0435 \u043D\u0430 \u0441\u0431\u043E\u0440\u043A\u0443</div><ul class="text-gray-600"${_scopeId2}><li class=""${_scopeId2}>\u041D\u0430\u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435: ${ssrInterpolate(unref(order).type)}</li><li class=""${_scopeId2}>\u041F\u0440\u043E\u0432\u043E\u0434 \u043E\u0442 \u0432\u044B\u0432\u0435\u0441\u043A\u0438(\u0430\u043A\u0443\u0441\u0442\u0438\u043A\u0430): ${ssrInterpolate(unref(order).wireLength)}</li><li class=""${_scopeId2}>\u041D\u0435\u043E\u043D:</li><!--[-->`);
                  ssrRenderList(unref(order).neons, (neon) => {
                    _push3(`<li class="pl-3"${_scopeId2}> - <span${_scopeId2}>${ssrInterpolate(neon.color)}(${ssrInterpolate(neon.width)}) / ${ssrInterpolate(neon.length)}\u0441\u043C </span>`);
                    if (neon.width === "\u041F\u043E\u0434\u0441\u0432\u0435\u0442\u043A\u0430") {
                      _push3(`<span${_scopeId2}>${ssrInterpolate(neon.elements)}(\u044D\u043B).</span>`);
                    } else {
                      _push3(`<!---->`);
                    }
                    _push3(`</li>`);
                  });
                  _push3(`<!--]--><li${_scopeId2}>\u042D\u043B\u0435\u043C\u0435\u043D\u0442\u044B: ${ssrInterpolate(unref(order).elements)}</li><li${_scopeId2}>\u041F\u043E\u0434\u0430\u0440\u043E\u043A: ${ssrInterpolate(unref(order).gift === true ? "\u0414\u0430" : "\u041D\u0435\u0442")}</li><li${_scopeId2}> \u0412\u044B\u043F\u043E\u043B\u043D\u0438\u043B: ${ssrInterpolate((_c = unref(order).master) == null ? void 0 : _c.fullName)} `);
                  _push3(ssrRenderComponent(_component_UiDropdownMenu, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_UiDropdownMenuTrigger, { "as-child": "" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_UiButton, {
                                size: "icon",
                                class: "h-6 w-6"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_Icon, {
                                      name: "mingcute:edit-line",
                                      color: "white",
                                      size: "20px"
                                    }, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_Icon, {
                                        name: "mingcute:edit-line",
                                        color: "white",
                                        size: "20px"
                                      })
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_UiButton, {
                                  size: "icon",
                                  class: "h-6 w-6"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_Icon, {
                                      name: "mingcute:edit-line",
                                      color: "white",
                                      size: "20px"
                                    })
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_UiDropdownMenuContent, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_UiDropdownMenuLabel, { class: "text-center" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`\u041D\u0430\u0437\u043D\u0430\u0447\u0438\u0442\u044C `);
                                  } else {
                                    return [
                                      createTextVNode("\u041D\u0430\u0437\u043D\u0430\u0447\u0438\u0442\u044C ")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_UiSeparator, null, null, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_UiDropdownMenuRadioGroup, {
                                modelValue: unref(master).fullName,
                                "onUpdate:modelValue": ($event) => unref(master).fullName = $event
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`<!--[-->`);
                                    ssrRenderList(_ctx.workers, (worker) => {
                                      _push6(ssrRenderComponent(_component_UiDropdownMenuRadioItem, {
                                        key: worker.id,
                                        value: worker.fullName,
                                        onClick: ($event) => setMaster(unref(order).id, worker.id)
                                      }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`${ssrInterpolate(worker.fullName)}`);
                                          } else {
                                            return [
                                              createTextVNode(toDisplayString(worker.fullName), 1)
                                            ];
                                          }
                                        }),
                                        _: 2
                                      }, _parent6, _scopeId5));
                                    });
                                    _push6(`<!--]-->`);
                                  } else {
                                    return [
                                      (openBlock(true), createBlock(Fragment, null, renderList(_ctx.workers, (worker) => {
                                        return openBlock(), createBlock(_component_UiDropdownMenuRadioItem, {
                                          key: worker.id,
                                          value: worker.fullName,
                                          onClick: ($event) => setMaster(unref(order).id, worker.id)
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(worker.fullName), 1)
                                          ]),
                                          _: 2
                                        }, 1032, ["value", "onClick"]);
                                      }), 128))
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_UiDropdownMenuLabel, { class: "text-center" }, {
                                  default: withCtx(() => [
                                    createTextVNode("\u041D\u0430\u0437\u043D\u0430\u0447\u0438\u0442\u044C ")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_UiSeparator),
                                createVNode(_component_UiDropdownMenuRadioGroup, {
                                  modelValue: unref(master).fullName,
                                  "onUpdate:modelValue": ($event) => unref(master).fullName = $event
                                }, {
                                  default: withCtx(() => [
                                    (openBlock(true), createBlock(Fragment, null, renderList(_ctx.workers, (worker) => {
                                      return openBlock(), createBlock(_component_UiDropdownMenuRadioItem, {
                                        key: worker.id,
                                        value: worker.fullName,
                                        onClick: ($event) => setMaster(unref(order).id, worker.id)
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(worker.fullName), 1)
                                        ]),
                                        _: 2
                                      }, 1032, ["value", "onClick"]);
                                    }), 128))
                                  ]),
                                  _: 1
                                }, 8, ["modelValue", "onUpdate:modelValue"])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_UiDropdownMenuTrigger, { "as-child": "" }, {
                            default: withCtx(() => [
                              createVNode(_component_UiButton, {
                                size: "icon",
                                class: "h-6 w-6"
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_Icon, {
                                    name: "mingcute:edit-line",
                                    color: "white",
                                    size: "20px"
                                  })
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_UiDropdownMenuContent, null, {
                            default: withCtx(() => [
                              createVNode(_component_UiDropdownMenuLabel, { class: "text-center" }, {
                                default: withCtx(() => [
                                  createTextVNode("\u041D\u0430\u0437\u043D\u0430\u0447\u0438\u0442\u044C ")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_UiSeparator),
                              createVNode(_component_UiDropdownMenuRadioGroup, {
                                modelValue: unref(master).fullName,
                                "onUpdate:modelValue": ($event) => unref(master).fullName = $event
                              }, {
                                default: withCtx(() => [
                                  (openBlock(true), createBlock(Fragment, null, renderList(_ctx.workers, (worker) => {
                                    return openBlock(), createBlock(_component_UiDropdownMenuRadioItem, {
                                      key: worker.id,
                                      value: worker.fullName,
                                      onClick: ($event) => setMaster(unref(order).id, worker.id)
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(worker.fullName), 1)
                                      ]),
                                      _: 2
                                    }, 1032, ["value", "onClick"]);
                                  }), 128))
                                ]),
                                _: 1
                              }, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</li></ul></div><div class="gap-3 flex-1 border p-2 rounded-md"${_scopeId2}><div class="font-semibold pb-2"${_scopeId2}>\u0417\u0430\u0434\u0430\u043D\u0438\u0435 \u043D\u0430 \u0443\u043F\u0430\u043A\u043E\u0432\u043A\u0443</div><ul class="gap-1 text-gray-600"${_scopeId2}><li class=""${_scopeId2}>\u0422\u0438\u043F \u0431\u043B\u043E\u043A\u0430: ${ssrInterpolate(unref(order).adapter)}</li><li class=""${_scopeId2}> \u041F\u0440\u043E\u0432\u043E\u0434 \u043E\u0442 \u0431\u043B\u043E\u043A\u0430: <span${_scopeId2}>${ssrInterpolate(unref(order).plug)}</span></li><li class=""${_scopeId2}>\u041A\u0440\u0435\u043F\u043B\u0435\u043D\u0438\u044F: ${ssrInterpolate(unref(order).fitting)}</li><li class=""${_scopeId2}>\u0414\u0438\u043C\u043C\u0435\u0440: ${ssrInterpolate(unref(order).dimmer === true ? "\u0414\u0430" : "\u041D\u0435\u0442")}</li><li class=""${_scopeId2}> \u041F\u043E\u0434\u0430\u0440\u043E\u0447\u043D\u0430\u044F \u0443\u043F\u0430\u043A\u043E\u0432\u043A\u0430: ${ssrInterpolate(unref(order).giftPack === true ? "\u0414\u0430" : "\u041D\u0435\u0442")}</li><li${_scopeId2}>\u041F\u043E\u0434\u0430\u0440\u043E\u043A: ${ssrInterpolate(unref(order).gift === true ? "\u0414\u0430" : "\u041D\u0435\u0442")}</li><li${_scopeId2}> \u0412\u044B\u043F\u043E\u043B\u043D\u0438\u043B: ${ssrInterpolate((_d = unref(order).packer) == null ? void 0 : _d.fullName)} `);
                  _push3(ssrRenderComponent(_component_UiDropdownMenu, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_UiDropdownMenuTrigger, { "as-child": "" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_UiButton, {
                                size: "icon",
                                class: "h-6 w-6"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_Icon, {
                                      name: "mingcute:edit-line",
                                      color: "white",
                                      size: "20px"
                                    }, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_Icon, {
                                        name: "mingcute:edit-line",
                                        color: "white",
                                        size: "20px"
                                      })
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_UiButton, {
                                  size: "icon",
                                  class: "h-6 w-6"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_Icon, {
                                      name: "mingcute:edit-line",
                                      color: "white",
                                      size: "20px"
                                    })
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_UiDropdownMenuContent, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_UiDropdownMenuLabel, { class: "text-center" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`\u041D\u0430\u0437\u043D\u0430\u0447\u0438\u0442\u044C `);
                                  } else {
                                    return [
                                      createTextVNode("\u041D\u0430\u0437\u043D\u0430\u0447\u0438\u0442\u044C ")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_UiSeparator, null, null, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_UiDropdownMenuRadioGroup, {
                                modelValue: unref(packer).fullName,
                                "onUpdate:modelValue": ($event) => unref(packer).fullName = $event
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`<!--[-->`);
                                    ssrRenderList(_ctx.workers, (worker) => {
                                      _push6(ssrRenderComponent(_component_UiDropdownMenuRadioItem, {
                                        key: worker.id,
                                        value: worker.fullName,
                                        onClick: ($event) => setPacker(unref(order).id, worker.id)
                                      }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`${ssrInterpolate(worker.fullName)}`);
                                          } else {
                                            return [
                                              createTextVNode(toDisplayString(worker.fullName), 1)
                                            ];
                                          }
                                        }),
                                        _: 2
                                      }, _parent6, _scopeId5));
                                    });
                                    _push6(`<!--]-->`);
                                  } else {
                                    return [
                                      (openBlock(true), createBlock(Fragment, null, renderList(_ctx.workers, (worker) => {
                                        return openBlock(), createBlock(_component_UiDropdownMenuRadioItem, {
                                          key: worker.id,
                                          value: worker.fullName,
                                          onClick: ($event) => setPacker(unref(order).id, worker.id)
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(worker.fullName), 1)
                                          ]),
                                          _: 2
                                        }, 1032, ["value", "onClick"]);
                                      }), 128))
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_UiDropdownMenuLabel, { class: "text-center" }, {
                                  default: withCtx(() => [
                                    createTextVNode("\u041D\u0430\u0437\u043D\u0430\u0447\u0438\u0442\u044C ")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_UiSeparator),
                                createVNode(_component_UiDropdownMenuRadioGroup, {
                                  modelValue: unref(packer).fullName,
                                  "onUpdate:modelValue": ($event) => unref(packer).fullName = $event
                                }, {
                                  default: withCtx(() => [
                                    (openBlock(true), createBlock(Fragment, null, renderList(_ctx.workers, (worker) => {
                                      return openBlock(), createBlock(_component_UiDropdownMenuRadioItem, {
                                        key: worker.id,
                                        value: worker.fullName,
                                        onClick: ($event) => setPacker(unref(order).id, worker.id)
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(worker.fullName), 1)
                                        ]),
                                        _: 2
                                      }, 1032, ["value", "onClick"]);
                                    }), 128))
                                  ]),
                                  _: 1
                                }, 8, ["modelValue", "onUpdate:modelValue"])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_UiDropdownMenuTrigger, { "as-child": "" }, {
                            default: withCtx(() => [
                              createVNode(_component_UiButton, {
                                size: "icon",
                                class: "h-6 w-6"
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_Icon, {
                                    name: "mingcute:edit-line",
                                    color: "white",
                                    size: "20px"
                                  })
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_UiDropdownMenuContent, null, {
                            default: withCtx(() => [
                              createVNode(_component_UiDropdownMenuLabel, { class: "text-center" }, {
                                default: withCtx(() => [
                                  createTextVNode("\u041D\u0430\u0437\u043D\u0430\u0447\u0438\u0442\u044C ")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_UiSeparator),
                              createVNode(_component_UiDropdownMenuRadioGroup, {
                                modelValue: unref(packer).fullName,
                                "onUpdate:modelValue": ($event) => unref(packer).fullName = $event
                              }, {
                                default: withCtx(() => [
                                  (openBlock(true), createBlock(Fragment, null, renderList(_ctx.workers, (worker) => {
                                    return openBlock(), createBlock(_component_UiDropdownMenuRadioItem, {
                                      key: worker.id,
                                      value: worker.fullName,
                                      onClick: ($event) => setPacker(unref(order).id, worker.id)
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(worker.fullName), 1)
                                      ]),
                                      _: 2
                                    }, 1032, ["value", "onClick"]);
                                  }), 128))
                                ]),
                                _: 1
                              }, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</li></ul></div>`);
                  if (unref(order).description) {
                    _push3(`<div class="gap-3 flex-1 border p-2 rounded-md"${_scopeId2}><div class="font-semibold pb-2"${_scopeId2}>\u0414\u043E\u043F. \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F</div><div class="text-gray-600 pb-2"${_scopeId2}>${ssrInterpolate(unref(order).description)}</div></div>`);
                  } else {
                    _push3(`<!---->`);
                  }
                } else {
                  return [
                    createVNode("div", { class: "gap-3 flex-1 border p-2 rounded-md" }, [
                      createVNode("div", { class: "font-semibold pb-2" }, "\u0417\u0430\u0434\u0430\u043D\u0438\u0435 \u043D\u0430 \u0444\u0440\u0435\u0437\u0435\u0440\u043E\u0432\u043A\u0443"),
                      createVNode("ul", { class: "text-gray-600" }, [
                        createVNode("li", { class: "" }, "\u041C\u0430\u0442\u0435\u0440\u0438\u0430\u043B: " + toDisplayString(unref(order).material), 1),
                        createVNode("li", { class: "" }, " \u0420\u0430\u0437\u043C\u0435\u0440\u044B: " + toDisplayString(unref(order).boardHeight) + "/" + toDisplayString(unref(order).boardWidth) + " \u0441\u043C ", 1),
                        createVNode("li", { class: "" }, "\u041E\u0442\u0432\u0435\u0440\u0441\u0442\u0438\u044F: " + toDisplayString(unref(order).holeType), 1),
                        createVNode("li", { class: "" }, "\u041F\u043E\u0434\u0441\u0442\u0430\u0432\u043A\u0430: " + toDisplayString(unref(order).stand === true ? "\u0414\u0430" : "\u041D\u0435\u0442"), 1),
                        createVNode("li", null, [
                          createTextVNode(" \u0412\u044B\u043F\u043E\u043B\u043D\u0438\u043B: " + toDisplayString((_e = unref(order).frezer) == null ? void 0 : _e.fullName) + " ", 1),
                          createVNode(_component_UiDropdownMenu, null, {
                            default: withCtx(() => [
                              createVNode(_component_UiDropdownMenuTrigger, { "as-child": "" }, {
                                default: withCtx(() => [
                                  createVNode(_component_UiButton, {
                                    size: "icon",
                                    class: "h-6 w-6"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_Icon, {
                                        name: "mingcute:edit-line",
                                        color: "white",
                                        size: "20px"
                                      })
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode(_component_UiDropdownMenuContent, null, {
                                default: withCtx(() => [
                                  createVNode(_component_UiDropdownMenuLabel, { class: "text-center" }, {
                                    default: withCtx(() => [
                                      createTextVNode("\u041D\u0430\u0437\u043D\u0430\u0447\u0438\u0442\u044C ")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_UiSeparator),
                                  createVNode(_component_UiDropdownMenuRadioGroup, {
                                    modelValue: unref(frezer).fullName,
                                    "onUpdate:modelValue": ($event) => unref(frezer).fullName = $event
                                  }, {
                                    default: withCtx(() => [
                                      (openBlock(true), createBlock(Fragment, null, renderList(_ctx.workers, (worker) => {
                                        return openBlock(), createBlock(_component_UiDropdownMenuRadioItem, {
                                          key: worker.id,
                                          value: worker.fullName,
                                          onClick: ($event) => setFrezer(unref(order).id, worker.id)
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(worker.fullName) + " - " + toDisplayString(worker.role.fullName), 1)
                                          ]),
                                          _: 2
                                        }, 1032, ["value", "onClick"]);
                                      }), 128))
                                    ]),
                                    _: 1
                                  }, 8, ["modelValue", "onUpdate:modelValue"])
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })
                        ])
                      ])
                    ]),
                    createVNode("div", { class: "gap-3 flex-1 border p-2 rounded-md" }, [
                      createVNode("div", { class: "font-semibold pb-2" }, "\u0417\u0430\u0434\u0430\u043D\u0438\u0435 \u043D\u0430 \u043F\u043B\u0435\u043D\u043A\u0443"),
                      createVNode("ul", { class: "text-gray-600" }, [
                        createVNode("li", { class: "" }, "\u041F\u043B\u0435\u043D\u043A\u0430: " + toDisplayString(unref(order).laminate || "\u041D\u0435\u0442"), 1),
                        createVNode("li", { class: "" }, "\u0410\u043A\u0440\u0438\u043B: " + toDisplayString(unref(order).acrylic || "\u041D\u0435\u0442"), 1),
                        createVNode("li", { class: "" }, "\u041F\u0435\u0447\u0430\u0442\u044C: " + toDisplayString(unref(order).print === true ? "\u0414\u0430" : "\u041D\u0435\u0442"), 1),
                        unref(order).print ? (openBlock(), createBlock("li", {
                          key: 0,
                          class: ""
                        }, " \u041A\u0430\u0447\u0435\u0441\u0442\u0432\u043E: " + toDisplayString(unref(order).printQuality === true ? "\u0421\u043E\u0433\u043B\u0430\u0441\u043E\u0432\u0430\u043D\u043E" : "\u041D\u0435 \u0441\u043E\u0433\u043B\u0430\u0441\u043E\u0432\u0430\u043D\u043E"), 1)) : createCommentVNode("", true),
                        createVNode("li", null, [
                          createTextVNode(" \u0412\u044B\u043F\u043E\u043B\u043D\u0438\u043B: " + toDisplayString((_f = unref(order).laminater) == null ? void 0 : _f.fullName) + " ", 1),
                          createVNode(_component_UiDropdownMenu, null, {
                            default: withCtx(() => [
                              createVNode(_component_UiDropdownMenuTrigger, { "as-child": "" }, {
                                default: withCtx(() => [
                                  createVNode(_component_UiButton, {
                                    size: "icon",
                                    class: "h-6 w-6"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_Icon, {
                                        name: "mingcute:edit-line",
                                        color: "white",
                                        size: "20px"
                                      })
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode(_component_UiDropdownMenuContent, null, {
                                default: withCtx(() => [
                                  createVNode(_component_UiDropdownMenuLabel, { class: "text-center" }, {
                                    default: withCtx(() => [
                                      createTextVNode("\u041D\u0430\u0437\u043D\u0430\u0447\u0438\u0442\u044C ")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_UiSeparator),
                                  createVNode(_component_UiDropdownMenuRadioGroup, {
                                    modelValue: unref(laminater).fullName,
                                    "onUpdate:modelValue": ($event) => unref(laminater).fullName = $event
                                  }, {
                                    default: withCtx(() => [
                                      (openBlock(true), createBlock(Fragment, null, renderList(_ctx.workers, (worker) => {
                                        return openBlock(), createBlock(_component_UiDropdownMenuRadioItem, {
                                          key: worker.id,
                                          value: worker.fullName,
                                          onClick: ($event) => setLaminater(unref(order).id, worker.id)
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(worker.fullName), 1)
                                          ]),
                                          _: 2
                                        }, 1032, ["value", "onClick"]);
                                      }), 128))
                                    ]),
                                    _: 1
                                  }, 8, ["modelValue", "onUpdate:modelValue"])
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })
                        ])
                      ])
                    ]),
                    createVNode("div", { class: "gap-3 flex-1 border p-2 rounded-md" }, [
                      createVNode("div", { class: "font-semibold pb-2" }, "\u0417\u0430\u0434\u0430\u043D\u0438\u0435 \u043D\u0430 \u0441\u0431\u043E\u0440\u043A\u0443"),
                      createVNode("ul", { class: "text-gray-600" }, [
                        createVNode("li", { class: "" }, "\u041D\u0430\u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435: " + toDisplayString(unref(order).type), 1),
                        createVNode("li", { class: "" }, "\u041F\u0440\u043E\u0432\u043E\u0434 \u043E\u0442 \u0432\u044B\u0432\u0435\u0441\u043A\u0438(\u0430\u043A\u0443\u0441\u0442\u0438\u043A\u0430): " + toDisplayString(unref(order).wireLength), 1),
                        createVNode("li", { class: "" }, "\u041D\u0435\u043E\u043D:"),
                        (openBlock(true), createBlock(Fragment, null, renderList(unref(order).neons, (neon) => {
                          return openBlock(), createBlock("li", {
                            key: neon.id,
                            class: "pl-3"
                          }, [
                            createTextVNode(" - "),
                            createVNode("span", null, toDisplayString(neon.color) + "(" + toDisplayString(neon.width) + ") / " + toDisplayString(neon.length) + "\u0441\u043C ", 1),
                            neon.width === "\u041F\u043E\u0434\u0441\u0432\u0435\u0442\u043A\u0430" ? (openBlock(), createBlock("span", { key: 0 }, toDisplayString(neon.elements) + "(\u044D\u043B).", 1)) : createCommentVNode("", true)
                          ]);
                        }), 128)),
                        createVNode("li", null, "\u042D\u043B\u0435\u043C\u0435\u043D\u0442\u044B: " + toDisplayString(unref(order).elements), 1),
                        createVNode("li", null, "\u041F\u043E\u0434\u0430\u0440\u043E\u043A: " + toDisplayString(unref(order).gift === true ? "\u0414\u0430" : "\u041D\u0435\u0442"), 1),
                        createVNode("li", null, [
                          createTextVNode(" \u0412\u044B\u043F\u043E\u043B\u043D\u0438\u043B: " + toDisplayString((_g = unref(order).master) == null ? void 0 : _g.fullName) + " ", 1),
                          createVNode(_component_UiDropdownMenu, null, {
                            default: withCtx(() => [
                              createVNode(_component_UiDropdownMenuTrigger, { "as-child": "" }, {
                                default: withCtx(() => [
                                  createVNode(_component_UiButton, {
                                    size: "icon",
                                    class: "h-6 w-6"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_Icon, {
                                        name: "mingcute:edit-line",
                                        color: "white",
                                        size: "20px"
                                      })
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode(_component_UiDropdownMenuContent, null, {
                                default: withCtx(() => [
                                  createVNode(_component_UiDropdownMenuLabel, { class: "text-center" }, {
                                    default: withCtx(() => [
                                      createTextVNode("\u041D\u0430\u0437\u043D\u0430\u0447\u0438\u0442\u044C ")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_UiSeparator),
                                  createVNode(_component_UiDropdownMenuRadioGroup, {
                                    modelValue: unref(master).fullName,
                                    "onUpdate:modelValue": ($event) => unref(master).fullName = $event
                                  }, {
                                    default: withCtx(() => [
                                      (openBlock(true), createBlock(Fragment, null, renderList(_ctx.workers, (worker) => {
                                        return openBlock(), createBlock(_component_UiDropdownMenuRadioItem, {
                                          key: worker.id,
                                          value: worker.fullName,
                                          onClick: ($event) => setMaster(unref(order).id, worker.id)
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(worker.fullName), 1)
                                          ]),
                                          _: 2
                                        }, 1032, ["value", "onClick"]);
                                      }), 128))
                                    ]),
                                    _: 1
                                  }, 8, ["modelValue", "onUpdate:modelValue"])
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })
                        ])
                      ])
                    ]),
                    createVNode("div", { class: "gap-3 flex-1 border p-2 rounded-md" }, [
                      createVNode("div", { class: "font-semibold pb-2" }, "\u0417\u0430\u0434\u0430\u043D\u0438\u0435 \u043D\u0430 \u0443\u043F\u0430\u043A\u043E\u0432\u043A\u0443"),
                      createVNode("ul", { class: "gap-1 text-gray-600" }, [
                        createVNode("li", { class: "" }, "\u0422\u0438\u043F \u0431\u043B\u043E\u043A\u0430: " + toDisplayString(unref(order).adapter), 1),
                        createVNode("li", { class: "" }, [
                          createTextVNode(" \u041F\u0440\u043E\u0432\u043E\u0434 \u043E\u0442 \u0431\u043B\u043E\u043A\u0430: "),
                          createVNode("span", null, toDisplayString(unref(order).plug), 1)
                        ]),
                        createVNode("li", { class: "" }, "\u041A\u0440\u0435\u043F\u043B\u0435\u043D\u0438\u044F: " + toDisplayString(unref(order).fitting), 1),
                        createVNode("li", { class: "" }, "\u0414\u0438\u043C\u043C\u0435\u0440: " + toDisplayString(unref(order).dimmer === true ? "\u0414\u0430" : "\u041D\u0435\u0442"), 1),
                        createVNode("li", { class: "" }, " \u041F\u043E\u0434\u0430\u0440\u043E\u0447\u043D\u0430\u044F \u0443\u043F\u0430\u043A\u043E\u0432\u043A\u0430: " + toDisplayString(unref(order).giftPack === true ? "\u0414\u0430" : "\u041D\u0435\u0442"), 1),
                        createVNode("li", null, "\u041F\u043E\u0434\u0430\u0440\u043E\u043A: " + toDisplayString(unref(order).gift === true ? "\u0414\u0430" : "\u041D\u0435\u0442"), 1),
                        createVNode("li", null, [
                          createTextVNode(" \u0412\u044B\u043F\u043E\u043B\u043D\u0438\u043B: " + toDisplayString((_h = unref(order).packer) == null ? void 0 : _h.fullName) + " ", 1),
                          createVNode(_component_UiDropdownMenu, null, {
                            default: withCtx(() => [
                              createVNode(_component_UiDropdownMenuTrigger, { "as-child": "" }, {
                                default: withCtx(() => [
                                  createVNode(_component_UiButton, {
                                    size: "icon",
                                    class: "h-6 w-6"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_Icon, {
                                        name: "mingcute:edit-line",
                                        color: "white",
                                        size: "20px"
                                      })
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode(_component_UiDropdownMenuContent, null, {
                                default: withCtx(() => [
                                  createVNode(_component_UiDropdownMenuLabel, { class: "text-center" }, {
                                    default: withCtx(() => [
                                      createTextVNode("\u041D\u0430\u0437\u043D\u0430\u0447\u0438\u0442\u044C ")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_UiSeparator),
                                  createVNode(_component_UiDropdownMenuRadioGroup, {
                                    modelValue: unref(packer).fullName,
                                    "onUpdate:modelValue": ($event) => unref(packer).fullName = $event
                                  }, {
                                    default: withCtx(() => [
                                      (openBlock(true), createBlock(Fragment, null, renderList(_ctx.workers, (worker) => {
                                        return openBlock(), createBlock(_component_UiDropdownMenuRadioItem, {
                                          key: worker.id,
                                          value: worker.fullName,
                                          onClick: ($event) => setPacker(unref(order).id, worker.id)
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(worker.fullName), 1)
                                          ]),
                                          _: 2
                                        }, 1032, ["value", "onClick"]);
                                      }), 128))
                                    ]),
                                    _: 1
                                  }, 8, ["modelValue", "onUpdate:modelValue"])
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })
                        ])
                      ])
                    ]),
                    unref(order).description ? (openBlock(), createBlock("div", {
                      key: 0,
                      class: "gap-3 flex-1 border p-2 rounded-md"
                    }, [
                      createVNode("div", { class: "font-semibold pb-2" }, "\u0414\u043E\u043F. \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F"),
                      createVNode("div", { class: "text-gray-600 pb-2" }, toDisplayString(unref(order).description), 1)
                    ])) : createCommentVNode("", true)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UiCardFooter, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="w-full flex justify-between mt-3"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_MyOrdersOrderFormModal, {
                    order: unref(order),
                    onOrderEdited: getOrder
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_UiButton, {
                    onClick: () => deleteOrder(unref(order).id)
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_Icon, {
                          name: "mi:delete",
                          color: "white",
                          size: "25px"
                        }, null, _parent4, _scopeId3));
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
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("div", { class: "w-full flex justify-between mt-3" }, [
                      createVNode(_component_MyOrdersOrderFormModal, {
                        order: unref(order),
                        onOrderEdited: getOrder
                      }, null, 8, ["order"]),
                      createVNode(_component_UiButton, {
                        onClick: () => deleteOrder(unref(order).id)
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_Icon, {
                            name: "mi:delete",
                            color: "white",
                            size: "25px"
                          })
                        ]),
                        _: 1
                      }, 8, ["onClick"])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UiCardHeader, { class: "bg-slate-50 p-2 pl-4" }, {
                default: withCtx(() => [
                  createVNode(_component_UiCardTitle, null, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(unref(order).title), 1)
                    ]),
                    _: 1
                  }),
                  createVNode(_component_UiCardDescription, { class: "flex items-center gap-2" }, {
                    default: withCtx(() => {
                      var _a;
                      return [
                        createTextVNode("\u0421\u0442\u0430\u0442\u0443\u0441: " + toDisplayString(((_a = unref(order).stage) == null ? void 0 : _a.title) || "\u0412\u044B\u0433\u0440\u0443\u0437\u043A\u0430") + " ", 1),
                        createVNode(_component_UiDropdownMenu, null, {
                          default: withCtx(() => [
                            createVNode(_component_UiDropdownMenuTrigger, { "as-child": "" }, {
                              default: withCtx(() => [
                                createVNode(_component_UiButton, {
                                  size: "icon",
                                  class: "h-6 w-6"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_Icon, {
                                      name: "mdi:skew-more",
                                      color: "white",
                                      size: "20px"
                                    })
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }),
                            createVNode(_component_UiDropdownMenuContent, null, {
                              default: withCtx(() => [
                                createVNode(_component_UiDropdownMenuLabel, { class: "text-center" }, {
                                  default: withCtx(() => [
                                    createTextVNode("\u041F\u0435\u0440\u0435\u043C\u0435\u0441\u0442\u0438\u0442\u044C ")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_UiSeparator),
                                createVNode(_component_UiDropdownMenuRadioGroup, {
                                  modelValue: unref(order).stage.title,
                                  "onUpdate:modelValue": ($event) => unref(order).stage.title = $event
                                }, {
                                  default: withCtx(() => [
                                    (openBlock(true), createBlock(Fragment, null, renderList(_ctx.stages, (stage) => {
                                      return openBlock(), createBlock(_component_UiDropdownMenuRadioItem, {
                                        key: stage.id,
                                        value: stage.title,
                                        onClick: ($event) => changeStage(unref(order).id, stage.id)
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(stage.title), 1)
                                        ]),
                                        _: 2
                                      }, 1032, ["value", "onClick"]);
                                    }), 128))
                                  ]),
                                  _: 1
                                }, 8, ["modelValue", "onUpdate:modelValue"])
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        })
                      ];
                    }),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(_component_UiCardContent, { class: "flex gap-2 p-2 flex-col" }, {
                default: withCtx(() => {
                  var _a, _b, _c, _d;
                  return [
                    createVNode("div", { class: "gap-3 flex-1 border p-2 rounded-md" }, [
                      createVNode("div", { class: "font-semibold pb-2" }, "\u0417\u0430\u0434\u0430\u043D\u0438\u0435 \u043D\u0430 \u0444\u0440\u0435\u0437\u0435\u0440\u043E\u0432\u043A\u0443"),
                      createVNode("ul", { class: "text-gray-600" }, [
                        createVNode("li", { class: "" }, "\u041C\u0430\u0442\u0435\u0440\u0438\u0430\u043B: " + toDisplayString(unref(order).material), 1),
                        createVNode("li", { class: "" }, " \u0420\u0430\u0437\u043C\u0435\u0440\u044B: " + toDisplayString(unref(order).boardHeight) + "/" + toDisplayString(unref(order).boardWidth) + " \u0441\u043C ", 1),
                        createVNode("li", { class: "" }, "\u041E\u0442\u0432\u0435\u0440\u0441\u0442\u0438\u044F: " + toDisplayString(unref(order).holeType), 1),
                        createVNode("li", { class: "" }, "\u041F\u043E\u0434\u0441\u0442\u0430\u0432\u043A\u0430: " + toDisplayString(unref(order).stand === true ? "\u0414\u0430" : "\u041D\u0435\u0442"), 1),
                        createVNode("li", null, [
                          createTextVNode(" \u0412\u044B\u043F\u043E\u043B\u043D\u0438\u043B: " + toDisplayString((_a = unref(order).frezer) == null ? void 0 : _a.fullName) + " ", 1),
                          createVNode(_component_UiDropdownMenu, null, {
                            default: withCtx(() => [
                              createVNode(_component_UiDropdownMenuTrigger, { "as-child": "" }, {
                                default: withCtx(() => [
                                  createVNode(_component_UiButton, {
                                    size: "icon",
                                    class: "h-6 w-6"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_Icon, {
                                        name: "mingcute:edit-line",
                                        color: "white",
                                        size: "20px"
                                      })
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode(_component_UiDropdownMenuContent, null, {
                                default: withCtx(() => [
                                  createVNode(_component_UiDropdownMenuLabel, { class: "text-center" }, {
                                    default: withCtx(() => [
                                      createTextVNode("\u041D\u0430\u0437\u043D\u0430\u0447\u0438\u0442\u044C ")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_UiSeparator),
                                  createVNode(_component_UiDropdownMenuRadioGroup, {
                                    modelValue: unref(frezer).fullName,
                                    "onUpdate:modelValue": ($event) => unref(frezer).fullName = $event
                                  }, {
                                    default: withCtx(() => [
                                      (openBlock(true), createBlock(Fragment, null, renderList(_ctx.workers, (worker) => {
                                        return openBlock(), createBlock(_component_UiDropdownMenuRadioItem, {
                                          key: worker.id,
                                          value: worker.fullName,
                                          onClick: ($event) => setFrezer(unref(order).id, worker.id)
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(worker.fullName) + " - " + toDisplayString(worker.role.fullName), 1)
                                          ]),
                                          _: 2
                                        }, 1032, ["value", "onClick"]);
                                      }), 128))
                                    ]),
                                    _: 1
                                  }, 8, ["modelValue", "onUpdate:modelValue"])
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })
                        ])
                      ])
                    ]),
                    createVNode("div", { class: "gap-3 flex-1 border p-2 rounded-md" }, [
                      createVNode("div", { class: "font-semibold pb-2" }, "\u0417\u0430\u0434\u0430\u043D\u0438\u0435 \u043D\u0430 \u043F\u043B\u0435\u043D\u043A\u0443"),
                      createVNode("ul", { class: "text-gray-600" }, [
                        createVNode("li", { class: "" }, "\u041F\u043B\u0435\u043D\u043A\u0430: " + toDisplayString(unref(order).laminate || "\u041D\u0435\u0442"), 1),
                        createVNode("li", { class: "" }, "\u0410\u043A\u0440\u0438\u043B: " + toDisplayString(unref(order).acrylic || "\u041D\u0435\u0442"), 1),
                        createVNode("li", { class: "" }, "\u041F\u0435\u0447\u0430\u0442\u044C: " + toDisplayString(unref(order).print === true ? "\u0414\u0430" : "\u041D\u0435\u0442"), 1),
                        unref(order).print ? (openBlock(), createBlock("li", {
                          key: 0,
                          class: ""
                        }, " \u041A\u0430\u0447\u0435\u0441\u0442\u0432\u043E: " + toDisplayString(unref(order).printQuality === true ? "\u0421\u043E\u0433\u043B\u0430\u0441\u043E\u0432\u0430\u043D\u043E" : "\u041D\u0435 \u0441\u043E\u0433\u043B\u0430\u0441\u043E\u0432\u0430\u043D\u043E"), 1)) : createCommentVNode("", true),
                        createVNode("li", null, [
                          createTextVNode(" \u0412\u044B\u043F\u043E\u043B\u043D\u0438\u043B: " + toDisplayString((_b = unref(order).laminater) == null ? void 0 : _b.fullName) + " ", 1),
                          createVNode(_component_UiDropdownMenu, null, {
                            default: withCtx(() => [
                              createVNode(_component_UiDropdownMenuTrigger, { "as-child": "" }, {
                                default: withCtx(() => [
                                  createVNode(_component_UiButton, {
                                    size: "icon",
                                    class: "h-6 w-6"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_Icon, {
                                        name: "mingcute:edit-line",
                                        color: "white",
                                        size: "20px"
                                      })
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode(_component_UiDropdownMenuContent, null, {
                                default: withCtx(() => [
                                  createVNode(_component_UiDropdownMenuLabel, { class: "text-center" }, {
                                    default: withCtx(() => [
                                      createTextVNode("\u041D\u0430\u0437\u043D\u0430\u0447\u0438\u0442\u044C ")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_UiSeparator),
                                  createVNode(_component_UiDropdownMenuRadioGroup, {
                                    modelValue: unref(laminater).fullName,
                                    "onUpdate:modelValue": ($event) => unref(laminater).fullName = $event
                                  }, {
                                    default: withCtx(() => [
                                      (openBlock(true), createBlock(Fragment, null, renderList(_ctx.workers, (worker) => {
                                        return openBlock(), createBlock(_component_UiDropdownMenuRadioItem, {
                                          key: worker.id,
                                          value: worker.fullName,
                                          onClick: ($event) => setLaminater(unref(order).id, worker.id)
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(worker.fullName), 1)
                                          ]),
                                          _: 2
                                        }, 1032, ["value", "onClick"]);
                                      }), 128))
                                    ]),
                                    _: 1
                                  }, 8, ["modelValue", "onUpdate:modelValue"])
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })
                        ])
                      ])
                    ]),
                    createVNode("div", { class: "gap-3 flex-1 border p-2 rounded-md" }, [
                      createVNode("div", { class: "font-semibold pb-2" }, "\u0417\u0430\u0434\u0430\u043D\u0438\u0435 \u043D\u0430 \u0441\u0431\u043E\u0440\u043A\u0443"),
                      createVNode("ul", { class: "text-gray-600" }, [
                        createVNode("li", { class: "" }, "\u041D\u0430\u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435: " + toDisplayString(unref(order).type), 1),
                        createVNode("li", { class: "" }, "\u041F\u0440\u043E\u0432\u043E\u0434 \u043E\u0442 \u0432\u044B\u0432\u0435\u0441\u043A\u0438(\u0430\u043A\u0443\u0441\u0442\u0438\u043A\u0430): " + toDisplayString(unref(order).wireLength), 1),
                        createVNode("li", { class: "" }, "\u041D\u0435\u043E\u043D:"),
                        (openBlock(true), createBlock(Fragment, null, renderList(unref(order).neons, (neon) => {
                          return openBlock(), createBlock("li", {
                            key: neon.id,
                            class: "pl-3"
                          }, [
                            createTextVNode(" - "),
                            createVNode("span", null, toDisplayString(neon.color) + "(" + toDisplayString(neon.width) + ") / " + toDisplayString(neon.length) + "\u0441\u043C ", 1),
                            neon.width === "\u041F\u043E\u0434\u0441\u0432\u0435\u0442\u043A\u0430" ? (openBlock(), createBlock("span", { key: 0 }, toDisplayString(neon.elements) + "(\u044D\u043B).", 1)) : createCommentVNode("", true)
                          ]);
                        }), 128)),
                        createVNode("li", null, "\u042D\u043B\u0435\u043C\u0435\u043D\u0442\u044B: " + toDisplayString(unref(order).elements), 1),
                        createVNode("li", null, "\u041F\u043E\u0434\u0430\u0440\u043E\u043A: " + toDisplayString(unref(order).gift === true ? "\u0414\u0430" : "\u041D\u0435\u0442"), 1),
                        createVNode("li", null, [
                          createTextVNode(" \u0412\u044B\u043F\u043E\u043B\u043D\u0438\u043B: " + toDisplayString((_c = unref(order).master) == null ? void 0 : _c.fullName) + " ", 1),
                          createVNode(_component_UiDropdownMenu, null, {
                            default: withCtx(() => [
                              createVNode(_component_UiDropdownMenuTrigger, { "as-child": "" }, {
                                default: withCtx(() => [
                                  createVNode(_component_UiButton, {
                                    size: "icon",
                                    class: "h-6 w-6"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_Icon, {
                                        name: "mingcute:edit-line",
                                        color: "white",
                                        size: "20px"
                                      })
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode(_component_UiDropdownMenuContent, null, {
                                default: withCtx(() => [
                                  createVNode(_component_UiDropdownMenuLabel, { class: "text-center" }, {
                                    default: withCtx(() => [
                                      createTextVNode("\u041D\u0430\u0437\u043D\u0430\u0447\u0438\u0442\u044C ")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_UiSeparator),
                                  createVNode(_component_UiDropdownMenuRadioGroup, {
                                    modelValue: unref(master).fullName,
                                    "onUpdate:modelValue": ($event) => unref(master).fullName = $event
                                  }, {
                                    default: withCtx(() => [
                                      (openBlock(true), createBlock(Fragment, null, renderList(_ctx.workers, (worker) => {
                                        return openBlock(), createBlock(_component_UiDropdownMenuRadioItem, {
                                          key: worker.id,
                                          value: worker.fullName,
                                          onClick: ($event) => setMaster(unref(order).id, worker.id)
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(worker.fullName), 1)
                                          ]),
                                          _: 2
                                        }, 1032, ["value", "onClick"]);
                                      }), 128))
                                    ]),
                                    _: 1
                                  }, 8, ["modelValue", "onUpdate:modelValue"])
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })
                        ])
                      ])
                    ]),
                    createVNode("div", { class: "gap-3 flex-1 border p-2 rounded-md" }, [
                      createVNode("div", { class: "font-semibold pb-2" }, "\u0417\u0430\u0434\u0430\u043D\u0438\u0435 \u043D\u0430 \u0443\u043F\u0430\u043A\u043E\u0432\u043A\u0443"),
                      createVNode("ul", { class: "gap-1 text-gray-600" }, [
                        createVNode("li", { class: "" }, "\u0422\u0438\u043F \u0431\u043B\u043E\u043A\u0430: " + toDisplayString(unref(order).adapter), 1),
                        createVNode("li", { class: "" }, [
                          createTextVNode(" \u041F\u0440\u043E\u0432\u043E\u0434 \u043E\u0442 \u0431\u043B\u043E\u043A\u0430: "),
                          createVNode("span", null, toDisplayString(unref(order).plug), 1)
                        ]),
                        createVNode("li", { class: "" }, "\u041A\u0440\u0435\u043F\u043B\u0435\u043D\u0438\u044F: " + toDisplayString(unref(order).fitting), 1),
                        createVNode("li", { class: "" }, "\u0414\u0438\u043C\u043C\u0435\u0440: " + toDisplayString(unref(order).dimmer === true ? "\u0414\u0430" : "\u041D\u0435\u0442"), 1),
                        createVNode("li", { class: "" }, " \u041F\u043E\u0434\u0430\u0440\u043E\u0447\u043D\u0430\u044F \u0443\u043F\u0430\u043A\u043E\u0432\u043A\u0430: " + toDisplayString(unref(order).giftPack === true ? "\u0414\u0430" : "\u041D\u0435\u0442"), 1),
                        createVNode("li", null, "\u041F\u043E\u0434\u0430\u0440\u043E\u043A: " + toDisplayString(unref(order).gift === true ? "\u0414\u0430" : "\u041D\u0435\u0442"), 1),
                        createVNode("li", null, [
                          createTextVNode(" \u0412\u044B\u043F\u043E\u043B\u043D\u0438\u043B: " + toDisplayString((_d = unref(order).packer) == null ? void 0 : _d.fullName) + " ", 1),
                          createVNode(_component_UiDropdownMenu, null, {
                            default: withCtx(() => [
                              createVNode(_component_UiDropdownMenuTrigger, { "as-child": "" }, {
                                default: withCtx(() => [
                                  createVNode(_component_UiButton, {
                                    size: "icon",
                                    class: "h-6 w-6"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_Icon, {
                                        name: "mingcute:edit-line",
                                        color: "white",
                                        size: "20px"
                                      })
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode(_component_UiDropdownMenuContent, null, {
                                default: withCtx(() => [
                                  createVNode(_component_UiDropdownMenuLabel, { class: "text-center" }, {
                                    default: withCtx(() => [
                                      createTextVNode("\u041D\u0430\u0437\u043D\u0430\u0447\u0438\u0442\u044C ")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_UiSeparator),
                                  createVNode(_component_UiDropdownMenuRadioGroup, {
                                    modelValue: unref(packer).fullName,
                                    "onUpdate:modelValue": ($event) => unref(packer).fullName = $event
                                  }, {
                                    default: withCtx(() => [
                                      (openBlock(true), createBlock(Fragment, null, renderList(_ctx.workers, (worker) => {
                                        return openBlock(), createBlock(_component_UiDropdownMenuRadioItem, {
                                          key: worker.id,
                                          value: worker.fullName,
                                          onClick: ($event) => setPacker(unref(order).id, worker.id)
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(worker.fullName), 1)
                                          ]),
                                          _: 2
                                        }, 1032, ["value", "onClick"]);
                                      }), 128))
                                    ]),
                                    _: 1
                                  }, 8, ["modelValue", "onUpdate:modelValue"])
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })
                        ])
                      ])
                    ]),
                    unref(order).description ? (openBlock(), createBlock("div", {
                      key: 0,
                      class: "gap-3 flex-1 border p-2 rounded-md"
                    }, [
                      createVNode("div", { class: "font-semibold pb-2" }, "\u0414\u043E\u043F. \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F"),
                      createVNode("div", { class: "text-gray-600 pb-2" }, toDisplayString(unref(order).description), 1)
                    ])) : createCommentVNode("", true)
                  ];
                }),
                _: 1
              }),
              createVNode(_component_UiCardFooter, null, {
                default: withCtx(() => [
                  createVNode("div", { class: "w-full flex justify-between mt-3" }, [
                    createVNode(_component_MyOrdersOrderFormModal, {
                      order: unref(order),
                      onOrderEdited: getOrder
                    }, null, 8, ["order"]),
                    createVNode(_component_UiButton, {
                      onClick: () => deleteOrder(unref(order).id)
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_Icon, {
                          name: "mi:delete",
                          color: "white",
                          size: "25px"
                        })
                      ]),
                      _: 1
                    }, 8, ["onClick"])
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
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/my/orders/OrderCard.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "[id] copy",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { $useApi } = useNuxtApp();
    const route = useRoute();
    const dealId = route.params.id;
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
      },
      deliveries: [
        {
          id: 0,
          method: "string",
          type: "string",
          description: "string",
          track: "string",
          status: "string",
          price: 0
        }
      ]
    };
    const currentDeal = ref(defaultDeal);
    const dealDeliveries = ref(defaultDeal.deliveries);
    const dealOrders = ref(defaultDeal.orders);
    const stages = ref([]);
    const workersList = ref([]);
    const { data: stagesData } = ([__temp, __restore] = withAsyncContext(() => $useApi.get("/stages")), __temp = await __temp, __restore(), __temp);
    const { data: workers } = ([__temp, __restore] = withAsyncContext(() => $useApi.get("production/workers")), __temp = await __temp, __restore(), __temp);
    stages.value = stagesData || [];
    workersList.value = workers || [];
    const files = ref([]);
    const getDeal = async () => {
      const { data: deal } = await $useApi.get(`production/deals/${dealId}`);
      currentDeal.value = deal;
      dealDeliveries.value = deal.deliveries || [];
      dealOrders.value = deal.orders || [];
      const { data: preorder } = await $useApi.get("kaiten/card/" + deal.card_id);
      console.log(preorder);
      if (preorder !== "Nope") {
        currentDeal.value.preorder = preorder;
      }
      files.value = deal.files;
      useHead({
        title: currentDeal.value.title + " | Easy CRM" || "Easy CRM"
      });
      return;
    };
    getDeal();
    const dealUpdated = () => {
      console.log("deal-updated");
      getDeal();
    };
    const getFiles = async () => {
      const { data } = await $useApi.get(`/deals/${dealId}/files`);
      console.log(data.files);
      files.value = data.files || [];
      return;
    };
    [__temp, __restore] = withAsyncContext(() => getFiles()), await __temp, __restore();
    const getDeliveries = async () => {
      const { data } = await $useApi.get(`/deals/${dealId}/deliveries`);
      dealDeliveries.value = data.deliveries || [];
      return;
    };
    const getOrders = async () => {
      const { data } = await $useApi.get(`/deals/${dealId}/orders`);
      dealOrders.value = data.orders || [];
      return;
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_LayoutSidebar = _sfc_main$2;
      const _component_UiCard = _sfc_main$3;
      const _component_UiCardHeader = _sfc_main$1$1;
      const _component_UiCardTitle = _sfc_main$4;
      const _component_UiCardDescription = _sfc_main$5;
      const _component_UiCardContent = _sfc_main$6;
      const _component_NuxtImg = _sfc_main$7;
      const _component_UiTabs = _sfc_main$2$1;
      const _component_UiTabsList = _sfc_main$8;
      const _component_UiTabsTrigger = _sfc_main$1$2;
      const _component_UiTabsContent = _sfc_main$9;
      const _component_MyOrdersOrderFormModal = _sfc_main$a;
      const _component_MyOrdersOrderCard = _sfc_main$1;
      const _component_MyDeliveriesCreateModal = _sfc_main$b;
      const _component_MyDeliveriesList = _sfc_main$c;
      const _component_MyOrdersUploadFileForm = _sfc_main$d;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex relative" }, _attrs))}><div class="w-[50px] fixed">`);
      _push(ssrRenderComponent(_component_LayoutSidebar, null, null, _parent));
      _push(`</div><div class="p-3 w-full ml-[50px] flex justify-center gap-3"><div class="flex flex-col max-w-[720px] gap-3">`);
      _push(ssrRenderComponent(_component_UiCard, { class: "overflow-hidden" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UiCardHeader, { class: "bg-slate-50 p-3 pt-2" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UiCardTitle, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`${ssrInterpolate(unref(currentDeal).title)}`);
                      } else {
                        return [
                          createTextVNode(toDisplayString(unref(currentDeal).title), 1)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_UiCardDescription, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` \u0413\u043E\u0442\u043E\u0432\u043D\u043E\u0441\u0442\u044C: ${ssrInterpolate(unref(currentDeal).deadline)}<br${_scopeId3}> \u0421\u0442\u0430\u0442\u0443\u0441: ${ssrInterpolate(unref(currentDeal).status)}`);
                      } else {
                        return [
                          createTextVNode(" \u0413\u043E\u0442\u043E\u0432\u043D\u043E\u0441\u0442\u044C: " + toDisplayString(unref(currentDeal).deadline), 1),
                          createVNode("br"),
                          createTextVNode(" \u0421\u0442\u0430\u0442\u0443\u0441: " + toDisplayString(unref(currentDeal).status), 1)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UiCardTitle, null, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(unref(currentDeal).title), 1)
                      ]),
                      _: 1
                    }),
                    createVNode(_component_UiCardDescription, null, {
                      default: withCtx(() => [
                        createTextVNode(" \u0413\u043E\u0442\u043E\u0432\u043D\u043E\u0441\u0442\u044C: " + toDisplayString(unref(currentDeal).deadline), 1),
                        createVNode("br"),
                        createTextVNode(" \u0421\u0442\u0430\u0442\u0443\u0441: " + toDisplayString(unref(currentDeal).status), 1)
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            if (unref(currentDeal).preorder) {
              _push2(ssrRenderComponent(_component_UiCardContent, { class: "p-2" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  var _a, _b;
                  if (_push3) {
                    _push3(`<div class="flex flex-col w-full"${_scopeId2}><div class="mr-3 rounded overflow-hidden w-full"${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_NuxtImg, {
                      src: unref(currentDeal).preorder.preview,
                      alt: "Preview",
                      class: "preview-image w-full"
                    }, null, _parent3, _scopeId2));
                    _push3(`</div><div class="flex flex-col"${_scopeId2}><a class="underline decoration-solid cursor-pointer text-blue-600"${ssrRenderAttr("href", (_a = unref(currentDeal).preorder) == null ? void 0 : _a.card_link)} target="_blank"${_scopeId2}>\u0421\u0441\u044B\u043B\u043A\u0430 \u043D\u0430 \u043A\u0430\u0440\u0442\u043E\u0447\u043A\u0443</a><a class="underline decoration-solid cursor-pointer text-blue-600"${ssrRenderAttr(
                      "href",
                      unref(currentDeal).preorder.maket + "?name=" + unref(currentDeal).title + ".cdr&dl=true"
                    )}${_scopeId2}>\u041C\u0430\u043A\u0435\u0442</a></div></div>`);
                  } else {
                    return [
                      createVNode("div", { class: "flex flex-col w-full" }, [
                        createVNode("div", { class: "mr-3 rounded overflow-hidden w-full" }, [
                          createVNode(_component_NuxtImg, {
                            src: unref(currentDeal).preorder.preview,
                            alt: "Preview",
                            class: "preview-image w-full"
                          }, null, 8, ["src"])
                        ]),
                        createVNode("div", { class: "flex flex-col" }, [
                          createVNode("a", {
                            class: "underline decoration-solid cursor-pointer text-blue-600",
                            href: (_b = unref(currentDeal).preorder) == null ? void 0 : _b.card_link,
                            target: "_blank"
                          }, "\u0421\u0441\u044B\u043B\u043A\u0430 \u043D\u0430 \u043A\u0430\u0440\u0442\u043E\u0447\u043A\u0443", 8, ["href"]),
                          createVNode("a", {
                            class: "underline decoration-solid cursor-pointer text-blue-600",
                            href: unref(currentDeal).preorder.maket + "?name=" + unref(currentDeal).title + ".cdr&dl=true"
                          }, "\u041C\u0430\u043A\u0435\u0442", 8, ["href"])
                        ])
                      ])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              createVNode(_component_UiCardHeader, { class: "bg-slate-50 p-3 pt-2" }, {
                default: withCtx(() => [
                  createVNode(_component_UiCardTitle, null, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(unref(currentDeal).title), 1)
                    ]),
                    _: 1
                  }),
                  createVNode(_component_UiCardDescription, null, {
                    default: withCtx(() => [
                      createTextVNode(" \u0413\u043E\u0442\u043E\u0432\u043D\u043E\u0441\u0442\u044C: " + toDisplayString(unref(currentDeal).deadline), 1),
                      createVNode("br"),
                      createTextVNode(" \u0421\u0442\u0430\u0442\u0443\u0441: " + toDisplayString(unref(currentDeal).status), 1)
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              unref(currentDeal).preorder ? (openBlock(), createBlock(_component_UiCardContent, {
                key: 0,
                class: "p-2"
              }, {
                default: withCtx(() => {
                  var _a;
                  return [
                    createVNode("div", { class: "flex flex-col w-full" }, [
                      createVNode("div", { class: "mr-3 rounded overflow-hidden w-full" }, [
                        createVNode(_component_NuxtImg, {
                          src: unref(currentDeal).preorder.preview,
                          alt: "Preview",
                          class: "preview-image w-full"
                        }, null, 8, ["src"])
                      ]),
                      createVNode("div", { class: "flex flex-col" }, [
                        createVNode("a", {
                          class: "underline decoration-solid cursor-pointer text-blue-600",
                          href: (_a = unref(currentDeal).preorder) == null ? void 0 : _a.card_link,
                          target: "_blank"
                        }, "\u0421\u0441\u044B\u043B\u043A\u0430 \u043D\u0430 \u043A\u0430\u0440\u0442\u043E\u0447\u043A\u0443", 8, ["href"]),
                        createVNode("a", {
                          class: "underline decoration-solid cursor-pointer text-blue-600",
                          href: unref(currentDeal).preorder.maket + "?name=" + unref(currentDeal).title + ".cdr&dl=true"
                        }, "\u041C\u0430\u043A\u0435\u0442", 8, ["href"])
                      ])
                    ])
                  ];
                }),
                _: 1
              })) : createCommentVNode("", true)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_UiTabs, {
        "default-value": "\u0417\u0430\u043A\u0430\u0437\u044B",
        class: ""
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UiTabsList, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UiTabsTrigger, { value: "\u0417\u0430\u043A\u0430\u0437\u044B" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`\u0417\u0430\u043A\u0430\u0437\u044B `);
                      } else {
                        return [
                          createTextVNode("\u0417\u0430\u043A\u0430\u0437\u044B ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_UiTabsTrigger, { value: "\u0414\u043E\u0441\u0442\u0430\u0432\u043A\u0438" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`\u0414\u043E\u0441\u0442\u0430\u0432\u043A\u0438 `);
                      } else {
                        return [
                          createTextVNode("\u0414\u043E\u0441\u0442\u0430\u0432\u043A\u0438 ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_UiTabsTrigger, { value: "\u0424\u0430\u0439\u043B\u044B" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`\u0424\u0430\u0439\u043B\u044B `);
                      } else {
                        return [
                          createTextVNode("\u0424\u0430\u0439\u043B\u044B ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UiTabsTrigger, { value: "\u0417\u0430\u043A\u0430\u0437\u044B" }, {
                      default: withCtx(() => [
                        createTextVNode("\u0417\u0430\u043A\u0430\u0437\u044B ")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_UiTabsTrigger, { value: "\u0414\u043E\u0441\u0442\u0430\u0432\u043A\u0438" }, {
                      default: withCtx(() => [
                        createTextVNode("\u0414\u043E\u0441\u0442\u0430\u0432\u043A\u0438 ")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_UiTabsTrigger, { value: "\u0424\u0430\u0439\u043B\u044B" }, {
                      default: withCtx(() => [
                        createTextVNode("\u0424\u0430\u0439\u043B\u044B ")
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UiTabsContent, { value: "\u0417\u0430\u043A\u0430\u0437\u044B" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UiCard, { class: "overflow-hidden pb-6" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      var _a, _b;
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_UiCardHeader, { class: "p-2 pb-2 bg-slate-50 flex" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_UiCardTitle, { class: "flex items-center" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_MyOrdersOrderFormModal, {
                                      deal: unref(currentDeal),
                                      class: "mr-3 justify-between",
                                      onOrderCreated: dealUpdated
                                    }, null, _parent6, _scopeId5));
                                    _push6(` \u0421\u043F\u0438\u0441\u043E\u043A \u0437\u0430\u043A\u0430\u0437\u043E\u0432 `);
                                  } else {
                                    return [
                                      createVNode(_component_MyOrdersOrderFormModal, {
                                        deal: unref(currentDeal),
                                        class: "mr-3 justify-between",
                                        onOrderCreated: dealUpdated
                                      }, null, 8, ["deal"]),
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
                                    createVNode(_component_MyOrdersOrderFormModal, {
                                      deal: unref(currentDeal),
                                      class: "mr-3 justify-between",
                                      onOrderCreated: dealUpdated
                                    }, null, 8, ["deal"]),
                                    createTextVNode(" \u0421\u043F\u0438\u0441\u043E\u043A \u0437\u0430\u043A\u0430\u0437\u043E\u0432 ")
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        if ((_a = unref(dealOrders)) == null ? void 0 : _a.length) {
                          _push4(ssrRenderComponent(_component_UiCardContent, { class: "p-2 h-full" }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`<div class="w-full h-full flex flex-col gap-2"${_scopeId4}><!--[-->`);
                                ssrRenderList(unref(dealOrders), (order) => {
                                  _push5(`<div${_scopeId4}>`);
                                  _push5(ssrRenderComponent(_component_MyOrdersOrderCard, {
                                    "current-order": order,
                                    stages: unref(stages),
                                    workers: unref(workers),
                                    onUpdateOrdersList: getOrders
                                  }, null, _parent5, _scopeId4));
                                  _push5(`</div>`);
                                });
                                _push5(`<!--]--></div>`);
                              } else {
                                return [
                                  createVNode("div", { class: "w-full h-full flex flex-col gap-2" }, [
                                    (openBlock(true), createBlock(Fragment, null, renderList(unref(dealOrders), (order) => {
                                      return openBlock(), createBlock("div", {
                                        key: order.id
                                      }, [
                                        createVNode(_component_MyOrdersOrderCard, {
                                          "current-order": order,
                                          stages: unref(stages),
                                          workers: unref(workers),
                                          onUpdateOrdersList: getOrders
                                        }, null, 8, ["current-order", "stages", "workers"])
                                      ]);
                                    }), 128))
                                  ])
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
                                  createVNode(_component_MyOrdersOrderFormModal, {
                                    deal: unref(currentDeal),
                                    class: "mr-3 justify-between",
                                    onOrderCreated: dealUpdated
                                  }, null, 8, ["deal"]),
                                  createTextVNode(" \u0421\u043F\u0438\u0441\u043E\u043A \u0437\u0430\u043A\u0430\u0437\u043E\u0432 ")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          ((_b = unref(dealOrders)) == null ? void 0 : _b.length) ? (openBlock(), createBlock(_component_UiCardContent, {
                            key: 0,
                            class: "p-2 h-full"
                          }, {
                            default: withCtx(() => [
                              createVNode("div", { class: "w-full h-full flex flex-col gap-2" }, [
                                (openBlock(true), createBlock(Fragment, null, renderList(unref(dealOrders), (order) => {
                                  return openBlock(), createBlock("div", {
                                    key: order.id
                                  }, [
                                    createVNode(_component_MyOrdersOrderCard, {
                                      "current-order": order,
                                      stages: unref(stages),
                                      workers: unref(workers),
                                      onUpdateOrdersList: getOrders
                                    }, null, 8, ["current-order", "stages", "workers"])
                                  ]);
                                }), 128))
                              ])
                            ]),
                            _: 1
                          })) : createCommentVNode("", true)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UiCard, { class: "overflow-hidden pb-6" }, {
                      default: withCtx(() => {
                        var _a;
                        return [
                          createVNode(_component_UiCardHeader, { class: "p-2 pb-2 bg-slate-50 flex" }, {
                            default: withCtx(() => [
                              createVNode(_component_UiCardTitle, { class: "flex items-center" }, {
                                default: withCtx(() => [
                                  createVNode(_component_MyOrdersOrderFormModal, {
                                    deal: unref(currentDeal),
                                    class: "mr-3 justify-between",
                                    onOrderCreated: dealUpdated
                                  }, null, 8, ["deal"]),
                                  createTextVNode(" \u0421\u043F\u0438\u0441\u043E\u043A \u0437\u0430\u043A\u0430\u0437\u043E\u0432 ")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          ((_a = unref(dealOrders)) == null ? void 0 : _a.length) ? (openBlock(), createBlock(_component_UiCardContent, {
                            key: 0,
                            class: "p-2 h-full"
                          }, {
                            default: withCtx(() => [
                              createVNode("div", { class: "w-full h-full flex flex-col gap-2" }, [
                                (openBlock(true), createBlock(Fragment, null, renderList(unref(dealOrders), (order) => {
                                  return openBlock(), createBlock("div", {
                                    key: order.id
                                  }, [
                                    createVNode(_component_MyOrdersOrderCard, {
                                      "current-order": order,
                                      stages: unref(stages),
                                      workers: unref(workers),
                                      onUpdateOrdersList: getOrders
                                    }, null, 8, ["current-order", "stages", "workers"])
                                  ]);
                                }), 128))
                              ])
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
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UiTabsContent, { value: "\u0414\u043E\u0441\u0442\u0430\u0432\u043A\u0438" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UiCard, { class: "overflow-hidden" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      var _a, _b;
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_UiCardHeader, { class: "p-2 pb-2 bg-slate-50 flex" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_UiCardTitle, { class: "flex items-center" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_MyDeliveriesCreateModal, {
                                      deal: unref(currentDeal),
                                      class: "mr-3",
                                      onDeliveryCreated: getDeliveries
                                    }, null, _parent6, _scopeId5));
                                    _push6(` \u0421\u043F\u0438\u0441\u043E\u043A \u0434\u043E\u0441\u0442\u0430\u0432\u043E\u043A `);
                                  } else {
                                    return [
                                      createVNode(_component_MyDeliveriesCreateModal, {
                                        deal: unref(currentDeal),
                                        class: "mr-3",
                                        onDeliveryCreated: getDeliveries
                                      }, null, 8, ["deal"]),
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
                                    createVNode(_component_MyDeliveriesCreateModal, {
                                      deal: unref(currentDeal),
                                      class: "mr-3",
                                      onDeliveryCreated: getDeliveries
                                    }, null, 8, ["deal"]),
                                    createTextVNode(" \u0421\u043F\u0438\u0441\u043E\u043A \u0434\u043E\u0441\u0442\u0430\u0432\u043E\u043A ")
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        if ((_a = unref(dealDeliveries)) == null ? void 0 : _a.length) {
                          _push4(ssrRenderComponent(_component_UiCardContent, { class: "p-2" }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(_component_MyDeliveriesList, {
                                  deliveries: unref(dealDeliveries),
                                  onDeliveryEdited: getDeliveries,
                                  onDeliveryDeleted: getDeliveries
                                }, null, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(_component_MyDeliveriesList, {
                                    deliveries: unref(dealDeliveries),
                                    onDeliveryEdited: getDeliveries,
                                    onDeliveryDeleted: getDeliveries
                                  }, null, 8, ["deliveries"])
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
                                  createVNode(_component_MyDeliveriesCreateModal, {
                                    deal: unref(currentDeal),
                                    class: "mr-3",
                                    onDeliveryCreated: getDeliveries
                                  }, null, 8, ["deal"]),
                                  createTextVNode(" \u0421\u043F\u0438\u0441\u043E\u043A \u0434\u043E\u0441\u0442\u0430\u0432\u043E\u043A ")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          ((_b = unref(dealDeliveries)) == null ? void 0 : _b.length) ? (openBlock(), createBlock(_component_UiCardContent, {
                            key: 0,
                            class: "p-2"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_MyDeliveriesList, {
                                deliveries: unref(dealDeliveries),
                                onDeliveryEdited: getDeliveries,
                                onDeliveryDeleted: getDeliveries
                              }, null, 8, ["deliveries"])
                            ]),
                            _: 1
                          })) : createCommentVNode("", true)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UiCard, { class: "overflow-hidden" }, {
                      default: withCtx(() => {
                        var _a;
                        return [
                          createVNode(_component_UiCardHeader, { class: "p-2 pb-2 bg-slate-50 flex" }, {
                            default: withCtx(() => [
                              createVNode(_component_UiCardTitle, { class: "flex items-center" }, {
                                default: withCtx(() => [
                                  createVNode(_component_MyDeliveriesCreateModal, {
                                    deal: unref(currentDeal),
                                    class: "mr-3",
                                    onDeliveryCreated: getDeliveries
                                  }, null, 8, ["deal"]),
                                  createTextVNode(" \u0421\u043F\u0438\u0441\u043E\u043A \u0434\u043E\u0441\u0442\u0430\u0432\u043E\u043A ")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          ((_a = unref(dealDeliveries)) == null ? void 0 : _a.length) ? (openBlock(), createBlock(_component_UiCardContent, {
                            key: 0,
                            class: "p-2"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_MyDeliveriesList, {
                                deliveries: unref(dealDeliveries),
                                onDeliveryEdited: getDeliveries,
                                onDeliveryDeleted: getDeliveries
                              }, null, 8, ["deliveries"])
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
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UiTabsContent, { value: "\u0424\u0430\u0439\u043B\u044B" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UiCard, { class: "overflow-hidden" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_UiCardHeader, { class: "p-2 pb-2 bg-slate-50 flex" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_UiCardTitle, { class: "flex items-center gap-3" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_MyOrdersUploadFileForm, {
                                      deal: unref(currentDeal),
                                      onFileUploaded: getFiles
                                    }, null, _parent6, _scopeId5));
                                    _push6(` \u0424\u0430\u0439\u043B\u044B `);
                                  } else {
                                    return [
                                      createVNode(_component_MyOrdersUploadFileForm, {
                                        deal: unref(currentDeal),
                                        onFileUploaded: getFiles
                                      }, null, 8, ["deal"]),
                                      createTextVNode(" \u0424\u0430\u0439\u043B\u044B ")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_UiCardTitle, { class: "flex items-center gap-3" }, {
                                  default: withCtx(() => [
                                    createVNode(_component_MyOrdersUploadFileForm, {
                                      deal: unref(currentDeal),
                                      onFileUploaded: getFiles
                                    }, null, 8, ["deal"]),
                                    createTextVNode(" \u0424\u0430\u0439\u043B\u044B ")
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_UiCardContent, { class: "p-2" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<!--[-->`);
                              ssrRenderList(unref(files), (file) => {
                                _push5(`<div${_scopeId4}>`);
                                if (file.type !== "imgs") {
                                  _push5(`<a class="underline decoration-solid cursor-pointer text-blue-600"${ssrRenderAttr("href", file.url)} target="_blank"${_scopeId4}>${ssrInterpolate(file.name)}</a>`);
                                } else {
                                  _push5(`<!---->`);
                                }
                                _push5(`</div>`);
                              });
                              _push5(`<!--]-->`);
                            } else {
                              return [
                                (openBlock(true), createBlock(Fragment, null, renderList(unref(files), (file) => {
                                  return openBlock(), createBlock("div", {
                                    key: file.id
                                  }, [
                                    file.type !== "imgs" ? (openBlock(), createBlock("a", {
                                      key: 0,
                                      class: "underline decoration-solid cursor-pointer text-blue-600",
                                      href: file.url,
                                      target: "_blank"
                                    }, toDisplayString(file.name), 9, ["href"])) : createCommentVNode("", true)
                                  ]);
                                }), 128))
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_UiCardHeader, { class: "p-2 pb-2 bg-slate-50 flex" }, {
                            default: withCtx(() => [
                              createVNode(_component_UiCardTitle, { class: "flex items-center gap-3" }, {
                                default: withCtx(() => [
                                  createVNode(_component_MyOrdersUploadFileForm, {
                                    deal: unref(currentDeal),
                                    onFileUploaded: getFiles
                                  }, null, 8, ["deal"]),
                                  createTextVNode(" \u0424\u0430\u0439\u043B\u044B ")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_UiCardContent, { class: "p-2" }, {
                            default: withCtx(() => [
                              (openBlock(true), createBlock(Fragment, null, renderList(unref(files), (file) => {
                                return openBlock(), createBlock("div", {
                                  key: file.id
                                }, [
                                  file.type !== "imgs" ? (openBlock(), createBlock("a", {
                                    key: 0,
                                    class: "underline decoration-solid cursor-pointer text-blue-600",
                                    href: file.url,
                                    target: "_blank"
                                  }, toDisplayString(file.name), 9, ["href"])) : createCommentVNode("", true)
                                ]);
                              }), 128))
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
                    createVNode(_component_UiCard, { class: "overflow-hidden" }, {
                      default: withCtx(() => [
                        createVNode(_component_UiCardHeader, { class: "p-2 pb-2 bg-slate-50 flex" }, {
                          default: withCtx(() => [
                            createVNode(_component_UiCardTitle, { class: "flex items-center gap-3" }, {
                              default: withCtx(() => [
                                createVNode(_component_MyOrdersUploadFileForm, {
                                  deal: unref(currentDeal),
                                  onFileUploaded: getFiles
                                }, null, 8, ["deal"]),
                                createTextVNode(" \u0424\u0430\u0439\u043B\u044B ")
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(_component_UiCardContent, { class: "p-2" }, {
                          default: withCtx(() => [
                            (openBlock(true), createBlock(Fragment, null, renderList(unref(files), (file) => {
                              return openBlock(), createBlock("div", {
                                key: file.id
                              }, [
                                file.type !== "imgs" ? (openBlock(), createBlock("a", {
                                  key: 0,
                                  class: "underline decoration-solid cursor-pointer text-blue-600",
                                  href: file.url,
                                  target: "_blank"
                                }, toDisplayString(file.name), 9, ["href"])) : createCommentVNode("", true)
                              ]);
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
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UiTabsList, null, {
                default: withCtx(() => [
                  createVNode(_component_UiTabsTrigger, { value: "\u0417\u0430\u043A\u0430\u0437\u044B" }, {
                    default: withCtx(() => [
                      createTextVNode("\u0417\u0430\u043A\u0430\u0437\u044B ")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_UiTabsTrigger, { value: "\u0414\u043E\u0441\u0442\u0430\u0432\u043A\u0438" }, {
                    default: withCtx(() => [
                      createTextVNode("\u0414\u043E\u0441\u0442\u0430\u0432\u043A\u0438 ")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_UiTabsTrigger, { value: "\u0424\u0430\u0439\u043B\u044B" }, {
                    default: withCtx(() => [
                      createTextVNode("\u0424\u0430\u0439\u043B\u044B ")
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(_component_UiTabsContent, { value: "\u0417\u0430\u043A\u0430\u0437\u044B" }, {
                default: withCtx(() => [
                  createVNode(_component_UiCard, { class: "overflow-hidden pb-6" }, {
                    default: withCtx(() => {
                      var _a;
                      return [
                        createVNode(_component_UiCardHeader, { class: "p-2 pb-2 bg-slate-50 flex" }, {
                          default: withCtx(() => [
                            createVNode(_component_UiCardTitle, { class: "flex items-center" }, {
                              default: withCtx(() => [
                                createVNode(_component_MyOrdersOrderFormModal, {
                                  deal: unref(currentDeal),
                                  class: "mr-3 justify-between",
                                  onOrderCreated: dealUpdated
                                }, null, 8, ["deal"]),
                                createTextVNode(" \u0421\u043F\u0438\u0441\u043E\u043A \u0437\u0430\u043A\u0430\u0437\u043E\u0432 ")
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }),
                        ((_a = unref(dealOrders)) == null ? void 0 : _a.length) ? (openBlock(), createBlock(_component_UiCardContent, {
                          key: 0,
                          class: "p-2 h-full"
                        }, {
                          default: withCtx(() => [
                            createVNode("div", { class: "w-full h-full flex flex-col gap-2" }, [
                              (openBlock(true), createBlock(Fragment, null, renderList(unref(dealOrders), (order) => {
                                return openBlock(), createBlock("div", {
                                  key: order.id
                                }, [
                                  createVNode(_component_MyOrdersOrderCard, {
                                    "current-order": order,
                                    stages: unref(stages),
                                    workers: unref(workers),
                                    onUpdateOrdersList: getOrders
                                  }, null, 8, ["current-order", "stages", "workers"])
                                ]);
                              }), 128))
                            ])
                          ]),
                          _: 1
                        })) : createCommentVNode("", true)
                      ];
                    }),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(_component_UiTabsContent, { value: "\u0414\u043E\u0441\u0442\u0430\u0432\u043A\u0438" }, {
                default: withCtx(() => [
                  createVNode(_component_UiCard, { class: "overflow-hidden" }, {
                    default: withCtx(() => {
                      var _a;
                      return [
                        createVNode(_component_UiCardHeader, { class: "p-2 pb-2 bg-slate-50 flex" }, {
                          default: withCtx(() => [
                            createVNode(_component_UiCardTitle, { class: "flex items-center" }, {
                              default: withCtx(() => [
                                createVNode(_component_MyDeliveriesCreateModal, {
                                  deal: unref(currentDeal),
                                  class: "mr-3",
                                  onDeliveryCreated: getDeliveries
                                }, null, 8, ["deal"]),
                                createTextVNode(" \u0421\u043F\u0438\u0441\u043E\u043A \u0434\u043E\u0441\u0442\u0430\u0432\u043E\u043A ")
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }),
                        ((_a = unref(dealDeliveries)) == null ? void 0 : _a.length) ? (openBlock(), createBlock(_component_UiCardContent, {
                          key: 0,
                          class: "p-2"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_MyDeliveriesList, {
                              deliveries: unref(dealDeliveries),
                              onDeliveryEdited: getDeliveries,
                              onDeliveryDeleted: getDeliveries
                            }, null, 8, ["deliveries"])
                          ]),
                          _: 1
                        })) : createCommentVNode("", true)
                      ];
                    }),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(_component_UiTabsContent, { value: "\u0424\u0430\u0439\u043B\u044B" }, {
                default: withCtx(() => [
                  createVNode(_component_UiCard, { class: "overflow-hidden" }, {
                    default: withCtx(() => [
                      createVNode(_component_UiCardHeader, { class: "p-2 pb-2 bg-slate-50 flex" }, {
                        default: withCtx(() => [
                          createVNode(_component_UiCardTitle, { class: "flex items-center gap-3" }, {
                            default: withCtx(() => [
                              createVNode(_component_MyOrdersUploadFileForm, {
                                deal: unref(currentDeal),
                                onFileUploaded: getFiles
                              }, null, 8, ["deal"]),
                              createTextVNode(" \u0424\u0430\u0439\u043B\u044B ")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(_component_UiCardContent, { class: "p-2" }, {
                        default: withCtx(() => [
                          (openBlock(true), createBlock(Fragment, null, renderList(unref(files), (file) => {
                            return openBlock(), createBlock("div", {
                              key: file.id
                            }, [
                              file.type !== "imgs" ? (openBlock(), createBlock("a", {
                                key: 0,
                                class: "underline decoration-solid cursor-pointer text-blue-600",
                                href: file.url,
                                target: "_blank"
                              }, toDisplayString(file.name), 9, ["href"])) : createCommentVNode("", true)
                            ]);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/orders/[id] copy.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_id_ copy-DTujKWCN.mjs.map
