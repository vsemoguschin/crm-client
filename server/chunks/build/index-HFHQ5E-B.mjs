import { _ as _sfc_main$2 } from './Sidebar-ClYzRSuC.mjs';
import { _ as _sfc_main$3 } from './Card-D2-UPrX8.mjs';
import { _ as _sfc_main$1$1, a as _sfc_main$5 } from './CardTitle-Dyaq6zaM.mjs';
import { _ as _sfc_main$4 } from './CardDescription-CwDlX6V_.mjs';
import { _ as _sfc_main$6 } from './CardContent-5uJgHkPl.mjs';
import { _ as _sfc_main$7 } from './CardFooter-BUlih3MF.mjs';
import { _ as _sfc_main$8 } from './Input-DoHPrX2-.mjs';
import { _ as _sfc_main$1$2, a as _sfc_main$d } from './SetPlanModal-BfHKj34I.mjs';
import { _ as _sfc_main$2$1, a as _sfc_main$1$3, b as _sfc_main$a } from './PopoverContent-Dy99cMmu.mjs';
import { _ as _sfc_main$9 } from './index-B6vrBiru.mjs';
import { _ as _sfc_main$b } from './Checkbox-DKAsiMFR.mjs';
import { _ as _sfc_main$5$1, a as _sfc_main$c, b as _sfc_main$2$2, c as _sfc_main$1$4, d as _sfc_main$4$1, e as _sfc_main$3$1 } from './TableHeader-CsCuT7pu.mjs';
import { defineComponent, ref, withAsyncContext, watch, mergeProps, unref, withCtx, createTextVNode, toDisplayString, createVNode, isRef, h, computed, createBlock, openBlock, Fragment, renderList, createCommentVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import { v as valueUpdater } from './utils-TCWotVPY.mjs';
import { useVueTable, getFilteredRowModel, getSortedRowModel, getCoreRowModel, FlexRender } from '@tanstack/vue-table';
import { ChevronDown, ArrowUpDown } from 'lucide-vue-next';
import { u as useMyFormatPrice } from './useMyFormatPrice-CCAsFuev.mjs';
import { b as useNuxtApp, u as useHead } from './server.mjs';
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
import './DialogContent-BsO2ljLB.mjs';
import './DialogFooter-CQpXS8R1.mjs';
import './index-BPQNkNDf.mjs';
import '@iconify/vue';
import '@iconify/utils/lib/css/icon';
import 'perfect-debounce';
import 'clsx';
import 'tailwind-merge';
import 'axios';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import 'unhead/plugins';

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "DataTable",
  __ssrInlineRender: true,
  props: {
    columns: {},
    data: {},
    filters: {}
  },
  emits: ["deal-clicked", "table-sorted", "is-plan-set"],
  setup(__props, { emit: __emit }) {
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
      },
      meta: {
        onPlanSet: (managerId, newPlan) => {
          emit("is-plan-set", { managerId, newPlan });
        }
      }
    });
    const emit = __emit;
    const filtersOptions = computed(() => ({
      workspaces: props.filters.workspaces.map((workspace) => ({
        value: workspace.id,
        label: workspace.title
      })),
      groups: props.filters.groups.map((group) => ({
        value: group.id,
        label: group.title
      })),
      managers: props.filters.managers.map((manager) => ({
        value: manager.id,
        label: manager.fullName
      }))
    }));
    watch(
      () => table.getSortedRowModel().rows,
      (newSorting) => {
        console.log("\u0421\u043E\u0440\u0442\u0438\u0440\u043E\u0432\u043A\u0430 \u0438\u0437\u043C\u0435\u043D\u0438\u043B\u0430\u0441\u044C:", newSorting);
        const plansIds = newSorting.map((s) => s.original.id);
        emit("table-sorted", plansIds);
      },
      { deep: true }
    );
    return (_ctx, _push, _parent, _attrs) => {
      const _component_MyManagersDataTableToolbar = _sfc_main$1$2;
      const _component_UiPopover = _sfc_main$2$1;
      const _component_UiPopoverTrigger = _sfc_main$1$3;
      const _component_UiButton = _sfc_main$9;
      const _component_UiPopoverContent = _sfc_main$a;
      const _component_UiCheckbox = _sfc_main$b;
      const _component_UiTable = _sfc_main$5$1;
      const _component_UiTableHeader = _sfc_main$c;
      const _component_UiTableRow = _sfc_main$2$2;
      const _component_UiTableHead = _sfc_main$1$4;
      const _component_UiTableBody = _sfc_main$4$1;
      const _component_UiTableCell = _sfc_main$3$1;
      _push(`<!--[--><div class="flex mb-2 justify-between">`);
      _push(ssrRenderComponent(_component_MyManagersDataTableToolbar, {
        table: unref(table),
        filters: filtersOptions.value
      }, null, _parent));
      _push(`<div>`);
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
                      "onUpdate:checked": (value) => {
                        column.toggleVisibility(!!value);
                      }
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
                          "onUpdate:checked": (value) => {
                            column.toggleVisibility(!!value);
                          }
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
                        "onUpdate:checked": (value) => {
                          column.toggleVisibility(!!value);
                        }
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
      _push(`</div></div><div class="rounded-md border max-h-[calc(100vh-320px)] overflow-y-scroll bg-slate-100">`);
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
                        key: row.id,
                        "data-state": row.getIsSelected() ? "selected" : void 0
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
                                _push5(` \u041D\u0435\u0442 \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u043E\u0432. `);
                              } else {
                                return [
                                  createTextVNode(" \u041D\u0435\u0442 \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u043E\u0432. ")
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
                                createTextVNode(" \u041D\u0435\u0442 \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u043E\u0432. ")
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
                        "data-state": row.getIsSelected() ? "selected" : void 0
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
                          class: "text-left"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" \u041D\u0435\u0442 \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u043E\u0432. ")
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
                        key: row.id,
                        "data-state": row.getIsSelected() ? "selected" : void 0
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
                          class: "text-left"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" \u041D\u0435\u0442 \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u043E\u0432. ")
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
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/my/managers/DataTable.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const managersPlanColumns = [
  // Менеджер
  {
    accessorKey: "manager",
    ruName: "\u041C\u0435\u043D\u0435\u0434\u0436\u0435\u0440",
    enableHiding: false,
    header: ({ column }) => {
      return h(
        _sfc_main$9,
        {
          variant: "ghost",
          onClick: () => column.toggleSorting(column.getIsSorted() === "asc"),
          class: "text-wrap h-full"
        },
        () => ["\u041C\u0435\u043D\u0435\u0434\u0436\u0435\u0440", h(ArrowUpDown, { class: "h-[20px] w-[20px]" })]
      );
    },
    cell: ({ row, table }) => (
      // console.log(row.original.period)
      h("div", { class: "flex items-center gap-2" }, [
        h(_sfc_main$d, {
          period: row.original.period,
          plan: row.original.plan,
          managerId: row.original.managerId,
          manager: row.original.manager,
          onIsPlanSet: (newPlan) => {
            var _a, _b;
            (_b = (_a = table.options.meta) == null ? void 0 : _a.onPlanSet) == null ? void 0 : _b.call(
              _a,
              row.original.managerId,
              newPlan
            );
          }
        }),
        h(
          "span",
          { class: "whitespace-nowrap" },
          `${row.original.manager} ${row.original.fired ? "(\u0423\u0432\u043E\u043B\u0435\u043D)" : ""}`
        )
      ])
    )
  },
  // Общие продажи
  {
    accessorKey: "totalSales",
    ruName: "\u041F\u0440\u043E\u0434\u0430\u0436\u0438",
    header: ({ column }) => {
      return h(
        _sfc_main$9,
        {
          variant: "ghost",
          onClick: () => column.toggleSorting(column.getIsSorted() === "asc"),
          class: "text-wrap h-full"
        },
        () => ["\u041F\u0440\u043E\u0434\u0430\u0436\u0438", h(ArrowUpDown, { class: "h-[20px] w-[20px]" })]
      );
    },
    cell: ({ row }) => h(
      "div",
      { class: "text-center" },
      useMyFormatPrice(row.getValue("totalSales")) + "\u20BD"
    )
  },
  // План
  {
    accessorKey: "plan",
    ruName: "\u041F\u043B\u0430\u043D",
    header: ({ column }) => {
      return h(
        _sfc_main$9,
        {
          variant: "ghost",
          onClick: () => column.toggleSorting(column.getIsSorted() === "asc"),
          class: "text-wrap h-full"
        },
        () => ["\u041F\u043B\u0430\u043D", h(ArrowUpDown, { class: "h-[20px] w-[20px]" })]
      );
    },
    cell: ({ row }) => h(
      "div",
      { class: "text-center" },
      useMyFormatPrice(row.getValue("plan")) + "\u20BD"
    )
  },
  // % от плана
  {
    accessorKey: "salesToPlan",
    ruName: "% \u043E\u0442 \u043F\u043B\u0430\u043D\u0430",
    header: ({ column }) => {
      return h(
        _sfc_main$9,
        {
          variant: "ghost",
          onClick: () => column.toggleSorting(column.getIsSorted() === "asc"),
          class: "text-wrap h-full"
        },
        () => ["% \u043E\u0442 \u043F\u043B\u0430\u043D\u0430", h(ArrowUpDown, { class: "h-[20px] w-[20px]" })]
      );
    },
    cell: ({ row }) => h("div", { class: "text-center" }, row.getValue("salesToPlan") + "%")
  },
  // Остаток до плана
  {
    accessorKey: "remainder",
    ruName: "\u041E\u0441\u0442\u0430\u0442\u043E\u043A \u0434\u043E \u043F\u043B\u0430\u043D\u0430",
    header: ({ column }) => {
      return h(
        _sfc_main$9,
        {
          variant: "ghost",
          onClick: () => column.toggleSorting(column.getIsSorted() === "asc"),
          class: "text-wrap h-full"
        },
        () => [
          "\u041E\u0441\u0442\u0430\u0442\u043E\u043A \u0434\u043E \u043F\u043B\u0430\u043D\u0430",
          h(ArrowUpDown, { class: "h-[20px] w-[20px]" })
        ]
      );
    },
    cell: ({ row }) => h(
      "div",
      { class: "text-center" },
      useMyFormatPrice(row.getValue("remainder")) + "\u20BD"
    )
  },
  // Выручка
  {
    accessorKey: "receivedPayments",
    ruName: "\u0412\u044B\u0440\u0443\u0447\u043A\u0430",
    header: ({ column }) => {
      return h(
        _sfc_main$9,
        {
          variant: "ghost",
          onClick: () => column.toggleSorting(column.getIsSorted() === "asc"),
          class: "text-wrap h-full"
        },
        () => ["\u0412\u044B\u0440\u0443\u0447\u043A\u0430", h(ArrowUpDown, { class: "h-[20px] w-[20px]" })]
      );
    },
    cell: ({ row }) => h(
      "div",
      { class: "text-center" },
      useMyFormatPrice(row.getValue("receivedPayments")) + "\u20BD"
    )
  },
  // Средний чек
  {
    accessorKey: "averageBill",
    ruName: "\u0421\u0440\u0435\u0434\u043D\u0438\u0439 \u0447\u0435\u043A",
    header: ({ column }) => {
      return h(
        _sfc_main$9,
        {
          variant: "ghost",
          onClick: () => column.toggleSorting(column.getIsSorted() === "asc"),
          class: "text-wrap h-full"
        },
        () => ["\u0421\u0440\u0435\u0434\u043D\u0438\u0439 \u0447\u0435\u043A", h(ArrowUpDown, { class: "h-[20px] w-[20px]" })]
      );
    },
    cell: ({ row }) => h(
      "div",
      { class: "text-center" },
      useMyFormatPrice(row.getValue("averageBill")) + "\u20BD"
    )
  },
  // Сумма сделок
  {
    accessorKey: "dealsSales",
    ruName: "\u0421\u0443\u043C\u043C\u0430 \u0441\u0434\u0435\u043B\u043E\u043A",
    header: ({ column }) => {
      return h(
        _sfc_main$9,
        {
          variant: "ghost",
          onClick: () => column.toggleSorting(column.getIsSorted() === "asc"),
          class: "text-wrap h-full"
        },
        () => ["\u0421\u0443\u043C\u043C\u0430 \u0441\u0434\u0435\u043B\u043E\u043A", h(ArrowUpDown, { class: "h-[20px] w-[20px]" })]
      );
    },
    cell: ({ row }) => h(
      "div",
      { class: "text-center" },
      useMyFormatPrice(row.getValue("dealsSales")) + "\u20BD"
    )
  },
  // Кол-во сделок
  {
    accessorKey: "dealsAmount",
    ruName: "\u041A\u043E\u043B-\u0432\u043E \u0441\u0434\u0435\u043B\u043E\u043A",
    header: ({ column }) => {
      return h(
        _sfc_main$9,
        {
          variant: "ghost",
          onClick: () => column.toggleSorting(column.getIsSorted() === "asc"),
          class: "text-wrap h-full"
        },
        () => ["\u041A\u043E\u043B-\u0432\u043E \u0441\u0434\u0435\u043B\u043E\u043A", h(ArrowUpDown, { class: "h-[20px] w-[20px]" })]
      );
    },
    cell: ({ row }) => h("div", { class: "text-center" }, row.getValue("dealsAmount"))
  },
  // Допы (сумма)
  {
    accessorKey: "dopsSales",
    ruName: "\u0414\u043E\u043F\u044B (\u0441\u0443\u043C\u043C\u0430)",
    header: ({ column }) => {
      return h(
        _sfc_main$9,
        {
          variant: "ghost",
          onClick: () => column.toggleSorting(column.getIsSorted() === "asc"),
          class: "text-wrap h-full"
        },
        () => ["\u0414\u043E\u043F\u044B (\u0441\u0443\u043C\u043C\u0430)", h(ArrowUpDown, { class: "h-[20px] w-[20px]" })]
      );
    },
    cell: ({ row }) => h(
      "div",
      { class: "text-center" },
      useMyFormatPrice(row.getValue("dopsSales")) + "\u20BD"
    )
  },
  // Процент допов от продаж
  {
    accessorKey: "dopsToSales",
    ruName: "% \u043E\u0442 \u043F\u0440\u043E\u0434\u0430\u0436",
    header: ({ column }) => {
      return h(
        _sfc_main$9,
        {
          variant: "ghost",
          onClick: () => column.toggleSorting(column.getIsSorted() === "asc"),
          class: "text-wrap h-full"
        },
        () => [
          "\u0414\u043E\u043F\u044B \u043A \u043F\u0440\u043E\u0434\u0430\u0436\u0430\u043C (%)",
          h(ArrowUpDown, { class: "h-[20px] w-[20px]" })
        ]
      );
    },
    cell: ({ row }) => h("div", { class: "text-center" }, row.getValue("dopsToSales") + "%")
  },
  // Кол-во допов
  {
    accessorKey: "dopsAmount",
    ruName: "\u041A\u043E\u043B-\u0432\u043E \u0434\u043E\u043F\u043E\u0432",
    header: ({ column }) => {
      return h(
        _sfc_main$9,
        {
          variant: "ghost",
          onClick: () => column.toggleSorting(column.getIsSorted() === "asc"),
          class: "text-wrap h-full"
        },
        () => ["\u041A\u043E\u043B-\u0432\u043E \u0434\u043E\u043F\u043E\u0432", h(ArrowUpDown, { class: "h-[20px] w-[20px]" })]
      );
    },
    cell: ({ row }) => h("div", { class: "text-center" }, row.getValue("dopsAmount"))
  },
  // Продаж без дизайнеров
  {
    accessorKey: "dealsSalesWithoutDesigners",
    ruName: "\u041F\u0440\u043E\u0434\u0430\u0436 \u0431\u0435\u0437 \u0434\u0438\u0437\u0430\u0439\u043D\u0435\u0440\u043E\u0432",
    header: ({ column }) => {
      return h(
        _sfc_main$9,
        {
          variant: "ghost",
          onClick: () => column.toggleSorting(column.getIsSorted() === "asc"),
          class: "text-wrap h-full"
        },
        () => [
          "\u041F\u0440\u043E\u0434\u0430\u0436 \u0431\u0435\u0437 \u0434\u0438\u0437\u0430\u0439\u043D\u0435\u0440\u043E\u0432",
          h(ArrowUpDown, { class: "h-[20px] w-[20px]" })
        ]
      );
    },
    cell: ({ row }) => h(
      "div",
      { class: "text-center" },
      useMyFormatPrice(row.getValue("dealsSalesWithoutDesigners")) + "\u20BD"
    )
  },
  // Сделки без дизайнеров (количество)
  {
    accessorKey: "dealsWithoutDesigners",
    ruName: "\u0421\u0434\u0435\u043B\u043A\u0438 \u0431\u0435\u0437 \u0434\u0438\u0437\u0430\u0439\u043D\u0435\u0440\u043E\u0432",
    header: ({ column }) => {
      return h(
        _sfc_main$9,
        {
          variant: "ghost",
          onClick: () => column.toggleSorting(column.getIsSorted() === "asc"),
          class: "text-wrap h-full"
        },
        () => [
          "\u0421\u0434\u0435\u043B\u043A\u0438 \u0431\u0435\u0437 \u0434\u0438\u0437\u0430\u0439\u043D\u0435\u0440\u043E\u0432",
          h(ArrowUpDown, { class: "h-[20px] w-[20px]" })
        ]
      );
    },
    cell: ({ row }) => h("div", { class: "text-center" }, row.getValue("dealsWithoutDesigners"))
  },
  // Сделки день в день (количество)
  {
    accessorKey: "dealsDayToDayCount",
    ruName: "\u0421\u0434\u0435\u043B\u043A\u0438 \u0434\u0435\u043D\u044C \u0432 \u0434\u0435\u043D\u044C",
    header: ({ column }) => {
      return h(
        _sfc_main$9,
        {
          variant: "ghost",
          onClick: () => column.toggleSorting(column.getIsSorted() === "asc"),
          class: "text-wrap h-full"
        },
        () => [
          "\u0421\u0434\u0435\u043B\u043A\u0438 \u0434\u0435\u043D\u044C \u0432 \u0434\u0435\u043D\u044C",
          h(ArrowUpDown, { class: "h-[20px] w-[20px]" })
        ]
      );
    },
    cell: ({ row }) => h("div", { class: "text-center" }, row.getValue("dealsDayToDayCount"))
  },
  // Заявки (количество)
  {
    accessorKey: "calls",
    ruName: "\u0417\u0430\u044F\u0432\u043A\u0438",
    header: ({ column }) => {
      return h(
        _sfc_main$9,
        {
          variant: "ghost",
          onClick: () => column.toggleSorting(column.getIsSorted() === "asc"),
          class: "text-wrap h-full"
        },
        () => [
          "\u0417\u0430\u044F\u0432\u043A\u0438",
          h(ArrowUpDown, { class: "h-[20px] w-[20px]" })
        ]
      );
    },
    cell: ({ row }) => h("div", { class: "text-center" }, row.getValue("calls"))
  },
  // макеты  (количество)
  {
    accessorKey: "makets",
    ruName: "\u041C\u0430\u043A\u0435\u0442\u044B",
    header: ({ column }) => {
      return h(
        _sfc_main$9,
        {
          variant: "ghost",
          onClick: () => column.toggleSorting(column.getIsSorted() === "asc"),
          class: "text-wrap h-full"
        },
        () => [
          "\u041C\u0430\u043A\u0435\u0442\u044B",
          h(ArrowUpDown, { class: "h-[20px] w-[20px]" })
        ]
      );
    },
    cell: ({ row }) => h("div", { class: "text-center" }, row.getValue("makets"))
  },
  // макеты день в день  (количество)
  {
    accessorKey: "maketsDayToDay",
    ruName: "\u041C\u0430\u043A\u0435\u0442\u044B \u0434\u0435\u043D\u044C \u0432 \u0434\u0435\u043D\u044C",
    header: ({ column }) => {
      return h(
        _sfc_main$9,
        {
          variant: "ghost",
          onClick: () => column.toggleSorting(column.getIsSorted() === "asc"),
          class: "text-wrap h-full"
        },
        () => [
          "\u041C\u0430\u043A\u0435\u0442\u044B \u0434\u0435\u043D\u044C \u0432 \u0434\u0435\u043D\u044C",
          h(ArrowUpDown, { class: "h-[20px] w-[20px]" })
        ]
      );
    },
    cell: ({ row }) => h("div", { class: "text-center" }, row.getValue("maketsDayToDay"))
  },
  // Конверсия из заявки в макет  (количество)
  {
    accessorKey: "conversionMaket",
    ruName: "\u041A\u043E\u043D\u0432\u0435\u0440\u0441\u0438\u044F \u0438\u0437 \u0437\u0430\u044F\u0432\u043A\u0438 \u0432 \u043C\u0430\u043A\u0435\u0442",
    header: ({ column }) => {
      return h(
        _sfc_main$9,
        {
          variant: "ghost",
          onClick: () => column.toggleSorting(column.getIsSorted() === "asc"),
          class: "text-wrap h-full"
        },
        () => [
          "\u041A\u043E\u043D\u0432\u0435\u0440\u0441\u0438\u044F \u0438\u0437 \u0437\u0430\u044F\u0432\u043A\u0438 \u0432 \u043C\u0430\u043A\u0435\u0442",
          h(ArrowUpDown, { class: "h-[20px] w-[20px]" })
        ]
      );
    },
    cell: ({ row }) => h("div", { class: "text-center" }, row.getValue("conversionMaket") + "%")
  },
  // Конверсия из заявки в макет  (количество)
  {
    accessorKey: "conversionMaketDayToDay",
    ruName: "\u041A\u043E\u043D\u0432\u0435\u0440\u0441\u0438\u044F \u0438\u0437 \u0437\u0430\u044F\u0432\u043A\u0438 \u0432 \u043C\u0430\u043A\u0435\u0442 \u0434\u0435\u043D\u044C \u0432 \u0434\u0435\u043D\u044C",
    header: ({ column }) => {
      return h(
        _sfc_main$9,
        {
          variant: "ghost",
          onClick: () => column.toggleSorting(column.getIsSorted() === "asc"),
          class: "text-wrap h-full"
        },
        () => [
          "\u041A\u043E\u043D\u0432\u0435\u0440\u0441\u0438\u044F \u0438\u0437 \u0437\u0430\u044F\u0432\u043A\u0438 \u0432 \u043C\u0430\u043A\u0435\u0442 \u0434\u0435\u043D\u044C \u0432 \u0434\u0435\u043D\u044C",
          h(ArrowUpDown, { class: "h-[20px] w-[20px]" })
        ]
      );
    },
    cell: ({ row }) => h("div", { class: "text-center" }, row.getValue("conversionMaketDayToDay") + "%")
  },
  // Конверсия из макета в продажу   (количество)
  {
    accessorKey: "conversionToSale",
    ruName: "\u041A\u043E\u043D\u0432\u0435\u0440\u0441\u0438\u044F \u0438\u0437 \u043C\u0430\u043A\u0435\u0442\u0430 \u0432 \u043F\u0440\u043E\u0434\u0430\u0436\u0443",
    header: ({ column }) => {
      return h(
        _sfc_main$9,
        {
          variant: "ghost",
          onClick: () => column.toggleSorting(column.getIsSorted() === "asc"),
          class: "text-wrap h-full"
        },
        () => [
          "\u041A\u043E\u043D\u0432\u0435\u0440\u0441\u0438\u044F \u0438\u0437 \u043C\u0430\u043A\u0435\u0442\u0430 \u0432 \u043F\u0440\u043E\u0434\u0430\u0436\u0443",
          h(ArrowUpDown, { class: "h-[20px] w-[20px]" })
        ]
      );
    },
    cell: ({ row }) => h("div", { class: "text-center" }, row.getValue("conversionToSale") + "%")
  },
  // Рабочая область
  {
    accessorKey: "workSpaceId",
    enableHiding: false,
    // header: "Отдел",
    ruName: "\u041E\u0442\u0434\u0435\u043B",
    header: () => h("div", { class: "text-center" }, ""),
    cell: () => h("div", { class: "text-center" }, ""),
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    }
  },
  // Группа
  {
    accessorKey: "groupId",
    enableHiding: false,
    // header: "Группа",
    ruName: "\u0413\u0440\u0443\u043F\u043F\u0430",
    header: () => h("div", { class: "text-center" }, ""),
    cell: () => h("div", { class: "text-center" }, ""),
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    }
  },
  // Группа
  {
    accessorKey: "managerId",
    enableHiding: false,
    // header: "Группа",
    ruName: "\u041C\u0435\u043D\u0435\u0434\u0436\u0435\u0440",
    header: () => h("div", { class: "text-center" }, ""),
    cell: () => h("div", { class: "text-center" }, ""),
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    }
  }
];
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { $useApi } = useNuxtApp();
    useHead({
      title: "\u041F\u043B\u0430\u043D\u044B | Easy CRM"
    });
    const period = ref(
      (/* @__PURE__ */ new Date()).toISOString().slice(0, 7)
      //'этот месяц'
    );
    const plans = ref([]);
    const totalsInfo = ref([
      {
        title: "\u041E\u0431\u0449\u0438\u0439 \u043F\u043B\u0430\u043D",
        value: "0",
        content: "",
        footer: ""
      },
      {
        title: "\u041F\u0440\u043E\u0434\u0430\u0436\u0438",
        value: "0",
        content: "",
        footer: ""
      },
      {
        title: "\u0412\u044B\u0440\u0443\u0447\u043A\u0430(\u0424\u0430\u043A\u0442)",
        value: "0",
        content: "",
        footer: ""
      },
      {
        title: "\u0421\u0434\u0435\u043B\u043A\u0438",
        value: "0",
        content: "",
        footer: ""
      },
      {
        title: "\u0414\u043E\u043F. \u0443\u0441\u043B\u0443\u0433\u0438",
        value: "0",
        content: "",
        footer: ""
      }
    ]);
    const filters = ref({ workspaces: [], groups: [], managers: [] });
    const { data: dashboardData } = ([__temp, __restore] = withAsyncContext(() => $useApi.get("/dashboards/deals")), __temp = await __temp, __restore(), __temp);
    filters.value = {
      workspaces: (dashboardData == null ? void 0 : dashboardData.workSpaces) || [],
      groups: (dashboardData == null ? void 0 : dashboardData.groups) || [],
      managers: (dashboardData == null ? void 0 : dashboardData.managers) || []
    };
    const getDatas = async () => {
      try {
        const { data } = await $useApi.get("/dashboards/managers", {
          params: {
            period: period.value
          }
        });
        plans.value = data || [];
        const ids = data.map((e) => e.id);
        calcTotals(ids);
      } catch (e) {
        console.log(e);
      }
    };
    const updateTotals = (totals) => {
      totalsInfo.value = [
        {
          title: "\u041E\u0431\u0449\u0438\u0439 \u043F\u043B\u0430\u043D",
          value: useMyFormatPrice(totals.totalPlan) + "\u20BD",
          content: "\u041E\u0441\u0442\u0430\u0442\u043E\u043A",
          footer: useMyFormatPrice(totals.remainder) + "\u20BD"
        },
        {
          title: "\u041F\u0440\u043E\u0434\u0430\u0436\u0438",
          value: useMyFormatPrice(totals.totalSales) + "\u20BD",
          content: "\u041F\u0440\u043E\u0446\u0435\u043D\u0442 \u043E\u0442 \u043F\u043B\u0430\u043D\u0430",
          footer: totals.salesToPlan.toFixed() + "%"
        },
        {
          title: "\u0412\u044B\u0440\u0443\u0447\u043A\u0430(\u0424\u0430\u043A\u0442)",
          value: useMyFormatPrice(totals.receivedPayments) + "\u20BD",
          content: "\u0421\u0440\u0435\u0434\u043D\u0438\u0439 \u0447\u0435\u043A",
          footer: useMyFormatPrice(+totals.averageBill.toFixed()) + "\u20BD"
        },
        {
          title: "\u0421\u0434\u0435\u043B\u043A\u0438",
          value: useMyFormatPrice(totals.dealsSales) + "\u20BD",
          content: "\u041A\u043E\u043B\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u0441\u0434\u0435\u043B\u043E\u043A",
          footer: totals.dealsAmount.toString()
        },
        {
          title: "\u0414\u043E\u043F. \u0443\u0441\u043B\u0443\u0433\u0438",
          value: useMyFormatPrice(totals.dopsSales) + "\u20BD",
          content: "\u041F\u0440\u043E\u0446\u0435\u043D\u0442 \u043E\u0442 \u043F\u0440\u043E\u0434\u0430\u0436",
          footer: totals.dopsToSales.toFixed() + "%"
        }
      ];
    };
    const calcTotals = (ids) => {
      const pl = plans.value.filter((p) => ids.includes(p.id));
      console.log("sdasdasda");
      const dealsAmount = pl.reduce((a, b) => a + b.dealsAmount, 0);
      const totalPlan = pl.reduce((a, b) => a + b.plan, 0);
      const totalSales = pl.reduce((a, b) => a + b.totalSales, 0);
      const remainder = totalPlan - totalSales;
      const salesToPlan = totalPlan ? totalSales / totalPlan * 100 : 0;
      const dealsSales = pl.reduce((a, b) => a + b.dealsSales, 0);
      const averageBill = dealsSales / dealsAmount || 0;
      const dopsSales = pl.reduce((a, b) => a + b.dopsSales, 0);
      const receivedPayments = pl.reduce((a, b) => a + b.receivedPayments, 0);
      const dopsToSales = dopsSales / totalSales * 100 || 0;
      updateTotals({
        dealsAmount,
        totalPlan,
        remainder,
        totalSales,
        receivedPayments,
        salesToPlan,
        averageBill,
        dealsSales,
        dopsSales,
        dopsToSales
      });
    };
    const handlePlanSet = (event) => {
      const index = plans.value.findIndex((m) => m.managerId === event.managerId);
      if (index !== -1) {
        plans.value[index].plan = event.newPlan;
        plans.value[index].remainder = event.newPlan - plans.value[index].totalSales;
        plans.value[index].salesToPlan = event.newPlan ? +(plans.value[index].totalSales / event.newPlan * 100).toFixed() : 0;
        plans.value = [...plans.value];
      }
    };
    watch(period, async () => {
      await getDatas();
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_LayoutSidebar = _sfc_main$2;
      const _component_UiCard = _sfc_main$3;
      const _component_UiCardHeader = _sfc_main$1$1;
      const _component_UiCardDescription = _sfc_main$4;
      const _component_UiCardTitle = _sfc_main$5;
      const _component_UiCardContent = _sfc_main$6;
      const _component_UiCardFooter = _sfc_main$7;
      const _component_UiInput = _sfc_main$8;
      const _component_MyManagersDataTable = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative h-screen hidden-scrollbar" }, _attrs))}><div class="w-full fixed z-10">`);
      _push(ssrRenderComponent(_component_LayoutSidebar, null, null, _parent));
      _push(`</div><div class="h-[full] flex p-4 gap-4 mx-[auto] max-w-[2048px] pt-16"><div class="flex flex-col gap-4 min-w-[1050px] w-full"><div class="flex gap-4"><!--[-->`);
      ssrRenderList(unref(totalsInfo), (item) => {
        _push(ssrRenderComponent(_component_UiCard, {
          key: item.title,
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
                          _push4(`${ssrInterpolate(item.title)}`);
                        } else {
                          return [
                            createTextVNode(toDisplayString(item.title), 1)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_component_UiCardTitle, { class: "text-3xl font-semibold whitespace-nowrap" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`${ssrInterpolate(item.value)}`);
                        } else {
                          return [
                            createTextVNode(toDisplayString(item.value), 1)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_UiCardDescription, null, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(item.title), 1)
                        ]),
                        _: 2
                      }, 1024),
                      createVNode(_component_UiCardTitle, { class: "text-3xl font-semibold whitespace-nowrap" }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(item.value), 1)
                        ]),
                        _: 2
                      }, 1024)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_UiCardContent, { class: "pb-1 pl-3" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="text-xs text-muted-foreground"${_scopeId2}>${ssrInterpolate(item.content)}</div>`);
                  } else {
                    return [
                      createVNode("div", { class: "text-xs text-muted-foreground" }, toDisplayString(item.content), 1)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_UiCardFooter, { class: "pl-3 pb-1" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(item.footer)}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(item.footer), 1)
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
                        createTextVNode(toDisplayString(item.title), 1)
                      ]),
                      _: 2
                    }, 1024),
                    createVNode(_component_UiCardTitle, { class: "text-3xl font-semibold whitespace-nowrap" }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(item.value), 1)
                      ]),
                      _: 2
                    }, 1024)
                  ]),
                  _: 2
                }, 1024),
                createVNode(_component_UiCardContent, { class: "pb-1 pl-3" }, {
                  default: withCtx(() => [
                    createVNode("div", { class: "text-xs text-muted-foreground" }, toDisplayString(item.content), 1)
                  ]),
                  _: 2
                }, 1024),
                createVNode(_component_UiCardFooter, { class: "pl-3 pb-1" }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(item.footer), 1)
                  ]),
                  _: 2
                }, 1024)
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></div><div class="">`);
      _push(ssrRenderComponent(_component_UiInput, {
        modelValue: unref(period),
        "onUpdate:modelValue": ($event) => isRef(period) ? period.value = $event : null,
        type: "month",
        class: "w-[180px]"
      }, null, _parent));
      _push(`</div><div class="mt-[-8px]">`);
      _push(ssrRenderComponent(_component_MyManagersDataTable, {
        key: unref(plans).length,
        columns: unref(managersPlanColumns),
        data: unref(plans),
        filters: unref(filters),
        onTableSorted: (ids) => calcTotals(ids),
        onIsPlanSet: handlePlanSet
      }, null, _parent));
      _push(`</div></div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/managers/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-HFHQ5E-B.mjs.map
