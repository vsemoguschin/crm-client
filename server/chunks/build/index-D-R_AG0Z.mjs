import { _ as _sfc_main$4 } from './Sidebar-ClYzRSuC.mjs';
import { _ as _sfc_main$5 } from './Input-DoHPrX2-.mjs';
import { _ as _sfc_main$8 } from './Card-D2-UPrX8.mjs';
import { _ as _sfc_main$1$2, a as _sfc_main$9 } from './CardTitle-Dyaq6zaM.mjs';
import { _ as _sfc_main$a } from './CardDescription-CwDlX6V_.mjs';
import { _ as _sfc_main$b } from './CardContent-5uJgHkPl.mjs';
import { _ as _sfc_main$d } from './CardFooter-BUlih3MF.mjs';
import { _ as _sfc_main$5$1, a as _sfc_main$c, b as _sfc_main$2$2, c as _sfc_main$1$3, d as _sfc_main$4$1, e as _sfc_main$3$1 } from './TableHeader-CsCuT7pu.mjs';
import { u as useMyFormatPrice } from './useMyFormatPrice-CCAsFuev.mjs';
import { defineComponent, ref, mergeProps, unref, isRef, withCtx, createTextVNode, createVNode, watch, toDisplayString, createBlock, openBlock, Fragment, renderList, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList } from 'vue/server-renderer';
import { b as useNuxtApp, u as useHead } from './server.mjs';
import { _ as _sfc_main$2$1, a as _sfc_main$6, b as _sfc_main$1$1 } from './TabsList-C3eBcFGa.mjs';
import { _ as _sfc_main$7 } from './TabsContent-9LTM_IKf.mjs';
import { _ as _sfc_main$e } from './NuxtImg-BJKLxDnu.mjs';
import { _ as _sfc_main$f } from './Separator-DmvFl46f.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
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
import '@iconify/vue';
import 'axios';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import 'unhead/plugins';

