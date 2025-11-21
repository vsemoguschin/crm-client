import { _ as _sfc_main$1 } from './Card-D2-UPrX8.mjs';
import { _ as _sfc_main$1$1, a as _sfc_main$2 } from './CardTitle-Dyaq6zaM.mjs';
import { _ as _sfc_main$3 } from './CardDescription-CwDlX6V_.mjs';
import { _ as _sfc_main$4 } from './CardContent-5uJgHkPl.mjs';
import { _ as _sfc_main$5 } from './CardFooter-BUlih3MF.mjs';
import { _ as _sfc_main$6 } from './EditModal-BkYjnShT.mjs';
import { _ as _sfc_main$7 } from './index-B6vrBiru.mjs';
import { _ as __nuxt_component_0 } from './index-BPQNkNDf.mjs';
import { defineComponent, withCtx, createTextVNode, toDisplayString, createVNode, createBlock, createCommentVNode, openBlock, useSSRContext } from 'vue';
import { ssrRenderList, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { b as useNuxtApp } from './server.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "List",
  __ssrInlineRender: true,
  props: {
    deliveries: {}
  },
  emits: ["delivery-edited", "delivery-deleted"],
  setup(__props, { emit: __emit }) {
    const { $useApi } = useNuxtApp();
    const emit = __emit;
    const deleteDelivery = async (deliveryId) => {
      await $useApi.delete(`/deliveries/${deliveryId}`);
      emit("delivery-deleted");
    };
    const deliveryEdited = () => {
      emit("delivery-edited");
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UiCard = _sfc_main$1;
      const _component_UiCardHeader = _sfc_main$1$1;
      const _component_UiCardTitle = _sfc_main$2;
      const _component_UiCardDescription = _sfc_main$3;
      const _component_UiCardContent = _sfc_main$4;
      const _component_UiCardFooter = _sfc_main$5;
      const _component_MyDeliveriesEditModal = _sfc_main$6;
      const _component_UiButton = _sfc_main$7;
      const _component_Icon = __nuxt_component_0;
      _push(`<!--[-->`);
      ssrRenderList(_ctx.deliveries, (delivery, index) => {
        _push(`<div class="mb-2">`);
        _push(ssrRenderComponent(_component_UiCard, { class: "w-full" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_UiCardHeader, { class: "p-2" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_UiCardTitle, null, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`${ssrInterpolate(delivery.method)}`);
                        } else {
                          return [
                            createTextVNode(toDisplayString(delivery.method), 1)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_component_UiCardDescription, null, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<ul${_scopeId3}><li${_scopeId3}>${ssrInterpolate(delivery.type)}</li><li${_scopeId3}>\u0421\u0442\u0430\u0442\u0443\u0441: ${ssrInterpolate(delivery.status)}</li>`);
                          if (delivery.track) {
                            _push4(`<li${_scopeId3}>\u0422\u0440\u0435\u043A: ${ssrInterpolate(delivery.track)}</li>`);
                          } else {
                            _push4(`<!---->`);
                          }
                          _push4(`</ul>`);
                        } else {
                          return [
                            createVNode("ul", null, [
                              createVNode("li", null, toDisplayString(delivery.type), 1),
                              createVNode("li", null, "\u0421\u0442\u0430\u0442\u0443\u0441: " + toDisplayString(delivery.status), 1),
                              delivery.track ? (openBlock(), createBlock("li", { key: 0 }, "\u0422\u0440\u0435\u043A: " + toDisplayString(delivery.track), 1)) : createCommentVNode("", true)
                            ])
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                    _push3(`</div>`);
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
                            createVNode("ul", null, [
                              createVNode("li", null, toDisplayString(delivery.type), 1),
                              createVNode("li", null, "\u0421\u0442\u0430\u0442\u0443\u0441: " + toDisplayString(delivery.status), 1),
                              delivery.track ? (openBlock(), createBlock("li", { key: 0 }, "\u0422\u0440\u0435\u043A: " + toDisplayString(delivery.track), 1)) : createCommentVNode("", true)
                            ])
                          ]),
                          _: 2
                        }, 1024)
                      ])
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_UiCardContent, { class: "p-2" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(` \u0418\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F: ${ssrInterpolate(delivery.description)}`);
                  } else {
                    return [
                      createTextVNode(" \u0418\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F: " + toDisplayString(delivery.description), 1)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_UiCardFooter, { class: "flex justify-between p-2" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_MyDeliveriesEditModal, {
                      delivery,
                      onDeliveryEdited: deliveryEdited
                    }, null, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_component_UiButton, {
                      onClick: () => deleteDelivery(delivery.id)
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
                      _: 2
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_MyDeliveriesEditModal, {
                        delivery,
                        onDeliveryEdited: deliveryEdited
                      }, null, 8, ["delivery"]),
                      createVNode(_component_UiButton, {
                        onClick: () => deleteDelivery(delivery.id)
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_Icon, {
                            name: "mi:delete",
                            color: "white",
                            size: "25px"
                          })
                        ]),
                        _: 2
                      }, 1032, ["onClick"])
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
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
                          createVNode("ul", null, [
                            createVNode("li", null, toDisplayString(delivery.type), 1),
                            createVNode("li", null, "\u0421\u0442\u0430\u0442\u0443\u0441: " + toDisplayString(delivery.status), 1),
                            delivery.track ? (openBlock(), createBlock("li", { key: 0 }, "\u0422\u0440\u0435\u043A: " + toDisplayString(delivery.track), 1)) : createCommentVNode("", true)
                          ])
                        ]),
                        _: 2
                      }, 1024)
                    ])
                  ]),
                  _: 2
                }, 1024),
                createVNode(_component_UiCardContent, { class: "p-2" }, {
                  default: withCtx(() => [
                    createTextVNode(" \u0418\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F: " + toDisplayString(delivery.description), 1)
                  ]),
                  _: 2
                }, 1024),
                createVNode(_component_UiCardFooter, { class: "flex justify-between p-2" }, {
                  default: withCtx(() => [
                    createVNode(_component_MyDeliveriesEditModal, {
                      delivery,
                      onDeliveryEdited: deliveryEdited
                    }, null, 8, ["delivery"]),
                    createVNode(_component_UiButton, {
                      onClick: () => deleteDelivery(delivery.id)
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_Icon, {
                          name: "mi:delete",
                          color: "white",
                          size: "25px"
                        })
                      ]),
                      _: 2
                    }, 1032, ["onClick"])
                  ]),
                  _: 2
                }, 1024)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</div>`);
      });
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/my/deliveries/List.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
//# sourceMappingURL=List-C4HeE6dS.mjs.map
