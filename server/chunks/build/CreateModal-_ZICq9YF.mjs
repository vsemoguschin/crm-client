import { _ as _sfc_main$4, a as _sfc_main$3, b as _sfc_main$2, c as _sfc_main$2$1, d as _sfc_main$1$1 } from './DialogContent-Cpdz0S5M.mjs';
import { _ as _sfc_main$8 } from './DialogFooter--i0s9obd.mjs';
import { _ as _sfc_main$1 } from './index-BASHn9g0.mjs';
import { _ as _sfc_main$2$2, a as _sfc_main$5, b as _sfc_main$1$2 } from './TabsList-P1PqxA-H.mjs';
import { _ as _sfc_main$6 } from './Label-DWRrr4Tu.mjs';
import { _ as _sfc_main$7 } from './Input-aD0e3Jyr.mjs';
import { _ as __nuxt_component_0 } from './nuxt-link-BIR_0OPy.mjs';
import { defineComponent, ref, watch, mergeProps, unref, isRef, withCtx, createTextVNode, createVNode, toDisplayString, createBlock, openBlock, Fragment, renderList, withModifiers, createCommentVNode, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrInterpolate, ssrRenderList } from 'vue/server-renderer';
import { a as useNuxtApp } from './server.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "CreateModal",
  __ssrInlineRender: true,
  setup(__props) {
    const { $useApi } = useNuxtApp();
    const isOpen = ref(false);
    const errorMessage = ref(null);
    const isLoading = ref(false);
    const disabled = ref(true);
    const terminals = ["\u0422\u0435\u0440\u043C\u0438\u043D\u0430\u043B \u0418\u0437\u0438\u043D\u0435\u043E\u043D \u0421\u0411\u041F", "\u0422\u0435\u0440\u043C\u0438\u043D\u0430\u043B \u0418\u0437\u0438\u043D\u0435\u043E\u043D"];
    const paymentLink = ref(null);
    const PaymentId = ref(null);
    const newPaymentBlank = {
      terminal: terminals[0],
      Name: "\u0418\u0437\u0433\u043E\u0442\u043E\u0432\u043B\u0435\u043D\u0438\u0435 \u043D\u0435\u043E\u043D\u043E\u0432\u043E\u0439 \u0432\u044B\u0432\u0435\u0441\u043A\u0438",
      Amount: 10,
      Phone: "",
      //обязателен, если не передан Email
      Email: ""
      //обязателен, если не передан Phone
    };
    const newPayment = ref({ ...newPaymentBlank });
    const getLink = async () => {
      var _a, _b;
      isLoading.value = true;
      errorMessage.value = null;
      try {
        const response = await $useApi.post(
          "/payments/link",
          newPayment.value
        );
        console.log(response.data);
        paymentLink.value = response.data.link;
        PaymentId.value = response.data.PaymentId;
      } catch (error) {
        const message = ((_b = (_a = error.response) == null ? void 0 : _a.data) == null ? void 0 : _b.message) || "\u041E\u0448\u0438\u0431\u043A\u0430 \u043F\u0440\u0438 \u0441\u043E\u0437\u0434\u0430\u043D\u0438\u0438 \u043E\u0442\u0437\u044B\u0432\u0430";
        errorMessage.value = message.message;
      } finally {
        isLoading.value = false;
      }
    };
    watch(
      [newPayment],
      () => {
        const { Name, Amount, Email, Phone } = newPayment.value;
        disabled.value = !(Name && Amount && Email && Phone);
      },
      { deep: true }
    );
    const copyToClipboard = async (link) => {
      try {
        await (void 0).clipboard.writeText(link);
        alert("\u0421\u0441\u044B\u043B\u043A\u0430 \u0443\u0441\u043F\u0435\u0448\u043D\u043E \u0441\u043A\u043E\u043F\u0438\u0440\u043E\u0432\u0430\u043D\u0430 \u0432 \u0431\u0443\u0444\u0435\u0440 \u043E\u0431\u043C\u0435\u043D\u0430!");
      } catch (error) {
        console.error("\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u0441\u043A\u043E\u043F\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u0441\u0441\u044B\u043B\u043A\u0443:", error);
        alert("\u041E\u0448\u0438\u0431\u043A\u0430 \u043F\u0440\u0438 \u043A\u043E\u043F\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0438 \u0441\u0441\u044B\u043B\u043A\u0438.");
      }
    };
    watch(
      [newPayment],
      () => {
        const { Name, Amount, Email, Phone } = newPayment.value;
        disabled.value = !(Name && Amount && (Email || Phone));
      },
      { deep: true }
    );
    watch(isOpen, (newValue) => {
      if (!newValue) {
        newPayment.value = { ...newPaymentBlank };
        errorMessage.value = null;
        paymentLink.value = null;
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UiDialog = _sfc_main$4;
      const _component_UiDialogTrigger = _sfc_main$3;
      const _component_UiButton = _sfc_main$1;
      const _component_UiDialogContent = _sfc_main$2;
      const _component_UiDialogHeader = _sfc_main$2$1;
      const _component_UiDialogTitle = _sfc_main$1$1;
      const _component_UiTabs = _sfc_main$2$2;
      const _component_UiTabsList = _sfc_main$5;
      const _component_UiTabsTrigger = _sfc_main$1$2;
      const _component_UiLabel = _sfc_main$6;
      const _component_UiInput = _sfc_main$7;
      const _component_UiDialogFooter = _sfc_main$8;
      const _component_NuxtLink = __nuxt_component_0;
      _push(ssrRenderComponent(_component_UiDialog, mergeProps({
        open: unref(isOpen),
        "onUpdate:open": ($event) => isRef(isOpen) ? isOpen.value = $event : null
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UiDialogTrigger, { "as-child": "" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UiButton, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`\u0412\u044B\u0441\u0442\u0430\u0432\u0438\u0442\u044C \u0441\u0441\u044B\u043B\u043A\u0443`);
                      } else {
                        return [
                          createTextVNode("\u0412\u044B\u0441\u0442\u0430\u0432\u0438\u0442\u044C \u0441\u0441\u044B\u043B\u043A\u0443")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UiButton, null, {
                      default: withCtx(() => [
                        createTextVNode("\u0412\u044B\u0441\u0442\u0430\u0432\u0438\u0442\u044C \u0441\u0441\u044B\u043B\u043A\u0443")
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
                              _push5(`\u0421\u043E\u0437\u0434\u0430\u0442\u044C \u0441\u0441\u044B\u043B\u043A\u0443 \u043D\u0430 \u043E\u043F\u043B\u0430\u0442\u0443`);
                            } else {
                              return [
                                createTextVNode("\u0421\u043E\u0437\u0434\u0430\u0442\u044C \u0441\u0441\u044B\u043B\u043A\u0443 \u043D\u0430 \u043E\u043F\u043B\u0430\u0442\u0443")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_UiDialogTitle, null, {
                            default: withCtx(() => [
                              createTextVNode("\u0421\u043E\u0437\u0434\u0430\u0442\u044C \u0441\u0441\u044B\u043B\u043A\u0443 \u043D\u0430 \u043E\u043F\u043B\u0430\u0442\u0443")
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
                  _push3(ssrRenderComponent(_component_UiTabs, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_UiTabsList, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<!--[-->`);
                              ssrRenderList(terminals, (t) => {
                                _push5(ssrRenderComponent(_component_UiTabsTrigger, {
                                  key: t,
                                  value: t,
                                  onClick: ($event) => unref(newPayment).terminal = t
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
                                (openBlock(), createBlock(Fragment, null, renderList(terminals, (t) => {
                                  return createVNode(_component_UiTabsTrigger, {
                                    key: t,
                                    value: t,
                                    onClick: ($event) => unref(newPayment).terminal = t
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
                          createVNode(_component_UiTabsList, null, {
                            default: withCtx(() => [
                              (openBlock(), createBlock(Fragment, null, renderList(terminals, (t) => {
                                return createVNode(_component_UiTabsTrigger, {
                                  key: t,
                                  value: t,
                                  onClick: ($event) => unref(newPayment).terminal = t
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
                        _push4(` \u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u0437\u0430\u043A\u0430\u0437\u0430 `);
                      } else {
                        return [
                          createTextVNode(" \u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u0437\u0430\u043A\u0430\u0437\u0430 ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_UiInput, {
                    modelValue: unref(newPayment).Name,
                    "onUpdate:modelValue": ($event) => unref(newPayment).Name = $event,
                    placeholder: "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u0437\u0430\u043A\u0430\u0437\u0430",
                    class: unref(newPayment).Name ? "" : "outline outline-1 outline-rose-300"
                  }, null, _parent3, _scopeId2));
                  _push3(`</div><div class="relative"${_scopeId2}>`);
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
                    modelValue: unref(newPayment).Amount,
                    "onUpdate:modelValue": ($event) => unref(newPayment).Amount = $event,
                    type: "number",
                    placeholder: "\u0421\u0443\u043C\u043C\u0430",
                    class: unref(newPayment).Amount ? "" : "outline outline-1 outline-rose-300"
                  }, null, _parent3, _scopeId2));
                  _push3(`</div><div class="relative"${_scopeId2}>`);
                  if (unref(newPayment).Phone) {
                    _push3(ssrRenderComponent(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(` \u041D\u043E\u043C\u0435\u0440 \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0430 `);
                        } else {
                          return [
                            createTextVNode(" \u041D\u043E\u043C\u0435\u0440 \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0430 ")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(ssrRenderComponent(_component_UiInput, {
                    modelValue: unref(newPayment).Phone,
                    "onUpdate:modelValue": ($event) => unref(newPayment).Phone = $event,
                    type: "tel",
                    placeholder: "\u041D\u043E\u043C\u0435\u0440 \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0430",
                    class: unref(newPayment).Phone ? "" : "outline outline-1 outline-rose-300"
                  }, null, _parent3, _scopeId2));
                  _push3(`</div><div class="relative"${_scopeId2}>`);
                  if (unref(newPayment).Email) {
                    _push3(ssrRenderComponent(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(` \u041F\u043E\u0447\u0442\u0430 `);
                        } else {
                          return [
                            createTextVNode(" \u041F\u043E\u0447\u0442\u0430 ")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(ssrRenderComponent(_component_UiInput, {
                    modelValue: unref(newPayment).Email,
                    "onUpdate:modelValue": ($event) => unref(newPayment).Email = $event,
                    type: "email",
                    placeholder: "\u041F\u043E\u0447\u0442\u0430",
                    class: unref(newPayment).Email ? "" : "outline outline-1 outline-rose-300"
                  }, null, _parent3, _scopeId2));
                  _push3(`</div></div>`);
                  _push3(ssrRenderComponent(_component_UiDialogFooter, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        if (unref(paymentLink)) {
                          _push4(`<div class="flex flex-col gap-2 text-slate-500"${_scopeId3}>`);
                          _push4(ssrRenderComponent(_component_NuxtLink, {
                            to: unref(paymentLink),
                            onClick: ($event) => copyToClipboard(unref(paymentLink))
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`${ssrInterpolate(unref(paymentLink))}`);
                              } else {
                                return [
                                  createTextVNode(toDisplayString(unref(paymentLink)), 1)
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                          _push4(`<div${_scopeId3}>\u041D\u043E\u043C\u0435\u0440 \u043F\u043B\u0430\u0442\u0435\u0436\u0430: ${ssrInterpolate(unref(PaymentId))}</div></div>`);
                        } else {
                          _push4(ssrRenderComponent(_component_UiButton, {
                            disabled: unref(disabled) || unref(isLoading),
                            onClick: getLink
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
                        }
                      } else {
                        return [
                          unref(paymentLink) ? (openBlock(), createBlock("div", {
                            key: 0,
                            class: "flex flex-col gap-2 text-slate-500"
                          }, [
                            createVNode(_component_NuxtLink, {
                              to: unref(paymentLink),
                              onClick: withModifiers(($event) => copyToClipboard(unref(paymentLink)), ["prevent"])
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(unref(paymentLink)), 1)
                              ]),
                              _: 1
                            }, 8, ["to", "onClick"]),
                            createVNode("div", null, "\u041D\u043E\u043C\u0435\u0440 \u043F\u043B\u0430\u0442\u0435\u0436\u0430: " + toDisplayString(unref(PaymentId)), 1)
                          ])) : (openBlock(), createBlock(_component_UiButton, {
                            key: 1,
                            disabled: unref(disabled) || unref(isLoading),
                            onClick: getLink
                          }, {
                            default: withCtx(() => [
                              unref(isLoading) ? (openBlock(), createBlock("span", { key: 0 }, "\u0421\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u0438\u0435...")) : (openBlock(), createBlock("span", { key: 1 }, "\u0421\u043E\u0437\u0434\u0430\u0442\u044C"))
                            ]),
                            _: 1
                          }, 8, ["disabled"]))
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
                            createTextVNode("\u0421\u043E\u0437\u0434\u0430\u0442\u044C \u0441\u0441\u044B\u043B\u043A\u0443 \u043D\u0430 \u043E\u043F\u043B\u0430\u0442\u0443")
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
                      createVNode(_component_UiTabs, null, {
                        default: withCtx(() => [
                          createVNode(_component_UiTabsList, null, {
                            default: withCtx(() => [
                              (openBlock(), createBlock(Fragment, null, renderList(terminals, (t) => {
                                return createVNode(_component_UiTabsTrigger, {
                                  key: t,
                                  value: t,
                                  onClick: ($event) => unref(newPayment).terminal = t
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
                            createTextVNode(" \u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u0437\u0430\u043A\u0430\u0437\u0430 ")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_UiInput, {
                          modelValue: unref(newPayment).Name,
                          "onUpdate:modelValue": ($event) => unref(newPayment).Name = $event,
                          placeholder: "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u0437\u0430\u043A\u0430\u0437\u0430",
                          class: unref(newPayment).Name ? "" : "outline outline-1 outline-rose-300"
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "class"])
                      ]),
                      createVNode("div", { class: "relative" }, [
                        createVNode(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap" }, {
                          default: withCtx(() => [
                            createTextVNode(" \u0421\u0443\u043C\u043C\u0430 ")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_UiInput, {
                          modelValue: unref(newPayment).Amount,
                          "onUpdate:modelValue": ($event) => unref(newPayment).Amount = $event,
                          type: "number",
                          placeholder: "\u0421\u0443\u043C\u043C\u0430",
                          class: unref(newPayment).Amount ? "" : "outline outline-1 outline-rose-300"
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "class"])
                      ]),
                      createVNode("div", { class: "relative" }, [
                        unref(newPayment).Phone ? (openBlock(), createBlock(_component_UiLabel, {
                          key: 0,
                          class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" \u041D\u043E\u043C\u0435\u0440 \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0430 ")
                          ]),
                          _: 1
                        })) : createCommentVNode("", true),
                        createVNode(_component_UiInput, {
                          modelValue: unref(newPayment).Phone,
                          "onUpdate:modelValue": ($event) => unref(newPayment).Phone = $event,
                          type: "tel",
                          placeholder: "\u041D\u043E\u043C\u0435\u0440 \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0430",
                          class: unref(newPayment).Phone ? "" : "outline outline-1 outline-rose-300"
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "class"])
                      ]),
                      createVNode("div", { class: "relative" }, [
                        unref(newPayment).Email ? (openBlock(), createBlock(_component_UiLabel, {
                          key: 0,
                          class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" \u041F\u043E\u0447\u0442\u0430 ")
                          ]),
                          _: 1
                        })) : createCommentVNode("", true),
                        createVNode(_component_UiInput, {
                          modelValue: unref(newPayment).Email,
                          "onUpdate:modelValue": ($event) => unref(newPayment).Email = $event,
                          type: "email",
                          placeholder: "\u041F\u043E\u0447\u0442\u0430",
                          class: unref(newPayment).Email ? "" : "outline outline-1 outline-rose-300"
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "class"])
                      ])
                    ]),
                    createVNode(_component_UiDialogFooter, null, {
                      default: withCtx(() => [
                        unref(paymentLink) ? (openBlock(), createBlock("div", {
                          key: 0,
                          class: "flex flex-col gap-2 text-slate-500"
                        }, [
                          createVNode(_component_NuxtLink, {
                            to: unref(paymentLink),
                            onClick: withModifiers(($event) => copyToClipboard(unref(paymentLink)), ["prevent"])
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(unref(paymentLink)), 1)
                            ]),
                            _: 1
                          }, 8, ["to", "onClick"]),
                          createVNode("div", null, "\u041D\u043E\u043C\u0435\u0440 \u043F\u043B\u0430\u0442\u0435\u0436\u0430: " + toDisplayString(unref(PaymentId)), 1)
                        ])) : (openBlock(), createBlock(_component_UiButton, {
                          key: 1,
                          disabled: unref(disabled) || unref(isLoading),
                          onClick: getLink
                        }, {
                          default: withCtx(() => [
                            unref(isLoading) ? (openBlock(), createBlock("span", { key: 0 }, "\u0421\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u0438\u0435...")) : (openBlock(), createBlock("span", { key: 1 }, "\u0421\u043E\u0437\u0434\u0430\u0442\u044C"))
                          ]),
                          _: 1
                        }, 8, ["disabled"]))
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
                      createTextVNode("\u0412\u044B\u0441\u0442\u0430\u0432\u0438\u0442\u044C \u0441\u0441\u044B\u043B\u043A\u0443")
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
                          createTextVNode("\u0421\u043E\u0437\u0434\u0430\u0442\u044C \u0441\u0441\u044B\u043B\u043A\u0443 \u043D\u0430 \u043E\u043F\u043B\u0430\u0442\u0443")
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
                    createVNode(_component_UiTabs, null, {
                      default: withCtx(() => [
                        createVNode(_component_UiTabsList, null, {
                          default: withCtx(() => [
                            (openBlock(), createBlock(Fragment, null, renderList(terminals, (t) => {
                              return createVNode(_component_UiTabsTrigger, {
                                key: t,
                                value: t,
                                onClick: ($event) => unref(newPayment).terminal = t
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
                          createTextVNode(" \u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u0437\u0430\u043A\u0430\u0437\u0430 ")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_UiInput, {
                        modelValue: unref(newPayment).Name,
                        "onUpdate:modelValue": ($event) => unref(newPayment).Name = $event,
                        placeholder: "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u0437\u0430\u043A\u0430\u0437\u0430",
                        class: unref(newPayment).Name ? "" : "outline outline-1 outline-rose-300"
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "class"])
                    ]),
                    createVNode("div", { class: "relative" }, [
                      createVNode(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap" }, {
                        default: withCtx(() => [
                          createTextVNode(" \u0421\u0443\u043C\u043C\u0430 ")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_UiInput, {
                        modelValue: unref(newPayment).Amount,
                        "onUpdate:modelValue": ($event) => unref(newPayment).Amount = $event,
                        type: "number",
                        placeholder: "\u0421\u0443\u043C\u043C\u0430",
                        class: unref(newPayment).Amount ? "" : "outline outline-1 outline-rose-300"
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "class"])
                    ]),
                    createVNode("div", { class: "relative" }, [
                      unref(newPayment).Phone ? (openBlock(), createBlock(_component_UiLabel, {
                        key: 0,
                        class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" \u041D\u043E\u043C\u0435\u0440 \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0430 ")
                        ]),
                        _: 1
                      })) : createCommentVNode("", true),
                      createVNode(_component_UiInput, {
                        modelValue: unref(newPayment).Phone,
                        "onUpdate:modelValue": ($event) => unref(newPayment).Phone = $event,
                        type: "tel",
                        placeholder: "\u041D\u043E\u043C\u0435\u0440 \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0430",
                        class: unref(newPayment).Phone ? "" : "outline outline-1 outline-rose-300"
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "class"])
                    ]),
                    createVNode("div", { class: "relative" }, [
                      unref(newPayment).Email ? (openBlock(), createBlock(_component_UiLabel, {
                        key: 0,
                        class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" \u041F\u043E\u0447\u0442\u0430 ")
                        ]),
                        _: 1
                      })) : createCommentVNode("", true),
                      createVNode(_component_UiInput, {
                        modelValue: unref(newPayment).Email,
                        "onUpdate:modelValue": ($event) => unref(newPayment).Email = $event,
                        type: "email",
                        placeholder: "\u041F\u043E\u0447\u0442\u0430",
                        class: unref(newPayment).Email ? "" : "outline outline-1 outline-rose-300"
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "class"])
                    ])
                  ]),
                  createVNode(_component_UiDialogFooter, null, {
                    default: withCtx(() => [
                      unref(paymentLink) ? (openBlock(), createBlock("div", {
                        key: 0,
                        class: "flex flex-col gap-2 text-slate-500"
                      }, [
                        createVNode(_component_NuxtLink, {
                          to: unref(paymentLink),
                          onClick: withModifiers(($event) => copyToClipboard(unref(paymentLink)), ["prevent"])
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(unref(paymentLink)), 1)
                          ]),
                          _: 1
                        }, 8, ["to", "onClick"]),
                        createVNode("div", null, "\u041D\u043E\u043C\u0435\u0440 \u043F\u043B\u0430\u0442\u0435\u0436\u0430: " + toDisplayString(unref(PaymentId)), 1)
                      ])) : (openBlock(), createBlock(_component_UiButton, {
                        key: 1,
                        disabled: unref(disabled) || unref(isLoading),
                        onClick: getLink
                      }, {
                        default: withCtx(() => [
                          unref(isLoading) ? (openBlock(), createBlock("span", { key: 0 }, "\u0421\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u0438\u0435...")) : (openBlock(), createBlock("span", { key: 1 }, "\u0421\u043E\u0437\u0434\u0430\u0442\u044C"))
                        ]),
                        _: 1
                      }, 8, ["disabled"]))
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/my/operations/CreateModal.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
//# sourceMappingURL=CreateModal-_ZICq9YF.mjs.map
