import { _ as _sfc_main$2, a as _sfc_main$1, b as _sfc_main$4 } from './PopoverContent-Dy99cMmu.mjs';
import { _ as _sfc_main$3 } from './index-B6vrBiru.mjs';
import { _ as _sfc_main$5, a as _sfc_main$2$1, c as _sfc_main$4$1, b as _sfc_main$6, d as _sfc_main$3$1, e as _sfc_main$1$1 } from './CommandList-DiM7UR93.mjs';
import { defineComponent, ref, mergeProps, unref, isRef, withCtx, createTextVNode, toDisplayString, createVNode, createBlock, openBlock, Fragment, renderList, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList } from 'vue/server-renderer';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ComboboxModels",
  __ssrInlineRender: true,
  props: {
    items: {},
    label: {},
    buttonClass: { default: "" },
    listClass: { default: "" }
  },
  emits: ["selectedItem"],
  setup(__props, { emit: __emit }) {
    const open = ref(false);
    const value = ref("");
    const emit = __emit;
    const selectedItem = (value2) => {
      emit("selectedItem", value2);
      return;
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UiPopover = _sfc_main$2;
      const _component_UiPopoverTrigger = _sfc_main$1;
      const _component_UiButton = _sfc_main$3;
      const _component_UiPopoverContent = _sfc_main$4;
      const _component_UiCommand = _sfc_main$5;
      const _component_UiCommandInput = _sfc_main$2$1;
      const _component_UiCommandEmpty = _sfc_main$4$1;
      const _component_UiCommandList = _sfc_main$6;
      const _component_UiCommandGroup = _sfc_main$3$1;
      const _component_UiCommandItem = _sfc_main$1$1;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: _ctx.$attrs.class
      }, _attrs))}>`);
      _push(ssrRenderComponent(_component_UiPopover, {
        open: unref(open),
        "onUpdate:open": ($event) => isRef(open) ? open.value = $event : null
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UiPopoverTrigger, { "as-child": "" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UiButton, {
                    variant: "outline",
                    role: "combobox",
                    "aria-expanded": unref(open),
                    class: ["justify-between w-full", _ctx.buttonClass]
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`${ssrInterpolate(unref(value) ? unref(value) : `${_ctx.label}...`)}`);
                      } else {
                        return [
                          createTextVNode(toDisplayString(unref(value) ? unref(value) : `${_ctx.label}...`), 1)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UiButton, {
                      variant: "outline",
                      role: "combobox",
                      "aria-expanded": unref(open),
                      class: ["justify-between w-full", _ctx.buttonClass]
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(unref(value) ? unref(value) : `${_ctx.label}...`), 1)
                      ]),
                      _: 1
                    }, 8, ["aria-expanded", "class"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UiPopoverContent, { class: "p-0" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UiCommand, {
                    modelValue: unref(value),
                    "onUpdate:modelValue": ($event) => isRef(value) ? value.value = $event : null
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_UiCommandInput, { placeholder: "\u041F\u043E\u0438\u0441\u043A..." }, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_UiCommandEmpty, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`\u041D\u0435\u0442 \u0441\u043E\u0432\u043F\u0430\u0434\u0435\u043D\u0438\u0439.`);
                            } else {
                              return [
                                createTextVNode("\u041D\u0435\u0442 \u0441\u043E\u0432\u043F\u0430\u0434\u0435\u043D\u0438\u0439.")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_UiCommandList, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_UiCommandGroup, {
                                class: ["", _ctx.listClass]
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`<!--[-->`);
                                    ssrRenderList(_ctx.items, (item) => {
                                      _push6(ssrRenderComponent(_component_UiCommandItem, {
                                        key: item.value,
                                        value: item.label,
                                        onSelect: ($event) => {
                                          selectedItem(item.value);
                                          open.value = false;
                                        }
                                      }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`${ssrInterpolate(item.label)}`);
                                          } else {
                                            return [
                                              createTextVNode(toDisplayString(item.label), 1)
                                            ];
                                          }
                                        }),
                                        _: 2
                                      }, _parent6, _scopeId5));
                                    });
                                    _push6(`<!--]-->`);
                                  } else {
                                    return [
                                      (openBlock(true), createBlock(Fragment, null, renderList(_ctx.items, (item) => {
                                        return openBlock(), createBlock(_component_UiCommandItem, {
                                          key: item.value,
                                          value: item.label,
                                          onSelect: ($event) => {
                                            selectedItem(item.value);
                                            open.value = false;
                                          }
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(item.label), 1)
                                          ]),
                                          _: 2
                                        }, 1032, ["value", "onSelect"]);
                                      }), 128))
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_UiCommandGroup, {
                                  class: ["", _ctx.listClass]
                                }, {
                                  default: withCtx(() => [
                                    (openBlock(true), createBlock(Fragment, null, renderList(_ctx.items, (item) => {
                                      return openBlock(), createBlock(_component_UiCommandItem, {
                                        key: item.value,
                                        value: item.label,
                                        onSelect: ($event) => {
                                          selectedItem(item.value);
                                          open.value = false;
                                        }
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(item.label), 1)
                                        ]),
                                        _: 2
                                      }, 1032, ["value", "onSelect"]);
                                    }), 128))
                                  ]),
                                  _: 1
                                }, 8, ["class"])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_UiCommandInput, { placeholder: "\u041F\u043E\u0438\u0441\u043A..." }),
                          createVNode(_component_UiCommandEmpty, null, {
                            default: withCtx(() => [
                              createTextVNode("\u041D\u0435\u0442 \u0441\u043E\u0432\u043F\u0430\u0434\u0435\u043D\u0438\u0439.")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_UiCommandList, null, {
                            default: withCtx(() => [
                              createVNode(_component_UiCommandGroup, {
                                class: ["", _ctx.listClass]
                              }, {
                                default: withCtx(() => [
                                  (openBlock(true), createBlock(Fragment, null, renderList(_ctx.items, (item) => {
                                    return openBlock(), createBlock(_component_UiCommandItem, {
                                      key: item.value,
                                      value: item.label,
                                      onSelect: ($event) => {
                                        selectedItem(item.value);
                                        open.value = false;
                                      }
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(item.label), 1)
                                      ]),
                                      _: 2
                                    }, 1032, ["value", "onSelect"]);
                                  }), 128))
                                ]),
                                _: 1
                              }, 8, ["class"])
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
                    createVNode(_component_UiCommand, {
                      modelValue: unref(value),
                      "onUpdate:modelValue": ($event) => isRef(value) ? value.value = $event : null
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_UiCommandInput, { placeholder: "\u041F\u043E\u0438\u0441\u043A..." }),
                        createVNode(_component_UiCommandEmpty, null, {
                          default: withCtx(() => [
                            createTextVNode("\u041D\u0435\u0442 \u0441\u043E\u0432\u043F\u0430\u0434\u0435\u043D\u0438\u0439.")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_UiCommandList, null, {
                          default: withCtx(() => [
                            createVNode(_component_UiCommandGroup, {
                              class: ["", _ctx.listClass]
                            }, {
                              default: withCtx(() => [
                                (openBlock(true), createBlock(Fragment, null, renderList(_ctx.items, (item) => {
                                  return openBlock(), createBlock(_component_UiCommandItem, {
                                    key: item.value,
                                    value: item.label,
                                    onSelect: ($event) => {
                                      selectedItem(item.value);
                                      open.value = false;
                                    }
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(item.label), 1)
                                    ]),
                                    _: 2
                                  }, 1032, ["value", "onSelect"]);
                                }), 128))
                              ]),
                              _: 1
                            }, 8, ["class"])
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }, 8, ["modelValue", "onUpdate:modelValue"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UiPopoverTrigger, { "as-child": "" }, {
                default: withCtx(() => [
                  createVNode(_component_UiButton, {
                    variant: "outline",
                    role: "combobox",
                    "aria-expanded": unref(open),
                    class: ["justify-between w-full", _ctx.buttonClass]
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(unref(value) ? unref(value) : `${_ctx.label}...`), 1)
                    ]),
                    _: 1
                  }, 8, ["aria-expanded", "class"])
                ]),
                _: 1
              }),
              createVNode(_component_UiPopoverContent, { class: "p-0" }, {
                default: withCtx(() => [
                  createVNode(_component_UiCommand, {
                    modelValue: unref(value),
                    "onUpdate:modelValue": ($event) => isRef(value) ? value.value = $event : null
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_UiCommandInput, { placeholder: "\u041F\u043E\u0438\u0441\u043A..." }),
                      createVNode(_component_UiCommandEmpty, null, {
                        default: withCtx(() => [
                          createTextVNode("\u041D\u0435\u0442 \u0441\u043E\u0432\u043F\u0430\u0434\u0435\u043D\u0438\u0439.")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_UiCommandList, null, {
                        default: withCtx(() => [
                          createVNode(_component_UiCommandGroup, {
                            class: ["", _ctx.listClass]
                          }, {
                            default: withCtx(() => [
                              (openBlock(true), createBlock(Fragment, null, renderList(_ctx.items, (item) => {
                                return openBlock(), createBlock(_component_UiCommandItem, {
                                  key: item.value,
                                  value: item.label,
                                  onSelect: ($event) => {
                                    selectedItem(item.value);
                                    open.value = false;
                                  }
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(item.label), 1)
                                  ]),
                                  _: 2
                                }, 1032, ["value", "onSelect"]);
                              }), 128))
                            ]),
                            _: 1
                          }, 8, ["class"])
                        ]),
                        _: 1
                      })
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
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/my/ComboboxModels.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
//# sourceMappingURL=ComboboxModels-D84YuqHH.mjs.map
