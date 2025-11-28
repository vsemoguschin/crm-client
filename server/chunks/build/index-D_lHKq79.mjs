import { _ as _sfc_main$3 } from './Sidebar-ClYzRSuC.mjs';
import { _ as _sfc_main$2$1, a as _sfc_main$4, b as _sfc_main$1$1 } from './TabsList-C3eBcFGa.mjs';
import { _ as _sfc_main$5 } from './TabsContent-9LTM_IKf.mjs';
import { _ as _sfc_main$6 } from './AccountsCreateModal-ChJD2iFr.mjs';
import { _ as _sfc_main$7 } from './Card-D2-UPrX8.mjs';
import { _ as _sfc_main$1$2, a as _sfc_main$8 } from './CardTitle-Dyaq6zaM.mjs';
import { _ as _sfc_main$9 } from './CardDescription-CwDlX6V_.mjs';
import { _ as _sfc_main$a } from './CardContent-5uJgHkPl.mjs';
import { _ as _sfc_main$c } from './CardFooter-BUlih3MF.mjs';
import { _ as _sfc_main$5$1, a as _sfc_main$b, b as _sfc_main$2$2, c as _sfc_main$1$3, d as _sfc_main$4$1, e as _sfc_main$3$1 } from './TableHeader-CsCuT7pu.mjs';
import { defineComponent, resolveComponent, mergeProps, withCtx, createTextVNode, createVNode, ref, unref, toDisplayString, createBlock, openBlock, Fragment, renderList, isRef, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import { u as useHead, b as useNuxtApp } from './server.mjs';
import './index-9T5woGxV.mjs';
import 'radix-vue';
import 'lucide-vue-next';
import 'class-variance-authority';
import './utils-TCWotVPY.mjs';
import 'clsx';
import 'tailwind-merge';
import './index-B6vrBiru.mjs';
import './ScrollArea-Kzo2fjeX.mjs';
import './nuxt-link-BxYosf5u.mjs';
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
import 'node:module';
import 'ipx';
import './index-gpRkqh0i.mjs';
import '@vueuse/core';
import 'reka-ui';
import './DropdownMenuItem-Bzav__sm.mjs';
import './DropdownMenuSeparator-B4V4iajS.mjs';
import './UserListItem-w8spDyow.mjs';
import './auth-CDeEREL9.mjs';
import 'pinia';
import './isLoading-BaPa0n0V.mjs';
import 'vue-router';
import './DialogContent-BsO2ljLB.mjs';
import './DialogFooter-CQpXS8R1.mjs';
import './Label-Bxzolydd.mjs';
import './Input-DoHPrX2-.mjs';
import '@iconify/vue';
import 'axios';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import 'unhead/plugins';

const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "Accounts",
  __ssrInlineRender: true,
  setup(__props) {
    const { $useApi } = useNuxtApp();
    const accountsData = ref([
      {
        name: "",
        accountNumber: "",
        balance: 0,
        comment: "",
        isReal: false
      }
    ]);
    const getAccountsDatas = async () => {
      const { data } = await $useApi.get("planfact/accounts", {});
      accountsData.value = data;
      console.log(data);
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_MyPlanfactAccountsCreateModal = _sfc_main$6;
      const _component_UiCard = _sfc_main$7;
      const _component_UiCardHeader = _sfc_main$1$2;
      const _component_UiCardTitle = _sfc_main$8;
      const _component_UiCardDescription = _sfc_main$9;
      const _component_UiCardContent = _sfc_main$a;
      const _component_UiTable = _sfc_main$5$1;
      const _component_UiTableHeader = _sfc_main$b;
      const _component_UiTableRow = _sfc_main$2$2;
      const _component_UiTableHead = _sfc_main$1$3;
      const _component_UiTableBody = _sfc_main$4$1;
      const _component_UiTableCell = _sfc_main$3$1;
      const _component_UiCardFooter = _sfc_main$c;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_MyPlanfactAccountsCreateModal, { onAccountCreated: getAccountsDatas }, null, _parent));
      _push(`<div class="grow mt-2">`);
      _push(ssrRenderComponent(_component_UiCard, { class: "h-full" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UiCardHeader, { class: "pb-0" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UiCardTitle, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`\u0421\u0447\u0435\u0442\u0430`);
                      } else {
                        return [
                          createTextVNode("\u0421\u0447\u0435\u0442\u0430")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_UiCardDescription, null, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UiCardTitle, null, {
                      default: withCtx(() => [
                        createTextVNode("\u0421\u0447\u0435\u0442\u0430")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_UiCardDescription)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UiCardContent, { class: "p-0" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UiTable, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_UiTableHeader, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_UiTableRow, null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_UiTableHead, { class: "text-left" }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435`);
                                        } else {
                                          return [
                                            createTextVNode("\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(_component_UiTableHead, { class: "text-right" }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`\u0411\u0430\u043B\u0430\u043D\u0441`);
                                        } else {
                                          return [
                                            createTextVNode("\u0411\u0430\u043B\u0430\u043D\u0441")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(_component_UiTableHead, { class: "text-right" }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`\u0420\u0435\u043A\u0432\u0438\u0437\u0438\u0442\u044B`);
                                        } else {
                                          return [
                                            createTextVNode("\u0420\u0435\u043A\u0432\u0438\u0437\u0438\u0442\u044B")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_UiTableHead, { class: "text-left" }, {
                                        default: withCtx(() => [
                                          createTextVNode("\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_UiTableHead, { class: "text-right" }, {
                                        default: withCtx(() => [
                                          createTextVNode("\u0411\u0430\u043B\u0430\u043D\u0441")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_UiTableHead, { class: "text-right" }, {
                                        default: withCtx(() => [
                                          createTextVNode("\u0420\u0435\u043A\u0432\u0438\u0437\u0438\u0442\u044B")
                                        ]),
                                        _: 1
                                      })
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_UiTableRow, null, {
                                  default: withCtx(() => [
                                    createVNode(_component_UiTableHead, { class: "text-left" }, {
                                      default: withCtx(() => [
                                        createTextVNode("\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_UiTableHead, { class: "text-right" }, {
                                      default: withCtx(() => [
                                        createTextVNode("\u0411\u0430\u043B\u0430\u043D\u0441")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_UiTableHead, { class: "text-right" }, {
                                      default: withCtx(() => [
                                        createTextVNode("\u0420\u0435\u043A\u0432\u0438\u0437\u0438\u0442\u044B")
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
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_UiTableBody, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<!--[-->`);
                              ssrRenderList(unref(accountsData), (account, i) => {
                                _push5(ssrRenderComponent(_component_UiTableRow, {
                                  key: account.accountNumber
                                }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(ssrRenderComponent(_component_UiTableCell, { class: "font-medium whitespace-nowrap" }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`${ssrInterpolate(i + 1 + ". " + account.name)}`);
                                          } else {
                                            return [
                                              createTextVNode(toDisplayString(i + 1 + ". " + account.name), 1)
                                            ];
                                          }
                                        }),
                                        _: 2
                                      }, _parent6, _scopeId5));
                                      _push6(ssrRenderComponent(_component_UiTableCell, { class: "text-right" }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`${ssrInterpolate(account.balance.toLocaleString() + "\u20BD")}`);
                                          } else {
                                            return [
                                              createTextVNode(toDisplayString(account.balance.toLocaleString() + "\u20BD"), 1)
                                            ];
                                          }
                                        }),
                                        _: 2
                                      }, _parent6, _scopeId5));
                                      _push6(ssrRenderComponent(_component_UiTableCell, { class: "text-right" }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`${ssrInterpolate(account.accountNumber)}`);
                                          } else {
                                            return [
                                              createTextVNode(toDisplayString(account.accountNumber), 1)
                                            ];
                                          }
                                        }),
                                        _: 2
                                      }, _parent6, _scopeId5));
                                    } else {
                                      return [
                                        createVNode(_component_UiTableCell, { class: "font-medium whitespace-nowrap" }, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(i + 1 + ". " + account.name), 1)
                                          ]),
                                          _: 2
                                        }, 1024),
                                        createVNode(_component_UiTableCell, { class: "text-right" }, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(account.balance.toLocaleString() + "\u20BD"), 1)
                                          ]),
                                          _: 2
                                        }, 1024),
                                        createVNode(_component_UiTableCell, { class: "text-right" }, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(account.accountNumber), 1)
                                          ]),
                                          _: 2
                                        }, 1024)
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent5, _scopeId4));
                              });
                              _push5(`<!--]-->`);
                            } else {
                              return [
                                (openBlock(true), createBlock(Fragment, null, renderList(unref(accountsData), (account, i) => {
                                  return openBlock(), createBlock(_component_UiTableRow, {
                                    key: account.accountNumber
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_UiTableCell, { class: "font-medium whitespace-nowrap" }, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(i + 1 + ". " + account.name), 1)
                                        ]),
                                        _: 2
                                      }, 1024),
                                      createVNode(_component_UiTableCell, { class: "text-right" }, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(account.balance.toLocaleString() + "\u20BD"), 1)
                                        ]),
                                        _: 2
                                      }, 1024),
                                      createVNode(_component_UiTableCell, { class: "text-right" }, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(account.accountNumber), 1)
                                        ]),
                                        _: 2
                                      }, 1024)
                                    ]),
                                    _: 2
                                  }, 1024);
                                }), 128))
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_UiTableHeader, null, {
                            default: withCtx(() => [
                              createVNode(_component_UiTableRow, null, {
                                default: withCtx(() => [
                                  createVNode(_component_UiTableHead, { class: "text-left" }, {
                                    default: withCtx(() => [
                                      createTextVNode("\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_UiTableHead, { class: "text-right" }, {
                                    default: withCtx(() => [
                                      createTextVNode("\u0411\u0430\u043B\u0430\u043D\u0441")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_UiTableHead, { class: "text-right" }, {
                                    default: withCtx(() => [
                                      createTextVNode("\u0420\u0435\u043A\u0432\u0438\u0437\u0438\u0442\u044B")
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
                              (openBlock(true), createBlock(Fragment, null, renderList(unref(accountsData), (account, i) => {
                                return openBlock(), createBlock(_component_UiTableRow, {
                                  key: account.accountNumber
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_UiTableCell, { class: "font-medium whitespace-nowrap" }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(i + 1 + ". " + account.name), 1)
                                      ]),
                                      _: 2
                                    }, 1024),
                                    createVNode(_component_UiTableCell, { class: "text-right" }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(account.balance.toLocaleString() + "\u20BD"), 1)
                                      ]),
                                      _: 2
                                    }, 1024),
                                    createVNode(_component_UiTableCell, { class: "text-right" }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(account.accountNumber), 1)
                                      ]),
                                      _: 2
                                    }, 1024)
                                  ]),
                                  _: 2
                                }, 1024);
                              }), 128))
                            ]),
                            _: 2
                          }, 1024)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UiTable, null, {
                      default: withCtx(() => [
                        createVNode(_component_UiTableHeader, null, {
                          default: withCtx(() => [
                            createVNode(_component_UiTableRow, null, {
                              default: withCtx(() => [
                                createVNode(_component_UiTableHead, { class: "text-left" }, {
                                  default: withCtx(() => [
                                    createTextVNode("\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_UiTableHead, { class: "text-right" }, {
                                  default: withCtx(() => [
                                    createTextVNode("\u0411\u0430\u043B\u0430\u043D\u0441")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_UiTableHead, { class: "text-right" }, {
                                  default: withCtx(() => [
                                    createTextVNode("\u0420\u0435\u043A\u0432\u0438\u0437\u0438\u0442\u044B")
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
                            (openBlock(true), createBlock(Fragment, null, renderList(unref(accountsData), (account, i) => {
                              return openBlock(), createBlock(_component_UiTableRow, {
                                key: account.accountNumber
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_UiTableCell, { class: "font-medium whitespace-nowrap" }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(i + 1 + ". " + account.name), 1)
                                    ]),
                                    _: 2
                                  }, 1024),
                                  createVNode(_component_UiTableCell, { class: "text-right" }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(account.balance.toLocaleString() + "\u20BD"), 1)
                                    ]),
                                    _: 2
                                  }, 1024),
                                  createVNode(_component_UiTableCell, { class: "text-right" }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(account.accountNumber), 1)
                                    ]),
                                    _: 2
                                  }, 1024)
                                ]),
                                _: 2
                              }, 1024);
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
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UiCardFooter, { class: "p-0" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UiCardHeader, { class: "pb-0" }, {
                default: withCtx(() => [
                  createVNode(_component_UiCardTitle, null, {
                    default: withCtx(() => [
                      createTextVNode("\u0421\u0447\u0435\u0442\u0430")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_UiCardDescription)
                ]),
                _: 1
              }),
              createVNode(_component_UiCardContent, { class: "p-0" }, {
                default: withCtx(() => [
                  createVNode(_component_UiTable, null, {
                    default: withCtx(() => [
                      createVNode(_component_UiTableHeader, null, {
                        default: withCtx(() => [
                          createVNode(_component_UiTableRow, null, {
                            default: withCtx(() => [
                              createVNode(_component_UiTableHead, { class: "text-left" }, {
                                default: withCtx(() => [
                                  createTextVNode("\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_UiTableHead, { class: "text-right" }, {
                                default: withCtx(() => [
                                  createTextVNode("\u0411\u0430\u043B\u0430\u043D\u0441")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_UiTableHead, { class: "text-right" }, {
                                default: withCtx(() => [
                                  createTextVNode("\u0420\u0435\u043A\u0432\u0438\u0437\u0438\u0442\u044B")
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
                          (openBlock(true), createBlock(Fragment, null, renderList(unref(accountsData), (account, i) => {
                            return openBlock(), createBlock(_component_UiTableRow, {
                              key: account.accountNumber
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_UiTableCell, { class: "font-medium whitespace-nowrap" }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(i + 1 + ". " + account.name), 1)
                                  ]),
                                  _: 2
                                }, 1024),
                                createVNode(_component_UiTableCell, { class: "text-right" }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(account.balance.toLocaleString() + "\u20BD"), 1)
                                  ]),
                                  _: 2
                                }, 1024),
                                createVNode(_component_UiTableCell, { class: "text-right" }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(account.accountNumber), 1)
                                  ]),
                                  _: 2
                                }, 1024)
                              ]),
                              _: 2
                            }, 1024);
                          }), 128))
                        ]),
                        _: 2
                      }, 1024)
                    ]),
                    _: 2
                  }, 1024)
                ]),
                _: 2
              }, 1024),
              createVNode(_component_UiCardFooter, { class: "p-0" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/my/planfact/Accounts.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Categories",
  __ssrInlineRender: true,
  setup(__props) {
    const { $useApi } = useNuxtApp();
    const tabs = ["\u0414\u043E\u0445\u043E\u0434\u044B", "\u0420\u0430\u0441\u0445\u043E\u0434\u044B", "\u0410\u043A\u0442\u0438\u0432\u044B", "\u041E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u0441\u0442\u0432\u0430", "\u041A\u0430\u043F\u0438\u0442\u0430\u043B"];
    const curType = ref(tabs[0]);
    const categories = ref([]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UiTabs = _sfc_main$2$1;
      const _component_UiTabsList = _sfc_main$4;
      const _component_UiTabsTrigger = _sfc_main$1$1;
      const _component_UiTabsContent = _sfc_main$5;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_UiTabs, {
        modelValue: unref(curType),
        "onUpdate:modelValue": ($event) => isRef(curType) ? curType.value = $event : null
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UiTabsList, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<!--[-->`);
                  ssrRenderList(tabs, (type) => {
                    _push3(ssrRenderComponent(_component_UiTabsTrigger, {
                      key: type,
                      value: type
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`${ssrInterpolate(type)}`);
                        } else {
                          return [
                            createTextVNode(toDisplayString(type), 1)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  });
                  _push3(`<!--]-->`);
                } else {
                  return [
                    (openBlock(), createBlock(Fragment, null, renderList(tabs, (type) => {
                      return createVNode(_component_UiTabsTrigger, {
                        key: type,
                        value: type
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(type), 1)
                        ]),
                        _: 2
                      }, 1032, ["value"]);
                    }), 64))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<!--[-->`);
            ssrRenderList(tabs, (type) => {
              _push2(ssrRenderComponent(_component_UiTabsContent, {
                key: type,
                value: type
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<ul${_scopeId2}><!--[-->`);
                    ssrRenderList(unref(categories).filter((c) => c.type === type), (cat) => {
                      _push3(`<li${_scopeId2}>${ssrInterpolate(cat.title)}</li>`);
                    });
                    _push3(`<!--]--></ul>`);
                  } else {
                    return [
                      createVNode("ul", null, [
                        (openBlock(true), createBlock(Fragment, null, renderList(unref(categories).filter((c) => c.type === type), (cat) => {
                          return openBlock(), createBlock("li", {
                            key: cat.id
                          }, toDisplayString(cat.title), 1);
                        }), 128))
                      ])
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
          } else {
            return [
              createVNode(_component_UiTabsList, null, {
                default: withCtx(() => [
                  (openBlock(), createBlock(Fragment, null, renderList(tabs, (type) => {
                    return createVNode(_component_UiTabsTrigger, {
                      key: type,
                      value: type
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(type), 1)
                      ]),
                      _: 2
                    }, 1032, ["value"]);
                  }), 64))
                ]),
                _: 1
              }),
              (openBlock(), createBlock(Fragment, null, renderList(tabs, (type) => {
                return createVNode(_component_UiTabsContent, {
                  key: type,
                  value: type
                }, {
                  default: withCtx(() => [
                    createVNode("ul", null, [
                      (openBlock(true), createBlock(Fragment, null, renderList(unref(categories).filter((c) => c.type === type), (cat) => {
                        return openBlock(), createBlock("li", {
                          key: cat.id
                        }, toDisplayString(cat.title), 1);
                      }), 128))
                    ])
                  ]),
                  _: 2
                }, 1032, ["value"]);
              }), 64))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/my/planfact/Categories.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "\u041F\u043B\u0430\u043D\u0424\u0430\u043A\u0442 | Easy CRM"
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_LayoutSidebar = _sfc_main$3;
      const _component_UiTabs = _sfc_main$2$1;
      const _component_UiTabsList = _sfc_main$4;
      const _component_UiTabsTrigger = _sfc_main$1$1;
      const _component_UiTabsContent = _sfc_main$5;
      const _component_MyPlanfactAccounts = _sfc_main$2;
      const _component_MyPlanfactOperations = resolveComponent("MyPlanfactOperations");
      const _component_MyPlanfactCategories = _sfc_main$1;
      const _component_MyPlanfactPL = resolveComponent("MyPlanfactPL");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative h-screen hidden-scrollbar" }, _attrs))}><div class="w-full fixed z-10">`);
      _push(ssrRenderComponent(_component_LayoutSidebar, null, null, _parent));
      _push(`</div><div class="h-full flex flex-col p-4 gap-2 mx-[auto] max-w-[2048px] pt-16 min-w-[1024px]">`);
      _push(ssrRenderComponent(_component_UiTabs, {
        "default-value": "\u041E\u043F\u0435\u0440\u0430\u0446\u0438\u0438",
        class: "w-full"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UiTabsList, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UiTabsTrigger, { value: "\u041E\u043F\u0435\u0440\u0430\u0446\u0438\u0438" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`\u041E\u043F\u0435\u0440\u0430\u0446\u0438\u0438`);
                      } else {
                        return [
                          createTextVNode("\u041E\u043F\u0435\u0440\u0430\u0446\u0438\u0438")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_UiTabsTrigger, { value: "pl" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`\u041F\u041D\u041B`);
                      } else {
                        return [
                          createTextVNode("\u041F\u041D\u041B")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_UiTabsTrigger, { value: "dds" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`\u0414\u0414\u0421`);
                      } else {
                        return [
                          createTextVNode("\u0414\u0414\u0421")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UiTabsTrigger, { value: "\u041E\u043F\u0435\u0440\u0430\u0446\u0438\u0438" }, {
                      default: withCtx(() => [
                        createTextVNode("\u041E\u043F\u0435\u0440\u0430\u0446\u0438\u0438")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_UiTabsTrigger, { value: "pl" }, {
                      default: withCtx(() => [
                        createTextVNode("\u041F\u041D\u041B")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_UiTabsTrigger, { value: "dds" }, {
                      default: withCtx(() => [
                        createTextVNode("\u0414\u0414\u0421")
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UiTabsContent, { value: "\u0421\u0447\u0435\u0442\u0430" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_MyPlanfactAccounts, null, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_MyPlanfactAccounts)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UiTabsContent, { value: "\u041E\u043F\u0435\u0440\u0430\u0446\u0438\u0438" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_MyPlanfactOperations, null, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_MyPlanfactOperations)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UiTabsContent, { value: "\u0423\u0447\u0435\u0442\u043D\u044B\u0435 \u0441\u0442\u0430\u0442\u044C\u0438" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_MyPlanfactCategories, null, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_MyPlanfactCategories)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UiTabsContent, { value: "pl" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_MyPlanfactPL, null, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_MyPlanfactPL)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UiTabsContent, { value: "dds" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` \u0414\u0414\u0421 `);
                } else {
                  return [
                    createTextVNode(" \u0414\u0414\u0421 ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UiTabsList, null, {
                default: withCtx(() => [
                  createVNode(_component_UiTabsTrigger, { value: "\u041E\u043F\u0435\u0440\u0430\u0446\u0438\u0438" }, {
                    default: withCtx(() => [
                      createTextVNode("\u041E\u043F\u0435\u0440\u0430\u0446\u0438\u0438")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_UiTabsTrigger, { value: "pl" }, {
                    default: withCtx(() => [
                      createTextVNode("\u041F\u041D\u041B")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_UiTabsTrigger, { value: "dds" }, {
                    default: withCtx(() => [
                      createTextVNode("\u0414\u0414\u0421")
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(_component_UiTabsContent, { value: "\u0421\u0447\u0435\u0442\u0430" }, {
                default: withCtx(() => [
                  createVNode(_component_MyPlanfactAccounts)
                ]),
                _: 1
              }),
              createVNode(_component_UiTabsContent, { value: "\u041E\u043F\u0435\u0440\u0430\u0446\u0438\u0438" }, {
                default: withCtx(() => [
                  createVNode(_component_MyPlanfactOperations)
                ]),
                _: 1
              }),
              createVNode(_component_UiTabsContent, { value: "\u0423\u0447\u0435\u0442\u043D\u044B\u0435 \u0441\u0442\u0430\u0442\u044C\u0438" }, {
                default: withCtx(() => [
                  createVNode(_component_MyPlanfactCategories)
                ]),
                _: 1
              }),
              createVNode(_component_UiTabsContent, { value: "pl" }, {
                default: withCtx(() => [
                  createVNode(_component_MyPlanfactPL)
                ]),
                _: 1
              }),
              createVNode(_component_UiTabsContent, { value: "dds" }, {
                default: withCtx(() => [
                  createTextVNode(" \u0414\u0414\u0421 ")
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/planfact/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-D_lHKq79.mjs.map
