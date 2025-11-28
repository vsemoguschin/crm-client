import { _ as _sfc_main$5 } from './Sidebar-ClYzRSuC.mjs';
import { _ as _sfc_main$6 } from './Input-DoHPrX2-.mjs';
import { _ as _sfc_main$2$1, a as _sfc_main$7, b as _sfc_main$1$1 } from './TabsList-C3eBcFGa.mjs';
import { _ as _sfc_main$8 } from './TabsContent-9LTM_IKf.mjs';
import { _ as _sfc_main$9 } from './Card-D2-UPrX8.mjs';
import { _ as _sfc_main$1$2, a as _sfc_main$b } from './CardTitle-Dyaq6zaM.mjs';
import { _ as _sfc_main$a } from './CardDescription-CwDlX6V_.mjs';
import { _ as _sfc_main$c } from './CardContent-5uJgHkPl.mjs';
import { _ as _sfc_main$2$2, a as _sfc_main$1$3, b as _sfc_main$f } from './PopoverContent-Dy99cMmu.mjs';
import { _ as _sfc_main$e } from './index-B6vrBiru.mjs';
import { _ as _sfc_main$g } from './Checkbox-DKAsiMFR.mjs';
import { _ as _sfc_main$5$1, a as _sfc_main$h, b as _sfc_main$2$3, c as _sfc_main$1$4, d as _sfc_main$4$1, e as _sfc_main$3$1 } from './TableHeader-CsCuT7pu.mjs';
import { defineComponent, ref, mergeProps, unref, isRef, withCtx, createTextVNode, createVNode, createBlock, openBlock, toDisplayString, h, Fragment, renderList, createCommentVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import { v as valueUpdater } from './utils-TCWotVPY.mjs';
import { useVueTable, getFilteredRowModel, getSortedRowModel, getCoreRowModel, FlexRender } from '@tanstack/vue-table';
import { ChevronDown, ArrowUpDown } from 'lucide-vue-next';
import { u as useMyFormatPrice } from './useMyFormatPrice-CCAsFuev.mjs';
import { u as useHead, b as useNuxtApp } from './server.mjs';
import { _ as _sfc_main$d } from './TopList-CZi4Ts7u.mjs';
import './index-9T5woGxV.mjs';
import 'radix-vue';
import 'class-variance-authority';
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
import 'clsx';
import 'tailwind-merge';
import '@iconify/vue';
import 'axios';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import 'unhead/plugins';
import './CardFooter-BUlih3MF.mjs';

const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "DataTable",
  __ssrInlineRender: true,
  props: {
    columns: {},
    data: {}
  },
  setup(__props) {
    const props = __props;
    const sorting = ref([]);
    const columnFilters = ref([]);
    const columnVisibility = ref({});
    const table = useVueTable({
      get data() {
        return props.data;
      },
      get columns() {
        return props.columns;
      },
      getCoreRowModel: getCoreRowModel(),
      getSortedRowModel: getSortedRowModel(),
      getFilteredRowModel: getFilteredRowModel(),
      onSortingChange: (updaterOrValue) => valueUpdater(updaterOrValue, sorting),
      onColumnFiltersChange: (updaterOrValue) => valueUpdater(updaterOrValue, columnFilters),
      onColumnVisibilityChange: (updaterOrValue) => valueUpdater(updaterOrValue, columnVisibility),
      state: {
        get sorting() {
          return sorting.value;
        },
        get columnFilters() {
          return columnFilters.value;
        },
        get columnVisibility() {
          return columnVisibility.value;
        }
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UiPopover = _sfc_main$2$2;
      const _component_UiPopoverTrigger = _sfc_main$1$3;
      const _component_UiButton = _sfc_main$e;
      const _component_UiPopoverContent = _sfc_main$f;
      const _component_UiCheckbox = _sfc_main$g;
      const _component_UiTable = _sfc_main$5$1;
      const _component_UiTableHeader = _sfc_main$h;
      const _component_UiTableRow = _sfc_main$2$3;
      const _component_UiTableHead = _sfc_main$1$4;
      const _component_UiTableBody = _sfc_main$4$1;
      const _component_UiTableCell = _sfc_main$3$1;
      _push(`<!--[--><div class="flex mb-2 justify-between"><div>`);
      _push(ssrRenderComponent(_component_UiPopover, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UiPopoverTrigger, null, {
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
            _push2(ssrRenderComponent(_component_UiPopoverContent, { class: "w-[180px]" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<!--[-->`);
                  ssrRenderList(unref(table).getAllColumns().filter((column) => column.getCanHide()), (column) => {
                    _push3(`<div${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_UiCheckbox, {
                      checked: column.getIsVisible(),
                      "onUpdate:checked": (value) => column.toggleVisibility(!!value)
                    }, null, _parent3, _scopeId2));
                    _push3(` ${ssrInterpolate(column.columnDef.ruName)}</div>`);
                  });
                  _push3(`<!--]-->`);
                } else {
                  return [
                    (openBlock(true), createBlock(Fragment, null, renderList(unref(table).getAllColumns().filter((column) => column.getCanHide()), (column) => {
                      return openBlock(), createBlock("div", {
                        key: column.id
                      }, [
                        createVNode(_component_UiCheckbox, {
                          checked: column.getIsVisible(),
                          "onUpdate:checked": (value) => column.toggleVisibility(!!value)
                        }, null, 8, ["checked", "onUpdate:checked"]),
                        createTextVNode(" " + toDisplayString(column.columnDef.ruName), 1)
                      ]);
                    }), 128))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UiPopoverTrigger, null, {
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
              createVNode(_component_UiPopoverContent, { class: "w-[180px]" }, {
                default: withCtx(() => [
                  (openBlock(true), createBlock(Fragment, null, renderList(unref(table).getAllColumns().filter((column) => column.getCanHide()), (column) => {
                    return openBlock(), createBlock("div", {
                      key: column.id
                    }, [
                      createVNode(_component_UiCheckbox, {
                        checked: column.getIsVisible(),
                        "onUpdate:checked": (value) => column.toggleVisibility(!!value)
                      }, null, 8, ["checked", "onUpdate:checked"]),
                      createTextVNode(" " + toDisplayString(column.columnDef.ruName), 1)
                    ]);
                  }), 128))
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class="bg-slate-100">`);
      _push(ssrRenderComponent(_component_UiTable, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UiTableHeader, { class: "bg-white" }, {
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
                        key: row.id
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
                            class: "text-left"
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`\u041D\u0435\u0442 \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u043E\u0432.`);
                              } else {
                                return [
                                  createTextVNode("\u041D\u0435\u0442 \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u043E\u0432.")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(_component_UiTableCell, {
                              colspan: _ctx.columns.length,
                              class: "text-left"
                            }, {
                              default: withCtx(() => [
                                createTextVNode("\u041D\u0435\u0442 \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u043E\u0432.")
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
                        key: row.id
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
                      }, 1024);
                    }), 128)) : (openBlock(), createBlock(_component_UiTableRow, { key: 1 }, {
                      default: withCtx(() => [
                        createVNode(_component_UiTableCell, {
                          colspan: _ctx.columns.length,
                          class: "text-left"
                        }, {
                          default: withCtx(() => [
                            createTextVNode("\u041D\u0435\u0442 \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u043E\u0432.")
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
              createVNode(_component_UiTableHeader, { class: "bg-white" }, {
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
                        key: row.id
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
                      }, 1024);
                    }), 128)) : (openBlock(), createBlock(_component_UiTableRow, { key: 1 }, {
                      default: withCtx(() => [
                        createVNode(_component_UiTableCell, {
                          colspan: _ctx.columns.length,
                          class: "text-left"
                        }, {
                          default: withCtx(() => [
                            createTextVNode("\u041D\u0435\u0442 \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u043E\u0432.")
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
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/my/salaries/mop/avito/DataTable.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const salariesColumns$1 = [
  // Менеджер
  {
    accessorKey: "manager",
    ruName: "\u041C\u0435\u043D\u0435\u0434\u0436\u0435\u0440",
    enableHiding: false,
    header: ({ column }) => {
      return h(
        _sfc_main$e,
        {
          variant: "ghost",
          onClick: () => column.toggleSorting(column.getIsSorted() === "asc"),
          class: "text-center h-full w-full"
        },
        () => ["\u041C\u0435\u043D\u0435\u0434\u0436\u0435\u0440", h(ArrowUpDown, { class: "ml-2 h-4 w-4" })]
      );
    },
    cell: ({ row }) => h(
      "div",
      { class: "text-left pl-4 whitespace-nowrap" },
      `${row.original.manager} ${row.original.fired ? "(\u0423\u0432\u043E\u043B\u0435\u043D)" : ""}`
    ),
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    }
  },
  // ЗП (₽)
  {
    accessorKey: "totalSalary",
    ruName: "\u0417\u041F",
    header: ({ column }) => {
      return h(
        _sfc_main$e,
        {
          variant: "ghost",
          onClick: () => column.toggleSorting(column.getIsSorted() === "asc"),
          class: "text-center h-full w-full"
        },
        () => ["\u0417\u041F", h(ArrowUpDown, { class: "ml-2 h-4 w-4" })]
      );
    },
    cell: ({ row }) => h(
      "div",
      { class: "text-center" },
      useMyFormatPrice(row.getValue("totalSalary")) + "\u20BD"
    )
  },
  // Выплаты (₽)
  {
    accessorKey: "pays",
    ruName: "\u0412\u044B\u043F\u043B\u0430\u0442\u044B",
    header: ({ column }) => {
      return h(
        _sfc_main$e,
        {
          variant: "ghost",
          onClick: () => column.toggleSorting(column.getIsSorted() === "asc"),
          class: "text-center h-full w-full"
        },
        () => ["\u0412\u044B\u043F\u043B\u0430\u0442\u044B", h(ArrowUpDown, { class: "ml-2 h-4 w-4" })]
      );
    },
    cell: ({ row }) => h("div", { class: "text-center" }, row.getValue("pays") + "\u20BD")
  },
  // Остаток (₽)
  {
    accessorKey: "rem",
    ruName: "\u041E\u0441\u0442\u0430\u0442\u043E\u043A",
    header: ({ column }) => {
      return h(
        _sfc_main$e,
        {
          variant: "ghost",
          onClick: () => column.toggleSorting(column.getIsSorted() === "asc"),
          class: "text-center h-full w-full"
        },
        () => ["\u041E\u0441\u0442\u0430\u0442\u043E\u043A", h(ArrowUpDown, { class: "ml-2 h-4 w-4" })]
      );
    },
    cell: ({ row }) => h("div", { class: "text-center" }, row.getValue("rem") + "\u20BD")
  },
  // ФАКТ
  {
    accessorKey: "payments",
    ruName: "\u0424\u0410\u041A\u0422",
    header: ({ column }) => {
      return h(
        _sfc_main$e,
        {
          variant: "ghost",
          onClick: () => column.toggleSorting(column.getIsSorted() === "asc"),
          class: "text-center h-full w-full"
        },
        () => ["\u0424\u0410\u041A\u0422", h(ArrowUpDown, { class: "h-4 w-4" })]
      );
    },
    cell: ({ row }) => h(
      "div",
      { class: "text-center" },
      // useMyFormatPrice(row.getValue('payments')) + '₽'
      row.getValue("payments") + "\u20BD"
    )
  },
  // % с продаж (₽)
  {
    accessorKey: "bonusPercentage",
    ruName: "% \u0441 \u043F\u0440\u043E\u0434\u0430\u0436",
    header: ({ column }) => {
      return h(
        _sfc_main$e,
        {
          variant: "ghost",
          onClick: () => column.toggleSorting(column.getIsSorted() === "asc"),
          class: "text-center h-full w-full"
        },
        () => ["% \u0441 \u043F\u0440\u043E\u0434\u0430\u0436", h(ArrowUpDown, { class: "ml-2 h-4 w-4" })]
      );
    },
    cell: ({ row }) => h("div", { class: "text-center" }, row.getValue("bonusPercentage") + "%")
  },
  // % с допов (₽)
  {
    accessorKey: "dopBonus",
    ruName: "\u0441 \u0434\u043E\u043F\u043E\u0432(\u20BD)",
    header: ({ column }) => {
      return h(
        _sfc_main$e,
        {
          variant: "ghost",
          onClick: () => column.toggleSorting(column.getIsSorted() === "asc"),
          class: "text-center h-full w-full"
        },
        () => ["\u0441 \u0434\u043E\u043F\u043E\u0432(\u20BD)", h(ArrowUpDown, { class: "ml-2 h-4 w-4" })]
      );
    },
    cell: ({ row }) => h(
      "div",
      { class: "text-center" },
      useMyFormatPrice(row.getValue("dopBonus")) + "\u20BD"
    )
  },
  // Премия (₽)
  {
    accessorKey: "bonus",
    ruName: "\u041F\u0440\u0435\u043C\u0438\u044F",
    header: ({ column }) => {
      return h(
        _sfc_main$e,
        {
          variant: "ghost",
          onClick: () => column.toggleSorting(column.getIsSorted() === "asc"),
          class: "text-center h-full w-full"
        },
        () => ["\u041F\u0440\u0435\u043C\u0438\u044F", h(ArrowUpDown, { class: "ml-2 h-4 w-4" })]
      );
    },
    cell: ({ row }) => h(
      "div",
      { class: "text-center" },
      useMyFormatPrice(row.getValue("bonus")) + "\u20BD"
    )
  },
  // Топ бонус (₽)
  {
    accessorKey: "topBonus",
    ruName: "\u0422\u043E\u043F \u0431\u043E\u043D\u0443\u0441",
    header: ({ column }) => {
      return h(
        _sfc_main$e,
        {
          variant: "ghost",
          onClick: () => column.toggleSorting(column.getIsSorted() === "asc"),
          class: "text-center h-full w-full"
        },
        () => ["\u0422\u043E\u043F \u0431\u043E\u043D\u0443\u0441", h(ArrowUpDown, { class: "ml-2 h-4 w-4" })]
      );
    },
    cell: ({ row }) => h("div", { class: "text-center" }, row.getValue("topBonus") + "\u20BD")
  },
  // Продажи (₽)
  {
    accessorKey: "totalSales",
    ruName: "\u041F\u0440\u043E\u0434\u0430\u0436\u0438",
    header: ({ column }) => {
      return h(
        _sfc_main$e,
        {
          variant: "ghost",
          onClick: () => column.toggleSorting(column.getIsSorted() === "asc"),
          class: "text-center h-full w-full"
        },
        () => ["\u041F\u0440\u043E\u0434\u0430\u0436\u0438", h(ArrowUpDown, { class: "ml-2 h-4 w-4" })]
      );
    },
    cell: ({ row }) => h(
      "div",
      { class: "text-center" },
      useMyFormatPrice(row.getValue("totalSales")) + "\u20BD"
    )
  },
  // Сделки (₽)
  {
    accessorKey: "dealSales",
    ruName: "\u0421\u0434\u0435\u043B\u043A\u0438",
    header: ({ column }) => {
      return h(
        _sfc_main$e,
        {
          variant: "ghost",
          onClick: () => column.toggleSorting(column.getIsSorted() === "asc"),
          class: "text-center h-full w-full"
        },
        () => ["\u0421\u0434\u0435\u043B\u043A\u0438", h(ArrowUpDown, { class: "ml-2 h-4 w-4" })]
      );
    },
    cell: ({ row }) => h(
      "div",
      { class: "text-center" },
      useMyFormatPrice(row.getValue("dealSales")) + "\u20BD"
    )
  },
  // Допы (₽)
  {
    accessorKey: "dopSales",
    ruName: "\u0414\u043E\u043F\u044B",
    header: ({ column }) => {
      return h(
        _sfc_main$e,
        {
          variant: "ghost",
          onClick: () => column.toggleSorting(column.getIsSorted() === "asc"),
          class: "text-center h-full w-full"
        },
        () => ["\u0414\u043E\u043F\u044B", h(ArrowUpDown, { class: "ml-2 h-4 w-4" })]
      );
    },
    cell: ({ row }) => h(
      "div",
      { class: "text-center" },
      useMyFormatPrice(row.getValue("dopSales")) + "\u20BD"
    )
  },
  // Конверсия (%)
  {
    accessorKey: "conversion",
    ruName: "\u041A\u043E\u043D\u0432\u0435\u0440\u0441\u0438\u044F",
    header: ({ column }) => {
      return h(
        _sfc_main$e,
        {
          variant: "ghost",
          onClick: () => column.toggleSorting(column.getIsSorted() === "asc"),
          class: "text-center h-full w-full"
        },
        () => ["\u041A\u043E\u043D\u0432\u0435\u0440\u0441\u0438\u044F", h(ArrowUpDown, { class: "ml-2 h-4 w-4" })]
      );
    },
    cell: ({ row }) => h("div", { class: "text-center" }, `${row.getValue("conversion")}%`)
  },
  // Средний чек (₽)
  {
    accessorKey: "averageBill",
    ruName: "\u0421\u0440\u0435\u0434\u043D\u0438\u0439 \u0447\u0435\u043A",
    header: ({ column }) => {
      return h(
        _sfc_main$e,
        {
          variant: "ghost",
          onClick: () => column.toggleSorting(column.getIsSorted() === "asc"),
          class: "text-center h-full w-full"
        },
        () => ["\u0421\u0440\u0435\u0434\u043D\u0438\u0439 \u0447\u0435\u043A", h(ArrowUpDown, { class: "ml-2 h-4 w-4" })]
      );
    },
    cell: ({ row }) => h(
      "div",
      { class: "text-center" },
      useMyFormatPrice(row.getValue("averageBill")) + "\u20BD"
    )
  },
  // Количество смен (₽)
  {
    accessorKey: "shift",
    ruName: "\u041A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u0441\u043C\u0435\u043D",
    header: ({ column }) => {
      return h(
        _sfc_main$e,
        {
          variant: "ghost",
          onClick: () => column.toggleSorting(column.getIsSorted() === "asc"),
          class: "text-center h-full w-full text-wrap"
        },
        () => ["\u041A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u0441\u043C\u0435\u043D", h(ArrowUpDown, { class: "ml-2 h-4 w-4" })]
      );
    },
    cell: ({ row }) => h("div", { class: "text-center" }, row.getValue("shift"))
  }
];
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "Content",
  __ssrInlineRender: true,
  props: {
    period: {}
  },
  setup(__props) {
    const { $useApi } = useNuxtApp();
    const props = __props;
    ref(props.period);
    const mangersList = ref([
      {
        id: 1,
        manager: "\u0418\u0432\u0430\u043D \u0418\u0432\u0430\u043D\u043E\u0432",
        totalSalary: 1e5,
        salesBonus: 2e4,
        dopBonus: 5e3,
        bonus: 1e4,
        totalSales: 5e5,
        dealSales: 3e5,
        dopSales: 2e5,
        conversion: 15,
        averageBill: 5e3
      },
      {
        id: 2,
        manager: "\u041F\u0435\u0442\u0440 \u041F\u0435\u0442\u0440\u043E\u0432",
        totalSalary: 12e4,
        salesBonus: 25e3,
        dopBonus: 6e3,
        bonus: 12e3,
        totalSales: 6e5,
        dealSales: 4e5,
        dopSales: 2e5,
        conversion: 18,
        averageBill: 6e3
      }
    ]);
    const topList = ref([
      {
        user: "\u0418\u0432\u0430\u043D\u043E\u0432 \u0418\u0432\u0430\u043D",
        category: "\u0422\u043E\u043F \u0441\u0443\u043C\u043C\u044B \u0437\u0430\u043A\u0430\u0437\u043E\u0432",
        sales: 2e3
      },
      {
        user: "\u0418\u0432\u0430\u043D\u043E\u0432 \u0418\u0432\u0430\u043D",
        category: "\u0422\u043E\u043F \u0441\u0443\u043C\u043C\u044B \u0434\u043E\u043F\u043E\u0432",
        sales: 2e3
      },
      { user: "\u0418\u0432\u0430\u043D\u043E\u0432 \u0418\u0432\u0430\u043D", category: "\u0422\u043E\u043F \u0441\u0440\u0435\u0434\u043D\u0438\u0439 \u0447\u0435\u043A", sales: 2e3 },
      { user: "\u0418\u0432\u0430\u043D\u043E\u0432 \u0418\u0432\u0430\u043D", category: "\u0422\u043E\u043F \u043A\u043E\u043D\u0432\u0435\u0440\u0441\u0438\u044F", sales: 2e3 }
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UiCard = _sfc_main$9;
      const _component_UiCardHeader = _sfc_main$1$2;
      const _component_UiCardDescription = _sfc_main$a;
      const _component_UiCardTitle = _sfc_main$b;
      const _component_UiCardContent = _sfc_main$c;
      const _component_MySalariesMopAvitoDataTable = _sfc_main$4;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col gap-2" }, _attrs))}><div><div class="flex gap-1 mb-2"><!--[-->`);
      ssrRenderList(unref(topList), (item, i) => {
        _push(ssrRenderComponent(_component_UiCard, {
          key: i,
          class: "min-w-[150px] grow"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_UiCardHeader, { class: "p-3 pb-2" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_UiCardDescription, null, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`${ssrInterpolate(item.category)}`);
                        } else {
                          return [
                            createTextVNode(toDisplayString(item.category), 1)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_component_UiCardTitle, { class: "text-3xl font-semibold whitespace-nowrap" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`${ssrInterpolate(item.user)}`);
                        } else {
                          return [
                            createTextVNode(toDisplayString(item.user), 1)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_UiCardDescription, null, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(item.category), 1)
                        ]),
                        _: 2
                      }, 1024),
                      createVNode(_component_UiCardTitle, { class: "text-3xl font-semibold whitespace-nowrap" }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(item.user), 1)
                        ]),
                        _: 2
                      }, 1024)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_UiCardContent, null, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(item.sales) + (item.category === "\u0422\u043E\u043F \u043A\u043E\u043D\u0432\u0435\u0440\u0441\u0438\u044F" ? "%" : "\u20BD"))}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(item.sales) + (item.category === "\u0422\u043E\u043F \u043A\u043E\u043D\u0432\u0435\u0440\u0441\u0438\u044F" ? "%" : "\u20BD")), 1)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_UiCardHeader, { class: "p-3 pb-2" }, {
                  default: withCtx(() => [
                    createVNode(_component_UiCardDescription, null, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(item.category), 1)
                      ]),
                      _: 2
                    }, 1024),
                    createVNode(_component_UiCardTitle, { class: "text-3xl font-semibold whitespace-nowrap" }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(item.user), 1)
                      ]),
                      _: 2
                    }, 1024)
                  ]),
                  _: 2
                }, 1024),
                createVNode(_component_UiCardContent, null, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(item.sales) + (item.category === "\u0422\u043E\u043F \u043A\u043E\u043D\u0432\u0435\u0440\u0441\u0438\u044F" ? "%" : "\u20BD")), 1)
                  ]),
                  _: 2
                }, 1024)
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></div></div><div>`);
      _push(ssrRenderComponent(_component_MySalariesMopAvitoDataTable, {
        columns: unref(salariesColumns$1),
        data: unref(mangersList)
      }, null, _parent));
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/my/salaries/mop/avito/Content.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "DataTable",
  __ssrInlineRender: true,
  props: {
    columns: {},
    data: {}
  },
  setup(__props) {
    const props = __props;
    const sorting = ref([]);
    const columnFilters = ref([]);
    const columnVisibility = ref({});
    const table = useVueTable({
      get data() {
        return props.data;
      },
      get columns() {
        return props.columns;
      },
      getCoreRowModel: getCoreRowModel(),
      getSortedRowModel: getSortedRowModel(),
      getFilteredRowModel: getFilteredRowModel(),
      onSortingChange: (updaterOrValue) => valueUpdater(updaterOrValue, sorting),
      onColumnFiltersChange: (updaterOrValue) => valueUpdater(updaterOrValue, columnFilters),
      onColumnVisibilityChange: (updaterOrValue) => valueUpdater(updaterOrValue, columnVisibility),
      state: {
        get sorting() {
          return sorting.value;
        },
        get columnFilters() {
          return columnFilters.value;
        },
        get columnVisibility() {
          return columnVisibility.value;
        }
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UiPopover = _sfc_main$2$2;
      const _component_UiPopoverTrigger = _sfc_main$1$3;
      const _component_UiButton = _sfc_main$e;
      const _component_UiPopoverContent = _sfc_main$f;
      const _component_UiCheckbox = _sfc_main$g;
      const _component_UiTable = _sfc_main$5$1;
      const _component_UiTableHeader = _sfc_main$h;
      const _component_UiTableRow = _sfc_main$2$3;
      const _component_UiTableHead = _sfc_main$1$4;
      const _component_UiTableBody = _sfc_main$4$1;
      const _component_UiTableCell = _sfc_main$3$1;
      _push(`<!--[--><div class="flex mb-2 justify-between"><div>`);
      _push(ssrRenderComponent(_component_UiPopover, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UiPopoverTrigger, null, {
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
            _push2(ssrRenderComponent(_component_UiPopoverContent, { class: "w-[180px]" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<!--[-->`);
                  ssrRenderList(unref(table).getAllColumns().filter((column) => column.getCanHide()), (column) => {
                    _push3(`<div${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_UiCheckbox, {
                      checked: column.getIsVisible(),
                      "onUpdate:checked": (value) => column.toggleVisibility(!!value)
                    }, null, _parent3, _scopeId2));
                    _push3(` ${ssrInterpolate(column.columnDef.ruName)}</div>`);
                  });
                  _push3(`<!--]-->`);
                } else {
                  return [
                    (openBlock(true), createBlock(Fragment, null, renderList(unref(table).getAllColumns().filter((column) => column.getCanHide()), (column) => {
                      return openBlock(), createBlock("div", {
                        key: column.id
                      }, [
                        createVNode(_component_UiCheckbox, {
                          checked: column.getIsVisible(),
                          "onUpdate:checked": (value) => column.toggleVisibility(!!value)
                        }, null, 8, ["checked", "onUpdate:checked"]),
                        createTextVNode(" " + toDisplayString(column.columnDef.ruName), 1)
                      ]);
                    }), 128))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UiPopoverTrigger, null, {
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
              createVNode(_component_UiPopoverContent, { class: "w-[180px]" }, {
                default: withCtx(() => [
                  (openBlock(true), createBlock(Fragment, null, renderList(unref(table).getAllColumns().filter((column) => column.getCanHide()), (column) => {
                    return openBlock(), createBlock("div", {
                      key: column.id
                    }, [
                      createVNode(_component_UiCheckbox, {
                        checked: column.getIsVisible(),
                        "onUpdate:checked": (value) => column.toggleVisibility(!!value)
                      }, null, 8, ["checked", "onUpdate:checked"]),
                      createTextVNode(" " + toDisplayString(column.columnDef.ruName), 1)
                    ]);
                  }), 128))
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class="bg-slate-100">`);
      _push(ssrRenderComponent(_component_UiTable, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UiTableHeader, { class: "bg-white" }, {
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
                        key: row.id
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
                            class: "text-left"
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`\u041D\u0435\u0442 \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u043E\u0432.`);
                              } else {
                                return [
                                  createTextVNode("\u041D\u0435\u0442 \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u043E\u0432.")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(_component_UiTableCell, {
                              colspan: _ctx.columns.length,
                              class: "text-left"
                            }, {
                              default: withCtx(() => [
                                createTextVNode("\u041D\u0435\u0442 \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u043E\u0432.")
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
                        key: row.id
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
                      }, 1024);
                    }), 128)) : (openBlock(), createBlock(_component_UiTableRow, { key: 1 }, {
                      default: withCtx(() => [
                        createVNode(_component_UiTableCell, {
                          colspan: _ctx.columns.length,
                          class: "text-left"
                        }, {
                          default: withCtx(() => [
                            createTextVNode("\u041D\u0435\u0442 \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u043E\u0432.")
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
              createVNode(_component_UiTableHeader, { class: "bg-white" }, {
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
                        key: row.id
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
                      }, 1024);
                    }), 128)) : (openBlock(), createBlock(_component_UiTableRow, { key: 1 }, {
                      default: withCtx(() => [
                        createVNode(_component_UiTableCell, {
                          colspan: _ctx.columns.length,
                          class: "text-left"
                        }, {
                          default: withCtx(() => [
                            createTextVNode("\u041D\u0435\u0442 \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u043E\u0432.")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/my/salaries/mop/vk/DataTable.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const salariesColumns = [
  // Менеджер
  {
    accessorKey: "manager",
    ruName: "\u041C\u0435\u043D\u0435\u0434\u0436\u0435\u0440",
    enableHiding: false,
    header: ({ column }) => {
      return h(
        _sfc_main$e,
        {
          variant: "ghost",
          onClick: () => column.toggleSorting(column.getIsSorted() === "asc"),
          class: "h-full w-full"
        },
        () => ["\u041C\u0435\u043D\u0435\u0434\u0436\u0435\u0440", h(ArrowUpDown, { class: "h-4 w-4" })]
      );
    },
    cell: ({ row }) => h(
      "div",
      { class: "text-left pl-4 whitespace-nowrap" },
      `${row.original.manager} ${row.original.fired ? "(\u0423\u0432\u043E\u043B\u0435\u043D)" : ""}`
      // row.getValue('manager')
    ),
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    }
  },
  // Зарплата
  {
    accessorKey: "totalSalary",
    ruName: "\u0417\u0430\u0440\u043F\u043B\u0430\u0442\u0430",
    header: ({ column }) => {
      return h(
        _sfc_main$e,
        {
          variant: "ghost",
          onClick: () => column.toggleSorting(column.getIsSorted() === "asc"),
          class: "text-center h-full w-full"
        },
        () => ["\u0417\u0430\u0440\u043F\u043B\u0430\u0442\u0430", h(ArrowUpDown, { class: "h-4 w-4" })]
      );
    },
    cell: ({ row }) => h(
      "div",
      { class: "text-center" },
      // useMyFormatPrice(row.getValue('totalSalary')) + '₽'
      row.getValue("totalSalary") + "\u20BD"
    )
  },
  // Выплаты (₽)
  {
    accessorKey: "pays",
    ruName: "\u0412\u044B\u043F\u043B\u0430\u0442\u044B",
    header: ({ column }) => {
      return h(
        _sfc_main$e,
        {
          variant: "ghost",
          onClick: () => column.toggleSorting(column.getIsSorted() === "asc"),
          class: "text-center h-full w-full"
        },
        () => ["\u0412\u044B\u043F\u043B\u0430\u0442\u044B", h(ArrowUpDown, { class: "ml-2 h-4 w-4" })]
      );
    },
    cell: ({ row }) => h("div", { class: "text-center" }, row.getValue("pays") + "\u20BD")
  },
  // Остаток (₽)
  {
    accessorKey: "rem",
    ruName: "\u041E\u0441\u0442\u0430\u0442\u043E\u043A",
    header: ({ column }) => {
      return h(
        _sfc_main$e,
        {
          variant: "ghost",
          onClick: () => column.toggleSorting(column.getIsSorted() === "asc"),
          class: "text-center h-full w-full"
        },
        () => ["\u041E\u0441\u0442\u0430\u0442\u043E\u043A", h(ArrowUpDown, { class: "ml-2 h-4 w-4" })]
      );
    },
    cell: ({ row }) => h("div", { class: "text-center" }, row.getValue("rem") + "\u20BD")
  },
  // Количество смен (₽)
  {
    accessorKey: "shift",
    ruName: "\u0421\u043C\u0435\u043D\u044B",
    header: ({ column }) => {
      return h(
        _sfc_main$e,
        {
          variant: "ghost",
          onClick: () => column.toggleSorting(column.getIsSorted() === "asc"),
          class: "text-center h-full w-full text-wrap"
        },
        () => ["\u0421\u043C\u0435\u043D\u044B", h(ArrowUpDown, { class: "ml-2 h-4 w-4" })]
      );
    },
    cell: ({ row }) => h("div", { class: "text-center" }, row.getValue("shift"))
  },
  // Оплата смен (₽)
  {
    accessorKey: "shiftBonus",
    ruName: "\u041E\u043F\u043B\u0430\u0442\u0430 \u0441\u043C\u0435\u043D",
    header: ({ column }) => {
      return h(
        _sfc_main$e,
        {
          variant: "ghost",
          onClick: () => column.toggleSorting(column.getIsSorted() === "asc"),
          class: "text-center h-full w-full text-wrap"
        },
        () => ["\u041E\u043F\u043B\u0430\u0442\u0430 \u0441\u043C\u0435\u043D", h(ArrowUpDown, { class: "ml-2 h-4 w-4" })]
      );
    },
    cell: ({ row }) => h(
      "div",
      { class: "text-center" },
      useMyFormatPrice(row.getValue("shiftBonus")) + "\u20BD"
    )
  },
  // Топ бонусы
  {
    accessorKey: "topBonus",
    ruName: "\u0422\u043E\u043F \u0431\u043E\u043D\u0443\u0441\u044B",
    header: ({ column }) => {
      return h(
        _sfc_main$e,
        {
          variant: "ghost",
          onClick: () => column.toggleSorting(column.getIsSorted() === "asc"),
          class: "text-center h-full w-full"
        },
        () => ["\u0422\u043E\u043F \u0431\u043E\u043D\u0443\u0441\u044B", h(ArrowUpDown, { class: "h-4 w-4" })]
      );
    },
    cell: ({ row }) => h(
      "div",
      { class: "text-center" },
      // useMyFormatPrice(row.getValue('topBonus')) + '₽'
      row.getValue("topBonus") + "\u20BD"
    )
  },
  // % с продаж в рублях
  {
    accessorKey: "salesBonus",
    ruName: "\u0432 \u0417\u041F \u0441 \u0444\u0430\u043A\u0442\u0430",
    header: ({ column }) => {
      return h(
        _sfc_main$e,
        {
          variant: "ghost",
          onClick: () => column.toggleSorting(column.getIsSorted() === "asc"),
          class: "text-center h-full w-full"
        },
        () => ["\u0432 \u0417\u041F \u0441 \u0444\u0430\u043A\u0442\u0430", h(ArrowUpDown, { class: "h-4 w-4" })]
      );
    },
    cell: ({ row }) => h(
      "div",
      { class: "text-center" },
      // useMyFormatPrice(row.getValue('salesBonus')) + '₽'
      row.getValue("salesBonus") + "\u20BD"
    )
  },
  // ФАКТ
  {
    accessorKey: "payments",
    ruName: "\u0424\u0410\u041A\u0422",
    header: ({ column }) => {
      return h(
        _sfc_main$e,
        {
          variant: "ghost",
          onClick: () => column.toggleSorting(column.getIsSorted() === "asc"),
          class: "text-center h-full w-full"
        },
        () => ["\u0424\u0410\u041A\u0422", h(ArrowUpDown, { class: "h-4 w-4" })]
      );
    },
    cell: ({ row }) => h(
      "div",
      { class: "text-center" },
      // useMyFormatPrice(row.getValue('payments')) + '₽'
      row.getValue("payments") + "\u20BD"
    )
  },
  // % от выручки
  {
    accessorKey: "bonusPercentage",
    ruName: "% \u043E\u0442 \u0432\u044B\u0440\u0443\u0447\u043A\u0438",
    header: ({ column }) => {
      return h(
        _sfc_main$e,
        {
          variant: "ghost",
          onClick: () => column.toggleSorting(column.getIsSorted() === "asc"),
          class: "text-center h-full w-full"
        },
        () => ["% \u043E\u0442 \u0432\u044B\u0440\u0443\u0447\u043A\u0438", h(ArrowUpDown, { class: "h-4 w-4" })]
      );
    },
    cell: ({ row }) => h(
      "div",
      { class: "text-center" },
      // useMyFormatPrice(row.getValue('bonusPercentage')) + '₽'
      row.getValue("bonusPercentage") + "%"
    )
  },
  // Все продажи
  {
    accessorKey: "totalSales",
    ruName: "\u0412\u044B\u0440\u0443\u0447\u043A\u0430",
    header: ({ column }) => {
      return h(
        _sfc_main$e,
        {
          variant: "ghost",
          onClick: () => column.toggleSorting(column.getIsSorted() === "asc"),
          class: "text-center h-full w-full"
        },
        () => ["\u0412\u044B\u0440\u0443\u0447\u043A\u0430", h(ArrowUpDown, { class: "h-4 w-4" })]
      );
    },
    cell: ({ row }) => h(
      "div",
      { class: "text-center" },
      // useMyFormatPrice(row.getValue('totalSales')) + '₽'
      row.getValue("totalSales") + "\u20BD"
    )
  },
  // Бонус отдела
  {
    accessorKey: "workSpacePlanBonus",
    ruName: "\u0411\u043E\u043D\u0443\u0441 \u043E\u0442\u0434\u0435\u043B\u0430",
    header: ({ column }) => {
      return h(
        _sfc_main$e,
        {
          variant: "ghost",
          onClick: () => column.toggleSorting(column.getIsSorted() === "asc"),
          class: "text-center h-full w-full text-wrap"
        },
        () => ["\u0411\u043E\u043D\u0443\u0441 \u043E\u0442\u0434\u0435\u043B\u0430", h(ArrowUpDown, { class: "h-4 w-4" })]
      );
    },
    cell: ({ row }) => h(
      "div",
      { class: "text-center" },
      // useMyFormatPrice(row.getValue('workSpacePlanBonus')) + '₽'
      row.getValue("workSpacePlanBonus") + "\u20BD"
    )
  },
  // Продажи по сделкам
  {
    accessorKey: "dealSales",
    ruName: "\u0421\u0434\u0435\u043B\u043A\u0438",
    header: ({ column }) => {
      return h(
        _sfc_main$e,
        {
          variant: "ghost",
          onClick: () => column.toggleSorting(column.getIsSorted() === "asc"),
          class: "text-center h-full w-full"
        },
        () => ["\u0421\u0434\u0435\u043B\u043A\u0438", h(ArrowUpDown, { class: "h-4 w-4" })]
      );
    },
    cell: ({ row }) => h(
      "div",
      { class: "text-center" },
      useMyFormatPrice(row.getValue("dealSales")) + "\u20BD"
    )
  },
  // Дополнительные продажи
  {
    accessorKey: "dopSales",
    ruName: "\u0414\u043E\u043F\u044B",
    header: ({ column }) => {
      return h(
        _sfc_main$e,
        {
          variant: "ghost",
          onClick: () => column.toggleSorting(column.getIsSorted() === "asc"),
          class: "text-center h-full w-full"
        },
        () => ["\u0414\u043E\u043F\u044B", h(ArrowUpDown, { class: "h-4 w-4" })]
      );
    },
    cell: ({ row }) => h(
      "div",
      { class: "text-center" },
      useMyFormatPrice(row.getValue("dopSales")) + "\u20BD"
    )
  },
  // dimmerSales
  {
    accessorKey: "dimmerSales",
    ruName: "\u0414\u0438\u043C\u043C\u0435\u0440\u044B",
    header: ({ column }) => {
      return h(
        _sfc_main$e,
        {
          variant: "ghost",
          onClick: () => column.toggleSorting(column.getIsSorted() === "asc"),
          class: "text-center h-full w-full"
        },
        () => ["\u0414\u0438\u043C\u043C\u0435\u0440\u044B", h(ArrowUpDown, { class: "h-4 w-4" })]
      );
    },
    cell: ({ row }) => h(
      "div",
      { class: "text-center" },
      row.getValue("dimmerSales")
      // useMyFormatPrice(row.getValue('dimmerSales')) + '₽'
    )
  },
  // dealsWithoutDesigners
  {
    accessorKey: "dealsWithoutDesigners",
    ruName: "\u0421\u0434\u0435\u043B\u043A\u0438 \u0431\u0435\u0437 \u0434\u0438\u0437\u043E\u0432",
    header: ({ column }) => {
      return h(
        _sfc_main$e,
        {
          variant: "ghost",
          onClick: () => column.toggleSorting(column.getIsSorted() === "asc"),
          class: "text-center h-full w-full"
        },
        () => ["\u0421\u0434\u0435\u043B\u043A\u0438 \u0431\u0435\u0437 \u0434\u0438\u0437\u043E\u0432", h(ArrowUpDown, { class: "h-4 w-4" })]
      );
    },
    cell: ({ row }) => h(
      "div",
      { class: "text-center" },
      row.getValue("dealsWithoutDesigners")
      // useMyFormatPrice(row.getValue('dealsWithoutDesigners')) + '₽'
    )
  },
  // salesWithoutDesigners
  {
    accessorKey: "salesWithoutDesigners",
    ruName: "\u0421\u0443\u043C\u043C\u0430 \u0441\u0434\u0435\u043B\u043E\u043A \u0431\u0435\u0437 \u0434\u0438\u0437\u043E\u0432",
    header: ({ column }) => {
      return h(
        _sfc_main$e,
        {
          variant: "ghost",
          onClick: () => column.toggleSorting(column.getIsSorted() === "asc"),
          class: "text-center h-full"
        },
        () => ["\u0421\u0443\u043C\u043C\u0430 \u0441\u0434\u0435\u043B\u043E\u043A \u0431\u0435\u0437 \u0434\u0438\u0437\u043E\u0432", h(ArrowUpDown, { class: "h-4 w-4" })]
      );
    },
    cell: ({ row }) => h(
      "div",
      { class: "text-center" },
      row.getValue("salesWithoutDesigners")
      // useMyFormatPrice(row.getValue('salesWithoutDesigners')) + '₽'
    )
  },
  // conversionDayToDay
  {
    accessorKey: "conversionDayToDay",
    ruName: "\u041A\u043E\u043D\u0432\u0435\u0440\u0441\u0438\u044F \u0434\u0435\u043D\u044C \u0432 \u0434\u0435\u043D\u044C",
    header: ({ column }) => {
      return h(
        _sfc_main$e,
        {
          variant: "ghost",
          onClick: () => column.toggleSorting(column.getIsSorted() === "asc"),
          class: "text-center h-full w-full"
        },
        () => [
          "\u041A\u043E\u043D\u0432\u0435\u0440\u0441\u0438\u044F \u0434\u0435\u043D\u044C \u0432 \u0434\u0435\u043D\u044C",
          h(ArrowUpDown, { class: "h-4 w-4 text-wrap" })
        ]
      );
    },
    cell: ({ row }) => h(
      "div",
      { class: "text-center" },
      row.getValue("conversionDayToDay") + "%"
      // useMyFormatPrice(row.getValue('conversionDayToDay')) + '₽'
    )
  }
];
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Content",
  __ssrInlineRender: true,
  props: {
    period: {}
  },
  setup(__props) {
    const { $useApi } = useNuxtApp();
    const props = __props;
    ref(props.period);
    const mangersList = ref([
      {
        id: 1,
        manager: "\u0418\u0432\u0430\u043D \u0418\u0432\u0430\u043D\u043E\u0432",
        workSpace: "\u041F\u0440\u043E\u0434\u0430\u0436\u0438",
        dealSales: 5e4,
        dopSales: 1e4,
        totalSales: 0,
        salesBonus: 0,
        topBonus: 0,
        totalSalary: 0,
        shiftBonus: 0
      },
      {
        id: 2,
        manager: "\u041F\u0435\u0442\u0440 \u041F\u0435\u0442\u0440\u043E\u0432",
        workSpace: "\u041C\u0430\u0440\u043A\u0435\u0442\u0438\u043D\u0433",
        dealSales: 7e4,
        dopSales: 15e3,
        totalSales: 0,
        salesBonus: 0,
        topBonus: 0,
        totalSalary: 0,
        shiftBonus: 0
      }
    ]);
    const topSalesManagersList = ref([
      { user: "\u0418\u0432\u0430\u043D\u043E\u0432 \u0418\u0432\u0430\u043D \u0418\u0432\u0430\u043D\u043E\u0432\u0438\u0447", sales: 100500 },
      { user: "\u041F\u0435\u0442\u0440\u043E\u0432 \u041F\u0435\u0442\u0440 \u041F\u0435\u0442\u0440\u043E\u0432\u0438\u0447", sales: 100500 },
      { user: "\u0421\u0438\u0434\u043E\u0440\u043E\u0432 \u0421\u0438\u0434\u043E\u0440 \u0421\u0438\u0434\u043E\u0440\u043E\u0432\u0438\u0447", sales: 100500 }
    ]);
    const topDopSalesManagersList = ref([
      { user: "\u0418\u0432\u0430\u043D\u043E\u0432 \u0418\u0432\u0430\u043D \u0418\u0432\u0430\u043D\u043E\u0432\u0438\u0447", sales: 100500 },
      { user: "\u041F\u0435\u0442\u0440\u043E\u0432 \u041F\u0435\u0442\u0440 \u041F\u0435\u0442\u0440\u043E\u0432\u0438\u0447", sales: 100500 },
      { user: "\u0421\u0438\u0434\u043E\u0440\u043E\u0432 \u0421\u0438\u0434\u043E\u0440 \u0421\u0438\u0434\u043E\u0440\u043E\u0432\u0438\u0447", sales: 100500 }
    ]);
    const topDimmerSalesManagersList = ref([
      { user: "\u0418\u0432\u0430\u043D\u043E\u0432 \u0418\u0432\u0430\u043D \u0418\u0432\u0430\u043D\u043E\u0432\u0438\u0447", sales: 100500 },
      { user: "\u041F\u0435\u0442\u0440\u043E\u0432 \u041F\u0435\u0442\u0440 \u041F\u0435\u0442\u0440\u043E\u0432\u0438\u0447", sales: 100500 },
      { user: "\u0421\u0438\u0434\u043E\u0440\u043E\u0432 \u0421\u0438\u0434\u043E\u0440 \u0421\u0438\u0434\u043E\u0440\u043E\u0432\u0438\u0447", sales: 100500 }
    ]);
    const topSalesWithoutDesignersList = ref([
      { user: "\u0418\u0432\u0430\u043D\u043E\u0432 \u0418\u0432\u0430\u043D \u0418\u0432\u0430\u043D\u043E\u0432\u0438\u0447", sales: 100500 },
      { user: "\u041F\u0435\u0442\u0440\u043E\u0432 \u041F\u0435\u0442\u0440 \u041F\u0435\u0442\u0440\u043E\u0432\u0438\u0447", sales: 100500 },
      { user: "\u0421\u0438\u0434\u043E\u0440\u043E\u0432 \u0421\u0438\u0434\u043E\u0440 \u0421\u0438\u0434\u043E\u0440\u043E\u0432\u0438\u0447", sales: 100500 }
    ]);
    const topConversionDayToDayList = ref([
      { user: "\u0418\u0432\u0430\u043D\u043E\u0432 \u0418\u0432\u0430\u043D \u0418\u0432\u0430\u043D\u043E\u0432\u0438\u0447", sales: 100500 },
      { user: "\u041F\u0435\u0442\u0440\u043E\u0432 \u041F\u0435\u0442\u0440 \u041F\u0435\u0442\u0440\u043E\u0432\u0438\u0447", sales: 100500 },
      { user: "\u0421\u0438\u0434\u043E\u0440\u043E\u0432 \u0421\u0438\u0434\u043E\u0440 \u0421\u0438\u0434\u043E\u0440\u043E\u0432\u0438\u0447", sales: 100500 }
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_MySalariesMopVkTopList = _sfc_main$d;
      const _component_MySalariesMopVkDataTable = _sfc_main$2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col gap-2" }, _attrs))}><div class="flex gap-2 flex-wrap"><div class="flex gap-2 flex-1">`);
      _push(ssrRenderComponent(_component_MySalariesMopVkTopList, {
        class: "min-w-[300px]",
        managers: unref(topSalesManagersList),
        title: "\u0422\u043E\u043F \u043F\u043E \u0432\u044B\u0440\u0443\u0447\u043A\u0435",
        after: "\u20BD"
      }, null, _parent));
      _push(ssrRenderComponent(_component_MySalariesMopVkTopList, {
        class: "min-w-[300px]",
        managers: unref(topDopSalesManagersList),
        title: "\u0422\u043E\u043F \u043F\u043E \u0434\u043E\u043F.\u043F\u0440\u043E\u0434\u0430\u0436\u0430\u043C",
        after: "\u20BD"
      }, null, _parent));
      _push(`</div><div class="flex gap-2 flex-1">`);
      _push(ssrRenderComponent(_component_MySalariesMopVkTopList, {
        class: "min-w-[300px]",
        managers: unref(topDimmerSalesManagersList),
        title: "\u0422\u043E\u043F \u043F\u043E \u0434\u0438\u043C\u043C\u0435\u0440\u0430\u043C",
        after: "\u20BD"
      }, null, _parent));
      _push(ssrRenderComponent(_component_MySalariesMopVkTopList, {
        class: "min-w-[300px]",
        managers: unref(topSalesWithoutDesignersList),
        title: "\u0422\u043E\u043F \u043F\u0440\u043E\u0434\u0430\u0436 \u0431\u0435\u0437 \u0434\u0438\u0437\u043E\u0432",
        after: "\u20BD"
      }, null, _parent));
      _push(ssrRenderComponent(_component_MySalariesMopVkTopList, {
        class: "min-w-[300px]",
        managers: unref(topConversionDayToDayList),
        title: "\u0422\u043E\u043F \u043A\u043E\u043D\u0432\u0435\u0440\u0441\u0438\u044F",
        after: "%"
      }, null, _parent));
      _push(`</div></div><div class="w-full overflow-hidden">`);
      _push(ssrRenderComponent(_component_MySalariesMopVkDataTable, {
        columns: unref(salariesColumns),
        data: unref(mangersList)
      }, null, _parent));
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/my/salaries/mop/vk/Content.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "\u0417\u0430\u0440\u043F\u043B\u0430\u0442\u044B | Easy CRM"
    });
    const period = ref(
      (/* @__PURE__ */ new Date()).toISOString().slice(0, 7)
      //'этот месяц'
      //   '2025-02'
    );
    return (_ctx, _push, _parent, _attrs) => {
      const _component_LayoutSidebar = _sfc_main$5;
      const _component_UiInput = _sfc_main$6;
      const _component_UiTabs = _sfc_main$2$1;
      const _component_UiTabsList = _sfc_main$7;
      const _component_UiTabsTrigger = _sfc_main$1$1;
      const _component_UiTabsContent = _sfc_main$8;
      const _component_MySalariesMopAvitoContent = _sfc_main$3;
      const _component_MySalariesMopVkContent = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative h-screen hidden-scrollbar" }, _attrs))}><div class="w-full fixed z-10">`);
      _push(ssrRenderComponent(_component_LayoutSidebar, null, null, _parent));
      _push(`</div><div class="h-full flex flex-col p-4 gap-2 mx-[auto] max-w-[2048px] pt-16 min-w-[1024px]"><div class="flex gap-6">`);
      _push(ssrRenderComponent(_component_UiInput, {
        modelValue: unref(period),
        "onUpdate:modelValue": ($event) => isRef(period) ? period.value = $event : null,
        type: "month",
        class: "w-[180px]"
      }, null, _parent));
      _push(`<h1 class="text-3xl font-semibold">\u041C\u0435\u043D\u0435\u0434\u0436\u0435\u0440</h1></div><div class="flex gap-2 w-full h-full">`);
      _push(ssrRenderComponent(_component_UiTabs, {
        "default-value": "B2B",
        class: "w-full"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UiTabsList, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UiTabsTrigger, { value: "B2B" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`B2B`);
                      } else {
                        return [
                          createTextVNode("B2B")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_UiTabsTrigger, { value: "\u0412\u041A" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`\u0412\u041A`);
                      } else {
                        return [
                          createTextVNode("\u0412\u041A")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UiTabsTrigger, { value: "B2B" }, {
                      default: withCtx(() => [
                        createTextVNode("B2B")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_UiTabsTrigger, { value: "\u0412\u041A" }, {
                      default: withCtx(() => [
                        createTextVNode("\u0412\u041A")
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UiTabsContent, {
              value: "B2B",
              class: ""
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_MySalariesMopAvitoContent, {
                    key: unref(period),
                    period: unref(period)
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    (openBlock(), createBlock(_component_MySalariesMopAvitoContent, {
                      key: unref(period),
                      period: unref(period)
                    }, null, 8, ["period"]))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UiTabsContent, { value: "\u0412\u041A" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_MySalariesMopVkContent, {
                    key: unref(period),
                    period: unref(period)
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    (openBlock(), createBlock(_component_MySalariesMopVkContent, {
                      key: unref(period),
                      period: unref(period)
                    }, null, 8, ["period"]))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UiTabsList, null, {
                default: withCtx(() => [
                  createVNode(_component_UiTabsTrigger, { value: "B2B" }, {
                    default: withCtx(() => [
                      createTextVNode("B2B")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_UiTabsTrigger, { value: "\u0412\u041A" }, {
                    default: withCtx(() => [
                      createTextVNode("\u0412\u041A")
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(_component_UiTabsContent, {
                value: "B2B",
                class: ""
              }, {
                default: withCtx(() => [
                  (openBlock(), createBlock(_component_MySalariesMopAvitoContent, {
                    key: unref(period),
                    period: unref(period)
                  }, null, 8, ["period"]))
                ]),
                _: 1
              }),
              createVNode(_component_UiTabsContent, { value: "\u0412\u041A" }, {
                default: withCtx(() => [
                  (openBlock(), createBlock(_component_MySalariesMopVkContent, {
                    key: unref(period),
                    period: unref(period)
                  }, null, 8, ["period"]))
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/salaries/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-DUQXHl9T.mjs.map
