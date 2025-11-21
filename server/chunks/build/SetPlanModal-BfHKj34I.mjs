import { _ as _sfc_main$2 } from './index-B6vrBiru.mjs';
import { defineComponent, ref, mergeProps, unref, isRef, withCtx, createVNode, createTextVNode, toDisplayString, computed, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrInterpolate, ssrRenderAttrs } from 'vue/server-renderer';
import { X } from 'lucide-vue-next';
import { _ as _sfc_main$4, a as _sfc_main$3, b as _sfc_main$5, c as _sfc_main$2$1, d as _sfc_main$1$1 } from './DialogContent-BsO2ljLB.mjs';
import { _ as _sfc_main$b } from './DialogFooter-CQpXS8R1.mjs';
import { _ as __nuxt_component_0 } from './index-BPQNkNDf.mjs';
import { _ as _sfc_main$6 } from './Card-D2-UPrX8.mjs';
import { _ as _sfc_main$1$2, a as _sfc_main$7 } from './CardTitle-Dyaq6zaM.mjs';
import { _ as _sfc_main$8 } from './CardDescription-CwDlX6V_.mjs';
import { _ as _sfc_main$9 } from './CardContent-5uJgHkPl.mjs';
import { _ as _sfc_main$a } from './Input-DoHPrX2-.mjs';
import { b as useNuxtApp } from './server.mjs';

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "DataTableToolbar",
  __ssrInlineRender: true,
  props: {
    table: {},
    filters: {}
  },
  setup(__props) {
    const props = __props;
    computed(() => props.filters.workspaces || []);
    computed(() => props.filters.groups || []);
    computed(() => props.filters.managers || []);
    computed(
      () => {
        var _a, _b;
        return (_b = (_a = props.table.getColumn("workSpaceId")) != null ? _a : props.table.getColumn("workSpace")) != null ? _b : void 0;
      }
    );
    computed(
      () => {
        var _a, _b;
        return (_b = (_a = props.table.getColumn("groupId")) != null ? _a : props.table.getColumn("group")) != null ? _b : void 0;
      }
    );
    computed(
      () => {
        var _a, _b, _c;
        return (_c = (_b = (_a = props.table.getColumn("managerId")) != null ? _a : props.table.getColumn("id")) != null ? _b : props.table.getColumn("fullName")) != null ? _c : void 0;
      }
    );
    const isFiltered = computed(
      () => props.table.getState().columnFilters.length > 0
    );
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UiButton = _sfc_main$2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex items-center justify-between" }, _attrs))}><div class="flex flex-1 items-center gap-2">`);
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
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/my/managers/DataTableToolbar.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
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
      const _component_UiDialog = _sfc_main$4;
      const _component_UiDialogTrigger = _sfc_main$3;
      const _component_UiButton = _sfc_main$2;
      const _component_Icon = __nuxt_component_0;
      const _component_UiDialogContent = _sfc_main$5;
      const _component_UiDialogHeader = _sfc_main$2$1;
      const _component_UiDialogTitle = _sfc_main$1$1;
      const _component_UiCard = _sfc_main$6;
      const _component_UiCardHeader = _sfc_main$1$2;
      const _component_UiCardTitle = _sfc_main$7;
      const _component_UiCardDescription = _sfc_main$8;
      const _component_UiCardContent = _sfc_main$9;
      const _component_UiInput = _sfc_main$a;
      const _component_UiDialogFooter = _sfc_main$b;
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

export { _sfc_main$1 as _, _sfc_main as a };
//# sourceMappingURL=SetPlanModal-BfHKj34I.mjs.map
