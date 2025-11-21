import { _ as _sfc_main$2, a as _sfc_main$1, b as _sfc_main$4 } from './PopoverContent-Dy99cMmu.mjs';
import { _ as _sfc_main$3 } from './index-B6vrBiru.mjs';
import { _ as _sfc_main$5, a as _sfc_main$2$1, b as _sfc_main$6, d as _sfc_main$3$1, e as _sfc_main$1$1 } from './CommandList-DiM7UR93.mjs';
import { defineComponent, ref, unref, isRef, withCtx, createTextVNode, createVNode, toDisplayString, createBlock, createCommentVNode, openBlock, Fragment, renderList, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList } from 'vue/server-renderer';
import { ChevronsUpDown, Check } from 'lucide-vue-next';
import { c as cn } from './utils-TCWotVPY.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Combobox",
  __ssrInlineRender: true,
  props: {
    items: {},
    label: {}
  },
  emits: ["selectedItem"],
  setup(__props, { emit: __emit }) {
    const open = ref(false);
    const value = ref("");
    const newItem = ref("");
    const check = (e) => {
      newItem.value = e.target.value;
      return;
    };
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
      const _component_UiCommandList = _sfc_main$6;
      const _component_UiCommandGroup = _sfc_main$3$1;
      const _component_UiCommandItem = _sfc_main$1$1;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_UiPopover, {
        open: unref(open),
        "onUpdate:open": ($event) => isRef(open) ? open.value = $event : null
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UiPopoverTrigger, { "as-child": "" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_UiButton, {
                    variant: "outline",
                    role: "combobox",
                    "aria-expanded": unref(open),
                    class: "h-10 w-full justify-between"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`${ssrInterpolate(unref(value) ? unref(value) : `${_ctx.label}...`)} `);
                        _push4(ssrRenderComponent(unref(ChevronsUpDown), { class: "ml-2 h-4 w-4 shrink-0 opacity-50" }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createTextVNode(toDisplayString(unref(value) ? unref(value) : `${_ctx.label}...`) + " ", 1),
                          createVNode(unref(ChevronsUpDown), { class: "ml-2 h-4 w-4 shrink-0 opacity-50" })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("div", null, [
                      createVNode(_component_UiButton, {
                        variant: "outline",
                        role: "combobox",
                        "aria-expanded": unref(open),
                        class: "h-10 w-full justify-between"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(unref(value) ? unref(value) : `${_ctx.label}...`) + " ", 1),
                          createVNode(unref(ChevronsUpDown), { class: "ml-2 h-4 w-4 shrink-0 opacity-50" })
                        ]),
                        _: 1
                      }, 8, ["aria-expanded"])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UiPopoverContent, { class: "p-0" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UiCommand, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_UiCommandInput, {
                          class: "h-9",
                          placeholder: "\u041D\u0430\u0439\u0442\u0438 \u0438\u043B\u0438 \u0432\u0432\u0435\u0441\u0442\u0438...",
                          onInput: check
                        }, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_UiCommandList, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_UiCommandGroup, null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`<!--[-->`);
                                    ssrRenderList(_ctx.items, (item) => {
                                      _push6(ssrRenderComponent(_component_UiCommandItem, {
                                        key: item,
                                        value: item,
                                        onSelect: (ev) => {
                                          if (typeof ev.detail.value === "string") {
                                            value.value = ev.detail.value;
                                          }
                                          open.value = false;
                                          selectedItem(unref(value));
                                        }
                                      }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`${ssrInterpolate(item)} `);
                                            _push7(ssrRenderComponent(unref(Check), {
                                              class: unref(cn)(
                                                "ml-auto h-4 w-4",
                                                unref(value) === item ? "opacity-100" : "opacity-0"
                                              )
                                            }, null, _parent7, _scopeId6));
                                          } else {
                                            return [
                                              createTextVNode(toDisplayString(item) + " ", 1),
                                              createVNode(unref(Check), {
                                                class: unref(cn)(
                                                  "ml-auto h-4 w-4",
                                                  unref(value) === item ? "opacity-100" : "opacity-0"
                                                )
                                              }, null, 8, ["class"])
                                            ];
                                          }
                                        }),
                                        _: 2
                                      }, _parent6, _scopeId5));
                                    });
                                    _push6(`<!--]-->`);
                                    if (unref(newItem) !== "") {
                                      _push6(ssrRenderComponent(_component_UiCommandItem, {
                                        key: unref(newItem),
                                        value: unref(newItem),
                                        onSelect: (ev) => {
                                          if (typeof ev.detail.value === "string") {
                                            value.value = ev.detail.value;
                                          }
                                          open.value = false;
                                          selectedItem(unref(value));
                                        }
                                      }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`${ssrInterpolate(unref(newItem))} `);
                                            _push7(ssrRenderComponent(unref(Check), {
                                              class: unref(cn)(
                                                "ml-auto h-4 w-4",
                                                unref(value) === unref(newItem) ? "opacity-100" : "opacity-0"
                                              )
                                            }, null, _parent7, _scopeId6));
                                          } else {
                                            return [
                                              createTextVNode(toDisplayString(unref(newItem)) + " ", 1),
                                              createVNode(unref(Check), {
                                                class: unref(cn)(
                                                  "ml-auto h-4 w-4",
                                                  unref(value) === unref(newItem) ? "opacity-100" : "opacity-0"
                                                )
                                              }, null, 8, ["class"])
                                            ];
                                          }
                                        }),
                                        _: 1
                                      }, _parent6, _scopeId5));
                                    } else {
                                      _push6(`<!---->`);
                                    }
                                  } else {
                                    return [
                                      (openBlock(true), createBlock(Fragment, null, renderList(_ctx.items, (item) => {
                                        return openBlock(), createBlock(_component_UiCommandItem, {
                                          key: item,
                                          value: item,
                                          onSelect: (ev) => {
                                            if (typeof ev.detail.value === "string") {
                                              value.value = ev.detail.value;
                                            }
                                            open.value = false;
                                            selectedItem(unref(value));
                                          }
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(item) + " ", 1),
                                            createVNode(unref(Check), {
                                              class: unref(cn)(
                                                "ml-auto h-4 w-4",
                                                unref(value) === item ? "opacity-100" : "opacity-0"
                                              )
                                            }, null, 8, ["class"])
                                          ]),
                                          _: 2
                                        }, 1032, ["value", "onSelect"]);
                                      }), 128)),
                                      unref(newItem) !== "" ? (openBlock(), createBlock(_component_UiCommandItem, {
                                        key: unref(newItem),
                                        value: unref(newItem),
                                        onSelect: (ev) => {
                                          if (typeof ev.detail.value === "string") {
                                            value.value = ev.detail.value;
                                          }
                                          open.value = false;
                                          selectedItem(unref(value));
                                        }
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(unref(newItem)) + " ", 1),
                                          createVNode(unref(Check), {
                                            class: unref(cn)(
                                              "ml-auto h-4 w-4",
                                              unref(value) === unref(newItem) ? "opacity-100" : "opacity-0"
                                            )
                                          }, null, 8, ["class"])
                                        ]),
                                        _: 1
                                      }, 8, ["value", "onSelect"])) : createCommentVNode("", true)
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_UiCommandGroup, null, {
                                  default: withCtx(() => [
                                    (openBlock(true), createBlock(Fragment, null, renderList(_ctx.items, (item) => {
                                      return openBlock(), createBlock(_component_UiCommandItem, {
                                        key: item,
                                        value: item,
                                        onSelect: (ev) => {
                                          if (typeof ev.detail.value === "string") {
                                            value.value = ev.detail.value;
                                          }
                                          open.value = false;
                                          selectedItem(unref(value));
                                        }
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(item) + " ", 1),
                                          createVNode(unref(Check), {
                                            class: unref(cn)(
                                              "ml-auto h-4 w-4",
                                              unref(value) === item ? "opacity-100" : "opacity-0"
                                            )
                                          }, null, 8, ["class"])
                                        ]),
                                        _: 2
                                      }, 1032, ["value", "onSelect"]);
                                    }), 128)),
                                    unref(newItem) !== "" ? (openBlock(), createBlock(_component_UiCommandItem, {
                                      key: unref(newItem),
                                      value: unref(newItem),
                                      onSelect: (ev) => {
                                        if (typeof ev.detail.value === "string") {
                                          value.value = ev.detail.value;
                                        }
                                        open.value = false;
                                        selectedItem(unref(value));
                                      }
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(unref(newItem)) + " ", 1),
                                        createVNode(unref(Check), {
                                          class: unref(cn)(
                                            "ml-auto h-4 w-4",
                                            unref(value) === unref(newItem) ? "opacity-100" : "opacity-0"
                                          )
                                        }, null, 8, ["class"])
                                      ]),
                                      _: 1
                                    }, 8, ["value", "onSelect"])) : createCommentVNode("", true)
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
                          createVNode(_component_UiCommandInput, {
                            class: "h-9",
                            placeholder: "\u041D\u0430\u0439\u0442\u0438 \u0438\u043B\u0438 \u0432\u0432\u0435\u0441\u0442\u0438...",
                            onInput: check
                          }),
                          createVNode(_component_UiCommandList, null, {
                            default: withCtx(() => [
                              createVNode(_component_UiCommandGroup, null, {
                                default: withCtx(() => [
                                  (openBlock(true), createBlock(Fragment, null, renderList(_ctx.items, (item) => {
                                    return openBlock(), createBlock(_component_UiCommandItem, {
                                      key: item,
                                      value: item,
                                      onSelect: (ev) => {
                                        if (typeof ev.detail.value === "string") {
                                          value.value = ev.detail.value;
                                        }
                                        open.value = false;
                                        selectedItem(unref(value));
                                      }
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(item) + " ", 1),
                                        createVNode(unref(Check), {
                                          class: unref(cn)(
                                            "ml-auto h-4 w-4",
                                            unref(value) === item ? "opacity-100" : "opacity-0"
                                          )
                                        }, null, 8, ["class"])
                                      ]),
                                      _: 2
                                    }, 1032, ["value", "onSelect"]);
                                  }), 128)),
                                  unref(newItem) !== "" ? (openBlock(), createBlock(_component_UiCommandItem, {
                                    key: unref(newItem),
                                    value: unref(newItem),
                                    onSelect: (ev) => {
                                      if (typeof ev.detail.value === "string") {
                                        value.value = ev.detail.value;
                                      }
                                      open.value = false;
                                      selectedItem(unref(value));
                                    }
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(unref(newItem)) + " ", 1),
                                      createVNode(unref(Check), {
                                        class: unref(cn)(
                                          "ml-auto h-4 w-4",
                                          unref(value) === unref(newItem) ? "opacity-100" : "opacity-0"
                                        )
                                      }, null, 8, ["class"])
                                    ]),
                                    _: 1
                                  }, 8, ["value", "onSelect"])) : createCommentVNode("", true)
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
                    createVNode(_component_UiCommand, null, {
                      default: withCtx(() => [
                        createVNode(_component_UiCommandInput, {
                          class: "h-9",
                          placeholder: "\u041D\u0430\u0439\u0442\u0438 \u0438\u043B\u0438 \u0432\u0432\u0435\u0441\u0442\u0438...",
                          onInput: check
                        }),
                        createVNode(_component_UiCommandList, null, {
                          default: withCtx(() => [
                            createVNode(_component_UiCommandGroup, null, {
                              default: withCtx(() => [
                                (openBlock(true), createBlock(Fragment, null, renderList(_ctx.items, (item) => {
                                  return openBlock(), createBlock(_component_UiCommandItem, {
                                    key: item,
                                    value: item,
                                    onSelect: (ev) => {
                                      if (typeof ev.detail.value === "string") {
                                        value.value = ev.detail.value;
                                      }
                                      open.value = false;
                                      selectedItem(unref(value));
                                    }
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(item) + " ", 1),
                                      createVNode(unref(Check), {
                                        class: unref(cn)(
                                          "ml-auto h-4 w-4",
                                          unref(value) === item ? "opacity-100" : "opacity-0"
                                        )
                                      }, null, 8, ["class"])
                                    ]),
                                    _: 2
                                  }, 1032, ["value", "onSelect"]);
                                }), 128)),
                                unref(newItem) !== "" ? (openBlock(), createBlock(_component_UiCommandItem, {
                                  key: unref(newItem),
                                  value: unref(newItem),
                                  onSelect: (ev) => {
                                    if (typeof ev.detail.value === "string") {
                                      value.value = ev.detail.value;
                                    }
                                    open.value = false;
                                    selectedItem(unref(value));
                                  }
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(unref(newItem)) + " ", 1),
                                    createVNode(unref(Check), {
                                      class: unref(cn)(
                                        "ml-auto h-4 w-4",
                                        unref(value) === unref(newItem) ? "opacity-100" : "opacity-0"
                                      )
                                    }, null, 8, ["class"])
                                  ]),
                                  _: 1
                                }, 8, ["value", "onSelect"])) : createCommentVNode("", true)
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
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UiPopoverTrigger, { "as-child": "" }, {
                default: withCtx(() => [
                  createVNode("div", null, [
                    createVNode(_component_UiButton, {
                      variant: "outline",
                      role: "combobox",
                      "aria-expanded": unref(open),
                      class: "h-10 w-full justify-between"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(unref(value) ? unref(value) : `${_ctx.label}...`) + " ", 1),
                        createVNode(unref(ChevronsUpDown), { class: "ml-2 h-4 w-4 shrink-0 opacity-50" })
                      ]),
                      _: 1
                    }, 8, ["aria-expanded"])
                  ])
                ]),
                _: 1
              }),
              createVNode(_component_UiPopoverContent, { class: "p-0" }, {
                default: withCtx(() => [
                  createVNode(_component_UiCommand, null, {
                    default: withCtx(() => [
                      createVNode(_component_UiCommandInput, {
                        class: "h-9",
                        placeholder: "\u041D\u0430\u0439\u0442\u0438 \u0438\u043B\u0438 \u0432\u0432\u0435\u0441\u0442\u0438...",
                        onInput: check
                      }),
                      createVNode(_component_UiCommandList, null, {
                        default: withCtx(() => [
                          createVNode(_component_UiCommandGroup, null, {
                            default: withCtx(() => [
                              (openBlock(true), createBlock(Fragment, null, renderList(_ctx.items, (item) => {
                                return openBlock(), createBlock(_component_UiCommandItem, {
                                  key: item,
                                  value: item,
                                  onSelect: (ev) => {
                                    if (typeof ev.detail.value === "string") {
                                      value.value = ev.detail.value;
                                    }
                                    open.value = false;
                                    selectedItem(unref(value));
                                  }
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(item) + " ", 1),
                                    createVNode(unref(Check), {
                                      class: unref(cn)(
                                        "ml-auto h-4 w-4",
                                        unref(value) === item ? "opacity-100" : "opacity-0"
                                      )
                                    }, null, 8, ["class"])
                                  ]),
                                  _: 2
                                }, 1032, ["value", "onSelect"]);
                              }), 128)),
                              unref(newItem) !== "" ? (openBlock(), createBlock(_component_UiCommandItem, {
                                key: unref(newItem),
                                value: unref(newItem),
                                onSelect: (ev) => {
                                  if (typeof ev.detail.value === "string") {
                                    value.value = ev.detail.value;
                                  }
                                  open.value = false;
                                  selectedItem(unref(value));
                                }
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(unref(newItem)) + " ", 1),
                                  createVNode(unref(Check), {
                                    class: unref(cn)(
                                      "ml-auto h-4 w-4",
                                      unref(value) === unref(newItem) ? "opacity-100" : "opacity-0"
                                    )
                                  }, null, 8, ["class"])
                                ]),
                                _: 1
                              }, 8, ["value", "onSelect"])) : createCommentVNode("", true)
                            ]),
                            _: 1
                          })
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
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/my/Combobox.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
//# sourceMappingURL=Combobox-kxEuhT4H.mjs.map
