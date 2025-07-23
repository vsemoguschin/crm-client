import { _ as _sfc_main$5, a as _sfc_main$6$1, b as _sfc_main$5$1, c as _sfc_main$4$2, e as _sfc_main$3$5 } from './Sidebar-D29xHklW.mjs';
import { _ as _sfc_main$2$1, a as _sfc_main$6, b as _sfc_main$1$1 } from './TabsList-DbIwKgY4.mjs';
import { _ as _sfc_main$7 } from './TabsContent-CO2mHCzx.mjs';
import { _ as _sfc_main$4$1, a as _sfc_main$3$1, b as _sfc_main$8, c as _sfc_main$2$2, d as _sfc_main$1$2 } from './DialogContent-N24W_Bx3.mjs';
import { _ as _sfc_main$9 } from './DialogDescription-CHHvh8Oz.mjs';
import { _ as _sfc_main$c, v as valueUpdater, c as cn } from './isLoading-BbWzubgi.mjs';
import { _ as _sfc_main$2$3, a as _sfc_main$1$3, b as _sfc_main$3$2, c as _sfc_main$f } from './FormMessage-vW1GrBng.mjs';
import { useForm, Field } from 'vee-validate';
import { _ as _sfc_main$2$4, a as _sfc_main$1$4, b as _sfc_main$d } from './PopoverContent-Bm4609Rb.mjs';
import { _ as _sfc_main$3$3, a as _sfc_main$e, b as _sfc_main$2$5, c as _sfc_main$1$5 } from './CommandList-CkzhgsM2.mjs';
import { _ as _sfc_main$b } from './Input-DBSZ1Mdv.mjs';
import { defineComponent, ref, mergeProps, unref, isRef, withCtx, createTextVNode, toDisplayString, createBlock, openBlock, Fragment, renderList, createVNode, h, createCommentVNode, computed, renderSlot, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderAttr, ssrRenderSlot } from 'vue/server-renderer';
import { toTypedSchema } from '@vee-validate/zod';
import * as z from 'zod';
import { a as useNuxtApp } from './server.mjs';
import { useForwardPropsEmits, DropdownMenuCheckboxItem, DropdownMenuItemIndicator } from 'radix-vue';
import { ChevronDown, Check, MoreHorizontal } from 'lucide-vue-next';
import { _ as _sfc_main$5$2, a as _sfc_main$g, b as _sfc_main$2$6, c as _sfc_main$1$6, d as _sfc_main$4$3, e as _sfc_main$3$4 } from './TableHeader-pVk7uQ16.mjs';
import { useVueTable, getCoreRowModel, FlexRender } from '@tanstack/vue-table';
import { _ as _sfc_main$a } from './Label-B6Kf4x8e.mjs';
import { u as useHead } from './v3-BEwgjOp-.mjs';
import 'class-variance-authority';
import 'clsx';
import 'tailwind-merge';
import 'pinia';
import '@vueuse/core';
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
import 'ipx';
import 'vue-router';
import '@iconify/vue';
import 'axios';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import 'unhead/plugins';

