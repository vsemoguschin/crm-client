import { _ as _sfc_main$4, a as _sfc_main$3, b as _sfc_main$2, c as _sfc_main$2$1, d as _sfc_main$1$1 } from './DialogContent-BsO2ljLB.mjs';
import { _ as _sfc_main$5 } from './DialogDescription-D5yt23q9.mjs';
import { _ as _sfc_main$7 } from './DialogFooter-CQpXS8R1.mjs';
import { _ as _sfc_main$1 } from './index-B6vrBiru.mjs';
import { _ as __nuxt_component_0 } from './index-BPQNkNDf.mjs';
import { _ as _sfc_main$6 } from './OrderForm-DCVnpRuC.mjs';
import { defineComponent, ref, mergeProps, unref, isRef, withCtx, createBlock, openBlock, createVNode, createTextVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { b as useNuxtApp } from './server.mjs';

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
      const _component_UiButton = _sfc_main$1;
      const _component_Icon = __nuxt_component_0;
      const _component_UiDialogContent = _sfc_main$2;
      const _component_UiDialogHeader = _sfc_main$2$1;
      const _component_UiDialogTitle = _sfc_main$1$1;
      const _component_UiDialogDescription = _sfc_main$5;
      const _component_MyOrdersOrderForm = _sfc_main$6;
      const _component_UiDialogFooter = _sfc_main$7;
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

export { _sfc_main as _ };
//# sourceMappingURL=OrderFormModal-Cg_8pl1L.mjs.map
