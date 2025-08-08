import { defineComponent, ref, computed, mergeProps, unref, withCtx, createVNode, createTextVNode, toDisplayString, renderSlot, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrRenderAttr, ssrInterpolate, ssrRenderComponent, ssrRenderSlot } from 'vue/server-renderer';
import { useForwardPropsEmits, DropdownMenuRoot, useForwardProps, DropdownMenuTrigger, DropdownMenuPortal, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuItem } from 'radix-vue';
import { u as useIsLoadingStore, a as useAuthStore, _ as _sfc_main$7, c as cn } from './isLoading-OMYrG8kb.mjs';
import { CircleUser } from 'lucide-vue-next';
import { u as useRouter, s as setPageLayout } from './server.mjs';

const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "DropdownMenu",
  __ssrInlineRender: true,
  props: {
    defaultOpen: { type: Boolean },
    open: { type: Boolean },
    dir: {},
    modal: { type: Boolean }
  },
  emits: ["update:open"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const forwarded = useForwardPropsEmits(props, emits);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(DropdownMenuRoot), mergeProps(unref(forwarded), _attrs), {
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
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/dropdown-menu/DropdownMenu.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "DropdownMenuTrigger",
  __ssrInlineRender: true,
  props: {
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: { type: [String, Object, Function] }
  },
  setup(__props) {
    const props = __props;
    const forwardedProps = useForwardProps(props);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(DropdownMenuTrigger), mergeProps({ class: "outline-none" }, unref(forwardedProps), _attrs), {
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
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/dropdown-menu/DropdownMenuTrigger.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "DropdownMenuContent",
  __ssrInlineRender: true,
  props: {
    forceMount: { type: Boolean },
    loop: { type: Boolean },
    side: {},
    sideOffset: { default: 4 },
    align: {},
    alignOffset: {},
    avoidCollisions: { type: Boolean },
    collisionBoundary: {},
    collisionPadding: {},
    arrowPadding: {},
    sticky: {},
    hideWhenDetached: { type: Boolean },
    updatePositionStrategy: {},
    prioritizePosition: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "closeAutoFocus"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const delegatedProps = computed(() => {
      const { class: _, ...delegated } = props;
      return delegated;
    });
    const forwarded = useForwardPropsEmits(delegatedProps, emits);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(DropdownMenuPortal), _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(DropdownMenuContent), mergeProps(unref(forwarded), {
              class: unref(cn)(
                "z-50 min-w-32 overflow-hidden rounded-md border border-slate-200 bg-white p-1 text-slate-950 shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-50",
                props.class
              )
            }), {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push3, _parent3, _scopeId2);
                } else {
                  return [
                    renderSlot(_ctx.$slots, "default")
                  ];
                }
              }),
              _: 3
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(DropdownMenuContent), mergeProps(unref(forwarded), {
                class: unref(cn)(
                  "z-50 min-w-32 overflow-hidden rounded-md border border-slate-200 bg-white p-1 text-slate-950 shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-50",
                  props.class
                )
              }), {
                default: withCtx(() => [
                  renderSlot(_ctx.$slots, "default")
                ]),
                _: 3
              }, 16, ["class"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/dropdown-menu/DropdownMenuContent.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "DropdownMenuItem",
  __ssrInlineRender: true,
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: { type: [String, Object, Function] },
    class: {},
    inset: { type: Boolean }
  },
  setup(__props) {
    const props = __props;
    const delegatedProps = computed(() => {
      const { class: _, ...delegated } = props;
      return delegated;
    });
    const forwardedProps = useForwardProps(delegatedProps);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(DropdownMenuItem), mergeProps(unref(forwardedProps), {
        class: unref(cn)(
          "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-slate-100 focus:text-slate-900 data-[disabled]:pointer-events-none data-[disabled]:opacity-50 dark:focus:bg-slate-800 dark:focus:text-slate-50",
          _ctx.inset && "pl-8",
          props.class
        )
      }, _attrs), {
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
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/dropdown-menu/DropdownMenuItem.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "DropdownMenuSeparator",
  __ssrInlineRender: true,
  props: {
    asChild: { type: Boolean },
    as: { type: [String, Object, Function] },
    class: {}
  },
  setup(__props) {
    const props = __props;
    const delegatedProps = computed(() => {
      const { class: _, ...delegated } = props;
      return delegated;
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(DropdownMenuSeparator), mergeProps(delegatedProps.value, {
        class: unref(cn)("-mx-1 my-1 h-px bg-slate-100 dark:bg-slate-800", props.class)
      }, _attrs), null, _parent));
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/dropdown-menu/DropdownMenuSeparator.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "DropdownMenuLabel",
  __ssrInlineRender: true,
  props: {
    asChild: { type: Boolean },
    as: { type: [String, Object, Function] },
    class: {},
    inset: { type: Boolean }
  },
  setup(__props) {
    const props = __props;
    const delegatedProps = computed(() => {
      const { class: _, ...delegated } = props;
      return delegated;
    });
    const forwardedProps = useForwardProps(delegatedProps);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(DropdownMenuLabel), mergeProps(unref(forwardedProps), {
        class: unref(cn)("px-2 py-1.5 text-sm font-semibold", _ctx.inset && "pl-8", props.class)
      }, _attrs), {
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
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/dropdown-menu/DropdownMenuLabel.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const MENU_DATA = [
  {
    icon: "mage:dashboard-fill",
    name: "\u0421\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438",
    url: "/workspaces",
    allowedRoles: ["ADMIN", "G", "KD", "DO", "ROP", "ROV", "ROD", "DP"]
  },
  {
    icon: "mdi:deal",
    name: "\u0421\u0434\u0435\u043B\u043A\u0438",
    url: "/deals",
    allowedRoles: [
      "ADMIN",
      "G",
      "KD",
      "DO",
      "ROP",
      "MOP",
      "ROV",
      "MOV",
      "LOGIST",
      "MARKETER"
    ]
  },
  {
    icon: "mdi:users",
    name: "\u041C\u0435\u043D\u0435\u0434\u0436\u0435\u0440\u044B",
    url: "/comercial",
    allowedRoles: ["ADMIN", "G", "KD", "DO", "ROP", "MOP"]
  },
  // {
  //   icon: 'mdi:users',
  //   name: 'VK',
  //   url: '/vk',
  //   allowedRoles: ['ADMIN', 'G'],
  // },
  {
    icon: "mdi:users",
    name: "WB",
    url: "/wb",
    allowedRoles: ["ADMIN", "G", "KD"]
  },
  {
    icon: "mdi:users",
    name: "\u041E\u0442\u0447\u0435\u0442\u044B",
    url: "/reports",
    allowedRoles: ["ADMIN", "G", "KD", "DO", "ROP", "MOP"]
  },
  {
    icon: "mdi:users",
    name: "\u0414\u043E\u0441\u043A\u0430",
    url: "/kaiten",
    allowedRoles: ["ADMIN", "G", "KD"]
  },
  // {
  //   icon: '',
  //   name: 'Зарплаты',
  //   url: '/salaries',
  //   allowedRoles: ['ADMIN', 'G', 'KD', 'DO', 'ROP', 'MOP'],
  // },
  {
    icon: "",
    name: "\u0412\u044B\u043F\u043B\u0430\u0442\u044B",
    url: "/pays",
    allowedRoles: ["ADMIN", "G", "KD", "BUKH", "DO", "ROD", "DP", "ROV"]
  },
  {
    icon: "mdi:users",
    name: "\u0420\u0435\u043A\u043B\u0430\u043C\u0430",
    url: "/ad",
    allowedRoles: ["ADMIN", "G", "KD", "MARKETER"]
  },
  {
    icon: "mdi:users",
    name: "\u0421\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043A\u0430",
    url: "/statistics",
    allowedRoles: ["ADMIN", "G", "KD", "DO"]
  },
  {
    icon: "mdi:users",
    name: "\u041F\u043B\u0430\u043D\u0424\u0430\u043A\u0442",
    url: "/planfact",
    allowedRoles: ["ADMIN", "G", "KD"]
  },
  // {
  //   icon: 'mdi:users',
  //   name: 'Закупки',
  //   url: '/supplies',
  //   allowedRoles: ['ADMIN', 'G', 'LOGIST', 'DP'],
  // },
  {
    icon: "mdi:users",
    name: "\u041F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0441\u0442\u0432\u043E",
    url: "/production",
    allowedRoles: [
      "ADMIN",
      "G",
      "MASTER",
      "DP",
      "LOGIST",
      "PACKER",
      "FINANCIER"
    ]
  },
  // {
  //   icon: "mdi:worker",
  //   name: "Производство",
  //   url: "/prod",
  //   allowedRoles: [
  //     "ADMIN",
  //     "G",
  //     "KD",
  //     "DO",
  //     "ROP",
  //     "MOP",
  //     "ROV",
  //     "MOV",
  //     "ROD",
  //     "DIZ",
  //     "DP",
  //     "RP",
  //     "LOGIST",
  //     "FRZ",
  //     "LAM",
  //     "MASTER",
  //     "PACKER",
  //     "MTZ",
  //   ],
  // },
  {
    icon: "material-symbols:calculate",
    name: "\u041A\u0430\u043B\u044C\u043A\u0443\u043B\u044F\u0442\u043E\u0440",
    url: "/diz",
    allowedRoles: ["ADMIN", "G", "KD", "DO", "ROP", "MOP", "ROD", "DIZ"]
  }
  // {
  //   icon: "mdi:worker",
  //   name: "Производство",
  //   url: "/orders",
  // allowedRoles: ['ADMIN', 'G', 'KD', 'DO', 'ROP', 'MOP', 'ROV', 'MOV', 'ROD', 'DIZ', 'DP', 'RP', 'LOGIST', 'FRZ', 'LAM', 'MASTER', 'PACKER', 'MTZ'];
  // },
  // {
  //   icon: "material-symbols:delivery-truck-speed-rounded",
  //   name: "Отправки",
  //   url: "/deliveries",
  // allowedRoles: ['ADMIN', 'G', 'KD', 'DO', 'ROP', 'MOP', 'ROV', 'MOV', 'ROD', 'DIZ', 'DP', 'RP', 'LOGIST', 'FRZ', 'LAM', 'MASTER', 'PACKER', 'MTZ'];
  // },
  // {
  //   icon: "material-symbols:archive-outline",
  //   name: "Архив",
  //   url: "/archive",
  // allowedRoles: ['ADMIN', 'G', 'KD', 'DO', 'ROP', 'MOP', 'ROV', 'MOV', 'ROD', 'DIZ', 'DP', 'RP', 'LOGIST', 'FRZ', 'LAM', 'MASTER', 'PACKER', 'MTZ'];
  // },
];
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Sidebar",
  __ssrInlineRender: true,
  setup(__props) {
    const isLoadingStore = useIsLoadingStore();
    const authStore = useAuthStore();
    const router = useRouter();
    const userName = ref("name");
    computed(() => {
      var _a, _b;
      const userRole = (_b = (_a = authStore.user) == null ? void 0 : _a.role) == null ? void 0 : _b.shortName;
      return !["DP", "RP", "LOGIST", "FRZ", "LAM", "MASTER", "PACKER"].includes(
        userRole
      );
    });
    const logout = async () => {
      isLoadingStore.set(true);
      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");
      localStorage.removeItem("userName");
      authStore.clearUser();
      router.push("/login");
      isLoadingStore.set(false);
      setPageLayout("login");
    };
    const filteredMenu = computed(() => {
      var _a, _b;
      const userRole = (_b = (_a = authStore.user) == null ? void 0 : _a.role) == null ? void 0 : _b.shortName;
      if (!userRole) return [];
      return MENU_DATA.filter((item) => item.allowedRoles.includes(userRole));
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UiDropdownMenu = _sfc_main$6;
      const _component_UiDropdownMenuTrigger = _sfc_main$5;
      const _component_UiButton = _sfc_main$7;
      const _component_UiDropdownMenuContent = _sfc_main$4;
      const _component_UiDropdownMenuLabel = _sfc_main$1;
      const _component_UiDropdownMenuSeparator = _sfc_main$2;
      const _component_UiDropdownMenuItem = _sfc_main$3;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex bg-white" }, _attrs))}><header class="max-w-[2048px] font-medium text-black/70 w-full mx-[auto] z-10 sticky top-0 h-14 flex justify-between items-center gap-10 border-b bg-background px-4 md:px-6"><!--[-->`);
      ssrRenderList(unref(filteredMenu), (item, i) => {
        _push(`<nav class="flex gap-10 text-sm"><a${ssrRenderAttr("href", item.url)}${ssrRenderAttr("to", item.url)}>${ssrInterpolate(item.name)}</a></nav>`);
      });
      _push(`<!--]--><div class="ml-[auto] mr-4">`);
      _push(ssrRenderComponent(_component_UiDropdownMenu, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UiDropdownMenuTrigger, { "as-child": "" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UiButton, {
                    variant: "secondary",
                    size: "icon",
                    class: "rounded-full"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(CircleUser), { class: "h-6 w-6" }, null, _parent4, _scopeId3));
                        _push4(`<span class="sr-only"${_scopeId3}>Toggle user menu</span>`);
                      } else {
                        return [
                          createVNode(unref(CircleUser), { class: "h-6 w-6" }),
                          createVNode("span", { class: "sr-only" }, "Toggle user menu")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UiButton, {
                      variant: "secondary",
                      size: "icon",
                      class: "rounded-full"
                    }, {
                      default: withCtx(() => [
                        createVNode(unref(CircleUser), { class: "h-6 w-6" }),
                        createVNode("span", { class: "sr-only" }, "Toggle user menu")
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
                  _push3(ssrRenderComponent(_component_UiDropdownMenuLabel, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`${ssrInterpolate(unref(userName))}`);
                      } else {
                        return [
                          createTextVNode(toDisplayString(unref(userName)), 1)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_UiDropdownMenuSeparator, null, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_UiDropdownMenuItem, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<button class="self-center"${_scopeId3}>\u0412\u044B\u0439\u0442\u0438</button>`);
                      } else {
                        return [
                          createVNode("button", {
                            class: "self-center",
                            onClick: logout
                          }, "\u0412\u044B\u0439\u0442\u0438")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UiDropdownMenuLabel, null, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(unref(userName)), 1)
                      ]),
                      _: 1
                    }),
                    createVNode(_component_UiDropdownMenuSeparator),
                    createVNode(_component_UiDropdownMenuItem, null, {
                      default: withCtx(() => [
                        createVNode("button", {
                          class: "self-center",
                          onClick: logout
                        }, "\u0412\u044B\u0439\u0442\u0438")
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
              createVNode(_component_UiDropdownMenuTrigger, { "as-child": "" }, {
                default: withCtx(() => [
                  createVNode(_component_UiButton, {
                    variant: "secondary",
                    size: "icon",
                    class: "rounded-full"
                  }, {
                    default: withCtx(() => [
                      createVNode(unref(CircleUser), { class: "h-6 w-6" }),
                      createVNode("span", { class: "sr-only" }, "Toggle user menu")
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(_component_UiDropdownMenuContent, { align: "end" }, {
                default: withCtx(() => [
                  createVNode(_component_UiDropdownMenuLabel, null, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(unref(userName)), 1)
                    ]),
                    _: 1
                  }),
                  createVNode(_component_UiDropdownMenuSeparator),
                  createVNode(_component_UiDropdownMenuItem, null, {
                    default: withCtx(() => [
                      createVNode("button", {
                        class: "self-center",
                        onClick: logout
                      }, "\u0412\u044B\u0439\u0442\u0438")
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
      _push(`</div></header></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/layout/Sidebar.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _, _sfc_main$6 as a, _sfc_main$5 as b, _sfc_main$4 as c, _sfc_main$1 as d, _sfc_main$3 as e };
//# sourceMappingURL=Sidebar-CU3xTO8i.mjs.map
