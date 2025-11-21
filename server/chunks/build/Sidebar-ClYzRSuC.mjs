import { _ as _sfc_main$2, a as _sfc_main$1$1, b as _sfc_main$4 } from './index-9T5woGxV.mjs';
import { _ as _sfc_main$3 } from './index-B6vrBiru.mjs';
import { _ as _sfc_main$5 } from './ScrollArea-Kzo2fjeX.mjs';
import { _ as __nuxt_component_0 } from './nuxt-link-BxYosf5u.mjs';
import { _ as _sfc_main$4$1, a as _sfc_main$1$2, b as _sfc_main$2$1, c as _sfc_main$6, d as _sfc_main$3$1 } from './index-gpRkqh0i.mjs';
import { _ as _sfc_main$3$2, a as _sfc_main$2$2, b as _sfc_main$1$3, c as _sfc_main$9 } from './DropdownMenuItem-Bzav__sm.mjs';
import { _ as _sfc_main$8 } from './DropdownMenuSeparator-B4V4iajS.mjs';
import { defineComponent, ref, computed, mergeProps, withCtx, createTextVNode, createVNode, toDisplayString, createBlock, openBlock, Fragment, renderList, unref, renderSlot, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderClass, ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderSlot } from 'vue/server-renderer';
import { useForwardProps, DropdownMenuLabel } from 'radix-vue';
import { c as cn } from './utils-TCWotVPY.mjs';
import { _ as _sfc_main$7 } from './UserListItem-w8spDyow.mjs';
import { u as useAuthStore } from './auth-CDeEREL9.mjs';
import { u as useIsLoadingStore } from './isLoading-BaPa0n0V.mjs';
import { useRouter, useRoute } from 'vue-router';
import { s as setPageLayout } from './server.mjs';

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "DropdownMenuLabel",
  __ssrInlineRender: true,
  props: {
    asChild: { type: Boolean },
    as: {},
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
    allowedRoles: ["ADMIN", "G", "KD", "DO", "ROV", "ROD", "DP", "RP"]
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
      // 'LOGIST',
      "MARKETER",
      "ASSISTANT"
    ]
  },
  {
    icon: "mdi:users",
    name: "\u041C\u0435\u043D\u0435\u0434\u0436\u0435\u0440\u044B",
    url: "/commercial",
    allowedRoles: ["ADMIN", "G", "KD", "DO", "ROP", "MOP", "MOV"]
  },
  // {
  //   icon: 'mdi:users',
  //   name: 'VK',
  //   url: '/vk',
  //   allowedRoles: ['ADMIN', 'G'],
  // },
  // {
  //   icon: "mdi:users",
  //   name: "WB",
  //   url: "/wb",
  //   allowedRoles: ["ADMIN", "G", "KD"],
  // },
  {
    icon: "mdi:users",
    name: "\u041E\u0442\u0447\u0435\u0442\u044B",
    url: "/reports",
    allowedRoles: ["ADMIN", "G", "KD", "DO", "ROP", "MOP", "MOV"]
  },
  {
    icon: "mdi:users",
    name: "\u0414\u043E\u0441\u043A\u0438",
    url: "/boards",
    allowedRoles: [
      "ADMIN",
      "G",
      "KD",
      "DO",
      "ROD",
      "MOP",
      "DIZ",
      "DP",
      "RP",
      "ROP",
      "ROV",
      "MOV",
      "ASSISTANT",
      "LOGIST",
      "MASTER",
      "PACKER",
      "FRZ",
      "GUEST"
    ]
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
    allowedRoles: ["ADMIN", "G", "KD", "BUKH"],
    children: [
      {
        name: "\u041E\u043F\u0435\u0440\u0430\u0446\u0438\u0438",
        url: "/planfact/operations",
        allowedRoles: ["ADMIN", "G", "KD", "BUKH"],
        icon: "mdi:users"
      },
      {
        name: "PL",
        url: "/planfact/pl",
        allowedRoles: ["ADMIN", "G", "KD"],
        icon: "mdi:users"
      }
    ]
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
      "KD",
      "MASTER",
      "DP",
      "LOGIST",
      "PACKER",
      "FINANCIER",
      "RP"
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
  },
  {
    icon: "mdi:users",
    name: "VK",
    url: "/vk/stat",
    allowedRoles: ["ADMIN", "G"]
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
    const route = useRoute();
    const userName = ref("name");
    const avatarUrl = ref("");
    const mobileOpen = ref(false);
    const isActive = (to) => route.path.startsWith(to);
    const boards = computed(() => {
      var _a, _b;
      return (_b = (_a = authStore.user) == null ? void 0 : _a.boards) != null ? _b : [];
    });
    const filteredMenu = computed(() => {
      var _a, _b;
      const userRole = (_b = (_a = authStore.user) == null ? void 0 : _a.role) == null ? void 0 : _b.shortName;
      if (!userRole) return [];
      return MENU_DATA.filter(
        (item) => {
          var _a2;
          return !((_a2 = item.allowedRoles) == null ? void 0 : _a2.length) || item.allowedRoles.includes(userRole);
        }
      ).filter((item) => item.name !== "\u0414\u043E\u0441\u043A\u0438" || boards.value.length > 0);
    });
    const logout = async () => {
      isLoadingStore.set(true);
      try {
        localStorage.removeItem("accessToken");
        localStorage.removeItem("refreshToken");
        localStorage.removeItem("userName");
        localStorage.removeItem("avatarUrl");
        authStore.clearUser();
        router.push("/login");
        setPageLayout("login");
      } finally {
        isLoadingStore.set(false);
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UiSheet = _sfc_main$2;
      const _component_UiSheetTrigger = _sfc_main$1$1;
      const _component_UiButton = _sfc_main$3;
      const _component_UiSheetContent = _sfc_main$4;
      const _component_UiScrollArea = _sfc_main$5;
      const _component_NuxtLink = __nuxt_component_0;
      const _component_UiNavigationMenu = _sfc_main$4$1;
      const _component_UiNavigationMenuList = _sfc_main$1$2;
      const _component_UiNavigationMenuItem = _sfc_main$2$1;
      const _component_UiNavigationMenuTrigger = _sfc_main$6;
      const _component_UiNavigationMenuContent = _sfc_main$3$1;
      const _component_UiDropdownMenu = _sfc_main$3$2;
      const _component_UiDropdownMenuTrigger = _sfc_main$2$2;
      const _component_MyUserListItem = _sfc_main$7;
      const _component_UiDropdownMenuContent = _sfc_main$1$3;
      const _component_UiDropdownMenuLabel = _sfc_main$1;
      const _component_UiDropdownMenuSeparator = _sfc_main$8;
      const _component_UiDropdownMenuItem = _sfc_main$9;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex bg-white" }, _attrs))}><header class="${ssrRenderClass([
        "font-medium text-black/70 w-full z-10 sticky top-0 h-14 flex items-center justify-start gap-3 px-4 min-[900px]:px-6",
        isActive("/boards") || isActive("/diz") ? "bg-neutral-900 text-neutral-300" : "bg-background"
      ])}"><div><div class="flex items-center gap-3">`);
      _push(ssrRenderComponent(_component_UiSheet, {
        open: mobileOpen.value,
        "onUpdate:open": ($event) => mobileOpen.value = $event
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UiSheetTrigger, { "as-child": "" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UiButton, {
                    variant: "ghost",
                    size: "icon",
                    class: "min-[900px]:hidden rounded-lg",
                    "aria-label": "\u041E\u0442\u043A\u0440\u044B\u0442\u044C \u043C\u0435\u043D\u044E"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` \u2630 `);
                      } else {
                        return [
                          createTextVNode(" \u2630 ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UiButton, {
                      variant: "ghost",
                      size: "icon",
                      class: "min-[900px]:hidden rounded-lg",
                      "aria-label": "\u041E\u0442\u043A\u0440\u044B\u0442\u044C \u043C\u0435\u043D\u044E"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" \u2630 ")
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UiSheetContent, {
              side: "left",
              class: "w-[88%] max-w-sm p-0 bg-neutral-900 text-neutral-300"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="px-4 py-3 border-b border-neutral-600"${_scopeId2}><div class="text-sm text-neutral-200"${_scopeId2}>\u041C\u0435\u043D\u044E</div><div class="text-base font-semibold"${_scopeId2}>${ssrInterpolate(userName.value)}</div></div>`);
                  _push3(ssrRenderComponent(_component_UiScrollArea, { class: "h-[calc(100vh-100px)]" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<nav class="flex flex-col"${_scopeId3}><!--[-->`);
                        ssrRenderList(filteredMenu.value, (item, i) => {
                          _push4(`<!--[-->`);
                          if (item.children && item.children.length) {
                            _push4(`<div class="border-b border-neutral-600"${_scopeId3}><div class="${ssrRenderClass([
                              isActive(item.url) ? "font-semibold underline" : "",
                              "px-4 py-3 block text-base text-neutral-300"
                            ])}"${_scopeId3}>${ssrInterpolate(item.name)}</div><div class="pl-2 pb-2"${_scopeId3}><!--[-->`);
                            ssrRenderList(item.children, (child, ci) => {
                              _push4(ssrRenderComponent(_component_NuxtLink, {
                                key: ci,
                                to: child.url,
                                class: [
                                  "px-4 py-2 block text-sm hover:bg-neutral-500",
                                  isActive(child.url) ? "font-semibold underline" : "text-neutral-300"
                                ],
                                onClick: ($event) => mobileOpen.value = false
                              }, {
                                default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                  if (_push5) {
                                    _push5(`${ssrInterpolate(child.name)}`);
                                  } else {
                                    return [
                                      createTextVNode(toDisplayString(child.name), 1)
                                    ];
                                  }
                                }),
                                _: 2
                              }, _parent4, _scopeId3));
                            });
                            _push4(`<!--]--></div></div>`);
                          } else {
                            _push4(ssrRenderComponent(_component_NuxtLink, {
                              to: item.url,
                              class: [
                                "px-4 py-3 text-base border-b border-neutral-600 hover:bg-neutral-500",
                                isActive(item.url) ? "font-semibold underline" : "text-neutral-300"
                              ],
                              onClick: ($event) => mobileOpen.value = false
                            }, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(`${ssrInterpolate(item.name)}`);
                                } else {
                                  return [
                                    createTextVNode(toDisplayString(item.name), 1)
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                          }
                          _push4(`<!--]-->`);
                        });
                        _push4(`<!--]--><button class="px-4 py-3 text-left text-red-600 hover:bg-red-50"${_scopeId3}> \u0412\u044B\u0439\u0442\u0438 </button></nav>`);
                      } else {
                        return [
                          createVNode("nav", { class: "flex flex-col" }, [
                            (openBlock(true), createBlock(Fragment, null, renderList(filteredMenu.value, (item, i) => {
                              return openBlock(), createBlock(Fragment, { key: i }, [
                                item.children && item.children.length ? (openBlock(), createBlock("div", {
                                  key: 0,
                                  class: "border-b border-neutral-600"
                                }, [
                                  createVNode("div", {
                                    class: [
                                      "px-4 py-3 block text-base text-neutral-300",
                                      isActive(item.url) ? "font-semibold underline" : ""
                                    ]
                                  }, toDisplayString(item.name), 3),
                                  createVNode("div", { class: "pl-2 pb-2" }, [
                                    (openBlock(true), createBlock(Fragment, null, renderList(item.children, (child, ci) => {
                                      return openBlock(), createBlock(_component_NuxtLink, {
                                        key: ci,
                                        to: child.url,
                                        class: [
                                          "px-4 py-2 block text-sm hover:bg-neutral-500",
                                          isActive(child.url) ? "font-semibold underline" : "text-neutral-300"
                                        ],
                                        onClick: ($event) => mobileOpen.value = false
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(child.name), 1)
                                        ]),
                                        _: 2
                                      }, 1032, ["to", "class", "onClick"]);
                                    }), 128))
                                  ])
                                ])) : (openBlock(), createBlock(_component_NuxtLink, {
                                  key: 1,
                                  to: item.url,
                                  class: [
                                    "px-4 py-3 text-base border-b border-neutral-600 hover:bg-neutral-500",
                                    isActive(item.url) ? "font-semibold underline" : "text-neutral-300"
                                  ],
                                  onClick: ($event) => mobileOpen.value = false
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(item.name), 1)
                                  ]),
                                  _: 2
                                }, 1032, ["to", "class", "onClick"]))
                              ], 64);
                            }), 128)),
                            createVNode("button", {
                              class: "px-4 py-3 text-left text-red-600 hover:bg-red-50",
                              onClick: () => {
                                mobileOpen.value = false;
                                logout();
                              }
                            }, " \u0412\u044B\u0439\u0442\u0438 ", 8, ["onClick"])
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode("div", { class: "px-4 py-3 border-b border-neutral-600" }, [
                      createVNode("div", { class: "text-sm text-neutral-200" }, "\u041C\u0435\u043D\u044E"),
                      createVNode("div", { class: "text-base font-semibold" }, toDisplayString(userName.value), 1)
                    ]),
                    createVNode(_component_UiScrollArea, { class: "h-[calc(100vh-100px)]" }, {
                      default: withCtx(() => [
                        createVNode("nav", { class: "flex flex-col" }, [
                          (openBlock(true), createBlock(Fragment, null, renderList(filteredMenu.value, (item, i) => {
                            return openBlock(), createBlock(Fragment, { key: i }, [
                              item.children && item.children.length ? (openBlock(), createBlock("div", {
                                key: 0,
                                class: "border-b border-neutral-600"
                              }, [
                                createVNode("div", {
                                  class: [
                                    "px-4 py-3 block text-base text-neutral-300",
                                    isActive(item.url) ? "font-semibold underline" : ""
                                  ]
                                }, toDisplayString(item.name), 3),
                                createVNode("div", { class: "pl-2 pb-2" }, [
                                  (openBlock(true), createBlock(Fragment, null, renderList(item.children, (child, ci) => {
                                    return openBlock(), createBlock(_component_NuxtLink, {
                                      key: ci,
                                      to: child.url,
                                      class: [
                                        "px-4 py-2 block text-sm hover:bg-neutral-500",
                                        isActive(child.url) ? "font-semibold underline" : "text-neutral-300"
                                      ],
                                      onClick: ($event) => mobileOpen.value = false
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(child.name), 1)
                                      ]),
                                      _: 2
                                    }, 1032, ["to", "class", "onClick"]);
                                  }), 128))
                                ])
                              ])) : (openBlock(), createBlock(_component_NuxtLink, {
                                key: 1,
                                to: item.url,
                                class: [
                                  "px-4 py-3 text-base border-b border-neutral-600 hover:bg-neutral-500",
                                  isActive(item.url) ? "font-semibold underline" : "text-neutral-300"
                                ],
                                onClick: ($event) => mobileOpen.value = false
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(item.name), 1)
                                ]),
                                _: 2
                              }, 1032, ["to", "class", "onClick"]))
                            ], 64);
                          }), 128)),
                          createVNode("button", {
                            class: "px-4 py-3 text-left text-red-600 hover:bg-red-50",
                            onClick: () => {
                              mobileOpen.value = false;
                              logout();
                            }
                          }, " \u0412\u044B\u0439\u0442\u0438 ", 8, ["onClick"])
                        ])
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
              createVNode(_component_UiSheetTrigger, { "as-child": "" }, {
                default: withCtx(() => [
                  createVNode(_component_UiButton, {
                    variant: "ghost",
                    size: "icon",
                    class: "min-[900px]:hidden rounded-lg",
                    "aria-label": "\u041E\u0442\u043A\u0440\u044B\u0442\u044C \u043C\u0435\u043D\u044E"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" \u2630 ")
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(_component_UiSheetContent, {
                side: "left",
                class: "w-[88%] max-w-sm p-0 bg-neutral-900 text-neutral-300"
              }, {
                default: withCtx(() => [
                  createVNode("div", { class: "px-4 py-3 border-b border-neutral-600" }, [
                    createVNode("div", { class: "text-sm text-neutral-200" }, "\u041C\u0435\u043D\u044E"),
                    createVNode("div", { class: "text-base font-semibold" }, toDisplayString(userName.value), 1)
                  ]),
                  createVNode(_component_UiScrollArea, { class: "h-[calc(100vh-100px)]" }, {
                    default: withCtx(() => [
                      createVNode("nav", { class: "flex flex-col" }, [
                        (openBlock(true), createBlock(Fragment, null, renderList(filteredMenu.value, (item, i) => {
                          return openBlock(), createBlock(Fragment, { key: i }, [
                            item.children && item.children.length ? (openBlock(), createBlock("div", {
                              key: 0,
                              class: "border-b border-neutral-600"
                            }, [
                              createVNode("div", {
                                class: [
                                  "px-4 py-3 block text-base text-neutral-300",
                                  isActive(item.url) ? "font-semibold underline" : ""
                                ]
                              }, toDisplayString(item.name), 3),
                              createVNode("div", { class: "pl-2 pb-2" }, [
                                (openBlock(true), createBlock(Fragment, null, renderList(item.children, (child, ci) => {
                                  return openBlock(), createBlock(_component_NuxtLink, {
                                    key: ci,
                                    to: child.url,
                                    class: [
                                      "px-4 py-2 block text-sm hover:bg-neutral-500",
                                      isActive(child.url) ? "font-semibold underline" : "text-neutral-300"
                                    ],
                                    onClick: ($event) => mobileOpen.value = false
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(child.name), 1)
                                    ]),
                                    _: 2
                                  }, 1032, ["to", "class", "onClick"]);
                                }), 128))
                              ])
                            ])) : (openBlock(), createBlock(_component_NuxtLink, {
                              key: 1,
                              to: item.url,
                              class: [
                                "px-4 py-3 text-base border-b border-neutral-600 hover:bg-neutral-500",
                                isActive(item.url) ? "font-semibold underline" : "text-neutral-300"
                              ],
                              onClick: ($event) => mobileOpen.value = false
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(item.name), 1)
                              ]),
                              _: 2
                            }, 1032, ["to", "class", "onClick"]))
                          ], 64);
                        }), 128)),
                        createVNode("button", {
                          class: "px-4 py-3 text-left text-red-600 hover:bg-red-50",
                          onClick: () => {
                            mobileOpen.value = false;
                            logout();
                          }
                        }, " \u0412\u044B\u0439\u0442\u0438 ", 8, ["onClick"])
                      ])
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
      _push(`</div><nav class="hidden min-[900px]:flex gap-6 text-sm">`);
      _push(ssrRenderComponent(_component_UiNavigationMenu, { viewport: false }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UiNavigationMenuList, { class: "gap-6" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<!--[-->`);
                  ssrRenderList(filteredMenu.value, (item, i) => {
                    _push3(`<!--[-->`);
                    if (item.children && item.children.length) {
                      _push3(ssrRenderComponent(_component_UiNavigationMenuItem, null, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(ssrRenderComponent(_component_UiNavigationMenuTrigger, {
                              class: isActive(item.url) ? "font-bold underline" : "hover:text-bold hover:underline"
                            }, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(`${ssrInterpolate(item.name)}`);
                                } else {
                                  return [
                                    createTextVNode(toDisplayString(item.name), 1)
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                            _push4(ssrRenderComponent(_component_UiNavigationMenuContent, null, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(`<div class="flex flex-col min-w-[200px] p-2"${_scopeId4}><!--[-->`);
                                  ssrRenderList(item.children, (child, ci) => {
                                    _push5(ssrRenderComponent(_component_NuxtLink, {
                                      key: ci,
                                      to: child.url,
                                      class: "block px-3 py-2 rounded hover:bg-neutral-100 whitespace-nowrap"
                                    }, {
                                      default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                        if (_push6) {
                                          _push6(`${ssrInterpolate(child.name)}`);
                                        } else {
                                          return [
                                            createTextVNode(toDisplayString(child.name), 1)
                                          ];
                                        }
                                      }),
                                      _: 2
                                    }, _parent5, _scopeId4));
                                  });
                                  _push5(`<!--]--></div>`);
                                } else {
                                  return [
                                    createVNode("div", { class: "flex flex-col min-w-[200px] p-2" }, [
                                      (openBlock(true), createBlock(Fragment, null, renderList(item.children, (child, ci) => {
                                        return openBlock(), createBlock(_component_NuxtLink, {
                                          key: ci,
                                          to: child.url,
                                          class: "block px-3 py-2 rounded hover:bg-neutral-100 whitespace-nowrap"
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(child.name), 1)
                                          ]),
                                          _: 2
                                        }, 1032, ["to"]);
                                      }), 128))
                                    ])
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                          } else {
                            return [
                              createVNode(_component_UiNavigationMenuTrigger, {
                                class: isActive(item.url) ? "font-bold underline" : "hover:text-bold hover:underline"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(item.name), 1)
                                ]),
                                _: 2
                              }, 1032, ["class"]),
                              createVNode(_component_UiNavigationMenuContent, null, {
                                default: withCtx(() => [
                                  createVNode("div", { class: "flex flex-col min-w-[200px] p-2" }, [
                                    (openBlock(true), createBlock(Fragment, null, renderList(item.children, (child, ci) => {
                                      return openBlock(), createBlock(_component_NuxtLink, {
                                        key: ci,
                                        to: child.url,
                                        class: "block px-3 py-2 rounded hover:bg-neutral-100 whitespace-nowrap"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(child.name), 1)
                                        ]),
                                        _: 2
                                      }, 1032, ["to"]);
                                    }), 128))
                                  ])
                                ]),
                                _: 2
                              }, 1024)
                            ];
                          }
                        }),
                        _: 2
                      }, _parent3, _scopeId2));
                    } else {
                      _push3(ssrRenderComponent(_component_UiNavigationMenuItem, null, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(ssrRenderComponent(_component_NuxtLink, {
                              to: item.url,
                              class: ["hover:text-bold hover:underline", isActive(item.url) ? "font-bold underline" : ""]
                            }, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(`${ssrInterpolate(item.name)}`);
                                } else {
                                  return [
                                    createTextVNode(toDisplayString(item.name), 1)
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                          } else {
                            return [
                              createVNode(_component_NuxtLink, {
                                to: item.url,
                                class: ["hover:text-bold hover:underline", isActive(item.url) ? "font-bold underline" : ""]
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(item.name), 1)
                                ]),
                                _: 2
                              }, 1032, ["to", "class"])
                            ];
                          }
                        }),
                        _: 2
                      }, _parent3, _scopeId2));
                    }
                    _push3(`<!--]-->`);
                  });
                  _push3(`<!--]-->`);
                } else {
                  return [
                    (openBlock(true), createBlock(Fragment, null, renderList(filteredMenu.value, (item, i) => {
                      return openBlock(), createBlock(Fragment, { key: i }, [
                        item.children && item.children.length ? (openBlock(), createBlock(_component_UiNavigationMenuItem, { key: 0 }, {
                          default: withCtx(() => [
                            createVNode(_component_UiNavigationMenuTrigger, {
                              class: isActive(item.url) ? "font-bold underline" : "hover:text-bold hover:underline"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(item.name), 1)
                              ]),
                              _: 2
                            }, 1032, ["class"]),
                            createVNode(_component_UiNavigationMenuContent, null, {
                              default: withCtx(() => [
                                createVNode("div", { class: "flex flex-col min-w-[200px] p-2" }, [
                                  (openBlock(true), createBlock(Fragment, null, renderList(item.children, (child, ci) => {
                                    return openBlock(), createBlock(_component_NuxtLink, {
                                      key: ci,
                                      to: child.url,
                                      class: "block px-3 py-2 rounded hover:bg-neutral-100 whitespace-nowrap"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(child.name), 1)
                                      ]),
                                      _: 2
                                    }, 1032, ["to"]);
                                  }), 128))
                                ])
                              ]),
                              _: 2
                            }, 1024)
                          ]),
                          _: 2
                        }, 1024)) : (openBlock(), createBlock(_component_UiNavigationMenuItem, { key: 1 }, {
                          default: withCtx(() => [
                            createVNode(_component_NuxtLink, {
                              to: item.url,
                              class: ["hover:text-bold hover:underline", isActive(item.url) ? "font-bold underline" : ""]
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(item.name), 1)
                              ]),
                              _: 2
                            }, 1032, ["to", "class"])
                          ]),
                          _: 2
                        }, 1024))
                      ], 64);
                    }), 128))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UiNavigationMenuList, { class: "gap-6" }, {
                default: withCtx(() => [
                  (openBlock(true), createBlock(Fragment, null, renderList(filteredMenu.value, (item, i) => {
                    return openBlock(), createBlock(Fragment, { key: i }, [
                      item.children && item.children.length ? (openBlock(), createBlock(_component_UiNavigationMenuItem, { key: 0 }, {
                        default: withCtx(() => [
                          createVNode(_component_UiNavigationMenuTrigger, {
                            class: isActive(item.url) ? "font-bold underline" : "hover:text-bold hover:underline"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(item.name), 1)
                            ]),
                            _: 2
                          }, 1032, ["class"]),
                          createVNode(_component_UiNavigationMenuContent, null, {
                            default: withCtx(() => [
                              createVNode("div", { class: "flex flex-col min-w-[200px] p-2" }, [
                                (openBlock(true), createBlock(Fragment, null, renderList(item.children, (child, ci) => {
                                  return openBlock(), createBlock(_component_NuxtLink, {
                                    key: ci,
                                    to: child.url,
                                    class: "block px-3 py-2 rounded hover:bg-neutral-100 whitespace-nowrap"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(child.name), 1)
                                    ]),
                                    _: 2
                                  }, 1032, ["to"]);
                                }), 128))
                              ])
                            ]),
                            _: 2
                          }, 1024)
                        ]),
                        _: 2
                      }, 1024)) : (openBlock(), createBlock(_component_UiNavigationMenuItem, { key: 1 }, {
                        default: withCtx(() => [
                          createVNode(_component_NuxtLink, {
                            to: item.url,
                            class: ["hover:text-bold hover:underline", isActive(item.url) ? "font-bold underline" : ""]
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(item.name), 1)
                            ]),
                            _: 2
                          }, 1032, ["to", "class"])
                        ]),
                        _: 2
                      }, 1024))
                    ], 64);
                  }), 128))
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</nav></div><div class="ml-auto flex items-center">`);
      _push(ssrRenderComponent(_component_UiDropdownMenu, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UiDropdownMenuTrigger, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="cursor-pointer"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_MyUserListItem, {
                    "full-name": userName.value,
                    "avatar-url": avatarUrl.value,
                    hover: false,
                    size: "lg",
                    "hide-full-name": true
                  }, null, _parent3, _scopeId2));
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("div", { class: "cursor-pointer" }, [
                      createVNode(_component_MyUserListItem, {
                        "full-name": userName.value,
                        "avatar-url": avatarUrl.value,
                        hover: false,
                        size: "lg",
                        "hide-full-name": true
                      }, null, 8, ["full-name", "avatar-url"])
                    ])
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
                        _push4(`${ssrInterpolate(userName.value)}`);
                      } else {
                        return [
                          createTextVNode(toDisplayString(userName.value), 1)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_UiDropdownMenuSeparator, null, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_UiDropdownMenuItem, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<button class="self-center cursor-pointer"${_scopeId3}> \u0412\u044B\u0439\u0442\u0438 </button>`);
                      } else {
                        return [
                          createVNode("button", {
                            class: "self-center cursor-pointer",
                            onClick: logout
                          }, " \u0412\u044B\u0439\u0442\u0438 ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UiDropdownMenuLabel, null, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(userName.value), 1)
                      ]),
                      _: 1
                    }),
                    createVNode(_component_UiDropdownMenuSeparator),
                    createVNode(_component_UiDropdownMenuItem, null, {
                      default: withCtx(() => [
                        createVNode("button", {
                          class: "self-center cursor-pointer",
                          onClick: logout
                        }, " \u0412\u044B\u0439\u0442\u0438 ")
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
              createVNode(_component_UiDropdownMenuTrigger, null, {
                default: withCtx(() => [
                  createVNode("div", { class: "cursor-pointer" }, [
                    createVNode(_component_MyUserListItem, {
                      "full-name": userName.value,
                      "avatar-url": avatarUrl.value,
                      hover: false,
                      size: "lg",
                      "hide-full-name": true
                    }, null, 8, ["full-name", "avatar-url"])
                  ])
                ]),
                _: 1
              }),
              createVNode(_component_UiDropdownMenuContent, { align: "end" }, {
                default: withCtx(() => [
                  createVNode(_component_UiDropdownMenuLabel, null, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(userName.value), 1)
                    ]),
                    _: 1
                  }),
                  createVNode(_component_UiDropdownMenuSeparator),
                  createVNode(_component_UiDropdownMenuItem, null, {
                    default: withCtx(() => [
                      createVNode("button", {
                        class: "self-center cursor-pointer",
                        onClick: logout
                      }, " \u0412\u044B\u0439\u0442\u0438 ")
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

export { _sfc_main as _, _sfc_main$1 as a };
//# sourceMappingURL=Sidebar-ClYzRSuC.mjs.map
