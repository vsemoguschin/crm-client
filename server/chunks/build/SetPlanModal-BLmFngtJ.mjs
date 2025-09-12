import { _ as _sfc_main$3, a as _sfc_main$4, b as _sfc_main$2$1, c as _sfc_main$1$1 } from './DialogContent-C-t2_PBT.mjs';
import { _ as _sfc_main$1 } from './DialogTrigger-DRJQjnK1.mjs';
import { _ as _sfc_main$7 } from './DialogFooter-CS0sFmAA.mjs';
import { _ as _sfc_main$2 } from './index-DXIlBIYA.mjs';
import __nuxt_component_7 from './index-sUGMM391.mjs';
import { _ as _sfc_main$3$1, a as _sfc_main$2$2, c as _sfc_main$1$2, b as _sfc_main$5 } from './CardDescription-B9jynpEL.mjs';
import { _ as _sfc_main$1$3 } from './CardFooter-CIZt0R6-.mjs';
import { _ as _sfc_main$6 } from './Input-CzbisvbY.mjs';
import { defineComponent, ref, mergeProps, unref, isRef, withCtx, createVNode, createTextVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { b as useNuxtApp } from './server.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "SetPlanModal",
  __ssrInlineRender: true,
  props: {
    plan: {},
    period: {},
    managerId: {},
    manager: {}
  },
  emits: ["isPlanSet"],
  setup(__props, { emit: __emit }) {
    const { $useApi } = useNuxtApp();
    const props = __props;
    const planData = ref(props.plan);
    const isOpen = ref(false);
    const emit = __emit;
    const updatePlan = async () => {
      try {
        const { data: newPlan } = await $useApi.post(
          `/managers/${props.managerId}/plan`,
          {
            // method: 'post',
            period: props.period,
            // 2025-02
            plan: planData.value
            // сумма
          }
        );
        console.log("plan set");
        emit("isPlanSet", newPlan.plan);
        isOpen.value = false;
        return;
      } catch (error) {
        console.log(error);
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UiDialog = _sfc_main$3;
      const _component_UiDialogTrigger = _sfc_main$1;
      const _component_UiButton = _sfc_main$2;
      const _component_Icon = __nuxt_component_7;
      const _component_UiDialogContent = _sfc_main$4;
      const _component_UiDialogHeader = _sfc_main$2$1;
      const _component_UiDialogTitle = _sfc_main$1$1;
      const _component_UiCard = _sfc_main$3$1;
      const _component_UiCardHeader = _sfc_main$2$2;
      const _component_UiCardTitle = _sfc_main$1$2;
      const _component_UiCardDescription = _sfc_main$5;
      const _component_UiCardContent = _sfc_main$1$3;
      const _component_UiInput = _sfc_main$6;
      const _component_UiDialogFooter = _sfc_main$7;
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
                    createVNode(_component_UiButton, { class: "h-5 w-5 px-0 py-2" }, {
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
                              _push5(`\u041F\u043B\u0430\u043D \u043D\u0430 ${ssrInterpolate(_ctx.period)}`);
                            } else {
                              return [
                                createTextVNode("\u041F\u043B\u0430\u043D \u043D\u0430 " + toDisplayString(_ctx.period), 1)
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_UiDialogTitle, null, {
                            default: withCtx(() => [
                              createTextVNode("\u041F\u043B\u0430\u043D \u043D\u0430 " + toDisplayString(_ctx.period), 1)
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`<div class="flex w-full gap-4"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_UiCard, { class: "w-full" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_UiCardHeader, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_UiCardTitle, null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`\u0423\u0441\u0442\u0430\u043D\u043E\u0432\u043A\u0430 \u043F\u043B\u0430\u043D\u0430`);
                                  } else {
                                    return [
                                      createTextVNode("\u0423\u0441\u0442\u0430\u043D\u043E\u0432\u043A\u0430 \u043F\u043B\u0430\u043D\u0430")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_UiCardDescription, null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`${ssrInterpolate(_ctx.manager)}`);
                                  } else {
                                    return [
                                      createTextVNode(toDisplayString(_ctx.manager), 1)
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_UiCardTitle, null, {
                                  default: withCtx(() => [
                                    createTextVNode("\u0423\u0441\u0442\u0430\u043D\u043E\u0432\u043A\u0430 \u043F\u043B\u0430\u043D\u0430")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_UiCardDescription, null, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(_ctx.manager), 1)
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
                              _push5(`<div class="flex flex-col gap-4"${_scopeId4}><div class=""${_scopeId4}>`);
                              _push5(ssrRenderComponent(_component_UiInput, {
                                modelValue: unref(planData),
                                "onUpdate:modelValue": ($event) => isRef(planData) ? planData.value = $event : null,
                                type: "number",
                                placeholder: "\u0421\u0443\u043C\u043C\u0430",
                                class: "col-span-3"
                              }, null, _parent5, _scopeId4));
                              _push5(`</div></div>`);
                            } else {
                              return [
                                createVNode("div", { class: "flex flex-col gap-4" }, [
                                  createVNode("div", { class: "" }, [
                                    createVNode(_component_UiInput, {
                                      modelValue: unref(planData),
                                      "onUpdate:modelValue": ($event) => isRef(planData) ? planData.value = $event : null,
                                      type: "number",
                                      placeholder: "\u0421\u0443\u043C\u043C\u0430",
                                      class: "col-span-3"
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
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
                                  createTextVNode("\u0423\u0441\u0442\u0430\u043D\u043E\u0432\u043A\u0430 \u043F\u043B\u0430\u043D\u0430")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_UiCardDescription, null, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(_ctx.manager), 1)
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_UiCardContent, null, {
                            default: withCtx(() => [
                              createVNode("div", { class: "flex flex-col gap-4" }, [
                                createVNode("div", { class: "" }, [
                                  createVNode(_component_UiInput, {
                                    modelValue: unref(planData),
                                    "onUpdate:modelValue": ($event) => isRef(planData) ? planData.value = $event : null,
                                    type: "number",
                                    placeholder: "\u0421\u0443\u043C\u043C\u0430",
                                    class: "col-span-3"
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
                  }, _parent3, _scopeId2));
                  _push3(`</div>`);
                  _push3(ssrRenderComponent(_component_UiDialogFooter, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_UiButton, { onClick: updatePlan }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` \u041D\u0430\u0437\u043D\u0430\u0447\u0438\u0442\u044C `);
                            } else {
                              return [
                                createTextVNode(" \u041D\u0430\u0437\u043D\u0430\u0447\u0438\u0442\u044C ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_UiButton, { onClick: updatePlan }, {
                            default: withCtx(() => [
                              createTextVNode(" \u041D\u0430\u0437\u043D\u0430\u0447\u0438\u0442\u044C ")
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
                            createTextVNode("\u041F\u043B\u0430\u043D \u043D\u0430 " + toDisplayString(_ctx.period), 1)
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode("div", { class: "flex w-full gap-4" }, [
                      createVNode(_component_UiCard, { class: "w-full" }, {
                        default: withCtx(() => [
                          createVNode(_component_UiCardHeader, null, {
                            default: withCtx(() => [
                              createVNode(_component_UiCardTitle, null, {
                                default: withCtx(() => [
                                  createTextVNode("\u0423\u0441\u0442\u0430\u043D\u043E\u0432\u043A\u0430 \u043F\u043B\u0430\u043D\u0430")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_UiCardDescription, null, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(_ctx.manager), 1)
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_UiCardContent, null, {
                            default: withCtx(() => [
                              createVNode("div", { class: "flex flex-col gap-4" }, [
                                createVNode("div", { class: "" }, [
                                  createVNode(_component_UiInput, {
                                    modelValue: unref(planData),
                                    "onUpdate:modelValue": ($event) => isRef(planData) ? planData.value = $event : null,
                                    type: "number",
                                    placeholder: "\u0421\u0443\u043C\u043C\u0430",
                                    class: "col-span-3"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
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
                        createVNode(_component_UiButton, { onClick: updatePlan }, {
                          default: withCtx(() => [
                            createTextVNode(" \u041D\u0430\u0437\u043D\u0430\u0447\u0438\u0442\u044C ")
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
                          createTextVNode("\u041F\u043B\u0430\u043D \u043D\u0430 " + toDisplayString(_ctx.period), 1)
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode("div", { class: "flex w-full gap-4" }, [
                    createVNode(_component_UiCard, { class: "w-full" }, {
                      default: withCtx(() => [
                        createVNode(_component_UiCardHeader, null, {
                          default: withCtx(() => [
                            createVNode(_component_UiCardTitle, null, {
                              default: withCtx(() => [
                                createTextVNode("\u0423\u0441\u0442\u0430\u043D\u043E\u0432\u043A\u0430 \u043F\u043B\u0430\u043D\u0430")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_UiCardDescription, null, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(_ctx.manager), 1)
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(_component_UiCardContent, null, {
                          default: withCtx(() => [
                            createVNode("div", { class: "flex flex-col gap-4" }, [
                              createVNode("div", { class: "" }, [
                                createVNode(_component_UiInput, {
                                  modelValue: unref(planData),
                                  "onUpdate:modelValue": ($event) => isRef(planData) ? planData.value = $event : null,
                                  type: "number",
                                  placeholder: "\u0421\u0443\u043C\u043C\u0430",
                                  class: "col-span-3"
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
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
                      createVNode(_component_UiButton, { onClick: updatePlan }, {
                        default: withCtx(() => [
                          createTextVNode(" \u041D\u0430\u0437\u043D\u0430\u0447\u0438\u0442\u044C ")
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
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/my/managers/SetPlanModal.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
//# sourceMappingURL=SetPlanModal-BLmFngtJ.mjs.map
