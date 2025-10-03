import { defineComponent, ref, mergeProps, unref, isRef, withCtx, createBlock, openBlock, createVNode, createTextVNode, toDisplayString, renderSlot, computed, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderSlot } from 'vue/server-renderer';
import { useForwardPropsEmits, DropdownMenuRadioGroup, DropdownMenuRadioItem, DropdownMenuItemIndicator } from 'radix-vue';
import { Circle } from 'lucide-vue-next';
import { _ as _sfc_main$5, c as cn } from './index-DXIlBIYA.mjs';
import { _ as _sfc_main$4, a as _sfc_main$3, b as _sfc_main$6, c as _sfc_main$2$1, d as _sfc_main$1$1 } from './DialogContent-TqbB2uxT.mjs';
import { _ as _sfc_main$7 } from './DialogDescription-Bv3iXHRh.mjs';
import { _ as _sfc_main$9 } from './DialogFooter-CS0sFmAA.mjs';
import __nuxt_component_7 from './index-sUGMM391.mjs';
import { _ as _sfc_main$8 } from './OrderForm-C0IJ6HsV.mjs';
import { b as useNuxtApp } from './server.mjs';

const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "DropdownMenuRadioGroup",
  __ssrInlineRender: true,
  props: {
    modelValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["update:modelValue"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const forwarded = useForwardPropsEmits(props, emits);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(DropdownMenuRadioGroup), mergeProps(unref(forwarded), _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default")
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/dropdown-menu/DropdownMenuRadioGroup.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "DropdownMenuRadioItem",
  __ssrInlineRender: true,
  props: {
    value: {},
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  emits: ["select"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const delegatedProps = computed(() => {
      const { class: _, ...delegated } = props;
      return delegated;
    });
    const forwarded = useForwardPropsEmits(delegatedProps, emits);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(DropdownMenuRadioItem), mergeProps(unref(forwarded), {
        class: unref(cn)(
          "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-slate-100 focus:text-slate-900 data-[disabled]:pointer-events-none data-[disabled]:opacity-50 dark:focus:bg-slate-800 dark:focus:text-slate-50",
          props.class
        )
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="absolute left-2 flex h-3.5 w-3.5 items-center justify-center"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(DropdownMenuItemIndicator), null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(Circle), { class: "h-2 w-2 fill-current" }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(Circle), { class: "h-2 w-2 fill-current" })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</span>`);
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              createVNode("span", { class: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center" }, [
                createVNode(unref(DropdownMenuItemIndicator), null, {
                  default: withCtx(() => [
                    createVNode(unref(Circle), { class: "h-2 w-2 fill-current" })
                  ]),
                  _: 1
                })
              ]),
              renderSlot(_ctx.$slots, "default")
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/dropdown-menu/DropdownMenuRadioItem.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "OrderFormModal",
  __ssrInlineRender: true,
  props: {
    deal: {},
    order: {}
  },
  emits: ["order-created", "order-edited"],
  setup(__props, { emit: __emit }) {
    const { $useApi } = useNuxtApp();
    const props = __props;
    const isOpen = ref(false);
    const emit = __emit;
    const createOrder = async (values) => {
      await $useApi.post(`/deals/${props.deal.id}/orders/`, {
        ...values
      });
      emit("order-created");
      isOpen.value = false;
      return;
    };
    const editOrder = async (values) => {
      try {
        await $useApi.patch(`/orders/${props.order.id}`, {
          ...values
        });
        emit("order-edited");
        isOpen.value = false;
        return;
      } catch (e) {
        console.log(e);
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UiDialog = _sfc_main$4;
      const _component_UiDialogTrigger = _sfc_main$3;
      const _component_UiButton = _sfc_main$5;
      const _component_Icon = __nuxt_component_7;
      const _component_UiDialogContent = _sfc_main$6;
      const _component_UiDialogHeader = _sfc_main$2$1;
      const _component_UiDialogTitle = _sfc_main$1$1;
      const _component_UiDialogDescription = _sfc_main$7;
      const _component_MyOrdersOrderForm = _sfc_main$8;
      const _component_UiDialogFooter = _sfc_main$9;
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
                  _push3(ssrRenderComponent(_component_UiButton, { class: "h-6 w-6 p-0" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        if (props.deal) {
                          _push4(ssrRenderComponent(_component_Icon, {
                            name: "akar-icons:plus",
                            color: "white",
                            size: "18px"
                          }, null, _parent4, _scopeId3));
                        } else {
                          _push4(ssrRenderComponent(_component_Icon, {
                            name: "mingcute:edit-line",
                            color: "white",
                            size: "18px"
                          }, null, _parent4, _scopeId3));
                        }
                      } else {
                        return [
                          props.deal ? (openBlock(), createBlock(_component_Icon, {
                            key: 0,
                            name: "akar-icons:plus",
                            color: "white",
                            size: "18px"
                          })) : (openBlock(), createBlock(_component_Icon, {
                            key: 1,
                            name: "mingcute:edit-line",
                            color: "white",
                            size: "18px"
                          }))
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UiButton, { class: "h-6 w-6 p-0" }, {
                      default: withCtx(() => [
                        props.deal ? (openBlock(), createBlock(_component_Icon, {
                          key: 0,
                          name: "akar-icons:plus",
                          color: "white",
                          size: "18px"
                        })) : (openBlock(), createBlock(_component_Icon, {
                          key: 1,
                          name: "mingcute:edit-line",
                          color: "white",
                          size: "18px"
                        }))
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
                              _push5(`${ssrInterpolate(props.deal ? "\u0421\u043E\u0437\u0434\u0430\u0442\u044C" : "\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C")} \u0437\u0430\u043A\u0430\u0437`);
                            } else {
                              return [
                                createTextVNode(toDisplayString(props.deal ? "\u0421\u043E\u0437\u0434\u0430\u0442\u044C" : "\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C") + " \u0437\u0430\u043A\u0430\u0437", 1)
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
                              createTextVNode(toDisplayString(props.deal ? "\u0421\u043E\u0437\u0434\u0430\u0442\u044C" : "\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C") + " \u0437\u0430\u043A\u0430\u0437", 1)
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
                  if (props.deal) {
                    _push3(ssrRenderComponent(_component_MyOrdersOrderForm, {
                      deal: props.deal,
                      onCreateOrder: createOrder
                    }, null, _parent3, _scopeId2));
                  } else {
                    _push3(ssrRenderComponent(_component_MyOrdersOrderForm, {
                      order: props.order,
                      onEditOrder: editOrder
                    }, null, _parent3, _scopeId2));
                  }
                  _push3(ssrRenderComponent(_component_UiDialogFooter, null, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UiDialogHeader, null, {
                      default: withCtx(() => [
                        createVNode(_component_UiDialogTitle, null, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(props.deal ? "\u0421\u043E\u0437\u0434\u0430\u0442\u044C" : "\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C") + " \u0437\u0430\u043A\u0430\u0437", 1)
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
                    props.deal ? (openBlock(), createBlock(_component_MyOrdersOrderForm, {
                      key: 0,
                      deal: props.deal,
                      onCreateOrder: createOrder
                    }, null, 8, ["deal"])) : (openBlock(), createBlock(_component_MyOrdersOrderForm, {
                      key: 1,
                      order: props.order,
                      onEditOrder: editOrder
                    }, null, 8, ["order"])),
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
                  createVNode(_component_UiButton, { class: "h-6 w-6 p-0" }, {
                    default: withCtx(() => [
                      props.deal ? (openBlock(), createBlock(_component_Icon, {
                        key: 0,
                        name: "akar-icons:plus",
                        color: "white",
                        size: "18px"
                      })) : (openBlock(), createBlock(_component_Icon, {
                        key: 1,
                        name: "mingcute:edit-line",
                        color: "white",
                        size: "18px"
                      }))
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
                          createTextVNode(toDisplayString(props.deal ? "\u0421\u043E\u0437\u0434\u0430\u0442\u044C" : "\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C") + " \u0437\u0430\u043A\u0430\u0437", 1)
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
                  props.deal ? (openBlock(), createBlock(_component_MyOrdersOrderForm, {
                    key: 0,
                    deal: props.deal,
                    onCreateOrder: createOrder
                  }, null, 8, ["deal"])) : (openBlock(), createBlock(_component_MyOrdersOrderForm, {
                    key: 1,
                    order: props.order,
                    onEditOrder: editOrder
                  }, null, 8, ["order"])),
                  createVNode(_component_UiDialogFooter)
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
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/my/orders/OrderFormModal.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _, _sfc_main$2 as a, _sfc_main$1 as b };
//# sourceMappingURL=OrderFormModal-D_i05I_c.mjs.map