const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "StatsCard",
  __ssrInlineRender: true,
  props: {
    period: {}
  },
  setup(__props) {
    const { $useApi } = useNuxtApp();
    const props = __props;
    const stats = ref([]);
    const loading = ref(false);
    const error = ref(null);
    const getWbOrdersStat = async (periodValue) => {
      loading.value = true;
      error.value = null;
      try {
        const { data } = await $useApi.get("wb/orders-stat", {
          params: {
            period: periodValue
          }
        });
        stats.value = data;
      } catch (err) {
        error.value = err.data || {
          message: err.message || "Failed to fetch orders"
        };
        console.error("Error fetching orders:", err);
      } finally {
        loading.value = false;
      }
    };
    watch(
      () => props.period,
      (newPeriod) => {
        getWbOrdersStat(newPeriod);
      },
      { immediate: true }
    );
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UiCard = _sfc_main$8;
      const _component_UiCardHeader = _sfc_main$1$2;
      const _component_UiCardTitle = _sfc_main$9;
      const _component_UiCardDescription = _sfc_main$a;
      const _component_UiCardContent = _sfc_main$b;
      const _component_UiTable = _sfc_main$5$1;
      const _component_UiTableHeader = _sfc_main$c;
      const _component_UiTableRow = _sfc_main$2$2;
      const _component_UiTableHead = _sfc_main$1$3;
      const _component_UiTableBody = _sfc_main$4$1;
      const _component_UiTableCell = _sfc_main$3$1;
      const _component_UiCardFooter = _sfc_main$d;
      _push(ssrRenderComponent(_component_UiCard, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UiCardHeader, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UiCardTitle, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`\u0421\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043A\u0430`);
                      } else {
                        return [
                          createTextVNode("\u0421\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043A\u0430")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_UiCardDescription, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`\u0417\u0430 \u043F\u0435\u0440\u0438\u043E\u0434 ${ssrInterpolate(_ctx.period)}`);
                      } else {
                        return [
                          createTextVNode("\u0417\u0430 \u043F\u0435\u0440\u0438\u043E\u0434 " + toDisplayString(_ctx.period), 1)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UiCardTitle, null, {
                      default: withCtx(() => [
                        createTextVNode("\u0421\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043A\u0430")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_UiCardDescription, null, {
                      default: withCtx(() => [
                        createTextVNode("\u0417\u0430 \u043F\u0435\u0440\u0438\u043E\u0434 " + toDisplayString(_ctx.period), 1)
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UiCardContent, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  if (unref(loading)) {
                    _push3(`<div class="text-gray-500"${_scopeId2}>\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430 \u0441\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043A\u0438...</div>`);
                  } else if (unref(stats).length) {
                    _push3(`<div${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_UiTable, null, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_UiTableHeader, null, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(_component_UiTableRow, null, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(ssrRenderComponent(_component_UiTableHead, null, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`\u0421\u0442\u0430\u0442\u0443\u0441`);
                                          } else {
                                            return [
                                              createTextVNode("\u0421\u0442\u0430\u0442\u0443\u0441")
                                            ];
                                          }
                                        }),
                                        _: 1
                                      }, _parent6, _scopeId5));
                                      _push6(ssrRenderComponent(_component_UiTableHead, { class: "text-right" }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`\u041A\u043E\u043B-\u0432\u043E`);
                                          } else {
                                            return [
                                              createTextVNode("\u041A\u043E\u043B-\u0432\u043E")
                                            ];
                                          }
                                        }),
                                        _: 1
                                      }, _parent6, _scopeId5));
                                      _push6(ssrRenderComponent(_component_UiTableHead, { class: "text-right" }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`\u0421\u0443\u043C\u043C\u0430, \u20BD`);
                                          } else {
                                            return [
                                              createTextVNode("\u0421\u0443\u043C\u043C\u0430, \u20BD")
                                            ];
                                          }
                                        }),
                                        _: 1
                                      }, _parent6, _scopeId5));
                                    } else {
                                      return [
                                        createVNode(_component_UiTableHead, null, {
                                          default: withCtx(() => [
                                            createTextVNode("\u0421\u0442\u0430\u0442\u0443\u0441")
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(_component_UiTableHead, { class: "text-right" }, {
                                          default: withCtx(() => [
                                            createTextVNode("\u041A\u043E\u043B-\u0432\u043E")
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(_component_UiTableHead, { class: "text-right" }, {
                                          default: withCtx(() => [
                                            createTextVNode("\u0421\u0443\u043C\u043C\u0430, \u20BD")
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
                                      createVNode(_component_UiTableHead, null, {
                                        default: withCtx(() => [
                                          createTextVNode("\u0421\u0442\u0430\u0442\u0443\u0441")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_UiTableHead, { class: "text-right" }, {
                                        default: withCtx(() => [
                                          createTextVNode("\u041A\u043E\u043B-\u0432\u043E")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_UiTableHead, { class: "text-right" }, {
                                        default: withCtx(() => [
                                          createTextVNode("\u0421\u0443\u043C\u043C\u0430, \u20BD")
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
                                ssrRenderList(unref(stats), (stat) => {
                                  _push5(ssrRenderComponent(_component_UiTableRow, {
                                    key: stat.status
                                  }, {
                                    default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                      if (_push6) {
                                        _push6(ssrRenderComponent(_component_UiTableCell, null, {
                                          default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                            if (_push7) {
                                              _push7(`${ssrInterpolate(stat.status)}`);
                                            } else {
                                              return [
                                                createTextVNode(toDisplayString(stat.status), 1)
                                              ];
                                            }
                                          }),
                                          _: 2
                                        }, _parent6, _scopeId5));
                                        _push6(ssrRenderComponent(_component_UiTableCell, { class: "text-right" }, {
                                          default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                            if (_push7) {
                                              _push7(`${ssrInterpolate(stat.count)}`);
                                            } else {
                                              return [
                                                createTextVNode(toDisplayString(stat.count), 1)
                                              ];
                                            }
                                          }),
                                          _: 2
                                        }, _parent6, _scopeId5));
                                        _push6(ssrRenderComponent(_component_UiTableCell, { class: "text-right" }, {
                                          default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                            if (_push7) {
                                              _push7(`${ssrInterpolate(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(+stat.totalPrice.toFixed(2)))}`);
                                            } else {
                                              return [
                                                createTextVNode(toDisplayString(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(+stat.totalPrice.toFixed(2))), 1)
                                              ];
                                            }
                                          }),
                                          _: 2
                                        }, _parent6, _scopeId5));
                                      } else {
                                        return [
                                          createVNode(_component_UiTableCell, null, {
                                            default: withCtx(() => [
                                              createTextVNode(toDisplayString(stat.status), 1)
                                            ]),
                                            _: 2
                                          }, 1024),
                                          createVNode(_component_UiTableCell, { class: "text-right" }, {
                                            default: withCtx(() => [
                                              createTextVNode(toDisplayString(stat.count), 1)
                                            ]),
                                            _: 2
                                          }, 1024),
                                          createVNode(_component_UiTableCell, { class: "text-right" }, {
                                            default: withCtx(() => [
                                              createTextVNode(toDisplayString(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(+stat.totalPrice.toFixed(2))), 1)
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
                                _push5(ssrRenderComponent(_component_UiTableRow, null, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(ssrRenderComponent(_component_UiTableCell, { class: "font-bold" }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`\u0418\u0442\u043E\u0433\u043E`);
                                          } else {
                                            return [
                                              createTextVNode("\u0418\u0442\u043E\u0433\u043E")
                                            ];
                                          }
                                        }),
                                        _: 1
                                      }, _parent6, _scopeId5));
                                      _push6(ssrRenderComponent(_component_UiTableCell, { class: "text-right font-bold" }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`${ssrInterpolate(unref(stats).reduce((sum, stat) => sum + stat.count, 0))}`);
                                          } else {
                                            return [
                                              createTextVNode(toDisplayString(unref(stats).reduce((sum, stat) => sum + stat.count, 0)), 1)
                                            ];
                                          }
                                        }),
                                        _: 1
                                      }, _parent6, _scopeId5));
                                      _push6(ssrRenderComponent(_component_UiTableCell, { class: "text-right font-bold" }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`${ssrInterpolate(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(+unref(stats).reduce((sum, stat) => sum + stat.totalPrice, 0).toFixed(2)))}`);
                                          } else {
                                            return [
                                              createTextVNode(toDisplayString(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(+unref(stats).reduce((sum, stat) => sum + stat.totalPrice, 0).toFixed(2))), 1)
                                            ];
                                          }
                                        }),
                                        _: 1
                                      }, _parent6, _scopeId5));
                                    } else {
                                      return [
                                        createVNode(_component_UiTableCell, { class: "font-bold" }, {
                                          default: withCtx(() => [
                                            createTextVNode("\u0418\u0442\u043E\u0433\u043E")
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(_component_UiTableCell, { class: "text-right font-bold" }, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(unref(stats).reduce((sum, stat) => sum + stat.count, 0)), 1)
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(_component_UiTableCell, { class: "text-right font-bold" }, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(+unref(stats).reduce((sum, stat) => sum + stat.totalPrice, 0).toFixed(2))), 1)
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
                                  (openBlock(true), createBlock(Fragment, null, renderList(unref(stats), (stat) => {
                                    return openBlock(), createBlock(_component_UiTableRow, {
                                      key: stat.status
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(_component_UiTableCell, null, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(stat.status), 1)
                                          ]),
                                          _: 2
                                        }, 1024),
                                        createVNode(_component_UiTableCell, { class: "text-right" }, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(stat.count), 1)
                                          ]),
                                          _: 2
                                        }, 1024),
                                        createVNode(_component_UiTableCell, { class: "text-right" }, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(+stat.totalPrice.toFixed(2))), 1)
                                          ]),
                                          _: 2
                                        }, 1024)
                                      ]),
                                      _: 2
                                    }, 1024);
                                  }), 128)),
                                  createVNode(_component_UiTableRow, null, {
                                    default: withCtx(() => [
                                      createVNode(_component_UiTableCell, { class: "font-bold" }, {
                                        default: withCtx(() => [
                                          createTextVNode("\u0418\u0442\u043E\u0433\u043E")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_UiTableCell, { class: "text-right font-bold" }, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(unref(stats).reduce((sum, stat) => sum + stat.count, 0)), 1)
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_UiTableCell, { class: "text-right font-bold" }, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(+unref(stats).reduce((sum, stat) => sum + stat.totalPrice, 0).toFixed(2))), 1)
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
                        } else {
                          return [
                            createVNode(_component_UiTableHeader, null, {
                              default: withCtx(() => [
                                createVNode(_component_UiTableRow, null, {
                                  default: withCtx(() => [
                                    createVNode(_component_UiTableHead, null, {
                                      default: withCtx(() => [
                                        createTextVNode("\u0421\u0442\u0430\u0442\u0443\u0441")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_UiTableHead, { class: "text-right" }, {
                                      default: withCtx(() => [
                                        createTextVNode("\u041A\u043E\u043B-\u0432\u043E")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_UiTableHead, { class: "text-right" }, {
                                      default: withCtx(() => [
                                        createTextVNode("\u0421\u0443\u043C\u043C\u0430, \u20BD")
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
                                (openBlock(true), createBlock(Fragment, null, renderList(unref(stats), (stat) => {
                                  return openBlock(), createBlock(_component_UiTableRow, {
                                    key: stat.status
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_UiTableCell, null, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(stat.status), 1)
                                        ]),
                                        _: 2
                                      }, 1024),
                                      createVNode(_component_UiTableCell, { class: "text-right" }, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(stat.count), 1)
                                        ]),
                                        _: 2
                                      }, 1024),
                                      createVNode(_component_UiTableCell, { class: "text-right" }, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(+stat.totalPrice.toFixed(2))), 1)
                                        ]),
                                        _: 2
                                      }, 1024)
                                    ]),
                                    _: 2
                                  }, 1024);
                                }), 128)),
                                createVNode(_component_UiTableRow, null, {
                                  default: withCtx(() => [
                                    createVNode(_component_UiTableCell, { class: "font-bold" }, {
                                      default: withCtx(() => [
                                        createTextVNode("\u0418\u0442\u043E\u0433\u043E")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_UiTableCell, { class: "text-right font-bold" }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(unref(stats).reduce((sum, stat) => sum + stat.count, 0)), 1)
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_UiTableCell, { class: "text-right font-bold" }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(+unref(stats).reduce((sum, stat) => sum + stat.totalPrice, 0).toFixed(2))), 1)
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
                    }, _parent3, _scopeId2));
                    _push3(`</div>`);
                  } else {
                    _push3(`<div class="text-gray-500"${_scopeId2}>\u0421\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043A\u0430 \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u0430.</div>`);
                  }
                } else {
                  return [
                    unref(loading) ? (openBlock(), createBlock("div", {
                      key: 0,
                      class: "text-gray-500"
                    }, "\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430 \u0441\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043A\u0438...")) : unref(stats).length ? (openBlock(), createBlock("div", { key: 1 }, [
                      createVNode(_component_UiTable, null, {
                        default: withCtx(() => [
                          createVNode(_component_UiTableHeader, null, {
                            default: withCtx(() => [
                              createVNode(_component_UiTableRow, null, {
                                default: withCtx(() => [
                                  createVNode(_component_UiTableHead, null, {
                                    default: withCtx(() => [
                                      createTextVNode("\u0421\u0442\u0430\u0442\u0443\u0441")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_UiTableHead, { class: "text-right" }, {
                                    default: withCtx(() => [
                                      createTextVNode("\u041A\u043E\u043B-\u0432\u043E")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_UiTableHead, { class: "text-right" }, {
                                    default: withCtx(() => [
                                      createTextVNode("\u0421\u0443\u043C\u043C\u0430, \u20BD")
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
                              (openBlock(true), createBlock(Fragment, null, renderList(unref(stats), (stat) => {
                                return openBlock(), createBlock(_component_UiTableRow, {
                                  key: stat.status
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_UiTableCell, null, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(stat.status), 1)
                                      ]),
                                      _: 2
                                    }, 1024),
                                    createVNode(_component_UiTableCell, { class: "text-right" }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(stat.count), 1)
                                      ]),
                                      _: 2
                                    }, 1024),
                                    createVNode(_component_UiTableCell, { class: "text-right" }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(+stat.totalPrice.toFixed(2))), 1)
                                      ]),
                                      _: 2
                                    }, 1024)
                                  ]),
                                  _: 2
                                }, 1024);
                              }), 128)),
                              createVNode(_component_UiTableRow, null, {
                                default: withCtx(() => [
                                  createVNode(_component_UiTableCell, { class: "font-bold" }, {
                                    default: withCtx(() => [
                                      createTextVNode("\u0418\u0442\u043E\u0433\u043E")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_UiTableCell, { class: "text-right font-bold" }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(unref(stats).reduce((sum, stat) => sum + stat.count, 0)), 1)
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_UiTableCell, { class: "text-right font-bold" }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(+unref(stats).reduce((sum, stat) => sum + stat.totalPrice, 0).toFixed(2))), 1)
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
                    ])) : (openBlock(), createBlock("div", {
                      key: 2,
                      class: "text-gray-500"
                    }, "\u0421\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043A\u0430 \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u0430."))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UiCardFooter, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span class="text-sm text-gray-500"${_scopeId2}>\u0414\u0430\u043D\u043D\u044B\u0435 \u0437\u0430 \u0432\u044B\u0431\u0440\u0430\u043D\u043D\u044B\u0439 \u043C\u0435\u0441\u044F\u0446</span>`);
                } else {
                  return [
                    createVNode("span", { class: "text-sm text-gray-500" }, "\u0414\u0430\u043D\u043D\u044B\u0435 \u0437\u0430 \u0432\u044B\u0431\u0440\u0430\u043D\u043D\u044B\u0439 \u043C\u0435\u0441\u044F\u0446")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UiCardHeader, null, {
                default: withCtx(() => [
                  createVNode(_component_UiCardTitle, null, {
                    default: withCtx(() => [
                      createTextVNode("\u0421\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043A\u0430")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_UiCardDescription, null, {
                    default: withCtx(() => [
                      createTextVNode("\u0417\u0430 \u043F\u0435\u0440\u0438\u043E\u0434 " + toDisplayString(_ctx.period), 1)
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(_component_UiCardContent, null, {
                default: withCtx(() => [
                  unref(loading) ? (openBlock(), createBlock("div", {
                    key: 0,
                    class: "text-gray-500"
                  }, "\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430 \u0441\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043A\u0438...")) : unref(stats).length ? (openBlock(), createBlock("div", { key: 1 }, [
                    createVNode(_component_UiTable, null, {
                      default: withCtx(() => [
                        createVNode(_component_UiTableHeader, null, {
                          default: withCtx(() => [
                            createVNode(_component_UiTableRow, null, {
                              default: withCtx(() => [
                                createVNode(_component_UiTableHead, null, {
                                  default: withCtx(() => [
                                    createTextVNode("\u0421\u0442\u0430\u0442\u0443\u0441")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_UiTableHead, { class: "text-right" }, {
                                  default: withCtx(() => [
                                    createTextVNode("\u041A\u043E\u043B-\u0432\u043E")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_UiTableHead, { class: "text-right" }, {
                                  default: withCtx(() => [
                                    createTextVNode("\u0421\u0443\u043C\u043C\u0430, \u20BD")
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
                            (openBlock(true), createBlock(Fragment, null, renderList(unref(stats), (stat) => {
                              return openBlock(), createBlock(_component_UiTableRow, {
                                key: stat.status
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_UiTableCell, null, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(stat.status), 1)
                                    ]),
                                    _: 2
                                  }, 1024),
                                  createVNode(_component_UiTableCell, { class: "text-right" }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(stat.count), 1)
                                    ]),
                                    _: 2
                                  }, 1024),
                                  createVNode(_component_UiTableCell, { class: "text-right" }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(+stat.totalPrice.toFixed(2))), 1)
                                    ]),
                                    _: 2
                                  }, 1024)
                                ]),
                                _: 2
                              }, 1024);
                            }), 128)),
                            createVNode(_component_UiTableRow, null, {
                              default: withCtx(() => [
                                createVNode(_component_UiTableCell, { class: "font-bold" }, {
                                  default: withCtx(() => [
                                    createTextVNode("\u0418\u0442\u043E\u0433\u043E")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_UiTableCell, { class: "text-right font-bold" }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(unref(stats).reduce((sum, stat) => sum + stat.count, 0)), 1)
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_UiTableCell, { class: "text-right font-bold" }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(+unref(stats).reduce((sum, stat) => sum + stat.totalPrice, 0).toFixed(2))), 1)
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
                  ])) : (openBlock(), createBlock("div", {
                    key: 2,
                    class: "text-gray-500"
                  }, "\u0421\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043A\u0430 \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u0430."))
                ]),
                _: 1
              }),
              createVNode(_component_UiCardFooter, null, {
                default: withCtx(() => [
                  createVNode("span", { class: "text-sm text-gray-500" }, "\u0414\u0430\u043D\u043D\u044B\u0435 \u0437\u0430 \u0432\u044B\u0431\u0440\u0430\u043D\u043D\u044B\u0439 \u043C\u0435\u0441\u044F\u0446")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/my/wb/StatsCard.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "WaitingOrders",
  __ssrInlineRender: true,
  setup(__props) {
    const { $useApi } = useNuxtApp();
    const orders = ref([]);
    ref(0);
    const loading = ref(false);
    ref(null);
    const getHoursSinceCreated = (createdAt) => {
      const createdDate = new Date(createdAt);
      const currentDate = /* @__PURE__ */ new Date();
      const diffInMs = currentDate.getTime() - createdDate.getTime();
      return Math.floor(diffInMs / (1e3 * 60 * 60));
    };
    const openInNewWindow = (url) => {
      if (url) {
        (void 0).open(url, "_blank");
      } else {
        console.error("URL \u043E\u0442\u0441\u0443\u0442\u0441\u0442\u0432\u0443\u0435\u0442");
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UiTable = _sfc_main$5$1;
      const _component_UiTableHeader = _sfc_main$c;
      const _component_UiTableRow = _sfc_main$2$2;
      const _component_UiTableHead = _sfc_main$1$3;
      const _component_UiTableBody = _sfc_main$4$1;
      const _component_UiTableCell = _sfc_main$3$1;
      const _component_NuxtImg = _sfc_main$e;
      const _component_UiSeparator = _sfc_main$f;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      if (unref(loading)) {
        _push(`<div class="text-gray-500">\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430 \u0437\u0430\u043A\u0430\u0437\u043E\u0432...</div>`);
      } else if (unref(orders).length) {
        _push(`<div class="w-full overflow-auto bg-slate-100 rounded-md">`);
        _push(ssrRenderComponent(_component_UiTable, null, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_UiTableHeader, { class: "bg-white" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_UiTableRow, null, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_UiTableHead, null, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`\u041D\u043E\u043C\u0435\u0440`);
                              } else {
                                return [
                                  createTextVNode("\u041D\u043E\u043C\u0435\u0440")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(_component_UiTableHead, { class: "text-center" }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`\u0418\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0435`);
                              } else {
                                return [
                                  createTextVNode("\u0418\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0435")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(_component_UiTableHead, null, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435`);
                              } else {
                                return [
                                  createTextVNode("\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(_component_UiTableHead, { class: "text-center" }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`\u0421\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C`);
                              } else {
                                return [
                                  createTextVNode("\u0421\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(_component_UiTableHead, null, {
                              default: withCtx(() => [
                                createTextVNode("\u041D\u043E\u043C\u0435\u0440")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_UiTableHead, { class: "text-center" }, {
                              default: withCtx(() => [
                                createTextVNode("\u0418\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0435")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_UiTableHead, null, {
                              default: withCtx(() => [
                                createTextVNode("\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_UiTableHead, { class: "text-center" }, {
                              default: withCtx(() => [
                                createTextVNode("\u0421\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C")
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
                      createVNode(_component_UiTableRow, null, {
                        default: withCtx(() => [
                          createVNode(_component_UiTableHead, null, {
                            default: withCtx(() => [
                              createTextVNode("\u041D\u043E\u043C\u0435\u0440")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_UiTableHead, { class: "text-center" }, {
                            default: withCtx(() => [
                              createTextVNode("\u0418\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0435")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_UiTableHead, null, {
                            default: withCtx(() => [
                              createTextVNode("\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_UiTableHead, { class: "text-center" }, {
                            default: withCtx(() => [
                              createTextVNode("\u0421\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C")
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
              _push2(ssrRenderComponent(_component_UiTableBody, null, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<!--[-->`);
                    ssrRenderList(unref(orders), (order) => {
                      _push3(ssrRenderComponent(_component_UiTableRow, {
                        key: order.id
                      }, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(ssrRenderComponent(_component_UiTableCell, null, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(`<div class="flex flex-col"${_scopeId4}><span${_scopeId4}>${ssrInterpolate(order.id)}</span><span class="font-bold"${_scopeId4}>${ssrInterpolate(getHoursSinceCreated(order.createdAt))} \u0447. \u043D\u0430\u0437\u0430\u0434 </span><span${_scopeId4}> \u043E\u0442 ${ssrInterpolate(new Date(order.createdAt).toLocaleString().slice(0, 10))}</span></div>`);
                                } else {
                                  return [
                                    createVNode("div", { class: "flex flex-col" }, [
                                      createVNode("span", null, toDisplayString(order.id), 1),
                                      createVNode("span", { class: "font-bold" }, toDisplayString(getHoursSinceCreated(order.createdAt)) + " \u0447. \u043D\u0430\u0437\u0430\u0434 ", 1),
                                      createVNode("span", null, " \u043E\u0442 " + toDisplayString(new Date(order.createdAt).toLocaleString().slice(0, 10)), 1)
                                    ])
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                            _push4(ssrRenderComponent(_component_UiTableCell, null, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(ssrRenderComponent(_component_NuxtImg, {
                                    src: order.preview,
                                    alt: "Preview",
                                    width: "50",
                                    height: "50",
                                    class: "object-cover rounded cursor-pointer m-auto",
                                    onClick: ($event) => openInNewWindow(order.preview)
                                  }, null, _parent5, _scopeId4));
                                } else {
                                  return [
                                    createVNode(_component_NuxtImg, {
                                      src: order.preview,
                                      alt: "Preview",
                                      width: "50",
                                      height: "50",
                                      class: "object-cover rounded cursor-pointer m-auto",
                                      onClick: ($event) => openInNewWindow(order.preview)
                                    }, null, 8, ["src", "onClick"])
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                            _push4(ssrRenderComponent(_component_UiTableCell, null, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(`${ssrInterpolate(order.article)}`);
                                } else {
                                  return [
                                    createTextVNode(toDisplayString(order.article), 1)
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                            _push4(ssrRenderComponent(_component_UiTableCell, { class: "text-center" }, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(`${ssrInterpolate(order.price)}\u0440.`);
                                } else {
                                  return [
                                    createTextVNode(toDisplayString(order.price) + "\u0440.", 1)
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                          } else {
                            return [
                              createVNode(_component_UiTableCell, null, {
                                default: withCtx(() => [
                                  createVNode("div", { class: "flex flex-col" }, [
                                    createVNode("span", null, toDisplayString(order.id), 1),
                                    createVNode("span", { class: "font-bold" }, toDisplayString(getHoursSinceCreated(order.createdAt)) + " \u0447. \u043D\u0430\u0437\u0430\u0434 ", 1),
                                    createVNode("span", null, " \u043E\u0442 " + toDisplayString(new Date(order.createdAt).toLocaleString().slice(0, 10)), 1)
                                  ])
                                ]),
                                _: 2
                              }, 1024),
                              createVNode(_component_UiTableCell, null, {
                                default: withCtx(() => [
                                  createVNode(_component_NuxtImg, {
                                    src: order.preview,
                                    alt: "Preview",
                                    width: "50",
                                    height: "50",
                                    class: "object-cover rounded cursor-pointer m-auto",
                                    onClick: ($event) => openInNewWindow(order.preview)
                                  }, null, 8, ["src", "onClick"])
                                ]),
                                _: 2
                              }, 1024),
                              createVNode(_component_UiTableCell, null, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(order.article), 1)
                                ]),
                                _: 2
                              }, 1024),
                              createVNode(_component_UiTableCell, { class: "text-center" }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(order.price) + "\u0440.", 1)
                                ]),
                                _: 2
                              }, 1024)
                            ];
                          }
                        }),
                        _: 2
                      }, _parent3, _scopeId2));
                    });
                    _push3(`<!--]-->`);
                    _push3(ssrRenderComponent(_component_UiSeparator, null, null, _parent3, _scopeId2));
                  } else {
                    return [
                      (openBlock(true), createBlock(Fragment, null, renderList(unref(orders), (order) => {
                        return openBlock(), createBlock(_component_UiTableRow, {
                          key: order.id
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_UiTableCell, null, {
                              default: withCtx(() => [
                                createVNode("div", { class: "flex flex-col" }, [
                                  createVNode("span", null, toDisplayString(order.id), 1),
                                  createVNode("span", { class: "font-bold" }, toDisplayString(getHoursSinceCreated(order.createdAt)) + " \u0447. \u043D\u0430\u0437\u0430\u0434 ", 1),
                                  createVNode("span", null, " \u043E\u0442 " + toDisplayString(new Date(order.createdAt).toLocaleString().slice(0, 10)), 1)
                                ])
                              ]),
                              _: 2
                            }, 1024),
                            createVNode(_component_UiTableCell, null, {
                              default: withCtx(() => [
                                createVNode(_component_NuxtImg, {
                                  src: order.preview,
                                  alt: "Preview",
                                  width: "50",
                                  height: "50",
                                  class: "object-cover rounded cursor-pointer m-auto",
                                  onClick: ($event) => openInNewWindow(order.preview)
                                }, null, 8, ["src", "onClick"])
                              ]),
                              _: 2
                            }, 1024),
                            createVNode(_component_UiTableCell, null, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(order.article), 1)
                              ]),
                              _: 2
                            }, 1024),
                            createVNode(_component_UiTableCell, { class: "text-center" }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(order.price) + "\u0440.", 1)
                              ]),
                              _: 2
                            }, 1024)
                          ]),
                          _: 2
                        }, 1024);
                      }), 128)),
                      createVNode(_component_UiSeparator)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_UiTableHeader, { class: "bg-white" }, {
                  default: withCtx(() => [
                    createVNode(_component_UiTableRow, null, {
                      default: withCtx(() => [
                        createVNode(_component_UiTableHead, null, {
                          default: withCtx(() => [
                            createTextVNode("\u041D\u043E\u043C\u0435\u0440")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_UiTableHead, { class: "text-center" }, {
                          default: withCtx(() => [
                            createTextVNode("\u0418\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0435")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_UiTableHead, null, {
                          default: withCtx(() => [
                            createTextVNode("\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_UiTableHead, { class: "text-center" }, {
                          default: withCtx(() => [
                            createTextVNode("\u0421\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C")
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
                    (openBlock(true), createBlock(Fragment, null, renderList(unref(orders), (order) => {
                      return openBlock(), createBlock(_component_UiTableRow, {
                        key: order.id
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_UiTableCell, null, {
                            default: withCtx(() => [
                              createVNode("div", { class: "flex flex-col" }, [
                                createVNode("span", null, toDisplayString(order.id), 1),
                                createVNode("span", { class: "font-bold" }, toDisplayString(getHoursSinceCreated(order.createdAt)) + " \u0447. \u043D\u0430\u0437\u0430\u0434 ", 1),
                                createVNode("span", null, " \u043E\u0442 " + toDisplayString(new Date(order.createdAt).toLocaleString().slice(0, 10)), 1)
                              ])
                            ]),
                            _: 2
                          }, 1024),
                          createVNode(_component_UiTableCell, null, {
                            default: withCtx(() => [
                              createVNode(_component_NuxtImg, {
                                src: order.preview,
                                alt: "Preview",
                                width: "50",
                                height: "50",
                                class: "object-cover rounded cursor-pointer m-auto",
                                onClick: ($event) => openInNewWindow(order.preview)
                              }, null, 8, ["src", "onClick"])
                            ]),
                            _: 2
                          }, 1024),
                          createVNode(_component_UiTableCell, null, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(order.article), 1)
                            ]),
                            _: 2
                          }, 1024),
                          createVNode(_component_UiTableCell, { class: "text-center" }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(order.price) + "\u0440.", 1)
                            ]),
                            _: 2
                          }, 1024)
                        ]),
                        _: 2
                      }, 1024);
                    }), 128)),
                    createVNode(_component_UiSeparator)
                  ]),
                  _: 2
                }, 1024)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      } else {
        _push(`<div class="text-gray-500">\u0417\u0430\u043A\u0430\u0437\u044B \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u044B.</div>`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/my/wb/WaitingOrders.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "newOrders",
  __ssrInlineRender: true,
  setup(__props) {
    const { $useApi } = useNuxtApp();
    const orders = ref([]);
    ref(0);
    const loading = ref(false);
    ref(null);
    const getHoursSinceCreated = (createdAt) => {
      const createdDate = new Date(createdAt);
      const currentDate = /* @__PURE__ */ new Date();
      const diffInMs = currentDate.getTime() - createdDate.getTime();
      return Math.floor(diffInMs / (1e3 * 60 * 60));
    };
    const openInNewWindow = (url) => {
      if (url) {
        (void 0).open(url, "_blank");
      } else {
        console.error("URL \u043E\u0442\u0441\u0443\u0442\u0441\u0442\u0432\u0443\u0435\u0442");
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UiTable = _sfc_main$5$1;
      const _component_UiTableHeader = _sfc_main$c;
      const _component_UiTableRow = _sfc_main$2$2;
      const _component_UiTableHead = _sfc_main$1$3;
      const _component_UiTableBody = _sfc_main$4$1;
      const _component_UiTableCell = _sfc_main$3$1;
      const _component_NuxtImg = _sfc_main$e;
      const _component_UiSeparator = _sfc_main$f;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      if (unref(loading)) {
        _push(`<div class="text-gray-500">\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430 \u0437\u0430\u043A\u0430\u0437\u043E\u0432...</div>`);
      } else if (unref(orders).length) {
        _push(`<div class="w-full overflow-auto bg-slate-100 rounded-md">`);
        _push(ssrRenderComponent(_component_UiTable, null, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_UiTableHeader, { class: "bg-white" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_UiTableRow, null, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_UiTableHead, null, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`\u041D\u043E\u043C\u0435\u0440`);
                              } else {
                                return [
                                  createTextVNode("\u041D\u043E\u043C\u0435\u0440")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(_component_UiTableHead, { class: "text-center" }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`\u0418\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0435`);
                              } else {
                                return [
                                  createTextVNode("\u0418\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0435")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(_component_UiTableHead, null, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435`);
                              } else {
                                return [
                                  createTextVNode("\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(_component_UiTableHead, { class: "text-center" }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`\u0421\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C`);
                              } else {
                                return [
                                  createTextVNode("\u0421\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(_component_UiTableHead, null, {
                              default: withCtx(() => [
                                createTextVNode("\u041D\u043E\u043C\u0435\u0440")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_UiTableHead, { class: "text-center" }, {
                              default: withCtx(() => [
                                createTextVNode("\u0418\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0435")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_UiTableHead, null, {
                              default: withCtx(() => [
                                createTextVNode("\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_UiTableHead, { class: "text-center" }, {
                              default: withCtx(() => [
                                createTextVNode("\u0421\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C")
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
                      createVNode(_component_UiTableRow, null, {
                        default: withCtx(() => [
                          createVNode(_component_UiTableHead, null, {
                            default: withCtx(() => [
                              createTextVNode("\u041D\u043E\u043C\u0435\u0440")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_UiTableHead, { class: "text-center" }, {
                            default: withCtx(() => [
                              createTextVNode("\u0418\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0435")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_UiTableHead, null, {
                            default: withCtx(() => [
                              createTextVNode("\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_UiTableHead, { class: "text-center" }, {
                            default: withCtx(() => [
                              createTextVNode("\u0421\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C")
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
              _push2(ssrRenderComponent(_component_UiTableBody, null, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<!--[-->`);
                    ssrRenderList(unref(orders), (order) => {
                      _push3(ssrRenderComponent(_component_UiTableRow, {
                        key: order.id
                      }, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(ssrRenderComponent(_component_UiTableCell, null, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(`<div class="flex flex-col"${_scopeId4}><span${_scopeId4}>${ssrInterpolate(order.id)}</span><span class="font-bold"${_scopeId4}>${ssrInterpolate(getHoursSinceCreated(order.createdAt))} \u0447. \u043D\u0430\u0437\u0430\u0434 </span><span${_scopeId4}> \u043E\u0442 ${ssrInterpolate(new Date(order.createdAt).toLocaleString().slice(0, 10))}</span></div>`);
                                } else {
                                  return [
                                    createVNode("div", { class: "flex flex-col" }, [
                                      createVNode("span", null, toDisplayString(order.id), 1),
                                      createVNode("span", { class: "font-bold" }, toDisplayString(getHoursSinceCreated(order.createdAt)) + " \u0447. \u043D\u0430\u0437\u0430\u0434 ", 1),
                                      createVNode("span", null, " \u043E\u0442 " + toDisplayString(new Date(order.createdAt).toLocaleString().slice(0, 10)), 1)
                                    ])
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                            _push4(ssrRenderComponent(_component_UiTableCell, null, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(ssrRenderComponent(_component_NuxtImg, {
                                    src: order.preview,
                                    alt: "Preview",
                                    width: "50",
                                    height: "50",
                                    class: "object-cover rounded cursor-pointer m-auto",
                                    onClick: ($event) => openInNewWindow(order.preview)
                                  }, null, _parent5, _scopeId4));
                                } else {
                                  return [
                                    createVNode(_component_NuxtImg, {
                                      src: order.preview,
                                      alt: "Preview",
                                      width: "50",
                                      height: "50",
                                      class: "object-cover rounded cursor-pointer m-auto",
                                      onClick: ($event) => openInNewWindow(order.preview)
                                    }, null, 8, ["src", "onClick"])
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                            _push4(ssrRenderComponent(_component_UiTableCell, null, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(`${ssrInterpolate(order.article)}`);
                                } else {
                                  return [
                                    createTextVNode(toDisplayString(order.article), 1)
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                            _push4(ssrRenderComponent(_component_UiTableCell, { class: "text-center" }, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(`${ssrInterpolate(order.price)}\u0440.`);
                                } else {
                                  return [
                                    createTextVNode(toDisplayString(order.price) + "\u0440.", 1)
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                          } else {
                            return [
                              createVNode(_component_UiTableCell, null, {
                                default: withCtx(() => [
                                  createVNode("div", { class: "flex flex-col" }, [
                                    createVNode("span", null, toDisplayString(order.id), 1),
                                    createVNode("span", { class: "font-bold" }, toDisplayString(getHoursSinceCreated(order.createdAt)) + " \u0447. \u043D\u0430\u0437\u0430\u0434 ", 1),
                                    createVNode("span", null, " \u043E\u0442 " + toDisplayString(new Date(order.createdAt).toLocaleString().slice(0, 10)), 1)
                                  ])
                                ]),
                                _: 2
                              }, 1024),
                              createVNode(_component_UiTableCell, null, {
                                default: withCtx(() => [
                                  createVNode(_component_NuxtImg, {
                                    src: order.preview,
                                    alt: "Preview",
                                    width: "50",
                                    height: "50",
                                    class: "object-cover rounded cursor-pointer m-auto",
                                    onClick: ($event) => openInNewWindow(order.preview)
                                  }, null, 8, ["src", "onClick"])
                                ]),
                                _: 2
                              }, 1024),
                              createVNode(_component_UiTableCell, null, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(order.article), 1)
                                ]),
                                _: 2
                              }, 1024),
                              createVNode(_component_UiTableCell, { class: "text-center" }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(order.price) + "\u0440.", 1)
                                ]),
                                _: 2
                              }, 1024)
                            ];
                          }
                        }),
                        _: 2
                      }, _parent3, _scopeId2));
                    });
                    _push3(`<!--]-->`);
                    _push3(ssrRenderComponent(_component_UiSeparator, null, null, _parent3, _scopeId2));
                  } else {
                    return [
                      (openBlock(true), createBlock(Fragment, null, renderList(unref(orders), (order) => {
                        return openBlock(), createBlock(_component_UiTableRow, {
                          key: order.id
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_UiTableCell, null, {
                              default: withCtx(() => [
                                createVNode("div", { class: "flex flex-col" }, [
                                  createVNode("span", null, toDisplayString(order.id), 1),
                                  createVNode("span", { class: "font-bold" }, toDisplayString(getHoursSinceCreated(order.createdAt)) + " \u0447. \u043D\u0430\u0437\u0430\u0434 ", 1),
                                  createVNode("span", null, " \u043E\u0442 " + toDisplayString(new Date(order.createdAt).toLocaleString().slice(0, 10)), 1)
                                ])
                              ]),
                              _: 2
                            }, 1024),
                            createVNode(_component_UiTableCell, null, {
                              default: withCtx(() => [
                                createVNode(_component_NuxtImg, {
                                  src: order.preview,
                                  alt: "Preview",
                                  width: "50",
                                  height: "50",
                                  class: "object-cover rounded cursor-pointer m-auto",
                                  onClick: ($event) => openInNewWindow(order.preview)
                                }, null, 8, ["src", "onClick"])
                              ]),
                              _: 2
                            }, 1024),
                            createVNode(_component_UiTableCell, null, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(order.article), 1)
                              ]),
                              _: 2
                            }, 1024),
                            createVNode(_component_UiTableCell, { class: "text-center" }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(order.price) + "\u0440.", 1)
                              ]),
                              _: 2
                            }, 1024)
                          ]),
                          _: 2
                        }, 1024);
                      }), 128)),
                      createVNode(_component_UiSeparator)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_UiTableHeader, { class: "bg-white" }, {
                  default: withCtx(() => [
                    createVNode(_component_UiTableRow, null, {
                      default: withCtx(() => [
                        createVNode(_component_UiTableHead, null, {
                          default: withCtx(() => [
                            createTextVNode("\u041D\u043E\u043C\u0435\u0440")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_UiTableHead, { class: "text-center" }, {
                          default: withCtx(() => [
                            createTextVNode("\u0418\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0435")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_UiTableHead, null, {
                          default: withCtx(() => [
                            createTextVNode("\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_UiTableHead, { class: "text-center" }, {
                          default: withCtx(() => [
                            createTextVNode("\u0421\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C")
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
                    (openBlock(true), createBlock(Fragment, null, renderList(unref(orders), (order) => {
                      return openBlock(), createBlock(_component_UiTableRow, {
                        key: order.id
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_UiTableCell, null, {
                            default: withCtx(() => [
                              createVNode("div", { class: "flex flex-col" }, [
                                createVNode("span", null, toDisplayString(order.id), 1),
                                createVNode("span", { class: "font-bold" }, toDisplayString(getHoursSinceCreated(order.createdAt)) + " \u0447. \u043D\u0430\u0437\u0430\u0434 ", 1),
                                createVNode("span", null, " \u043E\u0442 " + toDisplayString(new Date(order.createdAt).toLocaleString().slice(0, 10)), 1)
                              ])
                            ]),
                            _: 2
                          }, 1024),
                          createVNode(_component_UiTableCell, null, {
                            default: withCtx(() => [
                              createVNode(_component_NuxtImg, {
                                src: order.preview,
                                alt: "Preview",
                                width: "50",
                                height: "50",
                                class: "object-cover rounded cursor-pointer m-auto",
                                onClick: ($event) => openInNewWindow(order.preview)
                              }, null, 8, ["src", "onClick"])
                            ]),
                            _: 2
                          }, 1024),
                          createVNode(_component_UiTableCell, null, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(order.article), 1)
                            ]),
                            _: 2
                          }, 1024),
                          createVNode(_component_UiTableCell, { class: "text-center" }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(order.price) + "\u0440.", 1)
                            ]),
                            _: 2
                          }, 1024)
                        ]),
                        _: 2
                      }, 1024);
                    }), 128)),
                    createVNode(_component_UiSeparator)
                  ]),
                  _: 2
                }, 1024)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      } else {
        _push(`<div class="text-gray-500">\u0417\u0430\u043A\u0430\u0437\u044B \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u044B.</div>`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/my/wb/newOrders.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const { $useApi } = useNuxtApp();
    useHead({
      title: "WB | Easy CRM"
    });
    const curTab = ref("new");
    const period = ref((/* @__PURE__ */ new Date()).toISOString().slice(0, 7));
    return (_ctx, _push, _parent, _attrs) => {
      const _component_LayoutSidebar = _sfc_main$4;
      const _component_UiInput = _sfc_main$5;
      const _component_MyWbStatsCard = _sfc_main$3;
      const _component_UiTabs = _sfc_main$2$1;
      const _component_UiTabsList = _sfc_main$6;
      const _component_UiTabsTrigger = _sfc_main$1$1;
      const _component_UiTabsContent = _sfc_main$7;
      const _component_MyWbWaitingOrders = _sfc_main$2;
      const _component_MyWbNewOrders = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative h-screen hidden-scrollbar" }, _attrs))} data-v-15ae57a3><div class="w-full fixed z-10" data-v-15ae57a3>`);
      _push(ssrRenderComponent(_component_LayoutSidebar, null, null, _parent));
      _push(`</div><div class="h-full flex flex-col p-4 gap-2 mx-[auto] max-w-[2048px] pt-16 min-w-[1024px]" data-v-15ae57a3><div class="flex gap-4" data-v-15ae57a3><div class="flex flex-col gap-2" data-v-15ae57a3>`);
      _push(ssrRenderComponent(_component_UiInput, {
        modelValue: unref(period),
        "onUpdate:modelValue": ($event) => isRef(period) ? period.value = $event : null,
        type: "month",
        class: "w-[180px] z-10"
      }, null, _parent));
      _push(ssrRenderComponent(_component_MyWbStatsCard, { period: unref(period) }, null, _parent));
      _push(`</div><div class="w-full" data-v-15ae57a3>`);
      _push(ssrRenderComponent(_component_UiTabs, {
        modelValue: unref(curTab),
        "onUpdate:modelValue": ($event) => isRef(curTab) ? curTab.value = $event : null
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UiTabsList, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UiTabsTrigger, { value: "waiting" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` \u0412 \u0440\u0430\u0431\u043E\u0442\u0435 `);
                      } else {
                        return [
                          createTextVNode(" \u0412 \u0440\u0430\u0431\u043E\u0442\u0435 ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_UiTabsTrigger, { value: "new" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` \u041D\u043E\u0432\u044B\u0435 `);
                      } else {
                        return [
                          createTextVNode(" \u041D\u043E\u0432\u044B\u0435 ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_UiTabsTrigger, { value: "supplies" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` \u041D\u0430 \u0441\u0431\u043E\u0440\u043A\u0435 `);
                      } else {
                        return [
                          createTextVNode(" \u041D\u0430 \u0441\u0431\u043E\u0440\u043A\u0435 ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_UiTabsTrigger, { value: "delivery" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` \u0412 \u0434\u043E\u0441\u0442\u0430\u0432\u043A\u0435 `);
                      } else {
                        return [
                          createTextVNode(" \u0412 \u0434\u043E\u0441\u0442\u0430\u0432\u043A\u0435 ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_UiTabsTrigger, { value: "archive" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` \u0410\u0440\u0445\u0438\u0432 `);
                      } else {
                        return [
                          createTextVNode(" \u0410\u0440\u0445\u0438\u0432 ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_UiTabsTrigger, { value: "canceled" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` \u041E\u0442\u043C\u0435\u043D\u043D\u0451\u043D\u043D\u044B\u0435 `);
                      } else {
                        return [
                          createTextVNode(" \u041E\u0442\u043C\u0435\u043D\u043D\u0451\u043D\u043D\u044B\u0435 ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UiTabsTrigger, { value: "waiting" }, {
                      default: withCtx(() => [
                        createTextVNode(" \u0412 \u0440\u0430\u0431\u043E\u0442\u0435 ")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_UiTabsTrigger, { value: "new" }, {
                      default: withCtx(() => [
                        createTextVNode(" \u041D\u043E\u0432\u044B\u0435 ")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_UiTabsTrigger, { value: "supplies" }, {
                      default: withCtx(() => [
                        createTextVNode(" \u041D\u0430 \u0441\u0431\u043E\u0440\u043A\u0435 ")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_UiTabsTrigger, { value: "delivery" }, {
                      default: withCtx(() => [
                        createTextVNode(" \u0412 \u0434\u043E\u0441\u0442\u0430\u0432\u043A\u0435 ")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_UiTabsTrigger, { value: "archive" }, {
                      default: withCtx(() => [
                        createTextVNode(" \u0410\u0440\u0445\u0438\u0432 ")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_UiTabsTrigger, { value: "canceled" }, {
                      default: withCtx(() => [
                        createTextVNode(" \u041E\u0442\u043C\u0435\u043D\u043D\u0451\u043D\u043D\u044B\u0435 ")
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UiTabsContent, { value: "waiting" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_MyWbWaitingOrders, null, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_MyWbWaitingOrders)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UiTabsContent, { value: "new" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_MyWbNewOrders, null, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_MyWbNewOrders)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UiTabsList, null, {
                default: withCtx(() => [
                  createVNode(_component_UiTabsTrigger, { value: "waiting" }, {
                    default: withCtx(() => [
                      createTextVNode(" \u0412 \u0440\u0430\u0431\u043E\u0442\u0435 ")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_UiTabsTrigger, { value: "new" }, {
                    default: withCtx(() => [
                      createTextVNode(" \u041D\u043E\u0432\u044B\u0435 ")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_UiTabsTrigger, { value: "supplies" }, {
                    default: withCtx(() => [
                      createTextVNode(" \u041D\u0430 \u0441\u0431\u043E\u0440\u043A\u0435 ")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_UiTabsTrigger, { value: "delivery" }, {
                    default: withCtx(() => [
                      createTextVNode(" \u0412 \u0434\u043E\u0441\u0442\u0430\u0432\u043A\u0435 ")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_UiTabsTrigger, { value: "archive" }, {
                    default: withCtx(() => [
                      createTextVNode(" \u0410\u0440\u0445\u0438\u0432 ")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_UiTabsTrigger, { value: "canceled" }, {
                    default: withCtx(() => [
                      createTextVNode(" \u041E\u0442\u043C\u0435\u043D\u043D\u0451\u043D\u043D\u044B\u0435 ")
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(_component_UiTabsContent, { value: "waiting" }, {
                default: withCtx(() => [
                  createVNode(_component_MyWbWaitingOrders)
                ]),
                _: 1
              }),
              createVNode(_component_UiTabsContent, { value: "new" }, {
                default: withCtx(() => [
                  createVNode(_component_MyWbNewOrders)
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/wb/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-15ae57a3"]]);

export { index as default };
//# sourceMappingURL=index-D-R_AG0Z.mjs.map