const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "DropdownMenuCheckboxItem",
  __ssrInlineRender: true,
  props: {
    checked: { type: [Boolean, String] },
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: { type: [String, Object, Function] },
    class: {}
  },
  emits: ["select", "update:checked"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const delegatedProps = computed(() => {
      const { class: _, ...delegated } = props;
      return delegated;
    });
    const forwarded = useForwardPropsEmits(delegatedProps, emits);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(DropdownMenuCheckboxItem), mergeProps(unref(forwarded), {
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
                  _push3(ssrRenderComponent(unref(Check), { class: "w-4 h-4" }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(Check), { class: "w-4 h-4" })
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
                    createVNode(unref(Check), { class: "w-4 h-4" })
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
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/dropdown-menu/DropdownMenuCheckboxItem.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "CreateModal",
  __ssrInlineRender: true,
  props: {
    group: {}
  },
  emits: ["user-created"],
  setup(__props, { emit: __emit }) {
    const { $useApi } = useNuxtApp();
    const props = __props;
    const rolesList = ref([]);
    const formSchema = toTypedSchema(
      z.object({
        fullName: z.string().min(2),
        tg: z.string().min(2),
        email: z.string().min(2),
        password: z.string().min(2),
        roleId: z.number({
          required_error: "Please select a role."
        })
      })
    );
    const { handleSubmit, setValues, values } = useForm({
      validationSchema: formSchema
    });
    const isOpen = ref(false);
    const emit = __emit;
    const onSubmit = handleSubmit(async (values2) => {
      console.log(values2);
      const newUser = {
        ...values2,
        workSpaceId: props.group.workSpaceId,
        groupId: props.group.id
      };
      const { data: createdUser } = await $useApi.post(`/users`, {
        ...newUser
      });
      if (createdUser) {
        emit("user-created", createdUser);
        isOpen.value = false;
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UiDialog = _sfc_main$4$1;
      const _component_UiDialogTrigger = _sfc_main$3$1;
      const _component_UiButton = _sfc_main$c;
      const _component_UiDialogContent = _sfc_main$8;
      const _component_UiDialogHeader = _sfc_main$2$2;
      const _component_UiDialogTitle = _sfc_main$1$2;
      const _component_UiDialogDescription = _sfc_main$9;
      const _component_UiFormField = Field;
      const _component_UiFormItem = _sfc_main$2$3;
      const _component_UiFormLabel = _sfc_main$1$3;
      const _component_UiPopover = _sfc_main$2$4;
      const _component_UiPopoverTrigger = _sfc_main$1$4;
      const _component_UiFormControl = _sfc_main$3$2;
      const _component_UiPopoverContent = _sfc_main$d;
      const _component_UiCommand = _sfc_main$3$3;
      const _component_UiCommandList = _sfc_main$e;
      const _component_UiCommandGroup = _sfc_main$2$5;
      const _component_UiCommandItem = _sfc_main$1$5;
      const _component_UiFormMessage = _sfc_main$f;
      const _component_UiInput = _sfc_main$b;
      _push(ssrRenderComponent(_component_UiDialog, mergeProps({
        open: unref(isOpen),
        "onUpdate:open": ($event) => isRef(isOpen) ? isOpen.value = $event : null
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UiDialogTrigger, { "as-child": "" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div${ssrRenderAttr("aria-hidden", unref(isOpen) ? "false" : "true")}${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_UiButton, { class: "h-8 px-2 py-0 absolute mt-1 text-nowrap" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` \u0421\u043E\u0437\u0434\u0430\u0442\u044C \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F `);
                      } else {
                        return [
                          createTextVNode(" \u0421\u043E\u0437\u0434\u0430\u0442\u044C \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("div", {
                      "aria-hidden": unref(isOpen) ? "false" : "true"
                    }, [
                      createVNode(_component_UiButton, { class: "h-8 px-2 py-0 absolute mt-1 text-nowrap" }, {
                        default: withCtx(() => [
                          createTextVNode(" \u0421\u043E\u0437\u0434\u0430\u0442\u044C \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F ")
                        ]),
                        _: 1
                      })
                    ], 8, ["aria-hidden"])
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
                              _push5(`\u0421\u043E\u0437\u0434\u0430\u0442\u044C`);
                            } else {
                              return [
                                createTextVNode("\u0421\u043E\u0437\u0434\u0430\u0442\u044C")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_UiDialogTitle, null, {
                            default: withCtx(() => [
                              createTextVNode("\u0421\u043E\u0437\u0434\u0430\u0442\u044C")
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_UiDialogDescription, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` \u0417\u0430\u043F\u043E\u043B\u043D\u0438 \u0444\u043E\u0440\u043C\u0443 `);
                      } else {
                        return [
                          createTextVNode(" \u0417\u0430\u043F\u043E\u043B\u043D\u0438 \u0444\u043E\u0440\u043C\u0443 ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`<form class="flex flex-col gap-2"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_UiFormField, { name: "role" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_UiFormItem, { class: "flex flex-col" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_UiFormLabel, null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`\u0420\u043E\u043B\u044C`);
                                  } else {
                                    return [
                                      createTextVNode("\u0420\u043E\u043B\u044C")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_UiPopover, null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_UiPopoverTrigger, { "as-child": "" }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(_component_UiFormControl, null, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(`<div${ssrRenderAttr("aria-hidden", unref(isOpen) ? "false" : "true")} class="w-full"${_scopeId7}>`);
                                                _push8(ssrRenderComponent(_component_UiButton, {
                                                  variant: "outline",
                                                  role: "combobox",
                                                  class: "w-full"
                                                }, {
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    var _a, _b;
                                                    if (_push9) {
                                                      _push9(`${ssrInterpolate(unref(values).roleId ? (_a = unref(rolesList).find((role) => role.id === unref(values).roleId)) == null ? void 0 : _a.fullName : "\u0412\u044B\u0431\u0435\u0440\u0438 \u0440\u043E\u043B\u044C...")}`);
                                                    } else {
                                                      return [
                                                        createTextVNode(toDisplayString(unref(values).roleId ? (_b = unref(rolesList).find((role) => role.id === unref(values).roleId)) == null ? void 0 : _b.fullName : "\u0412\u044B\u0431\u0435\u0440\u0438 \u0440\u043E\u043B\u044C..."), 1)
                                                      ];
                                                    }
                                                  }),
                                                  _: 1
                                                }, _parent8, _scopeId7));
                                                _push8(`</div>`);
                                              } else {
                                                return [
                                                  createVNode("div", {
                                                    "aria-hidden": unref(isOpen) ? "false" : "true",
                                                    class: "w-full"
                                                  }, [
                                                    createVNode(_component_UiButton, {
                                                      variant: "outline",
                                                      role: "combobox",
                                                      class: "w-full"
                                                    }, {
                                                      default: withCtx(() => {
                                                        var _a;
                                                        return [
                                                          createTextVNode(toDisplayString(unref(values).roleId ? (_a = unref(rolesList).find((role) => role.id === unref(values).roleId)) == null ? void 0 : _a.fullName : "\u0412\u044B\u0431\u0435\u0440\u0438 \u0440\u043E\u043B\u044C..."), 1)
                                                        ];
                                                      }),
                                                      _: 1
                                                    })
                                                  ], 8, ["aria-hidden"])
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(_component_UiFormControl, null, {
                                              default: withCtx(() => [
                                                createVNode("div", {
                                                  "aria-hidden": unref(isOpen) ? "false" : "true",
                                                  class: "w-full"
                                                }, [
                                                  createVNode(_component_UiButton, {
                                                    variant: "outline",
                                                    role: "combobox",
                                                    class: "w-full"
                                                  }, {
                                                    default: withCtx(() => {
                                                      var _a;
                                                      return [
                                                        createTextVNode(toDisplayString(unref(values).roleId ? (_a = unref(rolesList).find((role) => role.id === unref(values).roleId)) == null ? void 0 : _a.fullName : "\u0412\u044B\u0431\u0435\u0440\u0438 \u0440\u043E\u043B\u044C..."), 1)
                                                      ];
                                                    }),
                                                    _: 1
                                                  })
                                                ], 8, ["aria-hidden"])
                                              ]),
                                              _: 1
                                            })
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(_component_UiPopoverContent, { class: "w-[200px] p-0" }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(_component_UiCommand, null, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(_component_UiCommandList, null, {
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(ssrRenderComponent(_component_UiCommandGroup, null, {
                                                        default: withCtx((_9, _push10, _parent10, _scopeId9) => {
                                                          if (_push10) {
                                                            _push10(`<!--[-->`);
                                                            ssrRenderList(unref(rolesList), (role) => {
                                                              _push10(ssrRenderComponent(_component_UiCommandItem, {
                                                                key: role.id,
                                                                value: role.id,
                                                                onSelect: () => {
                                                                  unref(setValues)({
                                                                    roleId: role.id
                                                                  });
                                                                }
                                                              }, {
                                                                default: withCtx((_10, _push11, _parent11, _scopeId10) => {
                                                                  if (_push11) {
                                                                    _push11(`${ssrInterpolate(role.fullName)}`);
                                                                  } else {
                                                                    return [
                                                                      createTextVNode(toDisplayString(role.fullName), 1)
                                                                    ];
                                                                  }
                                                                }),
                                                                _: 2
                                                              }, _parent10, _scopeId9));
                                                            });
                                                            _push10(`<!--]-->`);
                                                          } else {
                                                            return [
                                                              (openBlock(true), createBlock(Fragment, null, renderList(unref(rolesList), (role) => {
                                                                return openBlock(), createBlock(_component_UiCommandItem, {
                                                                  key: role.id,
                                                                  value: role.id,
                                                                  onSelect: () => {
                                                                    unref(setValues)({
                                                                      roleId: role.id
                                                                    });
                                                                  }
                                                                }, {
                                                                  default: withCtx(() => [
                                                                    createTextVNode(toDisplayString(role.fullName), 1)
                                                                  ]),
                                                                  _: 2
                                                                }, 1032, ["value", "onSelect"]);
                                                              }), 128))
                                                            ];
                                                          }
                                                        }),
                                                        _: 1
                                                      }, _parent9, _scopeId8));
                                                    } else {
                                                      return [
                                                        createVNode(_component_UiCommandGroup, null, {
                                                          default: withCtx(() => [
                                                            (openBlock(true), createBlock(Fragment, null, renderList(unref(rolesList), (role) => {
                                                              return openBlock(), createBlock(_component_UiCommandItem, {
                                                                key: role.id,
                                                                value: role.id,
                                                                onSelect: () => {
                                                                  unref(setValues)({
                                                                    roleId: role.id
                                                                  });
                                                                }
                                                              }, {
                                                                default: withCtx(() => [
                                                                  createTextVNode(toDisplayString(role.fullName), 1)
                                                                ]),
                                                                _: 2
                                                              }, 1032, ["value", "onSelect"]);
                                                            }), 128))
                                                          ]),
                                                          _: 1
                                                        })
                                                      ];
                                                    }
                                                  }),
                                                  _: 1
                                                }, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(_component_UiCommandList, null, {
                                                    default: withCtx(() => [
                                                      createVNode(_component_UiCommandGroup, null, {
                                                        default: withCtx(() => [
                                                          (openBlock(true), createBlock(Fragment, null, renderList(unref(rolesList), (role) => {
                                                            return openBlock(), createBlock(_component_UiCommandItem, {
                                                              key: role.id,
                                                              value: role.id,
                                                              onSelect: () => {
                                                                unref(setValues)({
                                                                  roleId: role.id
                                                                });
                                                              }
                                                            }, {
                                                              default: withCtx(() => [
                                                                createTextVNode(toDisplayString(role.fullName), 1)
                                                              ]),
                                                              _: 2
                                                            }, 1032, ["value", "onSelect"]);
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
                                          }, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(_component_UiCommand, null, {
                                              default: withCtx(() => [
                                                createVNode(_component_UiCommandList, null, {
                                                  default: withCtx(() => [
                                                    createVNode(_component_UiCommandGroup, null, {
                                                      default: withCtx(() => [
                                                        (openBlock(true), createBlock(Fragment, null, renderList(unref(rolesList), (role) => {
                                                          return openBlock(), createBlock(_component_UiCommandItem, {
                                                            key: role.id,
                                                            value: role.id,
                                                            onSelect: () => {
                                                              unref(setValues)({
                                                                roleId: role.id
                                                              });
                                                            }
                                                          }, {
                                                            default: withCtx(() => [
                                                              createTextVNode(toDisplayString(role.fullName), 1)
                                                            ]),
                                                            _: 2
                                                          }, 1032, ["value", "onSelect"]);
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
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_UiPopoverTrigger, { "as-child": "" }, {
                                        default: withCtx(() => [
                                          createVNode(_component_UiFormControl, null, {
                                            default: withCtx(() => [
                                              createVNode("div", {
                                                "aria-hidden": unref(isOpen) ? "false" : "true",
                                                class: "w-full"
                                              }, [
                                                createVNode(_component_UiButton, {
                                                  variant: "outline",
                                                  role: "combobox",
                                                  class: "w-full"
                                                }, {
                                                  default: withCtx(() => {
                                                    var _a;
                                                    return [
                                                      createTextVNode(toDisplayString(unref(values).roleId ? (_a = unref(rolesList).find((role) => role.id === unref(values).roleId)) == null ? void 0 : _a.fullName : "\u0412\u044B\u0431\u0435\u0440\u0438 \u0440\u043E\u043B\u044C..."), 1)
                                                    ];
                                                  }),
                                                  _: 1
                                                })
                                              ], 8, ["aria-hidden"])
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_UiPopoverContent, { class: "w-[200px] p-0" }, {
                                        default: withCtx(() => [
                                          createVNode(_component_UiCommand, null, {
                                            default: withCtx(() => [
                                              createVNode(_component_UiCommandList, null, {
                                                default: withCtx(() => [
                                                  createVNode(_component_UiCommandGroup, null, {
                                                    default: withCtx(() => [
                                                      (openBlock(true), createBlock(Fragment, null, renderList(unref(rolesList), (role) => {
                                                        return openBlock(), createBlock(_component_UiCommandItem, {
                                                          key: role.id,
                                                          value: role.id,
                                                          onSelect: () => {
                                                            unref(setValues)({
                                                              roleId: role.id
                                                            });
                                                          }
                                                        }, {
                                                          default: withCtx(() => [
                                                            createTextVNode(toDisplayString(role.fullName), 1)
                                                          ]),
                                                          _: 2
                                                        }, 1032, ["value", "onSelect"]);
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
                                        ]),
                                        _: 1
                                      })
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_UiFormMessage, null, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_UiFormLabel, null, {
                                  default: withCtx(() => [
                                    createTextVNode("\u0420\u043E\u043B\u044C")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_UiPopover, null, {
                                  default: withCtx(() => [
                                    createVNode(_component_UiPopoverTrigger, { "as-child": "" }, {
                                      default: withCtx(() => [
                                        createVNode(_component_UiFormControl, null, {
                                          default: withCtx(() => [
                                            createVNode("div", {
                                              "aria-hidden": unref(isOpen) ? "false" : "true",
                                              class: "w-full"
                                            }, [
                                              createVNode(_component_UiButton, {
                                                variant: "outline",
                                                role: "combobox",
                                                class: "w-full"
                                              }, {
                                                default: withCtx(() => {
                                                  var _a;
                                                  return [
                                                    createTextVNode(toDisplayString(unref(values).roleId ? (_a = unref(rolesList).find((role) => role.id === unref(values).roleId)) == null ? void 0 : _a.fullName : "\u0412\u044B\u0431\u0435\u0440\u0438 \u0440\u043E\u043B\u044C..."), 1)
                                                  ];
                                                }),
                                                _: 1
                                              })
                                            ], 8, ["aria-hidden"])
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_UiPopoverContent, { class: "w-[200px] p-0" }, {
                                      default: withCtx(() => [
                                        createVNode(_component_UiCommand, null, {
                                          default: withCtx(() => [
                                            createVNode(_component_UiCommandList, null, {
                                              default: withCtx(() => [
                                                createVNode(_component_UiCommandGroup, null, {
                                                  default: withCtx(() => [
                                                    (openBlock(true), createBlock(Fragment, null, renderList(unref(rolesList), (role) => {
                                                      return openBlock(), createBlock(_component_UiCommandItem, {
                                                        key: role.id,
                                                        value: role.id,
                                                        onSelect: () => {
                                                          unref(setValues)({
                                                            roleId: role.id
                                                          });
                                                        }
                                                      }, {
                                                        default: withCtx(() => [
                                                          createTextVNode(toDisplayString(role.fullName), 1)
                                                        ]),
                                                        _: 2
                                                      }, 1032, ["value", "onSelect"]);
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
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_UiFormMessage)
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_UiFormItem, { class: "flex flex-col" }, {
                            default: withCtx(() => [
                              createVNode(_component_UiFormLabel, null, {
                                default: withCtx(() => [
                                  createTextVNode("\u0420\u043E\u043B\u044C")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_UiPopover, null, {
                                default: withCtx(() => [
                                  createVNode(_component_UiPopoverTrigger, { "as-child": "" }, {
                                    default: withCtx(() => [
                                      createVNode(_component_UiFormControl, null, {
                                        default: withCtx(() => [
                                          createVNode("div", {
                                            "aria-hidden": unref(isOpen) ? "false" : "true",
                                            class: "w-full"
                                          }, [
                                            createVNode(_component_UiButton, {
                                              variant: "outline",
                                              role: "combobox",
                                              class: "w-full"
                                            }, {
                                              default: withCtx(() => {
                                                var _a;
                                                return [
                                                  createTextVNode(toDisplayString(unref(values).roleId ? (_a = unref(rolesList).find((role) => role.id === unref(values).roleId)) == null ? void 0 : _a.fullName : "\u0412\u044B\u0431\u0435\u0440\u0438 \u0440\u043E\u043B\u044C..."), 1)
                                                ];
                                              }),
                                              _: 1
                                            })
                                          ], 8, ["aria-hidden"])
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_UiPopoverContent, { class: "w-[200px] p-0" }, {
                                    default: withCtx(() => [
                                      createVNode(_component_UiCommand, null, {
                                        default: withCtx(() => [
                                          createVNode(_component_UiCommandList, null, {
                                            default: withCtx(() => [
                                              createVNode(_component_UiCommandGroup, null, {
                                                default: withCtx(() => [
                                                  (openBlock(true), createBlock(Fragment, null, renderList(unref(rolesList), (role) => {
                                                    return openBlock(), createBlock(_component_UiCommandItem, {
                                                      key: role.id,
                                                      value: role.id,
                                                      onSelect: () => {
                                                        unref(setValues)({
                                                          roleId: role.id
                                                        });
                                                      }
                                                    }, {
                                                      default: withCtx(() => [
                                                        createTextVNode(toDisplayString(role.fullName), 1)
                                                      ]),
                                                      _: 2
                                                    }, 1032, ["value", "onSelect"]);
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
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode(_component_UiFormMessage)
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_UiFormField, { name: "fullName" }, {
                    default: withCtx(({ componentField }, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_UiFormItem, null, {
                          default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_UiFormLabel, null, {
                                default: withCtx((_4, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`\u0418\u043C\u044F`);
                                  } else {
                                    return [
                                      createTextVNode("\u0418\u043C\u044F")
                                    ];
                                  }
                                }),
                                _: 2
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_UiFormControl, null, {
                                default: withCtx((_4, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_UiInput, mergeProps({
                                      type: "text",
                                      placeholder: "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435"
                                    }, componentField), null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_UiInput, mergeProps({
                                        type: "text",
                                        placeholder: "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435"
                                      }, componentField), null, 16)
                                    ];
                                  }
                                }),
                                _: 2
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_UiFormMessage, null, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_UiFormLabel, null, {
                                  default: withCtx(() => [
                                    createTextVNode("\u0418\u043C\u044F")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_UiFormControl, null, {
                                  default: withCtx(() => [
                                    createVNode(_component_UiInput, mergeProps({
                                      type: "text",
                                      placeholder: "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435"
                                    }, componentField), null, 16)
                                  ]),
                                  _: 2
                                }, 1024),
                                createVNode(_component_UiFormMessage)
                              ];
                            }
                          }),
                          _: 2
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_UiFormItem, null, {
                            default: withCtx(() => [
                              createVNode(_component_UiFormLabel, null, {
                                default: withCtx(() => [
                                  createTextVNode("\u0418\u043C\u044F")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_UiFormControl, null, {
                                default: withCtx(() => [
                                  createVNode(_component_UiInput, mergeProps({
                                    type: "text",
                                    placeholder: "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435"
                                  }, componentField), null, 16)
                                ]),
                                _: 2
                              }, 1024),
                              createVNode(_component_UiFormMessage)
                            ]),
                            _: 2
                          }, 1024)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_UiFormField, { name: "email" }, {
                    default: withCtx(({ componentField }, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_UiFormItem, null, {
                          default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_UiFormLabel, null, {
                                default: withCtx((_4, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`Email(login)`);
                                  } else {
                                    return [
                                      createTextVNode("Email(login)")
                                    ];
                                  }
                                }),
                                _: 2
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_UiFormControl, null, {
                                default: withCtx((_4, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_UiInput, mergeProps({
                                      type: "text",
                                      placeholder: "login"
                                    }, componentField), null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_UiInput, mergeProps({
                                        type: "text",
                                        placeholder: "login"
                                      }, componentField), null, 16)
                                    ];
                                  }
                                }),
                                _: 2
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_UiFormMessage, null, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_UiFormLabel, null, {
                                  default: withCtx(() => [
                                    createTextVNode("Email(login)")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_UiFormControl, null, {
                                  default: withCtx(() => [
                                    createVNode(_component_UiInput, mergeProps({
                                      type: "text",
                                      placeholder: "login"
                                    }, componentField), null, 16)
                                  ]),
                                  _: 2
                                }, 1024),
                                createVNode(_component_UiFormMessage)
                              ];
                            }
                          }),
                          _: 2
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_UiFormItem, null, {
                            default: withCtx(() => [
                              createVNode(_component_UiFormLabel, null, {
                                default: withCtx(() => [
                                  createTextVNode("Email(login)")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_UiFormControl, null, {
                                default: withCtx(() => [
                                  createVNode(_component_UiInput, mergeProps({
                                    type: "text",
                                    placeholder: "login"
                                  }, componentField), null, 16)
                                ]),
                                _: 2
                              }, 1024),
                              createVNode(_component_UiFormMessage)
                            ]),
                            _: 2
                          }, 1024)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_UiFormField, { name: "password" }, {
                    default: withCtx(({ componentField }, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_UiFormItem, null, {
                          default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_UiFormLabel, null, {
                                default: withCtx((_4, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`\u041F\u0430\u0440\u043E\u043B\u044C`);
                                  } else {
                                    return [
                                      createTextVNode("\u041F\u0430\u0440\u043E\u043B\u044C")
                                    ];
                                  }
                                }),
                                _: 2
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_UiFormControl, null, {
                                default: withCtx((_4, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_UiInput, mergeProps({
                                      type: "text",
                                      placeholder: "\u043F\u0430\u043B\u043E\u043B\u044C"
                                    }, componentField), null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_UiInput, mergeProps({
                                        type: "text",
                                        placeholder: "\u043F\u0430\u043B\u043E\u043B\u044C"
                                      }, componentField), null, 16)
                                    ];
                                  }
                                }),
                                _: 2
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_UiFormMessage, null, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_UiFormLabel, null, {
                                  default: withCtx(() => [
                                    createTextVNode("\u041F\u0430\u0440\u043E\u043B\u044C")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_UiFormControl, null, {
                                  default: withCtx(() => [
                                    createVNode(_component_UiInput, mergeProps({
                                      type: "text",
                                      placeholder: "\u043F\u0430\u043B\u043E\u043B\u044C"
                                    }, componentField), null, 16)
                                  ]),
                                  _: 2
                                }, 1024),
                                createVNode(_component_UiFormMessage)
                              ];
                            }
                          }),
                          _: 2
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_UiFormItem, null, {
                            default: withCtx(() => [
                              createVNode(_component_UiFormLabel, null, {
                                default: withCtx(() => [
                                  createTextVNode("\u041F\u0430\u0440\u043E\u043B\u044C")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_UiFormControl, null, {
                                default: withCtx(() => [
                                  createVNode(_component_UiInput, mergeProps({
                                    type: "text",
                                    placeholder: "\u043F\u0430\u043B\u043E\u043B\u044C"
                                  }, componentField), null, 16)
                                ]),
                                _: 2
                              }, 1024),
                              createVNode(_component_UiFormMessage)
                            ]),
                            _: 2
                          }, 1024)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_UiFormField, { name: "tg" }, {
                    default: withCtx(({ componentField }, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_UiFormItem, null, {
                          default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_UiFormLabel, null, {
                                default: withCtx((_4, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`\u0421\u0441\u044B\u043B\u043A\u0430 \u043D\u0430 \u0442\u0435\u043B\u0435\u0433\u0440\u0430\u043C`);
                                  } else {
                                    return [
                                      createTextVNode("\u0421\u0441\u044B\u043B\u043A\u0430 \u043D\u0430 \u0442\u0435\u043B\u0435\u0433\u0440\u0430\u043C")
                                    ];
                                  }
                                }),
                                _: 2
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_UiFormControl, null, {
                                default: withCtx((_4, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_UiInput, mergeProps({
                                      type: "text",
                                      placeholder: "telegram"
                                    }, componentField), null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_UiInput, mergeProps({
                                        type: "text",
                                        placeholder: "telegram"
                                      }, componentField), null, 16)
                                    ];
                                  }
                                }),
                                _: 2
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_UiFormMessage, null, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_UiFormLabel, null, {
                                  default: withCtx(() => [
                                    createTextVNode("\u0421\u0441\u044B\u043B\u043A\u0430 \u043D\u0430 \u0442\u0435\u043B\u0435\u0433\u0440\u0430\u043C")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_UiFormControl, null, {
                                  default: withCtx(() => [
                                    createVNode(_component_UiInput, mergeProps({
                                      type: "text",
                                      placeholder: "telegram"
                                    }, componentField), null, 16)
                                  ]),
                                  _: 2
                                }, 1024),
                                createVNode(_component_UiFormMessage)
                              ];
                            }
                          }),
                          _: 2
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_UiFormItem, null, {
                            default: withCtx(() => [
                              createVNode(_component_UiFormLabel, null, {
                                default: withCtx(() => [
                                  createTextVNode("\u0421\u0441\u044B\u043B\u043A\u0430 \u043D\u0430 \u0442\u0435\u043B\u0435\u0433\u0440\u0430\u043C")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_UiFormControl, null, {
                                default: withCtx(() => [
                                  createVNode(_component_UiInput, mergeProps({
                                    type: "text",
                                    placeholder: "telegram"
                                  }, componentField), null, 16)
                                ]),
                                _: 2
                              }, 1024),
                              createVNode(_component_UiFormMessage)
                            ]),
                            _: 2
                          }, 1024)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_UiButton, {
                    class: "ml-auto",
                    type: "submit"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` \u0421\u043E\u0437\u0434\u0430\u0442\u044C `);
                      } else {
                        return [
                          createTextVNode(" \u0421\u043E\u0437\u0434\u0430\u0442\u044C ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</form>`);
                } else {
                  return [
                    createVNode(_component_UiDialogHeader, null, {
                      default: withCtx(() => [
                        createVNode(_component_UiDialogTitle, null, {
                          default: withCtx(() => [
                            createTextVNode("\u0421\u043E\u0437\u0434\u0430\u0442\u044C")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(_component_UiDialogDescription, null, {
                      default: withCtx(() => [
                        createTextVNode(" \u0417\u0430\u043F\u043E\u043B\u043D\u0438 \u0444\u043E\u0440\u043C\u0443 ")
                      ]),
                      _: 1
                    }),
                    createVNode("form", {
                      class: "flex flex-col gap-2",
                      onSubmit: unref(onSubmit)
                    }, [
                      createVNode(_component_UiFormField, { name: "role" }, {
                        default: withCtx(() => [
                          createVNode(_component_UiFormItem, { class: "flex flex-col" }, {
                            default: withCtx(() => [
                              createVNode(_component_UiFormLabel, null, {
                                default: withCtx(() => [
                                  createTextVNode("\u0420\u043E\u043B\u044C")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_UiPopover, null, {
                                default: withCtx(() => [
                                  createVNode(_component_UiPopoverTrigger, { "as-child": "" }, {
                                    default: withCtx(() => [
                                      createVNode(_component_UiFormControl, null, {
                                        default: withCtx(() => [
                                          createVNode("div", {
                                            "aria-hidden": unref(isOpen) ? "false" : "true",
                                            class: "w-full"
                                          }, [
                                            createVNode(_component_UiButton, {
                                              variant: "outline",
                                              role: "combobox",
                                              class: "w-full"
                                            }, {
                                              default: withCtx(() => {
                                                var _a;
                                                return [
                                                  createTextVNode(toDisplayString(unref(values).roleId ? (_a = unref(rolesList).find((role) => role.id === unref(values).roleId)) == null ? void 0 : _a.fullName : "\u0412\u044B\u0431\u0435\u0440\u0438 \u0440\u043E\u043B\u044C..."), 1)
                                                ];
                                              }),
                                              _: 1
                                            })
                                          ], 8, ["aria-hidden"])
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_UiPopoverContent, { class: "w-[200px] p-0" }, {
                                    default: withCtx(() => [
                                      createVNode(_component_UiCommand, null, {
                                        default: withCtx(() => [
                                          createVNode(_component_UiCommandList, null, {
                                            default: withCtx(() => [
                                              createVNode(_component_UiCommandGroup, null, {
                                                default: withCtx(() => [
                                                  (openBlock(true), createBlock(Fragment, null, renderList(unref(rolesList), (role) => {
                                                    return openBlock(), createBlock(_component_UiCommandItem, {
                                                      key: role.id,
                                                      value: role.id,
                                                      onSelect: () => {
                                                        unref(setValues)({
                                                          roleId: role.id
                                                        });
                                                      }
                                                    }, {
                                                      default: withCtx(() => [
                                                        createTextVNode(toDisplayString(role.fullName), 1)
                                                      ]),
                                                      _: 2
                                                    }, 1032, ["value", "onSelect"]);
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
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode(_component_UiFormMessage)
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(_component_UiFormField, { name: "fullName" }, {
                        default: withCtx(({ componentField }) => [
                          createVNode(_component_UiFormItem, null, {
                            default: withCtx(() => [
                              createVNode(_component_UiFormLabel, null, {
                                default: withCtx(() => [
                                  createTextVNode("\u0418\u043C\u044F")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_UiFormControl, null, {
                                default: withCtx(() => [
                                  createVNode(_component_UiInput, mergeProps({
                                    type: "text",
                                    placeholder: "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435"
                                  }, componentField), null, 16)
                                ]),
                                _: 2
                              }, 1024),
                              createVNode(_component_UiFormMessage)
                            ]),
                            _: 2
                          }, 1024)
                        ]),
                        _: 1
                      }),
                      createVNode(_component_UiFormField, { name: "email" }, {
                        default: withCtx(({ componentField }) => [
                          createVNode(_component_UiFormItem, null, {
                            default: withCtx(() => [
                              createVNode(_component_UiFormLabel, null, {
                                default: withCtx(() => [
                                  createTextVNode("Email(login)")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_UiFormControl, null, {
                                default: withCtx(() => [
                                  createVNode(_component_UiInput, mergeProps({
                                    type: "text",
                                    placeholder: "login"
                                  }, componentField), null, 16)
                                ]),
                                _: 2
                              }, 1024),
                              createVNode(_component_UiFormMessage)
                            ]),
                            _: 2
                          }, 1024)
                        ]),
                        _: 1
                      }),
                      createVNode(_component_UiFormField, { name: "password" }, {
                        default: withCtx(({ componentField }) => [
                          createVNode(_component_UiFormItem, null, {
                            default: withCtx(() => [
                              createVNode(_component_UiFormLabel, null, {
                                default: withCtx(() => [
                                  createTextVNode("\u041F\u0430\u0440\u043E\u043B\u044C")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_UiFormControl, null, {
                                default: withCtx(() => [
                                  createVNode(_component_UiInput, mergeProps({
                                    type: "text",
                                    placeholder: "\u043F\u0430\u043B\u043E\u043B\u044C"
                                  }, componentField), null, 16)
                                ]),
                                _: 2
                              }, 1024),
                              createVNode(_component_UiFormMessage)
                            ]),
                            _: 2
                          }, 1024)
                        ]),
                        _: 1
                      }),
                      createVNode(_component_UiFormField, { name: "tg" }, {
                        default: withCtx(({ componentField }) => [
                          createVNode(_component_UiFormItem, null, {
                            default: withCtx(() => [
                              createVNode(_component_UiFormLabel, null, {
                                default: withCtx(() => [
                                  createTextVNode("\u0421\u0441\u044B\u043B\u043A\u0430 \u043D\u0430 \u0442\u0435\u043B\u0435\u0433\u0440\u0430\u043C")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_UiFormControl, null, {
                                default: withCtx(() => [
                                  createVNode(_component_UiInput, mergeProps({
                                    type: "text",
                                    placeholder: "telegram"
                                  }, componentField), null, 16)
                                ]),
                                _: 2
                              }, 1024),
                              createVNode(_component_UiFormMessage)
                            ]),
                            _: 2
                          }, 1024)
                        ]),
                        _: 1
                      }),
                      createVNode(_component_UiButton, {
                        class: "ml-auto",
                        type: "submit"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" \u0421\u043E\u0437\u0434\u0430\u0442\u044C ")
                        ]),
                        _: 1
                      })
                    ], 40, ["onSubmit"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UiDialogTrigger, { "as-child": "" }, {
                default: withCtx(() => [
                  createVNode("div", {
                    "aria-hidden": unref(isOpen) ? "false" : "true"
                  }, [
                    createVNode(_component_UiButton, { class: "h-8 px-2 py-0 absolute mt-1 text-nowrap" }, {
                      default: withCtx(() => [
                        createTextVNode(" \u0421\u043E\u0437\u0434\u0430\u0442\u044C \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F ")
                      ]),
                      _: 1
                    })
                  ], 8, ["aria-hidden"])
                ]),
                _: 1
              }),
              createVNode(_component_UiDialogContent, { class: "max-w-[400px] flex flex-col" }, {
                default: withCtx(() => [
                  createVNode(_component_UiDialogHeader, null, {
                    default: withCtx(() => [
                      createVNode(_component_UiDialogTitle, null, {
                        default: withCtx(() => [
                          createTextVNode("\u0421\u043E\u0437\u0434\u0430\u0442\u044C")
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(_component_UiDialogDescription, null, {
                    default: withCtx(() => [
                      createTextVNode(" \u0417\u0430\u043F\u043E\u043B\u043D\u0438 \u0444\u043E\u0440\u043C\u0443 ")
                    ]),
                    _: 1
                  }),
                  createVNode("form", {
                    class: "flex flex-col gap-2",
                    onSubmit: unref(onSubmit)
                  }, [
                    createVNode(_component_UiFormField, { name: "role" }, {
                      default: withCtx(() => [
                        createVNode(_component_UiFormItem, { class: "flex flex-col" }, {
                          default: withCtx(() => [
                            createVNode(_component_UiFormLabel, null, {
                              default: withCtx(() => [
                                createTextVNode("\u0420\u043E\u043B\u044C")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_UiPopover, null, {
                              default: withCtx(() => [
                                createVNode(_component_UiPopoverTrigger, { "as-child": "" }, {
                                  default: withCtx(() => [
                                    createVNode(_component_UiFormControl, null, {
                                      default: withCtx(() => [
                                        createVNode("div", {
                                          "aria-hidden": unref(isOpen) ? "false" : "true",
                                          class: "w-full"
                                        }, [
                                          createVNode(_component_UiButton, {
                                            variant: "outline",
                                            role: "combobox",
                                            class: "w-full"
                                          }, {
                                            default: withCtx(() => {
                                              var _a;
                                              return [
                                                createTextVNode(toDisplayString(unref(values).roleId ? (_a = unref(rolesList).find((role) => role.id === unref(values).roleId)) == null ? void 0 : _a.fullName : "\u0412\u044B\u0431\u0435\u0440\u0438 \u0440\u043E\u043B\u044C..."), 1)
                                              ];
                                            }),
                                            _: 1
                                          })
                                        ], 8, ["aria-hidden"])
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_UiPopoverContent, { class: "w-[200px] p-0" }, {
                                  default: withCtx(() => [
                                    createVNode(_component_UiCommand, null, {
                                      default: withCtx(() => [
                                        createVNode(_component_UiCommandList, null, {
                                          default: withCtx(() => [
                                            createVNode(_component_UiCommandGroup, null, {
                                              default: withCtx(() => [
                                                (openBlock(true), createBlock(Fragment, null, renderList(unref(rolesList), (role) => {
                                                  return openBlock(), createBlock(_component_UiCommandItem, {
                                                    key: role.id,
                                                    value: role.id,
                                                    onSelect: () => {
                                                      unref(setValues)({
                                                        roleId: role.id
                                                      });
                                                    }
                                                  }, {
                                                    default: withCtx(() => [
                                                      createTextVNode(toDisplayString(role.fullName), 1)
                                                    ]),
                                                    _: 2
                                                  }, 1032, ["value", "onSelect"]);
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
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }),
                            createVNode(_component_UiFormMessage)
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(_component_UiFormField, { name: "fullName" }, {
                      default: withCtx(({ componentField }) => [
                        createVNode(_component_UiFormItem, null, {
                          default: withCtx(() => [
                            createVNode(_component_UiFormLabel, null, {
                              default: withCtx(() => [
                                createTextVNode("\u0418\u043C\u044F")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_UiFormControl, null, {
                              default: withCtx(() => [
                                createVNode(_component_UiInput, mergeProps({
                                  type: "text",
                                  placeholder: "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435"
                                }, componentField), null, 16)
                              ]),
                              _: 2
                            }, 1024),
                            createVNode(_component_UiFormMessage)
                          ]),
                          _: 2
                        }, 1024)
                      ]),
                      _: 1
                    }),
                    createVNode(_component_UiFormField, { name: "email" }, {
                      default: withCtx(({ componentField }) => [
                        createVNode(_component_UiFormItem, null, {
                          default: withCtx(() => [
                            createVNode(_component_UiFormLabel, null, {
                              default: withCtx(() => [
                                createTextVNode("Email(login)")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_UiFormControl, null, {
                              default: withCtx(() => [
                                createVNode(_component_UiInput, mergeProps({
                                  type: "text",
                                  placeholder: "login"
                                }, componentField), null, 16)
                              ]),
                              _: 2
                            }, 1024),
                            createVNode(_component_UiFormMessage)
                          ]),
                          _: 2
                        }, 1024)
                      ]),
                      _: 1
                    }),
                    createVNode(_component_UiFormField, { name: "password" }, {
                      default: withCtx(({ componentField }) => [
                        createVNode(_component_UiFormItem, null, {
                          default: withCtx(() => [
                            createVNode(_component_UiFormLabel, null, {
                              default: withCtx(() => [
                                createTextVNode("\u041F\u0430\u0440\u043E\u043B\u044C")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_UiFormControl, null, {
                              default: withCtx(() => [
                                createVNode(_component_UiInput, mergeProps({
                                  type: "text",
                                  placeholder: "\u043F\u0430\u043B\u043E\u043B\u044C"
                                }, componentField), null, 16)
                              ]),
                              _: 2
                            }, 1024),
                            createVNode(_component_UiFormMessage)
                          ]),
                          _: 2
                        }, 1024)
                      ]),
                      _: 1
                    }),
                    createVNode(_component_UiFormField, { name: "tg" }, {
                      default: withCtx(({ componentField }) => [
                        createVNode(_component_UiFormItem, null, {
                          default: withCtx(() => [
                            createVNode(_component_UiFormLabel, null, {
                              default: withCtx(() => [
                                createTextVNode("\u0421\u0441\u044B\u043B\u043A\u0430 \u043D\u0430 \u0442\u0435\u043B\u0435\u0433\u0440\u0430\u043C")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_UiFormControl, null, {
                              default: withCtx(() => [
                                createVNode(_component_UiInput, mergeProps({
                                  type: "text",
                                  placeholder: "telegram"
                                }, componentField), null, 16)
                              ]),
                              _: 2
                            }, 1024),
                            createVNode(_component_UiFormMessage)
                          ]),
                          _: 2
                        }, 1024)
                      ]),
                      _: 1
                    }),
                    createVNode(_component_UiButton, {
                      class: "ml-auto",
                      type: "submit"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" \u0421\u043E\u0437\u0434\u0430\u0442\u044C ")
                      ]),
                      _: 1
                    })
                  ], 40, ["onSubmit"])
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
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/my/users/CreateModal.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "DataTable",
  __ssrInlineRender: true,
  props: {
    columns: {},
    data: {}
  },
  emits: ["delete-item", "edit-item"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const columnVisibility = ref({});
    const data = ref(props.data);
    const onDeleteItem = (item) => {
      data.value = data.value.filter((itm) => itm.id !== item.id);
      emit("delete-item", item);
    };
    const onEditItem = (item) => {
      emit("edit-item", item);
    };
    const table = useVueTable({
      get data() {
        return data.value;
      },
      get columns() {
        return props.columns;
      },
      getCoreRowModel: getCoreRowModel(),
      onColumnVisibilityChange: (updaterOrValue) => valueUpdater(updaterOrValue, columnVisibility),
      state: {
        get columnVisibility() {
          return columnVisibility.value;
        }
      },
      meta: {
        onDeleteItem: (item) => onDeleteItem(item),
        onEditItem: (item) => onEditItem(item)
      }
    });
    const emit = __emit;
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UiDropdownMenu = _sfc_main$6$1;
      const _component_UiDropdownMenuTrigger = _sfc_main$5$1;
      const _component_UiButton = _sfc_main$c;
      const _component_UiDropdownMenuContent = _sfc_main$4$2;
      const _component_UiDropdownMenuCheckboxItem = _sfc_main$4;
      const _component_UiTable = _sfc_main$5$2;
      const _component_UiTableHeader = _sfc_main$g;
      const _component_UiTableRow = _sfc_main$2$6;
      const _component_UiTableHead = _sfc_main$1$6;
      const _component_UiTableBody = _sfc_main$4$3;
      const _component_UiTableCell = _sfc_main$3$4;
      _push(`<!--[--><div class="flex mb-2">`);
      _push(ssrRenderComponent(_component_UiDropdownMenu, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UiDropdownMenuTrigger, { "as-child": "" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UiButton, {
                    variant: "outline",
                    class: "ml-auto"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` \u041A\u043E\u043B\u043E\u043D\u043A\u0438 `);
                        _push4(ssrRenderComponent(unref(ChevronDown), { class: "w-4 h-4 ml-2" }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createTextVNode(" \u041A\u043E\u043B\u043E\u043D\u043A\u0438 "),
                          createVNode(unref(ChevronDown), { class: "w-4 h-4 ml-2" })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UiButton, {
                      variant: "outline",
                      class: "ml-auto"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" \u041A\u043E\u043B\u043E\u043D\u043A\u0438 "),
                        createVNode(unref(ChevronDown), { class: "w-4 h-4 ml-2" })
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UiDropdownMenuContent, { align: "end" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<!--[-->`);
                  ssrRenderList(unref(table).getAllColumns().filter((column) => column.getCanHide()), (column) => {
                    _push3(ssrRenderComponent(_component_UiDropdownMenuCheckboxItem, {
                      key: column.id,
                      class: "capitalize",
                      checked: column.getIsVisible(),
                      "onUpdate:checked": (value) => {
                        column.toggleVisibility(!!value);
                      }
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`${ssrInterpolate(column.columnDef.header)}`);
                        } else {
                          return [
                            createTextVNode(toDisplayString(column.columnDef.header), 1)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  });
                  _push3(`<!--]-->`);
                } else {
                  return [
                    (openBlock(true), createBlock(Fragment, null, renderList(unref(table).getAllColumns().filter((column) => column.getCanHide()), (column) => {
                      return openBlock(), createBlock(_component_UiDropdownMenuCheckboxItem, {
                        key: column.id,
                        class: "capitalize",
                        checked: column.getIsVisible(),
                        "onUpdate:checked": (value) => {
                          column.toggleVisibility(!!value);
                        }
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(column.columnDef.header), 1)
                        ]),
                        _: 2
                      }, 1032, ["checked", "onUpdate:checked"]);
                    }), 128))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UiDropdownMenuTrigger, { "as-child": "" }, {
                default: withCtx(() => [
                  createVNode(_component_UiButton, {
                    variant: "outline",
                    class: "ml-auto"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" \u041A\u043E\u043B\u043E\u043D\u043A\u0438 "),
                      createVNode(unref(ChevronDown), { class: "w-4 h-4 ml-2" })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(_component_UiDropdownMenuContent, { align: "end" }, {
                default: withCtx(() => [
                  (openBlock(true), createBlock(Fragment, null, renderList(unref(table).getAllColumns().filter((column) => column.getCanHide()), (column) => {
                    return openBlock(), createBlock(_component_UiDropdownMenuCheckboxItem, {
                      key: column.id,
                      class: "capitalize",
                      checked: column.getIsVisible(),
                      "onUpdate:checked": (value) => {
                        column.toggleVisibility(!!value);
                      }
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(column.columnDef.header), 1)
                      ]),
                      _: 2
                    }, 1032, ["checked", "onUpdate:checked"]);
                  }), 128))
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="rounded-md border overflow-hidden">`);
      _push(ssrRenderComponent(_component_UiTable, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UiTableHeader, { class: "bg-slate-400/20" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<!--[-->`);
                  ssrRenderList(unref(table).getHeaderGroups(), (headerGroup) => {
                    _push3(ssrRenderComponent(_component_UiTableRow, {
                      key: headerGroup.id
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<!--[-->`);
                          ssrRenderList(headerGroup.headers, (header) => {
                            _push4(ssrRenderComponent(_component_UiTableHead, {
                              key: header.id
                            }, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  if (!header.isPlaceholder) {
                                    _push5(ssrRenderComponent(unref(FlexRender), {
                                      render: header.column.columnDef.header,
                                      props: header.getContext()
                                    }, null, _parent5, _scopeId4));
                                  } else {
                                    _push5(`<!---->`);
                                  }
                                } else {
                                  return [
                                    !header.isPlaceholder ? (openBlock(), createBlock(unref(FlexRender), {
                                      key: 0,
                                      render: header.column.columnDef.header,
                                      props: header.getContext()
                                    }, null, 8, ["render", "props"])) : createCommentVNode("", true)
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                          });
                          _push4(`<!--]-->`);
                        } else {
                          return [
                            (openBlock(true), createBlock(Fragment, null, renderList(headerGroup.headers, (header) => {
                              return openBlock(), createBlock(_component_UiTableHead, {
                                key: header.id
                              }, {
                                default: withCtx(() => [
                                  !header.isPlaceholder ? (openBlock(), createBlock(unref(FlexRender), {
                                    key: 0,
                                    render: header.column.columnDef.header,
                                    props: header.getContext()
                                  }, null, 8, ["render", "props"])) : createCommentVNode("", true)
                                ]),
                                _: 2
                              }, 1024);
                            }), 128))
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  });
                  _push3(`<!--]-->`);
                } else {
                  return [
                    (openBlock(true), createBlock(Fragment, null, renderList(unref(table).getHeaderGroups(), (headerGroup) => {
                      return openBlock(), createBlock(_component_UiTableRow, {
                        key: headerGroup.id
                      }, {
                        default: withCtx(() => [
                          (openBlock(true), createBlock(Fragment, null, renderList(headerGroup.headers, (header) => {
                            return openBlock(), createBlock(_component_UiTableHead, {
                              key: header.id
                            }, {
                              default: withCtx(() => [
                                !header.isPlaceholder ? (openBlock(), createBlock(unref(FlexRender), {
                                  key: 0,
                                  render: header.column.columnDef.header,
                                  props: header.getContext()
                                }, null, 8, ["render", "props"])) : createCommentVNode("", true)
                              ]),
                              _: 2
                            }, 1024);
                          }), 128))
                        ]),
                        _: 2
                      }, 1024);
                    }), 128))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UiTableBody, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                var _a, _b;
                if (_push3) {
                  if ((_a = unref(table).getRowModel().rows) == null ? void 0 : _a.length) {
                    _push3(`<!--[-->`);
                    ssrRenderList(unref(table).getRowModel().rows, (row) => {
                      _push3(ssrRenderComponent(_component_UiTableRow, {
                        key: row.id,
                        "data-state": row.getIsSelected() ? "selected" : void 0,
                        class: "bg-slate-100"
                      }, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(`<!--[-->`);
                            ssrRenderList(row.getVisibleCells(), (cell) => {
                              _push4(ssrRenderComponent(_component_UiTableCell, {
                                key: cell.id
                              }, {
                                default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                  if (_push5) {
                                    _push5(ssrRenderComponent(unref(FlexRender), {
                                      render: cell.column.columnDef.cell,
                                      props: cell.getContext()
                                    }, null, _parent5, _scopeId4));
                                  } else {
                                    return [
                                      createVNode(unref(FlexRender), {
                                        render: cell.column.columnDef.cell,
                                        props: cell.getContext()
                                      }, null, 8, ["render", "props"])
                                    ];
                                  }
                                }),
                                _: 2
                              }, _parent4, _scopeId3));
                            });
                            _push4(`<!--]-->`);
                          } else {
                            return [
                              (openBlock(true), createBlock(Fragment, null, renderList(row.getVisibleCells(), (cell) => {
                                return openBlock(), createBlock(_component_UiTableCell, {
                                  key: cell.id
                                }, {
                                  default: withCtx(() => [
                                    createVNode(unref(FlexRender), {
                                      render: cell.column.columnDef.cell,
                                      props: cell.getContext()
                                    }, null, 8, ["render", "props"])
                                  ]),
                                  _: 2
                                }, 1024);
                              }), 128))
                            ];
                          }
                        }),
                        _: 2
                      }, _parent3, _scopeId2));
                    });
                    _push3(`<!--]-->`);
                  } else {
                    _push3(ssrRenderComponent(_component_UiTableRow, null, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_UiTableCell, {
                            colspan: _ctx.columns.length,
                            class: "h-24 text-center"
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(` No results. `);
                              } else {
                                return [
                                  createTextVNode(" No results. ")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(_component_UiTableCell, {
                              colspan: _ctx.columns.length,
                              class: "h-24 text-center"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" No results. ")
                              ]),
                              _: 1
                            }, 8, ["colspan"])
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  }
                } else {
                  return [
                    ((_b = unref(table).getRowModel().rows) == null ? void 0 : _b.length) ? (openBlock(true), createBlock(Fragment, { key: 0 }, renderList(unref(table).getRowModel().rows, (row) => {
                      return openBlock(), createBlock(_component_UiTableRow, {
                        key: row.id,
                        "data-state": row.getIsSelected() ? "selected" : void 0,
                        class: "bg-slate-100"
                      }, {
                        default: withCtx(() => [
                          (openBlock(true), createBlock(Fragment, null, renderList(row.getVisibleCells(), (cell) => {
                            return openBlock(), createBlock(_component_UiTableCell, {
                              key: cell.id
                            }, {
                              default: withCtx(() => [
                                createVNode(unref(FlexRender), {
                                  render: cell.column.columnDef.cell,
                                  props: cell.getContext()
                                }, null, 8, ["render", "props"])
                              ]),
                              _: 2
                            }, 1024);
                          }), 128))
                        ]),
                        _: 2
                      }, 1032, ["data-state"]);
                    }), 128)) : (openBlock(), createBlock(_component_UiTableRow, { key: 1 }, {
                      default: withCtx(() => [
                        createVNode(_component_UiTableCell, {
                          colspan: _ctx.columns.length,
                          class: "h-24 text-center"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" No results. ")
                          ]),
                          _: 1
                        }, 8, ["colspan"])
                      ]),
                      _: 1
                    }))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UiTableHeader, { class: "bg-slate-400/20" }, {
                default: withCtx(() => [
                  (openBlock(true), createBlock(Fragment, null, renderList(unref(table).getHeaderGroups(), (headerGroup) => {
                    return openBlock(), createBlock(_component_UiTableRow, {
                      key: headerGroup.id
                    }, {
                      default: withCtx(() => [
                        (openBlock(true), createBlock(Fragment, null, renderList(headerGroup.headers, (header) => {
                          return openBlock(), createBlock(_component_UiTableHead, {
                            key: header.id
                          }, {
                            default: withCtx(() => [
                              !header.isPlaceholder ? (openBlock(), createBlock(unref(FlexRender), {
                                key: 0,
                                render: header.column.columnDef.header,
                                props: header.getContext()
                              }, null, 8, ["render", "props"])) : createCommentVNode("", true)
                            ]),
                            _: 2
                          }, 1024);
                        }), 128))
                      ]),
                      _: 2
                    }, 1024);
                  }), 128))
                ]),
                _: 1
              }),
              createVNode(_component_UiTableBody, null, {
                default: withCtx(() => {
                  var _a;
                  return [
                    ((_a = unref(table).getRowModel().rows) == null ? void 0 : _a.length) ? (openBlock(true), createBlock(Fragment, { key: 0 }, renderList(unref(table).getRowModel().rows, (row) => {
                      return openBlock(), createBlock(_component_UiTableRow, {
                        key: row.id,
                        "data-state": row.getIsSelected() ? "selected" : void 0,
                        class: "bg-slate-100"
                      }, {
                        default: withCtx(() => [
                          (openBlock(true), createBlock(Fragment, null, renderList(row.getVisibleCells(), (cell) => {
                            return openBlock(), createBlock(_component_UiTableCell, {
                              key: cell.id
                            }, {
                              default: withCtx(() => [
                                createVNode(unref(FlexRender), {
                                  render: cell.column.columnDef.cell,
                                  props: cell.getContext()
                                }, null, 8, ["render", "props"])
                              ]),
                              _: 2
                            }, 1024);
                          }), 128))
                        ]),
                        _: 2
                      }, 1032, ["data-state"]);
                    }), 128)) : (openBlock(), createBlock(_component_UiTableRow, { key: 1 }, {
                      default: withCtx(() => [
                        createVNode(_component_UiTableCell, {
                          colspan: _ctx.columns.length,
                          class: "h-24 text-center"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" No results. ")
                          ]),
                          _: 1
                        }, 8, ["colspan"])
                      ]),
                      _: 1
                    }))
                  ];
                }),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><!--]-->`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/my/users/DataTable.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "DataTableActions",
  __ssrInlineRender: true,
  props: {
    user: {}
  },
  emits: ["delete-user", "edit-user"],
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UiDropdownMenu = _sfc_main$6$1;
      const _component_UiDropdownMenuTrigger = _sfc_main$5$1;
      const _component_UiDropdownMenuContent = _sfc_main$4$2;
      const _component_UiDropdownMenuItem = _sfc_main$3$5;
      _push(ssrRenderComponent(_component_UiDropdownMenu, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UiDropdownMenuTrigger, { "as-child": "" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(_sfc_main$c), {
                    variant: "ghost",
                    class: "w-8 h-8 p-0"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<span class="sr-only"${_scopeId3}>\u041E\u0442\u043A\u0440\u044B\u0442\u044C \u043C\u0435\u043D\u044E</span>`);
                        _push4(ssrRenderComponent(unref(MoreHorizontal), { class: "w-4 h-4" }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode("span", { class: "sr-only" }, "\u041E\u0442\u043A\u0440\u044B\u0442\u044C \u043C\u0435\u043D\u044E"),
                          createVNode(unref(MoreHorizontal), { class: "w-4 h-4" })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(_sfc_main$c), {
                      variant: "ghost",
                      class: "w-8 h-8 p-0"
                    }, {
                      default: withCtx(() => [
                        createVNode("span", { class: "sr-only" }, "\u041E\u0442\u043A\u0440\u044B\u0442\u044C \u043C\u0435\u043D\u044E"),
                        createVNode(unref(MoreHorizontal), { class: "w-4 h-4" })
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UiDropdownMenuContent, { align: "end" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UiDropdownMenuItem, {
                    onClick: ($event) => emit("delete-user")
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` \u0423\u0434\u0430\u043B\u0438\u0442\u044C `);
                      } else {
                        return [
                          createTextVNode(" \u0423\u0434\u0430\u043B\u0438\u0442\u044C ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_UiDropdownMenuItem, {
                    onClick: ($event) => emit("edit-user")
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` \u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C `);
                      } else {
                        return [
                          createTextVNode(" \u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UiDropdownMenuItem, {
                      onClick: ($event) => emit("delete-user")
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" \u0423\u0434\u0430\u043B\u0438\u0442\u044C ")
                      ]),
                      _: 1
                    }, 8, ["onClick"]),
                    createVNode(_component_UiDropdownMenuItem, {
                      onClick: ($event) => emit("edit-user")
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" \u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C ")
                      ]),
                      _: 1
                    }, 8, ["onClick"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UiDropdownMenuTrigger, { "as-child": "" }, {
                default: withCtx(() => [
                  createVNode(unref(_sfc_main$c), {
                    variant: "ghost",
                    class: "w-8 h-8 p-0"
                  }, {
                    default: withCtx(() => [
                      createVNode("span", { class: "sr-only" }, "\u041E\u0442\u043A\u0440\u044B\u0442\u044C \u043C\u0435\u043D\u044E"),
                      createVNode(unref(MoreHorizontal), { class: "w-4 h-4" })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(_component_UiDropdownMenuContent, { align: "end" }, {
                default: withCtx(() => [
                  createVNode(_component_UiDropdownMenuItem, {
                    onClick: ($event) => emit("delete-user")
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" \u0423\u0434\u0430\u043B\u0438\u0442\u044C ")
                    ]),
                    _: 1
                  }, 8, ["onClick"]),
                  createVNode(_component_UiDropdownMenuItem, {
                    onClick: ($event) => emit("edit-user")
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" \u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C ")
                    ]),
                    _: 1
                  }, 8, ["onClick"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/my/users/DataTableActions.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const usersColumns = [
  {
    accessorKey: "fullName",
    header: "\u0418\u043C\u044F"
  },
  {
    accessorKey: "tg",
    header: "Telegram"
  },
  {
    accessorKey: "role.fullName",
    header: "\u0414\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u044C",
    cell: ({ row }) => h("div", {}, row.original.role.fullName)
  },
  {
    id: "actions",
    header: () => h("div", { class: "text-center" }, "\u0414\u0435\u0439\u0441\u0442\u0432\u0438\u044F"),
    enableHiding: false,
    cell: ({ row, table }) => {
      const user = row.original;
      return h(
        "div",
        { class: "relative text-center" },
        h(_sfc_main$1, {
          user,
          onDeleteUser: () => {
            var _a;
            return (_a = table.options.meta) == null ? void 0 : _a.onDeleteItem(user);
          },
          onEditUser: () => {
            var _a;
            return (_a = table.options.meta) == null ? void 0 : _a.onEditItem(user);
          }
        })
      );
    }
  }
];
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const { $useApi } = useNuxtApp();
    useHead({
      title: "\u041E\u0442\u0434\u0435\u043B\u044B | Easy CRM"
    });
    const workspaces = ref([]);
    const curWorkspaceId = ref(0);
    const editedUser = ref({
      id: 0,
      password: "",
      fullName: ""
    });
    const isEditUserFormOpen = ref(false);
    const deleteUser = async (user) => {
      try {
        await $useApi.delete(`/users/${user.id}`);
      } catch (e) {
        console.log(e);
      }
    };
    const editUser = async () => {
      try {
        if (!editedUser.value.password || editedUser.value.password.length < 6) {
          console.error("\u041F\u0430\u0440\u043E\u043B\u044C \u0434\u043E\u043B\u0436\u0435\u043D \u0441\u043E\u0434\u0435\u0440\u0436\u0430\u0442\u044C \u043C\u0438\u043D\u0438\u043C\u0443\u043C 6 \u0441\u0438\u043C\u0432\u043E\u043B\u043E\u0432");
          return;
        }
        await $useApi.patch(`/users/${editedUser.value.id}/new-pass`, {
          newPass: editedUser.value.password
        });
        editedUser.value.password = "";
        isEditUserFormOpen.value = false;
        console.log("\u041F\u0430\u0440\u043E\u043B\u044C \u0443\u0441\u043F\u0435\u0448\u043D\u043E \u043E\u0431\u043D\u043E\u0432\u043B\u0435\u043D");
      } catch (e) {
        console.error("\u041E\u0448\u0438\u0431\u043A\u0430 \u043E\u0431\u043D\u043E\u0432\u043B\u0435\u043D\u0438\u044F \u043F\u0430\u0440\u043E\u043B\u044F:", e);
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_LayoutSidebar = _sfc_main$5;
      const _component_UiTabs = _sfc_main$2$1;
      const _component_UiTabsList = _sfc_main$6;
      const _component_UiTabsTrigger = _sfc_main$1$1;
      const _component_UiTabsContent = _sfc_main$7;
      const _component_MyUsersCreateModal = _sfc_main$3;
      const _component_MyUsersDataTable = _sfc_main$2;
      const _component_UiDialog = _sfc_main$4$1;
      const _component_UiDialogTrigger = _sfc_main$3$1;
      const _component_UiDialogContent = _sfc_main$8;
      const _component_UiDialogHeader = _sfc_main$2$2;
      const _component_UiDialogTitle = _sfc_main$1$2;
      const _component_UiDialogDescription = _sfc_main$9;
      const _component_UiLabel = _sfc_main$a;
      const _component_UiInput = _sfc_main$b;
      const _component_UiButton = _sfc_main$c;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative h-screen hidden-scrollbar" }, _attrs))}><div class="w-full fixed z-10">`);
      _push(ssrRenderComponent(_component_LayoutSidebar, null, null, _parent));
      _push(`</div><div class="h-[full] flex flex-col p-4 gap-4 mx-[auto] max-w-[2048px] pt-16"><h1 class="text-3xl font-semibold">\u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u0438</h1>`);
      if (unref(workspaces) && unref(curWorkspaceId)) {
        _push(`<div class="mt-4 w-full">`);
        _push(ssrRenderComponent(_component_UiTabs, {
          modelValue: unref(curWorkspaceId),
          "onUpdate:modelValue": ($event) => isRef(curWorkspaceId) ? curWorkspaceId.value = $event : null
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="flex items-start flex-col w-full"${_scopeId}><div class="flex items-center gap-2 w-full"${_scopeId}>`);
              if (unref(workspaces).length > 1) {
                _push2(ssrRenderComponent(_component_UiTabsList, null, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`<!--[-->`);
                      ssrRenderList(unref(workspaces), (workspace) => {
                        _push3(`<div${_scopeId2}>`);
                        _push3(ssrRenderComponent(_component_UiTabsTrigger, {
                          value: workspace.id
                        }, {
                          default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                            if (_push4) {
                              _push4(`${ssrInterpolate(workspace.title)}`);
                            } else {
                              return [
                                createTextVNode(toDisplayString(workspace.title), 1)
                              ];
                            }
                          }),
                          _: 2
                        }, _parent3, _scopeId2));
                        _push3(`</div>`);
                      });
                      _push3(`<!--]-->`);
                    } else {
                      return [
                        (openBlock(true), createBlock(Fragment, null, renderList(unref(workspaces), (workspace) => {
                          return openBlock(), createBlock("div", {
                            key: workspace.id
                          }, [
                            createVNode(_component_UiTabsTrigger, {
                              value: workspace.id
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(workspace.title), 1)
                              ]),
                              _: 2
                            }, 1032, ["value"])
                          ]);
                        }), 128))
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div><!--[-->`);
              ssrRenderList(unref(workspaces), (workspace) => {
                _push2(`<div class="w-full"${_scopeId}>`);
                _push2(ssrRenderComponent(_component_UiTabsContent, {
                  value: workspace.id
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      if (workspace.groups.length) {
                        _push3(`<div${_scopeId2}>`);
                        _push3(ssrRenderComponent(_component_UiTabs, {
                          "default-value": workspace.groups[0].id
                        }, {
                          default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                            if (_push4) {
                              _push4(`<div class="flex items-center gap-2"${_scopeId3}>`);
                              if (workspace.groups.length > 1) {
                                _push4(ssrRenderComponent(_component_UiTabsList, null, {
                                  default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                    if (_push5) {
                                      _push5(`<!--[-->`);
                                      ssrRenderList(workspace.groups, (group) => {
                                        _push5(`<div${_scopeId4}>`);
                                        _push5(ssrRenderComponent(_component_UiTabsTrigger, {
                                          value: group.id
                                        }, {
                                          default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                            if (_push6) {
                                              _push6(`${ssrInterpolate(group.title)}`);
                                            } else {
                                              return [
                                                createTextVNode(toDisplayString(group.title), 1)
                                              ];
                                            }
                                          }),
                                          _: 2
                                        }, _parent5, _scopeId4));
                                        _push5(`</div>`);
                                      });
                                      _push5(`<!--]-->`);
                                    } else {
                                      return [
                                        (openBlock(true), createBlock(Fragment, null, renderList(workspace.groups, (group) => {
                                          return openBlock(), createBlock("div", {
                                            key: group.id
                                          }, [
                                            createVNode(_component_UiTabsTrigger, {
                                              value: group.id
                                            }, {
                                              default: withCtx(() => [
                                                createTextVNode(toDisplayString(group.title), 1)
                                              ]),
                                              _: 2
                                            }, 1032, ["value"])
                                          ]);
                                        }), 128))
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent4, _scopeId3));
                              } else {
                                _push4(`<!---->`);
                              }
                              _push4(`</div><!--[-->`);
                              ssrRenderList(workspace.groups, (group) => {
                                _push4(`<div class="min-w-[fit-content]"${_scopeId3}>`);
                                _push4(ssrRenderComponent(_component_UiTabsContent, {
                                  value: group.id
                                }, {
                                  default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                    if (_push5) {
                                      _push5(ssrRenderComponent(_component_MyUsersCreateModal, {
                                        group,
                                        onUserCreated: (createdUser) => group.users.push(createdUser)
                                      }, null, _parent5, _scopeId4));
                                      _push5(ssrRenderComponent(_component_MyUsersDataTable, {
                                        key: group.users.length,
                                        columns: unref(usersColumns),
                                        data: group.users,
                                        onDeleteItem: (user) => deleteUser(user),
                                        onEditItem: (user) => {
                                          isEditUserFormOpen.value = true;
                                          unref(editedUser).id = user.id;
                                          unref(editedUser).fullName = user.fullName;
                                          unref(editedUser).password = "";
                                        }
                                      }, null, _parent5, _scopeId4));
                                    } else {
                                      return [
                                        createVNode(_component_MyUsersCreateModal, {
                                          group,
                                          onUserCreated: (createdUser) => group.users.push(createdUser)
                                        }, null, 8, ["group", "onUserCreated"]),
                                        (openBlock(), createBlock(_component_MyUsersDataTable, {
                                          key: group.users.length,
                                          columns: unref(usersColumns),
                                          data: group.users,
                                          onDeleteItem: (user) => deleteUser(user),
                                          onEditItem: (user) => {
                                            isEditUserFormOpen.value = true;
                                            unref(editedUser).id = user.id;
                                            unref(editedUser).fullName = user.fullName;
                                            unref(editedUser).password = "";
                                          }
                                        }, null, 8, ["columns", "data", "onDeleteItem", "onEditItem"]))
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent4, _scopeId3));
                                _push4(`</div>`);
                              });
                              _push4(`<!--]-->`);
                            } else {
                              return [
                                createVNode("div", { class: "flex items-center gap-2" }, [
                                  workspace.groups.length > 1 ? (openBlock(), createBlock(_component_UiTabsList, { key: 0 }, {
                                    default: withCtx(() => [
                                      (openBlock(true), createBlock(Fragment, null, renderList(workspace.groups, (group) => {
                                        return openBlock(), createBlock("div", {
                                          key: group.id
                                        }, [
                                          createVNode(_component_UiTabsTrigger, {
                                            value: group.id
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode(toDisplayString(group.title), 1)
                                            ]),
                                            _: 2
                                          }, 1032, ["value"])
                                        ]);
                                      }), 128))
                                    ]),
                                    _: 2
                                  }, 1024)) : createCommentVNode("", true)
                                ]),
                                (openBlock(true), createBlock(Fragment, null, renderList(workspace.groups, (group) => {
                                  return openBlock(), createBlock("div", {
                                    key: group.id,
                                    class: "min-w-[fit-content]"
                                  }, [
                                    createVNode(_component_UiTabsContent, {
                                      value: group.id
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(_component_MyUsersCreateModal, {
                                          group,
                                          onUserCreated: (createdUser) => group.users.push(createdUser)
                                        }, null, 8, ["group", "onUserCreated"]),
                                        (openBlock(), createBlock(_component_MyUsersDataTable, {
                                          key: group.users.length,
                                          columns: unref(usersColumns),
                                          data: group.users,
                                          onDeleteItem: (user) => deleteUser(user),
                                          onEditItem: (user) => {
                                            isEditUserFormOpen.value = true;
                                            unref(editedUser).id = user.id;
                                            unref(editedUser).fullName = user.fullName;
                                            unref(editedUser).password = "";
                                          }
                                        }, null, 8, ["columns", "data", "onDeleteItem", "onEditItem"]))
                                      ]),
                                      _: 2
                                    }, 1032, ["value"])
                                  ]);
                                }), 128))
                              ];
                            }
                          }),
                          _: 2
                        }, _parent3, _scopeId2));
                        _push3(`</div>`);
                      } else {
                        _push3(`<div${_scopeId2}></div>`);
                      }
                    } else {
                      return [
                        workspace.groups.length ? (openBlock(), createBlock("div", { key: 0 }, [
                          createVNode(_component_UiTabs, {
                            "default-value": workspace.groups[0].id
                          }, {
                            default: withCtx(() => [
                              createVNode("div", { class: "flex items-center gap-2" }, [
                                workspace.groups.length > 1 ? (openBlock(), createBlock(_component_UiTabsList, { key: 0 }, {
                                  default: withCtx(() => [
                                    (openBlock(true), createBlock(Fragment, null, renderList(workspace.groups, (group) => {
                                      return openBlock(), createBlock("div", {
                                        key: group.id
                                      }, [
                                        createVNode(_component_UiTabsTrigger, {
                                          value: group.id
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(group.title), 1)
                                          ]),
                                          _: 2
                                        }, 1032, ["value"])
                                      ]);
                                    }), 128))
                                  ]),
                                  _: 2
                                }, 1024)) : createCommentVNode("", true)
                              ]),
                              (openBlock(true), createBlock(Fragment, null, renderList(workspace.groups, (group) => {
                                return openBlock(), createBlock("div", {
                                  key: group.id,
                                  class: "min-w-[fit-content]"
                                }, [
                                  createVNode(_component_UiTabsContent, {
                                    value: group.id
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_MyUsersCreateModal, {
                                        group,
                                        onUserCreated: (createdUser) => group.users.push(createdUser)
                                      }, null, 8, ["group", "onUserCreated"]),
                                      (openBlock(), createBlock(_component_MyUsersDataTable, {
                                        key: group.users.length,
                                        columns: unref(usersColumns),
                                        data: group.users,
                                        onDeleteItem: (user) => deleteUser(user),
                                        onEditItem: (user) => {
                                          isEditUserFormOpen.value = true;
                                          unref(editedUser).id = user.id;
                                          unref(editedUser).fullName = user.fullName;
                                          unref(editedUser).password = "";
                                        }
                                      }, null, 8, ["columns", "data", "onDeleteItem", "onEditItem"]))
                                    ]),
                                    _: 2
                                  }, 1032, ["value"])
                                ]);
                              }), 128))
                            ]),
                            _: 2
                          }, 1032, ["default-value"])
                        ])) : (openBlock(), createBlock("div", { key: 1 }))
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
                _push2(`</div>`);
              });
              _push2(`<!--]--></div>`);
            } else {
              return [
                createVNode("div", { class: "flex items-start flex-col w-full" }, [
                  createVNode("div", { class: "flex items-center gap-2 w-full" }, [
                    unref(workspaces).length > 1 ? (openBlock(), createBlock(_component_UiTabsList, { key: 0 }, {
                      default: withCtx(() => [
                        (openBlock(true), createBlock(Fragment, null, renderList(unref(workspaces), (workspace) => {
                          return openBlock(), createBlock("div", {
                            key: workspace.id
                          }, [
                            createVNode(_component_UiTabsTrigger, {
                              value: workspace.id
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(workspace.title), 1)
                              ]),
                              _: 2
                            }, 1032, ["value"])
                          ]);
                        }), 128))
                      ]),
                      _: 1
                    })) : createCommentVNode("", true)
                  ]),
                  (openBlock(true), createBlock(Fragment, null, renderList(unref(workspaces), (workspace) => {
                    return openBlock(), createBlock("div", {
                      key: workspace.id,
                      class: "w-full"
                    }, [
                      createVNode(_component_UiTabsContent, {
                        value: workspace.id
                      }, {
                        default: withCtx(() => [
                          workspace.groups.length ? (openBlock(), createBlock("div", { key: 0 }, [
                            createVNode(_component_UiTabs, {
                              "default-value": workspace.groups[0].id
                            }, {
                              default: withCtx(() => [
                                createVNode("div", { class: "flex items-center gap-2" }, [
                                  workspace.groups.length > 1 ? (openBlock(), createBlock(_component_UiTabsList, { key: 0 }, {
                                    default: withCtx(() => [
                                      (openBlock(true), createBlock(Fragment, null, renderList(workspace.groups, (group) => {
                                        return openBlock(), createBlock("div", {
                                          key: group.id
                                        }, [
                                          createVNode(_component_UiTabsTrigger, {
                                            value: group.id
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode(toDisplayString(group.title), 1)
                                            ]),
                                            _: 2
                                          }, 1032, ["value"])
                                        ]);
                                      }), 128))
                                    ]),
                                    _: 2
                                  }, 1024)) : createCommentVNode("", true)
                                ]),
                                (openBlock(true), createBlock(Fragment, null, renderList(workspace.groups, (group) => {
                                  return openBlock(), createBlock("div", {
                                    key: group.id,
                                    class: "min-w-[fit-content]"
                                  }, [
                                    createVNode(_component_UiTabsContent, {
                                      value: group.id
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(_component_MyUsersCreateModal, {
                                          group,
                                          onUserCreated: (createdUser) => group.users.push(createdUser)
                                        }, null, 8, ["group", "onUserCreated"]),
                                        (openBlock(), createBlock(_component_MyUsersDataTable, {
                                          key: group.users.length,
                                          columns: unref(usersColumns),
                                          data: group.users,
                                          onDeleteItem: (user) => deleteUser(user),
                                          onEditItem: (user) => {
                                            isEditUserFormOpen.value = true;
                                            unref(editedUser).id = user.id;
                                            unref(editedUser).fullName = user.fullName;
                                            unref(editedUser).password = "";
                                          }
                                        }, null, 8, ["columns", "data", "onDeleteItem", "onEditItem"]))
                                      ]),
                                      _: 2
                                    }, 1032, ["value"])
                                  ]);
                                }), 128))
                              ]),
                              _: 2
                            }, 1032, ["default-value"])
                          ])) : (openBlock(), createBlock("div", { key: 1 }))
                        ]),
                        _: 2
                      }, 1032, ["value"])
                    ]);
                  }), 128))
                ])
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      } else {
        _push(`<div>\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430</div>`);
      }
      _push(`</div>`);
      _push(ssrRenderComponent(_component_UiDialog, {
        open: unref(isEditUserFormOpen),
        "onUpdate:open": ($event) => isRef(isEditUserFormOpen) ? isEditUserFormOpen.value = $event : null
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UiDialogTrigger, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UiDialogContent, { class: "max-w-[400px] flex flex-col" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UiDialogHeader, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_UiDialogTitle, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C`);
                            } else {
                              return [
                                createTextVNode("\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_UiDialogTitle, null, {
                            default: withCtx(() => [
                              createTextVNode("\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C")
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_UiDialogDescription, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`${ssrInterpolate(unref(editedUser).fullName)}`);
                      } else {
                        return [
                          createTextVNode(toDisplayString(unref(editedUser).fullName), 1)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`<div class="relative"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`\u041D\u043E\u0432\u044B\u0439 \u043F\u0430\u0440\u043E\u043B\u044C`);
                      } else {
                        return [
                          createTextVNode("\u041D\u043E\u0432\u044B\u0439 \u043F\u0430\u0440\u043E\u043B\u044C")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`<div class="flex gap-2"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_UiInput, {
                    modelValue: unref(editedUser).password,
                    "onUpdate:modelValue": ($event) => unref(editedUser).password = $event
                  }, null, _parent3, _scopeId2));
                  _push3(`</div></div>`);
                  if (!unref(editedUser).password || unref(editedUser).password.length < 6) {
                    _push3(`<p class="text-red-500"${_scopeId2}> \u041F\u0430\u0440\u043E\u043B\u044C \u0434\u043E\u043B\u0436\u0435\u043D \u0441\u043E\u0434\u0435\u0440\u0436\u0430\u0442\u044C \u043C\u0438\u043D\u0438\u043C\u0443\u043C 6 \u0441\u0438\u043C\u0432\u043E\u043B\u043E\u0432 </p>`);
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(ssrRenderComponent(_component_UiButton, { onClick: editUser }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` \u041E\u0431\u043D\u043E\u0432\u0438\u0442\u044C `);
                      } else {
                        return [
                          createTextVNode(" \u041E\u0431\u043D\u043E\u0432\u0438\u0442\u044C ")
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
                            createTextVNode("\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(_component_UiDialogDescription, null, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(unref(editedUser).fullName), 1)
                      ]),
                      _: 1
                    }),
                    createVNode("div", { class: "relative" }, [
                      createVNode(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap" }, {
                        default: withCtx(() => [
                          createTextVNode("\u041D\u043E\u0432\u044B\u0439 \u043F\u0430\u0440\u043E\u043B\u044C")
                        ]),
                        _: 1
                      }),
                      createVNode("div", { class: "flex gap-2" }, [
                        createVNode(_component_UiInput, {
                          modelValue: unref(editedUser).password,
                          "onUpdate:modelValue": ($event) => unref(editedUser).password = $event
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ])
                    ]),
                    !unref(editedUser).password || unref(editedUser).password.length < 6 ? (openBlock(), createBlock("p", {
                      key: 0,
                      class: "text-red-500"
                    }, " \u041F\u0430\u0440\u043E\u043B\u044C \u0434\u043E\u043B\u0436\u0435\u043D \u0441\u043E\u0434\u0435\u0440\u0436\u0430\u0442\u044C \u043C\u0438\u043D\u0438\u043C\u0443\u043C 6 \u0441\u0438\u043C\u0432\u043E\u043B\u043E\u0432 ")) : createCommentVNode("", true),
                    createVNode(_component_UiButton, { onClick: editUser }, {
                      default: withCtx(() => [
                        createTextVNode(" \u041E\u0431\u043D\u043E\u0432\u0438\u0442\u044C ")
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
              createVNode(_component_UiDialogTrigger),
              createVNode(_component_UiDialogContent, { class: "max-w-[400px] flex flex-col" }, {
                default: withCtx(() => [
                  createVNode(_component_UiDialogHeader, null, {
                    default: withCtx(() => [
                      createVNode(_component_UiDialogTitle, null, {
                        default: withCtx(() => [
                          createTextVNode("\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C")
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(_component_UiDialogDescription, null, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(unref(editedUser).fullName), 1)
                    ]),
                    _: 1
                  }),
                  createVNode("div", { class: "relative" }, [
                    createVNode(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap" }, {
                      default: withCtx(() => [
                        createTextVNode("\u041D\u043E\u0432\u044B\u0439 \u043F\u0430\u0440\u043E\u043B\u044C")
                      ]),
                      _: 1
                    }),
                    createVNode("div", { class: "flex gap-2" }, [
                      createVNode(_component_UiInput, {
                        modelValue: unref(editedUser).password,
                        "onUpdate:modelValue": ($event) => unref(editedUser).password = $event
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ])
                  ]),
                  !unref(editedUser).password || unref(editedUser).password.length < 6 ? (openBlock(), createBlock("p", {
                    key: 0,
                    class: "text-red-500"
                  }, " \u041F\u0430\u0440\u043E\u043B\u044C \u0434\u043E\u043B\u0436\u0435\u043D \u0441\u043E\u0434\u0435\u0440\u0436\u0430\u0442\u044C \u043C\u0438\u043D\u0438\u043C\u0443\u043C 6 \u0441\u0438\u043C\u0432\u043E\u043B\u043E\u0432 ")) : createCommentVNode("", true),
                  createVNode(_component_UiButton, { onClick: editUser }, {
                    default: withCtx(() => [
                      createTextVNode(" \u041E\u0431\u043D\u043E\u0432\u0438\u0442\u044C ")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/workspaces/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-CjTmrk2u.mjs.map
