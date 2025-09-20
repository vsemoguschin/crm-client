import { _ as _sfc_main$2 } from './Sidebar-1H-lTFTc.mjs';
import { _ as _sfc_main$2$1, a as _sfc_main$3, b as _sfc_main$1$1 } from './TabsList-BnKIeM8c.mjs';
import { _ as _sfc_main$4 } from './TabsContent-CNnpw0A9.mjs';
import { _ as _sfc_main$4$2, a as _sfc_main$3$2, b as _sfc_main$9, c as _sfc_main$2$3, d as _sfc_main$1$3 } from './DialogContent-D_qM7mie.mjs';
import { _ as _sfc_main$a } from './DialogDescription-CL0TXbWH.mjs';
import { _ as _sfc_main$d } from './index-DjUwrDZ-.mjs';
import { _ as _sfc_main$2$4, a as _sfc_main$1$4, b as _sfc_main$3$3, c as _sfc_main$g } from './FormMessage-D6VrvgLL.mjs';
import { useForm, Field } from 'vee-validate';
import { _ as _sfc_main$2$5, a as _sfc_main$1$5, b as _sfc_main$e } from './PopoverContent-CfHqw7rH.mjs';
import { _ as _sfc_main$3$4, a as _sfc_main$f, b as _sfc_main$2$6, c as _sfc_main$1$6 } from './CommandList-CK70UNGB.mjs';
import { _ as _sfc_main$c } from './Input-RlyYgX4o.mjs';
import { defineComponent, ref, mergeProps, unref, isRef, withCtx, createTextVNode, toDisplayString, createBlock, openBlock, Fragment, renderList, createVNode, createCommentVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderAttr } from 'vue/server-renderer';
import { toTypedSchema } from '@vee-validate/zod';
import * as z from 'zod';
import { b as useNuxtApp, u as useHead } from './server.mjs';
import { _ as _sfc_main$8, e as _sfc_main$7 } from './UserListItem-oJMTly4k.mjs';
import { _ as _sfc_main$5, a as _sfc_main$6, b as _sfc_main$2$2, c as _sfc_main$1$2, d as _sfc_main$4$1, e as _sfc_main$3$1 } from './TableHeader-DBebQ5qs.mjs';
import { _ as _sfc_main$b } from './Label-CKHHRe8Y.mjs';
import './index-C246kKmB.mjs';
import 'radix-vue';
import 'lucide-vue-next';
import 'class-variance-authority';
import './utils-DuwrO1cI.mjs';
import 'clsx';
import 'tailwind-merge';
import './nuxt-link-ORrVutoq.mjs';
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
import './auth-CDeEREL9.mjs';
import 'pinia';
import './isLoading-BaPa0n0V.mjs';
import 'vue-router';
import '@vueuse/core';
import '@iconify/vue';
import 'axios';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import 'unhead/plugins';
import 'reka-ui';

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
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
      const _component_UiDialog = _sfc_main$4$2;
      const _component_UiDialogTrigger = _sfc_main$3$2;
      const _component_UiButton = _sfc_main$d;
      const _component_UiDialogContent = _sfc_main$9;
      const _component_UiDialogHeader = _sfc_main$2$3;
      const _component_UiDialogTitle = _sfc_main$1$3;
      const _component_UiDialogDescription = _sfc_main$a;
      const _component_UiFormField = Field;
      const _component_UiFormItem = _sfc_main$2$4;
      const _component_UiFormLabel = _sfc_main$1$4;
      const _component_UiPopover = _sfc_main$2$5;
      const _component_UiPopoverTrigger = _sfc_main$1$5;
      const _component_UiFormControl = _sfc_main$3$3;
      const _component_UiPopoverContent = _sfc_main$e;
      const _component_UiCommand = _sfc_main$3$4;
      const _component_UiCommandList = _sfc_main$f;
      const _component_UiCommandGroup = _sfc_main$2$6;
      const _component_UiCommandItem = _sfc_main$1$6;
      const _component_UiFormMessage = _sfc_main$g;
      const _component_UiInput = _sfc_main$c;
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
                  _push3(ssrRenderComponent(_component_UiButton, { class: "h-8 px-2 py-0 text-nowrap" }, {
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
                      createVNode(_component_UiButton, { class: "h-8 px-2 py-0 text-nowrap" }, {
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
                    createVNode(_component_UiButton, { class: "h-8 px-2 py-0 text-nowrap" }, {
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
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/my/users/CreateModal.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
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
      fullName: "",
      tg_id: 0,
      avatarUrl: null
    });
    const avatarFile = ref(null);
    const avatarPreview = ref(null);
    const isSaving = ref(false);
    const uploadError = ref(null);
    const isEditUserFormOpen = ref(false);
    const deleteUser = async (user) => {
      try {
        await $useApi.delete(`/users/${user.id}`);
        const ws = workspaces.value.find(
          (w) => {
            var _a;
            return (_a = w.groups) == null ? void 0 : _a.some((g) => {
              var _a2;
              return (_a2 = g.users) == null ? void 0 : _a2.some((u) => u.id === user.id);
            });
          }
        );
        if (ws) {
          for (const g of ws.groups) {
            g.users = g.users.filter((u) => u.id !== user.id);
          }
        }
        isEditUserFormOpen.value = false;
      } catch (e) {
        console.log(e);
      }
    };
    const editUser = async () => {
      var _a, _b, _c, _d;
      try {
        isSaving.value = true;
        uploadError.value = null;
        if (avatarFile.value) {
          const fd = new FormData();
          fd.append("file", avatarFile.value);
          const { data } = await $useApi.post(
            `/users/${editedUser.value.id}/avatar`,
            fd,
            { headers: { "Content-Type": "multipart/form-data" } }
          );
          const newUrl = ((_a = data == null ? void 0 : data.user) == null ? void 0 : _a.avatarUrl) || ((_b = data == null ? void 0 : data.telegram) == null ? void 0 : _b.fileUrl) || null;
          if (newUrl) {
            editedUser.value.avatarUrl = newUrl;
            for (const ws of workspaces.value) {
              for (const g of ws.groups) {
                const idx = g.users.findIndex((u) => u.id === editedUser.value.id);
                if (idx !== -1) {
                  g.users[idx].avatarUrl = newUrl;
                  g.users[idx].avatar = newUrl;
                }
              }
            }
          }
        }
        if (editedUser.value.tg_id !== null && !Number.isNaN(Number(editedUser.value.tg_id))) {
          await $useApi.patch(`/users/${editedUser.value.id}`, {
            tg_id: Number(editedUser.value.tg_id)
          });
        }
        if (editedUser.value.password) {
          if (editedUser.value.password.length < 6) {
            console.error("\u041F\u0430\u0440\u043E\u043B\u044C \u0434\u043E\u043B\u0436\u0435\u043D \u0441\u043E\u0434\u0435\u0440\u0436\u0430\u0442\u044C \u043C\u0438\u043D\u0438\u043C\u0443\u043C 6 \u0441\u0438\u043C\u0432\u043E\u043B\u043E\u0432");
            return;
          }
          await $useApi.patch(`/users/${editedUser.value.id}/new-pass`, {
            newPass: editedUser.value.password
          });
        }
        editedUser.value.password = "";
        avatarFile.value = null;
        if (avatarPreview.value) {
          URL.revokeObjectURL(avatarPreview.value);
          avatarPreview.value = null;
        }
        isEditUserFormOpen.value = false;
        console.log("\u0414\u0430\u043D\u043D\u044B\u0435 \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F \u043E\u0431\u043D\u043E\u0432\u043B\u0435\u043D\u044B");
      } catch (e) {
        console.error("\u041E\u0448\u0438\u0431\u043A\u0430 \u043E\u0431\u043D\u043E\u0432\u043B\u0435\u043D\u0438\u044F \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F:", e);
        uploadError.value = ((_d = (_c = e == null ? void 0 : e.response) == null ? void 0 : _c.data) == null ? void 0 : _d.message) || "\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C \u0444\u043E\u0442\u043E";
      } finally {
        isSaving.value = false;
      }
    };
    const onPickAvatar = (e) => {
      var _a;
      const input = e.target;
      const file = ((_a = input.files) == null ? void 0 : _a[0]) || null;
      uploadError.value = null;
      if (file) {
        const allowed = ["image/jpeg", "image/png", "image/webp"];
        if (!allowed.includes(file.type)) {
          uploadError.value = "\u0420\u0430\u0437\u0440\u0435\u0448\u0435\u043D\u044B JPG, PNG, WebP";
          input.value = "";
          return;
        }
        if (file.size > 5 * 1024 * 1024) {
          uploadError.value = "\u0420\u0430\u0437\u043C\u0435\u0440 \u0444\u0430\u0439\u043B\u0430 \u043D\u0435 \u0434\u043E\u043B\u0436\u0435\u043D \u043F\u0440\u0435\u0432\u044B\u0448\u0430\u0442\u044C 5MB";
          input.value = "";
          return;
        }
      }
      avatarFile.value = file || null;
      if (avatarPreview.value) {
        URL.revokeObjectURL(avatarPreview.value);
        avatarPreview.value = null;
      }
      if (file) {
        avatarPreview.value = URL.createObjectURL(file);
      }
    };
    const openEdit = (user) => {
      var _a, _b, _c;
      isEditUserFormOpen.value = true;
      editedUser.value.id = user.id;
      editedUser.value.fullName = user.fullName;
      editedUser.value.password = "";
      editedUser.value.tg_id = typeof user.tg_id === "number" ? user.tg_id : (_a = user.tg) != null ? _a : null;
      editedUser.value.avatarUrl = (_c = (_b = user.avatarUrl) != null ? _b : user.avatar) != null ? _c : null;
      avatarFile.value = null;
      if (avatarPreview.value) {
        URL.revokeObjectURL(avatarPreview.value);
        avatarPreview.value = null;
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_LayoutSidebar = _sfc_main$2;
      const _component_UiTabs = _sfc_main$2$1;
      const _component_UiTabsList = _sfc_main$3;
      const _component_UiTabsTrigger = _sfc_main$1$1;
      const _component_UiTabsContent = _sfc_main$4;
      const _component_MyUsersCreateModal = _sfc_main$1;
      const _component_UiScrollArea = _sfc_main$8;
      const _component_UiTable = _sfc_main$5;
      const _component_UiTableHeader = _sfc_main$6;
      const _component_UiTableRow = _sfc_main$2$2;
      const _component_UiTableHead = _sfc_main$1$2;
      const _component_UiTableBody = _sfc_main$4$1;
      const _component_UiTableCell = _sfc_main$3$1;
      const _component_MyUserListItem = _sfc_main$7;
      const _component_UiDialog = _sfc_main$4$2;
      const _component_UiDialogTrigger = _sfc_main$3$2;
      const _component_UiDialogContent = _sfc_main$9;
      const _component_UiDialogHeader = _sfc_main$2$3;
      const _component_UiDialogTitle = _sfc_main$1$3;
      const _component_UiDialogDescription = _sfc_main$a;
      const _component_UiLabel = _sfc_main$b;
      const _component_UiInput = _sfc_main$c;
      const _component_UiButton = _sfc_main$d;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative h-screen hidden-scrollbar" }, _attrs))}><div class="w-full fixed z-10">`);
      _push(ssrRenderComponent(_component_LayoutSidebar, null, null, _parent));
      _push(`</div><div class="h-[full] flex flex-col p-4 gap-4 mx-[auto] max-w-[2048px] pt-16"><h1 class="text-3xl font-semibold">\u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u0438</h1>`);
      if (unref(workspaces) && unref(curWorkspaceId)) {
        _push(`<div class="mt-2 w-full">`);
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
                                      _push5(ssrRenderComponent(_component_UiScrollArea, { class: "h-[calc(100vh-270px)] mt-3" }, {
                                        default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                          if (_push6) {
                                            _push6(ssrRenderComponent(_component_UiTable, { class: "max-w-[720px] bg-slate-50" }, {
                                              default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                                if (_push7) {
                                                  _push7(ssrRenderComponent(_component_UiTableHeader, null, {
                                                    default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                      if (_push8) {
                                                        _push8(ssrRenderComponent(_component_UiTableRow, null, {
                                                          default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                            if (_push9) {
                                                              _push9(ssrRenderComponent(_component_UiTableHead, { class: "w-[64px] pl-2" }, {
                                                                default: withCtx((_9, _push10, _parent10, _scopeId9) => {
                                                                  if (_push10) {
                                                                    _push10(`\u0418\u043C\u044F `);
                                                                  } else {
                                                                    return [
                                                                      createTextVNode("\u0418\u043C\u044F ")
                                                                    ];
                                                                  }
                                                                }),
                                                                _: 2
                                                              }, _parent9, _scopeId8));
                                                              _push9(ssrRenderComponent(_component_UiTableHead, { class: "text-center" }, {
                                                                default: withCtx((_9, _push10, _parent10, _scopeId9) => {
                                                                  if (_push10) {
                                                                    _push10(`Telegram`);
                                                                  } else {
                                                                    return [
                                                                      createTextVNode("Telegram")
                                                                    ];
                                                                  }
                                                                }),
                                                                _: 2
                                                              }, _parent9, _scopeId8));
                                                            } else {
                                                              return [
                                                                createVNode(_component_UiTableHead, { class: "w-[64px] pl-2" }, {
                                                                  default: withCtx(() => [
                                                                    createTextVNode("\u0418\u043C\u044F ")
                                                                  ]),
                                                                  _: 1
                                                                }),
                                                                createVNode(_component_UiTableHead, { class: "text-center" }, {
                                                                  default: withCtx(() => [
                                                                    createTextVNode("Telegram")
                                                                  ]),
                                                                  _: 1
                                                                })
                                                              ];
                                                            }
                                                          }),
                                                          _: 2
                                                        }, _parent8, _scopeId7));
                                                      } else {
                                                        return [
                                                          createVNode(_component_UiTableRow, null, {
                                                            default: withCtx(() => [
                                                              createVNode(_component_UiTableHead, { class: "w-[64px] pl-2" }, {
                                                                default: withCtx(() => [
                                                                  createTextVNode("\u0418\u043C\u044F ")
                                                                ]),
                                                                _: 1
                                                              }),
                                                              createVNode(_component_UiTableHead, { class: "text-center" }, {
                                                                default: withCtx(() => [
                                                                  createTextVNode("Telegram")
                                                                ]),
                                                                _: 1
                                                              })
                                                            ]),
                                                            _: 1
                                                          })
                                                        ];
                                                      }
                                                    }),
                                                    _: 2
                                                  }, _parent7, _scopeId6));
                                                  _push7(ssrRenderComponent(_component_UiTableBody, null, {
                                                    default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                      if (_push8) {
                                                        _push8(`<!--[-->`);
                                                        ssrRenderList(group.users, (u) => {
                                                          _push8(ssrRenderComponent(_component_UiTableRow, {
                                                            key: u.id,
                                                            class: "cursor-pointer hover:bg-muted/50",
                                                            onClick: ($event) => openEdit(u)
                                                          }, {
                                                            default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                              if (_push9) {
                                                                _push9(ssrRenderComponent(_component_UiTableCell, { class: "py-2" }, {
                                                                  default: withCtx((_9, _push10, _parent10, _scopeId9) => {
                                                                    var _a, _b;
                                                                    if (_push10) {
                                                                      _push10(ssrRenderComponent(_component_MyUserListItem, {
                                                                        "full-name": u.fullName,
                                                                        "role-name": (_a = u.role) == null ? void 0 : _a.fullName,
                                                                        hover: false,
                                                                        "avatar-url": u.avatarUrl,
                                                                        size: "lg"
                                                                      }, null, _parent10, _scopeId9));
                                                                    } else {
                                                                      return [
                                                                        createVNode(_component_MyUserListItem, {
                                                                          "full-name": u.fullName,
                                                                          "role-name": (_b = u.role) == null ? void 0 : _b.fullName,
                                                                          hover: false,
                                                                          "avatar-url": u.avatarUrl,
                                                                          size: "lg"
                                                                        }, null, 8, ["full-name", "role-name", "avatar-url"])
                                                                      ];
                                                                    }
                                                                  }),
                                                                  _: 2
                                                                }, _parent9, _scopeId8));
                                                                _push9(ssrRenderComponent(_component_UiTableCell, { class: "text-center" }, {
                                                                  default: withCtx((_9, _push10, _parent10, _scopeId9) => {
                                                                    var _a, _b, _c, _d;
                                                                    if (_push10) {
                                                                      _push10(`${ssrInterpolate((_b = (_a = u.tg) != null ? _a : u.tg_id) != null ? _b : "\u2014")}`);
                                                                    } else {
                                                                      return [
                                                                        createTextVNode(toDisplayString((_d = (_c = u.tg) != null ? _c : u.tg_id) != null ? _d : "\u2014"), 1)
                                                                      ];
                                                                    }
                                                                  }),
                                                                  _: 2
                                                                }, _parent9, _scopeId8));
                                                              } else {
                                                                return [
                                                                  createVNode(_component_UiTableCell, { class: "py-2" }, {
                                                                    default: withCtx(() => {
                                                                      var _a;
                                                                      return [
                                                                        createVNode(_component_MyUserListItem, {
                                                                          "full-name": u.fullName,
                                                                          "role-name": (_a = u.role) == null ? void 0 : _a.fullName,
                                                                          hover: false,
                                                                          "avatar-url": u.avatarUrl,
                                                                          size: "lg"
                                                                        }, null, 8, ["full-name", "role-name", "avatar-url"])
                                                                      ];
                                                                    }),
                                                                    _: 2
                                                                  }, 1024),
                                                                  createVNode(_component_UiTableCell, { class: "text-center" }, {
                                                                    default: withCtx(() => {
                                                                      var _a, _b;
                                                                      return [
                                                                        createTextVNode(toDisplayString((_b = (_a = u.tg) != null ? _a : u.tg_id) != null ? _b : "\u2014"), 1)
                                                                      ];
                                                                    }),
                                                                    _: 2
                                                                  }, 1024)
                                                                ];
                                                              }
                                                            }),
                                                            _: 2
                                                          }, _parent8, _scopeId7));
                                                        });
                                                        _push8(`<!--]-->`);
                                                      } else {
                                                        return [
                                                          (openBlock(true), createBlock(Fragment, null, renderList(group.users, (u) => {
                                                            return openBlock(), createBlock(_component_UiTableRow, {
                                                              key: u.id,
                                                              class: "cursor-pointer hover:bg-muted/50",
                                                              onClick: ($event) => openEdit(u)
                                                            }, {
                                                              default: withCtx(() => [
                                                                createVNode(_component_UiTableCell, { class: "py-2" }, {
                                                                  default: withCtx(() => {
                                                                    var _a;
                                                                    return [
                                                                      createVNode(_component_MyUserListItem, {
                                                                        "full-name": u.fullName,
                                                                        "role-name": (_a = u.role) == null ? void 0 : _a.fullName,
                                                                        hover: false,
                                                                        "avatar-url": u.avatarUrl,
                                                                        size: "lg"
                                                                      }, null, 8, ["full-name", "role-name", "avatar-url"])
                                                                    ];
                                                                  }),
                                                                  _: 2
                                                                }, 1024),
                                                                createVNode(_component_UiTableCell, { class: "text-center" }, {
                                                                  default: withCtx(() => {
                                                                    var _a, _b;
                                                                    return [
                                                                      createTextVNode(toDisplayString((_b = (_a = u.tg) != null ? _a : u.tg_id) != null ? _b : "\u2014"), 1)
                                                                    ];
                                                                  }),
                                                                  _: 2
                                                                }, 1024)
                                                              ]),
                                                              _: 2
                                                            }, 1032, ["onClick"]);
                                                          }), 128))
                                                        ];
                                                      }
                                                    }),
                                                    _: 2
                                                  }, _parent7, _scopeId6));
                                                } else {
                                                  return [
                                                    createVNode(_component_UiTableHeader, null, {
                                                      default: withCtx(() => [
                                                        createVNode(_component_UiTableRow, null, {
                                                          default: withCtx(() => [
                                                            createVNode(_component_UiTableHead, { class: "w-[64px] pl-2" }, {
                                                              default: withCtx(() => [
                                                                createTextVNode("\u0418\u043C\u044F ")
                                                              ]),
                                                              _: 1
                                                            }),
                                                            createVNode(_component_UiTableHead, { class: "text-center" }, {
                                                              default: withCtx(() => [
                                                                createTextVNode("Telegram")
                                                              ]),
                                                              _: 1
                                                            })
                                                          ]),
                                                          _: 1
                                                        })
                                                      ]),
                                                      _: 1
                                                    }),
                                                    createVNode(_component_UiTableBody, null, {
                                                      default: withCtx(() => [
                                                        (openBlock(true), createBlock(Fragment, null, renderList(group.users, (u) => {
                                                          return openBlock(), createBlock(_component_UiTableRow, {
                                                            key: u.id,
                                                            class: "cursor-pointer hover:bg-muted/50",
                                                            onClick: ($event) => openEdit(u)
                                                          }, {
                                                            default: withCtx(() => [
                                                              createVNode(_component_UiTableCell, { class: "py-2" }, {
                                                                default: withCtx(() => {
                                                                  var _a;
                                                                  return [
                                                                    createVNode(_component_MyUserListItem, {
                                                                      "full-name": u.fullName,
                                                                      "role-name": (_a = u.role) == null ? void 0 : _a.fullName,
                                                                      hover: false,
                                                                      "avatar-url": u.avatarUrl,
                                                                      size: "lg"
                                                                    }, null, 8, ["full-name", "role-name", "avatar-url"])
                                                                  ];
                                                                }),
                                                                _: 2
                                                              }, 1024),
                                                              createVNode(_component_UiTableCell, { class: "text-center" }, {
                                                                default: withCtx(() => {
                                                                  var _a, _b;
                                                                  return [
                                                                    createTextVNode(toDisplayString((_b = (_a = u.tg) != null ? _a : u.tg_id) != null ? _b : "\u2014"), 1)
                                                                  ];
                                                                }),
                                                                _: 2
                                                              }, 1024)
                                                            ]),
                                                            _: 2
                                                          }, 1032, ["onClick"]);
                                                        }), 128))
                                                      ]),
                                                      _: 2
                                                    }, 1024)
                                                  ];
                                                }
                                              }),
                                              _: 2
                                            }, _parent6, _scopeId5));
                                          } else {
                                            return [
                                              createVNode(_component_UiTable, { class: "max-w-[720px] bg-slate-50" }, {
                                                default: withCtx(() => [
                                                  createVNode(_component_UiTableHeader, null, {
                                                    default: withCtx(() => [
                                                      createVNode(_component_UiTableRow, null, {
                                                        default: withCtx(() => [
                                                          createVNode(_component_UiTableHead, { class: "w-[64px] pl-2" }, {
                                                            default: withCtx(() => [
                                                              createTextVNode("\u0418\u043C\u044F ")
                                                            ]),
                                                            _: 1
                                                          }),
                                                          createVNode(_component_UiTableHead, { class: "text-center" }, {
                                                            default: withCtx(() => [
                                                              createTextVNode("Telegram")
                                                            ]),
                                                            _: 1
                                                          })
                                                        ]),
                                                        _: 1
                                                      })
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createVNode(_component_UiTableBody, null, {
                                                    default: withCtx(() => [
                                                      (openBlock(true), createBlock(Fragment, null, renderList(group.users, (u) => {
                                                        return openBlock(), createBlock(_component_UiTableRow, {
                                                          key: u.id,
                                                          class: "cursor-pointer hover:bg-muted/50",
                                                          onClick: ($event) => openEdit(u)
                                                        }, {
                                                          default: withCtx(() => [
                                                            createVNode(_component_UiTableCell, { class: "py-2" }, {
                                                              default: withCtx(() => {
                                                                var _a;
                                                                return [
                                                                  createVNode(_component_MyUserListItem, {
                                                                    "full-name": u.fullName,
                                                                    "role-name": (_a = u.role) == null ? void 0 : _a.fullName,
                                                                    hover: false,
                                                                    "avatar-url": u.avatarUrl,
                                                                    size: "lg"
                                                                  }, null, 8, ["full-name", "role-name", "avatar-url"])
                                                                ];
                                                              }),
                                                              _: 2
                                                            }, 1024),
                                                            createVNode(_component_UiTableCell, { class: "text-center" }, {
                                                              default: withCtx(() => {
                                                                var _a, _b;
                                                                return [
                                                                  createTextVNode(toDisplayString((_b = (_a = u.tg) != null ? _a : u.tg_id) != null ? _b : "\u2014"), 1)
                                                                ];
                                                              }),
                                                              _: 2
                                                            }, 1024)
                                                          ]),
                                                          _: 2
                                                        }, 1032, ["onClick"]);
                                                      }), 128))
                                                    ]),
                                                    _: 2
                                                  }, 1024)
                                                ]),
                                                _: 2
                                              }, 1024)
                                            ];
                                          }
                                        }),
                                        _: 2
                                      }, _parent5, _scopeId4));
                                    } else {
                                      return [
                                        createVNode(_component_MyUsersCreateModal, {
                                          group,
                                          onUserCreated: (createdUser) => group.users.push(createdUser)
                                        }, null, 8, ["group", "onUserCreated"]),
                                        createVNode(_component_UiScrollArea, { class: "h-[calc(100vh-270px)] mt-3" }, {
                                          default: withCtx(() => [
                                            createVNode(_component_UiTable, { class: "max-w-[720px] bg-slate-50" }, {
                                              default: withCtx(() => [
                                                createVNode(_component_UiTableHeader, null, {
                                                  default: withCtx(() => [
                                                    createVNode(_component_UiTableRow, null, {
                                                      default: withCtx(() => [
                                                        createVNode(_component_UiTableHead, { class: "w-[64px] pl-2" }, {
                                                          default: withCtx(() => [
                                                            createTextVNode("\u0418\u043C\u044F ")
                                                          ]),
                                                          _: 1
                                                        }),
                                                        createVNode(_component_UiTableHead, { class: "text-center" }, {
                                                          default: withCtx(() => [
                                                            createTextVNode("Telegram")
                                                          ]),
                                                          _: 1
                                                        })
                                                      ]),
                                                      _: 1
                                                    })
                                                  ]),
                                                  _: 1
                                                }),
                                                createVNode(_component_UiTableBody, null, {
                                                  default: withCtx(() => [
                                                    (openBlock(true), createBlock(Fragment, null, renderList(group.users, (u) => {
                                                      return openBlock(), createBlock(_component_UiTableRow, {
                                                        key: u.id,
                                                        class: "cursor-pointer hover:bg-muted/50",
                                                        onClick: ($event) => openEdit(u)
                                                      }, {
                                                        default: withCtx(() => [
                                                          createVNode(_component_UiTableCell, { class: "py-2" }, {
                                                            default: withCtx(() => {
                                                              var _a;
                                                              return [
                                                                createVNode(_component_MyUserListItem, {
                                                                  "full-name": u.fullName,
                                                                  "role-name": (_a = u.role) == null ? void 0 : _a.fullName,
                                                                  hover: false,
                                                                  "avatar-url": u.avatarUrl,
                                                                  size: "lg"
                                                                }, null, 8, ["full-name", "role-name", "avatar-url"])
                                                              ];
                                                            }),
                                                            _: 2
                                                          }, 1024),
                                                          createVNode(_component_UiTableCell, { class: "text-center" }, {
                                                            default: withCtx(() => {
                                                              var _a, _b;
                                                              return [
                                                                createTextVNode(toDisplayString((_b = (_a = u.tg) != null ? _a : u.tg_id) != null ? _b : "\u2014"), 1)
                                                              ];
                                                            }),
                                                            _: 2
                                                          }, 1024)
                                                        ]),
                                                        _: 2
                                                      }, 1032, ["onClick"]);
                                                    }), 128))
                                                  ]),
                                                  _: 2
                                                }, 1024)
                                              ]),
                                              _: 2
                                            }, 1024)
                                          ]),
                                          _: 2
                                        }, 1024)
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
                                        createVNode(_component_UiScrollArea, { class: "h-[calc(100vh-270px)] mt-3" }, {
                                          default: withCtx(() => [
                                            createVNode(_component_UiTable, { class: "max-w-[720px] bg-slate-50" }, {
                                              default: withCtx(() => [
                                                createVNode(_component_UiTableHeader, null, {
                                                  default: withCtx(() => [
                                                    createVNode(_component_UiTableRow, null, {
                                                      default: withCtx(() => [
                                                        createVNode(_component_UiTableHead, { class: "w-[64px] pl-2" }, {
                                                          default: withCtx(() => [
                                                            createTextVNode("\u0418\u043C\u044F ")
                                                          ]),
                                                          _: 1
                                                        }),
                                                        createVNode(_component_UiTableHead, { class: "text-center" }, {
                                                          default: withCtx(() => [
                                                            createTextVNode("Telegram")
                                                          ]),
                                                          _: 1
                                                        })
                                                      ]),
                                                      _: 1
                                                    })
                                                  ]),
                                                  _: 1
                                                }),
                                                createVNode(_component_UiTableBody, null, {
                                                  default: withCtx(() => [
                                                    (openBlock(true), createBlock(Fragment, null, renderList(group.users, (u) => {
                                                      return openBlock(), createBlock(_component_UiTableRow, {
                                                        key: u.id,
                                                        class: "cursor-pointer hover:bg-muted/50",
                                                        onClick: ($event) => openEdit(u)
                                                      }, {
                                                        default: withCtx(() => [
                                                          createVNode(_component_UiTableCell, { class: "py-2" }, {
                                                            default: withCtx(() => {
                                                              var _a;
                                                              return [
                                                                createVNode(_component_MyUserListItem, {
                                                                  "full-name": u.fullName,
                                                                  "role-name": (_a = u.role) == null ? void 0 : _a.fullName,
                                                                  hover: false,
                                                                  "avatar-url": u.avatarUrl,
                                                                  size: "lg"
                                                                }, null, 8, ["full-name", "role-name", "avatar-url"])
                                                              ];
                                                            }),
                                                            _: 2
                                                          }, 1024),
                                                          createVNode(_component_UiTableCell, { class: "text-center" }, {
                                                            default: withCtx(() => {
                                                              var _a, _b;
                                                              return [
                                                                createTextVNode(toDisplayString((_b = (_a = u.tg) != null ? _a : u.tg_id) != null ? _b : "\u2014"), 1)
                                                              ];
                                                            }),
                                                            _: 2
                                                          }, 1024)
                                                        ]),
                                                        _: 2
                                                      }, 1032, ["onClick"]);
                                                    }), 128))
                                                  ]),
                                                  _: 2
                                                }, 1024)
                                              ]),
                                              _: 2
                                            }, 1024)
                                          ]),
                                          _: 2
                                        }, 1024)
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
                                      createVNode(_component_UiScrollArea, { class: "h-[calc(100vh-270px)] mt-3" }, {
                                        default: withCtx(() => [
                                          createVNode(_component_UiTable, { class: "max-w-[720px] bg-slate-50" }, {
                                            default: withCtx(() => [
                                              createVNode(_component_UiTableHeader, null, {
                                                default: withCtx(() => [
                                                  createVNode(_component_UiTableRow, null, {
                                                    default: withCtx(() => [
                                                      createVNode(_component_UiTableHead, { class: "w-[64px] pl-2" }, {
                                                        default: withCtx(() => [
                                                          createTextVNode("\u0418\u043C\u044F ")
                                                        ]),
                                                        _: 1
                                                      }),
                                                      createVNode(_component_UiTableHead, { class: "text-center" }, {
                                                        default: withCtx(() => [
                                                          createTextVNode("Telegram")
                                                        ]),
                                                        _: 1
                                                      })
                                                    ]),
                                                    _: 1
                                                  })
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(_component_UiTableBody, null, {
                                                default: withCtx(() => [
                                                  (openBlock(true), createBlock(Fragment, null, renderList(group.users, (u) => {
                                                    return openBlock(), createBlock(_component_UiTableRow, {
                                                      key: u.id,
                                                      class: "cursor-pointer hover:bg-muted/50",
                                                      onClick: ($event) => openEdit(u)
                                                    }, {
                                                      default: withCtx(() => [
                                                        createVNode(_component_UiTableCell, { class: "py-2" }, {
                                                          default: withCtx(() => {
                                                            var _a;
                                                            return [
                                                              createVNode(_component_MyUserListItem, {
                                                                "full-name": u.fullName,
                                                                "role-name": (_a = u.role) == null ? void 0 : _a.fullName,
                                                                hover: false,
                                                                "avatar-url": u.avatarUrl,
                                                                size: "lg"
                                                              }, null, 8, ["full-name", "role-name", "avatar-url"])
                                                            ];
                                                          }),
                                                          _: 2
                                                        }, 1024),
                                                        createVNode(_component_UiTableCell, { class: "text-center" }, {
                                                          default: withCtx(() => {
                                                            var _a, _b;
                                                            return [
                                                              createTextVNode(toDisplayString((_b = (_a = u.tg) != null ? _a : u.tg_id) != null ? _b : "\u2014"), 1)
                                                            ];
                                                          }),
                                                          _: 2
                                                        }, 1024)
                                                      ]),
                                                      _: 2
                                                    }, 1032, ["onClick"]);
                                                  }), 128))
                                                ]),
                                                _: 2
                                              }, 1024)
                                            ]),
                                            _: 2
                                          }, 1024)
                                        ]),
                                        _: 2
                                      }, 1024)
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
                                        createVNode(_component_UiScrollArea, { class: "h-[calc(100vh-270px)] mt-3" }, {
                                          default: withCtx(() => [
                                            createVNode(_component_UiTable, { class: "max-w-[720px] bg-slate-50" }, {
                                              default: withCtx(() => [
                                                createVNode(_component_UiTableHeader, null, {
                                                  default: withCtx(() => [
                                                    createVNode(_component_UiTableRow, null, {
                                                      default: withCtx(() => [
                                                        createVNode(_component_UiTableHead, { class: "w-[64px] pl-2" }, {
                                                          default: withCtx(() => [
                                                            createTextVNode("\u0418\u043C\u044F ")
                                                          ]),
                                                          _: 1
                                                        }),
                                                        createVNode(_component_UiTableHead, { class: "text-center" }, {
                                                          default: withCtx(() => [
                                                            createTextVNode("Telegram")
                                                          ]),
                                                          _: 1
                                                        })
                                                      ]),
                                                      _: 1
                                                    })
                                                  ]),
                                                  _: 1
                                                }),
                                                createVNode(_component_UiTableBody, null, {
                                                  default: withCtx(() => [
                                                    (openBlock(true), createBlock(Fragment, null, renderList(group.users, (u) => {
                                                      return openBlock(), createBlock(_component_UiTableRow, {
                                                        key: u.id,
                                                        class: "cursor-pointer hover:bg-muted/50",
                                                        onClick: ($event) => openEdit(u)
                                                      }, {
                                                        default: withCtx(() => [
                                                          createVNode(_component_UiTableCell, { class: "py-2" }, {
                                                            default: withCtx(() => {
                                                              var _a;
                                                              return [
                                                                createVNode(_component_MyUserListItem, {
                                                                  "full-name": u.fullName,
                                                                  "role-name": (_a = u.role) == null ? void 0 : _a.fullName,
                                                                  hover: false,
                                                                  "avatar-url": u.avatarUrl,
                                                                  size: "lg"
                                                                }, null, 8, ["full-name", "role-name", "avatar-url"])
                                                              ];
                                                            }),
                                                            _: 2
                                                          }, 1024),
                                                          createVNode(_component_UiTableCell, { class: "text-center" }, {
                                                            default: withCtx(() => {
                                                              var _a, _b;
                                                              return [
                                                                createTextVNode(toDisplayString((_b = (_a = u.tg) != null ? _a : u.tg_id) != null ? _b : "\u2014"), 1)
                                                              ];
                                                            }),
                                                            _: 2
                                                          }, 1024)
                                                        ]),
                                                        _: 2
                                                      }, 1032, ["onClick"]);
                                                    }), 128))
                                                  ]),
                                                  _: 2
                                                }, 1024)
                                              ]),
                                              _: 2
                                            }, 1024)
                                          ]),
                                          _: 2
                                        }, 1024)
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
            _push2(ssrRenderComponent(_component_UiDialogContent, { class: "max-w-[420px] flex flex-col gap-4" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UiDialogHeader, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_UiDialogTitle, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u043F\u0440\u043E\u0444\u0438\u043B\u044C`);
                            } else {
                              return [
                                createTextVNode("\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u043F\u0440\u043E\u0444\u0438\u043B\u044C")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_UiDialogTitle, null, {
                            default: withCtx(() => [
                              createTextVNode("\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u043F\u0440\u043E\u0444\u0438\u043B\u044C")
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_UiDialogDescription, { class: "text-base font-medium" }, {
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
                  _push3(`<div class="flex items-center gap-4"${_scopeId2}>`);
                  if (!unref(avatarPreview)) {
                    _push3(ssrRenderComponent(_component_MyUserListItem, {
                      "full-name": unref(editedUser).fullName,
                      hover: true,
                      "avatar-url": unref(editedUser).avatarUrl,
                      size: "lg"
                    }, null, _parent3, _scopeId2));
                  } else {
                    _push3(`<img${ssrRenderAttr("src", unref(avatarPreview))} alt="avatar" class="size-16 rounded-full object-cover border"${_scopeId2}>`);
                  }
                  _push3(`<div class="flex flex-col gap-2"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_UiLabel, { class: "text-sm" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C \u0430\u0432\u0430\u0442\u0430\u0440`);
                      } else {
                        return [
                          createTextVNode("\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C \u0430\u0432\u0430\u0442\u0430\u0440")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_UiInput, {
                    type: "file",
                    accept: "image/*",
                    onChange: onPickAvatar
                  }, null, _parent3, _scopeId2));
                  _push3(`<span class="text-xs text-muted-foreground"${_scopeId2}> JPG / PNG / WebP, \u0434\u043E ~5MB </span></div></div><div class="relative"${_scopeId2}>`);
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
                    _push3(`<p class="text-red-500 text-xs -mt-2"${_scopeId2}> \u041F\u0430\u0440\u043E\u043B\u044C \u0434\u043E\u043B\u0436\u0435\u043D \u0441\u043E\u0434\u0435\u0440\u0436\u0430\u0442\u044C \u043C\u0438\u043D\u0438\u043C\u0443\u043C 6 \u0441\u0438\u043C\u0432\u043E\u043B\u043E\u0432 </p>`);
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(`<div class="relative"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Telegram ID`);
                      } else {
                        return [
                          createTextVNode("Telegram ID")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`<div class="flex gap-2"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_UiInput, {
                    modelValue: unref(editedUser).tg_id,
                    "onUpdate:modelValue": ($event) => unref(editedUser).tg_id = $event,
                    modelModifiers: { number: true },
                    type: "number",
                    inputmode: "numeric",
                    placeholder: "\u041D\u0430\u043F\u0440., 123456789"
                  }, null, _parent3, _scopeId2));
                  _push3(`</div></div>`);
                  if (unref(uploadError)) {
                    _push3(`<p class="text-red-500 text-xs -mt-2"${_scopeId2}>${ssrInterpolate(unref(uploadError))}</p>`);
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(`<div class="flex items-center justify-between gap-2 pt-2"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_UiButton, {
                    variant: "destructive",
                    onClick: ($event) => deleteUser({ id: unref(editedUser).id })
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
                  _push3(`<div class="flex gap-2"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_UiButton, {
                    variant: "secondary",
                    onClick: ($event) => isEditUserFormOpen.value = false
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` \u041E\u0442\u043C\u0435\u043D\u0430 `);
                      } else {
                        return [
                          createTextVNode(" \u041E\u0442\u043C\u0435\u043D\u0430 ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_UiButton, { onClick: editUser }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C`);
                      } else {
                        return [
                          createTextVNode("\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div></div>`);
                } else {
                  return [
                    createVNode(_component_UiDialogHeader, null, {
                      default: withCtx(() => [
                        createVNode(_component_UiDialogTitle, null, {
                          default: withCtx(() => [
                            createTextVNode("\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u043F\u0440\u043E\u0444\u0438\u043B\u044C")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(_component_UiDialogDescription, { class: "text-base font-medium" }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(unref(editedUser).fullName), 1)
                      ]),
                      _: 1
                    }),
                    createVNode("div", { class: "flex items-center gap-4" }, [
                      !unref(avatarPreview) ? (openBlock(), createBlock(_component_MyUserListItem, {
                        key: 0,
                        "full-name": unref(editedUser).fullName,
                        hover: true,
                        "avatar-url": unref(editedUser).avatarUrl,
                        size: "lg"
                      }, null, 8, ["full-name", "avatar-url"])) : (openBlock(), createBlock("img", {
                        key: 1,
                        src: unref(avatarPreview),
                        alt: "avatar",
                        class: "size-16 rounded-full object-cover border"
                      }, null, 8, ["src"])),
                      createVNode("div", { class: "flex flex-col gap-2" }, [
                        createVNode(_component_UiLabel, { class: "text-sm" }, {
                          default: withCtx(() => [
                            createTextVNode("\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C \u0430\u0432\u0430\u0442\u0430\u0440")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_UiInput, {
                          type: "file",
                          accept: "image/*",
                          onChange: onPickAvatar
                        }),
                        createVNode("span", { class: "text-xs text-muted-foreground" }, " JPG / PNG / WebP, \u0434\u043E ~5MB ")
                      ])
                    ]),
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
                      class: "text-red-500 text-xs -mt-2"
                    }, " \u041F\u0430\u0440\u043E\u043B\u044C \u0434\u043E\u043B\u0436\u0435\u043D \u0441\u043E\u0434\u0435\u0440\u0436\u0430\u0442\u044C \u043C\u0438\u043D\u0438\u043C\u0443\u043C 6 \u0441\u0438\u043C\u0432\u043E\u043B\u043E\u0432 ")) : createCommentVNode("", true),
                    createVNode("div", { class: "relative" }, [
                      createVNode(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap" }, {
                        default: withCtx(() => [
                          createTextVNode("Telegram ID")
                        ]),
                        _: 1
                      }),
                      createVNode("div", { class: "flex gap-2" }, [
                        createVNode(_component_UiInput, {
                          modelValue: unref(editedUser).tg_id,
                          "onUpdate:modelValue": ($event) => unref(editedUser).tg_id = $event,
                          modelModifiers: { number: true },
                          type: "number",
                          inputmode: "numeric",
                          placeholder: "\u041D\u0430\u043F\u0440., 123456789"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ])
                    ]),
                    unref(uploadError) ? (openBlock(), createBlock("p", {
                      key: 1,
                      class: "text-red-500 text-xs -mt-2"
                    }, toDisplayString(unref(uploadError)), 1)) : createCommentVNode("", true),
                    createVNode("div", { class: "flex items-center justify-between gap-2 pt-2" }, [
                      createVNode(_component_UiButton, {
                        variant: "destructive",
                        onClick: ($event) => deleteUser({ id: unref(editedUser).id })
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" \u0423\u0434\u0430\u043B\u0438\u0442\u044C ")
                        ]),
                        _: 1
                      }, 8, ["onClick"]),
                      createVNode("div", { class: "flex gap-2" }, [
                        createVNode(_component_UiButton, {
                          variant: "secondary",
                          onClick: ($event) => isEditUserFormOpen.value = false
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" \u041E\u0442\u043C\u0435\u043D\u0430 ")
                          ]),
                          _: 1
                        }, 8, ["onClick"]),
                        createVNode(_component_UiButton, { onClick: editUser }, {
                          default: withCtx(() => [
                            createTextVNode("\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C")
                          ]),
                          _: 1
                        })
                      ])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UiDialogTrigger),
              createVNode(_component_UiDialogContent, { class: "max-w-[420px] flex flex-col gap-4" }, {
                default: withCtx(() => [
                  createVNode(_component_UiDialogHeader, null, {
                    default: withCtx(() => [
                      createVNode(_component_UiDialogTitle, null, {
                        default: withCtx(() => [
                          createTextVNode("\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u043F\u0440\u043E\u0444\u0438\u043B\u044C")
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(_component_UiDialogDescription, { class: "text-base font-medium" }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(unref(editedUser).fullName), 1)
                    ]),
                    _: 1
                  }),
                  createVNode("div", { class: "flex items-center gap-4" }, [
                    !unref(avatarPreview) ? (openBlock(), createBlock(_component_MyUserListItem, {
                      key: 0,
                      "full-name": unref(editedUser).fullName,
                      hover: true,
                      "avatar-url": unref(editedUser).avatarUrl,
                      size: "lg"
                    }, null, 8, ["full-name", "avatar-url"])) : (openBlock(), createBlock("img", {
                      key: 1,
                      src: unref(avatarPreview),
                      alt: "avatar",
                      class: "size-16 rounded-full object-cover border"
                    }, null, 8, ["src"])),
                    createVNode("div", { class: "flex flex-col gap-2" }, [
                      createVNode(_component_UiLabel, { class: "text-sm" }, {
                        default: withCtx(() => [
                          createTextVNode("\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C \u0430\u0432\u0430\u0442\u0430\u0440")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_UiInput, {
                        type: "file",
                        accept: "image/*",
                        onChange: onPickAvatar
                      }),
                      createVNode("span", { class: "text-xs text-muted-foreground" }, " JPG / PNG / WebP, \u0434\u043E ~5MB ")
                    ])
                  ]),
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
                    class: "text-red-500 text-xs -mt-2"
                  }, " \u041F\u0430\u0440\u043E\u043B\u044C \u0434\u043E\u043B\u0436\u0435\u043D \u0441\u043E\u0434\u0435\u0440\u0436\u0430\u0442\u044C \u043C\u0438\u043D\u0438\u043C\u0443\u043C 6 \u0441\u0438\u043C\u0432\u043E\u043B\u043E\u0432 ")) : createCommentVNode("", true),
                  createVNode("div", { class: "relative" }, [
                    createVNode(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap" }, {
                      default: withCtx(() => [
                        createTextVNode("Telegram ID")
                      ]),
                      _: 1
                    }),
                    createVNode("div", { class: "flex gap-2" }, [
                      createVNode(_component_UiInput, {
                        modelValue: unref(editedUser).tg_id,
                        "onUpdate:modelValue": ($event) => unref(editedUser).tg_id = $event,
                        modelModifiers: { number: true },
                        type: "number",
                        inputmode: "numeric",
                        placeholder: "\u041D\u0430\u043F\u0440., 123456789"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ])
                  ]),
                  unref(uploadError) ? (openBlock(), createBlock("p", {
                    key: 1,
                    class: "text-red-500 text-xs -mt-2"
                  }, toDisplayString(unref(uploadError)), 1)) : createCommentVNode("", true),
                  createVNode("div", { class: "flex items-center justify-between gap-2 pt-2" }, [
                    createVNode(_component_UiButton, {
                      variant: "destructive",
                      onClick: ($event) => deleteUser({ id: unref(editedUser).id })
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" \u0423\u0434\u0430\u043B\u0438\u0442\u044C ")
                      ]),
                      _: 1
                    }, 8, ["onClick"]),
                    createVNode("div", { class: "flex gap-2" }, [
                      createVNode(_component_UiButton, {
                        variant: "secondary",
                        onClick: ($event) => isEditUserFormOpen.value = false
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" \u041E\u0442\u043C\u0435\u043D\u0430 ")
                        ]),
                        _: 1
                      }, 8, ["onClick"]),
                      createVNode(_component_UiButton, { onClick: editUser }, {
                        default: withCtx(() => [
                          createTextVNode("\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C")
                        ]),
                        _: 1
                      })
                    ])
                  ])
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
//# sourceMappingURL=index-CSLO9RTk.mjs.map
