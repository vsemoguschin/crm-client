import { _ as _sfc_main$4, a as _sfc_main$3, b as _sfc_main$2, c as _sfc_main$2$1, d as _sfc_main$1$1 } from './DialogContent-BsO2ljLB.mjs';
import { _ as _sfc_main$9 } from './DialogFooter-CQpXS8R1.mjs';
import { _ as _sfc_main$1 } from './index-B6vrBiru.mjs';
import { _ as _sfc_main$5 } from './Label-Bxzolydd.mjs';
import { _ as _sfc_main$6, a as _sfc_main$4$1, b as _sfc_main$5$1, c as _sfc_main$3$1, d as _sfc_main$2$2 } from './SelectScrollDownButton-JzJI8BsA.mjs';
import { _ as _sfc_main$7 } from './Input-DoHPrX2-.mjs';
import { _ as _sfc_main$8 } from './Switch-BsBEqAPz.mjs';
import { defineComponent, ref, watch, mergeProps, unref, isRef, withCtx, createTextVNode, createVNode, toDisplayString, createBlock, openBlock, Fragment, renderList, createCommentVNode, withModifiers, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrInterpolate, ssrRenderList } from 'vue/server-renderer';
import { b as useNuxtApp } from './server.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "CreateModal",
  __ssrInlineRender: true,
  setup(__props) {
    const { $useApi } = useNuxtApp();
    const isOpen = ref(false);
    const errorMessage = ref(null);
    const isLoading = ref(false);
    const disabled = ref(true);
    const terminals = [
      "\u0422\u0435\u0440\u043C\u0438\u043D\u0430\u043B \u0418\u0437\u0438\u043D\u0435\u043E\u043D",
      "\u0422\u0435\u0440\u043C\u0438\u043D\u0430\u043B \u0418\u0437\u0438\u043D\u0435\u043E\u043D \u0421\u0411\u041F",
      "\u0422\u0435\u0440\u043C\u0438\u043D\u0430\u043B \u0418\u0437\u0438\u0411\u0443\u043A",
      "\u0422\u0435\u0440\u043C\u0438\u043D\u0430\u043B \u0418\u0437\u0438\u0411\u0443\u043A \u0421\u0411\u041F"
    ];
    const paymentLink = ref(null);
    const PaymentId = ref(null);
    const publicLink = ref(null);
    const newPaymentBlank = {
      terminal: terminals[0],
      Name: "\u0418\u0437\u0433\u043E\u0442\u043E\u0432\u043B\u0435\u043D\u0438\u0435 \u043D\u0435\u043E\u043D\u043E\u0432\u043E\u0439 \u0432\u044B\u0432\u0435\u0441\u043A\u0438",
      Amount: 10,
      Phone: "",
      //обязателен, если не передан Email
      Email: "",
      //обязателен, если не передан Phone
      withOffer: false
    };
    const newPayment = ref({ ...newPaymentBlank });
    watch(
      () => newPayment.value.terminal,
      (terminal) => {
        newPayment.value.Name = terminal === "\u0422\u0435\u0440\u043C\u0438\u043D\u0430\u043B \u0418\u0437\u0438\u0411\u0443\u043A" || terminal === "\u0422\u0435\u0440\u043C\u0438\u043D\u0430\u043B \u0418\u0437\u0438\u0411\u0443\u043A \u0421\u0411\u041F" ? "\u0418\u0437\u0433\u043E\u0442\u043E\u0432\u043B\u0435\u043D\u0438\u0435 \u0444\u043E\u0442\u043E\u043A\u043D\u0438\u0433\u0438" : "\u0418\u0437\u0433\u043E\u0442\u043E\u0432\u043B\u0435\u043D\u0438\u0435 \u043D\u0435\u043E\u043D\u043E\u0432\u043E\u0439 \u0432\u044B\u0432\u0435\u0441\u043A\u0438";
      },
      { immediate: true }
    );
    const getLink = async () => {
      var _a, _b;
      isLoading.value = true;
      errorMessage.value = null;
      try {
        const endpoint = newPayment.value.withOffer ? "/payments/offer-link" : "/payments/link";
        const { withOffer, ...paymentData } = newPayment.value;
        const response = await $useApi.post(endpoint, paymentData);
        console.log(response.data);
        paymentLink.value = response.data.link || null;
        publicLink.value = response.data.publicLink || null;
        PaymentId.value = response.data.PaymentId || null;
      } catch (error) {
        const message = ((_b = (_a = error.response) == null ? void 0 : _a.data) == null ? void 0 : _b.message) || "\u041E\u0448\u0438\u0431\u043A\u0430 \u043F\u0440\u0438 \u0441\u043E\u0437\u0434\u0430\u043D\u0438\u0438";
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
        const { Name, Amount, Email, Phone, withOffer } = newPayment.value;
        if (withOffer) {
          disabled.value = !(Name && Amount);
        } else {
          disabled.value = !(Name && Amount && (Email || Phone));
        }
      },
      { deep: true }
    );
    watch(isOpen, (newValue) => {
      if (!newValue) {
        newPayment.value = { ...newPaymentBlank };
        errorMessage.value = null;
        paymentLink.value = null;
        publicLink.value = null;
        PaymentId.value = null;
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UiDialog = _sfc_main$4;
      const _component_UiDialogTrigger = _sfc_main$3;
      const _component_UiButton = _sfc_main$1;
      const _component_UiDialogContent = _sfc_main$2;
      const _component_UiDialogHeader = _sfc_main$2$1;
      const _component_UiDialogTitle = _sfc_main$1$1;
      const _component_UiLabel = _sfc_main$5;
      const _component_UiSelect = _sfc_main$6;
      const _component_UiSelectTrigger = _sfc_main$4$1;
      const _component_UiSelectValue = _sfc_main$5$1;
      const _component_UiSelectContent = _sfc_main$3$1;
      const _component_UiSelectItem = _sfc_main$2$2;
      const _component_UiInput = _sfc_main$7;
      const _component_UiSwitch = _sfc_main$8;
      const _component_UiDialogFooter = _sfc_main$9;
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
            _push2(ssrRenderComponent(_component_UiDialogContent, { class: "max-w-[350px] flex flex-col" }, {
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
                  _push3(`<div class="flex flex-col gap-6 mt-2"${_scopeId2}><div class="relative"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` \u0422\u0435\u0440\u043C\u0438\u043D\u0430\u043B `);
                      } else {
                        return [
                          createTextVNode(" \u0422\u0435\u0440\u043C\u0438\u043D\u0430\u043B ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_UiSelect, {
                    modelValue: unref(newPayment).terminal,
                    "onUpdate:modelValue": ($event) => unref(newPayment).terminal = $event
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_UiSelectTrigger, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_UiSelectValue, { placeholder: "\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0442\u0435\u0440\u043C\u0438\u043D\u0430\u043B" }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_UiSelectValue, { placeholder: "\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0442\u0435\u0440\u043C\u0438\u043D\u0430\u043B" })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_UiSelectContent, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<!--[-->`);
                              ssrRenderList(terminals, (t) => {
                                _push5(ssrRenderComponent(_component_UiSelectItem, {
                                  key: t,
                                  value: t
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
                                  return createVNode(_component_UiSelectItem, {
                                    key: t,
                                    value: t
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
                          createVNode(_component_UiSelectTrigger, null, {
                            default: withCtx(() => [
                              createVNode(_component_UiSelectValue, { placeholder: "\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0442\u0435\u0440\u043C\u0438\u043D\u0430\u043B" })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_UiSelectContent, null, {
                            default: withCtx(() => [
                              (openBlock(), createBlock(Fragment, null, renderList(terminals, (t) => {
                                return createVNode(_component_UiSelectItem, {
                                  key: t,
                                  value: t
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
                  _push3(`</div><div class="relative"${_scopeId2}>`);
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
                    class: unref(newPayment).Name ? "" : "outline-1 outline-rose-300"
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
                    class: unref(newPayment).Amount ? "" : "outline-1 outline-rose-300"
                  }, null, _parent3, _scopeId2));
                  _push3(`</div>`);
                  if (!unref(newPayment).withOffer) {
                    _push3(`<!--[--><div class="relative"${_scopeId2}>`);
                    if (unref(newPayment).Phone) {
                      _push3(ssrRenderComponent(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap" }, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(` \u041D\u043E\u043C\u0435\u0440 \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0430 <span class="text-rose-500"${_scopeId3}>*</span>`);
                          } else {
                            return [
                              createTextVNode(" \u041D\u043E\u043C\u0435\u0440 \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0430 "),
                              createVNode("span", { class: "text-rose-500" }, "*")
                            ];
                          }
                        }),
                        _: 1
                      }, _parent3, _scopeId2));
                    } else {
                      _push3(`<!---->`);
                    }
                    _push3(ssrRenderComponent(_component_UiInput, {
                      id: "pay-tel",
                      modelValue: unref(newPayment).Phone,
                      "onUpdate:modelValue": ($event) => unref(newPayment).Phone = $event,
                      type: "tel",
                      placeholder: "\u041D\u043E\u043C\u0435\u0440 \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0430",
                      class: unref(newPayment).Phone ? "" : "outline-1 outline-rose-300"
                    }, null, _parent3, _scopeId2));
                    _push3(`</div><div class="relative"${_scopeId2}>`);
                    if (unref(newPayment).Email) {
                      _push3(ssrRenderComponent(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap" }, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(` \u041F\u043E\u0447\u0442\u0430 <span class="text-rose-500"${_scopeId3}>*</span>`);
                          } else {
                            return [
                              createTextVNode(" \u041F\u043E\u0447\u0442\u0430 "),
                              createVNode("span", { class: "text-rose-500" }, "*")
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
                      class: unref(newPayment).Email ? "" : "outline-1 outline-rose-300"
                    }, null, _parent3, _scopeId2));
                    _push3(`</div><!--]-->`);
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(`<div class="flex items-center gap-3"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_UiSwitch, {
                    checked: unref(newPayment).withOffer,
                    "onUpdate:checked": ($event) => unref(newPayment).withOffer = $event
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_UiLabel, { class: "text-sm font-medium cursor-pointer" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` \u0421 \u043E\u0444\u0435\u0440\u0442\u043E\u0439 `);
                      } else {
                        return [
                          createTextVNode(" \u0421 \u043E\u0444\u0435\u0440\u0442\u043E\u0439 ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div></div>`);
                  _push3(ssrRenderComponent(_component_UiDialogFooter, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        if (unref(publicLink) || unref(paymentLink)) {
                          _push4(`<div class="flex flex-col gap-2 text-slate-500"${_scopeId3}>`);
                          if (unref(publicLink)) {
                            _push4(`<div class="cursor-pointer hover:text-slate-700"${_scopeId3}><span class="font-medium"${_scopeId3}>\u0421\u0441\u044B\u043B\u043A\u0430 \u0434\u043B\u044F \u043A\u043B\u0438\u0435\u043D\u0442\u0430:</span> ${ssrInterpolate(unref(publicLink))}</div>`);
                          } else {
                            _push4(`<!---->`);
                          }
                          if (unref(paymentLink)) {
                            _push4(`<div class="cursor-pointer hover:text-slate-700"${_scopeId3}><span class="font-medium"${_scopeId3}>\u0421\u0441\u044B\u043B\u043A\u0430 \u043D\u0430 \u043E\u043F\u043B\u0430\u0442\u0443:</span> ${ssrInterpolate(unref(paymentLink))}</div>`);
                          } else {
                            _push4(`<!---->`);
                          }
                          if (unref(PaymentId)) {
                            _push4(`<div${_scopeId3}>\u041D\u043E\u043C\u0435\u0440 \u043F\u043B\u0430\u0442\u0435\u0436\u0430: ${ssrInterpolate(unref(PaymentId))}</div>`);
                          } else {
                            _push4(`<!---->`);
                          }
                          _push4(`</div>`);
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
                          unref(publicLink) || unref(paymentLink) ? (openBlock(), createBlock("div", {
                            key: 0,
                            class: "flex flex-col gap-2 text-slate-500"
                          }, [
                            unref(publicLink) ? (openBlock(), createBlock("div", {
                              key: 0,
                              class: "cursor-pointer hover:text-slate-700",
                              onClick: withModifiers(($event) => copyToClipboard(unref(publicLink)), ["prevent"])
                            }, [
                              createVNode("span", { class: "font-medium" }, "\u0421\u0441\u044B\u043B\u043A\u0430 \u0434\u043B\u044F \u043A\u043B\u0438\u0435\u043D\u0442\u0430:"),
                              createTextVNode(" " + toDisplayString(unref(publicLink)), 1)
                            ], 8, ["onClick"])) : createCommentVNode("", true),
                            unref(paymentLink) ? (openBlock(), createBlock("div", {
                              key: 1,
                              class: "cursor-pointer hover:text-slate-700",
                              onClick: withModifiers(($event) => copyToClipboard(unref(paymentLink)), ["prevent"])
                            }, [
                              createVNode("span", { class: "font-medium" }, "\u0421\u0441\u044B\u043B\u043A\u0430 \u043D\u0430 \u043E\u043F\u043B\u0430\u0442\u0443:"),
                              createTextVNode(" " + toDisplayString(unref(paymentLink)), 1)
                            ], 8, ["onClick"])) : createCommentVNode("", true),
                            unref(PaymentId) ? (openBlock(), createBlock("div", { key: 2 }, "\u041D\u043E\u043C\u0435\u0440 \u043F\u043B\u0430\u0442\u0435\u0436\u0430: " + toDisplayString(unref(PaymentId)), 1)) : createCommentVNode("", true)
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
                      createVNode("div", { class: "relative" }, [
                        createVNode(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap" }, {
                          default: withCtx(() => [
                            createTextVNode(" \u0422\u0435\u0440\u043C\u0438\u043D\u0430\u043B ")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_UiSelect, {
                          modelValue: unref(newPayment).terminal,
                          "onUpdate:modelValue": ($event) => unref(newPayment).terminal = $event
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_UiSelectTrigger, null, {
                              default: withCtx(() => [
                                createVNode(_component_UiSelectValue, { placeholder: "\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0442\u0435\u0440\u043C\u0438\u043D\u0430\u043B" })
                              ]),
                              _: 1
                            }),
                            createVNode(_component_UiSelectContent, null, {
                              default: withCtx(() => [
                                (openBlock(), createBlock(Fragment, null, renderList(terminals, (t) => {
                                  return createVNode(_component_UiSelectItem, {
                                    key: t,
                                    value: t
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
                        }, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
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
                          class: unref(newPayment).Name ? "" : "outline-1 outline-rose-300"
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
                          class: unref(newPayment).Amount ? "" : "outline-1 outline-rose-300"
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "class"])
                      ]),
                      !unref(newPayment).withOffer ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                        createVNode("div", { class: "relative" }, [
                          unref(newPayment).Phone ? (openBlock(), createBlock(_component_UiLabel, {
                            key: 0,
                            class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" \u041D\u043E\u043C\u0435\u0440 \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0430 "),
                              createVNode("span", { class: "text-rose-500" }, "*")
                            ]),
                            _: 1
                          })) : createCommentVNode("", true),
                          createVNode(_component_UiInput, {
                            id: "pay-tel",
                            modelValue: unref(newPayment).Phone,
                            "onUpdate:modelValue": ($event) => unref(newPayment).Phone = $event,
                            type: "tel",
                            placeholder: "\u041D\u043E\u043C\u0435\u0440 \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0430",
                            class: unref(newPayment).Phone ? "" : "outline-1 outline-rose-300"
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "class"])
                        ]),
                        createVNode("div", { class: "relative" }, [
                          unref(newPayment).Email ? (openBlock(), createBlock(_component_UiLabel, {
                            key: 0,
                            class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" \u041F\u043E\u0447\u0442\u0430 "),
                              createVNode("span", { class: "text-rose-500" }, "*")
                            ]),
                            _: 1
                          })) : createCommentVNode("", true),
                          createVNode(_component_UiInput, {
                            modelValue: unref(newPayment).Email,
                            "onUpdate:modelValue": ($event) => unref(newPayment).Email = $event,
                            type: "email",
                            placeholder: "\u041F\u043E\u0447\u0442\u0430",
                            class: unref(newPayment).Email ? "" : "outline-1 outline-rose-300"
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "class"])
                        ])
                      ], 64)) : createCommentVNode("", true),
                      createVNode("div", { class: "flex items-center gap-3" }, [
                        createVNode(_component_UiSwitch, {
                          checked: unref(newPayment).withOffer,
                          "onUpdate:checked": ($event) => unref(newPayment).withOffer = $event
                        }, null, 8, ["checked", "onUpdate:checked"]),
                        createVNode(_component_UiLabel, { class: "text-sm font-medium cursor-pointer" }, {
                          default: withCtx(() => [
                            createTextVNode(" \u0421 \u043E\u0444\u0435\u0440\u0442\u043E\u0439 ")
                          ]),
                          _: 1
                        })
                      ])
                    ]),
                    createVNode(_component_UiDialogFooter, null, {
                      default: withCtx(() => [
                        unref(publicLink) || unref(paymentLink) ? (openBlock(), createBlock("div", {
                          key: 0,
                          class: "flex flex-col gap-2 text-slate-500"
                        }, [
                          unref(publicLink) ? (openBlock(), createBlock("div", {
                            key: 0,
                            class: "cursor-pointer hover:text-slate-700",
                            onClick: withModifiers(($event) => copyToClipboard(unref(publicLink)), ["prevent"])
                          }, [
                            createVNode("span", { class: "font-medium" }, "\u0421\u0441\u044B\u043B\u043A\u0430 \u0434\u043B\u044F \u043A\u043B\u0438\u0435\u043D\u0442\u0430:"),
                            createTextVNode(" " + toDisplayString(unref(publicLink)), 1)
                          ], 8, ["onClick"])) : createCommentVNode("", true),
                          unref(paymentLink) ? (openBlock(), createBlock("div", {
                            key: 1,
                            class: "cursor-pointer hover:text-slate-700",
                            onClick: withModifiers(($event) => copyToClipboard(unref(paymentLink)), ["prevent"])
                          }, [
                            createVNode("span", { class: "font-medium" }, "\u0421\u0441\u044B\u043B\u043A\u0430 \u043D\u0430 \u043E\u043F\u043B\u0430\u0442\u0443:"),
                            createTextVNode(" " + toDisplayString(unref(paymentLink)), 1)
                          ], 8, ["onClick"])) : createCommentVNode("", true),
                          unref(PaymentId) ? (openBlock(), createBlock("div", { key: 2 }, "\u041D\u043E\u043C\u0435\u0440 \u043F\u043B\u0430\u0442\u0435\u0436\u0430: " + toDisplayString(unref(PaymentId)), 1)) : createCommentVNode("", true)
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
              createVNode(_component_UiDialogContent, { class: "max-w-[350px] flex flex-col" }, {
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
                    createVNode("div", { class: "relative" }, [
                      createVNode(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap" }, {
                        default: withCtx(() => [
                          createTextVNode(" \u0422\u0435\u0440\u043C\u0438\u043D\u0430\u043B ")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_UiSelect, {
                        modelValue: unref(newPayment).terminal,
                        "onUpdate:modelValue": ($event) => unref(newPayment).terminal = $event
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_UiSelectTrigger, null, {
                            default: withCtx(() => [
                              createVNode(_component_UiSelectValue, { placeholder: "\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0442\u0435\u0440\u043C\u0438\u043D\u0430\u043B" })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_UiSelectContent, null, {
                            default: withCtx(() => [
                              (openBlock(), createBlock(Fragment, null, renderList(terminals, (t) => {
                                return createVNode(_component_UiSelectItem, {
                                  key: t,
                                  value: t
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
                      }, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
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
                        class: unref(newPayment).Name ? "" : "outline-1 outline-rose-300"
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
                        class: unref(newPayment).Amount ? "" : "outline-1 outline-rose-300"
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "class"])
                    ]),
                    !unref(newPayment).withOffer ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                      createVNode("div", { class: "relative" }, [
                        unref(newPayment).Phone ? (openBlock(), createBlock(_component_UiLabel, {
                          key: 0,
                          class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" \u041D\u043E\u043C\u0435\u0440 \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0430 "),
                            createVNode("span", { class: "text-rose-500" }, "*")
                          ]),
                          _: 1
                        })) : createCommentVNode("", true),
                        createVNode(_component_UiInput, {
                          id: "pay-tel",
                          modelValue: unref(newPayment).Phone,
                          "onUpdate:modelValue": ($event) => unref(newPayment).Phone = $event,
                          type: "tel",
                          placeholder: "\u041D\u043E\u043C\u0435\u0440 \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0430",
                          class: unref(newPayment).Phone ? "" : "outline-1 outline-rose-300"
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "class"])
                      ]),
                      createVNode("div", { class: "relative" }, [
                        unref(newPayment).Email ? (openBlock(), createBlock(_component_UiLabel, {
                          key: 0,
                          class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" \u041F\u043E\u0447\u0442\u0430 "),
                            createVNode("span", { class: "text-rose-500" }, "*")
                          ]),
                          _: 1
                        })) : createCommentVNode("", true),
                        createVNode(_component_UiInput, {
                          modelValue: unref(newPayment).Email,
                          "onUpdate:modelValue": ($event) => unref(newPayment).Email = $event,
                          type: "email",
                          placeholder: "\u041F\u043E\u0447\u0442\u0430",
                          class: unref(newPayment).Email ? "" : "outline-1 outline-rose-300"
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "class"])
                      ])
                    ], 64)) : createCommentVNode("", true),
                    createVNode("div", { class: "flex items-center gap-3" }, [
                      createVNode(_component_UiSwitch, {
                        checked: unref(newPayment).withOffer,
                        "onUpdate:checked": ($event) => unref(newPayment).withOffer = $event
                      }, null, 8, ["checked", "onUpdate:checked"]),
                      createVNode(_component_UiLabel, { class: "text-sm font-medium cursor-pointer" }, {
                        default: withCtx(() => [
                          createTextVNode(" \u0421 \u043E\u0444\u0435\u0440\u0442\u043E\u0439 ")
                        ]),
                        _: 1
                      })
                    ])
                  ]),
                  createVNode(_component_UiDialogFooter, null, {
                    default: withCtx(() => [
                      unref(publicLink) || unref(paymentLink) ? (openBlock(), createBlock("div", {
                        key: 0,
                        class: "flex flex-col gap-2 text-slate-500"
                      }, [
                        unref(publicLink) ? (openBlock(), createBlock("div", {
                          key: 0,
                          class: "cursor-pointer hover:text-slate-700",
                          onClick: withModifiers(($event) => copyToClipboard(unref(publicLink)), ["prevent"])
                        }, [
                          createVNode("span", { class: "font-medium" }, "\u0421\u0441\u044B\u043B\u043A\u0430 \u0434\u043B\u044F \u043A\u043B\u0438\u0435\u043D\u0442\u0430:"),
                          createTextVNode(" " + toDisplayString(unref(publicLink)), 1)
                        ], 8, ["onClick"])) : createCommentVNode("", true),
                        unref(paymentLink) ? (openBlock(), createBlock("div", {
                          key: 1,
                          class: "cursor-pointer hover:text-slate-700",
                          onClick: withModifiers(($event) => copyToClipboard(unref(paymentLink)), ["prevent"])
                        }, [
                          createVNode("span", { class: "font-medium" }, "\u0421\u0441\u044B\u043B\u043A\u0430 \u043D\u0430 \u043E\u043F\u043B\u0430\u0442\u0443:"),
                          createTextVNode(" " + toDisplayString(unref(paymentLink)), 1)
                        ], 8, ["onClick"])) : createCommentVNode("", true),
                        unref(PaymentId) ? (openBlock(), createBlock("div", { key: 2 }, "\u041D\u043E\u043C\u0435\u0440 \u043F\u043B\u0430\u0442\u0435\u0436\u0430: " + toDisplayString(unref(PaymentId)), 1)) : createCommentVNode("", true)
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
//# sourceMappingURL=CreateModal-HWEILUCM.mjs.map
